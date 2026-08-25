import{b as o,j as e,bg as c}from"./vendor-react-core-Doz9nIC6.js";import{P as a}from"./PythonFileLoader-hCi5osN-.js";import{P as h}from"./PlainTextPrint-C08xhKA4.js";import{F as u}from"./FAQTemplate-CkSqDH4B.js";import{T as m}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const x=`# ====================================================================\r
# Topic 2: Unique Nature of Sets\r
# File: uniqueness_in_action.py\r
# Description: Demonstrating automatic duplicate pruning across various data types\r
# ====================================================================\r
\r
# 1. Automatic duplicate removal with integers and floats\r
numbers = {10, 20, 30, 20, 10, 40, 50, 30}\r
print("Unique Integer Set:", numbers)\r
print("Original elements count: 8 -> Unique set count:", len(numbers))\r
\r
# 2. Duplicate string handling\r
students = {"Susmita", "Mamata", "Debangshu", "Susmita", "Abhronila", "Mamata"}\r
print("\\nUnique Student Names:", students)\r
\r
# 3. Numeric equivalence: 1 vs 1.0 vs True\r
mixed_ones = {1, 1.0, True, 1 + 0j}\r
print("\\nSet with {1, 1.0, True, 1 + 0j}:", mixed_ones)\r
print("Length:", len(mixed_ones))  # Exactly 1 because 1 == 1.0 == True and hash values match!\r
\r
# 4. Zero equivalence: 0 vs 0.0 vs False\r
mixed_zeros = {0, 0.0, False}\r
print("\\nSet with {0, 0.0, False}:", mixed_zeros)\r
print("Length:", len(mixed_zeros))  # Exactly 1\r
`,p=`# ====================================================================\r
# Topic 2: Unique Nature of Sets\r
# File: hash_equality_identity.py\r
# Description: The Two-Step Uniqueness Rule: hash(a) == hash(b) AND a == b\r
# ====================================================================\r
\r
# Step 1: Hash equality\r
val1 = 42\r
val2 = 42.0\r
\r
print(f"hash({val1}) = {hash(val1)}")\r
print(f"hash({val2}) = {hash(val2)}")\r
print(f"Are values equal (val1 == val2)? -> {val1 == val2}")\r
print(f"Are identities identical (val1 is val2)? -> {val1 is val2}")\r
\r
# Result in set: Treated as the same element!\r
sample_set = {val1, val2}\r
print("Set containing both 42 and 42.0:", sample_set)\r
print("Length:", len(sample_set))\r
\r
# Step 2: String case sensitivity\r
s1 = "Barrackpore"\r
s2 = "barrackpore"\r
\r
print(f"\\nhash('{s1}') = {hash(s1)}")\r
print(f"hash('{s2}') = {hash(s2)}")\r
print(f"Equality ('{s1}' == '{s2}') -> {s1 == s2}")\r
\r
# Case-sensitive difference -> Both are retained!\r
city_set = {s1, s2}\r
print("City Set:", city_set)\r
print("Length:", len(city_set))\r
`,f=`# ====================================================================\r
# Topic 2: Unique Nature of Sets\r
# File: voter_deduplication.py\r
# Description: Real-World Electoral & Candidate Verification in Barrackpore & Kolkata\r
# ====================================================================\r
\r
# Raw voter registration logs from polling station booths in Barrackpore\r
raw_voter_logs = [\r
    {"voter_id": "WB-BP-1001", "name": "Debangshu Mukherjee", "ward": 14},\r
    {"voter_id": "WB-BP-1002", "name": "Susmita Roy", "ward": 14},\r
    {"voter_id": "WB-BP-1001", "name": "Debangshu Mukherjee", "ward": 14},  # Duplicate submission\r
    {"voter_id": "WB-BP-1003", "name": "Mamata Banerjee", "ward": 15},\r
    {"voter_id": "WB-BP-1002", "name": "Susmita Roy", "ward": 14},          # Duplicate submission\r
    {"voter_id": "WB-BP-1004", "name": "Abhronila Das", "ward": 16},\r
]\r
\r
print(f"Total raw voter submissions logged: {len(raw_voter_logs)}")\r
\r
# Extract unique voter IDs using a set comprehension\r
unique_voter_ids = {entry["voter_id"] for entry in raw_voter_logs}\r
print(f"Verified unique registered voters: {len(unique_voter_ids)}")\r
print("Unique Voter IDs Set:", unique_voter_ids)\r
\r
# Calculating election logistics budget in Indian Rupees (₹)\r
# Standard administrative allowance of ₹150 per unique voter\r
budget_per_voter = 150\r
total_election_grant = len(unique_voter_ids) * budget_per_voter\r
print(f"\\nTotal Polling Station Logistics Grant: ₹{total_election_grant}")\r
`,b=`# ====================================================================\r
# Topic 2: Unique Nature of Sets\r
# File: custom_class_hashing.py\r
# Description: Controlling uniqueness in custom Python classes (__eq__ and __hash__)\r
# ====================================================================\r
\r
class StudentRecord:\r
    def __init__(self, roll_no: int, name: str, branch: str):\r
        self.roll_no = roll_no\r
        self.name = name\r
        self.branch = branch\r
\r
    def __eq__(self, other):\r
        # Two student records are equal if their roll_no matches\r
        if isinstance(other, StudentRecord):\r
            return self.roll_no == other.roll_no\r
        return False\r
\r
    def __hash__(self):\r
        # Hash code based on the unique roll_no\r
        return hash(self.roll_no)\r
\r
    def __repr__(self):\r
        return f"StudentRecord(Roll={self.roll_no}, Name='{self.name}', Branch='{self.branch}')"\r
\r
\r
# Creating records (including duplicate roll numbers with slightly different names)\r
student_a = StudentRecord(101, "Susmita Roy", "Barrackpore")\r
student_b = StudentRecord(102, "Debangshu Mukherjee", "Kolkata")\r
student_c = StudentRecord(101, "Susmita R. (Duplicate Entry)", "Barrackpore")\r
\r
# Populating into a set\r
student_registry = {student_a, student_b, student_c}\r
\r
print(f"Total entries submitted: 3")\r
print(f"Unique records stored in set: {len(student_registry)}")\r
for student in student_registry:\r
    print(" ->", student)\r
`,g=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
                PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_006: SETS\r
                         TOPIC 2: UNIQUE NATURE OF SETS\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. THE ESSENCE OF UNIQUENESS IN PYTHON SETS\r
--------------------------------------------------------------------------------\r
The unique nature of Python sets is their defining property:\r
  • No duplicate values can ever exist inside a set.\r
  • Adding duplicate elements does NOT throw an error; it simply overwrites or\r
    discards the redundant entry silently.\r
  • Uniqueness is evaluated via a TWO-STEP INVARIANT:\r
      Step 1: \`hash(a) == hash(b)\`  (Quick hash code comparison)\r
      Step 2: \`a == b\`              (Exact value equality verification)\r
\r
--------------------------------------------------------------------------------\r
2. HOW PYTHON DETERMINES DUPLICATION\r
--------------------------------------------------------------------------------\r
Two elements \`a\` and \`b\` are considered duplicates by a set if and only if:\r
  1. Their hash values match: \`hash(a) == hash(b)\`\r
  2. Their equality comparison returns True: \`a == b\`\r
\r
Crucial Examples of Deduplication:\r
  • Integers and Floats:\r
      \`42 == 42.0\` is True, and \`hash(42) == hash(42.0)\`.\r
      Therefore, \`{42, 42.0}\` evaluates to \`{42}\` (len: 1).\r
\r
  • Booleans and Integers:\r
      \`True == 1\` is True, and \`hash(True) == hash(1)\`.\r
      \`False == 0\` is True, and \`hash(False) == hash(0)\`.\r
      Therefore, \`{1, True}\` evaluates to \`{1}\` (len: 1).\r
      \`{0, False}\` evaluates to \`{0}\` (len: 1).\r
\r
  • Strings (Case Sensitive):\r
      \`"Barrackpore"\` != \`"barrackpore"\`.\r
      Therefore, \`{"Barrackpore", "barrackpore"}\` has length 2!\r
\r
--------------------------------------------------------------------------------\r
3. CONTROLLING UNIQUENESS IN USER-DEFINED CLASSES\r
--------------------------------------------------------------------------------\r
To make custom objects deduplicate properly in a set:\r
  1. Implement \`__eq__(self, other)\` to compare logical business keys.\r
  2. Implement \`__hash__(self)\` to return the hash of those same keys.\r
  3. Hash Invariant: If \`a == b\`, then \`hash(a) == hash(b)\` MUST hold true!\r
\r
--------------------------------------------------------------------------------\r
4. REAL-WORLD INDUSTRIAL APPLICATIONS\r
--------------------------------------------------------------------------------\r
  • E-Commerce Order Deduplication: Discarding double-click checkout attempts.\r
  • Electoral & Voter Verification: Ensuring one vote per citizen ID.\r
  • Web Analytics: Counting unique daily active visitors (DAU) from IP logs.\r
  • Database ETL Pipelines: Sanitizing CSV / JSON feeds prior to SQL ingestion.\r
\r
--------------------------------------------------------------------------------\r
5. COMMON PITFALLS & GOTCHAS\r
--------------------------------------------------------------------------------\r
  [x] Assuming \`True\` and \`1\` can both exist in the same set (they cannot!).\r
  [x] Modifying custom object fields after insertion into a set (hash corruption).\r
  [x] Expecting case-insensitive string deduplication (strings are case-sensitive).\r
\r
================================================================================\r
            END OF STUDY NOTE • TOPIC 2: UNIQUE NATURE OF SETS\r
================================================================================\r
`,y=[{question:"What is the two-step rule Python uses to determine if an incoming element is a duplicate in a set?",shortAnswer:"1) Hash equivalence: hash(new) == hash(existing), and 2) Value equality: new == existing.",explanation:"Python first compares the 64-bit integer hash values of the items to find the target bucket. If a hash collision occurs (or the slot is occupied), Python calls the rich comparison equality method (a == b). If both hash and equality match, the element is recognized as duplicate and discarded.",hint:"Think about the hash code jump followed by value equality confirmation.",level:"moderate",codeExample:`# Under the hood:
# if hash(a) == hash(b) and a == b:
#     # Duplicate detected! Discard new entry`},{question:"Why does {1, True, 1.0, 1 + 0j} result in a set of length 1 containing only {1}?",shortAnswer:"Because in Python, 1 == True == 1.0 == (1+0j) and hash(1) == hash(True) == hash(1.0) == hash(1+0j).",explanation:"Python treats boolean True as a subclass of int with value 1. Because 1, True, 1.0, and 1+0j all share the exact same hash value (1) and compare equal under ==, the set keeps only the very first representation encountered ({1}).",hint:"Check numeric equality and hash values across these 4 representations.",level:"expert",codeExample:`s = {1, True, 1.0, 1 + 0j}
print(s)       # {1}
print(len(s))  # 1`},{question:"What would be the output if the order of insertion was changed to {True, 1, 1.0}?",shortAnswer:"The set would be {True}, because True was the first representation inserted into the hash bucket.",explanation:"When a duplicate value is encountered in a set, Python retains the existing element already residing in the hash bucket. Since True was entered first, subsequent equivalents (1 and 1.0) are discarded, leaving {True}.",hint:"Sets keep whichever duplicate representation arrived first.",level:"moderate",codeExample:`s = {True, 1, 1.0}
print(s)  # {True}`},{question:"How does set uniqueness handle string case sensitivity (e.g., {'Kolkata', 'kolkata'})?",shortAnswer:"Strings are case-sensitive; 'Kolkata' != 'kolkata', so both elements are retained.",explanation:"In Unicode and ASCII character encodings, uppercase 'K' (code point 75) is distinct from lowercase 'k' (code point 107). Consequently, 'Kolkata' != 'kolkata' and their hashes differ completely, resulting in a set of length 2.",hint:"Case differences produce distinct characters and hash codes.",level:"basic",codeExample:`cities = {"Kolkata", "kolkata"}
print(cities)       # {'Kolkata', 'kolkata'}
print(len(cities))  # 2`},{question:"How can you perform case-insensitive string deduplication using a set?",shortAnswer:"Normalize strings to lowercase before or during set construction: {s.lower() for s in items}.",explanation:"By calling .lower() (or .casefold() for Unicode-safe transformations) inside a set comprehension, all variations are normalized to identical strings, ensuring true case-insensitive deduplication.",hint:"Use .lower() or .casefold() in a set comprehension.",level:"basic",codeExample:`raw = ["Kolkata", "KOLKATA", "kolkata", "Barrackpore"]
clean = {city.casefold() for city in raw}
print(clean)  # {'kolkata', 'barrackpore'}`},{question:"What happens if two different objects have the same hash code (a hash collision) but compare unequal (a != b)?",shortAnswer:"Both objects are stored in the set using open-addressing collision resolution.",explanation:"Hash collisions are normal in hash tables. When hash(a) == hash(b) but a != b, Python uses open-addressing probing to find the next available empty bucket, allowing both distinct objects to coexist safely.",hint:"Equality check (a == b) prevents distinct items from being lost during collisions.",level:"expert",codeExample:`# Hash collision: hash(a) == hash(b) but a != b
# Python stores both via quadratic/perturbation probing`},{question:"What is the Hash Invariant in Python and why is it critical for set uniqueness?",shortAnswer:"If a == b, then hash(a) must equal hash(b). If violated, sets will store duplicate objects.",explanation:"The hash invariant is a fundamental contract: equal objects MUST produce equal hashes. If two objects compare equal but have different hashes, they will land in different hash buckets, causing the set to erroneously store duplicates.",hint:"Equal objects must always land in the same hash bucket.",level:"expert",codeExample:`# Crucial Contract:
# a == b  ===>  hash(a) == hash(b)`},{question:"Why does modifying an object's attribute after inserting it into a set corrupt the set?",shortAnswer:"Changing attributes alters the object's hash code, stranding it in the wrong bucket and breaking lookups.",explanation:"If a mutable object's hash changes after insertion, its bucket index in the set no longer matches hash(obj). Calling 'obj in my_set' will look in a different bucket and return False, or duplicate insertions will succeed.",hint:"The bucket location is fixed at insertion time.",level:"expert",codeExample:"# This is why Python strictly requires set elements to be immutable!"},{question:"How do you make a custom class deduplicate based on a unique database primary key ID?",shortAnswer:"Implement __eq__ comparing self.id == other.id and __hash__ returning hash(self.id).",explanation:"By defining __eq__ to compare id equality and __hash__ returning hash(self.id), Python evaluates instances with identical IDs as duplicates and retains only one instance in sets.",hint:"Anchor both equality and hashing to the unique ID attribute.",level:"moderate",codeExample:`class Voter:
    def __init__(self, voter_id, name):
        self.voter_id = voter_id
        self.name = name
    def __eq__(self, other):
        return isinstance(other, Voter) and self.voter_id == other.voter_id
    def __hash__(self):
        return hash(self.voter_id)`},{question:"What is the output of len({0, False, 0.0, -0.0})?",shortAnswer:"1, because 0 == False == 0.0 == -0.0 and all four have hash value 0.",explanation:"In Python, 0, False, 0.0, and -0.0 compare equal (0 == False == 0.0 == -0.0) and produce identical hash values (0). Therefore, the set contains only one element ({0}).",hint:"Zero representations across int, float, and bool are identical.",level:"moderate",codeExample:`s = {0, False, 0.0, -0.0}
print(s)       # {0}
print(len(s))  # 1`},{question:"How does set deduplication handle NaN (Not a Number) floating-point values?",shortAnswer:"Because float('nan') != float('nan'), creating {float('nan'), float('nan')} creates a set of length 2!",explanation:"According to IEEE 754 standards, NaN does not equal itself (nan != nan is True). When two independent float('nan') instances are placed in a set, equality comparison fails, and Python stores both. However, referencing the same variable {x, x} deduplicates by identity (is).",hint:"Recall that NaN is the only floating-point value that does not equal itself.",level:"expert",codeExample:`n1 = float('nan')
n2 = float('nan')
print(len({n1, n2}))  # 2 (n1 != n2)

print(len({n1, n1}))  # 1 (identity check optimization)`},{question:"Why does Python check object identity (a is b) before calling equality (a == b) in sets?",shortAnswer:"As a major performance optimization: if pointers are identical, equality is guaranteed without executing __eq__.",explanation:"Evaluating pointer equality (is) takes a single CPU clock cycle. If two elements share the same memory address (a is b), Python skips the potentially expensive __eq__ method call entirely.",hint:"Identical memory addresses guarantee value equality instantly.",level:"expert",codeExample:"# 'a is b' check short-circuits before 'a == b'"},{question:"What is the time complexity of deduplicating a list of N elements using set(my_list)?",shortAnswer:"O(N) linear time on average.",explanation:"Converting a list of N elements to a set iterates through the list once, computing hashes and inserting each item in O(1) average time, resulting in overall O(N) linear complexity.",hint:"N items inserted into a hash table at O(1) cost each.",level:"basic",codeExample:`raw_data = [10, 20, 10, 30] * 1000
unique_data = set(raw_data)  # O(N)`},{question:"How can you count the number of duplicate items that were removed during set conversion?",shortAnswer:"Subtract the set's length from the original list's length: len(my_list) - len(set(my_list)).",explanation:"len(my_list) gives total raw items, while len(set(my_list)) gives verified unique items. The difference len(my_list) - len(set(my_list)) equals the exact count of redundant duplicate entries removed.",hint:"Total count minus unique count equals duplicates removed.",level:"basic",codeExample:`registrations = [101, 102, 101, 103, 102, 104, 101]
dupes_removed = len(registrations) - len(set(registrations))
print("Duplicates pruned:", dupes_removed)  # 3`},{question:"Can a set contain tuples with identical contents: {(1, 2), (1, 2)}?",shortAnswer:"No, tuples with identical values have identical hashes and compare equal, so only one is kept.",explanation:"Tuple equality compares element-by-element, and tuple hashing computes a combined hash. Since (1, 2) == (1, 2) and hash((1, 2)) == hash((1, 2)), the duplicate tuple is pruned.",hint:"Tuples are immutable value-based sequences.",level:"basic",codeExample:`coords = {(22.57, 88.36), (22.57, 88.36)}
print(coords)       # {(22.57, 88.36)}
print(len(coords))  # 1`},{question:"What is the difference between list(set(items)) and list(dict.fromkeys(items)) when removing duplicates?",shortAnswer:"list(set(items)) loses original element order; list(dict.fromkeys(items)) preserves insertion order.",explanation:"Sets do not preserve sequence order. In Python 3.7+, dictionaries guarantee insertion order, so dict.fromkeys() deduplicates while keeping elements in the exact order they first appeared.",hint:"Use dict.fromkeys() if sequence order must be maintained.",level:"moderate",codeExample:`items = ["B", "A", "B", "C", "A"]
print(list(set(items)))            # ['A', 'C', 'B'] (Order scrambled)
print(list(dict.fromkeys(items)))  # ['B', 'A', 'C'] (Order preserved!)`},{question:"What happens when you add a duplicate item to an existing set using my_set.add(x)?",shortAnswer:"Nothing happens; the operation executes silently without error and the set remains unchanged.",explanation:"The .add() method evaluates hash and equality: finding an existing match, it completes without raising exceptions or altering the set size.",hint:"Adding duplicates in sets is a safe, silent no-op.",level:"basic",codeExample:`s = {"Kolkata", "Barrackpore"}
s.add("Kolkata")
print(len(s))  # 2`},{question:"Why does { (1, 2), (2, 1) } have length 2 while {1, 2} == {2, 1}?",shortAnswer:"(1, 2) and (2, 1) are ordered tuples and not equal; {1, 2} and {2, 1} are sets where order is irrelevant.",explanation:"Tuples are ordered sequences where (1, 2) != (2, 1). Therefore, a set of tuples sees them as two distinct items. When comparing sets directly ({1, 2} == {2, 1}), sets only compare membership disregarding order.",hint:"Tuples care about positional order; sets do not.",level:"moderate",codeExample:`t_set = {(1, 2), (2, 1)}
print(len(t_set))  # 2

print({1, 2} == {2, 1})  # True`},{question:"What is the consequence of implementing __eq__ in a custom class without implementing __hash__?",shortAnswer:"Python sets __hash__ = None, making instances unhashable and unusable in sets.",explanation:"To prevent broken hash invariants, defining custom __eq__ causes Python to automatically revoke the inherited __hash__, raising TypeError: unhashable type if you try adding instances to a set.",hint:"Defining __eq__ automatically breaks inherited __hash__.",level:"expert",codeExample:`class Item:
    def __init__(self, val):
        self.val = val
    def __eq__(self, other):
        return self.val == other.val

# {Item(5)} -> TypeError: unhashable type: 'Item'`},{question:"How does set uniqueness benefit database query optimization?",shortAnswer:"It strips duplicate foreign keys or IDs before executing secondary batch queries (preventing N+1 query overhead).",explanation:"Collecting unique foreign IDs in a set (e.g. user_ids = {order.user_id for order in orders}) allows executing a single batch query 'WHERE id IN (user_ids)' with minimal payload and zero duplicate database hits.",hint:"Batching unique IDs avoids querying the database for the same record multiple times.",level:"moderate",codeExample:`orders = [{'user_id': 101}, {'user_id': 102}, {'user_id': 101}]
unique_users = {o['user_id'] for o in orders}  # {101, 102}`},{question:"What is the output of len(set('Mississippi'))?",shortAnswer:"4, because the unique letters are 'M', 'i', 's', 'p'.",explanation:"'Mississippi' has 11 characters, but only 4 distinct letters: 'M' (1), 'i' (4), 's' (4), 'p' (2). The set contains {'M', 'i', 's', 'p'}.",hint:"Count distinct letters in Mississippi.",level:"basic",codeExample:`s = set('Mississippi')
print(s)       # {'M', 'i', 'p', 's'}
print(len(s))  # 4`},{question:"Can a set contain instances of different user-defined classes that compare equal?",shortAnswer:"Yes, if class A and class B define compatible __eq__ and return identical __hash__ values, one will deduplicate the other.",explanation:"Set uniqueness does not enforce type matching: it strictly checks hash(a) == hash(b) and a == b. If an instance of class A compares equal to an instance of class B and hashes identically, the set treats them as duplicates.",hint:"Duck typing in Python applies to set equality.",level:"expert",codeExample:"# If a == b and hash(a) == hash(b), set keeps only the first, regardless of class names."},{question:"What is the difference between set uniqueness and database PRIMARY KEY constraints?",shortAnswer:"Sets enforce in-memory runtime uniqueness; database primary keys enforce persistent relational table integrity.",explanation:"Sets provide instantaneous in-memory deduplication during program execution in Python memory. Database primary keys enforce uniqueness across disk-persisted tables and concurrent transactions.",hint:"In-memory data structure vs persistent database engine.",level:"basic",codeExample:"# Set in Python memory: unique_ids = set(raw_data)"},{question:"How does set uniqueness assist in finding duplicate elements in a raw list?",shortAnswer:"Iterate through the list, tracking seen items in a set; if item in seen, it is a duplicate.",explanation:"Using a 'seen' set provides an O(N) single-pass algorithm to detect and collect all duplicate entries in a stream without O(N^2) nested list scanning.",hint:"Track visited elements in a 'seen' set.",level:"moderate",codeExample:`data = [1, 2, 3, 2, 4, 1, 5]
seen, dupes = set(), set()
for x in data:
    if x in seen:
        dupes.add(x)
    seen.add(x)
print("Duplicates:", dupes)  # {1, 2}`},{question:"What happens if a class defines __hash__ returning a constant (e.g., return 1)?",shortAnswer:"All instances collide in bucket 1, degrading set operations from O(1) to O(N) linear time.",explanation:"Returning a constant hash causes every instance to land in the same hash bucket. Python must linearly inspect and compare every single element via __eq__, ruining set performance.",hint:"A constant hash defeats hash distribution and causes 100% collision.",level:"expert",codeExample:`class BadHash:
    def __hash__(self):
        return 1  # Catastrophic O(N) performance degradation!`},{question:"Why does Python use 64-bit integers for hash values?",shortAnswer:"To provide a massive hash address space (2^64) and minimize random hash collisions across millions of items.",explanation:"A 64-bit hash space distributes millions of elements evenly across buckets, ensuring collisions remain exceptionally rare and maintaining O(1) performance.",hint:"A large address space prevents bucket crowding.",level:"expert",codeExample:`import sys
print(sys.hash_info.width)  # 64 bits`},{question:"What is the output of {frozenset([1, 2]), frozenset([2, 1])}?",shortAnswer:"{frozenset({1, 2})}, with length 1.",explanation:"frozenset([1, 2]) and frozenset([2, 1]) contain the exact same elements. Since set equality disregards order, both frozensets compare equal and hash identically, resulting in deduplication.",hint:"frozensets are sets and compare equal regardless of argument order.",level:"moderate",codeExample:`fs1 = frozenset([1, 2])
fs2 = frozenset([2, 1])
print(len({fs1, fs2}))  # 1`},{question:"How do sets handle complex numbers like (2 + 3j)?",shortAnswer:"Complex numbers are immutable and hashable; duplicate complex numbers are deduplicated normally.",explanation:"Complex numbers implement __hash__ and __eq__ based on real and imaginary parts. Duplicate complex numbers (e.g. 2+3j and 2.0+3.0j) evaluate as duplicates in sets.",hint:"Complex numbers are first-class immutable numbers in Python.",level:"basic",codeExample:`c_set = {2 + 3j, 2.0 + 3.0j}
print(len(c_set))  # 1`},{question:"How can you verify that two large lists contain the exact same unique elements regardless of order or frequency?",shortAnswer:"Compare their sets: set(list1) == set(list2).",explanation:"set(list1) and set(list2) strip all duplicates and ignore element positions. Comparing set(list1) == set(list2) returns True if both lists have the exact same set of distinct values.",hint:"Set equality checks matching unique membership.",level:"basic",codeExample:`l1 = [1, 2, 2, 3]
l2 = [3, 1, 3, 2, 1]
print(set(l1) == set(l2))  # True`},{question:"What is the core takeaway for professional Python developers regarding set uniqueness?",shortAnswer:"Sets guarantee mathematical uniqueness in O(1) time by leveraging immutable element hashes and value equality.",explanation:"Understanding that uniqueness requires immutability, that 1 == True, and that __eq__ and __hash__ work in tandem empowers developers to build bulletproof deduplication pipelines and high-speed lookups.",hint:"Uniqueness = Hashable Immutability + O(1) Hash Table Indexing.",level:"moderate",codeExample:`# Golden Rule:
# Unique In-Memory Lookups -> Use Set!`}];function S(){const i=o.useRef([]),[r,l]=o.useState("decision");o.useEffect(()=>{const s=new IntersectionObserver(n=>{n.forEach(d=>{d.isIntersecting&&d.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return i.current.forEach(n=>{n&&s.observe(n)}),()=>s.disconnect()},[]);const t=s=>{s&&!i.current.includes(s)&&i.current.push(s)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-emerald-500/30 selection:text-emerald-200",children:[e.jsx("style",{children:`
        .section-hidden {
          transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .section-visible {
          transform: translateY(0);
        }
      `}),e.jsxs("header",{ref:t,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-emerald-950/80 text-emerald-300 px-3 py-1 rounded-full border border-emerald-800/80 shadow-sm shadow-emerald-950/50",children:"Segment 2 • Module 002_006"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-sky-950/80 text-sky-300 px-3 py-1 rounded-full border border-sky-800/80 shadow-sm shadow-sky-950/50",children:"Topic 2"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Data Structure Invariants"})]}),e.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:"The Unique Nature of Sets"}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Mastering the ",e.jsx("span",{className:"text-emerald-400 font-semibold",children:"Two-Step Uniqueness Engine"}),", hash invariants, numerical equivalence (why ",e.jsx("code",{className:"text-sky-400 font-mono",children:"1 == True"}),"), and custom class deduplication."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚖️ Two-Step Equality Engine"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔢 1 == 1.0 == True Equivalence"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🏷️ __eq__ and __hash__ Invariant"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Case-Sensitivity Rules"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚙️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Two-Step Duplicate Detection Engine"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["How does Python know if an incoming object is a duplicate of something already in the set? It does ",e.jsx("strong",{className:"text-white",children:"NOT"})," do a slow linear scan of all existing elements. Instead, it executes an ultra-fast ",e.jsx("strong",{className:"text-emerald-400",children:"Two-Step Verification Protocol"}),":"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5 my-6 not-prose",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/70 border border-emerald-800/60 shadow-lg shadow-emerald-950/30 transition-all duration-300 hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"1️⃣"})," Step 1: Hash Address Lookup"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Python computes ",e.jsx("code",{className:"font-mono text-emerald-300",children:"hash(new_item)"}),". It immediately jumps directly to that specific hash bucket. If the bucket is empty, the item is inserted as a new unique element."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/70 border border-sky-800/60 shadow-lg shadow-sky-950/30 transition-all duration-300 hover:border-sky-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sky-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"2️⃣"})," Step 2: Exact Equality Check"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["If the bucket is already occupied (same hash), Python checks ",e.jsx("code",{className:"font-mono text-sky-300",children:"new_item == existing_item"}),". If equality returns ",e.jsx("strong",{className:"text-white",children:"True"}),", it's a confirmed duplicate and discarded!"]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-emerald-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-2",children:"The Golden Hash Invariant Contract:"}),e.jsxs("p",{className:"text-sm sm:text-base text-slate-300",children:["If two objects compare equal (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"a == b"}),"), then their hash codes ",e.jsx("strong",{className:"text-white",children:"MUST"})," be identical (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"hash(a) == hash(b)"}),"). If a developer violates this rule in custom classes, sets will fail to detect duplicates!"]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"🔀"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Duplicate Evaluation Protocol"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>l("decision"),className:c("px-3 py-1.5 rounded-lg transition-all",r==="decision"?"bg-emerald-900/50 text-emerald-300 border border-emerald-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Decision Logic Flowchart"}),e.jsx("button",{onClick:()=>l("equiv"),className:c("px-3 py-1.5 rounded-lg transition-all",r==="equiv"?"bg-sky-900/50 text-sky-300 border border-sky-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"1 vs 1.0 vs True Equivalence"})]})]}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:r==="decision"?e.jsxs("svg",{viewBox:"0 0 850 360",className:"w-full h-auto min-w-[650px] font-sans",children:[e.jsx("rect",{x:"30",y:"50",width:"180",height:"60",rx:"10",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"50",y:"78",fill:"#f8fafc",fontSize:"13",fontWeight:"bold",children:"Incoming Item: x"}),e.jsx("text",{x:"50",y:"98",fill:"#94a3b8",fontSize:"11",children:'e.g. "Susmita"'}),e.jsx("path",{d:"M 210 80 L 280 80",stroke:"#38bdf8",strokeWidth:"2",fill:"none"}),e.jsx("rect",{x:"280",y:"45",width:"220",height:"70",rx:"10",fill:"#0f172a",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"300",y:"73",fill:"#34d399",fontSize:"13",fontWeight:"bold",children:"Step 1: Compute hash(x)"}),e.jsx("text",{x:"300",y:"95",fill:"#94a3b8",fontSize:"11",children:"Find Target Bucket in Table"}),e.jsx("path",{d:"M 500 80 L 570 80",stroke:"#10b981",strokeWidth:"2",fill:"none"}),e.jsx("rect",{x:"570",y:"40",width:"250",height:"80",rx:"10",fill:"#1e293b",stroke:"#f59e0b",strokeWidth:"2"}),e.jsx("text",{x:"590",y:"70",fill:"#fbbf24",fontSize:"13",fontWeight:"bold",children:"Is Bucket Occupied?"}),e.jsx("text",{x:"590",y:"95",fill:"#94a3b8",fontSize:"11",children:"Check hash collision / match"}),e.jsx("path",{d:"M 695 120 L 695 180",stroke:"#10b981",strokeWidth:"2",fill:"none"}),e.jsx("text",{x:"705",y:"150",fill:"#10b981",fontSize:"11",fontWeight:"bold",children:"NO (Empty)"}),e.jsx("rect",{x:"590",y:"180",width:"220",height:"50",rx:"8",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"610",y:"210",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"✓ Store as New Element"}),e.jsx("path",{d:"M 570 80 L 390 180",stroke:"#f59e0b",strokeWidth:"2",fill:"none"}),e.jsx("text",{x:"440",y:"135",fill:"#fbbf24",fontSize:"11",fontWeight:"bold",children:"YES (Occupied)"}),e.jsx("rect",{x:"260",y:"180",width:"260",height:"70",rx:"10",fill:"#1e293b",stroke:"#a855f7",strokeWidth:"2"}),e.jsx("text",{x:"280",y:"208",fill:"#c084fc",fontSize:"13",fontWeight:"bold",children:"Step 2: Check (x == existing)"}),e.jsx("text",{x:"280",y:"230",fill:"#94a3b8",fontSize:"11",children:"Exact value verification"}),e.jsx("path",{d:"M 260 215 L 140 215",stroke:"#ef4444",strokeWidth:"2",fill:"none"}),e.jsx("text",{x:"175",y:"205",fill:"#ef4444",fontSize:"11",fontWeight:"bold",children:"TRUE"}),e.jsx("rect",{x:"30",y:"190",width:"180",height:"50",rx:"8",fill:"#450a0a",stroke:"#ef4444",strokeWidth:"1.5"}),e.jsx("text",{x:"45",y:"220",fill:"#fca5a5",fontSize:"12",fontWeight:"bold",children:"⚡ DUPLICATE! (Discard)"}),e.jsx("path",{d:"M 390 250 L 390 300",stroke:"#38bdf8",strokeWidth:"2",fill:"none"}),e.jsx("text",{x:"400",y:"280",fill:"#38bdf8",fontSize:"11",fontWeight:"bold",children:"FALSE"}),e.jsx("rect",{x:"260",y:"300",width:"260",height:"45",rx:"8",fill:"#0c4a6e",stroke:"#38bdf8",strokeWidth:"1.5"}),e.jsx("text",{x:"280",y:"328",fill:"#bae6fd",fontSize:"12",fontWeight:"bold",children:"Collision Probe → Next Bucket"})]}):e.jsxs("svg",{viewBox:"0 0 850 320",className:"w-full h-auto min-w-[650px] font-sans",children:[e.jsxs("text",{x:"30",y:"35",fill:"#f8fafc",fontSize:"15",fontWeight:"bold",children:["Understanding ","{1, 1.0, True, 1 + 0j}"," Collapse"]}),e.jsx("rect",{x:"30",y:"65",width:"160",height:"70",rx:"8",fill:"#1e293b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"45",y:"95",fill:"#34d399",fontSize:"14",fontWeight:"bold",children:"Integer: 1"}),e.jsx("text",{x:"45",y:"118",fill:"#94a3b8",fontSize:"11",children:"hash(1) = 1"}),e.jsx("rect",{x:"220",y:"65",width:"160",height:"70",rx:"8",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"1.5"}),e.jsx("text",{x:"235",y:"95",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"Float: 1.0"}),e.jsx("text",{x:"235",y:"118",fill:"#94a3b8",fontSize:"11",children:"hash(1.0) = 1"}),e.jsx("rect",{x:"410",y:"65",width:"160",height:"70",rx:"8",fill:"#1e293b",stroke:"#f59e0b",strokeWidth:"1.5"}),e.jsx("text",{x:"425",y:"95",fill:"#fbbf24",fontSize:"14",fontWeight:"bold",children:"Boolean: True"}),e.jsx("text",{x:"425",y:"118",fill:"#94a3b8",fontSize:"11",children:"hash(True) = 1"}),e.jsx("rect",{x:"600",y:"65",width:"180",height:"70",rx:"8",fill:"#1e293b",stroke:"#a855f7",strokeWidth:"1.5"}),e.jsx("text",{x:"615",y:"95",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"Complex: 1+0j"}),e.jsx("text",{x:"615",y:"118",fill:"#94a3b8",fontSize:"11",children:"hash(1+0j) = 1"}),e.jsx("path",{d:"M 110 135 L 425 200",stroke:"#10b981",strokeWidth:"1.5",fill:"none"}),e.jsx("path",{d:"M 300 135 L 425 200",stroke:"#38bdf8",strokeWidth:"1.5",fill:"none"}),e.jsx("path",{d:"M 490 135 L 425 200",stroke:"#f59e0b",strokeWidth:"1.5",fill:"none"}),e.jsx("path",{d:"M 690 135 L 425 200",stroke:"#a855f7",strokeWidth:"1.5",fill:"none"}),e.jsx("rect",{x:"230",y:"200",width:"390",height:"80",rx:"12",fill:"#064e3b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"250",y:"235",fill:"#a7f3d0",fontSize:"14",fontWeight:"bold",children:"Same Hash (1) + All Compare Equal (==)"}),e.jsxs("text",{x:"250",y:"260",fill:"#ffffff",fontSize:"13",children:["→ Set stores only 1 element: ","{1}"," (Length: 1)"]})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 space-y-8",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Practical Python Uniqueness Demos"})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Demo A: Uniqueness in Action & Numeric Collapses"}),e.jsx(a,{fileModule:x,title:"uniqueness_in_action.py",highlightLines:[6,11,15,20]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Demo B: The Two-Step Hash vs Equality Verification"}),e.jsx(a,{fileModule:p,title:"hash_equality_identity.py",highlightLines:[7,13,20]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Demo C: Real-World Voter Registry Deduplication & Election Grant in ₹"}),e.jsx(a,{fileModule:f,title:"voter_deduplication.py",highlightLines:[16,20,25]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Demo D: Custom Class Uniqueness with __eq__ and __hash__"}),e.jsx(a,{fileModule:b,title:"custom_class_hashing.py",highlightLines:[11,17,27]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Real-World Case Studies in Industry"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🗳️"})," 1. Civic Polling Station Verification"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["When Debangshu and Susmita process 12,000 raw voter logs across ",e.jsx("strong",{children:"Barrackpore"})," polling booths, sets eliminate accidental double-submissions, ensuring an accurate logistics allocation of ",e.jsx("strong",{className:"text-emerald-300",children:"₹150 per verified voter"}),"."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"💳"})," 2. Double-Click Payment Idempotency"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:['Payment gateways store processed transaction idempotency keys in a set. When a customer clicks "Pay ₹4,500" twice in 200 milliseconds, the set rejects the second transaction in ',e.jsx("span",{className:"font-semibold text-emerald-400",children:"O(1)"})," time."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"📈"})," 3. Unique Visitor Analytics (DAU)"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Web server telemetry records client IP addresses in a memory set. At midnight, calling ",e.jsx("code",{className:"font-mono text-purple-400",children:"len(unique_ips)"})," gives the exact Daily Active Users metric with zero double-counting."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🏥"})," 4. Hospital Patient Registration"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Hospital portals in ",e.jsx("strong",{children:"Kolkata"})," and ",e.jsx("strong",{children:"Jadavpur"})," wrap medical records into custom classes with ",e.jsx("code",{className:"font-mono text-amber-400",children:"__hash__"})," keyed on National Health IDs, preventing duplicate patient profile generation."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Pitfalls & Tricky Uniqueness Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 1: Assuming True != 1 in Sets"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Writing ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"{1, True}"})," yields only ",e.jsx("code",{className:"font-mono text-emerald-400",children:"{1}"})," because ",e.jsx("code",{className:"font-mono",children:"True == 1"})," and both share the same hash code (1)."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 2: Mutating Objects After Insertion"}),e.jsx("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:"If an object's attribute changes after being added to a set, its hash changes, stranding it in the wrong bucket and permanently breaking lookup checks!"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 3: Case-Sensitivity Assumptions"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:[e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"{'Kolkata', 'kolkata'}"})," has length 2. Strings are case-sensitive; normalize with ",e.jsx("code",{className:"font-mono text-emerald-400",children:".casefold()"})," if case-insensitivity is needed."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 4: Implementing __eq__ without __hash__"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Overriding ",e.jsx("code",{className:"font-mono text-slate-200",children:"__eq__"})," without defining ",e.jsx("code",{className:"font-mono text-slate-200",children:"__hash__"})," sets hash to None, preventing your custom objects from being stored in sets."]})]})]})]}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(h,{content:g,title:"Topic 2: Unique Nature of Sets Study Guide",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Study Note",downloadFileName:"topic2_unique_nature_of_sets_note.txt"})}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(u,{title:"Topic 2 • Unique Nature of Sets: Master Viva & Review Questions",questions:y})}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(m,{note:"Teacher's Wisdom: Uniqueness in Python sets is not magic—it's pure mathematical discipline. Always remember: hash code lands you in the bucket, but value equality (==) settles the duplicate verdict. When Susmita, Mamata, and Debangshu design custom classes in Barrackpore, always tie __eq__ and __hash__ to immutable identifiers!"})})]})]})}export{S as default};
