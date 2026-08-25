import{b as a,j as e,bg as o}from"./vendor-react-core-Doz9nIC6.js";import{P as h}from"./PythonFileLoader-hCi5osN-.js";import{P as u}from"./PlainTextPrint-C08xhKA4.js";import{F as f}from"./FAQTemplate-CkSqDH4B.js";import{T as y}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const b=`# topic0_files/import_syntax_variations.py\r
# Module: 002_009_modules-packages\r
# Topic: import & from-import syntax variations\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 0 - File 1: Python Import Syntax Variations & Namespace Isolation\r
Demonstrates:\r
  1. Direct module import: import module_name\r
  2. Module aliasing: import module_name as alias\r
  3. Specific symbol import: from module import symbol1, symbol2\r
  4. Symbol aliasing: from module import symbol as alias\r
  5. The Wildcard Import Anti-Pattern: from module import * (Namespace pollution)\r
"""\r
\r
# 1. Direct Module Import (Cleanest & Most Explicit)\r
import math\r
\r
# 2. Module Aliasing (Standard in Data Science: np, pd, plt)\r
import datetime as dt\r
\r
# 3. Specific Symbol Import (Direct access without module prefix)\r
from decimal import Decimal, ROUND_HALF_UP\r
\r
# 4. Symbol Aliasing (Resolves local name collisions)\r
from statistics import mean as calculate_average\r
\r
\r
def demonstrate_import_syntaxes():\r
    print("=" * 65)\r
    print("1. DIRECT MODULE IMPORT (import math)")\r
    print("=" * 65)\r
\r
    # Qualified access via namespace prefix: math.<symbol>\r
    radius = 7.0\r
    area = math.pi * (radius ** 2)\r
    print(f"math.pi             : {math.pi}")\r
    print(f"math.sqrt(144)      : {math.sqrt(144)}")\r
    print(f"Calculated Area     : {area:.2f} sq.units\\n")\r
\r
\r
def demonstrate_aliased_import():\r
    print("=" * 65)\r
    print("2. MODULE ALIASING (import datetime as dt)")\r
    print("=" * 65)\r
\r
    # Qualified access via compact alias: dt.<symbol>\r
    current_time = dt.datetime(2026, 8, 24, 18, 30, 0)\r
    today = dt.date(2026, 8, 24)\r
    print(f"dt.datetime.now()   : {current_time:%d-%b-%Y %I:%M %p}")\r
    print(f"dt.date.today()     : {today}\\n")\r
\r
\r
def demonstrate_specific_symbol_import():\r
    print("=" * 65)\r
    print("3. SPECIFIC SYMBOL IMPORT & ALIASING (from ... import ...)")\r
    print("=" * 65)\r
\r
    # Direct access to Decimal without decimal. prefix\r
    course_fee = Decimal("4500.555")\r
    rounded_fee = course_fee.quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)\r
    print(f"Exact Decimal Fee   : INR {rounded_fee} (Zero Floating-point drift)")\r
\r
    # Aliased function call\r
    scores = [95, 88, 92, 96, 90]\r
    avg_score = calculate_average(scores)\r
    print(f"calculate_average() : {avg_score:.1f}%\\n")\r
\r
\r
def demonstrate_wildcard_import_danger():\r
    print("=" * 65)\r
    print("4. THE WILDCARD IMPORT ANTI-PATTERN (from module import *)")\r
    print("=" * 65)\r
    print("""\r
Why 'from module import *' is DANGEROUS in Production:\r
  1. Namespace Pollution: Floods the local namespace with hundreds of symbols.\r
  2. Silent Shadowing: If module_a and module_b both define 'connect()',\r
     the second wildcard import silently overwrites the first without warning!\r
  3. Code Opacity: Linters, IDEs, and code reviewers cannot trace where a function\r
     originated (e.g. is 'pi' coming from math, numpy, or a custom file?).\r
  4. Tooling Breakdown: Autocomplete and static analysis tools become sluggish.\r
""")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_import_syntaxes()\r
    demonstrate_aliased_import()\r
    demonstrate_specific_symbol_import()\r
    demonstrate_wildcard_import_danger()\r
`,_=`# topic0_files/import_internals_and_bytecode.py\r
# Module: 002_009_modules-packages\r
# Topic: import & from-import syntax variations\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 0 - File 2: Python Import Execution Lifecycle & Bytecode Compilation\r
Demonstrates:\r
  1. The 4-step import lifecycle (sys.modules -> sys.path -> __pycache__ -> exec)\r
  2. Inspecting loaded modules in sys.modules cache\r
  3. Dynamic programmatic imports using importlib.import_module()\r
  4. Module reloading at runtime using importlib.reload()\r
"""\r
\r
import sys\r
import importlib\r
import math\r
\r
def explain_import_lifecycle():\r
    print("=" * 65)\r
    print("1. THE 4-STEP CPYTHON IMPORT LIFECYCLE")\r
    print("=" * 65)\r
    print("""\r
When you execute \`import my_module\`, Python executes 4 sequential steps:\r
\r
  Step 1: Cache Inspection (sys.modules)\r
    Checks the global dictionary \`sys.modules\`. If \`my_module\` is already loaded,\r
    it returns the cached reference immediately (zero disk I/O, lightning fast).\r
\r
  Step 2: Finder Search (sys.path)\r
    If not cached, Python's import finders search the directories listed in \`sys.path\`\r
    (current working directory, PYTHONPATH, standard library, and site-packages).\r
\r
  Step 3: Loader & Bytecode Compilation (__pycache__)\r
    Compiles the \`.py\` source into Python bytecode (\`.pyc\`) stored in \`__pycache__/\`.\r
    If the \`.pyc\` exists and has a timestamp newer than the \`.py\` file, it skips compilation.\r
\r
  Step 4: Module Execution & Namespace Binding\r
    Creates a new empty module object, executes all top-level statements in that\r
    module's namespace, registers it in \`sys.modules\`, and binds the name locally.\r
""")\r
\r
\r
def inspect_sys_modules_cache():\r
    print("=" * 65)\r
    print("2. INSPECTING sys.modules IN-MEMORY CACHE")\r
    print("=" * 65)\r
\r
    print(f"Total Loaded Modules in Cache : {len(sys.modules)}")\r
    print(f"Is 'math' in sys.modules?     : {'math' in sys.modules}")\r
    print(f"Is 'json' in sys.modules?     : {'json' in sys.modules}\\n")\r
\r
    # Accessing module object from cache\r
    cached_math = sys.modules["math"]\r
    print(f"Module Object from Cache      : {cached_math}")\r
    print(f"cached_math.sqrt(64)          : {cached_math.sqrt(64)}")\r
\r
\r
def demonstrate_dynamic_import():\r
    print("\\n" + "=" * 65)\r
    print("3. DYNAMIC PROGRAMMATIC IMPORTS (importlib.import_module)")\r
    print("=" * 65)\r
\r
    # Useful for plugin architectures or loading modules based on config strings\r
    module_name = "json"\r
    dynamic_mod = importlib.import_module(module_name)\r
\r
    sample_dict = {"course": "Python Pro", "institute": "Coder & AccoTax", "center": "Barrackpore"}\r
    json_str = dynamic_mod.dumps(sample_dict, indent=2)\r
\r
    print(f"Dynamically Loaded Module     : {dynamic_mod.__name__}")\r
    print(f"Executed json.dumps() Output  :\\n{json_str}")\r
\r
\r
if __name__ == "__main__":\r
    explain_import_lifecycle()\r
    inspect_sys_modules_cache()\r
    demonstrate_dynamic_import()\r
`,g=`# topic0_files/circular_imports_and_resolution.py\r
# Module: 002_009_modules-packages\r
# Topic: import & from-import syntax variations\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 0 - File 3: Circular Imports, Anatomy of Dependency Cycles & Solutions\r
Demonstrates:\r
  1. Why circular imports occur (Mutual top-level dependencies)\r
  2. The classic error: ImportError: cannot import name 'X' from partially initialized module\r
  3. Solution 1: Function-level deferred / lazy imports\r
  4. Solution 2: Extracting shared entities into a common base module\r
  5. Solution 3: Module-level import instead of symbol-level import\r
"""\r
\r
def explain_circular_import_cycle():\r
    print("=" * 65)\r
    print("1. ANATOMY OF A CIRCULAR IMPORT CYCLE")\r
    print("=" * 65)\r
    print("""\r
Scenario:\r
  File \`student_service.py\`:\r
    from course_service import get_course_details\r
    def enroll_student(student_id, course_id):\r
        ...\r
\r
  File \`course_service.py\`:\r
    from student_service import get_student_profile\r
    def get_course_details(course_id):\r
        ...\r
\r
What Happens:\r
  1. Python begins executing \`student_service.py\`.\r
  2. Hits line 1: \`from course_service import get_course_details\`.\r
  3. Pauses \`student_service.py\` (it is partially initialized) and jumps to \`course_service.py\`.\r
  4. In \`course_service.py\`, hits line 1: \`from student_service import get_student_profile\`.\r
  5. Jumps to \`student_service.py\`, but finds it is already being initialized in \`sys.modules\`!\r
  6. Attempts to look up \`get_student_profile\`, which has NOT been defined yet!\r
  7. CRASH: ImportError: cannot import name 'get_student_profile' from partially initialized module!\r
""")\r
\r
\r
def demonstrate_solution_deferred_import():\r
    print("=" * 65)\r
    print("2. SOLUTION 1: FUNCTION-LEVEL DEFERRED / LAZY IMPORT")\r
    print("=" * 65)\r
\r
    def generate_student_receipt(student_id: int, course_name: str) -> str:\r
        # Import placed INSIDE function body: executes ONLY when the function is called!\r
        # By the time this runs, all modules in the project are fully initialized in sys.modules.\r
        import datetime as dt\r
        \r
        timestamp = f"{dt.datetime(2026, 8, 24, 18, 30):%d-%b-%Y}"\r
        return f"Receipt #{student_id:06d} for '{course_name}' generated on {timestamp}."\r
\r
    result = generate_student_receipt(101, "Python Pro")\r
    print("Deferred Import Execution:")\r
    print(f"  {result}\\n")\r
\r
\r
def demonstrate_solution_refactoring_common():\r
    print("=" * 65)\r
    print("3. SOLUTION 2: EXTRACTING SHARED TYPES (BEST PRACTICE)")\r
    print("=" * 65)\r
    print("""\r
Architecture Best Practice:\r
  Instead of A importing B and B importing A:\r
    - Create \`models.py\` or \`common.py\`.\r
    - Place shared DataClasses, Enums, and Constants in \`models.py\`.\r
    - Both \`student_service.py\` and \`course_service.py\` import from \`models.py\`.\r
    - The circular cycle is completely broken into a clean Directed Acyclic Graph (DAG)!\r
""")\r
\r
\r
if __name__ == "__main__":\r
    explain_circular_import_cycle()\r
    demonstrate_solution_deferred_import()\r
    demonstrate_solution_refactoring_common()\r
`,j=`# topic0_files/financial_toolkit_importer.py\r
# Module: 002_009_modules-packages\r
# Topic: import & from-import syntax variations\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 0 - File 4: Production Financial Toolkit & Tax Assessor\r
Demonstrates:\r
  1. Clean, PEP-8 compliant import organization\r
  2. Standard library aliasing (import datetime as dt)\r
  3. High-precision arithmetic via 'from decimal import Decimal, ROUND_HALF_UP'\r
  4. Explicit function aliasing ('from math import ceil as round_up')\r
  5. Generating professional financial assessment reports\r
"""\r
\r
# Standard Library Imports (Group 1: Core Utilities)\r
import sys\r
from typing import List, Dict, Any, Tuple\r
\r
# Standard Library Imports (Group 2: Math & Arithmetic)\r
from math import ceil as round_up\r
from decimal import Decimal, ROUND_HALF_UP\r
\r
# Standard Library Imports (Group 3: Time & Logging)\r
import datetime as dt\r
\r
class FinancialToolkit:\r
    """Production tax and financial assessment engine with exact Decimal precision."""\r
\r
    GST_RATE = Decimal("0.18")       # 18% GST standard\r
    EARLY_BIRD_DISCOUNT = Decimal("0.10") # 10% discount\r
\r
    @classmethod\r
    def calculate_assessment(\r
        cls,\r
        base_fee_inr: float,\r
        installments: int = 3\r
    ) -> Dict[str, Any]:\r
        # Convert float to Decimal for currency safety\r
        base_dec = Decimal(str(base_fee_inr))\r
        discount_dec = (base_dec * cls.EARLY_BIRD_DISCOUNT).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)\r
        taxable_dec = base_dec - discount_dec\r
        gst_dec = (taxable_dec * cls.GST_RATE).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)\r
        net_total = taxable_dec + gst_dec\r
\r
        # Calculate monthly installment\r
        installment_val = (net_total / Decimal(installments)).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)\r
\r
        return {\r
            "gross_fee": base_dec,\r
            "discount": discount_dec,\r
            "taxable_amount": taxable_dec,\r
            "gst_amount": gst_dec,\r
            "net_payable": net_total,\r
            "installments_count": installments,\r
            "monthly_installment": installment_val,\r
            "rounded_up_total": round_up(float(net_total)),\r
            "assessed_on": dt.datetime(2026, 8, 24, 18, 30, 0)\r
        }\r
\r
\r
def run_financial_demo():\r
    print("=" * 75)\r
    print("CODER & ACCOTAX - MODULAR FINANCIAL ASSESSMENT REPORT")\r
    print("=" * 75)\r
\r
    course_fee = 13500.00\r
    report = FinancialToolkit.calculate_assessment(course_fee, installments=3)\r
\r
    date_str = f"{report['assessed_on']:%d-%b-%Y %I:%M %p}"\r
    print(f"Assessment Timestamp : {date_str}")\r
    print(f"Python Platform      : {sys.platform} (CPython {sys.version.split()[0]})\\n")\r
\r
    print(f"Gross Course Fee     : INR {report['gross_fee']:>10.2f}")\r
    print(f"Special Discount     : -INR {report['discount']:>9.2f} (10% Early Bird)")\r
    print(f"Taxable Subtotal     : INR {report['taxable_amount']:>10.2f}")\r
    print(f"GST Assessment (18%) : +INR {report['gst_amount']:>9.2f}")\r
    print("-" * 45)\r
    print(f"NET PAYABLE TOTAL    : INR {report['net_payable']:>10.2f}")\r
    print("-" * 45)\r
    print(f"Monthly EMI (3 Months): INR {report['monthly_installment']:>10.2f} / month")\r
    print(f"Ceil Rounded Total   : INR {report['rounded_up_total']:>10}")\r
\r
\r
if __name__ == "__main__":\r
    run_financial_demo()\r
`,N=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
            PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_009: MODULES & PACKAGES\r
        TOPIC 0: IMPORT & FROM-IMPORT SYNTAX VARIATIONS & NAMESPACE ARCHITECTURE\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. IMPORT SYNTAX VARIATIONS CHEAT SHEET\r
--------------------------------------------------------------------------------\r
  Syntax Pattern               Access Syntax        Pros & Cons\r
  ------------------------------------------------------------------------------\r
  import math                  math.sqrt(16)        Clean, explicit, no collisions.\r
  import datetime as dt        dt.date.today()      Compact alias, namespace intact.\r
  from math import sqrt, pi    sqrt(16), pi         Direct access; potential collision.\r
  from math import sqrt as sq  sq(16)               Direct access + prevents collision.\r
  from math import *           sqrt(16), sin(0)     ANTI-PATTERN: Pollutes namespace!\r
\r
--------------------------------------------------------------------------------\r
2. WHY WILDCARD IMPORTS (from module import *) ARE DANGEROUS\r
--------------------------------------------------------------------------------\r
  1. Namespace Pollution: Floods current scope with hundreds of hidden symbols.\r
  2. Silent Shadowing: If two modules define 'connect()', the second wildcard\r
     silently overwrites the first without warning.\r
  3. Traceability: Makes code reviews difficult — cannot tell where a function lives.\r
  4. Tooling Degradation: Breaks IDE autocompletion and static linting.\r
\r
--------------------------------------------------------------------------------\r
3. THE 4-STEP CPYTHON IMPORT LIFECYCLE\r
--------------------------------------------------------------------------------\r
  Step 1: Check in-memory cache in sys.modules. If cached, return immediately.\r
  Step 2: Search directories listed in sys.path (cwd, PYTHONPATH, stdlib, site-packages).\r
  Step 3: Compile source .py into bytecode (.pyc) inside __pycache__/ directory.\r
  Step 4: Execute module top-level code in a new namespace and bind name locally.\r
\r
--------------------------------------------------------------------------------\r
4. RESOLVING CIRCULAR IMPORT CYCLES\r
--------------------------------------------------------------------------------\r
  Error:\r
    ImportError: cannot import name 'X' from partially initialized module\r
\r
  Proven Solutions:\r
  1. Deferred / Local Import: Move 'import X' inside the specific function body.\r
  2. Architectural Refactoring (Best Practice): Extract shared types and models\r
     into a separate 'models.py' or 'common.py' to form a clean DAG.\r
  3. Module-Level Import: Use 'import module_b' and call 'module_b.func()' instead\r
     of 'from module_b import func'.\r
\r
================================================================================\r
        END OF STUDY NOTE • TOPIC 0: IMPORT SYNTAX & NAMESPACES IN PYTHON\r
================================================================================\r
`,v=[{question:"What is the difference between 'import math' and 'from math import sqrt' in Python?",shortAnswer:"'import math' imports the entire module object requiring 'math.sqrt()' to access functions; 'from math import sqrt' binds 'sqrt' directly into the current namespace.",explanation:"'import math' maintains a clear namespace boundary preventing naming collisions. 'from math import sqrt' allows calling 'sqrt()' directly without the 'math.' prefix.",hint:"'import math' requires prefix; 'from math import sqrt' gives direct access.",level:"basic",codeExample:`import math
print(math.sqrt(16))  # 4.0

from math import sqrt
print(sqrt(16))       # 4.0`},{question:"Why is 'from module import *' (wildcard import) considered a serious anti-pattern in production Python code?",shortAnswer:"It causes namespace pollution, silent variable shadowing, degrades code readability, and confuses static analysis linters and IDEs.",explanation:"If two modules both define a function with the same name, the second wildcard import silently overwrites the first. Additionally, it becomes impossible for developers to determine where a function originated.",hint:"Pollutes the namespace and silently shadows variables.",level:"basic",codeExample:`# BAD (Wildcard):
from math import *
# GOOD (Explicit):
from math import pi, sqrt`},{question:"What does the 'as' keyword do during an import?",shortAnswer:"It assigns a custom local alias to the imported module or symbol: e.g. 'import datetime as dt' or 'from math import sqrt as square_root'.",explanation:"Aliasing is standard practice for shortening long module names (e.g. np, pd, plt) or resolving naming collisions between local variables and imported functions.",hint:"'as' creates a local alias name.",level:"basic",codeExample:`import datetime as dt
print(dt.date.today())`},{question:"What is the 4-step lifecycle Python executes when an 'import my_module' statement runs?",shortAnswer:"1. Checks sys.modules in-memory cache -> 2. Searches sys.path directories -> 3. Compiles source into bytecode (.pyc in __pycache__/) -> 4. Executes module code in a new namespace.",explanation:"If the module is already present in sys.modules, Python immediately returns the cached module object without searching disk or recompiling.",hint:"Cache check -> path search -> bytecode compilation -> execution.",level:"moderate",codeExample:`import sys
# Check if math is cached:
print('math' in sys.modules)  # True`},{question:"What is the global sys.modules dictionary in Python?",shortAnswer:"It is an in-memory cache mapping loaded module name strings to their corresponding module objects.",explanation:"Whenever any module is imported anywhere in the application, Python registers it in sys.modules to guarantee that each module is executed only once per process.",hint:"The internal runtime cache of all imported modules.",level:"moderate",codeExample:`import sys, math
print(sys.modules['math'] is math)  # True`},{question:"What are .pyc files and why does Python create a __pycache__ directory?",shortAnswer:".pyc files contain compiled CPython bytecode; __pycache__ stores them to accelerate startup times by skipping the parsing phase on subsequent runs.",explanation:"If the source .py file hasn't changed since the .pyc file was generated, Python loads the bytecode directly, drastically reducing import latency.",hint:"Stores pre-compiled bytecode to speed up program startup.",level:"basic",codeExample:"# Automatically managed by CPython interpreter in __pycache__/"},{question:"How can you dynamically import a module whose name is stored in a string variable at runtime?",shortAnswer:"Use importlib.import_module(module_name_string)",explanation:"The standard library 'importlib' provides programmatic import tools ideal for plugin architectures and configuration-driven loading.",hint:"Use importlib.import_module('module_name').",level:"moderate",codeExample:`import importlib
mod_name = 'json'
json_lib = importlib.import_module(mod_name)
print(json_lib.dumps({'status': 'ok'}))`},{question:"What is a Circular Import in Python and why does it cause an ImportError?",shortAnswer:"When module A imports module B, and module B simultaneously imports module A at top-level, creating a circular dependency cycle where attributes are referenced before initialization.",explanation:"Python pauses module A midway to initialize module B. When module B attempts to import a symbol from module A that hasn't executed yet, Python raises 'ImportError: cannot import name from partially initialized module'.",hint:"Mutual top-level import dependency creates an uninitialized cycle.",level:"moderate",codeExample:`# module_a.py: from module_b import func_b
# module_b.py: from module_a import func_a`},{question:"What are the three standard solutions to resolve a circular import in Python?",shortAnswer:"1. Deferred/local imports inside functions; 2. Architectural refactoring (extracting shared models into a common module); 3. Importing the module instead of specific symbols.",explanation:"Extracting shared data structures and types into a standalone 'models.py' or 'common.py' transforms circular dependencies into a clean Directed Acyclic Graph (DAG).",hint:"Local imports, common module extraction, or full module imports.",level:"moderate",codeExample:`# Solution 1 (Deferred import inside function):
def my_function():
    import service_b
    service_b.do_work()`},{question:"How do you reload a module at runtime after modifying its source file on disk?",shortAnswer:"Use importlib.reload(module_object)",explanation:"Calling 'import module' again will only return the existing cached object in sys.modules. importlib.reload() forces CPython to re-read and re-execute the file from disk.",hint:"Use importlib.reload(mod).",level:"moderate",codeExample:`import importlib, math
importlib.reload(math)`},{question:"What is the recommended import ordering convention according to PEP 8?",shortAnswer:"1. Standard library imports -> 2. Related third-party imports -> 3. Local application/library specific imports, separated by blank lines.",explanation:"Grouping imports into these three distinct blocks makes dependencies transparent and avoids coupling standard modules with third-party packages.",hint:"Standard library -> Third-party -> Local modules.",level:"basic",codeExample:`# 1. Standard Library
import sys
import os

# 2. Third-Party
# import requests
# import pandas as pd

# 3. Local Application
# from my_project import utils`},{question:"Does importing a module multiple times execute its top-level code multiple times?",shortAnswer:"No. Python executes a module's top-level statements only once per process when it is first loaded.",explanation:"Subsequent import statements retrieve the module object directly from the in-memory sys.modules dictionary.",hint:"Module top-level code executes only once per process.",level:"basic",codeExample:"# First import executes module; subsequent imports fetch from cache"},{question:"How do you import multiple symbols from a single module across multiple lines?",shortAnswer:"Enclose the imported symbols in parentheses: from module import (Symbol1, Symbol2, Symbol3)",explanation:"Parentheses allow multi-line PEP-8 compliant imports without needing backslash line continuation characters.",hint:"Use parentheses around the imported symbols.",level:"basic",codeExample:`from decimal import (
    Decimal,
    ROUND_HALF_UP,
    ROUND_DOWN
)`},{question:"What error is raised if you attempt to import a module that does not exist on sys.path?",shortAnswer:"ModuleNotFoundError: No module named 'xyz'",explanation:"In Python 3.6+, ModuleNotFoundError is a specific subclass of ImportError raised when a module cannot be found.",hint:"Raises ModuleNotFoundError.",level:"basic",codeExample:`try:
    import non_existent_module_9402
except ModuleNotFoundError as e:
    print(e)  # No module named 'non_existent_module_9402'`},{question:"What happens if a module has an unhandled exception in its top-level code during import?",shortAnswer:"The import statement fails, the exception propagates, and the module is NOT successfully registered in sys.modules.",explanation:"Any code at the global module level executes during import. If it crashes, the importing script crashes immediately unless wrapped in a try/except block.",hint:"Top-level errors crash the import process.",level:"basic",codeExample:"# Top-level runtime errors abort the import"},{question:"How do you check all available attributes, classes, and functions inside an imported module?",shortAnswer:"dir(module_name)",explanation:"The built-in dir() function returns a sorted list of all valid attribute names defined in the module's namespace.",hint:"Use dir(module).",level:"basic",codeExample:`import math
print(dir(math)[:5])  # ['__doc__', '__loader__', '__name__', '__package__', '__spec__']`},{question:"Can you import a function and rename it to resolve a naming collision with a local function?",shortAnswer:"Yes: from module import function_name as custom_name",explanation:"Aliasing allows you to integrate functions with conflicting names into the same script seamlessly.",hint:"Use 'as' to rename the imported function.",level:"basic",codeExample:`from statistics import mean as calc_avg
from numpy import mean as np_avg`},{question:"What is a module namespace in Python?",shortAnswer:"A dictionary (__dict__) containing all variables, functions, classes, and constants defined inside the module.",explanation:"Every module object owns an isolated namespace preventing variable names from colliding with other modules.",hint:"An isolated dictionary of all symbols defined in the module.",level:"moderate",codeExample:`import math
print(math.__dict__['pi'])  # 3.141592653589793`},{question:"Why should you never name a custom Python file 'math.py', 'random.py', or 'json.py'?",shortAnswer:"Because the current directory is first in sys.path, Python will import your custom file instead of the standard library module (Module Shadowing).",explanation:"This causes standard library functions to disappear, causing confusing AttributeError exceptions when other modules try to use 'math.sqrt' or 'random.randint'.",hint:"Custom files shadow standard library modules of the same name.",level:"basic",codeExample:"# If you create math.py in project root, 'import math' loads YOUR file!"},{question:"What does the __file__ attribute on a module contain?",shortAnswer:"The absolute or relative file path to the module's source code file on disk.",explanation:"module.__file__ allows inspecting where Python loaded the module from (except for built-in C extension modules which may have None).",hint:"Contains the file path of the loaded module.",level:"basic",codeExample:`import os
print(os.__file__)  # Path to os.py`},{question:"What is the difference between an absolute import and a relative import?",shortAnswer:"Absolute imports specify the full path from the project root (e.g. from app.services import user); relative imports use dots relative to current module (e.g. from . import models).",explanation:"PEP 8 strongly recommends absolute imports for clarity and portability across package structures.",hint:"Absolute imports use full path; relative imports use leading dots.",level:"moderate",codeExample:`# Absolute: from my_package.utils import helper
# Relative: from .utils import helper`},{question:"How do you conditionally import a module (e.g. fallback to an alternative library if not installed)?",shortAnswer:"Wrap the import in a try/except ModuleNotFoundError block.",explanation:"This pattern allows graceful degradation or using faster C libraries when available (e.g. try: import ujson as json except ImportError: import json).",hint:"Use try: import x except ModuleNotFoundError: import y.",level:"basic",codeExample:`try:
    import ujson as json
except ModuleNotFoundError:
    import json`},{question:"Can an import statement be placed inside an 'if' condition?",shortAnswer:"Yes. Python executes imports at runtime, so conditional imports execute only when the condition evaluates to True.",explanation:"Useful for platform-specific code (e.g. if sys.platform == 'win32': import winreg).",hint:"Imports can be placed inside if blocks.",level:"basic",codeExample:`import sys
if sys.platform == 'win32':
    # Windows-specific import
    pass`},{question:"What is the __name__ attribute of an imported module?",shortAnswer:"The string name of the module (e.g. 'math', 'my_module').",explanation:"When a module is imported, its __name__ is its module name. When run directly as the main script, __name__ is '__main__'.",hint:"Equals the module name when imported.",level:"basic",codeExample:`import math
print(math.__name__)  # 'math'`},{question:"How do you prevent certain private helper functions from being imported when someone uses 'from module import *'?",shortAnswer:"Define the __all__ list in the module, or prefix private function names with a leading underscore (_helper).",explanation:"__all__ = ['public_func'] defines an explicit public export whitelist. Symbols not in __all__ or starting with '_' are excluded from wildcard imports.",hint:"Define __all__ = ['func1'] or use leading underscore _private.",level:"complex",codeExample:`# In module.py:
__all__ = ['public_api']
def public_api(): pass
def _private_helper(): pass`}];function D(){const l=a.useRef([]),[s,d]=a.useState("lifecycle"),[m,x]=a.useState("direct");a.useEffect(()=>{const t=new IntersectionObserver(i=>{i.forEach(p=>{p.isIntersecting&&p.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return l.current.forEach(i=>{i&&t.observe(i)}),()=>t.disconnect()},[]);const r=t=>{t&&!l.current.includes(t)&&l.current.push(t)},c={direct:{label:"import math",title:"Direct Module Import",syntax:"import math",boundName:"math (Module Object)",access:"math.sqrt(144)",safety:"100% Safe (Explicit Namespace)",badgeColor:"text-emerald-300 bg-emerald-950/80 border-emerald-800",description:"Binds the module object to the current namespace. All calls require the 'math.' prefix, guaranteeing zero variable collisions.",code:`import math

radius = 7.0
area = math.pi * (radius ** 2)
print(f'Area: {area:.2f}')  # Area: 153.94`},mod_alias:{label:"import datetime as dt",title:"Module Aliasing",syntax:"import datetime as dt",boundName:"dt (Alias Object)",access:"dt.date.today()",safety:"100% Safe (Shortened Namespace)",badgeColor:"text-emerald-300 bg-emerald-950/80 border-emerald-800",description:"Standard convention across scientific and data libraries (e.g. np, pd, plt) to shorten repetitive namespace prefixes.",code:`import datetime as dt

today = dt.date(2026, 8, 24)
print(f'Session Date: {today:%d-%B-%Y}')  # 24-August-2026`},symbol:{label:"from decimal import Decimal",title:"Specific Symbol Import",syntax:"from decimal import Decimal, ROUND_HALF_UP",boundName:"Decimal, ROUND_HALF_UP (Direct Classes/Funcs)",access:"Decimal('14337.00')",safety:"High (Clean, but may shadow local names)",badgeColor:"text-blue-300 bg-blue-950/80 border-blue-800",description:"Imports individual functions or classes directly into the current namespace, avoiding the module prefix for frequently used utilities.",code:`from decimal import Decimal, ROUND_HALF_UP

fee = Decimal('4500.555').quantize(Decimal('0.01'), rounding=ROUND_HALF_UP)
print(f'Fee: INR {fee}')  # INR 4500.56`},sym_alias:{label:"from statistics import mean as avg",title:"Symbol Aliasing",syntax:"from statistics import mean as calculate_average",boundName:"calculate_average (Aliased Function)",access:"calculate_average([90, 95, 100])",safety:"100% Safe (Resolves local name conflicts)",badgeColor:"text-emerald-300 bg-emerald-950/80 border-emerald-800",description:"Renames the imported symbol locally to eliminate naming collisions with existing variables or functions.",code:`from statistics import mean as calculate_average

scores = [88, 92, 96, 94]
print(f'Average: {calculate_average(scores):.1f}%')  # Average: 92.5%`},wildcard:{label:"from math import *",title:"Wildcard Import (Anti-Pattern)",syntax:"from math import *",boundName:"All 50+ math symbols dumped into global scope",access:"sqrt(16), pi, sin(0)",safety:"CRITICAL DANGER: Namespace Pollution & Shadowing",badgeColor:"text-rose-400 bg-rose-950/80 border-rose-800",description:"DANGEROUS ANTI-PATTERN: Floods the local scope, silently overwrites existing variables, and breaks IDE autocomplete and code linters.",code:`# AVOID THIS IN PRODUCTION!
from math import *

# If you also do 'from numpy import *', 'sqrt' is silently overwritten!
print(sqrt(25))`}},n=c[m];return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:r,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 2 • Module 002_009"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 0"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Modules, Packages & Python Standard Library"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-teal-400 font-mono",children:"import"})," & ",e.jsx("code",{className:"text-cyan-400 font-mono",children:"from-import"})," Syntax Variations & Namespace Architecture"]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master Python’s module loading pipeline: direct imports, alias binding (",e.jsx("code",{className:"text-teal-300 font-mono",children:"import as"}),"), specific symbol imports (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"from import"}),"), the 4-step import lifecycle (",e.jsx("code",{className:"text-purple-300 font-mono",children:"sys.modules"})," cache & ",e.jsx("code",{className:"text-purple-300 font-mono",children:"__pycache__"})," bytecode), and resolving circular dependency cycles."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📦 import vs from-import"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ sys.modules Cache & Bytecode (.pyc)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🚫 Wildcard Import Anti-Pattern"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔄 Circular Import Resolution (DAG Design)"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧱"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The 4 Legitimate Import Styles vs 1 Toxic Anti-Pattern"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["In Python, every ",e.jsx("code",{className:"text-teal-400 font-mono",children:".py"})," file is a standalone ",e.jsx("strong",{children:"module"}),". The ",e.jsx("code",{className:"text-teal-400 font-mono",children:"import"})," keyword brings external logic into your script while managing namespace boundaries:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg shadow-teal-950/30",children:[e.jsxs("div",{className:"flex items-center gap-2 text-teal-400 font-bold text-base mb-1",children:[e.jsx("span",{children:"1️⃣"})," Direct Module Import"]}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-2",children:"import math"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Access via ",e.jsx("code",{className:"text-teal-300",children:"math.pi"}),". Cleanest, explicit, zero namespace pollution."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg shadow-cyan-950/30",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base mb-1",children:[e.jsx("span",{children:"2️⃣"})," Module Aliasing"]}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-2",children:"import datetime as dt"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Access via ",e.jsx("code",{className:"text-cyan-300",children:"dt.date"}),". Standard for data science (",e.jsx("code",{className:"text-slate-400",children:"np, pd, plt"}),")."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-blue-950/40 border border-blue-800/60 shadow-lg shadow-blue-950/30",children:[e.jsxs("div",{className:"flex items-center gap-2 text-blue-400 font-bold text-base mb-1",children:[e.jsx("span",{children:"3️⃣"})," Specific Symbol Import"]}),e.jsx("code",{className:"text-xs font-mono text-blue-300 block mb-2",children:"from decimal import Decimal"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Direct access to ",e.jsx("code",{className:"text-blue-300",children:"Decimal()"})," without repeating package names."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-indigo-950/40 border border-indigo-800/60 shadow-lg shadow-indigo-950/30",children:[e.jsxs("div",{className:"flex items-center gap-2 text-indigo-400 font-bold text-base mb-1",children:[e.jsx("span",{children:"4️⃣"})," Symbol Aliasing"]}),e.jsx("code",{className:"text-xs font-mono text-indigo-300 block mb-2",children:"from math import ceil as round_up"}),e.jsx("p",{className:"text-xs text-slate-300",children:"Resolves local identifier naming collisions cleanly."})]})]}),e.jsxs("div",{className:"bg-rose-950/40 p-5 rounded-xl border-l-4 border-rose-500 border border-rose-900/60",children:[e.jsxs("h3",{className:"text-rose-300 font-bold text-base mb-1",children:["☠️ The Wildcard Import Anti-Pattern: ",e.jsx("code",{className:"text-rose-200 font-mono",children:"from module import *"})]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Wildcard imports dump hundreds of unknown identifiers directly into your global namespace. If two modules define functions with the same name, the second import silently overwrites the first without an error! Always use explicit symbol imports."})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"⚙️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Import Internals & Dependency Graphs"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>d("lifecycle"),className:o("px-3 py-1.5 rounded-lg transition-all",s==="lifecycle"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Import Lifecycle Pipeline"}),e.jsx("button",{onClick:()=>d("namespace"),className:o("px-3 py-1.5 rounded-lg transition-all",s==="namespace"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Namespace Isolation"}),e.jsx("button",{onClick:()=>d("circular"),className:o("px-3 py-1.5 rounded-lg transition-all",s==="circular"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Circular Import Deadlock"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining CPython cache resolution, namespace dictionary bindings, and DAG refactoring:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:s==="lifecycle"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"CPYTHON 4-STEP IMPORT LIFECYCLE"}),e.jsxs("g",{transform:"translate(30, 60)",children:[e.jsx("rect",{x:"0",y:"0",width:"185",height:"130",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"28",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"1. sys.modules Cache"}),e.jsx("text",{x:"15",y:"55",fill:"#f8fafc",fontSize:"11",children:"Checks in-memory cache."}),e.jsx("text",{x:"15",y:"75",fill:"#a7f3d0",fontSize:"11",children:"If found → Returns cached reference instantly!"}),e.jsx("path",{d:"M 195 65 L 215 65",stroke:"#2dd4bf",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"220",y:"0",width:"185",height:"130",rx:"8",fill:"#1e293b",stroke:"#38bdf8"}),e.jsx("text",{x:"235",y:"28",fill:"#bae6fd",fontSize:"12",fontWeight:"bold",children:"2. sys.path Finder"}),e.jsx("text",{x:"235",y:"55",fill:"#f8fafc",fontSize:"11",children:"Searches directories:"}),e.jsx("text",{x:"235",y:"75",fill:"#cbd5e1",fontSize:"10",children:"• Current working dir"}),e.jsx("text",{x:"235",y:"90",fill:"#cbd5e1",fontSize:"10",children:"• PYTHONPATH"}),e.jsx("text",{x:"235",y:"105",fill:"#cbd5e1",fontSize:"10",children:"• Stdlib & site-packages"}),e.jsx("rect",{x:"440",y:"0",width:"185",height:"130",rx:"8",fill:"#1e1b4b",stroke:"#818cf8"}),e.jsx("text",{x:"455",y:"28",fill:"#c7d2fe",fontSize:"12",fontWeight:"bold",children:"3. Bytecode Compilation"}),e.jsx("text",{x:"455",y:"55",fill:"#f8fafc",fontSize:"11",children:"Compiles .py to .pyc"}),e.jsx("text",{x:"455",y:"75",fill:"#a7f3d0",fontSize:"11",children:"Stored in __pycache__/"}),e.jsx("text",{x:"455",y:"95",fill:"#cbd5e1",fontSize:"10",children:"Skips if .pyc is fresh!"}),e.jsx("rect",{x:"660",y:"0",width:"180",height:"130",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"675",y:"28",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"4. Execution & Binding"}),e.jsx("text",{x:"675",y:"55",fill:"#f8fafc",fontSize:"11",children:"Runs top-level code."}),e.jsx("text",{x:"675",y:"75",fill:"#ecfdf5",fontSize:"11",children:"Stores in sys.modules"}),e.jsx("text",{x:"675",y:"95",fill:"#ecfdf5",fontSize:"11",children:"Binds name locally."})]}),e.jsxs("g",{transform:"translate(30, 220)",children:[e.jsx("rect",{x:"0",y:"0",width:"810",height:"70",rx:"6",fill:"#090d16",stroke:"#334155"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"Single-Execution Guarantee:"}),e.jsx("text",{x:"20",y:"52",fill:"#cbd5e1",fontSize:"12",children:"Even if 'import my_mod' is written 100 times across 20 files, Python executes the module file ONLY ONCE per process!"})]})]}):s==="namespace"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"NAMESPACE BOUNDARIES: EXPLICIT IMPORT VS WILDCARD POLLUTION"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"A. Clean Isolated Namespace (import math)"}),e.jsx("rect",{x:"20",y:"50",width:"350",height:"70",rx:"6",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"35",y:"75",fill:"#34d399",fontSize:"12",fontWeight:"bold",children:"Global Scope Namespace"}),e.jsx("text",{x:"35",y:"95",fill:"#f8fafc",fontSize:"12",children:"Contains: {'math': <module 'math'>}"}),e.jsxs("text",{x:"20",y:"150",fill:"#ecfdf5",fontSize:"12",children:["• Access requires explicit prefix: ",e.jsx("tspan",{fill:"#34d399",fontWeight:"bold",children:"math.sqrt(16)"})]}),e.jsx("text",{x:"20",y:"175",fill:"#ecfdf5",fontSize:"12",children:"• Zero risk of variable collisions with local names."}),e.jsx("text",{x:"20",y:"200",fill:"#ecfdf5",fontSize:"12",children:"• IDE autocompletion is blazing fast."})]}),e.jsxs("g",{transform:"translate(450, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"13",fontWeight:"bold",children:"B. Polluted Namespace (from math import *)"}),e.jsx("rect",{x:"20",y:"50",width:"350",height:"70",rx:"6",fill:"#881337",stroke:"#e11d48"}),e.jsx("text",{x:"35",y:"75",fill:"#fca5a5",fontSize:"12",fontWeight:"bold",children:"Global Scope Namespace"}),e.jsx("text",{x:"35",y:"95",fill:"#f8fafc",fontSize:"11",children:"Contains: pi, sqrt, sin, cos, tan, log, exp, gcd... (50+)"}),e.jsx("text",{x:"20",y:"150",fill:"#ffe4e6",fontSize:"12",children:"• Local variables named 'pi' or 'sin' get overwritten!"}),e.jsx("text",{x:"20",y:"175",fill:"#ffe4e6",fontSize:"12",children:"• Impossible to trace where functions originated."}),e.jsx("text",{x:"20",y:"200",fill:"#ffe4e6",fontSize:"12",children:"• Severe anti-pattern in production software."})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"CIRCULAR IMPORT DEADLOCK & DAG REFACTORING"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"13",fontWeight:"bold",children:"Problem: Mutual Top-Level Cycle"}),e.jsx("text",{x:"20",y:"65",fill:"#cbd5e1",fontSize:"12 font-mono",children:"module_a.py → from module_b import func_b"}),e.jsx("text",{x:"20",y:"90",fill:"#cbd5e1",fontSize:"12 font-mono",children:"module_b.py → from module_a import func_a"}),e.jsx("rect",{x:"20",y:"120",width:"350",height:"90",rx:"6",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"35",y:"145",fill:"#f43f5e",fontSize:"12",fontWeight:"bold",children:"CRASH: ImportError"}),e.jsx("text",{x:"35",y:"170",fill:"#fda4af",fontSize:"11",children:"cannot import name 'func_a' from"}),e.jsx("text",{x:"35",y:"190",fill:"#fda4af",fontSize:"11",children:"partially initialized module 'module_a'"})]}),e.jsxs("g",{transform:"translate(450, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"Solution: Directed Acyclic Graph (DAG)"}),e.jsx("rect",{x:"20",y:"55",width:"350",height:"50",rx:"6",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"35",y:"85",fill:"#34d399",fontSize:"12 font-mono",fontWeight:"bold",children:"models.py / common.py (Shared Types)"}),e.jsxs("text",{x:"20",y:"145",fill:"#ecfdf5",fontSize:"12",children:["• Both ",e.jsx("tspan",{fill:"#38bdf8",children:"module_a"})," and ",e.jsx("tspan",{fill:"#38bdf8",children:"module_b"})," import from ",e.jsx("tspan",{fill:"#34d399",children:"models.py"}),"."]}),e.jsx("text",{x:"20",y:"175",fill:"#ecfdf5",fontSize:"12",children:"• Cycle is broken into a clean 1-way dependency."}),e.jsx("text",{x:"20",y:"205",fill:"#ecfdf5",fontSize:"12",children:"• Or use function-level deferred imports!"})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Import Syntax & Namespace Playground"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Select an import syntax pattern to inspect its namespace binding, member access syntax, and collision safety rating:"}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6",children:Object.keys(c).map(t=>e.jsx("button",{onClick:()=>x(t),className:o("py-2.5 px-3 rounded-xl text-xs font-mono font-bold border transition-all text-center",m===t?"bg-teal-950 border-teal-500 text-teal-300 shadow-md shadow-teal-950":"bg-slate-950 border-slate-800 text-slate-400 hover:text-white"),children:c[t].label},t))}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1",children:"Import Syntax Pattern"}),e.jsx("code",{className:"text-base font-mono font-bold text-teal-300 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 block",children:n.syntax})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1",children:"Bound Local Identifier"}),e.jsx("div",{className:"text-sm font-mono text-slate-200",children:n.boundName})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1",children:"Access Calling Syntax"}),e.jsx("code",{className:"text-sm font-mono text-cyan-300",children:n.access})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1",children:"Namespace Safety Rating"}),e.jsx("span",{className:o("inline-block text-xs font-mono font-bold px-3 py-1 rounded-full border",n.badgeColor),children:n.safety})]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed pt-2",children:n.description})]}),e.jsxs("div",{className:"space-y-2 flex flex-col justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block",children:"Live Python Code Demonstration"}),e.jsx("pre",{className:"p-4 bg-slate-900 rounded-lg border border-slate-800 text-teal-300 font-mono text-xs overflow-x-auto whitespace-pre-wrap flex-1",children:n.code})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Import Syntax & Namespace Comparison Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Import Statement"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Bound Local Name"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"How to Call Members"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Namespace Safety"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Recommended Usage"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"import math"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"math"}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300",children:"math.sqrt(16)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"Highest"}),e.jsx("td",{className:"py-3 px-4",children:"Standard library & general modules"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"import datetime as dt"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"dt"}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300",children:"dt.date.today()"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"Highest"}),e.jsx("td",{className:"py-3 px-4",children:"Data science standard (np, pd, plt)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-blue-300 font-semibold",children:"from decimal import Decimal"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"Decimal"}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300",children:'Decimal("10.5")'}),e.jsx("td",{className:"py-3 px-4 font-mono text-blue-400",children:"High"}),e.jsx("td",{className:"py-3 px-4",children:"Specific classes/functions used heavily"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-indigo-300 font-semibold",children:"from math import ceil as c"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"c"}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300",children:"c(4.2)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"Highest"}),e.jsx("td",{className:"py-3 px-4",children:"Resolving local variable name collisions"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-rose-400 font-semibold",children:"from math import *"}),e.jsx("td",{className:"py-3 px-4 font-mono text-rose-300",children:"50+ identifiers"}),e.jsx("td",{className:"py-3 px-4 font-mono text-rose-300",children:"sqrt(16)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-rose-400 font-bold",children:"Toxic (Dangerous)"}),e.jsx("td",{className:"py-3 px-4",children:"NEVER in production (Anti-pattern)"})]})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating import syntax variations, bytecode inspection, circular import resolution, and modular financial toolkits:"}),e.jsx(h,{files:[{filename:"import_syntax_variations.py",code:b,description:"Direct imports, aliasing (dt, pd), specific symbol imports (Decimal), and the wildcard import anti-pattern."},{filename:"import_internals_and_bytecode.py",code:_,description:"The 4-step import lifecycle, inspecting sys.modules, and dynamic imports via importlib.import_module()."},{filename:"circular_imports_and_resolution.py",code:g,description:"Anatomy of circular import cycles, deferred function-level imports, and DAG architectural refactoring."},{filename:"financial_toolkit_importer.py",code:j,description:"Production financial assessment toolkit combining Decimal, math.ceil, datetime, and typing imports."}]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Module Shadowing (Naming Files math.py)"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["If you name a script ",e.jsx("code",{className:"text-rose-300 font-mono",children:"math.py"})," or ",e.jsx("code",{className:"text-rose-300 font-mono",children:"random.py"}),", Python will import your file instead of the standard library module, crashing other libraries with ",e.jsx("code",{className:"text-rose-300 font-mono",children:"AttributeError"}),"!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Never give custom script files the same name as standard Python modules."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Believing Multiple Imports Slow Down Programs"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Some beginners fear writing ",e.jsx("code",{className:"text-amber-300 font-mono",children:"import math"})," in multiple files. In reality, Python caches loaded modules in ",e.jsx("code",{className:"text-amber-300 font-mono",children:"sys.modules"}),", so subsequent imports take ",e.jsx("strong",{children:"microseconds"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Import what each file needs explicitly at the top of that file."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Wildcard Variable Collisions"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-purple-300 font-mono",children:"from module_a import *"})," followed by ",e.jsx("code",{className:"text-purple-300 font-mono",children:"from module_b import *"})," silently overwrites any functions shared between both modules without warning."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use explicit imports: ",e.jsx("code",{className:"text-emerald-300",children:"from module_a import func_a"})]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Circular Import Deadlock"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["When A imports B and B imports A at the top level, you will encounter ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"ImportError: cannot import name from partially initialized module"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Move the import inside the function, or extract shared models into ",e.jsx("code",{className:"text-emerald-300",children:"models.py"}),"."]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering import lifecycle, sys.modules cache, bytecode optimization, and dependency management:"}),e.jsx(f,{questions:v})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with import syntax matrices, bytecode lifecycle diagrams, and DAG refactoring rules:"}),e.jsx("div",{className:"mb-10",children:e.jsx(u,{content:N,filename:"python_topic0_import_syntax_notes.txt",title:"Print Topic 0 Study Notes"})}),e.jsx(y,{})]})]})]})}export{D as default};
