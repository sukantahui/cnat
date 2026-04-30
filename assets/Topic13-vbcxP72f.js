import{j as e}from"./index-sRNy85CP.js";import{T as s}from"./TeacherSukantaHui-BwdTrUd-.js";import{E as r}from"./EditableCCodeBlock-fz94pTeQ.js";import"./git-branch-Al-7J7-z.js";import"./index-7n4CaZPm.js";import"./file-code-DMLUJpKI.js";import"./type-D4P2k3xa.js";import"./refresh-cw-DnRLB-ho.js";import"./copy-DVtYfKkO.js";import"./download-K3JAF1JL.js";const o=`#include <stdio.h>\r
\r
// Separate max functions for each type\r
int max_int(int a, int b) { return a > b ? a : b; }\r
double max_double(double a, double b) { return a > b ? a : b; }\r
char* max_string(char* a, char* b) { return strcmp(a, b) > 0 ? a : b; }\r
\r
int main() {\r
    printf("max int: %d\\n", max_int(5, 3));\r
    printf("max double: %f\\n", max_double(3.14, 2.71));\r
    printf("max string: %s\\n", max_string("apple", "banana"));\r
    // What if we need max for a struct? Write another function...\r
    return 0;\r
}`,c=`#include <stdio.h>\r
#include <string.h>\r
\r
// Comparator: returns negative if a<b, zero if equal, positive if a>b\r
typedef int (*Compare)(const void*, const void*);\r
\r
// Generic max: returns pointer to larger element\r
void* generic_max(void* a, void* b, Compare cmp) {\r
    return cmp(a, b) > 0 ? a : b;\r
}\r
\r
// Comparators for different types\r
int cmp_int(const void* a, const void* b) {\r
    return *(int*)a - *(int*)b;\r
}\r
int cmp_double(const void* a, const void* b) {\r
    double diff = *(double*)a - *(double*)b;\r
    return (diff > 0) ? 1 : (diff < 0) ? -1 : 0;\r
}\r
int cmp_string(const void* a, const void* b) {\r
    return strcmp(*(char**)a, *(char**)b);\r
}\r
\r
int main() {\r
    int x = 10, y = 20;\r
    int* max_int = generic_max(&x, &y, cmp_int);\r
    printf("Max int: %d\\n", *max_int);\r
    \r
    double p = 3.14, q = 2.71;\r
    double* max_dbl = generic_max(&p, &q, cmp_double);\r
    printf("Max double: %f\\n", *max_dbl);\r
    \r
    char* s1 = "zebra", *s2 = "apple";\r
    char** max_str = generic_max(&s1, &s2, cmp_string);\r
    printf("Max string: %s\\n", *max_str);\r
    \r
    return 0;\r
}`,l=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <string.h>\r
\r
// Generic dynamic array storing void* elements\r
typedef struct {\r
    void** data;\r
    size_t size;\r
    size_t capacity;\r
} GenericArray;\r
\r
GenericArray* array_create() {\r
    GenericArray* arr = malloc(sizeof(GenericArray));\r
    arr->size = 0;\r
    arr->capacity = 4;\r
    arr->data = malloc(arr->capacity * sizeof(void*));\r
    return arr;\r
}\r
\r
void array_push(GenericArray* arr, void* elem) {\r
    if (arr->size == arr->capacity) {\r
        arr->capacity *= 2;\r
        arr->data = realloc(arr->data, arr->capacity * sizeof(void*));\r
    }\r
    arr->data[arr->size++] = elem;\r
}\r
\r
void* array_get(GenericArray* arr, size_t index) {\r
    if (index < arr->size) return arr->data[index];\r
    return NULL;\r
}\r
\r
void array_free(GenericArray* arr, void (*free_elem)(void*)) {\r
    if (free_elem) {\r
        for (size_t i = 0; i < arr->size; i++)\r
            free_elem(arr->data[i]);\r
    }\r
    free(arr->data);\r
    free(arr);\r
}\r
\r
int main() {\r
    GenericArray* arr = array_create();\r
    \r
    // Store integers (heap allocated)\r
    int* pi = malloc(sizeof(int)); *pi = 42;\r
    array_push(arr, pi);\r
    pi = malloc(sizeof(int)); *pi = 100;\r
    array_push(arr, pi);\r
    \r
    // Store a string (literal, no free needed)\r
    array_push(arr, "Hello generic");\r
    \r
    printf("Element 0: %d\\n", *(int*)array_get(arr, 0));\r
    printf("Element 1: %d\\n", *(int*)array_get(arr, 1));\r
    printf("Element 2: %s\\n", (char*)array_get(arr, 2));\r
    \r
    // Free with custom destructor for ints (but not for string literal)\r
    array_free(arr, free);\r
    return 0;\r
}`,j=()=>{const i=`
    @keyframes fadeSlideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @media (prefers-reduced-motion: reduce) {
      .animate-fadeSlideUp { animation: none !important; opacity: 1 !important; transform: none !important; }
    }
  `,t=[{q:"What is generic data handling?",a:"Writing code that works with any data type without modification, using techniques like void pointers, macros, or code generation."},{q:"Why does C need generic programming?",a:"C is statically typed and lacks templates. Without generic techniques, you'd need separate functions for int, float, char*, etc."},{q:"What's the problem with writing separate functions for each type?",a:"Code duplication, maintenance burden, and increased binary size. A change requires updating all versions."},{q:"How do void pointers enable generic functions?",a:"They can point to any data type, and by passing the size of the data, functions like `memcpy` work generically."},{q:"What is the role of `size_t` in generic functions?",a:"It tells the function how many bytes to operate on, allowing it to handle any type correctly."},{q:"What's a real-world example of generic handling in C?",a:"`qsort` works on any array type because it uses `void*` and a comparator callback that knows the actual type."},{q:"Can macros provide generic functionality?",a:"Yes, macros like `#define MAX(a,b) ((a)>(b)?(a):(b))` work for any type, but have limitations (multiple evaluation)."},{q:"What are the trade-offs of generic code in C?",a:"Pros: reusability, less code. Cons: type safety loss, potential performance overhead, more complex debugging."},{q:"How does C++ improve on C's generic capabilities?",a:"Templates provide type-safe generics at compile time without needing void pointers or manual size passing."},{q:"What is type erasure in C?",a:"Using `void*` to hide the actual type, but you lose type information and must recover it via casting or tags."},{q:"How do you create a generic dynamic array in C?",a:"Store `void*` elements, plus size and capacity. Each element is a pointer to allocated data."},{q:"Why do standard C functions like `bsearch` use generic interfaces?",a:"So they work with any data type without rewriting the search algorithm for each type."},{q:"What is the difference between compile-time and runtime generics?",a:"Compile-time (C++ templates) generate code per type; runtime (C void*) uses a single implementation with type parameters."},{q:"Can you have type-safe generics in C using `_Generic`?",a:"Yes, C11 introduced `_Generic` for type-selection at compile time, useful for macros that behave differently per type."},{q:"When should you avoid generic techniques in C?",a:"When performance is critical and types are known, or when type safety is paramount (e.g., security-sensitive code)."}];return e.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:[e.jsx("style",{children:i}),e.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8 space-y-12",children:[e.jsxs("div",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out]",children:[e.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent",children:"Topic 13: Concept and Need for Generic Data Handling"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300",children:"Generic programming allows writing algorithms and data structures that work with any data type. In C, which lacks templates, this is achieved primarily through void pointers, size parameters, and callbacks. This topic explains why generics are essential and how to implement them effectively."})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.1s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-cyan-500 pl-3",children:"The Problem: Static Typing Without Generics"}),e.jsx("p",{children:"C is a statically typed language: every variable has a fixed type known at compile time. Without generic techniques, writing a function that works for both integers and floating-point numbers would require duplicating code or using macros."}),e.jsx("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded",children:e.jsxs("p",{className:"font-mono text-sm",children:["// Without generics, you need separate functions:",e.jsx("br",{}),"int max_int(int a, int b) { return a > b ? a : b; }",e.jsx("br",{}),"double max_double(double a, double b) { return a > b ? a : b; }",e.jsx("br",{}),"// What about char*, structs, etc.?"]})}),e.jsxs("p",{children:["This leads to ",e.jsx("strong",{children:"code duplication, maintenance headaches, and larger binaries"}),". Generic programming solves this by writing the algorithm once, parameterized by type."]}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded",children:e.jsxs("p",{children:["💡 ",e.jsx("strong",{children:"Key insight:"}),' Generic code separates "what" (algorithm) from "what type" (data). The algorithm is expressed in terms of bytes, addresses, and operations provided by callbacks.']})})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.2s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-red-500 pl-3",children:"Example 1: The Pain of No Generics"}),e.jsx("p",{children:"Illustrates the repetitive code needed for simple algorithms without generics."}),e.jsx(r,{title:"Separate functions for each type",initialCode:o})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.3s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-3",children:"Example 2: Generic Max Using Void Pointers"}),e.jsx("p",{children:"A generic function that returns the maximum of two values of any type, using a comparison callback."}),e.jsx(r,{title:"Generic max with comparator",initialCode:c})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.4s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-3",children:"Example 3: Generic Container – Dynamic Array"}),e.jsx("p",{children:"A simple dynamic array that stores `void*` elements, demonstrating a reusable container."}),e.jsx(r,{title:"Generic dynamic array",initialCode:l})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.5s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-teal-500 pl-3",children:"💎 Professional Tips & Tricks"}),e.jsxs("ul",{className:"space-y-2 list-disc pl-6",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Use `_Generic` (C11) for type-safe macros"})," – e.g., `#define max(a,b) _Generic((a), int: max_int, double: max_double)(a,b)`."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Combine void pointers with function pointers"})," – comparators, destructors, and printers make containers truly generic."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"For performance-critical generics, consider code generation"})," – write a script that expands templates to C code."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Always pass the size of the element to generic functions"})," that copy or compare memory."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Document ownership and lifetime"})," – generic containers often store pointers; who frees the pointed data?"]})]})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.6s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-3",children:"✅ Best Practices for Generic Code"}),e.jsxs("ul",{className:"space-y-2 list-disc pl-6",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Use `void*` for generic data, but provide type-specific wrappers"})," for type safety at the call site."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Always include a `size` parameter when operating on unknown types"})," – essential for byte-level operations."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Prefer callbacks over assuming operations (like comparison) can be done with `memcmp`"})," – memcmp only works for simple types, not structs with pointers."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use `const void*` for read-only generic parameters"})," to indicate the data won't be modified."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Test generic code with various types"})," – including structs, pointers, and arrays."]})]})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.7s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-pink-500 pl-3",children:"🚫 Common Mistakes & Misconceptions"}),e.jsxs("ul",{className:"space-y-2 list-disc pl-6",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming all types can be compared with `memcmp`"})," – fails for floating-point NaNs and structs with padding."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to pass the size of the element"})," – leads to wrong byte counts and buffer overflows."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using `void*` for function pointers"})," – not portable; use explicit function pointer types."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not handling alignment in generic containers"})," – storing arbitrary types may require alignment considerations."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Overusing generics where specific code is simpler"})," – generics add complexity; use when reuse is substantial."]})]})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeSlideUp_0.6s_ease-out_0.8s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-orange-500 pl-3",children:"❓ Frequently Asked Questions (15)"}),e.jsx("div",{className:"space-y-4",children:t.map((a,n)=>e.jsxs("div",{className:"border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:bg-gray-50 dark:hover:bg-gray-800",children:[e.jsxs("p",{className:"font-semibold text-cyan-600 dark:text-cyan-400",children:["Q",n+1,": ",a.q]}),e.jsx("p",{className:"mt-2 text-gray-700 dark:text-gray-300",children:a.a})]},n))})]}),e.jsx("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.9s]",children:e.jsx(s,{note:"At Barrackpore CNAT, I emphasize that generic programming is about 'algorithm reuse'. Think of `qsort` – it doesn't care if you're sorting integers, strings, or student records (like Swadeep's test scores). The algorithm stays the same; only the comparison changes. This separation of concerns is powerful. However, with great power comes responsibility: generic code in C loses type safety. Always document what type the `void*` expects. For students, start by implementing a generic swap function – it's the 'Hello World' of generic C programming."})}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-6 rounded-xl animate-[fadeSlideUp_0.6s_ease-out_1s]",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"📋 Mini Checklist – Generic Data Handling"}),e.jsxs("ul",{className:"space-y-2 list-checkmark pl-5",children:[e.jsx("li",{children:"✅ Generic code works with any data type without duplication."}),e.jsx("li",{children:"✅ In C, use `void*`, size parameters, and callbacks for generics."}),e.jsx("li",{children:"✅ Standard examples: `qsort`, `bsearch`, `memcpy`, `malloc`."}),e.jsx("li",{children:"✅ Always pass element size when operating on unknown types."}),e.jsx("li",{children:"✅ Use comparator callbacks for order-dependent algorithms."}),e.jsx("li",{children:"✅ C11 `_Generic` provides compile-time type selection."}),e.jsx("li",{children:"✅ Generics trade type safety for reusability – use wisely."}),e.jsx("li",{children:"✅ Test generic code with multiple types (int, double, struct)."})]})]})]})]})};export{j as default};
