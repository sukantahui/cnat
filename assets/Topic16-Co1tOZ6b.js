import{b as o,j as e,bg as c}from"./vendor-react-core-Doz9nIC6.js";import{P as i}from"./PythonFileLoader-hCi5osN-.js";import{P as p}from"./PlainTextPrint-C08xhKA4.js";import{F as m}from"./FAQTemplate-CkSqDH4B.js";import{T as u}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const h=`# ====================================================================\r
# Topic 16: Sets vs Lists vs Tuples\r
# File: data_structures_comparison.py\r
# Description: Feature-by-feature side-by-side comparison of core containers\r
# ====================================================================\r
\r
# 1. LIST: Mutable, Ordered, Allows Duplicates, Indexable\r
student_list = ["Susmita", "Debangshu", "Susmita", "Mamata"]\r
student_list.append("Abhronila")\r
student_list[0] = "Susmita Roy"\r
print("1. LIST:", student_list)\r
print("   Index 0:", student_list[0])\r
print("   Allows Duplicates?", len(student_list) != len(set(student_list)))\r
\r
# 2. TUPLE: Immutable, Ordered, Allows Duplicates, Indexable, Hashable\r
student_tuple = ("Susmita", "Debangshu", "Susmita", "Mamata")\r
print("\\n2. TUPLE:", student_tuple)\r
print("   Index 1:", student_tuple[1])\r
print("   Hashable?", isinstance(hash(student_tuple), int))\r
\r
# 3. SET: Mutable, Unordered, NO Duplicates, NOT Indexable, Set Algebra\r
student_set = {"Susmita", "Debangshu", "Susmita", "Mamata"}\r
student_set.add("Abhronila")\r
print("\\n3. SET:", student_set)\r
print("   Duplicates Collapsed?", len(student_set) == 3)\r
print("   Membership Test ('Mamata' in student_set):", "Mamata" in student_set)\r
`,x=`# ====================================================================\r
# Topic 16: Sets vs Lists vs Tuples\r
# File: memory_and_lookup_benchmark.py\r
# Description: Memory footprint and membership lookup benchmarking\r
# ====================================================================\r
\r
import sys\r
import time\r
\r
sample_data = list(range(100000))\r
sample_tuple = tuple(sample_data)\r
sample_set = set(sample_data)\r
\r
# 1. Memory Overhead Comparison (in bytes)\r
list_bytes = sys.getsizeof(sample_data)\r
tuple_bytes = sys.getsizeof(sample_tuple)\r
set_bytes = sys.getsizeof(sample_set)\r
\r
print("--- Memory Footprint for 100,000 Integers ---")\r
print(f"Tuple Size: {tuple_bytes:,} bytes (Most Compact)")\r
print(f"List Size:  {list_bytes:,} bytes (~{list_bytes/tuple_bytes:.2f}x tuple)")\r
print(f"Set Size:   {set_bytes:,} bytes (~{set_bytes/tuple_bytes:.2f}x tuple - Hash Table Overhead)")\r
\r
# 2. Membership Testing Benchmark ('in' operator)\r
target_value = 99999\r
\r
# List Lookup\r
start = time.perf_counter()\r
for _ in range(1000):\r
    _ = target_value in sample_data\r
list_time = time.perf_counter() - start\r
\r
# Set Lookup\r
start = time.perf_counter()\r
for _ in range(1000):\r
    _ = target_value in sample_set\r
set_time = time.perf_counter() - start\r
\r
print(f"\\n--- 1,000 Membership Lookups Time ---")\r
print(f"List Lookup Time (O(N)): {list_time:.6f} seconds")\r
print(f"Set Lookup Time (O(1)):  {set_time:.6f} seconds")\r
print(f"Speedup Factor:          {list_time / set_time:.1f}x FASTER with Sets!")\r
`,f=`# ====================================================================\r
# Topic 16: Sets vs Lists vs Tuples\r
# File: decision_matrix_flow.py\r
# Description: Architectural Decision Matrix: When to choose which container\r
# ====================================================================\r
\r
def choose_container(need_order: bool, need_mutation: bool, need_uniqueness: bool, need_fast_lookup: bool):\r
    """Architectural decision helper function."""\r
    if need_uniqueness or need_fast_lookup:\r
        return "SET (or FROZENSET if immutability/dict-key is required)"\r
    if not need_mutation and need_order:\r
        return "TUPLE (Fastest memory, immutable, indexable)"\r
    if need_order and need_mutation:\r
        return "LIST (General-purpose sequential buffer)"\r
\r
# Scenario 1: Allowed HTTP Methods Whitelist -> Immutable, fast lookup\r
print("1. Allowed HTTP Methods Whitelist ->", choose_container(need_order=False, need_mutation=False, need_uniqueness=True, need_fast_lookup=True))\r
\r
# Scenario 2: Fixed Geographic GPS Coordinates (Lat, Long) in Barrackpore -> Immutable, ordered\r
print("2. GPS Coordinates (22.76, 88.36)  ->", choose_container(need_order=True, need_mutation=False, need_uniqueness=False, need_fast_lookup=False))\r
\r
# Scenario 3: Real-time User Activity Feed -> Mutable, ordered timeline\r
print("3. Activity Timeline Feed         ->", choose_container(need_order=True, need_mutation=True, need_uniqueness=False, need_fast_lookup=False))\r
`,b=`# ====================================================================\r
# Topic 16: Sets vs Lists vs Tuples\r
# File: ecommerce_order_processing.py\r
# Description: Real-World E-Commerce Pipeline using Sets, Lists, and Tuples in ₹\r
# ====================================================================\r
\r
# 1. TUPLE: Immutable product specification record (SKU, Title, Unit Price in ₹)\r
PRODUCT_A = ("SKU-BP-101", "Python Mastery Pro", 4500)\r
PRODUCT_B = ("SKU-BP-102", "React & Tailwind Course", 3500)\r
PRODUCT_C = ("SKU-BP-103", "Fullstack AI Bootcamp", 8000)\r
\r
# 2. SET: Unique active promotional coupon codes (O(1) fast validation)\r
ACTIVE_PROMO_CODES = {"DIWALI2026", "PUJA500", "TECHBENGAL"}\r
\r
# 3. LIST: Dynamic mutable customer shopping cart sequence\r
customer_cart = [\r
    PRODUCT_A,\r
    PRODUCT_B,\r
    PRODUCT_A  # Student accidentally added duplicate course\r
]\r
\r
print("--- Initial Shopping Cart Contents ---")\r
for sku, title, price in customer_cart:\r
    print(f"  • [{sku}] {title:30} - ₹{price:,}")\r
\r
# Deduplicating the cart courses using a set of tuples\r
unique_cart_items = list(dict.fromkeys(customer_cart))\r
print(f"\\n--- Clean Cart ({len(unique_cart_items)} items) ---")\r
subtotal = sum(price for _, _, price in unique_cart_items)\r
print(f"Subtotal: ₹{subtotal:,}")\r
\r
# Promo Code Verification using set 'in' operator in O(1)\r
entered_code = "PUJA500"\r
if entered_code in ACTIVE_PROMO_CODES:\r
    discount = 500\r
    final_total = subtotal - discount\r
    print(f"✓ Promo Applied ({entered_code}): -₹{discount}")\r
    print(f"Final Payable Amount: ₹{final_total:,}")\r
`,y=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
                PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_006: SETS\r
                      TOPIC 16: SETS VS LISTS VS TUPLES\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. THE MASTER COMPARISON MATRIX\r
--------------------------------------------------------------------------------\r
  Feature               | List (list)           | Tuple (tuple)         | Set (set)\r
  ----------------------+-----------------------+-----------------------+-----------------------\r
  Syntax Literal        | \`[1, 2, 3]\`           | \`(1, 2, 3)\`           | \`{1, 2, 3}\`\r
  Mutability            | Mutable               | Immutable             | Mutable\r
  Ordering              | Ordered (Insertion)   | Ordered (Insertion)   | Unordered (Arbitrary)\r
  Duplicates Allowed?   | YES                   | YES                   | NO (Enforces unique)\r
  Indexing & Slicing    | YES (\`data[0]\`)       | YES (\`data[0]\`)       | NO (TypeError)\r
  Membership 'in' Time  | O(N) Linear Scan      | O(N) Linear Scan      | O(1) Hash Table Lookup\r
  Memory Efficiency     | Moderate (~800 KB/100K)| Highest (~800 KB/100K)| Lowest (~8 MB/100K)\r
  Hashable (Dict Key)?  | NO                    | YES (if items hashable)| NO (frozenset YES)\r
  Math Set Operations   | NO                    | NO                    | YES (|, &, -, ^, etc.)\r
\r
--------------------------------------------------------------------------------\r
2. WHEN TO CHOOSE WHICH CONTAINER\r
--------------------------------------------------------------------------------\r
  • Choose TUPLE when:\r
    - Data represents a fixed heterogeneous record (e.g. \`(id, name, price)\`).\r
    - Data should be protected against accidental mutation.\r
    - You need a hashable key for a dictionary.\r
    - Maximum memory compactness and construction speed are critical.\r
\r
  • Choose LIST when:\r
    - Data represents a homogeneous collection that changes size dynamically.\r
    - Element sequence/ordering must be preserved.\r
    - Duplicate entries are valid and meaningful (e.g. event stream).\r
    - You need index-based random access (\`items[i]\`).\r
\r
  • Choose SET when:\r
    - You need to enforce absolute uniqueness (zero duplicates).\r
    - You perform frequent membership checks (\`if item in container\`).\r
    - You need mathematical set algebra (Union, Intersection, Difference).\r
    - Memory overhead is acceptable in exchange for O(1) lookup speed.\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 16: SETS VS LISTS VS TUPLES\r
================================================================================\r
`,g=[{question:"What are the core differences between a list, a tuple, and a set in Python?",shortAnswer:"A list is mutable and ordered with duplicates; a tuple is immutable and ordered with duplicates; a set is mutable and unordered with unique elements.",explanation:"Lists are dynamic arrays, tuples are fixed immutable sequences, and sets are hash table collections enforcing uniqueness and fast O(1) lookups.",hint:"Think in terms of Mutability, Ordering, and Uniqueness.",level:"basic",codeExample:`l = [1, 2, 2]  # List: [1, 2, 2]
t = (1, 2, 2)  # Tuple: (1, 2, 2)
s = {1, 2, 2}  # Set: {1, 2}`},{question:"Why do sets consume significantly more RAM than lists or tuples of the same length?",shortAnswer:"Sets store an internal sparse hash table with hash codes, bucket pointers, and excess capacity buffers to prevent hash collisions.",explanation:"While lists and tuples store compact contiguous arrays of object pointers, sets maintain open-addressing hash buckets (~4-8x larger memory footprint).",hint:"Hash tables require extra bucket space and collision metadata.",level:"expert",codeExample:`import sys
data = list(range(1000))
print(sys.getsizeof(tuple(data)))  # ~8,040 bytes
print(sys.getsizeof(set(data)))    # ~32,984 bytes`},{question:"Which container provides O(1) average time complexity for membership testing ('in' operator)?",shortAnswer:"Set (and Dictionary); lists and tuples require O(N) linear scans.",explanation:"Sets compute the element's hash and jump directly to the target bucket in O(1) time. Lists and tuples must check elements one by one from index 0 to N-1.",hint:"Set uses hash lookups in O(1).",level:"basic",codeExample:`# Set: O(1) average lookup
# List/Tuple: O(N) worst case lookup`},{question:"Can a tuple be used as a dictionary key, and can a list or set be used as a dictionary key?",shortAnswer:"Tuples can be used as dict keys (if all their elements are hashable); lists and sets cannot because they are mutable.",explanation:"Dictionary keys require a stable hash code. Lists and sets raise TypeError: unhashable type. (frozenset can be used as a dict key).",hint:"Only hashable, immutable containers can be dictionary keys.",level:"basic",codeExample:`d = {}
d[(1, 2)] = "Tuple Key OK"     # Valid!
# d[[1, 2]] = "List Key"       # TypeError
# d[{1, 2}] = "Set Key"        # TypeError`},{question:"Why can you index and slice lists and tuples (e.g. data[0]), but cannot index or slice sets?",shortAnswer:"Lists and tuples are ordered sequential arrays with integer indices; sets are unordered hash tables with no concept of position or index.",explanation:"Because elements in a set are organized by hash codes into buckets, indexing a set raises TypeError: 'set' object is not subscriptable.",hint:"Sets do not have positional indices.",level:"basic",codeExample:`l = [10, 20]; print(l[0])  # 10
s = {10, 20}
# print(s[0])              # TypeError: 'set' object is not subscriptable`},{question:"When should you choose a tuple over a list in real-world application architecture?",shortAnswer:"When data represents a fixed record with known fields (e.g., GPS coordinates, RGB colors, database rows) that should never be modified at runtime.",explanation:"Tuples provide immutability guarantees, prevent accidental data corruption, use less RAM, and can be used as dictionary keys.",hint:"Use tuples for fixed, immutable records.",level:"moderate",codeExample:"GPS_LOCATION = (22.76, 88.36)  # Barrackpore coordinates (Immutable)"},{question:"When should you choose a set over a list?",shortAnswer:"When you need to enforce uniqueness, perform fast membership tests ('in'), or compute mathematical operations (union, intersection).",explanation:"Sets excel at finding commonalities, differences, and preventing duplicates with instantaneous lookup speed.",hint:"Use sets for uniqueness and fast membership testing.",level:"basic",codeExample:`ALLOWED_PERMS = {"READ", "WRITE", "ADMIN"}
if req_perm in ALLOWED_PERMS:  # O(1) Instant Check!
    pass`},{question:"What is the result of adding duplicate elements to a list vs a tuple vs a set?",shortAnswer:"Lists and tuples retain every duplicate element; sets silently collapse duplicates to retain only one instance.",explanation:"Lists and tuples preserve full multiplicity; sets enforce the mathematical definition of unique elements.",hint:"Only sets discard duplicates.",level:"basic",codeExample:`print(len([1, 1, 1]))  # 3
print(len((1, 1, 1)))  # 3
print(len({1, 1, 1}))  # 1`},{question:"Can a set contain a tuple as an element?",shortAnswer:"Yes, because tuples are immutable and hashable (provided the tuple only contains hashable items).",explanation:"A tuple of hashable items has a valid __hash__() code, making it fully legal as a set member.",hint:"Hashable tuples are valid set elements.",level:"basic",codeExample:`point_set = {(0, 0), (1, 2), (3, 4)}
print(len(point_set))  # 3`},{question:"Can a set contain a list as an element?",shortAnswer:"No, it raises TypeError: unhashable type: 'list'.",explanation:"Lists are mutable and unhashable, so they cannot be inserted into a set.",hint:"Lists cannot be set elements.",level:"basic",codeExample:`try:
    s = {[1, 2]}
except TypeError as e:
    print(e)  # unhashable type: 'list'`},{question:"How do lists, tuples, and sets compare in terms of element insertion speed?",shortAnswer:"list.append() and set.add() are O(1) amortized; tuples are immutable and require allocating an entirely new tuple (O(N)).",explanation:"Mutating dynamic arrays and hash tables is O(1); appending to a tuple creates a brand new copy in memory.",hint:"Tuples cannot be mutated; appending to them re-allocates.",level:"moderate",codeExample:`t = (1, 2)
t = t + (3,)  # Allocates a new 3-element tuple in memory!`},{question:"What happens if you convert a set to a list and back to a set: set(list(my_set)) == my_set?",shortAnswer:"True (the resulting set is equal in elements to the original set).",explanation:"Set equality compares distinct members, which remain unchanged through the conversion cycle.",hint:"Element contents remain identical.",level:"basic",codeExample:`s = {10, 20, 30}
print(set(list(s)) == s)  # True`},{question:"What is the memory size difference between an empty tuple (), empty list [], and empty set set()?",shortAnswer:"Empty tuple: ~40 bytes; empty list: ~56 bytes; empty set: ~216 bytes in 64-bit CPython.",explanation:"The empty set pre-allocates an 8-bucket hash table structure immediately upon creation.",hint:"Empty set starts with an 8-bucket hash table.",level:"expert",codeExample:`import sys
print(sys.getsizeof(()))      # 40 bytes
print(sys.getsizeof([]))      # 56 bytes
print(sys.getsizeof(set()))   # 216 bytes`},{question:"Which of the three containers supports sorting with the .sort() in-place method?",shortAnswer:"Only list supports .sort(); tuples and sets do not have an in-place .sort() method.",explanation:"Tuples are immutable (cannot be sorted in place); sets are unordered hash tables (ordering has no meaning). To sort them, use the built-in sorted() function.",hint:"Only mutable lists have .sort().",level:"basic",codeExample:`l = [3, 1, 2]; l.sort(); print(l)  # [1, 2, 3]
s = {3, 1, 2}
# s.sort()  # AttributeError!`},{question:"What does the sorted() function return when passed a set or a tuple?",shortAnswer:"It always returns a brand new sorted list.",explanation:"sorted() consumes any iterable and returns a new list of ordered elements.",hint:"sorted() always returns a list.",level:"basic",codeExample:"print(type(sorted({3, 1, 2})))  # <class 'list'>"},{question:"How do you count occurrences of an item in a list vs a tuple vs a set?",shortAnswer:"Lists and tuples use .count(x); sets return 1 if x in s else 0 (or simply x in s).",explanation:"Because set elements are strictly unique, an element either occurs exactly 1 time or 0 times.",hint:"Sets only hold 0 or 1 instance of any item.",level:"basic",codeExample:`l = [1, 1, 2]; print(l.count(1))  # 2
s = {1, 1, 2}; print(1 in s)     # True (Exactly 1)`},{question:"Can list and tuple concatenate using the + operator: list + tuple?",shortAnswer:"No, Python raises TypeError: can only concatenate list (not 'tuple') to list.",explanation:"The + concatenation operator requires operands to be of the exact same type.",hint:"Concatenation requires matching container types.",level:"basic",codeExample:`# [1, 2] + (3, 4)  # TypeError
res = [1, 2] + list((3, 4))  # Valid!`},{question:"What is the output of: (1, 2) * 2 vs [1, 2] * 2 vs {1, 2} * 2?",shortAnswer:"(1, 2)*2 -> (1, 2, 1, 2); [1, 2]*2 -> [1, 2, 1, 2]; {1, 2}*2 raises TypeError: unsupported operand type for *.",explanation:"Sequences support multiplication for repetition; sets do not support multiplication because sets cannot hold duplicates.",hint:"Sets do not support repetition multiplication.",level:"moderate",codeExample:`print((1, 2) * 2)  # (1, 2, 1, 2)
print([1, 2] * 2)  # [1, 2, 1, 2]
# {1, 2} * 2       # TypeError`},{question:"How do you reverse the elements in a list vs a tuple vs a set?",shortAnswer:"Lists: list.reverse() or list[::-1]; Tuples: tuple[::-1]; Sets: cannot be reversed (unordered).",explanation:"Reversing requires a sequence with defined positions. Because sets have no positional order, reversing a set is meaningless.",hint:"Sets have no order to reverse.",level:"basic",codeExample:`l = [1, 2, 3]; print(l[::-1])  # [3, 2, 1]
t = (1, 2, 3); print(t[::-1])  # (3, 2, 1)`},{question:"Why does Python allocate tuples as single contiguous memory blocks with zero over-allocation?",shortAnswer:"Because tuples are immutable and will never grow, CPython allocates exactly the exact number of slots needed.",explanation:"Lists must over-allocate spare capacity slots to support efficient O(1) appends. Tuples need no spare capacity.",hint:"Tuples never grow, so they need no over-allocation.",level:"expert",codeExample:"# Tuples have zero spare capacity slots"},{question:"How do you choose between storing HTTP headers in a list of tuples vs a dictionary vs a set?",shortAnswer:"Use a list of tuples [('Header', 'Val')] if duplicate headers are allowed; a dict {'Header': 'Val'} for standard fast lookup; and a set for header name validation.",explanation:"HTTP allows multiple 'Set-Cookie' headers with identical keys, which a standard dictionary would overwrite. Lists of tuples preserve duplicates.",hint:"List of tuples preserves multiple identical header keys.",level:"expert",codeExample:'headers = [("Set-Cookie", "session=1"), ("Set-Cookie", "theme=dark")]'},{question:"What is the output of: isinstance({1, 2}, collections.abc.Sequence)?",shortAnswer:"False, because set is a Collection/Set, not a Sequence (no indexable order).",explanation:"Lists and tuples inherit from Sequence; set inherits from Set and Collection.",hint:"Sets are not sequences.",level:"expert",codeExample:`from collections.abc import Sequence, Set
print(isinstance([1, 2], Sequence))  # True
print(isinstance((1, 2), Sequence))  # True
print(isinstance({1, 2}, Sequence))  # False
print(isinstance({1, 2}, Set))       # True`},{question:"How can you unpack all three containers into a function call: func(*list), func(*tuple), func(*set)?",shortAnswer:"All three containers support * argument unpacking into function parameters.",explanation:"Because list, tuple, and set all implement the iterable protocol (__iter__), the * unpacking operator works on all of them.",hint:"All three support * unpacking.",level:"basic",codeExample:`def add(a, b):
    return a + b
print(add(*[10, 20]))  # 30
print(add(*(10, 20)))  # 30
print(add(*{10, 20}))  # 30`},{question:"What is the time complexity of deleting an element from a list vs a set?",shortAnswer:"Deleting from a list by value (list.remove(x)) or index (del list[i]) is O(N); deleting from a set (set.remove(x)) is O(1).",explanation:"Deleting from a list requires scanning to find the element and then shifting all subsequent array pointers. Deleting from a set marks the hash bucket as dummy in O(1) time.",hint:"List delete requires shifting elements (O(N)); set delete is O(1).",level:"expert",codeExample:`# list.remove(x) -> O(N)
# set.remove(x)  -> O(1)`},{question:"Can you create a list comprehension, a tuple comprehension, and a set comprehension with identical syntax?",shortAnswer:"List comp: [x for x in data]; Set comp: {x for x in data}; (x for x in data) creates a generator, not a tuple (must write tuple(x for x in data)).",explanation:"(x for x in data) generates a generator object. You must explicitly pass it to tuple() to create a tuple.",hint:"(...) creates a generator, not a tuple comprehension.",level:"moderate",codeExample:`l = [x for x in range(3)]        # List
s = {x for x in range(3)}        # Set
t = tuple(x for x in range(3))   # Tuple (from generator)`},{question:"What is the result of: {1, 2} == [1, 2]?",shortAnswer:"False, because Python never equates objects of different container types.",explanation:"Different container classes compare unequal under ==.",hint:"Different container types compare unequal.",level:"basic",codeExample:`print({1, 2} == [1, 2])  # False
print([1, 2] == (1, 2))  # False`},{question:"How do you combine multiple items from a list, a tuple, and a set into a single unique set?",shortAnswer:"set(my_list) | set(my_tuple) | my_set or my_set.union(my_list, my_tuple).",explanation:"set.union() accepts multiple mixed iterables and unifies them in O(N) time.",hint:"Use set.union() on mixed iterables.",level:"basic",codeExample:`l, t, s = [1, 2], (2, 3), {3, 4}
print(s.union(l, t))  # {1, 2, 3, 4}`},{question:"Why does Python cache small integers (-5 to 256) and small tuples in internal freelists?",shortAnswer:"To optimize memory allocation and garbage collection for frequently constructed immutable objects.",explanation:"Because tuples are immutable, CPython recycles empty and small tuple memory blocks instantly.",hint:"Immutable objects can be safely cached and reused.",level:"expert",codeExample:"# CPython optimizes tuple memory allocation via freelists"},{question:"How do lists, tuples, and sets cooperate in a real-world e-commerce checkout system in West Bengal?",shortAnswer:"Tuples represent immutable product catalog items (SKU, title, ₹ price); Lists manage the dynamic shopping cart sequence; and Sets store active promo coupon codes for O(1) validation.",explanation:"Composing data structures based on their individual strengths creates high-performance, maintainable software architectures.",hint:"Tuples for fixed records, Lists for shopping carts, Sets for promo codes.",level:"basic",codeExample:`# Tuple: ITEM = ('SKU1', 'Course', 4500)
# List:  cart = [ITEM, ITEM2]
# Set:   PROMOS = {'DIWALI', 'PUJA500'}`},{question:"What is the master golden rule for container selection in Python?",shortAnswer:"Default to Tuples for fixed records, Lists for ordered sequences with duplicates, and Sets for uniqueness and O(1) membership lookups.",explanation:"Selecting the correct container at architecture time eliminates performance bottlenecks and bugs before they start.",hint:"Tuples: Records | Lists: Sequences | Sets: Uniqueness & Lookups.",level:"basic",codeExample:`# Summary Decision Rule:
# Fixed Record   -> Tuple (lat, lon)
# Ordered Stream -> List [event1, event2]
# Fast Lookup    -> Set {'admin', 'editor'}`}];function E(){const r=o.useRef([]),[a,l]=o.useState("grid");o.useEffect(()=>{const s=new IntersectionObserver(n=>{n.forEach(d=>{d.isIntersecting&&d.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return r.current.forEach(n=>{n&&s.observe(n)}),()=>s.disconnect()},[]);const t=s=>{s&&!r.current.includes(s)&&r.current.push(s)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-emerald-500/30 selection:text-emerald-200",children:[e.jsx("style",{children:`
        .section-hidden {
          transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .section-visible {
          transform: translateY(0);
        }
      `}),e.jsxs("header",{ref:t,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-emerald-950/80 text-emerald-300 px-3 py-1 rounded-full border border-emerald-800/80 shadow-sm shadow-emerald-950/50",children:"Segment 2 • Module 002_006"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-sky-950/80 text-sky-300 px-3 py-1 rounded-full border border-sky-800/80 shadow-sm shadow-sky-950/50",children:"Topic 16"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Architectural Container Selection"})]}),e.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:"Sets vs Lists vs Tuples"}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Mastering Python's core data containers: in-depth comparative analysis across mutability, ordering, duplicates, ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"O(1)"})," lookup speed, and memory footprints."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📋 Dynamic Array: List"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔒 Immutable Record: Tuple"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ Hash Set: Set"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📊 Decision Matrix Guide"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚖️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Tri-Container Architecture"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"Each built-in Python container is engineered for a specific data access pattern:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/70 border border-sky-800/60 shadow-lg shadow-sky-950/30 transition-all duration-300 hover:border-sky-500",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sky-400 font-bold text-lg",children:[e.jsx("span",{children:"1."})," List [ ]"]}),e.jsx("span",{className:"text-xs font-mono bg-sky-950 text-sky-300 px-2 py-0.5 rounded border border-sky-800",children:"Dynamic Array"})]}),e.jsx("p",{className:"text-sm text-slate-300 mb-2",children:"Mutable sequence allowing duplicates."}),e.jsx("div",{className:"text-xs font-mono text-sky-300 bg-slate-900 p-2 rounded",children:"Indexable • O(N) Lookup • General"})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/70 border border-purple-800/60 shadow-lg shadow-purple-950/30 transition-all duration-300 hover:border-purple-500",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-lg",children:[e.jsx("span",{children:"2."})," Tuple ( )"]}),e.jsx("span",{className:"text-xs font-mono bg-purple-950 text-purple-300 px-2 py-0.5 rounded border border-purple-800",children:"Fixed Record"})]}),e.jsx("p",{className:"text-sm text-slate-300 mb-2",children:"Immutable sequence with lowest RAM footprint."}),e.jsx("div",{className:"text-xs font-mono text-purple-300 bg-slate-900 p-2 rounded",children:"Hashable • Indexable • Compact"})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/70 border border-emerald-800/60 shadow-lg shadow-emerald-950/30 transition-all duration-300 hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-lg",children:[e.jsx("span",{children:"3."})," Set ","{ }"]}),e.jsx("span",{className:"text-xs font-mono bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800",children:"Hash Table"})]}),e.jsx("p",{className:"text-sm text-slate-300 mb-2",children:"Mutable collection of strictly unique elements."}),e.jsx("div",{className:"text-xs font-mono text-emerald-300 bg-slate-900 p-2 rounded",children:"O(1) Lookup • Unordered • Set Math"})]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Memory Footprint & Lookup Performance"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>l("grid"),className:c("px-3 py-1.5 rounded-lg transition-all",a==="grid"?"bg-emerald-900/50 text-emerald-300 border border-emerald-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"9-Dimensional Comparison Grid"}),e.jsx("button",{onClick:()=>l("speedmem"),className:c("px-3 py-1.5 rounded-lg transition-all",a==="speedmem"?"bg-sky-900/50 text-sky-300 border border-sky-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Speed vs Memory Spectrum"})]})]}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:a==="grid"?e.jsxs("svg",{viewBox:"0 0 850 320",className:"w-full h-auto min-w-[650px] font-sans",children:[e.jsx("rect",{x:"20",y:"20",width:"810",height:"35",rx:"6",fill:"#1e293b",stroke:"#334155"}),e.jsx("text",{x:"35",y:"43",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",children:"DIMENSION"}),e.jsx("text",{x:"240",y:"43",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",children:"LIST (list)"}),e.jsx("text",{x:"440",y:"43",fill:"#c084fc",fontSize:"12",fontWeight:"bold",children:"TUPLE (tuple)"}),e.jsx("text",{x:"640",y:"43",fill:"#34d399",fontSize:"12",fontWeight:"bold",children:"SET (set)"}),e.jsx("rect",{x:"20",y:"60",width:"810",height:"30",fill:"#0f172a"}),e.jsx("text",{x:"35",y:"80",fill:"#cbd5e1",fontSize:"11",fontWeight:"bold",children:"Mutability"}),e.jsx("text",{x:"240",y:"80",fill:"#38bdf8",fontSize:"11",children:"Mutable"}),e.jsx("text",{x:"440",y:"80",fill:"#f5d0fe",fontSize:"11",children:"Immutable"}),e.jsx("text",{x:"640",y:"80",fill:"#34d399",fontSize:"11",children:"Mutable"}),e.jsx("rect",{x:"20",y:"92",width:"810",height:"30",fill:"#020617"}),e.jsx("text",{x:"35",y:"112",fill:"#cbd5e1",fontSize:"11",fontWeight:"bold",children:"Ordering"}),e.jsx("text",{x:"240",y:"112",fill:"#38bdf8",fontSize:"11",children:"Ordered (0, 1, 2...)"}),e.jsx("text",{x:"440",y:"112",fill:"#f5d0fe",fontSize:"11",children:"Ordered (0, 1, 2...)"}),e.jsx("text",{x:"640",y:"112",fill:"#fca5a5",fontSize:"11",children:"Unordered"}),e.jsx("rect",{x:"20",y:"124",width:"810",height:"30",fill:"#0f172a"}),e.jsx("text",{x:"35",y:"144",fill:"#cbd5e1",fontSize:"11",fontWeight:"bold",children:"Duplicates"}),e.jsx("text",{x:"240",y:"144",fill:"#38bdf8",fontSize:"11",children:"Allowed"}),e.jsx("text",{x:"440",y:"144",fill:"#f5d0fe",fontSize:"11",children:"Allowed"}),e.jsx("text",{x:"640",y:"144",fill:"#34d399",fontSize:"11",fontWeight:"bold",children:"Prohibited (Unique)"}),e.jsx("rect",{x:"20",y:"156",width:"810",height:"30",fill:"#020617"}),e.jsx("text",{x:"35",y:"176",fill:"#cbd5e1",fontSize:"11",fontWeight:"bold",children:"Indexing / Slicing"}),e.jsx("text",{x:"240",y:"176",fill:"#38bdf8",fontSize:"11",children:"YES (data[i])"}),e.jsx("text",{x:"440",y:"176",fill:"#f5d0fe",fontSize:"11",children:"YES (data[i])"}),e.jsx("text",{x:"640",y:"176",fill:"#ef4444",fontSize:"11",children:"NO (TypeError)"}),e.jsx("rect",{x:"20",y:"188",width:"810",height:"30",fill:"#0f172a"}),e.jsx("text",{x:"35",y:"208",fill:"#cbd5e1",fontSize:"11",fontWeight:"bold",children:"Membership 'in'"}),e.jsx("text",{x:"240",y:"208",fill:"#fbbf24",fontSize:"11",children:"O(N) Linear Scan"}),e.jsx("text",{x:"440",y:"208",fill:"#fbbf24",fontSize:"11",children:"O(N) Linear Scan"}),e.jsx("text",{x:"640",y:"208",fill:"#34d399",fontSize:"11",fontWeight:"bold",children:"O(1) Instant Hash"}),e.jsx("rect",{x:"20",y:"220",width:"810",height:"30",fill:"#020617"}),e.jsx("text",{x:"35",y:"240",fill:"#cbd5e1",fontSize:"11",fontWeight:"bold",children:"Dict Key Legality"}),e.jsx("text",{x:"240",y:"240",fill:"#ef4444",fontSize:"11",children:"NO (Unhashable)"}),e.jsx("text",{x:"440",y:"240",fill:"#34d399",fontSize:"11",fontWeight:"bold",children:"YES (If items hashable)"}),e.jsx("text",{x:"640",y:"240",fill:"#ef4444",fontSize:"11",children:"NO (frozenset YES)"}),e.jsx("rect",{x:"20",y:"252",width:"810",height:"30",fill:"#0f172a"}),e.jsx("text",{x:"35",y:"272",fill:"#cbd5e1",fontSize:"11",fontWeight:"bold",children:"Set Math (|, &, -)"}),e.jsx("text",{x:"240",y:"272",fill:"#ef4444",fontSize:"11",children:"NO"}),e.jsx("text",{x:"440",y:"272",fill:"#ef4444",fontSize:"11",children:"NO"}),e.jsx("text",{x:"640",y:"272",fill:"#34d399",fontSize:"11",fontWeight:"bold",children:"YES (Complete Algebra)"})]}):e.jsxs("svg",{viewBox:"0 0 850 320",className:"w-full h-auto min-w-[650px] font-sans",children:[e.jsx("text",{x:"30",y:"35",fill:"#f8fafc",fontSize:"15",fontWeight:"bold",children:"Memory Footprint vs Lookup Speed Trade-off"}),e.jsx("rect",{x:"30",y:"65",width:"380",height:"220",rx:"10",fill:"#1e293b",stroke:"#0ea5e9",strokeWidth:"1.5"}),e.jsx("text",{x:"50",y:"95",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"Memory Footprint (100K Items)"}),e.jsx("text",{x:"50",y:"130",fill:"#cbd5e1",fontSize:"12",children:"1. Tuple: 800 KB (Most Compact)"}),e.jsx("rect",{x:"50",y:"140",width:"100",height:"15",rx:"3",fill:"#a855f7"}),e.jsx("text",{x:"50",y:"180",fill:"#cbd5e1",fontSize:"12",children:"2. List: 824 KB (~1.03x tuple)"}),e.jsx("rect",{x:"50",y:"190",width:"110",height:"15",rx:"3",fill:"#0ea5e9"}),e.jsx("text",{x:"50",y:"230",fill:"#cbd5e1",fontSize:"12",children:"3. Set: 8,388 KB (~10x tuple overhead!)"}),e.jsx("rect",{x:"50",y:"240",width:"320",height:"15",rx:"3",fill:"#10b981"}),e.jsx("rect",{x:"440",y:"65",width:"380",height:"220",rx:"10",fill:"#1e293b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"460",y:"95",fill:"#34d399",fontSize:"14",fontWeight:"bold",children:"Membership Lookup Time (1K Queries)"}),e.jsx("text",{x:"460",y:"130",fill:"#cbd5e1",fontSize:"12",children:"1. List: 1.8420 seconds (O(N) Slow)"}),e.jsx("rect",{x:"460",y:"140",width:"320",height:"15",rx:"3",fill:"#ef4444"}),e.jsx("text",{x:"460",y:"180",fill:"#cbd5e1",fontSize:"12",children:"2. Tuple: 1.8150 seconds (O(N) Slow)"}),e.jsx("rect",{x:"460",y:"190",width:"310",height:"15",rx:"3",fill:"#f59e0b"}),e.jsx("text",{x:"460",y:"230",fill:"#cbd5e1",fontSize:"12",children:"3. Set: 0.0006 seconds (O(1) 3,000x FASTER!)"}),e.jsx("rect",{x:"460",y:"240",width:"15",height:"15",rx:"3",fill:"#10b981"})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 space-y-8",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Python Code Labs"})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab A: Feature-by-Feature Behavioral Demonstration"}),e.jsx(i,{fileModule:h,title:"data_structures_comparison.py",highlightLines:[6,14,21]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab B: Memory Footprint & Membership Lookup Benchmarking"}),e.jsx(i,{fileModule:x,title:"memory_and_lookup_benchmark.py",highlightLines:[6,14,25,31]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab C: Architectural Decision Flow Engine"}),e.jsx(i,{fileModule:f,title:"decision_matrix_flow.py",highlightLines:[6,15,18,21]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab D: Real-World E-Commerce Cart, Promos & Fees in ₹"}),e.jsx(i,{fileModule:b,title:"ecommerce_order_processing.py",highlightLines:[6,11,15,25,30]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Industry Applications in West Bengal"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"📍"})," 1. GPS Tracking Records (Tuples)"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Logistics fleets tracking delivery vehicles in ",e.jsx("strong",{children:"Barrackpore"})," store fixed geographic coordinates as immutable tuples ",e.jsx("code",{className:"font-mono text-purple-400",children:"(22.76, 88.36)"}),", conserving memory and preventing accidental position overwrites."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🛒"})," 2. Dynamic Shopping Cart Buffers (Lists)"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["E-commerce checkouts in ",e.jsx("strong",{children:"Kolkata"})," maintain customer item sequences in mutable lists, enabling dynamic addition, deletion, and recalculation of total cart value in Indian Rupees (",e.jsx("strong",{className:"text-emerald-300",children:"₹8,000 subtotal"}),")."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🎟️"})," 3. Coupon Code Validation (Sets)"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Payment gateways in ",e.jsx("strong",{children:"Ichapur"})," validate promotional discount coupons using ",e.jsx("code",{className:"font-mono text-emerald-400",children:"code in ACTIVE_PROMOS"}),", verifying eligibility in O(1) time without blocking checkout traffic."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🔑"})," 4. Multi-Attribute Cache Keys (Tuples in Sets)"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["High-throughput caching tiers in ",e.jsx("strong",{children:"Jadavpur"})," store compound query keys as sets of tuples ",e.jsx("code",{className:"font-mono text-amber-400",children:"{(user_id, session_id)}"}),", providing instantaneous O(1) state resolution."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Pitfalls & Architectural Anti-Patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 1: Using Lists for Lookups"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Checking ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"if item in huge_list"})," forces an O(N) scan. On 100K items, this is 3,000x slower than a set lookup!"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 2: Indexing Sets"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Writing ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"my_set[0]"})," raises ",e.jsx("code",{className:"text-rose-400 font-bold",children:"TypeError"}),". Sets are unordered; use a list or tuple if you need positional indexing!"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 3: Storing Mutable Lists in Sets"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:[e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"s.add([1, 2])"})," fails with TypeError. Convert the inner list to a tuple ",e.jsx("code",{className:"font-mono text-emerald-400",children:"s.add((1, 2))"}),"!"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 4: Memory Bloat with Excessive Sets"}),e.jsx("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:"Sets consume ~8-10x more RAM than tuples. If you have 50 million static records without lookup requirements, prefer compact tuples!"})]})]})]}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(p,{content:y,title:"Topic 16: Sets vs Lists vs Tuples Study Guide",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Study Note",downloadFileName:"topic16_sets_vs_lists_vs_tuples_note.txt"})}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(m,{title:"Topic 16 • Sets vs Lists vs Tuples: Master Viva & Review Questions",questions:g})}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(u,{note:"Teacher's Architectural Guideline: Every great software engineer understands the trade-offs of their data structures! In Barrackpore and Kolkata, when Susmita, Mamata, and Debangshu design backends: use Tuples for compact immutable records, Lists for ordered dynamic sequences, and Sets whenever you need uniqueness or O(1) membership lookups. Use the right container for the right job and your software will fly!"})})]})]})}export{E as default};
