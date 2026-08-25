import{b as o,j as e,bg as c}from"./vendor-react-core-Doz9nIC6.js";import{P as i}from"./PythonFileLoader-hCi5osN-.js";import{P as h}from"./PlainTextPrint-C08xhKA4.js";import{F as m}from"./FAQTemplate-CkSqDH4B.js";import{T as x}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const p=`# ====================================================================\r
# Topic 6: Membership Testing Using 'in' and 'not in'\r
# File: membership_in_operator.py\r
# Description: Demonstrating O(1) membership testing with 'in' and 'not in'\r
# ====================================================================\r
\r
# Master set of certified Python developers in Barrackpore & Kolkata\r
certified_developers = {\r
    "Susmita Roy",\r
    "Debangshu Mukherjee",\r
    "Mamata Banerjee",\r
    "Abhronila Das"\r
}\r
\r
# 1. Testing positive membership with 'in'\r
candidate_1 = "Susmita Roy"\r
if candidate_1 in certified_developers:\r
    print(f"✓ Verification Passed: '{candidate_1}' is a verified certified developer!")\r
\r
# 2. Testing non-membership with 'not in'\r
candidate_2 = "Rohan Sharma"\r
if candidate_2 not in certified_developers:\r
    print(f"✗ Access Restricted: '{candidate_2}' is NOT in the certified registry.")\r
\r
# 3. Numeric & Boolean membership quirks\r
flags_set = {1, 0, "Active"}\r
print(f"\\nIs True in flags_set? -> {True in flags_set} (Because True == 1)")\r
print(f"Is False in flags_set? -> {False in flags_set} (Because False == 0)")\r
print(f"Is 2 in flags_set? -> {2 in flags_set}")\r
\r
# 4. In-line conditional expressions\r
status = "Authorized" if "Debangshu Mukherjee" in certified_developers else "Guest"\r
print(f"\\nAuthorization Status for Debangshu: {status}")\r
`,u=`# ====================================================================\r
# Topic 6: Membership Testing Using 'in' and 'not in'\r
# File: not_in_operator_demo.py\r
# Description: Demonstrating 'not in' filtering & security blocklists\r
# ====================================================================\r
\r
# Active blacklist of suspicious IP addresses or banned voter IDs\r
banned_voter_ids = {"WB-BP-999", "WB-BP-888", "WB-BP-777"}\r
\r
# Incoming voter check queue\r
voter_queue = ["WB-BP-1001", "WB-BP-999", "WB-BP-1002", "WB-BP-888", "WB-BP-1003"]\r
\r
allowed_voters = []\r
for voter in voter_queue:\r
    # 'not in' check executes in O(1) time\r
    if voter not in banned_voter_ids:\r
        allowed_voters.append(voter)\r
    else:\r
        print(f"[SECURITY ALERT]: Banned voter '{voter}' flagged and blocked!")\r
\r
print("\\nAllowed Voters Queue:", allowed_voters)\r
`,b=`# ====================================================================\r
# Topic 6: Membership Testing Using 'in' and 'not in'\r
# File: membership_complexity_benchmark.py\r
# Description: Demonstrating O(1) Set Lookup vs O(N) List Lookup Benchmark\r
# ====================================================================\r
\r
import time\r
\r
# Create a large dataset of 1,000,000 student enrollment records\r
N = 1_000_000\r
raw_list = list(range(N))\r
fast_set = set(raw_list)\r
\r
search_target = N - 1  # Worst-case item (at the very end of the list)\r
\r
# 1. Benchmarking List Search (O(N) Linear Scan)\r
start_list = time.perf_counter()\r
found_in_list = search_target in raw_list\r
end_list = time.perf_counter()\r
list_time = (end_list - start_list) * 1000  # in milliseconds\r
\r
# 2. Benchmarking Set Search (O(1) Instant Hash Jump)\r
start_set = time.perf_counter()\r
found_in_set = search_target in fast_set\r
end_set = time.perf_counter()\r
set_time = (end_set - start_set) * 1000  # in milliseconds\r
\r
print(f"Dataset Size: {N:,} elements")\r
print(f"Target Searched: {search_target:,}")\r
print(f"\\nList Lookup Time (O(N)): {list_time:.4f} ms")\r
print(f"Set Lookup Time  (O(1)): {set_time:.4f} ms")\r
\r
if set_time > 0:\r
    speedup = list_time / max(set_time, 0.00001)\r
    print(f"\\n⚡ Set is approximately {speedup:.1f}x FASTER than List for membership testing!")\r
`,f=`# ====================================================================\r
# Topic 6: Membership Testing Using 'in' and 'not in'\r
# File: access_guard_real_world.py\r
# Description: Real-World Authorization Gateway & Course Fee Audit in ₹\r
# ====================================================================\r
\r
# Premium enrolled students in Barrackpore Python Pro Track\r
premium_students = {\r
    "SUSMITA-901",\r
    "DEBANGSHU-902",\r
    "MAMATA-903",\r
    "ABHRONILA-904"\r
}\r
\r
course_fee = 4500\r
\r
def check_lab_access(student_id: str):\r
    """Checks whether a student has paid access to the Advanced Lab Cloud."""\r
    if student_id in premium_students:\r
        return f"ACCESS GRANTED: Verified enrollment (Fee Paid: ₹{course_fee}). Welcome {student_id}!"\r
    else:\r
        return f"ACCESS DENIED: Student ID '{student_id}' not found in active batch roster."\r
\r
\r
# Testing portal access requests\r
print(check_lab_access("SUSMITA-901"))\r
print(check_lab_access("GUEST-110"))\r
print(check_lab_access("DEBANGSHU-902"))\r
`,g=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
                PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_006: SETS\r
                   TOPIC 6: MEMBERSHIP TESTING USING 'IN' & 'NOT IN'\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. OVERVIEW & TIME COMPLEXITY\r
--------------------------------------------------------------------------------\r
Membership testing in Python answers the question: "Does element X exist in\r
collection S?"\r
\r
Operators:\r
  • \`item in my_set\`: Returns True if \`item\` exists in the set; False otherwise.\r
  • \`item not in my_set\`: Returns True if \`item\` is absent; False otherwise.\r
\r
Performance Comparison:\r
  • Set Membership (\`x in my_set\`):  O(1) average time (Instant hash jump).\r
  • List Membership (\`x in my_list\`): O(N) linear time (Scans every item).\r
  • For 1,000,000 items, sets are up to 10,000x faster than lists!\r
\r
--------------------------------------------------------------------------------\r
2. HOW 'IN' WORKS INTERNALLY (HASH TABLE LOOKUP)\r
--------------------------------------------------------------------------------\r
When evaluating \`target in my_set\`:\r
  1. Python computes \`hash(target)\`.\r
  2. Jumps directly to the computed hash bucket index.\r
  3. If bucket is empty -> Returns False immediately in 1 step!\r
  4. If bucket is occupied -> Compares \`target == bucket_item\`.\r
     - If True -> Returns True.\r
     - If False -> Follows collision probe chain until empty bucket or match.\r
\r
--------------------------------------------------------------------------------\r
3. BOOLEAN & NUMERICAL EQUIVALENCE GOTCHAS\r
--------------------------------------------------------------------------------\r
  • \`True in {1}\` evaluates to True (because \`True == 1\` and hashes match).\r
  • \`False in {0}\` evaluates to True (because \`False == 0\` and hashes match).\r
  • \`42.0 in {42}\` evaluates to True (because \`42.0 == 42\` and hashes match).\r
\r
--------------------------------------------------------------------------------\r
4. REAL-WORLD PRODUCTION USE CASES\r
--------------------------------------------------------------------------------\r
  • High-Throughput API Gateway Authorization: Checking token scopes in O(1).\r
  • Firewall Blacklisting: Blocking malicious IP addresses in real time.\r
  • Spell Checkers & Vocabulary Verification: Validating dictionary words.\r
  • Web Scraping: Skipping previously visited URLs.\r
\r
--------------------------------------------------------------------------------\r
5. COMMON PITFALLS & GOTCHAS\r
--------------------------------------------------------------------------------\r
  [x] Converting list to set inside a loop: \`for x in data: if x in set(list):\`\r
      (Re-creates set on every iteration, destroying O(1) performance to O(N^2)!)\r
  [x] Forgetting that strings are case-sensitive: \`'kolkata' in {'Kolkata'}\` -> False.\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 6: MEMBERSHIP TESTING IN SETS\r
================================================================================\r
`,y=[{question:"What is the average time complexity for checking membership with 'x in my_set' vs 'x in my_list'?",shortAnswer:"'x in my_set' is O(1) constant time; 'x in my_list' is O(N) linear time.",explanation:"In a list, Python must inspect each element sequentially from start to end (worst case N checks). In a set, Python calculates hash(x) and jumps directly to the target bucket in O(1) average time, making sets vastly superior for lookup operations.",hint:"Think about instant hash jump vs sequential item-by-item scan.",level:"basic",codeExample:`# Set lookup:  'item in s' -> O(1)
# List lookup: 'item in l' -> O(N)`},{question:"What special dunder method is invoked under the hood when executing 'x in my_set'?",shortAnswer:"The __contains__(self, item) method.",explanation:"Python translates the membership expression 'x in s' directly into a call to s.__contains__(x), which evaluates the hash table lookup in CPython.",hint:"Think of the container protocol method name.",level:"moderate",codeExample:`s = {10, 20, 30}
print(s.__contains__(20))  # True (Equivalent to 20 in s)`},{question:"What is the result of evaluating 'True in {1, 2, 3}' and why?",shortAnswer:"True, because True == 1 and hash(True) == hash(1).",explanation:"Python evaluates membership by checking both hash equality and value equality. Because True == 1 is True and hash(True) == 1, Python finds 1 in the hash table and returns True.",hint:"Remember that True and 1 compare equal and share hash value 1.",level:"moderate",codeExample:`print(True in {1, 2, 3})   # True
print(False in {0, 2, 3})  # True`},{question:"Why does 'kolkata' in {'Kolkata', 'Barrackpore'} evaluate to False?",shortAnswer:"String membership is case-sensitive; 'kolkata' != 'Kolkata' and their hashes differ.",explanation:"Uppercase and lowercase characters have different Unicode code points ('K' = 75, 'k' = 107), resulting in different hashes and unequal comparisons.",hint:"Set membership respects exact character casing.",level:"basic",codeExample:`cities = {"Kolkata", "Barrackpore"}
print("kolkata" in cities)  # False
print("Kolkata" in cities)  # True`},{question:"What is the catastrophic performance trap of writing: 'for item in dataset: if item in set(big_list):'?",shortAnswer:"It re-constructs the entire set on every single loop iteration, ballooning execution time from O(N) to O(N^2) quadratic time.",explanation:"Calling set(big_list) inside the loop executes O(M) work on every single step. The proper pattern is to build the set once outside the loop (lookup_set = set(big_list)) and then perform O(1) queries inside the loop.",hint:"Build the set once before the loop, not inside it.",level:"expert",codeExample:`# BAD (O(N^2)):
# for x in stream:
#     if x in set(big_list):

# GOOD (O(N)):
# fast_set = set(big_list)
# for x in stream:
#     if x in fast_set:`},{question:"What is the worst-case time complexity of set membership testing, and when does it occur?",shortAnswer:"O(N) worst-case time, occurring when all elements produce the exact same hash code (catastrophic hash collision).",explanation:"If a malicious or flawed hash function causes all N elements to collide in the same bucket, Python must traverse the open-addressing probe chain linearly with equality checks, taking O(N) time.",hint:"Severe hash collisions degrade hash tables to linear lists.",level:"expert",codeExample:"# When hash(a) == hash(b) == hash(c)... for all items, lookup degrades to O(N)"},{question:"How does the 'not in' operator work in Python sets?",shortAnswer:"It returns True if the element is absent from the set's hash table and False if it is present.",explanation:"The expression 'x not in s' is equivalent to 'not (x in s)', executing an O(1) hash check and inverting the boolean result.",hint:"It inverts the membership test result.",level:"basic",codeExample:`banned = {"192.168.1.1", "10.0.0.5"}
if "172.16.0.1" not in banned:
    print("Allowed connection")`},{question:"Can you test membership of a tuple in a set: (1, 2) in {(1, 2), (3, 4)}?",shortAnswer:"Yes, because tuples of immutable items are hashable and can be looked up in O(1) time.",explanation:"Python computes the combined hash of the tuple (1, 2) and looks it up directly in the set's hash table, returning True.",hint:"Tuples are hashable and valid lookup targets.",level:"basic",codeExample:`coords = {(22.57, 88.36), (22.76, 88.37)}
print((22.57, 88.36) in coords)  # True`},{question:"What happens if you test membership of an unhashable object: [1, 2] in {1, 2, 3}?",shortAnswer:"It immediately raises TypeError: unhashable type: 'list'.",explanation:"To check membership in a set, Python must calculate hash(target). Since lists cannot be hashed, the lookup fails at step 1 with a TypeError.",hint:"The searched item must also be hashable.",level:"moderate",codeExample:`s = {1, 2, 3}
try:
    print([1, 2] in s)
except TypeError as e:
    print(e)  # unhashable type: 'list'`},{question:"What is the speed difference between searching a million-item list vs a million-item set?",shortAnswer:"Sets are typically 1,000x to 10,000x faster than lists for large dataset lookups.",explanation:"A million-item list requires inspecting up to 1,000,000 memory pointers sequentially (~10-20 ms). A set calculates one hash and inspects one bucket in under 0.0001 ms.",hint:"1 step vs 1,000,000 steps.",level:"moderate",codeExample:"# Million item lookup: List takes ~15ms; Set takes ~0.00005ms"},{question:"How do sets handle float-to-integer membership: 42.0 in {42}?",shortAnswer:"It returns True because 42.0 == 42 and hash(42.0) == hash(42).",explanation:"Floats and ints with identical mathematical values have matching hashes and compare equal, so 42.0 is found inside {42}.",hint:"42.0 and 42 are equal in hash and value.",level:"basic",codeExample:`print(42.0 in {42})  # True
print(42 in {42.0})  # True`},{question:"What is the result of 'None in {None}' and 'None in set()'?",shortAnswer:"'None in {None}' is True; 'None in set()' is False.",explanation:"None is a valid immutable singleton object. It exists in {None} (len 1) and is absent from empty set() (len 0).",hint:"None is a valid set element.",level:"basic",codeExample:`print(None in {None})  # True
print(None in set())   # False`},{question:"How can you use set membership testing to filter common items between two large lists in O(N+M) time?",shortAnswer:"Convert one list to a set (O(M)), then filter the other list with 'x in set_b' in O(N) time.",explanation:"Converting list B to a set takes O(M). Checking each item of list A takes O(1) * N = O(N). Total time is O(N+M), far faster than O(N*M) nested list scanning.",hint:"Convert the lookup list to a set first.",level:"moderate",codeExample:`list_a = [1, 2, 3, 4, 5]
list_b = [3, 4, 5, 6, 7]
set_b = set(list_b)
common = [x for x in list_a if x in set_b]
print(common)  # [3, 4, 5]`},{question:"Can set membership testing be used inside dictionary and list comprehensions?",shortAnswer:"Yes, 'x in my_set' is widely used in comprehension if-clauses for high-speed filtering.",explanation:"Because set lookups are O(1), using 'if x in whitelist_set' inside a list or dict comprehension keeps comprehension throughput at maximum speed.",hint:"Using sets in comprehension filter conditions keeps them O(N).",level:"basic",codeExample:`allowed_roles = {"admin", "editor"}
users = [{"name": "Susmita", "role": "admin"}, {"name": "John", "role": "guest"}]
active_staff = [u["name"] for u in users if u["role"] in allowed_roles]
print(active_staff)  # ['Susmita']`},{question:"What is the difference between 'x in my_set' and 'my_set.issubset({x})'?",shortAnswer:"'x in my_set' checks if x is an ELEMENT of my_set; issubset({x}) checks if my_set is a SUBSET of {x}.",explanation:"'x in my_set' tests single element membership in O(1) time. {x}.issubset(my_set) checks set containment.",hint:"Distinguish element membership from subset containment.",level:"moderate",codeExample:`s = {1, 2, 3}
print(1 in s)              # True
print({1}.issubset(s))     # True
print(s.issubset({1}))     # False`},{question:"Why is set membership testing thread-safe for concurrent read-only operations under Python's GIL?",shortAnswer:"Read-only membership queries ('x in s') only calculate hashes and read buckets without mutating table pointers.",explanation:"Because read-only lookups don't alter the internal PySetObject C struct or resize the table, concurrent threads can query 'x in s' simultaneously without corrupting memory.",hint:"Read-only hash lookups do not mutate internal data structures.",level:"expert",codeExample:"# Multiple threads querying 'token in active_sessions' is safe for reads"},{question:"What is the output of '0.1 + 0.2 in {0.3}' and why?",shortAnswer:"False, due to IEEE 754 floating-point binary representation precision (0.1 + 0.2 == 0.30000000000000004).",explanation:"In binary floating-point math, 0.1 + 0.2 equals 0.30000000000000004. Since 0.1 + 0.2 != 0.3, the equality check fails and Python returns False.",hint:"Recall binary floating-point rounding inaccuracies.",level:"expert",codeExample:`print(0.1 + 0.2 in {0.3})  # False
print(0.1 + 0.2)            # 0.30000000000000004`},{question:"How does set membership testing benefit web scraper crawlers?",shortAnswer:"It allows O(1) verification to check if a URL has already been crawled before making an HTTP request.",explanation:"A scraper maintains visited_urls = set(). Checking 'url in visited_urls' takes O(1) time, preventing redundant network requests and endless link loops.",hint:"Check visited URLs in O(1) time.",level:"basic",codeExample:`visited = set()
def crawl(url):
    if url in visited:
        return
    visited.add(url)`},{question:"What happens when you check membership of a custom class instance: my_obj in my_set?",shortAnswer:"Python executes custom_class.__hash__() followed by custom_class.__eq__().",explanation:"Python calls the instance's __hash__ method to locate the bucket, and if needed, invokes __eq__ to confirm matching instance values.",hint:"Custom classes route lookups through __hash__ and __eq__.",level:"moderate",codeExample:`class Student:
    def __init__(self, roll):
        self.roll = roll
    def __hash__(self):
        return hash(self.roll)
    def __eq__(self, other):
        return isinstance(other, Student) and self.roll == other.roll

s = {Student(101)}
print(Student(101) in s)  # True`},{question:"How can you check if any element from list A is present in set B?",shortAnswer:"Use any(x in set_b for x in list_a) or bool(set_b.intersection(list_a)).",explanation:"any(x in set_b for x in list_a) short-circuits on the first match in O(1) per check. bool(set_b.intersection(list_a)) checks set overlap directly.",hint:"Combine any() with a set membership generator.",level:"moderate",codeExample:`banned_roles = {"banned", "suspended"}
user_roles = ["viewer", "banned", "student"]
print(any(r in banned_roles for r in user_roles))  # True`},{question:"How can you check if ALL elements from list A are present in set B?",shortAnswer:"Use all(x in set_b for x in list_a) or set(list_a).issubset(set_b).",explanation:"all(x in set_b for x in list_a) verifies that every item in list_a exists in set_b, short-circuiting to False on the first missing item.",hint:"Use all() or issubset().",level:"moderate",codeExample:`required = {"read", "write"}
user_perms = {"read", "write", "delete"}
print(required.issubset(user_perms))  # True`},{question:"Why is 'x in my_set' faster than 'x in my_dict.keys()' in Python 2 vs Python 3?",shortAnswer:"In Python 3, dict.keys() is a set-like dictionary view with O(1) lookups, identical in speed to sets; in Python 2, dict.keys() built a full list in O(N).",explanation:"Python 3 converted dict.keys() from a static list into a dynamic set-like view with direct O(1) hash lookups, matching set performance.",hint:"In Python 3, dict.keys() is a set-like view.",level:"expert",codeExample:`d = {"a": 1, "b": 2}
# 'a in d' or 'a in d.keys()' is O(1) in Python 3`},{question:`What is the output of '"5" in {5, 6, 7}'?`,shortAnswer:"False, because string '5' and integer 5 have different types and different hashes.",explanation:'In Python, "5" (str) != 5 (int), and hash("5") != hash(5). They are completely distinct elements.',hint:"Strings and integers do not compare equal.",level:"basic",codeExample:`print("5" in {5, 6, 7})  # False
print(5 in {5, 6, 7})    # True`},{question:"How does set membership testing speed up spell checker applications?",shortAnswer:"Loading dictionary words into a set allows verifying if any input word is spelled correctly in O(1) time.",explanation:"A spell checker with 200,000 words in a set checks word validity in under 1 microsecond per word, compared to scanning a text file in 50 milliseconds per word.",hint:"Dictionary lookup in O(1) enables real-time spell checking.",level:"basic",codeExample:`dictionary = {"python", "programming", "barrackpore"}
word = "python"
print(f"Is '{word}' valid? -> {word in dictionary}")`},{question:"Can set membership be checked for complex numbers: (1+2j) in {1+2j, 3+4j}?",shortAnswer:"Yes, complex numbers are hashable and evaluated in O(1) time.",explanation:"Complex numbers compute hashes from real and imaginary parts and compare equal with ==, executing normal O(1) lookups.",hint:"Complex numbers are hashable and valid in sets.",level:"basic",codeExample:`c_set = {1 + 2j, 3 + 4j}
print(1 + 2j in c_set)  # True`},{question:"What is the effect of checking membership in an empty set: x in set()?",shortAnswer:"It immediately returns False in O(1) time without error.",explanation:"Because an empty set has 0 active elements, Python immediately detects that no matching bucket exists and returns False in 1 step.",hint:"Empty set lookups always evaluate to False.",level:"basic",codeExample:"print(10 in set())  # False"},{question:"How can you count the number of elements from a query list that exist in a set?",shortAnswer:"Use sum(1 for x in query_list if x in target_set).",explanation:"The generator expression evaluates each item in query_list against target_set in O(1) time, summing 1 for each match in O(N) total time.",hint:"Combine sum() with a set membership filter generator.",level:"moderate",codeExample:`target_set = {"A", "B", "C", "D"}
query = ["A", "B", "Z", "X", "A"]
match_count = sum(1 for item in query if item in target_set)
print("Matches:", match_count)  # 3 (A, B, A)`},{question:"Why does Python set membership testing use open-addressing with quadratic perturbation instead of chaining (linked lists)?",shortAnswer:"Open-addressing maintains CPU cache locality by keeping all entries in a single contiguous memory block, avoiding pointer chasing.",explanation:"Separate chaining with linked lists incurs CPU cache misses due to fragmented pointer chasing. Open-addressing keeps entries close in CPU cache lines, maximizing lookup speed on modern processors.",hint:"Contiguous cache locality is faster than linked list pointer chasing.",level:"expert",codeExample:"# CPython uses perturbation open addressing for maximum CPU cache hit rate"},{question:"How does set membership testing protect user authentication endpoints against brute force attacks?",shortAnswer:"By storing rate-limited or locked IP addresses in an in-memory set to reject blocked IPs in O(1) time before hitting the database.",explanation:"A security middleware checks 'client_ip in locked_ips' before performing expensive database queries or cryptographic hashing, deflecting brute-force attacks at zero cost.",hint:"O(1) in-memory checks block requests before hitting the database.",level:"moderate",codeExample:`locked_ips = {"192.168.1.100", "10.0.0.99"}
if client_ip in locked_ips:
    return "403 Forbidden"`},{question:"What is the golden rule for professional developers regarding membership testing in Python?",shortAnswer:"Whenever you need repeated 'in' or 'not in' lookups across a collection of data, ALWAYS store or convert the collection to a Set!",explanation:"Converting a list to a set changes search cost from O(N) linear time to O(1) constant time, transforming slow multi-second pipelines into instantaneous millisecond executions.",hint:"Repeated Lookups = Convert to Set!",level:"basic",codeExample:`# Golden Rule:
# Repeated Lookups -> USE SET!
fast_lookup = set(raw_data)
if item in fast_lookup:
    ...`}];function O(){const r=o.useRef([]),[a,l]=o.useState("speed");o.useEffect(()=>{const s=new IntersectionObserver(n=>{n.forEach(d=>{d.isIntersecting&&d.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return r.current.forEach(n=>{n&&s.observe(n)}),()=>s.disconnect()},[]);const t=s=>{s&&!r.current.includes(s)&&r.current.push(s)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-emerald-500/30 selection:text-emerald-200",children:[e.jsx("style",{children:`
        .section-hidden {
          transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .section-visible {
          transform: translateY(0);
        }
      `}),e.jsxs("header",{ref:t,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-emerald-950/80 text-emerald-300 px-3 py-1 rounded-full border border-emerald-800/80 shadow-sm shadow-emerald-950/50",children:"Segment 2 • Module 002_006"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-sky-950/80 text-sky-300 px-3 py-1 rounded-full border border-sky-800/80 shadow-sm shadow-sky-950/50",children:"Topic 6"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"High-Velocity Querying"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Membership Testing: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"in"})," & ",e.jsx("code",{className:"text-sky-400 font-mono",children:"not in"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Harnessing instantaneous ",e.jsx("span",{className:"text-emerald-400 font-semibold",children:"O(1)"})," hash-powered membership queries, eliminating slow linear scans, and building high-throughput authorization gateways."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ 10,000x Faster than List Scan"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔍 __contains__ Dunder Protocol"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛑 Avoid O(N²) Loop Trap"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Firewall & Whitelist Guards"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚡"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Superpower of Set Membership Testing"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["In computer science, membership testing answers the fundamental question: ",e.jsx("em",{className:"text-white",children:'"Is entity X present in dataset S?"'}),". The speed at which your program answers this question defines application scalability:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5 my-6 not-prose",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/70 border border-amber-800/60 shadow-lg shadow-amber-950/30 transition-all duration-300 hover:border-amber-500",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-lg",children:[e.jsx("span",{children:"📜"})," List Search: O(N)"]}),e.jsx("span",{className:"text-xs font-mono bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-800",children:"Linear Scan"})]}),e.jsx("p",{className:"text-sm text-slate-300 mb-2",children:"Python starts at index 0 and inspects every element sequentially until it finds a match or exhausts the list."}),e.jsxs("div",{className:"text-xs font-mono text-slate-400",children:["Across 1,000,000 items: Takes up to ",e.jsx("strong",{className:"text-rose-400",children:"1,000,000 pointer checks"})," (~15ms)."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/70 border border-emerald-800/60 shadow-lg shadow-emerald-950/30 transition-all duration-300 hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-lg",children:[e.jsx("span",{children:"⚡"})," Set Search: O(1)"]}),e.jsx("span",{className:"text-xs font-mono bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800",children:"Constant Time"})]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-2",children:["Python computes ",e.jsx("code",{className:"font-mono text-emerald-300",children:"hash(target)"})," and jumps directly to the pre-calculated bucket."]}),e.jsxs("div",{className:"text-xs font-mono text-slate-400",children:["Across 1,000,000 items: Takes exactly ",e.jsx("strong",{className:"text-emerald-400",children:"1 direct hash jump"})," (<0.0001ms)."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-emerald-500 border border-slate-800/80",children:[e.jsxs("h3",{className:"text-white font-bold text-base mb-2",children:["Under the Hood: The ",e.jsx("code",{className:"font-mono text-emerald-400",children:"__contains__"})," Protocol"]}),e.jsxs("p",{className:"text-sm sm:text-base text-slate-300",children:["When you write ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"if candidate in certified_set:"}),", Python translates it directly to ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"certified_set.__contains__(candidate)"}),", executing in blazing fast C-level speed."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Lookup Complexity & The Loop Anti-Pattern"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>l("speed"),className:c("px-3 py-1.5 rounded-lg transition-all",a==="speed"?"bg-emerald-900/50 text-emerald-300 border border-emerald-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"1 Million Item Benchmark"}),e.jsx("button",{onClick:()=>l("antipattern"),className:c("px-3 py-1.5 rounded-lg transition-all",a==="antipattern"?"bg-amber-900/50 text-amber-300 border border-amber-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"The O(N²) Loop Trap"})]})]}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:a==="speed"?e.jsxs("svg",{viewBox:"0 0 850 320",className:"w-full h-auto min-w-[650px] font-sans",children:[e.jsx("text",{x:"30",y:"35",fill:"#f8fafc",fontSize:"15",fontWeight:"bold",children:"Searching for Item 999,999 in a 1,000,000 Element Collection"}),e.jsx("rect",{x:"30",y:"65",width:"380",height:"220",rx:"10",fill:"#1e293b",stroke:"#f59e0b",strokeWidth:"1.5"}),e.jsx("text",{x:"50",y:"95",fill:"#fbbf24",fontSize:"15",fontWeight:"bold",children:"List Search: 999,999 in my_list"}),e.jsx("rect",{x:"50",y:"115",width:"340",height:"40",rx:"6",fill:"#451a03",stroke:"#f59e0b"}),e.jsx("text",{x:"65",y:"140",fill:"#fde68a",fontSize:"13",fontWeight:"bold",children:"Time: ~15.2400 ms (1,000,000 checks)"}),e.jsx("text",{x:"50",y:"185",fill:"#cbd5e1",fontSize:"12",children:"• Inspects index 0, 1, 2, 3... up to 999,999."}),e.jsx("text",{x:"50",y:"210",fill:"#cbd5e1",fontSize:"12",children:"• High CPU usage and pointer iteration overhead."}),e.jsx("text",{x:"50",y:"235",fill:"#fca5a5",fontSize:"12",fontWeight:"bold",children:"❌ Slow O(N) linear scan!"}),e.jsx("rect",{x:"440",y:"65",width:"380",height:"220",rx:"10",fill:"#1e293b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"460",y:"95",fill:"#34d399",fontSize:"15",fontWeight:"bold",children:"Set Search: 999,999 in my_set"}),e.jsx("rect",{x:"460",y:"115",width:"340",height:"40",rx:"6",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"475",y:"140",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"Time: ~0.0004 ms (1 direct jump)"}),e.jsx("text",{x:"460",y:"185",fill:"#cbd5e1",fontSize:"12",children:"• hash(999999) jumps directly to bucket address."}),e.jsx("text",{x:"460",y:"210",fill:"#cbd5e1",fontSize:"12",children:"• Zero memory traversal across other 999,999 items."}),e.jsx("text",{x:"460",y:"235",fill:"#34d399",fontSize:"12",fontWeight:"bold",children:"⚡ ~38,000x FASTER than List!"})]}):e.jsxs("svg",{viewBox:"0 0 850 320",className:"w-full h-auto min-w-[650px] font-sans",children:[e.jsx("text",{x:"30",y:"35",fill:"#f8fafc",fontSize:"15",fontWeight:"bold",children:"The Catastrophic O(N²) Loop Anti-Pattern"}),e.jsx("rect",{x:"30",y:"65",width:"380",height:"220",rx:"10",fill:"#1e293b",stroke:"#ef4444",strokeWidth:"2"}),e.jsx("text",{x:"50",y:"95",fill:"#fca5a5",fontSize:"14",fontWeight:"bold",children:"THE ANTI-PATTERN: Inside Loop"}),e.jsx("rect",{x:"50",y:"115",width:"340",height:"45",rx:"6",fill:"#450a0a",stroke:"#ef4444"}),e.jsx("text",{x:"60",y:"142",fill:"#fecaca",fontSize:"11",fontWeight:"mono",children:"for x in data: if x in set(big_list):"}),e.jsx("text",{x:"50",y:"185",fill:"#cbd5e1",fontSize:"12",children:"• Re-builds 1,000,000-item set on EVERY iteration!"}),e.jsx("text",{x:"50",y:"210",fill:"#cbd5e1",fontSize:"12",children:"• 10,000 iterations = 10,000,000,000 operations."}),e.jsx("text",{x:"50",y:"235",fill:"#fca5a5",fontSize:"12",fontWeight:"bold",children:"💥 Catastrophic O(N²) quadratic freeze!"}),e.jsx("rect",{x:"440",y:"65",width:"380",height:"220",rx:"10",fill:"#1e293b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"460",y:"95",fill:"#34d399",fontSize:"14",fontWeight:"bold",children:"THE PYTHONIC PATTERN: Hoist Set"}),e.jsx("rect",{x:"460",y:"115",width:"340",height:"45",rx:"6",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"470",y:"142",fill:"#a7f3d0",fontSize:"11",fontWeight:"mono",children:"fast_set = set(big_list) # ONCE outside"}),e.jsx("text",{x:"460",y:"185",fill:"#cbd5e1",fontSize:"12",children:"• Set is built exactly once outside the loop O(N)."}),e.jsx("text",{x:"460",y:"210",fill:"#cbd5e1",fontSize:"12",children:"• Each loop check executes in O(1) constant time."}),e.jsx("text",{x:"460",y:"235",fill:"#34d399",fontSize:"12",fontWeight:"bold",children:"✓ Blazing fast O(N) linear completion!"})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 space-y-8",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Python Code Labs"})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab A: Positive & Negative Membership with 'in' and 'not in'"}),e.jsx(i,{fileModule:p,title:"membership_in_operator.py",highlightLines:[6,14,19,24]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab B: Security Blocklist Filtering with 'not in'"}),e.jsx(i,{fileModule:u,title:"not_in_operator_demo.py",highlightLines:[6,13]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab C: Million-Item Benchmark: O(1) Set vs O(N) List Lookup"}),e.jsx(i,{fileModule:b,title:"membership_complexity_benchmark.py",highlightLines:[7,14,19,28]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab D: Real-World Authorization Gateway & Tuition Fee Audit in ₹"}),e.jsx(i,{fileModule:f,title:"access_guard_real_world.py",highlightLines:[6,15,22]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Real-World Applications in West Bengal Industry"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🎓"})," 1. Cloud Lab Access Verification"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["When Susmita, Mamata, and Debangshu log in to the Advanced Python Cloud Lab in ",e.jsx("strong",{children:"Barrackpore"}),", membership check ",e.jsx("code",{className:"font-mono text-emerald-400",children:"if student_id in premium_students"})," validates tuition payment (",e.jsx("strong",{className:"text-emerald-300",children:"₹4,500"}),") in under 1 microsecond."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🛡️"})," 2. High-Velocity API Firewalls"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Payment gateways serving ",e.jsx("strong",{children:"Kolkata"})," fintech platforms evaluate incoming requests against banned IP sets ",e.jsx("code",{className:"font-mono text-sky-400",children:"if client_ip not in banned_ips"}),", shielding backend servers from DDoS attacks at zero latency."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🕷️"})," 3. Web Scraper Deduplication"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Data engineering pipelines crawling product prices verify ",e.jsx("code",{className:"font-mono text-purple-400",children:"if url not in visited_urls"})," before dispatching HTTP requests, avoiding duplicate network bandwidth consumption."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"📖"})," 4. Real-Time Spell Checkers"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Document editing engines in ",e.jsx("strong",{children:"Jadavpur"})," load 250,000 vocabulary words into a set, validating typed words in ",e.jsx("span",{className:"font-semibold text-emerald-400",children:"O(1)"})," time without stuttering user keystrokes."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Pitfalls & Tricky Gotchas with Membership Testing"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 1: Set Re-Creation in Loops"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Writing ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"if x in set(big_list):"})," inside a loop destroys performance to O(N²). Construct the set ",e.jsx("strong",{className:"text-white",children:"once outside"})," the loop!"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 2: Searching with Unhashable Target"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Writing ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"[1, 2] in my_set"})," raises ",e.jsx("code",{className:"text-rose-400 font-bold",children:"TypeError: unhashable type: 'list'"}),". Target search keys must be immutable."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 3: Case-Sensitivity Assumptions"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:[e.jsxs("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:["'kolkata' in ","{Kolkata}"]})," is ",e.jsx("code",{className:"text-rose-400 font-bold",children:"False"}),". String hashing is strictly case-sensitive."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 4: Float Precision Glitches"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:[e.jsxs("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:["0.1 + 0.2 in ","{0.3}"]})," returns ",e.jsx("code",{className:"text-rose-400 font-bold",children:"False"})," due to binary float representation (0.30000000000000004)."]})]})]})]}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(h,{content:g,title:"Topic 6: Membership Testing Study Guide",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Study Note",downloadFileName:"topic6_membership_testing_in_note.txt"})}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(m,{title:"Topic 6 • Membership Testing (in / not in): Master Viva & Review Questions",questions:y})}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(x,{note:"Teacher's Golden Speed Rule: If your code ever searches for items inside a collection more than once, NEVER use a list! Convert that collection to a set once, and enjoy instantaneous O(1) lookups that can make your code up to 38,000x faster. When Susmita, Abhronila, and Debangshu build authorization systems in Barrackpore, sets are your superhighway!"})})]})]})}export{O as default};
