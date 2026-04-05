import{j as e}from"./index-CiucDjKk.js";import{T as s}from"./TeacherSukantaHui-lXqZmGBe.js";import{E as n}from"./EditableCCodeBlock-B-NaH-7Y.js";import"./git-branch-Dyq3Dyp2.js";import"./index-CpCb3E_X.js";import"./file-code-BnWMtMm-.js";import"./type-COTgqaDv.js";import"./refresh-cw-V8JttSZQ.js";import"./copy-CGs2rQAh.js";import"./download-D8pjhHSm.js";const o=`#include <stdio.h>\r
\r
// A function that applies a given operation to an integer\r
int apply(int x, int (*operation)(int)) {\r
    if (operation) {\r
        return operation(x);\r
    }\r
    return x; // no-op if NULL\r
}\r
\r
int doubleValue(int n) {\r
    return n * 2;\r
}\r
\r
int square(int n) {\r
    return n * n;\r
}\r
\r
int main() {\r
    printf("double(5) = %d\\n", apply(5, doubleValue));\r
    printf("square(5) = %d\\n", apply(5, square));\r
    printf("no op: %d\\n", apply(5, NULL));\r
    return 0;\r
}`,l=`#include <stdio.h>\r
#include <string.h>\r
\r
// Comparator function pointer type\r
typedef int (*Comparator)(const void*, const void*);\r
\r
// Generic bubble sort (works on any data type)\r
void bubbleSort(void* base, size_t n, size_t size, Comparator cmp) {\r
    for (size_t i = 0; i < n - 1; i++) {\r
        for (size_t j = 0; j < n - i - 1; j++) {\r
            char* a = (char*)base + j * size;\r
            char* b = (char*)base + (j + 1) * size;\r
            if (cmp(a, b) > 0) {\r
                // swap a and b\r
                char temp[size];\r
                memcpy(temp, a, size);\r
                memcpy(a, b, size);\r
                memcpy(b, temp, size);\r
            }\r
        }\r
    }\r
}\r
\r
int compareInt(const void* a, const void* b) {\r
    int ia = *(int*)a;\r
    int ib = *(int*)b;\r
    return ia - ib;\r
}\r
\r
int compareIntDesc(const void* a, const void* b) {\r
    return compareInt(b, a);\r
}\r
\r
int main() {\r
    int arr[] = {5, 2, 9, 1, 7};\r
    size_t n = sizeof(arr)/sizeof(arr[0]);\r
    \r
    bubbleSort(arr, n, sizeof(int), compareInt);\r
    for (size_t i = 0; i < n; i++) printf("%d ", arr[i]);\r
    printf("\\n");\r
    \r
    bubbleSort(arr, n, sizeof(int), compareIntDesc);\r
    for (size_t i = 0; i < n; i++) printf("%d ", arr[i]);\r
    printf("\\n");\r
    \r
    return 0;\r
}`,c=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
// Event type\r
typedef enum { EVENT_KEYPRESS, EVENT_MOUSE } EventType;\r
\r
// Callback type: takes event type, event data, and user context\r
typedef void (*EventHandler)(EventType type, void* eventData, void* userData);\r
\r
// Registry structure\r
typedef struct {\r
    EventHandler handler;\r
    void* userData;\r
} EventRegistration;\r
\r
EventRegistration keyHandler = {NULL, NULL};\r
\r
void registerKeyHandler(EventHandler h, void* data) {\r
    keyHandler.handler = h;\r
    keyHandler.userData = data;\r
}\r
\r
void simulateKeyPress(int keyCode) {\r
    if (keyHandler.handler) {\r
        keyHandler.handler(EVENT_KEYPRESS, &keyCode, keyHandler.userData);\r
    } else {\r
        printf("No handler registered for key press.\\n");\r
    }\r
}\r
\r
// Example handler\r
void myKeyHandler(EventType type, void* eventData, void* userData) {\r
    if (type == EVENT_KEYPRESS) {\r
        int key = *(int*)eventData;\r
        char* name = (char*)userData;\r
        printf("%s received key press: %d\\n", name, key);\r
    }\r
}\r
\r
int main() {\r
    registerKeyHandler(myKeyHandler, "Student Swadeep");\r
    simulateKeyPress(65); // 'A'\r
    \r
    registerKeyHandler(NULL, NULL);\r
    simulateKeyPress(66); // no handler\r
    \r
    return 0;\r
}`,v=()=>{const a=`
    @keyframes fadeSlideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @media (prefers-reduced-motion: reduce) {
      .animate-fadeSlideUp { animation: none !important; opacity: 1 !important; transform: none !important; }
    }
  `,i=[{q:"What is a higher-order function in C?",a:"A function that takes another function as a parameter (via function pointer) or returns a function pointer."},{q:"How do you declare a function that accepts a function pointer?",a:"`void process(int (*callback)(int), int data);` The parameter is a function pointer."},{q:"Why pass function pointers instead of calling functions directly?",a:"For flexibility: the caller decides which function to execute, enabling callbacks, custom sorting, event handling."},{q:"What is a callback function?",a:"A function passed to another function, to be called at a later time (e.g., on event, after computation)."},{q:"How does `qsort` use a function pointer?",a:"`qsort` takes a comparator function pointer: `int (*compar)(const void*, const void*)`. It calls it to compare elements."},{q:"Can you pass a function pointer that itself takes function pointers?",a:"Yes, you can nest them: `void outer(int (*inner)(int (*)(int)))` – but that's rare."},{q:"How do you store a function pointer passed as argument for later use?",a:"Assign it to a static or global variable, or store in a struct passed to the function."},{q:"What is a generic algorithm using function pointers?",a:"A function that works on any data type by using a comparison or transformation function provided by the caller."},{q:"Can you pass a function pointer with a different signature than expected?",a:"No, the signatures must match exactly, or you'll get undefined behavior (or a compiler warning if you're lucky)."},{q:"How do you pass a function that returns void and takes void?",a:"`void callBack(void (*func)(void)) { if(func) func(); }`"},{q:"What is the typical pattern for callbacks with user data?",a:"Pass both a function pointer and a `void*` context: `void register_callback(void (*cb)(void*), void* user_data);`"},{q:"Can you pass a function pointer that is a member of a struct?",a:"Yes, extract it from the struct and pass it, or pass the struct containing it."},{q:"How do you create a generic map function using function pointers?",a:"`void map(int arr[], int n, int (*transform)(int))` that applies transform to each element."},{q:"What is the performance cost of passing function pointers?",a:"Very low – it's just passing an address. The call overhead is similar to a virtual function in C++."},{q:"How do you handle errors in callbacks?",a:"Typically the callback returns a status code, or you provide an error callback."}];return e.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:[e.jsx("style",{children:a}),e.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8 space-y-12",children:[e.jsxs("div",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out]",children:[e.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent",children:"Topic 9: Passing Function Pointers as Arguments"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300",children:"Passing functions to other functions is a powerful technique for creating flexible, reusable code. This topic covers callbacks, generic algorithms, and event-driven patterns."})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.1s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-3",children:"Why Pass Function Pointers?"}),e.jsx("p",{children:"By passing a function pointer, you allow the caller to inject behavior into a function. This is the foundation of:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Callbacks"})," – functions that are called later (e.g., event handlers, async completion)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Generic algorithms"})," – sort, search, map, filter that work on any data type."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Strategy pattern"})," – choose algorithm at runtime (e.g., compression, encryption)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Plugin architectures"})," – load functions dynamically."]})]}),e.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg",children:e.jsxs("p",{children:["💡 ",e.jsx("strong",{children:"Think about:"})," How would you write a sorting function that can sort integers in ascending or descending order without rewriting the sort logic? Pass a comparator function pointer."]})})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.2s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-3",children:"Example 1: Basic Callback Pattern"}),e.jsx("p",{children:"A simple `apply` function that takes an operation (function pointer) and applies it to an integer."}),e.jsx(n,{title:"Applying a function to a value",initialCode:o})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.3s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-red-500 pl-3",children:"Example 2: Generic Sort with Comparator"}),e.jsx("p",{children:"Recreating the `qsort` idea: a sort function that works on any array type by using a comparator function pointer."}),e.jsx(n,{title:"Generic bubble sort with comparator",initialCode:l})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.4s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-orange-500 pl-3",children:"Example 3: Event Handler with User Data"}),e.jsx("p",{children:"A realistic callback system where you register an event handler with a function pointer and a `void*` context."}),e.jsx(n,{title:"Event handler registration",initialCode:c})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.5s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-teal-500 pl-3",children:"💎 Professional Tips & Tricks"}),e.jsxs("ul",{className:"space-y-2 list-disc pl-6",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Use typedef for function pointer parameters"})," – makes function declarations much clearer: `typedef int (*Comparator)(const void*, const void*);`"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Always provide a `void*` user_data parameter"})," for callbacks – allows state to be passed without globals."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Document whether the callback can be NULL"})," and what the behavior is."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"For performance-critical callbacks, avoid calling through a pointer in tight loops if possible"})," – but often the flexibility is worth it."]}),e.jsx("li",{children:e.jsx("strong",{children:"Use function pointers in structs to simulate C++-like virtual tables."})}),e.jsx("li",{children:e.jsx("strong",{children:"When debugging, log the callback address to see which function is called."})})]})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.6s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-3",children:"✅ Best Practices for Passing Function Pointers"}),e.jsxs("ul",{className:"space-y-2 list-disc pl-6",children:[e.jsx("li",{children:e.jsx("strong",{children:"Always check function pointer for NULL before calling inside the receiving function."})}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use consistent naming conventions"})," – suffix `_callback`, `_fn`, `_handler`."]}),e.jsx("li",{children:e.jsx("strong",{children:"If the callback should not be changed, store it as `const` in the struct."})}),e.jsx("li",{children:e.jsx("strong",{children:"For library APIs, provide default callbacks (e.g., no-op) to avoid NULL checks."})}),e.jsx("li",{children:e.jsx("strong",{children:"Document the expected prototype clearly – parameter and return types."})})]})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.7s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-pink-500 pl-3",children:"🚫 Common Mistakes & Misconceptions"}),e.jsxs("ul",{className:"space-y-2 list-disc pl-6",children:[e.jsx("li",{children:e.jsx("strong",{children:"Forgetting to check for NULL before calling the passed function pointer."})}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mismatched signature"})," – passing a function with wrong return type or parameters."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not passing user data"})," – leading to reliance on global variables."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Storing a function pointer that goes out of scope"})," – the pointer itself is fine (code lives forever), but associated data may be lost."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming the function pointer is valid without verifying"})," – can come from untrusted source."]})]})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.8s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-3",children:"❓ Frequently Asked Questions (15)"}),e.jsx("div",{className:"space-y-4",children:i.map((t,r)=>e.jsxs("div",{className:"border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:bg-gray-50 dark:hover:bg-gray-800",children:[e.jsxs("p",{className:"font-semibold text-green-600 dark:text-green-400",children:["Q",r+1,": ",t.q]}),e.jsx("p",{className:"mt-2 text-gray-700 dark:text-gray-300",children:t.a})]},r))})]}),e.jsx("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.9s]",children:e.jsx(s,{note:"At Barrackpore CNAT, I tell students: 'Passing a function pointer is like giving someone your phone number. They can call you when needed.' The receiving function holds onto that number (pointer) and calls you back. This decouples the caller from the callee. Real-world examples: event handlers in GUI libraries, sorting comparators, and signal handlers. Always include a `void* context` – otherwise you'll end up using global variables, which is bad practice."})}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-6 rounded-xl animate-[fadeSlideUp_0.6s_ease-out_1s]",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"📋 Mini Checklist – Passing Function Pointers"}),e.jsxs("ul",{className:"space-y-2 list-checkmark pl-5",children:[e.jsx("li",{children:"✅ Declare parameter as function pointer type: `void (*callback)(int)`"}),e.jsx("li",{children:"✅ Check for NULL before calling inside the function."}),e.jsx("li",{children:"✅ Use `typedef` for readability when signatures are complex."}),e.jsx("li",{children:"✅ Pass `void* user_data` for context."}),e.jsx("li",{children:"✅ Document expected callback behavior."}),e.jsx("li",{children:"✅ Example: `qsort` comparator, event handlers, generic algorithms."}),e.jsx("li",{children:"✅ Avoid relying on global variables in callbacks."}),e.jsx("li",{children:"✅ Test with NULL callbacks to ensure robustness."})]})]})]})]})};export{v as default};
