import{r,j as e}from"./index-YkKVfVEM.js";import{c as Z}from"./clsx-B-dksMZM.js";import{T as C}from"./TeacherSukantaHui-nIRku_xY.js";import{F as B}from"./FAQTemplate-B_PeLoo7.js";import{P as R}from"./PlainTextPrint-Bgzrldzq.js";import"./github-00a_zZrb.js";import"./createLucideIcon-Cim-rzMd.js";import"./git-branch-BC_-h9tN.js";const H=[{question:"What is the initial simplex tableau?",shortAnswer:"A table representing the LP problem in standard form, used as the starting point for the Simplex Method.",explanation:"The tableau organizes all coefficients of constraints and the objective function into a matrix format that enables row operations.",hint:"Starting point for Simplex iterations.",level:"basic",codeExample:"Tableau with B, variable columns, and RHS"},{question:"What are the parts of a simplex tableau?",shortAnswer:"Basic variables column, variable columns, RHS column, and objective row.",explanation:"The tableau has: B (basic variables), columns for each variable, RHS (right-hand side), and the Z row (objective function).",hint:"B, variables, RHS, Z row.",level:"basic",codeExample:"B | x | y | s₁ | s₂ | RHS"},{question:"What are basic variables in the initial tableau?",shortAnswer:"Slack variables (and artificial variables if used) that form the initial basic feasible solution.",explanation:"In the initial tableau, basic variables are the slack variables (for ≤ constraints) and artificial variables (for ≥ and = constraints).",hint:"Initial basic variables.",level:"intermediate",codeExample:"s₁, s₂ (slack variables)"},{question:"How do you write the Z row in the initial tableau?",shortAnswer:"For maximization, use negative coefficients of the objective function.",explanation:"The Z row is written as Z - c₁x₁ - c₂x₂ = 0, so the coefficients are -c₁, -c₂, ...",hint:"Negative coefficients for maximization.",level:"intermediate",codeExample:"Z row: [-3, -2, 0, 0, 0] for Z = 3x + 2y"},{question:"What do the coefficients in the constraint rows represent?",shortAnswer:"The amount of each variable used in that constraint.",explanation:"Each coefficient shows how much of a variable contributes to the constraint's left-hand side.",hint:"Variable usage coefficients.",level:"basic",codeExample:"Row: [2, 1, 1, 0, 10] → 2x + y + s₁ = 10"},{question:"What is the RHS column in the tableau?",shortAnswer:"The right-hand side values of the constraints.",explanation:"The RHS column contains the b values from the standard form equations a₁x₁ + a₂x₂ + ... = b.",hint:"Right-hand side values.",level:"basic",codeExample:"RHS: 10, 8"},{question:"How do you identify basic variables from the tableau?",shortAnswer:"They have a column with a single 1 and all other entries 0.",explanation:"Basic variables form an identity matrix in the tableau. Each basic variable has a 1 in its row and 0s elsewhere.",hint:"Identity matrix columns.",level:"intermediate",codeExample:"s₁: [1, 0]ᵀ, s₂: [0, 1]ᵀ form identity"},{question:"What is the value of basic variables in the initial tableau?",shortAnswer:"They equal the corresponding RHS values.",explanation:"In the initial tableau, basic variables (slack variables) have values equal to the RHS of their rows.",hint:"Basic variables = RHS values.",level:"intermediate",codeExample:"s₁ = 10, s₂ = 8"},{question:"What is the value of non-basic variables in the initial tableau?",shortAnswer:"Zero.",explanation:"Non-basic variables are set to zero in the initial basic feasible solution.",hint:"Non-basic variables = 0.",level:"intermediate",codeExample:"x = 0, y = 0"},{question:"What is the objective value in the initial tableau?",shortAnswer:"Zero (since all original variables are zero).",explanation:"With all non-basic variables at zero, the objective function value is 0.",hint:"Z = 0 initially.",level:"basic",codeExample:"Z = 0"},{question:"How do you handle artificial variables in the tableau?",shortAnswer:"They become basic variables with a penalty in the Z row.",explanation:"Artificial variables are added for ≥ and = constraints and penalized with M in the objective row.",hint:"Artificials with penalty M.",level:"advanced",codeExample:"Z row: [-4, -3, 0, 0, M, M, 0]"},{question:"What does the identity matrix in the tableau represent?",shortAnswer:"The basic feasible solution.",explanation:"The identity matrix columns correspond to basic variables, showing that each basic variable appears in only one equation.",hint:"Identity = basic variables.",level:"advanced",codeExample:"Columns for s₁ and s₂ form identity matrix"},{question:"Why is the Z row written with negative coefficients?",shortAnswer:"To set up the tableau for the Simplex Method's pivot operations.",explanation:"Writing Z - c₁x₁ - c₂x₂ = 0 allows the Simplex Method to identify entering variables by negative coefficients.",hint:"Negative coefficients for pivot selection.",level:"advanced",codeExample:"Z - 3x - 2y = 0 → [-3, -2, 0, 0, 0]"},{question:"What is the difference between basic and non-basic variables?",shortAnswer:"Basic variables are in the basis (positive values); non-basic variables are zero.",explanation:"Basic variables form the identity matrix and have positive values. Non-basic variables are set to zero.",hint:"In basis vs. not in basis.",level:"intermediate",codeExample:"Basic: s₁, s₂; Non-basic: x, y"},{question:"How many rows does the initial tableau have?",shortAnswer:"One row for each constraint plus one Z row.",explanation:"The tableau has m + 1 rows, where m is the number of constraints.",hint:"Constraints + 1 row.",level:"basic",codeExample:"2 constraints → 3 rows (s₁, s₂, Z)"},{question:"How many columns does the initial tableau have?",shortAnswer:"One column for each variable plus one for RHS.",explanation:"The tableau has n + 1 columns, where n is the number of variables (including slack/artificial).",hint:"Variables + RHS column.",level:"basic",codeExample:"4 variables → 5 columns (x, y, s₁, s₂, RHS)"}],E=`TOPIC 5: INITIAL SIMPLEX TABLEAU\r
================================\r
\r
INTRODUCTION\r
------------\r
The initial simplex tableau is the starting point for the Simplex \r
Method. It organizes the LP problem in standard form into a table \r
that enables row operations.\r
\r
WHAT IS THE INITIAL TABLEAU?\r
---------------------------\r
The initial tableau is a matrix representation of the LP problem:\r
- Rows: constraints + objective function\r
- Columns: variables + RHS\r
- Basic variables: identity matrix columns\r
\r
TABLEAU STRUCTURE\r
-----------------\r
┌─────┬─────┬─────┬─────┬─────┬─────┐\r
│  B  │  x  │  y  │  s₁ │  s₂ │ RHS │\r
├─────┼─────┼─────┼─────┼─────┼─────┤\r
│ s₁  │  a  │  b  │  1  │  0  │  b₁ │\r
│ s₂  │  c  │  d  │  0  │  1  │  b₂ │\r
├─────┼─────┼─────┼─────┼─────┼─────┤\r
│  Z  │ -c₁ │ -c₂ │  0  │  0  │  0  │\r
└─────┴─────┴─────┴─────┴─────┴─────┘\r
\r
HOW TO BUILD THE TABLEAU\r
------------------------\r
Step 1: Convert to Standard Form\r
- Maximization objective\r
- Equality constraints\r
- Non-negative variables\r
\r
Step 2: Identify Variables\r
- Decision variables (x, y)\r
- Slack variables (s₁, s₂, ...)\r
- Artificial variables (a₁, a₂, ...)\r
\r
Step 3: Write Constraint Rows\r
- One row per constraint\r
- Coefficients for each variable\r
- RHS value\r
\r
Step 4: Write Z Row\r
- Negative objective coefficients\r
- Zero for slack variables\r
- M for artificial variables (Big-M)\r
\r
EXAMPLE\r
-------\r
Problem: Maximize Z = 3x + 2y\r
Constraints: 2x + y ≤ 10, x + 2y ≤ 8\r
\r
Standard Form:\r
Max Z = 3x + 2y + 0s₁ + 0s₂\r
2x + y + s₁ = 10\r
x + 2y + s₂ = 8\r
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
KEY ELEMENTS\r
------------\r
• B: Basic variables (s₁, s₂)\r
• Variable Columns: x, y, s₁, s₂\r
• RHS: 10, 8\r
• Z Row: [-3, -2, 0, 0, 0]\r
\r
INITIAL SOLUTION\r
----------------\r
Basic Variables: s₁ = 10, s₂ = 8\r
Non-Basic Variables: x = 0, y = 0\r
Z = 0\r
\r
COMMON MISTAKES\r
---------------\r
1. Wrong signs in Z row\r
2. Forgetting slack variables\r
3. Incorrect basic variable identification\r
4. Misplacing coefficients\r
\r
BEST PRACTICES\r
--------------\r
1. List variables in consistent order\r
2. Double-check all coefficients\r
3. Verify basic variables form identity matrix\r
4. Check RHS values are non-negative\r
\r
TEACHER'S NOTE\r
--------------\r
The initial tableau is like setting up a chess board - every piece \r
must be placed correctly. Practice building tableaus until it \r
becomes second nature."`,K=()=>{const[s,u]=r.useState("concept"),[h,p]=r.useState({}),[n,y]=r.useState(null),[l,v]=r.useState(null),j=[{id:"concept",label:"Concept"},{id:"examples",label:"Examples"},{id:"practice",label:"Practice"}],f=[{id:1,title:"Example 1: Basic Simplex Tableau",problem:`Construct the initial simplex tableau for:
Maximize Z = 3x + 2y
Subject to:
2x + y ≤ 10
x + 2y ≤ 8
x, y ≥ 0`,solution:`Initial tableau:
┌─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │  s₁ │  s₂ │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┤
│ s₁  │  2  │  1  │  1  │  0  │ 10  │
│ s₂  │  1  │  2  │  0  │  1  │  8  │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │ -3  │ -2  │  0  │  0  │  0  │
└─────┴─────┴─────┴─────┴─────┴─────┘`,detailedSolution:`Step 1: Convert to standard form
Maximize Z = 3x + 2y + 0s₁ + 0s₂
Subject to:
2x + y + s₁ = 10
x + 2y + s₂ = 8
x, y, s₁, s₂ ≥ 0

Step 2: Identify variables
Decision variables: x, y
Slack variables: s₁, s₂

Step 3: Set up tableau columns
Columns: Basic variables (B), x, y, s₁, s₂, RHS

Step 4: Write constraint rows
Row 1 (s₁): 2x + 1y + 1s₁ + 0s₂ = 10
Row 2 (s₂): 1x + 2y + 0s₁ + 1s₂ = 8

Step 5: Write Z row
Z - 3x - 2y = 0
Z row: [-3, -2, 0, 0, 0]

Step 6: Identify basic variables
Basic variables: s₁ = 10, s₂ = 8`},{id:2,title:"Example 2: Tableau with Minimization",problem:`Construct the initial simplex tableau for:
Minimize Z = 4x + 3y
Subject to:
x + y ≥ 6
2x + y ≥ 8
x, y ≥ 0

(Use Big-M Method)`,solution:`Initial tableau with Big-M:
┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ s₂  │ a₁  │ a₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│ a₁  │  1  │  1  │ -1  │  0  │  1  │  0  │  6  │
│ a₂  │  2  │  1  │  0  │ -1  │  0  │  1  │  8  │
├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │ -4  │ -3  │  0  │  0  │  M  │  M  │  0  │
└─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘`,detailedSolution:`Step 1: Convert to standard form
Min Z = 4x + 3y → Max Z' = -4x - 3y

Step 2: Add surplus and artificial variables
x + y - s₁ + a₁ = 6
2x + y - s₂ + a₂ = 8

Step 3: Objective with Big-M
Max Z' = -4x - 3y - M a₁ - M a₂

Step 4: Set up tableau
Columns: B, x, y, s₁, s₂, a₁, a₂, RHS

Step 5: Constraint rows
Row 1 (a₁): x + y - s₁ + a₁ = 6
Row 2 (a₂): 2x + y - s₂ + a₂ = 8

Step 6: Z row
Z' + 4x + 3y + M a₁ + M a₂ = 0
Z row: [-4, -3, 0, 0, M, M, 0]`},{id:3,title:"Example 3: Tableau with Mixed Constraints",problem:`Construct the initial simplex tableau for:
Maximize Z = 5x + 7y
Subject to:
3x + 2y ≤ 18
2x + 4y ≥ 20
x + 3y = 15
x, y ≥ 0`,solution:`Initial tableau with Big-M:
┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ s₂  │ a₁  │ a₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│ s₁  │  3  │  2  │  1  │  0  │  0  │  0  │ 18  │
│ a₁  │  2  │  4  │  0  │ -1  │  1  │  0  │ 20  │
│ a₂  │  1  │  3  │  0  │  0  │  0  │  1  │ 15  │
├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │ -5  │ -7  │  0  │  0  │  M  │  M  │  0  │
└─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘`,detailedSolution:`Step 1: Identify constraint types
- 3x + 2y ≤ 18 → slack (s₁)
- 2x + 4y ≥ 20 → surplus + artificial (s₂, a₁)
- x + 3y = 15 → artificial (a₂)

Step 2: Convert to standard form
3x + 2y + s₁ = 18
2x + 4y - s₂ + a₁ = 20
x + 3y + a₂ = 15

Step 3: Objective with Big-M
Max Z = 5x + 7y - M a₁ - M a₂

Step 4: Set up tableau
Basic variables: s₁, a₁, a₂

Step 5: Z row
Z - 5x - 7y + M a₁ + M a₂ = 0
Z row: [-5, -7, 0, 0, M, M, 0]`},{id:4,title:"Example 4: Real-World Tableau Construction",problem:`A factory produces chairs (x) and tables (y).
Maximize Z = 40x + 50y
Subject to:
2x + 3y ≤ 120 (Labor)
3x + 2y ≤ 90 (Wood)
x ≥ 0, y ≥ 0

Construct the initial simplex tableau.`,solution:`Initial tableau:
┌─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ s₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┤
│ s₁  │  2  │  3  │  1  │  0  │ 120 │
│ s₂  │  3  │  2  │  0  │  1  │  90 │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │ -40 │ -50 │  0  │  0  │  0  │
└─────┴─────┴─────┴─────┴─────┴─────┘`,detailedSolution:`Step 1: Convert to standard form
Maximize Z = 40x + 50y + 0s₁ + 0s₂
Subject to:
2x + 3y + s₁ = 120
3x + 2y + s₂ = 90
x, y, s₁, s₂ ≥ 0

Step 2: Identify variables
Decision variables: x (chairs), y (tables)
Slack variables: s₁ (labor slack), s₂ (wood slack)

Step 3: Set up tableau
Columns: B, x, y, s₁, s₂, RHS

Step 4: Constraint rows
Row 1 (s₁): 2x + 3y + 1s₁ + 0s₂ = 120
Row 2 (s₂): 3x + 2y + 0s₁ + 1s₂ = 90

Step 5: Z row
Z - 40x - 50y = 0
Z row: [-40, -50, 0, 0, 0]

Step 6: Initial basic variables
s₁ = 120, s₂ = 90
Z = 0`}],w=[{id:1,title:"Construct Tableau",problem:`Construct the initial simplex tableau for:
Maximize Z = 2x + 3y
Subject to:
4x + y ≤ 12
x + 3y ≤ 9
x, y ≥ 0`,hint:"Add slack variables and set up the tableau with basic variables.",solution:`Tableau:
B | x | y | s₁ | s₂ | RHS
s₁| 4 | 1 | 1 | 0 | 12
s₂| 1 | 3 | 0 | 1 | 9
Z |-2 |-3 | 0 | 0 | 0`},{id:2,title:"Tableau with Minimization",problem:`Construct the initial simplex tableau (Big-M) for:
Minimize Z = 5x + 4y
Subject to:
x + 2y ≥ 10
3x + y ≥ 12
x, y ≥ 0`,hint:"Convert to maximization, add surplus and artificial variables.",solution:`Tableau with Big-M:
B | x | y | s₁ | s₂ | a₁ | a₂ | RHS
a₁| 1 | 2 |-1 | 0 | 1 | 0 | 10
a₂| 3 | 1 | 0 |-1 | 0 | 1 | 12
Z |-5 |-4 | 0 | 0 | M | M | 0`},{id:3,title:"Tableau with Mixed Constraints",problem:`Construct the initial simplex tableau for:
Maximize Z = 6x + 8y
Subject to:
2x + 3y ≤ 24
x + 5y ≥ 15
x + 2y = 10
x, y ≥ 0`,hint:"Use slack for ≤, surplus+artificial for ≥, artificial for =.",solution:`Tableau with Big-M:
B | x | y | s₁ | s₂ | a₁ | a₂ | RHS
s₁| 2 | 3 | 1 | 0 | 0 | 0 | 24
a₁| 1 | 5 | 0 |-1 | 1 | 0 | 15
a₂| 1 | 2 | 0 | 0 | 0 | 1 | 10
Z |-6 |-8 | 0 | 0 | M | M | 0`}],N=a=>{p(i=>({...i,[a]:!i[a]}))},k=()=>{const[a,i]=r.useState(2),[m,I]=r.useState(1),[o,A]=r.useState(10),[d,S]=r.useState(1),[g,z]=r.useState(2),[c,W]=r.useState(8),[x,T]=r.useState(3),[b,M]=r.useState(2);return e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4",children:"Interactive Tableau Builder"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400",children:["Constraint 1: ",a,"x + ",m,"y ≤ ",o]}),e.jsx("input",{type:"range",min:"1",max:"10",value:a,onChange:t=>i(Number(t.target.value)),className:"w-full"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400",children:["Constraint 2: ",d,"x + ",g,"y ≤ ",c]}),e.jsx("input",{type:"range",min:"1",max:"10",value:d,onChange:t=>S(Number(t.target.value)),className:"w-full"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400",children:["Objective: Z = ",x,"x + ",b,"y"]}),e.jsx("input",{type:"range",min:"1",max:"10",value:x,onChange:t=>T(Number(t.target.value)),className:"w-full"}),e.jsx("input",{type:"range",min:"1",max:"10",value:b,onChange:t=>M(Number(t.target.value)),className:"w-full"})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 overflow-x-auto",children:[e.jsx("h5",{className:"text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",children:"Initial Simplex Tableau"}),e.jsxs("table",{className:"w-full text-xs font-mono",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-gray-600 dark:text-gray-400",children:[e.jsx("th",{className:"px-2 py-1 border dark:border-gray-600",children:"B"}),e.jsx("th",{className:"px-2 py-1 border dark:border-gray-600",children:"x"}),e.jsx("th",{className:"px-2 py-1 border dark:border-gray-600",children:"y"}),e.jsx("th",{className:"px-2 py-1 border dark:border-gray-600",children:"s₁"}),e.jsx("th",{className:"px-2 py-1 border dark:border-gray-600",children:"s₂"}),e.jsx("th",{className:"px-2 py-1 border dark:border-gray-600",children:"RHS"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"px-2 py-1 border dark:border-gray-600 font-medium",children:"s₁"}),e.jsx("td",{className:"px-2 py-1 border dark:border-gray-600 text-center",children:a}),e.jsx("td",{className:"px-2 py-1 border dark:border-gray-600 text-center",children:m}),e.jsx("td",{className:"px-2 py-1 border dark:border-gray-600 text-center",children:"1"}),e.jsx("td",{className:"px-2 py-1 border dark:border-gray-600 text-center",children:"0"}),e.jsx("td",{className:"px-2 py-1 border dark:border-gray-600 text-center",children:o})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-2 py-1 border dark:border-gray-600 font-medium",children:"s₂"}),e.jsx("td",{className:"px-2 py-1 border dark:border-gray-600 text-center",children:d}),e.jsx("td",{className:"px-2 py-1 border dark:border-gray-600 text-center",children:g}),e.jsx("td",{className:"px-2 py-1 border dark:border-gray-600 text-center",children:"0"}),e.jsx("td",{className:"px-2 py-1 border dark:border-gray-600 text-center",children:"1"}),e.jsx("td",{className:"px-2 py-1 border dark:border-gray-600 text-center",children:c})]}),e.jsxs("tr",{className:"bg-yellow-50 dark:bg-yellow-900/20",children:[e.jsx("td",{className:"px-2 py-1 border dark:border-gray-600 font-medium",children:"Z"}),e.jsxs("td",{className:"px-2 py-1 border dark:border-gray-600 text-center",children:["-",x]}),e.jsxs("td",{className:"px-2 py-1 border dark:border-gray-600 text-center",children:["-",b]}),e.jsx("td",{className:"px-2 py-1 border dark:border-gray-600 text-center",children:"0"}),e.jsx("td",{className:"px-2 py-1 border dark:border-gray-600 text-center",children:"0"}),e.jsx("td",{className:"px-2 py-1 border dark:border-gray-600 text-center",children:"0"})]})]})]})]}),e.jsxs("div",{className:"mt-3 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-xs text-gray-600 dark:text-gray-400",children:["Basic variables: s₁ = ",o,", s₂ = ",c,", Z = 0"]})]})]})]})};return e.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[e.jsxs("div",{className:"text-center mb-10",children:[e.jsx("h1",{className:"text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-all duration-300",children:"Initial Simplex Tableau"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto",children:"Learn how to construct the initial simplex tableau, the starting point for the Simplex Method algorithm."})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 justify-center border-b border-gray-200 dark:border-gray-700 pb-4",children:j.map(a=>e.jsx("button",{onClick:()=>u(a.id),className:Z("px-6 py-2 rounded-lg font-medium transition-all duration-300",s===a.id?"bg-purple-600 text-white shadow-lg shadow-purple-200 dark:shadow-purple-900/30":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-md"),children:a.label},a.id))}),e.jsxs("div",{className:"space-y-8",children:[s==="concept"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"What is the Initial Simplex Tableau?"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 leading-relaxed mb-4",children:"The initial simplex tableau is a structured table that represents the LP problem in standard form. It organizes all coefficients of the constraints and objective function into a matrix format that can be manipulated through row operations. The tableau is the starting point for the Simplex Method iterations."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Tableau Structure"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Columns for each variable"}),e.jsx("li",{children:"Rows for each constraint"}),e.jsx("li",{children:"Basic variables column (B)"}),e.jsx("li",{children:"Right-hand side (RHS) column"}),e.jsx("li",{children:"Objective function row (Z)"})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Why It Matters"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Organizes the problem systematically"}),e.jsx("li",{children:"Enables row operations"}),e.jsx("li",{children:"Shows initial basic feasible solution"}),e.jsx("li",{children:"Foundation for all iterations"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"How to Build the Initial Tableau"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg",children:[e.jsx("div",{className:"text-4xl mb-2",children:"📝"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Step 1"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Convert to standard form"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg",children:[e.jsx("div",{className:"text-4xl mb-2",children:"📋"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Step 2"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Identify basic variables"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg",children:[e.jsx("div",{className:"text-4xl mb-2",children:"📊"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Step 3"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Write constraint rows"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg",children:[e.jsx("div",{className:"text-4xl mb-2",children:"💰"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Step 4"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Write Z row"})]})]})]}),e.jsx(k,{}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"Tableau Layout Guide"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-100 dark:bg-gray-700",children:[e.jsx("th",{className:"px-4 py-2 border dark:border-gray-600 text-left",children:"Part"}),e.jsx("th",{className:"px-4 py-2 border dark:border-gray-600 text-left",children:"Description"}),e.jsx("th",{className:"px-4 py-2 border dark:border-gray-600 text-left",children:"Example"})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50",children:[e.jsx("td",{className:"px-4 py-2 border dark:border-gray-600 font-medium",children:"B Column"}),e.jsx("td",{className:"px-4 py-2 border dark:border-gray-600",children:"Basic variables (initial: slack/artificial)"}),e.jsx("td",{className:"px-4 py-2 border dark:border-gray-600 font-mono",children:"s₁, s₂"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50",children:[e.jsx("td",{className:"px-4 py-2 border dark:border-gray-600 font-medium",children:"Variable Columns"}),e.jsx("td",{className:"px-4 py-2 border dark:border-gray-600",children:"Coefficients for each variable"}),e.jsx("td",{className:"px-4 py-2 border dark:border-gray-600 font-mono",children:"x, y, s₁, s₂"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50",children:[e.jsx("td",{className:"px-4 py-2 border dark:border-gray-600 font-medium",children:"RHS Column"}),e.jsx("td",{className:"px-4 py-2 border dark:border-gray-600",children:"Right-hand side values"}),e.jsx("td",{className:"px-4 py-2 border dark:border-gray-600 font-mono",children:"10, 8"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50",children:[e.jsx("td",{className:"px-4 py-2 border dark:border-gray-600 font-medium",children:"Z Row"}),e.jsx("td",{className:"px-4 py-2 border dark:border-gray-600",children:"Objective coefficients (negative for max)"}),e.jsx("td",{className:"px-4 py-2 border dark:border-gray-600 font-mono",children:"-3, -2, 0, 0, 0"})]})]})]})})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"💡 Tips & Tricks for Building Tableaus"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h4",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"Professional Tips"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"List variables in consistent order"}),e.jsx("li",{children:"Use clear notation for basic variables"}),e.jsx("li",{children:"Double-check all coefficients"}),e.jsx("li",{children:"Verify Z row signs (negative for max)"})]})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500",children:[e.jsx("h4",{className:"font-semibold text-purple-700 dark:text-purple-400 mb-2",children:"Common Mistakes"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Wrong signs in Z row"}),e.jsx("li",{children:"Forgetting slack variables"}),e.jsx("li",{children:"Incorrect basic variable identification"}),e.jsx("li",{children:"Misplacing coefficients"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"✅ Mini Checklist"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Problem in standard form"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"All variables identified"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Basic variables correct"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Constraint rows complete"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Z row correct signs"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Initial solution feasible"})]})]})]})]}),s==="examples"&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"space-y-6",children:f.map(a=>e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-bold text-gray-800 dark:text-gray-200 mb-3",children:a.title}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h5",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Problem"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:a.problem})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h5",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Initial Tableau"}),e.jsx("pre",{className:"text-xs font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:a.solution})]})]}),e.jsx("div",{className:"mt-4 flex justify-center",children:e.jsx("button",{onClick:()=>N(a.id),className:"px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300",children:h[a.id]?"Hide Construction Steps":"Show Construction Steps"})}),h[a.id]&&e.jsxs("div",{className:"mt-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h5",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"📝 Construction Steps"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:a.detailedSolution})]})]},`example-${a.id}`))})}),s==="practice"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center",children:"Practice Problems"}),e.jsx("div",{className:"space-y-6",children:w.map(a=>e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 transition-all duration-300 hover:shadow-md",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:a.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:a.problem}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>y(n===a.id?null:a.id),className:"px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-all duration-300",children:n===a.id?"Hide Solution":"Check Solution"}),e.jsx("button",{onClick:()=>v(l===a.id?null:a.id),className:"px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300",children:l===a.id?"Hide Hint":"Show Hint"})]}),l===a.id&&e.jsx("div",{className:"mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800",children:e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"💡 Hint:"})," ",a.hint]})}),n===a.id&&e.jsx("div",{className:"mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800",children:e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono",children:a.solution})})]},a.id))})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800",children:[e.jsx("h4",{className:"font-semibold text-purple-700 dark:text-purple-400 mb-2",children:"💡 Tips for Building Tableaus"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Be systematic:"})," Follow the steps in order"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Check signs:"})," Z row uses negative coefficients for maximization"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Verify basic variables:"})," They should form an identity matrix"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Double-check RHS:"})," All values should be non-negative"]})]})]})]})]}),e.jsx("div",{className:"mt-12",children:e.jsx(B,{title:"Initial Simplex Tableau FAQs",questions:H})}),e.jsx("div",{className:"mt-8",children:e.jsx(R,{content:E,title:"Initial Simplex Tableau",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Note",downloadFileName:"topic5_note.txt"})}),e.jsx("div",{className:"mt-8",children:e.jsx(C,{note:"The initial simplex tableau is where the Simplex Method truly begins. I tell my students that constructing the tableau is like setting up a chess board - you need to place every piece correctly before you can start playing. The key is to be meticulous: one wrong coefficient or sign can lead to incorrect results. I encourage students to practice building tableaus until they can do it quickly and accurately."})})]})})};export{K as default};
