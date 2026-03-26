import{j as e}from"./index-DvCu507i.js";import{c as i}from"./clsx-B-dksMZM.js";import{T as s}from"./TeacherSukantaHui-tPw8nkhl.js";import{E as a}from"./EditableCCodeBlock-BZTg4zzk.js";import"./git-branch-ksq2sQYW.js";import"./index-DJ7WIp_a.js";import"./file-code-DYqCfTmb.js";import"./type-kKrhLZrm.js";import"./refresh-cw-Dpjf4dGO.js";import"./copy-D0mr27ws.js";import"./download-DYJkcKhx.js";const t=`#include <stdio.h>\r
\r
int main() {\r
    int arr[10]; // fixed size – what if we need more?\r
    int n;\r
\r
    printf("How many numbers? ");\r
    scanf("%d", &n);\r
\r
    if (n > 10) {\r
        printf("Error: too many numbers, buffer overflow!\\n");\r
        return 1;\r
    }\r
\r
    for (int i = 0; i < n; i++) {\r
        printf("Enter number %d: ", i+1);\r
        scanf("%d", &arr[i]);\r
    }\r
\r
    printf("You entered: ");\r
    for (int i = 0; i < n; i++) {\r
        printf("%d ", arr[i]);\r
    }\r
    printf("\\n");\r
    return 0;\r
}`,l=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
int main() {\r
    int *arr = NULL;\r
    int capacity = 0;\r
    int size = 0;\r
    int input;\r
\r
    printf("Enter numbers (0 to stop):\\n");\r
\r
    while (1) {\r
        scanf("%d", &input);\r
        if (input == 0) break;\r
\r
        if (size == capacity) {\r
            capacity = (capacity == 0) ? 4 : capacity * 2;\r
            int *new_arr = realloc(arr, capacity * sizeof(int));\r
            if (!new_arr) {\r
                printf("Allocation failed!\\n");\r
                free(arr);\r
                return 1;\r
            }\r
            arr = new_arr;\r
        }\r
        arr[size++] = input;\r
    }\r
\r
    printf("You entered: ");\r
    for (int i = 0; i < size; i++) {\r
        printf("%d ", arr[i]);\r
    }\r
    printf("\\n");\r
\r
    free(arr);\r
    return 0;\r
}`,o=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <string.h>\r
\r
int main() {\r
    char *buffer = malloc(1); // start with 1 byte (just for null terminator)\r
    if (!buffer) return 1;\r
    buffer[0] = '\\0';\r
    int capacity = 1;\r
\r
    printf("Enter a sentence (press Ctrl+D or Ctrl+Z to end):\\n");\r
\r
    int ch;\r
    while ((ch = getchar()) != EOF) {\r
        int len = strlen(buffer);\r
        if (len + 2 > capacity) {\r
            capacity *= 2;\r
            char *new_buf = realloc(buffer, capacity);\r
            if (!new_buf) {\r
                printf("Out of memory!\\n");\r
                free(buffer);\r
                return 1;\r
            }\r
            buffer = new_buf;\r
        }\r
        buffer[len] = ch;\r
        buffer[len+1] = '\\0';\r
    }\r
\r
    printf("You entered: %s\\n", buffer);\r
    free(buffer);\r
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
`,w=()=>{const r=["0ms","100ms","200ms","300ms","400ms","500ms","600ms","700ms","800ms","900ms"],n=()=>i("animate-fade-slide-up","opacity-0");return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:d}),e.jsxs("div",{className:"w-full max-w-5xl mx-auto px-4 py-8 space-y-12 dark:bg-gray-900 bg-gray-50 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:[e.jsxs("div",{className:n(),style:{animationDelay:r[0]},children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400",children:"Why Dynamic Memory Allocation?"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 mt-2 leading-relaxed",children:"When static and stack memory just aren't enough — the real‑world need for flexibility."})]}),e.jsxs("section",{className:n(),style:{animationDelay:r[1]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4 mb-4",children:"The Limitations of Static & Stack Memory"}),e.jsxs("p",{className:"leading-relaxed mb-3",children:["In many real‑world programs, you don't know how much memory you'll need until runtime. Static (global) memory and stack memory are both ",e.jsx("strong",{children:"fixed‑size"})," and determined at compile time. This leads to two major problems:"]}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 mb-4",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Waste:"})," Allocating large buffers “just in case” wastes memory."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Overflow:"})," If the actual size exceeds the allocated buffer, the program crashes or corrupts data."]})]}),e.jsxs("p",{children:["Dynamic memory allocation (",e.jsx("code",{children:"malloc"}),", ",e.jsx("code",{children:"calloc"}),", ",e.jsx("code",{children:"realloc"}),") solves these problems by letting you request memory ",e.jsx("strong",{children:"at runtime"})," and resize it as needed."]})]}),e.jsxs("section",{className:n(),style:{animationDelay:r[2]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-4 mb-4",children:"🌍 Real‑World Scenarios That Demand Dynamic Memory"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.01]",children:[e.jsx("h3",{className:"text-xl font-medium",children:"📁 File Processing"}),e.jsx("p",{className:"mt-2 leading-relaxed",children:"When reading a file, you often don't know its size in advance. Dynamically allocating a buffer that can grow as you read ensures you can handle any file without wasting memory."}),e.jsxs("div",{className:"mt-3 text-sm font-mono bg-gray-100 dark:bg-gray-700 p-2 rounded",children:["// read entire file into memory",e.jsx("br",{}),"char *buffer = malloc(initial_size);",e.jsx("br",{}),"// read and realloc if needed"]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.01]",children:[e.jsx("h3",{className:"text-xl font-medium",children:"📋 Dynamic Collections"}),e.jsx("p",{className:"mt-2 leading-relaxed",children:"Data structures like linked lists, trees, or hash tables need to grow and shrink during execution. Each node is allocated on the heap, allowing the structure to scale dynamically."}),e.jsxs("div",{className:"mt-3 text-sm font-mono bg-gray-100 dark:bg-gray-700 p-2 rounded",children:["struct Node ","{ int data; struct Node *next; };",e.jsx("br",{}),"struct Node *newNode = malloc(sizeof(struct Node));"]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.01]",children:[e.jsx("h3",{className:"text-xl font-medium",children:"⌨️ User Input"}),e.jsx("p",{className:"mt-2 leading-relaxed",children:"When asking a user for input (e.g., a name or a sentence), you cannot know its length beforehand. A dynamic string buffer can grow to accommodate any input."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.01]",children:[e.jsx("h3",{className:"text-xl font-medium",children:"🧩 Plugin Systems & Runtime Configuration"}),e.jsx("p",{className:"mt-2 leading-relaxed",children:"Modern applications load plugins or configuration files at runtime. The number and size of these are unknown at compile time, making dynamic allocation essential."})]})]})]}),e.jsxs("section",{className:n(),style:{animationDelay:r[3]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-4 mb-4",children:"🖼️ Static vs Dynamic Memory"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md transition-all duration-300 hover:shadow-xl",children:e.jsxs("svg",{viewBox:"0 0 800 300",className:"w-full h-auto","aria-label":"Comparison of static and dynamic memory",children:[e.jsx("rect",{width:"800",height:"300",fill:"transparent"}),e.jsx("rect",{x:"50",y:"50",width:"300",height:"200",fill:"rgba(59,130,246,0.1)",stroke:"#3b82f6",strokeWidth:"2",rx:"8"}),e.jsx("text",{x:"60",y:"80",fill:"currentColor",className:"text-sm font-mono",children:"Static/Stack (fixed size)"}),e.jsx("rect",{x:"70",y:"100",width:"260",height:"30",fill:"rgba(59,130,246,0.2)",stroke:"#3b82f6",strokeWidth:"1"}),e.jsx("text",{x:"80",y:"120",fill:"currentColor",className:"text-xs",children:"pre‑allocated buffer"}),e.jsx("line",{x1:"70",y1:"140",x2:"330",y2:"140",stroke:"#ef4444",strokeWidth:"2",strokeDasharray:"5 3"}),e.jsx("text",{x:"150",y:"135",fill:"#ef4444",className:"text-xs",children:"if input exceeds → crash"}),e.jsx("rect",{x:"450",y:"50",width:"300",height:"200",fill:"rgba(168,85,247,0.1)",stroke:"#a855f7",strokeWidth:"2",rx:"8"}),e.jsx("text",{x:"460",y:"80",fill:"currentColor",className:"text-sm font-mono",children:"Heap (dynamic allocation)"}),e.jsx("rect",{x:"470",y:"100",width:"150",height:"30",fill:"rgba(168,85,247,0.2)",stroke:"#a855f7",strokeWidth:"1"}),e.jsx("text",{x:"480",y:"120",fill:"currentColor",className:"text-xs",children:"malloc(initial)"}),e.jsx("rect",{x:"470",y:"150",width:"200",height:"30",fill:"rgba(168,85,247,0.2)",stroke:"#a855f7",strokeWidth:"1"}),e.jsx("text",{x:"480",y:"170",fill:"currentColor",className:"text-xs",children:"realloc(larger)"}),e.jsx("rect",{x:"470",y:"200",width:"100",height:"30",fill:"rgba(168,85,247,0.2)",stroke:"#a855f7",strokeWidth:"1"}),e.jsx("text",{x:"480",y:"220",fill:"currentColor",className:"text-xs",children:"free()"}),e.jsx("text",{x:"470",y:"250",fill:"currentColor",className:"text-xs",children:"can grow/shrink at runtime"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 5, 0 10",fill:"#6b7280"})})}),e.jsx("line",{x1:"350",y1:"150",x2:"450",y2:"150",stroke:"#6b7280",strokeWidth:"2",markerEnd:"url(#arrow)",strokeDasharray:"4 2",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"0",to:"20",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"380",y:"140",fill:"#6b7280",className:"text-xs",children:"dynamic memory solves"})]})})]}),e.jsxs("section",{className:n(),style:{animationDelay:r[4]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-red-500 pl-4 mb-4",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(a,{title:"Example 1: Fixed array (the problem)",initialCode:t}),e.jsx(a,{title:"Example 2: Dynamic array (the solution)",initialCode:l}),e.jsx(a,{title:"Example 3: Dynamic string input",initialCode:o})]})]}),e.jsxs("section",{className:n(),style:{animationDelay:r[5]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-orange-500 pl-4 mb-4",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200 bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to allocate enough memory:"})," Off‑by‑one errors are common (e.g., forgetting space for null terminator)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not checking allocation success:"})," ",e.jsx("code",{children:"malloc"})," can return ",e.jsx("code",{children:"NULL"}),"; using it leads to crashes."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Memory leaks:"})," Failing to free memory when it's no longer needed."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using stack for large data:"})," Large local arrays cause stack overflow."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mixing allocation types:"})," Trying to ",e.jsx("code",{children:"free"})," a stack variable leads to undefined behavior."]})]})]}),e.jsxs("section",{className:n(),style:{animationDelay:r[6]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-4 mb-4",children:"✅ Best Practices"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{children:["✔️ Always check return value of ",e.jsx("code",{children:"malloc"}),"/",e.jsx("code",{children:"calloc"})," and handle allocation failure."]}),e.jsx("li",{children:"✔️ For dynamic arrays, start with a reasonable initial capacity and double when full (amortized O(1))."}),e.jsxs("li",{children:["✔️ Use ",e.jsx("code",{children:"realloc"})," to resize only when necessary; avoid calling it on every insertion."]}),e.jsxs("li",{children:["✔️ Always ",e.jsx("code",{children:"free"})," memory in the reverse order of allocation to reduce fragmentation."]}),e.jsxs("li",{children:["✔️ Set pointers to ",e.jsx("code",{children:"NULL"})," after ",e.jsx("code",{children:"free"})," to avoid dangling pointers."]})]})})]}),e.jsxs("section",{className:n(),style:{animationDelay:r[7]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-4 mb-4",children:"📋 Mini Checklist"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:e.jsxs("ul",{className:"space-y-1",children:[e.jsx("li",{children:"☐ I can explain why static/stack memory is not always sufficient."}),e.jsx("li",{children:"☐ I understand when to use dynamic memory (unknown size at compile time, large data, long‑lived data)."}),e.jsxs("li",{children:["☐ I always check ",e.jsx("code",{children:"malloc"})," return value."]}),e.jsx("li",{children:"☐ I am aware of the dangers of fixed‑size buffers (buffer overflows)."}),e.jsx("li",{children:"☐ I know that dynamic memory must be manually freed."})]})})]}),e.jsxs("section",{className:n(),style:{animationDelay:r[8]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4 mb-4",children:"💡 Hint Section"}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl",children:[e.jsx("p",{className:"italic",children:"Try changing this..."}),e.jsxs("ul",{className:"list-disc list-inside mt-2",children:[e.jsx("li",{children:"In the fixed array example, increase the input size beyond 10. What happens?"}),e.jsxs("li",{children:["In the dynamic array example, what if you forget to ",e.jsx("code",{children:"free"})," the memory? Run with many operations and observe memory usage."]}),e.jsxs("li",{children:["What happens if you try to ",e.jsx("code",{children:"realloc"})," a pointer that wasn't allocated with ",e.jsx("code",{children:"malloc"}),"?"]})]})]})]}),e.jsxs("section",{className:n(),style:{animationDelay:r[9]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-4 mb-4",children:"🔧 Professional Tips & Tricks"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow space-y-2",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"🎯 Debugging mindset:"})," Use ",e.jsx("code",{children:"valgrind"})," or sanitizers to detect memory leaks and invalid accesses."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"📦 Performance consideration:"})," Frequent small allocations can cause fragmentation; consider using memory pools or custom allocators."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"🧹 RAII in C++:"})," In C++, use smart pointers to automate deallocation; in C, be disciplined."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"📏 Growth strategy:"})," For dynamic arrays, multiply capacity by a factor (e.g., 1.5 or 2) to achieve amortized O(1) insertion."]})]})]}),e.jsx(s,{note:"Dynamic memory allocation is like renting a warehouse: you pay for exactly what you need, and you must return it when done. Always think about the lifetime of your data. If you allocate memory in one function and need it later, that's a clue that you should use the heap!"})]})]})};export{w as default};
