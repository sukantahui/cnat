import{b as r,j as e,bg as x}from"./vendor-react-core-Doz9nIC6.js";import{T as C}from"./TeacherSukantaHui-ObIX4NbR.js";import{F as M}from"./FAQTemplate-CkSqDH4B.js";import{P as F}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-CbUXUJ65.js";const H=[{question:"What is a pivot element in the Simplex Method?",shortAnswer:"The element at the intersection of the entering column and leaving row.",explanation:"The pivot element is the key number used to transform the tableau. It must be positive and is used in row operations to exchange variables.",hint:"Intersection of entering column and leaving row.",level:"intermediate",codeExample:"Pivot = 2 at (s₁, x) in the tableau"},{question:"Why must the pivot element be positive?",shortAnswer:"To maintain feasibility of the basic solution.",explanation:"A positive pivot ensures that the ratio test gives a valid leaving variable and the new solution remains non-negative.",hint:"Positive for feasibility.",level:"advanced",codeExample:"Pivot = 2 (positive) → valid"},{question:"How do you find the pivot element?",shortAnswer:"Find entering variable (most negative Z), then leaving variable (min ratio), pivot is at their intersection.",explanation:"Step 1: Entering variable from Z row. Step 2: Leaving variable from ratio test. Step 3: Pivot is coefficient at intersection.",hint:"Entering column + leaving row.",level:"intermediate",codeExample:"Pivot = 2 at row s₁, column x"},{question:"What is the first step in a pivot operation?",shortAnswer:"Divide the pivot row by the pivot element to make it 1.",explanation:"Normalizing the pivot row makes the pivot element 1, which simplifies subsequent row operations.",hint:"Make pivot = 1.",level:"intermediate",codeExample:"Row ÷ pivot → pivot becomes 1"},{question:"What is the second step in a pivot operation?",shortAnswer:"Eliminate the pivot column in all other rows.",explanation:"Use row operations to make all other entries in the pivot column zero, creating an identity column.",hint:"Make pivot column identity.",level:"intermediate",codeExample:"Row = Row - (coeff) × Pivot Row"},{question:"What happens to the Z row during a pivot operation?",shortAnswer:"The Z row is updated using the same row operation.",explanation:"Apply the same elimination operation to the Z row to maintain the relationship between variables and the objective.",hint:"Z row updated too.",level:"advanced",codeExample:"Z = Z - (Z coeff) × Pivot Row"},{question:"What happens to the basic variables after a pivot?",shortAnswer:"The leaving variable is replaced by the entering variable.",explanation:"The entering variable becomes basic and the leaving variable becomes non-basic. This exchange is recorded in the B column.",hint:"Exchange variables.",level:"intermediate",codeExample:"B: s₁ → x (s₁ leaves, x enters)"},{question:"What if the pivot element is zero?",shortAnswer:"The ratio test would not select that row.",explanation:"A zero pivot means the entering variable has no effect on that constraint. The ratio test only considers positive coefficients.",hint:"Zero not used.",level:"advanced",codeExample:"Coefficient = 0 → ignore in ratio test"},{question:"What if the pivot element is negative?",shortAnswer:"It cannot be used as a pivot.",explanation:"A negative pivot would make the basic variable negative, violating feasibility. Only positive pivots are valid.",hint:"Negative not valid.",level:"advanced",codeExample:"Pivot = -2 → invalid"},{question:"What is the role of the pivot element in row operations?",shortAnswer:"It is used to transform the tableau and exchange variables.",explanation:"The pivot element is the focus of row operations that make it 1 and all other entries in its column 0.",hint:"Focus of row operations.",level:"intermediate",codeExample:"Make pivot = 1, column = identity"},{question:"What does a completed pivot operation achieve?",shortAnswer:"A new basic feasible solution with improved objective value.",explanation:"After a pivot operation, the entering variable is in the basis, the leaving variable is out, and the objective value has improved.",hint:"New improved solution.",level:"intermediate",codeExample:"New basic variables: x, s₂; Z increased"},{question:"How many pivot operations are typically needed?",shortAnswer:"Until all Z row coefficients are non-negative (for maximization).",explanation:"The number of pivots depends on the problem size. Each pivot moves to a better corner point until optimality is reached.",hint:"Until optimality.",level:"intermediate",codeExample:"Usually 2-5 pivots for small problems"},{question:"What is the significance of the pivot element's value?",shortAnswer:"It determines how much the entering variable increases.",explanation:"The pivot value determines the step size for the entering variable. A larger pivot means a smaller increase.",hint:"Determines step size.",level:"advanced",codeExample:"Pivot = 2 → x increases by 5"},{question:"Can the pivot element be non-integer?",shortAnswer:"Yes, pivots can be fractional.",explanation:"After row operations, pivot elements can become fractions. The Simplex Method handles fractional values.",hint:"Fractions are fine.",level:"intermediate",codeExample:"Pivot = 0.5 (fractional)"},{question:"What is the relationship between pivot and ratio test?",shortAnswer:"The ratio test determines which row becomes the pivot row.",explanation:"The ratio test finds the leaving variable, which determines the pivot row. The pivot column is determined by the entering variable.",hint:"Ratio test → pivot row.",level:"intermediate",codeExample:"Min ratio → leaving row → pivot row"},{question:"What happens if two rows have the same minimum ratio?",shortAnswer:"Either row can be chosen (tie-breaking).",explanation:"Ties in the ratio test can lead to degeneracy. Use a consistent tie-breaking rule like choosing the first row.",hint:"Tie-breaking needed.",level:"advanced",codeExample:"Both rows give ratio 5 → tie"},{question:"What is the impact of a bad pivot choice?",shortAnswer:"It could lead to cycling or incorrect results.",explanation:"Choosing the wrong pivot (e.g., negative or zero) would violate feasibility. Ties without proper handling could cause cycling.",hint:"Bad pivot = wrong results.",level:"advanced",codeExample:"Choosing negative pivot → infeasible"},{question:"How do you verify a correct pivot operation?",shortAnswer:"Check that the pivot column is an identity column.",explanation:"After the pivot operation, verify that the pivot column has a 1 at the pivot row and 0s everywhere else.",hint:"Check identity column.",level:"intermediate",codeExample:"Pivot column: [0, 1, 0]ᵀ"}],U=`TOPIC 7: PIVOT ELEMENT\r
======================\r
\r
INTRODUCTION\r
------------\r
The pivot element is the key number in the simplex tableau that \r
enables the exchange of entering and leaving variables. It is \r
the focus of row operations in each iteration.\r
\r
WHAT IS A PIVOT ELEMENT?\r
------------------------\r
The pivot element is:\r
- Located at the intersection of the entering column and leaving row\r
- Must be positive\r
- Used to transform the tableau\r
- Enables variable exchange\r
\r
HOW TO FIND THE PIVOT\r
---------------------\r
Step 1: Find entering variable\r
- Look at Z row\r
- Most negative coefficient (maximization)\r
\r
Step 2: Find leaving variable\r
- Use ratio test\r
- Smallest positive RHS/coefficient\r
\r
Step 3: Identify pivot element\r
- Coefficient at intersection of entering column and leaving row\r
\r
PIVOT OPERATION\r
---------------\r
Step 1: Normalize Pivot Row\r
- Divide entire pivot row by pivot element\r
- Pivot becomes 1\r
\r
Step 2: Eliminate Pivot Column\r
- Make all other entries in pivot column zero\r
- Row = Row - (coefficient) × Pivot Row\r
\r
Step 3: Update Z Row\r
- Apply same operation to Z row\r
\r
Step 4: Update Basic Variables\r
- Replace leaving variable with entering variable in B column\r
\r
EXAMPLE\r
-------\r
Tableau:\r
┌─────┬─────┬─────┬─────┬─────┬─────┐\r
│  B  │  x  │  y  │ s₁  │ s₂  │ RHS │\r
├─────┼─────┼─────┼─────┼─────┼─────┤\r
│ s₁  │  2  │  1  │  1  │  0  │ 10  │\r
│ s₂  │  1  │  2  │  0  │  1  │  8  │\r
├─────┼─────┼─────┼─────┼─────┼─────┤\r
│  Z  │ -3  │ -2  │  0  │  0  │  0  │\r
└─────┴─────┴─────┴─────┴─────┴─────┘\r
\r
Pivot Element:\r
- Entering: x (-3)\r
- Leaving: s₁ (min ratio 5)\r
- Pivot: 2 (s₁, x)\r
\r
After Pivot:\r
┌─────┬─────┬─────┬─────┬─────┬─────┐\r
│  B  │  x  │  y  │ s₁  │ s₂  │ RHS │\r
├─────┼─────┼─────┼─────┼─────┼─────┤\r
│  x  │  1  │ 0.5 │ 0.5 │  0  │  5  │\r
│ s₂  │  0  │ 1.5 │-0.5 │  1  │  3  │\r
├─────┼─────┼─────┼─────┼─────┼─────┤\r
│  Z  │  0  │-0.5 │ 1.5 │  0  │ 15  │\r
└─────┴─────┴─────┴─────┴─────┴─────┘\r
\r
KEY RULES\r
---------\r
1. Pivot must be positive\r
2. Normalize pivot row first\r
3. Eliminate pivot column\r
4. Update Z row\r
5. Update basic variables\r
\r
COMMON MISTAKES\r
---------------\r
1. Using non-positive pivot\r
2. Incorrect row operations\r
3. Forgetting to update Z row\r
4. Not updating basic variables\r
\r
BEST PRACTICES\r
--------------\r
1. Check pivot positivity\r
2. Use exact fractions\r
3. Verify row operations\r
4. Confirm pivot column is identity\r
\r
TEACHER'S NOTE\r
--------------\r
The pivot element is the engine of the Simplex Method. Finding the \r
pivot correctly and performing row operations carefully is essential \r
for success."`,V=()=>{const[d,w]=r.useState("concept"),[p,f]=r.useState({}),[m,j]=r.useState(null),[h,k]=r.useState(null),N=[{id:"concept",label:"Concept"},{id:"examples",label:"Examples"},{id:"practice",label:"Practice"}],S=[{id:1,title:"Example 1: Basic Pivot Element",problem:`Given the tableau:
┌─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ s₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┤
│ s₁  │  2  │  1  │  1  │  0  │ 10  │
│ s₂  │  1  │  2  │  0  │  1  │  8  │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │ -3  │ -2  │  0  │  0  │  0  │
└─────┴─────┴─────┴─────┴─────┴─────┘

Identify the pivot element.`,solution:`Entering: x (most negative -3)
Leaving: s₁ (min ratio 10/2=5)
Pivot: 2 (row s₁, column x)`,detailedSolution:`Step 1: Identify entering variable
Z row: [-3, -2, 0, 0]
Most negative: -3 → x enters

Step 2: Identify leaving variable
Ratio test:
s₁: 10/2 = 5
s₂: 8/1 = 8
Minimum: 5 → s₁ leaves

Step 3: Find pivot element
Pivot is at intersection of leaving row and entering column
Row: s₁, Column: x
Pivot element: 2

Step 4: Verify
Pivot is positive (2 > 0)`},{id:2,title:"Example 2: Pivot with Different Values",problem:`Given the tableau:
┌─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ s₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┤
│ s₁  │  3  │  1  │  1  │  0  │ 15  │
│ s₂  │  2  │  4  │  0  │  1  │ 20  │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │ -5  │ -6  │  0  │  0  │  0  │
└─────┴─────┴─────┴─────┴─────┴─────┘

Find the pivot element.`,solution:`Entering: y (most negative -6)
Leaving: s₂ (min ratio 20/4=5)
Pivot: 4 (row s₂, column y)`,detailedSolution:`Step 1: Identify entering variable
Z row: [-5, -6, 0, 0]
Most negative: -6 → y enters

Step 2: Identify leaving variable
Ratio test:
s₁: 15/1 = 15
s₂: 20/4 = 5
Minimum: 5 → s₂ leaves

Step 3: Find pivot element
Row: s₂, Column: y
Pivot element: 4

Step 4: Interpretation
Pivot = 4 means to make y basic, divide row s₂ by 4`},{id:3,title:"Example 3: Pivot Row Operations",problem:`Using the pivot element from Example 1 (pivot = 2 at row s₁, column x),
perform the pivot operation to transform the tableau.`,solution:`New tableau after pivot:
┌─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ s₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  x  │  1  │ 0.5 │ 0.5 │  0  │  5  │
│ s₂  │  0  │ 1.5 │-0.5 │  1  │  3  │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │  0  │-0.5 │ 1.5 │  0  │ 15  │
└─────┴─────┴─────┴─────┴─────┴─────┘`,detailedSolution:`Step 1: Identify pivot
Pivot = 2 at (s₁, x)

Step 2: Make pivot 1 (divide pivot row by 2)
Row 1: [2, 1, 1, 0, 10] ÷ 2
→ [1, 0.5, 0.5, 0, 5]

Step 3: Eliminate pivot column in other rows
Row 2 (s₂): [1, 2, 0, 1, 8] - 1 × Row 1
→ [0, 1.5, -0.5, 1, 3]

Step 4: Update Z row
Z row: [-3, -2, 0, 0, 0] + 3 × Row 1
→ [0, -0.5, 1.5, 0, 15]

Step 5: New basic variables
x = 5, s₂ = 3, Z = 15`},{id:4,title:"Example 4: Real-World Pivot Operation",problem:`A factory produces chairs (x) and tables (y). Current tableau:
┌─────┬─────┬─────┬─────┬─────┬─────┐
│  B  │  x  │  y  │ s₁  │ s₂  │ RHS │
├─────┼─────┼─────┼─────┼─────┼─────┤
│ s₁  │  2  │  3  │  1  │  0  │ 120 │
│ s₂  │  3  │  2  │  0  │  1  │ 90  │
├─────┼─────┼─────┼─────┼─────┼─────┤
│  Z  │ -40 │ -50 │  0  │  0  │  0  │
└─────┴─────┴─────┴─────┴─────┴─────┘

Perform the pivot operation.`,solution:`Pivot: y enters (most negative -50), s₁ leaves (min ratio 120/3=40)
Pivot element: 3`,detailedSolution:`Step 1: Identify entering variable
Z row: [-40, -50, 0, 0]
Most negative: -50 → y enters

Step 2: Identify leaving variable
Ratio test:
s₁: 120/3 = 40
s₂: 90/2 = 45
Minimum: 40 → s₁ leaves

Step 3: Pivot element
Pivot = 3 at (s₁, y)

Step 4: Make pivot 1
Row 1: [2, 3, 1, 0, 120] ÷ 3
→ [2/3, 1, 1/3, 0, 40]

Step 5: Eliminate pivot column
Row 2: [3, 2, 0, 1, 90] - 2 × Row 1
→ [5/3, 0, -2/3, 1, 10]

Step 6: Update Z row
Z: [-40, -50, 0, 0, 0] + 50 × Row 1
→ [-20/3, 0, 50/3, 0, 2000]

Step 7: New tableau
New basic: y = 40, s₂ = 10, Z = 2000`}],P=[{id:1,title:"Find the Pivot Element",problem:`Tableau:
B | x | y | s₁ | s₂ | RHS
s₁| 2 | 1 | 1 | 0 | 6
s₂| 4 | 3 | 0 | 1 | 12
Z |-3 |-5 | 0 | 0 | 0

Find the pivot element.`,hint:"Find entering variable (most negative Z), then leaving variable (min ratio).",solution:`Entering: y (-5), Leaving: s₁ (6/1=6, 12/3=4 → s₂ leaves)
Pivot: 3 (row s₂, column y)`},{id:2,title:"Perform Pivot Operation",problem:`Using the pivot element from Problem 1 (pivot = 3 at row s₂, column y),
perform the pivot operation to transform the tableau.`,hint:"Divide pivot row by 3, then eliminate other rows.",solution:`After pivot:
B | x | y | s₁ | s₂ | RHS
s₁| 0.67 | 0 | 1 | -0.33 | 2
y | 1.33 | 1 | 0 | 0.33 | 4
Z | 3.67 | 0 | 0 | 1.67 | 20`},{id:3,title:"Complete Pivot Selection",problem:`Tableau:
B | x | y | s₁ | s₂ | RHS
s₁| 3 | 2 | 1 | 0 | 18
s₂| 1 | 4 | 0 | 1 | 16
Z |-4 |-6 | 0 | 0 | 0

Find pivot element and perform pivot operation.`,hint:"Entering variable: y (-6). Leaving variable: min ratio test.",solution:`Pivot: 4 (row s₂, column y)
After pivot: new basic variables: s₁ = 10, y = 4, Z = 24`}],E=t=>{f(g=>({...g,[t]:!g[t]}))},T=()=>{const[t,g]=r.useState({rows:[{basic:"s₁",coefficients:[2,1,1,0],rhs:10},{basic:"s₂",coefficients:[1,2,0,1],rhs:8}],zRow:[-3,-2,0,0,0]}),[o,R]=r.useState(null),[l,Z]=r.useState(null),[v,A]=r.useState(null),I=()=>{let n=0,i=-1;for(let a=0;a<t.zRow.length-1;a++)t.zRow[a]<n&&(n=t.zRow[a],i=a);if(i===-1)return;let c=1/0,s=-1;for(let a=0;a<t.rows.length;a++){const u=t.rows[a].coefficients[i];if(u>0){const y=t.rows[a].rhs/u;y<c&&(c=y,s=a)}}s!==-1&&(R(s),Z(i),A(t.rows[s].coefficients[i]))},b=["x","y","s₁","s₂"];return e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4",children:"Interactive Pivot Element Visualizer"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs font-mono",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-gray-600 dark:text-gray-400",children:[e.jsx("th",{className:"px-2 py-1 border dark:border-gray-600",children:"B"}),e.jsx("th",{className:"px-2 py-1 border dark:border-gray-600",children:"x"}),e.jsx("th",{className:"px-2 py-1 border dark:border-gray-600",children:"y"}),e.jsx("th",{className:"px-2 py-1 border dark:border-gray-600",children:"s₁"}),e.jsx("th",{className:"px-2 py-1 border dark:border-gray-600",children:"s₂"}),e.jsx("th",{className:"px-2 py-1 border dark:border-gray-600",children:"RHS"})]})}),e.jsxs("tbody",{children:[t.rows.map((n,i)=>e.jsxs("tr",{className:o===i?"bg-red-100 dark:bg-red-900/30":"",children:[e.jsx("td",{className:"px-2 py-1 border dark:border-gray-600 font-medium",children:n.basic}),n.coefficients.map((c,s)=>e.jsx("td",{className:x("px-2 py-1 border dark:border-gray-600 text-center",o===i&&l===s&&"bg-yellow-300 dark:bg-yellow-600 font-bold text-black"),children:c},s)),e.jsx("td",{className:"px-2 py-1 border dark:border-gray-600 text-center",children:n.rhs})]},i)),e.jsxs("tr",{className:"bg-yellow-50 dark:bg-yellow-900/20",children:[e.jsx("td",{className:"px-2 py-1 border dark:border-gray-600 font-medium",children:"Z"}),t.zRow.map((n,i)=>e.jsx("td",{className:x("px-2 py-1 border dark:border-gray-600 text-center",l===i&&"bg-green-100 dark:bg-green-900/30"),children:n},i)),e.jsx("td",{className:"px-2 py-1 border dark:border-gray-600 text-center",children:"0"})]})]})]})}),e.jsx("button",{onClick:I,className:"mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 w-full",children:"Find Pivot Element"})]}),e.jsx("div",{children:o!==null&&l!==null&&v!==null&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500 mb-3",children:[e.jsx("h5",{className:"font-semibold text-green-700 dark:text-green-400",children:"Entering Variable"}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[b[l]," enters the basis"]})]}),e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500 mb-3",children:[e.jsx("h5",{className:"font-semibold text-red-700 dark:text-red-400",children:"Leaving Variable"}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[t.rows[o].basic," leaves the basis"]})]}),e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h5",{className:"font-semibold text-yellow-700 dark:text-yellow-400",children:"Pivot Element"}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:["Value: ",e.jsx("span",{className:"font-bold text-lg",children:v})]}),e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:["Location: Row ",t.rows[o].basic,", Column ",b[l]]})]})]})})]})]})};return e.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[e.jsxs("div",{className:"text-center mb-10",children:[e.jsx("h1",{className:"text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-all duration-300",children:"Pivot Element"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto",children:"Learn about the pivot element, its identification, and its crucial role in transforming the simplex tableau during each iteration."})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 justify-center border-b border-gray-200 dark:border-gray-700 pb-4",children:N.map(t=>e.jsx("button",{onClick:()=>w(t.id),className:x("px-6 py-2 rounded-lg font-medium transition-all duration-300",d===t.id?"bg-yellow-600 text-white shadow-lg shadow-yellow-200 dark:shadow-yellow-900/30":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-md"),children:t.label},t.id))}),e.jsxs("div",{className:"space-y-8",children:[d==="concept"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"What is a Pivot Element?"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 leading-relaxed mb-4",children:"The pivot element is the key number in the simplex tableau that determines how the entering and leaving variables are exchanged. It is located at the intersection of the entering variable's column and the leaving variable's row. The pivot element must be positive and is used in row operations to transform the tableau."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h4",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Key Properties"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Intersection of entering column and leaving row"}),e.jsx("li",{children:"Must be positive"}),e.jsx("li",{children:"Used in row operations"}),e.jsx("li",{children:"Determines the exchange of variables"})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h4",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Why It Matters"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Enables variable exchange"}),e.jsx("li",{children:"Transforms the tableau"}),e.jsx("li",{children:"Improves objective value"}),e.jsx("li",{children:"Maintains feasibility"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"How to Find the Pivot Element"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg",children:[e.jsx("div",{className:"text-4xl mb-2",children:"📊"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Step 1"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Find entering variable (most negative Z coefficient)"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg",children:[e.jsx("div",{className:"text-4xl mb-2",children:"📏"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Step 2"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Find leaving variable (minimum ratio test)"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg",children:[e.jsx("div",{className:"text-4xl mb-2",children:"🎯"}),e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:"Step 3"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Pivot = coefficient at intersection"})]})]})]}),e.jsx(T,{}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"Steps for Pivot Operation"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Step 1: Normalize Pivot Row"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Divide entire pivot row by the pivot element to make it 1."}),e.jsx("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:"Row ÷ pivot → pivot becomes 1"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Step 2: Eliminate Pivot Column"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Make all other entries in the pivot column zero."}),e.jsx("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:"Row = Row - (coefficient) × Pivot Row"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Step 3: Update Z Row"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Apply the same operation to the Z row."}),e.jsx("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:"Z = Z - (Z coefficient) × Pivot Row"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Step 4: Update Basic Variables"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Replace leaving variable with entering variable in B column."}),e.jsx("div",{className:"mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded",children:"B: s₁ → x"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"💡 Tips & Tricks for Pivot Operations"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h4",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"Professional Tips"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Always check pivot is positive"}),e.jsx("li",{children:"Use exact fractions for accuracy"}),e.jsx("li",{children:"Verify row operations carefully"}),e.jsx("li",{children:"Check pivot column becomes identity"})]})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500",children:[e.jsx("h4",{className:"font-semibold text-purple-700 dark:text-purple-400 mb-2",children:"Common Mistakes"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"Using non-positive pivot"}),e.jsx("li",{children:"Incorrect row operations"}),e.jsx("li",{children:"Forgetting to update Z row"}),e.jsx("li",{children:"Not updating basic variables"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"✅ Mini Checklist"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Entering variable identified"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Leaving variable identified"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Pivot element is positive"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Pivot row normalized correctly"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Pivot column eliminated"})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Basic variables updated"})]})]})]})]}),d==="examples"&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"space-y-6",children:S.map(t=>e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h4",{className:"text-lg font-bold text-gray-800 dark:text-gray-200 mb-3",children:t.title}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500",children:[e.jsx("h5",{className:"font-semibold text-blue-700 dark:text-blue-400 mb-2",children:"Problem"}),e.jsx("pre",{className:"text-xs font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.problem})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500",children:[e.jsx("h5",{className:"font-semibold text-green-700 dark:text-green-400 mb-2",children:"Solution"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.solution})]})]}),e.jsx("div",{className:"mt-4 flex justify-center",children:e.jsx("button",{onClick:()=>E(t.id),className:"px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-all duration-300",children:p[t.id]?"Hide Detailed Steps":"Show Detailed Steps"})}),p[t.id]&&e.jsxs("div",{className:"mt-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500",children:[e.jsx("h5",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"📝 Detailed Steps"}),e.jsx("pre",{className:"text-sm font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap",children:t.detailedSolution})]})]},`example-${t.id}`))})}),d==="practice"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center",children:"Practice Problems"}),e.jsx("div",{className:"space-y-6",children:P.map(t=>e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 transition-all duration-300 hover:shadow-md",children:[e.jsx("h4",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:t.title}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:t.problem}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("button",{onClick:()=>j(m===t.id?null:t.id),className:"px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-all duration-300",children:m===t.id?"Hide Solution":"Check Solution"}),e.jsx("button",{onClick:()=>k(h===t.id?null:t.id),className:"px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300",children:h===t.id?"Hide Hint":"Show Hint"})]}),h===t.id&&e.jsx("div",{className:"mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800",children:e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-semibold",children:"💡 Hint:"})," ",t.hint]})}),m===t.id&&e.jsx("div",{className:"mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800",children:e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:t.solution})})]},t.id))})]}),e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800",children:[e.jsx("h4",{className:"font-semibold text-yellow-700 dark:text-yellow-400 mb-2",children:"💡 Tips for Pivot Operations"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Find pivot:"})," Entering column + leaving row"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Normalize:"})," Divide pivot row by pivot value"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Eliminate:"})," Make pivot column identity"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Update:"})," Replace basic variable in B column"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Verify:"})," Check pivot column has 1 and 0s"]})]})]})]})]}),e.jsx("div",{className:"mt-12",children:e.jsx(M,{title:"Pivot Element FAQs",questions:H})}),e.jsx("div",{className:"mt-8",children:e.jsx(F,{content:U,title:"Pivot Element",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Note",downloadFileName:"topic7_note.txt"})}),e.jsx("div",{className:"mt-8",children:e.jsx(C,{note:"The pivot element is the engine of the Simplex Method. I tell my students that finding the pivot is like finding the 'center of gravity' for the next iteration. The pivot must be positive, and the row operations around it transform the tableau. The key is to be methodical: identify entering and leaving variables first, then perform the pivot operation carefully. One mistake in row operations can lead to incorrect results."})})]})})};export{V as default};
