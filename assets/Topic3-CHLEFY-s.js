import{j as e,a as s}from"./index-Bg406suL.js";function l(){return e.jsxs("div",{className:"space-y-10",children:[e.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-sky-300",children:"Real-World Conditional Scenarios in Python"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Conditional logic powers real applications like login systems, ATM withdrawals, grading, traffic control, and more. Let's explore some realistic scenarios using ",e.jsx("code",{children:"if"}),", ",e.jsx("code",{children:"elif"}),",",e.jsx("code",{children:"else"}),", and logical operators."]}),e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"1. Login System with Password + OTP"}),e.jsx(s,{initialCode:`username = "admin"
password = "1234"
otp = "9999"

u = "admin"
p = "1234"
o = "9999"

if u == username:
    if p == password:
        if o == otp:
            print("Login Successful!")
        else:
            print("Incorrect OTP")
    else:
        print("Incorrect Password")
else:
    print("User not found")`}),e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"2. Grading System"}),e.jsx(s,{initialCode:`marks = 85

if marks >= 90:
    print("Grade A")
elif marks >= 80:
    print("Grade B")
elif marks >= 70:
    print("Grade C")
else:
    print("Grade D")`}),e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"3. ATM Withdrawal System"}),e.jsx(s,{initialCode:`card_inserted = True
pin_correct = True
balance = 2500
amount = 2000

if card_inserted:
    if pin_correct:
        if amount <= balance:
            print("Withdraw Successful")
        else:
            print("Insufficient Balance")
    else:
        print("Wrong PIN")
else:
    print("Insert Card")`}),e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"4. Traffic Light System"}),e.jsx(s,{initialCode:`signal = "yellow"

if signal == "red":
    print("STOP")
elif signal == "yellow":
    print("READY")
elif signal == "green":
    print("GO")
else:
    print("Invalid Signal")`}),e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"5. Shopping Discount System"}),e.jsx(s,{initialCode:`amount = 1200
member = True

if amount > 1000:
    if member:
        print("20% Discount")
    else:
        print("10% Discount")
else:
    print("No Discount")`}),e.jsxs("section",{className:"bg-slate-800/50 p-4 rounded-xl border border-slate-700",children:[e.jsx("h3",{className:"text-lg font-semibold text-emerald-300",children:"Teacher's Tips"}),e.jsxs("ul",{className:"text-slate-300 text-sm mt-2",children:[e.jsx("li",{children:"✔ Start with real-life situations → convert to conditions."}),e.jsx("li",{children:"✔ Use flowcharts for designing complex logic."}),e.jsx("li",{children:"✔ Simplify using logical operators where possible."})]})]}),e.jsxs("section",{className:"bg-slate-800/50 p-4 rounded-xl border border-slate-700",children:[e.jsx("h3",{className:"text-lg font-semibold text-yellow-300",children:"Points to Remember"}),e.jsxs("ul",{className:"text-slate-300 text-sm mt-2",children:[e.jsx("li",{children:"• Real-world logic often needs multiple layers of decisions."}),e.jsxs("li",{children:["• Combine ",e.jsx("code",{children:"and"}),", ",e.jsx("code",{children:"or"}),", ",e.jsx("code",{children:"not"})," to reduce nesting."]}),e.jsxs("li",{children:["• Use ",e.jsx("code",{children:"elif"})," for multiple choices."]}),e.jsx("li",{children:"• Always test edge cases (wrong PIN, low balance, etc.)."})]})]})]})}export{l as default};
