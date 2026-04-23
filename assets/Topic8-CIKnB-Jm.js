import{j as e}from"./index-CmAIoOXN.js";import{P as a}from"./PythonFileLoader-B-WJIo-m.js";import{T as n}from"./TeacherSukantaHui-1LCiMfJM.js";import{F as t}from"./FAQTemplate-BRdhMyQo.js";import"./PythonCodeBlock-O84Db7qU.js";import"./prism-6Oj8TI1J.js";import"./browser-n5DCIAUE.js";import"./git-branch-AzLzm2E2.js";import"./clsx-B-dksMZM.js";const r=[{question:"What does `*` do when used in a function call (e.g., `func(*iterable)`)?",shortAnswer:"It unpacks the iterable into positional arguments.",explanation:"Each element of the iterable becomes a separate argument to the function.",hint:"Opposite of packing in definition.",level:"basic",codeExample:"def f(a,b): return a+b; f(*[1,2])  # 3"},{question:"What does `**` do in a function call (e.g., `func(**dict)`)?",shortAnswer:"It unpacks a dictionary into keyword arguments.",explanation:"Dictionary keys become keyword names, values become argument values.",hint:"Keys must be strings and valid identifiers.",level:"basic",codeExample:"def f(name, age): print(name, age); f(**{'name':'A', 'age':20})"},{question:"Can you use `*` with a string?",shortAnswer:"Yes, a string is an iterable; it unpacks into individual characters.",explanation:"`func(*'abc')` passes three arguments: 'a', 'b', 'c'.",hint:"Works with any iterable.",level:"intermediate",codeExample:"def f(a,b,c): print(a,b,c); f(*'xyz')  # x y z"},{question:"What happens if the number of elements in the unpacked iterable doesn't match the function's parameter count?",shortAnswer:"Python raises a TypeError.",explanation:"Too many or too few elements → `TypeError: ... takes X positional arguments but Y were given`.",hint:"Count must match exactly.",level:"basic",codeExample:"def f(a,b): pass; f(*[1,2,3])  # TypeError"},{question:"Can you unpack multiple iterables in one function call?",shortAnswer:"Yes, Python 3.5+ allows multiple `*` unpackings.",explanation:"Example: `func(*[1,2], *[3,4])` passes 4 arguments.",hint:"They are concatenated in order.",level:"intermediate",codeExample:"def f(a,b,c,d): print(a,b,c,d); f(*[1,2], *[3,4])"},{question:"Can you unpack multiple dictionaries in one call?",shortAnswer:"Yes, using `**dict1, **dict2`. Later dicts override earlier keys.",explanation:"Merges the dictionaries; if keys repeat, the last one wins.",hint:"Order matters for duplicate keys.",level:"intermediate",codeExample:"def f(a,b): print(a,b); f(**{'a':1}, **{'b':2})"},{question:"What is the difference between `*` in definition vs `*` in call?",shortAnswer:"In definition, `*args` packs arguments into a tuple; in call, `*iterable` unpacks into arguments.",explanation:"They are opposites. The same symbol is used for packing (def) and unpacking (call).",hint:"Think of it as two sides of the same coin.",level:"intermediate",codeExample:"def pack(*args): pass; pack(*[1,2])  # * in call unpacks"},{question:"Can you use `**` to unpack a dictionary that has non-string keys?",shortAnswer:"No – all keys must be strings. Otherwise, TypeError.",explanation:"Keyword argument names must be strings. Dictionaries with integer keys cannot be unpacked with `**`.",hint:"Only string keys allowed.",level:"advanced",codeExample:"# f(**{1: 'one'})  # TypeError"},{question:"What happens if a dictionary key is not a valid Python identifier (e.g., 'my-key')?",shortAnswer:"It still works because the key is a string, but you cannot write it as a keyword argument directly; unpacking works.",explanation:"`func(**{'my-key': 1})` is valid; inside the function, the parameter name would be `'my-key'` if using `**kwargs`.",hint:"Only use with `**kwargs` functions.",level:"advanced",codeExample:"def f(**kw): print(kw); f(**{'my-key': 1})  # {'my-key':1}"},{question:"Can you mix regular arguments with unpacking?",shortAnswer:"Yes, but regular positional arguments must come before `*unpacking`; keyword arguments before `**unpacking`.",explanation:"Order: positional, `*iterable`, keyword, `**dict`.",hint:"Follow the same order as in function definition.",level:"intermediate",codeExample:"def f(a,b,c): pass; f(1, *[2,3])  # a=1,b=2,c=3"},{question:"Is it possible to unpack inside a list or dictionary literal?",shortAnswer:"Yes, Python 3.5+ allows `[*a, *b]` for lists and `{**d1, **d2}` for dicts.",explanation:"This creates a new list/dict by unpacking the contents.",hint:"Useful for merging.",level:"advanced",codeExample:"combined = [*[1,2], *[3,4]]  # [1,2,3,4]"},{question:"What is a common real-world use of argument unpacking?",shortAnswer:"Forwarding arguments in decorators, merging configurations, and calling functions with data from CSV/JSON.",explanation:"Any situation where you have a collection that needs to be passed as separate arguments.",hint:"Think of `max(*list)`.",level:"intermediate",codeExample:"def wrapper(*args, **kwargs): return func(*args, **kwargs)"},{question:"Can you use `*` with a generator?",shortAnswer:"Yes, but it will consume the generator entirely, which may be memory-intensive.",explanation:"The generator is iterated and each yielded value becomes an argument.",hint:"Be careful with infinite generators.",level:"advanced",codeExample:"def gen(): yield 1; yield 2; f(*gen())  # f(1,2)"},{question:"What happens if you unpack a dictionary that has keys not matching any parameter, and the function doesn't have `**kwargs`?",shortAnswer:"TypeError: unexpected keyword argument.",explanation:"The function's defined parameters must match exactly unless `**kwargs` is present.",hint:"Use `**kwargs` in definition to accept arbitrary keywords.",level:"basic",codeExample:"def f(a): pass; f(**{'a':1, 'b':2})  # TypeError"},{question:"Can you unpack a tuple into function arguments?",shortAnswer:"Yes, using `*` (e.g., `func(*my_tuple)`).",explanation:"Works exactly like a list.",hint:"Any iterable works.",level:"basic",codeExample:"def add(a,b): return a+b; tup=(5,3); add(*tup)  # 8"},{question:"What is the result of `{**dict1, **dict2}` when keys overlap?",shortAnswer:"The value from the later dictionary (dict2) wins.",explanation:"Dictionary unpacking in literals merges left to right; later keys overwrite earlier ones.",hint:"Similar to `dict1.update(dict2)` but returns a new dict.",level:"intermediate",codeExample:"d1={'a':1}; d2={'a':2, 'b':3}; {**d1, **d2}  # {'a':2, 'b':3}"},{question:"Can you use `*` to unpack a set?",shortAnswer:"Yes, but order is not guaranteed because sets are unordered.",explanation:"Unpacking a set yields its elements in arbitrary order.",hint:"Not recommended for positional arguments that have an expected order.",level:"advanced",codeExample:"def f(a,b,c): pass; f(*{1,2,3})  # order depends on set iteration"},{question:"What is the performance implication of unpacking large iterables?",shortAnswer:"Unpacking creates a tuple of arguments, which may be large but typically acceptable.",explanation:"For huge iterables (millions of items), consider passing the iterable directly instead of unpacking.",hint:"Don't unpack enormous sequences.",level:"expert",codeExample:"Better to accept an iterable parameter than to unpack a million arguments."},{question:"Can I use `*` and `**` in the same call?",shortAnswer:"Yes, they can be used together, with `*` first then `**`.",explanation:"Example: `func(*seq, **dict)`.",hint:"Order matters.",level:"intermediate",codeExample:"def f(a,b,c=0): pass; f(*[1,2], **{'c':3})"},{question:"What happens if I try to unpack a non-iterable with `*`?",shortAnswer:"TypeError: `func() argument after * must be an iterable, not ...`.",explanation:"Only iterables can be unpacked.",hint:"Check type before unpacking.",level:"basic",codeExample:"f(*5)  # TypeError: 'int' object is not iterable"},{question:"How does unpacking interact with default parameter values?",shortAnswer:"Unpacked arguments fill parameters in order; defaults are used only if not provided.",explanation:"If the unpacked iterable has fewer elements than required parameters, missing ones get defaults (if any).",hint:"Defaults are still applied.",level:"intermediate",codeExample:"def f(a,b=2): print(a,b); f(*[1])  # a=1,b=2"},{question:"Can you unpack a dictionary with `**` and also pass additional keyword arguments?",shortAnswer:"Yes, but the additional keyword arguments must come after the unpacking (or before, but careful with order).",explanation:"Order: ... `**dict`, keyword=value. Later keyword overrides if same key exists in dict.",hint:"Later overrides earlier.",level:"advanced",codeExample:"f(**{'a':1}, b=2)  # b overrides if 'b' in dict? No, dict has no 'b'."},{question:"What is the difference between `func(*[1,2])` and `func([1,2])`?",shortAnswer:"First unpacks to two arguments, second passes a single list argument.",explanation:"The first is equivalent to `func(1,2)`, the second to `func([1,2])`.",hint:"One list becomes separate args, other stays as one list.",level:"basic",codeExample:"def f(a,b): return a+b; f(*[1,2]) works; f([1,2]) fails."},{question:"Can I use `*` to unpack a range object?",shortAnswer:"Yes, `range` is iterable, so `func(*range(3))` passes 0,1,2.",explanation:"Be careful with large ranges – they generate many arguments.",hint:"Works but may be heavy.",level:"intermediate",codeExample:"def f(a,b,c): print(a,b,c); f(*range(3))  # 0 1 2"},{question:"Is argument unpacking the same as variable unpacking (e.g., `a,b = [1,2]`)?",shortAnswer:"Similar concept but different context: variable unpacking assigns to names; argument unpacking passes to functions.",explanation:"Both use `*` syntax but in different places.",hint:"Same symbol, different purpose.",level:"basic",codeExample:"a,b = [1,2]  # variable unpacking; func(*[1,2])  # argument unpacking"},{question:"Can you use `**` to unpack a dictionary that has a key named after a built-in (e.g., `print`)?",shortAnswer:"Yes, it's allowed because it's just a string. But inside the function, you can access it via `kwargs['print']`.",explanation:"No special restriction; the key is a string.",hint:"Avoid confusion.",level:"advanced",codeExample:"def f(**kw): print(kw['print']); f(**{'print': 42})"},{question:"What is the maximum number of arguments you can unpack?",shortAnswer:"Limited by Python's maximum argument count (typically around 10^5, platform-dependent).",explanation:"Unpacking huge iterables may hit recursion depth or memory limits.",hint:"Practical limit: a few thousand.",level:"expert",codeExample:"Unpacking a list of 100,000 elements will likely cause a RecursionError or MemoryError."},{question:"Can I use unpacking with built-in functions like `print`?",shortAnswer:"Yes, `print(*[1,2,3])` prints `1 2 3`.",explanation:"Built-in functions accept unpacking just like user-defined ones.",hint:"Very useful.",level:"basic",codeExample:"print(*['a','b','c'], sep=',')  # a,b,c"},{question:"What is the purpose of `*` and `**` in argument forwarding?",shortAnswer:"They allow a wrapper function to pass any arguments to another function without knowing them in advance.",explanation:"`def wrapper(*args, **kwargs): return func(*args, **kwargs)`",hint:"Essential for decorators.",level:"advanced",codeExample:"See decorator pattern."},{question:"Can you use `*` to unpack a dictionary? What happens?",shortAnswer:"Yes, but it unpacks only the keys (not values) because iterating a dict yields keys.",explanation:"`func(*{'a':1, 'b':2})` passes 'a', 'b' as arguments.",hint:"Use `**` for values.",level:"advanced",codeExample:"def f(a,b): print(a,b); f(*{'a':1, 'b':2})  # prints 'a','b'"},{question:"How does unpacking work with functions that have `*args` parameter?",shortAnswer:"Unpacking feeds into `*args` as individual elements, not as a tuple.",explanation:"If a function is defined with `*args`, calling it with `func(*[1,2,3])` will make `args = (1,2,3)`.",hint:"Unpacking is already providing separate args; `*args` packs them again.",level:"intermediate",codeExample:"def f(*args): print(args); f(*[1,2])  # (1,2)"}],s=`# unpack_list.py\r
# Unpacking lists and tuples with * in function calls\r
\r
def calculate_total(price, tax, discount):\r
    """Calculate final price after tax and discount."""\r
    total = price + tax - discount\r
    print(f"Price: {price}, Tax: {tax}, Discount: {discount} → Total: {total}")\r
    return total\r
\r
# Normal call with separate arguments\r
calculate_total(100, 18, 10)\r
\r
# Data already in a list\r
order1 = [100, 18, 10]\r
calculate_total(*order1)   # unpack list into three arguments\r
\r
# Data in a tuple\r
order2 = (200, 36, 20)\r
calculate_total(*order2)   # unpack tuple\r
\r
# Mixed with regular arguments (positional before unpack)\r
calculate_total(50, *[9, 5])   # price=50, tax=9, discount=5\r
\r
# Unpacking with too many/few elements -> TypeError\r
# order3 = [100, 18, 10, 99]\r
# calculate_total(*order3)  # TypeError: takes 3 positional arguments but 4 were given\r
\r
# Unpacking strings (works, but rarely useful)\r
def show(a, b, c):\r
    print(a, b, c)\r
\r
show(*"abc")   # 'a', 'b', 'c'`,i=`# unpack_dict.py\r
# Unpacking dictionaries with ** in function calls\r
\r
def create_profile(name, age, city, occupation="Student"):\r
    print(f"{name}, {age}, from {city} – {occupation}")\r
\r
# Normal call\r
create_profile("Swadeep", 17, "Barrackpore")\r
\r
# Data in a dictionary (keys must match parameter names)\r
profile1 = {\r
    "name": "Tuhina",\r
    "age": 16,\r
    "city": "Shyamnagar"\r
}\r
create_profile(**profile1)   # occupation uses default\r
\r
# Override some values by mixing with regular keyword args\r
create_profile(**profile1, occupation="Class Captain")\r
\r
# Dictionary with extra keys? They go to **kwargs if function has it\r
def flexible_profile(**kwargs):\r
    for k, v in kwargs.items():\r
        print(f"{k} = {v}")\r
\r
extra_data = {"name": "Abhronila", "age": 15, "city": "Ichapur", "grade": "A"}\r
flexible_profile(**extra_data)   # all keys accepted\r
\r
# Invalid: key not a string (can't happen in dict literal, but key must be str)\r
# def f(a): pass\r
# f(**{1: "one"})  # TypeError: keywords must be strings`,l=`# mixed_unpack.py\r
# Combining multiple unpackings and regular arguments\r
\r
def display(prefix, a, b, c, suffix="!"):\r
    print(f"{prefix}: {a}, {b}, {c}{suffix}")\r
\r
# Multiple * unpackings (Python 3.5+)\r
display("Values", *[1, 2], *[3])          # prefix="Values", a=1,b=2,c=3\r
display("Numbers", *[10], *[20, 30])      # a=10,b=20,c=30\r
\r
# Mix regular arguments after unpacking? No – unpacking must be after all positional\r
# display(*[1,2], "Hello", 3)  # SyntaxError? Actually works but careful: "Hello" becomes prefix\r
# Better to keep unpacking at the end of positional args.\r
\r
# Unpacking dictionaries multiple times\r
def register(username, email, active=True, role="user"):\r
    print(f"{username} ({email}) – active={active}, role={role}")\r
\r
defaults = {"active": True, "role": "user"}\r
overrides = {"role": "admin", "email": "admin@example.com"}\r
specific = {"username": "swadeep"}\r
\r
# Order matters: later dicts override earlier keys\r
register(**defaults, **overrides, **specific)\r
# result: username='swadeep', email='admin@example.com', active=True, role='admin'\r
\r
# Merge dictionaries in a call (Python 3.5+)\r
register(**defaults, **overrides)   # missing 'username' -> TypeError\r
\r
# With regular keyword arguments\r
register("tuhina", "t@example.com", **{"active": False})`,o=`# unpack_realworld.py\r
# Real-world applications of argument unpacking\r
\r
import math\r
\r
# 1. Reading CSV rows and unpacking into variables\r
csv_row = ["Swadeep", "17", "Barrackpore"]\r
name, age, city = csv_row   # unpack outside function\r
print(f"Student: {name}, Age: {age}, City: {city}")\r
\r
# 2. Passing a list of numbers to a function that expects multiple args\r
def distance(x1, y1, x2, y2):\r
    return math.hypot(x2 - x1, y2 - y1)\r
\r
coords = [0, 0, 3, 4]\r
print(distance(*coords))   # 5.0\r
\r
# 3. API call with dynamic parameters using **kwargs\r
def api_request(endpoint, **params):\r
    print(f"GET {endpoint} with params: {params}")\r
    # Simulate request\r
    return {"status": 200}\r
\r
filters = {"user_id": 123, "active": True, "limit": 10}\r
api_request("/users", **filters)\r
\r
# 4. Merging configuration dictionaries\r
default_config = {\r
    "host": "localhost",\r
    "port": 8080,\r
    "debug": False\r
}\r
user_config = {\r
    "port": 9090,\r
    "debug": True\r
}\r
# Merge with precedence: user_config overrides default_config\r
merged = {**default_config, **user_config}\r
print(merged)\r
\r
# 5. Forwarding arguments in a wrapper function (decorator pattern)\r
def logger(func):\r
    def wrapper(*args, **kwargs):\r
        print(f"Calling {func.__name__} with args={args}, kwargs={kwargs}")\r
        result = func(*args, **kwargs)\r
        print(f"Result: {result}")\r
        return result\r
    return wrapper\r
\r
@logger\r
def multiply(x, y):\r
    return x * y\r
\r
multiply(4, 5)                     # args=(4,5)\r
multiply(x=6, y=7)                 # kwargs={'x':6,'y':7}\r
\r
# 6. Unpacking in list/dict literals (Python 3.5+)\r
numbers = [1, 2, 3]\r
more_numbers = [*numbers, 4, 5, 6]   # [1,2,3,4,5,6]\r
print(more_numbers)\r
\r
dict_a = {"a": 1, "b": 2}\r
dict_b = {"c": 3, "d": 4}\r
combined = {**dict_a, **dict_b}      # {'a':1,'b':2,'c':3,'d':4}\r
print(combined)`;function y(){return e.jsxs("div",{className:"w-full max-w-5xl mx-auto px-4 py-8 space-y-12 bg-gray-900 text-gray-100",children:[e.jsxs("section",{className:"space-y-6 reveal-fade-up",children:[e.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent",children:"📦 Unpacking Arguments in Function Calls"}),e.jsxs("div",{className:"prose prose-invert max-w-none space-y-4",children:[e.jsxs("p",{className:"text-lg leading-relaxed",children:["Unpacking allows you to take elements from an iterable (list, tuple) or a dictionary and pass them as ",e.jsx("strong",{className:"text-blue-300",children:"individual arguments"})," to a function. The ",e.jsx("code",{className:"bg-gray-700 px-1 rounded",children:"*"})," operator unpacks sequences;",e.jsx("code",{className:"bg-gray-700 px-1 rounded",children:"**"})," unpacks dictionaries."]}),e.jsx("div",{className:"bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500",children:e.jsxs("p",{className:"font-mono text-sm",children:[e.jsx("span",{className:"text-yellow-300",children:"def greet(name, age, city):"}),e.jsx("br",{}),"    ",'print(f"{name}, {age}, from {city}")',e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{className:"text-green-300",children:"# Unpack list as positional arguments"}),e.jsx("br",{}),e.jsx("span",{className:"text-green-300",children:'data = ["Swadeep", 17, "Barrackpore"]'}),e.jsx("br",{}),e.jsx("span",{className:"text-green-300",children:"greet(*data)"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{className:"text-green-300",children:"# Unpack dict as keyword arguments"}),e.jsx("br",{}),e.jsxs("span",{className:"text-green-300",children:["info = ","{",'"name": "Tuhina", "age": 16, "city": "Shyamnagar"',"}"]}),e.jsx("br",{}),e.jsx("span",{className:"text-green-300",children:"greet(**info)"})]})})]})]}),e.jsxs("section",{className:"space-y-6 reveal-fade-up",style:{animationDelay:"0.1s"},children:[e.jsx("h2",{className:"text-3xl font-semibold border-l-4 border-green-500 pl-4",children:"📝 Unpacking Syntax in Calls"}),e.jsxs("div",{className:"bg-gray-800 rounded-xl p-5 border border-gray-700",children:[e.jsx("pre",{className:"text-sm font-mono text-emerald-300 overflow-x-auto",children:`# Unpack sequence (list, tuple, any iterable) -> positional arguments
func(*iterable)

# Unpack dictionary -> keyword arguments
func(**dictionary)

# Mix regular arguments with unpacking
func(regular, *iterable, keyword=value, **dictionary)`}),e.jsxs("ul",{className:"mt-4 space-y-2 text-gray-300 list-disc list-inside",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Purpose:"})," Convert a collection into separate arguments, making code cleaner and more dynamic."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"When & why:"})," When you have data already in a list/dict and need to pass it to a function that expects individual parameters."]})]})]})]}),e.jsxs("section",{className:"space-y-6 reveal-fade-up",style:{animationDelay:"0.2s"},children:[e.jsx("h2",{className:"text-3xl font-semibold border-l-4 border-yellow-500 pl-4",children:"⚙️ How Unpacking Works"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-gray-800/70 rounded-xl p-4 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300",children:[e.jsx("div",{className:"text-yellow-300 text-xl mb-2",children:"1️⃣ `*` unpacks sequences"}),e.jsx("p",{className:"text-gray-300",children:"List, tuple, string, or any iterable → each element becomes a positional argument."}),e.jsxs("pre",{className:"text-xs mt-2 bg-gray-900 p-2 rounded",children:["def add(a,b): return a+b",e.jsx("br",{}),"nums = [5,3]; add(*nums) → 8"]})]}),e.jsxs("div",{className:"bg-gray-800/70 rounded-xl p-4 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300",children:[e.jsx("div",{className:"text-purple-300 text-xl mb-2",children:"2️⃣ `**` unpacks dictionaries"}),e.jsx("p",{className:"text-gray-300",children:"Dictionary key-value pairs become keyword arguments (keys must be valid identifiers)."}),e.jsxs("pre",{className:"text-xs mt-2 bg-gray-900 p-2 rounded",children:['def greet(name, msg): print(f"{msg}, {name}")',e.jsx("br",{}),"d =",' {"name":"Swadeep", "msg":"Hi"}',e.jsx("br",{}),'greet(**d) → "Hi, Swadeep"']})]}),e.jsxs("div",{className:"bg-gray-800/70 rounded-xl p-4 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300",children:[e.jsx("div",{className:"text-green-300 text-xl mb-2",children:"3️⃣ Can be used multiple times (Python 3.5+)"}),e.jsx("p",{className:"text-gray-300",children:"You can unpack several iterables/dicts in one call."}),e.jsxs("pre",{className:"text-xs mt-2 bg-gray-900 p-2 rounded",children:["def f(a,b,c): pass",e.jsx("br",{}),"f(*[1,2], *[3])  # a=1,b=2,c=3",e.jsx("br",{}),"f(**d1, **d2)   # merges dicts"]})]}),e.jsxs("div",{className:"bg-gray-800/70 rounded-xl p-4 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300",children:[e.jsx("div",{className:"text-red-300 text-xl mb-2",children:"4️⃣ Mix with regular arguments"}),e.jsx("p",{className:"text-gray-300",children:"Regular positional arguments must come before `*` unpacking; keyword arguments before `**`."}),e.jsx("pre",{className:"text-xs mt-2 bg-gray-900 p-2 rounded",children:'func(1, *[2,3], x=4, **{"y":5})'})]})]})]}),e.jsxs("section",{className:"space-y-8 reveal-fade-up",style:{animationDelay:"0.3s"},children:[e.jsx("h2",{className:"text-3xl font-semibold border-l-4 border-green-500 pl-4",children:"💻 Live Python Examples"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-yellow-300",children:"1️⃣ Unpacking Lists/Tuples with `*` (unpack_list.py)"}),e.jsx(a,{fileModule:s,title:"unpack_list.py",highlightLines:[]}),e.jsx("p",{className:"text-gray-400 text-sm",children:"Shows how to unpack sequences into positional arguments."})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-yellow-300",children:"2️⃣ Unpacking Dictionaries with `**` (unpack_dict.py)"}),e.jsx(a,{fileModule:i,title:"unpack_dict.py",highlightLines:[]}),e.jsx("p",{className:"text-gray-400 text-sm",children:"Demonstrates converting a dict into keyword arguments."})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-yellow-300",children:"3️⃣ Mixed Unpacking and Multiple Unpacks (mixed_unpack.py)"}),e.jsx(a,{fileModule:l,title:"mixed_unpack.py",highlightLines:[]}),e.jsx("p",{className:"text-gray-400 text-sm",children:"Combines regular arguments with multiple `*` and `**` unpackings."})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-xl font-medium text-yellow-300",children:"4️⃣ Real‑World: Data Processing and API Calls (unpack_realworld.py)"}),e.jsx(a,{fileModule:o,title:"unpack_realworld.py",highlightLines:[]}),e.jsx("p",{className:"text-gray-400 text-sm",children:"Practical examples: reading CSV rows, merging configs, calling functions dynamically."})]})]}),e.jsxs("section",{className:"space-y-4 reveal-fade-up",style:{animationDelay:"0.4s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold flex items-center gap-2",children:["💡 ",e.jsx("span",{children:"Tips & Tricks (Professional Level)"})]}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-300 bg-gray-800/50 p-5 rounded-xl",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-purple-300",children:"Unpack to avoid indexing"})," – Instead of `args[0], args[1]`, do `func(*args)`."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-purple-300",children:"Merge dictionaries with `{**d1, **d2}"})," – Python 3.5+ allows dictionary unpacking in dict literals."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-purple-300",children:"Use `*` to flatten nested structures"})," – `func(*[1,2], *[3,4])` passes four arguments."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-purple-300",children:"Combine with `*args` in definition"})," – `def f(*args):` then `f(*some_list)` forwards the list."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-purple-300",children:"Be careful with order"})," – Later unpacked items can override earlier ones for `**` (dict merging)."]})]})]}),e.jsxs("section",{className:"space-y-4 reveal-fade-up",style:{animationDelay:"0.5s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold flex items-center gap-2",children:["⚠️ ",e.jsx("span",{children:"Common Pitfalls"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"bg-red-900/20 border-l-4 border-red-500 p-4 rounded",children:[e.jsx("p",{className:"font-bold text-red-300",children:"❌ Unpacking too many or too few elements"}),e.jsx("p",{className:"text-gray-300",children:"If the number of elements in the iterable doesn't match the function's parameters, you get TypeError."})]}),e.jsxs("div",{className:"bg-red-900/20 border-l-4 border-red-500 p-4 rounded",children:[e.jsx("p",{className:"font-bold text-red-300",children:"❌ Using `**` on a dict with non‑string keys"}),e.jsx("p",{className:"text-gray-300",children:"Dictionary keys must be strings; otherwise, TypeError: `keywords must be strings`."})]}),e.jsxs("div",{className:"bg-red-900/20 border-l-4 border-red-500 p-4 rounded",children:[e.jsx("p",{className:"font-bold text-red-300",children:"❌ Unpacking a dict with keys that are not valid Python identifiers"}),e.jsx("p",{className:"text-gray-300",children:'Keys like `"my-key"` or `"123"` are not allowed as keyword argument names. Use `**` only on dicts with identifier‑compliant keys.'})]}),e.jsxs("div",{className:"bg-red-900/20 border-l-4 border-red-500 p-4 rounded",children:[e.jsx("p",{className:"font-bold text-red-300",children:"❌ Forgetting that unpacking creates a copy"}),e.jsx("p",{className:"text-gray-300",children:"The function receives the values, not references to the original container. Modifying the container after unpacking has no effect."})]})]})]}),e.jsxs("section",{className:"space-y-4 reveal-fade-up",style:{animationDelay:"0.6s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold flex items-center gap-2",children:["✅ ",e.jsx("span",{children:"Best Practices"})]}),e.jsx("div",{className:"bg-emerald-900/20 border border-emerald-700 rounded-xl p-5",children:e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-200",children:[e.jsx("li",{children:"Use unpacking to make code more declarative: `max(*numbers)` instead of `max(numbers[0], numbers[1], ...)`."}),e.jsx("li",{children:"When merging dictionaries, prefer `{**defaults, **overrides}` for clear precedence (overrides win)."}),e.jsx("li",{children:"Validate the length of the iterable before unpacking if the function expects a fixed number of arguments."}),e.jsx("li",{children:"Use unpacking in wrapper functions to transparently pass arguments: `def wrapper(*args, **kwargs): return func(*args, **kwargs)`."}),e.jsx("li",{children:"Document that a function expects unpacked data when designing APIs that rely on this pattern."})]})})]}),e.jsxs("section",{className:"space-y-4 reveal-fade-up",style:{animationDelay:"0.7s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold flex items-center gap-2",children:["📋 ",e.jsx("span",{children:"Mini Checklist"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2 bg-gray-800 p-3 rounded-lg",children:[e.jsx("span",{className:"text-green-400",children:"✔️"})," `*` unpacks sequences → positional args"]}),e.jsxs("div",{className:"flex items-center gap-2 bg-gray-800 p-3 rounded-lg",children:[e.jsx("span",{className:"text-green-400",children:"✔️"})," `**` unpacks dicts → keyword args"]}),e.jsxs("div",{className:"flex items-center gap-2 bg-gray-800 p-3 rounded-lg",children:[e.jsx("span",{className:"text-green-400",children:"✔️"})," Number of elements must match function parameters"]}),e.jsxs("div",{className:"flex items-center gap-2 bg-gray-800 p-3 rounded-lg",children:[e.jsx("span",{className:"text-green-400",children:"✔️"})," Dict keys must be valid identifiers"]}),e.jsxs("div",{className:"flex items-center gap-2 bg-gray-800 p-3 rounded-lg",children:[e.jsx("span",{className:"text-green-400",children:"✔️"})," Can unpack multiple times (Python 3.5+)"]}),e.jsxs("div",{className:"flex items-center gap-2 bg-gray-800 p-3 rounded-lg",children:[e.jsx("span",{className:"text-green-400",children:"✔️"})," Great for forwarding arguments in decorators"]})]})]}),e.jsxs("section",{className:"space-y-3 reveal-fade-up",style:{animationDelay:"0.8s"},children:[e.jsx("h2",{className:"text-2xl font-semibold text-amber-300",children:"🧠 Think About..."}),e.jsxs("div",{className:"bg-amber-900/20 border border-amber-700 rounded-xl p-5 italic text-gray-200",children:[e.jsxs("p",{children:["🔍 ",e.jsx("strong",{children:"Observe carefully:"})," In `unpack_list.py`, what happens if the list has 4 elements but the function expects 3?"]}),e.jsxs("p",{className:"mt-2",children:["🔍 ",e.jsx("strong",{children:"Try changing this:"})," Write a function `print_all(*args)` that prints each argument. Then call it with `print_all(*[1,2,3])`. What does `*` do now?"]}),e.jsxs("p",{className:"mt-2",children:["🔍 ",e.jsx("strong",{children:"Think about:"}),"Why might you want to merge two dictionaries with {**a, **b} instead of 'a.update(b)'?"]})]})]}),e.jsx("section",{className:"reveal-fade-up",style:{animationDelay:"0.85s"},children:e.jsx(t,{title:"Unpacking Arguments FAQs",questions:r})}),e.jsx("section",{className:"reveal-fade-up",style:{animationDelay:"0.9s"},children:e.jsx(n,{note:"Unpacking is one of those features that makes Python code elegant. 🧑‍🏫 I tell students: 'If you find yourself writing `a = data[0]; b = data[1]`, you probably want unpacking.' Show the difference between `*` in definition (packing) and `*` in call (unpacking). A great exercise: read a CSV row as a list and unpack it into variables. Also demonstrate merging configurations with `**` – it's a pattern used in many frameworks like Django settings."})}),e.jsxs("section",{className:"reveal-fade-up",style:{animationDelay:"1s"},children:[e.jsx("div",{className:"bg-gray-800/50 rounded-xl p-6 flex justify-center",children:e.jsxs("svg",{width:"580",height:"220",viewBox:"0 0 580 220",className:"max-w-full h-auto",children:[e.jsx("rect",{x:"20",y:"20",width:"240",height:"80",fill:"#1e3a8a",stroke:"#3b82f6",strokeWidth:"2",rx:"8",children:e.jsx("animate",{attributeName:"opacity",values:"0.8;1;0.8",dur:"3s",repeatCount:"indefinite"})}),e.jsx("text",{x:"140",y:"45",fill:"white",fontSize:"13",textAnchor:"middle",fontFamily:"monospace",children:"def show(a, b, c):"}),e.jsx("text",{x:"140",y:"65",fill:"#94a3b8",fontSize:"12",textAnchor:"middle",children:"print(a, b, c)"}),e.jsx("text",{x:"140",y:"85",fill:"#fbbf24",fontSize:"11",textAnchor:"middle",children:"3 parameters"}),e.jsx("line",{x1:"260",y1:"60",x2:"300",y2:"60",stroke:"#a78bfa",strokeWidth:"2",markerEnd:"url(#arrowPurple)"}),e.jsx("rect",{x:"310",y:"20",width:"250",height:"80",fill:"#065a46",stroke:"#34d399",strokeWidth:"2",rx:"8",children:e.jsx("animate",{attributeName:"opacity",values:"0.8;1;0.8",dur:"3s",begin:"0.5s",repeatCount:"indefinite"})}),e.jsx("text",{x:"435",y:"45",fill:"white",fontSize:"13",textAnchor:"middle",fontFamily:"monospace",children:"data = [1, 2, 3]"}),e.jsx("text",{x:"435",y:"65",fill:"white",fontSize:"13",textAnchor:"middle",fontFamily:"monospace",children:"show(*data)"}),e.jsx("text",{x:"435",y:"85",fill:"#fbbf24",fontSize:"11",textAnchor:"middle",children:"← unpacks list → 3 args"}),e.jsx("rect",{x:"20",y:"130",width:"540",height:"60",fill:"#1f2937",stroke:"#fbbf24",strokeWidth:"1.5",rx:"6",strokeDasharray:"4,4",children:e.jsx("animate",{attributeName:"opacity",values:"0.6;1;0.6",dur:"4s",repeatCount:"indefinite"})}),e.jsx("text",{x:"290",y:"155",fill:"#fcd34d",fontSize:"12",textAnchor:"middle",children:"💡 `*` unpacks iterables into positional arguments; `**` unpacks dicts into keyword arguments"}),e.jsx("text",{x:"290",y:"175",fill:"#9ca3af",fontSize:"11",textAnchor:"middle",children:"Useful for dynamic calls, config merging, and argument forwarding"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrowPurple",markerWidth:"8",markerHeight:"8",refX:"6",refY:"4",orient:"auto",children:e.jsx("path",{d:"M0,0 L8,4 L0,8 Z",fill:"#a78bfa"})})})]})}),e.jsx("p",{className:"text-center text-sm text-gray-400 mt-2",children:"Unpacking turns a collection into separate arguments, making function calls cleaner and more dynamic."})]}),e.jsx("style",{children:`
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
