import{j as e}from"./index-CTaFCVvl.js";import{c as i}from"./clsx-B-dksMZM.js";import{T as t}from"./TeacherSukantaHui-CXljMfmu.js";import{E as s}from"./EditableCCodeBlock-BmWb9UM9.js";import"./git-branch-DjtSZz17.js";import"./index-RG1_EAcX.js";import"./file-code-DdaZ0WP2.js";import"./type-Wnld5au3.js";import"./refresh-cw-ClGJKkyE.js";import"./copy-DY-fjKN5.js";import"./download-CVsa0i-2.js";const n=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
int main() {\r
    int *ptr = (int*)malloc(sizeof(int));\r
    if (ptr == NULL) {\r
        printf("Memory allocation failed!\\n");\r
        return 1;\r
    }\r
\r
    *ptr = 42; // must initialize because malloc gives uninitialized memory\r
    printf("Value: %d\\n", *ptr);\r
\r
    free(ptr);\r
    return 0;\r
}`,a=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct {\r
    int id;\r
    char name[20];\r
} Student;\r
\r
int main() {\r
    // Allocate memory for 5 Student structures, all zero-initialized\r
    Student *students = (Student*)calloc(5, sizeof(Student));\r
    if (students == NULL) {\r
        printf("Allocation failed\\n");\r
        return 1;\r
    }\r
\r
    // calloc ensures id=0 and name[0]='\\0' for each student\r
    for (int i = 0; i < 5; i++) {\r
        printf("Student %d: id=%d, name='%s'\\n", i, students[i].id, students[i].name);\r
    }\r
\r
    free(students);\r
    return 0;\r
}`,o=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
int main() {\r
    int *a = (int*)malloc(5 * sizeof(int));\r
    int *b = (int*)calloc(5, sizeof(int));\r
\r
    if (!a || !b) {\r
        printf("Allocation failed\\n");\r
        free(a);\r
        free(b);\r
        return 1;\r
    }\r
\r
    printf("malloc array (uninitialized): ");\r
    for (int i = 0; i < 5; i++) {\r
        printf("%d ", a[i]); // may print garbage\r
    }\r
    printf("\\n");\r
\r
    printf("calloc array (zeroed): ");\r
    for (int i = 0; i < 5; i++) {\r
        printf("%d ", b[i]); // always 0\r
    }\r
    printf("\\n");\r
\r
    free(a);\r
    free(b);\r
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
`,N=()=>{const r=["0ms","100ms","200ms","300ms","400ms","500ms","600ms","700ms","800ms","900ms","1000ms"],l=()=>i("animate-fade-slide-up","opacity-0");return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:c}),e.jsxs("div",{className:"w-full max-w-5xl mx-auto px-4 py-8 space-y-12 dark:bg-gray-900 bg-gray-50 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:[e.jsxs("div",{className:l(),style:{animationDelay:r[0]},children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400",children:"malloc & calloc — Allocating Heap Memory"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 mt-2 leading-relaxed",children:"Requesting memory from the heap: the essential tools for dynamic memory management."})]}),e.jsxs("section",{className:l(),style:{animationDelay:r[1]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4 mb-4",children:"The Heap Allocation Functions"}),e.jsxs("p",{className:"leading-relaxed mb-3",children:["The ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"malloc()"})," (memory allocation) and"," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"calloc()"})," (contiguous allocation) functions are the primary ways to obtain memory from the heap. Both are declared in ",e.jsx("code",{children:"<stdlib.h>"}),"."]}),e.jsxs("p",{className:"leading-relaxed",children:["They return a pointer to the allocated memory block (or ",e.jsx("code",{children:"NULL"})," on failure) and the allocated memory remains valid until you explicitly free it with ",e.jsx("code",{children:"free()"}),"."]})]}),e.jsxs("section",{className:l(),style:{animationDelay:r[2]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-4 mb-4",children:"📦 malloc — Uninitialized Memory"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.01]",children:[e.jsx("div",{className:"font-mono text-sm mb-4 p-3 bg-gray-100 dark:bg-gray-700 rounded",children:"void* malloc(size_t size);"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Purpose:"})," Allocates ",e.jsx("code",{children:"size"})," bytes of uninitialized memory."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Return type:"})," ",e.jsx("code",{children:"void*"})," (generic pointer). You cast it to the desired type."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"When to use:"})," When you need raw memory and will initialize it yourself immediately."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Key point:"})," The memory contains garbage values — you must set it before reading."]})]}),e.jsx("div",{className:"mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border-l-4 border-yellow-500",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"⚠️ Important:"})," Always check the return value against ",e.jsx("code",{children:"NULL"})," before using the pointer."]})})]})]}),e.jsxs("section",{className:l(),style:{animationDelay:r[3]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-4 mb-4",children:"🧹 calloc — Zero‑Initialized Memory"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.01]",children:[e.jsx("div",{className:"font-mono text-sm mb-4 p-3 bg-gray-100 dark:bg-gray-700 rounded",children:"void* calloc(size_t nmemb, size_t size);"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Purpose:"})," Allocates memory for an array of ",e.jsx("code",{children:"nmemb"})," elements, each of ",e.jsx("code",{children:"size"})," bytes, and initializes all bytes to zero."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Return type:"})," ",e.jsx("code",{children:"void*"})," (generic pointer)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"When to use:"})," When you need zero‑initialized memory (e.g., arrays, structures with default values)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Key point:"})," ",e.jsx("code",{children:"calloc"})," is slightly slower than ",e.jsx("code",{children:"malloc"})," because it writes zeros, but it guarantees no garbage values."]})]}),e.jsx("div",{className:"mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded border-l-4 border-blue-500",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"💡 Tip:"})," For large allocations, ",e.jsx("code",{children:"calloc"})," might be more efficient because the OS can supply already zeroed pages."]})})]})]}),e.jsxs("section",{className:l(),style:{animationDelay:r[4]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-4 mb-4",children:"🖼️ How malloc & calloc Work"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md transition-all duration-300 hover:shadow-xl",children:e.jsxs("svg",{viewBox:"0 0 800 280",className:"w-full h-auto","aria-label":"malloc vs calloc illustration",children:[e.jsx("rect",{width:"800",height:"280",fill:"transparent"}),e.jsx("rect",{x:"50",y:"30",width:"300",height:"100",fill:"rgba(34,197,94,0.1)",stroke:"#22c55e",strokeWidth:"2",rx:"6"}),e.jsx("text",{x:"60",y:"55",fill:"currentColor",className:"text-sm font-mono",children:"malloc(10 * sizeof(int))"}),e.jsx("rect",{x:"70",y:"70",width:"260",height:"45",fill:"none",stroke:"#22c55e",strokeWidth:"1",strokeDasharray:"4 2"}),e.jsx("text",{x:"80",y:"95",fill:"currentColor",className:"text-xs",children:"uninitialized (garbage values)"}),e.jsx("text",{x:"80",y:"115",fill:"currentColor",className:"text-xs",children:"must set before use"}),e.jsx("rect",{x:"450",y:"30",width:"300",height:"100",fill:"rgba(168,85,247,0.1)",stroke:"#a855f7",strokeWidth:"2",rx:"6"}),e.jsx("text",{x:"460",y:"55",fill:"currentColor",className:"text-sm font-mono",children:"calloc(10, sizeof(int))"}),e.jsx("rect",{x:"470",y:"70",width:"260",height:"45",fill:"rgba(168,85,247,0.2)",stroke:"#a855f7",strokeWidth:"1"}),e.jsx("text",{x:"480",y:"85",fill:"currentColor",className:"text-xs",children:"all bytes set to 0"}),e.jsx("text",{x:"480",y:"105",fill:"currentColor",className:"text-xs",children:"safe to use immediately"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow2",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 5, 0 10",fill:"#6b7280"})})}),e.jsx("line",{x1:"350",y1:"80",x2:"450",y2:"80",stroke:"#6b7280",strokeWidth:"2",markerEnd:"url(#arrow2)",strokeDasharray:"4 2",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"0",to:"20",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"380",y:"70",fill:"#6b7280",className:"text-xs",children:"both allocate heap memory"}),e.jsx("text",{x:"50",y:"200",fill:"currentColor",className:"text-sm font-semibold",children:"malloc result:"}),e.jsx("rect",{x:"50",y:"210",width:"300",height:"30",fill:"rgba(34,197,94,0.1)",stroke:"#22c55e",strokeWidth:"1"}),e.jsx("text",{x:"60",y:"230",fill:"currentColor",className:"text-xs",children:"0x?? | 0x?? | 0x?? | 0x?? ... (unknown)"}),e.jsx("text",{x:"450",y:"200",fill:"currentColor",className:"text-sm font-semibold",children:"calloc result:"}),e.jsx("rect",{x:"450",y:"210",width:"300",height:"30",fill:"rgba(168,85,247,0.1)",stroke:"#a855f7",strokeWidth:"1"}),e.jsx("text",{x:"460",y:"230",fill:"currentColor",className:"text-xs",children:"0x00 | 0x00 | 0x00 | 0x00 ... (all zero)"})]})})]}),e.jsxs("section",{className:l(),style:{animationDelay:r[5]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-red-500 pl-4 mb-4",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(s,{title:"Example 1: malloc for a single integer",initialCode:n}),e.jsx(s,{title:"Example 2: calloc for an array of structures",initialCode:a}),e.jsx(s,{title:"Example 3: Comparing malloc vs calloc",initialCode:o})]})]}),e.jsxs("section",{className:l(),style:{animationDelay:r[6]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-orange-500 pl-4 mb-4",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200 bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Not checking return value:"})," Using a ",e.jsx("code",{children:"NULL"})," pointer leads to crash."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to cast:"})," In C, ",e.jsx("code",{children:"void*"})," is implicitly convertible, but explicit cast improves readability."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Under‑allocating:"})," Forgetting to multiply by ",e.jsx("code",{children:"sizeof(type)"})," (e.g., ",e.jsx("code",{children:"malloc(10)"})," instead of ",e.jsx("code",{children:"malloc(10 * sizeof(int))"}),")."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Assuming ",e.jsx("code",{children:"malloc"})," zeros memory:"]})," It doesn't — reading uninitialized memory leads to undefined behavior."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Using ",e.jsx("code",{children:"calloc"})," with zero elements:"]})," It may return a non‑",e.jsx("code",{children:"NULL"})," pointer that cannot be dereferenced."]})]})]}),e.jsxs("section",{className:l(),style:{animationDelay:r[7]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-4 mb-4",children:"✅ Best Practices"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{children:["✔️ Always check the return value of ",e.jsx("code",{children:"malloc"}),"/",e.jsx("code",{children:"calloc"})," and handle failure gracefully."]}),e.jsxs("li",{children:["✔️ Use ",e.jsx("code",{children:"sizeof(*ptr)"})," to avoid type errors: ",e.jsx("code",{children:"malloc(sizeof(*ptr))"}),"."]}),e.jsxs("li",{children:["✔️ Prefer ",e.jsx("code",{children:"calloc"})," when you need zero‑initialized memory; it's clearer and often safer."]}),e.jsx("li",{children:"✔️ Cast the result to the target pointer type for clarity (though not strictly required in C)."}),e.jsx("li",{children:"✔️ Keep track of allocated sizes to avoid buffer overflows."})]})})]}),e.jsxs("section",{className:l(),style:{animationDelay:r[8]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-4 mb-4",children:"📋 Mini Checklist"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:e.jsxs("ul",{className:"space-y-1",children:[e.jsxs("li",{children:["☐ I know the prototypes of ",e.jsx("code",{children:"malloc"})," and ",e.jsx("code",{children:"calloc"}),"."]}),e.jsxs("li",{children:["☐ I always check for ",e.jsx("code",{children:"NULL"})," after allocation."]}),e.jsxs("li",{children:["☐ I understand the difference between uninitialized (",e.jsx("code",{children:"malloc"}),") and zero‑initialized (",e.jsx("code",{children:"calloc"}),") memory."]}),e.jsxs("li",{children:["☐ I correctly compute allocation size using ",e.jsx("code",{children:"sizeof"}),"."]}),e.jsxs("li",{children:["☐ I know that both allocate from the heap and require a matching ",e.jsx("code",{children:"free"}),"."]})]})})]}),e.jsxs("section",{className:l(),style:{animationDelay:r[9]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4 mb-4",children:"💡 Hint Section"}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl",children:[e.jsx("p",{className:"italic",children:"Try changing this..."}),e.jsxs("ul",{className:"list-disc list-inside mt-2",children:[e.jsxs("li",{children:["What happens if you forget to multiply by ",e.jsx("code",{children:"sizeof(int)"})," in ",e.jsx("code",{children:"malloc(10)"})," and then assign integers?"]}),e.jsxs("li",{children:["Modify the malloc example to use ",e.jsx("code",{children:"calloc"})," and see how the output changes."]}),e.jsxs("li",{children:["What if you request zero bytes with ",e.jsx("code",{children:"malloc(0)"})," or ",e.jsx("code",{children:"calloc(0, 0)"}),"? Check the standard."]})]})]})]}),e.jsxs("section",{className:l(),style:{animationDelay:r[10]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-4 mb-4",children:"🔧 Professional Tips & Tricks"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow space-y-2",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"🎯 Debugging mindset:"})," Use ",e.jsx("code",{children:"valgrind"})," to detect reads of uninitialized memory from ",e.jsx("code",{children:"malloc"}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"📦 Performance:"})," For large allocations, ",e.jsx("code",{children:"malloc"})," is often faster because ",e.jsx("code",{children:"calloc"})," writes zeros; but ",e.jsx("code",{children:"calloc"})," can be optimized by the OS."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"🧹 Safety:"})," In C++, prefer ",e.jsx("code",{children:"new"}),"/",e.jsx("code",{children:"delete"})," or containers; in C, always pair allocation with ",e.jsx("code",{children:"free"})," in a clear scope."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"📏 Readability:"})," Use a macro like ",e.jsx("code",{children:"#define NEW_ARRAY(type, n) (type*)calloc(n, sizeof(type))"})," to simplify code."]})]})]}),e.jsx(t,{note:"malloc and calloc are your gateways to the heap. Remember: malloc gives you a blank canvas with random paint, calloc gives you a clean white canvas. Always initialize your memory before use — that's the difference between predictable behavior and mysterious bugs. And never forget to free!"})]})]})};export{N as default};
