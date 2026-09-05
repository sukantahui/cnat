import{b as d,j as e,bg as u}from"./vendor-react-core-Doz9nIC6.js";import{P as p}from"./PythonFileLoader-hCi5osN-.js";import{P as _}from"./PlainTextPrint-C08xhKA4.js";import{F as N}from"./FAQTemplate-BHhlgA96.js";import{T as v}from"./TeacherSukantaHui-DerPxfxp.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const j=`"""\r
# Module: 004_002_performance-optimization\r
# Topic 6: collections module: deque, Counter, defaultdict, OrderedDict, namedtuple\r
# File: deque_fifo_lifo_ring_buffer.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Benchmarking O(N) list.pop(0) vs O(1) deque.popleft(),\r
#              and building high-throughput bounded ring buffers with maxlen.\r
"""\r
\r
import time\r
from collections import deque\r
\r
# Generate 35,000 student admission token requests\r
TOKEN_REQUESTS = [\r
    {"token_id": f"TKN_{i:05d}", "student": ["Mamata", "Mahima", "Abhronila", "Susmita", "Debangshu"][i % 5], "campus": ["Barrackpore", "Kolkata", "Ichapur", "Jadavpur"][i % 4]}\r
    for i in range(35000)\r
]\r
\r
def benchmark_list_fifo_queue(requests):\r
    """Approach 1: Using standard Python list as a FIFO queue (pop(0))."""\r
    start = time.perf_counter()\r
    queue = list(requests)\r
    processed = []\r
    \r
    # DANGER: pop(0) shifts all remaining elements in memory on every call -> O(N^2) total!\r
    while queue:\r
        item = queue.pop(0) # O(N) memory shift!\r
        processed.append(item["token_id"])\r
        \r
    elapsed = time.perf_counter() - start\r
    return len(processed), elapsed\r
\r
def benchmark_deque_fifo_queue(requests):\r
    """Approach 2: Using collections.deque as a FIFO queue (popleft())."""\r
    start = time.perf_counter()\r
    queue = deque(requests)\r
    processed = []\r
    \r
    # OPTIMIZED: popleft() unlinks the head node in constant O(1) time!\r
    while queue:\r
        item = queue.popleft() # Instant O(1)\r
        processed.append(item["token_id"])\r
        \r
    elapsed = time.perf_counter() - start\r
    return len(processed), elapsed\r
\r
def demonstrate_bounded_ring_buffer():\r
    """Approach 3: Bounded Ring Buffer with deque(maxlen=K) for live system logs."""\r
    print("\\n[RING BUFFER] Demonstrating Bounded Sliding-Window Log Stream:")\r
    \r
    # Capacity: Keep only the 5 most recent campus audit events\r
    audit_stream = deque(maxlen=5)\r
    \r
    events = [\r
        "10:00 - Mamata registered at Barrackpore",\r
        "10:01 - Mahima verified documents at Kolkata",\r
        "10:02 - Abhronila enrolled in Python Pro at Ichapur",\r
        "10:03 - Susmita paid tuition fee at Jadavpur",\r
        "10:04 - Debangshu generated certificate at Barrackpore",\r
        "10:05 - System backup completed successfully",\r
        "10:06 - New semester roster initialized"\r
    ]\r
    \r
    for event in events:\r
        audit_stream.append(event)\r
        print(f"   -> Appended: {event}")\r
        print(f"      Current Buffer (Size={len(audit_stream)}): {list(audit_stream)}")\r
\r
def main():\r
    print("=" * 75)\r
    print(f"[BENCHMARK] FIFO Queue Performance: List vs Deque (N = {len(TOKEN_REQUESTS):,})")\r
    print("=" * 75)\r
\r
    # Use smaller slice for list pop(0) to avoid long blocking\r
    test_slice = TOKEN_REQUESTS[:20000]\r
    print(f"Testing FIFO Queue Operations on N = {len(test_slice):,} tokens...\\n")\r
\r
    print("[...] Running List FIFO Queue (list.pop(0) - O(N) shifts)...")\r
    _, t_list = benchmark_list_fifo_queue(test_slice)\r
    print(f"   [-] Standard List Queue Time: {t_list:.4f} seconds (1.00x Baseline)")\r
\r
    print("\\n[...] Running Deque FIFO Queue (deque.popleft() - O(1) unlinks)...")\r
    _, t_deque = benchmark_deque_fifo_queue(test_slice)\r
    speedup = t_list / t_deque if t_deque > 0 else 1.0\r
    print(f"   [+] Collections Deque Time  : {t_deque:.4f} seconds")\r
    print(f"   [>] Speedup Factor          : {speedup:.1f}x FASTER!")\r
\r
    demonstrate_bounded_ring_buffer()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] NEVER use 'list.pop(0)' for queues! Always use 'deque.popleft()'.")\r
    print("           Use 'deque(maxlen=K)' for fixed-size sliding window ring buffers.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,k=`"""\r
# Module: 004_002_performance-optimization\r
# Topic 6: collections module: deque, Counter, defaultdict, OrderedDict, namedtuple\r
# File: counter_frequency_and_multisets.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: High-speed frequency analysis, top-K selection with most_common(),\r
#              and multiset arithmetic algebra (+, -, &, |).\r
"""\r
\r
import time\r
import random\r
from collections import Counter\r
\r
# Generate 50,000 course enrollment votes / survey submissions\r
COURSES = ["PYTHON_PRO", "DATA_AI", "WEB_DEV", "CLOUD_DEVOPS", "CYBER_SECURITY", "DBMS_SQL"]\r
CAMPUSES = ["Barrackpore", "Kolkata", "Ichapur", "Jadavpur"]\r
STUDENTS = ["Mamata", "Mahima", "Abhronila", "Susmita", "Debangshu"]\r
\r
ENROLLMENTS = [\r
    {\r
        "student": random.choice(STUDENTS),\r
        "course": random.choice(COURSES),\r
        "campus": random.choice(CAMPUSES),\r
        "rating": random.randint(1, 5)\r
    }\r
    for _ in range(50000)\r
]\r
\r
def benchmark_manual_dict_counting(data):\r
    """Approach 1: Counting frequencies using standard manual dictionary branching."""\r
    start = time.perf_counter()\r
    counts = {}\r
    for item in data:\r
        key = item["course"]\r
        if key not in counts:\r
            counts[key] = 0\r
        counts[key] += 1\r
    # Sorting to get top 3\r
    top_3 = sorted(counts.items(), key=lambda x: x[1], reverse=True)[:3]\r
    elapsed = time.perf_counter() - start\r
    return top_3, elapsed\r
\r
def benchmark_counter_counting(data):\r
    """Approach 2: Counting frequencies and top-K using collections.Counter."""\r
    start = time.perf_counter()\r
    # Counter constructor implemented in optimized C\r
    counter = Counter(item["course"] for item in data)\r
    # most_common uses heapq.nlargest running in O(N log K) time\r
    top_3 = counter.most_common(3)\r
    elapsed = time.perf_counter() - start\r
    return top_3, elapsed\r
\r
def demonstrate_multiset_algebra():\r
    """Approach 3: Multiset / Bag Arithmetic with Counter (+, -, &, |)."""\r
    print("\\n[MULTISET ALGEBRA] Demonstrating Bag Arithmetic on Student Inventories:")\r
    \r
    # Campus lab kit supplies\r
    barrackpore_lab = Counter(laptops=25, projectors=4, routers=12, mice=40)\r
    kolkata_lab = Counter(laptops=30, projectors=6, routers=8, keyboards=35)\r
    \r
    print(f"   * Barrackpore Inventory : {dict(barrackpore_lab)}")\r
    print(f"   * Kolkata Inventory     : {dict(kolkata_lab)}")\r
    \r
    # 1. Addition (+): Combines quantities\r
    combined = barrackpore_lab + kolkata_lab\r
    print(f"   * [+] Total Combined    : {dict(combined)}")\r
    \r
    # 2. Subtraction (-): Deducts quantities (keeps only positive)\r
    diff = barrackpore_lab - kolkata_lab\r
    print(f"   * [-] Net Surplus in BP : {dict(diff)}")\r
    \r
    # 3. Intersection (&): Minimum common stock\r
    min_common = barrackpore_lab & kolkata_lab\r
    print(f"   * [&] Guaranteed Common : {dict(min_common)}")\r
    \r
    # 4. Union (|): Maximum stock across either lab\r
    max_capacity = barrackpore_lab | kolkata_lab\r
    print(f"   * [|] Max Standby Stock : {dict(max_capacity)}")\r
\r
def main():\r
    print("=" * 75)\r
    print(f"[BENCHMARK] Frequency Analysis: Manual Dict vs Counter (N = {len(ENROLLMENTS):,})")\r
    print("=" * 75)\r
\r
    res_manual, t_manual = benchmark_manual_dict_counting(ENROLLMENTS)\r
    print(f"[1] Manual Dict Counting + Sort   : {t_manual:.4f} sec -> Top 3: {res_manual}")\r
\r
    res_counter, t_counter = benchmark_counter_counting(ENROLLMENTS)\r
    speedup = t_manual / t_counter if t_counter > 0 else 1.0\r
    print(f"[2] collections.Counter.most_common: {t_counter:.4f} sec -> Top 3: {res_counter}")\r
    print(f"[>] Speedup Factor                : {speedup:.2f}x Faster")\r
\r
    demonstrate_multiset_algebra()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Counter eliminates dictionary boilerplate, finds top-K in O(N log K),")\r
    print("           and supports multiset arithmetic operations (+, -, &, |).")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,w=`"""\r
# Module: 004_002_performance-optimization\r
# Topic 6: collections module: deque, Counter, defaultdict, OrderedDict, namedtuple\r
# File: defaultdict_and_ordereddict_mastery.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Multi-level grouping with defaultdict and building an in-memory\r
#              LRU (Least Recently Used) cache with OrderedDict.\r
"""\r
\r
import time\r
from collections import defaultdict, OrderedDict\r
\r
# Generate 40,000 student fee payment transactions\r
PAYMENTS = [\r
    {\r
        "student": ["Mamata", "Mahima", "Abhronila", "Susmita", "Debangshu"][i % 5],\r
        "campus": ["Barrackpore", "Kolkata", "Ichapur", "Jadavpur"][i % 4],\r
        "course": ["PYTHON_PRO", "DATA_AI", "WEB_DEV"][i % 3],\r
        "amount": 2500.0 + (i % 10) * 500\r
    }\r
    for i in range(40000)\r
]\r
\r
def benchmark_standard_dict_grouping(payments):\r
    """Approach 1: Grouping with standard dict and manual key checks."""\r
    start = time.perf_counter()\r
    grouped = {}\r
    for p in payments:\r
        campus = p["campus"]\r
        if campus not in grouped:\r
            grouped[campus] = []\r
        grouped[campus].append(p)\r
    elapsed = time.perf_counter() - start\r
    return grouped, elapsed\r
\r
def benchmark_defaultdict_grouping(payments):\r
    """Approach 2: Grouping with collections.defaultdict(list)."""\r
    start = time.perf_counter()\r
    # C-level default factory avoids manual 'if not in' branching\r
    grouped = defaultdict(list)\r
    for p in payments:\r
        grouped[p["campus"]].append(p)\r
    elapsed = time.perf_counter() - start\r
    return grouped, elapsed\r
\r
class LRUCache:\r
    """Production-grade LRU Cache using collections.OrderedDict."""\r
    def __init__(self, capacity: int):\r
        self.capacity = capacity\r
        self.cache = OrderedDict()\r
\r
    def get(self, key: str):\r
        if key not in self.cache:\r
            return None\r
        # Move accessed item to end (most recently used)\r
        self.cache.move_to_end(key)\r
        return self.cache[key]\r
\r
    def put(self, key: str, value: any):\r
        if key in self.cache:\r
            self.cache.move_to_end(key)\r
        self.cache[key] = value\r
        # Evict least recently used if capacity exceeded\r
        if len(self.cache) > self.capacity:\r
            # popitem(last=False) pops from the front (oldest / LRU)\r
            self.cache.popitem(last=False)\r
\r
def demonstrate_nested_tree_defaultdict():\r
    """Approach 3: Infinite auto-vivifying nested tree with defaultdict."""\r
    print("\\n[NESTED TREE] Demonstrating Multi-Level Institutional Directory:")\r
    \r
    # Recursive lambda factory: creates a defaultdict of itself\r
    Tree = lambda: defaultdict(Tree)\r
    institution = Tree()\r
    \r
    # Auto-vivifying multi-level hierarchy without manual dict checks!\r
    institution["Barrackpore"]["Python"]["BatchA"]["Students"] = ["Mamata", "Debangshu"]\r
    institution["Kolkata"]["DataScience"]["BatchB"]["Students"] = ["Mahima", "Susmita"]\r
    institution["Ichapur"]["WebDev"]["BatchC"]["Students"] = ["Abhronila"]\r
    \r
    print(f"   * Barrackpore Students : {institution['Barrackpore']['Python']['BatchA']['Students']}")\r
    print(f"   * Kolkata Students     : {institution['Kolkata']['DataScience']['BatchB']['Students']}")\r
\r
def demonstrate_lru_cache():\r
    """Approach 4: OrderedDict LRU cache in action."""\r
    print("\\n[LRU CACHE] Demonstrating OrderedDict Eviction (Capacity = 3):")\r
    lru = LRUCache(capacity=3)\r
    \r
    lru.put("STU_101", "Mamata (Barrackpore)")\r
    lru.put("STU_102", "Mahima (Kolkata)")\r
    lru.put("STU_103", "Abhronila (Ichapur)")\r
    print(f"   * Initial Cache Keys   : {list(lru.cache.keys())}")\r
    \r
    # Access STU_101 (making it MRU)\r
    _ = lru.get("STU_101")\r
    print(f"   * Accessed STU_101     : {list(lru.cache.keys())} (STU_101 moved to end)")\r
    \r
    # Insert new student (triggers eviction of STU_102, which is now LRU)\r
    lru.put("STU_104", "Susmita (Jadavpur)")\r
    print(f"   * Added STU_104 (Evict): {list(lru.cache.keys())} (STU_102 evicted!)")\r
\r
def main():\r
    print("=" * 75)\r
    print(f"[BENCHMARK] Grouping Performance: Dict vs defaultdict (N = {len(PAYMENTS):,})")\r
    print("=" * 75)\r
\r
    _, t_dict = benchmark_standard_dict_grouping(PAYMENTS)\r
    print(f"[1] Standard dict with 'if not in': {t_dict:.4f} seconds (1.00x Baseline)")\r
\r
    _, t_def = benchmark_defaultdict_grouping(PAYMENTS)\r
    speedup = t_dict / t_def if t_def > 0 else 1.0\r
    print(f"[2] collections.defaultdict(list) : {t_def:.4f} seconds ({speedup:.2f}x Faster)")\r
\r
    demonstrate_nested_tree_defaultdict()\r
    demonstrate_lru_cache()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Use defaultdict(list/int/set) to eliminate branching overhead.")\r
    print("           Use OrderedDict for O(1) LRU/MRU cache eviction via move_to_end().")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,C=`"""\r
# Module: 004_002_performance-optimization\r
# Topic 6: collections module: deque, Counter, defaultdict, OrderedDict, namedtuple\r
# File: namedtuple_and_chainmap_casestudy.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Memory footprint benchmarking with namedtuple and zero-copy\r
#              hierarchical configuration management with ChainMap.\r
"""\r
\r
import sys\r
import time\r
from collections import namedtuple, ChainMap\r
\r
# 1. Definition of models for 100,000 instances\r
class StandardStudent:\r
    def __init__(self, sid, name, campus, score):\r
        self.sid = sid\r
        self.name = name\r
        self.campus = campus\r
        self.score = score\r
\r
NamedStudent = namedtuple("NamedStudent", ["sid", "name", "campus", "score"])\r
\r
def benchmark_memory_footprint():\r
    """Approach 1: Comparing instance memory footprint between Class, Dict, and namedtuple."""\r
    print("\\n[MEMORY BENCHMARK] Measuring per-instance memory allocation:")\r
    \r
    std_inst = StandardStudent("STU_1", "Mamata", "Barrackpore", 95.0)\r
    named_inst = NamedStudent("STU_1", "Mamata", "Barrackpore", 95.0)\r
    dict_inst = {"sid": "STU_1", "name": "Mamata", "campus": "Barrackpore", "score": 95.0}\r
    \r
    # Calculate shallow size + __dict__ size for standard instance\r
    std_size = sys.getsizeof(std_inst) + sys.getsizeof(std_inst.__dict__)\r
    dict_size = sys.getsizeof(dict_inst)\r
    named_size = sys.getsizeof(named_inst)\r
    \r
    print(f"   * Standard Class Instance  : ~{std_size} bytes (with dynamic __dict__)")\r
    print(f"   * Raw Dictionary Record    : ~{dict_size} bytes")\r
    print(f"   * collections.namedtuple   : ~{named_size} bytes (60%+ memory reduction!)")\r
\r
def demonstrate_chainmap_casestudy():\r
    """Approach 2: Layered institutional settings resolution with ChainMap."""\r
    print("\\n[CHAINMAP CASE STUDY] Institutional Multi-Campus Policy Hierarchy:")\r
    \r
    # Level 1: Global Institution-wide Defaults\r
    global_policy = {\r
        "institution_name": "Coder & Accotax",\r
        "academic_year": "2026-2027",\r
        "grace_period_days": 15,\r
        "lab_passcode": "DEFAULT_LAB_2026",\r
        "max_concurrent_logins": 2\r
    }\r
    \r
    # Level 2: Regional Campus Policy (e.g. Barrackpore overrides)\r
    barrackpore_campus_policy = {\r
        "campus_name": "Barrackpore Main Campus",\r
        "lab_passcode": "BP_SECURE_LAB_99",  # Overrides global passcode\r
        "max_concurrent_logins": 4            # Overrides global limit\r
    }\r
    \r
    # Level 3: Individual Lab Room Overrides (e.g. Advanced AI Lab)\r
    ai_lab_override = {\r
        "room_id": "LAB_AI_402",\r
        "max_concurrent_logins": 8            # Specific to AI lab\r
    }\r
    \r
    # Zero-copy Layered Hierarchy using ChainMap:\r
    # Resolution priority: ai_lab_override > barrackpore_campus_policy > global_policy\r
    active_config = ChainMap(ai_lab_override, barrackpore_campus_policy, global_policy)\r
    \r
    print("   * Effective Configuration Resolution:")\r
    print(f"     - Institution Name      : {active_config['institution_name']} (from Global)")\r
    print(f"     - Campus Name           : {active_config['campus_name']} (from Campus)")\r
    print(f"     - Lab Passcode          : {active_config['lab_passcode']} (from Campus override)")\r
    print(f"     - Max Concurrent Logins : {active_config['max_concurrent_logins']} (from AI Lab override)")\r
    print(f"     - Grace Period Days     : {active_config['grace_period_days']} (from Global)")\r
    \r
    # Demonstrate dynamic scoping with new_child()\r
    student_session = active_config.new_child({"student_id": "STU_MAMATA_01", "max_concurrent_logins": 1})\r
    print(f"\\n   * Scoped Session for Mamata: Logins={student_session['max_concurrent_logins']} (Shadowed!)")\r
    print(f"   * Original AI Lab Setting  : Logins={active_config['max_concurrent_logins']} (Unchanged)")\r
\r
def main():\r
    print("=" * 75)\r
    print("[CASE STUDY] collections.namedtuple & ChainMap Production Case Study")\r
    print("=" * 75)\r
\r
    benchmark_memory_footprint()\r
    demonstrate_chainmap_casestudy()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Use namedtuple for low-memory immutable records.")\r
    print("           Use ChainMap for zero-copy hierarchical config & variable scoping.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,S=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 4: PRO LEVEL • MODULE 004_002: PERFORMANCE OPTIMIZATION\r
                    TOPIC 6: COLLECTIONS MODULE HIGH-SPEED CONTAINERS\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. DEQUE (DOUBLE-ENDED QUEUE) & RING BUFFERS\r
--------------------------------------------------------------------------------\r
  from collections import deque\r
\r
  # High-speed O(1) Queue (FIFO)\r
  queue = deque()\r
  queue.append("Applicant_1")       # O(1) right push\r
  first = queue.popleft()           # O(1) left pop (NEVER use list.pop(0) - O(N)!)\r
\r
  # Fixed-size Ring Buffer (Auto-evicts oldest when full)\r
  recent_logs = deque(maxlen=5)\r
  for i in range(10):\r
      recent_logs.append(f"Event_{i}") # Keeps only last 5 items in memory\r
\r
--------------------------------------------------------------------------------\r
2. COUNTER (FREQUENCY ANALYSIS & MULTISETS)\r
--------------------------------------------------------------------------------\r
  from collections import Counter\r
\r
  votes = ["Mamata", "Mahima", "Mamata", "Abhronila", "Susmita", "Mamata"]\r
  tally = Counter(votes)\r
  top_winner = tally.most_common(1) # [('Mamata', 3)] in O(N log K) heap time\r
\r
  # Multiset Arithmetic\r
  batch1 = Counter(A=5, B=3)\r
  batch2 = Counter(A=2, B=4)\r
  total = batch1 + batch2           # Counter({'A': 7, 'B': 7})\r
  intersection = batch1 & batch2    # Counter({'A': 2, 'B': 3})\r
\r
--------------------------------------------------------------------------------\r
3. DEFAULTDICT & ORDEREDDICT LRU MECHANICS\r
--------------------------------------------------------------------------------\r
  from collections import defaultdict, OrderedDict\r
\r
  # Instant Grouping without if-key checks\r
  campus_students = defaultdict(list)\r
  campus_students["Barrackpore"].append("Mamata")\r
\r
  # LRU Cache Eviction\r
  cache = OrderedDict()\r
  cache["user_1"] = "Data_1"\r
  cache.move_to_end("user_1")       # Marks as recently used\r
  oldest = cache.popitem(last=False)# Evicts least recently used item (O(1))\r
\r
--------------------------------------------------------------------------------\r
4. NAMEDTUPLE & CHAINMAP\r
--------------------------------------------------------------------------------\r
  from collections import namedtuple, ChainMap\r
\r
  # Low-memory immutable record without __dict__ overhead\r
  Student = namedtuple("Student", ["id", "name", "campus", "score"])\r
  s1 = Student("STU_101", "Mamata", "Barrackpore", 98.5)\r
\r
  # Layered hierarchical configuration resolution\r
  env_config = {"timeout": 30}\r
  campus_defaults = {"campus": "Barrackpore", "timeout": 60}\r
  config = ChainMap(env_config, campus_defaults) # Reads 'timeout' as 30!\r
\r
================================================================================\r
       END OF STUDY NOTE • TOPIC 6: COLLECTIONS HIGH-SPEED CONTAINERS\r
================================================================================\r
`,O=[{question:"Why is 'collections.deque' vastly superior to a standard Python list for FIFO queues?",shortAnswer:"'collections.deque' performs appends and pops from both ends in O(1) constant time because it is implemented as a doubly-linked list of fixed-size memory blocks, whereas 'list.pop(0)' or 'list.insert(0)' requires shifting every subsequent element in memory, taking O(N) linear time.",explanation:"Doubly-linked memory block architecture vs contiguous array shifting.",hint:"Think about O(1) constant time end operations vs O(N) array element shifting for list.pop(0).",level:"basic",codeExample:`from collections import deque
q = deque()
q.append('First')
item = q.popleft() # Instant O(1)`},{question:"How does the 'maxlen' parameter in 'deque' enable fixed-size ring buffers?",shortAnswer:"When a deque with 'maxlen=K' is full, appending a new element automatically and silently discards the oldest element from the opposing end in O(1) time without manual size-checking or trimming.",explanation:"Automatic boundary-capped sliding window eviction.",hint:"Passing maxlen=K auto-evicts the oldest item when new items are pushed.",level:"basic",codeExample:`recent_logs = deque(maxlen=3)
for i in range(5): recent_logs.append(i)
# Result: deque([2, 3, 4], maxlen=3)`},{question:"How does 'Counter.most_common(k)' find top items without sorting the entire dataset?",shortAnswer:"'Counter.most_common(k)' utilizes 'heapq.nlargest' under the hood to maintain a min-heap of size K, achieving O(N log K) time complexity rather than the slower O(N log N) required by a full sort.",explanation:"Heap-based top-K selection vs full dataset sorting.",hint:"Uses a min-heap (heapq.nlargest) running in O(N log K) time.",level:"moderate",codeExample:`from collections import Counter
tally = Counter(student_scores)
top_3 = tally.most_common(3) # O(N log 3)`},{question:"What multiset arithmetic operations are supported by Python's 'Counter' class?",shortAnswer:"Counter supports addition ('+'), subtraction ('-' retaining only positive counts), intersection ('&' keeping minimum counts), and union ('|' keeping maximum counts).",explanation:"Multiset / Bag algebraic operations.",hint:"You can combine counters using +, -, &, and | operators.",level:"moderate",codeExample:`c1 = Counter(a=3, b=1)
c2 = Counter(a=1, b=2)
union = c1 | c2 # Counter({'a': 3, 'b': 2})`},{question:"What is the key performance benefit of 'defaultdict' over standard 'dict.setdefault()' inside tight loops?",shortAnswer:"'defaultdict' invokes its C-level default factory function only when a missing key is accessed, avoiding the unnecessary evaluation of default arguments on every iteration and eliminating manual 'if key not in dict' conditional branching.",explanation:"C-level default factory function invocation on KeyError.",hint:"defaultdict invokes the factory in C only on missing keys, avoiding redundant argument evaluations.",level:"basic",codeExample:`from collections import defaultdict
groups = defaultdict(list)
for s in students:
    groups[s.campus].append(s) # No if-check needed`},{question:"How do you create an arbitrarily deep nested tree structure using 'defaultdict'?",shortAnswer:"By defining a recursive lambda factory: 'Tree = lambda: defaultdict(Tree)'.",explanation:"Recursive factory functions for auto-vivifying nested hierarchies.",hint:"Use lambda: defaultdict(Tree) to create infinite auto-vivified nested trees.",level:"complex",codeExample:`tree = lambda: defaultdict(tree)
institution = tree()
institution['Barrackpore']['Python']['Batch1'] = ['Mamata', 'Mahima']`},{question:"Since standard Python 3.7+ dictionaries maintain insertion order, why does 'OrderedDict' still exist?",shortAnswer:"'OrderedDict' provides order-aware specialized methods not available in standard dicts: 'move_to_end(key, last=True/False)' and 'popitem(last=True/False)', which are essential for implementing efficient O(1) LRU/MRU caches.",explanation:"Specialized order-manipulation methods (move_to_end, bidirectional popitem).",hint:"OrderedDict has move_to_end() and popitem(last=False) for LRU caching.",level:"moderate",codeExample:`from collections import OrderedDict
lru = OrderedDict()
lru['a'] = 1
lru.move_to_end('a') # Move to most recently used`},{question:"How does 'namedtuple' compare to a standard Python class in terms of memory overhead?",shortAnswer:"'namedtuple' has the exact same compact memory footprint as a standard Python C tuple (no dynamic '__dict__' or '__weakref__' overhead), consuming ~60-70% less RAM than a standard class while providing clean named field access.",explanation:"C tuple struct subclassing with descriptor accessors.",hint:"namedtuples inherit from C tuples with zero __dict__ overhead.",level:"basic",codeExample:`from collections import namedtuple
Student = namedtuple('Student', ['id', 'name', 'fee'])
s = Student('STU1', 'Mamata', 5000) # Compact C tuple`},{question:"Can you modify an attribute on a 'namedtuple' instance after creation?",shortAnswer:"No, 'namedtuple' instances are strictly immutable; to update a field, you must create a new instance using the '_replace()' helper method: 'new_s = s._replace(score=99)'.",explanation:"Immutability and functional update via _replace().",hint:"namedtuples are immutable; use s._replace(field=val) to produce a modified copy.",level:"basic",codeExample:"updated_student = s._replace(fee=4500)"},{question:"What is 'collections.ChainMap' and how does it optimize searching across multiple dictionaries?",shortAnswer:"'ChainMap' groups multiple dictionaries into a single logical mapping by reference without copying or merging their contents, searching through the mappings sequentially in O(1) setup time and zero extra memory.",explanation:"Zero-copy layered dictionary referencing.",hint:"Combines multiple dicts by reference without creating a combined copied dictionary.",level:"moderate",codeExample:`from collections import ChainMap
app_config = ChainMap(cli_args, env_vars, default_settings)`},{question:"When you update or set a key in a 'ChainMap', which underlying dictionary is modified?",shortAnswer:"All mutations (writes, updates, deletions) are performed exclusively on the FIRST dictionary in the ChainMap ('maps[0]'), leaving the subsequent fallback dictionaries untouched.",explanation:"First-map mutation scoping in ChainMap.",hint:"Mutations only affect the first dictionary (maps[0]) in the chain.",level:"moderate",codeExample:`config = ChainMap(user_overrides, default_config)
config['timeout'] = 10 # Writes to user_overrides only`},{question:"Why should you avoid random index access (e.g. 'deque[5000]') on a large 'collections.deque'?",shortAnswer:"Because a deque is a doubly-linked block list; indexing to the middle requires traversing block pointers from the nearest end in O(N) time, whereas a standard list provides instant O(1) random array indexing.",explanation:"Linked block traversal vs contiguous memory indexing.",hint:"Deques are optimized for ends (O(1)); accessing middle indices takes O(N) time.",level:"moderate",codeExample:`# SLOW: dq[50000] takes O(N) pointer traversals
# FAST: list[50000] takes O(1) direct memory offset`},{question:"What happens when you access a missing key in a 'collections.Counter'?",shortAnswer:"Accessing a missing key in a 'Counter' returns '0' instead of raising a 'KeyError', making it safe for direct frequency increments and threshold checks.",explanation:"Missing key zero-defaulting behavior in Counter.",hint:"Counter returns 0 for missing keys instead of raising a KeyError.",level:"basic",codeExample:`counts = Counter()
print(counts['nonexistent']) # Returns 0 without KeyError`},{question:"How does 'deque.rotate(n)' work and what is its computational complexity?",shortAnswer:"'deque.rotate(n)' shifts all elements n steps to the right (or left if n is negative) in O(K) time where K = |n|, moving block pointers without reallocating memory.",explanation:"Pointer-based cyclic rotation in deque blocks.",hint:"dq.rotate(1) shifts items right by 1, wrapping the last item to the front in O(1).",level:"moderate",codeExample:`d = deque([1, 2, 3, 4])
d.rotate(1) # deque([4, 1, 2, 3])`},{question:"What is the danger of passing a mutable object (like '[]') as a default value to 'namedtuple'?",shortAnswer:"All instances created with the default value will share the exact same mutable list object in memory, leading to unintended shared state bugs.",explanation:"Shared mutable default reference hazard.",hint:"Never use mutable defaults like [] in namedtuple; use None and initialize inside factories.",level:"moderate",codeExample:`# BAD: defaults={'tags': []} # Shared list across instances!
# GOOD: defaults={'tags': None}`},{question:"How does 'Counter.update()' differ from standard 'dict.update()'?",shortAnswer:"'dict.update()' replaces existing key values with the new values, whereas 'Counter.update()' adds and accumulates the counts together.",explanation:"Count accumulation vs key overwrite semantics.",hint:"dict.update overwrites values; Counter.update adds counts together.",level:"basic",codeExample:`c = Counter({'a': 2})
c.update({'a': 3}) # c['a'] becomes 5!`},{question:"How can you convert a 'namedtuple' instance into a regular Python dictionary?",shortAnswer:"By calling the built-in '._asdict()' method: 'student_dict = student_instance._asdict()'.",explanation:"Built-in dictionary serialization method for namedtuples.",hint:"Use instance._asdict()",level:"basic",codeExample:`s = Student('STU1', 'Mamata', 5000)
d = s._asdict() # {'id': 'STU1', 'name': 'Mamata', 'fee': 5000}`},{question:"Why does 'defaultdict' populate a key when checked with 'if d[key]:'?",shortAnswer:"Because simply accessing 'd[key]' triggers '__missing__' and inserts the default value into the dictionary; to check existence without inserting, use 'if key in d:'.",explanation:"Auto-vivification side effect on key lookup.",hint:"Always check 'if key in d:' rather than 'd[key]' to avoid accidental insertion.",level:"basic",codeExample:`# BAD: if d['missing']: ... # Inserts 'missing': []!
# GOOD: if 'missing' in d: ...`},{question:"How does 'ChainMap.new_child()' support scoped nested evaluation (e.g. template rendering, interpreters)?",shortAnswer:"'ChainMap.new_child(override_dict)' creates a new ChainMap with 'override_dict' at the head, representing a local lexical scope that shadows enclosing scopes without mutating outer variables.",explanation:"Lexical scoping and nested execution frame modeling.",hint:"Creates a new child scope that shadows parent scopes without mutating parent maps.",level:"complex",codeExample:`global_scope = ChainMap({'x': 10})
local_scope = global_scope.new_child({'x': 20}) # Shadows x=10`},{question:"What is the ultimate golden rule for selecting containers from the 'collections' module?",shortAnswer:"Use 'deque' for high-throughput FIFO/LIFO queues and bounded ring buffers; 'Counter' for frequencies and multisets; 'defaultdict' for grouping and inverted indexes; 'OrderedDict' for LRU caches; 'namedtuple' for low-memory immutable records; and 'ChainMap' for layered hierarchical settings.",explanation:"The complete enterprise selection matrix for high-speed collections.",hint:"Choose the specialized container that matches your access pattern for maximum speed and minimal memory.",level:"basic",codeExample:"# High-Performance Collections Module Mastery"}];function U(){const h=d.useRef([]),[c,x]=d.useState("dequeMemory"),[n,g]=d.useState("DEQUE"),[r,b]=d.useState(25e3);let s="O(1) Constant",i="Low (Chunked Blocks)",o="High-speed FIFO/LIFO queues & Bounded Ring Buffers",l="15x - 50x vs list.pop(0)";n==="DEQUE"?(s="O(1) Appends & Pops on Both Ends",i="Chunked Doubly-Linked Blocks (~64 items/block)",o="High-throughput FIFO Queues & Sliding-Window Buffers",l="25x+ Faster than list.pop(0)"):n==="COUNTER"?(s="O(1) Updates, O(N log K) most_common()",i="Hash Table + C Min-Heap",o="Frequency counting, Top-K rankings, Multiset algebra",l="2x Faster + Clean algebraic multiset API"):n==="DEFAULTDICT"?(s="O(1) Key lookup and auto-factory creation",i="Hash Table with C-level missing factory",o="Grouping, multi-level nesting & inverted indexes",l="2.2x Faster than manual if-key checks"):n==="ORDEREDDICT"?(s="O(1) Lookup, move_to_end(), and popitem()",i="Doubly-Linked List + Hash Map pointers",o="In-memory LRU / MRU Caches with eviction",l="O(1) Eviction vs O(N) list sorting"):n==="NAMEDTUPLE"?(s="O(1) Tuple offset descriptor access",i="Minimal (~72B per object, NO __dict__)",o="Immutable low-memory domain records",l="65%+ RAM reduction vs standard classes"):n==="CHAINMAP"&&(s="O(K) Layered search (K = number of scopes)",i="Zero-Copy Reference Mapping",o="Hierarchical configuration & lexical scoping",l="Zero memory allocation vs dict merging");const y=`# High-Performance Collections Laboratory
# Selected Container: ${n} | Workload: N = ${r.toLocaleString()} items

${n==="DEQUE"?`from collections import deque

# O(1) Double-Ended Queue + Bounded Ring Buffer
queue = deque(maxlen=1000)
for i in range(${r}):
    queue.append(f"Student_{i}") # O(1) Push
    if len(queue) > 500:
        first_in = queue.popleft() # O(1) Pop (NEVER use list.pop(0) - O(N)!)`:n==="COUNTER"?`from collections import Counter

# O(N log K) Top-K Ranking & Multiset Algebra
scores = ["PYTHON_PRO", "DATA_AI", "WEB_DEV"] * ${Math.floor(r/3)}
tally = Counter(scores)
top_2_courses = tally.most_common(2)  # Heap-accelerated top-K selection

# Multiset Algebra: batch1 + batch2, batch1 & batch2, batch1 - batch2`:n==="DEFAULTDICT"?`from collections import defaultdict

# Multi-Level Grouping & Auto-Vivifying Trees
campus_groups = defaultdict(list)
for i in range(${r}):
    campus = "Barrackpore" if i % 2 == 0 else "Kolkata"
    campus_groups[campus].append(f"STU_{i}")  # No 'if campus not in dict' needed!`:n==="ORDEREDDICT"?`from collections import OrderedDict

# High-Performance O(1) LRU Cache
lru_cache = OrderedDict()
for i in range(10):
    lru_cache[f"KEY_{i}"] = f"Data_{i}"
    lru_cache.move_to_end(f"KEY_{i}")  # Mark as MRU
    if len(lru_cache) > 5:
        lru_cache.popitem(last=False)  # Evict oldest LRU in O(1)`:n==="NAMEDTUPLE"?`from collections import namedtuple

# Low-Memory Immutable C Struct (~72 bytes vs ~340 bytes standard class)
Student = namedtuple("Student", ["id", "name", "campus", "score"])
students = [
    Student(f"STU_{i}", "Mamata", "Barrackpore", 98.0)
    for i in range(${r})
]  # 65%+ RAM saved across ${r.toLocaleString()} records!`:`from collections import ChainMap

# Zero-Copy Hierarchical Policy Resolution
global_policy = {"timeout": 30, "campus": "All", "debug": False}
campus_override = {"campus": "Barrackpore", "timeout": 60}
local_session = {"student": "Mamata", "debug": True}

config = ChainMap(local_session, campus_override, global_policy)
print(config["timeout"])  # 60 (from campus)
print(config["debug"])    # True (from local session)`}`;d.useEffect(()=>{const t=new IntersectionObserver(m=>{m.forEach(f=>{f.isIntersecting&&f.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return h.current.forEach(m=>{m&&t.observe(m)}),()=>t.disconnect()},[]);const a=t=>{t&&!h.current.includes(t)&&h.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
        .section-hidden {
          transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .section-visible {
          transform: translateY(0);
        }
        @keyframes pulseGlowTeal {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(20, 184, 166, 0.4)); }
          50% { filter: drop-shadow(0 0 10px rgba(20, 184, 166, 0.8)); }
        }
        .animate-glow-teal {
          animation: pulseGlowTeal 3s infinite ease-in-out;
        }
      `}),e.jsxs("header",{ref:a,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 4 • Module 004_002"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 6"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Performance Optimization, Profiling & Big-O Thinking"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Specialized Containers: ",e.jsx("span",{className:"text-teal-400",children:"`collections` Module"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master Python's high-speed standard library container datatypes: replacing linear ",e.jsx("code",{className:"text-rose-400 font-mono",children:"list.pop(0)"})," bottleneck queues with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"deque"})," ($O(1)$ operations and ring buffers), frequency analysis & multiset algebra with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"Counter"}),", branching-free grouping with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"defaultdict"}),", LRU caching with ",e.jsx("code",{className:"text-amber-300 font-mono",children:"OrderedDict"}),", low-memory C structs with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"namedtuple"}),", and zero-copy hierarchical scoping with ",e.jsx("code",{className:"text-blue-300 font-mono",children:"ChainMap"}),"."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ O(1) Double-Ended Queues"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📊 O(N log K) Counter Ranking"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🗂️ Zero-Branching defaultdict"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🧠 65%+ RAM Saved with namedtuple"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The High-Speed Container Architecture"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["Standard Python lists and dictionaries are general-purpose tools. When applications scale to millions of operations, picking the exact specialized container from the ",e.jsx("code",{className:"text-teal-300 font-mono",children:"collections"})," module eliminates memory churn and unlocks orders-of-magnitude speedups:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ collections.deque"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"O(1) End Pops & Appends"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Allocates 64-element doubly-linked C memory blocks. Never shifts arrays on ",e.jsx("code",{className:"text-teal-300",children:"popleft()"}),". Auto-evicts via ",e.jsx("code",{className:"text-teal-300",children:"maxlen"}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ collections.Counter"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"O(N log K) Top-K & Multisets"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["C-optimized frequency tallies with zero-default missing keys, ",e.jsx("code",{className:"text-cyan-300",children:"heapq.nlargest"})," ranking, and multiset algebra (",e.jsx("code",{className:"text-cyan-300",children:"+"}),", ",e.jsx("code",{className:"text-cyan-300",children:"-"}),", ",e.jsx("code",{className:"text-cyan-300",children:"&"}),", ",e.jsx("code",{className:"text-cyan-300",children:"|"}),")."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ collections.defaultdict"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"C Factory Auto-Vivification"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Calls a C-level factory function (",e.jsx("code",{className:"text-purple-300",children:"list"}),", ",e.jsx("code",{className:"text-purple-300",children:"int"}),", ",e.jsx("code",{className:"text-purple-300",children:"set"}),") on missing keys, eliminating manual conditional branching."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 shadow-lg",children:[e.jsx("div",{className:"text-amber-400 font-bold text-sm mb-1",children:"4️⃣ collections.OrderedDict"}),e.jsx("code",{className:"text-xs font-mono text-amber-300 block mb-1",children:"O(1) LRU Cache Eviction"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Maintains a doubly-linked hash map with ",e.jsx("code",{className:"text-amber-300",children:"move_to_end()"})," and ",e.jsx("code",{className:"text-amber-300",children:"popitem(last=False)"})," for building in-memory LRU caches."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 shadow-lg",children:[e.jsx("div",{className:"text-emerald-400 font-bold text-sm mb-1",children:"5️⃣ collections.namedtuple"}),e.jsx("code",{className:"text-xs font-mono text-emerald-300 block mb-1",children:"Zero __dict__ C Struct"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Compact immutable C tuple subclass with named field descriptors. Cuts instance memory by over 65% across millions of records."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-blue-950/40 border border-blue-800/60 shadow-lg",children:[e.jsx("div",{className:"text-blue-400 font-bold text-sm mb-1",children:"6️⃣ collections.ChainMap"}),e.jsx("code",{className:"text-xs font-mono text-blue-300 block mb-1",children:"Zero-Copy Scope Layering"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Searches multiple dictionaries by reference sequentially without copying or merging data. Perfect for tiered configurations."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Performance Trap: Why list.pop(0) Destroys Throughput"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["A Python list is a contiguous dynamic C array. Popping the first element (",e.jsx("code",{className:"text-rose-400 font-mono",children:"list.pop(0)"}),") requires CPython to shift all $N-1$ remaining pointers one step to the left in memory, producing an ",e.jsx("span",{className:"text-rose-400 font-bold",children:"$O(N)$ penalty per pop ($O(N^2)$ overall queue drain)"}),"! ",e.jsx("code",{className:"text-teal-300 font-mono",children:"deque.popleft()"})," unlinks a pointer in constant ",e.jsx("span",{className:"text-emerald-400 font-bold",children:"$O(1)$ time"}),"."]})]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Container Memory Internals & Operations"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>x("dequeMemory"),className:u("px-3 py-1.5 rounded-lg transition-all",c==="dequeMemory"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"deque vs list Memory"}),e.jsx("button",{onClick:()=>x("counterAlgebra"),className:u("px-3 py-1.5 rounded-lg transition-all",c==="counterAlgebra"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Counter Multiset Algebra"}),e.jsx("button",{onClick:()=>x("chainMapScopes"),className:u("px-3 py-1.5 rounded-lg transition-all",c==="chainMapScopes"?"bg-blue-900/50 text-blue-300 border border-blue-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"ChainMap Scope Layering"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comparing internal C memory layouts, block allocation strategies, and multi-dictionary lookup mechanics:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:c==="dequeMemory"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"MEMORY INTERNALS: CONTIGUOUS LIST ARRAY VS DEQUE DOUBLY-LINKED BLOCK NODES"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"245",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"Standard List: Contiguous C Array"}),e.jsx("rect",{x:"20",y:"55",width:"340",height:"40",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"80",fill:"#fca5a5",fontSize:"10",fontFamily:"monospace",children:"[ Item 0 | Item 1 | Item 2 | Item 3 | Item 4 ... ]"}),e.jsx("rect",{x:"20",y:"105",width:"340",height:"60",rx:"4",fill:"#881337",stroke:"#fb7185"}),e.jsx("text",{x:"30",y:"127",fill:"#ffe4e6",fontSize:"10",fontWeight:"bold",children:"list.pop(0) Triggers Massive Memory Shift:"}),e.jsx("text",{x:"30",y:"145",fill:"#fecdd3",fontSize:"9",fontFamily:"monospace",children:"memmove() shifts N-1 pointers to left (O(N) CPU time!)"}),e.jsx("rect",{x:"20",y:"175",width:"340",height:"50",rx:"4",fill:"#090d16",stroke:"#f43f5e"}),e.jsx("text",{x:"30",y:"197",fill:"#fca5a5",fontSize:"10",children:"💥 Severe queue drain bottleneck at scale"}),e.jsx("text",{x:"30",y:"213",fill:"#fda4af",fontSize:"9",children:"50,000 items = 2.5 Billion pointer shifts!"})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"245",rx:"8",fill:"#042f2e",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#5eead4",fontSize:"12",fontWeight:"bold",children:"collections.deque: Doubly-Linked Blocks"}),e.jsx("rect",{x:"20",y:"55",width:"95",height:"45",rx:"4",fill:"#0f766e",stroke:"#2dd4bf"}),e.jsx("text",{x:"25",y:"75",fill:"#ccfbf1",fontSize:"9",fontWeight:"bold",children:"Block Node 1"}),e.jsx("text",{x:"25",y:"90",fill:"#99f6e4",fontSize:"8",fontFamily:"monospace",children:"64 items"}),e.jsx("path",{d:"M 120 78 L 138 78",stroke:"#2dd4bf",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"142",y:"55",width:"95",height:"45",rx:"4",fill:"#0f766e",stroke:"#2dd4bf"}),e.jsx("text",{x:"147",y:"75",fill:"#ccfbf1",fontSize:"9",fontWeight:"bold",children:"Block Node 2"}),e.jsx("text",{x:"147",y:"90",fill:"#99f6e4",fontSize:"8",fontFamily:"monospace",children:"64 items"}),e.jsx("path",{d:"M 242 78 L 260 78",stroke:"#2dd4bf",strokeWidth:"2"}),e.jsx("rect",{x:"265",y:"55",width:"95",height:"45",rx:"4",fill:"#0f766e",stroke:"#2dd4bf"}),e.jsx("text",{x:"270",y:"75",fill:"#ccfbf1",fontSize:"9",fontWeight:"bold",children:"Block Node 3"}),e.jsx("text",{x:"270",y:"90",fill:"#99f6e4",fontSize:"8",fontFamily:"monospace",children:"64 items"}),e.jsx("rect",{x:"20",y:"115",width:"340",height:"50",rx:"4",fill:"#115e59",stroke:"#2dd4bf"}),e.jsx("text",{x:"30",y:"137",fill:"#ffffff",fontSize:"10",fontWeight:"bold",children:"deque.popleft() is Instant O(1):"}),e.jsx("text",{x:"30",y:"153",fill:"#ccfbf1",fontSize:"9",children:"Only adjusts head block pointer. Zero memory shifting!"}),e.jsx("rect",{x:"20",y:"175",width:"340",height:"50",rx:"4",fill:"#042f2e",stroke:"#0d9488"}),e.jsx("text",{x:"30",y:"197",fill:"#a7f3d0",fontSize:"10",fontWeight:"bold",children:"🚀 50x Faster Queue Processing"}),e.jsx("text",{x:"30",y:"213",fill:"#ccfbf1",fontSize:"9",children:"Auto-trims with maxlen=K without manual size checks"})]})]}):c==="counterAlgebra"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"COUNTER MULTISET ARITHMETIC ALGEBRA & HEAP TOP-K RANKING"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"245",rx:"8",fill:"#082f49",stroke:"#0ea5e9"}),e.jsx("text",{x:"20",y:"30",fill:"#7dd3fc",fontSize:"12",fontWeight:"bold",children:"Multiset / Bag Arithmetic Algebra"}),e.jsx("rect",{x:"20",y:"50",width:"340",height:"38",rx:"4",fill:"#0369a1",stroke:"#38bdf8"}),e.jsx("text",{x:"30",y:"74",fill:"#e0f2fe",fontSize:"10",fontFamily:"monospace",children:"c1 + c2 ➔ Combined sum of item counts"}),e.jsx("rect",{x:"20",y:"95",width:"340",height:"38",rx:"4",fill:"#0369a1",stroke:"#38bdf8"}),e.jsx("text",{x:"30",y:"119",fill:"#e0f2fe",fontSize:"10",fontFamily:"monospace",children:"c1 - c2 ➔ Subtraction (keeps positive only)"}),e.jsx("rect",{x:"20",y:"140",width:"340",height:"38",rx:"4",fill:"#0369a1",stroke:"#38bdf8"}),e.jsx("text",{x:"30",y:"164",fill:"#e0f2fe",fontSize:"10",fontFamily:"monospace",children:"c1 & c2 ➔ Intersection: min(c1[k], c2[k])"}),e.jsx("rect",{x:"20",y:"185",width:"340",height:"40",rx:"4",fill:"#0c4a6e",stroke:"#0284c7"}),e.jsx("text",{x:"30",y:"210",fill:"#bae6fd",fontSize:"10",fontFamily:"monospace",children:"c1 | c2 ➔ Union: max(c1[k], c2[k])"})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"245",rx:"8",fill:"#1e1b4b",stroke:"#6366f1"}),e.jsx("text",{x:"20",y:"30",fill:"#c7d2fe",fontSize:"12",fontWeight:"bold",children:"Counter.most_common(k) Heap Ranking"}),e.jsx("rect",{x:"20",y:"50",width:"340",height:"45",rx:"4",fill:"#3730a3",stroke:"#818cf8"}),e.jsx("text",{x:"30",y:"72",fill:"#e0e7ff",fontSize:"10",fontFamily:"monospace",children:"1. Direct Hash Counting: O(N)"}),e.jsx("text",{x:"30",y:"87",fill:"#c7d2fe",fontSize:"9",children:"Scans all N items and accumulates counts in C"}),e.jsx("rect",{x:"20",y:"105",width:"340",height:"50",rx:"4",fill:"#4338ca",stroke:"#818cf8"}),e.jsx("text",{x:"30",y:"127",fill:"#ffffff",fontSize:"10",fontWeight:"bold",children:"2. heapq.nlargest Top-K Selection: O(N log K) ⚡"}),e.jsx("text",{x:"30",y:"143",fill:"#c7d2fe",fontSize:"9",children:"Maintains K-element min-heap (Avoids O(N log N) full sort)"}),e.jsx("rect",{x:"20",y:"165",width:"340",height:"60",rx:"4",fill:"#312e81",stroke:"#6366f1"}),e.jsx("text",{x:"30",y:"190",fill:"#e0e7ff",fontSize:"10",fontWeight:"bold",children:"🎯 Instant Leaderboards & Frequency Tallies"}),e.jsx("text",{x:"30",y:"208",fill:"#a5b4fc",fontSize:"9",children:"Counter['missing_item'] returns 0 without KeyError!"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#60a5fa",fontSize:"14",fontWeight:"bold",children:"CHAINMAP: ZERO-COPY LAYERED HIERARCHY & LEXICAL SCOPING"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#0f172a",stroke:"#3b82f6"}),e.jsx("text",{x:"25",y:"30",fill:"#93c5fd",fontSize:"13",fontWeight:"bold",children:"ChainMap(Local Overrides, Campus Policy, Global Defaults)"}),e.jsx("rect",{x:"25",y:"55",width:"240",height:"110",rx:"6",fill:"#1e3a8a",stroke:"#60a5fa"}),e.jsx("text",{x:"35",y:"78",fill:"#bfdbfe",fontSize:"11",fontWeight:"bold",children:"Map 0: Local Scope (MRU)"}),e.jsx("text",{x:"35",y:"100",fill:"#93c5fd",fontSize:"9",fontFamily:"monospace",children:"student: 'Mamata'"}),e.jsx("text",{x:"35",y:"118",fill:"#60a5fa",fontSize:"9",fontFamily:"monospace",children:"max_logins: 1 (Shadows!)"}),e.jsx("text",{x:"35",y:"145",fill:"#facc15",fontSize:"9",fontWeight:"bold",children:"✍️ Writes happen ONLY here"}),e.jsx("rect",{x:"290",y:"55",width:"240",height:"110",rx:"6",fill:"#1e293b",stroke:"#64748b"}),e.jsx("text",{x:"300",y:"78",fill:"#cbd5e1",fontSize:"11",fontWeight:"bold",children:"Map 1: Campus Policy"}),e.jsx("text",{x:"300",y:"100",fill:"#94a3b8",fontSize:"9",fontFamily:"monospace",children:"campus: 'Barrackpore'"}),e.jsx("text",{x:"300",y:"118",fill:"#94a3b8",fontSize:"9",fontFamily:"monospace",children:"passcode: 'BP_LAB_99'"}),e.jsx("text",{x:"300",y:"136",fill:"#94a3b8",fontSize:"9",fontFamily:"monospace",children:"max_logins: 4"}),e.jsx("rect",{x:"555",y:"55",width:"240",height:"110",rx:"6",fill:"#0f172a",stroke:"#475569"}),e.jsx("text",{x:"565",y:"78",fill:"#94a3b8",fontSize:"11",fontWeight:"bold",children:"Map 2: Global Defaults"}),e.jsx("text",{x:"565",y:"100",fill:"#64748b",fontSize:"9",fontFamily:"monospace",children:"institution: 'CoderAccotax'"}),e.jsx("text",{x:"565",y:"118",fill:"#64748b",fontSize:"9",fontFamily:"monospace",children:"grace_days: 15"}),e.jsx("text",{x:"565",y:"136",fill:"#64748b",fontSize:"9",fontFamily:"monospace",children:"passcode: 'DEFAULT_2026'"}),e.jsx("rect",{x:"25",y:"180",width:"770",height:"45",rx:"6",fill:"#1e293b",stroke:"#3b82f6"}),e.jsx("text",{x:"40",y:"207",fill:"#e2e8f0",fontSize:"11",children:"🔍 Sequential Search: Checks Map 0 ➔ Map 1 ➔ Map 2 without copying dictionaries. Zero RAM duplication!"})]})]})})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧪"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Container Selector & Complexity Simulator"})]}),e.jsxs("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:["Select a specialized container from the ",e.jsx("code",{className:"text-teal-300 font-mono",children:"collections"})," module and examine its internal complexity, memory footprint, and production Python code:"]}),e.jsxs("div",{className:"bg-slate-950 p-5 sm:p-6 rounded-xl border border-slate-800/90 space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3",children:"Choose Specialized Container:"}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5",children:[{id:"DEQUE",label:"deque",icon:"⚡",tag:"O(1) Queue"},{id:"COUNTER",label:"Counter",icon:"📊",tag:"Frequencies"},{id:"DEFAULTDICT",label:"defaultdict",icon:"🗂️",tag:"Grouping"},{id:"ORDEREDDICT",label:"OrderedDict",icon:"🔄",tag:"LRU Cache"},{id:"NAMEDTUPLE",label:"namedtuple",icon:"🧬",tag:"C Struct"},{id:"CHAINMAP",label:"ChainMap",icon:"🔗",tag:"Scope Layer"}].map(t=>e.jsxs("button",{onClick:()=>g(t.id),className:u("p-3 rounded-xl border text-center transition-all",n===t.id?"bg-teal-950/60 border-teal-500 shadow-md shadow-teal-950/50":"bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400"),children:[e.jsx("div",{className:"text-xl mb-1",children:t.icon}),e.jsx("div",{className:"text-xs sm:text-sm font-bold text-slate-200",children:t.label}),e.jsx("div",{className:"text-[10px] text-teal-400 font-mono mt-0.5",children:t.tag})]},t.id))})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("span",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400",children:"Simulated Workload Volume:"}),e.jsxs("span",{className:"text-sm font-mono font-bold text-teal-400 bg-teal-950/80 px-3 py-1 rounded-lg border border-teal-800",children:[r.toLocaleString()," Operations"]})]}),e.jsx("input",{type:"range",min:5e3,max:1e5,step:5e3,value:r,onChange:t=>b(Number(t.target.value)),className:"w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-500"}),e.jsxs("div",{className:"flex justify-between text-[11px] text-slate-500 font-mono mt-1",children:[e.jsx("span",{children:"5,000"}),e.jsx("span",{children:"50,000"}),e.jsx("span",{children:"100,000 (Production Scale)"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2",children:[e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-teal-900/50",children:[e.jsx("div",{className:"text-xs text-teal-400 font-medium mb-1",children:"Time Complexity"}),e.jsx("div",{className:"text-sm sm:text-base font-bold font-mono text-teal-300",children:s}),e.jsx("div",{className:"text-[11px] text-slate-400 mt-1",children:"Optimized in C"})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-cyan-900/50",children:[e.jsx("div",{className:"text-xs text-cyan-400 font-medium mb-1",children:"Memory Overhead"}),e.jsx("div",{className:"text-sm sm:text-base font-bold font-mono text-cyan-300",children:i}),e.jsx("div",{className:"text-[11px] text-slate-400 mt-1",children:"Minimal heap bloat"})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-purple-900/50",children:[e.jsx("div",{className:"text-xs text-purple-400 font-medium mb-1",children:"Performance Gain"}),e.jsx("div",{className:"text-sm sm:text-base font-bold font-mono text-purple-300",children:l}),e.jsx("div",{className:"text-[11px] text-slate-400 mt-1",children:"vs naive lists / dicts"})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-amber-900/50",children:[e.jsx("div",{className:"text-xs text-amber-400 font-medium mb-1",children:"Primary Pattern"}),e.jsx("div",{className:"text-xs font-bold font-mono text-amber-300 leading-snug mt-1",children:o}),e.jsx("div",{className:"text-[11px] text-slate-400 mt-1",children:"Production standard"})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"Production Implementation Snippet:"}),e.jsx("pre",{className:"p-4 bg-slate-900/90 border border-slate-800 rounded-xl text-xs sm:text-sm font-mono text-teal-200 overflow-x-auto leading-relaxed",children:y})]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Production Code Labs & Benchmarking Suite"})]}),e.jsxs("p",{className:"text-slate-300 mb-8 text-base leading-relaxed",children:["Inspect, run, and master all four production-grade container implementations covering FIFO deque queues, sliding-window ring buffers, multiset frequency algebra with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"Counter"}),", grouping trees & LRU caching with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"defaultdict"})," and ",e.jsx("code",{className:"text-purple-300 font-mono",children:"OrderedDict"}),", and low-memory records with ",e.jsx("code",{className:"text-amber-300 font-mono",children:"namedtuple"}),":"]}),e.jsxs("div",{className:"space-y-10",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:"Lab 1: Deque FIFO Queues & Sliding-Window Ring Buffers"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Benchmarking $O(N)$ linear memory shifts in ",e.jsx("code",{className:"text-rose-400 font-mono",children:"list.pop(0)"})," against $O(1)$ constant unlinks in ",e.jsx("code",{className:"text-teal-300 font-mono",children:"deque.popleft()"}),", and building automatic bounded log buffers with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"deque(maxlen=K)"}),"."]})]}),e.jsx(p,{fileModule:j,title:"deque_fifo_lifo_ring_buffer.py",highlightLines:[22,35,49,58]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-cyan-300",children:"Lab 2: Counter Frequency Analysis & Multiset Bag Arithmetic"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Demonstrating heap-accelerated $O(N \\log K)$ ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"most_common(k)"})," selection across 50,000 student course ratings and multiset algebra (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"+"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"-"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"&"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"|"}),")."]})]}),e.jsx(p,{fileModule:k,title:"counter_frequency_and_multisets.py",highlightLines:[32,44,62,66,70,74]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-purple-300",children:"Lab 3: defaultdict Grouping Trees & OrderedDict LRU Cache Eviction"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Eliminating missing-key dictionary branching with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"defaultdict(list)"}),", auto-vivifying infinite nested directory trees, and building an in-memory LRU cache with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"OrderedDict.move_to_end()"})," and ",e.jsx("code",{className:"text-purple-300 font-mono",children:"popitem(last=False)"}),"."]})]}),e.jsx(p,{fileModule:w,title:"defaultdict_and_ordereddict_mastery.py",highlightLines:[32,45,52,60,68]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-amber-300",children:"Lab 4: namedtuple Memory Footprint & ChainMap Hierarchical Scoping"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Measuring 65%+ RAM reductions using immutable C ",e.jsx("code",{className:"text-amber-300 font-mono",children:"namedtuple"})," instances and building a zero-copy multi-campus policy resolution system with ",e.jsx("code",{className:"text-amber-300 font-mono",children:"ChainMap"}),"."]})]}),e.jsx(p,{fileModule:C,title:"namedtuple_and_chainmap_casestudy.py",highlightLines:[19,31,56,68]})]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Common Pitfalls & Container Anti-Patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"1. Using list.pop(0) for FIFO Queues"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Using ",e.jsx("code",{className:"text-rose-400 font-mono",children:"list.pop(0)"})," causes CPython to shift every remaining item in memory, degrading queue processing to $O(N^2)$. Always use ",e.jsx("code",{className:"text-teal-300 font-mono",children:"deque.popleft()"})," ($O(1)$)."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# BUG: item = my_list.pop(0) # O(N) shift!",`
`,"# FIX: item = my_deque.popleft() # O(1)"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"2. Random Indexing into Large Deques"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Deques are linked block lists; accessing ",e.jsx("code",{className:"text-rose-400 font-mono",children:"dq[50000]"})," requires traversing node pointers from the nearest end ($O(N)$). Use standard lists when frequent random index access is needed."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# SLOW: mid = dq[len(dq)//2] # O(N) traversal",`
`,"# FAST: mid = lst[len(lst)//2] # O(1) index"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"3. Auto-Vivification in defaultdict"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Checking ",e.jsx("code",{className:"text-rose-400 font-mono",children:'if d["missing"]:'})," creates and inserts the default entry into the dictionary. Always check ",e.jsx("code",{className:"text-teal-300 font-mono",children:'if "missing" in d:'})," to inspect without accidental insertion."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# BUG: if d['nonexistent']: ... # Inserts empty list!",`
`,"# FIX: if 'nonexistent' in d: ..."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"4. Mutable Defaults in namedtuple"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Assigning a mutable default (e.g. ",e.jsxs("code",{className:"text-rose-400 font-mono",children:["defaults=",'{"tags": []}']}),") shares the exact same list instance across all records in memory."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:[`# BUG: defaults={'tags': []} # Shared list across instances!
`,"# FIX: defaults={'tags': None}"]})]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Professional Container Selection Checklist"})]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm sm:text-base",children:[e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Use deque for Queues & Sliding Windows:"})," Choose ",e.jsx("code",{className:"text-teal-300 font-mono",children:"deque"})," for $O(1)$ popleft and bounded ring buffers with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"maxlen"}),"."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Use Counter for Frequencies & Top-K:"})," Leverage ",e.jsx("code",{className:"text-teal-300 font-mono",children:"Counter.most_common(k)"})," to avoid $O(N \\log N)$ sorting and perform multiset arithmetic."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Use defaultdict for Grouping:"})," Eliminate dictionary missing-key branching in loops using ",e.jsx("code",{className:"text-teal-300 font-mono",children:"defaultdict(list)"})," or recursive tree factories."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Use OrderedDict for LRU Caches:"})," Build clean in-memory eviction caches with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"move_to_end()"})," and ",e.jsx("code",{className:"text-teal-300 font-mono",children:"popitem(last=False)"}),"."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Use namedtuple for High-Volume Records:"})," Eliminate dynamic ",e.jsx("code",{className:"text-rose-400 font-mono",children:"__dict__"})," memory overhead for lightweight data modeling."]})]})]})]}),e.jsx("section",{ref:a,className:"section-hidden",children:e.jsx(N,{title:"Specialized Containers: collections Module FAQs",questions:O})}),e.jsx("section",{ref:a,className:"section-hidden",children:e.jsx(_,{content:S,title:"Topic 6: Collections Module High-Speed Containers Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic6_note.txt"})}),e.jsx("section",{ref:a,className:"section-hidden",children:e.jsx(v,{note:"Selecting the appropriate container from Python's collections module is a hallmark of professional software engineering. In real-world educational data systems across Barrackpore, Kolkata, Ichapur, and Jadavpur, processing student applications with deque ensures constant-time throughput, tallying course evaluations with Counter provides instant top-K rankings without full sorts, grouping rosters with defaultdict eliminates messy boilerplate, and modeling hundreds of thousands of candidate records with namedtuple cuts server RAM by over 65%. Always pick the specialized data structure tailored to your access pattern."})})]})]})}export{U as default};
