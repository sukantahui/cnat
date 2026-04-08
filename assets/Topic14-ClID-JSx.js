import{j as e}from"./index-BzuofKLN.js";import{T as s}from"./TeacherSukantaHui-CIZzO11w.js";import{E as i}from"./EditableCCodeBlock-obnmCuUz.js";import"./git-branch-DXQ8XUas.js";import"./index-oNHJacdj.js";import"./file-code-DwwjY6VY.js";import"./type-Db2KOmYK.js";import"./refresh-cw-D-tBDlKL.js";import"./copy-COUrsCfW.js";import"./download-CxzJPmmX.js";const t=`#include <stdio.h>\r
\r
// Using array notation (decays to pointer)\r
void printArray(int arr[], size_t n) {\r
    printf("Inside function: sizeof(arr) = %zu\\n", sizeof(arr)); // pointer size\r
    for (size_t i = 0; i < n; i++) {\r
        printf("%d ", arr[i]);\r
    }\r
    printf("\\n");\r
}\r
\r
// Modify array (affects original)\r
void doubleArray(int arr[], size_t n) {\r
    for (size_t i = 0; i < n; i++) {\r
        arr[i] *= 2;\r
    }\r
}\r
\r
int main() {\r
    int numbers[] = {1, 2, 3, 4, 5};\r
    size_t len = sizeof(numbers) / sizeof(numbers[0]);\r
\r
    printf("In main: sizeof(numbers) = %zu\\n", sizeof(numbers));\r
    printf("Original: ");\r
    printArray(numbers, len);\r
\r
    doubleArray(numbers, len);\r
    printf("After doubling: ");\r
    printArray(numbers, len);\r
\r
    return 0;\r
}`,a=`#include <stdio.h>\r
\r
// Using pointer notation explicitly\r
void printArray(int *ptr, size_t n) {\r
    for (size_t i = 0; i < n; i++) {\r
        printf("%d ", ptr[i]);   // ptr[i] is equivalent to *(ptr + i)\r
    }\r
    printf("\\n");\r
}\r
\r
// Modify using pointer arithmetic\r
void scaleArray(int *ptr, size_t n, int factor) {\r
    for (size_t i = 0; i < n; i++) {\r
        *(ptr + i) *= factor;    // pointer arithmetic\r
    }\r
}\r
\r
int main() {\r
    int scores[] = {85, 92, 78, 88, 95};\r
    size_t count = sizeof(scores) / sizeof(scores[0]);\r
\r
    printf("Original: ");\r
    printArray(scores, count);\r
\r
    scaleArray(scores, count, 2);\r
    printf("After scaling by 2: ");\r
    printArray(scores, count);\r
\r
    return 0;\r
}`,f=()=>e.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-8 space-y-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300",children:[e.jsxs("div",{className:"animate-fade-up",style:{animationDelay:"0ms"},children:[e.jsx("h1",{className:"text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400",children:"Passing Arrays and Pointers to Functions"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["In C, arrays and pointers are closely linked. When you pass an array to a function, it ",e.jsx("strong",{children:"decays"})," to a pointer to its first element. This means the function receives a pointer, not a copy of the entire array. Understanding this allows you to write functions that operate on arrays efficiently and flexibly."]})]}),e.jsxs("div",{className:"animate-fade-up grid md:grid-cols-2 gap-6",style:{animationDelay:"50ms"},children:[e.jsxs("div",{className:"group rounded-xl p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"📤 Passing an Array"}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm",children:`void printArray(int arr[], int size) {
    for(int i = 0; i < size; i++)
        printf("%d ", arr[i]);
}

int main() {
    int nums[] = {1,2,3};
    printArray(nums, 3);
}`}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:["The parameter ",e.jsx("code",{children:"int arr[]"})," is actually a pointer (",e.jsx("code",{children:"int *arr"}),"). You must pass the size separately because the pointer carries no length information."]})]}),e.jsxs("div",{className:"group rounded-xl p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🔗 Passing a Pointer"}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm",children:`void modifyArray(int *ptr, int size) {
    for(int i = 0; i < size; i++)
        ptr[i] *= 2;
}

int main() {
    int nums[] = {1,2,3};
    modifyArray(nums, 3);   // nums decays to pointer
}`}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"Using pointer notation makes the decay explicit. Both forms are equivalent – choose based on clarity."})]})]}),e.jsxs("div",{className:"animate-fade-up rounded-xl bg-gray-50 dark:bg-gray-800/50 p-4 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700",style:{animationDelay:"100ms"},children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-center",children:"Array Decay When Passing to Function"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{width:"500",height:"160",viewBox:"0 0 500 160",className:"max-w-full h-auto",children:[e.jsx("rect",{x:"30",y:"30",width:"320",height:"50",fill:"none",stroke:"currentColor",strokeWidth:"1"}),[0,1,2,3,4].map(r=>e.jsx("rect",{x:30+r*64,y:"30",width:"64",height:"50",fill:"none",stroke:"gray",strokeWidth:"1"},r)),e.jsx("text",{x:62,y:"65",textAnchor:"middle",fontSize:"10",children:"arr[0]"}),e.jsx("text",{x:126,y:"65",textAnchor:"middle",fontSize:"10",children:"arr[1]"}),e.jsx("text",{x:190,y:"65",textAnchor:"middle",fontSize:"10",children:"arr[2]"}),e.jsx("text",{x:254,y:"65",textAnchor:"middle",fontSize:"10",children:"arr[3]"}),e.jsx("text",{x:318,y:"65",textAnchor:"middle",fontSize:"10",children:"arr[4]"}),e.jsx("path",{d:"M190 100 L190 130",stroke:"#10B981",strokeWidth:"2",strokeDasharray:"4"}),e.jsx("text",{x:"200",y:"115",fill:"#10B981",fontSize:"12",children:"decays to pointer"}),e.jsx("rect",{x:"150",y:"135",width:"100",height:"25",fill:"#10B981",fillOpacity:"0.2",stroke:"#10B981",strokeWidth:"2"}),e.jsx("text",{x:"200",y:"152",textAnchor:"middle",fill:"#10B981",fontSize:"11",children:"&arr[0]"})]})}),e.jsx("p",{className:"text-center text-sm mt-2 text-gray-600 dark:text-gray-400",children:"The array name becomes a pointer to its first element when passed to a function."})]}),e.jsxs("div",{className:"animate-fade-up space-y-8",style:{animationDelay:"150ms"},children:[e.jsxs("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"📖 Why the Size Must Be Passed Separately"}),e.jsx("p",{className:"leading-relaxed",children:"Because the array decays to a pointer, the function loses information about the array's size. The pointer only knows the address of the first element, not how many elements exist."}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2",children:`void process(int arr[]) {
    // sizeof(arr) is sizeof(int*) (8 bytes), not array size!
    int size = sizeof(arr) / sizeof(arr[0]); // WRONG
}

int main() {
    int nums[10];
    printf("%zu\\n", sizeof(nums));   // 40
    process(nums);
}`}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"Always pass the size explicitly, or use a sentinel value (like NULL for strings)."})]}),e.jsxs("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"🔁 Modifying Arrays Inside Functions"}),e.jsxs("p",{className:"leading-relaxed",children:["Since the function receives a pointer to the original array, modifications affect the caller's array. This is how functions like ",e.jsx("code",{children:"qsort"})," work."]}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2",children:`void doubleElements(int *arr, int size) {
    for(int i = 0; i < size; i++)
        arr[i] *= 2;   // modifies original
}

int main() {
    int data[] = {1,2,3};
    doubleElements(data, 3);
    // data is now {2,4,6}
}`}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Real‑world:"})," At Barrackpore CNAT, ",e.jsx("strong",{children:"Debolina"})," used this pattern to implement a function that scales all grades by a factor."]})]})]}),e.jsxs("div",{className:"animate-fade-up space-y-6",style:{animationDelay:"200ms"},children:[e.jsx("h3",{className:"text-2xl font-semibold",children:"💻 Passing Arrays to Functions"}),e.jsx(i,{title:"Example 1: Passing an Array (Decay)",initialCode:t}),e.jsx(i,{title:"Example 2: Passing a Pointer to Array",initialCode:a})]}),e.jsxs("div",{className:"animate-fade-up bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-5 rounded-r-xl",style:{animationDelay:"250ms"},children:[e.jsx("h3",{className:"text-xl font-semibold text-red-700 dark:text-red-400 mb-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Using ",e.jsx("code",{children:"sizeof"})," on array parameter:"]})," Returns pointer size, not array size."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to pass the size:"})," The function has no way to know how many elements to process."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming the array is passed by value:"})," It's actually a pointer – modifications affect the original."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Confusing array of pointers with pointer to array:"})," ",e.jsx("code",{children:"int *arr[]"})," vs ",e.jsx("code",{children:"int (*arr)[]"})," are different."]})]})]}),e.jsxs("div",{className:"animate-fade-up bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-5 rounded-r-xl",style:{animationDelay:"300ms"},children:[e.jsx("h3",{className:"text-xl font-semibold text-green-700 dark:text-green-400 mb-2",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:["Always pass the array size as a separate parameter, ideally of type ",e.jsx("code",{children:"size_t"}),"."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"const"})," for read‑only array parameters: ",e.jsx("code",{children:"void print(const int arr[], size_t n);"})]}),e.jsxs("li",{children:["Document that the function may modify the array if it's not ",e.jsx("code",{children:"const"}),"."]}),e.jsx("li",{children:"For multidimensional arrays, pass all dimensions except the first (which decays) explicitly."})]})]}),e.jsxs("div",{className:"animate-fade-up grid md:grid-cols-2 gap-4",style:{animationDelay:"350ms"},children:[e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"📋 Student Checklist"}),e.jsxs("ul",{className:"space-y-1 text-sm",children:[e.jsx("li",{children:"✅ Understand that arrays decay to pointers when passed to functions."}),e.jsx("li",{children:"✅ Know why you must pass the size separately."}),e.jsx("li",{children:"✅ Can write functions that both read and modify arrays."}),e.jsxs("li",{children:["✅ Recognize that ",e.jsx("code",{children:"int arr[]"})," in a parameter list is a pointer."]})]})]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"💡 Hint Section"}),e.jsx("p",{className:"text-sm",children:"Think about …"}),e.jsxs("ul",{className:"list-disc list-inside text-sm mt-1",children:[e.jsxs("li",{children:["What does ",e.jsx("code",{children:"sizeof(arr)"})," inside a function give you? Compare with ",e.jsx("code",{children:"sizeof"})," in main."]}),e.jsxs("li",{children:["Observe carefully: If you modify ",e.jsx("code",{children:"arr[i]"})," inside the function, does the caller see the change? Why?"]}),e.jsx("li",{children:"Try passing a pointer to a local array to a function, then modify it. Does it work?"})]})]})]}),e.jsxs("div",{className:"animate-fade-up p-5 border-t border-gray-200 dark:border-gray-700",style:{animationDelay:"400ms"},children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"🎓 Professional Tips & Tricks"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"static"})," in function parameters (C99):"]})," ",e.jsx("code",{children:"void f(int arr[static 10])"})," indicates at least 10 elements."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["For 2D arrays, pass as ",e.jsx("code",{children:"int (*arr)[cols]"})," or ",e.jsx("code",{children:"int arr[][cols]"})]})," – the second dimension must be known."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Consider using ",e.jsx("code",{children:"size_t"})," for array indices and sizes"]})," – it's unsigned and matches ",e.jsx("code",{children:"sizeof"}),"."]}),e.jsx("li",{children:e.jsxs("strong",{children:["When you need to modify the pointer itself (e.g., reallocation), pass a double pointer (",e.jsx("code",{children:"int **"}),")."]})})]})]}),e.jsx("div",{className:"animate-fade-up",style:{animationDelay:"450ms"},children:e.jsx(s,{note:"In Barrackpore CNAT, we emphasize that passing an array is really passing a pointer. I tell students: 'The array name is just a ticket to the first element.' This is why you must pass the size separately – the ticket doesn't tell you how many seats there are. Practice by writing functions that sum, sort, or search arrays. And remember: modifying the array inside a function changes the original – that's often what you want, but be careful!"})}),e.jsx("style",{children:`
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
      `})]});export{f as default};
