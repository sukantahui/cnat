import{r as d,j as e}from"./index-YkKVfVEM.js";import{c as f}from"./clsx-B-dksMZM.js";import{T as E}from"./TeacherSukantaHui-nIRku_xY.js";import{F as A}from"./FAQTemplate-B_PeLoo7.js";import{P as F}from"./PlainTextPrint-Bgzrldzq.js";import"./github-00a_zZrb.js";import"./createLucideIcon-Cim-rzMd.js";import"./git-branch-BC_-h9tN.js";const G=[{question:"What is a linear inequality?",shortAnswer:"A mathematical statement relating two linear expressions with an inequality symbol.",explanation:"Linear inequalities use <, >, ≤, or ≥ to show the relationship between two linear expressions. The solution is a region on a graph.",hint:"Inequality with linear expressions.",level:"basic",codeExample:"2x + y ≤ 6 is a linear inequality"},{question:"How do you graph a linear inequality?",shortAnswer:"Convert to equality, find intercepts, draw the line, test a point, and shade the region.",explanation:"Step 1: Replace inequality with =. Step 2: Find x and y intercepts. Step 3: Draw the line. Step 4: Test a point. Step 5: Shade the correct region.",hint:"Equality → intercepts → line → test → shade.",level:"basic",codeExample:"2x + y ≤ 6 → 2x + y = 6 → (3,0) and (0,6)"},{question:"What is the boundary line in a linear inequality?",shortAnswer:"The line formed by converting the inequality to an equality.",explanation:"The boundary line separates the graph into two regions. For ≤ or ≥, the line is solid. For < or >, the line is dashed.",hint:"Line from equality.",level:"intermediate",codeExample:"2x + y = 6 is the boundary line for 2x + y ≤ 6"},{question:"How do you determine which side to shade?",shortAnswer:"Test a point not on the line. If it satisfies the inequality, shade that side.",explanation:"Choose a test point (usually (0,0) if it's not on the line). If the point satisfies the inequality, shade the side containing the point. Otherwise, shade the other side.",hint:"Test a point, shade accordingly.",level:"intermediate",codeExample:"Test (0,0): 0 ≤ 6 ✓ → shade side with (0,0)"},{question:"What is the difference between solid and dashed lines?",shortAnswer:"Solid lines are for ≤ and ≥; dashed lines are for < and >.",explanation:"Solid lines include the boundary in the solution. Dashed lines exclude the boundary from the solution.",hint:"Solid = included, Dashed = excluded.",level:"basic",codeExample:"≤ or ≥ → solid line, < or > → dashed line"},{question:"What is a feasible region?",shortAnswer:"The overlapping shaded region that satisfies all inequalities in a system.",explanation:"When graphing multiple inequalities, the feasible region is where all shaded regions overlap. This represents all solutions to the system.",hint:"Overlap of all shaded regions.",level:"intermediate",codeExample:"Intersection of all shaded areas = feasible region"},{question:"How do you graph a system of inequalities?",shortAnswer:"Graph each inequality separately, then find the overlapping shaded region.",explanation:"Graph each inequality using the same method. The feasible region is where all shaded areas overlap.",hint:"Graph each, then overlap.",level:"intermediate",codeExample:"Graph 2x+y≤6 and x+2y≤8 → overlap is feasible region"},{question:"What is the test point method?",shortAnswer:"A method to determine which side of a boundary line to shade.",explanation:"Choose a point not on the line (often (0,0)). Substitute it into the inequality. If true, shade the side with that point. If false, shade the other side.",hint:"Test a point to decide shading.",level:"intermediate",codeExample:"Test (0,0): 0 ≤ 6 → true → shade side with (0,0)"},{question:"What does '≤' mean in graphing?",shortAnswer:"Less than or equal to - shade below the line with a solid line.",explanation:"The boundary is included (solid line) and the solution is on or below the line.",hint:"≤ = below, solid line.",level:"basic",codeExample:"2x + y ≤ 6 → solid line, shade below"},{question:"What does '≥' mean in graphing?",shortAnswer:"Greater than or equal to - shade above the line with a solid line.",explanation:"The boundary is included (solid line) and the solution is on or above the line.",hint:"≥ = above, solid line.",level:"basic",codeExample:"x + y ≥ 4 → solid line, shade above"},{question:"What does '<' mean in graphing?",shortAnswer:"Less than - shade below the line with a dashed line.",explanation:"The boundary is excluded (dashed line) and the solution is below the line.",hint:"< = below, dashed line.",level:"intermediate",codeExample:"2x + y < 6 → dashed line, shade below"},{question:"What does '>' mean in graphing?",shortAnswer:"Greater than - shade above the line with a dashed line.",explanation:"The boundary is excluded (dashed line) and the solution is above the line.",hint:"> = above, dashed line.",level:"intermediate",codeExample:"x + y > 4 → dashed line, shade above"},{question:"Why is (0,0) often used as a test point?",shortAnswer:"It's the easiest point to evaluate and is often not on the boundary line.",explanation:"Substituting (0,0) is simple because 0+0=0. If (0,0) is on the line, choose another point like (1,0) or (0,1).",hint:"Easiest point to test.",level:"basic",codeExample:"Test (0,0): 0 ≤ 6 → easy calculation"},{question:"What happens when (0,0) is on the boundary line?",shortAnswer:"Choose a different test point, such as (1,0) or (0,1).",explanation:"If (0,0) lies on the boundary line, it doesn't help determine which side to shade. Pick any other point not on the line.",hint:"Pick another point.",level:"intermediate",codeExample:"If line is x + y = 0, test (1,0) instead"},{question:"How do you find x-intercept for graphing?",shortAnswer:"Set y = 0 and solve for x.",explanation:"The x-intercept is where the line crosses the x-axis (y=0).",hint:"Set y = 0, solve for x.",level:"basic",codeExample:"2x + 0 = 6 → x = 3 → (3,0)"},{question:"How do you find y-intercept for graphing?",shortAnswer:"Set x = 0 and solve for y.",explanation:"The y-intercept is where the line crosses the y-axis (x=0).",hint:"Set x = 0, solve for y.",level:"basic",codeExample:"0 + y = 6 → y = 6 → (0,6)"},{question:"What is the slope of a line?",shortAnswer:"The slope indicates the steepness and direction of the line.",explanation:"Slope = (change in y)/(change in x). For a linear equation ax + by = c, the slope is -a/b.",hint:"Rise over run.",level:"intermediate",codeExample:"2x + y = 6 → slope = -2/1 = -2"},{question:"How do you graph a vertical line inequality?",shortAnswer:"Draw a vertical line at x = k and shade to the left or right.",explanation:"For x ≤ k, shade left of the line. For x ≥ k, shade right of the line.",hint:"Vertical line, shade left or right.",level:"intermediate",codeExample:"x ≤ 3 → vertical line at x=3, shade left"},{question:"How do you graph a horizontal line inequality?",shortAnswer:"Draw a horizontal line at y = k and shade above or below.",explanation:"For y ≤ k, shade below the line. For y ≥ k, shade above the line.",hint:"Horizontal line, shade above or below.",level:"intermediate",codeExample:"y ≥ 2 → horizontal line at y=2, shade above"},{question:"What is the importance of intercepts in graphing?",shortAnswer:"Intercepts give two points to accurately draw the boundary line.",explanation:"Using intercepts ensures the line is drawn correctly. Two points determine a straight line.",hint:"Two points define a line.",level:"basic",codeExample:"(3,0) and (0,6) define the line"}],C=`TOPIC 7: GRAPHICAL REPRESENTATION OF LINEAR INEQUALITIES\r
========================================================\r
\r
INTRODUCTION\r
------------\r
Graphing linear inequalities is the foundation of graphical LP. \r
Understanding how to graph inequalities and systems of inequalities \r
is essential for visualizing feasible regions and solving LP problems.\r
\r
WHAT IS A LINEAR INEQUALITY?\r
---------------------------\r
A linear inequality is a mathematical statement relating two linear \r
expressions using <, >, ≤, or ≥. The solution is a region on a graph.\r
\r
TYPES OF INEQUALITIES\r
--------------------\r
1. ≤ (Less than or equal to):\r
   - Solid line, shade below\r
\r
2. ≥ (Greater than or equal to):\r
   - Solid line, shade above\r
\r
3. < (Less than):\r
   - Dashed line, shade below\r
\r
4. > (Greater than):\r
   - Dashed line, shade above\r
\r
STEP-BY-STEP GRAPHING\r
---------------------\r
Step 1: Convert to equality\r
Replace the inequality symbol with =.\r
\r
Step 2: Find intercepts\r
- x-intercept: Set y = 0, solve for x\r
- y-intercept: Set x = 0, solve for y\r
\r
Step 3: Draw the line\r
- Solid line for ≤ or ≥\r
- Dashed line for < or >\r
\r
Step 4: Test a point\r
- Choose a point not on the line\r
- Usually (0,0) if possible\r
\r
Step 5: Shade the region\r
- If test point satisfies, shade that side\r
- If not, shade the other side\r
\r
EXAMPLE\r
-------\r
Graph: 2x + y ≤ 6\r
\r
Step 1: 2x + y = 6\r
Step 2: x-intercept: (3,0), y-intercept: (0,6)\r
Step 3: Solid line through (3,0) and (0,6)\r
Step 4: Test (0,0): 0 ≤ 6 ✓\r
Step 5: Shade side containing (0,0)\r
\r
SYSTEMS OF INEQUALITIES\r
-----------------------\r
To graph a system:\r
1. Graph each inequality separately\r
2. The feasible region is the overlap\r
3. Corner points are where boundaries intersect\r
\r
COMMON MISTAKES\r
---------------\r
1. Shading the wrong side\r
2. Using solid line for strict inequalities\r
3. Forgetting to test a point\r
4. Misidentifying intercepts\r
\r
BEST PRACTICES\r
--------------\r
1. Always test a point\r
2. Use intercepts for accuracy\r
3. Draw lines clearly\r
4. Label the shaded region\r
5. Check your work\r
\r
TEACHER'S NOTE\r
--------------\r
Graphing linear inequalities is the gateway to graphical LP. \r
I tell students that mastering this skill is like learning \r
to read a map - once you can read the map, you can navigate \r
anywhere."`,X=()=>{const[h,w]=d.useState("concept"),[p,j]=d.useState({}),[y,k]=d.useState("linear"),[P,L]=d.useState(2),[D,W]=d.useState(3),N=[{id:"concept",label:"Concept"},{id:"examples",label:"Examples"},{id:"practice",label:"Practice"}],c=[{id:"linear",label:"2x + y ≤ 6",a:2,b:1,c:6,symbol:"≤"},{id:"linear2",label:"x - y ≥ 2",a:1,b:-1,c:2,symbol:"≥"},{id:"linear3",label:"x + 2y ≤ 8",a:1,b:2,c:8,symbol:"≤"}],v=[{id:1,title:"Example 1: Basic Linear Inequality",problem:`Graph the inequality: 2x + y ≤ 6

Step-by-step solution:`,solution:`Step 1: Convert to equality: 2x + y = 6
Step 2: Find intercepts: (3,0) and (0,6)
Step 3: Plot the line
Step 4: Test point (0,0): 2(0) + 0 ≤ 6 → 0 ≤ 6 ✓
Step 5: Shade the side containing (0,0)`,detailedSolution:`Step 1: Replace inequality with equality
2x + y = 6

Step 2: Find x-intercept (y = 0)
2x + 0 = 6 → x = 3 → (3,0)

Step 3: Find y-intercept (x = 0)
0 + y = 6 → y = 6 → (0,6)

Step 4: Draw the line through (3,0) and (0,6)

Step 5: Test a point not on the line
Test (0,0): 2(0) + 0 ≤ 6 → 0 ≤ 6 ✓

Step 6: Shade the side containing (0,0)

The shaded region represents all solutions to 2x + y ≤ 6.`},{id:2,title:"Example 2: Greater Than Inequality",problem:`Graph the inequality: x - y ≥ 2

Step-by-step solution:`,solution:`Step 1: Convert to equality: x - y = 2
Step 2: Find intercepts: (2,0) and (0,-2)
Step 3: Plot the line
Step 4: Test point (0,0): 0 - 0 ≥ 2 → 0 ≥ 2 ✗
Step 5: Shade the side NOT containing (0,0)`,detailedSolution:`Step 1: Replace inequality with equality
x - y = 2

Step 2: Find x-intercept (y = 0)
x - 0 = 2 → x = 2 → (2,0)

Step 3: Find y-intercept (x = 0)
0 - y = 2 → y = -2 → (0,-2)

Step 4: Draw the line through (2,0) and (0,-2)

Step 5: Test a point not on the line
Test (0,0): 0 - 0 ≥ 2 → 0 ≥ 2 ✗

Step 6: Shade the side NOT containing (0,0)

The shaded region represents all solutions to x - y ≥ 2.`},{id:3,title:"Example 3: Graphing a System of Inequalities",problem:`Graph the system of inequalities:
2x + y ≤ 6
x + 2y ≤ 8
x ≥ 0, y ≥ 0

Find the feasible region.`,solution:`Step 1: Graph each inequality
Step 2: Find the intersection of all shaded regions
Step 3: The feasible region is the overlapping area
Step 4: Identify corner points: (0,0), (3,0), (2,2), (0,4)`,detailedSolution:`Step 1: Graph 2x + y ≤ 6
Line through (3,0) and (0,6)
Shade below the line

Step 2: Graph x + 2y ≤ 8
Line through (8,0) and (0,4)
Shade below the line

Step 3: Apply x ≥ 0 and y ≥ 0
Restrict to first quadrant

Step 4: Find intersection points
Intersection of 2x + y = 6 and x + 2y = 8:
2x + y = 6 → y = 6 - 2x
x + 2(6 - 2x) = 8 → x + 12 - 4x = 8 → -3x = -4 → x = 4/3 → y = 6 - 8/3 = 10/3

Step 5: Identify corner points
(0,0), (3,0), (4/3, 10/3), (0,4)`}],S=[{id:1,title:"Graph the Inequality",problem:`Graph the inequality: 3x + 2y ≤ 12

Find:
(a) x-intercept
(b) y-intercept
(c) Shade the correct region`,hint:"Convert to equality first. Test a point to determine shading.",solution:"x-intercept: (4,0), y-intercept: (0,6). Test (0,0): 0 ≤ 12 ✓, shade below the line."},{id:2,title:"Graph the System",problem:`Graph the system of inequalities:
x + y ≤ 6
2x + y ≤ 8
x ≥ 0, y ≥ 0

Find the feasible region.`,hint:"Graph each inequality separately, then find the overlapping region.",solution:"Corner points: (0,0), (4,0), (2,4), (0,6). Feasible region is the quadrilateral with these corners."},{id:3,title:"Determine the Inequality",problem:"A line passes through (0,4) and (2,0). The shaded region is below the line. Write the inequality.",hint:"Find the equation of the line first, then determine the inequality direction.",solution:"Slope = (0-4)/(2-0) = -2. Equation: y = -2x + 4 → 2x + y = 4. Since shaded below: 2x + y ≤ 4."}],q=()=>{const t=c.find(n=>n.id===y)||c[0],{a:i,b:o,c:s,symbol:r}=t,m=s/i,u=s/o,x=i*1+o*1,b=r==="≤"?x<=s:x>=s;return e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4",children:"Interactive Inequality Grapher"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Select Inequality:"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:c.map(n=>e.jsx("button",{onClick:()=>k(n.id),className:f("px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300",y===n.id?"bg-blue-600 text-white":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"),children:n.label},n.id))})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"Inequality:"})," ",i,"x + ",o,"y ",r," ",s]}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"x-intercept:"})," (",m.toFixed(1),", 0)"]}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"y-intercept:"})," (0, ",u.toFixed(1),")"]}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"Test point (1,1):"})," ",i,"(1) + ",o,"(1) = ",x," ",r," ",s," → ",b?"✓ True":"✗ False"]}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300 mt-2",children:[e.jsx("span",{className:"font-semibold",children:"Shading:"})," ",b?"Shade side containing (1,1)":"Shade side NOT containing (1,1)"]})]})]}),e.jsx("div",{className:"flex justify-center items-center",children:e.jsxs("svg",{viewBox:"0 0 400 400",className:"w-full max-w-sm h-auto",children:[e.jsx("rect",{x:"0",y:"0",width:"400",height:"400",fill:"#f8f9fa",className:"dark:fill-gray-700"}),Array.from({length:10},(n,a)=>e.jsxs("g",{children:[e.jsx("line",{x1:40+a*36,y1:"40",x2:40+a*36,y2:"360",stroke:"#e9ecef",strokeWidth:"0.5",className:"dark:stroke-gray-600"}),e.jsx("line",{x1:"40",y1:40+a*36,x2:"360",y2:40+a*36,stroke:"#e9ecef",strokeWidth:"0.5",className:"dark:stroke-gray-600"})]},`grid-${a}`)),e.jsx("line",{x1:"40",y1:"360",x2:"360",y2:"360",stroke:"#333",strokeWidth:"2",className:"dark:stroke-gray-300"}),e.jsx("line",{x1:"40",y1:"360",x2:"40",y2:"40",stroke:"#333",strokeWidth:"2",className:"dark:stroke-gray-300"}),e.jsx("text",{x:"355",y:"380",textAnchor:"end",fontSize:"12",fill:"#333",className:"dark:fill-gray-300",children:"x"}),e.jsx("text",{x:"25",y:"45",textAnchor:"middle",fontSize:"12",fill:"#333",className:"dark:fill-gray-300",children:"y"}),e.jsx("text",{x:"40",y:"380",textAnchor:"start",fontSize:"10",fill:"#666",className:"dark:fill-gray-400",children:"0"}),Array.from({length:9},(n,a)=>{const l=a+1,g=40+l*36,I=360-l*36;return e.jsxs("g",{children:[e.jsx("text",{x:g,y:"375",textAnchor:"middle",fontSize:"8",fill:"#666",className:"dark:fill-gray-400",children:l}),e.jsx("text",{x:"30",y:I+3,textAnchor:"end",fontSize:"8",fill:"#666",className:"dark:fill-gray-400",children:l})]},`scale-${a}`)}),(()=>{const n=40+Math.min(m,9)*36,a=360,l=40,g=360-Math.min(u,9)*36;return e.jsx("line",{x1:Math.min(n,360),y1:Math.min(a,360),x2:Math.min(l,360),y2:Math.max(g,40),stroke:"#FF6B6B",strokeWidth:"3",strokeDasharray:r==="≤"?"":"8,4"})})(),r==="≤"&&e.jsx("polygon",{points:"40,360 40,360 360,360 360,40",fill:"rgba(78, 205, 196, 0.15)",stroke:"none"}),r==="≥"&&e.jsx("polygon",{points:"40,40 40,360 360,360 360,40",fill:"rgba(78, 205, 196, 0.15)",stroke:"none"}),e.jsxs("text",{x:"200",y:"25",textAnchor:"middle",fontSize:"12",fill:"#FF6B6B",className:"dark:fill-red-400",children:[i,"x + ",o,"y ",r," ",s]}),e.jsxs("g",{transform:"translate(270, 40)",children:[e.jsx("rect",{x:"0",y:"0",width:"90",height:"50",rx:"5",fill:"white",stroke:"#ddd",strokeWidth:"1",className:"dark:fill-gray-700 dark:stroke-gray-600"}),e.jsx("line",{x1:"10",y1:"20",x2:"30",y2:"20",stroke:"#FF6B6B",strokeWidth:"3"}),e.jsx("text",{x:"35",y:"24",fontSize:"8",fill:"#555",className:"dark:fill-gray-400",children:"Constraint"}),e.jsx("rect",{x:"10",y:"35",width:"20",height:"10",fill:"rgba(78, 205, 196, 0.3)",stroke:"#4ECDC4",strokeWidth:"1"}),e.jsx("text",{x:"35",y:"44",fontSize:"8",fill:"#555",className:"dark:fill-gray-400",children:"Shaded"})]})]})})]})]})},T=t=>{j(i=>({...i,[t]:!i[t]}))};return e.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[e.jsxs("div",{className:"text-center mb-10",children:[e.jsx("h1",{className:"text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-all duration-300",children:"Graphical Representation of Linear Inequalities"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto",children:"Learn how to graph linear inequalities and systems of inequalities to visualize feasible regions for linear programming problems."})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 justify-center border-b border-gray-200 dark:border-gray-700 pb-4",children:N.map(t=>e.jsx("button",{onClick:()=>w(t.id),className:f("px-6 py-2 rounded-lg font-medium transition-all duration-300",h===t.id?"bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-blue-900/30":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-md"),children:t.label},t.id))}),e.jsxs("div",{className:"space-y-8",children:[h==="concept"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"What is a Linear Inequality?"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 leading-relaxed mb-4",children:"A linear inequality is a mathematical statement that relates two linear expressions using inequality symbols: <, >, ≤, or ≥. The solution to a linear inequality is a region on a graph, not just a single point."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Key Concepts"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Boundary line (from equality)"}),e.jsx("li",{children:"Feasible region (shaded area)"}),e.jsx("li",{children:"Test point method for shading"}),e.jsx("li",{children:"Systems of inequalities"})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Why It Matters"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Foundation for graphical LP"}),e.jsx("li",{children:"Visualizes feasible solutions"}),e.jsx("li",{children:"Identifies constraint boundaries"}),e.jsx("li",{children:"Essential for LP solving"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"How to Graph Linear Inequalities"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Step-by-Step Method"}),e.jsxs("ol",{className:"list-decimal list-inside text-sm text-gray-600 dark:text-gray-400 space-y-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Convert to equality:"})," Replace inequality with ="]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Find intercepts:"})," Set x=0 and y=0"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Draw the line:"})," Connect intercepts"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Test a point:"})," Use (0,0) if possible"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Shade the region:"})," Based on test result"]})]})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Inequality Directions"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"≤ (less than or equal):"})," Shade below the line"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"≥ (greater than or equal):"})," Shade above the line"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"< (less than):"})," Dashed line, shade below"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"> (greater than):"})," Dashed line, shade above"]})]})]})]})]}),e.jsx(q,{}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"💡 Tips & Tricks for Graphing Inequalities"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h4",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"Professional Tips"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Always test a point to verify shading"}),e.jsx("li",{children:"Use (0,0) when it's not on the line"}),e.jsx("li",{children:"Draw lines accurately with intercepts"}),e.jsx("li",{children:"Use dashed lines for strict inequalities"})]})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500",children:[e.jsx("h4",{className:"font-semibold text-purple-700 dark:text-purple-400 mb-2",children:"Common Mistakes"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Shading the wrong side"}),e.jsx("li",{children:"Using solid line for strict inequalities"}),e.jsx("li",{children:"Forgetting to test a point"}),e.jsx("li",{children:"Misidentifying intercepts"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"✅ Mini Checklist"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Inequality converted to equality"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"x-intercept calculated correctly"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"y-intercept calculated correctly"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Line drawn accurately"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Test point used to check shading"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Correct region shaded"})]})]})]})]}),h==="examples"&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"space-y-6",children:v.map(t=>e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-bold text-gray-800 dark:text-gray-200 mb-3",children:t.title}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h5",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Problem"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.problem})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h5",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Solution Overview"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.solution})]})]}),e.jsx("div",{className:"mt-4 flex justify-center",children:e.jsx("button",{onClick:()=>T(t.id),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300",children:p[t.id]?"Hide Detailed Steps":"Show Detailed Steps"})}),p[t.id]&&e.jsxs("div",{className:"mt-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h5",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"📝 Detailed Steps"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.detailedSolution})]})]},`example-${t.id}`))})}),h==="practice"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center",children:"Practice Problems"}),e.jsx("div",{className:"space-y-6",children:S.map(t=>e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 transition-all duration-300 hover:shadow-md",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:t.title}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap mb-2",children:t.problem}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>setShowSolution(showSolution===t.id?null:t.id),className:"px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-all duration-300",children:showSolution===t.id?"Hide Solution":"Check Solution"}),e.jsx("button",{onClick:()=>setShowHint(showHint===t.id?null:t.id),className:"px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300",children:showHint===t.id?"Hide Hint":"Show Hint"})]}),showHint===t.id&&e.jsx("div",{className:"mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800",children:e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"💡 Hint:"})," ",t.hint]})}),showSolution===t.id&&e.jsx("div",{className:"mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800",children:e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:t.solution})})]},t.id))})]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"💡 Tips for Graphing Inequalities"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Always find intercepts first:"})," They give you two points to draw the line"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Test a point:"})," Use (0,0) when possible to determine shading"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Check your work:"})," Pick a point in the shaded region to verify"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Practice regularly:"})," Graphing gets easier with practice"]})]})]})]})]}),e.jsx("div",{className:"mt-12",children:e.jsx(A,{title:"Graphical Representation of Linear Inequalities FAQs",questions:G})}),e.jsx("div",{className:"mt-8",children:e.jsx(F,{content:C,title:"Graphical Representation of Linear Inequalities",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Note",downloadFileName:"topic7_note.txt"})}),e.jsx("div",{className:"mt-8",children:e.jsx(E,{note:"Graphing linear inequalities is the foundation of graphical LP. I tell my students that mastering this skill is like learning to read a map - once you can read the map, you can navigate anywhere. The key is understanding the relationship between the inequality symbol and the shading direction. I encourage students to always test a point, even when they're confident about the shading. This habit prevents errors and builds confidence."})})]})})};export{X as default};
