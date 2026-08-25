import{b as s,j as e,bg as l}from"./vendor-react-core-Doz9nIC6.js";import{P as h}from"./PythonFileLoader-hCi5osN-.js";import{P as b}from"./PlainTextPrint-C08xhKA4.js";import{F as g}from"./FAQTemplate-CkSqDH4B.js";import{T as y}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const w=`# topic3_files/custom_module_anatomy.py\r
# Module: 002_009_modules-packages\r
# Topic: Creating and structuring custom user-defined modules\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 3 - File 1: Anatomy & Layout of an Enterprise Python Custom Module\r
Demonstrates:\r
  1. Top-level module docstrings describing purpose, author, and version\r
  2. PEP-8 compliant import section (Standard lib, Third-party, Local)\r
  3. Public API declaration via __all__ whitelist\r
  4. Encapsulation of private helper functions with leading underscores\r
  5. Module-level self-testing entry point via if __name__ == '__main__':\r
"""\r
\r
# PEP 8 Import Section (Group 1: Standard Library)\r
import sys\r
import math\r
from typing import List, Dict, Optional\r
\r
# Public API Whitelist: Defines what is exported on 'from custom_module import *'\r
__all__ = ["calculate_discounted_fee", "format_currency_inr", "DEFAULT_GST_RATE"]\r
\r
# Module-Level Constants (UPPERCASE_WITH_UNDERSCORES)\r
DEFAULT_GST_RATE: float = 0.18\r
AUTHOR: str = "Sukanta Hui (Coder & AccoTax)"\r
VERSION: str = "2.4.0"\r
\r
\r
def format_currency_inr(amount: float) -> str:\r
    """Formats a numeric value into standard Indian Rupee notation."""\r
    return f"INR {amount:,.2f}"\r
\r
\r
def calculate_discounted_fee(\r
    base_fee: float,\r
    discount_pct: float = 10.0,\r
    include_gst: bool = True\r
) -> Dict[str, float]:\r
    """\r
    Calculates the final course fee after applying discount and optional GST.\r
    \r
    Args:\r
        base_fee: Original gross fee before discount.\r
        discount_pct: Percentage discount (default 10.0%).\r
        include_gst: Whether to append 18% GST (default True).\r
        \r
    Returns:\r
        Dictionary containing breakdown of gross, discount, subtotal, GST, and net.\r
    """\r
    _validate_positive_amount(base_fee)\r
    \r
    discount_amount = base_fee * (discount_pct / 100.0)\r
    subtotal = base_fee - discount_amount\r
    gst_amount = subtotal * DEFAULT_GST_RATE if include_gst else 0.0\r
    net_total = subtotal + gst_amount\r
\r
    return {\r
        "gross": base_fee,\r
        "discount": discount_amount,\r
        "subtotal": subtotal,\r
        "gst": gst_amount,\r
        "net_payable": net_total\r
    }\r
\r
\r
def _validate_positive_amount(val: float) -> None:\r
    """Private internal helper function (leading underscore) not intended for public use."""\r
    if val < 0:\r
        raise ValueError(f"Fee amount cannot be negative! Received: {val}")\r
\r
\r
# Self-Testing Execution Guard\r
if __name__ == "__main__":\r
    print("=" * 65)\r
    print(f"MODULE SELF-TEST: {__name__} (Version {VERSION})")\r
    print("=" * 65)\r
    \r
    sample_fee = 12000.0\r
    breakdown = calculate_discounted_fee(sample_fee, discount_pct=15.0)\r
    \r
    print(f"Gross Course Fee   : {format_currency_inr(breakdown['gross'])}")\r
    print(f"15% Discount       : -{format_currency_inr(breakdown['discount'])}")\r
    print(f"Taxable Subtotal   : {format_currency_inr(breakdown['subtotal'])}")\r
    print(f"18% GST            : +{format_currency_inr(breakdown['gst'])}")\r
    print(f"Net Total Payable  : {format_currency_inr(breakdown['net_payable'])}")\r
`,j=`# topic3_files/export_control_with_all.py\r
# Module: 002_009_modules-packages\r
# Topic: Creating and structuring custom user-defined modules\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 3 - File 2: Public API Control with __all__ & Private Symbol Encapsulation\r
Demonstrates:\r
  1. How __all__ specifies the public interface whitelist for wildcard imports\r
  2. The difference between modules with __all__ vs without __all__\r
  3. Private symbol conventions (_leading_underscore)\r
  4. Programmatically inspecting a module's public vs private interface\r
"""\r
\r
import types\r
\r
# Simulating a custom module namespace with __all__\r
sample_code = """\r
__all__ = ['public_fee_calculator', 'PUBLIC_DISCOUNT_CODE']\r
\r
PUBLIC_DISCOUNT_CODE = 'BARRACKPORE2026'\r
_INTERNAL_API_SECRET = 'super_secret_tax_key_9402'\r
\r
def public_fee_calculator(amount):\r
    return amount * 0.9\r
\r
def _internal_db_sync():\r
    return 'Database synced privately'\r
\r
def helper_without_underscore():\r
    return 'I will NOT be exported because __all__ is defined!'\r
"""\r
\r
def demonstrate_all_whitelist_mechanism():\r
    print("=" * 65)\r
    print("1. HOW __all__ RESTRICTS PUBLIC EXPORTS")\r
    print("=" * 65)\r
\r
    # Dynamically create and execute the module\r
    mock_module = types.ModuleType("fee_engine")\r
    exec(sample_code, mock_module.__dict__)\r
\r
    print(f"Module __all__ whitelist : {mock_module.__all__}\\n")\r
\r
    # Symbols that WOULD be imported on 'from fee_engine import *'\r
    wildcard_exports = mock_module.__all__\r
    print(f"Symbols exported by 'from fee_engine import *':")\r
    for symbol in wildcard_exports:\r
        print(f"  * [EXPORTED] '{symbol}'")\r
\r
    # Symbols that are EXCLUDED from wildcard import\r
    all_keys = [k for k in mock_module.__dict__.keys() if not k.startswith("__")]\r
    excluded = [k for k in all_keys if k not in wildcard_exports]\r
    print(f"\\nSymbols EXCLUDED by __all__:")\r
    for symbol in excluded:\r
        print(f"  * [EXCLUDED] '{symbol}'")\r
\r
\r
def explain_export_rules():\r
    print("\\n" + "=" * 65)\r
    print("2. PYTHON MODULE EXPORT INVARIANTS")\r
    print("=" * 65)\r
    print("""\r
Case 1: When __all__ IS defined:\r
  - \`from module import *\` imports ONLY the identifiers listed in \`__all__\`.\r
  - Any function or constant omitted from \`__all__\` is completely hidden from wildcard imports.\r
\r
Case 2: When __all__ is NOT defined:\r
  - \`from module import *\` imports ALL symbols in the file EXCEPT those starting with \`_\`.\r
\r
Direct Explicit Imports (Always Allowed):\r
  - Even if \`_internal_db_sync\` or \`helper_without_underscore\` are not in \`__all__\`,\r
    writing \`from module import _internal_db_sync\` or \`module._internal_db_sync()\`\r
    will still work (Python relies on developer convention: "We are all consenting adults").\r
""")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_all_whitelist_mechanism()\r
    explain_export_rules()\r
`,v=`# topic3_files/multi_module_import_demo.py\r
# Module: 002_009_modules-packages\r
# Topic: Creating and structuring custom user-defined modules\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 3 - File 3: Multi-Module Architecture & Layered Separation of Concerns\r
Demonstrates:\r
  1. Designing decoupled, single-responsibility custom modules:\r
     - Configuration Layer (Constants, settings)\r
     - Business Logic Layer (Pure functions, algorithms)\r
     - Presentation / Formatter Layer (String formatting, reports)\r
  2. Clean inter-module imports and orchestration\r
"""\r
\r
import types\r
from typing import Dict, Any\r
\r
# 1. Simulated Config Module (settings.py)\r
config_source = """\r
INSTITUTE_NAME = 'Coder & AccoTax'\r
DEFAULT_CURRENCY = 'INR'\r
GST_RATE = 0.18\r
SCHOLARSHIP_TIERS = {\r
    'GOLD': 0.25,   # 25%\r
    'SILVER': 0.15, # 15%\r
    'BRONZE': 0.10  # 10%\r
}\r
"""\r
\r
# 2. Simulated Logic Module (calculations.py)\r
logic_source = """\r
def compute_net_tuition(base_fee: float, tier: str = 'BRONZE', gst_rate: float = 0.18) -> dict:\r
    discount_pct = 0.10\r
    if tier == 'GOLD': discount_pct = 0.25\r
    elif tier == 'SILVER': discount_pct = 0.15\r
\r
    discount = base_fee * discount_pct\r
    taxable = base_fee - discount\r
    tax = taxable * gst_rate\r
    return {\r
        'base': base_fee,\r
        'discount': discount,\r
        'taxable': taxable,\r
        'tax': tax,\r
        'total': taxable + tax\r
    }\r
"""\r
\r
def demonstrate_layered_multi_module_pipeline():\r
    print("=" * 65)\r
    print("1. LAYERED MULTI-MODULE WORKFLOW ORCHESTRATION")\r
    print("=" * 65)\r
\r
    # Instantiate simulated custom modules\r
    settings_mod = types.ModuleType("settings")\r
    exec(config_source, settings_mod.__dict__)\r
\r
    calc_mod = types.ModuleType("calculations")\r
    exec(logic_source, calc_mod.__dict__)\r
\r
    print("Discovered Modules:")\r
    print(f"  * Config Module : '{settings_mod.__name__}' -> {settings_mod.INSTITUTE_NAME}")\r
    print(f"  * Logic Module  : '{calc_mod.__name__}' -> functions: {list(calc_mod.__dict__.keys())[-1]}\\n")\r
\r
    # Orchestrator calls logic module using settings constants\r
    student_record = {"name": "Susmita Mukherjee", "course": "Python Pro", "base_fee": 15000.0, "tier": "GOLD"}\r
    \r
    result = calc_mod.compute_net_tuition(\r
        base_fee=student_record["base_fee"],\r
        tier=student_record["tier"],\r
        gst_rate=settings_mod.GST_RATE\r
    )\r
\r
    print(f"Student Name    : {student_record['name']}")\r
    print(f"Enrolled Course : {student_record['course']} (Scholarship: {student_record['tier']})")\r
    print(f"Gross Tuition   : {settings_mod.DEFAULT_CURRENCY} {result['base']:,.2f}")\r
    print(f"Tier Discount   : -{settings_mod.DEFAULT_CURRENCY} {result['discount']:,.2f} (25% Gold)")\r
    print(f"18% GST Tax     : +{settings_mod.DEFAULT_CURRENCY} {result['tax']:,.2f}")\r
    print(f"Net Total Due   : {settings_mod.DEFAULT_CURRENCY} {result['total']:,.2f}")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_layered_multi_module_pipeline()\r
`,N=`# topic3_files/student_fee_management_module.py\r
# Module: 002_009_modules-packages\r
# Topic: Creating and structuring custom user-defined modules\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Module: student_fee_management_module\r
======================================\r
Enterprise student fee calculation, GST assessment, and receipt generation engine.\r
\r
Author  : Sukanta Hui (Founder, Coder & AccoTax)\r
Location: Barrackpore, West Bengal, India\r
Version : 2.6.0\r
License : MIT\r
\r
Exported Public API (__all__):\r
  - StudentFeeManager (Class)\r
  - generate_fee_receipt (Function)\r
  - calculate_gst_breakdown (Function)\r
  - STANDARD_GST_RATE (Constant)\r
"""\r
\r
import sys\r
import datetime as dt\r
from typing import Dict, Any, Optional\r
\r
# Public API Whitelist\r
__all__ = [\r
    "StudentFeeManager",\r
    "generate_fee_receipt",\r
    "calculate_gst_breakdown",\r
    "STANDARD_GST_RATE"\r
]\r
\r
# Module Constants\r
STANDARD_GST_RATE: float = 0.18\r
INSTITUTE_NAME: str = "Coder & AccoTax"\r
BRANCH_LOCATION: str = "Barrackpore, Kolkata"\r
\r
\r
def calculate_gst_breakdown(taxable_amount: float, rate: float = STANDARD_GST_RATE) -> Dict[str, float]:\r
    """Calculates CGST (9%) and SGST (9%) breakdown for West Bengal state transactions."""\r
    total_gst = taxable_amount * rate\r
    cgst = total_gst / 2.0\r
    sgst = total_gst / 2.0\r
    return {\r
        "cgst": cgst,\r
        "sgst": sgst,\r
        "total_gst": total_gst\r
    }\r
\r
\r
def generate_fee_receipt(\r
    student_id: int,\r
    student_name: str,\r
    course_name: str,\r
    base_fee: float,\r
    discount_pct: float = 0.0\r
) -> str:\r
    """Generates an ASCII-formatted educational payment receipt."""\r
    discount = base_fee * (discount_pct / 100.0)\r
    taxable = base_fee - discount\r
    gst = calculate_gst_breakdown(taxable)\r
    net_total = taxable + gst["total_gst"]\r
    now = dt.datetime.now()\r
\r
    receipt_lines = [\r
        "=" * 55,\r
        f"{INSTITUTE_NAME:^55}",\r
        f"{BRANCH_LOCATION:^55}",\r
        f"OFFICIAL ENROLLMENT RECEIPT #{student_id:06d}",\r
        "=" * 55,\r
        f"Date & Time  : {now:%d-%b-%Y %I:%M %p}",\r
        f"Student Name : {student_name}",\r
        f"Course Track : {course_name}",\r
        "-" * 55,\r
        f"Gross Fee    : INR {base_fee:>10.2f}",\r
        f"Discount ({discount_pct:.0f}%): -INR {discount:>9.2f}",\r
        f"Taxable Sub  : INR {taxable:>10.2f}",\r
        f"CGST (9%)    : +INR {gst['cgst']:>9.2f}",\r
        f"SGST (9%)    : +INR {gst['sgst']:>9.2f}",\r
        "-" * 55,\r
        f"NET PAID     : INR {net_total:>10.2f}",\r
        "=" * 55,\r
    ]\r
    return "\\n".join(receipt_lines)\r
\r
\r
class StudentFeeManager:\r
    """High-level batch fee aggregator and accounting manager."""\r
\r
    def __init__(self, institute: str = INSTITUTE_NAME):\r
        self.institute = institute\r
        self._records: Dict[int, Dict[str, Any]] = {}\r
\r
    def enroll_student(self, student_id: int, name: str, course: str, fee: float) -> str:\r
        self._records[student_id] = {"name": name, "course": course, "fee": fee}\r
        return f"Student {name} (ID: {student_id}) enrolled successfully in {course}."\r
\r
    def get_total_batch_revenue(self) -> float:\r
        return sum(r["fee"] for r in self._records.values())\r
\r
\r
# Module Self-Test Guard\r
if __name__ == "__main__":\r
    print(f"Executing self-test for {__name__}...\\n")\r
    receipt_out = generate_fee_receipt(\r
        student_id=9402,\r
        student_name="Susmita Mukherjee",\r
        course_name="Python Basic to Pro",\r
        base_fee=12500.0,\r
        discount_pct=10.0\r
    )\r
    print(receipt_out)\r
`,E=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
            PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_009: MODULES & PACKAGES\r
            TOPIC 3: CREATING & STRUCTURING CUSTOM USER-DEFINED MODULES\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. CANONICAL PEP 8 MODULE LAYOUT\r
--------------------------------------------------------------------------------\r
  1. Module Docstring: """Module description, author, version, and license."""\r
  2. Standard Imports:\r
       - Block 1: Standard library (os, sys, math)\r
       - Block 2: Third-party packages (requests, pandas)\r
       - Block 3: Local project modules (from . import models)\r
  3. Public Export Whitelist: __all__ = ["MyClass", "my_function"]\r
  4. Module Constants: UPPERCASE_WITH_UNDERSCORES (e.g. GST_RATE = 0.18)\r
  5. Classes & Core Business Logic Functions\r
  6. Private Internal Helper Functions: Prefix with leading underscore (_helper)\r
  7. Module Execution Guard: if __name__ == '__main__':\r
\r
--------------------------------------------------------------------------------\r
2. HOW __all__ CONTROLS EXPORTS\r
--------------------------------------------------------------------------------\r
  • \`__all__\` is a list of strings specifying which symbols are exported\r
    when someone executes \`from my_module import *\`.\r
  • When defined: ONLY symbols in \`__all__\` are exported.\r
  • When omitted: All symbols EXCEPT those starting with \`_\` are exported.\r
  • Best Practice: ALWAYS define \`__all__\` in library modules to make public APIs explicit!\r
\r
--------------------------------------------------------------------------------\r
3. MULTI-MODULE LAYERED ARCHITECTURE\r
--------------------------------------------------------------------------------\r
  • config.py      -> Holds constants, environment variables, settings.\r
  • logic.py       -> Pure calculations, algorithms, transformations.\r
  • formatter.py   -> Output formatting, ASCII tables, and presentation.\r
  • main.py        -> Orchestrates the workflow by importing from layers.\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 3: CUSTOM USER-DEFINED MODULES\r
================================================================================\r
`,T=[{question:"What is a custom user-defined module in Python?",shortAnswer:"Any standard Python source file (.py) containing functions, classes, or variables that can be imported into other Python programs.",explanation:"Creating custom modules enables code reusability, maintainability, and clean separation of concerns across projects.",hint:"Any .py file that is imported into another script.",level:"basic",codeExample:`# In math_helpers.py:
def square(x): return x * x

# In main.py:
import math_helpers
print(math_helpers.square(5))  # 25`},{question:"What is the canonical PEP 8 layout order for elements within a custom Python module?",shortAnswer:"1. Module docstring -> 2. Grouped imports -> 3. __all__ declaration -> 4. Module constants -> 5. Classes & functions -> 6. if __name__ == '__main__': execution guard.",explanation:"Adhering to this canonical structure makes Python codebases immediately recognizable and easy to navigate for team members.",hint:"Docstring -> Imports -> __all__ -> Constants -> Classes/Functions -> Main Guard.",level:"basic",codeExample:`"""Module Docstring."""
import os

__all__ = ["my_func"]

MY_CONST = 100

def my_func(): pass

if __name__ == "__main__":
    my_func()`},{question:"What is the purpose of defining __all__ in a custom module?",shortAnswer:"It acts as a public API whitelist defining exactly which symbols are imported when someone executes 'from module import *'.",explanation:"If __all__ = ['func_a'], only 'func_a' will be exported on wildcard imports. Internal helper functions and unlisted constants remain hidden from the consumer's namespace.",hint:"Controls the public export whitelist for wildcard imports.",level:"basic",codeExample:`__all__ = ['public_function']

def public_function(): return 'Public'
def internal_helper(): return 'Internal'`},{question:"What happens if a module does NOT define an __all__ list when 'from module import *' is used?",shortAnswer:"Python imports all names defined in the module EXCEPT those starting with a leading underscore (_).",explanation:"While omitting __all__ respects leading underscores, explicitly defining __all__ is considered best practice for professional libraries.",hint:"Imports all symbols except those starting with '_'.",level:"moderate",codeExample:`# Without __all__:
# 'func' will be exported, but '_secret' will be ignored by wildcard imports.`},{question:"What is the convention for indicating that a function or variable in a module is private and intended for internal use only?",shortAnswer:"Prefix the identifier name with a single leading underscore: e.g. _internal_database_connect().",explanation:"In Python, privacy is enforced by developer convention ('We are all consenting adults here'). Leading underscores signal to other developers and IDEs that the symbol is private.",hint:"Prefix the name with a leading underscore (_name).",level:"basic",codeExample:`def _validate_student_id(sid):
    if sid <= 0: raise ValueError('Invalid ID')`},{question:"Can another module still import a private function starting with an underscore using explicit import syntax?",shortAnswer:"Yes. Writing 'from module import _private_func' or calling 'module._private_func()' will still work.",explanation:"Python does not have hard access modifiers like private/protected in Java or C++. The underscore is an advisory convention.",hint:"Explicit imports bypass the underscore convention.",level:"basic",codeExample:"from my_module import _internal_calc  # Works, but violates intended encapsulation"},{question:"How should module-level constants be named according to PEP 8?",shortAnswer:"In UPPERCASE_WITH_UNDERSCORES: e.g. DEFAULT_GST_RATE = 0.18 or MAX_RETRIES = 5.",explanation:"Uppercase naming signals that the value is a fixed configuration constant that should not be mutated at runtime.",hint:"All uppercase letters with underscores.",level:"basic",codeExample:`STANDARD_GST_RATE = 0.18
DEFAULT_TIMEOUT_SECONDS = 30`},{question:"Why is separating an application into Configuration, Business Logic, and Presentation layers beneficial?",shortAnswer:"It achieves Single Responsibility: configuration can change without breaking algorithms, and business logic can be tested independently of CLI or UI presentation.",explanation:"Layered architecture prevents tight coupling and makes unit testing straightforward.",hint:"Enforces single responsibility and eases testing.",level:"moderate",codeExample:"# config.py (Settings) -> logic.py (Math) -> presentation.py (Formatting)"},{question:`What is the purpose of the 'if __name__ == "__main__":' block in a custom module?`,shortAnswer:"It allows the file to serve dual purposes: as an importable library module AND as a standalone executable script with self-testing demo code.",explanation:"When imported, __name__ is the module name, skipping the block; when run directly from the terminal, __name__ is '__main__', executing the block.",hint:"Executes only when the file is run directly, not when imported.",level:"basic",codeExample:`if __name__ == '__main__':
    print('Running self-tests for module...')`},{question:"How do you access the top-level docstring of a custom module programmatically?",shortAnswer:"module_name.__doc__ or help(module_name)",explanation:"Python stores the initial unassigned string literal in the module's __doc__ attribute.",hint:"Use module.__doc__ or help(module).",level:"basic",codeExample:`import math
print(math.__doc__)`},{question:"What is the recommended way to group import statements at the top of a custom module?",shortAnswer:"Three distinct blocks separated by a blank line: 1. Standard library -> 2. Related third-party -> 3. Local application/package imports.",explanation:"PEP 8 prescribes this structure to make module dependencies immediately transparent.",hint:"Standard -> Third-party -> Local modules.",level:"basic",codeExample:`import sys
import os

import requests

from . import config`},{question:"How do you provide type hints for function arguments and return types in a custom module?",shortAnswer:"def calculate_fee(base: float, discount: float = 0.0) -> dict:",explanation:"Type annotations clarify expected data types, enable static analysis in mypy, and power IDE autocompletion.",hint:"Use : type for args and -> return_type for return values.",level:"basic",codeExample:`def format_name(first: str, last: str) -> str:
    return f'{last}, {first}'`},{question:"What happens if a symbol listed in __all__ does not actually exist in the module?",shortAnswer:"An AttributeError is raised when a consumer attempts to run 'from module import *'.",explanation:"Python verifies that every identifier listed in __all__ exists in the module's namespace upon wildcard import.",hint:"Raises AttributeError on wildcard import.",level:"moderate",codeExample:`__all__ = ['non_existent_function']
# 'from my_module import *' crashes with AttributeError`},{question:"How can you prevent a custom module from executing slow initialization tasks during import?",shortAnswer:"Keep top-level module code free of heavy computations or database connections; encapsulate them inside functions or lazy initialization patterns.",explanation:"Heavy top-level execution slows down application startup for every file that imports the module.",hint:"Avoid heavy top-level work; use functions or lazy initialization.",level:"moderate",codeExample:`# BAD: db_conn = connect_slow_database()
# GOOD: def get_db_conn(): ...`},{question:"Can a custom module define its own custom Exception classes?",shortAnswer:"Yes. Defining custom exceptions inheriting from Exception creates clean, domain-specific error handling for the module.",explanation:"For example, a billing module can define FeeValidationError(Exception) for invalid payments.",hint:"Create custom subclasses of Exception: class MyError(Exception): pass.",level:"basic",codeExample:`class InvalidFeeError(Exception):
    """Raised when fee is negative."""
    pass`},{question:"What is the difference between a module and a script in Python?",shortAnswer:"A module is designed to be imported and reused by other files; a script is designed to be executed directly from the command line as an entry point.",explanation:"A well-structured file can function as both by using if __name__ == '__main__':.",hint:"Modules are imported; scripts are executed.",level:"basic",codeExample:"# Both can be unified using if __name__ == '__main__':"},{question:"How do you validate function input arguments defensively inside a custom module function?",shortAnswer:"Use explicit conditional checks raising ValueError or TypeError with informative error messages.",explanation:"Defensive validation prevents invalid data from propagating deeply into business logic.",hint:"Check conditions and raise ValueError or TypeError.",level:"basic",codeExample:`def set_discount(pct: float):
    if not (0 <= pct <= 100):
        raise ValueError(f'Discount must be 0-100%! Got: {pct}')`},{question:"What is the __file__ attribute inside a custom module?",shortAnswer:"A string containing the file path of that custom module on disk.",explanation:"Allows locating configuration files or resources relative to the module: os.path.dirname(__file__).",hint:"Contains the module file path on disk.",level:"basic",codeExample:`import os
BASE_DIR = os.path.dirname(os.path.abspath(__file__))`},{question:"Why should custom modules avoid mutating global state across functions?",shortAnswer:"Because shared mutable global state causes concurrency race conditions, unpredictable side effects, and makes unit testing fragile.",explanation:"Prefer pure functions that take inputs and return outputs without modifying global variables.",hint:"Global state leads to side effects and testing difficulties.",level:"moderate",codeExample:"# Prefer pure functions over global variable modifications"},{question:"How do you document function arguments and return types in Google/Sphinx style docstrings?",shortAnswer:"Use structured sections: Args: ... Returns: ... Raises: ...",explanation:"Structured docstrings allow automated documentation generators (like Sphinx) to generate professional HTML documentation.",hint:"Use Args:, Returns:, and Raises: docstring sections.",level:"basic",codeExample:`"""
Args:
    amount (float): The gross amount.
Returns:
    dict: Breakdown breakdown.
"""`},{question:"What is the recommended file naming convention for custom modules in Python?",shortAnswer:"Short, all-lowercase names with underscores for readability (e.g. fee_calculator.py, student_records.py).",explanation:"PEP 8 advises lowercase alphanumeric names with underscores, avoiding special characters and PascalCase for file names.",hint:"snake_case lowercase with underscores.",level:"basic",codeExample:`# Good: student_service.py
# Bad: StudentService.py, student-service.py`},{question:"Can a custom module import another custom module located in the same directory?",shortAnswer:"Yes. In Python 3, write 'import sibling_module' or 'from . import sibling_module' if part of a package.",explanation:"Because the script's directory is in sys.path, sibling modules can be imported directly.",hint:"Sibling files in the same directory can be imported directly.",level:"basic",codeExample:"# In main.py: import helper_module"},{question:"What is the danger of writing circular dependencies between two custom modules?",shortAnswer:"One module will attempt to access attributes of the other before initialization finishes, raising 'ImportError: cannot import name from partially initialized module'.",explanation:"Break cycles by creating a third common module or using function-level local imports.",hint:"Creates partially initialized module errors.",level:"moderate",codeExample:"# Refactor shared types into common.py"},{question:"How do you package and distribute a custom module for installation via pip?",shortAnswer:"Create a pyproject.toml or setup.py file defining package metadata, entry points, and dependencies, then build with 'python -m build'.",explanation:"Packaging standardizes custom modules for local development ('pip install -e .') and PyPI distribution.",hint:"Use pyproject.toml with build tools.",level:"moderate",codeExample:`# [project]
# name = 'my_toolkit'
# version = '1.0.0'`},{question:"What is the role of the __version__ attribute in a custom module?",shortAnswer:"A string constant specifying the semantic version of the module (e.g. __version__ = '2.4.0').",explanation:"Allows users and diagnostic tools to programmatically check which version of your module is running in production.",hint:"Defines the semantic version string of the module.",level:"basic",codeExample:"__version__ = '2.4.0'"}];function L(){const o=s.useRef([]),[r,i]=s.useState("pep8layout"),[d,_]=s.useState(!0),[c,x]=s.useState(!0),[m,f]=s.useState(!1);s.useEffect(()=>{const t=new IntersectionObserver(a=>{a.forEach(p=>{p.isIntersecting&&p.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return o.current.forEach(a=>{a&&t.observe(a)}),()=>t.disconnect()},[]);const n=t=>{t&&!o.current.includes(t)&&o.current.push(t)},u=()=>{const t=[];return d&&t.push('"calculate_fee"'),c&&t.push('"generate_receipt"'),m&&t.push('"_private_db_sync"'),t};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:n,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 2 • Module 002_009"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 3"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Modules, Packages & Python Standard Library"})]}),e.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:"Creating & Structuring Custom User-Defined Modules"}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Design clean, reusable, production-ready Python modules: canonical PEP 8 layouts, public API whitelisting with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"__all__"}),", private symbol encapsulation with leading underscores (",e.jsx("code",{className:"text-purple-300 font-mono",children:"_helper"}),"), layered separation of concerns, and self-testing module execution guards."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📐 Canonical PEP 8 Module Layout"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Public Whitelisting with __all__"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔒 Private Helper Encapsulation (_name)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🏗️ Decoupled Multi-Module Architecture"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧱"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Anatomy of an Enterprise Python Custom Module"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["A Python module is more than just code inside a ",e.jsx("code",{className:"text-teal-400 font-mono",children:".py"})," file. Professional modules follow a standardized architectural structure that maximizes readability, safety, and reusability:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg shadow-teal-950/30",children:[e.jsxs("div",{className:"flex items-center gap-2 text-teal-400 font-bold text-base mb-1",children:[e.jsx("span",{children:"1️⃣"})," Module Metadata & Docs"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Comprehensive docstring at line 1 (",e.jsx("code",{className:"text-teal-300",children:"__doc__"}),"), version, and author metadata."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg shadow-cyan-950/30",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base mb-1",children:[e.jsx("span",{children:"2️⃣"})," Public Whitelist (__all__)"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Defines the explicit public contract for consumers using ",e.jsx("code",{className:"text-cyan-300",children:"__all__ = [...]"}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg shadow-purple-950/30",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base mb-1",children:[e.jsx("span",{children:"3️⃣"})," Main Guard Self-Tests"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Provides standalone test and demo execution via ",e.jsx("code",{className:"text-purple-300",children:"if __name__ == '__main__':"}),"."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Consenting Adults Encapsulation Principle"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Python does not have ",e.jsx("code",{className:"text-rose-400 font-mono",children:"private"})," keywords like Java or C++. Instead, Python uses the leading underscore convention (",e.jsx("code",{className:"text-teal-300 font-mono",children:"_internal_helper"}),"). It signals: ",e.jsx("em",{children:'"This is an implementation detail subject to change — do not call this directly outside the module."'})]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Module Structure & Export Control"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>i("pep8layout"),className:l("px-3 py-1.5 rounded-lg transition-all",r==="pep8layout"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Canonical PEP 8 Layout"}),e.jsx("button",{onClick:()=>i("allwhitelist"),className:l("px-3 py-1.5 rounded-lg transition-all",r==="allwhitelist"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"__all__ Whitelist Filter"}),e.jsx("button",{onClick:()=>i("layered"),className:l("px-3 py-1.5 rounded-lg transition-all",r==="layered"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Layered Architecture"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining standard module layouts, public export filtering, and multi-file separation of concerns:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:r==="pep8layout"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"CANONICAL PEP 8 MODULE LAYOUT (Top-to-Bottom Order)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"810",height:"35",rx:"6",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"22",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:'1. Module Docstring ("""...""") & Semantic Versioning'}),e.jsx("rect",{x:"0",y:"45",width:"810",height:"35",rx:"6",fill:"#1e293b",stroke:"#38bdf8"}),e.jsx("text",{x:"20",y:"67",fill:"#bae6fd",fontSize:"12",fontWeight:"bold",children:"2. Grouped Imports (Standard Library → Third-Party → Local Modules)"}),e.jsx("rect",{x:"0",y:"90",width:"810",height:"35",rx:"6",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"20",y:"112",fill:"#a5f3fc",fontSize:"12",fontWeight:"bold",children:'3. Public Export Whitelist: __all__ = ["ClassA", "function_b"]'}),e.jsx("rect",{x:"0",y:"135",width:"810",height:"35",rx:"6",fill:"#1e1b4b",stroke:"#818cf8"}),e.jsx("text",{x:"20",y:"157",fill:"#c7d2fe",fontSize:"12",fontWeight:"bold",children:"4. Module Constants (UPPERCASE_WITH_UNDERSCORES)"}),e.jsx("rect",{x:"0",y:"180",width:"810",height:"45",rx:"6",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"202",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"5. Classes, Public Functions & Private Internal Helpers (_helper)"}),e.jsx("rect",{x:"0",y:"235",width:"810",height:"35",rx:"6",fill:"#312e81",stroke:"#6366f1"}),e.jsx("text",{x:"20",y:"257",fill:"#e0e7ff",fontSize:"12",fontWeight:"bold",children:"6. Execution Guard: if __name__ == '__main__': (Self-Testing / CLI Entry)"})]})]}):r==="allwhitelist"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"HOW __all__ CONTROLS WILDCARD IMPORTS (from module import *)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#1e293b",stroke:"#475569"}),e.jsx("text",{x:"20",y:"30",fill:"#f8fafc",fontSize:"13",fontWeight:"bold",children:"Module Source: fee_manager.py"}),e.jsx("text",{x:"20",y:"60",fill:"#34d399",fontSize:"12 font-mono",children:"def calculate_fee(): ..."}),e.jsx("text",{x:"20",y:"85",fill:"#34d399",fontSize:"12 font-mono",children:"def generate_receipt(): ..."}),e.jsx("text",{x:"20",y:"110",fill:"#f43f5e",fontSize:"12 font-mono",children:"def _internal_db_sync(): ..."}),e.jsx("text",{x:"20",y:"135",fill:"#94a3b8",fontSize:"12 font-mono",children:"def helper_unlisted(): ..."}),e.jsx("text",{x:"20",y:"170",fill:"#38bdf8",fontSize:"12 font-mono",children:"__all__ = ['calculate_fee', 'generate_receipt']"})]}),e.jsxs("g",{transform:"translate(450, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"Consumer: from fee_manager import *"}),e.jsxs("text",{x:"20",y:"70",fill:"#ecfdf5",fontSize:"12",children:["✓ ",e.jsx("tspan",{fill:"#34d399",fontWeight:"bold",children:"calculate_fee"})," is imported into namespace"]}),e.jsxs("text",{x:"20",y:"100",fill:"#ecfdf5",fontSize:"12",children:["✓ ",e.jsx("tspan",{fill:"#34d399",fontWeight:"bold",children:"generate_receipt"})," is imported into namespace"]}),e.jsxs("text",{x:"20",y:"140",fill:"#fca5a5",fontSize:"12",children:["✗ ",e.jsx("tspan",{fill:"#f43f5e",children:"_internal_db_sync"})," is HIDDEN (Excluded)"]}),e.jsxs("text",{x:"20",y:"170",fill:"#fca5a5",fontSize:"12",children:["✗ ",e.jsx("tspan",{fill:"#f43f5e",children:"helper_unlisted"})," is HIDDEN (Not in __all__)"]})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"MULTI-MODULE LAYERED SEPARATION OF CONCERNS"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"13",fontWeight:"bold",children:"1. Config Layer (config.py)"}),e.jsx("text",{x:"20",y:"60",fill:"#cbd5e1",fontSize:"11",children:"• Constants & Rates"}),e.jsx("text",{x:"20",y:"80",fill:"#cbd5e1",fontSize:"11",children:"• Environment Variables"}),e.jsx("text",{x:"20",y:"100",fill:"#cbd5e1",fontSize:"11",children:"• No business logic!"}),e.jsx("rect",{x:"20",y:"180",width:"210",height:"40",rx:"4",fill:"#090d16",stroke:"#475569"}),e.jsx("text",{x:"30",y:"205",fill:"#34d399",fontSize:"11 font-mono",children:"GST_RATE = 0.18"}),e.jsx("rect",{x:"280",y:"0",width:"250",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"300",y:"30",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"2. Logic Layer (logic.py)"}),e.jsx("text",{x:"300",y:"60",fill:"#ecfdf5",fontSize:"11",children:"• Pure calculation functions"}),e.jsx("text",{x:"300",y:"80",fill:"#ecfdf5",fontSize:"11",children:"• Algorithms & Validation"}),e.jsx("text",{x:"300",y:"100",fill:"#ecfdf5",fontSize:"11",children:"• Zero print() calls"}),e.jsx("rect",{x:"300",y:"180",width:"210",height:"40",rx:"4",fill:"#090d16",stroke:"#475569"}),e.jsx("text",{x:"310",y:"205",fill:"#34d399",fontSize:"11 font-mono",children:"def calculate_tax(): ..."}),e.jsx("rect",{x:"560",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"580",y:"30",fill:"#a5f3fc",fontSize:"13",fontWeight:"bold",children:"3. Formatter Layer (ui.py)"}),e.jsx("text",{x:"580",y:"60",fill:"#ecfdf5",fontSize:"11",children:"• ASCII Receipt formatting"}),e.jsx("text",{x:"580",y:"80",fill:"#ecfdf5",fontSize:"11",children:"• HTML/JSON Exporters"}),e.jsx("text",{x:"580",y:"100",fill:"#ecfdf5",fontSize:"11",children:"• CLI output rendering"}),e.jsx("rect",{x:"580",y:"180",width:"210",height:"40",rx:"4",fill:"#090d16",stroke:"#475569"}),e.jsx("text",{x:"590",y:"205",fill:"#34d399",fontSize:"11 font-mono",children:"def print_receipt(): ..."})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🛠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Custom Module Architect & Whitelist Simulator"})]}),e.jsxs("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:["Toggle which functions are included in the module's public ",e.jsx("code",{className:"text-teal-400 font-mono",children:"__all__"})," export whitelist and inspect live generated code:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800 mb-8",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 block font-bold",children:"Configure Public API Whitelist (__all__)"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("label",{className:"flex items-center gap-3 p-3 rounded-lg bg-slate-900 border border-slate-800 cursor-pointer hover:border-slate-700",children:[e.jsx("input",{type:"checkbox",checked:d,onChange:t=>_(t.target.checked),className:"rounded border-slate-700 text-teal-500 focus:ring-0"}),e.jsxs("div",{children:[e.jsx("code",{className:"text-xs font-mono text-emerald-300 font-bold block",children:"calculate_fee"}),e.jsx("span",{className:"text-[11px] text-slate-400",children:"Public business logic function"})]})]}),e.jsxs("label",{className:"flex items-center gap-3 p-3 rounded-lg bg-slate-900 border border-slate-800 cursor-pointer hover:border-slate-700",children:[e.jsx("input",{type:"checkbox",checked:c,onChange:t=>x(t.target.checked),className:"rounded border-slate-700 text-teal-500 focus:ring-0"}),e.jsxs("div",{children:[e.jsx("code",{className:"text-xs font-mono text-emerald-300 font-bold block",children:"generate_receipt"}),e.jsx("span",{className:"text-[11px] text-slate-400",children:"Public receipt formatting helper"})]})]}),e.jsxs("label",{className:"flex items-center gap-3 p-3 rounded-lg bg-slate-900 border border-slate-800 cursor-pointer hover:border-slate-700",children:[e.jsx("input",{type:"checkbox",checked:m,onChange:t=>f(t.target.checked),className:"rounded border-slate-700 text-teal-500 focus:ring-0"}),e.jsxs("div",{children:[e.jsx("code",{className:"text-xs font-mono text-rose-400 font-bold block",children:"_private_db_sync"}),e.jsx("span",{className:"text-[11px] text-slate-400",children:"Internal helper (Anti-pattern to export in __all__)"})]})]})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs font-mono text-slate-300",children:[e.jsx("span",{className:"text-teal-400 font-bold block mb-1",children:"Active __all__ Whitelist:"}),e.jsxs("code",{children:["__all__ = [",u().join(", "),"]"]})]})]}),e.jsxs("div",{className:"space-y-2 flex flex-col justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block",children:"Generated Custom Module (fee_manager.py)"}),e.jsx("pre",{className:"p-4 bg-slate-900 rounded-lg border border-slate-800 text-teal-300 font-mono text-xs overflow-x-auto whitespace-pre-wrap flex-1 max-h-72",children:`"""Fee Manager Module for Coder & AccoTax."""

import sys
import datetime as dt

__all__ = [${u().join(", ")}]

GST_RATE: float = 0.18

def calculate_fee(base: float) -> float:
    return base * (1 + GST_RATE)

def generate_receipt(student: str, fee: float) -> str:
    return f"Receipt: {student} -> INR {fee:,.2f}"

def _private_db_sync() -> None:
    pass

if __name__ == "__main__":
    print("Self-testing fee_manager module...")
`})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Custom Module Design Guidelines Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Element"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Naming / Syntax Convention"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"PEP 8 Placement"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Purpose & Best Practice"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"Module Docstring"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:'"""Module summary."""'}),e.jsx("td",{className:"py-3 px-4",children:"Line 1 of file"}),e.jsx("td",{className:"py-3 px-4",children:"Explains module purpose, author, version, and license"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"Import Section"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"import stdlib; import 3rd; from . import"}),e.jsx("td",{className:"py-3 px-4",children:"After docstring"}),e.jsx("td",{className:"py-3 px-4",children:"Grouped into 3 distinct blocks separated by blank lines"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-blue-300 font-semibold",children:"Public Whitelist"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:'__all__ = ["func1", "ClassA"]'}),e.jsx("td",{className:"py-3 px-4",children:"After imports"}),e.jsx("td",{className:"py-3 px-4",children:"Restricts symbols exported on wildcard imports"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Constants"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"GST_RATE, MAX_RETRIES"}),e.jsx("td",{className:"py-3 px-4",children:"After __all__"}),e.jsx("td",{className:"py-3 px-4",children:"Configuration constants in uppercase with underscores"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-300 font-semibold",children:"Private Helpers"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"_validate_amount(x)"}),e.jsx("td",{className:"py-3 px-4",children:"Alongside public logic"}),e.jsx("td",{className:"py-3 px-4",children:"Leading underscore signals internal implementation details"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"Execution Guard"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"if __name__ == '__main__':"}),e.jsx("td",{className:"py-3 px-4",children:"Bottom of file"}),e.jsx("td",{className:"py-3 px-4",children:"Self-testing code that runs only when executed directly"})]})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating canonical module layout, __all__ export control, multi-module separation of concerns, and student fee managers:"}),e.jsx(h,{files:[{filename:"custom_module_anatomy.py",code:w,description:"Canonical PEP-8 module structure: docstrings, __all__ whitelist, constants, private helpers, and self-testing guard."},{filename:"export_control_with_all.py",code:j,description:"How __all__ restricts wildcard exports and encapsulates private internal functions."},{filename:"multi_module_import_demo.py",code:v,description:"Layered multi-module architecture: config layer, business logic layer, and presentation orchestration."},{filename:"student_fee_management_module.py",code:N,description:"Production student fee calculation and ASCII receipt generator module with type annotations."}]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Executable Code Outside Functions"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"print()"})," or database queries at the top level of a module causes them to execute immediately whenever another file imports it!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Wrap demo executions inside ",e.jsx("code",{className:"text-emerald-300",children:"if __name__ == '__main__':"})]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Typo in `__all__` Identifier Strings"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["If you misspell a function name in ",e.jsx("code",{className:"text-amber-300 font-mono",children:'__all__ = ["calc_feee"]'}),", Python crashes with ",e.jsx("code",{className:"text-rose-400 font-mono",children:"AttributeError"})," when imported with wildcard!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Tip:"})," Ensure strings in ",e.jsx("code",{className:"text-emerald-300",children:"__all__"})," match actual function and class names exactly."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Heavy I/O at Module Top Level"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Opening heavy files or connecting to network sockets at the module level slows down test suites and crashes scripts if the resource is temporarily offline."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use lazy initialization functions or factories."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Mutating Shared Module-Level Variables"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Modifying a module variable from another file creates hidden coupling and unpredictable concurrency bugs across your application."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Pass state explicitly via function arguments or object instances."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering custom module architecture, __all__ whitelisting, private helper conventions, and multi-module design:"}),e.jsx(g,{questions:T})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with PEP 8 module layouts, __all__ rules, and layered architecture diagrams:"}),e.jsx("div",{className:"mb-10",children:e.jsx(b,{content:E,filename:"python_topic3_custom_user_defined_modules_notes.txt",title:"Print Topic 3 Study Notes"})}),e.jsx(y,{})]})]})]})}export{L as default};
