import{b as s,j as e,bg as W}from"./vendor-react-core-Doz9nIC6.js";import{T as M}from"./TeacherSukantaHui-BaJcBHAy.js";import{F as Z}from"./FAQTemplate-BHhlgA96.js";import{P as V}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-8ao-0upJ.js";const R=[{question:"What is a slack variable?",shortAnswer:"A non-negative variable added to a ≤ constraint to convert it to an equality.",explanation:"Slack variables represent unused resources. For constraint a₁x₁ + a₂x₂ ≤ b, slack s = b - (a₁x₁ + a₂x₂), with s ≥ 0.",hint:"Added to ≤ constraints.",level:"basic",codeExample:"2x + y ≤ 10 → 2x + y + s = 10, s ≥ 0"},{question:"What do slack variables represent in real-world problems?",shortAnswer:"Unused resources or idle capacity.",explanation:"Slack variables measure how much of a resource is left unused at a given solution. They represent excess capacity that could be used.",hint:"Unused capacity.",level:"intermediate",codeExample:"s₁ = unused labor hours, s₂ = unused machine hours"},{question:"What is the coefficient of a slack variable in the objective function?",shortAnswer:"Zero.",explanation:"Slack variables don't contribute to profit or cost. They are added only to convert constraints to equalities.",hint:"Zero coefficient.",level:"basic",codeExample:"Z = 3x + 2y + 0s₁ + 0s₂"},{question:"Why must slack variables be non-negative?",shortAnswer:"Resource usage cannot exceed availability, so slack ≥ 0.",explanation:"Since usage ≤ availability, slack = availability - usage ≥ 0. Negative slack would mean using more than available.",hint:"Cannot use more than available.",level:"intermediate",codeExample:"s = 10 - (2x + y) ≥ 0"},{question:"How many slack variables are needed?",shortAnswer:"One for each ≤ constraint.",explanation:"Each ≤ constraint requires one slack variable to convert it to an equality.",hint:"One per ≤ constraint.",level:"basic",codeExample:"3 constraints → 3 slack variables"},{question:"What is the difference between slack and surplus variables?",shortAnswer:"Slack is added to ≤ constraints; surplus is subtracted from ≥ constraints.",explanation:"Both convert inequalities to equalities. Slack represents unused resources, surplus represents excess over requirements.",hint:"Slack for ≤, surplus for ≥.",level:"intermediate",codeExample:"≤ → +s, ≥ → -s"},{question:"What happens to slack variables at the optimal solution?",shortAnswer:"Some may be zero (binding constraints), some may be positive (non-binding).",explanation:"At optimality, slack variables indicate which resources are fully utilized (slack = 0) and which have unused capacity (slack > 0).",hint:"Zero = fully utilized, positive = unused capacity.",level:"advanced",codeExample:"s₁ = 0 (fully utilized), s₂ = 10 (10 units slack)"},{question:"What is the initial basic feasible solution using slack variables?",shortAnswer:"Set all original variables to zero; slack variables equal RHS values.",explanation:"The initial basic feasible solution is: x = 0, y = 0, s₁ = b₁, s₂ = b₂, ... This is always feasible.",hint:"Original variables = 0, slack = RHS.",level:"advanced",codeExample:"x = 0, y = 0, s₁ = 10, s₂ = 8"},{question:"Are slack variables part of the final optimal solution?",shortAnswer:"Yes, their values indicate resource utilization.",explanation:"At optimality, slack variables show how much of each resource is unused. This information is valuable for sensitivity analysis.",hint:"Yes, they show unused resources.",level:"intermediate",codeExample:"s₁ = 0, s₂ = 10 → resource 1 fully used, resource 2 has slack"},{question:"What does a zero slack variable indicate?",shortAnswer:"The corresponding resource is fully utilized (binding constraint).",explanation:"When slack = 0, the constraint is binding at the optimal solution. The resource is completely used up.",hint:"Fully utilized resource.",level:"intermediate",codeExample:"s₁ = 0 → labor fully utilized"},{question:"What does a positive slack variable indicate?",shortAnswer:"The corresponding resource has unused capacity.",explanation:"When slack > 0, the constraint is non-binding. The resource is not fully utilized.",hint:"Unused capacity.",level:"intermediate",codeExample:"s₂ = 10 → 10 units of machine time unused"},{question:"How do you write the objective function with slack variables?",shortAnswer:"Add slack variables with zero coefficients.",explanation:"Since slack variables don't affect the objective value, they are added with coefficient 0.",hint:"Zero coefficients.",level:"basic",codeExample:"Z = 3x + 2y + 0s₁ + 0s₂"},{question:"What is the role of slack variables in the simplex tableau?",shortAnswer:"They form the initial basis and are part of the tableau columns.",explanation:"Slack variables are the basic variables in the initial simplex tableau, forming an identity matrix.",hint:"Form the initial basis.",level:"advanced",codeExample:"Columns for s₁, s₂ form identity matrix"},{question:"Can slack variables be basic variables?",shortAnswer:"Yes, they are the initial basic variables.",explanation:"Slack variables start as basic variables (with value RHS) and may leave the basis during simplex iterations.",hint:"Initial basic variables.",level:"advanced",codeExample:"s₁ = 10, s₂ = 8 (basic variables)"},{question:"What happens to slack variables when a constraint is binding?",shortAnswer:"The slack variable becomes zero.",explanation:"When a constraint is binding, LHS = RHS, so slack = 0. The resource is fully utilized.",hint:"Binding constraint → slack = 0.",level:"intermediate",codeExample:"2x + y = 10 → s₁ = 0"},{question:"What is the economic interpretation of slack variables?",shortAnswer:"They represent idle resources or excess capacity.",explanation:"Slack variables tell managers how much of each resource is not being used. This can indicate opportunities for additional production.",hint:"Idle resources.",level:"intermediate",codeExample:"s₁ = idle labor hours, s₂ = unused materials"},{question:"Why do we need slack variables in the Simplex Method?",shortAnswer:"To convert inequalities to equalities for algebraic solution.",explanation:"The Simplex Method requires equality constraints to work with basic feasible solutions and perform row operations.",hint:"Convert to equalities.",level:"intermediate",codeExample:"Inequalities → equalities → simplex tableau"},{question:"What is the difference between a slack variable and a regular variable?",shortAnswer:"Slack variables are added artificially and have zero objective coefficients.",explanation:"Regular variables represent actual decisions. Slack variables represent unused resources and have no objective value.",hint:"Artificial vs. decision variables.",level:"intermediate",codeExample:"x, y = decision variables, s₁, s₂ = slack variables"}],F=`TOPIC 2: SLACK VARIABLES\r
========================\r
\r
INTRODUCTION\r
------------\r
Slack variables are non-negative variables added to ≤ constraints \r
to convert them into equalities. They represent unused resources \r
and are essential for the Simplex Method.\r
\r
WHAT ARE SLACK VARIABLES?\r
-------------------------\r
For constraint: a₁x₁ + a₂x₂ ≤ b\r
Add slack variable s ≥ 0:\r
a₁x₁ + a₂x₂ + s = b\r
where s = b - (a₁x₁ + a₂x₂)\r
\r
KEY PROPERTIES\r
--------------\r
1. Non-negative: s ≥ 0\r
2. One per ≤ constraint\r
3. Zero coefficient in objective\r
4. Represent unused resources\r
\r
HOW TO ADD SLACK VARIABLES\r
--------------------------\r
Step 1: Identify ≤ constraints\r
Step 2: Add one slack variable per constraint\r
Step 3: Write as equality with slack variable\r
Step 4: Add to objective with coefficient 0\r
\r
EXAMPLE\r
-------\r
Original:\r
2x + y ≤ 10\r
x + 2y ≤ 8\r
\r
With Slack Variables:\r
2x + y + s₁ = 10\r
x + 2y + s₂ = 8\r
s₁, s₂ ≥ 0\r
\r
INTERPRETATION\r
--------------\r
s₁ = 10 - (2x + y) → unused resource 1\r
s₂ = 8 - (x + 2y) → unused resource 2\r
\r
At optimal solution (4, 2):\r
s₁ = 10 - (8 + 2) = 0 (fully utilized)\r
s₂ = 8 - (4 + 4) = 0 (fully utilized)\r
\r
INITIAL BASIC SOLUTION\r
----------------------\r
Set original variables to zero:\r
x = 0, y = 0\r
s₁ = b₁, s₂ = b₂, ...\r
\r
This is always a feasible solution.\r
\r
ROLE IN SIMPLEX METHOD\r
----------------------\r
1. Convert inequalities to equalities\r
2. Form initial basis (identity matrix)\r
3. Represent unused resources\r
4. Indicate binding constraints\r
\r
COMMON MISTAKES\r
---------------\r
1. Forgetting non-negativity\r
2. Adding slack to ≥ constraints\r
3. Giving slack variables objective coefficients\r
4. Confusing slack with surplus\r
\r
BEST PRACTICES\r
--------------\r
1. Use different names (s₁, s₂, s₃)\r
2. Remember zero objective coefficients\r
3. Interpret slack as unused resources\r
4. Check non-negativity\r
\r
TEACHER'S NOTE\r
--------------\r
Slack variables are the bridge between inequalities and equalities. \r
They represent real unused capacity that managers can use for \r
decision-making. When slack is zero, the resource is fully utilized; \r
when positive, there's room for growth."`,X=()=>{const[o,p]=s.useState("concept"),[g,v]=s.useState({}),[b,k]=s.useState(null),[m,f]=s.useState(null),j=[{id:"concept",label:"Concept"},{id:"examples",label:"Examples"},{id:"practice",label:"Practice"}],S=[{id:1,title:"Example 1: Basic Slack Variables",problem:`Convert to standard form using slack variables:
Maximize Z = 3x + 2y
Subject to:
2x + y ≤ 10
x + 2y ≤ 8
x ≥ 0, y ≥ 0`,solution:`Slack variables s₁ and s₂ added:
Maximize Z = 3x + 2y + 0s₁ + 0s₂
Subject to:
2x + y + s₁ = 10
x + 2y + s₂ = 8
x, y, s₁, s₂ ≥ 0`,detailedSolution:`Step 1: Identify constraints with ≤
Constraint 1: 2x + y ≤ 10
Constraint 2: x + 2y ≤ 8

Step 2: Add slack variables
For each ≤ constraint, add a non-negative slack variable:
2x + y + s₁ = 10 (s₁ ≥ 0)
x + 2y + s₂ = 8 (s₂ ≥ 0)

Step 3: Update objective function
Slack variables have zero coefficients:
Z = 3x + 2y + 0s₁ + 0s₂

Step 4: Interpret slack variables
s₁ = 10 - (2x + y) → unused labor
s₂ = 8 - (x + 2y) → unused machine time`},{id:2,title:"Example 2: Slack Variables in Production",problem:`A factory produces chairs (x) and tables (y).
Maximize Z = 40x + 50y
Subject to:
2x + 3y ≤ 120 (Labor hours)
3x + 2y ≤ 90 (Wood units)
x ≥ 0, y ≥ 0

Convert to standard form and interpret slack variables.`,solution:`Maximize Z = 40x + 50y + 0s₁ + 0s₂
Subject to:
2x + 3y + s₁ = 120
3x + 2y + s₂ = 90
x, y, s₁, s₂ ≥ 0`,detailedSolution:`Step 1: Identify resources
- Labor: 2x + 3y ≤ 120
- Wood: 3x + 2y ≤ 90

Step 2: Add slack variables
s₁ = 120 - (2x + 3y) → unused labor hours
s₂ = 90 - (3x + 2y) → unused wood units

Step 3: Write in standard form
Maximize Z = 40x + 50y + 0s₁ + 0s₂
Subject to:
2x + 3y + s₁ = 120
3x + 2y + s₂ = 90
x, y, s₁, s₂ ≥ 0

Step 4: At optimal solution (0, 40):
s₁ = 120 - 0 - 120 = 0 (labor fully utilized)
s₂ = 90 - 0 - 80 = 10 (10 wood units slack)`},{id:3,title:"Example 3: Slack Variables with Three Constraints",problem:`Convert to standard form:
Maximize Z = 5x + 4y
Subject to:
3x + 2y ≤ 18
x + 4y ≤ 16
2x + y ≤ 12
x ≥ 0, y ≥ 0`,solution:`Maximize Z = 5x + 4y + 0s₁ + 0s₂ + 0s₃
Subject to:
3x + 2y + s₁ = 18
x + 4y + s₂ = 16
2x + y + s₃ = 12
x, y, s₁, s₂, s₃ ≥ 0`,detailedSolution:`Step 1: Identify all ≤ constraints
Constraint 1: 3x + 2y ≤ 18
Constraint 2: x + 4y ≤ 16
Constraint 3: 2x + y ≤ 12

Step 2: Add slack variables
s₁ = 18 - (3x + 2y)
s₂ = 16 - (x + 4y)
s₃ = 12 - (2x + y)

Step 3: Write in standard form
Maximize Z = 5x + 4y + 0s₁ + 0s₂ + 0s₃
Subject to:
3x + 2y + s₁ = 18
x + 4y + s₂ = 16
2x + y + s₃ = 12
x, y, s₁, s₂, s₃ ≥ 0

Step 4: Interpret
Each slack variable represents unused capacity of a resource.`},{id:4,title:"Example 4: Slack Variables in Real-World Context",problem:`A bakery produces cakes (x) and pastries (y).
Maximize Z = 15x + 10y
Subject to:
2x + y ≤ 50 (Flour kg)
3x + 2y ≤ 60 (Labor hours)
x + 2y ≤ 40 (Sugar kg)
x ≥ 0, y ≥ 0

Convert to standard form and explain what each slack variable means.`,solution:`Maximize Z = 15x + 10y + 0s₁ + 0s₂ + 0s₃
Subject to:
2x + y + s₁ = 50
3x + 2y + s₂ = 60
x + 2y + s₃ = 40
x, y, s₁, s₂, s₃ ≥ 0`,detailedSolution:`Step 1: Identify resources
- Flour: 2x + y ≤ 50
- Labor: 3x + 2y ≤ 60
- Sugar: x + 2y ≤ 40

Step 2: Add slack variables
s₁ = 50 - (2x + y) → unused flour (kg)
s₂ = 60 - (3x + 2y) → unused labor (hours)
s₃ = 40 - (x + 2y) → unused sugar (kg)

Step 3: Standard form
Maximize Z = 15x + 10y + 0s₁ + 0s₂ + 0s₃
Subject to:
2x + y + s₁ = 50
3x + 2y + s₂ = 60
x + 2y + s₃ = 40
x, y, s₁, s₂, s₃ ≥ 0

Step 4: Business interpretation
- s₁: Extra flour that could be used for more production
- s₂: Idle labor hours
- s₃: Unused sugar inventory`}],N=[{id:1,title:"Add Slack Variables",problem:`Convert to standard form by adding slack variables:
Maximize Z = 2x + 3y
Subject to:
4x + y ≤ 12
x + 3y ≤ 9
x ≥ 0, y ≥ 0`,hint:"Add one slack variable for each ≤ constraint.",solution:`Maximize Z = 2x + 3y + 0s₁ + 0s₂
Subject to:
4x + y + s₁ = 12
x + 3y + s₂ = 9
x, y, s₁, s₂ ≥ 0`},{id:2,title:"Slack Variables with Three Constraints",problem:`Convert to standard form:
Maximize Z = 5x + 6y
Subject to:
2x + 3y ≤ 24
x + y ≤ 10
3x + 2y ≤ 18
x ≥ 0, y ≥ 0`,hint:"Add three slack variables, one for each constraint.",solution:`Maximize Z = 5x + 6y + 0s₁ + 0s₂ + 0s₃
Subject to:
2x + 3y + s₁ = 24
x + y + s₂ = 10
3x + 2y + s₃ = 18
x, y, s₁, s₂, s₃ ≥ 0`},{id:3,title:"Interpret Slack Variables",problem:`A factory produces two products. The LP problem is:
Maximize Z = 4x + 5y
Subject to:
2x + 3y ≤ 100
4x + y ≤ 80
x ≥ 0, y ≥ 0

Convert to standard form and explain what each slack variable represents.`,hint:"Identify what each resource represents and what the slack variable measures.",solution:`Maximize Z = 4x + 5y + 0s₁ + 0s₂
Subject to:
2x + 3y + s₁ = 100
4x + y + s₂ = 80
x, y, s₁, s₂ ≥ 0
s₁: unused resource 1, s₂: unused resource 2`}],w=a=>{v(d=>({...d,[a]:!d[a]}))},A=()=>{const[a,d]=s.useState(2),[c,H]=s.useState(3),[x,O]=s.useState(12),[n,T]=s.useState(3),[u,L]=s.useState(2),[h,P]=s.useState(18),E=(t,y)=>{const z=x-(a*t+c*y),q=h-(n*t+u*y);return{s1:z,s2:q}},[i,C]=s.useState(2),[l,I]=s.useState(3),r=E(i,l);return e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4",children:"Interactive Slack Variable Calculator"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400",children:["Constraint 1: ",a,"x + ",c,"y ≤ ",x]}),e.jsx("input",{type:"range",min:"1",max:"10",value:a,onChange:t=>d(Number(t.target.value)),className:"w-full"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400",children:["Constraint 2: ",n,"x + ",u,"y ≤ ",h]}),e.jsx("input",{type:"range",min:"1",max:"10",value:n,onChange:t=>T(Number(t.target.value)),className:"w-full"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400",children:["x value: ",i]}),e.jsx("input",{type:"range",min:"0",max:"10",value:i,onChange:t=>C(Number(t.target.value)),className:"w-full"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400",children:["y value: ",l]}),e.jsx("input",{type:"range",min:"0",max:"10",value:l,onChange:t=>I(Number(t.target.value)),className:"w-full"})]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:[e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:e.jsx("span",{className:"font-semibold",children:"Slack Variables:"})}),e.jsxs("p",{className:"text-sm font-mono text-gray-700 dark:text-gray-300",children:["s₁ = ",x," - (",a,"×",i," + ",c,"×",l,") = ",r.s1.toFixed(1)]}),e.jsxs("p",{className:"text-sm font-mono text-gray-700 dark:text-gray-300",children:["s₂ = ",h," - (",n,"×",i," + ",u,"×",l,") = ",r.s2.toFixed(1)]})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h5",{className:"text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",children:"Standard Form"}),e.jsxs("pre",{className:"text-xs font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:["Maximize Z = c₁x + c₂y + 0s₁ + 0s₂ Subject to:",a,"x + ",c,"y + s₁ = ",x,n,"x + ",u,"y + s₂ = ",h,"x, y, s₁, s₂ ≥ 0"]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:e.jsx("span",{className:"font-semibold",children:"Interpretation:"})}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:["s₁ = ",r.s1.toFixed(1)," → ",r.s1>=0?"Unused capacity":"Infeasible (negative slack)"]}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:["s₂ = ",r.s2.toFixed(1)," → ",r.s2>=0?"Unused capacity":"Infeasible (negative slack)"]})]})]})]})]})};return e.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[e.jsxs("div",{className:"text-center mb-10",children:[e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-all duration-300",children:"Slack Variables"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto",children:"Learn about slack variables, their purpose in converting ≤ constraints to equalities, and their interpretation in the Simplex Method."})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 justify-center border-b border-gray-200 dark:border-gray-700 pb-4",children:j.map(a=>e.jsx("button",{onClick:()=>p(a.id),className:W("px-6 py-2 rounded-lg font-medium transition-all duration-300",o===a.id?"bg-green-600 text-white shadow-lg shadow-green-200 dark:shadow-green-900/30":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-md"),children:a.label},a.id))}),e.jsxs("div",{className:"space-y-8",children:[o==="concept"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"What are Slack Variables?"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 leading-relaxed mb-4",children:'Slack variables are non-negative variables added to ≤ constraints to convert them into equalities. They represent the unused or "slack" capacity of resources. In the Simplex Method, slack variables are essential for creating the initial basic feasible solution.'}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Key Concepts"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Convert ≤ to ="}),e.jsx("li",{children:"Represent unused resources"}),e.jsx("li",{children:"Non-negative by definition"}),e.jsx("li",{children:"Zero coefficient in objective"}),e.jsx("li",{children:"Initial basic variables"})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Why They Matter"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Enable standard form"}),e.jsx("li",{children:"Create initial feasible solution"}),e.jsx("li",{children:"Identify unused capacity"}),e.jsx("li",{children:"Foundation for simplex tableau"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"How Slack Variables Work"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Step 1"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Identify ≤ constraints"}),e.jsx("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:"2x + y ≤ 10"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Step 2"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Add slack variable"}),e.jsx("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:"2x + y + s₁ = 10"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Step 3"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Interpret as unused capacity"}),e.jsx("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:"s₁ = 10 - (2x + y)"})]})]})]}),e.jsx(A,{}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"💡 Tips & Tricks for Slack Variables"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h4",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"Professional Tips"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Always use non-negative slack variables"}),e.jsx("li",{children:"Slack variables have zero objective coefficients"}),e.jsx("li",{children:"Each ≤ constraint gets one slack variable"}),e.jsx("li",{children:"Slack variables measure unused resources"})]})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500",children:[e.jsx("h4",{className:"font-semibold text-purple-700 dark:text-purple-400 mb-2",children:"Common Mistakes"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Forgetting non-negativity for slack variables"}),e.jsx("li",{children:"Adding slack to ≥ constraints"}),e.jsx("li",{children:"Giving slack variables objective coefficients"}),e.jsx("li",{children:"Confusing slack with surplus"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"✅ Mini Checklist"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"≤ constraints identified"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Slack variables added correctly"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Slack variables ≥ 0"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Zero objective coefficients"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Interpretation of slack understood"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Ready for simplex tableau"})]})]})]})]}),o==="examples"&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"space-y-6",children:S.map(a=>e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-bold text-gray-800 dark:text-gray-200 mb-3",children:a.title}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h5",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Original Problem"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:a.problem})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h5",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"With Slack Variables"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:a.solution})]})]}),e.jsx("div",{className:"mt-4 flex justify-center",children:e.jsx("button",{onClick:()=>w(a.id),className:"px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300",children:g[a.id]?"Hide Detailed Steps":"Show Detailed Steps"})}),g[a.id]&&e.jsxs("div",{className:"mt-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h5",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"📝 Detailed Steps"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:a.detailedSolution})]})]},`example-${a.id}`))})}),o==="practice"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center",children:"Practice Problems"}),e.jsx("div",{className:"space-y-6",children:N.map(a=>e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 transition-all duration-300 hover:shadow-md",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:a.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:a.problem}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>k(b===a.id?null:a.id),className:"px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-all duration-300",children:b===a.id?"Hide Solution":"Check Solution"}),e.jsx("button",{onClick:()=>f(m===a.id?null:a.id),className:"px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300",children:m===a.id?"Hide Hint":"Show Hint"})]}),m===a.id&&e.jsx("div",{className:"mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800",children:e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"💡 Hint:"})," ",a.hint]})}),b===a.id&&e.jsx("div",{className:"mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800",children:e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono",children:a.solution})})]},a.id))})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"💡 Tips for Working with Slack Variables"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Identify ≤ constraints:"})," Each needs a slack variable"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Use different names:"})," s₁, s₂, s₃ for different constraints"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Remember non-negativity:"})," All slack variables ≥ 0"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Zero objective coefficients:"})," Slack variables don't affect Z"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Interpret as unused capacity:"})," Helps understand the solution"]})]})]})]})]}),e.jsx("div",{className:"mt-12",children:e.jsx(Z,{title:"Slack Variables FAQs",questions:R})}),e.jsx("div",{className:"mt-8",children:e.jsx(V,{content:F,title:"Slack Variables",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Note",downloadFileName:"topic2_note.txt"})}),e.jsx("div",{className:"mt-8",children:e.jsx(M,{note:"Slack variables are the bridge between inequalities and equalities. I tell my students that slack variables are like 'measuring sticks' for unused resources. The key insight is that slack variables are not just mathematical tools - they represent real unused capacity that managers can see and potentially use. When a slack variable is zero, the resource is fully utilized. When it's positive, there's room for growth. This interpretation makes slack variables meaningful beyond just the algebra."})})]})})};export{X as default};
