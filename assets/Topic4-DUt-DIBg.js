import{b as t,j as e,bg as d}from"./vendor-react-core-Doz9nIC6.js";import{T as S}from"./TeacherSukantaHui-CC0AKmkm.js";import{F as A}from"./FAQTemplate-CkSqDH4B.js";import{P as z}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-BtJHuk7w.js";const P=[{question:"What is an artificial variable?",shortAnswer:"A temporary variable added to ≥ and = constraints to create an initial basic feasible solution.",explanation:"Artificial variables are not part of the original problem. They are used to get the Simplex Method started and must be driven to zero in the optimal solution.",hint:"Temporary variables for feasibility.",level:"basic",codeExample:"x + y ≥ 6 → x + y - s + a = 6, a ≥ 0"},{question:"Why are artificial variables needed?",shortAnswer:"To create an initial basic feasible solution for ≥ and = constraints.",explanation:"Surplus variables alone don't provide a feasible starting point. Artificial variables give us a basis to begin the Simplex Method.",hint:"Need feasible starting solution.",level:"intermediate",codeExample:"x + y - s = 6 → with x=0,y=0, s=-6 (infeasible)"},{question:"What is the Big-M Method?",shortAnswer:"A method that penalizes artificial variables with a large number M in the objective.",explanation:"M is a very large positive number. In minimization, we add M × artificial variable to the objective. This forces artificial variables to zero.",hint:"Penalty method with large M.",level:"advanced",codeExample:"Min Z = c₁x + c₂y + M a₁ + M a₂"},{question:"What is the Two-Phase Method?",shortAnswer:"A method that solves the problem in two phases: Phase 1 minimizes artificials, Phase 2 optimizes the original objective.",explanation:"Phase 1: Minimize sum of artificial variables. Phase 2: Use original objective with feasible solution from Phase 1.",hint:"Two-phase approach.",level:"advanced",codeExample:"Phase 1: Min W = a₁ + a₂, Phase 2: Min Z = c₁x + c₂y"},{question:"What happens if an artificial variable remains in the optimal solution?",shortAnswer:"The problem is infeasible.",explanation:"If any artificial variable has a positive value at the end, the original problem has no feasible solution.",hint:"Artificial > 0 → infeasible.",level:"advanced",codeExample:"a₁ = 5 at optimal → infeasible problem"},{question:"What constraints require artificial variables?",shortAnswer:"≥ constraints and = constraints.",explanation:"≤ constraints use slack variables and have a natural feasible solution. ≥ and = constraints need artificial variables to get started.",hint:"≥ and = constraints.",level:"intermediate",codeExample:"≥ constraints: add surplus + artificial, = constraints: add artificial"},{question:"What is the difference between artificial and surplus variables?",shortAnswer:"Artificial variables are temporary and penalized; surplus variables are part of the problem.",explanation:"Surplus variables represent excess over requirements. Artificial variables are only for computational purposes and must be driven to zero.",hint:"Temporary vs. permanent.",level:"intermediate",codeExample:"Surplus: s ≥ 0 (real), Artificial: a ≥ 0 (temporary)"},{question:"How do you penalize artificial variables in maximization?",shortAnswer:"Subtract M × artificial variable from the objective.",explanation:"In maximization, we use -M a to penalize artificial variables. M is a very large number.",hint:"Subtract M for maximization.",level:"advanced",codeExample:"Max Z = c₁x + c₂y - M a₁ - M a₂"},{question:"How do you penalize artificial variables in minimization?",shortAnswer:"Add M × artificial variable to the objective.",explanation:"In minimization, we use +M a to penalize artificial variables. M is a very large number.",hint:"Add M for minimization.",level:"advanced",codeExample:"Min Z = c₁x + c₂y + M a₁ + M a₂"},{question:"What is the role of M in the Big-M Method?",shortAnswer:"M is a very large penalty that forces artificial variables to zero.",explanation:"M must be larger than any other coefficient in the problem. It ensures artificial variables are driven to zero in the optimal solution.",hint:"Large penalty value.",level:"advanced",codeExample:"M = 1,000,000 (much larger than other coefficients)"},{question:"What is the Phase 1 objective in the Two-Phase Method?",shortAnswer:"Minimize the sum of all artificial variables.",explanation:"Phase 1 objective: Min W = a₁ + a₂ + ... + aₙ. The goal is to drive all artificial variables to zero.",hint:"Minimize sum of artificials.",level:"advanced",codeExample:"Min W = a₁ + a₂ + a₃"},{question:"What is the Phase 2 objective in the Two-Phase Method?",shortAnswer:"Use the original objective function.",explanation:"After Phase 1 gives a feasible solution, Phase 2 optimizes the original objective without artificial variables.",hint:"Original objective.",level:"advanced",codeExample:"Min Z = c₁x + c₂y"},{question:"Why can't we just use slack variables for all constraints?",shortAnswer:"Slack variables don't work for ≥ and = constraints.",explanation:"Slack variables are added to ≤ constraints. For ≥ and = constraints, we need different treatment (surplus and artificial variables).",hint:"Only for ≤ constraints.",level:"intermediate",codeExample:"Slack: for ≤ only, Surplus: for ≥, Artificial: for ≥ and ="},{question:"What is the difference between Big-M and Two-Phase methods?",shortAnswer:"Big-M uses a penalty in one phase; Two-Phase uses two phases without penalty.",explanation:"Big-M has numerical issues with large M. Two-Phase avoids this by separating feasibility (Phase 1) and optimality (Phase 2).",hint:"One phase vs. two phases.",level:"advanced",codeExample:"Big-M: one tableau, Two-Phase: two tableaus"},{question:"Can artificial variables be used for ≤ constraints?",shortAnswer:"No, they are only needed for ≥ and = constraints.",explanation:"≤ constraints already have a natural feasible solution with slack variables. Artificial variables are unnecessary.",hint:"Only for ≥ and =.",level:"intermediate",codeExample:"≤ constraints → slack only"},{question:"What does it mean if Phase 1 W > 0?",shortAnswer:"The original problem is infeasible.",explanation:"If the minimum sum of artificial variables is greater than zero, at least one artificial variable remains positive, meaning no feasible solution exists.",hint:"W > 0 → infeasible.",level:"advanced",codeExample:"W = 5 > 0 → infeasible problem"},{question:"What does it mean if Phase 1 W = 0?",shortAnswer:"A feasible solution exists for the original problem.",explanation:"When all artificial variables are zero, we have a feasible solution. Phase 2 can then find the optimal solution.",hint:"W = 0 → feasible.",level:"advanced",codeExample:"W = 0 → proceed to Phase 2"},{question:"Why do we need to penalize artificial variables?",shortAnswer:"To ensure they are driven to zero in the optimal solution.",explanation:"Without penalty, artificial variables could remain positive and give an invalid solution. The penalty forces them out of the basis.",hint:"Force to zero.",level:"intermediate",codeExample:"Penalty drives artificials to zero"}],T=`TOPIC 4: ARTIFICIAL VARIABLES\r
=============================\r
\r
INTRODUCTION\r
------------\r
Artificial variables are temporary variables added to ≥ and = \r
constraints to create an initial basic feasible solution for the \r
Simplex Method. They are not part of the original problem and \r
must be driven to zero.\r
\r
WHAT ARE ARTIFICIAL VARIABLES?\r
-----------------------------\r
Artificial variables are used when:\r
1. ≥ constraints (subtract surplus, add artificial)\r
2. = constraints (add artificial directly)\r
\r
They provide a feasible starting point for the Simplex Method.\r
\r
WHEN TO USE ARTIFICIAL VARIABLES\r
--------------------------------\r
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
3. ≤ Constraints:\r
   a₁x₁ + a₂x₂ ≤ b\r
   → a₁x₁ + a₂x₂ + s = b\r
   where s ≥ 0 (slack only)\r
\r
BIG-M METHOD\r
------------\r
Penalize artificial variables with a large number M:\r
\r
Minimization: Add M × a\r
Maximization: Subtract M × a\r
\r
M must be larger than any other coefficient.\r
\r
TWO-PHASE METHOD\r
----------------\r
Phase 1: Minimize sum of artificial variables\r
Min W = a₁ + a₂ + ... + aₙ\r
Goal: Drive all artificials to zero\r
\r
Phase 2: Optimize original objective\r
Use feasible solution from Phase 1\r
Min Z = c₁x + c₂y\r
\r
EXAMPLE\r
-------\r
Minimize Z = 4x + 3y\r
Subject to:\r
x + y ≥ 6\r
2x + y ≥ 8\r
x, y ≥ 0\r
\r
With Artificial Variables:\r
Minimize Z = 4x + 3y + M a₁ + M a₂\r
Subject to:\r
x + y - s₁ + a₁ = 6\r
2x + y - s₂ + a₂ = 8\r
x, y, s₁, s₂, a₁, a₂ ≥ 0\r
\r
KEY CONCEPTS\r
------------\r
• Artificial variables are temporary\r
• Must be driven to zero\r
• Penalized in objective\r
• Indicate feasibility\r
• Used in Big-M and Two-Phase\r
\r
COMMON MISTAKES\r
---------------\r
1. Forgetting artificial variables\r
2. Not penalizing in objective\r
3. Using too small M\r
4. Not checking if artificials remain\r
\r
BEST PRACTICES\r
--------------\r
1. Use M much larger than other coefficients\r
2. Check artificial variables at optimal\r
3. If artificial > 0 → infeasible\r
4. Consider Two-Phase for numerical stability\r
\r
TEACHER'S NOTE\r
--------------\r
Artificial variables are like 'training wheels' for the Simplex \r
Method. They're temporary helpers that get us started. Remember: \r
artificial variables are NOT part of the original problem - they \r
must be driven to zero."`,Z=()=>{const[o,m]=t.useState("concept"),[h,b]=t.useState({}),[c,g]=t.useState(null),[x,u]=t.useState(null),y=[{id:"concept",label:"Concept"},{id:"examples",label:"Examples"},{id:"practice",label:"Practice"}],p=[{id:1,title:"Example 1: Artificial Variable for ≥ Constraint",problem:`Convert to standard form using artificial variables:
Minimize Z = 4x + 3y
Subject to:
x + y ≥ 6
2x + y ≥ 8
x ≥ 0, y ≥ 0`,solution:`Minimize Z = 4x + 3y + M a₁ + M a₂
Subject to:
x + y - s₁ + a₁ = 6
2x + y - s₂ + a₂ = 8
x, y, s₁, s₂, a₁, a₂ ≥ 0`,detailedSolution:`Step 1: Convert minimization to maximization
Min Z = 4x + 3y → Max Z' = -4x - 3y

Step 2: Identify ≥ constraints
x + y ≥ 6
2x + y ≥ 8

Step 3: Add surplus variables (subtract)
x + y - s₁ = 6
2x + y - s₂ = 8

Step 4: Add artificial variables (add)
x + y - s₁ + a₁ = 6
2x + y - s₂ + a₂ = 8

Step 5: Objective with Big-M penalty
Max Z' = -4x - 3y + 0s₁ + 0s₂ - M a₁ - M a₂
(or Min Z = 4x + 3y + M a₁ + M a₂)

Step 6: Interpret artificial variables
a₁ and a₂ are temporary variables that must be driven to zero`},{id:2,title:"Example 2: Artificial Variable for Equality Constraint",problem:`Convert to standard form using artificial variables:
Minimize Z = 5x + 7y
Subject to:
3x + 2y = 18
2x + 4y ≥ 16
x ≥ 0, y ≥ 0`,solution:`Minimize Z = 5x + 7y + M a₁ + M a₂
Subject to:
3x + 2y + a₁ = 18
2x + 4y - s₁ + a₂ = 16
x, y, s₁, a₁, a₂ ≥ 0`,detailedSolution:`Step 1: Identify constraint types
- 3x + 2y = 18 → equality constraint
- 2x + 4y ≥ 16 → ≥ constraint

Step 2: Handle equality constraint
3x + 2y = 18 → add artificial variable a₁
3x + 2y + a₁ = 18

Step 3: Handle ≥ constraint
2x + 4y ≥ 16 → subtract surplus, add artificial
2x + 4y - s₁ + a₂ = 16

Step 4: Objective with Big-M penalty
Minimize Z = 5x + 7y + 0s₁ + M a₁ + M a₂

Step 5: Interpret
a₁ and a₂ are artificial variables that must be driven to zero`},{id:3,title:"Example 3: Two-Phase Method with Artificial Variables",problem:`Convert to standard form for Two-Phase Method:
Minimize Z = 3x + 4y
Subject to:
2x + y ≥ 10
x + 3y ≥ 12
x ≥ 0, y ≥ 0`,solution:`Phase 1: Minimize W = a₁ + a₂
Subject to:
2x + y - s₁ + a₁ = 10
x + 3y - s₂ + a₂ = 12
x, y, s₁, s₂, a₁, a₂ ≥ 0

Phase 2: Use feasible solution from Phase 1`,detailedSolution:`Step 1: Phase 1 objective
Minimize sum of artificial variables
Minimize W = a₁ + a₂

Step 2: Phase 1 constraints
2x + y - s₁ + a₁ = 10
x + 3y - s₂ + a₂ = 12

Step 3: Solve Phase 1
Drive a₁ and a₂ to zero

Step 4: Phase 2 objective
Use original objective without artificial variables
Minimize Z = 3x + 4y

Step 5: Phase 2 constraints
Use constraints without artificial variables
2x + y - s₁ = 10
x + 3y - s₂ = 12`},{id:4,title:"Example 4: Real-World Artificial Variables",problem:`A company must meet minimum production targets:
Minimize Z = 8x + 10y
Subject to:
3x + 2y ≥ 30 (Production)
2x + 5y = 40 (Quality target)
x ≥ 0, y ≥ 0

Convert to standard form using artificial variables.`,solution:`Minimize Z = 8x + 10y + M a₁ + M a₂
Subject to:
3x + 2y - s₁ + a₁ = 30
2x + 5y + a₂ = 40
x, y, s₁, a₁, a₂ ≥ 0`,detailedSolution:`Step 1: Identify constraint types
- 3x + 2y ≥ 30 → ≥ constraint
- 2x + 5y = 40 → equality constraint

Step 2: Handle ≥ constraint
3x + 2y ≥ 30 → subtract surplus, add artificial
3x + 2y - s₁ + a₁ = 30

Step 3: Handle equality constraint
2x + 5y = 40 → add artificial variable a₂
2x + 5y + a₂ = 40

Step 4: Objective with Big-M penalty
Minimize Z = 8x + 10y + 0s₁ + M a₁ + M a₂

Step 5: Business interpretation
a₁: artificial for production requirement
a₂: artificial for quality target
Both must be driven to zero for feasible solution`}],f=[{id:1,title:"Add Artificial Variables",problem:`Convert to standard form using artificial variables:
Minimize Z = 3x + 5y
Subject to:
x + 2y ≥ 10
3x + y ≥ 12
x ≥ 0, y ≥ 0`,hint:"Add surplus and artificial variables for each ≥ constraint.",solution:`Minimize Z = 3x + 5y + M a₁ + M a₂
Subject to:
x + 2y - s₁ + a₁ = 10
3x + y - s₂ + a₂ = 12
x, y, s₁, s₂, a₁, a₂ ≥ 0`},{id:2,title:"Artificial Variables for Equality",problem:`Convert to standard form using artificial variables:
Minimize Z = 4x + 6y
Subject to:
2x + 3y = 12
x + 4y ≥ 8
x ≥ 0, y ≥ 0`,hint:"Use artificial variables for equality and ≥ constraints.",solution:`Minimize Z = 4x + 6y + M a₁ + M a₂
Subject to:
2x + 3y + a₁ = 12
x + 4y - s₁ + a₂ = 8
x, y, s₁, a₁, a₂ ≥ 0`},{id:3,title:"Mixed Constraints with Artificials",problem:`Convert to standard form:
Maximize Z = 5x + 7y
Subject to:
3x + 2y ≤ 18
x + 4y ≥ 12
2x + 3y = 15
x ≥ 0, y ≥ 0`,hint:"Use slack for ≤, surplus+artificial for ≥, artificial for =.",solution:`Maximize Z = 5x + 7y + 0s₁ + 0s₂ - M a₁ - M a₂
Subject to:
3x + 2y + s₁ = 18
x + 4y - s₂ + a₁ = 12
2x + 3y + a₂ = 15
x, y, s₁, s₂, a₁, a₂ ≥ 0`}],v=a=>{b(r=>({...r,[a]:!r[a]}))},j=()=>{const[a,r]=t.useState("ge"),[s,M]=t.useState(2),[n,w]=t.useState(3),[l,N]=t.useState(12),k=()=>{let i="Minimize Z = c₁x + c₂y";return a==="ge"?(i+=`
Subject to:
${s}x + ${n}y - s₁ + a₁ = ${l}
`,i+="x, y, s₁, a₁ ≥ 0",i+=`

Artificial variable a₁ (penalty M)`):a==="eq"?(i+=`
Subject to:
${s}x + ${n}y + a₁ = ${l}
`,i+="x, y, a₁ ≥ 0",i+=`

Artificial variable a₁ (penalty M)`):(i+=`
Subject to:
${s}x + ${n}y + s₁ = ${l}
`,i+="x, y, s₁ ≥ 0",i+=`

No artificial variable needed (≤ constraint)`),i};return e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4",children:"Interactive Artificial Variable Visualizer"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx("div",{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1",children:"Constraint Type"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>r("ge"),className:d("px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300",a==="ge"?"bg-blue-600 text-white":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"),children:"≥"}),e.jsx("button",{onClick:()=>r("eq"),className:d("px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300",a==="eq"?"bg-blue-600 text-white":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"),children:"="}),e.jsx("button",{onClick:()=>r("le"),className:d("px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300",a==="le"?"bg-blue-600 text-white":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"),children:"≤"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400",children:"Coefficient a (x)"}),e.jsx("input",{type:"range",min:"1",max:"10",value:s,onChange:i=>M(Number(i.target.value)),className:"w-full"}),e.jsx("span",{className:"text-sm text-gray-600 dark:text-gray-400",children:s})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400",children:"Coefficient b (y)"}),e.jsx("input",{type:"range",min:"1",max:"10",value:n,onChange:i=>w(Number(i.target.value)),className:"w-full"}),e.jsx("span",{className:"text-sm text-gray-600 dark:text-gray-400",children:n})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400",children:"Constant c"}),e.jsx("input",{type:"range",min:"1",max:"20",value:l,onChange:i=>N(Number(i.target.value)),className:"w-full"}),e.jsx("span",{className:"text-sm text-gray-600 dark:text-gray-400",children:l})]})]})}),e.jsxs("div",{children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h5",{className:"text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",children:"Standard Form"}),e.jsx("pre",{className:"text-xs font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:k()})]}),e.jsxs("div",{className:"mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:[e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:e.jsx("span",{className:"font-semibold",children:"Why Artificial Variables?"})}),e.jsxs("ul",{className:"list-disc list-inside text-xs text-gray-600 dark:text-gray-400 mt-1",children:[a==="ge"&&e.jsxs(e.Fragment,{children:[e.jsx("li",{children:"≥ constraint requires surplus variable (-s)"}),e.jsx("li",{children:"Surplus variable creates infeasible initial solution"}),e.jsx("li",{children:"Artificial variable (a₁) provides feasible starting point"}),e.jsx("li",{children:"Penalty M drives a₁ to zero in optimal solution"})]}),a==="eq"&&e.jsxs(e.Fragment,{children:[e.jsx("li",{children:"Equality constraint has no slack/surplus"}),e.jsx("li",{children:"Need artificial variable for initial basis"}),e.jsx("li",{children:"Penalty M drives a₁ to zero"})]}),a==="le"&&e.jsxs(e.Fragment,{children:[e.jsx("li",{children:"≤ constraint uses slack variable (+s)"}),e.jsx("li",{children:"Slack variable provides feasible initial solution"}),e.jsx("li",{children:"No artificial variable needed"})]})]})]})]})]})]})};return e.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[e.jsxs("div",{className:"text-center mb-10",children:[e.jsx("h1",{className:"text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-all duration-300",children:"Artificial Variables"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto",children:"Learn about artificial variables, their purpose in handling ≥ and = constraints, and their role in the Big-M Method and Two-Phase Method."})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 justify-center border-b border-gray-200 dark:border-gray-700 pb-4",children:y.map(a=>e.jsx("button",{onClick:()=>m(a.id),className:d("px-6 py-2 rounded-lg font-medium transition-all duration-300",o===a.id?"bg-red-600 text-white shadow-lg shadow-red-200 dark:shadow-red-900/30":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-md"),children:a.label},a.id))}),e.jsxs("div",{className:"space-y-8",children:[o==="concept"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"What are Artificial Variables?"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 leading-relaxed mb-4",children:"Artificial variables are temporary variables added to ≥ and = constraints to create an initial basic feasible solution for the Simplex Method. They are not part of the original problem and must be driven to zero in the optimal solution. Artificial variables are penalized in the objective function using a large number M (Big-M Method)."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Key Concepts"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Temporary variables for feasibility"}),e.jsx("li",{children:"Added to ≥ and = constraints"}),e.jsx("li",{children:"Penalized in objective (Big-M)"}),e.jsx("li",{children:"Must be driven to zero"}),e.jsx("li",{children:"Used in Big-M and Two-Phase methods"})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Why They Matter"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Enable Simplex for ≥ and = constraints"}),e.jsx("li",{children:"Create initial feasible solution"}),e.jsx("li",{children:"Foundation for Big-M Method"}),e.jsx("li",{children:"Essential for Two-Phase Method"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"When to Use Artificial Variables"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500 transition-all duration-300 hover:shadow-lg",children:[e.jsx("h4",{className:"font-semibold text-red-700 dark:text-red-400 mb-2",children:"≥ Constraints"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Subtract surplus variable, add artificial variable."}),e.jsxs("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:["x + y ≥ 6",e.jsx("br",{}),"→ x + y - s + a = 6"]})]}),e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500 transition-all duration-300 hover:shadow-lg",children:[e.jsx("h4",{className:"font-semibold text-red-700 dark:text-red-400 mb-2",children:"= Constraints"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Add artificial variable directly."}),e.jsxs("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:["2x + y = 10",e.jsx("br",{}),"→ 2x + y + a = 10"]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500 transition-all duration-300 hover:shadow-lg",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"≤ Constraints"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Add slack variable only."}),e.jsxs("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:["3x + 2y ≤ 12",e.jsx("br",{}),"→ 3x + 2y + s = 12"]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center",children:"Big-M Method vs Two-Phase Method"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Big-M Method"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"One phase only"}),e.jsx("li",{children:"Penalty M in objective"}),e.jsx("li",{children:"M is a very large number"}),e.jsx("li",{children:"Artificial variables penalized"}),e.jsx("li",{children:"Can cause numerical issues"})]}),e.jsx("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:"Min Z = c₁x + c₂y + M a₁ + M a₂"})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500",children:[e.jsx("h4",{className:"font-semibold text-purple-700 dark:text-purple-400 mb-2",children:"Two-Phase Method"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Two phases"}),e.jsx("li",{children:"Phase 1: Minimize sum of artificials"}),e.jsx("li",{children:"Phase 2: Use original objective"}),e.jsx("li",{children:"No numerical issues with M"}),e.jsx("li",{children:"More robust computationally"})]}),e.jsxs("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:["Phase 1: Min W = a₁ + a₂",e.jsx("br",{}),"Phase 2: Min Z = c₁x + c₂y"]})]})]})]}),e.jsx(j,{}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"💡 Tips & Tricks for Artificial Variables"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h4",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"Professional Tips"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Artificial variables must be driven to zero"}),e.jsx("li",{children:"Use M much larger than any coefficient"}),e.jsx("li",{children:"In Two-Phase, Phase 1 W must reach 0"}),e.jsx("li",{children:"If artificial remains > 0 → infeasible"})]})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500",children:[e.jsx("h4",{className:"font-semibold text-purple-700 dark:text-purple-400 mb-2",children:"Common Mistakes"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Forgetting to add artificial variables"}),e.jsx("li",{children:"Not penalizing artificials in objective"}),e.jsx("li",{children:"Using too small M value"}),e.jsx("li",{children:"Not checking if artificials remain"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"✅ Mini Checklist"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"≥ constraints identified for artificials"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"= constraints identified for artificials"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Artificial variables added correctly"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Big-M penalty in objective"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Artificial variables ≥ 0"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Plan to drive artificials to zero"})]})]})]})]}),o==="examples"&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"space-y-6",children:p.map(a=>e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-bold text-gray-800 dark:text-gray-200 mb-3",children:a.title}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h5",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Original Problem"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:a.problem})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h5",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"With Artificial Variables"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:a.solution})]})]}),e.jsx("div",{className:"mt-4 flex justify-center",children:e.jsx("button",{onClick:()=>v(a.id),className:"px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300",children:h[a.id]?"Hide Detailed Steps":"Show Detailed Steps"})}),h[a.id]&&e.jsxs("div",{className:"mt-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h5",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"📝 Detailed Steps"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:a.detailedSolution})]})]},`example-${a.id}`))})}),o==="practice"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center",children:"Practice Problems"}),e.jsx("div",{className:"space-y-6",children:f.map(a=>e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 transition-all duration-300 hover:shadow-md",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:a.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:a.problem}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>g(c===a.id?null:a.id),className:"px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-all duration-300",children:c===a.id?"Hide Solution":"Check Solution"}),e.jsx("button",{onClick:()=>u(x===a.id?null:a.id),className:"px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300",children:x===a.id?"Hide Hint":"Show Hint"})]}),x===a.id&&e.jsx("div",{className:"mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800",children:e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"💡 Hint:"})," ",a.hint]})}),c===a.id&&e.jsx("div",{className:"mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800",children:e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono",children:a.solution})})]},a.id))})]}),e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 rounded-lg p-6 border border-red-200 dark:border-red-800",children:[e.jsx("h4",{className:"font-semibold text-red-700 dark:text-red-400 mb-2",children:"💡 Tips for Working with Artificial Variables"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Identify constraint types:"})," ≥ and = need artificials"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Use Big-M penalty:"})," Add M × artificial to objective"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Choose M large:"})," M must be bigger than any other coefficient"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Drive to zero:"})," Optimal solution must have artificials = 0"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Check feasibility:"})," If artificial remains > 0 → infeasible"]})]})]})]})]}),e.jsx("div",{className:"mt-12",children:e.jsx(A,{title:"Artificial Variables FAQs",questions:P})}),e.jsx("div",{className:"mt-8",children:e.jsx(z,{content:T,title:"Artificial Variables",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Note",downloadFileName:"topic4_note.txt"})}),e.jsx("div",{className:"mt-8",children:e.jsx(S,{note:"Artificial variables are like 'training wheels' for the Simplex Method. I tell my students that they're temporary helpers that get us started when the problem doesn't have a natural feasible solution. The key is remembering that artificial variables are NOT part of the original problem - they must be driven to zero. If an artificial variable remains positive at the end, the problem is infeasible. This is an important diagnostic tool."})})]})})};export{Z as default};
