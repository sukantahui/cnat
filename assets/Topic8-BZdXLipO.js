import{j as e}from"./index-BxcHuftT.js";import{T as a}from"./TeacherSukantaHui-Chf8FG88.js";import{E as n}from"./EditableCCodeBlock-5_NluTw3.js";import"./git-branch-CKwoe3RO.js";import"./index-lfB80H_P.js";import"./file-code-B8psrjkP.js";import"./type-Bf3hrOjC.js";import"./refresh-cw-CeFmYcFg.js";import"./copy-BD9CH8Pb.js";import"./download-Dvp1OFwY.js";const o=`#include <stdio.h>\r
\r
int add(int a, int b) {\r
    return a + b;\r
}\r
\r
int main() {\r
    int (*funcPtr)(int, int) = add;\r
    \r
    // Method 1: Explicit dereference\r
    int result1 = (*funcPtr)(5, 3);\r
    printf("(*funcPtr)(5,3) = %d\\n", result1);\r
    \r
    // Method 2: Implicit dereference (syntactic sugar)\r
    int result2 = funcPtr(5, 3);\r
    printf("funcPtr(5,3) = %d\\n", result2);\r
    \r
    // Both produce the same output\r
    return 0;\r
}`,l=`#include <stdio.h>\r
\r
int multiply(int a, int b) { return a * b; }\r
int add(int a, int b) { return a + b; }\r
\r
int main() {\r
    int (*ptr)(int, int) = multiply;\r
    \r
    // Direct call\r
    printf("Direct: multiply(4,5) = %d\\n", multiply(4,5));\r
    \r
    // Pointer call\r
    printf("Pointer: ptr(4,5) = %d\\n", ptr(4,5));\r
    \r
    // Array of function pointers\r
    int (*ops[2])(int, int) = {multiply, add};\r
    printf("ops[0](6,7) = %d (multiply)\\n", ops[0](6,7));\r
    printf("ops[1](6,7) = %d (add)\\n", ops[1](6,7));\r
    \r
    return 0;\r
}`,c=`#include <stdio.h>\r
\r
void greetMorning(void) {\r
    printf("Good morning!\\n");\r
}\r
\r
void greetEvening(void) {\r
    printf("Good evening!\\n");\r
}\r
\r
int main() {\r
    void (*greet)(void) = NULL;\r
    \r
    // Don't call without checking\r
    // greet(); // would crash\r
    \r
    // Check before call\r
    if (greet) {\r
        greet();\r
    } else {\r
        printf("No greet function set.\\n");\r
    }\r
    \r
    // Assign and call safely\r
    greet = greetMorning;\r
    if (greet) greet();\r
    \r
    greet = greetEvening;\r
    if (greet) greet();\r
    \r
    // Reset to NULL\r
    greet = NULL;\r
    if (greet) greet(); // skipped\r
    else printf("Again, no function.\\n");\r
    \r
    return 0;\r
}`,b=()=>{const s=`
    @keyframes fadeSlideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @media (prefers-reduced-motion: reduce) {
      .animate-fadeSlideUp { animation: none !important; opacity: 1 !important; transform: none !important; }
    }
  `,i=[{q:"What are the two syntaxes for calling a function via pointer?",a:"`(*funcPtr)(args)` and `funcPtr(args)`. The latter is simpler and works in modern C, but the former explicitly shows dereferencing."},{q:"Is `funcPtr(args)` equivalent to `(*funcPtr)(args)`?",a:"Yes, the standard allows `funcPtr(args)` as syntactic sugar. Both call the function pointed to by `funcPtr`."},{q:"What happens if you call a NULL function pointer?",a:"Undefined behavior – usually a segmentation fault. Always check for NULL before calling."},{q:"Can you use `->` with function pointers stored in structs?",a:"Yes, if a struct has a function pointer member, you call it as `structPtr->funcPtr(args)` or `(*structPtr).funcPtr(args)`."},{q:"How do you call a function pointer that takes no arguments and returns void?",a:"`funcPtr();` or `(*funcPtr)();`"},{q:"Is there a performance difference between direct call and call via pointer?",a:"Indirect calls may have a small overhead due to the extra indirection, but it's usually negligible. The compiler may inline direct calls but cannot inline through a pointer unless it knows the target."},{q:"Can you call a function pointer with the wrong number of arguments?",a:"It will compile but cause undefined behavior (stack corruption, wrong arguments passed). The signature must match exactly."},{q:"How do you call a function that returns a function pointer?",a:"`int (*result)(int, int) = getOp('+')(5, 3);` Actually, you need two steps: first get the function pointer, then call it."},{q:"What does `(****funcPtr)(args)` do?",a:"It dereferences the function pointer multiple times. In C, dereferencing a function pointer multiple times still yields the same function pointer, so it works but is pointless."},{q:"Can you use a function pointer in a conditional expression and then call it?",a:"Yes: `if (funcPtr) funcPtr(args);` – safe pattern."},{q:"How do you call a function pointer that is an element of an array?",a:"`funcArray[index](args);` or `(*funcArray[index])(args);`"},{q:"What is the difference between `funcPtr` and `&funcPtr` when calling?",a:"`funcPtr` is the function pointer; `&funcPtr` is the address of the function pointer variable, not the function. Calling `(&funcPtr)(args)` is wrong."},{q:"Can you cast a function pointer to another type and call it?",a:"Technically possible but dangerous. It bypasses type safety and can crash. Only do it if you absolutely know the calling convention and layout match."},{q:"How does `qsort` call the comparator function pointer?",a:"`qsort` internally does something like `cmp(base+i*size, base+j*size)`, where `cmp` is the function pointer passed to it."},{q:"Why would you ever use `(*funcPtr)(args)` over `funcPtr(args)`?",a:"Some coding standards prefer the explicit dereference to emphasize that a pointer is being used. Also, in very old compilers, the simpler form might not be supported."}];return e.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:[e.jsx("style",{children:s}),e.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8 space-y-12",children:[e.jsxs("div",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out]",children:[e.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent",children:"Topic 8: Calling Functions Using Pointers"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300",children:"Once you have a function pointer, calling the function is straightforward – but there are nuances. This topic covers syntax, safety, performance, and common patterns for indirect function calls."})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.1s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-3",children:"Calling a Function Through a Pointer"}),e.jsx("p",{className:"leading-relaxed",children:"There are two equivalent syntaxes to call a function via a pointer:"}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded font-mono text-sm space-y-2",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Syntax 1 (explicit dereference):"})," ",e.jsx("code",{children:"(*funcPtr)(arg1, arg2);"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Syntax 2 (simpler, modern):"})," ",e.jsx("code",{children:"funcPtr(arg1, arg2);"})]})]}),e.jsxs("p",{children:["Both are valid in C99 and later. The second form is more common because it reads like a normal function call and the pointer is automatically dereferenced by the function call operator ",e.jsx("code",{children:"()"}),"."]}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded",children:e.jsxs("p",{children:["⚠️ ",e.jsx("strong",{children:"Key safety rule:"})," Never call a function pointer that is NULL. Always check: ",e.jsx("code",{children:"if (funcPtr) funcPtr(args);"})]})})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.2s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-3",children:"Example 1: Basic Calling Syntax"}),e.jsx(n,{title:"Comparing the two calling syntaxes",initialCode:o})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.3s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-3",children:"Example 2: Direct Call vs Pointer Call"}),e.jsx("p",{children:"Illustrates that both syntaxes produce the same result, and shows how to call functions stored in arrays or structs."}),e.jsx(n,{title:"Direct call vs pointer call comparison",initialCode:l})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.4s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-red-500 pl-3",children:"Example 3: Conditional Calls & NULL Checks"}),e.jsx("p",{children:"Always validate function pointers before calling, especially when they come from external sources or optional features."}),e.jsx(n,{title:"Safe conditional calls",initialCode:c})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.5s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-teal-500 pl-3",children:"💎 Professional Tips & Tricks"}),e.jsxs("ul",{className:"space-y-2 list-disc pl-6",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Always check for NULL before calling."})," A crash from a NULL function pointer is hard to debug because the call stack may not show where the pointer was set."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Use the simpler ",e.jsx("code",{children:"funcPtr(args)"})," syntax"]})," – it's cleaner and widely supported."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"If you need to call a function pointer many times in a loop, store it in a local variable"})," to avoid repeated global/struct accesses (micro-optimization)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"For callback-heavy APIs, consider providing a default function"})," that does nothing or returns an error, so callers can rely on a non-NULL pointer."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"When debugging, print the function pointer address"})," to see which function will be called."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"In embedded systems, function pointers can be placed in RAM to allow runtime updates"})," (e.g., firmware patches)."]})]})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.6s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-3",children:"✅ Best Practices for Calling"}),e.jsxs("ul",{className:"space-y-2 list-disc pl-6",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Initialize function pointers to NULL"})," and check before call."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use consistent calling style across your codebase"})," – choose either explicit or implicit dereference and stick to it."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Document whether a function pointer parameter can be NULL"})," and what happens if it is."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"For performance-critical code, consider that indirect calls inhibit inlining"})," – if the target is known at compile time, use direct calls."]}),e.jsx("li",{children:e.jsxs("strong",{children:["When calling through a pointer to a function that never changes, make it ",e.jsx("code",{children:"const"})," to prevent accidental reassignment."]})})]})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.7s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-pink-500 pl-3",children:"🚫 Common Mistakes & Misconceptions"}),e.jsxs("ul",{className:"space-y-2 list-disc pl-6",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Calling without checking NULL"})," – leads to segmentation fault."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Using ",e.jsx("code",{children:"&funcPtr(args)"})," instead of ",e.jsx("code",{children:"funcPtr(args)"})]})," – taking address of result."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Forgetting parentheses around ",e.jsx("code",{children:"*funcPtr"})," when using explicit dereference"]})," – ",e.jsx("code",{children:"*funcPtr(args)"})," is wrong; need ",e.jsx("code",{children:"(*funcPtr)(args)"}),"."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Assuming function pointers are interchangeable with ",e.jsx("code",{children:"void*"})]})," – casting between them is not portable (though POSIX allows it)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Calling a function pointer with mismatched arguments"})," – the compiler may not warn if the pointer was cast, leading to stack corruption."]})]})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.8s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-orange-500 pl-3",children:"❓ Frequently Asked Questions (15)"}),e.jsx("div",{className:"space-y-4",children:i.map((t,r)=>e.jsxs("div",{className:"border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:bg-gray-50 dark:hover:bg-gray-800",children:[e.jsxs("p",{className:"font-semibold text-blue-600 dark:text-blue-400",children:["Q",r+1,": ",t.q]}),e.jsx("p",{className:"mt-2 text-gray-700 dark:text-gray-300",children:t.a})]},r))})]}),e.jsx("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.9s]",children:e.jsx(a,{note:"When I teach function pointer calls at Barrackpore CNAT, I use the analogy of a remote control. The pointer is the remote; pressing the button (calling) works the same regardless of which device (function) it points to. Students often ask: 'Why two syntaxes?' The simpler `ptr(args)` is like pressing the button directly; `(*ptr)(args)` is like picking up the remote and then pressing. Both achieve the same result. Always check for NULL – it's like checking if the remote has batteries before pressing."})}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-6 rounded-xl animate-[fadeSlideUp_0.6s_ease-out_1s]",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"📋 Mini Checklist – Calling Function Pointers"}),e.jsxs("ul",{className:"space-y-2 list-checkmark pl-5",children:[e.jsxs("li",{children:["✅ Two syntaxes: ",e.jsx("code",{children:"(*funcPtr)(args)"})," and ",e.jsx("code",{children:"funcPtr(args)"})]}),e.jsxs("li",{children:["✅ Always check for NULL before calling: ",e.jsx("code",{children:"if (funcPtr) funcPtr(args);"})]}),e.jsxs("li",{children:["✅ The simpler syntax ",e.jsx("code",{children:"funcPtr(args)"})," is preferred in modern code."]}),e.jsx("li",{children:"✅ Mismatched signatures cause undefined behavior – ensure exact match."}),e.jsx("li",{children:"✅ Indirect calls may have a small performance cost vs direct calls."}),e.jsxs("li",{children:["✅ Function pointers in arrays: ",e.jsx("code",{children:"funcArray[i](args);"})]}),e.jsxs("li",{children:["✅ In structs: ",e.jsx("code",{children:"structPtr-&gtfuncPtr(args);"})]}),e.jsx("li",{children:"✅ For safety, initialize all function pointers to NULL."})]})]})]})]})};export{b as default};
