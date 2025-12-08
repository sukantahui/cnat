import{j as e,a as s}from"./index-CYFMPjoD.js";function n(){return e.jsxs("div",{className:"space-y-10",children:[e.jsx("h1",{className:"text-2xl font-bold text-sky-300",children:"Python Indentation, Comments, Variables & User Input"}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"This topic explains the foundation of Python syntax—indentation rules, comments, variables, naming conventions, core data types, type casting, and taking input from the user. These are essential concepts used in every Python program from beginner to advanced level."}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"1. Python Indentation Rules"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Python uses **indentation instead of braces `","`** to define blocks. Incorrect indentation results in an error."]}),e.jsx(s,{initialCode:`# Correct indentation
if 5 > 2:
    print("Five is greater than two!")

# Incorrect indentation → ERROR
if 5 > 2:
print("This will cause an IndentationError")`}),e.jsxs("p",{className:"text-slate-400 text-xs",children:["Recommended indentation: ",e.jsx("b",{children:"4 spaces"}),", not tabs."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"2. Comments in Python (#)"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Python supports only **single-line comments** using ",e.jsx("code",{children:"#"}),". They help describe code but are ignored during execution."]}),e.jsx(s,{initialCode:`# This is a comment
x = 10  # Inline comment
print(x)  # Prints 10`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"3. Variables and Naming Conventions"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Variables are created when a value is assigned using ",e.jsx("code",{children:"="}),". Python automatically decides the data type based on the value."]}),e.jsx(s,{initialCode:`name = "Sukanta"
age = 18
pi = 3.14
is_student = True

print(name, age, pi, is_student)`}),e.jsx("h3",{className:"text-slate-200 font-semibold text-sm",children:"Naming Rules"}),e.jsxs("ul",{className:"list-disc ml-6 text-slate-300 text-sm space-y-1",children:[e.jsx("li",{children:"Must start with a letter or underscore"}),e.jsx("li",{children:"Cannot start with a number"}),e.jsx("li",{children:"Can contain letters, digits, underscore"}),e.jsx("li",{children:"Case-sensitive (age ≠ Age)"})]}),e.jsx("h3",{className:"text-slate-200 font-semibold text-sm mt-3",children:"Good Naming Style"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Use ",e.jsx("b",{children:"snake_case"}),":"]}),e.jsx(s,{initialCode:`student_name = "Ritaja"
total_marks = 480`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"4. Keywords vs Identifiers"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"**Keywords** are reserved words in Python. You cannot use them as variable names. **Identifiers** are names you define."}),e.jsx(s,{initialCode:`import keyword
print(keyword.kwlist)  # Shows all Python keywords`}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Examples of keywords: ",e.jsx("code",{children:"if"}),", ",e.jsx("code",{children:"elif"}),", ",e.jsx("code",{children:"else"}),",",e.jsx("code",{children:"while"}),", ",e.jsx("code",{children:"for"}),", ",e.jsx("code",{children:"class"}),", ",e.jsx("code",{children:"True"}),", ",e.jsx("code",{children:"False"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"5. Core Data Types in Python"}),e.jsxs("ul",{className:"list-disc ml-6 text-slate-300 text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("b",{children:"int"})," – whole numbers"]}),e.jsxs("li",{children:[e.jsx("b",{children:"float"})," – decimals"]}),e.jsxs("li",{children:[e.jsx("b",{children:"str"})," – text"]}),e.jsxs("li",{children:[e.jsx("b",{children:"bool"})," – True / False"]})]}),e.jsx(s,{initialCode:`a = 10          # int
b = 3.14        # float
c = "Hello"     # str
d = True        # bool

print(type(a), type(b), type(c), type(d))`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"6. Type Casting: Converting Data Types"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Use built-in functions to convert types:"}),e.jsx(s,{initialCode:`x = "20"
y = int(x)   # "20" → 20
z = float(x) # "20" → 20.0

print(y, z)`}),e.jsx(s,{initialCode:`# bool(): empty values → False
print(bool(""))     # False
print(bool("Hi"))   # True
print(bool(0))      # False
print(bool(5))      # True`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"7. Taking User Input using input()"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("code",{children:"input()"})," always returns a string. Convert it if you need a number."]}),e.jsx(s,{initialCode:`name = input("Enter your name: ")
age = int(input("Enter age: "))

print("Welcome", name)
print("Next year you will be", age + 1)`})]}),e.jsxs("section",{className:"bg-slate-800/40 p-5 rounded-xl border border-slate-700",children:[e.jsx("h3",{className:"text-sky-300 text-lg font-semibold",children:"Teacher’s Tips"}),e.jsxs("ul",{className:"list-disc ml-6 mt-2 text-slate-300 text-sm space-y-2",children:[e.jsx("li",{children:"Students must practice indentation; it's the #1 cause of beginner errors."}),e.jsxs("li",{children:["Make them memorize what ",e.jsx("b",{children:"input()"})," returns — always a string."]}),e.jsx("li",{children:"Encourage proper variable naming from the start (snake_case)."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"type()"})," frequently to understand Python’s dynamic typing."]})]})]})]})}export{n as default};
