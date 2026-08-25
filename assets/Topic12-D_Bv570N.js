import{b as o,j as e,bg as r}from"./vendor-react-core-Doz9nIC6.js";import{P as x}from"./PythonFileLoader-hCi5osN-.js";import{P as h}from"./PlainTextPrint-C08xhKA4.js";import{F as f}from"./FAQTemplate-CkSqDH4B.js";import{T as u}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const p=`# topic12_files/dunder_representation_and_equality.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Magic / Dunder Methods: __str__, __repr__, __len__, __eq__, __add__\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 12 - File 1: String Representation, Equality & Total Ordering Dunders\r
Demonstrates:\r
  1. \`__str__\`: User-friendly informal string representation (called by \`print()\`, \`str()\`)\r
  2. \`__repr__\`: Unambiguous developer/debugger representation (eval-ready)\r
  3. \`__eq__\`, \`__lt__\` with \`@functools.total_ordering\` (auto-generates <=, >, >=)\r
  4. \`__hash__\`: Enabling objects as dictionary keys and set members\r
"""\r
\r
from functools import total_ordering\r
from typing import Optional\r
\r
@total_ordering\r
class StudentScoreRecord:\r
    """Demonstrates representation, comparison, and hashability dunders."""\r
\r
    def __init__(self, student_id: str, full_name: str, score: float):\r
        self.student_id = student_id\r
        self.full_name = full_name\r
        self.score = float(score)\r
\r
    # 1. USER-FRIENDLY STRING (print / str)\r
    def __str__(self) -> str:\r
        return f"{self.full_name} ({self.student_id}): {self.score:.1f}/100"\r
\r
    # 2. DEVELOPER/DEBUGGER REPRESENTATION (Interactive REPL, logs, eval-ready)\r
    def __repr__(self) -> str:\r
        return f"StudentScoreRecord(student_id={self.student_id!r}, full_name={self.full_name!r}, score={self.score!r})"\r
\r
    # 3. EQUALITY COMPARISON (==)\r
    def __eq__(self, other: object) -> bool:\r
        if isinstance(other, StudentScoreRecord):\r
            return self.student_id == other.student_id and self.score == other.score\r
        return False\r
\r
    # 4. LESS-THAN COMPARISON (<) - @total_ordering auto-generates <=, >, >=\r
    def __lt__(self, other: object) -> bool:\r
        if isinstance(other, StudentScoreRecord):\r
            return self.score < other.score\r
        return NotImplemented\r
\r
    # 5. HASHABILITY (__hash__)\r
    def __hash__(self) -> int:\r
        return hash((self.student_id, self.score))\r
\r
\r
def demonstrate_representation_and_equality():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - REPRESENTATION & COMPARISON DUNDERS")\r
    print("=" * 70)\r
\r
    s1 = StudentScoreRecord("STU-101", "Sourav Mukherjee", 94.5)\r
    s2 = StudentScoreRecord("STU-102", "Priyanka Sen", 98.0)\r
    s3 = StudentScoreRecord("STU-101", "Sourav Mukherjee", 94.5)\r
\r
    # 1. __str__ vs __repr__\r
    print(f"1. __str__  (User-Friendly) : {str(s1)}")\r
    print(f"   __repr__ (Eval-Ready)    : {repr(s1)}\\n")\r
\r
    # 2. __eq__ Equality Check\r
    print("2. Equality Comparisons (__eq__):")\r
    print(f"   s1 == s3 (Identical Data) : {s1 == s3}")\r
    print(f"   s1 == s2 (Different Data) : {s1 == s2}\\n")\r
\r
    # 3. Rich Comparisons (<, >, <=, >= via @total_ordering)\r
    print("3. Rich Comparisons (<, >, <=, >=):")\r
    print(f"   s1 < s2  : {s1 < s2} ({s1.score} < {s2.score})")\r
    print(f"   s1 > s2  : {s1 > s2}")\r
    print(f"   s1 <= s3 : {s1 <= s3}\\n")\r
\r
    # 4. Hashability in Sets and Dictionaries\r
    print("4. Hashability in Sets & Dicts (__hash__):")\r
    student_set = {s1, s2, s3}\r
    print(f"   Set contains {len(student_set)} unique records (s1 and s3 deduplicated!):")\r
    for rec in sorted(student_set):\r
        print(f"     * {rec}")\r
\r
    print("\\n[PASSED] Representation & Comparison Dunders Demonstrated Successfully.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_representation_and_equality()\r
`,b=`# topic12_files/dunder_containers_and_sequences.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Magic / Dunder Methods: __str__, __repr__, __len__, __eq__, __add__\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 12 - File 2: Container, Sequence & Indexing Dunder Protocols\r
Demonstrates:\r
  1. \`__len__\`: Emulating \`len(obj)\`\r
  2. \`__getitem__\`, \`__setitem__\`, \`__delitem__\`: Square bracket indexing and slicing \`obj[i]\`\r
  3. \`__contains__\`: Membership testing \`item in obj\`\r
  4. \`__iter__\`: Enabling \`for x in obj:\` iteration\r
"""\r
\r
from typing import List, Any, Union\r
\r
class CourseModuleRoster:\r
    """Emulates a custom Python sequence container."""\r
\r
    def __init__(self, course_name: str, topics: List[str]):\r
        self.course_name = course_name\r
        self._topics = list(topics)\r
\r
    # 1. LENGTH PROTOCOL (__len__)\r
    def __len__(self) -> int:\r
        return len(self._topics)\r
\r
    # 2. GET ITEM & SLICING PROTOCOL (__getitem__)\r
    def __getitem__(self, index: Union[int, slice]) -> Any:\r
        # Transparently supports both single integer index and slice objects:\r
        return self._topics[index]\r
\r
    # 3. SET ITEM PROTOCOL (__setitem__)\r
    def __setitem__(self, index: int, new_topic: str):\r
        self._topics[index] = str(new_topic).strip()\r
\r
    # 4. DELETE ITEM PROTOCOL (__delitem__)\r
    def __delitem__(self, index: int):\r
        del self._topics[index]\r
\r
    # 5. MEMBERSHIP TESTING (__contains__)\r
    def __contains__(self, topic_query: str) -> bool:\r
        # Case-insensitive substring search:\r
        query_lower = topic_query.lower()\r
        return any(query_lower in t.lower() for t in self._topics)\r
\r
    # 6. ITERATION PROTOCOL (__iter__)\r
    def __iter__(self):\r
        return iter(self._topics)\r
\r
    def __repr__(self) -> str:\r
        return f"CourseModuleRoster({self.course_name!r}, {self._topics!r})"\r
\r
\r
def demonstrate_container_dunders():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - CONTAINER & SEQUENCE DUNDER PROTOCOLS")\r
    print("=" * 70)\r
\r
    roster = CourseModuleRoster(\r
        course_name="Python Advanced OOP",\r
        topics=[\r
            "Constructors & self",\r
            "Properties & Setters",\r
            "Inheritance Topologies",\r
            "Method Resolution Order",\r
            "Polymorphism & Duck Typing"\r
        ]\r
    )\r
\r
    # 1. len(obj) via __len__\r
    print(f"1. len(roster): {len(roster)} topics registered")\r
\r
    # 2. Indexing via __getitem__\r
    print(f"2. roster[0]   : '{roster[0]}'")\r
    print(f"   roster[-1]  : '{roster[-1]}'")\r
    print(f"   roster[1:3] : {roster[1:3]} (Slicing supported automatically!)\\n")\r
\r
    # 3. Mutation via __setitem__\r
    print("3. Mutating topic at index 0 via \`roster[0] = 'OOP Foundations'\`:")\r
    roster[0] = "OOP Foundations"\r
    print(f"   roster[0] is now: '{roster[0]}'\\n")\r
\r
    # 4. Membership testing via __contains__\r
    print("4. Membership Checks (\`in\` operator via __contains__):")\r
    print(f"   'MRO' in roster         : {'MRO' in roster}")\r
    print(f"   'Rust Lang' in roster   : {'Rust Lang' in roster}\\n")\r
\r
    # 5. Iteration via __iter__\r
    print("5. Iterating through roster (\`for topic in roster\`):")\r
    for idx, topic in enumerate(roster, 1):\r
        print(f"   [{idx}] {topic}")\r
\r
    print("\\n[PASSED] Container & Sequence Protocols Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_container_dunders()\r
`,g=`# topic12_files/dunder_arithmetic_and_callable.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Magic / Dunder Methods: __str__, __repr__, __len__, __eq__, __add__\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 12 - File 3: Arithmetic Overloading & Callable Objects (__call__)\r
Demonstrates:\r
  1. Arithmetic & Reflected dunders: \`__add__\`, \`__radd__\`, \`__iadd__\`\r
  2. Callable objects via \`__call__\` (Objects that can be invoked like functions)\r
  3. Stateful function objects (Functors) for calculation & caching\r
"""\r
\r
from typing import Union, List\r
\r
class DiscountCouponFunctor:\r
    """A stateful callable object that computes promotional discounts."""\r
\r
    def __init__(self, coupon_code: str, discount_rate: float):\r
        self.coupon_code = coupon_code\r
        self.discount_rate = float(discount_rate)\r
        self.usage_count = 0\r
\r
    # THE CALLABLE DUNDER (__call__)\r
    def __call__(self, gross_amount: float) -> float:\r
        """Allows calling \`coupon_obj(18000.0)\` directly like a function!"""\r
        self.usage_count += 1\r
        discount = gross_amount * self.discount_rate\r
        net = gross_amount - discount\r
        print(f"  [COUPON EXECUTED] Code '{self.coupon_code}' applied: -INR {discount:,.2f} (Total uses: {self.usage_count})")\r
        return net\r
\r
\r
class BillableServiceItem:\r
    """Represents a billable module supporting arithmetic additions."""\r
\r
    def __init__(self, item_name: str, cost: float):\r
        self.item_name = item_name\r
        self.cost = float(cost)\r
\r
    # 1. ADDITION (__add__)\r
    def __add__(self, other: Union["BillableServiceItem", int, float]) -> "BillableServiceItem":\r
        if isinstance(other, BillableServiceItem):\r
            return BillableServiceItem(f"{self.item_name} + {other.item_name}", self.cost + other.cost)\r
        elif isinstance(other, (int, float)):\r
            return BillableServiceItem(self.item_name, self.cost + float(other))\r
        return NotImplemented\r
\r
    # 2. REFLECTED ADDITION (__radd__)\r
    def __radd__(self, other: Union[int, float]) -> "BillableServiceItem":\r
        # Allows: 500 + item\r
        return self.__add__(other)\r
\r
    # 3. IN-PLACE ADDITION (__iadd__)\r
    def __iadd__(self, other: Union["BillableServiceItem", int, float]) -> "BillableServiceItem":\r
        # Allows: item += 1000\r
        if isinstance(other, BillableServiceItem):\r
            self.item_name = f"{self.item_name} & {other.item_name}"\r
            self.cost += other.cost\r
        elif isinstance(other, (int, float)):\r
            self.cost += float(other)\r
        return self\r
\r
    def __repr__(self) -> str:\r
        return f"BillableServiceItem({self.item_name!r}, cost=INR {self.cost:,.2f})"\r
\r
\r
def demonstrate_arithmetic_and_callable():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - ARITHMETIC DUNDERS & CALLABLE OBJECTS")\r
    print("=" * 70)\r
\r
    # 1. Callable Object (__call__)\r
    print("1. Callable Objects (__call__):")\r
    festive_coupon = DiscountCouponFunctor("DIWALI2026", 0.10)\r
\r
    # Invoke object directly like a function:\r
    net1 = festive_coupon(20000.0)\r
    net2 = festive_coupon(15000.0)\r
    print(f"   Total times coupon invoked: {festive_coupon.usage_count}\\n")\r
\r
    # 2. Arithmetic Overloading (__add__, __radd__, __iadd__)\r
    print("2. Arithmetic Overloading (__add__, __radd__, __iadd__):")\r
    core_python = BillableServiceItem("Core Python", 12000.0)\r
    adv_oop = BillableServiceItem("Advanced OOP & MRO", 8000.0)\r
\r
    combo = core_python + adv_oop\r
    print(f"   combo (core + adv) : {combo}")\r
\r
    # Reflected Addition (Number + Object):\r
    combo_with_tax = 1500.0 + combo\r
    print(f"   with lab fee (+ 1500): {combo_with_tax}")\r
\r
    # In-place addition (+=):\r
    core_python += 500.0\r
    print(f"   core_python += 500 : {core_python}")\r
\r
    print("\\n[PASSED] Arithmetic & Callable Dunders Demonstrated Successfully.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_arithmetic_and_callable()\r
`,j=`# topic12_files/smart_student_batch_ledger.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Magic / Dunder Methods: __str__, __repr__, __len__, __eq__, __add__\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 12 - File 4: Smart Student Batch Ledger (Production Case Study)\r
Demonstrates:\r
  1. Complete integration of core dunders: \`__repr__\`, \`__str__\`, \`__len__\`, \`__getitem__\`\r
  2. \`__contains__\`, \`__iter__\`, and \`__add__\` (merging batches into a super-batch)\r
  3. \`__call__\` for instant student lookup and status verification\r
"""\r
\r
from typing import List, Dict, Optional, Union, Any\r
\r
class StudentEnrollment:\r
    """Individual student record."""\r
    def __init__(self, student_id: str, name: str, fee_paid: float):\r
        self.student_id = student_id\r
        self.name = name\r
        self.fee_paid = float(fee_paid)\r
\r
    def __repr__(self) -> str:\r
        return f"StudentEnrollment({self.student_id!r}, {self.name!r}, fee=INR {self.fee_paid:,.2f})"\r
\r
    def __str__(self) -> str:\r
        return f"[{self.student_id}] {self.name} (Paid: INR {self.fee_paid:,.2f})"\r
\r
    def __eq__(self, other: object) -> bool:\r
        if isinstance(other, StudentEnrollment):\r
            return self.student_id == other.student_id\r
        return False\r
\r
\r
class AcademicBatchLedger:\r
    """Production container representing an institutional classroom batch."""\r
\r
    def __init__(self, batch_code: str, course_title: str):\r
        self.batch_code = batch_code\r
        self.course_title = course_title\r
        self._students: List[StudentEnrollment] = []\r
\r
    def enroll(self, student: StudentEnrollment):\r
        if student not in self._students:\r
            self._students.append(student)\r
            print(f"  [ENROLLED] {student.name} -> Batch {self.batch_code}")\r
\r
    # 1. STRING REPRESENTATIONS\r
    def __str__(self) -> str:\r
        return f"Batch [{self.batch_code}]: '{self.course_title}' ({len(self._students)} Students Enrolled)"\r
\r
    def __repr__(self) -> str:\r
        return f"AcademicBatchLedger({self.batch_code!r}, {self.course_title!r})"\r
\r
    # 2. SEQUENCE & CONTAINER PROTOCOLS\r
    def __len__(self) -> int:\r
        return len(self._students)\r
\r
    def __getitem__(self, index: Union[int, slice]) -> Any:\r
        return self._students[index]\r
\r
    def __contains__(self, query: Union[StudentEnrollment, str]) -> bool:\r
        if isinstance(query, StudentEnrollment):\r
            return query in self._students\r
        elif isinstance(query, str):\r
            q_lower = query.lower()\r
            return any(s.student_id.lower() == q_lower or q_lower in s.name.lower() for s in self._students)\r
        return False\r
\r
    def __iter__(self):\r
        return iter(self._students)\r
\r
    # 3. MERGING BATCHES VIA '+'\r
    def __add__(self, other: "AcademicBatchLedger") -> "AcademicBatchLedger":\r
        if not isinstance(other, AcademicBatchLedger):\r
            return NotImplemented\r
        merged = AcademicBatchLedger(f"{self.batch_code}+{other.batch_code}", f"{self.course_title} & {other.course_title}")\r
        merged._students = list(self._students)\r
        for s in other._students:\r
            if s not in merged._students:\r
                merged._students.append(s)\r
        return merged\r
\r
    # 4. INSTANT SEARCH FUNCTOR VIA ()\r
    def __call__(self, student_name_or_id: str) -> Optional[StudentEnrollment]:\r
        """Allows calling \`batch('Sourav')\` directly to search for records!"""\r
        for s in self._students:\r
            if s.student_id.lower() == student_name_or_id.lower() or student_name_or_id.lower() in s.name.lower():\r
                return s\r
        return None\r
\r
\r
def run_batch_ledger_demo():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - SMART BATCH LEDGER (DUNDER SUITE)")\r
    print("=" * 70)\r
\r
    # 1. Create Batch A\r
    batch_a = AcademicBatchLedger("PY-2026-A", "Python Pro Full-Stack")\r
    batch_a.enroll(StudentEnrollment("STU-01", "Sourav Mukherjee", 18000.0))\r
    batch_a.enroll(StudentEnrollment("STU-02", "Priyanka Sen", 18000.0))\r
\r
    # 2. Create Batch B\r
    batch_b = AcademicBatchLedger("PY-2026-B", "Data Engineering Track")\r
    batch_b.enroll(StudentEnrollment("STU-03", "Rahul Verma", 22000.0))\r
    batch_b.enroll(StudentEnrollment("STU-04", "Debolina Roy", 22000.0))\r
\r
    print(f"\\n1. __str__: {batch_a}")\r
    print(f"2. __len__: len(batch_a) = {len(batch_a)} students")\r
    print(f"3. __getitem__: batch_a[0] = {batch_a[0]}")\r
    print(f"4. __contains__: 'Priyanka' in batch_a -> {'Priyanka' in batch_a}")\r
\r
    # 5. Merging Batches via __add__\r
    print("\\n5. Merging Batches via '+' (__add__):")\r
    mega_batch = batch_a + batch_b\r
    print(f"   Mega Batch: {mega_batch}")\r
    print(f"   Total combined students: {len(mega_batch)}")\r
\r
    # 6. Lookup Functor via __call__\r
    print("\\n6. Calling batch directly like a function (\`batch('Rahul')\` via __call__):")\r
    found = mega_batch("Rahul")\r
    print(f"   Search Result: {found}")\r
\r
    print("\\n[PASSED] Smart Batch Ledger Dunder Suite Completed Successfully.")\r
\r
\r
if __name__ == "__main__":\r
    run_batch_ledger_demo()\r
`,y=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_001: OBJECT-ORIENTED PYTHON\r
             TOPIC 12: MAGIC / DUNDER METHODS & THE PYTHON DATA MODEL\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. REPRESENTATION: __str__ VS __repr__\r
--------------------------------------------------------------------------------\r
  • __str__  : User-friendly informal string for print() and str().\r
  • __repr__ : Unambiguous developer string, ideally eval(repr(obj)) == obj.\r
\r
--------------------------------------------------------------------------------\r
2. CONTAINER & SEQUENCE DUNDERS\r
--------------------------------------------------------------------------------\r
  • len(obj)       -> obj.__len__()\r
  • obj[i]         -> obj.__getitem__(i)\r
  • obj[i] = v     -> obj.__setitem__(i, v)\r
  • item in obj    -> obj.__contains__(item)\r
  • for x in obj   -> obj.__iter__()\r
\r
--------------------------------------------------------------------------------\r
3. ARITHMETIC & CALLABLE DUNDERS\r
--------------------------------------------------------------------------------\r
  • a + b          -> a.__add__(b)\r
  • b + a          -> a.__radd__(b)  (reflected fallback)\r
  • obj(arg)       -> obj.__call__(arg) (Callable functor)\r
\r
================================================================================\r
         END OF STUDY NOTE • TOPIC 12: MAGIC & DUNDER METHODS\r
================================================================================\r
`,v=[{question:"What are Magic / Dunder Methods in Python?",shortAnswer:"Special built-in methods surrounded by double underscores (e.g. __init__, __str__, __len__) that Python invokes behind the scenes to support core language syntax and operations.",explanation:"They define how custom objects interact with Python's Data Model.",hint:"Double-underscore methods defining Python Data Model behavior.",level:"basic",codeExample:"def __len__(self): return len(self._items)"},{question:"What is the key difference between '__str__' and '__repr__'?",shortAnswer:"'__str__' returns a readable, user-friendly string for print() and UI display; '__repr__' returns an unambiguous, technical string for developers and debuggers (ideally matching eval(repr(obj)) == obj).",explanation:"If __str__ is missing, Python falls back to __repr__ automatically.",hint:"__str__ is for end users; __repr__ is for developers and debuggers.",level:"basic",codeExample:`# __str__: 'Sourav (STU-101)'
# __repr__: 'Student(id=101, name="Sourav")'`},{question:"What happens if a class defines '__repr__' but does NOT define '__str__'?",shortAnswer:"Python automatically falls back to using '__repr__' for 'print()' and 'str()' calls.",explanation:"Best practice: Always implement __repr__ first on every custom class.",hint:"Python falls back to __repr__ when __str__ is not defined.",level:"basic",codeExample:`class A:
    def __repr__(self): return 'A()'
print(A())  # Output: 'A()'`},{question:"What requirement must the return value of '__len__' satisfy?",shortAnswer:"It must return a non-negative integer (>= 0); returning floats, negative numbers, or non-integers raises a TypeError or ValueError.",explanation:"Enforced by Python's C core.",hint:"Must return a non-negative integer (>= 0).",level:"basic",codeExample:`def __len__(self):
    return len(self._data)`},{question:"What magic methods enable square-bracket indexing (obj[key]) and slicing (obj[1:3])?",shortAnswer:"'__getitem__(self, key)' for reading, '__setitem__(self, key, value)' for writing, and '__delitem__(self, key)' for deleting.",explanation:"Key can be an integer, string, or slice object.",hint:"__getitem__, __setitem__, and __delitem__.",level:"basic",codeExample:`def __getitem__(self, idx):
    return self._items[idx]`},{question:"What magic method powers the 'in' membership testing operator ('item in obj')?",shortAnswer:"The '__contains__(self, item)' method, which must return True or False.",explanation:"If __contains__ is omitted, Python falls back to iterating with __iter__ or __getitem__.",hint:"The __contains__ magic method.",level:"basic",codeExample:`def __contains__(self, query):
    return query in self._data`},{question:"What does the '__call__' magic method do?",shortAnswer:"Allows an object instance to be invoked directly like a standard function (e.g. my_obj(arg1, arg2)), creating stateful Function Objects or Functors.",explanation:"Used extensively in decorators, pricing calculators, and neural network layers (PyTorch nn.Module).",hint:"Makes object instances callable like functions: obj().",level:"moderate",codeExample:`class Multiplier:
    def __init__(self, f): self.f = f
    def __call__(self, x): return x * self.f`},{question:"What is the relationship between '__eq__' and '__hash__'?",shortAnswer:"If two objects compare equal via '__eq__', they MUST return the exact same integer from '__hash__'; if a mutable class overrides '__eq__', Python automatically sets '__hash__ = None' to prevent set/dict corruption.",explanation:"Guarantees dictionary bucket lookup correctness.",hint:"Equal objects must have identical hash values; mutable objects with __eq__ are unhashable by default.",level:"complex",codeExample:`def __hash__(self):
    return hash((self.id, self.name))`},{question:"What does the '@functools.total_ordering' decorator do?",shortAnswer:"Given a class defining '__eq__' and at least one rich comparison dunder (__lt__, __le__, __gt__, or __ge__), it automatically generates all remaining comparison methods.",explanation:"Eliminates repetitive boilerplate comparison methods.",hint:"Auto-generates all comparison operators from __eq__ and one ordering method.",level:"moderate",codeExample:`from functools import total_ordering
@total_ordering
class Box: ...`},{question:"What is the difference between '__add__', '__radd__', and '__iadd__'?",shortAnswer:"'__add__' handles left-addition (a + b); '__radd__' handles reflected right-addition (b + a when b does not implement __add__); '__iadd__' handles in-place addition (a += b).",explanation:"Provides complete control over arithmetic operations.",hint:"__add__ = left, __radd__ = reflected right, __iadd__ = in-place +=.",level:"moderate",codeExample:`# a + b -> a.__add__(b)
# 5 + a -> a.__radd__(5)
# a += b -> a.__iadd__(b)`},{question:"What magic method powers iteration in 'for item in obj:' loops?",shortAnswer:"The '__iter__(self)' method, which must return an iterator object.",explanation:"If missing, Python attempts legacy indexing via __getitem__ starting at 0.",hint:"The __iter__ magic method.",level:"basic",codeExample:`def __iter__(self):
    return iter(self._items)`},{question:"What is the '__bool__' magic method used for?",shortAnswer:"Determines the truth value of an object in 'if obj:' statements (returns True or False); if omitted, Python checks if '__len__() > 0'.",explanation:"Controls dynamic truthiness evaluation.",hint:"Controls boolean truth value in if conditions.",level:"basic",codeExample:`def __bool__(self):
    return self.is_active`},{question:"What magic methods manage Context Managers ('with' statements)?",shortAnswer:"'__enter__(self)' to acquire resources and '__exit__(self, exc_type, exc_val, exc_tb)' to release resources and handle errors.",explanation:"Guarantees reliable resource cleanup.",hint:"__enter__ and __exit__.",level:"basic",codeExample:`def __enter__(self): return self
def __exit__(self, *exc): self.close()`},{question:"Why should you never invent your own arbitrary dunder names like '__my_custom_method__'?",shortAnswer:"Because Python reserves all double-underscore names for future language expansion; inventing your own risks collisions with future Python keywords or built-ins.",explanation:"Use regular descriptive names for custom methods.",hint:"Python reserves all dunder names for language standards.",level:"basic",codeExample:"# Do NOT create custom __my_dunder__ names"},{question:"What magic method is called when an attribute is NOT found on an object?",shortAnswer:"'__getattr__(self, name)' is called as a fallback when normal attribute lookup fails.",explanation:"Contrasts with '__getattribute__' which intercepts EVERY attribute access.",hint:"__getattr__ is called only when an attribute lookup fails.",level:"complex",codeExample:`def __getattr__(self, name):
    return f'Dynamic: {name}'`},{question:"What is the difference between '__getattr__' and '__getattribute__'?",shortAnswer:"'__getattribute__' is called unconditionally for every attribute access; '__getattr__' is called only if the attribute was not found in the instance or class __dict__.",explanation:"Overriding __getattribute__ requires extreme care to avoid infinite recursion.",hint:"__getattribute__ intercepts everything; __getattr__ is a fallback.",level:"complex",codeExample:`# __getattribute__ -> unconditional
# __getattr__ -> fallback`},{question:`How do you implement string format specifications for 'f"{obj:fmt}"' or 'format(obj, fmt)'?`,shortAnswer:"By implementing the '__format__(self, format_spec)' magic method.",explanation:"Allows domain objects to support custom formatting codes (e.g. f'{money:inr}').",hint:"Implement the __format__ magic method.",level:"moderate",codeExample:`def __format__(self, spec):
    return f'₹{self.amount:,.2f}' if spec == 'inr' else str(self.amount)`},{question:"What magic method is invoked by 'reversed(obj)'?",shortAnswer:"The '__reversed__(self)' method.",explanation:"Allows custom containers to yield elements in reverse order efficiently.",hint:"The __reversed__ magic method.",level:"basic",codeExample:`def __reversed__(self):
    return reversed(self._items)`},{question:"Can magic methods be dynamically assigned directly to an instance (e.g. obj.__len__ = lambda: 5)?",shortAnswer:"No. Python resolves magic methods on the Class object (type(obj)), bypassing the instance dictionary for performance reasons.",explanation:"A key CPython optimization rule for dunder dispatch.",hint:"No, Python looks up magic methods on the Class, not the instance dict.",level:"complex",codeExample:"# Assigning obj.__len__ on an instance is ignored by len(obj)"},{question:"What magic method is called when an object is deleted or garbage-collected?",shortAnswer:"The '__del__(self)' finalizer method.",explanation:"Called when the object's reference count drops to zero.",hint:"The __del__ finalizer method.",level:"moderate",codeExample:`def __del__(self):
    print('Object destroyed')`},{question:"How do you make a class support bitwise operations (e.g. |, &, ^)?",shortAnswer:"By implementing '__or__', '__and__', and '__xor__' magic methods.",explanation:"Used extensively in permission masks, flag enums, and pandas/SQLAlchemy queries.",hint:"Implement __or__, __and__, and __xor__.",level:"moderate",codeExample:"def __or__(self, other): return PermissionSet(self.flags | other.flags)"},{question:"What magic method enables copying behavior for 'copy.copy(obj)' and 'copy.deepcopy(obj)'?",shortAnswer:"'__copy__(self)' and '__deepcopy__(self, memo)' methods.",explanation:"Provides custom shallow and deep cloning logic.",hint:"__copy__ and __deepcopy__.",level:"moderate",codeExample:"def __copy__(self): return MyClass(self.data)"},{question:"What is the Python Data Model / Object Protocol?",shortAnswer:"The formal API and set of magic methods that allows user-defined classes to hook into Python's native operators, syntax, built-ins, and iteration mechanics.",explanation:"Transforms custom objects into first-class citizens in the Python ecosystem.",hint:"The formal API defining how objects interact with Python syntax and operators.",level:"basic",codeExample:"# Implementing dunders makes classes first-class Python objects"},{question:"Why should '__repr__' always be implemented on domain models?",shortAnswer:"Because it provides clear, unambiguous diagnostics in logs, debuggers, error tracebacks, and interactive shells, drastically reducing debugging time.",explanation:"A fundamental hallmark of professional Python engineering.",hint:"Provides clear diagnostic strings in debuggers, logs, and tracebacks.",level:"basic",codeExample:"# Crucial for logging and debugging: def __repr__(self):"},{question:"What is the golden rule for implementing Magic / Dunder methods?",shortAnswer:"Implement dunder methods only when they naturalize domain syntax (e.g. len(), +, indexing), keep their behavior intuitive and expected, and always implement __repr__ as the baseline foundation.",explanation:"Makes domain objects feel like native built-in Python data structures.",hint:"Naturalize syntax, keep behavior intuitive, and always provide __repr__.",level:"basic",codeExample:"# Clean, intuitive, Pythonic Data Model integration"}];function I(){const d=o.useRef([]),[a,_]=o.useState("repr"),[t,l]=o.useState("len"),[c,N]=o.useState("Rahul");o.useEffect(()=>{const s=new IntersectionObserver(i=>{i.forEach(m=>{m.isIntersecting&&m.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return d.current.forEach(i=>{i&&s.observe(i)}),()=>s.disconnect()},[]);const n=s=>{s&&!d.current.includes(s)&&d.current.push(s)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:n,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_001"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 12"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Object-Oriented Programming (OOP) in Python"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Magic / Dunder Methods & the ",e.jsx("span",{className:"text-teal-400",children:"Python Data Model"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master Python's built-in object protocols: string representations (",e.jsx("code",{className:"text-teal-300 font-mono",children:"__str__"})," vs ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"__repr__"}),"), container indexing (",e.jsx("code",{className:"text-purple-300 font-mono",children:"__getitem__"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"__len__"}),"), operator overloading (",e.jsx("code",{className:"text-amber-300 font-mono",children:"__add__"}),"), and stateful callable objects (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"__call__"}),")."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔤 __str__ vs __repr__ Protocols"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📦 Container Sequence Protocols (__len__, __getitem__)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"➕ Arithmetic & In-Place Overloads (__add__, __iadd__)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ Callable Functors (__call__)"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"✨"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Python Data Model & Magic Protocols"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["In Python, special double-underscore (",e.jsx("strong",{children:"dunder"}),") methods allow custom user-defined objects to integrate seamlessly with native language keywords, built-ins, and operators:"]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Representation"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"__str__, __repr__"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Controls string rendering for print(), logs, and interactive shells."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"2️⃣ Containers"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"__len__, __getitem__"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Enables len(obj), obj[i], obj[1:3], and item in obj."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"3️⃣ Arithmetic"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"__add__, __mul__"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Customizes +, -, *, and reflected operators (+ with numbers)."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 shadow-lg",children:[e.jsx("div",{className:"text-amber-400 font-bold text-sm mb-1",children:"4️⃣ Callable Functors"}),e.jsx("code",{className:"text-xs font-mono text-amber-300 block mb-1",children:"__call__(self, ...)"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Allows instances to be executed directly like functions: obj(arg)."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Golden Rule: __str__ vs __repr__"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:[e.jsx("code",{className:"text-teal-300 font-mono",children:"__str__"})," is for ",e.jsx("strong",{children:"users"})," (friendly, informal UI string). ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"__repr__"})," is for ",e.jsx("strong",{children:"developers"})," (unambiguous, technical, ideally matching ",e.jsx("code",{className:"text-cyan-300",children:"eval(repr(obj)) == obj"}),"). Always implement ",e.jsx("code",{className:"text-cyan-300",children:"__repr__"})," first!"]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Dunder Protocols & Data Model Hooks"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>_("repr"),className:r("px-3 py-1.5 rounded-lg transition-all",a==="repr"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"__str__ vs __repr__"}),e.jsx("button",{onClick:()=>_("container"),className:r("px-3 py-1.5 rounded-lg transition-all",a==="container"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Sequence Protocol"}),e.jsx("button",{onClick:()=>_("functor"),className:r("px-3 py-1.5 rounded-lg transition-all",a==="functor"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Callable Functors (__call__)"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining representation dualities, sequence container indexing, and callable functor execution:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:a==="repr"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"REPRESENTATION DUALITY: __str__ VS __repr__"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"__str__(self) - For End Users"}),e.jsx("text",{x:"20",y:"60",fill:"#cbd5e1",fontSize:"10",children:"• Triggered by `print(obj)` and `str(obj)`"}),e.jsx("text",{x:"20",y:"85",fill:"#cbd5e1",fontSize:"10",children:"• Informal, readable, clean presentation"}),e.jsx("rect",{x:"20",y:"125",width:"340",height:"90",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"150",fill:"#a7f3d0",fontSize:"10 font-bold",children:"Sample Output:"}),e.jsx("text",{x:"30",y:"175",fill:"#34d399",fontSize:"11 font-mono",children:"Sourav Mukherjee (STU-101): 94.5/100"}),e.jsx("text",{x:"30",y:"195",fill:"#ecfdf5",fontSize:"8 font-mono",children:"User UI Display / Email Body"})]}),e.jsxs("g",{transform:"translate(460, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"20",y:"30",fill:"#a5f3fc",fontSize:"12",fontWeight:"bold",children:"__repr__(self) - For Developers"}),e.jsx("text",{x:"20",y:"60",fill:"#cbd5e1",fontSize:"10",children:"• Triggered by REPL, logs, debuggers"}),e.jsx("text",{x:"20",y:"85",fill:"#cbd5e1",fontSize:"10",children:"• Unambiguous, explicit, eval-ready"}),e.jsx("rect",{x:"20",y:"125",width:"340",height:"90",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"30",y:"150",fill:"#38bdf8",fontSize:"10 font-bold",children:"Sample Output:"}),e.jsx("text",{x:"30",y:"175",fill:"#38bdf8",fontSize:"9 font-mono",children:"StudentScoreRecord('STU-101', 'Sourav', 94.5)"}),e.jsx("text",{x:"30",y:"195",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Log Tracebacks / IDE Tooltips"})]})]}):a==="container"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"CUSTOM CONTAINER SEQUENCE DUNDER PROTOCOLS"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"190",height:"240",rx:"6",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"15",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"1. len(obj)"}),e.jsx("text",{x:"15",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"def __len__(self):"}),e.jsx("text",{x:"25",y:"80",fill:"#34d399",fontSize:"9 font-mono",children:"return len(data)"}),e.jsx("text",{x:"15",y:"120",fill:"#cbd5e1",fontSize:"9",children:"• Must return"}),e.jsx("text",{x:"15",y:"140",fill:"#cbd5e1",fontSize:"9",children:"integer >= 0"}),e.jsx("rect",{x:"210",y:"0",width:"190",height:"240",rx:"6",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"225",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. obj[i] / Slicing"}),e.jsx("text",{x:"225",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"def __getitem__(s, i):"}),e.jsx("text",{x:"235",y:"80",fill:"#34d399",fontSize:"9 font-mono",children:"return data[i]"}),e.jsx("text",{x:"225",y:"120",fill:"#cbd5e1",fontSize:"9",children:"• Supports integer"}),e.jsx("text",{x:"225",y:"140",fill:"#cbd5e1",fontSize:"9",children:"and slice [1:3]"}),e.jsx("rect",{x:"420",y:"0",width:"190",height:"240",rx:"6",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"435",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"3. item in obj"}),e.jsx("text",{x:"435",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"def __contains__(s, q):"}),e.jsx("text",{x:"445",y:"80",fill:"#34d399",fontSize:"9 font-mono",children:"return q in data"}),e.jsx("text",{x:"435",y:"120",fill:"#cbd5e1",fontSize:"9",children:"• Membership"}),e.jsx("text",{x:"435",y:"140",fill:"#cbd5e1",fontSize:"9",children:"testing logic"}),e.jsx("rect",{x:"630",y:"0",width:"190",height:"240",rx:"6",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"645",y:"30",fill:"#a7f3d0",fontSize:"11 font-bold",children:"4. for x in obj"}),e.jsx("text",{x:"645",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"def __iter__(self):"}),e.jsx("text",{x:"655",y:"80",fill:"#34d399",fontSize:"9 font-mono",children:"return iter(data)"}),e.jsx("text",{x:"645",y:"120",fill:"#cbd5e1",fontSize:"9",children:"• Native Python"}),e.jsx("text",{x:"645",y:"140",fill:"#cbd5e1",fontSize:"9",children:"looping support"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"CALLABLE OBJECTS & FUNCTORS: __call__(self, ...)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"Class Definition with __call__"}),e.jsx("text",{x:"20",y:"65",fill:"#ecfdf5",fontSize:"10 font-mono",children:"class DiscountCouponFunctor:"}),e.jsx("text",{x:"40",y:"90",fill:"#ecfdf5",fontSize:"10 font-mono",children:"def __init__(self, rate): self.rate = rate"}),e.jsx("text",{x:"40",y:"115",fill:"#34d399",fontSize:"10 font-mono font-bold",children:"def __call__(self, price):"}),e.jsx("text",{x:"60",y:"140",fill:"#34d399",fontSize:"10 font-mono",children:"return price * (1 - self.rate)"}),e.jsx("rect",{x:"20",y:"165",width:"340",height:"50",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"30",y:"195",fill:"#c4b5fd",fontSize:"9 font-mono",children:"coupon = DiscountCouponFunctor(0.10)"})]}),e.jsxs("g",{transform:"translate(460, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"Direct Invocation (Like a Function!)"}),e.jsx("rect",{x:"20",y:"60",width:"340",height:"70",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"85",fill:"#34d399",fontSize:"10 font-bold",children:"Calling `coupon(20000.0)`:"}),e.jsx("text",{x:"30",y:"110",fill:"#ecfdf5",fontSize:"10 font-mono",children:"→ Returns INR 18,000.00"}),e.jsx("text",{x:"20",y:"160",fill:"#cbd5e1",fontSize:"10",children:"• Retains internal state (usage counter)"}),e.jsx("text",{x:"20",y:"185",fill:"#cbd5e1",fontSize:"10",children:"• Used in AI neural networks & middleware"})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Smart Batch Ledger (Live Dunder Suite)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Click dunder operations to witness how magic methods translate native Python syntax into custom container behavior:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 block font-bold",children:"Select Dunder Operation to Execute"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("button",{onClick:()=>l("len"),className:r("p-3 rounded-lg text-left text-xs font-mono transition-all border",t==="len"?"bg-teal-950/80 border-teal-500 text-teal-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"font-bold text-teal-300",children:"1. len(batch_a) (__len__)"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"Queries student enrollment count"})]}),e.jsxs("button",{onClick:()=>l("getitem"),className:r("p-3 rounded-lg text-left text-xs font-mono transition-all border",t==="getitem"?"bg-cyan-950/80 border-cyan-500 text-cyan-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"font-bold text-cyan-300",children:"2. batch_a[0] (__getitem__)"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"Direct square-bracket index lookup"})]}),e.jsxs("button",{onClick:()=>l("contains"),className:r("p-3 rounded-lg text-left text-xs font-mono transition-all border",t==="contains"?"bg-purple-950/80 border-purple-500 text-purple-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"font-bold text-purple-300",children:"3. 'Priyanka' in batch_a (__contains__)"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"Sub-string membership testing"})]}),e.jsxs("button",{onClick:()=>l("add"),className:r("p-3 rounded-lg text-left text-xs font-mono transition-all border",t==="add"?"bg-emerald-950/80 border-emerald-500 text-emerald-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"font-bold text-emerald-300",children:"4. batch_a + batch_b (__add__)"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"Merges two batches into a combined ledger"})]}),e.jsxs("button",{onClick:()=>l("call"),className:r("p-3 rounded-lg text-left text-xs font-mono transition-all border",t==="call"?"bg-amber-950/80 border-amber-500 text-amber-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"font-bold text-amber-300",children:'5. batch("Rahul") (__call__ Functor)'}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"Instant lookup calling container as a function"})]})]})]}),e.jsxs("div",{className:"space-y-3 flex flex-col justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block font-bold",children:"Live Dunder Execution Output"}),e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-3 text-xs font-mono flex-1",children:[t==="len"&&e.jsxs("div",{children:[e.jsxs("div",{className:"text-slate-400",children:["Executing: ",e.jsx("code",{className:"text-teal-300",children:"len(batch_a)"})]}),e.jsx("div",{className:"text-emerald-300 font-bold text-lg mt-2",children:"→ 2 Students Enrolled"}),e.jsxs("div",{className:"text-[11px] text-slate-500 mt-1",children:["Invoked: ",e.jsx("code",{className:"text-teal-400",children:"batch_a.__len__()"})]})]}),t==="getitem"&&e.jsxs("div",{children:[e.jsxs("div",{className:"text-slate-400",children:["Executing: ",e.jsx("code",{className:"text-cyan-300",children:"batch_a[0]"})]}),e.jsx("div",{className:"text-cyan-300 font-bold mt-2",children:"→ [STU-01] Sourav Mukherjee (Paid: INR 18,000.00)"}),e.jsxs("div",{className:"text-[11px] text-slate-500 mt-1",children:["Invoked: ",e.jsx("code",{className:"text-cyan-400",children:"batch_a.__getitem__(0)"})]})]}),t==="contains"&&e.jsxs("div",{children:[e.jsxs("div",{className:"text-slate-400",children:["Executing: ",e.jsx("code",{className:"text-purple-300",children:"'Priyanka' in batch_a"})]}),e.jsx("div",{className:"text-purple-300 font-bold text-lg mt-2",children:"→ True (Found STU-02)"}),e.jsxs("div",{className:"text-[11px] text-slate-500 mt-1",children:["Invoked: ",e.jsx("code",{className:"text-purple-400",children:"batch_a.__contains__('Priyanka')"})]})]}),t==="add"&&e.jsxs("div",{children:[e.jsxs("div",{className:"text-slate-400",children:["Executing: ",e.jsx("code",{className:"text-emerald-300",children:"mega_batch = batch_a + batch_b"})]}),e.jsx("div",{className:"text-emerald-300 font-bold mt-2",children:"→ Batch [PY-2026-A+PY-2026-B] (4 Total Students)"}),e.jsx("div",{className:"text-[11px] text-slate-400 mt-1",children:"Students: Sourav, Priyanka, Rahul, Debolina"}),e.jsxs("div",{className:"text-[11px] text-slate-500 mt-1",children:["Invoked: ",e.jsx("code",{className:"text-emerald-400",children:"batch_a.__add__(batch_b)"})]})]}),t==="call"&&e.jsxs("div",{children:[e.jsxs("div",{className:"text-slate-400",children:["Executing: ",e.jsxs("code",{className:"text-amber-300",children:['mega_batch("',c,'")']})]}),e.jsx("div",{className:"text-amber-300 font-bold mt-2",children:"→ [STU-03] Rahul Verma (Paid: INR 22,000.00)"}),e.jsxs("div",{className:"text-[11px] text-slate-500 mt-1",children:["Invoked: ",e.jsxs("code",{className:"text-amber-400",children:['mega_batch.__call__("',c,'")']})]})]})]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Magic / Dunder Methods Reference Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Category"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Dunder Methods"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Triggered By Syntax"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Data Model Purpose"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"Representation"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"__str__, __repr__"}),e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300",children:"print(x), repr(x)"}),e.jsx("td",{className:"py-3 px-4",children:"User display vs debugging string formatting"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Sequence / Container"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"__len__, __getitem__, __contains__"}),e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300",children:"len(x), x[0], k in x"}),e.jsx("td",{className:"py-3 px-4",children:"Length, indexing, slicing, and membership testing"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"Arithmetic Overloads"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"__add__, __radd__, __iadd__"}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300",children:"a + b, 5 + b, a += b"}),e.jsx("td",{className:"py-3 px-4",children:"Custom math, vector arithmetic, and batch merging"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"Comparison & Hashing"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"__eq__, __lt__, __hash__"}),e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300",children:"a == b, a < b, set([a])"}),e.jsx("td",{className:"py-3 px-4",children:"Sorting, equality, and hash table membership"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-300 font-semibold",children:"Callable Functors"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"__call__"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-300",children:"obj(*args, **kwargs)"}),e.jsx("td",{className:"py-3 px-4",children:"Allows instances to be executed directly like functions"})]})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating string representation, container indexing, arithmetic overloads, and batch ledgers:"}),e.jsx(x,{files:[{filename:"dunder_representation_and_equality.py",code:p,description:"String representations (__str__, __repr__), equality (__eq__), @total_ordering, and hashability."},{filename:"dunder_containers_and_sequences.py",code:b,description:"Container sequence protocols (__len__, __getitem__, __setitem__, __delitem__, __contains__, __iter__)."},{filename:"dunder_arithmetic_and_callable.py",code:g,description:"Arithmetic overloads (__add__, __radd__, __iadd__) and callable stateful functors (__call__)."},{filename:"smart_student_batch_ledger.py",code:j,description:"Production Academic Batch Ledger integrating __repr__, __str__, __len__, __getitem__, __add__, and __call__."}]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Non-Integer Return from `__len__`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Returning floats, booleans, or negative numbers from ",e.jsx("code",{className:"text-rose-300 font-mono",children:"__len__"})," crashes Python with ",e.jsx("code",{className:"text-rose-300 font-mono",children:"TypeError: '__len__' must return >= 0 integer"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always return ",e.jsx("code",{className:"text-emerald-300",children:"int >= 0"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Inventing Custom Dunder Names"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Creating names like ",e.jsx("code",{className:"text-amber-300 font-mono",children:"def __my_custom_dunder__()"})," risks collisions with future Python releases that reserve all double underscores."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Use standard alphanumeric names for custom methods."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Monkey-Patching Dunders on Instances"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-purple-300 font-mono",children:"obj.__len__ = lambda: 5"})," is ignored by ",e.jsx("code",{className:"text-purple-300 font-mono",children:"len(obj)"})," because CPython resolves dunders on the Class type!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Define dunders on class bodies, not instances."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Mutating Objects Stored in Sets/Dicts"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Mutating attributes that determine ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"__hash__"})," corrupts hash buckets, making the object unfindable in sets or dictionaries."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Only hash immutable attributes (tuples, ids, strings)."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering Magic / Dunder methods, representation protocols, container sequences, and functors:"}),e.jsx(f,{questions:v})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with Dunder method tables, container blueprints, and functor patterns:"}),e.jsx("div",{className:"mb-10",children:e.jsx(h,{content:y,filename:"python_topic12_magic_and_dunder_methods_notes.txt",title:"Print Topic 12 Study Notes"})}),e.jsx(u,{})]})]})]})}export{I as default};
