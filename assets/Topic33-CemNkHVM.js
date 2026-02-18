import{j as e}from"./index-BFnLuail.js";import{c as s}from"./clsx-B-dksMZM.js";import{E as n}from"./EditableCCodeBlock-BIH-nUZ3.js";const t=`// 📏 Good: one clear purpose, reusable\r
#include <stdio.h>\r
#include <stdbool.h>\r
\r
// Checks if a number is prime (single responsibility)\r
bool isPrime(int n) {\r
    if (n <= 1) return false;\r
    for (int i = 2; i * i <= n; i++) {\r
        if (n % i == 0) return false;\r
    }\r
    return true;\r
}\r
\r
// Uses the reusable function\r
int main() {\r
    int numbers[] = {2, 3, 4, 5, 16, 17, 18, 19, 20};\r
    int size = sizeof(numbers) / sizeof(numbers[0]);\r
\r
    for (int i = 0; i < size; i++) {\r
        if (isPrime(numbers[i])) {\r
            printf("%d is prime\\n", numbers[i]);\r
        } else {\r
            printf("%d is not prime\\n", numbers[i]);\r
        }\r
    }\r
    return 0;\r
}`,l=`// ❌ Bad: too many responsibilities, not reusable\r
#include <stdio.h>\r
\r
// This function does everything: input, calculation, output\r
void processNumbers() {\r
    int n;\r
    printf("Enter how many numbers: ");\r
    scanf("%d", &n);\r
\r
    int arr[100];\r
    printf("Enter %d numbers: ", n);\r
    for (int i = 0; i < n; i++) {\r
        scanf("%d", &arr[i]);\r
    }\r
\r
    // calculate and print primes (mixed concerns)\r
    for (int i = 0; i < n; i++) {\r
        int num = arr[i];\r
        int isPrime = 1;\r
        if (num <= 1) isPrime = 0;\r
        for (int j = 2; j * j <= num; j++) {\r
            if (num % j == 0) {\r
                isPrime = 0;\r
                break;\r
            }\r
        }\r
        if (isPrime)\r
            printf("%d is prime\\n", num);\r
        else\r
            printf("%d is not prime\\n", num);\r
    }\r
}\r
\r
int main() {\r
    processNumbers(); // Can't reuse the prime logic elsewhere\r
    return 0;\r
}`,h=()=>{const i=new Date().getFullYear()-1998;return e.jsxs("div",{className:"min-h-screen bg-white p-6 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-200",children:[e.jsxs("header",{className:"mb-8 text-center",children:[e.jsx("h1",{className:"mb-2 text-4xl font-extrabold tracking-tight",children:e.jsx("span",{className:"bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400",children:"Best Practices for Writing Reusable Functions"})}),e.jsx("p",{className:"mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400",children:"Write functions once, use them everywhere – cleanly, safely, and professionally."})]}),e.jsxs("section",{className:s("mb-12 rounded-xl bg-gray-50 p-6 shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gray-800/50","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold",children:"Why Reusability Matters"}),e.jsx("p",{className:"leading-relaxed",children:"Imagine Tuhina and Abhronila are building a student management system. If they both write the same validation logic in ten different places, fixing a bug becomes a nightmare. Reusable functions act as single sources of truth – change once, reflect everywhere. In professional teams, reusability is the cornerstone of maintainability."})]}),e.jsx("div",{className:"mb-12 grid gap-6 md:grid-cols-1 lg:grid-cols-3",children:[{title:"Single Responsibility",desc:"Each function should do exactly one thing. A function that both validates input and saves to a file is hard to reuse.",icon:"🎯"},{title:"Descriptive Names",desc:"Name functions like verbs: `calculateAverage()`, `isValidEmail()`. Avoid vague names like `process()`.",icon:"🏷️"},{title:"Limit Parameters",desc:"Too many parameters ( > 3 ) make functions confusing. Group related data into structures.",icon:"🔢"},{title:"Avoid Global State",desc:"Functions that depend on or modify global variables are unpredictable. Pass everything explicitly.",icon:"🌐"},{title:"Return Meaningful Values",desc:"Return error codes or use consistent return types so callers know what happened.",icon:"↩️"},{title:"Document Expectations",desc:"Use comments or docstrings to explain parameters, return values, and edge cases.",icon:"📝"}].map((r,a)=>e.jsxs("div",{className:s("group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-600","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]",`motion-safe:animation-delay-${(a+1)*100}ms`),style:{animationDelay:`${(a+1)*100}ms`},children:[e.jsx("div",{className:"mb-3 text-4xl",children:r.icon}),e.jsx("h3",{className:"mb-2 text-xl font-semibold",children:r.title}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:r.desc})]},a))}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"mb-6 text-2xl font-semibold",children:"From Classroom to Code"}),e.jsxs("div",{className:"grid gap-8 lg:grid-cols-1",children:[e.jsxs("div",{className:s("rounded-xl border border-green-200 bg-green-50/50 p-5 transition-all duration-300 hover:shadow-md dark:border-green-900 dark:bg-green-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsxs("h3",{className:"mb-3 flex items-center text-xl font-semibold text-green-700 dark:text-green-400",children:[e.jsx("span",{className:"mr-2",children:"✅"})," Good Reusable Function"]}),e.jsx(n,{title:"isPrime() – single purpose, reusable",initialCode:t}),e.jsxs("p",{className:"mt-3 text-gray-600 dark:text-gray-400",children:["Debangshu can use ",e.jsx("code",{children:"isPrime()"})," in his math quiz, while Ritaja uses it in a cryptography demo – zero duplication."]})]}),e.jsxs("div",{className:s("rounded-xl border border-red-200 bg-red-50/50 p-5 transition-all duration-300 hover:shadow-md dark:border-red-900 dark:bg-red-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]","motion-safe:animation-delay-200ms"),style:{animationDelay:"200ms"},children:[e.jsxs("h3",{className:"mb-3 flex items-center text-xl font-semibold text-red-700 dark:text-red-400",children:[e.jsx("span",{className:"mr-2",children:"❌"})," Non‑reusable Mess"]}),e.jsx(n,{title:"processNumbers() – does everything",initialCode:l}),e.jsx("p",{className:"mt-3 text-gray-600 dark:text-gray-400",children:"Swadeep cannot reuse the prime logic without copying code. Any change forces him to hunt down every copy."})]})]})]}),e.jsxs("section",{className:s("mb-12 rounded-xl bg-yellow-50/70 p-6 dark:bg-yellow-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold text-yellow-800 dark:text-yellow-300",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Side effects:"})," Modifying global variables or input arrays unintentionally."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Magic numbers:"})," Hardcoding constants inside a function (e.g., buffer size 100) instead of passing them."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ignoring return values:"})," Calling a function that returns an error code but never checking it."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Over‑optimisation:"})," Making functions too general‑purpose with many flags – keep it simple."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Poor naming:"})," Names like ",e.jsx("code",{children:"func1()"})," or"," ",e.jsx("code",{children:"doStuff()"})," hide intent."]})]})]}),e.jsxs("section",{className:"mb-12 grid gap-6 md:grid-cols-1",children:[e.jsxs("div",{className:s("rounded-xl bg-blue-50/50 p-5 dark:bg-blue-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h3",{className:"mb-3 text-xl font-semibold text-blue-700 dark:text-blue-300",children:"📋 Do's"}),e.jsxs("ul",{className:"list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Write small functions (20–30 lines max)."}),e.jsx("li",{children:"Use consistent naming conventions."}),e.jsx("li",{children:"Validate inputs at the start."}),e.jsx("li",{children:"Return early on errors."}),e.jsx("li",{children:"Keep related functions in the same module."})]})]}),e.jsxs("div",{className:s("rounded-xl bg-purple-50/50 p-5 dark:bg-purple-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]","motion-safe:animation-delay-200ms"),style:{animationDelay:"200ms"},children:[e.jsx("h3",{className:"mb-3 text-xl font-semibold text-purple-700 dark:text-purple-300",children:"🚫 Don'ts"}),e.jsxs("ul",{className:"list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Rely on global variables."}),e.jsx("li",{children:"Mix I/O with business logic."}),e.jsx("li",{children:"Use vague parameter names (a, b, c)."}),e.jsx("li",{children:"Repeat the same code block twice."}),e.jsx("li",{children:"Hide side effects (e.g., printing inside a calculation)."})]})]})]}),e.jsxs("section",{className:s("mb-12 rounded-xl border border-dashed border-indigo-300 bg-indigo-50/30 p-6 dark:border-indigo-700 dark:bg-indigo-900/10","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-3 text-2xl font-semibold text-indigo-800 dark:text-indigo-300",children:"💡 Hint – Think Like a Pro"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-medium",children:"Observe carefully:"})," In the good example, ",e.jsx("code",{children:"isPrime()"})," only checks primality. It doesn't ask for input or print results. This makes it usable in a GUI, a web server, or a command line tool. ",e.jsx("br",{}),e.jsxs("span",{className:"mt-2 block",children:[e.jsx("strong",{children:"Try changing this:"})," Modify ",e.jsx("code",{children:"isPrime()"}),` to also print "Checking..." – suddenly you can't use it in a silent background task.`]})]})]}),e.jsxs("section",{className:s("mb-12 rounded-xl bg-emerald-50/50 p-6 dark:bg-emerald-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold text-emerald-800 dark:text-emerald-300",children:"🧠 Tips & Tricks (Professional Edge)"}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-1",children:[e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"🔍 Debugging Mindset"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Write functions that are easy to test in isolation. Use assertions or print statements only during development, then remove them."})]}),e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"🏷️ Naming Gold"}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-400",children:["Prefix boolean‑returning functions with ",e.jsx("code",{children:"is_"}),","," ",e.jsx("code",{children:"has_"}),", or ",e.jsx("code",{children:"can_"}),". Example:"," ",e.jsx("code",{children:"is_valid_age()"}),"."]})]}),e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"🧪 Classroom Shortcut"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"At Barrackpore CNAT, students often forget to check return values. Get into the habit of always handling them, even if it's just logging."})]}),e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"📦 Structure Advice"}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-400",children:["Group related functions in a separate ",e.jsx("code",{children:".c"})," and"," ",e.jsx("code",{children:".h"})," file. This is how real libraries are built."]})]})]})]}),e.jsxs("section",{className:s("mb-12 rounded-xl border-l-4 border-blue-500 bg-blue-50/80 p-6 dark:bg-blue-900/30","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]","transition-all duration-300 hover:border-l-8 hover:shadow-lg"),children:[e.jsx("h2",{className:"mb-3 text-2xl font-semibold text-blue-800 dark:text-blue-300",children:"👨‍🏫 Teacher's Note – Sukanta Hui"}),e.jsxs("div",{className:"flex flex-wrap items-start gap-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"mb-2 text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Sukanta Hui"})," (email: sukantahui@codernaccotax.co.in , mobile: 7003756860) has been teaching programming since 1998 – that's ",e.jsxs("strong",{children:[i," years"]})," of experience in C, RDBMS, OS, and web development."]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:`"I've seen countless students at Naihati CNAT struggle with unmaintainable code. The secret is simple: treat every function as a tiny tool. If it does one thing well, you can build anything. Remember, reusable code is not about writing less – it's about writing smarter."`})]}),e.jsx("div",{className:"rounded-full bg-blue-200 p-3 dark:bg-blue-800",children:e.jsx("svg",{className:"h-12 w-12 text-blue-700 dark:text-blue-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})})]})]}),e.jsxs("section",{className:"rounded-xl bg-gray-100 p-6 dark:bg-gray-800",children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold",children:"✅ Mini Checklist"}),e.jsx("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-1",children:["Does the function have one clear purpose?","Is the name a verb that describes what it does?","Are parameters limited and clearly named?","Does it avoid modifying global variables?","Is the return value meaningful and checked?","Are there comments explaining non‑obvious logic?","Can this function be used in another program easily?"].map((r,a)=>e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:r})]},a))})]}),e.jsx("style",{children:`
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
