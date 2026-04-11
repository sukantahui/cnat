import{j as e}from"./index-BxcHuftT.js";import{T as o}from"./TeacherSukantaHui-Chf8FG88.js";import{E as n}from"./EditableCCodeBlock-5_NluTw3.js";import"./git-branch-CKwoe3RO.js";import"./index-lfB80H_P.js";import"./file-code-B8psrjkP.js";import"./type-Bf3hrOjC.js";import"./refresh-cw-CeFmYcFg.js";import"./copy-BD9CH8Pb.js";import"./download-Dvp1OFwY.js";const a=`#include <stdio.h>\r
\r
int main() {\r
    int a = 42;\r
    double b = 3.14;\r
    \r
    void *ptr;\r
    \r
    // Point to integer\r
    ptr = &a;\r
    printf("Value via void*: %d\\n", *(int*)ptr);  // cast to int*\r
    \r
    // Point to double\r
    ptr = &b;\r
    printf("Value via void*: %f\\n", *(double*)ptr);  // cast to double*\r
    \r
    // Cannot do: *ptr (error: incomplete type)\r
    // Cannot do: ptr++ (not standard)\r
    \r
    return 0;\r
}`,d=`#include <stdio.h>\r
#include <string.h>\r
\r
// Generic swap: swaps any two objects of equal size\r
void generic_swap(void *a, void *b, size_t size) {\r
    char temp[size];\r
    memcpy(temp, a, size);\r
    memcpy(a, b, size);\r
    memcpy(b, temp, size);\r
}\r
\r
int main() {\r
    int x = 10, y = 20;\r
    printf("Before swap: x=%d, y=%d\\n", x, y);\r
    generic_swap(&x, &y, sizeof(int));\r
    printf("After swap: x=%d, y=%d\\n", x, y);\r
    \r
    double p = 1.23, q = 4.56;\r
    printf("Before swap: p=%f, q=%f\\n", p, q);\r
    generic_swap(&p, &q, sizeof(double));\r
    printf("After swap: p=%f, q=%f\\n", p, q);\r
    \r
    return 0;\r
}`,c=`#include <stdio.h>\r
\r
typedef enum { TYPE_INT, TYPE_DOUBLE, TYPE_STRING } DataType;\r
\r
void print_value(void *ptr, DataType type) {\r
    switch (type) {\r
        case TYPE_INT:\r
            printf("%d\\n", *(int*)ptr);\r
            break;\r
        case TYPE_DOUBLE:\r
            printf("%f\\n", *(double*)ptr);\r
            break;\r
        case TYPE_STRING:\r
            printf("%s\\n", (char*)ptr);\r
            break;\r
        default:\r
            printf("Unknown type\\n");\r
    }\r
}\r
\r
int main() {\r
    int a = 100;\r
    double b = 99.99;\r
    char *c = "Hello, void pointers!";\r
    \r
    print_value(&a, TYPE_INT);\r
    print_value(&b, TYPE_DOUBLE);\r
    print_value(c, TYPE_STRING);\r
    \r
    return 0;\r
}`,b=()=>{const r=`
    @keyframes fadeSlideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @media (prefers-reduced-motion: reduce) {
      .animate-fadeSlideUp { animation: none !important; opacity: 1 !important; transform: none !important; }
    }
  `,s=[{q:"What is a void pointer (`void*`) in C?",a:"A void pointer is a generic pointer that can point to any data type, but cannot be dereferenced directly without casting."},{q:"Why use void pointers instead of a specific type?",a:"They enable generic programming: functions like `memcpy`, `qsort`, and `malloc` use `void*` to work with any data type."},{q:"Can you perform pointer arithmetic on a void pointer?",a:"In standard C, no – because the size of `void` is unknown. Some compilers allow it as an extension (treating it as `char*`)."},{q:"How do you dereference a void pointer?",a:"You must cast it to a concrete pointer type first: `*(int*)voidPtr`."},{q:"What is the size of a void pointer?",a:"Same as any other pointer – typically 8 bytes on 64-bit systems, 4 bytes on 32-bit."},{q:"Can a void pointer point to a function?",a:"Not portably. Function pointers and data pointers may have different sizes on some architectures. Use explicit function pointer types."},{q:"Is `void*` the same as `char*`?",a:"No. `char*` points to a character and can be dereferenced; `void*` cannot be dereferenced without casting."},{q:"How does `malloc` use void pointer?",a:"`malloc` returns `void*` because it allocates raw memory that can be used for any type. You cast the result to your desired pointer type."},{q:"Can you assign any pointer type to a void pointer?",a:"Yes, implicitly. Conversion from any object pointer to `void*` is automatic in C."},{q:"Can you assign a void pointer to another pointer type without cast?",a:"In C, yes – but it's dangerous. In C++, you need an explicit cast. For safety, use explicit cast even in C."},{q:"What happens if you cast a void pointer to the wrong type and dereference?",a:"Undefined behavior – may read wrong bytes, cause alignment issues, or crash."},{q:"How do you compare two void pointers?",a:"You can compare them directly (they are addresses). But to compare the values they point to, you must cast to appropriate types first."},{q:"Why do standard library functions like `qsort` use `void*` parameters?",a:"To be generic. `qsort` doesn't know the element type, so it uses `void*` for the array base and comparator parameters."},{q:"Can a void pointer be NULL?",a:"Yes, `void *ptr = NULL;` is valid and common."},{q:"What is the difference between `void*` and `void`?",a:"`void*` is a pointer to unknown type. `void` alone means 'no type' – used for functions that return nothing."}];return e.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:[e.jsx("style",{children:r}),e.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8 space-y-12",children:[e.jsxs("div",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out]",children:[e.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-gray-600 to-slate-600 bg-clip-text text-transparent",children:"Topic 12: Void Pointers (Generic Pointers)"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300",children:"Void pointers are C's way of saying \"pointer to something, but I don't know what\". They are the foundation of generic functions like `malloc`, `memcpy`, and `qsort`. Mastering them is essential for systems programming."})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.1s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-gray-500 pl-3",children:"What is a Void Pointer?"}),e.jsxs("p",{children:["A void pointer (",e.jsx("code",{children:"void*"}),") is a pointer that has no associated type. It can hold the address of any data object, but you cannot dereference it directly because the compiler doesn't know the size or type of the data it points to."]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded font-mono text-sm",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Declaration:"})," ",e.jsx("code",{children:"void *ptr;"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Assignment:"})," ",e.jsx("code",{children:"ptr = &some_int;"})," or ",e.jsx("code",{children:"ptr = malloc(100);"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Dereference:"})," ",e.jsx("code",{children:"int value = *(int*)ptr;"})," (cast before dereference)"]})]}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded",children:e.jsxs("p",{children:["⚠️ ",e.jsx("strong",{children:"Key rule:"})," You cannot do pointer arithmetic on ",e.jsx("code",{children:"void*"})," in standard C (GCC allows it as an extension, treating it as ",e.jsx("code",{children:"char*"}),"). Always cast to ",e.jsx("code",{children:"char*"})," for byte-wise operations."]})})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.2s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-3",children:"Example 1: Basic Void Pointer Operations"}),e.jsx("p",{children:"Demonstrates assigning different pointer types to a void pointer and casting back to access data."}),e.jsx(n,{title:"Void pointer basics",initialCode:a})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.3s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-3",children:"Example 2: Generic Swap Using Void Pointers"}),e.jsxs("p",{children:["A classic example: a swap function that works with any data type by using ",e.jsx("code",{children:"void*"})," and byte-by-byte copying."]}),e.jsx(n,{title:"Generic swap function",initialCode:d})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.4s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-3",children:"Example 3: Printing Any Type (with type tag)"}),e.jsxs("p",{children:["A function that prints a value of any type by using a ",e.jsx("code",{children:"void*"})," and a type identifier (enum)."]}),e.jsx(n,{title:"Type-aware print function",initialCode:c})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.5s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-teal-500 pl-3",children:"💎 Professional Tips & Tricks"}),e.jsxs("ul",{className:"space-y-2 list-disc pl-6",children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Always cast ",e.jsx("code",{children:"void*"})," to a concrete type before dereferencing"]})," – never dereference directly."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["For pointer arithmetic, cast to ",e.jsx("code",{children:"char*"})]})," because ",e.jsx("code",{children:"sizeof(char)==1"}),", giving byte-level addressing."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"void*"})," to implement opaque pointers in C APIs"]})," – hide implementation details from the user."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"When writing generic functions, also pass the size of the data type"})," (like ",e.jsx("code",{children:"memcpy"})," and ",e.jsx("code",{children:"qsort"})," do)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Be careful with alignment"})," – casting a ",e.jsx("code",{children:"void*"})," to a type with stricter alignment requirements can cause crashes on some architectures."]})]})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.6s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-3",children:"✅ Best Practices for Void Pointers"}),e.jsxs("ul",{className:"space-y-2 list-disc pl-6",children:[e.jsx("li",{children:e.jsxs("strong",{children:["Always initialize ",e.jsx("code",{children:"void*"})," to NULL if not immediately assigned."]})}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Use explicit casts when assigning from ",e.jsx("code",{children:"void*"})," to a typed pointer"]})," – improves readability and helps catch errors."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Document what type a ",e.jsx("code",{children:"void*"})," is expected to point to"]})," – especially in function parameters."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Prefer ",e.jsx("code",{children:"void*"})," over ",e.jsx("code",{children:"char*"})," for generic data when type is unknown"]})," – it's more semantically correct."]}),e.jsx("li",{children:e.jsxs("strong",{children:["When implementing a generic container, store both a ",e.jsx("code",{children:"void*"})," to data and a function pointer for destruction."]})})]})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.7s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-pink-500 pl-3",children:"🚫 Common Mistakes & Misconceptions"}),e.jsxs("ul",{className:"space-y-2 list-disc pl-6",children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Dereferencing a ",e.jsx("code",{children:"void*"})," without casting"]}),' – compiler error: "incomplete type".']}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Performing pointer arithmetic on ",e.jsx("code",{children:"void*"})]})," – not standard C; use ",e.jsx("code",{children:"char*"})," instead."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Casting ",e.jsx("code",{children:"void*"})," to the wrong type"]})," – leads to reading wrong bytes or alignment faults."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Assuming ",e.jsx("code",{children:"void*"})," and function pointers are compatible"]})," – not portable; use function pointer types."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Forgetting that ",e.jsx("code",{children:"void*"})," loses type information"]})," – you must carry the type info separately (e.g., an enum or size)."]})]})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.8s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-orange-500 pl-3",children:"❓ Frequently Asked Questions (15)"}),e.jsx("div",{className:"space-y-4",children:s.map((t,i)=>e.jsxs("div",{className:"border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:bg-gray-50 dark:hover:bg-gray-800",children:[e.jsxs("p",{className:"font-semibold text-gray-600 dark:text-gray-400",children:["Q",i+1,": ",t.q]}),e.jsx("p",{className:"mt-2 text-gray-700 dark:text-gray-300",children:t.a})]},i))})]}),e.jsx("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.9s]",children:e.jsx(o,{note:"At Barrackpore CNAT, I call void pointers 'generic handles' – they can point to anything, but you need to know what they point to before you can use them. Think of them as a universal socket: you can plug any tool (type) into it, but to actually turn it, you need the right adapter (cast). The standard library functions like `memcpy`, `malloc`, and `qsort` all rely on void pointers. When you write generic code, always pass the size of the data along with the void pointer – that's the professional pattern."})}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-6 rounded-xl animate-[fadeSlideUp_0.6s_ease-out_1s]",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"📋 Mini Checklist – Void Pointers"}),e.jsxs("ul",{className:"space-y-2 list-checkmark pl-5",children:[e.jsxs("li",{children:["✅ Declaration: ",e.jsx("code",{children:"void *ptr;"})]}),e.jsxs("li",{children:["✅ Can point to any data type: ",e.jsx("code",{children:"ptr = &int_var;"})," or ",e.jsx("code",{children:"ptr = malloc(n);"})]}),e.jsxs("li",{children:["✅ Cannot dereference without casting: ",e.jsx("code",{children:"int x = *(int*)ptr;"})]}),e.jsxs("li",{children:["✅ No pointer arithmetic in standard C – cast to ",e.jsx("code",{children:"char*"})," first."]}),e.jsxs("li",{children:["✅ Used in generic functions: ",e.jsx("code",{children:"memcpy"}),", ",e.jsx("code",{children:"qsort"}),", ",e.jsx("code",{children:"malloc"}),", ",e.jsx("code",{children:"free"}),"."]}),e.jsx("li",{children:"✅ Loses type information – carry type info separately."}),e.jsx("li",{children:"✅ Always cast back to correct type before access."}),e.jsxs("li",{children:["✅ Never cast a function pointer to ",e.jsx("code",{children:"void*"})," (not portable)."]})]})]})]})]})};export{b as default};
