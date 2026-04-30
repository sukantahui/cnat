import{j as e}from"./index-DdIeXD-l.js";import{T as a}from"./TeacherSukantaHui-Ds9MNVZs.js";import{E as n}from"./EditableCCodeBlock-BJtcAtSI.js";import"./git-branch-mOcsg_Cc.js";import"./index-BdoLMGZR.js";import"./file-code--W0N4Eit.js";import"./type-DKKgNEdL.js";import"./refresh-cw-CG3J9k9V.js";import"./copy-CsH9Jtu6.js";import"./download-NywCF-VW.js";const o=`#include <stdio.h>\r
\r
int add(int a, int b) {\r
    return a + b;\r
}\r
\r
int main() {\r
    // Declare a function pointer\r
    int (*funcPtr)(int, int);\r
    \r
    // Assign address of add function\r
    funcPtr = &add;   // or just 'add' (function name decays to address)\r
    \r
    // Call via function pointer\r
    int result = funcPtr(5, 3);\r
    printf("Result: %d\\n", result);   // Output: Result: 8\r
    \r
    // Alternative call syntax\r
    result = (*funcPtr)(10, 20);\r
    printf("Result: %d\\n", result);   // Output: Result: 30\r
    \r
    return 0;\r
}`,c=`#include <stdio.h>\r
\r
int add(int a, int b) { return a + b; }\r
int sub(int a, int b) { return a - b; }\r
int mul(int a, int b) { return a * b; }\r
int div(int a, int b) { return (b != 0) ? a / b : 0; }\r
\r
int main() {\r
    // Array of function pointers (jump table)\r
    int (*operations[4])(int, int) = {add, sub, mul, div};\r
    int choice, x, y;\r
    \r
    printf("Enter two numbers: ");\r
    scanf("%d %d", &x, &y);\r
    printf("0=add 1=sub 2=mul 3=div: ");\r
    scanf("%d", &choice);\r
    \r
    if (choice >= 0 && choice < 4) {\r
        int result = operations[choice](x, y);\r
        printf("Result: %d\\n", result);\r
    } else {\r
        printf("Invalid choice\\n");\r
    }\r
    return 0;\r
}`,l=`#include <stdio.h>\r
\r
// Comparator callback type: returns negative if a<b, zero if equal, positive if a>b\r
typedef int (*Compare)(int, int);\r
\r
// Generic sort that uses a callback for comparison\r
void bubbleSort(int arr[], int n, Compare cmp) {\r
    for (int i = 0; i < n-1; i++) {\r
        for (int j = 0; j < n-i-1; j++) {\r
            if (cmp(arr[j], arr[j+1]) > 0) {\r
                int temp = arr[j];\r
                arr[j] = arr[j+1];\r
                arr[j+1] = temp;\r
            }\r
        }\r
    }\r
}\r
\r
int ascending(int a, int b) { return a - b; }\r
int descending(int a, int b) { return b - a; }\r
\r
void printArray(int arr[], int n) {\r
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\r
    printf("\\n");\r
}\r
\r
int main() {\r
    int arr[] = {5, 2, 8, 1, 9};\r
    int n = sizeof(arr)/sizeof(arr[0]);\r
    \r
    bubbleSort(arr, n, ascending);\r
    printArray(arr);   // 1 2 5 8 9\r
    \r
    bubbleSort(arr, n, descending);\r
    printArray(arr);   // 9 8 5 2 1\r
    \r
    return 0;\r
}`,j=()=>{const r=`
    @keyframes fadeSlideUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes subtlePulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.02); }
    }
    @media (prefers-reduced-motion: reduce) {
      .animate-fadeSlideUp, .animate-subtlePulse {
        animation: none !important;
        opacity: 1 !important;
        transform: none !important;
      }
    }
  `,s=[{q:"What is a function pointer?",a:"A function pointer is a variable that stores the address of a function. It can be used to call the function indirectly, passed as an argument to other functions, or stored in arrays."},{q:"How do you declare a function pointer that points to a function returning int and taking two ints?",a:"`int (*funcPtr)(int, int);` The parentheses around `*funcPtr` are necessary; otherwise `int *funcPtr(int, int)` would be a function returning a pointer."},{q:"Why use function pointers instead of direct calls?",a:"They enable callbacks, plugin architectures, state machines, and runtime dispatch (e.g., choosing which algorithm to execute based on user input)."},{q:"What is the syntax to call a function via pointer?",a:"Both `(*funcPtr)(args)` and `funcPtr(args)` work. Modern C prefers the simpler `funcPtr(args)`."},{q:"Can you have an array of function pointers?",a:"Yes. Example: `int (*operations[4])(int, int) = {add, sub, mul, div};` Then call `operations[choice](a, b)`."},{q:"What is a callback function?",a:"A function passed as an argument to another function, to be 'called back' at a later time. Used in event handling, sorting comparators, signal handlers."},{q:"How do you pass a function pointer as a parameter?",a:"Declare the parameter as a function pointer type, e.g., `void sort(int arr[], int n, int (*compare)(int, int))`."},{q:"What is the difference between `int *func(int, int)` and `int (*func)(int, int)`?",a:"First is a function returning a pointer to int. Second is a pointer to a function returning int."},{q:"Can function pointers be used with `typedef`?",a:"Yes, for readability: `typedef int (*Operation)(int, int);` Then `Operation op = add;`"},{q:"How do you store member functions of a struct using function pointers?",a:"Define function pointer members inside the struct, then assign actual functions to them to simulate methods (common in C for OOP-style code)."},{q:"What is a common mistake with function pointers?",a:"Forgetting the parentheses: `int *funcPtr` instead of `int (*funcPtr)`. Also mismatched signatures cause undefined behavior."},{q:"Can function pointers be compared for equality?",a:"Yes, two function pointers can be compared (`==` or `!=`) if they point to the same function or both are NULL."},{q:"How does `qsort` use function pointers?",a:"`qsort` takes a comparator function pointer: `int (*compar)(const void*, const void*)`. It calls this function to compare elements."},{q:"What is a jump table? Give an example using function pointers.",a:"An array of function pointers used to replace switch-case for dispatching. Example: command parser where each command index maps to a handler function."},{q:"Are function pointers type-safe?",a:"C function pointers are weakly type-checked. Assigning a function with wrong signature may compile but cause crashes at runtime. Using typedefs helps."}];return e.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:[e.jsx("style",{children:r}),e.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8 space-y-12",children:[e.jsxs("div",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out]",style:{animationFillMode:"both"},children:[e.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent",children:"Topic 6: Function Pointers"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 leading-relaxed",children:"Function pointers allow you to treat code as data. They are the foundation of callbacks, state machines, dynamic dispatch, and plugin architectures. Mastering them elevates your C programming to an advanced level."})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.1s]",style:{animationFillMode:"both"},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-3",children:"What Are Function Pointers?"}),e.jsxs("p",{children:["Just like data pointers store addresses of variables, ",e.jsx("strong",{children:"function pointers store addresses of functions"}),". They enable indirect function calls, which is essential for:"]}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 pl-4",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Callbacks"})," – passing a function to be executed later (e.g., event handlers, comparators)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"State machines & dispatch tables"})," – replacing large switch-case statements with arrays of function pointers."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Runtime polymorphism in C"})," – selecting which function to call based on runtime conditions."]})]}),e.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800",children:e.jsxs("p",{children:["💡 ",e.jsx("strong",{children:"Think about:"})," How would you write a calculator that can add, subtract, multiply, or divide based on user input without using a long switch-case? A jump table (array of function pointers) is the answer."]})})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.2s]",style:{animationFillMode:"both"},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-3",children:"Basic Syntax & Usage"}),e.jsxs("p",{children:["Declaration: ",e.jsx("code",{children:"returnType (*pointerName)(parameterTypes);"}),e.jsx("br",{}),"Assignment: ",e.jsx("code",{children:"pointerName = functionName;"})," (function name decays to address)",e.jsx("br",{}),"Calling: ",e.jsx("code",{children:"pointerName(args);"})," or ",e.jsx("code",{children:"(*pointerName)(args);"})]}),e.jsx(n,{title:"Example 1: Declaring, assigning, and calling via function pointer",initialCode:o})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.3s]",style:{animationFillMode:"both"},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-orange-500 pl-3",children:"Array of Function Pointers (Jump Table)"}),e.jsxs("p",{children:["A jump table replaces ",e.jsx("code",{children:"switch"})," with an array of function pointers. It's faster for many cases and cleaner for extensible code."]}),e.jsx(n,{title:"Example 2: Calculator using function pointer array",initialCode:c}),e.jsx("div",{className:"bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm",children:e.jsxs("p",{children:[e.jsx("strong",{children:"Observation:"})," The array ",e.jsx("code",{children:"operations"})," holds four function pointers. The choice index directly selects which function to call, eliminating a large switch statement."]})})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.4s]",style:{animationFillMode:"both"},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-red-500 pl-3",children:"Callbacks & Passing Function Pointers"}),e.jsxs("p",{children:["A callback is a function passed to another function. The standard library's ",e.jsx("code",{children:"qsort"})," is a prime example: you provide a comparator function that ",e.jsx("code",{children:"qsort"})," calls back to compare elements."]}),e.jsx(n,{title:"Example 3: Generic bubble sort with comparator callback",initialCode:l}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg",children:e.jsxs("p",{children:[e.jsx("strong",{children:"⚠️ Common Pitfall:"})," Mismatched function signatures cause undefined behavior. Always ensure the callback's parameters and return type exactly match what the caller expects."]})})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.5s]",style:{animationFillMode:"both"},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-teal-500 pl-3",children:"💎 Professional Tips & Tricks"}),e.jsxs("ul",{className:"space-y-2 list-disc pl-6",children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"typedef"})," for readability:"]})," ",e.jsx("code",{children:"typedef int (*Comparator)(const void*, const void*);"})," makes code self-documenting."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Prefer ",e.jsx("code",{children:"funcPtr(args)"})," over ",e.jsx("code",{children:"(*funcPtr)(args)"}),":"]})," Modern C allows the simpler syntax."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Initialize function pointers to NULL:"})," Always check if a function pointer is NULL before calling to avoid crashes."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Function pointers can be stored in structs:"})," This is how you emulate methods in C (object-oriented style)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use function pointers for state machines:"})," Each state can be a function pointer; transitions change the pointer."]}),e.jsx("li",{children:e.jsx("strong",{children:"In embedded systems, function pointers enable interrupt vector tables and runtime reconfiguration."})})]})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.6s]",style:{animationFillMode:"both"},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-3",children:"✅ Best Practices"}),e.jsxs("ul",{className:"space-y-2 list-disc pl-6",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Always typedef function pointer types"})," – improves readability and maintainability."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Check for NULL before calling:"})," ",e.jsx("code",{children:"if (funcPtr) funcPtr(args);"})," prevents segmentation faults."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use consistent naming:"})," suffix ",e.jsx("code",{children:"_fn"})," or ",e.jsx("code",{children:"_callback"})," to indicate function pointers."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Avoid casting function pointers unless absolutely necessary"})," – casting can hide signature mismatches."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Document the expected function signature in comments"})," especially when the pointer is passed as a parameter."]})]})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.7s]",style:{animationFillMode:"both"},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-pink-500 pl-3",children:"🚫 Common Mistakes & Misconceptions"}),e.jsxs("ul",{className:"space-y-2 list-disc pl-6",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Missing parentheses:"})," ",e.jsx("code",{children:"int *funcPtr(int, int)"})," declares a function, not a pointer. Correct: ",e.jsx("code",{children:"int (*funcPtr)(int, int)"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Calling without checking NULL:"})," Dereferencing a NULL function pointer crashes the program."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mismatched signature:"})," Assigning a function with wrong parameter types leads to stack corruption."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using function pointer where a function is expected (and vice versa)"})," – they are not interchangeable in all contexts (e.g., taking address of a function)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming function pointers are like data pointers:"})," You cannot do pointer arithmetic on function pointers (it's non-standard)."]})]})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.8s]",style:{animationFillMode:"both"},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-3",children:"❓ Frequently Asked Questions (15)"}),e.jsx("div",{className:"space-y-4",children:s.map((t,i)=>e.jsxs("div",{className:"border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:bg-gray-50 dark:hover:bg-gray-800",children:[e.jsxs("p",{className:"font-semibold text-green-600 dark:text-green-400",children:["Q",i+1,": ",t.q]}),e.jsx("p",{className:"mt-2 text-gray-700 dark:text-gray-300",children:t.a})]},i))})]}),e.jsx("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.9s]",style:{animationFillMode:"both"},children:e.jsx(a,{note:"Function pointers can be confusing at first, but remember: they are just addresses of functions. Think of them like a remote control – you can store it, pass it around, and press the button later. The classic example is qsort's comparator. I tell my students at Barrackpore CNAT: 'A function pointer is like a ticket to a show – you can give it to someone else, and they can attend the show (call the function) on your behalf.' Practice by building a simple calculator using an array of function pointers; that one exercise will clarify 80% of the concept."})}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-6 rounded-xl animate-[fadeSlideUp_0.6s_ease-out_1s]",style:{animationFillMode:"both"},children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"📋 Mini Checklist – What You Should Remember"}),e.jsxs("ul",{className:"space-y-2 list-checkmark pl-5",children:[e.jsxs("li",{children:["✅ Syntax: ",e.jsx("code",{children:"returnType (*ptrName)(params);"})]}),e.jsxs("li",{children:["✅ Assign: ",e.jsx("code",{children:"ptrName = functionName;"})]}),e.jsxs("li",{children:["✅ Call: ",e.jsx("code",{children:"ptrName(args);"})," or ",e.jsx("code",{children:"(*ptrName)(args);"})]}),e.jsxs("li",{children:["✅ Use typedef for readability: ",e.jsx("code",{children:"typedef int (*Op)(int,int);"})]}),e.jsx("li",{children:"✅ Array of function pointers = jump table (replaces switch)"}),e.jsx("li",{children:"✅ Callbacks: pass function pointer to another function"}),e.jsx("li",{children:"✅ Always check for NULL before calling"}),e.jsx("li",{children:"✅ Function pointers enable runtime polymorphism in C"})]})]})]})]})};export{j as default};
