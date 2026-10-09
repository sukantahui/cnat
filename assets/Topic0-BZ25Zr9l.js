import{j as e,b as s}from"./vendor-react-core-B-R9HE-Z.js";import{T as n}from"./TeacherSukantaHui-BKEDxeCI.js";import{F as r}from"./FAQTemplate-16IfroqC.js";import{P as o}from"./PlainTextPrint-C6NaUtnE.js";import{c as l,a5 as i}from"./vendor-icons-C1Dcofhq.js";const c=[{question:"What is meant by the immutability of String objects in Java?",answer:"Immutability means that once a `String` object is created in memory, its character sequence/contents CANNOT be modified. Any method that appears to modify a String (such as `concat()`, `replace()`, or `toUpperCase()`) actually allocates and returns a completely NEW String object on the heap, leaving the original unchanged.",marks:2,hint:"String objects cannot be altered in-place after creation."},{question:"Which package automatically imports the `String` class in Java?",options:["java.lang","java.util","java.io","java.text"],correctAnswer:0,explanation:"The String class resides in `java.lang`, which is automatically imported into every Java source file.",marks:1},{question:`What is the output of the following Java snippet?
String s = "Java";
s.concat(" 802");
System.out.println(s);`,options:["Java","Java 802","802","Compilation error"],correctAnswer:0,explanation:'Because String is immutable, `s.concat(" 802")` creates a new string "Java 802" but does not reassign it to `s`. Variable `s` still points to "Java".',marks:2}],d=`================================================================================\r
CBSE CLASS XII INFORMATION TECHNOLOGY (SUBJECT CODE: 802)\r
MODULE 004_003: STRING CLASS METHODS & TEXT MANIPULATION\r
TOPIC 0: THE STRING CLASS & OBJECT IMMUTABILITY IN JAVA\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE)\r
================================================================================\r
\r
1. WHAT IS A STRING IN JAVA?\r
--------------------------------------------------------------------------------\r
In Java, a String is NOT a primitive data type. It is an object belonging to \r
the \`java.lang.String\` class that encapsulates an immutable character sequence.\r
\r
2. THE CONCEPT OF IMMUTABILITY\r
--------------------------------------------------------------------------------\r
* Definition: Once instantiated on the Heap, the state/content of a \`String\` \r
  object cannot be altered.\r
* What happens when you call a string method?\r
  When you execute \`str.toUpperCase()\` or \`str.replace(...)\`, Java DOES NOT \r
  modify the existing object. It creates a brand-new \`String\` object with the \r
  new contents.\r
* To keep the changed string, you must explicitly reassign the reference:\r
  \`str = str.concat(" World");\`\r
\r
3. STRING CONSTANT POOL (SCP)\r
--------------------------------------------------------------------------------\r
Java maintains a special area in heap memory called the String Constant Pool (SCP). \r
String literals (e.g. \`"Hello"\`) with identical contents share the same memory \r
reference in the pool to conserve RAM.\r
\r
4. CBSE EXAM TRAP\r
--------------------------------------------------------------------------------\r
Code:\r
    String msg = "Information";\r
    msg.concat(" Technology");\r
    System.out.println(msg);\r
\r
Output:\r
    Information  (NOT "Information Technology", because \`msg\` was not reassigned!)\r
================================================================================\r
`,m=()=>{const[t,a]=s.useState(!1);return e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl mb-12",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-5",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-2",children:[e.jsx(i,{className:"w-3.5 h-3.5"})," String Constant Pool & Heap Visualizer"]}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:"String Immutability: Why `s.concat()` Does NOT Change `s`"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>a(!1),className:`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${t?"bg-slate-950 text-slate-400 border border-slate-800":"bg-purple-500 text-slate-950 shadow-md shadow-purple-950"}`,children:"Without Reassignment (`s.concat(...)`)"}),e.jsx("button",{onClick:()=>a(!0),className:`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${t?"bg-emerald-500 text-slate-950 shadow-md shadow-emerald-950":"bg-slate-950 text-slate-400 border border-slate-800"}`,children:"With Reassignment (`s = s.concat(...)`)"})]})]}),e.jsxs("div",{className:"grid lg:grid-cols-12 gap-6",children:[e.jsxs("div",{className:"lg:col-span-7 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block",children:"Executing Java Code:"}),e.jsx("pre",{className:"text-xs font-mono text-slate-300 bg-slate-900/90 p-4 rounded-xl border border-slate-800 overflow-x-auto leading-relaxed",children:`String s = "Java";
${t?'s = s.concat(" 802"); // Explicit reassignment!':'s.concat(" 802"); // Return value discarded!'}

System.out.println(s); // Outputs: "${t?"Java 802":"Java"}"`})]}),e.jsxs("div",{className:"lg:col-span-5 bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("span",{className:"text-xs font-bold text-purple-400 uppercase tracking-wider block",children:"Heap Memory State:"}),e.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs space-y-2",children:[e.jsxs("div",{className:"flex justify-between border-b border-slate-800 pb-1.5",children:[e.jsx("span",{className:"text-slate-400",children:'Object #1 ("Java"):'}),e.jsx("span",{className:"text-emerald-400 font-bold",children:t?"Abandoned in Heap":"Target of `s`"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:'Object #2 ("Java 802"):'}),e.jsx("span",{className:"text-purple-400 font-bold",children:t?"Target of `s`":"Unreferenced"})]})]})]}),e.jsxs("div",{className:"p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-200 text-xs",children:["💡 ",e.jsx("strong",{children:"CBSE Board Rule:"})," Strings in Java are immutable! Methods produce NEW objects; they never mutate existing strings in-place."]})]})]})]})},g=()=>e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-200 py-10 px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("div",{className:"space-y-4 border-b border-slate-800 pb-8",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20",children:[e.jsx(l,{className:"w-3.5 h-3.5"})," Module 004_003 • Topic 0"]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight",children:["Strings in Java: The ",e.jsx("code",{className:"text-purple-400 font-mono",children:"java.lang.String"})," Class & Immutability"]}),e.jsx("p",{className:"text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed",children:"Understand how Java models text using the immutable String class, explore heap memory allocations, and avoid classic board exam reassignment traps."})]}),e.jsx(m,{}),e.jsx(r,{title:"Frequently Asked Questions • String Immutability",questions:c}),e.jsx(o,{content:d,title:"CBSE Class XII IT 802 – String Immutability Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 0 Note (.txt)",downloadFileName:"004_003_topic0_note.txt"}),e.jsx(n,{note:"Whenever you see a question where a method like `.concat()`, `.toLowerCase()`, or `.replace()` is called without assigning back to the variable (e.g. `s.concat('abc'); System.out.println(s);`), the output is ALWAYS the original unmodified string! — Sukanta Hui"})]})});export{g as default};
