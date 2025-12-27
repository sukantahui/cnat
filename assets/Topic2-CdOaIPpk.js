import{j as e,a as s}from"./index-4R51NWjb.js";function i(){return e.jsxs("div",{className:"space-y-10",children:[e.jsx("h1",{className:"text-2xl font-bold text-sky-300",children:"Assignment & Compound Assignment Operators"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Assignment operators store values inside variables. Python also provides several compound assignment operators that combine arithmetic with assignment, making code shorter, cleaner & efficient."}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"1. Basic Assignment Operator (=)"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"It assigns the value on the right side to the variable on the left side."}),e.jsx(s,{initialCode:`x = 10
y = 5
name = "Python"

print(x, y, name)`}),e.jsxs("div",{className:"p-4 mt-3 bg-slate-800 rounded-xl text-sm text-slate-300",children:[e.jsx("strong",{children:"Note:"})," Python assigns values dynamically — no need to declare data types."]})]}),e.jsxs("section",{className:"space-y-2",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"2. Compound Assignment Operators"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"These operators update a variable with an arithmetic operation + assignment."}),e.jsxs("ul",{className:"list-disc ml-6 text-slate-300 text-sm space-y-1 mt-2",children:[e.jsxs("li",{children:[e.jsx("code",{children:"+="})," → Add and assign"]}),e.jsxs("li",{children:[e.jsx("code",{children:"-="})," → Subtract and assign"]}),e.jsxs("li",{children:[e.jsx("code",{children:"*="})," → Multiply and assign"]}),e.jsxs("li",{children:[e.jsx("code",{children:"/="})," → Divide and assign"]}),e.jsxs("li",{children:[e.jsx("code",{children:"//="})," → Floor division and assign"]}),e.jsxs("li",{children:[e.jsx("code",{children:"%="})," → Modulus and assign"]}),e.jsxs("li",{children:[e.jsx("code",{children:"**="})," → Exponent and assign"]})]}),e.jsx(s,{initialCode:`x = 10

x += 5   # x = x + 5
print("After += :", x)

x -= 3   # x = x - 3
print("After -= :", x)

x *= 2   # x = x * 2
print("After *= :", x)

x /= 4   # x = x / 4
print("After /= :", x)

x //= 2  # x = x // 2
print("After //= :", x)

x %= 3   # x = x % 3
print("After %= :", x)

x **= 4  # x = x ** 4
print("After **= :", x)`})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"3. Why Use Compound Assignment?"}),e.jsx("p",{className:"text-sm text-slate-300",children:"They help make the code shorter, faster, and cleaner. Commonly used in loops, counters, accumulators, and mathematical updates."}),e.jsx(s,{initialCode:`# Example: Counting occurrences
count = 0

for _ in range(5):
    count += 1   # increment counter

print("Counter:", count)`}),e.jsxs("div",{className:"p-4 bg-slate-800 rounded-xl text-slate-300 text-sm",children:[e.jsx("strong",{children:"Teacher’s Tip:"}),"Compound assignment reduces errors and makes logic easier to follow in loops."]})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"4. Real-Life Example — Shopping Cart"}),e.jsx(s,{initialCode:`# Updating cart total
total = 0

price1 = 250
price2 = 499
price3 = 199

total += price1
total += price2
total += price3

print("Final Bill:", total)`})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"5. A Common Mistake to Avoid"}),e.jsx(s,{initialCode:`x = 10
# WRONG: x =+ 5 (interpreted as x = (+5))
x =+ 5
print(x)   # 5, not 15!`}),e.jsxs("div",{className:"mt-3 bg-slate-800 p-4 rounded-xl text-slate-300 text-sm",children:[e.jsx("strong",{children:"Important:"})," ",e.jsx("code",{children:"x =+ 5"})," is NOT the same as ",e.jsx("code",{children:"x += 5"}),"."]})]}),e.jsxs("section",{className:"p-4 bg-slate-800 rounded-xl text-slate-300 text-sm",children:[e.jsx("h2",{className:"font-semibold text-slate-200 mb-2",children:"Summary"}),e.jsxs("ul",{className:"list-disc ml-6 space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"="})," assigns a value to a variable."]}),e.jsxs("li",{children:["Compound operators reduce repetition (e.g., ",e.jsx("code",{children:"x += 5"}),")."]}),e.jsx("li",{children:"Common in loops, counters, accumulators."}),e.jsxs("li",{children:[e.jsx("code",{children:"x =+ 5"})," is a common bug — avoid it!"]})]})]})]})}export{i as default};
