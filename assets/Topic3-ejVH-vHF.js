import{j as e}from"./index-b7ec57y3.js";import{E as s}from"./EditablePythonCodeBlock-BLu1YgFp.js";import"./index-YcsC-9l3.js";import"./createLucideIcon-rpwAtNd4.js";import"./braces-DaWynF8W.js";import"./layout-list-DHPnG2KL.js";import"./play-iDwqm0pH.js";import"./type-BCGOc5XA.js";import"./refresh-cw-DOKtjFB2.js";import"./copy-Ds2YEQZf.js";import"./download-zjLbxNEf.js";import"./eye-off-C83yZDwu.js";import"./eye-Dx1fNgme.js";function j(){return e.jsxs("div",{className:"space-y-10",children:[e.jsx("h1",{className:"text-2xl font-bold text-sky-300",children:"Comparison Operators in Python"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Comparison (or relational) operators compare two values and return",e.jsx("code",{children:" True "})," or ",e.jsx("code",{children:" False"}),". They are commonly used in decision-making, loops, and validations."]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"1. Comparison Operators in Python"}),e.jsxs("ul",{className:"list-disc ml-6 text-slate-300 text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"=="})," → Equal to"]}),e.jsxs("li",{children:[e.jsx("code",{children:"!="})," → Not equal to"]}),e.jsxs("li",{children:[e.jsx("code",{children:">"})," → Greater than"]}),e.jsxs("li",{children:[e.jsx("code",{children:"<"})," → Less than"]}),e.jsxs("li",{children:[e.jsx("code",{children:">="})," → Greater than or equal to"]}),e.jsxs("li",{children:[e.jsx("code",{children:"<="})," → Less than or equal to"]})]}),e.jsx(s,{initialCode:`a = 10
b = 20

print(a == b)   # False
print(a != b)   # True
print(a > b)    # False
print(a < b)    # True
print(a >= 10)  # True
print(b <= 25)  # True`})]}),e.jsxs("section",{className:"space-y-2",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"2. Comparison with Strings"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"String comparison is based on **lexicographical (dictionary) order** using ASCII/Unicode values."}),e.jsx(s,{initialCode:`print("apple" == "apple")   # True
print("apple" != "banana") # True
print("cat" > "bat")       # True ('c' > 'b')
print("A" < "a")           # True (ASCII of A < a)`})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"3. Boolean Comparisons"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"In Python:"}),e.jsxs("ul",{className:"ml-6 list-disc text-sm text-slate-300 space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"True"})," acts like ",e.jsx("code",{children:"1"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"False"})," acts like ",e.jsx("code",{children:"0"})]})]}),e.jsx(s,{initialCode:`print(True == 1)     # True
print(False == 0)    # True
print(True > False)  # True`})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"4. Chained Comparisons (Python Feature)"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Python allows mathematical-style chaining of comparisons:"}),e.jsx(s,{initialCode:`x = 15

print(10 < x < 20)     # True
print(5 < x <= 15)     # True
print(20 > x == 15)    # True`}),e.jsxs("div",{className:"p-4 bg-slate-800 rounded-xl text-sm text-slate-300",children:[e.jsx("strong",{children:"Teacher’s Tip:"}),"Chained comparisons read naturally and reduce multiple ",e.jsx("code",{children:"and"})," conditions."]})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"5. Real-Life Example — Checking Eligibility"}),e.jsx(s,{initialCode:`age = 17

if age >= 18:
    print("Eligible to vote")
else:
    print("Not eligible")`})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"6. Common Mistakes"}),e.jsx(s,{initialCode:`x = 10

# Mistake: Using = instead of ==
if x = 10:
    print("Wrong!")  # ERROR`}),e.jsxs("div",{className:"p-4 bg-slate-800 rounded-xl text-slate-300 text-sm",children:[e.jsx("strong",{children:"Remember:"}),e.jsx("code",{children:"="})," is assignment, ",e.jsx("code",{children:"=="})," is comparison."]})]}),e.jsxs("section",{className:"p-4 bg-slate-800 rounded-xl text-slate-300 text-sm",children:[e.jsx("h2",{className:"font-semibold text-slate-200 mb-2",children:"Summary"}),e.jsxs("ul",{className:"list-disc ml-6 space-y-1",children:[e.jsxs("li",{children:["Comparison operators return ",e.jsx("code",{children:"True/False"}),"."]}),e.jsx("li",{children:"Strings compare lexicographically."}),e.jsx("li",{children:"Booleans behave like numbers (1 and 0)."}),e.jsx("li",{children:"Python supports chained comparisons."}),e.jsxs("li",{children:["Avoid confusing ",e.jsx("code",{children:"="})," with ",e.jsx("code",{children:"=="}),"."]})]})]})]})}export{j as default};
