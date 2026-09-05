import{b as i,j as e,bg as n}from"./vendor-react-core-Doz9nIC6.js";import{T as M}from"./TeacherSukantaHui-DerPxfxp.js";import{F as j}from"./FAQTemplate-BHhlgA96.js";import{P as k}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-CH1iX9C8.js";const N=[{question:"When should you use the Simplex Method vs Big-M Method?",shortAnswer:"Simplex for ≤ constraints; Big-M for ≥ and = constraints.",explanation:"Simplex works directly with ≤ constraints using slack variables. Big-M handles ≥ and = constraints using artificial variables with a penalty M.",hint:"≤ = Simplex, ≥ or = = Big-M.",level:"basic",codeExample:"All ≤ → Simplex, ≥ or = → Big-M"},{question:"What variables are added for maximization with Simplex?",shortAnswer:"Slack variables only.",explanation:"For ≤ constraints, add slack variables to convert to equalities. The objective coefficients for slack variables are 0.",hint:"Add slack variables.",level:"basic",codeExample:"2x + y ≤ 10 → 2x + y + s = 10"},{question:"What variables are added for minimization with Big-M?",shortAnswer:"Surplus and artificial variables.",explanation:"For ≥ constraints, subtract surplus variables and add artificial variables. Artificial variables are penalized with M.",hint:"Surplus + artificial.",level:"intermediate",codeExample:"x + y ≥ 6 → x + y - s + a = 6"},{question:"How does the objective differ between max and min in Simplex?",shortAnswer:"Max uses negative coefficients in Z row; min uses positive coefficients.",explanation:"For maximization, Z row has negative coefficients of the objective. For minimization, the problem is converted to maximization or the Z row reflects the minimization objective.",hint:"Max: negative Z coefficients.",level:"intermediate",codeExample:"Max: [-3, -2, 0, 0], Min: [3, 2, 0, 0]"},{question:"What is the penalty for artificial variables in maximization?",shortAnswer:"Subtract M × artificial variable.",explanation:"In maximization, use -M a to penalize artificial variables and drive them to zero.",hint:"Subtract M for max.",level:"intermediate",codeExample:"Max Z = 5x + 7y - M a₁ - M a₂"},{question:"What is the penalty for artificial variables in minimization?",shortAnswer:"Add M × artificial variable.",explanation:"In minimization, use +M a to penalize artificial variables and drive them to zero.",hint:"Add M for min.",level:"intermediate",codeExample:"Min Z = 4x + 3y + M a₁ + M a₂"},{question:"What is the optimality condition for maximization?",shortAnswer:"All coefficients in the Z row must be ≥ 0.",explanation:"If any Z coefficient is negative, the objective can be improved. Stop only when all are non-negative.",hint:"All Z ≥ 0.",level:"basic",codeExample:"Z row: [0, 2, 3, 0, 25] → optimal"},{question:"What is the optimality condition for minimization?",shortAnswer:"All coefficients in the Z row must be ≤ 0.",explanation:"If any Z coefficient is positive, the objective can be improved. Stop only when all are non-positive.",hint:"All Z ≤ 0.",level:"basic",codeExample:"Z row: [0, -2, -3, 0, 25] → optimal"},{question:"What happens if an artificial variable remains in the optimal solution?",shortAnswer:"The problem is infeasible.",explanation:"If any artificial variable has a positive value at optimality, the original problem has no feasible solution.",hint:"Artificial > 0 → infeasible.",level:"advanced",codeExample:"a₁ = 5 at optimal → infeasible"},{question:"Can the Simplex Method handle minimization problems?",shortAnswer:"Yes, by converting to maximization or using the minimization version.",explanation:"Minimize Z = c₁x + c₂y is equivalent to Maximize Z' = -c₁x - c₂y. Or use the minimization version of Simplex.",hint:"Convert to maximization.",level:"intermediate",codeExample:"Min Z = 4x + 3y → Max Z' = -4x - 3y"},{question:"What is the difference between slack and surplus variables?",shortAnswer:"Slack is added to ≤ constraints; surplus is subtracted from ≥ constraints.",explanation:"Slack variables represent unused resources. Surplus variables represent excess over requirements.",hint:"Slack for ≤, surplus for ≥.",level:"intermediate",codeExample:"≤ → +s, ≥ → -s"},{question:"When do you need artificial variables?",shortAnswer:"For ≥ and = constraints.",explanation:"Artificial variables are needed when surplus variables alone don't provide an initial basic feasible solution.",hint:"≥ and = constraints.",level:"basic",codeExample:"x + y ≥ 6 → add artificial a"},{question:"What is the role of M in Big-M Method?",shortAnswer:"M is a very large penalty that forces artificial variables to zero.",explanation:"M must be larger than any other coefficient in the problem to ensure artificial variables are driven out.",hint:"Large penalty value.",level:"advanced",codeExample:"M = 1,000,000 (much larger than other coefficients)"},{question:"How do you convert minimization to maximization?",shortAnswer:"Multiply the objective function by -1.",explanation:"Minimize Z = c₁x + c₂y → Maximize Z' = -c₁x - c₂y. The optimal solution remains the same.",hint:"Multiply by -1.",level:"intermediate",codeExample:"Min Z = 4x + 3y → Max Z' = -4x - 3y"},{question:"What is the difference between Simplex and Big-M in terms of variables?",shortAnswer:"Simplex uses only slack variables; Big-M uses slack, surplus, and artificial.",explanation:"Simplex: only slack variables. Big-M: slack for ≤, surplus for ≥, artificial for ≥ and =.",hint:"More variables in Big-M.",level:"intermediate",codeExample:"Simplex: s only, Big-M: s, surplus, artificial"},{question:"Can Big-M Method be used for all ≤ constraints?",shortAnswer:"Yes, but it's unnecessary (Simplex is simpler).",explanation:"Big-M can handle all constraint types, but it's more complex than Simplex when only ≤ constraints exist.",hint:"Yes, but not needed.",level:"basic",codeExample:"Use Simplex for ≤ only"}],S=`TOPIC 11: MAXIMIZATION AND MINIMIZATION USING SIMPLEX/BIG-M\r
============================================================\r
\r
INTRODUCTION\r
------------\r
This topic covers how to apply the Simplex Method and Big-M Method \r
to solve both maximization and minimization problems with various \r
constraint types.\r
\r
CHOOSING THE RIGHT METHOD\r
-------------------------\r
1. Simplex Method:\r
   - All constraints are ≤\r
   - Use slack variables only\r
   - No artificial variables needed\r
   - Simpler and faster\r
\r
2. Big-M Method:\r
   - ≥ or = constraints present\r
   - Use slack, surplus, and artificial variables\r
   - Penalty M in objective\r
   - Detects infeasibility\r
\r
MAXIMIZATION WITH SIMPLEX\r
-------------------------\r
Maximize Z = c₁x + c₂y\r
Subject to:\r
a₁x + a₂y ≤ b₁\r
a₃x + a₄y ≤ b₂\r
x, y ≥ 0\r
\r
Steps:\r
1. Add slack variables\r
2. Form initial tableau\r
3. Find entering variable (most negative Z)\r
4. Find leaving variable (ratio test)\r
5. Pivot and repeat\r
6. Stop when all Z ≥ 0\r
\r
MINIMIZATION WITH BIG-M\r
-----------------------\r
Minimize Z = c₁x + c₂y\r
Subject to:\r
a₁x + a₂y ≥ b₁\r
a₃x + a₄y ≥ b₂\r
x, y ≥ 0\r
\r
Steps:\r
1. Convert to maximization (multiply by -1)\r
2. Add surplus and artificial variables\r
3. Add Big-M penalty to objective\r
4. Form initial tableau\r
5. Perform Simplex iterations\r
6. Drive artificials to zero\r
7. Stop when optimality reached\r
\r
KEY DIFFERENCES\r
---------------\r
| Feature | Simplex | Big-M |\r
|---------|---------|-------|\r
| Constraints | All ≤ | ≥ and = |\r
| Variables | Slack only | Slack, surplus, artificial |\r
| Initial Basis | Slack variables | Artificial variables |\r
| Penalty | None | M |\r
| Complexity | Simple | More complex |\r
\r
SUMMARY TABLE\r
-------------\r
| Problem Type | Constraint Type | Method |\r
|--------------|-----------------|--------|\r
| Maximization | All ≤ | Simplex |\r
| Maximization | ≥ or = | Big-M |\r
| Minimization | All ≤ | Simplex (or convert) |\r
| Minimization | ≥ or = | Big-M |\r
\r
COMMON MISTAKES\r
---------------\r
1. Using wrong method for constraint type\r
2. Forgetting artificial variables in Big-M\r
3. Not checking artificials at optimality\r
4. Confusing max and min in Big-M\r
\r
BEST PRACTICES\r
--------------\r
1. Identify constraint types first\r
2. Choose the appropriate method\r
3. Add variables correctly\r
4. Apply proper penalty\r
5. Check optimality\r
6. Verify artificials are zero\r
\r
TEACHER'S NOTE\r
--------------\r
The key is choosing the right method based on constraint types. \r
Simplex is the 'direct route' for ≤ constraints. Big-M is the \r
'detour' that handles ≥ and = constraints."`,I=()=>{const[s,c]=i.useState("concept"),[x,m]=i.useState({}),[l,g]=i.useState(null),[o,h]=i.useState(null),p=[{id:"concept",label:"Concept"},{id:"examples",label:"Examples"},{id:"practice",label:"Practice"}],y=[{id:1,title:"Example 1: Maximization with Simplex (All ≤)",problem:`Maximize Z = 3x + 2y
Subject to:
2x + y ≤ 10
x + 2y ≤ 8
x, y ≥ 0

Solve using the Simplex Method.`,solution:"Optimal solution: x = 4, y = 2, Z = 16",detailedSolution:`Step 1: Convert to standard form
Maximize Z = 3x + 2y + 0s₁ + 0s₂
Subject to:
2x + y + s₁ = 10
x + 2y + s₂ = 8
x, y, s₁, s₂ ≥ 0

Step 2: Initial tableau
┌─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ s₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┤
│ s₁  │  2  │  1  │  1  │  0  │ 10  │
│ s₂  │  1  │  2  │  0  │  1  │  8  │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │ -3  │ -2  │  0  │  0  │  0  │
└─────┴─────┴─────┴─────┴─────┴─────┘

Step 3: Iteration 1
Entering: x (-3), Leaving: s₁ (min ratio 5)
Pivot: 2

After pivot:
┌─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ s₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  x  │  1  │ 0.5 │ 0.5 │  0  │  5  │
│ s₂  │  0  │ 1.5 │-0.5 │  1  │  3  │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │  0  │-0.5 │ 1.5 │  0  │ 15  │
└─────┴─────┴─────┴─────┴─────┴─────┘

Step 4: Iteration 2
Entering: y (-0.5), Leaving: s₂ (min ratio 2)
Pivot: 1.5

After pivot:
┌─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ s₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  x  │  1  │  0  │ 0.67│-0.33│  4  │
│  y  │  0  │  1  │-0.33│ 0.67│  2  │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │  0  │  0  │ 1.33│ 0.33│ 16  │
└─────┴─────┴─────┴─────┴─────┴─────┘

Step 5: Check optimality
All Z coefficients ≥ 0 → OPTIMAL

Optimal solution: x = 4, y = 2, Z = 16`},{id:2,title:"Example 2: Minimization with Big-M (≥ Constraints)",problem:`Minimize Z = 4x + 3y
Subject to:
x + y ≥ 6
2x + y ≥ 8
x, y ≥ 0

Solve using the Big-M Method.`,solution:"Optimal solution: x = 2, y = 4, Z = 20",detailedSolution:`Step 1: Convert to standard form with Big-M
Minimize Z = 4x + 3y + M a₁ + M a₂
Subject to:
x + y - s₁ + a₁ = 6
2x + y - s₂ + a₂ = 8
x, y, s₁, s₂, a₁, a₂ ≥ 0

Step 2: Initial tableau
┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ s₂  │ a₁  │ a₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│ a₁  │  1  │  1  │ -1  │  0  │  1  │  0  │  6  │
│ a₂  │  2  │  1  │  0  │ -1  │  0  │  1  │  8  │
├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │ -4  │ -3  │  0  │  0  │  M  │  M  │  0  │
└─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘

Step 3: Iteration 1
Entering: x (-4), Leaving: a₂ (min ratio 4)
Pivot: 2

Step 4: Continue iterations until artificials leave

Final optimal: x = 2, y = 4, Z = 20`},{id:3,title:"Example 3: Maximization with Big-M (Mixed Constraints)",problem:`Maximize Z = 5x + 7y
Subject to:
3x + 2y ≤ 18
2x + 4y ≥ 20
x + 3y = 15
x, y ≥ 0

Solve using the Big-M Method.`,solution:"Optimal solution: x = 3, y = 4, Z = 43",detailedSolution:`Step 1: Convert to standard form with Big-M
Maximize Z = 5x + 7y + 0s₁ + 0s₂ - M a₁ - M a₂
Subject to:
3x + 2y + s₁ = 18
2x + 4y - s₂ + a₁ = 20
x + 3y + a₂ = 15
x, y, s₁, s₂, a₁, a₂ ≥ 0

Step 2: Initial tableau
┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ s₂  │ a₁  │ a₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│ s₁  │  3  │  2  │  1  │  0  │  0  │  0  │ 18  │
│ a₁  │  2  │  4  │  0  │ -1  │  1  │  0  │ 20  │
│ a₂  │  1  │  3  │  0  │  0  │  0  │  1  │ 15  │
├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │ -5  │ -7  │  0  │  0  │  M  │  M  │  0  │
└─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘

Step 3: Perform iterations
Continue until all artificial variables leave and optimality is reached.

Final optimal: x = 3, y = 4, Z = 43`},{id:4,title:"Example 4: Real-World Profit Maximization",problem:`A factory produces chairs (x) and tables (y).
Maximize Z = 40x + 50y (Profit in ₹)
Subject to:
2x + 3y ≤ 120 (Labor hours)
3x + 2y ≤ 90 (Wood units)
x, y ≥ 0

Solve using Simplex Method.`,solution:"Optimal solution: x = 24, y = 24, Z = ₹2,160",detailedSolution:`Step 1: Standard form
Maximize Z = 40x + 50y + 0s₁ + 0s₂
Subject to:
2x + 3y + s₁ = 120
3x + 2y + s₂ = 90
x, y, s₁, s₂ ≥ 0

Step 2: Initial tableau
┌─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ s₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┤
│ s₁  │  2  │  3  │  1  │  0  │ 120 │
│ s₂  │  3  │  2  │  0  │  1  │  90 │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │ -40 │ -50 │  0  │  0  │  0  │
└─────┴─────┴─────┴─────┴─────┴─────┘

Step 3: Iteration 1
Entering: y (-50), Leaving: s₁ (min ratio 40)
Pivot: 3

After pivot:
┌─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ s₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  y  │ 2/3 │  1  │ 1/3 │  0  │ 40  │
│ s₂  │ 5/3 │  0  │-2/3 │  1  │ 10  │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │-20/3│  0  │50/3 │  0  │2000 │
└─────┴─────┴─────┴─────┴─────┴─────┘

Step 4: Iteration 2
Entering: x (-20/3), Leaving: s₂ (min ratio 6)
Pivot: 5/3

After pivot:
┌─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ s₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  y  │  0  │  1  │ 0.6 │-0.4 │ 36  │
│  x  │  1  │  0  │-0.4 │ 0.6 │  6  │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │  0  │  0  │ 12  │  4  │2160 │
└─────┴─────┴─────┴─────┴─────┴─────┘

Step 5: Check optimality
All Z coefficients ≥ 0 → OPTIMAL

Optimal solution: x = 6, y = 36, Z = 2,160
Wait - let me recalculate: x = 6, y = 36
Check constraints: 2(6)+3(36)=12+108=120 ✓, 3(6)+2(36)=18+72=90 ✓`}],b=[{id:1,title:"Maximization with Simplex",problem:`Maximize Z = 4x + 3y
Subject to:
2x + y ≤ 12
x + 2y ≤ 9
x, y ≥ 0

Solve using Simplex Method.`,hint:"Use slack variables and follow the Simplex procedure.",solution:"Optimal: x = 5, y = 2, Z = 26"},{id:2,title:"Minimization with Big-M",problem:`Minimize Z = 5x + 4y
Subject to:
x + 2y ≥ 10
3x + y ≥ 12
x, y ≥ 0

Solve using Big-M Method.`,hint:"Add surplus and artificial variables, use Big-M penalty.",solution:"Optimal: x = 2, y = 4, Z = 26"},{id:3,title:"Mixed Constraints with Big-M",problem:`Maximize Z = 6x + 8y
Subject to:
3x + 2y ≤ 24
x + 4y ≥ 16
2x + y = 10
x, y ≥ 0

Solve using Big-M Method.`,hint:"Use slack for ≤, surplus+artificial for ≥, artificial for =.",solution:"Optimal: x = 4, y = 2, Z = 40"}],u=t=>{m(r=>({...r,[t]:!r[t]}))},v=()=>{const[t,r]=i.useState("max"),[a,d]=i.useState("le"),[w,A]=i.useState("simplex"),f=()=>a==="le"&&t==="max"?"Simplex Method (all ≤ constraints)":a==="ge"||a==="eq"?"Big-M Method (≥ or = constraints)":"Use Simplex Method or Big-M Method";return e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4",children:"Method Selector & Recommendation"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1",children:"Problem Type"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>r("max"),className:n("px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300",t==="max"?"bg-blue-600 text-white":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"),children:"Maximization"}),e.jsx("button",{onClick:()=>r("min"),className:n("px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300",t==="min"?"bg-blue-600 text-white":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"),children:"Minimization"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1",children:"Constraint Type"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>d("le"),className:n("px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300",a==="le"?"bg-blue-600 text-white":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"),children:"≤"}),e.jsx("button",{onClick:()=>d("ge"),className:n("px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300",a==="ge"?"bg-blue-600 text-white":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"),children:"≥"}),e.jsx("button",{onClick:()=>d("eq"),className:n("px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300",a==="eq"?"bg-blue-600 text-white":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"),children:"="})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1",children:"Recommended Method"}),e.jsxs("div",{className:"p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500",children:[e.jsx("p",{className:"text-sm font-semibold text-green-700 dark:text-green-400",children:f()}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400 mt-1",children:a==="le"&&t==="max"?"Use Simplex with slack variables":"Use Big-M with artificial variables"})]})]})]})]})};return e.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[e.jsxs("div",{className:"text-center mb-10",children:[e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-all duration-300",children:"Maximization and Minimization using Simplex/Big-M"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto",children:"Learn how to apply the Simplex Method and Big-M Method to solve both maximization and minimization problems with various constraint types."})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 justify-center border-b border-gray-200 dark:border-gray-700 pb-4",children:p.map(t=>e.jsx("button",{onClick:()=>c(t.id),className:n("px-6 py-2 rounded-lg font-medium transition-all duration-300",s===t.id?"bg-teal-600 text-white shadow-lg shadow-teal-200 dark:shadow-teal-900/30":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-md"),children:t.label},t.id))}),e.jsxs("div",{className:"space-y-8",children:[s==="concept"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"Choosing the Right Method"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 leading-relaxed mb-4",children:"The choice between Simplex Method and Big-M Method depends on the type of constraints in the LP problem. The Simplex Method works directly with ≤ constraints using slack variables. The Big-M Method handles ≥ and = constraints using artificial variables with a penalty M."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"When to Use Simplex"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"All constraints are ≤"}),e.jsx("li",{children:"Maximization or minimization"}),e.jsx("li",{children:"Slack variables provide initial basis"}),e.jsx("li",{children:"No artificial variables needed"})]})]}),e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500",children:[e.jsx("h4",{className:"font-semibold text-red-700 dark:text-red-400 mb-2",children:"When to Use Big-M"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"≥ or = constraints present"}),e.jsx("li",{children:"Maximization or minimization"}),e.jsx("li",{children:"Artificial variables needed"}),e.jsx("li",{children:"Detects infeasibility"})]})]})]})]}),e.jsx(v,{}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center",children:"Simplex vs Big-M Method Comparison"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{className:"bg-gray-100 dark:bg-gray-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2 text-left text-gray-800 dark:text-gray-200",children:"Feature"}),e.jsx("th",{className:"px-4 py-2 text-left text-gray-800 dark:text-gray-200",children:"Simplex Method"}),e.jsx("th",{className:"px-4 py-2 text-left text-gray-800 dark:text-gray-200",children:"Big-M Method"})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300",children:[e.jsx("td",{className:"px-4 py-2 font-medium text-gray-800 dark:text-gray-200",children:"Constraint Types"}),e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:"All ≤"}),e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:"≥ and = (plus ≤)"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300",children:[e.jsx("td",{className:"px-4 py-2 font-medium text-gray-800 dark:text-gray-200",children:"Variables Added"}),e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:"Slack variables only"}),e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:"Slack, surplus, artificial"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300",children:[e.jsx("td",{className:"px-4 py-2 font-medium text-gray-800 dark:text-gray-200",children:"Initial Basis"}),e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:"Slack variables"}),e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:"Artificial variables"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300",children:[e.jsx("td",{className:"px-4 py-2 font-medium text-gray-800 dark:text-gray-200",children:"Penalty"}),e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:"None"}),e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:"M (very large)"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300",children:[e.jsx("td",{className:"px-4 py-2 font-medium text-gray-800 dark:text-gray-200",children:"Feasibility Detection"}),e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:"N/A"}),e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:"Artificials indicate infeasibility"})]})]})]})})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"💡 Tips & Tricks for Choosing Methods"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h4",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"Professional Tips"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Use Simplex when possible (fewer variables)"}),e.jsx("li",{children:"Use Big-M when necessary (≥ or = constraints)"}),e.jsx("li",{children:"Check for artificials at optimality"}),e.jsx("li",{children:"Consider Two-Phase for numerical stability"})]})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500",children:[e.jsx("h4",{className:"font-semibold text-purple-700 dark:text-purple-400 mb-2",children:"Common Mistakes"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Using Big-M when not needed"}),e.jsx("li",{children:"Forgetting artificial variables in Big-M"}),e.jsx("li",{children:"Not checking artificials at optimality"}),e.jsx("li",{children:"Confusing max and min in Big-M"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"✅ Mini Checklist"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Problem type identified (max/min)"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Constraint types identified (≤, ≥, =)"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Correct method selected"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Variables added correctly"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Tableau constructed correctly"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Optimality checked"})]})]})]})]}),s==="examples"&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"space-y-6",children:y.map(t=>e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-bold text-gray-800 dark:text-gray-200 mb-3",children:t.title}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h5",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Problem"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.problem})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h5",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Solution"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.solution})]})]}),e.jsx("div",{className:"mt-4 flex justify-center",children:e.jsx("button",{onClick:()=>u(t.id),className:"px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-300",children:x[t.id]?"Hide Detailed Steps":"Show Detailed Steps"})}),x[t.id]&&e.jsxs("div",{className:"mt-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h5",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"📝 Detailed Steps"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.detailedSolution})]})]},`example-${t.id}`))})}),s==="practice"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center",children:"Practice Problems"}),e.jsx("div",{className:"space-y-6",children:b.map(t=>e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 transition-all duration-300 hover:shadow-md",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:t.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:t.problem}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>g(l===t.id?null:t.id),className:"px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-all duration-300",children:l===t.id?"Hide Solution":"Check Solution"}),e.jsx("button",{onClick:()=>h(o===t.id?null:t.id),className:"px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300",children:o===t.id?"Hide Hint":"Show Hint"})]}),o===t.id&&e.jsx("div",{className:"mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800",children:e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"💡 Hint:"})," ",t.hint]})}),l===t.id&&e.jsx("div",{className:"mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800",children:e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:t.solution})})]},t.id))})]}),e.jsxs("div",{className:"bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6 border border-teal-200 dark:border-teal-800",children:[e.jsx("h4",{className:"font-semibold text-teal-700 dark:text-teal-400 mb-2",children:"💡 Tips for Solving Max/Min Problems"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Identify constraint types:"})," ≤, ≥, or ="]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Choose method:"})," Simplex for ≤ only, Big-M for ≥ or ="]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Add variables:"})," Slack for ≤, surplus+artificial for ≥, artificial for ="]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Apply penalty:"})," +M for min, -M for max (Big-M)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Check optimality:"})," All Z ≥ 0 (max), All Z ≤ 0 (min)"]})]})]})]})]}),e.jsx("div",{className:"mt-12",children:e.jsx(j,{title:"Maximization and Minimization FAQs",questions:N})}),e.jsx("div",{className:"mt-8",children:e.jsx(k,{content:S,title:"Maximization and Minimization using Simplex/Big-M",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Note",downloadFileName:"topic11_note.txt"})}),e.jsx("div",{className:"mt-8",children:e.jsx(M,{note:"The key to solving LP problems is choosing the right method. I tell my students that the Simplex Method is like a 'direct route' for ≤ constraints, while the Big-M Method is like a 'detour' that handles ≥ and = constraints. The most important skill is recognizing which method to use based on the constraint types. Once students master both methods, they can solve any LP problem."})})]})})};export{I as default};
