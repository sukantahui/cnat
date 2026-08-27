import{b as n,j as e,bg as u}from"./vendor-react-core-Doz9nIC6.js";import{T as g}from"./TeacherSukantaHui-CyIG3xbg.js";import{F as y}from"./FAQTemplate-CkSqDH4B.js";import{P as b}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-CIaKtAt4.js";const f=[{question:"What types of LP formulation problems are covered in this topic?",shortAnswer:"Product Mix, Resource Allocation, Profit Maximization, Cost Minimization, and Mixed Constraints.",explanation:"The practice problems cover all major types of LP formulation problems with varying complexity.",hint:"Check the categories.",level:"basic",codeExample:"Product Mix, Resource Allocation, Profit Maximization, Cost Minimization"},{question:"How many practice problems are included?",shortAnswer:"10 practice problems covering different scenarios.",explanation:"The problems range from simple product mix to complex mixed constraints with percentages and ratios.",hint:"Count the problems.",level:"basic",codeExample:"10 problems across 5 categories"},{question:"What is the first step in formulating an LP problem?",shortAnswer:"Read the problem carefully and identify the decision variables.",explanation:"Before writing any equations, you need to understand what you're trying to decide.",hint:"What are you trying to decide?",level:"basic",codeExample:"Let x = number of chairs, y = number of tables"},{question:"How do you identify the objective function?",shortAnswer:"Look for words like maximize, minimize, profit, cost, revenue.",explanation:"The objective is what you're trying to optimize. Clue words help identify it.",hint:"Look for optimization words.",level:"basic",codeExample:"Maximize Z = 500x + 700y (Profit)"},{question:"What does 'at least' mean in LP constraints?",shortAnswer:"It means ≥ (greater than or equal to).",explanation:"'At least' indicates a minimum requirement.",hint:"At least = ≥",level:"basic",codeExample:"x + y ≥ 80 (Total production at least 80)"},{question:"What does 'at most' mean in LP constraints?",shortAnswer:"It means ≤ (less than or equal to).",explanation:"'At most' indicates an upper limit or maximum.",hint:"At most = ≤",level:"basic",codeExample:"2x + 3y ≤ 150 (Labor at most 150 hours)"},{question:"How do you handle percentage constraints?",shortAnswer:"Convert the percentage to a linear inequality and simplify.",explanation:"If A must be at least 40% of total, write x ≥ 0.4(x + y) then simplify.",hint:"Convert to linear form.",level:"advanced",codeExample:"x ≥ 0.4(x + y) → 3x ≥ 2y"},{question:"What is the importance of non-negativity constraints?",shortAnswer:"They ensure variables cannot be negative, reflecting real-world constraints.",explanation:"Quantities like production, servings, or allocation cannot be negative.",hint:"Can't be negative.",level:"basic",codeExample:"x ≥ 0, y ≥ 0"},{question:"How do you handle time conversion in LP formulation?",shortAnswer:"Convert all time units to the same unit (e.g., minutes to hours).",explanation:"If constraints are in different time units, convert them to a common unit.",hint:"Use consistent time units.",level:"intermediate",codeExample:"2 minutes = 2/60 hours = 1/30 hours"},{question:"What is the difference between profit maximization and cost minimization?",shortAnswer:"Profit maximization uses ≤ resource constraints; cost minimization uses ≥ requirement constraints.",explanation:"Profit maximization is about making the most profit with limited resources. Cost minimization is about meeting requirements at the lowest cost.",hint:"Max profit vs. min cost.",level:"intermediate",codeExample:"Max Z = 40x + 50y vs. Min Z = 25x + 35y"},{question:"How do you formulate a blending problem?",shortAnswer:"Minimize cost while meeting quality and quantity requirements.",explanation:"Blending problems involve mixing materials to meet specifications at minimum cost.",hint:"Mix to meet specs at min cost.",level:"intermediate",codeExample:"Min Z = 60x + 50y, subject to ingredient constraints"},{question:"What are mixed constraints?",shortAnswer:"Problems with both ≤ and ≥ constraints, plus possibly equality constraints.",explanation:"Mixed constraints combine resource limits (≤), requirements (≥), and exact conditions (=).",hint:"Combination of different constraint types.",level:"intermediate",codeExample:"≤, ≥, and = in the same problem"},{question:"How do you identify if a problem is maximization or minimization?",shortAnswer:"Look for clue words: maximize (profit, revenue) or minimize (cost, expenses).",explanation:"The objective type is usually stated in the problem using clear clue words.",hint:"Look for profit vs. cost.",level:"basic",codeExample:"Maximize profit vs. Minimize cost"},{question:"What is the role of availability constraints?",shortAnswer:"They limit how much of a resource can be used (≤ constraints).",explanation:"Availability constraints represent limited resources like labor, materials, or budget.",hint:"Limited resources = ≤",level:"basic",codeExample:"3x + 2y ≤ 120 (Labor available)"},{question:"How do you formulate a transportation problem?",shortAnswer:"Minimize shipping cost while meeting supply and demand constraints.",explanation:"Transportation problems involve shipping goods from sources to destinations at minimum cost.",hint:"Minimize shipping cost.",level:"intermediate",codeExample:"Min Z = 6x + 8y, subject to supply and demand"},{question:"Why is it important to check units in LP formulation?",shortAnswer:"Inconsistent units lead to incorrect constraints and solutions.",explanation:"All quantities in a constraint must be in the same units. Convert if necessary.",hint:"Units must match.",level:"intermediate",codeExample:"Convert minutes to hours, kg to g, etc."},{question:"What is the difference between 'less than' and 'at most'?",shortAnswer:"Less than (<) excludes equality; at most (≤) includes equality.",explanation:"In LP, we typically use ≤ for both unless equality is explicitly excluded.",hint:"≤ vs. <",level:"intermediate",codeExample:"At most 10: x ≤ 10, Less than 10: x < 10"},{question:"How do you formulate a production planning problem?",shortAnswer:"Maximize profit (or minimize cost) subject to resource constraints.",explanation:"Production planning problems determine how much of each product to produce.",hint:"Max profit with resources.",level:"basic",codeExample:"Max Z = 40x + 50y, subject to labor and material constraints"}],v=`TOPIC 6: PRACTICE PROBLEMS ON LP FORMULATION\r
============================================\r
\r
INTRODUCTION\r
------------\r
This topic provides comprehensive practice problems for LP formulation. \r
Mastering formulation is the most critical skill in applying LP to \r
real-world problems.\r
\r
PROBLEM CATEGORIES\r
------------------\r
1. Product Mix:\r
   - Choosing quantities of products\r
   - Resource constraints (≤)\r
   - Profit maximization\r
\r
2. Resource Allocation:\r
   - Distributing limited resources\r
   - Budget, time, personnel constraints\r
   - Maximizing value\r
\r
3. Profit Maximization:\r
   - Making the most profit\r
   - Resource constraints (≤)\r
   - Production planning\r
\r
4. Cost Minimization:\r
   - Meeting requirements at lowest cost\r
   - Requirement constraints (≥)\r
   - Diet, blending problems\r
\r
5. Mixed Constraints:\r
   - Both ≤ and ≥ constraints\r
   - Percentage and ratio constraints\r
   - Complex real-world problems\r
\r
KEY FORMULATION STEPS\r
---------------------\r
Step 1: Read Carefully\r
- Identify what you're deciding\r
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
- Determine coefficients (profit/cost)\r
\r
Step 4: Identify Constraints\r
- Resource constraints (≤)\r
- Requirement constraints (≥)\r
- Special constraints (%, ratio)\r
\r
Step 5: Add Non-Negativity\r
- x ≥ 0, y ≥ 0\r
\r
Step 6: Verify\r
- Check each constraint\r
- Verify units are consistent\r
\r
COMMON MISTAKES\r
---------------\r
1. Forgetting non-negativity constraints\r
2. Mixing up ≤ and ≥\r
3. Misidentifying the objective\r
4. Using wrong units\r
5. Missing constraints\r
\r
FORMULATION CHECKLIST\r
---------------------\r
□ Variables defined with units\r
□ Objective correctly identified (Max/Min)\r
□ All constraints listed\r
□ Constraint directions correct (≤ or ≥)\r
□ Non-negativity included\r
□ Units are consistent\r
□ Percentage constraints simplified\r
□ Problem makes practical sense\r
\r
TEACHER'S NOTE\r
--------------\r
Practice is essential for mastering LP formulation. I encourage \r
students to attempt each problem independently before checking \r
the solution. The key is not just getting the right answer, \r
but understanding why each constraint is formulated the way it is."`,N=()=>{const[i,d]=n.useState("problems"),[a,s]=n.useState(null),[r,o]=n.useState(null),[l,x]=n.useState("All"),h=[{id:"problems",label:"Practice Problems"},{id:"solutions",label:"Solutions"},{id:"tips",label:"Formulation Tips"}],p=["All","Product Mix","Resource Allocation","Profit Maximization","Cost Minimization","Mixed Constraints"],c=[{id:1,title:"Problem 1: Furniture Production",category:"Product Mix",problem:"A furniture company produces chairs and tables. Each chair requires 3 hours of carpentry and 1 hour of finishing. Each table requires 2 hours of carpentry and 2 hours of finishing. The company has 120 hours of carpentry and 80 hours of finishing available weekly. Profit per chair is ₹500 and per table is ₹700. Formulate the LP problem to maximize profit.",hint:"Let x = chairs, y = tables. Identify carpentry and finishing constraints.",solution:`Let x = number of chairs, y = number of tables
Maximize Z = 500x + 700y
Subject to:
3x + 2y ≤ 120 (Carpentry)
x + 2y ≤ 80 (Finishing)
x, y ≥ 0`},{id:2,title:"Problem 2: Diet Planning",category:"Cost Minimization",problem:"A dietitian wants to plan a meal with at least 20 units of protein and 15 units of carbohydrates. Food A costs ₹25 per serving and provides 5 units of protein and 3 units of carbohydrates. Food B costs ₹35 per serving and provides 4 units of protein and 5 units of carbohydrates. Formulate the LP problem to minimize cost.",hint:"Let x = servings of Food A, y = servings of Food B. What are the nutrient constraints?",solution:`Let x = Food A servings, y = Food B servings
Minimize Z = 25x + 35y
Subject to:
5x + 4y ≥ 20 (Protein)
3x + 5y ≥ 15 (Carbs)
x, y ≥ 0`},{id:3,title:"Problem 3: Budget Allocation",category:"Resource Allocation",problem:"A company has ₹200,000 to allocate between two departments. Department A generates 12 units of value per ₹1,000 and Department B generates 8 units per ₹1,000. At least ₹60,000 must go to Department A and at least ₹40,000 to Department B. Formulate the LP problem to maximize value.",hint:"Let x = allocation to A (₹000), y = allocation to B (₹000). What are the constraints?",solution:`Let x = allocation to A (₹000), y = allocation to B (₹000)
Maximize Z = 12x + 8y
Subject to:
x + y ≤ 200 (Budget)
x ≥ 60 (A minimum)
y ≥ 40 (B minimum)
x, y ≥ 0`},{id:4,title:"Problem 4: Production Planning",category:"Profit Maximization",problem:"A factory produces two products. Product A requires 2 hours of labor and 3 units of material. Product B requires 3 hours of labor and 2 units of material. Available: 150 labor hours and 120 material units. Profit: A = ₹40, B = ₹50. Formulate the LP problem.",hint:"Let x = Product A, y = Product B. What are the labor and material constraints?",solution:`Let x = Product A, y = Product B
Maximize Z = 40x + 50y
Subject to:
2x + 3y ≤ 150 (Labor)
3x + 2y ≤ 120 (Material)
x, y ≥ 0`},{id:5,title:"Problem 5: Blending Problem",category:"Cost Minimization",problem:"A chemical company needs to produce 100 kg of a mixture containing at least 30 kg of ingredient X. Material A costs ₹60/kg and contains 50% X. Material B costs ₹50/kg and contains 30% X. Available: 80 kg of A and 70 kg of B. Formulate the LP problem to minimize cost.",hint:"Let x = kg of Material A, y = kg of Material B. What are the ingredient and availability constraints?",solution:`Let x = Material A (kg), y = Material B (kg)
Minimize Z = 60x + 50y
Subject to:
0.5x + 0.3y ≥ 30 (Ingredient X)
x + y ≥ 100 (Total mixture)
x ≤ 80 (A availability)
y ≤ 70 (B availability)
x, y ≥ 0`},{id:6,title:"Problem 6: Mixed Constraints",category:"Mixed Constraints",problem:"A company produces two products. Total production must be at least 80 units. Product A must be at least 40% of total production. Product A uses 2 hours, Product B uses 3 hours. Available: 200 labor hours. Profit: A = ₹60, B = ₹80. Formulate the LP problem.",hint:"Let x = Product A, y = Product B. Total production: x + y ≥ 80. 40% constraint: x ≥ 0.4(x + y).",solution:`Let x = Product A, y = Product B
Maximize Z = 60x + 80y
Subject to:
2x + 3y ≤ 200 (Labor)
x + y ≥ 80 (Total production)
x ≥ 0.4(x + y) → 0.6x ≥ 0.4y → 3x ≥ 2y
x, y ≥ 0`},{id:7,title:"Problem 7: Transportation",category:"Resource Allocation",problem:"A company needs to ship 150 units of goods from two warehouses. Warehouse 1 has 100 units available and costs ₹6 per unit to ship. Warehouse 2 has 80 units available and costs ₹8 per unit to ship. Formulate the LP problem to minimize shipping cost.",hint:"Let x = units from Warehouse 1, y = units from Warehouse 2. Total demand: x + y = 150.",solution:`Let x = units from Warehouse 1, y = units from Warehouse 2
Minimize Z = 6x + 8y
Subject to:
x + y = 150 (Total demand)
x ≤ 100 (Warehouse 1 supply)
y ≤ 80 (Warehouse 2 supply)
x, y ≥ 0`},{id:8,title:"Problem 8: Advertising Mix",category:"Profit Maximization",problem:"A company advertises on TV and Radio. TV ads cost ₹40,000 each and reach 20,000 people. Radio ads cost ₹20,000 each and reach 10,000 people. Budget: ₹400,000. At least 3 TV ads and 5 Radio ads. Formulate the LP problem to maximize reach.",hint:"Let x = TV ads, y = Radio ads. Budget: 40x + 20y ≤ 400 (₹000).",solution:`Let x = TV ads, y = Radio ads
Maximize Z = 20x + 10y (Reach in 000)
Subject to:
40x + 20y ≤ 400 (Budget)
x ≥ 3 (TV minimum)
y ≥ 5 (Radio minimum)
x, y ≥ 0`},{id:9,title:"Problem 9: Staff Scheduling",category:"Resource Allocation",problem:"A call center has 240 hours available. Sales calls require 2 minutes each and generate ₹60 profit. Support calls require 3 minutes each and generate ₹40 profit. At least 3,000 Sales calls and 2,000 Support calls. Formulate the LP problem.",hint:"Convert minutes to hours. Let x = Sales calls, y = Support calls.",solution:`Let x = Sales calls, y = Support calls
Maximize Z = 60x + 40y
Subject to:
(2/60)x + (3/60)y ≤ 240 (Hours)
x ≥ 3000 (Sales minimum)
y ≥ 2000 (Support minimum)
x, y ≥ 0`},{id:10,title:"Problem 10: Investment Portfolio",category:"Resource Allocation",problem:"An investor has ₹300,000 to invest. Stock A returns 10% with risk 0.4. Stock B returns 6% with risk 0.2. Maximum risk allowed is 80. At least ₹50,000 in each stock. Formulate the LP problem to maximize return.",hint:"Let x = amount in A (₹000), y = amount in B (₹000). Risk constraint: 0.4x + 0.2y ≤ 80.",solution:`Let x = amount in A (₹000), y = amount in B (₹000)
Maximize Z = 0.10x + 0.06y
Subject to:
x + y ≤ 300 (Budget)
0.4x + 0.2y ≤ 80 (Risk)
x ≥ 50 (A minimum)
y ≥ 50 (B minimum)
x, y ≥ 0`}],m=c.filter(t=>l==="All"||t.category===l);return e.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[e.jsxs("div",{className:"text-center mb-10",children:[e.jsx("h1",{className:"text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-all duration-300",children:"Practice Problems on LP Formulation"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto",children:"Apply your LP formulation skills with these practice problems covering various scenarios and constraint types."})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 justify-center border-b border-gray-200 dark:border-gray-700 pb-4",children:h.map(t=>e.jsx("button",{onClick:()=>d(t.id),className:u("px-6 py-2 rounded-lg font-medium transition-all duration-300",i===t.id?"bg-emerald-600 text-white shadow-lg shadow-emerald-200 dark:shadow-emerald-900/30":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-md"),children:t.label},t.id))}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-6 justify-center",children:p.map(t=>e.jsx("button",{onClick:()=>x(t),className:u("px-3 py-1 rounded-full text-xs font-medium transition-all duration-300",l===t?"bg-emerald-600 text-white":"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"),children:t},t))}),e.jsxs("div",{className:"space-y-8",children:[i==="problems"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:m.map(t=>e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 text-sm",children:t.title}),e.jsx("span",{className:"text-xs px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded",children:t.category})]}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400 line-clamp-3",children:t.problem}),e.jsxs("div",{className:"mt-3 flex flex-wrap gap-2",children:[e.jsx("button",{onClick:()=>{s(a===t.id?null:t.id),o(null)},className:"px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-all duration-300",children:a===t.id?"Hide Solution":"Show Solution"}),e.jsx("button",{onClick:()=>{o(r===t.id?null:t.id),s(null)},className:"px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300",children:r===t.id?"Hide Hint":"Show Hint"})]}),r===t.id&&e.jsxs("div",{className:"mt-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded text-xs text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"💡 Hint:"})," ",t.hint]}),a===t.id&&e.jsx("div",{className:"mt-2 p-2 bg-green-50 dark:bg-green-900/20 rounded text-xs font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.solution})]},t.id))}),m.length===0&&e.jsx("div",{className:"text-center py-8 text-gray-600 dark:text-gray-400",children:"No problems found in this category."})]}),i==="solutions"&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center",children:"Complete Solutions"}),e.jsx("p",{className:"text-center text-gray-600 dark:text-gray-400 mb-6",children:'Click "Show Solution" on any problem above to see the complete LP formulation.'}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:c.map(t=>e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 transition-all duration-300 hover:shadow-md",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200",children:t.title}),e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:t.category}),e.jsx("div",{className:"mt-2 text-xs text-emerald-600 dark:text-emerald-400",children:e.jsx("button",{onClick:()=>{d("problems"),s(t.id),o(null)},className:"hover:underline",children:"Click to view solution →"})})]},`sol-${t.id}`))})]})}),i==="tips"&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center",children:"LP Formulation Tips & Strategies"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"📝 Step-by-Step Formulation"}),e.jsxs("ol",{className:"list-decimal list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Read carefully:"})," Understand what the problem is asking"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Identify variables:"})," What are you trying to decide?"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Identify objective:"})," Are you maximizing or minimizing?"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Find constraints:"})," What limits your decisions?"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Write mathematically:"})," Convert to equations/inequalities"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Add non-negativity:"})," All variables ≥ 0"]})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"🔑 Key Words to Identify"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"Objective:"}),e.jsxs("ul",{className:"list-disc list-inside ml-2",children:[e.jsx("li",{children:'Maximize → "profit", "revenue"'}),e.jsx("li",{children:'Minimize → "cost", "expense"'})]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"Constraints:"}),e.jsxs("ul",{className:"list-disc list-inside ml-2",children:[e.jsx("li",{children:'≤ → "at most", "available"'}),e.jsx("li",{children:'≥ → "at least", "minimum"'}),e.jsx("li",{children:'= → "exactly", "must be"'})]})]})]})]}),e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h4",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"⚠️ Common Mistakes to Avoid"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Forgetting non-negativity constraints"}),e.jsx("li",{children:"Mixing up ≤ and ≥ for constraints"}),e.jsx("li",{children:"Misidentifying the objective (max vs min)"}),e.jsx("li",{children:"Using wrong units (e.g., minutes vs hours)"}),e.jsx("li",{children:"Missing constraints from the problem statement"})]})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500",children:[e.jsx("h4",{className:"font-semibold text-purple-700 dark:text-purple-400 mb-2",children:"💡 Professional Tips"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Always write variables with units"}),e.jsx("li",{children:"Check if constraints are linear"}),e.jsx("li",{children:'Verify the formulation by "translating" it back'}),e.jsx("li",{children:"Test with a simple solution to check feasibility"}),e.jsx("li",{children:"Document your reasoning for each constraint"})]})]}),e.jsxs("div",{className:"bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4 border-l-4 border-emerald-500",children:[e.jsx("h4",{className:"font-semibold text-emerald-700 dark:text-emerald-400 mb-2",children:"✅ Formulation Checklist"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-600",children:"✓"})," Variables defined"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-600",children:"✓"})," Objective stated (Max/Min)"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-600",children:"✓"})," All constraints listed"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-600",children:"✓"})," Constraint directions correct"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-600",children:"✓"})," Non-negativity included"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-600",children:"✓"})," Units consistent"]})]})]})]})]})})]}),e.jsx("div",{className:"mt-12",children:e.jsx(y,{title:"LP Formulation Practice FAQs",questions:f})}),e.jsx("div",{className:"mt-8",children:e.jsx(b,{content:v,title:"Practice Problems on LP Formulation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Note",downloadFileName:"topic6_note.txt"})}),e.jsx("div",{className:"mt-8",children:e.jsx(g,{note:"Practice is essential for mastering LP formulation. I tell my students that formulation is like learning a new language - the more you practice, the more fluent you become. These problems cover a wide range of scenarios, from simple product mix to complex mixed constraints. I encourage students to attempt each problem independently before checking the solution. The key is not just getting the right answer, but understanding why each constraint is formulated the way it is."})})]})})};export{N as default};
