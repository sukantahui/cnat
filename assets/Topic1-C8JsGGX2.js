import{b as o,j as e,bg as d}from"./vendor-react-core-Doz9nIC6.js";import{P as r}from"./PythonFileLoader-hCi5osN-.js";import{P as h}from"./PlainTextPrint-C08xhKA4.js";import{F as m}from"./FAQTemplate-CkSqDH4B.js";import{T as x}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const p=`# ====================================================================\r
# Topic 1: Creating Sets (Set Literal vs Constructor)\r
# File: create_literal_demo.py\r
# Description: Demonstrating set literal syntax and heterogeneous elements\r
# ====================================================================\r
\r
# 1. Creating sets with set literal curly braces {}\r
prime_numbers = {2, 3, 5, 7, 11, 13, 17, 19}\r
print("Prime Numbers Set:", prime_numbers)\r
print("Type:", type(prime_numbers))\r
\r
# 2. String literal sets\r
student_names = {"Mamata", "Susmita", "Debangshu", "Abhronila"}\r
print("\\nStudent Names:", student_names)\r
\r
# 3. Heterogeneous immutable types inside set literal\r
center_info = {"Barrackpore", 700120, True, 4.95, ("Center", 1)}\r
print("\\nCenter Details (Heterogeneous):", center_info)\r
\r
# 4. Trailing commas & single element set literals\r
single_item_set = {"Python-3.13"}\r
print("\\nSingle Element Set:", single_item_set)\r
print("Length:", len(single_item_set))\r
`,u=`# ====================================================================\r
# Topic 1: Creating Sets (Set Literal vs Constructor)\r
# File: create_constructor_demo.py\r
# Description: Demonstrating set() constructor across various data iterables\r
# ====================================================================\r
\r
# 1. From a List with duplicate admission numbers\r
raw_admissions = [101, 102, 105, 101, 103, 102, 108, 105]\r
unique_admissions = set(raw_admissions)\r
print("Unique Admissions:", unique_admissions)\r
\r
# 2. From a String (extracts distinct characters)\r
city_text = "Barrackpore, Kolkata"\r
unique_characters = set(city_text)\r
print("\\nDistinct characters count in text:", len(unique_characters))\r
print("Distinct characters:", unique_characters)\r
\r
# 3. From a Tuple\r
exam_centers = ("Barrackpore", "Ichapur", "Jadavpur", "Barrackpore")\r
center_set = set(exam_centers)\r
print("\\nUnique Exam Centers:", center_set)\r
\r
# 4. From a Range Generator\r
odd_numbers = set(range(1, 20, 2))\r
print("\\nOdd Numbers (1 to 19):", odd_numbers)\r
`,b=`# ====================================================================\r
# Topic 1: Creating Sets (Set Literal vs Constructor)\r
# File: empty_set_demo.py\r
# Description: Demonstrating why {} is a Dictionary and set() is a Set\r
# ====================================================================\r
\r
# 1. The Common Gotcha\r
ambiguous_var = {}\r
print("Variable with {}:", ambiguous_var)\r
print("Type of {}:", type(ambiguous_var))  # <class 'dict'>\r
print("Is {} an instance of dict?", isinstance(ambiguous_var, dict))  # True\r
print("Is {} an instance of set?", isinstance(ambiguous_var, set))    # False\r
\r
# 2. Correct Way: The set() constructor\r
proper_empty_set = set()\r
print("\\nVariable with set():", proper_empty_set)\r
print("Type of set():", type(proper_empty_set))  # <class 'set'>\r
print("Length of set():", len(proper_empty_set))  # 0\r
\r
# 3. Dynamic population\r
proper_empty_set.add("Python")\r
proper_empty_set.add("FastAPI")\r
proper_empty_set.add("Python")  # Duplicate ignored\r
print("\\nPopulated Set:", proper_empty_set)\r
`,y=`# ====================================================================\r
# Topic 1: Creating Sets (Set Literal vs Constructor)\r
# File: iterable_conversion_demo.py\r
# Description: Advanced conversions from Dictionaries, Bytes & Generators\r
# ====================================================================\r
\r
# 1. Converting Dictionary (Keys, Values, Items)\r
course_fees = {\r
    "Python Pro": 4500,\r
    "Data Science": 6500,\r
    "Web Dev": 4500,\r
    "Tally Prime": 3500\r
}\r
\r
# set(dict) takes KEYS by default\r
key_set = set(course_fees)\r
print("Unique Course Names (Keys):", key_set)\r
\r
# set(dict.values()) takes VALUES\r
unique_fee_tiers = set(course_fees.values())\r
print("Unique Fee Tiers in ₹ (Values):", unique_fee_tiers)\r
\r
# set(dict.items()) takes (KEY, VALUE) tuples\r
entry_set = set(course_fees.items())\r
print("Dictionary Key-Value Pair Tuples Set:", entry_set)\r
\r
# 2. From Generator Expressions\r
squares_set = set(x**2 for x in range(-5, 6))\r
print("\\nUnique Squares of (-5 to 5):", squares_set)\r
\r
# 3. From Byte Strings\r
raw_bytes = b"ABRACADABRA"\r
unique_byte_values = set(raw_bytes)\r
print("\\nUnique ASCII byte values in 'ABRACADABRA':", unique_byte_values)\r
`,f=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
                PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_006: SETS\r
             TOPIC 1: CREATING SETS (SET LITERAL AND SET CONSTRUCTOR)\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. TOPIC OVERVIEW & CREATION STRATEGIES\r
--------------------------------------------------------------------------------\r
Python provides two primary mechanisms for creating set objects:\r
  1. Set Literal Syntax: Using curly braces \`{e1, e2, ...}\`\r
  2. Set Constructor Syntax: Using the built-in function \`set(iterable)\`\r
\r
Both create a mutable, unordered collection of unique elements, but each has\r
distinct syntactic behaviors, performance nuances, and use-case scenarios.\r
\r
--------------------------------------------------------------------------------\r
2. SET LITERAL SYNTAX: {elem1, elem2, ...}\r
--------------------------------------------------------------------------------\r
  • Syntax: \`my_set = {10, 20, 30, "Kolkata"}\`\r
  • Performance: Faster than set() when populating known static constants because\r
    the Python compiler directly emits the \`BUILD_SET\` bytecode instruction.\r
  • Requirement: Cannot be empty! \`{}\` creates an empty dictionary, not a set.\r
  • Elements must be hashable/immutable.\r
\r
--------------------------------------------------------------------------------\r
3. SET CONSTRUCTOR SYNTAX: set(iterable)\r
--------------------------------------------------------------------------------\r
  • Syntax: \`my_set = set(iterable_object)\`\r
  • Converts any valid Python iterable into a deduplicated set.\r
  • Examples:\r
      - Empty Set: \`empty = set()\` -> \`<class 'set'>\`\r
      - From String: \`set("banana")\` -> \`{'b', 'a', 'n'}\`\r
      - From List: \`set([1, 2, 2, 3])\` -> \`{1, 2, 3}\`\r
      - From Dict Keys: \`set({"a": 1, "b": 2})\` -> \`{'a', 'b'}\`\r
      - From Dict Values: \`set(d.values())\` -> \`{1, 2}\`\r
      - From Range: \`set(range(5))\` -> \`{0, 1, 2, 3, 4}\`\r
      - From Generator: \`set(x*x for x in range(5))\` -> \`{0, 1, 4, 9, 16}\`\r
\r
--------------------------------------------------------------------------------\r
4. BYTECODE & PERFORMANCE ANALYSIS\r
--------------------------------------------------------------------------------\r
When using a set literal:\r
  \`{1, 2, 3}\` compiles to:\r
    LOAD_CONST (1)\r
    LOAD_CONST (2)\r
    LOAD_CONST (3)\r
    BUILD_SET 3\r
\r
When using set():\r
  \`set([1, 2, 3])\` compiles to:\r
    LOAD_GLOBAL (set)\r
    LOAD_CONST (1, 2, 3)\r
    BUILD_LIST 3\r
    CALL_FUNCTION 1\r
\r
Result: Set literals \`{}\` execute roughly 2x-3x faster for fixed constants!\r
\r
--------------------------------------------------------------------------------\r
5. COMMON PITFALLS & GOTCHAS\r
--------------------------------------------------------------------------------\r
  [x] Gotcha 1: \`s = {}\` creates a DICTIONARY, not a set.\r
  [x] Gotcha 2: \`{[1, 2]}\` tries to put a list in a set literal -> TypeError.\r
  [x] Gotcha 3: \`set(100)\` raises TypeError: 'int' object is not iterable.\r
      (You must pass an iterable like \`set([100])\` or \`{100}\`).\r
\r
--------------------------------------------------------------------------------\r
6. SUMMARY BLUEPRINT & MASTER ADVICE\r
--------------------------------------------------------------------------------\r
  • Use \`{...}\` when writing hardcoded literal constants in source code.\r
  • Use \`set()\` when creating an empty set or transforming dynamic iterables.\r
  • Never pass unhashable containers (lists, dicts) as direct set members.\r
\r
================================================================================\r
               END OF STUDY NOTE • TOPIC 1: CREATING SETS\r
================================================================================\r
`,g=[{question:"What are the two primary methods to create a Set in Python, and how do they differ syntactically?",shortAnswer:"Set literal curly braces {} (e.g. {1, 2, 3}) and the type constructor set(iterable).",explanation:"Set literals use comma-separated elements enclosed in curly braces {1, 2, 3}. The set() constructor is a built-in callable that accepts any iterable (list, string, tuple, dict, range) and unpacks its elements into a set.",hint:"Think about literal brackets vs calling a function.",level:"basic",codeExample:`s1 = {10, 20, 30}       # Set literal
s2 = set([10, 20, 30])  # Set constructor`},{question:"Why does s = {} create a dictionary instead of an empty set?",shortAnswer:"Historical syntax precedence: dictionaries were added to Python before sets and claimed {}.",explanation:"When Python introduced sets in Python 2.4, the literal {} had already been defined as an empty dictionary since Python's inception. To avoid breaking existing codebases, {} remains an empty dict, and set() was designated for empty sets.",hint:"Recall backward compatibility in language design.",level:"basic",codeExample:`print(type({}))     # <class 'dict'>
print(type(set()))  # <class 'set'>`},{question:"What happens when you pass a single non-iterable integer to the set() constructor (e.g., set(100))?",shortAnswer:"It raises TypeError: 'int' object is not iterable.",explanation:"The set() constructor requires an iterable argument (an object that implements __iter__ or __getitem__). Since integers are non-iterable scalars, passing 100 directly triggers a TypeError. You must pass an iterable like set([100]) or use a literal {100}.",hint:"The constructor expects something it can loop over.",level:"basic",codeExample:`try:
    s = set(100)
except TypeError as e:
    print(e)  # 'int' object is not iterable`},{question:"What is the result of set('Barrackpore') and how many elements will it contain?",shortAnswer:"A set of unique characters: {'B', 'a', 'r', 'c', 'k', 'p', 'o', 'e'} with length 8.",explanation:"A string is an iterable sequence of characters. The set() constructor iterates through each character in 'Barrackpore' and discards duplicate letters ('r', 'a'). 'Barrackpore' has 11 letters total with 8 distinct characters.",hint:"Count distinct uppercase and lowercase letters individually.",level:"basic",codeExample:`s = set("Barrackpore")
print(s)
print("Length:", len(s))  # 8`},{question:"How does Python's bytecode differ when creating a set using literals vs the set() constructor?",shortAnswer:"Literals use the direct BUILD_SET opcode; constructor uses LOAD_GLOBAL (set) + CALL_FUNCTION.",explanation:"Set literals compile directly into the optimized BUILD_SET bytecode instruction, pushing values directly onto the stack. set([1, 2]) must look up the global 'set' name, build a list via BUILD_LIST, and perform a function call, making literals significantly faster.",hint:"Inspect bytecode using Python's dis module.",level:"expert",codeExample:`import dis
print("Literal bytecode:")
dis.dis("{1, 2, 3}")
print("
Constructor bytecode:")
dis.dis("set([1, 2, 3])")`},{question:"What elements are created when you pass a dictionary directly to set(my_dict)?",shortAnswer:"Only the dictionary's keys are extracted into the set.",explanation:"By default, iterating over a dictionary in Python yields its keys. Therefore, set(my_dict) creates a set containing the unique keys of the dictionary, ignoring values.",hint:"Remember what 'for k in my_dict' iterates over.",level:"moderate",codeExample:`prices = {"Pen": 20, "Book": 150, "Eraser": 10}
print(set(prices))  # {'Pen', 'Book', 'Eraser'}`},{question:"How can you create a set of all unique VALUES from a dictionary?",shortAnswer:"Pass dict.values() to the set() constructor: set(my_dict.values()).",explanation:"To extract values instead of keys, you pass the values view object returned by my_dict.values() to set(). All dictionary values must be immutable (hashable).",hint:"Use the .values() method on the dictionary.",level:"basic",codeExample:`marks = {"Susmita": 95, "Debangshu": 88, "Mamata": 95}
unique_scores = set(marks.values())
print(unique_scores)  # {88, 95}`},{question:"What is the difference between {(1, 2, 3)} and set((1, 2, 3))?",shortAnswer:"{(1, 2, 3)} creates a set containing 1 tuple element; set((1, 2, 3)) creates a set of 3 integer elements {1, 2, 3}.",explanation:"The literal {(1, 2, 3)} treats the tuple as a single hashable element inside the set (length 1). The constructor set((1, 2, 3)) iterates through the tuple, unpacking its individual integer components into {1, 2, 3} (length 3).",hint:"One unpacks the sequence; the other embeds the container.",level:"moderate",codeExample:`s_lit = {(1, 2, 3)}
print(s_lit, len(s_lit))      # {(1, 2, 3)}, len = 1

s_con = set((1, 2, 3))
print(s_con, len(s_con))      # {1, 2, 3}, len = 3`},{question:"Can you create a single-element set without a trailing comma?",shortAnswer:"Yes, {item} creates a single-element set. (Unlike tuples where (item,) requires a comma).",explanation:"Because curly braces with content are unambiguous in Python grammar, {42} immediately creates a set with one element. Tuples need a trailing comma (42,) because parentheses without commas are treated as mathematical grouping expressions.",hint:"Compare {42} with (42) vs (42,).",level:"basic",codeExample:`single_set = {42}
print(type(single_set))  # <class 'set'>

not_a_tuple = (42)
print(type(not_a_tuple))  # <class 'int'>`},{question:"What is the output of set(range(5, 0, -1))?",shortAnswer:"{1, 2, 3, 4, 5} (unordered representation of the generated range integers).",explanation:"The range(5, 0, -1) generates numbers 5, 4, 3, 2, 1. When passed into set(), all 5 integers are added into hash buckets, resulting in the set {1, 2, 3, 4, 5}.",hint:"Trace the sequence produced by range with negative step.",level:"basic",codeExample:`s = set(range(5, 0, -1))
print(s)  # {1, 2, 3, 4, 5}`},{question:"What happens if an iterable passed to set() contains an unhashable item (like a list)?",shortAnswer:"Python raises TypeError: unhashable type: 'list' during iteration.",explanation:"As set() unpacks the iterable and computes hash(item) for each element, encountering a mutable object (like a list or dict) raises a TypeError, terminating set construction.",hint:"Every element yielded by the iterable must be immutable.",level:"moderate",codeExample:`nested = [10, 20, [30, 40], 50]
try:
    s = set(nested)
except TypeError as e:
    print(e)  # unhashable type: 'list'`},{question:"How can you create a set from a generator expression?",shortAnswer:"Pass the generator expression inside set() or use set comprehension {expr for item in iterable}.",explanation:"Both set(x**2 for x in range(5)) and {x**2 for x in range(5)} create a set of squares {0, 1, 4, 9, 16}. The comprehension syntax is slightly more concise and direct.",hint:"Use curly braces with a for clause.",level:"moderate",codeExample:`s1 = set(x**2 for x in range(5))
s2 = {x**2 for x in range(5)}
print(s1 == s2)  # True`},{question:"What is the output of set(b'ABC')?",shortAnswer:"{65, 66, 67}, containing the integer ASCII byte values.",explanation:"Iterating over a bytes object yields individual byte values as integers (ord('A')=65, ord('B')=66, ord('C')=67). Therefore, set(b'ABC') produces {65, 66, 67}.",hint:"Bytes yield integer byte codes when iterated.",level:"expert",codeExample:`byte_set = set(b"ABC")
print(byte_set)  # {65, 66, 67}`},{question:"How do you create a set containing key-value pair tuples from a dictionary?",shortAnswer:"Pass dict.items() to set(): set(my_dict.items()).",explanation:"my_dict.items() returns (key, value) tuple views. Since tuples are immutable (assuming keys and values are hashable), set(my_dict.items()) produces a set of (key, value) tuples.",hint:"Use the .items() method to get tuple pairs.",level:"moderate",codeExample:`user_roles = {"Susmita": "Admin", "Debangshu": "Editor"}
pair_set = set(user_roles.items())
print(pair_set)  # {('Susmita', 'Admin'), ('Debangshu', 'Editor')}`},{question:"What is the result of creating a set literal with trailing comma: s = {1, 2, 3,}?",shortAnswer:"{1, 2, 3}, identical to without trailing comma (trailing commas are optional in Python collections).",explanation:"Python permits optional trailing commas across all collection literals (lists, tuples, dicts, sets) for multiline clean diff formatting in version control.",hint:"Python syntax allows trailing commas in collections.",level:"basic",codeExample:`s = {
    "Barrackpore",
    "Kolkata",
    "Ichapur",
}
print(len(s))  # 3`},{question:"Why does set(set([1, 2, 3])) not cause an error even though sets are unhashable?",shortAnswer:"Because set() iterates over the inner set's elements (which are hashable ints), rather than trying to store the set itself.",explanation:"The outer set() consumes the inner set as an iterable stream of integers 1, 2, 3, inserting each int into the new set. It does not attempt to store the inner set as a member.",hint:"Distinguish between iterating over a set vs inserting a set as an element.",level:"moderate",codeExample:`inner = {1, 2, 3}
outer = set(inner)  # Perfectly valid clone
print(outer)        # {1, 2, 3}`},{question:"How do you create a set of frozensets using literals and constructors?",shortAnswer:"Wrap inner collections with frozenset() inside outer set: {frozenset([1, 2]), frozenset([3, 4])}.",explanation:"Because frozenset objects are immutable and hashable, they can be safely stored as elements inside standard mutable sets.",hint:"Use frozenset for the nested elements.",level:"expert",codeExample:`set_of_sets = {frozenset({1, 2}), frozenset({3, 4})}
print(set_of_sets)
print(len(set_of_sets))  # 2`},{question:"What is the effect of passing an empty string, empty list, or empty tuple to set()?",shortAnswer:"All return an empty set: set().",explanation:"Any empty iterable yields zero items when iterated, causing set() to initialize and return an empty set object set().",hint:"Empty iterables produce zero elements.",level:"basic",codeExample:`print(set(""))   # set()
print(set([]))   # set()
print(set(()))   # set()`},{question:"What is the memory size difference between creating an empty set vs an empty list?",shortAnswer:"An empty set is significantly larger (~216-728 bytes) than an empty list (~56 bytes) due to preallocated hash table tables.",explanation:"An empty list only allocates a minimal array header. A set immediately allocates an 8-slot open-addressing hash table array to handle subsequent inserts efficiently without instant resizing.",hint:"Hash tables pre-allocate slots to avoid immediate collisions.",level:"expert",codeExample:`import sys
print("Empty List Size:", sys.getsizeof([]))      # ~56 bytes
print("Empty Set Size:", sys.getsizeof(set()))  # ~216 bytes`},{question:"What is the output of len(set([True, 1, 1.0, 1 + 0j])) and why?",shortAnswer:"1, because all four compare equal (==) and have identical hash values.",explanation:"In Python, True == 1 == 1.0 == (1+0j) and hash(True) == hash(1) == hash(1.0) == hash(1+0j). Since both equality and hash match, the set retains only the first element encountered.",hint:"Check numeric equality and hash values across types.",level:"expert",codeExample:`s = set([True, 1, 1.0, 1 + 0j])
print(s)       # {True}
print(len(s))  # 1`},{question:"Can you create a set from a custom generator function?",shortAnswer:"Yes, passing a generator function call to set() consumes all yielded values into a set.",explanation:"Any generator function that yields values is a valid iterable. set(my_gen()) will execute the generator until exhaustion and collect all yielded items into a deduplicated set.",hint:"Generator functions produce iterators.",level:"moderate",codeExample:`def fib_gen(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

fib_set = set(fib_gen(7))
print(fib_set)  # {0, 1, 2, 3, 5, 8}`},{question:"What is the difference between copy() method on a set vs passing a set to set()?",shortAnswer:"Both create a shallow copy of the set with identical performance and result.",explanation:"new_set = old_set.copy() and new_set = set(old_set) both construct a new independent set container containing references to the original set's elements.",hint:"Both perform shallow duplication.",level:"moderate",codeExample:`orig = {10, 20, 30}
cp1 = orig.copy()
cp2 = set(orig)
print(cp1 == cp2)  # True
print(cp1 is orig) # False`},{question:"What happens when you write set({'a', 'b', 'c'})?",shortAnswer:"It redundantly constructs a set literal and then constructs a new cloned set from it.",explanation:"The inner {'a', 'b', 'c'} builds a set literal. The outer set(...) consumes that set as an iterable and creates a second identical set. It works fine but performs redundant object creation.",hint:"Notice the nested set creation call.",level:"basic",codeExample:`s = set({'a', 'b', 'c'})
print(s)  # {'a', 'b', 'c'}`},{question:"How can you create a set of all vowels present in a user-provided paragraph?",shortAnswer:"Use set intersection or a set comprehension filtering against a vowel literal: {c.lower() for c in text if c.lower() in 'aeiou'}.",explanation:"Iterating through the string and filtering only characters that exist in 'aeiou' into a set comprehension extracts only the distinct vowels in the text.",hint:"Filter characters against 'aeiou'.",level:"basic",codeExample:`text = "Learn Python at Barrackpore"
vowels = {c.lower() for c in text if c.lower() in 'aeiou'}
print(vowels)  # {'a', 'e', 'o'}`},{question:"Why is set(('hello',)) a set with 1 string, while set('hello') has 4 characters?",shortAnswer:"('hello',) is a 1-element tuple containing the string; 'hello' is an iterable sequence of characters.",explanation:"set(('hello',)) iterates over a 1-element tuple, yielding the entire string 'hello' as a single member. set('hello') iterates over the string character-by-character, yielding 'h', 'e', 'l', 'o'.",hint:"Check what each outer iterable yields during iteration.",level:"moderate",codeExample:`print(set(('hello',)))  # {'hello'}
print(set('hello'))     # {'h', 'e', 'l', 'o'}`},{question:"What error occurs if you call set(None)?",shortAnswer:"TypeError: 'NoneType' object is not iterable.",explanation:"None does not implement the iteration protocol. Attempting to pass None directly to set() raises a TypeError. (Note that {None} works because it uses None as a literal element).",hint:"None is not an iterable collection.",level:"basic",codeExample:`try:
    s = set(None)
except TypeError as e:
    print(e)  # 'NoneType' object is not iterable

# Contrast with:
valid = {None}
print(valid)  # {None}`},{question:"How can you create a set of numbers from 100 to 1000 in steps of 50?",shortAnswer:"set(range(100, 1001, 50)) or {x for x in range(100, 1001, 50)}.",explanation:"The range(start, stop, step) generates 100, 150, 200, ..., 1000. Passing this into set() collects all step values into a set.",hint:"Use range with start, stop, and step arguments.",level:"basic",codeExample:`step_set = set(range(100, 1001, 50))
print(sorted(step_set))`},{question:"What is the time complexity of creating a set literal vs converting an N-element list using set()?",shortAnswer:"Both are O(N) where N is the number of elements, but literals have lower constant factor overhead.",explanation:"Both must hash and insert N elements into hash buckets, requiring O(N) total work. However, set literals avoid global name lookups and function call frame overhead, giving them a smaller constant factor (C).",hint:"Both insert N items, but literals use optimized opcodes.",level:"moderate",codeExample:"# Time: O(N) for both, but {1, 2, 3} is faster than set([1, 2, 3])"},{question:"What happens when you pass a file object to set(file_handle)?",shortAnswer:"It reads the entire file line by line and creates a set of unique text lines.",explanation:"Open file handles in Python are iterators that yield one line per iteration. set(file_handle) iterates through all lines, discarding duplicate lines and loading the unique lines into a set.",hint:"File objects iterate line by line.",level:"expert",codeExample:`# with open('data.txt') as f:
#     unique_lines = set(f)`},{question:"What is the best practice guideline for choosing between set literals and set() in production code?",shortAnswer:"Use set literals {...} for fixed static values; use set() for empty set creation and dynamic conversions.",explanation:"For constant sets (e.g. ALLOWED_ROLES = {'admin', 'editor'}), set literals are cleaner, more readable, and faster. For initial empty sets or converting runtime iterables (lists, generators, query results), use set().",hint:"Static constants -> literals {}; Dynamic iterables/empty -> set().",level:"moderate",codeExample:`# Good Practice:
ADMIN_ROLES = {"superadmin", "finance_admin"}  # Literal
active_sessions = set()                         # Constructor`}];function k(){const a=o.useRef([]),[i,l]=o.useState("syntax");o.useEffect(()=>{const s=new IntersectionObserver(n=>{n.forEach(c=>{c.isIntersecting&&c.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return a.current.forEach(n=>{n&&s.observe(n)}),()=>s.disconnect()},[]);const t=s=>{s&&!a.current.includes(s)&&a.current.push(s)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-emerald-500/30 selection:text-emerald-200",children:[e.jsx("style",{children:`
        .section-hidden {
          transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .section-visible {
          transform: translateY(0);
        }
      `}),e.jsxs("header",{ref:t,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-emerald-950/80 text-emerald-300 px-3 py-1 rounded-full border border-emerald-800/80 shadow-sm shadow-emerald-950/50",children:"Segment 2 • Module 002_006"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-sky-950/80 text-sky-300 px-3 py-1 rounded-full border border-sky-800/80 shadow-sm shadow-sky-950/50",children:"Topic 1"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Set Construction & Syntax"})]}),e.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:"Creating Sets: Literals vs Constructors"}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Mastering set literal syntax ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"{ ... }"}),", the built-in ",e.jsx("code",{className:"text-sky-400 font-mono",children:"set()"})," constructor, dynamic iterable conversions, and avoiding the dreaded empty dictionary trap."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ BUILD_SET Opcode Optimization"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔄 Iterable Unpacking"}),e.jsxs("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:["⚠️ ","{}"," vs set() Empty Trap"]}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🧩 Dict Keys/Values/Items"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🛣️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. Two Pathways to Set Creation"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["In Python, you have two complementary ways to instantiate a set object. Choosing the right one depends on whether you have ",e.jsx("strong",{className:"text-emerald-400",children:"static compile-time constants"})," or ",e.jsx("strong",{className:"text-sky-400",children:"dynamic runtime iterables"}),":"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5 my-6 not-prose",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/70 border border-emerald-800/60 shadow-lg shadow-emerald-950/30 transition-all duration-300 hover:scale-[1.01] hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-lg",children:[e.jsx("span",{children:"✨"})," Set Literal Syntax"]}),e.jsx("span",{className:"text-xs font-mono bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800",children:"Faster (BUILD_SET)"})]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-3",children:["Encloses comma-separated hashable elements in curly braces: ",e.jsx("code",{className:"font-mono text-emerald-300",children:"s = {10, 20, 30}"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400",children:"✓"})," Best for: Known constants, short configs, inline lookup sets."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/70 border border-sky-800/60 shadow-lg shadow-sky-950/30 transition-all duration-300 hover:scale-[1.01] hover:border-sky-500",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sky-400 font-bold text-lg",children:[e.jsx("span",{children:"🏗️"})," set() Constructor"]}),e.jsx("span",{className:"text-xs font-mono bg-sky-950 text-sky-300 px-2 py-0.5 rounded border border-sky-800",children:"Universal Adapter"})]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-3",children:["Calls the built-in type constructor on any iterable: ",e.jsx("code",{className:"font-mono text-sky-300",children:"s = set(iterable)"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-sky-400",children:"✓"})," Best for: Empty set creation (",e.jsx("code",{className:"text-sky-300",children:"set()"}),"), converting lists/strings/dicts/ranges."]})]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"🔍"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Set Construction Mechanics"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>l("syntax"),className:d("px-3 py-1.5 rounded-lg transition-all",i==="syntax"?"bg-emerald-900/50 text-emerald-300 border border-emerald-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Literal vs Constructor Flow"}),e.jsx("button",{onClick:()=>l("emptytrap"),className:d("px-3 py-1.5 rounded-lg transition-all",i==="emptytrap"?"bg-amber-900/50 text-amber-300 border border-amber-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"The Empty Set Anatomy"})]})]}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:i==="syntax"?e.jsxs("svg",{viewBox:"0 0 850 340",className:"w-full h-auto min-w-[650px] font-sans",children:[e.jsxs("text",{x:"30",y:"35",fill:"#34d399",fontSize:"14",fontWeight:"bold",children:["METHOD 1: SET LITERAL ","{ 'A', 'B', 'C' }"]}),e.jsx("rect",{x:"30",y:"55",width:"220",height:"50",rx:"8",fill:"#1e293b",stroke:"#059669",strokeWidth:"1.5"}),e.jsx("text",{x:"45",y:"85",fill:"#f8fafc",fontSize:"13",fontWeight:"bold",children:"{'Kolkata', 'Barrackpore'}"}),e.jsx("path",{d:"M 250 80 L 320 80",stroke:"#10b981",strokeWidth:"2",fill:"none"}),e.jsx("text",{x:"260",y:"72",fill:"#10b981",fontSize:"10",children:"BUILD_SET"}),e.jsx("rect",{x:"320",y:"55",width:"490",height:"50",rx:"8",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"340",y:"85",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"Direct Stack Allocation → Instant Set Object created!"}),e.jsx("text",{x:"30",y:"160",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:'METHOD 2: CONSTRUCTOR set("BANANA")'}),e.jsx("rect",{x:"30",y:"180",width:"220",height:"50",rx:"8",fill:"#1e293b",stroke:"#0284c7",strokeWidth:"1.5"}),e.jsx("text",{x:"45",y:"210",fill:"#f8fafc",fontSize:"13",fontWeight:"bold",children:'String "BANANA"'}),e.jsx("path",{d:"M 250 205 L 320 205",stroke:"#38bdf8",strokeWidth:"2",fill:"none"}),e.jsx("text",{x:"255",y:"197",fill:"#38bdf8",fontSize:"10",children:"Iterate & Hash"}),e.jsx("rect",{x:"320",y:"170",width:"490",height:"135",rx:"8",fill:"#0f172a",stroke:"#0284c7",strokeWidth:"1.5"}),e.jsx("text",{x:"340",y:"195",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",children:"Stream Unpacking Step-by-Step:"}),e.jsx("text",{x:"340",y:"220",fill:"#94a3b8",fontSize:"12",children:"'B' → Hash bucket created (1st item)"}),e.jsx("text",{x:"340",y:"240",fill:"#94a3b8",fontSize:"12",children:"'A' → Hash bucket created (2nd item)"}),e.jsx("text",{x:"340",y:"260",fill:"#94a3b8",fontSize:"12",children:"'N' → Hash bucket created (3rd item)"}),e.jsx("text",{x:"340",y:"280",fill:"#fca5a5",fontSize:"12",children:"'A', 'N', 'A' → Collisions discarded as duplicates!"}),e.jsxs("text",{x:"590",y:"280",fill:"#34d399",fontSize:"12",fontWeight:"bold",children:["Result: ",'{"B", "A", "N"}']})]}):e.jsxs("svg",{viewBox:"0 0 850 320",className:"w-full h-auto min-w-[650px] font-sans",children:[e.jsxs("text",{x:"30",y:"35",fill:"#f8fafc",fontSize:"15",fontWeight:"bold",children:["The Crucial Distinction: ","{}"," vs set()"]}),e.jsx("rect",{x:"30",y:"65",width:"380",height:"220",rx:"10",fill:"#1e293b",stroke:"#ef4444",strokeWidth:"2"}),e.jsxs("text",{x:"50",y:"95",fill:"#fca5a5",fontSize:"15",fontWeight:"bold",children:["x = ","{}","  (Empty Braces)"]}),e.jsx("rect",{x:"50",y:"115",width:"340",height:"40",rx:"6",fill:"#450a0a",border:"1",stroke:"#ef4444"}),e.jsx("text",{x:"65",y:"140",fill:"#fecaca",fontSize:"13",fontWeight:"bold",children:"Type: <class 'dict'> (DICTIONARY!)"}),e.jsx("text",{x:"50",y:"185",fill:"#cbd5e1",fontSize:"12",children:"• Does NOT create an empty set."}),e.jsx("text",{x:"50",y:"210",fill:"#cbd5e1",fontSize:"12",children:"• Creates a hash map expecting key:value pairs."}),e.jsx("text",{x:"50",y:"235",fill:"#fca5a5",fontSize:"12",fontWeight:"bold",children:"• Calling x.add(5) will crash with AttributeError!"}),e.jsx("rect",{x:"440",y:"65",width:"380",height:"220",rx:"10",fill:"#1e293b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"460",y:"95",fill:"#34d399",fontSize:"15",fontWeight:"bold",children:"x = set()  (Constructor)"}),e.jsx("rect",{x:"460",y:"115",width:"340",height:"40",rx:"6",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"475",y:"140",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"Type: <class 'set'> (TRUE SET!)"}),e.jsx("text",{x:"460",y:"185",fill:"#cbd5e1",fontSize:"12",children:"• The ONLY standard way to create an empty set."}),e.jsx("text",{x:"460",y:"210",fill:"#cbd5e1",fontSize:"12",children:"• Has len(x) == 0."}),e.jsx("text",{x:"460",y:"235",fill:"#34d399",fontSize:"12",fontWeight:"bold",children:"• Ready for x.add(5), x.update([...]) operations!"})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 space-y-8",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Python Code Labs"})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab A: Set Literal Syntax & Heterogeneous Elements"}),e.jsx(r,{fileModule:p,title:"create_literal_demo.py",highlightLines:[6,11,15,20]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab B: Converting Strings, Tuples, Lists & Ranges with set()"}),e.jsx(r,{fileModule:u,title:"create_constructor_demo.py",highlightLines:[7,12,18,23]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab C: The Empty Set Trap (isinstance & Type Checks)"}),e.jsx(r,{fileModule:b,title:"empty_set_demo.py",highlightLines:[7,13,18]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab D: Dictionary Keys, Values, Items & Generator Conversions"}),e.jsx(r,{fileModule:y,title:"iterable_conversion_demo.py",highlightLines:[14,18,22,26]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🌐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Real-World Applications in Indian Industry"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"💰"})," 1. Course Fee Tier Consolidation"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["When auditing 50 courses across ",e.jsx("strong",{children:"Barrackpore"})," and ",e.jsx("strong",{children:"Jadavpur"}),", calling ",e.jsx("code",{className:"font-mono text-emerald-400",children:"set(course_fees.values())"})," extracts distinct pricing tiers (e.g. ",e.jsx("strong",{className:"text-emerald-300",children:"₹3,500, ₹4,500, ₹6,500"}),") for fee structure planning."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"📊"})," 2. SQL Query Record Deduplication"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Backend microservices querying thousands of transaction tuples from MySQL convert database cursor rows to sets ",e.jsx("code",{className:"font-mono text-sky-400",children:"set(cursor.fetchall())"})," to eliminate duplicate order payloads before invoice processing."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🔤"})," 3. Unique Character Vocabulary in NLP"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Natural language processing engines pass multilingual text corpora into ",e.jsx("code",{className:"font-mono text-purple-400",children:"set(text)"})," to build distinct token dictionaries and alphabet character sets in Bengali and English."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"⚡"})," 4. Config Whitelist Initialization"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Microservices initialize static whitelists using set literals ",e.jsxs("code",{className:"font-mono text-amber-400",children:["ALLOWED_HOSTS = ","{'api.codernaccotax.co.in', 'auth.codernaccotax.co.in'}"]})," at boot time for zero-overhead validation."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Pitfalls, Traps & Compiler Quirks"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 1: Passing Non-Iterable to set()"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Writing ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"set(500)"})," raises ",e.jsx("code",{className:"text-rose-400 font-bold",children:"TypeError: 'int' object is not iterable"}),". Use ",e.jsx("code",{className:"font-mono text-slate-200",children:"{500}"})," or ",e.jsx("code",{className:"font-mono text-slate-200",children:"set([500])"}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 2: Nested Mutable Literals"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:[e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"{ {1, 2}, {3, 4} }"})," fails because sets are unhashable. Wrap nested sets with ",e.jsx("code",{className:"font-mono text-emerald-400",children:"frozenset()"}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 3: Dict Values Extraction Omission"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:[e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"set(my_dict)"})," takes keys only. If you need unique values, explicitly specify ",e.jsx("code",{className:"font-mono text-emerald-400",children:"set(my_dict.values())"}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 4: Tuple String Packing Confusion"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:[e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"set('hello')"})," gives 4 characters, while ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"set(('hello',))"})," preserves the 1 complete string."]})]})]})]}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(h,{content:f,title:"Topic 1: Creating Sets Study Guide",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Study Note",downloadFileName:"topic1_creating_sets_note.txt"})}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(m,{title:"Topic 1 • Creating Sets: Master Viva & Review Questions",questions:g})}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(x,{note:"Teacher's Tip: Use set literals {...} whenever you define constant lookups in your code—they compile directly to the lightning-fast BUILD_SET opcode. When Debangshu, Susmita, and Mamata convert runtime data from files or databases in Barrackpore and Kolkata, pass the list or generator into set()!"})})]})]})}export{k as default};
