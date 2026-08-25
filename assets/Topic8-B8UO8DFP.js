import{b as c,j as e,bg as n}from"./vendor-react-core-Doz9nIC6.js";import{P as m}from"./PythonFileLoader-hCi5osN-.js";import{P as p}from"./PlainTextPrint-C08xhKA4.js";import{F as f}from"./FAQTemplate-CkSqDH4B.js";import{T as u}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const b=`# topic8_files/single_and_multilevel_inheritance.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Inheritance: Single, Multiple, Multilevel, and Hierarchical\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 8 - File 1: Single & Multilevel Inheritance Mechanics\r
Demonstrates:\r
  1. Single Inheritance: Derived class inheriting directly from 1 base class\r
  2. Multilevel Inheritance: Chained linear hierarchy (Grandparent -> Parent -> Child)\r
  3. Constructor chaining using \`super().__init__()\`\r
  4. Type reflection using \`isinstance()\` and \`issubclass()\`\r
"""\r
\r
# =====================================================================\r
# 1. BASE CLASS (Grandparent in Multilevel Chain)\r
# =====================================================================\r
class Person:\r
    """Root entity capturing basic human identification."""\r
    def __init__(self, full_name: str, national_id: str, email: str):\r
        self.full_name = full_name\r
        self.national_id = national_id\r
        self.email = email\r
\r
    def get_basic_info(self) -> str:\r
        return f"Person: {self.full_name} <{self.email}>"\r
\r
\r
# =====================================================================\r
# 2. SINGLE INHERITANCE (Parent)\r
# =====================================================================\r
class InstituteStaff(Person):\r
    """Single Inheritance: Inherits from Person and adds employment details."""\r
    def __init__(self, full_name: str, national_id: str, email: str, emp_id: str, department: str, base_salary: float):\r
        super().__init__(full_name, national_id, email)\r
        self.emp_id = emp_id\r
        self.department = department\r
        self.base_salary = float(base_salary)\r
\r
    def get_employment_summary(self) -> str:\r
        return f"Staff [{self.emp_id}]: {self.full_name} | Dept: {self.department} | Salary: INR {self.base_salary:,.2f}"\r
\r
\r
# =====================================================================\r
# 3. MULTILEVEL INHERITANCE (Child)\r
# =====================================================================\r
class DepartmentHead(InstituteStaff):\r
    """Multilevel Inheritance: Person -> InstituteStaff -> DepartmentHead."""\r
    def __init__(self, full_name: str, national_id: str, email: str, emp_id: str, department: str, base_salary: float, budget_inr: float):\r
        super().__init__(full_name, national_id, email, emp_id, department, base_salary)\r
        self.annual_budget = float(budget_inr)\r
        self.managed_faculty = []\r
\r
    def allocate_funds(self, amount: float, purpose: str):\r
        if amount > self.annual_budget:\r
            print(f"  [OVERBUDGET] Allocation of INR {amount:,.2f} exceeds department budget!")\r
            return\r
        self.annual_budget -= amount\r
        print(f"  [BUDGET ALLOCATED] {self.department}: INR {amount:,.2f} for '{purpose}' | Remaining: INR {self.annual_budget:,.2f}")\r
\r
\r
def demonstrate_single_and_multilevel():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - SINGLE & MULTILEVEL INHERITANCE")\r
    print("=" * 70)\r
\r
    # Instantiate Multilevel Child Class\r
    hod = DepartmentHead(\r
        full_name="Prof. Sourav Bhattacharya",\r
        national_id="AADH-9988-1122",\r
        email="sourav.hod@codernaccotax.co.in",\r
        emp_id="HOD-CS-01",\r
        department="Computer Science & AI",\r
        base_salary=95000.0,\r
        budget_inr=500000.0\r
    )\r
\r
    # 1. Access Grandparent Method (Person)\r
    print(f"1. Method from Grandparent (Person) : {hod.get_basic_info()}")\r
\r
    # 2. Access Parent Method (InstituteStaff)\r
    print(f"2. Method from Parent (Staff)       : {hod.get_employment_summary()}")\r
\r
    # 3. Access Own Method (DepartmentHead)\r
    print("\\n3. Invoking Child Method:")\r
    hod.allocate_funds(75000.0, "High-Performance GPU Server Upgrade")\r
\r
    # 4. Type & Subclass Introspection\r
    print("\\n" + "=" * 70)\r
    print("4. TYPE & SUBCLASS INSPECTION MATRIX")\r
    print("=" * 70)\r
    print(f"isinstance(hod, DepartmentHead)  : {isinstance(hod, DepartmentHead)}")\r
    print(f"isinstance(hod, InstituteStaff)  : {isinstance(hod, InstituteStaff)} (Inherited Parent)")\r
    print(f"isinstance(hod, Person)          : {isinstance(hod, Person)} (Inherited Grandparent)")\r
    print(f"isinstance(hod, object)          : {isinstance(hod, object)} (Root Python Object)")\r
    print(f"issubclass(DepartmentHead, Person): {issubclass(DepartmentHead, Person)}")\r
\r
    print("\\n[PASSED] Single & Multilevel Inheritance Demonstrated Successfully.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_single_and_multilevel()\r
`,_=`# topic8_files/multiple_inheritance_and_mixins.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Inheritance: Single, Multiple, Multilevel, and Hierarchical\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 8 - File 2: Multiple Inheritance & The Mixin Pattern\r
Demonstrates:\r
  1. Multiple Inheritance: Derived class inheriting from multiple parent classes\r
  2. The Mixin Pattern: Composable single-responsibility capability classes\r
  3. Building production-grade composite domain entities using mixins\r
"""\r
\r
import json\r
import datetime as dt\r
from typing import Dict, Any\r
\r
# =====================================================================\r
# MIXIN 1: JSON EXPORT CAPABILITY\r
# =====================================================================\r
class JSONExportMixin:\r
    """Mixin providing automatic JSON serialization for any object."""\r
    def to_json(self) -> str:\r
        # Extracts object attributes, excluding private dunder keys\r
        data = {k: v for k, v in self.__dict__.items() if not k.startswith("_")}\r
        return json.dumps(data, indent=2, default=str)\r
\r
\r
# =====================================================================\r
# MIXIN 2: AUDIT LOGGING CAPABILITY\r
# =====================================================================\r
class AuditLoggerMixin:\r
    """Mixin providing audit timestamp tracking."""\r
    def log_event(self, action: str):\r
        timestamp = dt.datetime.now().strftime("%Y-%m-%d %H:%M:%S")\r
        print(f"  [AUDIT LOG] [{timestamp}] Entity '{self.__class__.__name__}': {action}")\r
\r
\r
# =====================================================================\r
# MIXIN 3: SMS NOTIFICATION CAPABILITY\r
# =====================================================================\r
class SMSNotifierMixin:\r
    """Mixin providing simulated SMS dispatch capabilities."""\r
    def dispatch_sms(self, phone: str, message: str):\r
        print(f"  [SMS DISPATCHED] -> {phone}: '{message}'")\r
\r
\r
# =====================================================================\r
# PRIMARY DOMAIN CLASS (Multiple Inheritance with 3 Mixins)\r
# =====================================================================\r
class CorporateClientContract(JSONExportMixin, AuditLoggerMixin, SMSNotifierMixin):\r
    """Business Entity inheriting from 3 independent Mixins."""\r
    def __init__(self, contract_id: str, client_name: str, contract_value_inr: float, contact_phone: str):\r
        self.contract_id = contract_id\r
        self.client_name = client_name\r
        self.contract_value = float(contract_value_inr)\r
        self.contact_phone = contact_phone\r
        self.is_active = True\r
\r
        # Log creation via AuditLoggerMixin:\r
        self.log_event(f"Contract #{contract_id} created for {client_name} (INR {self.contract_value:,.2f})")\r
\r
    def execute_renewal(self, added_value: float):\r
        self.contract_value += added_value\r
        self.log_event(f"Contract renewed with +INR {added_value:,.2f}")\r
        self.dispatch_sms(self.contact_phone, f"Dear {self.client_name}, your contract #{self.contract_id} was successfully renewed!")\r
\r
\r
def demonstrate_multiple_mixins():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - MULTIPLE INHERITANCE & MIXIN ARCHITECTURE")\r
    print("=" * 70)\r
\r
    contract = CorporateClientContract(\r
        contract_id="CNT-2026-88",\r
        client_name="Tata Consultancy Services (Kolkata Wing)",\r
        contract_value_inr=1200000.0,\r
        contact_phone="+91-9830033333"\r
    )\r
\r
    # 1. Execute renewal (Triggers AuditLoggerMixin & SMSNotifierMixin)\r
    print("\\nExecuting Contract Renewal:")\r
    contract.execute_renewal(300000.0)\r
\r
    # 2. Export via JSONExportMixin\r
    print("\\nSerialized JSON Output (via JSONExportMixin):")\r
    print(contract.to_json())\r
\r
    # 3. MRO Inspection\r
    print("\\nMethod Resolution Order (MRO):")\r
    for idx, cls in enumerate(CorporateClientContract.__mro__):\r
        print(f"  [{idx}] {cls.__name__}")\r
\r
    print("\\n[PASSED] Multiple Inheritance & Mixin Suite Completed Successfully.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_multiple_mixins()\r
`,g=`# topic8_files/hierarchical_and_hybrid_inheritance.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Inheritance: Single, Multiple, Multilevel, and Hierarchical\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 8 - File 3: Hierarchical & Hybrid Inheritance Topologies\r
Demonstrates:\r
  1. Hierarchical Inheritance: Single base class branched into multiple specialized siblings\r
  2. Hybrid Inheritance: Combining hierarchical branching with multiple mixins\r
  3. The "IS-A" (Inheritance) vs "HAS-A" (Composition) design principle\r
"""\r
\r
# =====================================================================\r
# 1. HIERARCHICAL ROOT (Base Course)\r
# =====================================================================\r
class EducationalCourse:\r
    """Base parent class for all course formats."""\r
    def __init__(self, course_id: str, title: str, base_fee: float, duration_weeks: int):\r
        self.course_id = course_id\r
        self.title = title\r
        self.base_fee = float(base_fee)\r
        self.duration_weeks = duration_weeks\r
\r
    def get_course_header(self) -> str:\r
        return f"[{self.course_id}] {self.title} ({self.duration_weeks} Weeks) - Base: INR {self.base_fee:,.2f}"\r
\r
\r
# =====================================================================\r
# 2. HIERARCHICAL SIBLING 1 (Online Course)\r
# =====================================================================\r
class OnlineLiveCourse(EducationalCourse):\r
    """Specialized Sibling 1: Adds LMS portal and streaming links."""\r
    def __init__(self, course_id: str, title: str, base_fee: float, duration_weeks: int, zoom_link: str):\r
        super().__init__(course_id, title, base_fee, duration_weeks)\r
        self.zoom_link = zoom_link\r
\r
    def get_delivery_mode(self) -> str:\r
        return f"Online Live Stream (Zoom: {self.zoom_link})"\r
\r
\r
# =====================================================================\r
# 3. HIERARCHICAL SIBLING 2 (Classroom Course)\r
# =====================================================================\r
class ClassroomPhysicalCourse(EducationalCourse):\r
    """Specialized Sibling 2: Adds physical lab room and seat allocations."""\r
    def __init__(self, course_id: str, title: str, base_fee: float, duration_weeks: int, room_number: str, max_seats: int):\r
        super().__init__(course_id, title, base_fee, duration_weeks)\r
        self.room_number = room_number\r
        self.max_seats = max_seats\r
\r
    def get_delivery_mode(self) -> str:\r
        return f"Physical Classroom (Lab #{self.room_number}, Capacity: {self.max_seats} seats)"\r
\r
\r
# =====================================================================\r
# 4. HIERARCHICAL SIBLING 3 (Corporate Workshop)\r
# =====================================================================\r
class CorporateWorkshop(EducationalCourse):\r
    """Specialized Sibling 3: Adds client enterprise customization."""\r
    def __init__(self, course_id: str, title: str, base_fee: float, duration_weeks: int, client_company: str):\r
        super().__init__(course_id, title, base_fee, duration_weeks)\r
        self.client_company = client_company\r
\r
    def get_delivery_mode(self) -> str:\r
        return f"Custom Corporate Training (Client: {self.client_company})"\r
\r
\r
def demonstrate_hierarchical_topology():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - HIERARCHICAL INHERITANCE TOPOLOGY")\r
    print("=" * 70)\r
\r
    # Instantiate 3 sibling classes sharing the same root\r
    online = OnlineLiveCourse("PY-ON-01", "Python Pro Full-Stack", 15000.0, 16, "https://meet.codernaccotax.co.in/py")\r
    classroom = ClassroomPhysicalCourse("ACC-CL-02", "GST & Advanced Tax", 12000.0, 12, "Lab 3B (Barrackpore)", 25)\r
    corporate = CorporateWorkshop("AI-CORP-03", "Enterprise LLM Engineering", 80000.0, 2, "Wipro Technologies")\r
\r
    courses = [online, classroom, corporate]\r
\r
    for c in courses:\r
        print(f"* {c.get_course_header()}")\r
        print(f"  Delivery: {c.get_delivery_mode()}")\r
        print(f"  Is EducationalCourse? -> {isinstance(c, EducationalCourse)}\\n")\r
\r
    print("[PASSED] Hierarchical Topology Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_hierarchical_topology()\r
`,y=`# topic8_files/enterprise_educational_hierarchy_suite.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Inheritance: Single, Multiple, Multilevel, and Hierarchical\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 8 - File 4: Enterprise Educational User Hierarchy & RBAC (Production Case Study)\r
Demonstrates:\r
  1. Complete institutional Role-Based Access Control (RBAC) hierarchy\r
  2. Hierarchical inheritance: BaseUser -> Student, Faculty, Admin\r
  3. Multiple inheritance: SuperAdminUser inheriting administrative and security mixins\r
"""\r
\r
import datetime as dt\r
from typing import List, Set\r
\r
# =====================================================================\r
# CAPABILITY MIXINS\r
# =====================================================================\r
class SecurityAuditingCapability:\r
    """Security capability granting access to forensic audit trails."""\r
    def audit_security_event(self, event_description: str):\r
        print(f"  [SECURITY AUDIT] [{dt.datetime.now().strftime('%H:%M:%S')}] {self.user_id}: {event_description}")\r
\r
\r
class PaymentGatewayCapability:\r
    """Financial capability granting access to process fee refunds."""\r
    def disburse_refund(self, student_id: str, amount: float):\r
        print(f"  [PAYMENT REFUND] {self.user_id} disbursed INR {amount:,.2f} to {student_id}")\r
\r
\r
# =====================================================================\r
# ROOT USER CLASS\r
# =====================================================================\r
class BaseSystemUser:\r
    """Root user entity for Coder & AccoTax Portal."""\r
    organization = "Coder & AccoTax"\r
\r
    def __init__(self, user_id: str, display_name: str, email: str):\r
        self.user_id = user_id\r
        self.display_name = display_name\r
        self.email = email\r
        self.permissions: Set[str] = set()\r
\r
    def get_user_profile(self) -> str:\r
        return f"{self.__class__.__name__} [{self.user_id}]: {self.display_name} <{self.email}>"\r
\r
\r
# =====================================================================\r
# HIERARCHICAL BRANCH 1: STUDENT\r
# =====================================================================\r
class StudentUser(BaseSystemUser):\r
    def __init__(self, user_id: str, display_name: str, email: str, enrolled_course: str):\r
        super().__init__(user_id, display_name, email)\r
        self.enrolled_course = enrolled_course\r
        self.permissions.update(["VIEW_LESSONS", "SUBMIT_ASSIGNMENTS", "JOIN_DISCORD"])\r
\r
\r
# =====================================================================\r
# HIERARCHICAL BRANCH 2: FACULTY\r
# =====================================================================\r
class FacultyInstructor(BaseSystemUser):\r
    def __init__(self, user_id: str, display_name: str, email: str, specialization: str):\r
        super().__init__(user_id, display_name, email)\r
        self.specialization = specialization\r
        self.permissions.update(["GRADE_ASSIGNMENTS", "CREATE_QUIZZES", "UPLOAD_VIDEOS"])\r
\r
\r
# =====================================================================\r
# MULTIPLE INHERITANCE: SUPER ADMIN\r
# =====================================================================\r
class SuperAdminUser(BaseSystemUser, SecurityAuditingCapability, PaymentGatewayCapability):\r
    """Multiple Inheritance: Inherits BaseSystemUser + 2 Mixin capabilities."""\r
    def __init__(self, user_id: str, display_name: str, email: str):\r
        super().__init__(user_id, display_name, email)\r
        self.permissions.update(["ALL_SYSTEM_PRIVILEGES", "MANAGE_USERS", "EXECUTE_REFUNDS"])\r
\r
\r
def run_educational_suite():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - ENTERPRISE USER HIERARCHY CASE STUDY")\r
    print("=" * 70)\r
\r
    # 1. Instantiate Student\r
    student = StudentUser("STU-1001", "Priyanka Sen", "priyanka@gmail.com", "Python Pro Full-Stack")\r
    print(f"1. {student.get_user_profile()}")\r
    print(f"   Permissions: {sorted(student.permissions)}\\n")\r
\r
    # 2. Instantiate Faculty\r
    faculty = FacultyInstructor("FAC-201", "Sukanta Hui", "sukanta.hui@codernaccotax.co.in", "Full-Stack Python & Financial Accounting")\r
    print(f"2. {faculty.get_user_profile()}")\r
    print(f"   Permissions: {sorted(faculty.permissions)}\\n")\r
\r
    # 3. Instantiate SuperAdmin (Multiple Inheritance)\r
    admin = SuperAdminUser("ADM-001", "Debolina Mukherjee", "debolina.admin@codernaccotax.co.in")\r
    print(f"3. {admin.get_user_profile()}")\r
    print(f"   Permissions: {sorted(admin.permissions)}\\n")\r
\r
    # 4. Invoke Inherited Mixin Capabilities\r
    print("4. SuperAdmin executing multiple inherited mixin capabilities:")\r
    admin.audit_security_event("Initiated institutional quarterly database backup.")\r
    admin.disburse_refund("STU-1001", 1500.0)\r
\r
    print("\\n[PASSED] Educational User Hierarchy Suite Completed Successfully.")\r
\r
\r
if __name__ == "__main__":\r
    run_educational_suite()\r
`,S=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_001: OBJECT-ORIENTED PYTHON\r
            TOPIC 8: INHERITANCE TOPOLOGIES & THE MIXIN PATTERN\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. THE 4 PRIMARY INHERITANCE TOPOLOGIES\r
--------------------------------------------------------------------------------\r
  1. Single Inheritance       : class Employee(Person): pass\r
  2. Multilevel Inheritance   : class Manager(Employee): pass  (Person -> Emp -> Mgr)\r
  3. Multiple Inheritance     : class SuperAdmin(User, AuditMixin, SMSMixin): pass\r
  4. Hierarchical Inheritance : class Student(User): pass; class Faculty(User): pass\r
\r
--------------------------------------------------------------------------------\r
2. THE MIXIN DESIGN PATTERN\r
--------------------------------------------------------------------------------\r
  Mixins are small, self-contained classes providing a specific capability\r
  without being instantiated directly on their own:\r
\r
  class JSONExportMixin:\r
      def to_json(self):\r
          return json.dumps(self.__dict__)\r
\r
  class ClientRecord(BaseModel, JSONExportMixin):\r
      pass\r
\r
--------------------------------------------------------------------------------\r
3. IS-A VS HAS-A RULE\r
--------------------------------------------------------------------------------\r
  • Use Inheritance (IS-A) only when a strict taxonomic relationship holds:\r
    "A Student IS A User" -> class Student(User):\r
\r
  • Use Composition (HAS-A) when an object simply owns another component:\r
    "A Student HAS AN Address" -> self.address = Address(...)\r
\r
================================================================================\r
         END OF STUDY NOTE • TOPIC 8: INHERITANCE & MIXINS\r
================================================================================\r
`,j=[{question:"What is Inheritance in Object-Oriented Programming?",shortAnswer:"A mechanism where a new class (derived/child subclass) inherits attributes, methods, and behaviors from one or more existing classes (base/parent superclasses).",explanation:"Promotes code reuse, polymorphism, and hierarchical domain modeling.",hint:"Mechanism allowing a child class to inherit state and behavior from parent classes.",level:"basic",codeExample:`class Student(Person):
    pass`},{question:"What are the four primary inheritance topologies supported in Python?",shortAnswer:"1. Single Inheritance; 2. Multilevel Inheritance; 3. Multiple Inheritance; 4. Hierarchical Inheritance.",explanation:"Python also supports Hybrid Inheritance by combining these topologies.",hint:"Single, Multilevel, Multiple, and Hierarchical.",level:"basic",codeExample:`# Single: class B(A)
# Multilevel: class C(B) -> class B(A)
# Multiple: class D(A, B)
# Hierarchical: class B(A), class C(A)`},{question:"What is Single Inheritance?",shortAnswer:"When a child subclass inherits from exactly one parent superclass (e.g. class Employee(Person):).",explanation:"The simplest and most common form of object-oriented inheritance.",hint:"Child inherits from exactly one parent.",level:"basic",codeExample:`class Staff(Person):
    def __init__(self, name, emp_id):
        super().__init__(name)
        self.emp_id = emp_id`},{question:"What is Multilevel Inheritance?",shortAnswer:"When a class inherits from a derived class, forming a linear ancestral chain (e.g. Person -> Staff -> DepartmentHead).",explanation:"The bottom-most subclass inherits attributes and methods from all ancestors in the chain.",hint:"A linear chain of inheritance (Grandparent -> Parent -> Child).",level:"basic",codeExample:`class A: pass
class B(A): pass
class C(B): pass  # Multilevel`},{question:"What is Multiple Inheritance in Python?",shortAnswer:"When a single subclass inherits directly from two or more parent base classes simultaneously (e.g. class Admin(User, LoggerMixin, AuthMixin):).",explanation:"Allows combining multiple independent capabilities into a single entity.",hint:"Child subclass inheriting from two or more parent classes.",level:"basic",codeExample:`class FlyingCar(Car, Airplane):
    pass`},{question:"What is the 'Mixin' architectural pattern in Python?",shortAnswer:"A small, specialized class designed to add a single reusable capability (e.g. JSON export, logging, caching) to other classes via multiple inheritance, without being instantiated on its own.",explanation:"Mixins do not maintain independent state or participate in strict taxonomy.",hint:"Small composable class providing a specific capability.",level:"moderate",codeExample:`class JSONMixin:
    def to_json(self): return json.dumps(self.__dict__)`},{question:"What is Hierarchical Inheritance?",shortAnswer:"When multiple independent subclasses inherit from a single shared parent base class (e.g. OnlineCourse and ClassroomCourse both inheriting from EducationalCourse).",explanation:"Common for modeling sibling branches that share common root properties.",hint:"Multiple subclasses sharing one single parent root.",level:"basic",codeExample:`class Cat(Animal): pass
class Dog(Animal): pass`},{question:"What is the difference between 'isinstance(obj, Class)' and 'issubclass(SubClass, BaseClass)'?",shortAnswer:"'isinstance(obj, Class)' checks if an object instance belongs to a class or any of its ancestors; 'issubclass(Sub, Base)' checks if a class type is derived from another class.",explanation:"'isinstance' evaluates living objects; 'issubclass' evaluates class types.",hint:"isinstance checks objects; issubclass checks class types.",level:"basic",codeExample:`isinstance(student, Person)       # True (Object check)
issubclass(StudentUser, BaseUser) # True (Class check)`},{question:"What is the core difference between 'IS-A' (Inheritance) and 'HAS-A' (Composition)?",shortAnswer:"'IS-A' represents inheritance where a subclass is a specialized version of the base class (A Student IS A User); 'HAS-A' represents composition where an object contains another object as an attribute (A Student HAS AN Address).",explanation:"A fundamental distinction in software design and architecture.",hint:"IS-A = Inheritance; HAS-A = Composition (owning an object).",level:"moderate",codeExample:`# IS-A: class Student(User)
# HAS-A: self.address = Address()`},{question:"Why do software architects recommend 'Favor Composition over Inheritance'?",shortAnswer:"Because deep, rigid inheritance hierarchies create fragile base class bugs and tight coupling; composition provides greater flexibility, easier unit testing, and dynamic runtime interchangeability.",explanation:"Composition allows swapping behavior by replacing internal object components.",hint:"Reduces coupling, avoids fragile hierarchies, and increases flexibility.",level:"moderate",codeExample:"# Better to compose behaviors than build 8-level inheritance hierarchies"},{question:"How does constructor chaining work with 'super().__init__()' in single and multilevel inheritance?",shortAnswer:"Each derived class calls 'super().__init__(*args)' at the beginning of its constructor, delegating the initialization of inherited attributes up the chain.",explanation:"Ensures every ancestral layer in the hierarchy is properly initialized in sequence.",hint:"Subclass delegates initialization up the hierarchy via super().__init__().",level:"basic",codeExample:`def __init__(self, name, id):
    super().__init__(name)
    self.id = id`},{question:"What is the root class of all classes in Python 3?",shortAnswer:"The built-in 'object' class. Every class in Python 3 automatically inherits from 'object' by default.",explanation:"Provides fundamental magic methods like __str__, __eq__, and __hash__.",hint:"The root 'object' class.",level:"basic",codeExample:"isinstance(any_class_instance, object)  # Always True"},{question:"What is 'Hybrid Inheritance'?",shortAnswer:"A combination of two or more inheritance topologies in a single application (e.g. hierarchical branching combined with multiple mixin inheritance).",explanation:"Very common in large enterprise frameworks and GUI libraries.",hint:"A combination of multiple inheritance types in one architecture.",level:"moderate",codeExample:"class SuperUser(BaseUser, AuditMixin): pass"},{question:"What naming convention is standard for Mixin classes in Python?",shortAnswer:"Suffixing the class name with 'Mixin' (e.g. JSONExportMixin, AuthLoggerMixin, SerializerMixin).",explanation:"Clearly communicates architectural intent to other developers.",hint:"Suffix the class name with 'Mixin'.",level:"basic",codeExample:`class CacheableMixin:
    pass`},{question:"Can a subclass access protected attributes ('_var') inherited from a parent class?",shortAnswer:"Yes. Protected attributes prefixed with a single underscore are fully accessible to subclasses in Python.",explanation:"Designed specifically for internal class and subclass sharing.",hint:"Yes, protected _var attributes are accessible to subclasses.",level:"basic",codeExample:`class Child(Parent):
    def show(self): print(self._protected_data)`},{question:"Can a subclass directly access private attributes ('__var') inherited from a parent class without mangled names?",shortAnswer:"No. Because parent private attributes are mangled to '_ParentClass__var', calling 'self.__var' in the child looks for '_ChildClass__var' and raises AttributeError.",explanation:"Demonstrates the collision prevention mechanism of Name Mangling.",hint:"No, raises AttributeError due to class-specific name mangling.",level:"moderate",codeExample:"# Child cannot directly access self.__parent_private"},{question:"How do you check all direct parent base classes of a class in Python?",shortAnswer:"Using the 'ClassName.__bases__' tuple attribute.",explanation:"Lists the direct parent classes specified in the class definition header.",hint:"Inspect ClassName.__bases__.",level:"basic",codeExample:"print(SuperAdminUser.__bases__)"},{question:"How do you check all direct subclasses of a class in Python?",shortAnswer:"Using the 'ClassName.__subclasses__()' method.",explanation:"Returns a list of all active subclasses currently loaded in memory.",hint:"Call ClassName.__subclasses__().",level:"moderate",codeExample:"print(BaseSystemUser.__subclasses__())"},{question:"What is the 'Fragile Base Class' problem in object-oriented inheritance?",shortAnswer:"An architectural hazard where a seemingly harmless modification to a base class unintentionally breaks derived subclasses across the entire system.",explanation:"One of the main arguments for preferring composition over deep inheritance hierarchies.",hint:"Base class modifications unintentionally breaking derived subclasses.",level:"complex",codeExample:"# Modifying Parent.__init__ signature breaks 20 subclasses"},{question:"Can a class inherit from multiple classes that have conflicting method names?",shortAnswer:"Yes. Python uses the C3 Linearization algorithm to establish the Method Resolution Order (MRO), determining which parent's method takes precedence.",explanation:"Topic 10 covers Method Resolution Order (MRO) in deep technical detail.",hint:"Yes, resolved by Python's Method Resolution Order (MRO).",level:"moderate",codeExample:"# Resolved by MRO left-to-right order"},{question:"Why should Mixin classes generally NOT define their own complex '__init__' constructors?",shortAnswer:"To avoid constructor argument conflicts and complicated 'super().__init__()' parameter passing issues when combined with other classes.",explanation:"Mixins should provide modular stateless or decoupled behaviors.",hint:"To avoid constructor parameter conflicts during multiple inheritance.",level:"complex",codeExample:"# Mixins should focus on methods rather than heavy stateful __init__"},{question:"What is the Liskov Substitution Principle (LSP) in inheritance?",shortAnswer:"The principle that objects of a superclass should be replaceable with objects of a subclass without breaking application correctness or violating expected contracts.",explanation:"Subclasses must honor the method signatures and invariants of parent classes.",hint:"Subclasses must be substitutable for their base classes without breaking behavior.",level:"moderate",codeExample:"# Subclasses should accept the same arguments and return compatible types"},{question:"Can a class inherit from a built-in Python type like list or dict?",shortAnswer:"Yes (e.g. class CustomList(list):), although inheriting from collections.UserList or collections.UserDict is generally recommended for complete C-extension override compatibility.",explanation:"Allows customizing standard data structure behavior.",hint:"Yes, or use collections.UserList / UserDict for cleaner overrides.",level:"moderate",codeExample:`class AutoSortingList(list):
    def append(self, item):
        super().append(item)
        self.sort()`},{question:"What is the difference between 'type(obj) is ParentClass' and 'isinstance(obj, ParentClass)'?",shortAnswer:"'type(obj) is ParentClass' checks for exact type identity and returns False for derived subclasses; 'isinstance(obj, ParentClass)' returns True for subclasses, honoring inheritance.",explanation:"Always use 'isinstance' for polymorphic type checks.",hint:"type() checks exact class; isinstance() includes inherited subclasses.",level:"basic",codeExample:`type(student) is BaseUser       # False
isinstance(student, BaseUser)   # True`},{question:"What is the golden rule for designing clean inheritance hierarchies in Python?",shortAnswer:"Keep hierarchies shallow (at most 2–3 levels deep), use inheritance strictly for true 'IS-A' taxonomic relationships, and use composable Mixins or Composition for auxiliary capabilities.",explanation:"Prevents spaghetti architectures while maximizing modular code reuse.",hint:"Keep hierarchies shallow (2-3 levels), use IS-A strictly, and use mixins for capabilities.",level:"basic",codeExample:"# Shallow hierarchies + mixins = Clean extensible architecture"}];function P(){const d=c.useRef([]),[a,h]=c.useState("topologies"),[l,o]=c.useState("superadmin");c.useEffect(()=>{const t=new IntersectionObserver(i=>{i.forEach(x=>{x.isIntersecting&&x.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return d.current.forEach(i=>{i&&t.observe(i)}),()=>t.disconnect()},[]);const s=t=>{t&&!d.current.includes(t)&&d.current.push(t)},r={student:{title:"StudentUser",topology:"Hierarchical (Child of BaseSystemUser)",ancestors:["StudentUser","BaseSystemUser","object"],attributes:["user_id","display_name","email","enrolled_course","permissions"],permissions:["VIEW_LESSONS","SUBMIT_ASSIGNMENTS","JOIN_DISCORD"],isBaseUser:!0,hasAuditMixin:!1,hasPaymentMixin:!1},faculty:{title:"FacultyInstructor",topology:"Hierarchical (Child of BaseSystemUser)",ancestors:["FacultyInstructor","BaseSystemUser","object"],attributes:["user_id","display_name","email","specialization","permissions"],permissions:["GRADE_ASSIGNMENTS","CREATE_QUIZZES","UPLOAD_VIDEOS"],isBaseUser:!0,hasAuditMixin:!1,hasPaymentMixin:!1},hod:{title:"DepartmentHead",topology:"Multilevel (Person -> InstituteStaff -> DepartmentHead)",ancestors:["DepartmentHead","InstituteStaff","Person","object"],attributes:["full_name","national_id","email","emp_id","department","base_salary","annual_budget"],permissions:["ALLOCATE_BUDGET","MANAGE_FACULTY","SIGN_CERTIFICATES"],isBaseUser:!1,hasAuditMixin:!1,hasPaymentMixin:!1},superadmin:{title:"SuperAdminUser",topology:"Multiple Inheritance (BaseSystemUser + SecurityAuditing + PaymentGateway)",ancestors:["SuperAdminUser","BaseSystemUser","SecurityAuditingCapability","PaymentGatewayCapability","object"],attributes:["user_id","display_name","email","permissions"],permissions:["ALL_SYSTEM_PRIVILEGES","MANAGE_USERS","EXECUTE_REFUNDS","FORENSIC_AUDIT"],isBaseUser:!0,hasAuditMixin:!0,hasPaymentMixin:!0}}[l];return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:s,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_001"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 8"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Object-Oriented Programming (OOP) in Python"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Inheritance: ",e.jsx("span",{className:"text-teal-400",children:"Single"}),", ",e.jsx("span",{className:"text-cyan-400",children:"Multiple"}),", ",e.jsx("span",{className:"text-purple-400",children:"Multilevel"})," & ",e.jsx("span",{className:"text-amber-400",children:"Hierarchical"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master Python's inheritance topologies: single base inheritance, multilevel linear chains, multiple inheritance with composable ",e.jsx("code",{className:"text-teal-300 font-mono",children:"Mixins"}),", hierarchical branching, constructor chaining with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"super().__init__()"}),", and the principle of ",e.jsx("span",{className:"text-amber-300 font-semibold",children:"Composition over Inheritance"}),"."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🌳 4 Core Topologies"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🧩 Composable Mixin Architecture"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔗 Constructor Chaining (super)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ RBAC User Role Hierarchies"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Four Primary Inheritance Topologies"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"Python natively supports all four foundational object-oriented inheritance structures, allowing child classes to inherit attributes, methods, and invariants from ancestor classes:"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Single"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"class Staff(Person):"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Direct 1-to-1 inheritance from a single base parent class."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"2️⃣ Multilevel"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"HOD(Staff) -> Staff(Person)"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Linear chain of descent (Grandparent → Parent → Child)."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"3️⃣ Multiple"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"Admin(User, AuditMixin):"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Child class inheriting simultaneously from 2+ base classes / mixins."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 shadow-lg",children:[e.jsx("div",{className:"text-amber-400 font-bold text-sm mb-1",children:"4️⃣ Hierarchical"}),e.jsx("code",{className:"text-xs font-mono text-amber-300 block mb-1",children:"Student(User), Faculty(User)"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Multiple sibling classes branching from a single shared parent root."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-amber-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"Architectural Principle: IS-A vs HAS-A"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Use ",e.jsx("strong",{children:"Inheritance (IS-A)"})," only when a strict taxonomic relationship holds (",e.jsx("code",{className:"text-teal-300 font-mono",children:"Student IS-A User"}),"). Use ",e.jsx("strong",{children:"Composition (HAS-A)"})," when an object merely owns or delegates to another component (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"Student HAS-AN Address"}),")."]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Topologies & Mixin Pipelines"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>h("topologies"),className:n("px-3 py-1.5 rounded-lg transition-all",a==="topologies"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"4 Topologies Map"}),e.jsx("button",{onClick:()=>h("mixins"),className:n("px-3 py-1.5 rounded-lg transition-all",a==="mixins"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Mixin Composition Pipeline"}),e.jsx("button",{onClick:()=>h("chaining"),className:n("px-3 py-1.5 rounded-lg transition-all",a==="chaining"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"super() Constructor Chaining"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining taxonomic lineage, capability mixins, and linear constructor propagation:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:a==="topologies"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"THE 4 INHERITANCE TOPOLOGIES IN PYTHON"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"190",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"1. Single"}),e.jsx("rect",{x:"25",y:"60",width:"140",height:"40",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"50",y:"85",fill:"#34d399",fontSize:"11 font-mono font-bold",children:"Person"}),e.jsx("text",{x:"90",y:"125",fill:"#34d399",fontSize:"18",fontWeight:"bold",children:"↓"}),e.jsx("rect",{x:"25",y:"145",width:"140",height:"40",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"55",y:"170",fill:"#a7f3d0",fontSize:"11 font-mono font-bold",children:"Staff"}),e.jsx("rect",{x:"210",y:"0",width:"190",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"225",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"2. Multilevel"}),e.jsx("rect",{x:"235",y:"50",width:"140",height:"35",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"260",y:"72",fill:"#c4b5fd",fontSize:"10 font-mono",children:"Person"}),e.jsx("text",{x:"300",y:"102",fill:"#c4b5fd",fontSize:"14",children:"↓"}),e.jsx("rect",{x:"235",y:"110",width:"140",height:"35",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"265",y:"132",fill:"#c4b5fd",fontSize:"10 font-mono",children:"Staff"}),e.jsx("text",{x:"300",y:"162",fill:"#c4b5fd",fontSize:"14",children:"↓"}),e.jsx("rect",{x:"235",y:"170",width:"140",height:"35",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"255",y:"192",fill:"#e9d5ff",fontSize:"10 font-mono font-bold",children:"DeptHead"}),e.jsx("rect",{x:"420",y:"0",width:"190",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"435",y:"30",fill:"#a5f3fc",fontSize:"12",fontWeight:"bold",children:"3. Multiple"}),e.jsx("rect",{x:"430",y:"55",width:"75",height:"35",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"440",y:"77",fill:"#38bdf8",fontSize:"9 font-mono",children:"BaseUser"}),e.jsx("rect",{x:"520",y:"55",width:"75",height:"35",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"530",y:"77",fill:"#38bdf8",fontSize:"9 font-mono",children:"AuditMixin"}),e.jsx("text",{x:"505",y:"125",fill:"#38bdf8",fontSize:"18",fontWeight:"bold",children:"↘ ↙"}),e.jsx("rect",{x:"445",y:"145",width:"140",height:"40",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"460",y:"170",fill:"#a5f3fc",fontSize:"11 font-mono font-bold",children:"SuperAdmin"}),e.jsx("rect",{x:"630",y:"0",width:"220",height:"240",rx:"8",fill:"#451a03",stroke:"#d97706"}),e.jsx("text",{x:"645",y:"30",fill:"#fde68a",fontSize:"12",fontWeight:"bold",children:"4. Hierarchical"}),e.jsx("rect",{x:"670",y:"55",width:"140",height:"35",rx:"4",fill:"#78350f",stroke:"#b45309"}),e.jsx("text",{x:"705",y:"77",fill:"#fef3c7",fontSize:"10 font-mono font-bold",children:"BaseCourse"}),e.jsx("text",{x:"735",y:"115",fill:"#fde68a",fontSize:"18",fontWeight:"bold",children:"↙  ↓  ↘"}),e.jsx("rect",{x:"640",y:"135",width:"60",height:"35",rx:"4",fill:"#78350f",stroke:"#b45309"}),e.jsx("text",{x:"645",y:"157",fill:"#fde68a",fontSize:"8 font-mono",children:"Online"}),e.jsx("rect",{x:"710",y:"135",width:"60",height:"35",rx:"4",fill:"#78350f",stroke:"#b45309"}),e.jsx("text",{x:"715",y:"157",fill:"#fde68a",fontSize:"8 font-mono",children:"Classroom"}),e.jsx("rect",{x:"780",y:"135",width:"60",height:"35",rx:"4",fill:"#78350f",stroke:"#b45309"}),e.jsx("text",{x:"785",y:"157",fill:"#fde68a",fontSize:"8 font-mono",children:"Corporate"})]})]}):a==="mixins"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"THE MIXIN CAPABILITY COMPOSITION PIPELINE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"340",height:"60",rx:"6",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"25",fill:"#99f6e4",fontSize:"11 font-bold",children:"JSONExportMixin"}),e.jsx("text",{x:"20",y:"45",fill:"#ecfdf5",fontSize:"9 font-mono",children:"def to_json(self): ..."}),e.jsx("rect",{x:"0",y:"80",width:"340",height:"60",rx:"6",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"105",fill:"#c4b5fd",fontSize:"11 font-bold",children:"AuditLoggerMixin"}),e.jsx("text",{x:"20",y:"125",fill:"#ecfdf5",fontSize:"9 font-mono",children:"def log_event(self, action): ..."}),e.jsx("rect",{x:"0",y:"160",width:"340",height:"60",rx:"6",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"20",y:"185",fill:"#a5f3fc",fontSize:"11 font-bold",children:"SMSNotifierMixin"}),e.jsx("text",{x:"20",y:"205",fill:"#ecfdf5",fontSize:"9 font-mono",children:"def dispatch_sms(self, phone, msg): ..."})]}),e.jsx("g",{transform:"translate(390, 130)",children:e.jsx("text",{x:"10",y:"30",fill:"#38bdf8",fontSize:"26",fontWeight:"bold",children:"→"})}),e.jsxs("g",{transform:"translate(460, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"class CorporateClientContract(...):"}),e.jsx("text",{x:"20",y:"65",fill:"#cbd5e1",fontSize:"10 font-mono",children:"contract = CorporateClientContract(...)"}),e.jsx("rect",{x:"20",y:"95",width:"350",height:"115",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"120",fill:"#34d399",fontSize:"11 font-bold",children:"Instantly Inherits All 3 Capabilities:"}),e.jsx("text",{x:"30",y:"145",fill:"#ecfdf5",fontSize:"10 font-mono",children:"✓ contract.to_json()"}),e.jsx("text",{x:"30",y:"168",fill:"#ecfdf5",fontSize:"10 font-mono",children:'✓ contract.log_event("Renewed")'}),e.jsx("text",{x:"30",y:"191",fill:"#ecfdf5",fontSize:"10 font-mono",children:"✓ contract.dispatch_sms(phone, msg)"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"super().__init__() CONSTRUCTOR CHAINING PROPAGATION"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"15",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"1. DepartmentHead.__init__"}),e.jsx("text",{x:"15",y:"60",fill:"#ecfdf5",fontSize:"10 font-mono font-bold",children:"super().__init__(*args)"}),e.jsx("text",{x:"15",y:"90",fill:"#cbd5e1",fontSize:"10",children:"• Passes name, email, salary"}),e.jsx("text",{x:"15",y:"120",fill:"#34d399",fontSize:"10 font-mono font-bold",children:"self.annual_budget = budget"}),e.jsx("text",{x:"15",y:"150",fill:"#cbd5e1",fontSize:"10",children:"• Binds child-specific state"}),e.jsx("text",{x:"260",y:"130",fill:"#38bdf8",fontSize:"24",fontWeight:"bold",children:"←"}),e.jsx("rect",{x:"290",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"305",y:"30",fill:"#a5f3fc",fontSize:"12",fontWeight:"bold",children:"2. InstituteStaff.__init__"}),e.jsx("text",{x:"305",y:"60",fill:"#ecfdf5",fontSize:"10 font-mono font-bold",children:"super().__init__(*args)"}),e.jsx("text",{x:"305",y:"90",fill:"#cbd5e1",fontSize:"10",children:"• Passes name, email"}),e.jsx("text",{x:"305",y:"120",fill:"#34d399",fontSize:"10 font-mono font-bold",children:"self.emp_id = emp_id"}),e.jsx("text",{x:"305",y:"150",fill:"#cbd5e1",fontSize:"10",children:"• Binds parent-specific state"}),e.jsx("text",{x:"550",y:"130",fill:"#38bdf8",fontSize:"24",fontWeight:"bold",children:"←"}),e.jsx("rect",{x:"580",y:"0",width:"240",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"595",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"3. Person.__init__ (Root)"}),e.jsx("text",{x:"595",y:"60",fill:"#34d399",fontSize:"10 font-mono font-bold",children:"self.full_name = name"}),e.jsx("text",{x:"595",y:"85",fill:"#34d399",fontSize:"10 font-mono font-bold",children:"self.email = email"}),e.jsx("text",{x:"595",y:"120",fill:"#cbd5e1",fontSize:"10",children:"• Binds root human identity"}),e.jsx("text",{x:"595",y:"150",fill:"#a7f3d0",fontSize:"10",children:"✓ Complete state assembled!"})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Educational RBAC Role & Lineage Inspector"})]}),e.jsxs("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:["Select an educational system user entity to inspect inherited ancestry, mixin capabilities, and dynamic ",e.jsx("code",{className:"text-teal-300 font-mono",children:"isinstance()"})," evaluations:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 block font-bold",children:"Select Domain Entity to Introspect"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("button",{onClick:()=>o("student"),className:n("p-3 rounded-lg text-left text-xs font-mono transition-all border",l==="student"?"bg-teal-950/80 border-teal-500 text-teal-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"font-bold text-teal-300",children:"1. StudentUser"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"Hierarchical branch of BaseSystemUser"})]}),e.jsxs("button",{onClick:()=>o("faculty"),className:n("p-3 rounded-lg text-left text-xs font-mono transition-all border",l==="faculty"?"bg-cyan-950/80 border-cyan-500 text-cyan-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"font-bold text-cyan-300",children:"2. FacultyInstructor"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"Hierarchical branch of BaseSystemUser"})]}),e.jsxs("button",{onClick:()=>o("hod"),className:n("p-3 rounded-lg text-left text-xs font-mono transition-all border",l==="hod"?"bg-purple-950/80 border-purple-500 text-purple-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"font-bold text-purple-300",children:"3. DepartmentHead (Multilevel)"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"Person → InstituteStaff → DepartmentHead"})]}),e.jsxs("button",{onClick:()=>o("superadmin"),className:n("p-3 rounded-lg text-left text-xs font-mono transition-all border",l==="superadmin"?"bg-amber-950/80 border-amber-500 text-amber-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"font-bold text-amber-300",children:"4. SuperAdminUser (Multiple + Mixins)"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"BaseSystemUser + SecurityAuditMixin + PaymentGatewayMixin"})]})]})]}),e.jsxs("div",{className:"space-y-3 flex flex-col justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block font-bold",children:"Lineage & Attribute Reflection"}),e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2.5 text-xs font-mono flex-1",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-slate-400",children:"Topology:"})," ",e.jsx("span",{className:"text-teal-300 font-bold",children:r.topology})]}),e.jsxs("div",{className:"pt-2 border-t border-slate-800",children:[e.jsx("span",{className:"text-slate-400 block mb-1",children:"MRO Ancestral Chain:"}),e.jsx("div",{className:"flex flex-wrap gap-1.5",children:r.ancestors.map((t,i)=>e.jsx("span",{className:"bg-slate-950 px-2 py-0.5 rounded border border-slate-800 text-cyan-300",children:t},i))})]}),e.jsxs("div",{className:"pt-2 border-t border-slate-800",children:[e.jsx("span",{className:"text-slate-400 block mb-1",children:"Inherited Permissions:"}),e.jsx("div",{className:"flex flex-wrap gap-1",children:r.permissions.map((t,i)=>e.jsx("span",{className:"bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded text-[10px] border border-emerald-800",children:t},i))})]}),e.jsxs("div",{className:"pt-2 border-t border-slate-800 flex gap-2",children:[e.jsxs("span",{className:n("px-2 py-0.5 rounded text-[10px] border",r.isBaseUser?"bg-teal-950 border-teal-700 text-teal-300":"bg-slate-950 border-slate-800 text-slate-500"),children:["isinstance(BaseUser): ",r.isBaseUser?"True":"False"]}),e.jsxs("span",{className:n("px-2 py-0.5 rounded text-[10px] border",r.hasAuditMixin?"bg-amber-950 border-amber-700 text-amber-300":"bg-slate-950 border-slate-800 text-slate-500"),children:["SecurityAudit: ",r.hasAuditMixin?"Active":"None"]})]})]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Inheritance Topologies Reference Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Topology"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Class Definition Pattern"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Key Strength"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Gotcha / Danger"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"Single"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"class Child(Parent):"}),e.jsx("td",{className:"py-3 px-4",children:"Simple, predictable, zero MRO ambiguity"}),e.jsx("td",{className:"py-3 px-4",children:"Can lead to deep monolithic base classes"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Multilevel"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"class C(B): ... class B(A):"}),e.jsx("td",{className:"py-3 px-4",children:"Layered specialized behavioral accumulation"}),e.jsx("td",{className:"py-3 px-4",children:"Fragile base class problem if hierarchy exceeds 3 levels"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"Multiple (Mixins)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"class Child(Parent, Mixin1, Mixin2):"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-bold",children:"High composability; plug-and-play features"}),e.jsx("td",{className:"py-3 px-4",children:"Diamond inheritance and method conflict risks"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"Hierarchical"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"class B(A): ... class C(A):"}),e.jsx("td",{className:"py-3 px-4",children:"Shared common identity for sibling variants"}),e.jsx("td",{className:"py-3 px-4",children:"Subclasses must honor parent contract (LSP)"})]})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating single, multilevel, multiple mixin composition, hierarchical courses, and educational RBAC suites:"}),e.jsx(m,{files:[{filename:"single_and_multilevel_inheritance.py",code:b,description:"Single and multilevel inheritance mechanics, constructor chaining via super(), and type introspection."},{filename:"multiple_inheritance_and_mixins.py",code:_,description:"Multiple inheritance and composable Mixin architecture (JSONExportMixin, AuditLoggerMixin, SMSNotifierMixin)."},{filename:"hierarchical_and_hybrid_inheritance.py",code:g,description:"Hierarchical inheritance branching across course formats (Online, Classroom, Corporate) and composition rules."},{filename:"enterprise_educational_hierarchy_suite.py",code:y,description:"Enterprise Educational RBAC User Hierarchy combining hierarchical users and multi-inheritance mixin capabilities."}]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Deep Monolithic Inheritance Trees"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:'Building hierarchies 5–8 levels deep creates the "Fragile Base Class" disaster, where modifying root classes breaks dozens of subclasses unpredictably.'}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Keep hierarchies shallow (2–3 levels) and favor Composition for capabilities."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Stateful `__init__` in Mixins"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Defining complex parameter-heavy ",e.jsx("code",{className:"text-amber-300 font-mono",children:"__init__"})," inside mixins creates argument conflicts during multiple inheritance."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Mixins should provide modular behavior methods rather than heavy stateful constructors."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Using `type(obj) is Parent`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Checking ",e.jsx("code",{className:"text-purple-300 font-mono",children:"type(student) is BaseUser"})," returns ",e.jsx("code",{className:"text-purple-300 font-mono",children:"False"}),", breaking polymorphic handling of subclasses!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always use ",e.jsx("code",{className:"text-emerald-300",children:"isinstance(student, BaseUser)"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Forgetting `super().__init__()`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["If a subclass overrides ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"__init__"})," without calling ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"super().__init__()"}),", all parent attributes fail to initialize."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always invoke ",e.jsx("code",{className:"text-emerald-300",children:"super().__init__(*args)"})," at the start of child constructors."]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering single, multiple, multilevel, hierarchical inheritance, and mixin patterns:"}),e.jsx(f,{questions:j})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with inheritance topology maps, mixin blueprints, and RBAC user hierarchies:"}),e.jsx("div",{className:"mb-10",children:e.jsx(p,{content:S,filename:"python_topic8_inheritance_and_mixins_notes.txt",title:"Print Topic 8 Study Notes"})}),e.jsx(u,{})]})]})]})}export{P as default};
