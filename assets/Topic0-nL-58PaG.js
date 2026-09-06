import{b as r,j as e,bg as u}from"./vendor-react-core-Doz9nIC6.js";import{T as y}from"./TeacherSukantaHui-DDN87fI5.js";import{F as v}from"./FAQTemplate-BHhlgA96.js";import{P as f}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-DEsnU7fn.js";const j=[{question:"What is the Simplex Method?",shortAnswer:"An algebraic algorithm for solving linear programming problems with any number of variables.",explanation:"The Simplex Method is a systematic procedure that finds the optimal solution by moving from one corner point to another, improving the objective value at each step.",hint:"Think of it as an algebraic search algorithm.",level:"basic",codeExample:"Simplex Method: algebraic, iterative, handles many variables"},{question:"Why is the graphical method limited to two variables?",shortAnswer:"Graphs can only visualize two dimensions (x and y axes).",explanation:"The graphical method relies on plotting constraints in 2D space. With three or more variables, we need higher-dimensional visualization which is not practical.",hint:"Graphs are 2D.",level:"basic",codeExample:"2 variables → 2D graph, 3+ variables → need algebra"},{question:"What is the main advantage of the Simplex Method over graphical method?",shortAnswer:"It can handle any number of variables and constraints.",explanation:"The Simplex Method is algebraic and systematic, making it suitable for large-scale problems with many variables and constraints.",hint:"Scalability and efficiency.",level:"intermediate",codeExample:"Handles 100+ variables, graphical handles only 2"},{question:"Who developed the Simplex Method?",shortAnswer:"George Dantzig in 1947.",explanation:"George Dantzig developed the Simplex Method while working for the U.S. Air Force. It revolutionized optimization and is still widely used today.",hint:"Developed in 1947.",level:"basic",codeExample:"George Dantzig, 1947"},{question:"What types of problems require the Simplex Method?",shortAnswer:"LP problems with more than 2 variables or many constraints.",explanation:"Any LP problem that cannot be solved graphically (due to dimension or scale) requires the Simplex Method.",hint:"Problems with 3+ variables.",level:"intermediate",codeExample:"3 variables, 5 variables, 100 variables"},{question:"How does the Simplex Method find the optimal solution?",shortAnswer:"It moves from one corner point to another, improving the objective value each time.",explanation:"The Simplex Method starts at a feasible corner point, then systematically moves to adjacent corner points with better objective values until no improvement is possible.",hint:"Corner point to corner point, improving each time.",level:"advanced",codeExample:"Start at (0,0) → move to better corner → continue until optimal"},{question:"What is the fundamental theorem of LP that supports the Simplex Method?",shortAnswer:"The optimal solution of an LP problem is at a corner point of the feasible region.",explanation:"This theorem justifies the Simplex Method's approach of searching corner points. It only needs to check corner points, not all feasible points.",hint:"Optimal at corner points.",level:"advanced",codeExample:"Check corner points → find optimal"},{question:"Why can't we use graphical method for real-world problems?",shortAnswer:"Real-world problems often have many variables and constraints.",explanation:"Business, industry, and government problems typically involve dozens or hundreds of variables, making graphical methods impractical.",hint:"Too many variables to graph.",level:"intermediate",codeExample:"50 products, 30 resources → cannot graph"},{question:"What is the difference between algebraic and geometric methods?",shortAnswer:"Algebraic uses equations and arithmetic; geometric uses graphs and visualization.",explanation:"The graphical method is geometric (visual). The Simplex Method is algebraic (numerical), making it more suitable for computation.",hint:"Equations vs. graphs.",level:"intermediate",codeExample:"Algebraic: row operations, Geometric: plotting lines"},{question:"Can the Simplex Method be automated?",shortAnswer:"Yes, it can be implemented in computer programs and software.",explanation:"The Simplex Method is algorithmic and systematic, making it ideal for computer implementation. Many software packages use it.",hint:"Yes, it's algorithmic.",level:"basic",codeExample:"Excel Solver, MATLAB, Python libraries"},{question:"What is the feasibility region in the Simplex Method?",shortAnswer:"The set of all points satisfying all constraints.",explanation:"The Simplex Method works within the feasible region, moving from one corner point to another until optimality is reached.",hint:"All feasible solutions.",level:"intermediate",codeExample:"Feasible region = intersection of all constraints"},{question:"What is a corner point in the Simplex Method?",shortAnswer:"A basic feasible solution where some variables are zero.",explanation:"In the Simplex Method, corner points are represented as basic feasible solutions with a specific set of variables (basic variables) and the rest at zero.",hint:"Basic feasible solution.",level:"advanced",codeExample:"Basic variables: positive, Non-basic variables: zero"},{question:"How does the Simplex Method know when to stop?",shortAnswer:"When no improvement in objective value is possible (optimality condition).",explanation:"The Simplex Method checks if any entering variable can improve the objective. If none can, the current solution is optimal.",hint:"No better solution exists.",level:"advanced",codeExample:"All reduced costs ≤ 0 (maximization)"},{question:"What is the role of slack variables in the Simplex Method?",shortAnswer:"They convert inequality constraints to equalities.",explanation:"Slack variables are added to ≤ constraints to make them equalities, allowing the Simplex Method to work with a system of equations.",hint:"Convert ≤ to =.",level:"intermediate",codeExample:"2x + y ≤ 10 → 2x + y + s = 10"},{question:"What is the Big-M Method?",shortAnswer:"A variant of the Simplex Method for problems with ≥ or = constraints.",explanation:"The Big-M Method uses artificial variables and a large penalty (M) to handle constraints that are not in standard form.",hint:"For ≥ and = constraints.",level:"advanced",codeExample:"Minimize M × artificial variables"},{question:"What industries use the Simplex Method?",shortAnswer:"Manufacturing, logistics, finance, energy, and many more.",explanation:"Any industry that needs to optimize resource allocation, production, or logistics can use the Simplex Method.",hint:"Many industries use optimization.",level:"basic",codeExample:"Factories, airlines, banks, hospitals"},{question:"How does the Simplex Method handle large problems?",shortAnswer:"Systematically and efficiently using matrix operations.",explanation:"The Simplex Method uses tables (tableaus) and row operations to solve problems efficiently, even with hundreds of variables.",hint:"Uses tables and row operations.",level:"advanced",codeExample:"Tableau: rows = constraints, columns = variables"}],w=`TOPIC 0: NEED FOR THE SIMPLEX METHOD\r
====================================\r
\r
INTRODUCTION\r
------------\r
The Simplex Method is an algebraic algorithm for solving linear \r
programming problems. It was developed by George Dantzig in 1947 \r
and remains the foundation of LP solving.\r
\r
WHY DO WE NEED THE SIMPLEX METHOD?\r
----------------------------------\r
1. Graphical Method Limitations:\r
   - Limited to 2 variables\r
   - Hard to scale\r
   - Not computational\r
   - Visual only\r
\r
2. Real-World Problems:\r
   - Many variables (products, resources)\r
   - Complex constraints\r
   - Large scale\r
   - Need computational solution\r
\r
3. Simplex Method Advantages:\r
   - Handles any number of variables\r
   - Systematic and algorithmic\r
   - Can be computerized\r
   - Efficient for large problems\r
   - Provides sensitivity analysis\r
\r
GRAPHICAL METHOD LIMITATIONS\r
----------------------------\r
1. 2 Variables Only:\r
   - x and y axes only\r
   - Cannot plot z dimension\r
   - 3D graphs are difficult\r
\r
2. Not Scalable:\r
   - Many constraints → messy graph\r
   - Hard to find all corner points\r
   - Manual and time-consuming\r
\r
3. Not Computational:\r
   - Cannot be automated\r
   - Not suitable for software\r
   - Limited to small problems\r
\r
SIMPLEX METHOD ADVANTAGES\r
-------------------------\r
1. Any Number of Variables:\r
   - Handles 2, 3, 10, 100+ variables\r
   - Uses algebraic approach\r
   - No visualization needed\r
\r
2. Systematic Approach:\r
   - Step-by-step algorithm\r
   - Moves from corner to corner\r
   - Improves objective each step\r
\r
3. Computational:\r
   - Can be implemented in software\r
   - Efficient and reliable\r
   - Scalable to large problems\r
\r
4. Proven Optimality:\r
   - Optimality conditions\r
   - No need to guess\r
   - Mathematical proof\r
\r
COMPARISON SUMMARY\r
------------------\r
| Feature | Graphical | Simplex |\r
|---------|-----------|---------|\r
| Variables | 2 max | Any number |\r
| Approach | Geometric | Algebraic |\r
| Scalability | Poor | Excellent |\r
| Computation | Manual | Computer-friendly |\r
| Real-world | Limited | Widely used |\r
\r
WHEN TO USE SIMPLEX METHOD\r
--------------------------\r
1. More than 2 variables\r
2. Many constraints\r
3. Large-scale problems\r
4. Need computational solution\r
5. Real-world applications\r
\r
KEY TAKEAWAYS\r
------------\r
✓ Graphical method is limited to 2 variables\r
✓ Real-world problems have many variables\r
✓ Simplex Method handles any number\r
✓ Simplex is algebraic and systematic\r
✓ Can be computerized and scaled\r
✓ Foundation of modern optimization\r
\r
TEACHER'S NOTE\r
--------------\r
The Simplex Method is a natural progression from graphical LP. \r
While graphical method builds intuition, Simplex is the workhorse \r
of optimization. Understanding why Simplex is needed prepares \r
students for the algebraic journey ahead."`,E=()=>{const[t,o]=r.useState("concept"),[l,d]=r.useState({}),[n,c]=r.useState(null),[s,h]=r.useState(null),m=[{id:"concept",label:"Concept"},{id:"examples",label:"Examples"},{id:"practice",label:"Practice"}],p=[{id:1,title:"Example 1: When Graphical Method Works",problem:`Maximize Z = 3x + 2y
Subject to:
2x + y ≤ 10
x + 2y ≤ 8
x, y ≥ 0

This is a 2-variable problem that can be solved graphically.`,solution:"Graphical method works well here. Optimal solution: (4, 2) with Z = 16",detailedSolution:`Step 1: Graph the constraints
2x + y = 10 → (5,0), (0,10)
x + 2y = 8 → (8,0), (0,4)

Step 2: Identify feasible region
Shade the intersection of all constraints

Step 3: Find corner points
(0,0), (5,0), (4,2), (0,4)

Step 4: Evaluate Z at each corner
Z(0,0) = 0
Z(5,0) = 15
Z(4,2) = 16 ← Maximum
Z(0,4) = 8

Why graphical works: Only 2 variables, easy to visualize.`},{id:2,title:"Example 2: When Graphical Method Fails",problem:`Maximize Z = 4x + 5y + 3z
Subject to:
2x + y + z ≤ 10
x + 3y + 2z ≤ 15
2x + 2y + z ≤ 12
x, y, z ≥ 0

This is a 3-variable problem that cannot be solved graphically.`,solution:"Graphical method cannot handle 3 variables. Need the Simplex Method.",detailedSolution:`Why graphical fails:

1. 3 variables require 3D visualization
- Graphs are 2D (x and y axes)
- Adding z requires 3D plotting
- 3D graphs are difficult to read

2. Feasible region becomes a polyhedron
- In 2D: polygon (shaded area)
- In 3D: polyhedron (3D shape)
- Hard to visualize and find corners

3. More corner points to check
- 2 variables: 4-6 corner points
- 3 variables: 8-12 corner points
- Hard to find all corners manually

Need for Simplex Method:
- Systematic algebraic approach
- Handles any number of variables
- Efficient and reliable`},{id:3,title:"Example 3: Large-Scale Problem",problem:"A factory produces 5 products using 4 resources. The LP problem has 5 variables and 4 constraints. How would you solve this?",solution:"This problem has too many variables for graphical method. The Simplex Method is required.",detailedSolution:`Problem characteristics:
- 5 variables (x₁, x₂, x₃, x₄, x₅)
- 4 constraints
- 1 objective function
- 5 non-negativity constraints

Why graphical fails:
1. Cannot plot in 5 dimensions
2. Too many variables to visualize
3. Too many corner points to check manually

Simplex Method advantages:
1. Algebraic (not geometric)
2. Systematic and algorithmic
3. Handles any number of variables
4. Efficient for large problems
5. Can be computerized`},{id:4,title:"Example 4: Real-World Application",problem:"A company wants to maximize profit from 50 products using 30 resources. Each product has different profit margins and resource requirements. How should this be solved?",solution:"This is a large-scale LP problem requiring the Simplex Method.",detailedSolution:`Real-world characteristics:
- 50 products → 50 variables
- 30 resources → 30 constraints
- Complex profit and cost structures
- Multiple constraints and variables

Why graphical fails:
1. Cannot graph 50 variables
2. Too many corner points (combinatorial explosion)
3. Manual solution impossible
4. Need computational approach

Simplex Method in practice:
- Used in business, industry, government
- Handles problems with thousands of variables
- Efficient and reliable
- Can be implemented in software
- Foundation for more advanced methods`}],x=[{id:1,title:"Identify the Limitation",problem:"Consider the LP problem: Maximize Z = 2x₁ + 3x₂ + 4x₃ subject to constraints. Why can't this be solved graphically?",hint:"Think about the number of variables and the dimensions needed for visualization.",solution:"This problem has 3 variables (x₁, x₂, x₃). Graphical method is limited to 2 variables because we can only plot in 2D. Need the Simplex Method."},{id:2,title:"When to Use Simplex Method",problem:"A factory produces 10 products using 5 resources. Should you use graphical method or Simplex Method?",hint:"Consider the number of variables and constraints in the problem.",solution:"Use the Simplex Method. With 10 variables, graphical method is impossible. The Simplex Method handles any number of variables and constraints."},{id:3,title:"Comparing Methods",problem:"Compare graphical method and Simplex Method. What are the advantages and limitations of each?",hint:"Think about visualization, number of variables, and practical application.",solution:"Graphical Method: Good for 2 variables, visual, intuitive, limited to small problems. Simplex Method: Handles any variables, algebraic, systematic, can be computerized, scalable."}],g=a=>{d(i=>({...i,[a]:!i[a]}))},b=[{feature:"Number of variables",graphical:"2 variables max",simplex:"Any number"},{feature:"Visualization",graphical:"2D graphs",simplex:"Algebraic (no graphs)"},{feature:"Ease of use",graphical:"Intuitive, visual",simplex:"Requires practice"},{feature:"Computational efficiency",graphical:"Manual (small problems)",simplex:"Efficient for large problems"},{feature:"Corner points",graphical:"Easy to find",simplex:"Systematic search"},{feature:"Real-world applicability",graphical:"Limited",simplex:"Widely used"}];return e.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[e.jsxs("div",{className:"text-center mb-10",children:[e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-all duration-300",children:"Need for the Simplex Method"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto",children:"Learn why the Simplex Method is essential for solving linear programming problems with more than two variables and how it overcomes the limitations of graphical methods."})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 justify-center border-b border-gray-200 dark:border-gray-700 pb-4",children:m.map(a=>e.jsx("button",{onClick:()=>o(a.id),className:u("px-6 py-2 rounded-lg font-medium transition-all duration-300",t===a.id?"bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-blue-900/30":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-md"),children:a.label},a.id))}),e.jsxs("div",{className:"space-y-8",children:[t==="concept"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"What is the Simplex Method?"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 leading-relaxed mb-4",children:"The Simplex Method is an algebraic algorithm for solving linear programming problems. It was developed by George Dantzig in 1947 and is the foundation of modern LP solving. Unlike the graphical method, which is limited to two variables, the Simplex Method can handle problems with any number of variables and constraints."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Key Features"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Algebraic (not geometric)"}),e.jsx("li",{children:"Handles any number of variables"}),e.jsx("li",{children:"Systematic and iterative"}),e.jsx("li",{children:"Can be computerized"}),e.jsx("li",{children:"Proven optimality"})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Why It's Needed"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Graphical method limited to 2 variables"}),e.jsx("li",{children:"Real-world problems have many variables"}),e.jsx("li",{children:"Need efficient computational approach"}),e.jsx("li",{children:"Foundation for advanced optimization"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"Limitations of the Graphical Method"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500 transition-all duration-300 hover:shadow-lg",children:[e.jsx("h4",{className:"font-semibold text-red-700 dark:text-red-400 mb-2",children:"1. Limited to 2 Variables"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Can only solve problems with two decision variables (x and y)."}),e.jsx("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:"x, y only"})]}),e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500 transition-all duration-300 hover:shadow-lg",children:[e.jsx("h4",{className:"font-semibold text-red-700 dark:text-red-400 mb-2",children:"2. Hard to Scale"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Manual graphing becomes complex with many constraints."}),e.jsx("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:"Many lines = messy"})]}),e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500 transition-all duration-300 hover:shadow-lg",children:[e.jsx("h4",{className:"font-semibold text-red-700 dark:text-red-400 mb-2",children:"3. Not Computational"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Cannot be easily automated for large problems."}),e.jsx("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:"Manual only"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center",children:"Graphical vs Simplex Method"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{className:"bg-gray-100 dark:bg-gray-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2 text-left text-gray-800 dark:text-gray-200",children:"Feature"}),e.jsx("th",{className:"px-4 py-2 text-left text-gray-800 dark:text-gray-200",children:"Graphical Method"}),e.jsx("th",{className:"px-4 py-2 text-left text-gray-800 dark:text-gray-200",children:"Simplex Method"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:b.map((a,i)=>e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300",children:[e.jsx("td",{className:"px-4 py-2 font-medium text-gray-800 dark:text-gray-200",children:a.feature}),e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:a.graphical}),e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:a.simplex})]},`compare-${i}`))})]})})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"Why the Simplex Method is Better"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500 transition-all duration-300 hover:shadow-lg",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Advantages"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Handles any number of variables"}),e.jsx("li",{children:"Systematic and algorithmic"}),e.jsx("li",{children:"Can be computerized"}),e.jsx("li",{children:"Efficient for large problems"}),e.jsx("li",{children:"Provides sensitivity analysis"}),e.jsx("li",{children:"Proven optimality conditions"})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500 transition-all duration-300 hover:shadow-lg",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Real-World Applications"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Manufacturing planning"}),e.jsx("li",{children:"Supply chain optimization"}),e.jsx("li",{children:"Financial portfolio management"}),e.jsx("li",{children:"Resource allocation"}),e.jsx("li",{children:"Transportation and logistics"}),e.jsx("li",{children:"Energy production planning"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"💡 Tips & Tricks for Understanding the Simplex Method"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h4",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"Professional Tips"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Think of Simplex as an algebraic search algorithm"}),e.jsx("li",{children:"It moves from one corner point to another"}),e.jsx("li",{children:"It improves the objective at each step"}),e.jsx("li",{children:"It stops when no improvement is possible"})]})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500",children:[e.jsx("h4",{className:"font-semibold text-purple-700 dark:text-purple-400 mb-2",children:"Common Mistakes"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Thinking Simplex is harder than it is"}),e.jsx("li",{children:"Not understanding why graphical fails"}),e.jsx("li",{children:"Forgetting that Simplex is systematic"}),e.jsx("li",{children:"Overlooking the importance of standard form"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"✅ Mini Checklist"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Understand graphical method limitations"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Recognize when Simplex is needed"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Understand Simplex advantages"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Know real-world applications"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Prepare for algebraic approach"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Ready to learn Simplex procedure"})]})]})]})]}),t==="examples"&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"space-y-6",children:p.map(a=>e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-bold text-gray-800 dark:text-gray-200 mb-3",children:a.title}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h5",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Problem"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:a.problem})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h5",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Solution"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:a.solution})]})]}),e.jsx("div",{className:"mt-4 flex justify-center",children:e.jsx("button",{onClick:()=>g(a.id),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300",children:l[a.id]?"Hide Detailed Steps":"Show Detailed Steps"})}),l[a.id]&&e.jsxs("div",{className:"mt-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h5",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"📝 Detailed Steps"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:a.detailedSolution})]})]},`example-${a.id}`))})}),t==="practice"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center",children:"Practice Problems"}),e.jsx("div",{className:"space-y-6",children:x.map(a=>e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 transition-all duration-300 hover:shadow-md",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:a.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:a.problem}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>c(n===a.id?null:a.id),className:"px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-all duration-300",children:n===a.id?"Hide Solution":"Check Solution"}),e.jsx("button",{onClick:()=>h(s===a.id?null:a.id),className:"px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300",children:s===a.id?"Hide Hint":"Show Hint"})]}),s===a.id&&e.jsx("div",{className:"mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800",children:e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"💡 Hint:"})," ",a.hint]})}),n===a.id&&e.jsx("div",{className:"mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800",children:e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:a.solution})})]},a.id))})]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"💡 Tips for Understanding the Need for Simplex"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Recognize limitations:"})," Graphical method only works for 2 variables"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Think about scale:"})," Real-world problems have many variables"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Consider computation:"})," Simplex can be automated"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Visualize the transition:"})," From geometric to algebraic approach"]})]})]})]})]}),e.jsx("div",{className:"mt-12",children:e.jsx(v,{title:"Need for the Simplex Method FAQs",questions:j})}),e.jsx("div",{className:"mt-8",children:e.jsx(f,{content:w,title:"Need for the Simplex Method",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Note",downloadFileName:"topic0_note.txt"})}),e.jsx("div",{className:"mt-8",children:e.jsx(y,{note:"The Simplex Method is a natural progression from graphical LP. I tell my students that while the graphical method is great for building intuition, the Simplex Method is the workhorse of optimization. It's like learning to drive a car vs. riding a bicycle - the bicycle (graphical method) is great for learning the basics, but you need a car (Simplex) for serious travel. Understanding why Simplex is needed helps students appreciate its power and prepares them for the algebraic journey ahead."})})]})})};export{E as default};
