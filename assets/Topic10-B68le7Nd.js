import{j as e}from"./index-DLefW0Tp.js";import{T as i}from"./TeacherSukantaHui-3y4FXw4k.js";import{E as r}from"./EditableCCodeBlock-D_6vjVa1.js";import"./git-branch-YeYTvmDr.js";import"./index-Ck8vhGSy.js";import"./file-code-DyHBv2VX.js";import"./type-Bom_9Shz.js";import"./refresh-cw-DfWESQEa.js";import"./copy-Im6obCcV.js";import"./download-B1qWbheC.js";const t=`#include <stdio.h>\r
\r
int main() {\r
    int arr[] = {10, 20, 30, 40, 50};\r
    int n = sizeof(arr) / sizeof(arr[0]);\r
\r
    // Using indexing\r
    printf("Using indexing:\\n");\r
    for (int i = 0; i < n; i++) {\r
        printf("%d ", arr[i]);\r
    }\r
    printf("\\n");\r
\r
    // Using pointer arithmetic\r
    printf("Using pointer arithmetic:\\n");\r
    for (int *p = arr; p < arr + n; p++) {\r
        printf("%d ", *p);\r
    }\r
    printf("\\n");\r
\r
    // Mixed: array name with pointer syntax, pointer with subscript\r
    printf("Array name with pointer syntax: ");\r
    for (int i = 0; i < n; i++) {\r
        printf("%d ", *(arr + i));\r
    }\r
    printf("\\n");\r
\r
    int *ptr = arr;\r
    printf("Pointer with subscript: ");\r
    for (int i = 0; i < n; i++) {\r
        printf("%d ", ptr[i]);\r
    }\r
    printf("\\n");\r
\r
    return 0;\r
}`,n=`#include <stdio.h>\r
#include <time.h>\r
\r
// This example demonstrates that both methods compile to similar code.\r
// For large arrays, the performance difference is negligible.\r
\r
#define SIZE 10000000\r
\r
int main() {\r
    int arr[SIZE];\r
    // Initialize array\r
    for (int i = 0; i < SIZE; i++) arr[i] = i;\r
\r
    clock_t start, end;\r
\r
    // Indexing loop\r
    start = clock();\r
    long sum1 = 0;\r
    for (int i = 0; i < SIZE; i++) {\r
        sum1 += arr[i];\r
    }\r
    end = clock();\r
    printf("Indexing time: %f seconds\\n", (double)(end - start) / CLOCKS_PER_SEC);\r
\r
    // Pointer arithmetic loop\r
    start = clock();\r
    long sum2 = 0;\r
    for (int *p = arr; p < arr + SIZE; p++) {\r
        sum2 += *p;\r
    }\r
    end = clock();\r
    printf("Pointer arithmetic time: %f seconds\\n", (double)(end - start) / CLOCKS_PER_SEC);\r
\r
    // Both sums should be equal\r
    printf("sum1 = %ld, sum2 = %ld\\n", sum1, sum2);\r
\r
    return 0;\r
}`,g=()=>e.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-8 space-y-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300",children:[e.jsxs("div",{className:"animate-fade-up",style:{animationDelay:"0ms"},children:[e.jsx("h1",{className:"text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400",children:"Accessing Arrays: Pointers vs Indexing"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["In C, arrays can be accessed using either the subscript operator ",e.jsx("code",{children:"[]"})," or pointer arithmetic. These two methods are interchangeable because ",e.jsx("code",{children:"arr[i]"})," is exactly equivalent to ",e.jsx("code",{children:"*(arr + i)"}),". Understanding both styles gives you flexibility and insight into how C works under the hood."]})]}),e.jsxs("div",{className:"animate-fade-up grid md:grid-cols-2 gap-6",style:{animationDelay:"50ms"},children:[e.jsxs("div",{className:"group rounded-xl p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"📌 Indexing (Subscript) Notation"}),e.jsxs("p",{className:"leading-relaxed",children:["The most common way to access array elements: ",e.jsx("code",{children:"array[index]"}),". It's readable and intuitive."]}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2",children:`int scores[] = {85, 92, 78, 88};
int first = scores[0];    // 85
scores[2] = 95;           // modify third element`}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:["This notation works because arrays decay to pointers, and ",e.jsx("code",{children:"arr[i]"})," is sugar for ",e.jsx("code",{children:"*(arr + i)"}),"."]})]}),e.jsxs("div",{className:"group rounded-xl p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🔗 Pointer Arithmetic Notation"}),e.jsxs("p",{className:"leading-relaxed",children:["Using a pointer to traverse the array: ",e.jsx("code",{children:"*(ptr + offset)"}),". This style is closer to how the machine actually works."]}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2",children:`int scores[] = {85, 92, 78, 88};
int *p = scores;           // p points to scores[0]
int first = *p;            // 85
*(p + 2) = 95;             // modify third element`}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"Often used in low‑level programming and when performance matters."})]})]}),e.jsxs("div",{className:"animate-fade-up rounded-xl bg-gray-50 dark:bg-gray-800/50 p-4 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700",style:{animationDelay:"100ms"},children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-center",children:"arr[i] ⇔ *(arr + i)"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{width:"500",height:"140",viewBox:"0 0 500 140",className:"max-w-full h-auto",children:[e.jsx("rect",{x:"50",y:"30",width:"60",height:"40",fill:"#3B82F6",fillOpacity:"0.2",stroke:"#3B82F6",strokeWidth:"2"}),e.jsx("text",{x:"80",y:"55",textAnchor:"middle",fill:"#3B82F6",fontSize:"12",children:"arr"}),e.jsx("text",{x:"80",y:"80",textAnchor:"middle",fontSize:"10",children:"address"}),e.jsx("text",{x:"150",y:"55",fontSize:"16",fill:"currentColor",children:"+"}),e.jsx("rect",{x:"170",y:"30",width:"60",height:"40",fill:"#10B981",fillOpacity:"0.2",stroke:"#10B981",strokeWidth:"2"}),e.jsx("text",{x:"200",y:"55",textAnchor:"middle",fill:"#10B981",fontSize:"12",children:"i"}),e.jsx("text",{x:"200",y:"80",textAnchor:"middle",fontSize:"10",children:"offset"}),e.jsx("text",{x:"270",y:"55",fontSize:"20",fill:"currentColor",children:"→"}),e.jsx("rect",{x:"310",y:"30",width:"80",height:"40",fill:"#F59E0B",fillOpacity:"0.2",stroke:"#F59E0B",strokeWidth:"2"}),e.jsx("text",{x:"350",y:"55",textAnchor:"middle",fill:"#F59E0B",fontSize:"12",children:"*(arr+i)"}),e.jsx("text",{x:"350",y:"80",textAnchor:"middle",fontSize:"10",children:"value"}),e.jsx("text",{x:"420",y:"55",fontSize:"20",fill:"currentColor",children:"⇔"}),e.jsx("rect",{x:"450",y:"30",width:"40",height:"40",fill:"#A855F7",fillOpacity:"0.2",stroke:"#A855F7",strokeWidth:"2"}),e.jsx("text",{x:"470",y:"55",textAnchor:"middle",fill:"#A855F7",fontSize:"12",children:"arr[i]"})]})}),e.jsx("p",{className:"text-center text-sm mt-2 text-gray-600 dark:text-gray-400",children:"The compiler translates subscript notation into pointer arithmetic automatically."})]}),e.jsxs("div",{className:"animate-fade-up space-y-8",style:{animationDelay:"150ms"},children:[e.jsxs("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"🔍 The Equivalence Explained"}),e.jsxs("p",{className:"leading-relaxed",children:["The C standard defines ",e.jsx("code",{children:"arr[i]"})," as identical to ",e.jsx("code",{children:"*(arr + i)"}),". This is why array indexing is just syntactic sugar for pointer arithmetic."]}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm",children:`int arr[] = {10,20,30};
int *p = arr;
// All these access the same element:
arr[1]   // 20
*(arr+1) // 20
p[1]     // 20
*(p+1)   // 20`}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"Because of this equivalence, you can also use pointer notation on array names and subscript notation on pointers – they are interchangeable."})]}),e.jsxs("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"⚡ Performance Considerations"}),e.jsx("p",{className:"leading-relaxed",children:"With modern compilers, indexing and pointer arithmetic produce identical machine code. The choice is primarily about readability."}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 mt-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Indexing"})," is clearer for simple loops and when the index is used in multiple ways."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Pointer arithmetic"})," can be more concise for walking through arrays without a separate index variable."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Moving pointers (e.g., ",e.jsx("code",{children:"p++"}),")"]})," can be slightly faster in some old compilers, but modern optimizations make it irrelevant."]})]}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Example:"})," At Barrackpore CNAT, ",e.jsx("strong",{children:"Debolina"})," uses pointer arithmetic in tight loops when she needs to process large data sets, though she notes that clarity is more important unless profiling shows a bottleneck."]})]})]}),e.jsxs("div",{className:"animate-fade-up space-y-6",style:{animationDelay:"200ms"},children:[e.jsx("h3",{className:"text-2xl font-semibold",children:"💻 Try Both Methods"}),e.jsx(r,{title:"Example 1: Pointer vs Indexing Comparison",initialCode:t}),e.jsx(r,{title:"Example 2: Performance Comparison (Conceptual)",initialCode:n})]}),e.jsxs("div",{className:"animate-fade-up bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-5 rounded-r-xl",style:{animationDelay:"250ms"},children:[e.jsx("h3",{className:"text-xl font-semibold text-red-700 dark:text-red-400 mb-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Off-by-one errors:"})," When using pointer arithmetic, it's easy to go one past the end (e.g., ",e.jsx("code",{children:"while(p <= end)"})," vs ",e.jsx("code",{children:"p < end"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mixing array and pointer declarations incorrectly:"})," ",e.jsx("code",{children:"int *p = arr;"})," works, but ",e.jsx("code",{children:"int *p = &arr;"})," gives wrong type."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming pointer notation is always faster:"})," Modern compilers optimize both equally; focus on clarity."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Modifying the base pointer when you still need the start:"})," If you increment ",e.jsx("code",{children:"p"}),", you lose the original address unless you keep a copy."]})]})]}),e.jsxs("div",{className:"animate-fade-up bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-5 rounded-r-xl",style:{animationDelay:"300ms"},children:[e.jsx("h3",{className:"text-xl font-semibold text-green-700 dark:text-green-400 mb-2",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"Use indexing for simple, straightforward access – it's more readable."}),e.jsxs("li",{children:["When you need to traverse an array without an explicit index, consider pointer arithmetic (e.g., ",e.jsxs("code",{children:["while(p < end) ","{ ... p++; }"]}),")."]}),e.jsx("li",{children:"If you use pointer arithmetic and need the original address, store it in another variable."}),e.jsx("li",{children:"Be consistent: in a given function, use one style for clarity unless there's a good reason to mix."})]})]}),e.jsxs("div",{className:"animate-fade-up grid md:grid-cols-2 gap-4",style:{animationDelay:"350ms"},children:[e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"📋 Student Checklist"}),e.jsxs("ul",{className:"space-y-1 text-sm",children:[e.jsxs("li",{children:["✅ Understand that ",e.jsx("code",{children:"arr[i]"})," is exactly ",e.jsx("code",{children:"*(arr + i)"}),"."]}),e.jsx("li",{children:"✅ Can access arrays using both subscript and pointer arithmetic."}),e.jsxs("li",{children:["✅ Know that pointers can be indexed (",e.jsx("code",{children:"p[i]"}),") and arrays can be dereferenced (",e.jsx("code",{children:"*(arr+offset)"}),")."]}),e.jsx("li",{children:"✅ Recognize when to use each style for readability and maintenance."})]})]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"💡 Hint Section"}),e.jsx("p",{className:"text-sm",children:"Think about …"}),e.jsxs("ul",{className:"list-disc list-inside text-sm mt-1",children:[e.jsxs("li",{children:["What is the difference between ",e.jsx("code",{children:"p++"})," and ",e.jsx("code",{children:"p+1"})," in terms of the original pointer value?"]}),e.jsxs("li",{children:["Observe carefully: ",e.jsx("code",{children:"arr[0]"})," and ",e.jsx("code",{children:"0[arr]"})," – why does the latter also work?"]}),e.jsx("li",{children:"Try writing a loop to copy an array using pointer arithmetic and using indexing – which feels more natural to you?"})]})]})]}),e.jsxs("div",{className:"animate-fade-up p-5 border-t border-gray-200 dark:border-gray-700",style:{animationDelay:"400ms"},children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"🎓 Professional Tips & Tricks"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsxs("code",{children:["p = arr; while(p < arr + n)"," { ... p++; }"]})]})," for pointer traversal – it's a common pattern in low‑level code."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Prefer indexing when you need the index for other calculations"})," (e.g., ",e.jsx("code",{children:"arr[i] = arr[i] * 2;"}),")."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Remember that ",e.jsx("code",{children:"arr[i]"})," is equivalent to ",e.jsx("code",{children:"i[arr]"})]})," because addition is commutative: ",e.jsx("code",{children:"*(arr + i) == *(i + arr)"}),". This is a quirky but valid syntax."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"When passing arrays to functions,"})," you can use either style in the function body – the parameter is a pointer, so both work."]})]})]}),e.jsx("div",{className:"animate-fade-up",style:{animationDelay:"450ms"},children:e.jsx(i,{note:"In our Barrackpore CNAT class, I encourage students to become bilingual: speak both indexing and pointer arithmetic. The subscript notation is comfortable, but understanding pointer arithmetic is essential when you work with dynamic memory or implement data structures. Remember, they are two faces of the same coin – the compiler translates indexing into pointer arithmetic anyway. Choose what makes your code clearer, but be able to read both."})}),e.jsx("style",{children:`
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
