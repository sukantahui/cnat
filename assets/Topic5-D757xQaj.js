import{b as o,j as e,bg as s}from"./vendor-react-core-Doz9nIC6.js";import{P as m}from"./PythonFileLoader-hCi5osN-.js";import{P as _}from"./PlainTextPrint-C08xhKA4.js";import{F as x}from"./FAQTemplate-CkSqDH4B.js";import{T as u}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const g=`# topic5_files/package_structure_and_init_role.py\r
# Module: 002_009_modules-packages\r
# Topic: Concept of packages & __init__.py files\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 5 - File 1: Package Directory Structure & the 3 Roles of __init__.py\r
Demonstrates:\r
  1. What constitutes a Python Package (Directories + __init__.py)\r
  2. The 3 Primary Roles of __init__.py:\r
     - Role A: Package Identification (Treats directory as a Python package)\r
     - Role B: Package-Level Initialization Execution (Runs when package is imported)\r
     - Role C: API Elevation Facade (Exposes submodule functions at the top-level)\r
  3. Regular Packages vs PEP 420 Implicit Namespace Packages\r
"""\r
\r
import types\r
\r
# Simulating a multi-file package structure in Python memory\r
package_init_code = """\r
# package __init__.py (API Elevation Facade)\r
__version__ = '3.0.0'\r
__all__ = ['StudentFeeManager', 'calculate_gst']\r
\r
# Import symbols from submodules to elevate them to the package root!\r
from .fee_module import StudentFeeManager\r
from .tax_module import calculate_gst\r
"""\r
\r
fee_module_code = """\r
class StudentFeeManager:\r
    def __init__(self, student_name):\r
        self.student = student_name\r
    def get_summary(self):\r
        return f"Student {self.student} Fee Account Active"\r
"""\r
\r
tax_module_code = """\r
def calculate_gst(amount: float) -> float:\r
    return amount * 0.18\r
"""\r
\r
def explain_package_fundamentals():\r
    print("=" * 65)\r
    print("1. REGULAR PACKAGES VS NAMESPACE PACKAGES")\r
    print("=" * 65)\r
    print(r"""\r
Directory Layout:\r
  my_package/\r
  |-- __init__.py          <- Marks directory as a package & runs setup\r
  |-- fee_module.py        <- Submodule\r
  \\-- tax_module.py        <- Submodule\r
\r
Why __init__.py is Crucial:\r
  1. Package Initialization: Executes initialization logic on \`import my_package\`.\r
  2. API Elevation (Facade Pattern): Exposes submodule classes directly at\r
     \`my_package.StudentFeeManager\` rather than forcing deep nested imports\r
     like \`my_package.fee_module.StudentFeeManager\`.\r
  3. Export Whitelisting: Defines \`__all__\` to restrict package-level exports.\r
""")\r
\r
\r
def demonstrate_api_elevation():\r
    print("=" * 65)\r
    print("2. SIMULATED API ELEVATION VIA __init__.py")\r
    print("=" * 65)\r
\r
    # 1. Create submodules\r
    fee_mod = types.ModuleType("my_package.fee_module")\r
    exec(fee_module_code, fee_mod.__dict__)\r
\r
    tax_mod = types.ModuleType("my_package.tax_module")\r
    exec(tax_module_code, tax_mod.__dict__)\r
\r
    # 2. Create parent package and elevate symbols\r
    pkg = types.ModuleType("my_package")\r
    pkg.__path__ = ["/simulated/my_package"]\r
    pkg.StudentFeeManager = fee_mod.StudentFeeManager\r
    pkg.calculate_gst = tax_mod.calculate_gst\r
    pkg.__version__ = "3.0.0"\r
\r
    print("Without API Elevation (Ugly & Deep):")\r
    print("  from my_package.fee_module import StudentFeeManager")\r
    print("\\nWith API Elevation (Clean & Professional):")\r
    print("  from my_package import StudentFeeManager, calculate_gst\\n")\r
\r
    # Using elevated package API\r
    manager = pkg.StudentFeeManager("Susmita Mukherjee")\r
    gst = pkg.calculate_gst(10000.0)\r
\r
    print(f"Package Version  : {pkg.__version__}")\r
    print(f"Manager Status   : {manager.get_summary()}")\r
    print(f"Calculated GST   : INR {gst:,.2f}")\r
\r
\r
if __name__ == "__main__":\r
    explain_package_fundamentals()\r
    demonstrate_api_elevation()\r
`,h=`# topic5_files/subpackages_and_api_elevation.py\r
# Module: 002_009_modules-packages\r
# Topic: Concept of packages & __init__.py files\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 5 - File 2: Hierarchical Subpackages & Multi-Tier API Elevation\r
Demonstrates:\r
  1. Structuring nested subpackage hierarchies\r
  2. The role of subpackage __init__.py files\r
  3. Preventing identifier collisions across domain teams\r
  4. Real-world corporate project layout (accounting vs inventory vs payroll)\r
"""\r
\r
import types\r
\r
def explain_subpackage_architecture():\r
    print("=" * 65)\r
    print("1. HIERARCHICAL SUBPACKAGE DIRECTORY ARCHITECTURE")\r
    print("=" * 65)\r
    print(r"""\r
Enterprise Project Layout:\r
  coder_erp/\r
  |-- __init__.py                    <- Elevates high-level ERP facade\r
  |-- accounting/                    <- Subpackage 1\r
  |   |-- __init__.py                <- Elevates accounting API\r
  |   |-- gst_calculator.py\r
  |   \\-- invoice_generator.py\r
  |-- students/                      <- Subpackage 2\r
  |   |-- __init__.py                <- Elevates student API\r
  |   |-- enrollment.py\r
  |   \\-- attendance.py\r
  \\-- reporting/                     <- Subpackage 3\r
      |-- __init__.py\r
      \\-- pdf_exporter.py\r
\r
Clean Consumer Import Syntax:\r
  from coder_erp.accounting import calculate_gst\r
  from coder_erp.students import enroll_new_student\r
  from coder_erp.reporting import export_pdf_report\r
""")\r
\r
\r
def demonstrate_subpackage_namespacing():\r
    print("=" * 65)\r
    print("2. DOMAIN NAMESPACE ISOLATION")\r
    print("=" * 65)\r
\r
    # Both accounting and student domains have a function called "generate_report()"\r
    # Subpackages ensure they NEVER collide!\r
    \r
    # Subpackage 1: Accounting\r
    acc_subpkg = types.ModuleType("coder_erp.accounting")\r
    acc_subpkg.generate_report = lambda: "Financial Audit Report (P&L, GST Ledger)"\r
\r
    # Subpackage 2: Students\r
    stu_subpkg = types.ModuleType("coder_erp.students")\r
    stu_subpkg.generate_report = lambda: "Student Academic Report (Attendance, Marks)"\r
\r
    print("Executing Domain Reports Without Naming Collisions:")\r
    print(f"  * Accounting Domain: {acc_subpkg.generate_report()}")\r
    print(f"  * Student Domain   : {stu_subpkg.generate_report()}")\r
\r
\r
if __name__ == "__main__":\r
    explain_subpackage_architecture()\r
    demonstrate_subpackage_namespacing()\r
`,f=`# topic5_files/package_all_whitelist_and_lazy_imports.py\r
# Module: 002_009_modules-packages\r
# Topic: Concept of packages & __init__.py files\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 5 - File 3: Package-Level __all__ Whitelisting & Lazy Module Loading (PEP 562)\r
Demonstrates:\r
  1. Defining __all__ in package __init__.py to govern 'from package import *'\r
  2. Lazy module loading using module-level __getattr__ (PEP 562)\r
  3. Accelerating package startup times for massive multi-tier frameworks\r
"""\r
\r
import types\r
import importlib\r
\r
def explain_package_all_whitelist():\r
    print("=" * 65)\r
    print("1. PACKAGE-LEVEL __all__ WHITELIST IN __init__.py")\r
    print("=" * 65)\r
    print("""\r
In \`my_package/__init__.py\`:\r
  __all__ = ['Calculator', 'InvoiceManager']\r
\r
  from .calculator import Calculator\r
  from .invoices import InvoiceManager\r
  from .internal_helpers import _secret_token, internal_db\r
\r
When a consumer writes:\r
  \`from my_package import *\`\r
\r
Result:\r
  - \`Calculator\` and \`InvoiceManager\` ARE imported into global scope.\r
  - \`_secret_token\` and \`internal_db\` are EXCLUDED and safely hidden!\r
""")\r
\r
\r
def demonstrate_lazy_submodule_loading():\r
    print("=" * 65)\r
    print("2. LAZY SUBMODULE LOADING WITH __getattr__ (PEP 562)")\r
    print("=" * 65)\r
\r
    # In massive libraries (like scipy or pandas), importing all subpackages upfront\r
    # takes seconds. PEP 562 allows defining __getattr__ in __init__.py to load\r
    # submodules dynamically ONLY when accessed!\r
\r
    class LazyPackageMock:\r
        def __init__(self, name: str):\r
            self.__name__ = name\r
            self._loaded_submodules = {}\r
\r
        def __getattr__(self, attr: str):\r
            print(f"  [LAZY LOADER] Intercepted access to 'my_package.{attr}'")\r
            if attr == "heavy_analytics":\r
                print("  [LAZY LOADER] Compiling and loading heavy_analytics into memory...")\r
                self._loaded_submodules[attr] = "HeavyAnalyticsEngine(Ready)"\r
                return self._loaded_submodules[attr]\r
            raise AttributeError(f"Package '{self.__name__}' has no attribute '{attr}'")\r
\r
    pkg = LazyPackageMock("my_package")\r
    print("Package initialized in 0.001 ms (Zero heavy submodules loaded upfront).\\n")\r
\r
    print("First Access to pkg.heavy_analytics:")\r
    engine = pkg.heavy_analytics\r
    print(f"Result: {engine}\\n")\r
\r
    print("Second Access to pkg.heavy_analytics (Cached):")\r
    engine2 = pkg.heavy_analytics\r
    print(f"Result: {engine2}")\r
\r
\r
if __name__ == "__main__":\r
    explain_package_all_whitelist()\r
    demonstrate_lazy_submodule_loading()\r
`,y=`# topic5_files/enterprise_payroll_package_simulator.py\r
# Module: 002_009_modules-packages\r
# Topic: Concept of packages & __init__.py files\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 5 - File 4: Enterprise Payroll & Taxation Multi-Tier Package Simulator\r
Demonstrates:\r
  1. Complete simulated multi-tier corporate package layout\r
  2. Subpackages for payroll, taxation, and ASCII receipt reporting\r
  3. High-level package __init__.py facade unifying the public API\r
"""\r
\r
import sys\r
import types\r
import datetime as dt\r
from typing import Dict, Any, List\r
\r
class EnterprisePayrollSuite:\r
    """Simulated Enterprise Package Environment."""\r
\r
    @classmethod\r
    def setup_package_environment(cls) -> types.ModuleType:\r
        """Constructs an in-memory package with subpackages and elevated facade."""\r
        \r
        # 1. Main Package Root\r
        pkg = types.ModuleType("accotax_suite")\r
        pkg.__version__ = "4.2.0"\r
        pkg.__path__ = ["/simulated/accotax_suite"]\r
\r
        # 2. Subpackage: taxation\r
        tax_subpkg = types.ModuleType("accotax_suite.taxation")\r
        tax_subpkg.calculate_gst = lambda amt: {"cgst": amt * 0.09, "sgst": amt * 0.09, "total": amt * 0.18}\r
        tax_subpkg.calculate_tds = lambda salary: salary * 0.10 if salary > 50000 else 0.0\r
\r
        # 3. Subpackage: payroll\r
        payroll_subpkg = types.ModuleType("accotax_suite.payroll")\r
        \r
        def compute_payslip(emp_name: str, base_salary: float) -> Dict[str, Any]:\r
            tds = tax_subpkg.calculate_tds(base_salary)\r
            pf = base_salary * 0.12\r
            net_salary = base_salary - tds - pf\r
            return {\r
                "name": emp_name,\r
                "gross": base_salary,\r
                "tds": tds,\r
                "pf": pf,\r
                "net": net_salary,\r
                "date": dt.datetime.now()\r
            }\r
        payroll_subpkg.compute_payslip = compute_payslip\r
\r
        # 4. API Elevation inside main package __init__.py\r
        # Elevate functions from subpackages directly to accotax_suite.*\r
        pkg.taxation = tax_subpkg\r
        pkg.payroll = payroll_subpkg\r
        pkg.compute_payslip = payroll_subpkg.compute_payslip\r
        pkg.calculate_gst = tax_subpkg.calculate_gst\r
\r
        return pkg\r
\r
\r
def run_payroll_package_demo():\r
    print("=" * 75)\r
    print("CODER & ACCOTAX - ENTERPRISE PAYROLL PACKAGE SIMULATOR")\r
    print("=" * 75)\r
\r
    # Initialize package\r
    accotax_suite = EnterprisePayrollSuite.setup_package_environment()\r
    print(f"Loaded Package   : '{accotax_suite.__name__}' (Version {accotax_suite.__version__})")\r
    print(f"Elevated Facade  : accotax_suite.compute_payslip & accotax_suite.calculate_gst\\n")\r
\r
    # Generate employee payslip using elevated facade import\r
    employee_record = {"name": "Susmita Mukherjee", "role": "Senior Python Instructor", "salary": 65000.0}\r
    \r
    print("--- 1. GENERATING SALARY PAYSLIP (via elevated facade) ---")\r
    slip = accotax_suite.compute_payslip(employee_record["name"], employee_record["salary"])\r
\r
    print(f"Employee Name    : {slip['name']} ({employee_record['role']})")\r
    print(f"Pay Period       : {slip['date']:%B %Y}")\r
    print(f"Gross Salary     : INR {slip['gross']:>10.2f}")\r
    print(f"TDS Tax (10%)    : -INR {slip['tds']:>9.2f}")\r
    print(f"Provident Fund   : -INR {slip['pf']:>9.2f} (12% PF)")\r
    print("-" * 45)\r
    print(f"NET TAKE-HOME    : INR {slip['net']:>10.2f}")\r
    print("-" * 45)\r
\r
    # Test taxation subpackage\r
    print("\\n--- 2. TESTING TAXATION SUBPACKAGE (via accotax_suite.calculate_gst) ---")\r
    course_fee = 15000.0\r
    gst_res = accotax_suite.calculate_gst(course_fee)\r
    print(f"Course Tuition   : INR {course_fee:,.2f}")\r
    print(f"CGST (9%)        : INR {gst_res['cgst']:,.2f}")\r
    print(f"SGST (9%)        : INR {gst_res['sgst']:,.2f}")\r
    print(f"Total GST (18%)  : INR {gst_res['total']:,.2f}")\r
\r
\r
if __name__ == "__main__":\r
    run_payroll_package_demo()\r
`,b=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
            PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_009: MODULES & PACKAGES\r
              TOPIC 5: CONCEPT OF PACKAGES & THE ROLES OF __init__.py\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. WHAT IS A PYTHON PACKAGE?\r
--------------------------------------------------------------------------------\r
  • A Python Package is a folder on disk containing Python module (.py) files\r
    and an \`__init__.py\` file.\r
  • Packages enable hierarchical multi-level namespaces (e.g. \`app.services.auth\`).\r
\r
--------------------------------------------------------------------------------\r
2. THE 3 PRIMARY ROLES OF __init__.py\r
--------------------------------------------------------------------------------\r
  1. Package Identifier:\r
     Tells Python that the directory is a package and should be treated as a\r
     module namespace on \`sys.path\`.\r
  2. Package Initialization:\r
     Executes setup code once when the package is imported into memory.\r
  3. API Elevation (Facade Pattern - BEST PRACTICE):\r
     Imports classes and functions from internal submodules into \`__init__.py\`\r
     so consumers can import directly from the package root:\r
       from my_package import Calculator  # Clean Facade!\r
     Instead of deep awkward paths:\r
       from my_package.services.engine.calculator import Calculator # Ugly!\r
\r
--------------------------------------------------------------------------------\r
3. REGULAR PACKAGES VS PEP 420 NAMESPACE PACKAGES\r
--------------------------------------------------------------------------------\r
  • Regular Package:\r
      Must contain \`__init__.py\`. Can have \`__file__\` attribute and execute code.\r
  • Implicit Namespace Package (Python 3.3+ PEP 420):\r
      Does NOT have \`__init__.py\`. Allows splitting a single package namespace\r
      across multiple separate directories or physical disk locations.\r
\r
--------------------------------------------------------------------------------\r
4. PACKAGE-LEVEL __all__ WHITELIST\r
--------------------------------------------------------------------------------\r
  Inside \`my_package/__init__.py\`:\r
    __all__ = ['PublicClass', 'public_func']\r
  Restricts what is exported when someone writes:\r
    from my_package import *\r
\r
================================================================================\r
           END OF STUDY NOTE • TOPIC 5: PACKAGES & __init__.py FILES\r
================================================================================\r
`,k=[{question:"What is the primary difference between a Python module and a Python package?",shortAnswer:"A module is a single Python file (.py); a package is a directory containing an __init__.py file and multiple modules/subpackages.",explanation:"Packages allow grouping related modules together into a structured, dot-separated namespace hierarchy (e.g. package.module).",hint:"Module = single .py file; Package = directory with __init__.py.",level:"basic",codeExample:`# Module: math_utils.py
# Package: accounting/ (__init__.py, gst.py, invoice.py)`},{question:"What are the three essential roles of the __init__.py file in a Python package?",shortAnswer:"1. Package Identifier (marks directory as a package); 2. Package Initialization (runs setup code on import); 3. API Elevation Facade (exposes internal functions at package root).",explanation:"While Python 3.3+ allows implicit namespace packages without __init__.py, regular packages use __init__.py to elevate APIs and initialize settings.",hint:"Identification, initialization execution, and API elevation facade.",level:"basic",codeExample:`# Inside my_pkg/__init__.py:
from .calculator import TaxCalculator
__all__ = ['TaxCalculator']`},{question:"What is 'API Elevation' (the Facade Pattern) in Python package design?",shortAnswer:"Importing key classes and functions from internal submodules into __init__.py so consumers can import directly from the top-level package instead of deep subpaths.",explanation:"Allows users to write 'from my_pkg import Calculator' instead of 'from my_pkg.services.engines.calc_module import Calculator', hiding internal refactorings.",hint:"Exposing internal classes directly at the package root level.",level:"moderate",codeExample:`# Inside my_package/__init__.py:
from .engine import ProcessEngine

# Consumer can simply write:
# from my_package import ProcessEngine`},{question:"What is an Implicit Namespace Package (PEP 420) introduced in Python 3.3?",shortAnswer:"A package directory that does NOT contain an __init__.py file, allowing a single package namespace to be split across multiple separate directories or physical paths on disk.",explanation:"Useful for large monorepos or plugin architectures where different teams deploy components into a shared top-level namespace (e.g. company.auth and company.billing).",hint:"A package without __init__.py that can span multiple directories.",level:"moderate",codeExample:`# Directory 1: /opt/lib1/company/auth.py
# Directory 2: /opt/lib2/company/billing.py
# Both share the 'company' namespace without __init__.py`},{question:"When does the code inside a package's __init__.py file execute?",shortAnswer:"Exactly once when the package (or any submodule within the package) is first imported into memory during a Python process.",explanation:"Subsequent imports retrieve the cached module from sys.modules without re-executing __init__.py.",hint:"Executes once upon the first import of the package.",level:"basic",codeExample:"# First 'import my_pkg' executes __init__.py once"},{question:"How does the __all__ list work when defined inside a package's __init__.py file?",shortAnswer:"It defines which submodules, classes, and functions are imported into the local namespace when someone runs 'from my_package import *'.",explanation:"Without __all__, 'from my_package import *' does not automatically import submodules unless explicitly imported in __init__.py.",hint:"Controls what 'from package import *' exports into the caller namespace.",level:"basic",codeExample:`# Inside my_package/__init__.py:
__all__ = ['ClientManager', 'InvoiceEngine']`},{question:"What is a Subpackage in Python?",shortAnswer:"A package directory nested inside another package directory, containing its own __init__.py file (e.g. app/services/__init__.py).",explanation:"Subpackages enable multi-tier hierarchical architectures: app.services.billing.calculator.",hint:"A nested package folder inside a parent package folder.",level:"basic",codeExample:"# my_app/accounting/gst.py -> from my_app.accounting import gst"},{question:"How do subpackages prevent identifier naming collisions across large development teams?",shortAnswer:"By isolating functions inside distinct domain namespaces (e.g. app.accounting.generate_report() vs app.academics.generate_report()).",explanation:"Different feature teams can use standard function names without risking accidental overwrites.",hint:"Isolates identical function names in separate domain namespaces.",level:"basic",codeExample:"# app.accounting.get_data() vs app.users.get_data()"},{question:"Can an __init__.py file be completely empty?",shortAnswer:"Yes. An empty __init__.py is entirely valid and simply signals to Python that the directory should be treated as a regular package.",explanation:"Leaving __init__.py empty is common when submodules are intended to be imported directly without top-level elevation.",hint:"An empty __init__.py is completely valid.",level:"basic",codeExample:"# An empty __init__.py marks the folder as a regular package"},{question:"How do you define a package version string in a standard Python package?",shortAnswer:"Set __version__ = '1.0.0' inside the top-level __init__.py file.",explanation:"Allows users to inspect package.__version__ at runtime.",hint:"Set __version__ = '1.0.0' in __init__.py.",level:"basic",codeExample:`# In __init__.py:
__version__ = '2.4.0'`},{question:"How can you implement lazy submodule loading in a package's __init__.py using PEP 562?",shortAnswer:"Define a module-level __getattr__(name) function inside __init__.py to import heavy submodules dynamically only when they are accessed.",explanation:"Drastically speeds up package import time by deferring heavy imports until the specific submodule is actually called.",hint:"Use module-level __getattr__(name) in __init__.py.",level:"complex",codeExample:`import importlib
def __getattr__(name):
    if name == 'heavy_module':
        return importlib.import_module('.heavy_module', __name__)
    raise AttributeError`},{question:"What is the __path__ attribute of a package?",shortAnswer:"A list of directory paths that Python searches when looking for submodules within that package.",explanation:"Regular packages have a __path__ list containing the package directory; namespace packages have multiple directories listed.",hint:"A list of directory paths where the package's submodules live.",level:"moderate",codeExample:`import json
print(json.__path__)  # ['C:\\...\\Lib\\json']`},{question:"Why is importing everything in __init__.py sometimes considered an anti-pattern in massive frameworks?",shortAnswer:"Because it forces Python to load and execute every single submodule on initial import, leading to slow startup times and high memory usage.",explanation:"In large frameworks, elevate only core public interfaces or use lazy loading for rarely used submodules.",hint:"Eagerly loading everything causes slow startup latency.",level:"moderate",codeExample:"# Elevate only core APIs; don't import all 100 submodules in __init__.py"},{question:"What happens if a directory contains Python files but no __init__.py in Python 3.3+?",shortAnswer:"Python treats it as an Implicit Namespace Package.",explanation:"Submodules can still be imported (e.g. import my_folder.my_module), but the folder lacks package initialization code.",hint:"Treated as a namespace package in Python 3.3+.",level:"moderate",codeExample:"# Folder without __init__.py functions as a namespace package"},{question:"How do you structure a package to support both 'import my_pkg' and running it from the terminal with 'python -m my_pkg'?",shortAnswer:"Place an __init__.py file (for library imports) AND a __main__.py file (for terminal execution) inside the package directory.",explanation:"'python -m my_pkg' automatically executes the package's __main__.py file.",hint:"Include both __init__.py and __main__.py.",level:"moderate",codeExample:`# my_pkg/
# ├── __init__.py
# └── __main__.py  <- Runs on: python -m my_pkg`},{question:"Can a package contain binary compiled extensions (.pyd or .so files) alongside .py files?",shortAnswer:"Yes. CPython imports compiled C extension modules (.pyd on Windows, .so on Linux) within packages just like .py files.",explanation:"Libraries like NumPy and OpenCV package compiled C/C++ binaries inside Python package directories for maximum speed.",hint:"Yes, packages can bundle compiled C extension modules.",level:"basic",codeExample:"# my_pkg/fast_math.pyd (Windows) or fast_math.so (Linux)"},{question:"What is the recommended directory structure for a production-ready Python package using modern packaging standards?",shortAnswer:"The 'src-layout': project_root/src/my_package/__init__.py, pyproject.toml, README.md, tests/.",explanation:"The src-layout prevents local import shadowing during development and guarantees that tests run against the installed package.",hint:"Use src/package_name/ with pyproject.toml.",level:"moderate",codeExample:`# root/
# ├── pyproject.toml
# ├── src/
# │   └── my_pkg/
# │       └── __init__.py
# └── tests/`},{question:"How does a package's __file__ attribute differ between regular packages and namespace packages?",shortAnswer:"Regular packages have a __file__ pointing to the __init__.py path; namespace packages have __file__ = None.",explanation:"Because namespace packages do not have an __init__.py file, they have no single file origin on disk.",hint:"Regular has path to __init__.py; namespace has None.",level:"complex",codeExample:`import json
print(json.__file__)  # Ends in __init__.py`},{question:"What is the difference between relative imports inside a package (. vs ..)?",shortAnswer:"'.' refers to the current subpackage/directory; '..' refers to the parent package directory one level up.",explanation:"'from .module import func' imports from same folder; 'from ..other_pkg import func' goes one folder up.",hint:"'.' = current directory, '..' = parent directory.",level:"basic",codeExample:`# In app/services/billing.py:
# from .models import Invoice (same folder)
# from ..auth import verify_user (parent folder)`},{question:"Why does running a script that uses relative imports directly from the terminal (python my_pkg/sub/file.py) raise an ImportError?",shortAnswer:"Because Python does not know the parent package context when a script is executed directly (ImportError: attempted relative import with no known parent package).",explanation:"To execute a module inside a package with relative imports, run from project root with 'python -m my_pkg.sub.file'.",hint:"Run with python -m my_pkg.sub.file to maintain package context.",level:"complex",codeExample:"# Terminal: python -m my_pkg.sub.file"},{question:"Can an __init__.py file export variables from multiple submodules under different alias names?",shortAnswer:"Yes: from .submodule_a import Engine as CoreEngine",explanation:"Aliasing inside __init__.py allows creating clean public interfaces while keeping internal file names descriptive.",hint:"Use 'from .sub import Symbol as PublicAlias' in __init__.py.",level:"basic",codeExample:`# In __init__.py:
from .internal_tax_calc import TaxEngine as GSTCalculator`},{question:"What is a Circular Package Dependency and how is it resolved?",shortAnswer:"When package A imports package B and package B imports package A; resolved by refactoring shared models into a common base package or using deferred imports.",explanation:"Maintaining a Directed Acyclic Graph (DAG) between packages is a core principle of clean architecture.",hint:"Break package cycles by extracting shared types into common.",level:"moderate",codeExample:"# Refactor shared entities into core/ or common/"},{question:"How do you verify if a loaded module object is a package vs a standalone module in Python code?",shortAnswer:"Check if hasattr(module, '__path__') is True (packages always have a __path__ attribute).",explanation:"Standalone modules do not have __path__, whereas packages (regular and namespace) always do.",hint:"Packages have hasattr(mod, '__path__') == True.",level:"moderate",codeExample:`import json, math
print(hasattr(json, '__path__'))  # True (Package)
print(hasattr(math, '__path__'))  # False (Module)`},{question:"Why should developers avoid putting complex business logic directly inside __init__.py files?",shortAnswer:"Because __init__.py should remain a clean configuration and API elevation facade; placing business logic inside it makes testing and maintenance difficult.",explanation:"Place business logic inside dedicated modules (e.g. calculator.py, service.py) and use __init__.py strictly for exports.",hint:"Keep __init__.py lean; put logic in dedicated submodules.",level:"basic",codeExample:"# Keep __init__.py lean (facade only)"},{question:"How does Python handle circular imports when symbols are elevated in __init__.py?",shortAnswer:"If submodules import each other from the top-level package while __init__.py is still executing, circular import errors occur; use explicit relative imports from specific sibling files instead.",explanation:"Submodules should import from sibling files ('from .sibling import x') rather than importing from the parent package facade ('from my_pkg import x') during initialization.",hint:"Submodules should use relative sibling imports rather than importing parent facade.",level:"complex",codeExample:`# Inside my_pkg/module_a.py:
# GOOD: from .module_b import func_b
# BAD:  from my_pkg import func_b`}];function I(){const l=o.useRef([]),[r,c]=o.useState("hierarchy"),[a,d]=o.useState(!0);o.useEffect(()=>{const n=new IntersectionObserver(i=>{i.forEach(p=>{p.isIntersecting&&p.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return l.current.forEach(i=>{i&&n.observe(i)}),()=>n.disconnect()},[]);const t=n=>{n&&!l.current.includes(n)&&l.current.push(n)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:t,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 2 • Module 002_009"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 5"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Modules, Packages & Python Standard Library"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Concept of Packages & ",e.jsx("code",{className:"text-teal-400 font-mono",children:"__init__.py"})," Files"]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master Python's hierarchical package system: package directory structuring, the 3 foundational roles of ",e.jsx("code",{className:"text-teal-300 font-mono",children:"__init__.py"}),", API elevation via the Facade Pattern, Regular vs PEP 420 Namespace packages, subpackages, and lazy submodule loading."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📁 Package Directory Structure"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🪄 The 3 Roles of __init__.py"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🏛️ API Elevation Facade Pattern"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ Lazy Loading with PEP 562"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📦"}),e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:["1. What is a Package & The 3 Roles of ",e.jsx("code",{className:"text-teal-400 font-mono",children:"__init__.py"})]})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["In Python, a ",e.jsx("strong",{children:"Package"})," is simply a folder containing Python files and a special ",e.jsx("code",{className:"text-teal-400 font-mono",children:"__init__.py"})," file. It enables multi-tier dot-separated namespaces (e.g. ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"app.accounting.gst"}),") to prevent naming collisions in large applications:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg shadow-teal-950/30",children:[e.jsxs("div",{className:"flex items-center gap-2 text-teal-400 font-bold text-base mb-1",children:[e.jsx("span",{children:"1️⃣"})," Package Identifier"]}),e.jsx("p",{className:"text-xs text-slate-300",children:"Signals to Python that this directory should be treated as an importable module package namespace."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg shadow-cyan-950/30",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base mb-1",children:[e.jsx("span",{children:"2️⃣"})," Package Initializer"]}),e.jsx("p",{className:"text-xs text-slate-300",children:"Executes configuration code once when the package is imported for the first time into memory."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg shadow-purple-950/30",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base mb-1",children:[e.jsx("span",{children:"3️⃣"})," API Elevation Facade"]}),e.jsx("p",{className:"text-xs text-slate-300",children:"Imports key classes/functions from submodules so consumers can import directly from package root!"})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Facade Pattern: Why API Elevation Matters"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Without API elevation, developers must write awkward deep imports like ",e.jsx("code",{className:"text-rose-400 font-mono",children:"from accotax.services.taxation.engine.gst_calc import calculate_gst"}),". With ",e.jsx("code",{className:"text-teal-300 font-mono",children:"__init__.py"})," elevation, they simply write ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"from accotax import calculate_gst"}),"!"]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"🧭"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Package Structure & API Elevation"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>c("hierarchy"),className:s("px-3 py-1.5 rounded-lg transition-all",r==="hierarchy"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Package Hierarchy"}),e.jsx("button",{onClick:()=>c("elevation"),className:s("px-3 py-1.5 rounded-lg transition-all",r==="elevation"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"API Elevation Facade"}),e.jsx("button",{onClick:()=>c("namespace"),className:s("px-3 py-1.5 rounded-lg transition-all",r==="namespace"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Namespace Packages (PEP 420)"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining package directory layouts, facade imports, and namespace boundaries:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:r==="hierarchy"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"PACKAGE DIRECTORY TREE & SUBPACKAGES"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"810",height:"240",rx:"8",fill:"#0f172a",stroke:"#334155"}),e.jsx("text",{x:"20",y:"30",fill:"#38bdf8",fontSize:"13",fontWeight:"bold",children:"📁 coder_suite/ (Root Package Directory)"}),e.jsx("text",{x:"40",y:"55",fill:"#2dd4bf",fontSize:"12 font-mono",children:"├── 📄 __init__.py (Elevates Public API facade)"}),e.jsx("text",{x:"40",y:"80",fill:"#cbd5e1",fontSize:"12 font-mono",children:"├── 📁 accounting/ (Subpackage 1)"}),e.jsx("text",{x:"60",y:"105",fill:"#2dd4bf",fontSize:"12 font-mono",children:"│   ├── 📄 __init__.py"}),e.jsx("text",{x:"60",y:"130",fill:"#cbd5e1",fontSize:"12 font-mono",children:"│   ├── 📄 gst_calculator.py"}),e.jsx("text",{x:"60",y:"155",fill:"#cbd5e1",fontSize:"12 font-mono",children:"│   └── 📄 invoice_engine.py"}),e.jsx("text",{x:"40",y:"180",fill:"#cbd5e1",fontSize:"12 font-mono",children:"└── 📁 payroll/ (Subpackage 2)"}),e.jsx("text",{x:"60",y:"205",fill:"#2dd4bf",fontSize:"12 font-mono",children:"    ├── 📄 __init__.py"}),e.jsx("text",{x:"60",y:"230",fill:"#cbd5e1",fontSize:"12 font-mono",children:"    └── 📄 salary_slip.py"})]})]}):r==="elevation"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"THE __init__.py API ELEVATION FACADE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"13",fontWeight:"bold",children:"Internal Submodules (Hidden Complexity)"}),e.jsx("text",{x:"20",y:"65",fill:"#ecfdf5",fontSize:"11 font-mono",children:"coder_suite/accounting/gst_calc.py"}),e.jsx("text",{x:"40",y:"85",fill:"#34d399",fontSize:"11 font-mono",children:"class GSTCalculator: ..."}),e.jsx("text",{x:"20",y:"120",fill:"#ecfdf5",fontSize:"11 font-mono",children:"coder_suite/payroll/salary_slip.py"}),e.jsx("text",{x:"40",y:"140",fill:"#34d399",fontSize:"11 font-mono",children:"def compute_salary(): ..."}),e.jsx("rect",{x:"20",y:"175",width:"350",height:"45",rx:"4",fill:"#090d16",stroke:"#475569"}),e.jsx("text",{x:"30",y:"200",fill:"#f43f5e",fontSize:"11",children:"Awkward Deep Imports without facade!"})]}),e.jsxs("g",{transform:"translate(450, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"Package __init__.py (Unified Facade)"}),e.jsx("text",{x:"20",y:"65",fill:"#cbd5e1",fontSize:"11 font-mono",children:"from .accounting.gst_calc import GSTCalculator"}),e.jsx("text",{x:"20",y:"90",fill:"#cbd5e1",fontSize:"11 font-mono",children:"from .payroll.salary_slip import compute_salary"}),e.jsx("text",{x:"20",y:"120",fill:"#38bdf8",fontSize:"11 font-mono",children:"__all__ = ['GSTCalculator', 'compute_salary']"}),e.jsx("rect",{x:"20",y:"175",width:"350",height:"45",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"200",fill:"#34d399",fontSize:"11 font-bold",children:"Clean: from coder_suite import GSTCalculator"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"REGULAR PACKAGES VS PEP 420 IMPLICIT NAMESPACE PACKAGES"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"13",fontWeight:"bold",children:"Regular Package (Traditional)"}),e.jsx("text",{x:"20",y:"65",fill:"#f8fafc",fontSize:"12 font-mono",children:"• MUST have an __init__.py file"}),e.jsx("text",{x:"20",y:"95",fill:"#f8fafc",fontSize:"12 font-mono",children:"• Can execute initialization logic"}),e.jsx("text",{x:"20",y:"125",fill:"#f8fafc",fontSize:"12 font-mono",children:"• Has a valid __file__ attribute"}),e.jsx("text",{x:"20",y:"155",fill:"#f8fafc",fontSize:"12 font-mono",children:"• Confined to a single folder on disk"}),e.jsx("rect",{x:"20",y:"180",width:"350",height:"40",rx:"4",fill:"#090d16",stroke:"#475569"}),e.jsx("text",{x:"30",y:"205",fill:"#34d399",fontSize:"11",children:"Best for 99% of standalone libraries"})]}),e.jsxs("g",{transform:"translate(450, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"13",fontWeight:"bold",children:"Implicit Namespace Package (PEP 420)"}),e.jsx("text",{x:"20",y:"65",fill:"#cbd5e1",fontSize:"12 font-mono",children:"• NO __init__.py file present"}),e.jsx("text",{x:"20",y:"95",fill:"#cbd5e1",fontSize:"12 font-mono",children:"• Zero execution on import"}),e.jsx("text",{x:"20",y:"125",fill:"#cbd5e1",fontSize:"12 font-mono",children:"• __file__ evaluates to None"}),e.jsx("text",{x:"20",y:"155",fill:"#cbd5e1",fontSize:"12 font-mono",children:"• Can span MULTIPLE directories on disk"}),e.jsx("rect",{x:"20",y:"180",width:"350",height:"40",rx:"4",fill:"#090d16",stroke:"#475569"}),e.jsx("text",{x:"30",y:"205",fill:"#c4b5fd",fontSize:"11",children:"Best for large monorepos and plugin suites"})]})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive API Elevation Facade Simulator"})]}),e.jsxs("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:["Compare consumer import ergonomics with and without the ",e.jsx("code",{className:"text-teal-400 font-mono",children:"__init__.py"})," Facade Pattern:"]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6",children:[e.jsxs("button",{onClick:()=>d(!0),className:s("p-4 rounded-xl border text-left transition-all",a?"bg-teal-950 border-teal-500 text-teal-200 shadow-lg shadow-teal-950":"bg-slate-950 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"text-sm font-mono font-bold text-teal-300 mb-1",children:"✨ Clean Facade (With __init__.py Elevation)"}),e.jsx("code",{className:"text-xs text-slate-400",children:"from coder_suite import GSTCalculator"})]}),e.jsxs("button",{onClick:()=>d(!1),className:s("p-4 rounded-xl border text-left transition-all",a?"bg-slate-950 border-slate-800 text-slate-400 hover:text-white":"bg-rose-950 border-rose-500 text-rose-200 shadow-lg shadow-rose-950"),children:[e.jsx("div",{className:"text-sm font-mono font-bold text-rose-300 mb-1",children:"🧱 Deep Nested Import (Without Facade)"}),e.jsx("code",{className:"text-xs text-slate-400",children:"from coder_suite.accounting.engine.gst_calc import GSTCalculator"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block",children:"Consumer Developer Experience"}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs font-mono",children:[e.jsx("span",{className:"text-slate-400 block mb-1",children:"Import Statement:"}),e.jsx("code",{className:a?"text-emerald-300 font-bold":"text-rose-300",children:a?"from coder_suite import GSTCalculator, compute_salary":"from coder_suite.accounting.engine.gst_calc import GSTCalculator"})]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:a?"The facade hides internal file reorganization. If you refactor 'gst_calc.py' to 'tax_core.py', consumers' code will NEVER break!":"Consumers are tightly coupled to your exact internal folder paths. Any internal refactoring breaks consumer code across the company!"})]}),e.jsxs("div",{className:"space-y-2 flex flex-col justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block",children:"Required Package __init__.py Code"}),e.jsx("pre",{className:"p-4 bg-slate-900 rounded-lg border border-slate-800 text-teal-300 font-mono text-xs overflow-x-auto whitespace-pre-wrap flex-1",children:a?`"""coder_suite package root __init__.py"""

__version__ = "4.2.0"
__all__ = ["GSTCalculator", "compute_salary"]

# Elevate symbols from submodules:
from .accounting.gst_calc import GSTCalculator
from .payroll.salary_slip import compute_salary`:`# __init__.py is empty!
# No symbols are elevated to the package root.`})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Packages & Modules Reference Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Architecture Type"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Physical Structure on Disk"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Requires __init__.py?"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Primary Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"Single Module"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"my_script.py"}),e.jsx("td",{className:"py-3 px-4 text-slate-400",children:"No"}),e.jsx("td",{className:"py-3 px-4",children:"Standalone scripts and simple utilities"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"Regular Package"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"folder/ + __init__.py"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-bold",children:"YES"}),e.jsx("td",{className:"py-3 px-4",children:"Standard libraries, frameworks, enterprise apps"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Subpackage"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"pkg/subpkg/ + __init__.py"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-bold",children:"YES"}),e.jsx("td",{className:"py-3 px-4",children:"Domain isolation (accounting, billing, payroll)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"Namespace Package (PEP 420)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"folder/ (No __init__.py)"}),e.jsx("td",{className:"py-3 px-4 text-rose-400 font-bold",children:"NO"}),e.jsx("td",{className:"py-3 px-4",children:"Multi-repository plugin ecosystems"})]})]})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating package structures, subpackage isolation, lazy module loading, and corporate payroll suites:"}),e.jsx(m,{files:[{filename:"package_structure_and_init_role.py",code:g,description:"Directory layouts, the 3 roles of __init__.py, and simulated API elevation facades."},{filename:"subpackages_and_api_elevation.py",code:h,description:"Nested subpackage architecture and domain namespace isolation."},{filename:"package_all_whitelist_and_lazy_imports.py",code:f,description:"Package-level __all__ whitelists and lazy submodule loading via PEP 562 __getattr__."},{filename:"enterprise_payroll_package_simulator.py",code:y,description:"Multi-tier enterprise payroll and taxation package simulator with unified facade."}]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Putting Heavy Logic Directly in `__init__.py`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing 500 lines of complex business algorithms directly inside ",e.jsx("code",{className:"text-rose-300 font-mono",children:"__init__.py"})," makes testing, refactoring, and debugging difficult."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Keep ",e.jsx("code",{className:"text-emerald-300",children:"__init__.py"})," lean: write logic in submodules and import/elevate them in ",e.jsx("code",{className:"text-emerald-300",children:"__init__.py"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Running Relative Import Scripts Directly"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Executing ",e.jsx("code",{className:"text-amber-300 font-mono",children:"python my_pkg/sub/file.py"})," crashes with ",e.jsx("code",{className:"text-rose-400 font-mono",children:"ImportError: attempted relative import with no known parent package"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Run from project root using module syntax: ",e.jsx("code",{className:"text-emerald-300",children:"python -m my_pkg.sub.file"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Bloated Eager Imports in Huge Packages"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Importing all 100 submodules inside the root ",e.jsx("code",{className:"text-purple-300 font-mono",children:"__init__.py"})," slows down startup by seconds on every CLI command."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use PEP 562 lazy submodule loading with ",e.jsx("code",{className:"text-emerald-300",children:"__getattr__"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Circular Facade Imports"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["If a submodule imports a sibling from the root package facade (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"from my_pkg import B"}),") while ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"__init__.py"})," is running, Python triggers circular import failure."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Submodules should always import siblings using relative syntax: ",e.jsx("code",{className:"text-emerald-300",children:"from .sibling import B"}),"."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering package structure, __init__.py roles, facade patterns, namespace packages, and subpackages:"}),e.jsx(x,{questions:k})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with package comparison tables, facade templates, and PEP 420 rules:"}),e.jsx("div",{className:"mb-10",children:e.jsx(_,{content:b,filename:"python_topic5_packages_and_init_notes.txt",title:"Print Topic 5 Study Notes"})}),e.jsx(u,{})]})]})]})}export{I as default};
