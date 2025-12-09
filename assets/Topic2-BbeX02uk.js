import{j as e,a as s}from"./index-DhOO4YdO.js";function a(){return e.jsxs("div",{className:"space-y-10",children:[e.jsx("h1",{className:"text-2xl font-bold text-sky-300",children:"Variables, Keywords, Identifiers & Python’s Dynamic Typing"}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"In Python, variables do not need explicit type declarations. Their type is determined automatically based on the assigned value. This topic explains how variables work, naming rules, Python keywords, and how Python stores and reuses memory references."}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"1. What is a Variable?"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"A variable is a name that refers to a value stored in memory. Python creates a variable automatically when you assign a value to it."}),e.jsx(s,{initialCode:`x = 10
y = 3.14
name = "Sukanta Hui"
is_student = True

print(x, y, name, is_student)`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"2. Python is a Dynamically Typed Language"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"A variable’s type can change depending on the value assigned."}),e.jsx(s,{initialCode:`a = 10       # int
print(type(a))

a = "Hello"  # str
print(type(a))

a = 3.14     # float
print(type(a))`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"3. Naming Rules for Variables"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Rules:"}),e.jsxs("ul",{className:"list-disc ml-6 text-slate-300 text-sm space-y-1",children:[e.jsx("li",{children:"Can contain letters, digits, underscore."}),e.jsx("li",{children:"Cannot start with a digit."}),e.jsx("li",{children:"Cannot contain spaces or special characters."}),e.jsx("li",{children:"Case-sensitive (age ≠ Age ≠ AGE)."})]}),e.jsx(s,{initialCode:`valid_name = 10
ValidName = 20
_valid = 5
name2 = "Python"

# Invalid:
# 2value = 5      (cannot start with number)
# user-name = 10  (dash not allowed)`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"4. Python Keywords"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Keywords are reserved words used by Python’s syntax. They cannot be used as variable names."}),e.jsx(s,{initialCode:`import keyword
print(keyword.kwlist)
print("Total keywords:", len(keyword.kwlist))`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"5. Identifiers"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Identifiers are the names we give to variables, functions, classes, etc."}),e.jsx(s,{initialCode:`name = "Alice"        # variable identifier
def greet():      # function identifier
    print("Hello!")

class Student:    # class identifier
    pass`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"6. Multiple Assignment"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Python allows assigning values to multiple variables in one line."}),e.jsx(s,{initialCode:`x, y, z = 10, 20, 30
name1 = name2 = "Coder & AccoTax"

print(x, y, z)
print(name1, name2)`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"7. Constants in Python"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Python does not have true constants, but by convention, constants are written in UPPERCASE."}),e.jsx(s,{initialCode:`PI = 3.14159
GST_RATE = 0.18

print(PI, GST_RATE)`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"8. Memory Reference Using id()"}),e.jsx(s,{initialCode:`a = 10
b = 10

print(id(a))
print(id(b))
# Same memory location (small integers reused by Python)

x = 300
y = 300
print(id(x))
print(id(y))
# May differ depending on implementation`})]}),e.jsxs("section",{className:"bg-slate-800/40 p-5 rounded-xl border border-slate-700",children:[e.jsx("h3",{className:"text-sky-300 font-semibold text-lg",children:"Teacher’s Tips"}),e.jsxs("ul",{className:"list-disc ml-6 text-slate-300 text-sm space-y-2 mt-2",children:[e.jsx("li",{children:"Encourage students to use meaningful variable names."}),e.jsx("li",{children:"Make them memorize naming rules—common exam question."}),e.jsx("li",{children:"Explain that Python's dynamic typing reduces complexity for beginners."}),e.jsx("li",{children:"Show real examples where constants prevent mistakes."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"id()"})," to teach how Python references memory."]})]})]})]})}export{a as default};
