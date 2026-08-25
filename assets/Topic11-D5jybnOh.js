import{b as l,j as e,bg as s}from"./vendor-react-core-Doz9nIC6.js";import{P as u}from"./PythonFileLoader-hCi5osN-.js";import{P as f}from"./PlainTextPrint-C08xhKA4.js";import{F as y}from"./FAQTemplate-CkSqDH4B.js";import{T as b}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const g=`# topic11_files/polymorphism_and_duck_typing_fundamentals.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Polymorphism & Duck Typing in Python\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 11 - File 1: Polymorphism & Duck Typing Fundamentals\r
Demonstrates:\r
  1. What is Polymorphism: "Many forms" - uniform interface for heterogeneous types\r
  2. Duck Typing: "If it walks like a duck and quacks like a duck, it's a duck"\r
  3. Dynamic method dispatch without requiring explicit base class inheritance\r
  4. Polymorphic collections and unified caller loops\r
"""\r
\r
from typing import List, Any\r
\r
# =====================================================================\r
# 3 COMPLETELY UNRELATED CLASSES (Zero Shared Base Class!)\r
# =====================================================================\r
class PDFReportGenerator:\r
    """Unrelated class 1."""\r
    def generate(self, title: str) -> str:\r
        return f"[PDF RENDERER] Compiling vector document: '{title}.pdf' (Binary Stream)"\r
\r
\r
class ExcelSpreadsheetGenerator:\r
    """Unrelated class 2."""\r
    def generate(self, title: str) -> str:\r
        return f"[EXCEL RENDERER] Generating multi-tab workbook: '{title}.xlsx' (XML/ZIP)"\r
\r
\r
class HTMLWebReportGenerator:\r
    """Unrelated class 3."""\r
    def generate(self, title: str) -> str:\r
        return f"[HTML RENDERER] Rendering responsive web page: '<h1>{title}</h1>'"\r
\r
\r
# =====================================================================\r
# POLYMORPHIC CALLER (Relies on Duck Typing)\r
# =====================================================================\r
def publish_institutional_report(generators: List[Any], document_title: str):\r
    """Polymorphic function that accepts ANY object implementing \`.generate()\`."""\r
    print(f"Publishing Document: '{document_title}' across polymorphic engines:\\n")\r
    for engine in generators:\r
        # Duck Typing in action: Python simply calls \`.generate()\` without checking type!\r
        output = engine.generate(document_title)\r
        print(f"  * Engine [{engine.__class__.__name__}]:\\n    --> {output}")\r
\r
\r
def demonstrate_polymorphic_duck_typing():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - POLYMORPHISM & DUCK TYPING FUNDAMENTALS")\r
    print("=" * 70)\r
\r
    # Heterogeneous collection of generators\r
    engines = [\r
        PDFReportGenerator(),\r
        ExcelSpreadsheetGenerator(),\r
        HTMLWebReportGenerator()\r
    ]\r
\r
    publish_institutional_report(engines, "Annual GST & Corporate Tax Audit 2026")\r
\r
    print(r"""\r
Core Takeaway:\r
  In Python, polymorphism does NOT require rigid abstract base classes or\r
  shared inheritance trees. As long as an object satisfies the expected interface\r
  (i.e., provides the required \`.generate()\` method), Python executes it cleanly!\r
""")\r
    print("[PASSED] Polymorphism & Duck Typing Demonstrated Successfully.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_polymorphic_duck_typing()\r
`,_=`# topic11_files/operator_overloading_polymorphism.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Polymorphism & Duck Typing in Python\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 11 - File 2: Operator Overloading & Built-in Polymorphism\r
Demonstrates:\r
  1. Built-in operator polymorphism (\`+\`, \`*\`, \`len()\`) across native types\r
  2. Custom operator polymorphism via magic methods (\`__add__\`, \`__sub__\`, \`__mul__\`, \`__eq__\`)\r
  3. Building a production \`MoneyINR\` financial class with polymorphic arithmetic\r
"""\r
\r
from typing import Union\r
\r
class MoneyINR:\r
    """Financial value object supporting polymorphic arithmetic and equality."""\r
\r
    def __init__(self, amount: Union[int, float]):\r
        self.amount = round(float(amount), 2)\r
\r
    # 1. Polymorphic Addition (+)\r
    def __add__(self, other: Union["MoneyINR", int, float]) -> "MoneyINR":\r
        if isinstance(other, MoneyINR):\r
            return MoneyINR(self.amount + other.amount)\r
        elif isinstance(other, (int, float)):\r
            return MoneyINR(self.amount + float(other))\r
        return NotImplemented\r
\r
    # 2. Polymorphic Subtraction (-)\r
    def __sub__(self, other: Union["MoneyINR", int, float]) -> "MoneyINR":\r
        if isinstance(other, MoneyINR):\r
            return MoneyINR(self.amount - other.amount)\r
        elif isinstance(other, (int, float)):\r
            return MoneyINR(self.amount - float(other))\r
        return NotImplemented\r
\r
    # 3. Polymorphic Multiplication (*)\r
    def __mul__(self, multiplier: Union[int, float]) -> "MoneyINR":\r
        if isinstance(multiplier, (int, float)):\r
            return MoneyINR(self.amount * multiplier)\r
        return NotImplemented\r
\r
    # 4. Polymorphic Equality (==)\r
    def __eq__(self, other: object) -> bool:\r
        if isinstance(other, MoneyINR):\r
            return self.amount == other.amount\r
        elif isinstance(other, (int, float)):\r
            return self.amount == float(other)\r
        return False\r
\r
    def __repr__(self) -> str:\r
        return f"MoneyINR(₹{self.amount:,.2f})"\r
\r
    def __str__(self) -> str:\r
        return f"INR {self.amount:,.2f}"\r
\r
\r
def demonstrate_operator_polymorphism():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - OPERATOR OVERLOADING & POLYMORPHISM")\r
    print("=" * 70)\r
\r
    # 1. Built-in Polymorphic '+' operator across built-in types:\r
    print("1. Built-in '+' Operator Polymorphism:")\r
    print(f"   * Integers: 10 + 20          = {10 + 20}")\r
    print(f"   * Strings : 'Hello ' + 'World' = {'Hello ' + 'World'}")\r
    print(f"   * Lists   : [1, 2] + [3, 4]    = {[1, 2] + [3, 4]}\\n")\r
\r
    # 2. Custom MoneyINR Operator Polymorphism:\r
    m1 = MoneyINR(18000.0)\r
    m2 = MoneyINR(4500.0)\r
\r
    print("2. Custom Domain Operator Polymorphism (MoneyINR):")\r
    print(f"   m1 = {m1}, m2 = {m2}")\r
    print(f"   * Addition (m1 + m2)     : {m1 + m2}")\r
    print(f"   * Subtraction (m1 - m2)  : {m1 - m2}")\r
    print(f"   * Scaling (m1 * 1.18 GST): {m1 * 1.18}")\r
    print(f"   * Equality (m1 == 18000) : {m1 == 18000.0}")\r
\r
    print("\\n[PASSED] Operator Polymorphism Demonstrated Successfully.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_operator_polymorphism()\r
`,j=`# topic11_files/protocols_and_structural_subtyping.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Polymorphism & Duck Typing in Python\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 11 - File 3: Protocols & Structural Subtyping (PEP 544)\r
Demonstrates:\r
  1. Static Duck Typing with \`typing.Protocol\` (Python 3.8+)\r
  2. Nominal Subtyping (Inheritance) vs Structural Subtyping (Shape/Interface matching)\r
  3. Using \`@runtime_checkable\` for runtime \`isinstance()\` validation without inheritance\r
"""\r
\r
from typing import Protocol, runtime_checkable\r
\r
# =====================================================================\r
# 1. THE PROTOCOL SPECIFICATION (Structural Interface Contract)\r
# =====================================================================\r
@runtime_checkable\r
class AutoPayable(Protocol):\r
    """Protocol defining any entity capable of processing recurring fee charges."""\r
    def process_charge(self, amount: float) -> bool:\r
        """Must accept an amount and return a boolean success flag."""\r
        ...\r
\r
\r
# =====================================================================\r
# 2. IMPLEMENTING CLASSES (Zero Inheritance from AutoPayable!)\r
# =====================================================================\r
class BankAutoDebitAccount:\r
    """Class 1: Satisfies AutoPayable structurally."""\r
    def __init__(self, account_no: str):\r
        self.account_no = account_no\r
\r
    def process_charge(self, amount: float) -> bool:\r
        print(f"  [NACH ECS DEBIT] Debited INR {amount:,.2f} from Account #{self.account_no}")\r
        return True\r
\r
\r
class CreditCardSubscription:\r
    """Class 2: Satisfies AutoPayable structurally."""\r
    def __init__(self, card_last_4: str):\r
        self.card_last_4 = card_last_4\r
\r
    def process_charge(self, amount: float) -> bool:\r
        print(f"  [CREDIT CARD AUTO-CHARGE] Charged INR {amount:,.2f} on Card ****{self.card_last_4}")\r
        return True\r
\r
\r
class IncompletePaymentMethod:\r
    """Class 3: Does NOT satisfy AutoPayable (Missing process_charge method!)."""\r
    def make_cash_payment(self):\r
        print("  [CASH] Handed over cash.")\r
\r
\r
def process_recurring_subscription(payer: AutoPayable, fee_amount: float):\r
    """Accepts any object conforming to the AutoPayable protocol."""\r
    # Runtime checkable protocol check:\r
    if not isinstance(payer, AutoPayable):\r
        raise TypeError(f"Object of type '{type(payer).__name__}' does not conform to the AutoPayable Protocol!")\r
\r
    return payer.process_charge(fee_amount)\r
\r
\r
def demonstrate_protocols():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - PROTOCOLS & STRUCTURAL SUBTYPING (PEP 544)")\r
    print("=" * 70)\r
\r
    bank = BankAutoDebitAccount("SBIN-2026-9900")\r
    card = CreditCardSubscription("4422")\r
    cash = IncompletePaymentMethod()\r
\r
    # 1. Bank Account Charging\r
    print("1. Charging Bank Account:")\r
    process_recurring_subscription(bank, 4500.0)\r
\r
    # 2. Credit Card Charging\r
    print("\\n2. Charging Credit Card:")\r
    process_recurring_subscription(card, 4500.0)\r
\r
    # 3. Incompatible Method Validation\r
    print("\\n3. Testing Incompatible Cash Payment Method:")\r
    try:\r
        process_recurring_subscription(cash, 4500.0)\r
    except TypeError as err:\r
        print(f"   [BLOCKED] TypeError: {err}")\r
\r
    print(r"""\r
Summary:\r
  Neither \`BankAutoDebitAccount\` nor \`CreditCardSubscription\` inherited from \`AutoPayable\`.\r
  Yet, because their method signatures match the protocol shape, Python and mypy treat\r
  them as valid subtypes (Static & Runtime Duck Typing!).\r
""")\r
    print("[PASSED] Protocols & Structural Subtyping Demonstrated Successfully.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_protocols()\r
`,P=`# topic11_files/multichannel_notification_and_payment_engine.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Polymorphism & Duck Typing in Python\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 11 - File 4: Multi-Channel Gateway Dispatcher (Production Case Study)\r
Demonstrates:\r
  1. Unified polymorphic notification and payment processing engine\r
  2. Polymorphic adapters for WhatsApp, Razorpay UPI, Stripe, and SMS Fallback\r
  3. Eliminating fragile \`if/elif type(x) == Y:\` checks using clean duck typing\r
"""\r
\r
from typing import List, Dict, Any\r
\r
# =====================================================================\r
# POLYMORPHIC ADAPTER 1: RAZORPAY UPI GATEWAY\r
# =====================================================================\r
class RazorpayUpiGateway:\r
    def process_transaction(self, student_id: str, amount_inr: float) -> Dict[str, Any]:\r
        return {\r
            "gateway": "Razorpay UPI / BharatPe",\r
            "student_id": student_id,\r
            "amount": amount_inr,\r
            "reference_id": f"RZP-{student_id}-992",\r
            "status": "SETTLED"\r
        }\r
\r
    def dispatch_alert(self, destination: str, message: str) -> str:\r
        return f"[WhatsApp API -> {destination}] {message}"\r
\r
\r
# =====================================================================\r
# POLYMORPHIC ADAPTER 2: STRIPE INTERNATIONAL CARD GATEWAY\r
# =====================================================================\r
class StripeInternationalGateway:\r
    def process_transaction(self, student_id: str, amount_inr: float) -> Dict[str, Any]:\r
        usd_amount = amount_inr / 85.0  # Simulated USD conversion\r
        return {\r
            "gateway": "Stripe International Payments",\r
            "student_id": student_id,\r
            "amount": amount_inr,\r
            "reference_id": f"STRIPE-INT-{student_id}-X4",\r
            "status": f"SETTLED (\${usd_amount:.2f} USD)"\r
        }\r
\r
    def dispatch_alert(self, destination: str, message: str) -> str:\r
        return f"[Email SMTP Service -> {destination}] Subject: Transaction Confirmation | Body: {message}"\r
\r
\r
# =====================================================================\r
# POLYMORPHIC ADAPTER 3: OFFLINE CASH & SMS RECEIPT\r
# =====================================================================\r
class OfflineCampusCashGateway:\r
    def process_transaction(self, student_id: str, amount_inr: float) -> Dict[str, Any]:\r
        return {\r
            "gateway": "Barrackpore Campus Cash Desk",\r
            "student_id": student_id,\r
            "amount": amount_inr,\r
            "reference_id": f"CAMPUS-CASH-{student_id}-01",\r
            "status": "CASHIER_VERIFIED"\r
        }\r
\r
    def dispatch_alert(self, destination: str, message: str) -> str:\r
        return f"[Telecom SMS Gateway -> {destination}] {message}"\r
\r
\r
# =====================================================================\r
# UNIFIED DISPATCHER HUB (Pure Duck Typing)\r
# =====================================================================\r
class UnifiedInstitutionalHub:\r
    """Processes any gateway adhering to the transaction and alert duck contract."""\r
\r
    def execute_student_enrollment(self, gateway_adapter: Any, student_id: str, amount: float, contact: str):\r
        print(f"\\n--- INITIATING ENROLLMENT FOR {student_id} ---")\r
        \r
        # 1. Polymorphic Transaction Call (No type checks!):\r
        tx_result = gateway_adapter.process_transaction(student_id, amount)\r
        print(f"  * Transaction Status : {tx_result['status']}")\r
        print(f"  * Gateway Used       : {tx_result['gateway']}")\r
        print(f"  * Reference ID       : {tx_result['reference_id']}")\r
\r
        # 2. Polymorphic Notification Call:\r
        receipt_msg = f"Payment of INR {amount:,.2f} verified. Ref: {tx_result['reference_id']}. Welcome to Coder & AccoTax!"\r
        alert_result = gateway_adapter.dispatch_alert(contact, receipt_msg)\r
        print(f"  * Notification Sent  : {alert_result}")\r
\r
\r
def run_polymorphic_gateway_demo():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - MULTI-CHANNEL POLYMORPHIC GATEWAY DEMO")\r
    print("=" * 70)\r
\r
    hub = UnifiedInstitutionalHub()\r
\r
    # 1. Process via Razorpay UPI\r
    hub.execute_student_enrollment(\r
        gateway_adapter=RazorpayUpiGateway(),\r
        student_id="STU-901",\r
        amount=18000.0,\r
        contact="+91-9830011111"\r
    )\r
\r
    # 2. Process via Stripe International\r
    hub.execute_student_enrollment(\r
        gateway_adapter=StripeInternationalGateway(),\r
        student_id="STU-INT-404",\r
        amount=25000.0,\r
        contact="student.overseas@codernaccotax.co.in"\r
    )\r
\r
    # 3. Process via Campus Cash\r
    hub.execute_student_enrollment(\r
        gateway_adapter=OfflineCampusCashGateway(),\r
        student_id="STU-102",\r
        amount=12000.0,\r
        contact="+91-9830022222"\r
    )\r
\r
    print("\\n[PASSED] Multi-Channel Polymorphic Gateway Completed Successfully.")\r
\r
\r
if __name__ == "__main__":\r
    run_polymorphic_gateway_demo()\r
`,N=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_001: OBJECT-ORIENTED PYTHON\r
            TOPIC 11: POLYMORPHISM, DUCK TYPING & TYPING PROTOCOLS\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. THE DUCK TYPING PHILOSOPHY\r
--------------------------------------------------------------------------------\r
  "If it walks like a duck and quacks like a duck, it's a duck."\r
\r
  In Python, polymorphism does NOT require classes to inherit from a common\r
  parent. As long as an object implements the required methods, it can be\r
  passed to any function expecting that behavior:\r
\r
  def process(engine):\r
      engine.generate("Report")  # Works with PDF, Excel, HTML, etc.!\r
\r
--------------------------------------------------------------------------------\r
2. NOMINAL SUBTYPING VS STRUCTURAL PROTOCOLS (PEP 544)\r
--------------------------------------------------------------------------------\r
  • Nominal (Inheritance): class Dog(Animal) -> Subtype by NAME\r
  • Structural (Protocol): class AutoPayable(Protocol): -> Subtype by SHAPE\r
\r
  @runtime_checkable\r
  class AutoPayable(Protocol):\r
      def process_charge(self, amount: float) -> bool: ...\r
\r
--------------------------------------------------------------------------------\r
3. OPERATOR POLYMORPHISM\r
--------------------------------------------------------------------------------\r
  Define \`__add__\`, \`__sub__\`, \`__mul__\` to allow custom domain objects\r
  to respond polymorphically to standard arithmetic operators.\r
\r
================================================================================\r
             END OF STUDY NOTE • TOPIC 11: POLYMORPHISM & DUCK TYPING\r
================================================================================\r
`,w=[{question:"What is Polymorphism in Python?",shortAnswer:"The ability of different classes to respond to the same method call or operator in their own specific way through a uniform interface.",explanation:"Allows writing generic code that works seamlessly across diverse object types.",hint:"The ability for different object types to respond to the same interface.",level:"basic",codeExample:`for shape in [Circle(), Square()]:
    shape.draw()`},{question:"What is 'Duck Typing' in Python?",shortAnswer:"A dynamic typing philosophy where an object's suitability is determined by the presence of specific methods and properties, rather than its explicit inheritance lineage ('If it walks like a duck and quacks like a duck, it's a duck').",explanation:"Core foundation of Python's flexible, loosely coupled architecture.",hint:"An object is judged by its methods/attributes rather than its class name.",level:"basic",codeExample:`def render(obj):
    obj.generate()  # Works for any object with generate()`},{question:"How does Python polymorphism differ from Java or C++ polymorphism?",shortAnswer:"Java and C++ require explicit nominal subtyping (inheriting from an abstract class or implementing an interface), whereas Python uses duck typing and structural subtyping where no shared inheritance is required.",explanation:"Eliminates rigid nominal class hierarchies.",hint:"Python uses duck typing without requiring shared base interfaces.",level:"moderate",codeExample:"# Python: No 'implements Interface' needed!"},{question:"Why is 'if type(obj) == ClassName:' considered an anti-pattern in Python?",shortAnswer:"Because it completely breaks polymorphism and subclassing; derived subclasses will fail the equality check and duck-typed objects will be rejected unnecessarily.",explanation:"Use duck typing or 'isinstance(obj, Protocol)' instead.",hint:"It rejects valid subclasses and duck-typed compatible objects.",level:"basic",codeExample:`# Bad: if type(x) == list:
# Good: if isinstance(x, Sequence): or duck typing`},{question:"What is Operator Overloading / Operator Polymorphism?",shortAnswer:"The ability to define custom behavior for built-in Python operators (+, -, *, ==, <) on custom classes by implementing magic/dunder methods (__add__, __sub__, __eq__, etc.).",explanation:"Enables natural, expressive mathematical domain models.",hint:"Implementing magic methods to give custom behavior to standard operators.",level:"basic",codeExample:`def __add__(self, other):
    return Money(self.val + other.val)`},{question:"What is the difference between 'Nominal Subtyping' and 'Structural Subtyping'?",shortAnswer:"'Nominal Subtyping' bases type compatibility on explicit class names and inheritance hierarchies; 'Structural Subtyping' bases compatibility on the shape (methods and attributes) of the object, regardless of its class name.",explanation:"PEP 544 brought structural subtyping to Python via typing.Protocol.",hint:"Nominal = by class name/inheritance; Structural = by methods and shape.",level:"moderate",codeExample:`# Nominal: class Dog(Animal)
# Structural: class Payer(Protocol)`},{question:"What is 'typing.Protocol' introduced in Python 3.8 (PEP 544)?",shortAnswer:"A class that defines a structural interface contract for static type checkers (like mypy) and runtime duck typing without requiring explicit subclassing.",explanation:"Combines the power of static typing with the flexibility of Pythonic duck typing.",hint:"Defines a structural interface for static and runtime type validation.",level:"moderate",codeExample:`from typing import Protocol
class Renderable(Protocol):
    def render(self) -> str: ...`},{question:"How do you make a 'typing.Protocol' support runtime 'isinstance()' checks?",shortAnswer:"By decorating the Protocol definition with the '@typing.runtime_checkable' decorator.",explanation:"Allows calling isinstance(obj, MyProtocol) dynamically at runtime.",hint:"Use the @runtime_checkable decorator.",level:"moderate",codeExample:`@runtime_checkable
class AutoPayable(Protocol):
    def pay(self): ...`},{question:"What happens if a custom object does NOT implement an operator (e.g. __add__) and is added to another object?",shortAnswer:"Python tries the reverse operator (__radd__) on the right-hand operand; if both return NotImplemented, Python raises a TypeError: unsupported operand type(s).",explanation:"Demonstrates Python's bi-directional operator dispatch mechanism.",hint:"Tries __radd__ on the right operand, or raises TypeError if unsupported.",level:"complex",codeExample:"TypeError: unsupported operand type(s) for +: 'A' and 'B'"},{question:"What is 'EAFP' and how does it relate to Duck Typing?",shortAnswer:"'Easier to Ask for Forgiveness than Permission' — the Pythonic philosophy of trying an operation directly and catching exceptions (e.g. AttributeError) rather than checking object types in advance.",explanation:"Contrasts with 'LBYL' (Look Before You Leap) used in static languages.",hint:"Try the method directly and catch exceptions instead of checking types beforehand.",level:"basic",codeExample:`try:
    obj.generate()
except AttributeError:
    pass`},{question:"What is the built-in 'len()' function an example of?",shortAnswer:"Polymorphism: 'len(obj)' works uniformly across strings, lists, dicts, sets, and custom objects by delegating to their internal '__len__()' magic method.",explanation:"Uniform interface over diverse internal storage structures.",hint:"Polymorphic function delegating to __len__().",level:"basic",codeExample:`len('abc')  # 3
len([1, 2]) # 2`},{question:"Can two completely unrelated classes have identical method signatures and be used interchangeably?",shortAnswer:"Yes. In Python, as long as their method names, arguments, and return types match, any caller can consume them interchangeably via duck typing.",explanation:"This is the primary strength of dynamic polymorphism in Python.",hint:"Yes, duck typing allows unrelated classes with identical methods to be used interchangeably.",level:"basic",codeExample:"# PDFRenderer and HTMLRenderer used identically"},{question:"What is the 'Liskov Substitution Principle' (LSP) in relation to polymorphism?",shortAnswer:"The architectural principle that any subtype must be usable in place of its parent type without altering the correctness or contract expectations of the calling program.",explanation:"Ensures polymorphic substitutes do not introduce unexpected exceptions or altered side-effects.",hint:"Subtypes must be transparently swappable without breaking program correctness.",level:"moderate",codeExample:"# Subtypes must preserve method contracts and return types"},{question:"How do you implement polymorphic equality '==' on a custom class?",shortAnswer:"By defining the '__eq__(self, other)' magic method to compare object attributes rather than default memory address identity.",explanation:"Allows domain objects with identical data to evaluate as equal.",hint:"Implement the __eq__ magic method.",level:"basic",codeExample:`def __eq__(self, other):
    return self.id == getattr(other, 'id', None)`},{question:"What is the purpose of returning 'NotImplemented' from a magic method like '__add__'?",shortAnswer:"It signals to Python that this operand doesn't know how to handle the other type, prompting Python to try the reflected operation (__radd__) on the other operand.",explanation:"Returning NotImplemented is required for polite, cooperative operator overloading.",hint:"Signals Python to try the reflected __radd__ operator on the other operand.",level:"complex",codeExample:"if not isinstance(other, Money): return NotImplemented"},{question:"What is a 'Polymorphic Adapter' pattern?",shortAnswer:"A wrapper class that translates an incompatible third-party API into a uniform polymorphic interface expected by your core application dispatcher.",explanation:"Used extensively for payment gateways, cloud storage providers, and notification engines.",hint:"Wraps third-party APIs into a uniform interface for the dispatcher.",level:"moderate",codeExample:`class StripeAdapter:
    def process_payment(self, amt): self.stripe.charges.create(...)`},{question:"How does duck typing simplify unit testing with Mock objects?",shortAnswer:"You can pass lightweight test mock objects with the required method names directly to production functions without needing to implement elaborate interface hierarchies.",explanation:"Accelerates test development and isolates unit dependencies cleanly.",hint:"Allows passing simple mock objects matching the expected method signatures.",level:"moderate",codeExample:"class MockGateway: def process(self): return True"},{question:"What is the difference between 'typing.Union' and Polymorphism?",shortAnswer:"'typing.Union' lists explicit acceptable types for static analysis; Polymorphism allows an open-ended number of current and future types to be accepted dynamically via a shared interface.",explanation:"Polymorphism is extensible without modifying existing caller type signatures.",hint:"Union is closed/explicit; Polymorphism is open/extensible.",level:"moderate",codeExample:`# Union: Union[A, B]
# Polymorphism: Any object with .save()`},{question:"Can functions or callables be polymorphic in Python?",shortAnswer:"Yes. Higher-order functions can accept any callable object (functions, lambdas, classes with __call__) polymorphically.",explanation:"Treats functions as first-class polymorphic citizens.",hint:"Yes, functions can accept any callable object.",level:"basic",codeExample:"def execute(action): action()  # Works for functions or objects with __call__"},{question:"What happens if a duck-typed object is missing an expected method at runtime?",shortAnswer:"Python raises an 'AttributeError: 'X' object has no attribute 'method_name'' at the moment of execution.",explanation:"Highlighting the importance of Protocols or unit tests for validation.",hint:"Raises an AttributeError when the missing method is invoked.",level:"basic",codeExample:"# AttributeError: 'CashPayment' object has no attribute 'process_charge'"},{question:"How do abstract base classes (ABCs) complement Duck Typing?",shortAnswer:"ABCs provide explicit nominal enforcement at instantiation time for when strict contracts are required, while Duck Typing provides maximum dynamic flexibility.",explanation:"Topic 13 covers Abstract Base Classes in deep technical detail.",hint:"ABCs enforce contracts at instantiation; duck typing provides runtime flexibility.",level:"moderate",codeExample:"# ABCs enforce methods at instantiation time"},{question:"Can an object implement multiple polymorphic protocols simultaneously?",shortAnswer:"Yes. An object can implement methods for multiple protocols (e.g. Serializable, Printable, AutoPayable) without explicit multiple inheritance declarations.",explanation:"Full power of structural typing in Python.",hint:"Yes, by simply defining all required methods.",level:"basic",codeExample:`class Order:
    def to_json(self): ...
    def print_receipt(self): ...`},{question:"What is 'Ad-Hoc Polymorphism' vs 'Subtype Polymorphism'?",shortAnswer:"'Ad-Hoc Polymorphism' refers to operator overloading where the same operator behaves differently for different types; 'Subtype Polymorphism' refers to different classes providing their own implementations of a shared interface.",explanation:"Both are fully supported and widely used in Python.",hint:"Ad-Hoc = Operator overloading; Subtype = Interface / duck typing dispatch.",level:"complex",codeExample:`# Ad-Hoc: 1 + 2 vs 'a' + 'b'
# Subtype: dog.speak() vs cat.speak()`},{question:"How does Python's 'getattr()' support dynamic duck typing?",shortAnswer:"'getattr(obj, 'method_name', None)' allows checking for method existence dynamically and invoking it safely without crashing if missing.",explanation:"Common in plugin systems and serializer inspection.",hint:"Safely retrieves a method or attribute dynamically.",level:"basic",codeExample:`if callable(getattr(obj, 'export', None)):
    obj.export()`},{question:"What is the ultimate golden rule for Polymorphism & Duck Typing in Python?",shortAnswer:"Focus on what an object can DO (its capabilities and interface) rather than what an object IS (its class name or inheritance tree); design clean, focused method contracts and let Pythonic duck typing handle the dispatch.",explanation:"The core philosophy that gives Python its legendary expressiveness and developer velocity.",hint:"Focus on object capabilities (what it can DO) rather than class identity.",level:"basic",codeExample:"# Design around behavior and capabilities, not rigid class hierarchies"}];function D(){const p=l.useRef([]),[o,m]=l.useState("duckengine"),[i,c]=l.useState("razorpay"),[n,x]=l.useState(18e3);l.useEffect(()=>{const r=new IntersectionObserver(d=>{d.forEach(h=>{h.isIntersecting&&h.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return p.current.forEach(d=>{d&&r.observe(d)}),()=>r.disconnect()},[]);const t=r=>{r&&!p.current.includes(r)&&p.current.push(r)},a={razorpay:{name:"Razorpay UPI Gateway",currency:"INR",status:"SETTLED (Instant UPI Transfer)",ref:`RZP-STU-901-${n}`,notification:`[WhatsApp API -> +91-9830011111] Payment of INR ${n.toLocaleString()} verified. Welcome to Coder & AccoTax!`,isError:!1},stripe:{name:"Stripe International Card",currency:`USD ($${(n/85).toFixed(2)})`,status:`SETTLED ($${(n/85).toFixed(2)} USD via Stripe)`,ref:"STRIPE-INT-404-X4",notification:`[Email SMTP Service -> student@overseas.com] Subject: Transaction Confirmation | Body: INR ${n.toLocaleString()} processed.`,isError:!1},campus:{name:"Campus Cash Desk",currency:"INR Cash",status:"CASHIER_VERIFIED (Barrackpore Lab Desk)",ref:"CAMPUS-CASH-102-01",notification:`[Telecom SMS Gateway -> +91-9830022222] Physical cash receipt generated for INR ${n.toLocaleString()}.`,isError:!1},incompatible:{name:"Incompatible Payment Adapter",currency:"N/A",status:"CRASHED",ref:"N/A",notification:"N/A",isError:!0,errorMsg:"AttributeError: 'IncompatiblePaymentAdapter' object has no attribute 'process_transaction'"}}[i];return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:t,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_001"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 11"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Object-Oriented Programming (OOP) in Python"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Polymorphism & ",e.jsx("span",{className:"text-teal-400",children:"Duck Typing"})," in Python"]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master Python's dynamic polymorphic dispatch: the Duck Typing philosophy, eliminating brittle ",e.jsx("code",{className:"text-rose-400 font-mono",children:"type(x) == Y"})," checks, operator overloading, modern static duck typing with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"typing.Protocol"})," (PEP 544), and building polymorphic multi-channel adapters."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🦆 Duck Typing Philosophy"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"➕ Operator Overloading (__add__)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📜 typing.Protocol (PEP 544)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"💳 Multi-Channel Polymorphic Hub"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🦆"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Duck Typing Philosophy: Focus on Capabilities"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("blockquote",{className:"p-4 bg-slate-950/80 rounded-xl border-l-4 border-teal-500 font-medium text-slate-200 not-italic",children:`"If it walks like a duck and quacks like a duck, it's a duck."`}),e.jsxs("p",{children:["In Python, polymorphism does ",e.jsx("strong",{children:"NOT"})," require rigid abstract base classes or explicit inheritance trees. As long as an object provides the required methods, Python executes them cleanly:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-base mb-1",children:"1️⃣ Dynamic Duck Typing"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:'obj.generate("Report")'}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Zero inheritance needed. Python executes methods based on attribute presence at runtime."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-base mb-1",children:"2️⃣ Operator Overloading"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"def __add__(self, other):"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Built-in operators (+, *, ==) adapt polymorphically to custom domain objects."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-base mb-1",children:"3️⃣ Protocols (PEP 544)"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"class Payer(Protocol):"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Static duck typing for type checkers (mypy) and runtime validation via ",e.jsx("code",{className:"text-purple-300",children:"@runtime_checkable"}),"."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-rose-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Anti-Pattern: Explicit Type Checking (type(x) == Y)"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-400 font-mono",children:"if type(x) == RazorpayGateway:"})," destroys polymorphism, rejects compatible subclasses, and prevents developers from passing mock objects in unit tests. Always embrace Duck Typing or Protocols!"]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Duck Typing & Protocol Architectures"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>m("duckengine"),className:s("px-3 py-1.5 rounded-lg transition-all",o==="duckengine"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Duck Typing Dispatch"}),e.jsx("button",{onClick:()=>m("protocols"),className:s("px-3 py-1.5 rounded-lg transition-all",o==="protocols"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Nominal vs Structural Subtyping"}),e.jsx("button",{onClick:()=>m("adapters"),className:s("px-3 py-1.5 rounded-lg transition-all",o==="adapters"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Polymorphic Gateway Pipeline"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining dynamic dispatch, structural Protocol shape matching, and multi-channel adapters:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:o==="duckengine"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"DUCK TYPING DYNAMIC DISPATCH ENGINE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"340",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"Polymorphic Caller Function"}),e.jsx("text",{x:"20",y:"65",fill:"#ecfdf5",fontSize:"10 font-mono",children:"def publish_report(engine, title):"}),e.jsx("text",{x:"40",y:"90",fill:"#34d399",fontSize:"10 font-mono font-bold",children:"return engine.generate(title)"}),e.jsx("rect",{x:"20",y:"125",width:"300",height:"90",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"150",fill:"#a7f3d0",fontSize:"10 font-bold",children:"Zero Type Verification:"}),e.jsx("text",{x:"30",y:"175",fill:"#ecfdf5",fontSize:"9 font-mono",children:"Accepts ANY object implementing"}),e.jsx("text",{x:"30",y:"195",fill:"#ecfdf5",fontSize:"9 font-mono",children:"the `.generate(title)` method!"})]}),e.jsxs("g",{transform:"translate(385, 110)",children:[e.jsx("text",{x:"10",y:"10",fill:"#38bdf8",fontSize:"20",fontWeight:"bold",children:"↗"}),e.jsx("text",{x:"10",y:"55",fill:"#38bdf8",fontSize:"20",fontWeight:"bold",children:"→"}),e.jsx("text",{x:"10",y:"100",fill:"#38bdf8",fontSize:"20",fontWeight:"bold",children:"↘"})]}),e.jsxs("g",{transform:"translate(430, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"410",height:"65",rx:"6",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"20",y:"25",fill:"#a5f3fc",fontSize:"11 font-bold",children:"PDFReportGenerator"}),e.jsx("text",{x:"20",y:"45",fill:"#ecfdf5",fontSize:"9 font-mono",children:'def generate(self, title): return "PDF stream"'}),e.jsx("rect",{x:"0",y:"85",width:"410",height:"65",rx:"6",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"110",fill:"#c4b5fd",fontSize:"11 font-bold",children:"ExcelSpreadsheetGenerator"}),e.jsx("text",{x:"20",y:"130",fill:"#ecfdf5",fontSize:"9 font-mono",children:'def generate(self, title): return "Excel XML"'}),e.jsx("rect",{x:"0",y:"170",width:"410",height:"65",rx:"6",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"195",fill:"#a7f3d0",fontSize:"11 font-bold",children:"HTMLWebReportGenerator"}),e.jsx("text",{x:"20",y:"215",fill:"#ecfdf5",fontSize:"9 font-mono",children:'def generate(self, title): return "<html>..."'})]})]}):o==="protocols"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"NOMINAL SUBTYPING (INHERITANCE) VS STRUCTURAL PROTOCOLS (PEP 544)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"Nominal Subtyping (Inheritance)"}),e.jsx("text",{x:"20",y:"60",fill:"#cbd5e1",fontSize:"10",children:"• Subtyping is determined by CLASS NAME"}),e.jsx("text",{x:"20",y:"85",fill:"#cbd5e1",fontSize:"10",children:"• Requires explicit: `class Card(PaymentBase):`"}),e.jsx("rect",{x:"20",y:"125",width:"340",height:"90",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"30",y:"150",fill:"#fda4af",fontSize:"10 font-bold",children:"Limitation:"}),e.jsx("text",{x:"30",y:"175",fill:"#ecfdf5",fontSize:"9",children:"Third-party classes cannot become subtypes"}),e.jsx("text",{x:"30",y:"195",fill:"#ecfdf5",fontSize:"9",children:"without modifying their source code inheritance!"})]}),e.jsxs("g",{transform:"translate(460, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"Structural Subtyping (typing.Protocol)"}),e.jsx("text",{x:"20",y:"60",fill:"#cbd5e1",fontSize:"10",children:"• Subtyping is determined by SHAPE & METHODS"}),e.jsx("text",{x:"20",y:"85",fill:"#34d399",fontSize:"10 font-mono",children:"class AutoPayable(Protocol):"}),e.jsx("text",{x:"40",y:"105",fill:"#34d399",fontSize:"10 font-mono",children:"def process_charge(self, amt): ..."}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"155",fill:"#a7f3d0",fontSize:"10 font-bold",children:"Advantage:"}),e.jsx("text",{x:"30",y:"175",fill:"#ecfdf5",fontSize:"9",children:"Any external class matching the method signature"}),e.jsx("text",{x:"30",y:"195",fill:"#ecfdf5",fontSize:"9",children:"is automatically a valid subtype (Duck Typing)!"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"MULTI-CHANNEL POLYMORPHIC GATEWAY DISPATCHER"}),e.jsxs("g",{transform:"translate(30, 90)",children:[e.jsx("rect",{x:"0",y:"0",width:"320",height:"150",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"20",y:"30",fill:"#a5f3fc",fontSize:"12",fontWeight:"bold",children:"UnifiedInstitutionalHub"}),e.jsx("text",{x:"20",y:"60",fill:"#cbd5e1",fontSize:"9 font-mono",children:"execute_student_enrollment("}),e.jsx("text",{x:"40",y:"80",fill:"#38bdf8",fontSize:"9 font-mono",children:"gateway_adapter, student, amt):"}),e.jsx("text",{x:"20",y:"110",fill:"#34d399",fontSize:"9 font-mono",children:"gateway_adapter.process_transaction()"}),e.jsx("text",{x:"20",y:"130",fill:"#34d399",fontSize:"9 font-mono",children:"gateway_adapter.dispatch_alert()"})]}),e.jsxs("g",{transform:"translate(360, 100)",children:[e.jsx("text",{x:"10",y:"20",fill:"#38bdf8",fontSize:"18",fontWeight:"bold",children:"↗"}),e.jsx("text",{x:"10",y:"70",fill:"#38bdf8",fontSize:"18",fontWeight:"bold",children:"→"}),e.jsx("text",{x:"10",y:"120",fill:"#38bdf8",fontSize:"18",fontWeight:"bold",children:"↘"})]}),e.jsxs("g",{transform:"translate(410, 40)",children:[e.jsx("rect",{x:"0",y:"0",width:"430",height:"70",rx:"6",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"25",fill:"#99f6e4",fontSize:"11 font-bold",children:"1. RazorpayUpiGateway"}),e.jsx("text",{x:"15",y:"45",fill:"#ecfdf5",fontSize:"8 font-mono",children:"UPI Transfer + Instant WhatsApp Notification"}),e.jsx("rect",{x:"0",y:"90",width:"430",height:"70",rx:"6",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"15",y:"115",fill:"#c4b5fd",fontSize:"11 font-bold",children:"2. StripeInternationalGateway"}),e.jsx("text",{x:"15",y:"135",fill:"#ecfdf5",fontSize:"8 font-mono",children:"USD Card Charge + SMTP Email Confirmation"}),e.jsx("rect",{x:"0",y:"180",width:"430",height:"70",rx:"6",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"15",y:"205",fill:"#a7f3d0",fontSize:"11 font-bold",children:"3. CampusCashDeskGateway"}),e.jsx("text",{x:"15",y:"225",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Cashier Receipt Ledger + Telecom SMS Alert"})]})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Multi-Channel Gateway Dispatcher Playground"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Select a payment adapter and enter an enrollment amount to watch the polymorphic dispatcher execute without checking object types:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 block font-bold",children:"Select Polymorphic Adapter"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("button",{onClick:()=>c("razorpay"),className:s("p-3 rounded-lg text-left text-xs font-mono transition-all border",i==="razorpay"?"bg-teal-950/80 border-teal-500 text-teal-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"font-bold text-teal-300",children:"1. RazorpayUpiGateway"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"Domestic UPI + Instant WhatsApp Alert"})]}),e.jsxs("button",{onClick:()=>c("stripe"),className:s("p-3 rounded-lg text-left text-xs font-mono transition-all border",i==="stripe"?"bg-cyan-950/80 border-cyan-500 text-cyan-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"font-bold text-cyan-300",children:"2. StripeInternationalGateway"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"USD Card Processing + SMTP Email Alert"})]}),e.jsxs("button",{onClick:()=>c("campus"),className:s("p-3 rounded-lg text-left text-xs font-mono transition-all border",i==="campus"?"bg-purple-950/80 border-purple-500 text-purple-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"font-bold text-purple-300",children:"3. OfflineCampusCashGateway"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"Cashier Verification + Telecom SMS Alert"})]}),e.jsxs("button",{onClick:()=>c("incompatible"),className:s("p-3 rounded-lg text-left text-xs font-mono transition-all border",i==="incompatible"?"bg-rose-950/80 border-rose-500 text-rose-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"font-bold text-rose-300",children:"4. Incompatible Adapter (Missing Method)"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"Demonstrates AttributeError Duck Typing failure"})]})]}),e.jsxs("div",{className:"pt-2",children:[e.jsxs("div",{className:"flex justify-between text-xs font-mono mb-1",children:[e.jsx("span",{className:"text-slate-400",children:"Tuition Amount:"}),e.jsxs("span",{className:"text-teal-300 font-bold",children:["INR ",n.toLocaleString()]})]}),e.jsx("input",{type:"range",min:"5000",max:"50000",step:"1000",value:n,onChange:r=>x(Number(r.target.value)),className:"w-full accent-teal-500"})]})]}),e.jsxs("div",{className:"space-y-3 flex flex-col justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block font-bold",children:"Polymorphic Hub Dispatch Trace"}),e.jsx("div",{className:s("p-4 rounded-xl border flex-1 space-y-2.5 text-xs font-mono",a.isError?"bg-rose-950/40 border-rose-800":"bg-slate-900 border-slate-800"),children:a.isError?e.jsxs("div",{className:"space-y-2 text-rose-300",children:[e.jsx("div",{className:"font-bold text-rose-400 text-sm",children:"❌ AttributeError Caught!"}),e.jsx("p",{className:"text-[11px] leading-relaxed",children:a.errorMsg}),e.jsx("div",{className:"p-2.5 bg-slate-950 rounded border border-rose-900 text-[11px] text-emerald-400 font-bold",children:"✓ Fix: Implement `.process_transaction()` and `.dispatch_alert()` on adapter class!"})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-slate-400",children:["Target Gateway: ",e.jsx("span",{className:"text-teal-300 font-bold",children:a.name})]}),e.jsxs("div",{className:"pt-2 border-t border-slate-800",children:[e.jsx("span",{className:"text-slate-400",children:"1. Transaction Processing:"}),e.jsxs("div",{className:"text-emerald-300 font-bold mt-1",children:["✓ ",a.status]}),e.jsxs("div",{className:"text-[11px] text-slate-500 mt-0.5",children:["Ref: ",a.ref]})]}),e.jsxs("div",{className:"pt-2 border-t border-slate-800",children:[e.jsx("span",{className:"text-slate-400",children:"2. Polymorphic Notification:"}),e.jsx("div",{className:"text-cyan-300 mt-1 break-words leading-relaxed text-[11px]",children:a.notification})]}),e.jsxs("div",{className:"pt-2 border-t border-slate-800 text-[10px] text-slate-500",children:["Zero ",e.jsx("code",{className:"text-teal-400",children:"if type =="})," checks used! Pure duck typing execution."]})]})})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Polymorphism Approaches Reference Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Polymorphism Paradigm"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Mechanism"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Coupling Level"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Primary Architectural Advantage"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"Duck Typing"}),e.jsx("td",{className:"py-3 px-4",children:"Dynamic method dispatch at runtime"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-bold",children:"Zero Coupling"}),e.jsx("td",{className:"py-3 px-4",children:"Maximum flexibility; unrelated classes interoperate freely"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"typing.Protocol (PEP 544)"}),e.jsx("td",{className:"py-3 px-4",children:"Structural Subtyping interface contracts"}),e.jsx("td",{className:"py-3 px-4 text-cyan-400 font-bold",children:"Loose Coupling"}),e.jsx("td",{className:"py-3 px-4",children:"Static type checking (mypy) + optional runtime checkable"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Operator Overloading"}),e.jsx("td",{className:"py-3 px-4",children:"Magic methods (__add__, __mul__, __eq__)"}),e.jsx("td",{className:"py-3 px-4",children:"Operator Level"}),e.jsx("td",{className:"py-3 px-4",children:"Expressive domain-driven mathematical value objects"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"Abstract Base Classes (ABC)"}),e.jsx("td",{className:"py-3 px-4",children:"Nominal inheritance (@abstractmethod)"}),e.jsx("td",{className:"py-3 px-4 text-amber-400",children:"Strict Nominal"}),e.jsx("td",{className:"py-3 px-4",children:"Instantiating incomplete subclasses is forbidden at runtime"})]})]})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating Duck Typing, operator overloading, PEP 544 Protocols, and multi-channel gateway hubs:"}),e.jsx(u,{files:[{filename:"polymorphism_and_duck_typing_fundamentals.py",code:g,description:"Duck Typing and polymorphic document generation across completely unrelated classes."},{filename:"operator_overloading_polymorphism.py",code:_,description:"Operator polymorphism with built-in types and custom MoneyINR domain arithmetic."},{filename:"protocols_and_structural_subtyping.py",code:j,description:"Static Duck Typing with typing.Protocol (PEP 544) and @runtime_checkable validation."},{filename:"multichannel_notification_and_payment_engine.py",code:P,description:"Enterprise Multi-Channel Gateway Dispatcher unifying Razorpay, Stripe, and Campus Cash desk."}]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Checking `if type(x) == ClassName`"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Hardcoding exact class checks rejects compatible subclasses and valid duck-typed objects, completely sabotaging polymorphism."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Trust duck typing or use ",e.jsx("code",{className:"text-emerald-300",children:"isinstance(x, Protocol)"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Forgetting `NotImplemented` in Operators"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Raising ",e.jsx("code",{className:"text-amber-300 font-mono",children:"TypeError"})," directly inside ",e.jsx("code",{className:"text-amber-300 font-mono",children:"__add__"})," prevents Python from trying reflected operations (",e.jsx("code",{className:"text-amber-300 font-mono",children:"__radd__"}),")."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Return ",e.jsx("code",{className:"text-emerald-300",children:"NotImplemented"})," instead of raising exceptions."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Missing `@runtime_checkable` on Protocols"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-purple-300 font-mono",children:"isinstance(obj, MyProtocol)"})," without decorating the Protocol raises ",e.jsx("code",{className:"text-purple-300 font-mono",children:"TypeError: Only @runtime_checkable protocols support isinstance()"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Decorate with ",e.jsx("code",{className:"text-emerald-300",children:"@runtime_checkable"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Silent Duck Typing Signature Mismatches"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["If an adapter defines ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"def process(self):"})," but the caller invokes ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"obj.process(amount)"}),", a runtime ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"TypeError"})," occurs."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"typing.Protocol"})," and static linters (mypy) to verify signatures."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering Polymorphism, Duck Typing, operator overloading, and typing.Protocol:"}),e.jsx(y,{questions:w})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with Duck Typing design rules, Protocol blueprints, and multi-channel adapter patterns:"}),e.jsx("div",{className:"mb-10",children:e.jsx(f,{content:N,filename:"python_topic11_polymorphism_and_duck_typing_notes.txt",title:"Print Topic 11 Study Notes"})}),e.jsx(b,{})]})]})]})}export{D as default};
