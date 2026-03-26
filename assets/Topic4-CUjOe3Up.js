import{j as e}from"./index-C8tfbTD8.js";import{c as i}from"./clsx-B-dksMZM.js";import{T as n}from"./TeacherSukantaHui-C2tsAS37.js";import{E as t}from"./EditableCCodeBlock-0_Yux5OR.js";import"./git-branch-D1JBeaoB.js";import"./index-HicrMSGH.js";import"./file-code--LqktZ78.js";import"./type-Bi9GEJ3m.js";import"./refresh-cw-CMU7apYp.js";import"./copy-CxoiTVpg.js";import"./download-DO3hLbeb.js";const o=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <malloc.h>\r
\r
int main() {\r
    int *p_malloc = (int*)malloc(5 * sizeof(int));\r
    int *p_calloc = (int*)calloc(5, sizeof(int));\r
\r
    if (!p_malloc || !p_calloc) {\r
        printf("Allocation failed\\n");\r
        free(p_malloc);\r
        free(p_calloc);\r
        return 1;\r
    }\r
\r
    printf("malloc array: ");\r
    for (int i = 0; i < 5; i++) {\r
        printf("%d ", p_malloc[i]); // may be garbage\r
    }\r
    printf("\\n");\r
\r
    printf("calloc array: ");\r
    for (int i = 0; i < 5; i++) {\r
        printf("%d ", p_calloc[i]); // always zeros\r
    }\r
    printf("\\n");\r
\r
    free(p_malloc);\r
    free(p_calloc);\r
    return 0;\r
}`,c=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <time.h>\r
\r
#define SIZE 10000000 // 10 million integers\r
\r
int main() {\r
    clock_t start, end;\r
    int *a, *b;\r
\r
    // malloc + manual zeroing (if needed)\r
    start = clock();\r
    a = (int*)malloc(SIZE * sizeof(int));\r
    if (a) {\r
        for (long i = 0; i < SIZE; i++) a[i] = 0; // manual zeroing\r
    }\r
    end = clock();\r
    printf("malloc + manual zeroing: %lf ms\\n", (double)(end - start) * 1000 / CLOCKS_PER_SEC);\r
\r
    // calloc (zeros automatically)\r
    start = clock();\r
    b = (int*)calloc(SIZE, sizeof(int));\r
    end = clock();\r
    printf("calloc: %lf ms\\n", (double)(end - start) * 1000 / CLOCKS_PER_SEC);\r
\r
    free(a);\r
    free(b);\r
    return 0;\r
}`,d=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct {\r
    int id;\r
    char name[50];\r
    float score;\r
} Student;\r
\r
int main() {\r
    // calloc ensures all fields are zeroed\r
    Student *students = (Student*)calloc(3, sizeof(Student));\r
    if (!students) return 1;\r
\r
    // No need to manually initialize id=0, name[0]='\\0', score=0.0\r
    for (int i = 0; i < 3; i++) {\r
        printf("Student %d: id=%d, name='%s', score=%.2f\\n",\r
               i, students[i].id, students[i].name, students[i].score);\r
    }\r
\r
    free(students);\r
    return 0;\r
}`,m=`
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
`,k=()=>{const r=["0ms","100ms","200ms","300ms","400ms","500ms","600ms","700ms","800ms","900ms","1000ms","1100ms"],s=()=>i("animate-fade-slide-up","opacity-0");return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:m}),e.jsxs("div",{className:"w-full max-w-5xl mx-auto px-4 py-8 space-y-12 dark:bg-gray-900 bg-gray-50 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:[e.jsxs("div",{className:s(),style:{animationDelay:r[0]},children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400",children:"malloc vs calloc — Initialization & Performance"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 mt-2 leading-relaxed",children:"Choosing the right allocation function: when speed matters and when safety wins."})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[1]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4 mb-4",children:"Two Sides of the Same Coin"}),e.jsxs("p",{className:"leading-relaxed mb-3",children:["Both ",e.jsx("code",{children:"malloc()"})," and ",e.jsx("code",{children:"calloc()"})," allocate memory from the heap, but they differ in two critical aspects: ",e.jsx("strong",{children:"initialization"})," and",e.jsx("strong",{children:"performance"}),". Understanding these differences helps you pick the right tool for the job."]}),e.jsx("p",{className:"leading-relaxed",children:"The table below summarizes the key differences at a glance."})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[2]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-4 mb-4",children:"📊 Quick Comparison"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-200 dark:border-gray-700",children:[e.jsx("th",{className:"px-6 py-3 text-left text-sm font-semibold",children:"Feature"}),e.jsx("th",{className:"px-6 py-3 text-left text-sm font-semibold",children:"malloc"}),e.jsx("th",{className:"px-6 py-3 text-left text-sm font-semibold",children:"calloc"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:[e.jsx("td",{className:"px-6 py-4 text-sm",children:"Prototype"}),e.jsx("td",{className:"px-6 py-4 font-mono text-sm",children:"void* malloc(size_t size);"}),e.jsx("td",{className:"px-6 py-4 font-mono text-sm",children:"void* calloc(size_t nmemb, size_t size);"})]}),e.jsxs("tr",{className:"border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:[e.jsx("td",{className:"px-6 py-4 text-sm",children:"Initialization"}),e.jsx("td",{className:"px-6 py-4 text-sm",children:"Uninitialized (contains garbage)"}),e.jsx("td",{className:"px-6 py-4 text-sm",children:"Zero‑initialized (all bytes set to 0)"})]}),e.jsxs("tr",{className:"border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:[e.jsx("td",{className:"px-6 py-4 text-sm",children:"Arguments"}),e.jsx("td",{className:"px-6 py-4 text-sm",children:"Single argument: total bytes"}),e.jsx("td",{className:"px-6 py-4 text-sm",children:"Two arguments: number of elements × element size"})]}),e.jsxs("tr",{className:"border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:[e.jsx("td",{className:"px-6 py-4 text-sm",children:"Performance"}),e.jsx("td",{className:"px-6 py-4 text-sm",children:"Faster (no zeroing overhead)"}),e.jsx("td",{className:"px-6 py-4 text-sm",children:"Slightly slower (must write zeros)"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:[e.jsx("td",{className:"px-6 py-4 text-sm",children:"Use case"}),e.jsx("td",{className:"px-6 py-4 text-sm",children:"When you'll immediately initialize the memory"}),e.jsx("td",{className:"px-6 py-4 text-sm",children:"When you need zero‑initialized memory (arrays, strings, structures)"})]})]})]})})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[3]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-4 mb-4",children:"🔍 Initialization: The Core Difference"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-medium mb-3",children:"malloc — Raw, Uninitialized Memory"}),e.jsxs("p",{className:"leading-relaxed mb-4",children:[e.jsx("code",{children:"malloc"})," gives you a block of memory exactly as the system provides it. The contents are ",e.jsx("strong",{children:"indeterminate"}),' — often referred to as "garbage". Reading from this memory before writing to it is ',e.jsx("strong",{children:"undefined behavior"}),"and can lead to crashes, security vulnerabilities, or mysterious bugs."]}),e.jsx("h3",{className:"text-xl font-medium mt-6 mb-3",children:"calloc — Guaranteed Zero‑Initialization"}),e.jsxs("p",{className:"leading-relaxed mb-4",children:[e.jsx("code",{children:"calloc"})," allocates and then ",e.jsx("strong",{children:"writes zeros"})," to every byte of the allocated block. This makes it safe to use immediately without explicit initialization. For arrays of integers, pointers, or structures, this often sets default values (0, NULL, false) that are predictable."]}),e.jsx("div",{className:"p-3 bg-blue-50 dark:bg-blue-900/20 rounded border-l-4 border-blue-500",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"💡 Insight:"})," In some operating systems,",e.jsx("code",{children:"calloc"})," can be implemented using OS‑level zero‑filled pages, which might be just as fast as ",e.jsx("code",{children:"malloc"})," for large allocations."]})})]})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[4]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-yellow-500 pl-4 mb-4",children:"⚡ Performance: Speed vs Safety"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsxs("p",{className:"leading-relaxed mb-3",children:["Because ",e.jsx("code",{children:"calloc"})," must zero the memory, it generally takes more time than",e.jsx("code",{children:"malloc"}),". However, the difference is often negligible for small or moderate allocations. For large allocations (megabytes), the zeroing overhead can be noticeable."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-4",children:[e.jsxs("div",{className:"p-3 bg-gray-100 dark:bg-gray-700 rounded",children:[e.jsx("p",{className:"font-semibold",children:"When malloc wins:"}),e.jsxs("ul",{className:"list-disc list-inside text-sm mt-1",children:[e.jsx("li",{children:"You'll write to every byte immediately"}),e.jsx("li",{children:"Performance is critical and you can guarantee initialization"}),e.jsx("li",{children:"You need to allocate extremely large blocks (and will write them anyway)"})]})]}),e.jsxs("div",{className:"p-3 bg-gray-100 dark:bg-gray-700 rounded",children:[e.jsx("p",{className:"font-semibold",children:"When calloc wins:"}),e.jsxs("ul",{className:"list-disc list-inside text-sm mt-1",children:[e.jsx("li",{children:"You need zero‑initialized memory (e.g., arrays, structures)"}),e.jsx("li",{children:"Safety and predictability matter more than a few microseconds"}),e.jsx("li",{children:"You're allocating for strings or data that should start as empty"})]})]})]})]})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[5]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-4 mb-4",children:"🖼️ Visualizing the Difference"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md transition-all duration-300 hover:shadow-xl",children:e.jsxs("svg",{viewBox:"0 0 800 280",className:"w-full h-auto","aria-label":"malloc vs calloc memory content",children:[e.jsx("rect",{width:"800",height:"280",fill:"transparent"}),e.jsx("rect",{x:"50",y:"30",width:"300",height:"120",fill:"rgba(34,197,94,0.1)",stroke:"#22c55e",strokeWidth:"2",rx:"6"}),e.jsx("text",{x:"60",y:"55",fill:"currentColor",className:"text-sm font-mono",children:"malloc(5 * sizeof(int))"}),[70,90,110,130,150].map((l,a)=>e.jsx("rect",{x:l,y:"70",width:"30",height:"25",fill:"none",stroke:"#22c55e",strokeWidth:"1"},a)),e.jsx("text",{x:"75",y:"85",fill:"currentColor",className:"text-xs",children:"??"}),e.jsx("text",{x:"95",y:"85",fill:"currentColor",className:"text-xs",children:"??"}),e.jsx("text",{x:"115",y:"85",fill:"currentColor",className:"text-xs",children:"??"}),e.jsx("text",{x:"135",y:"85",fill:"currentColor",className:"text-xs",children:"??"}),e.jsx("text",{x:"155",y:"85",fill:"currentColor",className:"text-xs",children:"??"}),e.jsx("text",{x:"65",y:"115",fill:"currentColor",className:"text-xs text-gray-500",children:"garbage values (uninitialized)"}),e.jsx("rect",{x:"450",y:"30",width:"300",height:"120",fill:"rgba(168,85,247,0.1)",stroke:"#a855f7",strokeWidth:"2",rx:"6"}),e.jsx("text",{x:"460",y:"55",fill:"currentColor",className:"text-sm font-mono",children:"calloc(5, sizeof(int))"}),[470,490,510,530,550].map((l,a)=>e.jsx("rect",{x:l,y:"70",width:"30",height:"25",fill:"rgba(168,85,247,0.2)",stroke:"#a855f7",strokeWidth:"1"},a)),e.jsx("text",{x:"475",y:"85",fill:"currentColor",className:"text-xs",children:"0"}),e.jsx("text",{x:"495",y:"85",fill:"currentColor",className:"text-xs",children:"0"}),e.jsx("text",{x:"515",y:"85",fill:"currentColor",className:"text-xs",children:"0"}),e.jsx("text",{x:"535",y:"85",fill:"currentColor",className:"text-xs",children:"0"}),e.jsx("text",{x:"555",y:"85",fill:"currentColor",className:"text-xs",children:"0"}),e.jsx("text",{x:"465",y:"115",fill:"currentColor",className:"text-xs text-gray-500",children:"all bytes zero‑initialized"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow4",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 5, 0 10",fill:"#6b7280"})})}),e.jsx("line",{x1:"350",y1:"95",x2:"450",y2:"95",stroke:"#6b7280",strokeWidth:"2",markerEnd:"url(#arrow4)",strokeDasharray:"4 2",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"0",to:"20",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"380",y:"85",fill:"#6b7280",className:"text-xs",children:"calloc = malloc + zero fill"}),e.jsx("text",{x:"50",y:"200",fill:"currentColor",className:"text-sm font-mono",children:"malloc performance:"}),e.jsx("rect",{x:"50",y:"210",width:"300",height:"20",fill:"#22c55e",rx:"3"}),e.jsx("text",{x:"360",y:"225",fill:"currentColor",className:"text-xs",children:"faster"}),e.jsx("text",{x:"450",y:"200",fill:"currentColor",className:"text-sm font-mono",children:"calloc performance:"}),e.jsx("rect",{x:"450",y:"210",width:"280",height:"20",fill:"#a855f7",rx:"3"}),e.jsx("text",{x:"740",y:"225",fill:"currentColor",className:"text-xs",children:"slightly slower (zeroing)"})]})})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[6]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-red-500 pl-4 mb-4",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(t,{title:"Example 1: malloc vs calloc — direct comparison",initialCode:o}),e.jsx(t,{title:"Example 2: Performance difference (conceptual)",initialCode:c}),e.jsx(t,{title:"Example 3: Zero‑initialization importance",initialCode:d})]})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[7]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-orange-500 pl-4 mb-4",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200 bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming malloc zeros memory:"})," Leads to reading garbage values and unexpected behavior."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using calloc for everything:"})," Unnecessary zeroing can hurt performance in tight loops."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to check for NULL:"})," Both can fail; ignoring it leads to crashes."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mixing up arguments:"})," ",e.jsx("code",{children:"calloc(5, sizeof(int))"})," vs ",e.jsx("code",{children:"malloc(5 * sizeof(int))"})," – both work, but mistakes happen."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Overlooking zero‑initialization for pointers:"})," ",e.jsx("code",{children:"calloc"})," sets pointer members to NULL, which is often safe."]})]})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[8]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-4 mb-4",children:"✅ Best Practices"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{children:["✔️ Use ",e.jsx("code",{children:"calloc"})," when you need zero‑initialized memory (arrays, strings, structures with default values)."]}),e.jsxs("li",{children:["✔️ Use ",e.jsx("code",{children:"malloc"})," when you will immediately initialize the memory yourself."]}),e.jsxs("li",{children:["✔️ Always check for ",e.jsx("code",{children:"NULL"})," after allocation, regardless of which function you use."]}),e.jsx("li",{children:"✔️ For large allocations, profile both to see if zeroing overhead matters."}),e.jsx("li",{children:'✔️ Document your choice: e.g., "calloc ensures all fields are zeroed initially".'})]})})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[9]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-4 mb-4",children:"📋 Mini Checklist"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:e.jsxs("ul",{className:"space-y-1",children:[e.jsx("li",{children:"☐ I can explain the initialization difference between malloc and calloc."}),e.jsx("li",{children:"☐ I understand the performance trade‑off and when to choose each."}),e.jsx("li",{children:"☐ I know the prototypes and argument patterns."}),e.jsx("li",{children:"☐ I always check return values for NULL."}),e.jsx("li",{children:"☐ I can refactor code to use the appropriate function based on need."})]})})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[10]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4 mb-4",children:"💡 Hint Section"}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl",children:[e.jsx("p",{className:"italic",children:"Observe carefully..."}),e.jsxs("ul",{className:"list-disc list-inside mt-2",children:[e.jsx("li",{children:"Run the comparison example multiple times — does the garbage value change?"}),e.jsx("li",{children:"Try measuring time for large allocations (e.g., 100MB) with malloc vs calloc."}),e.jsx("li",{children:"What happens if you use calloc for an array of pointers? Are they all NULL?"})]})]})]}),e.jsxs("section",{className:s(),style:{animationDelay:r[11]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-4 mb-4",children:"🔧 Professional Tips & Tricks"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow space-y-2",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"🎯 Debugging mindset:"})," Use tools like Valgrind to detect reads of uninitialized memory from malloc."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"📦 Performance tuning:"})," For real‑time systems, prefer malloc and explicitly initialize only what's needed."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"🧹 Code clarity:"})," Use a macro or wrapper that chooses the right function based on a flag: ",e.jsx("code",{children:"ALLOC_ZERO"})," vs ",e.jsx("code",{children:"ALLOC_RAW"}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"📏 Security:"})," calloc can help avoid information leaks because it doesn't expose previous heap contents."]})]})]}),e.jsx(n,{note:"Think of malloc as a blank piece of paper with random scribbles – you must erase it (initialize) before use. calloc gives you a clean, white sheet. In exams and interviews, always highlight this initialization difference. Also remember: the performance gap is often exaggerated; clarity and safety usually win in production code."})]})]})};export{k as default};
