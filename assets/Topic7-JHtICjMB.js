import{j as e}from"./vendor-react-core-B-R9HE-Z.js";import{T as r}from"./TeacherSukantaHui-BKEDxeCI.js";import{F as a}from"./FAQTemplate-16IfroqC.js";import{P as t}from"./PlainTextPrint-C6NaUtnE.js";import{c as s,cI as n,az as i,t as o}from"./vendor-icons-C1Dcofhq.js";const l=[{question:"What is the mandatory prerequisite before calling `Arrays.binarySearch(array, key)` on an array?",answer:"The array MUST be sorted in ascending order (typically using `Arrays.sort(array)`) prior to calling `Arrays.binarySearch()`. If the array is unsorted, the binary search results are undefined and unpredictable.",marks:2,hint:"Array must be sorted in ascending order."},{question:"What happens if you invoke `Arrays.binarySearch()` on an UNSORTED array in Java?",options:["The result is undefined and may fail to find elements that actually exist in the array.","The Java compiler automatically sorts the array first.","A compilation error occurs.","It throws an UnsortedArrayException at runtime."],correctAnswer:0,explanation:"Binary search relies on sorted partition logic ($middle < key$). In an unsorted array, it discards the wrong half, producing undefined/wrong results.",marks:1}],d=`================================================================================\r
CBSE CLASS XII INFORMATION TECHNOLOGY (SUBJECT CODE: 802)\r
MODULE 004_002: ARRAYS & JAVA.UTIL.ARRAYS UTILITIES\r
TOPIC 7: PREREQUISITE FOR BINARY SEARCH: WHY SORTING IS MANDATORY\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE)\r
================================================================================\r
\r
1. THE FUNDAMENTAL MECHANISM OF BINARY SEARCH\r
--------------------------------------------------------------------------------\r
Binary search operates by repeatedly dividing the search interval in half:\r
1. Examine the element at the middle index: \`mid = (low + high) / 2\`.\r
2. If \`arr[mid] == key\`: Search is successful.\r
3. If \`key > arr[mid]\`: Eliminate the entire LEFT half (\`low = mid + 1\`).\r
4. If \`key < arr[mid]\`: Eliminate the entire RIGHT half (\`high = mid - 1\`).\r
\r
2. WHY UNSORTED ARRAYS FAIL DISASTROUSLY\r
--------------------------------------------------------------------------------\r
The elimination of an entire half of the array relies 100% on the guarantee \r
that all elements to the left of \`mid\` are smaller and all elements to the right \r
are larger.\r
\r
If the array is unsorted (e.g. \`{80, 10, 45, 90, 20}\`):\r
- Searching for \`10\` -> mid is index 2 (\`45\`).\r
- Since \`10 < 45\`, binary search discards the right half.\r
- But if \`10\` happened to be on the right half or out of place, binary search \r
  would eliminate it entirely and report that \`10\` does not exist!\r
\r
3. THE STANDARD 2-STEP SEARCH PATTERN IN JAVA\r
--------------------------------------------------------------------------------\r
Step 1: Sort the array\r
    Arrays.sort(marks);\r
\r
Step 2: Perform binary search\r
    int index = Arrays.binarySearch(marks, targetScore);\r
================================================================================\r
`,c=()=>e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl mb-12 space-y-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20 mb-2",children:[e.jsx(n,{className:"w-3.5 h-3.5"})," Algorithmic Invariant Visualizer"]}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:"Why Binary Search Fails on Unsorted Arrays"})]}),e.jsx("div",{className:"text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800",children:"The Two-Step Pattern"})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 p-6 rounded-2xl border border-rose-500/30 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider",children:[e.jsx(i,{className:"w-4 h-4"})," 1. Flawed Workflow (Unsorted Array)"]}),e.jsx("pre",{className:"text-xs font-mono text-slate-300 bg-slate-900/90 p-4 rounded-xl border border-slate-800 leading-relaxed",children:`int[] a = { 80, 10, 45, 90, 20 };
// ❌ WRONG: Forgot to sort first!
int idx = Arrays.binarySearch(a, 10);
// Result: UNDEFINED / WRONG INDEX!`}),e.jsx("p",{className:"text-xs text-rose-300/90 leading-relaxed",children:"Binary search checks middle element (45). Since 10 < 45, it discards the right half. But in unsorted data, elements can be anywhere, causing false negative search results!"})]}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-2xl border border-emerald-500/30 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider",children:[e.jsx(o,{className:"w-4 h-4"})," 2. Standard Pattern (Sort then Search)"]}),e.jsx("pre",{className:"text-xs font-mono text-slate-300 bg-slate-900/90 p-4 rounded-xl border border-slate-800 leading-relaxed",children:`int[] a = { 80, 10, 45, 90, 20 };

// Step 1: Mandatory Sort
Arrays.sort(a); // [10, 20, 45, 80, 90]

// Step 2: Reliable Binary Search
int idx = Arrays.binarySearch(a, 10);
// Result: Index 0 (Accurate & Fast!)`}),e.jsx("p",{className:"text-xs text-emerald-300/90 leading-relaxed",children:"Sorting restores the monotonic invariant. Binary search now accurately eliminates halves, guaranteeing $O(\\log N)$ logarithmic speed."})]})]})]}),u=()=>e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-200 py-10 px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("div",{className:"space-y-4 border-b border-slate-800 pb-8",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20",children:[e.jsx(s,{className:"w-3.5 h-3.5"})," Module 004_002 • Topic 7"]}),e.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight",children:"Prerequisite for Binary Search: Why Sorting is Mandatory"}),e.jsxs("p",{className:"text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed",children:["Understand why ",e.jsx("code",{className:"text-rose-400 font-mono",children:"Arrays.binarySearch()"})," strictly requires an ascending sorted array, and master the two-step Sort-then-Search pattern."]})]}),e.jsx(c,{}),e.jsx(a,{title:"Frequently Asked Questions • Binary Search Prerequisites",questions:l}),e.jsx(t,{content:d,title:"CBSE Class XII IT 802 – Binary Search Prerequisite Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 7 Note (.txt)",downloadFileName:"004_002_topic7_note.txt"}),e.jsx(r,{note:"Whenever a CBSE board question asks you to write code for Binary Search using `java.util.Arrays`, ALWAYS write `Arrays.sort(array);` right before `Arrays.binarySearch(array, key);`. Leaving out `Arrays.sort()` is a guaranteed deduction of 1 mark! — Sukanta Hui"})]})});export{u as default};
