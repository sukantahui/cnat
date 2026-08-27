import{b as d,j as e,bg as m}from"./vendor-react-core-Doz9nIC6.js";import{P as h}from"./PythonFileLoader-hCi5osN-.js";import{P as g}from"./PlainTextPrint-C08xhKA4.js";import{F as y}from"./FAQTemplate-CkSqDH4B.js";import{T as b}from"./TeacherSukantaHui-CC0AKmkm.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const _=`"""\r
# Module: 004_004_capstone-projects\r
# Topic 5: Top Python Technical Interview Questions & Coding Challenges\r
# File: python_internals_memory_gil_mro.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Deep dive into CPython runtime internals: Reference Counting, Cyclic GC,\r
#              C3 Linearization MRO, Mutable Defaults, and __slots__.\r
"""\r
\r
import sys\r
import gc\r
\r
# 1. C3 LINEARIZATION / METHOD RESOLUTION ORDER (MRO)\r
class BaseService:\r
    def execute(self) -> str:\r
        return "BaseService"\r
\r
class AuditService(BaseService):\r
    def execute(self) -> str:\r
        return f"Audit -> {super().execute()}"\r
\r
class AdmissionService(BaseService):\r
    def execute(self) -> str:\r
        return f"Admission -> {super().execute()}"\r
\r
class MultiCampusCoordinator(AuditService, AdmissionService):\r
    """Multiple inheritance MRO resolution order."""\r
    def execute(self) -> str:\r
        return f"Coordinator -> {super().execute()}"\r
\r
# 2. MUTABLE DEFAULT ARGUMENT TRAP & FIX\r
def buggy_append_enrollment(student: str, registry: list[str] = []) -> list[str]:\r
    registry.append(student)\r
    return registry\r
\r
def safe_append_enrollment(student: str, registry: list[str] | None = None) -> list[str]:\r
    if registry is None:\r
        registry = []\r
    registry.append(student)\r
    return registry\r
\r
# 3. __slots__ MEMORY OPTIMIZATION\r
class RegularStudent:\r
    def __init__(self, sid: str, name: str):\r
        self.sid = sid\r
        self.name = name\r
\r
class SlottedStudent:\r
    __slots__ = ("sid", "name")\r
    def __init__(self, sid: str, name: str):\r
        self.sid = sid\r
        self.name = name\r
\r
def test_internals():\r
    print("   [...] Testing CPython Memory, MRO & Slots Internals...")\r
\r
    # 1. MRO Verification (C3 Linearization)\r
    mro_names = [cls.__name__ for cls in MultiCampusCoordinator.__mro__]\r
    assert mro_names == ["MultiCampusCoordinator", "AuditService", "AdmissionService", "BaseService", "object"]\r
    print(f"   [PASS] 1. C3 Linearization MRO Order: {' -> '.join(mro_names)}")\r
\r
    # 2. Mutable Defaults Trap Verification\r
    b1 = buggy_append_enrollment("Mamata")\r
    b2 = buggy_append_enrollment("Mahima")\r
    assert b1 is b2 and len(b1) == 2, "Buggy function mutated shared default list"\r
    print("   [PASS] 2. Mutable default trap demonstrated (shared heap list instance)")\r
\r
    s1 = safe_append_enrollment("Mamata")\r
    s2 = safe_append_enrollment("Mahima")\r
    assert s1 is not s2 and len(s1) == 1 and len(s2) == 1\r
    print("   [PASS] 3. Safe default (target=None) verified with independent instances")\r
\r
    # 3. Memory Slots Check\r
    regular = RegularStudent("STU_BP_01", "Mamata")\r
    slotted = SlottedStudent("STU_BP_01", "Mamata")\r
    assert hasattr(regular, "__dict__")\r
    assert not hasattr(slotted, "__dict__")\r
    print("   [PASS] 4. __slots__ eliminated dynamic __dict__ heap overhead")\r
\r
def main():\r
    print("=" * 75)\r
    print("[CPYTHON INTERNALS] Memory, MRO, GIL & Slots Mastery")\r
    print("=" * 75)\r
\r
    test_internals()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Mastering CPython reference counting, C3 linearization, and")\r
    print("           memory layouts separates senior engineers from juniors in interviews.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,v=`"""\r
# Module: 004_004_capstone-projects\r
# Topic 5: Top Python Technical Interview Questions & Coding Challenges\r
# File: algorithmic_coding_challenges_solutions.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: High-frequency Python interview coding challenges: LRU Cache in O(1),\r
#              Two Sum HashMap, and Sliding Window.\r
"""\r
\r
from collections import OrderedDict\r
from typing import Any\r
\r
# ------------------------------------------------------------------------------\r
# 1. LRU CACHE (LEAST RECENTLY USED) IN O(1) TIME\r
# ------------------------------------------------------------------------------\r
class LRUCache:\r
    """Least Recently Used (LRU) Cache operating in O(1) get and put time."""\r
    def __init__(self, capacity: int):\r
        if capacity <= 0:\r
            raise ValueError("Capacity must be positive.")\r
        self.capacity = capacity\r
        self.cache: OrderedDict[str, Any] = OrderedDict()\r
\r
    def get(self, key: str) -> Any:\r
        if key not in self.cache:\r
            return -1\r
        # Move accessed key to the right (most recently used)\r
        self.cache.move_to_end(key)\r
        return self.cache[key]\r
\r
    def put(self, key: str, value: Any) -> None:\r
        if key in self.cache:\r
            self.cache.move_to_end(key)\r
        self.cache[key] = value\r
\r
        # Evict oldest from the left if capacity exceeded\r
        if len(self.cache) > self.capacity:\r
            self.cache.popitem(last=False)\r
\r
# ------------------------------------------------------------------------------\r
# 2. TWO SUM IN O(N) TIME & O(N) SPACE\r
# ------------------------------------------------------------------------------\r
def two_sum(nums: list[int], target: int) -> list[int]:\r
    """Finds indices of two numbers that add up to target in O(n) time."""\r
    seen: dict[int, int] = {}\r
    for idx, num in enumerate(nums):\r
        complement = target - num\r
        if complement in seen:\r
            return [seen[complement], idx]\r
        seen[num] = idx\r
    return []\r
\r
# ------------------------------------------------------------------------------\r
# 3. SLIDING WINDOW MAXIMUM / SUBARRAY SUM IN O(N) TIME\r
# ------------------------------------------------------------------------------\r
def max_consecutive_sum(nums: list[int], k: int) -> int:\r
    """Finds maximum sum of any contiguous subarray of size k in O(n) time."""\r
    if len(nums) < k or k <= 0:\r
        return 0\r
    \r
    current_sum = sum(nums[:k])\r
    max_sum = current_sum\r
\r
    for i in range(k, len(nums)):\r
        current_sum += nums[i] - nums[i - k]\r
        max_sum = max(max_sum, current_sum)\r
\r
    return max_sum\r
\r
def test_algorithms():\r
    print("   [...] Testing Classic Interview Algorithms & Data Structures...")\r
\r
    # 1. LRU Cache Verification\r
    lru = LRUCache(2)\r
    lru.put("STU_BP_01", "Mamata")\r
    lru.put("STU_CC_01", "Mahima")\r
    assert lru.get("STU_BP_01") == "Mamata" # Marks Mamata as MRU\r
\r
    lru.put("STU_IC_01", "Abhronila")      # Evicts Mahima (LRU)\r
    assert lru.get("STU_CC_01") == -1       # Mahima evicted\r
    assert lru.get("STU_BP_01") == "Mamata" # Mamata retained\r
    print("   [PASS] 1. O(1) LRU Cache operations and eviction verified")\r
\r
    # 2. Two Sum Verification\r
    indices = two_sum([2, 7, 11, 15], 9)\r
    assert indices == [0, 1]\r
    print(f"   [PASS] 2. Two Sum O(n) Hash Map found indices: {indices}")\r
\r
    # 3. Sliding Window Verification\r
    max_fee = max_consecutive_sum([1000, 2500, 3000, 1500, 5000], 3)\r
    assert max_fee == 9500 # [3000, 1500, 5000]\r
    print(f"   [PASS] 3. Sliding Window Max Sum (k=3): Rs. {max_fee:,}")\r
\r
def main():\r
    print("=" * 75)\r
    print("[ALGORITHMIC CHALLENGES] High-Frequency Technical Interview Solutions")\r
    print("=" * 75)\r
\r
    test_algorithms()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Using optimal data structures (HashMaps, OrderedDict, Two Pointers)")\r
    print("           achieves linear O(n) and constant O(1) interview solutions.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,w=`"""\r
# Module: 004_004_capstone-projects\r
# Topic 5: Top Python Technical Interview Questions & Coding Challenges\r
# File: concurrency_and_asyncio_interview_patterns.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating Threading vs Multiprocessing vs Asyncio paradigms.\r
"""\r
\r
import asyncio\r
import time\r
from typing import Any\r
\r
# 1. ASYNCIO CONCURRENT TASK RUNNER\r
async def fetch_campus_ledger_async(campus: str, delay: float) -> dict[str, Any]:\r
    """Simulates asynchronous non-blocking I/O network call."""\r
    await asyncio.sleep(delay)\r
    return {"campus": campus, "status": "SYNCED", "latency": delay}\r
\r
async def run_concurrent_campus_sync():\r
    """Runs multiple asynchronous I/O operations concurrently with asyncio.gather."""\r
    start_time = time.perf_counter()\r
    results = await asyncio.gather(\r
        fetch_campus_ledger_async("Barrackpore", 0.05),\r
        fetch_campus_ledger_async("Kolkata", 0.05),\r
        fetch_campus_ledger_async("Ichapur", 0.05)\r
    )\r
    elapsed = time.perf_counter() - start_time\r
    return results, elapsed\r
\r
def test_asyncio_concurrency():\r
    print("   [...] Testing Asyncio Event Loop Concurrency...")\r
    results, elapsed = asyncio.run(run_concurrent_campus_sync())\r
    assert len(results) == 3\r
    # Total runtime should be ~0.05s instead of sequential 0.15s\r
    assert elapsed < 0.12, f"Asyncio concurrency was slower than expected: {elapsed:.3f}s"\r
    print(f"   [PASS] 1. 3 Async tasks completed concurrently in {elapsed*1000:.1f}ms (vs 150ms sequential)")\r
\r
def main():\r
    print("=" * 75)\r
    print("[CONCURRENCY PATTERNS] Asyncio Event Loop vs Threads vs Processes")\r
    print("=" * 75)\r
\r
    test_asyncio_concurrency()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Use Asyncio for thousands of concurrent network I/O sockets,")\r
    print("           Threading for legacy I/O, and Multiprocessing for CPU bound loads.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,j=`"""\r
# Module: 004_004_capstone-projects\r
# Topic 5: Top Python Technical Interview Questions & Coding Challenges\r
# File: institutional_interview_technical_assessment.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Live technical interview assessment combining LRU Caching,\r
#              Big-O query optimization, and thread-safe data pipelines.\r
"""\r
\r
from collections import OrderedDict\r
from dataclasses import dataclass\r
import threading\r
from typing import Optional\r
\r
@dataclass\r
class StudentDossier:\r
    sid: str\r
    name: str\r
    campus: str\r
    tuition_balance: float\r
\r
class ThreadSafeStudentCache:\r
    """Production thread-safe LRU cache for student profile lookups."""\r
    def __init__(self, capacity: int = 100):\r
        self.capacity = capacity\r
        self._cache: OrderedDict[str, StudentDossier] = OrderedDict()\r
        self._lock = threading.Lock()\r
\r
    def get(self, sid: str) -> Optional[StudentDossier]:\r
        with self._lock:\r
            if sid not in self._cache:\r
                return None\r
            self._cache.move_to_end(sid)\r
            return self._cache[sid]\r
\r
    def put(self, student: StudentDossier) -> None:\r
        with self._lock:\r
            if student.sid in self._cache:\r
                self._cache.move_to_end(student.sid)\r
            self._cache[student.sid] = student\r
            if len(self._cache) > self.capacity:\r
                self._cache.popitem(last=False)\r
\r
def test_interview_assessment():\r
    print("   [...] Running Institutional Live Technical Interview Assessment...")\r
    cache = ThreadSafeStudentCache(capacity=2)\r
\r
    s1 = StudentDossier("STU_BP_01", "Mamata", "Barrackpore", 10000.0)\r
    s2 = StudentDossier("STU_CC_01", "Mahima", "Kolkata", 12500.0)\r
    s3 = StudentDossier("STU_IC_01", "Abhronila", "Ichapur", 0.0)\r
\r
    # 1. Populate cache\r
    cache.put(s1)\r
    cache.put(s2)\r
    assert cache.get("STU_BP_01") is not None # Marks Mamata as MRU\r
\r
    # 2. Add 3rd student (triggers eviction of Mahima)\r
    cache.put(s3)\r
    assert cache.get("STU_CC_01") is None # Mahima evicted\r
    assert cache.get("STU_BP_01") is not None # Mamata kept\r
    assert cache.get("STU_IC_01") is not None # Abhronila present\r
    print("   [PASS] 1. Thread-Safe O(1) LRU eviction policy passed live assessment")\r
\r
def main():\r
    print("=" * 80)\r
    print("[CASE STUDY] Live Python Technical Interview Coding Challenge")\r
    print("=" * 80)\r
\r
    test_interview_assessment()\r
\r
    print("=" * 80)\r
    print("[TAKEAWAY] Combining synchronization primitives (threading.Lock) with")\r
    print("           optimal data structures (OrderedDict) proves senior competence.")\r
    print("=" * 80)\r
\r
if __name__ == "__main__":\r
    main()\r
`,C=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 4: PRO LEVEL • MODULE 004_004: CAPSTONE PROJECTS\r
           TOPIC 5: TOP PYTHON TECHNICAL INTERVIEW QUESTIONS & CODING CHALLENGES\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. CPYTHON RUNTIME INTERNALS CHEATSHEET\r
--------------------------------------------------------------------------------\r
  1. Memory Management:\r
     - Primary: Reference Counting (freed immediately when count reaches 0)\r
     - Secondary: Generational Cyclic Garbage Collector (Gen 0, 1, 2 for circular refs)\r
  \r
  2. GIL (Global Interpreter Lock):\r
     - A mutex that prevents multiple native threads from executing Python bytecodes simultaneously\r
     - I/O-bound tasks: Use threading or asyncio (GIL released during OS I/O calls)\r
     - CPU-bound tasks: Use multiprocessing (separate processes, separate GILs, separate memory)\r
\r
  3. MRO (Method Resolution Order):\r
     - Uses C3 Linearization algorithm to determine method inheritance order\r
     - Check order via: ClassName.__mro__ or ClassName.mro()\r
\r
--------------------------------------------------------------------------------\r
2. CLASSIC CODING CHALLENGES\r
--------------------------------------------------------------------------------\r
  1. LRU Cache (Least Recently Used) in O(1):\r
     from collections import OrderedDict\r
     class LRUCache:\r
         def __init__(self, capacity: int):\r
             self.cap = capacity\r
             self.cache = OrderedDict()\r
         def get(self, key):\r
             if key not in self.cache: return -1\r
             self.cache.move_to_end(key)\r
             return self.cache[key]\r
         def put(self, key, val):\r
             if key in self.cache: self.cache.move_to_end(key)\r
             self.cache[key] = val\r
             if len(self.cache) > self.cap: self.cache.popitem(last=False)\r
\r
--------------------------------------------------------------------------------\r
3. HIGH-FREQUENCY INTERVIEW TRAPS\r
--------------------------------------------------------------------------------\r
  - Trap 1: def append_to(x, target=[]):  # Mutates across function calls!\r
            # FIX: def append_to(x, target=None): if target is None: target = []\r
  - Trap 2: late binding closures in loops (use lambda x=i: x * 2)\r
  - Trap 3: 'is' (identity comparison) vs '==' (equality comparison)\r
\r
================================================================================\r
       END OF STUDY NOTE • TOPIC 5: TECHNICAL INTERVIEW MASTERY\r
================================================================================\r
`,N=[{question:"How does CPython manage memory and reclaim unused objects?",shortAnswer:"CPython uses Reference Counting as its primary memory management mechanism (deallocating an object immediately when its reference count drops to 0), supplemented by a Generational Cyclic Garbage Collector (Generations 0, 1, 2) to detect and reclaim isolated circular references.",explanation:"Reference counting combined with generational cyclic garbage collection.",hint:"Reference counting for immediate deallocation + cyclic generational GC for circular loops.",level:"moderate",codeExample:`import sys, gc
sys.getrefcount(obj) # Inspect ref count
gc.collect() # Trigger cyclic GC`},{question:"What is the Global Interpreter Lock (GIL) and how does it affect multi-threaded Python programs?",shortAnswer:"The GIL is a mutex that protects access to Python objects, preventing multiple native OS threads from executing Python bytecodes simultaneously; CPU-bound tasks do not achieve parallelism with threading, whereas I/O-bound tasks release the GIL during network/disk wait times.",explanation:"The GIL mutex and its concurrency implications.",hint:"Mutex allowing only one thread to execute bytecodes at a time; affects CPU-bound concurrency.",level:"moderate",codeExample:"# CPU-bound: use multiprocessing.Pool | I/O-bound: use threading or asyncio"},{question:"What is the 'Mutable Default Argument' trap in Python and how do you fix it?",shortAnswer:"Default parameter values are evaluated once when the function definition is executed, not at each call; passing a mutable object (e.g. 'def add(item, target=[])') shares that exact same list instance across all future function invocations. Fix it using 'target=None' and initializing inside the body.",explanation:"Function definition-time evaluation of default parameters.",hint:"Default arguments are evaluated once at definition time; use 'def f(x, target=None):' instead.",level:"basic",codeExample:`def append_item(item, target=None):
    if target is None: target = []
    target.append(item)
    return target`},{question:"How is Method Resolution Order (MRO) computed in Python 3 multiple inheritance?",shortAnswer:"Python uses the C3 Linearization algorithm to compute a deterministic, monotonic class hierarchy order that respects local precedence ordering and monotonicity; inspect it via 'ClassName.__mro__' or 'ClassName.mro()'.",explanation:"C3 Linearization algorithm and multiple inheritance order.",hint:"Uses C3 Linearization; inspect with ClassName.__mro__.",level:"complex",codeExample:`class D(B, C): pass
print(D.__mro__) # (D, B, C, A, object)`},{question:"What is the difference between 'is' and '==' in Python?",shortAnswer:"'is' checks identity (whether two references point to the exact same memory address, 'id(a) == id(b)'); '==' checks equality (whether two objects have the same value, evaluated via '__eq__').",explanation:"Identity comparison vs value equality.",hint:"'is' checks memory address (identity); '==' checks value equality.",level:"basic",codeExample:`a = [1, 2]; b = [1, 2]
a == b # True (values match)
a is b # False (different heap objects)`},{question:"How do you implement an O(1) LRU (Least Recently Used) Cache in Python?",shortAnswer:"Using 'collections.OrderedDict' (combining hash map lookups with doubly-linked list ordering) or a custom dictionary paired with a Doubly Linked List; lookups move the accessed key to the end, and evictions remove from the head ('popitem(last=False)').",explanation:"LRU Cache architecture and constant time operations.",hint:"Use collections.OrderedDict with move_to_end() and popitem(last=False).",level:"moderate",codeExample:`from collections import OrderedDict
cache = OrderedDict()
cache.move_to_end(key) # Mark as recently used
cache.popitem(last=False) # Evict oldest`},{question:"What is the difference between 'copy.copy()' (shallow) and 'copy.deepcopy()' in Python?",shortAnswer:"'copy.copy()' creates a new container object but inserts references to the original child objects; 'copy.deepcopy()' recursively duplicates the container and all nested objects, creating completely independent copies.",explanation:"Shallow vs deep object duplication.",hint:"Shallow copies the top container only; deepcopy recursively copies all nested objects.",level:"basic",codeExample:`import copy
shallow = copy.copy(nested_list)
deep = copy.deepcopy(nested_list)`},{question:"What is the 'Late Binding Closures' trap in Python loops and how do you resolve it?",shortAnswer:"Variables in closures are looked up when the inner function is called, not when defined; creating lambdas in a loop ('[lambda: i for i in range(3)]') makes all functions return the final loop value (2). Fix by capturing current value as a default argument: 'lambda i=i: i'.",explanation:"Late binding closure scope resolution.",hint:"Closures resolve variables when called; use default parameter capture 'lambda i=i: i * 2'.",level:"moderate",codeExample:`funcs = [lambda i=i: i * 2 for i in range(3)]
[f() for f in funcs] # [0, 2, 4]`},{question:"What are Python Generators and why do they save memory over lists?",shortAnswer:"Generators produce items on demand one at a time using 'yield' rather than allocating all elements in memory simultaneously, allowing lazy evaluation of infinite or massive datasets in O(1) space.",explanation:"Lazy evaluation and constant space streaming via generators.",hint:"Produce values on demand via 'yield', maintaining state with O(1) memory overhead.",level:"basic",codeExample:`def count_up():
    n = 1
    while True: yield n; n += 1`},{question:"How do Context Managers ('with' statement) work under the hood?",shortAnswer:"Context managers implement the Context Management Protocol: '__enter__()' runs upon entering the block, returning a resource; '__exit__(exc_type, exc_val, exc_tb)' guarantees cleanup and handles exceptions even if an error occurs inside the block.",explanation:"The Context Management protocol (__enter__ and __exit__).",hint:"Implements __enter__() for setup and __exit__() for guaranteed cleanup/exception handling.",level:"basic",codeExample:`class ManagedFile:
    def __enter__(self): return self
    def __exit__(self, exc_type, exc_val, tb): pass`},{question:"What is the difference between Threading, Multiprocessing, and Asyncio in Python?",shortAnswer:"Threading uses OS threads (ideal for I/O-bound concurrency, limited by GIL for CPU); Multiprocessing spawns separate OS processes with separate memory and GILs (ideal for CPU-bound tasks); Asyncio uses a single-threaded cooperative event loop (ideal for high-concurrency network I/O with minimal memory overhead).",explanation:"Concurrency paradigm tradeoffs in Python.",hint:"Threading (I/O, shared memory), Multiprocessing (CPU, isolated memory), Asyncio (cooperative I/O event loop).",level:"moderate",codeExample:"# Multiprocessing: CPU-bound | Asyncio: Network/Web servers"},{question:"What are '__slots__' in Python classes and when should they be used?",shortAnswer:"'__slots__' replaces the default dynamic instance '__dict__' dictionary with a fixed-size array of attribute descriptors, reducing memory footprint by ~60% and speeding up attribute access when creating millions of small objects.",explanation:"Memory optimization via __slots__.",hint:"Replaces __dict__ with a fixed tuple, reducing instance memory by ~60%.",level:"moderate",codeExample:`class Student:
    __slots__ = ('sid', 'name', 'gpa')`},{question:"How does Python handle integer caching (Small Integer Caching)?",shortAnswer:"CPython pre-allocates an array of small integer objects in memory between -5 and 256; any integer in this range shares the same singleton object reference ('a = 100; b = 100; a is b' is True).",explanation:"Small integer optimization in CPython (-5 to 256).",hint:"Integers between -5 and 256 are cached singletons in CPython.",level:"basic",codeExample:`x = 256; y = 256; x is y # True
x = 1000; y = 1000; x is y # False`},{question:"What is the time complexity of common Python dict and list operations?",shortAnswer:"Dict: Lookups O(1) average / O(n) worst; Insertion O(1) avg; Deletion O(1) avg. List: Append O(1) amortized; Pop end O(1); Pop index 0 O(n); Search O(n).",explanation:"Big-O complexities of core Python data structures.",hint:"Dict lookup is O(1) avg; List append is O(1) amortized, but insert/pop at index 0 is O(n).",level:"basic",codeExample:"# Use collections.deque for O(1) left pop/append operations"},{question:"What is a 'Metaclass' in Python?",shortAnswer:"A metaclass is a class whose instances are classes themselves ('type' is the default metaclass); metaclasses allow customizing class creation, validating class attributes, or registering plugins at import time.",explanation:"Class instantiation and metamodel customization.",hint:"The blueprint that defines how classes are created; 'type' is the base metaclass.",level:"complex",codeExample:`class Meta(type):
    def __new__(cls, name, bases, dct): return super().__new__(cls, name, bases, dct)`},{question:"How do Python Decorators work under the hood?",shortAnswer:"A decorator is a higher-order function that takes a callable as input and returns a modified wrapper function; the '@decorator' syntax is syntactic sugar for 'fn = decorator(fn)'. Use 'functools.wraps' to preserve original metadata.",explanation:"Higher-order functions and syntactic sugar for decorators.",hint:"Higher-order function wrapping another function; @dec is sugar for fn = dec(fn).",level:"basic",codeExample:`from functools import wraps
def log(f):
    @wraps(f)
    def w(*a, **kw): return f(*a, **kw)
    return w`},{question:"What is the difference between '__repr__' and '__str__'?",shortAnswer:"'__str__' is intended for end-user readable output ('print(obj)'); '__repr__' is intended for unambiguous developer debugging, ideally evaluating back to the object ('eval(repr(obj)) == obj').",explanation:"String representation protocols in Python data model.",hint:"__str__ is user-friendly; __repr__ is unambiguous developer/debugger representation.",level:"basic",codeExample:`class Student:
    def __str__(self): return self.name
    def __repr__(self): return f'Student(sid={self.sid!r})'`},{question:"What is 'Monkey Patching' in Python and what are its risks?",shortAnswer:"Monkey patching is dynamically modifying a module, class, or function at runtime (often used in testing with 'unittest.mock'); in production, it can cause unpredictable side effects, race conditions, and difficult-to-trace bugs.",explanation:"Runtime modification of classes and modules.",hint:"Modifying classes/modules at runtime; useful in tests but risky in production.",level:"moderate",codeExample:`import math
math.sin = lambda x: 0 # Monkey patching (Risky in prod!)`},{question:"How do you solve the classic 'Two Sum' problem in O(n) time in Python?",shortAnswer:"Iterate through the list while maintaining a hash map (dictionary) of 'seen_numbers -> index'; for each element, check if 'target - num' exists in the dictionary in O(1) time.",explanation:"Two-sum hash map lookup algorithm.",hint:"Use a dictionary to store seen numbers and check for 'target - num' in O(1) time.",level:"basic",codeExample:`def two_sum(nums, target):
    seen = {}
    for i, n in enumerate(nums):
        if target - n in seen: return [seen[target - n], i]
        seen[n] = i`},{question:"What is the ultimate golden rule for acing Python technical interviews?",shortAnswer:"Master CPython internals (reference counting, cyclic GC, GIL, MRO, data model dunders), write clean idiomatic Python (list comprehensions, generators, context managers), optimize algorithmic complexities with Big-O analysis, and communicate design tradeoffs clearly.",explanation:"The complete senior Python technical interview mastery standard.",hint:"CPython internals + data model dunders + Big-O optimization + clear tradeoff communication.",level:"basic",codeExample:"# Senior Python Technical Interview Mastery"}];function L(){const x=d.useRef([]),[s,f]=d.useState("memoryInternals"),[r,p]=d.useState("LRU");let a="O(1) Time for get() and put()",i="O(Capacity) auxiliary space",o="Combines a Hash Map with a Doubly Linked List (OrderedDict) to achieve constant time lookups, updates, and least-recently-used evictions.",l=`from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = OrderedDict()

    def get(self, key: str):
        if key not in self.cache: return -1
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key: str, value):
        if key in self.cache: self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False) # Evicts LRU`;r==="LRU"?(a="O(1) Constant Time (get & put)",i="O(N) where N = capacity",o="Combines a Hash Map with a Doubly Linked List (OrderedDict) to achieve constant time lookups, updates, and least-recently-used evictions."):r==="TWOSUM"?(a="O(N) Linear Time (Single Pass)",i="O(N) Hash Table Storage",o="Maintains a complement dictionary mapping seen values to indices, finding matching pairs in O(1) average lookup time.",l=`def two_sum(nums: list[int], target: int) -> list[int]:
    seen = {}
    for idx, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], idx]
        seen[num] = idx
    return []`):r==="MRO"?(a="Deterministic C3 Resolution Order",i="O(Hierarchy Depth)",o="Python computes a monotonic inheritance order preserving local precedence and monotonicity across complex multiple inheritance diamonds.",l=`class D(B, C):
    pass

# C3 Linearization order:
# D.__mro__ == (D, B, C, A, object)`):r==="ASYNCIO"&&(a="O(Max Latency) Concurrency vs O(Sum) Sequential",i="O(Task Count) lightweight coroutines",o="Cooperative single-threaded event loop multiplexing thousands of concurrent network sockets without OS thread context switching overhead.",l=`async def fetch_campus(campus: str):
    await asyncio.sleep(0.05)
    return f"{campus} synced"

async def sync_all():
    return await asyncio.gather(
        fetch_campus("Barrackpore"),
        fetch_campus("Kolkata")
    )`),d.useEffect(()=>{const t=new IntersectionObserver(c=>{c.forEach(u=>{u.isIntersecting&&u.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return x.current.forEach(c=>{c&&t.observe(c)}),()=>t.disconnect()},[]);const n=t=>{t&&!x.current.includes(t)&&x.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:n,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 4 • Module 004_004"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 5"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Capstone Projects, Portfolio & Interview Mastery"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Top Python Interview Questions & ",e.jsx("span",{className:"text-teal-400",children:"Coding Challenges"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master senior and mid-level Python technical interviews: CPython memory model (reference counting, generational cyclic GC, ",e.jsx("code",{className:"text-teal-300 font-mono",children:"__slots__"}),"), the Global Interpreter Lock (GIL) and concurrency tradeoffs (Threading vs Multiprocessing vs Asyncio), C3 Linearization Method Resolution Order (MRO), mutable default arguments, solving classic coding algorithms (LRU Cache in O(1), Two Sum HashMap, Sliding Window), and communicating architectural tradeoffs."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🧠 CPython Memory & Cyclic GC"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔒 GIL & Concurrency Paradigms"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ O(1) LRU Cache & Data Structures"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🧬 C3 Linearization MRO Order"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Technical Interview Core Pillars"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["Acing senior technical interviews requires answering the ",e.jsx("em",{children:"why"})," behind Python's design alongside executing optimal algorithmic solutions:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Memory Internals"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"Refcount + Cyclic GC"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Immediate deallocation on 0 refcount; 3-generation cyclic garbage collector detecting self-referential loops."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ GIL & Concurrency"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"Threads vs Asyncio vs Procs"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"The Global Interpreter Lock restricts CPU bytecode execution to 1 thread; solve CPU-bound tasks with Multiprocessing."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ O(1) Data Structures"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"LRU Cache / HashMaps"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Implementing constant-time eviction caches using OrderedDict or Doubly Linked Lists paired with Hash Tables."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 shadow-lg",children:[e.jsx("div",{className:"text-amber-400 font-bold text-sm mb-1",children:"4️⃣ MRO & Dunder Model"}),e.jsx("code",{className:"text-xs font-mono text-amber-300 block mb-1",children:"C3 Linearization"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Deterministic method resolution order under multiple inheritance diamond patterns and dunder protocol mechanics."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Mutable Default Parameter Trap"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Why does ",e.jsx("code",{className:"text-rose-400 font-mono",children:"def append_to(x, target=[]):"})," fail? Python evaluates default parameters once when the function is parsed at definition time. All future calls share the exact same list instance in heap memory. Fix it with ",e.jsx("span",{className:"text-emerald-400 font-bold",children:"target=None"})," and initializing inside the function body!"]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing CPython Memory, GIL Concurrency & LRU Architecture"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>f("memoryInternals"),className:m("px-3 py-1.5 rounded-lg transition-all",s==="memoryInternals"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Memory & Cyclic GC"}),e.jsx("button",{onClick:()=>f("gilConcurrency"),className:m("px-3 py-1.5 rounded-lg transition-all",s==="gilConcurrency"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"GIL & Concurrency Models"}),e.jsx("button",{onClick:()=>f("lruCache"),className:m("px-3 py-1.5 rounded-lg transition-all",s==="lruCache"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"O(1) LRU Cache Mechanics"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining CPython heap garbage collection cycles, GIL thread scheduling, and constant time cache eviction topologies:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:s==="memoryInternals"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"CPYTHON MEMORY MANAGEMENT: REFERENCE COUNTING + 3-GENERATION CYCLIC GC"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"240",height:"235",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("text",{x:"15",y:"25",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"1. Reference Counting (Immediate)"}),e.jsx("text",{x:"15",y:"50",fill:"#bae6fd",fontSize:"8",fontFamily:"monospace",children:"PyObject -> ob_refcnt"}),e.jsx("rect",{x:"10",y:"70",width:"220",height:"70",rx:"4",fill:"#082f49"}),e.jsx("text",{x:"15",y:"90",fill:"#38bdf8",fontSize:"8",fontWeight:"bold",children:"Refcount Life Cycle:"}),e.jsx("text",{x:"15",y:"107",fill:"#e0f2fe",fontSize:"8",children:"a = [1, 2]  ➔  refcount = 1"}),e.jsx("text",{x:"15",y:"124",fill:"#e0f2fe",fontSize:"8",children:"b = a       ➔  refcount = 2"}),e.jsx("rect",{x:"10",y:"150",width:"220",height:"70",rx:"4",fill:"#042f2e"}),e.jsx("text",{x:"15",y:"170",fill:"#5eead4",fontSize:"8",fontWeight:"bold",children:"Deallocation Trigger:"}),e.jsx("text",{x:"15",y:"187",fill:"#ccfbf1",fontSize:"8",children:"del a; del b  ➔  refcount = 0"}),e.jsx("text",{x:"15",y:"204",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Instant Memory Free ✅"})]}),e.jsxs("g",{transform:"translate(290, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"260",height:"235",rx:"6",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"15",y:"25",fill:"#fda4af",fontSize:"11",fontWeight:"bold",children:"2. The Cyclic Reference Problem"}),e.jsx("text",{x:"15",y:"50",fill:"#fecdd3",fontSize:"8",children:"Self-referencing objects never reach 0!"}),e.jsx("rect",{x:"15",y:"70",width:"230",height:"145",rx:"4",fill:"#881337"}),e.jsx("text",{x:"25",y:"95",fill:"#ffe4e6",fontSize:"8",fontFamily:"monospace",children:"node_a.next = node_b"}),e.jsx("text",{x:"25",y:"115",fill:"#ffe4e6",fontSize:"8",fontFamily:"monospace",children:"node_b.next = node_a"}),e.jsx("text",{x:"25",y:"140",fill:"#fecdd3",fontSize:"8",children:"del node_a; del node_b"}),e.jsx("text",{x:"25",y:"165",fill:"#fda4af",fontSize:"8",fontWeight:"bold",children:"Refcount stays = 1 (Isolated!)"}),e.jsx("text",{x:"25",y:"195",fill:"#fb7185",fontSize:"8",children:"Causes Memory Leak without GC ⚠️"})]}),e.jsxs("g",{transform:"translate(570, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"235",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"15",y:"25",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"3. Generational Cyclic GC"}),e.jsx("rect",{x:"10",y:"45",width:"230",height:"50",rx:"4",fill:"#022c22",stroke:"#0d9488"}),e.jsx("text",{x:"15",y:"65",fill:"#a7f3d0",fontSize:"8",fontWeight:"bold",children:"Generation 0: Youngest Objects"}),e.jsx("text",{x:"15",y:"80",fill:"#ccfbf1",fontSize:"7",children:"Collected frequently (High mortality)"}),e.jsx("rect",{x:"10",y:"105",width:"230",height:"50",rx:"4",fill:"#022c22",stroke:"#0d9488"}),e.jsx("text",{x:"15",y:"125",fill:"#a7f3d0",fontSize:"8",fontWeight:"bold",children:"Generation 1: Middle Tier"}),e.jsx("text",{x:"15",y:"140",fill:"#ccfbf1",fontSize:"7",children:"Surviving objects promoted here"}),e.jsx("rect",{x:"10",y:"165",width:"230",height:"55",rx:"4",fill:"#022c22",stroke:"#0d9488"}),e.jsx("text",{x:"15",y:"185",fill:"#a7f3d0",fontSize:"8",fontWeight:"bold",children:"Generation 2: Long-Lived Objects"}),e.jsx("text",{x:"15",y:"202",fill:"#86efac",fontSize:"7",children:"Full cycle collections (gc.collect()) ✅"})]})]}):s==="gilConcurrency"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"GLOBAL INTERPRETER LOCK (GIL) VS CONCURRENCY PARADIGMS"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#082f49",stroke:"#0ea5e9"}),e.jsx("rect",{x:"25",y:"35",width:"240",height:"180",rx:"6",fill:"#0369a1",stroke:"#38bdf8"}),e.jsx("text",{x:"35",y:"60",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"1. Threading (threading)"}),e.jsx("text",{x:"35",y:"85",fill:"#e0f2fe",fontSize:"8",children:"• OS Threads, Shared Memory"}),e.jsx("text",{x:"35",y:"105",fill:"#fca5a5",fontSize:"8",children:"• GIL locked: 1 thread runs at a time"}),e.jsx("text",{x:"35",y:"125",fill:"#86efac",fontSize:"8",children:"• Best for: I/O-Bound (Disk/Network)"}),e.jsx("text",{x:"35",y:"145",fill:"#fca5a5",fontSize:"8",children:"• Bad for: CPU-Bound math/crypto"}),e.jsx("text",{x:"35",y:"195",fill:"#facc15",fontSize:"8",fontWeight:"bold",children:"GIL Released on OS I/O"}),e.jsx("rect",{x:"290",y:"35",width:"240",height:"180",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"300",y:"60",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"2. Multiprocessing"}),e.jsx("text",{x:"300",y:"85",fill:"#ccfbf1",fontSize:"8",children:"• Separate OS Processes"}),e.jsx("text",{x:"300",y:"105",fill:"#86efac",fontSize:"8",children:"• Separate Python GIL per process!"}),e.jsx("text",{x:"300",y:"125",fill:"#86efac",fontSize:"8",children:"• True Multi-Core CPU Parallelism"}),e.jsx("text",{x:"300",y:"145",fill:"#fca5a5",fontSize:"8",children:"• IPC Serialization overhead"}),e.jsx("text",{x:"300",y:"195",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Best for Heavy CPU Tasks ✅"}),e.jsx("rect",{x:"555",y:"35",width:"240",height:"180",rx:"6",fill:"#3b0764",stroke:"#c084fc"}),e.jsx("text",{x:"565",y:"60",fill:"#f3e8ff",fontSize:"11",fontWeight:"bold",children:"3. Asyncio (Event Loop)"}),e.jsx("text",{x:"565",y:"85",fill:"#d8b4fe",fontSize:"8",children:"• Single Thread, Cooperative"}),e.jsx("text",{x:"565",y:"105",fill:"#86efac",fontSize:"8",children:"• 10,000+ Concurrent Sockets"}),e.jsx("text",{x:"565",y:"125",fill:"#86efac",fontSize:"8",children:"• Zero OS thread memory overhead"}),e.jsx("text",{x:"565",y:"145",fill:"#fca5a5",fontSize:"8",children:"• Blocking code halts event loop!"}),e.jsx("text",{x:"565",y:"195",fill:"#c084fc",fontSize:"8",fontWeight:"bold",children:"Best for Web APIs & Sockets"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"O(1) LRU CACHE TOPOLOGY: HASH TABLE + DOUBLY LINKED LIST"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#1e1b4b",stroke:"#a855f7"}),e.jsx("rect",{x:"35",y:"55",width:"160",height:"120",rx:"6",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"45",y:"80",fill:"#fda4af",fontSize:"10",fontWeight:"bold",children:"HEAD (LRU Eviction)"}),e.jsx("text",{x:"45",y:"105",fill:"#fecdd3",fontSize:"8",fontFamily:"monospace",children:"Key: STU_IC_01"}),e.jsx("text",{x:"45",y:"122",fill:"#fecdd3",fontSize:"8",fontFamily:"monospace",children:"Val: Abhronila"}),e.jsx("text",{x:"45",y:"155",fill:"#fb7185",fontSize:"8",fontWeight:"bold",children:"Next to be evicted ❌"}),e.jsx("rect",{x:"250",y:"55",width:"160",height:"120",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("text",{x:"260",y:"80",fill:"#ffffff",fontSize:"10",fontWeight:"bold",children:"Middle Node"}),e.jsx("text",{x:"260",y:"105",fill:"#bae6fd",fontSize:"8",fontFamily:"monospace",children:"Key: STU_CC_01"}),e.jsx("text",{x:"260",y:"122",fill:"#bae6fd",fontSize:"8",fontFamily:"monospace",children:"Val: Mahima"}),e.jsx("text",{x:"260",y:"155",fill:"#38bdf8",fontSize:"8",children:"Active Cache Entry"}),e.jsx("rect",{x:"465",y:"55",width:"160",height:"120",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"475",y:"80",fill:"#5eead4",fontSize:"10",fontWeight:"bold",children:"TAIL (Most Recent)"}),e.jsx("text",{x:"475",y:"105",fill:"#ccfbf1",fontSize:"8",fontFamily:"monospace",children:"Key: STU_BP_01"}),e.jsx("text",{x:"475",y:"122",fill:"#ccfbf1",fontSize:"8",fontFamily:"monospace",children:"Val: Mamata"}),e.jsx("text",{x:"475",y:"155",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Protected from Eviction ✅"}),e.jsx("rect",{x:"660",y:"55",width:"130",height:"120",rx:"6",fill:"#0f172a",stroke:"#818cf8"}),e.jsx("text",{x:"670",y:"80",fill:"#e0e7ff",fontSize:"9",fontWeight:"bold",children:"Hash Map Index"}),e.jsx("text",{x:"670",y:"105",fill:"#a5b4fc",fontSize:"8",children:"key ➔ NodePtr"}),e.jsx("text",{x:"670",y:"125",fill:"#a5b4fc",fontSize:"8",children:"Lookup: O(1)"}),e.jsx("text",{x:"670",y:"145",fill:"#a5b4fc",fontSize:"8",children:"Move: O(1)"})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧪"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Technical Interview Coding Sandbox"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Select high-frequency interview coding challenges to inspect optimal time/space complexities and Python solution architectures:"}),e.jsxs("div",{className:"bg-slate-950 p-5 sm:p-6 rounded-xl border border-slate-800/90 space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"Select Technical Challenge:"}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:[{id:"LRU",label:"O(1) LRU Cache",tag:"Data Structure"},{id:"TWOSUM",label:"Two Sum Hash Map",tag:"O(N) Lookup"},{id:"MRO",label:"C3 Linearization MRO",tag:"OOP Internals"},{id:"ASYNCIO",label:"Asyncio Concurrency",tag:"I/O Concurrency"}].map(t=>e.jsxs("button",{onClick:()=>p(t.id),className:m("p-2.5 rounded-xl border text-left transition-all",r===t.id?"bg-teal-950/60 border-teal-500 shadow-md shadow-teal-950/50":"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"),children:[e.jsx("div",{className:"text-xs font-bold text-slate-200",children:t.label}),e.jsx("div",{className:"text-[10px] text-cyan-400 font-mono mt-0.5",children:t.tag})]},t.id))})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2",children:[e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-teal-900/50",children:[e.jsx("div",{className:"text-xs text-teal-400 font-medium mb-1",children:"Time Complexity"}),e.jsx("div",{className:"text-base font-bold font-mono text-teal-300",children:a})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-cyan-900/50",children:[e.jsx("div",{className:"text-xs text-cyan-400 font-medium mb-1",children:"Space Complexity"}),e.jsx("div",{className:"text-base font-bold font-mono text-cyan-300",children:i})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-purple-900/50",children:[e.jsx("div",{className:"text-xs text-purple-400 font-medium mb-1",children:"Architectural Insight"}),e.jsx("div",{className:"text-xs text-slate-300 leading-snug",children:o})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"Optimal Python Solution Implementation:"}),e.jsx("pre",{className:"p-4 bg-slate-900/90 border border-slate-800 rounded-xl text-xs sm:text-sm font-mono text-teal-200 overflow-x-auto leading-relaxed",children:l})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Production Code Labs & Interview Challenge Suites"})]}),e.jsx("p",{className:"text-slate-300 mb-8 text-base leading-relaxed",children:"Inspect, run, and master all four production-grade technical interview labs covering CPython internals, classic algorithms, Asyncio concurrency, and the complete institutional technical assessment:"}),e.jsxs("div",{className:"space-y-10",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:"Lab 1: CPython Memory Internals, MRO & Slots Optimization"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Demonstrating C3 Linearization multiple inheritance resolution, mutable default argument traps, and ",e.jsx("code",{className:"text-teal-300 font-mono",children:"__slots__"})," memory reduction."]})]}),e.jsx(h,{fileModule:_,title:"python_internals_memory_gil_mro.py",highlightLines:[14,30,48,62]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-cyan-300",children:"Lab 2: High-Frequency Interview Algorithms (LRU Cache, Two Sum, Sliding Window)"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Implementing O(1) LRU Cache using ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"OrderedDict"})," and linear O(N) Two Sum Hash Map lookups."]})]}),e.jsx(h,{fileModule:v,title:"algorithmic_coding_challenges_solutions.py",highlightLines:[16,36,52,68]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-purple-300",children:"Lab 3: Concurrency Paradigms: Asyncio Event Loop vs Threading"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Benchmarking cooperative asynchronous I/O with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"asyncio.gather()"})," against sequential execution."]})]}),e.jsx(h,{fileModule:w,title:"concurrency_and_asyncio_interview_patterns.py",highlightLines:[14,24,34]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-amber-300",children:"Lab 4: Complete Institutional Live Technical Interview Assessment"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Full thread-safe LRU student caching engine combining synchronization locks with constant-time eviction policies for Mamata and Mahima across Barrackpore and Kolkata."})]}),e.jsx(h,{fileModule:j,title:"institutional_interview_technical_assessment.py",highlightLines:[18,30,46,58]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Python Interview Gotchas & Anti-Patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"1. Mutable Default Arguments"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Using ",e.jsx("code",{className:"text-rose-400 font-mono",children:"def append(item, target=[])"})," causes all callers to mutate the same list in memory."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# ANTI-PATTERN: def f(x, target=[]) (Shared memory!)",`
`,"# BEST PRACTICE: def f(x, target=None): if target is None: target = []"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"2. Confusing 'is' with '=='"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:[e.jsx("code",{className:"text-rose-400 font-mono",children:"is"})," checks memory address identity, whereas ",e.jsx("code",{className:"text-teal-300 font-mono",children:"=="})," checks equality of value."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:['# ANTI-PATTERN: if name is "Mamata": (Wrong!)',`
`,'# BEST PRACTICE: if name == "Mamata": (Value equality)']})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"3. Late Binding Closures in Loops"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Creating lambdas inside loops looks up variables when called, returning the final loop value for all functions."}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# BUG: [lambda: i for i in range(3)] ➔ [2, 2, 2]",`
`,"# FIX: [lambda i=i: i for i in range(3)] ➔ [0, 1, 2]"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"4. Threading for CPU-Bound Tasks"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Spawning OS threads for heavy math computations is slowed down by GIL context switching overhead."}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# FIX: Use multiprocessing.Pool or ProcessPoolExecutor"})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Senior Technical Interview Mastery Checklist"})]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm sm:text-base",children:[e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Explain CPython Internals:"})," Reference counting for instant free, 3-generation cyclic GC for circular reference detection."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Articulate Concurrency Tradeoffs:"})," Threading for I/O, Multiprocessing for CPU bound loads, and Asyncio for massive socket scaling."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Write O(1) Cache Architectures:"})," Use ",e.jsx("code",{className:"text-teal-300 font-mono",children:"OrderedDict"})," with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"move_to_end()"})," and ",e.jsx("code",{className:"text-teal-300 font-mono",children:"popitem(last=False)"}),"."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"State Big-O Complexities:"})," Always state both Time and Auxiliary Space complexity before and after writing algorithms."]})]})]})]}),e.jsx("section",{ref:n,className:"section-hidden",children:e.jsx(y,{title:"Python Technical Interview & Coding FAQs",questions:N})}),e.jsx("section",{ref:n,className:"section-hidden",children:e.jsx(g,{content:C,title:"Topic 5: Technical Interview Questions & Challenges Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic5_note.txt"})}),e.jsx("section",{ref:n,className:"section-hidden",children:e.jsx(b,{note:"Technical interviews do not test memorization; they test your engineering intuition and deep understanding of runtime tradeoffs. In our institutional student management systems across Barrackpore, Kolkata, Ichapur, and Jadavpur, applying O(1) LRU caching and thread-safe data structures keeps student fee queries and admission pipelines instantaneous, while understanding CPython's reference counting and GIL behavior lets you build high-performance systems with confidence."})})]})]})}export{L as default};
