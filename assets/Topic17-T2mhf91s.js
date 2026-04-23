import{j as e}from"./index-CmAIoOXN.js";import{P as n}from"./PythonFileLoader-B-WJIo-m.js";import{T as t}from"./TeacherSukantaHui-1LCiMfJM.js";import{F as r}from"./FAQTemplate-BRdhMyQo.js";import"./PythonCodeBlock-O84Db7qU.js";import"./prism-6Oj8TI1J.js";import"./browser-n5DCIAUE.js";import"./git-branch-AzLzm2E2.js";import"./clsx-B-dksMZM.js";const a=[{question:"What is a SyntaxError?",shortAnswer:"An error that occurs when Python code violates the language's grammar rules.",explanation:"Syntax errors are detected before the program runs. Examples: missing colon, unmatched parentheses, invalid indentation.",hint:"Check the line number in the error message.",level:"basic",codeExample:"def f() print('hi')  # missing colon after ()"},{question:"What is a NameError?",shortAnswer:"An error raised when a variable or function name is not defined.",explanation:"This happens when you try to use a name that hasn't been assigned or imported.",hint:"Check spelling and scope.",level:"basic",codeExample:"print(undefined_variable)  # NameError"},{question:"What is a TypeError?",shortAnswer:"An error raised when an operation is applied to an object of inappropriate type.",explanation:"Examples: adding string and integer, calling a non-callable object, wrong number of arguments.",hint:"Check types using `type()`.",level:"basic",codeExample:"len(42)  # TypeError: object of type 'int' has no len()"},{question:"What is an UnboundLocalError?",shortAnswer:"An error raised when a local variable is referenced before it has been assigned a value.",explanation:"Often occurs when you assign to a variable inside a function, making it local, but then try to read it before assignment.",hint:"Use `global` if you meant to modify a global variable.",level:"intermediate",codeExample:`x = 5
def f(): print(x); x = 10  # UnboundLocalError`},{question:"What is an IndentationError?",shortAnswer:"An error raised when code blocks are not indented consistently.",explanation:"Python uses indentation to define blocks. Mixing tabs and spaces or incorrect indentation causes this error.",hint:"Use 4 spaces consistently.",level:"basic",codeExample:`def f():
print('no indent')  # IndentationError`},{question:"What is a RecursionError?",shortAnswer:"An error raised when the maximum recursion depth is exceeded.",explanation:"This happens when a function calls itself recursively without a proper base case.",hint:"Check for infinite recursion.",level:"intermediate",codeExample:"def infinite(): return infinite()  # RecursionError"},{question:"What is the most common cause of UnboundLocalError in functions?",shortAnswer:"Assigning a value to a variable that is also read in the same function, without declaring it global.",explanation:"Python treats any assignment inside a function as creating a local variable, even if a global exists.",hint:"Use `global variable_name` to fix.",level:"intermediate",codeExample:"count = 0; def inc(): count += 1  # UnboundLocalError"},{question:"What does `pdb.set_trace()` do?",shortAnswer:"It starts an interactive debugger at that point in the code.",explanation:"You can inspect variables, step through code, and continue execution.",hint:"Type 'help' in the debugger for commands.",level:"advanced",codeExample:"import pdb; pdb.set_trace()"},{question:"How can you see the call stack when an error occurs?",shortAnswer:"The traceback printed by Python shows the call stack from the error point back to the start.",explanation:"Each line shows the file, line number, and function where the call occurred.",hint:"Read from bottom to top to see the sequence.",level:"basic",codeExample:`Traceback (most recent call last):
  File 'script.py', line 5, in <module>
    f()
  ...`},{question:"What is the purpose of `assert` statements in debugging?",shortAnswer:"To check that a condition is true; if false, raise AssertionError.",explanation:"Assertions help catch logical errors early by verifying invariants.",hint:"Use for sanity checks, not for data validation.",level:"intermediate",codeExample:"def divide(a, b): assert b != 0, 'Division by zero'; return a/b"},{question:"Why does `def add_item(item, basket=[])` cause problems?",shortAnswer:"The default list is created once and shared across all calls, leading to unexpected accumulation.",explanation:"Each call modifies the same list. Use `None` as default and create a new list inside.",hint:"Mutable defaults are a common gotcha.",level:"intermediate",codeExample:"def f(lst=[]): lst.append(1); return lst  # accumulates"},{question:"What is the difference between `print()` debugging and using a debugger?",shortAnswer:"Print debugging adds output statements; a debugger allows interactive inspection and stepping.",explanation:"Print is simple but requires modifying code; a debugger is more powerful for complex issues.",hint:"Use print for quick checks, debugger for deep investigation.",level:"intermediate",codeExample:"# print(f'x={x}') vs pdb.set_trace()"},{question:"What does `try`/`except` do?",shortAnswer:"It catches and handles exceptions, preventing the program from crashing.",explanation:"Code in `try` block is executed; if an exception occurs, `except` block runs.",hint:"Use to handle expected errors gracefully.",level:"basic",codeExample:"try: x = int(input()) except ValueError: print('Not a number')"},{question:"How do you raise a custom error in a function?",shortAnswer:"Use `raise ValueError('message')` or another exception type.",explanation:"Raising exceptions allows you to signal error conditions to the caller.",hint:"Raise specific exceptions, not generic `Exception`.",level:"intermediate",codeExample:`def set_age(age):
    if age < 0: raise ValueError('Age cannot be negative')`},{question:"What is a stack trace?",shortAnswer:"A report of the active stack frames at the point an exception occurred.",explanation:"It shows the sequence of function calls that led to the error.",hint:"Use it to trace the flow of execution.",level:"basic",codeExample:"The traceback printed by Python."},{question:"How can you debug a function that works for some inputs but fails for others?",shortAnswer:"Test with edge cases (empty list, zero, None, large numbers) and use print statements or assertions.",explanation:"Often the bug is in handling boundary conditions.",hint:"Write small test functions.",level:"intermediate",codeExample:"if not data: return 0  # handle empty case"},{question:"What is the `logging` module and why is it better than `print()`?",shortAnswer:"It provides configurable logging levels, timestamps, and output to files, making debugging in production easier.",explanation:"You can keep logs even after deployment, and control verbosity without code changes.",hint:"Use `logging.debug()`, `logging.info()`, etc.",level:"advanced",codeExample:"import logging; logging.basicConfig(level=logging.DEBUG)"},{question:"What is an off-by-one error?",shortAnswer:"An error where a loop iterates one too many or one too few times.",explanation:"Common with `range(n)` vs `range(1, n+1)` and indexing.",hint:"Check loop boundaries carefully.",level:"basic",codeExample:"for i in range(len(lst)): print(lst[i+1])  # IndexError on last"},{question:"How do you inspect variables in `pdb`?",shortAnswer:"Type the variable name at the `(Pdb)` prompt.",explanation:"You can also use `p variable` or `pp variable` for pretty printing.",hint:"Type `help` to see all commands.",level:"advanced",codeExample:`(Pdb) x
(Pdb) p y`},{question:"What does `pdb` command `n` do?",shortAnswer:"Step to the next line in the current function (step over).",explanation:"It executes the current line and stops at the next line within the same function.",hint:"Use `s` to step into function calls.",level:"advanced",codeExample:"n  # next line"},{question:"What is a common cause of `AttributeError: 'NoneType' object has no attribute ...`?",shortAnswer:"A function returned `None` instead of an object, and you tried to call a method on it.",explanation:"Check that the function has a `return` statement and that it returns the expected object.",hint:"Add `return` or handle `None` cases.",level:"intermediate",codeExample:`def get_data(): pass  # returns None
result = get_data(); result.append(5)  # AttributeError`},{question:"What is a logic error?",shortAnswer:"An error where the code runs but produces incorrect results.",explanation:"No exception is raised; you must deduce the mistake by reasoning or testing.",hint:"Use print statements or a debugger to trace values.",level:"basic",codeExample:"def add(a,b): return a - b  # wrong operator"},{question:"How can you use `dir()` for debugging?",shortAnswer:"It lists the attributes and methods of an object, helping you see what's available.",explanation:"Useful when you forget what methods an object has.",hint:"`print(dir(my_object))`",level:"intermediate",codeExample:"print(dir([]))  # shows list methods"},{question:"What is the purpose of `finally` in exception handling?",shortAnswer:"It defines a block that runs whether an exception occurred or not, often for cleanup.",explanation:"Useful for closing files, releasing resources.",hint:"`finally` always executes.",level:"intermediate",codeExample:"try: f = open('file.txt'); ... finally: f.close()"},{question:"Why does `if x = 5:` cause a SyntaxError?",shortAnswer:"Assignment (`=`) is not allowed in conditionals; use comparison (`==`).",explanation:"Python forbids assignment in `if` to prevent accidental mistakes.",hint:"Use `==` for equality.",level:"basic",codeExample:"if x == 5:  # correct"},{question:"How can you debug a recursive function?",shortAnswer:"Add print statements showing the argument values at each call, and ensure base case is reached.",explanation:"Also use `pdb` to step through recursion levels.",hint:"Watch for infinite recursion.",level:"advanced",codeExample:"def fact(n): print(f'fact({n})'); return 1 if n<=1 else n*fact(n-1)"},{question:"What is an `IndexError`?",shortAnswer:"Raised when trying to access an index that is out of range for a sequence (list, tuple, string).",explanation:"Example: `lst[5]` when list has only 3 elements.",hint:"Check `len(lst)` before indexing.",level:"basic",codeExample:"lst = [1,2,3]; print(lst[5])  # IndexError"},{question:"What is a `KeyError`?",shortAnswer:"Raised when trying to access a dictionary key that does not exist.",explanation:"Use `dict.get(key, default)` to avoid.",hint:"Check if key exists with `if key in dict:`",level:"basic",codeExample:"d = {'a':1}; print(d['b'])  # KeyError"},{question:"How do you get the line number of an error in a traceback?",shortAnswer:"The traceback shows the file name and line number for each frame.",explanation:"Look for the line that says `File '...', line X`.",hint:"Start debugging at the last line before the error type.",level:"basic",codeExample:"File 'script.py', line 10, in <module>"},{question:"What is the difference between `breakpoint()` and `pdb.set_trace()`?",shortAnswer:"`breakpoint()` is a built-in function in Python 3.7+ that calls `pdb.set_trace()` by default, but can be customized.",explanation:"It's more flexible because you can change the debugger via `sys.breakpointhook()`.",hint:"Use `breakpoint()` for modern Python.",level:"advanced",codeExample:"breakpoint()  # same as pdb.set_trace()"},{question:"What is the most effective debugging strategy for beginners?",shortAnswer:"Add print statements to show variable values at different points, and read error messages carefully.",explanation:"Start simple: print inputs and outputs, check conditions, verify assumptions.",hint:"Don't guess – test each hypothesis.",level:"basic",codeExample:"print(f'Before loop: {var}')"}],s=`# syntax_errors.py\r
# Examples of syntax errors (commented out to avoid breaking script)\r
\r
# Missing colon\r
# def greet(name)\r
#     print(f"Hello, {name}")\r
\r
# Missing closing parenthesis\r
# print("Hello"\r
\r
# Invalid indentation\r
# def f():\r
# print("no indent")\r
\r
# Using = instead of == in if\r
# if x = 5:  # SyntaxError\r
\r
# Correct versions:\r
def greet(name):\r
    print(f"Hello, {name}")\r
\r
print("Syntax errors are detected before execution.")`,i=`# runtime_errors.py\r
# Common runtime errors in functions\r
\r
# 1. NameError – using undefined variable\r
def show():\r
    print(undefined_var)  # NameError\r
\r
# Uncomment to see error:\r
# show()\r
\r
# 2. TypeError – wrong argument type\r
def add(a, b):\r
    return a + b\r
# add(5, "10")  # TypeError: unsupported operand type\r
\r
# 3. UnboundLocalError – local variable referenced before assignment\r
count = 0\r
def increment_bad():\r
    count += 1  # UnboundLocalError: local 'count' referenced before assignment\r
\r
# 4. RecursionError – infinite recursion\r
def infinite():\r
    return infinite()  # RecursionError\r
\r
# 5. AttributeError – calling method on None\r
def get_data():\r
    return None\r
# result = get_data()\r
# result.append(5)  # AttributeError: 'NoneType' object has no attribute 'append'\r
\r
print("Runtime errors occur during execution.")`,o=`# debugging_techniques.py\r
# Using print() and pdb for debugging\r
\r
def calculate_average(numbers):\r
    print(f"[DEBUG] numbers = {numbers}")  # print debugging\r
    if not numbers:\r
        return 0\r
    total = sum(numbers)\r
    print(f"[DEBUG] total = {total}")\r
    avg = total / len(numbers)\r
    print(f"[DEBUG] avg = {avg}")\r
    return avg\r
\r
# Call with good data\r
result = calculate_average([10, 20, 30])\r
print(f"Average: {result}")\r
\r
# Buggy function – find the error\r
def find_max(data):\r
    max_val = data[0]  # what if data is empty?\r
    for x in data:\r
        if x > max_val:\r
            max_val = x\r
    return max_val\r
\r
# Uncomment to see IndexError\r
# print(find_max([]))\r
\r
# Using pdb (Python Debugger)\r
import pdb\r
\r
def buggy_function(a, b):\r
    result = a + b\r
    pdb.set_trace()  # Execution pauses here\r
    result = result * 2\r
    return result\r
\r
# To use pdb, run this script with: python -m pdb debugging_techniques.py\r
# Or uncomment the next line and run normally (then type 'c' to continue)\r
# buggy_function(3, 5)\r
\r
print("\\nDebugging tips:")\r
print("1. Use print() to see variable values")\r
print("2. Use pdb.set_trace() for interactive debugging")\r
print("3. Check edge cases (empty lists, zero, None)")`,l=`# debugging_realworld.py\r
# Real-world debugging scenarios\r
\r
# Scenario 1: Off-by-one error in function\r
def sum_of_squares(n):\r
    """Return sum of squares from 1 to n (inclusive)."""\r
    total = 0\r
    for i in range(n):  # Bug: range(n) gives 0..n-1\r
        total += i * i\r
    return total\r
\r
print(f"Sum of squares 1..5 (should be 55): {sum_of_squares(5)}")  # 30, not 55\r
\r
# Fixed version:\r
def sum_of_squares_fixed(n):\r
    total = 0\r
    for i in range(1, n + 1):\r
        total += i * i\r
    return total\r
\r
print(f"Fixed: {sum_of_squares_fixed(5)}")  # 55\r
\r
# Scenario 2: Mutable default argument bug\r
def add_item(item, basket=[]):\r
    basket.append(item)\r
    return basket\r
\r
print(add_item("apple"))   # ['apple']\r
print(add_item("banana"))  # ['apple', 'banana'] – unexpected!\r
\r
# Fixed version:\r
def add_item_fixed(item, basket=None):\r
    if basket is None:\r
        basket = []\r
    basket.append(item)\r
    return basket\r
\r
print(add_item_fixed("apple"))   # ['apple']\r
print(add_item_fixed("banana"))  # ['banana']\r
\r
# Scenario 3: Using \`input()\` returns string, not int\r
def get_double():\r
    num = input("Enter a number: ")\r
    return num * 2  # string repetition, not multiplication\r
\r
# print(get_double())  # Enter 5 → "55"\r
\r
# Fixed:\r
def get_double_fixed():\r
    num = int(input("Enter a number: "))\r
    return num * 2\r
\r
# Scenario 4: Missing return statement\r
def get_greeting(name):\r
    print(f"Hello, {name}")  # No return\r
\r
result = get_greeting("Swadeep")\r
print(result)  # None – likely not intended\r
\r
print("\\nDebugging strategies used:")\r
print("- Print intermediate values")\r
print("- Check edge cases (empty lists)")\r
print("- Understand default argument behavior")\r
print("- Verify return values")`;function b(){return e.jsxs("div",{className:"w-full max-w-5xl mx-auto px-4 py-8 space-y-12 bg-gray-900 text-gray-100",children:[e.jsxs("section",{className:"space-y-6 reveal-fade-up",children:[e.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent",children:"🐛 Common Errors and Debugging in Functions"}),e.jsxs("div",{className:"prose prose-invert max-w-none space-y-4",children:[e.jsxs("p",{className:"text-lg leading-relaxed",children:["Even experienced programmers make mistakes. The key is knowing how to ",e.jsx("strong",{className:"text-blue-300",children:"identify"}),",",e.jsx("strong",{className:"text-yellow-300",children:" understand"}),", and ",e.jsx("strong",{className:"text-green-300",children:"fix"})," errors. This topic covers the most common errors in Python functions and effective debugging strategies."]}),e.jsx("div",{className:"bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500",children:e.jsx("pre",{className:"text-sm font-mono text-emerald-300",children:`# Common error: UnboundLocalError
count = 0
def increment():
    count += 1  # Error! count is local because of assignment
increment()`})})]})]}),e.jsxs("section",{className:"space-y-6 reveal-fade-up",style:{animationDelay:"0.1s"},children:[e.jsx("h2",{className:"text-3xl font-semibold border-l-4 border-red-500 pl-4",children:"🔍 Types of Errors"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-gray-800/70 rounded-xl p-4 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300",children:[e.jsx("div",{className:"text-red-300 text-xl mb-2",children:"SyntaxError"}),e.jsx("p",{className:"text-gray-300",children:"Code violates Python grammar (missing colon, parentheses, indentation). Detected before execution."}),e.jsx("pre",{className:"text-xs mt-2 bg-gray-900 p-2 rounded",children:"def f():  # missing colon? No, missing body?"})]}),e.jsxs("div",{className:"bg-gray-800/70 rounded-xl p-4 hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300",children:[e.jsx("div",{className:"text-yellow-300 text-xl mb-2",children:"NameError"}),e.jsx("p",{className:"text-gray-300",children:"Using a variable or function that hasn't been defined."}),e.jsx("pre",{className:"text-xs mt-2 bg-gray-900 p-2 rounded",children:"print(undefined_var)"})]}),e.jsxs("div",{className:"bg-gray-800/70 rounded-xl p-4 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300",children:[e.jsx("div",{className:"text-orange-300 text-xl mb-2",children:"TypeError"}),e.jsx("p",{className:"text-gray-300",children:"Wrong type of argument, missing arguments, or unsupported operation."}),e.jsx("pre",{className:"text-xs mt-2 bg-gray-900 p-2 rounded",children:"len(42)  # int has no len()"})]}),e.jsxs("div",{className:"bg-gray-800/70 rounded-xl p-4 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300",children:[e.jsx("div",{className:"text-purple-300 text-xl mb-2",children:"UnboundLocalError"}),e.jsx("p",{className:"text-gray-300",children:"Referencing a local variable before assignment (common with globals)."}),e.jsx("pre",{className:"text-xs mt-2 bg-gray-900 p-2 rounded",children:"def f(): print(x); x = 5"})]})]})]}),e.jsxs("section",{className:"space-y-8 reveal-fade-up",style:{animationDelay:"0.2s"},children:[e.jsx("h2",{className:"text-3xl font-semibold border-l-4 border-green-500 pl-4",children:"💻 Live Python Examples"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-yellow-300",children:"1️⃣ Syntax Errors (syntax_errors.py)"}),e.jsx(n,{fileModule:s,title:"syntax_errors.py",highlightLines:[]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-yellow-300",children:"2️⃣ Runtime Errors (runtime_errors.py)"}),e.jsx(n,{fileModule:i,title:"runtime_errors.py",highlightLines:[]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-yellow-300",children:"3️⃣ Debugging Techniques (debugging_techniques.py)"}),e.jsx(n,{fileModule:o,title:"debugging_techniques.py",highlightLines:[]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-yellow-300",children:"4️⃣ Real‑World Debugging (debugging_realworld.py)"}),e.jsx(n,{fileModule:l,title:"debugging_realworld.py",highlightLines:[]})]})]}),e.jsxs("section",{className:"space-y-4 reveal-fade-up",style:{animationDelay:"0.3s"},children:[e.jsx("h2",{className:"text-2xl font-semibold flex items-center gap-2",children:"💡 Tips & Tricks (Debugging)"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-300 bg-gray-800/50 p-5 rounded-xl",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Use `print()` strategically"})," – Print variable values at different points to see where things go wrong."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Read the full traceback"})," – The last line tells the error type, but earlier lines show the call stack."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use `pdb` – Python Debugger"})," – `import pdb; pdb.set_trace()` drops you into an interactive debugger."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Isolate the problem"})," – Comment out code or create a minimal reproducible example."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use `assert` statements"}),' – Check assumptions: `assert x > 0, "x must be positive"`.']})]})]}),e.jsxs("section",{className:"space-y-4 reveal-fade-up",style:{animationDelay:"0.4s"},children:[e.jsx("h2",{className:"text-2xl font-semibold flex items-center gap-2",children:"⚠️ Common Pitfalls in Functions"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"bg-red-900/20 border-l-4 border-red-500 p-4 rounded",children:[e.jsx("p",{className:"font-bold text-red-300",children:"❌ UnboundLocalError with globals"}),e.jsx("p",{className:"text-gray-300",children:"Assigning to a variable inside a function makes it local. Use `global` if you intend to modify a global."})]}),e.jsxs("div",{className:"bg-red-900/20 border-l-4 border-red-500 p-4 rounded",children:[e.jsx("p",{className:"font-bold text-red-300",children:"❌ Mutable default arguments"}),e.jsx("p",{className:"text-gray-300",children:"Defaults like `def f(lst=[])` share the same list across calls. Use `None` instead."})]}),e.jsxs("div",{className:"bg-red-900/20 border-l-4 border-red-500 p-4 rounded",children:[e.jsx("p",{className:"font-bold text-red-300",children:"❌ Forgetting to return a value"}),e.jsx("p",{className:"text-gray-300",children:"If a function doesn't return, it returns `None`. This can cause `AttributeError` if you try to call methods on `None`."})]}),e.jsxs("div",{className:"bg-red-900/20 border-l-4 border-red-500 p-4 rounded",children:[e.jsx("p",{className:"font-bold text-red-300",children:"❌ Indentation errors"}),e.jsx("p",{className:"text-gray-300",children:"Mixing tabs and spaces or incorrect indentation leads to `IndentationError` or unexpected logic."})]})]})]}),e.jsxs("section",{className:"space-y-4 reveal-fade-up",style:{animationDelay:"0.5s"},children:[e.jsx("h2",{className:"text-2xl font-semibold flex items-center gap-2",children:"✅ Best Practices for Debugging"}),e.jsx("div",{className:"bg-emerald-900/20 border border-emerald-700 rounded-xl p-5",children:e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-200",children:[e.jsx("li",{children:"Write small functions and test each one individually."}),e.jsx("li",{children:"Use `try`/`except` to handle expected errors gracefully."}),e.jsx("li",{children:"Log errors with meaningful messages using the `logging` module."}),e.jsx("li",{children:"Use an IDE with a debugger (VS Code, PyCharm) for breakpoints and variable inspection."}),e.jsx("li",{children:"Add `assert` statements for invariants and preconditions."})]})})]}),e.jsxs("section",{className:"space-y-3 reveal-fade-up",style:{animationDelay:"0.6s"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-amber-300",children:"🧠 Think About..."}),e.jsxs("div",{className:"bg-amber-900/20 border border-amber-700 rounded-xl p-5 italic text-gray-200",children:[e.jsxs("p",{children:["🔍 ",e.jsx("strong",{children:"Observe carefully:"})," What does the traceback tell you? Where did the error actually occur?"]}),e.jsxs("p",{className:"mt-2",children:["🔍 ",e.jsx("strong",{children:"Try changing this:"})," Use `pdb` to step through a function that has an error. How does it help?"]}),e.jsxs("p",{className:"mt-2",children:["🔍 ",e.jsx("strong",{children:"Think about:"})," Why is printing variables sometimes not enough? When would you need a full debugger?"]})]})]}),e.jsx("section",{className:"reveal-fade-up",style:{animationDelay:"0.7s"},children:e.jsx(r,{title:"Common Errors & Debugging FAQs",questions:a})}),e.jsx("section",{className:"reveal-fade-up",style:{animationDelay:"0.8s"},children:e.jsx(t,{note:"Debugging is a skill that improves with practice. 🧑‍🏫 I tell students: 'The error message is your friend – read it carefully.' Demonstrate using `pdb` live: set a breakpoint, print variables, step through code. Also show common mistakes like mutable defaults and UnboundLocalError. Exercise: give them a buggy function and ask them to fix it using print debugging, then using pdb."})}),e.jsx("section",{className:"reveal-fade-up",style:{animationDelay:"0.9s"},children:e.jsx("div",{className:"bg-gray-800/50 rounded-xl p-6 flex justify-center",children:e.jsxs("svg",{width:"560",height:"180",viewBox:"0 0 560 180",className:"max-w-full h-auto",children:[e.jsx("rect",{x:"20",y:"20",width:"520",height:"60",fill:"#1e3a8a",stroke:"#3b82f6",strokeWidth:"2",rx:"8",children:e.jsx("animate",{attributeName:"opacity",values:"0.8;1;0.8",dur:"3s",repeatCount:"indefinite"})}),e.jsx("text",{x:"280",y:"45",fill:"white",fontSize:"14",textAnchor:"middle",fontFamily:"monospace",children:"Traceback (most recent call last):"}),e.jsx("text",{x:"280",y:"65",fill:"#94a3b8",fontSize:"13",textAnchor:"middle",children:`  File "script.py", line 5, in <module>  →  NameError: name 'x' is not defined`}),e.jsx("rect",{x:"20",y:"100",width:"520",height:"50",fill:"#065a46",stroke:"#34d399",strokeWidth:"2",rx:"8",children:e.jsx("animate",{attributeName:"opacity",values:"0.8;1;0.8",dur:"3s",begin:"0.5s",repeatCount:"indefinite"})}),e.jsx("text",{x:"280",y:"130",fill:"#fbbf24",fontSize:"13",textAnchor:"middle",children:"💡 Read the error type and the line number – that's where to start!"})]})})}),e.jsx("style",{children:`
        @keyframes fadeUp { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        .reveal-fade-up { animation: fadeUp 0.6s ease-out forwards; opacity: 0; animation-fill-mode: forwards; }
        @media (prefers-reduced-motion: reduce) { .reveal-fade-up { animation: none; opacity: 1; } }
      `})]})}export{b as default};
