import{b as i,j as e,bg as p}from"./vendor-react-core-Doz9nIC6.js";import{T as b}from"./TeacherSukantaHui-CyIG3xbg.js";import{F as y}from"./FAQTemplate-CkSqDH4B.js";import{P as v}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-CIaKtAt4.js";const f=[{question:"What is a resource allocation problem in LP?",shortAnswer:"A resource allocation problem involves distributing limited resources among competing activities to achieve the best outcome.",explanation:"Unlike product-mix problems that focus on production quantities, resource allocation problems focus on how to best use available resources like money, time, personnel, or materials across different activities or departments.",hint:"Think about distributing limited resources optimally.",level:"basic",codeExample:`Maximize Z = 8x + 6y
Subject to: x + y ≤ 500, x ≥ 200, y ≥ 100`},{question:"How is a resource allocation problem different from a product-mix problem?",shortAnswer:"Product-mix focuses on production quantities; resource allocation focuses on distributing resources across activities.",explanation:"In product-mix, you decide how many of each product to make. In resource allocation, you decide how to distribute limited resources (budget, time, personnel) among competing uses.",hint:"Products vs. resources.",level:"intermediate",codeExample:`Product-mix: how many chairs and tables
Resource allocation: how to allocate budget to departments`},{question:"What are the key components of a resource allocation LP problem?",shortAnswer:"Decision variables (allocations), objective function, resource constraints, and allocation requirements.",explanation:"Decision variables represent amounts allocated to each activity. The objective is typically maximization or minimization. Resource constraints limit total allocations. Requirements may include minimum or maximum allocations.",hint:"Variables, objective, constraints, requirements.",level:"basic",codeExample:"Variables: x, y; Objective: Max Z; Constraints: resource limits; Requirements: min/max allocations"},{question:"How do you formulate the objective function in a resource allocation problem?",shortAnswer:"Sum the value or benefit from each activity multiplied by the amount allocated to that activity.",explanation:"Each unit of allocation to an activity produces a certain return. The objective sums these returns across all activities.",hint:"Sum of benefits from all activities.",level:"basic",codeExample:"Maximize Z = 8x + 6y (where x and y are allocations)"},{question:"What are resource constraints in resource allocation problems?",shortAnswer:"Resource constraints limit how much of each resource can be allocated across activities.",explanation:"Each resource has a limited amount available. The total allocation across activities cannot exceed this limit.",hint:"Limited resources bound allocation.",level:"basic",codeExample:"Budget: x + y ≤ 500, Time: 4x + 6y ≤ 240"},{question:"Why are minimum allocation requirements important?",shortAnswer:"Minimum requirements ensure critical activities receive adequate resources.",explanation:"Some activities may need a minimum allocation to remain operational, meet contracts, or maintain service levels. These requirements are constraints in the LP formulation.",hint:"Ensuring critical activities get resources.",level:"intermediate",codeExample:"x ≥ 200 (minimum budget for department X)"},{question:"What is the difference between resource allocation and resource scheduling?",shortAnswer:"Resource allocation decides how much to allocate; scheduling decides when to use allocated resources.",explanation:"Allocation determines quantities assigned to different activities. Scheduling determines the timing of resource usage within those allocations.",hint:"How much vs. when.",level:"intermediate",codeExample:`Allocation: 100 hours to project A
Scheduling: when those 100 hours are used`},{question:"How do you handle multiple resources in an allocation problem?",shortAnswer:"Each resource becomes a separate constraint in the LP formulation.",explanation:"For each type of resource (budget, time, personnel, etc.), create a constraint that sums usage across all activities and limits it to the available amount.",hint:"One constraint per resource type.",level:"intermediate",codeExample:"Budget: x + y ≤ 500, Time: 4x + 6y ≤ 240, Personnel: 2x + 3y ≤ 100"},{question:"What is the role of capacity constraints in resource allocation?",shortAnswer:"Capacity constraints limit how much of a resource can be allocated to a specific activity.",explanation:"While resource constraints limit total usage across all activities, capacity constraints limit usage by individual activities or departments.",hint:"Limits per activity.",level:"intermediate",codeExample:"x ≤ 100 (department X capacity), y ≤ 120 (department Y capacity)"},{question:"What is a shadow price in resource allocation problems?",shortAnswer:"Shadow price indicates how much the objective would improve with one more unit of a resource.",explanation:"For binding resource constraints, the shadow price tells you the marginal value of additional resources. This helps in investment and resource acquisition decisions.",hint:"Value of additional resources.",level:"advanced",codeExample:"Shadow price = ₹2 per hour means each extra hour adds ₹2 to value"},{question:"How do you interpret slack in a resource allocation problem?",shortAnswer:"Slack is the amount of a resource that remains unused at the optimal allocation.",explanation:"Positive slack indicates the resource is not a constraint and could be reduced or redirected without affecting the optimum.",hint:"Unused resource capacity.",level:"intermediate",codeExample:"If 500 available and 480 used, slack = 20 units"},{question:"What is a binding constraint in resource allocation?",shortAnswer:"A binding constraint is a resource that is fully utilized at the optimal allocation.",explanation:"When slack = 0 for a resource, it's binding. This resource limits the optimal solution and has a positive shadow price.",hint:"Fully utilized resource.",level:"intermediate",codeExample:"If budget: x + y = 500 at optimal, budget is binding"},{question:"How do you handle allocation problems with multiple objectives?",shortAnswer:"Multiple objectives can be handled through goal programming, weighted objectives, or trade-off analysis.",explanation:"Real-world problems often have multiple objectives. Goal programming minimizes deviations from targets. Weighted objectives combine multiple goals into one objective.",hint:"Balancing multiple goals.",level:"advanced",codeExample:"Maximize profit and minimize environmental impact"},{question:"What are common applications of resource allocation in business?",shortAnswer:"Budget allocation, staff scheduling, investment portfolio, and project management.",explanation:"Businesses constantly allocate resources: money across departments, staff to projects, investment across assets, and time across activities.",hint:"Business resource decisions.",level:"basic",codeExample:`Budget allocation: how to spend ₹100,000
Staff scheduling: who works when`},{question:"How do you handle uncertainty in resource allocation problems?",shortAnswer:"Use sensitivity analysis, scenario analysis, or stochastic programming.",explanation:"Resource availability and returns may be uncertain. Sensitivity analysis examines how changes affect the solution. Scenario analysis explores different possible futures.",hint:"Planning for uncertainty.",level:"advanced",codeExample:"Best-case, worst-case, and most-likely scenarios"},{question:"What is the difference between maximizing and minimizing in resource allocation?",shortAnswer:"Maximization seeks the best outcome (profit, value); minimization seeks the least cost or resource use.",explanation:"Resource allocation problems can aim to maximize returns, benefits, or value, or minimize costs, time, or resource usage.",hint:"Best vs. least.",level:"basic",codeExample:"Maximize profit, minimize cost"},{question:"How do you formulate a resource allocation problem with fixed costs?",shortAnswer:"Fixed costs require binary variables or additional constraints to model.",explanation:"If an activity has a fixed cost regardless of allocation level, it needs to be modeled using binary variables (0/1) to decide whether to undertake the activity.",hint:"Fixed costs need special handling.",level:"advanced",codeExample:"Fixed cost: if x > 0 then cost = 1000, else cost = 0"},{question:"What is the role of human judgment in resource allocation?",shortAnswer:"LP provides optimal recommendations; human judgment considers qualitative factors not in the model.",explanation:"LP models may not capture all qualitative factors like morale, stakeholder preferences, or organizational culture. Human judgment is essential for final decisions.",hint:"Math + Judgment.",level:"intermediate",codeExample:"LP suggests allocation; management considers employee satisfaction"},{question:"How do you allocate resources among multiple projects?",shortAnswer:"Use a resource allocation model with projects as activities and resources as constraints.",explanation:"Each project consumes resources and produces returns. The model allocates resources across projects to maximize total return while respecting resource limits.",hint:"Projects compete for resources.",level:"intermediate",codeExample:"Projects A, B, C competing for budget and personnel"},{question:"What is the difference between resource allocation and resource leveling?",shortAnswer:"Resource allocation decides how much; resource leveling smooths resource usage over time.",explanation:"Allocation determines quantities assigned to activities. Leveling adjusts the timing of activities to avoid peaks and valleys in resource usage.",hint:"How much vs. when.",level:"advanced",codeExample:`Allocation: 100 hours to project
Leveling: spread those 100 hours evenly`},{question:"How do you handle priority constraints in resource allocation?",shortAnswer:"Add priority constraints that ensure high-priority activities get resources first.",explanation:"Some activities have higher priority than others. Priority constraints ensure these activities receive sufficient resources before others.",hint:"High priority gets resources first.",level:"advanced",codeExample:"x ≥ y (Activity X has priority over Activity Y)"},{question:"What is the economic interpretation of resource allocation LP?",shortAnswer:"It represents the optimal distribution of scarce resources to maximize value.",explanation:"Resources are scarce and have opportunity costs. LP finds the allocation that creates the most value from limited resources.",hint:"Scarce resources, maximum value.",level:"intermediate",codeExample:"Allocate budget where it creates most value"},{question:"How do you allocate resources across multiple time periods?",shortAnswer:"Use a multi-period LP model with time-indexed variables and constraints.",explanation:"Resources may be allocated across different time periods. Each period has its own resource availability and constraints.",hint:"Allocation over time.",level:"advanced",codeExample:"Budget allocation across months: x₁ + x₂ + ... ≤ total"},{question:"What is the role of divisibility in resource allocation?",shortAnswer:"Divisibility determines whether resources can be split into fractional units.",explanation:"Some resources (money, time) are divisible; others (people, equipment) are indivisible and require integer programming.",hint:"Can resources be split?",level:"intermediate",codeExample:"Money is divisible; people are indivisible"}],j=`TOPIC 1: RESOURCE ALLOCATION PROBLEMS\r
=====================================\r
\r
INTRODUCTION\r
------------\r
Resource allocation problems involve distributing limited resources among \r
competing activities to achieve the best overall outcome. This is a \r
fundamental application of linear programming in business and government.\r
\r
WHAT IS RESOURCE ALLOCATION?\r
---------------------------\r
Resource allocation is the process of assigning available resources to \r
various activities or departments to maximize benefits or minimize costs.\r
\r
KEY COMPONENTS\r
--------------\r
1. Resources to Allocate:\r
   - Money (budgets, funds)\r
   - Time (staff hours, machine hours)\r
   - Personnel (employees, staff)\r
   - Materials (supplies, equipment)\r
\r
2. Activities/Departments:\r
   - Competing for resources\r
   - Each has different resource needs\r
   - Each produces different returns\r
\r
3. Constraints:\r
   - Resource availability\r
   - Minimum allocation requirements\r
   - Maximum allocation limits\r
\r
GENERAL FORM\r
------------\r
Maximize (or Minimize) Z = c₁x₁ + c₂x₂ + ... + cₙxₙ\r
\r
Subject to:\r
a₁₁x₁ + a₁₂x₂ + ... + a₁ₙxₙ ≤ b₁ (Resource 1)\r
a₂₁x₁ + a₂₂x₂ + ... + a₂ₙxₙ ≤ b₂ (Resource 2)\r
...\r
x₁ ≥ min₁, x₂ ≥ min₂, ... (Minimum requirements)\r
x₁ ≤ max₁, x₂ ≤ max₂, ... (Maximum limits)\r
x₁, x₂, ..., xₙ ≥ 0\r
\r
EXAMPLE\r
-------\r
Problem: Allocate ₹500,000 between Production (x) and Marketing (y).\r
Production yields 8 units profit per ₹1,000; Marketing yields 6 units.\r
Minimum: Production ₹200,000, Marketing ₹100,000.\r
\r
Solution:\r
Let x = Production allocation (₹000), y = Marketing allocation (₹000)\r
Maximize Z = 8x + 6y\r
Subject to:\r
x + y ≤ 500 (Budget)\r
x ≥ 200 (Production minimum)\r
y ≥ 100 (Marketing minimum)\r
x, y ≥ 0\r
\r
KEY DIFFERENCES FROM PRODUCT-MIX\r
--------------------------------\r
Product-Mix Problems:\r
- Variables = product quantities\r
- Goal = max profit\r
- Constraints = resources\r
\r
Resource Allocation Problems:\r
- Variables = resource allocations\r
- Goal = max value/efficiency\r
- Constraints = resource limits + allocation requirements\r
\r
TYPES OF CONSTRAINTS\r
--------------------\r
1. Resource Constraints:\r
   - Limited availability\r
   - Sum of allocations ≤ available\r
\r
2. Minimum Requirements:\r
   - Critical activities need minimum allocation\r
   - x ≥ min_x\r
\r
3. Maximum Limits:\r
   - Capacity or policy limits\r
   - x ≤ max_x\r
\r
BEST PRACTICES\r
--------------\r
1. Identify all resources clearly\r
2. Include all relevant requirements\r
3. Check for conflicting constraints\r
4. Perform sensitivity analysis\r
5. Consider qualitative factors\r
\r
COMMON MISTAKES\r
---------------\r
1. Forgetting minimum allocation requirements\r
2. Ignoring capacity constraints\r
3. Overlooking non-negativity\r
4. Using inconsistent units\r
\r
TEACHER'S NOTE\r
--------------\r
Resource allocation problems help students understand how to make \r
optimal decisions under scarcity. These problems are valuable in \r
developing analytical thinking and decision-making skills."`,E=()=>{const[a,l]=i.useState("concept"),[r,c]=i.useState({}),[n,d]=i.useState(null),[s,m]=i.useState(null),u=[{id:"concept",label:"Concept"},{id:"examples",label:"Examples"},{id:"practice",label:"Practice"}],x=[{id:1,title:"Example 1: Budget Allocation",problem:"A company has ₹500,000 to allocate between two departments: Production (x) and Marketing (y). Production generates 8 units of profit per ₹1,000, while Marketing generates 6 units per ₹1,000. At least ₹200,000 must go to Production and at least ₹100,000 to Marketing.",solution:`Let x = amount allocated to Production (₹000), y = amount allocated to Marketing (₹000)
Maximize Z = 8x + 6y
Subject to:
x + y ≤ 500 (Budget)
x ≥ 200 (Production minimum)
y ≥ 100 (Marketing minimum)
x, y ≥ 0`,detailedSolution:`Step 1: Define variables
x = Production allocation (₹000), y = Marketing allocation (₹000)

Step 2: Formulate objective function
Production generates 8 units per ₹1,000: 8x
Marketing generates 6 units per ₹1,000: 6y
Maximize Z = 8x + 6y

Step 3: Formulate constraints
Budget: x + y ≤ 500
Production minimum: x ≥ 200
Marketing minimum: y ≥ 100
Non-negativity: x ≥ 0, y ≥ 0

Step 4: Solve graphically
Corner points: (200,100), (400,100), (200,300)
Z(200,100) = 8(200) + 6(100) = 1600 + 600 = 2200
Z(400,100) = 8(400) + 6(100) = 3200 + 600 = 3800
Z(200,300) = 8(200) + 6(300) = 1600 + 1800 = 3400

Step 5: Optimal solution
Maximum value = 3800 at (400,100)
Allocate ₹400,000 to Production and ₹100,000 to Marketing.`},{id:2,title:"Example 2: Staff Assignment",problem:"A consulting firm has 240 hours available to assign between two clients. Client A requires 4 hours per unit and generates ₹5,000 profit. Client B requires 6 hours per unit and generates ₹7,000 profit. At least 20 units of Client A and 15 units of Client B must be served.",solution:`Let x = units of Client A, y = units of Client B
Maximize Z = 5000x + 7000y
Subject to:
4x + 6y ≤ 240 (Total hours)
x ≥ 20 (Client A minimum)
y ≥ 15 (Client B minimum)
x, y ≥ 0`,detailedSolution:`Step 1: Define variables
x = units of Client A, y = units of Client B

Step 2: Formulate objective function
Profit from Client A = 5000x, Profit from Client B = 7000y
Maximize Z = 5000x + 7000y

Step 3: Formulate constraints
Total hours: 4x + 6y ≤ 240
Client A minimum: x ≥ 20
Client B minimum: y ≥ 15
Non-negativity: x ≥ 0, y ≥ 0

Step 4: Solve graphically
Corner points: (20,15), (37.5,15), (20,26.67)
Z(20,15) = 5000(20) + 7000(15) = 100000 + 105000 = 205000
Z(37.5,15) = 5000(37.5) + 7000(15) = 187500 + 105000 = 292500
Z(20,26.67) = 5000(20) + 7000(26.67) = 100000 + 186690 = 286690

Step 5: Optimal solution
Maximum profit = ₹292,500 at (37.5, 15)
Serve 37.5 units of Client A and 15 units of Client B.`},{id:3,title:"Example 3: Advertising Budget",problem:"A company has ₹100,000 for advertising on TV and Radio. TV ads cost ₹5,000 each and reach 10,000 people. Radio ads cost ₹2,000 each and reach 5,000 people. At least 5 TV ads and 10 Radio ads must be placed.",solution:`Let x = number of TV ads, y = number of Radio ads
Maximize Z = 10x + 5y (Reach in 000)
Subject to:
5x + 2y ≤ 100 (Budget)
x ≥ 5 (TV minimum)
y ≥ 10 (Radio minimum)
x, y ≥ 0`,detailedSolution:`Step 1: Define variables
x = number of TV ads, y = number of Radio ads

Step 2: Formulate objective function
TV reach = 10,000 per ad = 10x
Radio reach = 5,000 per ad = 5y
Maximize Z = 10x + 5y (Reach in 000)

Step 3: Formulate constraints
Budget: 5x + 2y ≤ 100 (₹000)
TV minimum: x ≥ 5
Radio minimum: y ≥ 10
Non-negativity: x ≥ 0, y ≥ 0

Step 4: Solve graphically
Corner points: (5,10), (16,10), (5,37.5)
Z(5,10) = 10(5) + 5(10) = 50 + 50 = 100
Z(16,10) = 10(16) + 5(10) = 160 + 50 = 210
Z(5,37.5) = 10(5) + 5(37.5) = 50 + 187.5 = 237.5

Step 5: Optimal solution
Maximum reach = 237,500 people at (5, 37.5)
Place 5 TV ads and 37.5 Radio ads (round to 38).`},{id:4,title:"Example 4: Resource Distribution",problem:"A school district has ₹200,000 to allocate between two schools. School A requires ₹8,000 per student and has capacity for 100 students. School B requires ₹6,000 per student and has capacity for 120 students. At least 60 students must be served at each school.",solution:`Let x = students at School A, y = students at School B
Maximize Z = x + y (Total students)
Subject to:
8x + 6y ≤ 200 (Budget)
x ≤ 100 (School A capacity)
y ≤ 120 (School B capacity)
x ≥ 60 (School A minimum)
y ≥ 60 (School B minimum)
x, y ≥ 0`,detailedSolution:`Step 1: Define variables
x = students at School A, y = students at School B

Step 2: Formulate objective function
Maximize total students: Z = x + y

Step 3: Formulate constraints
Budget: 8x + 6y ≤ 200 (₹000)
School A capacity: x ≤ 100
School B capacity: y ≤ 120
School A minimum: x ≥ 60
School B minimum: y ≥ 60
Non-negativity: x ≥ 0, y ≥ 0

Step 4: Solve graphically
Corner points: (60,60), (100,60), (60,120)
Z(60,60) = 60 + 60 = 120
Z(100,60) = 100 + 60 = 160
Z(60,120) = 60 + 120 = 180

Step 5: Optimal solution
Maximum students = 180 at (60,120)
Serve 60 students at School A and 120 students at School B.

Check budget: 8(60) + 6(120) = 480 + 720 = 1200 (₹120,000) within budget.`}],h=[{id:1,title:"Budget Allocation",problem:"A company has ₹800,000 to allocate between Research (x) and Development (y). Research yields 10 units of value per ₹1,000, Development yields 8 units per ₹1,000. At least ₹300,000 must go to Research and at least ₹200,000 to Development.",hint:"Let x = Research allocation (₹000), y = Development allocation (₹000). What is the objective? What are the constraints?",solution:`Let x = Research (₹000), y = Development (₹000)
Maximize Z = 10x + 8y
Subject to:
x + y ≤ 800 (Budget)
x ≥ 300 (Research minimum)
y ≥ 200 (Development minimum)
x, y ≥ 0`},{id:2,title:"Staff Scheduling",problem:"A call center has 300 hours of staff time available. Two types of calls need handling: Sales calls (x) require 2 minutes each and generate ₹50 profit. Support calls (y) require 3 minutes each and generate ₹40 profit. At least 2,000 Sales calls and 1,500 Support calls must be handled.",hint:"Convert minutes to hours. Let x = Sales calls, y = Support calls. What is the time constraint?",solution:`Let x = Sales calls, y = Support calls
Maximize Z = 50x + 40y
Subject to:
(2/60)x + (3/60)y ≤ 300 (Hours)
x ≥ 2000 (Sales minimum)
y ≥ 1500 (Support minimum)
x, y ≥ 0`},{id:3,title:"Equipment Allocation",problem:"A construction company has 200 machine-hours available. Two types of jobs need equipment: Excavation (x) requires 4 hours and generates ₹8,000 profit. Lifting (y) requires 2 hours and generates ₹5,000 profit. At least 20 Excavation jobs and 30 Lifting jobs must be completed.",hint:"Let x = Excavation jobs, y = Lifting jobs. What is the machine-hour constraint?",solution:`Let x = Excavation jobs, y = Lifting jobs
Maximize Z = 8000x + 5000y
Subject to:
4x + 2y ≤ 200 (Machine hours)
x ≥ 20 (Excavation minimum)
y ≥ 30 (Lifting minimum)
x, y ≥ 0`}],g=t=>{c(o=>({...o,[t]:!o[t]}))};return e.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[e.jsxs("div",{className:"text-center mb-10",children:[e.jsx("h1",{className:"text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-all duration-300",children:"Resource Allocation Problems"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto",children:"Learn how to formulate and solve resource allocation problems using linear programming to optimally distribute limited resources among competing activities."})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 justify-center border-b border-gray-200 dark:border-gray-700 pb-4",children:u.map(t=>e.jsx("button",{onClick:()=>l(t.id),className:p("px-6 py-2 rounded-lg font-medium transition-all duration-300",a===t.id?"bg-green-600 text-white shadow-lg shadow-green-200 dark:shadow-green-900/30":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-md"),children:t.label},t.id))}),e.jsxs("div",{className:"space-y-8",children:[a==="concept"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"What is a Resource Allocation Problem?"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 leading-relaxed mb-4",children:"A resource allocation problem involves distributing limited resources (money, time, personnel, materials) among competing activities or departments to achieve the best overall outcome. Unlike product-mix problems that focus on production quantities, resource allocation problems focus on how to best use available resources."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Key Characteristics"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Limited resources to distribute"}),e.jsx("li",{children:"Multiple activities/departments"}),e.jsx("li",{children:"Different resource consumption rates"}),e.jsx("li",{children:"Different returns from each activity"})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Real-World Applications"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Budget allocation across departments"}),e.jsx("li",{children:"Staff scheduling and assignment"}),e.jsx("li",{children:"Investment portfolio management"}),e.jsx("li",{children:"Public resource distribution"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"Steps to Formulate a Resource Allocation Problem"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[e.jsx("div",{className:"text-4xl mb-2",children:"📝"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Step 1"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Identify resources to allocate"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[e.jsx("div",{className:"text-4xl mb-2",children:"🎯"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Step 2"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Define allocation variables"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[e.jsx("div",{className:"text-4xl mb-2",children:"📋"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Step 3"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Formulate resource constraints"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[e.jsx("div",{className:"text-4xl mb-2",children:"✅"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Step 4"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Add minimum/maximum requirements"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"General Form of Resource Allocation Problem"}),e.jsx("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 font-mono text-sm",children:e.jsxs("div",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsx("p",{className:"font-bold text-blue-600 dark:text-blue-400",children:"Objective:"}),e.jsx("p",{className:"ml-4",children:"Maximize (or Minimize) Z = c₁x₁ + c₂x₂ + ... + cₙxₙ"}),e.jsx("p",{className:"font-bold text-green-600 dark:text-green-400 mt-2",children:"Resource Constraints:"}),e.jsx("p",{className:"ml-4",children:"a₁₁x₁ + a₁₂x₂ + ... + a₁ₙxₙ ≤ b₁ (Resource 1)"}),e.jsx("p",{className:"ml-4",children:"a₂₁x₁ + a₂₂x₂ + ... + a₂ₙxₙ ≤ b₂ (Resource 2)"}),e.jsx("p",{className:"ml-4",children:"..."}),e.jsx("p",{className:"font-bold text-purple-600 dark:text-purple-400 mt-2",children:"Additional Requirements:"}),e.jsx("p",{className:"ml-4",children:"x₁ ≥ min₁, x₂ ≥ min₂, ... (Minimum allocations)"}),e.jsx("p",{className:"ml-4",children:"x₁ ≤ max₁, x₂ ≤ max₂, ... (Maximum allocations)"}),e.jsx("p",{className:"ml-4 font-bold",children:"x₁, x₂, ..., xₙ ≥ 0"})]})})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"💡 Tips & Tricks for Resource Allocation Problems"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h4",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"Professional Tips"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Identify all resources that constrain allocation"}),e.jsx("li",{children:"Include minimum and maximum allocation requirements"}),e.jsx("li",{children:"Consider both quantitative and qualitative factors"}),e.jsx("li",{children:"Use sensitivity analysis for robust decisions"})]})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500",children:[e.jsx("h4",{className:"font-semibold text-purple-700 dark:text-purple-400 mb-2",children:"Common Mistakes"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Forgetting minimum allocation requirements"}),e.jsx("li",{children:"Ignoring capacity constraints"}),e.jsx("li",{children:"Confusing resource consumption rates"}),e.jsx("li",{children:"Overlooking non-negativity"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"✅ Mini Checklist"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"All resources identified"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Allocation variables defined"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Resource constraints formulated"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Minimum/maximum requirements included"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Non-negativity constraints added"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Units are consistent"})]})]})]})]}),a==="examples"&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"space-y-6",children:x.map(t=>e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-bold text-gray-800 dark:text-gray-200 mb-3",children:t.title}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h5",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Problem"}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:t.problem})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h5",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"LP Formulation"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.solution})]})]}),e.jsx("div",{className:"mt-4 flex justify-center",children:e.jsx("button",{onClick:()=>g(t.id),className:"px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300",children:r[t.id]?"Hide Detailed Solution":"Show Detailed Solution"})}),r[t.id]&&e.jsxs("div",{className:"mt-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h5",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"📝 Detailed Solution"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.detailedSolution})]})]},`example-${t.id}`))})}),a==="practice"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center",children:"Practice Problems"}),e.jsx("div",{className:"space-y-6",children:h.map(t=>e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 transition-all duration-300 hover:shadow-md",children:[e.jsxs("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:["Problem ",t.id,": ",t.title]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:t.problem}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-3",children:"Formulate the LP problem to maximize value."}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>d(n===t.id?null:t.id),className:"px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-all duration-300",children:n===t.id?"Hide Solution":"Check Solution"}),e.jsx("button",{onClick:()=>m(s===t.id?null:t.id),className:"px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300",children:s===t.id?"Hide Hint":"Show Hint"})]}),s===t.id&&e.jsx("div",{className:"mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800",children:e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"💡 Hint:"})," ",t.hint]})}),n===t.id&&e.jsx("div",{className:"mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800",children:e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono",children:t.solution})})]},t.id))})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"💡 Tips for Solving Resource Allocation Problems"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Identify all resources:"})," What limits the allocation?"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Consider requirements:"})," Are there minimum or maximum allocations?"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Define variables clearly:"})," What does each variable represent?"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Include non-negativity:"})," Allocations cannot be negative"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Use correct units:"})," Ensure consistency across all constraints"]})]})]})]})]}),e.jsx("div",{className:"mt-12",children:e.jsx(y,{title:"Resource Allocation Problems FAQs",questions:f})}),e.jsx("div",{className:"mt-8",children:e.jsx(v,{content:j,title:"Resource Allocation Problems",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Note",downloadFileName:"topic1_note.txt"})}),e.jsx("div",{className:"mt-8",children:e.jsx(b,{note:"Resource allocation problems are a natural progression from product-mix problems. While product-mix focuses on production quantities, resource allocation focuses on distributing limited resources. Both are essential LP skills. I've found that students often find resource allocation problems more intuitive because they can relate to budget allocation, time management, and resource distribution in their own lives. Encourage students to think about how they allocate their own time and money - this makes the concepts more relatable."})})]})})};export{E as default};
