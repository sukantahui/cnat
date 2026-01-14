import{j as e,a as s}from"./index-C8p6Ail2.js";function i(){return e.jsxs("div",{className:"space-y-8",children:[e.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-sky-300",children:"Nested Conditions in Python — Multi-Level Decision Making"}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:["Nested conditions allow you to place one ",e.jsx("code",{children:"if"})," statement inside another. They help model real-life situations where a decision depends on multiple layers of checks. For example: verifying age, then checking ID, then checking membership."]}),e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"1. What is a Nested Condition?"}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base",children:["A nested condition is simply an ",e.jsx("code",{children:"if"})," inside another ",e.jsx("code",{children:"if"}),". Python executes inner blocks only if the outer conditions are satisfied."]}),e.jsx(s,{initialCode:`age = 22
has_id = True

if age >= 18:
    print("Age OK: Adult")
    if has_id:
        print("ID Verified")
        print("Entry Allowed")
    else:
        print("ID Missing -> Entry Denied")
else:
    print("Underage -> Entry Denied")`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Here, ID verification happens only when the age check passes."}),e.jsx("h3",{className:"text-lg font-semibold text-purple-300",children:"Flow Diagram"}),e.jsx("pre",{className:"bg-slate-800 p-4 rounded-xl text-slate-300 text-sm overflow-auto",children:`              (Check Age ≥ 18?)
                     │
            ┌────────┴────────┐
            │                 │
          Yes                No
            │                 │
     (Check ID present?)   Deny Entry
            │
     ┌──────┴──────┐
     │             │
   Yes            No
     │             │
Allow Entry   Ask for ID`}),e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"2. Multi-Level Nesting"}),e.jsx("p",{className:"text-slate-300 text-sm md:text-base",children:"You can nest conditions as deep as needed (but avoid unnecessary depth)."}),e.jsx(s,{initialCode:`age = 25
has_id = True
is_member = True

if age >= 18:
    if has_id:
        if is_member:
            print("Welcome, Premium Member!")
        else:
            print("Welcome, Guest User!")
    else:
        print("Please show your ID.")
else:
    print("You must be 18+ to enter.")`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Notice how each inner decision depends on the outer decisions."}),e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"3. Real-World Example – ATM Withdrawal"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Conditions: ✔ Card inserted → ✔ PIN correct → ✔ Sufficient balance → Withdraw cash"}),e.jsx(s,{initialCode:`card_inserted = True
pin_correct = True
balance = 3000
amount = 1500

if card_inserted:
    if pin_correct:
        if amount <= balance:
            print("Withdraw Successful")
        else:
            print("Insufficient Balance")
    else:
        print("Incorrect PIN")
else:
    print("Insert your card")`}),e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"4. Real-World Example – Shopping Discount System"}),e.jsx(s,{initialCode:`is_member = True
purchase_amount = 1200

if purchase_amount > 1000:
    if is_member:
        print("20% discount applied!")
    else:
        print("10% discount applied!")
else:
    print("No discount available")`}),e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"5. Login Validation with Nested Conditions"}),e.jsx(s,{initialCode:`username = "admin"
password = "1234"
otp = "9999"

if username == "admin":
    if password == "1234":
        if otp == "9999":
            print("Login Successful!")
        else:
            print("Incorrect OTP")
    else:
        print("Invalid Password")
else:
    print("Invalid Username")`}),e.jsxs("section",{className:"bg-slate-800/50 p-4 rounded-xl border border-slate-700",children:[e.jsx("h3",{className:"text-lg font-semibold text-emerald-300",children:"Teacher's Tips"}),e.jsxs("ul",{className:"text-slate-300 text-sm mt-2 space-y-1",children:[e.jsx("li",{children:"✔ Avoid too many nested levels; they make code harder to read."}),e.jsxs("li",{children:["✔ Use logical operators (",e.jsx("code",{children:"and"}),", ",e.jsx("code",{children:"or"}),") to reduce nesting."]}),e.jsx("li",{children:"✔ Indentation must be perfect — a single space error will break the code."})]})]}),e.jsxs("section",{className:"bg-slate-800/50 p-4 rounded-xl border border-slate-700",children:[e.jsx("h3",{className:"text-lg font-semibold text-yellow-300",children:"Points to Remember"}),e.jsxs("ul",{className:"text-slate-300 text-sm mt-2 space-y-1",children:[e.jsx("li",{children:"• Nest conditions when decisions depend on previous outcomes."}),e.jsx("li",{children:"• Excessive nesting is a sign that logical operators may help."}),e.jsx("li",{children:"• Execution enters inner blocks only when outer conditions are True."}),e.jsx("li",{children:"• Use indentation consistently (4 spaces recommended)."})]})]})]})}export{i as default};
