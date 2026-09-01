import{j as e,b as j}from"./vendor-react-core-Doz9nIC6.js";import{J as h}from"./JavaFileLoader-BfBG3xz_.js";import{F as w}from"./FAQTemplate-BHhlgA96.js";import{P as S}from"./PlainTextPrint-C08xhKA4.js";import{T as g}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const f=`import java.util.Scanner;\r
\r
public class MatrixRowColSumDemo {\r
    public static void main(String[] args) {\r
        Scanner sc = new Scanner(System.in);\r
        int rows = 3, cols = 3;\r
        int[][] matrix = new int[rows][cols];\r
\r
        System.out.println("Enter 9 elements for 3x3 Matrix:");\r
        for (int i = 0; i < rows; i++) {\r
            for (int j = 0; j < cols; j++) {\r
                matrix[i][j] = sc.nextInt();\r
            }\r
        }\r
\r
        // Row sums\r
        System.out.println("\\n--- Row Sums ---");\r
        for (int i = 0; i < rows; i++) {\r
            int rowSum = 0;\r
            for (int j = 0; j < cols; j++) {\r
                rowSum += matrix[i][j];\r
            }\r
            System.out.println("Sum of Row " + i + " = " + rowSum);\r
        }\r
\r
        // Column sums\r
        System.out.println("\\n--- Column Sums ---");\r
        for (int j = 0; j < cols; j++) {\r
            int colSum = 0;\r
            for (int i = 0; i < rows; i++) {\r
                colSum += matrix[i][j];\r
            }\r
            System.out.println("Sum of Column " + j + " = " + colSum);\r
        }\r
\r
        sc.close();\r
    }\r
}`,C=`================================================================================\r
CODER & ACCOTAX - ICSE CLASS X JAVA TUTORIAL\r
MODULE 003_001: Two Dimensional Array Concepts\r
TOPIC 2: Row Sum and Column Sum Calculation\r
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
================================================================================`,y=[{question:"ICSE 2D Matrix Board Q1: What is the rule regarding Row Sum and Column Sum Calculation (Question 1)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Row Sum and Column Sum Calculation.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q2: What is the rule regarding Row Sum and Column Sum Calculation (Question 2)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Row Sum and Column Sum Calculation.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q3: What is the rule regarding Row Sum and Column Sum Calculation (Question 3)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Row Sum and Column Sum Calculation.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q4: What is the rule regarding Row Sum and Column Sum Calculation (Question 4)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Row Sum and Column Sum Calculation.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q5: What is the rule regarding Row Sum and Column Sum Calculation (Question 5)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Row Sum and Column Sum Calculation.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q6: What is the rule regarding Row Sum and Column Sum Calculation (Question 6)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Row Sum and Column Sum Calculation.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q7: What is the rule regarding Row Sum and Column Sum Calculation (Question 7)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Row Sum and Column Sum Calculation.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q8: What is the rule regarding Row Sum and Column Sum Calculation (Question 8)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Row Sum and Column Sum Calculation.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"basic",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q9: What is the rule regarding Row Sum and Column Sum Calculation (Question 9)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Row Sum and Column Sum Calculation.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q10: What is the rule regarding Row Sum and Column Sum Calculation (Question 10)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Row Sum and Column Sum Calculation.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q11: What is the rule regarding Row Sum and Column Sum Calculation (Question 11)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Row Sum and Column Sum Calculation.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q12: What is the rule regarding Row Sum and Column Sum Calculation (Question 12)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Row Sum and Column Sum Calculation.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q13: What is the rule regarding Row Sum and Column Sum Calculation (Question 13)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Row Sum and Column Sum Calculation.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q14: What is the rule regarding Row Sum and Column Sum Calculation (Question 14)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Row Sum and Column Sum Calculation.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q15: What is the rule regarding Row Sum and Column Sum Calculation (Question 15)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Row Sum and Column Sum Calculation.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q16: What is the rule regarding Row Sum and Column Sum Calculation (Question 16)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Row Sum and Column Sum Calculation.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"intermediate",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q17: What is the rule regarding Row Sum and Column Sum Calculation (Question 17)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Row Sum and Column Sum Calculation.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"advanced",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q18: What is the rule regarding Row Sum and Column Sum Calculation (Question 18)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Row Sum and Column Sum Calculation.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"advanced",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q19: What is the rule regarding Row Sum and Column Sum Calculation (Question 19)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Row Sum and Column Sum Calculation.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"advanced",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q20: What is the rule regarding Row Sum and Column Sum Calculation (Question 20)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Row Sum and Column Sum Calculation.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"advanced",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q21: What is the rule regarding Row Sum and Column Sum Calculation (Question 21)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Row Sum and Column Sum Calculation.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"advanced",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q22: What is the rule regarding Row Sum and Column Sum Calculation (Question 22)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Row Sum and Column Sum Calculation.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"advanced",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q23: What is the rule regarding Row Sum and Column Sum Calculation (Question 23)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Row Sum and Column Sum Calculation.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"expert",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q24: What is the rule regarding Row Sum and Column Sum Calculation (Question 24)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Row Sum and Column Sum Calculation.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"expert",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`},{question:"ICSE 2D Matrix Board Q25: What is the rule regarding Row Sum and Column Sum Calculation (Question 25)?",shortAnswer:"Direct explanation of 2D matrix row-column indexing and boundary rules for Row Sum and Column Sum Calculation.",explanation:"Step-by-step breakdown covering matrix traversal bounds (arr[i][j]), memory representation, and dry run trace table rules.",hint:"Remember outer loop i controls rows and inner loop j controls columns.",level:"expert",codeExample:`// 2D Matrix traversal snippet
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}`}],v=()=>{const[t,d]=j.useState([[10,15,20],[25,30,35],[40,45,50]]),c=(n,r,o)=>{const a=parseInt(o,10),s=t.map((u,x)=>u.map((p,b)=>x===n&&b===r?isNaN(a)?0:a:p));d(s)},i=t.map(n=>n.reduce((r,o)=>r+o,0)),m=[0,1,2].map(n=>t.reduce((r,o)=>r+(o[n]||0),0)),l=i.reduce((n,r)=>n+r,0);return e.jsxs("div",{className:"bg-slate-950/90 p-6 rounded-2xl border border-slate-800 space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-sky-400",children:"📊 Real-Time Row Sum & Column Sum Calculator"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Edit cell values below to observe live row totals, column totals, and grand total calculations."})]}),e.jsxs("div",{className:"text-xs text-amber-400 font-mono bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800",children:["Grand Total = ",e.jsx("strong",{className:"text-white text-sm",children:l})]})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("div",{className:"min-w-[420px] max-w-xl mx-auto space-y-3 font-mono",children:[e.jsxs("div",{className:"grid grid-cols-5 gap-3 text-center text-xs text-slate-400 font-semibold",children:[e.jsx("span",{}),e.jsx("span",{children:"Col 0"}),e.jsx("span",{children:"Col 1"}),e.jsx("span",{children:"Col 2"}),e.jsx("span",{className:"text-sky-400",children:"Row Sums"})]}),t.map((n,r)=>e.jsxs("div",{className:"grid grid-cols-5 gap-3 items-center",children:[e.jsxs("span",{className:"text-xs font-semibold text-slate-400 text-right pr-2",children:["Row ",r]}),n.map((o,a)=>e.jsx("input",{type:"number",value:o,onChange:s=>c(r,a,s.target.value),className:"text-center bg-slate-900 border border-slate-700 focus:border-sky-500 rounded-lg py-2.5 text-xs font-mono text-amber-300 outline-none transition-all shadow-inner"},a)),e.jsx("div",{className:"bg-sky-500/10 border border-sky-500/30 text-sky-300 font-bold text-center py-2.5 rounded-lg text-xs",children:i[r]})]},r)),e.jsxs("div",{className:"grid grid-cols-5 gap-3 items-center pt-2 border-t border-slate-800",children:[e.jsx("span",{className:"text-xs font-semibold text-indigo-400 text-right pr-2",children:"Col Sums"}),m.map((n,r)=>e.jsx("div",{className:"bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-bold text-center py-2.5 rounded-lg text-xs",children:n},r)),e.jsx("div",{className:"bg-amber-500/20 border border-amber-500/50 text-amber-300 font-bold text-center py-2.5 rounded-lg text-xs",children:l})]})]})})]})},I=()=>e.jsxs("div",{className:"dark bg-slate-900 text-slate-200 min-h-screen py-8 px-4 md:px-6 lg:px-8 space-y-12",children:[e.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_001 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"2D Array Concepts"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight",children:"Row Sum & Column Sum Calculation"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Calculating individual row totals and column totals in 2D matrices by positioning accumulator variables inside outer vs inner loop scopes."})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Concept Overview: Accumulator Reset Rule"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed",children:[e.jsxs("p",{children:["When calculating ",e.jsx("strong",{children:"Row Sums"})," or ",e.jsx("strong",{children:"Column Sums"})," in ICSE Board Java programs, the most critical rule is ",e.jsx("strong",{children:"where you reset your sum accumulator variable to 0"}),":"]}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-sm text-slate-300",children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Row Sum (",e.jsx("code",{className:"text-sky-300 font-mono",children:"rowSum = 0"}),"):"]})," Must be reset to ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"0"})," ",e.jsx("em",{children:"inside the outer row loop"})," before traversing each row's columns."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Column Sum (",e.jsx("code",{className:"text-indigo-300 font-mono",children:"colSum = 0"}),"):"]})," Must be reset to ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"0"})," ",e.jsx("em",{children:"inside the outer column loop"})," before traversing each column's rows."]})]}),e.jsxs("div",{className:"p-4 bg-slate-950/60 rounded-xl border-l-4 border-sky-500 text-slate-300",children:[e.jsx("p",{className:"font-semibold text-sky-300 mb-1",children:"Classroom Analogy (Ichapur Center):"}),e.jsx("p",{className:"text-sm",children:"In Ichapur, Tuhina analyzes sales figures across 3 store branches (rows) and 3 product categories (columns). To find total sales for Branch 0, she resets her calculator to 0 before adding up Branch 0's items. If she forgets to reset to 0 for Branch 1, Branch 0's total gets added to Branch 1!"})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Interactive Row & Column Sum Calculator"]}),e.jsx(v,{})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"🔍"})," Technical Breakdown: Loop Scoping Comparison"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-sm",children:[e.jsxs("div",{className:"bg-slate-950/60 p-5 rounded-xl border border-slate-800 space-y-3",children:[e.jsx("h3",{className:"font-bold text-sky-300 text-base",children:"1. Row Sum Execution Pattern"}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded-lg border border-slate-800 font-mono text-xs text-amber-300 space-y-1",children:[e.jsx("div",{children:"for (int i = 0; i < rows; i++) {"}),e.jsx("div",{className:"pl-4 text-emerald-400 font-bold",children:"int rowSum = 0; // RESET FOR EACH ROW"}),e.jsx("div",{className:"pl-4",children:"for (int j = 0; j < cols; j++) {"}),e.jsx("div",{className:"pl-8 text-slate-300",children:"rowSum += matrix[i][j];"}),e.jsx("div",{className:"pl-4",children:"}"}),e.jsx("div",{className:"pl-4 text-sky-300",children:'System.out.println("Row " + i + " = " + rowSum);'}),e.jsx("div",{children:"}"})]}),e.jsxs("p",{className:"text-xs text-slate-400",children:[e.jsx("code",{className:"text-emerald-300 font-mono",children:"rowSum"})," is zeroed out before starting column additions for row ",e.jsx("code",{className:"text-sky-300 font-mono",children:"i"}),"."]})]}),e.jsxs("div",{className:"bg-slate-950/60 p-5 rounded-xl border border-slate-800 space-y-3",children:[e.jsx("h3",{className:"font-bold text-indigo-300 text-base",children:"2. Column Sum Execution Pattern"}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded-lg border border-slate-800 font-mono text-xs text-amber-300 space-y-1",children:[e.jsx("div",{children:"for (int j = 0; j < cols; j++) { // OUTER COL LOOP"}),e.jsx("div",{className:"pl-4 text-emerald-400 font-bold",children:"int colSum = 0; // RESET FOR EACH COL"}),e.jsx("div",{className:"pl-4",children:"for (int i = 0; i < rows; i++) { // INNER ROW LOOP"}),e.jsx("div",{className:"pl-8 text-slate-300",children:"colSum += matrix[i][j];"}),e.jsx("div",{className:"pl-4",children:"}"}),e.jsx("div",{className:"pl-4 text-indigo-300",children:'System.out.println("Col " + j + " = " + colSum);'}),e.jsx("div",{children:"}"})]}),e.jsxs("p",{className:"text-xs text-slate-400",children:["Outer loop runs over columns ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"j"}),", inner loop adds elements across rows ",e.jsx("code",{className:"text-sky-300 font-mono",children:"i"}),"."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-on Java Source Code: ",e.jsx("code",{className:"font-mono text-emerald-300",children:"MatrixRowColSumDemo.java"})]}),e.jsx(h,{fileModule:f,title:"MatrixRowColSumDemo.java",highlightLines:[18,19,21,27,28,30]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & ICSE Board Exam Guidelines"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-semibold text-rose-300 mb-2",children:"Common Board Exam Pitfall"}),e.jsxs("p",{className:"text-slate-400 text-xs leading-relaxed",children:["Declaring ",e.jsx("code",{className:"text-rose-300 font-mono",children:"int sum = 0;"})," ",e.jsx("strong",{children:"BEFORE"})," the outer loop. This causes previous row totals to accumulate continuously, yielding incorrect values for subsequent rows!"]})]}),e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-semibold text-emerald-300 mb-2",children:"ICSE Best Practice"}),e.jsxs("p",{className:"text-slate-400 text-xs leading-relaxed",children:["Always declare accumulator variables inside the outer loop body (e.g., ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"int rowSum = 0;"})," right after ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"for(int i=0;...)"}),")."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-sky-950/40 p-6 md:p-8 rounded-2xl border border-sky-800/60 shadow-lg",children:[e.jsxs("h3",{className:"text-lg font-semibold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"💭"})," Think About This..."]}),e.jsxs("ul",{className:"space-y-2 text-sky-200 text-sm",children:[e.jsxs("li",{children:["• Can you calculate both row sums AND column sums in a single pass of nested loops? (Hint: Use a 1D array ",e.jsx("code",{className:"text-sky-300 font-mono",children:"int[] colSums = new int[cols];"}),")"]}),e.jsx("li",{children:"• How would you find the row index with the highest row sum?"})]})]}),e.jsx("section",{className:"space-y-5",children:e.jsx(w,{title:"Row Sum & Column Sum FAQs",questions:y})}),e.jsx("section",{className:"space-y-5",children:e.jsx(S,{content:C,title:"Module 003_001 Topic 2: Row Sum and Column Sum Calculation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_001_topic2_note.txt"})}),e.jsx("section",{className:"space-y-5",children:e.jsx(g,{note:"Scope matters! Always double check where rowSum = 0 is initialized in ICSE Section B programs. If it's outside the outer loop, you lose marks! — Sukanta Hui"})})]});export{I as default};
