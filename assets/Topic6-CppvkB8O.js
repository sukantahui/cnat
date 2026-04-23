import{j as e}from"./index-CZ43a81g.js";import{T as i}from"./TeacherSukantaHui-GAsd2xdf.js";import{E as r}from"./EditableCCodeBlock-AjlbeKMS.js";import"./git-branch-D7OKREwa.js";import"./index-PEvkwhGW.js";import"./file-code-eIIiaVan.js";import"./type-BbvUXNU_.js";import"./refresh-cw-DzOvX6Wp.js";import"./copy-BjNRK02q.js";import"./download-CNCNpCMb.js";const n=`#include <stdio.h>\r
\r
int main() {\r
    int a = 10;\r
    int *p = &a;\r
\r
    // Reading\r
    printf("Value of a: %d\\n", a);\r
    printf("Value via pointer: %d\\n", *p);\r
\r
    // Writing\r
    *p = 20;\r
    printf("After *p = 20, a = %d\\n", a);\r
\r
    // Reading and writing in one expression\r
    *p = *p + 5;   // increment a by 5\r
    printf("After *p = *p + 5, a = %d\\n", a);\r
\r
    // Using pointer to modify a variable in a different function\r
    void increment(int *x) {\r
        (*x)++;\r
    }\r
\r
    increment(&a);\r
    printf("After increment(&a), a = %d\\n", a);\r
\r
    return 0;\r
}`,t=`#include <stdio.h>\r
\r
int main() {\r
    // Reading/writing a char through a char pointer\r
    char c = 'A';\r
    char *cp = &c;\r
    printf("c = %c\\n", *cp);\r
    *cp = 'B';\r
    printf("c = %c\\n", c);\r
\r
    // Reading/writing a double through a double pointer\r
    double d = 3.14159;\r
    double *dp = &d;\r
    printf("d = %f\\n", *dp);\r
    *dp = 2.71828;\r
    printf("d = %f\\n", d);\r
\r
    // Reading/writing through a void* (requires cast)\r
    int x = 100;\r
    void *vp = &x;\r
    // *vp = 200;   // ERROR: cannot dereference void*\r
    *(int*)vp = 200;  // cast before dereference\r
    printf("x = %d\\n", *(int*)vp);\r
\r
    return 0;\r
}`,g=()=>e.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-8 space-y-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300",children:[e.jsxs("div",{className:"animate-fade-up",style:{animationDelay:"0ms"},children:[e.jsx("h1",{className:"text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400",children:"Reading and Writing Values Using Pointers"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["Once a pointer holds a valid address, you can ",e.jsx("strong",{children:"read"})," the value at that address (dereference) or ",e.jsx("strong",{children:"write"})," a new value into that memory location. This two‑way access is what makes pointers powerful for modifying data indirectly."]})]}),e.jsxs("div",{className:"animate-fade-up grid md:grid-cols-2 gap-6",style:{animationDelay:"50ms"},children:[e.jsxs("div",{className:"group rounded-xl p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"📖 Reading via Pointers"}),e.jsxs("p",{className:"leading-relaxed mb-2",children:["To read, you ",e.jsx("strong",{children:"dereference"})," the pointer using ",e.jsx("code",{children:"*"}),". The expression ",e.jsx("code",{children:"*ptr"})," evaluates to the value stored at the address."]}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm",children:`int x = 42;
int *p = &x;
int y = *p;   // y gets 42 (read)
printf("%d", *p); // prints 42`}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"Reading does not change the pointer or the pointed‑to value."})]}),e.jsxs("div",{className:"group rounded-xl p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"✍️ Writing via Pointers"}),e.jsxs("p",{className:"leading-relaxed mb-2",children:["To write, you assign to the dereferenced pointer. The left‑hand side ",e.jsx("code",{children:"*ptr = value"})," stores the value into the memory location pointed to."]}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm",children:`int x = 10;
int *p = &x;
*p = 20;      // x becomes 20 (write)
*p = *p + 5;  // x becomes 25`}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"Writing modifies the original variable (or heap memory) directly."})]})]}),e.jsxs("div",{className:"animate-fade-up rounded-xl bg-gray-50 dark:bg-gray-800/50 p-4 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700",style:{animationDelay:"100ms"},children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-center",children:"Pointer Read/Write Flow"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{width:"500",height:"200",viewBox:"0 0 500 200",className:"max-w-full h-auto",children:[e.jsx("rect",{x:"40",y:"50",width:"120",height:"80",fill:"#3B82F6",fillOpacity:"0.2",stroke:"#3B82F6",strokeWidth:"2",rx:"4"}),e.jsx("text",{x:"100",y:"85",textAnchor:"middle",fill:"#3B82F6",fontSize:"12",children:"x"}),e.jsx("text",{x:"100",y:"105",textAnchor:"middle",fill:"currentColor",fontSize:"10",children:"value: 42"}),e.jsx("rect",{x:"280",y:"50",width:"120",height:"80",fill:"#10B981",fillOpacity:"0.2",stroke:"#10B981",strokeWidth:"2",rx:"4"}),e.jsx("text",{x:"340",y:"85",textAnchor:"middle",fill:"#10B981",fontSize:"12",children:"p"}),e.jsx("text",{x:"340",y:"105",textAnchor:"middle",fill:"currentColor",fontSize:"10",children:"address: &x"}),e.jsx("path",{d:"M280 90 L160 90",stroke:"#10B981",strokeWidth:"2",markerEnd:"url(#arrow)",strokeDasharray:"4"}),e.jsx("path",{d:"M340 150 L340 190 L180 190",stroke:"#3B82F6",strokeWidth:"1.5",strokeDasharray:"3"}),e.jsx("text",{x:"260",y:"180",textAnchor:"middle",fontSize:"10",fill:"#3B82F6",children:"Read: y = *p"}),e.jsx("rect",{x:"100",y:"170",width:"60",height:"20",fill:"#3B82F6",fillOpacity:"0.2",stroke:"#3B82F6",strokeWidth:"1"}),e.jsx("text",{x:"130",y:"185",textAnchor:"middle",fontSize:"9",fill:"currentColor",children:"y = 42"}),e.jsx("path",{d:"M340 135 L340 115 L280 115 L280 90",stroke:"#F59E0B",strokeWidth:"1.5",strokeDasharray:"3"}),e.jsx("text",{x:"310",y:"125",textAnchor:"middle",fontSize:"10",fill:"#F59E0B",children:"Write: *p = 100"}),e.jsx("text",{x:"100",y:"45",textAnchor:"middle",fontSize:"9",fill:"#F59E0B",children:"x becomes 100"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow",markerWidth:"8",markerHeight:"8",refX:"7",refY:"4",orient:"auto",children:e.jsx("polygon",{points:"0 0, 8 4, 0 8",fill:"#10B981"})})})]})}),e.jsxs("p",{className:"text-center text-sm mt-2 text-gray-600 dark:text-gray-400",children:["Reading (",e.jsx("code",{children:"*p"}),") fetches the value from the pointed location. Writing (",e.jsx("code",{children:"*p = value"}),") changes the pointed location."]})]}),e.jsxs("div",{className:"animate-fade-up space-y-8",style:{animationDelay:"150ms"},children:[e.jsxs("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"🔍 Understanding Lvalues and Rvalues"}),e.jsxs("p",{className:"leading-relaxed mb-2",children:["When you dereference a pointer, the result is an ",e.jsx("strong",{children:"lvalue"})," – it represents a location in memory. That's why you can assign to ",e.jsx("code",{children:"*p"}),"."]}),e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm",children:`int *p = &x;
*p = 10;      // OK: *p is an lvalue
int y = *p;   // OK: *p is read as rvalue`}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:["This is the key difference from a plain variable like ",e.jsx("code",{children:"p"})," itself – ",e.jsx("code",{children:"p"})," is an lvalue (you can change where it points), ",e.jsx("code",{children:"*p"})," is also an lvalue (you can change the value it points to)."]})]}),e.jsxs("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-3",children:"📊 Reading/Writing Different Types"}),e.jsxs("p",{className:"leading-relaxed",children:["The pointer type determines how many bytes are read/written. A ",e.jsx("code",{children:"char*"})," reads/writes one byte, an ",e.jsx("code",{children:"int*"})," reads/writes 4 bytes, and so on."]}),e.jsx("div",{className:"bg-gray-100 dark:bg-gray-800/70 p-3 rounded-lg mt-2",children:e.jsxs("code",{className:"text-sm",children:["int i = 0x12345678;",e.jsx("br",{}),"char *cp = (char*)&i;",e.jsx("br",{}),"*cp = 0xAA;      // writes only the first byte of i",e.jsx("br",{}),'printf("%x", i);  // output depends on endianness']})}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Real‑world scenario:"})," At Barrackpore CNAT, ",e.jsx("strong",{children:"Ritaja"})," used a ",e.jsx("code",{children:"char*"})," to inspect the individual bytes of an integer – useful for serialization and network protocols."]})]})]}),e.jsxs("div",{className:"animate-fade-up space-y-6",style:{animationDelay:"200ms"},children:[e.jsx("h3",{className:"text-2xl font-semibold",children:"💻 Practice Reading and Writing"}),e.jsx(r,{title:"Example 1: Basic Reading and Writing",initialCode:n}),e.jsx(r,{title:"Example 2: Working with Different Types",initialCode:t})]}),e.jsxs("div",{className:"animate-fade-up bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-5 rounded-r-xl",style:{animationDelay:"250ms"},children:[e.jsx("h3",{className:"text-xl font-semibold text-red-700 dark:text-red-400 mb-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Dereferencing a pointer that is NULL or uninitialized:"})," Results in crash or undefined behavior."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reading before writing:"})," Using the value from an uninitialized pointer (wild) leads to garbage."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Type mismatch:"})," Writing a value of wrong size or alignment can corrupt memory."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting the * when reading:"})," ",e.jsx("code",{children:"int y = p;"})," assigns the address, not the value."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Using ",e.jsx("code",{children:"&"})," instead of ",e.jsx("code",{children:"*"}),":"]})," ",e.jsx("code",{children:'printf("%d", &x);'})," prints address, not value."]})]})]}),e.jsxs("div",{className:"animate-fade-up bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-5 rounded-r-xl",style:{animationDelay:"300ms"},children:[e.jsx("h3",{className:"text-xl font-semibold text-green-700 dark:text-green-400 mb-2",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"Always initialize pointers before dereferencing (NULL or valid address)."}),e.jsxs("li",{children:["Check for NULL before reading or writing: ",e.jsx("code",{children:"if (ptr != NULL) *ptr = value;"}),"."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"sizeof(*ptr)"})," when allocating memory to avoid type mismatches."]}),e.jsx("li",{children:"When writing to a pointer, ensure the target memory is writable (e.g., not a string literal)."})]})]}),e.jsxs("div",{className:"animate-fade-up grid md:grid-cols-2 gap-4",style:{animationDelay:"350ms"},children:[e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"📋 Student Checklist"}),e.jsxs("ul",{className:"space-y-1 text-sm",children:[e.jsxs("li",{children:["✅ Can read a value using ",e.jsx("code",{children:"*ptr"}),"."]}),e.jsxs("li",{children:["✅ Can write a value using ",e.jsx("code",{children:"*ptr = value"}),"."]}),e.jsxs("li",{children:["✅ Understands that ",e.jsx("code",{children:"*ptr"})," is an lvalue."]}),e.jsx("li",{children:"✅ Knows that the pointer's type determines the read/write size."})]})]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-lg mb-2",children:"💡 Hint Section"}),e.jsx("p",{className:"text-sm",children:"Think about …"}),e.jsxs("ul",{className:"list-disc list-inside text-sm mt-1",children:[e.jsxs("li",{children:["What is the difference between ",e.jsx("code",{children:"p"})," and ",e.jsx("code",{children:"*p"}),"? Write code to print both."]}),e.jsxs("li",{children:["Observe carefully: what happens if you do ",e.jsx("code",{children:"*p = *p + 1"}),"? Does it change ",e.jsx("code",{children:"p"})," or the value?"]}),e.jsxs("li",{children:["Try reading and writing through a ",e.jsx("code",{children:"void*"})," pointer (you'll need casting)."]})]})]})]}),e.jsxs("div",{className:"animate-fade-up p-5 border-t border-gray-200 dark:border-gray-700",style:{animationDelay:"400ms"},children:[e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"🎓 Professional Tips & Tricks"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Use compound assignment:"})," ",e.jsx("code",{children:"*ptr += 5;"})," reads and writes in one go."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Pre‑increment with dereference:"})," ",e.jsx("code",{children:"*++ptr"})," vs ",e.jsx("code",{children:"++*ptr"})," – be careful with precedence."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Volatile qualifier:"})," When reading/writing memory‑mapped I/O, use ",e.jsx("code",{children:"volatile"})," to prevent compiler optimizations."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Debug with ",e.jsx("code",{children:'printf("%p: %d", ptr, *ptr);'})]})," to verify pointer contents."]})]})]}),e.jsx("div",{className:"animate-fade-up",style:{animationDelay:"450ms"},children:e.jsx(i,{note:"Students often ask: 'Why can't I just use the variable directly?' The power is in indirection – when you pass a pointer, you can modify the original from anywhere. In our Barrackpore CNAT class, we practice swapping values, modifying arrays, and building linked lists. Remember: reading doesn't change anything; writing does. And always make sure the pointer is valid before you read or write!"})}),e.jsx("style",{children:`
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
      `})]});export{g as default};
