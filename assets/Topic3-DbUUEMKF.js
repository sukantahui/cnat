import{r as n,j as e}from"./index-YkKVfVEM.js";import{c as g}from"./clsx-B-dksMZM.js";import{T as y}from"./TeacherSukantaHui-nIRku_xY.js";import{F as b}from"./FAQTemplate-B_PeLoo7.js";import{P as f}from"./PlainTextPrint-Bgzrldzq.js";import"./github-00a_zZrb.js";import"./createLucideIcon-Cim-rzMd.js";import"./git-branch-BC_-h9tN.js";const v=[{question:"What is the objective of a cost minimization problem?",shortAnswer:"To minimize total cost while meeting all requirements.",explanation:"Cost minimization problems find the cheapest way to meet requirements such as nutritional needs, production targets, or quality standards.",hint:"Minimize cost, meet requirements.",level:"basic",codeExample:"Minimize Z = 20x + 30y (Cost of food items)"},{question:"What type of constraints are typically used in cost minimization?",shortAnswer:"Greater than or equal to (≥) constraints for requirements.",explanation:"Cost minimization problems typically require meeting minimum standards or demands, so constraints are of the form: requirement ≥ minimum.",hint:"≥ constraints for requirements.",level:"basic",codeExample:"4x + 3y ≥ 24 (Protein requirement)"},{question:"How is cost minimization different from profit maximization?",shortAnswer:"Cost minimization minimizes costs with ≥ constraints; profit maximization maximizes profit with ≤ constraints.",explanation:"Cost minimization focuses on meeting requirements at lowest cost. Profit maximization focuses on maximizing profit with limited resources.",hint:"Min cost vs. max profit.",level:"intermediate",codeExample:"Min Z = 20x + 30y vs. Max Z = 40x + 50y"},{question:"What are common applications of cost minimization?",shortAnswer:"Diet planning, blending, production planning, transportation, and purchasing.",explanation:"Any problem where you need to meet requirements at minimum cost can be formulated as a cost minimization problem.",hint:"Diet, blending, production, transportation.",level:"basic",codeExample:"Minimize cost of food meeting nutritional needs"},{question:"Why do cost minimization problems use ≥ constraints?",shortAnswer:"Because requirements must be at least a minimum amount - you need to meet or exceed the requirement.",explanation:"If you need at least 24 units of protein, the constraint is 4x + 3y ≥ 24. Going over the requirement is allowed but may be unnecessary.",hint:"Must meet or exceed requirements.",level:"intermediate",codeExample:"Protein: 4x + 3y ≥ 24"},{question:"What is surplus in a cost minimization problem?",shortAnswer:"Surplus is the amount by which a requirement is exceeded at the optimal solution.",explanation:"Surplus = LHS - RHS for ≥ constraints. If a requirement is exceeded, there is surplus. This may indicate inefficiency.",hint:"Excess above requirement.",level:"intermediate",codeExample:"Protein: LHS = 26, RHS = 24 → Surplus = 2 units"},{question:"How do you handle availability constraints in cost minimization?",shortAnswer:"Add ≤ constraints to limit how much of each option can be used.",explanation:"If materials have limited availability, add constraints like x ≤ max_x to reflect these limits.",hint:"Limited availability as ≤ constraints.",level:"intermediate",codeExample:"x ≤ 100 (Material X availability)"},{question:"What is the difference between cost and price?",shortAnswer:"Cost is what you pay; price is what you charge. Cost minimization focuses on what you pay.",explanation:"In cost minimization, the objective is to minimize your expenses. Price (what you sell for) is not part of cost minimization problems.",hint:"Cost = what you pay.",level:"basic",codeExample:"Minimize cost = 20x + 30y (what you pay)"},{question:"Why might a cost minimization problem have multiple optimal solutions?",shortAnswer:"When different combinations of options give the same minimum cost.",explanation:"If the cost ratio equals the requirement ratio for two options, multiple solutions may give the same minimum cost.",hint:"Same cost from different mixes.",level:"advanced",codeExample:"Both (6,0) and (0,4) give the same minimum cost"},{question:"What is the role of shadow prices in cost minimization?",shortAnswer:"Shadow prices indicate the cost increase if a requirement is tightened by one unit.",explanation:"For binding ≥ constraints, the shadow price tells you how much cost would increase if the requirement increased by one unit.",hint:"Cost increase per unit of requirement.",level:"advanced",codeExample:"Shadow price = ₹5 means cost increases by ₹5 per unit of requirement"},{question:"How do fixed costs affect cost minimization?",shortAnswer:"Fixed costs don't affect the optimal solution but increase total cost.",explanation:"Fixed costs are constant regardless of the quantity chosen. They shift total cost but don't change the optimal mix.",hint:"Fixed costs don't change optimal mix.",level:"intermediate",codeExample:"Total Cost = Variable Cost + Fixed Cost"},{question:"What is the difference between cost minimization and cost reduction?",shortAnswer:"Cost minimization finds the optimal solution; cost reduction is a continuous improvement process.",explanation:"Cost minimization is a one-time optimization. Cost reduction is ongoing efforts to reduce costs over time.",hint:"Find optimum vs. continuous improvement.",level:"advanced",codeExample:"Minimize current costs vs. reduce costs over time"},{question:"How do you formulate a blending problem as cost minimization?",shortAnswer:"Minimize cost of materials while meeting quality requirements.",explanation:"Blending problems involve mixing materials to meet specifications at minimum cost. Requirements include quality attributes and quantity.",hint:"Mix materials to meet specs at min cost.",level:"intermediate",codeExample:"Min Z = 50x + 40y, subject to quality constraints"},{question:"What is the difference between cost minimization and cost effectiveness?",shortAnswer:"Cost minimization finds lowest cost; cost effectiveness considers value relative to cost.",explanation:"Cost minimization is purely financial. Cost effectiveness considers the value or benefit obtained for the cost.",hint:"Lowest cost vs. best value.",level:"advanced",codeExample:"Min cost vs. max value per rupee"},{question:"Why is it important to check for surplus in cost minimization?",shortAnswer:"Surplus indicates over-meeting requirements, which may be unnecessary and costly.",explanation:"If there's surplus, you might be able to reduce cost by adjusting the mix. However, sometimes surplus is unavoidable or even desirable.",hint:"Surplus may mean unnecessary cost.",level:"intermediate",codeExample:"Protein surplus = 2 units → Could reduce protein source"},{question:"What is the role of quality constraints in cost minimization?",shortAnswer:"Quality constraints ensure the solution meets quality standards.",explanation:"In blending or production problems, quality constraints (like minimum percentage of ingredients) must be satisfied.",hint:"Quality standards as constraints.",level:"intermediate",codeExample:"Ingredient A ≥ 60% of total blend"},{question:"How do you handle demand constraints in cost minimization?",shortAnswer:"Add constraints to ensure production meets demand.",explanation:"If there's a minimum demand to meet, add a constraint like production ≥ demand.",hint:"Meet demand at minimum cost.",level:"intermediate",codeExample:"x + y ≥ 200 (Total production demand)"},{question:"What is the practical significance of cost minimization in business?",shortAnswer:"It helps businesses reduce expenses while maintaining quality and meeting requirements.",explanation:"Cost minimization helps companies improve profitability by reducing input costs without sacrificing quality or output.",hint:"Reduce costs, maintain quality.",level:"basic",codeExample:"Find cheapest way to produce required output"},{question:"How do you identify surplus nutrients in a diet problem?",shortAnswer:"Calculate LHS - RHS for each nutrient constraint at the optimal solution.",explanation:"If LHS > RHS, there's surplus. This means you're getting more of that nutrient than required.",hint:"LHS - RHS = surplus.",level:"intermediate",codeExample:"Protein: 4(6) + 3(0) = 24, RHS = 24 → No surplus"},{question:"What is the difference between cost minimization and expense reduction?",shortAnswer:"Cost minimization optimizes the mix; expense reduction focuses on reducing specific costs.",explanation:"Cost minimization finds the optimal combination of inputs. Expense reduction focuses on lowering individual cost items.",hint:"Optimize mix vs. reduce items.",level:"advanced",codeExample:"Find cheapest mix vs. negotiate lower prices"}],j=`TOPIC 3: COST MINIMIZATION PROBLEMS\r
===================================\r
\r
INTRODUCTION\r
------------\r
Cost minimization problems are a fundamental application of linear \r
programming where the objective is to meet requirements at the lowest \r
possible cost. These problems are common in diet planning, blending, \r
manufacturing, and logistics.\r
\r
WHAT IS COST MINIMIZATION?\r
-------------------------\r
Cost minimization finds the optimal way to meet requirements while \r
minimizing total cost. Unlike profit maximization, which focuses on \r
resource constraints (≤), cost minimization focuses on requirement \r
constraints (≥).\r
\r
KEY CHARACTERISTICS\r
-------------------\r
1. Objective: Minimize total cost\r
2. Variables: Quantities of options/inputs\r
3. Requirements: ≥ constraints (minimum standards)\r
4. Availability: ≤ constraints (limits)\r
5. Non-negativity: x ≥ 0, y ≥ 0\r
\r
GENERAL FORM\r
------------\r
Minimize Z = c₁x₁ + c₂x₂ + ... + cₙxₙ\r
\r
Subject to (Requirements):\r
a₁₁x₁ + a₁₂x₂ + ... + a₁ₙxₙ ≥ b₁ (Requirement 1)\r
a₂₁x₁ + a₂₂x₂ + ... + a₂ₙxₙ ≥ b₂ (Requirement 2)\r
...\r
\r
Subject to (Availability):\r
x₁ ≤ max₁, x₂ ≤ max₂, ...\r
x₁, x₂, ..., xₙ ≥ 0\r
\r
COMMON APPLICATIONS\r
-------------------\r
1. Diet Planning:\r
   - Meet nutritional requirements\r
   - Minimize food cost\r
   - Example: Protein and carb requirements\r
\r
2. Blending Problems:\r
   - Mix materials to meet specifications\r
   - Minimize material cost\r
   - Example: Chemical mixtures\r
\r
3. Production Planning:\r
   - Meet production targets\r
   - Minimize production cost\r
   - Example: Machine allocation\r
\r
4. Transportation:\r
   - Meet shipping requirements\r
   - Minimize shipping cost\r
   - Example: Warehouse distribution\r
\r
KEY DIFFERENCES FROM PROFIT MAXIMIZATION\r
----------------------------------------\r
Cost Minimization:\r
- Min Z = c₁x₁ + c₂x₂\r
- Uses ≥ constraints\r
- Focus: Meet requirements at min cost\r
\r
Profit Maximization:\r
- Max Z = p₁x₁ + p₂x₂\r
- Uses ≤ constraints\r
- Focus: Maximize profit with resources\r
\r
EXAMPLE: DIET PLANNING\r
----------------------\r
Problem: Meet protein and carbohydrate requirements at minimum cost.\r
\r
Food A: ₹20/serving, 4 protein, 3 carbs\r
Food B: ₹30/serving, 3 protein, 5 carbs\r
Requirements: 24 protein, 18 carbs\r
\r
Formulation:\r
Minimize Z = 20x + 30y\r
Subject to:\r
4x + 3y ≥ 24 (Protein)\r
3x + 5y ≥ 18 (Carbs)\r
x, y ≥ 0\r
\r
Solution:\r
Corner points: (0,8), (6,2), (6,0)\r
Optimal: (6,0) with Z = ₹120\r
\r
INTERPRETATION\r
--------------\r
- Use 6 servings of Food A\r
- Use 0 servings of Food B\r
- Minimum cost: ₹120\r
- Protein: exactly met (24 units)\r
- Carbs: exactly met (18 units)\r
\r
KEY TERMS\r
---------\r
• Surplus: Amount by which requirement is exceeded\r
• Binding Constraint: Requirement exactly met (surplus = 0)\r
• Shadow Price: Cost increase if requirement increases\r
• Feasible Region: All solutions meeting requirements\r
\r
COMMON MISTAKES\r
---------------\r
1. Using ≤ instead of ≥ for requirements\r
2. Forgetting availability constraints\r
3. Ignoring surplus\r
4. Misinterpreting the feasible region\r
\r
BEST PRACTICES\r
--------------\r
1. Identify all requirements carefully\r
2. Check for availability limits\r
3. Calculate surplus at optimal\r
4. Verify all constraints are satisfied\r
5. Interpret results in context\r
\r
TEACHER'S NOTE\r
--------------\r
Cost minimization problems help students understand the concept of \r
"meeting requirements at minimum cost." The key insight is that \r
requirements are typically minimums (≥), not maximums (≤). I \r
encourage students to think about their own decisions - buying \r
groceries, planning meals, or choosing transportation - as \r
cost minimization problems."`,C=()=>{const[i,l]=n.useState("concept"),[r,d]=n.useState({}),[s,c]=n.useState(null),[a,m]=n.useState(null),u=[{id:"concept",label:"Concept"},{id:"examples",label:"Examples"},{id:"practice",label:"Practice"}],x=[{id:1,title:"Example 1: Diet Planning",problem:"A dietitian needs to plan a meal that provides at least 24 units of protein and 18 units of carbohydrates. Food A costs ₹20 per serving and provides 4 units of protein and 3 units of carbohydrates. Food B costs ₹30 per serving and provides 3 units of protein and 5 units of carbohydrates. What is the minimum cost diet?",solution:`Let x = servings of Food A, y = servings of Food B
Minimize Z = 20x + 30y
Subject to:
4x + 3y ≥ 24 (Protein)
3x + 5y ≥ 18 (Carbs)
x, y ≥ 0`,detailedSolution:`Step 1: Define variables
x = servings of Food A, y = servings of Food B

Step 2: Formulate objective function
Cost of Food A = 20x, Cost of Food B = 30y
Minimize Z = 20x + 30y

Step 3: Formulate constraints
Protein: 4x + 3y ≥ 24
Carbohydrates: 3x + 5y ≥ 18
Non-negativity: x ≥ 0, y ≥ 0

Step 4: Solve graphically
Corner points: (0,8), (6,2), (6,0)
Z(0,8) = 20(0) + 30(8) = 240
Z(6,2) = 20(6) + 30(2) = 120 + 60 = 180
Z(6,0) = 20(6) + 30(0) = 120

Step 5: Optimal solution
Minimum cost = ₹120 at (6,0)
Use 6 servings of Food A and 0 servings of Food B.

Nutrient check:
Protein: 4(6) + 3(0) = 24 (exactly met)
Carbs: 3(6) + 5(0) = 18 (exactly met)`},{id:2,title:"Example 2: Blending Problem",problem:"A company produces a product by blending two materials. Material X costs ₹50 per kg and contains 80% of ingredient A. Material Y costs ₹40 per kg and contains 50% of ingredient A. The product must contain at least 60 kg of ingredient A. Available: 100 kg of Material X and 80 kg of Material Y. What is the minimum cost blend?",solution:`Let x = kg of Material X, y = kg of Material Y
Minimize Z = 50x + 40y
Subject to:
0.8x + 0.5y ≥ 60 (Ingredient A)
x ≤ 100 (Material X availability)
y ≤ 80 (Material Y availability)
x, y ≥ 0`,detailedSolution:`Step 1: Define variables
x = kg of Material X, y = kg of Material Y

Step 2: Formulate objective function
Cost of Material X = 50x, Cost of Material Y = 40y
Minimize Z = 50x + 40y

Step 3: Formulate constraints
Ingredient A: 0.8x + 0.5y ≥ 60
Material X availability: x ≤ 100
Material Y availability: y ≤ 80
Non-negativity: x ≥ 0, y ≥ 0

Step 4: Solve graphically
Corner points: (75,0), (25,80), (100,0)
Z(75,0) = 50(75) + 40(0) = 3,750
Z(25,80) = 50(25) + 40(80) = 1,250 + 3,200 = 4,450
Z(100,0) = 50(100) + 40(0) = 5,000

Step 5: Optimal solution
Minimum cost = ₹3,750 at (75,0)
Use 75 kg of Material X and 0 kg of Material Y.

Check: 0.8(75) = 60 kg of ingredient A (exactly met)`},{id:3,title:"Example 3: Production Planning",problem:"A factory must produce at least 100 units of product. Two machines are available. Machine A costs ₹200 per hour and produces 10 units per hour. Machine B costs ₹150 per hour and produces 8 units per hour. Machine A can run for at most 12 hours, Machine B for at most 10 hours. Find the minimum cost production plan.",solution:`Let x = hours on Machine A, y = hours on Machine B
Minimize Z = 200x + 150y
Subject to:
10x + 8y ≥ 100 (Production)
x ≤ 12 (Machine A max)
y ≤ 10 (Machine B max)
x, y ≥ 0`,detailedSolution:`Step 1: Define variables
x = hours on Machine A, y = hours on Machine B

Step 2: Formulate objective function
Cost of Machine A = 200x, Cost of Machine B = 150y
Minimize Z = 200x + 150y

Step 3: Formulate constraints
Production: 10x + 8y ≥ 100
Machine A max: x ≤ 12
Machine B max: y ≤ 10
Non-negativity: x ≥ 0, y ≥ 0

Step 4: Solve graphically
Corner points: (10,0), (12,0), (12,5), (10,0)
Z(10,0) = 200(10) + 150(0) = 2,000
Z(12,0) = 200(12) + 150(0) = 2,400
Z(12,5) = 200(12) + 150(5) = 2,400 + 750 = 3,150

Step 5: Optimal solution
Minimum cost = ₹2,000 at (10,0)
Use Machine A for 10 hours only.

Check: 10(10) = 100 units (exactly met)`},{id:4,title:"Example 4: Transportation Cost",problem:"A company needs to ship 200 units of goods from two warehouses. Warehouse 1 has 120 units available and costs ₹5 per unit to ship. Warehouse 2 has 100 units available and costs ₹7 per unit to ship. Find the minimum cost shipping plan.",solution:`Let x = units from Warehouse 1, y = units from Warehouse 2
Minimize Z = 5x + 7y
Subject to:
x + y = 200 (Total demand)
x ≤ 120 (Warehouse 1 supply)
y ≤ 100 (Warehouse 2 supply)
x, y ≥ 0`,detailedSolution:`Step 1: Define variables
x = units from Warehouse 1, y = units from Warehouse 2

Step 2: Formulate objective function
Cost from Warehouse 1 = 5x, Cost from Warehouse 2 = 7y
Minimize Z = 5x + 7y

Step 3: Formulate constraints
Total demand: x + y = 200
Warehouse 1 supply: x ≤ 120
Warehouse 2 supply: y ≤ 100
Non-negativity: x ≥ 0, y ≥ 0

Step 4: Solve graphically
Corner points: (100,100), (120,80)
Z(100,100) = 5(100) + 7(100) = 500 + 700 = 1,200
Z(120,80) = 5(120) + 7(80) = 600 + 560 = 1,160

Step 5: Optimal solution
Minimum cost = ₹1,160 at (120,80)
Ship 120 units from Warehouse 1 and 80 units from Warehouse 2.`}],h=[{id:1,title:"Nutrition Planning",problem:"A nutritionist needs to meet minimum requirements of 20 units of Vitamin A and 15 units of Vitamin B. Food P costs ₹25 per unit and provides 5 units of Vitamin A and 2 units of Vitamin B. Food Q costs ₹35 per unit and provides 3 units of Vitamin A and 5 units of Vitamin B. Find the minimum cost diet.",hint:"Let x = Food P units, y = Food Q units. What are the vitamin constraints?",solution:`Let x = Food P, y = Food Q
Minimize Z = 25x + 35y
Subject to:
5x + 3y ≥ 20 (Vitamin A)
2x + 5y ≥ 15 (Vitamin B)
x, y ≥ 0`},{id:2,title:"Minimum Cost Production",problem:"A factory must produce at least 150 units. Machine A costs ₹300 per hour and produces 15 units per hour. Machine B costs ₹250 per hour and produces 10 units per hour. Machine A max 8 hours, Machine B max 10 hours. Find minimum cost.",hint:"Let x = hours on Machine A, y = hours on Machine B. What are the production and machine constraints?",solution:`Let x = Machine A hours, y = Machine B hours
Minimize Z = 300x + 250y
Subject to:
15x + 10y ≥ 150
x ≤ 8
y ≤ 10
x, y ≥ 0`},{id:3,title:"Blending Optimization",problem:"A chemical company needs to produce 100 kg of a mixture containing at least 40 kg of ingredient X. Material A costs ₹60/kg and contains 60% of ingredient X. Material B costs ₹50/kg and contains 40% of ingredient X. Available: 80 kg of Material A, 70 kg of Material B. Find minimum cost.",hint:"Let x = kg of Material A, y = kg of Material B. What are the ingredient and availability constraints?",solution:`Let x = Material A, y = Material B
Minimize Z = 60x + 50y
Subject to:
0.6x + 0.4y ≥ 40
x + y ≥ 100
x ≤ 80
y ≤ 70
x, y ≥ 0`}],p=t=>{d(o=>({...o,[t]:!o[t]}))};return e.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[e.jsxs("div",{className:"text-center mb-10",children:[e.jsx("h1",{className:"text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-all duration-300",children:"Cost Minimization Problems"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto",children:"Learn how to formulate and solve cost minimization problems using linear programming to find the optimal solution that meets requirements at the lowest cost."})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 justify-center border-b border-gray-200 dark:border-gray-700 pb-4",children:u.map(t=>e.jsx("button",{onClick:()=>l(t.id),className:g("px-6 py-2 rounded-lg font-medium transition-all duration-300",i===t.id?"bg-rose-600 text-white shadow-lg shadow-rose-200 dark:shadow-rose-900/30":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-md"),children:t.label},t.id))}),e.jsxs("div",{className:"space-y-8",children:[i==="concept"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"What is a Cost Minimization Problem?"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 leading-relaxed mb-4",children:"A cost minimization problem is a type of linear programming problem where the objective is to minimize total cost while meeting certain requirements or demands. These problems are common in diet planning, blending, purchasing, and production planning where costs must be minimized."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Key Characteristics"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Objective: Minimize total cost"}),e.jsx("li",{children:"Each option has a cost per unit"}),e.jsx("li",{children:"Requirements must be met (≥ constraints)"}),e.jsx("li",{children:"Goal: Meet requirements at lowest cost"})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Real-World Applications"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Diet and nutrition planning"}),e.jsx("li",{children:"Raw material blending"}),e.jsx("li",{children:"Transportation and logistics"}),e.jsx("li",{children:"Production planning with cost constraints"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"Steps to Formulate a Cost Minimization Problem"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[e.jsx("div",{className:"text-4xl mb-2",children:"📝"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Step 1"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Identify options and variables"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[e.jsx("div",{className:"text-4xl mb-2",children:"💰"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Step 2"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Determine cost per unit"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[e.jsx("div",{className:"text-4xl mb-2",children:"📋"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Step 3"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Identify requirements (≥ constraints)"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[e.jsx("div",{className:"text-4xl mb-2",children:"✅"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Step 4"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Solve and interpret results"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"General Form of Cost Minimization Problem"}),e.jsx("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 font-mono text-sm",children:e.jsxs("div",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsx("p",{className:"font-bold text-blue-600 dark:text-blue-400",children:"Objective:"}),e.jsx("p",{className:"ml-4",children:"Minimize Z = c₁x₁ + c₂x₂ + ... + cₙxₙ"}),e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 ml-4",children:"Where cᵢ = cost per unit of option i"}),e.jsx("p",{className:"font-bold text-green-600 dark:text-green-400 mt-2",children:"Subject to (Requirements):"}),e.jsx("p",{className:"ml-4",children:"a₁₁x₁ + a₁₂x₂ + ... + a₁ₙxₙ ≥ b₁ (Requirement 1)"}),e.jsx("p",{className:"ml-4",children:"a₂₁x₁ + a₂₂x₂ + ... + a₂ₙxₙ ≥ b₂ (Requirement 2)"}),e.jsx("p",{className:"ml-4",children:"..."}),e.jsx("p",{className:"font-bold text-purple-600 dark:text-purple-400 mt-2",children:"Availability Constraints:"}),e.jsx("p",{className:"ml-4",children:"x₁ ≤ max₁, x₂ ≤ max₂, ... (Maximum limits)"}),e.jsx("p",{className:"ml-4",children:"x₁, x₂, ..., xₙ ≥ 0"})]})})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"Key Differences from Profit Maximization"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-rose-50 dark:bg-rose-900/20 rounded-lg p-4 border-l-4 border-rose-500",children:[e.jsx("h4",{className:"font-semibold text-rose-700 dark:text-rose-400 mb-2",children:"Cost Minimization"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Objective: Min Z = c₁x₁ + c₂x₂"}),e.jsx("li",{children:"cᵢ = cost per unit"}),e.jsx("li",{children:"Uses ≥ constraints (requirements)"}),e.jsx("li",{children:"Focus: Minimize expenses"}),e.jsx("li",{children:"Used for diet, blending problems"})]})]}),e.jsxs("div",{className:"bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 border-l-4 border-indigo-500",children:[e.jsx("h4",{className:"font-semibold text-indigo-700 dark:text-indigo-400 mb-2",children:"Profit Maximization"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Objective: Max Z = p₁x₁ + p₂x₂"}),e.jsx("li",{children:"pᵢ = profit per unit"}),e.jsx("li",{children:"Uses ≤ constraints (resources)"}),e.jsx("li",{children:"Focus: Maximize profit"}),e.jsx("li",{children:"Used for production planning"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"💡 Tips & Tricks for Cost Minimization Problems"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h4",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"Professional Tips"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Identify all requirements carefully"}),e.jsx("li",{children:"Check for minimum and maximum availability"}),e.jsx("li",{children:"Consider quality constraints"}),e.jsx("li",{children:"Look for surplus nutrients or resources"})]})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500",children:[e.jsx("h4",{className:"font-semibold text-purple-700 dark:text-purple-400 mb-2",children:"Common Mistakes"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Using ≤ instead of ≥ for requirements"}),e.jsx("li",{children:"Forgetting availability constraints"}),e.jsx("li",{children:"Ignoring surplus in requirements"}),e.jsx("li",{children:"Misinterpreting the feasible region"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"✅ Mini Checklist"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Cost per unit correctly identified"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"All requirements included (≥ constraints)"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Availability constraints included"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Non-negativity constraints included"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Surplus resources identified"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Solution verified and interpreted"})]})]})]})]}),i==="examples"&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"space-y-6",children:x.map(t=>e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-bold text-gray-800 dark:text-gray-200 mb-3",children:t.title}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h5",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Problem"}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:t.problem})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h5",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"LP Formulation"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.solution})]})]}),e.jsx("div",{className:"mt-4 flex justify-center",children:e.jsx("button",{onClick:()=>p(t.id),className:"px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-all duration-300",children:r[t.id]?"Hide Detailed Solution":"Show Detailed Solution"})}),r[t.id]&&e.jsxs("div",{className:"mt-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h5",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"📝 Detailed Solution"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.detailedSolution})]})]},`example-${t.id}`))})}),i==="practice"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center",children:"Practice Problems"}),e.jsx("div",{className:"space-y-6",children:h.map(t=>e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 transition-all duration-300 hover:shadow-md",children:[e.jsxs("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:["Problem ",t.id,": ",t.title]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:t.problem}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-3",children:"Formulate the LP problem to minimize cost."}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>c(s===t.id?null:t.id),className:"px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-all duration-300",children:s===t.id?"Hide Solution":"Check Solution"}),e.jsx("button",{onClick:()=>m(a===t.id?null:t.id),className:"px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300",children:a===t.id?"Hide Hint":"Show Hint"})]}),a===t.id&&e.jsx("div",{className:"mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800",children:e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"💡 Hint:"})," ",t.hint]})}),s===t.id&&e.jsx("div",{className:"mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800",children:e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono",children:t.solution})})]},t.id))})]}),e.jsxs("div",{className:"bg-rose-50 dark:bg-rose-900/20 rounded-lg p-6 border border-rose-200 dark:border-rose-800",children:[e.jsx("h4",{className:"font-semibold text-rose-700 dark:text-rose-400 mb-2",children:"💡 Tips for Solving Cost Minimization Problems"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Identify requirements:"})," What must be met? (≥ constraints)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Consider availability:"})," What limits your options? (≤ constraints)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Define variables clearly:"})," What does each variable represent?"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Include non-negativity:"})," Quantities cannot be negative"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Check for surplus:"})," Some requirements may be exceeded"]})]})]})]})]}),e.jsx("div",{className:"mt-12",children:e.jsx(b,{title:"Cost Minimization Problems FAQs",questions:v})}),e.jsx("div",{className:"mt-8",children:e.jsx(f,{content:j,title:"Cost Minimization Problems",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Note",downloadFileName:"topic3_note.txt"})}),e.jsx("div",{className:"mt-8",children:e.jsx(y,{note:"Cost minimization problems are the natural complement to profit maximization. In many real-world scenarios, the objective is to minimize costs while meeting specific requirements - from diet planning to manufacturing. I emphasize to students that the key difference is the direction of the constraints: profit maximization typically has ≤ (resource constraints), while cost minimization typically has ≥ (requirement constraints). This simple distinction helps students quickly identify which type of problem they're dealing with."})})]})})};export{C as default};
