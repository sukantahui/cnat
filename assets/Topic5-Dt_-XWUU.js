import{b as r,j as e,bg as o}from"./vendor-react-core-Doz9nIC6.js";import{P as w}from"./PythonFileLoader-hCi5osN-.js";import{P as S}from"./PlainTextPrint-C08xhKA4.js";import{F as T}from"./FAQTemplate-CkSqDH4B.js";import{T as A}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const E=`# topic5_files/classmethod_vs_staticmethod_mechanics.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Class methods (@classmethod) & Static methods (@staticmethod)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 5 - File 1: The Three Method Types in Python (Instance, Class, Static)\r
Demonstrates:\r
  1. Instance Methods: Bound to instance (\`self\`); accesses instance and class state\r
  2. Class Methods (@classmethod): Bound to class (\`cls\`); accesses class state and factories\r
  3. Static Methods (@staticmethod): Unbound utility; accesses neither \`self\` nor \`cls\`\r
  4. Invocation mechanics across both Class and Instance references\r
"""\r
\r
class EmployeePayroll:\r
    """Demonstrates all 3 Python method types within a unified domain."""\r
    company_name = "Coder & AccoTax"\r
    standard_work_hours = 40\r
\r
    def __init__(self, emp_id: str, name: str, hourly_rate: float):\r
        self.emp_id = emp_id\r
        self.name = name\r
        self.hourly_rate = float(hourly_rate)\r
\r
    # =================================================================\r
    # 1. INSTANCE METHOD (Receives \`self\`)\r
    # =================================================================\r
    def calculate_weekly_pay(self, hours_worked: float) -> float:\r
        """Operates on instance state (self.hourly_rate) and class state."""\r
        overtime_hours = max(0.0, hours_worked - self.standard_work_hours)\r
        regular_hours = min(hours_worked, self.standard_work_hours)\r
        gross_pay = (regular_hours * self.hourly_rate) + (overtime_hours * self.hourly_rate * 1.5)\r
        print(f"  [INSTANCE METHOD] {self.name}: Worked {hours_worked}h -> Gross: INR {gross_pay:,.2f}")\r
        return gross_pay\r
\r
    # =================================================================\r
    # 2. CLASS METHOD (Receives \`cls\`)\r
    # =================================================================\r
    @classmethod\r
    def set_standard_hours(cls, new_hours: int):\r
        """Modifies class-level state (cls.standard_work_hours)."""\r
        cls.standard_work_hours = new_hours\r
        print(f"  [CLASS METHOD] Standard work hours updated globally to {new_hours}h for {cls.company_name}")\r
\r
    # =================================================================\r
    # 3. STATIC METHOD (Receives neither \`self\` nor \`cls\`)\r
    # =================================================================\r
    @staticmethod\r
    def validate_pan_card(pan_number: str) -> bool:\r
        """Pure utility function logically scoped to the Employee domain."""\r
        clean = pan_number.strip().upper()\r
        # Indian PAN format: 5 letters, 4 digits, 1 letter (e.g. ABCDE1234F)\r
        is_valid = len(clean) == 10 and clean[:5].isalpha() and clean[5:9].isdigit() and clean[9].isalpha()\r
        print(f"  [STATIC METHOD] PAN '{pan_number}' validation result: {is_valid}")\r
        return is_valid\r
\r
\r
def demonstrate_method_types():\r
    print("=" * 70)\r
    print("1. THE THREE METHOD TYPES IN PYTHON")\r
    print("=" * 70)\r
\r
    # 1. Instance Method Invocation\r
    emp = EmployeePayroll("EMP-101", "Sourav Bhattacharya", 600.0)\r
    emp.calculate_weekly_pay(45.0)\r
\r
    # 2. Class Method Invocation\r
    print("\\nInvoking Class Method on Class:")\r
    EmployeePayroll.set_standard_hours(45)\r
    emp.calculate_weekly_pay(45.0)  # Overtime changes based on class update!\r
\r
    # 3. Static Method Invocation\r
    print("\\nInvoking Static Method on Class & Instance:")\r
    EmployeePayroll.validate_pan_card("ABCDE1234F")\r
    emp.validate_pan_card("INVALID123")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_method_types()\r
`,P=`# topic5_files/alternative_constructors_and_factories.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Class methods (@classmethod) & Static methods (@staticmethod)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 5 - File 2: @classmethod Factory Methods & Subclass Polymorphism\r
Demonstrates:\r
  1. Creating multiple clean constructors via @classmethod factory methods\r
  2. The Subclass Polymorphism Advantage: Why \`cls(...)\` is mandatory instead of \`ClassName(...)\`\r
  3. Constructing base and derived class objects through the same factory pattern\r
"""\r
\r
import json\r
from typing import Dict, Any\r
\r
class BaseCourse:\r
    """Base Course class with factory constructor."""\r
    base_tax_rate = 18.0\r
\r
    def __init__(self, course_id: str, title: str, fee: float):\r
        self.course_id = course_id\r
        self.title = title\r
        self.fee = float(fee)\r
\r
    @classmethod\r
    def from_dict(cls, data: Dict[str, Any]):\r
        """Polymorphic Factory: cls(...) automatically instantiates the calling class!"""\r
        print(f"  [FACTORY CALLED] Invoked on class: '{cls.__name__}'")\r
        return cls(\r
            course_id=data.get("id", "UNSET"),\r
            title=data.get("title", "Untitled Course"),\r
            fee=data.get("fee", 0.0)\r
        )\r
\r
    def __str__(self) -> str:\r
        return f"{self.__class__.__name__} [{self.course_id}]: {self.title} (INR {self.fee:,.2f})"\r
\r
\r
class PremiumCertificationCourse(BaseCourse):\r
    """Subclass inheriting the factory constructor."""\r
\r
    def __init__(self, course_id: str, title: str, fee: float, includes_mentorship: bool = True):\r
        super().__init__(course_id, title, fee)\r
        self.includes_mentorship = includes_mentorship\r
\r
    def __str__(self) -> str:\r
        base_str = super().__str__()\r
        return f"{base_str} | 1-on-1 Mentorship: {self.includes_mentorship}"\r
\r
\r
def demonstrate_factory_polymorphism():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - @classmethod FACTORY SUBCLASS POLYMORPHISM")\r
    print("=" * 70)\r
\r
    course_data = {\r
        "id": "PY-PRO-2026",\r
        "title": "Python Pro Full-Stack & Machine Learning",\r
        "fee": 22000.0\r
    }\r
\r
    # 1. Factory called on BaseCourse -> Returns BaseCourse instance\r
    print("1. Creating via BaseCourse.from_dict():")\r
    base_obj = BaseCourse.from_dict(course_data)\r
    print(f"   Result Type: {type(base_obj)} -> {base_obj}\\n")\r
\r
    # 2. Factory called on Subclass -> Returns PremiumCertificationCourse instance!\r
    print("2. Creating via PremiumCertificationCourse.from_dict():")\r
    sub_obj = PremiumCertificationCourse.from_dict(course_data)\r
    print(f"   Result Type: {type(sub_obj)} -> {sub_obj}")\r
\r
    print("\\n[PASSED] Subclass Polymorphic Factory Instantiation Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_factory_polymorphism()\r
`,M=`# topic5_files/staticmethod_utility_and_namespace_helpers.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Class methods (@classmethod) & Static methods (@staticmethod)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 5 - File 3: @staticmethod as Logical Utility & Domain Namespaces\r
Demonstrates:\r
  1. Defining pure utility functions with @staticmethod\r
  2. Scoping mathematical algorithms and string validators into class namespaces\r
  3. Why static methods are preferred over loose global functions for cohesion\r
"""\r
\r
import re\r
import math\r
\r
class FinancialMathUtils:\r
    """Domain namespace containing financial math algorithms and tax calculations."""\r
\r
    @staticmethod\r
    def calculate_emi(principal: float, annual_rate_percent: float, tenure_months: int) -> float:\r
        """Calculates Equated Monthly Installment (EMI) using standard financial formula."""\r
        monthly_rate = (annual_rate_percent / 100) / 12\r
        emi = (principal * monthly_rate * math.pow(1 + monthly_rate, tenure_months)) / (math.pow(1 + monthly_rate, tenure_months) - 1)\r
        return emi\r
\r
    @staticmethod\r
    def calculate_gst_breakdown(gross_amount: float, gst_rate_percent: float = 18.0) -> dict:\r
        """Splits gross amount into base value, CGST (half) and SGST (half)."""\r
        base_value = gross_amount / (1 + (gst_rate_percent / 100))\r
        total_gst = gross_amount - base_value\r
        cgst = total_gst / 2.0\r
        sgst = total_gst / 2.0\r
\r
        return {\r
            "gross_amount": gross_amount,\r
            "base_value": base_value,\r
            "cgst_9pct": cgst,\r
            "sgst_9pct": sgst,\r
            "total_tax": total_gst\r
        }\r
\r
    @staticmethod\r
    def is_valid_gstin(gstin: str) -> bool:\r
        """Validates 15-character Indian GST Identification Number (GSTIN)."""\r
        pattern = r"^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$"\r
        return bool(re.match(pattern, gstin.strip().upper()))\r
\r
\r
def demonstrate_static_utilities():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - STATIC METHOD UTILITY NAMESPACE")\r
    print("=" * 70)\r
\r
    # 1. Calculate Course Installment EMI:\r
    emi = FinancialMathUtils.calculate_emi(principal=24000.0, annual_rate_percent=10.0, tenure_months=6)\r
    print(f"1. 6-Month Course Loan EMI (INR 24,000 @ 10%): INR {emi:,.2f} / month\\n")\r
\r
    # 2. Reverse GST Breakdown:\r
    gst_info = FinancialMathUtils.calculate_gst_breakdown(11800.0, 18.0)\r
    print("2. GST 18% Inward Breakdown on INR 11,800.00:")\r
    print(f"   * Base Value  : INR {gst_info['base_value']:,.2f}")\r
    print(f"   * CGST (9%)   : +INR {gst_info['cgst_9pct']:,.2f}")\r
    print(f"   * SGST (9%)   : +INR {gst_info['sgst_9pct']:,.2f}")\r
    print(f"   * Total Tax   : INR {gst_info['total_tax']:,.2f}\\n")\r
\r
    # 3. GSTIN Regex Validation:\r
    sample_gstin = "19AAECR4849J1Z8"\r
    is_valid = FinancialMathUtils.is_valid_gstin(sample_gstin)\r
    print(f"3. GSTIN '{sample_gstin}' Valid? -> {is_valid}")\r
\r
    print("\\n[PASSED] Static Utility Methods Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_static_utilities()\r
`,I=`# topic5_files/enterprise_payroll_and_tax_calculator.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Class methods (@classmethod) & Static methods (@staticmethod)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 5 - File 4: Enterprise Payroll & TDS Tax Calculator (Production Case Study)\r
Demonstrates:\r
  1. Instance Methods: Personal salary calculations and slip generation\r
  2. Class Methods: Alternative constructors parsing HR JSON payloads\r
  3. Static Methods: Universal Indian Income Tax TDS bracket calculations\r
"""\r
\r
import json\r
from typing import Dict, Any\r
\r
class EnterprisePayrollEmployee:\r
    """Enterprise Employee Payroll Model integrating all 3 method types."""\r
    organization = "Coder & AccoTax Consulting"\r
    standard_monthly_days = 30\r
\r
    def __init__(self, emp_id: str, name: str, base_salary: float, department: str):\r
        self.emp_id = emp_id\r
        self.name = name\r
        self.base_salary = float(base_salary)\r
        self.department = department\r
        self.present_days = self.standard_monthly_days\r
\r
    # =================================================================\r
    # CLASS METHOD FACTORY (Constructs from HR JSON Payload)\r
    # =================================================================\r
    @classmethod\r
    def from_hr_json(cls, json_str: str) -> 'EnterprisePayrollEmployee':\r
        """Constructs an employee instance from a serialized HR JSON string."""\r
        payload = json.loads(json_str)\r
        return cls(\r
            emp_id=payload["employee_id"],\r
            name=payload["full_name"],\r
            base_salary=float(payload["ctc_monthly"]),\r
            department=payload.get("dept", "General")\r
        )\r
\r
    # =================================================================\r
    # STATIC METHOD (TDS Income Tax Bracket Calculation)\r
    # =================================================================\r
    @staticmethod\r
    def calculate_tds_tax(monthly_taxable_income: float) -> float:\r
        """Computes estimated monthly Tax Deducted at Source (TDS)."""\r
        annual_est = monthly_taxable_income * 12\r
        if annual_est <= 500000.0:\r
            return 0.0\r
        elif annual_est <= 1000000.0:\r
            taxable_slab = annual_est - 500000.0\r
            return (taxable_slab * 0.10) / 12  # 10% slab\r
        else:\r
            tax_first_slab = 500000.0 * 0.10\r
            tax_second_slab = (annual_est - 1000000.0) * 0.20\r
            return (tax_first_slab + tax_second_slab) / 12\r
\r
    # =================================================================\r
    # INSTANCE METHOD (Computes Monthly Pay Slip)\r
    # =================================================================\r
    def generate_salary_slip(self, days_worked: int) -> str:\r
        self.present_days = days_worked\r
        prorated_salary = (self.base_salary / self.standard_monthly_days) * self.present_days\r
        \r
        # Call static method utility for tax deduction\r
        tds_tax = self.calculate_tds_tax(prorated_salary)\r
        net_payable = prorated_salary - tds_tax\r
\r
        return (\r
            f"======================================================================\\n"\r
            f"CODER & ACCOTAX - MONTHLY PAYSLIP\\n"\r
            f"Employee      : {self.name} [{self.emp_id}] | Dept: {self.department}\\n"\r
            f"Base Salary   : INR {self.base_salary:,.2f} (30 Days)\\n"\r
            f"Days Worked   : {self.present_days} / {self.standard_monthly_days} days\\n"\r
            f"Gross Earned  : INR {prorated_salary:,.2f}\\n"\r
            f"TDS Deducted  : -INR {tds_tax:,.2f}\\n"\r
            f"Net Disbursed : INR {net_payable:,.2f}\\n"\r
            f"======================================================================"\r
        )\r
\r
\r
def run_payroll_case_study():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - ENTERPRISE PAYROLL CASE STUDY")\r
    print("=" * 70)\r
\r
    # 1. Instantiate via Class Method Factory\r
    hr_payload = json.dumps({\r
        "employee_id": "EMP-2026-99",\r
        "full_name": "Debolina Mukherjee",\r
        "ctc_monthly": 65000.0,\r
        "dept": "AI & Software Engineering"\r
    })\r
\r
    emp = EnterprisePayrollEmployee.from_hr_json(hr_payload)\r
    print(f"Instantiated Employee: {emp.name} via @classmethod factory.\\n")\r
\r
    # 2. Generate Payslip via Instance Method (which delegates to @staticmethod TDS)\r
    payslip = emp.generate_salary_slip(days_worked=28)\r
    print(payslip)\r
\r
    print("\\n[PASSED] Enterprise Payroll Suite Completed Successfully.")\r
\r
\r
if __name__ == "__main__":\r
    run_payroll_case_study()\r
`,k=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_001: OBJECT-ORIENTED PYTHON\r
          TOPIC 5: CLASS METHODS (@classmethod) & STATIC METHODS (@staticmethod)\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. THE THREE METHOD TYPES AT A GLANCE\r
--------------------------------------------------------------------------------\r
  Method Type        Decorator       First Parameter    Can Access\r
  ------------------------------------------------------------------------------\r
  Instance Method    (None)          self (Instance)    Instance & Class State\r
  Class Method       @classmethod    cls (Class)        Class State only (Factories)\r
  Static Method      @staticmethod   (None)             Neither (Pure Utility)\r
\r
--------------------------------------------------------------------------------\r
2. ALTERNATIVE CONSTRUCTOR FACTORY PATTERN\r
--------------------------------------------------------------------------------\r
  class Course:\r
      def __init__(self, title, fee):\r
          self.title = title\r
          self.fee = fee\r
\r
      @classmethod\r
      def from_dict(cls, data: dict):\r
          # cls(...) ensures subclass polymorphism when inherited!\r
          return cls(title=data['title'], fee=data['fee'])\r
\r
--------------------------------------------------------------------------------\r
3. STATIC METHOD UTILITY PATTERN\r
--------------------------------------------------------------------------------\r
  class TaxUtils:\r
      @staticmethod\r
      def calculate_gst(amount: float, rate: float = 18.0) -> float:\r
          return amount * (rate / 100)\r
\r
================================================================================\r
     END OF STUDY NOTE • TOPIC 5: @classmethod & @staticmethod\r
================================================================================\r
`,D=[{question:"What is a Class Method in Python?",shortAnswer:"A method decorated with @classmethod that receives the class itself ('cls') as its first parameter instead of an instance reference ('self').",explanation:"Class methods can access and modify class-level state and act as alternative constructors.",hint:"Decorated with @classmethod and receives 'cls'.",level:"basic",codeExample:`class Bank:
    @classmethod
    def get_code(cls):
        return cls.bank_code`},{question:"What is a Static Method in Python?",shortAnswer:"A method decorated with @staticmethod that receives neither 'self' nor 'cls', behaving like a plain utility function logically scoped to the class namespace.",explanation:"Static methods do not depend on or modify instance or class state.",hint:"Decorated with @staticmethod and receives neither self nor cls.",level:"basic",codeExample:`class MathUtils:
    @staticmethod
    def add(a, b): return a + b`},{question:"What is the primary advantage of using '@classmethod' for alternative constructors / factory methods?",shortAnswer:"When subclasses inherit the classmethod factory, 'cls(...)' dynamically instantiates the derived subclass rather than the hardcoded parent class, preserving polymorphism.",explanation:"If you hardcoded ParentClass(...) instead of cls(...), calling SubClass.from_dict() would incorrectly return a ParentClass instance.",hint:"cls(...) instantiates the derived subclass polymorphically when inherited.",level:"moderate",codeExample:`@classmethod
def from_dict(cls, data):
    return cls(**data)`},{question:"Can a Class Method access instance attributes (self.attribute)?",shortAnswer:"No. Because a class method is bound to the class ('cls'), no specific instance ('self') is provided, so instance attributes are completely inaccessible.",explanation:"Attempting to access instance attributes inside a class method will cause a NameError or AttributeError.",hint:"No, because 'self' does not exist in class methods.",level:"basic",codeExample:`@classmethod
def show(cls):
    # self.name is NOT accessible here!`},{question:"Can an Instance Method call a Class Method or Static Method?",shortAnswer:"Yes. An instance method can call class and static methods via 'self.class_method()' or 'self.static_method()', or explicitly via 'ClassName.method()'.",explanation:"Python resolves the method on the class during attribute lookup.",hint:"Yes, via self.method_name() or ClassName.method_name().",level:"basic",codeExample:`def generate_slip(self):
    tax = self.calculate_tax(self.salary)  # Calls static method`},{question:"Can Static Methods and Class Methods be invoked through an instance reference (e.g. obj.static_method())?",shortAnswer:"Yes. In Python, both ClassName.method() and obj.method() work identically for @classmethod and @staticmethod.",explanation:"CPython handles method descriptor resolution consistently whether called on the class or an instance.",hint:"Yes, both Class.method() and obj.method() syntax are valid.",level:"basic",codeExample:"emp.validate_pan('ABCDE1234F')  # Valid static method call"},{question:"Why would you use a '@staticmethod' instead of a standalone function outside the class?",shortAnswer:"To logically group utility functions with the domain model they serve (high cohesion), making the codebase cleaner, modular, and easier to navigate.",explanation:"For example, Employee.validate_pan_card() makes the domain relationship explicit.",hint:"Improves code cohesion by grouping related utilities inside the class namespace.",level:"moderate",codeExample:"# Logical domain namespace: FinancialUtils.calculate_emi(...)"},{question:"What is the difference in memory and object type between an instance method, a class method, and a static method?",shortAnswer:"An instance method returns a bound method object bound to an instance; a @classmethod returns a bound method object bound to the class; a @staticmethod returns a standard unbound Python function.",explanation:"Inspecting type(obj.method) reflects these internal descriptor bindings.",hint:"Instance bound method vs Class bound method vs plain function.",level:"complex",codeExample:`type(inst.inst_method)   # <class 'method'> (bound to inst)
type(inst.class_method)  # <class 'method'> (bound to Class)
type(inst.static_method) # <class 'function'>`},{question:"What error occurs if you forget the '@classmethod' decorator on a method declared with 'def factory(cls, data):' and call it as 'ClassName.factory(data)'?",shortAnswer:"TypeError: factory() missing 1 required positional argument: 'data'.",explanation:"Without @classmethod, Python treats it as a regular instance method expecting an instance in the first parameter.",hint:"Treated as a regular instance method missing an argument.",level:"moderate",codeExample:`# BUG: def from_dict(cls, data):
# FIX: @classmethod
#      def from_dict(cls, data):`},{question:"Can a Class Method modify class-level state globally?",shortAnswer:"Yes. By assigning to 'cls.class_attribute = new_value', the change is applied globally to the class namespace in RAM.",explanation:"Affects all instances that look up that class attribute.",hint:"Yes, modifying cls.attr modifies the class attribute globally.",level:"basic",codeExample:`@classmethod
def update_branch(cls, name):
    cls.branch_name = name`},{question:"How do you define multiple constructors in Python without constructor overloading?",shortAnswer:"By defining class methods decorated with @classmethod (e.g. from_dict, from_json, from_csv, from_timestamp) that parse different input formats and call cls(...).",explanation:"This is the canonical Pythonic solution to method overloading.",hint:"Use @classmethod factory methods (from_dict, from_json, etc.).",level:"basic",codeExample:`@classmethod
def from_json(cls, json_str):
    return cls(**json.loads(json_str))`},{question:"What is the descriptor protocol mechanism behind '@classmethod' and '@staticmethod'?",shortAnswer:"Both decorators implement the '__get__' descriptor method: classmethod binds the class object to the function, while staticmethod returns the underlying function as-is without binding.",explanation:"Decorators in Python leverage descriptors to customize attribute access.",hint:"They use the __get__ descriptor to customize method binding.",level:"complex",codeExample:"# classmethod.__get__ binds cls; staticmethod.__get__ returns raw function"},{question:"Can a Static Method be overridden in a subclass?",shortAnswer:"Yes. Subclasses can override static methods just like any other method in Python.",explanation:"Attribute lookup will resolve the subclass's static method version.",hint:"Yes, static methods participate in standard inheritance and overriding.",level:"basic",codeExample:`class Child(Parent):
    @staticmethod
    def helper(): return 'custom'`},{question:"Can a Class Method be overridden in a subclass?",shortAnswer:"Yes. Subclasses can override class methods, and 'cls' will automatically reference the subclass.",explanation:"Preserves polymorphic behavior across the entire hierarchy.",hint:"Yes, class methods can be overridden polymorphically.",level:"basic",codeExample:`class Child(Parent):
    @classmethod
    def factory(cls): return cls()`},{question:"What naming conventions are recommended for @classmethod alternative constructors?",shortAnswer:"Prefix with 'from_' or 'by_' (e.g. from_dict, from_json, from_csv, from_file, from_timestamp).",explanation:"Follows standard Python library conventions (e.g. datetime.fromtimestamp, dict.fromkeys).",hint:"Prefix with 'from_' (e.g. from_dict, from_json).",level:"basic",codeExample:`User.from_dict(data)
LogEntry.from_timestamp(ts)`},{question:"What built-in standard library classmethods exist in Python?",shortAnswer:"Examples include 'dict.fromkeys()', 'datetime.fromtimestamp()', 'datetime.now()', and 'int.from_bytes()'.",explanation:"These are classic examples of @classmethod factory constructors.",hint:"dict.fromkeys, datetime.fromtimestamp, int.from_bytes.",level:"moderate",codeExample:"d = dict.fromkeys(['a', 'b'], 0)"},{question:"Can a class method call another class method on the same class?",shortAnswer:"Yes: using 'cls.other_class_method(*args)'.",explanation:"Ensures the method call resolves against the active class.",hint:"Use cls.other_class_method().",level:"basic",codeExample:`@classmethod
def batch_create(cls, items):
    return [cls.from_dict(i) for i in items]`},{question:"When should you prefer a standalone module-level function over a @staticmethod?",shortAnswer:"When the function is generic across multiple unrelated classes or does not logically belong to any single class domain.",explanation:"Avoid forcing generic utilities into classes unnecessarily.",hint:"When the function is generic across multiple unrelated classes.",level:"moderate",codeExample:"# Generic math helpers: math.sqrt(x) vs class methods"},{question:"Can you pass arguments to a @staticmethod just like a normal function?",shortAnswer:"Yes. Arguments are passed directly in order with no implicit first argument injected.",explanation:"Behaves 100% like a normal Python function.",hint:"Yes, arguments match the declared parameters 1-to-1.",level:"basic",codeExample:"MathUtils.calculate_emi(25000, 10.0, 12)"},{question:"What is the difference between 'cls' and 'self' in class definitions?",shortAnswer:"'self' points to a specific living instance object; 'cls' points to the class object itself.",explanation:"'self' accesses instance state; 'cls' accesses class state and creates new instances.",hint:"self = instance object; cls = class object.",level:"basic",codeExample:"# self = instance; cls = class"},{question:"Can you decorate a method with both @classmethod and @property in modern Python?",shortAnswer:"In Python 3.9–3.10 this was briefly supported, but it was deprecated in Python 3.11 and removed in 3.13; instead, use a custom metaclass property.",explanation:"Chaining @classmethod and @property causes architectural ambiguity.",hint:"Deprecated in Python 3.11+; use metaclass properties instead.",level:"complex",codeExample:"# Deprecated in Python 3.11+; avoid chaining @classmethod and @property"},{question:"How do you test a @staticmethod in isolation in unit tests?",shortAnswer:"Directly import and call 'ClassName.static_method(args)' without creating any mock objects or class instances.",explanation:"Static methods are pure and trivial to unit test.",hint:"Directly call ClassName.static_method(args) without instantiating.",level:"basic",codeExample:"assert TaxUtils.calculate_gst(100.0) == 18.0"},{question:"What is the performance difference between calling an instance method, class method, and static method?",shortAnswer:"Static methods are marginally faster because they avoid argument binding descriptors; however, the difference is negligible in most applications.",explanation:"CPython optimizes method descriptors efficiently.",hint:"Static methods avoid argument binding; performance difference is negligible.",level:"complex",codeExample:"# Micro-benchmark difference is minimal"},{question:"Can a subclass change a parent class method into an instance method?",shortAnswer:"Technically yes, but doing so violates the Liskov Substitution Principle (LSP) and creates severe type confusion.",explanation:"Always maintain consistent method signatures across inheritance.",hint:"Technically possible but strongly discouraged as an anti-pattern.",level:"complex",codeExample:"# Anti-pattern: changing method archetypes in subclasses"},{question:"What is the ultimate decision guideline for choosing between Instance, Class, and Static methods?",shortAnswer:"Needs instance state? -> Instance Method. Needs class state / factory instantiation? -> Class Method (@classmethod). Needs neither? -> Static Method (@staticmethod).",explanation:"The definitive 3-tier rule in Python OOP architecture.",hint:"Instance state -> Instance; Class state/Factory -> Class; Neither -> Static.",level:"basic",codeExample:`# 1. self -> Instance Method
# 2. cls -> Class Method
# 3. None -> Static Method`}];function L(){const d=r.useRef([]),[l,m]=r.useState("triad"),[s,h]=r.useState("instance"),[x,j]=r.useState("45"),[i,v]=r.useState("40"),[c,N]=r.useState("ABCDE1234F");r.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(g=>{g.isIntersecting&&g.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return d.current.forEach(n=>{n&&t.observe(n)}),()=>t.disconnect()},[]);const a=t=>{t&&!d.current.includes(t)&&d.current.push(t)},f=t=>{const n=t.trim().toUpperCase();return n.length===10&&/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(n)},p=parseFloat(x)||0,u=parseFloat(i)||40,b=600,y=Math.min(p,u),_=Math.max(0,p-u),C=y*b+_*b*1.5;return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:a,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_001"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 5"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Object-Oriented Programming (OOP) in Python"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Class Methods (",e.jsx("code",{className:"text-teal-400 font-mono",children:"@classmethod"}),") & Static Methods (",e.jsx("code",{className:"text-cyan-400 font-mono",children:"@staticmethod"}),")"]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master Python's method triad: Instance Methods (",e.jsx("code",{className:"text-teal-300 font-mono",children:"self"}),"), Class Methods (",e.jsx("code",{className:"text-teal-400 font-mono",children:"@classmethod"}),", ",e.jsx("code",{className:"text-teal-300 font-mono",children:"cls"}),") for alternative factory constructors, and Static Methods (",e.jsx("code",{className:"text-cyan-400 font-mono",children:"@staticmethod"}),") for domain utilities and algorithmic calculations."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🧬 The Three Method Types (self vs cls vs None)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🏭 Alternative Factory Constructors (from_dict)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Polymorphic Subclass Instantiation (cls)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🧮 Pure Static Utility Namespaces"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🔱"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Python Method Archetypes: Instance, Class & Static"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"Python provides three distinct categories of methods within class bodies, defined by their first parameter binding:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-base mb-1",children:"1️⃣ Instance Method"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"def method(self, ...):"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Receives living instance ",e.jsx("code",{className:"text-teal-300 font-mono",children:"self"}),". Accesses and modifies instance state and class attributes."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-base mb-1",children:"2️⃣ Class Method"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"@classmethod def f(cls, ...):"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Receives the class ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"cls"}),". Powers alternative constructors (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"from_dict"}),") and class state updates."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-base mb-1",children:"3️⃣ Static Method"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"@staticmethod def u(...):"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Receives neither ",e.jsx("code",{className:"text-slate-400 font-mono",children:"self"})," nor ",e.jsx("code",{className:"text-slate-400 font-mono",children:"cls"}),". Scopes pure utility algorithms into the class namespace."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-cyan-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Subclass Factory Advantage: Why cls(...) Matters"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["When a subclass inherits a ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"@classmethod"})," factory method, calling ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"SubClass.from_dict()"})," passes ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"SubClass"})," as ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"cls"}),", automatically returning an instance of the derived class!"]})]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Method Bindings & Factory Pipelines"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>m("triad"),className:o("px-3 py-1.5 rounded-lg transition-all",l==="triad"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"The Method Triad"}),e.jsx("button",{onClick:()=>m("factories"),className:o("px-3 py-1.5 rounded-lg transition-all",l==="factories"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Polymorphic Factory (cls)"}),e.jsx("button",{onClick:()=>m("utilities"),className:o("px-3 py-1.5 rounded-lg transition-all",l==="utilities"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Static Utility Namespace"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining parameter injections, factory instantiation, and pure utility scoping:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:l==="triad"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"THE THREE METHOD TYPES IN CPYTHON"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"Instance Method"}),e.jsx("text",{x:"15",y:"55",fill:"#ecfdf5",fontSize:"10 font-mono",children:"def calc_pay(self, hrs):"}),e.jsx("text",{x:"15",y:"75",fill:"#cbd5e1",fontSize:"10 font-mono",children:"    return self.rate * hrs"}),e.jsx("rect",{x:"15",y:"110",width:"220",height:"60",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"25",y:"135",fill:"#34d399",fontSize:"10 font-bold",children:"1st Param: self (Instance)"}),e.jsx("text",{x:"25",y:"155",fill:"#ecfdf5",fontSize:"9",children:"Reads/mutates self.__dict__"}),e.jsx("text",{x:"15",y:"200",fill:"#a7f3d0",fontSize:"10",children:"Called via: emp.calc_pay(40)"}),e.jsx("rect",{x:"280",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"295",y:"30",fill:"#a5f3fc",fontSize:"12",fontWeight:"bold",children:"@classmethod"}),e.jsx("text",{x:"295",y:"55",fill:"#ecfdf5",fontSize:"10 font-mono",children:"@classmethod"}),e.jsx("text",{x:"295",y:"75",fill:"#ecfdf5",fontSize:"10 font-mono",children:"def from_dict(cls, data):"}),e.jsx("rect",{x:"295",y:"110",width:"220",height:"60",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"305",y:"135",fill:"#38bdf8",fontSize:"10 font-bold",children:"1st Param: cls (Class Object)"}),e.jsx("text",{x:"305",y:"155",fill:"#e0f2fe",fontSize:"9",children:"Factory & Class State Updates"}),e.jsx("text",{x:"295",y:"200",fill:"#7dd3fc",fontSize:"10",children:"Called via: Emp.from_dict(d)"}),e.jsx("rect",{x:"560",y:"0",width:"250",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"575",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"@staticmethod"}),e.jsx("text",{x:"575",y:"55",fill:"#ecfdf5",fontSize:"10 font-mono",children:"@staticmethod"}),e.jsx("text",{x:"575",y:"75",fill:"#ecfdf5",fontSize:"10 font-mono",children:"def validate_pan(pan):"}),e.jsx("rect",{x:"575",y:"110",width:"220",height:"60",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"585",y:"135",fill:"#c084fc",fontSize:"10 font-bold",children:"1st Param: None (Plain Arg)"}),e.jsx("text",{x:"585",y:"155",fill:"#f3e8ff",fontSize:"9",children:"Pure Utility Function"}),e.jsx("text",{x:"575",y:"200",fill:"#c4b5fd",fontSize:"10",children:"Called via: Emp.validate_pan(p)"})]})]}):l==="factories"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"SUBCLASS POLYMORPHIC FACTORY: cls(...) ADVANTAGE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"class BaseCourse:"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"10 font-mono",children:"  @classmethod"}),e.jsx("text",{x:"20",y:"80",fill:"#ecfdf5",fontSize:"10 font-mono",children:"  def from_dict(cls, data):"}),e.jsx("text",{x:"20",y:"100",fill:"#34d399",fontSize:"10 font-mono font-bold",children:"      return cls(**data)  # <-- Dynamic!"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"155",fill:"#a7f3d0",fontSize:"10 font-bold",children:"When called as BaseCourse.from_dict():"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"9 font-mono",children:"cls is BaseCourse → Returns BaseCourse instance"})]}),e.jsxs("g",{transform:"translate(460, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"class PremiumCourse(BaseCourse):"}),e.jsx("text",{x:"20",y:"60",fill:"#cbd5e1",fontSize:"10 font-mono",children:"  # Inherits from_dict without changes!"}),e.jsx("rect",{x:"20",y:"100",width:"340",height:"115",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"30",y:"125",fill:"#c084fc",fontSize:"10 font-bold",children:"When called as PremiumCourse.from_dict():"}),e.jsx("text",{x:"30",y:"150",fill:"#38bdf8",fontSize:"10 font-mono",children:"cls is PremiumCourse"}),e.jsx("text",{x:"30",y:"175",fill:"#34d399",fontSize:"10 font-bold",children:"✓ Automatically Returns PremiumCourse instance!"}),e.jsx("text",{x:"30",y:"195",fill:"#cbd5e1",fontSize:"9",children:"Zero factory code duplication in subclasses!"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"STATIC METHOD AS LOGICAL DOMAIN NAMESPACE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"400",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"20",y:"30",fill:"#a5f3fc",fontSize:"12",fontWeight:"bold",children:"class FinancialMathUtils:"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"10 font-mono",children:"  @staticmethod"}),e.jsx("text",{x:"20",y:"80",fill:"#ecfdf5",fontSize:"10 font-mono",children:"  def calculate_emi(P, r, n): ..."}),e.jsx("text",{x:"20",y:"115",fill:"#ecfdf5",fontSize:"10 font-mono",children:"  @staticmethod"}),e.jsx("text",{x:"20",y:"135",fill:"#ecfdf5",fontSize:"10 font-mono",children:"  def calculate_gst(gross, rate): ..."}),e.jsx("text",{x:"20",y:"170",fill:"#ecfdf5",fontSize:"10 font-mono",children:"  @staticmethod"}),e.jsx("text",{x:"20",y:"190",fill:"#ecfdf5",fontSize:"10 font-mono",children:"  def is_valid_gstin(gstin): ..."})]}),e.jsxs("g",{transform:"translate(460, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"Architectural Advantages:"}),e.jsx("text",{x:"20",y:"70",fill:"#cbd5e1",fontSize:"10",children:"• High Domain Cohesion: Related math grouped together"}),e.jsx("text",{x:"20",y:"100",fill:"#cbd5e1",fontSize:"10",children:"• Clean Import API: from finance import FinancialMathUtils"}),e.jsx("text",{x:"20",y:"130",fill:"#cbd5e1",fontSize:"10",children:"• Pure Functions: Deterministic, trivial to unit test"}),e.jsx("text",{x:"20",y:"160",fill:"#cbd5e1",fontSize:"10",children:"• Usable without instantiating dummy objects"})]})]})})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Method Dispatcher & Execution Playground"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Select a method archetype to execute simulated Python method bindings live:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 block font-bold",children:"Select Method Archetype to Dispatch"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("button",{onClick:()=>h("instance"),className:o("p-3 rounded-lg text-left text-xs font-mono transition-all border",s==="instance"?"bg-teal-950/80 border-teal-500 text-teal-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"font-bold text-teal-300",children:"1. Instance Method: emp.calculate_weekly_pay()"}),e.jsxs("div",{className:"text-[11px] text-slate-400",children:["Uses self.hourly_rate (INR 600) + class standard_hours (",i,"h)"]})]}),e.jsxs("button",{onClick:()=>h("class"),className:o("p-3 rounded-lg text-left text-xs font-mono transition-all border",s==="class"?"bg-cyan-950/80 border-cyan-500 text-cyan-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"font-bold text-cyan-300",children:"2. Class Method: EmployeePayroll.set_standard_hours()"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"Updates cls.standard_work_hours globally for all employees"})]}),e.jsxs("button",{onClick:()=>h("static"),className:o("p-3 rounded-lg text-left text-xs font-mono transition-all border",s==="static"?"bg-purple-950/80 border-purple-500 text-purple-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"font-bold text-purple-300",children:"3. Static Method: EmployeePayroll.validate_pan_card()"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"Pure regex validator requiring neither self nor cls"})]})]}),e.jsxs("div",{className:"pt-2",children:[s==="instance"&&e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-mono text-slate-400 mb-1",children:"Hours Worked this week"}),e.jsx("input",{type:"number",value:x,onChange:t=>j(t.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-sm text-teal-300 font-mono"})]}),s==="class"&&e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-mono text-slate-400 mb-1",children:"Company Standard Hours (cls.standard_work_hours)"}),e.jsx("input",{type:"number",value:i,onChange:t=>v(t.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-sm text-cyan-300 font-mono"})]}),s==="static"&&e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-mono text-slate-400 mb-1",children:"Indian PAN Card Number"}),e.jsx("input",{type:"text",value:c,onChange:t=>N(t.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-sm text-purple-300 font-mono"})]})]})]}),e.jsxs("div",{className:"space-y-3 flex flex-col justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block font-bold",children:"Execution & Parameter Inspection"}),e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-3 text-xs font-mono flex-1",children:[s==="instance"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-teal-300 font-bold",children:"[INSTANCE METHOD EXECUTED]"}),e.jsxs("div",{className:"text-slate-300 space-y-1",children:[e.jsx("div",{children:"First Param 'self': <EmployeePayroll object at 0x7fa20>"}),e.jsxs("div",{children:["Regular Hours   : ",y,"h @ INR 600/h"]}),e.jsxs("div",{children:["Overtime Hours  : ",_,"h @ 1.5x (INR 900/h)"]}),e.jsxs("div",{className:"text-emerald-400 font-bold pt-2 border-t border-slate-800",children:["Gross Disbursed : INR ",C.toLocaleString("en-IN",{minimumFractionDigits:2})]})]})]}),s==="class"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-cyan-300 font-bold",children:"[CLASS METHOD EXECUTED]"}),e.jsxs("div",{className:"text-slate-300 space-y-1",children:[e.jsx("div",{children:"First Param 'cls' : <class 'EmployeePayroll'>"}),e.jsxs("div",{children:["Global Update    : cls.standard_work_hours = ",i]}),e.jsxs("div",{className:"text-emerald-400 font-bold pt-2 border-t border-slate-800",children:["✓ All employee objects immediately compute overtime based on ",i,"h!"]})]})]}),s==="static"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-purple-300 font-bold",children:"[STATIC METHOD EXECUTED]"}),e.jsxs("div",{className:"text-slate-300 space-y-1",children:[e.jsx("div",{children:"First Param       : None (Direct arguments)"}),e.jsxs("div",{children:['Testing PAN Format: "',c,'"']}),e.jsxs("div",{className:"pt-2 border-t border-slate-800 font-bold",children:["Validation Result:"," ",e.jsx("span",{className:f(c)?"text-emerald-400":"text-rose-400",children:f(c)?"✓ VALID PAN FORMAT":"❌ INVALID PAN FORMAT (Must be 5 letters, 4 digits, 1 letter)"})]})]})]})]})]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Method Archetypes Reference Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Archetype"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Decorator"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"First Parameter"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Can Access Instance?"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Primary Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"Instance Method"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400",children:"None"}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300",children:"self (Instance)"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-bold",children:"YES"}),e.jsx("td",{className:"py-3 px-4",children:"Standard object state and business operations"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"Class Method"}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300",children:"@classmethod"}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300",children:"cls (Class)"}),e.jsx("td",{className:"py-3 px-4 text-rose-400",children:"NO"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-bold",children:"Alternative constructors (from_dict) & class state"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Static Method"}),e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300",children:"@staticmethod"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400",children:"None"}),e.jsx("td",{className:"py-3 px-4 text-rose-400",children:"NO"}),e.jsx("td",{className:"py-3 px-4",children:"Pure math/validation utility functions in domain"})]})]})]})})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating method bindings, polymorphic factories, static domain utilities, and enterprise payroll suites:"}),e.jsx(w,{files:[{filename:"classmethod_vs_staticmethod_mechanics.py",code:E,description:"The 3 Python method archetypes: instance (self), class (@classmethod, cls), and static (@staticmethod)."},{filename:"alternative_constructors_and_factories.py",code:P,description:"Polymorphic factory constructors using @classmethod and why cls(...) preserves subclass inheritance."},{filename:"staticmethod_utility_and_namespace_helpers.py",code:M,description:"Domain utility namespaces with @staticmethod for EMI loan math, reverse GST breakdown, and GSTIN regex validation."},{filename:"enterprise_payroll_and_tax_calculator.py",code:I,description:"Enterprise Payroll & TDS Income Tax Calculator integrating instance methods, @classmethod factories, and @staticmethod tax calculations."}]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Forgetting `@classmethod` Decorator"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"def from_dict(cls, data):"})," without ",e.jsx("code",{className:"text-rose-300 font-mono",children:"@classmethod"})," causes Python to treat it as an instance method expecting an instance in ",e.jsx("code",{className:"text-rose-300 font-mono",children:"cls"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always add ",e.jsx("code",{className:"text-emerald-300",children:"@classmethod"})," above factory methods."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Hardcoding ClassName in Factory"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-amber-300 font-mono",children:"return BaseCourse(**data)"})," inside a classmethod breaks subclasses! Calling ",e.jsx("code",{className:"text-amber-300 font-mono",children:"SubClass.from_dict()"})," will incorrectly return a ",e.jsx("code",{className:"text-amber-300 font-mono",children:"BaseCourse"})," instance."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always instantiate via ",e.jsx("code",{className:"text-emerald-300",children:"return cls(**data)"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Accessing `self` in Static Methods"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Attempting to access instance attributes like ",e.jsx("code",{className:"text-purple-300 font-mono",children:"self.name"})," inside a ",e.jsx("code",{className:"text-purple-300 font-mono",children:"@staticmethod"})," raises ",e.jsx("code",{className:"text-purple-300 font-mono",children:"NameError: name 'self' is not defined"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Static methods must receive all needed data explicitly as parameters."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Chaining `@classmethod` & `@property`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Combining ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"@classmethod @property"})," was deprecated in Python 3.11 and removed in 3.13 due to architectural ambiguity."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use standard class methods (",e.jsx("code",{className:"text-emerald-300",children:"get_value()"}),") or metaclass properties."]})]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering class methods, static methods, polymorphic factories, and utility namespaces:"}),e.jsx(T,{questions:D})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with method triad matrices, alternative constructor recipes, and static utility patterns:"}),e.jsx("div",{className:"mb-10",children:e.jsx(S,{content:k,filename:"python_topic5_classmethods_and_staticmethods_notes.txt",title:"Print Topic 5 Study Notes"})}),e.jsx(A,{})]})]})]})}export{L as default};
