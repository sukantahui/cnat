import{r as l,j as e}from"./index-YkKVfVEM.js";import{c as w}from"./clsx-B-dksMZM.js";import{T as F}from"./TeacherSukantaHui-nIRku_xY.js";import{F as H}from"./FAQTemplate-B_PeLoo7.js";import{P as O}from"./PlainTextPrint-Bgzrldzq.js";import"./github-00a_zZrb.js";import"./createLucideIcon-Cim-rzMd.js";import"./git-branch-BC_-h9tN.js";const q=[{question:"What is the iteration procedure in the Simplex Method?",shortAnswer:"The step-by-step process of moving from one tableau to the next until optimality.",explanation:"Each iteration improves the objective value and moves to an adjacent corner point. The procedure repeats until all Z coefficients are non-negative.",hint:"Moving from tableau to tableau.",level:"basic",codeExample:"Iteration 1 → Iteration 2 → ... → Optimal"},{question:"How many steps are in a complete Simplex iteration?",shortAnswer:"8 steps: find entering, find leaving, pivot, normalize, eliminate, update Z, update B, check optimality.",explanation:"Each iteration follows a systematic 8-step procedure that transforms the tableau and improves the solution.",hint:"8 steps total.",level:"intermediate",codeExample:"Step 1-8: Entering → Leaving → Pivot → Normalize → Eliminate → Update Z → Update B → Check"},{question:"What is the first step in each iteration?",shortAnswer:"Find the entering variable (most negative Z coefficient).",explanation:"The entering variable is chosen from the Z row to maximize improvement in the objective function.",hint:"Most negative Z coefficient.",level:"basic",codeExample:"Z row: [-3, -2, 0, 0] → x enters"},{question:"What is the second step in each iteration?",shortAnswer:"Find the leaving variable using the minimum ratio test.",explanation:"The leaving variable is determined by the ratio test to maintain feasibility.",hint:"Minimum ratio test.",level:"intermediate",codeExample:"Ratios: 10/2=5, 8/1=8 → s₁ leaves"},{question:"What is the third step in each iteration?",shortAnswer:"Identify the pivot element at the intersection of entering column and leaving row.",explanation:"The pivot element is the focus of row operations and must be positive.",hint:"Intersection of entering column and leaving row.",level:"intermediate",codeExample:"Pivot = 2 at (s₁, x)"},{question:"What is the fourth step in each iteration?",shortAnswer:"Normalize the pivot row by dividing by the pivot element.",explanation:"Making the pivot element 1 simplifies subsequent row operations.",hint:"Make pivot = 1.",level:"intermediate",codeExample:"Row ÷ pivot → pivot becomes 1"},{question:"What is the fifth step in each iteration?",shortAnswer:"Eliminate the pivot column in all other rows.",explanation:"Make all other entries in the pivot column zero using row operations.",hint:"Make pivot column identity.",level:"intermediate",codeExample:"Row = Row - coeff × Pivot Row"},{question:"What is the sixth step in each iteration?",shortAnswer:"Update the Z row using the same row operations.",explanation:"The Z row must be transformed consistently with the constraint rows.",hint:"Update Z row.",level:"intermediate",codeExample:"Z = Z - Zcoeff × Pivot Row"},{question:"What is the seventh step in each iteration?",shortAnswer:"Update the basic variables in the B column.",explanation:"Replace the leaving variable with the entering variable in the B column.",hint:"Exchange variables.",level:"intermediate",codeExample:"B: s₁ → x"},{question:"What is the eighth step in each iteration?",shortAnswer:"Check for optimality (all Z coefficients ≥ 0).",explanation:"If all Z coefficients are non-negative, the current solution is optimal. Otherwise, continue iterations.",hint:"Check all Z ≥ 0.",level:"basic",codeExample:"Z row: [0, 0, 1.5, 0.5] → optimal"},{question:"How do you know when to stop iterating?",shortAnswer:"When all coefficients in the Z row are non-negative (for maximization).",explanation:"If any Z coefficient is negative, further improvement is possible. Stop only when all are ≥ 0.",hint:"All Z ≥ 0.",level:"basic",codeExample:"Z row: [0, 2, 3, 0] → stop"},{question:"What happens to the objective value after each iteration?",shortAnswer:"It improves (increases for maximization, decreases for minimization).",explanation:"Each iteration moves to a better corner point, improving the objective value.",hint:"Z improves each time.",level:"intermediate",codeExample:"Z: 0 → 15 → 16"},{question:"How many iterations are typically needed?",shortAnswer:"Depends on the problem size, usually 2-5 for small problems.",explanation:"The number of iterations equals the number of corner points visited before reaching optimality.",hint:"2-5 for small problems.",level:"basic",codeExample:"2 variables → usually 2-3 iterations"},{question:"What is the role of the pivot element in the iteration?",shortAnswer:"It is the focal point for row operations that transform the tableau.",explanation:"The pivot element determines how the tableau is transformed to exchange variables.",hint:"Focus of row operations.",level:"intermediate",codeExample:"Pivot = 2 → divide row by 2"},{question:"What happens if the ratio test gives a tie?",shortAnswer:"Either row can be chosen (tie-breaking rule needed).",explanation:"Ties in the ratio test can lead to degeneracy. Use a consistent tie-breaking rule.",hint:"Tie-breaking needed.",level:"advanced",codeExample:"Both rows give ratio 5 → tie"},{question:"What happens if no positive coefficients in entering column?",shortAnswer:"The problem is unbounded (no finite optimal solution).",explanation:"If all coefficients are negative or zero, the entering variable can increase indefinitely.",hint:"All non-positive → unbounded.",level:"advanced",codeExample:"Entering column: [-2, -3, -1] → unbounded"},{question:"What is the difference between iteration and iteration procedure?",shortAnswer:"Iteration is one cycle; the procedure is the complete process.",explanation:"An iteration is a single cycle of the 8 steps. The procedure is the entire process of repeating iterations until optimality.",hint:"One cycle vs. entire process.",level:"intermediate",codeExample:"One iteration = 8 steps, procedure = all iterations"},{question:"Why is it important to check optimality after each iteration?",shortAnswer:"To know when to stop and avoid unnecessary iterations.",explanation:"Checking optimality prevents wasted effort on unnecessary iterations and ensures the correct solution.",hint:"Stop at optimality.",level:"basic",codeExample:"Check Z row after each iteration"}],W=`TOPIC 8: ITERATION PROCEDURE\r
============================\r
\r
INTRODUCTION\r
------------\r
The iteration procedure is the step-by-step process of the Simplex \r
Method. Each iteration transforms the tableau and improves the \r
objective value until optimality is reached.\r
\r
THE 8-STEP ITERATION PROCEDURE\r
------------------------------\r
Step 1: Find Entering Variable\r
- Look at Z row\r
- Most negative coefficient (maximization)\r
\r
Step 2: Find Leaving Variable\r
- Use ratio test\r
- Minimum positive RHS/coefficient\r
\r
Step 3: Identify Pivot Element\r
- Intersection of entering column and leaving row\r
- Must be positive\r
\r
Step 4: Normalize Pivot Row\r
- Divide entire pivot row by pivot element\r
- Pivot becomes 1\r
\r
Step 5: Eliminate Pivot Column\r
- Make all other entries in pivot column zero\r
- Row = Row - coefficient × Pivot Row\r
\r
Step 6: Update Z Row\r
- Apply same elimination to Z row\r
\r
Step 7: Update Basic Variables\r
- Replace leaving with entering in B column\r
\r
Step 8: Check Optimality\r
- All Z coefficients ≥ 0 → optimal\r
- If negative coefficients remain → continue\r
\r
EXAMPLE\r
-------\r
Maximize Z = 3x + 2y\r
2x + y ≤ 10\r
x + 2y ≤ 8\r
\r
Initial Tableau:\r
┌─────┬─────┬─────┬─────┬─────┬─────┐\r
│  B  │  x  │  y  │ s₁  │ s₂  │ RHS │\r
├─────┼─────┼─────┼─────┼─────┼─────┤\r
│ s₁  │  2  │  1  │  1  │  0  │ 10  │\r
│ s₂  │  1  │  2  │  0  │  1  │  8  │\r
├─────┼─────┼─────┼─────┼─────┼─────┤\r
│  Z  │ -3  │ -2  │  0  │  0  │  0  │\r
└─────┴─────┴─────┴─────┴─────┴─────┘\r
\r
Iteration 1:\r
Step 1: x enters (-3)\r
Step 2: s₁ leaves (min ratio 5)\r
Step 3: Pivot = 2\r
Step 4-7: Row operations\r
Step 8: Not optimal (Z has -0.5)\r
\r
After Iteration 1:\r
┌─────┬─────┬─────┬─────┬─────┬─────┐\r
│  B  │  x  │  y  │ s₁  │ s₂  │ RHS │\r
├─────┼─────┼─────┼─────┼─────┼─────┤\r
│  x  │  1  │ 0.5 │ 0.5 │  0  │  5  │\r
│ s₂  │  0  │ 1.5 │-0.5 │  1  │  3  │\r
├─────┼─────┼─────┼─────┼─────┼─────┤\r
│  Z  │  0  │-0.5 │ 1.5 │  0  │ 15  │\r
└─────┴─────┴─────┴─────┴─────┴─────┘\r
\r
Iteration 2:\r
Step 1: y enters (-0.5)\r
Step 2: s₂ leaves (min ratio 2)\r
Step 3: Pivot = 1.5\r
Step 4-7: Row operations\r
Step 8: Optimal! (all Z ≥ 0)\r
\r
Final Tableau:\r
┌─────┬─────┬─────┬─────┬─────┬─────┐\r
│  B  │  x  │  y  │ s₁  │ s₂  │ RHS │\r
├─────┼─────┼─────┼─────┼─────┼─────┤\r
│  x  │  1  │  0  │0.667│-0.333│  4  │\r
│  y  │  0  │  1  │-0.333│0.667│  2  │\r
├─────┼─────┼─────┼─────┼─────┼─────┤\r
│  Z  │  0  │  0  │1.333│0.333│ 16  │\r
└─────┴─────┴─────┴─────┴─────┴─────┘\r
\r
Optimal Solution: x = 4, y = 2, Z = 16\r
\r
KEY RULES\r
---------\r
1. Follow steps in order\r
2. Pivot must be positive\r
3. Check optimality after each iteration\r
4. Stop when all Z ≥ 0\r
\r
COMMON MISTAKES\r
---------------\r
1. Skipping steps\r
2. Incorrect row operations\r
3. Forgetting to check optimality\r
4. Not updating basic variables correctly\r
\r
BEST PRACTICES\r
--------------\r
1. Be systematic\r
2. Use exact fractions\r
3. Verify pivot column is identity\r
4. Check Z improves each iteration\r
\r
TEACHER'S NOTE\r
--------------\r
Each iteration is like a step in a journey - you know you're \r
making progress because Z keeps increasing. Be methodical and \r
check your work at each step."`,$=()=>{const[h,j]=l.useState("concept"),[y,k]=l.useState({}),[p,N]=l.useState(null),[g,S]=l.useState(null),Z=[{id:"concept",label:"Concept"},{id:"examples",label:"Examples"},{id:"practice",label:"Practice"}],R=[{id:1,title:"Example 1: Complete Iteration",problem:`Perform one complete Simplex iteration on:
Maximize Z = 3x + 2y
Subject to:
2x + y ≤ 10
x + 2y ≤ 8
x, y ≥ 0`,solution:`After iteration:
x = 5, s₂ = 3, Z = 15
Next entering variable: y (coefficient -0.5)`,detailedSolution:`Step 1: Initial tableau
┌─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ s₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┤
│ s₁  │  2  │  1  │  1  │  0  │ 10  │
│ s₂  │  1  │  2  │  0  │  1  │  8  │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │ -3  │ -2  │  0  │  0  │  0  │
└─────┴─────┴─────┴─────┴─────┴─────┘

Step 2: Entering variable
Z row: [-3, -2, 0, 0]
Most negative: -3 → x enters

Step 3: Leaving variable
Ratio test:
s₁: 10/2 = 5
s₂: 8/1 = 8
Minimum: 5 → s₁ leaves

Step 4: Pivot element
Pivot = 2 (s₁ row, x column)

Step 5: Normalize pivot row
Row 1: [2, 1, 1, 0, 10] ÷ 2
→ [1, 0.5, 0.5, 0, 5]

Step 6: Eliminate pivot column
Row 2: [1, 2, 0, 1, 8] - 1 × Row 1
→ [0, 1.5, -0.5, 1, 3]

Step 7: Update Z row
Z: [-3, -2, 0, 0, 0] + 3 × Row 1
→ [0, -0.5, 1.5, 0, 15]

Step 8: Update basic variables
B: s₁ → x

Step 9: New tableau
┌─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ s₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  x  │  1  │ 0.5 │ 0.5 │  0  │  5  │
│ s₂  │  0  │ 1.5 │-0.5 │  1  │  3  │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │  0  │-0.5 │ 1.5 │  0  │ 15  │
└─────┴─────┴─────┴─────┴─────┴─────┘

Step 10: Check optimality
Z row has negative coefficient (-0.5) → not optimal`},{id:2,title:"Example 2: Multiple Iterations",problem:"Starting from the tableau in Example 1, perform the second iteration.",solution:`After second iteration:
x = 4, y = 2, Z = 16 (optimal)`,detailedSolution:`Step 1: Current tableau from Example 1
┌─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ s₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  x  │  1  │ 0.5 │ 0.5 │  0  │  5  │
│ s₂  │  0  │ 1.5 │-0.5 │  1  │  3  │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │  0  │-0.5 │ 1.5 │  0  │ 15  │
└─────┴─────┴─────┴─────┴─────┴─────┘

Step 2: Entering variable
Z row: [0, -0.5, 1.5, 0]
Most negative: -0.5 → y enters

Step 3: Leaving variable
Ratio test:
x row: 5/0.5 = 10
s₂ row: 3/1.5 = 2
Minimum: 2 → s₂ leaves

Step 4: Pivot element
Pivot = 1.5 (s₂ row, y column)

Step 5: Normalize pivot row
Row 2: [0, 1.5, -0.5, 1, 3] ÷ 1.5
→ [0, 1, -0.333, 0.667, 2]

Step 6: Eliminate pivot column
Row 1: [1, 0.5, 0.5, 0, 5] - 0.5 × Row 2
→ [1, 0, 0.667, -0.333, 4]

Step 7: Update Z row
Z: [0, -0.5, 1.5, 0, 15] + 0.5 × Row 2
→ [0, 0, 1.333, 0.333, 16]

Step 8: Update basic variables
B: s₂ → y

Step 9: New tableau
┌─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ s₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  x  │  1  │  0  │0.667│-0.333│  4  │
│  y  │  0  │  1  │-0.333│0.667│  2  │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │  0  │  0  │1.333│0.333│ 16  │
└─────┴─────┴─────┴─────┴─────┴─────┘

Step 10: Check optimality
All Z row coefficients ≥ 0 → Optimal!
Optimal solution: x = 4, y = 2, Z = 16`},{id:3,title:"Example 3: Iteration with Big-M Method",problem:`Perform one iteration of the Simplex Method with Big-M:
Minimize Z = 4x + 3y
Subject to:
x + y ≥ 6
2x + y ≥ 8
x, y ≥ 0`,solution:"After iteration: a₁ = 2, a₂ = 0, Z' = -6M - 8",detailedSolution:`Step 1: Initial tableau with Big-M
┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ s₂  │ a₁  │ a₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│ a₁  │  1  │  1  │ -1  │  0  │  1  │  0  │  6  │
│ a₂  │  2  │  1  │  0  │ -1  │  0  │  1  │  8  │
├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │ -4  │ -3  │  0  │  0  │  M  │  M  │  0  │
└─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘

Step 2: Entering variable
Z row: [-4, -3, 0, 0, M, M]
Most negative: -4 → x enters

Step 3: Leaving variable
Ratio test:
a₁: 6/1 = 6
a₂: 8/2 = 4
Minimum: 4 → a₂ leaves

Step 4: Pivot element
Pivot = 2 (a₂ row, x column)

Step 5: Normalize pivot row
Row 2: [2, 1, 0, -1, 0, 1, 8] ÷ 2
→ [1, 0.5, 0, -0.5, 0, 0.5, 4]

Step 6: Eliminate pivot column
Row 1: [1, 1, -1, 0, 1, 0, 6] - 1 × Row 2
→ [0, 0.5, -1, 0.5, 1, -0.5, 2]

Step 7: Update Z row
Z: [-4, -3, 0, 0, M, M, 0] + 4 × Row 2
→ [0, -1, 0, -2, M, M+2, 16]

Step 8: Update basic variables
B: a₂ → x`},{id:4,title:"Example 4: Real-World Iteration",problem:`A factory produces chairs (x) and tables (y).
Maximize Z = 40x + 50y
Subject to:
2x + 3y ≤ 120
3x + 2y ≤ 90
x, y ≥ 0

Perform the first iteration.`,solution:`After first iteration:
y = 40, s₂ = 10, Z = 2000
Next entering variable: x`,detailedSolution:`Step 1: Initial tableau
┌─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ s₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┤
│ s₁  │  2  │  3  │  1  │  0  │ 120 │
│ s₂  │  3  │  2  │  0  │  1  │  90 │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │ -40 │ -50 │  0  │  0  │  0  │
└─────┴─────┴─────┴─────┴─────┴─────┘

Step 2: Entering variable
Z row: [-40, -50, 0, 0]
Most negative: -50 → y enters

Step 3: Leaving variable
Ratio test:
s₁: 120/3 = 40
s₂: 90/2 = 45
Minimum: 40 → s₁ leaves

Step 4: Pivot element
Pivot = 3 (s₁ row, y column)

Step 5: Normalize pivot row
Row 1: [2, 3, 1, 0, 120] ÷ 3
→ [2/3, 1, 1/3, 0, 40]

Step 6: Eliminate pivot column
Row 2: [3, 2, 0, 1, 90] - 2 × Row 1
→ [5/3, 0, -2/3, 1, 10]

Step 7: Update Z row
Z: [-40, -50, 0, 0, 0] + 50 × Row 1
→ [-20/3, 0, 50/3, 0, 2000]

Step 8: Update basic variables
B: s₁ → y

Step 9: New tableau
┌─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ s₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  y  │ 2/3 │  1  │ 1/3 │  0  │ 40  │
│ s₂  │ 5/3 │  0  │-2/3 │  1  │ 10  │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │-20/3│  0  │50/3 │  0  │2000 │
└─────┴─────┴─────┴─────┴─────┴─────┘

Step 10: Continue iterations
Z row has negative coefficient -20/3 → not optimal`}],E=[{id:1,title:"Complete One Iteration",problem:`Perform one complete Simplex iteration:
Maximize Z = 2x + 3y
Subject to:
4x + y ≤ 12
x + 3y ≤ 9
x, y ≥ 0`,hint:"Find entering variable (most negative Z), leaving variable (min ratio), then pivot.",solution:`After iteration: y = 3, s₁ = 9, Z = 9
Next entering variable: x`},{id:2,title:"Multiple Iterations",problem:"Continue from Problem 1. Perform the second iteration.",hint:"Use the tableau from Problem 1 and repeat the process.",solution:"After second iteration: x = 2, y = 1, Z = 7 (optimal)"},{id:3,title:"Complete Iteration with Fractions",problem:`Perform one complete iteration:
Maximize Z = 5x + 4y
Subject to:
3x + 2y ≤ 18
x + 4y ≤ 16
x, y ≥ 0`,hint:"Entering variable: x (most negative -5). Leaving variable: min ratio test.",solution:"After iteration: x = 6, s₂ = 10, Z = 30"}],I=t=>{k(m=>({...m,[t]:!m[t]}))},P=()=>{const[t,m]=l.useState(0),[a,v]=l.useState({rows:[{basic:"s₁",coefficients:[2,1,1,0],rhs:10},{basic:"s₂",coefficients:[1,2,0,1],rhs:8}],zRow:[-3,-2,0,0,0],basicVars:["s₁","s₂"]}),[b,u]=l.useState(!1),M=()=>{let r=0,i=-1;for(let n=0;n<a.zRow.length-1;n++)a.zRow[n]<r&&(r=a.zRow[n],i=n);if(i===-1){u(!0);return}let d=1/0,s=-1;for(let n=0;n<a.rows.length;n++){const c=a.rows[n].coefficients[i];if(c>0){const o=a.rows[n].rhs/c;o<d&&(d=o,s=n)}}if(s===-1){alert("Unbounded solution!");return}const f=a.rows[s].coefficients[i],x=a.rows.map((n,c)=>{if(c===s)return{basic:["x","y","s₁","s₂"][i],coefficients:n.coefficients.map(o=>o/f),rhs:n.rhs/f};{const o=n.coefficients[i];return{basic:n.basic,coefficients:n.coefficients.map((B,U)=>B-o*x[s].coefficients[U]),rhs:n.rhs-o*x[s].rhs}}}),z=a.zRow[i],C=a.zRow.map((n,c)=>n-z*x[s].coefficients[c]);v({rows:x,zRow:C,basicVars:x.map(n=>n.basic)}),m(t+1),u(!1)},T=()=>{v({rows:[{basic:"s₁",coefficients:[2,1,1,0],rhs:10},{basic:"s₂",coefficients:[1,2,0,1],rhs:8}],zRow:[-3,-2,0,0,0],basicVars:["s₁","s₂"]}),m(0),u(!1)},A=["x","y","s₁","s₂"];return e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4",children:"Interactive Iteration Simulator"}),e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsxs("span",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:["Iteration: ",t]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:M,disabled:b,className:w("px-4 py-2 rounded-lg font-medium transition-all duration-300",b?"bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed":"bg-blue-600 text-white hover:bg-blue-700"),children:"Next Iteration"}),e.jsx("button",{onClick:T,className:"px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300",children:"Reset"})]})]}),e.jsx("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs font-mono",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-gray-600 dark:text-gray-400",children:[e.jsx("th",{className:"px-2 py-1 border dark:border-gray-600",children:"B"}),A.map(r=>e.jsx("th",{className:"px-2 py-1 border dark:border-gray-600",children:r},r)),e.jsx("th",{className:"px-2 py-1 border dark:border-gray-600",children:"RHS"})]})}),e.jsxs("tbody",{children:[a.rows.map((r,i)=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-2 py-1 border dark:border-gray-600 font-medium",children:r.basic}),r.coefficients.map((d,s)=>e.jsx("td",{className:"px-2 py-1 border dark:border-gray-600 text-center",children:Number.isInteger(d)?d:d.toFixed(3)},s)),e.jsx("td",{className:"px-2 py-1 border dark:border-gray-600 text-center",children:Number.isInteger(r.rhs)?r.rhs:r.rhs.toFixed(3)})]},i)),e.jsxs("tr",{className:"bg-yellow-50 dark:bg-yellow-900/20",children:[e.jsx("td",{className:"px-2 py-1 border dark:border-gray-600 font-medium",children:"Z"}),a.zRow.map((r,i)=>e.jsx("td",{className:"px-2 py-1 border dark:border-gray-600 text-center",children:Number.isInteger(r)?r:r.toFixed(3)},i)),e.jsx("td",{className:"px-2 py-1 border dark:border-gray-600 text-center",children:a.zRow[a.zRow.length-1]})]})]})]})}),b&&e.jsxs("div",{className:"mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800",children:[e.jsx("p",{className:"text-sm font-semibold text-green-700 dark:text-green-400",children:"✅ Optimal Solution Reached!"}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:["Z = ",a.zRow[a.zRow.length-1]]})]})]})};return e.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[e.jsxs("div",{className:"text-center mb-10",children:[e.jsx("h1",{className:"text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-all duration-300",children:"Iteration Procedure"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto",children:"Learn the complete iterative process of the Simplex Method, from one tableau to the next, until optimality is reached."})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 justify-center border-b border-gray-200 dark:border-gray-700 pb-4",children:Z.map(t=>e.jsx("button",{onClick:()=>j(t.id),className:w("px-6 py-2 rounded-lg font-medium transition-all duration-300",h===t.id?"bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-blue-900/30":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-md"),children:t.label},t.id))}),e.jsxs("div",{className:"space-y-8",children:[h==="concept"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"What is the Iteration Procedure?"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 leading-relaxed mb-4",children:"The iteration procedure is the step-by-step process of moving from one simplex tableau to the next. Each iteration improves the objective value and moves the solution closer to optimality. The procedure continues until no further improvement is possible (all Z row coefficients are non-negative for maximization)."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Key Features"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Systematic and algorithmic"}),e.jsx("li",{children:"Improves Z each iteration"}),e.jsx("li",{children:"Moves to adjacent corner point"}),e.jsx("li",{children:"Stops at optimality"})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Why It Matters"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Drives the Simplex Method"}),e.jsx("li",{children:"Finds optimal solution"}),e.jsx("li",{children:"Handles any LP problem"}),e.jsx("li",{children:"Foundation for optimization"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"The 8-Step Iteration Procedure"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[e.jsx("div",{className:"text-4xl mb-2",children:"📊"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Step 1"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Find entering variable (most negative Z)"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[e.jsx("div",{className:"text-4xl mb-2",children:"📏"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Step 2"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Find leaving variable (minimum ratio test)"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[e.jsx("div",{className:"text-4xl mb-2",children:"🎯"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Step 3"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Identify pivot element"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[e.jsx("div",{className:"text-4xl mb-2",children:"📋"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Step 4"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Normalize pivot row"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[e.jsx("div",{className:"text-4xl mb-2",children:"✏️"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Step 5"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Eliminate pivot column"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[e.jsx("div",{className:"text-4xl mb-2",children:"💰"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Step 6"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Update Z row"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[e.jsx("div",{className:"text-4xl mb-2",children:"🔄"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Step 7"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Update basic variables"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[e.jsx("div",{className:"text-4xl mb-2",children:"✅"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Step 8"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Check optimality (all Z ≥ 0)"})]})]})]}),e.jsx(P,{}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"💡 Tips & Tricks for Iteration Procedure"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h4",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"Professional Tips"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Be systematic - follow steps in order"}),e.jsx("li",{children:"Use exact fractions for accuracy"}),e.jsx("li",{children:"Check pivot column becomes identity"}),e.jsx("li",{children:"Verify Z improves each iteration"})]})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500",children:[e.jsx("h4",{className:"font-semibold text-purple-700 dark:text-purple-400 mb-2",children:"Common Mistakes"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Skipping steps in the procedure"}),e.jsx("li",{children:"Incorrect row operations"}),e.jsx("li",{children:"Forgetting to check optimality"}),e.jsx("li",{children:"Not updating basic variables correctly"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"✅ Mini Checklist"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Entering variable found"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Leaving variable found"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Pivot element identified"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Pivot row normalized"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Pivot column eliminated"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Optimality checked"})]})]})]})]}),h==="examples"&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"space-y-6",children:R.map(t=>e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-bold text-gray-800 dark:text-gray-200 mb-3",children:t.title}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h5",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Problem"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.problem})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h5",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Result"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.solution})]})]}),e.jsx("div",{className:"mt-4 flex justify-center",children:e.jsx("button",{onClick:()=>I(t.id),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300",children:y[t.id]?"Hide Detailed Steps":"Show Detailed Steps"})}),y[t.id]&&e.jsxs("div",{className:"mt-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h5",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"📝 Detailed Steps"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.detailedSolution})]})]},`example-${t.id}`))})}),h==="practice"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center",children:"Practice Problems"}),e.jsx("div",{className:"space-y-6",children:E.map(t=>e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 transition-all duration-300 hover:shadow-md",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:t.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:t.problem}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>N(p===t.id?null:t.id),className:"px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-all duration-300",children:p===t.id?"Hide Solution":"Check Solution"}),e.jsx("button",{onClick:()=>S(g===t.id?null:t.id),className:"px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300",children:g===t.id?"Hide Hint":"Show Hint"})]}),g===t.id&&e.jsx("div",{className:"mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800",children:e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"💡 Hint:"})," ",t.hint]})}),p===t.id&&e.jsx("div",{className:"mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800",children:e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:t.solution})})]},t.id))})]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"💡 Tips for Iteration Procedure"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Follow the 8 steps:"})," Don't skip any step"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Be precise:"})," Use fractions for accuracy"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Check your work:"})," Verify pivot column is identity"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Stop at optimality:"})," All Z coefficients ≥ 0"]})]})]})]})]}),e.jsx("div",{className:"mt-12",children:e.jsx(H,{title:"Iteration Procedure FAQs",questions:q})}),e.jsx("div",{className:"mt-8",children:e.jsx(O,{content:W,title:"Iteration Procedure",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Note",downloadFileName:"topic8_note.txt"})}),e.jsx("div",{className:"mt-8",children:e.jsx(F,{note:"The iteration procedure is the engine of the Simplex Method. I tell my students that each iteration is like a 'step' in a journey - you know you're making progress because Z keeps increasing. The key is to be methodical and check your work at each step. The most common mistake is rushing through row operations. Take your time and verify that the pivot column becomes an identity column after each iteration."})})]})})};export{$ as default};
