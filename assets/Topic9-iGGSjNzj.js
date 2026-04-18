import{j as e}from"./index-CTaFCVvl.js";import{c as s}from"./clsx-B-dksMZM.js";import{T as l}from"./TeacherSukantaHui-CXljMfmu.js";import{E as t}from"./EditableCCodeBlock-BmWb9UM9.js";import"./git-branch-DjtSZz17.js";import"./index-RG1_EAcX.js";import"./file-code-DdaZ0WP2.js";import"./type-Wnld5au3.js";import"./refresh-cw-ClGJKkyE.js";import"./copy-DY-fjKN5.js";import"./download-CVsa0i-2.js";const d=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct {\r
    int *data;\r
    int size;\r
    int capacity;\r
} DynamicArray;\r
\r
DynamicArray* create(int capacity) {\r
    DynamicArray *arr = malloc(sizeof(DynamicArray));\r
    if (!arr) return NULL;\r
    arr->data = malloc(capacity * sizeof(int));\r
    if (!arr->data) {\r
        free(arr);\r
        return NULL;\r
    }\r
    arr->size = 0;\r
    arr->capacity = capacity;\r
    return arr;\r
}\r
\r
void append(DynamicArray *arr, int value) {\r
    if (arr->size == arr->capacity) {\r
        // Grow\r
        arr->capacity *= 2;\r
        int *new_data = realloc(arr->data, arr->capacity * sizeof(int));\r
        if (!new_data) return; // Error handling omitted for brevity\r
        arr->data = new_data;\r
    }\r
    arr->data[arr->size++] = value;\r
}\r
\r
int get(DynamicArray *arr, int index) {\r
    if (index >= 0 && index < arr->size)\r
        return arr->data[index];\r
    return -1; // error\r
}\r
\r
void destroy(DynamicArray *arr) {\r
    if (arr) {\r
        free(arr->data);\r
        free(arr);\r
    }\r
}\r
\r
int main() {\r
    DynamicArray *vec = create(2);\r
    append(vec, 10);\r
    append(vec, 20);\r
    append(vec, 30); // forces growth\r
\r
    for (int i = 0; i < vec->size; i++)\r
        printf("%d ", get(vec, i));\r
    printf("\\n");\r
\r
    destroy(vec);\r
    return 0;\r
}`,o=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct {\r
    int *data;\r
    int size;\r
    int capacity;\r
} DynArray;\r
\r
DynArray* dyn_create(int cap) {\r
    DynArray *da = malloc(sizeof(DynArray));\r
    if (!da) return NULL;\r
    da->data = malloc(cap * sizeof(int));\r
    if (!da->data) { free(da); return NULL; }\r
    da->size = 0;\r
    da->capacity = cap;\r
    return da;\r
}\r
\r
void dyn_append(DynArray *da, int val) {\r
    if (da->size == da->capacity) {\r
        int new_cap = da->capacity * 2; // doubling\r
        int *tmp = realloc(da->data, new_cap * sizeof(int));\r
        if (!tmp) return;\r
        da->data = tmp;\r
        da->capacity = new_cap;\r
    }\r
    da->data[da->size++] = val;\r
}\r
\r
void dyn_destroy(DynArray *da) {\r
    if (da) { free(da->data); free(da); }\r
}\r
\r
int main() {\r
    DynArray *arr = dyn_create(1);\r
    for (int i = 0; i < 100; i++) {\r
        dyn_append(arr, i);\r
        printf("size=%d, capacity=%d\\n", arr->size, arr->capacity);\r
    }\r
    dyn_destroy(arr);\r
    return 0;\r
}`,c=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct {\r
    int *data;\r
    int size;\r
    int capacity;\r
} DynArray;\r
\r
DynArray* dyn_create(int cap) {\r
    DynArray *da = malloc(sizeof(DynArray));\r
    if (!da) return NULL;\r
    da->data = malloc(cap * sizeof(int));\r
    if (!da->data) { free(da); return NULL; }\r
    da->size = 0;\r
    da->capacity = cap;\r
    return da;\r
}\r
\r
void dyn_append(DynArray *da, int val) {\r
    if (da->size == da->capacity) {\r
        int new_cap = da->capacity * 2;\r
        int *tmp = realloc(da->data, new_cap * sizeof(int));\r
        if (!tmp) return;\r
        da->data = tmp;\r
        da->capacity = new_cap;\r
    }\r
    da->data[da->size++] = val;\r
}\r
\r
int dyn_pop(DynArray *da) {\r
    if (da->size == 0) return -1;\r
    int val = da->data[--da->size];\r
    // Shrink if size <= capacity/4 and capacity > 4\r
    if (da->size <= da->capacity / 4 && da->capacity > 4) {\r
        int new_cap = da->capacity / 2;\r
        int *tmp = realloc(da->data, new_cap * sizeof(int));\r
        if (tmp) {\r
            da->data = tmp;\r
            da->capacity = new_cap;\r
        }\r
    }\r
    return val;\r
}\r
\r
void dyn_destroy(DynArray *da) {\r
    if (da) { free(da->data); free(da); }\r
}\r
\r
int main() {\r
    DynArray *arr = dyn_create(8);\r
    for (int i = 0; i < 100; i++) dyn_append(arr, i);\r
    printf("After pushes: size=%d, capacity=%d\\n", arr->size, arr->capacity);\r
    for (int i = 0; i < 80; i++) dyn_pop(arr);\r
    printf("After pops: size=%d, capacity=%d\\n", arr->size, arr->capacity);\r
    dyn_destroy(arr);\r
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
`,v=()=>{const r=["0ms","100ms","200ms","300ms","400ms","500ms","600ms","700ms","800ms","900ms","1000ms"],a=()=>s("animate-fade-slide-up","opacity-0");return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:m}),e.jsxs("div",{className:"w-full max-w-5xl mx-auto px-4 py-8 space-y-12 dark:bg-gray-900 bg-gray-50 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:[e.jsxs("div",{className:a(),style:{animationDelay:r[0]},children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400",children:"Building Dynamic Arrays (Resizable Arrays)"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 mt-2 leading-relaxed",children:"Creating flexible containers that grow and shrink as needed — the C way."})]}),e.jsxs("section",{className:a(),style:{animationDelay:r[1]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4 mb-4",children:"The Need for Resizable Arrays"}),e.jsxs("p",{className:"leading-relaxed mb-3",children:["In many real-world scenarios, you don't know how many elements you'll need at compile time. A dynamic array (often called a ",e.jsx("strong",{children:"vector"})," or ",e.jsx("strong",{children:"resizable array"}),") solves this by automatically managing memory. It starts with a small capacity and grows (or shrinks) as elements are added or removed."]}),e.jsxs("p",{className:"leading-relaxed",children:["This topic shows you how to build such a structure from scratch using ",e.jsx("code",{children:"malloc"}),",",e.jsx("code",{children:"realloc"}),", and ",e.jsx("code",{children:"free"}),". Understanding this builds a solid foundation for understanding higher‑level containers like C++ ",e.jsx("code",{children:"std::vector"}),"."]})]}),e.jsxs("section",{className:a(),style:{animationDelay:r[2]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-4 mb-4",children:"📦 Anatomy of a Dynamic Array"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsx("p",{className:"leading-relaxed mb-3",children:"A dynamic array is typically implemented as a structure containing:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 mb-4",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"data"})," – pointer to the heap‑allocated block of memory."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"size"})," – current number of elements stored."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"capacity"})," – total number of elements that can be stored without reallocation."]})]}),e.jsxs("p",{children:["When you add an element and ",e.jsx("code",{children:"size == capacity"}),", you grow the array — usually doubling the capacity — using ",e.jsx("code",{children:"realloc"}),". Similarly, you may shrink when too much memory is unused."]}),e.jsx("div",{className:"mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded border-l-4 border-blue-500",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"💡 Strategy:"})," Doubling capacity ensures amortized O(1) insertion, because reallocations happen rarely."]})})]})]}),e.jsxs("section",{className:a(),style:{animationDelay:r[3]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-4 mb-4",children:"🔧 Implementing the Core Operations"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-medium mb-2",children:"Initialization"}),e.jsx("p",{className:"font-mono text-sm mb-3",children:"create(initial_capacity) – allocate memory and set size=0, capacity=initial."}),e.jsx("h3",{className:"text-xl font-medium mb-2 mt-4",children:"Append / Push"}),e.jsx("p",{className:"font-mono text-sm mb-3",children:"if size == capacity → capacity *= 2; realloc; then store element at data[size++]"}),e.jsx("h3",{className:"text-xl font-medium mb-2 mt-4",children:"Access"}),e.jsx("p",{className:"font-mono text-sm mb-3",children:"return data[index] (bounds checking optional)"}),e.jsx("h3",{className:"text-xl font-medium mb-2 mt-4",children:"Remove / Pop"}),e.jsx("p",{className:"font-mono text-sm mb-3",children:"size--; optionally shrink if size is below a threshold (e.g., capacity/4)"}),e.jsx("h3",{className:"text-xl font-medium mb-2 mt-4",children:"Destruction"}),e.jsx("p",{className:"font-mono text-sm",children:"free(data);"})]})]}),e.jsxs("section",{className:a(),style:{animationDelay:r[4]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-4 mb-4",children:"🖼️ Dynamic Array Growth"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md transition-all duration-300 hover:shadow-xl",children:e.jsxs("svg",{viewBox:"0 0 800 260",className:"w-full h-auto","aria-label":"Dynamic array growth",children:[e.jsx("rect",{width:"800",height:"260",fill:"transparent"}),e.jsx("text",{x:"50",y:"30",fill:"currentColor",className:"text-sm",children:"Initial: capacity=4, size=3"}),e.jsx("rect",{x:"50",y:"50",width:"320",height:"50",fill:"none",stroke:"#3b82f6",strokeWidth:"2",rx:"4"}),[70,130,190,250].map((i,n)=>e.jsx("rect",{x:i,y:"60",width:"50",height:"30",fill:n<3?"rgba(59,130,246,0.2)":"rgba(156,163,175,0.2)",stroke:n<3?"#3b82f6":"#9ca3af",strokeWidth:"1"},n)),e.jsx("text",{x:"85",y:"80",fill:"currentColor",children:"A"}),e.jsx("text",{x:"145",y:"80",fill:"currentColor",children:"B"}),e.jsx("text",{x:"205",y:"80",fill:"currentColor",children:"C"}),e.jsx("text",{x:"265",y:"80",fill:"gray",children:"-"}),e.jsx("text",{x:"50",y:"130",fill:"currentColor",className:"text-sm",children:"Append D → capacity doubled to 8, size=4"}),e.jsx("rect",{x:"50",y:"150",width:"560",height:"50",fill:"none",stroke:"#22c55e",strokeWidth:"2",rx:"4"}),[70,130,190,250,310,370,430,490].map((i,n)=>e.jsx("rect",{x:i,y:"160",width:"50",height:"30",fill:n<4?"rgba(34,197,94,0.2)":"rgba(156,163,175,0.2)",stroke:n<4?"#22c55e":"#9ca3af",strokeWidth:"1"},n)),e.jsx("text",{x:"85",y:"180",fill:"currentColor",children:"A"}),e.jsx("text",{x:"145",y:"180",fill:"currentColor",children:"B"}),e.jsx("text",{x:"205",y:"180",fill:"currentColor",children:"C"}),e.jsx("text",{x:"265",y:"180",fill:"currentColor",children:"D"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow9",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 5, 0 10",fill:"#22c55e"})})}),e.jsx("line",{x1:"380",y1:"80",x2:"380",y2:"150",stroke:"#22c55e",strokeWidth:"2",markerEnd:"url(#arrow9)",strokeDasharray:"4 2",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"0",to:"20",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"390",y:"115",fill:"#22c55e",className:"text-xs",children:"realloc"})]})})]}),e.jsxs("section",{className:a(),style:{animationDelay:r[5]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-red-500 pl-4 mb-4",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(t,{title:"Example 1: Simple dynamic array",initialCode:d}),e.jsx(t,{title:"Example 2: Growth strategy (doubling)",initialCode:o}),e.jsx(t,{title:"Example 3: Shrinking strategy",initialCode:c})]})]}),e.jsxs("section",{className:a(),style:{animationDelay:r[6]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-orange-500 pl-4 mb-4",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200 bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to update capacity after realloc:"})," leads to buffer overflows."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not checking realloc return value:"})," if it fails, you lose the original pointer."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Growing by a fixed amount (e.g., +1):"})," results in O(n²) insertion cost."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Shrinking too aggressively:"})," can cause repeated reallocations when elements are added/removed frequently (thrashing)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not freeing memory on destruction:"})," memory leak."]})]})]}),e.jsxs("section",{className:a(),style:{animationDelay:r[7]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-4 mb-4",children:"✅ Best Practices"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{children:"✔️ Use a growth factor (typically 2 or 1.5) to achieve amortized O(1) insertion."}),e.jsxs("li",{children:["✔️ Store capacity and size as separate variables to avoid expensive ",e.jsx("code",{children:"sizeof"})," calculations."]}),e.jsx("li",{children:"✔️ When shrinking, consider a threshold (e.g., shrink when size ≤ capacity/4) to avoid thrashing."}),e.jsxs("li",{children:["✔️ Always use a temporary pointer for ",e.jsx("code",{children:"realloc"})," and check for failure."]}),e.jsxs("li",{children:["✔️ Provide clear interfaces: functions like ",e.jsx("code",{children:"append"}),", ",e.jsx("code",{children:"get"}),", ",e.jsx("code",{children:"set"}),", ",e.jsx("code",{children:"free"}),"."]})]})})]}),e.jsxs("section",{className:a(),style:{animationDelay:r[8]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-4 mb-4",children:"📋 Mini Checklist"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:e.jsxs("ul",{className:"space-y-1",children:[e.jsx("li",{children:"☐ I understand the three components: data pointer, size, capacity."}),e.jsx("li",{children:"☐ I know how to grow an array using realloc with doubling strategy."}),e.jsx("li",{children:"☐ I can implement a safe realloc check with a temporary pointer."}),e.jsx("li",{children:"☐ I can shrink an array safely (optional)."}),e.jsx("li",{children:"☐ I can free the entire dynamic array when done."})]})})]}),e.jsxs("section",{className:a(),style:{animationDelay:r[9]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4 mb-4",children:"💡 Hint Section"}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl",children:[e.jsx("p",{className:"italic",children:"Think about..."}),e.jsxs("ul",{className:"list-disc list-inside mt-2",children:[e.jsxs("li",{children:["What would happen if you use ",e.jsx("code",{children:"realloc"})," on every append (growth factor 1)? How does performance change?"]}),e.jsx("li",{children:"If you allocate 1 million elements, what's the memory overhead of storing size and capacity?"}),e.jsx("li",{children:"How would you handle insertion in the middle? Would you need to shift elements?"})]})]})]}),e.jsxs("section",{className:a(),style:{animationDelay:r[10]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-4 mb-4",children:"🔧 Professional Tips & Tricks"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow space-y-2",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"🎯 Debugging mindset:"})," Use ",e.jsx("code",{children:"valgrind"})," to check for memory leaks and off‑by‑one errors."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"📦 Performance:"})," For large arrays, preallocate capacity to avoid reallocations (e.g., ",e.jsx("code",{children:"reserve()"}),")."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"🧹 Code reuse:"})," Implement dynamic arrays generically using ",e.jsx("code",{children:"void*"})," and element size (like ",e.jsx("code",{children:"qsort"}),")."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"📏 Memory overhead:"})," For tiny elements, store pointers to heap objects or use a pool allocator."]})]})]}),e.jsx(l,{note:"Building your own dynamic array is a rite of passage for C programmers. The doubling strategy is not just a trick — it's a proven technique used in C++ std::vector and many other containers. Mastering this will give you deep insight into how high‑level languages manage memory under the hood."})]})]})};export{v as default};
