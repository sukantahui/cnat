import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as r}from"./CFileLoader-DjboCeUK.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./CodeBlock-XVn6myHE.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";import"./EditableCCodeBlock-CUsyyczB.js";import"./vendor-monaco-Bv7hoEkV.js";const i=`#include <stdio.h>\r
\r
/**\r
 * SearchingAlgorithmsDemo.c\r
 * Demonstrates Linear Search O(n) on unsorted data vs\r
 * Binary Search O(log n) on sorted data with step counters.\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
// 1. Linear Search: Works on unsorted or sorted arrays (Time: O(n))\r
int linearSearch(const int arr[], int size, int target, int *comparisonCount) {\r
    *comparisonCount = 0;\r
    for (int i = 0; i < size; i++) {\r
        (*comparisonCount)++;\r
        if (arr[i] == target) {\r
            return i; // Found at index i\r
        }\r
    }\r
    return -1; // Target not found\r
}\r
\r
// 2. Binary Search: Requires array to be sorted in ascending order (Time: O(log n))\r
int binarySearch(const int arr[], int size, int target, int *comparisonCount) {\r
    int low = 0;\r
    int high = size - 1;\r
    *comparisonCount = 0;\r
\r
    while (low <= high) {\r
        (*comparisonCount)++;\r
        // Prevent integer overflow with low + (high - low) / 2\r
        int mid = low + (high - low) / 2;\r
\r
        if (arr[mid] == target) {\r
            return mid; // Target found at index mid\r
        }\r
        if (arr[mid] < target) {\r
            low = mid + 1; // Search right half\r
        } else {\r
            high = mid - 1; // Search left half\r
        }\r
    }\r
    return -1; // Target not found\r
}\r
\r
int main(void) {\r
    // Sorted array of student roll numbers\r
    int rolls[] = {102, 108, 115, 120, 134, 142, 150, 168, 175, 190, 205, 220};\r
    int n = sizeof(rolls) / sizeof(rolls[0]);\r
    int target = 175;\r
    int comparisons = 0;\r
\r
    printf("====================================================\\n");\r
    printf(" Searching Algorithms: Linear Search vs Binary Search\\n");\r
    printf(" Coder & AccoTax | Educator: Sukanta Hui\\n");\r
    printf("====================================================\\n\\n");\r
\r
    printf("Dataset: [ ");\r
    for (int i = 0; i < n; i++) printf("%d ", rolls[i]);\r
    printf("] (Size: %d)\\n\\n", n);\r
\r
    // Linear Search Execution\r
    printf("🔍 1. Running Linear Search for Roll #%d...\\n", target);\r
    int idxLinear = linearSearch(rolls, n, target, &comparisons);\r
    if (idxLinear != -1) {\r
        printf("   ✓ Found at index [%d] in %d comparisons (Time: O(n))\\n\\n", idxLinear, comparisons);\r
    } else {\r
        printf("   ✗ Not found after %d comparisons\\n\\n", comparisons);\r
    }\r
\r
    // Binary Search Execution\r
    printf("⚡ 2. Running Binary Search for Roll #%d...\\n", target);\r
    int idxBinary = binarySearch(rolls, n, target, &comparisons);\r
    if (idxBinary != -1) {\r
        printf("   ✓ Found at index [%d] in %d comparisons (Time: O(log n))\\n\\n", idxBinary, comparisons);\r
    } else {\r
        printf("   ✗ Not found after %d comparisons\\n\\n", comparisons);\r
    }\r
\r
    // Benchmark search on element not in dataset\r
    target = 999;\r
    printf("🔎 3. Worst-Case Search (Missing Element #%d):\\n", target);\r
    linearSearch(rolls, n, target, &comparisons);\r
    printf("   • Linear Search required: %d comparisons (Full array scan)\\n", comparisons);\r
    binarySearch(rolls, n, target, &comparisons);\r
    printf("   • Binary Search required: %d comparisons (Logarithmic tree halving)\\n", comparisons);\r
\r
    return 0;\r
}\r
`,s=[{question:"What is Linear Search and what are its best and worst case time complexities?",shortAnswer:"Linear Search checks every element sequentially. Best Case: O(1) (found at index 0); Worst/Average Case: O(n).",explanation:"Linear search starts from index 0 and compares each element with the target value until found or until the array terminates.",hint:"Sequential check from first to last.",level:"basic"},{question:"What is the mandatory prerequisite for executing Binary Search on an array?",shortAnswer:"The array elements MUST be sorted in either ascending or descending order.",explanation:"Binary search relies on order to determine whether the target lies in the left half or right half of the current interval.",hint:"Sorted sequence is mandatory.",level:"basic"},{question:"What is the time complexity of Binary Search in best, average, and worst cases?",shortAnswer:"Best Case: O(1) (target is middle element); Average & Worst Case: O(log2 n).",explanation:"Because each comparison cuts the remaining search space exactly in half, an array of 1,000,000 elements requires at most ~20 comparisons (log2(1000000) ≈ 19.93).",hint:"Logarithmic halving: O(log n).",level:"basic"},{question:"Why should we calculate mid as low + (high - low) / 2 instead of (low + high) / 2?",shortAnswer:"To prevent potential integer overflow when low and high are very large integers.",explanation:"If (low + high) exceeds 2,147,483,647 (INT_MAX), it wraps around to a negative number, causing an invalid memory access or segmentation fault.",hint:"Prevents INT_MAX integer overflow.",level:"intermediate",codeExample:"int mid = low + (high - low) / 2; // Safe from integer overflow"},{question:"How many comparisons does Binary Search need for an array of size 1024 in the worst case?",shortAnswer:"11 comparisons (log2(1024) + 1 = 10 + 1 = 11).",explanation:"At each step: 1024 -> 512 -> 256 -> 128 -> 64 -> 32 -> 16 -> 8 -> 4 -> 2 -> 1 -> done.",hint:"2^10 = 1024.",level:"basic"},{question:"When is Linear Search preferable over Binary Search?",shortAnswer:"When the array is unsorted, very small (n < 10), or only searched once.",explanation:"Sorting an unsorted array takes O(n log n) time. If you only search once, doing Linear Search O(n) is faster than Sorting + Binary Search.",hint:"One-off search on unsorted data.",level:"intermediate"},{question:"How do you implement Binary Search recursively in C?",shortAnswer:"Pass low and high indices; call binarySearch(arr, low, mid - 1, key) or (arr, mid + 1, high, key).",explanation:"The base condition is if (low > high) return -1;. Each recursive call handles a halved range on the call stack.",hint:"Base case: low > high.",level:"intermediate",codeExample:`int binarySearchRec(int arr[], int low, int high, int key) {
    if (low > high) return -1;
    int mid = low + (high - low) / 2;
    if (arr[mid] == key) return mid;
    if (arr[mid] > key) return binarySearchRec(arr, low, mid - 1, key);
    return binarySearchRec(arr, mid + 1, high, key);
}`},{question:"What is the space complexity of iterative vs recursive Binary Search in C?",shortAnswer:"Iterative: O(1) auxiliary space; Recursive: O(log n) stack frame space.",explanation:"Iterative search modifies loop variables without extra stack allocations. Recursive search places log2 n function frames on the stack.",hint:"Iterative uses constant memory; recursion uses stack frames.",level:"intermediate"},{question:"How do you find the first occurrence (lower bound) of a duplicate element using Binary Search?",shortAnswer:"When arr[mid] == target, save mid and continue searching in the left half (high = mid - 1).",explanation:"Do not stop immediately at the first match. Keep narrowing high = mid - 1 until the search interval collapses.",hint:"high = mid - 1 on match to find leftmost duplicate.",level:"advanced"},{question:"How do you find the last occurrence (upper bound) of a duplicate element using Binary Search?",shortAnswer:"When arr[mid] == target, save mid and continue searching in the right half (low = mid + 1).",explanation:"Setting low = mid + 1 pushes the search boundary towards higher indices to locate the rightmost instance.",hint:"low = mid + 1 on match to find rightmost duplicate.",level:"advanced"},{question:"What is Sentinel Linear Search and how does it optimize standard linear search?",shortAnswer:"It places the search key at the end of the array to eliminate the loop boundary condition (i < n).",explanation:"Saves one comparison per iteration by only testing arr[i] == target inside the loop.",hint:"Places target at arr[n-1] to remove boundary check.",level:"advanced"},{question:"What standard C library function implements Binary Search?",shortAnswer:"bsearch() defined in <stdlib.h>.",explanation:"bsearch() takes a key, array pointer, element count, element size, and a comparator function pointer.",hint:"bsearch() in stdlib.h.",level:"intermediate",codeExample:`#include <stdlib.h>
int *res = bsearch(&key, arr, n, sizeof(int), compareInts);`},{question:"What is Ternary Search and how does its complexity compare to Binary Search?",shortAnswer:"Ternary Search splits the array into three parts (2 mid points) with O(log3 n) comparisons.",explanation:"Although log3 n has fewer recursive levels, it performs 2 comparisons per level (total ~4 log3 n vs ~2 log2 n), making it slightly slower than Binary Search in practice.",hint:"Divides space into three parts using mid1 and mid2.",level:"advanced"},{question:"How do you search for an element in a 2D sorted matrix (sorted row-wise and column-wise)?",shortAnswer:"Start at the top-right corner (or bottom-left) in O(rows + cols) time.",explanation:"If current element > target, move left (col--). If current element < target, move down (row++).",hint:"Top-right staircase search in O(M + N).",level:"advanced"},{question:"What is the return value of Linear Search or Binary Search when the target element is missing?",shortAnswer:"Conventionally -1 (an invalid array index).",explanation:"Because valid array indices in C range from 0 to n - 1, returning -1 unambiguously signals a missing key.",hint:"Sentinel value -1 indicates not found.",level:"basic"},{question:"Can Binary Search be applied to a Singly Linked List effectively?",shortAnswer:"No, because linked lists do not support O(1) random access to the middle node.",explanation:"Finding the middle node of a linked list takes O(n) time, destroying the O(log n) efficiency.",hint:"Lack of constant-time indexing ruins logarithmic speed.",level:"intermediate"},{question:"What is Exponential Search and when is it useful?",shortAnswer:"Finding a range [2^(k-1), 2^k] where target exists, then applying Binary Search.",explanation:"Useful for unbounded (infinite) arrays or streaming data where the array length is unknown beforehand.",hint:"Doubling step search followed by binary search.",level:"advanced"},{question:"What is Interpolation Search and what is its average time complexity on uniformly distributed data?",shortAnswer:"Interpolation Search predicts probe position using numerical value interpolation in O(log log n) time.",explanation:"Like searching for a name starting with 'Z' near the back of a physical telephone directory instead of the middle.",hint:"O(log log n) probe on uniform distribution.",level:"advanced"},{question:"What happens in Binary Search if the array is sorted in descending order?",shortAnswer:"The branching conditions must be inverted: if (arr[mid] < target) high = mid - 1; else low = mid + 1;.",explanation:"Larger elements reside at lower indices and smaller elements reside at higher indices.",hint:"Invert low and high updates for descending order.",level:"intermediate"},{question:"How does caching affect Linear Search performance on modern CPUs?",shortAnswer:"Linear search achieves maximum CPU memory bandwidth due to hardware sequential prefetching.",explanation:"For small arrays (n < 64), linear search is often faster than binary search because all elements sit in the same L1 cache line.",hint:"Hardware prefetchers love sequential memory reads.",level:"advanced"},{question:"What is the worst-case number of comparisons in Linear Search for an array of size n?",shortAnswer:"n comparisons (when the element is at index n - 1 or absent).",explanation:"Every single element from 0 to n - 1 must be evaluated before concluding.",hint:"Evaluates all n items.",level:"basic"},{question:"How can we write a generic linear search function in C that works for any data type?",shortAnswer:"Using void* pointers, element size, and a custom comparator function pointer.",explanation:"Calculate byte offsets as (char*)base + i * elemSize and call comparator(target, currentPtr).",hint:"Generic void* + comparator pointer.",level:"advanced",codeExample:"int genericLinearSearch(const void *base, size_t n, size_t size, const void *key, int (*cmp)(const void*, const void*));"},{question:"How do you count the total occurrences of a target number in a sorted array in O(log n) time?",shortAnswer:"(lastOccurrenceIndex - firstOccurrenceIndex + 1) using two Binary Searches.",explanation:"One binary search finds the first index; second binary search finds the last index.",hint:"Upper bound minus lower bound + 1.",level:"intermediate"},{question:"What is the peak element in an array and how can it be found in O(log n)?",shortAnswer:"An element greater than its immediate neighbors. Binary search moves toward the side with the larger neighbor.",explanation:"If arr[mid] < arr[mid + 1], a peak is guaranteed to exist on the right side (low = mid + 1).",hint:"Follow the ascending slope using binary search.",level:"advanced"},{question:"Why should we avoid modifying array elements while performing a binary search?",shortAnswer:"Mutating elements breaks the sorted ordering invariant, leading to unpredictable or false negative search results.",explanation:"Binary search strictly assumes that the array remains immutable and sorted throughout the lookup.",hint:"Sorted invariant must remain undisturbed.",level:"basic"}],o=`================================================================================\r
CODER & ACCOTAX - C LANGUAGE COMPLETE ROADMAP\r
MODULE 002_005: Arrays, Matrix Operations & Searching/Sorting\r
TOPIC 2: Searching Algorithms: Linear Search vs Binary Search\r
Educator: Sukanta Hui | Center: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LINEAR SEARCH (SEQUENTIAL SEARCH)\r
--------------------------------------------------------------------------------\r
- Concept: Iterates from index 0 to n-1, comparing arr[i] with target.\r
- Prerequisite: Works on ANY array (unsorted or sorted).\r
- Time Complexity:\r
    • Best Case   : O(1) (Target is at index 0)\r
    • Worst Case  : O(n) (Target is at last index or absent)\r
    • Average Case: O(n)\r
- Space Complexity: O(1) auxiliary space.\r
\r
2. BINARY SEARCH (DIVIDE & CONQUER)\r
--------------------------------------------------------------------------------\r
- Concept: Repeatedly divides the search range in half.\r
- MANDATORY Prerequisite: Array MUST be sorted in ascending/descending order.\r
- Safe Midpoint Formula:\r
    int mid = low + (high - low) / 2;  // Avoids (low + high) integer overflow!\r
- Time Complexity:\r
    • Best Case   : O(1) (Target is at middle index)\r
    • Worst Case  : O(log2 n)\r
    • Average Case: O(log2 n)\r
- Space Complexity:\r
    • Iterative: O(1)\r
    • Recursive: O(log n) call stack frames.\r
\r
3. COMPARISON BENCHMARK (ARRAY OF 1,000,000 ELEMENTS)\r
--------------------------------------------------------------------------------\r
- Linear Search: Up to 1,000,000 comparisons.\r
- Binary Search: Maximum 20 comparisons! (log2(1000000) ≈ 19.93)\r
\r
4. BEST PRACTICES & SUMMARY CHECKLIST\r
--------------------------------------------------------------------------------\r
[✓] Use Linear Search for small (n < 15) or one-off searches on unsorted data.\r
[✓] Use Binary Search when frequent lookups are performed on sorted datasets.\r
[✓] Always calculate mid with \`low + (high - low) / 2\`.\r
[✓] Return -1 as sentinel value when target is missing.\r
================================================================================\r
`;function y(){return e.jsxs("div",{className:"mt-4 pt-2 md:pt-4 space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800 shadow-xl",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 002_005 · Topic 2"}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Algorithmic Search Foundations"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Searching Algorithms: Linear Search vs. Binary Search & Complexity Analysis"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Compare sequential linear scanning against logarithmic divide-and-conquer binary search. Master step-by-step trace mechanics, calculate best/average/worst case bounds, and understand integer overflow safeguards."})]}),e.jsxs("section",{className:"space-y-6 bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900 border-2 border-indigo-500/30 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-indigo-500/20 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300 text-xl border border-indigo-500/30",children:"🧑‍🏫"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-black text-indigo-200 tracking-tight",children:"Teacher's Corner: The Dictionary Lookup & Guessing Game"}),e.jsx("p",{className:"text-xs text-indigo-300/80",children:"Classroom discussion by Sukanta Hui (Coder & AccoTax, Barrackpore)"})]})]}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold",children:"CNAT Classroom Insight"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["In our lab, ",e.jsx("strong",{children:"Abhronila"})," and ",e.jsx("strong",{children:"Swadeep"})," were challenged to find a contact number in a telephone directory of 1,000,000 citizens in Barrackpore and Naihati."]}),e.jsxs("p",{children:["Abhronila proposed starting from page 1 and reading every single name line-by-line (",e.jsx("strong",{children:"Linear Search"}),"). If the desired person was on page 999,999, it would take hours!"]}),e.jsxs("div",{className:"p-4 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-2",children:[e.jsx("h3",{className:"font-bold text-amber-300 text-sm md:text-base",children:"📖 The Power of Logarithmic Halving (Binary Search)"}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300",children:["Because a telephone directory is already sorted alphabetically, Swadeep opened the directory exactly in the middle. Seeing that the target name starts with 'S', he instantly discarded the first 500,000 names! With each split, the remaining space halves: 1,000,000 → 500,000 → 250,000... In just ",e.jsx("strong",{children:"20 flips"})," ($2^",20," = 1,048,576$), he found the exact entry! That is the difference between $O(n)$ and $O(\\log n)$."]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Semantic Visual Diagram: Binary Search Divide-and-Conquer Trace"]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto shadow-inner",children:e.jsxs("svg",{viewBox:"0 0 920 300",className:"w-full min-w-[750px] font-sans",children:[e.jsx("text",{x:"460",y:"30",textAnchor:"middle",fill:"#38bdf8",className:"font-bold text-sm",children:"Binary Search on Target = 175 | Step-by-Step Halving Trace"}),e.jsxs("g",{transform:"translate(40, 60)",children:[e.jsx("text",{x:"0",y:"20",fill:"#f59e0b",className:"font-bold text-xs",children:"Step 1: low=0, high=11, mid=5 [142 < 175] → Search Right Half (low = 6)"}),e.jsx("rect",{x:"0",y:"30",width:"840",height:"35",rx:"6",fill:"#1e293b",stroke:"#475569"}),e.jsx("rect",{x:"350",y:"30",width:"70",height:"35",rx:"6",fill:"#e11d48",opacity:"0.6"}),e.jsx("text",{x:"385",y:"53",textAnchor:"middle",fill:"#fff",className:"font-mono text-xs font-bold",children:"142 (mid)"})]}),e.jsxs("g",{transform:"translate(40, 140)",children:[e.jsx("text",{x:"0",y:"20",fill:"#f59e0b",className:"font-bold text-xs",children:"Step 2: low=6, high=11, mid=8 [175 == 175] → MATCH FOUND! Index = 8"}),e.jsx("rect",{x:"0",y:"30",width:"420",height:"35",rx:"6",fill:"#0f172a",stroke:"#334155",opacity:"0.4"}),e.jsx("text",{x:"210",y:"53",textAnchor:"middle",fill:"#64748b",className:"text-xs",children:"Discarded Left Half (0..5)"}),e.jsx("rect",{x:"420",y:"30",width:"420",height:"35",rx:"6",fill:"#1e293b",stroke:"#38bdf8"}),e.jsx("rect",{x:"560",y:"30",width:"70",height:"35",rx:"6",fill:"#10b981"}),e.jsx("text",{x:"595",y:"53",textAnchor:"middle",fill:"#fff",className:"font-mono text-xs font-bold",children:"175 (Found!)"})]}),e.jsx("rect",{x:"40",y:"240",width:"840",height:"40",rx:"8",fill:"#1e1e2e",stroke:"#334155"}),e.jsx("text",{x:"460",y:"265",textAnchor:"middle",fill:"#34d399",className:"text-xs font-mono font-bold",children:"✓ Linear Search took 9 comparisons | Binary Search took only 2 comparisons!"})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"🔍 Deep Technical Breakdown: Algorithm Complexity Comparison"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs md:text-sm text-left border border-slate-800 rounded-xl overflow-hidden",children:[e.jsx("thead",{className:"bg-slate-800 text-sky-300 uppercase text-[11px] font-bold",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 border-b border-slate-700",children:"Algorithm"}),e.jsx("th",{className:"p-3 border-b border-slate-700",children:"Array Requirement"}),e.jsx("th",{className:"p-3 border-b border-slate-700",children:"Best Case"}),e.jsx("th",{className:"p-3 border-b border-slate-700",children:"Average Case"}),e.jsx("th",{className:"p-3 border-b border-slate-700",children:"Worst Case"}),e.jsx("th",{className:"p-3 border-b border-slate-700",children:"Space Complexity"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 text-slate-300 bg-slate-900/60",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"p-3 font-bold text-amber-300",children:"Linear Search"}),e.jsx("td",{className:"p-3",children:"Unsorted or Sorted"}),e.jsx("td",{className:"p-3 text-emerald-400 font-mono",children:"O(1)"}),e.jsx("td",{className:"p-3 text-amber-400 font-mono",children:"O(n)"}),e.jsx("td",{className:"p-3 text-rose-400 font-mono",children:"O(n)"}),e.jsx("td",{className:"p-3 font-mono",children:"O(1)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"p-3 font-bold text-emerald-400",children:"Binary Search (Iterative)"}),e.jsx("td",{className:"p-3 font-semibold text-rose-300",children:"Must Be Sorted!"}),e.jsx("td",{className:"p-3 text-emerald-400 font-mono",children:"O(1)"}),e.jsx("td",{className:"p-3 text-emerald-400 font-mono",children:"O(log n)"}),e.jsx("td",{className:"p-3 text-emerald-400 font-mono",children:"O(log n)"}),e.jsx("td",{className:"p-3 font-mono",children:"O(1)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"p-3 font-bold text-indigo-400",children:"Binary Search (Recursive)"}),e.jsx("td",{className:"p-3 font-semibold text-rose-300",children:"Must Be Sorted!"}),e.jsx("td",{className:"p-3 text-emerald-400 font-mono",children:"O(1)"}),e.jsx("td",{className:"p-3 text-emerald-400 font-mono",children:"O(log n)"}),e.jsx("td",{className:"p-3 text-emerald-400 font-mono",children:"O(log n)"}),e.jsx("td",{className:"p-3 text-amber-400 font-mono",children:"O(log n) Stack"})]})]})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: Search Algorithms Benchmark Demonstration"]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["The program below (",e.jsx("code",{children:"SearchingAlgorithmsDemo.c"}),") demonstrates both Linear and Binary search side-by-side with step comparisons counters on identical datasets."]}),e.jsx(r,{fileModule:i,title:"SearchingAlgorithmsDemo.c",editable:!1}),e.jsxs("div",{className:"mt-4 rounded-xl border border-slate-700 bg-slate-950 p-4",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:`====================================================
 Searching Algorithms: Linear Search vs Binary Search
 Coder & AccoTax | Educator: Sukanta Hui
====================================================

Dataset: [ 102 108 115 120 134 142 150 168 175 190 205 220 ] (Size: 12)

🔍 1. Running Linear Search for Roll #175...
   ✓ Found at index [8] in 9 comparisons (Time: O(n))

⚡ 2. Running Binary Search for Roll #175...
   ✓ Found at index [8] in 2 comparisons (Time: O(log n))

🔎 3. Worst-Case Search (Missing Element #999):
   • Linear Search required: 12 comparisons (Full array scan)
   • Binary Search required: 4 comparisons (Logarithmic tree halving)`})]})]}),e.jsxs("section",{className:"space-y-4 bg-rose-950/20 border border-rose-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Best Practices"]}),e.jsxs("ul",{className:"list-disc pl-5 text-sm text-slate-300 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Applying Binary Search on Unsorted Data:"})," Binary search will fail silently or return false negatives if the dataset is not strictly ordered."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Integer Overflow in Midpoint Calculation:"})," Never write ",e.jsx("code",{children:"(low + high) / 2"}),". When indices are large, their sum can exceed ",e.jsx("code",{children:"INT_MAX"}),". Always use ",e.jsx("code",{children:"low + (high - low) / 2"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Infinite Loop in Binary Search:"})," Ensure loop updates adjust boundaries strictly: ",e.jsx("code",{children:"low = mid + 1"})," or ",e.jsx("code",{children:"high = mid - 1"}),". Omitting the ",e.jsx("code",{children:"+1"})," or ",e.jsx("code",{children:"-1"})," causes an infinite loop when ",e.jsx("code",{children:"low == high"}),"."]})]})]}),e.jsxs("section",{className:"space-y-4 bg-amber-950/20 border border-amber-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"🤔"})," Think About This..."]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["If you have an unsorted array of 1,000,000 elements and you only need to perform a ",e.jsx("strong",{children:"single search"}),", is it faster to sort the array first (taking $O(n \\log n)$) and then do Binary Search, or just do a single Linear Search ($O(n)$)?",e.jsx("em",{children:"(Hint: $O(n) < O(n \\log n)$!)"})]})]}),e.jsx("section",{children:e.jsx(n,{title:"Module 002_005 Topic 2 FAQs: Searching Algorithms",questions:s})}),e.jsx("section",{children:e.jsx(t,{content:o,title:"Module 002_005 Topic 2 Printable Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 2 Note",downloadFileName:"module_002_005_topic2_note.txt"})}),e.jsx("section",{children:e.jsx(a,{note:"Always test your Binary Search with boundary conditions: searching for the first element, last element, and an element smaller than all or greater than all elements in the array! — Sukanta Hui"})})]})}export{y as default};
