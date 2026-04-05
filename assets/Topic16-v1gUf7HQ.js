import{j as e}from"./index-BXlhguQt.js";import{c as i}from"./clsx-B-dksMZM.js";import{T as s}from"./TeacherSukantaHui-DTwicIoV.js";import{E as n}from"./EditableCCodeBlock-BYDr4J5P.js";import"./git-branch-D-rwJeOz.js";import"./index-DAzmlnHY.js";import"./file-code-DvrZGHOf.js";import"./type-B7fVRfrN.js";import"./refresh-cw-C774EOhC.js";import"./copy-ojBqBM7b.js";import"./download-B1njA82h.js";const l=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
int main() {\r
    int *ptr = (int*)malloc(sizeof(int));\r
    if (!ptr) {\r
        fprintf(stderr, "Allocation failed\\n");\r
        return 1;\r
    }\r
    *ptr = 42;\r
\r
    printf("Pointer address: %p\\n", (void*)ptr);\r
    printf("Value at address: %d\\n", *ptr);\r
\r
    free(ptr);\r
    printf("After free, pointer still points to: %p\\n", (void*)ptr);\r
    // Never dereference ptr after free!\r
\r
    return 0;\r
}`,a=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
static int alloc_count = 0;\r
static int free_count = 0;\r
\r
void* my_malloc(size_t size) {\r
    void *p = malloc(size);\r
    alloc_count++;\r
    fprintf(stderr, "[DEBUG] malloc(%zu) = %p (total allocs: %d)\\n", \r
            size, p, alloc_count);\r
    return p;\r
}\r
\r
void my_free(void *p) {\r
    free_count++;\r
    fprintf(stderr, "[DEBUG] free(%p) (total frees: %d)\\n", p, free_count);\r
    free(p);\r
}\r
\r
int main() {\r
    int *a = my_malloc(sizeof(int));\r
    int *b = my_malloc(sizeof(int));\r
    int *c = my_malloc(sizeof(int));\r
\r
    my_free(a);\r
    my_free(b);\r
    // forget to free c -> leak\r
\r
    if (alloc_count != free_count)\r
        fprintf(stderr, "[WARNING] Memory leak detected: %d allocations, %d frees\\n",\r
                alloc_count, free_count);\r
    else\r
        printf("No leaks detected\\n");\r
\r
    return 0;\r
}`,o=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
// Simulate a function that allocates but forgets to free on error path\r
int process_data(int fail) {\r
    int *data = (int*)malloc(100 * sizeof(int));\r
    if (!data) return -1;\r
\r
    printf("Allocated at %p\\n", (void*)data);\r
\r
    if (fail) {\r
        printf("Error path taken, but forgot to free\\n");\r
        return -1;   // leak here!\r
    }\r
\r
    free(data);\r
    printf("Freed %p\\n", (void*)data);\r
    return 0;\r
}\r
\r
int main() {\r
    printf("Call with success:\\n");\r
    process_data(0);\r
    printf("\\nCall with failure (leak):\\n");\r
    process_data(1);\r
    return 0;\r
}`,d=`
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
`,k=()=>{const r=["0ms","100ms","200ms","300ms","400ms","500ms","600ms","700ms","800ms","900ms","1000ms"],t=()=>i("animate-fade-slide-up","opacity-0");return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:d}),e.jsxs("div",{className:"w-full max-w-5xl mx-auto px-4 py-8 space-y-12 dark:bg-gray-900 bg-gray-50 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:[e.jsxs("div",{className:t(),style:{animationDelay:r[0]},children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400",children:"Basic Debugging Using printf & Pointer Tracking"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 mt-2 leading-relaxed",children:"Simple but effective techniques to peek inside your program's memory."})]}),e.jsxs("section",{className:t(),style:{animationDelay:r[1]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4 mb-4",children:"The Simplest Debugger"}),e.jsxs("p",{className:"leading-relaxed mb-3",children:["Before using advanced tools like Valgrind or GDB, the humble ",e.jsx("code",{children:"printf"})," is often the fastest way to understand what your code is doing. By strategically placing print statements, you can trace the flow of execution, inspect variable values, and verify pointer addresses."]}),e.jsxs("p",{className:"leading-relaxed",children:["When dealing with dynamic memory, printing pointer addresses and the values they point to helps you track allocations, detect double frees, and find use‑after‑free bugs. This topic shows you how to use ",e.jsx("code",{children:"printf"})," effectively for memory debugging."]})]}),e.jsxs("section",{className:t(),style:{animationDelay:r[2]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-4 mb-4",children:"📢 Why printf Is a Powerful Debugging Tool"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Immediate feedback:"})," No setup required – just add a line of code."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Works everywhere:"})," On embedded systems, bare metal, or any platform with a console."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No interference:"})," Prints the actual state of your program without altering execution (except for timing)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Easy to control:"})," Wrap prints with ",e.jsx("code",{children:"#ifdef DEBUG"})," to enable/disable."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Combines with tools:"})," Print allocation IDs, then cross‑reference with Valgrind output."]})]})})]}),e.jsxs("section",{className:t(),style:{animationDelay:r[3]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-4 mb-4",children:"🔍 Key Debugging Techniques"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-medium mb-2",children:"1. Print Pointer Addresses"}),e.jsx("div",{className:"font-mono text-sm p-2 bg-gray-100 dark:bg-gray-700 rounded mb-3",children:'printf("ptr = %p\\n", (void*)ptr);'}),e.jsx("p",{className:"mb-3",children:"Track where each allocation lives and verify that freed memory isn't reused accidentally."}),e.jsx("h3",{className:"text-xl font-medium mb-2",children:"2. Print Values Before/After Free"}),e.jsxs("div",{className:"font-mono text-sm p-2 bg-gray-100 dark:bg-gray-700 rounded mb-3",children:['printf("Before free: *ptr = %d\\n", *ptr);',e.jsx("br",{}),"free(ptr);",e.jsx("br",{}),'printf("After free: ptr = %p\\n", (void*)ptr); // shows dangling address']}),e.jsx("h3",{className:"text-xl font-medium mb-2",children:"3. Track Allocation Counts"}),e.jsxs("div",{className:"font-mono text-sm p-2 bg-gray-100 dark:bg-gray-700 rounded mb-3",children:["static int allocations = 0, frees = 0;",e.jsx("br",{}),'allocations++; printf("Alloc #%d at %p\\n", allocations, ptr);']}),e.jsx("p",{children:"Detect leaks by comparing counts at program exit."}),e.jsx("h3",{className:"text-xl font-medium mb-2",children:"4. Use Function Entry/Exit Logs"}),e.jsxs("div",{className:"font-mono text-sm p-2 bg-gray-100 dark:bg-gray-700 rounded",children:['printf("Entering function %s\\n", __func__);',e.jsx("br",{}),"// ... code ...",e.jsx("br",{}),'printf("Exiting %s\\n", __func__);']})]})]}),e.jsxs("section",{className:t(),style:{animationDelay:r[4]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-4 mb-4",children:"🖼️ printf Debugging in Action"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md transition-all duration-300 hover:shadow-xl",children:e.jsxs("svg",{viewBox:"0 0 800 200",className:"w-full h-auto","aria-label":"printf debugging flow",children:[e.jsx("rect",{width:"800",height:"200",fill:"transparent"}),e.jsx("rect",{x:"50",y:"30",width:"150",height:"40",fill:"rgba(59,130,246,0.2)",stroke:"#3b82f6",strokeWidth:"2",rx:"4"}),e.jsx("text",{x:"80",y:"55",fill:"currentColor",className:"text-xs",children:"malloc()"}),e.jsx("rect",{x:"250",y:"30",width:"150",height:"40",fill:"rgba(34,197,94,0.2)",stroke:"#22c55e",strokeWidth:"2",rx:"4"}),e.jsx("text",{x:"280",y:"55",fill:"currentColor",className:"text-xs",children:'printf("ptr=%p", ptr)'}),e.jsx("rect",{x:"450",y:"30",width:"150",height:"40",fill:"rgba(168,85,247,0.2)",stroke:"#a855f7",strokeWidth:"2",rx:"4"}),e.jsx("text",{x:"480",y:"55",fill:"currentColor",className:"text-xs",children:"free(ptr)"}),e.jsx("rect",{x:"650",y:"30",width:"100",height:"40",fill:"rgba(239,68,68,0.2)",stroke:"#ef4444",strokeWidth:"2",rx:"4"}),e.jsx("text",{x:"675",y:"55",fill:"currentColor",className:"text-xs",children:'printf("freed")'}),e.jsx("line",{x1:"200",y1:"50",x2:"250",y2:"50",stroke:"#6b7280",strokeWidth:"2"}),e.jsx("line",{x1:"400",y1:"50",x2:"450",y2:"50",stroke:"#6b7280",strokeWidth:"2"}),e.jsx("line",{x1:"600",y1:"50",x2:"650",y2:"50",stroke:"#6b7280",strokeWidth:"2"}),e.jsx("text",{x:"70",y:"120",fill:"currentColor",className:"text-xs",children:"Output:"}),e.jsx("rect",{x:"70",y:"130",width:"660",height:"50",fill:"rgba(0,0,0,0.05)",stroke:"none",rx:"4"}),e.jsx("text",{x:"80",y:"155",fill:"currentColor",className:"text-xs font-mono",children:"ptr = 0x7f8a3c001a20"}),e.jsx("text",{x:"80",y:"170",fill:"currentColor",className:"text-xs font-mono",children:"freed"})]})})]}),e.jsxs("section",{className:t(),style:{animationDelay:r[5]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-red-500 pl-4 mb-4",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(n,{title:"Example 1: Tracking pointers with printf",initialCode:l}),e.jsx(n,{title:"Example 2: Allocation counter",initialCode:a}),e.jsx(n,{title:"Example 3: Debugging a memory leak",initialCode:o})]})]}),e.jsxs("section",{className:t(),style:{animationDelay:r[6]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-orange-500 pl-4 mb-4",children:"⚠️ Common Pitfalls with printf Debugging"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200 bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Missing newline:"})," Output may not appear immediately; always use ",e.jsx("code",{children:"\\n"})," or ",e.jsx("code",{children:"fflush(stdout)"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Printing too much:"})," Can overwhelm the console and hide important messages."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Performance impact:"})," In tight loops, excessive printing can change timing and hide race conditions."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to cast pointers:"})," Use ",e.jsx("code",{children:"(void*)ptr"})," to avoid warnings."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Debug prints left in production code:"})," Use conditional compilation (",e.jsx("code",{children:"#ifdef DEBUG"}),") to remove them."]})]})]}),e.jsxs("section",{className:t(),style:{animationDelay:r[7]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-4 mb-4",children:"✅ Best Practices"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{children:["✔️ Use ",e.jsx("code",{children:"stderr"})," for debugging messages (",e.jsx("code",{children:"fprintf(stderr, ...)"}),") to avoid interfering with program output."]}),e.jsxs("li",{children:["✔️ Add a unique tag to each print (e.g., ",e.jsx("code",{children:"[DEBUG]"}),") for easy filtering."]}),e.jsxs("li",{children:["✔️ Print function names using ",e.jsx("code",{children:"__func__"})," to trace execution flow."]}),e.jsx("li",{children:"✔️ For pointer tracking, print both the pointer and the value it points to (if valid)."}),e.jsxs("li",{children:["✔️ Use a macro like ",e.jsx("code",{children:"DEBUG_PRINT(fmt, ...)"})," that can be turned off globally."]})]})})]}),e.jsxs("section",{className:t(),style:{animationDelay:r[8]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-4 mb-4",children:"📋 Mini Checklist"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:e.jsxs("ul",{className:"space-y-1",children:[e.jsxs("li",{children:["☐ I can use ",e.jsx("code",{children:"printf"})," to print pointer addresses."]}),e.jsx("li",{children:"☐ I understand the importance of flushing output or adding newlines."}),e.jsx("li",{children:"☐ I can track allocations and frees with counters."}),e.jsx("li",{children:"☐ I know how to conditionally enable debug prints."}),e.jsx("li",{children:"☐ I can identify potential leaks by comparing allocation and free counts."})]})})]}),e.jsxs("section",{className:t(),style:{animationDelay:r[9]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4 mb-4",children:"💡 Hint Section"}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl",children:[e.jsx("p",{className:"italic",children:"Observe carefully..."}),e.jsxs("ul",{className:"list-disc list-inside mt-2",children:[e.jsx("li",{children:"In the pointer tracking example, what happens if you print the value after free? Try to explain the output."}),e.jsx("li",{children:"How would you modify the allocation counter to also track the sizes of allocations?"}),e.jsx("li",{children:"What would be the effect of printing inside a loop that runs millions of times? How can you reduce the output?"})]})]})]}),e.jsxs("section",{className:t(),style:{animationDelay:r[10]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-4 mb-4",children:"🔧 Professional Tips & Tricks"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow space-y-2",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"🎯 Debugging mindset:"})," Add a debug flag (e.g., ",e.jsx("code",{children:"-DDEBUG"}),") and use ",e.jsx("code",{children:"#ifdef DEBUG"})," to enable prints only when needed."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"📦 Logging library:"})," For larger projects, wrap ",e.jsx("code",{children:"printf"})," in a logging library with levels (error, warning, info, debug)."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"🧹 Clean code:"})," Remove debug prints before committing code, or keep them behind a flag that's off by default."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"📏 Visualize:"})," Redirect debug output to a file and use tools like ",e.jsx("code",{children:"grep"})," or ",e.jsx("code",{children:"awk"})," to analyze it."]})]})]}),e.jsx(s,{note:"printf debugging is the first tool every programmer should master. It's simple, direct, and works everywhere. When you're stuck, add a print before and after the suspect code – it often reveals the problem. But remember: it's a temporary tool; clean up your debug prints once the bug is fixed!"})]})]})};export{k as default};
