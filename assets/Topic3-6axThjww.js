import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as t}from"./CFileLoader-DjboCeUK.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./CodeBlock-XVn6myHE.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";import"./EditableCCodeBlock-CUsyyczB.js";import"./vendor-monaco-Bv7hoEkV.js";const i=`#include <stdio.h>\r
#include <string.h>\r
\r
/**\r
 * SortingAlgorithmsDemo.c\r
 * Demonstrates Bubble Sort (with early-exit flag), Selection Sort (min index tracking),\r
 * and Insertion Sort (shifting) with step-by-step pass logging.\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
void printArray(const char *label, const int arr[], int n) {\r
    printf("%-20s: [ ", label);\r
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\r
    printf("]\\n");\r
}\r
\r
// 1. Optimized Bubble Sort: Repeatedly swaps adjacent out-of-order elements\r
void bubbleSort(int arr[], int n) {\r
    int passes = 0, swaps = 0;\r
    for (int i = 0; i < n - 1; i++) {\r
        int swapped = 0;\r
        passes++;\r
        for (int j = 0; j < n - 1 - i; j++) {\r
            if (arr[j] > arr[j + 1]) {\r
                int temp = arr[j];\r
                arr[j] = arr[j + 1];\r
                arr[j + 1] = temp;\r
                swapped = 1;\r
                swaps++;\r
            }\r
        }\r
        // If no two elements were swapped in inner loop, array is already sorted!\r
        if (!swapped) break;\r
    }\r
    printf("   ↳ Bubble Sort finished in %d passes (%d swaps)\\n", passes, swaps);\r
}\r
\r
// 2. Selection Sort: Finds minimum in unsorted subarray and swaps to current index\r
void selectionSort(int arr[], int n) {\r
    int swaps = 0;\r
    for (int i = 0; i < n - 1; i++) {\r
        int minIdx = i;\r
        for (int j = i + 1; j < n; j++) {\r
            if (arr[j] < arr[minIdx]) {\r
                minIdx = j;\r
            }\r
        }\r
        if (minIdx != i) {\r
            int temp = arr[i];\r
            arr[i] = arr[minIdx];\r
            arr[minIdx] = temp;\r
            swaps++;\r
        }\r
    }\r
    printf("   ↳ Selection Sort finished with %d swaps (Min-index selection)\\n", swaps);\r
}\r
\r
// 3. Insertion Sort: Inserts each element into its correct sorted position by shifting\r
void insertionSort(int arr[], int n) {\r
    int shifts = 0;\r
    for (int i = 1; i < n; i++) {\r
        int key = arr[i];\r
        int j = i - 1;\r
\r
        // Shift elements greater than key one position ahead\r
        while (j >= 0 && arr[j] > key) {\r
            arr[j + 1] = arr[j];\r
            j--;\r
            shifts++;\r
        }\r
        arr[j + 1] = key;\r
    }\r
    printf("   ↳ Insertion Sort finished with %d shifts (Card-hand insertion)\\n", shifts);\r
}\r
\r
int main(void) {\r
    int original[] = {64, 25, 12, 22, 11, 90, 45};\r
    int n = sizeof(original) / sizeof(original[0]);\r
    int copy[7];\r
\r
    printf("====================================================\\n");\r
    printf(" C Sorting Algorithms: Bubble, Selection & Insertion\\n");\r
    printf(" Coder & AccoTax | Educator: Sukanta Hui\\n");\r
    printf("====================================================\\n\\n");\r
\r
    printArray("Initial Unsorted Array", original, n);\r
    printf("\\n");\r
\r
    // 1. Run Bubble Sort\r
    memcpy(copy, original, sizeof(original));\r
    bubbleSort(copy, n);\r
    printArray("Bubble Sorted", copy, n);\r
    printf("\\n");\r
\r
    // 2. Run Selection Sort\r
    memcpy(copy, original, sizeof(original));\r
    selectionSort(copy, n);\r
    printArray("Selection Sorted", copy, n);\r
    printf("\\n");\r
\r
    // 3. Run Insertion Sort\r
    memcpy(copy, original, sizeof(original));\r
    insertionSort(copy, n);\r
    printArray("Insertion Sorted", copy, n);\r
\r
    return 0;\r
}\r
`,a=[{question:"How does the Bubble Sort algorithm work in C?",shortAnswer:"Repeatedly steps through the array, compares adjacent elements, and swaps them if they are in wrong order.",explanation:"With each pass, the largest unsorted element 'bubbles up' to its final position at the end of the array. An array of size n requires up to n - 1 passes.",hint:"Adjacent pairwise comparison and bubble up.",level:"basic"},{question:"What is the best-case time complexity of an optimized Bubble Sort with a swapped flag?",shortAnswer:"O(n) linear time.",explanation:"If no swaps occur during the first pass, the flag remains 0 and the algorithm breaks out immediately, detecting that the array is already sorted.",hint:"Single pass with swapped == 0 check gives O(n).",level:"basic",codeExample:"if (!swapped) break;"},{question:"How does Selection Sort work and how many swaps does it perform?",shortAnswer:"Finds the minimum element from the unsorted subarray and swaps it with the first unsorted position.",explanation:"Selection sort performs at most n - 1 swaps in the entire sort, making it ideal when write operations to memory are expensive (e.g. Flash/EEPROM).",hint:"Minimum element selection; maximum n - 1 swaps.",level:"basic"},{question:"What is the time complexity of Selection Sort in best, average, and worst cases?",shortAnswer:"O(n^2) in ALL cases (best, average, worst).",explanation:"Selection sort always executes both nested loops to locate the minimum index, regardless of whether the array was already sorted.",hint:"Always O(n^2) comparisons.",level:"basic"},{question:"How does Insertion Sort work and what real-world analogy describes it?",shortAnswer:"Builds the sorted array one item at a time by shifting larger elements right and inserting the key in its correct spot.",explanation:"Similar to sorting playing cards in your hand: you take the next card and slide it into its proper place among previously sorted cards.",hint:"Card sorting in hand via right shifts.",level:"basic"},{question:"What is the best-case time complexity of Insertion Sort and when does it occur?",shortAnswer:"O(n) time when the input array is already sorted.",explanation:"The inner while loop condition arr[j] > key immediately evaluates to false, causing only 1 comparison and 0 shifts per outer iteration.",hint:"O(n) on sorted data.",level:"basic"},{question:"What is a 'Stable Sorting Algorithm' and which elementary sorting algorithms are stable?",shortAnswer:"A sort is stable if it preserves the relative order of duplicate keys. Bubble Sort and Insertion Sort are stable; Selection Sort is unstable.",explanation:"Selection sort can jump a minimum element across identical elements, disturbing their original order.",hint:"Maintains relative order of equal elements.",level:"intermediate"},{question:"What is an 'In-Place Sorting Algorithm'?",shortAnswer:"An algorithm that sorts the array using only O(1) auxiliary memory beyond the input array.",explanation:"Bubble Sort, Selection Sort, and Insertion Sort all operate in-place with O(1) extra space.",hint:"O(1) extra memory requirement.",level:"basic"},{question:"Why is Insertion Sort preferred for small arrays or nearly sorted streaming data?",shortAnswer:"Low constant factor overhead, O(n) best-case adaptive performance, and cache-friendly sequential shifts.",explanation:"Modern hybrid sorting algorithms like Timsort (used in Python and Java) and Introsort (in C++ std::sort) use Insertion Sort for subarrays with n < 16.",hint:"Extremely fast on small and almost-sorted datasets.",level:"intermediate"},{question:"How many total comparisons are performed in standard Bubble Sort for an array of size n in worst case?",shortAnswer:"n(n - 1) / 2 comparisons.",explanation:"Pass 1: (n-1), Pass 2: (n-2)... Pass n-1: 1. Sum = n(n-1)/2, which is O(n^2).",hint:"Sum of integers from 1 to n - 1.",level:"basic"},{question:"How do you sort an array of student structs based on marks in descending order using Bubble Sort?",shortAnswer:"Compare s[j].marks < s[j + 1].marks and swap the entire struct.",explanation:"Inverting the comparison operator from > to < sorts the array in descending order.",hint:"Use < for descending sort.",level:"intermediate",codeExample:`if (students[j].marks < students[j + 1].marks) {
    Student temp = students[j];
    students[j] = students[j + 1];
    students[j + 1] = temp;
}`},{question:"What is the standard C library sorting function and how is it invoked?",shortAnswer:"qsort() from <stdlib.h> using a custom comparator function pointer.",explanation:"qsort(array, elementCount, elementSize, compareFunction);",hint:"qsort() in stdlib.h.",level:"intermediate",codeExample:`int cmp(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);
}
qsort(arr, n, sizeof(int), cmp);`},{question:"Why does Selection Sort perform fewer write/swap operations than Bubble Sort?",shortAnswer:"Selection sort performs at most 1 swap per outer pass, whereas Bubble Sort may perform up to n - 1 swaps per pass.",explanation:"Bubble sort swaps immediately upon every out-of-order pair; Selection sort tracks only the minimum index and swaps once per pass.",hint:"1 swap per outer loop vs continuous swaps.",level:"intermediate"},{question:"What is Cocktail Shaker Sort (Bidirectional Bubble Sort)?",shortAnswer:"A variation of Bubble Sort that traverses the array in alternating directions (left-to-right then right-to-left).",explanation:"Solves the 'turtles' problem where small values near the end of the array take many passes to move to the front.",hint:"Bidirectional passes.",level:"advanced"},{question:"How does Shell Sort improve upon basic Insertion Sort?",shortAnswer:"By comparing and sorting elements separated by a diminishing gap sequence before finishing with gap = 1.",explanation:"Allows elements to take large leaps towards their final positions early on, breaking the O(n^2) barrier down to O(n^(4/3)) or O(n log^2 n).",hint:"Gap-based diminishing increment sort.",level:"advanced"},{question:"What is the worst-case input configuration for standard Insertion Sort?",shortAnswer:"An array sorted in strictly reverse (descending) order.",explanation:"Every new element key must shift past all i previously inspected elements, requiring maximum n(n-1)/2 shifts.",hint:"Reverse sorted array.",level:"basic"},{question:"Can Bubble Sort be implemented using recursion in C?",shortAnswer:"Yes. One pass moves the largest element to end; recursive call is made with size n - 1.",explanation:"Base case is if (n == 1) return;. Recursive step runs inner loop for size n - 1.",hint:"Recursive call with reduced size n - 1.",level:"intermediate"},{question:"What is the auxiliary space complexity of Bubble Sort, Selection Sort, and Insertion Sort?",shortAnswer:"O(1) auxiliary space (only a temporary swap variable).",explanation:"All three algorithms sort elements directly in the existing array memory buffer.",hint:"Constant memory overhead.",level:"basic"},{question:"How do you count the number of inversions in an array?",shortAnswer:"Count pairs (i, j) where i < j and arr[i] > arr[j]. Each swap in Bubble Sort resolves exactly 1 inversion.",explanation:"The total number of swaps required by Bubble Sort equals the exact inversion count of the array.",hint:"Swaps in bubble sort equal inversion count.",level:"advanced"},{question:"Why is Quick Sort or Merge Sort preferred over Bubble/Selection Sort for large arrays (n > 10,000)?",shortAnswer:"O(n log n) algorithms scale dramatically better than O(n^2).",explanation:"For n = 1,000,000: O(n^2) = 1,000,000,000,000 operations (~hours); O(n log n) = ~20,000,000 operations (~milliseconds).",hint:"O(n log n) vs O(n^2) scaling.",level:"basic"},{question:"How do you sort an array of strings alphabetically in C using Bubble Sort?",shortAnswer:"Compare adjacent strings using strcmp(arr[j], arr[j+1]) > 0 and swap string pointers or buffers.",explanation:"strcmp returns > 0 when the first string is lexicographically greater than the second.",hint:"Use strcmp() for string comparison.",level:"intermediate",codeExample:`if (strcmp(names[j], names[j + 1]) > 0) {
    char temp[50];
    strcpy(temp, names[j]);
    strcpy(names[j], names[j + 1]);
    strcpy(names[j + 1], temp);
}`},{question:"What is a 'Pass' in sorting algorithms?",shortAnswer:"One complete traversal of the active subarray during which elements are compared and relocated.",explanation:"In Bubble and Selection sort, each pass places at least one element into its final sorted position.",hint:"One complete iteration of the outer loop.",level:"basic"},{question:"What is Binary Insertion Sort and how does it optimize Insertion Sort?",shortAnswer:"It uses Binary Search instead of linear scanning to find the insertion index for key in O(log n) comparisons.",explanation:"Reduces comparison count from O(n^2) to O(n log n), though element shifting still requires O(n^2) data moves.",hint:"Binary search for insertion position.",level:"advanced"},{question:"What is the worst-case number of swaps in Selection Sort for an array of size n?",shortAnswer:"n - 1 swaps.",explanation:"The outer loop runs n - 1 times, and at most 1 swap occurs per iteration.",hint:"At most n - 1 swaps.",level:"basic"},{question:"Why should we avoid writing our own O(n^2) sorting algorithms in production systems code?",shortAnswer:"Standard library qsort() is heavily optimized, handles edge cases, and scales at O(n log n).",explanation:"Elementary sorts should only be used for small arrays, embedded systems with strict RAM constraints, or educational conceptual understanding.",hint:"Use qsort() for production.",level:"basic"}],o=`================================================================================\r
CODER & ACCOTAX - C LANGUAGE COMPLETE ROADMAP\r
MODULE 002_005: Arrays, Matrix Operations & Searching/Sorting\r
TOPIC 3: Sorting Algorithms: Bubble Sort, Selection Sort & Insertion Sort\r
Educator: Sukanta Hui | Center: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BUBBLE SORT (ADJACENT SWAPPING)\r
--------------------------------------------------------------------------------\r
- Logic: Compares adjacent elements arr[j] and arr[j+1]; swaps if out of order.\r
- Optimization: Use a 'swapped' boolean flag. If no swaps occur in a pass, break!\r
- Complexities:\r
    • Best Case   : O(n) (Already sorted, 1 pass)\r
    • Worst Case  : O(n^2) (Reverse sorted)\r
    • Space       : O(1)\r
    • Stability   : Stable\r
\r
2. SELECTION SORT (MINIMUM EXTRACTION)\r
--------------------------------------------------------------------------------\r
- Logic: Finds the minimum element in unsorted portion; swaps it to index i.\r
- Key Advantage: Performs at most (n - 1) swaps total (useful for slow Flash memory).\r
- Complexities:\r
    • Best / Worst / Average: O(n^2) (Always tests all pairs)\r
    • Space       : O(1)\r
    • Stability   : Unstable\r
\r
3. INSERTION SORT (CARD INSERTION & SHIFTING)\r
--------------------------------------------------------------------------------\r
- Logic: Takes key arr[i], shifts larger elements to right, inserts key.\r
- Key Advantage: Extremely fast for small (n < 16) or nearly sorted datasets.\r
- Complexities:\r
    • Best Case   : O(n) (Already sorted)\r
    • Worst Case  : O(n^2) (Reverse sorted)\r
    • Space       : O(1)\r
    • Stability   : Stable\r
\r
4. COMPARISON QUICK REFERENCE TABLE\r
--------------------------------------------------------------------------------\r
Algorithm       Best        Average     Worst       Swaps       Stable?\r
Bubble Sort     O(n)        O(n^2)      O(n^2)      O(n^2)      Yes\r
Selection Sort  O(n^2)      O(n^2)      O(n^2)      O(n)        No\r
Insertion Sort  O(n)        O(n^2)      O(n^2)      O(n^2)      Yes\r
================================================================================\r
`;function g(){return e.jsxs("div",{className:"mt-4 pt-2 md:pt-4 space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800 shadow-xl",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 002_005 · Topic 3"}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Elementary Sorting Paradigms"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Sorting Algorithms in C: Bubble Sort, Selection Sort & Insertion Sort"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Master the mechanics of fundamental $O(n^2)$ sorting routines. Trace pass-by-pass data swaps, analyze time/space complexities, explore stability, and understand early-exit optimizations."})]}),e.jsxs("section",{className:"space-y-6 bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900 border-2 border-indigo-500/30 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-indigo-500/20 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300 text-xl border border-indigo-500/30",children:"🧑‍🏫"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-black text-indigo-200 tracking-tight",children:"Teacher's Corner: The 3 Daily Life Sorting Paradigms"}),e.jsx("p",{className:"text-xs text-indigo-300/80",children:"Classroom discussion by Sukanta Hui (Coder & AccoTax, Barrackpore)"})]})]}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold",children:"CNAT Classroom Insight"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["When ",e.jsx("strong",{children:"Swadeep"})," and ",e.jsx("strong",{children:"Tuhina"})," were organizing lab exam report cards at our Barrackpore center, ",e.jsx("strong",{children:"Sukanta Hui"})," demonstrated the three natural ways humans sort objects:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs",children:[e.jsxs("div",{className:"p-4 bg-slate-950/90 rounded-2xl border border-sky-500/30 space-y-2",children:[e.jsx("span",{className:"text-sky-300 font-bold text-sm block",children:"1. Bubble Sort (Water Bubble):"}),e.jsx("p",{className:"text-slate-300",children:"You walk along the row, comparing adjacent cards. If a heavy card is ahead of a lighter card, swap them. After one pass, the heaviest card bubbles to the rightmost edge!"})]}),e.jsxs("div",{className:"p-4 bg-slate-950/90 rounded-2xl border border-emerald-500/30 space-y-2",children:[e.jsx("span",{className:"text-emerald-300 font-bold text-sm block",children:"2. Selection Sort (Talent Scout):"}),e.jsx("p",{className:"text-slate-300",children:"Scan the entire unorganized pile to spot the single smallest number. Pick it up and swap it directly into position 0. Then scan the rest for the next minimum!"})]}),e.jsxs("div",{className:"p-4 bg-slate-950/90 rounded-2xl border border-purple-500/30 space-y-2",children:[e.jsx("span",{className:"text-purple-300 font-bold text-sm block",children:"3. Insertion Sort (Playing Cards):"}),e.jsx("p",{className:"text-slate-300",children:"Hold sorted cards in your left hand. Pick a new card from the table, shift the larger cards to the right, and slide the new card into its exact slot!"})]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Semantic Visual Diagram: Bubble Sort Pass 1 Execution"]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto shadow-inner",children:e.jsxs("svg",{viewBox:"0 0 920 280",className:"w-full min-w-[750px] font-sans",children:[e.jsx("text",{x:"460",y:"30",textAnchor:"middle",fill:"#38bdf8",className:"font-bold text-sm",children:"Bubble Sort Pass 1: [64, 25, 12, 22, 11] → Largest Element 64 Bubbles to End"}),e.jsxs("g",{transform:"translate(60, 60)",children:[e.jsx("text",{x:"0",y:"20",fill:"#f59e0b",className:"text-xs font-bold",children:"Step 1: 64 > 25 → Swap!"}),e.jsx("rect",{x:"0",y:"30",width:"45",height:"40",rx:"6",fill:"#e11d48"}),e.jsx("text",{x:"22",y:"55",textAnchor:"middle",fill:"#fff",className:"font-bold text-xs",children:"25"}),e.jsx("rect",{x:"55",y:"30",width:"45",height:"40",rx:"6",fill:"#38bdf8"}),e.jsx("text",{x:"77",y:"55",textAnchor:"middle",fill:"#fff",className:"font-bold text-xs",children:"64"}),e.jsx("rect",{x:"110",y:"30",width:"45",height:"40",rx:"6",fill:"#1e293b",stroke:"#475569"}),e.jsx("text",{x:"132",y:"55",textAnchor:"middle",fill:"#94a3b8",className:"text-xs",children:"12"}),e.jsx("rect",{x:"165",y:"30",width:"45",height:"40",rx:"6",fill:"#1e293b",stroke:"#475569"}),e.jsx("text",{x:"187",y:"55",textAnchor:"middle",fill:"#94a3b8",className:"text-xs",children:"22"}),e.jsx("rect",{x:"220",y:"30",width:"45",height:"40",rx:"6",fill:"#1e293b",stroke:"#475569"}),e.jsx("text",{x:"242",y:"55",textAnchor:"middle",fill:"#94a3b8",className:"text-xs",children:"11"})]}),e.jsxs("g",{transform:"translate(360, 60)",children:[e.jsx("text",{x:"0",y:"20",fill:"#f59e0b",className:"text-xs font-bold",children:"Step 2: 64 > 12 → Swap!"}),e.jsx("rect",{x:"0",y:"30",width:"45",height:"40",rx:"6",fill:"#1e293b",stroke:"#475569"}),e.jsx("text",{x:"22",y:"55",textAnchor:"middle",fill:"#94a3b8",className:"text-xs",children:"25"}),e.jsx("rect",{x:"55",y:"30",width:"45",height:"40",rx:"6",fill:"#e11d48"}),e.jsx("text",{x:"77",y:"55",textAnchor:"middle",fill:"#fff",className:"font-bold text-xs",children:"12"}),e.jsx("rect",{x:"110",y:"30",width:"45",height:"40",rx:"6",fill:"#38bdf8"}),e.jsx("text",{x:"132",y:"55",textAnchor:"middle",fill:"#fff",className:"font-bold text-xs",children:"64"}),e.jsx("rect",{x:"165",y:"30",width:"45",height:"40",rx:"6",fill:"#1e293b",stroke:"#475569"}),e.jsx("text",{x:"187",y:"55",textAnchor:"middle",fill:"#94a3b8",className:"text-xs",children:"22"}),e.jsx("rect",{x:"220",y:"30",width:"45",height:"40",rx:"6",fill:"#1e293b",stroke:"#475569"}),e.jsx("text",{x:"242",y:"55",textAnchor:"middle",fill:"#94a3b8",className:"text-xs",children:"11"})]}),e.jsxs("g",{transform:"translate(200, 160)",children:[e.jsx("text",{x:"260",y:"20",textAnchor:"middle",fill:"#10b981",className:"text-xs font-bold",children:"End of Pass 1: [25, 12, 22, 11, 64] → 64 is Locked in Final Position!"}),e.jsx("rect",{x:"100",y:"30",width:"55",height:"45",rx:"6",fill:"#1e293b",stroke:"#475569"}),e.jsx("text",{x:"127",y:"58",textAnchor:"middle",fill:"#94a3b8",className:"text-sm font-mono",children:"25"}),e.jsx("rect",{x:"165",y:"30",width:"55",height:"45",rx:"6",fill:"#1e293b",stroke:"#475569"}),e.jsx("text",{x:"192",y:"58",textAnchor:"middle",fill:"#94a3b8",className:"text-sm font-mono",children:"12"}),e.jsx("rect",{x:"230",y:"30",width:"55",height:"45",rx:"6",fill:"#1e293b",stroke:"#475569"}),e.jsx("text",{x:"257",y:"58",textAnchor:"middle",fill:"#94a3b8",className:"text-sm font-mono",children:"22"}),e.jsx("rect",{x:"295",y:"30",width:"55",height:"45",rx:"6",fill:"#1e293b",stroke:"#475569"}),e.jsx("text",{x:"322",y:"58",textAnchor:"middle",fill:"#94a3b8",className:"text-sm font-mono",children:"11"}),e.jsx("rect",{x:"360",y:"30",width:"55",height:"45",rx:"6",fill:"#10b981",stroke:"#34d399",strokeWidth:"2"}),e.jsx("text",{x:"387",y:"58",textAnchor:"middle",fill:"#fff",className:"font-bold text-sm font-mono",children:"64 ✓"})]})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"🔍 Deep Technical Breakdown: Comparison of Sorting Algorithms"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs md:text-sm text-left border border-slate-800 rounded-xl overflow-hidden",children:[e.jsx("thead",{className:"bg-slate-800 text-sky-300 uppercase text-[11px] font-bold",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 border-b border-slate-700",children:"Algorithm"}),e.jsx("th",{className:"p-3 border-b border-slate-700",children:"Best Case"}),e.jsx("th",{className:"p-3 border-b border-slate-700",children:"Average Case"}),e.jsx("th",{className:"p-3 border-b border-slate-700",children:"Worst Case"}),e.jsx("th",{className:"p-3 border-b border-slate-700",children:"Swaps / Writes"}),e.jsx("th",{className:"p-3 border-b border-slate-700",children:"Stability"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 text-slate-300 bg-slate-900/60",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"p-3 font-bold text-sky-300",children:"Bubble Sort (Optimized)"}),e.jsx("td",{className:"p-3 text-emerald-400 font-mono",children:"O(n)"}),e.jsx("td",{className:"p-3 text-rose-400 font-mono",children:"O(n^2)"}),e.jsx("td",{className:"p-3 text-rose-400 font-mono",children:"O(n^2)"}),e.jsx("td",{className:"p-3 font-mono",children:"O(n^2)"}),e.jsx("td",{className:"p-3 text-emerald-400 font-semibold",children:"Stable"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"p-3 font-bold text-amber-300",children:"Selection Sort"}),e.jsx("td",{className:"p-3 text-rose-400 font-mono",children:"O(n^2)"}),e.jsx("td",{className:"p-3 text-rose-400 font-mono",children:"O(n^2)"}),e.jsx("td",{className:"p-3 text-rose-400 font-mono",children:"O(n^2)"}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"O(n) (Max n-1)"}),e.jsx("td",{className:"p-3 text-rose-400 font-semibold",children:"Unstable"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"p-3 font-bold text-emerald-400",children:"Insertion Sort"}),e.jsx("td",{className:"p-3 text-emerald-400 font-mono",children:"O(n)"}),e.jsx("td",{className:"p-3 text-rose-400 font-mono",children:"O(n^2)"}),e.jsx("td",{className:"p-3 text-rose-400 font-mono",children:"O(n^2)"}),e.jsx("td",{className:"p-3 font-mono",children:"O(n^2) Shifts"}),e.jsx("td",{className:"p-3 text-emerald-400 font-semibold",children:"Stable"})]})]})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: Sorting Algorithms Demonstration"]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["The following program (",e.jsx("code",{children:"SortingAlgorithmsDemo.c"}),") demonstrates Bubble Sort (with early break flag), Selection Sort (min index swapping), and Insertion Sort (in-place key shifting)."]}),e.jsx(t,{fileModule:i,title:"SortingAlgorithmsDemo.c",editable:!1}),e.jsxs("div",{className:"mt-4 rounded-xl border border-slate-700 bg-slate-950 p-4",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:`====================================================
 C Sorting Algorithms: Bubble, Selection & Insertion
 Coder & AccoTax | Educator: Sukanta Hui
====================================================

Initial Unsorted Array : [ 64 25 12 22 11 90 45 ]

   ↳ Bubble Sort finished in 6 passes (10 swaps)
Bubble Sorted        : [ 11 12 22 25 45 64 90 ]

   ↳ Selection Sort finished with 5 swaps (Min-index selection)
Selection Sorted     : [ 11 12 22 25 45 64 90 ]

   ↳ Insertion Sort finished with 10 shifts (Card-hand insertion)
Insertion Sorted     : [ 11 12 22 25 45 64 90 ]`})]})]}),e.jsxs("section",{className:"space-y-4 bg-rose-950/20 border border-rose-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Best Practices"]}),e.jsxs("ul",{className:"list-disc pl-5 text-sm text-slate-300 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Missing Inner Loop Range Offset in Bubble Sort:"})," In Bubble Sort, running the inner loop up to ",e.jsx("code",{children:"n - 1"})," instead of ",e.jsx("code",{children:"n - 1 - i"})," causes redundant comparisons against already sorted elements at the tail."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting Early-Exit Flag in Bubble Sort:"})," Without the ",e.jsx("code",{children:"swapped"})," check, Bubble Sort runs in $O(n^2)$ time even when given a completely sorted array."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Off-By-One Index in Insertion Sort:"})," The inner ",e.jsx("code",{children:"while"})," loop must guard with ",e.jsx("code",{children:"j >= 0"})," before checking ",e.jsx("code",{children:"arr[j] > key"})," to prevent negative array indexing out-of-bounds!"]})]})]}),e.jsxs("section",{className:"space-y-4 bg-amber-950/20 border border-amber-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"🤔"})," Think About This..."]}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Why does Selection Sort perform significantly fewer memory write operations (at most $n-1$ swaps) compared to Bubble Sort (up to $n^2$ swaps)? Why is this critical in microcontroller EEPROM/Flash memory systems?"})]}),e.jsx("section",{children:e.jsx(r,{title:"Module 002_005 Topic 3 FAQs: Sorting Algorithms",questions:a})}),e.jsx("section",{children:e.jsx(n,{content:o,title:"Module 002_005 Topic 3 Printable Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 3 Note",downloadFileName:"module_002_005_topic3_note.txt"})}),e.jsx("section",{children:e.jsx(s,{note:"When asked in technical interviews why Insertion Sort is taught despite its O(n^2) worst case, always highlight that it runs in O(n) on nearly-sorted data and forms the bedrock of production hybrid algorithms like Timsort and Introsort! — Sukanta Hui"})})]})}export{g as default};
