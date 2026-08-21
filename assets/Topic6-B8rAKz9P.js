import{r as o,j as e}from"./index-DCfh6IuU.js";import{c as m}from"./clsx-B-dksMZM.js";import{T as M}from"./TeacherSukantaHui-B04mmNRn.js";import{F as L}from"./FAQTemplate-CpE4YbzA.js";import{P as C}from"./PlainTextPrint-C1YYqlOc.js";import"./github-DWnkwObX.js";import"./createLucideIcon-JrHpk1sJ.js";import"./git-branch-wLHfphON.js";const H=[{question:"What is the entering variable in the Simplex Method?",shortAnswer:"The non-basic variable that enters the basis to improve the objective value.",explanation:"The entering variable is chosen based on the most negative coefficient in the Z row (for maximization). It will increase the objective value.",hint:"Variable that enters the basis.",level:"intermediate",codeExample:"Z row: [-3, -2, 0, 0] → x enters (most negative: -3)"},{question:"What is the leaving variable in the Simplex Method?",shortAnswer:"The basic variable that leaves the basis to maintain feasibility.",explanation:"The leaving variable is chosen using the minimum ratio test. It ensures the solution remains feasible after the pivot operation.",hint:"Variable that leaves the basis.",level:"intermediate",codeExample:"Min ratio: 10/2=5, 8/1=8 → s₁ leaves (min ratio: 5)"},{question:"How do you choose the entering variable?",shortAnswer:"Choose the variable with the most negative coefficient in the Z row (for maximization).",explanation:"The most negative coefficient indicates the greatest potential improvement in the objective function per unit increase.",hint:"Most negative Z coefficient.",level:"basic",codeExample:"Z row: [-5, -3, 0, 0] → x enters (-5 is most negative)"},{question:"How do you choose the leaving variable?",shortAnswer:"Use the minimum ratio test: RHS / coefficient in entering column, choose smallest positive ratio.",explanation:"For each row with a positive coefficient in the entering column, compute RHS/coefficient. The row with the smallest ratio leaves the basis.",hint:"Minimum ratio test.",level:"intermediate",codeExample:"Row 1: 10/2=5, Row 2: 8/1=8 → Row 1 leaves"},{question:"What is the pivot element?",shortAnswer:"The intersection of the entering column and leaving row.",explanation:"The pivot element is used in row operations to transform the tableau. It must be positive.",hint:"Intersection of entering column and leaving row.",level:"intermediate",codeExample:"If x enters and s₁ leaves, pivot = coefficient in s₁ row, x column"},{question:"What happens if there is a tie in the ratio test?",shortAnswer:"Either row can be chosen (tie-breaking rule needed).",explanation:"Ties may lead to degeneracy. Use a consistent rule like choosing the first row or using Bland's rule.",hint:"Tie-breaking needed.",level:"advanced",codeExample:"Row 1: 10/2=5, Row 2: 20/4=5 → tie"},{question:"What if all coefficients in the entering column are negative?",shortAnswer:"The problem is unbounded (no finite optimal solution).",explanation:"If all coefficients are negative, the entering variable can increase indefinitely without violating constraints, leading to an unbounded solution.",hint:"All negative → unbounded.",level:"advanced",codeExample:"Entering column: [-2, -3, -1] → unbounded"},{question:"What if there are no negative coefficients in the Z row?",shortAnswer:"The current solution is optimal.",explanation:"For maximization, if all Z row coefficients are ≥ 0, the current basic feasible solution is optimal.",hint:"No negatives → optimal.",level:"intermediate",codeExample:"Z row: [0, 2, 3, 0] → optimal"},{question:"What is the ratio test used for?",shortAnswer:"To determine which variable leaves the basis.",explanation:"The ratio test ensures that the new solution remains feasible by finding the tightest constraint on the entering variable.",hint:"Determines leaving variable.",level:"intermediate",codeExample:"RHS / coefficient in entering column"},{question:"Why must the pivot element be positive?",shortAnswer:"To maintain feasibility of the basic solution.",explanation:"A positive pivot ensures that the ratio test gives a valid leaving variable and the new solution remains non-negative.",hint:"Positive for feasibility.",level:"advanced",codeExample:"Pivot = 2 (positive) → valid"},{question:"What is the difference between entering and leaving variables?",shortAnswer:"Entering goes from non-basic to basic; leaving goes from basic to non-basic.",explanation:"Entering variable increases from 0 to positive; leaving variable decreases from positive to 0.",hint:"Non-basic → basic vs. basic → non-basic.",level:"intermediate",codeExample:"x enters (non-basic → basic), s₁ leaves (basic → non-basic)"},{question:"How does the entering variable affect the objective value?",shortAnswer:"It increases the objective value (for maximization).",explanation:"The entering variable has a negative coefficient in the Z row, so increasing it improves (increases) the objective value.",hint:"Improves Z value.",level:"intermediate",codeExample:"x coefficient: -3 → increasing x by 1 increases Z by 3"},{question:"What is Bland's rule?",shortAnswer:"A tie-breaking rule that chooses the smallest index variable.",explanation:"Bland's rule prevents cycling in degenerate cases by always choosing the smallest-index entering and leaving variable.",hint:"Smallest index tie-breaking.",level:"advanced",codeExample:"Among ties, choose variable with smallest index"},{question:"What is degeneracy in the Simplex Method?",shortAnswer:"A situation where a basic variable has value 0.",explanation:"Degeneracy occurs when the ratio test gives a tie or a basic variable becomes zero. It can cause cycling in the Simplex Method.",hint:"Basic variable = 0.",level:"advanced",codeExample:"s₁ = 0 at optimal → degenerate"},{question:"How do you choose the entering variable in minimization?",shortAnswer:"Choose the variable with the most positive coefficient in the Z row.",explanation:"For minimization, we want to reduce the objective value. The most positive coefficient indicates the greatest potential reduction.",hint:"Most positive for minimization.",level:"advanced",codeExample:"Z row: [3, 2, 0, 0] → x enters (3 is most positive)"},{question:"What is the role of the pivot operation?",shortAnswer:"To transform the tableau and exchange the entering and leaving variables.",explanation:"The pivot operation uses row operations to make the pivot element 1 and all other entries in the pivot column 0.",hint:"Exchange variables via row operations.",level:"advanced",codeExample:"Make pivot = 1, column = identity"},{question:"Can a variable enter and leave in the same iteration?",shortAnswer:"No, a variable cannot both enter and leave in the same iteration.",explanation:"The entering variable becomes basic and the leaving variable becomes non-basic. They exchange places.",hint:"Exchange, not both.",level:"intermediate",codeExample:"x enters, s₁ leaves (exchange)"}],V=`TOPIC 6: ENTERING AND LEAVING VARIABLES\r
=======================================\r
\r
INTRODUCTION\r
------------\r
In each iteration of the Simplex Method, one non-basic variable \r
enters the basis and one basic variable leaves. This exchange \r
improves the objective value while maintaining feasibility.\r
\r
ENTERING VARIABLE\r
-----------------\r
The entering variable is chosen from the Z row:\r
- Maximization: most negative coefficient\r
- Minimization: most positive coefficient\r
\r
Why: It gives the greatest improvement in Z per unit.\r
\r
LEAVING VARIABLE\r
----------------\r
The leaving variable is chosen using the ratio test:\r
1. For each row with positive coefficient in entering column:\r
   Ratio = RHS / coefficient\r
2. Choose the row with the smallest positive ratio\r
\r
Why: It ensures the solution remains feasible.\r
\r
THE RATIO TEST\r
--------------\r
Purpose: Determines which constraint limits the entering variable.\r
\r
Steps:\r
1. Identify entering column\r
2. For each row with coefficient > 0:\r
   Ratio = RHS / coefficient\r
3. Select row with minimum ratio\r
\r
PIVOT ELEMENT\r
-------------\r
The pivot element is:\r
- Located at intersection of entering column and leaving row\r
- Must be positive\r
- Used in row operations to transform the tableau\r
\r
EXAMPLE\r
-------\r
Tableau:\r
┌─────┬─────┬─────┬─────┬─────┬─────┐\r
│  B  │  x  │  y  │ s₁  │ s₂  │ RHS │\r
├─────┼─────┼─────┼─────┼─────┼─────┤\r
│ s₁  │  2  │  1  │  1  │  0  │ 10  │\r
│ s₂  │  1  │  2  │  0  │  1  │  8  │\r
├─────┼─────┼─────┼─────┼─────┼─────┤\r
│  Z  │ -3  │ -2  │  0  │  0  │  0  │\r
└─────┴─────┴─────┴─────┴─────┴─────┘\r
\r
Entering Variable:\r
Z row: [-3, -2, 0, 0]\r
Most negative: -3 → x enters\r
\r
Leaving Variable:\r
Ratio test:\r
s₁: 10/2 = 5\r
s₂: 8/1 = 8\r
Minimum: 5 → s₁ leaves\r
\r
Pivot Element: 2 (s₁ row, x column)\r
\r
SPECIAL CASES\r
-------------\r
1. Tie in Ratio Test:\r
   - Either row can leave\r
   - Use tie-breaking rule\r
   - May lead to degeneracy\r
\r
2. All Negative Coefficients:\r
   - Problem is unbounded\r
   - No finite optimal solution\r
\r
3. No Negative Coefficients:\r
   - Optimal solution reached\r
   - Stop the algorithm\r
\r
COMMON MISTAKES\r
---------------\r
1. Choosing wrong sign for entering variable\r
2. Using negative denominators in ratio test\r
3. Ignoring ties in ratio test\r
4. Forgetting to check optimality first\r
\r
BEST PRACTICES\r
--------------\r
1. Always check Z row first\r
2. Use exact fractions for ratios\r
3. Handle ties consistently\r
4. Verify pivot element is positive\r
\r
TEACHER'S NOTE\r
--------------\r
Selecting entering and leaving variables is the heart of each \r
Simplex iteration. The rules are clear: most negative Z coefficient \r
enters, minimum ratio test determines who leaves. Be systematic \r
and careful with the ratio test."`,O=()=>{const[d,u]=o.useState("concept"),[x,f]=o.useState({}),[c,y]=o.useState(null),[h,w]=o.useState(null),j=[{id:"concept",label:"Concept"},{id:"examples",label:"Examples"},{id:"practice",label:"Practice"}],N=[{id:1,title:"Example 1: Basic Entering and Leaving Variables",problem:`Given the tableau:
┌─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ s₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┤
│ s₁  │  2  │  1  │  1  │  0  │ 10  │
│ s₂  │  1  │  2  │  0  │  1  │  8  │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │ -3  │ -2  │  0  │  0  │  0  │
└─────┴─────┴─────┴─────┴─────┴─────┘

Identify the entering and leaving variables.`,solution:`Entering variable: x (most negative Z row: -3)
Leaving variable: s₂ (minimum ratio: 8/1 = 8)`,detailedSolution:`Step 1: Identify entering variable
Look at the Z row for the most negative coefficient
Z row: [-3, -2, 0, 0, 0]
Most negative: -3 (column x)
Entering variable: x

Step 2: Identify leaving variable
Use ratio test: RHS / coefficient in entering column
For s₁: 10/2 = 5
For s₂: 8/1 = 8
Minimum ratio: 5 (row s₁)
Leaving variable: s₁

Step 3: Verify
Entering: x (improves Z by 3 per unit)
Leaving: s₁ (will become non-basic)
Pivot element: 2 (intersection of x column and s₁ row)`},{id:2,title:"Example 2: Multiple Entering Candidates",problem:`Given the tableau with Z row: [-5, -3, 0, 0, 0]
and constraints:
Row 1: 3, 1, 1, 0, 12
Row 2: 2, 4, 0, 1, 16

Identify the entering and leaving variables.`,solution:`Entering variable: x (most negative: -5)
Leaving variable: s₁ (minimum ratio: 12/3 = 4)`,detailedSolution:`Step 1: Identify entering variable
Z row coefficients: [-5, -3, 0, 0, 0]
Most negative: -5 (column x)
Entering variable: x

Step 2: Identify leaving variable
Ratio test:
Row 1 (s₁): 12/3 = 4
Row 2 (s₂): 16/2 = 8
Minimum ratio: 4 (row s₁)
Leaving variable: s₁

Step 3: Check
If x enters, Z increases by 5 per unit
s₁ leaves (becomes 0) when x reaches 4`},{id:3,title:"Example 3: Tie in Ratio Test",problem:`Given the tableau with constraints:
Row 1: 2, 1, 1, 0, 10
Row 2: 4, 2, 0, 1, 20
Z row: [-6, -4, 0, 0, 0]

Identify the entering and leaving variables.`,solution:`Entering variable: x (most negative: -6)
Leaving variable: s₁ (ratio test: 10/2 = 5, 20/4 = 5 → tie)`,detailedSolution:`Step 1: Identify entering variable
Z row: [-6, -4, 0, 0, 0]
Most negative: -6 (column x)
Entering variable: x

Step 2: Identify leaving variable
Ratio test:
Row 1 (s₁): 10/2 = 5
Row 2 (s₂): 20/4 = 5
Tie! Both give ratio 5

Step 3: Handle tie
Either row can leave (tie-breaking rule)
Choose s₁ (first row) to leave
Leaving variable: s₁

Step 4: Note
Ties may lead to degeneracy
Pivot element: 2`},{id:4,title:"Example 4: Real-World Simplex Iteration",problem:`A factory produces chairs (x) and tables (y). Current tableau:
┌─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ s₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┤
│ s₁  │  2  │  3  │  1  │  0  │ 120 │
│ s₂  │  3  │  2  │  0  │  1  │ 90  │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │ -40 │ -50 │  0  │  0  │  0  │
└─────┴─────┴─────┴─────┴─────┴─────┘

Identify the entering and leaving variables.`,solution:`Entering variable: y (most negative: -50)
Leaving variable: s₂ (minimum ratio: 90/2 = 45)`,detailedSolution:`Step 1: Entering variable
Z row: [-40, -50, 0, 0, 0]
Most negative: -50 (column y)
Entering: y (tables)

Step 2: Leaving variable
Ratio test:
Row 1 (s₁): 120/3 = 40
Row 2 (s₂): 90/2 = 45
Minimum ratio: 40 (row s₁)
Leaving: s₁

Step 3: Interpret
Producing tables increases profit by ₹50/unit
Labor (s₁) is the limiting factor
Will produce tables until labor is fully used`}],k=[{id:1,title:"Find Entering Variable",problem:`Z row: [-4, -6, 0, 0, 0]
Which variable enters the basis?`,hint:"Look for the most negative coefficient in the Z row.",solution:"y enters (coefficient -6 is most negative)"},{id:2,title:"Find Leaving Variable",problem:`Constraints:
Row 1: 2, 3, 1, 0, 18
Row 2: 4, 1, 0, 1, 12
Entering variable: x
Which variable leaves?`,hint:"Use the ratio test: RHS / coefficient of entering variable.",solution:"Row 1: 18/2 = 9, Row 2: 12/4 = 3 → s₂ leaves"},{id:3,title:"Complete Selection",problem:`Tableau:
B | x | y | s₁ | s₂ | RHS
s₁| 1 | 2 | 1 | 0 | 8
s₂| 3 | 1 | 0 | 1 | 6
Z |-2 |-5 | 0 | 0 | 0

Identify entering and leaving variables.`,hint:"Find most negative Z coefficient, then use ratio test.",solution:"Entering: y (-5), Leaving: s₁ (8/2=4, 6/1=6 → min 4)"}],E=t=>{f(g=>({...g,[t]:!g[t]}))},S=()=>{const[t,g]=o.useState({rows:[{basic:"s₁",coefficients:[2,1,1,0],rhs:10},{basic:"s₂",coefficients:[1,2,0,1],rhs:8}],zRow:[-3,-2,0,0,0]}),[r,T]=o.useState(null),[s,R]=o.useState(null),I=()=>{const i=t.zRow;let a=0,l=-1;for(let n=0;n<i.length-1;n++)i[n]<a&&(a=i[n],l=n);return l},Z=i=>{if(i===-1)return-1;let a=1/0,l=-1;for(let n=0;n<t.rows.length;n++){const v=t.rows[n].coefficients[i];if(v>0){const p=t.rows[n].rhs/v;p<a&&(a=p,l=n)}}return l},A=()=>{const i=I(),a=Z(i);T(i),R(a)},b=["x","y","s₁","s₂"];return e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4",children:"Interactive Variable Selector"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs font-mono",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-gray-600 dark:text-gray-400",children:[e.jsx("th",{className:"px-2 py-1 border dark:border-gray-600",children:"B"}),e.jsx("th",{className:"px-2 py-1 border dark:border-gray-600",children:"x"}),e.jsx("th",{className:"px-2 py-1 border dark:border-gray-600",children:"y"}),e.jsx("th",{className:"px-2 py-1 border dark:border-gray-600",children:"s₁"}),e.jsx("th",{className:"px-2 py-1 border dark:border-gray-600",children:"s₂"}),e.jsx("th",{className:"px-2 py-1 border dark:border-gray-600",children:"RHS"})]})}),e.jsxs("tbody",{children:[t.rows.map((i,a)=>e.jsxs("tr",{className:s===a?"bg-red-100 dark:bg-red-900/30":"",children:[e.jsx("td",{className:"px-2 py-1 border dark:border-gray-600 font-medium",children:i.basic}),i.coefficients.map((l,n)=>e.jsx("td",{className:m("px-2 py-1 border dark:border-gray-600 text-center",r===n&&"bg-green-100 dark:bg-green-900/30 font-bold"),children:l},n)),e.jsx("td",{className:"px-2 py-1 border dark:border-gray-600 text-center",children:i.rhs})]},a)),e.jsxs("tr",{className:"bg-yellow-50 dark:bg-yellow-900/20",children:[e.jsx("td",{className:"px-2 py-1 border dark:border-gray-600 font-medium",children:"Z"}),t.zRow.map((i,a)=>e.jsx("td",{className:m("px-2 py-1 border dark:border-gray-600 text-center",r===a&&"bg-green-100 dark:bg-green-900/30 font-bold"),children:i},a)),e.jsx("td",{className:"px-2 py-1 border dark:border-gray-600 text-center",children:"0"})]})]})]})}),e.jsx("button",{onClick:A,className:"mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 w-full",children:"Find Entering & Leaving Variables"})]}),e.jsxs("div",{children:[r!==null&&r!==-1&&e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500 mb-3",children:[e.jsx("h5",{className:"font-semibold text-green-700 dark:text-green-400",children:"Entering Variable"}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-bold",children:b[r]})," ","will enter the basis (most negative Z coefficient)"]})]}),s!==null&&s!==-1&&e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500 mb-3",children:[e.jsx("h5",{className:"font-semibold text-red-700 dark:text-red-400",children:"Leaving Variable"}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-bold",children:t.rows[s].basic})," ","will leave the basis (minimum ratio test)"]})]}),r!==null&&r!==-1&&s!==null&&s!==-1&&e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500",children:[e.jsx("h5",{className:"font-semibold text-purple-700 dark:text-purple-400",children:"Pivot Information"}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:["Pivot Element: ",t.rows[s].coefficients[r]]}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:["Pivot Row: ",t.rows[s].basic]}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:["Pivot Column: ",b[r]]})]}),r===-1&&e.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:"No negative coefficients in Z row. Optimal solution reached!"})})]})]})]})};return e.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[e.jsxs("div",{className:"text-center mb-10",children:[e.jsx("h1",{className:"text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-all duration-300",children:"Entering and Leaving Variables"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto",children:"Learn how to identify which variable enters the basis and which leaves during each iteration of the Simplex Method."})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 justify-center border-b border-gray-200 dark:border-gray-700 pb-4",children:j.map(t=>e.jsx("button",{onClick:()=>u(t.id),className:m("px-6 py-2 rounded-lg font-medium transition-all duration-300",d===t.id?"bg-cyan-600 text-white shadow-lg shadow-cyan-200 dark:shadow-cyan-900/30":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-md"),children:t.label},t.id))}),e.jsxs("div",{className:"space-y-8",children:[d==="concept"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"What are Entering and Leaving Variables?"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 leading-relaxed mb-4",children:"In each iteration of the Simplex Method, one non-basic variable enters the basis (entering variable) and one basic variable leaves the basis (leaving variable). This exchange improves the objective function value while maintaining feasibility. The entering variable is chosen based on the most negative coefficient in the Z row, and the leaving variable is chosen using the minimum ratio test."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Key Concepts"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Entering variable: non-basic variable that enters the basis"}),e.jsx("li",{children:"Leaving variable: basic variable that leaves the basis"}),e.jsx("li",{children:"Pivot element: intersection of entering column and leaving row"}),e.jsx("li",{children:"Exchange improves Z while maintaining feasibility"})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Why It Matters"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Drives the Simplex iteration"}),e.jsx("li",{children:"Improves objective value"}),e.jsx("li",{children:"Maintains feasibility"}),e.jsx("li",{children:"Moves to adjacent corner point"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"How to Select Entering and Leaving Variables"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Entering Variable"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Look at the Z row coefficients"}),e.jsxs("li",{children:["Find the ",e.jsx("span",{className:"font-bold",children:"most negative"})," coefficient"]}),e.jsx("li",{children:"Its column is the entering variable"}),e.jsx("li",{children:"For maximization: most negative"}),e.jsx("li",{children:"For minimization: most positive"})]}),e.jsxs("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:["Z row: [-3, -2, 0, 0, 0]",e.jsx("br",{}),"Most negative: -3 → x enters"]})]}),e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500",children:[e.jsx("h4",{className:"font-semibold text-red-700 dark:text-red-400 mb-2",children:"Leaving Variable"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsxs("li",{children:["Use the ",e.jsx("span",{className:"font-bold",children:"minimum ratio test"})]}),e.jsx("li",{children:"For each row: RHS / coefficient in entering column"}),e.jsxs("li",{children:["Choose the row with the ",e.jsx("span",{className:"font-bold",children:"smallest positive ratio"})]}),e.jsx("li",{children:"Its basic variable leaves the basis"}),e.jsx("li",{children:"Ensure denominator > 0"})]}),e.jsxs("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:["Row 1: 10/2 = 5",e.jsx("br",{}),"Row 2: 8/1 = 8",e.jsx("br",{}),"Min ratio: 5 → s₁ leaves"]})]})]})]}),e.jsx(S,{}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"💡 Tips & Tricks for Selecting Variables"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h4",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"Professional Tips"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Always check Z row for negative coefficients"}),e.jsx("li",{children:"Use exact fractions for ratio test"}),e.jsx("li",{children:"Handle ties with a consistent rule"}),e.jsx("li",{children:"Verify pivot element is positive"})]})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500",children:[e.jsx("h4",{className:"font-semibold text-purple-700 dark:text-purple-400 mb-2",children:"Common Mistakes"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Choosing wrong sign for entering variable"}),e.jsx("li",{children:"Using negative denominators in ratio test"}),e.jsx("li",{children:"Ignoring ties in ratio test"}),e.jsx("li",{children:"Forgetting to check optimality first"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"✅ Mini Checklist"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Z row checked for negative coefficients"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Most negative coefficient identified"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Ratio test performed correctly"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Minimum positive ratio identified"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Pivot element is positive"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Feasibility maintained"})]})]})]})]}),d==="examples"&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"space-y-6",children:N.map(t=>e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-bold text-gray-800 dark:text-gray-200 mb-3",children:t.title}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h5",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Problem"}),e.jsx("pre",{className:"text-xs font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.problem})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h5",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Solution"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.solution})]})]}),e.jsx("div",{className:"mt-4 flex justify-center",children:e.jsx("button",{onClick:()=>E(t.id),className:"px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-all duration-300",children:x[t.id]?"Hide Detailed Steps":"Show Detailed Steps"})}),x[t.id]&&e.jsxs("div",{className:"mt-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h5",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"📝 Detailed Steps"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.detailedSolution})]})]},`example-${t.id}`))})}),d==="practice"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center",children:"Practice Problems"}),e.jsx("div",{className:"space-y-6",children:k.map(t=>e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 transition-all duration-300 hover:shadow-md",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:t.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:t.problem}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>y(c===t.id?null:t.id),className:"px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-all duration-300",children:c===t.id?"Hide Solution":"Check Solution"}),e.jsx("button",{onClick:()=>w(h===t.id?null:t.id),className:"px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300",children:h===t.id?"Hide Hint":"Show Hint"})]}),h===t.id&&e.jsx("div",{className:"mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800",children:e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"💡 Hint:"})," ",t.hint]})}),c===t.id&&e.jsx("div",{className:"mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800",children:e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:t.solution})})]},t.id))})]}),e.jsxs("div",{className:"bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-6 border border-cyan-200 dark:border-cyan-800",children:[e.jsx("h4",{className:"font-semibold text-cyan-700 dark:text-cyan-400 mb-2",children:"💡 Tips for Selecting Variables"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Entering variable:"})," Most negative in Z row (maximization)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Leaving variable:"})," Minimum ratio test (RHS / entering column)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Check positivity:"})," Only use positive denominators in ratio test"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Handle ties:"})," Use a consistent tie-breaking rule"]})]})]})]})]}),e.jsx("div",{className:"mt-12",children:e.jsx(L,{title:"Entering and Leaving Variables FAQs",questions:H})}),e.jsx("div",{className:"mt-8",children:e.jsx(C,{content:V,title:"Entering and Leaving Variables",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Note",downloadFileName:"topic6_note.txt"})}),e.jsx("div",{className:"mt-8",children:e.jsx(M,{note:"Selecting entering and leaving variables is the heart of each Simplex iteration. I tell my students that this is like choosing which player to bring onto the field (entering) and which to take off (leaving). The rules are clear: the most negative Z coefficient enters, and the minimum ratio test determines who leaves. The key is to be systematic and careful with the ratio test - one wrong calculation can derail the entire solution."})})]})})};export{O as default};
