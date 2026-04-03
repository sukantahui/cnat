import{j as e}from"./index-BjcB6RzK.js";import{T as s}from"./TeacherSukantaHui-CFiXY0z_.js";import{E as r}from"./EditableCCodeBlock-DHEawUUE.js";import"./git-branch-C2puWdyr.js";import"./index-DMsSvuEi.js";import"./file-code-F5fHsy3u.js";import"./type-KuLbSU6d.js";import"./refresh-cw-BiBGBwpy.js";import"./copy-DI4a0ux7.js";import"./download-D9OBzpJs.js";const i=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <string.h>\r
\r
int main() {\r
    // 1. Buffer overflow\r
    char small[10];\r
    strcpy(small, "This string is much too long for the buffer"); // overflow!\r
    printf("small: %s\\n", small); // may crash or corrupt\r
\r
    // 2. Use-after-free\r
    int *p = malloc(sizeof(int));\r
    *p = 42;\r
    free(p);\r
    *p = 100; // use after free (undefined behavior)\r
\r
    // 3. Double free\r
    int *q = malloc(sizeof(int));\r
    free(q);\r
    free(q); // double free (corrupts heap)\r
\r
    // 4. Dereferencing NULL\r
    int *r = NULL;\r
    *r = 5; // segfault\r
\r
    return 0;\r
}`,n=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <string.h>\r
\r
int main() {\r
    // 1. Safe string copy with bounds check\r
    char small[10];\r
    const char *src = "Hi";\r
    if (strlen(src) < sizeof(small)) {\r
        strcpy(small, src);\r
    } else {\r
        printf("String too long\\n");\r
        // handle error\r
    }\r
    // Alternatively, use strncpy\r
    strncpy(small, "Hello", sizeof(small)-1);\r
    small[sizeof(small)-1] = '\\0'; // ensure null termination\r
\r
    // 2. Safe dynamic memory management\r
    int *p = malloc(sizeof(int));\r
    if (p != NULL) {\r
        *p = 42;\r
        free(p);\r
        p = NULL; // set to NULL to prevent use-after-free\r
    }\r
\r
    // 3. Avoid double free: only free once, and check after\r
    int *q = malloc(sizeof(int));\r
    if (q != NULL) {\r
        free(q);\r
        q = NULL;\r
    }\r
    // Attempting to free again would be safe because q is NULL (free(NULL) does nothing)\r
    free(q);\r
\r
    // 4. Check for NULL before dereferencing\r
    int *r = NULL;\r
    if (r != NULL) {\r
        *r = 5;\r
    } else {\r
        printf("Cannot dereference NULL pointer\\n");\r
    }\r
\r
    printf("All safe operations completed.\\n");\r
    return 0;\r
}`,u=()=>e.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-8 space-y-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300",children:[e.jsxs("div",{className:"animate-fade-up",style:{animationDelay:"0ms"},children:[e.jsx("h1",{className:"text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400",children:"Introduction to Memory Safety & Safe Pointer Practices"}),e.jsx("p",{className:"text-lg leading-relaxed",children:"Memory safety means ensuring that a program accesses only memory it is entitled to, and does so correctly. In C, where memory management is manual, unsafe pointer usage can lead to crashes, data corruption, and security vulnerabilities. Adopting safe pointer practices is essential for writing robust and secure code."})]}),e.jsxs("div",{className:"animate-fade-up grid md:grid-cols-2 gap-6",style:{animationDelay:"50ms"},children:[e.jsxs("div",{className:"group rounded-xl p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🔒 What Is Memory Safety?"}),e.jsx("p",{className:"leading-relaxed",children:"Memory safety guarantees that a program:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 mt-2",children:[e.jsx("li",{children:"Does not access memory outside allocated regions (no buffer overflows)."}),e.jsx("li",{children:"Does not use memory after it has been freed (no use‑after‑free)."}),e.jsx("li",{children:"Does not double‑free the same memory."}),e.jsx("li",{children:"Does not dereference invalid pointers (NULL or wild)."})]}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"Languages like Rust enforce memory safety at compile time; in C, we must be vigilant."})]}),e.jsxs("div",{className:"group rounded-xl p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🛡️ Safe Pointer Practices"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"Always initialize pointers (to NULL or a valid address)."}),e.jsx("li",{children:"Check for NULL before dereferencing."}),e.jsx("li",{children:"Use bounds checking when accessing arrays."}),e.jsx("li",{children:"Set pointers to NULL after freeing them."}),e.jsx("li",{children:"Prefer stack allocation when possible to avoid manual management."})]})]})]}),e.jsxs("div",{className:"animate-fade-up rounded-xl bg-gray-50 dark:bg-gray-800/50 p-4 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700",style:{animationDelay:"100ms"},children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-center",children:"Common Memory Safety Violations"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{width:"500",height:"180",viewBox:"0 0 500 180",className:"max-w-full h-auto",children:[e.jsx("rect",{x:"30",y:"20",width:"100",height:"100",fill:"#EF4444",fillOpacity:"0.2",stroke:"#EF4444",strokeWidth:"1.5"}),e.jsx("text",{x:"80",y:"50",textAnchor:"middle",fontSize:"10",children:"Buffer"}),e.jsx("text",{x:"80",y:"70",textAnchor:"middle",fontSize:"9",children:"Overflow"}),e.jsx("path",{d:"M130 70 L170 70",stroke:"#EF4444",strokeWidth:"1.5",markerEnd:"url(#arrowRed)"}),e.jsx("text",{x:"150",y:"60",fontSize:"9",fill:"#EF4444",children:"write beyond"}),e.jsx("rect",{x:"190",y:"20",width:"100",height:"100",fill:"#F59E0B",fillOpacity:"0.2",stroke:"#F59E0B",strokeWidth:"1.5"}),e.jsx("text",{x:"240",y:"50",textAnchor:"middle",fontSize:"10",children:"Freed"}),e.jsx("text",{x:"240",y:"70",textAnchor:"middle",fontSize:"9",children:"Memory"}),e.jsx("path",{d:"M290 70 L330 70",stroke:"#F59E0B",strokeWidth:"1.5",markerEnd:"url(#arrowOrange)"}),e.jsx("text",{x:"310",y:"60",fontSize:"9",fill:"#F59E0B",children:"use after free"}),e.jsx("rect",{x:"350",y:"20",width:"100",height:"100",fill:"#3B82F6",fillOpacity:"0.2",stroke:"#3B82F6",strokeWidth:"1.5"}),e.jsx("text",{x:"400",y:"50",textAnchor:"middle",fontSize:"10",children:"NULL"}),e.jsx("text",{x:"400",y:"70",textAnchor:"middle",fontSize:"9",children:"Pointer"}),e.jsx("path",{d:"M450 70 L470 70",stroke:"#3B82F6",strokeWidth:"1.5",markerEnd:"url(#arrowBlue)"}),e.jsx("text",{x:"460",y:"60",fontSize:"9",fill:"#3B82F6",children:"dereference"}),e.jsxs("defs",{children:[e.jsx("marker",{id:"arrowRed",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",children:e.jsx("polygon",{points:"0 0, 6 3, 0 6",fill:"#EF4444"})}),e.jsx("marker",{id:"arrowOrange",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",children:e.jsx("polygon",{points:"0 0, 6 3, 0 6",fill:"#F59E0B"})}),e.jsx("marker",{id:"arrowBlue",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",children:e.jsx("polygon",{points:"0 0, 6 3, 0 6",fill:"#3B82F6"})})]})]})}),e.jsx("p",{className:"text-center text-sm mt-2 text-gray-600 dark:text-gray-400",children:"Memory safety violations: buffer overflows, use‑after‑free, and NULL dereferences."})]}),e.jsxs("div",{className:"animate-fade-up space-y-8",style:{animationDelay:"150ms"},children:[e.jsxs("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"📖 Why Memory Safety Matters"}),e.jsx("p",{className:"leading-relaxed",children:"Memory unsafety is the root cause of many critical bugs: crashes, data corruption, and security vulnerabilities like buffer overflow exploits. In embedded systems, it can cause hardware malfunction. By adopting safe practices, you not only make your code more reliable but also protect against potential attacks."}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2",children:`// Unsafe: no bounds checking
char buf[10];
strcpy(buf, "This string is way too long");  // overflow

// Safe: use strncpy or check length
strncpy(buf, src, sizeof(buf)-1);
buf[sizeof(buf)-1] = '\\0';`}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Real‑world:"})," The infamous Morris worm (1988) exploited a buffer overflow in ",e.jsx("code",{children:"fingerd"}),". Modern security relies on memory‑safe practices."]})]}),e.jsxs("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"🛠️ Safe Pointer Techniques"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Initialize pointers:"})," ",e.jsx("code",{children:"int *p = NULL;"})," – makes it easy to check validity."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Check bounds manually:"})," Always validate indices before array access."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"const"})," for read‑only pointers:"]})," ",e.jsx("code",{children:"const int *p"})," prevents accidental modification."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["After ",e.jsx("code",{children:"free()"}),", set pointer to ",e.jsx("code",{children:"NULL"}),":"]})," ",e.jsx("code",{children:"free(p); p = NULL;"})," avoids dangling pointers."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Prefer stack allocation for small, fixed‑size data:"})," No risk of leaks or use‑after‑free."]})]}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Example:"})," At Barrackpore CNAT, ",e.jsx("strong",{children:"Tuhina"})," always uses ",e.jsx("code",{children:"strncpy"})," and checks the result to avoid buffer overflows."]})]})]}),e.jsxs("div",{className:"animate-fade-up space-y-6",style:{animationDelay:"200ms"},children:[e.jsx("h3",{className:"text-2xl font-semibold",children:"💻 Unsafe vs Safe Code"}),e.jsx(r,{title:"Example 1: Unsafe Practices (Causes Crashes/Exploits)",initialCode:i}),e.jsx(r,{title:"Example 2: Safe Practices (Robust & Secure)",initialCode:n})]}),e.jsxs("div",{className:"animate-fade-up bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-5 rounded-r-xl",style:{animationDelay:"250ms"},children:[e.jsx("h3",{className:"text-xl font-semibold text-red-700 dark:text-red-400 mb-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Trusting input without validation:"})," Never assume data fits in your buffer."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to include the null terminator:"})," After ",e.jsx("code",{children:"strncpy"})," or manual copy, always add ",e.jsx("code",{children:"'\\0'"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Double‑free:"})," Freeing the same pointer twice corrupts heap metadata."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Returning pointers to local variables:"})," Creates dangling pointer."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ignoring compiler warnings:"})," Warnings often point to potential memory safety issues."]})]})]}),e.jsxs("div",{className:"animate-fade-up bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-5 rounded-r-xl",style:{animationDelay:"300ms"},children:[e.jsx("h3",{className:"text-xl font-semibold text-green-700 dark:text-green-400 mb-2",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:'Adopt a "defensive programming" mindset: validate all inputs, check all allocations.'}),e.jsxs("li",{children:["Use static analysis tools (e.g., ",e.jsx("code",{children:"clang‑static‑analyzer"}),") and sanitizers (AddressSanitizer, UndefinedBehaviorSanitizer)."]}),e.jsx("li",{children:"Keep memory management contained: allocate and free in the same scope when possible."}),e.jsxs("li",{children:["For strings, use ",e.jsx("code",{children:"snprintf"})," or ",e.jsx("code",{children:"strlcpy"})," (where available) for safer copying."]}),e.jsx("li",{children:"Document pointer ownership: who is responsible for freeing memory."})]})]}),e.jsxs("div",{className:"animate-fade-up grid md:grid-cols-2 gap-4",style:{animationDelay:"350ms"},children:[e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"📋 Student Checklist"}),e.jsxs("ul",{className:"space-y-1 text-sm",children:[e.jsx("li",{children:"✅ Understand the concept of memory safety."}),e.jsx("li",{children:"✅ Can identify unsafe pointer usage in code."}),e.jsx("li",{children:"✅ Knows safe alternatives for common operations."}),e.jsx("li",{children:"✅ Uses tools like Valgrind or AddressSanitizer to detect issues."})]})]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"💡 Hint Section"}),e.jsx("p",{className:"text-sm",children:"Think about …"}),e.jsxs("ul",{className:"list-disc list-inside text-sm mt-1",children:[e.jsx("li",{children:"What are the consequences of a buffer overflow beyond crashing?"}),e.jsxs("li",{children:["Observe carefully: In the unsafe example, why does ",e.jsx("code",{children:"strcpy"})," cause a segfault only sometimes?"]}),e.jsx("li",{children:"Try running the safe example with different inputs – does it ever overflow?"})]})]})]}),e.jsxs("div",{className:"animate-fade-up p-5 border-t border-gray-200 dark:border-gray-700",style:{animationDelay:"400ms"},children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"🎓 Professional Tips & Tricks"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Enable compiler protections:"})," Use ",e.jsx("code",{children:"-D_FORTIFY_SOURCE=2"})," and ",e.jsx("code",{children:"-fstack-protector-strong"})," to harden code."]}),e.jsx("li",{children:e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"reallocarray"})," or ",e.jsx("code",{children:"calloc"})," for safer allocation (multiplication overflow checks)."]})}),e.jsx("li",{children:e.jsxs("strong",{children:["Prefer ",e.jsx("code",{children:"fgets"})," over ",e.jsx("code",{children:"gets"})," (never use ",e.jsx("code",{children:"gets"}),"!)."]})}),e.jsx("li",{children:e.jsxs("strong",{children:["Adopt a consistent naming convention for pointers that must be freed (e.g., ",e.jsx("code",{children:"p_"})," prefix)."]})})]})]}),e.jsx("div",{className:"animate-fade-up",style:{animationDelay:"450ms"},children:e.jsx(s,{note:"Memory safety is not just about avoiding crashes; it's about writing reliable, secure software. In our Barrackpore CNAT class, we stress that every pointer must be treated as a potential bomb until proven safe. Use tools, check your code, and never trust input. The safe habits you learn now will serve you for your entire career."})}),e.jsx("style",{children:`
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
      `})]});export{u as default};
