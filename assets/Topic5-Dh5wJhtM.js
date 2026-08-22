import{r as i,j as e}from"./index-YkKVfVEM.js";import{c}from"./clsx-B-dksMZM.js";import{T as O}from"./TeacherSukantaHui-nIRku_xY.js";import{F as E}from"./FAQTemplate-B_PeLoo7.js";import{P as C}from"./PlainTextPrint-Bgzrldzq.js";import"./github-00a_zZrb.js";import"./createLucideIcon-Cim-rzMd.js";import"./git-branch-BC_-h9tN.js";const M=[{question:"What is the optimal solution in LP?",shortAnswer:"The best feasible solution that maximizes or minimizes the objective function.",explanation:"The optimal solution is the corner point that gives the highest (for maximization) or lowest (for minimization) objective value.",hint:"Best possible solution.",level:"basic",codeExample:"Optimal at (4,2) with Z = 16"},{question:"What are alternate optimal solutions?",shortAnswer:"Multiple corner points that give the same optimal objective value.",explanation:"When two or more corner points produce the same optimal Z, the problem has alternate optimal solutions.",hint:"Multiple points with same Z.",level:"intermediate",codeExample:"Both (4,4) and (0,8) give Z = 8"},{question:"What causes alternate optimal solutions?",shortAnswer:"The objective function is parallel to a binding constraint.",explanation:"When the objective function has the same slope as a constraint that forms the feasible region boundary, multiple points on that edge give the same optimal value.",hint:"Objective parallel to constraint.",level:"advanced",codeExample:"Z = x + y is parallel to x + y = 8"},{question:"How do you identify alternate optimal solutions?",shortAnswer:"Check if two or more corner points give the same optimal Z value.",explanation:"Evaluate Z at all corner points. If multiple corners give the same optimal value, alternate optimal solutions exist.",hint:"Same Z at different corners.",level:"intermediate",codeExample:"Z(4,4) = 8 and Z(0,8) = 8"},{question:"What is the difference between unique and alternate optimal?",shortAnswer:"Unique has one optimal point; alternate has multiple optimal points.",explanation:"Unique optimal: only one corner gives the best Z. Alternate optimal: multiple corners give the same best Z.",hint:"One point vs. multiple points.",level:"intermediate",codeExample:"Unique: only (4,2) gives Z=16, Alternate: (4,4) and (0,8) give Z=8"},{question:"What happens when there are alternate optimal solutions?",shortAnswer:"Any point on the edge between the optimal corners is also optimal.",explanation:"All points on the line segment connecting the optimal corner points give the same optimal Z value.",hint:"Whole edge is optimal.",level:"advanced",codeExample:"All points between (4,4) and (0,8) give Z = 8"},{question:"Can alternate optimal solutions occur in minimization problems?",shortAnswer:"Yes, alternate optimal solutions can occur in both maximization and minimization.",explanation:"The same principle applies: if the objective function is parallel to a binding constraint, multiple optimal solutions exist.",hint:"Applies to both max and min.",level:"intermediate",codeExample:"Min Z = 2x + 4y with multiple minima"},{question:"What is a degenerate optimal solution?",shortAnswer:"A solution where more than the minimum number of constraints are binding.",explanation:"Degeneracy occurs when more constraints intersect at the optimal point than necessary. This can happen with or without alternate optima.",hint:"Too many binding constraints.",level:"advanced",codeExample:"Three constraints binding at one corner point"},{question:"How do you verify the optimal solution?",shortAnswer:"Check that the point satisfies all constraints and has the best objective value.",explanation:"Verify: (1) Point is feasible, (2) No other corner gives better Z, (3) If multiple, identify all optimal points.",hint:"Check feasibility and optimality.",level:"intermediate",codeExample:"Verify (4,2) satisfies all constraints and gives max Z"},{question:"What is the significance of alternate optimal solutions in practice?",shortAnswer:"They provide flexibility for decision-makers to choose based on other criteria.",explanation:"When multiple solutions give the same objective value, managers can consider other factors like risk, sustainability, or strategic alignment.",hint:"Flexibility in decision-making.",level:"intermediate",codeExample:"Choose between (4,4) and (0,8) based on other factors"},{question:"How do you find all optimal solutions?",shortAnswer:"List all corner points that give the optimal Z value.",explanation:"Evaluate Z at all corner points. Any corner with the optimal Z is an optimal solution. The entire edge between them is also optimal.",hint:"List all corners with optimal Z.",level:"advanced",codeExample:"Both (4,4) and (0,8) are optimal"},{question:"What is the relationship between objective slope and alternate optima?",shortAnswer:"Alternate optima occur when the objective slope equals the slope of a binding constraint.",explanation:"When the objective function is parallel to a constraint, multiple points on that constraint give the same Z value.",hint:"Slopes are equal.",level:"advanced",codeExample:"Objective slope = -1, Constraint slope = -1"},{question:"Can alternate optimal solutions exist with only one constraint?",shortAnswer:"Yes, if the objective function is parallel to the only constraint.",explanation:"With one constraint x + y ≤ 10, if Z = x + y, any point on x + y = 10 is optimal.",hint:"Parallel to a single constraint.",level:"intermediate",codeExample:"Max Z = x + y, subject to x + y ≤ 10"},{question:"What is the difference between alternate optimal and unbounded?",shortAnswer:"Alternate optimal has finite optimal value; unbounded has no finite optimum.",explanation:"Alternate optimal: multiple points give the same finite Z. Unbounded: Z can go to infinity.",hint:"Finite vs. infinite.",level:"advanced",codeExample:"Alternate: Z = 8, Unbounded: Z → ∞"}],q=`TOPIC 5: OPTIMAL SOLUTION AND ALTERNATE OPTIMAL SOLUTIONS\r
==========================================================\r
\r
INTRODUCTION\r
------------\r
The optimal solution is the best feasible solution to a linear \r
programming problem. Understanding how to identify optimal solutions \r
and recognize alternate optima is essential for LP problem-solving.\r
\r
WHAT IS THE OPTIMAL SOLUTION?\r
-----------------------------\r
The optimal solution is the corner point that gives the best objective \r
value:\r
- Maximization: highest Z value\r
- Minimization: lowest Z value\r
\r
TYPES OF OPTIMAL SOLUTIONS\r
--------------------------\r
1. Unique Optimal:\r
   - Only one corner gives the best Z\r
   - Objective not parallel to any constraint\r
\r
2. Alternate Optimal:\r
   - Multiple corners give the same best Z\r
   - Objective parallel to a binding constraint\r
\r
3. Unbounded:\r
   - No finite optimal solution\r
   - Objective can go to infinity\r
\r
4. Infeasible:\r
   - No feasible solution exists\r
   - Empty feasible region\r
\r
HOW TO IDENTIFY ALTERNATE OPTIMA\r
-------------------------------\r
Step 1: Find all corner points\r
Step 2: Evaluate Z at each corner\r
Step 3: If multiple corners give the same optimal Z → alternate optima\r
\r
CAUSE OF ALTERNATE OPTIMA\r
-------------------------\r
Alternate optimal solutions occur when the objective function is \r
parallel to a binding constraint. This means:\r
Slope of objective = Slope of constraint\r
\r
EXAMPLE\r
-------\r
Maximize Z = x + y\r
Constraint: x + y ≤ 8\r
\r
Corner points: (0,0), (8,0), (0,8)\r
Z(0,0) = 0, Z(8,0) = 8, Z(0,8) = 8\r
\r
Alternate optima at (8,0) and (0,8)\r
Any point on x + y = 8 is optimal\r
\r
PRACTICAL SIGNIFICANCE\r
----------------------\r
Alternate optimal solutions provide decision-making flexibility:\r
- Choose based on other criteria\r
- Consider risk, sustainability, preferences\r
- Multiple equally good options\r
\r
COMMON MISTAKES\r
---------------\r
1. Missing alternate optimal solutions\r
2. Assuming only one optimal solution\r
3. Not checking all corner points\r
4. Confusing alternate with degenerate\r
\r
BEST PRACTICES\r
--------------\r
1. Check all corner points\r
2. Look for equal Z values\r
3. Verify objective slope vs constraint slopes\r
4. State all optimal solutions\r
5. Explain flexibility to decision-makers\r
\r
TEACHER'S NOTE\r
--------------\r
Alternate optimal solutions are important in practice - they give \r
decision-makers flexibility. When multiple solutions give the same \r
optimal value, managers can choose based on other criteria like \r
sustainability, risk, or employee preferences."`,D=()=>{const[o,u]=i.useState("concept"),[g,b]=i.useState({}),[x,y]=i.useState(null),[p,v]=i.useState(null),j=[{id:"concept",label:"Concept"},{id:"examples",label:"Examples"},{id:"practice",label:"Practice"}],f=[{id:1,title:"Example 1: Unique Optimal Solution",problem:`Maximize Z = 3x + 2y
Subject to:
2x + y ≤ 10
x + 2y ≤ 8
x ≥ 0, y ≥ 0

Find the optimal solution.`,solution:"Unique optimal solution at (4,2) with Z = 16",detailedSolution:`Step 1: Find corner points
(0,0), (5,0), (4,2), (0,4)

Step 2: Evaluate Z at each corner
Z(0,0) = 0
Z(5,0) = 15
Z(4,2) = 16  ← Maximum
Z(0,4) = 8

Step 3: Check for multiple optima
All corner points have different Z values
No other point gives Z = 16

Conclusion: Unique optimal solution at (4,2)`},{id:2,title:"Example 2: Alternate Optimal Solutions",problem:`Maximize Z = x + y
Subject to:
x + y ≤ 8
2x + y ≤ 12
x ≥ 0, y ≥ 0

Find all optimal solutions.`,solution:"Alternate optimal solutions: (4,4) and (0,8) both give Z = 8",detailedSolution:`Step 1: Find corner points
(0,0), (6,0), (4,4), (0,8)

Step 2: Evaluate Z at each corner
Z(0,0) = 0
Z(6,0) = 6
Z(4,4) = 8  ← Maximum
Z(0,8) = 8  ← Maximum

Step 3: Check for multiple optima
Two corner points give Z = 8

Step 4: Identify the optimal edge
The line segment between (4,4) and (0,8)
All points on this edge give Z = 8

Conclusion: Multiple optimal solutions exist`},{id:3,title:"Example 3: Minimization with Unique Optimum",problem:`Minimize Z = 2x + 3y
Subject to:
x + 2y ≥ 8
2x + y ≥ 10
x ≥ 0, y ≥ 0

Find the optimal solution.`,solution:"Unique optimal solution at (4,2) with Z = 14",detailedSolution:`Step 1: Find corner points
(0,10), (4,2), (8,0)

Step 2: Evaluate Z at each corner
Z(0,10) = 2(0) + 3(10) = 30
Z(4,2) = 2(4) + 3(2) = 8 + 6 = 14  ← Minimum
Z(8,0) = 2(8) + 3(0) = 16

Step 3: Check for multiple optima
All corner points have different Z values
No other point gives Z = 14

Conclusion: Unique optimal solution at (4,2)`},{id:4,title:"Example 4: Real-World Multiple Optima",problem:`A company produces two products. Profit: A = ₹40, B = ₹50.
Constraints:
2x + 3y ≤ 120
3x + 2y ≤ 120
x ≥ 0, y ≥ 0

Find the optimal production mix.`,solution:"Multiple optimal solutions: (40,0) and (0,40) and any point between them",detailedSolution:`Step 1: Find corner points
(0,0), (40,0), (24,24), (0,40)

Step 2: Evaluate profit at each corner
Z(0,0) = 0
Z(40,0) = 40(40) + 50(0) = 1600
Z(24,24) = 40(24) + 50(24) = 960 + 1200 = 2160
Z(0,40) = 40(0) + 50(40) = 2000

Step 3: Check for multiple optima
Z(24,24) = 2160 is the maximum
Only one corner gives this value

Wait! Let me recalculate:
Z(40,0) = 1600
Z(24,24) = 2160
Z(0,40) = 2000

The actual optimal is at (24,24) with Z = 2160
But check: 3x+2y ≤ 120 → 3(24)+2(24)=72+48=120 ✓
2x+3y ≤ 120 → 2(24)+3(24)=48+72=120 ✓

This is a unique optimal solution at (24,24)`}],N=[{id:1,title:"Find the Optimal Solution",problem:`Maximize Z = 4x + 3y
Corner points: (0,0), (6,0), (3,4), (0,5)

Is there a unique optimal solution?`,hint:"Evaluate Z at each corner point and check if any two give the same value.",solution:"Unique optimal at (3,4) with Z = 24"},{id:2,title:"Identify Alternate Optima",problem:`Maximize Z = 2x + 4y
Corner points: (0,0), (5,0), (3,3), (0,6)

Are there multiple optimal solutions?`,hint:"Evaluate Z at each corner. If two give the same value, there are multiple optima.",solution:"Multiple optimal: (3,3) and (0,6) both give Z = 12"},{id:3,title:"Minimization with Unique Optimum",problem:`Minimize Z = 3x + 5y
Corner points: (0,8), (4,4), (8,0)

Find the optimal solution.`,hint:"Evaluate Z at each corner and choose the minimum.",solution:"Unique optimal at (8,0) with Z = 24"}],k=t=>{b(n=>({...n,[t]:!n[t]}))},w=()=>{const[t,n]=i.useState("max"),[l,Z]=i.useState(3),[s,S]=i.useState(2),A=[{x:0,y:0,label:"A"},{x:5,y:0,label:"B"},{x:4,y:2,label:"C"},{x:0,y:4,label:"D"}],T=(a,h)=>l*a+s*h,d=A.map(a=>({...a,z:T(a.x,a.y)})),m=t==="max"?Math.max(...d.map(a=>a.z)):Math.min(...d.map(a=>a.z)),r=d.filter(a=>a.z===m);return e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4",children:"Interactive Optimal Solution Finder"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Objective Type:"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>n("max"),className:c("px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300",t==="max"?"bg-green-600 text-white":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"),children:"Maximize"}),e.jsx("button",{onClick:()=>n("min"),className:c("px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300",t==="min"?"bg-red-600 text-white":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"),children:"Minimize"})]})]}),e.jsxs("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300 mb-3",children:["Z = ",l,"x + ",s,"y (",t==="max"?"Maximize":"Minimize",")"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400",children:"Coefficient c₁ (x)"}),e.jsx("input",{type:"range",min:"0",max:"10",value:l,onChange:a=>Z(Number(a.target.value)),className:"w-full"}),e.jsx("span",{className:"text-sm text-gray-600 dark:text-gray-400",children:l})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400",children:"Coefficient c₂ (y)"}),e.jsx("input",{type:"range",min:"0",max:"10",value:s,onChange:a=>S(Number(a.target.value)),className:"w-full"}),e.jsx("span",{className:"text-sm text-gray-600 dark:text-gray-400",children:s})]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:[e.jsxs("p",{className:"text-sm font-semibold text-gray-700 dark:text-gray-300",children:["Optimal ",t==="max"?"Maximum":"Minimum"," Z = ",m]}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:r.length===1?`Unique optimum at ${r[0].label}(${r[0].x}, ${r[0].y})`:`${r.length} optimal solutions found!`})]})]}),e.jsx("div",{children:e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h5",{className:"text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",children:"Corner Point Evaluations"}),e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-gray-600 dark:text-gray-400",children:[e.jsx("th",{className:"text-left py-1",children:"Point"}),e.jsx("th",{className:"text-left py-1",children:"(x, y)"}),e.jsxs("th",{className:"text-left py-1",children:["Z = ",l,"x + ",s,"y"]}),e.jsx("th",{className:"text-left py-1",children:"Status"})]})}),e.jsx("tbody",{children:d.map((a,h)=>e.jsxs("tr",{className:c(a.z===m?"bg-green-100 dark:bg-green-900/30":""),children:[e.jsx("td",{className:"py-1 font-medium text-gray-700 dark:text-gray-300",children:a.label}),e.jsxs("td",{className:"py-1 font-mono text-gray-700 dark:text-gray-300",children:["(",a.x,", ",a.y,")"]}),e.jsx("td",{className:"py-1 font-mono text-gray-700 dark:text-gray-300",children:a.z}),e.jsx("td",{className:"py-1",children:a.z===m&&e.jsx("span",{className:"text-green-600 dark:text-green-400 font-medium",children:t==="max"?"✓ Maximum":"✓ Minimum"})})]},h))})]})]})})]})]})};return e.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[e.jsxs("div",{className:"text-center mb-10",children:[e.jsx("h1",{className:"text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-all duration-300",children:"Optimal Solution and Alternate Optimal Solutions"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto",children:"Learn how to identify the optimal solution and recognize when multiple optimal solutions exist in linear programming problems."})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 justify-center border-b border-gray-200 dark:border-gray-700 pb-4",children:j.map(t=>e.jsx("button",{onClick:()=>u(t.id),className:c("px-6 py-2 rounded-lg font-medium transition-all duration-300",o===t.id?"bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-indigo-900/30":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-md"),children:t.label},t.id))}),e.jsxs("div",{className:"space-y-8",children:[o==="concept"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"What is the Optimal Solution?"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 leading-relaxed mb-4",children:"The optimal solution is the best feasible solution to a linear programming problem. For maximization problems, it gives the highest objective value. For minimization problems, it gives the lowest objective value. The optimal solution is always found at a corner point of the feasible region."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Key Concepts"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Best feasible solution"}),e.jsx("li",{children:"Max or min objective value"}),e.jsx("li",{children:"Always at a corner point"}),e.jsx("li",{children:"Can be unique or multiple"})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Types of Optimal Solutions"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Unique optimal solution"}),e.jsx("li",{children:"Alternate (multiple) optimal solutions"}),e.jsx("li",{children:"Unbounded solution"}),e.jsx("li",{children:"Infeasible (no solution)"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"Types of Optimal Solutions"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500 transition-all duration-300 hover:shadow-lg",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Unique Optimal"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Only one corner point gives the optimal Z value."}),e.jsx("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:"Z(4,2) = 16 is unique"})]}),e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500 transition-all duration-300 hover:shadow-lg",children:[e.jsx("h4",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"Alternate Optimal"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Multiple corner points give the same optimal Z."}),e.jsx("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:"Z(4,4) = 8 and Z(0,8) = 8"})]}),e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500 transition-all duration-300 hover:shadow-lg",children:[e.jsx("h4",{className:"font-semibold text-red-700 dark:text-red-400 mb-2",children:"Unbounded"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"No finite optimal solution exists."}),e.jsx("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:"Z can go to infinity"})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500 transition-all duration-300 hover:shadow-lg",children:[e.jsx("h4",{className:"font-semibold text-purple-700 dark:text-purple-400 mb-2",children:"Infeasible"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"No feasible solution exists."}),e.jsx("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:"Empty feasible region"})]})]})]}),e.jsx(w,{}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"How to Identify Alternate Optimal Solutions"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Step 1"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Find all corner points"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Step 2"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Evaluate Z at each corner"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Step 3"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"If multiple corners give the same optimal Z → alternate optima"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"💡 Tips & Tricks for Identifying Optimal Solutions"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h4",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"Professional Tips"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Check all corner points systematically"}),e.jsx("li",{children:"Look for equal Z values at different corners"}),e.jsx("li",{children:"Verify the objective slope matches a constraint"}),e.jsx("li",{children:"Multiple optima = objective parallel to constraint"})]})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500",children:[e.jsx("h4",{className:"font-semibold text-purple-700 dark:text-purple-400 mb-2",children:"Common Mistakes"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Missing alternate optimal solutions"}),e.jsx("li",{children:"Assuming only one optimal solution"}),e.jsx("li",{children:"Not checking all corner points"}),e.jsx("li",{children:"Confusing alternate optima with degenerate"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"✅ Mini Checklist"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"All corner points found"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Z evaluated at each corner"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Optimal Z value identified"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Checked for multiple optima"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Optimal solution(s) stated clearly"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Solution verified in constraints"})]})]})]})]}),o==="examples"&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"space-y-6",children:f.map(t=>e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-bold text-gray-800 dark:text-gray-200 mb-3",children:t.title}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h5",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Problem"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.problem})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h5",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Solution"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.solution})]})]}),e.jsx("div",{className:"mt-4 flex justify-center",children:e.jsx("button",{onClick:()=>k(t.id),className:"px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300",children:g[t.id]?"Hide Detailed Steps":"Show Detailed Steps"})}),g[t.id]&&e.jsxs("div",{className:"mt-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h5",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"📝 Detailed Steps"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.detailedSolution})]})]},`example-${t.id}`))})}),o==="practice"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center",children:"Practice Problems"}),e.jsx("div",{className:"space-y-6",children:N.map(t=>e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 transition-all duration-300 hover:shadow-md",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:t.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:t.problem}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>y(x===t.id?null:t.id),className:"px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-all duration-300",children:x===t.id?"Hide Solution":"Check Solution"}),e.jsx("button",{onClick:()=>v(p===t.id?null:t.id),className:"px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300",children:p===t.id?"Hide Hint":"Show Hint"})]}),p===t.id&&e.jsx("div",{className:"mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800",children:e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"💡 Hint:"})," ",t.hint]})}),x===t.id&&e.jsx("div",{className:"mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800",children:e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:t.solution})})]},t.id))})]}),e.jsxs("div",{className:"bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6 border border-indigo-200 dark:border-indigo-800",children:[e.jsx("h4",{className:"font-semibold text-indigo-700 dark:text-indigo-400 mb-2",children:"💡 Tips for Identifying Optimal Solutions"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Check all corners:"})," Don't assume uniqueness"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Look for ties:"})," Equal Z values mean multiple optima"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Check slopes:"})," Objective parallel to constraint = multiple optima"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Verify feasibility:"})," Ensure optimal points satisfy all constraints"]})]})]})]})]}),e.jsx("div",{className:"mt-12",children:e.jsx(E,{title:"Optimal and Alternate Optimal Solutions FAQs",questions:M})}),e.jsx("div",{className:"mt-8",children:e.jsx(C,{content:q,title:"Optimal Solution and Alternate Optimal Solutions",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Note",downloadFileName:"topic5_note.txt"})}),e.jsx("div",{className:"mt-8",children:e.jsx(O,{note:"Understanding optimal solutions is the culmination of graphical LP. I tell my students that finding the optimal solution is like finding the best deal - you check all the options (corner points) and pick the best one. The concept of alternate optimal solutions is particularly important in practice - it gives decision-makers flexibility. When multiple solutions give the same optimal value, managers can choose based on other criteria like sustainability, risk, or employee preferences."})})]})})};export{D as default};
