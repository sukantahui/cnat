import{b as r,j as e,bg as d}from"./vendor-react-core-Doz9nIC6.js";import{P as u}from"./PythonFileLoader-hCi5osN-.js";import{P as y}from"./PlainTextPrint-C08xhKA4.js";import{F as g}from"./FAQTemplate-CkSqDH4B.js";import{T as j}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const N=`# topic1_files/class_definition_and_instantiation.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Classes, Instances & Objects: syntax and lifecycle\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 1 - File 1: Class Definition, Instantiation & Memory Identity\r
Demonstrates:\r
  1. Defining custom classes with PEP 8 PascalCase naming conventions\r
  2. Creating multiple distinct living instances in memory\r
  3. Memory address identity using id() and hex(id())\r
  4. Type inspection via type() and isinstance()\r
  5. Dynamic instance attribute assignment and namespace isolation\r
"""\r
\r
class CourseRegistration:\r
    """Class Blueprint representing a student course enrollment."""\r
    institute_name = "Coder & AccoTax"  # Class-level attribute\r
\r
\r
def demonstrate_instantiation_and_identity():\r
    print("=" * 70)\r
    print("1. CLASS INSTANTIATION & MEMORY HEAP ADDRESSES")\r
    print("=" * 70)\r
\r
    # Creating two distinct object instances from the same Class blueprint\r
    student1 = CourseRegistration()\r
    student2 = CourseRegistration()\r
\r
    # Dynamic attribute assignment\r
    student1.student_name = "Abhishek Karmakar"\r
    student1.course = "Python Pro Full-Stack"\r
\r
    student2.student_name = "Debolina Mukherjee"\r
    student2.course = "Data Analytics with Python"\r
\r
    print("Student 1 Instance:")\r
    print(f"  * Name       : {student1.student_name}")\r
    print(f"  * Course     : {student1.course}")\r
    print(f"  * Memory ID  : {hex(id(student1))} (Decimal: {id(student1)})")\r
\r
    print("\\nStudent 2 Instance:")\r
    print(f"  * Name       : {student2.student_name}")\r
    print(f"  * Course     : {student2.course}")\r
    print(f"  * Memory ID  : {hex(id(student2))} (Decimal: {id(student2)})")\r
\r
    # Verify that the two objects are distinct in memory\r
    print(f"\\nAre student1 and student2 identical objects? (student1 is student2) -> {student1 is student2}")\r
\r
\r
def demonstrate_type_verification():\r
    print("\\n" + "=" * 70)\r
    print("2. TYPE INSPECTION: type() VS isinstance()")\r
    print("=" * 70)\r
\r
    student = CourseRegistration()\r
\r
    print(f"type(student)                        : {type(student)}")\r
    print(f"isinstance(student, CourseRegistration) : {isinstance(student, CourseRegistration)}")\r
    print(f"isinstance(student, object)          : {isinstance(student, object)} (All classes inherit from object!)")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_instantiation_and_identity()\r
    demonstrate_type_verification()\r
`,w=`# topic1_files/object_lifecycle_and_memory_model.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Classes, Instances & Objects: syntax and lifecycle\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 1 - File 2: Complete Object Lifecycle (__new__ -> __init__ -> __del__)\r
Demonstrates:\r
  1. Stage 1: Allocation (__new__ static constructor creating the instance)\r
  2. Stage 2: Initialization (__init__ configuring initial instance state)\r
  3. Stage 3: Active Usage & Reference Counting (sys.getrefcount)\r
  4. Stage 4: Deallocation & Destruction (__del__ destructor invoked by GC)\r
"""\r
\r
import sys\r
\r
class ManagedResource:\r
    """Demonstrates every hook in the Python object lifecycle."""\r
\r
    def __new__(cls, resource_name: str):\r
        print(f"  [STAGE 1: __new__] Allocating heap memory for class '{cls.__name__}'")\r
        instance = super().__new__(cls)\r
        return instance\r
\r
    def __init__(self, resource_name: str):\r
        print(f"  [STAGE 2: __init__] Initializing instance state: resource_name='{resource_name}'")\r
        self.resource_name = resource_name\r
\r
    def execute_operation(self):\r
        print(f"  [STAGE 3: USAGE] Active operation executed on '{self.resource_name}'")\r
\r
    def __del__(self):\r
        print(f"  [STAGE 4: __del__] Destructor called: Releasing resource '{self.resource_name}'")\r
\r
\r
def demonstrate_lifecycle():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - CPYTHON OBJECT LIFECYCLE MODEL")\r
    print("=" * 70)\r
\r
    print("\\n--- A. INSTANTIATION TRIGGER (__new__ THEN __init__) ---")\r
    res = ManagedResource("Database Connection #1")\r
\r
    print("\\n--- B. ACTIVE OBJECT USAGE & REFERENCE COUNTING ---")\r
    res.execute_operation()\r
    # Note: sys.getrefcount adds 1 temporary reference for the argument itself\r
    print(f"Active references to 'res': {sys.getrefcount(res) - 1}")\r
\r
    print("\\n--- C. DESTRUCTION TRIGGER (EXPLICIT del) ---")\r
    del res  # Reference count reaches 0 -> Garbage Collector executes __del__\r
\r
    print("\\n[PASSED] Object Lifecycle Demonstration Complete.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_lifecycle()\r
`,v=`# topic1_files/object_namespaces_and_dict.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Classes, Instances & Objects: syntax and lifecycle\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 1 - File 3: Object Namespaces & The __dict__ Attribute Table\r
Demonstrates:\r
  1. How instances store attributes in their private __dict__ mapping\r
  2. How classes store shared class variables and methods in Class.__dict__\r
  3. The attribute resolution order (Instance.__dict__ -> Class.__dict__ -> AttributeError)\r
  4. Dynamically modifying object state via __dict__\r
"""\r
\r
class Employee:\r
    """Class blueprint with shared class metadata."""\r
    company_name = "Coder & AccoTax"\r
    base_currency = "INR"\r
\r
    def __init__(self, emp_id: str, name: str, salary: float):\r
        self.emp_id = emp_id\r
        self.name = name\r
        self.salary = salary\r
\r
\r
def inspect_namespaces():\r
    print("=" * 70)\r
    print("1. INSTANCE NAMESPACE VS CLASS NAMESPACE")\r
    print("=" * 70)\r
\r
    emp1 = Employee("EMP-101", "Sourav Bhattacharya", 45000.0)\r
    emp2 = Employee("EMP-102", "Moumita Sen", 55000.0)\r
\r
    print("Employee 1's instance __dict__:")\r
    for k, v in emp1.__dict__.items():\r
        print(f"  * {k:<12} : {v}")\r
\r
    print("\\nEmployee 2's instance __dict__:")\r
    for k, v in emp2.__dict__.items():\r
        print(f"  * {k:<12} : {v}")\r
\r
    print("\\nClass Level __dict__ Keys (Sample):")\r
    sample_class_keys = [k for k in Employee.__dict__.keys() if not k.startswith("__")][:4]\r
    print(f"  * {sample_class_keys}")\r
\r
\r
def demonstrate_attribute_lookup_resolution():\r
    print("\\n" + "=" * 70)\r
    print("2. ATTRIBUTE LOOKUP RESOLUTION ENGINE")\r
    print("=" * 70)\r
\r
    emp = Employee("EMP-103", "Kallol Das", 60000.0)\r
\r
    print("Lookup Step 1: \`emp.name\`")\r
    print(f"  -> Found directly in emp.__dict__: '{emp.name}'")\r
\r
    print("\\nLookup Step 2: \`emp.company_name\`")\r
    print("  -> Not in emp.__dict__!")\r
    print(f"  -> Python searches Employee.__dict__ and finds: '{emp.company_name}'")\r
\r
    print("\\nLookup Step 3: Shadowing a class attribute on an instance:")\r
    emp.company_name = "Coder & AccoTax (Consulting Wing)"\r
    print(f"  -> Now in emp.__dict__: '{emp.__dict__['company_name']}'")\r
    print(f"  -> Original Class.__dict__ unchanged: '{Employee.company_name}'")\r
\r
\r
if __name__ == "__main__":\r
    inspect_namespaces()\r
    demonstrate_attribute_lookup_resolution()\r
`,C=`# topic1_files/vehicle_fleet_management_system.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Classes, Instances & Objects: syntax and lifecycle\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 1 - File 4: Enterprise Vehicle Fleet Lifecycle Management System\r
Demonstrates:\r
  1. Class design for physical asset management (Vehicle class)\r
  2. Tracking object state transitions (ACTIVE, IN_SERVICE, RETIRED)\r
  3. Dynamic object lifecycle tracking and maintenance scheduling\r
"""\r
\r
from typing import List, Dict\r
\r
class CommercialVehicle:\r
    """Class blueprint modeling commercial transport assets."""\r
    fleet_owner = "Coder & AccoTax Logistics (Barrackpore)"\r
    total_vehicles_registered = 0\r
\r
    def __init__(self, registration_no: str, model_name: str, initial_odometer: float = 0.0):\r
        self.registration_no = registration_no\r
        self.model_name = model_name\r
        self.odometer = float(initial_odometer)\r
        self.status = "ACTIVE"  # ACTIVE, IN_SERVICE, RETIRED\r
        CommercialVehicle.total_vehicles_registered += 1\r
\r
    def log_trip(self, distance_km: float) -> None:\r
        if distance_km <= 0:\r
            print(f"  [ERROR] Invalid distance: {distance_km} km")\r
            return\r
        if self.status != "ACTIVE":\r
            print(f"  [ERROR] Cannot dispatch vehicle {self.registration_no} - Current Status: {self.status}")\r
            return\r
        self.odometer += distance_km\r
        print(f"  [TRIP LOGGED] {self.registration_no} completed {distance_km:.1f} km. Total Odometer: {self.odometer:,.1f} km")\r
\r
    def schedule_maintenance(self) -> None:\r
        self.status = "IN_SERVICE"\r
        print(f"  [SERVICE] Vehicle {self.registration_no} moved to Maintenance Bay.")\r
\r
    def release_from_service(self) -> None:\r
        self.status = "ACTIVE"\r
        print(f"  [SERVICE] Vehicle {self.registration_no} passed inspection and returned to ACTIVE fleet.")\r
\r
\r
def run_fleet_demo():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - VEHICLE FLEET LIFECYCLE TRACKER")\r
    print("=" * 70)\r
    print(f"Fleet Manager: {CommercialVehicle.fleet_owner}\\n")\r
\r
    # 1. Instantiate fleet objects\r
    v1 = CommercialVehicle("WB-24-A-1001", "Tata Ace Gold", 15400.0)\r
    v2 = CommercialVehicle("WB-24-B-2002", "Mahindra Bolero Maxi", 28900.0)\r
\r
    print(f"Total Fleet Registered: {CommercialVehicle.total_vehicles_registered} vehicles\\n")\r
\r
    # 2. Lifecycle operations\r
    v1.log_trip(45.5)\r
    v1.log_trip(120.0)\r
\r
    v2.schedule_maintenance()\r
    v2.log_trip(50.0)  # Correctly blocked by lifecycle status\r
    v2.release_from_service()\r
    v2.log_trip(50.0)  # Allowed now\r
\r
    print("\\n[PASSED] Fleet Lifecycle Simulation Complete.")\r
\r
\r
if __name__ == "__main__":\r
    run_fleet_demo()\r
`,S=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_001: OBJECT-ORIENTED PYTHON\r
          TOPIC 1: CLASSES, INSTANCES & OBJECTS: SYNTAX & LIFECYCLE\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. DEFINING & INSTANTIATING CLASSES\r
--------------------------------------------------------------------------------\r
  • Class Definition:\r
      class StudentRegistration:\r
          institute = "Coder & AccoTax"   # Class attribute\r
\r
  • Object Instantiation:\r
      s1 = StudentRegistration()          # Creates new heap instance\r
      s1.name = "Abhishek"               # Instance attribute\r
\r
--------------------------------------------------------------------------------\r
2. THE 4 STAGES OF THE CPYTHON OBJECT LIFECYCLE\r
--------------------------------------------------------------------------------\r
  Stage 1: Allocation      -> __new__(cls) creates and returns the raw instance.\r
  Stage 2: Initialization  -> __init__(self) sets up initial attributes.\r
  Stage 3: Active Usage    -> Interacting via methods; reference count tracked.\r
  Stage 4: Destruction     -> __del__(self) executed by GC when refcount hits 0.\r
\r
--------------------------------------------------------------------------------\r
3. ATTRIBUTE RESOLUTION HIERARCHY\r
--------------------------------------------------------------------------------\r
  When you access \`obj.attribute\`:\r
    1. Check \`obj.__dict__\` (Instance Namespace)\r
    2. Check \`Class.__dict__\` (Class Namespace)\r
    3. Check Base Class Namespaces (MRO)\r
    4. Raise AttributeError if not found anywhere\r
\r
================================================================================\r
        END OF STUDY NOTE • TOPIC 1: CLASSES, INSTANCES & LIFECYCLE\r
================================================================================\r
`,E=[{question:"What is the difference between a Class and an Object Instance?",shortAnswer:"A Class is a user-defined blueprint that defines the structure and behavior; an Object Instance is a concrete living realization of that blueprint stored in memory.",explanation:"You can create hundreds of distinct object instances from a single class blueprint.",hint:"Class = Template/Blueprint; Object Instance = Living memory structure.",level:"basic",codeExample:`class Car: pass
car1 = Car()  # Instance 1
car2 = Car()  # Instance 2`},{question:"What naming convention does PEP 8 recommend for Python class names?",shortAnswer:"PascalCase (also known as CapWords), where each word starts with a capital letter without underscores (e.g. BankAccount, UserRegistration).",explanation:"Distinguishes classes visually from functions and variables which use snake_case.",hint:"PascalCase / CapWords convention.",level:"basic",codeExample:`class CourseEnrollmentManager:
    pass`},{question:"How do you inspect the unique memory address identifier of an object in Python?",shortAnswer:"Using the built-in id(obj) function or hex(id(obj)) for hexadecimal memory format.",explanation:"In CPython, id() returns the actual virtual memory address where the object resides.",hint:"Use id(obj) or hex(id(obj)).",level:"basic",codeExample:`obj = object()
print(hex(id(obj)))  # e.g. 0x7fa28c045b10`},{question:"What is the difference between the '==' operator and the 'is' operator when comparing objects?",shortAnswer:"'==' checks for value equality (invoking __eq__); 'is' checks for memory identity (whether both variables point to the exact same memory address: id(a) == id(b)).",explanation:"Two different objects with identical data will evaluate to True for '==' but False for 'is'.",hint:"'==' tests value equality; 'is' tests memory identity.",level:"basic",codeExample:`a = [1, 2]
b = [1, 2]
print(a == b)  # True
print(a is b)  # False`},{question:"What are the 4 stages in the CPython object lifecycle?",shortAnswer:"1. Allocation (__new__); 2. Initialization (__init__); 3. Active Usage & Reference Counting; 4. Destruction & Deallocation (__del__).",explanation:"These four stages dictate how objects are born, configured, used, and reclaimed by memory management.",hint:"Allocation -> Initialization -> Usage -> Destruction.",level:"moderate",codeExample:"# 1. __new__ -> 2. __init__ -> 3. obj.method() -> 4. __del__"},{question:"What is the difference between '__new__' and '__init__'?",shortAnswer:"'__new__' is a static constructor that creates and returns the raw empty instance in memory; '__init__' is an initializer that configures attributes on that already-created instance.",explanation:"'__new__' takes 'cls' and returns the object; '__init__' takes 'self' and returns None.",hint:"__new__ creates the object; __init__ initializes its attributes.",level:"complex",codeExample:`def __new__(cls, *args): return super().__new__(cls)
def __init__(self, name): self.name = name`},{question:"What is reference counting in Python's memory management?",shortAnswer:"CPython tracks the number of active references pointing to each object in memory; when an object's reference count drops to 0, its memory is deallocated immediately.",explanation:"You can inspect an object's reference count using sys.getrefcount(obj).",hint:"Tracking active pointers to an object; freed when count hits 0.",level:"moderate",codeExample:`import sys
x = []
print(sys.getrefcount(x) - 1)`},{question:"What is the '__del__' method in Python?",shortAnswer:"A destructor method called automatically by the garbage collector right before an object's memory is deallocated.",explanation:"Often used to close external non-memory resources like sockets or file descriptors (though context managers with 'with' are preferred).",hint:"Destructor callback executed when reference count hits 0.",level:"moderate",codeExample:`def __del__(self):
    print('Cleaning up resources...')`},{question:"Why should developers avoid relying heavily on '__del__' for critical resource cleanup?",shortAnswer:"Because the exact timing of __del__ execution is non-deterministic, circular references can delay cleanup, and exceptions inside __del__ are ignored.",explanation:"Context managers (the 'with' statement) provide guaranteed deterministic cleanup.",hint:"Non-deterministic execution and circular reference traps; use 'with' instead.",level:"complex",codeExample:"# Prefer 'with open(...) as f:' over relying on __del__"},{question:"What is '__dict__' on an object instance?",shortAnswer:"A standard Python dictionary that stores all dynamic writable attributes assigned to that specific object instance.",explanation:"When you write 'obj.x = 10', Python stores {'x': 10} inside 'obj.__dict__'.",hint:"The internal dictionary mapping attribute names to values on an instance.",level:"moderate",codeExample:`class A: pass
a = A()
a.score = 95
print(a.__dict__)  # {'score': 95}`},{question:"What is the attribute lookup resolution order when evaluating 'obj.attr'?",shortAnswer:"1. obj.__dict__ (Instance Namespace) -> 2. Class.__dict__ (Class Namespace) -> 3. Base Classes in MRO order -> 4. Raises AttributeError if not found.",explanation:"Instance attributes shadow/override class attributes with the same name.",hint:"Instance dict -> Class dict -> Base class dict -> AttributeError.",level:"moderate",codeExample:"# Lookup flow: instance -> class -> base classes -> error"},{question:"What is Attribute Shadowing in Python objects?",shortAnswer:"When an attribute is assigned to an instance (e.g. obj.company = 'New'), it creates an entry in obj.__dict__ that overrides/shadows the class-level attribute of the same name for that specific instance.",explanation:"The class-level attribute remains unchanged for all other instances.",hint:"Instance attribute hiding a class attribute of the same name.",level:"moderate",codeExample:`class S: count = 0
s = S()
s.count = 10  # Shadows S.count on 's' only`},{question:"What is the difference between 'type(obj) is Class' and 'isinstance(obj, Class)'?",shortAnswer:"'type(obj) is Class' checks for exact type match without considering inheritance; 'isinstance(obj, Class)' returns True for subclasses as well.",explanation:"PEP 8 strongly recommends 'isinstance()' for polymorphic type checking.",hint:"isinstance supports inheritance hierarchies; type() checks exact type.",level:"moderate",codeExample:"isinstance(student, Person)  # True if student is a subclass of Person"},{question:"Can attributes be added dynamically to an instance after creation?",shortAnswer:"Yes. By default, Python instances allow adding, modifying, and deleting attributes dynamically at runtime unless restricted by __slots__.",explanation:"Python objects are open dynamic dictionaries by default.",hint:"Yes, Python objects are dynamic by default.",level:"basic",codeExample:`user = User()
user.temporary_tag = 'VIP'`},{question:"What does the 'pass' keyword do inside a class definition?",shortAnswer:"Acts as a placeholder statement to create a syntactically valid empty class without attributes or methods.",explanation:"Useful when scaffolding code or creating custom exception types.",hint:"Placeholder statement for empty class definitions.",level:"basic",codeExample:`class CustomAppError(Exception):
    pass`},{question:"What is '__class__' on an instance?",shortAnswer:"A reference pointing back to the Class object that was used to instantiate the object.",explanation:"'obj.__class__' is equivalent to 'type(obj)'.",hint:"Reference to the instance's class type.",level:"basic",codeExample:`obj = Car()
print(obj.__class__.__name__)  # 'Car'`},{question:"What is the base class from which all Python classes inherit by default in Python 3?",shortAnswer:"The built-in 'object' class (e.g. class MyClass: is equivalent to class MyClass(object):).",explanation:"Every class in Python 3 is a new-style class inheriting from 'object'.",hint:"The root 'object' class.",level:"basic",codeExample:`print(isinstance(5, object))     # True
print(isinstance('a', object))   # True`},{question:"How do you delete an attribute from an instance dynamically?",shortAnswer:"Using the 'del' statement: del obj.attribute_name (or delattr(obj, 'attribute_name')).",explanation:"Removes the key from obj.__dict__.",hint:"Use del obj.attr or delattr(obj, 'attr').",level:"basic",codeExample:"del student.temp_score"},{question:"What is 'getattr(obj, 'attr', default)' used for?",shortAnswer:"Dynamically accesses an attribute on an object by its string name, returning a fallback default if the attribute does not exist.",explanation:"Prevents AttributeError crashes when accessing dynamic or optional attributes.",hint:"Safely reads dynamic attributes by string name with a fallback default.",level:"basic",codeExample:"role = getattr(user, 'role', 'guest')"},{question:"What is 'hasattr(obj, 'attr')'?",shortAnswer:"Returns True if the specified attribute or method name exists on the object (or its class hierarchy), otherwise False.",explanation:"Useful for introspection and duck-typing capability checks.",hint:"Checks if an attribute or method exists on an object.",level:"basic",codeExample:"if hasattr(stream, 'read'): stream.read()"},{question:"What does 'setattr(obj, 'attr', value)' do?",shortAnswer:"Sets an attribute on an object using a dynamic string name.",explanation:"Equivalent to 'obj.attr = value', but allows the attribute name to be a variable.",hint:"Dynamically assigns an attribute using a string key.",level:"basic",codeExample:"setattr(config, 'db_port', 5432)"},{question:"What is a 'Circular Reference' and how does Python's cyclic garbage collector handle it?",shortAnswer:"When two or more objects reference each other (A -> B -> A), reference counts never hit 0; Python's generational cyclic garbage collector periodically detects and frees unreferenced reference cycles.",explanation:"The gc module implements the tri-color generational tracing algorithm.",hint:"Mutually referencing objects freed by generational cyclic GC.",level:"complex",codeExample:"# A.ref = B; B.ref = A -> Handled by gc.collect()"},{question:"How do multiple instances share methods without duplicating code in memory?",shortAnswer:"Methods are stored only ONCE in the Class's namespace (Class.__dict__); when invoked on an instance (obj.method()), Python binds the instance as the 'self' argument.",explanation:"Each instance only stores its own unique attribute data.",hint:"Methods live in Class.__dict__ and receive the instance via self.",level:"complex",codeExample:"# Car.drive is stored once; car1.drive() passes car1 as self"},{question:"What is the difference between a Function and a Bound Method in Python?",shortAnswer:"A function defined inside a class is an unbound function; when accessed through an instance, Python wraps it into a 'Bound Method' with the instance pre-bound to 'self'.",explanation:"type(MyClass.method) is function, but type(instance.method) is method.",hint:"Bound method has instance pre-bound as first argument.",level:"complex",codeExample:`print(type(Car.drive))      # <class 'function'>
print(type(my_car.drive))   # <class 'method'>`},{question:"What is the primary best practice for initializing instance state in Python classes?",shortAnswer:"Always define and initialize all expected instance attributes explicitly inside the __init__ constructor rather than adding them ad-hoc across different methods.",explanation:"Ensures that every instance starts in a predictable, consistent state and improves IDE autocompletion and static type checking.",hint:"Declare all attributes explicitly inside __init__.",level:"basic",codeExample:`class Account:
    def __init__(self, acc_no):
        self.acc_no = acc_no
        self.balance = 0.0`}];function z(){const o=r.useRef([]),[i,l]=r.useState("memory"),[m,x]=r.useState([{id:"0x7fa28c045b10",name:"Abhishek Karmakar",course:"Python Full-Stack",status:"ACTIVE"},{id:"0x7fa28c045b98",name:"Debolina Mukherjee",course:"Data Analytics",status:"ACTIVE"}]),[c,h]=r.useState(""),[f,p]=r.useState("Python Pro Full-Stack");r.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(a=>{a.isIntersecting&&a.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return o.current.forEach(n=>{n&&t.observe(n)}),()=>t.disconnect()},[]);const s=t=>{t&&!o.current.includes(t)&&o.current.push(t)},_=()=>{if(!c.trim())return;const n={id:"0x"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0")+"a0",name:c.trim(),course:f,status:"ACTIVE"};x(a=>[...a,n]),h("")},b=t=>{x(n=>n.filter(a=>a.id!==t))};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:s,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_001"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 1"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Object-Oriented Programming (OOP) in Python"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Classes, Instances & Objects: ",e.jsx("span",{className:"text-teal-400",children:"Syntax"})," & ",e.jsx("span",{className:"text-cyan-400",children:"Lifecycle"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master the mechanics of class declarations, living heap instances, memory identity (",e.jsx("code",{className:"text-teal-300 font-mono",children:"id()"})," and ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"is"}),"), the 4 stages of CPython's object lifecycle (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"__new__"})," $\\rightarrow$ ",e.jsx("code",{className:"text-teal-300 font-mono",children:"__init__"})," $\\rightarrow$ ",e.jsx("code",{className:"text-purple-300 font-mono",children:"__del__"}),"), and object namespaces (",e.jsx("code",{className:"text-amber-300 font-mono",children:"__dict__"}),")."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📐 Class Blueprint vs Living Instances"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"💾 Heap Memory Identity (id & is)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔄 4-Stage Lifecycle (__new__ / __init__ / __del__)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🗂️ Namespace Resolution (__dict__)"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏗️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. Class Blueprint vs Heap Memory Instances"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["In Python, a ",e.jsx("strong",{children:"Class"})," is an abstract blueprint written in code. An ",e.jsx("strong",{children:"Instance (Object)"})," is a concrete entity created in physical heap memory with its own unique memory address:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg shadow-teal-950/30",children:[e.jsx("div",{className:"text-teal-400 font-bold text-base mb-1",children:"1️⃣ Class Declaration"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"class Student: pass"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Stored once in memory containing shared class variables and methods."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg shadow-cyan-950/30",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-base mb-1",children:"2️⃣ Instantiation Callable"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"s1 = Student()"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Invokes ",e.jsx("code",{className:"text-cyan-300",children:"__new__"})," and ",e.jsx("code",{className:"text-cyan-300",children:"__init__"})," to allocate a new heap structure."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg shadow-purple-950/30",children:[e.jsx("div",{className:"text-purple-400 font-bold text-base mb-1",children:"3️⃣ Unique Memory ID"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"hex(id(s1)) → 0x7fa2..."}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Every instance gets its own isolated ",e.jsx("code",{className:"text-purple-300",children:"__dict__"})," attribute table."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"Value Equality (`==`) vs Memory Identity (`is`)"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["The ",e.jsx("code",{className:"text-teal-300 font-mono",children:"=="})," operator tests if two objects have equal data. The ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"is"})," operator tests if two variables reference the ",e.jsx("strong",{children:"exact same memory address"})," (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"id(a) == id(b)"}),")."]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Object Lifecycle & Memory Layout"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>l("memory"),className:d("px-3 py-1.5 rounded-lg transition-all",i==="memory"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Memory Layout & Identity"}),e.jsx("button",{onClick:()=>l("lifecycle"),className:d("px-3 py-1.5 rounded-lg transition-all",i==="lifecycle"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"4-Stage Lifecycle"}),e.jsx("button",{onClick:()=>l("lookup"),className:d("px-3 py-1.5 rounded-lg transition-all",i==="lookup"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Attribute Lookup Flow"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining memory heap pointers, object construction pipelines, and namespace dictionaries:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:i==="memory"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"HEAP MEMORY ADDRESSES & INSTANCE ISOLATION"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"240",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"13",fontWeight:"bold",children:"Class: Student"}),e.jsx("text",{x:"20",y:"55",fill:"#a7f3d0",fontSize:"10 font-mono",children:'institute = "Coder & AccoTax"'}),e.jsx("text",{x:"20",y:"85",fill:"#cbd5e1",fontSize:"10",children:"• Shared Class Scope"}),e.jsx("text",{x:"20",y:"105",fill:"#cbd5e1",fontSize:"10",children:"• Holds method code"}),e.jsx("rect",{x:"20",y:"180",width:"200",height:"40",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"205",fill:"#34d399",fontSize:"10 font-bold",children:"Single Instance in RAM"})]}),e.jsxs("g",{transform:"translate(280, 110)",children:[e.jsx("text",{x:"10",y:"0",fill:"#38bdf8",fontSize:"20",fontWeight:"bold",children:"→"}),e.jsx("text",{x:"10",y:"80",fill:"#38bdf8",fontSize:"20",fontWeight:"bold",children:"→"})]}),e.jsxs("g",{transform:"translate(330, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"490",height:"105",rx:"6",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"25",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"s1 (Address: 0x7fa28c045b10)"}),e.jsxs("text",{x:"20",y:"50",fill:"#cbd5e1",fontSize:"11 font-mono",children:["s1.__dict__ = ","{"," 'name': 'Abhishek', 'course': 'Full-Stack' ","}"]}),e.jsx("text",{x:"20",y:"75",fill:"#a7f3d0",fontSize:"10",children:"Points back to class via s1.__class__"}),e.jsx("rect",{x:"0",y:"130",width:"490",height:"105",rx:"6",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"20",y:"155",fill:"#a5f3fc",fontSize:"12",fontWeight:"bold",children:"s2 (Address: 0x7fa28c045b98)"}),e.jsxs("text",{x:"20",y:"180",fill:"#cbd5e1",fontSize:"11 font-mono",children:["s2.__dict__ = ","{"," 'name': 'Debolina', 'course': 'Data Analytics' ","}"]}),e.jsx("text",{x:"20",y:"205",fill:"#38bdf8",fontSize:"10",children:"s1 is s2 → FALSE (Distinct Memory Heaps)"})]})]}):i==="lifecycle"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"CPYTHON OBJECT LIFECYCLE: 4 STAGES"}),e.jsxs("g",{transform:"translate(30, 60)",children:[e.jsx("rect",{x:"0",y:"0",width:"180",height:"200",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"Stage 1: Allocation"}),e.jsx("text",{x:"15",y:"60",fill:"#f8fafc",fontSize:"11 font-mono",children:"__new__(cls)"}),e.jsx("text",{x:"15",y:"90",fill:"#cbd5e1",fontSize:"10",children:"• Allocates memory heap"}),e.jsx("text",{x:"15",y:"110",fill:"#cbd5e1",fontSize:"10",children:"• Returns raw instance"}),e.jsx("text",{x:"15",y:"140",fill:"#34d399",fontSize:"10 font-bold",children:"Static Constructor"}),e.jsx("rect",{x:"210",y:"0",width:"180",height:"200",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"225",y:"30",fill:"#a5f3fc",fontSize:"12",fontWeight:"bold",children:"Stage 2: Init"}),e.jsx("text",{x:"225",y:"60",fill:"#f8fafc",fontSize:"11 font-mono",children:"__init__(self)"}),e.jsx("text",{x:"225",y:"90",fill:"#cbd5e1",fontSize:"10",children:"• Sets initial state"}),e.jsx("text",{x:"225",y:"110",fill:"#cbd5e1",fontSize:"10",children:"• self.name = ..."}),e.jsx("text",{x:"225",y:"140",fill:"#38bdf8",fontSize:"10 font-bold",children:"State Initializer"}),e.jsx("rect",{x:"420",y:"0",width:"180",height:"200",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"435",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"Stage 3: Active"}),e.jsx("text",{x:"435",y:"60",fill:"#f8fafc",fontSize:"11 font-mono",children:"obj.method()"}),e.jsx("text",{x:"435",y:"90",fill:"#cbd5e1",fontSize:"10",children:"• Method calls"}),e.jsx("text",{x:"435",y:"110",fill:"#cbd5e1",fontSize:"10",children:"• Refcount tracked"}),e.jsx("text",{x:"435",y:"140",fill:"#c084fc",fontSize:"10 font-bold",children:"sys.getrefcount"}),e.jsx("rect",{x:"630",y:"0",width:"180",height:"200",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"645",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"Stage 4: Destroy"}),e.jsx("text",{x:"645",y:"60",fill:"#f8fafc",fontSize:"11 font-mono",children:"__del__(self)"}),e.jsx("text",{x:"645",y:"90",fill:"#fca5a5",fontSize:"10",children:"• Refcount hits 0"}),e.jsx("text",{x:"645",y:"110",fill:"#fca5a5",fontSize:"10",children:"• Destructor called"}),e.jsx("text",{x:"645",y:"140",fill:"#f43f5e",fontSize:"10 font-bold",children:"GC Frees Memory"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"ATTRIBUTE LOOKUP RESOLUTION ENGINE: obj.attr"}),e.jsxs("g",{transform:"translate(30, 60)",children:[e.jsx("rect",{x:"0",y:"0",width:"240",height:"120",rx:"6",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"25",fill:"#99f6e4",fontSize:"11 font-bold",children:"Step 1: Check obj.__dict__"}),e.jsx("text",{x:"15",y:"55",fill:"#ecfdf5",fontSize:"10 font-mono",children:"if 'attr' in obj.__dict__:"}),e.jsx("text",{x:"15",y:"75",fill:"#34d399",fontSize:"10 font-bold",children:"  return obj.__dict__['attr']"}),e.jsx("text",{x:"15",y:"100",fill:"#a7f3d0",fontSize:"9",children:"Instance attribute found!"})]}),e.jsxs("g",{transform:"translate(280, 110)",children:[e.jsx("text",{x:"5",y:"10",fill:"#38bdf8",fontSize:"16",fontWeight:"bold",children:"→"}),e.jsx("text",{x:"-5",y:"30",fill:"#94a3b8",fontSize:"9",children:"If Not Found"})]}),e.jsxs("g",{transform:"translate(320, 60)",children:[e.jsx("rect",{x:"0",y:"0",width:"240",height:"120",rx:"6",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"15",y:"25",fill:"#c4b5fd",fontSize:"11 font-bold",children:"Step 2: Check Class.__dict__"}),e.jsx("text",{x:"15",y:"55",fill:"#ecfdf5",fontSize:"10 font-mono",children:"if 'attr' in Class.__dict__:"}),e.jsx("text",{x:"15",y:"75",fill:"#c084fc",fontSize:"10 font-bold",children:"  return Class.__dict__['attr']"}),e.jsx("text",{x:"15",y:"100",fill:"#c4b5fd",fontSize:"9",children:"Shared class attribute / method"})]}),e.jsxs("g",{transform:"translate(570, 110)",children:[e.jsx("text",{x:"5",y:"10",fill:"#38bdf8",fontSize:"16",fontWeight:"bold",children:"→"}),e.jsx("text",{x:"-5",y:"30",fill:"#94a3b8",fontSize:"9",children:"If Not Found"})]}),e.jsxs("g",{transform:"translate(610, 60)",children:[e.jsx("rect",{x:"0",y:"0",width:"240",height:"120",rx:"6",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"15",y:"25",fill:"#fda4af",fontSize:"11 font-bold",children:"Step 3: Base Classes / Error"}),e.jsx("text",{x:"15",y:"55",fill:"#cbd5e1",fontSize:"10",children:"• Check Base Classes in MRO"}),e.jsx("text",{x:"15",y:"80",fill:"#fca5a5",fontSize:"10 font-bold",children:"• Else: raise AttributeError"}),e.jsx("text",{x:"15",y:"100",fill:"#fda4af",fontSize:"9",children:"'Student' object has no attribute"})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Object Instantiation & Memory Inspector"})]}),e.jsxs("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:["Instantiate new student objects dynamically to inspect their unique heap memory addresses and isolated ",e.jsx("code",{className:"text-teal-300 font-mono",children:"__dict__"})," state:"]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-bold",children:"Student Name"}),e.jsx("input",{type:"text",value:c,onChange:t=>h(t.target.value),placeholder:"e.g. Tanushree Das",className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-teal-300 font-mono text-sm"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-bold",children:"Course Track"}),e.jsxs("select",{value:f,onChange:t=>p(t.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-cyan-300 font-mono text-sm",children:[e.jsx("option",{value:"Python Pro Full-Stack",children:"Python Pro Full-Stack"}),e.jsx("option",{value:"Data Analytics with Python",children:"Data Analytics with Python"}),e.jsx("option",{value:"AI & Machine Learning",children:"AI & Machine Learning"})]})]}),e.jsx("div",{className:"flex items-end",children:e.jsx("button",{onClick:_,className:"w-full bg-teal-900/80 hover:bg-teal-800 text-teal-200 border border-teal-600 rounded-lg p-2.5 text-sm font-mono font-bold transition-all shadow-md shadow-teal-950",children:"+ Instantiate Object (s = Student())"})})]}),e.jsxs("div",{className:"space-y-3 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 block font-bold mb-2",children:["Living Objects in Memory Heap (",m.length," Active Instances)"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:m.map(t=>e.jsxs("div",{className:"p-4 bg-slate-900 rounded-lg border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-xs font-mono font-bold text-purple-300",children:["ID: ",t.id]}),e.jsx("button",{onClick:()=>b(t.id),className:"text-[11px] text-rose-400 hover:text-rose-300 font-mono",children:"del obj (__del__)"})]}),e.jsx("div",{className:"text-sm font-bold text-white",children:t.name}),e.jsx("div",{className:"text-xs text-slate-400",children:t.course}),e.jsxs("div",{className:"text-[11px] font-mono text-emerald-400 bg-slate-950 p-1.5 rounded border border-slate-800",children:["__dict__ = ","{"," 'name': '",t.name,"', 'course': '",t.course,"' ","}"]})]},t.id))})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Object Lifecycle & Introspection Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Hook / Function"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Role in Lifecycle"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Signature"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Best Practice"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"__new__"}),e.jsx("td",{className:"py-3 px-4",children:"Static constructor; allocates raw memory"}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300",children:"__new__(cls, *args)"}),e.jsx("td",{className:"py-3 px-4",children:"Override only for singletons or immutable subclasses"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-300 font-semibold",children:"__init__"}),e.jsx("td",{className:"py-3 px-4",children:"State initializer; configures attributes"}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300",children:"__init__(self, *args)"}),e.jsx("td",{className:"py-3 px-4",children:"Always declare all expected instance attributes here"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-rose-400 font-semibold",children:"__del__"}),e.jsx("td",{className:"py-3 px-4",children:"Destructor; called when refcount reaches 0"}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300",children:"__del__(self)"}),e.jsxs("td",{className:"py-3 px-4",children:["Use context managers (",e.jsx("code",{className:"text-rose-300",children:"with"}),") instead for guaranteed cleanup"]})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"isinstance()"}),e.jsx("td",{className:"py-3 px-4",children:"Checks if object belongs to class/subclass"}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300",children:"isinstance(obj, Class)"}),e.jsxs("td",{className:"py-3 px-4",children:["Preferred over ",e.jsx("code",{className:"text-purple-300",children:"type() is Class"})," for inheritance safety"]})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"id() / is"}),e.jsx("td",{className:"py-3 px-4",children:"Tests virtual heap memory identity"}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300",children:"id(obj) / a is b"}),e.jsxs("td",{className:"py-3 px-4",children:["Use to test singleton identity (e.g. ",e.jsx("code",{className:"text-amber-300",children:"x is None"}),")"]})]})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating class declarations, the 4-stage lifecycle, namespace tables, and physical asset fleet management:"}),e.jsx(u,{files:[{filename:"class_definition_and_instantiation.py",code:N,description:"Class definition syntax, multiple instance creation, id() memory addresses, and type verification."},{filename:"object_lifecycle_and_memory_model.py",code:w,description:"Complete object lifecycle walkthrough (__new__ allocation -> __init__ -> refcounting -> __del__ deallocation)."},{filename:"object_namespaces_and_dict.py",code:v,description:"Internal __dict__ attribute tables, instance vs class namespaces, and attribute resolution mechanics."},{filename:"vehicle_fleet_management_system.py",code:C,description:"Commercial logistics vehicle fleet tracker modeling instance lifecycle states (ACTIVE, IN_SERVICE)."}]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Accidentally Shadowing Class Variables"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"self.total_count += 1"})," inside a method creates a new attribute in ",e.jsx("code",{className:"text-rose-300 font-mono",children:"self.__dict__"})," instead of modifying the shared class variable!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Update class variables explicitly: ",e.jsx("code",{className:"text-emerald-300",children:"ClassName.total_count += 1"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Relying on `__del__` for Sockets/Files"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["In CPython, circular references can prevent ",e.jsx("code",{className:"text-amber-300 font-mono",children:"__del__"})," from firing until process termination, causing resource leaks."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always use context managers (",e.jsx("code",{className:"text-emerald-300",children:"with open(...)"}),") for deterministic cleanup."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Adding Ad-Hoc Attributes Outside `__init__`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Assigning new attributes in arbitrary helper methods leads to ",e.jsx("code",{className:"text-purple-300 font-mono",children:"AttributeError"})," bugs if methods are called out of order."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Declare and initialize all attributes inside ",e.jsx("code",{className:"text-emerald-300",children:"__init__"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Confusing `type() is Class` vs `isinstance()`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Checking ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"type(s) is Person"})," returns False if ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"s"})," is a Student (a subclass of Person), breaking polymorphism."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always use ",e.jsx("code",{className:"text-emerald-300",children:"isinstance(s, Person)"})," for type validation."]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering class declarations, object lifecycle stages, memory identification, and namespace resolution:"}),e.jsx(g,{questions:E})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with lifecycle diagrams, attribute resolution recipes, and introspection methods:"}),e.jsx("div",{className:"mb-10",children:e.jsx(y,{content:S,filename:"python_topic1_classes_instances_and_lifecycle_notes.txt",title:"Print Topic 1 Study Notes"})}),e.jsx(j,{})]})]})]})}export{z as default};
