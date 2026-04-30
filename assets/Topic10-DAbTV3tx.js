import{j as e}from"./index-sRNy85CP.js";import{P as n}from"./PythonFileLoader-3wx-5NZZ.js";import{T as t}from"./TeacherSukantaHui-BwdTrUd-.js";import{F as r}from"./FAQTemplate-Kigl36QQ.js";import"./PythonCodeBlock-JGE52-l3.js";import"./prism-CMh3e-_S.js";import"./browser-Cey3ecHY.js";import"./git-branch-Al-7J7-z.js";import"./clsx-B-dksMZM.js";const s=[{question:"What does a function return if it has no `return` statement?",shortAnswer:"It returns `None`.",explanation:"Every Python function returns a value; if no explicit return, `None` is returned.",hint:"The default return value is `None`.",level:"basic",codeExample:"def f(): pass; print(f())  # None"},{question:"What is `None` in Python?",shortAnswer:"A singleton object representing the absence of a value.",explanation:"`None` is the sole instance of `NoneType`. It's used to indicate 'no value' or 'null'.",hint:"Similar to `null` in other languages.",level:"basic",codeExample:"x = None; print(type(x))  # <class 'NoneType'>"},{question:"How should you check if a variable is `None`?",shortAnswer:"Use `if x is None:` or `if x is not None:`.",explanation:"`is` compares identity, which is correct for singletons. `==` also works but is slower and can be overridden.",hint:"`is` is idiomatic and faster.",level:"basic",codeExample:"if result is None: print('No result')"},{question:"What does `return` without a value do?",shortAnswer:"It exits the function and returns `None`.",explanation:"`return` alone is equivalent to `return None`. Often used for early exits.",hint:"Early exit pattern.",level:"basic",codeExample:"def f(): if condition: return; print('continues')"},{question:"Is `None` the same as `False`?",shortAnswer:"No, `None` is a different object, though both are falsy.",explanation:"`None` is falsy (`bool(None) is False`), but `None is False` is `False`.",hint:"Different types.",level:"basic",codeExample:"print(None == False)  # False"},{question:"Why do methods like `list.append()` return `None`?",shortAnswer:"Because they modify the list in place and don't need to return a value.",explanation:"Returning `None` signals that the operation was a side effect, not a computation.",hint:"In‑place modification pattern.",level:"intermediate",codeExample:"lst = [1,2]; result = lst.append(3); print(result)  # None"},{question:"Can I use `None` as a default parameter value?",shortAnswer:"Yes, and it's a common pattern to avoid mutable default traps.",explanation:"`def f(lst=None): lst = lst or []` allows creating a new list each call.",hint:"Sentinel for optional arguments.",level:"intermediate",codeExample:"def add_item(item, basket=None): basket = basket or []; basket.append(item)"},{question:"What is the type of `None`?",shortAnswer:"`NoneType`.",explanation:"It's a built‑in type; you can access it as `type(None)`.",hint:"Singleton type.",level:"basic",codeExample:"print(type(None))  # <class 'NoneType'>"},{question:"What happens if I try to call a method on `None`?",shortAnswer:"`AttributeError: 'NoneType' object has no attribute ...`",explanation:"`None` has very few methods (e.g., `__str__`, `__bool__`).",hint:"Common runtime error.",level:"basic",codeExample:"x = None; x.append(5)  # AttributeError"},{question:"Can I assign multiple variables to `None`?",shortAnswer:"Yes, and they all reference the same `None` object.",explanation:"`a = None; b = None; a is b` is `True`.",hint:"Singleton.",level:"basic",codeExample:"a = None; b = None; print(a is b)  # True"},{question:"What is the difference between `None` and `''` (empty string)?",shortAnswer:"`None` means 'no value'; empty string is a string with zero characters.",explanation:"They are different types; `None` is falsy, `''` is also falsy but distinct.",hint:"`''` is a string, `None` is not.",level:"basic",codeExample:"print(type(None), type(''))"},{question:"How does `None` behave in boolean contexts?",shortAnswer:"It evaluates to `False`.",explanation:"`bool(None)` returns `False`. So `if None:` will not execute.",hint:"Falsy value.",level:"basic",codeExample:"if None: print('won't run') else: print('runs')"},{question:"What does `print(None)` output?",shortAnswer:"It prints the string `'None'`.",explanation:"The `__str__` method of `None` returns the string `'None'`.",hint:"It's not empty.",level:"basic",codeExample:"print(None)  # None (as text)"},{question:"Can I use `None` in arithmetic operations?",shortAnswer:"No, it raises `TypeError`.",explanation:"`None + 5` is invalid because `None` does not support numeric operations.",hint:"Not a number.",level:"basic",codeExample:"# None + 1  # TypeError"},{question:"What is a sentinel value?",shortAnswer:"A special value (often `None`) used to indicate a special condition, like 'not found' or 'default'.",explanation:"`None` is frequently used as a sentinel because it's unique and unlikely to be a valid data value.",hint:"Marker for exceptional cases.",level:"intermediate",codeExample:"def find(lst, target): for i,val in enumerate(lst): if val==target: return i; return None"},{question:"Why should I avoid `if x == None`?",shortAnswer:"It works but `if x is None` is more idiomatic and slightly faster.",explanation:"`is` compares identity, which is correct for a singleton. `==` might be overridden by a custom class.",hint:"PEP 8 recommends `is` for `None`.",level:"intermediate",codeExample:"# Prefer: if x is None"},{question:"What is the result of `None or 5`?",shortAnswer:"`5` because `None` is falsy, so the `or` returns the second operand.",explanation:"Short‑circuit evaluation: `None or 5` evaluates to `5`.",hint:"Logical operators work with `None`.",level:"intermediate",codeExample:"x = None or 42; print(x)  # 42"},{question:"Can a function return `None` intentionally?",shortAnswer:"Yes, and it's a common pattern for functions that perform side effects or indicate failure.",explanation:"For example, a lookup function returns `None` when the item is not found.",hint:"Explicit `return None` signals intent.",level:"basic",codeExample:"def get(key): return cache.get(key)  # returns None if missing"},{question:"What is the difference between `return None` and `return`?",shortAnswer:"No functional difference, but `return None` is more explicit.",explanation:"PEP 8 suggests using `return` for early exits and `return None` at the end of a function for clarity.",hint:"Style preference.",level:"basic",codeExample:"def f(): return None  # explicit; def g(): return  # implicit None"},{question:"Can I store `None` in a list or dictionary?",shortAnswer:"Yes, `None` can be an element of any container.",explanation:"It's a regular Python object.",hint:"Useful for placeholders.",level:"basic",codeExample:"lst = [1, None, 3]; d = {'a': None}"},{question:"What is the `__bool__` method of `None`?",shortAnswer:"It returns `False`.",explanation:"`None.__bool__()` is defined to return `False`.",hint:"Makes `None` falsy.",level:"advanced",codeExample:"print(bool(None))  # False"},{question:"Is `None` greater than or less than numbers?",shortAnswer:"Comparing `None` with numbers raises `TypeError` in Python 3.",explanation:"`None < 5` is not allowed; you'll get a `TypeError`.",hint:"No ordering.",level:"intermediate",codeExample:"# None < 5  # TypeError"},{question:"How does `None` behave in JSON serialization?",shortAnswer:"It serializes to `null` in JSON.",explanation:"`json.dumps(None)` returns the string `'null'`.",hint:"Maps to JSON null.",level:"intermediate",codeExample:"import json; print(json.dumps(None))  # null"},{question:"Can I use `None` as a key in a dictionary?",shortAnswer:"Yes, `None` is hashable and can be a dict key.",explanation:"It's immutable and hashable, so it can be used as a key.",hint:"Works fine.",level:"intermediate",codeExample:"d = {None: 'empty value'}; print(d[None])"},{question:"What is the `__str__` method of `None`?",shortAnswer:"It returns the string `'None'`.",explanation:"When you `print(None)`, it calls `None.__str__()` which returns `'None'`.",hint:"Not an empty string.",level:"advanced",codeExample:"print(str(None))  # 'None'"},{question:"Can I create a new instance of `NoneType`?",shortAnswer:"No, `None` is a singleton; you cannot create another `None`.",explanation:"`NoneType` constructor is not available; `None` is the only instance.",hint:"Singleton pattern.",level:"advanced",codeExample:"# type(None)()  # TypeError"},{question:"What is the purpose of `None` in `__init__` methods?",shortAnswer:"It's often used as a default for optional attributes.",explanation:"`self.attribute = attribute` where `attribute=None` means the attribute is not set.",hint:"Optional initialization.",level:"intermediate",codeExample:"def __init__(self, name=None): self.name = name"},{question:"How does `None` interact with `isinstance`?",shortAnswer:"`isinstance(None, type(None))` is `True`; `isinstance(None, object)` is also `True`.",explanation:"`None` is an instance of `NoneType` and also of `object`.",hint:"Subclass of `object`.",level:"advanced",codeExample:"print(isinstance(None, object))  # True"},{question:"What is the performance cost of returning `None`?",shortAnswer:"Virtually none – it's just returning a reference to a singleton.",explanation:"`None` is pre‑created, so returning it is very cheap.",hint:"No allocation overhead.",level:"expert",codeExample:"Returning `None` is O(1)."},{question:"Can I use `None` in a `match` statement (Python 3.10+)?",shortAnswer:"Yes, `case None:` works as a pattern.",explanation:"You can match against `None` directly.",hint:"Useful for handling missing values.",level:"advanced",codeExample:"match value: case None: print('missing')"},{question:"Why does `' '.join(['a', None, 'c'])` fail?",shortAnswer:"Because `join` expects all elements to be strings; `None` is not a string.",explanation:"`None` cannot be concatenated with strings. Convert to string first.",hint:"Type error.",level:"intermediate",codeExample:"# ' '.join(['a', None, 'c'])  # TypeError"}],i=`# no_return.py\r
# Functions without any return statement\r
\r
def greet(name):\r
    """Prints a greeting but returns nothing."""\r
    print(f"Hello, {name}!")\r
\r
def update_counter(counter):\r
    """Increments a counter (modifies mutable list) but no return."""\r
    counter[0] += 1\r
\r
# Calling the functions\r
result1 = greet("Swadeep")\r
print(f"greet() returned: {result1}")  # None\r
\r
my_counter = [0]\r
update_counter(my_counter)\r
print(f"Counter after update: {my_counter[0]}")  # 1\r
result2 = update_counter(my_counter)\r
print(f"update_counter() returned: {result2}")  # None\r
\r
# Demonstrating that None is a real object\r
print(type(result1))  # <class 'NoneType'>`,a=`# empty_return.py\r
# Using 'return' without a value (early exit)\r
\r
def process_data(data):\r
    """Process data, but exit early if data is empty."""\r
    if not data:\r
        print("No data to process")\r
        return   # returns None\r
    print(f"Processing {len(data)} items...")\r
    # more processing here\r
    return   # also returns None (optional at end)\r
\r
result1 = process_data([])\r
print(f"Empty data returned: {result1}")\r
\r
result2 = process_data([1, 2, 3])\r
print(f"Non‑empty data returned: {result2}")\r
\r
# Early return in validation\r
def validate_age(age):\r
    if age < 0:\r
        print("Age cannot be negative")\r
        return\r
    if age > 150:\r
        print("Age too high")\r
        return\r
    print(f"Age {age} is valid")\r
    # No explicit return – still returns None\r
\r
validate_age(-5)\r
validate_age(200)\r
validate_age(25)`,o=`# explicit_none.py\r
# Explicitly returning None (clear intent)\r
\r
def find_student(students, name):\r
    """Return student dict if found, otherwise None."""\r
    for student in students:\r
        if student['name'] == name:\r
            return student\r
    return None   # explicit\r
\r
def configure(timeout=None, retries=None):\r
    """Set configuration; explicit None means use defaults."""\r
    if timeout is None:\r
        timeout = 5\r
    if retries is None:\r
        retries = 3\r
    return {"timeout": timeout, "retries": retries}\r
\r
students = [\r
    {"name": "Tuhina", "age": 16},\r
    {"name": "Abhronila", "age": 15}\r
]\r
\r
found = find_student(students, "Debangshu")\r
if found is None:\r
    print("Student not found")\r
\r
config = configure(retries=5)\r
print(config)  # timeout uses default 5, retries=5\r
\r
# Explicit None can be more readable than empty return\r
def log_message(msg, level="INFO"):\r
    print(f"[{level}] {msg}")\r
    return None   # explicitly signals no value`,l=`# none_realworld.py\r
# Real-world usage of None as a sentinel\r
\r
# 1. Database lookup (simulated)\r
user_database = {\r
    "swadeep": {"name": "Swadeep", "city": "Barrackpore"},\r
    "tuhina": {"name": "Tuhina", "city": "Shyamnagar"}\r
}\r
\r
def get_user(username):\r
    """Return user dict if exists, else None."""\r
    return user_database.get(username)  # .get returns None if missing\r
\r
user = get_user("abhronila")\r
if user is None:\r
    print("User not found, creating new profile...")\r
else:\r
    print(f"Welcome back {user['name']}")\r
\r
# 2. Caching with None as "not yet computed"\r
cache = {}\r
\r
def expensive_computation(key):\r
    if key in cache:\r
        result = cache[key]\r
        if result is None:\r
            print(f"Key {key} is being computed...")\r
        else:\r
            print(f"Returning cached result for {key}")\r
        return result\r
    print(f"Computing {key}...")\r
    cache[key] = None  # mark as in progress\r
    # simulate work\r
    import time\r
    time.sleep(0.1)\r
    result = f"Result for {key}"\r
    cache[key] = result\r
    return result\r
\r
print(expensive_computation("user:123"))\r
print(expensive_computation("user:123"))  # cached\r
\r
# 3. Optional configuration with None defaults\r
def connect(host="localhost", port=None, timeout=None):\r
    if port is None:\r
        port = 5432\r
    if timeout is None:\r
        timeout = 30\r
    print(f"Connecting to {host}:{port} (timeout={timeout}s)")\r
    return True\r
\r
connect()\r
connect(host="db.example.com", port=5433, timeout=60)\r
connect(port=5433)  # host default, port overridden, timeout default\r
\r
# 4. None in list comprehensions (filtering)\r
data = [1, None, 3, None, 5]\r
filtered = [x for x in data if x is not None]\r
print(filtered)  # [1, 3, 5]`;function g(){return e.jsxs("div",{className:"w-full max-w-5xl mx-auto px-4 py-8 space-y-12 bg-gray-900 text-gray-100",children:[e.jsxs("section",{className:"space-y-6 reveal-fade-up",children:[e.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent",children:"🚫 Functions Without `return` (None Type Behavior)"}),e.jsxs("div",{className:"prose prose-invert max-w-none space-y-4",children:[e.jsxs("p",{className:"text-lg leading-relaxed",children:["In Python, ",e.jsx("strong",{className:"text-blue-300",children:"every function returns something"}),". If you don‘t explicitly use a `return` statement, the function returns a special object called",e.jsx("code",{className:"bg-gray-700 px-1 rounded",children:"None"}),". `None` represents the ",e.jsx("strong",{children:"absence of a value"}),` – it’s Python's version of "nothing" or "null".`]}),e.jsx("div",{className:"bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500",children:e.jsxs("p",{className:"font-mono text-sm",children:[e.jsx("span",{className:"text-yellow-300",children:"def greet(name):"}),e.jsx("br",{}),'    print(f"Hello, ',name,'")',e.jsx("br",{}),"    ",e.jsx("span",{className:"text-green-300",children:"# no return"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{className:"text-green-300",children:'result = greet("Swadeep")'}),e.jsx("br",{}),e.jsx("span",{className:"text-green-300",children:"print(result)  # None"})]})})]})]}),e.jsxs("section",{className:"space-y-6 reveal-fade-up",style:{animationDelay:"0.1s"},children:[e.jsx("h2",{className:"text-3xl font-semibold border-l-4 border-green-500 pl-4",children:"📝 `None` – The Implicit Return Value"}),e.jsxs("div",{className:"bg-gray-800 rounded-xl p-5 border border-gray-700",children:[e.jsx("pre",{className:"text-sm font-mono text-emerald-300 overflow-x-auto",children:`def function_without_return():
    # does something but doesn't return
    pass

def function_with_empty_return():
    return   # same as return None

def function_with_explicit_none():
    return None

# All three return None`}),e.jsxs("ul",{className:"mt-4 space-y-2 text-gray-300 list-disc list-inside",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Return type:"})," `NoneType` (singleton object `None`)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Purpose:"})," Indicates that a function performs an action (side effect) but does not produce a meaningful result."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"When & why:"})," For procedures that modify state, print output, or validate input without needing to return a value."]})]})]})]}),e.jsxs("section",{className:"space-y-6 reveal-fade-up",style:{animationDelay:"0.2s"},children:[e.jsx("h2",{className:"text-3xl font-semibold border-l-4 border-yellow-500 pl-4",children:"⚙️ How `None` Works"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-gray-800/70 rounded-xl p-4 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300",children:[e.jsx("div",{className:"text-yellow-300 text-xl mb-2",children:"1️⃣ `None` is a singleton"}),e.jsx("p",{className:"text-gray-300",children:"There is only one `None` object in memory. All variables referencing `None` point to the same object."}),e.jsx("pre",{className:"text-xs mt-2 bg-gray-900 p-2 rounded",children:"a = None; b = None; a is b  # True"})]}),e.jsxs("div",{className:"bg-gray-800/70 rounded-xl p-4 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300",children:[e.jsx("div",{className:"text-purple-300 text-xl mb-2",children:"2️⃣ Falsy value"}),e.jsx("p",{className:"text-gray-300",children:"`None` evaluates to `False` in boolean contexts, like `if` statements."}),e.jsxs("pre",{className:"text-xs mt-2 bg-gray-900 p-2 rounded",children:[`if None: print("won't run")`,e.jsx("br",{}),'else: print("runs")']})]}),e.jsxs("div",{className:"bg-gray-800/70 rounded-xl p-4 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300",children:[e.jsx("div",{className:"text-green-300 text-xl mb-2",children:"3️⃣ Check with `is`, not `==`"}),e.jsx("p",{className:"text-gray-300",children:"Use `if x is None` rather than `if x == None` – it's faster and more idiomatic."}),e.jsxs("pre",{className:"text-xs mt-2 bg-gray-900 p-2 rounded",children:["if result is None:",e.jsx("br",{}),'    print("No result")']})]}),e.jsxs("div",{className:"bg-gray-800/70 rounded-xl p-4 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300",children:[e.jsx("div",{className:"text-red-300 text-xl mb-2",children:"4️⃣ Common for side‑effect functions"}),e.jsx("p",{className:"text-gray-300",children:"`print()`, `list.append()`, `set.add()` all return `None` intentionally."}),e.jsx("pre",{className:"text-xs mt-2 bg-gray-900 p-2 rounded",children:'result = print("Hi")  # result is None'})]})]})]}),e.jsxs("section",{className:"space-y-8 reveal-fade-up",style:{animationDelay:"0.3s"},children:[e.jsx("h2",{className:"text-3xl font-semibold border-l-4 border-green-500 pl-4",children:"💻 Live Python Examples"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-yellow-300",children:"1️⃣ No Return Statement (no_return.py)"}),e.jsx(n,{fileModule:i,title:"no_return.py",highlightLines:[]}),e.jsx("p",{className:"text-gray-400 text-sm",children:"Functions that omit `return` implicitly return `None`."})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-yellow-300",children:"2️⃣ Empty `return` (empty_return.py)"}),e.jsx(n,{fileModule:a,title:"empty_return.py",highlightLines:[]}),e.jsx("p",{className:"text-gray-400 text-sm",children:"Using `return` without a value also returns `None`; often used for early exits."})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-yellow-300",children:"3️⃣ Explicit `return None` (explicit_none.py)"}),e.jsx(n,{fileModule:o,title:"explicit_none.py",highlightLines:[]}),e.jsx("p",{className:"text-gray-400 text-sm",children:"Sometimes it's clearer to write `return None` explicitly."})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-yellow-300",children:"4️⃣ Real‑World: Using `None` as a Sentinel (none_realworld.py)"}),e.jsx(n,{fileModule:l,title:"none_realworld.py",highlightLines:[]}),e.jsx("p",{className:"text-gray-400 text-sm",children:"Practical examples: database lookups, optional configuration, caching."})]})]}),e.jsxs("section",{className:"space-y-4 reveal-fade-up",style:{animationDelay:"0.4s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold flex items-center gap-2",children:["💡 ",e.jsx("span",{children:"Tips & Tricks (Professional Level)"})]}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-300 bg-gray-800/50 p-5 rounded-xl",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-purple-300",children:"Use `is None` for checking"})," – It's faster and avoids accidental truthiness issues."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-purple-300",children:"`None` as a default for mutable parameters"})," – `def f(lst=None): lst = lst or []` avoids the mutable default trap."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-purple-300",children:"Return `None` to indicate 'not found'"})," – In lookup functions, `None` is clearer than magic numbers like -1."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-purple-300",children:"Be aware that `None` prints as empty string"})," – When debugging, `print(None)` shows nothing, which can be confusing."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-purple-300",children:"Document `None` returns"})," – In docstrings, note when a function may return `None`."]})]})]}),e.jsxs("section",{className:"space-y-4 reveal-fade-up",style:{animationDelay:"0.5s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold flex items-center gap-2",children:["⚠️ ",e.jsx("span",{children:"Common Pitfalls"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"bg-red-900/20 border-l-4 border-red-500 p-4 rounded",children:[e.jsx("p",{className:"font-bold text-red-300",children:"❌ Forgetting that a function returns `None`"}),e.jsx("p",{className:"text-gray-300",children:"Assigning the result of `list.append()` to a variable gives `None`, losing the list."})]}),e.jsxs("div",{className:"bg-red-900/20 border-l-4 border-red-500 p-4 rounded",children:[e.jsx("p",{className:"font-bold text-red-300",children:"❌ Using `== None` instead of `is None`"}),e.jsx("p",{className:"text-gray-300",children:"While it works, `is None` is preferred and faster. Custom classes could override `==`."})]}),e.jsxs("div",{className:"bg-red-900/20 border-l-4 border-red-500 p-4 rounded",children:[e.jsx("p",{className:"font-bold text-red-300",children:"❌ Expecting a function that prints to return a string"}),e.jsx("p",{className:"text-gray-300",children:'`def get_greeting(): print("Hello")` returns `None`, not the string. Use `return` instead.'})]}),e.jsxs("div",{className:"bg-red-900/20 border-l-4 border-red-500 p-4 rounded",children:[e.jsx("p",{className:"font-bold text-red-300",children:"❌ Chaining methods that return `None`"}),e.jsx("p",{className:"text-gray-300",children:"`my_list.append(5).sort()` fails because `append` returns `None`."})]})]})]}),e.jsxs("section",{className:"space-y-4 reveal-fade-up",style:{animationDelay:"0.6s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold flex items-center gap-2",children:["✅ ",e.jsx("span",{children:"Best Practices"})]}),e.jsx("div",{className:"bg-emerald-900/20 border border-emerald-700 rounded-xl p-5",children:e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-200",children:[e.jsx("li",{children:"For functions that only perform actions (e.g., logging, printing, updating state), don't return anything – they implicitly return `None`."}),e.jsx("li",{children:"Use `return None` at the end of a function that has no other return to be explicit, especially in long functions."}),e.jsx("li",{children:"Always check for `None` before using a value that might be `None` to avoid `AttributeError`."}),e.jsx("li",{children:"When designing APIs, consider using `None` as a sentinel for optional or missing data."}),e.jsx("li",{children:"Document when a function returns `None` and what that signifies."})]})})]}),e.jsxs("section",{className:"space-y-4 reveal-fade-up",style:{animationDelay:"0.7s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold flex items-center gap-2",children:["📋 ",e.jsx("span",{children:"Mini Checklist"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2 bg-gray-800 p-3 rounded-lg",children:[e.jsx("span",{className:"text-green-400",children:"✔️"})," No `return` → `None`"]}),e.jsxs("div",{className:"flex items-center gap-2 bg-gray-800 p-3 rounded-lg",children:[e.jsx("span",{className:"text-green-400",children:"✔️"})," `return` alone → `None`"]}),e.jsxs("div",{className:"flex items-center gap-2 bg-gray-800 p-3 rounded-lg",children:[e.jsx("span",{className:"text-green-400",children:"✔️"})," `None` is a singleton"]}),e.jsxs("div",{className:"flex items-center gap-2 bg-gray-800 p-3 rounded-lg",children:[e.jsx("span",{className:"text-green-400",children:"✔️"})," Check with `is None` (not `==`)"]}),e.jsxs("div",{className:"flex items-center gap-2 bg-gray-800 p-3 rounded-lg",children:[e.jsx("span",{className:"text-green-400",children:"✔️"})," `None` is falsy in conditions"]}),e.jsxs("div",{className:"flex items-center gap-2 bg-gray-800 p-3 rounded-lg",children:[e.jsx("span",{className:"text-green-400",children:"✔️"})," Built‑ins like `print()` return `None`"]})]})]}),e.jsxs("section",{className:"space-y-3 reveal-fade-up",style:{animationDelay:"0.8s"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-amber-300",children:"🧠 Think About..."}),e.jsxs("div",{className:"bg-amber-900/20 border border-amber-700 rounded-xl p-5 italic text-gray-200",children:[e.jsxs("p",{children:["🔍 ",e.jsx("strong",{children:"Observe carefully:"})," What happens if you chain `my_list.append(5).append(6)`? Why?"]}),e.jsxs("p",{className:"mt-2",children:["🔍 ",e.jsx("strong",{children:"Try changing this:"})," Write a function that modifies a list in place (adds an item) and returns `None`. Compare with a function that returns the new list."]}),e.jsxs("p",{className:"mt-2",children:["🔍 ",e.jsx("strong",{children:"Think about:"})," Why do many Python methods (like `list.sort()`) return `None` instead of the sorted list?"]})]})]}),e.jsx("section",{className:"reveal-fade-up",style:{animationDelay:"0.85s"},children:e.jsx(r,{title:"Functions Without Return (None) FAQs",questions:s})}),e.jsx("section",{className:"reveal-fade-up",style:{animationDelay:"0.9s"},children:e.jsx(t,{note:"The `None` concept is subtle but crucial. 🧑‍🏫 I show students that `print()` returns `None` by having them assign `x = print('hi')` and then `print(x)`. Explain that `None` is not the same as `0`, `''`, or `False` – it's a separate 'nothing' value. Emphasise that checking with `is None` is idiomatic. Also point out that returning `None` is useful for lookup functions (e.g., `dict.get()` returns `None` if key missing). A great exercise: implement a function that safely divides and returns `None` for division by zero."})}),e.jsxs("section",{className:"reveal-fade-up",style:{animationDelay:"1s"},children:[e.jsx("div",{className:"bg-gray-800/50 rounded-xl p-6 flex justify-center",children:e.jsxs("svg",{width:"560",height:"220",viewBox:"0 0 560 220",className:"max-w-full h-auto",children:[e.jsx("rect",{x:"20",y:"20",width:"200",height:"80",fill:"#1e3a8a",stroke:"#3b82f6",strokeWidth:"2",rx:"8",children:e.jsx("animate",{attributeName:"opacity",values:"0.8;1;0.8",dur:"3s",repeatCount:"indefinite"})}),e.jsx("text",{x:"120",y:"45",fill:"white",fontSize:"13",textAnchor:"middle",fontFamily:"monospace",children:"def show(msg):"}),e.jsx("text",{x:"120",y:"65",fill:"#94a3b8",fontSize:"12",textAnchor:"middle",children:"print(msg)"}),e.jsx("text",{x:"120",y:"85",fill:"#fbbf24",fontSize:"11",textAnchor:"middle",children:"no return"}),e.jsx("line",{x1:"220",y1:"60",x2:"260",y2:"60",stroke:"#a78bfa",strokeWidth:"2",markerEnd:"url(#arrowPurple)"}),e.jsx("rect",{x:"270",y:"20",width:"270",height:"80",fill:"#065a46",stroke:"#34d399",strokeWidth:"2",rx:"8",children:e.jsx("animate",{attributeName:"opacity",values:"0.8;1;0.8",dur:"3s",begin:"0.5s",repeatCount:"indefinite"})}),e.jsx("text",{x:"405",y:"45",fill:"white",fontSize:"13",textAnchor:"middle",fontFamily:"monospace",children:'result = show("Hi")'}),e.jsx("text",{x:"405",y:"65",fill:"#94a3b8",fontSize:"12",textAnchor:"middle",children:"print(result)"}),e.jsx("text",{x:"405",y:"85",fill:"#fbbf24",fontSize:"11",textAnchor:"middle",children:"→ None"}),e.jsx("rect",{x:"20",y:"130",width:"520",height:"60",fill:"#1f2937",stroke:"#fbbf24",strokeWidth:"1.5",rx:"6",strokeDasharray:"4,4",children:e.jsx("animate",{attributeName:"opacity",values:"0.6;1;0.6",dur:"4s",repeatCount:"indefinite"})}),e.jsx("text",{x:"280",y:"155",fill:"#fcd34d",fontSize:"12",textAnchor:"middle",children:"💡 `None` represents 'no value' – returned when no explicit `return`"}),e.jsx("text",{x:"280",y:"175",fill:"#9ca3af",fontSize:"11",textAnchor:"middle",children:"Check with `is None`; avoid chaining methods that return `None`"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrowPurple",markerWidth:"8",markerHeight:"8",refX:"6",refY:"4",orient:"auto",children:e.jsx("path",{d:"M0,0 L8,4 L0,8 Z",fill:"#a78bfa"})})})]})}),e.jsx("p",{className:"text-center text-sm text-gray-400 mt-2",children:"Functions without a `return` statement (or with an empty `return`) implicitly return `None`."})]}),e.jsx("style",{children:`
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
