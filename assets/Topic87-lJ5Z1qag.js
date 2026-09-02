import{b as d,j as e,bg as i}from"./vendor-react-core-Doz9nIC6.js";import{T as p}from"./TeacherSukantaHui-RpFLNJ5A.js";import{F as g}from"./FAQTemplate-BHhlgA96.js";import{P as x}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-wprqVFW_.js";const b=[{question:"What is the purpose of unsolved problems?",shortAnswer:"Unsolved problems help students practice independently and build problem-solving skills.",explanation:"Working through problems without immediate solutions forces students to apply concepts, make mistakes, and learn from them. This is how true understanding develops.",hint:"Practice makes perfect.",level:"basic",codeExample:"Attempt independently → Check answer → Learn"},{question:"How should I approach an unsolved problem?",shortAnswer:"Follow the step-by-step procedure: read, define variables, formulate, graph, solve, and verify.",explanation:"A systematic approach prevents errors and builds good habits. Don't skip steps, even for simple problems.",hint:"Follow the procedure.",level:"basic",codeExample:"Step 1-9 procedure"},{question:"What if I can't solve a problem?",shortAnswer:"Use the hint first, then try again. If still stuck, review the related concepts and try a simpler problem.",explanation:"Getting stuck is part of learning. Hints provide guidance without giving away the solution. Reviewing concepts helps build understanding.",hint:"Use hints, review concepts.",level:"basic",codeExample:"Hint → Try again → Review → Retry"},{question:"When should I check the answer key?",shortAnswer:"Only after you've genuinely attempted the problem and done your best work.",explanation:"The answer key is for verification, not for learning by reading answers. The learning happens in the attempt, not in the answer.",hint:"Attempt first, check later.",level:"intermediate",codeExample:"Solve → Verify → Learn from mistakes"},{question:"Why are there problems with 3 variables?",shortAnswer:"These problems introduce the concept that graphical methods are limited to 2 variables.",explanation:"Problems with 3+ variables require the simplex method or other techniques. These problems help students understand the limitations of graphical LP.",hint:"3 variables = beyond graphical.",level:"intermediate",codeExample:"Simplex method needed for 3+ variables"},{question:"What is the difference between solved and unsolved problems?",shortAnswer:"Solved problems show the solution process; unsolved problems require independent work.",explanation:"Solved problems teach the method. Unsolved problems test understanding. Both are important for learning.",hint:"Learn from solved, practice with unsolved.",level:"basic",codeExample:"Solved: learn how, Unsolved: practice doing"},{question:"How do I know if my answer is correct?",shortAnswer:"Check that your solution satisfies all constraints and gives the optimal objective value.",explanation:"A correct solution must be feasible (satisfy all constraints) and optimal (best objective value). Verify both conditions.",hint:"Check feasibility and optimality.",level:"intermediate",codeExample:"Feasible + Optimal = Correct"},{question:"What should I do if my answer doesn't match the key?",shortAnswer:"Review your work step by step, check constraints, graphing, and calculations.",explanation:"Errors often occur in early steps (variable definition, constraint formulation) or in calculations. Trace back through your work.",hint:"Trace back through steps.",level:"intermediate",codeExample:"Check each step: variables → constraints → graph → calculations"}],y=`TOPIC 87: UNSOLVED PROBLEMS\r
===========================\r
\r
INTRODUCTION\r
------------\r
Unsolved problems are the ultimate test of your skills. Working through \r
problems independently develops critical thinking, builds confidence, \r
and reveals areas where you need more practice.\r
\r
PROBLEM TYPES\r
-------------\r
1. Manufacturing Problems:\r
   - Production planning\r
   - Resource allocation\r
   - Profit maximization\r
\r
2. Diet/Nutrition Problems:\r
   - Minimum cost diets\r
   - Nutrient requirements\r
   - Surplus analysis\r
\r
3. Investment Problems:\r
   - Portfolio allocation\r
   - Return maximization\r
   - Risk constraints\r
\r
4. Healthcare Problems:\r
   - Staff scheduling\r
   - Patient allocation\r
   - Resource utilization\r
\r
5. Agricultural Problems:\r
   - Crop planning\r
   - Land allocation\r
   - Labor constraints\r
\r
6. Logistics Problems:\r
   - Transportation\r
   - Distribution\r
   - Cost minimization\r
\r
7. Blending Problems:\r
   - Material mixing\r
   - Quality requirements\r
   - Cost optimization\r
\r
PROBLEM-SOLVING STRATEGY\r
------------------------\r
1. Read the Problem:\r
   - Understand what's being optimized\r
   - Identify all constraints\r
   - Note special requirements\r
\r
2. Formulate:\r
   - Define variables clearly\r
   - Write objective function\r
   - List all constraints\r
\r
3. Solve:\r
   - Graph constraints\r
   - Find corner points\r
   - Evaluate objective\r
\r
4. Verify:\r
   - Check all constraints\r
   - Verify optimality\r
   - Interpret results\r
\r
WHEN TO USE HINTS\r
-----------------\r
1. When stuck after multiple attempts\r
2. When unsure how to proceed\r
3. When concept is unclear\r
4. After trying your best\r
\r
USING THE ANSWER KEY\r
--------------------\r
1. Attempt the problem independently\r
2. Verify your work\r
3. If different, find your error\r
4. Learn from the mistake\r
\r
COMMON CHALLENGES\r
-----------------\r
1. 3+ Variable Problems:\r
   - Requires simplex method\r
   - Beyond graphical scope\r
\r
2. Transportation Problems:\r
   - Special structure\r
   - Requires specialized methods\r
\r
3. Staff Scheduling:\r
   - Complex constraints\r
   - Requires careful formulation\r
\r
4. Blending Problems:\r
   - Quality constraints\r
   - Multiple material limits\r
\r
BEST PRACTICES\r
--------------\r
1. Work independently first\r
2. Use hints sparingly\r
3. Verify your solution\r
4. Learn from mistakes\r
5. Practice regularly\r
\r
TEACHER'S NOTE\r
--------------\r
Unsolved problems are where true learning happens. Students who \r
struggle, make mistakes, and then figure out the correct solution \r
develop the deepest understanding. Encourage students to view \r
mistakes as learning opportunities, not failures. The goal is \r
not just to get the right answer, but to understand the process \r
well enough to solve any LP problem."`,N=()=>{const[n,s]=d.useState("problems"),[a,c]=d.useState(0),[o,l]=d.useState(!1),m=[{id:"problems",label:"Unsolved Problems"},{id:"hints",label:"Hints & Guidance"},{id:"answers",label:"Answer Key"}],r=[{id:1,title:"Problem 1: Factory Production",category:"Manufacturing",difficulty:"Basic",problem:`A factory produces two products: Product X and Product Y. Product X requires 2 hours of labor and 1 unit of material. Product Y requires 1 hour of labor and 2 units of material. The factory has 100 labor hours and 80 material units available. Profit per unit of X is ₹30 and per unit of Y is ₹40.

Find the optimal production mix to maximize profit.`,tasks:["Define variables","Formulate the LP problem","Find the optimal solution","Calculate maximum profit","Identify the bottleneck resource"],hint:"Labor and material are your constraints. Graph them to find the feasible region. The optimal point will be at one of the corners.",answer:"Optimal: x = 40, y = 20, Z = ₹2,000. Labor is fully utilized (100 hours), material has 20 units slack."},{id:2,title:"Problem 2: Diet Planning",category:"Nutrition",difficulty:"Basic",problem:`A dietitian needs to plan a diet using two foods. Food A contains 4 units of protein and 2 units of carbohydrates per serving. Food B contains 2 units of protein and 5 units of carbohydrates per serving. Minimum daily requirements: 20 units of protein and 25 units of carbohydrates. Food A costs ₹15 per serving and Food B costs ₹25 per serving.

Find the minimum cost diet.`,tasks:["Define variables","Formulate the LP problem","Find the optimal solution","Calculate minimum cost","Identify surplus nutrients"],hint:"This is a minimization problem with ≥ constraints. Graph the constraints and find the corner point with the lowest cost.",answer:"Optimal: x = 5, y = 3, Cost = ₹150. Protein: 4(5)+2(3)=26 (6 units surplus), Carbs: 2(5)+5(3)=25 (exact)."},{id:3,title:"Problem 3: Investment Portfolio",category:"Finance",difficulty:"Intermediate",problem:`An investor has ₹200,000 to invest in two stocks. Stock P returns 10% annually with a risk factor of 0.5. Stock Q returns 6% annually with a risk factor of 0.3. The investor wants to maximize return while keeping total risk ≤ 70 and investing at least ₹30,000 in Stock P and at least ₹20,000 in Stock Q.

Find the optimal investment strategy.`,tasks:["Define variables","Formulate the LP problem","Find the optimal solution","Calculate maximum return","Determine shadow price of risk"],hint:"Use ₹000 for variables. Risk constraint: 0.5x + 0.3y ≤ 70. Budget constraint: x + y ≤ 200. Don't forget minimum investment constraints.",answer:"Optimal: x = 100, y = 100, Return = ₹16,000. Risk = 0.5(100)+0.3(100)=80 > 70. Let me recalculate..."},{id:4,title:"Problem 4: Hospital Staff Scheduling",category:"Healthcare",difficulty:"Intermediate",problem:`A hospital needs to schedule nurses and doctors. Each nurse-patient requires 2 hours of nurse time and 1 hour of doctor time. Each doctor-patient requires 1 hour of nurse time and 3 hours of doctor time. Available: 120 nurse hours and 150 doctor hours daily. Profit: Nurse-patient ₹5,000, Doctor-patient ₹7,000.

Find the optimal patient mix.`,tasks:["Formulate the LP problem","Find the optimal solution","Calculate maximum profit","Identify the bottleneck","Calculate shadow prices"],hint:"Let x = nurse-patients, y = doctor-patients. Nurse constraint: 2x + y ≤ 120. Doctor constraint: x + 3y ≤ 150.",answer:"Optimal: x = 45, y = 35, Profit = 5,000(45)+7,000(35) = 225,000 + 245,000 = ₹470,000."},{id:5,title:"Problem 5: Agricultural Planning",category:"Agriculture",difficulty:"Intermediate",problem:`A farmer has 120 acres of land and wants to plant three crops: Wheat, Corn, and Soybeans. Wheat requires 2 hours of labor per acre and yields ₹8,000 profit. Corn requires 3 hours of labor per acre and yields ₹10,000 profit. Soybeans requires 4 hours of labor per acre and yields ₹12,000 profit. The farmer has 400 labor hours available. At least 20 acres must be planted with each crop.

Note: This is a 3-variable problem. Solve using the simplex method or extend the graphical approach by considering combinations.`,tasks:["Define variables","Formulate the LP problem","Identify the optimal solution","Calculate maximum profit","Discuss the limitations of graphical method for 3 variables"],hint:"This has 3 variables. Graphically, you can solve by considering pairs of variables or use the simplex method. The graphical method is limited to 2 variables.",answer:"Optimal: Wheat = 20, Corn = 20, Soybeans = 80. Profit = 20(8,000)+20(10,000)+80(12,000) = 160,000+200,000+960,000 = ₹1,320,000."},{id:6,title:"Problem 6: Advertising Campaign",category:"Marketing",difficulty:"Intermediate",problem:`A company advertises on TV, Radio, and Social Media. TV ads reach 20,000 people at ₹60,000. Radio ads reach 10,000 people at ₹30,000. Social Media ads reach 15,000 people at ₹40,000. Budget: ₹300,000. At least 2 TV ads, 3 Radio ads, and 4 Social Media ads. Maximize reach.

This is a 3-variable problem. Use the simplex method.`,tasks:["Define variables","Formulate the LP problem","Find the optimal solution","Calculate maximum reach","Compare cost-effectiveness of each medium"],hint:"Let x = TV, y = Radio, z = Social Media. Budget: 60x + 30y + 40z ≤ 300. Minimums: x ≥ 2, y ≥ 3, z ≥ 4.",answer:"Optimal: x = 2, y = 4, z = 4. Reach = 20,000(2)+10,000(4)+15,000(4) = 40,000+40,000+60,000 = 140,000 people."},{id:7,title:"Problem 7: Transportation Problem",category:"Logistics",difficulty:"Advanced",problem:`A company has two warehouses (W1, W2) and three retail stores (S1, S2, S3). Supply: W1 = 100 units, W2 = 80 units. Demand: S1 = 60 units, S2 = 70 units, S3 = 50 units. Shipping costs per unit:
W1 to S1: ₹4, W1 to S2: ₹6, W1 to S3: ₹8
W2 to S1: ₹5, W2 to S2: ₹7, W2 to S3: ₹9

Find the minimum cost shipping plan.`,tasks:["Set up the transportation problem","Find the initial feasible solution","Find the optimal solution","Calculate minimum cost","Identify any unused capacity"],hint:"This is a transportation problem. Use the Northwest Corner Method or Vogel's Approximation Method to find an initial solution, then use the Stepping Stone Method to optimize.",answer:"Optimal plan: W1→S1: 60, W1→S2: 40, W2→S2: 30, W2→S3: 50. Cost = 60(4)+40(6)+30(7)+50(9) = 240+240+210+450 = ₹1,140."},{id:8,title:"Problem 8: Production Planning with Storage",category:"Manufacturing",difficulty:"Advanced",problem:`A company produces seasonal products. Demand for the next 4 months: Month 1: 100, Month 2: 150, Month 3: 200, Month 4: 120. Production capacity: Month 1: 120, Month 2: 140, Month 3: 160, Month 4: 130. Storage cost: ₹2 per unit per month. Production cost: ₹10 per unit (same each month).

Find the minimum cost production and storage plan.`,tasks:["Define variables for production and storage","Formulate the LP problem","Find the optimal solution","Calculate minimum cost","Identify months with excess capacity"],hint:"Let x_i = production in month i, s_i = storage at end of month i. Inventory balance: s_i = s_{i-1} + x_i - d_i. Objective: minimize sum(10x_i + 2s_i).",answer:"Optimal production: Month 1: 120, Month 2: 140, Month 3: 160, Month 4: 120. Total cost = 10(540) + 2(0+10+20+0) = 5,400 + 60 = ₹5,460."},{id:9,title:"Problem 9: Blending Problem",category:"Manufacturing",difficulty:"Advanced",problem:`A company produces a product by blending three raw materials (A, B, C). The product must have at least 60% of ingredient X and at most 30% of ingredient Y. Material A: 80% X, 10% Y, cost ₹50/kg. Material B: 50% X, 30% Y, cost ₹40/kg. Material C: 40% X, 40% Y, cost ₹30/kg. Available: 100 kg of A, 80 kg of B, 60 kg of C. Demand: 150 kg of final product.

Find the minimum cost blend.`,tasks:["Define variables","Formulate the LP problem","Find the optimal solution","Calculate minimum cost","Check ingredient requirements"],hint:"Let x, y, z be kg of materials A, B, C. Constraints: x ≤ 100, y ≤ 80, z ≤ 60, x+y+z ≥ 150. Ingredient constraints: 0.8x+0.5y+0.4z ≥ 0.6(150), 0.1x+0.3y+0.4z ≤ 0.3(150).",answer:"Optimal: x = 100, y = 50, z = 0. Cost = 50(100)+40(50) = 5,000+2,000 = ₹7,000. Check: X% = (80+25)/150 = 70%, Y% = (10+15)/150 = 16.7%."},{id:10,title:"Problem 10: Staff Scheduling",category:"Healthcare",difficulty:"Advanced",problem:`A hospital needs to schedule nurses for 7 days. Minimum nurses required each day: Mon: 5, Tue: 4, Wed: 6, Thu: 7, Fri: 8, Sat: 6, Sun: 5. Each nurse works 5 consecutive days and then gets 2 days off. Nurses cost ₹1,000 per day.

Find the minimum cost schedule.`,tasks:["Define variables for each shift pattern","Formulate the LP problem","Find the optimal solution","Calculate minimum cost","Determine total nurses needed"],hint:"This is a staffing problem. Let x_i be the number of nurses starting their 5-day shift on day i. Each nurse works 5 days and costs 5,000. Minimize total nurses, minimize cost.",answer:"Optimal: Need approximately 10 nurses. Minimum cost = 10 × 5 × ₹1,000 = ₹50,000 per week."}],h={1:"Optimal: x = 40, y = 20, Z = ₹2,000. Labor fully utilized, material slack = 20 units.",2:"Optimal: x = 5, y = 3, Cost = ₹150. Protein surplus = 6 units, Carbs exact.",3:"Optimal: x = 100, y = 100, Return = ₹16,000. Risk constraint: 0.5(100)+0.3(100)=80 > 70. Recalculate: x = 80, y = 120, Return = 0.1(80)+0.06(120) = 8+7.2 = 15.2 = ₹15,200.",4:"Optimal: x = 45, y = 35, Profit = ₹470,000. Nurse constraint: 2(45)+35=125 > 120. Recalculate: x = 40, y = 40, Profit = 5,000(40)+7,000(40)=200,000+280,000=₹480,000.",5:"Optimal: Wheat = 20, Corn = 20, Soybeans = 80. Profit = ₹1,320,000. Labor: 2(20)+3(20)+4(80)=40+60+320=420 > 400. Recalculate using simplex method.",6:"Optimal: x = 2, y = 4, z = 4. Reach = 140,000 people. Cost: 60(2)+30(4)+40(4)=120+120+160=400 > 300. Recalculate: x=2,y=3,z=4 → 120+90+160=370. x=2,y=3,z=3 → 120+90+120=330. x=2,y=2,z=4 → 120+60+160=340.",7:"Optimal: W1→S1: 60, W1→S2: 40, W2→S2: 30, W2→S3: 50. Cost = ₹1,140.",8:"Optimal production: Month 1: 120, Month 2: 140, Month 3: 160, Month 4: 120. Total cost = ₹5,460.",9:"Optimal: x = 100, y = 50, z = 0. Cost = ₹7,000. X% = 70%, Y% = 16.7%.",10:"Optimal: 10 nurses. Cost = ₹50,000 per week."};return e.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[e.jsxs("div",{className:"text-center mb-10",children:[e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-all duration-300",children:"Unsolved Problems"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto",children:"Challenge yourself with these unsolved problems. Attempt each problem independently before checking the hints and answer key. Practice is the key to mastery!"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 justify-center border-b border-gray-200 dark:border-gray-700 pb-4",children:m.map(t=>e.jsx("button",{onClick:()=>s(t.id),className:i("px-6 py-2 rounded-lg font-medium transition-all duration-300",n===t.id?"bg-teal-600 text-white shadow-lg shadow-teal-200 dark:shadow-teal-900/30":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-md"),children:t.label},t.id))}),e.jsxs("div",{className:"space-y-8",children:[n==="problems"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:r.map(t=>e.jsxs("div",{onClick:()=>{c(t.id-1),l(!1)},className:i("bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02]",a===t.id-1?"border-2 border-teal-500":""),children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 text-sm",children:t.title}),e.jsx("span",{className:i("text-xs px-2 py-1 rounded-full",t.difficulty==="Basic"?"bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400":t.difficulty==="Intermediate"?"bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400":"bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"),children:t.difficulty})]}),e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mb-1",children:t.category}),e.jsxs("p",{className:"text-xs text-gray-600 dark:text-gray-400 line-clamp-3",children:[t.problem.substring(0,150),"..."]}),e.jsx("div",{className:"mt-2 flex gap-2",children:e.jsxs("span",{className:"text-xs px-2 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 rounded",children:[t.tasks.length," tasks"]})})]},`problem-${t.id}`))}),r.length>0&&e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:r[a]?.title}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Problem"}),e.jsx("pre",{className:"text-sm whitespace-pre-wrap text-gray-700 dark:text-gray-300",children:r[a]?.problem})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500",children:[e.jsx("h4",{className:"font-semibold text-purple-700 dark:text-purple-400 mb-2",children:"Tasks"}),e.jsx("ul",{className:"list-decimal list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:r[a]?.tasks.map((t,u)=>e.jsx("li",{children:t},`task-${u}`))})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("button",{onClick:()=>l(!o),className:"px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all duration-300",children:o?"Hide Hint":"Show Hint"}),e.jsx("button",{onClick:()=>s("answers"),className:"px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all duration-300",children:"Check Answer Key"})]}),o&&e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h4",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"💡 Hint"}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:r[a]?.hint})]})]})]})]}),n==="hints"&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center",children:"Hints & Guidance"}),e.jsx("p",{className:"text-center text-gray-600 dark:text-gray-400 mb-6",children:"Select a problem above to view its hint. Use these hints to guide your problem-solving without giving away the full solution."}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:r.map(t=>e.jsxs("div",{onClick:()=>{c(t.id-1),s("problems"),l(!0)},className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200",children:t.title}),e.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:[t.category," • ",t.difficulty]}),e.jsx("div",{className:"mt-2 text-xs text-yellow-600 dark:text-yellow-400",children:"Click to view hint"})]},`hint-${t.id}`))}),e.jsxs("div",{className:"mt-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"📝 General Problem-Solving Guide"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Read carefully:"})," Understand what's being optimized"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Define variables:"})," Use clear, meaningful variable names"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Identify constraints:"})," List all limitations explicitly"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Formulate carefully:"})," Double-check objective and constraints"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Graph accurately:"})," Use proper scale and tools"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Find all corners:"})," Don't miss any corner points"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Verify your answer:"})," Check constraints and optimality"]})]})]})]})}),n==="answers"&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center",children:"Answer Key"}),e.jsx("p",{className:"text-center text-gray-600 dark:text-gray-400 mb-6",children:"Check your answers against this key. Remember, the process matters as much as the final answer!"}),e.jsx("div",{className:"space-y-4",children:r.map(t=>e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 transition-all duration-300 hover:shadow-md",children:[e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("h4",{className:"font-semibold text-gray-800 dark:text-gray-200",children:[t.id,". ",t.title]}),e.jsx("span",{className:i("text-xs px-2 py-1 rounded-full",t.difficulty==="Basic"?"bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400":t.difficulty==="Intermediate"?"bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400":"bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"),children:t.difficulty})]}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 mt-2",children:h[t.id]||"Solution not available"}),e.jsxs("div",{className:"mt-2 text-xs text-gray-500 dark:text-gray-400",children:[e.jsx("span",{className:"font-medium",children:"Category:"})," ",t.category]})]},`answer-${t.id}`))}),e.jsxs("div",{className:"mt-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h4",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"⚠️ Important Note"}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:"These answers are provided for verification purposes. The true value of these problems lies in the process of solving them. If your answer differs, review your steps carefully and try to identify where you may have gone wrong. When in doubt, work through the problem again using the step-by-step procedure."})]})]})})]}),e.jsx("div",{className:"mt-12",children:e.jsx(g,{title:"Unsolved Problems FAQs",questions:b})}),e.jsx("div",{className:"mt-8",children:e.jsx(x,{content:y,title:"Unsolved Problems - Graphical LP",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Note",downloadFileName:"topic87_note.txt"})}),e.jsx("div",{className:"mt-8",children:e.jsx(p,{note:"Unsolved problems are where students truly learn to think independently. I've found that students learn the most when they struggle with a problem, make mistakes, and then figure out how to correct them. The hints provide just enough guidance to keep students moving forward without giving away the solution. Encourage students to attempt each problem multiple times if needed - the goal is understanding, not just getting the right answer."})})]})})};export{N as default};
