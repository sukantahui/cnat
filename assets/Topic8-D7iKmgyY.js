import{b as o,j as e,bg as d}from"./vendor-react-core-Doz9nIC6.js";import{P as a}from"./PythonFileLoader-hCi5osN-.js";import{P as m}from"./PlainTextPrint-C08xhKA4.js";import{F as h}from"./FAQTemplate-CkSqDH4B.js";import{T as x}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const p=`# ====================================================================\r
# Topic 8: Set Length and Basic Operations\r
# File: len_and_truthiness.py\r
# Description: Demonstrating O(1) len(s) and Boolean truthiness evaluation\r
# ====================================================================\r
\r
# 1. len() executes in O(1) constant time\r
enrolled_candidates = {"Susmita", "Debangshu", "Mamata", "Abhronila"}\r
print("Enrolled Candidates Set:", enrolled_candidates)\r
print(f"Total Unique Students (len): {len(enrolled_candidates)}")\r
\r
# 2. Boolean Truthiness (Empty vs Populated Set)\r
empty_set = set()\r
populated_set = {"Python"}\r
\r
print(f"\\nTruthiness of empty_set: bool(set()) -> {bool(empty_set)}")\r
print(f"Truthiness of populated_set: bool({{'Python'}}) -> {bool(populated_set)}")\r
\r
# 3. Idiomatic guard clause with set truthiness\r
def process_batch(student_set: set):\r
    if not student_set:\r
        return "Warning: Batch is empty! No notifications dispatched."\r
    return f"Success: Processing {len(student_set)} students..."\r
\r
print("\\n--- Guard Clause Checks ---")\r
print(process_batch(empty_set))\r
print(process_batch(enrolled_candidates))\r
`,u=`# ====================================================================\r
# Topic 8: Set Length and Basic Operations\r
# File: shallow_copy_vs_aliasing.py\r
# Description: Demonstrating set aliasing (=) vs shallow copy (.copy() / set())\r
# ====================================================================\r
\r
# Original center list\r
original_centers = {"Barrackpore", "Kolkata"}\r
print("Original Centers (Initial):", original_centers)\r
\r
# 1. ALIASING (Assignment '=' copies only the pointer/reference)\r
alias_centers = original_centers\r
alias_centers.add("Ichapur")\r
\r
print("\\n--- After Mutating Alias ---")\r
print("alias_centers:", alias_centers)\r
print("original_centers (Accidentally Mutated!):", original_centers)\r
print("Are they the exact same object? ->", alias_centers is original_centers)\r
\r
# 2. SHALLOW COPY (Creates an independent set object)\r
original_centers = {"Barrackpore", "Kolkata"}\r
cloned_centers = original_centers.copy()\r
cloned_centers.add("Jadavpur")\r
\r
print("\\n--- After Mutating Shallow Copy ---")\r
print("cloned_centers:", cloned_centers)\r
print("original_centers (Safe and Untouched!):", original_centers)\r
print("Are they different objects? ->", cloned_centers is not original_centers)\r
`,f=`# ====================================================================\r
# Topic 8: Set Length and Basic Operations\r
# File: min_max_sum_operations.py\r
# Description: Built-in aggregate operations: min(), max(), sum(), any(), all()\r
# ====================================================================\r
\r
# Monthly student test scores in Barrackpore Computer Science Center\r
test_scores = {78, 92, 85, 99, 64, 88}\r
\r
print("Distinct Test Scores:", test_scores)\r
print(f"Number of distinct scores (len): {len(test_scores)}")\r
print(f"Lowest Score (min): {min(test_scores)}")\r
print(f"Highest Score (max): {max(test_scores)}")\r
print(f"Sum of Distinct Scores (sum): {sum(test_scores)}")\r
print(f"Average Distinct Score: {sum(test_scores) / len(test_scores):.2f}")\r
\r
# Using all() and any() predicates\r
all_passed = all(score >= 40 for score in test_scores)\r
has_distinction = any(score >= 90 for score in test_scores)\r
\r
print(f"\\nDid all distinct scores pass (>= 40)? -> {all_passed}")\r
print(f"Is there any distinction score (>= 90)? -> {has_distinction}")\r
`,y=`# ====================================================================\r
# Topic 8: Set Length and Basic Operations\r
# File: batch_fee_statistics.py\r
# Description: Real-World Student Batch Revenue Statistics in Barrackpore & Kolkata\r
# ====================================================================\r
\r
# Unique enrolled student IDs across Barrackpore and Kolkata\r
enrolled_students = {\r
    "STU-BP-101",\r
    "STU-BP-102",\r
    "STU-BP-103",\r
    "STU-CAL-201",\r
    "STU-CAL-202",\r
    "STU-CAL-203"\r
}\r
\r
fee_per_student = 4500  # Course fee in Indian Rupees (₹)\r
\r
total_enrolled = len(enrolled_students)\r
total_batch_revenue = total_enrolled * fee_per_student\r
\r
print("--- Barrackpore & Kolkata Batch Summary ---")\r
print(f"Total Unique Students Enrolled: {total_enrolled}")\r
print(f"Fee per Student: ₹{fee_per_student}")\r
print(f"Total Consolidated Batch Revenue: ₹{total_batch_revenue:,}")\r
\r
# Safe clone creation for auditing without risking live data mutation\r
audit_copy = enrolled_students.copy()\r
audit_copy.add("TEMP-AUDITOR-TEST")\r
\r
print(f"\\nAudit Set Size: {len(audit_copy)} (Simulated addition)")\r
print(f"Production Set Size: {len(enrolled_students)} (Safely preserved at 6)")\r
`,b=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
                PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_006: SETS\r
                   TOPIC 8: SET LENGTH AND BASIC OPERATIONS\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. SET LENGTH: len(my_set)\r
--------------------------------------------------------------------------------\r
  • Time Complexity: O(1) instantaneous constant time.\r
  • How it works: In CPython, the \`PySetObject\` C-struct maintains an explicit\r
    \`used\` counter updated on every insertion and deletion. Calling \`len(s)\`\r
    simply reads this field without traversing hash buckets.\r
\r
--------------------------------------------------------------------------------\r
2. BOOLEAN TRUTHINESS\r
--------------------------------------------------------------------------------\r
  • \`bool(set())\` evaluates to \`False\` (Empty container).\r
  • \`bool({elem, ...})\` evaluates to \`True\` (Populated container).\r
  • Idiomatic Guard Pattern:\r
    \`\`\`python\r
    if not my_set:\r
        print("Set is empty")\r
    \`\`\`\r
\r
--------------------------------------------------------------------------------\r
3. COPYING SETS: ALIASING VS SHALLOW COPY\r
--------------------------------------------------------------------------------\r
  • Aliasing (\`s2 = s1\`): Copies only the memory pointer. Mutating \`s2\`\r
    mutates \`s1\`!\r
  • Shallow Copy (\`s2 = s1.copy()\` or \`s2 = set(s1)\`): Allocates a new,\r
    independent set object in memory.\r
\r
--------------------------------------------------------------------------------\r
4. BUILT-IN AGGREGATE FUNCTIONS\r
--------------------------------------------------------------------------------\r
  • \`min(s)\`: Smallest element in O(N) time.\r
  • \`max(s)\`: Largest element in O(N) time.\r
  • \`sum(s)\`: Sum of numeric elements in O(N) time.\r
  • \`any(s)\`: True if at least one element is truthy.\r
  • \`all(s)\`: True if all elements are truthy (True for empty set!).\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 8: SET LENGTH & BASIC OPERATIONS\r
================================================================================\r
`,g=[{question:"Why does len(my_set) execute in O(1) constant time regardless of whether the set has 5 or 5,000,000 items?",shortAnswer:"CPython maintains an explicit 'used' counter attribute in the PySetObject C-struct that is read directly.",explanation:"Instead of counting elements by iterating through hash buckets, Python updates an internal integer field every time an element is inserted or deleted. len() simply reads this struct field in instant O(1) time.",hint:"Think about reading a pre-computed struct integer field.",level:"basic",codeExample:`s = set(range(1000000))
print(len(s))  # O(1) instant read`},{question:"What does an empty set evaluate to in a boolean conditional (e.g. if my_set:)?",shortAnswer:"An empty set evaluates to False; a set with at least 1 element evaluates to True.",explanation:'In Python, empty collections (set(), [], {}, "") evaluate to False in boolean context (falsy). Populated sets evaluate to True (truthy).',hint:"Empty is False; non-empty is True.",level:"basic",codeExample:`s = set()
if not s:
    print("Set is empty!")`},{question:"What is the difference between writing s2 = s1 versus s2 = s1.copy()?",shortAnswer:"s2 = s1 creates an alias (both variables point to the same memory object); s2 = s1.copy() creates an independent clone.",explanation:"Assignment '=' copies only the pointer reference. Mutating s2 will unintentionally mutate s1. .copy() allocates a brand-new set object with cloned element pointers.",hint:"Assignment copies references; copy() allocates a new set.",level:"basic",codeExample:`s1 = {1, 2}
s2 = s1        # Alias
s3 = s1.copy() # Independent copy
s2.add(3)
print(s1)      # {1, 2, 3} (Mutated via s2!)
print(s3)      # {1, 2} (Safe)`},{question:"What is the return value and behavior of all(set()) on an empty set?",shortAnswer:"True (vacuously true).",explanation:"all() checks if any element evaluates to False. Because an empty set has no elements, zero elements fail the condition, so all(set()) returns True by mathematical definition.",hint:"all() on an empty iterable is vacuously True.",level:"moderate",codeExample:`print(all(set()))  # True
print(any(set()))  # False`},{question:"What is the return value of any(set()) on an empty set?",shortAnswer:"False.",explanation:"any() checks if at least one element evaluates to True. Because an empty set contains zero elements, no truthy elements exist, returning False.",hint:"any() requires at least one truthy item.",level:"basic",codeExample:"print(any(set()))  # False"},{question:"How can you find the smallest and largest element in a set of numbers?",shortAnswer:"Use the built-in min(my_set) and max(my_set) functions in O(N) time.",explanation:"min() and max() traverse all elements in the set, comparing values and returning the extreme element in linear O(N) scan time.",hint:"Use min() and max().",level:"basic",codeExample:`s = {45, 12, 89, 33}
print(min(s))  # 12
print(max(s))  # 89`},{question:"What happens if you call min() or max() on an empty set without a default?",shortAnswer:"It raises ValueError: min() arg is an empty sequence (or max() arg is an empty sequence).",explanation:"When given an empty collection, min() and max() have no values to compare, raising ValueError. You can provide a default value: min(s, default=0).",hint:"Use the default parameter to avoid ValueError on empty sets.",level:"moderate",codeExample:`empty_set = set()
# min(empty_set)           # ValueError
res = min(empty_set, default=0) # Returns 0 safely`},{question:"What is the time complexity of s.copy() for a set with N elements?",shortAnswer:"O(N) linear time.",explanation:"s.copy() must allocate a new hash table array and copy all N element references into the new structure.",hint:"Copying N items requires O(N) operations.",level:"moderate",codeExample:"# s.copy() -> O(N) time and O(N) space"},{question:"Is s.copy() a shallow copy or a deep copy?",shortAnswer:"A shallow copy.",explanation:"s.copy() duplicates the set container and its hash table, but copies references to the underlying elements. If the set contains mutable sub-objects (e.g. custom objects), their inner states are still shared.",hint:"It duplicates the container, not the objects inside.",level:"moderate",codeExample:`import copy
# Shallow: s.copy()
# Deep:    copy.deepcopy(s)`},{question:"How do you calculate the sum and average of numeric elements in a set?",shortAnswer:"total = sum(my_set); average = sum(my_set) / len(my_set).",explanation:"sum(my_set) sums the numbers in O(N) time, and len(my_set) provides the distinct item count in O(1) time.",hint:"Combine sum() and len().",level:"basic",codeExample:`fees = {4500, 3500, 6500}
avg = sum(fees) / len(fees)
print(f"Average: ₹{avg:.2f}")`},{question:"What happens if you pass a set of strings to sum(my_set)?",shortAnswer:"It raises TypeError: unsupported operand type(s) for +: 'int' and 'str'.",explanation:"sum() starts accumulating with default start=0. Adding an int to a string raises TypeError. To concatenate strings from a set, use ''.join(my_set).",hint:"Use ''.join() for strings, not sum().",level:"basic",codeExample:`words = {"Barrackpore", "Kolkata"}
# sum(words)       # TypeError
res = " ".join(words)  # Correct!`},{question:"How can you check if two sets s1 and s2 share the exact same memory address?",shortAnswer:"Use the identity operator: s1 is s2.",explanation:"The 'is' operator checks if both variables reference the exact same memory address (id(s1) == id(s2)).",hint:"Use the 'is' operator to check object identity.",level:"basic",codeExample:`s1 = {1, 2}
s2 = s1
s3 = s1.copy()
print(s1 is s2)  # True (Same object)
print(s1 is s3)  # False (Different objects)`},{question:"What is the alternative syntax to s.copy() for creating a shallow copy of a set?",shortAnswer:"set(s) or {*s}.",explanation:"Passing an existing set to the set() constructor or unpacking it inside a set literal {*s} creates an independent shallow copy identical to s.copy().",hint:"Use set(s) or {*s}.",level:"basic",codeExample:`s = {1, 2, 3}
clone1 = set(s)
clone2 = {*s}
print(clone1 == clone2 == s)  # True`},{question:"What happens if you call bool(set([0])) vs bool(set())?",shortAnswer:"bool(set([0])) is True (contains 1 element); bool(set()) is False (contains 0 elements).",explanation:"Set truthiness is based purely on whether len(s) > 0, NOT on the truthiness of individual elements inside.",hint:"A set with 0 is non-empty, so it is True.",level:"moderate",codeExample:`print(bool(set([0])))  # True (len is 1)
print(bool(set()))     # False (len is 0)`},{question:"How do you find the string with the minimum alphabetical value in a set?",shortAnswer:"Use min(my_set).",explanation:"When strings are compared, min() finds the lexicographically smallest string using character Unicode code points in O(N) time.",hint:"min() works lexicographically on strings.",level:"basic",codeExample:`cities = {"Kolkata", "Barrackpore", "Ichapur"}
print(min(cities))  # 'Barrackpore'`},{question:"How do you find the shortest string by character length in a set of words?",shortAnswer:"Use min(my_set, key=len).",explanation:"The key=len parameter instructs min() to compare elements by their character count rather than alphabetical order.",hint:"Pass key=len to min().",level:"basic",codeExample:`cities = {"Kolkata", "Ichapur", "Goa"}
print(min(cities, key=len))  # 'Goa'`},{question:"What is the memory size in bytes of an empty set vs an empty list in 64-bit CPython?",shortAnswer:"An empty set is ~216 bytes; an empty list is ~56 bytes.",explanation:"An empty set allocates an internal 8-slot hash bucket array upfront to handle future insertions without immediate resizing, consuming more base memory than a minimal list struct.",hint:"Sets allocate 8 hash slots upfront (~216 bytes).",level:"expert",codeExample:`import sys
print(sys.getsizeof(set()))  # ~216 bytes
print(sys.getsizeof([]))     # ~56 bytes`},{question:"What is the output of: s = {True, False}; print(sum(s))?",shortAnswer:"1.",explanation:"True has numeric value 1 and False has numeric value 0. 1 + 0 = 1.",hint:"True is 1 and False is 0 in numerical context.",level:"moderate",codeExample:`s = {True, False}
print(sum(s))  # 1`},{question:"Why does any([False, 0, '']) return False, but any({False, 0, ''}) return False as well?",shortAnswer:"Because all items inside both containers are falsy (False, 0, and '' all evaluate to False).",explanation:"any() evaluates bool(x) on each item. Since none of False, 0, or '' are truthy, any() returns False.",hint:"None of the elements are truthy.",level:"moderate",codeExample:`s = {False, 0, ""}
print(any(s))  # False`},{question:"How can you count the number of elements in a set that satisfy a specific condition?",shortAnswer:"Use sum(1 for x in my_set if condition(x)).",explanation:"The generator expression produces 1 for each matching element, and sum() tallies them in O(N) time.",hint:"Combine sum() with an if filter generator.",level:"basic",codeExample:`scores = {85, 42, 90, 33, 76}
passed_count = sum(1 for s in scores if s >= 40)
print("Passed count:", passed_count)  # 4`},{question:"What is the effect of comparing two sets for equality: s1 == s2?",shortAnswer:"Returns True if both sets contain the exact same elements, regardless of internal bucket layout.",explanation:"Set equality checks that len(s1) == len(s2) and every element in s1 exists in s2.",hint:"== checks if contents match identically.",level:"basic",codeExample:"print({1, 2, 3} == {3, 1, 2})  # True"},{question:"What is the effect of comparing two sets with !=?",shortAnswer:"Returns True if any element in s1 is missing from s2, or if their lengths differ.",explanation:"!= is the logical negation of ==.",hint:"!= checks if contents differ.",level:"basic",codeExample:"print({1, 2} != {1, 3})  # True"},{question:"Can you pass a set to the sorted() function with a custom reverse flag?",shortAnswer:"Yes: sorted(my_set, reverse=True) returns a descending sorted list.",explanation:"sorted() works on any iterable and returns a new list sorted in reverse descending order.",hint:"Use reverse=True in sorted().",level:"basic",codeExample:`s = {10, 50, 20, 40}
print(sorted(s, reverse=True))  # [50, 40, 20, 10]`},{question:"Why should you use 'if not my_set:' instead of 'if len(my_set) == 0:'?",shortAnswer:"Using 'if not my_set:' is the canonical, Pythonic style for checking container emptiness.",explanation:"PEP 8 explicitly recommends relying on truthiness for collections ('if not seq:') rather than explicit len checks, resulting in cleaner and more idiomatic Python code.",hint:"PEP 8 recommends 'if not s:' for truthiness testing.",level:"basic",codeExample:`# Pythonic:
if not s:
    pass

# Less Pythonic:
if len(s) == 0:
    pass`},{question:"What happens if you call sum() on a set of floats: sum({1.5, 2.5, 3.0})?",shortAnswer:"It returns the floating-point sum 7.0.",explanation:"sum() accumulates floating-point values accurately in O(N) time.",hint:"sum() works smoothly on float sets.",level:"basic",codeExample:"print(sum({1.5, 2.5, 3.0}))  # 7.0"},{question:"How do you find the second largest element in a set of distinct numbers?",shortAnswer:"Use sorted(my_set)[-2].",explanation:"sorted(my_set) returns an ascending list of all unique elements, and index [-2] accesses the second largest element in O(N log N) time.",hint:"Sort the set and index the second from the end.",level:"basic",codeExample:`nums = {10, 40, 90, 25, 75}
second_highest = sorted(nums)[-2]
print(second_highest)  # 75`},{question:"What happens if you assign s = s.copy()?",shortAnswer:"It creates a new set clone and rebinds s to the new clone, leaving the previous set eligible for garbage collection.",explanation:"A new set is allocated and s is rebound to it.",hint:"s now points to the newly allocated clone.",level:"moderate",codeExample:`s = {1, 2}
s = s.copy()  # Safe new object binding`},{question:"How does len(my_set) handle sets with duplicate values passed at initialization?",shortAnswer:"Duplicates are collapsed during creation, so len() reflects only the distinct unique items.",explanation:"The constructor eliminates duplicate keys during hash table insertion, so len({1, 1, 2, 2}) returns 2.",hint:"len() counts distinct members.",level:"basic",codeExample:`s = {1, 1, 2, 2, 3, 3}
print(len(s))  # 3`},{question:"Can set objects be hashed using hash(my_set)?",shortAnswer:"No, mutable set objects are unhashable and raise TypeError: unhashable type: 'set'.",explanation:"Because set contents can mutate, computing a fixed hash code is prohibited. For hashable sets, use frozenset.",hint:"Standard sets cannot be hashed; use frozenset instead.",level:"basic",codeExample:`s = {1, 2}
try:
    print(hash(s))
except TypeError as e:
    print(e)  # unhashable type: 'set'`},{question:"What is the key takeaway for a software developer regarding basic set operations?",shortAnswer:"len() is an instant O(1) struct read; check emptiness with 'if not s:'; create safe clones with .copy(); and use min/max/sum for fast O(N) aggregates.",explanation:"Mastering these foundational operations ensures clean, high-performance, and idiomatic Python code in production systems.",hint:"O(1) len, 'if not s' truthiness, .copy() cloning, min/max/sum aggregates.",level:"basic",codeExample:`# Summary Checklist:
# 1. len(s) -> O(1)
# 2. if not s: -> Emptiness check
# 3. clone = s.copy() -> Safe copy
# 4. max(s), min(s), sum(s) -> Aggregates`}];function A(){const r=o.useRef([]),[i,l]=o.useState("length");o.useEffect(()=>{const s=new IntersectionObserver(n=>{n.forEach(c=>{c.isIntersecting&&c.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return r.current.forEach(n=>{n&&s.observe(n)}),()=>s.disconnect()},[]);const t=s=>{s&&!r.current.includes(s)&&r.current.push(s)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-emerald-500/30 selection:text-emerald-200",children:[e.jsx("style",{children:`
        .section-hidden {
          transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .section-visible {
          transform: translateY(0);
        }
      `}),e.jsxs("header",{ref:t,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-emerald-950/80 text-emerald-300 px-3 py-1 rounded-full border border-emerald-800/80 shadow-sm shadow-emerald-950/50",children:"Segment 2 • Module 002_006"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-sky-950/80 text-sky-300 px-3 py-1 rounded-full border border-sky-800/80 shadow-sm shadow-sky-950/50",children:"Topic 8"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Core Container Operations"})]}),e.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:"Set Length & Basic Operations"}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Understanding ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"len()"})," internals, boolean truthiness evaluation, reference aliasing vs shallow cloning with ",e.jsx("code",{className:"text-sky-400 font-mono",children:".copy()"}),", and built-in aggregate operations."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ Instant O(1) len(s) Struct Read"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Safe Cloning vs Aliasing"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"❓ Boolean Truthiness Checks"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📈 Aggregates: min, max, sum"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. Fundamental Set Mechanics"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"Python sets provide several essential built-in operations designed for high-performance computing, clean condition checking, and memory management:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5 my-6 not-prose",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/70 border border-emerald-800/60 shadow-lg shadow-emerald-950/30 transition-all duration-300 hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-lg",children:[e.jsx("span",{children:"📏"})," len() & Truthiness"]}),e.jsx("span",{className:"text-xs font-mono bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800",children:"O(1) Constant"})]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-2",children:["Calling ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"len(my_set)"})," reads an internal struct counter instantly. Evaluating ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"bool(my_set)"})," checks if ",e.jsx("strong",{className:"text-white",children:"len > 0"}),"."]}),e.jsxs("div",{className:"text-xs font-mono text-slate-400",children:[e.jsx("code",{className:"text-emerald-300",children:"if not s:"})," is the canonical Pythonic check for emptiness."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/70 border border-sky-800/60 shadow-lg shadow-sky-950/30 transition-all duration-300 hover:border-sky-500",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sky-400 font-bold text-lg",children:[e.jsx("span",{children:"📋"})," Aliasing vs .copy()"]}),e.jsx("span",{className:"text-xs font-mono bg-sky-950 text-sky-300 px-2 py-0.5 rounded border border-sky-800",children:"Memory Safety"})]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-2",children:[e.jsx("code",{className:"text-rose-300 font-mono",children:"s2 = s1"})," shares the exact same pointer (aliasing). ",e.jsx("code",{className:"text-sky-300 font-mono",children:"s2 = s1.copy()"})," creates an independent duplicate set object in memory."]}),e.jsxs("div",{className:"text-xs font-mono text-slate-400",children:["Always use ",e.jsx("code",{className:"text-sky-300",children:".copy()"})," to prevent accidental mutations."]})]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"🔬"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Memory: len() Internals & Aliasing"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>l("length"),className:d("px-3 py-1.5 rounded-lg transition-all",i==="length"?"bg-emerald-900/50 text-emerald-300 border border-emerald-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"O(1) len() PySetObject Struct"}),e.jsx("button",{onClick:()=>l("aliasing"),className:d("px-3 py-1.5 rounded-lg transition-all",i==="aliasing"?"bg-sky-900/50 text-sky-300 border border-sky-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Aliasing vs Shallow Copy"})]})]}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:i==="length"?e.jsxs("svg",{viewBox:"0 0 850 320",className:"w-full h-auto min-w-[650px] font-sans",children:[e.jsx("text",{x:"30",y:"35",fill:"#f8fafc",fontSize:"15",fontWeight:"bold",children:"How Python Computes len(my_set) in Instant O(1) Time"}),e.jsx("rect",{x:"30",y:"65",width:"400",height:"220",rx:"10",fill:"#1e293b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"50",y:"95",fill:"#34d399",fontSize:"14",fontWeight:"bold",children:"PySetObject C-Structure (CPython)"}),e.jsx("rect",{x:"50",y:"115",width:"360",height:"35",rx:"4",fill:"#0f172a",stroke:"#334155"}),e.jsx("text",{x:"65",y:"137",fill:"#94a3b8",fontSize:"11",children:"ob_refcnt: 1 (Reference Counter)"}),e.jsx("rect",{x:"50",y:"155",width:"360",height:"35",rx:"4",fill:"#0f172a",stroke:"#334155"}),e.jsx("text",{x:"65",y:"177",fill:"#94a3b8",fontSize:"11",children:"ob_type: <class 'set'>"}),e.jsx("rect",{x:"50",y:"195",width:"360",height:"40",rx:"4",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"65",y:"220",fill:"#34d399",fontSize:"13",fontWeight:"bold",children:"used: 4 (ACTIVE ELEMENT COUNTER)"}),e.jsx("text",{x:"50",y:"265",fill:"#cbd5e1",fontSize:"11",children:"• Updates on every .add() and .remove() in O(1)."}),e.jsx("rect",{x:"460",y:"65",width:"360",height:"220",rx:"10",fill:"#090d16",stroke:"#0ea5e9",strokeWidth:"1.5"}),e.jsx("text",{x:"480",y:"95",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"Executing len(my_set)"}),e.jsx("path",{d:"M 410 215 L 470 140",stroke:"#38bdf8",strokeWidth:"2",fill:"none"}),e.jsx("rect",{x:"480",y:"125",width:"320",height:"50",rx:"6",fill:"#0c4a6e",stroke:"#0ea5e9"}),e.jsx("text",{x:"495",y:"155",fill:"#bae6fd",fontSize:"13",fontWeight:"bold",children:"Direct Memory Read: return set->used"}),e.jsx("text",{x:"480",y:"205",fill:"#cbd5e1",fontSize:"12",children:"• Zero bucket traversal."}),e.jsx("text",{x:"480",y:"230",fill:"#cbd5e1",fontSize:"12",children:"• Instantaneous response time (<0.00005 ms)."}),e.jsx("text",{x:"480",y:"255",fill:"#34d399",fontSize:"12",fontWeight:"bold",children:"✓ 100% Constant O(1) Complexity!"})]}):e.jsxs("svg",{viewBox:"0 0 850 320",className:"w-full h-auto min-w-[650px] font-sans",children:[e.jsx("text",{x:"30",y:"35",fill:"#f8fafc",fontSize:"15",fontWeight:"bold",children:"Aliasing (s2 = s1) vs Shallow Copy (s2 = s1.copy())"}),e.jsx("rect",{x:"30",y:"65",width:"380",height:"220",rx:"10",fill:"#1e293b",stroke:"#ef4444",strokeWidth:"2"}),e.jsx("text",{x:"50",y:"95",fill:"#fca5a5",fontSize:"14",fontWeight:"bold",children:"ALIASING: s2 = s1  (DANGEROUS)"}),e.jsx("rect",{x:"50",y:"115",width:"150",height:"40",rx:"6",fill:"#0f172a",stroke:"#ef4444"}),e.jsx("text",{x:"65",y:"140",fill:"#fca5a5",fontSize:"12",fontWeight:"bold",children:"Pointer s1"}),e.jsx("rect",{x:"50",y:"165",width:"150",height:"40",rx:"6",fill:"#0f172a",stroke:"#ef4444"}),e.jsx("text",{x:"65",y:"190",fill:"#fca5a5",fontSize:"12",fontWeight:"bold",children:"Pointer s2"}),e.jsx("rect",{x:"230",y:"125",width:"160",height:"70",rx:"6",fill:"#450a0a",stroke:"#ef4444"}),e.jsx("text",{x:"245",y:"155",fill:"#fecaca",fontSize:"11",fontWeight:"bold",children:"Shared Set Object"}),e.jsx("text",{x:"245",y:"175",fill:"#cbd5e1",fontSize:"10",children:'{"Kolkata", "Ichapur"}'}),e.jsx("text",{x:"50",y:"240",fill:"#fca5a5",fontSize:"11",fontWeight:"bold",children:"❌ Mutating s2 unintentionally mutates s1!"}),e.jsx("rect",{x:"440",y:"65",width:"380",height:"220",rx:"10",fill:"#1e293b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"460",y:"95",fill:"#34d399",fontSize:"14",fontWeight:"bold",children:"SHALLOW COPY: s2 = s1.copy()  (SAFE)"}),e.jsx("rect",{x:"460",y:"120",width:"160",height:"60",rx:"6",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"475",y:"145",fill:"#34d399",fontSize:"11",fontWeight:"bold",children:"Original Set (s1)"}),e.jsx("text",{x:"475",y:"165",fill:"#a7f3d0",fontSize:"10",children:'{"Kolkata"}'}),e.jsx("rect",{x:"640",y:"120",width:"160",height:"60",rx:"6",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"655",y:"145",fill:"#34d399",fontSize:"11",fontWeight:"bold",children:"Cloned Set (s2)"}),e.jsx("text",{x:"655",y:"165",fill:"#a7f3d0",fontSize:"10",children:'{"Kolkata"}'}),e.jsx("text",{x:"460",y:"220",fill:"#cbd5e1",fontSize:"11",children:"• Two independent memory objects."}),e.jsx("text",{x:"460",y:"240",fill:"#34d399",fontSize:"11",fontWeight:"bold",children:"✓ Mutating s2 leaves s1 100% safe and intact!"})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 space-y-8",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Python Code Labs"})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab A: O(1) len() Measurement & Boolean Truthiness Guards"}),e.jsx(a,{fileModule:p,title:"len_and_truthiness.py",highlightLines:[6,12,18,23]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab B: Aliasing Reference Pitfall vs Safe Shallow .copy()"}),e.jsx(a,{fileModule:u,title:"shallow_copy_vs_aliasing.py",highlightLines:[8,14,18,24]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab C: Built-in Aggregates: min(), max(), sum(), any(), all()"}),e.jsx(a,{fileModule:f,title:"min_max_sum_operations.py",highlightLines:[7,10,15,18]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab D: Real-World Student Batch Revenue & Safe Audit Copy in ₹"}),e.jsx(a,{fileModule:y,title:"batch_fee_statistics.py",highlightLines:[13,19,23]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏢"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Industry Applications in West Bengal"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🎓"})," 1. Batch Size & Tuition Fee Auditing"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Course administrators in ",e.jsx("strong",{children:"Barrackpore"})," calculate aggregate student tuition fees (",e.jsx("strong",{className:"text-emerald-300",children:"₹4,500/student"}),") using ",e.jsx("code",{className:"font-mono text-emerald-400",children:"len(enrolled_students)"})," to generate accurate financial balance sheets in Indian Rupees."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🛡️"})," 2. Defensive Simulation Sandboxes"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Software test suites in ",e.jsx("strong",{children:"Kolkata"})," create a safe clone ",e.jsx("code",{className:"font-mono text-sky-400",children:"test_env = live_config.copy()"})," to simulate stress scenarios without corrupting production server state."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🛑"})," 3. Guard Clauses in Dispatch Engines"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["High-throughput background jobs abort empty notification queues early using ",e.jsx("code",{className:"font-mono text-purple-400",children:"if not pending_jobs: return"}),", saving expensive database network handshakes."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"📊"})," 4. Educational Score Evaluation"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Exam evaluation pipelines in ",e.jsx("strong",{children:"Jadavpur"})," compute highest score (",e.jsx("code",{className:"font-mono text-amber-400",children:"max(scores)"}),") and lowest score (",e.jsx("code",{className:"font-mono text-amber-400",children:"min(scores)"}),") across distinct student performance records."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Pitfalls & Tricky Traps with Basic Set Operations"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 1: Accidental Aliasing Bug"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Writing ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"s2 = s1"})," shares the same memory pointer. Mutating ",e.jsx("code",{className:"font-mono",children:"s2"})," destroys ",e.jsx("code",{className:"font-mono",children:"s1"}),". Always use ",e.jsx("code",{className:"font-mono text-emerald-400",children:"s1.copy()"}),"!"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 2: Calling min()/max() on Empty Set"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Calling ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"min(set())"})," raises ",e.jsx("code",{className:"text-rose-400 font-bold",children:"ValueError: min() arg is an empty sequence"}),". Pass a fallback: ",e.jsx("code",{className:"font-mono text-emerald-400",children:"min(s, default=0)"}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 3: Calling sum() on String Sets"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:[e.jsxs("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:["sum(","{A, B}",")"]})," raises ",e.jsx("code",{className:"text-rose-400 font-bold",children:"TypeError"}),". Use ",e.jsx("code",{className:"font-mono text-emerald-400",children:'"".join(s)'})," to concatenate strings!"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 4: all(set()) Truth Trap"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:[e.jsx("code",{className:"font-mono",children:"all(set())"})," returns ",e.jsx("strong",{className:"text-emerald-400",children:"True"})," (vacuously true), while ",e.jsx("code",{className:"font-mono",children:"any(set())"})," returns ",e.jsx("strong",{className:"text-rose-400",children:"False"}),". Be mindful when checking empty collections."]})]})]})]}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(m,{content:b,title:"Topic 8: Set Length and Basic Operations Study Guide",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Study Note",downloadFileName:"topic8_set_length_basic_operations_note.txt"})}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(h,{title:"Topic 8 • Set Length & Basic Operations: Master Viva & Review Questions",questions:g})}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(x,{note:"Teacher's Architectural Advice: Never underestimate the elegance of basic operations! In Python, len() is an instantaneous struct field lookup that never slows down your application. When you clone sets for simulation tests, always remember that s2 = s1 is an alias, whereas s2 = s1.copy() gives you genuine independence. Keep your code clean, pythonic, and safe!"})})]})]})}export{A as default};
