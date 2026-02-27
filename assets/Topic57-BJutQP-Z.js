import{j as e}from"./index-meFSU1Lv.js";import{c as a}from"./clsx-B-dksMZM.js";import{E as n}from"./EditableCCodeBlock-C1aLYO6_.js";const l=`// callback_event.c – Simple event system with callbacks\r
#include <stdio.h>\r
\r
#define MAX_CALLBACKS 10\r
\r
// Callback type: takes an event ID and a user data pointer\r
typedef void (*EventHandler)(int event, void *user_data);\r
\r
// Structure to hold a registered callback\r
typedef struct {\r
    EventHandler handler;\r
    void *data;\r
} CallbackEntry;\r
\r
// Event system\r
static CallbackEntry callbacks[MAX_CALLBACKS];\r
static int callback_count = 0;\r
\r
// Register a callback for an event\r
int register_callback(EventHandler handler, void *user_data) {\r
    if (callback_count >= MAX_CALLBACKS) {\r
        return -1; // no space\r
    }\r
    callbacks[callback_count].handler = handler;\r
    callbacks[callback_count].data = user_data;\r
    callback_count++;\r
    return 0;\r
}\r
\r
// Trigger an event – call all registered callbacks\r
void trigger_event(int event) {\r
    for (int i = 0; i < callback_count; i++) {\r
        if (callbacks[i].handler != NULL) {\r
            callbacks[i].handler(event, callbacks[i].data);\r
        }\r
    }\r
}\r
\r
// Example callbacks\r
void on_button_click(int event, void *data) {\r
    int *id = (int *)data;\r
    printf("Button %d clicked (event %d)\\n", *id, event);\r
}\r
\r
void on_timer_expire(int event, void *data) {\r
    char *msg = (char *)data;\r
    printf("Timer expired: %s (event %d)\\n", msg, event);\r
}\r
\r
int main() {\r
    int btn_id1 = 1, btn_id2 = 2;\r
    char timer_msg[] = "Time's up!";\r
\r
    register_callback(on_button_click, &btn_id1);\r
    register_callback(on_button_click, &btn_id2);\r
    register_callback(on_timer_expire, timer_msg);\r
\r
    // Simulate events\r
    trigger_event(100); // some event id\r
    return 0;\r
}`,i=`// callback_stdlib.c – Using standard library callbacks\r
#include <stdio.h>\r
#include <stdlib.h>   // for qsort, atexit\r
#include <signal.h>   // for signal\r
#include <unistd.h>   // for sleep (POSIX)\r
\r
// Comparator callback for qsort (ascending)\r
int compare_int(const void *a, const void *b) {\r
    int ia = *(int *)a;\r
    int ib = *(int *)b;\r
    return ia - ib;\r
}\r
\r
// atexit callback – called when program exits normally\r
void cleanup(void) {\r
    printf("Cleaning up resources...\\n");\r
}\r
\r
// Signal handler callback for SIGINT (Ctrl+C)\r
void sigint_handler(int sig) {\r
    printf("\\nCaught signal %d – exiting gracefully.\\n", sig);\r
    // In real code, be careful what you do in signal handlers\r
    exit(0);\r
}\r
\r
int main() {\r
    // Register exit handler\r
    atexit(cleanup);\r
\r
    // Set up signal handler\r
    signal(SIGINT, sigint_handler);\r
\r
    // Use qsort with comparator callback\r
    int arr[] = {5, 2, 8, 1, 9, 3};\r
    int n = sizeof(arr) / sizeof(arr[0]);\r
\r
    qsort(arr, n, sizeof(int), compare_int);\r
\r
    printf("Sorted array: ");\r
    for (int i = 0; i < n; i++) {\r
        printf("%d ", arr[i]);\r
    }\r
    printf("\\n");\r
\r
    printf("Press Ctrl+C to trigger signal handler...\\n");\r
    sleep(3); // give user time to press Ctrl+C\r
\r
    return 0;\r
}`,m=()=>{const s=new Date().getFullYear()-1998;return e.jsxs("div",{className:"min-h-screen bg-white p-6 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-200",children:[e.jsxs("header",{className:"mb-8 text-center",children:[e.jsx("h1",{className:"mb-2 text-4xl font-extrabold tracking-tight",children:e.jsx("span",{className:"bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent dark:from-teal-400 dark:to-emerald-400",children:"Using Functions for Callback‑Style Programming"})}),e.jsx("p",{className:"mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400",children:"Pass functions as arguments to be called later – the foundation of event handlers, asynchronous operations, and flexible libraries."})]}),e.jsxs("section",{className:a("mb-12 rounded-xl bg-gray-50 p-6 shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gray-800/50","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold",children:"What Is Callback‑Style Programming?"}),e.jsxs("p",{className:"leading-relaxed",children:["At Barrackpore CNAT, Debangshu is building a GUI library. When a user clicks a button, he wants to run some custom code – but the library doesn't know that code in advance. The solution: the library accepts a  ",e.jsx("strong",{children:"callback function"})," – a function pointer that it will call when the event occurs. This pattern is everywhere: ",e.jsx("code",{children:"qsort"})," ","uses a comparator callback, ",e.jsx("code",{children:"signal"}),' lets you handle OS signals, and GUI toolkits use callbacks for events. Callbacks separate the "what" from the "when".']})]}),e.jsx("section",{className:"mb-12 flex justify-center",children:e.jsxs("div",{className:"w-full max-w-2xl rounded-xl bg-gray-100 p-4 dark:bg-gray-800",children:[e.jsxs("svg",{viewBox:"0 0 400 200",className:"w-full",children:[e.jsx("rect",{x:"20",y:"20",width:"150",height:"80",fill:"#3b82f6",rx:"4"}),e.jsx("text",{x:"40",y:"50",fill:"white",fontSize:"10",children:"Library / Event Loop"}),e.jsx("text",{x:"40",y:"70",fill:"white",fontSize:"10",children:"stores callback ptr"}),e.jsx("text",{x:"40",y:"90",fill:"white",fontSize:"10",children:"when event occurs:"}),e.jsx("rect",{x:"230",y:"20",width:"150",height:"80",fill:"#f59e0b",rx:"4"}),e.jsx("text",{x:"260",y:"60",fill:"white",fontSize:"10",children:"User callback"}),e.jsx("text",{x:"260",y:"80",fill:"white",fontSize:"10",children:"void onEvent(...)"}),e.jsx("line",{x1:"170",y1:"40",x2:"230",y2:"40",stroke:"#6b7280",strokeWidth:"2",markerEnd:"url(#arrowhead)"}),e.jsx("text",{x:"180",y:"30",fill:"#6b7280",fontSize:"10",children:"register"}),e.jsx("line",{x1:"230",y1:"60",x2:"170",y2:"60",stroke:"#059669",strokeWidth:"2",markerEnd:"url(#arrowhead)"}),e.jsx("text",{x:"180",y:"80",fill:"#059669",fontSize:"10",children:"callback()"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 5, 0 10",fill:"#6b7280"})})})]}),e.jsx("p",{className:"mt-4 text-center text-sm text-gray-600 dark:text-gray-400",children:"User code registers a callback; library invokes it when needed."})]})}),e.jsx("div",{className:"mb-12 grid gap-6 md:grid-cols-1 lg:grid-cols-2",children:[{title:"Separation of Concerns",desc:"The library handles the 'when'; your callback handles the 'what'.",icon:"🧩"},{title:"Registration",desc:"Pass a function pointer to the library (e.g., `set_callback(my_handler)`).",icon:"📝"},{title:"Invocation",desc:"The library calls your function when the event occurs, often passing context data.",icon:"📞"},{title:"Context Passing",desc:"Many callbacks accept a `void*` argument so you can pass arbitrary data.",icon:"📦"},{title:"Standard Library Examples",desc:"`qsort`, `bsearch`, `atexit`, `signal`, `pthread_create` all use callbacks.",icon:"📚"},{title:"Asynchronous Operations",desc:"Callbacks are essential for async I/O, timers, and event‑driven programming.",icon:"⏱️"}].map((r,t)=>e.jsxs("div",{className:a("group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-teal-600","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]",`motion-safe:animation-delay-${(t+1)*100}ms`),style:{animationDelay:`${(t+1)*100}ms`},children:[e.jsx("div",{className:"mb-3 text-4xl",children:r.icon}),e.jsx("h3",{className:"mb-2 text-xl font-semibold",children:r.title}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:r.desc})]},t))}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"mb-6 text-2xl font-semibold",children:"Callbacks in Action"}),e.jsxs("div",{className:"grid gap-8 lg:grid-cols-1",children:[e.jsxs("div",{className:a("rounded-xl border border-blue-200 bg-blue-50/50 p-5 transition-all duration-300 hover:shadow-md dark:border-blue-900 dark:bg-blue-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsxs("h3",{className:"mb-3 flex items-center text-xl font-semibold text-blue-700 dark:text-blue-400",children:[e.jsx("span",{className:"mr-2",children:"🔔"})," Custom Event System"]}),e.jsx(n,{title:"callback_event.c – Register and trigger events",initialCode:l}),e.jsx("p",{className:"mt-3 text-gray-600 dark:text-gray-400",children:"Abhronila's simple event system: register callbacks for different events, then trigger them. Shows how libraries manage multiple callbacks."})]}),e.jsxs("div",{className:a("rounded-xl border border-green-200 bg-green-50/50 p-5 transition-all duration-300 hover:shadow-md dark:border-green-900 dark:bg-green-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]","motion-safe:animation-delay-200ms"),style:{animationDelay:"200ms"},children:[e.jsxs("h3",{className:"mb-3 flex items-center text-xl font-semibold text-green-700 dark:text-green-400",children:[e.jsx("span",{className:"mr-2",children:"📞"})," Standard Library Callbacks"]}),e.jsx(n,{title:"callback_stdlib.c – qsort, atexit, signal",initialCode:i}),e.jsxs("p",{className:"mt-3 text-gray-600 dark:text-gray-400",children:["Swadeep uses ",e.jsx("code",{children:"qsort"})," (comparator callback),"," ",e.jsx("code",{children:"atexit"})," (cleanup callback), and ",e.jsx("code",{children:"signal"})," ","(signal handler). All take function pointers."]})]})]})]}),e.jsxs("section",{className:a("mb-12 rounded-xl bg-yellow-50/70 p-6 dark:bg-yellow-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold text-yellow-800 dark:text-yellow-300",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Null callback:"})," Always check if a callback pointer is NULL before calling it; otherwise, crash."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Signature mismatch:"})," The callback must have the exact parameter and return types expected. Otherwise, undefined behaviour."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Thread safety:"})," If callbacks are invoked from different threads, protect shared data with mutexes."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Context data lifetime:"})," If you pass a pointer to local data to a callback that will be called later, that data may no longer exist (dangling pointer)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reentrancy:"})," Callbacks that modify global state can cause issues if called from signal handlers (only async‑signal‑safe functions allowed)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Overwriting callbacks:"})," Some systems allow only one callback per event; registering a new one may replace the old without warning."]})]})]}),e.jsxs("section",{className:"mb-12 grid gap-6 md:grid-cols-1",children:[e.jsxs("div",{className:a("rounded-xl bg-blue-50/50 p-5 dark:bg-blue-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h3",{className:"mb-3 text-xl font-semibold text-blue-700 dark:text-blue-300",children:"📋 Do's"}),e.jsxs("ul",{className:"list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Always check for NULL before invoking a callback."}),e.jsx("li",{children:"Use `typedef` to simplify callback type declarations."}),e.jsx("li",{children:"Document when and from which context the callback will be called."}),e.jsx("li",{children:"Provide a `void*` user data parameter for passing context."}),e.jsx("li",{children:"Ensure callback functions are reentrant if used in signal handlers."})]})]}),e.jsxs("div",{className:a("rounded-xl bg-purple-50/50 p-5 dark:bg-purple-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]","motion-safe:animation-delay-200ms"),style:{animationDelay:"200ms"},children:[e.jsx("h3",{className:"mb-3 text-xl font-semibold text-purple-700 dark:text-purple-300",children:"🚫 Don'ts"}),e.jsxs("ul",{className:"list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Call a callback without verifying it's non‑null."}),e.jsx("li",{children:"Assume the callback runs in the same thread."}),e.jsx("li",{children:"Pass pointers to stack‑allocated data that may go out of scope."}),e.jsx("li",{children:"Ignore the callback's return value if it conveys important information."})]})]})]}),e.jsxs("section",{className:a("mb-12 rounded-xl border border-dashed border-indigo-300 bg-indigo-50/30 p-6 dark:border-indigo-700 dark:bg-indigo-900/10","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-3 text-2xl font-semibold text-indigo-800 dark:text-indigo-300",children:"💡 Hint – Think Like a Pro"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-medium",children:"Observe carefully:"})," In the event system example, the library stores an array of callbacks. When an event occurs, it loops through them. This allows multiple listeners – a common pattern in GUI and messaging systems. ",e.jsx("br",{}),e.jsxs("span",{className:"mt-2 block",children:[e.jsx("strong",{children:"Try changing this:"})," Add a `remove_callback` function to the event system. What would you need to store to allow removal? (e.g., an ID or function pointer comparison.)"]})]})]}),e.jsxs("section",{className:a("mb-12 rounded-xl bg-emerald-50/50 p-6 dark:bg-emerald-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold text-emerald-800 dark:text-emerald-300",children:"🧠 Tips & Tricks (Professional Edge)"}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-1",children:[e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"🧩 Typedef for clarity"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"`typedef void (*EventHandler)(int event, void* user_data);` makes callback APIs readable."})]}),e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"🧵 Thread‑safe callbacks"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"If callbacks can be invoked from multiple threads, use mutexes or ensure the callback itself is thread‑safe."})]}),e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"⏱️ Async I/O with callbacks"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Libraries like `libuv` or `libevent` are built entirely around callbacks for asynchronous operations."})]}),e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"🏫 Classroom Shortcut"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"At Naihati CNAT, we simulate a button click with a callback. Students see how the button code doesn't need to know what happens on click."})]})]})]}),e.jsxs("section",{className:a("mb-12 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-6 dark:bg-teal-900/30","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]","transition-all duration-300 hover:border-l-8 hover:shadow-lg"),children:[e.jsx("h2",{className:"mb-3 text-2xl font-semibold text-teal-800 dark:text-teal-300",children:"👨‍🏫 Teacher's Note – Sukanta Hui"}),e.jsxs("div",{className:"flex flex-wrap items-start gap-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"mb-2 text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Sukanta Hui"})," (email: sukantahui@codernaccotax.co.in , mobile: 7003756860) has been teaching programming since 1998 – that's ",e.jsxs("strong",{children:[s," years"]})," of experience in C, RDBMS, OS, and web development."]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:`"Callbacks are where C starts to feel like a modern language. They enable event‑driven design, which is how almost all user interfaces and servers work. I always emphasise the 'inversion of control' – your code is no longer in charge; it responds. It's a mindset shift. And as always, check for NULL!"`})]}),e.jsx("div",{className:"rounded-full bg-teal-200 p-3 dark:bg-teal-800",children:e.jsx("svg",{className:"h-12 w-12 text-teal-700 dark:text-teal-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})})]})]}),e.jsxs("section",{className:"rounded-xl bg-gray-100 p-6 dark:bg-gray-800",children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold",children:"✅ Mini Checklist"}),e.jsx("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-1",children:["Do I understand the inversion of control that callbacks provide?","Have I used `typedef` to simplify callback types?","Do I check for NULL before invoking a callback?","Do I manage context data lifetime correctly?","Am I aware of thread safety and reentrancy issues?","Have I used callbacks with standard library functions (qsort, atexit, signal)?"].map((r,t)=>e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:r})]},t))})]}),e.jsx("style",{children:`
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
      `})]})};export{m as default};
