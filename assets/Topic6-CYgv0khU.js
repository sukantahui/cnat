import{j as e}from"./index-BFnLuail.js";import{E as s}from"./EditableCCodeBlock-BIH-nUZ3.js";const n=`#include <stdio.h>\r
\r
// Function that modifies the array (doubles each element)\r
void doubleElements(int arr[], int n) {\r
    for (int i = 0; i < n; i++) {\r
        arr[i] *= 2; // modifies original array\r
    }\r
}\r
\r
int main() {\r
    int marks[] = {45, 60, 72, 81, 55};\r
    int n = sizeof(marks) / sizeof(marks[0]);\r
\r
    printf("Before: ");\r
    for (int i = 0; i < n; i++) printf("%d ", marks[i]);\r
    printf("\\n");\r
\r
    doubleElements(marks, n);\r
\r
    printf("After : ");\r
    for (int i = 0; i < n; i++) printf("%d ", marks[i]);\r
    printf("\\n");\r
\r
    return 0;\r
}`,i=`#include <stdio.h>\r
\r
// Function that prints array (size passed explicitly)\r
void printArray(int arr[], size_t n) {\r
    printf("Array elements: ");\r
    for (size_t i = 0; i < n; i++) {\r
        printf("%d ", arr[i]);\r
    }\r
    printf("\\n");\r
\r
    // Demonstrate sizeof inside function\r
    printf("Inside function: sizeof(arr) = %zu bytes (pointer size)\\n", sizeof(arr));\r
}\r
\r
int main() {\r
    int scores[] = {88, 92, 79, 85, 91};\r
    size_t n = sizeof(scores) / sizeof(scores[0]);\r
\r
    printf("In main: sizeof(scores) = %zu bytes (whole array)\\n", sizeof(scores));\r
    printArray(scores, n);\r
\r
    return 0;\r
}`,a=`#include <stdio.h>\r
\r
// Function that only reads the array – uses const for safety\r
int sumArray(const int arr[], size_t n) {\r
    int total = 0;\r
    for (size_t i = 0; i < n; i++) {\r
        total += arr[i]; // OK – reading is allowed\r
        // arr[i] = 0; // Compiler error if uncommented – const prevents modification\r
    }\r
    return total;\r
}\r
\r
int main() {\r
    int data[] = {10, 20, 30, 40, 50};\r
    size_t n = sizeof(data) / sizeof(data[0]);\r
\r
    int total = sumArray(data, n);\r
    printf("Sum of array: %d\\n", total);\r
\r
    // Original array remains unchanged\r
    printf("First element still: %d\\n", data[0]);\r
\r
    return 0;\r
}`,t=`
  @keyframes fade-slide-up {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
`,h=()=>{const r=new Date().getFullYear()-1998;return e.jsxs("div",{className:"dark",style:{backgroundColor:"#121212"},children:[" ",e.jsx("style",{children:t}),e.jsxs("div",{className:"max-w-4xl mx-auto p-6 space-y-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:[e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate",children:[e.jsx("h1",{className:"text-4xl font-light tracking-tight leading-tight",children:"Topic 6: Passing arrays to functions (call by reference behavior in C)"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 mt-2 leading-relaxed",children:"How arrays behave when passed to functions – and why you can modify them inside the function."})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[100ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"📦 Array parameters are pointers"}),e.jsxs("p",{className:"leading-relaxed",children:["In C, when you pass an array to a function, it ",e.jsx("strong",{children:"decays to a pointer"})," to its first element. The function receives a copy of that pointer, not a copy of the whole array. This is often called “pass by reference” behavior because through the pointer, the function can modify the original array elements."]}),e.jsxs("p",{className:"leading-relaxed mt-4",children:["The function parameter can be written as ",e.jsx("code",{children:"int arr[]"})," or ",e.jsx("code",{children:"int *arr"})," – they are equivalent. However, the size information is lost; inside the function, ",e.jsx("code",{children:"sizeof(arr)"})," gives the size of the pointer, not the array. Therefore, you must pass the size separately."]}),e.jsxs("div",{className:"mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded",children:[e.jsx("p",{className:"text-sm font-medium",children:"🏫 Real‑world analogy:"}),e.jsxs("p",{className:"text-sm mt-1",children:["At ",e.jsx("strong",{children:"Barrackpore CNAT"}),", teacher Sukanta Hui gives Tuhina the address of the class register (pointer). Tuhina can go and update marks directly. If Sukanta had given her a photocopy (pass by value), changes wouldn't affect the original. Arrays use the address model."]})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[200ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"🧠 Array decay visualization"}),e.jsx("div",{className:"flex justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-xl transition-all duration-300 hover:shadow-xl",children:e.jsxs("svg",{width:"450",height:"150",viewBox:"0 0 450 150",className:"max-w-full h-auto",children:[e.jsx("rect",{x:"40",y:"20",width:"200",height:"40",fill:"none",stroke:"#3b82f6",strokeWidth:"2",rx:"2"}),e.jsx("text",{x:"60",y:"45",fill:"currentColor",children:"arr in main: [10,20,30,40]"}),e.jsx("line",{x1:"140",y1:"60",x2:"140",y2:"90",stroke:"#ef4444",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("circle",{cx:"140",cy:"100",r:"15",fill:"none",stroke:"#ef4444",strokeWidth:"2"}),e.jsx("text",{x:"140",y:"105",textAnchor:"middle",fill:"#ef4444",fontSize:"12",children:"ptr"}),e.jsx("rect",{x:"100",y:"110",width:"150",height:"40",fill:"none",stroke:"#10b981",strokeWidth:"2",rx:"2"}),e.jsx("text",{x:"125",y:"135",fill:"#10b981",children:"func(int *arr)"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("path",{d:"M0,0 L10,5 L0,10 Z",fill:"#ef4444"})})})]})}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2 text-center",children:"The function receives a pointer to the first element – no array copy is made."})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[300ms] space-y-6",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"💻 Passing arrays in C"}),e.jsx(s,{title:"Example 1: Modifying array inside function",initialCode:n}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 -mt-2",children:["The change inside ",e.jsx("code",{children:"doubleElements"})," affects the original array."]}),e.jsx(s,{title:"Example 2: Passing size explicitly",initialCode:i}),e.jsx(s,{title:"Example 3: Using const for read‑only arrays",initialCode:a})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[400ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"💡 Tips & Tricks (Professional habits)"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Always pass the array size as a separate parameter"})," – don't rely on a global constant or sentinel values."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"const"})," for input arrays"]})," – if the function shouldn't modify the array, declare parameter as ",e.jsx("code",{children:"const int arr[]"}),". This catches accidental modifications."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Prefer ",e.jsx("code",{children:"int arr[]"})," syntax for readability"]})," when the parameter is intended to be an array, even though it's a pointer."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Remember that ",e.jsx("code",{children:"sizeof(arr)"})," inside function gives pointer size"]})," – common mistake; always use passed size."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"For multidimensional arrays, all but the first dimension must be specified"})," (covered in later topics)."]})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[500ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"⚠️ Common Pitfalls (Beginner traps)"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded",children:[e.jsxs("p",{className:"font-medium",children:["Using ",e.jsx("code",{children:"sizeof(arr)"})," inside function to get array length"]}),e.jsxs("p",{className:"text-sm",children:[e.jsx("code",{children:"sizeof(arr)"})," returns size of pointer (typically 8 bytes), not the array. This leads to incorrect loop bounds."]})]}),e.jsxs("div",{className:"p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded",children:[e.jsx("p",{className:"font-medium",children:"Assuming array is passed by value (copied)"}),e.jsx("p",{className:"text-sm",children:"Some beginners think the function gets its own copy; they're surprised when modifications affect the original."})]}),e.jsxs("div",{className:"p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded",children:[e.jsx("p",{className:"font-medium",children:"Forgetting to pass size, and using a sentinel (like -1) to mark end"}),e.jsx("p",{className:"text-sm",children:"That works for strings (null terminator) but not for general arrays of numbers where -1 could be valid data."})]})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[600ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"✅ Best Practices (Write clean, safe code)"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsxs("li",{children:["Declare functions that process arrays with parameters: ",e.jsx("code",{children:"void process(int arr[], size_t n)"}),"."]}),e.jsxs("li",{children:["If the function does not modify the array, add ",e.jsx("code",{children:"const"}),": ",e.jsx("code",{children:"void print(const int arr[], size_t n)"}),"."]}),e.jsx("li",{children:"Document whether the function expects a valid array and what the size means."}),e.jsxs("li",{children:["When passing part of an array, use pointer arithmetic: ",e.jsx("code",{children:"process(&arr[start], count)"}),"."]}),e.jsxs("li",{children:["In the function body, use the passed size for loops, not ",e.jsx("code",{children:"sizeof"}),"."]})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[700ms] p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded",children:[e.jsx("h2",{className:"text-xl font-medium mb-2",children:"📋 Mini Checklist – What to remember"}),e.jsxs("ul",{className:"list-check list-inside space-y-1",children:[e.jsx("li",{children:"✔️ Arrays decay to pointers when passed to functions."}),e.jsxs("li",{children:["✔️ Inside function, ",e.jsx("code",{children:"sizeof(arr)"})," gives pointer size, not array size."]}),e.jsx("li",{children:"✔️ Always pass the array size explicitly."}),e.jsxs("li",{children:["✔️ Use ",e.jsx("code",{children:"const"})," for read‑only arrays."]}),e.jsx("li",{children:"✔️ Modifications inside function affect the original array."})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[800ms] p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded",children:[e.jsx("h2",{className:"text-xl font-medium mb-2",children:"🤔 Hint – Think like a programmer"}),e.jsxs("p",{className:"italic",children:["“If you declare ",e.jsx("code",{children:"void func(int arr[])"}),", try printing ",e.jsx("code",{children:"sizeof(arr)"})," inside. Compare it with ",e.jsx("code",{children:"sizeof"})," in main. The difference shows the decay.”"]}),e.jsxs("p",{className:"italic mt-2",children:["What happens if you pass ",e.jsx("code",{children:"&arr[2]"})," to a function expecting an array? (Hint: it's still a pointer, but now it points to the third element.)"]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[900ms] p-6 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded transition-all duration-300 hover:shadow-lg",children:[e.jsx("h2",{className:"text-xl font-medium mb-2",children:"🧑‍🏫 Teacher's Note – Sukanta Hui"}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Sukanta Hui"})," (email: ",e.jsx("a",{href:"mailto:sukantahui@codernaccotax.co.in",className:"underline",children:"sukantahui@codernaccotax.co.in"}),", mobile: 7003756860) has been teaching programming for ",e.jsxs("strong",{children:[r," years"]})," (since 1998). His expertise spans Programming Languages, RDBMS, Operating Systems, and Web Development."]}),e.jsxs("p",{className:"mt-2",children:["💬 “At ",e.jsx("strong",{children:"Naihati CNAT"}),", I hold up a sheet of paper with numbers and say: ‘If I give this sheet to Debangshu and ask him to double the numbers, he’ll write on the same sheet. That’s pass‑by‑reference. If I give him a photocopy, changes stay on the copy – that’s pass‑by‑value. Arrays use the first model.’”"]}),e.jsxs("p",{className:"mt-2",children:["🔍 ",e.jsx("strong",{children:"Point to remember:"})," The array name is not a variable you can assign to, but the pointer parameter is – you can do ",e.jsx("code",{children:"arr++"})," inside the function. That’s another clue it's a pointer."]})]})]})]})]})};export{h as default};
