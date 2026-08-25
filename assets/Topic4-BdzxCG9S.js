import{b as n,j as e,bg as i}from"./vendor-react-core-Doz9nIC6.js";import{P as u}from"./PythonFileLoader-hCi5osN-.js";import{P as _}from"./PlainTextPrint-C08xhKA4.js";import{F as f}from"./FAQTemplate-CkSqDH4B.js";import{T as b}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const p=`# topic4_files/class_vs_instance_attributes_fundamentals.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Class attributes vs Instance attributes\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 4 - File 1: Class Attributes vs Instance Attributes Fundamentals\r
Demonstrates:\r
  1. Class Attributes: Defined in the class body; shared by ALL instances\r
  2. Instance Attributes: Defined on \`self\`; unique to each individual instance\r
  3. Memory Footprint: Class.__dict__ vs instance.__dict__\r
  4. Global updates via \`ClassName.attr = new_val\`\r
"""\r
\r
class CourseBatch:\r
    """Demonstrates shared class attributes and private instance attributes."""\r
    \r
    # =================================================================\r
    # CLASS ATTRIBUTES (Shared across all batch objects)\r
    # =================================================================\r
    institute_name = "Coder & AccoTax"\r
    branch_city = "Barrackpore"\r
    base_currency = "INR"\r
    total_batches_created = 0\r
\r
    def __init__(self, batch_code: str, course_name: str, max_capacity: int):\r
        # =============================================================\r
        # INSTANCE ATTRIBUTES (Unique to each specific batch instance)\r
        # =============================================================\r
        self.batch_code = batch_code\r
        self.course_name = course_name\r
        self.max_capacity = max_capacity\r
        self.enrolled_students = 0\r
\r
        # Increment shared class counter:\r
        CourseBatch.total_batches_created += 1\r
\r
\r
def demonstrate_attribute_scopes():\r
    print("=" * 70)\r
    print("1. CLASS ATTRIBUTES VS INSTANCE ATTRIBUTES")\r
    print("=" * 70)\r
\r
    # 1. Instantiate 2 distinct batches\r
    b1 = CourseBatch("PY-FULL-01", "Python Pro Full-Stack", 25)\r
    b2 = CourseBatch("DATA-02", "Data Analytics & Machine Learning", 30)\r
\r
    print(f"Total Batches Registered (Shared Class Counter): {CourseBatch.total_batches_created}\\n")\r
\r
    print("Batch 1 (b1):")\r
    print(f"  * Instance Attributes : batch_code='{b1.batch_code}', course='{b1.course_name}'")\r
    print(f"  * Shared Class Attrs  : institute='{b1.institute_name}', city='{b1.branch_city}'")\r
    print(f"  * b1.__dict__ (Local) : {b1.__dict__}\\n")\r
\r
    print("Batch 2 (b2):")\r
    print(f"  * Instance Attributes : batch_code='{b2.batch_code}', course='{b2.course_name}'")\r
    print(f"  * Shared Class Attrs  : institute='{b2.institute_name}', city='{b2.branch_city}'")\r
    print(f"  * b2.__dict__ (Local) : {b2.__dict__}")\r
\r
\r
def demonstrate_class_attribute_updates():\r
    print("\\n" + "=" * 70)\r
    print("2. GLOBAL CLASS ATTRIBUTE UPDATES")\r
    print("=" * 70)\r
\r
    b1 = CourseBatch("PY-01", "Python", 20)\r
    b2 = CourseBatch("PY-02", "Python Fast Track", 15)\r
\r
    print(f"Original Institute Name on b1: '{b1.institute_name}'")\r
    print(f"Original Institute Name on b2: '{b2.institute_name}'")\r
\r
    # Updating the class attribute ON THE CLASS updates all instances simultaneously:\r
    print("\\nUpdating class variable: \`CourseBatch.institute_name = 'Coder & AccoTax Academy'\`")\r
    CourseBatch.institute_name = "Coder & AccoTax Academy"\r
\r
    print(f"Updated Institute on b1: '{b1.institute_name}'")\r
    print(f"Updated Institute on b2: '{b2.institute_name}'")\r
    print(f"Notice: Neither b1.__dict__ nor b2.__dict__ was modified; lookup finds updated Class dict!")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_attribute_scopes()\r
    demonstrate_class_attribute_updates()\r
`,g=`# topic4_files/attribute_shadowing_and_mutation_gotchas.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Class attributes vs Instance attributes\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 4 - File 2: Attribute Shadowing & Mutable Class Attribute Traps\r
Demonstrates:\r
  1. The Shadowing Trap: Assigning \`obj.class_attr = val\` creates an instance shadow\r
  2. The Mutable Class Attribute Bug: Shared lists/dicts in RAM mutated in-place\r
  3. Inspecting __dict__ to prove where variables actually live\r
"""\r
\r
# =====================================================================\r
# 1. ATTRIBUTE SHADOWING DEMO\r
# =====================================================================\r
class FranchiseLocation:\r
    headquarters = "Barrackpore, Kolkata"  # Class attribute\r
\r
    def __init__(self, branch_code: str):\r
        self.branch_code = branch_code\r
\r
\r
def demonstrate_shadowing():\r
    print("=" * 70)\r
    print("1. THE ATTRIBUTE SHADOWING MECHANISM")\r
    print("=" * 70)\r
\r
    f1 = FranchiseLocation("BR-01")\r
    f2 = FranchiseLocation("BR-02")\r
\r
    print(f"Initial f1.headquarters: '{f1.headquarters}' (Read from Class.__dict__)")\r
    print(f"Initial f2.headquarters: '{f2.headquarters}' (Read from Class.__dict__)")\r
\r
    # Shadowing: assigning to f1 directly creates an instance attribute:\r
    print("\\nExecuting: \`f1.headquarters = 'Shyamnagar Sub-Branch'\`")\r
    f1.headquarters = "Shyamnagar Sub-Branch"\r
\r
    print(f"f1.headquarters (Shadowed): '{f1.headquarters}' (Read from f1.__dict__)")\r
    print(f"f2.headquarters (Original): '{f2.headquarters}' (Read from Class.__dict__)")\r
    print(f"FranchiseLocation.headquarters: '{FranchiseLocation.headquarters}' (Unchanged!)")\r
\r
    print(f"\\nf1.__dict__: {f1.__dict__}")\r
    print(f"f2.__dict__: {f2.__dict__} (Notice: headquarters is NOT in f2.__dict__!)")\r
\r
\r
# =====================================================================\r
# 2. MUTABLE CLASS ATTRIBUTE TRAP\r
# =====================================================================\r
class BuggyClassRegistry:\r
    """Anti-Pattern: Mutable list at class level intended for instance data."""\r
    all_skills = []  # Shared across all instances in RAM!\r
\r
    def __init__(self, student_name: str):\r
        self.student_name = student_name\r
\r
    def add_skill(self, skill: str):\r
        # IN-PLACE MUTATION of class attribute:\r
        self.all_skills.append(skill)\r
\r
\r
def demonstrate_mutable_class_bug():\r
    print("\\n" + "=" * 70)\r
    print("2. THE MUTABLE CLASS ATTRIBUTE SHARED MEMORY TRAP")\r
    print("=" * 70)\r
\r
    s1 = BuggyClassRegistry("Abhishek")\r
    s2 = BuggyClassRegistry("Debolina")\r
\r
    s1.add_skill("Python")\r
    s1.add_skill("Django")\r
\r
    print(f"Abhishek's skills: {s1.all_skills}")\r
    print(f"Debolina's skills: {s2.all_skills}  <-- [POLLUTION BUG!] Debolina sees Abhishek's skills!")\r
    print(f"Are s1.all_skills and s2.all_skills the exact same list? -> {s1.all_skills is s2.all_skills}")\r
    print("\\nRule: NEVER use mutable collections (lists/dicts) as class attributes unless intentionally shared across all instances!")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_shadowing()\r
    demonstrate_mutable_class_bug()\r
`,y=`# topic4_files/class_attribute_patterns_and_constants.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Class attributes vs Instance attributes\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 4 - File 3: Production Design Patterns with Class Attributes\r
Demonstrates:\r
  1. Pattern 1: Domain Constants & Configuration Presets\r
  2. Pattern 2: Global Auto-Incrementing Sequence ID Generators\r
  3. Pattern 3: Centralized Class-Level Instance Registry & Garbage Collection\r
"""\r
\r
from typing import List, Dict, ClassVar\r
\r
class CertificateIssuer:\r
    """Demonstrates production usage of class attributes for tracking and constants."""\r
\r
    # Pattern 1: Domain Constants (ClassVar annotation from typing)\r
    DEFAULT_EXPIRY_YEARS: ClassVar[int] = 3\r
    AUTHORIZED_ISSUER: ClassVar[str] = "Coder & AccoTax Educational Trust"\r
    \r
    # Pattern 2: Global Sequence Counter\r
    _sequence_counter: ClassVar[int] = 5000\r
\r
    # Pattern 3: Centralized Registry tracking living instances\r
    _active_certificates: ClassVar[List['CertificateIssuer']] = []\r
\r
    def __init__(self, student_name: str, course_name: str, grade: str):\r
        CertificateIssuer._sequence_counter += 1\r
        self.certificate_id = f"CERT-2026-{CertificateIssuer._sequence_counter}"\r
        self.student_name = student_name\r
        self.course_name = course_name\r
        self.grade = grade\r
\r
        # Register instance in class-level registry:\r
        CertificateIssuer._active_certificates.append(self)\r
\r
    @classmethod\r
    def get_total_certificates_issued(cls) -> int:\r
        return len(cls._active_certificates)\r
\r
    def __str__(self) -> str:\r
        return (\r
            f"Certificate #{self.certificate_id} | Issued To: {self.student_name} | "\r
            f"Course: {self.course_name} (Grade: {self.grade}) | Issuer: {self.AUTHORIZED_ISSUER}"\r
        )\r
\r
\r
def demonstrate_class_patterns():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - PRODUCTION CLASS ATTRIBUTE PATTERNS")\r
    print("=" * 70)\r
\r
    c1 = CertificateIssuer("Sourav Bhattacharya", "Python Pro Full-Stack", "A+")\r
    c2 = CertificateIssuer("Moumita Sen", "Data Analytics with Python", "A")\r
    c3 = CertificateIssuer("Kallol Das", "Financial Accounting & Tax", "A+")\r
\r
    print("Issued Certificates Sample:")\r
    print(f"  * {c1}")\r
    print(f"  * {c2}")\r
    print(f"  * {c3}")\r
\r
    print(f"\\nTotal Active Certificates in Registry: {CertificateIssuer.get_total_certificates_issued()}")\r
    print("\\n[PASSED] Production Class Attribute Patterns Demonstrated.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_class_patterns()\r
`,j=`# topic4_files/student_enrollment_tracker_and_analytics.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Class attributes vs Instance attributes\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 4 - File 4: Student Enrollment Tracker & Institute Analytics Suite\r
Demonstrates:\r
  1. Class attributes tracking aggregated metrics across an entire enterprise\r
  2. Instance attributes capturing individual student financial records\r
  3. Real-time dynamic business intelligence and dashboard generation\r
"""\r
\r
from typing import List, ClassVar\r
\r
class InstituteStudentAdmission:\r
    """Enterprise Student Admission modeling individual records and global analytics."""\r
    \r
    # =================================================================\r
    # CLASS ATTRIBUTES (Aggregated Institute Analytics)\r
    # =================================================================\r
    institute_name: ClassVar[str] = "Coder & AccoTax Barrackpore"\r
    total_students_enrolled: ClassVar[int] = 0\r
    total_gross_revenue: ClassVar[float] = 0.0\r
    total_scholarships_awarded: ClassVar[float] = 0.0\r
    total_cash_collected: ClassVar[float] = 0.0\r
\r
    def __init__(self, student_name: str, course_name: str, gross_fee: float, scholarship_inr: float, downpayment: float):\r
        # Instance Attributes\r
        self.student_name = student_name\r
        self.course_name = course_name\r
        self.gross_fee = float(gross_fee)\r
        self.scholarship_inr = float(scholarship_inr)\r
        self.net_fee = self.gross_fee - self.scholarship_inr\r
        self.paid_amount = float(downpayment)\r
        self.due_amount = self.net_fee - self.paid_amount\r
\r
        # Update Institute Aggregated Metrics (Class Level State)\r
        InstituteStudentAdmission.total_students_enrolled += 1\r
        InstituteStudentAdmission.total_gross_revenue += self.gross_fee\r
        InstituteStudentAdmission.total_scholarships_awarded += self.scholarship_inr\r
        InstituteStudentAdmission.total_cash_collected += self.paid_amount\r
\r
    @classmethod\r
    def generate_executive_analytics_report(cls) -> str:\r
        """Generates comprehensive financial summary from class attributes."""\r
        net_expected = cls.total_gross_revenue - cls.total_scholarships_awarded\r
        outstanding = net_expected - cls.total_cash_collected\r
\r
        return (\r
            f"======================================================================\\n"\r
            f"CODER & ACCOTAX - EXECUTIVE ANALYTICS DASHBOARD\\n"\r
            f"Institute             : {cls.institute_name}\\n"\r
            f"----------------------------------------------------------------------\\n"\r
            f"Total Students Active : {cls.total_students_enrolled}\\n"\r
            f"Total Gross Pipeline  : INR {cls.total_gross_revenue:,.2f}\\n"\r
            f"Scholarships Granted  : -INR {cls.total_scholarships_awarded:,.2f}\\n"\r
            f"Net Expected Revenue  : INR {net_expected:,.2f}\\n"\r
            f"Total Cash Collected  : INR {cls.total_cash_collected:,.2f}\\n"\r
            f"Outstanding Receivables: INR {outstanding:,.2f}\\n"\r
            f"======================================================================"\r
        )\r
\r
\r
def run_analytics_demo():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - STUDENT ENROLLMENT & ANALYTICS CASE STUDY")\r
    print("=" * 70)\r
\r
    # Enroll 3 students\r
    s1 = InstituteStudentAdmission("Priyanka Sen", "Python Pro Full-Stack", 18000.0, 2000.0, 8000.0)\r
    s2 = InstituteStudentAdmission("Sourav Mukherjee", "Data Analytics with Python", 15000.0, 1500.0, 7000.0)\r
    s3 = InstituteStudentAdmission("Tanushree Das", "Financial Accounting & GST", 12000.0, 0.0, 6000.0)\r
\r
    print(f"Enrolled {s1.student_name}, {s2.student_name}, and {s3.student_name}.\\n")\r
\r
    # Generate Global Analytics Report from Class State\r
    print(InstituteStudentAdmission.generate_executive_analytics_report())\r
    print("\\n[PASSED] Institute Enrollment Analytics Suite Completed.")\r
\r
\r
if __name__ == "__main__":\r
    run_analytics_demo()\r
`,A=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_001: OBJECT-ORIENTED PYTHON\r
            TOPIC 4: CLASS ATTRIBUTES VS INSTANCE ATTRIBUTES\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. CORE COMPARISON MATRIX\r
--------------------------------------------------------------------------------\r
  Dimension             Class Attribute                 Instance Attribute\r
  ------------------------------------------------------------------------------\r
  Where Defined         Directly inside class body      Inside __init__ on \`self\`\r
  Where Stored          Class.__dict__ (Shared)         instance.__dict__ (Isolated)\r
  Memory Copies         Exactly 1 copy in RAM           1 copy PER instance\r
  Accessed Via          ClassName.attr or obj.attr      self.attr or obj.attr\r
  Modified Via          ClassName.attr = new_val        self.attr = new_val\r
\r
--------------------------------------------------------------------------------\r
2. THE ATTRIBUTE SHADOWING MECHANISM\r
--------------------------------------------------------------------------------\r
  class Franchise:\r
      hq = "Barrackpore"\r
\r
  f1 = Franchise()\r
  f1.hq = "Shyamnagar"  # Creates 'hq' in f1.__dict__; Franchise.hq UNCHANGED!\r
\r
--------------------------------------------------------------------------------\r
3. THE MUTABLE CLASS ATTRIBUTE DISASTER\r
--------------------------------------------------------------------------------\r
  ❌ BUGGY (All instances share same list in RAM!):\r
      class Student:\r
          badges = []  # Shared across all students!\r
\r
  ✓ CORRECT (Isolated list per instance):\r
      class Student:\r
          def __init__(self):\r
              self.badges = []\r
\r
================================================================================\r
     END OF STUDY NOTE • TOPIC 4: CLASS VS INSTANCE ATTRIBUTES\r
================================================================================\r
`,N=[{question:"What is the primary difference between a Class Attribute and an Instance Attribute?",shortAnswer:"A Class Attribute is defined in the class body and shared by all instances in a single memory location; an Instance Attribute is bound to 'self' and unique to each individual object.",explanation:"Class attributes live in Class.__dict__; instance attributes live in instance.__dict__.",hint:"Class attribute is shared across all instances; instance attribute is unique per instance.",level:"basic",codeExample:`class Bank:
    bank_name = 'AccoTax Bank'  # Class attribute
    def __init__(self, acc): self.acc = acc  # Instance attribute`},{question:"Where are Class Attributes stored in Python's internal memory model?",shortAnswer:"Inside the Class's namespace dictionary: ClassName.__dict__.",explanation:"There is exactly one copy of a class attribute in memory regardless of how many instances are created.",hint:"Stored inside the Class.__dict__ mapping.",level:"basic",codeExample:"print(Bank.__dict__['bank_name'])"},{question:"Where are Instance Attributes stored in Python's internal memory model?",shortAnswer:"Inside each object's private namespace dictionary: instance.__dict__.",explanation:"Each instance maintains its own isolated dictionary on the heap.",hint:"Stored inside each individual instance.__dict__ mapping.",level:"basic",codeExample:`b1 = Bank('ACC-1')
print(b1.__dict__)  # {'acc': 'ACC-1'}`},{question:"What is Attribute Shadowing in Python?",shortAnswer:"When an attribute is assigned directly on an instance (e.g. obj.attr = new_val), Python writes 'attr' into obj.__dict__, which masks/shadows the class attribute of the same name for that instance.",explanation:"The class attribute remains intact and unchanged for all other instances.",hint:"An instance attribute masking a class attribute of the same name.",level:"moderate",codeExample:`class S: count = 0
s = S()
s.count = 5  # Shadows S.count on 's' only`},{question:"How do you modify a Class Attribute globally across all instances?",shortAnswer:"By assigning directly to the Class object: ClassName.attribute_name = new_value.",explanation:"Modifying the class attribute directly updates Class.__dict__, immediately reflecting across all instances that haven't shadowed the attribute.",hint:"Assign directly on the class: ClassName.attr = val.",level:"basic",codeExample:"Bank.bank_name = 'New Global Name'"},{question:"What is the danger of defining a mutable collection (like a list or dict) as a Class Attribute?",shortAnswer:"Any in-place mutation (e.g. obj.items.append(x)) alters the single shared list in RAM, silently corrupting data across ALL other object instances!",explanation:"Because in-place mutation modifies the existing heap object without reassigning the variable.",hint:"All instances share the exact same list/dict in RAM.",level:"moderate",codeExample:`# ANTI-PATTERN:
class Student:
    all_skills = []  # Shared across all students!`},{question:"How do you correctly store collections (lists, dicts, sets) unique to each instance?",shortAnswer:"Always initialize them inside __init__ as instance attributes: self.items = [].",explanation:"Guarantees a fresh, independent heap allocation for each new object.",hint:"Initialize them inside __init__: self.items = [].",level:"basic",codeExample:`class Student:
    def __init__(self):
        self.skills = []  # Isolated per student`},{question:"How do you create an auto-incrementing instance sequence counter using Class Attributes?",shortAnswer:"Define a class variable (e.g. _counter = 1000) and increment it on the class inside __init__: ClassName._counter += 1.",explanation:"Allows each instance to receive a unique sequential ID upon creation.",hint:"Increment ClassName._counter += 1 inside __init__.",level:"basic",codeExample:`class Invoice:
    _counter = 1000
    def __init__(self):
        Invoice._counter += 1
        self.id = Invoice._counter`},{question:"What is the 'ClassVar' type annotation from the 'typing' module?",shortAnswer:"A static type hint (ClassVar[T]) explicitly declaring that a variable is intended strictly as a class attribute, not an instance attribute.",explanation:"Prevents linters and dataclasses from treating the variable as an instance field.",hint:"Type annotation explicitly marking a variable as a class attribute.",level:"moderate",codeExample:`from typing import ClassVar
class Config:
    TIMEOUT: ClassVar[int] = 30`},{question:"What happens when you read 'obj.attr' if 'attr' exists in both instance.__dict__ and Class.__dict__?",shortAnswer:"Python returns the value from instance.__dict__ because instance namespace has priority over class namespace in standard attribute resolution.",explanation:"The instance attribute shadows the class attribute.",hint:"Instance dictionary has priority over class dictionary.",level:"basic",codeExample:"# Returns instance value"},{question:"How can an instance method access the unshadowed Class Attribute even if the instance has shadowed it?",shortAnswer:"By reading explicitly through the class: self.__class__.attribute_name or ClassName.attribute_name.",explanation:"Bypasses instance.__dict__ and accesses Class.__dict__ directly.",hint:"Access via self.__class__.attr or ClassName.attr.",level:"moderate",codeExample:"original = self.__class__.branch_name"},{question:"Can an instance delete a Class Attribute using 'del obj.class_attr'?",shortAnswer:"No. Attempting 'del obj.class_attr' raises AttributeError; class attributes can only be deleted via 'del ClassName.class_attr'.",explanation:"'del obj.attr' only deletes keys from instance.__dict__.",hint:"No, raises AttributeError; delete via del ClassName.attr.",level:"complex",codeExample:`# del obj.class_attr -> AttributeError
# del ClassName.class_attr -> Deletes class attribute`},{question:"What is a practical use case for deliberately shadowing a Class Attribute on a specific instance?",shortAnswer:"Setting global configuration defaults on the class (e.g. timeout = 30, discount = 0.0) while allowing specific custom instances to override that default (e.g. custom_client.discount = 15.0).",explanation:"Saves memory by sharing defaults while supporting instance overrides.",hint:"Providing default fallback settings that specific instances can override.",level:"moderate",codeExample:`class Connection:
    timeout = 30  # Default
# premium_conn.timeout = 120`},{question:"How do Class Attributes save memory in applications that instantiate millions of objects?",shortAnswer:"By storing shared immutable data (like lookup tables, state labels, or constants) once in Class.__dict__ instead of duplicating them across millions of instance.__dict__ objects.",explanation:"Significantly reduces heap memory consumption in high-scale systems.",hint:"Stores data once instead of duplicating it in every instance dictionary.",level:"moderate",codeExample:"# Single shared memory allocation for 1,000,000 instances"},{question:"What is the difference between 'ClassName.attr' and 'type(obj).attr'?",shortAnswer:"They are equivalent, but 'type(obj).attr' is polymorphic and works dynamically with subclasses without hardcoding the class name.",explanation:"Enables flexible subclass attribute resolution.",hint:"type(obj).attr resolves class attributes polymorphically.",level:"moderate",codeExample:"cls_name = type(self).institute_name"},{question:"What happens if a subclass does not define a class attribute present in its parent superclass?",shortAnswer:"The subclass inherits and shares the parent's class attribute; reading Subclass.attr resolves to Parent.attr.",explanation:"If the subclass assigns 'Subclass.attr = val', it creates a new class attribute on the subclass namespace.",hint:"Inherits the parent class attribute through MRO.",level:"basic",codeExample:`class Parent: tax = 18
class Child(Parent): pass
print(Child.tax)  # 18`},{question:"Can class attributes be dynamically added to a class at runtime?",shortAnswer:"Yes: ClassName.new_attr = value adds the attribute to ClassName.__dict__ and immediately makes it accessible to all instances.",explanation:"Classes in Python are dynamic living objects.",hint:"Yes, classes are dynamic objects and can receive attributes at runtime.",level:"basic",codeExample:"BankAccount.minimum_balance = 1000.0"},{question:"How do you check if an attribute belongs to the instance or the class?",shortAnswer:"Check if the attribute key exists in 'instance.__dict__' (Instance) or 'ClassName.__dict__' (Class).",explanation:"'hasattr(obj, attr)' returns True for both, so checking __dict__ directly identifies the exact namespace.",hint:"Check 'attr' in obj.__dict__ vs 'attr' in Class.__dict__.",level:"moderate",codeExample:`is_instance_attr = 'fee' in obj.__dict__
is_class_attr = 'fee' in Bank.__dict__`},{question:"What is a 'Class-Level Registry' pattern?",shortAnswer:"A class attribute list or dictionary that stores references to all active living instances created by the class.",explanation:"Allows iterating over or managing all active entities in an application.",hint:"Class variable tracking all instantiated objects.",level:"moderate",codeExample:`class User:
    all_users = []
    def __init__(self, name):
        User.all_users.append(self)`},{question:"What is the danger of maintaining strong references in a Class-Level Registry?",shortAnswer:"It prevents garbage collection of instantiated objects because the class holds permanent references to them, causing memory leaks.",explanation:"Use 'weakref.WeakSet()' or 'weakref.WeakValueDictionary()' to allow automatic garbage collection.",hint:"Prevents garbage collection; use weakref.WeakSet instead.",level:"complex",codeExample:`import weakref
_instances = weakref.WeakSet()`},{question:"What is the difference between writing 'self.count += 1' vs 'ClassName.count += 1' inside a method when 'count' is a class attribute?",shortAnswer:"'self.count += 1' evaluates 'self.count = self.count + 1', creating a shadowed instance attribute; 'ClassName.count += 1' updates the shared class variable globally.",explanation:"A very common bug in Python OOP exams and interviews.",hint:"self.count += 1 shadows locally; ClassName.count += 1 updates globally.",level:"moderate",codeExample:`# BUG: self.count += 1
# FIX: ClassName.count += 1`},{question:"Can an instance method be replaced on a single instance without affecting other instances?",shortAnswer:"Yes. Using types.MethodType, you can bind a custom function to a specific instance's __dict__ without altering the class.",explanation:"Demonstrates that instance namespaces can shadow class methods.",hint:"Yes, by binding a function using types.MethodType(func, instance).",level:"complex",codeExample:`import types
obj.speak = types.MethodType(custom_speak, obj)`},{question:"What is '__slots__' and how does it affect instance attributes?",shortAnswer:"'__slots__' is a special class attribute that restricts instances to a predefined tuple of attributes and eliminates 'instance.__dict__', dramatically saving memory.",explanation:"Prevents dynamic arbitrary attribute assignment.",hint:"Restricts attributes to a fixed tuple and eliminates __dict__ to optimize RAM.",level:"complex",codeExample:`class Point:
    __slots__ = ('x', 'y')`},{question:"Why should domain constants defined as class attributes be named in UPPER_SNAKE_CASE?",shortAnswer:"Following PEP 8 conventions to clearly signal to other developers that the attribute represents a constant configuration that should not be mutated.",explanation:"Examples: MAX_RETRIES = 5, DEFAULT_CURRENCY = 'INR'.",hint:"PEP 8 convention for constants (UPPER_SNAKE_CASE).",level:"basic",codeExample:`class Loan:
    DEFAULT_INTEREST_RATE = 8.5`},{question:"What is the golden architectural rule for deciding between Class Attributes and Instance Attributes?",shortAnswer:"Use Class Attributes for constants, shared configurations, sequence counters, and defaults; use Instance Attributes for all state unique to a specific entity.",explanation:"Maintains clear separation between shared blueprint data and individual object state.",hint:"Class for shared constants/counters; Instance for unique object state.",level:"basic",codeExample:"# Shared = Class; Unique = Instance"}];function R(){const l=n.useRef([]),[a,o]=n.useState("namespaces"),[c,x]=n.useState("Barrackpore, Kolkata"),[d,h]=n.useState(null);n.useEffect(()=>{const s=new IntersectionObserver(r=>{r.forEach(m=>{m.isIntersecting&&m.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return l.current.forEach(r=>{r&&s.observe(r)}),()=>s.disconnect()},[]);const t=s=>{s&&!l.current.includes(s)&&l.current.push(s)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:t,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_001"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 4"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Object-Oriented Programming (OOP) in Python"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:[e.jsx("span",{className:"text-teal-400",children:"Class Attributes"})," vs ",e.jsx("span",{className:"text-cyan-400",children:"Instance Attributes"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master memory distribution and namespace mechanics: ",e.jsx("code",{className:"text-teal-300 font-mono",children:"Class.__dict__"})," vs ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"instance.__dict__"}),", the Attribute Shadowing trap, the mutable class attribute disaster, sequence ID counters, and domain constants with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"ClassVar"}),"."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🏛️ Shared Class Scope (Class.__dict__)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"👤 Isolated Instance Scope (instance.__dict__)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🌓 Attribute Shadowing Dynamics"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📊 Global Institute Analytics Patterns"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚖️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. Shared Class State vs Isolated Instance State"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["In Python, attributes can live at two distinct scopes: directly on the ",e.jsx("strong",{children:"Class"})," (shared across all instances in a single memory location) or on the ",e.jsx("strong",{children:"Instance"})," (uniquely owned by each individual object):"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsxs("div",{className:"flex items-center gap-2 text-teal-400 font-bold text-base mb-2",children:[e.jsx("span",{children:"🏛️"})," Class Attributes (Shared Memory)"]}),e.jsxs("div",{className:"text-xs text-slate-300 space-y-1.5 leading-relaxed",children:[e.jsxs("div",{children:["• ",e.jsx("strong",{children:"Defined:"})," Directly in the class body."]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"Storage:"})," Inside ",e.jsx("code",{className:"text-teal-300",children:"Class.__dict__"})," (Exactly 1 copy in RAM)."]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"Use Cases:"})," Constants, default configs, sequence counters, registries."]})]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base mb-2",children:[e.jsx("span",{children:"👤"})," Instance Attributes (Isolated Heap)"]}),e.jsxs("div",{className:"text-xs text-slate-300 space-y-1.5 leading-relaxed",children:[e.jsxs("div",{children:["• ",e.jsx("strong",{children:"Defined:"})," Inside ",e.jsx("code",{className:"text-cyan-300",children:"__init__"})," on ",e.jsx("code",{className:"text-cyan-300",children:"self"}),"."]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"Storage:"})," Inside ",e.jsx("code",{className:"text-cyan-300",children:"instance.__dict__"})," (Unique copy per instance)."]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"Use Cases:"})," Student names, balances, individual entity properties."]})]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Resolution Order: Instance > Class"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["When you evaluate ",e.jsx("code",{className:"text-teal-300 font-mono",children:"obj.attr"}),", Python first checks ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"obj.__dict__"}),". If not found, it falls back to ",e.jsx("code",{className:"text-teal-300 font-mono",children:"Class.__dict__"}),". If found on the instance, it ",e.jsx("strong",{children:"shadows"})," the class attribute!"]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Namespaces & Shadowing Mechanics"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>o("namespaces"),className:i("px-3 py-1.5 rounded-lg transition-all",a==="namespaces"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Namespace Isolation"}),e.jsx("button",{onClick:()=>o("shadowing"),className:i("px-3 py-1.5 rounded-lg transition-all",a==="shadowing"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Attribute Shadowing"}),e.jsx("button",{onClick:()=>o("mutabletrap"),className:i("px-3 py-1.5 rounded-lg transition-all",a==="mutabletrap"?"bg-rose-900/50 text-rose-300 border border-rose-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Mutable Class List Bug"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining dictionary mappings, memory overrides, and shared memory heap bugs:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:a==="namespaces"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"CLASS NAMESPACE VS ISOLATED INSTANCE NAMESPACES"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"240",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"13",fontWeight:"bold",children:"Class: Franchise"}),e.jsx("text",{x:"20",y:"55",fill:"#a7f3d0",fontSize:"11 font-mono",children:'hq = "Barrackpore"'}),e.jsx("text",{x:"20",y:"85",fill:"#cbd5e1",fontSize:"10",children:"• Franchise.__dict__"}),e.jsx("text",{x:"20",y:"105",fill:"#cbd5e1",fontSize:"10",children:"• Exactly 1 memory copy"}),e.jsx("rect",{x:"20",y:"180",width:"200",height:"40",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"205",fill:"#34d399",fontSize:"10 font-bold",children:"Shared Class Scope"})]}),e.jsxs("g",{transform:"translate(320, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"500",height:"105",rx:"6",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"25",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:'f1 = Franchise("BR-01")'}),e.jsxs("text",{x:"20",y:"50",fill:"#cbd5e1",fontSize:"11 font-mono",children:["f1.__dict__ = ","{"," 'branch_code': 'BR-01' ","}"]}),e.jsx("text",{x:"20",y:"75",fill:"#a7f3d0",fontSize:"10",children:'f1.hq → Falls back to Class.__dict__ → "Barrackpore"'}),e.jsx("rect",{x:"0",y:"130",width:"500",height:"105",rx:"6",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"20",y:"155",fill:"#a5f3fc",fontSize:"12",fontWeight:"bold",children:'f2 = Franchise("BR-02")'}),e.jsxs("text",{x:"20",y:"180",fill:"#cbd5e1",fontSize:"11 font-mono",children:["f2.__dict__ = ","{"," 'branch_code': 'BR-02' ","}"]}),e.jsx("text",{x:"20",y:"205",fill:"#38bdf8",fontSize:"10",children:'f2.hq → Falls back to Class.__dict__ → "Barrackpore"'})]})]}):a==="shadowing"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"THE ATTRIBUTE SHADOWING MECHANISM: f1.hq = 'Shyamnagar'"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"240",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"13",fontWeight:"bold",children:"Class: Franchise"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"11 font-mono",children:'hq = "Barrackpore"'}),e.jsx("text",{x:"20",y:"100",fill:"#cbd5e1",fontSize:"10 font-bold",children:"Unchanged in RAM!"}),e.jsx("text",{x:"20",y:"125",fill:"#cbd5e1",fontSize:"10",children:"Franchise.hq remains"}),e.jsx("text",{x:"20",y:"145",fill:"#cbd5e1",fontSize:"10",children:'"Barrackpore"'})]}),e.jsxs("g",{transform:"translate(320, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"500",height:"110",rx:"6",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"25",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"f1.__dict__ (Shadow Created):"}),e.jsxs("text",{x:"20",y:"50",fill:"#34d399",fontSize:"11 font-mono font-bold",children:["f1.__dict__ = ","{"," 'branch_code': 'BR-01', 'hq': 'Shyamnagar' ","}"]}),e.jsx("text",{x:"20",y:"75",fill:"#a7f3d0",fontSize:"10",children:"f1.hq returns 'Shyamnagar' directly from f1.__dict__ (Shadowing!)"}),e.jsx("rect",{x:"0",y:"130",width:"500",height:"105",rx:"6",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"20",y:"155",fill:"#a5f3fc",fontSize:"12",fontWeight:"bold",children:"f2.__dict__ (Unshadowed):"}),e.jsxs("text",{x:"20",y:"180",fill:"#cbd5e1",fontSize:"11 font-mono",children:["f2.__dict__ = ","{"," 'branch_code': 'BR-02' ","}"]}),e.jsx("text",{x:"20",y:"205",fill:"#38bdf8",fontSize:"10 font-bold",children:'f2.hq still resolves to "Barrackpore" from Class!'})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#f43f5e",fontSize:"14",fontWeight:"bold",children:"THE MUTABLE CLASS LIST TRAP (IN-PLACE MUTATION)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"❌ The Bug: Class Level List"}),e.jsx("text",{x:"20",y:"60",fill:"#fca5a5",fontSize:"11 font-mono",children:"class Student:"}),e.jsx("text",{x:"40",y:"85",fill:"#fca5a5",fontSize:"11 font-mono",children:"all_skills = []  # Shared List!"}),e.jsx("text",{x:"20",y:"125",fill:"#cbd5e1",fontSize:"10 font-mono",children:"s1 = Student()"}),e.jsx("text",{x:"20",y:"145",fill:"#cbd5e1",fontSize:"10 font-mono",children:'s1.all_skills.append("Python")'}),e.jsx("text",{x:"20",y:"180",fill:"#fca5a5",fontSize:"10",children:"s1.all_skills modifies the SINGLE list"}),e.jsx("text",{x:"20",y:"200",fill:"#fca5a5",fontSize:"10",children:"stored at Student.all_skills in RAM!"})]}),e.jsxs("g",{transform:"translate(460, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#881337",stroke:"#e11d48"}),e.jsx("text",{x:"20",y:"30",fill:"#ffe4e6",fontSize:"12",fontWeight:"bold",children:"Single Heap Memory List (0x7fa2990)"}),e.jsx("text",{x:"20",y:"65",fill:"#cbd5e1",fontSize:"11 font-mono",children:"['Python', 'Django']"}),e.jsx("rect",{x:"20",y:"95",width:"340",height:"85",rx:"4",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"30",y:"120",fill:"#fda4af",fontSize:"10 font-bold",children:"s1.all_skills → points to 0x7fa2990"}),e.jsx("text",{x:"30",y:"140",fill:"#fda4af",fontSize:"10 font-bold",children:"s2.all_skills → points to 0x7fa2990"}),e.jsx("text",{x:"30",y:"160",fill:"#fda4af",fontSize:"10 font-bold",children:"s3.all_skills → points to 0x7fa2990"}),e.jsx("text",{x:"20",y:"205",fill:"#34d399",fontSize:"10 font-bold",children:"Fix: Declare `self.skills = []` inside `__init__`!"})]})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Attribute Shadowing & Namespace Inspector"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Manipulate class attributes and instance attributes to witness live namespace shadowing:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 block font-bold",children:"Namespace Mutation Controls"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("button",{onClick:()=>x("Kolkata Central Office"),className:"w-full text-left bg-teal-900/60 hover:bg-teal-800 text-teal-200 border border-teal-700 p-2.5 rounded-lg text-xs font-mono transition-all",children:["1. Update Class Globally: ",e.jsx("code",{className:"text-emerald-300",children:'Franchise.hq = "Kolkata Central"'})]}),e.jsxs("button",{onClick:()=>h("Shyamnagar Regional Sub-Branch"),className:"w-full text-left bg-cyan-900/60 hover:bg-cyan-800 text-cyan-200 border border-cyan-700 p-2.5 rounded-lg text-xs font-mono transition-all",children:["2. Shadow on Instance 1: ",e.jsx("code",{className:"text-cyan-300",children:'f1.hq = "Shyamnagar Sub-Branch"'})]}),e.jsxs("button",{onClick:()=>h(null),className:"w-full text-left bg-purple-900/60 hover:bg-purple-800 text-purple-200 border border-purple-700 p-2.5 rounded-lg text-xs font-mono transition-all",children:["3. Delete Shadow on f1: ",e.jsx("code",{className:"text-purple-300",children:"del f1.hq"})," (Restores Class fallback)"]}),e.jsx("button",{onClick:()=>{x("Barrackpore, Kolkata"),h(null)},className:"w-full text-left bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 p-2.5 rounded-lg text-xs font-mono transition-all",children:"Reset All to Default"})]})]}),e.jsxs("div",{className:"space-y-3 flex flex-col justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block font-bold",children:"Live State Inspection"}),e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2 text-xs font-mono",children:[e.jsxs("div",{className:"text-teal-300 font-bold",children:['Class: Franchise.hq = "',c,'"']}),e.jsxs("div",{className:"pt-2 border-t border-slate-800",children:[e.jsx("span",{className:"text-slate-400",children:"Instance 1 (f1.hq):"})," ",e.jsxs("span",{className:i("font-bold",d?"text-cyan-300":"text-slate-200"),children:['"',d||c,'"']}),d?e.jsx("span",{className:"text-[11px] text-cyan-400 block",children:"  (Read from f1.__dict__ - SHADOWED!)"}):e.jsx("span",{className:"text-[11px] text-slate-500 block",children:"  (Read from Franchise.__dict__ - Unshadowed)"})]}),e.jsxs("div",{className:"pt-2 border-t border-slate-800",children:[e.jsx("span",{className:"text-slate-400",children:"Instance 2 (f2.hq):"})," ",e.jsxs("span",{className:"font-bold text-slate-200",children:['"',c,'"']}),e.jsx("span",{className:"text-[11px] text-slate-500 block",children:"  (Read from Franchise.__dict__ - Unshadowed)"})]})]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Class vs Instance Attributes Reference Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Feature"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Class Attribute"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Instance Attribute"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"Location in RAM"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"Class.__dict__ (Single Copy)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"instance.__dict__ (Per Object)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"Syntax to Assign"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"ClassName.var = val"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"self.var = val"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Scope of Modification"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-bold",children:"Global across all instances"}),e.jsx("td",{className:"py-3 px-4 text-cyan-300",children:"Local to that single instance"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"Recommended Data"}),e.jsx("td",{className:"py-3 px-4",children:"Constants, defaults, sequence counters"}),e.jsx("td",{className:"py-3 px-4",children:"Unique identity, personal state, balances"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-rose-400 font-semibold",children:"Mutable Safety"}),e.jsx("td",{className:"py-3 px-4 text-rose-400 font-bold",children:"DANGEROUS (In-place shared mutation)"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-bold",children:"SAFE (Isolated per instance)"})]})]})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating attribute scopes, shadowing traps, sequence counters, and executive analytics:"}),e.jsx(u,{files:[{filename:"class_vs_instance_attributes_fundamentals.py",code:p,description:"Fundamental comparison between class and instance attributes, namespace scopes, and global class updates."},{filename:"attribute_shadowing_and_mutation_gotchas.py",code:g,description:"The Attribute Shadowing trap and the catastrophic mutable class list shared memory collision."},{filename:"class_attribute_patterns_and_constants.py",code:y,description:"Production patterns: domain constants with ClassVar, auto-incrementing ID generators, and object registries."},{filename:"student_enrollment_tracker_and_analytics.py",code:j,description:"Enterprise Student Enrollment Tracker and Institute Analytics Dashboard computing financial aggregates."}]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Accidentally Shadowing with `self.attr = val`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"self.total_count += 1"})," creates a local instance attribute instead of updating the class-level counter!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always update class variables via ",e.jsx("code",{className:"text-emerald-300",children:"ClassName.total_count += 1"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Mutable Class List Shared Memory"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Placing ",e.jsx("code",{className:"text-amber-300 font-mono",children:"registered_items = []"})," in the class body causes all instances to append to the exact same list in RAM."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Declare mutable collections on ",e.jsx("code",{className:"text-emerald-300",children:"self.registered_items = []"})," inside ",e.jsx("code",{className:"text-emerald-300",children:"__init__"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Attempting `del obj.class_attr`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-purple-300 font-mono",children:"del obj.class_attr"})," raises ",e.jsx("code",{className:"text-purple-300 font-mono",children:"AttributeError"})," because del only inspects the instance dict."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Delete class attributes via ",e.jsx("code",{className:"text-emerald-300",children:"del ClassName.class_attr"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Memory Leaks in Instance Registries"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Storing living instances in a plain class list (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"_registry = []"}),") prevents garbage collection permanently."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"weakref.WeakSet()"})," to allow automatic memory deallocation."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering class attributes, instance attributes, attribute shadowing, and mutable collection traps:"}),e.jsx(f,{questions:N})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with attribute comparison tables, shadowing diagrams, and analytics patterns:"}),e.jsx("div",{className:"mb-10",children:e.jsx(_,{content:A,filename:"python_topic4_class_vs_instance_attributes_notes.txt",title:"Print Topic 4 Study Notes"})}),e.jsx(b,{})]})]})]})}export{R as default};
