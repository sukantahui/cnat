import{b as r,j as e,bg as u}from"./vendor-react-core-Doz9nIC6.js";import{T as p}from"./TeacherSukantaHui-BaJcBHAy.js";import{F as b}from"./FAQTemplate-BHhlgA96.js";import{P as f}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-8ao-0upJ.js";const v=[{question:"What is the first step in translating a verbal problem to LP?",shortAnswer:"Read the problem carefully and identify the decision variables.",explanation:"Before you can formulate anything, you need to understand what you're deciding. Variables represent the quantities you want to determine.",hint:"What are you trying to decide?",level:"basic",codeExample:"Let x = number of chairs, y = number of tables"},{question:"What does 'at most' mean in LP constraints?",shortAnswer:"It means ≤ (less than or equal to).",explanation:"'At most' indicates an upper limit. For example, 'at most 10 hours' means ≤ 10 hours.",hint:"At most = ≤",level:"basic",codeExample:"x + y ≤ 10"},{question:"What does 'at least' mean in LP constraints?",shortAnswer:"It means ≥ (greater than or equal to).",explanation:"'At least' indicates a minimum requirement. For example, 'at least 8 units' means ≥ 8 units.",hint:"At least = ≥",level:"basic",codeExample:"x + y ≥ 8"},{question:"How do you identify the objective function in a word problem?",shortAnswer:"Look for words like 'maximize', 'minimize', 'profit', 'cost', 'revenue', etc.",explanation:"The objective is what you're trying to optimize. Clue words include: maximize, minimize, profit, cost, revenue, benefit, etc.",hint:"Look for optimization words.",level:"basic",codeExample:"Maximize Z = 40x + 50y (Profit)"},{question:"What does 'available' mean in LP constraints?",shortAnswer:"It means you have a limited amount of a resource, so you use ≤.",explanation:"'Available' indicates resource constraints. The total usage cannot exceed the available amount.",hint:"Available = limited resource = ≤",level:"intermediate",codeExample:"3x + 2y ≤ 120 (Labor available)"},{question:"How do you translate percentage constraints?",shortAnswer:"Convert the percentage to a linear inequality: x ≥ p(x + y) then simplify.",explanation:"If Product A must be at least 40% of total, write x ≥ 0.4(x + y), then simplify to 0.6x ≥ 0.4y.",hint:"Convert % to decimal and simplify.",level:"advanced",codeExample:"x ≥ 0.4(x + y) → 3x ≥ 2y"},{question:"What is the role of non-negativity constraints?",shortAnswer:"They ensure variables cannot be negative, reflecting real-world constraints.",explanation:"Quantities like production, servings, or allocation cannot be negative. Always include x ≥ 0 and y ≥ 0.",hint:"Can't be negative.",level:"basic",codeExample:"x ≥ 0, y ≥ 0"},{question:"How do you identify constraints from verbal descriptions?",shortAnswer:"Look for limitations, requirements, availability, or conditions that restrict the variables.",explanation:"Constraints limit what values the variables can take. Look for words like 'limited to', 'available', 'must be', 'at most', 'at least'.",hint:"Anything that limits the variables.",level:"intermediate",codeExample:"Labor hours available: 2x + 3y ≤ 120"},{question:"What does 'exactly' mean in LP constraints?",shortAnswer:"It means equality (=).",explanation:"Sometimes a condition must be met exactly. For example, 'exactly 100 units' means = 100.",hint:"Exactly = =",level:"intermediate",codeExample:"x + y = 100"},{question:"How do you translate 'more than' in LP constraints?",shortAnswer:"It means > or ≥ (greater than).",explanation:"If you need 'more than 10 units', the constraint is x > 10 or x ≥ 11 (for integers). In LP, we typically use ≥.",hint:"More than = > or ≥",level:"intermediate",codeExample:"x ≥ 11"},{question:"How do you translate 'less than' in LP constraints?",shortAnswer:"It means < or ≤ (less than).",explanation:"If you need 'less than 10 hours', the constraint is x < 10 or x ≤ 9. In LP, we typically use ≤.",hint:"Less than = < or ≤",level:"intermediate",codeExample:"x ≤ 9"},{question:"What is the difference between 'at most' and 'less than'?",shortAnswer:"'At most' includes equality (≤); 'less than' excludes equality (<).",explanation:"'At most 10' means ≤ 10. 'Less than 10' means < 10. In LP, we use ≤ for both unless equality is explicitly excluded.",hint:"≤ vs. <",level:"intermediate",codeExample:"At most 10: x ≤ 10, Less than 10: x < 10"},{question:"How do you translate 'maximum' in LP constraints?",shortAnswer:"It indicates an upper bound, so use ≤.",explanation:"If there's a maximum limit, the constraint is 'variable ≤ maximum'.",hint:"Maximum = ≤",level:"basic",codeExample:"x ≤ 100 (Maximum production)"},{question:"How do you translate 'minimum' in LP constraints?",shortAnswer:"It indicates a lower bound, so use ≥.",explanation:"If there's a minimum requirement, the constraint is 'variable ≥ minimum'.",hint:"Minimum = ≥",level:"basic",codeExample:"x ≥ 20 (Minimum production)"},{question:"What does 'profit per unit' become in LP formulation?",shortAnswer:"It becomes the coefficient in the objective function.",explanation:"The profit per unit multiplies the variable in the objective function.",hint:"Coefficient in objective.",level:"basic",codeExample:"Profit ₹40 per unit → 40x in objective"},{question:"What does 'cost per unit' become in LP formulation?",shortAnswer:"It becomes the coefficient in the objective function for minimization.",explanation:"The cost per unit multiplies the variable in the objective function for cost minimization.",hint:"Coefficient in objective for min.",level:"basic",codeExample:"Cost ₹20 per unit → 20x in objective"},{question:"How do you translate 'total production' constraints?",shortAnswer:"Sum the variables representing production quantities.",explanation:"If total production must meet a target, add all product variables and set the constraint.",hint:"Sum of all product variables.",level:"intermediate",codeExample:"x + y ≥ 100 (Total production)"},{question:"How do you translate ratio constraints?",shortAnswer:"Write as a proportion and simplify to linear form.",explanation:"If the ratio of x to y must be at least 2:1, write x/y ≥ 2 → x ≥ 2y.",hint:"Convert ratio to linear inequality.",level:"advanced",codeExample:"x/y ≥ 2 → x ≥ 2y"},{question:"What is a common mistake when translating percentage constraints?",shortAnswer:"Forgetting that the percentage is of total, not just one variable.",explanation:"If A is at least 40% of total, write x ≥ 0.4(x + y), not just x ≥ 0.4x.",hint:"Percentage of total.",level:"advanced",codeExample:"Correct: x ≥ 0.4(x + y), Incorrect: x ≥ 0.4x"},{question:"How do you translate 'at least 50% of total' constraints?",shortAnswer:"x ≥ 0.5(x + y), then simplify to x ≥ y.",explanation:"If x must be at least 50% of total, x ≥ 0.5(x + y) → x ≥ 0.5x + 0.5y → 0.5x ≥ 0.5y → x ≥ y.",hint:"50% of total → x ≥ y.",level:"advanced",codeExample:"x ≥ 0.5(x + y) → x ≥ y"},{question:"What is the key to successful LP translation?",shortAnswer:"Practice identifying variables, objectives, and constraints systematically.",explanation:"Success comes from reading carefully, identifying clue words, and practicing regularly. The more problems you translate, the better you become.",hint:"Practice and systematic approach.",level:"basic",codeExample:"Read → Identify → Formulate → Verify"}],j=`TOPIC 4: TRANSLATING VERBAL CONDITIONS INTO MATHEMATICAL CONSTRAINTS\r
====================================================================\r
\r
INTRODUCTION\r
------------\r
Translation is the process of converting word problems into mathematical \r
LP formulations. This is the most critical skill in applying LP to \r
real-world problems.\r
\r
WHY TRANSLATION MATTERS\r
-----------------------\r
1. Bridges theory and practice\r
2. Enables solving real-world problems\r
3. Requires understanding of both language and math\r
4. Develops analytical thinking\r
\r
KEY TRANSLATION ELEMENTS\r
------------------------\r
1. Decision Variables:\r
   - What are you deciding?\r
   - Example: x = chairs, y = tables\r
\r
2. Objective Function:\r
   - What are you optimizing?\r
   - "Maximize" or "Minimize"\r
   - Example: Max Z = 40x + 50y\r
\r
3. Constraints:\r
   - What limits the solution?\r
   - Resource constraints (≤)\r
   - Requirement constraints (≥)\r
   - Equality constraints (=)\r
\r
VERBAL TO MATHEMATICAL GUIDE\r
----------------------------\r
| Verbal Phrase | Math | Example |\r
|--------------|------|---------|\r
| At most, No more than | ≤ | x + y ≤ 10 |\r
| At least, Minimum | ≥ | x + y ≥ 8 |\r
| Exactly, Equal to | = | x + y = 12 |\r
| Available, Limited | ≤ | 2x + 3y ≤ 120 |\r
| Requirement, Must have | ≥ | 4x + 2y ≥ 24 |\r
| Profit per unit | Coefficient | 40x |\r
| Cost per unit | Coefficient | 20x |\r
| Percentage | Linear form | x ≥ 0.4(x+y) |\r
\r
STEPS TO TRANSLATE\r
------------------\r
Step 1: Read Carefully\r
- Identify what you're trying to decide\r
- Identify what you're optimizing\r
- Identify all limitations\r
\r
Step 2: Define Variables\r
- Choose clear variable names\r
- Include units\r
- Example: Let x = number of chairs\r
\r
Step 3: Identify Objective\r
- Look for "maximize" or "minimize"\r
- Determine coefficients (profit/cost per unit)\r
\r
Step 4: Identify Constraints\r
- Resource constraints (≤)\r
- Requirement constraints (≥)\r
- Special constraints (ratios, percentages)\r
\r
Step 5: Add Non-Negativity\r
- x ≥ 0, y ≥ 0\r
\r
Step 6: Verify\r
- Check each constraint matches the verbal condition\r
- Verify units are consistent\r
\r
COMMON MISTAKES\r
---------------\r
1. Mixing up ≤ and ≥\r
2. Forgetting non-negativity\r
3. Misidentifying the objective\r
4. Incorrectly translating percentages\r
5. Missing constraints\r
\r
PERCENTAGE CONSTRAINTS\r
----------------------\r
To translate percentage constraints:\r
1. Write the percentage condition\r
2. Convert to linear form\r
3. Simplify\r
\r
Example: A must be at least 40% of total\r
x ≥ 0.4(x + y)\r
x ≥ 0.4x + 0.4y\r
0.6x ≥ 0.4y\r
3x ≥ 2y\r
\r
RATIO CONSTRAINTS\r
-----------------\r
To translate ratio constraints:\r
1. Write the ratio condition\r
2. Convert to linear form\r
3. Simplify\r
\r
Example: x to y must be at least 2:1\r
x/y ≥ 2\r
x ≥ 2y\r
\r
BEST PRACTICES\r
--------------\r
1. Read problem multiple times\r
2. Underline key phrases\r
3. Write variables with units\r
4. Check constraint directions\r
5. Verify formulation\r
6. Practice regularly\r
\r
TEACHER'S NOTE\r
--------------\r
Translation is the most critical skill in LP. I emphasize that \r
students should practice regularly, as this skill improves with \r
experience. The key is to look for "clue words" that indicate \r
what type of constraint or objective is being described."`,P=()=>{const[a,l]=r.useState("concept"),[s,d]=r.useState({}),[n,c]=r.useState(null),[i,x]=r.useState(null),m=[{id:"concept",label:"Concept"},{id:"examples",label:"Examples"},{id:"practice",label:"Practice"}],h=[{id:1,title:"Example 1: Basic Translation",problem:"A company produces two products. Product A requires 3 hours of labor and 2 units of material. Product B requires 2 hours of labor and 4 units of material. The company has 120 labor hours and 100 material units available. Profit per unit of A is ₹50 and per unit of B is ₹60. Translate this into a mathematical LP problem.",solution:`Let x = units of Product A, y = units of Product B
Maximize Z = 50x + 60y
Subject to:
3x + 2y ≤ 120 (Labor)
2x + 4y ≤ 100 (Material)
x, y ≥ 0`,detailedSolution:`Step 1: Identify decision variables
x = number of Product A units, y = number of Product B units

Step 2: Identify the objective
Maximize profit = 50x + 60y

Step 3: Identify constraints
Labor: 3x + 2y ≤ 120
Material: 2x + 4y ≤ 100
Non-negativity: x ≥ 0, y ≥ 0

Step 4: Check understanding
- Each unit of A uses 3 labor hours → 3x
- Each unit of B uses 2 labor hours → 2y
- Total labor ≤ 120 hours
- Each unit of A uses 2 material units → 2x
- Each unit of B uses 4 material units → 4y
- Total material ≤ 100 units`},{id:2,title:"Example 2: Minimum Requirements",problem:"A diet requires at least 24 units of protein and 18 units of carbohydrates. Food X provides 4 protein and 2 carbs per serving at ₹15 per serving. Food Y provides 3 protein and 5 carbs per serving at ₹25 per serving. What is the minimum cost diet?",solution:`Let x = servings of Food X, y = servings of Food Y
Minimize Z = 15x + 25y
Subject to:
4x + 3y ≥ 24 (Protein)
2x + 5y ≥ 18 (Carbs)
x, y ≥ 0`,detailedSolution:`Step 1: Identify decision variables
x = servings of Food X, y = servings of Food Y

Step 2: Identify the objective
Minimize cost = 15x + 25y

Step 3: Identify constraints
Protein: 4x + 3y ≥ 24 (minimum requirement)
Carbs: 2x + 5y ≥ 18 (minimum requirement)
Non-negativity: x ≥ 0, y ≥ 0

Step 4: Key translation points
- "At least" means ≥
- "Minimum requirement" means ≥
- "Cost per serving" becomes coefficient in objective`},{id:3,title:"Example 3: Mixed Constraints",problem:"A factory produces chairs and tables. Each chair requires 2 hours of labor and 3 units of wood. Each table requires 3 hours of labor and 2 units of wood. Available: 120 labor hours and 90 wood units. Profit: Chair ₹40, Table ₹50. At least 10 chairs and 5 tables must be produced each day.",solution:`Let x = chairs, y = tables
Maximize Z = 40x + 50y
Subject to:
2x + 3y ≤ 120 (Labor)
3x + 2y ≤ 90 (Wood)
x ≥ 10 (Minimum chairs)
y ≥ 5 (Minimum tables)
x, y ≥ 0`,detailedSolution:`Step 1: Identify decision variables
x = number of chairs, y = number of tables

Step 2: Identify the objective
Maximize profit = 40x + 50y

Step 3: Identify constraints
Labor: 2x + 3y ≤ 120 (resource constraint)
Wood: 3x + 2y ≤ 90 (resource constraint)
x ≥ 10 (minimum production requirement)
y ≥ 5 (minimum production requirement)
Non-negativity: x ≥ 0, y ≥ 0

Step 4: Key translation points
- "Available" → ≤
- "At least" → ≥
- "Minimum" → ≥`},{id:4,title:"Example 4: Ratio and Percentage Constraints",problem:"A company produces two products. Product A and Product B. The company wants at least 40% of total production to be Product A. Total production must be at least 100 units. Product A uses 2 hours of labor per unit, Product B uses 3 hours. Available labor is 300 hours. Profit: A = ₹30, B = ₹40.",solution:`Let x = units of Product A, y = units of Product B
Maximize Z = 30x + 40y
Subject to:
2x + 3y ≤ 300 (Labor)
x + y ≥ 100 (Total production)
x ≥ 0.4(x + y) (At least 40% A)
→ 0.6x ≥ 0.4y
→ 3x ≥ 2y
x, y ≥ 0`,detailedSolution:`Step 1: Identify decision variables
x = units of Product A, y = units of Product B

Step 2: Identify the objective
Maximize profit = 30x + 40y

Step 3: Identify constraints
Labor: 2x + 3y ≤ 300
Total production: x + y ≥ 100
At least 40% A: x ≥ 0.4(x + y)
Simplify: x ≥ 0.4x + 0.4y → 0.6x ≥ 0.4y → 3x ≥ 2y
Non-negativity: x ≥ 0, y ≥ 0

Step 4: Key translation points
- "At least 40%" means ≥ 0.4 × total
- Percentage constraints need careful algebra
- Simplify to linear form`}],y=[{id:1,title:"Translation Practice 1",problem:"A bakery produces cakes and pastries. Each cake uses 2 kg of flour and 3 eggs. Each pastry uses 1 kg of flour and 2 eggs. Available: 50 kg flour and 80 eggs. Profit: Cake ₹200, Pastry ₹150. Translate into LP formulation.",hint:"Let x = cakes, y = pastries. What are the flour and egg constraints? What is the objective?",solution:`Let x = cakes, y = pastries
Maximize Z = 200x + 150y
Subject to:
2x + y ≤ 50 (Flour)
3x + 2y ≤ 80 (Eggs)
x, y ≥ 0`},{id:2,title:"Translation Practice 2",problem:"A diet must have at least 30 units of Vitamin A and 20 units of Vitamin B. Food P has 5 units of A and 2 units of B per serving, costing ₹30. Food Q has 3 units of A and 4 units of B per serving, costing ₹20. Translate into LP formulation.",hint:"Let x = servings of Food P, y = servings of Food Q. What are the vitamin constraints? What is the objective?",solution:`Let x = Food P, y = Food Q
Minimize Z = 30x + 20y
Subject to:
5x + 3y ≥ 30 (Vitamin A)
2x + 4y ≥ 20 (Vitamin B)
x, y ≥ 0`},{id:3,title:"Translation Practice 3",problem:"A factory produces two products with these conditions: Total production must be at least 50 units. Product A must be at least 30% of total production. Product A uses 2 hours, Product B uses 3 hours. Available: 150 labor hours. Profit: A = ₹100, B = ₹120. Translate into LP formulation.",hint:"Let x = Product A, y = Product B. Total production: x + y ≥ 50. 30% constraint: x ≥ 0.3(x + y).",solution:`Let x = Product A, y = Product B
Maximize Z = 100x + 120y
Subject to:
2x + 3y ≤ 150
x + y ≥ 50
x ≥ 0.3(x + y) → 0.7x ≥ 0.3y → 7x ≥ 3y
x, y ≥ 0`}],g=t=>{d(o=>({...o,[t]:!o[t]}))};return e.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[e.jsxs("div",{className:"text-center mb-10",children:[e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-all duration-300",children:"Translating Verbal Conditions into Mathematical Constraints"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto",children:"Learn how to convert word problems into mathematical LP formulations by translating verbal conditions into variables, objective functions, and constraints."})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 justify-center border-b border-gray-200 dark:border-gray-700 pb-4",children:m.map(t=>e.jsx("button",{onClick:()=>l(t.id),className:u("px-6 py-2 rounded-lg font-medium transition-all duration-300",a===t.id?"bg-amber-600 text-white shadow-lg shadow-amber-200 dark:shadow-amber-900/30":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-md"),children:t.label},t.id))}),e.jsxs("div",{className:"space-y-8",children:[a==="concept"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"What is Translation in LP?"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 leading-relaxed mb-4",children:"Translation in LP is the process of converting a word problem into a mathematical formulation. This involves identifying variables, the objective function, and all constraints from the verbal description. This is the most critical skill in applying LP to real-world problems."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Key Translation Skills"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Identifying decision variables"}),e.jsx("li",{children:"Recognizing objective (max/min)"}),e.jsx("li",{children:"Converting verbal constraints"}),e.jsx("li",{children:"Setting up non-negativity"})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Common Verbal Clues"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:'"Maximize" / "Minimize" → Objective'}),e.jsx("li",{children:'"At most" / "No more than" → ≤'}),e.jsx("li",{children:'"At least" / "Minimum" → ≥'}),e.jsx("li",{children:'"Available" → Resource constraint'})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"Translation Guide: Verbal to Mathematical"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{className:"bg-gray-100 dark:bg-gray-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2 text-left text-gray-800 dark:text-gray-200",children:"Verbal Phrase"}),e.jsx("th",{className:"px-4 py-2 text-left text-gray-800 dark:text-gray-200",children:"Mathematical Meaning"}),e.jsx("th",{className:"px-4 py-2 text-left text-gray-800 dark:text-gray-200",children:"Example"})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300",children:[e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:'"At most", "No more than"'}),e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:"≤"}),e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:"x + y ≤ 10"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300",children:[e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:'"At least", "Minimum"'}),e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:"≥"}),e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:"x + y ≥ 8"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300",children:[e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:'"Exactly", "Equal to"'}),e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:"="}),e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:"x + y = 12"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300",children:[e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:'"Available", "Limited to"'}),e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:"≤ (Resource)"}),e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:"2x + 3y ≤ 120"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300",children:[e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:'"Requirement", "Must have"'}),e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:"≥ (Requirement)"}),e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:"4x + 2y ≥ 24"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300",children:[e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:'"Profit per unit"'}),e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:"Coefficient in objective"}),e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:"Z = 40x + 50y"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300",children:[e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:'"Cost per unit"'}),e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:"Coefficient in objective"}),e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:"Z = 20x + 30y"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300",children:[e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:'"Percentage", "Ratio"'}),e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:"Linear combination"}),e.jsx("td",{className:"px-4 py-2 text-gray-700 dark:text-gray-300",children:"x ≥ 0.4(x + y)"})]})]})]})})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"Steps to Translate Verbal Problems"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[e.jsx("div",{className:"text-4xl mb-2",children:"📖"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Step 1"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Read carefully and identify variables"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[e.jsx("div",{className:"text-4xl mb-2",children:"🎯"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Step 2"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Identify objective (max/min)"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[e.jsx("div",{className:"text-4xl mb-2",children:"📋"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Step 3"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Identify all constraints"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[e.jsx("div",{className:"text-4xl mb-2",children:"✅"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Step 4"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Add non-negativity and verify"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"💡 Tips & Tricks for Translation"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h4",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"Professional Tips"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Underline key phrases (maximize, at least, etc.)"}),e.jsx("li",{children:"Write variables with units clearly"}),e.jsx("li",{children:"Check units are consistent"}),e.jsx("li",{children:"Simplify percentage constraints carefully"})]})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500",children:[e.jsx("h4",{className:"font-semibold text-purple-700 dark:text-purple-400 mb-2",children:"Common Mistakes"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Mixing up ≤ and ≥"}),e.jsx("li",{children:"Forgetting non-negativity"}),e.jsx("li",{children:"Misidentifying the objective"}),e.jsx("li",{children:"Incorrectly translating percentages"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"✅ Translation Checklist"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Variables identified with units"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Objective correctly identified (max/min)"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"All constraints identified"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Inequality direction correct (≤ or ≥)"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Percentage constraints simplified"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Non-negativity included"})]})]})]})]}),a==="examples"&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"space-y-6",children:h.map(t=>e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-bold text-gray-800 dark:text-gray-200 mb-3",children:t.title}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h5",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Verbal Problem"}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:t.problem})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h5",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"LP Formulation"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.solution})]})]}),e.jsx("div",{className:"mt-4 flex justify-center",children:e.jsx("button",{onClick:()=>g(t.id),className:"px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all duration-300",children:s[t.id]?"Hide Translation Steps":"Show Translation Steps"})}),s[t.id]&&e.jsxs("div",{className:"mt-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h5",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"📝 Translation Steps"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.detailedSolution})]})]},`example-${t.id}`))})}),a==="practice"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center",children:"Practice Problems - Translation"}),e.jsx("div",{className:"space-y-6",children:y.map(t=>e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 transition-all duration-300 hover:shadow-md",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:t.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:t.problem}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-3",children:"Translate this problem into an LP formulation."}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>c(n===t.id?null:t.id),className:"px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-all duration-300",children:n===t.id?"Hide Formulation":"Show Formulation"}),e.jsx("button",{onClick:()=>x(i===t.id?null:t.id),className:"px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300",children:i===t.id?"Hide Hint":"Show Hint"})]}),i===t.id&&e.jsx("div",{className:"mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800",children:e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"💡 Hint:"})," ",t.hint]})}),n===t.id&&e.jsx("div",{className:"mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800",children:e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono",children:t.solution})})]},t.id))})]}),e.jsxs("div",{className:"bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6 border border-amber-200 dark:border-amber-800",children:[e.jsx("h4",{className:"font-semibold text-amber-700 dark:text-amber-400 mb-2",children:"💡 Tips for Translation Practice"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Look for key words:"}),' "at most" → ≤, "at least" → ≥']}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Identify the objective:"}),' Look for "maximize" or "minimize"']}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Check units:"})," Make sure all units are consistent"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Verify each constraint:"})," Does it match the verbal condition?"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Simplify percentages:"})," Convert percentage constraints to linear form"]})]})]})]})]}),e.jsx("div",{className:"mt-12",children:e.jsx(b,{title:"Translating Verbal Conditions FAQs",questions:v})}),e.jsx("div",{className:"mt-8",children:e.jsx(f,{content:j,title:"Translating Verbal Conditions into Mathematical Constraints",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Note",downloadFileName:"topic4_note.txt"})}),e.jsx("div",{className:"mt-8",children:e.jsx(p,{note:"Translation is the most critical skill in LP. I've seen students who understand the math perfectly but struggle to formulate the problem from a word description. I tell my students that translation is like learning a new language - you need to practice regularly to become fluent. The key is to look for the 'clue words' that tell you what type of constraint or objective you're dealing with. I encourage students to underline these clue words as they read and to always verify their formulation by 'translating' it back into words."})})]})})};export{P as default};
