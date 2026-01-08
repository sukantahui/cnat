import{j as e,a as s}from"./index-CkSrFIVy.js";function a(){return e.jsxs("div",{className:"space-y-10",children:[e.jsx("h1",{className:"text-2xl font-bold text-sky-300",children:"Introduction to Python Operators"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Operators are symbols used to perform operations on variables and values. Python provides a wide range of operators—from arithmetic to logical to expression evaluation. This topic lays the foundation for mastering them."}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"1. Arithmetic Operators"}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Arithmetic operators perform mathematical operations. Python supports: ",e.jsx("strong",{children:"+, -, *, /, //, %, **"})]}),e.jsx(s,{initialCode:`a = 10
b = 3

print(a + b)   # Addition → 13
print(a - b)   # Subtraction → 7
print(a * b)   # Multiplication → 30
print(a / b)   # Division(float) → 3.333...
print(a // b)  # Floor division → 3
print(a % b)   # Modulus → 1
print(a ** b)  # Exponentiation → 1000`}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-800 text-slate-300 text-sm",children:[e.jsx("strong",{children:"Teacher's Tip:"}),"Always prefer ",e.jsx("strong",{children:"//"})," when you need integer results, especially in loops."]})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"2. Assignment & Compound Assignment"}),e.jsx("p",{className:"text-sm text-slate-300",children:"Assignment stores a value. Compound assignment modifies the variable in-place."}),e.jsx(s,{initialCode:`x = 10
x += 5   # x = 15
x -= 3   # x = 12
x *= 2   # x = 24
x /= 4   # x = 6.0
x **= 2  # x = 36
x //= 5  # x = 7

print(x)`}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-800 text-slate-300 text-sm",children:[e.jsx("strong",{children:"Remember:"}),"Compound operators make your code shorter and more readable."]})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"3. Comparison Operators"}),e.jsxs("p",{className:"text-sm text-slate-300",children:["These operators compare two values and return ",e.jsx("strong",{children:"True"})," or ",e.jsx("strong",{children:"False"}),"."]}),e.jsx(s,{initialCode:`print(5 > 3)   # True
print(5 < 3)   # False
print(5 >= 5)  # True
print(5 <= 4)  # False
print(5 == 5)  # True
print(5 != 2)  # True`})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"4. Logical Operators (and, or, not)"}),e.jsx("p",{className:"text-sm text-slate-300",children:"These operators evaluate multiple conditions."}),e.jsx(s,{initialCode:`age = 20
city = "Kolkata"

print(age > 18 and city == "Kolkata")   # True
print(age < 18 or city == "Delhi")      # False
print(not(age > 18))                    # False`})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"5. String Concatenation & f-Strings"}),e.jsx(s,{initialCode:`name = "Ritaja"
age = 15

# Normal concatenation
print("My name is " + name)

# f-string (recommended)
print(f"My name is {name} and I am {age} years old")`}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-800 text-slate-300 text-sm",children:[e.jsx("strong",{children:"Teacher's Tip:"}),"Use ",e.jsx("strong",{children:"f-strings"})," for readability and formatting power."]})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"6. Operator Precedence"}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Precedence determines which operation executes first. Use parentheses ",e.jsx("strong",{children:"()"})," when unsure."]}),e.jsx(s,{initialCode:`print(10 + 5 * 2)     # 20 → multiplication first
print((10 + 5) * 2)   # 30 → parenthesis first`}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-800 text-slate-300 text-sm",children:[e.jsx("strong",{children:"Most important:"}),e.jsx("code",{children:"* / // %"})," have higher precedence than ",e.jsx("code",{children:"+ -"}),"."]})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"7. Evaluating Expressions"}),e.jsx(s,{initialCode:`x = 10
y = 5
result = (x + y) * (x - y) / 5

print("Result =", result)`}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-800 text-slate-300 text-sm",children:[e.jsx("strong",{children:"Key Idea:"}),"Break complex expressions into smaller parts for clarity and debugging."]})]}),e.jsxs("section",{className:"p-4 bg-slate-800 rounded-xl text-slate-300 text-sm",children:[e.jsx("h2",{className:"font-semibold text-slate-200 mb-2",children:"Summary"}),e.jsxs("ul",{className:"list-disc ml-6 space-y-1",children:[e.jsx("li",{children:"Python supports rich arithmetic and logical operators."}),e.jsx("li",{children:"Assignment operators help simplify your code."}),e.jsx("li",{children:"Comparison operators return boolean values."}),e.jsx("li",{children:"Use f-strings for best formatting."}),e.jsx("li",{children:"Operator precedence determines evaluation order."})]})]})]})}export{a as default};
