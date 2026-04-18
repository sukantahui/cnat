import{j as e}from"./index-CTaFCVvl.js";import{T as n}from"./TeacherSukantaHui-CXljMfmu.js";import{E as t}from"./EditableCCodeBlock-BmWb9UM9.js";import"./git-branch-DjtSZz17.js";import"./index-RG1_EAcX.js";import"./file-code-DdaZ0WP2.js";import"./type-Wnld5au3.js";import"./refresh-cw-ClGJKkyE.js";import"./copy-DY-fjKN5.js";import"./download-CVsa0i-2.js";const s=`#include <stdio.h>\r
\r
int main() {\r
    int arr[] = {10, 20, 30, 40, 50};\r
    int *p = arr;   // points to arr[0]\r
\r
    printf("p points to %d\\n", *p);\r
    p = p + 2;\r
    printf("After p+2, points to %d\\n", *p);\r
    p = p - 1;\r
    printf("After p-1, points to %d\\n", *p);\r
\r
    // Increment and decrement\r
    p++;   // now points to next element\r
    printf("After p++: %d\\n", *p);\r
    p--;   // back\r
    printf("After p--: %d\\n", *p);\r
\r
    // Using compound assignment\r
    p += 3;\r
    printf("After p+=3: %d\\n", *p);\r
\r
    // Difference between pointers\r
    int *start = arr;\r
    int *end = &arr[4];\r
    printf("Number of elements between start and end: %ld\\n", end - start);\r
\r
    return 0;\r
}`,i=`#include <stdio.h>\r
\r
int main() {\r
    int numbers[] = {5, 10, 15, 20, 25};\r
    int length = sizeof(numbers) / sizeof(numbers[0]);\r
\r
    // Traverse using pointer arithmetic\r
    int *ptr;\r
    printf("Traversing forward: ");\r
    for (ptr = numbers; ptr < numbers + length; ptr++) {\r
        printf("%d ", *ptr);\r
    }\r
    printf("\\n");\r
\r
    // Traverse backward\r
    printf("Traversing backward: ");\r
    for (ptr = numbers + length - 1; ptr >= numbers; ptr--) {\r
        printf("%d ", *ptr);\r
    }\r
    printf("\\n");\r
\r
    // Modify values using pointer arithmetic\r
    for (ptr = numbers; ptr < numbers + length; ptr++) {\r
        *ptr *= 2;   // double each element\r
    }\r
\r
    printf("After doubling: ");\r
    for (ptr = numbers; ptr < numbers + length; ptr++) {\r
        printf("%d ", *ptr);\r
    }\r
    printf("\\n");\r
\r
    return 0;\r
}`,y=()=>e.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-8 space-y-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300",children:[e.jsxs("div",{className:"animate-fade-up",style:{animationDelay:"0ms"},children:[e.jsx("h1",{className:"text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400",children:"Pointer Arithmetic: Increment, Decrement, Addition & Subtraction"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["You can perform arithmetic operations on pointers, but it works differently than normal arithmetic. Adding an integer to a pointer moves it forward by that many ",e.jsx("strong",{children:"elements"}),", not bytes. This is the foundation for traversing arrays and implementing data structures."]})]}),e.jsxs("div",{className:"animate-fade-up grid md:grid-cols-2 gap-6",style:{animationDelay:"50ms"},children:[e.jsxs("div",{className:"group rounded-xl p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"➕ Addition & Subtraction"}),e.jsxs("p",{className:"leading-relaxed",children:["Adding an integer ",e.jsx("code",{children:"n"})," to a pointer advances it by ",e.jsx("code",{children:"n * sizeof(*ptr)"})," bytes. Subtracting moves backward."]}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2",children:`int arr[5] = {10,20,30,40,50};
int *p = arr;       // points to arr[0]
p = p + 2;          // points to arr[2] (30)
p = p - 1;          // points to arr[1] (20)`}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Real‑world:"})," At Barrackpore CNAT, ",e.jsx("strong",{children:"Swadeep"})," uses pointer addition to iterate through an array without using indices."]})]}),e.jsxs("div",{className:"group rounded-xl p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"⬆️ Increment & Decrement"}),e.jsxs("p",{className:"leading-relaxed",children:[e.jsx("code",{children:"p++"})," moves the pointer to the next element; ",e.jsx("code",{children:"p--"})," moves to the previous. These are shorthand for ",e.jsx("code",{children:"p = p + 1"})," and ",e.jsx("code",{children:"p = p - 1"}),"."]}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2",children:`int *p = arr;   // points to arr[0]
p++;             // now points to arr[1]
p--;             // back to arr[0]`}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"Increment and decrement are commonly used in loops to traverse arrays or buffers."})]})]}),e.jsxs("div",{className:"animate-fade-up rounded-xl bg-gray-50 dark:bg-gray-800/50 p-4 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700",style:{animationDelay:"100ms"},children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-center",children:"Pointer Arithmetic on an Array"}),e.jsx("div",{className:"flex justify-center overflow-x-auto",children:e.jsxs("svg",{width:"550",height:"200",viewBox:"0 0 550 200",className:"max-w-full h-auto",children:[[0,1,2,3,4].map(r=>e.jsxs("g",{children:[e.jsx("rect",{x:50+r*80,y:"50",width:"70",height:"50",fill:"none",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("text",{x:85+r*80,y:"75",textAnchor:"middle",fontSize:"12",fill:"currentColor",children:`arr[${r}]`}),e.jsx("text",{x:85+r*80,y:"95",textAnchor:"middle",fontSize:"10",fill:"currentColor",children:(r+1)*10})]},r)),e.jsx("rect",{x:"45",y:"120",width:"80",height:"30",fill:"#10B981",fillOpacity:"0.2",stroke:"#10B981",strokeWidth:"2"}),e.jsx("text",{x:"85",y:"140",textAnchor:"middle",fontSize:"12",fill:"#10B981",children:"p (start)"}),e.jsx("path",{d:"M85 120 L85 100",stroke:"#10B981",strokeWidth:"2",strokeDasharray:"4"}),e.jsx("rect",{x:"125",y:"160",width:"80",height:"30",fill:"#3B82F6",fillOpacity:"0.2",stroke:"#3B82F6",strokeWidth:"2"}),e.jsx("text",{x:"165",y:"180",textAnchor:"middle",fontSize:"12",fill:"#3B82F6",children:"p++"}),e.jsx("path",{d:"M165 160 L165 100",stroke:"#3B82F6",strokeWidth:"2",strokeDasharray:"4"}),e.jsx("rect",{x:"285",y:"160",width:"80",height:"30",fill:"#F59E0B",fillOpacity:"0.2",stroke:"#F59E0B",strokeWidth:"2"}),e.jsx("text",{x:"325",y:"180",textAnchor:"middle",fontSize:"12",fill:"#F59E0B",children:"p+2"}),e.jsx("path",{d:"M325 160 L325 100",stroke:"#F59E0B",strokeWidth:"2",strokeDasharray:"4"})]})}),e.jsxs("p",{className:"text-center text-sm mt-2 text-gray-600 dark:text-gray-400",children:["Adding ",e.jsx("code",{children:"1"})," moves the pointer by one ",e.jsx("strong",{children:"element"})," (4 bytes for ",e.jsx("code",{children:"int"}),"). Adding ",e.jsx("code",{children:"2"})," moves by two elements."]})]}),e.jsxs("div",{className:"animate-fade-up space-y-8",style:{animationDelay:"150ms"},children:[e.jsxs("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"📐 The Math Behind Pointer Arithmetic"}),e.jsxs("p",{className:"leading-relaxed",children:["When you add an integer ",e.jsx("code",{children:"n"})," to a pointer ",e.jsx("code",{children:"p"}),", the compiler computes:"]}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm my-2",children:"new_address = (address_in_p) + n * sizeof(*p)"}),e.jsxs("p",{children:["Similarly, subtracting ",e.jsx("code",{children:"n"})," moves backward by ",e.jsx("code",{children:"n * sizeof(*p)"})," bytes. This ensures that pointer arithmetic is type‑aware and safe for stepping through arrays."]}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Example:"})," If ",e.jsx("code",{children:"p"})," is a ",e.jsx("code",{children:"double*"})," and ",e.jsx("code",{children:"sizeof(double) == 8"}),", then ",e.jsx("code",{children:"p + 3"})," advances the address by 24 bytes."]})]}),e.jsxs("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"🔁 Using Arithmetic to Traverse Arrays"}),e.jsx("p",{className:"leading-relaxed",children:"A classic use of pointer arithmetic is iterating over an array without using the subscript operator."}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm",children:`int arr[] = {1,2,3,4,5};
int *p;
for(p = arr; p < arr + 5; p++) {
    printf("%d ", *p);
}`}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"This pattern is common in systems programming and is often more efficient than using indices."}),e.jsxs("p",{className:"mt-1 text-sm",children:[e.jsx("strong",{children:"Classroom story:"})," ",e.jsx("strong",{children:"Tuhina"})," used pointer arithmetic to reverse an array in place – she kept two pointers, one at the start and one at the end, and swapped values while moving them inward."]})]})]}),e.jsxs("div",{className:"animate-fade-up space-y-6",style:{animationDelay:"200ms"},children:[e.jsx("h3",{className:"text-2xl font-semibold",children:"💻 Try It Yourself"}),e.jsx(t,{title:"Example 1: Basic Pointer Arithmetic",initialCode:s}),e.jsx(t,{title:"Example 2: Traversing Arrays with Pointers",initialCode:i})]}),e.jsxs("div",{className:"animate-fade-up bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-5 rounded-r-xl",style:{animationDelay:"250ms"},children:[e.jsx("h3",{className:"text-xl font-semibold text-red-700 dark:text-red-400 mb-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming +1 moves by one byte:"})," Pointer arithmetic moves by element size, not byte."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Going out of bounds:"})," Incrementing a pointer beyond the array and dereferencing leads to undefined behavior."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Subtracting pointers of different types:"})," Pointer subtraction yields the number of elements, but only if both point to the same array."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Using pointer arithmetic on ",e.jsx("code",{children:"void*"}),":"]})," Not allowed because the size is unknown. Must cast to a concrete type."]})]})]}),e.jsxs("div",{className:"animate-fade-up bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-5 rounded-r-xl",style:{animationDelay:"300ms"},children:[e.jsx("h3",{className:"text-xl font-semibold text-green-700 dark:text-green-400 mb-2",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"Always keep track of the bounds – use a pointer to the end of the array as a sentinel."}),e.jsx("li",{children:"Prefer pointer arithmetic over indexing for performance‑critical loops."}),e.jsxs("li",{children:["When using ",e.jsx("code",{children:"p++"})," inside a loop, be careful about modifying the original pointer if you need it later."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"sizeof(*ptr)"})," when allocating memory to stay consistent with pointer arithmetic."]})]})]}),e.jsxs("div",{className:"animate-fade-up grid md:grid-cols-2 gap-4",style:{animationDelay:"350ms"},children:[e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"📋 Student Checklist"}),e.jsxs("ul",{className:"space-y-1 text-sm",children:[e.jsxs("li",{children:["✅ Understand that ",e.jsx("code",{children:"p + n"})," advances by ",e.jsx("code",{children:"n * sizeof(*p)"})," bytes."]}),e.jsxs("li",{children:["✅ Can use ",e.jsx("code",{children:"++"})," and ",e.jsx("code",{children:"--"})," to walk through arrays."]}),e.jsx("li",{children:"✅ Knows that subtracting two pointers yields the number of elements between them."}),e.jsx("li",{children:"✅ Can write a loop that traverses an array using pointer arithmetic."})]})]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"💡 Hint Section"}),e.jsx("p",{className:"text-sm",children:"Think about …"}),e.jsxs("ul",{className:"list-disc list-inside text-sm mt-1",children:[e.jsxs("li",{children:["What is the difference between ",e.jsx("code",{children:"p++"})," and ",e.jsx("code",{children:"++p"}),"? Try them in a loop."]}),e.jsxs("li",{children:["Observe carefully: If ",e.jsx("code",{children:"p"})," points to the first element, what does ",e.jsx("code",{children:"p + 5"})," point to? Is it safe to dereference?"]}),e.jsx("li",{children:"Try using pointer arithmetic to copy an array from one location to another."})]})]})]}),e.jsxs("div",{className:"animate-fade-up p-5 border-t border-gray-200 dark:border-gray-700",style:{animationDelay:"400ms"},children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"🎓 Professional Tips & Tricks"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"ptrdiff_t"})]})," for the result of pointer subtraction; it's a signed type defined in ",e.jsx("code",{children:"<stddef.h>"}),"."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Pointer arithmetic with ",e.jsx("code",{children:"char*"})]})," allows byte‑level manipulation because ",e.jsx("code",{children:"sizeof(char) == 1"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Watch out for overflow:"})," On 64‑bit systems, pointer arithmetic wraps around, but it's usually safe within array bounds."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Combine with ",e.jsx("code",{children:"const"}),":"]})," Use ",e.jsx("code",{children:"const int *p"})," to prevent modifying the data while traversing."]})]})]}),e.jsx("div",{className:"animate-fade-up",style:{animationDelay:"450ms"},children:e.jsx(n,{note:"Pointer arithmetic is where pointers truly shine. I tell my Barrackpore CNAT students: 'Think of pointers as cursors – adding 1 moves to the next item, not the next byte.' This mental model helps avoid off‑by‑one errors. Always remember that pointer arithmetic is tied to the type; a char* moves by one byte, an int* by four. Practice with small arrays and print addresses to see the magic!"})}),e.jsx("style",{children:`
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
      `})]});export{y as default};
