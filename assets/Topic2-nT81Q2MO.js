import{b as s,j as e,bg as E}from"./vendor-react-core-Doz9nIC6.js";import{T as F}from"./TeacherSukantaHui-BaJcBHAy.js";import{F as A}from"./FAQTemplate-BHhlgA96.js";import{P as T}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-8ao-0upJ.js";const q=[{question:"What is a constraint line in LP?",shortAnswer:"A line representing the boundary of a constraint in a linear programming problem.",explanation:"Each constraint is plotted as a line on a graph. The line divides the plane into feasible and infeasible regions.",hint:"Boundary of a constraint.",level:"basic",codeExample:"3x + 2y = 120 is a constraint line"},{question:"What is the easiest way to plot a constraint line?",shortAnswer:"Using x and y intercepts.",explanation:"Find the x-intercept (set y=0) and y-intercept (set x=0), plot both points, and draw a line through them.",hint:"Use intercepts for quick plotting.",level:"basic",codeExample:"3x + 2y = 120 → (40,0) and (0,60)"},{question:"How do you plot a vertical constraint line?",shortAnswer:"Draw a vertical line at x = k.",explanation:"A vertical constraint has the form x = k. Plot points with x = k and draw a vertical line through them.",hint:"Vertical line at constant x.",level:"intermediate",codeExample:"x = 4 → vertical line at x = 4"},{question:"How do you plot a horizontal constraint line?",shortAnswer:"Draw a horizontal line at y = k.",explanation:"A horizontal constraint has the form y = k. Plot points with y = k and draw a horizontal line through them.",hint:"Horizontal line at constant y.",level:"intermediate",codeExample:"y = 3 → horizontal line at y = 3"},{question:"What is the x-intercept method for plotting lines?",shortAnswer:"Find the x-intercept by setting y = 0 and solving for x.",explanation:"The x-intercept is where the line crosses the x-axis. Plot this point, then find the y-intercept and connect them.",hint:"Set y = 0, solve for x.",level:"basic",codeExample:"3x + 2y = 120 → y=0 → 3x=120 → x=40 → (40,0)"},{question:"What is the y-intercept method for plotting lines?",shortAnswer:"Find the y-intercept by setting x = 0 and solving for y.",explanation:"The y-intercept is where the line crosses the y-axis. Plot this point, then find the x-intercept and connect them.",hint:"Set x = 0, solve for y.",level:"basic",codeExample:"3x + 2y = 120 → x=0 → 2y=120 → y=60 → (0,60)"},{question:"What if the constraint line passes through the origin?",shortAnswer:"Both intercepts are at the origin (0,0), so use another method.",explanation:"If the line passes through the origin, intercepts don't give two distinct points. Use slope or find another point on the line.",hint:"Origin point needs another method.",level:"intermediate",codeExample:"2x + 3y = 0 → passes through origin"},{question:"How do you plot a line with fractional intercepts?",shortAnswer:"Plot the fractions as decimal approximations or find integer points.",explanation:"If intercepts are fractions, you can plot them as decimals or find other integer points on the line.",hint:"Use decimals or integer points.",level:"intermediate",codeExample:"4x + 6y = 12 → (3,0) and (0,2) are integers"},{question:"How do you check if a point is on a constraint line?",shortAnswer:"Substitute the point into the equation and verify it satisfies the equality.",explanation:"If the point (x,y) satisfies the equation, it lies on the line. This is useful for checking your plot.",hint:"Substitute and verify.",level:"intermediate",codeExample:"Check (4,0) in 3x + 2y = 12 → 12 = 12 ✓"},{question:"What is the slope-intercept form of a constraint?",shortAnswer:"y = mx + b, where m is slope and b is y-intercept.",explanation:"The slope-intercept form makes it easy to plot lines using the y-intercept and slope.",hint:"y = mx + b form.",level:"intermediate",codeExample:"3x + 2y = 12 → y = -3/2x + 6"},{question:"How do you convert a constraint to slope-intercept form?",shortAnswer:"Solve the equation for y.",explanation:"Isolate y on one side of the equation. The coefficient of x is the slope, and the constant is the y-intercept.",hint:"Solve for y.",level:"intermediate",codeExample:"3x + 2y = 12 → y = -3/2x + 6"},{question:"What is the slope of a constraint line?",shortAnswer:"The slope indicates the steepness and direction of the line.",explanation:"Slope = (change in y)/(change in x). For ax + by = c, the slope is -a/b.",hint:"Rise over run.",level:"intermediate",codeExample:"3x + 2y = 12 → slope = -3/2"},{question:"How do you plot multiple constraint lines?",shortAnswer:"Plot each line separately using intercepts on the same graph.",explanation:"Plot each constraint line on the same coordinate plane. The feasible region is where all constraints overlap.",hint:"Plot each line on the same graph.",level:"intermediate",codeExample:"Plot 3x+2y=12 and x+y=5 on same graph"},{question:"What if a constraint has no intercept?",shortAnswer:"The line is either vertical or horizontal.",explanation:"If a line has no x-intercept, it's horizontal (y = k). If it has no y-intercept, it's vertical (x = k).",hint:"Vertical or horizontal line.",level:"intermediate",codeExample:"x = 4 has no y-intercept, y = 3 has no x-intercept"},{question:"How do you plot a line using slope and a point?",shortAnswer:"Plot the point, then use the slope to find another point.",explanation:"From a known point, move according to the slope (rise/run) to find another point. Draw the line through both.",hint:"Use slope to find second point.",level:"advanced",codeExample:"Slope = 2, point (1,3) → another point (2,5)"},{question:"What is the relationship between constraint lines and the feasible region?",shortAnswer:"Constraint lines form the boundaries of the feasible region.",explanation:"The feasible region is the intersection of all half-planes defined by the constraints. Constraint lines are the boundaries of these half-planes.",hint:"Lines define the boundaries.",level:"intermediate",codeExample:"Lines 3x+2y=12 and x+y=5 bound the feasible region"},{question:"How do you label constraint lines on a graph?",shortAnswer:"Write the equation of the line next to it.",explanation:"Label each line with its equation (e.g., 3x + 2y = 12). This helps identify constraints when finding the feasible region.",hint:"Label with equation.",level:"basic",codeExample:"Label line as 3x + 2y = 12"},{question:"What is the standard form of a linear equation?",shortAnswer:"ax + by = c, where a, b, and c are constants.",explanation:"The standard form is useful for finding intercepts. To find intercepts, set one variable to zero and solve for the other.",hint:"ax + by = c form.",level:"basic",codeExample:"3x + 2y = 12 is in standard form"}],I=`TOPIC 2: PLOTTING CONSTRAINT LINES\r
==================================\r
\r
INTRODUCTION\r
------------\r
Plotting constraint lines is a fundamental skill in graphical LP. \r
Each constraint in an LP problem becomes a line on the coordinate \r
plane, and the feasible region is determined by the intersection \r
of all constraint lines.\r
\r
WHAT IS A CONSTRAINT LINE?\r
--------------------------\r
A constraint line is the graphical representation of the boundary \r
of a constraint. It divides the plane into feasible and infeasible \r
regions.\r
\r
METHODS TO PLOT CONSTRAINT LINES\r
--------------------------------\r
Method 1: Intercepts\r
1. Convert inequality to equality\r
2. Find x-intercept (set y = 0)\r
3. Find y-intercept (set x = 0)\r
4. Plot both points\r
5. Draw line through them\r
\r
Method 2: Slope-Intercept\r
1. Convert to y = mx + b\r
2. Plot y-intercept (0,b)\r
3. Use slope to find another point\r
4. Draw line through points\r
\r
Method 3: Special Lines\r
1. Vertical: x = k\r
2. Horizontal: y = k\r
3. Draw line at constant value\r
\r
EXAMPLE\r
-------\r
Constraint: 3x + 2y = 120\r
\r
x-intercept (y = 0):\r
3x + 2(0) = 120\r
3x = 120\r
x = 40\r
x-intercept = (40, 0)\r
\r
y-intercept (x = 0):\r
3(0) + 2y = 120\r
2y = 120\r
y = 60\r
y-intercept = (0, 60)\r
\r
Plot (40,0) and (0,60) and draw line.\r
\r
SPECIAL CASES\r
-------------\r
Vertical Line (x = k):\r
- Draw vertical line at x = k\r
- x-intercept: (k, 0)\r
- No y-intercept (unless k = 0)\r
\r
Horizontal Line (y = k):\r
- Draw horizontal line at y = k\r
- y-intercept: (0, k)\r
- No x-intercept (unless k = 0)\r
\r
Line Through Origin (ax + by = 0):\r
- Both intercepts at (0,0)\r
- Use slope to find another point\r
\r
KEY TERMS\r
---------\r
• Constraint Line: Boundary of a constraint\r
• x-intercept: Point where line crosses x-axis\r
• y-intercept: Point where line crosses y-axis\r
• Slope: Steepness and direction of line\r
• Feasible Region: Overlap of all constraints\r
\r
COMMON MISTAKES\r
---------------\r
1. Forgetting to convert inequality to equality\r
2. Plotting intercepts incorrectly\r
3. Drawing line through wrong points\r
4. Not labeling constraint lines\r
\r
BEST PRACTICES\r
--------------\r
1. Use intercepts when possible\r
2. Check your work with substitution\r
3. Use graph paper for accuracy\r
4. Label all constraint lines\r
5. Plot multiple lines on same graph\r
\r
TEACHER'S NOTE\r
--------------\r
Plotting constraint lines accurately is essential for graphical \r
LP. I tell students that each constraint line is like a fence \r
that limits where you can go. Practice plotting lines until \r
it becomes quick and accurate."`,B=()=>{const[c,u]=s.useState("concept"),[m,b]=s.useState({}),[x,f]=s.useState(null),[p,j]=s.useState(null),k=[{id:"concept",label:"Concept"},{id:"examples",label:"Examples"},{id:"practice",label:"Practice"}],w=[{id:1,title:"Example 1: Basic Constraint Line",problem:"Plot the constraint line: 2x + 3y = 12",solution:`Intercepts: (6, 0) and (0, 4)
Draw line through these points.`,detailedSolution:`Step 1: Find x-intercept (set y = 0)
2x + 3(0) = 12
2x = 12
x = 6
x-intercept = (6, 0)

Step 2: Find y-intercept (set x = 0)
2(0) + 3y = 12
3y = 12
y = 4
y-intercept = (0, 4)

Step 3: Plot the points
Plot (6, 0) and (0, 4) on the coordinate plane

Step 4: Draw the line
Connect the points with a straight line

Step 5: Label the line
Label as 2x + 3y = 12`},{id:2,title:"Example 2: Constraint with Negative Slope",problem:"Plot the constraint line: 3x - 2y = 6",solution:`Intercepts: (2, 0) and (0, -3)
Draw line through these points.`,detailedSolution:`Step 1: Find x-intercept (set y = 0)
3x - 2(0) = 6
3x = 6
x = 2
x-intercept = (2, 0)

Step 2: Find y-intercept (set x = 0)
3(0) - 2y = 6
-2y = 6
y = -3
y-intercept = (0, -3)

Step 3: Plot the points
Plot (2, 0) and (0, -3) on the coordinate plane

Step 4: Draw the line
Connect the points with a straight line

Step 5: Label the line
Label as 3x - 2y = 6`},{id:3,title:"Example 3: Vertical Constraint Line",problem:"Plot the constraint line: x = 4",solution:`Vertical line at x = 4
x-intercept: (4, 0)
No y-intercept`,detailedSolution:`Step 1: Identify the type of line
x = 4 is a vertical line

Step 2: Find any points on the line
All points have x = 4
Points: (4, 0), (4, 3), (4, -2)

Step 3: Plot the points
Plot (4, 0), (4, 3), (4, -2)

Step 4: Draw the line
Draw a vertical line through x = 4

Step 5: Label the line
Label as x = 4`},{id:4,title:"Example 4: Horizontal Constraint Line",problem:"Plot the constraint line: y = 3",solution:`Horizontal line at y = 3
y-intercept: (0, 3)
No x-intercept`,detailedSolution:`Step 1: Identify the type of line
y = 3 is a horizontal line

Step 2: Find any points on the line
All points have y = 3
Points: (0, 3), (2, 3), (-1, 3)

Step 3: Plot the points
Plot (0, 3), (2, 3), (-1, 3)

Step 4: Draw the line
Draw a horizontal line through y = 3

Step 5: Label the line
Label as y = 3`},{id:5,title:"Example 5: Constraint with Fractional Intercepts",problem:"Plot the constraint line: 4x + 6y = 12",solution:`Intercepts: (3, 0) and (0, 2)
Draw line through these points.`,detailedSolution:`Step 1: Find x-intercept (set y = 0)
4x + 6(0) = 12
4x = 12
x = 3
x-intercept = (3, 0)

Step 2: Find y-intercept (set x = 0)
4(0) + 6y = 12
6y = 12
y = 2
y-intercept = (0, 2)

Step 3: Plot the points
Plot (3, 0) and (0, 2) on the coordinate plane

Step 4: Draw the line
Connect the points with a straight line

Step 5: Label the line
Label as 4x + 6y = 12`}],N=[{id:1,title:"Plot Constraint Line",problem:`Plot the constraint line: 2x + 4y = 8

Find:
(a) x-intercept
(b) y-intercept
(c) Draw the line`,hint:"Find intercepts by setting y=0 and x=0, then plot and connect.",solution:`x-intercept: (4, 0), y-intercept: (0, 2)
Line through these points.`},{id:2,title:"Plot Constraint Line with Negative Intercept",problem:`Plot the constraint line: 2x - y = 4

Find intercepts and draw the line.`,hint:"Find intercepts: set y=0 for x-intercept, set x=0 for y-intercept.",solution:`x-intercept: (2, 0), y-intercept: (0, -4)
Line through these points.`},{id:3,title:"Plot Multiple Constraint Lines",problem:`Plot these constraint lines on the same graph:
3x + 2y = 12
x + y = 5

Find where they intersect.`,hint:"Plot each line separately using intercepts. Find intersection by solving the system.",solution:`Line 1: (4,0) and (0,6)
Line 2: (5,0) and (0,5)
Intersection: (2, 3)`}],v=t=>{b(h=>({...h,[t]:!h[t]}))},S=()=>{const[t,h]=s.useState(2),[d,P]=s.useState(3),[l,C]=s.useState(12),a=l/t,r=l/d;return e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4",children:"Interactive Line Plotter"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300 mb-3",children:["Equation: ",t,"x + ",d,"y = ",l]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400",children:"Coefficient a (x)"}),e.jsx("input",{type:"range",min:"1",max:"10",value:t,onChange:i=>h(Number(i.target.value)),className:"w-full"}),e.jsx("span",{className:"text-sm text-gray-600 dark:text-gray-400",children:t})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400",children:"Coefficient b (y)"}),e.jsx("input",{type:"range",min:"1",max:"10",value:d,onChange:i=>P(Number(i.target.value)),className:"w-full"}),e.jsx("span",{className:"text-sm text-gray-600 dark:text-gray-400",children:d})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400",children:"Constant c"}),e.jsx("input",{type:"range",min:"1",max:"20",value:l,onChange:i=>C(Number(i.target.value)),className:"w-full"}),e.jsx("span",{className:"text-sm text-gray-600 dark:text-gray-400",children:l})]})]}),e.jsxs("div",{className:"mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:[e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"x-intercept:"})," (",a.toFixed(1),", 0)"]}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"y-intercept:"})," (0, ",r.toFixed(1),")"]})]})]}),e.jsx("div",{className:"flex justify-center items-center",children:e.jsxs("svg",{viewBox:"0 0 400 400",className:"w-full max-w-sm h-auto",children:[e.jsx("rect",{x:"0",y:"0",width:"400",height:"400",fill:"#f8f9fa",className:"dark:fill-gray-700"}),Array.from({length:10},(i,n)=>e.jsxs("g",{children:[e.jsx("line",{x1:40+n*32,y1:"40",x2:40+n*32,y2:"360",stroke:"#e9ecef",strokeWidth:"0.5",className:"dark:stroke-gray-600"}),e.jsx("line",{x1:"40",y1:40+n*32,x2:"360",y2:40+n*32,stroke:"#e9ecef",strokeWidth:"0.5",className:"dark:stroke-gray-600"})]},`grid-${n}`)),e.jsx("line",{x1:"40",y1:"360",x2:"360",y2:"360",stroke:"#333",strokeWidth:"2",className:"dark:stroke-gray-300"}),e.jsx("line",{x1:"40",y1:"360",x2:"40",y2:"40",stroke:"#333",strokeWidth:"2",className:"dark:stroke-gray-300"}),e.jsx("text",{x:"355",y:"380",textAnchor:"end",fontSize:"12",fill:"#333",className:"dark:fill-gray-300",children:"x"}),e.jsx("text",{x:"25",y:"45",textAnchor:"middle",fontSize:"12",fill:"#333",className:"dark:fill-gray-300",children:"y"}),e.jsx("text",{x:"40",y:"380",textAnchor:"start",fontSize:"10",fill:"#666",className:"dark:fill-gray-400",children:"0"}),Array.from({length:10},(i,n)=>{const o=n,g=40+o*32,y=360-o*32;return e.jsxs("g",{children:[e.jsx("text",{x:g,y:"375",textAnchor:"middle",fontSize:"8",fill:"#666",className:"dark:fill-gray-400",children:o}),e.jsx("text",{x:"30",y:y+3,textAnchor:"end",fontSize:"8",fill:"#666",className:"dark:fill-gray-400",children:o})]},`scale-${n}`)}),(()=>{const i=Math.min(a,10),n=Math.min(r,10),o=40+(i>0?i*32:40),g=360,y=40,L=360-(n>0?n*32:0);return e.jsx("line",{x1:Math.min(o,360),y1:Math.min(g,360),x2:Math.min(y,360),y2:Math.max(L,40),stroke:"#FF6B6B",strokeWidth:"3",children:e.jsx("animate",{attributeName:"stroke-dashoffset",values:"0;50",dur:"3s",repeatCount:"indefinite"})})})(),a>=0&&a<=10&&e.jsxs("g",{children:[e.jsx("circle",{cx:40+a*32,cy:"360",r:"7",fill:"#4ECDC4",stroke:"white",strokeWidth:"2",children:e.jsx("animate",{attributeName:"r",values:"7;9;7",dur:"1.5s",repeatCount:"indefinite"})}),e.jsxs("text",{x:40+a*32,y:"380",textAnchor:"middle",fontSize:"9",fill:"#4ECDC4",children:["(",a.toFixed(1),",0)"]})]}),r>=0&&r<=10&&e.jsxs("g",{children:[e.jsx("circle",{cx:"40",cy:360-r*32,r:"7",fill:"#FFE66D",stroke:"white",strokeWidth:"2",children:e.jsx("animate",{attributeName:"r",values:"7;9;7",dur:"1.5s",begin:"0.5s",repeatCount:"indefinite"})}),e.jsxs("text",{x:"10",y:360-r*32+3,textAnchor:"start",fontSize:"9",fill:"#FFE66D",children:["(0,",r.toFixed(1),")"]})]}),e.jsxs("text",{x:"200",y:"25",textAnchor:"middle",fontSize:"12",fill:"#FF6B6B",className:"dark:fill-red-400",children:[t,"x + ",d,"y = ",l]}),e.jsxs("g",{transform:"translate(270, 40)",children:[e.jsx("rect",{x:"0",y:"0",width:"90",height:"80",rx:"5",fill:"white",stroke:"#ddd",strokeWidth:"1",className:"dark:fill-gray-700 dark:stroke-gray-600"}),e.jsx("text",{x:"10",y:"18",fontSize:"9",fontWeight:"bold",fill:"#333",className:"dark:fill-gray-300",children:"Legend"}),e.jsx("line",{x1:"10",y1:"35",x2:"30",y2:"35",stroke:"#FF6B6B",strokeWidth:"3"}),e.jsx("text",{x:"35",y:"39",fontSize:"8",fill:"#555",className:"dark:fill-gray-400",children:"Constraint"}),e.jsx("circle",{cx:"20",cy:"55",r:"5",fill:"#4ECDC4"}),e.jsx("text",{x:"30",y:"59",fontSize:"8",fill:"#555",className:"dark:fill-gray-400",children:"x-intercept"}),e.jsx("circle",{cx:"20",cy:"70",r:"5",fill:"#FFE66D"}),e.jsx("text",{x:"30",y:"74",fontSize:"8",fill:"#555",className:"dark:fill-gray-400",children:"y-intercept"})]})]})})]})]})};return e.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[e.jsxs("div",{className:"text-center mb-10",children:[e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-all duration-300",children:"Plotting Constraint Lines"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto",children:"Learn how to plot constraint lines on a coordinate plane using intercepts and other methods - a critical skill for solving LP problems graphically."})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 justify-center border-b border-gray-200 dark:border-gray-700 pb-4",children:k.map(t=>e.jsx("button",{onClick:()=>u(t.id),className:E("px-6 py-2 rounded-lg font-medium transition-all duration-300",c===t.id?"bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-blue-900/30":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-md"),children:t.label},t.id))}),e.jsxs("div",{className:"space-y-8",children:[c==="concept"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"What are Constraint Lines?"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 leading-relaxed mb-4",children:"Constraint lines are the graphical representation of the boundaries of constraints in a linear programming problem. Each constraint is plotted as a line on a coordinate plane, and the feasible region is determined by the intersection of all constraint lines."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Key Concepts"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Each constraint becomes a line on the graph"}),e.jsx("li",{children:"Intercepts are the easiest way to plot lines"}),e.jsx("li",{children:"Lines divide the plane into feasible and infeasible regions"}),e.jsx("li",{children:"Multiple lines form the feasible region"})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Why They Matter"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Foundation for graphical LP"}),e.jsx("li",{children:"Visualize resource constraints"}),e.jsx("li",{children:"Identify feasible region"}),e.jsx("li",{children:"Find corner points for optimization"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"How to Plot Constraint Lines"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Method 1: Intercepts"}),e.jsxs("ol",{className:"list-decimal list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1",children:[e.jsx("li",{children:"Convert to equality"}),e.jsx("li",{children:"Find x-intercept (y=0)"}),e.jsx("li",{children:"Find y-intercept (x=0)"}),e.jsx("li",{children:"Plot both points"}),e.jsx("li",{children:"Draw line through them"})]}),e.jsx("div",{className:"mt-2 text-xs text-gray-500 dark:text-gray-400",children:"Best for: Most linear equations"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Method 2: Slope-Intercept"}),e.jsxs("ol",{className:"list-decimal list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1",children:[e.jsx("li",{children:"Convert to y = mx + b"}),e.jsx("li",{children:"Plot y-intercept (0,b)"}),e.jsx("li",{children:"Use slope to find another point"}),e.jsx("li",{children:"Draw line through points"})]}),e.jsx("div",{className:"mt-2 text-xs text-gray-500 dark:text-gray-400",children:"Best for: Equations with clear slope"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Method 3: Special Lines"}),e.jsxs("ol",{className:"list-decimal list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1",children:[e.jsx("li",{children:"Vertical: x = k"}),e.jsx("li",{children:"Horizontal: y = k"}),e.jsx("li",{children:"Draw line at constant value"})]}),e.jsx("div",{className:"mt-2 text-xs text-gray-500 dark:text-gray-400",children:"Best for: Vertical or horizontal constraints"})]})]})]}),e.jsx(S,{}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"💡 Tips & Tricks for Plotting Constraint Lines"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h4",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"Professional Tips"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Always use intercepts when possible - it's the fastest method"}),e.jsx("li",{children:"Check your work by verifying points on the line"}),e.jsx("li",{children:"Use graph paper for accuracy"}),e.jsx("li",{children:"Label each constraint line clearly"})]})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500",children:[e.jsx("h4",{className:"font-semibold text-purple-700 dark:text-purple-400 mb-2",children:"Common Mistakes"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Forgetting to convert inequality to equality"}),e.jsx("li",{children:"Plotting intercepts incorrectly"}),e.jsx("li",{children:"Drawing line through wrong points"}),e.jsx("li",{children:"Not labeling constraint lines"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"✅ Mini Checklist"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Constraint converted to equality"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"x-intercept found correctly"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"y-intercept found correctly"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Points plotted accurately"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Line drawn through points"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Constraint line labeled"})]})]})]})]}),c==="examples"&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"space-y-6",children:w.map(t=>e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-bold text-gray-800 dark:text-gray-200 mb-3",children:t.title}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h5",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Problem"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.problem})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h5",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Solution"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.solution})]})]}),e.jsx("div",{className:"mt-4 flex justify-center",children:e.jsx("button",{onClick:()=>v(t.id),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300",children:m[t.id]?"Hide Detailed Steps":"Show Detailed Steps"})}),m[t.id]&&e.jsxs("div",{className:"mt-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h5",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"📝 Detailed Steps"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.detailedSolution})]})]},`example-${t.id}`))})}),c==="practice"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center",children:"Practice Problems"}),e.jsx("div",{className:"space-y-6",children:N.map(t=>e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 transition-all duration-300 hover:shadow-md",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:t.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:t.problem}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>f(x===t.id?null:t.id),className:"px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-all duration-300",children:x===t.id?"Hide Solution":"Check Solution"}),e.jsx("button",{onClick:()=>j(p===t.id?null:t.id),className:"px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300",children:p===t.id?"Hide Hint":"Show Hint"})]}),p===t.id&&e.jsx("div",{className:"mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800",children:e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"💡 Hint:"})," ",t.hint]})}),x===t.id&&e.jsx("div",{className:"mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800",children:e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:t.solution})})]},t.id))})]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"💡 Tips for Plotting Constraint Lines"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Use intercepts:"})," The quickest way to plot most lines"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Check your points:"})," Verify they satisfy the equation"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Use a ruler:"})," Draw straight lines for accuracy"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Label clearly:"})," Always label your constraint lines"]})]})]})]})]}),e.jsx("div",{className:"mt-12",children:e.jsx(A,{title:"Plotting Constraint Lines FAQs",questions:q})}),e.jsx("div",{className:"mt-8",children:e.jsx(T,{content:I,title:"Plotting Constraint Lines",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Note",downloadFileName:"topic2_note.txt"})}),e.jsx("div",{className:"mt-8",children:e.jsx(F,{note:"Plotting constraint lines is the visual foundation of graphical LP. I tell my students that each constraint line is like a fence - it defines a boundary that limits where you can go. The skill of accurately plotting lines using intercepts is essential for finding the feasible region and solving LP problems. I encourage students to practice plotting lines until they can do it quickly and accurately - this speed will be invaluable when solving complex LP problems."})})]})})};export{B as default};
