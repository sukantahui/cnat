import{j as e,a as s}from"./index-BwpYMbum.js";function i(){return e.jsxs("div",{className:"space-y-10",children:[e.jsx("h1",{className:"text-2xl font-bold text-sky-300",children:"String Concatenation & f-Strings in Python"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Python provides multiple ways to build strings. The most common and powerful method is using ",e.jsx("strong",{children:"f-strings"}),", introduced in Python 3.6."]}),e.jsxs("section",{className:"space-y-3",children:[e.jsxs("h2",{className:"text-xl font-semibold text-slate-200",children:["1. String Concatenation using ",e.jsx("code",{children:"+"})]}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["You can add (concatenate) two strings using the ",e.jsx("code",{children:"+"})," operator."]}),e.jsx(s,{initialCode:`first = "Coder"
second = "AccoTax"
result = first + " & " + second
print(result)   # Coder & AccoTax`}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["Note: ",e.jsx("code",{children:"+"})," works only with strings. Mixing numbers causes an error."]}),e.jsx(s,{initialCode:`name = "Python"
age = 33

# print(name + age)  # ❌ ERROR: cannot add string and integer

print(name + " is " + str(age) + " years old")  # ✔ Works using str()`})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsxs("h2",{className:"text-xl font-semibold text-slate-200",children:["2. String Repetition using ",e.jsx("code",{children:"*"})]}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["You can repeat a string using the ",e.jsx("code",{children:"*"})," operator."]}),e.jsx(s,{initialCode:`print("Hi! " * 3)
# Output: Hi! Hi! Hi!`})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"3. f-Strings — The Modern Formatting Style"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["f-Strings allow you to insert variables directly inside strings using ",e.jsx("code",{children:"{}"}),"."]}),e.jsx(s,{initialCode:`name = "Sukanta"
age = 47

print(f"My name is {name} and I am {age} years old.")`}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["✔ Fastest ✔ Most readable ✔ Supports expressions inside ","{}"]}),e.jsx(s,{initialCode:`a = 10
b = 5
print(f"Sum is {a + b}")`})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"4. Formatting Numbers using f-Strings"}),e.jsx(s,{initialCode:`pi = 3.14159265

print(f"Pi rounded to 2 decimals: {pi:.2f}")
print(f"Pi rounded to 4 decimals: {pi:.4f}")`}),e.jsxs("p",{className:"text-slate-400 text-sm",children:[e.jsx("code",{children:"{pi:.2f}"})," → format pi to 2 decimal places."]})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"5. Aligning Text with f-Strings"}),e.jsx(s,{initialCode:`print(f"{'Python':>10}")  # Right aligned
print(f"{'Python':<10}")  # Left aligned
print(f"{'Python':^10}")  # Center aligned`})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"6. Multi-line f-Strings"}),e.jsx(s,{initialCode:`name = "Devangshu"
score = 92

message = f"""
Student: {name}
Score: {score}
Status: {'Pass' if score >= 40 else 'Fail'}
"""

print(message)`})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-rose-300",children:"Common Mistakes to Avoid"}),e.jsx(s,{initialCode:`name = "Ritaja"

# ❌ Wrong — f missing
# print("Hello {name}")

# ✔ Correct
print(f"Hello {name}")`}),e.jsx(s,{initialCode:`a = 10
b = 20

# ❌ Wrong — cannot put quotes inside {}
# print(f"{a + "20"}")

# ✔ Correct
print(f"{a + b}")`}),e.jsxs("div",{className:"p-4 bg-slate-800 rounded-xl text-slate-300 text-sm",children:[e.jsx("strong",{children:"Teacher's Tip:"}),"f-Strings are evaluated at runtime, so you can put **any expression inside** ",e.jsx("code",{children:"{}"}),"."]})]}),e.jsxs("section",{className:"p-4 bg-slate-800 rounded-xl text-slate-300 text-sm",children:[e.jsx("h2",{className:"font-semibold text-slate-100 mb-2",children:"Summary"}),e.jsxs("ul",{className:"list-disc ml-6 space-y-1",children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"+"})," for simple concatenation."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"*"})," to repeat strings."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"f-Strings are the best way"})," to format strings."]}),e.jsx("li",{children:"You can include expressions inside f-strings."}),e.jsx("li",{children:"f-Strings support number formatting & text alignment."})]})]})]})}export{i as default};
