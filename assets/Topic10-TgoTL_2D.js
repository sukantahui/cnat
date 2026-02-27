import{j as e}from"./index-meFSU1Lv.js";import{E as n}from"./EditableCCodeBlock-C1aLYO6_.js";const i=`#include <stdio.h>\r
\r
// A function with an off-by-one error (hidden)\r
void buggyFunction(int arr[], int n) {\r
    // Intended to set all elements to 1, but writes one past the end\r
    for (int i = 0; i <= n; i++) {  // error: <= instead of <\r
        arr[i] = 1;\r
    }\r
}\r
\r
int main() {\r
    int data[5] = {0};\r
\r
    printf("Before buggyFunction:\\n");\r
    for (int i = 0; i < 5; i++) {\r
        printf("data[%d] = %d\\n", i, data[i]);\r
    }\r
\r
    // Call the buggy function\r
    buggyFunction(data, 5);\r
\r
    printf("\\nAfter buggyFunction:\\n");\r
    for (int i = 0; i < 5; i++) {\r
        printf("data[%d] = %d\\n", i, data[i]);\r
    }\r
\r
    // To debug, we might add printf inside the loop to see index\r
    // Or check the value of a variable placed after the array in memory\r
    return 0;\r
}`,s=`#include <stdio.h>\r
#include <assert.h>\r
\r
// Safe array access with bounds checking\r
int getElement(int arr[], size_t size, size_t index) {\r
    assert(index < size && "Index out of bounds in getElement");\r
    return arr[index];\r
}\r
\r
void setElement(int arr[], size_t size, size_t index, int value) {\r
    assert(index < size && "Index out of bounds in setElement");\r
    arr[index] = value;\r
}\r
\r
int main() {\r
    int scores[5] = {80, 85, 90, 95, 100};\r
    size_t n = sizeof(scores) / sizeof(scores[0]);\r
\r
    // Safe usage\r
    printf("Element at index 2: %d\\n", getElement(scores, n, 2));\r
\r
    // This would trigger assertion failure (uncomment to test)\r
    // printf("Element at index 5: %d\\n", getElement(scores, n, 5));\r
\r
    // When debugging, assertions help catch bugs early\r
    return 0;\r
}`,t=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <string.h>\r
\r
// Manual debugging: simulate a simple "canary" to detect overflow\r
int main() {\r
    // Allocate array with extra space for canaries\r
    int *arr = malloc(5 * sizeof(int) + 2 * sizeof(int));\r
    if (!arr) return 1;\r
\r
    // Place canaries before and after\r
    int *canary_before = (int*)arr;\r
    int *data = arr + 1;\r
    int *canary_after = arr + 6;\r
\r
    // Initialize canaries with known values\r
    *canary_before = 0xDEADBEEF;\r
    *canary_after = 0xDEADBEEF;\r
\r
    // Initialize data\r
    for (int i = 0; i < 5; i++) {\r
        data[i] = i * 10;\r
    }\r
\r
    // Simulate a bug: write past the end\r
    // Uncomment the next line to see canary detection\r
    // data[5] = 999; // out-of-bounds write\r
\r
    // Check canaries after operations\r
    if (*canary_before != 0xDEADBEEF) {\r
        printf("Buffer underflow detected!\\n");\r
    }\r
    if (*canary_after != 0xDEADBEEF) {\r
        printf("Buffer overflow detected!\\n");\r
    } else {\r
        printf("No overflow detected.\\n");\r
    }\r
\r
    free(arr);\r
    return 0;\r
}`,a=`
  @keyframes fade-slide-up {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
`,m=()=>{const r=new Date().getFullYear()-1998;return e.jsxs("div",{className:"dark",style:{backgroundColor:"#121212"},children:[" ",e.jsx("style",{children:a}),e.jsxs("div",{className:"max-w-4xl mx-auto p-6 space-y-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:[e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate",children:[e.jsx("h1",{className:"text-4xl font-light tracking-tight leading-tight",children:"Topic 10: Practical debugging of array-based programs"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 mt-2 leading-relaxed",children:"How to find and fix common array bugs – off‑by‑one, uninitialized access, out‑of‑bounds, and more."})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[100ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"🐛 Why arrays need special debugging care"}),e.jsxs("p",{className:"leading-relaxed",children:["C does not check array bounds, so errors often manifest as crashes, corrupted data, or mysterious behavior far from the actual bug. Debugging array programs requires a systematic approach: ",e.jsx("strong",{children:"reproduce, isolate, inspect, fix, verify"}),"."]}),e.jsx("p",{className:"leading-relaxed mt-4",children:"Common array bugs include:"}),e.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[e.jsx("li",{children:"Off‑by‑one errors (accessing index n instead of n-1)."}),e.jsx("li",{children:"Using uninitialized array elements."}),e.jsx("li",{children:"Writing past the end (buffer overflow)."}),e.jsx("li",{children:"Misinterpreting multi‑dimensional indexing."}),e.jsx("li",{children:"Forgetting that arrays decay to pointers when passed to functions."})]}),e.jsxs("div",{className:"mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded",children:[e.jsx("p",{className:"text-sm font-medium",children:"🏫 Real‑world analogy:"}),e.jsxs("p",{className:"text-sm mt-1",children:["At ",e.jsx("strong",{children:"Barrackpore CNAT"}),", if the class register has 30 pages and a student tries to write on page 31, they might write on the teacher's desk. Finding that out later is like debugging an out‑of‑bounds write – the effect appears elsewhere."]})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[200ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"🔍 Debugging workflow"}),e.jsx("div",{className:"flex justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-xl transition-all duration-300 hover:shadow-xl",children:e.jsxs("svg",{width:"400",height:"150",viewBox:"0 0 400 150",className:"max-w-full h-auto",children:[e.jsx("circle",{cx:"50",cy:"75",r:"20",fill:"none",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"50",y:"80",textAnchor:"middle",fill:"currentColor",children:"1"}),e.jsx("text",{x:"50",y:"110",textAnchor:"middle",fill:"#6b7280",fontSize:"10",children:"Reproduce"}),e.jsx("line",{x1:"70",y1:"75",x2:"110",y2:"75",stroke:"#888",strokeWidth:"2"}),e.jsx("circle",{cx:"140",cy:"75",r:"20",fill:"none",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"140",y:"80",textAnchor:"middle",fill:"currentColor",children:"2"}),e.jsx("text",{x:"140",y:"110",textAnchor:"middle",fill:"#6b7280",fontSize:"10",children:"Isolate"}),e.jsx("line",{x1:"160",y1:"75",x2:"200",y2:"75",stroke:"#888",strokeWidth:"2"}),e.jsx("circle",{cx:"230",cy:"75",r:"20",fill:"none",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"230",y:"80",textAnchor:"middle",fill:"currentColor",children:"3"}),e.jsx("text",{x:"230",y:"110",textAnchor:"middle",fill:"#6b7280",fontSize:"10",children:"Inspect"}),e.jsx("line",{x1:"250",y1:"75",x2:"290",y2:"75",stroke:"#888",strokeWidth:"2"}),e.jsx("circle",{cx:"320",cy:"75",r:"20",fill:"none",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"320",y:"80",textAnchor:"middle",fill:"currentColor",children:"4"}),e.jsx("text",{x:"320",y:"110",textAnchor:"middle",fill:"#6b7280",fontSize:"10",children:"Fix"})]})}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2 text-center",children:"Systematic debugging process."})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[300ms] space-y-6",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"💻 Debugging techniques in action"}),e.jsx(n,{title:"Example 1: Printf debugging",initialCode:i}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 -mt-2",children:["Sprinkle ",e.jsx("code",{children:"printf"})," statements to trace execution and variable values."]}),e.jsx(n,{title:"Example 2: Using assert for internal checks",initialCode:s}),e.jsx(n,{title:"Example 3: Simulating Valgrind-like manual checks",initialCode:t})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[400ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"💡 Tips & Tricks (Professional habits)"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Use a debugger (gdb)"})," – set breakpoints, step through code, examine array contents."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Enable compiler warnings"})," – ",e.jsx("code",{children:"-Wall -Wextra"})," catches many mistakes."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Run under Valgrind or AddressSanitizer"})," – they detect out‑of‑bounds and uninitialized reads."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Add assertions for critical conditions"})," – ",e.jsx("code",{children:"assert(index >= 0 && index < size);"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Keep a “debug print” macro"})," that you can disable globally: ",e.jsx("code",{children:"#ifdef DEBUG"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Isolate the minimal test case"})," – reduce the program to the smallest code that still shows the bug."]})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[500ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"⚠️ Common Pitfalls (Beginner traps)"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded",children:[e.jsx("p",{className:"font-medium",children:"Relying on “it works on my machine”"}),e.jsx("p",{className:"text-sm",children:"Undefined behavior can appear correct until you change compiler, OS, or input."})]}),e.jsxs("div",{className:"p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded",children:[e.jsx("p",{className:"font-medium",children:"Debugging by random code changes"}),e.jsx("p",{className:"text-sm",children:"Guessing and changing code without understanding often introduces new bugs."})]}),e.jsxs("div",{className:"p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded",children:[e.jsx("p",{className:"font-medium",children:"Ignoring compiler warnings"}),e.jsx("p",{className:"text-sm",children:"Warnings about unused variables, signed/unsigned mismatches, etc., often hint at real issues."})]})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[600ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"✅ Best Practices (Write debuggable code)"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsx("li",{children:"Initialize arrays explicitly – zero them if nothing else."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"size_t"})," for indices and loop bounds."]}),e.jsx("li",{children:"Check array indices when they come from external input."}),e.jsx("li",{children:"Keep functions short and focused – easier to test."}),e.jsx("li",{children:"Write unit tests for array operations."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"const"})," to document which arrays should not be modified."]}),e.jsx("li",{children:"Add comments explaining non‑obvious index calculations."})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[700ms] p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded",children:[e.jsx("h2",{className:"text-xl font-medium mb-2",children:"📋 Mini Checklist – What to remember"}),e.jsxs("ul",{className:"list-check list-inside space-y-1",children:[e.jsxs("li",{children:["✔️ Use ",e.jsx("code",{children:"printf"})," or a debugger to inspect."]}),e.jsx("li",{children:"✔️ Enable compiler warnings and static analysis."}),e.jsx("li",{children:"✔️ Run Valgrind/AddressSanitizer."}),e.jsx("li",{children:"✔️ Add assertions for index bounds."}),e.jsx("li",{children:"✔️ Isolate the bug with minimal test case."})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[800ms] p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded",children:[e.jsx("h2",{className:"text-xl font-medium mb-2",children:"🤔 Hint – Think like a programmer"}),e.jsx("p",{className:"italic",children:"“When your program crashes, ask: What was the last array access before the crash? Print the index and the size.”"}),e.jsx("p",{className:"italic mt-2",children:"“If you get strange values, suspect uninitialized array elements. Add a loop to print the array after initialization.”"})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[900ms] p-6 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded transition-all duration-300 hover:shadow-lg",children:[e.jsx("h2",{className:"text-xl font-medium mb-2",children:"🧑‍🏫 Teacher's Note – Sukanta Hui"}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Sukanta Hui"})," (email: ",e.jsx("a",{href:"mailto:sukantahui@codernaccotax.co.in",className:"underline",children:"sukantahui@codernaccotax.co.in"}),", mobile: 7003756860) has been teaching programming for ",e.jsxs("strong",{children:[r," years"]})," (since 1998). His expertise spans Programming Languages, RDBMS, Operating Systems, and Web Development."]}),e.jsxs("p",{className:"mt-2",children:["💬 “At ",e.jsx("strong",{children:"Naihati CNAT"}),", I tell my students: ‘Debugging is like detective work. You have clues – the crash point, the values of variables. Use ",e.jsx("code",{children:"printf"})," as your magnifying glass. But don't stop there – learn to use a debugger. It's like having x‑ray vision.’”"]}),e.jsxs("p",{className:"mt-2",children:["🔍 ",e.jsx("strong",{children:"Point to remember:"})," The best debugging is prevention – write clean code, check indices, and use tools. When a bug appears, approach it systematically. You'll save hours of frustration."]})]})]})]})]})};export{m as default};
