import{j as e,b as d}from"./vendor-react-core-B-R9HE-Z.js";import{T as x}from"./TeacherSukantaHui-BKEDxeCI.js";import{F as c}from"./FAQTemplate-16IfroqC.js";import{P as m}from"./PlainTextPrint-C6NaUtnE.js";import{c as h,S as u,y as b}from"./vendor-icons-C1Dcofhq.js";const p=[{question:"What does `Arrays.binarySearch(array, key)` return if the key is found in the array?",answer:"It returns the 0-based integer index where the search key is located within the sorted array.",marks:1,hint:"The 0-based index of the found element."},{question:"What does `Arrays.binarySearch(array, key)` return if the search key is NOT present in the sorted array?",answer:"It returns a negative integer calculated as: `-(insertion_point) - 1`, where `insertion_point` is the index at which the key would be inserted to maintain sorted order.",marks:2,hint:"Negative insertion point formula: -(insertion point) - 1."},{question:"Given the sorted array `int[] a = {10, 20, 30, 40, 50};`, what is the return value of `Arrays.binarySearch(a, 30);`?",options:["2","3","1","-3"],correctAnswer:0,explanation:"30 is located at index 2 (0-based indexing: a[0]=10, a[1]=20, a[2]=30). Returns 2.",marks:1},{question:"Given `int[] a = {10, 20, 30, 40, 50};`, what is the return value of `Arrays.binarySearch(a, 25);`?",options:["-3","-2","2","-1"],correctAnswer:0,explanation:"25 would be inserted at index 2 (between 20 and 30). Formula: -(insertion_point) - 1 = -(2) - 1 = -3.",marks:2}],y=`================================================================================\r
CBSE CLASS XII INFORMATION TECHNOLOGY (SUBJECT CODE: 802)\r
MODULE 004_002: ARRAYS & JAVA.UTIL.ARRAYS UTILITIES\r
TOPIC 6: BINARY SEARCH USING ARRAYS.BINARYSEARCH() & RETURN VALUE RULES\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE)\r
================================================================================\r
\r
1. WHAT IS ARRAYS.BINARYSEARCH()?\r
--------------------------------------------------------------------------------\r
\`Arrays.binarySearch()\` is a fast logarithmic search algorithm ($O(\\log N)$) \r
that searches a sorted array for a specified target key.\r
\r
Import Requirement:\r
    import java.util.Arrays;\r
\r
2. RETURN VALUE RULES\r
--------------------------------------------------------------------------------\r
Case 1: Key is Found in Array\r
Returns the positive or zero index where \`arr[index] == key\`.\r
Example: \`int[] a = {10, 20, 30, 40, 50};\`\r
\`Arrays.binarySearch(a, 30)\` -> Returns \`2\` (Index 2).\r
\r
Case 2: Key is NOT Found in Array\r
Returns a negative value indicating where it would be inserted:\r
Formula:\r
    return_value = -(insertion_point) - 1\r
\r
Example: Searching for 25 in \`{10, 20, 30, 40, 50}\`:\r
- 25 belongs between 20 (index 1) and 30 (index 2).\r
- Insertion point = index 2.\r
- Return value = -(2) - 1 = \`-3\`.\r
\r
3. WHY -(INSERTION_POINT) - 1?\r
--------------------------------------------------------------------------------\r
If Java returned \`-insertion_point\`, an element belonging at index 0 would return \r
\`-0 = 0\`, which would be confused with a successful match at index 0! \r
The \`- 1\` guarantees that all unfound elements return negative values strictly \`<= -1\`.\r
================================================================================\r
`,g=()=>{const s=[10,20,30,40,50,60,70],[t,o]=d.useState(30),a=s.indexOf(t);let n=a,i=0;if(a===-1){let r=0;for(;r<s.length&&s[r]<t;)r++;i=r,n=-i-1}return e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl mb-12",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-5",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-2",children:[e.jsx(u,{className:"w-3.5 h-3.5"})," Binary Search & Insertion Point Explorer"]}),e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:["Predicting ",e.jsx("code",{className:"text-sky-400 font-mono",children:"Arrays.binarySearch()"})," Return Values"]})]}),e.jsx("div",{className:"text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800",children:"`int idx = Arrays.binarySearch(a, key);`"})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4",children:[e.jsxs("div",{className:"flex items-center gap-3 w-full sm:w-auto",children:[e.jsx("label",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap",children:"Search Target Key:"}),e.jsx("input",{type:"number",value:t,onChange:r=>o(Number(r.target.value)),className:"w-28 bg-slate-900 text-sky-300 font-mono text-base font-bold px-3 py-1.5 rounded-xl border border-slate-700 text-center"})]}),e.jsx("div",{className:"flex gap-1.5 flex-wrap",children:[10,25,30,45,70,85].map(r=>e.jsxs("button",{onClick:()=>o(r),className:`px-2.5 py-1 rounded-lg text-xs font-mono transition cursor-pointer ${t===r?"bg-sky-500 text-slate-950 font-bold":"bg-slate-900 text-slate-400 border border-slate-800 hover:text-white"}`,children:["key=",r]},r))})]}),e.jsx("div",{className:"grid grid-cols-7 gap-2 mb-6",children:s.map((r,l)=>e.jsxs("div",{className:`p-3 rounded-2xl border text-center transition ${r===t?"bg-emerald-500/20 border-emerald-500 text-white shadow-lg shadow-emerald-950":"bg-slate-950/70 border-slate-800 text-slate-400"}`,children:[e.jsxs("div",{className:"text-[10px] font-mono text-slate-500",children:["[",l,"]"]}),e.jsx("div",{className:"text-base font-bold font-mono text-slate-200",children:r})]},l))}),e.jsxs("div",{className:"grid lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-7 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block",children:"Java Binary Search Statement:"}),e.jsx("pre",{className:"text-xs font-mono text-slate-300 bg-slate-900/90 p-4 rounded-xl border border-slate-800 overflow-x-auto leading-relaxed",children:`import java.util.Arrays;

int[] a = { 10, 20, 30, 40, 50, 60, 70 };
int key = ${t};

int result = Arrays.binarySearch(a, key);
// Result: ${n}`})]}),e.jsxs("div",{className:"lg:col-span-5 bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4",children:[e.jsxs("div",{className:`p-4 rounded-xl border text-xs space-y-1.5 ${a!==-1?"bg-emerald-500/10 border-emerald-500/30 text-emerald-300":"bg-amber-500/10 border-amber-500/30 text-amber-300"}`,children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-sm",children:[e.jsx(b,{className:"w-4 h-4"}),e.jsxs("span",{children:["Return Value: ",e.jsx("strong",{className:"font-mono text-lg",children:n})]})]}),e.jsx("p",{className:"text-[11px] leading-relaxed",children:a!==-1?`Key ${t} is found at index ${a}.`:`Key ${t} not found. Insertion point = ${i}. Formula: -(${i}) - 1 = ${n}.`})]}),e.jsxs("div",{className:"text-[11px] text-slate-400 pt-2 border-t border-slate-800/80",children:["CBSE Golden Formula: ",e.jsx("code",{className:"text-amber-400 font-mono font-bold",children:"return = -insertion_point - 1"}),"."]})]})]})]})},A=()=>e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-200 py-10 px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("div",{className:"space-y-4 border-b border-slate-800 pb-8",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20",children:[e.jsx(h,{className:"w-3.5 h-3.5"})," Module 004_002 • Topic 6"]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight",children:["Binary Search using ",e.jsx("code",{className:"text-sky-400 font-mono",children:"Arrays.binarySearch(array, key)"})]}),e.jsx("p",{className:"text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed",children:"Master the logarithmic binary search algorithm in Java, explore return values for found vs missing keys, and calculate negative insertion points accurately."})]}),e.jsx(g,{}),e.jsx(c,{title:"Frequently Asked Questions • Arrays.binarySearch() Method",questions:p}),e.jsx(m,{content:y,title:"CBSE Class XII IT 802 – Binary Search Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 6 Note (.txt)",downloadFileName:"004_002_topic6_note.txt"}),e.jsx(x,{note:"In CBSE board exams, when a search key is NOT found, remember the exact formula: `-(insertion_point) - 1`. If an element belongs at index 2, the return value is -3. If it belongs at index 0, the return value is -1! — Sukanta Hui"})]})});export{A as default};
