import{b as o,j as e,bg as c}from"./vendor-react-core-Doz9nIC6.js";import{P as r}from"./PythonFileLoader-hCi5osN-.js";import{P as m}from"./PlainTextPrint-C08xhKA4.js";import{F as p}from"./FAQTemplate-CkSqDH4B.js";import{T as h}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const x=`# ====================================================================\r
# Topic 15: Removing Duplicates Using Sets\r
# File: deduplication_basics.py\r
# Description: Standard list(set(data)) deduplication and timing complexity\r
# ====================================================================\r
\r
# Raw student attendance log in Barrackpore Computer Science Center\r
raw_attendance_log = [\r
    "Susmita", "Mamata", "Debangshu", "Susmita",\r
    "Abhronila", "Mamata", "Rohan", "Debangshu", "Susmita"\r
]\r
\r
print(f"Total Raw Attendance Scans: {len(raw_attendance_log)}")\r
print("Raw Stream:", raw_attendance_log)\r
\r
# 1. Standard Deduplication using list(set(iterable)) in O(N) time\r
unique_students = list(set(raw_attendance_log))\r
\r
print(f"\\nUnique Attended Students ({len(unique_students)}):", unique_students)\r
print("Note: Fast O(N) completion, but original entry order is scrambled!")\r
\r
# 2. Extracting unique characters from a string\r
messy_string = "mississippi_barrackpore_kolkata"\r
unique_characters = "".join(sorted(set(messy_string)))\r
print("\\nUnique Sorted Characters:", unique_characters)\r
`,u=`# ====================================================================\r
# Topic 15: Removing Duplicates Using Sets\r
# File: order_preserving_deduplication.py\r
# Description: Preserving exact insertion order while deduplicating in O(N) time\r
# ====================================================================\r
\r
# Timeline stream of course fee payments in Kolkata Center\r
payment_stream = [\r
    "TXN-101 (Susmita)",\r
    "TXN-102 (Debangshu)",\r
    "TXN-101 (Susmita)",     # Duplicate webhook retry\r
    "TXN-103 (Mamata)",\r
    "TXN-102 (Debangshu)",   # Duplicate webhook retry\r
    "TXN-104 (Abhronila)"\r
]\r
\r
print("Original Timeline Sequence:")\r
for p in payment_stream:\r
    print(" ", p)\r
\r
# METHOD 1: list(set(data)) -> Deduplicates but scrambles order\r
scrambled_order = list(set(payment_stream))\r
print("\\nMethod 1: list(set()) - Scrambled Timeline Order:")\r
for p in scrambled_order:\r
    print(" ", p)\r
\r
# METHOD 2: list(dict.fromkeys(data)) -> Deduplicates AND preserves exact timeline!\r
ordered_dedup = list(dict.fromkeys(payment_stream))\r
print("\\nMethod 2: list(dict.fromkeys()) - PRESERVES Exact Timeline Sequence:")\r
for p in ordered_dedup:\r
    print(" ", p)\r
\r
# METHOD 3: Using a 'seen' set with list comprehension (Generator pattern)\r
def deduplicate_stream(iterable):\r
    seen = set()\r
    for item in iterable:\r
        if item not in seen:\r
            seen.add(item)\r
            yield item\r
\r
generator_dedup = list(deduplicate_stream(payment_stream))\r
print("\\nMethod 3: 'seen' Set Generator -> Order Matches dict.fromkeys:", generator_dedup == ordered_dedup)\r
`,f=`# ====================================================================\r
# Topic 15: Removing Duplicates Using Sets\r
# File: custom_objects_deduplication.py\r
# Description: Deduplicating custom business class objects via __hash__ and __eq__\r
# ====================================================================\r
\r
class StudentRecord:\r
    def __init__(self, roll_no: str, name: str, fee_paid: int):\r
        self.roll_no = roll_no\r
        self.name = name\r
        self.fee_paid = fee_paid\r
\r
    # 1. Custom __hash__ based on unique student roll number\r
    def __hash__(self):\r
        return hash(self.roll_no)\r
\r
    # 2. Custom __eq__ confirming roll number identity\r
    def __eq__(self, other):\r
        if isinstance(other, StudentRecord):\r
            return self.roll_no == other.roll_no\r
        return False\r
\r
    def __repr__(self):\r
        return f"Student({self.roll_no}, {self.name}, ₹{self.fee_paid})"\r
\r
\r
# Raw student registration list with duplicate object instances\r
raw_students = [\r
    StudentRecord("ROLL-101", "Susmita Roy", 4500),\r
    StudentRecord("ROLL-102", "Debangshu Mukherjee", 6500),\r
    StudentRecord("ROLL-101", "Susmita Roy (Duplicate Entry)", 4500), # Duplicate roll 101\r
    StudentRecord("ROLL-103", "Mamata Banerjee", 4500),\r
    StudentRecord("ROLL-102", "Debangshu (Duplicate Retry)", 6500),   # Duplicate roll 102\r
]\r
\r
print(f"Total Raw Registrations: {len(raw_students)}")\r
\r
# Deduplicating custom objects using set()\r
unique_students_set = set(raw_students)\r
print(f"Total Unique Verified Students: {len(unique_students_set)}")\r
\r
for s in unique_students_set:\r
    print(" ", s)\r
`,b=`# ====================================================================\r
# Topic 15: Removing Duplicates Using Sets\r
# File: voter_roll_deduplication.py\r
# Description: Real-World Voter Electoral Roll Deduplication & Fee Audit in ₹\r
# ====================================================================\r
\r
# Raw voter registry list across Barrackpore polling stations\r
voter_registry = [\r
    {"voter_id": "WB-BP-1001", "name": "Susmita Roy", "booth": "Barrackpore-01"},\r
    {"voter_id": "WB-BP-1002", "name": "Debangshu Mukherjee", "booth": "Barrackpore-02"},\r
    {"voter_id": "WB-BP-1001", "name": "Susmita Roy", "booth": "Barrackpore-01"}, # Duplicate record\r
    {"voter_id": "WB-BP-1003", "name": "Mamata Banerjee", "booth": "Barrackpore-03"},\r
    {"voter_id": "WB-BP-1004", "name": "Abhronila Das", "booth": "Barrackpore-01"},\r
    {"voter_id": "WB-BP-1002", "name": "Debangshu Mukherjee", "booth": "Barrackpore-02"}, # Duplicate record\r
]\r
\r
print(f"Total Raw Electoral Roll Entries: {len(voter_registry)}")\r
\r
# Order-Preserved Deduplication based on 'voter_id' key\r
seen_ids = set()\r
clean_voter_roll = []\r
\r
for voter in voter_registry:\r
    vid = voter["voter_id"]\r
    if vid not in seen_ids:\r
        seen_ids.add(vid)\r
        clean_voter_roll.append(voter)\r
\r
print(f"Total Verified Clean Unique Voters: {len(clean_voter_roll)}\\n")\r
for v in clean_voter_roll:\r
    print(f"  Voter ID: {v['voter_id']} | Name: {v['name']:20} | Polling Booth: {v['booth']}")\r
`,g=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
                PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_006: SETS\r
                    TOPIC 15: REMOVING DUPLICATES USING SETS\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. THE 3 DEDUPLICATION STRATEGIES\r
--------------------------------------------------------------------------------\r
Python developers have three primary ways to deduplicate collections:\r
\r
  Method 1: \`list(set(my_list))\`\r
    • Best for: When element sequence/order DOES NOT MATTER.\r
    • Speed: O(N) linear time.\r
    • Caveat: Scrambles the original order!\r
\r
  Method 2: \`list(dict.fromkeys(my_list))\`\r
    • Best for: Deduplicating while PRESERVING EXACT INSERTION ORDER.\r
    • Speed: O(N) linear time.\r
    • Feature: Guaranteed in Python 3.7+ (compact dictionary ordering).\r
\r
  Method 3: \`seen = set()\` with Loop or Generator\r
    • Best for: Streams of complex dictionaries or custom objects where\r
      deduplication is evaluated on a single specific key attribute.\r
    • Speed: O(N) linear time.\r
\r
--------------------------------------------------------------------------------\r
2. TIME COMPLEXITY COMPARISON\r
--------------------------------------------------------------------------------\r
  Technique                         | Time Complexity | Preserves Order?\r
  ----------------------------------+-----------------+-------------------------\r
  \`list(set(data))\`                 | O(N)            | NO (Scrambled)\r
  \`list(dict.fromkeys(data))\`       | O(N)            | YES\r
  \`seen = set()\` loop               | O(N)            | YES\r
  Nested list \`if x not in result\`  | O(N^2)          | YES (Extremely SLOW!)\r
\r
--------------------------------------------------------------------------------\r
3. THE FATAL O(N^2) NESTED LIST TRAP\r
--------------------------------------------------------------------------------\r
  • Writing:\r
    \`\`\`python\r
    unique_list = []\r
    for x in raw_data:\r
        if x not in unique_list:  # SLOW O(N) scan on every item!\r
            unique_list.append(x)\r
    \`\`\`\r
  • For 100,000 items, nested list scanning takes over 15 seconds!\r
  • Using a set reduces the time to under 0.005 seconds (3,000x faster)!\r
\r
================================================================================\r
         END OF STUDY NOTE • TOPIC 15: REMOVING DUPLICATES WITH SETS\r
================================================================================\r
`,y=[{question:"What is the simplest and fastest way to remove duplicates from a list in Python when insertion order does NOT matter?",shortAnswer:"list(set(my_list)).",explanation:"Converting the list to a set automatically hashes every element and collapses duplicates in O(N) linear time. Converting back with list() gives a unique list, though the original order will be scrambled.",hint:"Convert list to set and back to list.",level:"basic",codeExample:`raw = [3, 1, 2, 1, 3, 2]
unique = list(set(raw))
print(unique)  # [1, 2, 3] (Order scrambled)`},{question:"How can you remove duplicates from a list in O(N) time while strictly PRESERVING the original insertion order?",shortAnswer:"Use list(dict.fromkeys(my_list)).",explanation:"Since Python 3.7, dictionaries maintain insertion order. dict.fromkeys() creates a dictionary using list elements as unique keys in first-seen order. Converting back to a list gives an order-preserved, deduplicated sequence in O(N) time.",hint:"Use dict.fromkeys() to preserve order.",level:"basic",codeExample:`raw = ["Kolkata", "Barrackpore", "Kolkata", "Ichapur"]
ordered = list(dict.fromkeys(raw))
print(ordered)  # ['Kolkata', 'Barrackpore', 'Ichapur']`},{question:"Why is deduplicating a list using 'unique = []; for x in data: if x not in unique: unique.append(x)' a severe performance anti-pattern?",shortAnswer:"Because checking 'if x not in unique' on a list is an O(N) linear scan, ballooning total time complexity to O(N^2) quadratic time.",explanation:"For 100,000 items, nested list scanning performs up to 5,000,000,000 pointer checks and freezes execution for 15+ seconds. Using a set completes in under 0.005 seconds.",hint:"Scanning a list inside a loop creates an O(N^2) trap.",level:"expert",codeExample:`# BAD (O(N^2)):
# for x in data: if x not in unique_list: unique_list.append(x)

# GOOD (O(N)):
# unique_list = list(dict.fromkeys(data))`},{question:"How do you deduplicate a list of dictionaries based on a specific key (e.g. 'voter_id') while keeping the first occurrence?",shortAnswer:"Maintain a seen_ids = set() and append records whose key has not been seen yet.",explanation:"Iterating through the dictionary list and querying seen_ids in O(1) time keeps the stream deduplication at O(N) linear time.",hint:"Use a seen set to track seen key IDs.",level:"moderate",codeExample:`seen = set()
unique_voters = []
for v in voters:
    if v["id"] not in seen:
        seen.add(v["id"])
        unique_voters.append(v)`},{question:"How can custom class instances be deduplicated using set()?",shortAnswer:"Implement both __hash__() and __eq__() on the custom class definition.",explanation:"Python evaluates set uniqueness by first matching hash(obj) and then confirming equality with obj1 == obj2.",hint:"Define __hash__ and __eq__ on the class.",level:"moderate",codeExample:`class Student:
    def __init__(self, roll):
        self.roll = roll
    def __hash__(self):
        return hash(self.roll)
    def __eq__(self, other):
        return isinstance(other, Student) and self.roll == other.roll`},{question:"What happens when you deduplicate a list containing [1, True, 1.0, '1'] using set()?",shortAnswer:"It produces {1, '1'} (len 2).",explanation:"1, True, and 1.0 all compare equal (1 == True == 1.0) and share hash code 1, so they collapse into a single element. '1' is a string and remains distinct.",hint:"1, True, and 1.0 collapse into one element.",level:"expert",codeExample:`raw = [1, True, 1.0, "1"]
print(set(raw))  # {1, '1'}`},{question:"How do you remove duplicate words from a sentence while preserving original word order?",shortAnswer:"' '.join(dict.fromkeys(sentence.split())).",explanation:"sentence.split() extracts words, dict.fromkeys() preserves the first occurrence of each word, and ' '.join() reconstructs the sentence string.",hint:"Combine .split(), dict.fromkeys(), and ' '.join().",level:"basic",codeExample:`s = "learn python programming and learn python fast"
clean = " ".join(dict.fromkeys(s.split()))
print(clean)  # 'learn python programming and fast'`},{question:"How do you remove duplicate characters from a string while preserving original character order?",shortAnswer:"''.join(dict.fromkeys(my_string)).",explanation:"dict.fromkeys(my_string) deduplicates letters in first-seen order, and ''.join() concatenates them back into a clean string.",hint:"Use ''.join(dict.fromkeys(my_string)).",level:"basic",codeExample:`s = "mississippi"
print("".join(dict.fromkeys(s)))  # 'misp'`},{question:"What is a memory-efficient generator function for deduplicating infinite or large data streams in O(N) time?",shortAnswer:"A generator with seen = set() that yields items if item not in seen: seen.add(item); yield item.",explanation:"Yielding items on the fly avoids creating an intermediate list of millions of records in memory.",hint:"Use a generator function tracking items in a seen set.",level:"expert",codeExample:`def dedupe_stream(iterable):
    seen = set()
    for item in iterable:
        if item not in seen:
            seen.add(item)
            yield item`},{question:"What is the time complexity of deduplicating N elements using list(dict.fromkeys(data))?",shortAnswer:"O(N) linear time complexity.",explanation:"Inserting N elements into a dictionary takes N * O(1) = O(N) time. Converting the keys view to a list takes O(N) time, giving O(N) overall.",hint:"O(N) total time.",level:"moderate",codeExample:"# Time: O(N); Space: O(N)"},{question:"Can list(set(data)) be used on a list containing nested lists: [[1, 2], [1, 2]]?",shortAnswer:"No, it raises TypeError: unhashable type: 'list'.",explanation:"Because inner lists are mutable and unhashable, the set constructor cannot hash them. You must convert inner lists to tuples first: list(set(tuple(x) for x in data)).",hint:"Convert inner lists to tuples before set deduplication.",level:"moderate",codeExample:`raw = [[1, 2], [3, 4], [1, 2]]
# list(set(raw))                      # TypeError
unique = [list(x) for x in set(tuple(x) for x in raw)]
print(unique)  # [[1, 2], [3, 4]]`},{question:"How do you find which elements were duplicates in a list?",shortAnswer:"seen = set(); duplicates = set(); for x in data: (duplicates.add(x) if x in seen else seen.add(x)).",explanation:"Tracking seen items allows capturing any item encountered more than once in a separate duplicates set.",hint:"Maintain a seen set and a duplicates set.",level:"moderate",codeExample:`data = [1, 2, 3, 2, 4, 1, 5]
seen = set()
dups = set()
for x in data:
    if x in seen:
        dups.add(x)
    else:
        seen.add(x)
print("Duplicates:", dups)  # {1, 2}`},{question:"What is the output of: list(dict.fromkeys([5, 2, 8, 2, 5, 1]))?",shortAnswer:"[5, 2, 8, 1].",explanation:"Items are kept in their first-seen order: 5, then 2, then 8, then 1.",hint:"First-seen order is preserved.",level:"basic",codeExample:"print(list(dict.fromkeys([5, 2, 8, 2, 5, 1])))  # [5, 2, 8, 1]"},{question:"How does set deduplication prevent replay attacks in webhook endpoints?",shortAnswer:"By storing processed transaction IDs in an in-memory or Redis set to reject duplicate webhook deliveries in O(1) time.",explanation:"When a webhook event arrives, checking if txn_id in processed_ids identifies duplicate webhook retries instantly.",hint:"Store processed transaction IDs in a set.",level:"moderate",codeExample:`processed_txns = set()
def handle_webhook(txn_id):
    if txn_id in processed_txns:
        return "Duplicate ignored"
    processed_txns.add(txn_id)`},{question:"How do you count the number of duplicate occurrences in a collection?",shortAnswer:"len(my_list) - len(set(my_list)).",explanation:"Subtracting the distinct element count from total elements gives the exact count of redundant duplicate entries.",hint:"Total count minus unique count.",level:"basic",codeExample:`data = [10, 20, 10, 30, 20, 10]
redundant_count = len(data) - len(set(data))
print("Redundant entries:", redundant_count)  # 3`},{question:"Can set comprehension be used to deduplicate and uppercase strings in one step?",shortAnswer:"Yes: {x.upper() for x in raw_list}.",explanation:"Set comprehensions apply transformation and automatic deduplication simultaneously.",hint:"Use a set comprehension with .upper().",level:"basic",codeExample:`print({x.upper() for x in ["a", "B", "a", "b"]})  # {'A', 'B'}`},{question:"What is the performance difference between list(set(data)) and list(dict.fromkeys(data))?",shortAnswer:"Both run in O(N) time; list(set(data)) is marginally faster (by ~10%), but dict.fromkeys() provides order preservation.",explanation:"dict.fromkeys() creates a dictionary before extracting keys, adding minor pointer overhead while preserving sequence ordering.",hint:"Both are O(N); set is slightly faster, dict.fromkeys preserves order.",level:"expert",codeExample:"# Both O(N): set is slightly lighter; dict.fromkeys preserves order"},{question:"How do you deduplicate a list of tuples: [('A', 1), ('B', 2), ('A', 1)]?",shortAnswer:"list(set(my_list)) or list(dict.fromkeys(my_list)).",explanation:"Because tuples are immutable and hashable, standard set deduplication works out of the box on lists of tuples.",hint:"Tuples are hashable and deduplicate directly.",level:"basic",codeExample:`tuples = [("A", 1), ("B", 2), ("A", 1)]
print(list(dict.fromkeys(tuples)))  # [('A', 1), ('B', 2)]`},{question:"How do you deduplicate items based on a custom key function (e.g. key=lambda x: x.lower()) while preserving original casing of first item?",shortAnswer:"Maintain a seen_keys = set() and track transformed keys while yielding original items.",explanation:"seen_keys tracks key(item); if key(item) is new, add to seen_keys and keep the original un-transformed item.",hint:"Track transformed keys in a seen set while keeping original items.",level:"expert",codeExample:`def dedupe_by_key(items, key=lambda x: x):
    seen = set()
    result = []
    for x in items:
        k = key(x)
        if k not in seen:
            seen.add(k)
            result.append(x)
    return result

raw = ["Kolkata", "kolkata", "KOLKATA", "Barrackpore"]
print(dedupe_by_key(raw, key=str.lower))  # ['Kolkata', 'Barrackpore']`},{question:"Why should you never use pandas.drop_duplicates() when pure Python dict.fromkeys() is sufficient for small lists?",shortAnswer:"Pandas introduces massive library import overhead (~100ms) and high memory allocation for simple list deduplication.",explanation:"Pure Python dict.fromkeys() executes in microseconds with zero external dependencies.",hint:"Pure Python is faster and lighter than Pandas for standard lists.",level:"moderate",codeExample:`# Prefer: list(dict.fromkeys(data))
# Over: pd.Series(data).drop_duplicates().tolist()`},{question:"What is the output of: list(dict.fromkeys([None, None, 1, 1]))?",shortAnswer:"[None, 1].",explanation:"None is a valid hashable key; duplicate None entries collapse into a single element.",hint:"None is deduplicated normally.",level:"basic",codeExample:"print(list(dict.fromkeys([None, None, 1, 1])))  # [None, 1]"},{question:"How can you check if a list contains ANY duplicate elements in O(N) time?",shortAnswer:"len(my_list) != len(set(my_list)).",explanation:"If the length of the list is greater than the length of its set conversion, duplicates must exist.",hint:"Compare len(list) with len(set(list)).",level:"basic",codeExample:`def has_duplicates(seq):
    return len(seq) != len(set(seq))

print(has_duplicates([1, 2, 3, 2]))  # True
print(has_duplicates([1, 2, 3, 4]))  # False`},{question:"How do you deduplicate a stream of URLs by removing query parameters and trailing slashes?",shortAnswer:"Use a set comprehension with url.split('?')[0].rstrip('/').",explanation:"Normalizes each URL string before hashing and deduplicating into a set.",hint:"Clean the URL before set insertion.",level:"basic",codeExample:`urls = ["https://example.com/page?ref=1", "https://example.com/page/", "https://example.com/page"]
clean = {u.split('?')[0].rstrip('/') for u in urls}
print(clean)  # {'https://example.com/page'}`},{question:"What happens if you deduplicate a list of objects that only define __eq__ but NOT __hash__ in Python 3?",shortAnswer:"It raises TypeError: unhashable type: '<ClassName>'.",explanation:"In Python 3, defining __eq__ without defining __hash__ implicitly sets __hash__ = None, making the object unhashable.",hint:"Defining __eq__ without __hash__ makes objects unhashable.",level:"expert",codeExample:`class Custom:
    def __eq__(self, other):
        return True
try:
    set([Custom()])
except TypeError as e:
    print(e)  # unhashable type: 'Custom'`},{question:"What is the output of: list(set([10, 20, 30, 10])) == [10, 20, 30]?",shortAnswer:"Often True, but NOT guaranteed because set iteration order is non-deterministic.",explanation:"While small integer hashing may preserve order in simple tests, relying on set order for list equality creates flaky code.",hint:"Order is not guaranteed with list(set()).",level:"moderate",codeExample:"# Use dict.fromkeys() for guaranteed order equality!"},{question:"How do you deduplicate a list of integers and return them sorted in descending order in one line?",shortAnswer:"sorted(set(my_list), reverse=True).",explanation:"set() removes duplicates in O(N), and sorted(reverse=True) orders the distinct numbers in O(N log N) time.",hint:"Combine sorted(reverse=True) with set().",level:"basic",codeExample:"print(sorted(set([5, 1, 9, 1, 5, 3]), reverse=True))  # [9, 5, 3, 1]"},{question:"How can you deduplicate multiple lists simultaneously into a single combined unique list?",shortAnswer:"list(dict.fromkeys(list1 + list2 + list3)) or list(set().union(list1, list2, list3)).",explanation:"Concatenating lists and deduplicating preserves order across batches.",hint:"Concatenate lists and pass to dict.fromkeys().",level:"basic",codeExample:`l1, l2, l3 = [1, 2], [2, 3], [3, 4]
print(list(dict.fromkeys(l1 + l2 + l3)))  # [1, 2, 3, 4]`},{question:"Why does itertools.groupby() FAIL to deduplicate unsorted lists?",shortAnswer:"itertools.groupby() only deduplicates CONSECUTIVE duplicate elements; set deduplication catches duplicates anywhere in the collection.",explanation:"groupby() groups adjacent items. If duplicates are separated (e.g. [1, 2, 1]), groupby() yields 1 twice. Sets guarantee global uniqueness.",hint:"groupby only catches adjacent duplicates.",level:"expert",codeExample:"# [1, 2, 1] -> groupby yields [1, 2, 1]; set() yields {1, 2}"},{question:"How does set deduplication assist in electoral roll validation in West Bengal?",shortAnswer:"It guarantees that each registered voter ID appears exactly once across polling booth rosters.",explanation:"Deduplicating based on voter card numbers prevents fraudulent multiple ballot voting.",hint:"Guarantees 1 record per unique voter ID.",level:"basic",codeExample:"# Electoral Roll: len(voter_ids) == len(set(voter_ids))"},{question:"What is the master summary guideline for deduplicating data in Python?",shortAnswer:"Use list(set(data)) when order doesn't matter; use list(dict.fromkeys(data)) when order must be preserved; and use a seen-set loop for custom dictionary keys.",explanation:"Applying these three patterns guarantees maximum execution speed and zero memory bloat across all data pipeline workflows.",hint:"Unordered -> set(); Ordered -> dict.fromkeys(); Custom keys -> seen set.",level:"basic",codeExample:`# Master Deduplication Rule:
# 1. Unordered: list(set(data))
# 2. Ordered:   list(dict.fromkeys(data))
# 3. Stream:    seen = set(); [x for x in data if not (x in seen or seen.add(x))]`}];function T(){const i=o.useRef([]),[a,l]=o.useState("strategies");o.useEffect(()=>{const s=new IntersectionObserver(n=>{n.forEach(d=>{d.isIntersecting&&d.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return i.current.forEach(n=>{n&&s.observe(n)}),()=>s.disconnect()},[]);const t=s=>{s&&!i.current.includes(s)&&i.current.push(s)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-emerald-500/30 selection:text-emerald-200",children:[e.jsx("style",{children:`
        .section-hidden {
          transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .section-visible {
          transform: translateY(0);
        }
      `}),e.jsxs("header",{ref:t,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-emerald-950/80 text-emerald-300 px-3 py-1 rounded-full border border-emerald-800/80 shadow-sm shadow-emerald-950/50",children:"Segment 2 • Module 002_006"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-sky-950/80 text-sky-300 px-3 py-1 rounded-full border border-sky-800/80 shadow-sm shadow-sky-950/50",children:"Topic 15"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"High-Performance Data Cleansing"})]}),e.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:"Removing Duplicates Using Sets"}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Mastering algorithmic deduplication in Python: comparing ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"list(set(data))"})," vs order-preserving ",e.jsx("code",{className:"text-sky-400 font-mono",children:"dict.fromkeys()"}),", streaming seen sets, and escaping the disastrous ",e.jsx("code",{className:"text-rose-400 font-mono",children:"O(N²)"})," nested list trap."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ O(N) Linear Deduplication"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🎯 Order-Preserving dict.fromkeys()"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🌊 Streaming 'seen' Set Generator"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🚫 Escaping the O(N²) Trap"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧹"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Three Core Deduplication Strategies"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["Depending on whether you need ",e.jsx("strong",{className:"text-emerald-400",children:"maximum speed"}),", ",e.jsx("strong",{className:"text-sky-400",children:"order preservation"}),", or ",e.jsx("strong",{className:"text-purple-400",children:"custom attribute filtering"}),", Python offers three distinct patterns:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/70 border border-emerald-800/60 shadow-lg shadow-emerald-950/30 transition-all duration-300 hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-base",children:[e.jsx("span",{children:"1."})," list(set(data))"]}),e.jsx("span",{className:"text-xs font-mono bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800",children:"O(N) Fast"})]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-2",children:["Best when ",e.jsx("strong",{className:"text-white",children:"order does not matter"}),"."]}),e.jsx("div",{className:"text-xs font-mono text-emerald-300 bg-slate-900 p-2 rounded",children:"Scrambles entry sequence!"})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/70 border border-sky-800/60 shadow-lg shadow-sky-950/30 transition-all duration-300 hover:border-sky-500",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sky-400 font-bold text-base",children:[e.jsx("span",{children:"2."})," dict.fromkeys()"]}),e.jsx("span",{className:"text-xs font-mono bg-sky-950 text-sky-300 px-2 py-0.5 rounded border border-sky-800",children:"O(N) Ordered"})]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-2",children:["Best when ",e.jsx("strong",{className:"text-white",children:"preserving insertion order"}),"."]}),e.jsx("div",{className:"text-xs font-mono text-sky-300 bg-slate-900 p-2 rounded",children:"Guaranteed in Python 3.7+"})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/70 border border-purple-800/60 shadow-lg shadow-purple-950/30 transition-all duration-300 hover:border-purple-500",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"3."})," seen = set() Loop"]}),e.jsx("span",{className:"text-xs font-mono bg-purple-950 text-purple-300 px-2 py-0.5 rounded border border-purple-800",children:"O(N) Stream"})]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-2",children:["Best for ",e.jsx("strong",{className:"text-white",children:"dictionaries & custom keys"}),"."]}),e.jsx("div",{className:"text-xs font-mono text-purple-300 bg-slate-900 p-2 rounded",children:"Low RAM generator pipeline"})]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"🔬"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Deduplication Pipelines & Performance"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>l("strategies"),className:c("px-3 py-1.5 rounded-lg transition-all",a==="strategies"?"bg-emerald-900/50 text-emerald-300 border border-emerald-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Order vs Unordered Flow"}),e.jsx("button",{onClick:()=>l("on2trap"),className:c("px-3 py-1.5 rounded-lg transition-all",a==="on2trap"?"bg-rose-900/50 text-rose-300 border border-rose-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"The O(N²) Nested List Trap"})]})]}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:a==="strategies"?e.jsxs("svg",{viewBox:"0 0 850 320",className:"w-full h-auto min-w-[650px] font-sans",children:[e.jsx("text",{x:"30",y:"35",fill:"#f8fafc",fontSize:"15",fontWeight:"bold",children:'Input Stream: ["Kolkata", "Barrackpore", "Kolkata", "Ichapur"]'}),e.jsx("rect",{x:"30",y:"65",width:"380",height:"220",rx:"10",fill:"#1e293b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"50",y:"95",fill:"#34d399",fontSize:"14",fontWeight:"bold",children:"1. list(set(data)) [Unordered O(N)]"}),e.jsx("text",{x:"50",y:"125",fill:"#cbd5e1",fontSize:"11",children:"• Inserts items into set hash table."}),e.jsx("text",{x:"50",y:"145",fill:"#cbd5e1",fontSize:"11",children:"• Hash table resolves duplicates in O(1)."}),e.jsx("text",{x:"50",y:"165",fill:"#cbd5e1",fontSize:"11",children:"• list() pulls items from internal bucket order."}),e.jsx("rect",{x:"50",y:"185",width:"340",height:"40",rx:"6",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"65",y:"210",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"Output: ['Barrackpore', 'Ichapur', 'Kolkata']"}),e.jsx("text",{x:"50",y:"255",fill:"#fca5a5",fontSize:"11",children:"⚠️ Note: Original input order is lost/scrambled!"}),e.jsx("rect",{x:"440",y:"65",width:"380",height:"220",rx:"10",fill:"#1e293b",stroke:"#0ea5e9",strokeWidth:"1.5"}),e.jsx("text",{x:"460",y:"95",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"2. list(dict.fromkeys(data)) [Ordered O(N)]"}),e.jsx("text",{x:"460",y:"125",fill:"#cbd5e1",fontSize:"11",children:"• Inserts keys into compact ordered dict table."}),e.jsx("text",{x:"460",y:"145",fill:"#cbd5e1",fontSize:"11",children:"• Duplicate keys update value, preserving index."}),e.jsx("text",{x:"460",y:"165",fill:"#cbd5e1",fontSize:"11",children:"• list() extracts keys in exact original order!"}),e.jsx("rect",{x:"460",y:"185",width:"340",height:"40",rx:"6",fill:"#0c4a6e",stroke:"#0ea5e9"}),e.jsx("text",{x:"475",y:"210",fill:"#bae6fd",fontSize:"12",fontWeight:"bold",children:"Output: ['Kolkata', 'Barrackpore', 'Ichapur']"}),e.jsx("text",{x:"460",y:"255",fill:"#34d399",fontSize:"11",children:"✓ Perfect sequence match with 0 duplicates!"})]}):e.jsxs("svg",{viewBox:"0 0 850 320",className:"w-full h-auto min-w-[650px] font-sans",children:[e.jsx("text",{x:"30",y:"35",fill:"#f8fafc",fontSize:"15",fontWeight:"bold",children:"Benchmark: Deduplicating 100,000 Elements in Python"}),e.jsx("rect",{x:"30",y:"65",width:"380",height:"220",rx:"10",fill:"#1e293b",stroke:"#ef4444",strokeWidth:"2"}),e.jsx("text",{x:"50",y:"95",fill:"#fca5a5",fontSize:"14",fontWeight:"bold",children:"❌ 'if x not in unique_list' Loop"}),e.jsx("text",{x:"50",y:"125",fill:"#cbd5e1",fontSize:"11",children:"• Scans list linearly for every iteration: O(N)."}),e.jsx("text",{x:"50",y:"150",fill:"#cbd5e1",fontSize:"11",children:"• Total pointer checks: ~5,000,000,000 operations!"}),e.jsx("rect",{x:"50",y:"175",width:"340",height:"45",rx:"6",fill:"#450a0a",stroke:"#ef4444"}),e.jsx("text",{x:"65",y:"202",fill:"#fecaca",fontSize:"13",fontWeight:"bold",children:"Time Taken: 15.42 Seconds (Freezes!)"}),e.jsx("text",{x:"50",y:"250",fill:"#fca5a5",fontSize:"11",fontWeight:"bold",children:"Complexity: O(N²) Quadratic Disaster"}),e.jsx("rect",{x:"440",y:"65",width:"380",height:"220",rx:"10",fill:"#1e293b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"460",y:"95",fill:"#34d399",fontSize:"14",fontWeight:"bold",children:"✓ Set / dict.fromkeys() Pattern"}),e.jsx("text",{x:"460",y:"125",fill:"#cbd5e1",fontSize:"11",children:"• Computes hash code in O(1) time per item."}),e.jsx("text",{x:"460",y:"150",fill:"#cbd5e1",fontSize:"11",children:"• Total operations: exactly 100,000 hash checks."}),e.jsx("rect",{x:"460",y:"175",width:"340",height:"45",rx:"6",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"475",y:"202",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"Time Taken: 0.0048 Seconds (Instant!)"}),e.jsx("text",{x:"460",y:"250",fill:"#34d399",fontSize:"11",fontWeight:"bold",children:"Complexity: O(N) Linear (3,200x Faster!)"})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 space-y-8",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Python Code Labs"})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab A: Standard Unordered Deduplication with list(set(data))"}),e.jsx(r,{fileModule:x,title:"deduplication_basics.py",highlightLines:[6,14,19]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab B: Preserving Insertion Order with dict.fromkeys() & seen Generators"}),e.jsx(r,{fileModule:u,title:"order_preserving_deduplication.py",highlightLines:[6,17,23,31]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab C: Deduplicating Custom Objects via __hash__ and __eq__"}),e.jsx(r,{fileModule:f,title:"custom_objects_deduplication.py",highlightLines:[6,12,16,27,34]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab D: Real-World Electoral Voter Roll Deduplication in Barrackpore"}),e.jsx(r,{fileModule:b,title:"voter_roll_deduplication.py",highlightLines:[6,16,24]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Real-World Applications in West Bengal Industry"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🗳️"})," 1. Voter Electoral Roll Cleansing"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Civic election databases in ",e.jsx("strong",{children:"Barrackpore"})," deduplicate voter lists across municipal polling booths using seen sets on voter card serial IDs, ensuring clean electoral participation."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"💳"})," 2. Webhook Replay Attack Defense"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Payment gateways in ",e.jsx("strong",{children:"Kolkata"})," filter incoming duplicate HTTP retry payloads for student fees (",e.jsx("strong",{className:"text-emerald-300",children:"₹4,500 course fee"}),") by storing processed transaction IDs in an in-memory set."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🕷️"})," 3. Web Crawler Visited-URL Registers"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Search engine spiders in ",e.jsx("strong",{children:"Ichapur"})," prevent circular infinite traversal loops by checking ",e.jsx("code",{className:"font-mono text-purple-400",children:"if url not in visited_urls"})," in O(1) before enqueueing web links."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"📧"})," 4. Newsletter Subscriber Cleansing"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Marketing automation systems in ",e.jsx("strong",{children:"Jadavpur"})," run ",e.jsx("code",{className:"font-mono text-amber-400",children:"list(dict.fromkeys(emails))"})," before firing bulk campaigns, eliminating duplicate recipient dispatches."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Pitfalls & Tricky Gotchas in Data Deduplication"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 1: Unintended Order Scrambling"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Calling ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"list(set(data))"})," scrambles timeline data. If order matters (e.g. chronological logs), always use ",e.jsx("code",{className:"font-mono text-sky-400",children:"list(dict.fromkeys(data))"}),"!"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 2: The O(N²) Nested List Trap"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Writing ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"if x not in unique_list"})," scans the list on every iteration. On 100K records, it causes a severe 15-second CPU freeze!"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 3: Unhashable Nested Lists"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:[e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"set([[1, 2], [1, 2]])"})," crashes with TypeError. Convert inner lists to tuples first: ",e.jsx("code",{className:"font-mono text-emerald-400",children:"[list(x) for x in set(tuple(x) for x in data)]"}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 4: 1 vs True Collision"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Remember that ",e.jsx("code",{className:"font-mono",children:"1 == True == 1.0"}),"! Deduplicating ",e.jsx("code",{className:"font-mono",children:"[1, True]"})," collapses them into a single element ",e.jsx("code",{className:"font-mono",children:"{1}"}),"."]})]})]})]}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(m,{content:g,title:"Topic 15: Removing Duplicates Using Sets Study Guide",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Study Note",downloadFileName:"topic15_deduplication_note.txt"})}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(p,{title:"Topic 15 • Removing Duplicates with Sets: Master Viva & Review Questions",questions:y})}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(h,{note:"Teacher's Optimization Law: Never, EVER write 'if x not in list' inside a loop! That simple mistake turns your O(N) script into an O(N²) crawler that chokes on real-world datasets in Barrackpore and Kolkata. Use list(set(data)) when order doesn't matter, and list(dict.fromkeys(data)) when order must be preserved. Keep your algorithms in O(N) time!"})})]})]})}export{T as default};
