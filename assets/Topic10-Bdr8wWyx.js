import{j as e}from"./index-CmAIoOXN.js";import{T as t}from"./TeacherSukantaHui-1LCiMfJM.js";import{E as a}from"./EditableCCodeBlock-DrInV_Ue.js";import"./git-branch-AzLzm2E2.js";import"./index-Ctno6LPZ.js";import"./file-code-Dknl8_wy.js";import"./type-BX72wN3g.js";import"./refresh-cw-BbngG8iQ.js";import"./copy-DM6uKa4-.js";import"./download-Dist3jgj.js";const l=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <string.h>\r
\r
// Comparator for integers\r
int cmp_int(const void* a, const void* b) {\r
    return *(int*)a - *(int*)b;\r
}\r
\r
// Comparator for strings (alphabetical)\r
int cmp_string(const void* a, const void* b) {\r
    return strcmp(*(const char**)a, *(const char**)b);\r
}\r
\r
int main() {\r
    // Integer array\r
    int nums[] = {42, 17, 8, 99, 23};\r
    size_t n_nums = sizeof(nums)/sizeof(nums[0]);\r
    qsort(nums, n_nums, sizeof(int), cmp_int);\r
    printf("Sorted ints: ");\r
    for (size_t i = 0; i < n_nums; i++) printf("%d ", nums[i]);\r
    printf("\\n");\r
    \r
    // String array (array of pointers)\r
    const char* fruits[] = {"banana", "apple", "cherry", "date"};\r
    size_t n_fruits = sizeof(fruits)/sizeof(fruits[0]);\r
    qsort(fruits, n_fruits, sizeof(const char*), cmp_string);\r
    printf("Sorted strings: ");\r
    for (size_t i = 0; i < n_fruits; i++) printf("%s ", fruits[i]);\r
    printf("\\n");\r
    \r
    return 0;\r
}`,o=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <time.h>\r
#include <unistd.h>  // for sleep\r
\r
// Callback type for async operation\r
typedef void (*async_callback)(int result, void* user_data);\r
\r
// Simulate an async operation (e.g., file read, network request)\r
void async_operation(int data, async_callback cb, void* user_data) {\r
    printf("Starting async operation with data=%d...\\n", data);\r
    // Simulate work in background (here we just sleep and call callback)\r
    sleep(1);\r
    int result = data * 2;\r
    // Call the callback with result\r
    if (cb) cb(result, user_data);\r
}\r
\r
// Our callback function\r
void my_callback(int result, void* user_data) {\r
    int* original = (int*)user_data;\r
    printf("Callback: result = %d (original was %d)\\n", result, *original);\r
}\r
\r
int main() {\r
    int value = 42;\r
    async_operation(value, my_callback, &value);\r
    // In real async code, we would continue doing other work here\r
    printf("Main continues while operation runs...\\n");\r
    sleep(2); // wait for callback to finish (simulate)\r
    return 0;\r
}`,c=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <string.h>\r
\r
// Callback type for menu actions\r
typedef void (*menu_action)(void);\r
\r
// Menu item structure\r
typedef struct {\r
    const char* name;\r
    menu_action action;\r
} MenuItem;\r
\r
// Action functions\r
void action_new() { printf("Creating new file...\\n"); }\r
void action_open() { printf("Opening file...\\n"); }\r
void action_save() { printf("Saving file...\\n"); }\r
void action_exit() { printf("Exiting program.\\n"); exit(0); }\r
\r
int main() {\r
    MenuItem menu[] = {\r
        {"New", action_new},\r
        {"Open", action_open},\r
        {"Save", action_save},\r
        {"Exit", action_exit},\r
        {NULL, NULL}  // sentinel\r
    };\r
    \r
    int choice;\r
    while (1) {\r
        printf("\\n=== MENU ===\\n");\r
        for (int i = 0; menu[i].name != NULL; i++) {\r
            printf("%d. %s\\n", i+1, menu[i].name);\r
        }\r
        printf("Choice: ");\r
        scanf("%d", &choice);\r
        \r
        if (choice >= 1 && choice <= 4) {\r
            if (menu[choice-1].action) {\r
                menu[choice-1].action();\r
            }\r
        } else {\r
            printf("Invalid choice.\\n");\r
        }\r
    }\r
    return 0;\r
}\r
`,y=()=>{const s=`
    @keyframes fadeSlideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @media (prefers-reduced-motion: reduce) {
      .animate-fadeSlideUp { animation: none !important; opacity: 1 !important; transform: none !important; }
    }
  `,i=[{q:"What is a callback in C?",a:"A callback is a function passed as an argument to another function, to be executed later. It enables inversion of control."},{q:"Why are callbacks useful in real-world programming?",a:"They allow event-driven programming (GUI, network), generic algorithms (sort, map), and decoupling of concerns."},{q:"How does qsort use callbacks?",a:"qsort takes a comparator callback function pointer. It calls it to compare elements, allowing sorting of any data type."},{q:"What is the typical prototype for a comparator callback?",a:"`int compar(const void *a, const void *b);` Returns negative if a<b, zero if equal, positive if a>b."},{q:"How do you pass additional data to a callback (context)?",a:"Use a `void*` user_data parameter. The caller provides data, and the callback receives it when invoked."},{q:"What is an event loop and how are callbacks used there?",a:"An event loop waits for events (mouse, keyboard, timer) and calls registered callback functions for each event."},{q:"Can callbacks be used for asynchronous I/O?",a:"Yes. Register a callback to be called when I/O completes. This avoids blocking while waiting."},{q:"What is a signal handler? Is it a callback?",a:"Yes. Using `signal()` or `sigaction()`, you register a function that the OS calls when a signal (e.g., Ctrl+C) occurs."},{q:"How do you avoid global variables with callbacks?",a:"Pass a `void* context` that contains all needed state. The callback casts it back and uses it."},{q:"What is a callback hell? Does it exist in C?",a:"Nested callbacks leading to hard-to-read code. In C, it's less common but can happen with deeply nested event handlers."},{q:"How do you handle errors in callbacks?",a:"Return an error code from the callback, or provide a separate error callback function."},{q:"What is the performance cost of callbacks?",a:"Very low – indirect function call overhead. But can prevent compiler inlining."},{q:"Can you unregister a callback?",a:"Yes. Typically you store the function pointer and can set it to NULL or call an unregister function."},{q:"Are function pointers the only way to implement callbacks in C?",a:"Yes, because C has no closures or lambdas. Function pointers are the standard mechanism."},{q:"What real-world libraries use callbacks extensively?",a:"GTK (GUI), libcurl (network), pthreads (thread creation), SQLite (authorization, progress), and many more."}];return e.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:[e.jsx("style",{children:s}),e.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8 space-y-12",children:[e.jsxs("div",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out]",children:[e.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent",children:"Topic 10: Callback Mechanisms & Real-World Usage"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300",children:"Callbacks are everywhere in real C programming: from GUI event handlers to sorting comparators, asynchronous I/O completions to signal handling. This topic explores practical callback patterns used in professional systems."})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.1s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-red-500 pl-3",children:"What Makes Callbacks Powerful?"}),e.jsxs("p",{children:["A callback is a function that you provide to a library or framework, which the framework will call at an appropriate time. This ",e.jsx("strong",{children:"inversion of control"})," is fundamental to:"]}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Event-driven programming"})," – GUI, game loops, network servers."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Generic algorithms"})," – sorting, searching, filtering without code duplication."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Asynchronous operations"})," – I/O, timers, threads – notify when ready."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Plugin systems"})," – load code dynamically and call into it."]})]}),e.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg",children:e.jsxs("p",{children:["💡 ",e.jsx("strong",{children:"Think about:"})," How does a button in a GUI know what code to run when clicked? The GUI library doesn't know your app logic – you register a callback function that the library calls on click."]})})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.2s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-3",children:"Example 1: Sorting with a Comparator Callback"}),e.jsxs("p",{children:["The classic example from the standard library: ",e.jsx("code",{children:"qsort"})," uses a callback to compare elements, making it generic."]}),e.jsx(a,{title:"Sorting integers and strings with qsort",initialCode:l})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.3s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-3",children:"Example 2: Asynchronous Callback (Simulated I/O)"}),e.jsx("p",{children:"Many real systems (network, file I/O) use callbacks to notify when an operation completes without blocking."}),e.jsx(a,{title:"Simulated async read with callback",initialCode:o})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.4s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-orange-500 pl-3",children:"Example 3: Menu System Using Callbacks (Real-world CLI tool)"}),e.jsx("p",{children:"Text-based menus often store a function pointer for each menu item, making the main loop simple and extensible."}),e.jsx(a,{title:"Callback-driven menu system",initialCode:c})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.5s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-teal-500 pl-3",children:"💎 Professional Tips & Tricks"}),e.jsxs("ul",{className:"space-y-2 list-disc pl-6",children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Always provide a ",e.jsx("code",{children:"void* user_data"})," in callback APIs"]})," – avoid global variables."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"typedef"})," for callback signatures"]})," – makes code self-documenting and reduces errors."]}),e.jsx("li",{children:e.jsx("strong",{children:"Document whether the callback may be called multiple times, and if it can be NULL."})}),e.jsxs("li",{children:[e.jsx("strong",{children:"Be careful with callback recursion"})," – a callback that triggers the same event again can cause stack overflow."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"In performance-critical code, consider making callbacks non-virtual (direct) if possible"})," – but often the flexibility is worth it."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"For library code, allow callbacks to return a value to control behavior"})," (e.g., continue/stop iteration)."]})]})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.6s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-3",children:"✅ Best Practices for Callback Design"}),e.jsxs("ul",{className:"space-y-2 list-disc pl-6",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Check for NULL before calling a callback"})," – provide default behavior if none registered."]}),e.jsx("li",{children:e.jsxs("strong",{children:["Make callbacks ",e.jsx("code",{children:"const"})," if they should not be changed after registration."]})}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use meaningful names for callback functions"})," – e.g., ",e.jsx("code",{children:"onDataReceived"}),", ",e.jsx("code",{children:"compareInts"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Keep callbacks short"})," – they should do one thing and return quickly to avoid blocking event loops."]}),e.jsx("li",{children:e.jsx("strong",{children:"If a callback allocates memory, document who is responsible for freeing."})}),e.jsx("li",{children:e.jsx("strong",{children:"Test with NULL callbacks and error cases to ensure robustness."})})]})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.7s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-pink-500 pl-3",children:"🚫 Common Mistakes & Misconceptions"}),e.jsxs("ul",{className:"space-y-2 list-disc pl-6",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Not checking for NULL callback"})," – leads to segmentation fault."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using global variables instead of user data"})," – makes code non-reentrant and hard to test."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming the callback is called immediately"})," – asynchronous callbacks may be called later, possibly on a different thread."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to unregister callbacks before freeing resources"})," – leads to dangling function pointers and crashes."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Calling long-running or blocking code inside a callback"})," – can freeze an event loop."]})]})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.8s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-3",children:"❓ Frequently Asked Questions (15)"}),e.jsx("div",{className:"space-y-4",children:i.map((n,r)=>e.jsxs("div",{className:"border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:bg-gray-50 dark:hover:bg-gray-800",children:[e.jsxs("p",{className:"font-semibold text-red-600 dark:text-red-400",children:["Q",r+1,": ",n.q]}),e.jsx("p",{className:"mt-2 text-gray-700 dark:text-gray-300",children:n.a})]},r))})]}),e.jsx("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.9s]",children:e.jsx(t,{note:"Callbacks are like 'please call me back' – you give your phone number (function pointer) and the system calls you when something happens. At Barrackpore CNAT, I show students the menu system example: it's exactly how many CLI tools work. Real-world: `pthread_create` takes a start routine (callback), `atexit` registers callbacks for program exit, `signal` registers callbacks for OS signals. Always pass a `void* context` – it's the professional way to avoid globals. Remember: a callback should be fast; if it needs to do heavy work, spawn a thread or queue the work."})}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-6 rounded-xl animate-[fadeSlideUp_0.6s_ease-out_1s]",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"📋 Mini Checklist – Callback Mechanisms"}),e.jsxs("ul",{className:"space-y-2 list-checkmark pl-5",children:[e.jsx("li",{children:"✅ Callback = function pointer passed to another function."}),e.jsx("li",{children:"✅ Enables event-driven, generic, and async code."}),e.jsx("li",{children:"✅ Always check for NULL before calling."}),e.jsx("li",{children:"✅ Use `void* user_data` for context."}),e.jsx("li",{children:"✅ Examples: qsort comparator, GUI click handler, async I/O completion."}),e.jsx("li",{children:"✅ Keep callbacks short and non-blocking."}),e.jsx("li",{children:"✅ Unregister callbacks before freeing associated resources."}),e.jsx("li",{children:"✅ Use typedef for callback signatures to improve readability."})]})]})]})]})};export{y as default};
