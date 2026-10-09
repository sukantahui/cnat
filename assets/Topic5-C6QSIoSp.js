import{j as e,b as o}from"./vendor-react-core-B-R9HE-Z.js";import{T as m}from"./TeacherSukantaHui-BKEDxeCI.js";import{F as h}from"./FAQTemplate-16IfroqC.js";import{P as g}from"./PlainTextPrint-C6NaUtnE.js";import{c as p,aF as i,bl as u}from"./vendor-icons-C1Dcofhq.js";const b=[{question:"In what order does `Arrays.sort(array)` arrange elements in Java?",options:["Ascending order (smallest to largest)","Descending order","Random order","Reverse insertion order"],correctAnswer:0,explanation:"By default, `Arrays.sort()` arranges elements in ascending natural order (numerical order for numbers, alphabetical lexicographical order for strings).",marks:1},{question:"Given `int[] arr = {45, 12, 85, 32, 10};`, what are the contents of `arr` after executing `Arrays.sort(arr);`?",options:["{10, 12, 32, 45, 85}","{85, 45, 32, 12, 10}","{12, 45, 85, 32, 10}","{10, 12, 45, 32, 85}"],correctAnswer:0,explanation:"Elements are sorted into ascending order: 10, 12, 32, 45, 85.",marks:2},{question:"Does `Arrays.sort()` modify the original array in-place or create a new array?",answer:"It modifies the original array in-place. The existing array elements are rearranged directly in heap memory.",marks:2,hint:"In-place modification vs new array."}],y=`================================================================================\r
CBSE CLASS XII INFORMATION TECHNOLOGY (SUBJECT CODE: 802)\r
MODULE 004_002: ARRAYS & JAVA.UTIL.ARRAYS UTILITIES\r
TOPIC 5: SORTING ARRAYS USING ARRAYS.SORT() IN ASCENDING ORDER\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE)\r
================================================================================\r
\r
1. WHAT IS ARRAYS.SORT()?\r
--------------------------------------------------------------------------------\r
The \`Arrays.sort()\` method is an optimized in-place sorting utility provided \r
by \`java.util.Arrays\`.\r
\r
Syntax:\r
    import java.util.Arrays;\r
    ...\r
    Arrays.sort(array_name);\r
\r
2. WORKING WITH NUMERIC & STRING ARRAYS\r
--------------------------------------------------------------------------------\r
A. Numeric Arrays (Integers, Doubles):\r
   int[] marks = {88, 42, 95, 60, 75};\r
   Arrays.sort(marks);\r
   // Result: [42, 60, 75, 88, 95]\r
\r
B. String Arrays (Alphabetical Lexicographical Sort):\r
   String[] cities = {"Kolkata", "Barrackpore", "Delhi", "Chennai"};\r
   Arrays.sort(cities);\r
   // Result: ["Barrackpore", "Chennai", "Delhi", "Kolkata"]\r
\r
3. KEY CHARACTERISTICS\r
--------------------------------------------------------------------------------\r
* In-place Sorting: Modifies the original array directly without allocating extra array objects.\r
* Natural Ordering: Ascending order (lowest to highest).\r
* Prerequisite for Binary Search: You MUST sort an array before calling \`Arrays.binarySearch()\`.\r
================================================================================\r
`,f=()=>{const[r,n]=o.useState([88,42,95,60,75,12]),[t,l]=o.useState(!1),d=()=>{const s=[...r].sort((a,x)=>a-x);n(s),l(!0)},c=()=>{const s=[88,42,95,60,75,12].sort(()=>Math.random()-.5);n(s),l(!1)};return e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl mb-12",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-5",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2",children:[e.jsx(i,{className:"w-3.5 h-3.5"})," In-Place Sorting Simulator"]}),e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:["Sorting Arrays via ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Arrays.sort()"})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{onClick:d,className:"bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs py-2 px-3.5 rounded-xl transition flex items-center gap-1.5 cursor-pointer shadow-lg shadow-emerald-950",children:[e.jsx(i,{className:"w-3.5 h-3.5"})," Execute `Arrays.sort()`"]}),e.jsxs("button",{onClick:c,className:"bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs py-2 px-3 rounded-xl transition flex items-center gap-1 cursor-pointer",children:[e.jsx(u,{className:"w-3.5 h-3.5"})," Shuffle"]})]})]}),e.jsxs("div",{className:"space-y-2 mb-6",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs text-slate-400",children:[e.jsxs("span",{children:["Array State: ",e.jsx("strong",{className:t?"text-emerald-400":"text-amber-400",children:t?"Ascending Sorted":"Unsorted"})]}),e.jsxs("span",{className:"font-mono",children:["Length: ",r.length]})]}),e.jsx("div",{className:"grid grid-cols-6 gap-2",children:r.map((s,a)=>e.jsxs("div",{className:`p-4 rounded-2xl border text-center transition ${t?"bg-emerald-500/10 border-emerald-500/40 text-emerald-300":"bg-slate-950 border-slate-800 text-slate-300"}`,children:[e.jsxs("span",{className:"text-[10px] font-mono text-slate-500 block mb-1",children:["Index [",a,"]"]}),e.jsx("span",{className:"text-xl font-black font-mono",children:s})]},a))})]}),e.jsxs("div",{className:"grid lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-7 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block",children:"Java Sorting Execution Code:"}),e.jsx("pre",{className:"text-xs font-mono text-slate-300 bg-slate-900/90 p-4 rounded-xl border border-slate-800 overflow-x-auto leading-relaxed",children:`import java.util.Arrays;

int[] marks = { ${r.join(", ")} };
Arrays.sort(marks); // Sorts array in-place into ascending order!

// Resulting elements:
// [${r.join(", ")}]`})]}),e.jsxs("div",{className:"lg:col-span-5 bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-3",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-2",children:"Ascending Order Guarantee:"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"`Arrays.sort()` rearranges elements in natural ascending sequence ($O(N \\log N)$ average time). Once sorted, array elements are ready for lightning-fast Binary Search operations."})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-400",children:["💡 Minimum element is now at ",e.jsx("code",{className:"text-white font-mono",children:"marks[0]"}),", and maximum element is at ",e.jsx("code",{className:"text-white font-mono",children:"marks[marks.length - 1]"}),"."]})]})]})]})},R=()=>e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-200 py-10 px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("div",{className:"space-y-4 border-b border-slate-800 pb-8",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",children:[e.jsx(p,{className:"w-3.5 h-3.5"})," Module 004_002 • Topic 5"]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight",children:["Sorting Arrays using ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Arrays.sort(array)"})," in Ascending Order"]}),e.jsxs("p",{className:"text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed",children:["Understand in-place ascending sorting of numeric and string arrays using the ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Arrays.sort()"})," static utility method."]})]}),e.jsx(f,{}),e.jsx(h,{title:"Frequently Asked Questions • Arrays.sort() Method",questions:b}),e.jsx(g,{content:y,title:"CBSE Class XII IT 802 – Arrays.sort() Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 5 Note (.txt)",downloadFileName:"004_002_topic5_note.txt"}),e.jsx(m,{note:"Remember: `Arrays.sort()` sorts in ASCENDING order by default. After sorting, the minimum value is always at index 0, and the maximum value is at index `length - 1`! — Sukanta Hui"})]})});export{R as default};
