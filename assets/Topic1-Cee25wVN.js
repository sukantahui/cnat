import{b as n,j as e,bg as l}from"./vendor-react-core-Doz9nIC6.js";import{T as A}from"./TeacherSukantaHui-ObIX4NbR.js";import{F as C}from"./FAQTemplate-CkSqDH4B.js";import{P as z}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-CbUXUJ65.js";const E=[{question:"What is standard form in LP?",shortAnswer:"A specific format with maximization objective, equality constraints, and non-negative variables.",explanation:"Standard form requires: (1) Maximization objective, (2) All constraints as equalities, (3) All variables ≥ 0, (4) RHS ≥ 0.",hint:"Max, equalities, non-negative.",level:"basic",codeExample:"Max Z = c₁x₁ + c₂x₂, a₁₁x₁ + a₁₂x₂ = b₁, x₁, x₂ ≥ 0"},{question:"Why is standard form needed for the Simplex Method?",shortAnswer:"It creates a system of linear equations that the Simplex Method can solve algebraically.",explanation:"The Simplex Method requires equality constraints to work with basic feasible solutions and perform row operations.",hint:"System of equations needed.",level:"intermediate",codeExample:"Equalities → basic variables → simplex operations"},{question:"How do you convert a minimization problem to standard form?",shortAnswer:"Multiply the objective function by -1 and maximize.",explanation:"Minimize Z = c₁x₁ + c₂x₂ is equivalent to Maximize Z' = -c₁x₁ - c₂x₂.",hint:"Multiply by -1 and maximize.",level:"basic",codeExample:"Min Z = 3x + 4y → Max Z' = -3x - 4y"},{question:"What is a slack variable?",shortAnswer:"A variable added to a ≤ constraint to convert it to an equality.",explanation:"For constraint a₁x₁ + a₂x₂ ≤ b, add slack variable s ≥ 0 to get a₁x₁ + a₂x₂ + s = b.",hint:"Added to ≤ constraints.",level:"intermediate",codeExample:"2x + y ≤ 10 → 2x + y + s = 10, s ≥ 0"},{question:"What is a surplus variable?",shortAnswer:"A variable subtracted from a ≥ constraint to convert it to an equality.",explanation:"For constraint a₁x₁ + a₂x₂ ≥ b, subtract surplus variable s ≥ 0 to get a₁x₁ + a₂x₂ - s = b.",hint:"Subtracted from ≥ constraints.",level:"intermediate",codeExample:"x + y ≥ 8 → x + y - s = 8, s ≥ 0"},{question:"What is the difference between slack and surplus variables?",shortAnswer:"Slack is added to ≤ constraints; surplus is subtracted from ≥ constraints.",explanation:"Both convert inequalities to equalities. Slack represents unused resources. Surplus represents excess over requirements.",hint:"Slack for ≤, surplus for ≥.",level:"intermediate",codeExample:"≤ → +s, ≥ → -s"},{question:"How do you handle equality constraints in standard form?",shortAnswer:"Keep them as equalities (no slack or surplus variables needed).",explanation:"Equality constraints are already in standard form. They don't need conversion.",hint:"Keep as is.",level:"basic",codeExample:"x + y = 10 → x + y = 10"},{question:"What happens to the objective function when adding slack variables?",shortAnswer:"Slack variables get coefficient 0 in the objective function.",explanation:"Slack variables don't affect the objective value. They are added with coefficient 0.",hint:"Coefficient 0.",level:"intermediate",codeExample:"Z = 3x + 2y + 0s₁ + 0s₂"},{question:"How do you handle variables that can be negative?",shortAnswer:"Replace x with x₁ - x₂ where x₁, x₂ ≥ 0.",explanation:"Any unrestricted variable x can be written as the difference of two non-negative variables.",hint:"x = x₁ - x₂, both ≥ 0.",level:"advanced",codeExample:"x unrestricted → x = x₁ - x₂, x₁, x₂ ≥ 0"},{question:"What is the role of the right-hand side (RHS) in standard form?",shortAnswer:"The RHS must be non-negative.",explanation:"The Simplex Method requires b ≥ 0 for all constraints. If b < 0, multiply the constraint by -1.",hint:"RHS ≥ 0.",level:"intermediate",codeExample:"2x - y ≤ -3 → multiply by -1: -2x + y ≥ 3"},{question:"What are the four requirements of standard form?",shortAnswer:"Maximization, equality constraints, non-negative variables, and non-negative RHS.",explanation:"1) Objective: Maximize, 2) Constraints: Equalities, 3) Variables: ≥ 0, 4) RHS: ≥ 0.",hint:"Max, equalities, non-negative, RHS.",level:"basic",codeExample:"Max Z, Ax = b, x ≥ 0, b ≥ 0"},{question:"How do you convert a ≥ constraint to equality?",shortAnswer:"Subtract a surplus variable.",explanation:"For a₁x₁ + a₂x₂ ≥ b, subtract s ≥ 0: a₁x₁ + a₂x₂ - s = b.",hint:"Subtract surplus.",level:"intermediate",codeExample:"x + y ≥ 6 → x + y - s₁ = 6"},{question:"How do you convert a ≤ constraint to equality?",shortAnswer:"Add a slack variable.",explanation:"For a₁x₁ + a₂x₂ ≤ b, add s ≥ 0: a₁x₁ + a₂x₂ + s = b.",hint:"Add slack.",level:"intermediate",codeExample:"2x + y ≤ 10 → 2x + y + s₁ = 10"},{question:"What is the difference between standard form and canonical form?",shortAnswer:"Standard form has equality constraints; canonical form is used for initial simplex tableau.",explanation:"Standard form is the general format. Canonical form includes basic variables with identity matrix coefficients.",hint:"Standard: equalities, Canonical: tableau ready.",level:"advanced",codeExample:"Standard: Ax = b, Canonical: identity matrix for basic variables"},{question:"Why must all variables be non-negative in standard form?",shortAnswer:"The Simplex Method requires non-negative variables for basic feasible solutions.",explanation:"Non-negative variables ensure basic feasible solutions are valid and the method can move between corner points.",hint:"Basic feasible solutions need non-negative variables.",level:"advanced",codeExample:"x ≥ 0, y ≥ 0"},{question:"How do you handle a negative RHS in standard form?",shortAnswer:"Multiply the constraint by -1.",explanation:"If b < 0, multiply both sides by -1 and reverse the inequality direction.",hint:"Multiply by -1.",level:"intermediate",codeExample:"2x - y ≤ -3 → -2x + y ≥ 3"},{question:"What is the purpose of converting to standard form?",shortAnswer:"To enable the Simplex Method by creating a system of linear equations.",explanation:"Standard form converts inequalities to equalities, making the problem suitable for algebraic solution.",hint:"Enable Simplex Method.",level:"basic",codeExample:"Convert → Solve with Simplex"},{question:"What are the coefficients of slack variables in the objective function?",shortAnswer:"Zero (they don't affect the objective value).",explanation:"Slack variables represent unused resources and don't contribute to profit or cost.",hint:"Zero coefficients.",level:"intermediate",codeExample:"Z = 3x + 2y + 0s₁ + 0s₂"},{question:"What are the coefficients of surplus variables in the objective function?",shortAnswer:"Zero (they don't affect the objective value).",explanation:"Surplus variables represent excess resources and don't contribute to profit or cost.",hint:"Zero coefficients.",level:"intermediate",codeExample:"Z = 3x + 2y + 0s₁ + 0s₂"}],Z=`TOPIC 1: STANDARD FORM OF AN LP PROBLEM\r
=======================================\r
\r
INTRODUCTION\r
------------\r
Standard form is a specific format for LP problems required by the \r
Simplex Method. It converts all constraints to equalities and \r
ensures all variables are non-negative.\r
\r
WHAT IS STANDARD FORM?\r
----------------------\r
Requirements:\r
1. Maximization objective\r
2. All constraints are equalities\r
3. All variables ≥ 0\r
4. Right-hand side (RHS) ≥ 0\r
\r
General Form:\r
Maximize Z = c₁x₁ + c₂x₂ + ... + cₙxₙ\r
Subject to:\r
a₁₁x₁ + a₁₂x₂ + ... + a₁ₙxₙ = b₁\r
a₂₁x₁ + a₂₂x₂ + ... + a₂ₙxₙ = b₂\r
...\r
x₁, x₂, ..., xₙ ≥ 0\r
\r
CONVERSION RULES\r
----------------\r
1. Minimization → Maximization:\r
   Min Z = c₁x₁ + c₂x₂\r
   → Max Z' = -c₁x₁ - c₂x₂\r
\r
2. ≤ Constraints:\r
   a₁x₁ + a₂x₂ ≤ b\r
   → a₁x₁ + a₂x₂ + s = b, s ≥ 0\r
   (s = slack variable)\r
\r
3. ≥ Constraints:\r
   a₁x₁ + a₂x₂ ≥ b\r
   → a₁x₁ + a₂x₂ - s = b, s ≥ 0\r
   (s = surplus variable)\r
\r
4. = Constraints:\r
   a₁x₁ + a₂x₂ = b\r
   → Keep as is\r
\r
5. Unrestricted Variables:\r
   x unrestricted → x = x₁ - x₂\r
   where x₁, x₂ ≥ 0\r
\r
6. Negative RHS:\r
   If b < 0, multiply by -1\r
   and reverse inequality direction\r
\r
EXAMPLE\r
-------\r
Original Problem:\r
Maximize Z = 3x + 2y\r
Subject to:\r
2x + y ≤ 10\r
x + 2y ≤ 8\r
x ≥ 0, y ≥ 0\r
\r
Standard Form:\r
Maximize Z = 3x + 2y + 0s₁ + 0s₂\r
Subject to:\r
2x + y + s₁ = 10\r
x + 2y + s₂ = 8\r
x, y, s₁, s₂ ≥ 0\r
\r
SLACK AND SURPLUS VARIABLES\r
---------------------------\r
Slack Variables (s ≥ 0):\r
- Added to ≤ constraints\r
- Represent unused resources\r
- Zero coefficient in objective\r
\r
Surplus Variables (s ≥ 0):\r
- Subtracted from ≥ constraints\r
- Represent excess over requirements\r
- Zero coefficient in objective\r
\r
WHY STANDARD FORM MATTERS\r
-------------------------\r
1. Required for Simplex Method\r
2. Creates system of equations\r
3. Enables algebraic solution\r
4. Foundation for tableaus\r
\r
COMMON MISTAKES\r
---------------\r
1. Forgetting to convert minimization\r
2. Adding slack instead of surplus\r
3. Forgetting non-negativity for slack variables\r
4. Not handling unrestricted variables\r
\r
BEST PRACTICES\r
--------------\r
1. Check all four requirements\r
2. Use different variable names for slack/surplus\r
3. Verify RHS is non-negative\r
4. Keep track of variable types\r
\r
TEACHER'S NOTE\r
--------------\r
Standard form is the language of the Simplex Method. Understanding \r
how to convert problems to standard form is essential for applying \r
the method correctly."`,W=()=>{const[x,h]=n.useState("concept"),[b,u]=n.useState({}),[c,y]=n.useState(null),[m,p]=n.useState(null),v=[{id:"concept",label:"Concept"},{id:"examples",label:"Examples"},{id:"practice",label:"Practice"}],f=[{id:1,title:"Example 1: Converting to Standard Form",problem:`Convert the following LP problem to standard form:
Maximize Z = 3x + 2y
Subject to:
2x + y ≤ 10
x + 2y ≤ 8
x ≥ 0, y ≥ 0`,solution:`Maximize Z = 3x + 2y + 0s₁ + 0s₂
Subject to:
2x + y + s₁ = 10
x + 2y + s₂ = 8
x, y, s₁, s₂ ≥ 0`,detailedSolution:`Step 1: Identify the type of problem
- Maximization problem
- All constraints are ≤
- All variables ≥ 0

Step 2: Convert inequalities to equalities
- For each ≤ constraint, add a slack variable
- 2x + y ≤ 10 → 2x + y + s₁ = 10
- x + 2y ≤ 8 → x + 2y + s₂ = 8

Step 3: Update the objective function
- Add slack variables with coefficient 0
- Z = 3x + 2y + 0s₁ + 0s₂

Step 4: Write in standard form
Maximize Z = 3x + 2y + 0s₁ + 0s₂
Subject to:
2x + y + s₁ = 10
x + 2y + s₂ = 8
x, y, s₁, s₂ ≥ 0`},{id:2,title:"Example 2: Minimization to Maximization",problem:`Convert the following LP problem to standard form:
Minimize Z = 4x + 3y
Subject to:
x + y ≥ 6
2x + y ≥ 8
x ≥ 0, y ≥ 0`,solution:`Maximize Z' = -4x - 3y
Subject to:
x + y - s₁ = 6
2x + y - s₂ = 8
x, y, s₁, s₂ ≥ 0`,detailedSolution:`Step 1: Convert minimization to maximization
- Minimize Z = 4x + 3y
- Equivalent to: Maximize Z' = -4x - 3y

Step 2: Convert ≥ constraints to equalities
- For each ≥ constraint, subtract a surplus variable
- x + y ≥ 6 → x + y - s₁ = 6
- 2x + y ≥ 8 → 2x + y - s₂ = 8

Step 3: Update the objective function
- Z' = -4x - 3y + 0s₁ + 0s₂

Step 4: Write in standard form
Maximize Z' = -4x - 3y + 0s₁ + 0s₂
Subject to:
x + y - s₁ = 6
2x + y - s₂ = 8
x, y, s₁, s₂ ≥ 0`},{id:3,title:"Example 3: Mixed Constraints",problem:`Convert the following LP problem to standard form:
Maximize Z = 5x + 7y
Subject to:
3x + 2y ≤ 18
2x + 4y ≥ 20
x + 3y = 15
x ≥ 0, y ≥ 0`,solution:`Maximize Z = 5x + 7y + 0s₁ + 0s₂
Subject to:
3x + 2y + s₁ = 18
2x + 4y - s₂ = 20
x + 3y = 15
x, y, s₁, s₂ ≥ 0`,detailedSolution:`Step 1: Identify constraint types
- 3x + 2y ≤ 18 → ≤ constraint
- 2x + 4y ≥ 20 → ≥ constraint
- x + 3y = 15 → equality constraint

Step 2: Convert each constraint
- For ≤: add slack variable
  3x + 2y + s₁ = 18
- For ≥: subtract surplus variable
  2x + 4y - s₂ = 20
- For =: keep as is
  x + 3y = 15

Step 3: Update objective function
- Z = 5x + 7y + 0s₁ + 0s₂

Step 4: Write in standard form
Maximize Z = 5x + 7y + 0s₁ + 0s₂
Subject to:
3x + 2y + s₁ = 18
2x + 4y - s₂ = 20
x + 3y = 15
x, y, s₁, s₂ ≥ 0`},{id:4,title:"Example 4: Unrestricted Variables",problem:`Convert the following LP problem to standard form with non-negative variables:
Maximize Z = 3x + 4y
Subject to:
x + 2y ≤ 10
x - y ≥ 4
x unrestricted, y ≥ 0`,solution:`Let x = x₁ - x₂, where x₁, x₂ ≥ 0
Maximize Z = 3(x₁ - x₂) + 4y
= 3x₁ - 3x₂ + 4y
Subject to:
(x₁ - x₂) + 2y ≤ 10 → x₁ - x₂ + 2y + s₁ = 10
(x₁ - x₂) - y ≥ 4 → x₁ - x₂ - y - s₂ = 4
x₁, x₂, y, s₁, s₂ ≥ 0`,detailedSolution:`Step 1: Handle unrestricted variable
- x is unrestricted (can be negative)
- Replace x with x₁ - x₂ where x₁, x₂ ≥ 0

Step 2: Rewrite the objective
- Z = 3x + 4y = 3(x₁ - x₂) + 4y
- Z = 3x₁ - 3x₂ + 4y

Step 3: Rewrite the constraints
- x + 2y ≤ 10 → (x₁ - x₂) + 2y ≤ 10
- x - y ≥ 4 → (x₁ - x₂) - y ≥ 4

Step 4: Convert to equalities
- x₁ - x₂ + 2y + s₁ = 10
- x₁ - x₂ - y - s₂ = 4

Step 5: Write in standard form
Maximize Z = 3x₁ - 3x₂ + 4y + 0s₁ + 0s₂
Subject to:
x₁ - x₂ + 2y + s₁ = 10
x₁ - x₂ - y - s₂ = 4
x₁, x₂, y, s₁, s₂ ≥ 0`}],j=[{id:1,title:"Convert to Standard Form",problem:`Convert to standard form:
Maximize Z = 2x + 3y
Subject to:
3x + 2y ≤ 12
x + 4y ≤ 8
x ≥ 0, y ≥ 0`,hint:"Add slack variables for each ≤ constraint.",solution:`Maximize Z = 2x + 3y + 0s₁ + 0s₂
Subject to:
3x + 2y + s₁ = 12
x + 4y + s₂ = 8
x, y, s₁, s₂ ≥ 0`},{id:2,title:"Minimization to Standard Form",problem:`Convert to standard form:
Minimize Z = 5x + 4y
Subject to:
x + 2y ≥ 10
3x + y ≥ 12
x ≥ 0, y ≥ 0`,hint:"Convert minimization to maximization and subtract surplus variables.",solution:`Maximize Z' = -5x - 4y
Subject to:
x + 2y - s₁ = 10
3x + y - s₂ = 12
x, y, s₁, s₂ ≥ 0`},{id:3,title:"Mixed Constraints",problem:`Convert to standard form:
Maximize Z = 6x + 8y
Subject to:
2x + 3y ≤ 24
x + 5y ≥ 15
x + 2y = 10
x ≥ 0, y ≥ 0`,hint:"Handle ≤, ≥, and = constraints appropriately.",solution:`Maximize Z = 6x + 8y + 0s₁ + 0s₂
Subject to:
2x + 3y + s₁ = 24
x + 5y - s₂ = 15
x + 2y = 10
x, y, s₁, s₂ ≥ 0`}],k=t=>{u(o=>({...o,[t]:!o[t]}))},S=()=>{const[t,o]=n.useState("max"),[r,g]=n.useState("le"),[s,N]=n.useState(2),[i,w]=n.useState(3),[d,M]=n.useState(12),q=()=>{let a="";return t==="max"?a+=`Maximize Z = ${s}x + ${i}y`:a+=`Maximize Z' = -${s}x - ${i}y`,r==="le"?a+=`
Subject to:
${s}x + ${i}y + s₁ = ${d}`:r==="ge"?a+=`
Subject to:
${s}x + ${i}y - s₁ = ${d}`:a+=`
Subject to:
${s}x + ${i}y = ${d}`,a+=`
x, y, s₁ ≥ 0`,a};return e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4",children:"Interactive Standard Form Converter"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx("div",{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1",children:"Problem Type"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>o("max"),className:l("px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300",t==="max"?"bg-blue-600 text-white":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"),children:"Maximize"}),e.jsx("button",{onClick:()=>o("min"),className:l("px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300",t==="min"?"bg-blue-600 text-white":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"),children:"Minimize"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1",children:"Constraint Type"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>g("le"),className:l("px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300",r==="le"?"bg-blue-600 text-white":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"),children:"≤"}),e.jsx("button",{onClick:()=>g("ge"),className:l("px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300",r==="ge"?"bg-blue-600 text-white":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"),children:"≥"}),e.jsx("button",{onClick:()=>g("eq"),className:l("px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300",r==="eq"?"bg-blue-600 text-white":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"),children:"="})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400",children:"Coefficient a (x)"}),e.jsx("input",{type:"range",min:"1",max:"10",value:s,onChange:a=>N(Number(a.target.value)),className:"w-full"}),e.jsx("span",{className:"text-sm text-gray-600 dark:text-gray-400",children:s})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400",children:"Coefficient b (y)"}),e.jsx("input",{type:"range",min:"1",max:"10",value:i,onChange:a=>w(Number(a.target.value)),className:"w-full"}),e.jsx("span",{className:"text-sm text-gray-600 dark:text-gray-400",children:i})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400",children:"Constant c"}),e.jsx("input",{type:"range",min:"1",max:"20",value:d,onChange:a=>M(Number(a.target.value)),className:"w-full"}),e.jsx("span",{className:"text-sm text-gray-600 dark:text-gray-400",children:d})]})]})}),e.jsxs("div",{children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h5",{className:"text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",children:"Standard Form"}),e.jsx("pre",{className:"text-xs font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:q()})]}),e.jsxs("div",{className:"mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:[e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:e.jsx("span",{className:"font-semibold",children:"Rules Applied:"})}),e.jsxs("ul",{className:"list-disc list-inside text-xs text-gray-600 dark:text-gray-400 mt-1",children:[t==="min"&&e.jsx("li",{children:"Minimization converted to maximization with negative coefficients"}),r==="le"&&e.jsx("li",{children:"Added slack variable s₁ for ≤ constraint"}),r==="ge"&&e.jsx("li",{children:"Subtracted surplus variable s₁ for ≥ constraint"}),r==="eq"&&e.jsx("li",{children:"Kept equality constraint as is"}),e.jsx("li",{children:"All variables ≥ 0"})]})]})]})]})]})};return e.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[e.jsxs("div",{className:"text-center mb-10",children:[e.jsx("h1",{className:"text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-all duration-300",children:"Standard Form of an LP Problem"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto",children:"Learn how to convert linear programming problems into standard form, a necessary step for applying the Simplex Method."})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 justify-center border-b border-gray-200 dark:border-gray-700 pb-4",children:v.map(t=>e.jsx("button",{onClick:()=>h(t.id),className:l("px-6 py-2 rounded-lg font-medium transition-all duration-300",x===t.id?"bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-indigo-900/30":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-md"),children:t.label},t.id))}),e.jsxs("div",{className:"space-y-8",children:[x==="concept"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"What is Standard Form?"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 leading-relaxed mb-4",children:"Standard form is a specific format for LP problems that is required for the Simplex Method. It converts all inequality constraints into equalities and ensures all variables are non-negative. This algebraic form allows the Simplex Method to work systematically with a system of linear equations."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Standard Form Requirements"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Maximization objective"}),e.jsx("li",{children:"All constraints are equalities"}),e.jsx("li",{children:"All variables ≥ 0"}),e.jsx("li",{children:"Right-hand side (RHS) ≥ 0"})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Why Standard Form?"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Required for Simplex Method"}),e.jsx("li",{children:"Creates system of equations"}),e.jsx("li",{children:"Enables algebraic solution"}),e.jsx("li",{children:"Foundation for tableaus"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"How to Convert to Standard Form"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Step 1: Objective"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Convert minimization to maximization by multiplying by -1."}),e.jsxs("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:["Min Z = c₁x₁ + c₂x₂",e.jsx("br",{}),"→ Max Z' = -c₁x₁ - c₂x₂"]})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Step 2: Constraints"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Convert inequalities to equalities using slack/surplus variables."}),e.jsxs("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:["≤ → add slack (+s)",e.jsx("br",{}),"≥ → subtract surplus (-s)",e.jsx("br",{}),"= → keep as is"]})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Step 3: Variables"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Ensure all variables ≥ 0. Handle unrestricted variables."}),e.jsxs("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:["x unrestricted → x = x₁ - x₂",e.jsx("br",{}),"where x₁, x₂ ≥ 0"]})]})]})]}),e.jsx(S,{}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"💡 Tips & Tricks for Converting to Standard Form"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h4",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"Professional Tips"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Always check RHS is non-negative"}),e.jsx("li",{children:"Use different variable names for slack/surplus"}),e.jsx("li",{children:"Keep track of variable types (≤, ≥, =)"}),e.jsx("li",{children:"Verify all variables have non-negativity constraints"})]})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500",children:[e.jsx("h4",{className:"font-semibold text-purple-700 dark:text-purple-400 mb-2",children:"Common Mistakes"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Forgetting to convert minimization"}),e.jsx("li",{children:"Adding surplus instead of slack"}),e.jsx("li",{children:"Forgetting non-negativity for slack variables"}),e.jsx("li",{children:"Not handling unrestricted variables"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"✅ Mini Checklist"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Objective is maximization"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"All constraints are equalities"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"All variables ≥ 0"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"RHS values non-negative"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Slack/surplus variables identified"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Unrestricted variables handled"})]})]})]})]}),x==="examples"&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"space-y-6",children:f.map(t=>e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-bold text-gray-800 dark:text-gray-200 mb-3",children:t.title}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h5",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Original Problem"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.problem})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h5",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Standard Form"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.solution})]})]}),e.jsx("div",{className:"mt-4 flex justify-center",children:e.jsx("button",{onClick:()=>k(t.id),className:"px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300",children:b[t.id]?"Hide Conversion Steps":"Show Conversion Steps"})}),b[t.id]&&e.jsxs("div",{className:"mt-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h5",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"📝 Conversion Steps"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.detailedSolution})]})]},`example-${t.id}`))})}),x==="practice"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center",children:"Practice Problems"}),e.jsx("div",{className:"space-y-6",children:j.map(t=>e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 transition-all duration-300 hover:shadow-md",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:t.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:t.problem}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>y(c===t.id?null:t.id),className:"px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-all duration-300",children:c===t.id?"Hide Solution":"Check Solution"}),e.jsx("button",{onClick:()=>p(m===t.id?null:t.id),className:"px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300",children:m===t.id?"Hide Hint":"Show Hint"})]}),m===t.id&&e.jsx("div",{className:"mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800",children:e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"💡 Hint:"})," ",t.hint]})}),c===t.id&&e.jsx("div",{className:"mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800",children:e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono",children:t.solution})})]},t.id))})]}),e.jsxs("div",{className:"bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6 border border-indigo-200 dark:border-indigo-800",children:[e.jsx("h4",{className:"font-semibold text-indigo-700 dark:text-indigo-400 mb-2",children:"💡 Tips for Converting to Standard Form"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Identify constraint types:"})," ≤, ≥, or ="]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Add slack for ≤:"})," +s"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Subtract surplus for ≥:"})," -s"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Minimization becomes maximization:"})," multiply by -1"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"All variables must be ≥ 0:"})," handle unrestricted"]})]})]})]})]}),e.jsx("div",{className:"mt-12",children:e.jsx(C,{title:"Standard Form of LP Problems FAQs",questions:E})}),e.jsx("div",{className:"mt-8",children:e.jsx(z,{content:Z,title:"Standard Form of an LP Problem",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Note",downloadFileName:"topic1_note.txt"})}),e.jsx("div",{className:"mt-8",children:e.jsx(A,{note:"Standard form is the language of the Simplex Method. I tell my students that learning to convert problems to standard form is like learning grammar before writing essays - it's essential for clear communication. The key is understanding the rules: maximization objective, equality constraints, and non-negative variables. Once students master this conversion, the Simplex Method becomes much more approachable."})})]})})};export{W as default};
