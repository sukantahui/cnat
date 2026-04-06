import{j as e}from"./index-CAtQrb46.js";import{T as i}from"./TeacherSukantaHui-D3Ms7jzc.js";import{E as r}from"./EditableCCodeBlock-DMUoBfot.js";import"./git-branch-CN5U0v5N.js";import"./index-BTn8_2IB.js";import"./file-code-B6K736nA.js";import"./type-FP9ki28_.js";import"./refresh-cw-C8MlfI49.js";import"./copy-Br1dq4Gp.js";import"./download-lFgP8-S1.js";const t=`#include <stdio.h>\r
\r
void buggy_swap(int *a, int *b) {\r
    int *temp = a;   // Bug: should be int temp = *a;\r
    *a = *b;\r
    *b = *temp;\r
}\r
\r
int main() {\r
    int x = 10, y = 20;\r
    printf("Before swap: x=%d, y=%d\\n", x, y);\r
    printf("&x=%p, &y=%p\\n", (void*)&x, (void*)&y);\r
\r
    buggy_swap(&x, &y);\r
\r
    printf("After swap: x=%d, y=%d\\n", x, y);\r
    printf("&x=%p, &y=%p\\n", (void*)&x, (void*)&y);\r
\r
    // Debugging: print addresses inside swap\r
    // (We can't directly, but we can add prints in buggy_swap)\r
    return 0;\r
}`,n=`#include <stdio.h>\r
#include <string.h>\r
\r
void print_memory(void *ptr, size_t size) {\r
    unsigned char *bytes = (unsigned char*)ptr;\r
    for (size_t i = 0; i < size; i++) {\r
        printf("%02x ", bytes[i]);\r
        if ((i+1) % 16 == 0) printf("\\n");\r
    }\r
    printf("\\n");\r
}\r
\r
int main() {\r
    char buffer[10];\r
    strcpy(buffer, "Hello");\r
    printf("Buffer content: ");\r
    print_memory(buffer, sizeof(buffer));\r
\r
    // Simulate a buffer overflow (for demonstration)\r
    // strcpy(buffer, "This is too long"); // uncomment to see overflow\r
\r
    // Show that the overflow would corrupt adjacent memory\r
    int guard = 0xDEADBEEF;\r
    printf("Before overflow: guard = 0x%x\\n", guard);\r
    // Uncomment to cause overflow:\r
    // strcpy(buffer, "This is way too long and will overwrite guard");\r
    // printf("After overflow: guard = 0x%x\\n", guard);\r
\r
    return 0;\r
}`,g=()=>e.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-8 space-y-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300",children:[e.jsxs("div",{className:"animate-fade-up",style:{animationDelay:"0ms"},children:[e.jsx("h1",{className:"text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400",children:"Debugging Pointer Issues: printf & Memory Tracing"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["Pointers are powerful but error‑prone. The simplest and often most effective debugging technique is to ",e.jsx("strong",{children:"print pointer values, addresses, and memory contents"})," using ",e.jsx("code",{children:"printf"}),". Combined with memory tracing (inspecting bytes), you can uncover wild pointers, dangling references, and buffer overflows."]})]}),e.jsxs("div",{className:"animate-fade-up grid md:grid-cols-2 gap-6",style:{animationDelay:"50ms"},children:[e.jsxs("div",{className:"group rounded-xl p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🖨️ printf Debugging"}),e.jsxs("p",{className:"leading-relaxed",children:["Use ",e.jsx("code",{children:"printf"})," to inspect:"]}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 mt-2 text-sm",children:[e.jsxs("li",{children:["Pointer values (",e.jsx("code",{children:"%p"}),")"]}),e.jsxs("li",{children:["Dereferenced values (",e.jsx("code",{children:"*ptr"}),")"]}),e.jsxs("li",{children:["Addresses of variables (",e.jsx("code",{children:"&var"}),")"]}),e.jsx("li",{children:"Indices and loop counters"})]}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-2 rounded text-xs mt-2",children:'printf("ptr = %p, *ptr = %d\\n", (void*)ptr, *ptr);'})]}),e.jsxs("div",{className:"group rounded-xl p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🧠 Memory Tracing"}),e.jsx("p",{className:"leading-relaxed",children:"Trace memory byte‑by‑byte to detect:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 mt-2 text-sm",children:[e.jsx("li",{children:"Buffer overflows (look for corruption beyond bounds)"}),e.jsx("li",{children:"Uninitialized data"}),e.jsx("li",{children:"Alignment issues"})]}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-2 rounded text-xs mt-2",children:`unsigned char *bytes = (unsigned char*)ptr;
for(int i = 0; i < size; i++)
    printf("%02x ", bytes[i]);`})]})]}),e.jsxs("div",{className:"animate-fade-up rounded-xl bg-gray-50 dark:bg-gray-800/50 p-4 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700",style:{animationDelay:"100ms"},children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-center",children:"Tracing Pointer Flow"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{width:"500",height:"200",viewBox:"0 0 500 200",className:"max-w-full h-auto",children:[e.jsx("rect",{x:"30",y:"30",width:"100",height:"50",fill:"#3B82F6",fillOpacity:"0.2",stroke:"#3B82F6"}),e.jsx("text",{x:"80",y:"55",textAnchor:"middle",fontSize:"10",children:"Variable x"}),e.jsx("text",{x:"80",y:"75",textAnchor:"middle",fontSize:"8",children:"addr: 0x1000"}),e.jsx("rect",{x:"180",y:"30",width:"100",height:"50",fill:"#10B981",fillOpacity:"0.2",stroke:"#10B981"}),e.jsx("text",{x:"230",y:"55",textAnchor:"middle",fontSize:"10",children:"Pointer p"}),e.jsx("text",{x:"230",y:"75",textAnchor:"middle",fontSize:"8",children:"addr: 0x2000"}),e.jsx("path",{d:"M280 55 L130 55",stroke:"#10B981",strokeWidth:"2",markerEnd:"url(#arrowGreen)"}),e.jsx("text",{x:"320",y:"40",fontSize:"9",fill:"#3B82F6",children:'printf("&x = %p", &x);'}),e.jsx("text",{x:"320",y:"60",fontSize:"9",fill:"#10B981",children:'printf("p = %p", p);'}),e.jsx("text",{x:"320",y:"80",fontSize:"9",fill:"#F59E0B",children:'printf("*p = %d", *p);'}),e.jsx("defs",{children:e.jsx("marker",{id:"arrowGreen",markerWidth:"8",markerHeight:"8",refX:"7",refY:"4",orient:"auto",children:e.jsx("polygon",{points:"0 0, 8 4, 0 8",fill:"#10B981"})})})]})}),e.jsx("p",{className:"text-center text-sm mt-2 text-gray-600 dark:text-gray-400",children:"Print addresses and values at key points to understand pointer behaviour."})]}),e.jsxs("div",{className:"animate-fade-up space-y-8",style:{animationDelay:"150ms"},children:[e.jsxs("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"📖 Using printf for Pointer Debugging"}),e.jsxs("p",{className:"leading-relaxed",children:["Insert strategic ",e.jsx("code",{children:"printf"})," statements to observe the state before and after operations. This helps confirm that pointers point where you expect and that values change correctly."]}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2",children:`int *p = &x;
printf("Before: p=%p, *p=%d\\n", (void*)p, *p);
*p = 20;
printf("After:  p=%p, *p=%d\\n", (void*)p, *p);`}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"For array access, print the array contents before and after modifications to spot corruption."})]}),e.jsxs("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"🔍 Memory Tracing Techniques"}),e.jsxs("p",{className:"leading-relaxed",children:["When you suspect a buffer overflow or uninitialized data, print memory as raw bytes. Cast the pointer to ",e.jsx("code",{children:"unsigned char*"})," and iterate."]}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2",children:`void print_memory(void *ptr, size_t size) {
    unsigned char *bytes = (unsigned char*)ptr;
    for (size_t i = 0; i < size; i++) {
        printf("%02x ", bytes[i]);
        if ((i+1) % 16 == 0) printf("\\n");
    }
}`}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Real‑world:"})," At Barrackpore CNAT, ",e.jsx("strong",{children:"Swadeep"})," used memory tracing to discover that a ",e.jsx("code",{children:"strcpy"})," was overwriting the next variable in memory."]})]})]}),e.jsxs("div",{className:"animate-fade-up space-y-6",style:{animationDelay:"200ms"},children:[e.jsx("h3",{className:"text-2xl font-semibold",children:"💻 Debugging in Practice"}),e.jsx(r,{title:"Example 1: Debugging with printf",initialCode:t}),e.jsx(r,{title:"Example 2: Memory Tracing",initialCode:n})]}),e.jsxs("div",{className:"animate-fade-up bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-5 rounded-r-xl",style:{animationDelay:"250ms"},children:[e.jsx("h3",{className:"text-xl font-semibold text-red-700 dark:text-red-400 mb-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Using wrong format specifier:"})," Always cast to ",e.jsx("code",{children:"(void*)"})," for ",e.jsx("code",{children:"%p"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Printing too much output:"})," Can hide the important details; use conditional prints or limit scope."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming debug prints don't affect timing:"})," In multithreaded or timing‑sensitive code, prints can hide bugs."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not removing debug prints after fixing:"})," They clutter production code; use a debug macro or conditional compilation."]})]})]}),e.jsxs("div",{className:"animate-fade-up bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-5 rounded-r-xl",style:{animationDelay:"300ms"},children:[e.jsx("h3",{className:"text-xl font-semibold text-green-700 dark:text-green-400 mb-2",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:["Use a debug macro: ",e.jsx("code",{children:"#ifdef DEBUG"})," to enable/disable prints."]}),e.jsx("li",{children:"Log both pointer address and dereferenced value to verify both."}),e.jsx("li",{children:"When tracing memory, always know the size you are printing; avoid printing beyond allocated boundaries."}),e.jsxs("li",{children:["Combine ",e.jsx("code",{children:"printf"})," with a debugger: prints help you know where to set breakpoints."]})]})]}),e.jsxs("div",{className:"animate-fade-up grid md:grid-cols-2 gap-4",style:{animationDelay:"350ms"},children:[e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"📋 Student Checklist"}),e.jsxs("ul",{className:"space-y-1 text-sm",children:[e.jsxs("li",{children:["✅ Can insert ",e.jsx("code",{children:"printf"})," to inspect pointer values and addresses."]}),e.jsx("li",{children:"✅ Can write a function to dump memory as hex."}),e.jsxs("li",{children:["✅ Knows how to use ",e.jsx("code",{children:"gdb"})," basics (optional but recommended)."]}),e.jsx("li",{children:"✅ Understands that debug output must be removed or disabled in production."})]})]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"💡 Hint Section"}),e.jsx("p",{className:"text-sm",children:"Think about …"}),e.jsxs("ul",{className:"list-disc list-inside text-sm mt-1",children:[e.jsx("li",{children:"What would you print to check if a pointer was changed by a function?"}),e.jsx("li",{children:"Observe carefully: In the memory trace example, how can you tell if a buffer overflow occurred?"}),e.jsx("li",{children:"Try adding a debug print that prints the address of local variables to see stack layout."})]})]})]}),e.jsxs("div",{className:"animate-fade-up p-5 border-t border-gray-200 dark:border-gray-700",style:{animationDelay:"400ms"},children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"🎓 Professional Tips & Tricks"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"fprintf(stderr, ...)"})," to output debugging info; it's unbuffered and appears immediately."]})}),e.jsx("li",{children:e.jsxs("strong",{children:["Create a ",e.jsx("code",{children:"DBG_PRINT"})," macro that includes ",e.jsx("code",{children:"__FILE__"})," and ",e.jsx("code",{children:"__LINE__"}),"."]})}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Learn to use a debugger (",e.jsx("code",{children:"gdb"}),") for more advanced inspection:"]})," ",e.jsx("code",{children:"print *ptr"}),", ",e.jsx("code",{children:"x/10xb ptr"}),"."]}),e.jsx("li",{children:e.jsx("strong",{children:"Tools like Valgrind and AddressSanitizer provide memory tracing automatically; use them alongside prints."})})]})]}),e.jsx("div",{className:"animate-fade-up",style:{animationDelay:"450ms"},children:e.jsx(i,{note:"Debugging pointers can be intimidating, but with systematic tracing, you can demystify any bug. I tell my Barrackpore CNAT students: 'When in doubt, print it out.' Print the address, print the value, print the bytes. And once you've solved it, consider how you could have prevented it (better initialization, bounds checks). Debugging is a skill that improves with practice – so get your hands dirty!"})}),e.jsx("style",{children:`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(1rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fade-up 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
          opacity: 0;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-up {
            animation: none;
            opacity: 1;
          }
        }
      `})]});export{g as default};
