import{j as e,b as l}from"./vendor-react-core-B-R9HE-Z.js";import{T as o}from"./TeacherSukantaHui-BKEDxeCI.js";import{F as i}from"./FAQTemplate-16IfroqC.js";import{P as d}from"./PlainTextPrint-C6NaUtnE.js";import{c,ah as x}from"./vendor-icons-C1Dcofhq.js";const m=[{question:"What is an array in Java, and how is it allocated in memory?",answer:"An array in Java is an indexed collection of a fixed number of homogeneous (same data type) elements stored in contiguous (adjacent) memory locations. In Java, all arrays are dynamically allocated objects created on the Heap.",marks:2,hint:"Homogeneous elements in contiguous memory allocated on heap."},{question:"What is the index of the first and last element in an array of size `N`?",options:["First is 0, Last is N - 1","First is 1, Last is N","First is 0, Last is N","First is -1, Last is N - 1"],correctAnswer:0,explanation:"Java arrays use 0-based indexing. An array of size N has indices from 0 up to N - 1.",marks:1},{question:"How do you find the total number of elements in an array named `marks` in Java?",options:["marks.length","marks.length()","marks.size()","marks.count"],correctAnswer:0,explanation:"In Java, array length is accessed via the read-only instance field `marks.length` (without parentheses, unlike String's `str.length()`).",marks:1}],h=`================================================================================\r
CBSE CLASS XII INFORMATION TECHNOLOGY (SUBJECT CODE: 802)\r
MODULE 004_002: ARRAYS & JAVA.UTIL.ARRAYS UTILITIES\r
TOPIC 0: CONCEPT OF 1D ARRAYS & CONTIGUOUS MEMORY ALLOCATION\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE)\r
================================================================================\r
\r
1. WHAT IS A 1D ARRAY IN JAVA?\r
--------------------------------------------------------------------------------\r
A 1D (One-Dimensional) array is a linear data structure containing a fixed-size \r
sequence of elements of the same data type.\r
\r
Key Properties:\r
* Homogeneous: All elements must share the identical data type (e.g. all ints, \r
  all doubles, or all Strings).\r
* Contiguous Allocation: Elements are stored sequentially in contiguous heap \r
  memory blocks.\r
* Fixed Size: Once created with a specified size, an array's length cannot grow \r
  or shrink dynamically.\r
* 0-Based Indexing: The first element is at index \`0\`, and the last element is \r
  at index \`length - 1\`.\r
\r
2. ARRAY PROPERTY: \`LENGTH\`\r
--------------------------------------------------------------------------------\r
The capacity of an array is checked using the built-in final property \`.length\` \r
(WITHOUT parentheses):\r
    int[] scores = new int[5];\r
    System.out.println(scores.length); // Outputs 5\r
\r
Contrast with Strings:\r
* Array: \`arr.length\` (Property / Field)\r
* String: \`str.length()\` (Method call with parentheses)\r
\r
3. DEFAULT VALUES OF ARRAY ELEMENTS\r
--------------------------------------------------------------------------------\r
When an array is created using \`new int[N]\`, Java automatically fills elements \r
with default values:\r
* \`int\`, \`byte\`, \`short\`, \`long\`: \`0\`\r
* \`float\`, \`double\`: \`0.0\`\r
* \`boolean\`: \`false\`\r
* \`char\`: \`\\u0000\` (null character)\r
* Reference types / Objects / Strings: \`null\`\r
================================================================================\r
`,u=()=>{const[t,r]=l.useState(0),a=[{idx:0,val:93,address:"0x4000"},{idx:1,val:87.5,address:"0x4008"},{idx:2,val:97.5,address:"0x4010"},{idx:3,val:65,address:"0x4018"},{idx:4,val:70,address:"0x4020"}],n=a[t];return e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl mb-12",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-5",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-2",children:[e.jsx(x,{className:"w-3.5 h-3.5"})," 1D Contiguous Memory Visualizer"]}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:"Contiguous Memory Layout & 0-Based Indexing"})]}),e.jsx("div",{className:"text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800",children:"`double[] Marks = {93.0, 87.5, 97.5, 65.0, 70.0};`"})]}),e.jsxs("div",{className:"space-y-3 mb-6",children:[e.jsx("label",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block",children:"Click an element block to inspect memory and index offset:"}),e.jsx("div",{className:"grid grid-cols-5 gap-2",children:a.map(s=>e.jsxs("button",{onClick:()=>r(s.idx),className:`p-4 rounded-2xl border text-center transition cursor-pointer flex flex-col items-center justify-between ${t===s.idx?"bg-sky-500/20 border-sky-500 text-white shadow-lg shadow-sky-950/50":"bg-slate-950/70 border-slate-800 text-slate-400 hover:bg-slate-900"}`,children:[e.jsxs("span",{className:"text-[10px] font-mono text-slate-500 mb-1",children:["Index [",s.idx,"]"]}),e.jsx("span",{className:"text-lg sm:text-xl font-bold font-mono text-sky-300",children:s.val}),e.jsx("span",{className:"text-[9px] font-mono text-slate-500 mt-1",children:s.address})]},s.idx))})]}),e.jsxs("div",{className:"grid lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-7 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block",children:"Element Access Expression:"}),e.jsx("pre",{className:"text-xs font-mono text-slate-300 bg-slate-900/90 p-4 rounded-xl border border-slate-800 overflow-x-auto leading-relaxed",children:`// Selected index: ${t}
double val = Marks[${t}]; // Returns ${n.val}

// Memory calculation formula:
// Address = BaseAddress + (Index * ElementSize)
// Address = 0x4000 + (${t} * 8 bytes) = ${n.address}`})]}),e.jsxs("div",{className:"lg:col-span-5 bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-3",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-2",children:"Array Properties & Metrics:"}),e.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs space-y-1.5",children:[e.jsxs("div",{className:"flex justify-between text-slate-300",children:[e.jsx("span",{children:"Array Length (`Marks.length`):"}),e.jsx("span",{className:"text-emerald-400 font-bold",children:"5"})]}),e.jsxs("div",{className:"flex justify-between text-slate-300",children:[e.jsx("span",{children:"Valid Index Range:"}),e.jsx("span",{className:"text-sky-300 font-bold",children:"0 to 4"})]}),e.jsxs("div",{className:"flex justify-between text-slate-300",children:[e.jsx("span",{children:"Data Type:"}),e.jsx("span",{className:"text-white font-bold",children:"double (8 bytes/elem)"})]})]})]}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"💡 Contiguous storage gives array lookups $O(1)$ constant time access!"})]})]})]})},j=()=>e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-200 py-10 px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("div",{className:"space-y-4 border-b border-slate-800 pb-8",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20",children:[e.jsx(c,{className:"w-3.5 h-3.5"})," Module 004_002 • Topic 0"]}),e.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight",children:"Concept of 1D Arrays in Java & Contiguous Memory Allocation"}),e.jsx("p",{className:"text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed",children:"Understand how 1D arrays store homogeneous elements in contiguous memory, explore 0-based indexing, and master the array length property in Java."})]}),e.jsx(u,{}),e.jsx(i,{title:"Frequently Asked Questions • Java 1D Arrays",questions:m}),e.jsx(d,{content:h,title:"CBSE Class XII IT 802 – Array Fundamentals Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 0 Note (.txt)",downloadFileName:"004_002_topic0_note.txt"}),e.jsx(o,{note:"Remember this board exam distinction: An array uses the `.length` property without parentheses (e.g. `arr.length`), whereas a String object uses the `.length()` method with parentheses (e.g. `str.length()`). This is one of CBSE's most frequent 1-mark objective questions! — Sukanta Hui"})]})});export{j as default};
