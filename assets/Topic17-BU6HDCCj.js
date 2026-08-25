import{b as o,j as e,bg as d}from"./vendor-react-core-Doz9nIC6.js";import{P as i}from"./PythonFileLoader-hCi5osN-.js";import{P as m}from"./PlainTextPrint-C08xhKA4.js";import{F as h}from"./FAQTemplate-CkSqDH4B.js";import{T as x}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const p=`# ====================================================================\r
# Topic 17: Performance Benefits of Sets\r
# File: hash_table_mechanics_benchmark.py\r
# Description: Demonstrating O(1) hash table lookup vs O(N) linear array scan\r
# ====================================================================\r
\r
import time\r
\r
# Creating a dataset of 500,000 student enrollment records in West Bengal\r
ELEMENT_COUNT = 500000\r
raw_list = list(range(ELEMENT_COUNT))\r
raw_set = set(raw_list)\r
\r
# Target element located at the very end of the collection (Worst case for list)\r
target_key = ELEMENT_COUNT - 1\r
\r
# 1. Benchmarking List Membership Testing ('in' operator)\r
start_list = time.perf_counter()\r
for _ in range(100):\r
    _ = target_key in raw_list\r
time_list = time.perf_counter() - start_list\r
\r
# 2. Benchmarking Set Membership Testing ('in' operator)\r
start_set = time.perf_counter()\r
for _ in range(100):\r
    _ = target_key in raw_set\r
time_set = time.perf_counter() - start_set\r
\r
print(f"--- Benchmark Results (N = {ELEMENT_COUNT:,} elements, 100 queries) ---")\r
print(f"List Search Time (O(N)): {time_list:.6f} seconds")\r
print(f"Set Search Time (O(1)):  {time_set:.6f} seconds")\r
print(f"Performance Speedup:     {time_list / time_set:,.1f}x FASTER with Sets!")\r
`,f=`# ====================================================================\r
# Topic 17: Performance Benefits of Sets\r
# File: set_vs_list_scaling_curves.py\r
# Description: Demonstrating how list lookup time scales linearly while set time stays flat\r
# ====================================================================\r
\r
import time\r
\r
sizes = [1000, 10000, 100000, 500000]\r
\r
print(f"{'Size (N)':<12} | {'List Lookup (s)':<18} | {'Set Lookup (s)':<18} | {'Speedup Factor'}")\r
print("-" * 65)\r
\r
for n in sizes:\r
    test_list = list(range(n))\r
    test_set = set(test_list)\r
    search_target = -1  # Not present -> Forces full worst-case scan\r
\r
    # Time List\r
    start = time.perf_counter()\r
    for _ in range(50):\r
        _ = search_target in test_list\r
    l_time = time.perf_counter() - start\r
\r
    # Time Set\r
    start = time.perf_counter()\r
    for _ in range(50):\r
        _ = search_target in test_set\r
    s_time = time.perf_counter() - start\r
\r
    speedup = l_time / s_time if s_time > 0 else 0\r
    print(f"{n:<12,d} | {l_time:<18.6f} | {s_time:<18.6f} | {speedup:,.0f}x faster")\r
`,u=`# ====================================================================\r
# Topic 17: Performance Benefits of Sets\r
# File: algebra_vs_loop_performance.py\r
# Description: Comparing Set Intersection (A & B) vs Nested Loop Intersection\r
# ====================================================================\r
\r
import time\r
\r
# Two large batches of student IDs (50,000 each) in Kolkata\r
batch_a_list = list(range(0, 100000, 2))  # Even numbers\r
batch_b_list = list(range(50000, 150000, 2))\r
\r
batch_a_set = set(batch_a_list)\r
batch_b_set = set(batch_b_list)\r
\r
# 1. SET ALGEBRA: A & B\r
start = time.perf_counter()\r
set_common = batch_a_set & batch_b_set\r
set_algebra_time = time.perf_counter() - start\r
\r
print(f"Set Intersection (A & B) Found: {len(set_common):,} items")\r
print(f"Set Algebra Time: {set_algebra_time:.6f} seconds")\r
\r
# 2. NESTED LIST SCAN: [x for x in batch_a if x in batch_b] (on small 2,000 subset to prevent 2-min freeze)\r
subset_a = batch_a_list[:2000]\r
start = time.perf_counter()\r
list_common = [x for x in subset_a if x in batch_b_list]\r
nested_loop_time = time.perf_counter() - start\r
\r
print(f"\\nNested Loop on ONLY 2,000 items: {nested_loop_time:.6f} seconds")\r
print(f"Full 50,000 items in nested list would take ~{(nested_loop_time * 25):.2f} seconds!")\r
print(f"Set Algebra is ~{(nested_loop_time * 25) / set_algebra_time:,.0f}x faster than nested loops!")\r
`,b=`# ====================================================================\r
# Topic 17: Performance Benefits of Sets\r
# File: million_records_tax_filter.py\r
# Description: Real-World High-Performance Tax Exemption Audit in Barrackpore (₹)\r
# ====================================================================\r
\r
import time\r
\r
# 10,000 Tax-Exempt NGO PAN Numbers in West Bengal\r
exempt_pan_set = {f"WB-EXEMPT-PAN-{i:05d}" for i in range(10000)}\r
\r
# Stream of 250,000 Financial Transactions in Indian Rupees (₹)\r
sample_txns = [\r
    {\r
        "txn_id": f"TXN-{i:07d}",\r
        "pan": f"WB-EXEMPT-PAN-{i % 25000:05d}",\r
        "amount_inr": (i % 10 + 1) * 2500\r
    }\r
    for i in range(250000)\r
]\r
\r
print(f"Auditing {len(sample_txns):,} Financial Transactions against {len(exempt_pan_set):,} Exempt PANs...")\r
\r
start = time.perf_counter()\r
exempt_txns = [\r
    txn for txn in sample_txns\r
    if txn["pan"] in exempt_pan_set  # O(1) Set Hash Lookup!\r
]\r
audit_time = time.perf_counter() - start\r
\r
total_exempt_amount = sum(t["amount_inr"] for t in exempt_txns)\r
\r
print(f"\\n--- Audit Summary (Barrackpore Regional Tax Division) ---")\r
print(f"Total Transactions Processed: {len(sample_txns):,}")\r
print(f"Tax-Exempt Transactions Found: {len(exempt_txns):,}")\r
print(f"Total Exempt Value Calculated: ₹{total_exempt_amount:,}")\r
print(f"Audit Processing Time:         {audit_time:.4f} seconds (Blazing fast!)")\r
`,g=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
                PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_006: SETS\r
                    TOPIC 17: PERFORMANCE BENEFITS OF SETS\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. TIME COMPLEXITY: SETS VS LISTS\r
--------------------------------------------------------------------------------\r
  Operation                     | List (Dynamic Array)  | Set (Hash Table)\r
  ------------------------------+-----------------------+-----------------------\r
  Membership Testing (\`in\`)     | O(N) Linear Time      | O(1) Constant Time\r
  Add / Append Element          | O(1) Amortized        | O(1) Amortized\r
  Delete / Remove Element       | O(N) Shift Pointers   | O(1) Mark Dummy\r
  Union (\`A | B\`)               | O(len(A) * len(B)) *  | O(len(A) + len(B))\r
  Intersection (\`A & B\`)        | O(len(A) * len(B)) *  | O(min(len(A), len(B)))\r
  Difference (\`A - B\`)          | O(len(A) * len(B)) *  | O(len(A))\r
\r
  * When simulated via nested loops/list comprehensions.\r
\r
--------------------------------------------------------------------------------\r
2. WHY SETS ARE O(1) UNDER THE HOOD\r
--------------------------------------------------------------------------------\r
  • Direct Hash Addressability:\r
    \`bucket_index = hash(element) & (table_size - 1)\`\r
  • When Python searches for \`item in my_set\`:\r
    1. Computes \`hash(item)\`.\r
    2. Jumps directly to \`bucket_index\` in RAM (O(1)).\r
    3. If full, checks equality (\`==\`).\r
    4. Completes in nanoseconds, whether the set has 10 items or 10,000,000 items!\r
\r
--------------------------------------------------------------------------------\r
3. THE SPACE-TIME TRADE-OFF\r
--------------------------------------------------------------------------------\r
  • Sets achieve O(1) lookup speed by trading memory:\r
    - Lists store compact contiguous arrays (~8 bytes/item).\r
    - Sets maintain sparse hash tables (~32-64 bytes/item).\r
  • Rule of Thumb: If you query a collection repeatedly with \`in\`, ALWAYS convert\r
    it to a set!\r
\r
================================================================================\r
        END OF STUDY NOTE • TOPIC 17: PERFORMANCE BENEFITS OF SETS\r
================================================================================\r
`,y=[{question:"What is the average time complexity of checking membership ('x in s') in a Python set vs a Python list?",shortAnswer:"Set membership is O(1) constant time; List membership is O(N) linear time.",explanation:"Sets compute the hash of the query item and jump directly to the target bucket in O(1) time. Lists must scan items sequentially from start to end, taking O(N) operations in the worst case.",hint:"Set is O(1); List is O(N).",level:"basic",codeExample:`# Set: O(1) constant time
# List: O(N) linear scan time`},{question:"Why does the lookup time in a set remain virtually flat as the number of elements grows from 1,000 to 1,000,000?",shortAnswer:"Because computing hash(x) and jumping to the bucket index takes the exact same number of CPU cycles regardless of set size.",explanation:"In an open-addressing hash table with low collision rates, finding a bucket requires only a hash computation and array index calculation, independent of total element count N.",hint:"Hash calculation takes constant time regardless of collection size.",level:"moderate",codeExample:`# 1,000 items -> ~50 nanoseconds
# 1,000,000 items -> ~50 nanoseconds (Flat O(1) curve!)`},{question:"What is the worst-case time complexity of set lookup and when does it occur?",shortAnswer:"O(N) worst-case time, occurring when all elements produce severe hash collisions.",explanation:"If a malicious attacker crafts input where hash(x1) == hash(x2) == ... == hash(xN), Python is forced to probe linearly down the table, degrading to O(N). Python uses SipHash to protect against hash collision attacks.",hint:"Catastrophic hash collisions cause O(N) worst-case degradation.",level:"expert",codeExample:"# Worst case O(N) on pathological hash collisions (rare/attack scenarios)"},{question:"What is the time complexity of set intersection: set_a & set_b?",shortAnswer:"O(min(len(A), len(B))) on average.",explanation:"Python optimizes set intersection by always iterating over the smaller set and performing O(1) lookups in the larger set.",hint:"Python loops over the smaller set.",level:"moderate",codeExample:"# Time: O(min(len(A), len(B)))"},{question:"Why is set_a & set_b dramatically faster than [x for x in list_a if x in list_b]?",shortAnswer:"The nested list comprehension runs in O(len(A) * len(B)) quadratic time with Python bytecode overhead; set intersection runs in C at O(min(len(A), len(B))) time.",explanation:"For 50,000 items each, nested lists perform 2.5 billion iterations taking minutes; set algebra executes in C in under 5 milliseconds (10,000x faster).",hint:"Set intersection avoids O(A*B) quadratic scanning and runs inside C code.",level:"expert",codeExample:`# Nested List: O(A * B) -> Slow!
# Set Algebra: O(min(A, B)) -> Instant!`},{question:"What is the space-time trade-off associated with Python sets?",shortAnswer:"Sets trade higher memory usage (~4-8x more RAM than lists) to achieve O(1) constant time lookup speed.",explanation:"The sparse hash table structure, collision handling metadata, and load factor threshold (~2/3) require pre-allocating extra empty buckets in RAM.",hint:"More RAM in exchange for O(1) speed.",level:"basic",codeExample:`# Lists: Compact contiguous memory (~8 bytes per pointer)
# Sets:  Sparse hash table (~32-64 bytes per entry)`},{question:"What is the time complexity of deleting an element from a set via set.remove() or set.discard()?",shortAnswer:"O(1) average time complexity.",explanation:"Python locates the hash bucket in O(1) and marks the slot as a 'dummy' placeholder without shifting any other array elements.",hint:"Set deletion marks dummy slots in O(1) without shifting.",level:"moderate",codeExample:`s = {1, 2, 3}
s.discard(2)  # O(1) time`},{question:"Why is list.remove(x) an O(N) operation while set.remove(x) is O(1)?",shortAnswer:"list.remove() must linearly scan for x and then shift all subsequent array pointers left to close the gap; set.remove() directly modifies the bucket.",explanation:"Array memory compaction in lists forces memory copying proportional to the number of remaining elements.",hint:"List removal requires shifting subsequent array pointers.",level:"expert",codeExample:`# list.remove(x): Scan O(N) + Shift O(N) = O(N)
# set.remove(x):  Hash O(1) + Mark Dummy O(1) = O(1)`},{question:"What is the time complexity of set union: set_a | set_b?",shortAnswer:"O(len(A) + len(B)).",explanation:"Python copies set A into a new hash table and inserts all elements from set B in O(1) time per item.",hint:"Proportional to the sum of lengths of both sets.",level:"moderate",codeExample:"# Time: O(len(A) + len(B))"},{question:"What is the time complexity of set difference: set_a - set_b?",shortAnswer:"O(len(A)).",explanation:"Python iterates through set A and checks membership in set B in O(1) time per element.",hint:"Proportional to the length of the left set A.",level:"moderate",codeExample:"# Time: O(len(A))"},{question:"How does set.isdisjoint() optimize performance compared to checking if len(A & B) == 0?",shortAnswer:"isdisjoint() short-circuits on the very first common element without allocating an intermediate intersection set in memory.",explanation:"A & B allocates an entirely new set in RAM; isdisjoint() loops over the smaller set and returns False immediately on finding 1 match.",hint:"isdisjoint short-circuits and allocates zero memory.",level:"expert",codeExample:`# SLOW: len(A & B) == 0  (Allocates memory)
# FAST: A.isdisjoint(B)  (Short-circuits O(1))`},{question:"If a function performs 10,000 membership checks against an unchanging list of 5,000 items, how should you optimize it?",shortAnswer:"Convert the list to a set once before the loop: lookup_set = set(my_list).",explanation:"Converting costs O(N) once, and reduces 10,000 * O(N) checks (50,000,000 operations) to 10,000 * O(1) checks (10,000 operations), achieving a 5,000x speedup.",hint:"Pre-convert list to set outside the query loop.",level:"basic",codeExample:`raw_list = list(range(5000))
# Convert once:
lookup_set = set(raw_list)
# Now all 10,000 queries run in O(1) nanoseconds`},{question:"What is the time complexity of adding N items to an empty set using a loop?",shortAnswer:"O(N) total time (amortized O(1) per insertion).",explanation:"While individual insertions may occasionally trigger table resizing (doubling the table), the amortized cost per item remains O(1).",hint:"Amortized O(1) per add yields O(N) total.",level:"moderate",codeExample:"# Adding N items takes O(N) amortized total time"},{question:"Why are set operations implemented in C inside CPython faster than equivalent Python bytecode loops?",shortAnswer:"CPython executes set methods directly in compiled C code, bypassing Python bytecode dispatch, opcode interpretation, and dynamic type checks.",explanation:"C loops run at native processor speed with zero VM interpreter overhead.",hint:"C-level routines bypass bytecode interpreter overhead.",level:"expert",codeExample:"# set.intersection() executes in compiled C"},{question:"What is the time complexity of copying a set using set.copy() or set(s)?",shortAnswer:"O(N) linear time where N is the number of elements in the set.",explanation:"Python allocates a new hash table and copies references to all N elements.",hint:"O(N) to copy all element references.",level:"basic",codeExample:"# Time: O(len(s))"},{question:"What happens to the performance of a set when its size shrinks drastically after many pop() or remove() calls?",shortAnswer:"CPython maintains the table size until explicit rehashing occurs; the table does not shrink on every single delete to prevent thrashing.",explanation:"CPython resizes down only when significant deletions lower the active entry count below 1/4 capacity.",hint:"CPython avoids shrinking on every deletion to prevent memory thrashing.",level:"expert",codeExample:"# Deletions leave dummy markers; table resizes down periodically"},{question:"How does set lookup performance assist web application firewalls (WAF) in blocking malicious IPs?",shortAnswer:"By checking incoming IP addresses against a blacklist set (if ip in BLACKLIST_SET) in ~50 nanoseconds per request.",explanation:"O(1) lookups allow firewalls to inspect 100,000+ incoming requests per second without adding latency.",hint:"O(1) lookup allows inspecting 100k req/sec with zero latency penalty.",level:"basic",codeExample:`BANNED_IPS = {"192.168.1.1", "10.0.0.5"}
if client_ip in BANNED_IPS:  # O(1) Instant Drop!
    drop_connection()`},{question:"What is the time complexity of checking if a set is empty using bool(s) or len(s) == 0?",shortAnswer:"O(1) constant time.",explanation:"CPython stores the active element count as an integer attribute (used_count) on the PySetObject struct, accessible in O(1) time.",hint:"Element count is stored directly as a struct field.",level:"basic",codeExample:"# bool(s) reads PySetObject->used in O(1)"},{question:"Why does searching for a string in a set of 1,000,000 strings take roughly the same time as searching in a set of 10 strings?",shortAnswer:"Because hash computation time depends on the length of the string, not the number of strings in the set.",explanation:"Once hash(string) is calculated, the bucket jump is immediate regardless of set size.",hint:"Hash time depends on string length, not set size.",level:"expert",codeExample:"# Query time is independent of set size N"},{question:"What is the time complexity of min(s) and max(s) on a set?",shortAnswer:"O(N) linear time.",explanation:"Because sets are unordered hash tables, finding the minimum or maximum element requires scanning every single element in the set.",hint:"Must scan all elements to find min or max.",level:"moderate",codeExample:"# min(s) and max(s) take O(N) time"},{question:"What is the time complexity of set comprehension {f(x) for x in data}?",shortAnswer:"O(N) where N is the length of data (assuming f(x) and hash(x) are O(1)).",explanation:"It loops through N items, transforms each, and performs an O(1) set insertion.",hint:"O(N) overall time.",level:"basic",codeExample:"# Time: O(N)"},{question:"How do sets optimize relational database joins when implemented in Python ORMs?",shortAnswer:"By loading foreign keys into sets, the ORM can perform in-memory hash joins in O(N + M) time instead of O(N * M) nested loop joins.",explanation:"Converting the join column of one table into a set allows matching rows in O(1) time per record.",hint:"Enables O(N + M) hash joins instead of O(N * M) nested loops.",level:"expert",codeExample:"# Hash Join: O(N + M) vs Nested Loop: O(N * M)"},{question:"Can set operations be parallelized across multiple CPU threads in Python?",shortAnswer:"Pure Python set operations are serialized by the Global Interpreter Lock (GIL); multi-processing or C extensions (like NumPy) are required for CPU multi-threading.",explanation:"While read-only frozenset queries can be shared across threads, mutating sets requires thread coordination.",hint:"GIL serializes Python bytecode; use multiprocessing for true parallel execution.",level:"expert",codeExample:"# Read-only frozenset is thread-safe; use multiprocessing for parallel scaling"},{question:"What is the time complexity of converting a list of N elements into a set: set(my_list)?",shortAnswer:"O(N) linear time.",explanation:"Python iterates through the N elements and inserts each into the new hash table in O(1) amortized time.",hint:"O(N) linear time to build the set.",level:"basic",codeExample:"s = set(range(1000000))  # O(N) time"},{question:"How does set deduplication optimize search engine web crawlers?",shortAnswer:"By storing visited URLs in a set, the crawler checks if a link has been visited before enqueueing it in O(1) time.",explanation:"This prevents the crawler from getting stuck in infinite crawl loops or processing duplicate web pages.",hint:"Prevents duplicate web crawls with O(1) URL checks.",level:"basic",codeExample:`visited = set()
def crawl(url):
    if url in visited: return
    visited.add(url)`},{question:"What is the memory size overhead of a set compared to a list in 64-bit Python for 100,000 integers?",shortAnswer:"List uses ~800 KB; Set uses ~8.3 MB (~10x larger).",explanation:"The open-addressing hash table maintains empty buckets, hash codes, and pointer structures that multiply memory footprint.",hint:"Sets use ~10x more memory than lists for large integer collections.",level:"expert",codeExample:"# 100K ints: List ~800 KB vs Set ~8.3 MB"},{question:"When should you NOT use a set despite its O(1) lookup speed?",shortAnswer:"When memory is strictly constrained, when you only perform 1 or 2 total queries, or when element sequence order must be preserved.",explanation:"For a single query on small data (N < 20), converting to a set has more overhead than a simple linear scan.",hint:"Avoid sets for tiny collections (N < 20) with single queries or tight memory limits.",level:"moderate",codeExample:"# Small list with 1 lookup: 'x in [1, 2, 3]' is faster than 'x in set([1, 2, 3])'"},{question:"What is the time complexity of checking if a set is a subset of another set: set_a <= set_b?",shortAnswer:"O(len(A)) with short-circuiting.",explanation:"Python checks each element of set A in set B in O(1) time and returns False as soon as 1 element is missing.",hint:"O(len(A)) with early exit.",level:"moderate",codeExample:"# Time: O(len(A))"},{question:"How do sets enable high-speed financial tax exemption audits in West Bengal?",shortAnswer:"By loading 10,000 exempt PAN IDs into a set, auditing 250,000 transactions completes in ~0.03 seconds via 250,000 O(1) hash checks.",explanation:"Using a list would take 250,000 * 10,000 = 2.5 billion comparisons (~15 seconds). Sets make high-volume audits instantaneous.",hint:"Replaces 2.5 billion list checks with 250,000 O(1) hash lookups.",level:"basic",codeExample:"# Audit: [txn for txn in txns if txn['pan'] in exempt_pan_set]"},{question:"What is the master takeaway for software performance regarding Python sets?",shortAnswer:"Sets are the ultimate algorithmic weapon for transforming O(N) and O(N^2) search and comparison bottlenecks into blazingly fast O(1) and O(N) operations.",explanation:"Whenever your profiling tools detect slow membership scans or nested loops, introducing a set will deliver orders-of-magnitude speedups.",hint:"Sets turn O(N^2) bottlenecks into O(N) / O(1) speed.",level:"basic",codeExample:`# Performance Golden Rule:
# Frequent 'in' queries? -> USE A SET!`}];function S(){const r=o.useRef([]),[a,l]=o.useState("curves");o.useEffect(()=>{const s=new IntersectionObserver(n=>{n.forEach(c=>{c.isIntersecting&&c.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return r.current.forEach(n=>{n&&s.observe(n)}),()=>s.disconnect()},[]);const t=s=>{s&&!r.current.includes(s)&&r.current.push(s)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-emerald-500/30 selection:text-emerald-200",children:[e.jsx("style",{children:`
        .section-hidden {
          transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .section-visible {
          transform: translateY(0);
        }
      `}),e.jsxs("header",{ref:t,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-emerald-950/80 text-emerald-300 px-3 py-1 rounded-full border border-emerald-800/80 shadow-sm shadow-emerald-950/50",children:"Segment 2 • Module 002_006"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-sky-950/80 text-sky-300 px-3 py-1 rounded-full border border-sky-800/80 shadow-sm shadow-sky-950/50",children:"Topic 17"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Algorithmic Complexity & Optimization"})]}),e.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:"Performance Benefits of Sets"}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Unlocking extreme computational performance in Python: mastering ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"O(1)"})," direct bucket hashing, comparing C-level set algebra against bytecode loops, and managing space-time economics."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ O(1) Constant Time Lookups"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🚀 3,000x Speedup over Lists"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📐 Asymptotic Scaling Curves"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚖️ Space-Time Economic Balance"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🔬"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Mathematics of O(1) Hash Tables"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["When a Python program checks ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"x in my_list"}),", the CPU is forced to inspect every pointer from index ",e.jsx("code",{className:"font-mono text-white",children:"0"})," up to ",e.jsx("code",{className:"font-mono text-white",children:"N-1"}),". But when checking ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"x in my_set"}),", Python calculates:"]}),e.jsx("div",{className:"p-5 rounded-xl bg-slate-950 border border-emerald-800/80 shadow-2xl not-prose my-6 font-mono text-sm sm:text-base text-emerald-300",children:"bucket_index = hash(x) & (table_size - 1)"}),e.jsxs("p",{children:["This bitwise masking operation maps any hash code to a direct memory offset in ",e.jsx("strong",{className:"text-emerald-400",children:"nanoseconds"}),". Whether the set contains 10 elements or 10,000,000 elements, computing the bucket index takes the exact same number of CPU cycles."]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📈"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Asymptotic Scaling & Hash Indexing"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>l("curves"),className:d("px-3 py-1.5 rounded-lg transition-all",a==="curves"?"bg-emerald-900/50 text-emerald-300 border border-emerald-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Time Scaling Curves"}),e.jsx("button",{onClick:()=>l("hashing"),className:d("px-3 py-1.5 rounded-lg transition-all",a==="hashing"?"bg-sky-900/50 text-sky-300 border border-sky-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Direct Bucket Addressing"})]})]}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:a==="curves"?e.jsxs("svg",{viewBox:"0 0 850 320",className:"w-full h-auto min-w-[650px] font-sans",children:[e.jsx("line",{x1:"80",y1:"260",x2:"800",y2:"260",stroke:"#475569",strokeWidth:"2"}),e.jsx("line",{x1:"80",y1:"260",x2:"80",y2:"40",stroke:"#475569",strokeWidth:"2"}),e.jsx("text",{x:"800",y:"285",fill:"#94a3b8",fontSize:"12",textAnchor:"end",children:"Data Size (N Elements) ➔"}),e.jsx("text",{x:"30",y:"45",fill:"#94a3b8",fontSize:"12",transform:"rotate(-90 30,45)",children:"Execution Time (s) ➔"}),e.jsx("path",{d:"M 80 260 Q 200 240 280 60",fill:"none",stroke:"#ef4444",strokeWidth:"3"}),e.jsx("text",{x:"290",y:"65",fill:"#ef4444",fontSize:"12",fontWeight:"bold",children:"O(N²) Nested Loop (Exponential Trap!)"}),e.jsx("line",{x1:"80",y1:"260",x2:"700",y2:"100",stroke:"#0ea5e9",strokeWidth:"3"}),e.jsx("text",{x:"710",y:"105",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",children:"O(N) List Linear Scan"}),e.jsx("line",{x1:"80",y1:"250",x2:"780",y2:"250",stroke:"#10b981",strokeWidth:"3.5"}),e.jsx("text",{x:"650",y:"240",fill:"#34d399",fontSize:"13",fontWeight:"bold",children:"O(1) Set Hash Table (Flatline Speed!)"}),e.jsx("rect",{x:"300",y:"160",width:"380",height:"50",rx:"6",fill:"#0f172a",stroke:"#10b981"}),e.jsx("text",{x:"315",y:"182",fill:"#a7f3d0",fontSize:"11",fontWeight:"bold",children:"At N = 1,000,000 Elements:"}),e.jsx("text",{x:"315",y:"200",fill:"#cbd5e1",fontSize:"11",children:"List: ~15.2 ms • Set: ~0.00005 ms (3,000x faster!)"})]}):e.jsxs("svg",{viewBox:"0 0 850 320",className:"w-full h-auto min-w-[650px] font-sans",children:[e.jsx("text",{x:"30",y:"35",fill:"#f8fafc",fontSize:"15",fontWeight:"bold",children:"Under the Hood: How Set Lookup Bypasses Linear Scanning"}),e.jsx("rect",{x:"30",y:"80",width:"180",height:"180",rx:"8",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"1.5"}),e.jsx("text",{x:"45",y:"110",fill:"#38bdf8",fontSize:"13",fontWeight:"bold",children:"Query Item"}),e.jsx("text",{x:"45",y:"145",fill:"#cbd5e1",fontSize:"12",children:'x = "Susmita"'}),e.jsx("text",{x:"45",y:"180",fill:"#94a3b8",fontSize:"11",children:"1. hash(x) ➔"}),e.jsx("text",{x:"45",y:"205",fill:"#38bdf8",fontSize:"11",fontWeight:"mono",children:"0x4F8A39E1"}),e.jsx("path",{d:"M 215 170 L 275 170",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("rect",{x:"280",y:"80",width:"220",height:"180",rx:"8",fill:"#1e293b",stroke:"#f59e0b",strokeWidth:"1.5"}),e.jsx("text",{x:"295",y:"110",fill:"#fbbf24",fontSize:"13",fontWeight:"bold",children:"Bitwise Masking"}),e.jsx("text",{x:"295",y:"145",fill:"#cbd5e1",fontSize:"11",children:"hash & (table_size - 1)"}),e.jsx("text",{x:"295",y:"180",fill:"#fde68a",fontSize:"13",fontWeight:"mono",children:"bucket = 3"}),e.jsx("text",{x:"295",y:"210",fill:"#94a3b8",fontSize:"11",children:"Direct RAM jump in O(1)!"}),e.jsx("path",{d:"M 505 170 L 565 170",stroke:"#10b981",strokeWidth:"2"}),e.jsx("rect",{x:"570",y:"80",width:"240",height:"180",rx:"8",fill:"#064e3b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"585",y:"110",fill:"#34d399",fontSize:"13",fontWeight:"bold",children:"PySetEntry [Bucket 3]"}),e.jsx("text",{x:"585",y:"145",fill:"#a7f3d0",fontSize:"11",children:'• key: "Susmita"'}),e.jsx("text",{x:"585",y:"170",fill:"#a7f3d0",fontSize:"11",children:"• hash: 0x4F8A39E1"}),e.jsx("text",{x:"585",y:"200",fill:"#ffffff",fontSize:"12",fontWeight:"bold",children:"✓ MATCH: Returns True!"}),e.jsx("text",{x:"585",y:"230",fill:"#a7f3d0",fontSize:"10",children:"Zero linear scanning needed!"})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 space-y-8",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Python Performance Labs"})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab A: 500,000 Element Membership Benchmark (Worst-Case Search)"}),e.jsx(i,{fileModule:p,title:"hash_table_mechanics_benchmark.py",highlightLines:[6,14,21,28]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab B: Scaling Curves across 1,000 to 500,000 Elements"}),e.jsx(i,{fileModule:f,title:"set_vs_list_scaling_curves.py",highlightLines:[6,17,23,29]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab C: Set Intersection Algebra vs Nested List Quadratic Traps"}),e.jsx(i,{fileModule:u,title:"algebra_vs_loop_performance.py",highlightLines:[6,14,22,29]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab D: Real-World High-Throughput Tax Exemption Audit in ₹"}),e.jsx(i,{fileModule:b,title:"million_records_tax_filter.py",highlightLines:[6,17,24,31]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Industry Applications in West Bengal"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"💰"})," 1. High-Volume Tax Exemption Auditing"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Tax departments in ",e.jsx("strong",{children:"Barrackpore"})," cross-reference 250,000 financial transactions against 10,000 exempt NGO PAN accounts in ",e.jsx("strong",{className:"text-emerald-300",children:"0.03 seconds"})," using O(1) set lookups, reconciling ledger amounts in Indian Rupees (",e.jsx("strong",{className:"text-emerald-300",children:"₹250M+ audit volume"}),")."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🛡️"})," 2. DDoS Firewall IP Blacklist Filters"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Cloud gateways in ",e.jsx("strong",{children:"Kolkata"})," filter incoming HTTP requests against 50,000 malicious IPs in ~50 nanoseconds per connection, handling 100,000 req/sec without latency spikes."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"📈"})," 3. Stock Exchange Ticker Validation"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Trading engines in ",e.jsx("strong",{children:"Ichapur"})," validate incoming equity orders against active NSE/BSE security symbols stored in an in-memory set before executing order matching."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🧬"})," 4. Genomic K-mer Matching"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Bioinformatics pipelines in ",e.jsx("strong",{children:"Jadavpur"})," find common DNA sequence fragments across chromosomes in milliseconds using set intersection (",e.jsx("code",{className:"font-mono text-amber-400",children:"kmer_set_a & kmer_set_b"}),")."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Pitfalls & Performance Anti-Patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 1: Converting to Set Inside Loops"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Writing ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"for x in data: if x in set(lookup_list)"})," reconstructs the set on ",e.jsx("strong",{className:"text-white",children:"every single iteration"}),"! Always convert the list to a set ",e.jsx("strong",{className:"text-emerald-400",children:"once"})," outside the loop."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 2: Converting for a Single Lookup"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["If you only perform a single ",e.jsx("code",{className:"font-mono",children:"in"})," check on a tiny list (N < 20), constructing a set takes more CPU cycles than a direct linear search."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 3: Ignoring Memory Overhead"}),e.jsx("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:"Sets consume ~8-10x more RAM than lists. On low-memory IoT devices or multi-gigabyte datasets, evaluate RAM constraints carefully!"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 4: Nested List Comprehensions"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Writing ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"[x for x in list_a if x in list_b]"})," is quadratic O(N²). Use ",e.jsx("code",{className:"font-mono text-emerald-400",children:"set_a & set_b"})," for instant C-level speed!"]})]})]})]}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(m,{content:g,title:"Topic 17: Performance Benefits of Sets Study Guide",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Study Note",downloadFileName:"topic17_performance_benefits_note.txt"})}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(h,{title:"Topic 17 • Performance Benefits of Sets: Master Viva & Review Questions",questions:y})}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(x,{note:"Teacher's Optimization Wisdom: When dealing with large datasets in production backend systems, algorithms dictate speed. A single nested list loop will freeze your server for minutes, while a set intersection will finish in milliseconds. Remember: hash lookups are O(1), and converting collections to sets before membership loops is the easiest 3,000x speedup you will ever achieve!"})})]})]})}export{S as default};
