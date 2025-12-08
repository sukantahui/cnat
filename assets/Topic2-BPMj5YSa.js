import{j as e,a as s}from"./index-DrvZtsBI.js";function t(){return e.jsxs("div",{className:"space-y-8",children:[e.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-sky-300",children:"Multiple Conditions in Python — Using AND, OR, NOT"}),e.jsx("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:"Python allows combining multiple conditions using logical operators. These operators help create more powerful and flexible decision-making structures without needing deep nesting."}),e.jsxs("h2",{className:"text-xl font-semibold text-sky-300",children:["1. Using ",e.jsx("code",{children:"and"})]}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("code",{children:"and"})," requires **all conditions to be True**."]}),e.jsx(s,{initialCode:`age = 20
has_id = True

if age >= 18 and has_id:
    print("Entry Allowed")
else:
    print("Entry Denied")`}),e.jsxs("h2",{className:"text-xl font-semibold text-sky-300",children:["2. Using ",e.jsx("code",{children:"or"})]}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("code",{children:"or"})," requires **at least one condition to be True**."]}),e.jsx(s,{initialCode:`is_staff = False
is_admin = True

if is_staff or is_admin:
    print("Access Granted")
else:
    print("Access Denied")`}),e.jsxs("h2",{className:"text-xl font-semibold text-sky-300",children:["3. Using ",e.jsx("code",{children:"not"})]}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("code",{children:"not"})," reverses a condition."]}),e.jsx(s,{initialCode:`logged_in = False

if not logged_in:
    print("Please log in first")`}),e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"4. Combining All Logical Operators"}),e.jsx(s,{initialCode:`age = 25
has_id = True
is_drunk = False

if age >= 18 and has_id and not is_drunk:
    print("You may enter")
else:
    print("You cannot enter")`}),e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"5. Real Example — Scholarship Eligibility"}),e.jsx(s,{initialCode:`marks = 92
family_income = 140000
sports_quota = True

if marks >= 90 and (family_income < 150000 or sports_quota):
    print("Eligible for Scholarship")
else:
    print("Not Eligible")`}),e.jsxs("section",{className:"bg-slate-800/50 p-4 rounded-xl border border-slate-700",children:[e.jsx("h3",{className:"text-lg font-semibold text-emerald-300",children:"Teacher's Tips"}),e.jsxs("ul",{className:"text-slate-300 text-sm mt-2",children:[e.jsx("li",{children:"✔ Use logical operators to reduce nested conditions."}),e.jsx("li",{children:"✔ Group conditions using parentheses for clarity."}),e.jsx("li",{children:"✔ Avoid very long combined conditions; break into variables."})]})]}),e.jsxs("section",{className:"bg-slate-800/50 p-4 rounded-xl border border-slate-700",children:[e.jsx("h3",{className:"text-lg font-semibold text-yellow-300",children:"Points to Remember"}),e.jsxs("ul",{className:"text-slate-300 text-sm mt-2",children:[e.jsxs("li",{children:["• ",e.jsx("code",{children:"and"})," → all conditions must be True."]}),e.jsxs("li",{children:["• ",e.jsx("code",{children:"or"})," → at least one condition must be True."]}),e.jsxs("li",{children:["• ",e.jsx("code",{children:"not"})," → reverses a condition."]}),e.jsx("li",{children:"• Make logic readable using parentheses."})]})]})]})}export{t as default};
