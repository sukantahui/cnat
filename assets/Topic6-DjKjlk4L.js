import{b as n,j as e,bg as l}from"./vendor-react-core-Doz9nIC6.js";import{P as f}from"./PythonFileLoader-hCi5osN-.js";import{P as u}from"./PlainTextPrint-C08xhKA4.js";import{F as b}from"./FAQTemplate-CkSqDH4B.js";import{T as g}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const y=`# topic6_files/absolute_vs_relative_imports_syntax.py\r
# Module: 002_009_modules-packages\r
# Topic: Relative vs absolute imports in packages\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 6 - File 1: Absolute Imports vs Explicit Relative Imports Syntax\r
Demonstrates:\r
  1. Absolute Imports: PEP 8 recommended standard (from app.services.billing import TaxEngine)\r
  2. Explicit Relative Imports:\r
     - '.'   -> Current package folder (from . import sibling)\r
     - '..'  -> Parent package folder (from ..auth import verify_token)\r
     - '...' -> Grandparent folder (from ...core import config)\r
  3. Why implicit relative imports (e.g. 'import sibling') were banned in Python 3\r
"""\r
\r
def explain_import_syntax_rules():\r
    print("=" * 65)\r
    print("1. ABSOLUTE VS RELATIVE IMPORT SYNTAX RULES")\r
    print("=" * 65)\r
    print(r"""\r
Package Directory Layout:\r
  coder_app/\r
  |-- __init__.py\r
  |-- core/\r
  |   |-- __init__.py\r
  |   \\-- config.py           (Contains: APP_NAME, GST_RATE)\r
  \\-- services/\r
      |-- __init__.py\r
      |-- auth/\r
      |   |-- __init__.py\r
      |   \\-- tokens.py       (Contains: generate_jwt)\r
      \\-- billing/\r
          |-- __init__.py\r
          |-- calculator.py   (Target File We Are Editing)\r
          \\-- receipt.py      (Sibling in same folder)\r
\r
Inside \`services/billing/calculator.py\`:\r
\r
A. Absolute Imports (Full path from sys.path root):\r
   from coder_app.core.config import GST_RATE\r
   from coder_app.services.auth.tokens import generate_jwt\r
   from coder_app.services.billing.receipt import print_receipt\r
\r
B. Explicit Relative Imports (Relative dot navigation):\r
   from .receipt import print_receipt             # '.' = current folder (billing)\r
   from ..auth.tokens import generate_jwt         # '..' = parent folder (services)\r
   from ...core.config import GST_RATE            # '...' = grandparent folder (coder_app)\r
""")\r
\r
\r
def demonstrate_relative_import_mechanics():\r
    print("=" * 65)\r
    print("2. DOT NAVIGATION SUMMARY")\r
    print("=" * 65)\r
    print("Dot Token    Target Location          Example Inside services/billing/")\r
    print("-" * 65)\r
    print(".            Current Directory        from . import receipt")\r
    print("..           Parent Directory         from ..auth import tokens")\r
    print("...          Grandparent Directory    from ...core import config")\r
    print("....         Great-Grandparent Dir    from ....shared import models")\r
\r
\r
if __name__ == "__main__":\r
    explain_import_syntax_rules()\r
    demonstrate_relative_import_mechanics()\r
`,_=`# topic6_files/attempted_relative_import_error_resolution.py\r
# Module: 002_009_modules-packages\r
# Topic: Relative vs absolute imports in packages\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 6 - File 2: Anatomy & Resolution of the 'attempted relative import' Error\r
Demonstrates:\r
  1. Why 'ImportError: attempted relative import with no known parent package' occurs\r
  2. The role of the internal __package__ variable\r
  3. The 3 professional industry fixes for running package modules\r
"""\r
\r
import sys\r
\r
def explain_the_error_mechanism():\r
    print("=" * 65)\r
    print("1. WHY THE 'NO KNOWN PARENT PACKAGE' ERROR HAPPENS")\r
    print("=" * 65)\r
    print(f"Current Script Runtime State:")\r
    print(f"  * sys.argv[0]   : '{sys.argv[0]}'")\r
    print(f"  * __name__      : '{__name__}'")\r
    print(f"  * __package__   : '{__package__}'\\n")\r
\r
    print("""\r
When you execute a file directly via:\r
  $ python coder_app/services/billing/calculator.py\r
\r
Python initializes:\r
  1. \`__name__\` = '__main__'\r
  2. \`__package__\` = None (Python has ZERO knowledge that 'coder_app' is its parent!)\r
  3. When Python encounters \`from ..auth import tokens\`, it looks up \`__package__\`.\r
  4. Since \`__package__\` is None, it CRASHES IMMEDIATELY with:\r
     -> ImportError: attempted relative import with no known parent package!\r
""")\r
\r
\r
def explain_the_three_fixes():\r
    print("=" * 65)\r
    print("2. THE 3 PROFESSIONAL INDUSTRY RESOLUTIONS")\r
    print("=" * 65)\r
    print("""\r
Fix 1: Run as a Module with \`-m\` from Project Root (RECOMMENDED):\r
  Instead of: python coder_app/services/billing/calculator.py\r
  Run:        python -m coder_app.services.billing.calculator\r
  Why it works: Python sets \`__package__ = 'coder_app.services.billing'\` so\r
  all relative imports resolve perfectly!\r
\r
Fix 2: Use Absolute Imports Everywhere:\r
  Change: \`from ..auth import tokens\`\r
  To:     \`from coder_app.services.auth import tokens\`\r
  (And ensure the project root is in PYTHONPATH / sys.path).\r
\r
Fix 3: Set PYTHONPATH Environment Variable:\r
  Windows:    $env:PYTHONPATH = "E:\\\\react_routing_tailwind"\r
  Linux/macOS: export PYTHONPATH=/path/to/project_root\r
""")\r
\r
\r
if __name__ == "__main__":\r
    explain_the_error_mechanism()\r
    explain_the_three_fixes()\r
`,v=`# topic6_files/package_refactoring_and_portability.py\r
# Module: 002_009_modules-packages\r
# Topic: Relative vs absolute imports in packages\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 6 - File 3: Refactoring Safety, Library Portability & PEP 8 Guidelines\r
Demonstrates:\r
  1. Why reusable library packages prefer explicit relative imports\r
  2. Why application entry points and web backends prefer absolute imports\r
  3. The "Climbing the Tree" anti-pattern (avoiding ....deep.dot.madness)\r
  4. Decision matrix for choosing between absolute and relative imports\r
"""\r
\r
def explain_portability_tradeoffs():\r
    print("=" * 65)\r
    print("1. LIBRARY PORTABILITY VS REFACTORING SAFETY")\r
    print("=" * 65)\r
    print("""\r
Scenario: You maintain a popular Python library called \`tax_engine_v1\`.\r
You decide to rename the top-level package to \`tax_engine_v2\`.\r
\r
A. If you used ABSOLUTE imports internally:\r
   In 50 internal files, you wrote:\r
     \`from tax_engine_v1.core.calculator import GSTCalculator\`\r
   Result: You must find-and-replace all 50 files to rename them!\r
\r
B. If you used RELATIVE imports internally:\r
   In 50 internal files, you wrote:\r
     \`from ..core.calculator import GSTCalculator\`\r
   Result: Renaming the top-level package requires ZERO internal code changes!\r
   The library is completely portable and self-contained!\r
""")\r
\r
\r
def explain_pep8_recommendations():\r
    print("=" * 65)\r
    print("2. PEP 8 IMPORT CONVENTIONS & THE 'DOT MADNESS' ANTI-PATTERN")\r
    print("=" * 65)\r
    print("""\r
PEP 8 Recommendation:\r
  - "Absolute imports are recommended, as they are usually more readable and\r
     give better error messages if the imported package is incorrectly configured."\r
  - "However, explicit relative imports are an acceptable alternative when\r
     dealing with complex package layouts where using absolute imports would\r
     be unnecessarily verbose."\r
\r
Anti-Pattern: Excessive Dot Climbing:\r
  - Writing \`from .....services.auth import user\` is an anti-pattern.\r
  - Counting dots (5 levels up) is fragile and confusing.\r
  - Rule: If you need to go more than 2 levels up (.. or ...), prefer an ABSOLUTE import!\r
""")\r
\r
\r
if __name__ == "__main__":\r
    explain_portability_tradeoffs()\r
    explain_pep8_recommendations()\r
`,j=`# topic6_files/ecommerce_multi_package_importer.py\r
# Module: 002_009_modules-packages\r
# Topic: Relative vs absolute imports in packages\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 6 - File 4: Production Multi-Tier E-Commerce Import Simulator\r
Demonstrates:\r
  1. Coordinating absolute imports from project root and explicit relative imports\r
  2. Multi-tier order checkout, shipping calculation, and GST assessment\r
  3. Dynamic package simulation showing how __package__ resolves relative imports\r
"""\r
\r
import types\r
from typing import Dict, Any\r
\r
class MockECommerceApp:\r
    """Simulates an enterprise application with multi-tier subpackages."""\r
\r
    @classmethod\r
    def setup_system(cls):\r
        # 1. Root Package\r
        root = types.ModuleType("ecommerce_app")\r
        root.__path__ = ["/simulated/ecommerce_app"]\r
\r
        # 2. config submodule\r
        config_mod = types.ModuleType("ecommerce_app.config")\r
        config_mod.GST_RATE = 0.18\r
        config_mod.FREE_SHIPPING_THRESHOLD = 5000.0\r
\r
        # 3. logistics submodule\r
        logistics_mod = types.ModuleType("ecommerce_app.services.logistics")\r
        def calculate_shipping(weight_kg: float, gross_amt: float) -> float:\r
            if gross_amt >= config_mod.FREE_SHIPPING_THRESHOLD:\r
                return 0.0\r
            return 150.0 + (weight_kg * 25.0)\r
        logistics_mod.calculate_shipping = calculate_shipping\r
\r
        # 4. billing submodule\r
        billing_mod = types.ModuleType("ecommerce_app.services.billing")\r
        def process_checkout(order_id: int, student: str, gross_fee: float, books_kg: float) -> Dict[str, Any]:\r
            # Uses simulated relative import to logistics and config\r
            shipping_cost = logistics_mod.calculate_shipping(books_kg, gross_fee)\r
            gst_amount = gross_fee * config_mod.GST_RATE\r
            net_total = gross_fee + gst_amount + shipping_cost\r
\r
            return {\r
                "order_id": order_id,\r
                "student": student,\r
                "gross_fee": gross_fee,\r
                "gst_18": gst_amount,\r
                "shipping": shipping_cost,\r
                "total_payable": net_total\r
            }\r
        billing_mod.process_checkout = process_checkout\r
\r
        root.config = config_mod\r
        root.services_logistics = logistics_mod\r
        root.services_billing = billing_mod\r
\r
        return root, billing_mod\r
\r
\r
def run_ecommerce_checkout_demo():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - MULTI-TIER E-COMMERCE CHECKOUT PIPELINE")\r
    print("=" * 70)\r
\r
    app, billing = MockECommerceApp.setup_system()\r
\r
    print("Inter-Module Import Graph:")\r
    print("  * 'services.billing' -> uses explicit relative import to 'services.logistics'")\r
    print("  * 'services.logistics' -> uses absolute import to 'ecommerce_app.config'\\n")\r
\r
    # Order 1: Standard Enrollment with Course Books\r
    order1 = billing.process_checkout(\r
        order_id=202601,\r
        student="Susmita Mukherjee",\r
        gross_fee=12500.0,\r
        books_kg=3.5\r
    )\r
\r
    print("--- ORDER #202601 CHECKOUT BREAKDOWN ---")\r
    print(f"Student Name    : {order1['student']}")\r
    print(f"Gross Course Fee: INR {order1['gross_fee']:,.2f}")\r
    print(f"18% GST         : +INR {order1['gst_18']:,.2f}")\r
    print(f"Course Material : +INR {order1['shipping']:,.2f} (Free Shipping applied: > INR 5,000)")\r
    print("-" * 45)\r
    print(f"NET TOTAL DUE   : INR {order1['total_payable']:,.2f}\\n")\r
\r
\r
if __name__ == "__main__":\r
    run_ecommerce_checkout_demo()\r
`,k=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
            PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_009: MODULES & PACKAGES\r
                 TOPIC 6: RELATIVE VS ABSOLUTE IMPORTS IN PACKAGES\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. ABSOLUTE VS RELATIVE IMPORTS COMPARISON\r
--------------------------------------------------------------------------------\r
  Feature                 Absolute Import             Explicit Relative Import\r
  ------------------------------------------------------------------------------\r
  Syntax                  from app.core import db     from ..core import db\r
  Starting Point          sys.path root               Current file's package level\r
  PEP 8 Preference        Preferred Standard          Allowed for internal packages\r
  Portability             Coupled to package name     Portable (rename package safely)\r
  Direct CLI Execution    Works (if in PYTHONPATH)    Crashes without \`-m\` flag\r
\r
--------------------------------------------------------------------------------\r
2. RELATIVE IMPORT DOT TOKENS\r
--------------------------------------------------------------------------------\r
  • \`.\`    -> Sibling in the same directory: \`from .models import User\`\r
  • \`..\`   -> Parent package directory:      \`from ..auth import verify\`\r
  • \`...\`  -> Grandparent directory:         \`from ...core import settings\`\r
\r
--------------------------------------------------------------------------------\r
3. FIXING "attempted relative import with no known parent package"\r
--------------------------------------------------------------------------------\r
  • Problem:\r
      Running \`python app/billing/calc.py\` directly causes \`__package__ = None\`.\r
  • Solution (Best Practice):\r
      Run as a module from project root:\r
        python -m app.billing.calc\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 6: RELATIVE VS ABSOLUTE IMPORTS\r
================================================================================\r
`,w=[{question:"What is the core syntactic difference between an absolute import and an explicit relative import?",shortAnswer:"Absolute imports specify the full path starting from the project root (e.g. from app.services.billing import calc); explicit relative imports use leading dots based on current location (e.g. from . import calc).",explanation:"Absolute imports resolve from sys.path root; relative imports resolve relative to the current module's package location.",hint:"Absolute uses full project path; Relative uses leading dots (., ..).",level:"basic",codeExample:`# Absolute: from my_app.core.config import SETTINGS
# Relative: from ..core.config import SETTINGS`},{question:"What do single dot (.), double dot (..), and triple dot (...) mean in explicit relative imports?",shortAnswer:"'.' represents the current package directory; '..' represents the parent package directory (1 level up); '...' represents the grandparent directory (2 levels up).",explanation:"Each additional dot moves one level up the package directory hierarchy.",hint:". = current folder, .. = parent folder, ... = grandparent folder.",level:"basic",codeExample:`# from . import sibling
# from ..auth import login
# from ...core import settings`},{question:"Why were implicit relative imports (e.g. 'import sibling_module' without a dot) removed in Python 3?",shortAnswer:"Because they caused confusing shadowing bugs where a local file (e.g. string.py) silently overrode a standard library module of the same name.",explanation:"Python 3 mandates explicit dots for relative imports (from . import sibling) to ensure local files are never imported by mistake.",hint:"To prevent local files from silently shadowing standard library modules.",level:"moderate",codeExample:`# Python 2 (Implicit): import helper
# Python 3 (Explicit): from . import helper`},{question:"Why does running 'python pkg/sub/module.py' directly from the terminal cause 'ImportError: attempted relative import with no known parent package'?",shortAnswer:"Because direct execution sets __name__ = '__main__' and __package__ = None; Python has no knowledge of the module's parent package context.",explanation:"Relative imports require __package__ to determine which folder '..' refers to. When __package__ is None, relative imports fail immediately.",hint:"__package__ is None during direct script execution.",level:"complex",codeExample:`# Direct run fails: python my_pkg/sub/file.py
# Fix with -m:      python -m my_pkg.sub.file`},{question:"How does the '-m' flag (python -m pkg.sub.module) solve the relative import error?",shortAnswer:"It executes the module from the project root while preserving its full package context, setting __package__ = 'pkg.sub' so relative imports resolve correctly.",explanation:"Running with -m allows files with relative imports to function as executable CLI entry points without crashing.",hint:"Preserves package context and populates __package__ properly.",level:"moderate",codeExample:`# Terminal from project root:
# python -m app.services.billing.calculator`},{question:"What is PEP 8's recommendation regarding absolute vs relative imports?",shortAnswer:"PEP 8 recommends absolute imports for clarity and better error messages, but accepts explicit relative imports for complex internal package layouts.",explanation:"Absolute imports are unambiguous and immediately tell developers where the module resides in the codebase.",hint:"Absolute imports are preferred by PEP 8, but explicit relative imports are accepted.",level:"basic",codeExample:`# PEP 8 preferred:
from my_app.services.auth import verify_token`},{question:"Why do standalone reusable library authors often prefer explicit relative imports for internal package references?",shortAnswer:"Because relative imports make the library self-contained; if the library is renamed (e.g. from toolkit_v1 to toolkit_v2), zero internal import statements need to be changed.",explanation:"Internal relative imports provide complete refactoring portability across different environments and packaging namespaces.",hint:"Allows renaming the top-level package without breaking internal imports.",level:"moderate",codeExample:`# Inside library:
from ..core.math_utils import fast_gcd  # Completely portable!`},{question:"What is the 'Dot Madness' anti-pattern in relative imports?",shortAnswer:"Using excessively deep relative imports with 4 or more dots (e.g. from .....core.models import User), which is fragile and hard to count.",explanation:"If you need to navigate more than 2 levels up, use an absolute import for readability.",hint:"Excessive dots (.....) make code unreadable and fragile.",level:"basic",codeExample:`# BAD:  from .....shared.models import User
# GOOD: from my_app.shared.models import User`},{question:"Can you use relative imports from within a top-level script (a script that is not inside any package)?",shortAnswer:"No. Relative imports can ONLY be used inside modules that reside within a package.",explanation:"A top-level script has no parent package to navigate relative to.",hint:"No, relative imports require a package context.",level:"basic",codeExample:`# In main.py (root level):
# from . import utils  <- Crashes with ImportError!`},{question:"How does the PYTHONPATH environment variable affect absolute import resolution?",shortAnswer:"PYTHONPATH adds additional directory paths to sys.path, allowing absolute imports from those directories regardless of the current working directory.",explanation:"Setting PYTHONPATH to the project root ensures all 'from app.services import ...' statements resolve anywhere.",hint:"Adds project directories to sys.path for absolute import resolution.",level:"basic",codeExample:"# export PYTHONPATH=/path/to/project_root"},{question:"Can an __init__.py file use explicit relative imports to elevate submodule APIs?",shortAnswer:"Yes. Using 'from .submodule import ClassName' inside __init__.py is standard industry best practice for API elevation.",explanation:"Relative imports inside __init__.py ensure the package remains portable even if renamed.",hint:"Yes, 'from .submodule import Class' is standard in __init__.py.",level:"basic",codeExample:`# In my_pkg/__init__.py:
from .calculator import TaxCalculator
from .invoices import generate_pdf`},{question:"What happens if a relative import tries to navigate beyond the top-level package (e.g. 'from .... import x' when only 2 levels exist)?",shortAnswer:"Raises 'ImportError: attempted relative import beyond top-level package'.",explanation:"Python prevents relative imports from escaping the top-level package boundaries.",hint:"Raises 'attempted relative import beyond top-level package'.",level:"moderate",codeExample:"# If package is only 2 levels deep, 4 dots crashes"},{question:"Is 'import .module' valid Python syntax?",shortAnswer:"No. Relative import syntax requires the 'from .module import ...' form (SyntaxError: invalid syntax).",explanation:"The 'import .module' form is syntactically disallowed in Python.",hint:"Must use 'from .module import ...' instead of 'import .module'.",level:"basic",codeExample:`# INVALID: import .helper
# VALID:   from . import helper`},{question:"How do IDEs and refactoring tools handle relative vs absolute imports during directory restructuring?",shortAnswer:"Moving a file often breaks relative dot imports (.. changes to ...), whereas absolute imports remain valid unless the package name itself changes.",explanation:"Modern IDEs (VS Code, PyCharm) can automatically rewrite both, but absolute imports are less prone to manual error during file reorganization.",hint:"Absolute imports remain stable when files move within the same package structure.",level:"moderate",codeExample:"# Absolute imports don't need dot count adjustments"},{question:"What is the __package__ attribute of a module in Python?",shortAnswer:"A string containing the dot-separated package hierarchy of the module (e.g. 'app.services.billing').",explanation:"CPython uses __package__ to calculate the target directory for relative imports.",hint:"Stores the package hierarchy string used for relative imports.",level:"complex",codeExample:`import sys
print(__package__)  # e.g. 'app.services.billing'`},{question:"Can relative imports be used to import functions, classes, and variables equally?",shortAnswer:"Yes. 'from .module import func, MyClass, MY_CONSTANT' imports all identifier types identically.",explanation:"Relative imports work for any symbol in the target module's global namespace.",hint:"Yes, functions, classes, and constants are all supported.",level:"basic",codeExample:"from .models import Student, DEFAULT_FEE, calculate_gpa"},{question:"Why do application frameworks like FastAPI and Django overwhelmingly favor absolute imports?",shortAnswer:"Because application code is usually deployed under a known fixed project root where clarity, grep-searchability, and tooling support are prioritized over library portability.",explanation:"Grep-searching 'from app.models.user import User' finds every usage across a million-line enterprise codebase instantly.",hint:"Provides grep-searchability and unambiguous clarity in large enterprise codebases.",level:"moderate",codeExample:"# from my_django_app.users.models import UserProfile"},{question:"How do you import everything from a sibling module using relative syntax?",shortAnswer:"from .sibling import *",explanation:"Imports all symbols (governed by __all__) from the sibling file in the same directory.",hint:"from .sibling import *",level:"basic",codeExample:"from .constants import *"},{question:"What is the difference between 'from . import sibling' vs 'from .sibling import my_func'?",shortAnswer:"'from . import sibling' imports the module object 'sibling' into local scope; 'from .sibling import my_func' imports the specific function 'my_func' directly.",explanation:"Importing the module object requires calling 'sibling.my_func()', which can prevent circular import deadlocks.",hint:"First imports module object; second imports specific function.",level:"basic",codeExample:`# Option 1: from . import billing; billing.calc()
# Option 2: from .billing import calc; calc()`},{question:"Can you alias imported symbols in relative imports?",shortAnswer:"Yes: from ..auth import verify_token as check_auth",explanation:"The 'as' keyword works identically for both relative and absolute imports.",hint:"Use 'as' for aliasing in relative imports.",level:"basic",codeExample:"from .legacy_calc import compute as fast_compute"},{question:"Why should developers never manually append sys.path.append('..') to work around relative import issues?",shortAnswer:"Because hacking sys.path destroys module search determinism, causes duplicate module loading in sys.modules, and breaks production packaging.",explanation:"Use proper package execution ('python -m') or standard absolute imports instead of sys.path mutations.",hint:"sys.path hacking creates duplicate module instances and breaks deployment.",level:"moderate",codeExample:`# ANTI-PATTERN: sys.path.append('..')
# BEST PRACTICE: python -m app.sub.file`},{question:"What does 'from .. import *' do?",shortAnswer:"It imports all public symbols from the parent package's __init__.py file into the current module.",explanation:"Evaluates the parent package's __init__.py and imports its __all__ exports.",hint:"Imports all symbols from parent package's __init__.py.",level:"moderate",codeExample:"from .. import *"},{question:"How do pytest test runners handle relative imports inside package test directories?",shortAnswer:"pytest automatically adds the project root to sys.path, allowing tests to use both absolute and relative imports cleanly.",explanation:"Running 'pytest' from the project root maintains full package context across all test files.",hint:"pytest auto-configures sys.path from the project root.",level:"basic",codeExample:"# Running 'pytest' executes tests with proper package context"},{question:"Can relative imports cause circular dependencies?",shortAnswer:"Yes, exactly like absolute imports if two sibling modules import each other at the top level.",explanation:"Relative syntax does not change Python's import execution lifecycle; circular imports must still be broken via deferred imports or shared common modules.",hint:"Yes, circular import rules apply equally to relative imports.",level:"moderate",codeExample:"# Resolve circular imports by moving shared symbols to common.py"},{question:"What is the definitive rule of thumb for choosing between relative and absolute imports in a project?",shortAnswer:"Use explicit relative imports for sibling/parent files within self-contained reusable libraries; use absolute imports for cross-domain features in application projects and web backends.",explanation:"This rule gives libraries maximum portability while giving applications maximum clarity and maintainability.",hint:"Relative for self-contained libraries; Absolute for application code.",level:"basic",codeExample:`# Libraries: from . import models
# Applications: from app.services.users import UserService`}];function O(){const c=n.useRef([]),[a,p]=n.useState("dotnav"),[i,x]=n.useState("billing"),[d,h]=n.useState("config");n.useEffect(()=>{const t=new IntersectionObserver(r=>{r.forEach(o=>{o.isIntersecting&&o.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return c.current.forEach(r=>{r&&t.observe(r)}),()=>t.disconnect()},[]);const s=t=>{t&&!c.current.includes(t)&&c.current.push(t)},m=(()=>{let t="",r="",o="";return d==="config"?(t="from coder_app.core.config import GST_RATE",i==="billing"?(r="from ...core.config import GST_RATE",o="3 dots (...) moves 2 levels up (from billing -> services -> coder_app) to reach core/"):i==="auth"?(r="from ...core.config import GST_RATE",o="3 dots (...) moves 2 levels up (from auth -> services -> coder_app) to reach core/"):(r="from .config import GST_RATE",o="1 dot (.) targets sibling module within the same core/ directory")):d==="auth_token"?(t="from coder_app.services.auth.tokens import verify_token",i==="billing"?(r="from ..auth.tokens import verify_token",o="2 dots (..) moves 1 level up (billing -> services) then down into auth/"):i==="auth"?(r="from .tokens import verify_token",o="1 dot (.) targets sibling module within the same auth/ directory"):(r="from ..services.auth.tokens import verify_token",o="2 dots (..) moves from core/ to coder_app/ root, then down into services/auth/")):(t="from coder_app.services.billing.receipt import print_receipt",i==="billing"?(r="from .receipt import print_receipt",o="1 dot (.) targets sibling file in the same billing/ folder"):i==="auth"?(r="from ..billing.receipt import print_receipt",o="2 dots (..) moves 1 level up (auth -> services) then into billing/"):(r="from ..services.billing.receipt import print_receipt",o="2 dots (..) moves 1 level up (core -> coder_app) then into services/billing/")),{abs:t,rel:r,explanation:o}})();return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:s,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 2 • Module 002_009"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 6"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Modules, Packages & Python Standard Library"})]}),e.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:"Relative vs Absolute Imports in Packages"}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master Python import navigation: PEP 8 absolute imports, explicit relative dot notation (",e.jsx("code",{className:"text-teal-300 font-mono",children:"."}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:".."}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"..."}),"), resolving the infamous ",e.jsx("code",{className:"text-rose-400 font-mono",children:"attempted relative import with no known parent package"})," crash, and package refactoring portability."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🎯 Absolute vs Explicit Relative Syntax"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🧭 Dot Navigation Rules (., .., ...)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛠️ python -m Fix for Relative Imports"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📦 Library Portability & Refactoring"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧭"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. Absolute Imports vs Explicit Relative Imports"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"When a Python package contains multiple subpackages, modules must import from each other. Python provides two distinct ways to specify module locations:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg shadow-teal-950/30",children:[e.jsxs("div",{className:"flex items-center gap-2 text-teal-400 font-bold text-base mb-2",children:[e.jsx("span",{children:"📍"})," Absolute Import (PEP 8 Recommended)"]}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-2",children:"from coder_app.services.billing import TaxCalculator"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Specifies the entire path starting from the project root on ",e.jsx("code",{className:"text-teal-300 font-mono",children:"sys.path"}),". Unambiguous and easy to grep-search across massive codebases."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg shadow-cyan-950/30",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base mb-2",children:[e.jsx("span",{children:"📍"})," Explicit Relative Import (Dot Notation)"]}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-2",children:"from ..services.billing import TaxCalculator"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Specifies path relative to current module's position. Keeps internal library packages self-contained and portable when renaming the parent package."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"Dot Token Reference Quick Guide"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["• ",e.jsx("code",{className:"text-teal-300 font-mono",children:"."})," = Current package directory (sibling)",e.jsx("br",{}),"• ",e.jsx("code",{className:"text-cyan-300 font-mono",children:".."})," = Parent directory (1 level up)",e.jsx("br",{}),"• ",e.jsx("code",{className:"text-purple-300 font-mono",children:"..."})," = Grandparent directory (2 levels up)"]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Dot Navigation & Import Resolution"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>p("dotnav"),className:l("px-3 py-1.5 rounded-lg transition-all",a==="dotnav"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Dot Navigation"}),e.jsx("button",{onClick:()=>p("erroranatomy"),className:l("px-3 py-1.5 rounded-lg transition-all",a==="erroranatomy"?"bg-rose-900/50 text-rose-300 border border-rose-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"The 'attempted relative' Error"}),e.jsx("button",{onClick:()=>p("decision"),className:l("px-3 py-1.5 rounded-lg transition-all",a==="decision"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Decision Matrix"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining package dot climbing, runtime package context resolution, and refactoring guidelines:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:a==="dotnav"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"RELATIVE IMPORT DOT NAVIGATION SYSTEM"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"810",height:"240",rx:"8",fill:"#0f172a",stroke:"#334155"}),e.jsx("text",{x:"20",y:"30",fill:"#38bdf8",fontSize:"13",fontWeight:"bold",children:"📁 coder_app/ (Grandparent Directory: ...)"}),e.jsx("rect",{x:"30",y:"50",width:"220",height:"170",rx:"6",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"45",y:"75",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"📁 core/"}),e.jsx("text",{x:"45",y:"105",fill:"#ecfdf5",fontSize:"11 font-mono",children:"📄 config.py (GST_RATE)"}),e.jsx("rect",{x:"280",y:"50",width:"500",height:"170",rx:"6",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"295",y:"75",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"📁 services/ (Parent Directory: ..)"}),e.jsx("rect",{x:"300",y:"90",width:"220",height:"110",rx:"4",fill:"#090d16",stroke:"#475569"}),e.jsx("text",{x:"315",y:"115",fill:"#cbd5e1",fontSize:"11",fontWeight:"bold",children:"📁 auth/"}),e.jsx("text",{x:"315",y:"140",fill:"#cbd5e1",fontSize:"10 font-mono",children:"📄 tokens.py (verify_jwt)"}),e.jsx("rect",{x:"540",y:"90",width:"220",height:"110",rx:"4",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"555",y:"115",fill:"#a7f3d0",fontSize:"11",fontWeight:"bold",children:"📁 billing/ (Current: .)"}),e.jsx("text",{x:"555",y:"140",fill:"#ecfdf5",fontSize:"10 font-mono",children:"📄 calculator.py (Active)"}),e.jsx("text",{x:"555",y:"165",fill:"#ecfdf5",fontSize:"10 font-mono",children:"📄 receipt.py (Sibling: .)"})]})]}):a==="erroranatomy"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#f43f5e",fontSize:"14",fontWeight:"bold",children:"ANATOMY OF 'ImportError: attempted relative import with no known parent package'"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"13",fontWeight:"bold",children:"❌ Direct Script Invocation"}),e.jsx("text",{x:"20",y:"55",fill:"#fca5a5",fontSize:"11 font-mono",children:"$ python coder_app/billing/calc.py"}),e.jsx("rect",{x:"20",y:"75",width:"350",height:"65",rx:"4",fill:"#881337",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"95",fill:"#ffe4e6",fontSize:"11 font-mono",children:"__name__ = '__main__'"}),e.jsx("text",{x:"30",y:"115",fill:"#fca5a5",fontSize:"11 font-mono",children:"__package__ = None (No package context!)"}),e.jsx("text",{x:"20",y:"165",fill:"#ffe4e6",fontSize:"11 font-bold",children:"CRASH: When line 'from ..core import x' runs,"}),e.jsx("text",{x:"20",y:"185",fill:"#fca5a5",fontSize:"11 font-mono",children:"ImportError: attempted relative import"}),e.jsx("text",{x:"20",y:"205",fill:"#fca5a5",fontSize:"11 font-mono",children:"with no known parent package!"})]}),e.jsxs("g",{transform:"translate(450, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"✓ Module Flag Invocation (-m)"}),e.jsx("text",{x:"20",y:"55",fill:"#a7f3d0",fontSize:"11 font-mono",children:"$ python -m coder_app.billing.calc"}),e.jsx("rect",{x:"20",y:"75",width:"350",height:"65",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"95",fill:"#ecfdf5",fontSize:"11 font-mono",children:"__name__ = '__main__'"}),e.jsx("text",{x:"30",y:"115",fill:"#34d399",fontSize:"11 font-mono",children:"__package__ = 'coder_app.billing' (Populated!)"}),e.jsx("text",{x:"20",y:"165",fill:"#a7f3d0",fontSize:"11 font-bold",children:"SUCCESS: Python navigates relative dots"}),e.jsx("text",{x:"20",y:"185",fill:"#ecfdf5",fontSize:"11 font-mono",children:".. resolves to 'coder_app' successfully!"}),e.jsx("text",{x:"20",y:"205",fill:"#ecfdf5",fontSize:"11",children:"Script executes cleanly with zero errors."})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"WHEN TO USE ABSOLUTE VS RELATIVE IMPORTS"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"13",fontWeight:"bold",children:"Prefer Explicit Relative For: Libraries"}),e.jsx("text",{x:"20",y:"65",fill:"#ecfdf5",fontSize:"12 font-mono",children:"• Reusable third-party PyPI packages"}),e.jsx("text",{x:"20",y:"95",fill:"#ecfdf5",fontSize:"12 font-mono",children:"• Internal sibling modules (from . import x)"}),e.jsx("text",{x:"20",y:"125",fill:"#ecfdf5",fontSize:"12 font-mono",children:"• __init__.py API elevation facades"}),e.jsx("text",{x:"20",y:"155",fill:"#ecfdf5",fontSize:"12 font-mono",children:"• Allows renaming top package safely"}),e.jsx("rect",{x:"20",y:"180",width:"350",height:"40",rx:"4",fill:"#090d16",stroke:"#475569"}),e.jsx("text",{x:"30",y:"205",fill:"#34d399",fontSize:"11",children:"Maximum Package Portability & Self-Containment"})]}),e.jsxs("g",{transform:"translate(450, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"13",fontWeight:"bold",children:"Prefer Absolute For: Applications"}),e.jsx("text",{x:"20",y:"65",fill:"#cbd5e1",fontSize:"12 font-mono",children:"• Web backends (FastAPI, Django, Flask)"}),e.jsx("text",{x:"20",y:"95",fill:"#cbd5e1",fontSize:"12 font-mono",children:"• Cross-domain imports (app.auth → app.billing)"}),e.jsx("text",{x:"20",y:"125",fill:"#cbd5e1",fontSize:"12 font-mono",children:"• Long distances (avoids ....dot madness)"}),e.jsx("text",{x:"20",y:"155",fill:"#cbd5e1",fontSize:"12 font-mono",children:"• Global grep-searchability across team"}),e.jsx("rect",{x:"20",y:"180",width:"350",height:"40",rx:"4",fill:"#090d16",stroke:"#475569"}),e.jsx("text",{x:"30",y:"205",fill:"#c4b5fd",fontSize:"11",children:"PEP 8 Standard: Unambiguous Clarity"})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Import Syntax & Path Resolver"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Select the source module (where you are writing code) and the target symbol to calculate both Absolute and Explicit Relative import statements:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block font-bold",children:"1. Source Module (Where You Are Writing Code)"}),e.jsx("div",{className:"space-y-2",children:[{id:"billing",label:"services/billing/calculator.py (Level 3)"},{id:"auth",label:"services/auth/tokens.py (Level 3)"},{id:"core",label:"core/config.py (Level 2)"}].map(t=>e.jsx("button",{onClick:()=>x(t.id),className:l("w-full text-left p-3 rounded-lg border text-xs font-mono transition-all",i===t.id?"bg-teal-950 border-teal-500 text-teal-200 shadow-md shadow-teal-950":"bg-slate-950 border-slate-800 text-slate-400 hover:text-white"),children:t.label},t.id))})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block font-bold",children:"2. Target Symbol (What You Want to Import)"}),e.jsx("div",{className:"space-y-2",children:[{id:"config",label:"core/config.py -> GST_RATE"},{id:"auth_token",label:"services/auth/tokens.py -> verify_token"},{id:"receipt",label:"services/billing/receipt.py -> print_receipt"}].map(t=>e.jsx("button",{onClick:()=>h(t.id),className:l("w-full text-left p-3 rounded-lg border text-xs font-mono transition-all",d===t.id?"bg-cyan-950 border-cyan-500 text-cyan-200 shadow-md shadow-cyan-950":"bg-slate-950 border-slate-800 text-slate-400 hover:text-white"),children:t.label},t.id))})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 block font-bold",children:"Generated Import Statements"}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs font-mono space-y-2",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-slate-400 block text-[10px] uppercase font-bold",children:"Absolute Import (PEP 8 Preferred):"}),e.jsx("code",{className:"text-teal-300 font-bold block pt-1",children:m.abs})]}),e.jsxs("div",{className:"pt-2 border-t border-slate-800",children:[e.jsx("span",{className:"text-slate-400 block text-[10px] uppercase font-bold",children:"Explicit Relative Import (Dot Navigation):"}),e.jsx("code",{className:"text-cyan-300 font-bold block pt-1",children:m.rel})]})]})]}),e.jsxs("div",{className:"space-y-2 flex flex-col justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block",children:"Dot Navigation Breakdown"}),e.jsx("div",{className:"p-4 bg-slate-900 rounded-lg border border-slate-800 text-xs text-slate-300 flex-1 leading-relaxed flex items-center",children:e.jsxs("p",{children:["💡 ",m.explanation]})})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Absolute vs Relative Comparison Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Feature"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Absolute Import"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Explicit Relative Import"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Tradeoff / Recommendation"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"Syntax Format"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"from app.core import db"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"from ..core import db"}),e.jsx("td",{className:"py-3 px-4",children:"Relative uses leading dots for upward navigation"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"PEP 8 Status"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-bold",children:"Preferred Standard"}),e.jsx("td",{className:"py-3 px-4 text-slate-300",children:"Accepted Alternative"}),e.jsx("td",{className:"py-3 px-4",children:"Absolute gives better readability and error messages"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-blue-300 font-semibold",children:"Package Portability"}),e.jsx("td",{className:"py-3 px-4 text-slate-400",children:"Hardcoded to package name"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-bold",children:"100% Portable"}),e.jsx("td",{className:"py-3 px-4",children:"Renaming top package requires zero edits in relative"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Direct CLI Run"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Works (if in PYTHONPATH)"}),e.jsx("td",{className:"py-3 px-4 text-rose-400 font-bold",children:"Crashes without -m"}),e.jsxs("td",{className:"py-3 px-4",children:["Must execute with ",e.jsx("code",{className:"text-purple-300",children:"python -m pkg.sub.file"})]})]})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating absolute vs relative syntax, fixing attempted relative import errors, and multi-tier e-commerce checkout importers:"}),e.jsx(f,{files:[{filename:"absolute_vs_relative_imports_syntax.py",code:y,description:"Syntax comparison between absolute imports and explicit relative imports with single, double, and triple dot navigation."},{filename:"attempted_relative_import_error_resolution.py",code:_,description:"Anatomy of the 'attempted relative import with no known parent package' error and the python -m resolution."},{filename:"package_refactoring_and_portability.py",code:v,description:"Refactoring safety tradeoffs, library portability, and avoiding the 'dot madness' anti-pattern."},{filename:"ecommerce_multi_package_importer.py",code:j,description:"Enterprise e-commerce logistics and billing pipeline coordinating absolute and relative imports."}]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Direct Execution of Relative Imports"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Running ",e.jsx("code",{className:"text-rose-300 font-mono",children:"python app/billing/calc.py"})," crashes with ",e.jsx("code",{className:"text-rose-300 font-mono",children:"attempted relative import with no known parent package"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Run from project root with ",e.jsx("code",{className:"text-emerald-300",children:"python -m app.billing.calc"}),"!"]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Dot Madness (Climbing Too Far)"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-amber-300 font-mono",children:"from .....services.auth import user"})," is unreadable, fragile, and breaks immediately when files move."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," If you need more than 2 dots (..), switch to an ABSOLUTE import!"]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Relative Import in Top-Level Script"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-purple-300 font-mono",children:"from . import helper"})," in your root ",e.jsx("code",{className:"text-purple-300 font-mono",children:"main.py"})," crashes because top-level scripts have no parent package!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use standard ",e.jsx("code",{className:"text-emerald-300",children:"import helper"})," in root scripts."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"}),' Trap 4: sys.path.append("..") Workaround']}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Manually appending parent folders to ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"sys.path"})," creates duplicate module instances in memory and breaks production builds."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use proper packaging or set ",e.jsx("code",{className:"text-emerald-300",children:"PYTHONPATH"}),"."]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering absolute vs relative imports, dot syntax, python -m execution, and package portability:"}),e.jsx(b,{questions:w})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with dot navigation tables, PEP 8 rules, and the python -m command cheatsheet:"}),e.jsx("div",{className:"mb-10",children:e.jsx(u,{content:k,filename:"python_topic6_relative_vs_absolute_imports_notes.txt",title:"Print Topic 6 Study Notes"})}),e.jsx(g,{})]})]})]})}export{O as default};
