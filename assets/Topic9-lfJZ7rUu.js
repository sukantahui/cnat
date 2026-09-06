import{b as s,j as e,bg as l}from"./vendor-react-core-Doz9nIC6.js";import{T as S}from"./TeacherSukantaHui-DDN87fI5.js";import{F as A}from"./FAQTemplate-BHhlgA96.js";import{P as T}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-DEsnU7fn.js";const C=[{question:"What is the optimality condition in the Simplex Method?",shortAnswer:"The rule that determines when to stop the algorithm.",explanation:"For maximization: all Z coefficients ≥ 0. For minimization: all Z coefficients ≤ 0. When this condition is met, the current solution is optimal.",hint:"Stop condition for the algorithm.",level:"basic",codeExample:"Z row: [0, 0, 1, 1, 16] → optimal ✓"},{question:"What is the optimality condition for maximization?",shortAnswer:"All coefficients in the Z row must be ≥ 0.",explanation:"If any Z coefficient is negative, the objective can be improved by increasing that variable. Stop only when all are non-negative.",hint:"All Z ≥ 0.",level:"basic",codeExample:"Z row: [0, 2, 3, 0, 25] → optimal"},{question:"What is the optimality condition for minimization?",shortAnswer:"All coefficients in the Z row must be ≤ 0.",explanation:"If any Z coefficient is positive, the objective can be improved by increasing that variable. Stop only when all are non-positive.",hint:"All Z ≤ 0.",level:"basic",codeExample:"Z row: [0, -2, -3, 0, 25] → optimal"},{question:"What happens if a Z coefficient is negative in maximization?",shortAnswer:"The solution is not optimal; continue iterations.",explanation:"A negative Z coefficient means the corresponding variable can increase the objective value. It should enter the basis.",hint:"Not optimal, continue.",level:"intermediate",codeExample:"Z row: [0, -3, 2, 0, 18] → continue"},{question:"What happens if a Z coefficient is positive in minimization?",shortAnswer:"The solution is not optimal; continue iterations.",explanation:"A positive Z coefficient in minimization means the objective can be decreased by increasing that variable.",hint:"Not optimal, continue.",level:"intermediate",codeExample:"Z row: [0, 3, -2, 0, 18] → continue"},{question:"What do zero coefficients in the Z row indicate?",shortAnswer:"The variable doesn't affect the objective value.",explanation:"Zero coefficients mean increasing that variable doesn't change Z. This can indicate multiple optimal solutions.",hint:"No effect on Z.",level:"advanced",codeExample:"Z row: [0, 0, 0, 1, 25] → multiple optima"},{question:"Can the optimality condition be checked at any time?",shortAnswer:"Yes, after each iteration before continuing.",explanation:"The optimality condition should be checked at the end of each iteration. If met, stop. If not, perform another iteration.",hint:"Check after each iteration.",level:"intermediate",codeExample:"Check → stop or continue"},{question:"What is the difference between max and min optimality conditions?",shortAnswer:"Max: all Z ≥ 0; Min: all Z ≤ 0.",explanation:"The direction is reversed because maximization and minimization have opposite goals. Zero coefficients are allowed in both.",hint:"≥ for max, ≤ for min.",level:"basic",codeExample:"Max: [0, 2, 3, 0], Min: [0, -2, -3, 0]"},{question:"What does it mean if all Z coefficients are non-negative?",shortAnswer:"The current solution is optimal for maximization.",explanation:"No variable can improve the objective value. The Simplex Method stops.",hint:"Optimal found.",level:"basic",codeExample:"Z row: [0, 1, 2, 3, 20] → optimal"},{question:"What does it mean if all Z coefficients are non-positive?",shortAnswer:"The current solution is optimal for minimization.",explanation:"No variable can improve the objective value. The Simplex Method stops.",hint:"Optimal found.",level:"basic",codeExample:"Z row: [0, -1, -2, -3, 20] → optimal"},{question:"What if the Z row has both positive and negative coefficients?",shortAnswer:"The solution is not optimal (for either max or min).",explanation:"Mixed signs mean the solution is not optimal for maximization (negative coefficients exist) nor minimization (positive coefficients exist).",hint:"Not optimal.",level:"intermediate",codeExample:"Z row: [0, -3, 2, -1, 18] → not optimal"},{question:"How do you know which variable to enter from the Z row?",shortAnswer:"Choose the most negative (for max) or most positive (for min).",explanation:"For maximization, the most negative coefficient gives the greatest improvement. For minimization, the most positive coefficient gives the greatest reduction.",hint:"Most negative for max, most positive for min.",level:"advanced",codeExample:"Max: [-5, -3, 0, 0] → x enters (-5)"},{question:"What is the relationship between optimality and basic variables?",shortAnswer:"Optimality is checked on the Z row, not on basic variables.",explanation:"The Z row coefficients (reduced costs) determine optimality. Basic variable values only affect feasibility.",hint:"Z row determines optimality.",level:"intermediate",codeExample:"Basic variables: x=4, y=2; Z row determines optimality"},{question:"What happens if the optimality condition is met but Z is negative?",shortAnswer:"For maximization, Z should be non-negative. If Z is negative, there's an error.",explanation:"In maximization, Z represents the objective value and should be ≥ 0. Negative Z indicates a problem with the formulation or arithmetic.",hint:"Z should be ≥ 0 for max.",level:"advanced",codeExample:"Z = -5 (max) → check for errors"},{question:"What is the role of reduced costs in optimality?",shortAnswer:"They are the coefficients in the Z row.",explanation:"Reduced costs (Z row coefficients) indicate how much the objective would change if a non-basic variable entered the basis.",hint:"Z coefficients = reduced costs.",level:"advanced",codeExample:"Reduced cost = -3 means Z increases by 3 if variable enters"},{question:"Can the optimality condition be used for both max and min?",shortAnswer:"Yes, but with opposite conditions.",explanation:"The same Z row is used, but the stopping rule depends on the problem type: ≥ 0 for max, ≤ 0 for min.",hint:"Yes, but different rules.",level:"intermediate",codeExample:"Max: ≥ 0, Min: ≤ 0"},{question:"What is the significance of the optimality condition?",shortAnswer:"It proves that no better solution exists.",explanation:"The optimality condition provides a mathematical guarantee that the current solution is the best possible.",hint:"Guarantees optimality.",level:"basic",codeExample:"All Z ≥ 0 → no improvement possible"},{question:"How many times should you check the optimality condition?",shortAnswer:"After every iteration.",explanation:"Check at the end of each iteration before deciding whether to continue. This prevents unnecessary iterations.",hint:"Check every iteration.",level:"basic",codeExample:"After pivot → check optimality → stop or continue"}],O=`TOPIC 9: OPTIMALITY CONDITION\r
=============================\r
\r
INTRODUCTION\r
------------\r
The optimality condition is the rule that determines when to stop \r
the Simplex Method. It tells us when the current solution is the \r
best possible.\r
\r
WHAT IS THE OPTIMALITY CONDITION?\r
---------------------------------\r
The optimality condition checks the Z row coefficients:\r
\r
Maximization: All Z coefficients ≥ 0 → STOP\r
Minimization: All Z coefficients ≤ 0 → STOP\r
\r
If the condition is not met, continue with another iteration.\r
\r
WHY IT WORKS\r
------------\r
- Negative Z coefficient (max) means variable can increase Z\r
- Positive Z coefficient (min) means variable can decrease Z\r
- No negative/positive coefficients → no improvement possible\r
- Mathematical guarantee of optimality\r
\r
EXAMPLES\r
--------\r
Maximization Optimal:\r
Z row: [0, 2, 3, 0, 25]\r
All coefficients ≥ 0 → OPTIMAL ✓\r
\r
Maximization Not Optimal:\r
Z row: [0, -3, 2, -1, 18]\r
Negative coefficients exist → CONTINUE\r
\r
Minimization Optimal:\r
Z row: [0, -2, -3, 0, 25]\r
All coefficients ≤ 0 → OPTIMAL ✓\r
\r
Minimization Not Optimal:\r
Z row: [0, 3, -2, 1, 18]\r
Positive coefficients exist → CONTINUE\r
\r
WHAT TO CHECK\r
-------------\r
1. Problem type (max or min)\r
2. Z row coefficients\r
3. All coefficients satisfy condition\r
4. If not, find entering variable\r
\r
ZERO COEFFICIENTS\r
-----------------\r
Zero coefficients in the Z row indicate:\r
- The variable doesn't affect Z\r
- Possible multiple optimal solutions\r
- Allowed in both max and min\r
\r
COMMON MISTAKES\r
---------------\r
1. Confusing max and min conditions\r
2. Missing negative coefficients\r
3. Stopping too early\r
4. Not checking all coefficients\r
\r
BEST PRACTICES\r
--------------\r
1. Check after every iteration\r
2. Verify the problem type\r
3. Look at all coefficients\r
4. If negative remains → continue\r
5. If all satisfy → stop\r
\r
KEY TAKEAWAYS\r
------------\r
✓ Maximization: all Z ≥ 0\r
✓ Minimization: all Z ≤ 0\r
✓ Check after each iteration\r
✓ Zero coefficients are allowed\r
✓ Negative coefficients → continue\r
✓ Positive (min) → continue\r
✓ Condition proves optimality\r
\r
TEACHER'S NOTE\r
--------------\r
The optimality condition is the 'stop sign' of the Simplex Method. \r
Always check carefully - stopping too early or too late can both \r
lead to incorrect results."`,W=()=>{const[c,p]=s.useState("concept"),[x,g]=s.useState({}),[m,f]=s.useState(null),[h,b]=s.useState(null),u=[{id:"concept",label:"Concept"},{id:"examples",label:"Examples"},{id:"practice",label:"Practice"}],y=[{id:1,title:"Example 1: Optimal Solution Found",problem:`Check optimality of the tableau:
┌─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ s₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  x  │  1  │  0  │ 0.5 │ -0.5│  4  │
│  y  │  0  │  1  │-0.5 │ 0.5 │  2  │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │  0  │  0  │  1  │  1  │ 16  │
└─────┴─────┴─────┴─────┴─────┴─────┘

Is this optimal?`,solution:"Yes, optimal. All Z coefficients are ≥ 0 (0, 0, 1, 1).",detailedSolution:`Step 1: Check Z row coefficients
Z row: [0, 0, 1, 1, 16]

Step 2: Apply optimality condition
For maximization: All Z coefficients must be ≥ 0
Coefficients: 0 ≥ 0 ✓, 0 ≥ 0 ✓, 1 ≥ 0 ✓, 1 ≥ 0 ✓

Step 3: Conclusion
All coefficients are non-negative → OPTIMAL

Step 4: Read solution
Basic variables: x = 4, y = 2
Z = 16`},{id:2,title:"Example 2: Not Yet Optimal",problem:`Check optimality of the tableau:
┌─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ s₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  x  │  1  │ 0.5 │ 0.5 │  0  │  5  │
│ s₂  │  0  │ 1.5 │-0.5 │  1  │  3  │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │  0  │-0.5 │ 1.5 │  0  │ 15  │
└─────┴─────┴─────┴─────┴─────┴─────┘

Is this optimal?`,solution:"Not optimal. Negative coefficient -0.5 in Z row (column y).",detailedSolution:`Step 1: Check Z row coefficients
Z row: [0, -0.5, 1.5, 0, 15]

Step 2: Apply optimality condition
For maximization: All Z coefficients must be ≥ 0
Coefficients: 0 ≥ 0 ✓, -0.5 ≥ 0 ✗, 1.5 ≥ 0 ✓, 0 ≥ 0 ✓

Step 3: Conclusion
Negative coefficient found (-0.5 at column y)
→ NOT OPTIMAL

Step 4: Next step
y should enter the basis (most negative coefficient)`},{id:3,title:"Example 3: Minimization Optimality",problem:`Check optimality of the tableau for minimization:
┌─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ s₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  x  │  1  │  0  │ 0.5 │ -0.5│  4  │
│  y  │  0  │  1  │-0.5 │ 0.5 │  2  │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │  0  │  0  │  1  │  1  │ 16  │
└─────┴─────┴─────┴─────┴─────┴─────┘

This is for minimization. Is it optimal?`,solution:"For minimization, check if all Z coefficients are ≤ 0. Here they are ≥ 0, so not optimal.",detailedSolution:`Step 1: Identify problem type
This is a minimization problem.

Step 2: Apply optimality condition
For minimization: All Z coefficients must be ≤ 0
Z row: [0, 0, 1, 1, 16]
Coefficients: 0 ≤ 0 ✓, 0 ≤ 0 ✓, 1 ≤ 0 ✗, 1 ≤ 0 ✗

Step 3: Conclusion
Positive coefficients found (1, 1)
→ NOT OPTIMAL

Step 4: Note
For minimization, the optimality condition is reversed:
- Maximization: all Z ≥ 0
- Minimization: all Z ≤ 0`},{id:4,title:"Example 4: Real-World Optimality Check",problem:`A factory production problem tableau:
┌─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ s₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  y  │ 2/3 │  1  │ 1/3 │  0  │ 40  │
│ s₂  │ 5/3 │  0  │-2/3 │  1  │ 10  │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │-20/3│  0  │50/3 │  0  │2000 │
└─────┴─────┴─────┴─────┴─────┴─────┘

Is this optimal? If not, what should be done?`,solution:"Not optimal. Z has -20/3 in x column. x should enter the basis.",detailedSolution:`Step 1: Check Z row coefficients
Z row: [-20/3, 0, 50/3, 0, 2000]

Step 2: Apply optimality condition
For maximization: All Z coefficients must be ≥ 0
-20/3 ≥ 0 ✗ (negative)

Step 3: Conclusion
Negative coefficient in x column
→ NOT OPTIMAL

Step 4: Next step
x should enter the basis (most negative coefficient: -20/3)
Use ratio test to find leaving variable

Step 5: Interpretation
Producing more chairs (x) would increase profit
Need to continue iterations`}],v=[{id:1,title:"Check Optimality",problem:`Z row: [0, 2, 3, 0, 25]
Is this optimal for maximization?`,hint:"Check if all coefficients in Z row are ≥ 0.",solution:"Yes, optimal. All Z coefficients ≥ 0."},{id:2,title:"Optimality for Minimization",problem:`Z row: [0, -1, -2, 0, 12]
Is this optimal for minimization?`,hint:"For minimization, check if all coefficients are ≤ 0.",solution:"Yes, optimal for minimization. All Z coefficients ≤ 0."},{id:3,title:"Identify Entering Variable",problem:`Z row: [0, -3, 2, -1, 18]
Which variable should enter for maximization?`,hint:"Find the most negative coefficient in the Z row.",solution:"y enters (coefficient -3 is most negative)."}],j=t=>{g(r=>({...r,[t]:!r[t]}))},N=()=>{const[t,r]=s.useState("max"),[i,w]=s.useState([0,-3,-2,0,0,0]),k=["x","y","s₁","s₂","RHS"],o=(()=>{const n=i.slice(0,-1);return t==="max"?n.every(a=>a>=0):n.every(a=>a<=0)})(),Z=(n,a)=>{const d=[...i];d[n]=Number(a),w(d)};return e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4",children:"Interactive Optimality Checker"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1",children:"Problem Type"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>r("max"),className:l("px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300",t==="max"?"bg-blue-600 text-white":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"),children:"Maximization"}),e.jsx("button",{onClick:()=>r("min"),className:l("px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300",t==="min"?"bg-blue-600 text-white":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"),children:"Minimization"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Z Row Coefficients:"}),i.slice(0,-1).map((n,a)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"text-sm font-mono text-gray-600 dark:text-gray-400 w-8",children:[k[a],":"]}),e.jsx("input",{type:"number",value:n,onChange:d=>Z(a,d.target.value),className:"w-20 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"})]},a)),e.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[e.jsx("span",{className:"text-sm font-mono text-gray-600 dark:text-gray-400",children:"RHS:"}),e.jsx("span",{className:"text-sm font-mono text-gray-800 dark:text-gray-200",children:i[i.length-1]})]})]})]}),e.jsx("div",{children:e.jsxs("div",{className:l("rounded-lg p-4 border-l-4",o?"bg-green-50 dark:bg-green-900/20 border-green-500":"bg-red-50 dark:bg-red-900/20 border-red-500"),children:[e.jsx("h5",{className:l("font-semibold mb-2",o?"text-green-700 dark:text-green-400":"text-red-700 dark:text-red-400"),children:o?"✅ Optimal Solution":"❌ Not Optimal"}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:t==="max"?"Condition: All Z coefficients ≥ 0":"Condition: All Z coefficients ≤ 0"}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300 mt-2",children:["Z row: [",i.slice(0,-1).join(", "),", ",i[i.length-1],"]"]}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300 mt-2",children:["Status: ",o?"Optimal reached ✓":"Continue iterations →"]}),!o&&t==="max"&&e.jsxs("p",{className:"text-sm text-red-600 dark:text-red-400 mt-2",children:["Negative coefficients found: ",i.slice(0,-1).filter(n=>n<0).join(", ")]}),!o&&t==="min"&&e.jsxs("p",{className:"text-sm text-red-600 dark:text-red-400 mt-2",children:["Positive coefficients found: ",i.slice(0,-1).filter(n=>n>0).join(", ")]})]})})]})]})};return e.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[e.jsxs("div",{className:"text-center mb-10",children:[e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-all duration-300",children:"Optimality Condition"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto",children:"Learn how to determine when the Simplex Method has reached the optimal solution using the optimality condition."})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 justify-center border-b border-gray-200 dark:border-gray-700 pb-4",children:u.map(t=>e.jsx("button",{onClick:()=>p(t.id),className:l("px-6 py-2 rounded-lg font-medium transition-all duration-300",c===t.id?"bg-green-600 text-white shadow-lg shadow-green-200 dark:shadow-green-900/30":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-md"),children:t.label},t.id))}),e.jsxs("div",{className:"space-y-8",children:[c==="concept"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"What is the Optimality Condition?"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 leading-relaxed mb-4",children:"The optimality condition is the rule that tells us when to stop the Simplex Method. For maximization problems, the solution is optimal when all coefficients in the Z row are non-negative (≥ 0). For minimization problems, the solution is optimal when all coefficients in the Z row are non-positive (≤ 0). When this condition is met, no further improvement is possible."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Key Concepts"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Maximization: all Z coefficients ≥ 0"}),e.jsx("li",{children:"Minimization: all Z coefficients ≤ 0"}),e.jsx("li",{children:"Stops the algorithm"}),e.jsx("li",{children:"Confirms optimality"})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Why It Matters"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Prevents unnecessary iterations"}),e.jsx("li",{children:"Confirms optimal solution"}),e.jsx("li",{children:"Proves no better solution exists"}),e.jsx("li",{children:"Mathematical guarantee"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center",children:"Optimality Conditions Summary"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Maximization"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"Condition:"})," All Z coefficients ≥ 0"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"Meaning:"})," No variable can improve Z"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"Action:"})," Stop - optimal found"]})]}),e.jsx("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:"Z row: [0, 2, 3, 0, 25] → Optimal ✓"})]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Minimization"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"Condition:"})," All Z coefficients ≤ 0"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"Meaning:"})," No variable can improve Z"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"Action:"})," Stop - optimal found"]})]}),e.jsx("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:"Z row: [0, -2, -3, 0, 25] → Optimal ✓"})]})]})]}),e.jsx(N,{}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"💡 Tips & Tricks for Checking Optimality"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h4",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"Professional Tips"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Check Z row after every iteration"}),e.jsx("li",{children:"Remember the direction (max vs min)"}),e.jsx("li",{children:"Zero coefficients are allowed"}),e.jsx("li",{children:"If negative remains, continue"})]})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500",children:[e.jsx("h4",{className:"font-semibold text-purple-700 dark:text-purple-400 mb-2",children:"Common Mistakes"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Confusing max and min conditions"}),e.jsx("li",{children:"Missing negative coefficients"}),e.jsx("li",{children:"Stopping too early"}),e.jsx("li",{children:"Not checking all coefficients"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"✅ Mini Checklist"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Problem type identified (max/min)"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Z row coefficients checked"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"All coefficients satisfy condition"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Optimal solution confirmed"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Solution values read correctly"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Optimal Z value correct"})]})]})]})]}),c==="examples"&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"space-y-6",children:y.map(t=>e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-bold text-gray-800 dark:text-gray-200 mb-3",children:t.title}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h5",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Problem"}),e.jsx("pre",{className:"text-xs font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.problem})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h5",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Result"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.solution})]})]}),e.jsx("div",{className:"mt-4 flex justify-center",children:e.jsx("button",{onClick:()=>j(t.id),className:"px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300",children:x[t.id]?"Hide Detailed Steps":"Show Detailed Steps"})}),x[t.id]&&e.jsxs("div",{className:"mt-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h5",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"📝 Detailed Steps"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.detailedSolution})]})]},`example-${t.id}`))})}),c==="practice"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center",children:"Practice Problems"}),e.jsx("div",{className:"space-y-6",children:v.map(t=>e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 transition-all duration-300 hover:shadow-md",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:t.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:t.problem}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>f(m===t.id?null:t.id),className:"px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-all duration-300",children:m===t.id?"Hide Solution":"Check Solution"}),e.jsx("button",{onClick:()=>b(h===t.id?null:t.id),className:"px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300",children:h===t.id?"Hide Hint":"Show Hint"})]}),h===t.id&&e.jsx("div",{className:"mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800",children:e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"💡 Hint:"})," ",t.hint]})}),m===t.id&&e.jsx("div",{className:"mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800",children:e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:t.solution})})]},t.id))})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"💡 Tips for Checking Optimality"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Maximization:"})," All Z coefficients ≥ 0"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Minimization:"})," All Z coefficients ≤ 0"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Zero coefficients:"})," Allowed, may indicate multiple optima"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Negative coefficients:"})," Continue iterations"]})]})]})]})]}),e.jsx("div",{className:"mt-12",children:e.jsx(A,{title:"Optimality Condition FAQs",questions:C})}),e.jsx("div",{className:"mt-8",children:e.jsx(T,{content:O,title:"Optimality Condition",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Note",downloadFileName:"topic9_note.txt"})}),e.jsx("div",{className:"mt-8",children:e.jsx(S,{note:"The optimality condition is the 'stop sign' of the Simplex Method. I tell my students that checking optimality is like checking if you've reached the top of a hill - if you can still go up, you keep going. The condition is simple but powerful: for maximization, if any Z coefficient is negative, there's still room for improvement. I encourage students to always check optimality carefully - stopping too early or too late can both lead to incorrect results."})})]})})};export{W as default};
