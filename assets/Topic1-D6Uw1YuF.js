import{j as e,a as s}from"./index-BMXE8ahz.js";function i(){return e.jsxs("div",{className:"space-y-10",children:[e.jsx("h1",{className:"text-2xl font-bold text-sky-300",children:"Arithmetic Operators in Python"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Arithmetic operators are used to perform mathematical calculations. Python supports both basic and advanced arithmetic operations like exponentiation and floor division. This topic helps you develop a strong foundation for numerical computations."}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"1. List of Arithmetic Operators"}),e.jsxs("ul",{className:"list-disc ml-6 text-slate-300 text-sm mt-2 space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"+"}),"  → Addition"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"-"}),"  → Subtraction"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"*"}),"  → Multiplication"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"/"}),"  → Division (float result)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"//"})," → Floor Division (integer result)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"%"}),"  → Modulus (remainder)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"**"})," → Exponentiation (power)"]})]})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"2. Basic Arithmetic Examples"}),e.jsx("p",{className:"text-sm text-slate-300",children:"Let's start with simple arithmetic operations:"}),e.jsx(s,{initialCode:`a = 12
b = 5

print("a + b =", a + b)
print("a - b =", a - b)
print("a * b =", a * b)
print("a / b =", a / b)    # floating result
print("a // b =", a // b)  # floor division
print("a % b =", a % b)    # remainder
print("a ** b =", a ** b)  # exponentiation`})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"3. Floor Division & Modulus – Where They Are Used?"}),e.jsx("p",{className:"text-sm text-slate-300",children:"These two operators are extremely useful in number system problems."}),e.jsx(s,{initialCode:`# Example 1: Last digit of a number
num = 9876
print(num % 10)   # 6

# Example 2: Remove last digit
print(num // 10)  # 987

# Example 3: Ratio calculation
a = 17
b = 3
print("floor division =", a // b)
print("exact division =", a / b)`}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-800 text-slate-300 text-sm",children:[e.jsx("strong",{children:"Teacher’s Tip:"}),"Use ",e.jsx("code",{children:"%"})," and ",e.jsx("code",{children:"//"})," together in loops, recursion, and number system conversions (decimal → binary, octal, etc.)."]})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"4. Exponentiation (**)"}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Python’s power operator ",e.jsx("code",{children:"**"})," is powerful and fast."]}),e.jsx(s,{initialCode:`print(2 ** 3)     # 8
print(5 ** 2)     # 25
print(10 ** 0)    # 1
print(2 ** 10)    # 1024`})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"5. Combining Arithmetic Operators"}),e.jsx(s,{initialCode:`x = 10
y = 3

result = (x + y) * (x - y) / y
print(result)`}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-800 text-slate-300 text-sm",children:[e.jsx("strong",{children:"Point to Remember:"}),"Parentheses ",e.jsx("code",{children:"()"})," change the natural precedence of operators. When in doubt, use parentheses!"]})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"6. Real-Life Use Cases"}),e.jsx(s,{initialCode:`# EMI calculation (very simplified)
p = 10000    # principal
r = 10       # rate
t = 2        # years

interest = (p * r * t) / 100
print("Interest =", interest)

# Splitting items equally
items = 37
persons = 5
print("Items per person =", items // persons)
print("Remaining items =", items % persons)`})]}),e.jsxs("section",{className:"p-4 bg-slate-800 rounded-xl text-slate-300 text-sm",children:[e.jsx("h2",{className:"font-semibold text-slate-200 mb-2",children:"Summary"}),e.jsxs("ul",{className:"list-disc ml-6 space-y-1",children:[e.jsx("li",{children:"Arithmetic operators help perform mathematical calculations."}),e.jsxs("li",{children:[e.jsx("code",{children:"//"})," gives integer output; ",e.jsx("code",{children:"/"})," gives float output."]}),e.jsxs("li",{children:[e.jsx("code",{children:"%"})," is useful for digit extraction and cycles."]}),e.jsxs("li",{children:[e.jsx("code",{children:"**"})," is used for powers and exponential calculations."]}),e.jsx("li",{children:"Use parentheses to avoid confusion in complex expressions."})]})]})]})}export{i as default};
