import{b as r,j as e,bg as R}from"./vendor-react-core-Doz9nIC6.js";import{T as H}from"./TeacherSukantaHui-ObIX4NbR.js";import{F as I}from"./FAQTemplate-CkSqDH4B.js";import{P as Z}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-CbUXUJ65.js";const V=[{question:"What is a surplus variable?",shortAnswer:"A non-negative variable subtracted from a ≥ constraint to convert it to an equality.",explanation:"Surplus variables represent excess over requirements. For constraint a₁x₁ + a₂x₂ ≥ b, surplus s = (a₁x₁ + a₂x₂) - b, with s ≥ 0.",hint:"Subtracted from ≥ constraints.",level:"basic",codeExample:"x + y ≥ 6 → x + y - s = 6, s ≥ 0"},{question:"What do surplus variables represent in real-world problems?",shortAnswer:"Excess over minimum requirements.",explanation:"Surplus variables measure how much a solution exceeds the minimum requirements. They represent 'extra' production, nutrients, or quality.",hint:"Excess over requirements.",level:"intermediate",codeExample:"s₁ = excess protein, s₂ = excess carbohydrates"},{question:"What is the difference between slack and surplus variables?",shortAnswer:"Slack is added to ≤ constraints; surplus is subtracted from ≥ constraints.",explanation:"Both convert inequalities to equalities. Slack represents unused resources, surplus represents excess over requirements.",hint:"Slack for ≤, surplus for ≥.",level:"intermediate",codeExample:"≤ → +s, ≥ → -s"},{question:"What is the coefficient of a surplus variable in the objective function?",shortAnswer:"Zero.",explanation:"Surplus variables don't contribute to profit or cost. They are only added to convert constraints to equalities.",hint:"Zero coefficient.",level:"basic",codeExample:"Z = 3x + 2y + 0s₁ + 0s₂"},{question:"Why must surplus variables be non-negative?",shortAnswer:"Excess over requirements cannot be negative.",explanation:"Since LHS ≥ RHS, surplus = LHS - RHS ≥ 0. Negative surplus would mean not meeting the requirement.",hint:"Cannot have negative excess.",level:"intermediate",codeExample:"s = (x + y) - 6 ≥ 0"},{question:"How many surplus variables are needed?",shortAnswer:"One for each ≥ constraint.",explanation:"Each ≥ constraint requires one surplus variable to convert it to an equality.",hint:"One per ≥ constraint.",level:"basic",codeExample:"3 constraints → 3 surplus variables"},{question:"What happens to surplus variables at the optimal solution?",shortAnswer:"They may be zero (binding constraints) or positive (excess).",explanation:"At optimality, surplus variables indicate which constraints are exactly met (surplus = 0) and which have excess (surplus > 0).",hint:"Zero = exactly met, positive = excess.",level:"advanced",codeExample:"s₁ = 0 (exactly met), s₂ = 5 (5 units excess)"},{question:"What is the initial basic feasible solution with surplus variables?",shortAnswer:"Surplus variables alone cannot form an initial feasible solution.",explanation:"Since surplus variables are subtracted, setting original variables to zero gives negative surplus. Artificial variables are needed for initial solution.",hint:"Need artificial variables.",level:"advanced",codeExample:"x = 0, y = 0 → s₁ = -6 (infeasible)"},{question:"Why do surplus variables require artificial variables?",shortAnswer:"They cannot form an initial basic feasible solution on their own.",explanation:"With only surplus variables, the initial solution is infeasible (negative values). Artificial variables are added to create a feasible starting point.",hint:"Need artificial variables for feasibility.",level:"advanced",codeExample:"x + y - s₁ = 6 → with x=0,y=0, s₁=-6 (infeasible)"},{question:"What does a zero surplus variable indicate?",shortAnswer:"The corresponding constraint is exactly met (binding).",explanation:"When surplus = 0, LHS = RHS. The constraint is binding at the optimal solution.",hint:"Exactly met requirement.",level:"intermediate",codeExample:"s₁ = 0 → protein requirement exactly met"},{question:"What does a positive surplus variable indicate?",shortAnswer:"The corresponding requirement is exceeded.",explanation:"When surplus > 0, LHS > RHS. The constraint is non-binding with excess capacity.",hint:"Exceeded requirement.",level:"intermediate",codeExample:"s₂ = 5 → 5 units excess carbohydrates"},{question:"How do you write the objective function with surplus variables?",shortAnswer:"Add surplus variables with zero coefficients.",explanation:"Since surplus variables don't affect the objective value, they are added with coefficient 0.",hint:"Zero coefficients.",level:"basic",codeExample:"Z' = -4x - 3y + 0s₁ + 0s₂"},{question:"What is the difference between slack and surplus in terms of inequality direction?",shortAnswer:"Slack: LHS ≤ RHS, Surplus: LHS ≥ RHS.",explanation:"Slack measures how much less than the RHS. Surplus measures how much greater than the RHS.",hint:"Slack = RHS - LHS, Surplus = LHS - RHS.",level:"intermediate",codeExample:"Slack: 10 - (2x+y), Surplus: (x+y) - 6"},{question:"What is the economic interpretation of surplus variables?",shortAnswer:"They represent excess production or over-fulfillment of requirements.",explanation:"Surplus variables tell managers how much they are exceeding minimum requirements. This can indicate inefficiency or quality above standards.",hint:"Excess over minimums.",level:"intermediate",codeExample:"s₁ = excess units produced, s₂ = excess quality"},{question:"Why do we need surplus variables in the Simplex Method?",shortAnswer:"To convert ≥ constraints to equalities for algebraic solution.",explanation:"The Simplex Method requires equality constraints to work with basic feasible solutions and perform row operations.",hint:"Convert to equalities.",level:"intermediate",codeExample:"Inequalities → equalities → simplex tableau"},{question:"What is the relationship between surplus variables and the Big-M Method?",shortAnswer:"Surplus variables require artificial variables in the Big-M Method.",explanation:"Since surplus variables alone don't provide a feasible starting solution, artificial variables are added with a large penalty (M) in the Big-M Method.",hint:"Need Big-M for ≥ constraints.",level:"advanced",codeExample:"Minimize M × artificial variables"},{question:"What is the difference between a surplus variable and a regular variable?",shortAnswer:"Surplus variables are added artificially and have zero objective coefficients.",explanation:"Regular variables represent actual decisions. Surplus variables represent excess over requirements and have no objective value.",hint:"Artificial vs. decision variables.",level:"intermediate",codeExample:"x, y = decision variables, s₁, s₂ = surplus variables"}],W=`TOPIC 3: SURPLUS VARIABLES\r
==========================\r
\r
INTRODUCTION\r
------------\r
Surplus variables are non-negative variables subtracted from ≥ \r
constraints to convert them into equalities. They represent the \r
excess over minimum requirements.\r
\r
WHAT ARE SURPLUS VARIABLES?\r
---------------------------\r
For constraint: a₁x₁ + a₂x₂ ≥ b\r
Subtract surplus variable s ≥ 0:\r
a₁x₁ + a₂x₂ - s = b\r
where s = (a₁x₁ + a₂x₂) - b\r
\r
KEY PROPERTIES\r
--------------\r
1. Non-negative: s ≥ 0\r
2. One per ≥ constraint\r
3. Zero coefficient in objective\r
4. Represent excess over requirements\r
\r
HOW TO ADD SURPLUS VARIABLES\r
----------------------------\r
Step 1: Identify ≥ constraints\r
Step 2: Subtract one surplus variable per constraint\r
Step 3: Write as equality with surplus variable\r
Step 4: Add to objective with coefficient 0\r
\r
EXAMPLE\r
-------\r
Original:\r
x + y ≥ 6\r
2x + y ≥ 8\r
\r
With Surplus Variables:\r
x + y - s₁ = 6\r
2x + y - s₂ = 8\r
s₁, s₂ ≥ 0\r
\r
INTERPRETATION\r
--------------\r
s₁ = (x + y) - 6 → excess over requirement 1\r
s₂ = (2x + y) - 8 → excess over requirement 2\r
\r
At optimal solution (4, 2):\r
s₁ = 6 - 6 = 0 (exactly met)\r
s₂ = 10 - 8 = 2 (2 units excess)\r
\r
SLACK VS SURPLUS\r
----------------\r
Slack Variables:\r
- Used for ≤ constraints\r
- Added to convert to equality\r
- s = RHS - LHS\r
- Represents UNUSED resources\r
\r
Surplus Variables:\r
- Used for ≥ constraints\r
- Subtracted to convert to equality\r
- s = LHS - RHS\r
- Represents EXCESS over requirements\r
\r
INITIAL FEASIBLE SOLUTION\r
-------------------------\r
Surplus variables alone cannot form an initial feasible solution.\r
Artificial variables are needed to get started.\r
Example: x = 0, y = 0 → s₁ = -6 (infeasible)\r
\r
ROLE IN BIG-M METHOD\r
--------------------\r
1. ≥ constraints require surplus variables\r
2. Surplus variables require artificial variables\r
3. Artificial variables penalized with M\r
4. Big-M Method handles ≥ and = constraints\r
\r
COMMON MISTAKES\r
---------------\r
1. Adding instead of subtracting surplus\r
2. Forgetting non-negativity\r
3. Confusing slack and surplus\r
4. Not converting minimization to maximization\r
\r
BEST PRACTICES\r
--------------\r
1. Use different names (s₁, s₂, s₃)\r
2. Remember zero objective coefficients\r
3. Interpret surplus as excess\r
4. Check non-negativity\r
\r
TEACHER'S NOTE\r
--------------\r
Surplus variables are the mirror image of slack variables. \r
Surplus measures 'how much extra' while slack measures \r
'how much is left over'. Remember: slack is added (+), \r
surplus is subtracted (-)."`,X=()=>{const[o,y]=r.useState("concept"),[b,v]=r.useState({}),[h,j]=r.useState(null),[g,f]=r.useState(null),S=[{id:"concept",label:"Concept"},{id:"examples",label:"Examples"},{id:"practice",label:"Practice"}],N=[{id:1,title:"Example 1: Basic Surplus Variables",problem:`Convert to standard form using surplus variables:
Minimize Z = 4x + 3y
Subject to:
x + y ≥ 6
2x + y ≥ 8
x ≥ 0, y ≥ 0`,solution:`Maximize Z' = -4x - 3y
Subject to:
x + y - s₁ = 6
2x + y - s₂ = 8
x, y, s₁, s₂ ≥ 0`,detailedSolution:`Step 1: Convert minimization to maximization
Min Z = 4x + 3y → Max Z' = -4x - 3y

Step 2: Identify ≥ constraints
Constraint 1: x + y ≥ 6
Constraint 2: 2x + y ≥ 8

Step 3: Add surplus variables
For each ≥ constraint, subtract a non-negative surplus variable:
x + y - s₁ = 6 (s₁ ≥ 0)
2x + y - s₂ = 8 (s₂ ≥ 0)

Step 4: Update objective function
Z' = -4x - 3y + 0s₁ + 0s₂

Step 5: Interpret surplus variables
s₁ = (x + y) - 6 → excess over requirement 1
s₂ = (2x + y) - 8 → excess over requirement 2`},{id:2,title:"Example 2: Surplus Variables in Diet Problem",problem:`A dietitian plans a meal:
Minimize Z = 20x + 30y
Subject to:
4x + 3y ≥ 24 (Protein)
3x + 5y ≥ 18 (Carbs)
x ≥ 0, y ≥ 0

Convert to standard form and interpret surplus variables.`,solution:`Maximize Z' = -20x - 30y
Subject to:
4x + 3y - s₁ = 24
3x + 5y - s₂ = 18
x, y, s₁, s₂ ≥ 0`,detailedSolution:`Step 1: Convert minimization to maximization
Min Z = 20x + 30y → Max Z' = -20x - 30y

Step 2: Identify requirements
- Protein: 4x + 3y ≥ 24
- Carbohydrates: 3x + 5y ≥ 18

Step 3: Add surplus variables
s₁ = (4x + 3y) - 24 → surplus protein
s₂ = (3x + 5y) - 18 → surplus carbs

Step 4: Write in standard form
Maximize Z' = -20x - 30y + 0s₁ + 0s₂
Subject to:
4x + 3y - s₁ = 24
3x + 5y - s₂ = 18
x, y, s₁, s₂ ≥ 0

Step 5: At optimal solution (6, 0):
s₁ = 4(6) + 3(0) - 24 = 0 (protein exactly met)
s₂ = 3(6) + 5(0) - 18 = 0 (carbs exactly met)`},{id:3,title:"Example 3: Mixed Constraints with Surplus",problem:`Convert to standard form:
Maximize Z = 5x + 7y
Subject to:
2x + 3y ≤ 18
x + 4y ≥ 12
3x + 2y ≥ 10
x ≥ 0, y ≥ 0`,solution:`Maximize Z = 5x + 7y + 0s₁ + 0s₂ + 0s₃
Subject to:
2x + 3y + s₁ = 18
x + 4y - s₂ = 12
3x + 2y - s₃ = 10
x, y, s₁, s₂, s₃ ≥ 0`,detailedSolution:`Step 1: Identify constraint types
- 2x + 3y ≤ 18 → ≤ constraint (add slack)
- x + 4y ≥ 12 → ≥ constraint (subtract surplus)
- 3x + 2y ≥ 10 → ≥ constraint (subtract surplus)

Step 2: Convert each constraint
2x + 3y + s₁ = 18 (s₁ ≥ 0)
x + 4y - s₂ = 12 (s₂ ≥ 0)
3x + 2y - s₃ = 10 (s₃ ≥ 0)

Step 3: Update objective function
Z = 5x + 7y + 0s₁ + 0s₂ + 0s₃

Step 4: Interpret
s₁ = 18 - (2x + 3y) → unused resource
s₂ = (x + 4y) - 12 → surplus requirement 2
s₃ = (3x + 2y) - 10 → surplus requirement 3`},{id:4,title:"Example 4: Real-World Surplus Variables",problem:`A company must meet minimum production targets:
Minimize Z = 8x + 10y
Subject to:
3x + 2y ≥ 30 (Minimum production)
2x + 5y ≥ 40 (Minimum quality)
x ≥ 0, y ≥ 0

Convert to standard form and explain surplus variables.`,solution:`Maximize Z' = -8x - 10y
Subject to:
3x + 2y - s₁ = 30
2x + 5y - s₂ = 40
x, y, s₁, s₂ ≥ 0`,detailedSolution:`Step 1: Convert minimization to maximization
Min Z = 8x + 10y → Max Z' = -8x - 10y

Step 2: Identify requirements
- Production: 3x + 2y ≥ 30
- Quality: 2x + 5y ≥ 40

Step 3: Add surplus variables
s₁ = (3x + 2y) - 30 → excess production
s₂ = (2x + 5y) - 40 → excess quality units

Step 4: Standard form
Maximize Z' = -8x - 10y + 0s₁ + 0s₂
Subject to:
3x + 2y - s₁ = 30
2x + 5y - s₂ = 40
x, y, s₁, s₂ ≥ 0

Step 5: Business interpretation
- s₁: Units produced above minimum
- s₂: Quality units above minimum
- Minimization → we want s₁, s₂ as small as possible`}],k=[{id:1,title:"Add Surplus Variables",problem:`Convert to standard form using surplus variables:
Minimize Z = 3x + 5y
Subject to:
x + 2y ≥ 10
3x + y ≥ 12
x ≥ 0, y ≥ 0`,hint:"Convert minimization to maximization and subtract surplus variables.",solution:`Maximize Z' = -3x - 5y
Subject to:
x + 2y - s₁ = 10
3x + y - s₂ = 12
x, y, s₁, s₂ ≥ 0`},{id:2,title:"Surplus Variables with Three Constraints",problem:`Convert to standard form:
Minimize Z = 2x + 4y
Subject to:
x + 3y ≥ 8
2x + y ≥ 6
x + 2y ≥ 5
x ≥ 0, y ≥ 0`,hint:"Convert to maximization and subtract three surplus variables.",solution:`Maximize Z' = -2x - 4y
Subject to:
x + 3y - s₁ = 8
2x + y - s₂ = 6
x + 2y - s₃ = 5
x, y, s₁, s₂, s₃ ≥ 0`},{id:3,title:"Mixed Constraints with Surplus",problem:`Convert to standard form:
Maximize Z = 6x + 8y
Subject to:
2x + 3y ≤ 24
x + 4y ≥ 16
3x + y ≥ 12
x ≥ 0, y ≥ 0`,hint:"Use slack for ≤ and surplus for ≥ constraints.",solution:`Maximize Z = 6x + 8y + 0s₁ + 0s₂ + 0s₃
Subject to:
2x + 3y + s₁ = 24
x + 4y - s₂ = 16
3x + y - s₃ = 12
x, y, s₁, s₂, s₃ ≥ 0`}],w=s=>{v(d=>({...d,[s]:!d[s]}))},q=()=>{const[s,d]=r.useState(2),[c,L]=r.useState(3),[x,U]=r.useState(12),[n,E]=r.useState(3),[u,P]=r.useState(2),[m,F]=r.useState(18),A=(t,p)=>{const T=s*t+c*p-x,z=n*t+u*p-m;return{s1:T,s2:z}},[i,M]=r.useState(4),[l,C]=r.useState(3),a=A(i,l);return e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4",children:"Interactive Surplus Variable Calculator"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400",children:["Constraint 1: ",s,"x + ",c,"y ≥ ",x]}),e.jsx("input",{type:"range",min:"1",max:"10",value:s,onChange:t=>d(Number(t.target.value)),className:"w-full"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400",children:["Constraint 2: ",n,"x + ",u,"y ≥ ",m]}),e.jsx("input",{type:"range",min:"1",max:"10",value:n,onChange:t=>E(Number(t.target.value)),className:"w-full"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400",children:["x value: ",i]}),e.jsx("input",{type:"range",min:"0",max:"10",value:i,onChange:t=>M(Number(t.target.value)),className:"w-full"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400",children:["y value: ",l]}),e.jsx("input",{type:"range",min:"0",max:"10",value:l,onChange:t=>C(Number(t.target.value)),className:"w-full"})]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:[e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:e.jsx("span",{className:"font-semibold",children:"Surplus Variables:"})}),e.jsxs("p",{className:"text-sm font-mono text-gray-700 dark:text-gray-300",children:["s₁ = (",s,"×",i," + ",c,"×",l,") - ",x," = ",a.s1.toFixed(1)]}),e.jsxs("p",{className:"text-sm font-mono text-gray-700 dark:text-gray-300",children:["s₂ = (",n,"×",i," + ",u,"×",l,") - ",m," = ",a.s2.toFixed(1)]})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h5",{className:"text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",children:"Standard Form"}),e.jsxs("pre",{className:"text-xs font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:["Maximize Z\\' = -c₁x - c₂y + 0s₁ + 0s₂ Subject to:",s,"x + ",c,"y - s₁ = ",x,n,"x + ",u,"y - s₂ = ",m,"x, y, s₁, s₂ ≥ 0"]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:e.jsx("span",{className:"font-semibold",children:"Interpretation:"})}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:["s₁ = ",a.s1.toFixed(1)," → ",a.s1>=0?"Excess over requirement":"Infeasible (negative surplus)"]}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:["s₂ = ",a.s2.toFixed(1)," → ",a.s2>=0?"Excess over requirement":"Infeasible (negative surplus)"]})]})]})]})]})};return e.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[e.jsxs("div",{className:"text-center mb-10",children:[e.jsx("h1",{className:"text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-all duration-300",children:"Surplus Variables"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto",children:"Learn about surplus variables, their purpose in converting ≥ constraints to equalities, and their role in the Simplex Method."})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 justify-center border-b border-gray-200 dark:border-gray-700 pb-4",children:S.map(s=>e.jsx("button",{onClick:()=>y(s.id),className:R("px-6 py-2 rounded-lg font-medium transition-all duration-300",o===s.id?"bg-orange-600 text-white shadow-lg shadow-orange-200 dark:shadow-orange-900/30":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-md"),children:s.label},s.id))}),e.jsxs("div",{className:"space-y-8",children:[o==="concept"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"What are Surplus Variables?"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 leading-relaxed mb-4",children:`Surplus variables are non-negative variables subtracted from ≥ constraints to convert them into equalities. They represent the excess amount over the minimum requirement. Unlike slack variables (which are added), surplus variables are subtracted to account for the "extra" beyond what's required.`}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Key Concepts"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Convert ≥ to ="}),e.jsx("li",{children:"Represent excess over requirements"}),e.jsx("li",{children:"Non-negative by definition"}),e.jsx("li",{children:"Zero coefficient in objective"}),e.jsx("li",{children:"Used in minimization problems"})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Why They Matter"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Enable standard form for ≥ constraints"}),e.jsx("li",{children:"Create initial feasible solution"}),e.jsx("li",{children:"Identify excess over requirements"}),e.jsx("li",{children:"Essential for Big-M Method"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"How Surplus Variables Work"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Step 1"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Identify ≥ constraints"}),e.jsx("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:"x + y ≥ 6"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Step 2"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Subtract surplus variable"}),e.jsx("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:"x + y - s₁ = 6"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Step 3"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Interpret as excess"}),e.jsx("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:"s₁ = (x + y) - 6"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center",children:"Slack vs Surplus Variables"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Slack Variables"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Used for ≤ constraints"}),e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"Added"})," to convert to equality"]}),e.jsx("li",{children:"s = RHS - LHS"}),e.jsxs("li",{children:["Represents ",e.jsx("span",{className:"font-bold",children:"unused"})," resources"]}),e.jsx("li",{children:"Common in maximization"})]}),e.jsx("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:"2x + y ≤ 10 → 2x + y + s = 10"})]}),e.jsxs("div",{className:"bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border-l-4 border-orange-500",children:[e.jsx("h4",{className:"font-semibold text-orange-700 dark:text-orange-400 mb-2",children:"Surplus Variables"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Used for ≥ constraints"}),e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"Subtracted"})," to convert to equality"]}),e.jsx("li",{children:"s = LHS - RHS"}),e.jsxs("li",{children:["Represents ",e.jsx("span",{className:"font-bold",children:"excess"})," over requirements"]}),e.jsx("li",{children:"Common in minimization"})]}),e.jsx("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:"x + y ≥ 6 → x + y - s = 6"})]})]})]}),e.jsx(q,{}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"💡 Tips & Tricks for Surplus Variables"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h4",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"Professional Tips"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsxs("li",{children:["Surplus variables are ",e.jsx("span",{className:"font-bold",children:"subtracted"})," (not added)"]}),e.jsx("li",{children:"Always non-negative"}),e.jsx("li",{children:"Zero coefficient in objective"}),e.jsx("li",{children:"Require artificial variables for initial solution"})]})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500",children:[e.jsx("h4",{className:"font-semibold text-purple-700 dark:text-purple-400 mb-2",children:"Common Mistakes"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Adding instead of subtracting surplus"}),e.jsx("li",{children:"Forgetting non-negativity"}),e.jsx("li",{children:"Confusing slack and surplus"}),e.jsx("li",{children:"Not converting minimization to maximization"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"✅ Mini Checklist"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"≥ constraints identified"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Surplus variables subtracted correctly"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Surplus variables ≥ 0"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Zero objective coefficients"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Minimization converted to maximization"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Interpretation of surplus understood"})]})]})]})]}),o==="examples"&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"space-y-6",children:N.map(s=>e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-bold text-gray-800 dark:text-gray-200 mb-3",children:s.title}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h5",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Original Problem"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:s.problem})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h5",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"With Surplus Variables"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:s.solution})]})]}),e.jsx("div",{className:"mt-4 flex justify-center",children:e.jsx("button",{onClick:()=>w(s.id),className:"px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all duration-300",children:b[s.id]?"Hide Detailed Steps":"Show Detailed Steps"})}),b[s.id]&&e.jsxs("div",{className:"mt-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h5",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"📝 Detailed Steps"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:s.detailedSolution})]})]},`example-${s.id}`))})}),o==="practice"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center",children:"Practice Problems"}),e.jsx("div",{className:"space-y-6",children:k.map(s=>e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 transition-all duration-300 hover:shadow-md",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:s.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:s.problem}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>j(h===s.id?null:s.id),className:"px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-all duration-300",children:h===s.id?"Hide Solution":"Check Solution"}),e.jsx("button",{onClick:()=>f(g===s.id?null:s.id),className:"px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300",children:g===s.id?"Hide Hint":"Show Hint"})]}),g===s.id&&e.jsx("div",{className:"mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800",children:e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"💡 Hint:"})," ",s.hint]})}),h===s.id&&e.jsx("div",{className:"mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800",children:e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono",children:s.solution})})]},s.id))})]}),e.jsxs("div",{className:"bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 border border-orange-200 dark:border-orange-800",children:[e.jsx("h4",{className:"font-semibold text-orange-700 dark:text-orange-400 mb-2",children:"💡 Tips for Working with Surplus Variables"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Identify ≥ constraints:"})," Each needs a surplus variable"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Use different names:"})," s₁, s₂, s₃ for different constraints"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Remember non-negativity:"})," All surplus variables ≥ 0"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Zero objective coefficients:"})," Surplus variables don't affect Z"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Interpret as excess:"})," Helps understand the solution"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Require artificial variables:"})," For initial feasible solution"]})]})]})]})]}),e.jsx("div",{className:"mt-12",children:e.jsx(I,{title:"Surplus Variables FAQs",questions:V})}),e.jsx("div",{className:"mt-8",children:e.jsx(Z,{content:W,title:"Surplus Variables",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Note",downloadFileName:"topic3_note.txt"})}),e.jsx("div",{className:"mt-8",children:e.jsx(H,{note:"Surplus variables are the mirror image of slack variables. I tell my students that if slack variables are about 'how much is left over' (unused resources), surplus variables are about 'how much extra' (excess over requirements). The key is remembering that slack is added (+) and surplus is subtracted (-). This distinction is crucial for the Simplex Method. I encourage students to think of surplus variables as measuring 'waste' or 'excess' that we'd like to minimize."})})]})})};export{X as default};
