import{j as e}from"./index-CgrI_Laf.js";import{T as a}from"./TeacherSukantaHui-D9kEmX0Z.js";import{E as s}from"./EditableCCodeBlock-5V4KWsn4.js";import"./git-branch-CFfeJ8S6.js";import"./index-BvTPtaj8.js";import"./file-code-2RxvfW50.js";import"./type-DqKvpRLb.js";import"./refresh-cw-B-aRxUAQ.js";import"./copy-BuYwAn1F.js";import"./download-CL3XA5zm.js";const i=`#include <stdio.h>\r
\r
void printArraySize(int arr[]) {\r
    // Here arr is a pointer, not an array\r
    printf("Inside function: sizeof(arr) = %zu\\n", sizeof(arr));  // prints pointer size\r
}\r
\r
int main() {\r
    int nums[10] = {1,2,3,4,5,6,7,8,9,10};\r
\r
    // In main, nums is an array\r
    printf("In main: sizeof(nums) = %zu\\n", sizeof(nums));   // 40 (if int=4)\r
\r
    // When passed, nums decays to pointer\r
    printArraySize(nums);\r
\r
    // Demonstrating decay: arr == &arr[0]\r
    printf("nums = %p\\n", (void*)nums);\r
    printf("&nums[0] = %p\\n", (void*)&nums[0]);\r
    printf("&nums = %p (address of whole array)\\n", (void*)&nums);\r
\r
    return 0;\r
}`,t=`#include <stdio.h>\r
\r
int main() {\r
    int arr[5] = {10, 20, 30, 40, 50};\r
    int *ptr = arr;   // ptr points to arr[0]\r
\r
    // Array notation\r
    printf("arr[2] = %d\\n", arr[2]);\r
\r
    // Pointer arithmetic\r
    printf("*(ptr+2) = %d\\n", *(ptr+2));\r
\r
    // Both work because arr decays to pointer in arr[2] -> *(arr+2)\r
    printf("*(arr+2) = %d\\n", *(arr+2));\r
\r
    // Difference: sizeof\r
    printf("sizeof(arr) = %zu\\n", sizeof(arr));   // 20\r
    printf("sizeof(ptr) = %zu\\n", sizeof(ptr));   // 8 (on 64-bit)\r
\r
    // Difference: &arr vs &ptr\r
    printf("&arr = %p\\n", (void*)&arr);     // address of whole array\r
    printf("&ptr = %p\\n", (void*)&ptr);     // address of pointer variable\r
\r
    return 0;\r
}`,f=()=>e.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-8 space-y-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300",children:[e.jsxs("div",{className:"animate-fade-up",style:{animationDelay:"0ms"},children:[e.jsx("h1",{className:"text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400",children:"Arrays & Pointers: The Array Decay Concept"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["In C, arrays and pointers are closely related. When an array name is used in most expressions, it ",e.jsx("strong",{children:"decays"})," to a pointer to its first element. Understanding this decay is crucial to mastering array manipulation and pointer arithmetic."]})]}),e.jsxs("div",{className:"animate-fade-up grid md:grid-cols-2 gap-6",style:{animationDelay:"50ms"},children:[e.jsxs("div",{className:"group rounded-xl p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"📉 What is Array Decay?"}),e.jsx("p",{className:"leading-relaxed",children:'In most contexts, the name of an array evaluates to the address of its first element. This is called "decay" because the array type is lost – it becomes a pointer.'}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2",children:`int arr[5] = {1,2,3,4,5};
int *p = arr;    // arr decays to &arr[0]
// Now p can be used like an array`}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Analogy:"})," At Barrackpore CNAT, ",e.jsx("strong",{children:"Debangshu"})," thinks of an array as a row of lockers. The array name is like the building address – it points to the first locker, not the entire row."]})]}),e.jsxs("div",{className:"group rounded-xl p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"⚠️ Exceptions (No Decay)"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"sizeof(arr)"})," – gives total size of array, not pointer size."]}),e.jsxs("li",{children:[e.jsx("code",{children:"&arr"})," – gives address of the whole array (type is pointer to array)."]}),e.jsxs("li",{children:["String literals used to initialize character arrays: ",e.jsx("code",{children:'char str[] = "hello";'})," (no decay here)."]})]}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"Understanding these exceptions prevents many bugs."})]})]}),e.jsxs("div",{className:"animate-fade-up rounded-xl bg-gray-50 dark:bg-gray-800/50 p-4 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700",style:{animationDelay:"100ms"},children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-center",children:"Array Name → Pointer to First Element"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{width:"450",height:"180",viewBox:"0 0 450 180",className:"max-w-full h-auto",children:[e.jsx("rect",{x:"40",y:"30",width:"320",height:"50",fill:"none",stroke:"currentColor",strokeWidth:"1"}),[0,1,2,3,4].map(r=>e.jsx("rect",{x:40+r*64,y:"30",width:"64",height:"50",fill:"none",stroke:"gray",strokeWidth:"1"},r)),e.jsx("text",{x:72,y:"65",textAnchor:"middle",fontSize:"12",children:"arr[0]"}),e.jsx("text",{x:136,y:"65",textAnchor:"middle",fontSize:"12",children:"arr[1]"}),e.jsx("text",{x:200,y:"65",textAnchor:"middle",fontSize:"12",children:"arr[2]"}),e.jsx("text",{x:264,y:"65",textAnchor:"middle",fontSize:"12",children:"arr[3]"}),e.jsx("text",{x:328,y:"65",textAnchor:"middle",fontSize:"12",children:"arr[4]"}),e.jsx("path",{d:"M200 100 L200 140",stroke:"#10B981",strokeWidth:"2",strokeDasharray:"4"}),e.jsx("text",{x:"210",y:"120",fill:"#10B981",fontSize:"12",children:"decays to"}),e.jsx("rect",{x:"150",y:"145",width:"100",height:"30",fill:"#10B981",fillOpacity:"0.2",stroke:"#10B981",strokeWidth:"2"}),e.jsx("text",{x:"200",y:"165",textAnchor:"middle",fill:"#10B981",fontSize:"12",children:"&arr[0]"})]})}),e.jsxs("p",{className:"text-center text-sm mt-2 text-gray-600 dark:text-gray-400",children:["The array name ",e.jsx("code",{children:"arr"})," becomes a pointer to its first element in most expressions."]})]}),e.jsxs("div",{className:"animate-fade-up space-y-8",style:{animationDelay:"150ms"},children:[e.jsxs("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"📖 How Decay Affects Function Calls"}),e.jsx("p",{className:"leading-relaxed",children:"When you pass an array to a function, it decays to a pointer. This is why the function receives a pointer, not a copy of the array."}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm",children:`void printArray(int *arr, int size) { // arr is a pointer
    for(int i=0; i<size; i++)
        printf("%d ", arr[i]); // arr[i] works because of decay
}

int main() {
    int nums[] = {1,2,3};
    printArray(nums, 3); // nums decays to pointer
}`}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"This explains why you must pass the size separately – the pointer carries no length information."})]}),e.jsxs("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"🔍 The Exceptions: When Arrays Don't Decay"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:e.jsx("code",{children:"sizeof(arr)"})}),": returns total bytes of the array, not pointer size."]}),e.jsxs("li",{children:[e.jsx("strong",{children:e.jsx("code",{children:"&arr"})}),": yields address of the entire array (type is ",e.jsx("code",{children:"int (*)[n]"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"String literal initialization:"})," ",e.jsx("code",{children:'char s[] = "hello";'})," – here ",e.jsx("code",{children:"s"})," is an array, not a pointer."]})]}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2",children:`int arr[10];
printf("%zu\\n", sizeof(arr));     // 40 (if int=4)
printf("%zu\\n", sizeof(&arr));    // 8 (pointer size)`})]})]}),e.jsxs("div",{className:"animate-fade-up space-y-6",style:{animationDelay:"200ms"},children:[e.jsx("h3",{className:"text-2xl font-semibold",children:"💻 Observe Decay in Action"}),e.jsx(s,{title:"Example 1: Array Decay and sizeof",initialCode:i}),e.jsx(s,{title:"Example 2: Array vs Pointer Differences",initialCode:t})]}),e.jsxs("div",{className:"animate-fade-up bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-5 rounded-r-xl",style:{animationDelay:"250ms"},children:[e.jsx("h3",{className:"text-xl font-semibold text-red-700 dark:text-red-400 mb-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming arrays are passed by value:"})," They decay to pointers, so modifications inside a function affect the original array."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Using ",e.jsx("code",{children:"sizeof"})," on array parameter:"]})," Inside a function, the parameter is a pointer, so ",e.jsx("code",{children:"sizeof"})," returns pointer size, not array size."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Confusing ",e.jsx("code",{children:"&arr"})," with ",e.jsx("code",{children:"arr"}),":"]})," ",e.jsx("code",{children:"&arr"})," is a pointer to the whole array, while ",e.jsx("code",{children:"arr"})," decays to pointer to first element. Their types differ."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting that decay doesn't happen everywhere:"})," Applying ",e.jsx("code",{children:"sizeof"})," to an array works as expected only in the scope where the array is declared."]})]})]}),e.jsxs("div",{className:"animate-fade-up bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-5 rounded-r-xl",style:{animationDelay:"300ms"},children:[e.jsx("h3",{className:"text-xl font-semibold text-green-700 dark:text-green-400 mb-2",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"Always pass the array size explicitly to functions that receive arrays (since they see only a pointer)."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"sizeof(arr) / sizeof(arr[0])"})," to get element count, but only in the same scope where the array is defined."]}),e.jsxs("li",{children:["If you need to preserve array type information, consider wrapping the array in a struct (rare) or using C11's ",e.jsx("code",{children:"_Static_assert"})," to check sizes."]}),e.jsxs("li",{children:["Be consistent: treat array parameters as pointers in function declarations (e.g., ",e.jsx("code",{children:"int arr[]"})," is equivalent to ",e.jsx("code",{children:"int *arr"}),")."]})]})]}),e.jsxs("div",{className:"animate-fade-up grid md:grid-cols-2 gap-4",style:{animationDelay:"350ms"},children:[e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"📋 Student Checklist"}),e.jsxs("ul",{className:"space-y-1 text-sm",children:[e.jsx("li",{children:"✅ Understand that array names decay to pointers to their first element."}),e.jsxs("li",{children:["✅ Know the exceptions: ",e.jsx("code",{children:"sizeof"}),", ",e.jsx("code",{children:"&"}),", and string literal initialization."]}),e.jsx("li",{children:"✅ Can explain why arrays are passed to functions as pointers."}),e.jsxs("li",{children:["✅ Recognize the difference between ",e.jsx("code",{children:"arr"})," and ",e.jsx("code",{children:"&arr"}),"."]})]})]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"💡 Hint Section"}),e.jsx("p",{className:"text-sm",children:"Think about …"}),e.jsxs("ul",{className:"list-disc list-inside text-sm mt-1",children:[e.jsxs("li",{children:["What happens if you try to assign an array to another array? ",e.jsx("code",{children:"int a[5], b[5]; a = b;"})," – why is it invalid?"]}),e.jsxs("li",{children:["Observe carefully: How does ",e.jsx("code",{children:"sizeof"})," behave inside a function vs in ",e.jsx("code",{children:"main"})," for the same array?"]}),e.jsxs("li",{children:["Try printing ",e.jsx("code",{children:"arr"})," and ",e.jsx("code",{children:"&arr"})," – they have the same value but different types. How can you verify?"]})]})]})]}),e.jsxs("div",{className:"animate-fade-up p-5 border-t border-gray-200 dark:border-gray-700",style:{animationDelay:"400ms"},children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"🎓 Professional Tips & Tricks"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"static"})," in function parameters (C99):"]})," ",e.jsx("code",{children:"void func(int arr[static 10])"})," hints that at least 10 elements are expected."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"When you need to pass a multidimensional array,"})," only the first dimension decays; others must be specified."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Understand that ",e.jsx("code",{children:"arr[i]"})," is syntactic sugar for ",e.jsx("code",{children:"*(arr + i)"}),"."]})," This equivalence is fundamental."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"For generic array functions,"})," accept ",e.jsx("code",{children:"void*"})," and element size to work with any array type (like ",e.jsx("code",{children:"qsort"}),")."]})]})]}),e.jsx("div",{className:"animate-fade-up",style:{animationDelay:"450ms"},children:e.jsx(a,{note:"In our Barrackpore CNAT class, we call array decay the 'shape‑shifting' of arrays. I tell students: 'An array is a fixed block of memory, but its name transforms into a pointer when you use it.' The exceptions are crucial: use sizeof in the same scope to get the true size. Also, remember that passing an array to a function is passing a pointer – modifications will be visible outside. This is both powerful and dangerous, so stay vigilant!"})}),e.jsx("style",{children:`
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
      `})]});export{f as default};
