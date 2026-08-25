import{b as a,j as e,bg as c}from"./vendor-react-core-Doz9nIC6.js";import{P as s}from"./PythonFileLoader-hCi5osN-.js";import{P as m}from"./PlainTextPrint-C08xhKA4.js";import{F as h}from"./FAQTemplate-CkSqDH4B.js";import{T as x}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const u=`# ====================================================================\r
# Topic 7: Iterating Through Sets\r
# File: basic_for_loop_iteration.py\r
# Description: Demonstrating set iteration protocols and for-loop traversal\r
# ====================================================================\r
\r
# Set of active training locations in West Bengal\r
active_locations = {"Barrackpore", "Kolkata", "Ichapur", "Jadavpur"}\r
\r
print("--- Standard For-Loop Iteration ---")\r
for location in active_locations:\r
    print(f"Center Location: {location}")\r
\r
# 2. Iteration protocol under the hood (__iter__ and __next__)\r
print("\\n--- Manual Iterator Traversal ---")\r
iterator = iter(active_locations)\r
try:\r
    while True:\r
        item = next(iterator)\r
        print("Fetched via next():", item)\r
except StopIteration:\r
    print("Iterator exhausted cleanly (StopIteration raised).")\r
\r
# 3. Sorted iteration without mutating the set\r
print("\\n--- Alphabetically Sorted Iteration ---")\r
for location in sorted(active_locations):\r
    print(f"Sorted Center: {location}")\r
`,p=`# ====================================================================\r
# Topic 7: Iterating Through Sets\r
# File: enumerate_and_unpacking.py\r
# Description: Using enumerate() and tuple unpacking during set iteration\r
# ====================================================================\r
\r
# 1. Using enumerate() on a set\r
topics = {"Functions", "Lists", "Tuples", "Dictionaries", "Sets"}\r
\r
print("--- Iterating with enumerate() ---")\r
for index, topic in enumerate(topics, start=1):\r
    print(f"Step {index}: Mastered {topic}")\r
\r
# 2. Iterating over sets of tuples with tuple unpacking\r
student_records = {\r
    ("Susmita Roy", "Python Pro", 4500),\r
    ("Debangshu Mukherjee", "Data Science", 6500),\r
    ("Mamata Banerjee", "Python Pro", 4500),\r
    ("Abhronila Das", "Web Development", 5000),\r
}\r
\r
print("\\n--- Unpacking Structured Tuples in Set ---")\r
total_fee_collected = 0\r
for name, course, fee in student_records:\r
    print(f"Student: {name:20} | Course: {course:16} | Fee: ₹{fee}")\r
    total_fee_collected += fee\r
\r
print(f"\\nTotal Batch Collection in Indian Rupees: ₹{total_fee_collected}")\r
`,f=`# ====================================================================\r
# Topic 7: Iterating Through Sets\r
# File: mutation_during_iteration_error.py\r
# Description: Demonstrating RuntimeError on set mutation during iteration & proper fixes\r
# ====================================================================\r
\r
# 1. THE CATASTROPHIC BUG: Mutating set while iterating over it\r
numbers = {1, 2, 3, 4, 5, 6}\r
print("Original Numbers:", numbers)\r
\r
try:\r
    for num in numbers:\r
        if num % 2 == 0:\r
            numbers.remove(num)  # Modifies hash bucket table during active loop!\r
except RuntimeError as error:\r
    print("\\n[RuntimeError Trapped]:", error)\r
    print("Reason: Modifying set size invalidates internal bucket offsets!")\r
\r
# 2. PROPER FIX 1: Iterating over a shallow copy\r
numbers_fix1 = {1, 2, 3, 4, 5, 6}\r
for num in numbers_fix1.copy():  # or list(numbers_fix1)\r
    if num % 2 == 0:\r
        numbers_fix1.remove(num)\r
print("\\nFix 1 (Loop over copy) -> Odd Numbers:", numbers_fix1)\r
\r
# 3. PROPER FIX 2: Using a clean Set Comprehension\r
numbers_fix2 = {1, 2, 3, 4, 5, 6}\r
numbers_fix2 = {num for num in numbers_fix2 if num % 2 != 0}\r
print("Fix 2 (Set Comprehension) -> Odd Numbers:", numbers_fix2)\r
`,b=`# ====================================================================\r
# Topic 7: Iterating Through Sets\r
# File: batch_sms_notification.py\r
# Description: Real-World Exam Alert Notification Dispatch in Barrackpore & Kolkata\r
# ====================================================================\r
\r
# Unique verified candidate contact numbers for Barrackpore Exam Center\r
candidate_phones = {\r
    "+91-9830111222",\r
    "+91-9830333444",\r
    "+91-9830555666",\r
    "+91-9830777888",\r
    "+91-9830999000"\r
}\r
\r
exam_venue = "Coder & AccoTax Auditorium, Barrackpore"\r
exam_date = "2026-08-30"\r
\r
print(f"Total Unique SMS Alerts to Dispatch: {len(candidate_phones)}\\n")\r
\r
# Dispatching SMS alerts across all unique phone numbers\r
sms_dispatch_log = []\r
for index, phone in enumerate(candidate_phones, start=1):\r
    message = f"Admit Card Ready: Report to {exam_venue} on {exam_date}."\r
    sms_dispatch_log.append({"recipient": phone, "status": "SENT", "cost_inr": 0.25})\r
    print(f"[{index}/{len(candidate_phones)}] Dispatched SMS to {phone} -> Cost: ₹0.25")\r
\r
total_sms_cost = sum(log["cost_inr"] for log in sms_dispatch_log)\r
print(f"\\nTotal SMS Gateway Dispatch Cost: ₹{total_sms_cost:.2f}")\r
`,g=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
                PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_006: SETS\r
                         TOPIC 7: ITERATING THROUGH SETS\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. TOPIC OVERVIEW & ITERATION MECHANICS\r
--------------------------------------------------------------------------------\r
Sets in Python implement the standard Iterator Protocol:\r
  • Calling \`iter(my_set)\` returns a \`set_iterator\` object.\r
  • Calling \`next(iterator)\` traverses the sparse hash table, skipping empty\r
    slots and yielding occupied bucket elements one by one.\r
  • When all elements are visited, \`StopIteration\` is raised automatically.\r
\r
--------------------------------------------------------------------------------\r
2. ITERATION CHARACTERISTICS\r
--------------------------------------------------------------------------------\r
  • Complete Coverage: Every single unique element is visited exactly once.\r
  • Non-Deterministic Order: The order in which elements appear depends on\r
    internal hash bucket distributions and \`PYTHONHASHSEED\`.\r
  • Ordered Iteration: To iterate in sorted sequence without mutating the set,\r
    wrap the set in \`sorted()\`: \`for x in sorted(my_set):\`.\r
\r
--------------------------------------------------------------------------------\r
3. THE FATAL TRAP: MUTATION DURING ITERATION\r
--------------------------------------------------------------------------------\r
  • Mutating a set (calling \`.add()\`, \`.remove()\`, \`.pop()\`, \`.discard()\`)\r
    while iterating over it raises \`RuntimeError: Set changed size during iteration\`.\r
  • Why? Because mutating the set can trigger table resizing and shift bucket\r
    positions, corrupting the iterator's internal cursor.\r
  • Fix 1: Iterate over a shallow clone: \`for item in my_set.copy():\`\r
  • Fix 2: Reconstruct using a set comprehension: \`my_set = {x for x in my_set if condition}\`\r
\r
--------------------------------------------------------------------------------\r
4. USEFUL ITERATION PATTERNS\r
--------------------------------------------------------------------------------\r
  A. With Enumerate (Generating Loop Counters):\r
     \`for idx, item in enumerate(my_set, start=1):\`\r
\r
  B. With Tuple Unpacking:\r
     \`for name, roll, fee in student_tuples_set:\`\r
\r
  C. With Map and Filter:\r
     \`for transformed in map(str.upper, my_set):\`\r
\r
================================================================================\r
            END OF STUDY NOTE • TOPIC 7: ITERATING THROUGH SETS\r
================================================================================\r
`,y=[{question:"How does a standard for-loop traverse a set in Python?",shortAnswer:"It calls iter(my_set) to get a set_iterator, then calls next() to traverse all occupied hash buckets until StopIteration is raised.",explanation:"The for-loop leverages the Python Iterator Protocol: it inspects the internal hash table array sequentially, skipping empty slots and yielding each populated bucket element exactly once.",hint:"Think about the Iterator Protocol (__iter__ and __next__).",level:"basic",codeExample:`s = {"Kolkata", "Barrackpore", "Ichapur"}
for city in s:
    print(city)`},{question:"What error occurs if you add or remove an element from a set while iterating over it in a for-loop?",shortAnswer:"RuntimeError: Set changed size during iteration.",explanation:"Modifying the set's size during iteration invalidates the iterator's internal bucket pointer and table state, causing Python to raise a RuntimeError to prevent undefined behavior and infinite loops.",hint:"Modifying while iterating raises a RuntimeError.",level:"moderate",codeExample:`s = {1, 2, 3, 4}
try:
    for x in s:
        if x % 2 == 0:
            s.remove(x)
except RuntimeError as e:
    print(e)  # Set changed size during iteration`},{question:"What are the two proper ways to safely remove items from a set based on a condition?",shortAnswer:"1) Iterate over a shallow copy: for x in s.copy(): s.remove(x), or 2) Rebuild using a set comprehension: s = {x for x in s if not condition}.",explanation:"Iterating over s.copy() isolates the active iterator on a separate cloned object, while a set comprehension builds a fresh, filtered set in a single clean Pythonic pass.",hint:"Use s.copy() or a set comprehension.",level:"moderate",codeExample:`# Method 1: Set Comprehension (Recommended)
s = {1, 2, 3, 4, 5}
s = {x for x in s if x % 2 != 0}
print(s)  # {1, 3, 5}`},{question:"What does enumerate(my_set) produce when iterating over a set?",shortAnswer:"It yields (counter, element) pairs where counter starts from 0 (or a specified start value).",explanation:"enumerate() simply increments an integer counter on each iteration step. It does NOT mean the set has fixed index positions, as the assigned numbers can change between program runs.",hint:"The index is a loop counter, not a set index.",level:"basic",codeExample:`cities = {"Barrackpore", "Kolkata"}
for idx, city in enumerate(cities, start=1):
    print(f"{idx}. {city}")`},{question:"How can you iterate through a set in alphabetical or numerical ascending order?",shortAnswer:"Pass the set to sorted(): for item in sorted(my_set):",explanation:"sorted(my_set) returns a new sorted list in O(N log N) time without modifying the original set, allowing clean, predictable sequential iteration.",hint:"Use sorted() to produce a sorted sequence for the loop.",level:"basic",codeExample:`scores = {92, 78, 95, 88}
for score in sorted(scores):
    print(score)`},{question:"Can you iterate through a set of tuples and unpack them directly in the for-loop header?",shortAnswer:"Yes, Python automatically unpacks each tuple element into matching variable names: for a, b in my_set:.",explanation:"If each member of the set is a tuple of fixed length, Python unpacks the elements on every iteration step (e.g. for roll, name, fee in student_set:).",hint:"Use multiple variable names in the for loop header.",level:"basic",codeExample:`records = {(101, "Susmita"), (102, "Debangshu")}
for roll, name in records:
    print(f"Roll: {roll}, Name: {name}")`},{question:"Why is the iteration order of sets non-deterministic across different Python interpreter sessions?",shortAnswer:"Because string hash seeds are randomized at startup (PYTHONHASHSEED), placing string elements in different bucket orders.",explanation:"To prevent algorithmic complexity Denial-of-Service attacks, Python generates a random hash seed on startup. Strings hash to different bucket indices, altering the iteration traversal sequence across processes.",hint:"Recall PYTHONHASHSEED security randomization.",level:"expert",codeExample:`# Session 1: set('cat') -> {'t', 'a', 'c'}
# Session 2: set('cat') -> {'a', 'c', 't'}`},{question:"What happens if you call reversed() on a set: for x in reversed(my_set):?",shortAnswer:"It raises TypeError: 'set' object is not reversible.",explanation:"Reversal requires a sequence with defined backward indices or a __reversed__ dunder method. Because sets are unordered, reversed() is unsupported.",hint:"Sets cannot be reversed directly; use sorted(s, reverse=True).",level:"basic",codeExample:`s = {1, 2, 3}
try:
    for x in reversed(s):
        pass
except TypeError as e:
    print(e)  # 'set' object is not reversible`},{question:"What is the time complexity of iterating through an entire set of N elements?",shortAnswer:"O(N) linear time (proportional to total table capacity).",explanation:"The iterator traverses the allocated hash table slots, skipping empty buckets and yielding active elements. Since the table size is proportional to N, the traversal takes O(N) linear time.",hint:"Every element is visited once -> O(N).",level:"moderate",codeExample:"# Iteration cost: O(N) where N is the number of elements"},{question:"How can you manually advance an iterator over a set using iter() and next()?",shortAnswer:"iterator = iter(my_set); item = next(iterator).",explanation:"iter(my_set) returns the set's iterator object, and calling next(iterator) yields the next available bucket element until StopIteration is raised.",hint:"Use iter() to create the iterator and next() to pull elements.",level:"moderate",codeExample:`s = {"A", "B"}
it = iter(s)
print(next(it))
print(next(it))
# next(it) -> raises StopIteration`},{question:"What happens if you provide a default value to next(): next(iter(my_set), default_val)?",shortAnswer:"If the set is empty, it returns default_val instead of raising StopIteration.",explanation:"The next() function accepts an optional second argument (default). If the iterator is exhausted or the set is empty, it returns this fallback value safely.",hint:"The second argument to next() prevents StopIteration.",level:"moderate",codeExample:`empty_set = set()
first = next(iter(empty_set), "NO_ITEMS")
print(first)  # 'NO_ITEMS'`},{question:"Can you pass a set to the map() function to transform all elements during iteration?",shortAnswer:"Yes, map(func, my_set) applies func to each item in the set, returning a lazy iterator.",explanation:"map() accepts any iterable. for item in map(str.upper, my_set): iterates through uppercase versions of each string in the set.",hint:"map() works with any iterable collection.",level:"basic",codeExample:`cities = {"barrackpore", "kolkata"}
for upper_city in map(str.upper, cities):
    print(upper_city)`},{question:"Can you pass a set to the filter() function during iteration?",shortAnswer:"Yes, filter(predicate, my_set) lazily yields only elements that evaluate to True for the predicate.",explanation:"filter() consumes the set iterator and filters out unwanted items on the fly during loop execution in O(N) time.",hint:"filter() works directly with sets.",level:"basic",codeExample:`nums = {10, 15, 20, 25, 30}
for even in filter(lambda x: x % 2 == 0, nums):
    print(even)`},{question:"What is the result of using zip() with a set and a list: for item, num in zip(my_set, [1, 2, 3]):?",shortAnswer:"It pairs elements one by one, but pairings are non-deterministic because set order is not fixed.",explanation:"zip() consumes both iterables in parallel until the shortest ends. Because set elements emerge in bucket order, the pairing between list items and set items can vary across runs.",hint:"Pairings will be unpredictable due to set unorderedness.",level:"moderate",codeExample:`s = {"A", "B", "C"}
for letter, num in zip(s, [1, 2, 3]):
    print(letter, num)`},{question:"How can you iterate through a set and calculate the sum of all elements without using a for-loop?",shortAnswer:"Use the built-in sum(my_set) function.",explanation:"The sum() function consumes the set iterator internally in optimized C code, computing the cumulative sum of numeric items in O(N) time.",hint:"Use the built-in sum() function.",level:"basic",codeExample:`fees = {4500, 3500, 6500}
print("Total Fees: ₹", sum(fees))  # ₹14500`},{question:"Can you iterate through a frozenset in the exact same manner as a standard set?",shortAnswer:"Yes, frozenset implements the exact same iterator protocol (__iter__ and __next__).",explanation:"frozenset objects are fully iterable with for-loops, enumerate, map, filter, and comprehensions.",hint:"frozenset has full iteration support.",level:"basic",codeExample:`fs = frozenset(["Python", "React", "Django"])
for tech in fs:
    print(tech)`},{question:"What happens if an element inside a set is a custom object and its attributes are mutated during iteration?",shortAnswer:"The loop continues without raising RuntimeError, but the object's hash code may become corrupted in the set.",explanation:"RuntimeError only checks if the set container's size changed. Mutating an inner object's fields doesn't change the set size, but it corrupts the hash table invariants and breaks future lookups.",hint:"Set size didn't change, but hash integrity was destroyed.",level:"expert",codeExample:"# Mutating inner object attributes is dangerous even if loop doesn't crash!"},{question:"How can you execute a side-effect function for every element in a set?",shortAnswer:"Use a clean for-loop: for x in my_set: do_something(x).",explanation:"In Python, explicit for-loops are preferred over comprehensions when executing side-effects (like logging, sending emails, or writing to disk).",hint:"Use standard for loops for side effects.",level:"basic",codeExample:`users = {"susmita@example.com", "debangshu@example.com"}
for email in users:
    print(f"Sending alert to {email}")`},{question:"What is the difference between iterating over my_set vs my_set.copy() in terms of memory overhead?",shortAnswer:"Iterating over my_set uses zero extra memory; my_set.copy() allocates a duplicate set table in memory.",explanation:"Direct iteration consumes the existing hash table in place. s.copy() creates a new set object with duplicate bucket pointers, using additional memory proportional to the set size.",hint:"Direct iteration has O(1) memory overhead; copy() uses O(N) memory.",level:"moderate",codeExample:`# Direct: 0 extra memory
# Copy:   O(N) memory allocated for clone`},{question:"How do you iterate through a set in batches or chunks of size K?",shortAnswer:"Convert to an iterator and use itertools.islice() or a while loop.",explanation:"import itertools; it = iter(my_set); list(itertools.islice(it, K)) extracts chunks of size K until the iterator is exhausted.",hint:"Use itertools.islice with an iterator on the set.",level:"expert",codeExample:`import itertools
s = set(range(10))
it = iter(s)
while chunk := list(itertools.islice(it, 3)):
    print("Batch:", chunk)`},{question:"What is the output of [x*2 for x in {1, 2, 3}]?",shortAnswer:"A list containing [2, 4, 6] (or any order permutation like [4, 2, 6]).",explanation:"The list comprehension iterates over the set, multiplies each item by 2, and collects the results into a new Python list.",hint:"The comprehension produces a list from the set's items.",level:"basic",codeExample:`doubled = [x * 2 for x in {1, 2, 3}]
print(doubled)`},{question:"Can an asynchronous for-loop (async for) be used directly on a standard Python set?",shortAnswer:"No, standard sets only implement synchronous __iter__, not asynchronous __aiter__.",explanation:"Standard Python sets are in-memory synchronous data structures. To iterate asynchronously, you must wrap the set in an async generator function.",hint:"Sets implement synchronous __iter__ only.",level:"expert",codeExample:"# async for requires an async iterable (with __aiter__)"},{question:"How can you check if all elements in a set meet a condition during iteration?",shortAnswer:"Use all(condition(x) for x in my_set) in short-circuiting O(N) time.",explanation:"The all() function iterates through the generator, returning True if every element satisfies the condition, and immediately returning False on the first failure.",hint:"Use the all() built-in function.",level:"basic",codeExample:`scores = {85, 92, 78, 88}
all_passed = all(s >= 40 for s in scores)
print("All passed? ->", all_passed)  # True`},{question:"How can you check if at least one element in a set meets a condition during iteration?",shortAnswer:"Use any(condition(x) for x in my_set) in short-circuiting O(N) time.",explanation:"The any() function returns True as soon as the first matching element is encountered, avoiding unnecessary iteration over remaining items.",hint:"Use the any() built-in function.",level:"basic",codeExample:`roles = {"viewer", "student", "admin"}
has_admin = any(r == "admin" for r in roles)
print("Has admin? ->", has_admin)  # True`},{question:"What happens if you iterate over a set containing custom class instances with custom __repr__?",shortAnswer:"Python calls __repr__ when printing instances during loop execution.",explanation:"The loop fetches each instance, and printing or formatting invokes the class's __repr__ method.",hint:"__repr__ controls how instances are formatted when printed in loops.",level:"basic",codeExample:`class Role:
    def __init__(self, name):
        self.name = name
    def __repr__(self):
        return f"<Role: {self.name}>"

s = {Role("Admin"), Role("Editor")}
for r in s:
    print(r)`},{question:"How does set iteration performance compare to list iteration performance?",shortAnswer:"List iteration is slightly faster (by ~10-20%) because lists iterate over contiguous array pointers without checking empty hash bucket slots.",explanation:"A list iterator simply increments an array pointer. A set iterator must check each bucket to see if it's occupied or empty, resulting in a minor CPU branching overhead.",hint:"Lists have simple pointer increments; sets skip empty bucket slots.",level:"expert",codeExample:"# List iteration is slightly faster than set iteration due to contiguous cache locality"},{question:"How can you find the longest string in a set of words during iteration?",shortAnswer:"Use max(my_set, key=len).",explanation:"The max() function accepts a key function (len), iterating through the set and returning the string with the maximum character length in O(N) time.",hint:"Use max() with key=len.",level:"basic",codeExample:`cities = {"Kolkata", "Barrackpore", "Ichapur"}
longest = max(cities, key=len)
print("Longest name:", longest)  # 'Barrackpore'`},{question:"What is the effect of calling break inside a set iteration loop?",shortAnswer:"The loop terminates immediately, leaving unvisited hash buckets untouched.",explanation:"Standard control flow statements (break, continue, pass) work identically with set iterators as with any other Python loop.",hint:"break immediately exits the loop.",level:"basic",codeExample:`for num in {10, 20, 30, 40}:
    if num == 20:
        break`},{question:"Why should you never write unit tests that compare the string output of a set for-loop?",shortAnswer:"Because non-deterministic iteration order causes tests to pass or fail randomly across machines or test runs.",explanation:"Automated test suites must sort the output list (e.g. sorted(results)) before asserting expected sequential values.",hint:"Sort results before asserting in tests.",level:"moderate",codeExample:`# Test Practice: Always sort before asserting!
# assert sorted(results) == ['A', 'B', 'C']`},{question:"What is the master summary rule for iterating over sets in Python?",shortAnswer:"Iterate directly when order does not matter; use sorted(s) when sequence is required; and never mutate the set inside the loop!",explanation:"Following these three foundational rules ensures maximum execution performance, predictable outputs, and 100% bug-free iteration across all Python applications.",hint:"Direct loop for unordered, sorted() for sequence, copy() or comprehension for mutations.",level:"basic",codeExample:`# Master Rule:
# 1. Unordered: for x in s:
# 2. Sorted:    for x in sorted(s):
# 3. Mutating:  s = {x for x in s if cond}`}];function E(){const i=a.useRef([]),[o,l]=a.useState("traversal");a.useEffect(()=>{const r=new IntersectionObserver(n=>{n.forEach(d=>{d.isIntersecting&&d.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return i.current.forEach(n=>{n&&r.observe(n)}),()=>r.disconnect()},[]);const t=r=>{r&&!i.current.includes(r)&&i.current.push(r)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-emerald-500/30 selection:text-emerald-200",children:[e.jsx("style",{children:`
        .section-hidden {
          transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .section-visible {
          transform: translateY(0);
        }
      `}),e.jsxs("header",{ref:t,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-emerald-950/80 text-emerald-300 px-3 py-1 rounded-full border border-emerald-800/80 shadow-sm shadow-emerald-950/50",children:"Segment 2 • Module 002_006"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-sky-950/80 text-sky-300 px-3 py-1 rounded-full border border-sky-800/80 shadow-sm shadow-sky-950/50",children:"Topic 7"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Iterator Protocol & Traversal"})]}),e.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:"Iterating Through Sets"}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Mastering set traversal mechanics: the ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"__iter__"})," protocol, ",e.jsx("code",{className:"text-sky-400 font-mono",children:"enumerate()"})," loop counters, tuple unpacking, and avoiding ",e.jsx("code",{className:"text-rose-400 font-mono",children:"RuntimeError"})," mutation traps."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔄 Iterator Protocol (__iter__ / __next__)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚠️ RuntimeError Mutation Trap"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📦 Tuple Unpacking in Sets"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔡 Non-Mutating sorted() Traversal"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🔁"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Set Iterator Protocol"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["Sets are full-featured Python iterables. Under the hood, a standard for-loop ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"for item in my_set:"})," invokes the ",e.jsx("strong",{className:"text-white",children:"Python Iterator Protocol"}),":"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5 my-6 not-prose",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/70 border border-emerald-800/60 shadow-lg shadow-emerald-950/30 transition-all duration-300 hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"⚙️"})," The set_iterator Protocol"]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-2",children:["Calling ",e.jsx("code",{className:"font-mono text-emerald-300",children:"iter(my_set)"})," yields a ",e.jsx("code",{className:"font-mono text-emerald-300",children:"set_iterator"}),". Calling ",e.jsx("code",{className:"font-mono text-emerald-300",children:"next()"})," traverses internal hash buckets, skipping empty slots and returning each populated item."]}),e.jsxs("div",{className:"text-xs font-mono text-slate-400",children:["Raises ",e.jsx("strong",{className:"text-emerald-300",children:"StopIteration"})," cleanly when all buckets are exhausted."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/70 border border-sky-800/60 shadow-lg shadow-sky-950/30 transition-all duration-300 hover:border-sky-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sky-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"🎲"})," Non-Deterministic Traversal Order"]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-2",children:["Items emerge in the order their hash codes placed them into memory buckets. Due to ",e.jsx("code",{className:"font-mono text-sky-300",children:"PYTHONHASHSEED"}),", string iteration sequence can change between interpreter runs."]}),e.jsxs("div",{className:"text-xs font-mono text-slate-400",children:["Use ",e.jsx("code",{className:"text-sky-300",children:"sorted(my_set)"})," whenever you require predictable sequential order."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-rose-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-2",children:"⚠️ The Fatal Trap: Modifying Set Size During Iteration"}),e.jsxs("p",{className:"text-sm sm:text-base text-slate-300",children:["Never call ",e.jsx("code",{className:"text-rose-400 font-mono",children:".add()"}),", ",e.jsx("code",{className:"text-rose-400 font-mono",children:".remove()"}),", or ",e.jsx("code",{className:"text-rose-400 font-mono",children:".pop()"})," inside an active for-loop over that same set! Doing so raises ",e.jsx("code",{className:"text-rose-300 font-mono font-bold bg-rose-950/50 px-1.5 py-0.5 rounded",children:"RuntimeError: Set changed size during iteration"}),". Always iterate over ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"my_set.copy()"})," or rebuild via a set comprehension."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"🔍"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Iterator Bucket Traversal"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>l("traversal"),className:c("px-3 py-1.5 rounded-lg transition-all",o==="traversal"?"bg-emerald-900/50 text-emerald-300 border border-emerald-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Iterator Protocol Step Flow"}),e.jsx("button",{onClick:()=>l("mutationtrap"),className:c("px-3 py-1.5 rounded-lg transition-all",o==="mutationtrap"?"bg-rose-900/50 text-rose-300 border border-rose-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"RuntimeError Mutation Trap"})]})]}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:o==="traversal"?e.jsxs("svg",{viewBox:"0 0 850 340",className:"w-full h-auto min-w-[650px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#34d399",fontSize:"13",fontWeight:"bold",children:"ITERATOR PROTOCOL: SKIPPING EMPTY BUCKETS & YIELDING OCCUPIED ENTRIES"}),e.jsx("rect",{x:"30",y:"50",width:"790",height:"70",rx:"8",fill:"#1e293b",stroke:"#334155"}),e.jsx("rect",{x:"40",y:"58",width:"90",height:"54",rx:"4",fill:"#0f172a",stroke:"#334155"}),e.jsx("text",{x:"50",y:"80",fill:"#64748b",fontSize:"11",fontWeight:"bold",children:"[0] Empty"}),e.jsx("text",{x:"50",y:"98",fill:"#475569",fontSize:"9",children:"SKIPPED"}),e.jsx("rect",{x:"140",y:"58",width:"130",height:"54",rx:"4",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"150",y:"80",fill:"#34d399",fontSize:"11",fontWeight:"bold",children:'[1] "Barrackpore"'}),e.jsx("text",{x:"150",y:"98",fill:"#a7f3d0",fontSize:"9",children:"✓ YIELD STEP 1"}),e.jsx("rect",{x:"280",y:"58",width:"90",height:"54",rx:"4",fill:"#0f172a",stroke:"#334155"}),e.jsx("text",{x:"290",y:"80",fill:"#64748b",fontSize:"11",fontWeight:"bold",children:"[2] Empty"}),e.jsx("text",{x:"290",y:"98",fill:"#475569",fontSize:"9",children:"SKIPPED"}),e.jsx("rect",{x:"380",y:"58",width:"130",height:"54",rx:"4",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"390",y:"80",fill:"#34d399",fontSize:"11",fontWeight:"bold",children:'[3] "Kolkata"'}),e.jsx("text",{x:"390",y:"98",fill:"#a7f3d0",fontSize:"9",children:"✓ YIELD STEP 2"}),e.jsx("rect",{x:"520",y:"58",width:"90",height:"54",rx:"4",fill:"#0f172a",stroke:"#334155"}),e.jsx("text",{x:"530",y:"80",fill:"#64748b",fontSize:"11",fontWeight:"bold",children:"[4] Empty"}),e.jsx("text",{x:"530",y:"98",fill:"#475569",fontSize:"9",children:"SKIPPED"}),e.jsx("rect",{x:"620",y:"58",width:"130",height:"54",rx:"4",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"630",y:"80",fill:"#34d399",fontSize:"11",fontWeight:"bold",children:'[5] "Ichapur"'}),e.jsx("text",{x:"630",y:"98",fill:"#a7f3d0",fontSize:"9",children:"✓ YIELD STEP 3"}),e.jsx("rect",{x:"30",y:"145",width:"790",height:"170",rx:"8",fill:"#090d16",stroke:"#0ea5e9",strokeWidth:"1.5"}),e.jsx("text",{x:"50",y:"175",fill:"#38bdf8",fontSize:"13",fontWeight:"bold",children:"Step-by-Step Iterator Execution:"}),e.jsx("text",{x:"50",y:"205",fill:"#cbd5e1",fontSize:"12",children:"1. iter(my_set) initializes internal bucket offset pointer at 0."}),e.jsx("text",{x:"50",y:"230",fill:"#cbd5e1",fontSize:"12",children:'2. next() skips bucket 0 (empty) → finds "Barrackpore" at bucket 1 → yields item.'}),e.jsx("text",{x:"50",y:"255",fill:"#cbd5e1",fontSize:"12",children:"3. Subsequent next() calls skip empty slots until all items are yielded."}),e.jsx("text",{x:"50",y:"280",fill:"#34d399",fontSize:"12",fontWeight:"bold",children:"4. End of table reached → Raises StopIteration cleanly to terminate loop!"})]}):e.jsxs("svg",{viewBox:"0 0 850 320",className:"w-full h-auto min-w-[650px] font-sans",children:[e.jsx("text",{x:"30",y:"35",fill:"#f8fafc",fontSize:"15",fontWeight:"bold",children:"Why Modifying Sets During Iteration Triggers RuntimeError"}),e.jsx("rect",{x:"30",y:"65",width:"380",height:"220",rx:"10",fill:"#1e293b",stroke:"#ef4444",strokeWidth:"2"}),e.jsx("text",{x:"50",y:"95",fill:"#fca5a5",fontSize:"14",fontWeight:"bold",children:"THE DANGEROUS CODE"}),e.jsx("rect",{x:"50",y:"115",width:"340",height:"45",rx:"6",fill:"#450a0a",stroke:"#ef4444"}),e.jsx("text",{x:"60",y:"142",fill:"#fecaca",fontSize:"11",fontWeight:"mono",children:"for num in numbers: numbers.remove(num)"}),e.jsx("text",{x:"50",y:"185",fill:"#cbd5e1",fontSize:"12",children:"• Deletion mutates internal set structure."}),e.jsx("text",{x:"50",y:"210",fill:"#cbd5e1",fontSize:"12",children:"• Table may resize or shift active bucket offsets."}),e.jsx("text",{x:"50",y:"235",fill:"#fca5a5",fontSize:"12",fontWeight:"bold",children:"💥 Crashes: RuntimeError: Set changed size during iteration!"}),e.jsx("rect",{x:"440",y:"65",width:"380",height:"220",rx:"10",fill:"#1e293b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"460",y:"95",fill:"#34d399",fontSize:"14",fontWeight:"bold",children:"THE SAFE SOLUTIONS"}),e.jsx("rect",{x:"460",y:"115",width:"340",height:"45",rx:"6",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"470",y:"142",fill:"#a7f3d0",fontSize:"11",fontWeight:"mono",children:"for num in numbers.copy(): numbers.remove(num)"}),e.jsx("text",{x:"460",y:"185",fill:"#cbd5e1",fontSize:"12",children:"• Fix 1: Loop iterates over independent clone."}),e.jsxs("text",{x:"460",y:"210",fill:"#cbd5e1",fontSize:"12",children:["• Fix 2: Use set comprehension ",e.jsx("code",{className:"font-mono text-emerald-300",children:"{x for x in s if cond}"}),"."]}),e.jsx("text",{x:"460",y:"235",fill:"#34d399",fontSize:"12",fontWeight:"bold",children:"✓ 100% Bug-Free, Clean & Safe Execution!"})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 space-y-8",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Python Code Labs"})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab A: For-Loop Traversal & Manual Iterator Protocol"}),e.jsx(s,{fileModule:u,title:"basic_for_loop_iteration.py",highlightLines:[6,12,16,22]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab B: Enumerate Counters & Multi-Attribute Tuple Unpacking"}),e.jsx(s,{fileModule:p,title:"enumerate_and_unpacking.py",highlightLines:[6,11,20]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab C: RuntimeError Trapping & Safe Copy / Comprehension Fixes"}),e.jsx(s,{fileModule:f,title:"mutation_during_iteration_error.py",highlightLines:[6,11,17,23]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab D: Real-World Exam Alert SMS Dispatch & Gateway Cost in ₹"}),e.jsx(s,{fileModule:b,title:"batch_sms_notification.py",highlightLines:[6,18,24]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Industry Applications in West Bengal"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"📱"})," 1. Broadcast SMS Notifications"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Exam controllers in ",e.jsx("strong",{children:"Barrackpore"})," iterate through sets of verified candidate phone numbers to dispatch admit card alerts without sending duplicate messages, tracking telecom billing in Indian Rupees (",e.jsx("strong",{className:"text-emerald-300",children:"₹0.25/SMS"}),")."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🎓"})," 2. Multi-Attribute Student Tuple Processing"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Academic ERP systems loop over structured tuple sets ",e.jsx("code",{className:"font-mono text-sky-400",children:"for name, course, fee in student_records:"})," to generate consolidated invoice receipts across ",e.jsx("strong",{children:"Kolkata"})," and ",e.jsx("strong",{children:"Jadavpur"}),"."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🧹"})," 3. Safe In-Memory Cache Invalidation"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Backend services clean up expired auth tokens by iterating over a clone ",e.jsx("code",{className:"font-mono text-purple-400",children:"for token in active_tokens.copy():"})," to evict stale user sessions without triggering ",e.jsx("code",{className:"font-mono text-rose-300",children:"RuntimeError"})," crashes."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"📑"})," 4. Deterministic Report Generation"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Auditors wrap category sets in ",e.jsx("code",{className:"font-mono text-amber-400",children:"sorted(category_set)"})," before writing to financial PDF ledgers, guaranteeing identical chronological row ordering across monthly accounting statements."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Pitfalls & Tricky Traps with Set Iteration"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 1: Mutating Set Inside Loop"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Calling ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"s.remove(x)"})," or ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"s.add(x)"})," inside ",e.jsx("code",{className:"font-mono",children:"for x in s:"})," crashes with ",e.jsx("code",{className:"text-rose-400 font-bold",children:"RuntimeError: Set changed size during iteration"}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 2: Expecting Fixed Order"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Never write unit tests that check ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"list(my_set)"})," directly without sorting. String hash randomization causes test orders to scramble across environments!"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 3: Calling reversed() on Sets"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:[e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"reversed(my_set)"})," fails with ",e.jsx("code",{className:"text-rose-400 font-bold",children:"TypeError: 'set' object is not reversible"}),". Use ",e.jsx("code",{className:"font-mono text-emerald-400",children:"sorted(s, reverse=True)"})," instead."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 4: Misinterpreting enumerate Index"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["The index in ",e.jsx("code",{className:"font-mono",children:"enumerate(my_set)"})," is just a temporary loop counter (1, 2, 3...), NOT a permanent index of the element in the set!"]})]})]})]}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(m,{content:g,title:"Topic 7: Iterating Through Sets Study Guide",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Study Note",downloadFileName:"topic7_iterating_through_sets_note.txt"})}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(h,{title:"Topic 7 • Iterating Through Sets: Master Viva & Review Questions",questions:y})}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(x,{note:"Teacher's Master Traversal Rule: Set iteration is your best friend when order is irrelevant and you want to visit every unique item once. But remember the ultimate commandment: NEVER mutate a set while looping over it! If Susmita, Mamata, and Debangshu in Barrackpore need to prune elements, iterate over my_set.copy() or use a clean set comprehension!"})})]})]})}export{E as default};
