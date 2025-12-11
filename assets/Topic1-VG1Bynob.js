import{j as e,a as t}from"./index-BGZEUY5K.js";function n(){return e.jsxs("div",{className:"space-y-10",children:[e.jsx("h1",{className:"text-2xl font-bold text-sky-300",children:"Python Core Data Types, Type Casting, Input & Output Formatting"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["In this topic, we explore the foundation of Python's dynamic data system: integers, floats, strings, booleans, and how Python converts between these types. You will also learn how to accept user input and how to control output formatting using ",e.jsx("code",{children:"sep"})," and ",e.jsx("code",{children:"end"}),"."]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"1. Core Data Types in Python"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Python supports multiple built-in data types. The most essential types for beginners are:"}),e.jsxs("ul",{className:"list-disc ml-6 text-slate-300 text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("b",{children:"int"})," — whole numbers (10, −3, 0)"]}),e.jsxs("li",{children:[e.jsx("b",{children:"float"})," — decimal numbers (3.14, −0.45)"]}),e.jsxs("li",{children:[e.jsx("b",{children:"str"}),' — text data ("Hello", "123")']}),e.jsxs("li",{children:[e.jsx("b",{children:"bool"})," — logical values (True, False)"]})]}),e.jsx(t,{initialCode:`a = 10          # int
b = 3.14        # float
c = "Python"    # str
d = True        # bool

print(type(a))
print(type(b))
print(type(c))
print(type(d))`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"2. Type Casting (Converting Data Types)"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Python allows converting from one type to another. This is known as ",e.jsx("b",{children:"type casting"}),"."]}),e.jsx(t,{initialCode:`x = "20"
num = int(x)     # "20" → 20

y = 3.99
val = int(y)     # 3.99 → 3 (decimal removed)

s = str(100)     # 100 → "100"

flag = bool(5)   # True (non-zero value converts to True)

print(num, val, s, flag)`}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["⚠️ Important: ",e.jsx("code",{children:'int("hello")'})," will cause an error because the string cannot be converted."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"3. Getting User Input Using input()"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["The ",e.jsx("code",{children:"input()"})," function always returns a ",e.jsx("b",{children:"string"}),". You must convert it if you want numeric data."]}),e.jsx(t,{initialCode:`name = input("Enter your name: ")
age = int(input("Enter your age: "))

print("Hello", name)
print("Your age after 10 years:", age + 10)`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"4. print() Formatting — sep and end"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Python’s ",e.jsx("code",{children:"print()"})," offers two useful formatting options:"]}),e.jsxs("ul",{className:"list-disc ml-6 text-slate-300 text-sm",children:[e.jsxs("li",{children:[e.jsx("b",{children:"sep"})," → controls how multiple values are separated"]}),e.jsxs("li",{children:[e.jsx("b",{children:"end"})," → controls what is printed at the end"]})]}),e.jsx(t,{initialCode:`print("A", "B", "C", sep="-")
# Output: A-B-C

print("Hello", end=" ")
print("World!")
# Output: Hello World!`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"5. Combined Example"}),e.jsx(t,{initialCode:`name = input("Enter your name: ")
marks1 = float(input("Enter marks in Test 1: "))
marks2 = float(input("Enter marks in Test 2: "))

total = marks1 + marks2
average = total / 2

print("Student:", name)
print("Total Marks =", total)
print("Average =", average)`})]}),e.jsxs("section",{className:"bg-slate-800/40 p-5 rounded-xl border border-slate-700",children:[e.jsx("h3",{className:"text-sky-300 font-semibold text-lg",children:"Teacher’s Tips"}),e.jsxs("ul",{className:"list-disc ml-6 text-slate-300 text-sm space-y-2 mt-2",children:[e.jsxs("li",{children:["Always convert ",e.jsx("code",{children:"input()"})," values to the required type before using them."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"type()"})," often to understand what type your variables hold."]}),e.jsxs("li",{children:[e.jsx("code",{children:"sep"})," is great for clean output formatting in tables or reports."]}),e.jsxs("li",{children:[e.jsx("code",{children:"end"})," is useful when printing on the same line."]}),e.jsx("li",{children:"Practice type casting with different values to build strong fundamentals."})]})]})]})}export{n as default};
