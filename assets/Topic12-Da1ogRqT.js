import{r,j as e}from"./index-DQGlkDD-.js";import{c as m}from"./clsx-B-dksMZM.js";import{T as y}from"./TeacherSukantaHui-BKmNB23P.js";import{F as v}from"./FAQTemplate-DFumfJBl.js";import{P as M}from"./PlainTextPrint-CW5C5iHj.js";import"./github-CG9Ag1Gm.js";import"./createLucideIcon-DkPaqQ-z.js";import"./git-branch-tvjRpsF3.js";const w=[{question:"What types of numerical problems are covered in this topic?",shortAnswer:"Maximization with Simplex, minimization with Big-M, mixed constraints, and real-world applications.",explanation:"The problems range from basic Simplex to advanced Big-M with mixed constraints and real-world applications.",hint:"Check the problem list.",level:"basic",codeExample:"6 problems covering different types"},{question:"How should I approach a numerical problem?",shortAnswer:"Identify the problem type, choose the right method, add variables, and perform iterations.",explanation:"Follow a systematic approach: read the problem, identify constraint types, choose Simplex or Big-M, add variables, form tableau, and iterate to optimality.",hint:"Follow the step-by-step procedure.",level:"basic",codeExample:"Read → Identify → Choose Method → Solve → Verify"},{question:"What is the difference between Simplex and Big-M problems?",shortAnswer:"Simplex problems have only ≤ constraints; Big-M problems have ≥ or = constraints.",explanation:"Simplex uses slack variables. Big-M uses surplus, artificial variables, and a penalty M.",hint:"≤ = Simplex, ≥ or = = Big-M.",level:"basic",codeExample:"Simplex: all ≤, Big-M: ≥ or ="},{question:"How do I identify which method to use?",shortAnswer:"Check the constraint types: ≤ → Simplex, ≥ or = → Big-M.",explanation:"If all constraints are ≤, use Simplex. If any constraints are ≥ or =, use Big-M.",hint:"Constraint types determine the method.",level:"basic",codeExample:"All ≤ → Simplex, ≥ or = → Big-M"},{question:"What are slack variables and when are they used?",shortAnswer:"Slack variables are added to ≤ constraints in the Simplex Method.",explanation:"Slack variables convert ≤ inequalities to equalities. They represent unused resources.",hint:"Added to ≤ constraints.",level:"intermediate",codeExample:"2x + y ≤ 10 → 2x + y + s = 10"},{question:"What are surplus variables and when are they used?",shortAnswer:"Surplus variables are subtracted from ≥ constraints in the Big-M Method.",explanation:"Surplus variables convert ≥ inequalities to equalities. They represent excess over requirements.",hint:"Subtracted from ≥ constraints.",level:"intermediate",codeExample:"x + y ≥ 6 → x + y - s = 6"},{question:"What are artificial variables and when are they used?",shortAnswer:"Artificial variables are added to ≥ and = constraints in the Big-M Method.",explanation:"Artificial variables provide an initial basic feasible solution and are penalized with M.",hint:"Added to ≥ and = constraints.",level:"intermediate",codeExample:"x + y ≥ 6 → x + y - s + a = 6"},{question:"How do I check if my solution is optimal?",shortAnswer:"For maximization, all Z coefficients ≥ 0. For minimization, all Z coefficients ≤ 0.",explanation:"Check the Z row in the final tableau. If the optimality condition is met, stop.",hint:"Check Z row coefficients.",level:"intermediate",codeExample:"Max: all Z ≥ 0, Min: all Z ≤ 0"},{question:"What does it mean if an artificial variable remains in the solution?",shortAnswer:"The problem is infeasible.",explanation:"If any artificial variable has a positive value at optimality, the original problem has no feasible solution.",hint:"Artificial > 0 → infeasible.",level:"advanced",codeExample:"a₁ = 5 at optimal → infeasible"},{question:"How do I convert minimization to maximization?",shortAnswer:"Multiply the objective function by -1.",explanation:"Minimize Z = c₁x + c₂y → Maximize Z' = -c₁x - c₂y.",hint:"Multiply by -1.",level:"intermediate",codeExample:"Min Z = 4x + 3y → Max Z' = -4x - 3y"},{question:"What is the Big-M penalty for maximization?",shortAnswer:"Subtract M × artificial variable from the objective.",explanation:"In maximization, use -M a to penalize artificial variables and drive them to zero.",hint:"Subtract M for max.",level:"intermediate",codeExample:"Max Z = 5x + 7y - M a₁ - M a₂"},{question:"What is the Big-M penalty for minimization?",shortAnswer:"Add M × artificial variable to the objective.",explanation:"In minimization, use +M a to penalize artificial variables and drive them to zero.",hint:"Add M for min.",level:"intermediate",codeExample:"Min Z = 4x + 3y + M a₁ + M a₂"},{question:"How do I find the entering variable?",shortAnswer:"Choose the most negative coefficient in the Z row (for maximization).",explanation:"The entering variable gives the greatest improvement in the objective value.",hint:"Most negative Z coefficient.",level:"intermediate",codeExample:"Z row: [-5, -3, 0, 0] → x enters (-5)"},{question:"How do I find the leaving variable?",shortAnswer:"Use the minimum ratio test: RHS / coefficient in entering column.",explanation:"Choose the row with the smallest positive ratio to maintain feasibility.",hint:"Minimum positive ratio.",level:"intermediate",codeExample:"Ratios: 10/2=5, 8/1=8 → row 1 leaves"},{question:"What is the pivot element?",shortAnswer:"The element at the intersection of the entering column and leaving row.",explanation:"The pivot element is used in row operations to transform the tableau.",hint:"Intersection of entering column and leaving row.",level:"intermediate",codeExample:"Pivot = 2 at (row s₁, column x)"},{question:"How many iterations are typically needed?",shortAnswer:"Depends on the problem size, usually 2-5 for small problems.",explanation:"Each iteration moves to a better corner point until optimality is reached.",hint:"2-5 for small problems.",level:"basic",codeExample:"Small problems: 2-3 iterations"},{question:"What is the role of the formula reference?",shortAnswer:"It provides quick access to all formulas needed for solving.",explanation:"The formula reference covers Simplex, Big-M, tableau structure, and optimality conditions.",hint:"Quick reference for formulas.",level:"basic",codeExample:"Simplex, Big-M, tableau formulas"}],S=`TOPIC 12: NUMERICAL PROBLEMS\r
============================\r
\r
INTRODUCTION\r
------------\r
Numerical problems are essential for mastering the Simplex and \r
Big-M Methods. This topic provides a comprehensive set of problems \r
with detailed step-by-step solutions.\r
\r
PROBLEM LIST\r
------------\r
1. Maximization with Simplex (Basic)\r
2. Minimization with Big-M (Intermediate)\r
3. Maximization with Mixed Constraints (Advanced)\r
4. Real-World Production Planning (Intermediate)\r
5. Diet Planning with Big-M (Intermediate)\r
6. Transportation Problem (Advanced)\r
\r
PROBLEM TYPES\r
-------------\r
1. Simplex Method Problems:\r
   - All constraints are ≤\r
   - Use slack variables\r
   - Maximization or minimization\r
\r
2. Big-M Method Problems:\r
   - ≥ or = constraints present\r
   - Use surplus and artificial variables\r
   - Big-M penalty in objective\r
\r
3. Mixed Constraint Problems:\r
   - Combination of ≤, ≥, and =\r
   - Use slack, surplus, and artificial variables\r
   - Requires careful formulation\r
\r
SOLUTION STEPS\r
--------------\r
1. Read and understand the problem\r
2. Identify constraint types\r
3. Choose the appropriate method\r
4. Add necessary variables\r
5. Form the initial tableau\r
6. Perform iterations\r
7. Check optimality\r
8. Interpret results\r
\r
KEY FORMULAS\r
------------\r
Simplex:\r
- Standard Form: Max Z = c₁x + c₂y + 0s\r
- Entering: Most negative Z coefficient\r
- Leaving: Min ratio test\r
- Optimality: All Z ≥ 0 (max)\r
\r
Big-M:\r
- Surplus: subtract s from ≥\r
- Artificial: add a to ≥ and =\r
- Penalty: +M (min) or -M (max)\r
- Feasibility: artificials must be 0\r
\r
COMMON MISTAKES\r
---------------\r
1. Using wrong method for constraint types\r
2. Forgetting artificial variables\r
3. Incorrect Big-M penalties\r
4. Not checking artificials at optimality\r
5. Arithmetic errors in row operations\r
\r
BEST PRACTICES\r
--------------\r
1. Identify constraint types first\r
2. Add variables systematically\r
3. Use exact fractions for accuracy\r
4. Check optimality after each iteration\r
5. Verify artificials are zero\r
\r
TEACHER'S NOTE\r
--------------\r
Numerical problems build proficiency in the Simplex and Big-M \r
Methods. Each problem is like a puzzle - follow the steps \r
carefully and check your work at each stage."`,I=()=>{const[n,x]=r.useState("problems"),[t,h]=r.useState(0),[l,s]=r.useState(!1),[o,d]=r.useState(!1),[j,u]=r.useState(0),b=[{id:"problems",label:"Problems"},{id:"solutions",label:"Solutions"},{id:"formulas",label:"Formula Reference"}],a=[{id:1,title:"Problem 1: Maximization with Simplex",difficulty:"Basic",problem:`Maximize Z = 3x + 2y
Subject to:
2x + y ≤ 10
x + 2y ≤ 8
x, y ≥ 0

Solve using the Simplex Method.`,hint:"Add slack variables, form tableau, and perform iterations until optimality.",steps:["Step 1: Convert to standard form with slack variables s₁ and s₂","Step 2: Initial tableau: B | x | y | s₁ | s₂ | RHS","Step 3: Entering variable: x (most negative: -3)","Step 4: Leaving variable: s₁ (min ratio: 10/2=5)","Step 5: Pivot element: 2 (row s₁, col x)","Step 6: After pivot, new tableau with x basic","Step 7: Next iteration: y enters, s₂ leaves","Step 8: Optimal tableau: all Z ≥ 0"],solution:"Optimal solution: x = 4, y = 2, Z = 16"},{id:2,title:"Problem 2: Minimization with Big-M",difficulty:"Intermediate",problem:`Minimize Z = 4x + 3y
Subject to:
x + y ≥ 6
2x + y ≥ 8
x, y ≥ 0

Solve using the Big-M Method.`,hint:"Convert to maximization, add surplus and artificial variables, use Big-M penalty.",steps:["Step 1: Convert to maximization: Max Z' = -4x - 3y","Step 2: Add surplus and artificial variables","Step 3: Objective: Max Z' = -4x - 3y - M a₁ - M a₂","Step 4: Initial tableau with artificial variables as basic","Step 5: Perform iterations to drive artificials to zero","Step 6: Check optimality when all Z ≥ 0"],solution:"Optimal solution: x = 2, y = 4, Z = 20"},{id:3,title:"Problem 3: Maximization with Mixed Constraints",difficulty:"Advanced",problem:`Maximize Z = 5x + 7y
Subject to:
3x + 2y ≤ 18
2x + 4y ≥ 20
x + 3y = 15
x, y ≥ 0

Solve using the Big-M Method.`,hint:"Use slack for ≤, surplus+artificial for ≥, artificial for =. Apply Big-M penalties.",steps:["Step 1: Add slack s₁, surplus s₂, artificial a₁, a₂","Step 2: Objective: Max Z = 5x + 7y + 0s₁ + 0s₂ - M a₁ - M a₂","Step 3: Initial tableau with s₁, a₁, a₂ as basic","Step 4: Perform iterations to eliminate artificial variables","Step 5: Continue until optimality (all Z ≥ 0)"],solution:"Optimal solution: x = 3, y = 4, Z = 43"},{id:4,title:"Problem 4: Real-World Production Planning",difficulty:"Intermediate",problem:`A factory produces two products. Profit: Product A = ₹40, Product B = ₹50.
Resources:
Labor: 2x + 3y ≤ 120 hours
Material: 3x + 2y ≤ 90 units
x, y ≥ 0

Find the optimal production mix using Simplex Method.`,hint:"This is a maximization problem with all ≤ constraints. Use Simplex Method.",steps:["Step 1: Add slack variables s₁ and s₂","Step 2: Objective: Max Z = 40x + 50y + 0s₁ + 0s₂","Step 3: Initial tableau","Step 4: Perform Simplex iterations","Step 5: Stop when all Z ≥ 0"],solution:"Optimal: x = 6, y = 36, Z = ₹2,160"},{id:5,title:"Problem 5: Diet Planning with Big-M",difficulty:"Intermediate",problem:`Minimize cost of a diet:
Minimize Z = 20x + 30y
Subject to:
4x + 3y ≥ 24 (Protein)
3x + 5y ≥ 18 (Carbs)
x, y ≥ 0

Solve using Big-M Method.`,hint:"Convert to maximization, add surplus and artificial variables.",steps:["Step 1: Convert to maximization: Max Z' = -20x - 30y","Step 2: Add surplus and artificial variables","Step 3: Objective: Max Z' = -20x - 30y - M a₁ - M a₂","Step 4: Initial tableau with artificial variables","Step 5: Perform iterations to find optimal"],solution:"Optimal: x = 6, y = 0, Z = 120"},{id:6,title:"Problem 6: Transportation Problem",difficulty:"Advanced",problem:`Minimize cost:
Minimize Z = 8x + 10y
Subject to:
3x + 2y ≥ 30
2x + 5y = 40
x, y ≥ 0

Solve using Big-M Method.`,hint:"Use artificial variable for equality constraint and surplus+artificial for ≥.",steps:["Step 1: Convert to maximization: Max Z' = -8x - 10y","Step 2: Add surplus s₁, artificial a₁, a₂","Step 3: Objective: Max Z' = -8x - 10y - M a₁ - M a₂","Step 4: Initial tableau with artificial variables","Step 5: Perform iterations until artificials leave"],solution:"Optimal: x = 10, y = 4, Z = 120"}],g={sections:[{title:"Simplex Method",formulas:[{name:"Standard Form",formula:"Max Z = c₁x + c₂y + 0s₁ + 0s₂"},{name:"Entering Variable",formula:"Most negative Z coefficient (max)"},{name:"Leaving Variable",formula:"Min ratio: RHS / coefficient"},{name:"Pivot Operation",formula:"Row = Row ÷ pivot"},{name:"Optimality Condition",formula:"All Z coefficients ≥ 0 (max)"}]},{title:"Big-M Method",formulas:[{name:"Surplus Variable",formula:"a₁x + a₂y - s = b (s ≥ 0)"},{name:"Artificial Variable",formula:"a₁x + a₂y + a = b (a ≥ 0)"},{name:"Big-M Penalty (Min)",formula:"Min Z = c₁x + c₂y + M a"},{name:"Big-M Penalty (Max)",formula:"Max Z = c₁x + c₂y - M a"},{name:"Feasibility Check",formula:"If a > 0 at optimal → infeasible"}]},{title:"Tableau Structure",formulas:[{name:"Basic Variables",formula:"B = [slack, artificial]"},{name:"Z Row",formula:"Z - c₁x - c₂y - ... = 0"},{name:"RHS",formula:"Right-hand side values"}]},{title:"Optimality Conditions",formulas:[{name:"Maximization",formula:"All Z coefficients ≥ 0"},{name:"Minimization",formula:"All Z coefficients ≤ 0"}]}]};return e.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[e.jsxs("div",{className:"text-center mb-10",children:[e.jsx("h1",{className:"text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-all duration-300",children:"Numerical Problems"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto",children:"Practice your Simplex and Big-M skills with these numerical problems. Each problem includes detailed step-by-step solutions to help you learn and verify your work."})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 justify-center border-b border-gray-200 dark:border-gray-700 pb-4",children:b.map(i=>e.jsx("button",{onClick:()=>x(i.id),className:m("px-6 py-2 rounded-lg font-medium transition-all duration-300",n===i.id?"bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-indigo-900/30":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-md"),children:i.label},i.id))}),e.jsxs("div",{className:"space-y-8",children:[n==="problems"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:a.map(i=>e.jsxs("div",{onClick:()=>{h(i.id-1),s(!1),d(!1),u(0)},className:m("bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02]",t===i.id-1?"border-2 border-indigo-500":""),children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 text-sm",children:i.title}),e.jsx("span",{className:m("text-xs px-2 py-1 rounded-full",i.difficulty==="Basic"?"bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400":i.difficulty==="Intermediate"?"bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400":"bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"),children:i.difficulty})]}),e.jsx("pre",{className:"text-xs font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap line-clamp-3",children:i.problem}),e.jsx("div",{className:"mt-2",children:e.jsxs("span",{className:"text-xs px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 rounded",children:[i.steps.length," steps"]})})]},`prob-${i.id}`))}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:a[t]?.title}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Problem"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:a[t]?.problem})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500",children:[e.jsx("h4",{className:"font-semibold text-purple-700 dark:text-purple-400 mb-2",children:"Steps"}),e.jsx("ol",{className:"list-decimal list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:a[t]?.steps.map((i,c)=>e.jsx("li",{children:i},`step-${c}`))})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("button",{onClick:()=>{d(!o),l&&s(!1)},className:"px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all duration-300",children:o?"Hide Hint":"Show Hint"}),e.jsx("button",{onClick:()=>{s(!l),o&&d(!1)},className:"px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300",children:l?"Hide Solution":"Show Solution"})]}),o&&a[t]?.hint&&e.jsx("div",{className:"mt-2 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800",children:e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"💡 Hint:"})," ",a[t].hint]})}),l&&a[t]?.solution&&e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Solution"}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 font-mono",children:a[t].solution}),e.jsx("div",{className:"mt-2 p-2 bg-green-100 dark:bg-green-900/30 rounded",children:e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"💡 Key Insight:"}),t===0&&" The optimal solution balances the two constraints.",t===1&&" Big-M method successfully drove artificial variables to zero.",t===2&&" Mixed constraints require careful handling of different variable types.",t===3&&" Labor is the binding constraint in this production problem.",t===4&&" Protein requirement is exactly met at the optimal solution.",t===5&&" Equality constraints require artificial variables in Big-M."]})})]})]})]})]}),n==="solutions"&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center",children:"Complete Solutions"}),e.jsx("p",{className:"text-center text-gray-600 dark:text-gray-400 mb-6",children:"Select a problem above to view its complete step-by-step solution."}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:a.map(i=>e.jsxs("div",{onClick:()=>{h(i.id-1),x("problems"),s(!0),d(!1)},className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200",children:i.title}),e.jsxs("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:[i.difficulty," • ",i.steps.length," steps"]}),e.jsx("div",{className:"mt-2 text-xs text-indigo-600 dark:text-indigo-400",children:"Click to view solution"})]},`sol-${i.id}`))})]})}),n==="formulas"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center",children:"Formula Reference"}),e.jsx("p",{className:"text-center text-gray-600 dark:text-gray-400 mb-6",children:"Quick reference for all formulas needed in Simplex and Big-M Methods."}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:g.sections.map((i,c)=>e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-indigo-600 dark:text-indigo-400 mb-3",children:i.title}),e.jsx("div",{className:"space-y-2",children:i.formulas.map((p,f)=>e.jsxs("div",{className:"border-b border-gray-200 dark:border-gray-600 last:border-0 pb-2 last:pb-0",children:[e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:p.name}),e.jsx("p",{className:"text-sm font-mono text-gray-800 dark:text-gray-200",children:p.formula})]},`formula-${f}`))})]},`section-${c}`))})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"Quick Problem-Solving Checklist"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Simplex Method"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1",children:[e.jsx("li",{children:"Add slack variables for ≤"}),e.jsx("li",{children:"Form initial tableau"}),e.jsx("li",{children:"Find entering variable (most negative Z)"}),e.jsx("li",{children:"Find leaving variable (ratio test)"}),e.jsx("li",{children:"Perform pivot operation"}),e.jsx("li",{children:"Check optimality (all Z ≥ 0)"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Big-M Method"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1",children:[e.jsx("li",{children:"Add surplus for ≥"}),e.jsx("li",{children:"Add artificial for ≥ and ="}),e.jsx("li",{children:"Apply Big-M penalty"}),e.jsx("li",{children:"Form initial tableau"}),e.jsx("li",{children:"Perform iterations"}),e.jsx("li",{children:"Check artificials are zero"})]})]})]})]})]})]}),e.jsx("div",{className:"mt-12",children:e.jsx(v,{title:"Numerical Problems FAQs",questions:w})}),e.jsx("div",{className:"mt-8",children:e.jsx(M,{content:S,title:"Numerical Problems - Simplex and Big-M",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Note",downloadFileName:"topic12_note.txt"})}),e.jsx("div",{className:"mt-8",children:e.jsx(y,{note:"Numerical problems are the best way to build proficiency in the Simplex and Big-M Methods. I tell my students that each problem is like a puzzle - you need to follow the steps carefully and check your work at each stage. The key is to be systematic: identify the problem type, choose the right method, add variables correctly, and perform the iterations with precision. Practice makes perfect, and with enough practice, these methods become second nature."})})]})})};export{I as default};
