import{j as e}from"./index-29x6CIxg.js";import{P as n}from"./PythonFileLoader-xv3CzaBE.js";import{T as t}from"./TeacherSukantaHui-CkLTFTKX.js";import{F as r}from"./FAQTemplate-Dzu6_Pg9.js";import"./PythonCodeBlock-DVGp9kTV.js";import"./prism-D8qPEyTn.js";import"./browser-BhB_hP4n.js";import"./git-branch-Db0vt137.js";import"./clsx-B-dksMZM.js";const s=[{question:"What does the `return` statement do in a Python function?",shortAnswer:"It exits the function and optionally sends a value back to the caller.",explanation:"`return` stops the function immediately and the value after `return` becomes the result of the function call.",hint:"It's how a function gives an answer.",level:"basic",codeExample:"def add(a,b): return a+b; result = add(2,3)  # result = 5"},{question:"What happens if a function has no `return` statement?",shortAnswer:"It returns `None` implicitly.",explanation:"Every Python function returns something; if no `return` is present, `None` is returned.",hint:"`None` represents 'no value'.",level:"basic",codeExample:"def say_hello(): print('Hi'); result = say_hello()  # None"},{question:"Can a function return multiple values?",shortAnswer:"Yes, by separating them with commas, which returns a tuple.",explanation:"`return a, b, c` is syntactic sugar for `return (a, b, c)`. The caller can unpack the tuple.",hint:"Multiple return values are packed into a tuple.",level:"basic",codeExample:"def swap(a,b): return b,a; x,y = swap(1,2)"},{question:"What is the difference between `print` and `return`?",shortAnswer:"`print` displays output to the console; `return` sends a value back to the caller for further use.",explanation:"`print` is for user‑facing output; `return` is for computation results. A function can do both.",hint:"`print` → screen; `return` → variable.",level:"basic",codeExample:"def f(): print(5); return 10; x = f()  # prints 5, x becomes 10"},{question:"Can you have multiple `return` statements in a function?",shortAnswer:"Yes, but only the first one encountered will execute; the function exits immediately.",explanation:"This is often used for conditional early exits (guard clauses).",hint:"Use early returns to simplify logic.",level:"intermediate",codeExample:"def absolute(x): if x<0: return -x; return x"},{question:"What type of values can be returned?",shortAnswer:"Any Python object: int, float, str, list, dict, tuple, None, custom objects, even functions.",explanation:"There is no restriction; `return` is very flexible.",hint:"Anything you can assign to a variable can be returned.",level:"basic",codeExample:"def get_list(): return [1,2,3]; def get_func(): return lambda x: x*2"},{question:"What is an early return pattern?",shortAnswer:"Using `return` before the end of the function to exit early, often after validation or error checking.",explanation:"It avoids deep nesting and makes code more readable.",hint:"Guard clauses.",level:"intermediate",codeExample:"def divide(a,b): if b==0: return None; return a/b"},{question:"What does `return` without a value (e.g., `return`) do?",shortAnswer:"It exits the function and returns `None`.",explanation:"It's equivalent to `return None` but shorter. Often used to exit early when no meaningful value is available.",hint:"Implicitly returns None.",level:"intermediate",codeExample:"def process(data): if not data: return; # continue processing"},{question:"Can I return a value and also print inside the same function?",shortAnswer:"Yes, a function can both print and return. They are independent operations.",explanation:"`print` sends output to console; `return` sends value to caller. They can coexist.",hint:"Not mutually exclusive.",level:"basic",codeExample:"def f(x): print(f'Calculating {x}'); return x*2"},{question:"How do you capture multiple return values?",shortAnswer:"By unpacking them into variables: `a, b = func()` or by storing the tuple and indexing.",explanation:"If you assign to a single variable, you get a tuple; multiple variables unpack the tuple.",hint:"Use comma‑separated variables on the left.",level:"basic",codeExample:"def stats(lst): return min(lst), max(lst); lo, hi = stats([1,2,3])"},{question:"What is the return type of a function that returns nothing?",shortAnswer:"`None` (of type `NoneType`).",explanation:"All functions that don't explicitly return a value return `None`.",hint:"`None` is a singleton.",level:"basic",codeExample:"def no_return(): pass; print(type(no_return()))  # <class 'NoneType'>"},{question:"Can I return a value after a loop?",shortAnswer:"Yes, the loop can run and then `return` after it finishes.",explanation:"The function exits only when `return` is reached.",hint:"Loop doesn't affect `return`.",level:"basic",codeExample:"def sum_all(lst): total=0; for n in lst: total+=n; return total"},{question:"What happens if I put code after a `return`?",shortAnswer:"It will never execute (unreachable code).",explanation:"Python ignores anything after a `return` within the same block because the function has already exited.",hint:"Dead code – usually a mistake.",level:"basic",codeExample:"def f(): return 5; print('Never runs')"},{question:"Can I return a value from a function and also modify a global variable?",shortAnswer:"Yes, but modifying globals is generally discouraged. Prefer to return the value.",explanation:"Functions can have side effects (like printing or modifying globals) and still return a value.",hint:"Return is usually cleaner.",level:"intermediate",codeExample:"counter=0; def inc(): global counter; counter+=1; return counter"},{question:"What is the difference between `return None` and just `return`?",shortAnswer:"They are functionally identical; `return` alone is shorter.",explanation:"PEP 8 recommends using `return` for early exits and `return None` for explicit intent at the end of a function.",hint:"Style preference.",level:"basic",codeExample:"def f(): return; def g(): return None"},{question:"Can a function return another function?",shortAnswer:"Yes, functions are first‑class citizens and can be returned.",explanation:"This is used in closures and decorators.",hint:"Higher‑order functions.",level:"advanced",codeExample:"def make_multiplier(n): return lambda x: x * n; double = make_multiplier(2)"},{question:"How do you indicate the return type in a docstring?",shortAnswer:"Use `:return:` or `:rtype:` in the docstring, or use type hints with `->`.",explanation:"Example: `def add(a: int, b: int) -> int:`.",hint:"Type hints are preferred in modern Python.",level:"intermediate",codeExample:'def add(a,b): """Return sum. :rtype: int""" return a+b'},{question:"What is the result of calling `print(returning_function())`?",shortAnswer:"The function's return value is printed (if not None).",explanation:"First the function is called and returns a value; then `print` displays that value.",hint:"Nested evaluation.",level:"basic",codeExample:"def f(): return 42; print(f())  # prints 42"},{question:"Can I return a value from inside a nested function?",shortAnswer:"Yes, but that only returns from the inner function, not the outer one.",explanation:"Each `return` exits only its immediate function.",hint:"Return doesn't cross function boundaries.",level:"intermediate",codeExample:"def outer(): def inner(): return 5; inner(); return 10  # returns 10, not 5"},{question:"What is the default return value of a function that ends without a `return`?",shortAnswer:"`None`.",explanation:"Python implicitly adds `return None` at the end of every function if no explicit return exists.",hint:"Every function returns something.",level:"basic",codeExample:"def f(): pass; print(f())  # None"},{question:"How does `return` interact with `try`/`except`?",shortAnswer:"A `return` inside a `try` block will execute, and the `finally` block (if present) will still run before returning.",explanation:"`finally` always executes, even if `return` is encountered.",hint:"`finally` is special.",level:"advanced",codeExample:"def f(): try: return 1; finally: print('cleanup')"},{question:"Can I return a value and also raise an exception?",shortAnswer:"No, `return` and `raise` are mutually exclusive; `raise` exits the function with an exception, not a return value.",explanation:"If an exception is raised, the function does not return normally.",hint:"Exception overrides return.",level:"advanced",codeExample:"def f(): if error: raise ValueError; return 42  # not reached if error"},{question:"What is a common real‑world use of returning multiple values?",shortAnswer:"Returning status codes or multiple statistics (e.g., min, max, average) from a single function call.",explanation:"It avoids creating small classes or out‑parameters.",hint:"Convenient for related data.",level:"intermediate",codeExample:"def get_bounds(data): return min(data), max(data)"},{question:"Can I use `return` inside a lambda?",shortAnswer:"No, lambdas implicitly return the result of the expression; they cannot contain statements like `return`.",explanation:"Lambda body is a single expression, and that expression's value is automatically returned.",hint:"No `return` keyword needed in lambda.",level:"advanced",codeExample:"add = lambda a,b: a+b  # returns a+b"},{question:"What is the difference between `return` and `yield`?",shortAnswer:"`return` sends a single value and ends the function; `yield` produces a generator that can yield multiple values over time.",explanation:"`yield` is for generators; `return` is for regular functions.",hint:"`yield` is for sequences.",level:"advanced",codeExample:"def gen(): yield 1; yield 2  # generator"},{question:"Can I return a value from a `finally` block?",shortAnswer:"Yes, but it will override any previous `return` in the `try` block, which is usually undesirable.",explanation:"`finally` executes after `try`; if `finally` has `return`, that value is returned instead.",hint:"Avoid returning in `finally`.",level:"expert",codeExample:"def f(): try: return 1; finally: return 2  # returns 2"},{question:"How do I return a value from a recursive function?",shortAnswer:"Use `return` with the recursive call; the base case must return a value that propagates up.",explanation:"Each recursive call must pass the value back up the call stack.",hint:"Base case returns; recursive case returns function call.",level:"intermediate",codeExample:"def factorial(n): if n<=1: return 1; return n * factorial(n-1)"},{question:"What is the purpose of `->` in function definition?",shortAnswer:"It is a type hint indicating the return type (ignored at runtime).",explanation:"It helps developers and tools understand what the function returns.",hint:"Not enforced, but good practice.",level:"intermediate",codeExample:"def greet(name: str) -> str: return f'Hello {name}'"},{question:"Can I return a value from a function that is called inside another function?",shortAnswer:"Yes, the inner function's return goes to the caller of that inner function, which can then use or return it further.",explanation:"Return values propagate outward as needed.",hint:"Chain returns.",level:"intermediate",codeExample:"def outer(): def inner(): return 5; return inner()  # returns 5"},{question:"What happens if I forget to assign the return value?",shortAnswer:"The returned value is discarded (garbage collected). The function still executes, but the result is lost.",explanation:"This is fine for functions that have side effects (e.g., printing), but wasteful for pure computation.",hint:"If you need the result, assign it.",level:"basic",codeExample:"def square(x): return x*x; square(5)  # 25 computed and lost"},{question:"How do I return a value that is the result of a conditional expression?",shortAnswer:"Use `return value_if_true if condition else value_if_false`.",explanation:"The ternary operator works directly with `return`.",hint:"One‑liner.",level:"intermediate",codeExample:"def max(a,b): return a if a>b else b"}],a=`# return_single.py\r
# Functions that return a single value\r
\r
def add(a, b):\r
    """Returns the sum of two numbers."""\r
    return a + b\r
\r
def is_even(number):\r
    """Returns True if number is even, False otherwise."""\r
    return number % 2 == 0\r
\r
def get_greeting(name):\r
    """Returns a personalized greeting string."""\r
    return f"Hello, {name}!"\r
\r
# Using the returned values\r
sum_result = add(10, 5)\r
print(f"Sum: {sum_result}")  # 15\r
\r
print(f"Is 7 even? {is_even(7)}")   # False\r
print(f"Is 8 even? {is_even(8)}")   # True\r
\r
message = get_greeting("Swadeep")\r
print(message)  # Hello, Swadeep!\r
\r
# Returned value can be used directly in expressions\r
total = add(3, add(2, 1))   # nested call: add(2,1)=3, add(3,3)=6\r
print(total)  # 6`,i=`# return_multiple.py\r
# Returning multiple values from a function\r
\r
def get_min_max(numbers):\r
    """Returns the minimum and maximum of a list."""\r
    return min(numbers), max(numbers)   # returns a tuple\r
\r
def divide_with_remainder(a, b):\r
    """Returns quotient and remainder as two values."""\r
    quotient = a // b\r
    remainder = a % b\r
    return quotient, remainder\r
\r
def get_student_info():\r
    """Returns multiple details about a student."""\r
    name = "Tuhina"\r
    age = 16\r
    city = "Shyamnagar"\r
    return name, age, city\r
\r
# Unpacking multiple return values\r
scores = [85, 92, 78, 90, 88]\r
lowest, highest = get_min_max(scores)\r
print(f"Lowest: {lowest}, Highest: {highest}")\r
\r
q, r = divide_with_remainder(17, 5)\r
print(f"17 ÷ 5 = {q} remainder {r}")\r
\r
# Assign to a single variable (gets a tuple)\r
result = get_student_info()\r
print(result)  # ('Tuhina', 16, 'Shyamnagar')\r
print(type(result))  # <class 'tuple'>\r
\r
# Unpack into variables\r
name, age, city = get_student_info()\r
print(f"{name} is {age} years old from {city}")`,l=`# return_none.py\r
# Functions without return or with empty return\r
\r
def no_return():\r
    """This function has no return statement."""\r
    x = 5\r
    y = 10\r
    z = x + y\r
    # No return → returns None\r
\r
def empty_return():\r
    """This function uses 'return' without a value."""\r
    print("Doing some work...")\r
    return   # returns None\r
    print("This line never runs")\r
\r
def explicit_none():\r
    """Explicitly returns None."""\r
    return None\r
\r
# Call functions and see what they return\r
result1 = no_return()\r
result2 = empty_return()\r
result3 = explicit_none()\r
\r
print(f"no_return() returns: {result1}")        # None\r
print(f"empty_return() returns: {result2}")     # None\r
print(f"explicit_none() returns: {result3}")    # None\r
\r
# Checking if a value is None\r
def find_student(students, name):\r
    """Returns student dict if found, else None."""\r
    for student in students:\r
        if student['name'] == name:\r
            return student\r
    return None   # explicit None\r
\r
students = [\r
    {"name": "Swadeep", "age": 17},\r
    {"name": "Abhronila", "age": 15}\r
]\r
\r
found = find_student(students, "Debangshu")\r
if found is None:\r
    print("Student not found!")\r
else:\r
    print(f"Found: {found}")`,o=`# return_realworld.py\r
# Real-world applications of return statements\r
\r
# 1. GPA calculator\r
def calculate_gpa(grades):\r
    """Takes list of letter grades, returns GPA as float."""\r
    grade_points = {\r
        'A': 4.0, 'A-': 3.7,\r
        'B+': 3.3, 'B': 3.0, 'B-': 2.7,\r
        'C+': 2.3, 'C': 2.0, 'C-': 1.7,\r
        'D': 1.0, 'F': 0.0\r
    }\r
    total = 0\r
    for grade in grades:\r
        total += grade_points.get(grade, 0.0)\r
    return total / len(grades) if grades else 0.0\r
\r
student_grades = ['A', 'B+', 'A-', 'B']\r
gpa = calculate_gpa(student_grades)\r
print(f"GPA: {gpa:.2f}")\r
\r
# 2. Safe division (avoid ZeroDivisionError)\r
def safe_divide(a, b):\r
    """Returns quotient if b != 0, else returns None."""\r
    if b == 0:\r
        return None\r
    return a / b\r
\r
result = safe_divide(10, 0)\r
if result is None:\r
    print("Cannot divide by zero!")\r
else:\r
    print(f"Result: {result}")\r
\r
# 3. Parsing user input\r
def parse_command(input_str):\r
    """Returns a tuple (command, args) or (None, None) on failure."""\r
    parts = input_str.strip().split()\r
    if not parts:\r
        return None, None\r
    command = parts[0]\r
    args = parts[1:]\r
    return command, args\r
\r
cmd, args = parse_command("greet Swadeep Barrackpore")\r
print(f"Command: {cmd}, Args: {args}")\r
\r
# 4. Returning multiple related values (using a dict)\r
def analyze_list(numbers):\r
    """Returns a dict with statistical summary."""\r
    if not numbers:\r
        return {"error": "Empty list"}\r
    return {\r
        "count": len(numbers),\r
        "sum": sum(numbers),\r
        "mean": sum(numbers) / len(numbers),\r
        "min": min(numbers),\r
        "max": max(numbers)\r
    }\r
\r
stats = analyze_list([10, 20, 30, 40, 50])\r
print(f"Mean: {stats['mean']}, Min: {stats['min']}, Max: {stats['max']}")\r
\r
# 5. Early return pattern (validation)\r
def register_user(username, password, email):\r
    """Returns True if registration successful, False otherwise."""\r
    if len(username) < 3:\r
        print("Username too short")\r
        return False\r
    if len(password) < 6:\r
        print("Password too weak")\r
        return False\r
    if '@' not in email:\r
        print("Invalid email")\r
        return False\r
    # All validations passed\r
    print(f"User {username} registered!")\r
    return True\r
\r
success = register_user("ab", "pass123", "a@b.com")   # fails\r
print(f"Success: {success}")`;function y(){return e.jsxs("div",{className:"w-full max-w-5xl mx-auto px-4 py-8 space-y-12 bg-gray-900 text-gray-100",children:[e.jsxs("section",{className:"space-y-6 reveal-fade-up",children:[e.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent",children:"↩️ Return Statement: Returning Single and Multiple Values"}),e.jsxs("div",{className:"prose prose-invert max-w-none space-y-4",children:[e.jsxs("p",{className:"text-lg leading-relaxed",children:["The ",e.jsx("code",{className:"bg-gray-700 px-1 rounded",children:"return"})," statement is how a function ",e.jsx("strong",{className:"text-blue-300",children:"sends a value back"})," to the caller. It immediately exits the function and optionally provides a result that can be stored, printed, or used in further calculations."]}),e.jsx("div",{className:"bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500",children:e.jsxs("p",{className:"font-mono text-sm",children:[e.jsx("span",{className:"text-yellow-300",children:"def add(a, b):"}),e.jsx("br",{}),"    ",e.jsx("span",{className:"text-green-300",children:"return a + b"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{className:"text-green-300",children:"result = add(5, 3)"}),e.jsx("br",{}),e.jsx("span",{className:"text-green-300",children:"print(result)  # 8"})]})})]})]}),e.jsxs("section",{className:"space-y-6 reveal-fade-up",style:{animationDelay:"0.1s"},children:[e.jsx("h2",{className:"text-3xl font-semibold border-l-4 border-green-500 pl-4",children:"📝 Return Statement Syntax"}),e.jsxs("div",{className:"bg-gray-800 rounded-xl p-5 border border-gray-700",children:[e.jsx("pre",{className:"text-sm font-mono text-emerald-300 overflow-x-auto",children:`def function_name(parameters):
    # function body
    return expression   # optional, can be any type

# Or return multiple values (as tuple)
def function_name(parameters):
    return value1, value2, value3   # actually returns a tuple`}),e.jsxs("ul",{className:"mt-4 space-y-2 text-gray-300 list-disc list-inside",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Return type:"})," Any Python object (int, str, list, tuple, None, etc.)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Purpose:"})," To produce a result that can be used elsewhere in the program."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"When & why:"})," When you need to compute a value and use it later (e.g., calculations, data processing)."]})]})]})]}),e.jsxs("section",{className:"space-y-6 reveal-fade-up",style:{animationDelay:"0.2s"},children:[e.jsx("h2",{className:"text-3xl font-semibold border-l-4 border-yellow-500 pl-4",children:"⚙️ How `return` Works"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-gray-800/70 rounded-xl p-4 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300",children:[e.jsx("div",{className:"text-yellow-300 text-xl mb-2",children:"1️⃣ Exits function immediately"}),e.jsx("p",{className:"text-gray-300",children:"No code after `return` is executed."}),e.jsxs("pre",{className:"text-xs mt-2 bg-gray-900 p-2 rounded",children:["def test():",e.jsx("br",{}),"    return 5",e.jsx("br",{}),'    print("This never runs")']})]}),e.jsxs("div",{className:"bg-gray-800/70 rounded-xl p-4 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300",children:[e.jsx("div",{className:"text-purple-300 text-xl mb-2",children:"2️⃣ Can return any type"}),e.jsx("p",{className:"text-gray-300",children:"Number, string, list, dict, object, even another function."}),e.jsx("pre",{className:"text-xs mt-2 bg-gray-900 p-2 rounded",children:'def get_list(): return [1,2,3]<br/>def get_dict(): return {"a":1}'})]}),e.jsxs("div",{className:"bg-gray-800/70 rounded-xl p-4 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300",children:[e.jsx("div",{className:"text-green-300 text-xl mb-2",children:"3️⃣ Multiple values = tuple"}),e.jsx("p",{className:"text-gray-300",children:"`return a, b, c` is syntactic sugar for `return (a, b, c)`."}),e.jsxs("pre",{className:"text-xs mt-2 bg-gray-900 p-2 rounded",children:["def stats(lst):",e.jsx("br",{}),"    return min(lst), max(lst), sum(lst)/len(lst)"]})]}),e.jsxs("div",{className:"bg-gray-800/70 rounded-xl p-4 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300",children:[e.jsx("div",{className:"text-red-300 text-xl mb-2",children:"4️⃣ No return = None"}),e.jsx("p",{className:"text-gray-300",children:"If a function doesn't have `return`, it returns `None` implicitly."}),e.jsxs("pre",{className:"text-xs mt-2 bg-gray-900 p-2 rounded",children:["def say_hello():",e.jsx("br",{}),'    print("Hello")',e.jsx("br",{}),"result = say_hello()  # None"]})]})]})]}),e.jsxs("section",{className:"space-y-6 reveal-fade-up",style:{animationDelay:"0.25s"},children:[e.jsx("h2",{className:"text-3xl font-semibold border-l-4 border-red-500 pl-4",children:"🖨️ `print` vs `return` – Crucial Distinction"}),e.jsxs("div",{className:"bg-red-900/20 border border-red-700 rounded-xl p-5",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-red-300",children:"`print()`"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-300 text-sm mt-2",children:[e.jsx("li",{children:"Displays output to the console"}),e.jsx("li",{children:"Does NOT produce a usable value"}),e.jsx("li",{children:"Cannot be assigned to a variable"}),e.jsx("li",{children:"For user‑facing messages"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-green-300",children:"`return`"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-300 text-sm mt-2",children:[e.jsx("li",{children:"Sends a value back to the caller"}),e.jsx("li",{children:"Can be assigned to variables"}),e.jsx("li",{children:"Can be used in expressions"}),e.jsx("li",{children:"For computation results"})]})]})]}),e.jsx("pre",{className:"mt-4 text-sm font-mono bg-gray-900 p-3 rounded overflow-x-auto",children:`def square(x):
    return x * x   # returns value

def show_square(x):
    print(x * x)   # prints but returns None

result = square(5)   # result = 25, can use later
show_square(5)       # prints 25, but returns None`})]})]}),e.jsxs("section",{className:"space-y-8 reveal-fade-up",style:{animationDelay:"0.3s"},children:[e.jsx("h2",{className:"text-3xl font-semibold border-l-4 border-green-500 pl-4",children:"💻 Live Python Examples"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-yellow-300",children:"1️⃣ Returning a Single Value (return_single.py)"}),e.jsx(n,{fileModule:a,title:"return_single.py",highlightLines:[]}),e.jsx("p",{className:"text-gray-400 text-sm",children:"Demonstrates functions that return integers, strings, and booleans."})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-yellow-300",children:"2️⃣ Returning Multiple Values (return_multiple.py)"}),e.jsx(n,{fileModule:i,title:"return_multiple.py",highlightLines:[]}),e.jsx("p",{className:"text-gray-400 text-sm",children:"Shows how to return multiple values using tuples and unpacking."})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-yellow-300",children:"3️⃣ Implicit `return None` (return_none.py)"}),e.jsx(n,{fileModule:l,title:"return_none.py",highlightLines:[]}),e.jsx("p",{className:"text-gray-400 text-sm",children:"Explains what happens when a function has no `return` or uses `return` without a value."})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-yellow-300",children:"4️⃣ Real‑World: Data Validation and Processing (return_realworld.py)"}),e.jsx(n,{fileModule:o,title:"return_realworld.py",highlightLines:[]}),e.jsx("p",{className:"text-gray-400 text-sm",children:"Practical examples: calculating GPA, parsing user input, returning structured data."})]})]}),e.jsxs("section",{className:"space-y-4 reveal-fade-up",style:{animationDelay:"0.4s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold flex items-center gap-2",children:["💡 ",e.jsx("span",{children:"Tips & Tricks (Professional Level)"})]}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-300 bg-gray-800/50 p-5 rounded-xl",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-purple-300",children:"Early return pattern"})," – Use `return` to exit early and avoid deep nesting: `if error: return None`."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-purple-300",children:"Return meaningful values"})," – For validation functions, return `True`/`False`; for lookups, return the found item or `None`."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-purple-300",children:"Unpack multiple returns"})," – `min_val, max_val, avg = calculate_stats(data)` is clean and readable."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-purple-300",children:"Returning `None` explicitly"})," – `return None` is clearer than just `return` when the absence of a value is intentional."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-purple-300",children:"Type hints"})," – Use `->` to indicate return type: `def add(a: int, b: int) -> int:`."]})]})]}),e.jsxs("section",{className:"space-y-4 reveal-fade-up",style:{animationDelay:"0.5s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold flex items-center gap-2",children:["⚠️ ",e.jsx("span",{children:"Common Pitfalls"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"bg-red-900/20 border-l-4 border-red-500 p-4 rounded",children:[e.jsx("p",{className:"font-bold text-red-300",children:"❌ Forgetting to assign the return value"}),e.jsx("p",{className:"text-gray-300",children:"`square(5)` without assignment does nothing with the result. Use `result = square(5)`."})]}),e.jsxs("div",{className:"bg-red-900/20 border-l-4 border-red-500 p-4 rounded",children:[e.jsx("p",{className:"font-bold text-red-300",children:"❌ Confusing `print` with `return`"}),e.jsx("p",{className:"text-gray-300",children:"A function that prints but doesn't return cannot be used in calculations."})]}),e.jsxs("div",{className:"bg-red-900/20 border-l-4 border-red-500 p-4 rounded",children:[e.jsx("p",{className:"font-bold text-red-300",children:"❌ Unreachable code after `return`"}),e.jsx("p",{className:"text-gray-300",children:"Statements placed after `return` are never executed – often a logical error."})]}),e.jsxs("div",{className:"bg-red-900/20 border-l-4 border-red-500 p-4 rounded",children:[e.jsx("p",{className:"font-bold text-red-300",children:"❌ Returning too many values without unpacking"}),e.jsx("p",{className:"text-gray-300",children:"`result = func()` where `func` returns multiple values gives a tuple; you need to index or unpack."})]})]})]}),e.jsxs("section",{className:"space-y-4 reveal-fade-up",style:{animationDelay:"0.6s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold flex items-center gap-2",children:["✅ ",e.jsx("span",{children:"Best Practices"})]}),e.jsx("div",{className:"bg-emerald-900/20 border border-emerald-700 rounded-xl p-5",children:e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-200",children:[e.jsx("li",{children:"Always document what a function returns in the docstring."}),e.jsx("li",{children:"Use early returns to simplify conditional logic (guard clauses)."}),e.jsx("li",{children:"Return `None` explicitly when a function fails or finds nothing (instead of returning magic values like -1)."}),e.jsx("li",{children:"For multiple related values, consider returning a named tuple or a small class for clarity."}),e.jsx("li",{children:"Keep return types consistent – avoid returning different types under different conditions (e.g., int or None)."})]})})]}),e.jsxs("section",{className:"space-y-4 reveal-fade-up",style:{animationDelay:"0.7s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold flex items-center gap-2",children:["📋 ",e.jsx("span",{children:"Mini Checklist"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2 bg-gray-800 p-3 rounded-lg",children:[e.jsx("span",{className:"text-green-400",children:"✔️"})," `return` exits the function immediately"]}),e.jsxs("div",{className:"flex items-center gap-2 bg-gray-800 p-3 rounded-lg",children:[e.jsx("span",{className:"text-green-400",children:"✔️"})," Can return any data type"]}),e.jsxs("div",{className:"flex items-center gap-2 bg-gray-800 p-3 rounded-lg",children:[e.jsx("span",{className:"text-green-400",children:"✔️"})," Multiple values = tuple (can be unpacked)"]}),e.jsxs("div",{className:"flex items-center gap-2 bg-gray-800 p-3 rounded-lg",children:[e.jsx("span",{className:"text-green-400",children:"✔️"})," No `return` → `None`"]}),e.jsxs("div",{className:"flex items-center gap-2 bg-gray-800 p-3 rounded-lg",children:[e.jsx("span",{className:"text-green-400",children:"✔️"})," `return` is different from `print`"]}),e.jsxs("div",{className:"flex items-center gap-2 bg-gray-800 p-3 rounded-lg",children:[e.jsx("span",{className:"text-green-400",children:"✔️"})," Use returned values in expressions"]})]})]}),e.jsxs("section",{className:"space-y-3 reveal-fade-up",style:{animationDelay:"0.8s"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-amber-300",children:"🧠 Think About..."}),e.jsxs("div",{className:"bg-amber-900/20 border border-amber-700 rounded-xl p-5 italic text-gray-200",children:[e.jsxs("p",{children:["🔍 ",e.jsx("strong",{children:"Observe carefully:"})," In `return_multiple.py`, what happens if you assign the result to a single variable? What type is it?"]}),e.jsxs("p",{className:"mt-2",children:["🔍 ",e.jsx("strong",{children:"Try changing this:"})," Modify `divide` to return a tuple `(quotient, remainder)`. Then call it and unpack both values."]}),e.jsxs("p",{className:"mt-2",children:["🔍 ",e.jsx("strong",{children:"Think about:"})," Why would a function ever return `None` intentionally? When might that be useful?"]})]})]}),e.jsx("section",{className:"reveal-fade-up",style:{animationDelay:"0.85s"},children:e.jsx(r,{title:"Return Statement FAQs",questions:s})}),e.jsx("section",{className:"reveal-fade-up",style:{animationDelay:"0.9s"},children:e.jsx(t,{note:"The `return` vs `print` confusion is one of the biggest hurdles for beginners. 🧑‍🏫 I use the analogy: `print` is like shouting into the void; `return` is like handing a note to the caller. Demonstrate by writing `def add(a,b): print(a+b)` and then trying `result = add(2,3)`. Show that `result` is `None`. Then change to `return a+b` and show how `result` now holds the value. Also teach early returns: it's a great way to avoid deeply nested `if` statements."})}),e.jsxs("section",{className:"reveal-fade-up",style:{animationDelay:"1s"},children:[e.jsx("div",{className:"bg-gray-800/50 rounded-xl p-6 flex justify-center",children:e.jsxs("svg",{width:"560",height:"220",viewBox:"0 0 560 220",className:"max-w-full h-auto",children:[e.jsx("rect",{x:"20",y:"20",width:"180",height:"80",fill:"#1e3a8a",stroke:"#3b82f6",strokeWidth:"2",rx:"8",children:e.jsx("animate",{attributeName:"opacity",values:"0.8;1;0.8",dur:"3s",repeatCount:"indefinite"})}),e.jsx("text",{x:"110",y:"45",fill:"white",fontSize:"13",textAnchor:"middle",fontFamily:"monospace",children:"def square(x):"}),e.jsx("text",{x:"110",y:"65",fill:"#94a3b8",fontSize:"12",textAnchor:"middle",children:"return x * x"}),e.jsx("text",{x:"110",y:"85",fill:"#fbbf24",fontSize:"11",textAnchor:"middle",children:"returns value"}),e.jsx("line",{x1:"200",y1:"60",x2:"240",y2:"60",stroke:"#a78bfa",strokeWidth:"2",markerEnd:"url(#arrowPurple)"}),e.jsx("text",{x:"220",y:"50",fill:"#c4b5fd",fontSize:"11",children:"call"}),e.jsx("rect",{x:"250",y:"20",width:"290",height:"80",fill:"#065a46",stroke:"#34d399",strokeWidth:"2",rx:"8",children:e.jsx("animate",{attributeName:"opacity",values:"0.8;1;0.8",dur:"3s",begin:"0.5s",repeatCount:"indefinite"})}),e.jsx("text",{x:"395",y:"45",fill:"white",fontSize:"13",textAnchor:"middle",fontFamily:"monospace",children:"result = square(5)"}),e.jsx("text",{x:"395",y:"65",fill:"#94a3b8",fontSize:"12",textAnchor:"middle",children:"result → 25"}),e.jsx("text",{x:"395",y:"85",fill:"#fbbf24",fontSize:"11",textAnchor:"middle",children:"value can be used later"}),e.jsx("rect",{x:"20",y:"130",width:"520",height:"60",fill:"#1f2937",stroke:"#fbbf24",strokeWidth:"1.5",rx:"6",strokeDasharray:"4,4",children:e.jsx("animate",{attributeName:"opacity",values:"0.6;1;0.6",dur:"4s",repeatCount:"indefinite"})}),e.jsx("text",{x:"280",y:"155",fill:"#fcd34d",fontSize:"12",textAnchor:"middle",children:"💡 `return` sends a value back; `print` only displays. Use `return` for computation."}),e.jsx("text",{x:"280",y:"175",fill:"#9ca3af",fontSize:"11",textAnchor:"middle",children:"Multiple values: `return a, b, c` → tuple → unpack with `x, y, z = func()`"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrowPurple",markerWidth:"8",markerHeight:"8",refX:"6",refY:"4",orient:"auto",children:e.jsx("path",{d:"M0,0 L8,4 L0,8 Z",fill:"#a78bfa"})})})]})}),e.jsx("p",{className:"text-center text-sm text-gray-400 mt-2",children:"`return` sends a value from the function back to the caller, enabling reuse of computed results."})]}),e.jsx("style",{children:`
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
      `})]})}export{y as default};
