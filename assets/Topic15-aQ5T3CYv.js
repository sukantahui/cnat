import{j as e}from"./index-CRiz6zY8.js";import{c as a}from"./clsx-B-dksMZM.js";import{T as i}from"./TeacherSukantaHui-wNtXcy1x.js";import{E as l}from"./EditableCCodeBlock-NxEwDILf.js";import"./git-branch-CNf1tLSd.js";import"./index-BdWfQfdw.js";import"./file-code-C3NGmQnN.js";import"./type-Byiw2pIS.js";import"./refresh-cw-jY4OSlco.js";import"./copy-BknYEKcl.js";import"./download-tHUdtA5g.js";const t=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
void leaky_function() {\r
    int *p = (int*)malloc(sizeof(int));\r
    *p = 42;\r
    // Forgot to free p\r
    // p is lost when function returns → leak\r
}\r
\r
int main() {\r
    leaky_function();\r
    printf("Function returned, but memory leaked\\n");\r
    return 0;\r
}`,n=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
void good_function() {\r
    int *p = (int*)malloc(sizeof(int));\r
    if (!p) return;\r
    *p = 42;\r
    printf("Value: %d\\n", *p);\r
    free(p);  // Properly freed\r
}\r
\r
int main() {\r
    good_function();\r
    printf("No leak\\n");\r
    return 0;\r
}`,o=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
int main() {\r
    // This program intentionally leaks memory to show detection\r
    int *leak1 = (int*)malloc(100 * sizeof(int));\r
    int *leak2 = (int*)calloc(50, sizeof(int));\r
\r
    // No free for leak1 and leak2\r
\r
    // This is a valid allocation that will be freed\r
    int *valid = (int*)malloc(sizeof(int));\r
    if (valid) {\r
        *valid = 123;\r
        printf("Valid value: %d\\n", *valid);\r
        free(valid);\r
    }\r
\r
    // leak1 and leak2 remain allocated → reported by Valgrind\r
    return 0;\r
}`,d=`
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

  @media (prefers-reduced-motion: no-preference) {
    .animate-fade-slide-up {
      animation: fadeSlideUp 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .animate-fade-slide-up {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,k=()=>{const s=["0ms","100ms","200ms","300ms","400ms","500ms","600ms","700ms","800ms","900ms","1000ms","1100ms"],r=()=>a("animate-fade-slide-up","opacity-0");return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:d}),e.jsxs("div",{className:"w-full max-w-5xl mx-auto px-4 py-8 space-y-12 dark:bg-gray-900 bg-gray-50 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:[e.jsxs("div",{className:r(),style:{animationDelay:s[0]},children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400",children:"Memory Leaks & Detection Techniques"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 mt-2 leading-relaxed",children:"The silent resource killer — how leaks happen, why they matter, and how to catch them."})]}),e.jsxs("section",{className:r(),style:{animationDelay:s[1]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4 mb-4",children:"What is a Memory Leak?"}),e.jsx("p",{className:"leading-relaxed mb-3",children:"A memory leak occurs when dynamically allocated memory is no longer needed but is never freed. The program loses all references to that memory, making it impossible to reclaim until the program exits. Over time, leaks accumulate, consuming more and more memory until the system runs out, causing slowdowns or crashes."}),e.jsx("p",{className:"leading-relaxed",children:"In long‑running applications (servers, embedded devices, GUIs), even small leaks can become catastrophic. Detecting and fixing leaks is a critical skill for professional C programmers."})]}),e.jsxs("section",{className:r(),style:{animationDelay:s[2]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-red-500 pl-4 mb-4",children:"💥 Why Memory Leaks Are Dangerous"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-medium",children:"📉 Performance Degradation"}),e.jsx("p",{className:"mt-2 leading-relaxed",children:"As memory usage grows, the OS may start swapping, causing slowdowns. In embedded systems, it may lead to thrashing or complete failure."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-medium",children:"💣 Crashes & OOM"}),e.jsxs("p",{className:"mt-2 leading-relaxed",children:["Eventually, the heap exhausts available memory, and ",e.jsx("code",{children:"malloc"})," returns ",e.jsx("code",{children:"NULL"}),", leading to a crash if not handled."]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-medium",children:"🔒 Security Risks"}),e.jsx("p",{className:"mt-2 leading-relaxed",children:"Leaks can expose sensitive data if the leaked memory contains secrets that aren't overwritten."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-medium",children:"🐞 Hard‑to‑Debug Bugs"}),e.jsx("p",{className:"mt-2 leading-relaxed",children:"Leaks often manifest long after the faulty code ran, making them difficult to trace."})]})]})]}),e.jsxs("section",{className:r(),style:{animationDelay:s[3]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-4 mb-4",children:"🔍 Detection Techniques"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"🔧 Manual Code Review:"})," Check that every ",e.jsx("code",{children:"malloc"})," has a matching ",e.jsx("code",{children:"free"}),"in all execution paths. Look for lost pointers (overwritten without free)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"🛠️ Valgrind (Memcheck):"})," The gold standard for leak detection. It runs your program and reports leaks, invalid accesses, and double frees."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"⚙️ AddressSanitizer (ASan):"})," A compile‑time instrumentation that detects leaks, use‑after‑free, and buffer overflows with minimal overhead."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"📊 Static Analysis:"})," Tools like Clang Static Analyzer, Coverity, or Splint can find leaks without running the program."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"📝 Logging Allocation Points:"})," Wrapping ",e.jsx("code",{children:"malloc"}),"/",e.jsx("code",{children:"free"})," with counters or tracking can help spot leaks in real‑time."]})]})})]}),e.jsxs("section",{className:r(),style:{animationDelay:s[4]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-4 mb-4",children:"🖼️ Memory Leak Visualization"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md transition-all duration-300 hover:shadow-xl",children:e.jsxs("svg",{viewBox:"0 0 800 200",className:"w-full h-auto","aria-label":"Memory leak diagram",children:[e.jsx("rect",{width:"800",height:"200",fill:"transparent"}),e.jsx("rect",{x:"50",y:"30",width:"300",height:"30",fill:"rgba(59,130,246,0.2)",stroke:"#3b82f6",strokeWidth:"2",rx:"4"}),e.jsx("text",{x:"60",y:"50",fill:"currentColor",className:"text-xs",children:"Heap initially"}),e.jsx("rect",{x:"50",y:"80",width:"100",height:"30",fill:"rgba(34,197,94,0.2)",stroke:"#22c55e",strokeWidth:"1"}),e.jsx("text",{x:"60",y:"100",fill:"currentColor",className:"text-xs",children:"Alloc A"}),e.jsx("rect",{x:"170",y:"80",width:"100",height:"30",fill:"rgba(239,68,68,0.2)",stroke:"#ef4444",strokeWidth:"1"}),e.jsx("text",{x:"180",y:"100",fill:"currentColor",className:"text-xs",children:"Alloc B"}),e.jsx("text",{x:"280",y:"100",fill:"#ef4444",className:"text-xs",children:"Leaked (no free)"}),e.jsx("line",{x1:"220",y1:"120",x2:"220",y2:"160",stroke:"#ef4444",strokeWidth:"2",strokeDasharray:"4 2"}),e.jsx("text",{x:"230",y:"140",fill:"#ef4444",className:"text-xs",children:"pointer lost"}),e.jsx("rect",{x:"50",y:"160",width:"300",height:"30",fill:"rgba(239,68,68,0.3)",stroke:"#ef4444",strokeWidth:"2",rx:"4"}),e.jsx("text",{x:"60",y:"180",fill:"currentColor",className:"text-xs",children:"Leaked memory accumulates → Out‑of‑Memory"})]})})]}),e.jsxs("section",{className:r(),style:{animationDelay:s[5]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-red-500 pl-4 mb-4",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(l,{title:"Example 1: Classic memory leak",initialCode:t}),e.jsx(l,{title:"Example 2: Fixed version (no leak)",initialCode:n}),e.jsx(l,{title:"Example 3: Detecting leaks with Valgrind/ASan",initialCode:o})]})]}),e.jsxs("section",{className:r(),style:{animationDelay:s[6]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-orange-500 pl-4 mb-4",children:"⚠️ Common Pitfalls Leading to Leaks"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200 bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Missing free in error paths:"})," When a function returns early, the allocated memory may not be freed."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Overwriting pointer before free:"})," ",e.jsx("code",{children:"ptr = malloc(...); ptr = another;"})," loses the original block."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not freeing nested structures:"})," For linked lists, freeing only the head leaves all nodes leaked."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Returning without freeing:"})," Forgetting to free in a function that allocated but didn't return the pointer."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Using ",e.jsx("code",{children:"realloc"})," incorrectly:"]})," If ",e.jsx("code",{children:"realloc"})," fails and you lose the original pointer."]})]})]}),e.jsxs("section",{className:r(),style:{animationDelay:s[7]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-4 mb-4",children:"✅ Best Practices to Avoid Leaks"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{children:"✔️ Always pair allocation and deallocation in the same scope when possible."}),e.jsxs("li",{children:["✔️ Use the ",e.jsx("code",{children:"goto cleanup"})," pattern to ensure freeing in all branches."]}),e.jsxs("li",{children:["✔️ For structures with nested allocations, write a dedicated ",e.jsx("code",{children:"destroy"})," function that recursively frees."]}),e.jsxs("li",{children:["✔️ Set pointers to ",e.jsx("code",{children:"NULL"})," after freeing to avoid accidental reuse."]}),e.jsx("li",{children:"✔️ Regularly run your code under Valgrind or ASan, especially during development."}),e.jsx("li",{children:"✔️ Use static analysis tools to catch leaks early."})]})})]}),e.jsxs("section",{className:r(),style:{animationDelay:s[8]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-4 mb-4",children:"📋 Mini Checklist"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:e.jsxs("ul",{className:"space-y-1",children:[e.jsx("li",{children:"☐ I can define a memory leak and explain why it's harmful."}),e.jsx("li",{children:"☐ I know at least three techniques to detect leaks."}),e.jsx("li",{children:"☐ I use Valgrind or AddressSanitizer regularly."}),e.jsxs("li",{children:["☐ I ensure every ",e.jsx("code",{children:"malloc"})," has a matching ",e.jsx("code",{children:"free"})," in all code paths."]}),e.jsx("li",{children:"☐ I check for leaks in error handling code."})]})})]}),e.jsxs("section",{className:r(),style:{animationDelay:s[9]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4 mb-4",children:"💡 Hint Section"}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl",children:[e.jsx("p",{className:"italic",children:"Observe carefully..."}),e.jsxs("ul",{className:"list-disc list-inside mt-2",children:[e.jsxs("li",{children:["Run the leak example with Valgrind: ",e.jsx("code",{children:"valgrind --leak-check=full ./program"}),". What does it report?"]}),e.jsx("li",{children:"What happens if you run the fixed version? Does Valgrind still report any issues?"}),e.jsx("li",{children:"How would you modify the leak example to free the memory correctly?"})]})]})]}),e.jsxs("section",{className:r(),style:{animationDelay:s[10]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-4 mb-4",children:"🔧 Professional Tips & Tricks"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow space-y-2",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"🎯 Debugging mindset:"})," Integrate Valgrind into your CI pipeline to catch leaks before they reach production."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"📦 Lightweight tracking:"})," Wrap ",e.jsx("code",{children:"malloc"})," and ",e.jsx("code",{children:"free"})," with macros that increment/decrement counters; log them."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"🧹 In C++:"})," Use RAII (smart pointers) to automate deallocation and eliminate manual leaks."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"📏 For embedded systems:"})," Consider static allocation or pool allocators to avoid leaks entirely."]})]})]}),e.jsx(i,{note:"Memory leaks are like a leaky faucet — they waste resources and eventually cause problems. The best way to fight them is to be systematic: every allocation must have a matching free, and every code path (including errors) must be covered. Tools like Valgrind are your best friends. In exams, you'll often be asked to identify and fix leaks — practice with these examples!"})]})]})};export{k as default};
