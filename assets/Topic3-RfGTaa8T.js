import{r,j as e}from"./index-YkKVfVEM.js";import{c as y}from"./clsx-B-dksMZM.js";import{T as A}from"./TeacherSukantaHui-nIRku_xY.js";import{F as P}from"./FAQTemplate-B_PeLoo7.js";import{P as R}from"./PlainTextPrint-Bgzrldzq.js";import"./github-00a_zZrb.js";import"./createLucideIcon-Cim-rzMd.js";import"./git-branch-BC_-h9tN.js";const L=[{question:"What is the feasible region in LP?",shortAnswer:"The set of all points that satisfy all constraints simultaneously.",explanation:"The feasible region is the intersection of all constraint half-planes. It contains all possible solutions to the LP problem.",hint:"All points that satisfy every constraint.",level:"basic",codeExample:"Feasible region = intersection of all shaded areas"},{question:"How do you find the feasible region?",shortAnswer:"Graph all constraints, shade each half-plane, and find where all shaded regions overlap.",explanation:"Step 1: Graph each constraint as a line. Step 2: Shade the feasible side of each. Step 3: The overlap is the feasible region.",hint:"Graph → Shade → Overlap.",level:"intermediate",codeExample:"Intersection of all shaded half-planes"},{question:"What shape is the feasible region?",shortAnswer:"Always a convex polygon (bounded) or unbounded region.",explanation:"The feasible region is always convex, meaning there are no indentations. It can be bounded (closed polygon) or unbounded (extends to infinity).",hint:"Convex polygon or unbounded region.",level:"intermediate",codeExample:"Bounded: polygon shape, Unbounded: extends to infinity"},{question:"What is a corner point of the feasible region?",shortAnswer:"A vertex where two constraint lines intersect.",explanation:"Corner points are the vertices of the feasible region. They are formed by the intersection of two constraint lines and are the only candidates for optimal solutions.",hint:"Vertex of the feasible region.",level:"intermediate",codeExample:"(0,0), (5,0), (4,2), (0,4) are corner points"},{question:"How do you determine if the feasible region is bounded?",shortAnswer:"If the region is enclosed on all sides by constraints, it's bounded.",explanation:"A bounded feasible region is completely enclosed by constraint lines. An unbounded region extends to infinity in at least one direction.",hint:"Enclosed vs. extending to infinity.",level:"intermediate",codeExample:"Bounded: x+y≤10, x≥0, y≥0; Unbounded: x+y≥5, x≥0, y≥0"},{question:"What happens if the feasible region is empty?",shortAnswer:"The LP problem is infeasible - no solution exists.",explanation:"If constraints are contradictory, the feasible region is empty. There is no point that satisfies all constraints.",hint:"No solution exists.",level:"advanced",codeExample:"x+y≤5 and x+y≥8 → empty feasible region"},{question:"What happens if the feasible region is unbounded?",shortAnswer:"The optimal solution may not exist (unbounded solution).",explanation:"If the feasible region extends to infinity in the direction of optimization, the objective function can improve indefinitely.",hint:"Objective can go to infinity.",level:"advanced",codeExample:"Max Z = x + y, x, y ≥ 0 → unbounded region"},{question:"How do you test if a point is in the feasible region?",shortAnswer:"Substitute the point into ALL constraints and verify each is satisfied.",explanation:"A point is feasible if it satisfies every single constraint. Test each constraint with the point.",hint:"Check all constraints.",level:"intermediate",codeExample:"Check (4,2) in 2x+y≤10 and x+2y≤8"},{question:"What is the relationship between constraints and the feasible region?",shortAnswer:"Each constraint defines a boundary of the feasible region.",explanation:"Constraints are the 'walls' that enclose the feasible region. Each constraint removes points that don't satisfy it.",hint:"Constraints define the boundaries.",level:"intermediate",codeExample:"2x+y≤10 is one boundary of the feasible region"},{question:"How do you identify redundant constraints?",shortAnswer:"Constraints that don't affect the feasible region shape are redundant.",explanation:"If a constraint never forms part of the feasible region boundary, it's redundant. The region would be the same without it.",hint:"Constraint that doesn't change the region.",level:"advanced",codeExample:"x≤10 is redundant if region is x≤5"},{question:"What is a half-plane in LP?",shortAnswer:"The region on one side of a constraint line.",explanation:"Each constraint divides the plane into two half-planes. The feasible side is the half-plane that satisfies the constraint.",hint:"Side of a constraint line.",level:"intermediate",codeExample:"Below 2x+y=10 is one half-plane"},{question:"How do you shade the feasible side of a constraint?",shortAnswer:"Test a point not on the line. If it satisfies the constraint, shade that side.",explanation:"Choose a test point (usually (0,0)). If it satisfies the inequality, the feasible side contains the test point.",hint:"Test a point, shade accordingly.",level:"intermediate",codeExample:"Test (0,0): 0≤10 → shade side with origin"},{question:"What is the difference between feasible and optimal?",shortAnswer:"Feasible means satisfies all constraints; optimal is the best feasible solution.",explanation:"A feasible solution is any point in the feasible region. The optimal solution is the feasible point that gives the best objective value.",hint:"Feasible = valid, Optimal = best valid.",level:"basic",codeExample:"All points in region are feasible; the best one is optimal"},{question:"How do you find the corners of the feasible region?",shortAnswer:"Find intersections of constraint lines that bound the region.",explanation:"Solve pairs of constraint equations to find intersection points. Only intersections that lie in the feasible region are corners.",hint:"Intersections of boundary lines.",level:"advanced",codeExample:"Solve 2x+y=10 and x+2y=8 → (4,2)"},{question:"What is the convexity property of the feasible region?",shortAnswer:"The line segment between any two points in the region is also in the region.",explanation:"Convexity means the feasible region has no indentations. This property is essential for LP's corner-point theorem.",hint:"Region has no indentations.",level:"advanced",codeExample:"If A and B are feasible, all points between them are feasible"}],M=`Topic 3\r
TOPIC 3: DETERMINING THE FEASIBLE REGION\r
========================================\r
\r
INTRODUCTION\r
------------\r
The feasible region is the set of all points that satisfy ALL \r
constraints of a linear programming problem. It represents all \r
possible solutions and is essential for finding the optimal solution.\r
\r
WHAT IS THE FEASIBLE REGION?\r
---------------------------\r
The feasible region is the intersection of all constraint half-planes. \r
It is always convex (no indentations) and can be bounded or unbounded.\r
\r
PROPERTIES\r
----------\r
1. Convex: Line between any two points in the region stays in the region\r
2. Contains all feasible solutions\r
3. Optimal solution at a corner point\r
4. Can be bounded or unbounded\r
\r
HOW TO FIND THE FEASIBLE REGION\r
-------------------------------\r
Step 1: Graph All Constraints\r
- Convert each inequality to equality\r
- Find intercepts and draw lines\r
- Use solid lines for ≤ or ≥\r
- Use dashed lines for < or >\r
\r
Step 2: Shade Half-Planes\r
- Test a point (usually origin)\r
- Shade the side that satisfies the constraint\r
- ≤ → shade below/left\r
- ≥ → shade above/right\r
\r
Step 3: Identify the Overlap\r
- Find where all shaded regions overlap\r
- This is the feasible region\r
- Identify corner points\r
- Check if region is bounded\r
\r
TYPES OF FEASIBLE REGIONS\r
-------------------------\r
Bounded Region:\r
- Enclosed on all sides\r
- Has finite area\r
- Always has a finite optimal solution\r
\r
Unbounded Region:\r
- Extends to infinity\r
- Infinite area\r
- May have no finite optimal solution\r
\r
Empty Region:\r
- No overlap of constraints\r
- Problem is infeasible\r
- No solution exists\r
\r
CORNER POINTS\r
-------------\r
Corner points are where constraint lines intersect and form the \r
vertices of the feasible region. The optimal solution will always \r
be at a corner point.\r
\r
COMMON MISTAKES\r
---------------\r
1. Shading the wrong side\r
2. Missing a constraint\r
3. Not including non-negativity\r
4. Forgetting to test points\r
5. Misidentifying corner points\r
\r
BEST PRACTICES\r
--------------\r
1. Test a point to verify shading\r
2. Check all constraints\r
3. Identify redundant constraints\r
4. Find all corner points\r
5. Verify the region\r
\r
TEACHER'S NOTE\r
--------------\r
The feasible region is the heart of graphical LP. I tell students \r
that finding the feasible region is like finding the 'playground' \r
where all solutions live. Always verify that a point in the feasible \r
region satisfies every single constraint."`,U=()=>{const[l,m]=r.useState("concept"),[g,p]=r.useState({}),[d,f]=r.useState(null),[c,u]=r.useState(null),j=[{id:"concept",label:"Concept"},{id:"examples",label:"Examples"},{id:"practice",label:"Practice"}],k=[{id:1,title:"Example 1: Two Constraints",problem:`Determine the feasible region for:
2x + y ≤ 10
x + 2y ≤ 8
x ≥ 0, y ≥ 0`,solution:`Feasible region is the shaded area bounded by:
(0,0), (5,0), (4,2), (0,4)`,detailedSolution:`Step 1: Graph each constraint

Constraint 1: 2x + y ≤ 10
- Convert to equality: 2x + y = 10
- Intercepts: (5,0) and (0,10)
- Test (0,0): 0 ≤ 10 ✓ → shade below

Constraint 2: x + 2y ≤ 8
- Convert to equality: x + 2y = 8
- Intercepts: (8,0) and (0,4)
- Test (0,0): 0 ≤ 8 ✓ → shade below

Constraint 3: x ≥ 0 (right of y-axis)
Constraint 4: y ≥ 0 (above x-axis)

Step 2: Find the feasible region
- The feasible region is where all shaded areas overlap
- Corner points: (0,0), (5,0), (4,2), (0,4)

Step 3: Verify the region
- All points in the region satisfy all constraints`},{id:2,title:"Example 2: Three Constraints",problem:`Determine the feasible region for:
x + y ≤ 6
2x + y ≤ 10
x + 2y ≤ 8
x ≥ 0, y ≥ 0`,solution:`Feasible region is the shaded area bounded by:
(0,0), (5,0), (4,2), (0,4)`,detailedSolution:`Step 1: Graph each constraint

Constraint 1: x + y ≤ 6
- Intercepts: (6,0) and (0,6)
- Test (0,0): 0 ≤ 6 ✓ → shade below

Constraint 2: 2x + y ≤ 10
- Intercepts: (5,0) and (0,10)
- Test (0,0): 0 ≤ 10 ✓ → shade below

Constraint 3: x + 2y ≤ 8
- Intercepts: (8,0) and (0,4)
- Test (0,0): 0 ≤ 8 ✓ → shade below

Constraint 4: x ≥ 0, y ≥ 0

Step 2: Find the feasible region
- The feasible region is where all shaded areas overlap
- Corner points: (0,0), (5,0), (4,2), (0,4)

Step 3: Identify redundant constraints
- x + y ≤ 6 is redundant (never binds)
- The feasible region is determined by constraints 2 and 3`},{id:3,title:"Example 3: Minimization with ≥ Constraints",problem:`Determine the feasible region for:
x + y ≥ 4
2x + y ≥ 6
x ≥ 0, y ≥ 0`,solution:"Feasible region is the unbounded region above both lines.",detailedSolution:`Step 1: Graph each constraint

Constraint 1: x + y ≥ 4
- Intercepts: (4,0) and (0,4)
- Test (0,0): 0 ≥ 4 ✗ → shade above

Constraint 2: 2x + y ≥ 6
- Intercepts: (3,0) and (0,6)
- Test (0,0): 0 ≥ 6 ✗ → shade above

Constraint 3: x ≥ 0, y ≥ 0

Step 2: Find the feasible region
- The feasible region is where all shaded areas overlap
- The region is unbounded (extends to infinity)
- Corner points: (3,0), (2,2), (0,4)`},{id:4,title:"Example 4: Mixed Constraints",problem:`Determine the feasible region for:
x + 2y ≤ 10
3x + y ≥ 6
x ≥ 1
y ≥ 0`,solution:"Feasible region is the bounded region between the constraints.",detailedSolution:`Step 1: Graph each constraint

Constraint 1: x + 2y ≤ 10
- Intercepts: (10,0) and (0,5)
- Test (0,0): 0 ≤ 10 ✓ → shade below

Constraint 2: 3x + y ≥ 6
- Intercepts: (2,0) and (0,6)
- Test (0,0): 0 ≥ 6 ✗ → shade above

Constraint 3: x ≥ 1 → shade right of x=1
Constraint 4: y ≥ 0 → shade above x-axis

Step 2: Find the feasible region
- The feasible region is where all shaded areas overlap
- Corner points: (1,0), (2,0), (2,4), (1,4.5)`}],v=[{id:1,title:"Find the Feasible Region",problem:`Find the feasible region for:
3x + 2y ≤ 12
x + y ≤ 5
x ≥ 0, y ≥ 0

List all corner points.`,hint:"Graph each constraint, shade the feasible region, and find the intersection points.",solution:"Corner points: (0,0), (4,0), (2,3), (0,5)"},{id:2,title:"Feasible Region with ≥ Constraints",problem:`Find the feasible region for:
2x + y ≥ 4
x + 3y ≥ 6
x ≥ 0, y ≥ 0

List all corner points.`,hint:"For ≥ constraints, shade above the line. The region is unbounded.",solution:"Corner points: (2,0), (0,4), intersection at (1.2, 1.6)"},{id:3,title:"Feasible Region with Mixed Constraints",problem:`Find the feasible region for:
x + 2y ≤ 8
3x + y ≥ 6
x ≥ 1
y ≥ 0

List all corner points.`,hint:"Graph each constraint carefully. The feasible region is bounded by these constraints.",solution:"Corner points: (1,0), (2,0), (2,3), (1,3.5)"}],w=n=>{p(i=>({...i,[n]:!i[n]}))},N=()=>{const n=[{id:"system1",label:"System 1: Two Constraints",constraints:[{a:2,b:1,c:10,symbol:"≤"},{a:1,b:2,c:8,symbol:"≤"}],region:"bounded"},{id:"system2",label:"System 2: Three Constraints",constraints:[{a:1,b:1,c:6,symbol:"≤"},{a:2,b:1,c:10,symbol:"≤"},{a:1,b:2,c:8,symbol:"≤"}],region:"bounded"},{id:"system3",label:"System 3: ≥ Constraints",constraints:[{a:1,b:1,c:4,symbol:"≥"},{a:2,b:1,c:6,symbol:"≥"}],region:"unbounded"}],[i,F]=r.useState(0),h=n[i];return e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4",children:"Interactive Feasible Region Visualizer"}),e.jsxs("div",{className:"mb-4",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Select System:"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:n.map((t,s)=>e.jsx("button",{onClick:()=>F(s),className:y("px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300",i===s?"bg-blue-600 text-white":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"),children:t.label},t.id))})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx("div",{children:e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("p",{className:"text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2",children:"Constraints:"}),h.constraints.map((t,s)=>e.jsxs("p",{className:"text-sm font-mono text-gray-700 dark:text-gray-300",children:[t.a,"x + ",t.b,"y ",t.symbol," ",t.c]},`c-${s}`)),e.jsx("p",{className:"text-sm font-mono text-gray-700 dark:text-gray-300",children:"x ≥ 0, y ≥ 0"}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300 mt-2",children:[e.jsx("span",{className:"font-semibold",children:"Region Type:"})," ",h.region]})]})}),e.jsx("div",{className:"flex justify-center items-center",children:e.jsxs("svg",{viewBox:"0 0 400 400",className:"w-full max-w-sm h-auto",children:[e.jsx("rect",{x:"0",y:"0",width:"400",height:"400",fill:"#f8f9fa",className:"dark:fill-gray-700"}),Array.from({length:10},(t,s)=>e.jsxs("g",{children:[e.jsx("line",{x1:40+s*32,y1:"40",x2:40+s*32,y2:"360",stroke:"#e9ecef",strokeWidth:"0.5",className:"dark:stroke-gray-600"}),e.jsx("line",{x1:"40",y1:40+s*32,x2:"360",y2:40+s*32,stroke:"#e9ecef",strokeWidth:"0.5",className:"dark:stroke-gray-600"})]},`grid-${s}`)),e.jsx("line",{x1:"40",y1:"360",x2:"360",y2:"360",stroke:"#333",strokeWidth:"2",className:"dark:stroke-gray-300"}),e.jsx("line",{x1:"40",y1:"360",x2:"40",y2:"40",stroke:"#333",strokeWidth:"2",className:"dark:stroke-gray-300"}),e.jsx("text",{x:"355",y:"380",textAnchor:"end",fontSize:"12",fill:"#333",className:"dark:fill-gray-300",children:"x"}),e.jsx("text",{x:"25",y:"45",textAnchor:"middle",fontSize:"12",fill:"#333",className:"dark:fill-gray-300",children:"y"}),e.jsx("text",{x:"40",y:"380",textAnchor:"start",fontSize:"10",fill:"#666",className:"dark:fill-gray-400",children:"0"}),Array.from({length:10},(t,s)=>{const a=s,x=40+a*32,o=360-a*32;return e.jsxs("g",{children:[e.jsx("text",{x,y:"375",textAnchor:"middle",fontSize:"8",fill:"#666",className:"dark:fill-gray-400",children:a}),e.jsx("text",{x:"30",y:o+3,textAnchor:"end",fontSize:"8",fill:"#666",className:"dark:fill-gray-400",children:a})]},`scale-${s}`)}),h.constraints.map((t,s)=>{const a=t.c/t.a,x=t.c/t.b,o=["#FF6B6B","#4ECDC4","#FFE66D"],b=o[s%o.length],S=40+Math.min(Math.max(a,0),10)*32,T=360,C=40,E=360-Math.min(Math.max(x,0),10)*32,I=t.symbol==="≤";return e.jsxs("g",{children:[e.jsx("line",{x1:Math.min(Math.max(S,40),360),y1:Math.min(Math.max(T,40),360),x2:Math.min(Math.max(C,40),360),y2:Math.min(Math.max(E,40),360),stroke:b,strokeWidth:"2",strokeDasharray:I?"":"8,4"}),e.jsxs("text",{x:340,y:50+s*20,fontSize:"9",fill:b,children:[t.a,"x + ",t.b,"y ",t.symbol," ",t.c]})]},`line-${s}`)}),i===0&&e.jsx("polygon",{points:"40,360 40,360 200,360 280,200 40,280",fill:"rgba(78, 205, 196, 0.15)",stroke:"none"}),i===1&&e.jsx("polygon",{points:"40,360 40,360 200,360 280,200 40,280",fill:"rgba(78, 205, 196, 0.15)",stroke:"none"}),i===2&&e.jsx("polygon",{points:"40,40 40,360 200,360 240,280 40,200",fill:"rgba(78, 205, 196, 0.15)",stroke:"none"}),i===0&&e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"40",cy:"360",r:"5",fill:"#FF4757"}),e.jsx("text",{x:"30",y:"375",fontSize:"8",fill:"#FF4757",children:"(0,0)"}),e.jsx("circle",{cx:"200",cy:"360",r:"5",fill:"#FF4757"}),e.jsx("text",{x:"190",y:"375",fontSize:"8",fill:"#FF4757",children:"(5,0)"}),e.jsx("circle",{cx:"240",cy:"280",r:"5",fill:"#FF4757"}),e.jsx("text",{x:"230",y:"275",fontSize:"8",fill:"#FF4757",children:"(4,2)"}),e.jsx("circle",{cx:"40",cy:"280",r:"5",fill:"#FF4757"}),e.jsx("text",{x:"10",y:"275",fontSize:"8",fill:"#FF4757",children:"(0,4)"})]}),i===1&&e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"40",cy:"360",r:"5",fill:"#FF4757"}),e.jsx("text",{x:"30",y:"375",fontSize:"8",fill:"#FF4757",children:"(0,0)"}),e.jsx("circle",{cx:"200",cy:"360",r:"5",fill:"#FF4757"}),e.jsx("text",{x:"190",y:"375",fontSize:"8",fill:"#FF4757",children:"(5,0)"}),e.jsx("circle",{cx:"240",cy:"280",r:"5",fill:"#FF4757"}),e.jsx("text",{x:"230",y:"275",fontSize:"8",fill:"#FF4757",children:"(4,2)"}),e.jsx("circle",{cx:"40",cy:"280",r:"5",fill:"#FF4757"}),e.jsx("text",{x:"10",y:"275",fontSize:"8",fill:"#FF4757",children:"(0,4)"})]}),i===2&&e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"120",cy:"360",r:"5",fill:"#FF4757"}),e.jsx("text",{x:"110",y:"375",fontSize:"8",fill:"#FF4757",children:"(3,0)"}),e.jsx("circle",{cx:"240",cy:"280",r:"5",fill:"#FF4757"}),e.jsx("text",{x:"230",y:"275",fontSize:"8",fill:"#FF4757",children:"(2,2)"}),e.jsx("circle",{cx:"40",cy:"280",r:"5",fill:"#FF4757"}),e.jsx("text",{x:"10",y:"275",fontSize:"8",fill:"#FF4757",children:"(0,4)"})]}),e.jsx("text",{x:"200",y:"25",textAnchor:"middle",fontSize:"10",fontWeight:"bold",fill:"#666",className:"dark:fill-gray-400",children:"Feasible Region (Shaded)"}),e.jsxs("g",{transform:"translate(270, 40)",children:[e.jsx("rect",{x:"0",y:"0",width:"90",height:"60",rx:"5",fill:"white",stroke:"#ddd",strokeWidth:"1",className:"dark:fill-gray-700 dark:stroke-gray-600"}),e.jsx("text",{x:"10",y:"18",fontSize:"9",fontWeight:"bold",fill:"#333",className:"dark:fill-gray-300",children:"Legend"}),e.jsx("rect",{x:"10",y:"28",width:"20",height:"10",fill:"rgba(78, 205, 196, 0.3)",stroke:"#4ECDC4",strokeWidth:"1"}),e.jsx("text",{x:"35",y:"37",fontSize:"8",fill:"#555",className:"dark:fill-gray-400",children:"Feasible"}),e.jsx("circle",{cx:"20",cy:"50",r:"4",fill:"#FF4757"}),e.jsx("text",{x:"35",y:"54",fontSize:"8",fill:"#555",className:"dark:fill-gray-400",children:"Corner"})]})]})})]})]})};return e.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[e.jsxs("div",{className:"text-center mb-10",children:[e.jsx("h1",{className:"text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-all duration-300",children:"Determining the Feasible Region"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto",children:"Learn how to find the feasible region from a system of constraint lines - the intersection of all constraints that contains all possible solutions to an LP problem."})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 justify-center border-b border-gray-200 dark:border-gray-700 pb-4",children:j.map(n=>e.jsx("button",{onClick:()=>m(n.id),className:y("px-6 py-2 rounded-lg font-medium transition-all duration-300",l===n.id?"bg-purple-600 text-white shadow-lg shadow-purple-200 dark:shadow-purple-900/30":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-md"),children:n.label},n.id))}),e.jsxs("div",{className:"space-y-8",children:[l==="concept"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"What is the Feasible Region?"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 leading-relaxed mb-4",children:"The feasible region is the set of all points that satisfy ALL constraints of a linear programming problem simultaneously. It represents all possible solutions to the problem. The feasible region is always a convex polygon (or unbounded region) formed by the intersection of all constraint half-planes."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Key Properties"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Intersection of all constraint half-planes"}),e.jsx("li",{children:"Always convex (no indentations)"}),e.jsx("li",{children:"Can be bounded or unbounded"}),e.jsx("li",{children:"Optimal solution at a corner point"})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Why It Matters"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Contains all feasible solutions"}),e.jsx("li",{children:"Limits where optimal solution can be"}),e.jsx("li",{children:"Essential for graphical LP"}),e.jsx("li",{children:"Identifies constraints that matter"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"How to Find the Feasible Region"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Step 1: Graph Constraints"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1",children:[e.jsx("li",{children:"Plot each constraint as a line"}),e.jsx("li",{children:"Use intercepts or slope-intercept"}),e.jsx("li",{children:"Draw solid lines for ≤ or ≥"}),e.jsxs("li",{children:["Draw dashed lines for ","<"," or ",">"]})]})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Step 2: Shade Half-Planes"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1",children:[e.jsx("li",{children:"Test a point (usually origin)"}),e.jsx("li",{children:"Shade the feasible side"}),e.jsx("li",{children:"≤ → shade below/left"}),e.jsx("li",{children:"≥ → shade above/right"})]})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Step 3: Identify Overlap"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1",children:[e.jsx("li",{children:"Find where all shaded regions overlap"}),e.jsx("li",{children:"This is the feasible region"}),e.jsx("li",{children:"Identify corner points"}),e.jsx("li",{children:"Check if region is bounded"})]})]})]})]}),e.jsx(N,{}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"💡 Tips & Tricks for Finding the Feasible Region"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h4",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"Professional Tips"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Always test a point to verify shading"}),e.jsx("li",{children:"Use (0,0) when possible"}),e.jsx("li",{children:"Check all constraints are satisfied"}),e.jsx("li",{children:"Look for redundant constraints"})]})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500",children:[e.jsx("h4",{className:"font-semibold text-purple-700 dark:text-purple-400 mb-2",children:"Common Mistakes"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Shading the wrong side"}),e.jsx("li",{children:"Missing a constraint"}),e.jsx("li",{children:"Not including non-negativity"}),e.jsx("li",{children:"Forgetting to test points"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"✅ Mini Checklist"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"All constraints graphed correctly"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Half-planes shaded correctly"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Feasible region identified"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Corner points found"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Region checked for bounded/unbounded"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"All constraints verified"})]})]})]})]}),l==="examples"&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"space-y-6",children:k.map(n=>e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-bold text-gray-800 dark:text-gray-200 mb-3",children:n.title}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h5",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Problem"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:n.problem})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h5",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Solution"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:n.solution})]})]}),e.jsx("div",{className:"mt-4 flex justify-center",children:e.jsx("button",{onClick:()=>w(n.id),className:"px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300",children:g[n.id]?"Hide Detailed Steps":"Show Detailed Steps"})}),g[n.id]&&e.jsxs("div",{className:"mt-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h5",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"📝 Detailed Steps"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:n.detailedSolution})]})]},`example-${n.id}`))})}),l==="practice"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center",children:"Practice Problems"}),e.jsx("div",{className:"space-y-6",children:v.map(n=>e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 transition-all duration-300 hover:shadow-md",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:n.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:n.problem}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>f(d===n.id?null:n.id),className:"px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-all duration-300",children:d===n.id?"Hide Solution":"Check Solution"}),e.jsx("button",{onClick:()=>u(c===n.id?null:n.id),className:"px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300",children:c===n.id?"Hide Hint":"Show Hint"})]}),c===n.id&&e.jsx("div",{className:"mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800",children:e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"💡 Hint:"})," ",n.hint]})}),d===n.id&&e.jsx("div",{className:"mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800",children:e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:n.solution})})]},n.id))})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800",children:[e.jsx("h4",{className:"font-semibold text-purple-700 dark:text-purple-400 mb-2",children:"💡 Tips for Finding the Feasible Region"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Graph carefully:"})," Use intercepts for accuracy"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Test a point:"})," Always verify shading direction"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Check all constraints:"})," Don't miss any"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Identify redundant constraints:"})," Some may not affect the region"]})]})]})]})]}),e.jsx("div",{className:"mt-12",children:e.jsx(P,{title:"Determining the Feasible Region FAQs",questions:L})}),e.jsx("div",{className:"mt-8",children:e.jsx(R,{content:M,title:"Determining the Feasible Region",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Note",downloadFileName:"topic3_note.txt"})}),e.jsx("div",{className:"mt-8",children:e.jsx(A,{note:"The feasible region is the heart of graphical LP. I tell my students that finding the feasible region is like finding the 'playground' where all solutions live. The key insight is that the feasible region is always convex - there are no holes or indentations. This property is what makes LP problems solvable. I encourage students to think of the feasible region as the intersection of all constraints, and to always verify that a point in the feasible region satisfies every single constraint."})})]})})};export{U as default};
