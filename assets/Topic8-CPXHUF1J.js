import{j as e,b as n}from"./vendor-react-core-B-R9HE-Z.js";import{T as h}from"./TeacherSukantaHui-BKEDxeCI.js";import{F as b}from"./FAQTemplate-16IfroqC.js";import{P as y}from"./PlainTextPrint-C6NaUtnE.js";import{c as g,d0 as S,t as c,az as m}from"./vendor-icons-C1Dcofhq.js";const _=[{question:`Complete the missing statements in the following CBSE Board Question:
// Statement-1: ____________
public class LanguageSearch {
    public static void main(String[] args) {
        String[] languages = {"Java", "Python", "C++", "Ruby"};
        Arrays.sort(languages);
        // Statement-2: Search for "Python"
        int index = ____________;
        System.out.println("Found at index: " + index);
    }
}`,answer:'Statement-1: `import java.util.Arrays;`\nStatement-2: `Arrays.binarySearch(languages, "Python")`',marks:4,hint:'Statement-1 is the import; Statement-2 is Arrays.binarySearch(languages, "Python").'},{question:'In the code completion problem above, what index is printed for "Python" after sorting `{"Java", "Python", "C++", "Ruby"}`?',options:["2","1","3","0"],correctAnswer:0,explanation:'After sorting, the array becomes: `["C++", "Java", "Python", "Ruby"]`. Index of "Python" is 2.',marks:2}],C=`================================================================================\r
CBSE CLASS XII INFORMATION TECHNOLOGY (SUBJECT CODE: 802)\r
MODULE 004_002: ARRAYS & JAVA.UTIL.ARRAYS UTILITIES\r
TOPIC 8: CBSE BOARD CODE COMPLETION DRILLS (STATEMENTS 1 & 2)\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE)\r
================================================================================\r
\r
1. THE CLASSIC 4-MARK CODE COMPLETION BOARD QUESTION\r
--------------------------------------------------------------------------------\r
In CBSE Class XII IT (802), a standard Section B question provides an incomplete \r
program and asks students to write Statement-1 (the import statement) and \r
Statement-2 (the method invocation).\r
\r
Problem Template:\r
    // Statement-1: Write statement to import the required array utility class\r
    ...\r
    public class Demo {\r
        public static void main(String[] args) {\r
            String[] langs = {"Java", "Python", "C++", "Ruby"};\r
            Arrays.sort(langs);\r
            \r
            // Statement-2: Search for "Python" using the Arrays class\r
            int pos = ________________________________;\r
            System.out.println("Position: " + pos);\r
        }\r
    }\r
\r
2. EXACT SOLUTIONS\r
--------------------------------------------------------------------------------\r
Statement-1 Solution:\r
    import java.util.Arrays;\r
\r
Statement-2 Solution:\r
    Arrays.binarySearch(langs, "Python");\r
\r
3. STEP-BY-STEP TRACE\r
--------------------------------------------------------------------------------\r
Initial Array:  ["Java", "Python", "C++", "Ruby"]\r
After \`sort()\`: ["C++", "Java", "Python", "Ruby"]\r
Indices:          0       1        2         3\r
\r
\`Arrays.binarySearch(langs, "Python")\` locates "Python" at index \`2\`.\r
================================================================================\r
`,j=()=>{const[o,l]=n.useState(""),[i,d]=n.useState(""),[x,t]=n.useState(!1),a=o.trim().replace(/;$/,"")==="import java.util.Arrays",r=i.trim().replace(/;$/,"").replace(/\s+/g,"")==='Arrays.binarySearch(languages,"Python")',p=()=>{t(!0)},u=()=>{l("import java.util.Arrays;"),d('Arrays.binarySearch(languages, "Python");'),t(!0)};return e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl mb-12 space-y-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2",children:[e.jsx(S,{className:"w-3.5 h-3.5"})," CBSE Board Exam Interactive Drill"]}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:"Code Completion: Java Language Search Problem"})]}),e.jsx("div",{className:"text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800",children:"Section B (4 Marks)"})]}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"space-y-3 font-mono text-xs text-slate-300",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-slate-500 block mb-1 font-sans text-xs",children:"// Statement-1: Write statement to import the required array utility class:"}),e.jsx("input",{type:"text",placeholder:"e.g. import java.util.Arrays;",value:o,onChange:s=>{l(s.target.value),t(!1)},className:"w-full bg-slate-900 text-emerald-400 px-3 py-2 rounded-xl border border-slate-700 font-mono"})]}),e.jsx("pre",{className:"text-slate-400 py-1",children:`public class LanguageSearch {
    public static void main(String[] args) {
        String[] languages = {"Java", "Python", "C++", "Ruby"};
        Arrays.sort(languages);`}),e.jsxs("div",{children:[e.jsx("span",{className:"text-slate-500 block mb-1 font-sans text-xs",children:'// Statement-2: Search for "Python" using the Arrays utility class:'}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-slate-400",children:"int index ="}),e.jsx("input",{type:"text",placeholder:'e.g. Arrays.binarySearch(languages, "Python");',value:i,onChange:s=>{d(s.target.value),t(!1)},className:"flex-1 bg-slate-900 text-emerald-400 px-3 py-2 rounded-xl border border-slate-700 font-mono"})]})]}),e.jsx("pre",{className:"text-slate-400 py-1",children:`        System.out.println("Found at index: " + index);
    }
}`})]}),e.jsxs("div",{className:"flex gap-2 pt-2 border-t border-slate-800",children:[e.jsx("button",{onClick:p,className:"bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs py-2 px-4 rounded-xl transition cursor-pointer",children:"Check Answers"}),e.jsx("button",{onClick:u,className:"bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs py-2 px-3 rounded-xl transition cursor-pointer",children:"Show Solution"})]}),x&&e.jsxs("div",{className:"space-y-2 pt-2",children:[e.jsxs("div",{className:`p-3 rounded-xl border text-xs flex items-center gap-2 ${a?"bg-emerald-500/10 border-emerald-500/30 text-emerald-300":"bg-rose-500/10 border-rose-500/30 text-rose-300"}`,children:[a?e.jsx(c,{className:"w-4 h-4 text-emerald-400"}):e.jsx(m,{className:"w-4 h-4 text-rose-400"}),e.jsxs("span",{children:["Statement-1: ",a?"Correct! (import java.util.Arrays;)":"Incorrect. Expected: import java.util.Arrays;"]})]}),e.jsxs("div",{className:`p-3 rounded-xl border text-xs flex items-center gap-2 ${r?"bg-emerald-500/10 border-emerald-500/30 text-emerald-300":"bg-rose-500/10 border-rose-500/30 text-rose-300"}`,children:[r?e.jsx(c,{className:"w-4 h-4 text-emerald-400"}):e.jsx(m,{className:"w-4 h-4 text-rose-400"}),e.jsxs("span",{children:["Statement-2: ",r?"Correct! Output is index 2.":'Incorrect. Expected: Arrays.binarySearch(languages, "Python");']})]})]})]})]})},I=()=>e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-200 py-10 px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("div",{className:"space-y-4 border-b border-slate-800 pb-8",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",children:[e.jsx(g,{className:"w-3.5 h-3.5"})," Module 004_002 • Topic 8"]}),e.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight",children:"Code Completion Drills for Java Array Operations"}),e.jsx("p",{className:"text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed",children:"Practice authentic CBSE Class XII IT 802 board exam code completion problems requiring import statements and binary search invocations."})]}),e.jsx(j,{}),e.jsx(b,{title:"Frequently Asked Questions • Code Completion Drills",questions:_}),e.jsx(y,{content:C,title:"CBSE Class XII IT 802 – Code Completion Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 8 Note (.txt)",downloadFileName:"004_002_topic8_note.txt"}),e.jsx(h,{note:"In Section B questions requiring code completion, pay close attention to exact variable names (like `languages`) and quotes around search strings (`'Python'`). Full marks depend on syntactical precision! — Sukanta Hui"})]})});export{I as default};
