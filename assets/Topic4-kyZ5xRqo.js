import{j as e,b as x,bg as f}from"./vendor-react-core-Doz9nIC6.js";import{J as M}from"./JavaFileLoader-BfBG3xz_.js";import{F as A}from"./FAQTemplate-BHhlgA96.js";import{P as D}from"./PlainTextPrint-C08xhKA4.js";import{T as N}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const E=`import java.util.Scanner;\r
\r
public class MatrixAdditionSubtractionDemo {\r
    public static void main(String[] args) {\r
        Scanner sc = new Scanner(System.in);\r
        int rows = 2, cols = 3;\r
\r
        int[][] a = new int[rows][cols];\r
        int[][] b = new int[rows][cols];\r
        int[][] sum = new int[rows][cols];\r
\r
        System.out.println("Enter elements for Matrix A (2x3):");\r
        for (int i = 0; i < rows; i++)\r
            for (int j = 0; j < cols; j++)\r
                a[i][j] = sc.nextInt();\r
\r
        System.out.println("Enter elements for Matrix B (2x3):");\r
        for (int i = 0; i < rows; i++)\r
            for (int j = 0; j < cols; j++)\r
                b[i][j] = sc.nextInt();\r
\r
        // Addition logic\r
        for (int i = 0; i < rows; i++) {\r
            for (int j = 0; j < cols; j++) {\r
                sum[i][j] = a[i][j] + b[i][j];\r
            }\r
        }\r
\r
        System.out.println("\\n--- Resultant Sum Matrix (A + B) ---");\r
        for (int i = 0; i < rows; i++) {\r
            for (int j = 0; j < cols; j++) {\r
                System.out.print(sum[i][j] + "\\t");\r
            }\r
            System.out.println();\r
        }\r
\r
        sc.close();\r
    }\r
}`,C=`================================================================================\r
CODER & ACCOTAX - ICSE CLASS X JAVA TUTORIAL\r
MODULE 003_001: Two Dimensional Array Concepts\r
TOPIC 4: Matrix Addition and Subtraction\r
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
================================================================================`,k=[{question:"ICSE 2D Matrix Board Q1: What is the rule regarding Matrix Addition and Subtraction (Question 1)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Addition and Subtraction.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q2: What is the rule regarding Matrix Addition and Subtraction (Question 2)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Addition and Subtraction.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q3: What is the rule regarding Matrix Addition and Subtraction (Question 3)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Addition and Subtraction.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q4: What is the rule regarding Matrix Addition and Subtraction (Question 4)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Addition and Subtraction.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q5: What is the rule regarding Matrix Addition and Subtraction (Question 5)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Addition and Subtraction.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q6: What is the rule regarding Matrix Addition and Subtraction (Question 6)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Addition and Subtraction.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q7: What is the rule regarding Matrix Addition and Subtraction (Question 7)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Addition and Subtraction.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q8: What is the rule regarding Matrix Addition and Subtraction (Question 8)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Addition and Subtraction.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q9: What is the rule regarding Matrix Addition and Subtraction (Question 9)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Addition and Subtraction.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q10: What is the rule regarding Matrix Addition and Subtraction (Question 10)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Addition and Subtraction.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q11: What is the rule regarding Matrix Addition and Subtraction (Question 11)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Addition and Subtraction.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q12: What is the rule regarding Matrix Addition and Subtraction (Question 12)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Addition and Subtraction.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q13: What is the rule regarding Matrix Addition and Subtraction (Question 13)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Addition and Subtraction.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q14: What is the rule regarding Matrix Addition and Subtraction (Question 14)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Addition and Subtraction.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q15: What is the rule regarding Matrix Addition and Subtraction (Question 15)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Addition and Subtraction.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q16: What is the rule regarding Matrix Addition and Subtraction (Question 16)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Addition and Subtraction.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q17: What is the rule regarding Matrix Addition and Subtraction (Question 17)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Addition and Subtraction.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"advanced",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q18: What is the rule regarding Matrix Addition and Subtraction (Question 18)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Addition and Subtraction.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"advanced",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q19: What is the rule regarding Matrix Addition and Subtraction (Question 19)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Addition and Subtraction.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"advanced",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q20: What is the rule regarding Matrix Addition and Subtraction (Question 20)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Addition and Subtraction.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"advanced",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q21: What is the rule regarding Matrix Addition and Subtraction (Question 21)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Addition and Subtraction.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"advanced",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q22: What is the rule regarding Matrix Addition and Subtraction (Question 22)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Addition and Subtraction.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"advanced",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q23: What is the rule regarding Matrix Addition and Subtraction (Question 23)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Addition and Subtraction.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"expert",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q24: What is the rule regarding Matrix Addition and Subtraction (Question 24)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Addition and Subtraction.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"expert",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q25: What is the rule regarding Matrix Addition and Subtraction (Question 25)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Matrix Addition and Subtraction.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"expert",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`}],B=()=>{const[o,m]=x.useState("add"),[s,y]=x.useState(2),[l,v]=x.useState([[10,20,30],[40,50,60]]),[d,S]=x.useState([[5,12,15],[20,25,30]]),g=(n,r,t,a)=>{const i=parseInt(a,10),w=isNaN(i)?0:i;n==="A"?v(u=>u.map((p,b)=>p.map((j,h)=>b===r&&h===t?w:j))):S(u=>u.map((p,b)=>p.map((j,h)=>b===r&&h===t?w:j)))},c=l.map((n,r)=>n.map((t,a)=>{const i=d[r]?.[a]??0;return o==="add"?t+i:o==="subtract"?t-i:t*s}));return e.jsxs("div",{className:"bg-slate-950/90 p-6 rounded-2xl border border-slate-800 space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-sky-400",children:"🧪 Interactive Dual-Matrix Operations Laboratory"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Edit elements in Matrix A and Matrix B to observe real-time element-wise C[i][j] calculations."})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("button",{onClick:()=>m("add"),className:f("px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",o==="add"?"bg-emerald-500 text-white shadow-md shadow-emerald-500/20":"bg-slate-900 text-slate-400 hover:text-slate-200"),children:"Addition (A + B)"}),e.jsx("button",{onClick:()=>m("subtract"),className:f("px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",o==="subtract"?"bg-sky-500 text-white shadow-md shadow-sky-500/20":"bg-slate-900 text-slate-400 hover:text-slate-200"),children:"Subtraction (A - B)"}),e.jsx("button",{onClick:()=>m("scalar"),className:f("px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",o==="scalar"?"bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20":"bg-slate-900 text-slate-400 hover:text-slate-200"),children:"Scalar (k · A)"})]})]}),o==="scalar"&&e.jsxs("div",{className:"flex items-center gap-4 bg-slate-900 p-3 rounded-xl border border-slate-800",children:[e.jsxs("span",{className:"text-xs text-amber-400 font-mono font-semibold",children:["Scalar Multiplier k = ",s]}),e.jsx("input",{type:"range",min:"1",max:"10",value:s,onChange:n=>y(parseInt(n.target.value,10)),className:"flex-1 accent-amber-500 cursor-pointer"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 items-center",children:[e.jsxs("div",{className:"space-y-2 bg-slate-900/80 p-4 rounded-xl border border-sky-500/30",children:[e.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold text-sky-400",children:[e.jsx("span",{children:"Matrix A (2x3)"}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"Term 1 Scores"})]}),e.jsx("div",{className:"space-y-2",children:l.map((n,r)=>e.jsx("div",{className:"flex gap-2",children:n.map((t,a)=>e.jsx("input",{type:"number",value:t,onChange:i=>g("A",r,a,i.target.value),className:"w-full text-center bg-slate-950 border border-slate-700 focus:border-sky-500 rounded-lg py-2 text-xs font-mono text-sky-300 outline-none"},a))},r))})]}),o!=="scalar"?e.jsxs("div",{className:"space-y-2 bg-slate-900/80 p-4 rounded-xl border border-indigo-500/30",children:[e.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold text-indigo-400",children:[e.jsx("span",{children:"Matrix B (2x3)"}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"Term 2 Scores"})]}),e.jsx("div",{className:"space-y-2",children:d.map((n,r)=>e.jsx("div",{className:"flex gap-2",children:n.map((t,a)=>e.jsx("input",{type:"number",value:t,onChange:i=>g("B",r,a,i.target.value),className:"w-full text-center bg-slate-950 border border-slate-700 focus:border-indigo-500 rounded-lg py-2 text-xs font-mono text-indigo-300 outline-none"},a))},r))})]}):e.jsxs("div",{className:"p-4 bg-slate-900/50 rounded-xl border border-amber-500/30 flex flex-col items-center justify-center text-center space-y-2",children:[e.jsxs("div",{className:"text-2xl font-bold text-amber-400 font-mono",children:["× ",s]}),e.jsxs("div",{className:"text-xs text-slate-400",children:["Each element of A is multiplied by ",s]})]}),e.jsxs("div",{className:"space-y-2 bg-slate-900/90 p-4 rounded-xl border border-emerald-500/40",children:[e.jsxs("div",{className:"flex items-center justify-between text-xs font-bold text-emerald-400",children:[e.jsx("span",{children:"Result Matrix C (2x3)"}),e.jsx("span",{className:"text-[10px] text-emerald-500/80",children:"C[i][j]"})]}),e.jsx("div",{className:"space-y-2 font-mono",children:c.map((n,r)=>e.jsx("div",{className:"flex gap-2",children:n.map((t,a)=>e.jsx("div",{className:"w-full text-center bg-emerald-500/10 border border-emerald-500/40 rounded-lg py-2 text-xs font-bold text-emerald-300",children:t},a))},r))})]})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs font-mono text-slate-300 flex items-center justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Element Formula for cell [0][0]:"}),e.jsxs("span",{className:"text-emerald-400 font-bold",children:[o==="add"&&`C[0][0] = A[0][0] + B[0][0] -> ${l[0][0]} + ${d[0][0]} = ${c[0][0]}`,o==="subtract"&&`C[0][0] = A[0][0] - B[0][0] -> ${l[0][0]} - ${d[0][0]} = ${c[0][0]}`,o==="scalar"&&`C[0][0] = ${s} * A[0][0] -> ${s} * ${l[0][0]} = ${c[0][0]}`]})]})]})},O=()=>e.jsxs("div",{className:"dark bg-slate-900 text-slate-200 min-h-screen py-8 px-4 md:px-6 lg:px-8 space-y-12",children:[e.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_001 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"2D Array Concepts"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight",children:"Matrix Addition & Subtraction"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Performing element-wise matrix arithmetic ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"C[i][j] = A[i][j] ± B[i][j]"})," on matching matrix dimensions."]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Concept Overview: The Dimension Compatibility Rule"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed",children:[e.jsxs("p",{children:["To perform Matrix Addition or Subtraction in Java, ",e.jsx("strong",{children:"both matrices must have identical dimensions"})," ($R \\times C$)."]}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-sm text-slate-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Addition:"})," ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"C[i][j] = A[i][j] + B[i][j]"})," for all $i \\in [0, R-1]$ and $j \\in [0, C-1]$."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Subtraction:"})," ",e.jsx("code",{className:"text-sky-400 font-mono",children:"C[i][j] = A[i][j] - B[i][j]"})," for all $i \\in [0, R-1]$ and $j \\in [0, C-1]$."]})]}),e.jsxs("div",{className:"p-4 bg-slate-950/60 rounded-xl border-l-4 border-sky-500 text-slate-300",children:[e.jsx("p",{className:"font-semibold text-sky-300 mb-1",children:"Classroom Scenario (Barrackpore Center):"}),e.jsx("p",{className:"text-sm",children:"Sukanta Hui combines Swadeep's Term 1 exam scores (Matrix A) and Term 2 exam scores (Matrix B) for 2 students across 3 subjects. Since both term reports have 2 rows and 3 columns, student scores add up cell-by-cell into Total Scores (Matrix C)!"})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Interactive Dual-Matrix Operations Laboratory"]}),e.jsx(B,{})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"🔍"})," Technical Breakdown: Nested Loop Execution Pattern"]}),e.jsxs("div",{className:"bg-slate-950/60 p-6 rounded-xl border border-slate-800 space-y-4 text-slate-300",children:[e.jsx("p",{className:"font-semibold text-sky-300 text-sm",children:"Java Nested Loop Implementation for Matrix Addition:"}),e.jsxs("div",{className:"bg-slate-900 p-4 rounded-xl border border-slate-800 font-mono text-xs text-amber-300 space-y-1",children:[e.jsx("div",{children:"int[][] c = new int[rows][cols]; // Resultant matrix"}),e.jsx("div",{className:"pt-2",children:"for (int i = 0; i < rows; i++) {"}),e.jsx("div",{className:"pl-4",children:"for (int j = 0; j < cols; j++) {"}),e.jsx("div",{className:"pl-8 text-emerald-400 font-bold",children:"c[i][j] = a[i][j] + b[i][j]; // Element-wise sum"}),e.jsx("div",{className:"pl-4",children:"}"}),e.jsx("div",{children:"}"})]}),e.jsxs("ol",{className:"list-decimal pl-5 space-y-1.5 text-xs text-slate-400",children:[e.jsxs("li",{children:["Resultant matrix ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"c"})," must be instantiated with dimensions ",e.jsx("code",{className:"text-amber-300 font-mono",children:"new int[rows][cols]"}),"."]}),e.jsxs("li",{children:["Both matrices ",e.jsx("code",{className:"text-sky-300 font-mono",children:"a"})," and ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"b"})," are accessed using the same loop indices ",e.jsx("code",{className:"text-amber-300 font-mono",children:"[i][j]"}),"."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-on Java Source Code: ",e.jsx("code",{className:"font-mono text-emerald-300",children:"MatrixAdditionSubtractionDemo.java"})]}),e.jsx(M,{fileModule:E,title:"MatrixAdditionSubtractionDemo.java",highlightLines:[22,23,24]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & ICSE Board Exam Rules"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-semibold text-rose-300 mb-2",children:"Common Board Exam Pitfall"}),e.jsxs("p",{className:"text-slate-400 text-xs leading-relaxed",children:["Attempting matrix addition on matrices of unequal dimensions (e.g., Matrix A is 2x3 and Matrix B is 3x2). This causes an immediate ",e.jsx("code",{className:"text-rose-300 font-mono",children:"ArrayIndexOutOfBoundsException"})," during loop execution!"]})]}),e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-semibold text-emerald-300 mb-2",children:"ICSE Best Practice"}),e.jsxs("p",{className:"text-slate-400 text-xs leading-relaxed",children:["Always verify that ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"a.length == b.length"})," and ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"a[0].length == b[0].length"})," before running matrix addition or subtraction loops."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-sky-950/40 p-6 md:p-8 rounded-2xl border border-sky-800/60 shadow-lg",children:[e.jsxs("h3",{className:"text-lg font-semibold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"💭"})," Think About This..."]}),e.jsxs("ul",{className:"space-y-2 text-sky-200 text-sm",children:[e.jsx("li",{children:"• Is matrix addition commutative? That is, does $A + B == B + A$? (Yes!)"}),e.jsx("li",{children:"• Is matrix subtraction commutative? Does $A - B == B - A$? (No, $A - B == -(B - A)$!)"})]})]}),e.jsx("section",{className:"space-y-5",children:e.jsx(A,{title:"Matrix Addition & Subtraction FAQs",questions:k})}),e.jsx("section",{className:"space-y-5",children:e.jsx(D,{content:C,title:"Module 003_001 Topic 4: Matrix Addition and Subtraction",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_001_topic4_note.txt"})}),e.jsx("section",{className:"space-y-5",children:e.jsx(N,{note:"In Section B matrix programs, always instantiate the third result matrix C with the same dimensions as A and B before entering the nested loops! — Sukanta Hui"})})]});export{O as default};
