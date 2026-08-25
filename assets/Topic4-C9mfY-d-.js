import{b as l,j as e,bg as c}from"./vendor-react-core-Doz9nIC6.js";import{P as n}from"./PythonFileLoader-hCi5osN-.js";import{P as h}from"./PlainTextPrint-C08xhKA4.js";import{F as m}from"./FAQTemplate-CkSqDH4B.js";import{T as p}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const u=`# ====================================================================\r
# Topic 4: Adding Elements (add vs update)\r
# File: add_single_element.py\r
# Description: Demonstrating set.add() for single-item in-place mutation\r
# ====================================================================\r
\r
# 1. Starting with an empty set or existing set\r
student_skills = {"Python", "Git"}\r
print("Initial Skills Set:", student_skills)\r
\r
# 2. Adding a single string element using .add()\r
student_skills.add("TailwindCSS")\r
print("\\nAfter student_skills.add('TailwindCSS'):", student_skills)\r
\r
# 3. Adding another single element\r
student_skills.add("FastAPI")\r
print("After student_skills.add('FastAPI'):", student_skills)\r
\r
# 4. Adding a duplicate element (ignored silently without error)\r
student_skills.add("Python")\r
print("After student_skills.add('Python') (Duplicate):", student_skills)\r
print("Length remains unchanged:", len(student_skills))\r
\r
# 5. Adding a composite immutable element (Tuple)\r
student_skills.add(("SQL", "PostgreSQL"))\r
print("\\nAfter adding tuple ('SQL', 'PostgreSQL'):", student_skills)\r
\r
# 6. Returns None (In-place mutation)\r
result = student_skills.add("Docker")\r
print("Return value of set.add():", result)  # Output: None\r
`,x=`# ====================================================================\r
# Topic 4: Adding Elements (add vs update)\r
# File: update_multiple_iterables.py\r
# Description: Demonstrating set.update() for bulk multiple-iterable ingestion\r
# ====================================================================\r
\r
# Base set of active coaching centers in West Bengal\r
active_centers = {"Barrackpore", "Kolkata"}\r
print("Initial Active Centers:", active_centers)\r
\r
# 1. Bulk addition from a List\r
new_districts = ["Ichapur", "Jadavpur", "Barrackpore"]\r
active_centers.update(new_districts)\r
print("\\nAfter updating with list:", active_centers)\r
\r
# 2. Bulk addition from a Tuple and a Range simultaneously!\r
# update() can accept multiple iterable arguments at once\r
active_centers.update(("Shyamnagar", "Kalyani"), [700120, 700032])\r
print("\\nAfter multi-argument update():", active_centers)\r
\r
# 3. Bulk addition from a String (unpacks into individual characters)\r
code_chars = set()\r
code_chars.update("PYTHON")\r
print("\\nCharacters set from 'PYTHON':", code_chars)\r
\r
# 4. Bulk addition from Dictionary keys\r
course_map = {"Accounting": 3500, "Taxation": 4500}\r
active_centers.update(course_map)  # Extracts keys\r
print("\\nAfter updating with dictionary keys:", active_centers)\r
`,b=`# ====================================================================\r
# Topic 4: Adding Elements (add vs update)\r
# File: add_vs_update_pitfalls.py\r
# Description: Demonstrating the classic string and list pitfalls in add() vs update()\r
# ====================================================================\r
\r
# 1. PITFALL 1: Passing a string to update() vs add()\r
set_a = set()\r
set_b = set()\r
\r
# What you wanted: Add the complete word "Kolkata"\r
set_a.add("Kolkata")\r
print("set_a.add('Kolkata') ->", set_a)  # {'Kolkata'} (1 element)\r
\r
# What happens if you accidentally call update('Kolkata'):\r
set_b.update("Kolkata")\r
print("set_b.update('Kolkata') ->", set_b)  # {'K', 'o', 'l', 'k', 'a', 't'} (6 characters!)\r
\r
# 2. PITFALL 2: Passing a list to add()\r
sample_set = {"Admin"}\r
try:\r
    sample_set.add(["Manager", "Staff"])  # TypeError!\r
except TypeError as error:\r
    print("\\n[TypeError with add([list])]:", error)\r
    print("Fix: Use sample_set.update(['Manager', 'Staff']) to unpack list items!")\r
\r
# 3. PITFALL 3: Reassigning to the return value of add/update\r
# add() and update() mutate in place and return None\r
bad_set = {"Python"}\r
bad_set = bad_set.add("React")  # DANGER: bad_set becomes None!\r
print("\\nAccidental None reassignment:", bad_set)\r
`,g=`# ====================================================================\r
# Topic 4: Adding Elements (add vs update)\r
# File: inventory_batch_addition.py\r
# Description: Real-World Stock Registry & Course Batch Integration in Barrackpore\r
# ====================================================================\r
\r
# Existing set of enrolled student roll numbers\r
enrolled_students = {"ROLL-101", "ROLL-102", "ROLL-103"}\r
print("Initial Batch Count:", len(enrolled_students))\r
\r
# Incoming registration stream from Barrackpore, Ichapur, and Kolkata online portals\r
barrackpore_new = ["ROLL-104", "ROLL-105", "ROLL-101"]  # Note duplicate 101\r
ichapur_new = ("ROLL-106", "ROLL-107")\r
kolkata_online = {"ROLL-108", "ROLL-105"}               # Note duplicate 105\r
\r
# Single-call bulk update from all three sources\r
enrolled_students.update(barrackpore_new, ichapur_new, kolkata_online)\r
\r
print(f"\\nFinal Consolidated Enrolled Student Set: {enrolled_students}")\r
print(f"Total Unique Students Enrolled: {len(enrolled_students)}")\r
\r
# Financial Tuition Fee Calculation in Indian Rupees (₹)\r
tuition_per_student = 4500\r
total_batch_revenue = len(enrolled_students) * tuition_per_student\r
print(f"Total Batch Revenue Collected: ₹{total_batch_revenue}")\r
`,f=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
                PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_006: SETS\r
                     TOPIC 4: ADDING ELEMENTS: ADD() & UPDATE()\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. TOPIC OVERVIEW & MUTATION METHODS\r
--------------------------------------------------------------------------------\r
Python sets are mutable containers: you can add new elements after creation.\r
Python provides two specialized methods for adding elements:\r
  1. \`set.add(element)\`: Inserts a single hashable element.\r
  2. \`set.update(*iterables)\`: Inserts multiple elements from one or more iterables.\r
\r
Both methods mutate the calling set in place and return \`None\`.\r
\r
--------------------------------------------------------------------------------\r
2. METHOD 1: set.add(element)\r
--------------------------------------------------------------------------------\r
  • Syntax: \`my_set.add(item)\`\r
  • Time Complexity: O(1) average time.\r
  • Behavior: Takes a SINGLE hashable item. Computes \`hash(item)\` and inserts it.\r
  • Duplicates: If the item already exists, it is silently ignored.\r
  • Crucial Rule: The argument MUST be immutable/hashable.\r
    - \`my_set.add("Python")\`    -> Valid!\r
    - \`my_set.add((1, 2))\`      -> Valid!\r
    - \`my_set.add([1, 2])\`      -> TypeError: unhashable type: 'list'\r
\r
--------------------------------------------------------------------------------\r
3. METHOD 2: set.update(*iterables) (OR |= OPERATOR)\r
--------------------------------------------------------------------------------\r
  • Syntax: \`my_set.update(iter1, iter2, ...)\` or \`my_set |= set2\`\r
  • Time Complexity: O(K) where K is the total elements across all iterables.\r
  • Behavior: Unpacks each iterable argument and inserts every individual item.\r
  • Versatility: Can accept lists, tuples, strings, ranges, dictionaries, sets,\r
    and generator expressions simultaneously!\r
  • Dictionary behavior: Extracts keys by default (unless \`.values()\` is passed).\r
\r
--------------------------------------------------------------------------------\r
4. THE 3 CLASSIC TRAPS TO AVOID\r
--------------------------------------------------------------------------------\r
  [x] Trap 1: \`s.update("Kolkata")\` splits the string into 7 characters:\r
      {'K', 'o', 'l', 'k', 'a', 't'}. Use \`s.add("Kolkata")\` for words!\r
  [x] Trap 2: \`s = s.add("React")\` reassigns \`s\` to \`None\` because \`.add()\`\r
      mutates in place and returns \`None\`.\r
  [x] Trap 3: \`s.add([1, 2, 3])\` crashes with TypeError. Use \`s.update([1, 2, 3])\`!\r
\r
--------------------------------------------------------------------------------\r
5. SUMMARY COMPARISON CHEAT SHEET\r
--------------------------------------------------------------------------------\r
  Feature               | set.add()                     | set.update()\r
  ----------------------+-------------------------------+------------------------\r
  Argument Type         | Single hashable element       | One or more iterables\r
  String Handling       | Adds word as single string    | Unpacks into characters\r
  Accepts Lists/Tuples  | Treats as 1 element (fails    | Unpacks elements and\r
                        | on mutable list)              | adds each item\r
  Multiple Arguments    | Exactly 1 argument            | Arbitrary (*iterables)\r
  Return Value          | None (in-place mutation)      | None (in-place mutation)\r
\r
================================================================================\r
           END OF STUDY NOTE • TOPIC 4: ADDING ELEMENTS TO SETS\r
================================================================================\r
`,y=[{question:"What is the primary difference between set.add() and set.update() in Python?",shortAnswer:"add() takes a single hashable element; update() takes one or more iterables and unpacks their elements into the set.",explanation:"s.add(item) calculates hash(item) and inserts it as one distinct member. s.update(iterable) loops over the iterable, unpacking each child item and inserting it individually. Both modify the set in place.",hint:"One adds a single item; the other unpacks an iterable collection.",level:"basic",codeExample:`s = {10, 20}
s.add(30)          # {10, 20, 30}
s.update([40, 50]) # {10, 20, 30, 40, 50}`},{question:"What is the return value of set.add() and set.update()?",shortAnswer:"Both return None because they modify the set in place.",explanation:"In accordance with Python's API design philosophy, mutating methods (like list.append, dict.update, set.add) return None to clearly signal that the container was mutated in place. Reassigning s = s.add(x) destroys the set by assigning None to s.",hint:"In-place mutation methods always return None in Python.",level:"basic",codeExample:`s = {"A"}
res = s.add("B")
print(res)  # None
print(s)    # {'A', 'B'}`},{question:"What happens when you pass a string to set.update() vs set.add()?",shortAnswer:"add('Kolkata') adds the complete string 'Kolkata'; update('Kolkata') unpacks it into individual characters: 'K', 'o', 'l', 'k', 'a', 't'.",explanation:"Strings are iterable sequences of characters. Because update() iterates over its arguments, passing a string unpacks each letter into a separate set element. To add a whole word, you must use add('Kolkata') or pass a 1-element list update(['Kolkata']).",hint:"update iterates through strings; add stores strings whole.",level:"moderate",codeExample:`s1, s2 = set(), set()
s1.add("Kolkata")
s2.update("Kolkata")
print(s1)  # {'Kolkata'}
print(s2)  # {'K', 'o', 'l', 'k', 'a', 't'}`},{question:"Why does s.add([1, 2, 3]) raise a TypeError, but s.update([1, 2, 3]) works perfectly?",shortAnswer:"add() attempts to insert the mutable list itself as an unhashable set member; update() unpacks the hashable integers inside the list.",explanation:"add() treats [1, 2, 3] as a single entity and attempts hash([1, 2, 3]), which fails with TypeError: unhashable type: 'list'. update() iterates over the list, extracting integers 1, 2, 3 (which are hashable) and inserting them individually.",hint:"add tries to hash the container; update extracts the items inside.",level:"moderate",codeExample:`s = set()
# s.add([1, 2])     # TypeError: unhashable type: 'list'
s.update([1, 2])    # Valid! s becomes {1, 2}`},{question:"Can set.update() accept multiple iterables in a single method call?",shortAnswer:"Yes, set.update(*iterables) accepts an arbitrary number of iterable arguments separated by commas.",explanation:"set.update() has a variadic signature. You can pass lists, tuples, ranges, dictionaries, and sets simultaneously in a single call (e.g. s.update([1, 2], (3, 4), range(5, 7))).",hint:"Pass multiple collections separated by commas to update().",level:"basic",codeExample:`s = set()
s.update([1, 2], ("A", "B"), range(10, 12))
print(s)  # {1, 2, 'A', 'B', 10, 11}`},{question:"What happens if you add an existing duplicate element using set.add()?",shortAnswer:"The operation executes silently with zero error, leaving the set unchanged in size.",explanation:"Python computes the hash, discovers the existing match in the target bucket, and completes in O(1) time without raising exceptions or creating redundant entries.",hint:"Duplicate addition is a safe, silent no-op.",level:"basic",codeExample:`s = {"Barrackpore"}
s.add("Barrackpore")
print(len(s))  # 1`},{question:"What is the time complexity of set.add(item) vs set.update(iterable)?",shortAnswer:"add() is O(1) average time; update(iterable) is O(K) where K is the number of elements in the iterable.",explanation:"add() computes one hash and performs one bucket write in O(1) time. update() loops through K elements, performing K separate O(1) hash insertions, resulting in O(K) total time complexity.",hint:"1 item = O(1); K items = O(K).",level:"moderate",codeExample:`# s.add(x)       -> O(1)
# s.update(list) -> O(len(list))`},{question:"What elements are added when a dictionary is passed to set.update(my_dict)?",shortAnswer:"Only the dictionary's keys are added to the set.",explanation:"Iterating over a dictionary yields its keys. Therefore, set.update(my_dict) adds the dictionary's keys. To add values, pass set.update(my_dict.values()).",hint:"Dictionaries iterate over keys by default.",level:"moderate",codeExample:`fees = {"Python": 4500, "React": 3500}
s = set()
s.update(fees)
print(s)  # {'Python', 'React'}`},{question:"What is the operator equivalent of set.update() in Python?",shortAnswer:"The |= (in-place union / augmented assignment) operator.",explanation:"Writing s |= other_set mutates s in place by adding all elements from other_set, acting identically to s.update(other_set). (Note that |= requires a set operand, whereas update() accepts any iterable).",hint:"Think about the pipe symbol | with assignment =.",level:"moderate",codeExample:`s1 = {1, 2}
s2 = {3, 4}
s1 |= s2
print(s1)  # {1, 2, 3, 4}`},{question:"Why does s |= [1, 2, 3] fail with TypeError while s.update([1, 2, 3]) succeeds?",shortAnswer:"The |= operator requires both operands to be sets; the update() method accepts any iterable.",explanation:"Python enforces type safety on bitwise/set operators: s |= [1, 2] raises TypeError: unsupported operand type(s) for |=: 'set' and 'list'. The named method s.update() is polymorphic and accepts any iterable.",hint:"Operators strictly require sets; methods accept any iterable.",level:"expert",codeExample:`s = {10}
# s |= [20, 30]       # TypeError: unsupported operand type for |=
s.update([20, 30])    # Valid!`},{question:"Can you add an immutable tuple to a set using set.add()? What if the tuple contains a list?",shortAnswer:"A tuple of immutable items can be added with add(); a tuple containing a list raises TypeError: unhashable type: 'list'.",explanation:"A tuple is hashable only if all of its inner elements are also immutable. add((1, 2)) succeeds, but add((1, [2, 3])) fails during hash evaluation.",hint:"Hashability is evaluated recursively through nested containers.",level:"moderate",codeExample:`s = set()
s.add((1, 2))        # Valid!
# s.add((1, [2, 3]))  # TypeError: unhashable type: 'list'`},{question:"What happens if you pass a generator expression to set.update()?",shortAnswer:"The generator is lazily consumed in a single pass, inserting all yielded elements into the set.",explanation:"set.update(x**2 for x in range(5)) consumes the generator stream without allocating an intermediate list in memory, adding 0, 1, 4, 9, 16 in memory-efficient O(K) time.",hint:"Generators are valid iterables and can be consumed by update().",level:"moderate",codeExample:`s = {100}
s.update(x**2 for x in range(4))
print(s)  # {0, 1, 4, 9, 100}`},{question:"What is the common mistake in: new_set = s.add('Python')?",shortAnswer:"new_set is assigned None because .add() mutates s in place and returns None.",explanation:"This is one of the most common beginner traps. Because add() returns None, assigning its result to a variable results in losing the reference to the set.",hint:"add() returns None; call it as a standalone statement.",level:"basic",codeExample:`s = set()
s.add("Python")  # Correct: standalone statement
# s = s.add("React") # DANGER: s becomes None!`},{question:"How can you add multiple elements from another set into an existing set?",shortAnswer:"Use s1.update(s2) or s1 |= s2.",explanation:"Both s1.update(s2) and s1 |= s2 perform an in-place union, copying all non-duplicate elements from s2 into s1.",hint:"Use update() or the |= operator.",level:"basic",codeExample:`s1 = {"Kolkata", "Barrackpore"}
s2 = {"Ichapur", "Jadavpur"}
s1.update(s2)
print(s1)`},{question:"What happens if you pass an empty list or empty set to set.update()?",shortAnswer:"The set remains unchanged; the operation completes as a silent no-op.",explanation:"Because an empty iterable yields zero elements, update() completes immediately without altering the set.",hint:"Empty iterables contribute zero items.",level:"basic",codeExample:`s = {1, 2, 3}
s.update([])
print(s)  # {1, 2, 3}`},{question:"Can you add a custom class instance to a set using set.add()?",shortAnswer:"Yes, provided the custom class is hashable (has __hash__ and __eq__).",explanation:"User-defined class instances inherit object.__hash__ and object.__eq__ by default, so s.add(my_obj) works out of the box using object memory address hashing.",hint:"Custom objects have default address-based hashing.",level:"moderate",codeExample:`class Student:
    def __init__(self, name):
        self.name = name
s = set()
s.add(Student("Susmita"))
print(len(s))  # 1`},{question:"What is the difference between s.add('item') and s.update(['item'])?",shortAnswer:"Both result in the same set state {..., 'item'}, but add() is slightly faster with lower overhead.",explanation:"s.add('item') directly pushes the string into the hash table. s.update(['item']) creates a 1-element list in memory, creates an iterator, extracts the item, and then inserts it.",hint:"add() avoids creating an intermediate list container.",level:"moderate",codeExample:`s1, s2 = set(), set()
s1.add("item")
s2.update(["item"])
print(s1 == s2)  # True`},{question:"How does set.update() behave when passed a range object: s.update(range(100, 105))?",shortAnswer:"It unpacks and inserts the integers 100, 101, 102, 103, 104 into the set.",explanation:"range() is an iterable generating numbers sequentially. update() iterates through the range and inserts each integer into the set's hash table.",hint:"range() generates numbers that update() unpacks.",level:"basic",codeExample:`s = set()
s.update(range(100, 105))
print(sorted(s))  # [100, 101, 102, 103, 104]`},{question:"What happens if you pass None to set.add() vs set.update()?",shortAnswer:"add(None) successfully inserts None as a set element; update(None) raises TypeError: 'NoneType' object is not iterable.",explanation:"None is an immutable object with a valid hash (hash(None)), so add(None) succeeds. update() requires an iterable, and since None cannot be iterated over, update(None) raises a TypeError.",hint:"None is a valid hashable element, but it is not an iterable.",level:"expert",codeExample:`s = set()
s.add(None)        # Valid! s becomes {None}
# s.update(None)   # TypeError: 'NoneType' object is not iterable`},{question:"How does the internal hash table resize when adding many elements via set.add() or set.update()?",shortAnswer:"When the load factor exceeds 2/3 (table is >66% full), Python doubles or quadruples the table size and rehashes all elements.",explanation:"To keep lookups at O(1) and prevent bucket crowding, CPython automatically allocates a larger hash array (e.g. 8 -> 32 -> 128 -> 512 slots) and re-indexes all active elements into the new array.",hint:"Resizing occurs at 2/3 load factor to preserve O(1) speed.",level:"expert",codeExample:"# Internal CPython table growth: 8 -> 32 -> 128 -> 512 slots"},{question:"Why is s.update(*list_of_sets) an efficient way to merge many sets at once?",shortAnswer:"It unpacks all sets into a single C-level update call, avoiding repetitive intermediate set object allocations.",explanation:"Calling s.update(*list_of_sets) directly feeds all sets to CPython's internal set_update C function, avoiding multiple Python-level function call frames and intermediate union allocations.",hint:"Unpacking with * merges all sets in a single C-level operation.",level:"expert",codeExample:`batches = [{1, 2}, {3, 4}, {5, 6}]
master_set = set()
master_set.update(*batches)
print(master_set)  # {1, 2, 3, 4, 5, 6}`},{question:"What is the output of: s = {10}; s.update({10, 20}); print(len(s))?",shortAnswer:"2, containing {10, 20}.",explanation:"10 already exists in s, so updating with {10, 20} ignores the duplicate 10 and adds the new element 20, bringing the total length to 2.",hint:"Duplicates are skipped during update.",level:"basic",codeExample:`s = {10}
s.update({10, 20})
print(len(s))  # 2`},{question:"Can set.add() be called with zero arguments (s.add()) or two arguments (s.add(1, 2))?",shortAnswer:"No, set.add() strictly requires exactly 1 argument (takes TypeError if 0 or >1 arguments are passed).",explanation:"set.add takes exactly one parameter: set.add(element). Calling s.add() or s.add(1, 2) raises TypeError: set.add() takes exactly one argument.",hint:"add() accepts exactly one single element.",level:"basic",codeExample:`s = set()
# s.add()      # TypeError: set.add() takes exactly one argument (0 given)
# s.add(1, 2)  # TypeError: set.add() takes exactly one argument (2 given)`},{question:"How can you add all unique words from a sentence string into an existing set?",shortAnswer:"Use s.update(sentence.split()).",explanation:"sentence.split() splits the text into a list of word strings. Passing this list to s.update() inserts each distinct word into the set.",hint:"Use .split() on the string before passing to update().",level:"basic",codeExample:`vocab = {"python"}
vocab.update("learn python at barrackpore".split())
print(vocab)  # {'python', 'learn', 'at', 'barrackpore'}`},{question:"What happens if an exception occurs halfway through set.update(generator)?",shortAnswer:"Elements yielded before the exception remain in the set; elements after the exception are not processed.",explanation:"set.update() consumes items one by one as they are yielded. If the generator crashes midway, the items already inserted remain in the set (partial mutation).",hint:"Items inserted before the crash are preserved.",level:"expert",codeExample:`def faulty_gen():
    yield 1
    yield 2
    raise ValueError("Crash!")

s = set()
try:
    s.update(faulty_gen())
except ValueError:
    pass
print(s)  # {1, 2} (Partially updated!)`},{question:"What is the difference between set.union() and set.update()?",shortAnswer:"union() returns a NEW set leaving original sets unchanged; update() MUTATES the calling set in place.",explanation:"s1.union(s2) constructs and returns a fresh third set without modifying s1 or s2. s1.update(s2) alters s1 directly in place and returns None.",hint:"union creates a new set; update modifies in place.",level:"moderate",codeExample:`s1 = {1, 2}
s2 = {3, 4}
new_s = s1.union(s2)  # s1 is still {1, 2}
s1.update(s2)         # s1 is now {1, 2, 3, 4}`},{question:"Can set.add() be chained: s.add(1).add(2)?",shortAnswer:"No, because s.add(1) returns None, causing the second .add(2) to fail with AttributeError: 'NoneType' object has no attribute 'add'.",explanation:"Since add() returns None, method chaining is not supported. You must execute each add call on a separate line or use update([1, 2]).",hint:"Chaining requires returning self, which Python mutating methods do not do.",level:"moderate",codeExample:`s = set()
# s.add(1).add(2)  # AttributeError: 'NoneType' object has no attribute 'add'`},{question:"How do you add elements from a set of tuples into an existing set of coordinates?",shortAnswer:"Use coords_set.update(new_tuples_set).",explanation:"update() iterates through new_tuples_set, pulling each immutable (x, y) tuple and inserting it into coords_set.",hint:"Use update() with the tuples collection.",level:"basic",codeExample:`coords = {(10, 20)}
new_coords = {(30, 40), (50, 60)}
coords.update(new_coords)
print(coords)`},{question:"What is the memory performance tip when updating a set with a massive list of 10,000,000 items?",shortAnswer:"Pass a generator expression or iterator to s.update() to avoid allocating another intermediate 10M-element container.",explanation:"Calling s.update(item for item in stream) processes elements on the fly without duplicating memory arrays, preventing Out-Of-Memory (OOM) crashes on large datasets.",hint:"Use streaming generators to avoid giant memory spikes.",level:"expert",codeExample:`# Memory-safe streaming update:
# s.update(line.strip() for line in big_file)`},{question:"What is the golden rule for professional developers when choosing between .add() and .update()?",shortAnswer:"Use .add(item) for a single individual element; use .update(iterables) for batch collection ingestion.",explanation:"Selecting the proper method ensures clear code readability, eliminates string-splitting bugs, avoids unnecessary intermediate container creation, and maximizes execution performance.",hint:"Single item -> add(); Collection/Iterable -> update().",level:"basic",codeExample:`# Golden Rule:
s.add("SingleWord")       # For one item
s.update(["A", "B", "C"]) # For multiple items`}];function S(){const r=l.useRef([]),[i,d]=l.useState("mechanics");l.useEffect(()=>{const s=new IntersectionObserver(a=>{a.forEach(o=>{o.isIntersecting&&o.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return r.current.forEach(a=>{a&&s.observe(a)}),()=>s.disconnect()},[]);const t=s=>{s&&!r.current.includes(s)&&r.current.push(s)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-emerald-500/30 selection:text-emerald-200",children:[e.jsx("style",{children:`
        .section-hidden {
          transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .section-visible {
          transform: translateY(0);
        }
      `}),e.jsxs("header",{ref:t,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-emerald-950/80 text-emerald-300 px-3 py-1 rounded-full border border-emerald-800/80 shadow-sm shadow-emerald-950/50",children:"Segment 2 • Module 002_006"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-sky-950/80 text-sky-300 px-3 py-1 rounded-full border border-sky-800/80 shadow-sm shadow-sky-950/50",children:"Topic 4"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Set Mutation Methods"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Adding Elements: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"add()"})," vs ",e.jsx("code",{className:"text-sky-400 font-mono",children:"update()"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Mastering in-place set expansion: adding single items with ",e.jsx("code",{className:"text-emerald-400 font-mono",children:".add()"}),", bulk multi-iterable ingestion with ",e.jsx("code",{className:"text-sky-400 font-mono",children:".update()"}),", and avoiding string-splitting bugs."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🎯 O(1) Single Item Insertion"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📦 Variadic Multi-Iterable Ingestion"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚠️ The String Splitting Gotcha"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🚫 In-Place None Return Trap"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚙️"}),e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:["1. Method Comparison: ",e.jsx("code",{className:"text-emerald-400",children:"add()"})," vs ",e.jsx("code",{className:"text-sky-400",children:"update()"})]})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["Python sets are mutable collections that can expand dynamically. Depending on whether you want to insert a ",e.jsx("strong",{className:"text-emerald-400",children:"single discrete value"})," or ",e.jsx("strong",{className:"text-sky-400",children:"merge elements from collections"}),", Python provides two distinct methods:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5 my-6 not-prose",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/70 border border-emerald-800/60 shadow-lg shadow-emerald-950/30 transition-all duration-300 hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-lg",children:[e.jsx("span",{children:"➕"})," set.add(element)"]}),e.jsx("span",{className:"text-xs font-mono bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800",children:"O(1) Time"})]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-3",children:["Takes exactly ",e.jsx("strong",{className:"text-white",children:"one hashable item"})," and inserts it as a single member into the set."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-slate-400 space-y-1",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-emerald-400",children:"✓"})," ",e.jsx("code",{className:"text-emerald-300",children:'s.add("Python")'})," → ","{'Python'}"]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-emerald-400",children:"✓"})," ",e.jsx("code",{className:"text-emerald-300",children:"s.add((1, 2))"})," → ","{(1, 2)}"]})]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/70 border border-sky-800/60 shadow-lg shadow-sky-950/30 transition-all duration-300 hover:border-sky-500",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sky-400 font-bold text-lg",children:[e.jsx("span",{children:"📥"})," set.update(*iterables)"]}),e.jsx("span",{className:"text-xs font-mono bg-sky-950 text-sky-300 px-2 py-0.5 rounded border border-sky-800",children:"O(K) Bulk"})]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-3",children:["Takes ",e.jsx("strong",{className:"text-white",children:"one or more iterables"}),", unpacks every child item, and inserts them all into the set."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-slate-400 space-y-1",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-sky-400",children:"✓"})," ",e.jsx("code",{className:"text-sky-300",children:"s.update([10, 20])"})," → ","{10, 20}"]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-sky-400",children:"✓"})," ",e.jsx("code",{className:"text-sky-300",children:"s.update(tuple1, list2)"})," → Multi-source!"]})]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-amber-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-2",children:"⚠️ The #1 Mutation Trap: In-Place Modification Returns None!"}),e.jsxs("p",{className:"text-sm sm:text-base text-slate-300",children:["Both ",e.jsx("code",{className:"text-emerald-400 font-mono",children:".add()"})," and ",e.jsx("code",{className:"text-sky-400 font-mono",children:".update()"})," modify the set in place and return ",e.jsx("code",{className:"text-rose-400 font-mono",children:"None"}),". Never write ",e.jsx("code",{className:"text-rose-300 font-mono font-bold bg-rose-950/50 px-1.5 py-0.5 rounded",children:"s = s.add(x)"}),", as this will destroy your set by turning ",e.jsx("code",{className:"font-mono text-white",children:"s"})," into ",e.jsx("code",{className:"font-mono text-rose-400",children:"None"}),"!"]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"🔀"}),e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:["2. Visualizing Insertion: ",e.jsx("code",{className:"text-emerald-400",children:"add()"})," vs ",e.jsx("code",{className:"text-sky-400",children:"update()"})]})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>d("mechanics"),className:c("px-3 py-1.5 rounded-lg transition-all",i==="mechanics"?"bg-emerald-900/50 text-emerald-300 border border-emerald-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"add() vs update() Mechanics"}),e.jsx("button",{onClick:()=>d("stringtrap"),className:c("px-3 py-1.5 rounded-lg transition-all",i==="stringtrap"?"bg-amber-900/50 text-amber-300 border border-amber-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"The String Splitting Trap"})]})]}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:i==="mechanics"?e.jsxs("svg",{viewBox:"0 0 850 340",className:"w-full h-auto min-w-[650px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#34d399",fontSize:"13",fontWeight:"bold",children:"METHOD 1: set.add(item) → ATOMIC 1-ITEM INSERTION"}),e.jsx("rect",{x:"30",y:"45",width:"220",height:"50",rx:"8",fill:"#1e293b",stroke:"#059669",strokeWidth:"1.5"}),e.jsx("text",{x:"45",y:"75",fill:"#f8fafc",fontSize:"13",fontWeight:"bold",children:'Single Item: "Kolkata"'}),e.jsx("path",{d:"M 250 70 L 330 70",stroke:"#10b981",strokeWidth:"2",fill:"none"}),e.jsx("text",{x:"260",y:"62",fill:"#10b981",fontSize:"10",children:'hash("Kolkata")'}),e.jsx("rect",{x:"330",y:"45",width:"480",height:"50",rx:"8",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsxs("text",{x:"350",y:"75",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:["Inserts into 1 Hash Bucket → Result: ","{'Kolkata'}"]}),e.jsx("text",{x:"30",y:"160",fill:"#38bdf8",fontSize:"13",fontWeight:"bold",children:"METHOD 2: set.update(*iterables) → UNPACKS & BULK INSERTS"}),e.jsx("rect",{x:"30",y:"175",width:"220",height:"135",rx:"8",fill:"#1e293b",stroke:"#0284c7",strokeWidth:"1.5"}),e.jsx("text",{x:"45",y:"200",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",children:"Incoming Iterables:"}),e.jsx("text",{x:"45",y:"225",fill:"#cbd5e1",fontSize:"11",children:'1. List: ["Ichapur", "Jadavpur"]'}),e.jsx("text",{x:"45",y:"250",fill:"#cbd5e1",fontSize:"11",children:'2. Tuple: ("Barrackpore",)'}),e.jsx("text",{x:"45",y:"275",fill:"#cbd5e1",fontSize:"11",children:"3. Range: range(700120, 700122)"}),e.jsx("path",{d:"M 250 240 L 330 240",stroke:"#38bdf8",strokeWidth:"2",fill:"none"}),e.jsx("text",{x:"255",y:"232",fill:"#38bdf8",fontSize:"10",children:"Unpack All"}),e.jsx("rect",{x:"330",y:"175",width:"480",height:"135",rx:"8",fill:"#0f172a",stroke:"#0284c7",strokeWidth:"1.5"}),e.jsx("text",{x:"350",y:"205",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",children:"Unpacked Stream Inserted in Parallel:"}),e.jsx("text",{x:"350",y:"235",fill:"#94a3b8",fontSize:"12",children:'• Unpacks "Ichapur" → Hash & Insert'}),e.jsx("text",{x:"350",y:"255",fill:"#94a3b8",fontSize:"12",children:'• Unpacks "Jadavpur" → Hash & Insert'}),e.jsx("text",{x:"350",y:"275",fill:"#94a3b8",fontSize:"12",children:'• Unpacks "Barrackpore", 700120, 700121...'}),e.jsx("text",{x:"350",y:"295",fill:"#34d399",fontSize:"12",fontWeight:"bold",children:"Result: Consolidated Multi-Source Set!"})]}):e.jsxs("svg",{viewBox:"0 0 850 320",className:"w-full h-auto min-w-[650px] font-sans",children:[e.jsx("text",{x:"30",y:"35",fill:"#f8fafc",fontSize:"15",fontWeight:"bold",children:"The Classic Trap: Passing Strings to .add() vs .update()"}),e.jsx("rect",{x:"30",y:"65",width:"380",height:"220",rx:"10",fill:"#1e293b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"50",y:"95",fill:"#34d399",fontSize:"15",fontWeight:"bold",children:'s.add("Kolkata")  (INTENDED)'}),e.jsx("rect",{x:"50",y:"115",width:"340",height:"45",rx:"6",fill:"#064e3b",stroke:"#10b981"}),e.jsxs("text",{x:"65",y:"142",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:["Result: ",'{"Kolkata"}'," (Len: 1 element)"]}),e.jsx("text",{x:"50",y:"185",fill:"#cbd5e1",fontSize:"12",children:"• Treats the string as a complete, atomic word."}),e.jsx("text",{x:"50",y:"210",fill:"#cbd5e1",fontSize:"12",children:"• Adds the entire city name into 1 bucket."}),e.jsx("text",{x:"50",y:"235",fill:"#34d399",fontSize:"12",fontWeight:"bold",children:"✓ Correct method for adding words or tags!"}),e.jsx("rect",{x:"440",y:"65",width:"380",height:"220",rx:"10",fill:"#1e293b",stroke:"#ef4444",strokeWidth:"2"}),e.jsx("text",{x:"460",y:"95",fill:"#fca5a5",fontSize:"15",fontWeight:"bold",children:'s.update("Kolkata")  (THE BUG)'}),e.jsx("rect",{x:"460",y:"115",width:"340",height:"45",rx:"6",fill:"#450a0a",stroke:"#ef4444"}),e.jsxs("text",{x:"475",y:"142",fill:"#fecaca",fontSize:"13",fontWeight:"bold",children:["Result: ",'{"K", "o", "l", "k", "a", "t"}'," (Len: 6)"]}),e.jsx("text",{x:"460",y:"185",fill:"#cbd5e1",fontSize:"12",children:"• Strings are iterables! update() unpacks characters."}),e.jsx("text",{x:"460",y:"210",fill:"#cbd5e1",fontSize:"12",children:"• Shatters the word into individual letters."}),e.jsx("text",{x:"460",y:"235",fill:"#fca5a5",fontSize:"12",fontWeight:"bold",children:"❌ Unintended word shattering bug!"})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 space-y-8",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Python Code Labs"})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab A: Single Item Insertion with .add() & In-Place Mutation"}),e.jsx(n,{fileModule:u,title:"add_single_element.py",highlightLines:[6,10,14,18,26]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab B: Bulk Ingestion from Multiple Iterables with .update()"}),e.jsx(n,{fileModule:x,title:"update_multiple_iterables.py",highlightLines:[6,12,17,26]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab C: Common Traps: String Shattering & List in add()"}),e.jsx(n,{fileModule:b,title:"add_vs_update_pitfalls.py",highlightLines:[10,14,19,27]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab D: Real-World Multi-Branch Batch Ingestion & Revenue in ₹"}),e.jsx(n,{fileModule:g,title:"inventory_batch_addition.py",highlightLines:[10,16,21]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏢"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Industry Applications in West Bengal"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🎓"})," 1. Multi-Branch Admission Merging"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["When Susmita, Mamata, and Debangshu collect student registrations across ",e.jsx("strong",{children:"Barrackpore"}),", ",e.jsx("strong",{children:"Ichapur"}),", and ",e.jsx("strong",{children:"Kolkata"}),", calling ",e.jsx("code",{className:"font-mono text-emerald-400",children:"active_students.update(batch1, batch2, batch3)"})," consolidates all batches into an accurate fee roster in Indian Rupees (",e.jsx("strong",{className:"text-emerald-300",children:"₹4,500/student"}),")."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🛒"})," 2. E-Commerce Product Tag Aggregation"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["E-commerce backends update catalog search keywords using ",e.jsx("code",{className:"font-mono text-sky-400",children:"catalog_tags.update(item.keywords)"}),", ingesting product attributes on the fly without creating duplicate index entries."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"📡"})," 3. IoT Sensor Node Whitelisting"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Smart grid controllers in ",e.jsx("strong",{children:"Jadavpur"})," research centers add dynamic sensor device IDs as new telemetry nodes come online using ",e.jsx("code",{className:"font-mono text-purple-400",children:"authorized_nodes.add(node_id)"})," in O(1) time."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🔒"})," 4. Real-Time Security Blacklists"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Web security firewalls append offending IP addresses to an active memory blacklist with ",e.jsx("code",{className:"font-mono text-amber-400",children:"banned_ips.add(client_ip)"}),", instantly blocking subsequent malicious HTTP requests."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:["5. Pitfalls & Tricky Gotchas with ",e.jsx("code",{className:"text-emerald-400",children:"add()"})," and ",e.jsx("code",{className:"text-sky-400",children:"update()"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 1: Word Shattering in update()"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Calling ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:'s.update("Python")'})," shatters the word into characters ","{P, y, t, h, o, n}",". Always use ",e.jsx("code",{className:"font-mono text-emerald-400",children:'s.add("Python")'})," for complete strings!"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 2: Reassigning to Return Value"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Writing ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:'s = s.add("React")'})," sets ",e.jsx("code",{className:"font-mono text-white",children:"s"})," to ",e.jsx("code",{className:"font-mono text-rose-400",children:"None"}),". Both ",e.jsx("code",{className:"font-mono",children:"add()"})," and ",e.jsx("code",{className:"font-mono",children:"update()"})," mutate in place and return ",e.jsx("code",{className:"font-mono",children:"None"}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 3: Passing Lists Directly to add()"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:[e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"s.add([1, 2])"})," crashes with ",e.jsx("code",{className:"text-rose-400 font-bold",children:"TypeError: unhashable type: 'list'"}),". Use ",e.jsx("code",{className:"font-mono text-emerald-400",children:"s.update([1, 2])"})," to unpack elements."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 4: Method Chaining Attempts"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Writing ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"s.add(1).add(2)"})," fails with ",e.jsx("code",{className:"text-rose-400 font-bold",children:"AttributeError: 'NoneType' object has no attribute 'add'"}),". Use ",e.jsx("code",{className:"font-mono text-emerald-400",children:"s.update([1, 2])"})," instead."]})]})]})]}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(h,{content:f,title:"Topic 4: Adding Elements Study Guide",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Study Note",downloadFileName:"topic4_adding_elements_add_update_note.txt"})}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(m,{title:"Topic 4 • Adding Elements (add & update): Master Viva & Review Questions",questions:y})}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(p,{note:"Teacher's Rule of Thumb: Remember the golden distinction—use .add() for a single discrete value (like adding a student roll number or city name), and use .update() whenever you want to unpack collections like lists, tuples, or database query records. And always avoid s = s.add(x) to prevent turning your variable into None!"})})]})]})}export{S as default};
