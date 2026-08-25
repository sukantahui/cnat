import{b as l,j as e,bg as o}from"./vendor-react-core-Doz9nIC6.js";import{P as h}from"./PythonFileLoader-hCi5osN-.js";import{P as x}from"./PlainTextPrint-C08xhKA4.js";import{F as u}from"./FAQTemplate-CkSqDH4B.js";import{T as f}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const y=`# topic1_files/sys_path_and_search_order.py\r
# Module: 002_009_modules-packages\r
# Topic: Module search path (sys.path) and module namespace\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 1 - File 1: Python Module Search Path (sys.path) & Resolution Order\r
Demonstrates:\r
  1. Anatomy of sys.path list and resolution precedence:\r
     - sys.path[0]: Current script directory / working directory\r
     - PYTHONPATH environment variable paths\r
     - Standard library installation directory\r
     - site-packages third-party directory\r
  2. Programmatic sys.path manipulation (sys.path.insert vs sys.path.append)\r
  3. Inspecting resolved module file locations with __file__\r
"""\r
\r
import sys\r
import os\r
\r
def demonstrate_sys_path_anatomy():\r
    print("=" * 65)\r
    print("1. sys.path RESOLUTION PRECEDENCE ORDER")\r
    print("=" * 65)\r
\r
    print(f"Total Search Directories in sys.path: {len(sys.path)}\\n")\r
\r
    # The 4 fundamental tiers of Python's search path\r
    print("Tier 1: Current Script Directory (sys.path[0]):")\r
    print(f"  -> '{sys.path[0]}'\\n")\r
\r
    print("Tier 2: Standard Library & Built-in Modules:")\r
    for p in sys.path[1:]:\r
        if "site-packages" not in p and os.path.exists(p):\r
            print(f"  -> '{p}'")\r
            break\r
\r
    print("\\nTier 3: Third-Party Libraries (site-packages):")\r
    for p in sys.path:\r
        if "site-packages" in p:\r
            print(f"  -> '{p}'")\r
            break\r
\r
\r
def demonstrate_programmatic_path_manipulation():\r
    print("\\n" + "=" * 65)\r
    print("2. PROGRAMMATIC PATH INJECTION (sys.path.insert)")\r
    print("=" * 65)\r
\r
    custom_lib_dir = os.path.abspath("./custom_libs")\r
\r
    print(f"Original sys.path length: {len(sys.path)}")\r
    \r
    # Inserting at index 0 gives highest priority for custom packages\r
    if custom_lib_dir not in sys.path:\r
        sys.path.insert(0, custom_lib_dir)\r
        print(f"Injected custom path at index 0: '{custom_lib_dir}'")\r
        print(f"New sys.path[0]: '{sys.path[0]}'")\r
\r
    # Clean up\r
    if custom_lib_dir in sys.path:\r
        sys.path.remove(custom_lib_dir)\r
        print(f"Safely removed custom path from sys.path.")\r
\r
\r
def demonstrate_module_location_inspection():\r
    print("\\n" + "=" * 65)\r
    print("3. INSPECTING RESOLVED MODULE FILE PATHS (__file__)")\r
    print("=" * 65)\r
\r
    import json\r
    import statistics\r
\r
    print(f"json module path       : '{json.__file__}'")\r
    print(f"statistics module path : '{statistics.__file__}'")\r
    print(f"sys (Built-in C) path  : {getattr(sys, '__file__', 'None (Compiled into CPython binary)')}")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_sys_path_anatomy()\r
    demonstrate_programmatic_path_manipulation()\r
    demonstrate_module_location_inspection()\r
`,_=`# topic1_files/module_namespace_and_globals.py\r
# Module: 002_009_modules-packages\r
# Topic: Module search path (sys.path) and module namespace\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 1 - File 2: Module Namespace Anatomy, Dunder Attributes & globals()\r
Demonstrates:\r
  1. Every module owns an isolated dictionary namespace (module.__dict__)\r
  2. Standard module dunder metadata (__name__, __file__, __doc__, __package__, __spec__)\r
  3. Dynamic inspection using dir(), vars(), and getattr()\r
  4. Difference between module-level globals() and local function locals()\r
"""\r
\r
import math\r
import types\r
\r
# Module-level variable in this script's global namespace\r
INSTITUTE_NAME = "Coder & AccoTax"\r
LOCATION = "Barrackpore, West Bengal"\r
\r
def inspect_module_namespace():\r
    print("=" * 65)\r
    print("1. MODULE OBJECT & NAMESPACE DICTIONARY (__dict__)")\r
    print("=" * 65)\r
\r
    print(f"Type of math module       : {type(math)}")\r
    print(f"Is instance of ModuleType : {isinstance(math, types.ModuleType)}\\n")\r
\r
    # Accessing symbols directly from math's internal __dict__\r
    math_dict = math.__dict__\r
    print(f"Total attributes in math  : {len(math_dict)}")\r
    print(f"math.__dict__['pi']       : {math_dict['pi']}")\r
    print(f"math.__dict__['sqrt']     : {math_dict['sqrt']}\\n")\r
\r
\r
def inspect_module_dunder_attributes():\r
    print("=" * 65)\r
    print("2. ESSENTIAL MODULE DUNDER METADATA ATTRIBUTES")\r
    print("=" * 65)\r
\r
    print(f"__name__    : {__name__} (Execution Mode Identifier)")\r
    print(f"__file__    : {__file__} (Source File on Disk)")\r
    print(f"__doc__     : {__doc__[:50]}... (Docstring)")\r
    print(f"__package__ : {__package__} (Parent Package Path)")\r
\r
\r
def inspect_globals_vs_locals():\r
    print("\\n" + "=" * 65)\r
    print("3. globals() VS locals() IN MODULE EXECUTION")\r
    print("=" * 65)\r
\r
    def sample_calculator(rate: float) -> float:\r
        # Local function namespace\r
        tax = 18.0\r
        calculated = rate * (1 + tax / 100)\r
        print(f"  [Inside function] locals() keys : {list(locals().keys())}")\r
        return calculated\r
\r
    print(f"Module globals() keys (Sample):")\r
    sample_globals = [k for k in globals().keys() if not k.startswith("__")]\r
    print(f"  -> {sample_globals}\\n")\r
\r
    print("Calling sample_calculator():")\r
    res = sample_calculator(100.0)\r
    print(f"  Result: INR {res:.2f}")\r
\r
\r
if __name__ == "__main__":\r
    inspect_module_namespace()\r
    inspect_module_dunder_attributes()\r
    inspect_globals_vs_locals()\r
`,b=`# topic1_files/module_shadowing_and_isolation.py\r
# Module: 002_009_modules-packages\r
# Topic: Module search path (sys.path) and module namespace\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 1 - File 3: Module Shadowing Disasters, Diagnosis & Defensive Coding\r
Demonstrates:\r
  1. The Module Shadowing mechanism (sys.path[0] overriding Python standard library)\r
  2. Catastrophic real-world examples: creating math.py, random.py, csv.py, or email.py\r
  3. Programmatic shadowing audit engine to detect local namespace conflicts\r
  4. Best practices for file naming and package isolation\r
"""\r
\r
import sys\r
import os\r
import importlib.util\r
\r
# Dangerous names that novice programmers often accidentally use for script files\r
CRITICAL_STDLIB_MODULES = [\r
    "math", "random", "json", "csv", "sys", "os", "datetime",\r
    "email", "string", "types", "logging", "typing", "collections"\r
]\r
\r
def explain_module_shadowing_mechanics():\r
    print("=" * 65)\r
    print("1. WHY MODULE SHADOWING HAPPENS (sys.path[0] PRECEDENCE)")\r
    print("=" * 65)\r
    print("""\r
How Shadowing Occurs:\r
  1. A developer creates a script named \`random.py\` to practice random numbers.\r
  2. In \`random.py\`, they write: \`import random; print(random.randint(1, 10))\`.\r
  3. Python checks \`sys.path[0]\` (the current directory) FIRST.\r
  4. It finds their local \`random.py\` instead of Python's standard \`random.py\`.\r
  5. The local file imports ITSELF (a partially initialized circular import)!\r
  6. CRASH: AttributeError: partially initialized module 'random' has no attribute 'randint'!\r
\r
Even worse: Any third-party library that relies on 'random' (like numpy or faker)\r
will also crash mysteriously across your entire project!\r
""")\r
\r
\r
def audit_local_directory_for_shadowing(target_dir: str = ".") -> list:\r
    """Scans a directory to detect files that dangerously shadow standard library modules."""\r
    conflicts = []\r
    local_files = [f for f in os.listdir(target_dir) if f.endswith(".py")]\r
\r
    for f in local_files:\r
        base_name = f[:-3] # Strip .py\r
        if base_name in CRITICAL_STDLIB_MODULES:\r
            conflicts.append((f, base_name))\r
\r
    return conflicts\r
\r
\r
def run_shadowing_audit_demo():\r
    print("=" * 65)\r
    print("2. RUNNING AUTOMATED SHADOWING AUDIT")\r
    print("=" * 65)\r
\r
    current_dir = os.path.abspath(".")\r
    print(f"Auditing Working Directory: '{current_dir}'\\n")\r
\r
    conflicts = audit_local_directory_for_shadowing(".")\r
    if conflicts:\r
        print("CRITICAL WARNING: Found standard library shadowing files:")\r
        for fname, std_mod in conflicts:\r
            print(f"  [DANGER] Local file '{fname}' shadows standard library '{std_mod}'!")\r
    else:\r
        print("[PASSED] AUDIT PASSED: No standard library module names shadowed in current directory.")\r
\r
\r
if __name__ == "__main__":\r
    explain_module_shadowing_mechanics()\r
    run_shadowing_audit_demo()\r
`,g=`# topic1_files/dynamic_plugin_loader.py\r
# Module: 002_009_modules-packages\r
# Topic: Module search path (sys.path) and module namespace\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 1 - File 4: Dynamic Plugin Discovery & Module Registry Engine\r
Demonstrates:\r
  1. Managing sys.path dynamically for plugin discovery\r
  2. Programmatic module loading with importlib\r
  3. Inspecting module namespaces for compliant interface classes\r
  4. Production plugin execution pipeline for educational and tax utilities\r
"""\r
\r
import sys\r
import os\r
import importlib\r
import types\r
from typing import Dict, Any, List\r
\r
class EducationalPlugin:\r
    """Base protocol for educational plugins."""\r
    name: str = "BasePlugin"\r
    \r
    @classmethod\r
    def execute(cls, student_data: Dict[str, Any]) -> str:\r
        raise NotImplementedError\r
\r
\r
# In-Memory Simulated Plugin Modules for standalone demonstration\r
class FeeCalculationPlugin(EducationalPlugin):\r
    name = "FeeCalculator"\r
    \r
    @classmethod\r
    def execute(cls, student_data: Dict[str, Any]) -> str:\r
        fee = student_data.get("fee", 0)\r
        gst = fee * 0.18\r
        return f"[FeeCalculator] Total with 18% GST: INR {fee + gst:,.2f}"\r
\r
\r
class AttendanceTrackerPlugin(EducationalPlugin):\r
    name = "AttendanceTracker"\r
    \r
    @classmethod\r
    def execute(cls, student_data: Dict[str, Any]) -> str:\r
        attended = student_data.get("attended", 0)\r
        total = student_data.get("total_classes", 1)\r
        pct = (attended / total) * 100\r
        return f"[AttendanceTracker] Student Attendance: {pct:.1f}% ({attended}/{total} classes)"\r
\r
\r
class PluginRegistryEngine:\r
    """Enterprise dynamic plugin registry and executor."""\r
\r
    def __init__(self):\r
        self._registry: Dict[str, Any] = {}\r
\r
    def register_plugin(self, plugin_cls: Any):\r
        """Registers a discovered plugin class."""\r
        self._registry[plugin_cls.name] = plugin_cls\r
\r
    def run_all_plugins(self, student_payload: Dict[str, Any]) -> List[str]:\r
        """Runs all registered plugins against a student payload."""\r
        results = []\r
        for name, plugin in self._registry.items():\r
            out = plugin.execute(student_payload)\r
            results.append(out)\r
        return results\r
\r
\r
def run_plugin_engine_demo():\r
    print("=" * 75)\r
    print("CODER & ACCOTAX - DYNAMIC PLUGIN REGISTRY & NAMESPACE DISCOVERY")\r
    print("=" * 75)\r
\r
    engine = PluginRegistryEngine()\r
\r
    # Register simulated plugins\r
    engine.register_plugin(FeeCalculationPlugin)\r
    engine.register_plugin(AttendanceTrackerPlugin)\r
\r
    print(f"Total Active Plugins in Registry: {len(engine._registry)}")\r
    for name in engine._registry:\r
        print(f"  * Plugin Registered: '{name}'")\r
\r
    print("\\n--- RUNNING PLUGIN PIPELINE ON STUDENT RECORD ---")\r
    student = {\r
        "name": "Susmita Mukherjee",\r
        "center": "Barrackpore",\r
        "fee": 12000.0,\r
        "attended": 28,\r
        "total_classes": 30\r
    }\r
\r
    outputs = engine.run_all_plugins(student)\r
    for out in outputs:\r
        print(f"  -> {out}")\r
\r
\r
if __name__ == "__main__":\r
    run_plugin_engine_demo()\r
`,j=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
            PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_009: MODULES & PACKAGES\r
            TOPIC 1: MODULE SEARCH PATH (sys.path) & MODULE NAMESPACES\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. sys.path RESOLUTION PRECEDENCE HIERARCHY\r
--------------------------------------------------------------------------------\r
  Tier 1: Current Script Directory (sys.path[0])\r
          The directory containing the input script that was run.\r
  Tier 2: PYTHONPATH Directories\r
          Paths listed in the PYTHONPATH environment variable (if set).\r
  Tier 3: Python Standard Library Directories\r
          Built-in C extension modules and standard library files (e.g. lib/).\r
  Tier 4: Third-Party Packages (site-packages)\r
          Installed via pip in global Python or isolated Virtual Environments.\r
\r
--------------------------------------------------------------------------------\r
2. MODULE NAMESPACE & ESSENTIAL DUNDER ATTRIBUTES\r
--------------------------------------------------------------------------------\r
  Every imported module is an instance of types.ModuleType with an isolated dict.\r
\r
  Attribute       Description                          Example Return\r
  ------------------------------------------------------------------------------\r
  __name__        Module identifier string             "math", "__main__"\r
  __file__        Path to module source on disk        "C:/Python313/Lib/math.py"\r
  __doc__         Module docstring                     "This module provides..."\r
  __package__     Package name if part of a package    "my_app.services"\r
  __spec__        Module specification object          ModuleSpec(...)\r
\r
--------------------------------------------------------------------------------\r
3. THE MODULE SHADOWING DISASTER\r
--------------------------------------------------------------------------------\r
  Problem:\r
    Creating a file named \`random.py\` in your project causes \`import random\` to\r
    load YOUR empty file instead of Python's standard \`random\` module because\r
    sys.path[0] has higher priority than the standard library!\r
\r
  Symptom:\r
    AttributeError: module 'random' has no attribute 'randint'\r
\r
  Prevention Rule:\r
    NEVER name script files after standard modules (math.py, json.py, csv.py,\r
    random.py, email.py, string.py, logging.py, typing.py).\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 1: sys.path & MODULE NAMESPACES\r
================================================================================\r
`,N=[{question:"What is sys.path in Python?",shortAnswer:"A list of directory string paths where Python searches for modules when an 'import' statement is executed.",explanation:"When you import a module, Python iterates sequentially through the paths in sys.path until it finds a matching .py, .pyc, or package directory.",hint:"The list of directories Python searches during import.",level:"basic",codeExample:`import sys
for path in sys.path:
    print(path)`},{question:"What is the exact search precedence order of directories in sys.path?",shortAnswer:"1. The directory containing the running script (sys.path[0]) -> 2. PYTHONPATH directories -> 3. Standard library directories -> 4. Third-party site-packages directories.",explanation:"Because the script's directory is checked first, any local file with the same name as a library module will take priority.",hint:"Script directory -> PYTHONPATH -> Stdlib -> site-packages.",level:"moderate",codeExample:`import sys
print('Script Dir:', sys.path[0])`},{question:"What is the PYTHONPATH environment variable used for?",shortAnswer:"It is an operating system environment variable used to augment Python's default module search path with custom project directories.",explanation:"Directories specified in PYTHONPATH are automatically inserted into sys.path right after the current script directory.",hint:"An environment variable to add custom directories to sys.path.",level:"basic",codeExample:"# In terminal / bash: export PYTHONPATH='/path/to/my/custom_libs'"},{question:"Why does sys.path.insert(0, '/custom/path') take higher priority than sys.path.append('/custom/path')?",shortAnswer:"Because Python searches sys.path sequentially from index 0 to the end; inserting at index 0 makes the custom directory the very first location searched.",explanation:"Using append puts the path at the end, meaning any standard or third-party module with the same name will be matched first.",hint:"Index 0 is searched first before any other directory.",level:"moderate",codeExample:`import sys
sys.path.insert(0, '/app/custom_modules')`},{question:"What is a Module Namespace in Python?",shortAnswer:"A dictionary (__dict__) containing all variables, functions, classes, and imported symbols defined inside that specific module.",explanation:"Every module owns an isolated namespace instance of types.ModuleType, preventing variable names in one file from colliding with another.",hint:"An isolated dictionary of all symbols defined in a module.",level:"basic",codeExample:`import math
print(math.__dict__['pi'])  # 3.141592653589793`},{question:"What is Module Shadowing and what causes it?",shortAnswer:"When a local script in your project directory has the same name as a Python standard library module (e.g. creating math.py, random.py, or json.py), causing Python to load your local file instead.",explanation:"Because sys.path[0] (current directory) has higher priority than the standard library, Python loads the local file, breaking standard functions and causing AttributeError.",hint:"Local file names shadowing standard library modules.",level:"basic",codeExample:`# If you name your file random.py:
import random
print(random.randint(1, 10))  # AttributeError: has no attribute 'randint'`},{question:"How can you programmatically verify where a module was loaded from on disk?",shortAnswer:"Inspect the module's __file__ attribute: print(module_name.__file__)",explanation:"module.__file__ returns the absolute file system path to the source file that was imported.",hint:"Use module.__file__.",level:"basic",codeExample:`import json
print(json.__file__)  # e.g., C:\\Python313\\Lib\\json\\__init__.py`},{question:"Why do built-in C extension modules like 'sys' or 'builtins' lack a __file__ attribute or return None?",shortAnswer:"Because they are compiled directly into the CPython executable binary itself rather than loaded from an external .py file on disk.",explanation:"Modules written in C and compiled into the core Python interpreter do not have a physical .py file path.",hint:"Compiled directly into the CPython binary.",level:"moderate",codeExample:`import sys
print(getattr(sys, '__file__', 'No file - Built-in C module'))`},{question:"What is the difference between globals() and locals() at the module level?",shortAnswer:"At the top module level outside of any functions or classes, globals() and locals() refer to the exact same module namespace dictionary.",explanation:"Inside a function, locals() returns a dictionary of the function's local variables, while globals() still returns the module-level dictionary.",hint:"At module root, globals() is locals(). Inside functions, they differ.",level:"moderate",codeExample:`# At top-level of a module:
print(globals() is locals())  # True`},{question:"What does the __name__ attribute contain when a module is imported versus when run directly?",shortAnswer:"When imported, __name__ equals the module's name string (e.g. 'math'); when executed directly as the entry point, __name__ equals '__main__'.",explanation:"This mechanism enables the standard if __name__ == '__main__': boilerplate for test execution.",hint:"'module_name' when imported, '__main__' when run directly.",level:"basic",codeExample:`if __name__ == '__main__':
    print('Running as main program!')`},{question:"What is the __doc__ attribute of a module?",shortAnswer:"The string content of the module-level docstring defined at the very top of the .py file.",explanation:"Python assigns the first unassigned string literal in the file to module.__doc__.",hint:"Contains the top-level module docstring.",level:"basic",codeExample:`import math
print(math.__doc__[:40])`},{question:"What is the site-packages directory in Python?",shortAnswer:"The target directory where third-party packages installed via 'pip install' are placed.",explanation:"Every Python environment (system or virtual environment) has a site-packages folder included in sys.path.",hint:"The directory where pip installs external packages.",level:"basic",codeExample:`import sys
print([p for p in sys.path if 'site-packages' in p])`},{question:"How can you create a custom module object dynamically in Python memory without creating a .py file on disk?",shortAnswer:"Use types.ModuleType('module_name')",explanation:"You can instantiate a module object directly from the types module and populate its __dict__ dynamically.",hint:"Use types.ModuleType('my_mod').",level:"complex",codeExample:`import types
my_mod = types.ModuleType('dynamic_mod')
my_mod.greeting = 'Hello from memory!'
print(my_mod.greeting)`},{question:"What is the __package__ attribute of a module?",shortAnswer:"A string representing the parent package name to which the module belongs (empty string or None for top-level scripts).",explanation:"It is used by Python's import system to resolve relative imports (e.g. 'from . import sibling').",hint:"Contains the parent package name.",level:"moderate",codeExample:"print(__package__)  # '' for top-level script"},{question:"What happens if you remove an entry from sys.path while your program is running?",shortAnswer:"Python will no longer search that removed directory for any subsequent import statements.",explanation:"Already loaded modules remain cached in sys.modules and unaffected, but new imports will not check that directory.",hint:"Future imports will skip that removed directory.",level:"moderate",codeExample:"# Already loaded modules stay in memory; future imports won't find that path"},{question:"How does Python resolve sub-module imports like 'import xml.etree.ElementTree'?",shortAnswer:"It imports 'xml', checks for the 'etree' subpackage, and loads 'ElementTree', binding 'xml' to the local namespace while populating intermediate namespaces.",explanation:"Each dot level represents a directory or module within the parent package hierarchy.",hint:"Hierarchically traverses packages and binds the top-level name.",level:"moderate",codeExample:"import xml.etree.ElementTree as ET"},{question:"What is the purpose of the __spec__ attribute on a module?",shortAnswer:"A ModuleSpec object containing the import-related metadata used by the import system (such as loader, origin, and submodule search locations).",explanation:"Introduced in PEP 451 to unify import machinery metadata across all module loaders.",hint:"Contains ModuleSpec import system metadata.",level:"complex",codeExample:`import math
print(math.__spec__)`},{question:"Why is modifying sys.path considered risky in production libraries?",shortAnswer:"Because sys.path is a global mutable list shared across the entire process, mutating it can cause unexpected module resolution bugs in other third-party dependencies.",explanation:"Libraries should avoid mutating sys.path globally; instead, packaging tools (pip, pyproject.toml, virtualenv) should configure paths cleanly.",hint:"Global list mutations can break other libraries in the same process.",level:"moderate",codeExample:"# Best practice: Use virtual environments and proper packaging rather than sys.path hacking"},{question:"How do you list all built-in modules compiled directly into your CPython interpreter?",shortAnswer:"sys.builtin_module_names",explanation:"A tuple of strings containing the names of all built-in C extension modules (e.g. '_ast', '_io', 'builtins', 'sys', 'time').",hint:"Use sys.builtin_module_names.",level:"basic",codeExample:`import sys
print(sys.builtin_module_names[:5])`},{question:"What happens if two directories in sys.path both contain a file named 'utils.py'?",shortAnswer:"Python imports the 'utils.py' from whichever directory appears first in sys.path and ignores the second.",explanation:"The import finder terminates its search immediately upon finding the first valid match.",hint:"First match in sys.path wins; subsequent duplicates are ignored.",level:"basic",codeExample:"# sys.path order dictates precedence"},{question:"How do you detect if a module was imported from a virtual environment vs global system Python?",shortAnswer:"Check if the module's __file__ path begins with sys.prefix or sys.base_prefix.",explanation:"In a virtual environment, sys.prefix points to the virtualenv directory, whereas sys.base_prefix points to the system base Python.",hint:"Compare module.__file__ against sys.prefix.",level:"moderate",codeExample:`import sys
print('In VirtualEnv:', sys.prefix != sys.base_prefix)`},{question:"Can two different modules share variables directly without importing each other?",shortAnswer:"No, module namespaces are strictly isolated; sharing state requires importing or passing objects via arguments or shared state singletons.",explanation:"Module isolation is a core design principle in Python preventing side effects.",hint:"Namespaces are isolated by default.",level:"basic",codeExample:"# Isolation prevents accidental cross-file state mutation"},{question:"What is the return type of dir(module)?",shortAnswer:"A sorted list of string attribute names defined inside the module.",explanation:"dir() lists functions, classes, constants, variables, and dunder attributes in the module.",hint:"A sorted list of strings.",level:"basic",codeExample:`import math
attrs = dir(math)
print(type(attrs), 'pi' in attrs)  # <class 'list'> True`},{question:"What is an import finder in CPython?",shortAnswer:"An object implementing find_spec() that locates module source files or bytecode on sys.path or inside zip archives.",explanation:"CPython uses PathFinder, BuiltinImporter, and FrozenImporter as standard finders.",hint:"Locates module source files on the file system.",level:"complex",codeExample:`import sys
print(sys.meta_path)`},{question:"How do you safely reset sys.path back to its original state after a temporary injection?",shortAnswer:"Save a copy of sys.path before modifying it and restore it in a finally block: original = list(sys.path); ... finally: sys.path[:] = original",explanation:"Restoring the slice in a finally block guarantees the search path is never corrupted if an exception occurs.",hint:"Save and restore sys.path in a try/finally block.",level:"moderate",codeExample:`import sys
orig_path = list(sys.path)
try:
    sys.path.insert(0, '/temp/dir')
finally:
    sys.path[:] = orig_path`}];function I(){const d=l.useRef([]),[r,c]=l.useState("precedence"),[a,p]=l.useState("math");l.useEffect(()=>{const s=new IntersectionObserver(t=>{t.forEach(m=>{m.isIntersecting&&m.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return d.current.forEach(t=>{t&&s.observe(t)}),()=>s.disconnect()},[]);const n=s=>{s&&!d.current.includes(s)&&d.current.push(s)},i=(s=>{const t=s.toLowerCase().trim();return t==="random"||t==="shadowed_random"?{matchedTier:"Tier 1: Current Script Directory (sys.path[0])",resolvedPath:"e:/react_routing_tailwind/src/random.py",isShadowed:!0,badge:"DANGER: Shadowing Standard Library",color:"text-rose-400 bg-rose-950/80 border-rose-800",explanation:"Python found your local 'random.py' in the current working directory first, blocking the standard library random module!"}:t==="math"||t==="json"||t==="datetime"||t==="sys"||t==="os"?{matchedTier:"Tier 3: Standard Library Directory",resolvedPath:`C:/Python313/Lib/${t}.py`,isShadowed:!1,badge:"Standard Library Module",color:"text-emerald-300 bg-emerald-950/80 border-emerald-800",explanation:"Resolved cleanly from Python's standard library directory without local conflicts."}:t==="numpy"||t==="pandas"||t==="requests"||t==="fastapi"?{matchedTier:"Tier 4: Third-Party Packages (site-packages)",resolvedPath:`C:/Python313/Lib/site-packages/${t}/__init__.py`,isShadowed:!1,badge:"Third-Party pip Package",color:"text-cyan-300 bg-cyan-950/80 border-cyan-800",explanation:"Resolved from virtual environment or global site-packages directory."}:t==="custom_plugin"||t==="finance_utils"?{matchedTier:"Tier 1: Current Script Directory (sys.path[0])",resolvedPath:`e:/react_routing_tailwind/src/components/study/python/${t}.py`,isShadowed:!1,badge:"Custom Application Module",color:"text-teal-300 bg-teal-950/80 border-teal-800",explanation:"Resolved from your local project source tree."}:{matchedTier:"Not Found in any sys.path Tier",resolvedPath:"None",isShadowed:!1,badge:"ModuleNotFoundError",color:"text-amber-400 bg-amber-950/80 border-amber-800",explanation:`No module named '${s}' exists on sys.path. Requires pip install or correct directory path.`}})(a);return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:n,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 2 • Module 002_009"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 1"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Modules, Packages & Python Standard Library"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Module Search Path (",e.jsx("code",{className:"text-teal-400 font-mono",children:"sys.path"}),") & Module Namespaces"]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Explore Python's search path resolution hierarchy, module namespace isolation (",e.jsx("code",{className:"text-teal-300 font-mono",children:"module.__dict__"}),"), dunder metadata (",e.jsx("code",{className:"text-purple-300 font-mono",children:"__name__"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"__file__"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"__doc__"}),"), and how to diagnose and prevent catastrophic ",e.jsx("span",{className:"text-rose-400 font-semibold",children:"Module Shadowing"})," bugs."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🧭 sys.path 4-Tier Hierarchy"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📦 Module Namespaces (__dict__, ModuleType)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Module Shadowing Diagnosis & Audit"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔌 Dynamic Plugin Discovery Engine"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🗺️"}),e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:["1. The 4-Tier ",e.jsx("code",{className:"text-teal-400 font-mono",children:"sys.path"})," Search Resolution Hierarchy"]})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["When you write ",e.jsx("code",{className:"text-teal-400 font-mono",children:"import my_module"}),", Python searches a list of directories stored in ",e.jsx("code",{className:"text-teal-300 font-mono",children:"sys.path"})," strictly in sequential order:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg shadow-teal-950/30",children:[e.jsxs("div",{className:"flex items-center gap-2 text-teal-400 font-bold text-base mb-1",children:[e.jsx("span",{children:"1️⃣"})," Script Dir (sys.path[0])"]}),e.jsx("p",{className:"text-xs text-slate-300",children:"The directory containing the script that was executed. Has highest priority."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg shadow-cyan-950/30",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base mb-1",children:[e.jsx("span",{children:"2️⃣"})," PYTHONPATH"]}),e.jsx("p",{className:"text-xs text-slate-300",children:"Custom environment variable paths configured by developers or Docker containers."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-blue-950/40 border border-blue-800/60 shadow-lg shadow-blue-950/30",children:[e.jsxs("div",{className:"flex items-center gap-2 text-blue-400 font-bold text-base mb-1",children:[e.jsx("span",{children:"3️⃣"})," Standard Library"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Core Python modules (",e.jsx("code",{className:"text-slate-400",children:"math, json, os, datetime"}),") in ",e.jsx("code",{className:"text-slate-400",children:"/Lib"}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg shadow-purple-950/30",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base mb-1",children:[e.jsx("span",{children:"4️⃣"})," site-packages"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Third-party libraries installed via ",e.jsx("code",{className:"text-purple-300",children:"pip"})," in virtualenv."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsxs("h3",{className:"text-white font-bold text-base mb-1",children:["Programmatic Path Injection: ",e.jsx("code",{className:"text-teal-300 font-mono",children:"sys.path.insert(0, path)"})]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Using ",e.jsx("code",{className:"text-teal-300 font-mono",children:"sys.path.insert(0, custom_path)"})," places your custom directory at index 0, giving it higher search precedence than standard library or third-party packages."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"🔬"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing sys.path Search & Shadowing"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>c("precedence"),className:o("px-3 py-1.5 rounded-lg transition-all",r==="precedence"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"sys.path Precedence"}),e.jsx("button",{onClick:()=>c("namespace"),className:o("px-3 py-1.5 rounded-lg transition-all",r==="namespace"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Module Namespace Anatomy"}),e.jsx("button",{onClick:()=>c("shadowing"),className:o("px-3 py-1.5 rounded-lg transition-all",r==="shadowing"?"bg-rose-900/50 text-rose-300 border border-rose-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Module Shadowing Bug"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining sequential directory searches, module dunder dictionaries, and local file collisions:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:r==="precedence"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"sys.path SEQUENTIAL SEARCH RESOLUTION PIPELINE"}),e.jsxs("g",{transform:"translate(30, 60)",children:[e.jsx("rect",{x:"0",y:"0",width:"185",height:"120",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"28",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"Tier 1: sys.path[0]"}),e.jsx("text",{x:"15",y:"55",fill:"#f8fafc",fontSize:"11",children:"Current Script Dir"}),e.jsx("text",{x:"15",y:"75",fill:"#a7f3d0",fontSize:"10",children:"./ (Project Root)"}),e.jsx("rect",{x:"220",y:"0",width:"185",height:"120",rx:"8",fill:"#1e293b",stroke:"#38bdf8"}),e.jsx("text",{x:"235",y:"28",fill:"#bae6fd",fontSize:"12",fontWeight:"bold",children:"Tier 2: PYTHONPATH"}),e.jsx("text",{x:"235",y:"55",fill:"#f8fafc",fontSize:"11",children:"Environment Vars"}),e.jsx("text",{x:"235",y:"75",fill:"#cbd5e1",fontSize:"10",children:"Custom paths"}),e.jsx("rect",{x:"440",y:"0",width:"185",height:"120",rx:"8",fill:"#1e1b4b",stroke:"#818cf8"}),e.jsx("text",{x:"455",y:"28",fill:"#c7d2fe",fontSize:"12",fontWeight:"bold",children:"Tier 3: Standard Lib"}),e.jsx("text",{x:"455",y:"55",fill:"#f8fafc",fontSize:"11",children:"Python /Lib Directory"}),e.jsx("text",{x:"455",y:"75",fill:"#cbd5e1",fontSize:"10",children:"math, json, os..."}),e.jsx("rect",{x:"660",y:"0",width:"180",height:"120",rx:"8",fill:"#4a044e",stroke:"#c026d3"}),e.jsx("text",{x:"675",y:"28",fill:"#f5d0fe",fontSize:"12",fontWeight:"bold",children:"Tier 4: site-packages"}),e.jsx("text",{x:"675",y:"55",fill:"#f8fafc",fontSize:"11",children:"pip Packages"}),e.jsx("text",{x:"675",y:"75",fill:"#f5d0fe",fontSize:"10",children:"numpy, pandas..."})]}),e.jsxs("g",{transform:"translate(30, 210)",children:[e.jsx("rect",{x:"0",y:"0",width:"810",height:"80",rx:"6",fill:"#090d16",stroke:"#334155"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"First Match Terminates the Search:"}),e.jsx("text",{x:"20",y:"55",fill:"#cbd5e1",fontSize:"12",children:"Python stops searching as soon as it finds a matching module name. If a match is found in Tier 1, Tiers 2, 3, and 4 are completely bypassed!"})]})]}):r==="namespace"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"THE MODULE OBJECT & NAMESPACE DICTIONARY (__dict__)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"810",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"14",fontWeight:"bold",children:"Module Instance: types.ModuleType"}),e.jsxs("g",{transform:"translate(20, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"240",height:"70",rx:"6",fill:"#0f172a",stroke:"#475569"}),e.jsx("text",{x:"15",y:"25",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",children:"module.__name__"}),e.jsx("text",{x:"15",y:"48",fill:"#cbd5e1",fontSize:"11 font-mono",children:'"math" or "__main__"'}),e.jsx("rect",{x:"260",y:"0",width:"250",height:"70",rx:"6",fill:"#0f172a",stroke:"#475569"}),e.jsx("text",{x:"275",y:"25",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",children:"module.__file__"}),e.jsx("text",{x:"275",y:"48",fill:"#cbd5e1",fontSize:"11 font-mono",children:'"C:/Python/Lib/math.py"'}),e.jsx("rect",{x:"530",y:"0",width:"240",height:"70",rx:"6",fill:"#0f172a",stroke:"#475569"}),e.jsx("text",{x:"545",y:"25",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",children:"module.__dict__"}),e.jsx("text",{x:"545",y:"48",fill:"#cbd5e1",fontSize:"11 font-mono",children:"{'pi': 3.14, 'sqrt': ...}"})]}),e.jsxs("text",{x:"20",y:"160",fill:"#ecfdf5",fontSize:"12",children:["• Every global variable, function, and class in a module is stored as a key in its ",e.jsx("tspan",{fill:"#34d399",fontWeight:"bold",children:"__dict__"}),"."]}),e.jsxs("text",{x:"20",y:"185",fill:"#ecfdf5",fontSize:"12",children:["• ",e.jsx("tspan",{fill:"#38bdf8",fontWeight:"bold",children:"dir(module)"})," returns a sorted list of all keys in ",e.jsx("tspan",{fill:"#34d399",children:"module.__dict__"}),"."]})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#f43f5e",fontSize:"14",fontWeight:"bold",children:"THE MODULE SHADOWING DISASTER"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"13",fontWeight:"bold",children:"Novice Mistake: Creating `random.py`"}),e.jsx("rect",{x:"20",y:"55",width:"350",height:"70",rx:"6",fill:"#881337",stroke:"#e11d48"}),e.jsx("text",{x:"35",y:"80",fill:"#ffe4e6",fontSize:"12 font-mono",children:"# Inside ./random.py"}),e.jsx("text",{x:"35",y:"102",fill:"#ffe4e6",fontSize:"12 font-mono",children:"import random  # Imports ITSELF!"}),e.jsxs("text",{x:"20",y:"155",fill:"#ffe4e6",fontSize:"12",children:["• sys.path[0] matches the local ",e.jsx("tspan",{fill:"#fca5a5",fontWeight:"bold",children:"./random.py"}),"."]}),e.jsxs("text",{x:"20",y:"180",fill:"#ffe4e6",fontSize:"12",children:["• Standard library ",e.jsx("tspan",{fill:"#fca5a5",children:"random.py"})," is ignored!"]}),e.jsx("text",{x:"20",y:"205",fill:"#f43f5e",fontSize:"12",fontWeight:"bold",children:"→ Crash: AttributeError: has no attribute 'randint'"})]}),e.jsxs("g",{transform:"translate(450, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"Diagnosis & Fix with `module.__file__`"}),e.jsx("rect",{x:"20",y:"55",width:"350",height:"70",rx:"6",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"35",y:"80",fill:"#a7f3d0",fontSize:"12 font-mono",children:"import random"}),e.jsx("text",{x:"35",y:"102",fill:"#a7f3d0",fontSize:"12 font-mono",children:"print(random.__file__)"}),e.jsx("text",{x:"20",y:"155",fill:"#ecfdf5",fontSize:"12",children:"• If __file__ points to project root, it is shadowed!"}),e.jsxs("text",{x:"20",y:"180",fill:"#ecfdf5",fontSize:"12",children:["• Fix: Rename script to ",e.jsx("tspan",{fill:"#34d399",fontWeight:"bold",children:"random_demo.py"}),"."]})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧭"}),e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:["3. Interactive ",e.jsx("code",{className:"text-teal-400 font-mono",children:"sys.path"})," Search Simulator"]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Test how Python resolves different module queries across search tiers and detects shadowing conflicts:"}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:["math","shadowed_random","numpy","custom_plugin","unknown_module"].map(s=>e.jsx("button",{onClick:()=>p(s),className:o("px-3 py-1.5 rounded-lg text-xs font-mono font-semibold border transition-all",a===s?"bg-teal-950 border-teal-500 text-teal-300 shadow-md shadow-teal-950":"bg-slate-950 border-slate-800 text-slate-400 hover:text-white"),children:s},s))}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1",children:"Module Import Query Name"}),e.jsx("input",{type:"text",value:a,onChange:s=>p(s.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-teal-300 font-mono text-sm focus:outline-none focus:border-teal-500"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1",children:"Matched Resolution Tier"}),e.jsx("div",{className:"text-sm font-mono text-slate-200",children:i.matchedTier})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1",children:"Resolved Source File Path (__file__)"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block bg-slate-900 p-2 rounded border border-slate-800 overflow-x-auto",children:i.resolvedPath})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2",children:"Resolution Status"}),e.jsx("span",{className:o("inline-block text-xs font-mono font-bold px-3 py-1 rounded-full border mb-3",i.color),children:i.badge}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:i.explanation})]}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded-lg border border-slate-800 text-xs font-mono text-slate-400",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"Python Code:"})," ",e.jsxs("code",{className:"text-teal-300",children:["import ",a,"; print(",a,".__file__)"]})]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:["4. Master ",e.jsx("code",{className:"text-teal-400 font-mono",children:"sys.path"})," Tier Comparison Matrix"]})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Search Tier"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Directory Source"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Priority"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Typical Module Contents"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Shadowing Risk"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"Tier 1: sys.path[0]"}),e.jsx("td",{className:"py-3 px-4",children:"Current Script Working Dir"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"1 (Highest)"}),e.jsxs("td",{className:"py-3 px-4",children:["Local project files (",e.jsx("code",{className:"text-slate-300",children:"utils.py"}),", etc.)"]}),e.jsx("td",{className:"py-3 px-4 font-mono text-rose-400 font-bold",children:"HIGH (Can shadow stdlib)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"Tier 2: PYTHONPATH"}),e.jsx("td",{className:"py-3 px-4",children:"Environment Variable"}),e.jsx("td",{className:"py-3 px-4 font-mono text-blue-400",children:"2"}),e.jsx("td",{className:"py-3 px-4",children:"Shared company packages & monorepo roots"}),e.jsx("td",{className:"py-3 px-4 font-mono text-amber-400",children:"Medium"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-blue-300 font-semibold",children:"Tier 3: Standard Lib"}),e.jsx("td",{className:"py-3 px-4",children:"Python Install /Lib"}),e.jsx("td",{className:"py-3 px-4 font-mono text-indigo-400",children:"3"}),e.jsxs("td",{className:"py-3 px-4",children:["Core Python standard library (",e.jsx("code",{className:"text-slate-300",children:"math, json"}),")"]}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400",children:"None"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Tier 4: site-packages"}),e.jsx("td",{className:"py-3 px-4",children:"pip install Target Directory"}),e.jsx("td",{className:"py-3 px-4 font-mono text-purple-400",children:"4"}),e.jsxs("td",{className:"py-3 px-4",children:["Third-party wheels (",e.jsx("code",{className:"text-slate-300",children:"numpy, pandas"}),")"]}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400",children:"None"})]})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating search path resolution, module dunder introspection, shadowing auditing, and dynamic plugin discovery:"}),e.jsx(h,{files:[{filename:"sys_path_and_search_order.py",code:y,description:"Exploring sys.path hierarchy, sys.path.insert(0), and inspecting __file__ module locations."},{filename:"module_namespace_and_globals.py",code:_,description:"Module namespace dictionaries (module.__dict__), dunder metadata, and globals() vs locals()."},{filename:"module_shadowing_and_isolation.py",code:b,description:"Anatomy of module shadowing bugs and an automated directory shadowing audit engine."},{filename:"dynamic_plugin_loader.py",code:g,description:"Production plugin discovery and execution registry engine for educational and tax calculations."}]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Naming Scripts After Standard Modules"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Naming a script ",e.jsx("code",{className:"text-rose-300 font-mono",children:"math.py"})," or ",e.jsx("code",{className:"text-rose-300 font-mono",children:"random.py"})," breaks Python across your entire project because ",e.jsx("code",{className:"text-rose-300 font-mono",children:"sys.path[0]"})," loads your empty file!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Suffix test files: ",e.jsx("code",{className:"text-emerald-300",children:"math_demo.py"})," or ",e.jsx("code",{className:"text-emerald-300",children:"random_test.py"})]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Mutating sys.path In Published Libraries"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Modifying ",e.jsx("code",{className:"text-amber-300 font-mono",children:"sys.path"})," inside a reusable package pollutes the global process state and causes hard-to-trace bugs for consumers."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Use proper packaging (",e.jsx("code",{className:"text-emerald-300",children:"pip install -e ."}),") rather than ",e.jsx("code",{className:"text-emerald-300",children:"sys.path.append()"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Assuming Built-in Modules Have `__file__`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-purple-300 font-mono",children:"sys.__file__"})," or ",e.jsx("code",{className:"text-purple-300 font-mono",children:"builtins.__file__"})," raises ",e.jsx("code",{className:"text-purple-300 font-mono",children:"AttributeError"})," or returns ",e.jsx("code",{className:"text-purple-300 font-mono",children:"None"})," because they are compiled in C!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"getattr(mod, '__file__', None)"})," for safe inspection."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Hardcoding Absolute Paths in sys.path"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-cyan-300 font-mono",children:'sys.path.append("C:/Users/sukanta/project")'})," breaks immediately when deployed to Linux, macOS, or Docker containers."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use relative path resolution: ",e.jsx("code",{className:"text-emerald-300",children:"pathlib.Path(__file__).parent"})]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering sys.path resolution order, module namespaces, dunder attributes, and module shadowing:"}),e.jsx(u,{questions:N})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with search tier hierarchies, namespace cheat sheets, and shadowing prevention checklists:"}),e.jsx("div",{className:"mb-10",children:e.jsx(x,{content:j,filename:"python_topic1_sys_path_and_namespaces_notes.txt",title:"Print Topic 1 Study Notes"})}),e.jsx(f,{})]})]})]})}export{I as default};
