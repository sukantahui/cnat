import{b as s,j as e,bg as m}from"./vendor-react-core-Doz9nIC6.js";import{P as N}from"./PythonFileLoader-hCi5osN-.js";import{P as j}from"./PlainTextPrint-C08xhKA4.js";import{F as w}from"./FAQTemplate-CkSqDH4B.js";import{T as E}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const S=`# topic9_files/method_overriding_and_super_fundamentals.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Method Overriding & super() function\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 9 - File 1: Method Overriding & super() Fundamentals\r
Demonstrates:\r
  1. Method Overriding: Redefining a parent method in a child subclass\r
  2. Extending Parent Behavior: Calling \`super().method_name()\` to augment existing logic\r
  3. Total Replacement: Overriding a method completely without delegating to \`super()\`\r
  4. Modern zero-argument \`super()\` in Python 3 vs legacy \`super(Child, self)\`\r
"""\r
\r
class BaseStudentReport:\r
    """Base parent report generator."""\r
\r
    def __init__(self, student_name: str, total_marks: float):\r
        self.student_name = student_name\r
        self.total_marks = float(total_marks)\r
\r
    def generate_report(self) -> str:\r
        """Base report logic."""\r
        return (\r
            f"--- ACADEMIC PERFORMANCE REPORT ---\\n"\r
            f"Student: {self.student_name}\\n"\r
            f"Total Marks: {self.total_marks:.1f} / 500"\r
        )\r
\r
\r
class HonorsStudentReport(BaseStudentReport):\r
    """Subclass EXTENDING parent report logic via super()."""\r
\r
    def __init__(self, student_name: str, total_marks: float, thesis_title: str):\r
        # 1. Constructor Chaining via zero-argument super()\r
        super().__init__(student_name, total_marks)\r
        self.thesis_title = thesis_title\r
\r
    def generate_report(self) -> str:\r
        # 2. Method Overriding: Extend base report with honors-specific data\r
        base_content = super().generate_report()\r
        return (\r
            f"{base_content}\\n"\r
            f"Degree Track: Honors with Distinction\\n"\r
            f"Senior Thesis: '{self.thesis_title}'"\r
        )\r
\r
\r
class ExpelledStudentReport(BaseStudentReport):\r
    """Subclass COMPLETELY REPLACING parent report logic (No super call)."""\r
\r
    def generate_report(self) -> str:\r
        # 3. Total Replacement: completely ignores BaseStudentReport.generate_report\r
        return (\r
            f"--- DISCIPLINARY NOTICE ---\\n"\r
            f"Student: {self.student_name}\\n"\r
            f"Status: ENROLLMENT TERMINATED (Expelled due to misconduct)"\r
        )\r
\r
\r
def demonstrate_overriding_and_super():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - METHOD OVERRIDING & super() FUNDAMENTALS")\r
    print("=" * 70)\r
\r
    # 1. Base Class Report\r
    base = BaseStudentReport("Souvik Ghosh", 380.0)\r
    print("1. Base Class Report:")\r
    print(base.generate_report())\r
    print("-" * 50)\r
\r
    # 2. Extended Subclass Report (via super())\r
    honors = HonorsStudentReport("Priyanka Sen", 485.0, "Distributed Microservices in Python")\r
    print("\\n2. Subclass Extending Parent via super().generate_report():")\r
    print(honors.generate_report())\r
    print("-" * 50)\r
\r
    # 3. Completely Replaced Subclass Report\r
    expelled = ExpelledStudentReport("Rahul Verma", 150.0)\r
    print("\\n3. Subclass Completely Overriding Parent (Zero super delegation):")\r
    print(expelled.generate_report())\r
\r
    print("\\n[PASSED] Method Overriding & super() Demonstrated Successfully.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_overriding_and_super()\r
`,R=`# topic9_files/cooperative_multiple_inheritance_and_super.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Method Overriding & super() function\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 9 - File 2: Cooperative Multiple Inheritance & Diamond Problem Resolution\r
Demonstrates:\r
  1. The True Meaning of \`super()\`: Delegates to the NEXT class in the MRO list\r
  2. Cooperative Multiple Inheritance in Diamond Hierarchies (A -> B, C -> D)\r
  3. Why cooperative \`super()\` guarantees every ancestor is visited exactly ONCE!\r
"""\r
\r
class BaseHandler:\r
    """Root Handler (Top of the Diamond)."""\r
    def process_request(self, payload: dict):\r
        print("  [BASE HANDLER] Reached root processor: Storing payload in database.")\r
        payload["processed_by_base"] = True\r
\r
\r
class AuthenticationHandler(BaseHandler):\r
    """Left branch of Diamond."""\r
    def process_request(self, payload: dict):\r
        print("  [AUTH HANDLER] Step 1: Validating user authorization token...")\r
        payload["authenticated"] = True\r
        # super() calls the NEXT class in MRO (which will be EncryptionHandler in Child D!)\r
        super().process_request(payload)\r
\r
\r
class EncryptionHandler(BaseHandler):\r
    """Right branch of Diamond."""\r
    def process_request(self, payload: dict):\r
        print("  [ENCRYPTION HANDLER] Step 2: Encrypting sensitive payload fields...")\r
        payload["encrypted"] = True\r
        super().process_request(payload)\r
\r
\r
class SecureApiGateway(AuthenticationHandler, EncryptionHandler):\r
    """Bottom of the Diamond (Multiple Inheritance: B, C)."""\r
    def process_request(self, payload: dict):\r
        print("  [API GATEWAY] Starting full cooperative security pipeline:")\r
        super().process_request(payload)\r
        print("  [API GATEWAY] Pipeline execution completed successfully!")\r
\r
\r
def demonstrate_cooperative_super():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - COOPERATIVE super() IN DIAMOND HIERARCHY")\r
    print("=" * 70)\r
\r
    # 1. Print MRO Linearization\r
    print("Method Resolution Order (MRO) for SecureApiGateway:")\r
    for idx, cls in enumerate(SecureApiGateway.__mro__):\r
        print(f"  [{idx}] {cls.__name__}")\r
\r
    print(r"""\r
Notice the MRO Chain:\r
  SecureApiGateway -> AuthenticationHandler -> EncryptionHandler -> BaseHandler -> object\r
""")\r
\r
    # 2. Execute Request through Pipeline\r
    gateway = SecureApiGateway()\r
    data_packet = {"account": "ACC-2026", "action": "FEE_TRANSFER"}\r
\r
    print("Executing \`gateway.process_request(data_packet)\`:")\r
    gateway.process_request(data_packet)\r
\r
    print("\\nResulting Transformed Packet:")\r
    print(f"  {data_packet}")\r
\r
    print(r"""\r
Insight:\r
  In \`AuthenticationHandler\`, \`super().process_request()\` did NOT jump to \`BaseHandler\`.\r
  Instead, it cooperatively passed execution to \`EncryptionHandler\` because it was\r
  next in the MRO chain! Every class in the diamond was called exactly ONCE.\r
""")\r
    print("[PASSED] Cooperative Multiple Inheritance Demonstrated Successfully.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_cooperative_super()\r
`,C=`# topic9_files/super_constructor_chaining_and_kwargs.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Method Overriding & super() function\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 9 - File 3: super().__init__() Constructor Chaining with **kwargs\r
Demonstrates:\r
  1. Forwarding arbitrary keyword arguments (\`**kwargs\`) up the constructor chain\r
  2. Mixins extracting their own parameters and forwarding remainder to next MRO class\r
  3. Ensuring root \`object.__init__\` receives 0 extra arguments cleanly\r
"""\r
\r
from typing import Optional\r
\r
class RootEntity:\r
    """Base class at root of hierarchy; consumes no kwargs before object."""\r
    def __init__(self, **kwargs):\r
        # Forward any leftover kwargs to object.__init__ (which expects 0 arguments)\r
        super().__init__()\r
        print("  [ROOT INITIALIZED] Reached RootEntity base.")\r
\r
\r
class CourseInfoMixin(RootEntity):\r
    """Mixin extracting course title and fee."""\r
    def __init__(self, course_title: str = "Standard Course", fee: float = 10000.0, **kwargs):\r
        super().__init__(**kwargs)  # Pass remainder forward\r
        self.course_title = course_title\r
        self.fee = float(fee)\r
        print(f"  [COURSE MIXIN INITIALIZED] Title: '{self.course_title}', Fee: INR {self.fee:,.2f}")\r
\r
\r
class DiscountAllowanceMixin(RootEntity):\r
    """Mixin extracting scholarship vouchers."""\r
    def __init__(self, discount_inr: float = 0.0, coupon_code: Optional[str] = None, **kwargs):\r
        super().__init__(**kwargs)  # Pass remainder forward\r
        self.discount_inr = float(discount_inr)\r
        self.coupon_code = coupon_code\r
        print(f"  [DISCOUNT MIXIN INITIALIZED] Discount: -INR {self.discount_inr:,.2f} (Coupon: {self.coupon_code})")\r
\r
\r
class EnrolledStudentContract(CourseInfoMixin, DiscountAllowanceMixin):\r
    """Composite Child Class inheriting both mixins with cooperative **kwargs."""\r
    def __init__(self, student_name: str, **kwargs):\r
        # Call cooperative chain passing all keyword arguments:\r
        super().__init__(**kwargs)\r
        self.student_name = student_name\r
        self.net_payable = max(0.0, self.fee - self.discount_inr)\r
        print(f"  [STUDENT CONTRACT READY] {self.student_name} | Net Payable: INR {self.net_payable:,.2f}")\r
\r
\r
def demonstrate_kwargs_chaining():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - CONSTRUCTOR CHAINING WITH **kwargs")\r
    print("=" * 70)\r
\r
    # Instantiate composite child passing dictionary of heterogeneous arguments:\r
    print("Instantiating EnrolledStudentContract with keyword payload:")\r
    student = EnrolledStudentContract(\r
        student_name="Debolina Mukherjee",\r
        course_title="Python Pro Full-Stack & Machine Learning",\r
        fee=20000.0,\r
        discount_inr=3000.0,\r
        coupon_code="SUPER2026"\r
    )\r
\r
    print("\\nSummary State of Constructed Object:")\r
    print(f"  * Student Name : {student.student_name}")\r
    print(f"  * Course Title : {student.course_title}")\r
    print(f"  * Gross Fee    : INR {student.fee:,.2f}")\r
    print(f"  * Discount     : -INR {student.discount_inr:,.2f}")\r
    print(f"  * Net Payable  : INR {student.net_payable:,.2f}")\r
\r
    print("\\n[PASSED] Keyword-Forwarding Constructor Chaining Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_kwargs_chaining()\r
`,T=`# topic9_files/banking_transaction_processor_and_discount_engine.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Method Overriding & super() function\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 9 - File 4: Layered Transaction Processing & Concession Pipeline (Case Study)\r
Demonstrates:\r
  1. Multilevel method overriding: Base -> Scholarship -> EarlyBird -> Festive\r
  2. Each layer modifying and extending computations returned by \`super()\`\r
  3. Dynamic audit trace generation of applied discount tiers\r
"""\r
\r
from typing import List, Dict, Any\r
\r
class BaseTuitionProcessor:\r
    """Root fee calculator: Gross Tuition + 18% GST."""\r
    def __init__(self, student_name: str, base_tuition: float):\r
        self.student_name = student_name\r
        self.base_tuition = float(base_tuition)\r
\r
    def calculate_payable(self, audit_trail: List[str]) -> float:\r
        gst = self.base_tuition * 0.18\r
        gross = self.base_tuition + gst\r
        audit_trail.append(f"1. Base Tuition: INR {self.base_tuition:,.2f} + GST (18%): INR {gst:,.2f} -> INR {gross:,.2f}")\r
        return gross\r
\r
\r
class ScholarshipDiscountProcessor(BaseTuitionProcessor):\r
    """Layer 2: Subtracts Merit Scholarship from base payable."""\r
    def __init__(self, student_name: str, base_tuition: float, scholarship_inr: float):\r
        super().__init__(student_name, base_tuition)\r
        self.scholarship_inr = float(scholarship_inr)\r
\r
    def calculate_payable(self, audit_trail: List[str]) -> float:\r
        # Get amount from parent layer:\r
        amount_before = super().calculate_payable(audit_trail)\r
        net = max(0.0, amount_before - self.scholarship_inr)\r
        audit_trail.append(f"2. Merit Scholarship Applied: -INR {self.scholarship_inr:,.2f} -> Subtotal: INR {net:,.2f}")\r
        return net\r
\r
\r
class EarlyBirdConcessionProcessor(ScholarshipDiscountProcessor):\r
    """Layer 3: Subtracts Early Bird promotional voucher."""\r
    def __init__(self, student_name: str, base_tuition: float, scholarship_inr: float, early_bird_inr: float):\r
        super().__init__(student_name, base_tuition, scholarship_inr)\r
        self.early_bird_inr = float(early_bird_inr)\r
\r
    def calculate_payable(self, audit_trail: List[str]) -> float:\r
        amount_before = super().calculate_payable(audit_trail)\r
        net = max(0.0, amount_before - self.early_bird_inr)\r
        audit_trail.append(f"3. Early Bird Discount Applied: -INR {self.early_bird_inr:,.2f} -> Subtotal: INR {net:,.2f}")\r
        return net\r
\r
\r
class FestivePromoProcessor(EarlyBirdConcessionProcessor):\r
    """Layer 4: Applies 5% seasonal festive rebate on current balance."""\r
    def __init__(self, student_name: str, base_tuition: float, scholarship_inr: float, early_bird_inr: float, festive_rate: float = 0.05):\r
        super().__init__(student_name, base_tuition, scholarship_inr, early_bird_inr)\r
        self.festive_rate = float(festive_rate)\r
\r
    def calculate_payable(self, audit_trail: List[str]) -> float:\r
        amount_before = super().calculate_payable(audit_trail)\r
        discount = amount_before * self.festive_rate\r
        net = max(0.0, amount_before - discount)\r
        audit_trail.append(f"4. Festive Promo (5%): -INR {discount:,.2f} -> FINAL DUE: INR {net:,.2f}")\r
        return net\r
\r
\r
def run_layered_processor_demo():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - LAYERED CONCESSION PROCESSOR (super() STACK)")\r
    print("=" * 70)\r
\r
    processor = FestivePromoProcessor(\r
        student_name="Tanushree Das",\r
        base_tuition=20000.0,\r
        scholarship_inr=3000.0,\r
        early_bird_inr=1500.0,\r
        festive_rate=0.05\r
    )\r
\r
    audit_records = []\r
    final_amount = processor.calculate_payable(audit_records)\r
\r
    print(f"Student: {processor.student_name}\\n")\r
    print("Executed Layered Computation Stack via \`super()\`:")\r
    for record in audit_records:\r
        print(f"  * {record}")\r
\r
    print(f"\\nNet Payable Disbursed: INR {final_amount:,.2f}")\r
    print("\\n[PASSED] Layered Method Overriding Demonstration Complete.")\r
\r
\r
if __name__ == "__main__":\r
    run_layered_processor_demo()\r
`,k=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_001: OBJECT-ORIENTED PYTHON\r
                TOPIC 9: METHOD OVERRIDING & THE super() FUNCTION\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. EXTENDING VS REPLACING PARENT BEHAVIOR\r
--------------------------------------------------------------------------------\r
  • EXTENDING (Recommended for layered behavior):\r
      class Child(Parent):\r
          def process(self):\r
              super().process()  # Runs parent logic first\r
              print("Child custom logic")\r
\r
  • REPLACING (Completely overrides parent):\r
      class Child(Parent):\r
          def process(self):\r
              print("Child exclusive logic")  # Ignores parent\r
\r
--------------------------------------------------------------------------------\r
2. THE TRUE NATURE OF super()\r
--------------------------------------------------------------------------------\r
  In Python, \`super()\` does NOT mean "call my direct lexical parent".\r
  It means: "Search the MRO (Method Resolution Order) of the active instance,\r
  and invoke the method on the NEXT class in that sequence!"\r
\r
--------------------------------------------------------------------------------\r
3. COOPERATIVE CONSTRUCTOR WITH **kwargs\r
--------------------------------------------------------------------------------\r
  class MixinA:\r
      def __init__(self, key_a=None, **kwargs):\r
          super().__init__(**kwargs)\r
          self.key_a = key_a\r
\r
================================================================================\r
         END OF STUDY NOTE • TOPIC 9: METHOD OVERRIDING & super()\r
================================================================================\r
`,A=[{question:"What is Method Overriding in Python?",shortAnswer:"When a child subclass defines a method with the exact same name as a method in its parent superclass, providing a specialized implementation that overrides the parent version.",explanation:"Allows polymorphic behavior where calling obj.method() executes the most derived subclass implementation.",hint:"Subclass redefining a method inherited from a parent class.",level:"basic",codeExample:`class Child(Parent):
    def speak(self):
        return 'Child voice'`},{question:"What does the 'super()' function do in Python?",shortAnswer:"Returns a proxy object that delegates method and attribute lookups to the next class in the active instance's Method Resolution Order (MRO).",explanation:"Allows subclasses to call and extend inherited parent logic dynamically.",hint:"Returns a proxy delegating method calls to the next class in the MRO.",level:"basic",codeExample:`def render(self):
    super().render()
    self.render_custom()`},{question:"What is the difference between 'super().method()' and 'ParentClass.method(self)'?",shortAnswer:"'super().method()' dynamically traverses the instance's MRO and works properly with multiple inheritance; 'ParentClass.method(self)' hardcodes the parent and breaks cooperative diamond inheritance.",explanation:"Always use super() rather than hardcoded class names.",hint:"super() follows MRO dynamically; hardcoded calls break multiple inheritance.",level:"moderate",codeExample:`# Good: super().save()
# Fragile: ParentClass.save(self)`},{question:"What is the difference between 'Extending' a method and 'Replacing' a method in a subclass?",shortAnswer:"Extending calls 'super().method()' to execute parent logic before or after adding custom code; Replacing provides entirely new logic without calling 'super()', discarding parent behavior.",explanation:"Extending preserves parent invariants; replacing completely overrides them.",hint:"Extending calls super(); Replacing omits super() completely.",level:"basic",codeExample:`# Extending: super().run(); do_more()
# Replacing: do_completely_new_thing()`},{question:"How does 'super()' know which class to call next in Python 3 without arguments?",shortAnswer:"Python 3 compiler automatically injects the active class and the current instance into a hidden '__class__' cell within the method scope.",explanation:"Eliminates the legacy Python 2 requirement of writing 'super(CurrentClass, self)'.",hint:"Python 3 injects the active class and instance automatically into the method.",level:"complex",codeExample:"# Modern Python 3: super().__init__()"},{question:"Does 'super()' always call the immediate lexical parent class of the current class?",shortAnswer:"No! In multiple inheritance, 'super()' calls the NEXT class in the active instance's MRO chain, which may be a sibling class or mixin rather than a direct parent.",explanation:"This is the cornerstone of cooperative multiple inheritance in Python.",hint:"No, it calls the NEXT class in the instance's MRO list.",level:"complex",codeExample:"# In diamond A->B,C->D, B's super() calls C, not A!"},{question:"What is 'Cooperative Multiple Inheritance' in Python?",shortAnswer:"A design pattern where every class in a multiple-inheritance hierarchy calls 'super().method()' using compatible arguments, ensuring every ancestor in the diamond is called exactly once.",explanation:"Prevents double-execution of methods in diamond inheritance graphs.",hint:"Every class in the hierarchy calls super() to ensure all ancestors execute once.",level:"complex",codeExample:"# Every mixin calls super().process() in sequence"},{question:"How should constructors in cooperative multiple inheritance handle differing arguments across mixins?",shortAnswer:"By accepting '**kwargs', extracting needed keyword arguments, and forwarding remaining '**kwargs' up through 'super().__init__(**kwargs)'.",explanation:"Guarantees that root object.__init__() eventually receives 0 leftover kwargs.",hint:"Accept **kwargs, extract what is needed, and pass remainder to super().__init__(**kwargs).",level:"moderate",codeExample:`def __init__(self, my_arg=None, **kwargs):
    super().__init__(**kwargs)
    self.my_arg = my_arg`},{question:"What happens if a class in a cooperative diamond chain forgets to call 'super().method()'?",shortAnswer:"The MRO traversal is halted at that class, and all remaining ancestral classes further down the MRO list will never have their method executed.",explanation:"Breaks the cooperative chain across all sibling mixins.",hint:"Halts MRO traversal and prevents subsequent ancestral classes from executing.",level:"complex",codeExample:"# Omitting super() terminates the cooperative pipeline early"},{question:"Can 'super()' be used to call Class Methods (@classmethod)?",shortAnswer:"Yes. Calling 'super().class_method(*args)' inside a subclass classmethod correctly invokes the parent classmethod with 'cls' bound to the calling subclass.",explanation:"Preserves polymorphic classmethod inheritance.",hint:"Yes, super() works seamlessly with class methods.",level:"moderate",codeExample:`@classmethod
def from_dict(cls, d):
    inst = super().from_dict(d)
    return inst`},{question:"Can 'super()' be used to call Static Methods (@staticmethod)?",shortAnswer:"Yes. 'super().static_method(*args)' resolves and executes the parent's static method.",explanation:"Static methods participate in standard MRO resolution.",hint:"Yes, super() can invoke parent static methods.",level:"basic",codeExample:"super().validate_pan(pan)"},{question:"Can 'super()' be used to access property getters and setters?",shortAnswer:"Yes. 'super().property_name' reads the parent property getter, and 'super(SubClass, SubClass).prop.fset(self, val)' or super()._prop can invoke parent setters.",explanation:"Allows subclasses to extend validated property setters.",hint:"Yes, super().prop reads parent property getters.",level:"complex",codeExample:"val = super().price"},{question:"What error occurs if you call 'super().non_existent_method()' when no ancestor defines that method?",shortAnswer:"AttributeError: 'super' object has no attribute 'non_existent_method'.",explanation:"Because MRO search reaches the end of the chain without finding the method.",hint:"Raises AttributeError if the method doesn't exist in the MRO.",level:"basic",codeExample:"# AttributeError: 'super' object has no attribute 'missing'"},{question:"What is the 2-argument syntax of 'super(Class, obj)' used for outside method bodies?",shortAnswer:"It binds the super proxy to a specific class and object instance from outside the class (e.g., super(Child, my_instance).method()).",explanation:"Useful in dynamic metaprogramming and reflection.",hint:"Explicitly binds super proxy to a class and instance from external code.",level:"complex",codeExample:"super(ChildClass, instance).parent_method()"},{question:"What is the 1-argument syntax of 'super(Class)' (Unbound Super)?",shortAnswer:"Returns an unbound super proxy primarily used internally by Python descriptors or when inspecting class methods on classes directly.",explanation:"Rarely needed in everyday application programming.",hint:"Unbound super proxy used for class descriptor inspection.",level:"complex",codeExample:"unbound = super(ChildClass)"},{question:"Can a subclass override a method with a different number of required positional parameters?",shortAnswer:"Yes in Python, but doing so violates the Liskov Substitution Principle (LSP) and can crash polymorphic callers expecting the parent signature.",explanation:"Use default arguments or *args/**kwargs if extra parameters are needed.",hint:"Technically allowed by Python, but breaks LSP and polymorphic contracts.",level:"moderate",codeExample:"# Best practice: maintain compatible parameter signatures in overrides"},{question:"How do you inspect the exact class where an overridden method was defined?",shortAnswer:"Using 'method.__qualname__' or 'inspect.getmodule(method)'.",explanation:"Shows the defining class path (e.g. 'ParentClass.method_name').",hint:"Inspect method.__qualname__.",level:"moderate",codeExample:"print(child.render.__qualname__)"},{question:"Why should you call 'super().__init__()' at the start of a subclass constructor rather than at the end?",shortAnswer:"To ensure that all base class attributes and core invariants are initialized before the subclass attempts to access or customize them.",explanation:"Prevents AttributeError when subclass logic relies on parent state.",hint:"Initializes parent attributes before subclass logic runs.",level:"basic",codeExample:`def __init__(self, name, custom):
    super().__init__(name)  # First
    self.custom = custom   # Second`},{question:"What is a 'Layered Calculation Stack' using 'super()'?",shortAnswer:"An architectural pattern where each subclass overrides a calculation method, calls 'super().calculate()', and applies its own adjustment (discounts, taxes, fees) to the returned value.",explanation:"Creates clean, modular, transparent computation pipelines.",hint:"Each subclass modifies the value returned by super().calculate().",level:"moderate",codeExample:`def calculate(self):
    return super().calculate() - self.discount`},{question:"What happens if a subclass overrides '__str__' or '__repr__' without calling super()?",shortAnswer:"The subclass string representation completely replaces the parent format; calling super().__str__() is optional depending on whether parent text should be included.",explanation:"Standard practice for custom domain formatting.",hint:"Completely replaces parent string format unless super().__str__() is included.",level:"basic",codeExample:`def __str__(self):
    return f'{super().__str__()} [VIP]'`},{question:"Can a subclass un-override or delete an overridden method to restore parent behavior?",shortAnswer:"Yes: using 'del SubClass.method_name' on the class object removes the child method from SubClass.__dict__, causing Python to fall back to the parent class.",explanation:"Attribute resolution immediately resolves parent method again.",hint:"del SubClass.method removes the override from the class dict.",level:"complex",codeExample:"del Child.speak  # Restores Parent.speak behavior"},{question:"How does 'super()' interact with '__getattr__' and dynamic attribute dispatch?",shortAnswer:"'super().__getattr__(name)' forwards unhandled attribute lookups to ancestor fallback handlers.",explanation:"Common in proxy patterns and ORM models.",hint:"Forwards dynamic attribute resolution to parent fallback handlers.",level:"complex",codeExample:`def __getattr__(self, item):
    return super().__getattr__(item)`},{question:"Why does Python 2 syntax 'super(Child, self)' cause infinite recursion if you copy-paste it into a subclass?",shortAnswer:"If you copy-paste 'super(Parent, self)' into Child, it starts searching the MRO from Parent again, creating an infinite loop.",explanation:"Python 3 zero-argument super() completely eliminates this copy-paste bug.",hint:"Hardcoding wrong class name in Python 2 super causes infinite recursion.",level:"complex",codeExample:"# Python 3 zero-argument super() is completely immune to this bug"},{question:"What is the ultimate design rule for method overriding and 'super()'?",shortAnswer:"Always use zero-argument super() for constructor chaining and cooperative pipelines, preserve parent method signatures (LSP), and use super() whenever extending rather than completely replacing behavior.",explanation:"Ensures reliable, non-breaking inheritance across large codebases.",hint:"Use zero-argument super(), maintain signatures (LSP), and chain cooperatively.",level:"basic",codeExample:"# Clean, cooperative, non-breaking method overriding"}];function B(){const d=s.useRef([]),[n,c]=s.useState("pipeline"),[p,g]=s.useState(!0),[h,_]=s.useState(!0),[x,y]=s.useState(!0);s.useEffect(()=>{const t=new IntersectionObserver(l=>{l.forEach(b=>{b.isIntersecting&&b.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return d.current.forEach(l=>{l&&t.observe(l)}),()=>t.disconnect()},[]);const r=t=>{t&&!d.current.includes(t)&&d.current.push(t)},f=2e4,v=f*.18,u=f+v;let a=u;p&&(a=Math.max(0,a-3e3));let i=a;h&&(i=Math.max(0,i-1500));let o=i;return x&&(o=Math.max(0,o*.95)),e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:r,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_001"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 9"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Object-Oriented Programming (OOP) in Python"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Method Overriding & the ",e.jsx("code",{className:"text-teal-400 font-mono",children:"super()"})," Function"]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master polymorphic behavior and inheritance delegation: extending vs replacing parent logic, modern zero-argument ",e.jsx("code",{className:"text-teal-300 font-mono",children:"super()"})," in Python 3, cooperative multiple inheritance in diamond graphs, and constructor chaining with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"**kwargs"}),"."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔄 Extending vs Replacing Logic"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ Zero-Argument super() Mechanics"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"💎 Cooperative Diamond Traversal"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📦 **kwargs Constructor Forwarding"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧬"}),e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:["1. Method Overriding & The Power of ",e.jsx("code",{className:"text-teal-400 font-mono",children:"super()"})]})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["Method overriding occurs when a subclass redefines a method inherited from an ancestor. Subclasses can choose to either ",e.jsx("strong",{children:"extend"})," the parent behavior or ",e.jsx("strong",{children:"completely replace"})," it:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-base mb-1",children:"1️⃣ Extending via super()"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"super().method() + custom"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Executes ancestor logic and layers custom behavior on top. Preserves invariants."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-base mb-1",children:"2️⃣ Total Replacement"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"def method(self): ..."}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Provides entirely fresh logic without calling ",e.jsx("code",{className:"text-cyan-300",children:"super()"}),", completely replacing parent behavior."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-base mb-1",children:"3️⃣ Cooperative Multiple"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"Next in MRO list"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["In multiple inheritance, ",e.jsx("code",{className:"text-purple-300 font-mono",children:"super()"})," calls the next class in MRO rather than just the direct parent!"]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"Zero-Argument super() in Python 3"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["In modern Python 3, write simply ",e.jsx("code",{className:"text-teal-300 font-mono",children:"super().method()"}),". Python's compiler automatically extracts the active class and instance from a hidden lexical cell, completely eliminating the legacy Python 2 ",e.jsx("code",{className:"text-slate-400 font-mono",children:"super(ClassName, self)"})," boilerplate and copy-paste recursion bugs!"]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Method Overriding & Cooperative super()"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>c("pipeline"),className:m("px-3 py-1.5 rounded-lg transition-all",n==="pipeline"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Extension Pipeline"}),e.jsx("button",{onClick:()=>c("diamond"),className:m("px-3 py-1.5 rounded-lg transition-all",n==="diamond"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Cooperative Diamond Traversal"}),e.jsx("button",{onClick:()=>c("stack"),className:m("px-3 py-1.5 rounded-lg transition-all",n==="stack"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Layered Computation Stack"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining execution delegation, cooperative diamond routing, and layered discount calculations:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:n==="pipeline"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"METHOD OVERRIDING & super() EXTENSION FLOW"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"Parent Class: BaseStudentReport"}),e.jsx("text",{x:"20",y:"65",fill:"#ecfdf5",fontSize:"10 font-mono",children:"def generate_report(self):"}),e.jsxs("text",{x:"40",y:"90",fill:"#cbd5e1",fontSize:"10 font-mono",children:['return f"Student: ',"{self.name}","\\nTotal: ","{self.marks}",'"']}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"155",fill:"#34d399",fontSize:"10 font-bold",children:"Standard Base Output:"}),e.jsx("text",{x:"30",y:"175",fill:"#ecfdf5",fontSize:"9 font-mono",children:"Student: Priyanka Sen"}),e.jsx("text",{x:"30",y:"195",fill:"#ecfdf5",fontSize:"9 font-mono",children:"Total Marks: 485.0 / 500"})]}),e.jsxs("g",{transform:"translate(460, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"Subclass: HonorsStudentReport"}),e.jsx("text",{x:"20",y:"65",fill:"#ecfdf5",fontSize:"10 font-mono",children:"def generate_report(self):"}),e.jsx("text",{x:"40",y:"90",fill:"#34d399",fontSize:"10 font-mono font-bold",children:"base_text = super().generate_report()"}),e.jsxs("text",{x:"40",y:"115",fill:"#ecfdf5",fontSize:"10 font-mono",children:['return f"',"{base_text}","\\nThesis: ","{self.thesis}",'"']}),e.jsx("rect",{x:"20",y:"140",width:"340",height:"75",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"30",y:"165",fill:"#c084fc",fontSize:"10 font-bold",children:"Extended Combined Output:"}),e.jsx("text",{x:"30",y:"185",fill:"#a7f3d0",fontSize:"9 font-mono",children:"✓ Base marks + Honors Thesis distinction!"})]})]}):n==="diamond"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"COOPERATIVE super() TRAVERSAL IN DIAMOND TOPOLOGY"}),e.jsxs("g",{transform:"translate(30, 40)",children:[e.jsx("rect",{x:"340",y:"10",width:"180",height:"45",rx:"6",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"380",y:"38",fill:"#99f6e4",fontSize:"11 font-mono font-bold",children:"BaseHandler"}),e.jsx("rect",{x:"160",y:"100",width:"200",height:"45",rx:"6",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"180",y:"128",fill:"#a5f3fc",fontSize:"11 font-mono font-bold",children:"AuthenticationHandler"}),e.jsx("rect",{x:"500",y:"100",width:"200",height:"45",rx:"6",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"530",y:"128",fill:"#c4b5fd",fontSize:"11 font-mono font-bold",children:"EncryptionHandler"}),e.jsx("rect",{x:"340",y:"200",width:"180",height:"45",rx:"6",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"360",y:"228",fill:"#a7f3d0",fontSize:"11 font-mono font-bold",children:"SecureApiGateway"}),e.jsx("text",{x:"310",y:"175",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"1. Start ↓"}),e.jsx("text",{x:"375",y:"128",fill:"#38bdf8",fontSize:"18",fontWeight:"bold",children:"→"}),e.jsx("text",{x:"385",y:"145",fill:"#38bdf8",fontSize:"9 font-mono",children:"super() calls"}),e.jsx("text",{x:"590",y:"80",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"↑ 3. super()"})]}),e.jsxs("g",{transform:"translate(30, 290)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"35",rx:"4",fill:"#090d16",stroke:"#334155"}),e.jsx("text",{x:"20",y:"22",fill:"#cbd5e1",fontSize:"10 font-bold",children:"MRO Order: Gateway → AuthHandler → EncryptionHandler → BaseHandler → object (Every node visited ONCE!)"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"LAYERED CALCULATION PIPELINE VIA super().calculate()"}),e.jsxs("g",{transform:"translate(30, 60)",children:[e.jsx("rect",{x:"0",y:"0",width:"180",height:"200",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"1. Base Tuition"}),e.jsx("text",{x:"15",y:"60",fill:"#cbd5e1",fontSize:"10 font-mono",children:"Tuition + 18% GST"}),e.jsx("text",{x:"15",y:"90",fill:"#34d399",fontSize:"11 font-bold",children:"INR 23,600.00"}),e.jsx("text",{x:"15",y:"130",fill:"#ecfdf5",fontSize:"9",children:"• Root fee computation"}),e.jsx("text",{x:"190",y:"105",fill:"#38bdf8",fontSize:"20",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"220",y:"0",width:"180",height:"200",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"235",y:"30",fill:"#a5f3fc",fontSize:"12",fontWeight:"bold",children:"2. Scholarship"}),e.jsx("text",{x:"235",y:"60",fill:"#cbd5e1",fontSize:"10 font-mono",children:"super() - 3,000"}),e.jsx("text",{x:"235",y:"90",fill:"#38bdf8",fontSize:"11 font-bold",children:"INR 20,600.00"}),e.jsx("text",{x:"235",y:"130",fill:"#ecfdf5",fontSize:"9",children:"• Layer 2 reduction"}),e.jsx("text",{x:"410",y:"105",fill:"#38bdf8",fontSize:"20",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"440",y:"0",width:"180",height:"200",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"455",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"3. Early Bird"}),e.jsx("text",{x:"455",y:"60",fill:"#cbd5e1",fontSize:"10 font-mono",children:"super() - 1,500"}),e.jsx("text",{x:"455",y:"90",fill:"#c084fc",fontSize:"11 font-bold",children:"INR 19,100.00"}),e.jsx("text",{x:"455",y:"130",fill:"#ecfdf5",fontSize:"9",children:"• Layer 3 voucher"}),e.jsx("text",{x:"630",y:"105",fill:"#38bdf8",fontSize:"20",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"660",y:"0",width:"180",height:"200",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"675",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"4. Festive 5%"}),e.jsx("text",{x:"675",y:"60",fill:"#cbd5e1",fontSize:"10 font-mono",children:"super() * 0.95"}),e.jsx("text",{x:"675",y:"90",fill:"#34d399",fontSize:"12 font-mono font-bold",children:"INR 18,145.00"}),e.jsx("text",{x:"675",y:"130",fill:"#a7f3d0",fontSize:"9 font-bold",children:"✓ Net Disbursed"})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Layered Discount Engine (super() Stack)"})]}),e.jsxs("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:["Toggle inheritance override layers to see how each ",e.jsx("code",{className:"text-teal-300 font-mono",children:"super().calculate()"})," layer dynamically modifies tuition fees:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 block font-bold",children:"Inheritance Override Layers"}),e.jsxs("div",{className:"space-y-2.5",children:[e.jsxs("div",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between text-xs font-mono",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-bold text-teal-300",children:"Layer 1: BaseTuitionProcessor"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"Base Tuition (INR 20,000) + 18% GST"})]}),e.jsxs("span",{className:"text-teal-400 font-bold",children:["INR ",u.toLocaleString()]})]}),e.jsxs("label",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between text-xs font-mono cursor-pointer hover:border-slate-700",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-bold text-cyan-300",children:"Layer 2: ScholarshipDiscountProcessor"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"super().calculate() - INR 3,000.00"})]}),e.jsx("input",{type:"checkbox",checked:p,onChange:t=>g(t.target.checked),className:"accent-cyan-500 w-4 h-4"})]}),e.jsxs("label",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between text-xs font-mono cursor-pointer hover:border-slate-700",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-bold text-purple-300",children:"Layer 3: EarlyBirdConcessionProcessor"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"super().calculate() - INR 1,500.00"})]}),e.jsx("input",{type:"checkbox",checked:h,onChange:t=>_(t.target.checked),className:"accent-purple-500 w-4 h-4"})]}),e.jsxs("label",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between text-xs font-mono cursor-pointer hover:border-slate-700",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-bold text-emerald-300",children:"Layer 4: FestivePromoProcessor"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"super().calculate() * 0.95 (5% Rebate)"})]}),e.jsx("input",{type:"checkbox",checked:x,onChange:t=>y(t.target.checked),className:"accent-emerald-500 w-4 h-4"})]})]})]}),e.jsxs("div",{className:"space-y-3 flex flex-col justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block font-bold",children:"Dynamic super() Stack Audit Trail"}),e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2 text-xs font-mono flex-1",children:[e.jsxs("div",{className:"text-slate-400",children:["> 1. Base + GST: INR ",u.toLocaleString()]}),p&&e.jsxs("div",{className:"text-cyan-300",children:["> 2. Scholarship Applied: -INR 3,000 → INR ",a.toLocaleString()]}),h&&e.jsxs("div",{className:"text-purple-300",children:["> 3. Early Bird Applied: -INR 1,500 → INR ",i.toLocaleString()]}),x&&e.jsxs("div",{className:"text-emerald-300",children:["> 4. Festive 5% Rebate Applied: → INR ",o.toLocaleString()]}),e.jsxs("div",{className:"pt-3 mt-3 border-t border-slate-800 flex items-center justify-between font-bold text-sm",children:[e.jsx("span",{className:"text-slate-300",children:"FINAL NET PAYABLE:"}),e.jsxs("span",{className:"text-teal-300",children:["INR ",o.toLocaleString("en-IN",{minimumFractionDigits:2})]})]})]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Method Overriding & Delegation Reference Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Pattern"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Code Syntax"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"MRO Traversal Behavior"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Primary Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"Extended Overriding"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"super().method()"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-bold",children:"Delegates to next MRO class"}),e.jsx("td",{className:"py-3 px-4",children:"Constructor chaining, layered filters, logging"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"Total Replacement"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"def method(self): ..."}),e.jsx("td",{className:"py-3 px-4 text-rose-400",children:"Completely halts ancestor MRO traversal"}),e.jsx("td",{className:"py-3 px-4",children:"Custom algorithms completely supplanting parent"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Cooperative Diamond"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"super().process(payload)"}),e.jsx("td",{className:"py-3 px-4 text-purple-300 font-bold",children:"Passes execution across siblings"}),e.jsx("td",{className:"py-3 px-4",children:"Middleware chains, serializer mixins, authorization"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"**kwargs Constructor"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"super().__init__(**kwargs)"}),e.jsx("td",{className:"py-3 px-4",children:"Consumes needed kwargs, forwards remainder"}),e.jsx("td",{className:"py-3 px-4",children:"Multi-inheritance classes with heterogeneous arguments"})]})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating method overriding, cooperative diamond hierarchies, **kwargs constructor chaining, and layered fee calculations:"}),e.jsx(N,{files:[{filename:"method_overriding_and_super_fundamentals.py",code:S,description:"Method overriding, extending parent logic via super(), and total replacement patterns."},{filename:"cooperative_multiple_inheritance_and_super.py",code:R,description:"Cooperative multiple inheritance and diamond problem resolution via MRO linear sequence."},{filename:"super_constructor_chaining_and_kwargs.py",code:C,description:"Forwarding **kwargs through cooperative super().__init__() constructors in multi-mixin hierarchies."},{filename:"banking_transaction_processor_and_discount_engine.py",code:T,description:"Enterprise Layered Transaction & Tuition Concession Processing Engine with super() calculation stacks."}]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Hardcoding `Parent.method(self)`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-rose-300 font-mono",children:"ParentClass.method(self)"})," bypasses Python's MRO and causes diamond multiple inheritance to execute parent methods multiple times."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always use zero-argument ",e.jsx("code",{className:"text-emerald-300",children:"super().method()"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Incompatible Override Signatures (LSP)"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Changing parameter counts in an overridden method breaks polymorphic callers expecting the base class signature."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Subclasses must accept all arguments expected by parent methods."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Omission of `super()` in Mixins"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["If a mixin in a cooperative diamond omits ",e.jsx("code",{className:"text-purple-300 font-mono",children:"super().method()"}),", MRO traversal terminates early and subsequent mixins never execute."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Every cooperative mixin must forward calls to ",e.jsx("code",{className:"text-emerald-300",children:"super().method()"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Copy-Pasting Legacy Python 2 `super()`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"super(Parent, self)"})," inside a child class searches starting from Parent again, causing an infinite loop!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," In Python 3, write zero-argument ",e.jsx("code",{className:"text-emerald-300",children:"super()"}),"."]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering method overriding, super() mechanics, cooperative multiple inheritance, and MRO traversal:"}),e.jsx(w,{questions:A})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with method overriding patterns, cooperative super() recipes, and layered fee calculations:"}),e.jsx("div",{className:"mb-10",children:e.jsx(j,{content:k,filename:"python_topic9_method_overriding_and_super_notes.txt",title:"Print Topic 9 Study Notes"})}),e.jsx(E,{})]})]})]})}export{B as default};
