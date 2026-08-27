import{b as s,j as e,bg as r}from"./vendor-react-core-Doz9nIC6.js";import{F as c}from"./FAQTemplate-CkSqDH4B.js";import{T as m}from"./TeacherSukantaHui-CC0AKmkm.js";import{P as h}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-BtJHuk7w.js";const u=[{question:"What is the fundamental concept of primal and dual problems in optimization?",shortAnswer:"Every primal problem (original optimization) has a corresponding dual problem that provides complementary insights and bounds on the optimal solution.",explanation:"The primal problem is the original optimization problem we want to solve. The dual problem is derived from the primal through mathematical transformation. Each constraint in the primal becomes a variable in the dual, and each variable in the primal becomes a constraint in the dual. This relationship provides valuable insights about the problem structure and solution.",hint:"Think about how mirror images work - the dual is like a mathematical mirror of the primal problem.",level:"basic",codeExample:`Primal: max c^T x s.t. Ax ≤ b, x ≥ 0
Dual: min b^T y s.t. A^T y ≥ c, y ≥ 0`},{question:"What are dual variables and what do they represent economically?",shortAnswer:"Dual variables represent shadow prices or marginal values of the constraints in the primal problem.",explanation:"Each dual variable corresponds to a constraint in the primal problem. The value of a dual variable at optimality represents how much the objective function would improve if we had one more unit of that resource (for maximization problems) or how much we could reduce costs (for minimization problems).",hint:"Think about how much you'd pay for an extra unit of a limited resource - that's your shadow price.",level:"basic",codeExample:"If y₁ = 5 in a production problem, having one more unit of resource 1 increases profit by ₹5."},{question:"What is the difference between weak duality and strong duality?",shortAnswer:"Weak duality states that the objective value of the dual is always a bound on the primal objective, while strong duality states that these values are equal at optimality.",explanation:"Weak duality: For any feasible primal solution x and dual solution y, the dual objective value is ≤ primal objective value (for maximization). Strong duality: If both problems have optimal solutions and certain conditions are met, the optimal values are equal (duality gap = 0).",hint:"Weak duality gives bounds, strong duality gives the exact optimal value.",level:"intermediate",codeExample:`Weak: Z_dual ≤ Z_primal
Strong: Z_dual* = Z_primal*`},{question:"How do you derive the dual of a linear programming problem?",shortAnswer:"Convert each primal constraint to a dual variable, each primal variable to a dual constraint, and reverse the optimization direction.",explanation:"The process involves: 1) Identify the primal objective (max/min), 2) Set up dual objective with constraint coefficients, 3) Form dual constraints using objective coefficients, 4) Ensure correct inequality directions. The number of dual variables equals the number of primal constraints.",hint:"Count constraints and variables - they swap roles in the dual formulation.",level:"intermediate",codeExample:`Primal: max Z = 3x₁ + 2x₂
s.t. 2x₁ + x₂ ≤ 8, x₁ + 3x₂ ≤ 10, x₁,x₂ ≥ 0
Dual: min W = 8y₁ + 10y₂
s.t. 2y₁ + y₂ ≥ 3, y₁ + 3y₂ ≥ 2, y₁,y₂ ≥ 0`},{question:"What is the economic interpretation of dual variables in linear programming?",shortAnswer:"Dual variables represent the marginal value or shadow price of resources in the original problem.",explanation:"In production planning, dual variables show how much the profit would increase if we had one additional unit of each resource. In cost minimization, they show how much we could reduce costs by relaxing constraints. These shadow prices are crucial for resource valuation and allocation decisions.",hint:"Ask yourself: What's the maximum I'd pay for one more unit of this resource?",level:"intermediate",codeExample:"If y₁ = 7.5, increasing Resource 1 by 1 unit increases profit by ₹7.5 (for max problems)."},{question:"What are the conditions for strong duality to hold?",shortAnswer:"Strong duality holds when both primal and dual problems have feasible solutions and the optimal values are equal, typically under convexity and regularity conditions.",explanation:"For linear programming, strong duality always holds if both problems have feasible solutions. For more general optimization, additional conditions like Slater's condition (strict feasibility) or constraint qualification are needed. Strong duality means no duality gap exists.",hint:"Think about whether your problem satisfies the necessary conditions for equality.",level:"expert",codeExample:"Slater's condition: There exists x such that g_i(x) < 0 for all inequality constraints."},{question:"What is complementary slackness in duality theory?",shortAnswer:"Complementary slackness states that at optimality, either the slack variable or the corresponding dual variable (or both) must be zero.",explanation:"This condition provides relationships between primal and dual optimal solutions. For each constraint: if the constraint is tight (slack=0), the dual variable can be positive; if the constraint is loose (slack>0), the dual variable must be zero. This helps verify optimality and find solutions.",hint:"At optimality, resources either have zero shadow price or are fully utilized.",level:"expert",codeExample:`If x₁ > 0, then the dual constraint must be tight (A₁^T y = c₁).
If A₁x < b₁, then y₁ = 0.`},{question:"How can duality be used to solve complex optimization problems?",shortAnswer:"Duality allows solving the easier of the two problems (primal or dual) to get insights about the harder one.",explanation:"When one problem has fewer variables or easier constraints, solving the dual can be computationally more efficient. The dual solution provides bounds and sensitivity information about the primal. This is particularly useful in large-scale problems and in algorithms like interior-point methods.",hint:"Which problem has fewer variables or constraints? That's usually easier to solve.",level:"expert",codeExample:"A problem with many variables but few constraints might be easier to solve via its dual."},{question:"What role does duality play in sensitivity analysis?",shortAnswer:"Dual variables provide sensitivity information about how changes in constraints affect the optimal objective value.",explanation:"The values of dual variables indicate the rate of change in the objective function with respect to changes in the right-hand side of constraints. This is crucial for understanding how robust the solution is and for making decisions about resource allocation.",hint:"How would the optimal solution change if we had slightly more or less of each resource?",level:"expert",codeExample:"∂Z*/∂b_i = y_i* (where b_i is the RHS of constraint i)."},{question:"What are the key differences between primal and dual feasible regions?",shortAnswer:"The primal feasible region is in the space of decision variables, while the dual feasible region is in the space of shadow prices.",explanation:"The primal feasible region contains all combinations of decision variables that satisfy constraints. The dual feasible region contains all combinations of shadow prices that satisfy the dual constraints. These regions are in different spaces and the relationship between them is governed by duality theory.",hint:"Think about how dimensions and constraints transform between primal and dual.",level:"intermediate",codeExample:`Primal: 2D region (x₁,x₂)
Dual: 2D region (y₁,y₂) with different constraints.`},{question:"How do you interpret a dual variable that equals zero?",shortAnswer:"A zero-valued dual variable indicates that the corresponding constraint is not binding and has no marginal value.",explanation:"When a constraint is slack (not tight) at optimality, the associated dual variable is zero. This means that having more of that resource doesn't improve the objective function - it's not a bottleneck. The resource is abundant and has no shadow price.",hint:"If a resource isn't fully used, why would you pay for more of it?",level:"intermediate",codeExample:"If y₁ = 0, then resource 1 is not limiting production or value."},{question:"What happens to dual variables when constraints change?",shortAnswer:"Dual variables change when constraints change, reflecting new marginal values of resources.",explanation:"If the RHS of a constraint changes, the optimal dual variables may change. The rate of change of the objective function with respect to these changes is given by the dual variables. This makes duality essential for what-if analysis.",hint:"How would adding more of a resource change the optimal solution?",level:"expert",codeExample:"∂Z*/∂b = y* (sensitivity of objective to RHS changes)."},{question:"How does duality help in resource allocation decisions?",shortAnswer:"Dual variables indicate which resources are scarce and valuable, guiding optimal allocation decisions.",explanation:"By examining dual variables (shadow prices), managers can identify bottlenecks and make informed decisions about resource allocation. Resources with high shadow prices should be prioritized for additional allocation, while zero-shadow-price resources indicate surplus capacity.",hint:"Which resources would you invest more in based on their shadow prices?",level:"expert",codeExample:"If labor has a shadow price of ₹50 and raw material ₹30, invest more in labor first."},{question:"What are the practical applications of duality in business?",shortAnswer:"Duality is used in production planning, finance, transportation, and resource allocation to optimize decisions.",explanation:"Businesses use duality for: 1) Pricing resources and products, 2) Evaluating investment opportunities, 3) Optimizing supply chains, 4) Making staffing decisions, 5) Portfolio optimization in finance. The dual perspective provides valuable insights that aren't visible in the primal formulation.",hint:"Think about how businesses value and allocate their limited resources.",level:"intermediate",codeExample:"A company uses dual prices to decide which products to produce and how to price them."},{question:"What is the significance of the duality gap?",shortAnswer:"The duality gap is the difference between the primal and dual objective values, indicating how far from optimality the solution is.",explanation:"A positive duality gap means the solution is not yet optimal. Reducing the gap to zero (strong duality) indicates optimality. In practice, algorithms for solving optimization problems track the duality gap as a measure of solution quality.",hint:"When the gap is zero, you've found the optimal solution.",level:"intermediate",codeExample:"Gap = Z_primal - Z_dual (for max problems). Gap = 0 at optimality."},{question:"Can you explain the dual of a standard form linear program?",shortAnswer:"The dual of a standard form LP (Ax = b, x ≥ 0) has free (unrestricted) variables corresponding to the equality constraints.",explanation:"For standard form: Primal min c^T x s.t. Ax = b, x ≥ 0. The dual is max b^T y s.t. A^T y ≤ c (y unrestricted). The equality constraints in primal become free variables in dual.",hint:"Equality constraints in primal = free variables in dual.",level:"expert",codeExample:`Primal: min c^T x s.t. Ax = b, x ≥ 0
Dual: max b^T y s.t. A^T y ≤ c, y free`},{question:"What are the main properties of duality in linear programming?",shortAnswer:"Key properties include weak duality, strong duality, complementary slackness, and the symmetry principle.",explanation:"1) Weak duality: dual objective bounds primal objective, 2) Strong duality: optimal values are equal, 3) Complementary slackness: either constraint is tight or dual variable is zero, 4) Symmetry: dual of dual gives the original primal.",hint:"These properties together form the foundation of duality theory.",level:"intermediate",codeExample:"All properties work together to prove optimality and find solutions."},{question:"How does the simplex method use dual variables?",shortAnswer:"The simplex method uses dual variables (simplex multipliers) to check optimality and guide the search for better solutions.",explanation:"In the simplex method, dual variables are calculated to determine whether the current solution is optimal. They represent the reduced costs that indicate whether improving solutions exist. This dual perspective makes the simplex method efficient.",hint:"The simplex method implicitly solves both primal and dual problems simultaneously.",level:"expert",codeExample:"Reduced costs = c_j - y^T A_j (indicate if a variable should enter the basis)."},{question:"What is the role of duality in interior-point methods?",shortAnswer:"Interior-point methods solve both primal and dual problems simultaneously by maintaining complementary slackness.",explanation:"Modern interior-point methods work on the primal-dual system, tracking both solutions and the duality gap. They move through the interior of the feasible region while reducing the duality gap to zero, ensuring optimality.",hint:"Path-following algorithms maintain primal and dual feasibility while reducing the gap.",level:"expert",codeExample:"Primal-dual interior-point methods: Solve primal and dual together with perturbed complementary slackness."},{question:"How do you verify if a solution is optimal using duality?",shortAnswer:"Check if the primal and dual have feasible solutions with equal objective values (strong duality).",explanation:"To verify optimality: 1) Find feasible primal solution x*, 2) Find feasible dual solution y*, 3) Check if c^T x* = b^T y*. If equal, both are optimal by strong duality. Also verify complementary slackness conditions.",hint:"Equal objective values + feasibility = optimality.",level:"intermediate",codeExample:"If Z_primal = Z_dual and both feasible, then optimality is proven."},{question:"What is the economic meaning of complementary slackness?",shortAnswer:"It says that resources are only valuable (have positive shadow price) when they're fully utilized.",explanation:"In economic terms: 1) If a resource has a positive shadow price, it's fully used in the optimal solution (the constraint is tight), 2) If a resource is not fully used (has slack), its shadow price must be zero. This helps identify true bottlenecks.",hint:"Only scarce resources have value. Abundant resources are free.",level:"expert",codeExample:"Slack > 0 → y = 0. y > 0 → Slack = 0."},{question:"How does duality help in portfolio optimization?",shortAnswer:"Duality in portfolio optimization helps understand the trade-off between risk and return and identify shadow prices of constraints.",explanation:"In Markowitz portfolio optimization: The dual problem reveals the market prices of risk. Dual variables show the marginal value of relaxing constraints like minimum return requirements or maximum risk limits.",hint:"What would an investor pay to reduce portfolio risk or increase expected return?",level:"expert",codeExample:"Dual variables in portfolio optimization = shadow prices of risk constraints."},{question:"Can duality be applied to nonlinear programming?",shortAnswer:"Yes, duality extends to nonlinear programming through Lagrangian duality and is fundamental to convex optimization.",explanation:"Lagrangian duality is used for nonlinear problems. For convex problems with certain conditions, strong duality holds. This is crucial in many machine learning applications including SVM and deep learning optimization.",hint:"Convexity is key for strong duality in nonlinear problems.",level:"expert",codeExample:"L(x,λ) = f(x) + Σλ_i g_i(x) - Lagrangian function for constrained optimization."},{question:"What is the relationship between dual variables and Lagrange multipliers?",shortAnswer:"Dual variables in linear programming are equivalent to Lagrange multipliers in nonlinear optimization.",explanation:"Both represent the marginal value of constraints. In linear programming, dual variables are often called Lagrange multipliers in the context of the Lagrangian relaxation. This connection unifies duality theory across optimization problems.",hint:"They're the same concept - just different terminology for different fields.",level:"expert",codeExample:"Lagrange multipliers = Dual variables = Shadow prices."},{question:"How do you handle inequality constraints in dual formation?",shortAnswer:"Inequality direction determines the sign of dual variables and constraints in the dual formulation.",explanation:"For minimization with ≥ constraints, dual variables are ≤ 0. For maximization with ≤ constraints, dual variables are ≥ 0. The rule: Primal constraints with ≤ have non-negative dual variables, ≥ have non-positive dual variables.",hint:"The direction of primal constraints determines the sign of dual variables.",level:"expert",codeExample:"Primal: min c^T x s.t. Ax ≥ b → Dual: max b^T y s.t. A^T y ≤ c, y ≤ 0."},{question:"What is the dual of a minimum cost flow problem?",shortAnswer:"The dual represents the shortest path or cost minimization problem with node potentials.",explanation:"In network flow: Primal (min cost flow) has dual variables as node potentials. These potentials create a shortest path structure. The dual formulation can be interpreted as finding optimal node prices.",hint:"Node potentials in network flow = dual variables.",level:"expert",codeExample:"Dual: max Σ b_i π_i s.t. π_i - π_j ≤ c_ij (for each arc)."},{question:"Why is duality important in algorithm design?",shortAnswer:"Duality enables the design of efficient algorithms by providing theoretical guarantees and alternative formulations.",explanation:"Duality leads to: 1) Stopping criteria for algorithms, 2) Certificates of optimality, 3) Alternative ways to solve problems, 4) Primal-dual algorithms that exploit both formulations.",hint:"Many modern algorithms use both primal and dual formulations.",level:"expert",codeExample:"Primal-dual algorithms: maintain feasible primal and dual solutions simultaneously."},{question:"What is the dual of a transportation problem?",shortAnswer:"The dual of the transportation problem involves shadow prices for supply and demand nodes.",explanation:"In transportation: Primal minimizes shipping costs. Dual variables represent the value of having additional supply at origins or demand at destinations. The dual helps in evaluating potential changes in the network.",hint:"Shadow prices at supply and demand nodes help optimize transportation.",level:"expert",codeExample:"Dual variables: u_i (supply nodes) and v_j (demand nodes) with constraints u_i + v_j ≤ c_ij."},{question:"What is the duality theorem in linear programming?",shortAnswer:"The duality theorem states that the optimal objective values of a primal and its dual are equal if both have optimal solutions.",explanation:"This fundamental theorem ensures that for any LP with feasible solutions, the optimal values of the primal and dual are equal (strong duality). It provides a way to certify optimality and forms the theoretical foundation of LP algorithms.",hint:"The primal and dual optimal values are always equal for LPs.",level:"intermediate",codeExample:"max c^T x = min b^T y (the fundamental duality theorem)."},{question:"What happens when the primal problem is infeasible?",shortAnswer:"If the primal is infeasible, the dual is either infeasible or unbounded.",explanation:"By the Farkas lemma, if the primal has no feasible solution, the dual is either unbounded or infeasible. This relationship helps identify problem formulations and detect inconsistencies in constraints.",hint:"Infeasibility in one problem signals issues in the other.",level:"expert",codeExample:"Primal infeasible → Dual unbounded or infeasible."},{question:"How can duality be used for sensitivity analysis in production planning?",shortAnswer:"Dual variables show the marginal value of resources, enabling managers to prioritize investments and identify bottlenecks.",explanation:"In production planning: 1) Identify limiting resources from positive shadow prices, 2) Evaluate investment in resources with highest shadow prices, 3) Determine the value of relaxing constraints, 4) Price products based on resource consumption.",hint:"Shadow prices guide investment decisions by revealing true resource values.",level:"expert",codeExample:"If machine time has shadow price ₹100/hour, investing in more capacity is worth ₹100/hour."}],p=`================================================================================\r
                    CONCEPT OF PRIMAL AND DUAL PROBLEMS\r
                               Detailed Notes\r
================================================================================\r
\r
1. INTRODUCTION TO DUALITY\r
================================================================================\r
\r
Definition:\r
The concept of duality in optimization states that every linear programming \r
problem (the primal problem) has an associated companion problem called the \r
dual problem. These two problems are mathematically related and provide \r
complementary insights into the optimization process.\r
\r
Key Insight:\r
The dual problem provides a different perspective on the same optimization \r
challenge, often revealing insights not immediately obvious in the primal \r
formulation. It's like looking at the same situation from a different angle.\r
\r
2. PRIMAL PROBLEM (THE ORIGINAL)\r
================================================================================\r
\r
Components of the Primal Problem:\r
---------------------------------------------------------\r
1. Decision Variables: What we want to optimize\r
   Example: How many units of each product to produce\r
\r
2. Objective Function: What we want to maximize or minimize\r
   Example: Maximize profit or minimize cost\r
\r
3. Constraints: Limitations on resources\r
   Example: Limited labor hours, raw materials, machine capacity\r
\r
Standard Form Example:\r
---------------------------------------------------------\r
Primal: Maximize Z = c₁x₁ + c₂x₂ + ... + cₙxₙ\r
Subject to:\r
a₁₁x₁ + a₁₂x₂ + ... + a₁ₙxₙ ≤ b₁\r
a₂₁x₁ + a₂₂x₂ + ... + a₂ₙxₙ ≤ b₂\r
...\r
aₘ₁x₁ + aₘ₂x₂ + ... + aₘₙxₙ ≤ bₘ\r
x₁, x₂, ..., xₙ ≥ 0\r
\r
Real-World Analogy:\r
---------------------------------------------------------\r
Think of Mamata in Barrackpore who runs a small factory. Her primal problem \r
is deciding how many chairs and tables to produce to maximize profit, given \r
limited wood and labor.\r
\r
3. DUAL PROBLEM (THE COMPANION)\r
================================================================================\r
\r
What the Dual Problem Represents:\r
---------------------------------------------------------\r
The dual problem is formed from the primal problem through a mathematical \r
transformation. It has:\r
\r
1. Dual Variables: Associated with each constraint in the primal\r
   - Each primal constraint becomes a dual variable\r
   - These represent shadow prices or marginal values\r
\r
2. Dual Objective Function: Formed from primal constraints\r
   - Uses the RHS values of primal constraints\r
   - Follows opposite optimization direction\r
\r
3. Dual Constraints: Derived from primal objective coefficients\r
   - Each primal variable becomes a dual constraint\r
   - Uses the objective coefficients from primal\r
\r
Standard Form of the Dual:\r
---------------------------------------------------------\r
For the above primal, the dual is:\r
Dual: Minimize W = b₁y₁ + b₂y₂ + ... + bₘyₘ\r
Subject to:\r
a₁₁y₁ + a₂₁y₂ + ... + aₘ₁yₘ ≥ c₁\r
a₁₂y₁ + a₂₂y₂ + ... + aₘ₂yₘ ≥ c₂\r
...\r
a₁ₙy₁ + a₂ₙy₂ + ... + aₘₙyₘ ≥ cₙ\r
y₁, y₂, ..., yₘ ≥ 0\r
\r
4. ECONOMIC INTERPRETATION\r
================================================================================\r
\r
Shadow Prices (Dual Variables):\r
---------------------------------------------------------\r
Each dual variable represents the shadow price or marginal value of the \r
corresponding constraint:\r
\r
- For Maximization Problems:\r
  The shadow price indicates how much the objective function would increase \r
  if we had one additional unit of the resource.\r
\r
- For Minimization Problems:\r
  The shadow price indicates how much we could reduce costs if we had one \r
  additional unit of the resource.\r
\r
Example: Susmita in Kolkata manages a production line. If the shadow price \r
for labor is ₹50/hour, then having one more hour of labor would increase \r
profit by ₹50 (or reduce costs by ₹50).\r
\r
Practical Applications:\r
---------------------------------------------------------\r
1. Production Planning: Deciding what to produce and how to price products\r
2. Investment Decisions: Evaluating the value of additional resources\r
3. Transportation: Optimizing shipping routes and costs\r
4. Staff Scheduling: Determining optimal staffing levels\r
5. Portfolio Optimization: Balancing risk and return\r
\r
5. RELATIONSHIP BETWEEN PRIMAL AND DUAL\r
================================================================================\r
\r
Weak Duality:\r
---------------------------------------------------------\r
For any feasible primal solution x and any feasible dual solution y:\r
- If primal is maximizing: Z_dual ≤ Z_primal\r
- If primal is minimizing: Z_primal ≤ Z_dual\r
\r
This means the dual objective value always provides a bound on the primal \r
objective value.\r
\r
Strong Duality:\r
---------------------------------------------------------\r
If both the primal and dual problems have optimal solutions (and certain \r
conditions are met), then:\r
Z_primal* = Z_dual*\r
\r
This means the optimal objective values are exactly equal.\r
\r
Complementary Slackness:\r
---------------------------------------------------------\r
At optimality:\r
- If a primal constraint is tight (slack = 0), the corresponding dual \r
  variable may be positive\r
- If a primal constraint is loose (slack > 0), the corresponding dual \r
  variable must be zero\r
- If a dual variable is positive, the corresponding primal constraint \r
  must be tight\r
- If a primal variable is positive, the corresponding dual constraint \r
  must be tight\r
\r
6. KEY PROPERTIES OF DUALITY\r
================================================================================\r
\r
1. Symmetry Property:\r
   The dual of the dual problem is the original primal problem.\r
\r
2. Bounding Property:\r
   The dual provides bounds on the primal objective value.\r
\r
3. Optimality Condition:\r
   Equal objective values for feasible primal and dual solutions indicate \r
   optimality.\r
\r
4. Sensitivity Information:\r
   Dual variables provide marginal values for sensitivity analysis.\r
\r
5. Computational Efficiency:\r
   Solving the easier of primal or dual can be computationally beneficial.\r
\r
7. REAL-WORLD EXAMPLES\r
================================================================================\r
\r
Example 1: Production Planning\r
---------------------------------------------------------\r
A factory produces two products using limited resources.\r
\r
Primal (Maximize Profit):\r
Max Z = 40x₁ + 30x₂\r
Subject to:\r
2x₁ + x₂ ≤ 100 (Resource 1)\r
x₁ + 2x₂ ≤ 80 (Resource 2)\r
x₁, x₂ ≥ 0\r
\r
Dual (Determine Resource Values):\r
Min W = 100y₁ + 80y₂\r
Subject to:\r
2y₁ + y₂ ≥ 40\r
y₁ + 2y₂ ≥ 30\r
y₁, y₂ ≥ 0\r
\r
Interpretation:\r
- y₁ and y₂ are the shadow prices of Resource 1 and Resource 2\r
- They tell us the value of having additional resources\r
\r
Example 2: Investment Portfolio\r
---------------------------------------------------------\r
An investor wants to maximize returns with risk constraints.\r
\r
Primal (Maximize Return):\r
Max Z = 0.12x₁ + 0.15x₂\r
Subject to:\r
0.2x₁ + 0.3x₂ ≤ 0.25 (Risk constraint)\r
x₁ + x₂ = 1 (Total investment)\r
x₁, x₂ ≥ 0\r
\r
Dual (Risk Pricing):\r
Min W = 0.25y₁ + 1y₂\r
Subject to:\r
0.2y₁ + y₂ ≥ 0.12\r
0.3y₁ + y₂ ≥ 0.15\r
y₁ free, y₂ free\r
\r
Example 3: Transportation Network\r
---------------------------------------------------------\r
Abhronila in Jadavpur manages a delivery network.\r
\r
Primal (Minimize Cost):\r
Min Z = 2x₁ + 3x₂ + 4x₃\r
Subject to:\r
x₁ + x₂ + x₃ ≥ 50 (Demand)\r
x₁ ≤ 30 (Supply 1)\r
x₂ ≤ 40 (Supply 2)\r
x₃ ≤ 20 (Supply 3)\r
x₁, x₂, x₃ ≥ 0\r
\r
Dual (Value of Supply/Demand):\r
Max W = 50y₁ - 30y₂ - 40y₃ - 20y₄\r
Subject to:\r
y₁ - y₂ ≤ 2\r
y₁ - y₃ ≤ 3\r
y₁ - y₄ ≤ 4\r
y₁ free, y₂, y₃, y₄ ≥ 0\r
\r
Example 4: Staff Scheduling\r
---------------------------------------------------------\r
A restaurant minimizes staffing costs while meeting minimum requirements.\r
\r
Primal (Minimize Cost):\r
Min Z = 50y₁ + 60y₂\r
Subject to:\r
2y₁ + y₂ ≥ 8 (Morning shift)\r
y₁ + 2y₂ ≥ 10 (Evening shift)\r
y₁, y₂ ≥ 0\r
\r
Dual (Value of Staff):\r
Max W = 8x₁ + 10x₂\r
Subject to:\r
2x₁ + x₂ ≤ 50\r
x₁ + 2x₂ ≤ 60\r
x₁, x₂ ≥ 0\r
\r
8. TIPS AND TRICKS FROM PROFESSIONALS\r
================================================================================\r
\r
1. Quick Recognition:\r
   - Look for "shadow price" interpretation\r
   - Dual variables always represent marginal value\r
\r
2. Duality Check:\r
   - Verify correct number of variables and constraints\r
   - Ensure optimization directions are opposite\r
\r
3. Practical Use:\r
   - Use duality to find feasible solutions\r
   - Apply for proving optimality\r
   - Use for sensitivity analysis\r
\r
4. Performance Hints:\r
   - Solve the problem with fewer variables\r
   - Consider computational efficiency\r
   - Use dual for large-scale problems\r
\r
5. Debugging Mindset:\r
   - Always check duality gap\r
   - Verify complementary slackness\r
   - Test with simple examples\r
\r
9. COMMON MISTAKES AND MISCONCEPTIONS\r
================================================================================\r
\r
❌ Wrong Problem Formulation:\r
   Mistaking maximization for minimization when forming the dual.\r
\r
❌ Incorrect Constraint Direction:\r
   Misplacing ≥ vs ≤ when converting between primal and dual forms.\r
\r
❌ Variable/Constraint Mismatch:\r
   Forgetting that each primal constraint becomes a dual variable.\r
\r
❌ Missing Duality Gap:\r
   Not checking if primal and dual optimal values are equal.\r
\r
❌ Assuming Symmetry:\r
   Forgetting that dual of dual returns to primal only under conditions.\r
\r
❌ Ignoring Feasibility:\r
   Not verifying both problems have feasible solutions.\r
\r
10. BEST PRACTICES\r
================================================================================\r
\r
✅ Systematic Approach:\r
   - Write down the primal problem clearly\r
   - Identify objective direction\r
   - Count constraints and variables\r
   - Form dual systematically step by step\r
\r
✅ Verification:\r
   - Check variable count matches\r
   - Verify constraint count matches\r
   - Test with a simple feasible solution\r
   - Validate duality gap\r
\r
✅ Documentation:\r
   - Clearly label primal and dual variables\r
   - Explain economic interpretation\r
   - Document any transformations used\r
   - Note assumptions made\r
\r
✅ Optimization Strategy:\r
   - Choose easier problem to solve\r
   - Use duality for sensitivity analysis\r
   - Consider complementary slackness\r
   - Exploit special problem structures\r
\r
11. MINI CHECKLIST\r
================================================================================\r
\r
☐ Understand that every primal has a corresponding dual\r
☐ Know dual variables represent shadow prices\r
☐ Understand dual takes opposite optimization direction\r
☐ Can explain weak and strong duality properties\r
☐ Can identify real-world applications of duality\r
☐ Know how to verify optimality using duality\r
☐ Understand complementary slackness\r
☐ Can use duality for sensitivity analysis\r
☐ Know when to solve primal vs dual\r
☐ Can interpret dual variables economically\r
\r
12. TEACHER'S NOTE\r
================================================================================\r
\r
The concept of duality is one of the most profound ideas in optimization. \r
When I teach this, I emphasize that the dual problem isn't just a \r
mathematical curiosity—it's a window into understanding how constraints \r
affect our decisions.\r
\r
Think of Mahima, a student in Ichapur, who solved a production planning \r
problem using both primal and dual formulations. She discovered that the \r
dual provided insights about resource pricing that the primal didn't reveal.\r
\r
Remember: Mastering duality transforms you from a problem solver into a \r
strategic decision maker. The ability to see both the original problem and \r
its shadow problem gives you a comprehensive view of optimization challenges.\r
\r
Key Points to Remember:\r
1. Duality provides multiple perspectives on the same problem\r
2. Dual variables have important economic interpretations\r
3. Strong duality guarantees equal optimal values\r
4. Complementary slackness helps verify optimality\r
5. Duality is essential for sensitivity analysis\r
\r
================================================================================\r
END OF NOTES\r
================================================================================`,v=()=>{const[i,d]=s.useState(0),t=s.useRef([]);return s.useEffect(()=>{const a=new IntersectionObserver(n=>{n.forEach(o=>{if(o.isIntersecting){const l=parseInt(o.target.dataset.index);isNaN(l)||d(l)}})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});return t.current.forEach(n=>{n&&a.observe(n)}),()=>{t.current.forEach(n=>{n&&a.unobserve(n)})}},[]),e.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-300",children:e.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"mb-12 text-center",children:[e.jsx("div",{className:"inline-block px-4 py-1 mb-4 text-sm font-semibold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 rounded-full",children:"Topic 0"}),e.jsx("h1",{className:"text-4xl font-bold leading-tight mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent",children:"Concept of Primal and Dual Problems"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed",children:"Understanding the fundamental relationship between optimization problems and their dual counterparts"})]}),e.jsxs("div",{className:"space-y-16",children:[e.jsx("section",{ref:a=>t.current[0]=a,"data-index":"0",className:r("transform transition-all duration-700 ease-out","motion-safe:translate-y-0 motion-safe:opacity-100",i>=0?"motion-safe:translate-y-0 motion-safe:opacity-100":"motion-safe:translate-y-8 motion-safe:opacity-0"),children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 border border-gray-200 dark:border-gray-700",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400",children:"What are Primal and Dual Problems?"}),e.jsxs("div",{className:"prose prose-blue dark:prose-invert max-w-none leading-relaxed",children:[e.jsxs("p",{children:["In optimization theory, every ",e.jsx("strong",{children:"primal problem"})," (the original optimization problem) has a corresponding ",e.jsx("strong",{children:"dual problem"}),". This relationship is fundamental in linear programming, convex optimization, and various fields of mathematics and engineering."]}),e.jsx("div",{className:"my-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500",children:e.jsx("p",{className:"font-medium text-blue-800 dark:text-blue-300",children:"💡 Key Insight: The dual problem provides a different perspective on the same optimization challenge, often revealing insights that are not immediately obvious in the primal formulation."})}),e.jsx("h3",{className:"text-xl font-semibold mt-6 mb-3 text-gray-800 dark:text-gray-200",children:"Primal Problem (Original)"}),e.jsx("p",{children:"The primal problem is the original optimization problem we want to solve. It typically involves:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Decision variables"})," (what we want to optimize)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Objective function"})," (what we want to maximize or minimize)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Constraints"})," (limitations on the decision variables)"]})]}),e.jsx("h3",{className:"text-xl font-semibold mt-6 mb-3 text-gray-800 dark:text-gray-200",children:"Dual Problem (Companion)"}),e.jsx("p",{children:"The dual problem is derived from the primal problem through a mathematical transformation. It offers:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Dual variables"})," (associated with each constraint in the primal)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Dual objective function"})," (formed from the primal's constraints)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Dual constraints"})," (derived from the primal's objective coefficients)"]})]}),e.jsx("div",{className:"my-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500",children:e.jsx("p",{className:"font-medium text-purple-800 dark:text-purple-300",children:"🎯 Analogy: Think of the primal problem as buying groceries (minimizing cost with constraints on nutrition), and the dual as the store's pricing strategy (maximizing profit while ensuring competitive prices)."})})]})]})}),e.jsx("section",{ref:a=>t.current[1]=a,"data-index":"1",className:r("transform transition-all duration-700 ease-out delay-100","motion-safe:translate-y-0 motion-safe:opacity-100",i>=1?"motion-safe:translate-y-0 motion-safe:opacity-100":"motion-safe:translate-y-8 motion-safe:opacity-0"),children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 border border-gray-200 dark:border-gray-700",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400",children:"Understanding the Core Concept"}),e.jsxs("div",{className:"prose prose-blue dark:prose-invert max-w-none leading-relaxed",children:[e.jsx("p",{children:'The duality concept is based on the principle that every optimization problem has a "shadow" problem that provides valuable insights. The relationship between primal and dual problems is symmetric and fundamental.'}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 my-6",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-300",children:"Primal Problem"}),e.jsxs("ul",{className:"list-disc pl-4 space-y-1 text-sm",children:[e.jsx("li",{children:"Maximize or minimize objective"}),e.jsx("li",{children:"Subject to constraints"}),e.jsx("li",{children:"Variables represent decisions"}),e.jsx("li",{children:"Constraints represent limitations"})]})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-purple-700 dark:text-purple-300",children:"Dual Problem"}),e.jsxs("ul",{className:"list-disc pl-4 space-y-1 text-sm",children:[e.jsx("li",{children:"Opposite optimization direction"}),e.jsx("li",{children:"Constraints become variables"}),e.jsx("li",{children:"Variables represent shadow prices"}),e.jsx("li",{children:"Provides lower/upper bounds"})]})]})]}),e.jsxs("div",{className:"my-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200",children:"Mathematical Structure"}),e.jsxs("p",{className:"text-sm font-mono bg-white dark:bg-gray-800 p-3 rounded border border-gray-300 dark:border-gray-600",children:["Primal: maximize c^T x subject to Ax ≤ b, x ≥ 0",e.jsx("br",{}),"Dual: minimize b^T y subject to A^T y ≥ c, y ≥ 0"]}),e.jsx("p",{className:"text-sm mt-2 text-gray-600 dark:text-gray-300",children:"Here, x represents primal variables, y represents dual variables, A is the constraint matrix, b is the constraint vector, and c is the objective coefficient vector."})]}),e.jsx("div",{className:"my-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500",children:e.jsx("p",{className:"font-medium text-orange-800 dark:text-orange-300",children:"🔑 Key Principle: The objective value of the dual problem always provides a bound on the primal objective value. For minimization problems, the dual provides a lower bound, while for maximization problems, it provides an upper bound."})})]})]})}),e.jsx("section",{ref:a=>t.current[2]=a,"data-index":"2",className:r("transform transition-all duration-700 ease-out delay-200","motion-safe:translate-y-0 motion-safe:opacity-100",i>=2?"motion-safe:translate-y-0 motion-safe:opacity-100":"motion-safe:translate-y-8 motion-safe:opacity-0"),children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 border border-gray-200 dark:border-gray-700",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400",children:"Real-World Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-6 rounded-xl hover:scale-[1.02] transition-all duration-300",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-300",children:"Example 1: Production Planning"}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300 mt-2",children:[e.jsx("strong",{children:"Primal:"})," A factory produces two products using limited resources. Maximize profit subject to resource constraints.",e.jsx("br",{}),e.jsx("strong",{children:"Dual:"})," Determine the shadow prices of resources - how much the profit would increase if we had one more unit of each resource."]}),e.jsx("div",{className:"mt-3 p-3 bg-white dark:bg-gray-700 rounded text-sm",children:e.jsxs("p",{className:"font-mono",children:["Primal: Max Z = 40x₁ + 30x₂",e.jsx("br",{}),"Subject to: 2x₁ + x₂ ≤ 100, x₁ + 2x₂ ≤ 80, x₁,x₂ ≥ 0"]})})]}),e.jsxs("div",{className:"bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-6 rounded-xl hover:scale-[1.02] transition-all duration-300",children:[e.jsx("h4",{className:"font-semibold text-purple-700 dark:text-purple-300",children:"Example 2: Investment Portfolio"}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300 mt-2",children:[e.jsx("strong",{children:"Primal:"})," An investor wants to maximize returns on investments while managing risk constraints.",e.jsx("br",{}),e.jsx("strong",{children:"Dual:"})," Evaluate the marginal value of changing risk constraints to improve returns."]}),e.jsx("div",{className:"mt-3 p-3 bg-white dark:bg-gray-700 rounded text-sm",children:e.jsxs("p",{className:"font-mono",children:["Primal: Min Z = 0.2x₁ + 0.3x₂",e.jsx("br",{}),"Subject to: x₁ + x₂ ≥ 100, x₁,x₂ ≥ 0"]})})]}),e.jsxs("div",{className:"bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 p-6 rounded-xl hover:scale-[1.02] transition-all duration-300",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-300",children:"Example 3: Transportation Network"}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300 mt-2",children:[e.jsx("strong",{children:"Primal:"})," Minimize transportation costs to deliver goods from warehouses to stores.",e.jsx("br",{}),e.jsx("strong",{children:"Dual:"})," Determine the value of having additional capacity at each warehouse or demand point."]}),e.jsx("div",{className:"mt-3 p-3 bg-white dark:bg-gray-700 rounded text-sm",children:e.jsxs("p",{className:"font-mono",children:["Primal: Min Z = 2x₁ + 3x₂",e.jsx("br",{}),"Subject to: x₁ + x₂ ≥ 50, x₁ ≤ 30, x₂ ≤ 40"]})})]}),e.jsxs("div",{className:"bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 p-6 rounded-xl hover:scale-[1.02] transition-all duration-300",children:[e.jsx("h4",{className:"font-semibold text-orange-700 dark:text-orange-300",children:"Example 4: Staff Scheduling"}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300 mt-2",children:[e.jsx("strong",{children:"Primal:"})," A restaurant minimizes staff costs while meeting minimum staffing requirements.",e.jsx("br",{}),e.jsx("strong",{children:"Dual:"})," Value of having additional staff availability or relaxing shift requirements."]}),e.jsx("div",{className:"mt-3 p-3 bg-white dark:bg-gray-700 rounded text-sm",children:e.jsxs("p",{className:"font-mono",children:["Primal: Min Z = 50y₁ + 60y₂",e.jsx("br",{}),"Subject to: 2y₁ + y₂ ≥ 8, y₁ + 2y₂ ≥ 10, y₁,y₂ ≥ 0"]})})]})]}),e.jsx("div",{className:"mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500",children:e.jsxs("p",{className:"font-medium text-yellow-800 dark:text-yellow-300",children:["💡 ",e.jsx("strong",{children:"Think About:"})," How does the dual problem help in each of these scenarios? What insights does it provide that the primal problem alone cannot offer?"]})})]})]})}),e.jsx("section",{ref:a=>t.current[3]=a,"data-index":"3",className:r("transform transition-all duration-700 ease-out delay-300","motion-safe:translate-y-0 motion-safe:opacity-100",i>=3?"motion-safe:translate-y-0 motion-safe:opacity-100":"motion-safe:translate-y-8 motion-safe:opacity-0"),children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 border border-gray-200 dark:border-gray-700",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400",children:"Visual Understanding"}),e.jsxs("div",{className:"flex flex-col items-center justify-center space-y-6",children:[e.jsxs("svg",{className:"w-full max-w-3xl h-auto",viewBox:"0 0 800 500",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{width:"800",height:"500",fill:"transparent"}),e.jsx("rect",{x:"50",y:"100",width:"280",height:"200",rx:"15",fill:"#3B82F6",fillOpacity:"0.2",stroke:"#3B82F6",strokeWidth:"2",children:e.jsx("animate",{attributeName:"opacity",values:"0.8;1;0.8",dur:"3s",repeatCount:"indefinite"})}),e.jsx("text",{x:"190",y:"140",textAnchor:"middle",className:"text-xl font-bold fill-blue-600 dark:fill-blue-400",children:"Primal Problem"}),e.jsx("text",{x:"190",y:"170",textAnchor:"middle",className:"text-sm fill-gray-700 dark:fill-gray-300",children:"Original Optimization"}),e.jsx("text",{x:"190",y:"200",textAnchor:"middle",className:"text-xs fill-gray-600 dark:fill-gray-400",children:"Maximize/Minimize"}),e.jsx("text",{x:"190",y:"225",textAnchor:"middle",className:"text-xs fill-gray-600 dark:fill-gray-400",children:"Subject to Constraints"}),e.jsx("text",{x:"190",y:"250",textAnchor:"middle",className:"text-xs fill-gray-600 dark:fill-gray-400",children:"Decision Variables"}),e.jsx("line",{x1:"330",y1:"200",x2:"470",y2:"200",stroke:"#8B5CF6",strokeWidth:"3",children:e.jsx("animate",{attributeName:"stroke-dasharray",values:"0 200;200 0",dur:"2s",fill:"freeze"})}),e.jsx("polygon",{points:"470,195 480,200 470,205",fill:"#8B5CF6"}),e.jsx("text",{x:"400",y:"180",textAnchor:"middle",className:"text-sm font-medium fill-purple-600 dark:fill-purple-400",children:"Transformation"}),e.jsx("rect",{x:"480",y:"100",width:"280",height:"200",rx:"15",fill:"#8B5CF6",fillOpacity:"0.2",stroke:"#8B5CF6",strokeWidth:"2",children:e.jsx("animate",{attributeName:"opacity",values:"0.8;1;0.8",dur:"3s",repeatCount:"indefinite",begin:"1s"})}),e.jsx("text",{x:"620",y:"140",textAnchor:"middle",className:"text-xl font-bold fill-purple-600 dark:fill-purple-400",children:"Dual Problem"}),e.jsx("text",{x:"620",y:"170",textAnchor:"middle",className:"text-sm fill-gray-700 dark:fill-gray-300",children:"Shadow Problem"}),e.jsx("text",{x:"620",y:"200",textAnchor:"middle",className:"text-xs fill-gray-600 dark:fill-gray-400",children:"Provides Bounds"}),e.jsx("text",{x:"620",y:"225",textAnchor:"middle",className:"text-xs fill-gray-600 dark:fill-gray-400",children:"Shadow Prices"}),e.jsx("text",{x:"620",y:"250",textAnchor:"middle",className:"text-xs fill-gray-600 dark:fill-gray-400",children:"Opposite Direction"}),e.jsx("circle",{cx:"190",cy:"350",r:"40",fill:"#3B82F6",fillOpacity:"0.1",stroke:"#3B82F6",strokeWidth:"2",children:e.jsx("animate",{attributeName:"r",values:"35;45;35",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"190",y:"355",textAnchor:"middle",className:"text-xs font-semibold fill-blue-600 dark:fill-blue-400",children:"Weak Duality"}),e.jsx("circle",{cx:"620",cy:"350",r:"40",fill:"#8B5CF6",fillOpacity:"0.1",stroke:"#8B5CF6",strokeWidth:"2",children:e.jsx("animate",{attributeName:"r",values:"35;45;35",dur:"2s",repeatCount:"indefinite",begin:"1s"})}),e.jsx("text",{x:"620",y:"355",textAnchor:"middle",className:"text-xs font-semibold fill-purple-600 dark:fill-purple-400",children:"Strong Duality"}),e.jsx("line",{x1:"230",y1:"350",x2:"580",y2:"350",stroke:"#10B981",strokeWidth:"2",strokeDasharray:"5,5",children:e.jsx("animate",{attributeName:"stroke-dashoffset",values:"0;10",dur:"1s",repeatCount:"indefinite"})}),e.jsx("text",{x:"405",y:"340",textAnchor:"middle",className:"text-xs fill-green-600 dark:fill-green-400",children:"Optimal Value Equal"}),e.jsx("rect",{x:"50",y:"420",width:"700",height:"60",rx:"10",fill:"#F3F4F6","dark:fill":"#374151",fillOpacity:"0.5"}),e.jsx("circle",{cx:"100",cy:"450",r:"8",fill:"#3B82F6"}),e.jsx("text",{x:"115",y:"455",className:"text-xs fill-gray-700 dark:fill-gray-300",children:"Primal Variables"}),e.jsx("circle",{cx:"250",cy:"450",r:"8",fill:"#8B5CF6"}),e.jsx("text",{x:"265",y:"455",className:"text-xs fill-gray-700 dark:fill-gray-300",children:"Dual Variables"}),e.jsx("line",{x1:"400",y1:"445",x2:"440",y2:"455",stroke:"#10B981",strokeWidth:"2",strokeDasharray:"5,5"}),e.jsx("text",{x:"450",y:"455",className:"text-xs fill-gray-700 dark:fill-gray-300",children:"Duality Gap"})]}),e.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-300 text-center",children:e.jsx("p",{className:"leading-relaxed",children:"The diagram illustrates the relationship between primal and dual problems, showing how they are connected through transformation and provide complementary insights."})})]})]})}),e.jsx("section",{ref:a=>t.current[4]=a,"data-index":"4",className:r("transform transition-all duration-700 ease-out delay-400","motion-safe:translate-y-0 motion-safe:opacity-100",i>=4?"motion-safe:translate-y-0 motion-safe:opacity-100":"motion-safe:translate-y-8 motion-safe:opacity-0"),children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 border border-gray-200 dark:border-gray-700",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400",children:"Tips & Tricks"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-300",children:"🎯 Quick Recognition"}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 mt-1",children:'Look for the "shadow price" interpretation - dual variables always represent the marginal value of constraints.'})]}),e.jsxs("div",{className:"p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all duration-300",children:[e.jsx("h4",{className:"font-semibold text-purple-700 dark:text-purple-300",children:"💡 Duality Check"}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 mt-1",children:"Always verify that the dual problem has the correct number of variables (equal to primal constraints) and constraints (equal to primal variables)."})]}),e.jsxs("div",{className:"p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-all duration-300",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-300",children:"🔧 Practical Use"}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 mt-1",children:"Use duality to find a feasible solution for one problem when the other is easier to solve, or to prove optimality."})]}),e.jsxs("div",{className:"p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-all duration-300",children:[e.jsx("h4",{className:"font-semibold text-orange-700 dark:text-orange-300",children:"⚡ Performance Hint"}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 mt-1",children:"In large-scale problems, solving the dual (which has fewer constraints) can be computationally more efficient."})]})]}),e.jsx("div",{className:"mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500",children:e.jsxs("p",{className:"font-medium text-yellow-800 dark:text-yellow-300",children:[e.jsx("strong",{children:"🚀 Professional Tip:"})," Always check the duality gap. If the primal and dual optimal values are equal (strong duality), you've found the optimal solution. If not, there might be issues with the problem formulation."]})})]})}),e.jsx("section",{ref:a=>t.current[5]=a,"data-index":"5",className:r("transform transition-all duration-700 ease-out delay-500","motion-safe:translate-y-0 motion-safe:opacity-100",i>=5?"motion-safe:translate-y-0 motion-safe:opacity-100":"motion-safe:translate-y-8 motion-safe:opacity-0"),children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 border border-gray-200 dark:border-gray-700",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4 text-red-600 dark:text-red-400",children:"Common Mistakes"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-start space-x-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("span",{className:"text-red-500 text-xl",children:"❌"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-red-700 dark:text-red-300",children:"Wrong Problem Formulation"}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Mistaking maximization for minimization when forming the dual. Remember: The dual of a maximization problem is a minimization problem, and vice versa."})]})]}),e.jsxs("div",{className:"flex items-start space-x-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("span",{className:"text-red-500 text-xl",children:"❌"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-red-700 dark:text-red-300",children:"Incorrect Constraint Direction"}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Misplacing constraints (≥ vs ≤) when converting between primal and dual forms. Always carefully check the constraint type."})]})]}),e.jsxs("div",{className:"flex items-start space-x-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("span",{className:"text-red-500 text-xl",children:"❌"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-red-700 dark:text-red-300",children:"Variable/Constraint Mismatch"}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Forgetting that each primal constraint becomes a dual variable, and each primal variable becomes a dual constraint."})]})]}),e.jsxs("div",{className:"flex items-start space-x-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("span",{className:"text-red-500 text-xl",children:"❌"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-red-700 dark:text-red-300",children:"Missing Duality Gap"}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Not checking if the optimal values of primal and dual are equal, which indicates whether strong duality holds."})]})]})]}),e.jsx("div",{className:"mt-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500",children:e.jsxs("p",{className:"font-medium text-red-800 dark:text-red-300",children:[e.jsx("strong",{children:"⚠️ Watch Out:"})," Many students assume duality is symmetric, but it's not always the case. The dual of the dual returns to the primal only under certain conditions (e.g., convexity and regularity conditions)."]})})]})}),e.jsx("section",{ref:a=>t.current[6]=a,"data-index":"6",className:r("transform transition-all duration-700 ease-out delay-600","motion-safe:translate-y-0 motion-safe:opacity-100",i>=6?"motion-safe:translate-y-0 motion-safe:opacity-100":"motion-safe:translate-y-8 motion-safe:opacity-0"),children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 border border-gray-200 dark:border-gray-700",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400",children:"Best Practices"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-300",children:"📝 Systematic Approach"}),e.jsxs("ul",{className:"list-disc pl-4 text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Write down the primal problem clearly"}),e.jsx("li",{children:"Identify objective direction (max/min)"}),e.jsx("li",{children:"Count constraints and variables"}),e.jsx("li",{children:"Form dual systematically step by step"})]})]}),e.jsxs("div",{className:"p-4 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-300",children:"🔍 Verification"}),e.jsxs("ul",{className:"list-disc pl-4 text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Check variable count matches"}),e.jsx("li",{children:"Verify constraint count matches"}),e.jsx("li",{children:"Test with a simple feasible solution"}),e.jsx("li",{children:"Validate duality gap"})]})]}),e.jsxs("div",{className:"p-4 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-300",children:"📚 Documentation"}),e.jsxs("ul",{className:"list-disc pl-4 text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Clearly label primal and dual variables"}),e.jsx("li",{children:"Explain economic interpretation"}),e.jsx("li",{children:"Document any transformations used"}),e.jsx("li",{children:"Note assumptions made"})]})]}),e.jsxs("div",{className:"p-4 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-300",children:"🎯 Optimization Strategy"}),e.jsxs("ul",{className:"list-disc pl-4 text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Choose easier problem to solve"}),e.jsx("li",{children:"Use duality for sensitivity analysis"}),e.jsx("li",{children:"Consider complementary slackness"}),e.jsx("li",{children:"Exploit special problem structures"})]})]})]}),e.jsx("div",{className:"mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500",children:e.jsxs("p",{className:"font-medium text-blue-800 dark:text-blue-300",children:[e.jsx("strong",{children:"📌 Professional Standard:"})," Always present both primal and dual formulations in optimization papers and reports. This makes the problem easier to understand and validates the optimal solution through complementary slackness conditions."]})})]})}),e.jsx("section",{ref:a=>t.current[7]=a,"data-index":"7",className:r("transform transition-all duration-700 ease-out delay-700","motion-safe:translate-y-0 motion-safe:opacity-100",i>=7?"motion-safe:translate-y-0 motion-safe:opacity-100":"motion-safe:translate-y-8 motion-safe:opacity-0"),children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 border border-gray-200 dark:border-gray-700",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400",children:"Mini Checklist"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg",children:[e.jsx("span",{className:"text-green-500 text-xl",children:"✅"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:"Understanding Duality"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"I understand that every primal problem has a corresponding dual problem"})]})]}),e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg",children:[e.jsx("span",{className:"text-green-500 text-xl",children:"✅"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:"Dual Variables"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"I know dual variables represent shadow prices (marginal value of constraints)"})]})]}),e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg",children:[e.jsx("span",{className:"text-green-500 text-xl",children:"✅"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:"Objective Direction"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"I understand that dual takes the opposite optimization direction"})]})]}),e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg",children:[e.jsx("span",{className:"text-green-500 text-xl",children:"✅"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:"Duality Properties"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"I can explain weak and strong duality properties"})]})]}),e.jsxs("div",{className:"flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg",children:[e.jsx("span",{className:"text-green-500 text-xl",children:"✅"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:"Application"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"I can identify real-world applications of duality in decision-making"})]})]})]})]})}),e.jsx("div",{className:"mt-8",children:e.jsx(m,{note:"The concept of duality is one of the most profound ideas in optimization. When I teach this, I emphasize that the dual problem isn't just a mathematical curiosity—it's a window into understanding how constraints affect our decisions. Think of Mamata, a student in Barrackpore, who solved a transportation problem using both primal and dual formulations—she discovered that the dual provided insights about warehouse pricing that the primal didn't reveal. Remember: mastering duality transforms you from a problem solver into a strategic decision maker."})})]}),e.jsx("div",{className:"mt-12",children:e.jsx(c,{title:"Primal and Dual Problems FAQs",questions:u})}),e.jsx("div",{className:"mt-12",children:e.jsx(h,{content:p,title:"Introduction to Primal and Dual Problems",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Notes",downloadFileName:"topic0_note.txt"})})]})})};export{v as default};
