import{b as s,j as e,bg as r}from"./vendor-react-core-Doz9nIC6.js";import{P}from"./PythonFileLoader-hCi5osN-.js";import{P as v}from"./PlainTextPrint-C08xhKA4.js";import{F as w}from"./FAQTemplate-CkSqDH4B.js";import{T as O}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const N=`# topic0_files/procedural_vs_oop_comparison.py\r
# Module: 003_001_object-oriented-python\r
# Topic: OOP Paradigm: Procedural vs Object-Oriented thinking\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 0 - File 1: Procedural Programming vs Object-Oriented Paradigm\r
Demonstrates:\r
  1. Procedural Approach: Functions acting on detached data structures (dicts/tuples)\r
  2. The Flaw of Procedural Code: No data protection, external mutation, fragmented logic\r
  3. OOP Approach: Bundling state (attributes) and behavior (methods) into an Account class\r
  4. How OOP guarantees invariant validation and clean state encapsulation\r
"""\r
\r
# =====================================================================\r
# 1. THE PROCEDURAL APPROACH (Data and Logic are Separated)\r
# =====================================================================\r
\r
def create_procedural_account(account_number: str, holder_name: str, balance: float) -> dict:\r
    return {\r
        "acc_num": account_number,\r
        "name": holder_name,\r
        "balance": balance\r
    }\r
\r
def procedural_deposit(account: dict, amount: float) -> bool:\r
    if amount <= 0:\r
        print(f"  [ERROR] Invalid deposit amount: INR {amount:,.2f}")\r
        return False\r
    account["balance"] += amount\r
    print(f"  [PROCEDURAL] Deposited INR {amount:,.2f}. New Balance: INR {account['balance']:,.2f}")\r
    return True\r
\r
def procedural_withdraw(account: dict, amount: float) -> bool:\r
    if amount <= 0 or amount > account["balance"]:\r
        print(f"  [ERROR] Insufficient funds or invalid amount: INR {amount:,.2f}")\r
        return False\r
    account["balance"] -= amount\r
    print(f"  [PROCEDURAL] Withdrew INR {amount:,.2f}. Remaining Balance: INR {account['balance']:,.2f}")\r
    return True\r
\r
\r
# =====================================================================\r
# 2. THE OBJECT-ORIENTED APPROACH (Data and Behavior are Encapsulated)\r
# =====================================================================\r
\r
class BankAccount:\r
    """Encapsulated Bank Account with self-managed state and invariants."""\r
\r
    def __init__(self, account_number: str, holder_name: str, initial_balance: float = 0.0):\r
        if initial_balance < 0:\r
            raise ValueError("Initial balance cannot be negative!")\r
        self.account_number = account_number\r
        self.holder_name = holder_name\r
        self._balance = float(initial_balance)\r
\r
    @property\r
    def balance(self) -> float:\r
        return self._balance\r
\r
    def deposit(self, amount: float) -> bool:\r
        if amount <= 0:\r
            print(f"  [ERROR] Deposit amount must be positive: INR {amount:,.2f}")\r
            return False\r
        self._balance += amount\r
        print(f"  [OOP] Deposited INR {amount:,.2f} into Account #{self.account_number}. New Balance: INR {self._balance:,.2f}")\r
        return True\r
\r
    def withdraw(self, amount: float) -> bool:\r
        if amount <= 0:\r
            print(f"  [ERROR] Withdrawal amount must be positive: INR {amount:,.2f}")\r
            return False\r
        if amount > self._balance:\r
            print(f"  [ERROR] Overdraft denied! Balance: INR {self._balance:,.2f}, Requested: INR {amount:,.2f}")\r
            return False\r
        self._balance -= amount\r
        print(f"  [OOP] Withdrew INR {amount:,.2f} from Account #{self.account_number}. Remaining: INR {self._balance:,.2f}")\r
        return True\r
\r
\r
def run_comparison_demo():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - PROCEDURAL VS OBJECT-ORIENTED PROGRAMMING")\r
    print("=" * 70)\r
\r
    # 1. Procedural Execution\r
    print("\\n--- A. PROCEDURAL APPROACH EXECUTION ---")\r
    p_acc = create_procedural_account("ACC-101", "Debanjan Roy", 5000.0)\r
    procedural_deposit(p_acc, 2500.0)\r
    procedural_withdraw(p_acc, 1200.0)\r
\r
    # Procedural Vulnerability Demonstration:\r
    # Any external code can silently corrupt procedural data:\r
    p_acc["balance"] = -999999.0  # State corrupted without validation!\r
    print(f"  [CORRUPTION TRAP] External code set balance directly to: INR {p_acc['balance']:,.2f}")\r
\r
    # 2. OOP Execution\r
    print("\\n--- B. OBJECT-ORIENTED APPROACH EXECUTION ---")\r
    oop_acc = BankAccount("ACC-202", "Priyanka Sen", 15000.0)\r
    oop_acc.deposit(5000.0)\r
    oop_acc.withdraw(3500.0)\r
    oop_acc.withdraw(50000.0)  # Cleanly rejected by encapsulated logic\r
\r
    print("\\n[PASSED] Paradigm Comparison Completed Successfully.")\r
\r
\r
if __name__ == "__main__":\r
    run_comparison_demo()\r
`,A=`# topic0_files/the_four_pillars_of_oop.py\r
# Module: 003_001_object-oriented-python\r
# Topic: OOP Paradigm: Procedural vs Object-Oriented thinking\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 0 - File 2: The Four Foundational Pillars of Object-Oriented Programming\r
Demonstrates:\r
  1. Encapsulation: Protecting internal attributes behind validated methods\r
  2. Abstraction: Hiding intricate hardware/business mechanics behind simple APIs\r
  3. Inheritance: Reusing and extending base capabilities in specialized subtypes\r
  4. Polymorphism: Interacting with varied objects through a unified protocol\r
"""\r
\r
from abc import ABC, abstractmethod\r
from typing import List\r
\r
# =====================================================================\r
# 1. ABSTRACTION & INHERITANCE\r
# =====================================================================\r
\r
class PaymentProcessor(ABC):\r
    """Abstract Base Class representing a general payment gateway contract."""\r
\r
    def __init__(self, merchant_id: str):\r
        self.merchant_id = merchant_id\r
\r
    @abstractmethod\r
    def process_payment(self, amount: float) -> bool:\r
        """Abstract method enforced on all derived processors."""\r
        pass\r
\r
\r
class UPIPayment(PaymentProcessor):\r
    """Encapsulated UPI Payment Gateway."""\r
\r
    def __init__(self, merchant_id: str, upi_id: str):\r
        super().__init__(merchant_id)\r
        self.__upi_id = upi_id  # Private attribute (Encapsulation)\r
\r
    def process_payment(self, amount: float) -> bool:\r
        # Abstraction: User doesn't need to know NPCI backend token exchange\r
        print(f"  [UPI GATEWAY] Processing INR {amount:,.2f} via Virtual UPI ID: {self.__upi_id}")\r
        return True\r
\r
\r
class CreditCardPayment(PaymentProcessor):\r
    """Encapsulated Credit Card Payment Gateway."""\r
\r
    def __init__(self, merchant_id: str, masked_card_number: str):\r
        super().__init__(merchant_id)\r
        self.__card = masked_card_number\r
\r
    def process_payment(self, amount: float) -> bool:\r
        print(f"  [CARD GATEWAY] Routing INR {amount:,.2f} via Visa/Mastercard: {self.__card}")\r
        return True\r
\r
\r
# =====================================================================\r
# 2. POLYMORPHISM IN ACTION\r
# =====================================================================\r
\r
def checkout_shopping_cart(processors: List[PaymentProcessor], order_total: float):\r
    """Polymorphic dispatcher: processes any PaymentProcessor uniformly."""\r
    print("Executing Polymorphic Checkout Routine:")\r
    for processor in processors:\r
        processor.process_payment(order_total)\r
\r
\r
def run_four_pillars_demo():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - THE FOUR PILLARS OF OBJECT-ORIENTED PROGRAMMING")\r
    print("=" * 70)\r
\r
    # 1. Create polymorphic instances\r
    upi = UPIPayment("MERCH-99", "sukanta@okaxis")\r
    card = CreditCardPayment("MERCH-99", "XXXX-XXXX-XXXX-4098")\r
\r
    # 2. Dispatch payments polymorphically\r
    gateways = [upi, card]\r
    checkout_shopping_cart(gateways, 4500.0)\r
\r
    print("\\n[PASSED] The Four Pillars Demonstrated Successfully.")\r
\r
\r
if __name__ == "__main__":\r
    run_four_pillars_demo()\r
`,E=`# topic0_files/state_and_behavior_bundling.py\r
# Module: 003_001_object-oriented-python\r
# Topic: OOP Paradigm: Procedural vs Object-Oriented thinking\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 0 - File 3: State & Behavior Cohesion (Self-Validating Entities)\r
Demonstrates:\r
  1. How OOP unifies data (attributes) and logic (methods) into cohesive units\r
  2. How methods guard invariants (e.g. temperature ranges, score limits 0-100)\r
  3. Eliminating scattered helper functions across different files\r
"""\r
\r
from typing import List\r
\r
class StudentScoreCard:\r
    """Self-validating student scorecard entity with encapsulated metrics."""\r
\r
    def __init__(self, student_id: str, student_name: str):\r
        self.student_id = student_id\r
        self.student_name = student_name\r
        self._marks: List[float] = []\r
\r
    def add_score(self, subject_marks: float) -> None:\r
        """Enforces invariant: marks must be strictly between 0 and 100."""\r
        if not (0.0 <= subject_marks <= 100.0):\r
            raise ValueError(f"Invalid marks: {subject_marks}. Must be between 0.0 and 100.0!")\r
        self._marks.append(float(subject_marks))\r
        print(f"  [SCORE ADDED] {self.student_name}: +{subject_marks:.1f}")\r
\r
    def calculate_average(self) -> float:\r
        if not self._marks:\r
            return 0.0\r
        return sum(self._marks) / len(self._marks)\r
\r
    def determine_grade(self) -> str:\r
        avg = self.calculate_average()\r
        if avg >= 90.0:\r
            return "A+ (Outstanding)"\r
        elif avg >= 75.0:\r
            return "A (Excellent)"\r
        elif avg >= 60.0:\r
            return "B (Good)"\r
        elif avg >= 40.0:\r
            return "C (Pass)"\r
        return "F (Needs Improvement)"\r
\r
    def generate_report(self) -> str:\r
        return (\r
            f"Student: {self.student_name} (ID: {self.student_id}) | "\r
            f"Subjects: {len(self._marks)} | "\r
            f"Average: {self.calculate_average():.2f}% | "\r
            f"Grade: {self.determine_grade()}"\r
        )\r
\r
\r
def run_state_cohesion_demo():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - STATE & BEHAVIOR BUNDLING DEMO")\r
    print("=" * 70)\r
\r
    student = StudentScoreCard("STU-2026-01", "Sourav Mukherjee")\r
    student.add_score(88.0)\r
    student.add_score(94.5)\r
    student.add_score(91.0)\r
\r
    print("\\n--- GENERATED ACADEMIC REPORT ---")\r
    print(student.generate_report())\r
\r
    print("\\n[PASSED] State and Behavior Cohesion Verified.")\r
\r
\r
if __name__ == "__main__":\r
    run_state_cohesion_demo()\r
`,S=`# topic0_files/hospital_management_oop_case_study.py\r
# Module: 003_001_object-oriented-python\r
# Topic: OOP Paradigm: Procedural vs Object-Oriented thinking\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 0 - File 4: Enterprise Clinic Consultation Management Suite (OOP Architecture)\r
Demonstrates:\r
  1. Real-world enterprise domain modeling with classes (Doctor, Patient, Appointment)\r
  2. Interaction between multiple distinct domain objects\r
  3. Clean invariant protection and dynamic billing calculations\r
"""\r
\r
import datetime as dt\r
from typing import List, Optional\r
\r
class Doctor:\r
    """Represents a medical specialist with schedule and consultation fees."""\r
\r
    def __init__(self, doctor_id: str, name: str, specialization: str, consultation_fee: float):\r
        self.doctor_id = doctor_id\r
        self.name = name\r
        self.specialization = specialization\r
        self.consultation_fee = consultation_fee\r
\r
    def __str__(self) -> str:\r
        return f"Dr. {self.name} ({self.specialization}) - Fee: INR {self.consultation_fee:,.2f}"\r
\r
\r
class Patient:\r
    """Represents a registered patient with medical records."""\r
\r
    def __init__(self, patient_id: str, name: str, age: int, contact_number: str):\r
        self.patient_id = patient_id\r
        self.name = name\r
        self.age = age\r
        self.contact_number = contact_number\r
        self.prescription_history: List[str] = []\r
\r
    def add_prescription(self, diagnosis: str) -> None:\r
        self.prescription_history.append(f"{dt.date.today()}: {diagnosis}")\r
\r
\r
class Appointment:\r
    """Binds Doctor, Patient, and Billing logic into a unified transaction."""\r
\r
    def __init__(self, appointment_id: str, doctor: Doctor, patient: Patient, scheduled_time: dt.datetime):\r
        self.appointment_id = appointment_id\r
        self.doctor = doctor\r
        self.patient = patient\r
        self.scheduled_time = scheduled_time\r
        self.is_completed = False\r
        self.is_paid = False\r
\r
    def complete_consultation(self, diagnosis: str) -> None:\r
        self.is_completed = True\r
        self.patient.add_prescription(diagnosis)\r
        print(f"  [CONSULTATION COMPLETED] {self.doctor.name} examined {self.patient.name}.")\r
\r
    def process_payment(self) -> float:\r
        self.is_paid = True\r
        print(f"  [PAYMENT RECEIVED] INR {self.doctor.consultation_fee:,.2f} recorded for Appt #{self.appointment_id}")\r
        return self.doctor.consultation_fee\r
\r
\r
def run_clinic_demo():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - BARRACKPORE CLINIC OOP CASE STUDY")\r
    print("=" * 70)\r
\r
    # 1. Instantiate Domain Entities\r
    doc = Doctor("DOC-01", "Anirban Bhattacharya", "Cardiology", 1200.0)\r
    patient = Patient("PAT-101", "Tanushree Das", 34, "+91-9830012345")\r
\r
    # 2. Schedule and Execute Appointment\r
    appt = Appointment("APPT-202601", doc, patient, dt.datetime.now())\r
    print(f"Appointment Scheduled: {appt.patient.name} with {appt.doctor.name}\\n")\r
\r
    appt.complete_consultation("Mild Hypertension - Prescribed Lifestyle Modifications")\r
    appt.process_payment()\r
\r
    print(f"\\nPatient Medical History: {patient.prescription_history}")\r
    print("\\n[PASSED] Hospital OOP Management Case Study Completed.")\r
\r
\r
if __name__ == "__main__":\r
    run_clinic_demo()\r
`,C=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_001: OBJECT-ORIENTED PYTHON\r
         TOPIC 0: OOP PARADIGM: PROCEDURAL VS OBJECT-ORIENTED THINKING\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. PROCEDURAL VS OBJECT-ORIENTED PROGRAMMING\r
--------------------------------------------------------------------------------\r
  Feature               Procedural (POP)                Object-Oriented (OOP)\r
  ------------------------------------------------------------------------------\r
  Core Focus            Functions & Sequence of steps   Objects (Data + Behavior)\r
  Data Placement        Detached (dicts, tuples, globals) Encapsulated inside classes\r
  Data Protection       None (any function can mutate)  Protected via access controls\r
  Code Reuse            Function calls & copy-paste     Inheritance & Polymorphism\r
  Real-World Modeling   Difficult for large domains     Intuitive & highly scalable\r
\r
--------------------------------------------------------------------------------\r
2. THE FOUR PILLARS OF OOP\r
--------------------------------------------------------------------------------\r
  1. Encapsulation : Bundles attributes and methods; hides internal representations.\r
  2. Abstraction   : Exposes clean public APIs; conceals low-level complexity.\r
  3. Inheritance   : Derives specialized classes from general base classes.\r
  4. Polymorphism  : Interacts with diverse objects through a uniform interface.\r
\r
--------------------------------------------------------------------------------\r
3. THE MINDSET SHIFT\r
--------------------------------------------------------------------------------\r
  • Procedural : "What step-by-step procedures do I execute on raw data?"\r
  • OOP        : "What autonomous entities exist in my domain, what data do they\r
                  own, and how do they communicate?"\r
\r
================================================================================\r
        END OF STUDY NOTE • TOPIC 0: OOP PARADIGM & MENTAL MODEL\r
================================================================================\r
`,I=[{question:"What is the primary difference between Procedural Programming (POP) and Object-Oriented Programming (OOP)?",shortAnswer:"Procedural programming organizes code around sequential functions acting on detached data structures; OOP bundles state (data attributes) and behavior (methods) into self-contained objects.",explanation:"In POP, data is exposed and vulnerable to external mutation; in OOP, objects manage their own state and enforce validation rules.",hint:"POP focuses on sequential steps on raw data; OOP focuses on autonomous objects bundling data and behavior.",level:"basic",codeExample:`# POP: deposit(account_dict, 100)
# OOP: account_obj.deposit(100)`},{question:"What are the Four Foundational Pillars of Object-Oriented Programming?",shortAnswer:"Encapsulation, Abstraction, Inheritance, and Polymorphism.",explanation:"These four pillars provide the structural foundation for modular, reusable, extensible, and maintainable software architecture.",hint:"Encapsulation, Abstraction, Inheritance, Polymorphism.",level:"basic",codeExample:`# 1. Encapsulation (data hiding)
# 2. Abstraction (simple interface)
# 3. Inheritance (code reuse)
# 4. Polymorphism (uniform behavior)`},{question:"What is Encapsulation in OOP?",shortAnswer:"The bundling of data attributes and the methods that operate on that data into a single unit (class), while restricting direct external access to internal representation.",explanation:"Prevents accidental or malicious external mutation and keeps the object in a valid state at all times.",hint:"Bundling data and methods together and restricting direct outside access.",level:"basic",codeExample:`class BankAccount:
    def __init__(self, bal): self._bal = bal
    def deposit(self, amt): self._bal += amt`},{question:"What is Abstraction in OOP?",shortAnswer:"Hiding internal implementation details and exposing only the essential, high-level features or operations to the caller.",explanation:"A driver presses the accelerator without needing to understand fuel-injection manifold dynamics.",hint:"Hiding internal complexity behind a clean public interface.",level:"basic",codeExample:"# Abstraction: user calls payment.process() without knowing backend bank protocols"},{question:"What is Inheritance in OOP?",shortAnswer:"A mechanism that allows a new class (subclass/child) to inherit attributes and methods from an existing class (superclass/parent), promoting code reuse and hierarchy.",explanation:"For example, SavingsAccount and CurrentAccount can both inherit core balance management from BankAccount.",hint:"Subclasses inherit and extend parent class behavior.",level:"basic",codeExample:`class SavingsAccount(BankAccount):
    def calculate_interest(self): return self._bal * 0.04`},{question:"What is Polymorphism in OOP?",shortAnswer:"The ability of different objects to respond to the same method call in ways specific to their individual types.",explanation:"Allows client code to treat diverse subclasses uniformly without writing complex if-else type checks.",hint:"Same method name behaving differently across multiple classes.",level:"basic",codeExample:`for shape in [Circle(), Square(), Triangle()]:
    shape.draw()  # Polymorphic invocation`},{question:"What is a major risk of managing state with plain dictionaries in procedural programming?",shortAnswer:"Any external function can directly modify or corrupt dictionary keys with invalid values (e.g. setting balance to -999999) because dictionaries lack invariant guards.",explanation:"Classes protect attributes using methods and properties that validate constraints before updating state.",hint:"Dictionaries cannot protect their internal keys from invalid mutation.",level:"moderate",codeExample:`acc = {'balance': 1000}
acc['balance'] = -500000  # Silent data corruption!`},{question:"What is an 'Invariant' in object-oriented class design?",shortAnswer:"A business rule or condition that must always remain true for an object throughout its entire lifecycle (e.g., student marks between 0 and 100).",explanation:"Encapsulation ensures that methods enforce invariants upon creation and every state update.",hint:"A rule that must always hold true for an object's state.",level:"moderate",codeExample:"# Invariant: if marks < 0 or marks > 100: raise ValueError"},{question:"What is the difference between a Class and an Object (Instance)?",shortAnswer:"A Class is a blueprint/template defining attributes and behaviors; an Object is a concrete realization of that blueprint residing at a specific memory address.",explanation:"Like an architectural blueprint (Class) versus a physical constructed building (Object).",hint:"Class = Blueprint; Object = Living memory instance.",level:"basic",codeExample:`# Class:  class Car: pass
# Object: my_car = Car()`},{question:"How does OOP improve code maintainability in large enterprise applications?",shortAnswer:"By localizing changes within specific classes, minimizing coupling between components, and enabling modular extensions via inheritance and polymorphism without breaking existing code.",explanation:"Follows the Open-Closed Principle (open for extension, closed for modification).",hint:"Localizes changes, decouples subsystems, and prevents ripple-effect bugs.",level:"moderate",codeExample:"# Adding a new CryptoPayment doesn't require modifying existing UPIPayment code"},{question:"Can Python support both Procedural and Object-Oriented programming?",shortAnswer:"Yes. Python is a multi-paradigm programming language supporting procedural, object-oriented, and functional styles.",explanation:"You can write simple scripts procedurally or design large enterprise systems with full OOP architectures.",hint:"Python is multi-paradigm and allows mixing styles as appropriate.",level:"basic",codeExample:"# Python seamlessly supports scripts, functions, and classes together"},{question:"What is 'Duck Typing' in Python's polymorphic philosophy?",shortAnswer:"'If it walks like a duck and quacks like a duck, it's a duck' — Python checks for the presence of methods at runtime rather than explicit type inheritance.",explanation:"Any object providing a .read() method can be treated as a stream, regardless of class hierarchy.",hint:"Checking object behavior/methods rather than explicit class types.",level:"moderate",codeExample:`def render(obj):
    obj.draw()  # Works for anything with a .draw() method`},{question:"What is the role of the 'self' parameter in Python class methods?",shortAnswer:"It represents the specific instance of the class upon which the method was called, allowing access to instance-specific attributes.",explanation:"Python passes the active object instance as the first argument automatically during method invocation.",hint:"Explicit reference to the current instance.",level:"basic",codeExample:`def get_name(self):
    return self.name`},{question:"What is the '__init__' method in a Python class?",shortAnswer:"The constructor / initializer method automatically executed when a new instance of a class is created to initialize its state.",explanation:"Sets initial instance attributes based on arguments passed during instantiation.",hint:"The instance initializer/constructor.",level:"basic",codeExample:`class Person:
    def __init__(self, name): self.name = name`},{question:"When is Procedural Programming preferred over Object-Oriented Programming?",shortAnswer:"For simple one-off scripts, mathematical calculations, linear data pipelines, or utilities where complex state management is unnecessary.",explanation:"Over-engineering a 10-line file conversion script with 5 classes adds unnecessary boilerplate.",hint:"For simple linear scripts and pure mathematical pipelines.",level:"moderate",codeExample:"# Simple ETL script: read_csv() -> clean() -> save_db()"},{question:"What is 'Coupling' and 'Cohesion' in software design?",shortAnswer:"Cohesion is how closely related the responsibilities inside a class are (high is good); Coupling is the degree of interdependence between classes (low is good).",explanation:"OOP aims for high cohesion (single responsibility) and loose coupling (decoupled dependencies).",hint:"High cohesion within classes, low coupling between classes.",level:"complex",codeExample:"# High cohesion: BankAccount handles only banking logic"},{question:"How does OOP prevent the 'Shotgun Surgery' code smell?",shortAnswer:"By grouping related logic and data into a single class so that a requirement change only requires modifying one class rather than 20 scattered functions.",explanation:"In procedural code, changing a data structure forces edits across all functions that touch it.",hint:"Changes are localized to a single class rather than scattered across files.",level:"complex",codeExample:"# Updating tax rules only modifies TaxEngine.calculate_tax()"},{question:"What is the difference between Public, Protected, and Private attributes in Python?",shortAnswer:"Public (name): accessible anywhere; Protected (_name): convention indicating internal use; Private (__name): name-mangled to prevent accidental override.",explanation:"Python relies on naming conventions rather than strict compiler enforcement.",hint:"public, _protected (convention), __private (name mangling).",level:"moderate",codeExample:`self.name = 'Pub'
self._name = 'Prot'
self.__name = 'Priv'`},{question:"What is the 'Single Responsibility Principle' (SRP) in OOP?",shortAnswer:"A class should have only one reason to change, meaning it should perform a single, well-defined domain responsibility.",explanation:"An Invoice class should calculate totals, but not send emails or handle database connections directly.",hint:"A class should do one thing and do it well.",level:"moderate",codeExample:"# Invoice handles calculations; EmailService handles sending emails"},{question:"How do domain objects interact in a real-world system?",shortAnswer:"By passing references to other objects, invoking methods on each other, and collaborating through well-defined public interfaces.",explanation:"For example, an Appointment object receives Doctor and Patient objects to complete a consultation transaction.",hint:"Objects collaborate by passing references and invoking methods.",level:"moderate",codeExample:"appointment = Appointment(doctor=doc, patient=pat)"},{question:"What is Method Overriding?",shortAnswer:"A subclass providing its own specific implementation of a method that is already defined in its parent superclass.",explanation:"Allows specialized subclasses to alter inherited behavior while keeping the same method signature.",hint:"Redefining a parent method in a child class.",level:"basic",codeExample:`class Dog(Animal):
    def speak(self): return 'Woof!'`},{question:"What is the 'super()' function used for in Python subclasses?",shortAnswer:"To delegate method calls to the parent superclass, commonly used inside __init__ to initialize inherited attributes.",explanation:"Ensures parent class setup logic executes before child class customizations.",hint:"Calls parent superclass methods.",level:"basic",codeExample:`class Student(Person):
    def __init__(self, name, roll):
        super().__init__(name)
        self.roll = roll`},{question:"Why are magic / dunder methods (like __str__ and __repr__) useful in Python OOP?",shortAnswer:"They allow custom class objects to integrate seamlessly with native Python language features like print(), len(), +, and equality checks.",explanation:"Provides pythonic syntax for user-defined types.",hint:"Enables custom objects to work with native Python operators and built-ins.",level:"moderate",codeExample:"def __str__(self): return f'Account #{self.acc_num}'"},{question:"What is the danger of deep inheritance trees in OOP?",shortAnswer:"They create brittle class hierarchies where changes to top-level base classes unexpectedly break distant subclasses; prefer composition over inheritance.",explanation:"Composition ('has-a') is often more flexible than deep inheritance ('is-a').",hint:"Brittle hierarchies and ripple-effect bugs; favor composition.",level:"complex",codeExample:"# Prefer Car has-a Engine over Car is-a Engine"},{question:"What is the ultimate goal of transitioning from Procedural to Object-Oriented thinking?",shortAnswer:"To conceptualize software not as a sequence of global state manipulations, but as a community of autonomous, self-governing objects collaborating via clean protocols.",explanation:"Enables scalable development of complex real-world software systems.",hint:"Viewing systems as cooperating autonomous entities with protected state.",level:"basic",codeExample:"# Think in terms of entities, invariants, and clean interfaces"}];function L(){const m=s.useRef([]),[o,h]=s.useState("paradigm"),[l,x]=s.useState("oop"),[c,d]=s.useState(5e3),[g,i]=s.useState(["Initial account balance: INR 5,000.00"]),[f,u]=s.useState(!1);s.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(b=>{b.isIntersecting&&b.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return m.current.forEach(n=>{n&&t.observe(n)}),()=>t.disconnect()},[]);const a=t=>{t&&!m.current.includes(t)&&m.current.push(t)},y=()=>{const t=c+2e3;d(t),i(n=>[`[DEPOSIT] +INR 2,000.00 | New Balance: INR ${t.toLocaleString()}`,...n.slice(0,4)])},_=()=>{if(c<1500){i(n=>["[BLOCKED] Insufficient funds for withdrawal of INR 1,500.00",...n.slice(0,4)]);return}const t=c-1500;d(t),i(n=>[`[WITHDRAW] -INR 1,500.00 | Remaining Balance: INR ${t.toLocaleString()}`,...n.slice(0,4)])},j=()=>{l==="procedural"?(d(-5e4),u(!0),i(t=>["[CRITICAL CORRUPTION] External code executed: account['balance'] = -50000 (No validation!)",...t.slice(0,4)])):i(t=>["[SECURITY GUARD] AttributeError: Cannot mutate private balance directly. Invariants preserved!",...t.slice(0,4)])},p=()=>{d(5e3),u(!1),i(["Account reset to initial balance: INR 5,000.00"])};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:a,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_001"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 0 • OOP Foundation"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Object-Oriented Programming (OOP) in Python"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["OOP Paradigm: ",e.jsx("span",{className:"text-teal-400",children:"Procedural"})," vs ",e.jsx("span",{className:"text-cyan-400",children:"Object-Oriented"})," Thinking"]}),e.jsx("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:"Unlock the mental model of Object-Oriented design: understand the critical transition from sequential procedural scripts to autonomous, self-validating entities, the Four Pillars of OOP (Encapsulation, Abstraction, Inheritance, Polymorphism), and state-invariant protection."}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🧠 Mental Model Shift (Verbs vs Nouns)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🏛️ The 4 Pillars of OOP"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Encapsulation & State Protection"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🧩 Domain Entity Modeling"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚖️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Fundamental Paradigm Shift"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["In traditional ",e.jsx("strong",{children:"Procedural Programming (POP)"}),", software is organized as a linear sequence of functions acting on detached, naked data structures (like global variables or dictionaries). In ",e.jsx("strong",{children:"Object-Oriented Programming (OOP)"}),", data (state) and functions (behavior) are bundled together into cohesive, autonomous units called ",e.jsx("strong",{children:"Objects"}),":"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base mb-2",children:[e.jsx("span",{children:"📜"}),' Procedural (POP): "Verbs on Naked Data"']}),e.jsxs("div",{className:"text-xs text-slate-300 space-y-1.5 leading-relaxed",children:[e.jsxs("div",{children:["• ",e.jsx("strong",{children:"Focus:"})," Step-by-step algorithms (",e.jsx("code",{className:"text-rose-300",children:"deposit(acc, 500)"}),")."]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"Data:"})," Naked dictionaries with zero built-in validation."]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"Flaw:"})," Any rogue function can corrupt data (",e.jsx("code",{className:"text-rose-400",children:"acc['bal'] = -99999"}),")."]})]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsxs("div",{className:"flex items-center gap-2 text-teal-400 font-bold text-base mb-2",children:[e.jsx("span",{children:"🏛️"}),' Object-Oriented (OOP): "Living Entities"']}),e.jsxs("div",{className:"text-xs text-slate-300 space-y-1.5 leading-relaxed",children:[e.jsxs("div",{children:["• ",e.jsx("strong",{children:"Focus:"})," Self-governing domain objects (",e.jsx("code",{className:"text-teal-300",children:"acc.deposit(500)"}),")."]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"Data:"})," Encapsulated behind validated methods and properties."]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"Benefit:"})," Invariants are protected; external corruption is impossible!"]})]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The OOP Mental Model"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Instead of asking ",e.jsx("em",{children:'"What sequence of steps must my code execute on raw variables?"'}),", ask: ",e.jsx("strong",{children:'"What autonomous entities exist in my domain, what state do they own, and how do they collaborate?"'})]})]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing OOP Architecture & The Four Pillars"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>h("paradigm"),className:r("px-3 py-1.5 rounded-lg transition-all",o==="paradigm"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"POP vs OOP Architecture"}),e.jsx("button",{onClick:()=>h("fourpillars"),className:r("px-3 py-1.5 rounded-lg transition-all",o==="fourpillars"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"The Four Pillars"}),e.jsx("button",{onClick:()=>h("lifecycle"),className:r("px-3 py-1.5 rounded-lg transition-all",o==="lifecycle"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Class Blueprint vs Instances"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining state cohesion, object instantiation pipelines, and polymorphic dispatch:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:o==="paradigm"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"DECOUPLED PROCEDURAL STATE VS ENCAPSULATED OOP ENTITY"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"13",fontWeight:"bold",children:"Procedural Paradigm (Scattered State)"}),e.jsx("rect",{x:"20",y:"55",width:"160",height:"70",rx:"4",fill:"#881337",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"80",fill:"#ffe4e6",fontSize:"11 font-mono",children:"account_dict"}),e.jsx("text",{x:"30",y:"105",fill:"#fca5a5",fontSize:"10 font-mono",children:"balance: 5000"}),e.jsx("rect",{x:"210",y:"55",width:"160",height:"70",rx:"4",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"220",y:"80",fill:"#c4b5fd",fontSize:"11 font-mono",children:"deposit(acc, amt)"}),e.jsx("text",{x:"220",y:"105",fill:"#cbd5e1",fontSize:"10 font-mono",children:"withdraw(acc, amt)"}),e.jsx("text",{x:"20",y:"160",fill:"#fca5a5",fontSize:"11",children:"❌ Data is detached from functions"}),e.jsx("text",{x:"20",y:"185",fill:"#fca5a5",fontSize:"11",children:"❌ Anyone can mutate account_dict directly!"}),e.jsx("text",{x:"20",y:"210",fill:"#fda4af",fontSize:"11 font-bold",children:"Risk: Silent Data Corruption"})]}),e.jsxs("g",{transform:"translate(450, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"Object-Oriented Paradigm (Encapsulated)"}),e.jsx("rect",{x:"20",y:"55",width:"350",height:"90",rx:"6",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"35",y:"80",fill:"#34d399",fontSize:"12 font-mono font-bold",children:"class BankAccount"}),e.jsx("text",{x:"35",y:"105",fill:"#a7f3d0",fontSize:"10 font-mono",children:"State: _balance (Private & Protected)"}),e.jsx("text",{x:"35",y:"125",fill:"#a7f3d0",fontSize:"10 font-mono",children:"Methods: deposit(), withdraw() (Validated)"}),e.jsx("text",{x:"20",y:"175",fill:"#ecfdf5",fontSize:"11",children:"✓ State and behavior are unified into one unit"}),e.jsx("text",{x:"20",y:"200",fill:"#ecfdf5",fontSize:"11",children:"✓ Internal state cannot be corrupted from outside"}),e.jsx("text",{x:"20",y:"225",fill:"#34d399",fontSize:"11 font-bold",children:"Result: 100% Invariant Safety"})]})]}):o==="fourpillars"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"THE FOUR FOUNDATIONAL PILLARS OF OBJECT-ORIENTED PROGRAMMING"}),e.jsxs("g",{transform:"translate(30, 60)",children:[e.jsx("rect",{x:"0",y:"0",width:"180",height:"220",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"13",fontWeight:"bold",children:"1. Encapsulation"}),e.jsx("text",{x:"15",y:"60",fill:"#cbd5e1",fontSize:"10",children:"• Data Hiding"}),e.jsx("text",{x:"15",y:"80",fill:"#cbd5e1",fontSize:"10",children:"• Private _attributes"}),e.jsx("text",{x:"15",y:"100",fill:"#cbd5e1",fontSize:"10",children:"• Getter / Setter"}),e.jsx("text",{x:"15",y:"130",fill:"#34d399",fontSize:"10 font-bold",children:"Goal: Protect State"}),e.jsx("rect",{x:"210",y:"0",width:"180",height:"220",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"225",y:"30",fill:"#a5f3fc",fontSize:"13",fontWeight:"bold",children:"2. Abstraction"}),e.jsx("text",{x:"225",y:"60",fill:"#cbd5e1",fontSize:"10",children:"• Hide Complexity"}),e.jsx("text",{x:"225",y:"80",fill:"#cbd5e1",fontSize:"10",children:"• Expose Simple APIs"}),e.jsx("text",{x:"225",y:"100",fill:"#cbd5e1",fontSize:"10",children:"• Abstract Base Classes"}),e.jsx("text",{x:"225",y:"130",fill:"#38bdf8",fontSize:"10 font-bold",children:"Goal: Reduce Cognitive Load"}),e.jsx("rect",{x:"420",y:"0",width:"180",height:"220",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"435",y:"30",fill:"#c4b5fd",fontSize:"13",fontWeight:"bold",children:"3. Inheritance"}),e.jsx("text",{x:"435",y:"60",fill:"#cbd5e1",fontSize:"10",children:"• Code Reuse"}),e.jsx("text",{x:"435",y:"80",fill:"#cbd5e1",fontSize:"10",children:"• Subclassing"}),e.jsx("text",{x:"435",y:"100",fill:"#cbd5e1",fontSize:"10",children:"• super() Calls"}),e.jsx("text",{x:"435",y:"130",fill:"#c084fc",fontSize:"10 font-bold",children:"Goal: Eliminate Duplication"}),e.jsx("rect",{x:"630",y:"0",width:"180",height:"220",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"645",y:"30",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"4. Polymorphism"}),e.jsx("text",{x:"645",y:"60",fill:"#cbd5e1",fontSize:"10",children:"• Duck Typing"}),e.jsx("text",{x:"645",y:"80",fill:"#cbd5e1",fontSize:"10",children:"• Method Overriding"}),e.jsx("text",{x:"645",y:"100",fill:"#cbd5e1",fontSize:"10",children:"• Uniform Protocol"}),e.jsx("text",{x:"645",y:"130",fill:"#34d399",fontSize:"10 font-bold",children:"Goal: Flexible Extension"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"CLASS BLUEPRINT VS INDEPENDENT MEMORY INSTANCES"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"260",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"13",fontWeight:"bold",children:"Class: BankAccount (Blueprint)"}),e.jsx("text",{x:"20",y:"65",fill:"#ecfdf5",fontSize:"11 font-mono",children:"def __init__(self, name):"}),e.jsx("text",{x:"20",y:"85",fill:"#ecfdf5",fontSize:"11 font-mono",children:"    self.name = name"}),e.jsx("text",{x:"20",y:"105",fill:"#ecfdf5",fontSize:"11 font-mono",children:"    self._bal = 0.0"}),e.jsx("text",{x:"20",y:"135",fill:"#ecfdf5",fontSize:"11 font-mono",children:"def deposit(self, amt): ..."}),e.jsx("text",{x:"20",y:"155",fill:"#ecfdf5",fontSize:"11 font-mono",children:"def withdraw(self, amt): ..."}),e.jsx("rect",{x:"20",y:"185",width:"220",height:"35",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"207",fill:"#34d399",fontSize:"10 font-bold",children:"Defines Schema & Logic"})]}),e.jsxs("g",{transform:"translate(305, 140)",children:[e.jsx("text",{x:"10",y:"30",fill:"#38bdf8",fontSize:"24",fontWeight:"bold",children:"→"}),e.jsx("text",{x:"-5",y:"55",fill:"#38bdf8",fontSize:"10 font-mono",children:"Instantiates"})]}),e.jsxs("g",{transform:"translate(390, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"220",height:"110",rx:"6",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"15",y:"25",fill:"#c4b5fd",fontSize:"11 font-bold",children:"Instance 1: acc1 (0x7fa2)"}),e.jsx("text",{x:"15",y:"50",fill:"#cbd5e1",fontSize:"10 font-mono",children:"name: 'Debanjan'"}),e.jsx("text",{x:"15",y:"70",fill:"#cbd5e1",fontSize:"10 font-mono",children:"_bal: 12,500.00"}),e.jsx("text",{x:"15",y:"95",fill:"#a7f3d0",fontSize:"9 font-bold",children:"Independent Memory Heap"}),e.jsx("rect",{x:"240",y:"0",width:"220",height:"110",rx:"6",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"255",y:"25",fill:"#a5f3fc",fontSize:"11 font-bold",children:"Instance 2: acc2 (0x9bc1)"}),e.jsx("text",{x:"255",y:"50",fill:"#cbd5e1",fontSize:"10 font-mono",children:"name: 'Priyanka'"}),e.jsx("text",{x:"255",y:"70",fill:"#cbd5e1",fontSize:"10 font-mono",children:"_bal: 48,000.00"}),e.jsx("text",{x:"255",y:"95",fill:"#38bdf8",fontSize:"9 font-bold",children:"Independent Memory Heap"}),e.jsx("rect",{x:"0",y:"130",width:"460",height:"90",rx:"6",fill:"#090d16",stroke:"#334155"}),e.jsx("text",{x:"15",y:"155",fill:"#f8fafc",fontSize:"11 font-bold",children:"Shared Methods, Isolated Attributes:"}),e.jsx("text",{x:"15",y:"180",fill:"#cbd5e1",fontSize:"10",children:"Both objects share the exact same method code in memory,"}),e.jsx("text",{x:"15",y:"200",fill:"#cbd5e1",fontSize:"10",children:"but maintain 100% separate, isolated state attributes!"})]})]})})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Paradigm Simulator: Procedural vs OOP"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Test deposit, withdrawal, and malicious external state mutation attacks in real time to experience why OOP encapsulation is critical:"}),e.jsxs("div",{className:"flex flex-wrap gap-2 mb-6",children:[e.jsx("button",{onClick:()=>{x("procedural"),p()},className:r("py-2.5 px-4 rounded-xl text-xs sm:text-sm font-mono font-bold border transition-all",l==="procedural"?"bg-rose-950 border-rose-500 text-rose-300 shadow-md shadow-rose-950":"bg-slate-950 border-slate-800 text-slate-400 hover:text-white"),children:"📜 Procedural Paradigm (Naked Dictionary)"}),e.jsx("button",{onClick:()=>{x("oop"),p()},className:r("py-2.5 px-4 rounded-xl text-xs sm:text-sm font-mono font-bold border transition-all",l==="oop"?"bg-teal-950 border-teal-500 text-teal-300 shadow-md shadow-teal-950":"bg-slate-950 border-slate-800 text-slate-400 hover:text-white"),children:"🏛️ Object-Oriented Paradigm (Encapsulated Class)"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block font-bold",children:"Account Actions"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{onClick:y,className:"bg-teal-900/60 hover:bg-teal-800 text-teal-200 border border-teal-700 px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all",children:"Deposit INR 2,000"}),e.jsx("button",{onClick:_,className:"bg-cyan-900/60 hover:bg-cyan-800 text-cyan-200 border border-cyan-700 px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all",children:"Withdraw INR 1,500"}),e.jsx("button",{onClick:j,className:"bg-rose-900/60 hover:bg-rose-800 text-rose-200 border border-rose-700 px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all",children:"⚠️ Mutate State (-50k)"}),e.jsx("button",{onClick:p,className:"bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 px-4 py-2 rounded-lg text-xs font-mono transition-all",children:"Reset"})]}),e.jsxs("div",{className:r("p-4 rounded-xl border",f?"bg-rose-950/50 border-rose-500 text-rose-300":"bg-slate-900 border-slate-800 text-emerald-300"),children:[e.jsxs("span",{className:"text-xs font-mono uppercase tracking-wider block font-bold text-slate-400 mb-1",children:["Active Account State (",l.toUpperCase(),")"]}),e.jsxs("div",{className:"text-2xl font-mono font-bold",children:["INR ",c.toLocaleString("en-IN",{minimumFractionDigits:2})]}),f&&e.jsx("div",{className:"text-xs font-bold text-rose-400 mt-2",children:"⚠️ CRITICAL CORRUPTION: Balance was mutated illegally without passing through validation!"})]})]}),e.jsxs("div",{className:"space-y-2 flex flex-col justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block",children:"Execution Log"}),e.jsx("div",{className:"p-4 bg-slate-900 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 space-y-1.5 overflow-y-auto max-h-48 flex-1",children:g.map((t,n)=>e.jsxs("div",{className:r(t.includes("[CRITICAL")?"text-rose-400 font-bold":t.includes("[SECURITY")?"text-teal-300 font-bold":t.includes("[DEPOSIT")?"text-emerald-300":t.includes("[WITHDRAW")?"text-cyan-300":"text-slate-400"),children:["> ",t]},n))})]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Procedural vs Object-Oriented Comparison Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Dimension"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Procedural Programming (POP)"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Object-Oriented Programming (OOP)"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"Core Unit"}),e.jsx("td",{className:"py-3 px-4",children:"Functions / Procedures"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-bold",children:"Objects & Classes"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"Data Placement"}),e.jsx("td",{className:"py-3 px-4",children:"Separated into raw dictionaries, tuples, or globals"}),e.jsx("td",{className:"py-3 px-4 text-cyan-300",children:"Cohesively encapsulated inside classes"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Data Protection"}),e.jsx("td",{className:"py-3 px-4 text-rose-400",children:"None (open to direct external mutation)"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-bold",children:"High (private attributes & properties)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"Code Extensibility"}),e.jsx("td",{className:"py-3 px-4",children:"Modifying shared functions risks breaking callers"}),e.jsx("td",{className:"py-3 px-4 text-teal-300",children:"Clean inheritance & polymorphism"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-300 font-semibold",children:"Best Suited For"}),e.jsx("td",{className:"py-3 px-4",children:"Simple one-off scripts, mathematical calculations"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-bold",children:"Complex enterprise domain applications"})]})]})]})})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating the paradigm shift, the Four Pillars, state cohesion, and multi-object domain modeling:"}),e.jsx(P,{files:[{filename:"procedural_vs_oop_comparison.py",code:N,description:"Direct comparison between procedural banking dicts and encapsulated BankAccount classes with invariant guards."},{filename:"the_four_pillars_of_oop.py",code:A,description:"Encapsulation, Abstraction, Inheritance, and Polymorphism in an enterprise PaymentProcessor architecture."},{filename:"state_and_behavior_bundling.py",code:E,description:"Self-validating StudentScoreCard class demonstrating state and behavior cohesion with strict score validation."},{filename:"hospital_management_oop_case_study.py",code:S,description:"Enterprise Clinic Suite modeling Doctors, Patients, and Appointments with multi-object collaboration."}]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"}),' Trap 1: The "Anemic Domain Model" Anti-Pattern']}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Creating classes that act solely as naked data holders while placing all business logic in external helper functions, defeating the purpose of OOP!"}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Move operations directly into the class as methods (",e.jsx("code",{className:"text-emerald-300",children:"acc.withdraw()"}),")."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Over-Engineering Simple Scripts"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Creating 5 classes with deep inheritance hierarchies for a 15-line CSV data cleanup script adds unnecessary mental overhead."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Use procedural functions for simple scripts; use OOP for domain models."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Deep Inheritance Hierarchies"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Nesting classes 6 levels deep creates brittle architectures where modifying a base class breaks unrelated leaf subclasses."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Principle:"}),' Favor object composition ("has-a") over inheritance ("is-a").']})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Forgetting `self` in Method Definitions"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Defining ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"def deposit(amount):"})," causes ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"TypeError: deposit() takes 1 positional argument but 2 were given"}),"!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always include ",e.jsx("code",{className:"text-emerald-300",children:"self"})," as the first parameter in instance methods."]})]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering procedural vs OOP differences, the Four Pillars, state encapsulation, and domain design:"}),e.jsx(w,{questions:I})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with paradigm comparison tables, the Four Pillars summary, and architectural guidelines:"}),e.jsx("div",{className:"mb-10",children:e.jsx(v,{content:C,filename:"python_topic0_oop_paradigm_procedural_vs_oop_notes.txt",title:"Print Topic 0 Study Notes"})}),e.jsx(O,{})]})]})]})}export{L as default};
