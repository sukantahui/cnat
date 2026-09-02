import{j as r,b as g,bg as d}from"./vendor-react-core-Doz9nIC6.js";import{J as h}from"./JavaFileLoader-BfBG3xz_.js";import{F as f}from"./FAQTemplate-BHhlgA96.js";import{P as y}from"./PlainTextPrint-C08xhKA4.js";import{T as w}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const v=`import java.util.Scanner;\r
\r
public class ICSEMatrixPatternsDemo {\r
    public static void main(String[] args) {\r
        Scanner sc = new Scanner(System.in);\r
        System.out.print("Enter square matrix dimension N: ");\r
        int n = sc.nextInt();\r
        int[][] mat = new int[n][n];\r
\r
        System.out.println("Enter elements for " + n + "x" + n + " matrix:");\r
        for (int i = 0; i < n; i++) {\r
            for (int j = 0; j < n; j++) {\r
                mat[i][j] = sc.nextInt();\r
            }\r
        }\r
\r
        System.out.println("\\n--- ICSE Board Analysis: Boundary Elements ---");\r
        int boundarySum = 0;\r
        for (int i = 0; i < n; i++) {\r
            for (int j = 0; j < n; j++) {\r
                // Check if element is on boundary (first/last row or column)\r
                if (i == 0 || i == n - 1 || j == 0 || j == n - 1) {\r
                    System.out.print(mat[i][j] + "\\t");\r
                    boundarySum += mat[i][j];\r
                } else {\r
                    System.out.print("\\t"); // Blank space for non-boundary\r
                }\r
            }\r
            System.out.println();\r
        }\r
\r
        System.out.println("\\nSum of Boundary Elements = " + boundarySum);\r
        sc.close();\r
    }\r
}`,P=`================================================================================\r
CODER & ACCOTAX - ICSE CLASS X JAVA TUTORIAL\r
MODULE 003_001: Two Dimensional Array Concepts\r
TOPIC 5: Board Pattern Programs on Matrices\r
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
================================================================================`,S=[{question:"ICSE 2D Matrix Board Q1: What is the rule regarding Board Pattern Programs on Matrices (Question 1)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Board Pattern Programs on Matrices.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q2: What is the rule regarding Board Pattern Programs on Matrices (Question 2)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Board Pattern Programs on Matrices.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q3: What is the rule regarding Board Pattern Programs on Matrices (Question 3)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Board Pattern Programs on Matrices.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q4: What is the rule regarding Board Pattern Programs on Matrices (Question 4)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Board Pattern Programs on Matrices.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q5: What is the rule regarding Board Pattern Programs on Matrices (Question 5)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Board Pattern Programs on Matrices.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q6: What is the rule regarding Board Pattern Programs on Matrices (Question 6)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Board Pattern Programs on Matrices.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q7: What is the rule regarding Board Pattern Programs on Matrices (Question 7)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Board Pattern Programs on Matrices.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q8: What is the rule regarding Board Pattern Programs on Matrices (Question 8)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Board Pattern Programs on Matrices.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q9: What is the rule regarding Board Pattern Programs on Matrices (Question 9)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Board Pattern Programs on Matrices.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q10: What is the rule regarding Board Pattern Programs on Matrices (Question 10)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Board Pattern Programs on Matrices.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q11: What is the rule regarding Board Pattern Programs on Matrices (Question 11)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Board Pattern Programs on Matrices.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q12: What is the rule regarding Board Pattern Programs on Matrices (Question 12)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Board Pattern Programs on Matrices.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q13: What is the rule regarding Board Pattern Programs on Matrices (Question 13)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Board Pattern Programs on Matrices.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q14: What is the rule regarding Board Pattern Programs on Matrices (Question 14)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Board Pattern Programs on Matrices.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q15: What is the rule regarding Board Pattern Programs on Matrices (Question 15)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Board Pattern Programs on Matrices.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q16: What is the rule regarding Board Pattern Programs on Matrices (Question 16)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Board Pattern Programs on Matrices.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q17: What is the rule regarding Board Pattern Programs on Matrices (Question 17)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Board Pattern Programs on Matrices.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"advanced",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q18: What is the rule regarding Board Pattern Programs on Matrices (Question 18)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Board Pattern Programs on Matrices.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"advanced",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q19: What is the rule regarding Board Pattern Programs on Matrices (Question 19)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Board Pattern Programs on Matrices.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"advanced",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q20: What is the rule regarding Board Pattern Programs on Matrices (Question 20)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Board Pattern Programs on Matrices.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"advanced",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q21: What is the rule regarding Board Pattern Programs on Matrices (Question 21)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Board Pattern Programs on Matrices.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"advanced",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q22: What is the rule regarding Board Pattern Programs on Matrices (Question 22)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Board Pattern Programs on Matrices.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"advanced",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q23: What is the rule regarding Board Pattern Programs on Matrices (Question 23)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Board Pattern Programs on Matrices.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"expert",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q24: What is the rule regarding Board Pattern Programs on Matrices (Question 24)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Board Pattern Programs on Matrices.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"expert",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q25: What is the rule regarding Board Pattern Programs on Matrices (Question 25)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Board Pattern Programs on Matrices.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"expert",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`}],M=()=>{const[n,c]=g.useState("boundary"),i=[[10,20,30,40],[15,25,35,45],[50,60,70,80],[55,65,75,85]],x=4,p=4,u=(a,e)=>a===0||a===x-1||e===0||e===p-1,b=(a,e)=>a>0&&a<x-1&&e>0&&e<p-1,j=(a,e)=>a<=e;let l=0;return i.forEach((a,e)=>{a.forEach((o,t)=>{n==="boundary"&&u(e,t)&&(l+=o),n==="nonBoundary"&&b(e,t)&&(l+=o),n==="upper"&&j(e,t)&&(l+=o),n==="transpose"&&(l+=o)})}),r.jsxs("div",{className:"bg-slate-950/90 p-6 rounded-2xl border border-slate-800 space-y-6",children:[r.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[r.jsxs("div",{children:[r.jsx("h3",{className:"text-base font-bold text-sky-400",children:"🧩 ICSE 10-Year Board Matrix Pattern Simulator"}),r.jsx("p",{className:"text-xs text-slate-400",children:"Select a classic ICSE Board Question pattern below to observe cell filtering logic."})]}),r.jsxs("div",{className:"flex flex-wrap gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-medium",children:[r.jsx("button",{onClick:()=>c("boundary"),className:d("px-3 py-1.5 rounded-lg transition-all",n==="boundary"?"bg-emerald-500 text-white font-bold shadow-md shadow-emerald-500/20":"text-slate-400 hover:text-slate-200"),children:"Boundary Elements"}),r.jsx("button",{onClick:()=>c("nonBoundary"),className:d("px-3 py-1.5 rounded-lg transition-all",n==="nonBoundary"?"bg-indigo-500 text-white font-bold shadow-md shadow-indigo-500/20":"text-slate-400 hover:text-slate-200"),children:"Non-Boundary (Core)"}),r.jsx("button",{onClick:()=>c("upper"),className:d("px-3 py-1.5 rounded-lg transition-all",n==="upper"?"bg-sky-500 text-white font-bold shadow-md shadow-sky-500/20":"text-slate-400 hover:text-slate-200"),children:"Upper Triangular"}),r.jsx("button",{onClick:()=>c("transpose"),className:d("px-3 py-1.5 rounded-lg transition-all",n==="transpose"?"bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20":"text-slate-400 hover:text-slate-200"),children:"Matrix Transpose"})]})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 items-center",children:[r.jsxs("div",{className:"flex flex-col items-center justify-center p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-3",children:[r.jsxs("div",{className:"flex justify-between items-center w-full px-2 text-xs text-slate-400 font-semibold",children:[r.jsx("span",{children:"4x4 Input Matrix Grid"}),r.jsxs("span",{className:"text-amber-400 font-mono",children:["Pattern Sum = ",l]})]}),r.jsx("div",{className:"grid grid-cols-4 gap-2 font-mono",children:n==="transpose"?i.map((a,e)=>i.map((o,t)=>{const s=i[t][e];return r.jsxs("div",{className:"w-14 h-14 rounded-xl border bg-amber-500/20 border-amber-400 text-amber-200 ring-2 ring-amber-400/30 flex flex-col items-center justify-center font-bold text-sm",children:[r.jsxs("span",{className:"text-[9px] opacity-60",children:["[",e,"][",t,"]"]}),r.jsx("span",{children:s})]},`t-${e}-${t}`)})):i.map((a,e)=>a.map((o,t)=>{let s=!1,m="bg-slate-950 text-slate-600 border-slate-800/80 opacity-40";return n==="boundary"&&u(e,t)?(s=!0,m="bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold ring-2 ring-emerald-500/30 scale-105"):n==="nonBoundary"&&b(e,t)?(s=!0,m="bg-indigo-500/20 border-indigo-400 text-indigo-300 font-bold ring-2 ring-indigo-400/30 scale-105"):n==="upper"&&j(e,t)&&(s=!0,m="bg-sky-500/20 border-sky-400 text-sky-300 font-bold ring-2 ring-sky-400/30 scale-105"),r.jsxs("div",{className:d("w-14 h-14 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 font-mono text-sm",m),children:[r.jsxs("span",{className:"text-[9px] opacity-60",children:["[",e,"][",t,"]"]}),r.jsx("span",{children:s?o:"·"})]},`${e}-${t}`)}))})]}),r.jsxs("div",{className:"space-y-4 font-mono text-xs",children:[r.jsx("div",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider font-sans",children:"Java Condition & Logic Breakdown"}),r.jsxs("div",{className:"bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-3",children:[n==="boundary"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"text-emerald-400 font-bold text-sm font-sans",children:"Boundary Condition (Outer Border):"}),r.jsxs("div",{className:"bg-slate-950 p-3 rounded-lg border border-slate-800 text-emerald-300 text-[11px] leading-relaxed",children:["if (i == 0 || i == R - 1 || j == 0 || j == C - 1) {",r.jsx("br",{}),'  System.out.print(mat[i][j] + "\\t");',r.jsx("br",{}),"} else {",r.jsx("br",{}),'  System.out.print("\\t"); // Leave blank',r.jsx("br",{}),"}"]}),r.jsx("p",{className:"text-slate-400 text-[11px] font-sans",children:"Selects outer ring cells where row index is 0/last or column index is 0/last."})]}),n==="nonBoundary"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"text-indigo-400 font-bold text-sm font-sans",children:"Non-Boundary Condition (Inner Core):"}),r.jsxs("div",{className:"bg-slate-950 p-3 rounded-lg border border-slate-800 text-indigo-300 text-[11px] leading-relaxed",children:["if (i > 0 && i < R - 1 && j > 0 && j < C - 1) {",r.jsx("br",{}),'  System.out.print(mat[i][j] + "\\t");',r.jsx("br",{}),"}"]}),r.jsx("p",{className:"text-slate-400 text-[11px] font-sans",children:"Selects inner grid cells excluding top/bottom rows and leftmost/rightmost columns."})]}),n==="upper"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"text-sky-400 font-bold text-sm font-sans",children:"Upper Triangular Condition:"}),r.jsxs("div",{className:"bg-slate-950 p-3 rounded-lg border border-slate-800 text-sky-300 text-[11px] leading-relaxed",children:["if (i <= j) {",r.jsx("br",{}),'  System.out.print(mat[i][j] + "\\t");',r.jsx("br",{}),"}"]}),r.jsx("p",{className:"text-slate-400 text-[11px] font-sans",children:"Selects primary diagonal elements and all cells above the primary diagonal."})]}),n==="transpose"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"text-amber-400 font-bold text-sm font-sans",children:"Transpose Matrix Logic (Swap Rows & Cols):"}),r.jsxs("div",{className:"bg-slate-950 p-3 rounded-lg border border-slate-800 text-amber-300 text-[11px] leading-relaxed",children:["for (int i = 0; i < C; i++) {",r.jsx("br",{}),"  for (int j = 0; j < R; j++) {",r.jsx("br",{}),'    System.out.print(mat[j][i] + "\\t"); // Access [j][i]',r.jsx("br",{}),"  }",r.jsx("br",{}),"}"]}),r.jsx("p",{className:"text-slate-400 text-[11px] font-sans",children:"Swaps row index and column index so rows become columns."})]})]})]})]})]})},A=()=>r.jsxs("div",{className:"dark bg-slate-900 text-slate-200 min-h-screen py-8 px-4 md:px-6 lg:px-8 space-y-12",children:[r.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}),r.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[r.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[r.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_001 · Topic 5"}),r.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"2D Array Concepts"})]}),r.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight",children:"Board Pattern Programs on Matrices"}),r.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Solving classic ICSE Class X Section B 10-mark matrix problems: boundary elements, non-boundary elements, upper/lower triangular forms, and transpose matrices."})]}),r.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[r.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[r.jsx("span",{children:"📖"})," Concept Overview: ICSE Board Matrix Patterns"]}),r.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed",children:[r.jsxs("p",{children:["In the ICSE Class X Computer Applications Section B paper (60 marks), matrix pattern problems carry ",r.jsx("strong",{children:"10 marks each"}),". These questions test your ability to construct precise conditional checks (",r.jsx("code",{className:"text-amber-300 font-mono",children:"if"})," statements) inside nested loops."]}),r.jsxs("div",{className:"p-4 bg-slate-950/60 rounded-xl border-l-4 border-sky-500 text-slate-300",children:[r.jsx("p",{className:"font-semibold text-sky-300 mb-1",children:"Classroom Scenario (Barrackpore Lab):"}),r.jsxs("p",{className:"text-sm",children:["Debangshu practices ICSE 10-year board paper questions with Sukanta Hui: printing boundary elements of a 4x4 matrix, leaving non-boundary inner spaces blank using ",r.jsx("code",{className:"text-amber-300 font-mono",children:'System.out.print("\\t")'}),"!"]})]})]})]}),r.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[r.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[r.jsx("span",{children:"⚙️"})," Interactive ICSE Matrix Pattern Simulator"]}),r.jsx(M,{})]}),r.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[r.jsxs("h2",{className:"text-2xl font-bold text-amber-400 flex items-center gap-2",children:[r.jsx("span",{children:"🔍"})," Summary Table of Classic Board Conditions"]}),r.jsx("div",{className:"overflow-x-auto bg-slate-950/60 rounded-xl border border-slate-800",children:r.jsxs("table",{className:"w-full text-left text-xs text-slate-300",children:[r.jsx("thead",{className:"bg-slate-900 text-sky-300 uppercase font-semibold border-b border-slate-800",children:r.jsxs("tr",{children:[r.jsx("th",{className:"p-3",children:"Pattern Type"}),r.jsx("th",{className:"p-3 font-mono",children:"Java Logical Condition"}),r.jsx("th",{className:"p-3",children:"Output Formatting Note"})]})}),r.jsxs("tbody",{className:"divide-y divide-slate-800 font-mono",children:[r.jsxs("tr",{children:[r.jsx("td",{className:"p-3 font-sans font-semibold text-emerald-400",children:"Boundary Elements"}),r.jsx("td",{className:"p-3 text-amber-300",children:"i == 0 || i == R - 1 || j == 0 || j == C - 1"}),r.jsx("td",{className:"p-3 font-sans text-slate-400",children:"Print element + \\t; else print blank \\t"})]}),r.jsxs("tr",{children:[r.jsx("td",{className:"p-3 font-sans font-semibold text-indigo-400",children:"Non-Boundary Elements"}),r.jsx("td",{className:"p-3 text-amber-300",children:"i > 0 && i < R - 1 && j > 0 && j < C - 1"}),r.jsx("td",{className:"p-3 font-sans text-slate-400",children:"Excludes outer ring cells"})]}),r.jsxs("tr",{children:[r.jsx("td",{className:"p-3 font-sans font-semibold text-sky-400",children:"Upper Triangular"}),r.jsx("td",{className:"p-3 text-amber-300",children:"i <= j"}),r.jsx("td",{className:"p-3 font-sans text-slate-400",children:"Elements on/above primary diagonal"})]}),r.jsxs("tr",{children:[r.jsx("td",{className:"p-3 font-sans font-semibold text-amber-400",children:"Lower Triangular"}),r.jsx("td",{className:"p-3 text-amber-300",children:"i >= j"}),r.jsx("td",{className:"p-3 font-sans text-slate-400",children:"Elements on/below primary diagonal"})]})]})]})})]}),r.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[r.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[r.jsx("span",{children:"💻"})," Hands-on Java Source Code: ",r.jsx("code",{className:"font-mono text-emerald-300",children:"ICSEMatrixPatternsDemo.java"})]}),r.jsx(h,{fileModule:v,title:"ICSEMatrixPatternsDemo.java",highlightLines:[22,23,24,26]})]}),r.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[r.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[r.jsx("span",{children:"⚠️"})," Common Pitfalls & ICSE Board Guidelines"]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[r.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[r.jsx("h3",{className:"font-semibold text-rose-300 mb-2",children:"Common Board Exam Pitfall"}),r.jsxs("p",{className:"text-slate-400 text-xs leading-relaxed",children:["Forgetting the ",r.jsx("code",{className:"text-rose-300 font-mono",children:"else"})," block when printing boundary elements. If you omit ",r.jsx("code",{className:"text-rose-300 font-mono",children:'else System.out.print("\\t");'}),", inner elements disappear without preserving the 2D grid shape!"]})]}),r.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[r.jsx("h3",{className:"font-semibold text-emerald-300 mb-2",children:"ICSE Best Practice"}),r.jsxs("p",{className:"text-slate-400 text-xs leading-relaxed",children:["Always write a ",r.jsx("strong",{children:"Variable Description Table"})," (Mnemonics, Data Type, Purpose) at the end of your Section B board program for full 10/10 marks."]})]})]})]}),r.jsxs("section",{className:"space-y-5 bg-sky-950/40 p-6 md:p-8 rounded-2xl border border-sky-800/60 shadow-lg",children:[r.jsxs("h3",{className:"text-lg font-semibold text-sky-300 flex items-center gap-2",children:[r.jsx("span",{children:"💭"})," Think About This..."]}),r.jsxs("ul",{className:"space-y-2 text-sky-200 text-sm",children:[r.jsx("li",{children:"• How would you write a program to check if a matrix is Symmetric ($A[i][j] == A[j][i]$)?"}),r.jsx("li",{children:"• How can you print only the 4 corner elements of an $R \\times C$ matrix?"})]})]}),r.jsx("section",{className:"space-y-5",children:r.jsx(f,{title:"Board Pattern Programs FAQs",questions:S})}),r.jsx("section",{className:"space-y-5",children:r.jsx(y,{content:P,title:"Module 003_001 Topic 5: Board Pattern Programs on Matrices",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_001_topic5_note.txt"})}),r.jsx("section",{className:"space-y-5",children:r.jsx(w,{note:"Practice writing Variable Description Tables for every matrix pattern program. It guarantees top marks in ICSE Board Examinations! — Sukanta Hui"})})]});export{A as default};
