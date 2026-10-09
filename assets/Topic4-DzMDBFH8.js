import{j as e}from"./vendor-react-core-B-R9HE-Z.js";import{T as t}from"./TeacherSukantaHui-BKEDxeCI.js";import{F as s}from"./FAQTemplate-16IfroqC.js";import{P as n}from"./PlainTextPrint-C6NaUtnE.js";import{c as i,C as o}from"./vendor-icons-C1Dcofhq.js";const l=[{question:"Which package must be imported to use the `Arrays` utility class in Java?",options:["java.util.Arrays","java.lang.Arrays","java.io.Arrays","java.arrays.Arrays"],correctAnswer:0,explanation:"The Arrays utility class resides in the java.util package (`import java.util.Arrays;`).",marks:1},{question:"Name two commonly tested static methods in `java.util.Arrays` in CBSE IT (802).",answer:"1. `Arrays.sort(array)`: Sorts the specified array into ascending numerical/lexicographical order.\n2. `Arrays.binarySearch(array, key)`: Searches for the specified key within a sorted array using binary search.",marks:2,hint:"sort() and binarySearch()."},{question:"Are methods in `java.util.Arrays` called on object instances or directly on the class name?",options:["Directly on the class name because they are static methods (e.g. `Arrays.sort(arr)`).","On object instances like `arr.sort()`.","Only using the new operator.","Via Java reflection only."],correctAnswer:0,explanation:"Methods in java.util.Arrays are static utility methods called using the class name: `Arrays.methodName(array)`.",marks:1}],c=`================================================================================\r
CBSE CLASS XII INFORMATION TECHNOLOGY (SUBJECT CODE: 802)\r
MODULE 004_002: ARRAYS & JAVA.UTIL.ARRAYS UTILITIES\r
TOPIC 4: THE JAVA.UTIL.ARRAYS UTILITY CLASS & STATIC METHODS\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE)\r
================================================================================\r
\r
1. WHAT IS THE \`JAVA.UTIL.ARRAYS\` CLASS?\r
--------------------------------------------------------------------------------\r
The \`java.util.Arrays\` class is part of the Java Collections Framework. It contains \r
various static utility methods for manipulating arrays (sorting, searching, \r
comparing, and filling).\r
\r
Import Requirement:\r
    import java.util.Arrays;\r
\r
2. ESSENTIAL STATIC METHODS TESTED IN CBSE CLASS XII\r
--------------------------------------------------------------------------------\r
1. \`Arrays.sort(arr)\`:\r
   Rearranges array elements in ascending natural order.\r
\r
2. \`Arrays.binarySearch(arr, key)\`:\r
   Finds the index of a key element in $O(\\log N)$ time. \r
   CRITICAL: Array MUST be sorted before calling binarySearch!\r
\r
3. \`Arrays.equals(arr1, arr2)\`:\r
   Returns true if both arrays contain the same elements in the same order.\r
\r
4. \`Arrays.fill(arr, value)\`:\r
   Assigns the specified value to every element of the array.\r
\r
5. \`Arrays.toString(arr)\`:\r
   Returns a string representation of the array contents: \`[10, 20, 30]\`.\r
\r
3. WHY STATIC METHODS?\r
--------------------------------------------------------------------------------\r
All methods in \`java.util.Arrays\` are \`static\`. You invoke them directly on the \r
class name \`Arrays.methodName(arr)\` rather than \`arr.methodName()\`.\r
================================================================================\r
`,d=()=>e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl mb-12 space-y-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2",children:[e.jsx(o,{className:"w-3.5 h-3.5"})," Java Utility Framework"]}),e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:["Key Static Methods of ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.util.Arrays"})]})]}),e.jsx("div",{className:"text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800",children:"`import java.util.Arrays;`"})]}),e.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[{name:"Arrays.sort(arr)",desc:"Sorts numeric or string array into ascending order in-place using Dual-Pivot Quicksort / TimSort.",syntax:"Arrays.sort(Marks);"},{name:"Arrays.binarySearch(arr, key)",desc:"Searches sorted array in O(log N) time and returns the index of key or negative insertion point.",syntax:"int idx = Arrays.binarySearch(a, 35);"},{name:"Arrays.toString(arr)",desc:"Converts array into a clean string representation: '[93.0, 87.5, 97.5]'.",syntax:"System.out.println(Arrays.toString(a));"},{name:"Arrays.fill(arr, val)",desc:"Fills all elements with a uniform default value (e.g. setting all elements to -1).",syntax:"Arrays.fill(cache, -1);"},{name:"Arrays.equals(a1, a2)",desc:"Checks whether two arrays have identical length and identical elements in identical positions.",syntax:"boolean same = Arrays.equals(a, b);"},{name:"Arrays.copyOf(arr, len)",desc:"Truncates or pads a copy of the specified array to a new length.",syntax:"int[] copy = Arrays.copyOf(a, 10);"}].map((r,a)=>e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2 flex flex-col justify-between",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("span",{className:"font-mono text-xs font-bold text-sky-400 block",children:r.name}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:r.desc})]}),e.jsx("div",{className:"bg-slate-900 p-2.5 rounded-xl border border-slate-800 font-mono text-[11px] text-emerald-300",children:r.syntax})]},a))})]}),A=()=>e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-200 py-10 px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("div",{className:"space-y-4 border-b border-slate-800 pb-8",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",children:[e.jsx(i,{className:"w-3.5 h-3.5"})," Module 004_002 • Topic 4"]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.util.Arrays"})," Utility Class"]}),e.jsx("p",{className:"text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed",children:"Discover the essential static algorithms provided by the Java utility package for array operations including sorting, searching, equality checks, and string formatting."})]}),e.jsx(d,{}),e.jsx(s,{title:"Frequently Asked Questions • java.util.Arrays Class",questions:l}),e.jsx(n,{content:c,title:"CBSE Class XII IT 802 – Arrays Utilities Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 4 Note (.txt)",downloadFileName:"004_002_topic4_note.txt"}),e.jsx(t,{note:"Remember: All methods in `java.util.Arrays` are static, so you must call them using `Arrays.sort(arr)` and NOT `arr.sort()`. And never forget `import java.util.Arrays;` at the top of your program! — Sukanta Hui"})]})});export{A as default};
