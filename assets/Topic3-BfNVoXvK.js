import{j as e,b as y,bg as i}from"./vendor-react-core-Doz9nIC6.js";import{J as D}from"./JavaFileLoader-BfBG3xz_.js";import{F as v}from"./FAQTemplate-BHhlgA96.js";import{P as w}from"./PlainTextPrint-C08xhKA4.js";import{T as S}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const N=`import java.util.Scanner;\r
\r
public class MatrixDiagonalsDemo {\r
    public static void main(String[] args) {\r
        Scanner sc = new Scanner(System.in);\r
        System.out.print("Enter square matrix size N: ");\r
        int n = sc.nextInt();\r
        int[][] mat = new int[n][n];\r
\r
        System.out.println("Enter " + (n * n) + " elements:");\r
        for (int i = 0; i < n; i++) {\r
            for (int j = 0; j < n; j++) {\r
                mat[i][j] = sc.nextInt();\r
            }\r
        }\r
\r
        int primarySum = 0, secondarySum = 0;\r
\r
        System.out.println("\\nPrimary Diagonal (i == j):");\r
        for (int i = 0; i < n; i++) {\r
            System.out.print(mat[i][i] + " ");\r
            primarySum += mat[i][i];\r
        }\r
\r
        System.out.println("\\n\\nSecondary Diagonal (i + j == N - 1):");\r
        for (int i = 0; i < n; i++) {\r
            System.out.print(mat[i][n - 1 - i] + " ");\r
            secondarySum += mat[i][n - 1 - i];\r
        }\r
\r
        System.out.println("\\n\\nPrimary Diagonal Sum: " + primarySum);\r
        System.out.println("Secondary Diagonal Sum: " + secondarySum);\r
\r
        sc.close();\r
    }\r
}`,E=`================================================================================\r
CODER & ACCOTAX - ICSE CLASS X JAVA TUTORIAL\r
MODULE 003_001: Two Dimensional Array Concepts\r
TOPIC 3: Primary and Secondary Diagonal Elements\r
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
================================================================================`,P=[{question:"ICSE 2D Matrix Board Q1: What is the rule regarding Primary and Secondary Diagonal Elements (Question 1)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Primary and Secondary Diagonal Elements.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q2: What is the rule regarding Primary and Secondary Diagonal Elements (Question 2)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Primary and Secondary Diagonal Elements.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q3: What is the rule regarding Primary and Secondary Diagonal Elements (Question 3)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Primary and Secondary Diagonal Elements.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q4: What is the rule regarding Primary and Secondary Diagonal Elements (Question 4)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Primary and Secondary Diagonal Elements.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q5: What is the rule regarding Primary and Secondary Diagonal Elements (Question 5)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Primary and Secondary Diagonal Elements.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q6: What is the rule regarding Primary and Secondary Diagonal Elements (Question 6)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Primary and Secondary Diagonal Elements.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q7: What is the rule regarding Primary and Secondary Diagonal Elements (Question 7)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Primary and Secondary Diagonal Elements.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q8: What is the rule regarding Primary and Secondary Diagonal Elements (Question 8)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Primary and Secondary Diagonal Elements.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q9: What is the rule regarding Primary and Secondary Diagonal Elements (Question 9)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Primary and Secondary Diagonal Elements.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q10: What is the rule regarding Primary and Secondary Diagonal Elements (Question 10)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Primary and Secondary Diagonal Elements.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q11: What is the rule regarding Primary and Secondary Diagonal Elements (Question 11)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Primary and Secondary Diagonal Elements.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q12: What is the rule regarding Primary and Secondary Diagonal Elements (Question 12)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Primary and Secondary Diagonal Elements.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q13: What is the rule regarding Primary and Secondary Diagonal Elements (Question 13)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Primary and Secondary Diagonal Elements.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q14: What is the rule regarding Primary and Secondary Diagonal Elements (Question 14)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Primary and Secondary Diagonal Elements.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q15: What is the rule regarding Primary and Secondary Diagonal Elements (Question 15)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Primary and Secondary Diagonal Elements.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q16: What is the rule regarding Primary and Secondary Diagonal Elements (Question 16)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Primary and Secondary Diagonal Elements.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q17: What is the rule regarding Primary and Secondary Diagonal Elements (Question 17)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Primary and Secondary Diagonal Elements.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"advanced",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q18: What is the rule regarding Primary and Secondary Diagonal Elements (Question 18)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Primary and Secondary Diagonal Elements.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"advanced",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q19: What is the rule regarding Primary and Secondary Diagonal Elements (Question 19)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Primary and Secondary Diagonal Elements.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"advanced",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q20: What is the rule regarding Primary and Secondary Diagonal Elements (Question 20)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Primary and Secondary Diagonal Elements.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"advanced",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q21: What is the rule regarding Primary and Secondary Diagonal Elements (Question 21)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Primary and Secondary Diagonal Elements.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"advanced",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q22: What is the rule regarding Primary and Secondary Diagonal Elements (Question 22)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Primary and Secondary Diagonal Elements.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"advanced",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q23: What is the rule regarding Primary and Secondary Diagonal Elements (Question 23)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Primary and Secondary Diagonal Elements.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"expert",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q24: What is the rule regarding Primary and Secondary Diagonal Elements (Question 24)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Primary and Secondary Diagonal Elements.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"expert",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q25: What is the rule regarding Primary and Secondary Diagonal Elements (Question 25)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Primary and Secondary Diagonal Elements.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"expert",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`}],k=()=>{const[u,h]=y.useState(3),[o,d]=y.useState("primary"),s=u===3?[[12,45,67],[23,89,34],[56,78,91]]:[[10,20,30,40],[15,25,35,45],[50,60,70,80],[55,65,75,85]],n=s.length,j=(r,a)=>r===a,g=(r,a)=>r+a===n-1;let c=0,m=0;for(let r=0;r<n;r++)c+=s[r][r],m+=s[r][n-1-r];let b=c+m;if(n%2===1){const r=Math.floor(n/2);b-=s[r][r]}return e.jsxs("div",{className:"bg-slate-950/90 p-6 rounded-2xl border border-slate-800 space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-sky-400",children:"📐 Interactive Diagonal Element Inspector"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Select diagonal mode to highlight matrix cells and observe Mathematical index formulas."})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Size N:"}),e.jsx("div",{className:"flex bg-slate-900 border border-slate-800 rounded-lg p-0.5",children:[3,4].map(r=>e.jsxs("button",{onClick:()=>h(r),className:i("px-2.5 py-1 text-xs font-mono rounded transition-all",u===r?"bg-amber-500 text-slate-950 font-bold":"text-slate-400 hover:text-slate-200"),children:[r,"x",r]},r))})]}),e.jsxs("div",{className:"flex flex-wrap gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs",children:[e.jsx("button",{onClick:()=>d("primary"),className:i("px-2.5 py-1 rounded transition-all font-medium",o==="primary"?"bg-emerald-500 text-white":"text-slate-400 hover:text-slate-200"),children:"Primary (i == j)"}),e.jsx("button",{onClick:()=>d("secondary"),className:i("px-2.5 py-1 rounded transition-all font-medium",o==="secondary"?"bg-sky-500 text-white":"text-slate-400 hover:text-slate-200"),children:"Secondary (i + j == N - 1)"}),e.jsx("button",{onClick:()=>d("both"),className:i("px-2.5 py-1 rounded transition-all font-medium",o==="both"?"bg-indigo-500 text-white":"text-slate-400 hover:text-slate-200"),children:"Both Diagonals"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider",children:[n,"x",n," Square Matrix Grid"]}),e.jsx("div",{className:"grid gap-2",style:{gridTemplateColumns:`repeat(${n}, minmax(0, 1fr))`},children:s.map((r,a)=>r.map((f,l)=>{const x=j(a,l),p=g(a,l);let t="bg-slate-950 text-slate-400 border-slate-800";return o==="primary"&&x?t="bg-emerald-500/20 border-emerald-500 text-emerald-300 ring-2 ring-emerald-500/30 font-bold scale-105 shadow-md shadow-emerald-500/10":o==="secondary"&&p?t="bg-sky-500/20 border-sky-400 text-sky-300 ring-2 ring-sky-400/30 font-bold scale-105 shadow-md shadow-sky-500/10":o==="both"&&(x&&p?t="bg-amber-500/30 border-amber-400 text-amber-200 ring-2 ring-amber-400/50 font-bold scale-110 shadow-lg shadow-amber-500/20":x?t="bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold":p&&(t="bg-sky-500/20 border-sky-400 text-sky-300 font-bold")),e.jsxs("div",{className:i("w-14 h-14 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 font-mono",t),children:[e.jsxs("span",{className:"text-[9px] opacity-60",children:["[",a,"][",l,"]"]}),e.jsx("span",{className:"text-sm",children:f})]},`${a}-${l}`)}))})]}),e.jsxs("div",{className:"space-y-4 font-mono text-xs",children:[e.jsx("div",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider",children:"Live Diagonal Calculation Metrics"}),e.jsxs("div",{className:"bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-2",children:[e.jsx("span",{className:"text-emerald-400 font-semibold",children:"Primary Diagonal Sum (i == j):"}),e.jsx("span",{className:"text-emerald-300 font-bold text-sm",children:c})]}),e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-2",children:[e.jsx("span",{className:"text-sky-400 font-semibold",children:"Secondary Diagonal Sum (i + j == N - 1):"}),e.jsx("span",{className:"text-sky-300 font-bold text-sm",children:m})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-amber-400 font-semibold",children:"Combined Diagonal Sum (No Double Count):"}),e.jsx("span",{className:"text-amber-300 font-bold text-sm",children:b})]})]}),e.jsxs("div",{className:"bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2 text-slate-300 font-sans text-xs",children:[e.jsxs("div",{className:"font-semibold text-sky-300",children:["Mathematical Index Rules for N = ",n,":"]}),e.jsxs("ul",{className:"space-y-1 text-slate-400 font-mono text-[11px]",children:[e.jsxs("li",{children:["• Primary Cell condition: ",e.jsx("code",{className:"text-emerald-400",children:"row == col (i == j)"})]}),e.jsxs("li",{children:["• Secondary Cell condition: ",e.jsxs("code",{className:"text-sky-400",children:["i + j == ",n-1," (j == ",n," - 1 - i)"]})]}),n%2===1&&e.jsxs("li",{className:"text-amber-300",children:["• Center Intersection Cell: ",e.jsxs("code",{className:"text-amber-300",children:["[",Math.floor(n/2),"][",Math.floor(n/2),"]"]})]})]})]})]})]})]})},O=()=>e.jsxs("div",{className:"dark bg-slate-900 text-slate-200 min-h-screen py-8 px-4 md:px-6 lg:px-8 space-y-12",children:[e.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_001 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"2D Array Concepts"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight",children:"Primary & Secondary Diagonal Elements"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Identifying left-to-right (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"i == j"}),") and right-to-left (",e.jsx("code",{className:"text-sky-400 font-mono",children:"i + j == N - 1"}),") matrix diagonals in square matrices."]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Concept Overview: Square Matrix Diagonals"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed",children:[e.jsxs("p",{children:["In ICSE Computer Applications, diagonal algorithms only apply to ",e.jsx("strong",{children:"Square Matrices"})," (where rows == columns, i.e., ",e.jsx("code",{className:"text-amber-300 font-mono",children:"N x N"}),")."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm pt-2",children:[e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-bold text-emerald-400 mb-1",children:"1. Primary (Main) Diagonal"}),e.jsxs("p",{className:"text-xs text-slate-400",children:["Runs from top-left corner to bottom-right corner. Condition: ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"i == j"})," (e.g., [0][0], [1][1], [2][2])."]})]}),e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-bold text-sky-400 mb-1",children:"2. Secondary (Anti) Diagonal"}),e.jsxs("p",{className:"text-xs text-slate-400",children:["Runs from top-right corner to bottom-left corner. Condition: ",e.jsx("code",{className:"text-sky-300 font-mono",children:"i + j == N - 1"})," (or ",e.jsx("code",{className:"text-sky-300 font-mono",children:"j == N - 1 - i"}),")."]})]})]}),e.jsxs("div",{className:"p-4 bg-slate-950/60 rounded-xl border-l-4 border-sky-500 text-slate-300",children:[e.jsx("p",{className:"font-semibold text-sky-300 mb-1",children:"Classroom Scenario (Naihati Lab):"}),e.jsxs("p",{className:"text-sm",children:["In Naihati, Sukanta Hui shows Abhronila that on a 3x3 chessboard, the primary diagonal entries have identical row and column numbers ([0][0], [1][1], [2][2]), while the secondary diagonal indices always sum up to ",e.jsx("code",{className:"text-amber-300 font-mono",children:"2"})," (3 - 1)!"]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Interactive Diagonal Inspector Tool"]}),e.jsx(k,{})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"🔍"})," Algorithmic Efficiency: $O(N^2)$ vs $O(N)$ Single-Loop Optimization"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-sm",children:[e.jsxs("div",{className:"bg-slate-950/60 p-5 rounded-xl border border-slate-800 space-y-3",children:[e.jsx("h3",{className:"font-bold text-amber-300 text-base",children:"Standard Nested Loop ($O(N^2)$)"}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 space-y-1",children:[e.jsx("div",{children:"for (int i = 0; i < n; i++) {"}),e.jsx("div",{className:"pl-4",children:"for (int j = 0; j < n; j++) {"}),e.jsx("div",{className:"pl-8 text-emerald-400",children:"if (i == j) {"}),e.jsx("div",{className:"pl-12 text-slate-300",children:"sum += mat[i][j];"}),e.jsx("div",{className:"pl-8",children:"}"}),e.jsx("div",{className:"pl-4",children:"}"}),e.jsx("div",{children:"}"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Checks all $N^2$ cells using nested loops and conditional checks."})]}),e.jsxs("div",{className:"bg-slate-950/60 p-5 rounded-xl border border-slate-800 space-y-3",children:[e.jsx("h3",{className:"font-bold text-emerald-400 text-base",children:"Optimized Single Loop ($O(N)$)"}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded-lg border border-slate-800 font-mono text-xs text-emerald-400 space-y-1",children:[e.jsx("div",{children:"for (int i = 0; i < n; i++) {"}),e.jsx("div",{className:"pl-4 text-emerald-300 font-bold",children:"primarySum += mat[i][i]; // Primary"}),e.jsx("div",{className:"pl-4 text-sky-300 font-bold",children:"secondarySum += mat[i][n - 1 - i]; // Secondary"}),e.jsx("div",{children:"}"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Traverses only $N$ steps directly accessing diagonal cells!"})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-on Java Source Code: ",e.jsx("code",{className:"font-mono text-emerald-300",children:"MatrixDiagonalsDemo.java"})]}),e.jsx(D,{fileModule:N,title:"MatrixDiagonalsDemo.java",highlightLines:[20,21,26,27]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & ICSE Board Exam Rules"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-semibold text-rose-300 mb-2",children:"Common Board Exam Pitfall"}),e.jsxs("p",{className:"text-slate-400 text-xs leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"mat[i][n - i]"})," for secondary diagonal. This causes an immediate ",e.jsx("code",{className:"text-rose-300 font-mono",children:"ArrayIndexOutOfBoundsException"})," when ",e.jsx("code",{className:"text-rose-300 font-mono",children:"i = 0"})," because ",e.jsx("code",{className:"text-rose-300 font-mono",children:"mat[0][n]"})," is out of bounds! The correct expression is ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"mat[i][n - 1 - i]"}),"."]})]}),e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-semibold text-emerald-300 mb-2",children:"ICSE Best Practice"}),e.jsx("p",{className:"text-slate-400 text-xs leading-relaxed",children:"When calculating the sum of BOTH diagonals in an odd-sized matrix (e.g. 3x3 or 5x5), remember to subtract the center element once so it isn't double-counted!"})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-sky-950/40 p-6 md:p-8 rounded-2xl border border-sky-800/60 shadow-lg",children:[e.jsxs("h3",{className:"text-lg font-semibold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"💭"})," Think About This..."]}),e.jsxs("ul",{className:"space-y-2 text-sky-200 text-sm",children:[e.jsxs("li",{children:["• What index condition identifies elements ABOVE the primary diagonal? (",e.jsx("code",{className:"text-sky-300 font-mono",children:"i < j"}),")"]}),e.jsxs("li",{children:["• What index condition identifies elements BELOW the primary diagonal? (",e.jsx("code",{className:"text-sky-300 font-mono",children:"i > j"}),")"]})]})]}),e.jsx("section",{className:"space-y-5",children:e.jsx(v,{title:"Primary & Secondary Diagonal FAQs",questions:P})}),e.jsx("section",{className:"space-y-5",children:e.jsx(w,{content:E,title:"Module 003_001 Topic 3: Primary and Secondary Diagonal Elements",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_001_topic3_note.txt"})}),e.jsx("section",{className:"space-y-5",children:e.jsx(S,{note:"Remember the golden formula: Primary is i == j, Secondary is i + j == N - 1. For secondary diagonal in a single loop, use mat[i][N - 1 - i]! — Sukanta Hui"})})]});export{O as default};
