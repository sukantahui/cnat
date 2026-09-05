import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const r=`import java.util.Scanner;\r
\r
public class PositiveNegativeCounterDemo {\r
    public static void main(String[] args) {\r
        Scanner sc = new Scanner(System.in);\r
        System.out.print("Enter number of elements: ");\r
        int n = sc.nextInt();\r
        int[] arr = new int[n];\r
\r
        System.out.println("Enter " + n + " integers:");\r
        for (int i = 0; i < n; i++) {\r
            arr[i] = sc.nextInt();\r
        }\r
\r
        int posCount = 0, negCount = 0, zeroCount = 0;\r
        for (int i = 0; i < n; i++) {\r
            if (arr[i] > 0) {\r
                posCount++;\r
            } else if (arr[i] < 0) {\r
                negCount++;\r
            } else {\r
                zeroCount++;\r
            }\r
        }\r
\r
        System.out.println("\\n--- Analysis Results ---");\r
        System.out.println("Positive Count: " + posCount);\r
        System.out.println("Negative Count: " + negCount);\r
        System.out.println("Zero Count:     " + zeroCount);\r
        \r
        \r
    }\r
}`,o=`================================================================================\r
CODER & ACCOTAX - ICSE CLASS X JAVA TUTORIAL\r
MODULE 002_001: 1D Array (Numeric Values)\r
TOPIC 17: Counting Positive and Negative Numbers\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE CONCEPTS & RULES\r
--------------------------------------------------------------------------------\r
- Strictly follow ICSE Board syllabus guidelines.\r
- Always use manual for-loops for array traversal.\r
- Do NOT use out-of-syllabus java.util.Arrays utility class.\r
- Pay attention to array boundaries (0 to length - 1).\r
\r
2. ESSENTIAL CHECKLIST\r
--------------------------------------------------------------------------------\r
[✓] Manual loop traversal\r
[✓] Correct index range validation\r
[✓] Variable description table documentation for Section B\r
================================================================================`,s=[{question:"ICSE Board Q1: What is the key concept regarding Counting Positive and Negative Numbers (Question 1)?",shortAnswer:"Immediate answer explaining Counting Positive and Negative Numbers algorithm rule 1.",explanation:"Detailed conceptual breakdown for ICSE Class 10 students covering loop bounds, variable tracing, and memory management.",hint:"Remember to dry run your code step-by-step on paper.",level:"basic",codeExample:`// Sample Java snippet for Counting Positive and Negative Numbers
for (int i = 0; i < arr.length; i++) {
    // Core logic
}`},{question:"ICSE Board Q2: What is the key concept regarding Counting Positive and Negative Numbers (Question 2)?",shortAnswer:"Immediate answer explaining Counting Positive and Negative Numbers algorithm rule 2.",explanation:"Detailed conceptual breakdown for ICSE Class 10 students covering loop bounds, variable tracing, and memory management.",hint:"Remember to dry run your code step-by-step on paper.",level:"basic",codeExample:`// Sample Java snippet for Counting Positive and Negative Numbers
for (int i = 0; i < arr.length; i++) {
    // Core logic
}`},{question:"ICSE Board Q3: What is the key concept regarding Counting Positive and Negative Numbers (Question 3)?",shortAnswer:"Immediate answer explaining Counting Positive and Negative Numbers algorithm rule 3.",explanation:"Detailed conceptual breakdown for ICSE Class 10 students covering loop bounds, variable tracing, and memory management.",hint:"Remember to dry run your code step-by-step on paper.",level:"basic",codeExample:`// Sample Java snippet for Counting Positive and Negative Numbers
for (int i = 0; i < arr.length; i++) {
    // Core logic
}`},{question:"ICSE Board Q4: What is the key concept regarding Counting Positive and Negative Numbers (Question 4)?",shortAnswer:"Immediate answer explaining Counting Positive and Negative Numbers algorithm rule 4.",explanation:"Detailed conceptual breakdown for ICSE Class 10 students covering loop bounds, variable tracing, and memory management.",hint:"Remember to dry run your code step-by-step on paper.",level:"basic",codeExample:`// Sample Java snippet for Counting Positive and Negative Numbers
for (int i = 0; i < arr.length; i++) {
    // Core logic
}`},{question:"ICSE Board Q5: What is the key concept regarding Counting Positive and Negative Numbers (Question 5)?",shortAnswer:"Immediate answer explaining Counting Positive and Negative Numbers algorithm rule 5.",explanation:"Detailed conceptual breakdown for ICSE Class 10 students covering loop bounds, variable tracing, and memory management.",hint:"Remember to dry run your code step-by-step on paper.",level:"basic",codeExample:`// Sample Java snippet for Counting Positive and Negative Numbers
for (int i = 0; i < arr.length; i++) {
    // Core logic
}`},{question:"ICSE Board Q6: What is the key concept regarding Counting Positive and Negative Numbers (Question 6)?",shortAnswer:"Immediate answer explaining Counting Positive and Negative Numbers algorithm rule 6.",explanation:"Detailed conceptual breakdown for ICSE Class 10 students covering loop bounds, variable tracing, and memory management.",hint:"Remember to dry run your code step-by-step on paper.",level:"basic",codeExample:`// Sample Java snippet for Counting Positive and Negative Numbers
for (int i = 0; i < arr.length; i++) {
    // Core logic
}`},{question:"ICSE Board Q7: What is the key concept regarding Counting Positive and Negative Numbers (Question 7)?",shortAnswer:"Immediate answer explaining Counting Positive and Negative Numbers algorithm rule 7.",explanation:"Detailed conceptual breakdown for ICSE Class 10 students covering loop bounds, variable tracing, and memory management.",hint:"Remember to dry run your code step-by-step on paper.",level:"basic",codeExample:`// Sample Java snippet for Counting Positive and Negative Numbers
for (int i = 0; i < arr.length; i++) {
    // Core logic
}`},{question:"ICSE Board Q8: What is the key concept regarding Counting Positive and Negative Numbers (Question 8)?",shortAnswer:"Immediate answer explaining Counting Positive and Negative Numbers algorithm rule 8.",explanation:"Detailed conceptual breakdown for ICSE Class 10 students covering loop bounds, variable tracing, and memory management.",hint:"Remember to dry run your code step-by-step on paper.",level:"basic",codeExample:`// Sample Java snippet for Counting Positive and Negative Numbers
for (int i = 0; i < arr.length; i++) {
    // Core logic
}`},{question:"ICSE Board Q9: What is the key concept regarding Counting Positive and Negative Numbers (Question 9)?",shortAnswer:"Immediate answer explaining Counting Positive and Negative Numbers algorithm rule 9.",explanation:"Detailed conceptual breakdown for ICSE Class 10 students covering loop bounds, variable tracing, and memory management.",hint:"Remember to dry run your code step-by-step on paper.",level:"intermediate",codeExample:`// Sample Java snippet for Counting Positive and Negative Numbers
for (int i = 0; i < arr.length; i++) {
    // Core logic
}`},{question:"ICSE Board Q10: What is the key concept regarding Counting Positive and Negative Numbers (Question 10)?",shortAnswer:"Immediate answer explaining Counting Positive and Negative Numbers algorithm rule 10.",explanation:"Detailed conceptual breakdown for ICSE Class 10 students covering loop bounds, variable tracing, and memory management.",hint:"Remember to dry run your code step-by-step on paper.",level:"intermediate",codeExample:`// Sample Java snippet for Counting Positive and Negative Numbers
for (int i = 0; i < arr.length; i++) {
    // Core logic
}`},{question:"ICSE Board Q11: What is the key concept regarding Counting Positive and Negative Numbers (Question 11)?",shortAnswer:"Immediate answer explaining Counting Positive and Negative Numbers algorithm rule 11.",explanation:"Detailed conceptual breakdown for ICSE Class 10 students covering loop bounds, variable tracing, and memory management.",hint:"Remember to dry run your code step-by-step on paper.",level:"intermediate",codeExample:`// Sample Java snippet for Counting Positive and Negative Numbers
for (int i = 0; i < arr.length; i++) {
    // Core logic
}`},{question:"ICSE Board Q12: What is the key concept regarding Counting Positive and Negative Numbers (Question 12)?",shortAnswer:"Immediate answer explaining Counting Positive and Negative Numbers algorithm rule 12.",explanation:"Detailed conceptual breakdown for ICSE Class 10 students covering loop bounds, variable tracing, and memory management.",hint:"Remember to dry run your code step-by-step on paper.",level:"intermediate",codeExample:`// Sample Java snippet for Counting Positive and Negative Numbers
for (int i = 0; i < arr.length; i++) {
    // Core logic
}`},{question:"ICSE Board Q13: What is the key concept regarding Counting Positive and Negative Numbers (Question 13)?",shortAnswer:"Immediate answer explaining Counting Positive and Negative Numbers algorithm rule 13.",explanation:"Detailed conceptual breakdown for ICSE Class 10 students covering loop bounds, variable tracing, and memory management.",hint:"Remember to dry run your code step-by-step on paper.",level:"intermediate",codeExample:`// Sample Java snippet for Counting Positive and Negative Numbers
for (int i = 0; i < arr.length; i++) {
    // Core logic
}`},{question:"ICSE Board Q14: What is the key concept regarding Counting Positive and Negative Numbers (Question 14)?",shortAnswer:"Immediate answer explaining Counting Positive and Negative Numbers algorithm rule 14.",explanation:"Detailed conceptual breakdown for ICSE Class 10 students covering loop bounds, variable tracing, and memory management.",hint:"Remember to dry run your code step-by-step on paper.",level:"intermediate",codeExample:`// Sample Java snippet for Counting Positive and Negative Numbers
for (int i = 0; i < arr.length; i++) {
    // Core logic
}`},{question:"ICSE Board Q15: What is the key concept regarding Counting Positive and Negative Numbers (Question 15)?",shortAnswer:"Immediate answer explaining Counting Positive and Negative Numbers algorithm rule 15.",explanation:"Detailed conceptual breakdown for ICSE Class 10 students covering loop bounds, variable tracing, and memory management.",hint:"Remember to dry run your code step-by-step on paper.",level:"intermediate",codeExample:`// Sample Java snippet for Counting Positive and Negative Numbers
for (int i = 0; i < arr.length; i++) {
    // Core logic
}`},{question:"ICSE Board Q16: What is the key concept regarding Counting Positive and Negative Numbers (Question 16)?",shortAnswer:"Immediate answer explaining Counting Positive and Negative Numbers algorithm rule 16.",explanation:"Detailed conceptual breakdown for ICSE Class 10 students covering loop bounds, variable tracing, and memory management.",hint:"Remember to dry run your code step-by-step on paper.",level:"intermediate",codeExample:`// Sample Java snippet for Counting Positive and Negative Numbers
for (int i = 0; i < arr.length; i++) {
    // Core logic
}`},{question:"ICSE Board Q17: What is the key concept regarding Counting Positive and Negative Numbers (Question 17)?",shortAnswer:"Immediate answer explaining Counting Positive and Negative Numbers algorithm rule 17.",explanation:"Detailed conceptual breakdown for ICSE Class 10 students covering loop bounds, variable tracing, and memory management.",hint:"Remember to dry run your code step-by-step on paper.",level:"advanced",codeExample:`// Sample Java snippet for Counting Positive and Negative Numbers
for (int i = 0; i < arr.length; i++) {
    // Core logic
}`},{question:"ICSE Board Q18: What is the key concept regarding Counting Positive and Negative Numbers (Question 18)?",shortAnswer:"Immediate answer explaining Counting Positive and Negative Numbers algorithm rule 18.",explanation:"Detailed conceptual breakdown for ICSE Class 10 students covering loop bounds, variable tracing, and memory management.",hint:"Remember to dry run your code step-by-step on paper.",level:"advanced",codeExample:`// Sample Java snippet for Counting Positive and Negative Numbers
for (int i = 0; i < arr.length; i++) {
    // Core logic
}`},{question:"ICSE Board Q19: What is the key concept regarding Counting Positive and Negative Numbers (Question 19)?",shortAnswer:"Immediate answer explaining Counting Positive and Negative Numbers algorithm rule 19.",explanation:"Detailed conceptual breakdown for ICSE Class 10 students covering loop bounds, variable tracing, and memory management.",hint:"Remember to dry run your code step-by-step on paper.",level:"advanced",codeExample:`// Sample Java snippet for Counting Positive and Negative Numbers
for (int i = 0; i < arr.length; i++) {
    // Core logic
}`},{question:"ICSE Board Q20: What is the key concept regarding Counting Positive and Negative Numbers (Question 20)?",shortAnswer:"Immediate answer explaining Counting Positive and Negative Numbers algorithm rule 20.",explanation:"Detailed conceptual breakdown for ICSE Class 10 students covering loop bounds, variable tracing, and memory management.",hint:"Remember to dry run your code step-by-step on paper.",level:"advanced",codeExample:`// Sample Java snippet for Counting Positive and Negative Numbers
for (int i = 0; i < arr.length; i++) {
    // Core logic
}`},{question:"ICSE Board Q21: What is the key concept regarding Counting Positive and Negative Numbers (Question 21)?",shortAnswer:"Immediate answer explaining Counting Positive and Negative Numbers algorithm rule 21.",explanation:"Detailed conceptual breakdown for ICSE Class 10 students covering loop bounds, variable tracing, and memory management.",hint:"Remember to dry run your code step-by-step on paper.",level:"advanced",codeExample:`// Sample Java snippet for Counting Positive and Negative Numbers
for (int i = 0; i < arr.length; i++) {
    // Core logic
}`},{question:"ICSE Board Q22: What is the key concept regarding Counting Positive and Negative Numbers (Question 22)?",shortAnswer:"Immediate answer explaining Counting Positive and Negative Numbers algorithm rule 22.",explanation:"Detailed conceptual breakdown for ICSE Class 10 students covering loop bounds, variable tracing, and memory management.",hint:"Remember to dry run your code step-by-step on paper.",level:"advanced",codeExample:`// Sample Java snippet for Counting Positive and Negative Numbers
for (int i = 0; i < arr.length; i++) {
    // Core logic
}`},{question:"ICSE Board Q23: What is the key concept regarding Counting Positive and Negative Numbers (Question 23)?",shortAnswer:"Immediate answer explaining Counting Positive and Negative Numbers algorithm rule 23.",explanation:"Detailed conceptual breakdown for ICSE Class 10 students covering loop bounds, variable tracing, and memory management.",hint:"Remember to dry run your code step-by-step on paper.",level:"expert",codeExample:`// Sample Java snippet for Counting Positive and Negative Numbers
for (int i = 0; i < arr.length; i++) {
    // Core logic
}`},{question:"ICSE Board Q24: What is the key concept regarding Counting Positive and Negative Numbers (Question 24)?",shortAnswer:"Immediate answer explaining Counting Positive and Negative Numbers algorithm rule 24.",explanation:"Detailed conceptual breakdown for ICSE Class 10 students covering loop bounds, variable tracing, and memory management.",hint:"Remember to dry run your code step-by-step on paper.",level:"expert",codeExample:`// Sample Java snippet for Counting Positive and Negative Numbers
for (int i = 0; i < arr.length; i++) {
    // Core logic
}`},{question:"ICSE Board Q25: What is the key concept regarding Counting Positive and Negative Numbers (Question 25)?",shortAnswer:"Immediate answer explaining Counting Positive and Negative Numbers algorithm rule 25.",explanation:"Detailed conceptual breakdown for ICSE Class 10 students covering loop bounds, variable tracing, and memory management.",hint:"Remember to dry run your code step-by-step on paper.",level:"expert",codeExample:`// Sample Java snippet for Counting Positive and Negative Numbers
for (int i = 0; i < arr.length; i++) {
    // Core logic
}`}],l=()=>e.jsxs("svg",{viewBox:"0 0 500 150",className:"w-full h-auto max-w-xl mx-auto my-4","aria-label":"Counting Positive and Negative Numbers Diagram",children:[e.jsx("rect",{x:"20",y:"20",width:"460",height:"110",rx:"10",fill:"#0f172a",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"250",y:"55",textAnchor:"middle",fill:"#38bdf8",fontSize:"16",fontWeight:"bold",children:"ICSE Algorithm: Counting Positive and Negative Numbers"}),e.jsx("rect",{x:"60",y:"75",width:"70",height:"35",rx:"5",fill:"#1e293b",stroke:"#34d399",strokeWidth:"1.5"}),e.jsx("text",{x:"95",y:"97",textAnchor:"middle",fill:"#34d399",fontSize:"12",fontWeight:"bold",children:"arr[0]"}),e.jsx("rect",{x:"150",y:"75",width:"70",height:"35",rx:"5",fill:"#1e293b",stroke:"#34d399",strokeWidth:"1.5"}),e.jsx("text",{x:"185",y:"97",textAnchor:"middle",fill:"#34d399",fontSize:"12",fontWeight:"bold",children:"arr[1]"}),e.jsx("rect",{x:"240",y:"75",width:"70",height:"35",rx:"5",fill:"#1e293b",stroke:"#34d399",strokeWidth:"1.5"}),e.jsx("text",{x:"275",y:"97",textAnchor:"middle",fill:"#34d399",fontSize:"12",fontWeight:"bold",children:"arr[2]"}),e.jsx("rect",{x:"330",y:"75",width:"70",height:"35",rx:"5",fill:"#1e293b",stroke:"#34d399",strokeWidth:"1.5"}),e.jsx("text",{x:"365",y:"97",textAnchor:"middle",fill:"#34d399",fontSize:"12",fontWeight:"bold",children:"arr[3]"}),e.jsx("line",{x1:"410",y1:"92",x2:"440",y2:"92",stroke:"#fbbf24",strokeWidth:"2",strokeDasharray:"3"})]}),h=()=>e.jsxs("div",{className:"dark bg-slate-900 text-slate-200 min-h-screen py-8 px-4 md:px-6 lg:px-8 space-y-12",children:[e.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_001 · Topic 17"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"1D Array Numeric"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight",children:"Counting Positive and Negative Numbers"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Categorizing numbers and zero elements using conditional array iteration"})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Concept Overview"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed",children:[e.jsxs("p",{children:["Understanding ",e.jsx("strong",{children:"Counting Positive and Negative Numbers"})," is a core algorithm requirement in the ICSE Class X Computer Applications syllabus."]}),e.jsxs("div",{className:"p-4 bg-slate-950/60 rounded-xl border-l-4 border-sky-500 text-slate-300",children:[e.jsx("p",{className:"font-semibold text-sky-300 mb-1",children:"Classroom Scenario:"}),e.jsx("p",{className:"text-sm",children:"In Barrackpore lab, Debangshu analyzes temperature readings over a month to count warm days (>0°C) and freezing days (<0°C)."})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Algorithm Visual Blueprint"]}),e.jsx("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800",children:e.jsx(l,{})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"🔍"})," Technical Breakdown & Execution Logic"]}),e.jsxs("div",{className:"bg-slate-950/60 p-6 rounded-xl border border-slate-800 space-y-3 text-slate-300",children:[e.jsx("p",{className:"font-semibold text-sky-300",children:"Step-by-Step ICSE Execution Logic:"}),e.jsxs("ol",{className:"list-decimal pl-5 space-y-2 text-sm text-slate-300",children:[e.jsxs("li",{children:["Initialize array boundaries from index ",e.jsx("code",{className:"text-amber-300 font-mono",children:"0"})," to ",e.jsx("code",{className:"text-amber-300 font-mono",children:"arr.length - 1"}),"."]}),e.jsxs("li",{children:["Iterate through the elements using a standard manual ",e.jsx("code",{className:"text-amber-300 font-mono",children:"for"})," loop."]}),e.jsx("li",{children:"Apply conditional checks or variable updates inside the loop."}),e.jsxs("li",{children:["Output the calculated values cleanly using ",e.jsx("code",{className:"text-amber-300 font-mono",children:"System.out.println()"}),"."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-on Java Source Code"]}),e.jsx(n,{fileModule:r,title:"PositiveNegativeCounterDemo.java",highlightLines:[]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Best Practices"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-semibold text-rose-300 mb-2",children:"Common Board Exam Pitfall"}),e.jsxs("p",{className:"text-slate-400",children:["Iterating past valid indices (",e.jsx("code",{className:"text-rose-300 font-mono",children:"i <= arr.length"}),") resulting in ",e.jsx("code",{className:"text-rose-300 font-mono",children:"ArrayIndexOutOfBoundsException"}),"."]})]}),e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-semibold text-emerald-300 mb-2",children:"ICSE Best Practice"}),e.jsx("p",{className:"text-slate-400",children:"Always write clear comments and maintain a Variable Description Table for 60-mark Section B questions."})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-sky-950/40 p-6 md:p-8 rounded-2xl border border-sky-800/60 shadow-lg",children:[e.jsxs("h3",{className:"text-lg font-semibold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"💭"})," Think About This..."]}),e.jsxs("ul",{className:"space-y-2 text-sky-200 text-sm",children:[e.jsx("li",{children:"• How would the time complexity change if array size doubles?"}),e.jsx("li",{children:"• What edge cases (empty array, zero, negative numbers) could break your logic?"})]})]}),e.jsx("section",{className:"space-y-5",children:e.jsx(t,{title:"Counting Positive and Negative Numbers FAQs",questions:s})}),e.jsx("section",{className:"space-y-5",children:e.jsx(a,{content:o,title:"Module 002_001 Topic 17: Counting Positive and Negative Numbers",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_001_topic17_note.txt"})}),e.jsx("section",{className:"space-y-5",children:e.jsx(i,{note:"Practice dry running this algorithm on paper with a trace table before writing Java code in BlueJ. — Sukanta Hui"})})]});export{h as default};
