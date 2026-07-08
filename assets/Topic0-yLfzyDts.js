import{r as d,j as n}from"./index-CFVtO9P_.js";import{P as y}from"./PrintButton-DGphNr9c.js";import{P as m}from"./PythonCodeBlock-BU_4Xbz-.js";import"./prism-BpRLhmdq.js";import"./browser-BLY_Ogsx.js";const w=({data:i,isLoggedIn:p=!1,organizationDetails:c={}})=>{const[u,g]=d.useState({}),h=(e,s)=>{const t=`${e}-${s}`;g(r=>({...r,[t]:!r[t]}))},x=e=>{if(!e)return null;const s=/```python\n([\s\S]*?)```/g,t=[];let r=0,a;for(;(a=s.exec(e))!==null;){a.index>r&&t.push(n.jsx("span",{className:"whitespace-pre-wrap",children:e.slice(r,a.index)},`text-${r}`));const o=a[1].trim();t.push(n.jsx(m,{code:o,title:"Python Code"},`code-${a.index}`)),r=a.index+a[0].length}return r<e.length&&t.push(n.jsx("span",{className:"whitespace-pre-wrap",children:e.slice(r)},`text-${r}`)),t.length?t:n.jsx("span",{className:"whitespace-pre-wrap",children:e})},b=e=>{if(!e)return null;const s=/```python\n([\s\S]*?)```/g,t=[];let r=0,a;for(;(a=s.exec(e))!==null;){if(a.index>r){const l=e.slice(r,a.index);l.trim()&&t.push(n.jsx("p",{className:"whitespace-pre-wrap text-gray-300 print:text-black print:leading-tight",children:l},`text-${r}`))}const o=a[1].trim();t.push(n.jsx(m,{code:o,title:"Python Code"},`code-${a.index}`)),r=a.index+a[0].length}if(r<e.length){const o=e.slice(r);o.trim()&&t.push(n.jsx("p",{className:"whitespace-pre-wrap text-gray-300 print:text-black print:leading-tight",children:o},`text-${r}`))}return t.length?t:n.jsx("p",{className:"whitespace-pre-wrap text-gray-300 print:text-black print:leading-tight",children:e})},f=e=>e&&(e.includes("```python")||/class\s+\w+:|def\s+\w+\(|import\s+\w+/.test(e));return n.jsxs("div",{className:"max-w-4xl mx-auto p-6 bg-gray-900 shadow-lg rounded-xl text-gray-100 print:bg-white print:text-black print:p-4",children:[n.jsx("div",{className:"flex justify-end mb-4 no-print",children:n.jsx(y,{targetId:"print-content",title:i.title,organizationDetails:c})}),n.jsxs("div",{id:"print-content",className:"print:leading-tight",children:[n.jsxs("div",{className:"text-center border-b border-gray-700 print:border-black pb-4 mb-6 print:pb-2 print:mb-3",children:[n.jsx("h1",{className:"text-2xl font-bold text-white print:text-black print:text-xl print:mb-1",children:i.title}),n.jsxs("p",{className:"text-sm text-gray-400 print:text-gray-600 print:text-xs",children:["Paper ID: ",i.paperId]}),n.jsxs("div",{className:"flex justify-between mt-2 text-sm text-gray-400 print:text-gray-600 print:text-xs print:mt-1",children:[n.jsxs("span",{children:["Duration: ",i.duration]}),n.jsxs("span",{children:["Total Marks: ",i.totalMarks]})]}),i.prerequisites&&n.jsx("div",{className:"mt-3 text-xs text-gray-500 print:text-gray-600 print:text-xs print:mt-1",children:n.jsxs("span",{children:["Prerequisites: ",i.prerequisites]})})]}),i.instructions&&n.jsxs("div",{className:"mb-6 p-4 bg-gray-800 rounded-lg border border-gray-700 print:bg-white print:border-black print:shadow-none print:p-3 print:mb-3",children:[n.jsx("h3",{className:"text-md font-semibold text-yellow-400 print:text-black mb-2 print:text-sm print:mb-1",children:"Instructions:"}),n.jsx("ul",{className:"list-disc pl-5 text-sm text-gray-300 print:text-black print:text-xs space-y-1 print:space-y-0.5",children:i.instructions.map((e,s)=>n.jsx("li",{className:"print:text-black print:leading-tight",children:e},s))})]}),i.sections.map((e,s)=>n.jsxs("div",{className:"mb-8 print:mb-4",children:[n.jsxs("div",{className:"mb-3 print:mb-2",children:[n.jsxs("h2",{className:"text-lg font-semibold text-white print:text-black print:text-base",children:["Section ",e.section,": ",e.type]}),n.jsxs("p",{className:"text-sm text-gray-400 print:text-gray-600 print:text-xs",children:["(",e.totalQuestions," Questions × ",e.marksPerQuestion," Marks)"]}),e.description&&n.jsx("p",{className:"text-xs text-gray-500 print:text-gray-600 print:text-xs print:mt-0.5",children:e.description})]}),n.jsx("ol",{className:"list-decimal pl-5 space-y-6 print:space-y-2",children:e.questions.map((t,r)=>{const a=`${s}-${r}`,o=u[a],l=t.answer&&f(t.answer);return n.jsxs("li",{className:"space-y-2 print:space-y-1",children:[n.jsxs("div",{className:"flex justify-between items-start gap-4",children:[n.jsx("div",{className:"text-gray-200 print:text-black flex-1 font-medium print:text-sm",children:x(t.q)}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsxs("span",{className:"text-sm text-gray-400 print:text-gray-600 font-mono print:text-xs",children:["[",t.marks," marks]"]}),p&&n.jsx("button",{onClick:()=>h(s,r),className:"px-2 py-1 text-xs rounded bg-blue-600 hover:bg-blue-500 text-white transition-colors no-print",children:o?"Hide Answer":"Show Answer"})]})]}),t.hint&&n.jsxs("div",{className:"text-xs text-gray-500 print:text-gray-600 italic pl-4 print:text-xs print:leading-tight",children:["💡 Hint: ",t.hint]}),p&&o&&t.answer&&n.jsx("div",{className:`answer-content mt-3 p-4 rounded-lg border ${l?"bg-gray-850":"bg-gray-800"} print:bg-white border-gray-700 print:border-black print:p-2 print:mt-1`,children:n.jsxs("div",{className:"text-sm print:text-xs",children:[n.jsxs("div",{className:"text-emerald-400 print:text-black text-xs font-semibold mb-2 flex items-center gap-2 print:mb-1",children:[n.jsx("span",{children:"📝 Answer:"}),l&&n.jsx("span",{className:"text-blue-400 print:text-gray-600",children:"(Includes Python Code)"})]}),b(t.answer)]})})]},r)})})]},s)),n.jsxs("div",{className:"mt-8 pt-4 border-t border-gray-700 print:border-gray-300 text-center text-xs text-gray-500 print:text-gray-600 print:mt-4 print:pt-2",children:[n.jsxs("p",{children:["© ",new Date().getFullYear()," Python Question Paper - All Rights Reserved"]}),n.jsx("p",{className:"mt-1 print:mt-0.5",children:"Good Luck!"})]})]}),n.jsx("style",{jsx:!0,children:`
        @media print {
          .print\\:bg-white {
            background-color: white !important;
          }
          .print\\:text-black {
            color: black !important;
          }
          .print\\:text-gray-600 {
            color: #4b5563 !important;
          }
          .print\\:border-black {
            border-color: black !important;
          }
          .print\\:border-gray-300 {
            border-color: #d1d5db !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          body, div, p, li, span, h1, h2, h3, h4 {
            line-height: 1.2 !important;
          }
          li, .list-disc li {
            line-height: 1.15 !important;
            margin-bottom: 2px !important;
          }
          .mb-8 {
            margin-bottom: 0.75rem !important;
          }
          .space-y-6 > * + * {
            margin-top: 0.5rem !important;
          }
          p {
            margin-bottom: 0.25rem !important;
            line-height: 1.2 !important;
          }
          pre, code {
            background-color: #f3f4f6 !important;
            color: black !important;
            border: 1px solid #d1d5db !important;
            line-height: 1.2 !important;
            margin: 0.25rem 0 !important;
          }
          h1, h2, h3 {
            margin-bottom: 0.25rem !important;
            margin-top: 0.25rem !important;
          }
          .p-4 {
            padding: 0.5rem !important;
          }
          .p-6 {
            padding: 1rem !important;
          }
        }
      `})]})},k="PYTHON-FUNCTIONS-50-SET-01",v="Python Programming - Functions (50 Marks)",j="1.5 Hours",N=50,P="Basic Python syntax, variables, data types, loops, and conditionals",_=["All questions are compulsory","Write Python code where required","Assume Python 3.8+","Proper indentation and comments may carry partial marks"],A=[{section:"A",type:"Short Answer",marksPerQuestion:2,totalQuestions:5,description:"Answer in 2-3 lines",questions:[{q:"What is a function in Python? Write the syntax for defining a function with one parameter.",marks:2,answer:"A function is a reusable block of code that performs a specific task. It helps in modularity and code reuse.\n\n```python\ndef my_function(param):\n    # function body\n    return result\n```"},{q:"Distinguish between function declaration and function calling with an example.",marks:2,answer:`Function declaration defines the function (using def), while function calling executes it.

\`\`\`python
def greet():          # declaration
    print("Hello")

greet()               # calling
\`\`\``},{q:"What are default parameter values? Provide a suitable example.",marks:2,answer:`Default parameters are assigned a default value that is used if the caller does not supply a value for that argument.

\`\`\`python
def power(base, exp=2):
    return base ** exp

print(power(3))    # uses exp=2 → 9
print(power(3, 3)) # overrides → 27
\`\`\``},{q:"Explain the difference between *args and **kwargs in function definitions.",marks:2,answer:`*args collects extra positional arguments as a tuple, while **kwargs collects extra keyword arguments as a dictionary.

\`\`\`python
def demo(*args, **kwargs):
    print(args)   # tuple
    print(kwargs) # dict

demo(1,2,3, name="Alice", age=25)
\`\`\``},{q:"What is a lambda function? Write a lambda that returns the square of a number.",marks:2,answer:"A lambda is an anonymous, single‑expression function defined using the `lambda` keyword.\n\n```python\nsquare = lambda x: x ** 2\nprint(square(5))  # 25\n```"}]},{section:"B",type:"Descriptive",marksPerQuestion:5,totalQuestions:4,description:"Explain with examples",questions:[{q:"Explain the different types of arguments in Python functions: positional, keyword, default, and required. Provide examples for each.",marks:5,answer:`**1. Positional arguments** – must be passed in the correct order:
\`\`\`python
def add(a, b): return a + b
add(3, 5)
\`\`\`

**2. Keyword arguments** – passed by parameter name, order doesn't matter:
\`\`\`python
add(b=5, a=3)
\`\`\`

**3. Default arguments** – have a default value; can be omitted:
\`\`\`python
def greet(name, msg="Hello"):
    print(f"{msg}, {name}")
greet("Alice")          # Hello, Alice
greet("Bob", "Hi")      # Hi, Bob
\`\`\`

**4. Required arguments** – have no default; must be provided by the caller:
\`\`\`python
# 'name' is required, 'msg' is default
def show(name, msg="Hi"):
    print(name, msg)
show("John")  # 'name' is required
\`\`\`

All argument types can be mixed, but positional must come before keyword/default.`},{q:"Explain variable‑length arguments (*args and **kwargs) with a complete example. Also demonstrate unpacking arguments in function calls using * and **.",marks:5,answer:`*args collects extra positional arguments as a tuple; **kwargs collects extra keyword arguments as a dictionary.

\`\`\`python
def summarize(*args, **kwargs):
    print("Positional args:", args)
    print("Keyword args:", kwargs)

summarize(10, 20, 30, name="Python", version=3.9)
\`\`\`

**Unpacking in function calls:**
\`\`\`python
def multiply(a, b, c):
    return a * b * c

# Unpack list/tuple
nums = [2, 3, 4]
print(multiply(*nums))   # 24

# Unpack dictionary
data = {'a':2, 'b':3, 'c':5}
print(multiply(**data))  # 30
\`\`\`

**Practical use:**
\`\`\`python
def log(level, *messages, **metadata):
    print(f"[{level}]", *messages)
    for key, value in metadata.items():
        print(f"  {key}: {value}")

log("INFO", "User logged in", "IP:192.168.1.1", user="Alice", time="10:00")
\`\`\``},{q:"Explain the return statement in Python. How can a function return multiple values? What happens if a function does not have a return statement?",marks:5,answer:`The \`return\` statement exits a function and optionally passes back a value to the caller.

**Returning multiple values:**
Python returns multiple values as a tuple, which can be unpacked.
\`\`\`python
def get_stats(numbers):
    return min(numbers), max(numbers), sum(numbers)/len(numbers)

min_val, max_val, avg = get_stats([10, 20, 30])
print(min_val, max_val, avg)  # 10 30 20.0
\`\`\`

**Function without return:**
If no return statement is executed, the function returns \`None\`.
\`\`\`python
def greet(name):
    print(f"Hello {name}")

result = greet("Alice")
print(result)  # None
\`\`\`

\`None\` is a singleton object representing absence of a value. It evaluates to \`False\` in boolean contexts.`},{q:"Explain local and global scope in Python. How does the 'global' keyword work? Provide an example demonstrating variable lifetime and namespace.",marks:5,answer:`**Local scope:** Variables defined inside a function are local to that function.
**Global scope:** Variables defined at the top level of a module are global.

\`\`\`python
global_var = 10   # global scope

def my_func():
    local_var = 5   # local scope
    print(global_var)   # can read global
    # global_var = 20   # would create a local variable, not modify global

def modify_global():
    global global_var   # declare intent to modify global
    global_var = 20

my_func()
modify_global()
print(global_var)  # 20
\`\`\`

**Lifetime:**
- Global variables exist from module load until program end.
- Local variables exist only while the function is executing; they are destroyed when the function returns.

**Namespace concept:**
Python uses LEGB rule: Local → Enclosing → Global → Built-in.
\`\`\`python
x = "global"
def outer():
    x = "enclosing"
    def inner():
        x = "local"
        print(x)   # local
    inner()
    print(x)       # enclosing
outer()
print(x)           # global
\`\`\`

Use \`nonlocal\` to modify variables in enclosing (nested) scopes.`}]},{section:"C",type:"Programming",marksPerQuestion:10,totalQuestions:2,description:"Write complete Python programs",questions:[{q:"Write a Python program that defines a function `process_numbers(*args, **kwargs)`. The function should:\n- Accept any number of positional numbers (args) and keyword arguments (kwargs).\n- Calculate and return the sum of all positional numbers.\n- If a keyword argument `multiplier` is present, multiply the sum by that multiplier.\n- If `round_to` is present, round the result to that many decimal places.\n- Demonstrate the function with at least three different calls, including unpacking of a list and a dictionary.",marks:10,hint:"Use *args for numbers, **kwargs for options",answer:`\`\`\`python
def process_numbers(*args, **kwargs):
    """
    Sum all positional numbers, apply multiplier and rounding based on kwargs.
    """
    total = sum(args)
    
    if 'multiplier' in kwargs:
        total *= kwargs['multiplier']
    
    if 'round_to' in kwargs:
        total = round(total, kwargs['round_to'])
    
    return total

# Demonstration
print("1.", process_numbers(10, 20, 30))                     # 60
print("2.", process_numbers(1, 2, 3, 4, multiplier=2))       # (1+2+3+4)*2 = 20
print("3.", process_numbers(5, 7, 2.5, multiplier=1.5, round_to=1))  # (14.5)*1.5=21.75 → 21.8

# Unpacking examples
num_list = [100, 200, 300]
options = {'multiplier': 0.1, 'round_to': 2}
print("4.", process_numbers(*num_list, **options))           # (600)*0.1=60.0 → 60.00

# Mixed unpacking
num_tuple = (2, 4, 6)
print("5.", process_numbers(1, *num_tuple, multiplier=3))    # (1+2+4+6)*3=39
\`\`\``},{q:"Write a Python function `calculate(a, b, operation)` that takes two numbers and a string operation ('add', 'subtract', 'multiply', 'divide'). The function should perform the requested operation and return the result. If an invalid operation is given, return `None`. Then write a main program that:\n- Asks the user for two numbers and an operation.\n- Calls the function and prints the result (or an error message if operation is invalid).\n- Also demonstrate calling the function with keyword arguments (e.g., `calculate(b=5, a=3, operation='add')`).",marks:10,hint:"Use if-elif-else; handle division by zero by returning 'Error: Division by zero'.",answer:`\`\`\`python
def calculate(a, b, operation):
    """Performs basic arithmetic and returns result or None for invalid op."""
    if operation == 'add':
        return a + b
    elif operation == 'subtract':
        return a - b
    elif operation == 'multiply':
        return a * b
    elif operation == 'divide':
        if b == 0:
            return 'Error: Division by zero'
        return a / b
    else:
        return None

# Main program
if __name__ == "__main__":
    # User input
    try:
        x = float(input("Enter first number: "))
        y = float(input("Enter second number: "))
        op = input("Enter operation (add/subtract/multiply/divide): ").strip().lower()
        
        result = calculate(x, y, op)
        
        if result is None:
            print("Invalid operation!")
        else:
            print(f"Result: {result}")
    except ValueError:
        print("Please enter valid numbers.")
    
    # Demonstration of keyword arguments
    print("\\nKeyword argument demo:")
    res = calculate(b=10, a=20, operation='subtract')
    print(f"20 - 10 = {res}")
\`\`\``}]}],q={paperId:k,title:v,duration:j,totalMarks:N,prerequisites:P,instructions:_,sections:A},Q=()=>{const[i]=d.useState(q),p={name:"Coder & AccoTax",address:"Barrackpore, Kolkata",logo:"/logo.png"};return n.jsx("div",{className:"container mx-auto py-8",children:n.jsx(w,{data:i,isLoggedIn:!0,organizationDetails:p})})};export{Q as default};
