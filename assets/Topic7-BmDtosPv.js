import{b as i,j as e,bg as c}from"./vendor-react-core-Doz9nIC6.js";import{P as g}from"./PythonFileLoader-hCi5osN-.js";import{P as _}from"./PlainTextPrint-C08xhKA4.js";import{F as v}from"./FAQTemplate-CkSqDH4B.js";import{T as j}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const N=`# topic7_files/property_decorator_fundamentals.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Properties & Getters/Setters with @property\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 7 - File 1: @property Decorator, Setters & Deleters Fundamentals\r
Demonstrates:\r
  1. Defining managed getter attributes via \`@property\`\r
  2. Defining validated setter mutators via \`@<attr>.setter\`\r
  3. Defining cleanup hooks via \`@<attr>.deleter\`\r
  4. The classic infinite recursion bug in setters (\`self.val = val\` vs \`self._val = val\`)\r
"""\r
\r
class StudentFeeRecord:\r
    """Demonstrates getter, setter, and deleter descriptors on course fees."""\r
\r
    def __init__(self, student_name: str, initial_fee: float):\r
        self.student_name = student_name\r
        # Use setter directly to ensure validation:\r
        self.fee = initial_fee\r
\r
    # =================================================================\r
    # 1. THE GETTER (@property)\r
    # =================================================================\r
    @property\r
    def fee(self) -> float:\r
        """Getter: returns the internal protected _fee attribute."""\r
        return self._fee\r
\r
    # =================================================================\r
    # 2. THE SETTER (@<property>.setter)\r
    # =================================================================\r
    @fee.setter\r
    def fee(self, value: float):\r
        """Setter: validates invariants before mutating self._fee."""\r
        if not isinstance(value, (int, float)):\r
            raise TypeError(f"Fee must be a numeric value, got {type(value).__name__}!")\r
        if value < 0:\r
            raise ValueError(f"Fee cannot be negative: INR {value}")\r
        if value > 100000.0:\r
            raise ValueError(f"Fee exceeds institutional maximum limit of INR 100,000.00!")\r
\r
        # CAUTION: Must assign to self._fee (NOT self.fee, which causes infinite recursion!)\r
        self._fee = float(value)\r
        print(f"  [SETTER] Updated fee for {self.student_name} -> INR {self._fee:,.2f}")\r
\r
    # =================================================================\r
    # 3. THE DELETER (@<property>.deleter)\r
    # =================================================================\r
    @fee.deleter\r
    def fee(self):\r
        """Deleter: clears fee record and marks as scholarship waiver."""\r
        print(f"  [DELETER] Fee attribute deleted for {self.student_name}; scholarship waiver applied.")\r
        del self._fee\r
\r
\r
def demonstrate_property_basics():\r
    print("=" * 70)\r
    print("1. THE @property GETTER & SETTER IN ACTION")\r
    print("=" * 70)\r
\r
    # 1. Instantiation (Triggers Setter)\r
    record = StudentFeeRecord("Debanjan Roy", 18000.0)\r
\r
    # 2. Reading via Getter (Syntactically looks like a plain attribute!)\r
    print(f"\\nReading fee via getter (record.fee): INR {record.fee:,.2f}")\r
\r
    # 3. Mutating via Setter\r
    print("\\nUpdating fee to INR 22,000.00 via setter:")\r
    record.fee = 22000.0\r
\r
    # 4. Invariant Validation Guard in Action\r
    print("\\nAttempting invalid assignment: \`record.fee = -5000.0\`:")\r
    try:\r
        record.fee = -5000.0\r
    except ValueError as err:\r
        print(f"  [BLOCKED] ValueError: {err}")\r
\r
    # 5. Deleter\r
    print("\\nExecuting: \`del record.fee\`:")\r
    del record.fee\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_property_basics()\r
`,w=`# topic7_files/computed_attributes_and_caching.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Properties & Getters/Setters with @property\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 7 - File 2: Computed Properties, Read-Only State & cached_property\r
Demonstrates:\r
  1. Dynamically computed attributes (e.g. \`full_name\`, \`net_payable\`)\r
  2. Creating Read-Only attributes by defining only a getter without a setter\r
  3. Performance optimization using \`functools.cached_property\`\r
"""\r
\r
import time\r
from functools import cached_property\r
from typing import List\r
\r
class StudentAcademicProfile:\r
    """Demonstrates computed dynamic properties and cached performance optimizations."""\r
\r
    def __init__(self, first_name: str, last_name: str, exam_scores: List[float]):\r
        self.first_name = first_name.strip()\r
        self.last_name = last_name.strip()\r
        self.exam_scores = list(exam_scores)\r
\r
    # =================================================================\r
    # 1. COMPUTED DYNAMIC PROPERTY (Read-Only)\r
    # =================================================================\r
    @property\r
    def full_name(self) -> str:\r
        """Computed on the fly; updates automatically if first_name changes!"""\r
        return f"{self.first_name} {self.last_name}"\r
\r
    @property\r
    def gpa(self) -> float:\r
        """Calculates current GPA dynamically."""\r
        if not self.exam_scores:\r
            return 0.0\r
        return sum(self.exam_scores) / len(self.exam_scores)\r
\r
    @property\r
    def is_honor_roll(self) -> bool:\r
        """Dynamic boolean property."""\r
        return self.gpa >= 90.0\r
\r
    # =================================================================\r
    # 2. CACHED PROPERTY (Computed once and stored on the instance)\r
    # =================================================================\r
    @cached_property\r
    def comprehensive_tax_audit_report(self) -> str:\r
        """Simulates an expensive statistical analytics computation."""\r
        print("  [HEAVY COMPUTATION RUNNING] Parsing large dataset and building report...")\r
        time.sleep(0.05)  # Simulated computation delay\r
        return f"AUDIT-PASSED: Comprehensive Student Score Variance = {sum(self.exam_scores) * 1.05:.2f}"\r
\r
\r
def demonstrate_computed_and_cached():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - COMPUTED PROPERTIES & CACHING")\r
    print("=" * 70)\r
\r
    student = StudentAcademicProfile("Sourav", "Mukherjee", [88.0, 94.5, 91.0, 89.5])\r
\r
    # 1. Computed Full Name\r
    print(f"1. Computed Full Name : '{student.full_name}'")\r
    print(f"   Computed GPA       : {student.gpa:.2f}")\r
    print(f"   Honor Roll Status  : {student.is_honor_roll}\\n")\r
\r
    # 2. Read-Only Protection\r
    print("2. Attempting to overwrite read-only property: \`student.full_name = 'New Name'\`:")\r
    try:\r
        student.full_name = "New Name"\r
    except AttributeError as err:\r
        print(f"   [PROTECTED] AttributeError: {err}\\n")\r
\r
    # 3. Cached Property Performance\r
    print("3. Accessing @cached_property (First Time - Executes Function):")\r
    rep1 = student.comprehensive_tax_audit_report\r
    print(f"   Result: {rep1}\\n")\r
\r
    print("4. Accessing @cached_property (Second Time - Served Instantly from RAM Cache):")\r
    rep2 = student.comprehensive_tax_audit_report\r
    print(f"   Result: {rep2}")\r
\r
    print("\\n[PASSED] Computed & Cached Properties Demonstrated Successfully.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_computed_and_cached()\r
`,E=`# topic7_files/refactoring_from_attributes_to_properties.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Properties & Getters/Setters with @property\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 7 - File 3: The Uniform Access Principle & Seamless Refactoring\r
Demonstrates:\r
  1. Starting simple: Standard public attributes in Python (Pythonic simplicity)\r
  2. Refactoring to \`@property\` with validation WITHOUT breaking any existing caller code\r
  3. Why Python does NOT require upfront boilerplate getters/setters like Java or C++\r
"""\r
\r
# =====================================================================\r
# V1: EARLY PROTOTYPE (Simple Public Attribute)\r
# =====================================================================\r
class BookOrderV1:\r
    def __init__(self, title: str, price: float):\r
        self.title = title\r
        self.price = price  # Plain public attribute\r
\r
\r
# =====================================================================\r
# V2: PRODUCTION REFACTOR (Seamlessly Converted to @property)\r
# =====================================================================\r
class BookOrderV2:\r
    def __init__(self, title: str, price: float):\r
        self.title = title\r
        self.price = price  # Seamlessly routes through setter below!\r
\r
    @property\r
    def price(self) -> float:\r
        return self._price\r
\r
    @price.setter\r
    def price(self, new_price: float):\r
        if new_price < 0:\r
            raise ValueError(f"Price cannot be negative: INR {new_price}")\r
        self._price = float(new_price)\r
\r
\r
def demonstrate_uniform_access():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - THE UNIFORM ACCESS PRINCIPLE")\r
    print("=" * 70)\r
\r
    # Client Code written for V1:\r
    v1 = BookOrderV1("Python Core", 450.0)\r
    v1.price = 500.0  # Plain attribute assignment\r
    print(f"V1 Order: {v1.title} -> INR {v1.price:,.2f}")\r
\r
    # The SAME exact client code executed on V2 (Zero Changes Needed!):\r
    v2 = BookOrderV2("Python Advanced", 650.0)\r
    v2.price = 700.0  # Routes through @price.setter automatically!\r
    print(f"V2 Order: {v2.title} -> INR {v2.price:,.2f}")\r
\r
    print(r"""\r
Takeaway:\r
  In Python, you NEVER need to write premature \`get_price()\` / \`set_price()\` methods!\r
  Start with plain attributes. If you ever need validation or computed logic later,\r
  refactor to \`@property\` without breaking a single line of external client code!\r
""")\r
    print("[PASSED] Uniform Access Principle Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_uniform_access()\r
`,T=`# topic7_files/smart_thermostat_and_energy_monitor.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Properties & Getters/Setters with @property\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 7 - File 4: Smart Server Room Thermostat & Energy Monitor (Case Study)\r
Demonstrates:\r
  1. Bi-directional property conversions: Celsius <-> Fahrenheit\r
  2. Range validation and thermal emergency protections\r
  3. Dynamic power consumption calculations and HVAC status indicators\r
"""\r
\r
class ServerRoomThermostat:\r
    """Enterprise HVAC & Server Room Climate Controller."""\r
    institute = "Coder & AccoTax Data Center (Barrackpore)"\r
    MIN_SAFE_CELSIUS = 10.0\r
    MAX_SAFE_CELSIUS = 35.0\r
\r
    def __init__(self, target_celsius: float = 22.0):\r
        self._operational_mode = "AUTO_ECO"\r
        # Trigger setter validation:\r
        self.celsius = target_celsius\r
\r
    # =================================================================\r
    # 1. CELSIUS PROPERTY (Internal Canonical Storage)\r
    # =================================================================\r
    @property\r
    def celsius(self) -> float:\r
        return self._celsius\r
\r
    @celsius.setter\r
    def celsius(self, value: float):\r
        if not (-50.0 <= value <= 100.0):\r
            raise ValueError(f"Temperature {value} C is outside physical hardware limits (-50 C to 100 C)!")\r
        self._celsius = float(value)\r
\r
    # =================================================================\r
    # 2. FAHRENHEIT PROPERTY (Bi-Directional Converter)\r
    # =================================================================\r
    @property\r
    def fahrenheit(self) -> float:\r
        """Dynamically converts internal Celsius to Fahrenheit."""\r
        return (self._celsius * 9 / 5) + 32\r
\r
    @fahrenheit.setter\r
    def fahrenheit(self, value: float):\r
        """Converts incoming Fahrenheit back to internal canonical Celsius."""\r
        converted_celsius = (value - 32) * 5 / 9\r
        self.celsius = converted_celsius  # Routes through celsius setter validation!\r
\r
    # =================================================================\r
    # 3. COMPUTED POWER CONSUMPTION PROPERTY\r
    # =================================================================\r
    @property\r
    def power_consumption_watts(self) -> float:\r
        """Computes HVAC cooling load based on deviation from ambient 25 C."""\r
        ambient_c = 25.0\r
        delta = abs(ambient_c - self._celsius)\r
        base_idle_power = 150.0  # Watts\r
        return base_idle_power + (delta * 85.0)\r
\r
    @property\r
    def is_thermal_hazard(self) -> bool:\r
        """Dynamic boolean property alerting if server room is too hot."""\r
        return self._celsius > self.MAX_SAFE_CELSIUS\r
\r
    def get_telemetry_report(self) -> str:\r
        status = "CRITICAL OVERHEAT ALERT" if self.is_thermal_hazard else "OPTIMAL RUNNING"\r
        return (\r
            f"======================================================================\\n"\r
            f"CODER & ACCOTAX - SERVER CLIMATE TELEMETRY\\n"\r
            f"Location    : {self.institute}\\n"\r
            f"Temperature : {self.celsius:.1f} C | {self.fahrenheit:.1f} F\\n"\r
            f"Power Load  : {self.power_consumption_watts:.1f} Watts\\n"\r
            f"Status      : {status}\\n"\r
            f"======================================================================"\r
        )\r
\r
\r
def run_thermostat_demo():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - SMART THERMOSTAT CASE STUDY")\r
    print("=" * 70)\r
\r
    t = ServerRoomThermostat(21.0)\r
    print(t.get_telemetry_report())\r
\r
    # 1. Mutate via Fahrenheit setter\r
    print("\\n1. Updating temperature to 77.0 F via Fahrenheit setter:")\r
    t.fahrenheit = 77.0\r
    print(f"   Internal Canonical Celsius: {t.celsius:.1f} C (Fahrenheit: {t.fahrenheit:.1f} F)\\n")\r
\r
    # 2. Overheat condition\r
    print("2. Simulating server load spike (38.0 C):")\r
    t.celsius = 38.0\r
    print(t.get_telemetry_report())\r
\r
    print("[PASSED] Smart Thermostat & Energy Telemetry Suite Completed.")\r
\r
\r
if __name__ == "__main__":\r
    run_thermostat_demo()\r
`,C=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_001: OBJECT-ORIENTED PYTHON\r
            TOPIC 7: PROPERTIES & GETTERS/SETTERS WITH @property\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. ANATOMY OF A PYTHON PROPERTY\r
--------------------------------------------------------------------------------\r
  class Product:\r
      def __init__(self, price: float):\r
          self.price = price  # Routes to setter\r
\r
      @property\r
      def price(self) -> float:\r
          return self._price  # Reads protected backing variable\r
\r
      @price.setter\r
      def price(self, val: float):\r
          if val < 0:\r
              raise ValueError("Price cannot be negative!")\r
          self._price = float(val)  # NEVER assign to self.price!\r
\r
      @price.deleter\r
      def price(self):\r
          del self._price\r
\r
--------------------------------------------------------------------------------\r
2. THE INFINITE RECURSION TRAP IN SETTERS\r
--------------------------------------------------------------------------------\r
  ❌ BUGGY (RecursionError: maximum recursion depth exceeded):\r
      @price.setter\r
      def price(self, val):\r
          self.price = val  # Re-calls the setter infinitely!\r
\r
  ✓ CORRECT:\r
      @price.setter\r
      def price(self, val):\r
          self._price = val  # Assigns to internal backing variable\r
\r
--------------------------------------------------------------------------------\r
3. THE UNIFORM ACCESS PRINCIPLE\r
--------------------------------------------------------------------------------\r
  Start with \`self.price = 100\`. If you need validation later, replace it\r
  with \`@property\` without altering any calling code (\`p.price = 200\`).\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 7: PROPERTIES & @property\r
================================================================================\r
`,S=[{question:"What is the purpose of the '@property' decorator in Python?",shortAnswer:"To turn a method into a managed read-only attribute getter that can be accessed with standard dot syntax (e.g. obj.price) without needing parentheses (obj.price()).",explanation:"Allows methods to behave syntactically like attributes while executing behind-the-scenes logic.",hint:"Turns a method into a getter accessed without parentheses.",level:"basic",codeExample:`class Circle:
    @property
    def area(self): return 3.14 * self.r ** 2`},{question:"How do you define a setter for a property in Python?",shortAnswer:"By decorating a method of the same name with '@<property_name>.setter' taking 'self' and the new value as parameters.",explanation:"The setter intercepts attribute assignment (obj.attr = val) to validate or transform the incoming value.",hint:"Use @property_name.setter above a method with the same name.",level:"basic",codeExample:`@price.setter
def price(self, value):
    if value < 0: raise ValueError
    self._price = value`},{question:"What causes the fatal 'RecursionError: maximum recursion depth exceeded' bug inside a property setter?",shortAnswer:"Assigning to the public property name (self.price = val) inside the setter instead of the internal protected backing variable (self._price = val), causing the setter to infinitely call itself.",explanation:"A classic Python OOP pitfall for beginners and intermediate developers.",hint:"Assigning to self.attr instead of self._attr re-triggers the setter infinitely.",level:"moderate",codeExample:`# BUG: @x.setter
#      def x(self, v): self.x = v  # RecursionError!
# FIX: self._x = v`},{question:"How do you create a Read-Only property in Python?",shortAnswer:"Simply define the '@property' getter method without defining any corresponding '@<attr>.setter' method.",explanation:"Any attempt by client code to assign to the property raises 'AttributeError: can't set attribute'.",hint:"Define only the @property getter without a setter.",level:"basic",codeExample:`@property
def read_only_id(self):
    return self._id`},{question:"What is the 'Uniform Access Principle' in Python?",shortAnswer:"The architectural principle that all services offered by a module or object should be accessible via a uniform notation (dot syntax), regardless of whether they are implemented through plain data storage or algorithmic computation.",explanation:"Allows developers to start with simple attributes and refactor to properties later without breaking callers.",hint:"Uniform dot syntax access regardless of storage vs computation.",level:"moderate",codeExample:"obj.price  # Works identically whether a plain variable or a @property"},{question:"Why does Python avoid Java/C++ style boilerplate getters and setters (get_name(), set_name()) by default?",shortAnswer:"Because Python's '@property' mechanism makes premature getters/setters obsolete; you can start with plain public attributes and add validation properties later without changing client code.",explanation:"Eliminates hundreds of lines of useless boilerplate code in domain models.",hint:"Avoids boilerplate because @property allows non-breaking refactoring later.",level:"basic",codeExample:`# Pythonic: self.name
# Unpythonic: def get_name(self): return self.name`},{question:"What is a 'Computed Property'?",shortAnswer:"A property calculated dynamically on the fly from other attributes whenever it is read (e.g., full_name, net_salary, is_expired).",explanation:"Always reflects the latest state without requiring manual synchronization methods.",hint:"A property calculated dynamically from other object attributes.",level:"basic",codeExample:`@property
def full_name(self):
    return f'{self.first} {self.last}'`},{question:"How do you define a deleter hook for a property in Python?",shortAnswer:"Using the '@<property_name>.deleter' decorator above a method of the same name.",explanation:"Executed automatically when 'del obj.property_name' is called.",hint:"Use @property_name.deleter.",level:"basic",codeExample:`@price.deleter
def price(self):
    del self._price`},{question:"What is 'functools.cached_property' and when should you use it?",shortAnswer:"A property decorator that computes its value once upon first access and stores the result in the instance's __dict__, serving all subsequent reads instantly from memory.",explanation:"Ideal for expensive I/O operations, complex math, or database aggregations that don't change frequently.",hint:"Computes once and caches the result on the instance.",level:"moderate",codeExample:`from functools import cached_property
@cached_property
def heavy_report(self): return compute()`},{question:"How do you invalidate / clear the cache of a 'cached_property' on an instance?",shortAnswer:"By deleting the attribute from the instance using 'del obj.cached_property_name'.",explanation:"The next read will re-execute the cached_property function and cache the fresh result.",hint:"Call del obj.cached_attr to invalidate the cache.",level:"moderate",codeExample:"del student.heavy_report  # Forces recalculation on next access"},{question:"Can properties be inherited and overridden in subclasses?",shortAnswer:"Yes. Subclasses can override property getters, setters, or extend them using super().",explanation:"Properties participate fully in Python's standard polymorphism and MRO.",hint:"Yes, properties can be inherited and overridden in subclasses.",level:"basic",codeExample:`class PremiumOrder(Order):
    @Order.price.setter
    def price(self, val): super(PremiumOrder, type(self)).price.fset(self, val)`},{question:"What is the underlying descriptor mechanism powering '@property'?",shortAnswer:"The 'property' class is a built-in Python descriptor implementing __get__, __set__, and __delete__ methods.",explanation:"When obj.attr is read, CPython calls property.__get__(self, obj, Class).",hint:"Built-in descriptor implementing __get__, __set__, and __delete__.",level:"complex",codeExample:"p = property(fget=get_x, fset=set_x, fdel=del_x)"},{question:"Can a property accept additional arguments beyond 'self' in the getter?",shortAnswer:"No. A property getter can only take 'self' because it is accessed like a plain attribute without function arguments.",explanation:"If you need parameters, use a regular method instead of a property.",hint:"No, getters only accept 'self'.",level:"basic",codeExample:"# Getters only accept self: def attr(self):"},{question:"What is a 'Bi-Directional Property' pattern?",shortAnswer:"Two properties (e.g. celsius and fahrenheit) where setting either one automatically converts and updates the internal canonical state, keeping both in sync.",explanation:"Common in unit conversion, financial currencies, and dimensional measurements.",hint:"Properties converting back and forth between two units of measurement.",level:"moderate",codeExample:"# fahrenheit setter converts to celsius and updates self.celsius"},{question:"What happens if a property setter raises an exception during assignment?",shortAnswer:"The exception halts execution, and the internal backing variable remains unchanged at its prior valid value.",explanation:"Guarantees transactional integrity and prevents corrupted states.",hint:"Execution is aborted and the internal state remains unchanged.",level:"basic",codeExample:`try: obj.age = -5
except ValueError: pass  # obj.age is still valid`},{question:"Can you define a property setter without defining the @property getter first?",shortAnswer:"No. The '@property' getter defines the base property object; attempting '@x.setter' before '@property def x' raises a NameError.",explanation:"The setter is an attribute method on the existing property instance.",hint:"No, @property getter must be defined first.",level:"basic",codeExample:"# Must define @property first before @attr.setter"},{question:"What is the difference between 'property()' function syntax and '@property' decorator syntax?",shortAnswer:"They are identical under the hood; 'attr = property(fget, fset, fdel)' is the legacy functional syntax, whereas '@property' is the modern decorator syntax.",explanation:"Decorator syntax is cleaner and standard in Python 3.",hint:"Decorator syntax is modern syntactic sugar for property(fget, fset).",level:"moderate",codeExample:"price = property(get_price, set_price)"},{question:"Why should property getters be fast and lightweight?",shortAnswer:"Because developers expect attribute access (obj.attr) to be instantaneous; slow network/database I/O in a getter causes hidden latency and unexpected performance bugs.",explanation:"Use explicit fetch_data() methods or @cached_property for expensive operations.",hint:"Attribute access is expected to be fast; avoid heavy I/O in getters.",level:"moderate",codeExample:"# Avoid heavy DB queries in property getters"},{question:"Can properties be used on classes with '__slots__'?",shortAnswer:"Yes. Properties work seamlessly with __slots__, and internal backing variables (_attr) can be declared in __slots__.",explanation:"Allows combining high memory optimization with validated property getters/setters.",hint:"Yes, properties are fully compatible with __slots__.",level:"complex",codeExample:`class Point:
    __slots__ = ('_x',)
    @property
    def x(self): return self._x`},{question:"How do you add a docstring to a property?",shortAnswer:"Write the docstring directly inside the '@property' getter method.",explanation:"The property descriptor automatically extracts the docstring from the getter for help() and IDE tooltips.",hint:"Write the docstring inside the @property getter function.",level:"basic",codeExample:`@property
def price(self):
    '''The gross course fee in INR.'''
    return self._price`},{question:"What happens when you inspect 'type(ClassName.property_name)' on the class itself?",shortAnswer:"It returns <class 'property'>, representing the property descriptor object.",explanation:"Demonstrates that properties live on the class and intercept instance access.",hint:"Returns <class 'property'> descriptor object.",level:"moderate",codeExample:"print(type(Student.fee))  # <class 'property'>"},{question:"Can a property setter transform the incoming value before saving (e.g. strip whitespace, uppercase)?",shortAnswer:"Yes. Sanitizing and normalizing incoming data (e.g., self._email = value.strip().lower()) is a major use case for setters.",explanation:"Guarantees clean, consistent data formatting.",hint:"Yes, normalizing/sanitizing data is a standard setter use case.",level:"basic",codeExample:`@name.setter
def name(self, val): self._name = val.strip().title()`},{question:"How do dataclasses in Python 3.7+ interact with properties?",shortAnswer:"Dataclasses generate __init__ assignments that route through property setters automatically if fields are configured with property descriptors.",explanation:"Provides instant validation during dataclass instantiation.",hint:"Dataclass __init__ routes assignments through property setters.",level:"moderate",codeExample:`@dataclass
class Product: price: float`},{question:"What is the danger of returning mutable objects from a property getter?",shortAnswer:"External code can mutate the returned list/dict directly (e.g. obj.items.append(x)), bypassing any validation logic in the setter.",explanation:"Best practice: return a copy (return list(self._items)) or an immutable tuple.",hint:"Callers can mutate internal collections; return defensive copies or tuples.",level:"moderate",codeExample:`@property
def tags(self): return tuple(self._tags)`},{question:"What is the golden rule for using Properties in Python architecture?",shortAnswer:"Use plain public attributes for simple data, refactor to @property only when validation, transformation, or computed state is required, and keep getters fast and side-effect free.",explanation:"Embraces Pythonic simplicity and the Uniform Access Principle.",hint:"Plain attributes first; refactor to @property when validation is needed.",level:"basic",codeExample:"# Start simple, refactor to @property seamlessly when needed"}];function z(){const d=i.useRef([]),[o,p]=i.useState("uniform"),[a,h]=i.useState(22),[x,l]=i.useState("");i.useEffect(()=>{const t=new IntersectionObserver(r=>{r.forEach(n=>{n.isIntersecting&&n.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return d.current.forEach(r=>{r&&t.observe(r)}),()=>t.disconnect()},[]);const s=t=>{t&&!d.current.includes(t)&&d.current.push(t)},f=a*9/5+32,u=150+Math.abs(25-a)*85,m=a>35,b=t=>{const r=parseFloat(t);if(!isNaN(r)){if(r<-50||r>100){l(`ValueError: ${r}°C is outside physical limits (-50°C to 100°C)!`);return}l(""),h(r)}},y=t=>{const r=parseFloat(t);if(isNaN(r))return;const n=(r-32)*5/9;if(n<-50||n>100){l(`ValueError: ${r}°F converts to ${n.toFixed(1)}°C, which is out of range!`);return}l(""),h(n)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:s,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_001"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 7"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Object-Oriented Programming (OOP) in Python"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Properties & Getters/Setters with ",e.jsx("code",{className:"text-teal-400 font-mono",children:"@property"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master Pythonic attribute encapsulation: replacing Java boilerplate with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"@property"}),", validated mutators with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"@setter"}),", the Uniform Access Principle, avoiding the fatal infinite recursion trap, and optimizing performance with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"@cached_property"}),"."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🎯 The @property Getter & Setter Pipeline"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔄 The Uniform Access Principle"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚠️ Infinite Recursion Setter Guard"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ functools.cached_property Optimization"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💎"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Pythonic Way: Replacing Java Boilerplate with Properties"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["In languages like Java or C++, developers are forced to write verbose ",e.jsx("code",{className:"text-slate-400 font-mono",children:"get_price()"})," and ",e.jsx("code",{className:"text-slate-400 font-mono",children:"set_price()"})," methods upfront just in case validation is needed later. Python solves this elegantly with ",e.jsx("strong",{children:"Properties"})," and the ",e.jsx("strong",{children:"Uniform Access Principle"}),":"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-base mb-1",children:"1️⃣ The Getter (@property)"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"@property def price(self):"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Turns a method into a managed attribute accessed with dot syntax (",e.jsx("code",{className:"text-teal-300",children:"obj.price"}),")."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-base mb-1",children:"2️⃣ The Setter (@setter)"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"@price.setter def price(self, v):"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Intercepts assignment (",e.jsx("code",{className:"text-cyan-300",children:"obj.price = 500"}),") to enforce validation and type checks."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-base mb-1",children:"3️⃣ The Deleter (@deleter)"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"@price.deleter def price(self):"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Intercepts attribute deletion (",e.jsx("code",{className:"text-purple-300",children:"del obj.price"}),") for state cleanup."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-rose-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Fatal Setter Recursion Trap"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Inside ",e.jsx("code",{className:"text-rose-400 font-mono",children:"@price.setter"}),", you must assign to the protected backing variable ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"self._price = val"}),". Assigning to ",e.jsx("code",{className:"text-rose-400 font-mono",children:"self.price = val"})," recursively calls the setter until Python crashes with a ",e.jsx("code",{className:"text-rose-400",children:"RecursionError"}),"!"]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Property Descriptors & Refactoring"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>p("uniform"),className:c("px-3 py-1.5 rounded-lg transition-all",o==="uniform"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Uniform Access Principle"}),e.jsx("button",{onClick:()=>p("descriptor"),className:c("px-3 py-1.5 rounded-lg transition-all",o==="descriptor"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"@property Descriptor Pipeline"}),e.jsx("button",{onClick:()=>p("cached"),className:c("px-3 py-1.5 rounded-lg transition-all",o==="cached"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"@cached_property Engine"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining syntax bridges, descriptor interception, and memoized property caches:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:o==="uniform"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"THE UNIFORM ACCESS PRINCIPLE: NON-BREAKING REFACTORING"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"V1: Simple Attribute Prototype"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"10 font-mono",children:"class Product:"}),e.jsx("text",{x:"40",y:"85",fill:"#ecfdf5",fontSize:"10 font-mono",children:"def __init__(self, price):"}),e.jsx("text",{x:"60",y:"110",fill:"#34d399",fontSize:"10 font-mono font-bold",children:"self.price = price"}),e.jsx("rect",{x:"20",y:"145",width:"340",height:"70",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"170",fill:"#a7f3d0",fontSize:"10 font-bold",children:"Client Call:"}),e.jsx("text",{x:"30",y:"195",fill:"#ecfdf5",fontSize:"10 font-mono",children:"p.price = 500  # Direct RAM write"})]}),e.jsxs("g",{transform:"translate(460, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"20",y:"30",fill:"#a5f3fc",fontSize:"12",fontWeight:"bold",children:"V2: Production Refactored to @property"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"10 font-mono",children:"@property"}),e.jsx("text",{x:"20",y:"80",fill:"#ecfdf5",fontSize:"10 font-mono",children:"def price(self): return self._price"}),e.jsx("text",{x:"20",y:"105",fill:"#ecfdf5",fontSize:"10 font-mono",children:"@price.setter"}),e.jsx("text",{x:"20",y:"125",fill:"#38bdf8",fontSize:"10 font-mono",children:"def price(self, v): validate(v)..."}),e.jsx("rect",{x:"20",y:"145",width:"340",height:"70",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"30",y:"170",fill:"#38bdf8",fontSize:"10 font-bold",children:"SAME Client Call (Zero Changes!):"}),e.jsx("text",{x:"30",y:"195",fill:"#34d399",fontSize:"10 font-mono",children:"p.price = 500  # Automatically calls setter!"})]})]}):o==="descriptor"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"HOW @property DESCRIPTORS INTERCEPT ATTRIBUTE ACCESS"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"360",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"Developer Action"}),e.jsx("rect",{x:"20",y:"60",width:"320",height:"45",rx:"4",fill:"#090d16",stroke:"#475569"}),e.jsx("text",{x:"30",y:"88",fill:"#a7f3d0",fontSize:"11 font-mono",children:"1. Read: x = obj.fee"}),e.jsx("rect",{x:"20",y:"120",width:"320",height:"45",rx:"4",fill:"#090d16",stroke:"#475569"}),e.jsx("text",{x:"30",y:"148",fill:"#38bdf8",fontSize:"11 font-mono",children:"2. Write: obj.fee = 20000"}),e.jsx("rect",{x:"20",y:"180",width:"320",height:"45",rx:"4",fill:"#090d16",stroke:"#475569"}),e.jsx("text",{x:"30",y:"208",fill:"#fda4af",fontSize:"11 font-mono",children:"3. Delete: del obj.fee"})]}),e.jsxs("g",{transform:"translate(450, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"400",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"CPython Property Descriptor Hooks"}),e.jsx("rect",{x:"20",y:"60",width:"360",height:"45",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"88",fill:"#ecfdf5",fontSize:"10 font-mono",children:"→ Calls property.__get__ → @property getter"}),e.jsx("rect",{x:"20",y:"120",width:"360",height:"45",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"148",fill:"#ecfdf5",fontSize:"10 font-mono",children:"→ Calls property.__set__ → @fee.setter"}),e.jsx("rect",{x:"20",y:"180",width:"360",height:"45",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"208",fill:"#ecfdf5",fontSize:"10 font-mono",children:"→ Calls property.__delete__ → @fee.deleter"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"functools.cached_property PERFORMANCE OPTIMIZATION"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"First Access: obj.heavy_report"}),e.jsx("text",{x:"20",y:"65",fill:"#fca5a5",fontSize:"10 font-mono",children:"• Executes calculation function"}),e.jsx("text",{x:"20",y:"90",fill:"#fca5a5",fontSize:"10 font-mono",children:"• Parses large dataset / heavy I/O"}),e.jsx("rect",{x:"20",y:"125",width:"340",height:"90",rx:"4",fill:"#881337",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"150",fill:"#ffe4e6",fontSize:"10 font-bold",children:"Caching Step:"}),e.jsx("text",{x:"30",y:"170",fill:"#ffe4e6",fontSize:"9 font-mono",children:"Writes result into obj.__dict__['heavy_report']"}),e.jsx("text",{x:"30",y:"195",fill:"#ffe4e6",fontSize:"9 font-mono",children:"Replaces descriptor lookup with direct dictionary read!"})]}),e.jsxs("g",{transform:"translate(460, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"Subsequent Accesses: obj.heavy_report"}),e.jsx("text",{x:"20",y:"65",fill:"#34d399",fontSize:"11 font-bold",children:"⚡ Zero Computation Delay!"}),e.jsx("text",{x:"20",y:"95",fill:"#cbd5e1",fontSize:"10 font-mono",children:"• Served directly from instance __dict__"}),e.jsx("rect",{x:"20",y:"135",width:"340",height:"80",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"160",fill:"#a7f3d0",fontSize:"10 font-bold",children:"Cache Invalidation:"}),e.jsx("text",{x:"30",y:"185",fill:"#ecfdf5",fontSize:"9 font-mono",children:"del obj.heavy_report (Triggers recalculation on next read)"})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Smart Thermostat & Bi-Directional Property Playground"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Adjust temperature via either property slider to witness bi-directional conversion and validated setter guards in real time:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 block font-bold",children:"Bi-Directional Property Controls"}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[e.jsx("span",{className:"text-slate-400",children:"@celsius.setter:"}),e.jsxs("span",{className:"text-teal-300 font-bold",children:[a.toFixed(1)," °C"]})]}),e.jsx("input",{type:"range",min:"-20",max:"60",step:"0.5",value:a,onChange:t=>b(t.target.value),className:"w-full accent-teal-500"})]}),e.jsxs("div",{className:"space-y-1 pt-2",children:[e.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[e.jsx("span",{className:"text-slate-400",children:"@fahrenheit.setter:"}),e.jsxs("span",{className:"text-cyan-300 font-bold",children:[f.toFixed(1)," °F"]})]}),e.jsx("input",{type:"range",min:"-4",max:"140",step:"1",value:f,onChange:t=>y(t.target.value),className:"w-full accent-cyan-500"})]}),x&&e.jsx("div",{className:"p-3 bg-rose-950/60 border border-rose-800 rounded-lg text-xs font-mono text-rose-300",children:x})]}),e.jsxs("div",{className:"space-y-3 flex flex-col justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block font-bold",children:"Computed Properties & Telemetry"}),e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2.5 text-xs font-mono flex-1",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Canonical Storage (_celsius):"}),e.jsxs("span",{className:"text-teal-300 font-bold",children:[a.toFixed(2)," °C"]})]}),e.jsxs("div",{className:"flex items-center justify-between pt-1 border-t border-slate-800",children:[e.jsx("span",{className:"text-slate-400",children:"Computed Fahrenheit:"}),e.jsxs("span",{className:"text-cyan-300 font-bold",children:[f.toFixed(2)," °F"]})]}),e.jsxs("div",{className:"flex items-center justify-between pt-1 border-t border-slate-800",children:[e.jsx("span",{className:"text-slate-400",children:"HVAC Power Load:"}),e.jsxs("span",{className:"text-purple-300 font-bold",children:[u.toFixed(1)," Watts"]})]}),e.jsxs("div",{className:"flex items-center justify-between pt-1 border-t border-slate-800",children:[e.jsx("span",{className:"text-slate-400",children:"Thermal Hazard Status:"}),e.jsx("span",{className:c("font-bold px-2 py-0.5 rounded",m?"bg-rose-950 text-rose-300 border border-rose-700":"bg-emerald-950 text-emerald-300 border border-emerald-700"),children:m?"⚠️ CRITICAL OVERHEAT":"✓ OPTIMAL TEMPERATURE"})]})]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Properties & Decorators Reference Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Decorator"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Signature"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Triggered By"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Primary Architectural Purpose"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"@property"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"def attr(self):"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400",children:"val = obj.attr"}),e.jsx("td",{className:"py-3 px-4",children:"Managed getter, computed state, read-only protection"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"@attr.setter"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"def attr(self, val):"}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300",children:"obj.attr = val"}),e.jsx("td",{className:"py-3 px-4",children:"Validated mutator, data normalization, invariant guards"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"@attr.deleter"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"def attr(self):"}),e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300",children:"del obj.attr"}),e.jsx("td",{className:"py-3 px-4",children:"Attribute deletion interceptor, state cleanup hooks"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"@cached_property"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"def attr(self):"}),e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300",children:"val = obj.attr"}),e.jsx("td",{className:"py-3 px-4",children:"Memoizes expensive calculations on the instance dictionary"})]})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating property getters, setters, deleters, computed caching, and smart thermostats:"}),e.jsx(g,{files:[{filename:"property_decorator_fundamentals.py",code:N,description:"The @property getter, setter, and deleter descriptors with input validation and recursion protection."},{filename:"computed_attributes_and_caching.py",code:w,description:"Dynamically computed properties, read-only attributes, and functools.cached_property performance optimization."},{filename:"refactoring_from_attributes_to_properties.py",code:E,description:"The Uniform Access Principle: non-breaking refactoring from plain attributes to validated @property setters."},{filename:"smart_thermostat_and_energy_monitor.py",code:T,description:"Enterprise Server Room Smart Thermostat with bi-directional Celsius/Fahrenheit properties and power metrics."}]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: The Setter Infinite Recursion Bug"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Assigning to ",e.jsx("code",{className:"text-rose-300 font-mono",children:"self.price = val"})," inside ",e.jsx("code",{className:"text-rose-300 font-mono",children:"@price.setter"})," re-invokes the setter continuously until Python crashes with a ",e.jsx("code",{className:"text-rose-300 font-mono",children:"RecursionError"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Assign to internal backing variable ",e.jsx("code",{className:"text-emerald-300",children:"self._price = val"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Heavy I/O in Property Getters"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Developers expect ",e.jsx("code",{className:"text-amber-300 font-mono",children:"obj.attr"})," to be instantaneous. Executing network requests or database queries in a getter introduces hidden latency."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use explicit ",e.jsx("code",{className:"text-emerald-300",children:"fetch_report()"})," methods or ",e.jsx("code",{className:"text-emerald-300",children:"@cached_property"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Returning Mutable Lists from Getters"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Returning ",e.jsx("code",{className:"text-purple-300 font-mono",children:"return self._items"})," allows callers to append items directly without triggering any setter validation."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Return defensive copies: ",e.jsx("code",{className:"text-emerald-300",children:"return list(self._items)"})," or tuples."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Stale @cached_property Caches"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["If underlying state changes, a ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"@cached_property"})," continues to return the old cached value until invalidated."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Invalidate manually via ",e.jsx("code",{className:"text-emerald-300",children:"del obj.cached_attr"})," when modifying data."]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering properties, getters, setters, deleters, cached properties, and the Uniform Access Principle:"}),e.jsx(v,{questions:S})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with property descriptors, setter validation recipes, and thermostat patterns:"}),e.jsx("div",{className:"mb-10",children:e.jsx(_,{content:C,filename:"python_topic7_properties_and_getters_setters_notes.txt",title:"Print Topic 7 Study Notes"})}),e.jsx(j,{})]})]})]})}export{z as default};
