import{b as i,j as e,bg as a}from"./vendor-react-core-Doz9nIC6.js";import{P as f}from"./PythonFileLoader-hCi5osN-.js";import{P as b}from"./PlainTextPrint-C08xhKA4.js";import{F as u}from"./FAQTemplate-CkSqDH4B.js";import{T as g}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const y=`# topic13_files/abc_module_fundamentals_and_enforcement.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Abstract Base Classes (abc module)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 13 - File 1: Abstract Base Classes (abc module) Fundamentals\r
Demonstrates:\r
  1. Defining Abstract Base Classes using \`from abc import ABC, abstractmethod\`\r
  2. The Instantiation Blocker: Attempting to instantiate an incomplete class raises TypeError\r
  3. Enforcing mandatory method contracts on derived concrete classes\r
"""\r
\r
from abc import ABC, abstractmethod\r
from typing import Dict, Any\r
\r
# =====================================================================\r
# 1. ABSTRACT BASE CLASS (The Contract Interface)\r
# =====================================================================\r
class BaseDatabaseConnector(ABC):\r
    """Abstract interface defining the mandatory database lifecycle."""\r
\r
    def __init__(self, host: str, port: int, database_name: str):\r
        self.host = host\r
        self.port = port\r
        self.database_name = database_name\r
        self.is_connected = False\r
\r
    @abstractmethod\r
    def connect(self) -> bool:\r
        """Mandatory abstract method: Must establish socket connection."""\r
        pass\r
\r
    @abstractmethod\r
    def execute_query(self, sql_statement: str) -> Dict[str, Any]:\r
        """Mandatory abstract method: Must execute query and return result dictionary."""\r
        pass\r
\r
    def disconnect(self):\r
        """Concrete common method shared across all derived connectors."""\r
        self.is_connected = False\r
        print(f"  [DISCONNECTED] Closed session with {self.database_name} on {self.host}:{self.port}")\r
\r
\r
# =====================================================================\r
# 2. CONCRETE IMPLEMENTATION 1 (PostgreSQL)\r
# =====================================================================\r
class PostgreSQLConnector(BaseDatabaseConnector):\r
    """Fully implements all abstract methods."""\r
\r
    def connect(self) -> bool:\r
        print(f"  [POSTGRES] Handshaking with {self.database_name} at {self.host}:{self.port} via libpq...")\r
        self.is_connected = True\r
        return True\r
\r
    def execute_query(self, sql_statement: str) -> Dict[str, Any]:\r
        if not self.is_connected:\r
            raise ConnectionError("Cannot query disconnected database!")\r
        print(f"  [POSTGRES EXEC] {sql_statement}")\r
        return {"engine": "PostgreSQL", "status": "200_OK", "rows": 42}\r
\r
\r
# =====================================================================\r
# 3. INCOMPLETE SUBCLASS (Omits execute_query!)\r
# =====================================================================\r
class IncompleteSQLiteConnector(BaseDatabaseConnector):\r
    """Broken Subclass: Implements connect(), but forgets execute_query()!"""\r
\r
    def connect(self) -> bool:\r
        self.is_connected = True\r
        return True\r
\r
\r
def demonstrate_abc_fundamentals():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - ABSTRACT BASE CLASSES (ABC) ENFORCEMENT")\r
    print("=" * 70)\r
\r
    # 1. Attempting to instantiate the Abstract Base Class directly:\r
    print("1. Attempting to instantiate \`BaseDatabaseConnector\` directly:")\r
    try:\r
        base = BaseDatabaseConnector("localhost", 5432, "institute_db")\r
    except TypeError as err:\r
        print(f"   [BLOCKED BY CPYTHON] TypeError: {err}\\n")\r
\r
    # 2. Attempting to instantiate an Incomplete Subclass:\r
    print("2. Attempting to instantiate \`IncompleteSQLiteConnector\` (Missing execute_query):")\r
    try:\r
        bad_subclass = IncompleteSQLiteConnector("localhost", 0, "local.sqlite")\r
    except TypeError as err:\r
        print(f"   [BLOCKED BY CPYTHON] TypeError: {err}\\n")\r
\r
    # 3. Successful Concrete Implementation:\r
    print("3. Instantiating fully implemented \`PostgreSQLConnector\`:")\r
    pg = PostgreSQLConnector("db.codernaccotax.co.in", 5432, "student_ledger_2026")\r
    pg.connect()\r
    res = pg.execute_query("SELECT COUNT(*) FROM student_admissions;")\r
    print(f"   Query Result: {res}")\r
    pg.disconnect()\r
\r
    print("\\n[PASSED] Abstract Base Class Enforcement Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_abc_fundamentals()\r
`,_=`# topic13_files/abstract_properties_and_classmethods.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Abstract Base Classes (abc module)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 13 - File 2: Abstract Properties, Classmethods & Virtual Subclasses\r
Demonstrates:\r
  1. Abstract Properties: Combining \`@property\` and \`@abstractmethod\`\r
  2. Abstract Classmethods: Combining \`@classmethod\` and \`@abstractmethod\`\r
  3. Virtual Subclasses via \`ABC.register()\` (Subclassing without inheritance!)\r
  4. Custom dynamic subtyping via \`__subclasshook__\`\r
"""\r
\r
from abc import ABC, abstractmethod\r
from typing import Dict, Any\r
\r
# =====================================================================\r
# 1. ABSTRACT BASE WITH ABSTRACT PROPERTIES & CLASSMETHODS\r
# =====================================================================\r
class BaseCloudStorageProvider(ABC):\r
    """Abstract contract enforcing properties and factory classmethods."""\r
\r
    @property\r
    @abstractmethod\r
    def provider_name(self) -> str:\r
        """Mandatory abstract read-only property."""\r
        pass\r
\r
    @property\r
    @abstractmethod\r
    def storage_quota_gb(self) -> float:\r
        """Mandatory abstract read-only property."""\r
        pass\r
\r
    @classmethod\r
    @abstractmethod\r
    def create_from_config(cls, config: Dict[str, Any]) -> "BaseCloudStorageProvider":\r
        """Mandatory abstract alternative constructor factory."""\r
        pass\r
\r
    @abstractmethod\r
    def upload_file(self, filename: str, binary_data: bytes) -> str:\r
        """Mandatory file upload contract."""\r
        pass\r
\r
\r
# =====================================================================\r
# 2. CONCRETE IMPLEMENTATION: AWS S3 PROVIDER\r
# =====================================================================\r
class AWSS3StorageProvider(BaseCloudStorageProvider):\r
    def __init__(self, bucket_name: str, quota_gb: float):\r
        self.bucket_name = bucket_name\r
        self._quota_gb = float(quota_gb)\r
\r
    @property\r
    def provider_name(self) -> str:\r
        return f"Amazon Web Services S3 (Bucket: {self.bucket_name})"\r
\r
    @property\r
    def storage_quota_gb(self) -> float:\r
        return self._quota_gb\r
\r
    @classmethod\r
    def create_from_config(cls, config: Dict[str, Any]) -> "AWSS3StorageProvider":\r
        return cls(config.get("bucket", "default-bucket"), config.get("quota", 100.0))\r
\r
    def upload_file(self, filename: str, binary_data: bytes) -> str:\r
        return f"https://s3.amazonaws.com/{self.bucket_name}/{filename}"\r
\r
\r
# =====================================================================\r
# 3. VIRTUAL SUBCLASSES VIA ABC.register()\r
# =====================================================================\r
class ExternalThirdPartyDropBox:\r
    """An external vendor class that does NOT inherit from BaseCloudStorageProvider."""\r
    def upload_file(self, filename: str, binary_data: bytes) -> str:\r
        return f"https://dropbox.com/files/{filename}"\r
\r
\r
# Register as a Virtual Subclass:\r
BaseCloudStorageProvider.register(ExternalThirdPartyDropBox)\r
\r
\r
def demonstrate_abstract_properties_and_virtual():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - ABSTRACT PROPERTIES & VIRTUAL SUBCLASSES")\r
    print("=" * 70)\r
\r
    # 1. Factory Creation via Abstract Classmethod\r
    s3 = AWSS3StorageProvider.create_from_config({"bucket": "coder-accotax-backups", "quota": 500.0})\r
    print(f"1. Provider Name   : {s3.provider_name}")\r
    print(f"   Storage Quota   : {s3.storage_quota_gb} GB")\r
    print(f"   Uploaded File   : {s3.upload_file('syllabus_2026.pdf', b'101010')}\\n")\r
\r
    # 2. Virtual Subclass Reflection (ABC.register in action!)\r
    print("2. Virtual Subclass Introspection (ExternalThirdPartyDropBox):")\r
    print(f"   issubclass(DropBox, BaseCloudStorageProvider) : {issubclass(ExternalThirdPartyDropBox, BaseCloudStorageProvider)}")\r
    \r
    dropbox_instance = ExternalThirdPartyDropBox()\r
    print(f"   isinstance(dropbox_inst, BaseCloudStorageProvider): {isinstance(dropbox_instance, BaseCloudStorageProvider)}")\r
\r
    print(r"""\r
Insight:\r
  \`ExternalThirdPartyDropBox\` never inherited from \`BaseCloudStorageProvider\` in code.\r
  Yet, via \`ABC.register()\`, Python's \`issubclass()\` and \`isinstance()\` treat it as a\r
  first-class virtual subtype!\r
""")\r
    print("[PASSED] Abstract Properties & Virtual Subclasses Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_abstract_properties_and_virtual()\r
`,A=`# topic13_files/collections_abc_and_interface_compliance.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Abstract Base Classes (abc module)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 13 - File 3: Python Standard Library \`collections.abc\` Interfaces\r
Demonstrates:\r
  1. Inheriting from \`collections.abc.Sequence\` to build custom data collections\r
  2. Free "batteries included" mixin methods provided by standard ABCs (e.g. \`count()\`, \`index()\`, \`__contains__\`)\r
  3. Complying with standard Python container protocols\r
"""\r
\r
from collections.abc import Sequence, Mapping\r
from typing import List, Any\r
\r
class ImmutableStudentRecord(Sequence):\r
    """Custom Sequence implementing only __len__ and __getitem__.\r
    collections.abc.Sequence automatically provides:\r
      - __iter__\r
      - __contains__ ('in')\r
      - __reversed__\r
      - index()\r
      - count()\r
    """\r
\r
    def __init__(self, student_name: str, scores: List[float]):\r
        self.student_name = student_name\r
        self._scores = tuple(scores)  # Immutable tuple\r
\r
    # =================================================================\r
    # MANDATORY ABSTRACT METHODS FOR \`collections.abc.Sequence\`\r
    # =================================================================\r
    def __len__(self) -> int:\r
        return len(self._scores)\r
\r
    def __getitem__(self, index: int) -> float:\r
        return self._scores[index]\r
\r
\r
def demonstrate_collections_abc():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - collections.abc STANDARD INTERFACES")\r
    print("=" * 70)\r
\r
    record = ImmutableStudentRecord("Ananya Ghosh", [85.0, 92.5, 88.0, 92.5, 96.0])\r
\r
    # 1. Base Implemented Methods\r
    print(f"1. len(record)  : {len(record)} exam marks")\r
    print(f"   record[0]    : {record[0]}")\r
    print(f"   record[-1]   : {record[-1]}\\n")\r
\r
    # 2. FREE METHODS INHERITED FROM collections.abc.Sequence!\r
    print("2. Free Mixin Methods provided by \`collections.abc.Sequence\`:")\r
    print(f"   * Iteration  : {[x for x in record]}")\r
    print(f"   * Membership : 96.0 in record -> {96.0 in record}")\r
    print(f"   * count(92.5): {record.count(92.5)} times")\r
    print(f"   * index(88.0): Found at index {record.index(88.0)}")\r
\r
    # 3. isinstance validation\r
    print(f"\\n3. isinstance(record, collections.abc.Sequence): {isinstance(record, Sequence)}")\r
\r
    print("\\n[PASSED] collections.abc Compliance Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_collections_abc()\r
`,C=`# topic13_files/enterprise_payroll_and_tax_abc_system.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Abstract Base Classes (abc module)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 13 - File 4: Enterprise Institutional Payroll & Tax System (Production Case Study)\r
Demonstrates:\r
  1. Abstract Base Class enforcing abstract methods and abstract properties\r
  2. Template Method Pattern: Concrete workflow method orchestrating abstract calculations\r
  3. Concrete implementations: FullTimeFaculty, VisitingAdjunctLecturer, ConsultantStaff\r
"""\r
\r
from abc import ABC, abstractmethod\r
from typing import Dict, Any\r
\r
# =====================================================================\r
# ABSTRACT BASE CLASS: PAYROLL CONTRACT & TEMPLATE METHOD\r
# =====================================================================\r
class BaseEmployeePayroll(ABC):\r
    """Abstract payroll contract and template processor for institutional staff."""\r
    institute = "Coder & AccoTax"\r
\r
    def __init__(self, emp_id: str, full_name: str, pan_number: str):\r
        self.emp_id = emp_id\r
        self.full_name = full_name\r
        self.pan_number = pan_number\r
\r
    # =================================================================\r
    # 1. ABSTRACT METHODS & PROPERTIES (Must be implemented by subclasses)\r
    # =================================================================\r
    @property\r
    @abstractmethod\r
    def employment_tier(self) -> str:\r
        """Abstract Property: Full-Time, Visiting, or Consultant."""\r
        pass\r
\r
    @property\r
    @abstractmethod\r
    def income_tax_rate(self) -> float:\r
        """Abstract Property: TDS income tax percentage."""\r
        pass\r
\r
    @abstractmethod\r
    def calculate_gross_earnings(self) -> float:\r
        """Abstract Method: Computes monthly gross earnings before deductions."""\r
        pass\r
\r
    # =================================================================\r
    # 2. TEMPLATE METHOD (Concrete algorithm workflow)\r
    # =================================================================\r
    def generate_monthly_payslip(self) -> Dict[str, Any]:\r
        """Template Method: Orchestrates salary calculation and TDS tax deductions."""\r
        gross = self.calculate_gross_earnings()\r
        tax_deduction = gross * self.income_tax_rate\r
        net_payable = gross - tax_deduction\r
\r
        return {\r
            "emp_id": self.emp_id,\r
            "full_name": self.full_name,\r
            "pan": self.pan_number,\r
            "tier": self.employment_tier,\r
            "gross_salary": gross,\r
            "tax_rate": f"{self.income_tax_rate * 100:.1f}%",\r
            "tds_deducted": tax_deduction,\r
            "net_payable": net_payable\r
        }\r
\r
\r
# =====================================================================\r
# CONCRETE EMPLOYEE 1: FULL TIME FACULTY\r
# =====================================================================\r
class FullTimeFaculty(BaseEmployeePayroll):\r
    def __init__(self, emp_id: str, full_name: str, pan_number: str, base_salary: float, hra_allowance: float):\r
        super().__init__(emp_id, full_name, pan_number)\r
        self.base_salary = float(base_salary)\r
        self.hra_allowance = float(hra_allowance)\r
\r
    @property\r
    def employment_tier(self) -> str:\r
        return "Permanent Full-Time Faculty"\r
\r
    @property\r
    def income_tax_rate(self) -> float:\r
        return 0.15  # 15% TDS Bracket\r
\r
    def calculate_gross_earnings(self) -> float:\r
        return self.base_salary + self.hra_allowance\r
\r
\r
# =====================================================================\r
# CONCRETE EMPLOYEE 2: VISITING ADJUNCT LECTURER\r
# =====================================================================\r
class VisitingAdjunctLecturer(BaseEmployeePayroll):\r
    def __init__(self, emp_id: str, full_name: str, pan_number: str, lecture_hours: float, hourly_rate_inr: float):\r
        super().__init__(emp_id, full_name, pan_number)\r
        self.lecture_hours = float(lecture_hours)\r
        self.hourly_rate = float(hourly_rate_inr)\r
\r
    @property\r
    def employment_tier(self) -> str:\r
        return "Visiting Adjunct Lecturer"\r
\r
    @property\r
    def income_tax_rate(self) -> float:\r
        return 0.10  # 10% Professional TDS\r
\r
    def calculate_gross_earnings(self) -> float:\r
        return self.lecture_hours * self.hourly_rate\r
\r
\r
def run_payroll_case_study():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - ENTERPRISE PAYROLL & TAX ABC ENGINE")\r
    print("=" * 70)\r
\r
    staff_roster = [\r
        FullTimeFaculty("FAC-001", "Sukanta Hui", "ABCDE1234F", base_salary=85000.0, hra_allowance=15000.0),\r
        VisitingAdjunctLecturer("VIS-042", "Dr. Amitava Roy", "WXYZP9988K", lecture_hours=32.0, hourly_rate_inr=1500.0)\r
    ]\r
\r
    for staff in staff_roster:\r
        slip = staff.generate_monthly_payslip()\r
        print(f"--- PAYSLIP: {slip['full_name']} [{slip['tier']}] ---")\r
        print(f"  * PAN Number     : {slip['pan']}")\r
        print(f"  * Gross Salary   : INR {slip['gross_salary']:,.2f}")\r
        print(f"  * Tax Rate (TDS) : {slip['tax_rate']} (-INR {slip['tds_deducted']:,.2f})")\r
        print(f"  * NET DISBURSED  : INR {slip['net_payable']:,.2f}\\n")\r
\r
    print("[PASSED] Enterprise Payroll ABC System Completed Successfully.")\r
\r
\r
if __name__ == "__main__":\r
    run_payroll_case_study()\r
`,j=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_001: OBJECT-ORIENTED PYTHON\r
              TOPIC 13: ABSTRACT BASE CLASSES (ABC MODULE) IN PYTHON\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. DEFINING AN ABSTRACT BASE CLASS\r
--------------------------------------------------------------------------------\r
  from abc import ABC, abstractmethod\r
\r
  class BaseConnector(ABC):\r
      @abstractmethod\r
      def connect(self) -> bool:\r
          pass\r
\r
      @property\r
      @abstractmethod\r
      def provider_name(self) -> str:\r
          pass\r
\r
--------------------------------------------------------------------------------\r
2. INSTANTIATION BLOCKER\r
--------------------------------------------------------------------------------\r
  Attempting to instantiate \`BaseConnector()\` directly or a subclass that fails\r
  to override every \`@abstractmethod\` raises:\r
  -> TypeError: Can't instantiate abstract class SubClass with abstract methods\r
\r
--------------------------------------------------------------------------------\r
3. VIRTUAL SUBCLASSES VIA REGISTER()\r
--------------------------------------------------------------------------------\r
  BaseConnector.register(ExternalThirdPartyClass)\r
  # Now issubclass(ExternalThirdPartyClass, BaseConnector) returns True!\r
\r
================================================================================\r
           END OF STUDY NOTE • TOPIC 13: ABSTRACT BASE CLASSES\r
================================================================================\r
`,S=[{question:"What is an Abstract Base Class (ABC) in Python?",shortAnswer:"A class that defines a formal interface and contract of methods and properties that all derived concrete subclasses must implement before they can be instantiated.",explanation:"Provides strict API contract enforcement at instantiation time.",hint:"A class defining mandatory interface methods for subclasses.",level:"basic",codeExample:`from abc import ABC, abstractmethod
class Base(ABC):
    @abstractmethod
    def run(self): pass`},{question:"What happens if you attempt to instantiate an abstract class directly or a subclass with missing abstract methods?",shortAnswer:"Python raises a 'TypeError: Can't instantiate abstract class with abstract methods <missing_methods>'.",explanation:"Guarantees incomplete classes can never be instantiated at runtime.",hint:"Raises a TypeError preventing instantiation.",level:"basic",codeExample:"# TypeError: Can't instantiate abstract class SQLite with abstract methods execute"},{question:"How do you define an abstract method in Python?",shortAnswer:"By inheriting from 'abc.ABC' and decorating the method definition with '@abstractmethod'.",explanation:"Can also use metaclass=ABCMeta on older Python versions.",hint:"Use @abstractmethod on a method inside an ABC subclass.",level:"basic",codeExample:`@abstractmethod
def calculate_gross(self) -> float:
    pass`},{question:"How do you define an Abstract Property in Python?",shortAnswer:"By stacking '@property' above '@abstractmethod' over the method definition (in Python 3.3+, @property @abstractmethod replaces deprecated @abstractproperty).",explanation:"Forces all subclasses to implement a getter property for that attribute.",hint:"Stack @property above @abstractmethod.",level:"moderate",codeExample:`@property
@abstractmethod
def income_tax_rate(self) -> float:
    pass`},{question:"What is a 'Virtual Subclass' in Python ABCs?",shortAnswer:"A class registered with an ABC via 'MyABC.register(TargetClass)' that is recognized by 'isinstance()' and 'issubclass()' as a valid subtype without actually inheriting from the ABC.",explanation:"Allows retrofitting third-party classes into your interface hierarchy without modifying external source code.",hint:"A class registered via ABC.register() recognized by issubclass() without inheritance.",level:"moderate",codeExample:"BaseDatabase.register(ExternalMongoConnector)"},{question:"What is the difference between Abstract Base Classes (ABCs) and Duck Typing?",shortAnswer:"ABCs enforce strict nominal contracts at instantiation time (failing immediately if a method is missing); Duck Typing resolves methods dynamically at invocation time (failing only when called).",explanation:"ABCs are ideal for large frameworks and strict plugins; Duck Typing is ideal for maximum flexibility.",hint:"ABCs check at instantiation; Duck typing checks at invocation time.",level:"moderate",codeExample:`# ABC: fail fast on init
# Duck: fail when method is called`},{question:"Can an abstract method contain actual working implementation code in the ABC?",shortAnswer:"Yes. An abstract method can have code, and subclasses can invoke it using 'super().abstract_method()', but the subclass must still override the method signature.",explanation:"Useful for providing common base logic or fallback templates.",hint:"Yes, abstract methods can contain code callable via super().",level:"complex",codeExample:`@abstractmethod
def log(self):
    print('Base logging step')  # Callable via super().log()`},{question:"What is the 'Template Method' design pattern using ABCs?",shortAnswer:"An architectural pattern where the ABC defines a concrete workflow method that calls one or more abstract helper methods, allowing subclasses to customize individual steps without altering the overall algorithm.",explanation:"Common in data pipelines, payroll engines, and ETL frameworks.",hint:"A concrete workflow method in the ABC that orchestrates abstract steps.",level:"moderate",codeExample:`def generate_payslip(self):
    gross = self.calculate_gross()
    return gross - (gross * self.tax_rate)`},{question:"What is 'collections.abc' in the Python Standard Library?",shortAnswer:"A standard library module providing built-in abstract base classes (e.g. Iterable, Sequence, Mapping, Set, MutableMapping) representing container data structures.",explanation:"Used to build custom collections that integrate with Python's standard container protocols.",hint:"Standard library ABCs for Sequences, Mappings, and Iterables.",level:"basic",codeExample:`from collections.abc import Sequence
class CustomList(Sequence): pass`},{question:"What free methods does 'collections.abc.Sequence' provide once you implement '__len__' and '__getitem__'?",shortAnswer:"It automatically provides '__iter__', '__contains__' ('in'), '__reversed__', 'index()', and 'count()'.",explanation:"Drastically reduces custom container boilerplate.",hint:"Provides __iter__, __contains__, count(), and index() automatically.",level:"moderate",codeExample:"# Implement __len__ & __getitem__ -> get count() & index() for free!"},{question:"What is the '__subclasshook__' method in ABCs?",shortAnswer:"A special classmethod on an ABC that dynamically decides whether an external class is a subclass during 'issubclass(Candidate, ABC)', powering structural dynamic subtyping.",explanation:"Used by collections.abc to recognize duck-typed classes automatically.",hint:"Customizes issubclass() evaluation dynamically.",level:"complex",codeExample:`@classmethod
def __subclasshook__(cls, C):
    if any('draw' in B.__dict__ for B in C.__mro__): return True
    return NotImplemented`},{question:"Can an abstract class have concrete (non-abstract) methods?",shortAnswer:"Yes. ABCs frequently contain a mix of abstract methods (enforcing child implementation) and concrete methods (providing shared utility logic).",explanation:"Standard design for base classes.",hint:"Yes, ABCs can contain both abstract and concrete methods.",level:"basic",codeExample:`class Base(ABC):
    @abstractmethod
    def run(self): pass
    def helper(self): return True`},{question:"Can you combine '@abstractmethod' with '@classmethod' and '@staticmethod'?",shortAnswer:"Yes. Stack '@classmethod' or '@staticmethod' on top of '@abstractmethod' (e.g. @classmethod @abstractmethod def factory(cls):).",explanation:"Forces subclasses to implement specialized factory constructors or static utilities.",hint:"Yes, stack @classmethod above @abstractmethod.",level:"moderate",codeExample:`@classmethod
@abstractmethod
def from_dict(cls, data): pass`},{question:"What metaclass powers 'abc.ABC' under the hood?",shortAnswer:"'abc.ABCMeta'. Inheriting from 'abc.ABC' is simply a modern, clean shorthand for writing 'class MyClass(metaclass=ABCMeta):'.",explanation:"Introduced in Python 3.4 for cleaner syntax.",hint:"abc.ABCMeta.",level:"basic",codeExample:"class MyABC(ABC): pass  # Equivalent to (metaclass=ABCMeta)"},{question:"Does 'abc.register()' verify that the registered class actually implements the abstract methods?",shortAnswer:"No! 'register()' trusts the developer and only updates subclass registry caches; it does not perform runtime signature verification.",explanation:"Allows runtime duck typing without compiler overhead.",hint:"No, register() does not verify methods; it trusts the developer.",level:"complex",codeExample:"# register() updates issubclass caches without validating methods"},{question:"How do you define an abstract setter on an abstract property?",shortAnswer:"By defining an abstract getter first, and then decorating the setter with '@property_name.setter' and '@abstractmethod'.",explanation:"Forces subclasses to provide both a getter and a validated setter.",hint:"Decorate setter with @prop.setter and @abstractmethod.",level:"complex",codeExample:`@prop.setter
@abstractmethod
def prop(self, val): pass`},{question:"What is the difference between 'typing.Protocol' and 'abc.ABC'?",shortAnswer:"'typing.Protocol' uses purely structural subtyping (checked statically by mypy without inheritance); 'abc.ABC' uses nominal inheritance and runtime instantiation blocking.",explanation:"Protocols are for type hints and static analysis; ABCs are for runtime behavioral enforcement.",hint:"Protocols = Static structural typing; ABCs = Runtime nominal enforcement.",level:"moderate",codeExample:`# Protocol: structural static typing
# ABC: nominal runtime enforcement`},{question:"Why should you NOT make every class an ABC by default?",shortAnswer:"Because premature abstraction introduces unnecessary layers of boilerplate and rigid hierarchies; use concrete classes or duck typing first, introducing ABCs only when building formal plugin frameworks or enforcing strict contracts.",explanation:"Adheres to the YAGNI (You Aren't Gonna Need It) principle.",hint:"Avoids premature abstraction and unnecessary boilerplate.",level:"basic",codeExample:"# Use concrete classes first; introduce ABCs when plugins/contracts are needed"},{question:"Can an abstract class define an '__init__' constructor?",shortAnswer:"Yes. An ABC constructor can initialize common base state (e.g. host, port, credentials), which concrete subclasses invoke via 'super().__init__()'.",explanation:"Standard practice for shared state initialization.",hint:"Yes, ABC constructors initialize shared base state.",level:"basic",codeExample:`class Base(ABC):
    def __init__(self, name): self.name = name`},{question:"What happens if a concrete subclass implements all abstract methods except one?",shortAnswer:"The subclass remains an abstract class itself and cannot be instantiated, raising TypeError on initialization.",explanation:"All abstract methods across all ancestors must be fulfilled.",hint:"The subclass remains abstract and cannot be instantiated.",level:"basic",codeExample:"# Subclass is still abstract until ALL abstract methods are overridden"},{question:"How does Python determine which methods are abstract on a class object?",shortAnswer:"CPython inspects the '__abstractmethods__' attribute on the class, which stores a frozenset of unfulfilled abstract method names.",explanation:"If '__abstractmethods__' is non-empty, instantiation is blocked.",hint:"Inspects the frozenset stored in Class.__abstractmethods__.",level:"complex",codeExample:"print(IncompleteClass.__abstractmethods__)  # frozenset({'execute'})"},{question:"Can an ABC inherit from another ABC?",shortAnswer:"Yes. Derived ABCs can inherit abstract methods, add new abstract methods, or fulfill some abstract methods while leaving others for downstream concrete classes.",explanation:"Allows building multi-tiered contract hierarchies.",hint:"Yes, ABCs can extend other ABCs.",level:"basic",codeExample:`class AdvancedDatabase(BaseDatabase, ABC):
    @abstractmethod
    def rollback(self): pass`},{question:"How do ABCs prevent fragile base class bugs in large enterprise development teams?",shortAnswer:"By turning runtime missing method bugs into immediate instantiation errors, guaranteeing that code breaks immediately during development rather than silently failing in production.",explanation:"Enforces architectural contracts across distributed engineering teams.",hint:"Converts missing method runtime crashes into immediate instantiation errors.",level:"moderate",codeExample:"# Fail-fast at instantiation rather than failing in production"},{question:"What is the relationship between ABCs and the Interface Segregation Principle (ISP)?",shortAnswer:"ABCs should be small and focused on specific responsibilities (e.g. Reader, Writer, Cleaner) rather than massive monolithic interfaces, allowing classes to implement only what they need.",explanation:"Promotes clean, decoupled SOLID architecture.",hint:"Design small, cohesive ABCs rather than giant monolithic interfaces.",level:"moderate",codeExample:"# Better: class Reader(ABC) + class Writer(ABC) vs class GiantFileManager(ABC)"},{question:"What is the ultimate golden rule for Abstract Base Classes in Python?",shortAnswer:"Use ABCs when you need strict, fail-fast contract enforcement at instantiation time or when creating framework plugins; keep abstract interfaces small and cohesive, and leverage the Template Method pattern for shared workflows.",explanation:"Provides the perfect balance between Pythonic flexibility and enterprise architectural safety.",hint:"Use ABCs for strict fail-fast contracts and plugin frameworks; keep interfaces small.",level:"basic",codeExample:"# Strict, fail-fast interface contracts with clean template methods"}];function D(){const d=i.useRef([]),[n,m]=i.useState("blocker"),[o,x]=i.useState("faculty"),[l,h]=i.useState(85e3);i.useEffect(()=>{const r=new IntersectionObserver(c=>{c.forEach(p=>{p.isIntersecting&&p.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return d.current.forEach(c=>{c&&r.observe(c)}),()=>r.disconnect()},[]);const t=r=>{r&&!d.current.includes(r)&&d.current.push(r)},s={faculty:{name:"FullTimeFaculty (Prof. Sukanta Hui)",tier:"Permanent Full-Time Faculty",taxRate:.15,gross:l+15e3,taxAmount:(l+15e3)*.15,net:(l+15e3)*.85,isError:!1},visiting:{name:"VisitingAdjunctLecturer (Dr. Amitava Roy)",tier:"Visiting Adjunct Lecturer",taxRate:.1,gross:32*1500,taxAmount:32*1500*.1,net:32*1500*.9,isError:!1},incomplete:{name:"IncompleteStaffStub (Missing calculate_gross)",tier:"Uninitialized Stub",taxRate:0,gross:0,taxAmount:0,net:0,isError:!0,errorMsg:"TypeError: Can't instantiate abstract class IncompleteStaffStub with abstract method calculate_gross_earnings"}}[o];return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:t,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_001"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 13 (Module Capstone)"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Object-Oriented Programming (OOP) in Python"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Abstract Base Classes (",e.jsx("code",{className:"text-teal-400 font-mono",children:"abc"})," module)"]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master formal API contract enforcement: ",e.jsx("code",{className:"text-teal-300 font-mono",children:"abc.ABC"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"@abstractmethod"}),", abstract properties (",e.jsx("code",{className:"text-purple-300 font-mono",children:"@property @abstractmethod"}),"), virtual subclasses via ",e.jsx("code",{className:"text-amber-300 font-mono",children:"ABC.register()"}),", the Template Method pattern, and standard library ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"collections.abc"})," compliance."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Instantiation Contract Enforcement"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"💎 Abstract Properties & Classmethods"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📑 Virtual Subclasses via register()"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚙️ Template Method Design Pattern"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Contract Enforcement Engine: `abc.ABC`"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["While Python is famous for Duck Typing, enterprise frameworks and plugin architectures often require ",e.jsx("strong",{children:"strict compile/initialization-time contract enforcement"}),". The ",e.jsx("code",{className:"text-teal-300 font-mono",children:"abc"})," module provides this guarantee:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-base mb-1",children:"1️⃣ Instantiation Blocker"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"class Base(ABC): ..."}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Direct instantiation is forbidden at runtime. Incomplete subclasses raise ",e.jsx("code",{className:"text-rose-400 font-mono",children:"TypeError"}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-base mb-1",children:"2️⃣ Abstract Properties"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"@property @abstractmethod"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Forces all derived concrete classes to implement validated getter/setter attributes."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-base mb-1",children:"3️⃣ Template Method"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"def workflow(self): ..."}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Concrete methods in the ABC orchestrate the workflow, calling abstract steps implemented by children."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"When to use ABCs vs Duck Typing"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Use ",e.jsx("strong",{children:"Duck Typing"})," for flexible scripting, testing mocks, and lightweight components. Use ",e.jsx("strong",{children:"Abstract Base Classes (ABCs)"})," when architecting formal plugin systems, large multi-team enterprise libraries, or when missing methods must ",e.jsx("em",{children:"fail fast"})," at instantiation rather than silently crashing later in production!"]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Abstract Base Classes & Template Workflows"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>m("blocker"),className:a("px-3 py-1.5 rounded-lg transition-all",n==="blocker"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Instantiation Blocker Engine"}),e.jsx("button",{onClick:()=>m("template"),className:a("px-3 py-1.5 rounded-lg transition-all",n==="template"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Template Method Pattern"}),e.jsx("button",{onClick:()=>m("virtual"),className:a("px-3 py-1.5 rounded-lg transition-all",n==="virtual"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Virtual Subclasses (register)"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining CPython instantiation checks, abstract template workflows, and virtual subtype registrations:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:n==="blocker"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"CPYTHON INSTANTIATION BLOCKER MECHANISM"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"Incomplete Subclass Declaration"}),e.jsx("text",{x:"20",y:"60",fill:"#fca5a5",fontSize:"10 font-mono",children:"class IncompleteSQLite(BaseConnector):"}),e.jsx("text",{x:"40",y:"80",fill:"#fca5a5",fontSize:"10 font-mono",children:"def connect(self): pass"}),e.jsx("text",{x:"40",y:"105",fill:"#fca5a5",fontSize:"9 font-mono text-rose-300 font-bold",children:"# FORGOT: execute_query()"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#881337",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"155",fill:"#ffe4e6",fontSize:"10 font-bold",children:"Execution: `conn = IncompleteSQLite()`"}),e.jsx("text",{x:"30",y:"180",fill:"#fda4af",fontSize:"8 font-mono",children:"TypeError: Can't instantiate abstract class with"}),e.jsx("text",{x:"30",y:"195",fill:"#fda4af",fontSize:"8 font-mono",children:"abstract methods execute_query"})]}),e.jsxs("g",{transform:"translate(460, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"Complete Concrete Implementation"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"10 font-mono",children:"class PostgreSQLConnector(BaseConnector):"}),e.jsx("text",{x:"40",y:"80",fill:"#34d399",fontSize:"10 font-mono",children:"def connect(self): ..."}),e.jsx("text",{x:"40",y:"100",fill:"#34d399",fontSize:"10 font-mono",children:"def execute_query(self, sql): ..."}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"155",fill:"#a7f3d0",fontSize:"10 font-bold",children:"Execution: `conn = PostgreSQLConnector()`"}),e.jsx("text",{x:"30",y:"180",fill:"#34d399",fontSize:"10 font-bold",children:"✓ Instantiation Permitted (200 OK)"}),e.jsx("text",{x:"30",y:"198",fill:"#ecfdf5",fontSize:"8 font-mono",children:"All abstract methods fulfilled!"})]})]}):n==="template"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"THE TEMPLATE METHOD DESIGN PATTERN IN ABCs"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"BaseEmployeePayroll(ABC) - Template"}),e.jsx("rect",{x:"20",y:"55",width:"340",height:"75",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"75",fill:"#34d399",fontSize:"10 font-bold",children:"Concrete Template Method:"}),e.jsx("text",{x:"30",y:"95",fill:"#ecfdf5",fontSize:"9 font-mono",children:"def generate_payslip(self):"}),e.jsx("text",{x:"45",y:"112",fill:"#ecfdf5",fontSize:"9 font-mono",children:"gross = self.calculate_gross()  # Abstract Call"}),e.jsx("text",{x:"20",y:"155",fill:"#99f6e4",fontSize:"10 font-bold",children:"Abstract Contracts Enforced:"}),e.jsx("text",{x:"20",y:"175",fill:"#cbd5e1",fontSize:"9 font-mono",children:"• @property @abstractmethod: income_tax_rate"}),e.jsx("text",{x:"20",y:"195",fill:"#cbd5e1",fontSize:"9 font-mono",children:"• @abstractmethod: calculate_gross_earnings()"})]}),e.jsx("g",{transform:"translate(420, 140)",children:e.jsx("text",{x:"10",y:"20",fill:"#38bdf8",fontSize:"26",fontWeight:"bold",children:"→"})}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"FullTimeFaculty - Concrete Details"}),e.jsx("rect",{x:"20",y:"60",width:"340",height:"150",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"30",y:"85",fill:"#c4b5fd",fontSize:"10 font-bold",children:"Fulfills Abstract Steps:"}),e.jsx("text",{x:"30",y:"110",fill:"#34d399",fontSize:"9 font-mono",children:"income_tax_rate = 0.15 (15% TDS)"}),e.jsx("text",{x:"30",y:"135",fill:"#34d399",fontSize:"9 font-mono",children:"calculate_gross() = base_salary + hra"}),e.jsx("text",{x:"30",y:"175",fill:"#a7f3d0",fontSize:"9 font-bold",children:"✓ Reuses overall payslip generation logic!"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"VIRTUAL SUBCLASSES: ABC.register(ExternalVendorClass)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"360",height:"110",rx:"6",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"25",fill:"#99f6e4",fontSize:"11 font-bold",children:"BaseCloudStorageProvider(ABC)"}),e.jsx("text",{x:"20",y:"50",fill:"#ecfdf5",fontSize:"9 font-mono",children:"@abstractmethod def upload_file(self, f, d): ..."}),e.jsx("rect",{x:"0",y:"130",width:"360",height:"110",rx:"6",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"155",fill:"#c4b5fd",fontSize:"11 font-bold",children:"ExternalThirdPartyDropBox (Unmodified Code)"}),e.jsx("text",{x:"20",y:"180",fill:"#ecfdf5",fontSize:"9 font-mono",children:"def upload_file(self, f, d): ..."})]}),e.jsxs("g",{transform:"translate(420, 100)",children:[e.jsx("rect",{x:"0",y:"0",width:"430",height:"140",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12 font-bold",children:"Registration Statement:"}),e.jsx("text",{x:"20",y:"55",fill:"#34d399",fontSize:"10 font-mono font-bold",children:"BaseCloudStorageProvider.register(DropBox)"}),e.jsx("rect",{x:"20",y:"75",width:"390",height:"50",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"95",fill:"#ecfdf5",fontSize:"9 font-mono",children:"issubclass(DropBox, BaseProvider) → True!"}),e.jsx("text",{x:"30",y:"112",fill:"#ecfdf5",fontSize:"9 font-mono",children:"isinstance(dropbox_inst, BaseProvider) → True!"})]})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Enterprise Payroll & ABC Validator Playground"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Select an employee entity to execute the abstract payroll template algorithm or test CPython's live instantiation blocker:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 block font-bold",children:"Select Institutional Employee Concrete Class"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("button",{onClick:()=>x("faculty"),className:a("p-3 rounded-lg text-left text-xs font-mono transition-all border",o==="faculty"?"bg-teal-950/80 border-teal-500 text-teal-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"font-bold text-teal-300",children:"1. FullTimeFaculty (Sukanta Hui)"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"Base Salary + HRA | 15% TDS Bracket"})]}),e.jsxs("button",{onClick:()=>x("visiting"),className:a("p-3 rounded-lg text-left text-xs font-mono transition-all border",o==="visiting"?"bg-cyan-950/80 border-cyan-500 text-cyan-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"font-bold text-cyan-300",children:"2. VisitingAdjunctLecturer (Dr. Amitava Roy)"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"32 Hours @ INR 1,500/hr | 10% Professional Tax"})]}),e.jsxs("button",{onClick:()=>x("incomplete"),className:a("p-3 rounded-lg text-left text-xs font-mono transition-all border",o==="incomplete"?"bg-rose-950/80 border-rose-500 text-rose-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"font-bold text-rose-300",children:"3. IncompleteStaffStub (Missing Contract Method)"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"Demonstrates CPython TypeError instantiation block"})]})]}),o==="faculty"&&e.jsxs("div",{className:"pt-2",children:[e.jsxs("div",{className:"flex justify-between text-xs font-mono mb-1",children:[e.jsx("span",{className:"text-slate-400",children:"Base Faculty Salary:"}),e.jsxs("span",{className:"text-teal-300 font-bold",children:["INR ",l.toLocaleString()]})]}),e.jsx("input",{type:"range",min:"50000",max:"150000",step:"5000",value:l,onChange:r=>h(Number(r.target.value)),className:"w-full accent-teal-500"})]})]}),e.jsxs("div",{className:"space-y-3 flex flex-col justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block font-bold",children:"Template Method Output: `generate_monthly_payslip()`"}),e.jsx("div",{className:a("p-4 rounded-xl border flex-1 space-y-2.5 text-xs font-mono",s.isError?"bg-rose-950/40 border-rose-800":"bg-slate-900 border-slate-800"),children:s.isError?e.jsxs("div",{className:"space-y-2 text-rose-300",children:[e.jsx("div",{className:"font-bold text-rose-400 text-sm",children:"❌ CPython TypeError: Blocked Instantiation"}),e.jsx("p",{className:"text-[11px] leading-relaxed",children:s.errorMsg}),e.jsx("div",{className:"p-2.5 bg-slate-950 rounded border border-rose-900 text-[11px] text-emerald-400 font-bold",children:"✓ Fix: Implement all `@abstractmethod` definitions before instantiating!"})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-slate-400",children:["Staff Member: ",e.jsx("span",{className:"text-teal-300 font-bold",children:s.name})]}),e.jsxs("div",{className:"pt-2 border-t border-slate-800",children:[e.jsx("span",{className:"text-slate-400",children:"Employment Tier:"})," ",e.jsx("span",{className:"text-cyan-300 font-bold",children:s.tier})]}),e.jsxs("div",{className:"pt-2 border-t border-slate-800 space-y-1",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Gross Earnings:"}),e.jsxs("span",{className:"text-emerald-300 font-bold",children:["INR ",s.gross.toLocaleString("en-IN",{minimumFractionDigits:2})]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("span",{className:"text-slate-400",children:["TDS Tax (",(s.taxRate*100).toFixed(0),"%):"]}),e.jsxs("span",{className:"text-rose-300",children:["-INR ",s.taxAmount.toLocaleString("en-IN",{minimumFractionDigits:2})]})]})]}),e.jsxs("div",{className:"pt-2 border-t border-slate-800 flex justify-between font-bold text-sm",children:[e.jsx("span",{className:"text-slate-300",children:"NET DISBURSED:"}),e.jsxs("span",{className:"text-teal-300",children:["INR ",s.net.toLocaleString("en-IN",{minimumFractionDigits:2})]})]})]})})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Abstract Base Class Decorators & Protocols Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Decorator / Tool"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Signature Pattern"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Enforcement Timing"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Primary Architectural Purpose"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"@abstractmethod"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"@abstractmethod def func(self):"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-bold",children:"Instantiation Time"}),e.jsx("td",{className:"py-3 px-4",children:"Enforces mandatory method implementation in child subclasses"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"@property @abstractmethod"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"@property @abstractmethod def attr(self):"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-bold",children:"Instantiation Time"}),e.jsx("td",{className:"py-3 px-4",children:"Forces children to implement validated getter properties"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"ABC.register()"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"MyABC.register(VendorClass)"}),e.jsx("td",{className:"py-3 px-4",children:"issubclass() Check"}),e.jsx("td",{className:"py-3 px-4",children:"Registers third-party classes as virtual subclasses"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"collections.abc.Sequence"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"class CustomList(Sequence):"}),e.jsx("td",{className:"py-3 px-4",children:"Inheritance / Protocol"}),e.jsx("td",{className:"py-3 px-4",children:"Provides free __iter__, __contains__, count(), and index()"})]})]})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating ABC contract enforcement, abstract properties, collections.abc compliance, and enterprise payroll systems:"}),e.jsx(f,{files:[{filename:"abc_module_fundamentals_and_enforcement.py",code:y,description:"ABC fundamentals, @abstractmethod enforcement, and CPython instantiation blocker mechanics."},{filename:"abstract_properties_and_classmethods.py",code:_,description:"Abstract properties (@property @abstractmethod), classmethods, and virtual subclasses via ABC.register()."},{filename:"collections_abc_and_interface_compliance.py",code:A,description:"Python standard library collections.abc.Sequence compliance and free inherited mixin methods."},{filename:"enterprise_payroll_and_tax_abc_system.py",code:C,description:"Enterprise Institutional Payroll & Tax System with abstract properties and template workflows."}]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Forgetting to Inherit from `ABC`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Using ",e.jsx("code",{className:"text-rose-300 font-mono",children:"@abstractmethod"})," on a regular class without inheriting from ",e.jsx("code",{className:"text-rose-300 font-mono",children:"ABC"})," does NOT prevent instantiation!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always inherit from ",e.jsx("code",{className:"text-emerald-300",children:"abc.ABC"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Premature Over-Abstraction"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Creating ABCs for simple 2-class scripts introduces unnecessary cognitive overhead. Pythonic Duck Typing is often cleaner."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Use ABCs only when creating formal contracts or plugin frameworks."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Expecting `register()` to Validate Methods"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:[e.jsx("code",{className:"text-purple-300 font-mono",children:"ABC.register()"})," updates subclass caches without checking if the registered class actually implements the abstract methods."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Ensure registered classes fulfill interfaces via unit tests."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Wrong Decorator Order for Abstract Properties"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Placing ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"@abstractmethod"})," ABOVE ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"@property"})," breaks Python descriptor resolution."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always place ",e.jsx("code",{className:"text-emerald-300",children:"@property"})," at the very top, followed by ",e.jsx("code",{className:"text-emerald-300",children:"@abstractmethod"}),"."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering Abstract Base Classes, @abstractmethod, abstract properties, and collections.abc:"}),e.jsx(u,{questions:S})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with ABC syntax tables, abstract property templates, and virtual subclass recipes:"}),e.jsx("div",{className:"mb-10",children:e.jsx(b,{content:j,filename:"python_topic13_abstract_base_classes_abc_notes.txt",title:"Print Topic 13 Study Notes"})}),e.jsx(g,{})]})]})]})}export{D as default};
