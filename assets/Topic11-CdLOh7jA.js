import{j as e}from"./index-BqAFCp1G.js";import{T as t}from"./TeacherSukantaHui-CJ7zTtFX.js";import{E as r}from"./EditableCCodeBlock-iowdfmY6.js";import"./git-branch-TI8anLiN.js";import"./index-DlA8mtx2.js";import"./file-code-CAr2FrfU.js";import"./type-CPbU9-ly.js";import"./refresh-cw-Du2h8_Si.js";import"./copy-BGUeFV3f.js";import"./download-BZTnZbA3.js";const a=`#include <stdio.h>\r
#include <string.h>\r
\r
int main() {\r
    // Character array (mutable)\r
    char arr[] = "Hello";\r
    printf("arr = %s\\n", arr);\r
    arr[0] = 'h';               // OK: modify array\r
    printf("Modified arr = %s\\n", arr);\r
    printf("sizeof(arr) = %zu\\n", sizeof(arr));  // 6 (includes '\\\\0')\r
    printf("strlen(arr) = %zu\\n", strlen(arr));  // 5\r
\r
    // Character pointer to string literal (read-only)\r
    char *ptr = "World";\r
    printf("ptr = %s\\n", ptr);\r
    // ptr[0] = 'w';            // DANGEROUS: likely crash\r
    printf("ptr[0] = %c\\n", ptr[0]);  // reading is fine\r
\r
    // Pointer can be reassigned\r
    ptr = arr;                   // now points to array\r
    printf("ptr now points to: %s\\n", ptr);\r
    ptr[0] = 'H';                // modifies arr (since ptr points to arr)\r
    printf("arr after pointer modification: %s\\n", arr);\r
\r
    return 0;\r
}`,s=`#include <stdio.h>\r
#include <string.h>\r
#include <stdlib.h>\r
\r
int main() {\r
    // Safe: modify a character array\r
    char buffer[20] = "Original";\r
    printf("Before: %s\\n", buffer);\r
    strcpy(buffer, "New string");\r
    printf("After strcpy: %s\\n", buffer);\r
    buffer[0] = 'n';\r
    printf("After direct assign: %s\\n", buffer);\r
\r
    // Unsafe: attempt to modify string literal\r
    char *literal = "Constant";\r
    printf("Literal: %s\\n", literal);\r
    // literal[0] = 'c';   // uncomment to see crash (UB)\r
\r
    // Safe: allocate heap memory for mutable string\r
    char *heap_str = malloc(20);\r
    if (heap_str != NULL) {\r
        strcpy(heap_str, "Dynamic");\r
        printf("Heap string: %s\\n", heap_str);\r
        heap_str[0] = 'd';\r
        printf("Modified heap string: %s\\n", heap_str);\r
        free(heap_str);\r
    }\r
\r
    return 0;\r
}`,y=()=>e.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-8 space-y-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300",children:[e.jsxs("div",{className:"animate-fade-up",style:{animationDelay:"0ms"},children:[e.jsx("h1",{className:"text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400",children:"Pointers and Strings: Character Pointers vs Character Arrays"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["In C, strings are represented as null‑terminated character arrays. You can work with them using either ",e.jsx("strong",{children:"character arrays"})," (",e.jsx("code",{children:"char str[]"}),") or ",e.jsx("strong",{children:"character pointers"})," (",e.jsx("code",{children:"char *str"}),"). Understanding the differences is essential for safe and efficient string handling."]})]}),e.jsxs("div",{className:"animate-fade-up grid md:grid-cols-2 gap-6",style:{animationDelay:"50ms"},children:[e.jsxs("div",{className:"group rounded-xl p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"📦 Character Array"}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm",children:`char str1[] = "Hello";
char str2[10] = "World";`}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 mt-2 text-sm",children:[e.jsx("li",{children:"Memory allocated on stack (or static storage if global)."}),e.jsx("li",{children:"Contents can be modified (mutable)."}),e.jsx("li",{children:"Size is fixed at compile time."}),e.jsx("li",{children:"Array name is a constant address (cannot be reassigned)."})]})]}),e.jsxs("div",{className:"group rounded-xl p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🔗 Character Pointer"}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm",children:`char *str1 = "Hello";
char *str2 = malloc(10);
strcpy(str2, "World");`}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 mt-2 text-sm",children:[e.jsx("li",{children:"Pointer points to a string literal (often read‑only) or allocated memory."}),e.jsx("li",{children:"Pointer itself can be reassigned to point elsewhere."}),e.jsx("li",{children:"If pointing to a string literal, modifying it is undefined behavior."}),e.jsx("li",{children:"Often used for dynamic strings."})]})]})]}),e.jsxs("div",{className:"animate-fade-up rounded-xl bg-gray-50 dark:bg-gray-800/50 p-4 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700",style:{animationDelay:"100ms"},children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-center",children:"Memory Layout: Array vs Pointer"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{width:"450",height:"220",viewBox:"0 0 450 220",className:"max-w-full h-auto",children:[e.jsx("rect",{x:"30",y:"30",width:"200",height:"50",fill:"#3B82F6",fillOpacity:"0.2",stroke:"#3B82F6",strokeWidth:"2"}),e.jsx("text",{x:"130",y:"55",textAnchor:"middle",fill:"#3B82F6",fontSize:"12",children:'char str[] = "Hello"'}),e.jsx("rect",{x:"40",y:"85",width:"50",height:"25",fill:"none",stroke:"gray"}),e.jsx("text",{x:"65",y:"102",textAnchor:"middle",fontSize:"10",children:"H"}),e.jsx("rect",{x:"90",y:"85",width:"50",height:"25",fill:"none",stroke:"gray"}),e.jsx("text",{x:"115",y:"102",textAnchor:"middle",fontSize:"10",children:"e"}),e.jsx("rect",{x:"140",y:"85",width:"50",height:"25",fill:"none",stroke:"gray"}),e.jsx("text",{x:"165",y:"102",textAnchor:"middle",fontSize:"10",children:"l"}),e.jsx("rect",{x:"190",y:"85",width:"50",height:"25",fill:"none",stroke:"gray"}),e.jsx("text",{x:"215",y:"102",textAnchor:"middle",fontSize:"10",children:"l"}),e.jsx("rect",{x:"240",y:"85",width:"50",height:"25",fill:"none",stroke:"gray"}),e.jsx("text",{x:"265",y:"102",textAnchor:"middle",fontSize:"10",children:"o"}),e.jsx("rect",{x:"290",y:"85",width:"50",height:"25",fill:"none",stroke:"gray"}),e.jsx("text",{x:"315",y:"102",textAnchor:"middle",fontSize:"10",children:"\\\\0"}),e.jsx("rect",{x:"30",y:"140",width:"120",height:"40",fill:"#10B981",fillOpacity:"0.2",stroke:"#10B981",strokeWidth:"2"}),e.jsx("text",{x:"90",y:"165",textAnchor:"middle",fill:"#10B981",fontSize:"12",children:"char *p"}),e.jsx("path",{d:"M150 160 L190 160",stroke:"#10B981",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"190",y:"130",width:"200",height:"50",fill:"#F59E0B",fillOpacity:"0.2",stroke:"#F59E0B",strokeWidth:"2"}),e.jsx("text",{x:"290",y:"155",textAnchor:"middle",fill:"#F59E0B",fontSize:"12",children:'string literal "Hello" (read‑only)'}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow",markerWidth:"8",markerHeight:"8",refX:"7",refY:"4",orient:"auto",children:e.jsx("polygon",{points:"0 0, 8 4, 0 8",fill:"#10B981"})})})]})}),e.jsx("p",{className:"text-center text-sm mt-2 text-gray-600 dark:text-gray-400",children:"Character arrays store the string in their own memory (mutable). Character pointers point to string literals (often read‑only) or heap memory."})]}),e.jsxs("div",{className:"animate-fade-up space-y-8",style:{animationDelay:"150ms"},children:[e.jsxs("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"📖 Mutability and Storage"}),e.jsx("p",{className:"leading-relaxed",children:"A character array allocates storage for the string. The memory is owned by the array and can be freely modified:"}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2",children:`char s[] = "Hello";
s[0] = 'h';  // OK: s is mutable`}),e.jsx("p",{className:"leading-relaxed mt-2",children:"A character pointer initialized with a string literal points to read‑only memory. Modifying it leads to undefined behavior (often a crash):"}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2",children:`char *p = "Hello";
p[0] = 'h';  // DANGEROUS: undefined behavior`}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Classroom story:"})," At Barrackpore CNAT, ",e.jsx("strong",{children:"Ritaja"})," tried to modify a string literal and got a segmentation fault – a perfect illustration of the difference."]})]}),e.jsxs("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"🔁 Reassignment and Decay"}),e.jsx("p",{className:"leading-relaxed",children:"A character array name is a constant address; you cannot reassign it to point elsewhere:"}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2",children:`char a[] = "Hello";
a = "World";   // ERROR: array name is not an lvalue`}),e.jsx("p",{className:"leading-relaxed mt-2",children:"A character pointer can be reassigned to point to different strings:"}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2",children:`char *p = "Hello";
p = "World";   // OK: p now points to another string literal`}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:["When passing a character array to a function, it decays to a pointer (like any array), so the function sees a ",e.jsx("code",{children:"char*"}),"."]})]})]}),e.jsxs("div",{className:"animate-fade-up space-y-6",style:{animationDelay:"200ms"},children:[e.jsx("h3",{className:"text-2xl font-semibold",children:"💻 Live Examples"}),e.jsx(r,{title:"Example 1: Character Array vs Character Pointer",initialCode:a}),e.jsx(r,{title:"Example 2: Modifying Strings (Safe vs Unsafe)",initialCode:s})]}),e.jsxs("div",{className:"animate-fade-up bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-5 rounded-r-xl",style:{animationDelay:"250ms"},children:[e.jsx("h3",{className:"text-xl font-semibold text-red-700 dark:text-red-400 mb-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Modifying string literals:"})," ",e.jsx("code",{children:`char *p = "text"; p[0] = 'T';`})," – causes undefined behavior."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Using ",e.jsx("code",{children:"sizeof"})," on a pointer vs array:"]})," ",e.jsx("code",{children:"sizeof(arr)"})," gives array size, ",e.jsx("code",{children:"sizeof(ptr)"})," gives pointer size."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Returning local array from function:"})," ",e.jsxs("code",{children:["char *func()",' { char s[] = "hello"; return s; }']})," – returns a dangling pointer."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Confusing ",e.jsx("code",{children:"strlen"})," with ",e.jsx("code",{children:"sizeof"}),":"]})," ",e.jsx("code",{children:"strlen"})," counts characters (excluding null), ",e.jsx("code",{children:"sizeof"})," includes the null and total bytes."]})]})]}),e.jsxs("div",{className:"animate-fade-up bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-5 rounded-r-xl",style:{animationDelay:"300ms"},children:[e.jsx("h3",{className:"text-xl font-semibold text-green-700 dark:text-green-400 mb-2",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:["Use character arrays (",e.jsx("code",{children:'char str[] = "..."'}),") when you need a mutable string with fixed size."]}),e.jsxs("li",{children:["Use character pointers (",e.jsx("code",{children:'char *str = "..."'}),") for read‑only strings or when you need to reassign the pointer."]}),e.jsxs("li",{children:["Always ensure there's enough space when copying into character arrays (",e.jsx("code",{children:"strcpy"}),", ",e.jsx("code",{children:"strncpy"}),")."]}),e.jsx("li",{children:"When returning a string from a function, return a pointer to a static array, a heap‑allocated string, or a string literal – never a local array."})]})]}),e.jsxs("div",{className:"animate-fade-up grid md:grid-cols-2 gap-4",style:{animationDelay:"350ms"},children:[e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"📋 Student Checklist"}),e.jsxs("ul",{className:"space-y-1 text-sm",children:[e.jsx("li",{children:"✅ Understand that strings are null‑terminated character arrays."}),e.jsxs("li",{children:["✅ Can differentiate between ",e.jsx("code",{children:"char arr[]"})," and ",e.jsx("code",{children:"char *ptr"})," for strings."]}),e.jsx("li",{children:"✅ Know that string literals are read‑only and should not be modified."}),e.jsxs("li",{children:["✅ Can correctly use ",e.jsx("code",{children:"sizeof"})," and ",e.jsx("code",{children:"strlen"})," on strings."]})]})]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"💡 Hint Section"}),e.jsx("p",{className:"text-sm",children:"Think about …"}),e.jsxs("ul",{className:"list-disc list-inside text-sm mt-1",children:[e.jsxs("li",{children:["What does ",e.jsx("code",{children:'sizeof("Hello")'})," return? Why is it 6, not 5?"]}),e.jsx("li",{children:"Observe carefully: What happens when you try to modify a string literal on your system? Does it crash or silently work?"}),e.jsxs("li",{children:["Try declaring ",e.jsx("code",{children:'char *p = "Hello";'})," and then ",e.jsx("code",{children:'p = "World";'})," – what changes?"]})]})]})]}),e.jsxs("div",{className:"animate-fade-up p-5 border-t border-gray-200 dark:border-gray-700",style:{animationDelay:"400ms"},children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"🎓 Professional Tips & Tricks"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"const"})]})," to prevent accidental modification: ",e.jsx("code",{children:'const char *p = "Hello";'})," – now the compiler will catch attempts to write."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Prefer ",e.jsx("code",{children:"strlcpy"})," or ",e.jsx("code",{children:"strncpy"})]})," over ",e.jsx("code",{children:"strcpy"})," to avoid buffer overflows (though not standard everywhere)."]}),e.jsx("li",{children:e.jsxs("strong",{children:["For dynamic strings, allocate with ",e.jsx("code",{children:"malloc"})," and remember to ",e.jsx("code",{children:"free"}),"."]})}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"sizeof"})," on array variables"]})," to get the total buffer size, which is useful for bounds checking."]})]})]}),e.jsx("div",{className:"animate-fade-up",style:{animationDelay:"450ms"},children:e.jsx(t,{note:`In Barrackpore CNAT, I emphasize that string literals are like constants – they live in a read‑only part of memory. When you write <code>char *p = "Hello";</code>, you're not copying the string, just pointing to it. To get a modifiable copy, use an array: <code>char s[] = "Hello";</code>. This distinction often shows up in interviews and is the source of many beginner crashes. Always use <code>const</code> when you intend a pointer to read‑only data.`})}),e.jsx("style",{children:`
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
      `})]});export{y as default};
