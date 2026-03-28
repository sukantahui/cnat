import{j as e}from"./index-wvAt8vmb.js";import{T as s}from"./TeacherSukantaHui-CmF7DXhe.js";import{E as r}from"./EditableCCodeBlock-BFB3pin2.js";import"./git-branch-CrdxQCfx.js";import"./index-l2GzpozC.js";import"./file-code-DFKBVAqD.js";import"./type-CpCJUiFu.js";import"./refresh-cw-XWoXFms7.js";import"./copy-D0HGvqkI.js";import"./download-Cryk3QyC.js";const i=`#include <stdio.h>\r
\r
int main() {\r
    int int_arr[] = {10, 20, 30};\r
    char char_arr[] = {'A', 'B', 'C'};\r
    double double_arr[] = {1.1, 2.2, 3.3};\r
\r
    int *ip = int_arr;\r
    char *cp = char_arr;\r
    double *dp = double_arr;\r
\r
    printf("sizeof(int) = %zu\\n", sizeof(int));\r
    printf("ip = %p, ip+1 = %p, difference = %ld bytes\\n",\r
           (void*)ip, (void*)(ip+1), (char*)(ip+1) - (char*)ip);\r
\r
    printf("\\nsizeof(char) = %zu\\n", sizeof(char));\r
    printf("cp = %p, cp+1 = %p, difference = %ld bytes\\n",\r
           (void*)cp, (void*)(cp+1), (char*)(cp+1) - (char*)cp);\r
\r
    printf("\\nsizeof(double) = %zu\\n", sizeof(double));\r
    printf("dp = %p, dp+1 = %p, difference = %ld bytes\\n",\r
           (void*)dp, (void*)(dp+1), (char*)(dp+1) - (char*)dp);\r
\r
    return 0;\r
}`,a=`#include <stdio.h>\r
\r
struct Point {\r
    int x;\r
    int y;\r
};\r
\r
int main() {\r
    struct Point points[] = {{1,2}, {3,4}, {5,6}};\r
    struct Point *p = points;   // points to points[0]\r
\r
    printf("Size of struct Point = %zu bytes\\n", sizeof(struct Point));\r
    printf("points[0] at %p\\n", (void*)p);\r
    printf("points[1] at %p\\n", (void*)(p+1));\r
    printf("Difference = %ld bytes\\n", (char*)(p+1) - (char*)p);\r
\r
    // Traverse using pointer arithmetic\r
    for (p = points; p < points + 3; p++) {\r
        printf("Point: (%d, %d)\\n", p->x, p->y);\r
    }\r
\r
    return 0;\r
}`,f=()=>e.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-8 space-y-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300",children:[e.jsxs("div",{className:"animate-fade-up",style:{animationDelay:"0ms"},children:[e.jsx("h1",{className:"text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400",children:"Pointer Arithmetic & Data Type Size"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["The step size of pointer arithmetic is determined by the ",e.jsx("strong",{children:"type of the pointer"}),". Adding 1 to a pointer advances it by ",e.jsx("code",{children:"sizeof(type)"})," bytes, not one byte. This behavior is fundamental to traversing arrays and managing memory correctly."]})]}),e.jsxs("div",{className:"animate-fade-up grid md:grid-cols-2 gap-6",style:{animationDelay:"50ms"},children:[e.jsxs("div",{className:"group rounded-xl p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"📐 Step Size = sizeof(type)"}),e.jsx("p",{className:"leading-relaxed",children:"When you perform arithmetic on a pointer, the compiler automatically scales the integer offset by the size of the pointed-to type."}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2",children:`int *ip;      // sizeof(int) = 4
ip + 1;       // advances by 4 bytes

char *cp;     // sizeof(char) = 1
cp + 1;       // advances by 1 byte

double *dp;   // sizeof(double) = 8
dp + 1;       // advances by 8 bytes`})]}),e.jsxs("div",{className:"group rounded-xl p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🎯 Why This Matters"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"Array traversal works seamlessly."}),e.jsx("li",{children:"You can step through structures element‑by‑element."}),e.jsxs("li",{children:["Memory allocation with ",e.jsx("code",{children:"malloc"})," matches pointer arithmetic."]}),e.jsx("li",{children:"Prevents byte‑level errors when working with different types."})]}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Real‑world:"})," At Barrackpore CNAT, ",e.jsx("strong",{children:"Abhronila"})," used pointer arithmetic on a ",e.jsx("code",{children:"struct Student*"})," to iterate through an array of records – the step size automatically accounted for the structure size."]})]})]}),e.jsxs("div",{className:"animate-fade-up rounded-xl bg-gray-50 dark:bg-gray-800/50 p-4 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700",style:{animationDelay:"100ms"},children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-center",children:"Pointer + 1 Means Different Byte Offsets"}),e.jsx("div",{className:"flex justify-center overflow-x-auto",children:e.jsxs("svg",{width:"500",height:"240",viewBox:"0 0 500 240",className:"max-w-full h-auto",children:[e.jsx("rect",{x:"40",y:"20",width:"400",height:"30",fill:"none",stroke:"currentColor",strokeWidth:"1"}),[0,1,2,3,4,5,6,7].map(t=>e.jsx("rect",{x:40+t*50,y:"20",width:"50",height:"30",fill:"none",stroke:"gray",strokeWidth:"0.5"},t)),e.jsx("text",{x:"40",y:"15",fontSize:"8",children:"0"}),e.jsx("text",{x:"90",y:"15",fontSize:"8",children:"50"}),e.jsx("text",{x:"140",y:"15",fontSize:"8",children:"100"}),e.jsx("text",{x:"190",y:"15",fontSize:"8",children:"150"}),e.jsx("text",{x:"240",y:"15",fontSize:"8",children:"200"}),e.jsx("rect",{x:"40",y:"60",width:"100",height:"25",fill:"#3B82F6",fillOpacity:"0.2",stroke:"#3B82F6",strokeWidth:"2"}),e.jsx("text",{x:"90",y:"78",textAnchor:"middle",fontSize:"10",fill:"#3B82F6",children:"int*: 4 bytes"}),e.jsx("path",{d:"M90 85 L90 50",stroke:"#3B82F6",strokeWidth:"1.5",strokeDasharray:"3"}),e.jsx("rect",{x:"140",y:"60",width:"100",height:"25",fill:"#3B82F6",fillOpacity:"0.2",stroke:"#3B82F6",strokeWidth:"2"}),e.jsx("text",{x:"190",y:"78",textAnchor:"middle",fontSize:"10",fill:"#3B82F6",children:"int* + 1"}),e.jsx("path",{d:"M190 85 L190 50",stroke:"#3B82F6",strokeWidth:"1.5",strokeDasharray:"3"}),e.jsx("rect",{x:"40",y:"100",width:"50",height:"25",fill:"#10B981",fillOpacity:"0.2",stroke:"#10B981",strokeWidth:"2"}),e.jsx("text",{x:"65",y:"118",textAnchor:"middle",fontSize:"10",fill:"#10B981",children:"char*"}),e.jsx("path",{d:"M65 125 L65 50",stroke:"#10B981",strokeWidth:"1.5",strokeDasharray:"3"}),e.jsx("rect",{x:"90",y:"100",width:"50",height:"25",fill:"#10B981",fillOpacity:"0.2",stroke:"#10B981",strokeWidth:"2"}),e.jsx("text",{x:"115",y:"118",textAnchor:"middle",fontSize:"10",fill:"#10B981",children:"+1"}),e.jsx("path",{d:"M115 125 L115 50",stroke:"#10B981",strokeWidth:"1.5",strokeDasharray:"3"}),e.jsx("rect",{x:"40",y:"140",width:"200",height:"25",fill:"#F59E0B",fillOpacity:"0.2",stroke:"#F59E0B",strokeWidth:"2"}),e.jsx("text",{x:"140",y:"158",textAnchor:"middle",fontSize:"10",fill:"#F59E0B",children:"double*: 8 bytes"}),e.jsx("path",{d:"M140 165 L140 50",stroke:"#F59E0B",strokeWidth:"1.5",strokeDasharray:"3"}),e.jsx("rect",{x:"240",y:"140",width:"200",height:"25",fill:"#F59E0B",fillOpacity:"0.2",stroke:"#F59E0B",strokeWidth:"2"}),e.jsx("text",{x:"340",y:"158",textAnchor:"middle",fontSize:"10",fill:"#F59E0B",children:"double* + 1"}),e.jsx("path",{d:"M340 165 L340 50",stroke:"#F59E0B",strokeWidth:"1.5",strokeDasharray:"3"})]})}),e.jsxs("p",{className:"text-center text-sm mt-2 text-gray-600 dark:text-gray-400",children:["Adding 1 to an ",e.jsx("code",{children:"int*"})," moves by 4 bytes, to a ",e.jsx("code",{children:"char*"})," by 1 byte, and to a ",e.jsx("code",{children:"double*"})," by 8 bytes."]})]}),e.jsxs("div",{className:"animate-fade-up space-y-8",style:{animationDelay:"150ms"},children:[e.jsxs("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"🔍 Byte vs Element Movement"}),e.jsxs("p",{className:"leading-relaxed",children:["The critical insight: pointer arithmetic works in units of the ",e.jsx("strong",{children:"base type"}),". This allows you to treat a block of memory as an array of that type."]}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2",children:`int arr[5] = {1,2,3,4,5};
int *p = arr;           // p points to arr[0]
char *cp = (char*)arr;  // cp points to the same memory, but as bytes

p++;   // now points to arr[1] (4 bytes ahead)
cp++;  // now points to the second byte of arr[0]`}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Example:"})," ",e.jsx("strong",{children:"Sreeparna"})," needed to copy an integer array byte‑by‑byte for serialization. She used a ",e.jsx("code",{children:"char*"})," to traverse the memory bytewise, while ",e.jsx("code",{children:"int*"})," gave her element access."]})]}),e.jsxs("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"🧱 Pointer Arithmetic on Structures"}),e.jsx("p",{className:"leading-relaxed",children:"For structures, the step size is the total size of the structure (including padding). This makes it easy to iterate over arrays of structures."}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2",children:`struct Student {
    int id;
    char name[50];
};
struct Student class[30];
struct Student *ptr = class;  // points to class[0]
ptr++;  // now points to class[1] (sizeof(Student) bytes later)`}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:["This is exactly how array indexing works under the hood: ",e.jsx("code",{children:"class[i]"})," is equivalent to ",e.jsx("code",{children:"*(class + i)"}),"."]})]})]}),e.jsxs("div",{className:"animate-fade-up space-y-6",style:{animationDelay:"200ms"},children:[e.jsx("h3",{className:"text-2xl font-semibold",children:"💻 See the Step Size in Action"}),e.jsx(r,{title:"Example 1: Different Pointer Types, Different Steps",initialCode:i}),e.jsx(r,{title:"Example 2: Structure Pointer Arithmetic",initialCode:a})]}),e.jsxs("div",{className:"animate-fade-up bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-5 rounded-r-xl",style:{animationDelay:"250ms"},children:[e.jsx("h3",{className:"text-xl font-semibold text-red-700 dark:text-red-400 mb-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming +1 means one byte:"})," This is only true for ",e.jsx("code",{children:"char*"}),". For other types, it moves by multiple bytes."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Using pointer arithmetic on ",e.jsx("code",{children:"void*"}),":"]})," Not allowed because the size is unknown. Always cast to a concrete type first."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Misunderstanding pointer subtraction:"})," Subtracting two pointers yields the number of elements, not bytes."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ignoring alignment/padding:"})," For structures, the actual size may be larger than the sum of members due to padding; pointer arithmetic uses the padded size."]})]})]}),e.jsxs("div",{className:"animate-fade-up bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-5 rounded-r-xl",style:{animationDelay:"300ms"},children:[e.jsx("h3",{className:"text-xl font-semibold text-green-700 dark:text-green-400 mb-2",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:["Always let the compiler handle scaling – don't manually multiply by ",e.jsx("code",{children:"sizeof(type)"}),"."]}),e.jsxs("li",{children:["When you need byte‑level movement, use ",e.jsx("code",{children:"char*"})," or ",e.jsx("code",{children:"unsigned char*"}),"."]}),e.jsxs("li",{children:["For generic memory operations, use ",e.jsx("code",{children:"void*"})," but cast to ",e.jsx("code",{children:"char*"})," for arithmetic."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"sizeof(*ptr)"})," to allocate memory so the size matches the pointer type."]})]})]}),e.jsxs("div",{className:"animate-fade-up grid md:grid-cols-2 gap-4",style:{animationDelay:"350ms"},children:[e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"📋 Student Checklist"}),e.jsxs("ul",{className:"space-y-1 text-sm",children:[e.jsxs("li",{children:["✅ Understand that ",e.jsx("code",{children:"ptr + n"})," moves by ",e.jsx("code",{children:"n * sizeof(*ptr)"})," bytes."]}),e.jsx("li",{children:"✅ Can predict the address offset for different pointer types."}),e.jsxs("li",{children:["✅ Knows that ",e.jsx("code",{children:"char*"})," steps by one byte, ",e.jsx("code",{children:"int*"})," by four (on typical systems)."]}),e.jsx("li",{children:"✅ Understands that structure pointer arithmetic uses the structure's total size."})]})]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"💡 Hint Section"}),e.jsx("p",{className:"text-sm",children:"Think about …"}),e.jsxs("ul",{className:"list-disc list-inside text-sm mt-1",children:[e.jsxs("li",{children:["If you have an ",e.jsx("code",{children:"int*"})," and you add 1, by how many bytes does it advance? Print the addresses to see."]}),e.jsxs("li",{children:["Observe carefully: what happens if you add 1 to a ",e.jsx("code",{children:"void*"}),"? Why is it disallowed?"]}),e.jsxs("li",{children:["Try creating an array of structures and using pointer arithmetic to access elements. Does it match ",e.jsx("code",{children:"array[i]"}),"?"]})]})]})]}),e.jsxs("div",{className:"animate-fade-up p-5 border-t border-gray-200 dark:border-gray-700",style:{animationDelay:"400ms"},children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"🎓 Professional Tips & Tricks"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"ptrdiff_t"})]})," for the result of pointer subtraction – it's portable and signed."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"When writing generic functions"})," that work on any type, accept ",e.jsx("code",{children:"void*"})," and a size, then cast to ",e.jsx("code",{children:"char*"})," for arithmetic."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Compiler optimizations"})," rely on pointer type information – mismatched types can lead to undefined behavior (strict aliasing)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Know your platform's sizes"})," – ",e.jsx("code",{children:"sizeof(int)"})," may vary. Use ",e.jsx("code",{children:"sizeof"})," in your code to stay portable."]})]})]}),e.jsx("div",{className:"animate-fade-up",style:{animationDelay:"450ms"},children:e.jsx(s,{note:"In my Barrackpore CNAT class, I emphasize that pointer arithmetic is 'type‑aware'. If you remember that adding 1 to a pointer moves to the next element of its type, you'll avoid off‑by‑one errors. I often have students print addresses before and after arithmetic to see the byte difference. Also, note that <code>void*</code> cannot be used in arithmetic – you must cast to a concrete type. This is a common interview question!"})}),e.jsx("style",{children:`
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
