import{j as e,b as u,bg as m}from"./vendor-react-core-Doz9nIC6.js";import{J as v}from"./JavaFileLoader-BfBG3xz_.js";import{F as N}from"./FAQTemplate-BHhlgA96.js";import{P as M}from"./PlainTextPrint-C08xhKA4.js";import{T as D}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const I=`import java.util.Scanner;\r
\r
public class MatrixInputOutputDemo {\r
    public static void main(String[] args) {\r
        Scanner sc = new Scanner(System.in);\r
\r
        System.out.print("Enter number of rows (R): ");\r
        int rows = sc.nextInt();\r
        System.out.print("Enter number of columns (C): ");\r
        int cols = sc.nextInt();\r
\r
        int[][] grid = new int[rows][cols];\r
\r
        System.out.println("\\nEnter " + (rows * cols) + " matrix elements:");\r
        for (int i = 0; i < rows; i++) {\r
            for (int j = 0; j < cols; j++) {\r
                System.out.print("Element [" + i + "][" + j + "]: ");\r
                grid[i][j] = sc.nextInt();\r
            }\r
        }\r
\r
        System.out.println("\\n--- Formatted Matrix Output ---");\r
        for (int i = 0; i < rows; i++) {\r
            for (int j = 0; j < cols; j++) {\r
                System.out.print(grid[i][j] + "\\t");\r
            }\r
            System.out.println();\r
        }\r
\r
        sc.close();\r
    }\r
}`,S=`================================================================================\r
CODER & ACCOTAX - ICSE CLASS X JAVA TUTORIAL\r
MODULE 003_001: Two Dimensional Array Concepts\r
TOPIC 1: Matrix Input and Output Using Nested Loops\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE CONCEPTS & RULES\r
--------------------------------------------------------------------------------\r
- 2D arrays are declared as type[][] arrayName = new type[rows][cols];\r
- Outer loop (i) iterates over rows: 0 to rows - 1.\r
- Inner loop (j) iterates over columns: 0 to cols - 1.\r
- Primary Diagonal: i == j (for square matrix).\r
- Secondary Diagonal: i + j == N - 1 (for square matrix).\r
\r
2. ESSENTIAL CHECKLIST\r
--------------------------------------------------------------------------------\r
[✓] Outer loop for rows, inner loop for columns\r
[✓] Correct 2D index bounds [i][j]\r
[✓] Variable description table documentation for Section B\r
================================================================================`,O=[{question:"ICSE 2D Matrix Board Q1: What is the rule regarding Matrix Input and Output Using Nested Loops (Question 1)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Input and Output Using Nested Loops.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q2: What is the rule regarding Matrix Input and Output Using Nested Loops (Question 2)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Input and Output Using Nested Loops.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q3: What is the rule regarding Matrix Input and Output Using Nested Loops (Question 3)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Input and Output Using Nested Loops.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q4: What is the rule regarding Matrix Input and Output Using Nested Loops (Question 4)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Input and Output Using Nested Loops.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q5: What is the rule regarding Matrix Input and Output Using Nested Loops (Question 5)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Input and Output Using Nested Loops.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q6: What is the rule regarding Matrix Input and Output Using Nested Loops (Question 6)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Input and Output Using Nested Loops.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q7: What is the rule regarding Matrix Input and Output Using Nested Loops (Question 7)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Input and Output Using Nested Loops.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q8: What is the rule regarding Matrix Input and Output Using Nested Loops (Question 8)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Input and Output Using Nested Loops.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q9: What is the rule regarding Matrix Input and Output Using Nested Loops (Question 9)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Input and Output Using Nested Loops.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q10: What is the rule regarding Matrix Input and Output Using Nested Loops (Question 10)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Input and Output Using Nested Loops.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q11: What is the rule regarding Matrix Input and Output Using Nested Loops (Question 11)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Input and Output Using Nested Loops.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q12: What is the rule regarding Matrix Input and Output Using Nested Loops (Question 12)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Input and Output Using Nested Loops.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q13: What is the rule regarding Matrix Input and Output Using Nested Loops (Question 13)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Input and Output Using Nested Loops.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q14: What is the rule regarding Matrix Input and Output Using Nested Loops (Question 14)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Input and Output Using Nested Loops.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q15: What is the rule regarding Matrix Input and Output Using Nested Loops (Question 15)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Input and Output Using Nested Loops.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q16: What is the rule regarding Matrix Input and Output Using Nested Loops (Question 16)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Input and Output Using Nested Loops.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q17: What is the rule regarding Matrix Input and Output Using Nested Loops (Question 17)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Input and Output Using Nested Loops.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"advanced",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q18: What is the rule regarding Matrix Input and Output Using Nested Loops (Question 18)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Input and Output Using Nested Loops.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"advanced",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q19: What is the rule regarding Matrix Input and Output Using Nested Loops (Question 19)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Input and Output Using Nested Loops.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"advanced",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q20: What is the rule regarding Matrix Input and Output Using Nested Loops (Question 20)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Input and Output Using Nested Loops.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"advanced",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q21: What is the rule regarding Matrix Input and Output Using Nested Loops (Question 21)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Input and Output Using Nested Loops.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"advanced",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q22: What is the rule regarding Matrix Input and Output Using Nested Loops (Question 22)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Input and Output Using Nested Loops.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"advanced",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q23: What is the rule regarding Matrix Input and Output Using Nested Loops (Question 23)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Input and Output Using Nested Loops.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"expert",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q24: What is the rule regarding Matrix Input and Output Using Nested Loops (Question 24)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Input and Output Using Nested Loops.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"expert",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q25: What is the rule regarding Matrix Input and Output Using Nested Loops (Question 25)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Input and Output Using Nested Loops.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"expert",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`}],E=()=>{const[c,g]=u.useState(3),[l,f]=u.useState(3),[d,j]=u.useState([[12,25,34],[41,56,62],[78,89,90]]),[p,h]=u.useState("rowMajor"),b=(r,t)=>{const s=Math.max(1,Math.min(4,r)),n=Math.max(1,Math.min(4,t));g(s),f(n);const o=[];for(let a=0;a<s;a++){const x=[];for(let i=0;i<n;i++)x.push(d[a]?.[i]??(a+1)*10+(i+1));o.push(x)}j(o)},w=(r,t,s)=>{const n=parseInt(s,10),o=d.map((a,x)=>a.map((i,y)=>x===r&&y===t?isNaN(n)?0:n:i));j(o)};return e.jsxs("div",{className:"bg-slate-950/90 p-6 rounded-2xl border border-slate-800 space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-sky-400",children:"🧮 Interactive 2D Matrix Input & Format Simulator"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Adjust matrix dimensions, edit cell input values, and view formatted console output."})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Rows (R):"}),e.jsx("div",{className:"flex bg-slate-900 border border-slate-800 rounded-lg p-0.5",children:[2,3,4].map(r=>e.jsx("button",{onClick:()=>b(r,l),className:m("px-2.5 py-1 text-xs font-mono rounded transition-all",c===r?"bg-sky-500 text-white font-bold":"text-slate-400 hover:text-slate-200"),children:r},r))})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Cols (C):"}),e.jsx("div",{className:"flex bg-slate-900 border border-slate-800 rounded-lg p-0.5",children:[2,3,4].map(r=>e.jsx("button",{onClick:()=>b(c,r),className:m("px-2.5 py-1 text-xs font-mono rounded transition-all",l===r?"bg-indigo-500 text-white font-bold":"text-slate-400 hover:text-slate-200"),children:r},r))})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider",children:[e.jsx("span",{children:"2D Input Cells [i][j]"}),e.jsxs("span",{className:"text-sky-400 font-mono",children:[c," x ",l," (",c*l," Total Elements)"]})]}),e.jsx("div",{className:"bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2",children:d.map((r,t)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"text-xs font-mono text-slate-500 w-12",children:["Row ",t,":"]}),e.jsx("div",{className:"flex gap-2 flex-1",children:r.map((s,n)=>e.jsxs("div",{className:"flex-1",children:[e.jsx("input",{type:"number",value:s,onChange:o=>w(t,n,o.target.value),className:"w-full text-center bg-slate-950 border border-slate-700 focus:border-sky-500 rounded-lg py-2 text-xs font-mono text-amber-300 outline-none transition-all"}),e.jsxs("div",{className:"text-[9px] text-center text-slate-500 mt-0.5",children:["[",t,"][",n,"]"]})]},n))})]},t))})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider",children:"Terminal Output Preview"}),e.jsxs("div",{className:"flex gap-1.5 bg-slate-900 p-1 rounded-lg border border-slate-800",children:[e.jsx("button",{onClick:()=>h("rowMajor"),className:m("px-2 py-0.5 text-[11px] font-medium rounded transition-all",p==="rowMajor"?"bg-emerald-500 text-white":"text-slate-400 hover:text-slate-200"),children:"Row-Major"}),e.jsx("button",{onClick:()=>h("colMajor"),className:m("px-2 py-0.5 text-[11px] font-medium rounded transition-all",p==="colMajor"?"bg-indigo-500 text-white":"text-slate-400 hover:text-slate-200"),children:"Column-Major"})]})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-200 space-y-2",children:[e.jsx("div",{className:"text-slate-500 text-[11px]",children:'// Java Output (using System.out.print(matrix[i][j] + "\\t"))'}),e.jsx("div",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800/80 space-y-1 overflow-x-auto",children:p==="rowMajor"?d.map((r,t)=>e.jsx("div",{className:"text-emerald-400 flex gap-6",children:r.map((s,n)=>e.jsx("span",{className:"w-8 text-right inline-block",children:s},n))},t)):Array.from({length:l}).map((r,t)=>e.jsx("div",{className:"text-indigo-400 flex gap-6",children:d.map((s,n)=>e.jsx("span",{className:"w-8 text-right inline-block",children:s[t]},n))},t))}),e.jsx("div",{className:"text-[11px] text-slate-400 pt-1",children:p==="rowMajor"?"▶ Outer loop iterates rows (i = 0..R-1), inner loop prints columns (j = 0..C-1).":"▶ Outer loop iterates columns (j = 0..C-1), inner loop prints rows (i = 0..R-1)."})]})]})]})]})},B=()=>e.jsxs("div",{className:"dark bg-slate-900 text-slate-200 min-h-screen py-8 px-4 md:px-6 lg:px-8 space-y-12",children:[e.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_001 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"2D Array Concepts"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight",children:"Matrix Input & Output Using Nested Loops"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Reading 2D array elements from users via Scanner or BufferedReader and displaying formatted matrix grids using nested ",e.jsx("code",{className:"text-amber-300 font-mono",children:"for"})," loops."]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Concept Overview: The Nested Loop Traversal Rule"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed",children:[e.jsxs("p",{children:["To process a 2D matrix in Java, you need ",e.jsx("strong",{children:"two nested loops"}),":"]}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-sm text-slate-300",children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Outer Loop (",e.jsx("code",{className:"text-amber-300 font-mono",children:"i"}),"):"]})," Controls the current ",e.jsx("strong",{children:"row index"})," from ",e.jsx("code",{className:"text-sky-300 font-mono",children:"0"})," to ",e.jsx("code",{className:"text-sky-300 font-mono",children:"rows - 1"}),"."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Inner Loop (",e.jsx("code",{className:"text-amber-300 font-mono",children:"j"}),"):"]})," Controls the current ",e.jsx("strong",{children:"column index"})," from ",e.jsx("code",{className:"text-sky-300 font-mono",children:"0"})," to ",e.jsx("code",{className:"text-sky-300 font-mono",children:"cols - 1"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-slate-950/60 rounded-xl border-l-4 border-sky-500 text-slate-300",children:[e.jsx("p",{className:"font-semibold text-sky-300 mb-1",children:"Classroom Analogy (Shyamnagar Center):"}),e.jsx("p",{className:"text-sm",children:"Sukanta Hui asks Swadeep to enter test scores for 3 subjects across 4 students. Swadeep inputs Row 0 (Student 1's scores), then Row 1 (Student 2's scores), and so on. Each row requires an inner loop pass across all subject columns!"})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Interactive Matrix Builder & Formatting Tool"]}),e.jsx(E,{})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"🔍"})," Technical Breakdown: Input vs Output Execution Steps"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-sm",children:[e.jsxs("div",{className:"bg-slate-950/60 p-5 rounded-xl border border-slate-800 space-y-3",children:[e.jsx("h3",{className:"font-bold text-sky-300 text-base",children:"1. Matrix Input Phase"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Reading user elements into cell locations:"}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded-lg border border-slate-800 font-mono text-xs text-amber-300 space-y-1",children:[e.jsx("div",{children:"for (int i = 0; i < rows; i++) {"}),e.jsx("div",{className:"pl-4",children:"for (int j = 0; j < cols; j++) {"}),e.jsx("div",{className:"pl-8 text-emerald-400",children:"matrix[i][j] = sc.nextInt();"}),e.jsx("div",{className:"pl-4",children:"}"}),e.jsx("div",{children:"}"})]}),e.jsx("ul",{className:"list-disc pl-4 space-y-1 text-xs text-slate-400",children:e.jsxs("li",{children:["Populates each cell ",e.jsx("code",{className:"text-sky-300 font-mono",children:"matrix[i][j]"})," sequentially in row-major order."]})})]}),e.jsxs("div",{className:"bg-slate-950/60 p-5 rounded-xl border border-slate-800 space-y-3",children:[e.jsx("h3",{className:"font-bold text-emerald-300 text-base",children:"2. Formatted Output Phase"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Printing cells as a neat 2D grid:"}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded-lg border border-slate-800 font-mono text-xs text-amber-300 space-y-1",children:[e.jsx("div",{children:"for (int i = 0; i < rows; i++) {"}),e.jsx("div",{className:"pl-4",children:"for (int j = 0; j < cols; j++) {"}),e.jsx("div",{className:"pl-8 text-emerald-400",children:'System.out.print(matrix[i][j] + "\\t");'}),e.jsx("div",{className:"pl-4",children:"}"}),e.jsx("div",{className:"pl-4 text-indigo-400",children:"System.out.println(); // Newline per row"}),e.jsx("div",{children:"}"})]}),e.jsxs("ul",{className:"list-disc pl-4 space-y-1 text-xs text-slate-400",children:[e.jsxs("li",{children:["Use tab ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"\\t"})," to separate column values."]}),e.jsxs("li",{children:["Call ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"System.out.println()"})," after completing each row."]})]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-on Java Source Code: ",e.jsx("code",{className:"font-mono text-emerald-300",children:"MatrixInputOutputDemo.java"})]}),e.jsx(v,{fileModule:I,title:"MatrixInputOutputDemo.java",highlightLines:[14,15,16,17,23,24,25,27]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & ICSE Board Guidelines"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-semibold text-rose-300 mb-2",children:"Common Exam Pitfall"}),e.jsxs("p",{className:"text-slate-400 text-xs leading-relaxed",children:["Forgetting to place ",e.jsx("code",{className:"text-rose-300 font-mono",children:"System.out.println();"})," after the inner loop. Without it, all matrix elements will print in a single horizontal line instead of a grid!"]})]}),e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-semibold text-emerald-300 mb-2",children:"ICSE Best Practice"}),e.jsxs("p",{className:"text-slate-400 text-xs leading-relaxed",children:["Always print user prompt messages like ",e.jsx("code",{className:"text-emerald-300 font-mono",children:'"Enter element [" + i + "][" + j + "]: "'})," so users know which cell value they are entering in BlueJ terminal."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-sky-950/40 p-6 md:p-8 rounded-2xl border border-sky-800/60 shadow-lg",children:[e.jsxs("h3",{className:"text-lg font-semibold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"💭"})," Think About This..."]}),e.jsxs("ul",{className:"space-y-2 text-sky-200 text-sm",children:[e.jsx("li",{children:"• What happens if you swap the inner and outer loops when printing a non-square matrix (e.g. 2x4)?"}),e.jsx("li",{children:"• How can you print a 2D matrix in reverse row order (from bottom row to top row)?"})]})]}),e.jsx("section",{className:"space-y-5",children:e.jsx(N,{title:"Matrix Input & Output FAQs",questions:O})}),e.jsx("section",{className:"space-y-5",children:e.jsx(M,{content:S,title:"Module 003_001 Topic 1: Matrix Input and Output Using Nested Loops",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_001_topic1_note.txt"})}),e.jsx("section",{className:"space-y-5",children:e.jsx(D,{note:"Remember: inner loop prints columns across the current row, outer loop moves down to the next row. Never forget System.out.println() after closing inner loop! — Sukanta Hui"})})]});export{B as default};
