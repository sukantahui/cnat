import{j as e}from"./index-meFSU1Lv.js";import{c as t}from"./clsx-B-dksMZM.js";import{E as r}from"./EditableCCodeBlock-C1aLYO6_.js";const i=`// basic_function_pointer.c – Declare, assign, and use a function pointer\r
#include <stdio.h>\r
\r
// Two simple functions\r
int add(int a, int b) {\r
    return a + b;\r
}\r
\r
int multiply(int a, int b) {\r
    return a * b;\r
}\r
\r
int main() {\r
    // Declare a function pointer: points to a function taking two ints and returning int\r
    int (*op)(int, int);\r
\r
    // Assign the address of add\r
    op = &add;  // & is optional, function name decays to pointer\r
    // Call through the pointer\r
    int result = op(5, 3);\r
    printf("add: 5 + 3 = %d\\n", result);\r
\r
    // Reassign to multiply\r
    op = multiply;  // without & also works\r
    result = (*op)(5, 3);  // explicit dereference also works\r
    printf("multiply: 5 * 3 = %d\\n", result);\r
\r
    return 0;\r
}`,o=`// callback_example.c – Using a function pointer as a callback with qsort\r
#include <stdio.h>\r
#include <stdlib.h>\r
\r
// Comparator for ascending order\r
int compare_asc(const void *a, const void *b) {\r
    int ia = *(int *)a;\r
    int ib = *(int *)b;\r
    return ia - ib;\r
}\r
\r
// Comparator for descending order\r
int compare_desc(const void *a, const void *b) {\r
    int ia = *(int *)a;\r
    int ib = *(int *)b;\r
    return ib - ia;\r
}\r
\r
// Function that prints an array\r
void print_array(int *arr, int n) {\r
    for (int i = 0; i < n; i++) {\r
        printf("%d ", arr[i]);\r
    }\r
    printf("\\n");\r
}\r
\r
int main() {\r
    int arr[] = {5, 2, 8, 1, 9, 3};\r
    int n = sizeof(arr) / sizeof(arr[0]);\r
\r
    printf("Original: ");\r
    print_array(arr, n);\r
\r
    // qsort takes a function pointer comparator\r
    qsort(arr, n, sizeof(int), compare_asc);\r
    printf("Ascending: ");\r
    print_array(arr, n);\r
\r
    qsort(arr, n, sizeof(int), compare_desc);\r
    printf("Descending: ");\r
    print_array(arr, n);\r
\r
    return 0;\r
}`,h=()=>{const s=new Date().getFullYear()-1998;return e.jsxs("div",{className:"min-h-screen bg-white p-6 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-200",children:[e.jsxs("header",{className:"mb-8 text-center",children:[e.jsx("h1",{className:"mb-2 text-4xl font-extrabold tracking-tight",children:e.jsx("span",{className:"bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-400",children:"Function Pointers – Introduction and Use Cases"})}),e.jsx("p",{className:"mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400",children:"Store and call functions through pointers – enable callbacks, plugins, and flexible code."})]}),e.jsxs("section",{className:t("mb-12 rounded-xl bg-gray-50 p-6 shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gray-800/50","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold",children:"What Are Function Pointers?"}),e.jsxs("p",{className:"leading-relaxed",children:["At Barrackpore CNAT, Abhronila is building a menu system. She wants to call different functions based on user choice – without writing a giant",e.jsx("code",{children:"switch"}),". Function pointers let her store the address of a function in a variable and call it indirectly. They're the backbone of callbacks (e.g., ",e.jsx("code",{children:"qsort"})," comparator), event handlers, and plugin architectures. A function pointer's type includes the return type and parameter types – it must match exactly."]})]}),e.jsx("section",{className:"mb-12 flex justify-center",children:e.jsxs("div",{className:"w-full max-w-2xl rounded-xl bg-gray-100 p-4 dark:bg-gray-800",children:[e.jsxs("svg",{viewBox:"0 0 400 200",className:"w-full",children:[e.jsx("rect",{x:"30",y:"30",width:"120",height:"60",fill:"#3b82f6",rx:"4"}),e.jsx("text",{x:"50",y:"60",fill:"white",fontSize:"10",children:"int add(int, int)"}),e.jsx("text",{x:"50",y:"80",fill:"white",fontSize:"10",children:"{ ... }"}),e.jsx("rect",{x:"200",y:"50",width:"100",height:"40",fill:"#f59e0b",rx:"4"}),e.jsx("text",{x:"220",y:"75",fill:"white",fontSize:"10",children:"ptr = &add"}),e.jsx("line",{x1:"300",y1:"70",x2:"160",y2:"60",stroke:"#6b7280",strokeWidth:"2",markerEnd:"url(#arrowhead)"}),e.jsx("text",{x:"180",y:"130",fill:"#374151",fontSize:"12",children:"(*ptr)(5, 3) → call add"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 5, 0 10",fill:"#6b7280"})})})]}),e.jsx("p",{className:"mt-4 text-center text-sm text-gray-600 dark:text-gray-400",children:"A function pointer stores the address of a function, allowing indirect calls."})]})}),e.jsx("div",{className:"mb-12 grid gap-6 md:grid-cols-1 lg:grid-cols-2",children:[{title:"Syntax",desc:"`return_type (*ptr_name)(parameter_types);` – parentheses matter!",icon:"📝"},{title:"Assigning",desc:"`ptr = &function;` or simply `ptr = function;` (function name decays to pointer).",icon:"🎯"},{title:"Calling",desc:"`result = (*ptr)(args);` or `result = ptr(args);` – both work.",icon:"📞"},{title:"Typedef for Clarity",desc:"`typedef int (*MathOp)(int, int);` makes declarations readable.",icon:"🏷️"},{title:"Arrays of Pointers",desc:"Store multiple functions in an array – useful for dispatch tables.",icon:"📚"},{title:"Callbacks",desc:"Pass a function pointer to another function (e.g., `qsort` comparator) for custom behaviour.",icon:"🔄"}].map((n,a)=>e.jsxs("div",{className:t("group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-cyan-600","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]",`motion-safe:animation-delay-${(a+1)*100}ms`),style:{animationDelay:`${(a+1)*100}ms`},children:[e.jsx("div",{className:"mb-3 text-4xl",children:n.icon}),e.jsx("h3",{className:"mb-2 text-xl font-semibold",children:n.title}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:n.desc})]},a))}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"mb-6 text-2xl font-semibold",children:"Function Pointers in Action"}),e.jsxs("div",{className:"grid gap-8 lg:grid-cols-1",children:[e.jsxs("div",{className:t("rounded-xl border border-blue-200 bg-blue-50/50 p-5 transition-all duration-300 hover:shadow-md dark:border-blue-900 dark:bg-blue-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsxs("h3",{className:"mb-3 flex items-center text-xl font-semibold text-blue-700 dark:text-blue-400",children:[e.jsx("span",{className:"mr-2",children:"🔹"})," Basic Function Pointer"]}),e.jsx(r,{title:"basic_function_pointer.c – Declare, assign, call",initialCode:i}),e.jsx("p",{className:"mt-3 text-gray-600 dark:text-gray-400",children:"Swadeep declares a pointer to a math function, assigns it to `add` and `multiply`, and calls it. The syntax is shown clearly."})]}),e.jsxs("div",{className:t("rounded-xl border border-green-200 bg-green-50/50 p-5 transition-all duration-300 hover:shadow-md dark:border-green-900 dark:bg-green-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]","motion-safe:animation-delay-200ms"),style:{animationDelay:"200ms"},children:[e.jsxs("h3",{className:"mb-3 flex items-center text-xl font-semibold text-green-700 dark:text-green-400",children:[e.jsx("span",{className:"mr-2",children:"🔹"})," Callback with `qsort`"]}),e.jsx(r,{title:"callback_example.c – Comparator as function pointer",initialCode:o}),e.jsx("p",{className:"mt-3 text-gray-600 dark:text-gray-400",children:"Tuhina uses the standard `qsort` which takes a function pointer comparator. This lets her sort in ascending or descending order without changing the sorting algorithm."})]})]})]}),e.jsxs("section",{className:t("mb-12 rounded-xl bg-yellow-50/70 p-6 dark:bg-yellow-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold text-yellow-800 dark:text-yellow-300",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Wrong syntax:"})," `int *func(int, int)` is a function returning a pointer, not a function pointer. Parentheses matter:"," ","`int (*func)(int, int)`."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Missing `&` or `*`:"})," Using the function name alone gives the address; you can also use `&`. Both work, but be consistent."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Calling without dereferencing:"})," `ptr(args)` is allowed, but some prefer `(*ptr)(args)` for clarity."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Signature mismatch:"})," Assigning a function with different parameter or return types leads to undefined behaviour."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Null pointers:"})," Calling a null function pointer crashes. Always check if it's assigned."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting `typedef`:"})," Long pointer types clutter code; use `typedef` to improve readability."]})]})]}),e.jsxs("section",{className:"mb-12 grid gap-6 md:grid-cols-1",children:[e.jsxs("div",{className:t("rounded-xl bg-blue-50/50 p-5 dark:bg-blue-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h3",{className:"mb-3 text-xl font-semibold text-blue-700 dark:text-blue-300",children:"📋 Do's"}),e.jsxs("ul",{className:"list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Use `typedef` to simplify function pointer types."}),e.jsx("li",{children:"Check for NULL before calling a function pointer."}),e.jsx("li",{children:"Keep the signature consistent – use the same return and parameter types."}),e.jsx("li",{children:"Document expected behaviour of callback functions."})]})]}),e.jsxs("div",{className:t("rounded-xl bg-purple-50/50 p-5 dark:bg-purple-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]","motion-safe:animation-delay-200ms"),style:{animationDelay:"200ms"},children:[e.jsx("h3",{className:"mb-3 text-xl font-semibold text-purple-700 dark:text-purple-300",children:"🚫 Don'ts"}),e.jsxs("ul",{className:"list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Forget the parentheses in declarations."}),e.jsx("li",{children:"Assign a function with a mismatched signature."}),e.jsx("li",{children:"Call a function pointer without checking for NULL."}),e.jsx("li",{children:"Overcomplicate – use function pointers only when needed."})]})]})]}),e.jsxs("section",{className:t("mb-12 rounded-xl border border-dashed border-indigo-300 bg-indigo-50/30 p-6 dark:border-indigo-700 dark:bg-indigo-900/10","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-3 text-2xl font-semibold text-indigo-800 dark:text-indigo-300",children:"💡 Hint – Think Like a Pro"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-medium",children:"Observe carefully:"})," In the basic example, the pointer `op` can point to either `add` or `multiply`. This is the essence of polymorphism in C. In the callback example, `qsort` doesn't need to know the comparison logic – it just calls the provided function. ",e.jsx("br",{}),e.jsxs("span",{className:"mt-2 block",children:[e.jsx("strong",{children:"Try changing this:"})," Add a new function `subtract` and assign it to `op`. Modify the menu to choose the operation based on user input using an array of function pointers."]})]})]}),e.jsxs("section",{className:t("mb-12 rounded-xl bg-emerald-50/50 p-6 dark:bg-emerald-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold text-emerald-800 dark:text-emerald-300",children:"🧠 Tips & Tricks (Professional Edge)"}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-1",children:[e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"🗂️ Dispatch Tables"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Use an array of function pointers to replace long switch/case statements. Example: command processors."})]}),e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"🧩 Plugins with `dlopen`"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"On Linux, you can load dynamic libraries and get function pointers using `dlsym` – enabling plugin architectures."})]}),e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"🧪 Unit Testing with Mocks"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Function pointers allow you to inject mock functions during tests, isolating the unit under test."})]}),e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"🏫 Classroom Shortcut"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"At Naihati CNAT, we simulate a calculator using an array of function pointers – students see how it eliminates conditional logic."})]})]})]}),e.jsxs("section",{className:t("mb-12 rounded-xl border-l-4 border-cyan-500 bg-cyan-50/80 p-6 dark:bg-cyan-900/30","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]","transition-all duration-300 hover:border-l-8 hover:shadow-lg"),children:[e.jsx("h2",{className:"mb-3 text-2xl font-semibold text-cyan-800 dark:text-cyan-300",children:"👨‍🏫 Teacher's Note – Sukanta Hui"}),e.jsxs("div",{className:"flex flex-wrap items-start gap-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"mb-2 text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Sukanta Hui"})," (email: sukantahui@codernaccotax.co.in , mobile: 7003756860) has been teaching programming since 1998 – that's ",e.jsxs("strong",{children:[s," years"]})," of experience in C, RDBMS, OS, and web development."]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:`"Function pointers are one of those features that separate intermediate from advanced C programmers. They open the door to callbacks, state machines, and plugins. I always tell my students: once you master function pointers, you understand that functions are just data too – they have addresses, they can be stored and passed around. It's a powerful concept."`})]}),e.jsx("div",{className:"rounded-full bg-cyan-200 p-3 dark:bg-cyan-800",children:e.jsx("svg",{className:"h-12 w-12 text-cyan-700 dark:text-cyan-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})})]})]}),e.jsxs("section",{className:"rounded-xl bg-gray-100 p-6 dark:bg-gray-800",children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold",children:"✅ Mini Checklist"}),e.jsx("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-1",children:["Can I declare a function pointer with correct syntax?","Do I understand the difference between a function and a function pointer?","Have I used `typedef` to simplify complex pointer types?","Do I check for NULL before calling through a pointer?","Have I used function pointers for callbacks or dispatch tables?","Do I avoid signature mismatches?"].map((n,a)=>e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:n})]},a))})]}),e.jsx("style",{children:`
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
      `})]})};export{h as default};
