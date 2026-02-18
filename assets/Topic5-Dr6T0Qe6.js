import{j as e}from"./index-BFnLuail.js";import{E as n}from"./EditableCCodeBlock-BIH-nUZ3.js";const i=`#include <stdio.h>\r
\r
// O(1) – access by index\r
int main() {\r
    int arr[1000]; // large array\r
\r
    // Fill with some values (not important)\r
    for (int i = 0; i < 1000; i++) {\r
        arr[i] = i * 2;\r
    }\r
\r
    // Accessing any element takes the same small, constant time\r
    int index = 567; // any index\r
    int value = arr[index]; // O(1) operation\r
\r
    printf("Element at index %d is %d\\n", index, value);\r
\r
    // Even if array had 1 million elements, this line would be equally fast\r
    return 0;\r
}`,t=`#include <stdio.h>\r
\r
// O(n) – linear search\r
int linearSearch(int arr[], int n, int key) {\r
    for (int i = 0; i < n; i++) { // loop runs up to n times\r
        if (arr[i] == key) {\r
            return i; // found\r
        }\r
    }\r
    return -1; // not found\r
}\r
\r
int main() {\r
    int arr[] = {10, 23, 45, 67, 89, 12, 34, 56, 78, 90};\r
    int n = sizeof(arr) / sizeof(arr[0]);\r
\r
    int key = 89;\r
    int index = linearSearch(arr, n, key);\r
    if (index != -1)\r
        printf("Found %d at index %d\\n", key, index);\r
    else\r
        printf("%d not found\\n", key);\r
\r
    // Worst case: searching for a value not in array (checks all n elements)\r
    key = 99;\r
    index = linearSearch(arr, n, key);\r
    printf("Search for %d: %d iterations (worst case O(n))\\n", key, index == -1 ? n : index);\r
\r
    return 0;\r
}`,r=`#include <stdio.h>\r
\r
// Insert at beginning: must shift all elements right – O(n)\r
int insertAtBeginning(int arr[], int *n, int capacity, int value) {\r
    if (*n >= capacity) return -1; // no space\r
\r
    // Shift all elements right by one\r
    for (int i = *n; i > 0; i--) {\r
        arr[i] = arr[i - 1];\r
    }\r
    arr[0] = value;\r
    (*n)++;\r
    return 0;\r
}\r
\r
int main() {\r
    int arr[10] = {2, 4, 6, 8, 10}; // capacity 10, size 5\r
    int n = 5;\r
\r
    printf("Before: ");\r
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\r
    printf("\\n");\r
\r
    // Insert 1 at beginning – shifts all 5 elements\r
    insertAtBeginning(arr, &n, 10, 1);\r
    printf("After inserting 1 at beginning: ");\r
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\r
    printf("\\n");\r
\r
    // The shifting operation cost grows with n – that's O(n)\r
    return 0;\r
}`,a=`
  @keyframes fade-slide-up {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
`,m=()=>{const s=new Date().getFullYear()-1998;return e.jsxs("div",{className:"dark",style:{backgroundColor:"#121212"},children:[" ",e.jsx("style",{children:a}),e.jsxs("div",{className:"max-w-4xl mx-auto p-6 space-y-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:[e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate",children:[e.jsx("h1",{className:"text-4xl font-light tracking-tight leading-tight",children:"Topic 5: Time complexity of array operations"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 mt-2 leading-relaxed",children:"How fast (or slow) array operations run, and why it matters when your data grows."})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[100ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"⏱️ What is time complexity?"}),e.jsxs("p",{className:"leading-relaxed",children:["Time complexity describes how the runtime of an algorithm grows as the input size (",e.jsx("code",{children:"n"}),") increases. We use ",e.jsx("strong",{children:"Big‑O notation"})," to express the upper bound (worst‑case). For arrays:"]}),e.jsxs("ul",{className:"list-disc list-inside mt-4 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Access by index"})," – O(1): constant time, because it's just base + offset."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Search (unsorted)"})," – O(n): must check each element until found (linear)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Insert at beginning/middle"})," – O(n): shifting elements takes time proportional to the number of elements after the insertion point."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Delete at beginning/middle"})," – O(n): shifting left is also linear."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Insert/delete at end (if capacity available)"})," – O(1): no shifting."]})]}),e.jsxs("div",{className:"mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded",children:[e.jsx("p",{className:"text-sm font-medium",children:"🏫 Real‑world analogy:"}),e.jsxs("p",{className:"text-sm mt-1",children:["At ",e.jsx("strong",{children:"Barrackpore CNAT"}),", finding a student by roll number (index) is instant (O(1)). Finding by name (search) might require asking each student until you find the right one – if there are 100 students, worst case you ask 100. That’s O(n)."]})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[200ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"📈 Complexity growth"}),e.jsx("div",{className:"flex justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-xl transition-all duration-300 hover:shadow-xl",children:e.jsxs("svg",{width:"400",height:"200",viewBox:"0 0 400 200",className:"max-w-full h-auto",children:[e.jsx("line",{x1:"40",y1:"180",x2:"360",y2:"180",stroke:"#888",strokeWidth:"1"}),e.jsx("line",{x1:"40",y1:"180",x2:"40",y2:"40",stroke:"#888",strokeWidth:"1"}),e.jsx("text",{x:"360",y:"170",fill:"#888",fontSize:"10",children:"n (size)"}),e.jsx("text",{x:"20",y:"40",fill:"#888",fontSize:"10",transform:"rotate(-90 20,40)",children:"time"}),e.jsx("line",{x1:"40",y1:"100",x2:"360",y2:"100",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"300",y:"90",fill:"#10b981",fontSize:"10",children:"O(1) access"}),e.jsx("line",{x1:"40",y1:"180",x2:"360",y2:"40",stroke:"#ef4444",strokeWidth:"2",strokeDasharray:"4 2"}),e.jsx("text",{x:"280",y:"60",fill:"#ef4444",fontSize:"10",children:"O(n) search/insert/delete"})]})}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2 text-center",children:"O(1) is flat; O(n) grows linearly. For large n, the difference is huge."})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[300ms] space-y-6",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"💻 Complexity in code"}),e.jsx(n,{title:"Example 1: O(1) – Access by index",initialCode:i}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 -mt-2",children:"No loops, just direct calculation – time is constant regardless of array size."}),e.jsx(n,{title:"Example 2: O(n) – Linear search",initialCode:t}),e.jsx(n,{title:"Example 3: O(n) – Insert at beginning (requires shift)",initialCode:r})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[400ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"💡 Tips & Tricks (Professional habits)"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Always consider the dominant operation"})," – a loop inside a loop is O(n²), which can be too slow for large n."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"When inserting/deleting many elements, consider if order matters"})," – if not, swap with last element (O(1)) instead of shifting."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"sizeof"})," to compute n only once"]})," – avoid calling it repeatedly inside loops (though it's constant time anyway)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Big‑O ignores constants and lower terms"})," – O(2n) is still O(n). Focus on growth rate."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Space complexity also matters"})," – arrays use contiguous memory, which is cache‑friendly (good for speed)."]})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[500ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"⚠️ Common Pitfalls (Beginner traps)"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded",children:[e.jsx("p",{className:"font-medium",children:"Assuming all operations are O(1)"}),e.jsx("p",{className:"text-sm",children:"New programmers often think “array” and assume everything is fast. But inserting at the front is expensive."})]}),e.jsxs("div",{className:"p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded",children:[e.jsx("p",{className:"font-medium",children:"Confusing best‑case with average‑case"}),e.jsx("p",{className:"text-sm",children:"Linear search best case is O(1) (first element), but we usually care about worst or average."})]}),e.jsxs("div",{className:"p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded",children:[e.jsxs("p",{className:"font-medium",children:["Ignoring hidden loops (e.g., ",e.jsx("code",{children:"strlen"})," inside loop condition)"]}),e.jsxs("p",{className:"text-sm",children:[e.jsx("code",{children:"for (i=0; i<strlen(s); i++)"})," – strlen is O(n) itself, making the whole loop O(n²)."]})]})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[600ms]",children:[e.jsx("h2",{className:"text-2xl font-medium mb-4",children:"✅ Best Practices (Write efficient code)"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsx("li",{children:"If you need frequent insertions/deletions at arbitrary positions, consider a different data structure (linked list, tree)."}),e.jsx("li",{children:"For search in sorted arrays, use binary search (O(log n)) – but that’s a future topic."}),e.jsx("li",{children:"When analyzing code, count the number of operations relative to input size."}),e.jsx("li",{children:"Use profiling tools to verify complexity in practice for large inputs."}),e.jsx("li",{children:"Remember that time complexity is about growth, not absolute speed – an O(n) algorithm might be faster than an O(1) one for small n due to overhead."})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[700ms] p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded",children:[e.jsx("h2",{className:"text-xl font-medium mb-2",children:"📋 Mini Checklist – What to remember"}),e.jsxs("ul",{className:"list-check list-inside space-y-1",children:[e.jsx("li",{children:"✔️ Access by index: O(1)."}),e.jsx("li",{children:"✔️ Search (unsorted): O(n)."}),e.jsx("li",{children:"✔️ Insert/delete at arbitrary position: O(n)."}),e.jsx("li",{children:"✔️ Insert/delete at end: O(1) if capacity allows."}),e.jsx("li",{children:"✔️ Always think about worst‑case growth."})]})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[800ms] p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded",children:[e.jsx("h2",{className:"text-xl font-medium mb-2",children:"🤔 Hint – Think like a programmer"}),e.jsx("p",{className:"italic",children:"“If you have to insert 1000 elements at the beginning of an array of size 1000, how many shifts occur in total? (Hint: each insertion shifts all existing elements.) That’s why arrays aren’t ideal for that use case.”"}),e.jsx("p",{className:"italic mt-2",children:"Try running Example 2 with a very large array and measure the time difference between finding the first element vs the last."})]}),e.jsxs("section",{className:"animate-[fade-slide-up_0.6s_ease-out] motion-safe:animate animation-delay-[900ms] p-6 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded transition-all duration-300 hover:shadow-lg",children:[e.jsx("h2",{className:"text-xl font-medium mb-2",children:"🧑‍🏫 Teacher's Note – Sukanta Hui"}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Sukanta Hui"})," (email: ",e.jsx("a",{href:"mailto:sukantahui@codernaccotax.co.in",className:"underline",children:"sukantahui@codernaccotax.co.in"}),", mobile: 7003756860) has been teaching programming for ",e.jsxs("strong",{children:[s," years"]})," (since 1998). His expertise spans Programming Languages, RDBMS, Operating Systems, and Web Development."]}),e.jsxs("p",{className:"mt-2",children:["💬 “At ",e.jsx("strong",{children:"Naihati CNAT"}),", I ask: ‘If you have 1,000 books on a shelf and I ask for the 5th book, how long does it take? Same as if you had 1,000,000 books – you just count to 5. That’s O(1). But if I ask you to find a book by title, you might have to scan all of them – that’s O(n).’”"]}),e.jsxs("p",{className:"mt-2",children:["🔍 ",e.jsx("strong",{children:"Point to remember:"})," Complexity analysis is about scalability. An algorithm that’s fine for 100 items might be unusable for 1,000,000. Always design with the expected data size in mind."]})]})]})]})]})};export{m as default};
