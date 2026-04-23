import{j as e}from"./index-CmAIoOXN.js";import{P as a}from"./PythonFileLoader-B-WJIo-m.js";import{T as n}from"./TeacherSukantaHui-1LCiMfJM.js";import{F as s}from"./FAQTemplate-BRdhMyQo.js";import"./PythonCodeBlock-O84Db7qU.js";import"./prism-6Oj8TI1J.js";import"./browser-n5DCIAUE.js";import"./git-branch-AzLzm2E2.js";import"./clsx-B-dksMZM.js";const t=[{question:"What is a lambda function in Python?",shortAnswer:"A small, anonymous function defined with the `lambda` keyword.",explanation:"Lambdas are limited to a single expression and are often used as inline functions.",hint:"Think of them as one‑line throwaway functions.",level:"basic",codeExample:"add = lambda x, y: x + y"},{question:"What is the syntax of a lambda function?",shortAnswer:"`lambda arguments: expression`",explanation:"Arguments are comma‑separated, and the expression is evaluated and returned.",hint:"No `return` keyword needed.",level:"basic",codeExample:"square = lambda x: x ** 2"},{question:"Can a lambda function have multiple statements?",shortAnswer:"No, only a single expression is allowed.",explanation:"Lambdas cannot contain statements like `if`, `for`, `while`, or `return`.",hint:"Use a regular `def` for complex logic.",level:"basic",codeExample:"# lambda x: if x>0: return x  # SyntaxError"},{question:"Do lambda functions have a name?",shortAnswer:"No, they are anonymous unless assigned to a variable.",explanation:"Their `__name__` attribute is `'<lambda>'`.",hint:"They are often used without naming.",level:"basic",codeExample:"f = lambda x: x+1; print(f.__name__)  # '<lambda>'"},{question:"How do you call a lambda function?",shortAnswer:"Like any other function: `lambda_func(arguments)` or directly `(lambda x: x*2)(5)`.",explanation:"You can assign it to a variable and call it, or call it immediately.",hint:"Parentheses around the lambda are needed for immediate call.",level:"basic",codeExample:"result = (lambda x: x*2)(5)  # 10"},{question:"Can a lambda have default argument values?",shortAnswer:"Yes, just like regular functions.",explanation:"`lambda x, y=10: x + y` works.",hint:"Useful for optional parameters.",level:"intermediate",codeExample:"increment = lambda x, step=1: x + step"},{question:"Can a lambda have variable-length arguments (`*args`, `**kwargs`)?",shortAnswer:"Yes, lambdas support `*args` and `**kwargs`.",explanation:"Example: `lambda *args: sum(args)`.",hint:"Same as def.",level:"intermediate",codeExample:"sum_all = lambda *nums: sum(nums)"},{question:"What is the return type of a lambda?",shortAnswer:"The type of the expression result.",explanation:"It's inferred from the expression; no explicit type annotation.",hint:"Can be any Python type.",level:"basic",codeExample:"lambda: None  # returns None; lambda: 5 returns int"},{question:"Can a lambda contain an `if` statement?",shortAnswer:"No, but you can use a conditional expression (`x if condition else y`).",explanation:"The ternary operator is an expression, not a statement.",hint:"Use `value_if_true if condition else value_if_false`.",level:"intermediate",codeExample:"abs = lambda x: x if x>=0 else -x"},{question:"What is the difference between `lambda` and `def`?",shortAnswer:"`lambda` is an expression that creates a function; `def` is a statement that defines a named function.",explanation:"Lambdas are limited to one expression, cannot contain statements, and have no docstring.",hint:"Use `def` for anything beyond a trivial expression.",level:"basic",codeExample:"def f(x): return x*2  # vs lambda x: x*2"},{question:"Where are lambdas commonly used?",shortAnswer:"As arguments to higher‑order functions like `map()`, `filter()`, `sorted()`, `reduce()`.",explanation:"They provide a concise way to specify simple transformations.",hint:"Think of callbacks and keys.",level:"basic",codeExample:"sorted(list, key=lambda x: x[1])"},{question:"Can a lambda function be recursive?",shortAnswer:"Technically yes, but it's very awkward and not recommended.",explanation:"You would need to assign the lambda to a name, defeating the purpose.",hint:"Use `def` for recursion.",level:"advanced",codeExample:"fact = lambda n: 1 if n<=1 else n * fact(n-1)  # works but odd"},{question:"How do you write a lambda that returns a tuple?",shortAnswer:"Just return the tuple: `lambda: (1, 2, 3)`.",explanation:"Parentheses are required for tuple syntax.",hint:"No special trick.",level:"basic",codeExample:"get_coords = lambda: (10, 20)"},{question:"Can a lambda have a docstring?",shortAnswer:"No, lambdas cannot have docstrings.",explanation:"They are intended for very short, self‑explanatory functions.",hint:"If you need a docstring, use `def`.",level:"intermediate",codeExample:"# lambda x: x*2  # cannot attach __doc__"},{question:"What is the `__name__` of a lambda?",shortAnswer:"`'<lambda>'`.",explanation:"All lambdas have the same name, which can make debugging harder.",hint:"Tracebacks will show `<lambda>`.",level:"intermediate",codeExample:"f = lambda: None; print(f.__name__)  # '<lambda>'"},{question:"Can I use type hints with lambda?",shortAnswer:"No, lambda syntax does not support type annotations.",explanation:"Python's grammar does not allow `:` inside lambda parameters.",hint:"Use `def` if you need type hints.",level:"advanced",codeExample:"# lambda x: int  # no"},{question:"What is the late binding gotcha with lambdas in loops?",shortAnswer:"Lambdas created in a loop capture the loop variable by reference, so they all see the final value.",explanation:"Solution: bind the current value as a default argument: `lambda i=i: i`.",hint:"Use default argument to capture current value.",level:"advanced",codeExample:"funcs = [lambda i=i: i for i in range(3)]"},{question:"Can a lambda be used as a key in `sorted()`?",shortAnswer:"Yes, very common. Example: `sorted(data, key=lambda x: x[1])`.",explanation:"The lambda extracts the sort key from each element.",hint:"Powerful and concise.",level:"basic",codeExample:"pairs = [(1,2), (3,1)]; sorted(pairs, key=lambda p: p[1])"},{question:"How do you write a lambda that does nothing?",shortAnswer:"`lambda: None`",explanation:"A lambda that takes no arguments and returns `None`.",hint:"Useful as a placeholder.",level:"basic",codeExample:"do_nothing = lambda: None"},{question:"Can a lambda be used with `map()` to convert types?",shortAnswer:"Yes, `map(lambda x: int(x), list_of_strings)`.",explanation:"Lambdas are perfect for element‑wise transformations.",hint:"Often used with `map`.",level:"intermediate",codeExample:"list(map(lambda s: s.upper(), ['a','b']))  # ['A','B']"},{question:"What is the performance difference between lambda and def?",shortAnswer:"Negligible; both create function objects.",explanation:"Lambdas might be slightly faster to define (no `def` overhead), but call time is identical.",hint:"Don't optimise prematurely.",level:"expert",codeExample:"Microbenchmarks show minimal difference."},{question:"Can a lambda return a lambda?",shortAnswer:"Yes, this is currying: `lambda x: lambda y: x + y`.",explanation:"The outer lambda returns another lambda, which can be called later.",hint:"Functional programming technique.",level:"advanced",codeExample:"add_x = lambda x: lambda y: x + y; add_5 = add_x(5); print(add_5(3))  # 8"},{question:"Is `lambda` faster than a list comprehension?",shortAnswer:"No, list comprehensions are usually faster for transformations.",explanation:"`map` with lambda has function call overhead per element.",hint:"Prefer list comprehensions for readability and speed.",level:"advanced",codeExample:"# [x*2 for x in data] is faster than list(map(lambda x: x*2, data))"},{question:"Can I pickle a lambda function?",shortAnswer:"No, lambda functions cannot be pickled because they are anonymous.",explanation:"Pickle requires a fully qualified name; lambdas don't have one.",hint:"Use a regular `def` for serializable functions.",level:"expert",codeExample:"import pickle; pickle.dumps(lambda x: x)  # PicklingError"},{question:"What is the `__code__` attribute of a lambda?",shortAnswer:"It contains the bytecode, just like a regular function.",explanation:"Lambdas are function objects, so they have all the same attributes.",hint:"Inspect with `lambda.__code__.co_argcount`.",level:"expert",codeExample:"f = lambda a,b: a+b; print(f.__code__.co_argcount)  # 2"},{question:"Can a lambda be used as a decorator?",shortAnswer:"Technically yes, but it's unusual and hard to read.",explanation:"Example: `@lambda func: lambda *args: func(*args)` is possible but not recommended.",hint:"Use `def` for decorators.",level:"expert",codeExample:"# Not practical"},{question:"How do you write a lambda that prints something?",shortAnswer:"`lambda x: print(x)` – but it returns `None`, so be careful.",explanation:"`print` is an expression that returns `None`, so it's allowed.",hint:"Not recommended; side effects in lambdas are discouraged.",level:"intermediate",codeExample:"show = lambda x: print(x); show('hi')"},{question:"Can a lambda raise an exception?",shortAnswer:"Yes, by using `raise` inside a lambda? No – `raise` is a statement. But you can call a function that raises.",explanation:"You cannot write `lambda: raise ValueError` directly, but you can call a function that raises.",hint:"Indirectly possible but ugly.",level:"expert",codeExample:"raiser = lambda: exec('raise ValueError')  # works but horrible"},{question:"What is the `__qualname__` of a lambda?",shortAnswer:"`'<lambda>'`.",explanation:"Same as `__name__`; no qualifier because there's no scope.",hint:"Not useful for debugging.",level:"advanced",codeExample:"print((lambda: None).__qualname__)  # '<lambda>'"},{question:"Can a lambda be used in `if` condition?",shortAnswer:"Yes, the lambda itself is truthy, but you likely want to call it.",explanation:"`if lambda x: x>0:` is always true because the lambda object exists.",hint:"Don't forget the parentheses to call it.",level:"intermediate",codeExample:"if (lambda x: x>0)(5): print('positive')"},{question:"What is the difference between `lambda` and `functools.partial`?",shortAnswer:"`lambda` creates a new function; `partial` freezes arguments of an existing function.",explanation:"Both are used to create callables with fewer arguments.",hint:"Use `partial` for reusing existing functions, `lambda` for small custom logic.",level:"advanced",codeExample:"from functools import partial; double = partial(lambda x,y: x*y, y=2)"}],r=`# lambda_basic.py\r
# Basic lambda functions and usage\r
\r
# Simple lambda assigned to a variable (not typical but educational)\r
square = lambda x: x ** 2\r
print(square(5))  # 25\r
\r
# Lambda with multiple arguments\r
add = lambda a, b: a + b\r
print(add(3, 7))  # 10\r
\r
# Lambda with a conditional expression\r
max_val = lambda a, b: a if a > b else b\r
print(max_val(10, 20))  # 20\r
\r
# Lambda without assignment – used immediately\r
print((lambda x, y: x * y)(4, 5))  # 20\r
\r
# Lambda returning a string\r
greet = lambda name: f"Hello, {name}!"\r
print(greet("Swadeep"))\r
\r
# Lambda can be used with default arguments\r
increment = lambda x, step=1: x + step\r
print(increment(10))      # 11\r
print(increment(10, 3))   # 13`,i=`# lambda_with_args.py\r
# Lambdas with multiple arguments and advanced patterns\r
\r
# Multiple arguments\r
area = lambda length, width: length * width\r
print(area(5, 3))  # 15\r
\r
# Variable arguments (*args)\r
sum_all = lambda *args: sum(args)\r
print(sum_all(1, 2, 3, 4))  # 10\r
\r
# Keyword arguments (**kwargs) – works but rarely used\r
print_values = lambda **kwargs: [print(f"{k}={v}") for k, v in kwargs.items()]\r
print_values(name="Tuhina", age=16)\r
\r
# Lambda returning a lambda (currying)\r
multiply_by = lambda factor: lambda x: x * factor\r
double = multiply_by(2)\r
triple = multiply_by(3)\r
print(double(5))   # 10\r
print(triple(5))   # 15\r
\r
# Lambda with unpacking\r
pair = (3, 4)\r
add_pair = lambda p: p[0] + p[1]\r
print(add_pair(pair))  # 7\r
\r
# Better: unpack in arguments\r
add_unpack = lambda x, y: x + y\r
print(add_unpack(*pair))  # 7`,l=`# lambda_vs_def.py\r
# Comparing lambda with regular def functions\r
\r
# Regular function\r
def multiply_def(x, y):\r
    return x * y\r
\r
# Lambda equivalent\r
multiply_lambda = lambda x, y: x * y\r
\r
print(multiply_def(4, 5))   # 20\r
print(multiply_lambda(4, 5))# 20\r
\r
# When lambda is not enough – need statements\r
def safe_divide_def(a, b):\r
    if b == 0:\r
        return None\r
    return a / b\r
\r
# Lambda with conditional expression (works but less readable)\r
safe_divide_lambda = lambda a, b: None if b == 0 else a / b\r
\r
print(safe_divide_def(10, 2))   # 5.0\r
print(safe_divide_lambda(10, 0)) # None\r
\r
# Multiple statements – impossible in lambda\r
def log_and_return_def(x):\r
    print(f"Processing {x}")\r
    return x * 2\r
\r
# Can't do this in a lambda (print is expression, but return? no)\r
log_lambda = lambda x: (print(f"Processing {x}"), x * 2)[1]  # hacky, not recommended\r
print(log_lambda(5))\r
\r
# Recommendation: use def when:\r
# - You need multiple lines\r
# - You need statements (if, while, for, return)\r
# - The function is reused often\r
# - You need a docstring`,o=`# lambda_realworld.py\r
# Real-world usage of lambdas\r
\r
# 1. Sorting with custom keys\r
students = [\r
    {"name": "Swadeep", "age": 17},\r
    {"name": "Tuhina", "age": 16},\r
    {"name": "Abhronila", "age": 15},\r
    {"name": "Debangshu", "age": 17}\r
]\r
\r
# Sort by age (ascending)\r
sorted_by_age = sorted(students, key=lambda s: s["age"])\r
print("Sorted by age:", sorted_by_age)\r
\r
# Sort by name (descending)\r
sorted_by_name = sorted(students, key=lambda s: s["name"], reverse=True)\r
print("Sorted by name desc:", sorted_by_name)\r
\r
# 2. Filtering with filter()\r
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\r
evens = list(filter(lambda x: x % 2 == 0, numbers))\r
print("Even numbers:", evens)\r
\r
# 3. Transforming with map()\r
celsius = [0, 10, 20, 30, 40]\r
fahrenheit = list(map(lambda c: (c * 9/5) + 32, celsius))\r
print("Fahrenheit:", fahrenheit)\r
\r
# 4. Using with reduce (from functools)\r
from functools import reduce\r
product = reduce(lambda a, b: a * b, [1, 2, 3, 4])\r
print("Product of list:", product)  # 24\r
\r
# 5. Using as key in max/min\r
richest = max(students, key=lambda s: s["age"])\r
print("Oldest student:", richest)\r
\r
# 6. In GUI callbacks (conceptual)\r
# button = Button(text="Click", command=lambda: print("Clicked!"))\r
\r
# 7. Lambda to create simple data transformations\r
names = ["swadeep", "tuhina", "abhronila"]\r
capitalized = list(map(lambda name: name.capitalize(), names))\r
print("Capitalized:", capitalized)`;function g(){return e.jsxs("div",{className:"w-full max-w-5xl mx-auto px-4 py-8 space-y-12 bg-gray-900 text-gray-100",children:[e.jsxs("section",{className:"space-y-6 reveal-fade-up",children:[e.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent",children:"🐑 Lambda (Anonymous) Functions: Syntax and Basic Usage"}),e.jsxs("div",{className:"prose prose-invert max-w-none space-y-4",children:[e.jsxs("p",{className:"text-lg leading-relaxed",children:["A ",e.jsx("strong",{className:"text-blue-300",children:"lambda function"})," is a small, anonymous function that can be defined",e.jsx("strong",{className:"text-yellow-300",children:" in a single line"}),'. It\'s called "anonymous" because it doesn‘t have a name (though you can assign it to a variable). Lambdas are often used for short, throwaway operations where a full `def` would be overkill.']}),e.jsx("div",{className:"bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500",children:e.jsxs("p",{className:"font-mono text-sm",children:[e.jsx("span",{className:"text-yellow-300",children:"# Regular function"}),e.jsx("br",{}),e.jsx("span",{className:"text-green-300",children:"def add(x, y): return x + y"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{className:"text-yellow-300",children:"# Lambda equivalent"}),e.jsx("br",{}),e.jsx("span",{className:"text-green-300",children:"add = lambda x, y: x + y"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{className:"text-green-300",children:"print(add(3, 5))  # 8"})]})})]})]}),e.jsxs("section",{className:"space-y-6 reveal-fade-up",style:{animationDelay:"0.1s"},children:[e.jsx("h2",{className:"text-3xl font-semibold border-l-4 border-green-500 pl-4",children:"📝 Lambda Syntax"}),e.jsxs("div",{className:"bg-gray-800 rounded-xl p-5 border border-gray-700",children:[e.jsx("pre",{className:"text-sm font-mono text-emerald-300 overflow-x-auto",children:`lambda arguments: expression

# arguments: comma-separated parameters (like in def)
# expression: a single Python expression (no statements, no assignments)

# Returns: the result of the expression`}),e.jsxs("ul",{className:"mt-4 space-y-2 text-gray-300 list-disc list-inside",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Return type:"})," The type of the expression result (inferred)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Purpose:"})," Create small, inline functions without naming them."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"When & why:"})," When you need a simple function for a short period, especially as an argument to functions like `map()`, `filter()`, `sorted()`."]})]})]})]}),e.jsxs("section",{className:"space-y-6 reveal-fade-up",style:{animationDelay:"0.2s"},children:[e.jsx("h2",{className:"text-3xl font-semibold border-l-4 border-yellow-500 pl-4",children:"⚙️ Lambda Characteristics"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-gray-800/70 rounded-xl p-4 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300",children:[e.jsx("div",{className:"text-yellow-300 text-xl mb-2",children:"1️⃣ Single expression only"}),e.jsx("p",{className:"text-gray-300",children:"No statements like `return`, `if`‑`else` (but conditional expressions work)."}),e.jsxs("pre",{className:"text-xs mt-2 bg-gray-900 p-2 rounded",children:["lambda x: x*2  # ok",e.jsx("br",{}),"# lambda x: if x>0: return x  # SyntaxError"]})]}),e.jsxs("div",{className:"bg-gray-800/70 rounded-xl p-4 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300",children:[e.jsx("div",{className:"text-purple-300 text-xl mb-2",children:"2️⃣ Anonymous (no name)"}),e.jsx("p",{className:"text-gray-300",children:"Often used directly without assigning to a variable."}),e.jsx("pre",{className:"text-xs mt-2 bg-gray-900 p-2 rounded",children:"sorted(data, key=lambda x: x[1])"})]}),e.jsxs("div",{className:"bg-gray-800/70 rounded-xl p-4 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300",children:[e.jsx("div",{className:"text-green-300 text-xl mb-2",children:"3️⃣ Can be assigned to a variable"}),e.jsx("p",{className:"text-gray-300",children:"But then it's no longer truly anonymous; still useful for short functions."}),e.jsx("pre",{className:"text-xs mt-2 bg-gray-900 p-2 rounded",children:"square = lambda x: x**2"})]}),e.jsxs("div",{className:"bg-gray-800/70 rounded-xl p-4 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300",children:[e.jsx("div",{className:"text-red-300 text-xl mb-2",children:"4️⃣ Limited to one line"}),e.jsx("p",{className:"text-gray-300",children:"For anything complex, use a regular `def`."}),e.jsx("pre",{className:"text-xs mt-2 bg-gray-900 p-2 rounded",children:"# lambda cannot contain loops or multiple statements"})]})]})]}),e.jsxs("section",{className:"space-y-8 reveal-fade-up",style:{animationDelay:"0.3s"},children:[e.jsx("h2",{className:"text-3xl font-semibold border-l-4 border-green-500 pl-4",children:"💻 Live Python Examples"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-yellow-300",children:"1️⃣ Basic Lambda Usage (lambda_basic.py)"}),e.jsx(a,{fileModule:r,title:"lambda_basic.py",highlightLines:[]}),e.jsx("p",{className:"text-gray-400 text-sm",children:"Simple lambda functions for arithmetic, string operations, and conditional expressions."})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-yellow-300",children:"2️⃣ Lambda with Multiple Arguments (lambda_with_args.py)"}),e.jsx(a,{fileModule:i,title:"lambda_with_args.py",highlightLines:[]}),e.jsx("p",{className:"text-gray-400 text-sm",children:"Demonstrates lambda functions that take multiple parameters and use default arguments."})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-yellow-300",children:"3️⃣ Lambda vs Regular `def` (lambda_vs_def.py)"}),e.jsx(a,{fileModule:l,title:"lambda_vs_def.py",highlightLines:[]}),e.jsx("p",{className:"text-gray-400 text-sm",children:"Compares lambdas with traditional functions, highlighting when each is appropriate."})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-yellow-300",children:"4️⃣ Real‑World: Inline Operations (lambda_realworld.py)"}),e.jsx(a,{fileModule:o,title:"lambda_realworld.py",highlightLines:[]}),e.jsx("p",{className:"text-gray-400 text-sm",children:"Practical examples: sorting with custom keys, filtering data, transforming sequences."})]})]}),e.jsxs("section",{className:"space-y-4 reveal-fade-up",style:{animationDelay:"0.4s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold flex items-center gap-2",children:["💡 ",e.jsx("span",{children:"Tips & Tricks (Professional Level)"})]}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-300 bg-gray-800/50 p-5 rounded-xl",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-purple-300",children:"Use lambdas for simple transformations"})," – Great for `map()`, `filter()`, `sorted()` keys."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-purple-300",children:"Avoid complex logic in lambdas"})," – If you need `if`‑`else` blocks or loops, write a `def`."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-purple-300",children:"Conditional expressions work"}),' – `lambda x: "even" if x%2==0 else "odd"` is fine.']}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-purple-300",children:"Lambdas capture variables from outer scope"})," – Be careful with late binding in loops."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-purple-300",children:"Use `functools.reduce` with lambdas"})," – For cumulative operations, but readability suffers."]})]})]}),e.jsxs("section",{className:"space-y-4 reveal-fade-up",style:{animationDelay:"0.5s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold flex items-center gap-2",children:["⚠️ ",e.jsx("span",{children:"Common Pitfalls"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"bg-red-900/20 border-l-4 border-red-500 p-4 rounded",children:[e.jsx("p",{className:"font-bold text-red-300",children:"❌ Trying to use statements (like `return`, `print`)"}),e.jsx("p",{className:"text-gray-300",children:"Lambdas only allow expressions. `lambda x: print(x)` is technically allowed (print returns None), but not typical."})]}),e.jsxs("div",{className:"bg-red-900/20 border-l-4 border-red-500 p-4 rounded",children:[e.jsx("p",{className:"font-bold text-red-300",children:"❌ Overusing lambdas, harming readability"}),e.jsx("p",{className:"text-gray-300",children:"A named function can be clearer; don't cram complex logic into a lambda."})]}),e.jsxs("div",{className:"bg-red-900/20 border-l-4 border-red-500 p-4 rounded",children:[e.jsx("p",{className:"font-bold text-red-300",children:"❌ Late binding in loops (common gotcha)"}),e.jsx("p",{className:"text-gray-300",children:"Creating lambdas in a loop that reference the loop variable – they all see the final value."})]}),e.jsxs("div",{className:"bg-red-900/20 border-l-4 border-red-500 p-4 rounded",children:[e.jsx("p",{className:"font-bold text-red-300",children:"❌ No type hints"}),e.jsx("p",{className:"text-gray-300",children:"Lambdas don't support type annotations, which can make code less self‑documenting."})]})]})]}),e.jsxs("section",{className:"space-y-4 reveal-fade-up",style:{animationDelay:"0.6s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold flex items-center gap-2",children:["✅ ",e.jsx("span",{children:"Best Practices"})]}),e.jsx("div",{className:"bg-emerald-900/20 border border-emerald-700 rounded-xl p-5",children:e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-200",children:[e.jsx("li",{children:"Keep lambdas short (one line, simple expression). If it grows, convert to `def`."}),e.jsx("li",{children:"Use lambdas primarily as arguments to higher‑order functions (`map`, `filter`, `sorted`)."}),e.jsx("li",{children:"Avoid assigning lambdas to variables; just use `def` for named functions."}),e.jsx("li",{children:"If a lambda needs a docstring or type hints, it's a sign you should use `def`."}),e.jsx("li",{children:"Be mindful of variable capture – use default arguments to bind loop variables if necessary."})]})})]}),e.jsxs("section",{className:"space-y-4 reveal-fade-up",style:{animationDelay:"0.7s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold flex items-center gap-2",children:["📋 ",e.jsx("span",{children:"Mini Checklist"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2 bg-gray-800 p-3 rounded-lg",children:[e.jsx("span",{className:"text-green-400",children:"✔️"})," Syntax: `lambda args: expression`"]}),e.jsxs("div",{className:"flex items-center gap-2 bg-gray-800 p-3 rounded-lg",children:[e.jsx("span",{className:"text-green-400",children:"✔️"})," Returns the expression value"]}),e.jsxs("div",{className:"flex items-center gap-2 bg-gray-800 p-3 rounded-lg",children:[e.jsx("span",{className:"text-green-400",children:"✔️"})," No statements allowed"]}),e.jsxs("div",{className:"flex items-center gap-2 bg-gray-800 p-3 rounded-lg",children:[e.jsx("span",{className:"text-green-400",children:"✔️"})," Often used as inline functions"]}),e.jsxs("div",{className:"flex items-center gap-2 bg-gray-800 p-3 rounded-lg",children:[e.jsx("span",{className:"text-green-400",children:"✔️"})," Prefer `def` for complex logic"]}),e.jsxs("div",{className:"flex items-center gap-2 bg-gray-800 p-3 rounded-lg",children:[e.jsx("span",{className:"text-green-400",children:"✔️"})," Great for `key` in sorting"]})]})]}),e.jsxs("section",{className:"space-y-3 reveal-fade-up",style:{animationDelay:"0.8s"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-amber-300",children:"🧠 Think About..."}),e.jsxs("div",{className:"bg-amber-900/20 border border-amber-700 rounded-xl p-5 italic text-gray-200",children:[e.jsxs("p",{children:["🔍 ",e.jsx("strong",{children:"Observe carefully:"})," What is the difference between `lambda x: x*2` and `def double(x): return x*2`? When would you choose one over the other?"]}),e.jsxs("p",{className:"mt-2",children:["🔍 ",e.jsx("strong",{children:"Try changing this:"})," Write a lambda that returns the larger of two numbers (use the conditional expression)."]}),e.jsxs("p",{className:"mt-2",children:["🔍 ",e.jsx("strong",{children:"Think about:"})," Why can't lambdas contain `while` loops or `if` statements? How would you work around that?"]})]})]}),e.jsx("section",{className:"reveal-fade-up",style:{animationDelay:"0.85s"},children:e.jsx(s,{title:"Lambda Functions FAQs",questions:t})}),e.jsx("section",{className:"reveal-fade-up",style:{animationDelay:"0.9s"},children:e.jsx(n,{note:"Lambdas are a functional programming feature that many students find intriguing. 🧑‍🏫 I tell them: 'Lambdas are like sticky notes – great for quick reminders, but you wouldn't write a novel on one.' Show how `sorted(students, key=lambda s: s['age'])` is more concise than defining a separate function. Emphasise the expression‑only limitation: `lambda x: x+1` works, `lambda x: x+=1` doesn't. The late‑binding gotcha is important: `funcs = [lambda i=i: i for i in range(3)]` to capture current value. Exercise: convert a list of temperatures from Celsius to Fahrenheit using `map` and a lambda."})}),e.jsxs("section",{className:"reveal-fade-up",style:{animationDelay:"1s"},children:[e.jsx("div",{className:"bg-gray-800/50 rounded-xl p-6 flex justify-center",children:e.jsxs("svg",{width:"560",height:"220",viewBox:"0 0 560 220",className:"max-w-full h-auto",children:[e.jsx("rect",{x:"20",y:"20",width:"220",height:"80",fill:"#1e3a8a",stroke:"#3b82f6",strokeWidth:"2",rx:"8",children:e.jsx("animate",{attributeName:"opacity",values:"0.8;1;0.8",dur:"3s",repeatCount:"indefinite"})}),e.jsx("text",{x:"130",y:"45",fill:"white",fontSize:"13",textAnchor:"middle",fontFamily:"monospace",children:"lambda x, y: x + y"}),e.jsx("text",{x:"130",y:"65",fill:"#94a3b8",fontSize:"12",textAnchor:"middle",children:"↑ arguments"}),e.jsx("text",{x:"130",y:"85",fill:"#fbbf24",fontSize:"11",textAnchor:"middle",children:"expression"}),e.jsx("line",{x1:"240",y1:"60",x2:"280",y2:"60",stroke:"#a78bfa",strokeWidth:"2",markerEnd:"url(#arrowPurple)"}),e.jsx("rect",{x:"290",y:"20",width:"250",height:"80",fill:"#065a46",stroke:"#34d399",strokeWidth:"2",rx:"8",children:e.jsx("animate",{attributeName:"opacity",values:"0.8;1;0.8",dur:"3s",begin:"0.5s",repeatCount:"indefinite"})}),e.jsx("text",{x:"415",y:"45",fill:"white",fontSize:"13",textAnchor:"middle",fontFamily:"monospace",children:"sorted(pairs,"}),e.jsx("text",{x:"415",y:"65",fill:"white",fontSize:"13",textAnchor:"middle",fontFamily:"monospace",children:"key=lambda p: p[1])"}),e.jsx("text",{x:"415",y:"85",fill:"#fbbf24",fontSize:"11",textAnchor:"middle",children:"inline usage"}),e.jsx("rect",{x:"20",y:"130",width:"520",height:"60",fill:"#1f2937",stroke:"#fbbf24",strokeWidth:"1.5",rx:"6",strokeDasharray:"4,4",children:e.jsx("animate",{attributeName:"opacity",values:"0.6;1;0.6",dur:"4s",repeatCount:"indefinite"})}),e.jsx("text",{x:"280",y:"155",fill:"#fcd34d",fontSize:"12",textAnchor:"middle",children:"💡 Lambdas are anonymous, single‑expression functions. Great for short callbacks."}),e.jsx("text",{x:"280",y:"175",fill:"#9ca3af",fontSize:"11",textAnchor:"middle",children:"Use `def` for anything longer than a line or needing statements."}),e.jsx("defs",{children:e.jsx("marker",{id:"arrowPurple",markerWidth:"8",markerHeight:"8",refX:"6",refY:"4",orient:"auto",children:e.jsx("path",{d:"M0,0 L8,4 L0,8 Z",fill:"#a78bfa"})})})]})}),e.jsx("p",{className:"text-center text-sm text-gray-400 mt-2",children:"Lambda functions provide a compact way to define small, one‑line functions, often used as arguments to other functions."})]}),e.jsx("style",{children:`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .reveal-fade-up {
          animation: fadeUp 0.6s ease-out forwards;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal-fade-up { animation: none; opacity: 1; }
        }
      `})]})}export{g as default};
