import{b as o,j as e,bg as c}from"./vendor-react-core-Doz9nIC6.js";import{P as n}from"./PythonFileLoader-hCi5osN-.js";import{P as h}from"./PlainTextPrint-C08xhKA4.js";import{F as m}from"./FAQTemplate-CkSqDH4B.js";import{T as x}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const p=`# ====================================================================\r
# Topic 3: Unordered and Unindexed Collections\r
# File: unordered_demo.py\r
# Description: Demonstrating why sets do NOT maintain insertion order\r
# ====================================================================\r
\r
# 1. Insertion order is NOT guaranteed\r
city_set = set()\r
city_set.add("Kolkata")\r
city_set.add("Barrackpore")\r
city_set.add("Ichapur")\r
city_set.add("Jadavpur")\r
\r
print("Added Order: Kolkata -> Barrackpore -> Ichapur -> Jadavpur")\r
print("Set Iteration Output:", city_set)\r
\r
# 2. Integer hashing quirk in CPython\r
# Small integers hash to themselves: hash(5) == 5\r
# This creates an illusion of ordering for small positive numbers, but it is NOT guaranteed!\r
number_set = {5, 1, 9, 3, 7, 2}\r
print("\\nNumber Set {5, 1, 9, 3, 7, 2}:", number_set)\r
\r
# 3. String hashing behavior (affected by randomized hash seeds)\r
char_set = {"Alpha", "Beta", "Gamma", "Delta", "Epsilon"}\r
print("\\nString Set:", char_set)\r
`,u=`# ====================================================================\r
# Topic 3: Unordered and Unindexed Collections\r
# File: no_indexing_slicing.py\r
# Description: Demonstrating TypeError on indexing/slicing & workaround strategies\r
# ====================================================================\r
\r
programming_languages = {"Python", "JavaScript", "Rust", "Go", "TypeScript"}\r
\r
# 1. Attempting index access (s[0]) raises TypeError\r
print("Current Set:", programming_languages)\r
\r
try:\r
    first_lang = programming_languages[0]\r
except TypeError as error:\r
    print("\\n[TypeError Caught]:", error)\r
    print("Reason: Sets have no index positions (0, 1, 2...) in memory!")\r
\r
# 2. Attempting slicing (s[1:3]) raises TypeError\r
try:\r
    sub_languages = programming_languages[1:3]\r
except TypeError as error:\r
    print("\\n[TypeError Caught]:", error)\r
\r
# 3. Proper Workaround 1: Converting to a sorted list\r
sorted_list = sorted(programming_languages)\r
print("\\nWorkaround 1 (Sorted List):", sorted_list)\r
print("First Element from sorted list:", sorted_list[0])\r
\r
# 4. Proper Workaround 2: Extracting an arbitrary element with next(iter())\r
any_element = next(iter(programming_languages))\r
print("\\nWorkaround 2 (Arbitrary next element):", any_element)\r
`,b=`# ====================================================================\r
# Topic 3: Unordered and Unindexed Collections\r
# File: hash_randomization.py\r
# Description: Demonstrating Python's Security Hash Seed Randomization (PYTHONHASHSEED)\r
# ====================================================================\r
\r
import sys\r
\r
print("Python Version:", sys.version.split()[0])\r
print("Hash width:", sys.hash_info.width, "bits")\r
\r
# Testing string hashes in the current session\r
word1 = "Barrackpore"\r
word2 = "Kolkata"\r
\r
print(f"\\nSession Hash for '{word1}': {hash(word1)}")\r
print(f"Session Hash for '{word2}': {hash(word2)}")\r
\r
print("\\n[NOTE]: In a fresh Python process, hash('Barrackpore') will change")\r
print("due to PYTHONHASHSEED randomization, proving sets cannot guarantee order!")\r
\r
# Integer hash comparison (integers are NOT randomized)\r
print(f"\\nInteger Hash for 100: {hash(100)} (Always matches in CPython)")\r
print(f"Integer Hash for -2:  {hash(-2)}  (Always matches in CPython)")\r
`,f=`# ====================================================================\r
# Topic 3: Unordered and Unindexed Collections\r
# File: ordered_alternatives.py\r
# Description: Preserving order while deduplicating using dict.fromkeys() & ordered sets\r
# ====================================================================\r
\r
# Stream of incoming student admission payments in Barrackpore & Kolkata center\r
raw_transactions = [\r
    ("TXN-101", "Susmita Roy", 4500),\r
    ("TXN-102", "Debangshu Mukherjee", 6500),\r
    ("TXN-101", "Susmita Roy", 4500),         # Duplicate payment webhook\r
    ("TXN-103", "Mamata Banerjee", 4500),\r
    ("TXN-102", "Debangshu Mukherjee", 6500),   # Duplicate payment webhook\r
    ("TXN-104", "Abhronila Das", 5000),\r
]\r
\r
print(f"Total raw payment events received: {len(raw_transactions)}")\r
\r
# Method 1: Using set() -> Deduplicates but SCRAMBLES original timeline order\r
scrambled_set = set(raw_transactions)\r
print("\\nMethod 1 (Set) - Deduplicated but timeline order is scrambled:")\r
for txn in scrambled_set:\r
    print(" ", txn)\r
\r
# Method 2: Using dict.fromkeys() -> Deduplicates AND PRESERVES exact timeline order!\r
ordered_unique = list(dict.fromkeys(raw_transactions))\r
print("\\nMethod 2 (dict.fromkeys) - Deduplicated with EXACT timeline order:")\r
for txn in ordered_unique:\r
    print(" ", txn)\r
\r
# Revenue summary in Indian Rupees (₹)\r
total_clean_revenue = sum(item[2] for item in ordered_unique)\r
print(f"\\nTotal Verified Course Fees Collected: ₹{total_clean_revenue}")\r
`,y=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
                PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_006: SETS\r
                   TOPIC 3: UNORDERED AND UNINDEXED COLLECTIONS\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. CORE CONCEPT: WHY SETS ARE UNORDERED & UNINDEXED\r
--------------------------------------------------------------------------------\r
In Python, sets are explicitly designed as UNORDERED collections:\r
  • Elements have NO defined positional index (no index 0, 1, 2, ...).\r
  • Elements do NOT retain insertion sequence.\r
  • Slicing (\`s[start:stop]\`) and subscripting (\`s[index]\`) are disallowed and\r
    raise \`TypeError: 'set' object is not subscriptable\`.\r
\r
Why is this by design?\r
  Because sets prioritize ultra-fast O(1) hash lookups over sequential memory\r
  layout. Elements are scattered across sparse hash buckets based solely on\r
  their computed \`hash(x)\` address.\r
\r
--------------------------------------------------------------------------------\r
2. PYTHON HASH SEED RANDOMIZATION (SECURITY ARCHITECTURE)\r
--------------------------------------------------------------------------------\r
  • Since Python 3.3, string and byte hashes are randomized across interpreter\r
    processes using an internal seed (\`PYTHONHASHSEED\`).\r
  • This prevents Algorithmic Complexity Denial of Service (DoS) attacks on web\r
    servers.\r
  • Consequence: The iteration order of strings in a set can change completely\r
    between different Python script runs!\r
\r
--------------------------------------------------------------------------------\r
3. WORKAROUNDS: ACCESSING ELEMENTS WITHOUT INDICES\r
--------------------------------------------------------------------------------\r
  A. If you need a sorted list from a set:\r
     \`sorted_list = sorted(my_set)\`  # Returns a new, sequentially indexed list\r
\r
  B. If you need any arbitrary single element:\r
     \`one_item = next(iter(my_set))\` # Retrieves the first element yielded\r
\r
  C. If you need Deduplication + Order Preservation:\r
     \`ordered_unique = list(dict.fromkeys(raw_list))\` # O(N) Order-Preserved Set\r
\r
--------------------------------------------------------------------------------\r
4. LISTS VS SETS MEMORY LAYOUT\r
--------------------------------------------------------------------------------\r
  • List: Contiguous, indexed memory array (\`[item0, item1, item2, ...]\`).\r
          Supports \`list[0]\`, slicing \`list[1:3]\`, maintains strict order.\r
  • Set:  Sparse hash table with open-addressing buckets.\r
          No indices, non-contiguous, O(1) instant jump via hash code.\r
\r
--------------------------------------------------------------------------------\r
5. COMMON PITFALLS & GOTCHAS\r
--------------------------------------------------------------------------------\r
  [x] Writing \`s[0]\` or \`s[-1]\` expecting first/last item -> TypeError.\r
  [x] Relying on print(s) order in automated unit tests (tests will randomly fail).\r
  [x] Mistaking small integer hash patterns (1, 2, 3) for guaranteed sorting.\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 3: UNORDERED & UNINDEXED SETS\r
================================================================================\r
`,g=[{question:"Why does Python raise a TypeError when you try to access an element in a set by index (e.g., my_set[0])?",shortAnswer:"Sets are unordered collections backed by hash tables, not contiguous indexed arrays.",explanation:"Indexing relies on sequential physical offsets in memory (0, 1, 2...). Sets allocate items dynamically across hash buckets based on hash(x), so concepts like 'first item' or 'index 0' do not exist in sets, raising TypeError: 'set' object is not subscriptable.",hint:"Think about why hash buckets have no sequential integer positions.",level:"basic",codeExample:`s = {"Kolkata", "Barrackpore"}
try:
    print(s[0])
except TypeError as e:
    print(e)  # 'set' object is not subscriptable`},{question:"Can you perform slicing (e.g., s[1:3]) on a Python set? Why or why not?",shortAnswer:"No, slicing requires subscriptable sequential ordering, which sets do not possess.",explanation:"Slicing needs explicit start, stop, and step numerical index boundaries. Since sets are unindexed, attempting s[1:3] triggers a TypeError. To slice, you must first convert the set to a list or tuple.",hint:"Slicing requires indexed start and stop bounds.",level:"basic",codeExample:`s = {10, 20, 30, 40}
# sub = s[1:3]  # TypeError
sub = list(s)[1:3]  # Valid workaround`},{question:"Why do small positive integers (e.g., {3, 1, 4, 2}) often appear sorted when printed in CPython?",shortAnswer:"In CPython, small integers hash to themselves (hash(3)==3), landing in numeric bucket order.",explanation:"In CPython implementation, hash(n) == n for small non-negative integers. When a set iterates over its internal 8-slot array, it encounters bucket 1, then bucket 2, then bucket 3, giving an illusion of sorting. However, this is an internal implementation detail, not a language guarantee!",hint:"Small integer hash codes match their numeric values.",level:"expert",codeExample:`s = {4, 1, 3, 2}
print(s)  # Often outputs {1, 2, 3, 4} due to bucket index layout, but NOT guaranteed!`},{question:"What is PYTHONHASHSEED and why does it cause set iteration order for strings to change across Python runs?",shortAnswer:"It is a randomized security seed initialized at Python startup to randomize string hashes and prevent DoS attacks.",explanation:"To prevent attackers from sending strings designed to collide in the same hash bucket and freeze web servers (Hash-DoS attack), Python randomizes string hash seeds on each interpreter startup, causing string bucket layout and iteration order to vary across runs.",hint:"Think about security protection against hash collision denial of service.",level:"expert",codeExample:`# Session A: set('abc') might print {'c', 'a', 'b'}
# Session B: set('abc') might print {'a', 'b', 'c'}`},{question:"How can you safely retrieve an arbitrary single element from a set without knowing its contents?",shortAnswer:"Use next(iter(my_set)) or my_set.pop().",explanation:"iter(my_set) creates an iterator over the set, and next() retrieves the first yielded element without removing it. Alternatively, my_set.pop() removes and returns an arbitrary element.",hint:"Combine iter() with the next() function.",level:"moderate",codeExample:`s = {"Admin", "Moderator", "Editor"}
item = next(iter(s))
print("Arbitrary item:", item)`},{question:"How can you convert a set into a sequentially indexed collection sorted in ascending order?",shortAnswer:"Pass the set to the sorted() function: sorted_list = sorted(my_set).",explanation:"The sorted() built-in function accepts any iterable (including unindexed sets) and returns a brand-new, sequentially ordered list sorted in ascending order in O(N log N) time.",hint:"Use the built-in sorted() function.",level:"basic",codeExample:`s = {50, 10, 40, 20, 30}
sorted_res = sorted(s)
print(sorted_res)  # [10, 20, 30, 40, 50]`},{question:"Why will unit tests that assert string representations of sets (e.g., str(s) == '{a, b}') randomly fail?",shortAnswer:"Because string element iteration order in sets is non-deterministic and can scramble between test runs.",explanation:"Because set iteration order for strings depends on process-level hash seed randomization, asserting exact string format str(s) == '{a, b}' creates flaky tests. Tests should assert set equality s == {'a', 'b'} instead.",hint:"Never compare stringified sets in test assertions.",level:"moderate",codeExample:`# Bad Test:
# assert str(s) == "{'apple', 'banana'}"  # FLAKY!

# Good Test:
# assert s == {'apple', 'banana'}          # 100% ROBUST!`},{question:"How can you remove duplicates from a list while preserving the exact original insertion order?",shortAnswer:"Use list(dict.fromkeys(my_list)).",explanation:"Since Python 3.7, dictionaries maintain insertion order. dict.fromkeys() creates a dictionary with list items as unique keys in their first-seen order. Converting back to a list gives an order-preserved, deduplicated sequence in O(N) time.",hint:"Use dict.fromkeys to combine deduplication with order preservation.",level:"moderate",codeExample:`raw = ["Kolkata", "Barrackpore", "Kolkata", "Ichapur"]
ordered = list(dict.fromkeys(raw))
print(ordered)  # ['Kolkata', 'Barrackpore', 'Ichapur']`},{question:"What is the memory layout difference between a Python list and a Python set?",shortAnswer:"A list is a dense contiguous array of pointers; a set is a sparse array of hash table bucket entries.",explanation:"Lists store contiguous pointer arrays where index i directly accesses memory address base + i * pointer_size. Sets maintain a sparse hash table with hash values, keys, and empty slots to prevent collision clumping.",hint:"Dense contiguous pointer array vs sparse hash bucket array.",level:"expert",codeExample:`# List: [ptr0 | ptr1 | ptr2 | ptr3] -> Direct O(1) Index
# Set:  [Bucket0 | Bucket1 | ... | BucketN] -> Hash Jump`},{question:"What happens if you iterate over a set using a standard for-loop: for item in my_set:?",shortAnswer:"Python iterates over every element currently in the hash buckets in whatever order the buckets are arranged.",explanation:"The for loop consumes the set's iterator protocol (__iter__ and __next__), traversing all populated hash buckets from index 0 to table_size-1. Every element is visited exactly once.",hint:"Every member is visited once in bucket order.",level:"basic",codeExample:`fruits = {"Mango", "Guava", "Litchi"}
for fruit in fruits:
    print("Fruit:", fruit)`},{question:"Why does pop() on a set return an 'arbitrary' element rather than the last inserted element?",shortAnswer:"Because sets do not track insertion order or keep a 'tail' pointer; pop() simply removes the first non-empty bucket item.",explanation:"Unlike lists where pop() removes the last index in O(1), set.pop() removes whatever element happens to be in the first occupied hash bucket encountered in memory.",hint:"pop() grabs from the first occupied bucket.",level:"moderate",codeExample:`s = {"a", "b", "c"}
removed = s.pop()
print("Popped:", removed)`},{question:"What error occurs if you call pop() on an empty set?",shortAnswer:"KeyError: 'pop from an empty set'.",explanation:"Attempting to pop an element from a set with len(s) == 0 raises a KeyError, identical to accessing a non-existent key in a dictionary.",hint:"An empty set raises a KeyError on pop.",level:"basic",codeExample:`empty_set = set()
try:
    empty_set.pop()
except KeyError as e:
    print(e)  # 'pop from an empty set'`},{question:"How can you check if two sets are equal regardless of their element order?",shortAnswer:"Use the standard == equality operator: set1 == set2.",explanation:"Set equality in Python verifies that every element in set1 exists in set2 and vice versa, completely disregarding internal bucket positions.",hint:"== compares set membership contents.",level:"basic",codeExample:'print({"A", "B", "C"} == {"C", "A", "B"})  # True'},{question:"Can you reverse a set using reversed(my_set)?",shortAnswer:"No, reversed() requires a sequence with __reversed__ or __len__ and integer indexing, raising TypeError.",explanation:"The reversed() built-in requires a sequence with defined order and indexing. Attempting reversed(my_set) raises TypeError: 'set' object is not reversible. You must sort or convert to a list first.",hint:"Reversing has no meaning for an unordered collection.",level:"basic",codeExample:`s = {1, 2, 3}
try:
    rev = reversed(s)
except TypeError as e:
    print(e)  # 'set' object is not reversible`},{question:"How do you find the minimum and maximum elements in an unordered set?",shortAnswer:"Use the built-in min(my_set) and max(my_set) functions in O(N) time.",explanation:"min() and max() iterate across all elements in the set, comparing values and returning the smallest and largest element in O(N) linear scan time.",hint:"min() and max() work on any iterable.",level:"basic",codeExample:`scores = {85, 92, 78, 95, 88}
print("Min score:", min(scores))  # 78
print("Max score:", max(scores))  # 95`},{question:"Why should you never modify a set while iterating over it in a for-loop?",shortAnswer:"It raises RuntimeError: Set changed size during iteration.",explanation:"Modifying set size (via add or remove) while an iterator is active disrupts the internal hash bucket offsets, causing Python to raise a RuntimeError to prevent data corruption.",hint:"Iterating and modifying simultaneously triggers a RuntimeError.",level:"moderate",codeExample:`s = {1, 2, 3, 4}
try:
    for x in s:
        if x % 2 == 0:
            s.remove(x)
except RuntimeError as e:
    print(e)  # Set changed size during iteration`},{question:"What is the correct way to filter or remove items from a set during iteration?",shortAnswer:"Iterate over a copy (for x in s.copy():) or use a set comprehension: s = {x for x in s if condition}.",explanation:"Iterating over a shallow copy (s.copy() or list(s)) leaves the underlying iterator untouched while you modify the original set, or creating a fresh set via comprehension is clean and efficient.",hint:"Iterate over s.copy() or use a set comprehension.",level:"moderate",codeExample:`s = {1, 2, 3, 4, 5}
# Clean comprehension filtering:
s = {x for x in s if x % 2 != 0}
print(s)  # {1, 3, 5}`},{question:"How does set unindexing impact binary search algorithms?",shortAnswer:"Binary search cannot be run on sets because binary search requires O(1) random index access (mid = (low+high)//2).",explanation:"Binary search requires jumping to specific index offsets in O(1) time. However, sets already provide O(1) lookup via direct hashing, making binary search unnecessary for sets!",hint:"Binary search needs index access, but sets already have O(1) hashing.",level:"expert",codeExample:"# In sets, 'x in s' is already O(1) - faster than O(log N) binary search!"},{question:"What is the output of sorted(set('abracadabra'), reverse=True)?",shortAnswer:"['r', 'd', 'c', 'b', 'a'].",explanation:"set('abracadabra') extracts the distinct letters {'a', 'b', 'c', 'd', 'r'}. sorted() with reverse=True sorts them in descending alphabetical order, returning ['r', 'd', 'c', 'b', 'a'].",hint:"Extract distinct letters and sort descending.",level:"basic",codeExample:`letters = sorted(set('abracadabra'), reverse=True)
print(letters)  # ['r', 'd', 'c', 'b', 'a']`},{question:"Why does Python 3.7+ maintain insertion order in dictionaries but NOT in sets?",shortAnswer:"Dictionaries use a compact two-array layout (indices array + entries array); sets use a single open-addressing table to optimize lookup speed and memory overhead.",explanation:"In Python 3.7, dictionaries adopted PyPy's compact array design to save memory, which naturally preserves insertion order. Sets retained the traditional sparse table layout to prioritize maximum membership lookup throughput.",hint:"Dicts use a compact 2-array structure; sets use a direct open-addressing table.",level:"expert",codeExample:`# Dicts: Insertion ordered since Python 3.7
# Sets:  Unordered hash table`},{question:"How can you convert a set into a comma-separated string formatted in alphabetical order?",shortAnswer:"Use ', '.join(sorted(my_set)).",explanation:"sorted(my_set) returns an alphabetically sorted list of strings, and ', '.join() concatenates them into a clean comma-separated string.",hint:"Combine sorted() with ', '.join().",level:"basic",codeExample:`skills = {"Python", "React", "Tailwind", "FastAPI"}
report = ", ".join(sorted(skills))
print(report)  # 'FastAPI, Python, React, Tailwind'`},{question:"What is the time complexity of the in operator ('x in s') vs finding an element by index in a list ('l[i]')?",shortAnswer:"Both are O(1) constant time, but 'x in s' searches by VALUE while 'l[i]' searches by POSITIONAL INDEX.",explanation:"list[i] accesses memory at base + i*8 in O(1). set lookup 'x in s' computes hash(x) and inspects bucket in O(1). Searching by value in a list ('x in l') is slow O(N).",hint:"Searching by value in a set is O(1); searching by value in a list is O(N).",level:"moderate",codeExample:`# Value search in Set:  'val in set'  -> O(1)
# Value search in List: 'val in list' -> O(N)
# Index lookup in List: 'list[index]' -> O(1)`},{question:"What happens if two negative integers are stored in a set (e.g. {-1, -2}) in CPython?",shortAnswer:"They are stored according to their hash codes: hash(-1) == -2 and hash(-2) == -2 in CPython.",explanation:"In CPython, hash value -1 is internally reserved for error signaling, so hash(-1) evaluates to -2. They are placed into corresponding hash buckets normally.",hint:"CPython maps hash(-1) to -2 to avoid internal error code collisions.",level:"expert",codeExample:`print(hash(-1))  # -2
print(hash(-2))  # -2`},{question:"How can you convert a set of numbers into a tuple sorted from highest to lowest?",shortAnswer:"tuple(sorted(my_set, reverse=True)).",explanation:"sorted(my_set, reverse=True) produces a descending list, which is then cast to an immutable tuple via tuple().",hint:"Use tuple() wrapping sorted(reverse=True).",level:"basic",codeExample:`s = {15, 3, 99, 42}
desc_tuple = tuple(sorted(s, reverse=True))
print(desc_tuple)  # (99, 42, 15, 3)`},{question:"Can you pass a set to enumerate(my_set)? What do the indices represent?",shortAnswer:"Yes, but the 0, 1, 2 indices represent arbitrary iteration loop counters, NOT fixed element positions.",explanation:"enumerate(my_set) yields (counter, item) pairs as it traverses buckets. Because set order is not fixed, the index assigned to an element can change on subsequent program runs.",hint:"The index is just a loop iteration counter.",level:"moderate",codeExample:`roles = {"Admin", "Editor", "Viewer"}
for idx, role in enumerate(roles):
    print(f"Counter {idx}: {role}")`},{question:"What is an 'OrderedSet' and how can you use one in Python?",shortAnswer:"An OrderedSet is a data structure that combines set uniqueness with list ordering, available via third-party packages or built via dict.fromkeys().",explanation:"Standard Python does not include an OrderedSet in builtins, but collections like dict.fromkeys() or the third-party 'ordered-set' library provide O(1) lookups with strict insertion order preservation.",hint:"Use dict.fromkeys() as a built-in OrderedSet substitute.",level:"moderate",codeExample:`# Built-in OrderedSet idiom:
class OrderedSet(dict):
    def add(self, elem):
        self[elem] = None`},{question:"Why does len(my_set) execute in O(1) constant time despite sets being unindexed?",shortAnswer:"Python sets store an internal element count attribute (used_slots) updated on every insertion and deletion.",explanation:"Python maintains an explicit length integer in the PySetObject C structure. Calling len(s) directly reads this struct field without scanning buckets, taking instant O(1) time.",hint:"The set struct stores the active element count directly.",level:"moderate",codeExample:"# len(s) reads PySetObject->used in O(1) time"},{question:"What is the effect of passing an unindexed set to random.choice() in Python's random module?",shortAnswer:"It raises TypeError: 'set' object is not subscriptable (random.choice requires an indexed sequence).",explanation:"random.choice(seq) selects an item using random index seq[random.randint(0, len(seq)-1)]. Since sets cannot be indexed, you must use random.choice(list(my_set)) or random.sample(my_set, 1)[0].",hint:"random.choice expects a sequence with indices; use random.sample() instead.",level:"expert",codeExample:`import random
s = {"Mamata", "Susmita", "Debangshu"}
# item = random.choice(s)  # TypeError!

# Correct ways:
item1 = random.choice(list(s))
item2 = random.sample(sorted(s), 1)[0]
print("Randomly chosen:", item1)`},{question:"How does set unindexing prevent data race condition bugs in multi-threaded read operations?",shortAnswer:"Read-only membership queries in sets don't depend on positional cursor shifts, making concurrent 'in' tests safe under the GIL.",explanation:"Multiple threads can safely execute 'x in s' concurrently under Python's GIL because read operations only calculate hashes and inspect buckets without mutating memory pointers or tracking sequence pointers.",hint:"Read-only hash lookups do not mutate internal states.",level:"expert",codeExample:"# Concurrent lookups: 'x in s' is thread-safe for reads"},{question:"What is the key takeaway for a software developer regarding sets being unordered and unindexed?",shortAnswer:"Use sets when membership and uniqueness are paramount; never rely on set iteration order for application business logic.",explanation:"Understanding that sets trade indexing and ordering for maximum O(1) hash lookup performance prevents subtle bugs, flaky tests, and misapplied algorithms in production codebases.",hint:"Tradeoff: No indexing = Maximum O(1) Lookup Speed.",level:"moderate",codeExample:`# Core architectural rule:
# Need Order & Index -> List
# Need Uniqueness & Speed -> Set`}];function O(){const i=o.useRef([]),[a,l]=o.useState("memory");o.useEffect(()=>{const s=new IntersectionObserver(r=>{r.forEach(d=>{d.isIntersecting&&d.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return i.current.forEach(r=>{r&&s.observe(r)}),()=>s.disconnect()},[]);const t=s=>{s&&!i.current.includes(s)&&i.current.push(s)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-emerald-500/30 selection:text-emerald-200",children:[e.jsx("style",{children:`
        .section-hidden {
          transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .section-visible {
          transform: translateY(0);
        }
      `}),e.jsxs("header",{ref:t,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-emerald-950/80 text-emerald-300 px-3 py-1 rounded-full border border-emerald-800/80 shadow-sm shadow-emerald-950/50",children:"Segment 2 • Module 002_006"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-sky-950/80 text-sky-300 px-3 py-1 rounded-full border border-sky-800/80 shadow-sm shadow-sky-950/50",children:"Topic 3"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Memory & Iteration Models"})]}),e.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:"Unordered & Unindexed Collections"}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Understanding why sets disallow ",e.jsx("code",{className:"text-rose-400 font-mono",children:"s[0]"}),", how sparse hash tables differ from contiguous arrays, and why ",e.jsx("code",{className:"text-sky-400 font-mono",children:"PYTHONHASHSEED"})," protects against DoS attacks."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🚫 No Positional Indexing"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🎲 Non-Deterministic Iteration"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Security Hash Seed"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📋 dict.fromkeys() Ordering"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧩"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Design Tradeoff: Speed vs Indexing"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["In Python, collections face a classic architectural choice: ",e.jsx("strong",{className:"text-emerald-400",children:"Positional Ordering"})," (like Lists and Tuples) vs ",e.jsx("strong",{className:"text-sky-400",children:"High-Speed Hash Lookups"})," (like Sets and Dictionaries)."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5 my-6 not-prose",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/70 border border-amber-800/60 shadow-lg shadow-amber-950/30 transition-all duration-300 hover:border-amber-500",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-lg",children:[e.jsx("span",{children:"📜"})," List Architecture"]}),e.jsx("span",{className:"text-xs font-mono bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-800",children:"Contiguous Array"})]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-3",children:["Stores pointers in sequential physical order (",e.jsx("code",{className:"text-amber-300 font-mono",children:"0, 1, 2, 3..."}),"). Indexing (",e.jsx("code",{className:"text-amber-300 font-mono",children:"l[0]"}),") and slicing (",e.jsx("code",{className:"text-amber-300 font-mono",children:"l[1:3]"}),") are supported in ",e.jsx("strong",{className:"text-white",children:"O(1)"})," time, but searching by value takes slow ",e.jsx("span",{className:"text-rose-400 font-semibold",children:"O(N)"})," time."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/70 border border-emerald-800/60 shadow-lg shadow-emerald-950/30 transition-all duration-300 hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-lg",children:[e.jsx("span",{children:"⚡"})," Set Architecture"]}),e.jsx("span",{className:"text-xs font-mono bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800",children:"Sparse Hash Table"})]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-3",children:["Scatters items across hash buckets based purely on ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"hash(x)"}),". There is NO first or last slot. Value search executes in instant ",e.jsx("strong",{className:"text-emerald-400",children:"O(1)"})," time, but numerical indexing is impossible."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-rose-500 border border-slate-800/80",children:[e.jsxs("h3",{className:"text-white font-bold text-base mb-2",children:["Why Does ",e.jsx("code",{className:"text-rose-400 font-mono",children:"s[0]"})," Raise TypeError?"]}),e.jsxs("p",{className:"text-sm sm:text-base text-slate-300",children:["Because sets are implemented as an open-addressing hash array with gaps and empty slots. An item's bucket index can change whenever the set resizes. Hence, Python strictly prohibits subscripting (",e.jsx("code",{className:"text-rose-300 font-mono",children:"TypeError: 'set' object is not subscriptable"}),")."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"🔬"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Comparing Memory Structures: List vs Set"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>l("memory"),className:c("px-3 py-1.5 rounded-lg transition-all",a==="memory"?"bg-emerald-900/50 text-emerald-300 border border-emerald-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Memory Layout Contrast"}),e.jsx("button",{onClick:()=>l("seed"),className:c("px-3 py-1.5 rounded-lg transition-all",a==="seed"?"bg-sky-900/50 text-sky-300 border border-sky-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Hash Seed Randomization"})]})]}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:a==="memory"?e.jsxs("svg",{viewBox:"0 0 850 340",className:"w-full h-auto min-w-[650px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#fbbf24",fontSize:"13",fontWeight:"bold",children:"1. LIST MEMORY: CONTIGUOUS POINTER ARRAY (INDEXABLE)"}),e.jsxs("g",{children:[e.jsx("rect",{x:"30",y:"45",width:"180",height:"55",rx:"6",fill:"#1e293b",stroke:"#f59e0b",strokeWidth:"1.5"}),e.jsx("text",{x:"45",y:"70",fill:"#fbbf24",fontSize:"12",fontWeight:"bold",children:"Index [0]:"}),e.jsx("text",{x:"110",y:"70",fill:"#ffffff",fontSize:"12",children:'"Kolkata"'}),e.jsx("text",{x:"45",y:"90",fill:"#64748b",fontSize:"10",children:"Offset: base + 0*8"})]}),e.jsxs("g",{children:[e.jsx("rect",{x:"220",y:"45",width:"180",height:"55",rx:"6",fill:"#1e293b",stroke:"#f59e0b",strokeWidth:"1.5"}),e.jsx("text",{x:"235",y:"70",fill:"#fbbf24",fontSize:"12",fontWeight:"bold",children:"Index [1]:"}),e.jsx("text",{x:"300",y:"70",fill:"#ffffff",fontSize:"12",children:'"Barrackpore"'}),e.jsx("text",{x:"235",y:"90",fill:"#64748b",fontSize:"10",children:"Offset: base + 1*8"})]}),e.jsxs("g",{children:[e.jsx("rect",{x:"410",y:"45",width:"180",height:"55",rx:"6",fill:"#1e293b",stroke:"#f59e0b",strokeWidth:"1.5"}),e.jsx("text",{x:"425",y:"70",fill:"#fbbf24",fontSize:"12",fontWeight:"bold",children:"Index [2]:"}),e.jsx("text",{x:"490",y:"70",fill:"#ffffff",fontSize:"12",children:'"Ichapur"'}),e.jsx("text",{x:"425",y:"90",fill:"#64748b",fontSize:"10",children:"Offset: base + 2*8"})]}),e.jsxs("g",{children:[e.jsx("rect",{x:"600",y:"45",width:"220",height:"55",rx:"6",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"615",y:"70",fill:"#34d399",fontSize:"12",fontWeight:"bold",children:"Direct list[0] → O(1)"}),e.jsx("text",{x:"615",y:"90",fill:"#a7f3d0",fontSize:"10",children:"Guaranteed sequential index"})]}),e.jsx("text",{x:"30",y:"160",fill:"#38bdf8",fontSize:"13",fontWeight:"bold",children:"2. SET MEMORY: SPARSE HASH TABLE BUCKETS (UNINDEXED)"}),e.jsx("rect",{x:"30",y:"175",width:"150",height:"50",rx:"6",fill:"#1e293b",stroke:"#334155"}),e.jsx("text",{x:"45",y:"205",fill:"#64748b",fontSize:"11",fontWeight:"bold",children:"Bucket [0]: <EMPTY>"}),e.jsx("rect",{x:"190",y:"175",width:"190",height:"50",rx:"6",fill:"#1e293b",stroke:"#0ea5e9",strokeWidth:"1.5"}),e.jsx("text",{x:"205",y:"200",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",children:"Bucket [1]:"}),e.jsx("text",{x:"275",y:"200",fill:"#ffffff",fontSize:"12",children:'"Barrackpore"'}),e.jsx("text",{x:"205",y:"218",fill:"#64748b",fontSize:"10",children:'hash("Barrackpore") → 1'}),e.jsx("rect",{x:"390",y:"175",width:"150",height:"50",rx:"6",fill:"#1e293b",stroke:"#334155"}),e.jsx("text",{x:"405",y:"205",fill:"#64748b",fontSize:"11",fontWeight:"bold",children:"Bucket [2]: <EMPTY>"}),e.jsx("rect",{x:"550",y:"175",width:"170",height:"50",rx:"6",fill:"#1e293b",stroke:"#0ea5e9",strokeWidth:"1.5"}),e.jsx("text",{x:"565",y:"200",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",children:"Bucket [3]:"}),e.jsx("text",{x:"635",y:"200",fill:"#ffffff",fontSize:"12",children:'"Kolkata"'}),e.jsx("text",{x:"565",y:"218",fill:"#64748b",fontSize:"10",children:'hash("Kolkata") → 3'}),e.jsx("rect",{x:"30",y:"245",width:"790",height:"70",rx:"8",fill:"#0f172a",stroke:"#ef4444",strokeWidth:"1.5"}),e.jsx("text",{x:"50",y:"275",fill:"#fca5a5",fontSize:"13",fontWeight:"bold",children:"❌ Calling my_set[0] raises TypeError: 'set' object is not subscriptable!"}),e.jsx("text",{x:"50",y:"298",fill:"#94a3b8",fontSize:"11",children:"Why? Bucket [0] is empty. There is no contiguous index 0, 1, 2. Elements sit only where hash(x) dictates!"})]}):e.jsxs("svg",{viewBox:"0 0 850 320",className:"w-full h-auto min-w-[650px] font-sans",children:[e.jsx("text",{x:"30",y:"35",fill:"#f8fafc",fontSize:"15",fontWeight:"bold",children:"PYTHONHASHSEED Security & Non-Deterministic String Ordering"}),e.jsx("rect",{x:"30",y:"65",width:"380",height:"220",rx:"10",fill:"#1e293b",stroke:"#0ea5e9",strokeWidth:"1.5"}),e.jsx("text",{x:"50",y:"95",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"Python Process 1 (Seed = 0x4F91...)"}),e.jsx("text",{x:"50",y:"125",fill:"#cbd5e1",fontSize:"12",children:'hash("Barrackpore") → Bucket 1'}),e.jsx("text",{x:"50",y:"150",fill:"#cbd5e1",fontSize:"12",children:'hash("Kolkata")     → Bucket 5'}),e.jsx("text",{x:"50",y:"175",fill:"#cbd5e1",fontSize:"12",children:'hash("Ichapur")     → Bucket 7'}),e.jsx("rect",{x:"50",y:"200",width:"340",height:"40",rx:"6",fill:"#0c4a6e",stroke:"#0ea5e9"}),e.jsxs("text",{x:"65",y:"225",fill:"#bae6fd",fontSize:"12",fontWeight:"bold",children:["Iteration: ",'{"Barrackpore", "Kolkata", "Ichapur"}']}),e.jsx("rect",{x:"440",y:"65",width:"380",height:"220",rx:"10",fill:"#1e293b",stroke:"#a855f7",strokeWidth:"1.5"}),e.jsx("text",{x:"460",y:"95",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"Python Process 2 (Seed = 0x8B22...)"}),e.jsx("text",{x:"460",y:"125",fill:"#cbd5e1",fontSize:"12",children:'hash("Ichapur")     → Bucket 0'}),e.jsx("text",{x:"460",y:"150",fill:"#cbd5e1",fontSize:"12",children:'hash("Kolkata")     → Bucket 2'}),e.jsx("text",{x:"460",y:"175",fill:"#cbd5e1",fontSize:"12",children:'hash("Barrackpore") → Bucket 6'}),e.jsx("rect",{x:"460",y:"200",width:"340",height:"40",rx:"6",fill:"#4a044e",stroke:"#a855f7"}),e.jsxs("text",{x:"475",y:"225",fill:"#f5d0fe",fontSize:"12",fontWeight:"bold",children:["Iteration: ",'{"Ichapur", "Kolkata", "Barrackpore"}']})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 space-y-8",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Python Code Labs"})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab A: Unordered Insertion & Small Integer Coincidences"}),e.jsx(n,{fileModule:p,title:"unordered_demo.py",highlightLines:[6,12,18]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab B: Trapping TypeError & Proper Workaround Techniques"}),e.jsx(n,{fileModule:u,title:"no_indexing_slicing.py",highlightLines:[9,16,21,26]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab C: Security Hash Seed Randomization (PYTHONHASHSEED)"}),e.jsx(n,{fileModule:b,title:"hash_randomization.py",highlightLines:[6,13,19]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab D: Deduplication with Order Preservation (dict.fromkeys & ₹ Fees)"}),e.jsx(n,{fileModule:f,title:"ordered_alternatives.py",highlightLines:[16,22,28]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🌍"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Industry Scenarios in West Bengal"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"💳"})," 1. Webhook Timeline Idempotency"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Payment gateways serving students in ",e.jsx("strong",{children:"Barrackpore"})," process admission fee events in Indian Rupees (",e.jsx("strong",{className:"text-emerald-300",children:"₹4,500, ₹6,500"}),"). Using ",e.jsx("code",{className:"font-mono text-emerald-400",children:"dict.fromkeys()"})," preserves the true timeline order while filtering duplicate webhook retries."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🧪"})," 2. Flaky Unit Test Prevention"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Software QA engineers avoid writing ",e.jsx("code",{className:"font-mono text-sky-400",children:'assert str(output_set) == "..."'})," because string hash seeds randomize print order between CI/CD test runs. Asserting ",e.jsx("code",{className:"font-mono text-emerald-400",children:"assert output_set == expected"})," is 100% reliable."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🎲"})," 3. Fair Random Prize Draws"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["When Mamata conducts a student lottery in ",e.jsx("strong",{children:"Kolkata"}),", passing a set directly to ",e.jsx("code",{className:"font-mono text-purple-400",children:"random.choice()"})," fails with TypeError. Converting via ",e.jsx("code",{className:"font-mono text-emerald-400",children:"random.choice(list(students))"})," ensures fair, error-free prize selection."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"⚡"})," 4. High-Throughput Search Engines"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Search engines trade sequential index capabilities for ",e.jsx("span",{className:"font-semibold text-emerald-400",children:"O(1)"})," inverted index membership lookups across millions of document tokens in ",e.jsx("strong",{children:"Jadavpur"})," research labs."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Pitfalls & Traps with Unordered Sets"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 1: Modifying Set During Iteration"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Calling ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"s.remove(x)"})," inside ",e.jsx("code",{className:"font-mono",children:"for x in s:"})," raises ",e.jsx("code",{className:"text-rose-400 font-bold",children:"RuntimeError: Set changed size during iteration"}),". Iterate over ",e.jsx("code",{className:"font-mono text-emerald-400",children:"s.copy()"})," instead."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 2: Expecting pop() to Remove Last Item"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["In lists, ",e.jsx("code",{className:"font-mono",children:"l.pop()"})," removes the last item. In sets, ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"s.pop()"})," removes an arbitrary element based on the first occupied hash bucket!"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 3: Assuming Integer Sorting is Guaranteed"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Small integers like ",3," appear sorted only because ",e.jsx("code",{className:"font-mono",children:"hash(n) == n"}),". This is a CPython internal detail, not a language specification!"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 4: Calling reversed() on a Set"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:[e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"reversed(my_set)"})," fails with ",e.jsx("code",{className:"text-rose-400 font-bold",children:"TypeError: 'set' object is not reversible"}),". Sort with ",e.jsx("code",{className:"font-mono text-emerald-400",children:"sorted(s, reverse=True)"}),"."]})]})]})]}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(h,{content:y,title:"Topic 3: Unordered and Unindexed Collections Study Guide",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Study Note",downloadFileName:"topic3_unordered_unindexed_sets_note.txt"})}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(m,{title:"Topic 3 • Unordered & Unindexed Sets: Master Viva & Review Questions",questions:g})}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(x,{note:"Teacher's Key Insight: Never fight the nature of a data structure. If you need positional sequence indices, use a list. If you need lightning-fast O(1) membership and guaranteed uniqueness, use a set. And if Abhronila and Debangshu in Barrackpore need both order and uniqueness, list(dict.fromkeys(data)) is your magic wand!"})})]})]})}export{O as default};
