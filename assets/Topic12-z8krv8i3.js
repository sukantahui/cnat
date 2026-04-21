import{j as e}from"./index-ClZJ1mc6.js";import{c as i}from"./clsx-B-dksMZM.js";import{T as l}from"./TeacherSukantaHui-C5B16Hzi.js";import{E as n}from"./EditableCCodeBlock-BL4FgPq3.js";import"./git-branch-BU7Gu4_P.js";import"./index-xzOXAXCa.js";import"./file-code-Bm_e03QA.js";import"./type-CUIneCZE.js";import"./refresh-cw-DJpiWDpA.js";import"./copy-CXgArkpC.js";import"./download-CEyrZhXI.js";const o=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct {\r
    int id;\r
    char name[50];\r
} Person;\r
\r
int main() {\r
    Person *p = (Person*)malloc(sizeof(Person));\r
    if (!p) {\r
        printf("Allocation failed\\n");\r
        return 1;\r
    }\r
    p->id = 101;\r
    sprintf(p->name, "Swadeep");\r
    printf("Person: id=%d, name=%s\\n", p->id, p->name);\r
    free(p);\r
    return 0;\r
}`,d=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <string.h>\r
\r
int main() {\r
    int n = 5;\r
    // Using malloc (uninitialized)\r
    int *arr = (int*)malloc(n * sizeof(int));\r
    if (!arr) return 1;\r
    // Initialize manually\r
    for (int i = 0; i < n; i++)\r
        arr[i] = i * 10;\r
\r
    // Using calloc (zero‑initialized)\r
    int *arr2 = (int*)calloc(n, sizeof(int));\r
    if (!arr2) {\r
        free(arr);\r
        return 1;\r
    }\r
\r
    printf("malloc array: ");\r
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\r
    printf("\\n");\r
    printf("calloc array: ");\r
    for (int i = 0; i < n; i++) printf("%d ", arr2[i]);\r
    printf("\\n");\r
\r
    free(arr);\r
    free(arr2);\r
    return 0;\r
}`,c=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct Node {\r
    int data;\r
    struct Node *next;\r
} Node;\r
\r
Node* create_node(int value) {\r
    Node *new_node = (Node*)malloc(sizeof(Node));\r
    if (!new_node) return NULL;\r
    new_node->data = value;\r
    new_node->next = NULL;\r
    return new_node;\r
}\r
\r
void free_list(Node *head) {\r
    Node *current = head;\r
    while (current) {\r
        Node *temp = current;\r
        current = current->next;\r
        free(temp);\r
    }\r
}\r
\r
int main() {\r
    Node *head = create_node(10);\r
    head->next = create_node(20);\r
    head->next->next = create_node(30);\r
\r
    // Traverse and print\r
    Node *ptr = head;\r
    while (ptr) {\r
        printf("%d ", ptr->data);\r
        ptr = ptr->next;\r
    }\r
    printf("\\n");\r
\r
    free_list(head);\r
    return 0;\r
}`,h=`
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
`,k=()=>{const r=["0ms","100ms","200ms","300ms","400ms","500ms","600ms","700ms","800ms","900ms","1000ms","1100ms"],t=()=>i("animate-fade-slide-up","opacity-0");return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:h}),e.jsxs("div",{className:"w-full max-w-5xl mx-auto px-4 py-8 space-y-12 dark:bg-gray-900 bg-gray-50 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:[e.jsxs("div",{className:t(),style:{animationDelay:r[0]},children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400",children:"Common Allocation Patterns"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 mt-2 leading-relaxed",children:"Single objects, arrays, and structures — the building blocks of dynamic memory."})]}),e.jsxs("section",{className:t(),style:{animationDelay:r[1]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4 mb-4",children:"Recurring Patterns in Heap Management"}),e.jsx("p",{className:"leading-relaxed mb-3",children:"Most dynamic memory usage falls into a few common patterns. Recognizing these patterns helps you write cleaner, more maintainable code. This topic covers the three most frequent allocation scenarios: allocating a single object, allocating an array of objects, and allocating structures that contain pointers to other heap‑allocated data."}),e.jsx("p",{className:"leading-relaxed",children:"Mastering these patterns gives you a solid foundation for building dynamic data structures like linked lists, trees, and dynamic strings."})]}),e.jsxs("section",{className:t(),style:{animationDelay:r[2]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-4 mb-4",children:"📦 Pattern 1: Single Object Allocation"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsx("p",{className:"leading-relaxed mb-3",children:"Allocating a single object (like a struct or a scalar) is straightforward:"}),e.jsx("div",{className:"font-mono text-sm p-3 bg-gray-100 dark:bg-gray-700 rounded mb-3",children:"MyStruct *ptr = (MyStruct*)malloc(sizeof(MyStruct));"}),e.jsxs("p",{className:"leading-relaxed",children:["After allocation, you can access members using ",e.jsx("code",{children:"ptr-&gt member"}),". Don't forget to free it later."]}),e.jsx("div",{className:"mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"💡 Tip:"})," Use ",e.jsx("code",{children:"sizeof(*ptr)"})," to avoid type mismatches: ",e.jsx("code",{children:"malloc(sizeof(*ptr))"}),"."]})})]})]}),e.jsxs("section",{className:t(),style:{animationDelay:r[3]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-4 mb-4",children:"📚 Pattern 2: Array Allocation"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsxs("p",{className:"leading-relaxed mb-3",children:["For arrays of objects, you allocate ",e.jsx("code",{children:"count * sizeof(element)"})," bytes. You can use ",e.jsx("code",{children:"malloc"}),"(uninitialized) or ",e.jsx("code",{children:"calloc"})," (zero‑initialized)."]}),e.jsxs("div",{className:"font-mono text-sm p-3 bg-gray-100 dark:bg-gray-700 rounded mb-3",children:["int *arr = (int*)malloc(10 * sizeof(int));",e.jsx("br",{}),"MyStruct *arr2 = (MyStruct*)calloc(5, sizeof(MyStruct));"]}),e.jsxs("p",{className:"leading-relaxed",children:["Access elements like a normal array: ",e.jsx("code",{children:"arr[i]"}),". Remember to free the entire block with one ",e.jsx("code",{children:"free"})," call."]}),e.jsx("div",{className:"mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"⚠️ Warning:"})," Never mix ",e.jsx("code",{children:"malloc"})," and ",e.jsx("code",{children:"free"})," per element; free the whole block once."]})})]})]}),e.jsxs("section",{className:t(),style:{animationDelay:r[4]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-red-500 pl-4 mb-4",children:"🔗 Pattern 3: Structures Containing Pointers"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsx("p",{className:"leading-relaxed mb-3",children:"Often a structure holds pointers to other heap data. For example, a linked list node:"}),e.jsxs("div",{className:"font-mono text-sm p-3 bg-gray-100 dark:bg-gray-700 rounded mb-3",children:["struct Node ","{ int value; struct Node *next; }",";"]}),e.jsx("p",{className:"leading-relaxed mb-3",children:"You must allocate the node itself, and then separately allocate any data it points to (unless the pointer is to shared/static data). Freeing must happen in reverse order: free the inner pointers first, then the outer structure."}),e.jsx("div",{className:"p-3 bg-green-50 dark:bg-green-900/20 rounded",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"✅ Good practice:"})," Write a dedicated cleanup function that traverses and frees the entire structure."]})})]})]}),e.jsxs("section",{className:t(),style:{animationDelay:r[5]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-4 mb-4",children:"🖼️ Visualizing Allocation Patterns"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md transition-all duration-300 hover:shadow-xl",children:e.jsxs("svg",{viewBox:"0 0 800 300",className:"w-full h-auto","aria-label":"Allocation patterns",children:[e.jsx("rect",{width:"800",height:"300",fill:"transparent"}),e.jsx("rect",{x:"50",y:"30",width:"180",height:"60",fill:"rgba(34,197,94,0.1)",stroke:"#22c55e",strokeWidth:"2",rx:"4"}),e.jsx("text",{x:"60",y:"55",fill:"currentColor",className:"text-xs",children:"Single object"}),e.jsx("text",{x:"60",y:"75",fill:"currentColor",className:"text-xs",children:"ptr → [MyStruct]"}),e.jsx("rect",{x:"300",y:"30",width:"280",height:"60",fill:"rgba(168,85,247,0.1)",stroke:"#a855f7",strokeWidth:"2",rx:"4"}),e.jsx("text",{x:"310",y:"55",fill:"currentColor",className:"text-xs",children:"Array of 5 elements"}),[320,360,400,440,480].map((a,s)=>e.jsx("rect",{x:a,y:"65",width:"30",height:"20",fill:"rgba(168,85,247,0.2)",stroke:"#a855f7",strokeWidth:"1"},s)),e.jsx("text",{x:"325",y:"80",fill:"currentColor",children:"0"}),e.jsx("text",{x:"365",y:"80",fill:"currentColor",children:"1"}),e.jsx("text",{x:"405",y:"80",fill:"currentColor",children:"2"}),e.jsx("text",{x:"445",y:"80",fill:"currentColor",children:"3"}),e.jsx("text",{x:"485",y:"80",fill:"currentColor",children:"4"}),e.jsx("rect",{x:"50",y:"140",width:"200",height:"80",fill:"rgba(239,68,68,0.1)",stroke:"#ef4444",strokeWidth:"2",rx:"4"}),e.jsxs("text",{x:"60",y:"165",fill:"currentColor",className:"text-xs",children:["Node ","{ value, next }"]}),e.jsx("line",{x1:"160",y1:"185",x2:"250",y2:"185",stroke:"#ef4444",strokeWidth:"1",markerEnd:"url(#arrow12)"}),e.jsx("rect",{x:"260",y:"155",width:"150",height:"50",fill:"rgba(239,68,68,0.1)",stroke:"#ef4444",strokeWidth:"2",rx:"4"}),e.jsx("text",{x:"270",y:"180",fill:"currentColor",className:"text-xs",children:"Next node"}),e.jsx("text",{x:"270",y:"195",fill:"currentColor",className:"text-xs",children:"(heap allocated)"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow12",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 5, 0 10",fill:"#ef4444"})})})]})})]}),e.jsxs("section",{className:t(),style:{animationDelay:r[6]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-red-500 pl-4 mb-4",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(n,{title:"Example 1: Single object allocation",initialCode:o}),e.jsx(n,{title:"Example 2: Array allocation (malloc vs calloc)",initialCode:d}),e.jsx(n,{title:"Example 3: Structure with nested pointers (linked list)",initialCode:c})]})]}),e.jsxs("section",{className:t(),style:{animationDelay:r[7]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-orange-500 pl-4 mb-4",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200 bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to allocate for nested pointers:"})," Structure allocated, but pointer members still point to garbage."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Freeing in wrong order:"})," Freeing the outer structure before inner pointers → memory leak."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Using ",e.jsx("code",{children:"sizeof(ptr)"})," instead of ",e.jsx("code",{children:"sizeof(*ptr)"}),":"]})," Allocates space for a pointer, not the object."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mixing array and scalar free:"})," Trying to free each element of a dynamically allocated array individually."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not handling allocation failures:"})," After a failure, partial cleanup can leak."]})]})]}),e.jsxs("section",{className:t(),style:{animationDelay:r[8]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-4 mb-4",children:"✅ Best Practices"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{children:["✔️ Use ",e.jsx("code",{children:"sizeof(*ptr)"})," to allocate: ",e.jsx("code",{children:"malloc(sizeof(*ptr))"})," avoids type repetition."]}),e.jsxs("li",{children:["✔️ For arrays, prefer ",e.jsx("code",{children:"calloc"})," if you need zero‑initialization."]}),e.jsxs("li",{children:["✔️ For structures with nested pointers, write a dedicated ",e.jsx("code",{children:"free_XXX"})," function that recursively frees."]}),e.jsx("li",{children:"✔️ Always check allocation success and handle failure."}),e.jsxs("li",{children:["✔️ Use consistent naming: ",e.jsx("code",{children:"create_XXX"})," for allocation + initialization, ",e.jsx("code",{children:"destroy_XXX"})," for deallocation."]})]})})]}),e.jsxs("section",{className:t(),style:{animationDelay:r[9]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-4 mb-4",children:"📋 Mini Checklist"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:e.jsxs("ul",{className:"space-y-1",children:[e.jsx("li",{children:"☐ I know how to allocate a single object on the heap."}),e.jsx("li",{children:"☐ I can allocate and access a dynamic array."}),e.jsx("li",{children:"☐ I understand how to allocate structures that contain pointers to other heap data."}),e.jsx("li",{children:"☐ I know the correct order for freeing nested structures."}),e.jsx("li",{children:"☐ I always check allocation return values."})]})})]}),e.jsxs("section",{className:t(),style:{animationDelay:r[10]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4 mb-4",children:"💡 Hint Section"}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl",children:[e.jsx("p",{className:"italic",children:"Think about..."}),e.jsxs("ul",{className:"list-disc list-inside mt-2",children:[e.jsx("li",{children:"In the linked list example, what would happen if you free the node before its next pointer?"}),e.jsxs("li",{children:["How would you allocate a 2D array using a single ",e.jsx("code",{children:"malloc"})," call?"]}),e.jsxs("li",{children:["Why is it better to use ",e.jsx("code",{children:"sizeof(*ptr)"})," instead of ",e.jsx("code",{children:"sizeof(MyStruct)"}),"?"]})]})]})]}),e.jsxs("section",{className:t(),style:{animationDelay:r[11]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-4 mb-4",children:"🔧 Professional Tips & Tricks"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow space-y-2",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"🎯 Debugging mindset:"})," Use ",e.jsx("code",{children:"valgrind"})," to verify that you free all allocated memory, especially in complex structures."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"📦 Memory efficiency:"})," For structures with pointers, consider allocating the structure and its data in one block to reduce fragmentation and improve locality."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"🧹 Cleanup patterns:"})," Always pair creation and destruction functions; document ownership."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"📏 Code readability:"})," Use typedefs to simplify complex types and reduce typing errors."]})]})]}),e.jsx(l,{note:"Patterns are the grammar of programming. Mastering these three allocation patterns will let you build almost any dynamic data structure. Remember: allocate from the outside in, free from the inside out. When in doubt, draw the memory layout on paper — it will guide your allocation and deallocation order."})]})]})};export{k as default};
