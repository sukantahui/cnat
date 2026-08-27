import{b as i,j as e,bg as r}from"./vendor-react-core-Doz9nIC6.js";import{T as S}from"./TeacherSukantaHui-CC0AKmkm.js";import{F as B}from"./FAQTemplate-CkSqDH4B.js";import{P as A}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-BtJHuk7w.js";const E=[{question:"What is the Big-M Method?",shortAnswer:"A variant of the Simplex Method for problems with ≥ and = constraints using artificial variables.",explanation:"The Big-M Method adds artificial variables to ≥ and = constraints and penalizes them with a large M in the objective.",hint:"Handles ≥ and = constraints.",level:"basic",codeExample:"Min Z = c₁x + c₂y + M a₁ + M a₂"},{question:"Why is M used in the Big-M Method?",shortAnswer:"To penalize artificial variables and drive them to zero.",explanation:"M is a very large number that forces artificial variables out of the optimal solution unless the problem is infeasible.",hint:"Penalty for artificial variables.",level:"intermediate",codeExample:"M = 1000 (much larger than other coefficients)"},{question:"What types of constraints require artificial variables?",shortAnswer:"≥ constraints and = constraints.",explanation:"Artificial variables are needed when surplus variables alone cannot provide an initial basic feasible solution.",hint:"≥ and = constraints.",level:"basic",codeExample:"x + y ≥ 6 → x + y - s + a = 6, x + y = 6 → x + y + a = 6"},{question:"How do you penalize artificial variables in minimization?",shortAnswer:"Add M × artificial variable to the objective.",explanation:"In minimization, we add +M a to penalize artificial variables. M is a very large number.",hint:"Add M for minimization.",level:"intermediate",codeExample:"Min Z = 4x + 3y + M a₁ + M a₂"},{question:"How do you penalize artificial variables in maximization?",shortAnswer:"Subtract M × artificial variable from the objective.",explanation:"In maximization, we use -M a to penalize artificial variables. M is a very large number.",hint:"Subtract M for maximization.",level:"intermediate",codeExample:"Max Z = 4x + 3y - M a₁ - M a₂"},{question:"What happens if an artificial variable remains in the optimal solution?",shortAnswer:"The problem is infeasible.",explanation:"If any artificial variable has a positive value at optimality, the original problem has no feasible solution.",hint:"Artificial > 0 → infeasible.",level:"advanced",codeExample:"a₁ = 5 at optimal → infeasible"},{question:"How large should M be?",shortAnswer:"M must be larger than any other coefficient in the problem.",explanation:"M should be chosen so that it dominates all other coefficients, ensuring artificial variables are driven to zero.",hint:"Larger than any coefficient.",level:"advanced",codeExample:"M = 1,000,000 (much larger than other coefficients)"},{question:"What is the difference between Big-M and Two-Phase methods?",shortAnswer:"Big-M uses a penalty in one phase; Two-Phase uses two phases without penalty.",explanation:"Big-M has numerical issues with large M. Two-Phase avoids this by separating feasibility (Phase 1) and optimality (Phase 2).",hint:"One phase vs. two phases.",level:"advanced",codeExample:"Big-M: one tableau, Two-Phase: two tableaus"},{question:"Can Big-M Method handle ≤ constraints?",shortAnswer:"Yes, but they don't need artificial variables.",explanation:"≤ constraints use slack variables and don't require artificial variables. Big-M is only needed for ≥ and = constraints.",hint:"≤ constraints use slack only.",level:"intermediate",codeExample:"2x + y ≤ 10 → 2x + y + s = 10 (no artificial)"},{question:"What is the role of surplus variables in Big-M?",shortAnswer:"They are subtracted from ≥ constraints before adding artificial variables.",explanation:"For ≥ constraints: add surplus variable (-s) then add artificial variable (+a).",hint:"Subtract surplus, add artificial.",level:"intermediate",codeExample:"x + y ≥ 6 → x + y - s + a = 6"},{question:"What is the initial basic solution in Big-M?",shortAnswer:"Artificial variables are the initial basic variables.",explanation:"Artificial variables provide the initial basic feasible solution with values equal to the RHS.",hint:"Artificials are basic initially.",level:"advanced",codeExample:"a₁ = 6, a₂ = 8 (basic variables)"},{question:"When should you use Big-M Method?",shortAnswer:"When the LP problem has ≥ or = constraints.",explanation:"Big-M Method is used when the standard form cannot be obtained with only slack variables.",hint:"≥ or = constraints present.",level:"basic",codeExample:"Problems with ≥ or = constraints"},{question:"What is the disadvantage of Big-M Method?",shortAnswer:"Numerical issues with choosing M and possible rounding errors.",explanation:"If M is too small, artificials may remain. If M is too large, numerical instability can occur.",hint:"Numerical issues with M.",level:"advanced",codeExample:"M too small → wrong results, M too large → computational issues"},{question:"How does Big-M detect infeasibility?",shortAnswer:"If an artificial variable remains positive at the optimal solution.",explanation:"A positive artificial variable at optimality means the constraints are contradictory.",hint:"Artificial > 0 → infeasible.",level:"advanced",codeExample:"a₁ > 0 at optimal → infeasible"},{question:"What is the relationship between Big-M and Two-Phase?",shortAnswer:"Both handle ≥ and = constraints, but Two-Phase avoids numerical issues with M.",explanation:"Two-Phase Method is often preferred because it avoids the numerical problems associated with choosing M.",hint:"Two-Phase avoids M issues.",level:"advanced",codeExample:"Two-Phase: Phase 1 (feasibility), Phase 2 (optimality)"},{question:"Can Big-M Method solve any LP problem?",shortAnswer:"Yes, any LP problem can be solved using Big-M Method.",explanation:"Big-M Method can handle all constraint types (≤, ≥, =) and both maximization and minimization.",hint:"Handles all LP problems.",level:"basic",codeExample:"≤, ≥, = constraints all handled"},{question:"What is the purpose of artificial variables?",shortAnswer:"To create an initial basic feasible solution for the Simplex Method.",explanation:"Artificial variables provide a starting point when the problem doesn't have a natural basic feasible solution.",hint:"Create initial feasible solution.",level:"intermediate",codeExample:"a₁, a₂ provide initial basis"}],T=`TOPIC 10: BIG-M METHOD\r
======================\r
\r
INTRODUCTION\r
------------\r
The Big-M Method is a variant of the Simplex Method used to solve \r
LP problems with ≥ and = constraints. It uses artificial variables \r
with a large penalty M.\r
\r
WHAT IS THE BIG-M METHOD?\r
-------------------------\r
The Big-M Method:\r
1. Adds artificial variables to ≥ and = constraints\r
2. Penalizes artificial variables with M in objective\r
3. M is a very large number\r
4. Artificial variables must be driven to zero\r
\r
RULES FOR BIG-M METHOD\r
----------------------\r
1. ≥ Constraints:\r
   a₁x₁ + a₂x₂ ≥ b\r
   → a₁x₁ + a₂x₂ - s + a = b\r
   where s ≥ 0 (surplus), a ≥ 0 (artificial)\r
\r
2. = Constraints:\r
   a₁x₁ + a₂x₂ = b\r
   → a₁x₁ + a₂x₂ + a = b\r
   where a ≥ 0 (artificial)\r
\r
3. Penalty in Objective:\r
   Minimization: add M × a\r
   Maximization: subtract M × a\r
\r
EXAMPLE\r
-------\r
Minimize Z = 4x + 3y\r
Subject to:\r
x + y ≥ 6\r
2x + y ≥ 8\r
x, y ≥ 0\r
\r
Big-M Formulation:\r
Minimize Z = 4x + 3y + M a₁ + M a₂\r
Subject to:\r
x + y - s₁ + a₁ = 6\r
2x + y - s₂ + a₂ = 8\r
x, y, s₁, s₂, a₁, a₂ ≥ 0\r
\r
SOLUTION PROCESS\r
----------------\r
1. Add artificial variables\r
2. Add Big-M penalty\r
3. Form initial tableau\r
4. Perform Simplex iterations\r
5. Drive artificials to zero\r
6. If artificial remains → infeasible\r
\r
KEY CONCEPTS\r
------------\r
• M must be very large\r
• Artificial variables are temporary\r
• Must be driven to zero\r
• If artificial > 0 → infeasible\r
• Handles all constraint types\r
\r
COMMON MISTAKES\r
---------------\r
1. Using too small M\r
2. Forgetting to penalize artificials\r
3. Not checking if artificials remain\r
4. Confusing max and min penalties\r
\r
BEST PRACTICES\r
--------------\r
1. Choose M much larger than any coefficient\r
2. Watch for artificial variables leaving basis\r
3. If artificial remains > 0 → infeasible\r
4. Consider Two-Phase for numerical stability\r
\r
TEACHER'S NOTE\r
--------------\r
The Big-M Method is a powerful tool for handling any LP problem. \r
M is like a 'bouncer' - it keeps artificial variables out of the \r
optimal solution. If an artificial variable remains positive, the \r
problem is infeasible."`,H=()=>{const[t,g]=i.useState("concept"),[c,m]=i.useState({}),[l,b]=i.useState(null),[o,u]=i.useState(null),y=[{id:"concept",label:"Concept"},{id:"examples",label:"Examples"},{id:"practice",label:"Practice"}],p=[{id:1,title:"Example 1: Big-M with ≥ Constraints",problem:`Solve using Big-M Method:
Minimize Z = 4x + 3y
Subject to:
x + y ≥ 6
2x + y ≥ 8
x, y ≥ 0`,solution:"Optimal solution: x = 4, y = 2, Z = 22",detailedSolution:`Step 1: Convert to standard form
Min Z = 4x + 3y → Max Z' = -4x - 3y

Step 2: Add variables
x + y - s₁ + a₁ = 6
2x + y - s₂ + a₂ = 8

Step 3: Objective with Big-M
Max Z' = -4x - 3y - M a₁ - M a₂

Step 4: Initial tableau
┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ s₂  │ a₁  │ a₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│ a₁  │  1  │  1  │ -1  │  0  │  1  │  0  │  6  │
│ a₂  │  2  │  1  │  0  │ -1  │  0  │  1  │  8  │
├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │ -4  │ -3  │  0  │  0  │  M  │  M  │  0  │
└─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘

Step 5: Iteration 1
Entering: x (-4)
Leaving: a₂ (min ratio 8/2=4)
Pivot: 2

After pivot:
┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ s₂  │ a₁  │ a₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│ a₁  │  0  │ 0.5 │ -1  │ 0.5 │  1  │-0.5 │  2  │
│  x  │  1  │ 0.5 │  0  │-0.5 │  0  │ 0.5 │  4  │
├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │  0  │ -1  │  0  │ -2  │  M  │ M+2 │ 16  │
└─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘

Step 6: Iteration 2
Entering: y (-1)
Leaving: a₁ (min ratio 2/0.5=4)
Pivot: 0.5

After pivot:
┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ s₂  │ a₁  │ a₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│  y  │  0  │  1  │ -2  │  1  │  2  │ -1  │  4  │
│  x  │  1  │  0  │  1  │ -1  │ -1  │  1  │  2  │
├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │  0  │  0  │ -2  │ -1  │ M+2 │ M+1 │ 20  │
└─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘

Step 7: Iteration 3
Entering: s₁ (-2)
Leaving: x (min ratio 2/1=2)
Pivot: 1

After pivot:
┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ s₂  │ a₁  │ a₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│  y  │  2  │  1  │  0  │ -1  │  0  │  1  │  8  │
│ s₁  │  1  │  0  │  1  │ -1  │ -1  │  1  │  2  │
├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │  2  │  0  │  0  │ -3  │  M  │ M+3 │ 24  │
└─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘

Step 8: Continue until all artificial variables leave
Final optimal: x = 4, y = 2, Z = 22`},{id:2,title:"Example 2: Big-M with Equality Constraint",problem:`Solve using Big-M Method:
Minimize Z = 3x + 2y
Subject to:
x + y = 6
2x + y ≥ 8
x, y ≥ 0`,solution:"Optimal solution: x = 2, y = 4, Z = 14",detailedSolution:`Step 1: Convert to standard form
Min Z = 3x + 2y → Max Z' = -3x - 2y

Step 2: Add variables
x + y + a₁ = 6 (equality → artificial)
2x + y - s₂ + a₂ = 8 (≥ → surplus + artificial)

Step 3: Objective with Big-M
Max Z' = -3x - 2y - M a₁ - M a₂

Step 4: Initial tableau
┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₂  │ a₁  │ a₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│ a₁  │  1  │  1  │  0  │  1  │  0  │  6  │
│ a₂  │  2  │  1  │ -1  │  0  │  1  │  8  │
├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │ -3  │ -2  │  0  │  M  │  M  │  0  │
└─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘

Step 5: Iteration 1
Entering: x (-3)
Leaving: a₂ (min ratio 8/2=4)
Pivot: 2

After iterations:
Final optimal: x = 2, y = 4, Z = 14`},{id:3,title:"Example 3: Big-M Infeasibility Detection",problem:`Solve using Big-M Method:
Minimize Z = 2x + 3y
Subject to:
x + y ≥ 10
x + y ≤ 6
x, y ≥ 0`,solution:"The problem is infeasible. Artificial variable remains in basis.",detailedSolution:`Step 1: Convert to standard form
Min Z = 2x + 3y → Max Z' = -2x - 3y

Step 2: Add variables
x + y - s₁ + a₁ = 10
x + y + s₂ = 6

Step 3: Objective with Big-M
Max Z' = -2x - 3y - M a₁

Step 4: Initial tableau
┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ s₂  │ a₁  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│ a₁  │  1  │  1  │ -1  │  0  │  1  │ 10  │
│ s₂  │  1  │  1  │  0  │  1  │  0  │  6  │
├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │ -2  │ -3  │  0  │  0  │  M  │  0  │
└─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘

Step 5: Observe
Constraints x + y ≥ 10 and x + y ≤ 6 are contradictory
No feasible solution exists
Artificial variable a₁ will remain in basis

Conclusion: INFEASIBLE`},{id:4,title:"Example 4: Real-World Big-M Application",problem:`A company must meet minimum production targets:
Minimize Z = 8x + 10y (Cost)
Subject to:
3x + 2y ≥ 30 (Production target)
2x + 5y = 40 (Quality target)
x, y ≥ 0

Solve using Big-M Method.`,solution:"Optimal solution: x = 10, y = 4, Z = 120",detailedSolution:`Step 1: Convert to standard form
Min Z = 8x + 10y → Max Z' = -8x - 10y

Step 2: Add variables
3x + 2y - s₁ + a₁ = 30
2x + 5y + a₂ = 40

Step 3: Objective with Big-M
Max Z' = -8x - 10y - M a₁ - M a₂

Step 4: Initial tableau
┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ a₁  │ a₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│ a₁  │  3  │  2  │ -1  │  1  │  0  │ 30  │
│ a₂  │  2  │  5  │  0  │  0  │  1  │ 40  │
├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │ -8  │ -10 │  0  │  M  │  M  │  0  │
└─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘

Step 5: Iteration 1
Entering: y (-10)
Leaving: a₂ (min ratio 40/5=8)
Pivot: 5

After iterations:
Final optimal: x = 10, y = 4, Z = 120`}],f=[{id:1,title:"Big-M with ≥ Constraints",problem:`Solve using Big-M Method:
Minimize Z = 5x + 4y
Subject to:
x + 2y ≥ 10
3x + y ≥ 12
x, y ≥ 0`,hint:"Add surplus and artificial variables for each ≥ constraint.",solution:"Optimal: x = 2, y = 4, Z = 26"},{id:2,title:"Big-M with Equality",problem:`Solve using Big-M Method:
Minimize Z = 2x + 3y
Subject to:
2x + y = 8
x + 2y ≥ 6
x, y ≥ 0`,hint:"Use artificial variable for equality, surplus+artificial for ≥.",solution:"Optimal: x = 3, y = 2, Z = 12"},{id:3,title:"Detect Infeasibility",problem:`Use Big-M Method to check feasibility:
Minimize Z = x + y
Subject to:
x + y ≥ 8
x + y ≤ 5
x, y ≥ 0`,hint:"Check if artificial variable remains in basis after iterations.",solution:"Infeasible - constraints are contradictory"}],v=a=>{m(n=>({...n,[a]:!n[a]}))},M=()=>{const[a,n]=i.useState(1e3),[s,d]=i.useState(2),[x,h]=i.useState(0),[j,w]=i.useState(!1),N=()=>{h(0),w(!1)};return e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4",children:"Interactive Big-M Method Simulator"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1",children:"M Value (Penalty)"}),e.jsx("input",{type:"range",min:"10",max:"10000",value:a,onChange:k=>n(Number(k.target.value)),className:"w-full"}),e.jsxs("span",{className:"text-sm text-gray-600 dark:text-gray-400",children:["M = ",a]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1",children:"Artificial Variables"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>d(1),className:r("px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300",s===1?"bg-blue-600 text-white":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"),children:"1"}),e.jsx("button",{onClick:()=>d(2),className:r("px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300",s===2?"bg-blue-600 text-white":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"),children:"2"}),e.jsx("button",{onClick:()=>d(3),className:r("px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300",s===3?"bg-blue-600 text-white":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"),children:"3"})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>h(x+1),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300",children:"Next Iteration"}),e.jsx("button",{onClick:N,className:"px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300",children:"Reset"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h5",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Big-M Method Status"}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"Iteration:"})," ",x]}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"Artificial Variables:"})," ",s]}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"M Value:"})," ",a]}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"Status:"})," ",j?"❌ Infeasible":"🔄 In Progress"]})]}),e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h5",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"Key Concepts"}),e.jsxs("ul",{className:"list-disc list-inside text-xs text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"M is a very large penalty"}),e.jsx("li",{children:"Artificial variables must go to 0"}),e.jsx("li",{children:"If artificial remains → infeasible"}),e.jsx("li",{children:"M must be larger than any coefficient"})]})]})]})]})]})};return e.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[e.jsxs("div",{className:"text-center mb-10",children:[e.jsx("h1",{className:"text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-all duration-300",children:"Big-M Method"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto",children:"Learn how to handle ≥ and = constraints using artificial variables with a large penalty M in the Big-M Method."})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 justify-center border-b border-gray-200 dark:border-gray-700 pb-4",children:y.map(a=>e.jsx("button",{onClick:()=>g(a.id),className:r("px-6 py-2 rounded-lg font-medium transition-all duration-300",t===a.id?"bg-red-600 text-white shadow-lg shadow-red-200 dark:shadow-red-900/30":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-md"),children:a.label},a.id))}),e.jsxs("div",{className:"space-y-8",children:[t==="concept"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"What is the Big-M Method?"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 leading-relaxed mb-4",children:"The Big-M Method is a variant of the Simplex Method used to solve LP problems with ≥ and = constraints. It introduces artificial variables to create an initial basic feasible solution and penalizes them with a very large number M in the objective function. The artificial variables are driven to zero in the optimal solution if the problem is feasible."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Key Concepts"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Artificial variables for ≥ and = constraints"}),e.jsx("li",{children:"Large penalty M in objective"}),e.jsx("li",{children:"M must be very large"}),e.jsx("li",{children:"Artificials driven to zero"}),e.jsx("li",{children:"If artificial remains → infeasible"})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Why It Matters"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Handles any LP problem"}),e.jsx("li",{children:"Detects infeasibility"}),e.jsx("li",{children:"Foundation for other methods"}),e.jsx("li",{children:"Widely used in practice"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"Big-M Method Rules"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg",children:[e.jsx("div",{className:"text-4xl mb-2",children:"📝"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Rule 1"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Add artificial variable to ≥ and = constraints"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg",children:[e.jsx("div",{className:"text-4xl mb-2",children:"💰"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Rule 2"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Penalize with M in objective (add for min, subtract for max)"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg",children:[e.jsx("div",{className:"text-4xl mb-2",children:"✅"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Rule 3"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Drive artificial variables to zero"})]})]})]}),e.jsx(M,{}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"💡 Tips & Tricks for Big-M Method"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h4",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"Professional Tips"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Choose M much larger than any coefficient"}),e.jsx("li",{children:"Watch for artificial variables leaving basis"}),e.jsx("li",{children:"If artificial remains > 0 → infeasible"}),e.jsx("li",{children:"Use Big-M only when necessary"})]})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500",children:[e.jsx("h4",{className:"font-semibold text-purple-700 dark:text-purple-400 mb-2",children:"Common Mistakes"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Using too small M value"}),e.jsx("li",{children:"Forgetting to penalize artificials"}),e.jsx("li",{children:"Not checking if artificials remain"}),e.jsx("li",{children:"Confusing max and min penalties"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"✅ Mini Checklist"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"≥ and = constraints identified"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Artificial variables added"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Big-M penalty in objective"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"M is sufficiently large"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Artificial variables driven to zero"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Feasibility confirmed"})]})]})]})]}),t==="examples"&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"space-y-6",children:p.map(a=>e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-bold text-gray-800 dark:text-gray-200 mb-3",children:a.title}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h5",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Problem"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:a.problem})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h5",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Solution"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:a.solution})]})]}),e.jsx("div",{className:"mt-4 flex justify-center",children:e.jsx("button",{onClick:()=>v(a.id),className:"px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300",children:c[a.id]?"Hide Detailed Steps":"Show Detailed Steps"})}),c[a.id]&&e.jsxs("div",{className:"mt-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h5",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"📝 Detailed Steps"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:a.detailedSolution})]})]},`example-${a.id}`))})}),t==="practice"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center",children:"Practice Problems"}),e.jsx("div",{className:"space-y-6",children:f.map(a=>e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 transition-all duration-300 hover:shadow-md",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:a.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:a.problem}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>b(l===a.id?null:a.id),className:"px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-all duration-300",children:l===a.id?"Hide Solution":"Check Solution"}),e.jsx("button",{onClick:()=>u(o===a.id?null:a.id),className:"px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300",children:o===a.id?"Hide Hint":"Show Hint"})]}),o===a.id&&e.jsx("div",{className:"mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800",children:e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"💡 Hint:"})," ",a.hint]})}),l===a.id&&e.jsx("div",{className:"mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800",children:e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:a.solution})})]},a.id))})]}),e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 rounded-lg p-6 border border-red-200 dark:border-red-800",children:[e.jsx("h4",{className:"font-semibold text-red-700 dark:text-red-400 mb-2",children:"💡 Tips for Big-M Method"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"M must be large:"})," Choose M > any coefficient"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Artificials must go to zero:"})," If not, infeasible"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Check signs:"})," Add M for min, subtract M for max"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Watch for artificials:"})," They should leave the basis"]})]})]})]})]}),e.jsx("div",{className:"mt-12",children:e.jsx(B,{title:"Big-M Method FAQs",questions:E})}),e.jsx("div",{className:"mt-8",children:e.jsx(A,{content:T,title:"Big-M Method",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Note",downloadFileName:"topic10_note.txt"})}),e.jsx("div",{className:"mt-8",children:e.jsx(S,{note:"The Big-M Method is a powerful tool for handling any LP problem. I tell my students that M is like a 'bouncer' - it keeps artificial variables out of the optimal solution. The key is choosing M large enough that it dominates all other coefficients. If an artificial variable remains positive at the end, the problem is infeasible. This is an important diagnostic tool that students should always check."})})]})})};export{H as default};
