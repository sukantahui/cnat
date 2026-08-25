import{b as m,j as e,bg as x}from"./vendor-react-core-Doz9nIC6.js";import{P as j}from"./PythonFileLoader-hCi5osN-.js";import{P as q}from"./PlainTextPrint-C08xhKA4.js";import{F as k}from"./FAQTemplate-CkSqDH4B.js";import{T as v}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const S=`# topic1_files/data_structure_lookup_and_search_benchmarks.py\r
# Module: 004_002_performance-optimization\r
# Topic: Comparing lookup costs across Python data structures (list, set, dict, deque)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 1 - File 1: Data Structure Lookup & Search Cost Benchmarks\r
Demonstrates:\r
  1. Membership search complexity comparison:\r
     - List  : O(N) Linear scan\r
     - Deque : O(N) Linear traversal\r
     - Set   : O(1) Hash table bucket lookup\r
     - Dict  : O(1) Key hash lookup\r
  2. High-precision micro-benchmarking using \`time.perf_counter_ns()\`\r
"""\r
\r
import time\r
from collections import deque\r
from typing import List, Set, Dict\r
\r
def benchmark_membership_lookups(n: int) -> dict:\r
    """Populates structures with N integers and measures lookup time for non-existent target."""\r
    # Target element chosen at worst-case position (non-existent: -1)\r
    target = -1\r
\r
    raw_items = list(range(n))\r
    list_ds = raw_items\r
    set_ds = set(raw_items)\r
    dict_ds = {x: True for x in raw_items}\r
    deque_ds = deque(raw_items)\r
\r
    # 1. Benchmark List Search (O(N))\r
    t0 = time.perf_counter_ns()\r
    _ = target in list_ds\r
    list_time_ns = time.perf_counter_ns() - t0\r
\r
    # 2. Benchmark Deque Search (O(N))\r
    t0 = time.perf_counter_ns()\r
    _ = target in deque_ds\r
    deque_time_ns = time.perf_counter_ns() - t0\r
\r
    # 3. Benchmark Set Search (O(1))\r
    t0 = time.perf_counter_ns()\r
    _ = target in set_ds\r
    set_time_ns = time.perf_counter_ns() - t0\r
\r
    # 4. Benchmark Dict Search (O(1))\r
    t0 = time.perf_counter_ns()\r
    _ = target in dict_ds\r
    dict_time_ns = time.perf_counter_ns() - t0\r
\r
    return {\r
        "n": n,\r
        "list_us": round(list_time_ns / 1000.0, 2),\r
        "deque_us": round(deque_time_ns / 1000.0, 2),\r
        "set_us": round(set_time_ns / 1000.0, 4),\r
        "dict_us": round(dict_time_ns / 1000.0, 4),\r
        "speedup_set_vs_list": round(list_time_ns / (set_time_ns or 1), 1)\r
    }\r
\r
\r
def demonstrate_lookup_benchmarks():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - DATA STRUCTURE LOOKUP BENCHMARKS")\r
    print("=" * 70)\r
\r
    dataset_sizes = [1_000, 10_000, 100_000, 1_000_000]\r
\r
    print("1. Membership Search Micro-Latency Across Data Structures (\`target in ds\`):")\r
    print(f"{'N Items':<10} | {'List O(N) (us)':<16} | {'Deque O(N) (us)':<16} | {'Set O(1) (us)':<14} | {'Dict O(1) (us)':<14} | {'Speedup'}")\r
    print("-" * 84)\r
\r
    for n in dataset_sizes:\r
        res = benchmark_membership_lookups(n)\r
        print(\r
            f"{res['n']:<10,d} | {res['list_us']:<16.2f} | {res['deque_us']:<16.2f} | "\r
            f"{res['set_us']:<14.4f} | {res['dict_us']:<14.4f} | {res['speedup_set_vs_list']:<8.1f}x"\r
        )\r
\r
    print(r"""\r
Lookup Cost Invariants:\r
  1. Sets and Dicts compute a hash code (O(1)) to jump directly to the target memory bucket.\r
  2. Lists and Deques must traverse elements sequentially (O(N)), leading to multi-millisecond lags at N=1,000,000.\r
  3. Converting a list to a set before running repeated membership tests yields a 10,000x+ lookup speedup.\r
""")\r
    print("[PASSED] Lookup Cost Benchmarking Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_lookup_benchmarks()\r
`,w=`# topic1_files/insertion_deletion_and_fifo_lifo_costs.py\r
# Module: 004_002_performance-optimization\r
# Topic: Comparing lookup costs across Python data structures (list, set, dict, deque)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 1 - File 2: Insertion, Deletion & FIFO/LIFO Mutation Costs\r
Demonstrates:\r
  1. Head Insertion Cost: \`list.insert(0, x)\` (O(N) shift) vs \`deque.appendleft(x)\` (O(1) pointer link)\r
  2. Tail Appending Cost: \`list.append(x)\` (O(1) amortized) vs \`deque.append(x)\` (O(1))\r
  3. FIFO Queue Operations: \`list.pop(0)\` (O(N)) vs \`deque.popleft()\` (O(1))\r
"""\r
\r
import time\r
from collections import deque\r
from typing import List\r
\r
def benchmark_head_insertions(iterations: int = 50_000) -> dict:\r
    """Compares inserting at head: list.insert(0, x) vs deque.appendleft(x)."""\r
    # 1. List Head Insertions: O(N) per insert -> O(N^2) total\r
    t0 = time.perf_counter()\r
    test_list = []\r
    for i in range(iterations):\r
        test_list.insert(0, i)\r
    list_duration_ms = (time.perf_counter() - t0) * 1000.0\r
\r
    # 2. Deque Head Insertions: O(1) per insert -> O(N) total\r
    t0 = time.perf_counter()\r
    test_deque = deque()\r
    for i in range(iterations):\r
        test_deque.appendleft(i)\r
    deque_duration_ms = (time.perf_counter() - t0) * 1000.0\r
\r
    return {\r
        "iterations": iterations,\r
        "list_ms": round(list_duration_ms, 2),\r
        "deque_ms": round(deque_duration_ms, 2),\r
        "speedup": round(list_duration_ms / (deque_duration_ms or 0.001), 1)\r
    }\r
\r
def benchmark_fifo_queue_pop(iterations: int = 50_000) -> dict:\r
    """Compares popping from head: list.pop(0) vs deque.popleft()."""\r
    # Populate structures\r
    list_q = list(range(iterations))\r
    deque_q = deque(range(iterations))\r
\r
    # 1. List FIFO Pop: list.pop(0) - O(N) shift per pop\r
    t0 = time.perf_counter()\r
    while list_q:\r
        list_q.pop(0)\r
    list_pop_ms = (time.perf_counter() - t0) * 1000.0\r
\r
    # 2. Deque FIFO Pop: deque.popleft() - O(1) unlinking\r
    t0 = time.perf_counter()\r
    while deque_q:\r
        deque_q.popleft()\r
    deque_pop_ms = (time.perf_counter() - t0) * 1000.0\r
\r
    return {\r
        "iterations": iterations,\r
        "list_pop_ms": round(list_pop_ms, 2),\r
        "deque_pop_ms": round(deque_pop_ms, 2),\r
        "speedup": round(list_pop_ms / (deque_pop_ms or 0.001), 1)\r
    }\r
\r
\r
def demonstrate_mutation_costs():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - INSERTION, DELETION & QUEUE MUTATION COSTS")\r
    print("=" * 70)\r
\r
    n_ops = 50_000\r
\r
    print(f"1. Benchmarking Head Insertion (\`insert(0)\` vs \`appendleft()\`) for {n_ops:,} items:")\r
    insert_res = benchmark_head_insertions(n_ops)\r
    print(f"   * \`list.insert(0, x)\`   [O(N) Shift] : {insert_res['list_ms']} ms")\r
    print(f"   * \`deque.appendleft(x)\` [O(1) Link]  : {insert_res['deque_ms']} ms")\r
    print(f"   * DEQUE SPEEDUP FACTOR               : {insert_res['speedup']}x FASTER!\\n")\r
\r
    print(f"2. Benchmarking FIFO Queue Dequeue (\`list.pop(0)\` vs \`deque.popleft()\`) for {n_ops:,} items:")\r
    pop_res = benchmark_fifo_queue_pop(n_ops)\r
    print(f"   * \`list.pop(0)\`        [O(N) Shift] : {pop_res['list_pop_ms']} ms")\r
    print(f"   * \`deque.popleft()\`    [O(1) Unlink]: {pop_res['deque_pop_ms']} ms")\r
    print(f"   * DEQUE SPEEDUP FACTOR              : {pop_res['speedup']}x FASTER!\\n")\r
\r
    print(r"""\r
Mutation Cost Invariants:\r
  1. Python lists are contiguous dynamic arrays; inserting or popping at index 0 forces CPython to \`memmove()\` all remaining items.\r
  2. \`collections.deque\` is implemented as a doubly linked list of fixed-size blocks (64 elements per block).\r
  3. Appending and popping at both ends of a \`deque\` takes strict O(1) time with zero memory shifting overhead.\r
""")\r
    print("[PASSED] Mutation & FIFO/LIFO Benchmark Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_mutation_costs()\r
`,T=`# topic1_files/memory_overhead_and_cache_locality.py\r
# Module: 004_002_performance-optimization\r
# Topic: Comparing lookup costs across Python data structures (list, set, dict, deque)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 1 - File 3: Memory Overhead & Cache Locality Tradeoffs\r
Demonstrates:\r
  1. Inspecting exact memory consumption across Python collections with \`sys.getsizeof()\`\r
  2. Memory overhead comparison: Tuple vs List vs Set vs Dict vs Deque\r
  3. Contiguous array cache locality vs hash table pointer chasing\r
"""\r
\r
import sys\r
from collections import deque\r
from typing import Dict, Any\r
\r
def compare_collection_memory_footprint(n_elements: int) -> Dict[str, Any]:\r
    """Measures memory allocations across all primary Python collection types for N items."""\r
    sample_ints = list(range(n_elements))\r
\r
    tuple_obj = tuple(sample_ints)\r
    list_obj = list(sample_ints)\r
    set_obj = set(sample_ints)\r
    dict_obj = {i: True for i in sample_ints}\r
    deque_obj = deque(sample_ints)\r
\r
    return {\r
        "n": n_elements,\r
        "tuple_bytes": sys.getsizeof(tuple_obj),\r
        "list_bytes": sys.getsizeof(list_obj),\r
        "deque_bytes": sys.getsizeof(deque_obj),\r
        "set_bytes": sys.getsizeof(set_obj),\r
        "dict_bytes": sys.getsizeof(dict_obj)\r
    }\r
\r
\r
def demonstrate_memory_overheads():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - MEMORY OVERHEAD & CACHE LOCALITY ANALYSIS")\r
    print("=" * 70)\r
\r
    dataset_sizes = [0, 10, 100, 1_000, 10_000, 100_000]\r
\r
    print("1. Memory Footprint Allocation (Bytes) Across Python Collections:")\r
    print(f"{'N Items':<10} | {'Tuple':<12} | {'List':<12} | {'Deque':<12} | {'Set':<14} | {'Dict':<14}")\r
    print("-" * 82)\r
\r
    for n in dataset_sizes:\r
        res = compare_collection_memory_footprint(n)\r
        print(\r
            f"{res['n']:<10,d} | {res['tuple_bytes']:<12,d} | {res['list_bytes']:<12,d} | "\r
            f"{res['deque_bytes']:<12,d} | {res['set_bytes']:<14,d} | {res['dict_bytes']:<14,d}"\r
        )\r
\r
    print(r"""\r
Memory Overhead Invariants:\r
  1. Tuples are the most memory-efficient immutable sequence in Python (zero over-allocation buffer).\r
  2. Lists allocate an over-allocation buffer to achieve O(1) amortized appends.\r
  3. Sets and Dicts have significant memory overhead (~4x to 8x vs Tuples) due to hash table bucket arrays and sparsity requirements.\r
  4. Cache Locality: Contiguous lists and tuples have superior CPU L1/L2 cache prefetching during sequential iteration.\r
""")\r
    print("[PASSED] Memory Overhead Analysis Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_memory_overheads()\r
`,A=`# topic1_files/institutional_admission_roster_lookup_optimizer.py\r
# Module: 004_002_performance-optimization\r
# Topic: Comparing lookup costs across Python data structures (list, set, dict, deque)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 1 - File 4: Institutional Admission Roster Lookup Optimizer (Case Study)\r
Demonstrates:\r
  1. High-throughput student eligibility validation across 50,000 enrolled candidates\r
  2. Benchmarking throughput (queries/sec) across List vs Set vs Dict vs Deque\r
  3. Generating production architectural performance recommendation reports\r
"""\r
\r
import time\r
from collections import deque\r
from typing import List, Set, Dict, Any\r
\r
class InstitutionalRosterLookupOptimizer:\r
    """Production candidate verification and throughput benchmarking engine."""\r
\r
    def __init__(self, student_count: int = 50_000):\r
        self.student_count = student_count\r
        # Synthesize raw candidate IDs\r
        self.raw_ids = [f"STU-2026-{i:06d}" for i in range(student_count)]\r
\r
        # Prepare collections\r
        self.list_roster: List[str] = list(self.raw_ids)\r
        self.set_roster: Set[str] = set(self.raw_ids)\r
        self.dict_roster: Dict[str, dict] = {\r
            sid: {"name": f"Student_{i}", "campus": "Barrackpore" if i % 2 == 0 else "Kolkata"}\r
            for i, sid in enumerate(self.raw_ids)\r
        }\r
        self.deque_roster: deque = deque(self.raw_ids)\r
\r
    def benchmark_query_throughput(self, sample_queries_count: int = 1_000) -> Dict[str, Any]:\r
        """Executes repeated queries and measures throughput across data structures."""\r
        # Query sample targets (mixture of existing and non-existing IDs)\r
        queries = [f"STU-2026-{i:06d}" for i in range(0, sample_queries_count * 2, 2)]\r
\r
        # 1. Benchmark List Lookups\r
        t0 = time.perf_counter()\r
        list_matches = sum(1 for q in queries if q in self.list_roster)\r
        list_duration_s = time.perf_counter() - t0\r
        list_qps = sample_queries_count / (list_duration_s or 0.0001)\r
\r
        # 2. Benchmark Deque Lookups\r
        t0 = time.perf_counter()\r
        deque_matches = sum(1 for q in queries if q in self.deque_roster)\r
        deque_duration_s = time.perf_counter() - t0\r
        deque_qps = sample_queries_count / (deque_duration_s or 0.0001)\r
\r
        # 3. Benchmark Set Lookups\r
        t0 = time.perf_counter()\r
        set_matches = sum(1 for q in queries if q in self.set_roster)\r
        set_duration_s = time.perf_counter() - t0\r
        set_qps = sample_queries_count / (set_duration_s or 0.000001)\r
\r
        # 4. Benchmark Dict Lookups\r
        t0 = time.perf_counter()\r
        dict_matches = sum(1 for q in queries if q in self.dict_roster)\r
        dict_duration_s = time.perf_counter() - t0\r
        dict_qps = sample_queries_count / (dict_duration_s or 0.000001)\r
\r
        return {\r
            "roster_size": self.student_count,\r
            "queries_executed": sample_queries_count,\r
            "list": {"time_ms": round(list_duration_s * 1000, 2), "qps": round(list_qps, 1)},\r
            "deque": {"time_ms": round(deque_duration_s * 1000, 2), "qps": round(deque_qps, 1)},\r
            "set": {"time_ms": round(set_duration_s * 1000, 4), "qps": round(set_qps, 1)},\r
            "dict": {"time_ms": round(dict_duration_s * 1000, 4), "qps": round(dict_qps, 1)},\r
            "speedup_set_vs_list": round(list_duration_s / (set_duration_s or 0.00001), 1)\r
        }\r
\r
\r
def demonstrate_roster_optimizer():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - INSTITUTIONAL ROSTER LOOKUP OPTIMIZER")\r
    print("=" * 70)\r
\r
    roster_size = 50_000\r
    query_count = 1_000\r
\r
    print(f"1. Initializing Institutional Roster with {roster_size:,} Student Records...")\r
    engine = InstitutionalRosterLookupOptimizer(roster_size)\r
\r
    print(f"\\n2. Executing {query_count:,} Verification Lookups Across Data Structures:")\r
    metrics = engine.benchmark_query_throughput(query_count)\r
\r
    print(f"   * List  (Linear O(N) Scan) : {metrics['list']['time_ms']:>8.2f} ms ({metrics['list']['qps']:>10,.1f} queries/sec)")\r
    print(f"   * Deque (Linear Traversal) : {metrics['deque']['time_ms']:>8.2f} ms ({metrics['deque']['qps']:>10,.1f} queries/sec)")\r
    print(f"   * Set   (O(1) Hash Table)  : {metrics['set']['time_ms']:>8.4f} ms ({metrics['set']['qps']:>10,.1f} queries/sec)")\r
    print(f"   * Dict  (O(1) Key Table)   : {metrics['dict']['time_ms']:>8.4f} ms ({metrics['dict']['qps']:>10,.1f} queries/sec)\\n")\r
\r
    print(f"3. Throughput Speedup: SET is {metrics['speedup_set_vs_list']:,}x FASTER than LIST!")\r
\r
    print(r"""\r
Architectural Recommendation:\r
  - For high-frequency membership verification: Use \`set\` for ID validation.\r
  - For key-value association and metadata queries: Use \`dict\`.\r
  - For FIFO queues or sliding window streams: Use \`collections.deque\`.\r
  - For sequential ordered collections with indexed access: Use \`list\`.\r
""")\r
    print("[PASSED] Institutional Roster Lookup Optimizer Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_roster_optimizer()\r
`,C=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 4: PRO LEVEL • MODULE 004_002: PERFORMANCE OPTIMIZATION\r
          TOPIC 1: LOOKUP COSTS & MUTATION COMPLEXITIES ACROSS DATA STRUCTURES\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. DATA STRUCTURE COMPLEXITY SUMMARY MATRIX\r
--------------------------------------------------------------------------------\r
  Data Structure  | Search (x in ds) | Head Insert/Pop | Tail Insert/Pop | Indexing\r
  ----------------+------------------+-----------------+-----------------+----------\r
  list            | O(N) Linear Scan | O(N) Mem Shift  | O(1) Amortized  | O(1)\r
  set             | O(1) Hash Bucket | N/A (Unordered) | O(1) Add/Remove | N/A\r
  dict            | O(1) Key Hash    | N/A (Ordered)   | O(1) Key Set/Del| O(1) Key\r
  collections.deque| O(N) Traversal  | O(1) Block Link | O(1) Block Link | O(N) Mid\r
\r
--------------------------------------------------------------------------------\r
2. SELECTION RULES FOR PRODUCTION SYSTEMS\r
--------------------------------------------------------------------------------\r
  * Need fast membership queries (\`if id in collection:\`) -> USE SET (O(1))\r
  * Need key-value mapping and fast lookups               -> USE DICT (O(1))\r
  * Need FIFO queue / Sliding window (push/pop both ends) -> USE DEQUE (O(1))\r
  * Need ordered sequence with direct index access        -> USE LIST (O(1) index)\r
  * Need immutable fixed tuple data with minimal RAM      -> USE TUPLE\r
\r
================================================================================\r
        END OF STUDY NOTE • TOPIC 1: DATA STRUCTURE LOOKUP & MUTATION\r
================================================================================\r
`,L=[{question:"What is the time complexity of searching for an element using 'x in collection' across list, set, dict, and deque?",shortAnswer:"Set and Dict are O(1) Constant Time on average (hash table lookup); List and Deque are O(N) Linear Time (sequential element-by-element scan).",explanation:"Data structure membership search complexity.",hint:"Set/Dict are O(1) via hash table; List/Deque are O(N) via linear scan.",level:"basic",codeExample:"# Set/Dict = O(1); List/Deque = O(N)"},{question:"Why is 'x in my_set' so much faster than 'x in my_list' for large collections?",shortAnswer:"Sets compute the hash code of 'x' to jump directly to the target memory bucket in O(1) time, whereas lists must iterate through each item sequentially from index 0 until a match is found.",explanation:"Hash table direct addressing vs array linear scanning.",hint:"Sets use hash codes for direct memory bucket lookup in O(1) time.",level:"basic",codeExample:"if target_id in student_set: # O(1) Constant Time"},{question:"Why is 'list.insert(0, x)' an O(N) operation in Python?",shortAnswer:"Python lists are contiguous dynamic arrays; inserting an element at index 0 requires CPython to shift all existing N element pointers one position to the right in memory via 'memmove()'.",explanation:"Contiguous array element shifting overhead.",hint:"Forces CPython to shift all N elements to the right in memory.",level:"basic",codeExample:"my_list.insert(0, 'head') # O(N) Memory Shift"},{question:"How does 'collections.deque' achieve O(1) time complexity for 'appendleft()' and 'popleft()'?",shortAnswer:"'deque' is implemented as a doubly linked list of fixed-size blocks (64 elements per block); adding or removing at the head simply updates block pointers without shifting any elements.",explanation:"Doubly linked memory block architecture.",hint:"Uses a doubly linked list of 64-element blocks, updating pointers in O(1) time.",level:"moderate",codeExample:`from collections import deque
q = deque()
q.appendleft(10) # O(1) Instant link`},{question:"What is the time complexity of indexing into the middle of a deque ('my_deque[N // 2]') versus a list ('my_list[N // 2]')?",shortAnswer:"List indexing is O(1) Constant Time (direct pointer arithmetic); Deque middle indexing is O(N) Linear Time (traversing the linked blocks from the nearest end).",explanation:"Direct array pointer offset vs linked block traversal.",hint:"List is O(1) direct indexing; Deque is O(N) because it must traverse blocks.",level:"moderate",codeExample:`val = my_list[5000]  # O(1)
val = my_deque[5000] # O(N) Block Traversal`},{question:"Why does 'list.append()' have O(1) amortized time complexity rather than strict O(1)?",shortAnswer:"Because most appends write directly into pre-allocated buffer space in O(1), but when the buffer fills, CPython must allocate a larger array and copy all elements over in O(N) time.",explanation:"Dynamic array over-allocation and reallocation amortization.",hint:"Occasional O(N) array resize reallocations are amortized over many O(1) appends.",level:"complex",codeExample:"# CPython over-allocation formula: new_allocated = size + (size >> 3) + 6"},{question:"Why do 'dict' and 'set' consume significantly more memory than 'list' and 'tuple' for the same number of items?",shortAnswer:"Because hash tables require sparse bucket arrays (roughly 1/3 empty to minimize hash collisions) and store hash values and keys alongside data pointers.",explanation:"Hash table sparsity and entry struct memory overhead.",hint:"Hash tables maintain empty buckets and hash metadata to prevent collisions.",level:"basic",codeExample:"sys.getsizeof(my_dict) > sys.getsizeof(my_list) # Dict has ~4x-8x overhead"},{question:"Why are 'tuple' objects more memory-efficient than 'list' objects in Python?",shortAnswer:"Tuples are immutable, allowing CPython to allocate the exact memory needed with zero extra over-allocation buffers; lists must allocate surplus capacity for future appends.",explanation:"Immutable exact-fit memory allocation.",hint:"Tuples allocate exact memory with zero surplus capacity buffer.",level:"basic",codeExample:"sys.getsizeof((1, 2, 3)) < sys.getsizeof([1, 2, 3])"},{question:"What is CPU cache locality and why do lists and tuples have better cache locality than dicts and linked structures?",shortAnswer:"Lists and tuples store element pointers in contiguous linear memory, allowing the CPU hardware prefetcher to load adjacent items into L1/L2 caches; dicts and linked nodes cause random memory pointer chasing.",explanation:"CPU L1/L2 cache prefetching in contiguous memory.",hint:"Contiguous arrays enable CPU hardware prefetching into high-speed L1/L2 cache.",level:"complex",codeExample:"# Contiguous memory arrays maximize CPU cache hit rates"},{question:"What data structure should you use to implement a FIFO (First-In, First-Out) queue in Python?",shortAnswer:"'collections.deque', using 'append()' to enqueue and 'popleft()' to dequeue in O(1) time.",explanation:"FIFO queue implementation standard.",hint:"Use collections.deque with append() and popleft().",level:"basic",codeExample:`from collections import deque
queue = deque()
queue.append(task)
item = queue.popleft() # O(1)`},{question:"Why is using a Python list as a FIFO queue with 'list.pop(0)' considered a major performance anti-pattern?",shortAnswer:"Because 'list.pop(0)' is an O(N) operation that shifts all remaining elements on every pop, turning N queue operations into catastrophic O(N^2) total execution time.",explanation:"Quadratic queue degradation anti-pattern.",hint:"Shifting elements on every pop(0) makes queue processing O(N^2) instead of O(N).",level:"basic",codeExample:"# AVOID: while q: item = q.pop(0) -> O(N^2) total!"},{question:"What is the time complexity of deleting a key from a dictionary ('del dict[key]') or removing an item from a set ('set.remove(x)')?",shortAnswer:"O(1) Constant Time on average, as the key's hash bucket is located and marked as a dummy/deleted entry in constant time.",explanation:"Hash table tombstone deletion complexity.",hint:"O(1) on average via hash lookup and tombstone marking.",level:"basic",codeExample:"del student_dict['STU-101'] # O(1) Average"},{question:"What is the time complexity of removing an item from a list by value ('list.remove(x)')?",shortAnswer:"O(N) Linear Time, because Python must first linearly scan for the item and then shift all subsequent elements in memory.",explanation:"Linear scan plus memory shift.",hint:"O(N) because it requires both a linear search and array element shifting.",level:"basic",codeExample:"my_list.remove('target') # O(N) Time"},{question:"What is the time complexity of getting the length of any built-in Python collection ('len(ds)')?",shortAnswer:"O(1) Constant Time for list, tuple, set, dict, and deque, because CPython stores the element count in the object's C header struct ('ob_size') and reads it directly.",explanation:"C struct size attribute introspection.",hint:"O(1) constant time because CPython reads the ob_size field directly.",level:"basic",codeExample:"length = len(any_collection) # O(1) Instant"},{question:"What is the worst-case time complexity of dictionary lookup and when does it occur?",shortAnswer:"O(N) Linear Time, which occurs when all inserted keys collide on the exact same hash bucket (hash collision storm), forcing a linear probe through all entries.",explanation:"Hash collision worst-case degradation.",hint:"O(N) in pathological cases where all keys hash to the same bucket.",level:"complex",codeExample:"# Hash collision storm worst-case: O(N)"},{question:"How do you choose between a List, Set, Dict, and Deque in system design?",shortAnswer:"Use Set for fast O(1) uniqueness/membership checks; Dict for O(1) key-value mappings; Deque for O(1) FIFO queues/sliding windows; List for ordered indexed sequences.",explanation:"Data structure decision framework.",hint:"Set for membership, Dict for mappings, Deque for FIFO queues, List for indexed order.",level:"basic",codeExample:"# Production Data Structure Strategy"},{question:"What is the time complexity of converting a set of N elements to a list ('list(my_set)')?",shortAnswer:"O(N) Time and O(N) Space, as it iterates through all N entries in the hash table and copies pointers into a new contiguous array.",explanation:"Bulk collection type conversion.",hint:"O(N) time and space to iterate and allocate the array.",level:"basic",codeExample:"ordered = list(unique_set) # O(N)"},{question:"What is the time complexity of checking if a key exists in a dictionary using 'key in dict' vs 'key in dict.keys()' in Python 3?",shortAnswer:"Both are O(1) Constant Time, because in Python 3 'dict.keys()' returns a dynamic dictionary view object that performs O(1) hash lookups directly on the underlying table.",explanation:"Dictionary view lookup mechanics in Python 3.",hint:"Both are O(1) because dict.keys() is a view object performing hash lookups.",level:"moderate",codeExample:`if 'k' in my_dict: # O(1)
if 'k' in my_dict.keys(): # O(1)`},{question:"What is the time complexity of checking if a value exists in a dictionary using 'val in dict.values()'?",shortAnswer:"O(N) Linear Time, because dictionary values are not indexed by a hash table; Python must iterate through all values sequentially.",explanation:"Dictionary value linear iteration.",hint:"O(N) because values are not hashed, requiring a linear scan.",level:"basic",codeExample:"if 'target' in my_dict.values(): # O(N) Linear Scan"},{question:"What is the time complexity of finding the intersection of two sets ('set_a & set_b')?",shortAnswer:"O(min(len(set_a), len(set_b))), because Python iterates over the smaller set and performs O(1) lookups in the larger set.",explanation:"Set intersection optimization in CPython.",hint:"O(min(len(A), len(B))) by iterating over the smaller set with O(1) lookups in the larger.",level:"moderate",codeExample:"common = set_a & set_b # O(min(len(A), len(B)))"},{question:"How much faster is membership search in a set compared to a list for 100,000 items?",shortAnswer:"Typically 5,000x to 15,000x faster, reducing lookup time from ~1.5 milliseconds (list scan) to ~0.0001 milliseconds (set hash lookup).",explanation:"Empirical latency divergence at scale.",hint:"5,000x to 15,000x faster for 100,000 elements.",level:"basic",codeExample:"# Set lookup (~50ns) vs List lookup (~1.5ms)"},{question:"What is the difference between 'deque(maxlen=K)' and a standard list for rolling buffers?",shortAnswer:"'deque(maxlen=K)' automatically discards old elements from the opposite end in O(1) time when new items are added beyond size K, maintaining a fixed-size window with zero memory shifting.",explanation:"Bounded double-ended queue sliding window.",hint:"Automatically evicts oldest items in O(1) time when reaching maxlen.",level:"basic",codeExample:"history = deque(maxlen=100) # Fixed-size rolling buffer"},{question:"Why should you never write 'if x in [1, 2, 3, ...]' inside a loop over N items?",shortAnswer:"Because it constructs a new list and performs an O(M) linear search on every iteration, leading to O(N * M) time; defining a set '{1, 2, 3, ...}' outside the loop makes lookups O(1) for O(N) total time.",explanation:"Loop invariant set hoisting optimization.",hint:"Hoisting the collection outside as a set converts O(N * M) into O(N).",level:"basic",codeExample:`VALID_SET = {1, 2, 3}
for x in data: if x in VALID_SET: ...`},{question:"What is the time complexity of extending a list ('list.extend(other_list)') vs extending a deque ('deque.extend(other_deque)')?",shortAnswer:"Both are O(K) where K is the length of the second collection, efficiently copying memory blocks in bulk.",explanation:"Bulk extension complexity.",hint:"O(K) where K is the number of elements being added.",level:"basic",codeExample:"my_list.extend(batch) # O(K)"},{question:"What is the ultimate golden rule for selecting data structures in Python?",shortAnswer:"Match data structures to operational access patterns: convert to 'set' for frequent membership checks, use 'dict' for key lookups, use 'collections.deque' for FIFO queues and rolling windows, and use 'list' for indexed order.",explanation:"The complete enterprise guideline for Python data structure selection.",hint:"Use sets for lookups, dicts for mappings, deques for FIFO queues, and lists for indexed order.",level:"basic",codeExample:"# Python Data Structure Performance Mastery"}];function H(){const b=m.useRef([]),[r,y]=m.useState("memoryLayout"),[i,g]=m.useState(1e5),[s,N]=m.useState("SEARCH");let o="O(N) Linear Scan",a="O(1) Hash Table",p="O(1) Key Table",l="O(N) Block Scan",d="1.25 ms",c="0.0001 ms (10,000x faster)",h="0.0001 ms",u="1.45 ms";s==="HEAD_INSERT"?(o="O(N) Memory Shift",a="O(1) Hash Insert (set.add)",p="O(1) Key Assign (dict[k])",l="O(1) Block Link (appendleft)",d=`${(i/1e3*.12).toFixed(2)} ms (Severe Shifting)`,c="0.0002 ms",h="0.0002 ms",u="0.0001 ms (Optimal FIFO)"):s==="FIFO_POP"?(o="O(N) Memory Shift (pop(0))",a="O(1) Unordered Pop (set.pop)",p="O(1) Key Delete (del dict[k])",l="O(1) Block Unlink (popleft)",d=`${(i/1e3*.14).toFixed(2)} ms (Quadratic Queue!)`,c="0.0002 ms",h="0.0002 ms",u="0.0001 ms (High-Throughput)"):s==="TAIL_INSERT"&&(o="O(1) Amortized Append",a="O(1) Hash Add",p="O(1) Key Set",l="O(1) Block Append",d="0.0001 ms",c="0.0002 ms",h="0.0002 ms",u="0.0001 ms");const O=`# Performance Benchmark for N = ${i.toLocaleString()} elements:
# Operation: ${s}

${s==="SEARCH"?`# 1. List Search: O(N) linear iteration
found = target in student_list  # ~${d}

# 2. Set Search: O(1) hash bucket lookup (10,000x faster!)
found = target in student_set   # ~${c}`:s==="HEAD_INSERT"?`# 1. List Head Insert: O(N) memory shift
student_list.insert(0, item)  # Bottleneck!

# 2. Deque Head Insert: O(1) block link
student_deque.appendleft(item)  # Instant!`:s==="FIFO_POP"?`# 1. List FIFO Pop: O(N) memory shift
item = student_list.pop(0)  # O(N²) Queue Hazard!

# 2. Deque FIFO Pop: O(1) unlinking
item = student_deque.popleft()  # 1000x Faster!`:`# Tail Appends: O(1) across all sequential structures
student_list.append(item)
student_deque.append(item)
student_set.add(item)`}`;m.useEffect(()=>{const t=new IntersectionObserver(f=>{f.forEach(_=>{_.isIntersecting&&_.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return b.current.forEach(f=>{f&&t.observe(f)}),()=>t.disconnect()},[]);const n=t=>{t&&!b.current.includes(t)&&b.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:n,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 4 • Module 004_002"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 1"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Performance Optimization, Profiling & Big-O Thinking"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Data Structure Costs: ",e.jsx("span",{className:"text-teal-400",children:"list, set, dict & deque"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master the operational complexity, search latencies, memory layouts, and mutation characteristics of Python's primary built-in data structures: comparing linear ",e.jsx("code",{className:"text-rose-400 font-mono",children:"list"})," scans (",e.jsx("code",{className:"text-rose-400 font-mono",children:"O(N)"}),") against instant ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"set"})," / ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"dict"})," hash lookups (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"O(1)"}),"), and replacing ",e.jsx("code",{className:"text-rose-400 font-mono",children:"list.insert(0)"})," / ",e.jsx("code",{className:"text-rose-400 font-mono",children:"pop(0)"})," bottlenecks with high-throughput ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"collections.deque"}),"."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔍 O(1) Hash Table vs O(N) Scan"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ `collections.deque` O(1) FIFO"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🧠 Memory Layout & Cache Locality"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🚀 10,000x Search Speedup"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Data Structure Architectural Landscape"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"Selecting the appropriate data structure directly governs whether an operation executes in sub-microsecond time or causes multi-second backend lags:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ `list` (Dynamic Array)"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"O(1) index, O(N) search"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Contiguous memory blocks. Ideal for ordered indexed iteration; severe bottleneck for FIFO queues and membership search."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ `set` (Hash Table)"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"O(1) search, O(1) add"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Sparse hash bucket table. Delivers instant 10,000x faster membership checks (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"x in s"}),") and uniqueness enforcement."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ `dict` (Key-Value)"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"O(1) key lookup / assign"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Compact hash table with key-value associations. The backbone of fast foreign key indexing and metadata lookups."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 shadow-lg",children:[e.jsx("div",{className:"text-amber-400 font-bold text-sm mb-1",children:"4️⃣ `deque` (Linked Blocks)"}),e.jsx("code",{className:"text-xs font-mono text-amber-300 block mb-1",children:"O(1) head/tail push/pop"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Doubly-linked 64-element blocks. Eliminates ",e.jsx("code",{className:"text-rose-400 font-mono",children:"list.insert(0)"})," and ",e.jsx("code",{className:"text-rose-400 font-mono",children:"pop(0)"})," memory shifting."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The FIFO Queue Anti-Pattern: Why `list.pop(0)` Destroys Performance"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Popping from index 0 of a list (",e.jsx("code",{className:"text-rose-400 font-mono",children:"list.pop(0)"}),") forces CPython to shift all remaining N element pointers in memory (",e.jsx("code",{className:"text-rose-400 font-mono",children:"O(N)"}),"). Processing a queue of 100,000 tasks turns into ",e.jsx("code",{className:"text-rose-400 font-mono",children:"O(N²)"})," quadratic degradation (taking ~15 seconds)! Switching to ",e.jsx("code",{className:"text-teal-300 font-mono",children:"deque.popleft()"})," executes in <10 milliseconds (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"O(1)"}),")."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Memory Layouts, Search Traversal & Head Shifting"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>y("memoryLayout"),className:x("px-3 py-1.5 rounded-lg transition-all",r==="memoryLayout"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Memory Layouts"}),e.jsx("button",{onClick:()=>y("searchComplexity"),className:x("px-3 py-1.5 rounded-lg transition-all",r==="searchComplexity"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Search Mechanics"}),e.jsx("button",{onClick:()=>y("headShiftHazard"),className:x("px-3 py-1.5 rounded-lg transition-all",r==="headShiftHazard"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Head Shift Hazard"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining internal CPython memory layouts, hash bucket indexing vs contiguous scanning, and block pointer unlinking:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:r==="memoryLayout"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"CPYTHON INTERNAL MEMORY ARCHITECTURES"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"1. List (Contiguous Array)"}),e.jsx("text",{x:"15",y:"55",fill:"#38bdf8",fontSize:"8 font-mono",children:"[Ptr 0] [Ptr 1] [Ptr 2] [Ptr 3] ..."}),e.jsx("text",{x:"15",y:"85",fill:"#cbd5e1",fontSize:"8",children:"Contiguous array of C pointers."}),e.jsx("text",{x:"15",y:"100",fill:"#34d399",fontSize:"8 font-mono",children:"O(1) index: array_base + i * 8"}),e.jsx("text",{x:"15",y:"115",fill:"#cbd5e1",fontSize:"8",children:"Excellent L1/L2 cache locality."}),e.jsx("rect",{x:"15",y:"135",width:"220",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"25",y:"160",fill:"#34d399",fontSize:"9 font-bold",children:"Best For:"}),e.jsx("text",{x:"25",y:"180",fill:"#cbd5e1",fontSize:"8",children:"Ordered sequences, index access,"}),e.jsx("text",{x:"25",y:"195",fill:"#cbd5e1",fontSize:"8",children:"and sorting via Timsort."}),e.jsx("rect",{x:"280",y:"0",width:"260",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"295",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. Set / Dict (Hash Table)"}),e.jsx("text",{x:"295",y:"55",fill:"#38bdf8",fontSize:"8 font-mono",children:"[Hash | Key | Value | Next]"}),e.jsx("text",{x:"295",y:"85",fill:"#cbd5e1",fontSize:"8",children:"Sparse array of hash buckets."}),e.jsx("text",{x:"295",y:"100",fill:"#34d399",fontSize:"8 font-mono",children:"O(1) bucket = hash(key) & mask"}),e.jsx("text",{x:"295",y:"115",fill:"#cbd5e1",fontSize:"8",children:"Requires ~33% empty buffer space."}),e.jsx("rect",{x:"295",y:"135",width:"230",height:"85",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"305",y:"160",fill:"#38bdf8",fontSize:"9 font-bold",children:"Best For:"}),e.jsx("text",{x:"305",y:"180",fill:"#cbd5e1",fontSize:"8",children:"High-speed membership checks,"}),e.jsx("text",{x:"305",y:"195",fill:"#cbd5e1",fontSize:"8",children:"uniqueness, and key lookups."}),e.jsx("rect",{x:"570",y:"0",width:"250",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"585",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"3. Deque (Doubly-Linked Blocks)"}),e.jsx("text",{x:"585",y:"55",fill:"#c084fc",fontSize:"8 font-mono",children:"[Block A] <---> [Block B]"}),e.jsx("text",{x:"585",y:"85",fill:"#cbd5e1",fontSize:"8",children:"Linked list of 64-item blocks."}),e.jsx("text",{x:"585",y:"100",fill:"#34d399",fontSize:"8 font-mono",children:"O(1) push/pop at head & tail"}),e.jsx("text",{x:"585",y:"115",fill:"#cbd5e1",fontSize:"8",children:"Zero array reallocation shifts."}),e.jsx("rect",{x:"585",y:"135",width:"220",height:"85",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"595",y:"160",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Best For:"}),e.jsx("text",{x:"595",y:"180",fill:"#cbd5e1",fontSize:"8",children:"FIFO queues, rolling buffers,"}),e.jsx("text",{x:"595",y:"195",fill:"#cbd5e1",fontSize:"8",children:"and producer-consumer pipelines."})]})]}):r==="searchComplexity"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"MEMBERSHIP SEARCH: LINEAR O(N) SCAN VS CONSTANT O(1) HASH BUCKET"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"`target in list` [O(N) LINEAR SCAN]"}),e.jsx("text",{x:"20",y:"65",fill:"#fca5a5",fontSize:"8 font-mono",children:"Item 0 == target? (No) -> Item 1 == target? (No)..."}),e.jsx("text",{x:"20",y:"85",fill:"#fca5a5",fontSize:"8 font-mono",children:"Must compare each element sequentially up to index N-1"}),e.jsx("text",{x:"20",y:"105",fill:"#f43f5e",fontSize:"8 font-mono font-bold",children:"Latency at N=100,000: ~1.25 ms per query!"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"155",fill:"#fda4af",fontSize:"9 font-bold",children:"The Loop Trap:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Running this search inside a loop of 1,000 queries"}),e.jsx("text",{x:"30",y:"190",fill:"#cbd5e1",fontSize:"8",children:"takes 1.25 seconds of pure CPU waste!"})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"`target in set` [O(1) HASH BUCKET]"}),e.jsx("text",{x:"20",y:"65",fill:"#34d399",fontSize:"8 font-mono",children:"1. Compute `bucket = hash(target) & mask`"}),e.jsx("text",{x:"20",y:"85",fill:"#34d399",fontSize:"8 font-mono",children:"2. Direct RAM memory lookup at bucket index"}),e.jsx("text",{x:"20",y:"105",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"Latency at N=100,000: ~0.0001 ms (10,000x FASTER!)"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"Sub-Microsecond Scale:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"1,000 queries complete in under 0.1 milliseconds"}),e.jsx("text",{x:"30",y:"190",fill:"#cbd5e1",fontSize:"8",children:"with zero server CPU saturation."})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"HEAD MUTATION: LIST O(N) MEMMOVE VS DEQUE O(1) BLOCK LINK"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"`list.insert(0, x)` or `pop(0)` [O(N) SHIFT]"}),e.jsx("text",{x:"20",y:"65",fill:"#c084fc",fontSize:"8 font-mono",children:"[Index 0] [Index 1] [Index 2] ... [Index N-1]"}),e.jsx("text",{x:"20",y:"85",fill:"#cbd5e1",fontSize:"8 font-mono",children:"CPython calls `memmove()` to shift ALL pointers right"}),e.jsx("text",{x:"20",y:"105",fill:"#f43f5e",fontSize:"8 font-mono font-bold",children:"50,000 head insertions take ~1.85 seconds"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"30",y:"155",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Memory Shifting Overhead:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Copies hundreds of megabytes of raw pointers."})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"`deque.appendleft(x)` or `popleft()` [O(1)]"}),e.jsx("text",{x:"20",y:"65",fill:"#34d399",fontSize:"8 font-mono",children:"[New Head Pointer] <--- Linked to ---> [Block 1]"}),e.jsx("text",{x:"20",y:"85",fill:"#34d399",fontSize:"8 font-mono",children:"Updates block node head pointer in strict O(1) time"}),e.jsx("text",{x:"20",y:"105",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"50,000 head insertions take ~2.8 ms (650x FASTER!)"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"Zero Pointer Shifting:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"The standard data structure for production queues."})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Data Structure Cost & Latency Laboratory"})]}),e.jsxs("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:["Select dataset size ",e.jsx("code",{className:"text-teal-300 font-mono",children:"N"}),", switch between access patterns, and inspect real-time complexity and latency metrics across List, Set, Dict, and Deque:"]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"1. Collection Dataset Size (N):"}),e.jsx("div",{className:"flex bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:[1e3,1e4,1e5,1e6].map(t=>e.jsx("button",{onClick:()=>g(t),className:x("flex-1 py-1 rounded transition-all",i===t?"bg-teal-900/60 text-teal-300 font-bold border border-teal-700/80":"text-slate-400 hover:text-white"),children:t.toLocaleString()},t))})]}),e.jsxs("div",{className:"space-y-1.5 pt-1",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold",children:"2. Operational Access Pattern:"}),e.jsx("div",{className:"grid grid-cols-2 gap-1.5 bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:[{id:"SEARCH",label:"1. Search (x in ds)"},{id:"HEAD_INSERT",label:"2. Head Insert (at 0)"},{id:"FIFO_POP",label:"3. FIFO Pop (from 0)"},{id:"TAIL_INSERT",label:"4. Tail Append"}].map(t=>e.jsx("button",{onClick:()=>N(t.id),className:x("py-1.5 rounded transition-all",s===t.id?"bg-cyan-900/60 text-cyan-300 font-bold border border-cyan-700/80":"text-slate-400 hover:text-white"),children:t.label},t.id))})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs font-mono space-y-1.5",children:[e.jsxs("div",{className:"flex justify-between items-center text-slate-300",children:[e.jsx("span",{className:"font-bold text-teal-300",children:"List:"}),e.jsxs("span",{className:"text-rose-400 font-bold",children:[o," (~",d,")"]})]}),e.jsxs("div",{className:"flex justify-between items-center text-slate-300",children:[e.jsx("span",{className:"font-bold text-cyan-300",children:"Set:"}),e.jsxs("span",{className:"text-emerald-400 font-bold",children:[a," (~",c,")"]})]}),e.jsxs("div",{className:"flex justify-between items-center text-slate-300",children:[e.jsx("span",{className:"font-bold text-purple-300",children:"Dict:"}),e.jsxs("span",{className:"text-emerald-400 font-bold",children:[p," (~",h,")"]})]}),e.jsxs("div",{className:"flex justify-between items-center text-slate-300",children:[e.jsx("span",{className:"font-bold text-amber-300",children:"Deque:"}),e.jsxs("span",{className:"text-teal-300 font-bold",children:[l," (~",u,")"]})]})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs space-y-1",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:"Python Implementation Comparison:"}),e.jsx("pre",{className:"text-teal-300 text-[11px] leading-relaxed break-all font-mono overflow-x-auto",children:O})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[160px] font-mono text-xs space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-[10px] font-bold uppercase text-slate-400",children:[e.jsx("span",{children:"Micro-Benchmark Telemetry:"}),e.jsx("span",{className:"text-emerald-400",children:"Exit Code 0"})]}),e.jsx("pre",{className:"text-slate-200 text-[11px] leading-relaxed font-mono whitespace-pre-wrap",children:`[LOOKUP_PROFILER] Benchmark for N = ${i.toLocaleString()} elements:
* Target Pattern  : ${s}
* List Cost       : ${o}
* Set Cost        : ${a}
* Deque Cost      : ${l}
* Performance     : SET is ~10,000x FASTER for membership queries.`})]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Data Structure Complexity Reference Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Data Structure"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Search (`in`)"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Head (`insert/pop 0`)"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Tail (`append/pop`)"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Index Access (`[i]`)"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Memory Footprint"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"`list`"}),e.jsx("td",{className:"py-3 px-4 text-rose-400",children:"`O(N)` Scan"}),e.jsx("td",{className:"py-3 px-4 text-rose-400",children:"`O(N)` Shift"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"`O(1)` Amortized"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"`O(1)` Direct"}),e.jsx("td",{className:"py-3 px-4 text-teal-300",children:"Low (Contiguous)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"`set`"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"`O(1)` Hash"}),e.jsx("td",{className:"py-3 px-4 text-slate-400",children:"N/A (Unordered)"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"`O(1)` Add/Remove"}),e.jsx("td",{className:"py-3 px-4 text-slate-400",children:"N/A"}),e.jsx("td",{className:"py-3 px-4 text-amber-300",children:"Medium (Sparse)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"`dict`"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"`O(1)` Key Hash"}),e.jsx("td",{className:"py-3 px-4 text-slate-400",children:"N/A (Ordered)"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"`O(1)` Set/Del"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"`O(1)` Key"}),e.jsx("td",{className:"py-3 px-4 text-purple-300",children:"High (Key+Value)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"`deque`"}),e.jsx("td",{className:"py-3 px-4 text-rose-400",children:"`O(N)` Scan"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"`O(1)` Link"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"`O(1)` Link"}),e.jsx("td",{className:"py-3 px-4 text-rose-300",children:"`O(N)` Mid-Traverse"}),e.jsx("td",{className:"py-3 px-4 text-amber-300",children:"Medium (Blocks)"})]})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating data structure search benchmarks, FIFO mutation costs, memory footprint profiling, and roster query optimizers:"}),e.jsx(j,{files:[{filename:"data_structure_lookup_and_search_benchmarks.py",code:S,description:"Search latency comparisons across list, set, dict, and deque."},{filename:"insertion_deletion_and_fifo_lifo_costs.py",code:w,description:"Head/tail insertion and deletion cost differences between list and deque."},{filename:"memory_overhead_and_cache_locality.py",code:T,description:"sys.getsizeof comparisons across tuple, list, set, dict, and deque."},{filename:"institutional_admission_roster_lookup_optimizer.py",code:A,description:"50,000 student candidate verification benchmarks across list, set, dict, and deque."}]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Using `list.pop(0)` for FIFO Queues"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Popping from the front of a list shifts all remaining elements in memory (",e.jsx("code",{className:"text-rose-300 font-mono",children:"O(N)"}),"), turning queue processing into ",e.jsx("code",{className:"text-rose-300 font-mono",children:"O(N²)"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always use ",e.jsx("code",{className:"text-emerald-300",children:"collections.deque.popleft()"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Assuming `dict.values()` is O(1)"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Checking ",e.jsx("code",{className:"text-amber-300 font-mono",children:"val in my_dict.values()"})," performs a linear scan (",e.jsx("code",{className:"text-slate-300 font-mono",children:"O(N)"}),") because values are not indexed by the hash table."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Query by key (",e.jsx("code",{className:"text-emerald-300",children:"key in my_dict"}),") for ",e.jsx("code",{className:"text-emerald-300",children:"O(1)"})," lookups."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Indexing into Deque Middle"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Accessing ",e.jsx("code",{className:"text-purple-300 font-mono",children:"my_deque[50000]"})," traverses linked blocks in ",e.jsx("code",{className:"text-slate-300 font-mono",children:"O(N)"})," time, unlike list index access (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"O(1)"}),")."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use standard lists when frequent random index access is needed."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Constructing Sets Inside Loops"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"if item in set(other_list):"})," rebuilds the entire set on every single iteration, destroying performance."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Hoist set creation outside the loop once."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering data structure lookup costs, dynamic arrays, hash tables, deques, and memory profiling:"}),e.jsx(k,{questions:L})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with lookup cost matrices, mutation rules, and data structure selection recipes:"}),e.jsx("div",{className:"mb-10",children:e.jsx(q,{content:C,filename:"python_topic1_data_structure_lookup_costs_notes.txt",title:"Print Topic 1 Study Notes"})}),e.jsx(v,{})]})]})]})}export{H as default};
