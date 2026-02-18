import{j as e}from"./index-BFnLuail.js";import{c as r}from"./clsx-B-dksMZM.js";import{E as a}from"./EditableCCodeBlock-BIH-nUZ3.js";const i=`// input_validation_bad.c – No input validation, crashes on bad data\r
#include <stdio.h>\r
\r
// No check for zero divisor – crashes if b == 0\r
double divide(int a, int b) {\r
    return a / (double)b;\r
}\r
\r
// No NULL check – crashes if arr is NULL\r
int getElement(int *arr, int index) {\r
    return arr[index];\r
}\r
\r
// No range check – undefined behaviour for negative or large index\r
int getArrayValue(int arr[], int size, int index) {\r
    return arr[index];  // Assume index is valid\r
}\r
\r
int main() {\r
    // Problem 1: division by zero\r
    double result = divide(10, 0);\r
    printf("10 / 0 = %f\\n", result);  // Crash or infinity\r
\r
    // Problem 2: NULL pointer\r
    int *ptr = NULL;\r
    int val = getElement(ptr, 0);  // Crash\r
\r
    // Problem 3: out-of-bounds index\r
    int numbers[5] = {1, 2, 3, 4, 5};\r
    int bad = getArrayValue(numbers, 5, 10);  // Reads garbage, may crash\r
    printf("Value at index 10: %d\\n", bad);\r
\r
    return 0;\r
}`,l=`// input_validation_good.c – Validates inputs and handles errors gracefully\r
#include <stdio.h>\r
#include <stddef.h>  // for NULL\r
\r
// Returns 1 on success, 0 on error (division by zero)\r
int divide(int a, int b, double *result) {\r
    if (b == 0) {\r
        printf("Error: Division by zero\\n");\r
        return 0;\r
    }\r
    *result = a / (double)b;\r
    return 1;\r
}\r
\r
// Returns 1 on success, 0 on NULL pointer or out-of-bounds\r
int getElement(int *arr, int size, int index, int *result) {\r
    if (arr == NULL) {\r
        printf("Error: NULL pointer\\n");\r
        return 0;\r
    }\r
    if (index < 0 || index >= size) {\r
        printf("Error: Index %d out of bounds [0, %d)\\n", index, size);\r
        return 0;\r
    }\r
    *result = arr[index];\r
    return 1;\r
}\r
\r
int main() {\r
    double res;\r
    if (divide(10, 0, &res)) {\r
        printf("10 / 0 = %f\\n", res);\r
    } else {\r
        printf("Division failed – continuing safely.\\n");\r
    }\r
\r
    int numbers[5] = {1, 2, 3, 4, 5};\r
    int val;\r
    if (getElement(numbers, 5, 10, &val)) {\r
        printf("Value at index 10: %d\\n", val);\r
    } else {\r
        printf("Array access failed – continuing safely.\\n");\r
    }\r
\r
    // Test NULL pointer\r
    int *ptr = NULL;\r
    if (getElement(ptr, 5, 0, &val)) {\r
        printf("Value: %d\\n", val);\r
    } else {\r
        printf("NULL pointer access prevented.\\n");\r
    }\r
\r
    return 0;\r
}`,h=()=>{const s=new Date().getFullYear()-1998;return e.jsxs("div",{className:"min-h-screen bg-white p-6 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-200",children:[e.jsxs("header",{className:"mb-8 text-center",children:[e.jsx("h1",{className:"mb-2 text-4xl font-extrabold tracking-tight",children:e.jsx("span",{className:"bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent dark:from-yellow-400 dark:to-amber-400",children:"Validating Inputs Inside Functions"})}),e.jsx("p",{className:"mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400",children:"Never trust your inputs – validate them. Protect your functions from bad data, crashes, and security holes."})]}),e.jsxs("section",{className:r("mb-12 rounded-xl bg-gray-50 p-6 shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gray-800/50","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold",children:"Why Validate Inputs?"}),e.jsx("p",{className:"leading-relaxed",children:"At Barrackpore CNAT, Tuhina wrote a function to compute the square root of a number. She assumed callers would only pass non‑negative numbers. Then Swadeep passed –5, and the program crashed. Input validation is the first line of defense: it checks that the data meets the function's assumptions. Without it, your program can produce garbage results, crash, or become a security vulnerability. Validate early, validate often."})]}),e.jsx("section",{className:"mb-12 flex justify-center",children:e.jsxs("div",{className:"w-full max-w-2xl rounded-xl bg-gray-100 p-4 dark:bg-gray-800",children:[e.jsxs("svg",{viewBox:"0 0 400 250",className:"w-full",children:[e.jsx("circle",{cx:"80",cy:"40",r:"20",fill:"#3b82f6"}),e.jsx("text",{x:"70",y:"45",fill:"white",fontSize:"12",children:"Start"}),e.jsx("rect",{x:"40",y:"100",width:"80",height:"40",fill:"#f59e0b",rx:"4"}),e.jsx("text",{x:"50",y:"125",fill:"white",fontSize:"10",children:"Input valid?"}),e.jsx("line",{x1:"80",y1:"140",x2:"200",y2:"180",stroke:"#059669",strokeWidth:"2",markerEnd:"url(#arrowhead)"}),e.jsx("text",{x:"140",y:"160",fill:"#059669",fontSize:"10",children:"Yes"}),e.jsx("line",{x1:"80",y1:"100",x2:"80",y2:"60",stroke:"#dc2626",strokeWidth:"2",markerEnd:"url(#arrowhead)"}),e.jsx("text",{x:"90",y:"75",fill:"#dc2626",fontSize:"10",children:"No"}),e.jsx("rect",{x:"20",y:"20",width:"100",height:"30",fill:"#dc2626",rx:"4"}),e.jsx("text",{x:"30",y:"40",fill:"white",fontSize:"10",children:"Return error"}),e.jsx("rect",{x:"200",y:"160",width:"100",height:"40",fill:"#059669",rx:"4"}),e.jsx("text",{x:"220",y:"185",fill:"white",fontSize:"10",children:"Process data"}),e.jsx("circle",{cx:"250",cy:"220",r:"20",fill:"#3b82f6"}),e.jsx("text",{x:"240",y:"225",fill:"white",fontSize:"12",children:"End"}),e.jsx("line",{x1:"250",y1:"200",x2:"250",y2:"220",stroke:"#6b7280",strokeWidth:"2"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 5, 0 10",fill:"#6b7280"})})})]}),e.jsx("p",{className:"mt-4 text-center text-sm text-gray-600 dark:text-gray-400",children:"Validate inputs at the beginning. On failure, return an error or take corrective action. Only proceed if data is safe."})]})}),e.jsx("div",{className:"mb-12 grid gap-6 md:grid-cols-1 lg:grid-cols-2",children:[{title:"Range Checks",desc:"Ensure numbers are within expected bounds (e.g., age between 0 and 150).",icon:"📏"},{title:"Null Pointers",desc:"Always check pointers for NULL before dereferencing.",icon:"📍"},{title:"String Length",desc:"Prevent buffer overflows by checking string length against buffer size.",icon:"📝"},{title:"Type Validity",desc:"For enums or flags, verify the value is one of the allowed constants.",icon:"🔢"},{title:"Division by Zero",desc:"Never divide without ensuring the divisor is non‑zero.",icon:"➗"},{title:"File/Resource Handles",desc:"Check that files opened successfully before reading/writing.",icon:"📁"}].map((t,n)=>e.jsxs("div",{className:r("group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-yellow-600","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]",`motion-safe:animation-delay-${(n+1)*100}ms`),style:{animationDelay:`${(n+1)*100}ms`},children:[e.jsx("div",{className:"mb-3 text-4xl",children:t.icon}),e.jsx("h3",{className:"mb-2 text-xl font-semibold",children:t.title}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:t.desc})]},n))}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"mb-6 text-2xl font-semibold",children:"Validation: Good vs Bad"}),e.jsxs("div",{className:"grid gap-8 lg:grid-cols-1",children:[e.jsxs("div",{className:r("rounded-xl border border-red-200 bg-red-50/50 p-5 transition-all duration-300 hover:shadow-md dark:border-red-900 dark:bg-red-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsxs("h3",{className:"mb-3 flex items-center text-xl font-semibold text-red-700 dark:text-red-400",children:[e.jsx("span",{className:"mr-2",children:"❌"})," No Validation"]}),e.jsx(a,{title:"input_validation_bad.c – Crashes on bad input",initialCode:i}),e.jsxs("p",{className:"mt-3 text-gray-600 dark:text-gray-400",children:["Ritaja's ",e.jsx("code",{children:"divide()"})," doesn't check for zero divisor. Passing 0 crashes the program. The array function also ignores NULL pointers."]})]}),e.jsxs("div",{className:r("rounded-xl border border-green-200 bg-green-50/50 p-5 transition-all duration-300 hover:shadow-md dark:border-green-900 dark:bg-green-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]","motion-safe:animation-delay-200ms"),style:{animationDelay:"200ms"},children:[e.jsxs("h3",{className:"mb-3 flex items-center text-xl font-semibold text-green-700 dark:text-green-400",children:[e.jsx("span",{className:"mr-2",children:"✅"})," With Validation"]}),e.jsx(a,{title:"input_validation_good.c – Handles errors gracefully",initialCode:l}),e.jsx("p",{className:"mt-3 text-gray-600 dark:text-gray-400",children:"Debangshu's version checks for zero, NULL, and out‑of‑range indices, returning error codes or printing messages. The program continues safely."})]})]})]}),e.jsxs("section",{className:r("mb-12 rounded-xl bg-yellow-50/70 p-6 dark:bg-yellow-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold text-yellow-800 dark:text-yellow-300",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Validating too late:"})," After already using the invalid data (e.g., dereferencing a NULL pointer before checking)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Inconsistent error handling:"})," Some functions return -1 on error, others return NULL, others print and exit. Pick one convention."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ignoring return values:"})," Calling a function that validates and returns an error code, but not checking it."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Over‑validation:"})," Checking for conditions that are guaranteed by the caller, adding unnecessary overhead."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using assertions for runtime validation:"})," Assertions are for debugging; they can be compiled out. Use proper conditionals for input validation."]})]})]}),e.jsxs("section",{className:"mb-12 grid gap-6 md:grid-cols-1",children:[e.jsxs("div",{className:r("rounded-xl bg-blue-50/50 p-5 dark:bg-blue-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h3",{className:"mb-3 text-xl font-semibold text-blue-700 dark:text-blue-300",children:"📋 Do's"}),e.jsxs("ul",{className:"list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Validate all external inputs (user, file, network)."}),e.jsx("li",{children:"Check pointers for NULL before dereferencing."}),e.jsx("li",{children:"Verify ranges (e.g., array indices, mathematical domains)."}),e.jsx("li",{children:"Use consistent error reporting (return codes, error flags)."}),e.jsx("li",{children:"Document the expected input range in the function comment."})]})]}),e.jsxs("div",{className:r("rounded-xl bg-purple-50/50 p-5 dark:bg-purple-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]","motion-safe:animation-delay-200ms"),style:{animationDelay:"200ms"},children:[e.jsx("h3",{className:"mb-3 text-xl font-semibold text-purple-700 dark:text-purple-300",children:"🚫 Don'ts"}),e.jsxs("ul",{className:"list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Assume inputs are always valid."}),e.jsx("li",{children:"Use assertions for runtime input validation."}),e.jsx("li",{children:"Ignore error codes from called functions."}),e.jsx("li",{children:"Validate after using the data (too late)."})]})]})]}),e.jsxs("section",{className:r("mb-12 rounded-xl border border-dashed border-indigo-300 bg-indigo-50/30 p-6 dark:border-indigo-700 dark:bg-indigo-900/10","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-3 text-2xl font-semibold text-indigo-800 dark:text-indigo-300",children:"💡 Hint – Think Like a Pro"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-medium",children:"Observe carefully:"})," In the bad example, calling ",e.jsx("code",{children:"divide(10, 0)"})," causes a crash. In the good example, it returns an error code and the caller can handle it. Which version would you rather use in a banking application? ",e.jsx("br",{}),e.jsxs("span",{className:"mt-2 block",children:[e.jsx("strong",{children:"Try changing this:"})," Modify the good example to add validation for negative numbers in ",e.jsx("code",{children:"sqrt()"}),". Return a special value or set an error flag."]})]})]}),e.jsxs("section",{className:r("mb-12 rounded-xl bg-emerald-50/50 p-6 dark:bg-emerald-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold text-emerald-800 dark:text-emerald-300",children:"🧠 Tips & Tricks (Professional Edge)"}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-1",children:[e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsxs("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:["🛡️ Use ",e.jsx("code",{children:"const"})," for input pointers"]}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"If a function doesn't modify the input data, declare it as const. It signals intent and allows compiler optimizations."})]}),e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"🧪 Test with invalid inputs"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Write unit tests that deliberately pass bad data to ensure your validation works."})]}),e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"📏 Validate early, return early"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Put all validation checks at the top of the function. If any fail, return immediately. This keeps the main logic uncluttered."})]}),e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"🏫 Classroom Shortcut"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"At Naihati CNAT, we teach students to imagine the worst possible input and see if their function survives. If it crashes, add validation."})]})]})]}),e.jsxs("section",{className:r("mb-12 rounded-xl border-l-4 border-yellow-500 bg-yellow-50/80 p-6 dark:bg-yellow-900/30","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]","transition-all duration-300 hover:border-l-8 hover:shadow-lg"),children:[e.jsx("h2",{className:"mb-3 text-2xl font-semibold text-yellow-800 dark:text-yellow-300",children:"👨‍🏫 Teacher's Note – Sukanta Hui"}),e.jsxs("div",{className:"flex flex-wrap items-start gap-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"mb-2 text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Sukanta Hui"})," (email: sukantahui@codernaccotax.co.in , mobile: 7003756860) has been teaching programming since 1998 – that's ",e.jsxs("strong",{children:[s," years"]})," of experience in C, RDBMS, OS, and web development."]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:`"One of the most common bugs I see is functions that crash on bad input. Students often assume that callers will 'do the right thing'. In real‑world code, you cannot trust anyone – not even yourself. Validate everything. It takes a few lines but saves hours of debugging. Remember: garbage in, garbage out – but better to detect the garbage early."`})]}),e.jsx("div",{className:"rounded-full bg-yellow-200 p-3 dark:bg-yellow-800",children:e.jsx("svg",{className:"h-12 w-12 text-yellow-700 dark:text-yellow-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})})]})]}),e.jsxs("section",{className:"rounded-xl bg-gray-100 p-6 dark:bg-gray-800",children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold",children:"✅ Mini Checklist"}),e.jsx("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-1",children:["Does the function check all assumptions about inputs?","Are pointers checked for NULL before use?","Are divisions protected against zero divisor?","Are array indices within bounds?","Is the error handling consistent and documented?","Do I validate external data (user, file) before processing?"].map((t,n)=>e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:t})]},n))})]}),e.jsx("style",{children:`
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
