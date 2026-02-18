import{j as e}from"./index-BFnLuail.js";import{E as r}from"./EditableCCodeBlock-BIH-nUZ3.js";const i=`#include <stdio.h>\r
\r
// Linear search: returns index of first occurrence, or -1 if not found\r
int linearSearch(int arr[], int n, int key) {\r
    for (int i = 0; i < n; i++) {\r
        if (arr[i] == key) {\r
            return i;  // found\r
        }\r
    }\r
    return -1;  // not found\r
}\r
\r
int main() {\r
    int marks[] = {67, 78, 89, 90, 85};\r
    int n = sizeof(marks) / sizeof(marks[0]);\r
    int searchFor = 89;\r
\r
    int index = linearSearch(marks, n, searchFor);\r
    if (index != -1) {\r
        printf("Value %d found at index %d.\\n", searchFor, index);\r
    } else {\r
        printf("Value %d not found.\\n", searchFor);\r
    }\r
\r
    // Search for a value not present\r
    searchFor = 100;\r
    index = linearSearch(marks, n, searchFor);\r
    if (index != -1) {\r
        printf("Value %d found at index %d.\\n", searchFor, index);\r
    } else {\r
        printf("Value %d not found.\\n", searchFor);\r
    }\r
\r
    return 0;\r
}\r
#include <stdio.h>\r
\r
// Linear search: returns index of first occurrence, or -1 if not found\r
int linearSearch(int arr[], int n, int key) {\r
    for (int i = 0; i < n; i++) {\r
        if (arr[i] == key) {\r
            return i;  // found\r
        }\r
    }\r
    return -1;  // not found\r
}\r
\r
int main() {\r
    int marks[] = {67, 78, 89, 90, 85};\r
    int n = sizeof(marks) / sizeof(marks[0]);\r
    int searchFor = 89;\r
\r
    int index = linearSearch(marks, n, searchFor);\r
    if (index != -1) {\r
        printf("Value %d found at index %d.\\n", searchFor, index);\r
    } else {\r
        printf("Value %d not found.\\n", searchFor);\r
    }\r
\r
    // Search for a value not present\r
    searchFor = 100;\r
    index = linearSearch(marks, n, searchFor);\r
    if (index != -1) {\r
        printf("Value %d found at index %d.\\n", searchFor, index);\r
    } else {\r
        printf("Value %d not found.\\n", searchFor);\r
    }\r
\r
    return 0;\r
}`,s=`#include <stdio.h>\r
\r
// Insert 'value' at position 'pos' (0-based) in array 'arr'\r
// 'n' is current number of elements, 'capacity' is total allocated size\r
// Returns new size after insertion, or -1 if insertion fails\r
int insertAt(int arr[], int n, int capacity, int value, int pos) {\r
    // Check for valid position and space\r
    if (pos < 0 || pos > n || n >= capacity) {\r
        return -1;  // insertion not possible\r
    }\r
\r
    // Shift elements to the right, starting from the end\r
    for (int i = n; i > pos; i--) {\r
        arr[i] = arr[i - 1];\r
    }\r
\r
    // Insert new value\r
    arr[pos] = value;\r
    return n + 1;  // new size\r
}\r
\r
int main() {\r
    int arr[10] = {10, 20, 30, 40};  // capacity 10, initially 4 elements\r
    int n = 4;\r
\r
    printf("Before insertion: ");\r
    for (int i = 0; i < n; i++) {\r
        printf("%d ", arr[i]);\r
    }\r
    printf("\\n");\r
\r
    // Insert 25 at index 2\r
    n = insertAt(arr, n, 10, 25, 2);\r
    if (n != -1) {\r
        printf("After insertion: ");\r
        for (int i = 0; i < n; i++) {\r
            printf("%d ", arr[i]);\r
        }\r
        printf("\\n");\r
    } else {\r
        printf("Insertion failed.\\n");\r
    }\r
\r
    return 0;\r
}`,a=`#include <stdio.h>\r
\r
// Delete element at position 'pos' (0-based) in array 'arr'\r
// 'n' is current number of elements\r
// Returns new size after deletion, or -1 if deletion fails\r
int deleteAt(int arr[], int n, int pos) {\r
    // Check for valid position\r
    if (pos < 0 || pos >= n) {\r
        return -1;  // deletion not possible\r
    }\r
\r
    // Shift elements to the left, starting from pos+1\r
    for (int i = pos; i < n - 1; i++) {\r
        arr[i] = arr[i + 1];\r
    }\r
\r
    return n - 1;  // new size\r
}\r
\r
int main() {\r
    int arr[10] = {10, 20, 30, 40, 50};  // 5 elements\r
    int n = 5;\r
\r
    printf("Before deletion: ");\r
    for (int i = 0; i < n; i++) {\r
        printf("%d ", arr[i]);\r
    }\r
    printf("\\n");\r
\r
    // Delete element at index 2 (value 30)\r
    n = deleteAt(arr, n, 2);\r
    if (n != -1) {\r
        printf("After deletion: ");\r
        for (int i = 0; i < n; i++) {\r
            printf("%d ", arr[i]);\r
        }\r
        printf("\\n");\r
    } else {\r
        printf("Deletion failed.\\n");\r
    }\r
\r
    return 0;\r
}`,o=`
  @keyframes fade-slide-up {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
`,m=()=>{const t=new Date().getFullYear()-1998;return e.jsxs("div",{className:"dark",style:{backgroundColor:"#121212"},children:[" ",e.jsx("style",{children:o}),e.jsxs("div",{className:"max-w-4xl mx-auto p-6 space-y-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:[e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate",children:[e.jsx("h1",{className:"text-4xl font-light tracking-tight leading-tight",children:"Topic 3: Common operations on one‑dimensional arrays (search, insert, delete)"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 mt-2 leading-relaxed",children:"How to find an element, add a new one, or remove an existing one – and why these operations behave differently than on lists."})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[100ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"🔍 Operations on arrays"}),e.jsx("p",{className:"leading-relaxed",children:"Because arrays occupy a fixed block of contiguous memory, insertions and deletions are not as simple as in higher‑level data structures. You cannot just “add” or “remove” a slot – you must shift elements to maintain contiguity."}),e.jsxs("ul",{className:"list-disc list-inside mt-4 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Search"})," – traverse the array and compare each element (linear search). If sorted, binary search is faster (but that’s a future topic)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Insert"})," – to insert at position ",e.jsx("code",{children:"p"}),", shift all elements from ",e.jsx("code",{children:"p"})," to ",e.jsx("code",{children:"size-1"})," one step to the right, then place the new value. This requires enough capacity (the array must be declared larger than current size)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Delete"})," – to delete at position ",e.jsx("code",{children:"p"}),", shift all elements from ",e.jsx("code",{children:"p+1"})," to ",e.jsx("code",{children:"size-1"})," one step to the left. The last slot becomes unused (but still exists)."]})]}),e.jsxs("div",{className:"mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded",children:[e.jsx("p",{className:"text-sm font-medium",children:"🏫 Real‑world analogy:"}),e.jsxs("p",{className:"text-sm mt-1",children:["At ",e.jsx("strong",{children:"Barrackpore CNAT"}),", students sit in a row of fixed chairs. If a new student (Abhronila) joins and must sit between Debangshu and Ritaja, everyone from that point must move one chair right. If someone leaves, the rest shuffle left. That’s exactly how array insert/delete work."]})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[200ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"🔄 Shifting elements for insert/delete"}),e.jsx("div",{className:"flex justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-xl transition-all duration-300 hover:shadow-xl",children:e.jsxs("svg",{width:"480",height:"200",viewBox:"0 0 480 200",className:"max-w-full h-auto",children:[e.jsx("text",{x:"30",y:"30",className:"text-sm font-medium",children:"Before insert at index 2:"}),[0,1,2,3].map(n=>e.jsxs("g",{children:[e.jsx("rect",{x:30+n*60,y:"40",width:"50",height:"40",fill:"none",stroke:"#3b82f6",strokeWidth:"2",rx:"2"}),e.jsx("text",{x:30+n*60+25,y:"65",textAnchor:"middle",fill:"currentColor",children:n===0?"A":n===1?"B":n===2?"C":n===3?"D":""})]},`before-${n}`)),e.jsx("text",{x:"30",y:"110",className:"text-sm font-medium",children:"After insert 'X' at index 2:"}),[0,1,2,3,4].map(n=>e.jsxs("g",{children:[e.jsx("rect",{x:30+n*48,y:"120",width:"40",height:"40",fill:"none",stroke:"#10b981",strokeWidth:"2",rx:"2"}),e.jsx("text",{x:30+n*48+20,y:"145",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:n===0?"A":n===1?"B":n===2?"X":n===3?"C":n===4?"D":""})]},`after-${n}`)),e.jsx("line",{x1:"140",y1:"110",x2:"110",y2:"130",stroke:"#ef4444",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("line",{x1:"200",y1:"110",x2:"160",y2:"130",stroke:"#ef4444",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("path",{d:"M0,0 L10,5 L0,10 Z",fill:"#ef4444"})})})]})}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2 text-center",children:"Inserting at index 2 shifts C and D to the right; deleting would shift them left."})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[300ms] space-y-6",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"💻 Implementing operations"}),e.jsx(r,{title:"Example 1: Linear search",initialCode:i}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 -mt-2",children:"Returns the first index where the value is found, or -1 if not present."}),e.jsx(r,{title:"Example 2: Insert at a given position",initialCode:s}),e.jsx(r,{title:"Example 3: Delete at a given position",initialCode:a})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[400ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"💡 Tips & Tricks (Professional habits)"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Always check if the array has capacity before insert"})," – otherwise you’ll overflow."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"For search, return early when found"})," – no need to continue after finding the element."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"memmove"})," for shifting"]})," – it handles overlapping memory correctly and is optimized. But for learning, manual loops are fine."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Keep track of the current number of elements separately from array size"})," – a variable ",e.jsx("code",{children:"n"})," that changes during insert/delete."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"When deleting, you don’t need to “erase” the last element"})," – just reduce ",e.jsx("code",{children:"n"}),"; the old value is ignored."]})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[500ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"⚠️ Common Pitfalls (Beginner traps)"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded",children:[e.jsx("p",{className:"font-medium",children:"Forgetting to shift in the correct direction"}),e.jsx("p",{className:"text-sm",children:"Insert: shift right starting from the end. Delete: shift left starting from the deletion point. Reversing the loop direction leads to overwriting."})]}),e.jsxs("div",{className:"p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded",children:[e.jsx("p",{className:"font-medium",children:"Not updating the size variable"}),e.jsxs("p",{className:"text-sm",children:["After insert, ",e.jsx("code",{children:"n"})," must increase; after delete, ",e.jsx("code",{children:"n"})," must decrease. Forgetting this breaks later operations."]})]}),e.jsxs("div",{className:"p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded",children:[e.jsx("p",{className:"font-medium",children:"Assuming array indices start at 1 in shift loops"}),e.jsx("p",{className:"text-sm",children:"When shifting from position p, the loop must go from p to n-1 (or n-2) correctly."})]})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[600ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"✅ Best Practices (Write clean, safe code)"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsx("li",{children:"Encapsulate each operation in a function – this makes the code reusable and easier to test."}),e.jsx("li",{children:"Pass both the array and the current size (and capacity for insert) to functions."}),e.jsxs("li",{children:["Validate indices: ",e.jsx("code",{children:"if (pos < 0 || pos >= n) return error;"})," and for insert also check ",e.jsx("code",{children:"n < capacity"}),"."]}),e.jsxs("li",{children:["Use meaningful variable names: ",e.jsx("code",{children:"current_size"}),", ",e.jsx("code",{children:"capacity"}),", ",e.jsx("code",{children:"position"}),"."]}),e.jsx("li",{children:"Consider returning a status code (success/failure) instead of modifying a global variable."})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[700ms] p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded",children:[e.jsx("h2",{className:"text-xl font-medium mb-2",children:"📋 Mini Checklist – What to remember"}),e.jsxs("ul",{className:"list-check list-inside space-y-1",children:[e.jsx("li",{children:"✔️ Search: linear scan – O(n) time."}),e.jsx("li",{children:"✔️ Insert: shift right from end to position – O(n)."}),e.jsx("li",{children:"✔️ Delete: shift left from position+1 to end – O(n)."}),e.jsx("li",{children:"✔️ Always maintain a separate size variable."}),e.jsx("li",{children:"✔️ Check bounds and capacity before operations."})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[800ms] p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded",children:[e.jsx("h2",{className:"text-xl font-medium mb-2",children:"🤔 Hint – Think like a programmer"}),e.jsx("p",{className:"italic",children:"“When you insert at position 2, why must you shift from the last element backwards? Try shifting forward from position 2 and see what happens to the element at position 3.”"}),e.jsxs("p",{className:"italic mt-2",children:["In Example 2, modify the loop direction to ",e.jsx("code",{children:"for (int i = pos; i < n; i++)"})," and observe the result."]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[900ms] p-6 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded transition-all duration-300 hover:shadow-lg",children:[e.jsx("h2",{className:"text-xl font-medium mb-2",children:"🧑‍🏫 Teacher's Note – Sukanta Hui"}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Sukanta Hui"})," (email: ",e.jsx("a",{href:"mailto:sukantahui@codernaccotax.co.in",className:"underline",children:"sukantahui@codernaccotax.co.in"}),", mobile: 7003756860) has been teaching programming for ",e.jsxs("strong",{children:[t," years"]})," (since 1998). His expertise spans Programming Languages, RDBMS, Operating Systems, and Web Development."]}),e.jsxs("p",{className:"mt-2",children:["💬 “At ",e.jsx("strong",{children:"Naihati CNAT"}),", I use a physical strip of paper with boxes drawn on it. To insert a new box in the middle, we cut and slide – that’s exactly what the computer does. Students remember the ‘paper cutting’ analogy forever.”"]}),e.jsxs("p",{className:"mt-2",children:["🔍 ",e.jsx("strong",{children:"Point to remember:"})," Insert and delete are expensive for arrays because they require shifting many elements. That’s why other structures (linked lists) exist. But for small arrays or when order matters, shifting is fine."]})]})]})]})]})};export{m as default};
