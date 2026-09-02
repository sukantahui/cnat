import{b as r,j as e,bg as g}from"./vendor-react-core-Doz9nIC6.js";import{T as b}from"./TeacherSukantaHui-RpFLNJ5A.js";import{F as f}from"./FAQTemplate-BHhlgA96.js";import{P as y}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-wprqVFW_.js";const v=[{question:"What is the objective of a profit maximization problem?",shortAnswer:"To maximize total profit by determining the optimal quantities of products to produce.",explanation:"Profit maximization problems aim to find the production quantities that generate the highest possible profit, subject to resource constraints.",hint:"Maximize profit, not revenue.",level:"basic",codeExample:"Maximize Z = 40x + 50y (Profit from chairs and tables)"},{question:"How is profit different from revenue?",shortAnswer:"Profit is revenue minus costs; revenue is the total income from sales.",explanation:"Revenue = Price × Quantity. Profit = Revenue - Total Costs. Profit maximization considers both income and expenses.",hint:"Profit = Revenue - Cost.",level:"basic",codeExample:"Revenue = 100x + 80y, Profit = (100-60)x + (80-50)y"},{question:"What are the key components of a profit maximization LP problem?",shortAnswer:"Decision variables (product quantities), profit coefficients, resource constraints, and non-negativity constraints.",explanation:"Variables represent quantities of each product. Profit coefficients are profit per unit. Resource constraints limit production. Non-negativity ensures quantities are positive.",hint:"Variables, profit per unit, constraints.",level:"basic",codeExample:"Maximize Z = p₁x + p₂y, subject to resource constraints, x, y ≥ 0"},{question:"How do you calculate profit per unit?",shortAnswer:"Profit per unit = Selling price per unit - Variable cost per unit.",explanation:"Fixed costs are not included in per-unit profit calculations because they don't change with production quantity. They affect total profit but not the optimal mix.",hint:"Price - Variable Cost = Profit per unit.",level:"intermediate",codeExample:"Price = ₹100, Variable Cost = ₹60 → Profit = ₹40 per unit"},{question:"What is the difference between profit maximization and cost minimization?",shortAnswer:"Profit maximization seeks the highest profit with ≤ constraints; cost minimization seeks the lowest cost with ≥ constraints.",explanation:"Profit maximization is typically used for production planning. Cost minimization is used for diet planning, blending, and purchasing problems.",hint:"Max profit vs. min cost.",level:"intermediate",codeExample:"Max Z = 40x + 50y vs. Min Z = 20x + 30y"},{question:"Why are resource constraints important in profit maximization?",shortAnswer:"Resources limit how much you can produce, so they determine the maximum possible profit.",explanation:"Without resource constraints, you could produce unlimited quantities. Real-world problems always have limited resources like labor, materials, and capital.",hint:"Limited resources limit profit.",level:"basic",codeExample:"Labor: 2x + 3y ≤ 120, Materials: 3x + 2y ≤ 90"},{question:"What happens if a product has negative profit?",shortAnswer:"The optimal solution would produce zero units of that product (unless there's a minimum requirement).",explanation:"If a product loses money (negative profit), you wouldn't produce it unless required by contract or for other business reasons.",hint:"Don't produce losing products.",level:"intermediate",codeExample:"If profit = -₹10 per unit, produce x = 0"},{question:"How do fixed costs affect profit maximization?",shortAnswer:"Fixed costs don't affect the optimal product mix but do affect the total profit amount.",explanation:"Fixed costs are constant regardless of production quantity. They shift the profit line but don't change the optimal quantities.",hint:"Fixed costs don't change the optimal mix.",level:"intermediate",codeExample:"Z = (Price - Variable Cost)x + (Price - Variable Cost)y - Fixed Costs"},{question:"What is the role of contribution margin in profit maximization?",shortAnswer:"Contribution margin (price - variable cost) determines the profit per unit and is used in the objective function.",explanation:"Contribution margin shows how much each unit contributes to covering fixed costs and generating profit. Products with higher contribution margins are typically preferred.",hint:"Contribution margin = profit per unit.",level:"intermediate",codeExample:"Contribution margin = ₹40 for product A, ₹50 for product B"},{question:"Can profit maximization problems have multiple optimal solutions?",shortAnswer:"Yes, when the objective function is parallel to a binding constraint, multiple product mixes give the same profit.",explanation:"This happens when the profit ratio equals the resource usage ratio for two products.",hint:"Same profit from different mixes.",level:"advanced",codeExample:"Both (50,0) and (0,40) give the same profit"},{question:"What is the economic interpretation of shadow prices in profit maximization?",shortAnswer:"Shadow prices represent the maximum amount you should pay for additional resources.",explanation:"If a resource has a shadow price of ₹2.50, each additional unit of that resource adds ₹2.50 to profit. You should pay up to ₹2.50 for more of that resource.",hint:"Value of additional resources.",level:"advanced",codeExample:"Shadow price = ₹2.50/hour → Pay up to ₹2.50 for extra hours"},{question:"How do you handle minimum production requirements in profit maximization?",shortAnswer:"Add constraints like x ≥ min_x to ensure minimum quantities are produced.",explanation:"Some products may have minimum production requirements due to contracts, market presence, or strategic reasons.",hint:"Minimum requirements as constraints.",level:"intermediate",codeExample:"x ≥ 20 (minimum chairs to produce)"},{question:"What is the difference between maximizing profit and maximizing contribution margin?",shortAnswer:"Maximizing profit considers all costs; maximizing contribution margin focuses on variable costs only.",explanation:"If fixed costs are constant, maximizing contribution margin is equivalent to maximizing profit. This simplifies the problem.",hint:"Contribution margin = Revenue - Variable Cost.",level:"advanced",codeExample:"Maximize total contribution margin = Σ(Price - Variable Cost) × Quantity"},{question:"How do you formulate a profit maximization problem with multiple products?",shortAnswer:"Extend the two-product formulation: Max Z = p₁x₁ + p₂x₂ + ... + pₙxₙ.",explanation:"Each product has its own profit per unit and resource requirements. Add variables and terms for each product.",hint:"Add variables and profit terms.",level:"advanced",codeExample:"Max Z = 40x + 50y + 30z (three products)"},{question:"What is the relationship between profit maximization and resource allocation?",shortAnswer:"Profit maximization allocates resources to products that generate the highest profit per unit of resource.",explanation:"The LP model optimally allocates limited resources across products to maximize total profit.",hint:"Resources go to most profitable products.",level:"intermediate",codeExample:"Allocate labor hours to products with highest profit per hour"},{question:"How do you identify the bottleneck in a profit maximization problem?",shortAnswer:"The bottleneck is the resource with zero slack at the optimal solution.",explanation:"Binding constraints indicate resources that are fully utilized. These are the bottlenecks that limit profit.",hint:"Fully utilized resource = bottleneck.",level:"intermediate",codeExample:"Labor: 2x + 3y = 120 (binding) → Labor is the bottleneck"},{question:"What is the practical significance of profit maximization LP?",shortAnswer:"It helps businesses make optimal production decisions to maximize profitability.",explanation:"Profit maximization LP guides managers on what to produce and in what quantities to achieve the highest profit.",hint:"Guide production decisions.",level:"basic",codeExample:"What products to produce and how many."},{question:"How does demand affect profit maximization?",shortAnswer:"Demand constraints limit production to market demand, adding upper bounds.",explanation:"You can't sell more than the market demands. Add constraints like x ≤ demand_x to reflect this.",hint:"Can't exceed market demand.",level:"intermediate",codeExample:"x ≤ 100, y ≤ 80 (demand constraints)"},{question:"What is the difference between maximizing profit and maximizing revenue?",shortAnswer:"Revenue maximization ignores costs; profit maximization considers both revenue and costs.",explanation:"Revenue maximization might recommend producing low-profit products. Profit maximization focuses on what's actually profitable.",hint:"Profit = Revenue - Cost.",level:"intermediate",codeExample:`Revenue: Max R = 100x + 80y
Profit: Max Z = 40x + 30y`}],j=`TOPIC 2: PROFIT MAXIMIZATION PROBLEMS\r
=====================================\r
\r
INTRODUCTION\r
------------\r
Profit maximization is the most common application of linear programming \r
in business. The goal is to find the optimal product mix that generates \r
maximum profit subject to resource constraints.\r
\r
WHAT IS PROFIT MAXIMIZATION?\r
---------------------------\r
Profit maximization determines the quantities of products to produce to \r
achieve the highest possible profit, given limited resources.\r
\r
KEY FORMULA\r
-----------\r
Profit = Revenue - Total Costs\r
Total Profit = Σ(Price per unit - Variable Cost per unit) × Quantity - Fixed Costs\r
\r
Since fixed costs are constant, maximizing profit is equivalent to \r
maximizing total contribution margin:\r
Maximize Z = Σ(Price - Variable Cost) × Quantity\r
\r
GENERAL FORM\r
------------\r
Maximize Z = p₁x₁ + p₂x₂ + ... + pₙxₙ\r
\r
Subject to:\r
a₁₁x₁ + a₁₂x₂ + ... + a₁ₙxₙ ≤ b₁ (Resource 1)\r
a₂₁x₁ + a₂₂x₂ + ... + a₂ₙxₙ ≤ b₂ (Resource 2)\r
...\r
x₁, x₂, ..., xₙ ≥ 0\r
\r
Where pᵢ = profit per unit of product i\r
\r
KEY DIFFERENCES FROM COST MINIMIZATION\r
--------------------------------------\r
Profit Maximization:\r
- Objective: Max Z\r
- pᵢ = profit per unit\r
- Uses ≤ constraints\r
- Focus: maximize profit\r
\r
Cost Minimization:\r
- Objective: Min Z\r
- cᵢ = cost per unit\r
- Uses ≥ constraints\r
- Focus: minimize cost\r
\r
STEPS TO SOLVE\r
--------------\r
1. Identify products and variables\r
2. Calculate profit per unit\r
3. Identify resource constraints\r
4. Formulate the LP problem\r
5. Solve graphically\r
6. Interpret results\r
\r
EXAMPLE\r
-------\r
Problem: A factory produces chairs (x) and tables (y).\r
Chair: ₹40 profit, 2 labor hours, 3 wood units\r
Table: ₹50 profit, 3 labor hours, 2 wood units\r
Available: 120 labor hours, 90 wood units\r
\r
Formulation:\r
Maximize Z = 40x + 50y\r
Subject to:\r
2x + 3y ≤ 120 (Labor)\r
3x + 2y ≤ 90 (Wood)\r
x, y ≥ 0\r
\r
Solution:\r
Corner points: (0,0), (30,0), (18,24), (0,40)\r
Optimal: (0,40) with Z = ₹2,000\r
Produce 0 chairs and 40 tables.\r
\r
INTERPRETATION\r
--------------\r
- Optimal production mix: 0 chairs, 40 tables\r
- Maximum profit: ₹2,000\r
- Labor: fully utilized\r
- Wood: 10 units slack\r
\r
KEY TERMS\r
---------\r
• Contribution Margin: Price - Variable Cost\r
• Bottleneck: Resource with zero slack\r
• Shadow Price: Value of additional resources\r
• Fixed Costs: Constant regardless of production\r
\r
COMMON MISTAKES\r
---------------\r
1. Confusing revenue with profit\r
2. Forgetting variable costs\r
3. Ignoring fixed costs in profit calculation\r
4. Missing minimum production constraints\r
5. Not including all resource constraints\r
\r
BEST PRACTICES\r
--------------\r
1. Calculate contribution margin correctly\r
2. Include all relevant costs\r
3. Consider minimum production requirements\r
4. Identify all resource constraints\r
5. Verify and interpret the solution\r
\r
TEACHER'S NOTE\r
--------------\r
Profit maximization is the most intuitive LP application. Students \r
understand the goal of making more profit. The key is helping them \r
distinguish between revenue and profit, and understand that profit \r
requires considering both income and costs. Encourage students to \r
think about real businesses and how they might use LP to make better \r
decisions."`,S=()=>{const[i,l]=r.useState("concept"),[o,d]=r.useState({}),[n,c]=r.useState(null),[a,m]=r.useState(null),u=[{id:"concept",label:"Concept"},{id:"examples",label:"Examples"},{id:"practice",label:"Practice"}],x=[{id:1,title:"Example 1: Furniture Manufacturing",problem:"A furniture company produces chairs and tables. Each chair requires 2 hours of labor and 3 units of wood. Each table requires 3 hours of labor and 2 units of wood. The company has 120 labor hours and 90 wood units available daily. Profit per chair is ₹40 and per table is ₹50. How many chairs and tables should be produced to maximize profit?",solution:`Let x = number of chairs, y = number of tables
Maximize Z = 40x + 50y
Subject to:
2x + 3y ≤ 120 (Labor)
3x + 2y ≤ 90 (Wood)
x, y ≥ 0`,detailedSolution:`Step 1: Define variables
x = number of chairs, y = number of tables

Step 2: Formulate objective function
Profit from chairs = 40x, Profit from tables = 50y
Maximize Z = 40x + 50y

Step 3: Formulate constraints
Labor: 2x + 3y ≤ 120
Wood: 3x + 2y ≤ 90
Non-negativity: x ≥ 0, y ≥ 0

Step 4: Solve graphically
Corner points: (0,0), (30,0), (18,24), (0,40)
Z(0,0) = 0
Z(30,0) = 40(30) + 50(0) = 1200
Z(18,24) = 40(18) + 50(24) = 720 + 1200 = 1920
Z(0,40) = 40(0) + 50(40) = 2000

Step 5: Optimal solution
Maximum profit = ₹2000 at (0,40)
Produce 0 chairs and 40 tables.

Resource utilization:
Labor: 2(0) + 3(40) = 120 hours (fully utilized)
Wood: 3(0) + 2(40) = 80 units (10 units slack)`},{id:2,title:"Example 2: Bakery Profit Maximization",problem:"A bakery produces cakes and pastries. Each cake requires 2 kg flour and 3 hours labor. Each pastry requires 1 kg flour and 2 hours labor. The bakery has 200 kg flour and 150 hours labor available. Profit per cake is ₹600 and per pastry is ₹400. What is the optimal production mix?",solution:`Let x = number of cakes, y = number of pastries
Maximize Z = 600x + 400y
Subject to:
2x + y ≤ 200 (Flour)
3x + 2y ≤ 150 (Labor)
x, y ≥ 0`,detailedSolution:`Step 1: Define variables
x = number of cakes, y = number of pastries

Step 2: Formulate objective function
Profit from cakes = 600x, Profit from pastries = 400y
Maximize Z = 600x + 400y

Step 3: Formulate constraints
Flour: 2x + y ≤ 200
Labor: 3x + 2y ≤ 150
Non-negativity: x ≥ 0, y ≥ 0

Step 4: Solve graphically
Corner points: (0,0), (50,0), (25,75), (0,100)
Z(0,0) = 0
Z(50,0) = 600(50) + 400(0) = 30000
Z(25,75) = 600(25) + 400(75) = 15000 + 30000 = 45000
Z(0,100) = 600(0) + 400(100) = 40000

Step 5: Optimal solution
Maximum profit = ₹45,000 at (25,75)
Produce 25 cakes and 75 pastries.

Resource utilization:
Flour: 2(25) + 75 = 125 kg (75 kg slack)
Labor: 3(25) + 2(75) = 75 + 150 = 150 hours (fully utilized)`},{id:3,title:"Example 3: Electronics Profit Maximization",problem:"An electronics company produces Standard and Premium devices. Standard requires 2 hours assembly and 1 hour testing. Premium requires 3 hours assembly and 2 hours testing. Available: 180 assembly hours and 100 testing hours daily. Profit: Standard ₹500, Premium ₹800. Find the profit-maximizing production plan.",solution:`Let x = Standard units, y = Premium units
Maximize Z = 500x + 800y
Subject to:
2x + 3y ≤ 180 (Assembly)
x + 2y ≤ 100 (Testing)
x, y ≥ 0`,detailedSolution:`Step 1: Define variables
x = number of Standard units, y = number of Premium units

Step 2: Formulate objective function
Profit from Standard = 500x, Profit from Premium = 800y
Maximize Z = 500x + 800y

Step 3: Formulate constraints
Assembly: 2x + 3y ≤ 180
Testing: x + 2y ≤ 100
Non-negativity: x ≥ 0, y ≥ 0

Step 4: Solve graphically
Corner points: (0,0), (90,0), (60,20), (0,50)
Z(0,0) = 0
Z(90,0) = 500(90) + 800(0) = 45000
Z(60,20) = 500(60) + 800(20) = 30000 + 16000 = 46000
Z(0,50) = 500(0) + 800(50) = 40000

Step 5: Optimal solution
Maximum profit = ₹46,000 at (60,20)
Produce 60 Standard units and 20 Premium units.

Resource utilization:
Assembly: 2(60) + 3(20) = 120 + 60 = 180 hours (fully utilized)
Testing: 60 + 2(20) = 60 + 40 = 100 hours (fully utilized)`},{id:4,title:"Example 4: Agricultural Profit Maximization",problem:"A farmer grows wheat and corn. Wheat requires 2 acres and 3 hours of labor per unit. Corn requires 3 acres and 2 hours of labor per unit. Available: 100 acres and 120 labor hours. Profit: Wheat ₹8,000/unit, Corn ₹10,000/unit. What crop mix maximizes profit?",solution:`Let x = units of wheat, y = units of corn
Maximize Z = 8000x + 10000y
Subject to:
2x + 3y ≤ 100 (Land)
3x + 2y ≤ 120 (Labor)
x, y ≥ 0`,detailedSolution:`Step 1: Define variables
x = units of wheat, y = units of corn

Step 2: Formulate objective function
Profit from wheat = 8000x, Profit from corn = 10000y
Maximize Z = 8000x + 10000y

Step 3: Formulate constraints
Land: 2x + 3y ≤ 100
Labor: 3x + 2y ≤ 120
Non-negativity: x ≥ 0, y ≥ 0

Step 4: Solve graphically
Corner points: (0,0), (50,0), (28,16), (0,40)
Z(0,0) = 0
Z(50,0) = 8000(50) + 10000(0) = 400000
Z(28,16) = 8000(28) + 10000(16) = 224000 + 160000 = 384000
Z(0,40) = 8000(0) + 10000(40) = 400000

Step 5: Optimal solution
Maximum profit = ₹400,000 at (50,0) OR (0,40)
Multiple optimal solutions exist!

Interpretation:
Both wheat-only (50 units) and corn-only (40 units) give the same profit.
The farmer can choose based on other factors (market demand, risk, etc.)`}],h=[{id:1,title:"Garment Factory",problem:"A garment factory produces shirts and pants. Each shirt requires 2 hours of cutting and 1 hour of sewing. Each pant requires 1 hour of cutting and 2 hours of sewing. Available: 80 cutting hours and 100 sewing hours. Profit: Shirt ₹300, Pant ₹400. Find the optimal production mix.",hint:"Let x = shirts, y = pants. What are the cutting and sewing constraints?",solution:`Let x = shirts, y = pants
Maximize Z = 300x + 400y
Subject to:
2x + y ≤ 80 (Cutting)
x + 2y ≤ 100 (Sewing)
x, y ≥ 0`},{id:2,title:"Pharmaceutical Production",problem:"A pharmaceutical company produces two drugs. Drug A requires 3 hours of mixing and 2 hours of packaging. Drug B requires 2 hours of mixing and 4 hours of packaging. Available: 120 mixing hours and 160 packaging hours. Profit: Drug A ₹500, Drug B ₹700. Maximize profit.",hint:"Let x = Drug A units, y = Drug B units. What are the mixing and packaging constraints?",solution:`Let x = Drug A, y = Drug B
Maximize Z = 500x + 700y
Subject to:
3x + 2y ≤ 120 (Mixing)
2x + 4y ≤ 160 (Packaging)
x, y ≥ 0`},{id:3,title:"Furniture Workshop",problem:"A workshop produces desks and cabinets. Desk: 4 hours carpentry, 2 hours finishing. Cabinet: 2 hours carpentry, 4 hours finishing. Available: 160 carpentry hours, 120 finishing hours. Profit: Desk ₹1,000, Cabinet ₹1,200. Maximize profit.",hint:"Let x = desks, y = cabinets. What are the carpentry and finishing constraints?",solution:`Let x = desks, y = cabinets
Maximize Z = 1000x + 1200y
Subject to:
4x + 2y ≤ 160 (Carpentry)
2x + 4y ≤ 120 (Finishing)
x, y ≥ 0`}],p=t=>{d(s=>({...s,[t]:!s[t]}))};return e.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[e.jsxs("div",{className:"text-center mb-10",children:[e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-all duration-300",children:"Profit Maximization Problems"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto",children:"Learn how to formulate and solve profit maximization problems using linear programming to find the optimal product mix that generates maximum profit."})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 justify-center border-b border-gray-200 dark:border-gray-700 pb-4",children:u.map(t=>e.jsx("button",{onClick:()=>l(t.id),className:g("px-6 py-2 rounded-lg font-medium transition-all duration-300",i===t.id?"bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-indigo-900/30":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-md"),children:t.label},t.id))}),e.jsxs("div",{className:"space-y-8",children:[i==="concept"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"What is a Profit Maximization Problem?"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 leading-relaxed mb-4",children:"A profit maximization problem is a type of linear programming problem where the objective is to maximize total profit by determining the optimal quantities of products to produce, subject to resource constraints. This is the most common type of LP problem in business."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Key Characteristics"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Objective: Maximize total profit"}),e.jsx("li",{children:"Each product has a profit per unit"}),e.jsx("li",{children:"Resources limit production"}),e.jsx("li",{children:"Goal: Best use of limited resources"})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Real-World Applications"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Manufacturing production planning"}),e.jsx("li",{children:"Product portfolio optimization"}),e.jsx("li",{children:"Resource allocation for maximum return"}),e.jsx("li",{children:"Pricing and product mix decisions"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"Steps to Formulate a Profit Maximization Problem"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[e.jsx("div",{className:"text-4xl mb-2",children:"📝"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Step 1"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Identify products and variables"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[e.jsx("div",{className:"text-4xl mb-2",children:"💰"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Step 2"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Determine profit per unit"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[e.jsx("div",{className:"text-4xl mb-2",children:"📋"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Step 3"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Identify resource constraints"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[e.jsx("div",{className:"text-4xl mb-2",children:"✅"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Step 4"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Solve and interpret results"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"General Form of Profit Maximization Problem"}),e.jsx("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 font-mono text-sm",children:e.jsxs("div",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsx("p",{className:"font-bold text-blue-600 dark:text-blue-400",children:"Objective:"}),e.jsx("p",{className:"ml-4",children:"Maximize Z = p₁x₁ + p₂x₂ + ... + pₙxₙ"}),e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 ml-4",children:"Where pᵢ = profit per unit of product i"}),e.jsx("p",{className:"font-bold text-green-600 dark:text-green-400 mt-2",children:"Subject to:"}),e.jsx("p",{className:"ml-4",children:"a₁₁x₁ + a₁₂x₂ + ... + a₁ₙxₙ ≤ b₁ (Resource 1)"}),e.jsx("p",{className:"ml-4",children:"a₂₁x₁ + a₂₂x₂ + ... + a₂ₙxₙ ≤ b₂ (Resource 2)"}),e.jsx("p",{className:"ml-4",children:"..."}),e.jsx("p",{className:"ml-4",children:"x₁, x₂, ..., xₙ ≥ 0"})]})})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"Key Differences from Cost Minimization"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 border-l-4 border-indigo-500",children:[e.jsx("h4",{className:"font-semibold text-indigo-700 dark:text-indigo-400 mb-2",children:"Profit Maximization"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Objective: Max Z = p₁x₁ + p₂x₂"}),e.jsx("li",{children:"pᵢ = profit per unit"}),e.jsx("li",{children:"Typically uses ≤ constraints"}),e.jsx("li",{children:"Focus on revenue minus costs"}),e.jsx("li",{children:"Used for production planning"})]})]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Cost Minimization"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Objective: Min Z = c₁x₁ + c₂x₂"}),e.jsx("li",{children:"cᵢ = cost per unit"}),e.jsx("li",{children:"Typically uses ≥ constraints"}),e.jsx("li",{children:"Focus on minimizing expenses"}),e.jsx("li",{children:"Used for diet, blending problems"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"💡 Tips & Tricks for Profit Maximization Problems"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h4",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"Professional Tips"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Calculate profit per unit carefully"}),e.jsx("li",{children:"Consider fixed vs variable costs"}),e.jsx("li",{children:"Check for minimum production requirements"}),e.jsx("li",{children:"Include all relevant costs in profit calculation"})]})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500",children:[e.jsx("h4",{className:"font-semibold text-purple-700 dark:text-purple-400 mb-2",children:"Common Mistakes"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Confusing revenue with profit"}),e.jsx("li",{children:"Forgetting variable costs"}),e.jsx("li",{children:"Ignoring fixed costs in profit calculation"}),e.jsx("li",{children:"Missing minimum production constraints"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"✅ Mini Checklist"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Profit per unit correctly calculated"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"All resources constraints included"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Objective function correctly formulated"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Non-negativity constraints included"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Minimum production requirements checked"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Solution verified and interpreted"})]})]})]})]}),i==="examples"&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"space-y-6",children:x.map(t=>e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-bold text-gray-800 dark:text-gray-200 mb-3",children:t.title}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h5",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Problem"}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:t.problem})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h5",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"LP Formulation"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.solution})]})]}),e.jsx("div",{className:"mt-4 flex justify-center",children:e.jsx("button",{onClick:()=>p(t.id),className:"px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300",children:o[t.id]?"Hide Detailed Solution":"Show Detailed Solution"})}),o[t.id]&&e.jsxs("div",{className:"mt-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h5",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"📝 Detailed Solution"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.detailedSolution})]})]},`example-${t.id}`))})}),i==="practice"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center",children:"Practice Problems"}),e.jsx("div",{className:"space-y-6",children:h.map(t=>e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 transition-all duration-300 hover:shadow-md",children:[e.jsxs("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:["Problem ",t.id,": ",t.title]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:t.problem}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-3",children:"Formulate the LP problem to maximize profit."}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>c(n===t.id?null:t.id),className:"px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-all duration-300",children:n===t.id?"Hide Solution":"Check Solution"}),e.jsx("button",{onClick:()=>m(a===t.id?null:t.id),className:"px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300",children:a===t.id?"Hide Hint":"Show Hint"})]}),a===t.id&&e.jsx("div",{className:"mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800",children:e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"💡 Hint:"})," ",t.hint]})}),n===t.id&&e.jsx("div",{className:"mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800",children:e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono",children:t.solution})})]},t.id))})]}),e.jsxs("div",{className:"bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6 border border-indigo-200 dark:border-indigo-800",children:[e.jsx("h4",{className:"font-semibold text-indigo-700 dark:text-indigo-400 mb-2",children:"💡 Tips for Solving Profit Maximization Problems"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Calculate profit correctly:"})," Profit = Revenue - Variable Costs"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Identify all products:"})," What are you producing?"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"List all resources:"})," What limits production?"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Check for minimum requirements:"})," Some products may have minimum production"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Include non-negativity:"})," Production quantities cannot be negative"]})]})]})]})]}),e.jsx("div",{className:"mt-12",children:e.jsx(f,{title:"Profit Maximization Problems FAQs",questions:v})}),e.jsx("div",{className:"mt-8",children:e.jsx(y,{content:j,title:"Profit Maximization Problems",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Note",downloadFileName:"topic2_note.txt"})}),e.jsx("div",{className:"mt-8",children:e.jsx(b,{note:"Profit maximization is the most common and intuitive application of LP. Students naturally understand the goal of making more profit. I emphasize the distinction between revenue and profit - students often confuse the two. The key insight is that profit maximization requires understanding both revenue (price × quantity) and costs (variable costs × quantity + fixed costs). I encourage students to think about real businesses they know and how they might use LP to make better decisions."})})]})})};export{S as default};
