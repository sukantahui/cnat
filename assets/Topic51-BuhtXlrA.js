import{j as e}from"./index-BFnLuail.js";import{c as r}from"./clsx-B-dksMZM.js";import{E as t}from"./EditableCCodeBlock-BIH-nUZ3.js";const i=`// error_mixed.c – Error handling mixed with main logic (hard to read)\r
#include <stdio.h>\r
#include <errno.h>\r
#include <string.h>\r
\r
int main() {\r
    FILE *src = fopen("source.txt", "r");\r
    if (src == NULL) {\r
        fprintf(stderr, "Error opening source: %s\\n", strerror(errno));\r
        return 1;\r
    }\r
\r
    FILE *dst = fopen("dest.txt", "w");\r
    if (dst == NULL) {\r
        fprintf(stderr, "Error opening dest: %s\\n", strerror(errno));\r
        fclose(src);\r
        return 1;\r
    }\r
\r
    char buffer[1024];\r
    size_t bytes;\r
    while ((bytes = fread(buffer, 1, sizeof(buffer), src)) > 0) {\r
        if (fwrite(buffer, 1, bytes, dst) != bytes) {\r
            fprintf(stderr, "Error writing to dest\\n");\r
            fclose(src);\r
            fclose(dst);\r
            return 1;\r
        }\r
    }\r
\r
    if (ferror(src)) {\r
        fprintf(stderr, "Error reading from source\\n");\r
        fclose(src);\r
        fclose(dst);\r
        return 1;\r
    }\r
\r
    printf("File copied successfully.\\n");\r
    fclose(src);\r
    fclose(dst);\r
    return 0;\r
}`,o=`// error_isolated.c – Error handling isolated in helper functions\r
#include <stdio.h>\r
#include <errno.h>\r
#include <string.h>\r
\r
// Helper: open file with error reporting\r
FILE* openFile(const char *filename, const char *mode) {\r
    FILE *fp = fopen(filename, mode);\r
    if (fp == NULL) {\r
        fprintf(stderr, "Error opening %s: %s\\n", filename, strerror(errno));\r
    }\r
    return fp;\r
}\r
\r
// Helper: copy data with error handling\r
int copyData(FILE *src, FILE *dst) {\r
    char buffer[1024];\r
    size_t bytes;\r
    while ((bytes = fread(buffer, 1, sizeof(buffer), src)) > 0) {\r
        if (fwrite(buffer, 1, bytes, dst) != bytes) {\r
            fprintf(stderr, "Error writing to destination\\n");\r
            return 0; // failure\r
        }\r
    }\r
    if (ferror(src)) {\r
        fprintf(stderr, "Error reading from source\\n");\r
        return 0;\r
    }\r
    return 1; // success\r
}\r
\r
int main() {\r
    FILE *src = openFile("source.txt", "r");\r
    if (src == NULL) return 1;\r
\r
    FILE *dst = openFile("dest.txt", "w");\r
    if (dst == NULL) {\r
        fclose(src);\r
        return 1;\r
    }\r
\r
    int success = copyData(src, dst);\r
\r
    fclose(src);\r
    fclose(dst);\r
\r
    if (success) {\r
        printf("File copied successfully.\\n");\r
        return 0;\r
    } else {\r
        return 1;\r
    }\r
}`,x=()=>{const a=new Date().getFullYear()-1998;return e.jsxs("div",{className:"min-h-screen bg-white p-6 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-200",children:[e.jsxs("header",{className:"mb-8 text-center",children:[e.jsx("h1",{className:"mb-2 text-4xl font-extrabold tracking-tight",children:e.jsx("span",{className:"bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400",children:"Using Functions to Isolate Error Handling Logic"})}),e.jsx("p",{className:"mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400",children:"Separate what you want to do from what to do when things go wrong. Clean, maintainable, and readable code."})]}),e.jsxs("section",{className:r("mb-12 rounded-xl bg-gray-50 p-6 shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gray-800/50","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold",children:"Why Isolate Error Handling?"}),e.jsxs("p",{className:"leading-relaxed",children:["At Barrackpore CNAT, Tuhina wrote a function to process a configuration file. Every few lines she had ",e.jsx("code",{children:"if (error) { ... }"}),". The core logic was buried in a sea of error checks. Swadeep refactored it: he created helper functions like ",e.jsx("code",{children:"openConfigFile()"}),' and{" "}',e.jsx("code",{children:"readConfigLine()"})," that handle errors internally and return clean results or error codes. The main function now reads like a story – and error handling is isolated, reusable, and testable."]})]}),e.jsx("div",{className:"mb-12 grid gap-6 md:grid-cols-1 lg:grid-cols-3",children:[{title:"Separation of Concerns",desc:"Main logic should not be cluttered with error checks. Move error handling to dedicated functions.",icon:"🧹"},{title:"Reusable Error Handlers",desc:"Common error patterns (e.g., file not found) can be handled by the same function, reducing duplication.",icon:"♻️"},{title:"Clean Happy Path",desc:"The main function becomes a sequence of calls, each either succeeding or returning an error code.",icon:"🌿"},{title:"Single Responsibility",desc:"A function should either do the work or handle errors – not both.",icon:"🎯"},{title:"Testability",desc:"Isolated error handlers can be tested separately from the core logic.",icon:"🧪"},{title:"Consistent Reporting",desc:"All error handling functions can follow the same pattern (e.g., log and return error code).",icon:"📋"}].map((s,n)=>e.jsxs("div",{className:r("group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-indigo-600","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]",`motion-safe:animation-delay-${(n+1)*100}ms`),style:{animationDelay:`${(n+1)*100}ms`},children:[e.jsx("div",{className:"mb-3 text-4xl",children:s.icon}),e.jsx("h3",{className:"mb-2 text-xl font-semibold",children:s.title}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:s.desc})]},n))}),e.jsx("section",{className:"mb-12 flex justify-center",children:e.jsxs("div",{className:"w-full max-w-3xl rounded-xl bg-gray-100 p-4 dark:bg-gray-800",children:[e.jsxs("svg",{viewBox:"0 0 500 200",className:"w-full",children:[e.jsx("text",{x:"30",y:"30",fill:"#dc2626",fontSize:"14",fontWeight:"bold",children:"Before: Mixed"}),e.jsx("rect",{x:"30",y:"40",width:"180",height:"100",fill:"#fee2e2",rx:"4",stroke:"#dc2626"}),e.jsx("text",{x:"40",y:"60",fill:"#dc2626",fontSize:"10",children:"open file"}),e.jsx("text",{x:"40",y:"80",fill:"#dc2626",fontSize:"10",children:"if error: handle"}),e.jsx("text",{x:"40",y:"100",fill:"#dc2626",fontSize:"10",children:"read data"}),e.jsx("text",{x:"40",y:"120",fill:"#dc2626",fontSize:"10",children:"if error: handle"}),e.jsx("text",{x:"40",y:"140",fill:"#dc2626",fontSize:"10",children:"process"}),e.jsx("line",{x1:"220",y1:"90",x2:"270",y2:"90",stroke:"#6b7280",strokeWidth:"2",markerEnd:"url(#arrowhead)"}),e.jsx("text",{x:"300",y:"30",fill:"#059669",fontSize:"14",fontWeight:"bold",children:"After: Isolated"}),e.jsx("rect",{x:"300",y:"40",width:"180",height:"100",fill:"#d1fae5",rx:"4",stroke:"#059669"}),e.jsx("text",{x:"310",y:"60",fill:"#059669",fontSize:"10",children:"openFileSafe()"}),e.jsx("text",{x:"310",y:"80",fill:"#059669",fontSize:"10",children:"readDataSafe()"}),e.jsx("text",{x:"310",y:"100",fill:"#059669",fontSize:"10",children:"processData()"}),e.jsx("text",{x:"310",y:"120",fill:"#059669",fontSize:"10",children:"// error handlers inside"}),e.jsx("text",{x:"310",y:"140",fill:"#059669",fontSize:"10",children:"// each function"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 5, 0 10",fill:"#6b7280"})})})]}),e.jsx("p",{className:"mt-4 text-center text-sm text-gray-600 dark:text-gray-400",children:'Isolating error handling moves the "if error" checks inside dedicated functions.'})]})}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"mb-6 text-2xl font-semibold",children:"Mixed vs Isolated Error Handling"}),e.jsxs("div",{className:"grid gap-8 lg:grid-cols-1",children:[e.jsxs("div",{className:r("rounded-xl border border-red-200 bg-red-50/50 p-5 transition-all duration-300 hover:shadow-md dark:border-red-900 dark:bg-red-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsxs("h3",{className:"mb-3 flex items-center text-xl font-semibold text-red-700 dark:text-red-400",children:[e.jsx("span",{className:"mr-2",children:"❌"})," Error Handling Mixed with Logic"]}),e.jsx(t,{title:"error_mixed.c – Main logic cluttered",initialCode:i}),e.jsxs("p",{className:"mt-3 text-gray-600 dark:text-gray-400",children:["Ritaja's ",e.jsx("code",{children:"main()"})," is full of ",e.jsx("code",{children:"if (error)"}),". The core intent (copy file) is hard to see."]})]}),e.jsxs("div",{className:r("rounded-xl border border-green-200 bg-green-50/50 p-5 transition-all duration-300 hover:shadow-md dark:border-green-900 dark:bg-green-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]","motion-safe:animation-delay-200ms"),style:{animationDelay:"200ms"},children:[e.jsxs("h3",{className:"mb-3 flex items-center text-xl font-semibold text-green-700 dark:text-green-400",children:[e.jsx("span",{className:"mr-2",children:"✅"})," Isolated Error Handling"]}),e.jsx(t,{title:"error_isolated.c – Clean, focused main",initialCode:o}),e.jsxs("p",{className:"mt-3 text-gray-600 dark:text-gray-400",children:["Debangshu moved error checks into helper functions. ",e.jsx("code",{children:"main()"})," ","reads like a high‑level plan. Error handling is reusable and separate."]})]})]})]}),e.jsxs("section",{className:r("mb-12 rounded-xl bg-yellow-50/70 p-6 dark:bg-yellow-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold text-yellow-800 dark:text-yellow-300",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Over‑isolation:"})," Creating too many tiny functions can harm readability. Strike a balance."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Inconsistent error reporting:"})," Some functions return error codes, others print and exit. Choose one style."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ignoring errors in helper functions:"})," Just moving the check doesn't help if the helper itself ignores errors."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not propagating errors:"})," The helper should return an error code so the caller knows something failed."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mixing error handling with resource cleanup:"})," Ensure that if an error occurs, resources are still freed (use single exit point pattern)."]})]})]}),e.jsxs("section",{className:"mb-12 grid gap-6 md:grid-cols-1",children:[e.jsxs("div",{className:r("rounded-xl bg-blue-50/50 p-5 dark:bg-blue-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h3",{className:"mb-3 text-xl font-semibold text-blue-700 dark:text-blue-300",children:"📋 Do's"}),e.jsxs("ul",{className:"list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Create helper functions for each operation that can fail."}),e.jsx("li",{children:"Have helpers return error codes and set results via out‑parameters."}),e.jsx("li",{children:"Keep the main function as a sequence of calls with error checks."}),e.jsx("li",{children:"Log errors at the point of handling, not deep inside helpers (unless appropriate)."}),e.jsx("li",{children:"Use consistent error code conventions across all helpers."})]})]}),e.jsxs("div",{className:r("rounded-xl bg-purple-50/50 p-5 dark:bg-purple-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]","motion-safe:animation-delay-200ms"),style:{animationDelay:"200ms"},children:[e.jsx("h3",{className:"mb-3 text-xl font-semibold text-purple-700 dark:text-purple-300",children:"🚫 Don'ts"}),e.jsxs("ul",{className:"list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Scatter error handling throughout the main logic."}),e.jsx("li",{children:"Let helper functions terminate the program without giving the caller a chance."}),e.jsx("li",{children:"Hide errors by ignoring return values."}),e.jsx("li",{children:"Duplicate the same error‑handling code in multiple places."})]})]})]}),e.jsxs("section",{className:r("mb-12 rounded-xl border border-dashed border-indigo-300 bg-indigo-50/30 p-6 dark:border-indigo-700 dark:bg-indigo-900/10","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-3 text-2xl font-semibold text-indigo-800 dark:text-indigo-300",children:"💡 Hint – Think Like a Pro"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-medium",children:"Observe carefully:"})," In the mixed example, ",e.jsx("code",{children:"main()"})," has to manage all the error details. In the isolated version, ",e.jsx("code",{children:"main()"})," is a short, clear sequence. If you need to change how errors are reported (e.g., log to a file instead of ",e.jsx("code",{children:"stderr"}),"), you only change the helpers. ",e.jsx("br",{}),e.jsxs("span",{className:"mt-2 block",children:[e.jsx("strong",{children:"Try changing this:"})," Add a new step to the isolated version – maybe validate the copied data. You'll add a new helper"," ",e.jsx("code",{children:"validateFile()"})," and one line in ",e.jsx("code",{children:"main()"}),". The error handling is already taken care of."]})]})]}),e.jsxs("section",{className:r("mb-12 rounded-xl bg-emerald-50/50 p-6 dark:bg-emerald-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold text-emerald-800 dark:text-emerald-300",children:"🧠 Tips & Tricks (Professional Edge)"}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-1",children:[e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"🧹 Use a single cleanup section"}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-400",children:["In complex functions, use ",e.jsx("code",{children:"goto"})," to a common cleanup block. This centralises resource freeing."]})]}),e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"📏 Error codes as enum"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Define an enum for all possible errors. This makes return values self‑documenting."})]}),e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"🧪 Test error paths"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Write tests that force errors (e.g., make file read-only) to ensure your error handlers work."})]}),e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"🏫 Classroom Shortcut"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"At Naihati CNAT, we practice by refactoring a messy function into clean helpers. Students see how isolating errors improves clarity."})]})]})]}),e.jsxs("section",{className:r("mb-12 rounded-xl border-l-4 border-indigo-500 bg-indigo-50/80 p-6 dark:bg-indigo-900/30","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]","transition-all duration-300 hover:border-l-8 hover:shadow-lg"),children:[e.jsx("h2",{className:"mb-3 text-2xl font-semibold text-indigo-800 dark:text-indigo-300",children:"👨‍🏫 Teacher's Note – Sukanta Hui"}),e.jsxs("div",{className:"flex flex-wrap items-start gap-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"mb-2 text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Sukanta Hui"})," (email: sukantahui@codernaccotax.co.in , mobile: 7003756860) has been teaching programming since 1998 – that's ",e.jsxs("strong",{children:[a," years"]})," of experience in C, RDBMS, OS, and web development."]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:`"I always tell my students: 'Your main function should read like a table of contents.' If you have error handling all over, the reader gets lost. Isolate the errors into well‑named functions, and the intent of the program shines through. It's a simple discipline that pays off immensely."`})]}),e.jsx("div",{className:"rounded-full bg-indigo-200 p-3 dark:bg-indigo-800",children:e.jsx("svg",{className:"h-12 w-12 text-indigo-700 dark:text-indigo-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})})]})]}),e.jsxs("section",{className:"rounded-xl bg-gray-100 p-6 dark:bg-gray-800",children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold",children:"✅ Mini Checklist"}),e.jsx("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-1",children:["Does the main function read as a high‑level sequence?","Are error checks and handling moved into helper functions?","Do helpers consistently return error codes?","Is error handling logic reusable?","Are resources cleaned up properly even on error paths?"].map((s,n)=>e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:s})]},n))})]}),e.jsx("style",{children:`
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
      `})]})};export{x as default};
