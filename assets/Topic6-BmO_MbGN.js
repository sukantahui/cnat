import{b as s,j as e,bg as a}from"./vendor-react-core-Doz9nIC6.js";import{P as N}from"./PythonFileLoader-hCi5osN-.js";import{P as w}from"./PlainTextPrint-C08xhKA4.js";import{F as v}from"./FAQTemplate-CkSqDH4B.js";import{T}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const E=`# topic6_files/iteration_protocol_fundamentals.py\r
# Module: 003_003_decorators-generators\r
# Topic: Iteration protocol: __iter__() and __next__()\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 6 - File 1: Iteration Protocol Fundamentals: Iterable vs Iterator\r
Demonstrates:\r
  1. The distinction between an Iterable (\`__iter__\`) and an Iterator (\`__iter__\` + \`__next__\`)\r
  2. Manual iteration using \`iter()\` and \`next()\`\r
  3. Deconstructing the Python \`for\` loop into \`while True\` + \`try...except StopIteration\`\r
"""\r
\r
def demonstrate_iterable_vs_iterator():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - ITERATION PROTOCOL FUNDAMENTALS")\r
    print("=" * 70)\r
\r
    # An Iterable (e.g. a list or tuple):\r
    student_names = ["Sourav Mukherjee", "Priyanka Sen", "Rahul Verma"]\r
    print(f"1. Iterable Container: {student_names}")\r
    print(f"   Has \`__iter__\`: {hasattr(student_names, '__iter__')}")\r
    print(f"   Has \`__next__\`: {hasattr(student_names, '__next__')} (Iterable is NOT an Iterator!)\\n")\r
\r
    # 2. Obtaining an Iterator from an Iterable via iter():\r
    student_iterator = iter(student_names)\r
    print("2. Obtained Iterator via \`iter(student_names)\`:")\r
    print(f"   Iterator Type : {type(student_iterator)}")\r
    print(f"   Has \`__iter__\`: {hasattr(student_iterator, '__iter__')}")\r
    print(f"   Has \`__next__\`: {hasattr(student_iterator, '__next__')} (Iterator implements BOTH!)\\n")\r
\r
    # 3. Manual stepping using next():\r
    print("3. Stepping Manually with \`next(student_iterator)\`:")\r
    print(f"   Step 1: {next(student_iterator)}")\r
    print(f"   Step 2: {next(student_iterator)}")\r
    print(f"   Step 3: {next(student_iterator)}\\n")\r
\r
    # 4. Exhaustion and StopIteration:\r
    print("4. Attempting \`next()\` on Exhausted Iterator (Triggers StopIteration):")\r
    try:\r
        next(student_iterator)\r
    except StopIteration:\r
        print("   [CAUGHT EXPECTED StopIteration] Iterator is completely exhausted!\\n")\r
\r
    # 5. Deconstructing what the \`for\` loop actually does:\r
    print("5. Exact Mechanics of Python's \`for\` Loop Under the Hood:")\r
    simulated_for_loop(student_names)\r
\r
\r
def simulated_for_loop(iterable):\r
    """Exact equivalent of: for item in iterable: print(item)"""\r
    iterator = iter(iterable)  # 1. Calls iterable.__iter__()\r
\r
    while True:                # 2. Infinite consumption loop\r
        try:\r
            item = next(iterator)  # 3. Calls iterator.__next__()\r
            print(f"   [FOR-LOOP SIMULATION] Processed: {item}")\r
        except StopIteration:      # 4. Catches StopIteration and exits cleanly!\r
            print("   [FOR-LOOP SIMULATION] Encountered StopIteration -> Break Loop.")\r
            break\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_iterable_vs_iterator()\r
`,C=`# topic6_files/iter_sentinel_two_argument_protocol.py\r
# Module: 003_003_decorators-generators\r
# Topic: Iteration protocol: __iter__() and __next__()\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 6 - File 2: 2-Argument \`iter(callable, sentinel)\` Protocol\r
Demonstrates:\r
  1. The 2-argument form: \`iter(callable, sentinel)\`\r
  2. Generating continuous streams that stop when a sentinel value is returned\r
  3. Processing simulated payment chunks from bank gateway streams\r
"""\r
\r
class PaymentGatewayStream:\r
    """Simulates streaming financial transaction records from bank gateway."""\r
    def __init__(self):\r
        self.transactions = [\r
            {"tx_id": "TX-101", "amount": 18000.0, "status": "SETTLED"},\r
            {"tx_id": "TX-102", "amount": 22000.0, "status": "SETTLED"},\r
            {"tx_id": "TX-103", "amount": 15000.0, "status": "SETTLED"},\r
            None  # Sentinel signaling end of transaction stream!\r
        ]\r
        self.index = 0\r
\r
    def fetch_next_transaction(self):\r
        """Zero-argument callable returning next transaction or None."""\r
        if self.index < len(self.transactions):\r
            tx = self.transactions[self.index]\r
            self.index += 1\r
            return tx\r
        return None\r
\r
\r
def demonstrate_sentinel_iteration():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - 2-ARGUMENT \`iter(callable, sentinel)\` PROTOCOL")\r
    print("=" * 70)\r
\r
    stream = PaymentGatewayStream()\r
\r
    # Create Sentinel Iterator: Calls stream.fetch_next_transaction() until it returns None\r
    print("1. Creating Sentinel Iterator: \`iter(stream.fetch_next_transaction, None)\`:")\r
    sentinel_iterator = iter(stream.fetch_next_transaction, None)\r
\r
    print(f"   Iterator Type: {type(sentinel_iterator)}")\r
    print(f"   Has \`__next__\`: {hasattr(sentinel_iterator, '__next__')}\\n")\r
\r
    # Consuming the stream cleanly with a standard for loop:\r
    print("2. Consuming Sentinel Stream via Standard \`for\` Loop:")\r
    total_revenue = 0.0\r
    for tx in sentinel_iterator:\r
        print(f"   * Processed Transaction {tx['tx_id']}: INR {tx['amount']:,.2f} ({tx['status']})")\r
        total_revenue += tx["amount"]\r
\r
    print(f"\\n   Total Processed Revenue: INR {total_revenue:,.2f}")\r
\r
    print(r"""\r
The 2-Argument \`iter()\` Rule:\r
  \`iter(callable, sentinel)\`\r
  - Calls \`callable()\` on every \`next()\` invocation\r
  - If \`callable() == sentinel\`, immediately raises \`StopIteration\`\r
  - Highly effective for reading fixed-size chunks from binary streams or sockets:\r
    \`for chunk in iter(lambda: file.read(4096), b""): process(chunk)\`\r
""")\r
    print("[PASSED] 2-Argument iter(callable, sentinel) Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_sentinel_iteration()\r
`,A=`# topic6_files/exhaustion_and_idempotence_of_iterators.py\r
# Module: 003_003_decorators-generators\r
# Topic: Iteration protocol: __iter__() and __next__()\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 6 - File 3: Exhaustion & Idempotence Properties of Iterators\r
Demonstrates:\r
  1. Why Iterators are Single-Pass (Once consumed, they cannot be rewound)\r
  2. The Idempotence Property: \`iter(iterator) is iterator\`\r
  3. Iterables vs Iterators: Multi-pass reusability vs Single-pass consumption\r
"""\r
\r
def demonstrate_exhaustion_and_idempotence():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - EXHAUSTION & IDEMPOTENCE OF ITERATORS")\r
    print("=" * 70)\r
\r
    # 1. Iterable is Multi-Pass (Can loop repeatedly):\r
    print("1. Multi-Pass Behavior of Iterables (Lists, Sets, Tuples):")\r
    course_list = ["Python Core", "Data Structures", "Generators & Decorators"]\r
\r
    print("   First Pass :", [c for c in course_list])\r
    print("   Second Pass:", [c for c in course_list])\r
    print("   [OK] Iterables produce a fresh iterator on every \`iter(course_list)\` call!\\n")\r
\r
    # 2. Iterator is Single-Pass (Exhausts immediately):\r
    print("2. Single-Pass Exhaustion Behavior of Iterators:")\r
    course_iter = iter(course_list)\r
\r
    consumed_batch = list(course_iter)\r
    print(f"   First Consumption via \`list(course_iter)\`: {consumed_batch}")\r
\r
    second_attempt = list(course_iter)\r
    print(f"   Second Consumption Attempt               : {second_attempt} (EMPTY! Exhausted!)\\n")\r
\r
    # 3. Idempotence Property: \`iter(iterator) is iterator\`:\r
    print("3. Testing Idempotence of Iterators:")\r
    new_iter = iter(course_list)\r
    re_iter = iter(new_iter)\r
\r
    print(f"   \`new_iter\` ID : 0x{id(new_iter):x}")\r
    print(f"   \`re_iter\`  ID : 0x{id(re_iter):x}")\r
    print(f"   \`new_iter is re_iter\`: {new_iter is re_iter}")\r
    print("   [OK] An Iterator's \`__iter__()\` method simply returns \`self\`!\\n")\r
\r
    print(r"""\r
Summary Matrix:\r
  Construct  | Implements              | Multi-Pass? | \`iter(x) returns\`\r
  -----------+-------------------------+-------------+-------------------\r
  Iterable   | \`__iter__()\`            | Yes         | Fresh new Iterator\r
  Iterator   | \`__iter__()\` + \`__next__\`| No (Exhausts)| \`self\` (Same object)\r
""")\r
    print("[PASSED] Exhaustion & Idempotence Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_exhaustion_and_idempotence()\r
`,k=`# topic6_files/institutional_student_roster_iterator_engine.py\r
# Module: 003_003_decorators-generators\r
# Topic: Iteration protocol: __iter__() and __next__()\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 6 - File 4: Institutional Student Roster Iterator Engine (Case Study)\r
Demonstrates:\r
  1. Implementing custom separation of Iterable container and dedicated Iterator class\r
  2. Supporting parameterized filtered iteration (e.g. only distinction or cleared students)\r
  3. Proper \`StopIteration\` raising and clean \`for\` loop consumption\r
"""\r
\r
from typing import List, Dict, Any, Optional\r
\r
class StudentRecord:\r
    def __init__(self, student_id: str, name: str, course: str, fee_due: float, score: float):\r
        self.student_id = student_id\r
        self.name = name\r
        self.course = course\r
        self.fee_due = fee_due\r
        self.score = score\r
\r
    def __repr__(self):\r
        return f"<Student {self.student_id}: {self.name} (Due: INR {self.fee_due:,.2f})>"\r
\r
\r
class StudentRosterIterator:\r
    """Dedicated Iterator class holding iteration state across calls."""\r
    def __init__(self, records: List[StudentRecord], only_paid_cleared: bool = False):\r
        self._records = records\r
        self._only_paid_cleared = only_paid_cleared\r
        self._cursor = 0\r
\r
    def __iter__(self):\r
        """Idempotence requirement: iterator returns itself."""\r
        return self\r
\r
    def __next__(self) -> StudentRecord:\r
        """Finds and returns next eligible student or raises StopIteration."""\r
        while self._cursor < len(self._records):\r
            current_student = self._records[self._cursor]\r
            self._cursor += 1\r
\r
            if self._only_paid_cleared:\r
                if current_student.fee_due == 0.0:\r
                    return current_student\r
                # Otherwise loop continues to next candidate\r
            else:\r
                return current_student\r
\r
        # Reached end of records\r
        raise StopIteration("Student roster iteration complete.")\r
\r
\r
class ClassroomRoster:\r
    """Iterable container holding collection of student records."""\r
    def __init__(self, classroom_name: str):\r
        self.classroom_name = classroom_name\r
        self.students: List[StudentRecord] = []\r
\r
    def add_student(self, student_id: str, name: str, course: str, fee_due: float, score: float):\r
        self.students.append(StudentRecord(student_id, name, course, fee_due, score))\r
\r
    def __iter__(self):\r
        """Returns a fresh new iterator for standard iteration."""\r
        return StudentRosterIterator(self.students, only_paid_cleared=False)\r
\r
    def cleared_only_iterator(self):\r
        """Returns a specialized iterator filtering for students with zero dues."""\r
        return StudentRosterIterator(self.students, only_paid_cleared=True)\r
\r
\r
def run_roster_iterator_demo():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - INSTITUTIONAL STUDENT ROSTER ITERATOR ENGINE")\r
    print("=" * 70)\r
\r
    # 1. Populate Classroom Roster:\r
    roster = ClassroomRoster("AI & Python Batch 2026 (Barrackpore)")\r
    roster.add_student("STU-101", "Sourav Mukherjee", "Python Full-Stack & AI", 0.0, 92.5)\r
    roster.add_student("STU-102", "Priyanka Sen", "Data Science", 5000.0, 88.0)\r
    roster.add_student("STU-103", "Rahul Verma", "Python Core", 0.0, 78.5)\r
    roster.add_student("STU-104", "Debolina Roy", "AI & ML", 12000.0, 85.0)\r
\r
    # 2. Iterate all students using standard for loop:\r
    print("1. Standard Iteration (All Enrolled Students):")\r
    for s in roster:\r
        print(f"   * [{s.student_id}] {s.name:<18} | Due: INR {s.fee_due:>8,.2f} | Score: {s.score:.1f}%")\r
\r
    # 3. Filtered Iteration (Only Fee Cleared Students):\r
    print("\\n2. Filtered Iteration (Only Students with Zero Due Balance):")\r
    for s in roster.cleared_only_iterator():\r
        print(f"   * [CLEARED] {s.name} ({s.student_id}) | Eligible for Official Certificate")\r
\r
    print("\\n[PASSED] Student Roster Iterator Engine Verified.")\r
\r
\r
if __name__ == "__main__":\r
    run_roster_iterator_demo()\r
`,P=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_003: DECORATORS & GENERATORS\r
               TOPIC 6: THE PYTHON ITERATION PROTOCOL IN PYTHON\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. ITERABLE VS ITERATOR\r
--------------------------------------------------------------------------------\r
  • Iterable : Object implementing \`__iter__()\` returning an iterator (e.g. list, tuple, dict).\r
  • Iterator : Object implementing \`__iter__()\` returning self, and \`__next__()\` returning elements.\r
\r
--------------------------------------------------------------------------------\r
2. HOW PYTHON'S \`for\` LOOP RUNS\r
--------------------------------------------------------------------------------\r
  iterator = iter(iterable)\r
  while True:\r
      try:\r
          item = next(iterator)\r
          # Process item\r
      except StopIteration:\r
          break\r
\r
--------------------------------------------------------------------------------\r
3. SENTINEL PROTOCOL: \`iter(callable, sentinel)\`\r
--------------------------------------------------------------------------------\r
  # Reads 4KB chunks until end of file (b""):\r
  for chunk in iter(lambda: f.read(4096), b""):\r
      process(chunk)\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 6: ITERATION PROTOCOL\r
================================================================================\r
`,O=[{question:"What is the Python Iteration Protocol?",shortAnswer:"A standard interface protocol based on two dunder methods: '__iter__()' which returns an iterator object, and '__next__()' which returns successive items or raises 'StopIteration' when finished.",explanation:"Allows any custom class to integrate with for loops, list comprehensions, and unpacking.",hint:"The interface consisting of __iter__() and __next__() methods.",level:"basic",codeExample:"# class with __iter__() and __next__()"},{question:"What is the difference between an 'Iterable' and an 'Iterator' in Python?",shortAnswer:"An Iterable is any object implementing '__iter__()' that can yield an iterator (e.g. list, str, dict); an Iterator is the stateful stream object implementing BOTH '__iter__()' (returns self) and '__next__()'.",explanation:"Iterables produce iterators; iterators produce values via next().",hint:"Iterable has __iter__(); Iterator has __iter__() AND __next__().",level:"basic",codeExample:"# Iterable: list -> iter(list) -> Iterator"},{question:"What does calling 'iter(obj)' do?",shortAnswer:"It calls 'obj.__iter__()' to obtain an iterator, or if '__iter__' is absent but '__getitem__' is implemented, Python creates an iterator starting at index 0.",explanation:"Built-in function to request an iterator from any object.",hint:"Invokes obj.__iter__() to obtain an iterator.",level:"basic",codeExample:"my_iter = iter([1, 2, 3])"},{question:"What does calling 'next(iterator)' do?",shortAnswer:"It calls 'iterator.__next__()' to retrieve the next element in the stream, or raises 'StopIteration' if no further elements remain.",explanation:"Advances the iterator cursor by one step.",hint:"Invokes iterator.__next__() to fetch the next value.",level:"basic",codeExample:"val = next(my_iter)"},{question:"Can 'next()' accept a default fallback argument to prevent 'StopIteration' from being raised?",shortAnswer:"Yes. 'next(iterator, default_value)' returns 'default_value' instead of raising 'StopIteration' when the iterator is exhausted.",explanation:"Convenient for safe single-item lookups without try...except.",hint:"next(iterator, default_value) returns default on exhaustion.",level:"basic",codeExample:"val = next(my_iter, None)"},{question:"What exact code does Python's 'for item in iterable:' loop execute under the hood?",shortAnswer:"'it = iter(iterable); while True: try: item = next(it); ... except StopIteration: break'.",explanation:"The core translation of for loops in Python bytecode.",hint:"iter() call followed by a while loop catching StopIteration.",level:"moderate",codeExample:`it = iter(collection)
while True:
    try: item = next(it)
    except StopIteration: break`},{question:"What is the 2-argument form of 'iter(callable, sentinel)'?",shortAnswer:"It creates a sentinel iterator that invokes 'callable()' with zero arguments on every 'next()' call, continuing until the return value equals 'sentinel', at which point 'StopIteration' is raised.",explanation:"Commonly used for reading streams and chunked file I/O.",hint:"Calls callable repeatedly until it returns sentinel value.",level:"complex",codeExample:"for chunk in iter(lambda: f.read(1024), b''): pass"},{question:"Why are Python iterators 'single-pass' (exhaustible)?",shortAnswer:"Because iterators maintain internal mutable state (cursor pointer) that only advances forward; once the stream reaches the end, all subsequent 'next()' calls raise 'StopIteration'.",explanation:"To restart iteration, a new iterator must be created from the iterable.",hint:"Iterators advance forward only; once exhausted, they cannot be rewound.",level:"basic",codeExample:"it = iter([1, 2]); list(it); list(it) # Second list() is []"},{question:"What is the 'Idempotence' property of Python iterators?",shortAnswer:"Calling 'iter(iterator)' on an existing iterator simply returns the iterator itself ('it.__iter__() is it'), allowing iterators to be used anywhere an iterable is accepted.",explanation:"Crucial design requirement for all custom Iterator classes.",hint:"iter(iterator) returns self.",level:"moderate",codeExample:`it = iter([1, 2, 3])
assert iter(it) is it`},{question:"Why should an Iterable container and its Iterator be separate classes in custom collections?",shortAnswer:"Separating them allows multiple independent iterators to iterate over the same container simultaneously without interfering with each other's cursor positions.",explanation:"Prevents cursor collision across multiple nested for loops.",hint:"Allows multiple independent concurrent loops over the same container.",level:"complex",codeExample:`class Roster: # Iterable
class RosterIter: # Iterator`},{question:"What happens if a custom class implements '__next__()' but forgets '__iter__()'?",shortAnswer:"It is an invalid iterator and will raise 'TypeError: '...' object is not iterable' when passed to a 'for' loop or 'iter()'.",explanation:"All iterators must implement __iter__() returning self.",hint:"Raises TypeError because Python requires __iter__() for iteration.",level:"basic",codeExample:"# TypeError: 'MyClass' object is not iterable"},{question:"What happens if '__next__()' never raises 'StopIteration'?",shortAnswer:"The iterator becomes an infinite stream; iterating over it in a 'for' loop will run forever unless explicitly broken with 'break' or limited.",explanation:"Useful for infinite generators and clocks.",hint:"Produces an infinite loop unless manually broken with break.",level:"basic",codeExample:"def __next__(self): return random.randint(1, 100)"},{question:"How does the 'itertools.islice' utility interact with iterators?",shortAnswer:"It consumes and yields a specified slice/count of items from an iterator without exhausting the entire stream or creating intermediate lists in memory.",explanation:"Essential tool for paginating through infinite streams.",hint:"Yields a limited slice from an iterator without exhausting it completely.",level:"moderate",codeExample:`import itertools
first_five = list(itertools.islice(stream, 5))`},{question:"What built-in functions in Python consume iterators completely?",shortAnswer:"'list()', 'tuple()', 'set()', 'sum()', 'min()', 'max()', 'all()', 'any()', and 'sorted()'.",explanation:"These functions pull items from the iterator until StopIteration is raised.",hint:"list(), sum(), min(), max(), set(), tuple().",level:"basic",codeExample:"total = sum(my_iterator)  # Fully consumes my_iterator"},{question:"How does 'zip()' utilize the iteration protocol?",shortAnswer:"'zip()' obtains an iterator from each passed iterable and calls 'next()' on all of them in lockstep, stopping as soon as the shortest iterator raises 'StopIteration'.",explanation:"Standard pair-wise stream aggregation.",hint:"Calls next() on each iterator in lockstep until one raises StopIteration.",level:"moderate",codeExample:"for a, b in zip(it1, it2): ..."},{question:"What is the memory advantage of Iterators over large Lists?",shortAnswer:"Iterators compute and produce elements lazily on demand, occupying O(1) constant memory regardless of whether the dataset has 10 items or 10 billion items.",explanation:"Eliminates Out-Of-Memory (OOM) errors in big data processing.",hint:"Iterators use O(1) constant memory by producing items lazily on demand.",level:"basic",codeExample:"# Lists use O(N) memory; Iterators use O(1) memory"},{question:"How can you check if an object is an Iterable vs an Iterator using the 'collections.abc' module?",shortAnswer:"'isinstance(obj, collections.abc.Iterable)' checks for '__iter__'; 'isinstance(obj, collections.abc.Iterator)' checks for both '__iter__' and '__next__'.",explanation:"Standard ABC type checking for collection protocols.",hint:"Use collections.abc.Iterable and collections.abc.Iterator.",level:"moderate",codeExample:`from collections.abc import Iterable, Iterator
assert isinstance(it, Iterator)`},{question:"What happens if '__next__()' raises an exception other than 'StopIteration' (e.g. ValueError)?",shortAnswer:"The exception is NOT caught by the 'for' loop and immediately crashes loop execution, propagating the error upward.",explanation:"Only StopIteration is caught as the clean loop exit signal.",hint:"Any other exception immediately crashes the for loop and bubbles up.",level:"basic",codeExample:"# ValueError in __next__() crashes the for loop"},{question:"How does dictionary iteration work in Python 3.7+?",shortAnswer:"'iter(my_dict)' returns a dictionary key iterator yielding keys in insertion order; 'my_dict.values()' and 'my_dict.items()' return iterables yielding value and (key, value) iterators.",explanation:"Maintains deterministic insertion order.",hint:"Iterating a dict yields its keys in insertion order.",level:"basic",codeExample:"for k in {'a': 1, 'b': 2}: print(k) # 'a', 'b'"},{question:"What is 'Generator Delegation' and how does it relate to the iteration protocol?",shortAnswer:"'yield from iterable' automatically obtains an iterator via 'iter(iterable)' and yields every element from that iterator until 'StopIteration', delegating iteration seamlessly.",explanation:"Topic 8 and 9 explore yield from in depth.",hint:"yield from delegates iteration to another iterable.",level:"complex",codeExample:`def chain(a, b):
    yield from a
    yield from b`},{question:"Why should you never modify a collection (like deleting from a list) while iterating over it?",shortAnswer:"Because modifying the underlying collection alters index offsets and internal bucket structures, causing the iterator to skip elements, repeat elements, or raise 'RuntimeError: dictionary changed size during iteration'.",explanation:"The classic concurrent modification iteration hazard.",hint:"Causes skipped/repeated items or RuntimeError (dictionary changed size).",level:"moderate",codeExample:"# AVOID: for x in lst: lst.remove(x)"},{question:"How do you safely remove items while iterating over a collection?",shortAnswer:"By iterating over a copy of the collection ('for x in list(lst):' or 'for k in list(d.keys()):') or using list comprehensions/filters to build a new collection.",explanation:"Iterating over a snapshot avoids mutating the active iterator source.",hint:"Iterate over a copy (e.g. list(collection)) or use a list comprehension.",level:"basic",codeExample:`for item in list(my_list):
    if should_remove(item): my_list.remove(item)`},{question:"Can an iterator be converted back into a list multiple times?",shortAnswer:"No. The first 'list(iterator)' consumes all elements; any subsequent 'list(iterator)' calls will return an empty list '[]'.",explanation:"Demonstrates iterator exhaustion.",hint:"No, the first list() call exhausts the iterator completely.",level:"basic",codeExample:"it = iter([1, 2]); l1 = list(it); l2 = list(it) # l2 is []"},{question:"What is the role of 'StopIteration(value)' in Python coroutines?",shortAnswer:"When a generator/coroutine returns a value with 'return x', Python attaches 'x' to the 'StopIteration.value' attribute ('raise StopIteration(x)'), allowing calling frameworks to retrieve returned results.",explanation:"Underpins PEP 380 and the original async/await generator mechanics.",hint:"Return statements in generators populate the StopIteration.value attribute.",level:"complex",codeExample:`try: next(g)
except StopIteration as exc: return_val = exc.value`},{question:"What is the ultimate golden rule of the Python Iteration Protocol?",shortAnswer:"An Iterable implements '__iter__()' to create a fresh Iterator; an Iterator implements both '__iter__()' (returning self) and '__next__()' (yielding values lazily until raising StopIteration on completion).",explanation:"The foundation of all iteration, comprehensions, and generators in Python.",hint:"Iterable produces iterators via __iter__(); Iterator yields values via __next__().",level:"basic",codeExample:"# Python Iteration Protocol Mastery"}];function H(){const x=s.useRef([]),[l,m]=s.useState("protocol"),u=[{id:"STU-101",name:"Sourav Mukherjee",course:"Full-Stack AI",feeDue:0,score:92.5},{id:"STU-102",name:"Priyanka Sen",course:"Data Science",feeDue:5e3,score:88},{id:"STU-103",name:"Rahul Verma",course:"Python Core",feeDue:0,score:78.5},{id:"STU-104",name:"Debolina Roy",course:"AI & ML",feeDue:12e3,score:85}],[_,g]=s.useState(!1),[i,h]=s.useState(-1),[o,f]=s.useState(!1),[b,p]=s.useState([]),[j,d]=s.useState("Click 'iter(roster)' to initialize iterator."),c=_?u.filter(t=>t.feeDue===0):u,I=()=>{h(-1),f(!1),p([]),d("[iter() CALLED] Instantiated fresh `StudentRosterIterator`. Cursor set to start.")},S=()=>{if(o){d("[StopIteration RAISED] Iterator is already exhausted! Cannot advance further.");return}const t=i+1;if(t<c.length){const r=c[t];h(t),p([...b,r]),d(`[next() -> ${r.id}] Yielded ${r.name} (Due: INR ${r.feeDue.toLocaleString()})`)}else f(!0),d(`[StopIteration RAISED] Cursor reached index ${t} (End of roster). Loop terminates cleanly.`)};s.useEffect(()=>{const t=new IntersectionObserver(r=>{r.forEach(y=>{y.isIntersecting&&y.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return x.current.forEach(r=>{r&&t.observe(r)}),()=>t.disconnect()},[]);const n=t=>{t&&!x.current.includes(t)&&x.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:n,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_003"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 6"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Decorators, Generators & Iterators"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["The Iteration Protocol: ",e.jsx("span",{className:"text-teal-400",children:"`__iter__()` & `__next__()`"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master the foundation of Python iteration: understanding Iterable vs Iterator, deconstructing the ",e.jsx("code",{className:"text-teal-300 font-mono",children:"for"})," loop with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"StopIteration"}),", the 2-argument ",e.jsx("code",{className:"text-purple-300 font-mono",children:"iter(callable, sentinel)"})," stream protocol, and iterator exhaustion."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔄 Iterable vs Iterator Interface"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛑 StopIteration Exception Cycle"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🎯 iter(callable, sentinel) Streams"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ Single-Pass Exhaustion & Idempotence"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧭"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Anatomy of Python's Iteration Protocol"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["In Python, iteration is governed by two complementary dunder methods forming the ",e.jsx("strong",{children:"Iteration Protocol"}),":"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ The Iterable (`__iter__`)"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"def __iter__(self): return Iterator(self)"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Any container that can produce an Iterator upon request (lists, dicts, tuples, sets). Multi-pass reusable."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ The Iterator (`__iter__` + `__next__`)"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"def __next__(self): return value or raise StopIteration"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["A stateful stream that yields values on demand via ",e.jsx("code",{className:"text-cyan-300",children:"__next__()"})," and returns ",e.jsx("code",{className:"text-cyan-300",children:"self"})," in ",e.jsx("code",{className:"text-cyan-300",children:"__iter__()"}),". Single-pass exhaustible."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"Deconstructing Python's `for` Loop"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["When you write: ",e.jsx("span",{className:"text-teal-300",children:"for x in collection: print(x)"}),e.jsx("br",{}),"Python internally executes:",e.jsx("br",{}),e.jsx("span",{className:"text-slate-400",children:"iterator = iter(collection)"}),e.jsx("br",{}),e.jsx("span",{className:"text-slate-400",children:"while True:"}),e.jsx("br",{}),"  ",e.jsx("span",{className:"text-slate-400",children:"try: x = next(iterator); print(x)"}),e.jsx("br",{}),"  ",e.jsx("span",{className:"text-cyan-300",children:"except StopIteration: break"})]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Iteration Cycles & Sentinel Streams"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>m("protocol"),className:a("px-3 py-1.5 rounded-lg transition-all",l==="protocol"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Iteration Protocol Cycle"}),e.jsx("button",{onClick:()=>m("forloop"),className:a("px-3 py-1.5 rounded-lg transition-all",l==="forloop"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"`for` Loop Translation"}),e.jsx("button",{onClick:()=>m("sentinel"),className:a("px-3 py-1.5 rounded-lg transition-all",l==="sentinel"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"2-Arg Sentinel Protocol"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining call cycles, StopIteration mechanics, and 2-argument sentinel streaming:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:l==="protocol"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"THE PYTHON ITERATION PROTOCOL CALL CYCLE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"1. Iterable Container"}),e.jsx("text",{x:"15",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"class ClassroomRoster:"}),e.jsx("text",{x:"25",y:"75",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"def __iter__(self):"}),e.jsx("text",{x:"35",y:"95",fill:"#ecfdf5",fontSize:"8 font-mono",children:"return RosterIterator(self)"}),e.jsx("rect",{x:"15",y:"130",width:"220",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"25",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"Role: Factory"}),e.jsx("text",{x:"25",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Produces a fresh new Iterator"}),e.jsx("text",{x:"25",y:"190",fill:"#cbd5e1",fontSize:"8",children:"on every `iter(roster)` call."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"310",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. Iterator Stream"}),e.jsx("text",{x:"310",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"class RosterIterator:"}),e.jsx("text",{x:"320",y:"75",fill:"#38bdf8",fontSize:"8 font-mono font-bold",children:"def __next__(self):"}),e.jsx("text",{x:"330",y:"95",fill:"#ecfdf5",fontSize:"8 font-mono",children:"return next_student"}),e.jsx("text",{x:"320",y:"115",fill:"#38bdf8",fontSize:"8 font-mono font-bold",children:"def __iter__(self): return self"}),e.jsx("rect",{x:"310",y:"130",width:"220",height:"85",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"320",y:"155",fill:"#38bdf8",fontSize:"9 font-bold",children:"Stateful Stream:"}),e.jsx("text",{x:"320",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Advances cursor index"}),e.jsx("text",{x:"320",y:"190",fill:"#cbd5e1",fontSize:"8",children:"forward on each `next()` call."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"605",y:"30",fill:"#fda4af",fontSize:"11 font-bold",children:"3. `StopIteration`"}),e.jsx("text",{x:"605",y:"55",fill:"#fca5a5",fontSize:"8 font-mono",children:"if cursor >= len(records):"}),e.jsx("text",{x:"615",y:"75",fill:"#fda4af",fontSize:"8 font-mono font-bold",children:"raise StopIteration()"}),e.jsx("rect",{x:"605",y:"130",width:"200",height:"85",rx:"4",fill:"#881337",stroke:"#e11d48"}),e.jsx("text",{x:"615",y:"155",fill:"#ffe4e6",fontSize:"9 font-bold",children:"Loop Termination:"}),e.jsx("text",{x:"615",y:"175",fill:"#fca5a5",fontSize:"8",children:"Cleanly signals to the loop"}),e.jsx("text",{x:"615",y:"190",fill:"#fca5a5",fontSize:"8",children:"that stream is exhausted."})]})]}):l==="forloop"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"DECONSTRUCTING PYTHON'S `for` LOOP SYNTAX"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"What You Write in Python:"}),e.jsx("text",{x:"20",y:"65",fill:"#34d399",fontSize:"11 font-mono font-bold",children:"for student in roster:"}),e.jsx("text",{x:"40",y:"90",fill:"#ecfdf5",fontSize:"11 font-mono",children:"process(student)"}),e.jsx("rect",{x:"20",y:"140",width:"340",height:"70",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"165",fill:"#34d399",fontSize:"9 font-bold",children:"Declarative Loop:"}),e.jsx("text",{x:"30",y:"185",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Simple, idiomatic, and clean."})]}),e.jsxs("g",{transform:"translate(425, 140)",children:[e.jsx("text",{x:"0",y:"0",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",children:"translates to"}),e.jsx("text",{x:"25",y:"25",fill:"#38bdf8",fontSize:"26",fontWeight:"bold",children:"→"})]}),e.jsxs("g",{transform:"translate(480, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"370",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"What Python Interpreter Runs:"}),e.jsx("text",{x:"20",y:"60",fill:"#34d399",fontSize:"9 font-mono",children:"_it = iter(roster)  # 1. Call __iter__"}),e.jsx("text",{x:"20",y:"80",fill:"#ecfdf5",fontSize:"9 font-mono",children:"while True:         # 2. Infinite Loop"}),e.jsx("text",{x:"35",y:"100",fill:"#ecfdf5",fontSize:"9 font-mono",children:"try:"}),e.jsx("text",{x:"50",y:"120",fill:"#34d399",fontSize:"9 font-mono font-bold",children:"student = next(_it) # 3. Call __next__"}),e.jsx("text",{x:"50",y:"140",fill:"#cbd5e1",fontSize:"9 font-mono",children:"process(student)"}),e.jsx("text",{x:"35",y:"160",fill:"#fca5a5",fontSize:"9 font-mono font-bold",children:"except StopIteration:"}),e.jsx("text",{x:"50",y:"180",fill:"#fda4af",fontSize:"9 font-mono font-bold",children:"break  # 4. Clean exit"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"THE 2-ARGUMENT `iter(callable, sentinel)` STREAM PROTOCOL"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"15",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"1. Stream Callable"}),e.jsx("text",{x:"15",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"stream.fetch_next_tx()"}),e.jsx("text",{x:"15",y:"80",fill:"#cbd5e1",fontSize:"8",children:"• Returns next transaction dict"}),e.jsx("text",{x:"15",y:"95",fill:"#cbd5e1",fontSize:"8",children:"• Returns `None` when stream ends"}),e.jsx("rect",{x:"15",y:"130",width:"220",height:"85",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"25",y:"155",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Producer Function:"}),e.jsx("text",{x:"25",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Zero-argument callable"}),e.jsx("text",{x:"25",y:"190",fill:"#cbd5e1",fontSize:"8",children:"yielding stream chunks."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"310",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. Sentinel Check (`None`)"}),e.jsx("text",{x:"310",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"iter(stream.fetch, None)"}),e.jsx("text",{x:"310",y:"80",fill:"#38bdf8",fontSize:"8 font-mono",children:"if val == sentinel:"}),e.jsx("text",{x:"325",y:"100",fill:"#38bdf8",fontSize:"8 font-mono font-bold",children:"raise StopIteration"}),e.jsx("rect",{x:"310",y:"130",width:"220",height:"85",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"320",y:"155",fill:"#38bdf8",fontSize:"9 font-bold",children:"Automatic Sentinel Guard:"}),e.jsx("text",{x:"320",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Eliminates manual while loop"}),e.jsx("text",{x:"320",y:"190",fill:"#cbd5e1",fontSize:"8",children:"and break statements!"}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"605",y:"30",fill:"#a7f3d0",fontSize:"11 font-bold",children:"3. Consumer Loop"}),e.jsx("text",{x:"605",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"for tx in sentinel_iter:"}),e.jsx("text",{x:"620",y:"75",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"process_payment(tx)"}),e.jsx("rect",{x:"605",y:"130",width:"200",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"615",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"Clean Consumption:"}),e.jsx("text",{x:"615",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Standard for loop iterates"}),e.jsx("text",{x:"615",y:"190",fill:"#cbd5e1",fontSize:"8",children:"seamlessly over stream."})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Step-by-Step Student Roster Iterator Simulator"})]}),e.jsxs("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:["Step manually through the classroom roster iterator with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"next()"})," to inspect internal cursor advancing and ",e.jsx("code",{className:"text-rose-400 font-mono",children:"StopIteration"})," triggering on exhaustion:"]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"1. Iterator Stepping Controls"}),e.jsx("button",{onClick:I,className:"text-[11px] font-mono text-slate-400 hover:text-white underline",children:"`iter(roster)` (Reset Iterator)"})]}),e.jsxs("label",{className:"flex items-center gap-2 text-xs font-mono text-slate-300 cursor-pointer p-2 bg-slate-900 rounded border border-slate-800",children:[e.jsx("input",{type:"checkbox",checked:_,onChange:t=>{g(t.target.checked),h(-1),f(!1),p([])},className:"accent-teal-500 rounded"}),e.jsx("span",{children:"Only Iterate Students with Zero Dues (`cleared_only_iterator()`)"})]}),e.jsx("button",{onClick:S,disabled:o,className:a("w-full py-3 rounded-lg text-xs font-mono font-bold transition-all shadow-lg",o?"bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700":"bg-teal-600 hover:bg-teal-500 text-white shadow-teal-950/50"),children:o?"Iterator Exhausted (StopIteration)":"Execute `next(student_iterator)`"}),e.jsxs("div",{className:"space-y-1.5 pt-2 border-t border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400 font-bold block uppercase",children:"Classroom Roster Elements & Cursor Pointer:"}),e.jsx("div",{className:"space-y-1",children:c.map((t,r)=>e.jsxs("div",{className:a("p-2 rounded text-xs font-mono border transition-all flex justify-between items-center",i===r?"bg-teal-950 border-teal-500 text-teal-200 font-bold":i>r?"bg-slate-900/50 border-slate-800 text-slate-500 line-through":"bg-slate-900 border-slate-800 text-slate-300"),children:[e.jsxs("div",{children:[e.jsxs("span",{className:"font-bold",children:["[",r,"] ",t.id,": "]}),e.jsx("span",{children:t.name})]}),e.jsxs("div",{children:[e.jsx("span",{className:t.feeDue===0?"text-emerald-400 font-bold":"text-rose-400 font-bold",children:t.feeDue===0?"PAID":`INR ${t.feeDue.toLocaleString()}`}),i===r&&e.jsx("span",{className:"ml-2 text-teal-400 font-bold",children:"← CURSOR"})]})]},t.id))})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2 text-xs font-mono",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:"Iterator Internal Memory State:"}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Current Cursor Index:"}),e.jsx("span",{className:"text-teal-300 font-bold",children:i>=0?i:"NOT STARTED (-1)"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Stream Exhaustion Status:"}),e.jsx("span",{className:a("font-bold",o?"text-rose-400":"text-emerald-400"),children:o?"EXHAUSTED (True)":"ACTIVE STREAM (False)"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Consumed Elements Count:"}),e.jsxs("span",{className:"text-purple-300 font-bold",children:[b.length," / ",c.length]})]})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[160px] space-y-1.5 font-mono text-xs",children:[e.jsx("span",{className:"text-slate-400 block font-bold text-[10px] uppercase",children:"Live Iteration Step Telemetry:"}),e.jsx("div",{className:a("p-2 rounded text-xs font-mono",o?"bg-rose-950/60 border border-rose-800 text-rose-300 font-bold":"text-slate-300"),children:j})]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Iterable vs Iterator Comparison Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Construct / Protocol"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Required Dunder Methods"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"`iter(obj)` Returns"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Multi-Pass Capability"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"Iterable (e.g. list, tuple)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`__iter__()` only"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Fresh new Iterator instance"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Yes (Reusable infinite times)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"Iterator (e.g. list_iterator)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`__iter__()` AND `__next__()`"}),e.jsx("td",{className:"py-3 px-4 text-purple-300",children:"`self` (Same iterator object)"}),e.jsx("td",{className:"py-3 px-4 text-rose-300",children:"No (Exhausts after 1 pass)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"2-Arg Sentinel Protocol"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`iter(callable, sentinel)`"}),e.jsx("td",{className:"py-3 px-4 text-cyan-300",children:"`callable_iterator` object"}),e.jsx("td",{className:"py-3 px-4 text-rose-300",children:"No (Streams until sentinel)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"Generator Object"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`__iter__()` + `__next__()` + `send()`"}),e.jsx("td",{className:"py-3 px-4 text-purple-300",children:"`self`"}),e.jsx("td",{className:"py-3 px-4 text-rose-300",children:"No (Exhausts upon return)"})]})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating iteration fundamentals, sentinel streaming, iterator exhaustion, and classroom roster engines:"}),e.jsx(N,{files:[{filename:"iteration_protocol_fundamentals.py",code:E,description:"Iterable vs Iterator distinction, iter(), next(), StopIteration, and for-loop deconstruction."},{filename:"iter_sentinel_two_argument_protocol.py",code:C,description:"The 2-argument iter(callable, sentinel) stream protocol for reading chunks."},{filename:"exhaustion_and_idempotence_of_iterators.py",code:A,description:"Single-pass exhaustion of iterators and the idempotence property iter(it) is it."},{filename:"institutional_student_roster_iterator_engine.py",code:k,description:"Enterprise Classroom Student Roster & Ledger Iterator Engine with filtering."}]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Attempting to Reuse Exhausted Iterators"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-rose-300 font-mono",children:"list(it)"})," followed by another ",e.jsx("code",{className:"text-rose-300 font-mono",children:"for x in it:"})," does nothing because the iterator is exhausted."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," To iterate multiple times, call ",e.jsx("code",{className:"text-emerald-300",children:"iter(iterable)"})," again."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Mutating Collections During Iteration"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Deleting from a dictionary or list during a ",e.jsx("code",{className:"text-amber-300 font-mono",children:"for"})," loop raises ",e.jsx("code",{className:"text-amber-300 font-mono",children:"RuntimeError: dictionary changed size during iteration"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Iterate over a snapshot: ",e.jsx("code",{className:"text-emerald-300",children:"for k in list(d.keys()):"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Missing `__iter__` on Custom Iterator"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Defining ",e.jsx("code",{className:"text-purple-300 font-mono",children:"__next__()"})," without ",e.jsx("code",{className:"text-purple-300 font-mono",children:"__iter__() returning self"})," prevents the iterator from being used in ",e.jsx("code",{className:"text-purple-300 font-mono",children:"for"})," loops."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always define ",e.jsx("code",{className:"text-emerald-300",children:"def __iter__(self): return self"})," on iterators."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Forgetting `StopIteration` in `__next__`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["If ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"__next__()"})," returns ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"None"})," instead of raising ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"StopIteration"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"for"})," loops will run forever!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always raise ",e.jsx("code",{className:"text-emerald-300",children:"StopIteration"})," when the stream is exhausted."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering the Python iteration protocol, __iter__, __next__, StopIteration, and sentinel iteration:"}),e.jsx(v,{questions:O})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with iteration protocol blueprints, sentinel recipes, and for-loop mechanics:"}),e.jsx("div",{className:"mb-10",children:e.jsx(w,{content:P,filename:"python_topic6_iteration_protocol_notes.txt",title:"Print Topic 6 Study Notes"})}),e.jsx(T,{})]})]})]})}export{H as default};
