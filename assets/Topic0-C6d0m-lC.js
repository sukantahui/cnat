import{j as e,a as s}from"./index-X8Setxi0.js";function l(){return e.jsxs("div",{className:"space-y-8",children:[e.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-sky-300",children:"Conditional Statements in Python — if, elif, else"}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:["Conditional statements allow a program to make decisions. Python evaluates a condition as ",e.jsx("strong",{children:"True"})," or ",e.jsx("strong",{children:"False"}),"and executes the matching code block. This is one of the most powerful tools for creating logic, validations, menus, and real-world applications."]}),e.jsxs("h2",{className:"text-xl font-semibold text-sky-300",children:["1. The ",e.jsx("code",{children:"if"})," Statement"]}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base",children:["An ",e.jsx("code",{children:"if"})," block runs only when its condition is ",e.jsx("strong",{children:"True"}),". Python uses indentation (usually 4 spaces) to define the block."]}),e.jsx(s,{initialCode:`age = 20

if age >= 18:
    print("You are an adult")`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"If the condition is false, nothing happens."}),e.jsxs("h2",{className:"text-xl font-semibold text-sky-300",children:["2. The ",e.jsx("code",{children:"if–else"})," Statement"]}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base",children:["The ",e.jsx("code",{children:"else"})," block runs when the ",e.jsx("code",{children:"if"})," condition fails."]}),e.jsx(s,{initialCode:`marks = 40

if marks >= 50:
    print("Pass")
else:
    print("Fail")`}),e.jsxs("h2",{className:"text-xl font-semibold text-sky-300",children:["3. The ",e.jsx("code",{children:"elif"})," Chain"]}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base",children:[e.jsx("code",{children:"elif"})," is short for ",e.jsx("strong",{children:"else if"}),". It allows multiple conditions in sequence, and Python executes only the first matching block."]}),e.jsx(s,{initialCode:`score = 72

if score >= 90:
    print("Excellent")
elif score >= 75:
    print("Very Good")
elif score >= 60:
    print("Good")
else:
    print("Needs Improvement")`}),e.jsx("h3",{className:"text-lg font-semibold text-purple-300",children:"Flow of Execution"}),e.jsx("pre",{className:"bg-slate-800 text-slate-300 p-4 rounded-xl text-sm leading-relaxed overflow-auto",children:`        ┌──────────────┐
        │   if cond1?  │
        └──────┬───────┘
               │True
               ▼
        ┌──────────────┐
        │ execute blk1 │
        └──────┴───────┘
               │False
               ▼
        ┌──────────────┐
        │  elif cond2? │
        └──────┬───────┘
               │True
               ▼
        ┌──────────────┐
        │ execute blk2 │
        └──────┴───────┘
               │False
               ▼
        ┌──────────────┐
        │    else blk  │
        └──────────────┘
`}),e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"4. Nested Conditions"}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base",children:["You can put one ",e.jsx("code",{children:"if"})," inside another to check multiple levels of logic."]}),e.jsx(s,{initialCode:`age = 20
has_id = True

if age >= 18:
    if has_id:
        print("Entry Allowed")
    else:
        print("Please bring your ID card")
else:
    print("Underage – Entry Denied")`}),e.jsxs("h2",{className:"text-xl font-semibold text-sky-300",children:["5. Multiple Conditions with ",e.jsx("code",{children:"and"}),", ",e.jsx("code",{children:"or"}),", ",e.jsx("code",{children:"not"})]}),e.jsx(s,{initialCode:`username = "admin"
password = "1234"

if username == "admin" and password == "1234":
    print("Login Successful")
else:
    print("Invalid Credentials")`}),e.jsx(s,{initialCode:`temp = 35

if temp < 10 or temp > 30:
    print("Extreme Weather Warning!")`}),e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"6. Real-World Examples"}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Example 1 — Grading System"}),e.jsx(s,{initialCode:`marks = 88

if marks >= 90:
    print("Grade A")
elif marks >= 75:
    print("Grade B")
elif marks >= 60:
    print("Grade C")
else:
    print("Grade D")`}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Example 2 — Simple ATM Withdrawal Check"}),e.jsx(s,{initialCode:`balance = 5000
withdraw = 2000

if withdraw <= balance:
    print("Transaction Successful")
else:
    print("Insufficient Balance")`}),e.jsxs("section",{className:"bg-slate-800/60 p-4 rounded-xl border border-slate-700",children:[e.jsx("h3",{className:"text-lg font-semibold text-emerald-300",children:"Teacher’s Tips"}),e.jsxs("ul",{className:"text-slate-300 text-sm mt-2 space-y-1",children:[e.jsxs("li",{children:["✔ Always indent code inside ",e.jsx("code",{children:"if"})," blocks — Python relies on indentation."]}),e.jsxs("li",{children:["✔ Don’t overuse nested ",e.jsx("code",{children:"if"}),". Use logical operators instead."]}),e.jsx("li",{children:"✔ Order conditions from most specific to broad."}),e.jsxs("li",{children:["✔ Use ",e.jsx("code",{children:"elif"})," instead of multiple separate ",e.jsx("code",{children:"if"})," checks."]})]})]}),e.jsxs("section",{className:"bg-slate-800/60 p-4 rounded-xl border border-slate-700",children:[e.jsx("h3",{className:"text-lg font-semibold text-yellow-300",children:"Points to Remember"}),e.jsxs("ul",{className:"text-slate-300 text-sm mt-2 space-y-1",children:[e.jsx("li",{children:"• Every conditional block must be indented equally."}),e.jsx("li",{children:"• Python checks conditions top to bottom."}),e.jsxs("li",{children:["• Only one block in an ",e.jsx("code",{children:"if–elif–else"})," chain executes."]}),e.jsxs("li",{children:["• Boolean operators (",e.jsx("code",{children:"and"}),", ",e.jsx("code",{children:"or"}),", ",e.jsx("code",{children:"not"}),") allow powerful conditions."]})]})]})]})}export{l as default};
