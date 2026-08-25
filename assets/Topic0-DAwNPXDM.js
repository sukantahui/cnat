import{b as o,j as e,bg as c}from"./vendor-react-core-Doz9nIC6.js";import{P as a}from"./PythonFileLoader-hCi5osN-.js";import{P as h}from"./PlainTextPrint-C08xhKA4.js";import{F as m}from"./FAQTemplate-CkSqDH4B.js";import{T as u}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const x=`# ====================================================================\r
# Topic 0: Introduction to Sets in Python\r
# File: set_intro_basics.py\r
# Description: Demonstrating fundamental set creation, uniqueness & types\r
# ====================================================================\r
\r
# 1. Creating a set with literals\r
student_ids = {101, 102, 103, 104, 105}\r
print("Student ID Set:", student_ids)\r
print("Type of student_ids:", type(student_ids))\r
print("Total unique students:", len(student_ids))\r
\r
# 2. Sets automatically eliminate duplicate values\r
batch_attendance = {"Mamata", "Susmita", "Debangshu", "Mamata", "Susmita", "Abhronila"}\r
print("\\nAttendance with duplicates entered:", batch_attendance)\r
print("Unique attendees count:", len(batch_attendance))\r
\r
# 3. Heterogeneous elements in a set (must be hashable/immutable)\r
mixed_set = {"Kolkata", 700120, 98.5, True, ("Batch", "A")}\r
print("\\nMixed-type Set:", mixed_set)\r
\r
# 4. Checking membership (O(1) average time complexity)\r
search_city = "Kolkata"\r
if search_city in mixed_set:\r
    print(f"'{search_city}' is present in the set!")\r
`,p=`# ====================================================================\r
# Topic 0: Introduction to Sets in Python\r
# File: set_uniqueness_demo.py\r
# Description: Demonstrating instant deduplication from raw data lists\r
# ====================================================================\r
\r
# Raw list of candidate registration numbers from Barrackpore test center\r
raw_registrations = [\r
    "REG-701", "REG-702", "REG-701", "REG-705",\r
    "REG-703", "REG-702", "REG-708", "REG-701",\r
    "REG-705", "REG-709", "REG-703"\r
]\r
\r
print(f"Total raw registration logs: {len(raw_registrations)}")\r
\r
# Instant deduplication using set() constructor\r
unique_registrations = set(raw_registrations)\r
print(f"Total verified unique candidates: {len(unique_registrations)}")\r
print("Unique Registration IDs:", unique_registrations)\r
\r
# Practical fee calculation (₹500 per unique candidate)\r
fee_per_candidate = 500\r
total_collection = len(unique_registrations) * fee_per_candidate\r
print(f"\\nTotal Exam Fee Collected: ₹{total_collection}")\r
\r
# Converting back to a sorted list for administrative reporting\r
sorted_candidates = sorted(unique_registrations)\r
print("Sorted Candidate Register:", sorted_candidates)\r
`,b=`# ====================================================================\r
# Topic 0: Introduction to Sets in Python\r
# File: set_creation_types.py\r
# Description: The Empty Set Trap ({ } vs set()) & Type Constructor Nuances\r
# ====================================================================\r
\r
# 1. THE CRITICAL BEGINNER TRAP: Creating an empty set\r
empty_curly = {}\r
print("Type of {}:", type(empty_curly))  # Output: <class 'dict'> (NOT set!)\r
\r
# Correct way to create an empty set\r
true_empty_set = set()\r
print("Type of set():", type(true_empty_set))  # Output: <class 'set'>\r
print("Length of true_empty_set:", len(true_empty_set))\r
\r
# 2. Creating sets from various iterables\r
# From a string (breaks into unique characters)\r
char_set = set("Barrackpore")\r
print("\\nUnique characters from 'Barrackpore':", char_set)\r
\r
# From a tuple\r
branch_tuple = ("Kolkata", "Barrackpore", "Ichapur", "Jadavpur", "Kolkata")\r
branch_set = set(branch_tuple)\r
print("Branches Set:", branch_set)\r
\r
# From a dictionary (extracts only the KEYS by default)\r
student_marks = {"Susmita": 92, "Debangshu": 88, "Mamata": 95}\r
student_name_set = set(student_marks)\r
print("Student Names Set (from Dict keys):", student_name_set)\r
\r
# From a range\r
even_digit_set = set(range(0, 10, 2))\r
print("Even digits set:", even_digit_set)\r
`,f=`# ====================================================================\r
# Topic 0: Introduction to Sets in Python\r
# File: set_membership_lookup.py\r
# Description: High-speed O(1) membership testing vs O(N) list search\r
# ====================================================================\r
\r
# Authorized server access credentials / roles in an educational portal\r
authorized_users = {"admin_sukanta", "moderator_deb", "editor_susmita", "teacher_mamata"}\r
\r
# Checking login attempt\r
current_login = "student_abhronila"\r
\r
if current_login in authorized_users:\r
    print(f"Access Granted! Welcome, {current_login}.")\r
else:\r
    print(f"Access Denied: '{current_login}' does not have administrative privileges.")\r
\r
# High-velocity membership testing across batches\r
enrolled_courses = {"Python-Pro", "Data-Structures", "Web-Development", "Accounting-Tally"}\r
inquiry_course = "Python-Pro"\r
\r
print(f"\\nIs '{inquiry_course}' currently active? -> {inquiry_course in enrolled_courses}")\r
print(f"Is 'Cloud-Computing' currently active? -> {'Cloud-Computing' in enrolled_courses}")\r
`,y=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
                PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_006: SETS\r
                         TOPIC 0: INTRODUCTION TO SETS\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. EXECUTIVE SUMMARY & CORE DEFINITION\r
--------------------------------------------------------------------------------\r
A Set in Python is an unordered, unindexed, and mutable collection of unique,\r
immutable (hashable) elements. Sets directly model the mathematical concept of\r
a finite set and are implemented internally using hash tables (hash sets).\r
\r
Key Characteristics:\r
  • Uniqueness: Duplicates are strictly disallowed and automatically pruned.\r
  • Unordered: Elements do not have a defined index, position, or insertion order.\r
  • Hashable Elements Only: Every element inside a set must be immutable (integers,\r
    floats, strings, tuples, frozensets, booleans). Mutable types (lists, dicts,\r
    sets) cannot be elements of a set.\r
  • High Performance: Membership testing ('in' / 'not in') executes in O(1) \r
    average time complexity, compared to O(N) linear scans in lists and tuples.\r
\r
--------------------------------------------------------------------------------\r
2. SYNTAX & CREATION MECHANISMS\r
--------------------------------------------------------------------------------\r
  A. Set Literal Syntax:\r
     student_ids = {101, 102, 103, 104}\r
\r
  B. Set Constructor:\r
     unique_chars = set("Barrackpore")     # {'B', 'a', 'r', 'c', 'k', 'p', 'o', 'e'}\r
     unique_nums  = set([10, 20, 10, 30])  # {10, 20, 30}\r
\r
  C. CRITICAL GOTCHA: Empty Set Creation:\r
     empty_dict = {}     # TYPE: <class 'dict'>  <-- DANGER: Creates empty dictionary!\r
     empty_set  = set()  # TYPE: <class 'set'>   <-- CORRECT: Creates empty set\r
\r
--------------------------------------------------------------------------------\r
3. INTERNAL ARCHITECTURE (HOW SETS WORK UNDER THE HOOD)\r
--------------------------------------------------------------------------------\r
Python sets are implemented as open-addressing hash tables:\r
  1. When an element is added, Python computes its hash value: hash(element).\r
  2. The hash value determines the array bucket index where the element is stored.\r
  3. If a duplicate element is added, its hash matches an existing bucket and the\r
     equality check (a == b) confirms duplication; the new entry is discarded.\r
  4. Lookup time is O(1) because Python calculates the hash and jumps directly\r
     to the bucket without scanning the entire sequence.\r
\r
--------------------------------------------------------------------------------\r
4. REAL-WORLD PRACTICAL USE CASES\r
--------------------------------------------------------------------------------\r
  • Use Case 1: Instant Deduplication of Database & Form Registrations\r
    Example: Filtering 10,000 voter IDs from Kolkata & Barrackpore to remove dupes.\r
  • Use Case 2: Ultra-Fast Access Control & Role Permission Verification\r
    Example: Checking if user_role in {"admin", "superadmin", "auditor"}.\r
  • Use Case 3: Tag Management & Categorization in Content Platforms\r
    Example: Blog post tags {"python", "react", "backend", "web"}.\r
  • Use Case 4: Word Vocabulary & Natural Language Processing (NLP)\r
    Example: Extracting unique keywords from article paragraphs.\r
\r
--------------------------------------------------------------------------------\r
5. COMMON PITFALLS & MISTAKES TO AVOID\r
--------------------------------------------------------------------------------\r
  [x] Mistake 1: Attempting index access: my_set[0] -> TypeError: 'set' object is not subscriptable.\r
  [x] Mistake 2: Creating empty set with {} instead of set().\r
  [x] Mistake 3: Putting a list inside a set: {[1, 2], [3, 4]} -> TypeError: unhashable type: 'list'.\r
  [x] Mistake 4: Relying on element printing order; set order is non-deterministic and can vary.\r
\r
--------------------------------------------------------------------------------\r
6. TEACHER'S MASTER CHECKLIST\r
--------------------------------------------------------------------------------\r
  [v] Use sets when uniqueness and ultra-fast O(1) membership lookup matter.\r
  [v] Use lists when sequential order, index access, and duplicate elements matter.\r
  [v] Use dictionaries when key-value associative mappings are required.\r
  [v] Always use set() to instantiate an empty set.\r
\r
================================================================================\r
                    END OF STUDY NOTE • TOPIC 0: SETS\r
================================================================================\r
`,g=[{question:"What is a Set in Python, and what are its primary defining characteristics?",shortAnswer:"A Set is an unordered, mutable collection of unique and immutable (hashable) elements.",explanation:"In Python, a set is an iterable data structure modeled after mathematical sets. Its two fundamental rules are: 1) every element must be unique (no duplicates), and 2) elements must be hashable/immutable. Sets are unordered, meaning they do not maintain insertion order or integer indices.",hint:"Think of a mathematical set where duplicate elements cannot exist and position does not matter.",level:"basic",codeExample:`s = {10, 20, 30, 20}
print(s)  # Output: {10, 20, 30}
print(type(s))  # <class 'set'>`},{question:"What happens when duplicate values are passed into a set literal or set() constructor?",shortAnswer:"Python automatically eliminates duplicate entries, retaining only one instance.",explanation:"When evaluating set literals or passing an iterable to set(), Python computes the hash of each item. If an item matches an existing item's hash and equality check (a == b), the redundant element is quietly ignored without throwing an error.",hint:"Observe how duplicate items collapse into a single distinct representation.",level:"basic",codeExample:`names = {"Mamata", "Susmita", "Debangshu", "Mamata"}
print(names)  # {'Mamata', 'Susmita', 'Debangshu'}
print(len(names))  # 3`},{question:"How do you create an empty set in Python, and why does {} NOT create an empty set?",shortAnswer:"Use set() to create an empty set. {} creates an empty dictionary for historical backward compatibility.",explanation:"Because dictionaries preceded sets in Python's language history, the empty curly braces literal {} was already reserved for empty dictionaries (<class 'dict'>). To instantiate an empty set, you must explicitly call the built-in type constructor set().",hint:"Check type({}) vs type(set()).",level:"basic",codeExample:`empty_dict = {}
print(type(empty_dict))  # <class 'dict'>

empty_set = set()
print(type(empty_set))   # <class 'set'>`},{question:"Why does attempting to access a set element by index (e.g., s[0]) raise a TypeError?",shortAnswer:"Sets are unordered collections without positional sequence indexing, so subscripting is unsupported.",explanation:"Sets are backed internally by open-addressing hash tables, not contiguous array blocks. Elements are placed into hash buckets based on hash(x), meaning there is no first, second, or last element concept. Attempting s[0] raises TypeError: 'set' object is not subscriptable.",hint:"Recall that hash buckets do not have 0, 1, 2 integer indices.",level:"moderate",codeExample:`cities = {"Kolkata", "Barrackpore", "Jadavpur"}
try:
    print(cities[0])
except TypeError as e:
    print(e)  # 'set' object is not subscriptable`},{question:"What types of objects can be elements of a Python set, and what cannot?",shortAnswer:"Only immutable, hashable objects (int, float, str, tuple, frozenset) can be elements; mutable objects (list, dict, set) cannot.",explanation:"To guarantee O(1) lookups and uniqueness, a set must calculate a permanent hash value for each element via hash(). If an element were mutable (like a list), its contents and hash could change after insertion, corrupting the hash table. Thus, mutable types raise TypeError: unhashable type.",hint:"Ask whether the object can change its content in place.",level:"moderate",codeExample:`# Valid:
valid_set = {10, "Kolkata", (1, 2), True}

# Invalid (raises TypeError):
# invalid_set = {[1, 2], [3, 4]}  # TypeError: unhashable type: 'list'`},{question:"Why is a tuple allowed inside a set, but a tuple containing a list is disallowed?",shortAnswer:"A tuple is only hashable if all of its contained items are also hashable.",explanation:"Python evaluates hashability recursively. While a tuple itself is immutable, if it contains a reference to a mutable object (such as a list: (1, [2, 3])), its overall hash cannot be calculated reliably, raising TypeError: unhashable type: 'list'.",hint:"Look inside the tuple: are all nested children immutable?",level:"expert",codeExample:`t1 = (1, 2, "Barrackpore")
s = {t1}  # Valid

t2 = (1, [2, 3])
# s.add(t2)  # TypeError: unhashable type: 'list'`},{question:"What is the average time complexity for testing membership ('x in s') in a set vs a list?",shortAnswer:"Set membership is O(1) on average, whereas list membership is O(N) linear time.",explanation:"In a list, Python must sequentially inspect every element from index 0 up to N-1 (linear scan O(N)). In a set, Python computes hash(x), immediately inspects the corresponding hash bucket in O(1) average time, making sets exponentially faster for lookups across large datasets.",hint:"Compare jumping directly to a calculated bucket vs scanning line-by-line.",level:"moderate",codeExample:`# Checking membership with 1,000,000 items:
# list_lookup -> O(N) (scans up to 1M items)
# set_lookup  -> O(1) (instant bucket jump)`},{question:"How does set(iterable) behave when passed a string, a list, and a dictionary?",shortAnswer:"Strings yield unique characters; lists yield unique items; dictionaries yield unique keys.",explanation:"The set() constructor iterates through the given iterable: for a string it extracts each individual character, for a list it deduplicates the list elements, and for a dictionary it iterates over dict.keys() by default.",hint:"Remember that iterating over a dictionary yields its keys.",level:"moderate",codeExample:`print(set("banana"))  # {'b', 'a', 'n'}
print(set([1, 2, 2, 3]))  # {1, 2, 3}
print(set({"a": 1, "b": 2}))  # {'a', 'b'}`},{question:"How does Python treat boolean values True and False when 1 and 0 are already present in a set?",shortAnswer:"True is treated as duplicate of 1, and False is treated as duplicate of 0 (since in Python bool inherits from int).",explanation:"In Python, bool is a subclass of int where True == 1 and False == 0, and hash(True) == hash(1) and hash(False) == hash(0). Because their values and hashes are identical, a set will consider them duplicates and retain whichever was encountered first.",hint:"Evaluate hash(True) == hash(1) and True == 1 in Python.",level:"expert",codeExample:`s1 = {1, True, "Hello"}
print(s1)  # {1, 'Hello'} (True is omitted as dupe of 1)

s2 = {True, 1, "Hello"}
print(s2)  # {True, 'Hello'} (1 is omitted as dupe of True)`},{question:"Can a set contain another set as an element? How can you represent a set of sets?",shortAnswer:"No, a set cannot contain a mutable set. You must use frozenset (an immutable set) as elements.",explanation:"Because sets are mutable and unhashable, attempting to nest a set inside a set ({ {1, 2}, {3, 4} }) raises TypeError: unhashable type: 'set'. To create a set of sets, the inner sets must be instantiated as frozenset objects.",hint:"Look for the immutable sibling of set: frozenset.",level:"expert",codeExample:`# Invalid:
# s = {{1, 2}, {3, 4}}  # TypeError: unhashable type: 'set'

# Valid using frozenset:
s = {frozenset({1, 2}), frozenset({3, 4})}
print(len(s))  # 2`},{question:"What is the output of len(set([10, 20, 20.0, 30, '30'])) and why?",shortAnswer:"4, because 20 == 20.0 and hash(20) == hash(20.0), while 30 and '30' are distinct types.",explanation:"20 (int) and 20.0 (float) have equal numerical values (20 == 20.0) and identical hashes (hash(20) == hash(20.0)), so they are deduplicated to one element. However, 30 (int) and '30' (str) have different types and values, so both remain. Elements: {10, 20, 30, '30'}.",hint:"Check numerical equality between int and float vs int and str.",level:"moderate",codeExample:`s = set([10, 20, 20.0, 30, '30'])
print(s)     # {10, 20, 30, '30'}
print(len(s)) # 4`},{question:"Why is iterating over a set in Python non-deterministic across different Python sessions for string elements?",shortAnswer:"Python uses randomized string hash seeds (hash randomization) for security against Denial-of-Service attacks.",explanation:"Since Python 3.3, a randomized seed (PYTHONHASHSEED) is generated at Python startup. This changes the hash values of strings between different interpreter runs, altering bucket distribution and iteration order to prevent algorithmic complexity DoS attacks on hash tables.",hint:"Think about security protections against hash collision attacks.",level:"expert",codeExample:`# In terminal session 1:
# set('abc') -> {'b', 'a', 'c'}
# In terminal session 2:
# set('abc') -> {'a', 'c', 'b'}`},{question:"What is the memory overhead comparison between a Python list and a Python set?",shortAnswer:"Sets consume significantly more memory than lists because hash tables require sparse, pre-allocated buckets.",explanation:"Lists only store a contiguous array of object pointers. Sets must store an open-addressing hash table with hash values, keys, and empty bucket buffers (maintaining roughly 1/3 to 2/3 sparsity) to prevent hash collisions, resulting in a 4x to 8x higher memory footprint.",hint:"Consider why hash tables must keep empty slots to avoid collision clumping.",level:"moderate",codeExample:`import sys
nums = list(range(100))
print("List bytes:", sys.getsizeof(nums))  # ~856 bytes
print("Set bytes:", sys.getsizeof(set(nums)))  # ~8408 bytes`},{question:"How do you check if an element is NOT present in a set?",shortAnswer:"Use the 'not in' operator (e.g., 'item not in my_set').",explanation:"The 'not in' operator tests for non-membership in O(1) average time. It returns True if the element is absent from the set's hash table and False if it exists.",hint:"Use Python's readable English-like non-membership keyword.",level:"basic",codeExample:`banned_ips = {"192.168.1.50", "10.0.0.12"}
client_ip = "192.168.1.100"

if client_ip not in banned_ips:
    print("Connection allowed.")`},{question:"What happens if you convert a dictionary to a set using set(my_dict.values())?",shortAnswer:"It extracts and deduplicates only the values of the dictionary into a set.",explanation:"Calling set(my_dict) extracts the dictionary's keys. To create a set of unique dictionary values, you explicitly pass the values view: set(my_dict.values()). All values must be hashable.",hint:"Pass the .values() view explicitly to the set constructor.",level:"moderate",codeExample:`marks = {"Susmita": 95, "Mamata": 95, "Debangshu": 88}
unique_marks = set(marks.values())
print(unique_marks)  # {88, 95}`},{question:"How can you safely convert a list with duplicates into a sorted list without duplicates?",shortAnswer:"Wrap the list in set() to deduplicate, then pass it to sorted() (e.g., sorted(set(my_list))).",explanation:"set(my_list) strips all duplicate occurrences in O(N) time. Passing the resulting set into sorted() converts it into a fresh, sequentially ordered list in O(K log K) time, where K is the count of unique elements.",hint:"Combine set() for uniqueness and sorted() for ordering.",level:"basic",codeExample:`raw_scores = [85, 92, 78, 85, 95, 78, 92]
unique_sorted = sorted(set(raw_scores))
print(unique_sorted)  # [78, 85, 92, 95]`},{question:"Why does Python allow custom class instances to be stored in sets by default?",shortAnswer:"By default, user-defined class objects inherit object.__hash__() (their memory id) and object.__eq__().",explanation:"In Python, unless __hash__ is explicitly set to None, user-defined class instances inherit identity-based hashing (their id() address) and identity equality (is comparison). Two distinct instances with identical attributes will be treated as separate set elements unless __eq__ and __hash__ are custom-overridden.",hint:"Every custom object gets an address-based hash by default.",level:"expert",codeExample:`class Student:
    def __init__(self, name):
        self.name = name

s1 = Student("Susmita")
s2 = Student("Susmita")
s = {s1, s2}
print(len(s))  # 2 (distinct object memory addresses!)`},{question:"If a class overrides __eq__, why does Python automatically set its __hash__ to None?",shortAnswer:"To prevent breaking the hash table invariant that equal objects must have equal hash values.",explanation:"The fundamental hash invariant states: If a == b, then hash(a) must equal hash(b). If a developer implements custom __eq__ without defining __hash__, Python sets __hash__ = None so the object cannot be placed into sets or dictionaries in a broken state.",hint:"If two items compare equal, their hash codes must match.",level:"expert",codeExample:`class Point:
    def __init__(self, x, y):
        self.x, self.y = x, y
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

# p = Point(1, 2)
# s = {p}  # TypeError: unhashable type: 'Point'`},{question:"How can you properly make a custom class hashable for use in sets?",shortAnswer:"Implement both __eq__ and __hash__ methods based on immutable instance attributes.",explanation:"To make a custom class safely hashable, implement __eq__ to compare attribute equality, and __hash__ by returning the hash of a tuple of those same immutable attributes (e.g., return hash((self.x, self.y))).",hint:"Combine attribute values into a tuple and return hash(tuple).",level:"expert",codeExample:`class Point:
    def __init__(self, x, y):
        self.x, self.y = x, y
    def __eq__(self, other):
        return isinstance(other, Point) and (self.x, self.y) == (other.x, other.y)
    def __hash__(self):
        return hash((self.x, self.y))

p1, p2 = Point(2, 3), Point(2, 3)
pts = {p1, p2}
print(len(pts))  # 1 (Correctly deduplicated!)`},{question:"What is the difference between a Set and a Frozenset in Python?",shortAnswer:"A Set is mutable (can add/remove items), whereas a Frozenset is immutable and hashable.",explanation:"Sets can be modified in place (via add, remove, pop, etc.) and are unhashable. Frozensets cannot be modified after creation, making them hashable so they can serve as dictionary keys or elements inside other sets.",hint:"Think of set vs frozenset like list vs tuple.",level:"moderate",codeExample:`fs = frozenset([1, 2, 3])
# fs.add(4)  # AttributeError: 'frozenset' object has no attribute 'add'

d = {fs: "Valid Key"}
print(d[fs])  # 'Valid Key'`},{question:"What is the time complexity of building a set from a list of N elements?",shortAnswer:"O(N) time complexity on average.",explanation:"Constructing a set iterates through the list of N items once, computing the hash and inserting each item into the hash table in O(1) average time. Therefore, total construction time is O(N).",hint:"N items inserted at O(1) average cost each.",level:"moderate",codeExample:`raw_data = [i % 50 for i in range(100000)]
unique_set = set(raw_data)  # Takes O(N) linear time`},{question:"Can sets contain None as an element in Python?",shortAnswer:"Yes, None is an immutable object and can be stored in a set (only once).",explanation:"None is a first-class immutable singleton object in Python with a valid hash (hash(None)). It can be added to a set just like any integer or string, and duplicate None values will be deduplicated to a single entry.",hint:"Check hash(None) in Python interactive shell.",level:"basic",codeExample:`s = {10, None, 20, None, 30}
print(s)  # {None, 10, 20, 30}
print(None in s)  # True`},{question:"Why should you NOT use a set if the order of elements must be strictly preserved?",shortAnswer:"Sets do not preserve insertion order; use a list or dict.fromkeys() if order is required.",explanation:"Sets prioritize O(1) hash table lookup efficiency over sequencing. If you need both deduplication AND insertion order preservation, use list(dict.fromkeys(my_list)), because dictionaries in Python 3.7+ guarantee insertion order.",hint:"Use dict.fromkeys() to maintain order while stripping duplicates.",level:"moderate",codeExample:`seq = ["Kolkata", "Barrackpore", "Kolkata", "Ichapur"]
# Preserves order while removing duplicates:
ordered_unique = list(dict.fromkeys(seq))
print(ordered_unique)  # ['Kolkata', 'Barrackpore', 'Ichapur']`},{question:"What is the output of set() == set() and {1, 2, 3} == {3, 2, 1}?",shortAnswer:"Both evaluate to True because set equality checks content, disregarding order.",explanation:"In Python, set equality (s1 == s2) returns True if both sets contain the exact same unique elements, regardless of internal bucket layout or presentation order.",hint:"Sets compare equal if their distinct contents match.",level:"basic",codeExample:`print(set() == set())            # True
print({1, 2, 3} == {3, 2, 1})      # True
print({1, 2, 3} == {1, 2, 3, 2})   # True`},{question:"How can you determine the number of distinct characters in a given paragraph string?",shortAnswer:"Pass the string directly into len(set(paragraph)).",explanation:"Passing a string into set() treats it as an iterable of single characters and drops all repeated letters, spaces, and punctuation. Calling len() on the resulting set yields the exact count of unique characters.",hint:"String into set() yields unique characters, then count with len().",level:"basic",codeExample:`text = "Learn Python programming at Barrackpore"
unique_char_count = len(set(text))
print("Unique characters count:", unique_char_count)`},{question:"What error occurs if you attempt to create a set literal with a dictionary inside: {{'a': 1}}?",shortAnswer:"TypeError: unhashable type: 'dict'.",explanation:"Dictionaries are mutable data structures and do not have a __hash__ method. Attempting to place a dictionary directly as a set element causes Python's hash lookup to fail with a TypeError.",hint:"Dictionaries are mutable and cannot be hashed.",level:"moderate",codeExample:`try:
    bad_set = {{'role': 'admin'}}
except TypeError as e:
    print(e)  # unhashable type: 'dict'`},{question:"What is the difference between passing an iterable to set() vs enclosing it in curly braces {iterable}?",shortAnswer:"set(iterable) unpacks elements and deduplicates; {iterable} creates a set containing the single iterable object.",explanation:"set([1, 2, 3]) iterates through the list, creating {1, 2, 3}. In contrast, {[1, 2, 3]} tries to create a set whose single element is the list itself (which immediately fails with TypeError: unhashable type: 'list'). For a tuple, {(1, 2)} creates a set with 1 element: {(1, 2)}.",hint:"Notice the difference between calling the constructor vs using literal brackets.",level:"moderate",codeExample:`print(set((1, 2, 3)))  # {1, 2, 3} (3 elements)
print({(1, 2, 3)})       # {(1, 2, 3)} (1 element: the tuple itself)`},{question:"How do sets handle float precision edge cases like 0.1 + 0.2 vs 0.3?",shortAnswer:"Due to IEEE 754 floating-point inaccuracies, 0.1 + 0.2 != 0.3, so both exist as separate set elements.",explanation:"In binary floating-point representation, 0.1 + 0.2 evaluates to 0.30000000000000004. Because 0.1 + 0.2 != 0.3, their hashes differ, and a set will treat them as two distinct numbers.",hint:"Check 0.1 + 0.2 == 0.3 in standard Python arithmetic.",level:"expert",codeExample:`val1 = 0.1 + 0.2
val2 = 0.3
s = {val1, val2}
print(len(s))  # 2
print(s)       # {0.30000000000000004, 0.3}`},{question:"Can you slice a set using [start:stop:step] syntax in Python?",shortAnswer:"No, slicing requires subscriptable sequential ordering, which sets do not possess.",explanation:"Slicing is a sequence operation that depends on integer indices. Because sets are unindexed, attempting s[1:4] raises TypeError: 'set' object is not subscriptable. If slicing is needed, convert the set to a list or tuple first.",hint:"Sets do not have index positions to define start and stop bounds.",level:"basic",codeExample:`s = {10, 20, 30, 40}
# sub = s[1:3]  # TypeError: 'set' object is not subscriptable

# Workaround:
sub = list(s)[1:3]
print(sub)`},{question:"When should a Python developer choose a Set over a List or Dictionary in real-world software architecture?",shortAnswer:"Choose a Set when you need to enforce uniqueness, eliminate duplicates, or perform rapid O(1) membership lookups and mathematical set operations (unions/intersections).",explanation:"Sets are the ideal architectural choice for permission checks, tag registries, visited URL tracking in web crawlers, duplicate payload detection, and mathematical relationship comparisons (e.g. mutual friends). Use lists when order and duplicates matter, and dictionaries when associating keys with values.",hint:"Match the data structure to the requirement: Uniqueness + Lookup Speed = Set.",level:"moderate",codeExample:`# Real-world visited URL tracker in a web scraper:
visited_urls = set()

def scrape(url):
    if url in visited_urls:
        return  # O(1) instant skip
    visited_urls.add(url)
    # perform network request...`}];function E(){const i=o.useRef([]),[r,l]=o.useState("hash");o.useEffect(()=>{const s=new IntersectionObserver(n=>{n.forEach(d=>{d.isIntersecting&&d.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return i.current.forEach(n=>{n&&s.observe(n)}),()=>s.disconnect()},[]);const t=s=>{s&&!i.current.includes(s)&&i.current.push(s)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-emerald-500/30 selection:text-emerald-200",children:[e.jsx("style",{children:`
        .section-hidden {
          transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .section-visible {
          transform: translateY(0);
        }
        @keyframes pulseGlow {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(56, 189, 248, 0.4)); }
          50% { filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.8)); }
        }
        .animate-glow {
          animation: pulseGlow 3s infinite ease-in-out;
        }
      `}),e.jsxs("header",{ref:t,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-emerald-950/80 text-emerald-300 px-3 py-1 rounded-full border border-emerald-800/80 shadow-sm shadow-emerald-950/50",children:"Segment 2 • Module 002_006"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-sky-950/80 text-sky-300 px-3 py-1 rounded-full border border-sky-800/80 shadow-sm shadow-sky-950/50",children:"Topic 0"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Core Data Structures"})]}),e.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:"Introduction to Sets in Python"}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Unlocking high-speed ",e.jsx("span",{className:"text-emerald-400 font-semibold",children:"O(1)"})," lookups, automatic deduplication, and mathematical set theory with Python's hash-powered collection."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🎯 Guaranteed Uniqueness"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ O(1) Hash Table Lookup"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔒 Hashable Elements Only"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔄 Mutable Container"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💎"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. What is a Set in Python?"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["In Python, a ",e.jsx("strong",{className:"text-white",children:"Set"})," is an ",e.jsx("em",{children:"unordered"}),", ",e.jsx("em",{children:"unindexed"}),", and ",e.jsx("em",{children:"mutable"})," collection of ",e.jsx("strong",{className:"text-emerald-400",children:"unique"}),", ",e.jsx("strong",{className:"text-sky-400",children:"immutable (hashable)"})," items. Modeled directly on the mathematical concept of sets, it serves two foundational purposes in modern software engineering:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 shadow-lg shadow-emerald-950/30 transition-all duration-300 hover:scale-[1.01] hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"✨"})," Automatic Deduplication"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Duplicates are strictly prohibited. Any redundant element entered into a set is silently and automatically stripped away in ",e.jsx("span",{className:"font-semibold text-emerald-400",children:"O(1)"})," time without errors."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-sky-950/40 border border-sky-800/60 shadow-lg shadow-sky-950/30 transition-all duration-300 hover:scale-[1.01] hover:border-sky-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sky-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"⚡"})," Ultra-Fast Membership Testing"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Checking if an item exists (",e.jsx("code",{className:"text-sky-300 font-mono",children:"x in s"}),") executes in ",e.jsx("strong",{className:"text-white",children:"O(1) average time"}),", compared to scanning sequentially through a list in ",e.jsx("span",{className:"font-semibold text-amber-400",children:"O(N) time"}),"."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-emerald-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-2",children:"Core Rules of Python Sets (The 4 Pillars):"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1.5 text-sm sm:text-base text-slate-300",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-white",children:"No Duplicates:"})," Every member must be completely distinct."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-white",children:"Unordered:"})," Elements do not maintain an insertion order or fixed index. Slicing (",e.jsx("code",{className:"font-mono text-emerald-400",children:"s[0:2]"}),") is not supported."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-white",children:"Mutable Container:"})," You can add or remove elements after the set has been created."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-white",children:"Hashable Elements:"})," Elements inside must be immutable (numbers, strings, tuples, frozensets). Mutable objects like lists, dictionaries, or other sets cannot be members."]})]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"🔍"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. How Sets Work Under the Hood"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>l("hash"),className:c("px-3 py-1.5 rounded-lg transition-all",r==="hash"?"bg-emerald-900/50 text-emerald-300 border border-emerald-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Hash Table Architecture"}),e.jsx("button",{onClick:()=>l("complexity"),className:c("px-3 py-1.5 rounded-lg transition-all",r==="complexity"?"bg-sky-900/50 text-sky-300 border border-sky-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Set vs List Search Time"})]})]}),e.jsxs("p",{className:"text-slate-300 mb-6 text-base",children:["Sets are implemented internally using ",e.jsx("strong",{className:"text-white",children:"open-addressing hash tables"}),". When an element is added, Python passes it to ",e.jsx("code",{className:"font-mono text-emerald-400",children:"hash()"})," to compute its bucket address."]}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:r==="hash"?e.jsxs("svg",{viewBox:"0 0 850 360",className:"w-full h-auto min-w-[650px] font-sans",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"gradEmerald",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#10b981",stopOpacity:"0.9"}),e.jsx("stop",{offset:"100%",stopColor:"#059669",stopOpacity:"0.9"})]})}),e.jsx("text",{x:"30",y:"35",fill:"#94a3b8",fontSize:"13",fontWeight:"bold",children:"1. RAW INPUT STREAM"}),e.jsxs("g",{className:"cursor-pointer transition-transform duration-300 hover:scale-105",children:[e.jsx("rect",{x:"30",y:"60",width:"130",height:"42",rx:"8",fill:"#1e293b",stroke:"#334155",strokeWidth:"1.5"}),e.jsx("text",{x:"45",y:"86",fill:"#f8fafc",fontSize:"13",fontWeight:"600",children:'"Susmita" (1st)'})]}),e.jsxs("g",{className:"cursor-pointer transition-transform duration-300 hover:scale-105",children:[e.jsx("rect",{x:"30",y:"115",width:"130",height:"42",rx:"8",fill:"#1e293b",stroke:"#334155",strokeWidth:"1.5"}),e.jsx("text",{x:"45",y:"141",fill:"#f8fafc",fontSize:"13",fontWeight:"600",children:'"Debangshu"'})]}),e.jsxs("g",{className:"cursor-pointer transition-transform duration-300 hover:scale-105",children:[e.jsx("rect",{x:"30",y:"170",width:"130",height:"42",rx:"8",fill:"#1e293b",stroke:"#ef4444",strokeWidth:"2",strokeDasharray:"4 2"}),e.jsx("text",{x:"45",y:"196",fill:"#fca5a5",fontSize:"13",fontWeight:"600",children:'"Susmita" (Dupe!)'})]}),e.jsxs("g",{className:"cursor-pointer transition-transform duration-300 hover:scale-105",children:[e.jsx("rect",{x:"30",y:"225",width:"130",height:"42",rx:"8",fill:"#1e293b",stroke:"#334155",strokeWidth:"1.5"}),e.jsx("text",{x:"45",y:"251",fill:"#f8fafc",fontSize:"13",fontWeight:"600",children:'"Mamata"'})]}),e.jsx("rect",{x:"230",y:"75",width:"150",height:"180",rx:"12",fill:"#090d16",stroke:"#0ea5e9",strokeWidth:"2"}),e.jsx("text",{x:"252",y:"110",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"2. HASH ENGINE"}),e.jsx("text",{x:"250",y:"135",fill:"#94a3b8",fontSize:"12",children:'hash("Susmita") → 4'}),e.jsx("text",{x:"250",y:"165",fill:"#94a3b8",fontSize:"12",children:'hash("Debangshu") → 1'}),e.jsx("text",{x:"250",y:"195",fill:"#fca5a5",fontSize:"12",children:'hash("Susmita") → 4'}),e.jsx("text",{x:"250",y:"225",fill:"#94a3b8",fontSize:"12",children:'hash("Mamata") → 7'}),e.jsx("path",{d:"M 160 81 L 230 115",stroke:"#38bdf8",strokeWidth:"2",fill:"none"}),e.jsx("path",{d:"M 160 136 L 230 145",stroke:"#38bdf8",strokeWidth:"2",fill:"none"}),e.jsx("path",{d:"M 160 191 L 230 195",stroke:"#ef4444",strokeWidth:"2",strokeDasharray:"3 3",fill:"none"}),e.jsx("path",{d:"M 160 246 L 230 225",stroke:"#38bdf8",strokeWidth:"2",fill:"none"}),e.jsx("text",{x:"450",y:"35",fill:"#94a3b8",fontSize:"13",fontWeight:"bold",children:"3. INTERNAL HASH BUCKET ARRAY"}),e.jsx("rect",{x:"450",y:"55",width:"370",height:"34",rx:"6",fill:"#1e293b",stroke:"#334155",strokeWidth:"1"}),e.jsx("text",{x:"465",y:"77",fill:"#64748b",fontSize:"12",fontWeight:"bold",children:"Bucket [0]:"}),e.jsx("text",{x:"550",y:"77",fill:"#64748b",fontSize:"12",children:"<EMPTY>"}),e.jsx("rect",{x:"450",y:"95",width:"370",height:"34",rx:"6",fill:"#1e293b",stroke:"#059669",strokeWidth:"1.5"}),e.jsx("text",{x:"465",y:"117",fill:"#34d399",fontSize:"12",fontWeight:"bold",children:"Bucket [1]:"}),e.jsx("text",{x:"550",y:"117",fill:"#f8fafc",fontSize:"12",fontWeight:"600",children:'"Debangshu"'}),e.jsx("text",{x:"730",y:"117",fill:"#10b981",fontSize:"11",children:"✓ Stored"}),e.jsx("rect",{x:"450",y:"135",width:"370",height:"34",rx:"6",fill:"#1e293b",stroke:"#334155",strokeWidth:"1"}),e.jsx("text",{x:"465",y:"157",fill:"#64748b",fontSize:"12",fontWeight:"bold",children:"Bucket [2]:"}),e.jsx("text",{x:"550",y:"157",fill:"#64748b",fontSize:"12",children:"<EMPTY>"}),e.jsx("rect",{x:"450",y:"175",width:"370",height:"34",rx:"6",fill:"#1e293b",stroke:"#334155",strokeWidth:"1"}),e.jsx("text",{x:"465",y:"197",fill:"#64748b",fontSize:"12",fontWeight:"bold",children:"Bucket [3]:"}),e.jsx("text",{x:"550",y:"197",fill:"#64748b",fontSize:"12",children:"<EMPTY>"}),e.jsx("rect",{x:"450",y:"215",width:"370",height:"34",rx:"6",fill:"#1e293b",stroke:"#059669",strokeWidth:"1.5"}),e.jsx("text",{x:"465",y:"237",fill:"#34d399",fontSize:"12",fontWeight:"bold",children:"Bucket [4]:"}),e.jsx("text",{x:"550",y:"237",fill:"#f8fafc",fontSize:"12",fontWeight:"600",children:'"Susmita"'}),e.jsx("text",{x:"680",y:"237",fill:"#ef4444",fontSize:"11",children:"⚡ Dupe rejected!"}),e.jsx("rect",{x:"450",y:"255",width:"370",height:"34",rx:"6",fill:"#1e293b",stroke:"#059669",strokeWidth:"1.5"}),e.jsx("text",{x:"465",y:"277",fill:"#34d399",fontSize:"12",fontWeight:"bold",children:"Bucket [7]:"}),e.jsx("text",{x:"550",y:"277",fill:"#f8fafc",fontSize:"12",fontWeight:"600",children:'"Mamata"'}),e.jsx("text",{x:"730",y:"277",fill:"#10b981",fontSize:"11",children:"✓ Stored"}),e.jsx("rect",{x:"450",y:"305",width:"370",height:"42",rx:"8",fill:"url(#gradEmerald)"}),e.jsxs("text",{x:"465",y:"331",fill:"#ffffff",fontSize:"13",fontWeight:"bold",children:["Final Output Set: ",'{"Debangshu", "Susmita", "Mamata"}'," (Len: 3)"]})]}):e.jsxs("svg",{viewBox:"0 0 850 320",className:"w-full h-auto min-w-[650px] font-sans",children:[e.jsx("text",{x:"30",y:"35",fill:"#f8fafc",fontSize:"15",fontWeight:"bold",children:"Time Complexity: List vs Set Membership Search"}),e.jsx("rect",{x:"30",y:"65",width:"380",height:"220",rx:"10",fill:"#1e293b",stroke:"#f59e0b",strokeWidth:"1.5"}),e.jsx("text",{x:"50",y:"95",fill:"#fbbf24",fontSize:"14",fontWeight:"bold",children:"List Search: O(N) Linear Scan"}),e.jsx("text",{x:"50",y:"125",fill:"#cbd5e1",fontSize:"13",children:'target = "Mamata"'}),e.jsx("rect",{x:"50",y:"145",width:"60",height:"36",rx:"4",fill:"#334155"}),e.jsx("text",{x:"60",y:"168",fill:"#94a3b8",fontSize:"11",children:"Step 1 ✗"}),e.jsx("rect",{x:"120",y:"145",width:"60",height:"36",rx:"4",fill:"#334155"}),e.jsx("text",{x:"130",y:"168",fill:"#94a3b8",fontSize:"11",children:"Step 2 ✗"}),e.jsx("rect",{x:"190",y:"145",width:"60",height:"36",rx:"4",fill:"#334155"}),e.jsx("text",{x:"200",y:"168",fill:"#94a3b8",fontSize:"11",children:"Step 3 ✗"}),e.jsx("rect",{x:"260",y:"145",width:"80",height:"36",rx:"4",fill:"#059669"}),e.jsx("text",{x:"270",y:"168",fill:"#ffffff",fontSize:"11",children:"Step N (Found!)"}),e.jsx("text",{x:"50",y:"220",fill:"#94a3b8",fontSize:"12",children:"If list has 1,000,000 items, Python may check"}),e.jsx("text",{x:"50",y:"240",fill:"#fca5a5",fontSize:"12",fontWeight:"bold",children:"up to 1,000,000 slots one by one!"}),e.jsx("rect",{x:"440",y:"65",width:"380",height:"220",rx:"10",fill:"#1e293b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"460",y:"95",fill:"#34d399",fontSize:"14",fontWeight:"bold",children:"Set Search: O(1) Instant Hash Jump"}),e.jsx("text",{x:"460",y:"125",fill:"#cbd5e1",fontSize:"13",children:'target = "Mamata"'}),e.jsx("rect",{x:"460",y:"145",width:"340",height:"40",rx:"6",fill:"#090d16",stroke:"#0ea5e9",strokeWidth:"1"}),e.jsx("text",{x:"475",y:"170",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",children:'hash("Mamata") → directly jumps to Bucket [7]!'}),e.jsx("text",{x:"460",y:"220",fill:"#94a3b8",fontSize:"12",children:"Even with 100,000,000 items in the set,"}),e.jsx("text",{x:"460",y:"240",fill:"#34d399",fontSize:"12",fontWeight:"bold",children:"lookup takes exactly 1 step on average!"})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🛠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Set Creation Syntax & The Empty Set Trap"})]}),e.jsxs("div",{className:"space-y-6 text-slate-300",children:[e.jsxs("p",{className:"text-base sm:text-lg leading-relaxed",children:["Sets can be created in Python through two primary avenues: ",e.jsx("strong",{className:"text-white",children:"Set Literals"})," using curly braces ",e.jsx("code",{className:"font-mono text-emerald-400",children:"{ ... }"}),", or by passing any iterable into the ",e.jsx("code",{className:"font-mono text-emerald-400",children:"set()"})," constructor."]}),e.jsxs("div",{className:"p-5 rounded-xl bg-amber-950/40 border-l-4 border-amber-500 border border-amber-800/60 text-amber-200",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-lg mb-1",children:[e.jsx("span",{children:"⚠️"})," The #1 Beginner Trap: Empty Set Creation"]}),e.jsxs("p",{className:"text-sm sm:text-base leading-relaxed text-amber-200/90",children:["Writing ",e.jsxs("code",{className:"font-mono font-bold bg-amber-900/50 px-2 py-0.5 rounded text-amber-300",children:["s = ","{}"]})," does ",e.jsx("strong",{className:"text-white",children:"NOT"})," create an empty set. It creates an empty ",e.jsx("strong",{className:"text-white",children:"Dictionary"})," (",e.jsx("code",{className:"font-mono",children:"<class 'dict'>"}),"). You ",e.jsx("strong",{className:"text-white",children:"MUST"})," use ",e.jsx("code",{className:"font-mono font-bold text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-700/60",children:"s = set()"})," to instantiate an empty set!"]})]}),e.jsx("div",{className:"mt-4",children:e.jsx(a,{fileModule:b,title:"set_creation_types.py",highlightLines:[5,8,13,17,22]})})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🌍"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Real-World Industry Scenarios"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🏫"})," 1. School Registration Deduplication"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["When Mamata and Debangshu import 5,000 admission records from schools across ",e.jsx("strong",{className:"text-emerald-400",children:"Barrackpore"})," and ",e.jsx("strong",{className:"text-emerald-400",children:"Ichapur"}),", converting raw student roll numbers to a set instantly identifies exact unique headcounts for exam desk allocations."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🔐"})," 2. High-Speed Role Permission Guards"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["In a web server gateway handling 100,000 API requests per second, checking ",e.jsx("code",{className:"font-mono text-sky-400",children:"if user_role in ALLOWED_ADMIN_ROLES"})," executes in instantaneous ",e.jsx("span",{className:"font-semibold text-emerald-400",children:"O(1)"})," time without taxing CPU cycles."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🏷️"})," 3. Tag & Keyword Indexing in Publishing"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Article tag management systems store hashtags like ",e.jsx("code",{className:"font-mono text-purple-400",children:"{'python', 'backend', 'kolkata'}"}),". Sets make finding overlapping common tags between articles effortless and lightning fast."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🕷️"})," 4. Web Crawler Visited URL Tracking"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Web crawlers maintain a set of visited links. Before crawling a new webpage, an ",e.jsx("span",{className:"font-semibold text-emerald-400",children:"O(1)"})," check prevents scraping the same URL twice, saving network bandwidth and preventing infinite recursion loops."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Hands-On Python Code Demos"})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Example A: Set Creation & Automatic Duplicate Pruning"}),e.jsx(a,{fileModule:x,title:"set_intro_basics.py",highlightLines:[6,12,17,22]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Example B: Real-World Exam Registration Deduplication & Revenue in Rupees (₹)"}),e.jsx(a,{fileModule:p,title:"set_uniqueness_demo.py",highlightLines:[12,17,20]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Example C: High-Velocity Access Control & Role Lookup"}),e.jsx(a,{fileModule:f,title:"set_membership_lookup.py",highlightLines:[6,10,17]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🛑"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Beginner Pitfalls & Traps"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 1: Placing Lists Inside Sets"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:[e.jsxs("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:["s = ","{[1, 2], [3, 4]}"]})," raises ",e.jsx("code",{className:"text-rose-400 font-bold",children:"TypeError: unhashable type: 'list'"}),". Use immutable tuples ",e.jsx("code",{className:"font-mono text-slate-200",children:"{(1, 2), (3, 4)}"})," instead."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 2: Attempting Index Subscripting"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:[e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"first_item = my_set[0]"})," raises ",e.jsx("code",{className:"text-rose-400 font-bold",children:"TypeError: 'set' object is not subscriptable"}),". Sets do not have indices."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 3: Assuming Fixed Print Order"}),e.jsx("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:"Set iteration order is non-deterministic and can vary between Python runs due to randomized string hash seeds. Never rely on set order for sequence-dependent logic."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 4: True / 1 Collisions"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Since in Python ",e.jsx("code",{className:"font-mono text-slate-200",children:"True == 1"})," and ",e.jsx("code",{className:"font-mono text-slate-200",children:"hash(True) == hash(1)"}),", creating ",e.jsx("code",{className:"font-mono text-slate-200",children:"{1, True}"})," keeps only ",e.jsx("code",{className:"font-mono text-emerald-400",children:"{1}"}),". Remember that booleans are integers under the hood."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/90 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💡"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-sky-400",children:"7. Professional Hints & Think-About Prompts"})]}),e.jsxs("div",{className:"space-y-4 text-sm sm:text-base text-slate-300",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-400 font-bold text-lg mt-0.5",children:"💭"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Think about:"})," When Susmita needs to preserve the original insertion order while removing duplicates, what is the cleanest Python one-liner? (",e.jsxs("em",{children:["Hint: ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"list(dict.fromkeys(raw_list))"})]}),")."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3",children:[e.jsx("span",{className:"text-sky-400 font-bold text-lg mt-0.5",children:"👁️"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Observe carefully:"})," Why does ",e.jsx("code",{className:"text-sky-300 font-mono",children:'len(set("banana"))'})," evaluate to 3? Because the unique letters are ",e.jsx("code",{className:"text-sky-300 font-mono",children:"'b'"}),", ",e.jsx("code",{className:"text-sky-300 font-mono",children:"'a'"}),", and ",e.jsx("code",{className:"text-sky-300 font-mono",children:"'n'"}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3",children:[e.jsx("span",{className:"text-amber-400 font-bold text-lg mt-0.5",children:"🧪"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Try changing this:"})," Try creating ",e.jsxs("code",{className:"text-amber-300 font-mono",children:["s = ","{10, (1, 2), True}"]})," and notice how Python effortlessly stores composite immutable tuples inside sets."]})]})]})]}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(h,{content:y,title:"Topic 0: Introduction to Sets Study Guide",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Study Note",downloadFileName:"topic0_intro_to_sets_note.txt"})}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(m,{title:"Topic 0 • Introduction to Sets: Master Review & FAQ Library",questions:g})}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(u,{note:"Remember: Sets are powered by hash tables under the hood. Always use set() for an empty set, never {}. When Susmita, Abhronila, and Debangshu need ultra-fast O(1) duplicate checks or permission checks in Barrackpore or Kolkata, sets are your ultimate weapon!"})})]})]})}export{E as default};
