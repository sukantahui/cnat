import{r as a,j as e}from"./index-YkKVfVEM.js";import{c as p}from"./clsx-B-dksMZM.js";import{T as E}from"./TeacherSukantaHui-nIRku_xY.js";import{F as C}from"./FAQTemplate-B_PeLoo7.js";import{P as T}from"./PlainTextPrint-Bgzrldzq.js";import"./github-00a_zZrb.js";import"./createLucideIcon-Cim-rzMd.js";import"./git-branch-BC_-h9tN.js";const M=[{question:"Why do we evaluate the objective function at corner points?",shortAnswer:"The optimal solution always occurs at a corner point of the feasible region.",explanation:"The Fundamental Theorem of LP states that if an optimal solution exists, there is an optimal solution at a corner point. This limits the search to a finite number of points.",hint:"Optimal at corner points.",level:"basic",codeExample:"Evaluate Z at (0,0), (5,0), (4,2), (0,4)"},{question:"How do you evaluate the objective function at a corner point?",shortAnswer:"Substitute the coordinates into Z = c₁x + c₂y.",explanation:"For each corner point (x, y), calculate Z by multiplying the coefficients by the coordinates and adding them together.",hint:"Substitute into Z equation.",level:"basic",codeExample:"Z(4,2) = 3(4) + 2(2) = 12 + 4 = 16"},{question:"What is the objective function in LP?",shortAnswer:"Z = c₁x + c₂y, where c₁ and c₂ are coefficients representing profit or cost per unit.",explanation:"The objective function represents what you're trying to optimize - maximize profit or minimize cost.",hint:"Expression being optimized.",level:"basic",codeExample:"Z = 3x + 2y (maximize profit)"},{question:"What does the value of Z represent at a corner point?",shortAnswer:"The total profit (or cost) for that particular solution.",explanation:"At a corner point (x, y), Z gives the total objective value. For maximization, higher Z is better. For minimization, lower Z is better.",hint:"Total profit or cost.",level:"intermediate",codeExample:"Z(4,2) = 16 means profit of 16 units"},{question:"How do you select the optimal solution?",shortAnswer:"Choose the corner point with the maximum Z (for maximization) or minimum Z (for minimization).",explanation:"Compare all Z values and select the best one according to the problem's objective.",hint:"Max or min Z value.",level:"basic",codeExample:"Max Z = 16 at (4,2)"},{question:"What happens if two corner points give the same optimal Z?",shortAnswer:"Multiple optimal solutions exist.",explanation:"If two or more corner points give the same optimal Z, the problem has multiple optimal solutions. Any point on the line between them is also optimal.",hint:"Multiple optima exist.",level:"intermediate",codeExample:"Both (4,4) and (0,8) give Z = 8"},{question:"What is the difference between maximizing and minimizing?",shortAnswer:"Maximization finds the highest Z; minimization finds the lowest Z.",explanation:"For maximization, choose the corner with the largest Z. For minimization, choose the corner with the smallest Z.",hint:"Max = highest, Min = lowest.",level:"basic",codeExample:"Max: choose largest, Min: choose smallest"},{question:"What if a corner point is infeasible?",shortAnswer:"It should not be considered for optimization.",explanation:"Only points within the feasible region are valid. If a corner point violates any constraint, it's infeasible and must be excluded.",hint:"Only feasible points matter.",level:"intermediate",codeExample:"Check each corner satisfies all constraints"},{question:"How do you verify the optimal solution?",shortAnswer:"Check that the point satisfies all constraints and no other corner has a better Z.",explanation:"Verify: (1) The point is in the feasible region, (2) No other corner gives a better objective value, (3) The solution makes sense.",hint:"Check constraints and compare Z values.",level:"intermediate",codeExample:"Check (4,2) satisfies 2x+y≤10 and x+2y≤8"},{question:"What is the role of coefficients c₁ and c₂?",shortAnswer:"They represent the contribution to the objective per unit of each variable.",explanation:"In profit maximization, c₁ and c₂ are profits per unit. In cost minimization, they are costs per unit.",hint:"Profit or cost per unit.",level:"intermediate",codeExample:"Z = 40x + 50y means ₹40 per chair, ₹50 per table"},{question:"How do you handle negative coefficients in the objective function?",shortAnswer:"Follow the same evaluation process; negative values may affect which corner is optimal.",explanation:"Negative coefficients indicate costs or losses. The evaluation method is the same, but the optimal solution may be different.",hint:"Same method, different result.",level:"advanced",codeExample:"Z = -2x + 3y → may minimize x, maximize y"},{question:"What is the difference between feasible and optimal?",shortAnswer:"Feasible means satisfies constraints; optimal means best objective value among feasible solutions.",explanation:"A feasible solution is any point in the feasible region. The optimal solution is the best feasible solution according to the objective.",hint:"Feasible = valid, Optimal = best valid.",level:"basic",codeExample:"All corner points are feasible; the one with best Z is optimal"},{question:"How do you find the optimal solution when there are multiple optimal solutions?",shortAnswer:"Any optimal solution is acceptable; choose based on other criteria.",explanation:"When multiple optimal solutions exist, all give the same objective value. Decision-makers can choose based on other factors like risk, sustainability, or preference.",hint:"All optimal solutions give same Z.",level:"advanced",codeExample:"Both (4,4) and (0,8) give Z = 8; choose based on other factors"},{question:"What is the significance of the objective function line?",shortAnswer:"It represents the direction of optimization and helps identify the optimal corner.",explanation:"The objective function line Z = c₁x + c₂y can be moved parallel to itself. The last corner it touches is optimal for maximization.",hint:"Direction of optimization.",level:"advanced",codeExample:"Move Z = 3x + 2y outward to find optimal corner"}],z=`TOPIC 4: EVALUATING THE OBJECTIVE FUNCTION AT CORNER POINTS\r
============================================================\r
\r
INTRODUCTION\r
------------\r
Evaluating the objective function at corner points is the final step \r
in solving LP problems graphically. The optimal solution will always \r
be at a corner point of the feasible region.\r
\r
WHY EVALUATE AT CORNER POINTS?\r
-----------------------------\r
The Fundamental Theorem of LP states: If an optimal solution exists, \r
there is an optimal solution at a corner point of the feasible region. \r
This theorem limits our search to a finite number of points.\r
\r
STEPS TO EVALUATE\r
-----------------\r
Step 1: List all corner points\r
Step 2: Calculate Z at each point\r
Step 3: Compare values\r
Step 4: Select optimal solution\r
\r
OBJECTIVE FUNCTION\r
------------------\r
General form: Z = c₁x + c₂y\r
- For maximization: choose highest Z\r
- For minimization: choose lowest Z\r
\r
EVALUATION PROCESS\r
------------------\r
For each corner point (x, y):\r
Z = c₁x + c₂y\r
\r
EXAMPLE\r
-------\r
Problem: Maximize Z = 3x + 2y\r
Corner points: (0,0), (5,0), (4,2), (0,4)\r
\r
Evaluations:\r
Z(0,0) = 3(0) + 2(0) = 0\r
Z(5,0) = 3(5) + 2(0) = 15\r
Z(4,2) = 3(4) + 2(2) = 16\r
Z(0,4) = 3(0) + 2(4) = 8\r
\r
Optimal: (4,2) with Z = 16\r
\r
SPECIAL CASES\r
-------------\r
Multiple Optimal Solutions:\r
- When two corner points give the same Z\r
- Any point on the line between them is also optimal\r
\r
Infeasible Corners:\r
- Some intersection points may violate constraints\r
- Only evaluate points in the feasible region\r
\r
COMMON MISTAKES\r
---------------\r
1. Missing a corner point\r
2. Arithmetic errors in calculations\r
3. Not checking if point is feasible\r
4. Confusing max with min\r
\r
BEST PRACTICES\r
--------------\r
1. List all corner points systematically\r
2. Create a table of values\r
3. Double-check arithmetic\r
4. Verify the optimal point is feasible\r
5. Check for multiple optima\r
\r
TEACHER'S NOTE\r
--------------\r
Evaluating corner points is where LP becomes decision-making. \r
Create a table showing each corner and its Z value - this visual \r
comparison makes it easy to identify the optimal solution."`,V=()=>{const[r,g]=a.useState("concept"),[x,u]=a.useState({}),[c,b]=a.useState(null),[d,y]=a.useState(null),f=[{id:"concept",label:"Concept"},{id:"examples",label:"Examples"},{id:"practice",label:"Practice"}],v=[{id:1,title:"Example 1: Maximization with Two Corner Points",problem:`Maximize Z = 3x + 2y
Subject to:
2x + y ≤ 10
x + 2y ≤ 8
x ≥ 0, y ≥ 0

Corner points: (0,0), (5,0), (4,2), (0,4)`,solution:"Optimal at (4,2) with Z = 16",detailedSolution:`Step 1: Identify corner points
(0,0), (5,0), (4,2), (0,4)

Step 2: Evaluate Z at each corner point

Z(0,0) = 3(0) + 2(0) = 0

Z(5,0) = 3(5) + 2(0) = 15

Z(4,2) = 3(4) + 2(2) = 12 + 4 = 16

Z(0,4) = 3(0) + 2(4) = 8

Step 3: Compare values
Values: 0, 15, 16, 8
Maximum is 16 at (4,2)

Step 4: State optimal solution
Optimal solution: x = 4, y = 2
Maximum Z = 16`},{id:2,title:"Example 2: Minimization with Three Constraints",problem:`Minimize Z = 4x + 3y
Subject to:
x + y ≥ 6
2x + y ≥ 8
x + 2y ≥ 10
x ≥ 0, y ≥ 0

Corner points: (0,8), (2,4), (4,3), (10,0)`,solution:"Optimal at (4,3) with Z = 25",detailedSolution:`Step 1: Identify corner points
(0,8), (2,4), (4,3), (10,0)

Step 2: Evaluate Z at each corner point

Z(0,8) = 4(0) + 3(8) = 24

Z(2,4) = 4(2) + 3(4) = 8 + 12 = 20

Z(4,3) = 4(4) + 3(3) = 16 + 9 = 25

Z(10,0) = 4(10) + 3(0) = 40

Step 3: Compare values
Values: 24, 20, 25, 40
Minimum is 20 at (2,4)

Step 4: State optimal solution
Optimal solution: x = 2, y = 4
Minimum Z = 20`},{id:3,title:"Example 3: Multiple Optimal Solutions",problem:`Maximize Z = x + y
Subject to:
x + y ≤ 8
2x + y ≤ 12
x ≥ 0, y ≥ 0

Corner points: (0,0), (6,0), (4,4), (0,8)`,solution:"Multiple optimal solutions: (4,4) and (0,8) both give Z = 8",detailedSolution:`Step 1: Identify corner points
(0,0), (6,0), (4,4), (0,8)

Step 2: Evaluate Z at each corner point

Z(0,0) = 0 + 0 = 0

Z(6,0) = 6 + 0 = 6

Z(4,4) = 4 + 4 = 8

Z(0,8) = 0 + 8 = 8

Step 3: Compare values
Values: 0, 6, 8, 8
Maximum is 8 at (4,4) and (0,8)

Step 4: State optimal solution
Multiple optimal solutions:
(4,4) and (0,8) both give Z = 8
Any point on the line between them is also optimal`},{id:4,title:"Example 4: Real-World Profit Maximization",problem:`A company produces chairs (x) and tables (y). Profit: Chair ₹40, Table ₹50.
Constraints:
2x + 3y ≤ 120 (Labor)
3x + 2y ≤ 90 (Wood)
x ≥ 0, y ≥ 0

Corner points: (0,0), (30,0), (18,24), (0,40)
Maximize Z = 40x + 50y`,solution:"Optimal at (0,40) with Z = 2000",detailedSolution:`Step 1: Identify corner points
(0,0), (30,0), (18,24), (0,40)

Step 2: Evaluate profit at each corner point

Z(0,0) = 40(0) + 50(0) = 0

Z(30,0) = 40(30) + 50(0) = 1200

Z(18,24) = 40(18) + 50(24) = 720 + 1200 = 1920

Z(0,40) = 40(0) + 50(40) = 2000

Step 3: Compare values
Values: 0, 1200, 1920, 2000
Maximum is 2000 at (0,40)

Step 4: State optimal solution
Optimal solution: x = 0 chairs, y = 40 tables
Maximum profit = ₹2000`}],j=[{id:1,title:"Maximize Profit",problem:`Maximize Z = 5x + 3y
Corner points: (0,0), (4,0), (2,3), (0,5)

Find the optimal solution.`,hint:"Evaluate Z at each corner point and choose the maximum.",solution:"Optimal at (2,3) with Z = 19"},{id:2,title:"Minimize Cost",problem:`Minimize Z = 2x + 4y
Corner points: (0,6), (3,3), (6,0)

Find the optimal solution.`,hint:"Evaluate Z at each corner point and choose the minimum.",solution:"Optimal at (6,0) with Z = 12"},{id:3,title:"Maximize with Multiple Optima",problem:`Maximize Z = 2x + 3y
Corner points: (0,0), (5,0), (3,4), (0,6)

Find all optimal solutions.`,hint:"Evaluate Z at each corner. If two give the same value, both are optimal.",solution:"Optimal at (3,4) and (0,6) both give Z = 18"}],N=t=>{u(o=>({...o,[t]:!o[t]}))},k=()=>{const[t,o]=a.useState(3),[n,w]=a.useState(2),[Z,O]=a.useState([{x:0,y:0},{x:5,y:0},{x:4,y:2},{x:0,y:4}]),S=(i,l)=>t*i+n*l,m=Z.map((i,l)=>({...i,z:S(i.x,i.y),label:`(${i.x}, ${i.y})`})),s=Math.max(...m.map(i=>i.z)),h=Math.min(...m.map(i=>i.z));return e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4",children:"Interactive Objective Function Evaluator"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300 mb-3",children:["Z = ",t,"x + ",n,"y"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400",children:"Coefficient c₁ (x)"}),e.jsx("input",{type:"range",min:"0",max:"10",value:t,onChange:i=>o(Number(i.target.value)),className:"w-full"}),e.jsx("span",{className:"text-sm text-gray-600 dark:text-gray-400",children:t})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400",children:"Coefficient c₂ (y)"}),e.jsx("input",{type:"range",min:"0",max:"10",value:n,onChange:i=>w(Number(i.target.value)),className:"w-full"}),e.jsx("span",{className:"text-sm text-gray-600 dark:text-gray-400",children:n})]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:[e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"Maximum Z:"})," ",s]}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"Minimum Z:"})," ",h]})]})]}),e.jsx("div",{children:e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h5",{className:"text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",children:"Corner Point Evaluations"}),e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-gray-600 dark:text-gray-400",children:[e.jsx("th",{className:"text-left py-1",children:"Point"}),e.jsxs("th",{className:"text-left py-1",children:["Z = ",t,"x + ",n,"y"]}),e.jsx("th",{className:"text-left py-1",children:"Status"})]})}),e.jsx("tbody",{children:m.map((i,l)=>e.jsxs("tr",{className:p(i.z===s?"bg-green-100 dark:bg-green-900/30":"",i.z===h&&i.z!==s?"bg-red-100 dark:bg-red-900/30":""),children:[e.jsx("td",{className:"py-1 font-mono text-gray-700 dark:text-gray-300",children:i.label}),e.jsx("td",{className:"py-1 font-mono text-gray-700 dark:text-gray-300",children:i.z}),e.jsxs("td",{className:"py-1",children:[i.z===s&&e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓ Max"}),i.z===h&&i.z!==s&&e.jsx("span",{className:"text-red-600 dark:text-red-400",children:"Min"})]})]},l))})]})]})})]})]})};return e.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[e.jsxs("div",{className:"text-center mb-10",children:[e.jsx("h1",{className:"text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-all duration-300",children:"Evaluating the Objective Function at Corner Points"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto",children:"Learn how to find the optimal solution by evaluating the objective function at each corner point of the feasible region."})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 justify-center border-b border-gray-200 dark:border-gray-700 pb-4",children:f.map(t=>e.jsx("button",{onClick:()=>g(t.id),className:p("px-6 py-2 rounded-lg font-medium transition-all duration-300",r===t.id?"bg-orange-600 text-white shadow-lg shadow-orange-200 dark:shadow-orange-900/30":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-md"),children:t.label},t.id))}),e.jsxs("div",{className:"space-y-8",children:[r==="concept"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"What is Objective Function Evaluation?"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 leading-relaxed mb-4",children:"Objective function evaluation is the process of calculating the value of the objective function Z = c₁x + c₂y at each corner point of the feasible region. By comparing these values, we can identify which corner point gives the maximum (for maximization) or minimum (for minimization) objective value."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Key Concepts"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Optimal solution at a corner point"}),e.jsx("li",{children:"Evaluate Z at each corner point"}),e.jsx("li",{children:"Compare values to find max/min"}),e.jsx("li",{children:"Multiple optimal solutions possible"})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Why It Matters"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Finds the optimal solution"}),e.jsx("li",{children:"Identifies best decision"}),e.jsx("li",{children:"Reveals multiple optima"}),e.jsx("li",{children:"Essential for LP solving"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"How to Evaluate the Objective Function"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Step 1: List Corners"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1",children:[e.jsx("li",{children:"Identify all corner points"}),e.jsx("li",{children:"List coordinates (x, y)"}),e.jsx("li",{children:"Include origin if applicable"})]})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Step 2: Calculate Z"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1",children:[e.jsx("li",{children:"Substitute each point into Z"}),e.jsx("li",{children:"Z = c₁x + c₂y"}),e.jsx("li",{children:"Show all calculations"})]})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Step 3: Compare & Select"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1",children:[e.jsx("li",{children:"Compare all Z values"}),e.jsx("li",{children:"Select max or min"}),e.jsx("li",{children:"Identify optimal point"})]})]})]})]}),e.jsx(k,{}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"💡 Tips & Tricks for Evaluating Objective Functions"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h4",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"Professional Tips"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Be systematic - evaluate all corners"}),e.jsx("li",{children:"Check arithmetic carefully"}),e.jsx("li",{children:"Look for multiple optima"}),e.jsx("li",{children:"Verify optimal point is feasible"})]})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500",children:[e.jsx("h4",{className:"font-semibold text-purple-700 dark:text-purple-400 mb-2",children:"Common Mistakes"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Missing a corner point"}),e.jsx("li",{children:"Arithmetic errors in calculations"}),e.jsx("li",{children:"Not checking if point is feasible"}),e.jsx("li",{children:"Confusing max with min"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"✅ Mini Checklist"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"All corner points listed"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Each point evaluated in Z"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"All calculations checked"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Values compared correctly"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Max or min correctly identified"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Optimal solution verified"})]})]})]})]}),r==="examples"&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"space-y-6",children:v.map(t=>e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-bold text-gray-800 dark:text-gray-200 mb-3",children:t.title}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h5",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Problem"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.problem})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h5",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Solution"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.solution})]})]}),e.jsx("div",{className:"mt-4 flex justify-center",children:e.jsx("button",{onClick:()=>N(t.id),className:"px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all duration-300",children:x[t.id]?"Hide Detailed Steps":"Show Detailed Steps"})}),x[t.id]&&e.jsxs("div",{className:"mt-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h5",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"📝 Detailed Steps"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.detailedSolution})]})]},`example-${t.id}`))})}),r==="practice"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center",children:"Practice Problems"}),e.jsx("div",{className:"space-y-6",children:j.map(t=>e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 transition-all duration-300 hover:shadow-md",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:t.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:t.problem}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>b(c===t.id?null:t.id),className:"px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-all duration-300",children:c===t.id?"Hide Solution":"Check Solution"}),e.jsx("button",{onClick:()=>y(d===t.id?null:t.id),className:"px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300",children:d===t.id?"Hide Hint":"Show Hint"})]}),d===t.id&&e.jsx("div",{className:"mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800",children:e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"💡 Hint:"})," ",t.hint]})}),c===t.id&&e.jsx("div",{className:"mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800",children:e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:t.solution})})]},t.id))})]}),e.jsxs("div",{className:"bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 border border-orange-200 dark:border-orange-800",children:[e.jsx("h4",{className:"font-semibold text-orange-700 dark:text-orange-400 mb-2",children:"💡 Tips for Evaluating Objective Functions"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Be systematic:"})," List all corner points clearly"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Check arithmetic:"})," Recalculate to avoid errors"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Look for patterns:"})," Multiple optima when values tie"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Verify feasibility:"})," Ensure each point satisfies all constraints"]})]})]})]})]}),e.jsx("div",{className:"mt-12",children:e.jsx(C,{title:"Evaluating Objective Function FAQs",questions:M})}),e.jsx("div",{className:"mt-8",children:e.jsx(T,{content:z,title:"Evaluating the Objective Function at Corner Points",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Note",downloadFileName:"topic4_note.txt"})}),e.jsx("div",{className:"mt-8",children:e.jsx(E,{note:"Evaluating the objective function at corner points is where LP becomes decision-making. I tell my students that this step is like 'shopping' - you check the price (Z value) at each store (corner point) and choose the best deal. The key is to be systematic and check every corner point, because the optimal solution is always hiding at one of them. I encourage students to create a table showing each corner point and its Z value - this visual comparison makes it easy to identify the optimal solution."})})]})})};export{V as default};
