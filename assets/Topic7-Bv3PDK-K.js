import{j as e}from"./index-CZ43a81g.js";import{T as a}from"./TeacherSukantaHui-GAsd2xdf.js";import{E as n}from"./EditableCCodeBlock-AjlbeKMS.js";import"./git-branch-D7OKREwa.js";import"./index-PEvkwhGW.js";import"./file-code-eIIiaVan.js";import"./type-BbvUXNU_.js";import"./refresh-cw-DzOvX6Wp.js";import"./copy-BjNRK02q.js";import"./download-CNCNpCMb.js";const o=`#include <stdio.h>\r
\r
int add(int a, int b) { return a + b; }\r
double divide(double x, double y) { return x / y; }\r
void sayHello(void) { printf("Hello!\\n"); }\r
\r
int main() {\r
    // Basic function pointer declarations\r
    int (*mathOp)(int, int);\r
    double (*divOp)(double, double);\r
    void (*greet)(void);\r
    \r
    // Assignments\r
    mathOp = add;            // function name decays to address\r
    divOp = divide;\r
    greet = sayHello;\r
    \r
    // Calls\r
    printf("5+3 = %d\\n", mathOp(5, 3));\r
    printf("10/4 = %f\\n", divOp(10.0, 4.0));\r
    greet();\r
    \r
    // Can also use & explicitly\r
    mathOp = &add;   // same effect\r
    printf("10+20 = %d\\n", mathOp(10, 20));\r
    \r
    return 0;\r
}`,d=`#include <stdio.h>\r
\r
// typedef for function pointer\r
typedef int (*Operation)(int, int);\r
typedef void (*Printer)(int);\r
\r
int add(int a, int b) { return a + b; }\r
int multiply(int a, int b) { return a * b; }\r
\r
void printResult(int res) { printf("Result: %d\\n", res); }\r
\r
// Function that takes a function pointer as parameter\r
void computeAndPrint(Operation op, int x, int y, Printer printer) {\r
    int result = op(x, y);\r
    printer(result);\r
}\r
\r
int main() {\r
    // Using the typedef\r
    Operation op = add;\r
    printf("add: %d\\n", op(5, 3));\r
    \r
    op = multiply;\r
    printf("multiply: %d\\n", op(5, 3));\r
    \r
    // Passing function pointers\r
    computeAndPrint(add, 10, 20, printResult);\r
    computeAndPrint(multiply, 10, 20, printResult);\r
    \r
    return 0;\r
}`,l=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
// Function that returns a pointer to int\r
int* makeInt(int value) {\r
    int* p = (int*)malloc(sizeof(int));\r
    *p = value;\r
    return p;\r
}\r
\r
// Function pointer to function returning int*\r
int* (*funcPtrToReturnPtr)(int) = makeInt;\r
\r
// Function that returns a function pointer\r
int add(int a, int b) { return a + b; }\r
int sub(int a, int b) { return a - b; }\r
\r
int (*getOperation(char op))(int, int) {\r
    if (op == '+') return add;\r
    if (op == '-') return sub;\r
    return NULL;\r
}\r
\r
// Function that takes a function pointer as parameter and returns a pointer to array\r
typedef int (*IntFunc)(int);\r
int* mapArray(int arr[], int n, IntFunc f) {\r
    int* result = (int*)malloc(n * sizeof(int));\r
    for (int i = 0; i < n; i++)\r
        result[i] = f(arr[i]);\r
    return result;\r
}\r
\r
int doubleIt(int x) { return x * 2; }\r
\r
int main() {\r
    // Using function pointer to function returning pointer\r
    int* p = funcPtrToReturnPtr(42);\r
    printf("*p = %d\\n", *p);\r
    free(p);\r
    \r
    // Using function returning function pointer\r
    int (*op)(int, int) = getOperation('+');\r
    if (op) printf("5+3 = %d\\n", op(5, 3));\r
    \r
    op = getOperation('-');\r
    if (op) printf("5-3 = %d\\n", op(5, 3));\r
    \r
    // Using map pattern\r
    int arr[] = {1, 2, 3, 4};\r
    int* doubled = mapArray(arr, 4, doubleIt);\r
    for (int i = 0; i < 4; i++) printf("%d ", doubled[i]);\r
    printf("\\n");\r
    free(doubled);\r
    \r
    return 0;\r
}`,b=()=>{const i=`
    @keyframes fadeSlideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @media (prefers-reduced-motion: reduce) {
      .animate-fadeSlideUp { animation: none !important; opacity: 1 !important; transform: none !important; }
    }
  `,s=[{q:"Why must the function pointer name be inside parentheses?",a:"Without parentheses, `int *func(int, int)` declares a function returning a pointer to int. Parentheses `int (*func)(int, int)` make `func` a pointer to a function."},{q:"What is the syntax for a function pointer that returns a pointer to int?",a:"`int *(*funcPtr)(int, int);` – `funcPtr` points to a function that takes two ints and returns `int*`."},{q:"How to declare a function pointer with no parameters and no return?",a:"`void (*funcPtr)(void);`"},{q:"Can I omit the parameter names in function pointer declaration?",a:"Yes, only types matter: `int (*funcPtr)(int, char)` is fine. Names are optional but helpful for documentation."},{q:"What does `typedef int (*Operation)(int, int);` do?",a:"Defines `Operation` as a type alias for 'pointer to function taking two ints and returning int'. Then `Operation addPtr = add;`"},{q:"How to declare a function pointer that takes another function pointer as parameter?",a:"`void register_callback(int (*cb)(void*), void* data);`"},{q:"Is `int (*funcPtr)()` different from `int (*funcPtr)(void)`?",a:"In C, `()` means unspecified parameters (old style), while `(void)` means no parameters. For safety, prefer `(void)`."},{q:"How to declare an array of 5 function pointers returning int and taking two doubles?",a:"`int (*arr[5])(double, double);`"},{q:"What is the return type of `sizeof` applied to a function pointer?",a:"Size of a function pointer (typically 8 bytes on 64-bit systems). Not the size of the function code."},{q:"How to declare a function pointer as a struct member?",a:"`struct { int (*op)(int, int); } calculator;`"},{q:"Can function pointers be const? Why?",a:"Yes: `int (* const funcPtr)(int) = &foo;` prevents reassignment. Useful for jump tables that shouldn't change."},{q:"What does `int (*(*complex)(int))[10];` declare?",a:"`complex` is a pointer to a function that takes an int and returns a pointer to an array of 10 ints."},{q:"How to declare a function that returns a function pointer?",a:"`int (*get_operation(char op))(int, int);` – `get_operation` takes a char and returns a function pointer."},{q:"Why use `typedef` for function pointers in callback APIs?",a:"Improves readability and reduces errors. Example: `typedef void (*EventCallback)(int event_code, void* user_data);`"},{q:"Can I use `auto` (C++11) to declare function pointers in C?",a:"No, `auto` in C means automatic storage duration, not type inference. C does not have `auto` type deduction."}];return e.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:[e.jsx("style",{children:i}),e.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8 space-y-12",children:[e.jsxs("div",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out]",children:[e.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent",children:"Topic 7: Function Pointers – Declaration & Syntax"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300",children:"Mastering the syntax of function pointers is the first step toward using callbacks, jump tables, and runtime dispatch. This topic breaks down every nuance of declaration, from simple to mind‑bending."})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.1s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-3",children:"The Anatomy of a Function Pointer Declaration"}),e.jsx("p",{className:"leading-relaxed",children:"A function pointer declaration consists of:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Return type"})," – what the pointed function returns."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Name in parentheses with a star"})," – ",e.jsx("code",{children:"(*ptrName)"})," – this is the pointer."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Parameter list"})," – types of arguments the function expects."]})]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded font-mono text-sm",children:[e.jsx("p",{className:"font-bold",children:"General form:"}),e.jsx("p",{className:"mt-1",children:"returnType (*pointerName)(paramType1, paramType2, ...);"}),e.jsx("p",{className:"mt-2 font-bold",children:"Example:"}),e.jsx("p",{children:"int (*mathOp)(int, int);   // mathOp points to a function taking two ints and returning int"})]}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded",children:e.jsxs("p",{children:["⚠️ ",e.jsx("strong",{children:"Remember:"})," The parentheses around ",e.jsx("code",{children:"*pointerName"})," are mandatory. Without them, you get a function returning a pointer."]})})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.2s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-3",children:"Example 1: Basic Declarations & Assignments"}),e.jsx(n,{title:"Various function pointer declarations",initialCode:o})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.3s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-3",children:"Using typedef to Simplify Complex Syntax"}),e.jsxs("p",{children:[e.jsx("code",{children:"typedef"})," makes code more readable and maintainable, especially when the same function pointer type appears multiple times."]}),e.jsx(n,{title:"typedef with function pointers",initialCode:d})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.4s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-red-500 pl-3",children:"Complex Signatures: Pointers, Arrays, and Nesting"}),e.jsx("p",{children:"Function pointers can point to functions that return pointers, or take function pointers as parameters. Mastering these patterns unlocks advanced API design."}),e.jsx(n,{title:"Complex function pointer signatures",initialCode:l})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.5s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-teal-500 pl-3",children:"💎 Professional Tips & Tricks"}),e.jsxs("ul",{className:"space-y-2 list-disc pl-6",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Read declarations from the inside out:"})," Start with the pointer name, then go right (parameters), then left (return type)."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"typedef"})," for every function pointer type in a public API."]})," It saves users from looking up syntax."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Name typedefs with ",e.jsx("code",{children:"_fn"})," or ",e.jsx("code",{children:"_callback"})," suffix:"]})," e.g., ",e.jsx("code",{children:"CompareFn"}),", ",e.jsx("code",{children:"EventHandler"}),"."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["When in doubt, use a tool like ",e.jsx("code",{children:"cdecl"})]})," (online or command line) to decode complex declarations."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"For function pointers returning pointers to arrays:"})," Prefer typedefs for each level – your sanity will thank you."]}),e.jsx("li",{children:e.jsxs("strong",{children:["In embedded systems, declare function pointers as ",e.jsx("code",{children:"const"})," when they point to fixed jump tables to save RAM."]})})]})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.6s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-3",children:"✅ Best Practices for Declarations"}),e.jsxs("ul",{className:"space-y-2 list-disc pl-6",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Always initialize function pointers to NULL"})," – prevents accidental calls to garbage addresses."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"typedef"})," even for simple signatures"]})," – it improves consistency across your codebase."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Explicitly write ",e.jsx("code",{children:"void"})," for no parameters"]})," – ",e.jsx("code",{children:"void (*func)(void)"})," instead of ",e.jsx("code",{children:"void (*func)()"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Keep parameter names in declarations when they add meaning"})," – they are ignored by the compiler but help documentation."]}),e.jsx("li",{children:e.jsxs("strong",{children:["If a function pointer is part of a struct, consider making it ",e.jsx("code",{children:"const"})," after initialization."]})})]})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.7s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-pink-500 pl-3",children:"🚫 Common Mistakes & Misconceptions"}),e.jsxs("ul",{className:"space-y-2 list-disc pl-6",children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Missing parentheses around ",e.jsx("code",{children:"*pointerName"})]})," – changes meaning to function returning pointer."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Using ",e.jsx("code",{children:"typedef"})," without naming the pointer type"]})," – wrong: ",e.jsx("code",{children:"typedef int (*)(int, int);"})," correct: ",e.jsx("code",{children:"typedef int (*Op)(int, int);"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Confusing function pointer with function prototype"})," – a prototype declares a function; a pointer stores its address."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming function pointers are the same as data pointers"})," – they are not interchangeable in all contexts (e.g., you can't cast ",e.jsx("code",{children:"void*"})," to function pointer in standard C, though POSIX allows it)."]}),e.jsx("li",{children:e.jsxs("strong",{children:["Forgetting that ",e.jsx("code",{children:"auto"})," doesn't work for type inference in C."]})})]})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.8s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-orange-500 pl-3",children:"❓ Frequently Asked Questions (15)"}),e.jsx("div",{className:"space-y-4",children:s.map((t,r)=>e.jsxs("div",{className:"border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:bg-gray-50 dark:hover:bg-gray-800",children:[e.jsxs("p",{className:"font-semibold text-purple-600 dark:text-purple-400",children:["Q",r+1,": ",t.q]}),e.jsx("p",{className:"mt-2 text-gray-700 dark:text-gray-300",children:t.a})]},r))})]}),e.jsx("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.9s]",children:e.jsx(a,{note:"When I teach function pointer syntax at Barrackpore CNAT, I use the 'spiral rule' or 'right-left rule' for reading declarations. Start at the identifier, go right to parameters, then left to return type. For example: `int (*(*complex)(int))[10];` – start at `complex`: go right → `(int)` so it's a function taking int, then left → `*` so it returns a pointer, then right again → `[10]` so that pointer points to array of 10, then left → `int` so array of ints. Practice with `cdecl` tool. Also, remember: typedef is your friend. If a declaration hurts your head, typedef it."})}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-6 rounded-xl animate-[fadeSlideUp_0.6s_ease-out_1s]",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"📋 Mini Checklist – Declaration Syntax"}),e.jsxs("ul",{className:"space-y-2 list-checkmark pl-5",children:[e.jsxs("li",{children:["✅ Basic form: ",e.jsx("code",{children:"returnType (*ptrName)(params);"})]}),e.jsxs("li",{children:["✅ Parentheses around ",e.jsx("code",{children:"*ptrName"})," are required."]}),e.jsxs("li",{children:["✅ Use ",e.jsx("code",{children:"typedef"})," to create aliases for function pointer types."]}),e.jsxs("li",{children:["✅ For no parameters, write ",e.jsx("code",{children:"(void)"})," not just ",e.jsx("code",{children:"()"}),"."]}),e.jsxs("li",{children:["✅ Arrays of function pointers: ",e.jsx("code",{children:"returnType (*arr[size])(params);"})]}),e.jsxs("li",{children:["✅ Function returning function pointer: ",e.jsx("code",{children:"returnType (*func(params))(params2);"})]}),e.jsxs("li",{children:["✅ Use ",e.jsx("code",{children:"const"})," to make the pointer itself constant: ",e.jsx("code",{children:"int (* const ptr)(int) = &func;"})]}),e.jsxs("li",{children:["✅ Read complex declarations inside-out or use ",e.jsx("code",{children:"cdecl"}),"."]})]})]})]})]})};export{b as default};
