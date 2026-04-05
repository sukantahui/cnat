import{j as e}from"./index-BHC-ARLC.js";import{T as a}from"./TeacherSukantaHui-DvxCJFHD.js";import{E as r}from"./EditableCCodeBlock-BzTuOAxp.js";import"./git-branch-DdU2eNTK.js";import"./index-ME8AnmeB.js";import"./file-code-55V_qcat.js";import"./type-Nkw_JIR4.js";import"./refresh-cw-B3VDvcQ8.js";import"./copy-DNi4hkEF.js";import"./download-BuOPxyOv.js";const i=`#include <stdio.h>\r
#include <string.h>\r
\r
int main() {\r
    // String literal (read-only)\r
    char *literal = "Hello";\r
    printf("literal = %s\\n", literal);\r
    // Attempting to modify leads to undefined behavior\r
    // literal[0] = 'h';   // DANGEROUS: will likely crash\r
\r
    // Modifiable character array\r
    char array[] = "Hello";\r
    printf("array = %s\\n", array);\r
    array[0] = 'h';          // Safe: modifies the array\r
    printf("After modification: array = %s\\n", array);\r
\r
    // Demonstrating that the pointer can be reassigned\r
    literal = array;         // now points to modifiable memory\r
    literal[0] = 'H';        // OK because array is writable\r
    printf("After reassign: literal points to: %s\\n", literal);\r
\r
    // The array name cannot be reassigned\r
    // array = "World";      // ERROR: array name is not an lvalue\r
\r
    return 0;\r
}`,t=`#include <stdio.h>\r
#include <string.h>\r
#include <stdlib.h>\r
\r
int main() {\r
    // 1. Using a character array\r
    char arr[] = "Immutable? No, I'm mutable!";\r
    arr[0] = 'i';\r
    printf("Array: %s\\n", arr);\r
\r
    // 2. Using dynamic allocation\r
    char *heap = malloc(30);\r
    if (heap != NULL) {\r
        strcpy(heap, "I'm on the heap");\r
        heap[0] = 'i';\r
        printf("Heap: %s\\n", heap);\r
        free(heap);\r
    }\r
\r
    // 3. Using a static array (global or static)\r
    static char static_arr[] = "Static storage";\r
    static_arr[0] = 's';\r
    printf("Static: %s\\n", static_arr);\r
\r
    // 4. Copying a literal into an array\r
    char buffer[20];\r
    strcpy(buffer, "Hello literal");\r
    buffer[0] = 'h';\r
    printf("Copied: %s\\n", buffer);\r
\r
    return 0;\r
}`,g=()=>e.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-8 space-y-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300",children:[e.jsxs("div",{className:"animate-fade-up",style:{animationDelay:"0ms"},children:[e.jsx("h1",{className:"text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400",children:"Immutable String Literals vs Modifiable Arrays"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["C distinguishes between ",e.jsx("strong",{children:"string literals"})," (read‑only) and ",e.jsx("strong",{children:"modifiable character arrays"}),". Attempting to modify a string literal leads to undefined behavior, while arrays can be safely changed. Understanding this difference is crucial for writing robust string code."]})]}),e.jsxs("div",{className:"animate-fade-up grid md:grid-cols-2 gap-6",style:{animationDelay:"50ms"},children:[e.jsxs("div",{className:"group rounded-xl p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🔒 Immutable String Literals"}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm",children:`char *str = "Hello";
// str[0] = 'h'; // ❌ undefined behavior`}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 mt-2 text-sm",children:[e.jsx("li",{children:"Stored in read‑only memory (often .rodata section)."}),e.jsx("li",{children:"Same literal may be shared to save memory."}),e.jsx("li",{children:"Any attempt to modify results in crash or silent corruption."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"const char *"})," to enforce read‑only intent."]})]})]}),e.jsxs("div",{className:"group rounded-xl p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"✏️ Modifiable Character Arrays"}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm",children:`char arr[] = "Hello";
arr[0] = 'h'; // ✅ safe`}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 mt-2 text-sm",children:[e.jsx("li",{children:"Memory allocated on stack (or static storage)."}),e.jsx("li",{children:"Contents are writable; you can change any character."}),e.jsx("li",{children:"Array size is determined by the string length plus null."}),e.jsx("li",{children:"Often used when you need to build or modify strings."})]})]})]}),e.jsxs("div",{className:"animate-fade-up rounded-xl bg-gray-50 dark:bg-gray-800/50 p-4 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700",style:{animationDelay:"100ms"},children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-center",children:"Memory Regions: Read‑Only vs Read‑Write"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{width:"500",height:"200",viewBox:"0 0 500 200",className:"max-w-full h-auto",children:[e.jsx("rect",{x:"30",y:"20",width:"200",height:"70",fill:"#F59E0B",fillOpacity:"0.2",stroke:"#F59E0B",strokeWidth:"2",strokeDasharray:"4"}),e.jsx("text",{x:"130",y:"45",textAnchor:"middle",fill:"#F59E0B",fontSize:"12",children:"Read‑Only Section (.rodata)"}),e.jsx("text",{x:"130",y:"70",textAnchor:"middle",fontSize:"10",children:'"Hello" (string literal)'}),e.jsx("rect",{x:"270",y:"20",width:"200",height:"70",fill:"#10B981",fillOpacity:"0.2",stroke:"#10B981",strokeWidth:"2",strokeDasharray:"4"}),e.jsx("text",{x:"370",y:"45",textAnchor:"middle",fill:"#10B981",fontSize:"12",children:"Stack / Data Section"}),e.jsx("text",{x:"370",y:"70",textAnchor:"middle",fontSize:"10",children:'char arr[] = "Hello"'}),e.jsx("path",{d:"M400 110 L180 90",stroke:"#F59E0B",strokeWidth:"1.5",strokeDasharray:"4"}),e.jsx("text",{x:"290",y:"105",textAnchor:"middle",fontSize:"9",fill:"#F59E0B",children:'char *p = "Hello"'}),e.jsx("rect",{x:"380",y:"120",width:"100",height:"25",fill:"#3B82F6",fillOpacity:"0.2",stroke:"#3B82F6",strokeWidth:"1"}),e.jsx("text",{x:"430",y:"138",textAnchor:"middle",fontSize:"10",children:"arr[] → writable"})]})}),e.jsx("p",{className:"text-center text-sm mt-2 text-gray-600 dark:text-gray-400",children:"String literals reside in read‑only memory; character arrays are stored in writable memory."})]}),e.jsxs("div",{className:"animate-fade-up space-y-8",style:{animationDelay:"150ms"},children:[e.jsxs("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"📖 Why Are String Literals Immutable?"}),e.jsxs("p",{className:"leading-relaxed",children:["String literals are stored in a read‑only section of memory for efficiency and safety. The C standard says modifying them is ",e.jsx("strong",{children:"undefined behavior"}),", allowing compilers to optimize (e.g., share identical literals). On many systems, writing to a literal causes a segmentation fault."]}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2",children:`char *p = "immutable";
p[0] = 'I';   // May crash or silently corrupt`}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Real‑world:"})," At Barrackpore CNAT, ",e.jsx("strong",{children:"Debangshu"})," learned this the hard way when his program crashed while trying to uppercase a string literal."]})]}),e.jsxs("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"🔧 How to Get a Modifiable Copy"}),e.jsx("p",{className:"leading-relaxed",children:"If you need a mutable string, you have three main options:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 mt-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Character array initialization:"})," ",e.jsx("code",{children:'char s[] = "Hello";'})," – copies the literal into writable memory."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Dynamic allocation:"})," ",e.jsx("code",{children:'char *s = malloc(6); strcpy(s, "Hello");'})," – heap memory you can modify."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Static array:"})," ",e.jsx("code",{children:'static char s[6]; strcpy(s, "Hello");'})," – global/static writable storage."]})]}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2",children:`// Safe copy
char buffer[20];
strcpy(buffer, "Hello");
buffer[0] = 'h';   // OK`})]})]}),e.jsxs("div",{className:"animate-fade-up space-y-6",style:{animationDelay:"200ms"},children:[e.jsx("h3",{className:"text-2xl font-semibold",children:"💻 See the Difference"}),e.jsx(r,{title:"Example 1: Immutable Literal vs Modifiable Array",initialCode:i}),e.jsx(r,{title:"Example 2: Correct Ways to Create Mutable Strings",initialCode:t})]}),e.jsxs("div",{className:"animate-fade-up bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-5 rounded-r-xl",style:{animationDelay:"250ms"},children:[e.jsx("h3",{className:"text-xl font-semibold text-red-700 dark:text-red-400 mb-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Modifying string literals directly:"})," ",e.jsx("code",{children:`char *p = "text"; p[0] = 'T';`})," – undefined behavior."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Returning a pointer to a local array:"})," ",e.jsxs("code",{children:["char *func()",' { char s[] = "local"; return s; }']})," – dangling pointer."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Confusing ",e.jsx("code",{children:'char *str = "..."'})," with modifiability:"]})," It's a pointer to read‑only memory."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming all string literals are stored in the same way:"})," Compilers may place them in different sections, but they are always read‑only."]})]})]}),e.jsxs("div",{className:"animate-fade-up bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-5 rounded-r-xl",style:{animationDelay:"300ms"},children:[e.jsx("h3",{className:"text-xl font-semibold text-green-700 dark:text-green-400 mb-2",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"const char *"})," for pointers that should point to read‑only strings: ",e.jsx("code",{children:'const char *msg = "Hello";'})]}),e.jsxs("li",{children:["When you need to modify a string, declare it as a character array: ",e.jsx("code",{children:'char s[] = "initial";'})]}),e.jsx("li",{children:"If you must work with a literal and need to change it, copy it into an array first."}),e.jsx("li",{children:"Avoid returning pointers to local arrays; instead, use dynamic allocation or pass a buffer from the caller."})]})]}),e.jsxs("div",{className:"animate-fade-up grid md:grid-cols-2 gap-4",style:{animationDelay:"350ms"},children:[e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"📋 Student Checklist"}),e.jsxs("ul",{className:"space-y-1 text-sm",children:[e.jsx("li",{children:"✅ Know that string literals are read‑only; modifying them is UB."}),e.jsx("li",{children:"✅ Can create modifiable strings using arrays or dynamic allocation."}),e.jsxs("li",{children:["✅ Understand the difference between ",e.jsx("code",{children:'char *p = "text";'})," and ",e.jsx("code",{children:'char a[] = "text";'}),"."]}),e.jsxs("li",{children:["✅ Use ",e.jsx("code",{children:"const"})," to prevent accidental modification of read‑only data."]})]})]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"💡 Hint Section"}),e.jsx("p",{className:"text-sm",children:"Think about …"}),e.jsxs("ul",{className:"list-disc list-inside text-sm mt-1",children:[e.jsx("li",{children:"What does the compiler do if you try to modify a literal? Try it with and without optimization."}),e.jsxs("li",{children:["Observe carefully: What is the difference in memory layout between ",e.jsx("code",{children:'char s[] = "Hi";'})," and ",e.jsx("code",{children:'char *s = "Hi";'}),"?"]}),e.jsxs("li",{children:["Try writing a function that takes a ",e.jsx("code",{children:"char*"})," and modifies it. Pass both an array and a literal – what happens?"]})]})]})]}),e.jsxs("div",{className:"animate-fade-up p-5 border-t border-gray-200 dark:border-gray-700",style:{animationDelay:"400ms"},children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"🎓 Professional Tips & Tricks"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"const"})," religiously:"]})," It helps the compiler catch accidental modifications and documents intent."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"String pooling:"})," Many compilers store identical literals only once. This can save memory but also makes modification dangerous."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"When you need a modifiable string from a literal, use:"})," ",e.jsx("code",{children:'char buf[] = "literal";'})," – it's efficient and safe."]}),e.jsx("li",{children:e.jsx("strong",{children:"For large strings, consider dynamic allocation to avoid stack overflow."})})]})]}),e.jsx("div",{className:"animate-fade-up",style:{animationDelay:"450ms"},children:e.jsx(a,{note:`In our Barrackpore CNAT class, I stress: 'String literals are constants, period.' If you want to change a string, you must have your own storage. The array form <code>char s[] = "..."</code> gives you that storage. Using <code>const char *</code> for pointers to literals is a good habit that will save you from debugging crashes. Always remember: the difference between a pointer to a literal and an array is not just syntax – it's a fundamental memory safety issue.`})}),e.jsx("style",{children:`
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
