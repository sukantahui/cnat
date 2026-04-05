import{j as e}from"./index-BXlhguQt.js";import{c as t}from"./clsx-B-dksMZM.js";import{T as l}from"./TeacherSukantaHui-DTwicIoV.js";import{E as n}from"./EditableCCodeBlock-BYDr4J5P.js";import"./git-branch-D-rwJeOz.js";import"./index-DAzmlnHY.js";import"./file-code-DvrZGHOf.js";import"./type-B7fVRfrN.js";import"./refresh-cw-C774EOhC.js";import"./copy-ojBqBM7b.js";import"./download-B1njA82h.js";const a=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
int main() {\r
    int *arr = NULL;\r
    int *temp = NULL;\r
\r
    // Good: Use sizeof(*arr) and check return\r
    arr = (int*)malloc(sizeof(*arr) * 10);\r
    if (!arr) {\r
        fprintf(stderr, "Allocation failed\\n");\r
        return EXIT_FAILURE;\r
    }\r
\r
    // Good: Use arr safely\r
    arr[0] = 42;\r
    printf("%d\\n", arr[0]);\r
\r
    // Good: Set to NULL after free\r
    free(arr);\r
    arr = NULL;\r
\r
    // Good: free(NULL) is safe\r
    free(temp);   // temp is NULL, safe\r
    return EXIT_SUCCESS;\r
}`,i=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <string.h>\r
\r
int main() {\r
    // Bad: No NULL check\r
    int *p = (int*)malloc(sizeof(int));\r
    *p = 10;   // May crash if allocation failed\r
\r
    // Bad: Memory leak (forgot to free)\r
    // free(p);   // omitted → leak\r
\r
    // Bad: Double free (if we had freed once and then again)\r
    // free(p);\r
    // free(p);   // undefined behavior\r
\r
    // Bad: Use after free\r
    int *q = (int*)malloc(sizeof(int));\r
    free(q);\r
    *q = 20;   // Dangling pointer → undefined\r
\r
    // Bad: Buffer overflow\r
    char *str = (char*)malloc(5);  // space for 4 chars + null\r
    strcpy(str, "hello");          // writes 6 chars → overflow\r
\r
    // Bad: Freeing stack memory\r
    int local = 42;\r
    // free(&local);   // Would crash\r
\r
    return 0;\r
}`,o=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
int process_data() {\r
    int *a = NULL;\r
    int *b = NULL;\r
    int *c = NULL;\r
    int ret = EXIT_SUCCESS;\r
\r
    a = (int*)malloc(sizeof(*a));\r
    if (!a) { ret = EXIT_FAILURE; goto cleanup; }\r
\r
    b = (int*)malloc(sizeof(*b));\r
    if (!b) { ret = EXIT_FAILURE; goto cleanup; }\r
\r
    c = (int*)malloc(sizeof(*c));\r
    if (!c) { ret = EXIT_FAILURE; goto cleanup; }\r
\r
    // Use allocated memory\r
    *a = 10; *b = 20; *c = 30;\r
    printf("%d %d %d\\n", *a, *b, *c);\r
\r
cleanup:\r
    free(a);   // safe even if a is NULL\r
    free(b);\r
    free(c);\r
    return ret;\r
}\r
\r
int main() {\r
    if (process_data() != EXIT_SUCCESS) {\r
        fprintf(stderr, "Processing failed\\n");\r
        return EXIT_FAILURE;\r
    }\r
    return EXIT_SUCCESS;\r
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
`,N=()=>{const r=["0ms","100ms","200ms","300ms","400ms","500ms","600ms","700ms","800ms","900ms"],s=()=>t("animate-fade-slide-up","opacity-0");return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:c}),e.jsxs("div",{className:"w-full max-w-5xl mx-auto px-4 py-8 space-y-12 dark:bg-gray-900 bg-gray-50 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:[e.jsxs("div",{className:s(),style:{animationDelay:r[0]},children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400",children:"Typical Patterns & Pitfalls in Dynamic Allocation"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 mt-2 leading-relaxed",children:"What to do, what to avoid — a professional's guide to safe heap management."})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[1]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4 mb-4",children:"Patterns That Work, Pitfalls That Break"}),e.jsx("p",{className:"leading-relaxed mb-3",children:"Dynamic memory management is powerful but error‑prone. Over the years, programmers have developed reliable patterns that prevent leaks, corruption, and crashes. Equally important is knowing the common pitfalls that lead to bugs."}),e.jsx("p",{className:"leading-relaxed",children:"This topic consolidates the most important patterns and warns against the most frequent mistakes. Mastering these will make your C code robust and maintainable."})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[2]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-4 mb-4",children:"✅ Good Patterns"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:e.jsxs("ul",{className:"space-y-4",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-green-500",children:"1. Check allocation result:"})," Always verify that ",e.jsx("code",{children:"malloc"}),"/",e.jsx("code",{children:"calloc"}),"/",e.jsx("code",{children:"realloc"})," returned non‑",e.jsx("code",{children:"NULL"}),"."]}),e.jsxs("li",{children:[e.jsxs("strong",{className:"text-green-500",children:["2. Use ",e.jsx("code",{children:"sizeof(*ptr)"}),":"]})," ",e.jsx("code",{children:"ptr = malloc(sizeof(*ptr));"})," avoids type mismatches."]}),e.jsxs("li",{children:[e.jsxs("strong",{className:"text-green-500",children:["3. Set freed pointers to ",e.jsx("code",{children:"NULL"}),":"]})," Prevents accidental double free or use‑after‑free."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-green-500",children:"4. Pair allocations and frees in the same scope:"})," Easier to track ownership."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-green-500",children:"5. Use cleanup sections (goto or function):"})," Centralized error handling ensures all allocated resources are freed."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-green-500",children:"6. Grow arrays by doubling capacity:"})," Provides amortized O(1) insertion."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-green-500",children:"7. Document ownership:"})," Comments like ",e.jsx("code",{children:"// caller must free returned pointer"})," clarify responsibility."]})]})})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[3]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-red-500 pl-4 mb-4",children:"❌ Common Pitfalls"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:e.jsxs("ul",{className:"space-y-4",children:[e.jsxs("li",{children:[e.jsxs("strong",{className:"text-red-500",children:["1. Forgetting to check ",e.jsx("code",{children:"NULL"}),":"]})," Dereferencing ",e.jsx("code",{children:"NULL"})," crashes or corrupts."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-red-500",children:"2. Memory leaks:"})," Not freeing memory, especially in error paths."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-red-500",children:"3. Double free:"})," Calling ",e.jsx("code",{children:"free"})," twice on the same pointer → undefined behavior."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-red-500",children:"4. Use‑after‑free:"})," Accessing memory after it's freed → dangling pointer."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-red-500",children:"5. Buffer overflow:"})," Writing beyond allocated size, often due to off‑by‑one or missing null terminator."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-red-500",children:"6. Freeing non‑heap memory:"})," Passing stack or global address to ",e.jsx("code",{children:"free"}),"."]}),e.jsxs("li",{children:[e.jsxs("strong",{className:"text-red-500",children:["7. Incorrect ",e.jsx("code",{children:"sizeof"}),":"]})," ",e.jsx("code",{children:"malloc(10 * sizeof(int*))"})," when you meant ",e.jsx("code",{children:"int"}),"."]})]})})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[4]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-4 mb-4",children:"🖼️ Visualizing Good vs Bad"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md transition-all duration-300 hover:shadow-xl",children:e.jsxs("svg",{viewBox:"0 0 800 200",className:"w-full h-auto","aria-label":"Good vs bad patterns",children:[e.jsx("rect",{width:"800",height:"200",fill:"transparent"}),e.jsx("rect",{x:"50",y:"20",width:"320",height:"160",fill:"rgba(34,197,94,0.1)",stroke:"#22c55e",strokeWidth:"2",rx:"8"}),e.jsx("text",{x:"70",y:"45",fill:"currentColor",className:"text-sm font-semibold",children:"✅ Good Pattern"}),e.jsx("text",{x:"70",y:"75",fill:"currentColor",className:"text-xs",children:"• Check malloc return"}),e.jsx("text",{x:"70",y:"95",fill:"currentColor",className:"text-xs",children:"• Set ptr = NULL after free"}),e.jsx("text",{x:"70",y:"115",fill:"currentColor",className:"text-xs",children:"• Use sizeof(*ptr)"}),e.jsx("text",{x:"70",y:"135",fill:"currentColor",className:"text-xs",children:"• Cleanup section"}),e.jsx("text",{x:"70",y:"155",fill:"currentColor",className:"text-xs",children:"• Free in reverse order"}),e.jsx("rect",{x:"430",y:"20",width:"320",height:"160",fill:"rgba(239,68,68,0.1)",stroke:"#ef4444",strokeWidth:"2",rx:"8"}),e.jsx("text",{x:"450",y:"45",fill:"currentColor",className:"text-sm font-semibold",children:"❌ Bad Pattern"}),e.jsx("text",{x:"450",y:"75",fill:"currentColor",className:"text-xs",children:"• No NULL check"}),e.jsx("text",{x:"450",y:"95",fill:"currentColor",className:"text-xs",children:"• Forgetting free"}),e.jsx("text",{x:"450",y:"115",fill:"currentColor",className:"text-xs",children:"• Double free"}),e.jsx("text",{x:"450",y:"135",fill:"currentColor",className:"text-xs",children:"• Use after free"}),e.jsx("text",{x:"450",y:"155",fill:"currentColor",className:"text-xs",children:"• Buffer overflow"})]})})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[5]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-red-500 pl-4 mb-4",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(n,{title:"Example 1: Good patterns (safe allocation, cleanup)",initialCode:a}),e.jsx(n,{title:"Example 2: Bad patterns (memory leaks, dangling pointers)",initialCode:i}),e.jsx(n,{title:"Example 3: Cleanup pattern with goto",initialCode:o})]})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[6]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-4 mb-4",children:"📋 Best Practices Summary"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{children:["✔️ ",e.jsx("strong",{children:"Always check return values."})," Treat allocation as fallible."]}),e.jsxs("li",{children:["✔️ ",e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"sizeof(*ptr)"})]})," to avoid type mismatches."]}),e.jsxs("li",{children:["✔️ ",e.jsxs("strong",{children:["Set freed pointers to ",e.jsx("code",{children:"NULL"})]})," to prevent double free and use‑after‑free."]}),e.jsxs("li",{children:["✔️ ",e.jsx("strong",{children:"Centralize cleanup"})," with a goto‑label or a dedicated function."]}),e.jsxs("li",{children:["✔️ ",e.jsx("strong",{children:"Free in reverse order"})," to reduce fragmentation."]}),e.jsxs("li",{children:["✔️ ",e.jsx("strong",{children:"Document ownership"})," clearly in comments."]}),e.jsxs("li",{children:["✔️ ",e.jsx("strong",{children:"Use tools"})," like Valgrind, AddressSanitizer regularly."]})]})})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[7]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-4 mb-4",children:"📋 Mini Checklist"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:e.jsxs("ul",{className:"space-y-1",children:[e.jsx("li",{children:"☐ I check every allocation for NULL."}),e.jsx("li",{children:"☐ I free every allocation exactly once."}),e.jsx("li",{children:"☐ I set pointers to NULL after free."}),e.jsx("li",{children:"☐ I never use a pointer after freeing it."}),e.jsx("li",{children:"☐ I use a consistent cleanup pattern (goto cleanup)."})]})})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[8]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4 mb-4",children:"💡 Hint Section"}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl",children:[e.jsx("p",{className:"italic",children:"Think about..."}),e.jsxs("ul",{className:"list-disc list-inside mt-2",children:[e.jsx("li",{children:"In the bad patterns example, what happens if you run it with a tool like Valgrind?"}),e.jsx("li",{children:"How would you modify the cleanup pattern to handle a third allocation?"}),e.jsx("li",{children:"Why is it dangerous to rely on the system to free memory at program exit?"})]})]})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[9]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-4 mb-4",children:"🔧 Professional Tips & Tricks"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow space-y-2",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"🎯 Debugging mindset:"})," Use ",e.jsx("code",{children:"valgrind --leak-check=full"})," to catch leaks and use‑after‑free."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"📦 Code review checklist:"})," For every allocation, ensure there's a corresponding free in all code paths."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"🧹 Modern C:"})," Use ",e.jsx("code",{children:"_Static_assert"})," to verify sizes and consider using ",e.jsx("code",{children:"alloca"})," for small, short‑lived allocations."]}),e.jsxs("p",{children:[e.jsxs("strong",{children:["📏 Avoid ",e.jsx("code",{children:"realloc"})," for tiny increments:"]})," Double capacity instead to maintain O(1) amortized cost."]})]})]}),e.jsx(l,{note:"Dynamic allocation is a two‑edged sword. The patterns I've shown you are battle‑tested and will save you countless hours of debugging. Always, always free what you allocate — and set the pointer to NULL. This simple habit turns a subtle bug into a clean crash, which is infinitely easier to fix."})]})]})};export{N as default};
