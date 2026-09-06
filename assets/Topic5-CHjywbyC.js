import{b as a,j as e,bg as y}from"./vendor-react-core-Doz9nIC6.js";import{T as b}from"./TeacherSukantaHui-DDN87fI5.js";import{F as p}from"./FAQTemplate-BHhlgA96.js";import{P as f}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-DEsnU7fn.js";const v=[{question:"What is a redundant constraint?",shortAnswer:"A constraint that does not affect the feasible region or optimal solution.",explanation:"Redundant constraints are always satisfied when other constraints are met. They can be removed without changing the solution.",hint:"Constraint that doesn't matter.",level:"basic",codeExample:"x ≤ 8 is redundant if the feasible region already ensures x ≤ 8"},{question:"How do you identify a redundant constraint graphically?",shortAnswer:"If a constraint line never touches the feasible region boundary, it's redundant.",explanation:"On a graph, redundant constraints are lines that lie outside or beyond the feasible region. They don't form part of the region's boundary.",hint:"Line outside the feasible region.",level:"intermediate",codeExample:"Feasible region: x + y ≤ 10, Redundant: x + y ≤ 20"},{question:"What is an essential constraint?",shortAnswer:"A constraint that forms part of the feasible region boundary and affects the solution.",explanation:"Essential constraints are necessary to define the feasible region. Removing them changes the region and potentially the optimal solution.",hint:"Constraint that matters.",level:"basic",codeExample:"x + y ≤ 10 is essential if it defines part of the feasible region"},{question:"Can a constraint be redundant for one objective but essential for another?",shortAnswer:"Yes, redundancy depends on the objective function direction.",explanation:"A constraint might be redundant when maximizing one objective but become binding when minimizing another objective.",hint:"Depends on what you're optimizing.",level:"advanced",codeExample:"x ≤ 5 might be redundant for maximizing x but essential for minimizing x"},{question:"How do you algebraically verify redundancy?",shortAnswer:"Check if the constraint is implied by a linear combination of other constraints.",explanation:"If a constraint can be derived from other constraints using non-negative coefficients, it's redundant.",hint:"Constraint is implied by others.",level:"advanced",codeExample:"From x ≤ 5 and y ≤ 3, derive x + y ≤ 8, then x + y ≤ 8 is redundant"},{question:"What is the difference between redundant and non-binding?",shortAnswer:"Redundant never affects the region; non-binding doesn't affect the optimal solution but may affect the region.",explanation:"A non-binding constraint has slack at the optimal solution but still forms part of the feasible region elsewhere. A redundant constraint doesn't affect the region at all.",hint:"Non-binding ≠ redundant.",level:"intermediate",codeExample:"Non-binding: constraint with slack at optimum, Redundant: constraint that never binds"},{question:"How do you identify redundant constraints algebraically?",shortAnswer:"Check if the constraint is never binding at any corner point of the feasible region.",explanation:"Find all corner points of the feasible region. If none of them satisfy the constraint as an equality, the constraint is redundant.",hint:"Test all corner points.",level:"advanced",codeExample:"If no corner point lies on x = 8, then x ≤ 8 is redundant"},{question:"What happens if you remove a redundant constraint?",shortAnswer:"The feasible region and optimal solution remain unchanged.",explanation:"Since the constraint doesn't affect the region, removing it doesn't change the set of feasible solutions or the optimal solution.",hint:"No change to solution.",level:"intermediate",codeExample:"Remove x ≤ 8, optimal solution remains the same"},{question:"Why is it important to identify redundant constraints?",shortAnswer:"It simplifies the problem and reduces computational effort.",explanation:"Removing redundant constraints makes the problem easier to solve and understand. It also reduces the complexity of the simplex method.",hint:"Simplify and reduce effort.",level:"intermediate",codeExample:"Fewer constraints = faster solution"},{question:"Can a redundant constraint become essential?",shortAnswer:"Yes, if other constraints are changed or removed.",explanation:"Redundancy depends on the full set of constraints. If other constraints are relaxed or removed, a previously redundant constraint may become essential.",hint:"Redundancy depends on other constraints.",level:"advanced",codeExample:"Remove other constraints → Redundant becomes essential"},{question:"What is a dominated constraint?",shortAnswer:"A constraint that is always less restrictive than another constraint.",explanation:"If constraint A is weaker than constraint B (A's feasible region contains B's region), A is dominated and redundant.",hint:"Weaker than another constraint.",level:"advanced",codeExample:"x ≤ 10 is dominated by x ≤ 5"},{question:"How do you identify dominated constraints?",shortAnswer:"Compare the restrictions imposed by different constraints.",explanation:"If one constraint is always looser than another for all feasible values, the looser constraint is dominated and redundant.",hint:"Compare constraint tightness.",level:"advanced",codeExample:"x ≤ 10 is looser than x ≤ 5 → x ≤ 10 is dominated"},{question:"What is the difference between redundant and inactive constraints?",shortAnswer:"Redundant never affects the region; inactive doesn't affect the current optimal solution.",explanation:"Inactive constraints may become binding for different objectives. Redundant constraints are never binding for any objective.",hint:"Inactive may become active, redundant never.",level:"intermediate",codeExample:"Inactive: constraint with slack at current optimum, Redundant: never binds"},{question:"How do you prove a constraint is redundant using corner points?",shortAnswer:"Show that the constraint is not binding at any corner point of the feasible region.",explanation:"If the constraint is not satisfied as an equality at any corner point, it's redundant. All corner points are strictly inside the constraint.",hint:"Check all corner points.",level:"advanced",codeExample:"If all corner points have x < 8, then x ≤ 8 is redundant"},{question:"What is the role of redundant constraints in real-world problems?",shortAnswer:"They may represent safety margins, legal requirements, or historical constraints.",explanation:"Even if mathematically redundant, constraints may have practical importance for safety, compliance, or organizational reasons.",hint:"Practical importance beyond math.",level:"intermediate",codeExample:"Safety buffer constraints may be redundant but important"}],j=`TOPIC 5: IDENTIFYING REDUNDANT AND ESSENTIAL CONSTRAINTS\r
========================================================\r
\r
INTRODUCTION\r
------------\r
In LP problems, some constraints may not affect the feasible region \r
or optimal solution. These are called redundant constraints. \r
Identifying them helps simplify problems and focus on what really \r
matters.\r
\r
DEFINITIONS\r
-----------\r
Redundant Constraint:\r
- Does not affect the feasible region\r
- Can be removed without changing the solution\r
- Never forms part of the region boundary\r
\r
Essential Constraint:\r
- Forms part of the feasible region boundary\r
- Cannot be removed without changing the solution\r
- Necessary to define the feasible region\r
\r
HOW TO IDENTIFY REDUNDANCY\r
--------------------------\r
Graphical Method:\r
1. Plot all constraints\r
2. Identify the feasible region\r
3. Check which constraints form the boundary\r
4. Constraints not touching the region are redundant\r
\r
Algebraic Method:\r
1. Find all corner points\r
2. Check if constraint is binding at any corner\r
3. If never binding at any corner → redundant\r
\r
CHARACTERISTICS\r
---------------\r
Essential Constraints:\r
- Form part of feasible region boundary\r
- Have zero slack at some corner point\r
- Affect the optimal solution\r
\r
Redundant Constraints:\r
- Never form part of feasible region boundary\r
- Always have positive slack\r
- Don't affect the optimal solution\r
\r
TYPES OF REDUNDANCY\r
-------------------\r
1. Completely Redundant:\r
   - Always satisfied regardless of other constraints\r
   - Example: x ≤ 100 when region is x ≤ 50\r
\r
2. Implicitly Redundant:\r
   - Implied by combination of other constraints\r
   - Example: x + y ≤ 10 implied by x ≤ 5 and y ≤ 5\r
\r
3. Dominated Constraints:\r
   - Always looser than another constraint\r
   - Example: x ≤ 10 dominated by x ≤ 5\r
\r
WHY IDENTIFY REDUNDANT CONSTRAINTS?\r
-----------------------------------\r
1. Simplify the problem\r
2. Reduce computational effort\r
3. Better understanding\r
4. Focus on important constraints\r
5. Cleaner formulation\r
\r
COMMON MISTAKES\r
---------------\r
1. Removing constraints without verification\r
2. Confusing non-binding with redundant\r
3. Not checking all corner points\r
4. Assuming redundancy without proof\r
\r
BEST PRACTICES\r
--------------\r
1. Graph all constraints first\r
2. Test corner points systematically\r
3. Verify by removing and checking\r
4. Document reasoning\r
5. Consider practical importance\r
\r
TEACHER'S NOTE\r
--------------\r
Identifying redundant constraints is a valuable skill that \r
simplifies LP problems. The graphical method is the most intuitive \r
way, but algebraic verification is important too. Always verify by \r
removing the suspected redundant constraint and checking if the \r
solution changes."`,I=()=>{const[t,d]=a.useState("concept"),[s,l]=a.useState({}),[r,c]=a.useState(null),[i,h]=a.useState(null),x=[{id:"concept",label:"Concept"},{id:"examples",label:"Examples"},{id:"practice",label:"Practice"}],m=[{id:1,title:"Example 1: Redundant Constraint",problem:`Maximize Z = 3x + 2y
Subject to:
x + y ≤ 10
2x + y ≤ 16
x ≤ 8
x, y ≥ 0

Which constraint is redundant?`,solution:"The constraint x ≤ 8 is redundant because the feasible region formed by the other constraints already ensures x ≤ 8.",detailedSolution:`Step 1: Graph the constraints
- Constraint 1: x + y ≤ 10
- Constraint 2: 2x + y ≤ 16
- Constraint 3: x ≤ 8

Step 2: Find intersection points
- Intersection of Constraint 1 and 2: x + y = 10, 2x + y = 16 → x = 6, y = 4
- This point satisfies x ≤ 8

Step 3: Check if Constraint 3 ever binds
- At the optimal point (6,4), x = 6 ≤ 8
- Constraint 3 never limits the feasible region

Conclusion: x ≤ 8 is redundant. Removing it doesn't change the optimal solution.`},{id:2,title:"Example 2: Essential Constraints",problem:`Maximize Z = 4x + 5y
Subject to:
x + 2y ≤ 12
3x + y ≤ 15
x ≤ 4
x, y ≥ 0

Which constraints are essential?`,solution:"All three constraints are essential. Each forms part of the feasible region boundary.",detailedSolution:`Step 1: Graph the constraints
- Constraint 1: x + 2y ≤ 12
- Constraint 2: 3x + y ≤ 15
- Constraint 3: x ≤ 4

Step 2: Find corner points
- Intersection of 1 and 2: x + 2y = 12, 3x + y = 15 → x = 3.6, y = 4.2
- Intersection of 1 and 3: x + 2y = 12, x = 4 → y = 4
- Intersection of 2 and 3: 3x + y = 15, x = 4 → y = 3

Step 3: Check each constraint
- Each constraint forms part of the feasible region boundary
- Each constraint can be binding at some corner point

Conclusion: All constraints are essential. None can be removed.`},{id:3,title:"Example 3: Multiple Redundant Constraints",problem:`Maximize Z = 2x + 3y
Subject to:
x + y ≤ 10
2x + y ≤ 15
x + 2y ≤ 16
x ≤ 7
x, y ≥ 0

Identify all redundant constraints.`,solution:"The constraints x ≤ 7 and x + 2y ≤ 16 are redundant.",detailedSolution:`Step 1: Graph the constraints
- Constraint 1: x + y ≤ 10
- Constraint 2: 2x + y ≤ 15
- Constraint 3: x + 2y ≤ 16
- Constraint 4: x ≤ 7

Step 2: Find the feasible region
- The active constraints are 1 and 2
- Constraint 1 and 2 intersect at (5,5)

Step 3: Check redundant constraints
- x ≤ 7: At (5,5), x = 5 ≤ 7 (never binding)
- x + 2y ≤ 16: At (5,5), 5 + 2(5) = 15 ≤ 16 (never binding)

Conclusion: Both x ≤ 7 and x + 2y ≤ 16 are redundant.`},{id:4,title:"Example 4: Identifying by Comparison",problem:`Maximize Z = 5x + 4y
Subject to:
3x + 2y ≤ 18
2x + 4y ≤ 20
x + y ≤ 8
x, y ≥ 0

Determine which constraints are essential and which are redundant.`,solution:"The constraint x + y ≤ 8 is redundant. The other two are essential.",detailedSolution:`Step 1: Graph the constraints
- Constraint 1: 3x + 2y ≤ 18
- Constraint 2: 2x + 4y ≤ 20
- Constraint 3: x + y ≤ 8

Step 2: Find intersections
- Constraint 1 and 2: 3x + 2y = 18, 2x + 4y = 20 → x = 4, y = 3
- At this point: x + y = 7 ≤ 8

Step 3: Check each constraint
- Constraint 3 is never binding at the optimal corner points
- The feasible region is determined by Constraints 1 and 2

Conclusion: x + y ≤ 8 is redundant. Constraints 1 and 2 are essential.`}],g=[{id:1,title:"Find the Redundant Constraint",problem:`Maximize Z = 4x + 3y
Subject to:
2x + y ≤ 12
x + 3y ≤ 15
x ≤ 5
x, y ≥ 0

Identify the redundant constraint.`,hint:"Graph the constraints. Which constraint line never touches the feasible region?",solution:"x ≤ 5 is redundant because x is already bounded by the other constraints at the optimal corner points."},{id:2,title:"Essential or Redundant?",problem:`Maximize Z = 6x + 4y
Subject to:
3x + 2y ≤ 24
2x + 5y ≤ 30
x + y ≤ 10
x, y ≥ 0

Which constraints are essential?`,hint:"Graph all constraints and find the feasible region. Which constraints form the boundary?",solution:"Constraints 1 and 2 are essential. Constraint 3 (x + y ≤ 10) is redundant."},{id:3,title:"Multiple Redundancy",problem:`Maximize Z = 3x + 5y
Subject to:
x + y ≤ 12
2x + 3y ≤ 30
x ≤ 8
y ≤ 10
x, y ≥ 0

Identify all redundant constraints.`,hint:"Graph the constraints. Which constraints never bind at any corner point?",solution:"x ≤ 8 and y ≤ 10 are redundant because the feasible region is already bounded by x + y ≤ 12 and 2x + 3y ≤ 30."}],u=n=>{l(o=>({...o,[n]:!o[n]}))};return e.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[e.jsxs("div",{className:"text-center mb-10",children:[e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-all duration-300",children:"Identifying Redundant and Essential Constraints"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto",children:"Learn how to identify which constraints are essential to the feasible region and which are redundant and can be removed without affecting the optimal solution."})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 justify-center border-b border-gray-200 dark:border-gray-700 pb-4",children:x.map(n=>e.jsx("button",{onClick:()=>d(n.id),className:y("px-6 py-2 rounded-lg font-medium transition-all duration-300",t===n.id?"bg-cyan-600 text-white shadow-lg shadow-cyan-200 dark:shadow-cyan-900/30":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-md"),children:n.label},n.id))}),e.jsxs("div",{className:"space-y-8",children:[t==="concept"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"What are Redundant Constraints?"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 leading-relaxed mb-4",children:"A redundant constraint is a constraint that does not affect the feasible region or the optimal solution. Removing a redundant constraint leaves the feasible region unchanged and does not change the optimal solution."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Key Characteristics"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Never forms part of feasible region boundary"}),e.jsx("li",{children:"Always has slack at optimal solution"}),e.jsx("li",{children:"Removing it doesn't change the solution"}),e.jsx("li",{children:"Often identified by graphing"})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Why Identify Redundancy?"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Simplify the problem"}),e.jsx("li",{children:"Reduce computational effort"}),e.jsx("li",{children:"Focus on important constraints"}),e.jsx("li",{children:"Better understanding of the problem"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"Types of Constraints"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500 transition-all duration-300 hover:shadow-lg",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Essential"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Forms part of feasible region boundary. Cannot be removed."}),e.jsx("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:"x + y ≤ 10"})]}),e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500 transition-all duration-300 hover:shadow-lg",children:[e.jsx("h4",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"Redundant"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Never affects feasible region. Can be removed."}),e.jsx("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:"x ≤ 8"})]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500 transition-all duration-300 hover:shadow-lg",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Conditionally Redundant"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Redundant for some objectives, essential for others."}),e.jsx("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:"x + 2y ≤ 16"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"How to Identify Redundant Constraints"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Graphical Method"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1",children:[e.jsx("li",{children:"Plot all constraints on a graph"}),e.jsx("li",{children:"Identify the feasible region"}),e.jsx("li",{children:"Check which constraints form the boundary"}),e.jsx("li",{children:"Constraints not touching the region are redundant"})]})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Algebraic Method"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1",children:[e.jsx("li",{children:"Check if constraint is implied by others"}),e.jsx("li",{children:"Test corner points in the constraint"}),e.jsx("li",{children:"If never binding at any corner, it's redundant"}),e.jsx("li",{children:"Use linear combinations to prove redundancy"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"💡 Tips & Tricks for Identifying Redundancy"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h4",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"Professional Tips"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Start by graphing all constraints"}),e.jsx("li",{children:"Look for constraints far from the region"}),e.jsx("li",{children:"Check if constraint is implied by others"}),e.jsx("li",{children:"Remove and test if solution changes"})]})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500",children:[e.jsx("h4",{className:"font-semibold text-purple-700 dark:text-purple-400 mb-2",children:"Common Mistakes"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Removing constraints without verification"}),e.jsx("li",{children:"Assuming a constraint is redundant"}),e.jsx("li",{children:"Missing conditionally redundant constraints"}),e.jsx("li",{children:"Not checking all corner points"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"✅ Mini Checklist"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"All constraints graphed"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Feasible region identified"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Boundary constraints identified"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Corner points tested"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Redundant constraints removed and verified"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Solution unchanged after removal"})]})]})]})]}),t==="examples"&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"space-y-6",children:m.map(n=>e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-bold text-gray-800 dark:text-gray-200 mb-3",children:n.title}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h5",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Problem"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:n.problem})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h5",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Solution"}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:n.solution})]})]}),e.jsx("div",{className:"mt-4 flex justify-center",children:e.jsx("button",{onClick:()=>u(n.id),className:"px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-all duration-300",children:s[n.id]?"Hide Analysis":"Show Analysis"})}),s[n.id]&&e.jsxs("div",{className:"mt-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h5",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"📝 Detailed Analysis"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:n.detailedSolution})]})]},`example-${n.id}`))})}),t==="practice"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center",children:"Practice Problems"}),e.jsx("div",{className:"space-y-6",children:g.map(n=>e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 transition-all duration-300 hover:shadow-md",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:n.title}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap mb-2",children:n.problem}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-3",children:n.hint}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>c(r===n.id?null:n.id),className:"px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-all duration-300",children:r===n.id?"Hide Answer":"Check Answer"}),e.jsx("button",{onClick:()=>h(i===n.id?null:n.id),className:"px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300",children:i===n.id?"Hide Hint":"Show Hint"})]}),i===n.id&&e.jsx("div",{className:"mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800",children:e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"💡 Hint:"})," ",n.hint]})}),r===n.id&&e.jsx("div",{className:"mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800",children:e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:n.solution})})]},n.id))})]}),e.jsxs("div",{className:"bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-6 border border-cyan-200 dark:border-cyan-800",children:[e.jsx("h4",{className:"font-semibold text-cyan-700 dark:text-cyan-400 mb-2",children:"💡 Tips for Identifying Redundancy"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Graph first:"})," Visual inspection is the easiest way to spot redundancy"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Test corner points:"})," If a constraint never binds at any corner, it's redundant"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Check implication:"})," See if the constraint is implied by others"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Verify by removal:"})," Remove the constraint and check if the solution changes"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Consider objectives:"})," A constraint may be redundant for one objective but essential for another"]})]})]})]})]}),e.jsx("div",{className:"mt-12",children:e.jsx(p,{title:"Redundant and Essential Constraints FAQs",questions:v})}),e.jsx("div",{className:"mt-8",children:e.jsx(f,{content:j,title:"Identifying Redundant and Essential Constraints",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Note",downloadFileName:"topic5_note.txt"})}),e.jsx("div",{className:"mt-8",children:e.jsx(b,{note:"Identifying redundant constraints is a valuable skill that simplifies LP problems. I tell my students to think of it like cleaning up a room - removing unnecessary items makes the space cleaner and easier to work with. The graphical method is the most intuitive way to spot redundancy, but algebraic verification is important too. I encourage students to always verify by removing the suspected redundant constraint and checking if the solution changes. This builds confidence and prevents mistakes."})})]})})};export{I as default};
