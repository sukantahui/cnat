import{j as e,a as s}from"./index-lKIIHiz2.js";function l(){return e.jsxs("div",{className:"space-y-10",children:[e.jsx("h1",{className:"text-2xl font-bold text-sky-300",children:"Logical Operators in Python (and, or, not)"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Logical operators allow you to combine multiple conditions. They always return",e.jsx("code",{children:" True "})," or ",e.jsx("code",{children:" False"})," based on the rules of logic."]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"1. Types of Logical Operators in Python"}),e.jsxs("ul",{className:"list-disc ml-6 text-slate-300 text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"and"})," → True if **both** conditions are True"]}),e.jsxs("li",{children:[e.jsx("code",{children:"or"})," → True if **at least one** condition is True"]}),e.jsxs("li",{children:[e.jsx("code",{children:"not"})," → Reverses a boolean value"]})]}),e.jsx(s,{initialCode:`x = 10
y = 20

print(x > 5 and y > 10)   # True
print(x > 15 or y > 15)   # True
print(not (x == 10))      # False`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"2. Logical Operator Truth Tables"}),e.jsxs("div",{className:"text-slate-300 text-xs md:text-sm space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-slate-200 mb-1",children:"AND Operator"}),e.jsx("pre",{className:"bg-slate-800 p-3 rounded-xl whitespace-pre",children:"A      B      A and B ------------------------- True   True     True True   False    False False  True     False False  False    False"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-slate-200 mb-1",children:"OR Operator"}),e.jsx("pre",{className:"bg-slate-800 p-3 rounded-xl whitespace-pre",children:"A      B      A or B ------------------------- True   True     True True   False    True False  True     True False  False    False"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-slate-200 mb-1",children:"NOT Operator"}),e.jsx("pre",{className:"bg-slate-800 p-3 rounded-xl whitespace-pre",children:"A        not A ----------------- True       False False      True"})]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"3. Using Logical Operators with Numbers & Strings"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Any non-zero number or non-empty string in Python is considered ",e.jsx("code",{children:"True"}),"."]}),e.jsx(s,{initialCode:`print(10 and 20)         # 20  (both True → returns last value)
print(0 and 5)           # 0   (0 is False → returns first False value)
print("" or "hello")     # "hello" (empty string is False)
print(not "")            # True`}),e.jsxs("div",{className:"p-4 bg-slate-800 rounded-xl text-sm text-slate-300 mt-2",children:[e.jsx("strong",{children:"Important:"})," Logical operators return actual values in Python, not just True/False."]})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"4. Real-Life Examples"}),e.jsx(s,{initialCode:`age = 17
has_id = True

# Must be 18+ AND have ID
if age >= 18 and has_id:
    print("Eligible for entry")
else:
    print("Not eligible")`}),e.jsx(s,{initialCode:`username = "admin"
password = "1234"

# At least one must match
if username == "admin" or password == "pass123":
    print("Login permitted")
else:
    print("Access denied")`})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"5. Common Mistakes to Avoid"}),e.jsx(s,{initialCode:`x = 10

# ❌ Mistake: Using bitwise operators instead of logical
print(x > 5 & x < 20)    # WRONG (not logical AND)

# ✔ Correct
print(x > 5 and x < 20)  # True`}),e.jsxs("div",{className:"p-4 bg-slate-800 rounded-xl text-sm text-slate-300",children:[e.jsx("strong",{children:"Teacher’s Tip:"}),"Beginners often confuse ",e.jsx("code",{children:"&"})," with ",e.jsx("code",{children:"and"}),"— they behave differently in Python."]})]}),e.jsxs("section",{className:"p-4 bg-slate-800 rounded-xl text-slate-300 text-sm",children:[e.jsx("h2",{className:"font-semibold text-slate-200 mb-2",children:"Summary"}),e.jsxs("ul",{className:"list-disc ml-6 space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"and"})," → True only if both conditions are True."]}),e.jsxs("li",{children:[e.jsx("code",{children:"or"})," → True if any one condition is True."]}),e.jsxs("li",{children:[e.jsx("code",{children:"not"})," → Reverses True/False."]}),e.jsx("li",{children:"Logical operators return actual values, not only booleans."}),e.jsxs("li",{children:["Do not confuse ",e.jsx("code",{children:"&"}),"/",e.jsx("code",{children:"|"})," with logical operators."]})]})]})]})}export{l as default};
