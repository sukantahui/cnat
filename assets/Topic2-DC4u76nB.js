import{b as s,j as e,bg as o}from"./vendor-react-core-Doz9nIC6.js";import{P as A}from"./PythonFileLoader-hCi5osN-.js";import{P as C}from"./PlainTextPrint-C08xhKA4.js";import{F as E}from"./FAQTemplate-CkSqDH4B.js";import{T}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const k=`# topic2_files/init_constructor_mechanics.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Constructors & the __init__() method\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 2 - File 1: Constructor Mechanics, Parameter Validation & Return None Rule\r
Demonstrates:\r
  1. Defining __init__(self, ...) with mandatory and default arguments\r
  2. Guarding invariants via input validation inside __init__\r
  3. Why __init__ must return None (attempting to return a value raises TypeError)\r
  4. Explicit attribute binding to the instance namespace\r
"""\r
\r
class CourseEnrollment:\r
    """Represents a validated student enrollment."""\r
\r
    def __init__(self, student_id: str, full_name: str, course_fee: float, discount_percent: float = 0.0):\r
        # 1. Parameter Validation Guards\r
        if not student_id or not full_name:\r
            raise ValueError("Student ID and Full Name cannot be empty strings!")\r
        if course_fee <= 0:\r
            raise ValueError(f"Course fee must be positive: INR {course_fee}")\r
        if not (0.0 <= discount_percent <= 50.0):\r
            raise ValueError(f"Discount must be between 0% and 50%: {discount_percent}%")\r
\r
        # 2. Attribute Binding\r
        self.student_id = student_id\r
        self.full_name = full_name\r
        self.course_fee = float(course_fee)\r
        self.discount_percent = float(discount_percent)\r
        \r
        # Computed attribute\r
        self.net_fee = self.course_fee * (1 - (self.discount_percent / 100))\r
\r
    def get_summary(self) -> str:\r
        return (\r
            f"Enrollment [{self.student_id}]: {self.full_name} | "\r
            f"Gross: INR {self.course_fee:,.2f} | Discount: {self.discount_percent}% | "\r
            f"Net Due: INR {self.net_fee:,.2f}"\r
        )\r
\r
\r
def demonstrate_constructor_mechanics():\r
    print("=" * 70)\r
    print("1. VALIDATED CONSTRUCTOR INITIALIZATION")\r
    print("=" * 70)\r
\r
    # Valid Instantiation\r
    enrollment = CourseEnrollment("ENR-2026-01", "Souvik Ghosh", 15000.0, 10.0)\r
    print("Successfully Initialized Object:")\r
    print(f"  * {enrollment.get_summary()}")\r
\r
    # Demonstrating Validation Guard in Action\r
    print("\\nAttempting invalid enrollment (Discount: 75%):")\r
    try:\r
        invalid_enr = CourseEnrollment("ENR-99", "Tester", 10000.0, 75.0)\r
    except ValueError as err:\r
        print(f"  [CONSTRUCTOR BLOCKED] ValueError: {err}")\r
\r
\r
def demonstrate_return_none_rule():\r
    print("\\n" + "=" * 70)\r
    print("2. WHY __init__ MUST ALWAYS RETURN None")\r
    print("=" * 70)\r
    print(r"""\r
Rule:\r
  - In Python, \`__new__\` creates and returns the new object.\r
  - \`__init__\` is only responsible for mutating that object (binding attributes).\r
  - If you write \`return 42\` inside \`__init__\`, Python immediately raises:\r
    \`TypeError: __init__() should return None, not 'int'\`\r
""")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_constructor_mechanics()\r
    demonstrate_return_none_rule()\r
`,R=`# topic2_files/flexible_args_and_kwargs_constructors.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Constructors & the __init__() method\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 2 - File 2: Flexible Constructors (*args, **kwargs) & Alternative Constructors\r
Demonstrates:\r
  1. Accepting variable keyword arguments (**kwargs) in __init__\r
  2. The Pythonic pattern for Multiple Constructors: @classmethod factory methods\r
  3. Constructing objects from raw JSON / dictionary payloads vs individual parameters\r
"""\r
\r
import json\r
from typing import Dict, Any\r
\r
class StudentProfile:\r
    """Demonstrates standard instantiation and alternative classmethod constructors."""\r
\r
    def __init__(self, student_id: str, name: str, email: str, **metadata):\r
        self.student_id = student_id\r
        self.name = name\r
        self.email = email\r
        self.metadata = metadata  # Stores arbitrary extra attributes (city, phone, etc.)\r
\r
    # =================================================================\r
    # ALTERNATIVE CONSTRUCTOR 1: From a Dictionary / JSON Payload\r
    # =================================================================\r
    @classmethod\r
    def from_dict(cls, data: Dict[str, Any]):\r
        """Constructs a StudentProfile directly from a dictionary payload."""\r
        return cls(\r
            student_id=data.get("id", "UNASSIGNED"),\r
            name=data.get("full_name", "Anonymous"),\r
            email=data.get("email_address", "no-reply@codernaccotax.co.in"),\r
            city=data.get("city", "Barrackpore")\r
        )\r
\r
    # =================================================================\r
    # ALTERNATIVE CONSTRUCTOR 2: From a Comma-Separated CSV String\r
    # =================================================================\r
    @classmethod\r
    def from_csv_string(cls, csv_line: str):\r
        """Constructs a StudentProfile from a raw CSV record."""\r
        parts = [p.strip() for p in csv_line.split(",")]\r
        return cls(student_id=parts[0], name=parts[1], email=parts[2])\r
\r
    def __str__(self) -> str:\r
        meta_str = f" | Extra: {self.metadata}" if self.metadata else ""\r
        return f"StudentProfile[{self.student_id}]: {self.name} <{self.email}>{meta_str}"\r
\r
\r
def demonstrate_alternative_constructors():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - FLEXIBLE & ALTERNATIVE CONSTRUCTORS")\r
    print("=" * 70)\r
\r
    # 1. Standard Constructor\r
    s1 = StudentProfile("STU-101", "Rohan Das", "rohan@gmail.com", phone="+91-9830011111", city="Kolkata")\r
    print("1. Created via Standard Constructor (__init__ with **kwargs):")\r
    print(f"   {s1}\\n")\r
\r
    # 2. From Dictionary\r
    raw_payload = {"id": "STU-102", "full_name": "Sampa Paul", "email_address": "sampa@yahoo.com", "city": "Barrackpore"}\r
    s2 = StudentProfile.from_dict(raw_payload)\r
    print("2. Created via Alternative Constructor (StudentProfile.from_dict):")\r
    print(f"   {s2}\\n")\r
\r
    # 3. From CSV String\r
    csv_data = "STU-103, Aniket Roy, aniket.roy@gmail.com"\r
    s3 = StudentProfile.from_csv_string(csv_data)\r
    print("3. Created via Alternative Constructor (StudentProfile.from_csv_string):")\r
    print(f"   {s3}")\r
\r
    print("\\n[PASSED] Flexible Constructors Demonstrated Successfully.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_alternative_constructors()\r
`,I=`# topic2_files/mutable_default_arguments_trap_in_init.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Constructors & the __init__() method\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 2 - File 3: The Mutable Default Argument Disaster in __init__\r
Demonstrates:\r
  1. The Classic Bug: Using \`items=[]\` or \`config={}\` as default parameter values\r
  2. Why this bug happens: Default objects are created once at function definition time!\r
  3. How modifying one instance's list silently mutates ALL other instances!\r
  4. The Canonical Solution: Default to None and initialize freshly inside __init__\r
"""\r
\r
from typing import List, Optional\r
\r
# =====================================================================\r
# 1. THE BUGGY CLASS (Shared Mutable Default List)\r
# =====================================================================\r
class BuggyStudentCard:\r
    """Anti-Pattern: Using [] as default argument value."""\r
    def __init__(self, name: str, skills: List[str] = []):\r
        self.name = name\r
        self.skills = skills  # CAUTION: All instances without explicit skills share the SAME list!\r
\r
\r
# =====================================================================\r
# 2. THE CANONICAL CORRECT CLASS (Isolated State)\r
# =====================================================================\r
class CorrectStudentCard:\r
    """Best Practice: Use None as default and create fresh list per instance."""\r
    def __init__(self, name: str, skills: Optional[List[str]] = None):\r
        self.name = name\r
        # Canonical Python idiom:\r
        self.skills = list(skills) if skills is not None else []\r
\r
\r
def demonstrate_mutable_default_bug():\r
    print("=" * 70)\r
    print("1. THE DISASTER: BUGGY MUTABLE DEFAULT ARGUMENT")\r
    print("=" * 70)\r
\r
    # Student 1 created with default list:\r
    s1 = BuggyStudentCard("Abhishek")\r
    s1.skills.append("Python Basics")\r
    s1.skills.append("FastAPI")\r
\r
    # Student 2 created with default list:\r
    s2 = BuggyStudentCard("Debolina")\r
\r
    print(f"Student 1 Skills: {s1.skills}")\r
    print(f"Student 2 Skills: {s2.skills}  <-- [POLLUTION BUG!] Debolina has Abhishek's skills!")\r
    print(f"Are s1.skills and s2.skills the exact same object in RAM? -> {s1.skills is s2.skills}")\r
\r
\r
def demonstrate_canonical_fix():\r
    print("\\n" + "=" * 70)\r
    print("2. THE CANONICAL FIX: DEFAULT TO None")\r
    print("=" * 70)\r
\r
    # Student 1 created with None default:\r
    s1 = CorrectStudentCard("Abhishek")\r
    s1.skills.append("Python Basics")\r
    s1.skills.append("FastAPI")\r
\r
    # Student 2 created with None default:\r
    s2 = CorrectStudentCard("Debolina")\r
    s2.skills.append("Pandas & NumPy")\r
\r
    print(f"Student 1 Skills: {s1.skills}")\r
    print(f"Student 2 Skills: {s2.skills}")\r
    print(f"Are s1.skills and s2.skills the exact same object in RAM? -> {s1.skills is s2.skills}")\r
    print("\\n[PASSED] Mutable Default Arguments Trap Resolved.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_mutable_default_bug()\r
    demonstrate_canonical_fix()\r
`,P=`# topic2_files/student_admissions_and_fee_ledger.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Constructors & the __init__() method\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 2 - File 4: Student Admissions & Fee Ledger Generator (Production Case Study)\r
Demonstrates:\r
  1. Production-grade __init__ constructor with strict domain validation\r
  2. Automatic transaction receipt ID generation during construction\r
  3. Calculating net balances, discount allowances, and payment installments\r
"""\r
\r
import datetime as dt\r
from typing import Optional, List\r
\r
class StudentAdmissionLedger:\r
    """Enterprise Student Admission & Fee Ledger Record."""\r
    institute_code = "CODER-ACCOTAX-BKP"\r
    _sequence_counter = 1000\r
\r
    def __init__(\r
        self,\r
        student_name: str,\r
        guardian_contact: str,\r
        course_name: str,\r
        total_course_fee: float,\r
        initial_downpayment: float,\r
        scholarship_coupon: Optional[str] = None\r
    ):\r
        # 1. Validation Invariants\r
        if not student_name.strip():\r
            raise ValueError("Student name cannot be blank!")\r
        if total_course_fee <= 0:\r
            raise ValueError("Total course fee must be positive!")\r
        if initial_downpayment < 0 or initial_downpayment > total_course_fee:\r
            raise ValueError(f"Invalid downpayment: INR {initial_downpayment:,.2f}")\r
\r
        # 2. Sequence ID Generation\r
        StudentAdmissionLedger._sequence_counter += 1\r
        self.admission_id = f"ADM-2026-{StudentAdmissionLedger._sequence_counter}"\r
        self.admission_date = dt.date.today()\r
\r
        # 3. Core State\r
        self.student_name = student_name.strip()\r
        self.guardian_contact = guardian_contact.strip()\r
        self.course_name = course_name\r
        self.total_course_fee = float(total_course_fee)\r
        self.paid_amount = float(initial_downpayment)\r
        self.scholarship_coupon = scholarship_coupon\r
\r
        # 4. Computed Discount\r
        self.discount_amount = 2000.0 if scholarship_coupon == "SUPER2026" else 0.0\r
        self.net_course_fee = max(0.0, self.total_course_fee - self.discount_amount)\r
        self.due_balance = max(0.0, self.net_course_fee - self.paid_amount)\r
        self.payment_history: List[str] = [\r
            f"{self.admission_date}: Initial Downpayment INR {self.paid_amount:,.2f}"\r
        ]\r
\r
    def record_installment(self, amount: float) -> None:\r
        if amount <= 0:\r
            print(f"  [ERROR] Invalid installment: INR {amount:,.2f}")\r
            return\r
        if amount > self.due_balance:\r
            print(f"  [ERROR] Amount exceeds due balance of INR {self.due_balance:,.2f}")\r
            return\r
        self.paid_amount += amount\r
        self.due_balance -= amount\r
        self.payment_history.append(f"{dt.date.today()}: Installment INR {amount:,.2f}")\r
        print(f"  [PAYMENT RECORDED] {self.student_name}: Paid INR {amount:,.2f} | Remaining Due: INR {self.due_balance:,.2f}")\r
\r
    def generate_invoice(self) -> str:\r
        return (\r
            f"======================================================================\\n"\r
            f"CODER & ACCOTAX - STUDENT ADMISSION INVOICE\\n"\r
            f"Admission ID  : {self.admission_id} | Date: {self.admission_date}\\n"\r
            f"Student Name  : {self.student_name} | Contact: {self.guardian_contact}\\n"\r
            f"Course Enrolled: {self.course_name}\\n"\r
            f"Gross Fee     : INR {self.total_course_fee:,.2f}\\n"\r
            f"Scholarship   : -INR {self.discount_amount:,.2f} (Coupon: {self.scholarship_coupon or 'None'})\\n"\r
            f"Net Course Fee: INR {self.net_course_fee:,.2f}\\n"\r
            f"Paid to Date  : INR {self.paid_amount:,.2f}\\n"\r
            f"Outstanding   : INR {self.due_balance:,.2f}\\n"\r
            f"======================================================================"\r
        )\r
\r
\r
def run_admission_demo():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - STUDENT ADMISSIONS CASE STUDY")\r
    print("=" * 70)\r
\r
    # 1. Instantiate with Valid Parameters & Coupon\r
    adm = StudentAdmissionLedger(\r
        student_name="Priyanka Sen",\r
        guardian_contact="+91-9830022222",\r
        course_name="Python Pro Full-Stack Development",\r
        total_course_fee=18000.0,\r
        initial_downpayment=6000.0,\r
        scholarship_coupon="SUPER2026"\r
    )\r
\r
    print(adm.generate_invoice())\r
\r
    # 2. Record next installment\r
    print("\\nRecording subsequent monthly installment:")\r
    adm.record_installment(5000.0)\r
\r
    print("\\n[PASSED] Student Admissions Ledger Suite Complete.")\r
\r
\r
if __name__ == "__main__":\r
    run_admission_demo()\r
`,D=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_001: OBJECT-ORIENTED PYTHON\r
            TOPIC 2: CONSTRUCTORS & THE __init__() INITIALIZER METHOD\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. ANATOMY OF A VALIDATED CONSTRUCTOR\r
--------------------------------------------------------------------------------\r
  class CourseEnrollment:\r
      def __init__(self, student_id: str, name: str, fee: float, discount: float = 0.0):\r
          # 1. Validation Guard:\r
          if fee <= 0:\r
              raise ValueError("Fee must be positive!")\r
\r
          # 2. State Binding:\r
          self.student_id = student_id\r
          self.name = name\r
          self.fee = fee\r
          self.discount = discount\r
\r
          # 3. Derived State:\r
          self.net_fee = fee * (1 - discount / 100)\r
\r
--------------------------------------------------------------------------------\r
2. THE MUTABLE DEFAULT ARGUMENT TRAP & FIX\r
--------------------------------------------------------------------------------\r
  ❌ BUGGY (Shared list in RAM):\r
      def __init__(self, name: str, skills: list = []):\r
          self.skills = skills\r
\r
  ✓ CORRECT (Isolated fresh list per instance):\r
      def __init__(self, name: str, skills: list = None):\r
          self.skills = list(skills) if skills is not None else []\r
\r
--------------------------------------------------------------------------------\r
3. ALTERNATIVE CONSTRUCTORS VIA @classmethod\r
--------------------------------------------------------------------------------\r
  @classmethod\r
  def from_dict(cls, data: dict):\r
      return cls(student_id=data['id'], name=data['name'], fee=data['fee'])\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 2: CONSTRUCTORS & __init__()\r
================================================================================\r
`,O=[{question:"What is the purpose of the '__init__' method in a Python class?",shortAnswer:"To initialize a newly created object instance by assigning initial attributes and establishing invariants upon creation.",explanation:"Automatically executed after '__new__' allocates the object in heap memory.",hint:"Initializes instance attributes after memory allocation.",level:"basic",codeExample:`class Student:
    def __init__(self, name):
        self.name = name`},{question:"Why must the first parameter of '__init__' always be 'self'?",shortAnswer:"Because Python automatically passes the active newly allocated object instance as the first argument when invoking the constructor.",explanation:"Allows attributes to be assigned directly to that specific instance's namespace (self.name = ...).",hint:"Explicit reference to the newly created instance.",level:"basic",codeExample:`def __init__(self, student_id):
    self.student_id = student_id`},{question:"What happens if '__init__' attempts to return a value other than None?",shortAnswer:"Python raises a TypeError: __init__() should return None, not 'type'.",explanation:"Because '__new__' is responsible for returning the object, '__init__' is strictly an in-place initializer and must return None.",hint:"Raises TypeError if returning any non-None value.",level:"basic",codeExample:`# TypeError: __init__() should return None
def __init__(self): return 100`},{question:"What is the danger of using a mutable default argument like 'def __init__(self, items=[])'?",shortAnswer:"The empty list is created only once when the function is defined in memory; consequently, ALL instances initialized with the default argument share the exact same list in RAM, causing severe data pollution across objects.",explanation:"Modifying items on instance A silently mutates the items on instance B.",hint:"All instances share the exact same mutable object in memory.",level:"moderate",codeExample:`# DANGEROUS BUG:
def __init__(self, items=[]):
    self.items = items`},{question:"What is the canonical Python solution to the mutable default argument trap in '__init__'?",shortAnswer:"Set the default parameter to None, and create a fresh new list/dict inside '__init__': self.items = list(items) if items is not None else [].",explanation:"Ensures every instance gets its own independent heap allocation.",hint:"Default to None and initialize freshly inside the method.",level:"basic",codeExample:`def __init__(self, items=None):
    self.items = list(items) if items is not None else []`},{question:"How do you enforce parameter validation inside a constructor?",shortAnswer:"By checking parameter conditions at the start of __init__ and raising appropriate exceptions like ValueError or TypeError if invariants are violated.",explanation:"Guarantees that an invalid object can never be successfully created in memory.",hint:"Validate arguments and raise ValueError/TypeError before assigning attributes.",level:"basic",codeExample:`if fee <= 0:
    raise ValueError('Fee must be positive!')`},{question:"What is the 'Alternative Constructor' pattern in Python?",shortAnswer:"A class method decorated with @classmethod that parses non-standard inputs (like JSON dictionaries, files, or strings) and calls cls(...) to return a new instance.",explanation:"Python does not support traditional method overloading, so classmethods like .from_dict() provide clean multi-constructor factories.",hint:"Using @classmethod factory methods (e.g. from_dict, from_csv).",level:"moderate",codeExample:`@classmethod
def from_dict(cls, data):
    return cls(data['id'], data['name'])`},{question:"How do you call the parent superclass constructor from a subclass '__init__'?",shortAnswer:"Using the super().__init__(*args, **kwargs) call at the top of the subclass constructor.",explanation:"Delegates initialization of inherited attributes to the superclass.",hint:"Call super().__init__(...).",level:"basic",codeExample:`class GraduateStudent(Student):
    def __init__(self, name, thesis):
        super().__init__(name)
        self.thesis = thesis`},{question:"Can '__init__' accept variable positional (*args) and keyword arguments (**kwargs)?",shortAnswer:"Yes. Using *args and **kwargs allows constructors to accept arbitrary extra arguments or pass parameters dynamically up to a superclass.",explanation:"Commonly used in framework base classes and decorators.",hint:"Yes, standard *args and **kwargs syntax is fully supported.",level:"moderate",codeExample:`def __init__(self, name, **extra_attrs):
    self.name = name
    self.extra = extra_attrs`},{question:"What happens if a class does not define an '__init__' method?",shortAnswer:"Python executes the default empty __init__ inherited from the root 'object' class, which takes no arguments and performs no attribute assignment.",explanation:"Instances can still be created, but initial attributes must be added manually.",hint:"Inherits default empty __init__ from object class.",level:"basic",codeExample:`class Empty:
    pass
e = Empty()  # Works with 0 arguments`},{question:"What is a 'Computed' or 'Derived' attribute inside '__init__'?",shortAnswer:"An attribute calculated automatically from other input parameters during construction (e.g., self.net_salary = basic + hra - deductions).",explanation:"Simplifies object state by calculating dependent fields once at creation.",hint:"An attribute calculated from other constructor parameters.",level:"basic",codeExample:"self.net_fee = self.gross_fee * (1 - self.discount / 100)"},{question:"Can an object be created if an exception is raised inside '__init__'?",shortAnswer:"No. If an exception is raised inside __init__, object construction is aborted, no valid reference is returned, and the allocated memory is immediately garbage collected.",explanation:"Prevents invalid or half-initialized objects from existing in memory.",hint:"Construction is aborted and the incomplete object is discarded.",level:"moderate",codeExample:`try:
    s = Student(age=-5)  # Raises ValueError
except ValueError:
    # 's' was never created`},{question:"Why should you avoid performing heavy blocking network or disk I/O operations inside '__init__'?",shortAnswer:"Because constructors should be fast, predictable, and fail-safe; heavy I/O causes delays during instantiation, complicates unit testing, and makes mock testing difficult.",explanation:"Best practice: use factory methods or explicit .connect() / .load() methods for slow operations.",hint:"Constructors should be lightweight; separate heavy I/O into explicit methods.",level:"complex",codeExample:"# Better: conn = DBConnection(); conn.connect()"},{question:"What is the difference between keyword-only arguments and positional-only arguments in '__init__'?",shortAnswer:"Positional-only arguments (before /) must be passed by position; keyword-only arguments (after *) must be explicitly passed by name (e.g. def __init__(self, name, *, fee):).",explanation:"Keyword-only arguments prevent ambiguous argument placement in large constructors.",hint:"Use * to enforce keyword-only parameters.",level:"moderate",codeExample:`def __init__(self, name: str, *, is_admin: bool = False):
    self.name = name
    self.is_admin = is_admin`},{question:"What is 'Constructor Chaining'?",shortAnswer:"The practice where a subclass constructor explicitly invokes its parent superclass constructor via super().__init__() to ensure complete layered initialization.",explanation:"Essential for robust multi-level inheritance hierarchies.",hint:"Subclass invoking super().__init__() to initialize parent state.",level:"moderate",codeExample:`class B(A):
    def __init__(self):
        super().__init__()`},{question:"How do dataclasses in Python 3.7+ simplify '__init__' creation?",shortAnswer:"The @dataclass decorator automatically generates the __init__, __repr__, and __eq__ methods from type-annotated class variables without manual boilerplate.",explanation:"Eliminates repetitive 'self.x = x' assignment code.",hint:"Automatically writes __init__ from annotated fields.",level:"moderate",codeExample:`from dataclasses import dataclass
@dataclass
class Student:
    name: str
    fee: float`},{question:"Can '__init__' be called manually on an existing object after instantiation?",shortAnswer:"Yes (e.g. obj.__init__(...)), which re-executes the initialization logic and overwrites existing attributes on the object.",explanation:"Generally discouraged in production code unless intentionally resetting an object's state.",hint:"Yes, it re-runs attribute initialization on the existing instance.",level:"moderate",codeExample:`s = Student('A')
s.__init__('B')  # Re-initializes s.name to 'B'`},{question:"What is the difference between class attributes defined outside '__init__' and instance attributes defined inside '__init__'?",shortAnswer:"Class attributes are shared across all instances; instance attributes (self.attr) are uniquely owned by each individual instance.",explanation:"Modifying self.attr affects only that specific instance.",hint:"Class attributes are shared; instance attributes are unique per instance.",level:"basic",codeExample:`class Bank:
    branch = 'Barrackpore'  # Class
    def __init__(self, num): self.num = num  # Instance`},{question:"How do you handle optional dependencies or configuration dictionaries inside '__init__'?",shortAnswer:"Use dict.get() with fallback defaults (e.g. self.timeout = config.get('timeout', 30)).",explanation:"Prevents KeyError crashes when optional settings are omitted.",hint:"Use config.get('key', default).",level:"basic",codeExample:`def __init__(self, config=None):
    cfg = config or {}
    self.port = cfg.get('port', 8080)`},{question:"What is the 'Self-Assignment' pattern in '__init__'?",shortAnswer:"Assigning passed parameter values directly to instance attributes with the same name: self.name = name.",explanation:"Binds the local parameter into the instance's __dict__ namespace.",hint:"Binding parameters to self: self.name = name.",level:"basic",codeExample:"self.student_id = student_id"},{question:"Why should you avoid creating circular references inside '__init__'?",shortAnswer:"Because objects referencing each other (e.g. parent.child = child; child.parent = parent) complicate garbage collection and can delay deallocation.",explanation:"Use weakref (weak references) if reciprocal parent-child links are required.",hint:"Causes cyclic reference graphs that delay GC; use weakref instead.",level:"complex",codeExample:`import weakref
self.parent = weakref.ref(parent)`},{question:"Can an '__init__' method be asynchronous (async def __init__)?",shortAnswer:"No. Python does not support async __init__; instead, use an async classmethod factory (e.g. async def create(): ...).",explanation:"Constructors must return synchronously.",hint:"No, use async classmethod factories instead.",level:"complex",codeExample:`@classmethod
async def create(cls):
    inst = cls()
    await inst.setup()
    return inst`},{question:"What is the recommended order of operations inside a production '__init__' method?",shortAnswer:"1. super().__init__() call; 2. Validate input parameters; 3. Bind core instance attributes; 4. Calculate derived/computed fields.",explanation:"Ensures that inherited state is initialized and invalid arguments fail before any state is mutated.",hint:"Super call -> Validation -> Attribute binding -> Derived calculations.",level:"moderate",codeExample:`# 1. super().__init__()
# 2. validate(fee)
# 3. self.fee = fee
# 4. self.net = calc()`},{question:"How do you enforce type checking in '__init__' dynamically at runtime?",shortAnswer:"Using isinstance() checks or runtime data validation libraries like Pydantic or typeguard.",explanation:"Raises TypeError if unexpected argument types are provided.",hint:"Use isinstance(val, type) or Pydantic.",level:"moderate",codeExample:`if not isinstance(age, int):
    raise TypeError('Age must be an integer!')`},{question:"What is the ultimate benefit of a well-designed '__init__' constructor?",shortAnswer:"It guarantees that an object is born in a 100% valid, self-consistent state, protecting the application from runtime bugs and null pointer errors.",explanation:"Forms the cornerstone of robust object-oriented software engineering.",hint:"Guarantees complete validity and self-consistency from birth.",level:"basic",codeExample:"# Validated state from creation guarantees zero corrupted objects"}];function q(){const d=s.useRef([]),[a,c]=s.useState("constructflow"),[m,y]=s.useState("Priyanka Sen"),[u,j]=s.useState("18000"),[h,N]=s.useState("10"),[f,v]=s.useState("SUPER2026");s.useEffect(()=>{const t=new IntersectionObserver(l=>{l.forEach(g=>{g.isIntersecting&&g.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return d.current.forEach(l=>{l&&t.observe(l)}),()=>t.disconnect()},[]);const n=t=>{t&&!d.current.includes(t)&&d.current.push(t)},i=parseFloat(u),r=parseFloat(h),_=m.trim().length>0,p=!isNaN(i)&&i>0,b=!isNaN(r)&&r>=0&&r<=50,x=_&&p&&b,w=f==="SUPER2026"?2e3:0,S=x?Math.max(0,i*(1-r/100)-w):0;return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:n,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_001"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 2"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Object-Oriented Programming (OOP) in Python"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Constructors & the ",e.jsx("code",{className:"text-teal-400 font-mono",children:"__init__()"})," Method"]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master object initialization: state assignment with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"self"}),", constructor parameter validation, the return ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"None"})," rule, the classic mutable default argument disaster (",e.jsx("code",{className:"text-rose-400 font-mono",children:"skills=[]"}),"), and alternative constructors via ",e.jsx("code",{className:"text-purple-300 font-mono",children:"@classmethod"}),"."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚙️ __init__(self, ...) Mechanics"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Invariant Parameter Validation"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚠️ Mutable Default Argument Trap"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🏭 Alternative Factory Constructors"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚙️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Initializer Method: Initializing State & Invariants"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["When a class is called (e.g. ",e.jsx("code",{className:"text-teal-300 font-mono",children:'s = Student("Priyanka")'}),"), Python first allocates the raw object via ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"__new__"}),", and then immediately invokes ",e.jsx("code",{className:"text-teal-400 font-mono",children:"__init__(self, ...)"})," to configure the instance's state:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg shadow-teal-950/30",children:[e.jsx("div",{className:"text-teal-400 font-bold text-base mb-1",children:"1️⃣ The 'self' Parameter"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"self.name = name"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Explicit reference to the active newly created instance in memory."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg shadow-cyan-950/30",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-base mb-1",children:"2️⃣ Invariant Validation"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"if fee <= 0: raise ValueError"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Guarantees that corrupted or invalid objects can never be born in memory."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg shadow-purple-950/30",children:[e.jsx("div",{className:"text-purple-400 font-bold text-base mb-1",children:"3️⃣ Return None Rule"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"return None (Strict)"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Returning any non-None value raises a fatal ",e.jsx("code",{className:"text-purple-300",children:"TypeError"}),"."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-rose-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Mutable Default Argument Disaster"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-400 font-mono",children:"def __init__(self, skills=[])"})," is a dangerous bug. Python evaluates default lists only once at function definition time, causing ",e.jsx("strong",{children:"ALL"})," instances to share the exact same list in RAM! Always default to ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"None"}),"."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Constructor Execution & Memory Traps"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>c("constructflow"),className:o("px-3 py-1.5 rounded-lg transition-all",a==="constructflow"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Constructor Execution Flow"}),e.jsx("button",{onClick:()=>c("sharedtrap"),className:o("px-3 py-1.5 rounded-lg transition-all",a==="sharedtrap"?"bg-rose-900/50 text-rose-300 border border-rose-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Mutable Default Bug (Shared RAM)"}),e.jsx("button",{onClick:()=>c("factories"),className:o("px-3 py-1.5 rounded-lg transition-all",a==="factories"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Alternative Constructors (@classmethod)"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining parameter validation pipelines, heap sharing bugs, and factory instantiation:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:a==="constructflow"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"CONSTRUCTOR EXECUTION PIPELINE"}),e.jsxs("g",{transform:"translate(30, 60)",children:[e.jsx("rect",{x:"0",y:"0",width:"180",height:"200",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"1. Call Class"}),e.jsx("text",{x:"15",y:"60",fill:"#f8fafc",fontSize:"10 font-mono",children:'Student("Priyanka")'}),e.jsx("text",{x:"15",y:"90",fill:"#cbd5e1",fontSize:"10",children:"• Passes arguments"}),e.jsx("text",{x:"15",y:"110",fill:"#cbd5e1",fontSize:"10",children:"• Triggers __new__"}),e.jsx("rect",{x:"210",y:"0",width:"180",height:"200",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"225",y:"30",fill:"#a5f3fc",fontSize:"12",fontWeight:"bold",children:"2. Validation Guard"}),e.jsx("text",{x:"225",y:"60",fill:"#f8fafc",fontSize:"10 font-mono",children:"if fee <= 0:"}),e.jsx("text",{x:"225",y:"85",fill:"#fca5a5",fontSize:"10",children:"  raise ValueError"}),e.jsx("text",{x:"225",y:"110",fill:"#cbd5e1",fontSize:"10",children:"• Guards invariants"}),e.jsx("text",{x:"225",y:"130",fill:"#cbd5e1",fontSize:"10",children:"• Aborts on error"}),e.jsx("rect",{x:"420",y:"0",width:"180",height:"200",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"435",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"3. State Binding"}),e.jsx("text",{x:"435",y:"60",fill:"#f8fafc",fontSize:"10 font-mono",children:"self.name = name"}),e.jsx("text",{x:"435",y:"85",fill:"#f8fafc",fontSize:"10 font-mono",children:"self.fee = fee"}),e.jsx("text",{x:"435",y:"110",fill:"#cbd5e1",fontSize:"10",children:"• Injects into __dict__"}),e.jsx("text",{x:"435",y:"130",fill:"#cbd5e1",fontSize:"10",children:"• Computes net_fee"}),e.jsx("rect",{x:"630",y:"0",width:"180",height:"200",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"645",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"4. Return Instance"}),e.jsx("text",{x:"645",y:"60",fill:"#ecfdf5",fontSize:"10 font-mono",children:"return None"}),e.jsx("text",{x:"645",y:"85",fill:"#34d399",fontSize:"10 font-bold",children:"✓ Valid Object Ready!"}),e.jsx("text",{x:"645",y:"110",fill:"#cbd5e1",fontSize:"10",children:"• Bound to variable 's'"})]})]}):a==="sharedtrap"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#f43f5e",fontSize:"14",fontWeight:"bold",children:"THE MUTABLE DEFAULT LIST DISASTER IN RAM"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"110",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"❌ The Bug: def __init__(self, skills=[])"}),e.jsx("text",{x:"20",y:"55",fill:"#fca5a5",fontSize:"10 font-mono",children:'s1 = Student("Abhishek")'}),e.jsx("text",{x:"20",y:"75",fill:"#fca5a5",fontSize:"10 font-mono",children:'s1.skills.append("Python")'}),e.jsx("text",{x:"20",y:"95",fill:"#fca5a5",fontSize:"10 font-mono",children:'s2 = Student("Debolina")'})]}),e.jsxs("g",{transform:"translate(460, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#881337",stroke:"#e11d48"}),e.jsx("text",{x:"20",y:"30",fill:"#ffe4e6",fontSize:"12",fontWeight:"bold",children:"Shared RAM Heap Object (0x9fc810)"}),e.jsx("text",{x:"20",y:"60",fill:"#cbd5e1",fontSize:"11 font-mono",children:"['Python', 'FastAPI']"}),e.jsx("rect",{x:"20",y:"90",width:"340",height:"60",rx:"4",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"30",y:"115",fill:"#fda4af",fontSize:"10 font-bold",children:"s1.skills points to 0x9fc810"}),e.jsx("text",{x:"30",y:"135",fill:"#fda4af",fontSize:"10 font-bold",children:"s2.skills points to 0x9fc810 (SAME OBJECT!)"}),e.jsx("text",{x:"20",y:"180",fill:"#ffe4e6",fontSize:"10",children:"Debolina's profile now silently contains"}),e.jsx("text",{x:"20",y:"200",fill:"#ffe4e6",fontSize:"10",children:"Abhishek's skills due to shared default pointer!"})]}),e.jsxs("g",{transform:"translate(30, 180)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"110",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"✓ The Fix: Default to None"}),e.jsx("text",{x:"20",y:"55",fill:"#ecfdf5",fontSize:"10 font-mono",children:"def __init__(self, skills=None):"}),e.jsx("text",{x:"20",y:"75",fill:"#34d399",fontSize:"10 font-mono font-bold",children:"    self.skills = list(skills) if skills else []"}),e.jsx("text",{x:"20",y:"95",fill:"#a7f3d0",fontSize:"10",children:"Creates a fresh isolated list for every instance!"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"ALTERNATIVE CONSTRUCTORS VIA @classmethod"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"400",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"class StudentProfile:"}),e.jsx("text",{x:"20",y:"55",fill:"#ecfdf5",fontSize:"10 font-mono",children:"  def __init__(self, id, name, email): ..."}),e.jsx("text",{x:"20",y:"90",fill:"#38bdf8",fontSize:"11 font-mono font-bold",children:"  @classmethod"}),e.jsx("text",{x:"20",y:"110",fill:"#38bdf8",fontSize:"10 font-mono",children:"  def from_dict(cls, data):"}),e.jsx("text",{x:"20",y:"130",fill:"#38bdf8",fontSize:"10 font-mono",children:"      return cls(data['id'], data['name'], ...)"}),e.jsx("text",{x:"20",y:"165",fill:"#c084fc",fontSize:"11 font-mono font-bold",children:"  @classmethod"}),e.jsx("text",{x:"20",y:"185",fill:"#c084fc",fontSize:"10 font-mono",children:"  def from_csv(cls, line):"}),e.jsx("text",{x:"20",y:"205",fill:"#c084fc",fontSize:"10 font-mono",children:"      return cls(*line.split(','))"})]}),e.jsxs("g",{transform:"translate(460, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"Clean Client Usage:"}),e.jsx("text",{x:"20",y:"70",fill:"#ecfdf5",fontSize:"10 font-mono",children:"# 1. From JSON REST API:"}),e.jsx("text",{x:"20",y:"90",fill:"#34d399",fontSize:"10 font-mono",children:"s1 = StudentProfile.from_dict(api_json)"}),e.jsx("text",{x:"20",y:"130",fill:"#ecfdf5",fontSize:"10 font-mono",children:"# 2. From CSV File Stream:"}),e.jsx("text",{x:"20",y:"150",fill:"#34d399",fontSize:"10 font-mono",children:"s2 = StudentProfile.from_csv(csv_line)"}),e.jsx("rect",{x:"20",y:"180",width:"350",height:"40",rx:"4",fill:"#090d16",stroke:"#475569"}),e.jsx("text",{x:"30",y:"205",fill:"#cbd5e1",fontSize:"10 font-bold",children:"Simulates Multiple Constructors Cleanly"})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Constructor & Invariant Validator Playground"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Enter parameters below to simulate Python constructor invariant validation in real time:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 block font-bold",children:"__init__(self, name, fee, discount, coupon)"}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-mono text-slate-400 mb-1",children:"Student Name"}),e.jsx("input",{type:"text",value:m,onChange:t=>y(t.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-sm text-teal-300 font-mono"}),!_&&e.jsx("span",{className:"text-[11px] text-rose-400 font-mono",children:"ValueError: Name cannot be blank!"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-mono text-slate-400 mb-1",children:"Course Gross Fee (INR)"}),e.jsx("input",{type:"number",value:u,onChange:t=>j(t.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-sm text-teal-300 font-mono"}),!p&&e.jsx("span",{className:"text-[11px] text-rose-400 font-mono",children:"ValueError: Fee must be positive!"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-mono text-slate-400 mb-1",children:"Discount % (0-50%)"}),e.jsx("input",{type:"number",value:h,onChange:t=>N(t.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-sm text-teal-300 font-mono"}),!b&&e.jsx("span",{className:"text-[11px] text-rose-400 font-mono",children:"Must be 0-50%"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-mono text-slate-400 mb-1",children:"Coupon"}),e.jsx("input",{type:"text",value:f,onChange:t=>v(t.target.value),placeholder:"SUPER2026",className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-sm text-teal-300 font-mono"})]})]})]}),e.jsxs("div",{className:"space-y-3 flex flex-col justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block font-bold",children:"Constructed Instance State (__dict__)"}),e.jsx("div",{className:o("p-4 rounded-xl border flex-1 space-y-2",x?"bg-slate-900 border-slate-800":"bg-rose-950/40 border-rose-800"),children:x?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 text-xs font-bold font-mono",children:[e.jsx("span",{children:"✓"})," Object Initialized Successfully"]}),e.jsxs("div",{className:"text-xs font-mono text-slate-300 space-y-1",children:[e.jsxs("div",{children:['self.student_name = "',m,'"']}),e.jsxs("div",{children:["self.course_fee   = INR ",i.toLocaleString()]}),e.jsxs("div",{children:["self.discount     = ",r,"%"]}),e.jsxs("div",{children:['self.coupon       = "',f,'"']}),e.jsxs("div",{className:"text-teal-300 font-bold pt-2 border-t border-slate-800",children:["self.net_fee       = INR ",S.toLocaleString()]})]})]}):e.jsxs("div",{className:"text-rose-400 text-xs font-mono space-y-1",children:[e.jsx("div",{className:"font-bold",children:"❌ CONSTRUCTOR EXECUTION ABORTED"}),e.jsx("p",{children:"An exception was raised inside __init__; no object was created in memory!"})]})})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Constructor Patterns Reference Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Pattern"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Signature / Code"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Key Benefit"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Gotcha / Danger"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"Standard __init__"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"def __init__(self, name, fee):"}),e.jsx("td",{className:"py-3 px-4",children:"Direct, readable attribute binding"}),e.jsx("td",{className:"py-3 px-4",children:"Ensure all attributes are initialized"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"Optional None Default"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"def __init__(self, items=None):"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-bold",children:"Prevents shared RAM heap bug"}),e.jsxs("td",{className:"py-3 px-4",children:["Never write ",e.jsx("code",{className:"text-rose-400",children:"items=[]"})]})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"@classmethod Factory"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"@classmethod def from_dict(cls):"}),e.jsx("td",{className:"py-3 px-4",children:"Parses JSON / CSV / dict cleanly"}),e.jsxs("td",{className:"py-3 px-4",children:["Must return ",e.jsx("code",{className:"text-purple-300",children:"cls(...)"})]})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"Keyword-Only Guard"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"def __init__(self, name, *, fee):"}),e.jsx("td",{className:"py-3 px-4",children:"Forces explicit named parameters"}),e.jsx("td",{className:"py-3 px-4",children:"Positional calling will raise error"})]})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating constructor validation, flexible keyword parameters, mutable default fixes, and full admission ledgers:"}),e.jsx(A,{files:[{filename:"init_constructor_mechanics.py",code:k,description:"Constructor parameter declarations, input validation guards, and the return None constraint."},{filename:"flexible_args_and_kwargs_constructors.py",code:R,description:"Variadic **kwargs constructors and alternative @classmethod factory methods (from_dict, from_csv)."},{filename:"mutable_default_arguments_trap_in_init.py",code:I,description:"The classic mutable default argument disaster in RAM and its canonical None replacement fix."},{filename:"student_admissions_and_fee_ledger.py",code:P,description:"Enterprise Student Admissions & Fee Ledger Suite with validated invariants and installment scheduling."}]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Returning a Value from `__init__`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"return self"})," or ",e.jsx("code",{className:"text-rose-300 font-mono",children:"return 42"})," raises ",e.jsx("code",{className:"text-rose-300 font-mono",children:"TypeError: __init__() should return None"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," ",e.jsx("code",{className:"text-emerald-300",children:"__init__"})," must return None (or omit return entirely)."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Using `items=[]` in Parameter List"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["All instances instantiated without specifying ",e.jsx("code",{className:"text-amber-300 font-mono",children:"items"})," will silently share the exact same list in RAM!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"items=None"})," and initialize freshly inside ",e.jsx("code",{className:"text-emerald-300",children:"__init__"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Heavy I/O in Constructor"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Connecting to slow databases or fetching network APIs inside ",e.jsx("code",{className:"text-purple-300 font-mono",children:"__init__"})," freezes instantiation and breaks unit testing."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Keep constructors lightweight; use explicit ",e.jsx("code",{className:"text-emerald-300",children:"connect()"})," methods."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Forgetting `super().__init__()`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Subclasses that override ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"__init__"})," without calling ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"super().__init__()"})," fail to initialize parent state."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always call ",e.jsx("code",{className:"text-emerald-300",children:"super().__init__(*args)"})," at the start of subclass constructors."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering constructor mechanics, validation, mutable default fixes, and alternative factory methods:"}),e.jsx(E,{questions:O})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with constructor templates, mutable default fix recipes, and factory patterns:"}),e.jsx("div",{className:"mb-10",children:e.jsx(C,{content:D,filename:"python_topic2_constructors_and_init_notes.txt",title:"Print Topic 2 Study Notes"})}),e.jsx(T,{})]})]})]})}export{q as default};
