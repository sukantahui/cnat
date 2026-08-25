import{b as o,j as e,bg as f}from"./vendor-react-core-Doz9nIC6.js";import{P as y}from"./PythonFileLoader-hCi5osN-.js";import{P as j}from"./PlainTextPrint-C08xhKA4.js";import{F as N}from"./FAQTemplate-CkSqDH4B.js";import{T as v}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const w=`# topic3_files/self_parameter_mechanics_and_bound_methods.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Instance methods & the self parameter\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 3 - File 1: The 'self' Parameter & Bound Method Transformation\r
Demonstrates:\r
  1. Why Python requires explicit 'self' as the first parameter\r
  2. How \`obj.method(x)\` translates identically to \`Class.method(obj, x)\`\r
  3. Difference between Unbound Class Functions and Instance Bound Methods\r
  4. The classic 'TypeError: takes 0 positional arguments but 1 was given' error\r
"""\r
\r
class StudentAccount:\r
    """Class demonstrating explicit instance method invocation."""\r
\r
    def __init__(self, name: str, balance: float):\r
        self.name = name\r
        self.balance = balance\r
\r
    def deposit(self, amount: float):\r
        """Standard instance method taking self as first argument."""\r
        self.balance += amount\r
        print(f"  [DEPOSIT] {self.name}: +INR {amount:,.2f} | Balance: INR {self.balance:,.2f}")\r
\r
\r
def demonstrate_self_translation():\r
    print("=" * 70)\r
    print("1. HOW PYTHON TRANSLATES METHOD CALLS")\r
    print("=" * 70)\r
\r
    acc = StudentAccount("Debanjan Roy", 5000.0)\r
\r
    print("Method Call Style A (Syntactic Sugar): \`acc.deposit(2500.0)\`")\r
    acc.deposit(2500.0)\r
\r
    print("\\nMethod Call Style B (Raw Class Invocation): \`StudentAccount.deposit(acc, 2500.0)\`")\r
    StudentAccount.deposit(acc, 2500.0)\r
\r
    print("\\nConclusion: Both invocations are 100% byte-for-byte identical in CPython!")\r
\r
\r
def demonstrate_bound_vs_unbound():\r
    print("\\n" + "=" * 70)\r
    print("2. UNBOUND FUNCTION VS BOUND METHOD OBJECT")\r
    print("=" * 70)\r
\r
    acc = StudentAccount("Debanjan Roy", 10000.0)\r
\r
    # 1. Accessed via Class -> Unbound Function\r
    unbound_func = StudentAccount.deposit\r
    print(f"Type of StudentAccount.deposit (Class Scope)  : {type(unbound_func)}")\r
\r
    # 2. Accessed via Instance -> Bound Method\r
    bound_method = acc.deposit\r
    print(f"Type of acc.deposit (Instance Scope)        : {type(bound_method)}")\r
    print(f"Bound to instance object at memory address : {bound_method.__self__}")\r
\r
    # You can pass bound methods as first-class callbacks:\r
    print("\\nExecuting bound method stored in variable callback():")\r
    bound_method(1000.0)\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_self_translation()\r
    demonstrate_bound_vs_unbound()\r
`,k=`# topic3_files/method_chaining_and_fluent_interfaces.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Instance methods & the self parameter\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 3 - File 2: Method Chaining & Fluent Builder Interfaces\r
Demonstrates:\r
  1. The Method Chaining pattern: Returning 'self' from mutator methods\r
  2. Building elegant, fluent API pipelines\r
  3. Invoice & Billing Builder Case Study for Coder & AccoTax\r
"""\r
\r
from typing import List, Dict\r
\r
class TaxInvoiceBuilder:\r
    """Fluent Builder for generating GST Tax Invoices via method chaining."""\r
\r
    def __init__(self, invoice_number: str, client_name: str):\r
        self.invoice_number = invoice_number\r
        self.client_name = client_name\r
        self.items: List[Dict[str, float]] = []\r
        self.gst_rate = 18.0  # 18% standard GST\r
        self.discount = 0.0\r
\r
    def add_line_item(self, item_name: str, unit_price: float, quantity: int = 1):\r
        """Adds a line item and returns self to allow chaining."""\r
        self.items.append({"name": item_name, "price": unit_price * quantity})\r
        return self  # Return self enables chaining!\r
\r
    def set_gst_rate(self, rate_percent: float):\r
        """Sets custom GST tax slab and returns self."""\r
        self.gst_rate = rate_percent\r
        return self\r
\r
    def apply_discount_voucher(self, discount_inr: float):\r
        """Applies flat promotional discount and returns self."""\r
        self.discount = discount_inr\r
        return self\r
\r
    def build_summary(self) -> str:\r
        """Terminal method executing final computation and output."""\r
        subtotal = sum(i["price"] for i in self.items)\r
        discounted = max(0.0, subtotal - self.discount)\r
        gst_amount = discounted * (self.gst_rate / 100)\r
        net_total = discounted + gst_amount\r
\r
        item_lines = "\\n".join([f"    - {i['name']:<30} : INR {i['price']:,.2f}" for i in self.items])\r
\r
        return (\r
            f"======================================================================\\n"\r
            f"INVOICE #{self.invoice_number} | Client: {self.client_name}\\n"\r
            f"Items:\\n{item_lines}\\n"\r
            f"----------------------------------------------------------------------\\n"\r
            f"Subtotal        : INR {subtotal:,.2f}\\n"\r
            f"Discount Applied: -INR {self.discount:,.2f}\\n"\r
            f"GST ({self.gst_rate:.0f}%)       : +INR {gst_amount:,.2f}\\n"\r
            f"NET TOTAL DUE   : INR {net_total:,.2f}\\n"\r
            f"======================================================================"\r
        )\r
\r
\r
def demonstrate_fluent_chaining():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - METHOD CHAINING & FLUENT INTERFACES")\r
    print("=" * 70)\r
\r
    # Fluent Method Chaining in Action:\r
    invoice = (\r
        TaxInvoiceBuilder("INV-2026-88", "Tanushree Das")\r
        .add_line_item("Python Pro Full-Stack Course", 15000.0)\r
        .add_line_item("Official Printed Study Kit", 1200.0)\r
        .apply_discount_voucher(1000.0)\r
        .set_gst_rate(18.0)\r
    )\r
\r
    print(invoice.build_summary())\r
    print("\\n[PASSED] Fluent Method Chaining Pipeline Executed Successfully.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_fluent_chaining()\r
`,A=`# topic3_files/method_delegation_and_helpers.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Instance methods & the self parameter\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 3 - File 3: Method Delegation, Internal Helpers & Method Callbacks\r
Demonstrates:\r
  1. Method delegation: Calling brother methods within the same class via \`self.\`\r
  2. The single-underscore \`_helper_method(self)\` internal private convention\r
  3. Passing bound instance methods as first-class callback callables\r
"""\r
\r
from typing import List, Callable\r
\r
class StudentAssessmentTracker:\r
    """Demonstrates internal method delegation and callback handlers."""\r
\r
    def __init__(self, student_name: str):\r
        self.student_name = student_name\r
        self.scores: List[float] = []\r
\r
    # =================================================================\r
    # INTERNAL HELPER METHOD (Prefixed with _ by convention)\r
    # =================================================================\r
    def _validate_score(self, score: float) -> bool:\r
        """Internal helper validating score boundaries."""\r
        return 0.0 <= score <= 100.0\r
\r
    # =================================================================\r
    # PUBLIC METHOD DELEGATING TO HELPER\r
    # =================================================================\r
    def record_score(self, score: float) -> bool:\r
        if not self._validate_score(score):\r
            print(f"  [REJECTED] Invalid score for {self.student_name}: {score}")\r
            return False\r
        self.scores.append(score)\r
        print(f"  [RECORDED] {self.student_name}: +{score:.1f}")\r
        return True\r
\r
    def calculate_gpa(self) -> float:\r
        if not self.scores:\r
            return 0.0\r
        return sum(self.scores) / len(self.scores)\r
\r
\r
def execute_audit_pipeline(callback_validator: Callable[[float], bool], marks_list: List[float]):\r
    """Higher-order function taking a bound method as a callback parameter."""\r
    print("Executing Batch Audit Pipeline via Passed Callback:")\r
    for mark in marks_list:\r
        is_valid = callback_validator(mark)\r
        print(f"  * Testing Mark {mark:<5} -> Valid: {is_valid}")\r
\r
\r
def demonstrate_delegation_and_callbacks():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - METHOD DELEGATION & CALLBACK PASSING")\r
    print("=" * 70)\r
\r
    tracker = StudentAssessmentTracker("Souvik Paul")\r
\r
    # 1. Method Delegation in Action\r
    tracker.record_score(88.5)\r
    tracker.record_score(92.0)\r
    tracker.record_score(150.0)  # Cleanly rejected by _validate_score\r
\r
    print(f"\\nFinal GPA: {tracker.calculate_gpa():.2f}")\r
\r
    # 2. Passing Bound Method as Callback\r
    print("\\nPassing \`tracker._validate_score\` bound method as higher-order argument:")\r
    sample_marks = [45.0, 99.0, -10.0, 105.0, 75.0]\r
    execute_audit_pipeline(tracker._validate_score, sample_marks)\r
\r
    print("\\n[PASSED] Method Delegation & Callback Passing Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_delegation_and_callbacks()\r
`,T=`# topic3_files/smart_banking_account_ledger.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Instance methods & the self parameter\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 3 - File 4: Interactive Bank Account & Multi-Account Transaction Ledger\r
Demonstrates:\r
  1. Rich instance methods interacting across multiple object instances (transfer_to)\r
  2. Guarding state invariants across operations\r
  3. Dynamic statement generation and compounding interest calculations\r
"""\r
\r
import datetime as dt\r
from typing import List\r
\r
class BankAccount:\r
    """Enterprise Bank Account with multi-method capabilities."""\r
    bank_name = "Coder & AccoTax Commercial Reserve Bank"\r
\r
    def __init__(self, account_no: str, holder_name: str, opening_balance: float = 0.0):\r
        if opening_balance < 0:\r
            raise ValueError("Opening balance cannot be negative!")\r
        self.account_no = account_no\r
        self.holder_name = holder_name\r
        self.balance = float(opening_balance)\r
        self.ledger: List[str] = [\r
            f"{dt.date.today()}: Account opened with INR {self.balance:,.2f}"\r
        ]\r
\r
    def deposit(self, amount: float) -> bool:\r
        if amount <= 0:\r
            print(f"  [ERROR] Invalid deposit amount: INR {amount:,.2f}")\r
            return False\r
        self.balance += amount\r
        self.ledger.append(f"{dt.date.today()}: Deposit +INR {amount:,.2f} | Bal: INR {self.balance:,.2f}")\r
        print(f"  [DEPOSIT] {self.holder_name}: +INR {amount:,.2f} | New Balance: INR {self.balance:,.2f}")\r
        return True\r
\r
    def withdraw(self, amount: float) -> bool:\r
        if amount <= 0 or amount > self.balance:\r
            print(f"  [ERROR] Insufficient funds or invalid amount: INR {amount:,.2f} (Current: INR {self.balance:,.2f})")\r
            return False\r
        self.balance -= amount\r
        self.ledger.append(f"{dt.date.today()}: Withdrawal -INR {amount:,.2f} | Bal: INR {self.balance:,.2f}")\r
        print(f"  [WITHDRAW] {self.holder_name}: -INR {amount:,.2f} | Remaining: INR {self.balance:,.2f}")\r
        return True\r
\r
    def transfer_to(self, target_account: 'BankAccount', amount: float) -> bool:\r
        """Transfers funds directly to another BankAccount object instance."""\r
        print(f"\\nInitiating Transfer of INR {amount:,.2f} from {self.holder_name} -> {target_account.holder_name}:")\r
        if self.withdraw(amount):\r
            target_account.deposit(amount)\r
            print(f"  [TRANSFER SUCCESS] Transfer complete between #{self.account_no} and #{target_account.account_no}")\r
            return True\r
        print(f"  [TRANSFER FAILED] Transfer aborted.")\r
        return False\r
\r
    def apply_monthly_interest(self, annual_rate_percent: float = 4.0) -> None:\r
        monthly_interest = self.balance * (annual_rate_percent / 100 / 12)\r
        self.balance += monthly_interest\r
        self.ledger.append(f"{dt.date.today()}: Interest +INR {monthly_interest:,.2f} | Bal: INR {self.balance:,.2f}")\r
        print(f"  [INTEREST] {self.holder_name}: +INR {monthly_interest:,.2f} interest credited.")\r
\r
    def print_statement(self) -> None:\r
        print(f"\\n======================================================================")\r
        print(f"{self.bank_name.upper()}")\r
        print(f"ACCOUNT STATEMENT - #{self.account_no} ({self.holder_name})")\r
        print(f"----------------------------------------------------------------------")\r
        for entry in self.ledger:\r
            print(f"  * {entry}")\r
        print(f"----------------------------------------------------------------------")\r
        print(f"NET CLOSING BALANCE: INR {self.balance:,.2f}")\r
        print(f"======================================================================\\n")\r
\r
\r
def run_banking_suite():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - MULTI-ACCOUNT BANKING LEDGER SUITE")\r
    print("=" * 70)\r
\r
    # 1. Instantiate Accounts\r
    acc1 = BankAccount("ACC-101", "Debanjan Roy", 10000.0)\r
    acc2 = BankAccount("ACC-202", "Priyanka Sen", 5000.0)\r
\r
    # 2. Deposits and Withdrawals\r
    acc1.deposit(4000.0)\r
    acc2.deposit(3000.0)\r
\r
    # 3. Inter-Account Transfer\r
    acc1.transfer_to(acc2, 6000.0)\r
\r
    # 4. Apply Interest\r
    acc2.apply_monthly_interest(4.5)\r
\r
    # 5. Print Detailed Statements\r
    acc1.print_statement()\r
    acc2.print_statement()\r
\r
    print("[PASSED] Smart Banking Ledger Suite Completed Successfully.")\r
\r
\r
if __name__ == "__main__":\r
    run_banking_suite()\r
`,S=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_001: OBJECT-ORIENTED PYTHON\r
            TOPIC 3: INSTANCE METHODS & THE 'self' PARAMETER\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. HOW PYTHON TRANSLATES METHOD CALLS\r
--------------------------------------------------------------------------------\r
  • Syntactic Sugar:\r
      account.deposit(5000.0)\r
\r
  • Under the Hood (CPython):\r
      BankAccount.deposit(account, 5000.0)\r
\r
  • Key Takeaway:\r
      Python automatically injects the instance (\`account\`) as the first\r
      argument (\`self\`) when invoked through an instance reference!\r
\r
--------------------------------------------------------------------------------\r
2. UNBOUND FUNCTIONS VS BOUND METHODS\r
--------------------------------------------------------------------------------\r
  • \`BankAccount.deposit\` -> <class 'function'> (Unbound, lives in Class dict)\r
  • \`account.deposit\`     -> <class 'method'> (Bound to \`account\` instance)\r
\r
--------------------------------------------------------------------------------\r
3. METHOD CHAINING PATTERN (return self)\r
--------------------------------------------------------------------------------\r
  class InvoiceBuilder:\r
      def add_item(self, name, price):\r
          self.items.append((name, price))\r
          return self  # Enables chaining!\r
\r
  # Fluent Usage:\r
  inv = InvoiceBuilder().add_item("Course", 15000).add_item("Book", 1000)\r
\r
================================================================================\r
         END OF STUDY NOTE • TOPIC 3: INSTANCE METHODS & 'self'\r
================================================================================\r
`,E=[{question:"What is an Instance Method in Python?",shortAnswer:"A function defined inside a class that takes the active object instance as its first parameter (conventionally named 'self') and operates on instance-specific state.",explanation:"Instance methods have direct access to self.__dict__ and can read or modify the instance's attributes.",hint:"A function defined in a class taking 'self' as its first parameter.",level:"basic",codeExample:`class Student:
    def study(self):
        print(f'{self.name} is studying.')`},{question:"How does Python translate the method call 'obj.deposit(500)' under the hood?",shortAnswer:"Python translates 'obj.deposit(500)' into the explicit class call: 'BankAccount.deposit(obj, 500)'.",explanation:"The instance before the dot is automatically passed as the first argument ('self').",hint:"Translates to ClassName.method(instance, args).",level:"basic",codeExample:"acc.deposit(500)  # Identical to BankAccount.deposit(acc, 500)"},{question:"What error occurs if you define a method without 'self' (e.g. def speak():) and call it on an instance (obj.speak())?",shortAnswer:"TypeError: speak() takes 0 positional arguments but 1 was given.",explanation:"Because Python automatically injects the instance 'obj' as an argument, but the function header declared 0 parameters.",hint:"Raises TypeError because 1 argument (the instance) is automatically passed.",level:"basic",codeExample:`# TypeError: speak() takes 0 positional arguments but 1 was given
class Dog:
    def speak(): pass
Dog().speak()`},{question:"What is the difference between an Unbound Function and a Bound Method in Python?",shortAnswer:"An Unbound Function is the raw function stored in the Class namespace; a Bound Method is a callable object created when accessing the function through an instance, with the instance already pre-bound to 'self'.",explanation:"You can inspect the bound instance using bound_method.__self__.",hint:"Bound methods have the instance pre-attached to self.",level:"moderate",codeExample:`print(type(Dog.bark))   # <class 'function'>
print(type(d.bark))     # <class 'method'>`},{question:"What is the 'Method Chaining' pattern in Python?",shortAnswer:"Designing mutator methods to return 'self' (return self) so multiple method calls can be chained together sequentially in a single fluent expression.",explanation:"Commonly used in builder interfaces, query builders, and configuration pipelines.",hint:"Returning 'self' from methods to allow obj.step1().step2().step3().",level:"basic",codeExample:"invoice.add_item('Book', 500).apply_discount(50).finalize()"},{question:"How do you call another method of the same class from within an instance method?",shortAnswer:"Using the 'self' reference: self.other_method_name(*args).",explanation:"Ensures the method is looked up polymorphically on the active instance.",hint:"Use self.other_method().",level:"basic",codeExample:`def checkout(self):
    if self._validate_cart():
        self.process_payment()`},{question:"What naming convention is used in Python to indicate an internal helper method?",shortAnswer:"A single leading underscore (e.g., def _validate_input(self):).",explanation:"Signals to other developers that the method is intended for internal class use only.",hint:"Prefix with a single leading underscore: _method_name.",level:"basic",codeExample:`def _calculate_tax(self):
    return self.subtotal * 0.18`},{question:"Can a bound instance method be passed as a callback into a standard library function like sorted() or threading?",shortAnswer:"Yes. In Python, bound methods are first-class callable objects that retain their reference to 'self' wherever they are passed.",explanation:"Allows clean event-driven architectures without needing lambda wrappers.",hint:"Yes, bound methods are first-class callables with self pre-bound.",level:"moderate",codeExample:"button.on_click = account.deposit"},{question:"Can an instance method take other object instances as arguments?",shortAnswer:"Yes. Objects can receive and interact with other object instances (e.g. account1.transfer_to(account2, 500)).",explanation:"Enables collaboration and domain modeling across entities.",hint:"Yes, methods can take any object instances as parameters.",level:"basic",codeExample:`def transfer_to(self, recipient_acc, amount):
    self.withdraw(amount)
    recipient_acc.deposit(amount)`},{question:"Why did Guido van Rossum choose to make 'self' explicit in Python rather than implicit (like 'this' in Java or C++)?",shortAnswer:"Following the core Zen of Python principle: 'Explicit is better than implicit', making attribute access crystal clear (self.x vs local variable x).",explanation:"Eliminates ambiguity between local function variables and instance attributes without requiring special scoping rules.",hint:"'Explicit is better than implicit' - clarifies instance attributes from locals.",level:"moderate",codeExample:"# self.x is unambiguously an instance attribute; x is a local variable"},{question:"Is the word 'self' a Python reserved keyword?",shortAnswer:"No. 'self' is just a strongly enforced community convention; you could technically name it 'this' or 'me', but doing so violates PEP 8 and breaks IDE tooling.",explanation:"Python only cares that there is a parameter in the first position to receive the instance.",hint:"Not a keyword, but a mandatory PEP 8 convention.",level:"basic",codeExample:"# PEP 8 rule: Always name the first parameter 'self'"},{question:"How can an instance method access class-level attributes?",shortAnswer:"Via self.class_attr (which falls back to the class if not shadowed on instance) or explicitly via self.__class__.class_attr / ClassName.class_attr.",explanation:"Using self.__class__.attr ensures the attribute is read from the class even if shadowed on the instance.",hint:"Via self.class_attr or self.__class__.class_attr.",level:"moderate",codeExample:`def get_bank(self):
    return self.__class__.bank_name`},{question:"What happens if a method reassigns a class attribute using 'self.attr = value'?",shortAnswer:"It creates a new instance attribute on 'self.__dict__' that shadows the class attribute for that instance only; the class attribute remains unchanged for all other instances.",explanation:"To update the class-level variable globally, you must assign to 'ClassName.attr = value'.",hint:"Creates an instance attribute that shadows the class variable.",level:"moderate",codeExample:`self.branch = 'New'  # Shadowed on self only!
Bank.branch = 'New'  # Updated globally across class`},{question:"What is the difference between an Instance Method and a Class Method (@classmethod)?",shortAnswer:"An instance method takes 'self' (the instance) and accesses instance state; a class method takes 'cls' (the class itself) and accesses class-level state or acts as a factory.",explanation:"Class methods cannot access instance attributes directly.",hint:"Instance method takes self; Class method takes cls.",level:"basic",codeExample:`# Instance: def method(self):
# Class:    @classmethod def method(cls):`},{question:"What is the difference between an Instance Method and a Static Method (@staticmethod)?",shortAnswer:"An instance method takes 'self' and accesses instance state; a static method takes neither 'self' nor 'cls' and behaves like a plain utility function nested inside a class namespace.",explanation:"Static methods do not depend on instance or class state.",hint:"Static method takes neither self nor cls.",level:"basic",codeExample:`# @staticmethod
# def add(a, b): return a + b`},{question:"Can an instance method delete an attribute from the instance?",shortAnswer:"Yes: using 'del self.attribute_name' inside the method body.",explanation:"Removes the key from self.__dict__.",hint:"Use del self.attribute_name.",level:"basic",codeExample:`def reset_token(self):
    if hasattr(self, 'auth_token'):
        del self.auth_token`},{question:"What is 'Monkey Patching' a method in Python?",shortAnswer:"Dynamically replacing or adding a method to a class or instance at runtime after the class definition has already been loaded.",explanation:"Commonly used in testing libraries to mock external API methods.",hint:"Dynamically modifying class methods at runtime.",level:"complex",codeExample:`def custom_deposit(self, amt): self.bal += amt * 2
BankAccount.deposit = custom_deposit`},{question:"How do you define a method that accepts an arbitrary number of positional arguments?",shortAnswer:"def method_name(self, *args):",explanation:"Packs extra positional arguments into a tuple named 'args'.",hint:"Use *args after self: def method(self, *args).",level:"basic",codeExample:`def log_entries(self, *messages):
    for msg in messages: print(msg)`},{question:"What is a 'Pure Method' vs an 'Impure / Mutator Method' in OOP?",shortAnswer:"A pure method computes and returns a result without mutating instance state (e.g. calculate_interest()); a mutator method alters instance attributes (e.g. withdraw()).",explanation:"Pure methods make code easier to test and reason about.",hint:"Pure methods don't mutate state; mutator methods alter attributes.",level:"moderate",codeExample:`# Pure: def get_tax(self): return self.bal * 0.05
# Mutator: def withdraw(self, amt): self.bal -= amt`},{question:"Can an instance method be decorated with standard Python decorators?",shortAnswer:"Yes. Instance methods can be wrapped with any standard decorator (e.g. @lru_cache, @timed, @validate_auth).",explanation:"Decorators must accept 'self' as the first argument when wrapping instance methods.",hint:"Yes, standard decorators work seamlessly with instance methods.",level:"moderate",codeExample:`@timed
def generate_report(self):
    pass`},{question:"What is the danger of returning mutable internal data structures directly from an instance method?",shortAnswer:"Callers can directly modify the returned list/dict outside the object, bypassing invariant validation and corrupting internal state.",explanation:"Best practice: return a copy (e.g., return list(self._items) or a read-only view).",hint:"Callers can mutate internal data; return copies or read-only views.",level:"complex",codeExample:`def get_history(self):
    return list(self._history)  # Defensive copy`},{question:"How do you inspect the docstring of an instance method programmatically?",shortAnswer:"Using obj.method.__doc__ or help(obj.method).",explanation:"Docstrings are stored in the method's __doc__ attribute.",hint:"Use obj.method.__doc__.",level:"basic",codeExample:"print(account.deposit.__doc__)"},{question:"What happens if a subclass defines an instance method with the exact same name as a superclass method?",shortAnswer:"The subclass overrides the superclass method; calling obj.method() executes the subclass version (unless super().method() is called explicitly).",explanation:"Forms the basis of Method Overriding in polymorphism.",hint:"Method overriding: the subclass version takes precedence.",level:"basic",codeExample:`class PremiumAccount(BankAccount):
    def withdraw(self, amt): ...  # Overrides parent`},{question:"What is 'Duck Typing' when calling methods on arbitrary objects?",shortAnswer:"Calling a method (e.g. obj.render()) without checking the object's class type, assuming that if the method exists, the object will handle the request properly.",explanation:"Emphasizes interfaces and capabilities over strict class hierarchies.",hint:"Calling methods based on behavior rather than explicit class types.",level:"moderate",codeExample:`def print_statement(statement_printable):
    statement_printable.print_statement()`},{question:"What is the primary design principle for crafting clean instance methods?",shortAnswer:"Methods should be cohesive, perform a single distinct task, protect internal invariants, and maintain the object in a valid state throughout execution.",explanation:"Follows the Single Responsibility Principle and Encapsulation best practices.",hint:"Single responsibility, high cohesion, and strict invariant protection.",level:"basic",codeExample:"# High cohesion methods with clear single responsibilities"}];function L(){const h=o.useRef([]),[l,m]=o.useState("selfinjection"),[a,i]=o.useState(1e4),[x,c]=o.useState(["account = BankAccount('ACC-101', 'Debanjan Roy', 10000.0)"]),[u,d]=o.useState(["24-Aug-2026: Opening Balance INR 10,000.00"]);o.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(r=>{r.isIntersecting&&r.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return h.current.forEach(n=>{n&&t.observe(n)}),()=>t.disconnect()},[]);const s=t=>{t&&!h.current.includes(t)&&h.current.push(t)},p=()=>{const t=a+2500;i(t),c(n=>[...n,".deposit(2500.0)"]),d(n=>[`Deposit +INR 2,500.00 | New Balance: INR ${t.toLocaleString()}`,...n])},b=()=>{if(a<1200)return;const t=a-1200;i(t),c(n=>[...n,".withdraw(1200.0)"]),d(n=>[`Withdrawal -INR 1,200.00 | Remaining: INR ${t.toLocaleString()}`,...n])},g=()=>{const t=a*.004166666666666667,n=a+t;i(n),c(r=>[...r,".apply_monthly_interest(5.0)"]),d(r=>[`Interest Credited +INR ${t.toFixed(2)} | Balance: INR ${n.toLocaleString()}`,...r])},_=()=>{i(1e4),c(["account = BankAccount('ACC-101', 'Debanjan Roy', 10000.0)"]),d(["24-Aug-2026: Opening Balance INR 10,000.00"])};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:s,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_001"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 3"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Object-Oriented Programming (OOP) in Python"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Instance Methods & the ",e.jsx("code",{className:"text-teal-400 font-mono",children:"self"})," Parameter"]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master Python instance behavior: understanding how ",e.jsx("code",{className:"text-teal-300 font-mono",children:"obj.method()"})," translates into ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"Class.method(obj)"}),", Bound Methods vs Unbound Functions, method chaining via ",e.jsx("code",{className:"text-purple-300 font-mono",children:"return self"}),", internal helper delegation, and multi-object method collaboration."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🧬 Explicit 'self' Parameter Mechanics"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🎯 Bound Methods vs Unbound Functions"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔗 Fluent Method Chaining (return self)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🤝 Inter-Object Method Collaboration"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧭"}),e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:["1. The Explicit ",e.jsx("code",{className:"text-teal-400 font-mono",children:"self"})," Parameter & Bound Methods"]})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["In Python, unlike languages with implicit ",e.jsx("code",{className:"text-slate-400 font-mono",children:"this"})," keywords (Java, C++), instance methods must explicitly declare ",e.jsx("code",{className:"text-teal-300 font-mono",children:"self"})," as their first parameter. When called via an instance, Python automatically passes the calling object as the first argument:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg shadow-teal-950/30",children:[e.jsx("div",{className:"text-teal-400 font-bold text-base mb-1",children:"1️⃣ Syntactic Sugar"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"acc.deposit(500)"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Readable, object-centric syntax used in standard Python code."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg shadow-cyan-950/30",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-base mb-1",children:"2️⃣ Raw Translation"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"BankAccount.deposit(acc, 500)"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"What CPython actually executes: passes instance explicitly to class function."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg shadow-purple-950/30",children:[e.jsx("div",{className:"text-purple-400 font-bold text-base mb-1",children:"3️⃣ Bound Method"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"<bound method Bank.deposit>"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Wraps function + instance; can be passed as a standalone callback!"})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"Zen of Python: Explicit is Better than Implicit"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Explicit ",e.jsx("code",{className:"text-teal-300 font-mono",children:"self"})," ensures there is zero confusion between local variables (",e.jsx("code",{className:"text-slate-400 font-mono",children:"amount"}),") and instance attributes (",e.jsx("code",{className:"text-teal-300 font-mono",children:"self.amount"}),") without requiring hidden scoping rules."]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Method Resolution & Chaining Pipelines"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>m("selfinjection"),className:f("px-3 py-1.5 rounded-lg transition-all",l==="selfinjection"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"The 'self' Injection Engine"}),e.jsx("button",{onClick:()=>m("boundmethods"),className:f("px-3 py-1.5 rounded-lg transition-all",l==="boundmethods"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Bound Method Wrapper"}),e.jsx("button",{onClick:()=>m("chaining"),className:f("px-3 py-1.5 rounded-lg transition-all",l==="chaining"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Method Chaining (return self)"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining parameter injection, bound method callables, and fluent pipeline execution:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:l==="selfinjection"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"HOW CPYTHON TRANSLATES METHOD CALLS"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"360",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"13",fontWeight:"bold",children:"Developer Syntax: acc.deposit(500)"}),e.jsx("text",{x:"20",y:"65",fill:"#ecfdf5",fontSize:"11 font-mono",children:'acc = BankAccount("ACC-101", 5000)'}),e.jsx("text",{x:"20",y:"90",fill:"#ecfdf5",fontSize:"11 font-mono",children:"acc.deposit(500)"}),e.jsx("rect",{x:"20",y:"130",width:"320",height:"80",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"155",fill:"#34d399",fontSize:"11 font-bold",children:"Automatic Injection:"}),e.jsx("text",{x:"30",y:"175",fill:"#ecfdf5",fontSize:"10",children:"• Python extracts instance before dot ('acc')"}),e.jsx("text",{x:"30",y:"195",fill:"#ecfdf5",fontSize:"10",children:"• Injects it as first parameter ('self')"})]}),e.jsxs("g",{transform:"translate(405, 140)",children:[e.jsx("text",{x:"10",y:"30",fill:"#38bdf8",fontSize:"24",fontWeight:"bold",children:"→"}),e.jsx("text",{x:"-15",y:"55",fill:"#38bdf8",fontSize:"10 font-mono",children:"CPython Engine"})]}),e.jsxs("g",{transform:"translate(480, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"370",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"20",y:"30",fill:"#a5f3fc",fontSize:"13",fontWeight:"bold",children:"Raw Underlying Execution"}),e.jsx("text",{x:"20",y:"65",fill:"#34d399",fontSize:"12 font-mono font-bold",children:"BankAccount.deposit(acc, 500)"}),e.jsx("text",{x:"20",y:"100",fill:"#cbd5e1",fontSize:"11 font-mono",children:"def deposit(self, amount):"}),e.jsx("text",{x:"20",y:"125",fill:"#cbd5e1",fontSize:"11 font-mono",children:"    self.balance += amount"}),e.jsx("rect",{x:"20",y:"155",width:"330",height:"60",rx:"4",fill:"#090d16",stroke:"#475569"}),e.jsx("text",{x:"30",y:"180",fill:"#a5f3fc",fontSize:"10 font-bold",children:"self is bound directly to acc!"}),e.jsx("text",{x:"30",y:"200",fill:"#cbd5e1",fontSize:"9",children:"Directly updates acc.__dict__['balance']"})]})]}):l==="boundmethods"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"UNBOUND FUNCTION VS BOUND METHOD WRAPPER"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"13",fontWeight:"bold",children:"Class Level: BankAccount.deposit"}),e.jsx("text",{x:"20",y:"65",fill:"#cbd5e1",fontSize:"11 font-mono",children:"type(BankAccount.deposit)"}),e.jsx("text",{x:"20",y:"90",fill:"#a7f3d0",fontSize:"11 font-mono font-bold",children:"→ <class 'function'> (Unbound)"}),e.jsx("rect",{x:"20",y:"120",width:"340",height:"95",rx:"4",fill:"#090d16",stroke:"#475569"}),e.jsx("text",{x:"30",y:"145",fill:"#f8fafc",fontSize:"11 font-bold",children:"Requires Explicit Instance:"}),e.jsx("text",{x:"30",y:"170",fill:"#cbd5e1",fontSize:"10",children:"Must be called with 2 arguments:"}),e.jsx("text",{x:"30",y:"195",fill:"#34d399",fontSize:"10 font-mono",children:"BankAccount.deposit(acc, 500)"})]}),e.jsxs("g",{transform:"translate(460, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"Instance Level: acc.deposit"}),e.jsx("text",{x:"20",y:"65",fill:"#cbd5e1",fontSize:"11 font-mono",children:"type(acc.deposit)"}),e.jsx("text",{x:"20",y:"90",fill:"#34d399",fontSize:"11 font-mono font-bold",children:"→ <class 'method'> (Bound Method)"}),e.jsx("rect",{x:"20",y:"120",width:"350",height:"95",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"145",fill:"#34d399",fontSize:"11 font-bold",children:"Instance Pre-Bound inside Wrapper:"}),e.jsx("text",{x:"30",y:"170",fill:"#ecfdf5",fontSize:"10",children:"bound_method.__self__ == acc"}),e.jsx("text",{x:"30",y:"195",fill:"#ecfdf5",fontSize:"10 font-bold",children:"Callable with 1 argument: cb(500)"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"METHOD CHAINING: FLUENT BUILDER PIPELINE (return self)"}),e.jsxs("g",{transform:"translate(30, 60)",children:[e.jsx("rect",{x:"0",y:"0",width:"240",height:"200",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:'.add_item("Course", 15k)'}),e.jsx("text",{x:"15",y:"60",fill:"#cbd5e1",fontSize:"10 font-mono",children:"self.items.append(...)"}),e.jsx("text",{x:"15",y:"90",fill:"#34d399",fontSize:"11 font-mono font-bold",children:"return self"}),e.jsx("text",{x:"15",y:"120",fill:"#a7f3d0",fontSize:"10",children:"Passes same instance forward"}),e.jsx("text",{x:"250",y:"105",fill:"#38bdf8",fontSize:"24",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"280",y:"0",width:"240",height:"200",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"295",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:".apply_discount(1k)"}),e.jsx("text",{x:"295",y:"60",fill:"#cbd5e1",fontSize:"10 font-mono",children:"self.discount = 1000"}),e.jsx("text",{x:"295",y:"90",fill:"#34d399",fontSize:"11 font-mono font-bold",children:"return self"}),e.jsx("text",{x:"295",y:"120",fill:"#c4b5fd",fontSize:"10",children:"Passes same instance forward"}),e.jsx("text",{x:"530",y:"105",fill:"#38bdf8",fontSize:"24",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"560",y:"0",width:"250",height:"200",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"575",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:".build_summary()"}),e.jsx("text",{x:"575",y:"60",fill:"#ecfdf5",fontSize:"10 font-mono",children:"Calculates GST + Net Total"}),e.jsx("text",{x:"575",y:"90",fill:"#34d399",fontSize:"11 font-bold",children:"Terminal Method"}),e.jsx("text",{x:"575",y:"120",fill:"#ecfdf5",fontSize:"10",children:"Returns formatted final string"})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Method Chaining & Account Simulator"})]}),e.jsxs("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:["Execute chained methods sequentially on the live ",e.jsx("code",{className:"text-teal-300 font-mono",children:"BankAccount"})," object instance:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 block font-bold",children:"Chainable Instance Methods"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{onClick:p,className:"bg-teal-900/60 hover:bg-teal-800 text-teal-200 border border-teal-700 px-3.5 py-2 rounded-lg text-xs font-mono font-bold transition-all",children:".deposit(2500)"}),e.jsx("button",{onClick:b,className:"bg-cyan-900/60 hover:bg-cyan-800 text-cyan-200 border border-cyan-700 px-3.5 py-2 rounded-lg text-xs font-mono font-bold transition-all",children:".withdraw(1200)"}),e.jsx("button",{onClick:g,className:"bg-purple-900/60 hover:bg-purple-800 text-purple-200 border border-purple-700 px-3.5 py-2 rounded-lg text-xs font-mono font-bold transition-all",children:".apply_interest(5%)"}),e.jsx("button",{onClick:_,className:"bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 px-3.5 py-2 rounded-lg text-xs font-mono transition-all",children:"Reset"})]}),e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block font-bold",children:"Constructed Python Expression"}),e.jsx("code",{className:"text-xs font-mono text-emerald-300 block bg-slate-950 p-2.5 rounded border border-slate-800/80 overflow-x-auto whitespace-pre-wrap",children:x.join(`
  `)}),e.jsxs("div",{className:"pt-2 border-t border-slate-800 flex items-center justify-between text-xs font-mono",children:[e.jsx("span",{className:"text-slate-400",children:"Current Balance:"}),e.jsxs("span",{className:"text-teal-300 font-bold text-sm",children:["INR ",a.toLocaleString("en-IN",{minimumFractionDigits:2})]})]})]})]}),e.jsxs("div",{className:"space-y-2 flex flex-col justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block font-bold",children:"Account Transaction Ledger (self.ledger)"}),e.jsx("div",{className:"p-4 bg-slate-900 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 space-y-1.5 overflow-y-auto max-h-48 flex-1",children:u.map((t,n)=>e.jsxs("div",{className:"text-slate-300",children:["> ",t]},n))})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Method Types & Invocations Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Method Type"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"First Parameter"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Can Access Instance State?"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Primary Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"Instance Method"}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300",children:"self (Instance)"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-bold",children:"YES (self.__dict__)"}),e.jsx("td",{className:"py-3 px-4",children:"Standard business logic, state mutations, behaviors"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"Class Method (@classmethod)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300",children:"cls (Class)"}),e.jsx("td",{className:"py-3 px-4 text-rose-400",children:"NO (Only class-level state)"}),e.jsx("td",{className:"py-3 px-4",children:"Alternative constructors (from_dict), factory methods"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Static Method (@staticmethod)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400",children:"None"}),e.jsx("td",{className:"py-3 px-4 text-rose-400",children:"NO"}),e.jsx("td",{className:"py-3 px-4",children:"Pure utility functions scoped to class namespace"})]})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating the self injection engine, fluent builder method chaining, helper delegation, and multi-account transfers:"}),e.jsx(y,{files:[{filename:"self_parameter_mechanics_and_bound_methods.py",code:w,description:"The explicit 'self' parameter, method translation sugar, and bound method callable objects."},{filename:"method_chaining_and_fluent_interfaces.py",code:k,description:"Method chaining pattern returning self for fluent GST Tax Invoice builders."},{filename:"method_delegation_and_helpers.py",code:A,description:"Internal helper routines (_helper), method delegation via self, and passing bound methods as callbacks."},{filename:"smart_banking_account_ledger.py",code:T,description:"Enterprise Multi-Account Banking Ledger Suite with inter-account fund transfers and interest calculations."}]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Omission of `self` Parameter"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"def deposit(amount):"})," causes ",e.jsx("code",{className:"text-rose-300 font-mono",children:"TypeError: takes 1 positional argument but 2 were given"})," because Python automatically passes the instance!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always include ",e.jsx("code",{className:"text-emerald-300",children:"self"})," as the first argument in instance methods."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Reassigning Class Variables via `self`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-amber-300 font-mono",children:'self.branch = "New"'})," creates an attribute in ",e.jsx("code",{className:"text-amber-300 font-mono",children:"self.__dict__"}),", shadowing the class variable instead of updating it globally."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Modify class variables via ",e.jsx("code",{className:"text-emerald-300",children:'ClassName.branch = "New"'}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Returning Mutable Internal Lists Directly"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Returning ",e.jsx("code",{className:"text-purple-300 font-mono",children:"return self.ledger"})," allows callers to modify the list externally without validation."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Return defensive copies: ",e.jsx("code",{className:"text-emerald-300",children:"return list(self.ledger)"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Forgetting `return self` in Method Chains"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["If a chainable method omits ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"return self"}),", it returns ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"None"}),", causing ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"AttributeError: 'NoneType' object has no attribute"})," on the next step."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Every mutator step in a builder must ",e.jsx("code",{className:"text-emerald-300",children:"return self"}),"."]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering instance methods, the self parameter, bound methods, and method chaining:"}),e.jsx(N,{questions:E})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with method translation diagrams, method chaining templates, and callback passing recipes:"}),e.jsx("div",{className:"mb-10",children:e.jsx(j,{content:S,filename:"python_topic3_instance_methods_and_self_notes.txt",title:"Print Topic 3 Study Notes"})}),e.jsx(v,{})]})]})]})}export{L as default};
