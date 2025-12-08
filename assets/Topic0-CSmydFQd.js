import{j as e,a as s}from"./index-DrvZtsBI.js";function n(){return e.jsxs("div",{className:"space-y-8",children:[e.jsx("h1",{className:"text-2xl font-bold text-sky-300",children:"Python Basics — Indentation, Comments, Variables, Data Types & Input"}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"This topic covers the fundamental building blocks of Python programming. Understanding indentation, comments, variables, data types, and input will give you the perfect start to writing clean and correct Python programs."}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"1. Python Indentation Rules"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Python uses ",e.jsx("b",{children:"indentation"})," (spaces at the beginning of a line) to define blocks of code. Unlike other languages (C, Java), Python does not use braces ",e.jsx("code",{children:"{}"}),"."]}),e.jsx(s,{initialCode:`if True:
    print("This is inside the block")
    print("Still inside")

print("Outside the block")`}),e.jsxs("ul",{className:"list-disc text-slate-300 text-sm ml-6",children:[e.jsx("li",{children:"Recommended indentation = 4 spaces"}),e.jsx("li",{children:"Indentation errors are one of the most common beginner mistakes"})]})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"2. Comments in Python"}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Comments help explain your code and are ignored by Python during execution."}),e.jsx(s,{initialCode:`# This is a single-line comment
print("Hello!")  # Comment at the end`})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"3. Variables & Naming Conventions"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"A variable is a name given to store data. Python automatically detects data type."}),e.jsx(s,{initialCode:`age = 25
name = "Sukanta"
is_student = True`}),e.jsx("h3",{className:"text-slate-300 font-semibold",children:"Naming Rules:"}),e.jsxs("ul",{className:"list-disc ml-6 text-slate-300 text-sm",children:[e.jsx("li",{children:"Start with a letter or underscore"}),e.jsx("li",{children:"Cannot start with a digit"}),e.jsx("li",{children:"No spaces allowed"}),e.jsxs("li",{children:["Case-sensitive — ",e.jsx("code",{children:"name"})," and ",e.jsx("code",{children:"Name"})," are different"]})]})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"4. Keywords & Identifiers"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Keywords are reserved words in Python (cannot be used as variable names)."}),e.jsx(s,{initialCode:`import keyword
print(keyword.kwlist)`})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"5. Core Data Types in Python"}),e.jsx(s,{initialCode:`x = 10       # int
pi = 3.14    # float
name = "Tom" # str
happy = True # bool`}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Python also has advanced types like list, tuple, dict, etc. (covered in later chapters)."})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"6. Type Casting"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Convert one data type to another:"}),e.jsx(s,{initialCode:`a = "20"
b = int(a)     # "20" → 20

x = 3.14
y = int(x)     # 3.14 → 3

z = str(100)   # 100 → "100"`})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"7. Getting User Input"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("code",{children:"input()"})," always returns a string, so type conversion may be required."]}),e.jsx(s,{initialCode:`name = input("Enter your name: ")
age = int(input("Enter age: "))

print("Hello,", name)
print("Age in 5 years =", age + 5)`})]}),e.jsxs("section",{className:"space-y-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"8. print() Formatting — sep & end"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("code",{children:"sep"})," controls the separator, ",e.jsx("code",{children:"end"})," controls what prints at the end."]}),e.jsx(s,{initialCode:`print("A", "B", "C", sep="-") 
# Output: A-B-C

print("Hello", end=" ")
print("World")
# Output: Hello World`})]}),e.jsxs("section",{className:"bg-slate-800/40 p-5 rounded-xl border border-slate-700",children:[e.jsx("h3",{className:"text-sky-300 font-semibold text-lg",children:"Teacher’s Tips"}),e.jsxs("ul",{className:"list-disc ml-6 text-slate-300 text-sm space-y-2 mt-2",children:[e.jsx("li",{children:"Indent properly — Python errors often come from wrong spacing."}),e.jsx("li",{children:"Use comments to explain logic; it improves readability."}),e.jsxs("li",{children:["Choose meaningful variable names like ",e.jsx("code",{children:"total_amount"}),", ",e.jsx("code",{children:"student_name"}),"."]}),e.jsx("li",{children:"Use input() to make programs interactive."}),e.jsx("li",{children:"sep and end help produce precise output formats."})]})]})]})}export{n as default};
