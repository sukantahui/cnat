import{b as o,j as e,bg as r}from"./vendor-react-core-Doz9nIC6.js";import{P as x}from"./PythonFileLoader-hCi5osN-.js";import{P as p}from"./PlainTextPrint-C08xhKA4.js";import{F as u}from"./FAQTemplate-CkSqDH4B.js";import{T as _}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const h=`# topic4_files/dunder_name_idiom_mechanics.py\r
# Module: 002_009_modules-packages\r
# Topic: The __name__ == '__main__' idiom explained with practical use cases\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 4 - File 1: Mechanics of __name__ and the '__main__' Execution Guard\r
Demonstrates:\r
  1. How Python assigns __name__ dynamically based on execution context\r
  2. Direct execution: __name__ == '__main__'\r
  3. Import execution: __name__ == 'module_name'\r
  4. Preventing unwanted side-effect execution during imports\r
"""\r
\r
# Module-level functions (always defined regardless of execution mode)\r
def calculate_circle_area(radius: float) -> float:\r
    """Computes area of circle given radius."""\r
    import math\r
    return math.pi * (radius ** 2)\r
\r
\r
def calculate_rectangle_area(length: float, width: float) -> float:\r
    """Computes area of rectangle."""\r
    return length * width\r
\r
\r
# The Canonical Execution Guard\r
if __name__ == "__main__":\r
    print("=" * 65)\r
    print(f"DIRECT EXECUTION DETECTED: __name__ == '{__name__}'")\r
    print("=" * 65)\r
    print("This code runs ONLY when you execute: python dunder_name_idiom_mechanics.py")\r
    print("It will NEVER run when another file writes: import dunder_name_idiom_mechanics\\n")\r
\r
    r = 7.0\r
    print(f"Area of circle (r={r}): {calculate_circle_area(r):.2f} sq.units")\r
    print(f"Area of rectangle (10x5): {calculate_rectangle_area(10, 5)} sq.units")\r
`,f=`# topic4_files/reusable_library_and_cli_tool.py\r
# Module: 002_009_modules-packages\r
# Topic: The __name__ == '__main__' idiom explained with practical use cases\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 4 - File 2: Dual-Purpose Module Architecture (Library + CLI Tool)\r
Demonstrates:\r
  1. Writing pure functions for import by web backends / other scripts\r
  2. Wiring command-line argument parsing (sys.argv) inside the main guard\r
  3. Interactive terminal usage vs programmatic import usage\r
"""\r
\r
import sys\r
from typing import Dict\r
\r
# Currency exchange rates table (Simulated Coder & AccoTax FX Engine)\r
EXCHANGE_RATES: Dict[str, float] = {\r
    "USD": 83.50,   # 1 USD = 83.50 INR\r
    "EUR": 90.20,   # 1 EUR = 90.20 INR\r
    "GBP": 105.80,  # 1 GBP = 105.80 INR\r
}\r
\r
def convert_to_inr(amount_foreign: float, currency_code: str) -> float:\r
    """\r
    Pure library function: Converts foreign currency to Indian Rupees (INR).\r
    Usable anywhere in your web backend without printing to console.\r
    """\r
    code = currency_code.upper().strip()\r
    if code not in EXCHANGE_RATES:\r
        raise ValueError(f"Unsupported currency '{code}'! Supported: {list(EXCHANGE_RATES.keys())}")\r
    \r
    return amount_foreign * EXCHANGE_RATES[code]\r
\r
\r
def cli_entry_point():\r
    """Terminal CLI interface handler when executed directly."""\r
    print("=" * 65)\r
    print("CODER & ACCOTAX - FX CURRENCY CONVERTER CLI")\r
    print("=" * 65)\r
\r
    # Check CLI arguments or provide standard demo\r
    if len(sys.argv) >= 3:\r
        try:\r
            amt = float(sys.argv[1])\r
            curr = sys.argv[2]\r
            res = convert_to_inr(amt, curr)\r
            print(f"Input: {curr} {amt:,.2f} -> Output: INR {res:,.2f}")\r
        except ValueError as err:\r
            print(f"CLI Error: {err}")\r
    else:\r
        print("Usage: python reusable_library_and_cli_tool.py <AMOUNT> <CURRENCY_CODE>")\r
        print("\\nRunning Standard Self-Demo:")\r
        for curr, rate in EXCHANGE_RATES.items():\r
            converted = convert_to_inr(100.0, curr)\r
            print(f"  * 100 {curr:<3} @ Rate {rate:>6.2f} = INR {converted:>9.2f}")\r
\r
\r
if __name__ == "__main__":\r
    cli_entry_point()\r
`,g=`# topic4_files/unit_testing_and_benchmarking_guard.py\r
# Module: 002_009_modules-packages\r
# Topic: The __name__ == '__main__' idiom explained with practical use cases\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 4 - File 3: Unit Testing & Performance Benchmarking Inside Main Guard\r
Demonstrates:\r
  1. Embedding self-testing test assertions inside if __name__ == '__main__':\r
  2. Execution micro-benchmarks with time.perf_counter()\r
  3. Guaranteeing zero testing performance overhead when imported\r
"""\r
\r
import time\r
from typing import List\r
\r
def is_prime_number(n: int) -> bool:\r
    """Returns True if n is prime, False otherwise."""\r
    if n <= 1:\r
        return False\r
    if n <= 3:\r
        return True\r
    if n % 2 == 0 or n % 3 == 0:\r
        return False\r
    i = 5\r
    while i * i <= n:\r
        if n % i == 0 or n % (i + 2) == 0:\r
            return False\r
        i += 6\r
    return True\r
\r
\r
def run_unit_tests():\r
    """Executes embedded test suite."""\r
    print("Running Module Unit Tests:")\r
    assert is_prime_number(2) is True, "Test Failed: 2 is prime"\r
    assert is_prime_number(17) is True, "Test Failed: 17 is prime"\r
    assert is_prime_number(4) is False, "Test Failed: 4 is composite"\r
    assert is_prime_number(1) is False, "Test Failed: 1 is not prime"\r
    assert is_prime_number(97) is True, "Test Failed: 97 is prime"\r
    print("  [PASSED] All 5 Unit Test Assertions Passed Successfully!\\n")\r
\r
\r
def run_micro_benchmark():\r
    """Benchmarks finding primes under 100,000."""\r
    print("Running Algorithm Performance Benchmark:")\r
    t_start = time.perf_counter()\r
\r
    primes_count = sum(1 for i in range(100_000) if is_prime_number(i))\r
\r
    t_end = time.perf_counter()\r
    duration_ms = (t_end - t_start) * 1000\r
\r
    print(f"  Total Primes < 100,000 : {primes_count}")\r
    print(f"  Execution Duration     : {duration_ms:.2f} ms")\r
\r
\r
if __name__ == "__main__":\r
    print("=" * 65)\r
    print("MODULE VERIFICATION & BENCHMARK SUITE")\r
    print("=" * 65)\r
    run_unit_tests()\r
    run_micro_benchmark()\r
`,b=`# topic4_files/tax_invoice_cli_and_module.py\r
# Module: 002_009_modules-packages\r
# Topic: The __name__ == '__main__' idiom explained with practical use cases\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 4 - File 4: Production Enterprise GST Tax Invoice Generator & CLI Tool\r
Demonstrates:\r
  1. Complete dual-mode module architecture\r
  2. Pure importable functions for Web / FastAPI backends\r
  3. Interactive Command-Line Tool with argument parsing for terminal operators\r
"""\r
\r
import sys\r
import datetime as dt\r
from typing import Dict, Any\r
\r
# Module Constants\r
COMPANY_NAME: str = "Coder & AccoTax"\r
HEADQUARTERS: str = "Barrackpore, Kolkata"\r
DEFAULT_GST: float = 0.18\r
\r
def calculate_invoice_breakdown(\r
    gross_amount: float,\r
    discount_pct: float = 0.0,\r
    gst_rate: float = DEFAULT_GST\r
) -> Dict[str, float]:\r
    """Pure business function: Computes taxable subtotal, CGST, SGST, and net payable."""\r
    discount = gross_amount * (discount_pct / 100.0)\r
    taxable = gross_amount - discount\r
    total_gst = taxable * gst_rate\r
    cgst = total_gst / 2.0\r
    sgst = total_gst / 2.0\r
    net_total = taxable + total_gst\r
\r
    return {\r
        "gross": gross_amount,\r
        "discount": discount,\r
        "taxable": taxable,\r
        "cgst": cgst,\r
        "sgst": sgst,\r
        "gst_total": total_gst,\r
        "net_payable": net_total\r
    }\r
\r
\r
def format_invoice_string(inv_id: int, client: str, breakdown: Dict[str, float]) -> str:\r
    """Formats calculated numbers into an ASCII invoice table."""\r
    now = dt.datetime.now()\r
    return f"""\r
============================================================\r
                     {COMPANY_NAME}\r
                  {HEADQUARTERS}\r
               TAX INVOICE #{inv_id:06d}\r
============================================================\r
Date & Time    : {now:%d-%b-%Y %I:%M %p}\r
Client/Student : {client}\r
------------------------------------------------------------\r
Gross Subtotal : INR {breakdown['gross']:>12.2f}\r
Discount       : -INR {breakdown['discount']:>11.2f}\r
Taxable Amount : INR {breakdown['taxable']:>12.2f}\r
CGST (9%)      : +INR {breakdown['cgst']:>11.2f}\r
SGST (9%)      : +INR {breakdown['sgst']:>11.2f}\r
------------------------------------------------------------\r
NET TOTAL DUE  : INR {breakdown['net_payable']:>12.2f}\r
============================================================\r
"""\r
\r
\r
def main_cli_handler():\r
    """Terminal Command-Line Interface."""\r
    print("=" * 60)\r
    print("CODER & ACCOTAX - TAX INVOICE CLI GENERATOR")\r
    print("=" * 60)\r
\r
    # If arguments provided: python tax_invoice_cli_and_module.py <INV_ID> <CLIENT> <AMOUNT>\r
    if len(sys.argv) >= 4:\r
        try:\r
            inv_id = int(sys.argv[1])\r
            client = sys.argv[2]\r
            gross = float(sys.argv[3])\r
            disc = float(sys.argv[4]) if len(sys.argv) > 4 else 0.0\r
            data = calculate_invoice_breakdown(gross, discount_pct=disc)\r
            print(format_invoice_string(inv_id, client, data))\r
        except Exception as e:\r
            print(f"Error parsing CLI arguments: {e}")\r
    else:\r
        print("Usage: python tax_invoice_cli_and_module.py <ID> <CLIENT> <AMOUNT> [DISCOUNT_PCT]")\r
        print("\\nExecuting Default Diagnostic Invoice:")\r
        demo_data = calculate_invoice_breakdown(14500.0, discount_pct=10.0)\r
        print(format_invoice_string(9402, "Susmita Mukherjee", demo_data))\r
\r
\r
if __name__ == "__main__":\r
    main_cli_handler()\r
`,y=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
            PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_009: MODULES & PACKAGES\r
           TOPIC 4: THE __name__ == '__main__' IDIOM & DUAL-PURPOSE MODULES\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. THE MECHANICS OF __name__\r
--------------------------------------------------------------------------------\r
  How Python is Executed            Value of __name__       Code in Guard Runs?\r
  ------------------------------------------------------------------------------\r
  python my_script.py (Direct)      "__main__"              YES (Guard evaluates True)\r
  import my_script (Imported)       "my_script"             NO  (Guard evaluates False)\r
\r
--------------------------------------------------------------------------------\r
2. WHY THE MAIN GUARD IS MANDATORY\r
--------------------------------------------------------------------------------\r
  • Problem: Without \`if __name__ == '__main__':\`, any top-level executable code\r
    (e.g. print statements, database connections, GUI windows) will run\r
    IMMEDIATELY whenever another file imports your module!\r
  • Solution: Wrap all execution, demo code, CLI parsing, and benchmarks inside:\r
      if __name__ == '__main__':\r
          main()\r
\r
--------------------------------------------------------------------------------\r
3. TOP 3 PRACTICAL USE CASES FOR THE MAIN GUARD\r
--------------------------------------------------------------------------------\r
  1. Dual-Purpose Modules:\r
     Functions serve as an importable library for web apps, and the guard provides\r
     an interactive Command-Line Interface (CLI) using \`sys.argv\`.\r
  2. Embedded Unit Tests & Verification:\r
     Allows running quick assert checks directly from the terminal without\r
     polluting production consumers.\r
  3. Performance Benchmarks:\r
     Measures algorithm execution time via \`time.perf_counter()\` on demand.\r
\r
================================================================================\r
           END OF STUDY NOTE • TOPIC 4: THE __name__ == '__main__' IDIOM\r
================================================================================\r
`,v=[{question:`What is the primary purpose of the 'if __name__ == "__main__":' idiom in Python?`,shortAnswer:"It allows a Python file to distinguish between being executed directly as a standalone script versus being imported as a module into another program.",explanation:"Code inside the block runs ONLY when the script is directly executed from the terminal, preventing unintended side effects upon import.",hint:"Differentiates direct execution from module imports.",level:"basic",codeExample:`if __name__ == '__main__':
    print('Executed directly from terminal!')`},{question:"What is the exact string value of __name__ when a Python file is run directly vs when it is imported?",shortAnswer:"When run directly: '__main__'; When imported: the module's actual name string (e.g. 'fee_calculator').",explanation:"CPython dynamically sets the special variable __name__ in the module's global namespace before executing the file.",hint:"'__main__' when run directly; 'module_name' when imported.",level:"basic",codeExample:`# Directly: python app.py -> __name__ is '__main__'
# Imported: import app    -> __name__ is 'app'`},{question:`What happens if a module has top-level print statements or calculations outside of 'if __name__ == "__main__":'?`,shortAnswer:"Those statements execute immediately whenever any other script imports that module, polluting the console output and wasting CPU cycles.",explanation:"Importing a module executes all top-level statements. The execution guard prevents execution of demo, test, or CLI code.",hint:"Top-level code runs automatically during import.",level:"basic",codeExample:`# BAD:
print('Connecting to DB...')  # Runs on every import!
# GOOD:
if __name__ == '__main__':
    print('Connecting to DB...')`},{question:"What is a 'Dual-Purpose Module' in Python software engineering?",shortAnswer:"A module that serves as an importable library providing functions/classes to other scripts AND as a runnable CLI tool when executed from the terminal.",explanation:`Functions remain clean and pure for web backends, while the 'if __name__ == "__main__":' block handles terminal arguments.`,hint:"Functions as both an importable library and a CLI script.",level:"moderate",codeExample:`def convert(x): return x * 2

if __name__ == '__main__':
    import sys
    print(convert(float(sys.argv[1])))`},{question:`Why is wrapping execution logic inside a 'def main():' function recommended instead of putting raw statements directly inside 'if __name__ == "__main__":'?`,shortAnswer:"1. Keeps variables local instead of polluting the global namespace; 2. Allows other scripts or test suites to call main() programmatically.",explanation:"Variables declared directly inside an 'if' block become global module variables; defining 'def main():' encapsulates them locally.",hint:"Prevents global variable leaks and enables calling main() directly.",level:"moderate",codeExample:`def main():
    temp_val = 100  # Local, not global!
    print(temp_val)

if __name__ == '__main__':
    main()`},{question:"How can you use the main guard for embedded self-testing and unit test assertions?",shortAnswer:"Place 'assert' statements inside the block to verify core function outputs when the developer runs the file directly.",explanation:"This allows instant verification during development without requiring complex test runner setups.",hint:"Use assert statements inside the main block.",level:"basic",codeExample:`def add(a, b): return a + b

if __name__ == '__main__':
    assert add(2, 3) == 5, 'Math error'
    print('All internal tests passed!')`},{question:"How can you use the main guard for algorithm performance micro-benchmarking?",shortAnswer:"Measure function execution time using time.perf_counter() inside the guard without imposing any performance overhead when imported.",explanation:"The benchmarking code is completely bypassed when the module is imported into production systems.",hint:"Use time.perf_counter() inside the guard.",level:"moderate",codeExample:`if __name__ == '__main__':
    import time
    t0 = time.perf_counter()
    do_work()
    print(f'Duration: {(time.perf_counter()-t0)*1000:.2f} ms')`},{question:"Can an imported module access its own __name__ variable?",shortAnswer:"Yes. Inside the module's functions or top-level code, __name__ evaluates to the module's string name.",explanation:"This is commonly used in logging: logger = logging.getLogger(__name__).",hint:"Useful for logging: getLogger(__name__).",level:"basic",codeExample:`import logging
logger = logging.getLogger(__name__)`},{question:"What is the difference between running a script as 'python script.py' vs 'python -m script'?",shortAnswer:"'python script.py' sets sys.path[0] to the script's directory; 'python -m script' searches sys.path for the module and sets __name__ to '__main__'.",explanation:"'python -m' allows executing modules inside packages correctly with relative imports.",hint:"'python -m' runs a module within package context.",level:"moderate",codeExample:"# Terminal: python -m my_package.service"},{question:`What happens if you import a file that contains 'if __name__ == "__main__":' from another script?`,shortAnswer:"The condition evaluates to False (since __name__ != '__main__'), and the entire block is skipped completely.",explanation:"Only the functions, classes, and top-level definitions in the module are loaded into memory.",hint:"The block is completely skipped on import.",level:"basic",codeExample:"# Importing skips the guard block automatically"},{question:"Why does omitting the main guard break multiprocessing on Windows?",shortAnswer:"On Windows, multiprocessing creates new child processes by re-importing the main script; without the guard, child processes create recursive infinite child process loops!",explanation:"On Windows (which uses spawn instead of fork), every child process executes the script from line 1. The guard prevents child processes from spawning infinite children.",hint:"Prevents infinite process spawning on Windows.",level:"complex",codeExample:`import multiprocessing

def worker(): print('Working')

if __name__ == '__main__':
    p = multiprocessing.Process(target=worker)
    p.start()`},{question:"How do you parse command-line flags inside a main guard using the standard library?",shortAnswer:"Use sys.argv for simple arguments or argparse.ArgumentParser() for robust CLI flags and help menus.",explanation:"The argparse module builds automated --help flags, type conversions, and argument validation.",hint:"Use sys.argv or argparse.ArgumentParser.",level:"moderate",codeExample:`import argparse

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--port', type=int, default=8000)
    args = parser.parse_args()
    print(f'Starting server on port {args.port}')

if __name__ == '__main__':
    main()`},{question:`Can a module have multiple 'if __name__ == "__main__":' blocks?`,shortAnswer:"Yes, Python allows it, but it is considered poor style. Standard practice is to have exactly one guard at the bottom of the file.",explanation:"Having a single entry point at the end of the file maintains code clarity.",hint:"Allowed but bad practice; use one at the bottom.",level:"basic",codeExample:"# Best practice: single guard at the bottom calling main()"},{question:"How does the Python REPL / interactive shell set __name__?",shortAnswer:"In the interactive shell / IDLE, __name__ is set to '__main__'.",explanation:"Interactive REPL sessions operate as the main top-level execution scope.",hint:"__name__ is '__main__' in REPL.",level:"basic",codeExample:`>>> __name__
'__main__'`},{question:"What is the return value of a script when main() finishes without calling sys.exit()?",shortAnswer:"Python exits with status code 0 (success) by default.",explanation:"If an unhandled exception occurs, Python exits with status code 1.",hint:"Defaults to exit code 0.",level:"basic",codeExample:"# Clean termination exits with code 0"},{question:"How do you pass a custom exit status code from main() to the operating system?",shortAnswer:"sys.exit(main()) where main() returns an integer (0 for success, 1+ for errors).",explanation:"This allows bash/PowerShell scripts to check the return code ($? on Linux, $LASTEXITCODE on PowerShell).",hint:"Use sys.exit(main()).",level:"moderate",codeExample:`import sys
def main() -> int:
    return 0  # Success

if __name__ == '__main__':
    sys.exit(main())`},{question:"Why should functions inside a library module return values instead of calling print()?",shortAnswer:"Returning values makes functions composable, testable, and reusable by web APIs, GUI apps, and other modules without unwanted console output.",explanation:"Console printing should be isolated to the presentation layer or the CLI main guard.",hint:"Return values for reusability; reserve print() for CLI.",level:"basic",codeExample:`# GOOD: def calculate(x): return x * 1.18
# BAD:  def calculate(x): print(x * 1.18)`},{question:`What happens if you put import statements inside the 'if __name__ == "__main__":' block?`,shortAnswer:"Those modules are imported ONLY when the script is run directly, saving import time when the module is imported as a library.",explanation:"This is a great technique for CLI-only dependencies (like argparse, colorama, or benchmark tools).",hint:"Imports execute only during direct script execution.",level:"moderate",codeExample:`if __name__ == '__main__':
    import argparse  # Loaded only when run as CLI!`},{question:"How do you test the CLI functionality of a module from within a Python test runner like pytest?",shortAnswer:"Use subprocess.run(['python', 'my_module.py', 'arg1'], capture_output=True, text=True).",explanation:"subprocess runs the module in a fresh process where __name__ == '__main__', capturing stdout and exit codes.",hint:"Use subprocess.run() to test CLI execution.",level:"complex",codeExample:`import subprocess
res = subprocess.run(['python', 'app.py', '100'], capture_output=True, text=True)
assert 'INR 200' in res.stdout`},{question:"Is '__main__' a built-in module in Python?",shortAnswer:"Yes, sys.modules['__main__'] exists and represents the top-level script environment.",explanation:"You can inspect attributes of the running script via sys.modules['__main__'].",hint:"sys.modules['__main__'] holds the top-level environment.",level:"complex",codeExample:`import sys
print(sys.modules['__main__'])`},{question:"What is the standard naming convention for the entry point function called by the main guard?",shortAnswer:"def main(): or def cli():",explanation:"Standard naming makes the code immediately understandable to any Python developer.",hint:"def main():",level:"basic",codeExample:`def main(): pass
if __name__ == '__main__': main()`},{question:"What error occurs if you write 'if __name__ = '__main__':' with a single equals sign?",shortAnswer:"SyntaxError: invalid syntax (assignment inside if statement is invalid; use == for equality comparison).",explanation:"Comparison requires double equals '=='.",hint:"Use '==' for comparison, not '='.",level:"basic",codeExample:"# SyntaxError: if __name__ = '__main__':"},{question:"How do you run a package's __main__.py file from the terminal?",shortAnswer:"python -m package_name",explanation:"When you execute a directory or zip archive with -m, Python looks for and executes its __main__.py file.",hint:"python -m package_name runs __main__.py.",level:"moderate",codeExample:`# Inside my_package/__main__.py:
# Executed via: python -m my_package`},{question:"Can you pass keyword arguments via sys.argv in the command line?",shortAnswer:"sys.argv only provides raw string tokens; parsing keyword flags like '--rate=0.18' requires manual splitting or argparse.",explanation:"sys.argv is a raw list of strings ['--rate=0.18']; argparse parses it into args.rate = 0.18.",hint:"sys.argv is raw strings; use argparse for flags.",level:"basic",codeExample:`import sys
# sys.argv is a raw list of string tokens`},{question:`Why is 'if __name__ == "__main__":' considered a hallmark of professional Python code quality?`,shortAnswer:"It guarantees that files are modular, safely testable, reusable across frameworks, and free of unintended execution side effects.",explanation:"Code written with main guards can be effortlessly integrated into larger applications without rewriting.",hint:"Guarantees modularity, reusability, and safe imports.",level:"basic",codeExample:"# Essential standard across all professional Python codebases"}];function A(){const l=o.useRef([]),[a,d]=o.useState("modes"),[n,c]=o.useState("direct");o.useEffect(()=>{const s=new IntersectionObserver(i=>{i.forEach(m=>{m.isIntersecting&&m.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return l.current.forEach(i=>{i&&s.observe(i)}),()=>s.disconnect()},[]);const t=s=>{s&&!l.current.includes(s)&&l.current.push(s)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:t,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 2 • Module 002_009"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 4"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Modules, Packages & Python Standard Library"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-teal-400 font-mono",children:"if __name__ == '__main__':"})," Idiom Explained"]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Demystify Python's most ubiquitous idiom: dynamic ",e.jsx("code",{className:"text-teal-300 font-mono",children:"__name__"})," assignment, eliminating import side-effect pollution, building dual-purpose modules (pure library + interactive CLI tool), and embedding self-testing assertion benchmarks."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🎯 Direct ('__main__') vs Import ('module_name')"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Zero Side-Effect Safe Imports"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🧰 Dual-Purpose Module Architecture"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🧪 Embedded Unit Testing & Benchmarks"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚙️"}),e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:["1. The Execution Context & ",e.jsx("code",{className:"text-teal-400 font-mono",children:"__name__"})," Variable"]})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["Before Python executes a single line of a file, CPython automatically sets the special variable ",e.jsx("code",{className:"text-teal-400 font-mono",children:"__name__"})," based on ",e.jsx("strong",{children:"HOW"})," the file was invoked:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg shadow-teal-950/30",children:[e.jsxs("div",{className:"flex items-center gap-2 text-teal-400 font-bold text-base mb-2",children:[e.jsx("span",{children:"💻"})," Direct Execution from Terminal"]}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-2",children:"python fee_calculator.py"}),e.jsxs("div",{className:"text-xs text-slate-300 space-y-1",children:[e.jsxs("div",{children:["Python sets: ",e.jsx("code",{className:"text-emerald-300 font-bold",children:'__name__ = "__main__"'})]}),e.jsxs("div",{children:["Condition: ",e.jsx("code",{className:"text-emerald-400 font-bold",children:"True"})," (Guard executes!)"]}),e.jsx("div",{className:"text-slate-400 pt-1",children:"Runs CLI arguments, interactive prompts, and self-tests."})]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg shadow-purple-950/30",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base mb-2",children:[e.jsx("span",{children:"📦"})," Imported by Another Script"]}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-2",children:"import fee_calculator"}),e.jsxs("div",{className:"text-xs text-slate-300 space-y-1",children:[e.jsxs("div",{children:["Python sets: ",e.jsx("code",{className:"text-cyan-300 font-bold",children:'__name__ = "fee_calculator"'})]}),e.jsxs("div",{children:["Condition: ",e.jsx("code",{className:"text-rose-400 font-bold",children:"False"})," (Guard is skipped!)"]}),e.jsx("div",{className:"text-slate-400 pt-1",children:"Only exports functions; zero console prints or side effects."})]})]})]}),e.jsxs("div",{className:"bg-rose-950/40 p-5 rounded-xl border-l-4 border-rose-500 border border-rose-900/60",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"The Side-Effect Import Disaster (Without the Guard)"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["If you put executable statements (",e.jsx("code",{className:"text-rose-200 font-mono",children:"print()"}),", database queries, GUI popups) at the root of a file without the guard, they will run ",e.jsx("strong",{children:"EVERY SINGLE TIME"})," another file imports your module!"]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"🧭"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Execution Contexts & Dual-Mode Modules"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>d("modes"),className:r("px-3 py-1.5 rounded-lg transition-all",a==="modes"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Dual Execution Modes"}),e.jsx("button",{onClick:()=>d("sideeffects"),className:r("px-3 py-1.5 rounded-lg transition-all",a==="sideeffects"?"bg-rose-900/50 text-rose-300 border border-rose-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Side Effect Disaster"}),e.jsx("button",{onClick:()=>d("dualpurpose"),className:r("px-3 py-1.5 rounded-lg transition-all",a==="dualpurpose"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Dual-Purpose Architecture"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining dynamic variable evaluation, execution guards, and production CLI design:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:a==="modes"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"DYNAMIC __name__ ASSIGNMENT IN CPYTHON"}),e.jsxs("g",{transform:"translate(30, 60)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"230",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"14",fontWeight:"bold",children:"Mode 1: Direct CLI Execution"}),e.jsx("text",{x:"20",y:"55",fill:"#f8fafc",fontSize:"12 font-mono",children:"python invoice_tool.py"}),e.jsx("rect",{x:"20",y:"80",width:"350",height:"55",rx:"6",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"35",y:"105",fill:"#34d399",fontSize:"12 font-mono",children:'CPython sets: __name__ = "__main__"'}),e.jsx("text",{x:"35",y:"125",fill:"#34d399",fontSize:"12 font-mono",children:"if __name__ == '__main__': → TRUE"}),e.jsx("text",{x:"20",y:"165",fill:"#ecfdf5",fontSize:"12",children:"✓ Executes CLI parser (sys.argv)"}),e.jsx("text",{x:"20",y:"190",fill:"#ecfdf5",fontSize:"12",children:"✓ Runs terminal demo and benchmark tests"})]}),e.jsxs("g",{transform:"translate(450, 60)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"230",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"14",fontWeight:"bold",children:"Mode 2: Module Import"}),e.jsx("text",{x:"20",y:"55",fill:"#f8fafc",fontSize:"12 font-mono",children:"import invoice_tool"}),e.jsx("rect",{x:"20",y:"80",width:"350",height:"55",rx:"6",fill:"#0f172a",stroke:"#475569"}),e.jsx("text",{x:"35",y:"105",fill:"#38bdf8",fontSize:"12 font-mono",children:'CPython sets: __name__ = "invoice_tool"'}),e.jsx("text",{x:"35",y:"125",fill:"#f43f5e",fontSize:"12 font-mono",children:"if __name__ == '__main__': → FALSE"}),e.jsx("text",{x:"20",y:"165",fill:"#ecfdf5",fontSize:"12",children:"✓ Exports functions cleanly into namespace"}),e.jsx("text",{x:"20",y:"190",fill:"#ecfdf5",fontSize:"12",children:"✓ Completely skips CLI and print statements!"})]})]}):a==="sideeffects"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#f43f5e",fontSize:"14",fontWeight:"bold",children:"THE IMPORT SIDE-EFFECT DISASTER (UNPROTECTED TOP-LEVEL CODE)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"13",fontWeight:"bold",children:"❌ Unprotected: script_a.py"}),e.jsx("text",{x:"20",y:"60",fill:"#fca5a5",fontSize:"12 font-mono",children:"def calc(): return 100"}),e.jsx("text",{x:"20",y:"85",fill:"#f43f5e",fontSize:"12 font-mono",children:'print("Connecting to DB...") # RAW PRINT!'}),e.jsx("text",{x:"20",y:"110",fill:"#f43f5e",fontSize:"12 font-mono",children:"run_heavy_backup()          # UNGUARDED!"}),e.jsx("rect",{x:"20",y:"140",width:"350",height:"75",rx:"6",fill:"#881337",stroke:"#e11d48"}),e.jsx("text",{x:"35",y:"165",fill:"#ffe4e6",fontSize:"11",children:"When web_app.py writes 'import script_a':"}),e.jsx("text",{x:"35",y:"185",fill:"#fca5a5",fontSize:"11 font-bold",children:"DATABASE CONNECTS & BACKUP RUNS!"}),e.jsx("text",{x:"35",y:"205",fill:"#ffe4e6",fontSize:"10",children:"Slows down startup and breaks test suites!"})]}),e.jsxs("g",{transform:"translate(450, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"✓ Guarded: script_a.py"}),e.jsx("text",{x:"20",y:"60",fill:"#34d399",fontSize:"12 font-mono",children:"def calc(): return 100"}),e.jsx("text",{x:"20",y:"85",fill:"#34d399",fontSize:"12 font-mono",children:"if __name__ == '__main__':"}),e.jsx("text",{x:"40",y:"110",fill:"#34d399",fontSize:"12 font-mono",children:'print("Connecting to DB...")'}),e.jsx("rect",{x:"20",y:"140",width:"350",height:"75",rx:"6",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"35",y:"165",fill:"#a7f3d0",fontSize:"11",children:"When web_app.py writes 'import script_a':"}),e.jsx("text",{x:"35",y:"185",fill:"#ecfdf5",fontSize:"11 font-bold",children:"ZERO SIDE EFFECTS (Safe & Clean)"}),e.jsx("text",{x:"35",y:"205",fill:"#a7f3d0",fontSize:"10",children:"Loads calc() instantly in microseconds!"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"DUAL-PURPOSE ARCHITECTURE (Web Backend Import + Terminal CLI)"}),e.jsxs("g",{transform:"translate(240, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"400",height:"110",rx:"8",fill:"#1e293b",stroke:"#38bdf8"}),e.jsx("text",{x:"20",y:"30",fill:"#bae6fd",fontSize:"13",fontWeight:"bold",children:"Core Module: tax_invoice.py"}),e.jsx("text",{x:"20",y:"60",fill:"#34d399",fontSize:"12 font-mono",children:"def calculate_gst(amount): ..."}),e.jsx("text",{x:"20",y:"85",fill:"#34d399",fontSize:"12 font-mono",children:"def format_invoice(data): ..."})]}),e.jsxs("g",{transform:"translate(50, 180)",children:[e.jsx("rect",{x:"0",y:"0",width:"350",height:"110",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"Consumer 1: Web / API Backend"}),e.jsx("text",{x:"20",y:"55",fill:"#ecfdf5",fontSize:"11 font-mono",children:"from tax_invoice import calculate_gst"}),e.jsx("text",{x:"20",y:"80",fill:"#cbd5e1",fontSize:"11",children:"FastAPI endpoint returns JSON response"})]}),e.jsxs("g",{transform:"translate(480, 180)",children:[e.jsx("rect",{x:"0",y:"0",width:"350",height:"110",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"13",fontWeight:"bold",children:"Consumer 2: Terminal Operator (CLI)"}),e.jsx("text",{x:"20",y:"55",fill:"#f8fafc",fontSize:"11 font-mono",children:"python tax_invoice.py 9402 12000"}),e.jsx("text",{x:"20",y:"80",fill:"#cbd5e1",fontSize:"11",children:"Prints formatted ASCII receipt to terminal"})]})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:["3. Interactive ",e.jsx("code",{className:"text-teal-400 font-mono",children:"__name__"})," Execution Simulator"]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Toggle between Direct Execution and Import Mode to observe how Python dynamically evaluates the execution guard:"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6",children:[e.jsxs("button",{onClick:()=>c("direct"),className:r("p-4 rounded-xl border text-left transition-all",n==="direct"?"bg-teal-950 border-teal-500 text-teal-200 shadow-lg shadow-teal-950":"bg-slate-950 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"text-sm font-mono font-bold text-teal-300 mb-1",children:"💻 Direct CLI Execution Mode"}),e.jsx("code",{className:"text-xs text-slate-400",children:"python fee_manager.py"})]}),e.jsxs("button",{onClick:()=>c("imported"),className:r("p-4 rounded-xl border text-left transition-all",n==="imported"?"bg-purple-950 border-purple-500 text-purple-200 shadow-lg shadow-purple-950":"bg-slate-950 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"text-sm font-mono font-bold text-purple-300 mb-1",children:"📦 Imported Module Mode"}),e.jsx("code",{className:"text-xs text-slate-400",children:"import fee_manager"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1",children:"CPython Evaluated __name__ Value"}),e.jsxs("code",{className:"text-base font-mono font-bold text-teal-300 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 block",children:['__name__ = "',n==="direct"?"__main__":"fee_manager",'"']})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1",children:"Guard Condition Result"}),e.jsxs("span",{className:r("inline-block text-xs font-mono font-bold px-3 py-1 rounded-full border",n==="direct"?"text-emerald-300 bg-emerald-950/80 border-emerald-800":"text-rose-400 bg-rose-950/80 border-rose-800"),children:["if __name__ == '__main__': → ",n==="direct"?"TRUE (Executes Block)":"FALSE (Skips Block)"]})]}),e.jsx("div",{className:"text-xs text-slate-300 leading-relaxed pt-2",children:n==="direct"?"Direct invocation runs the self-testing demo and CLI parser, outputting formatted calculations directly to the console.":"Importing loads all function definitions into memory cleanly with zero console pollution or side effects."})]}),e.jsxs("div",{className:"space-y-2 flex flex-col justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block",children:"Terminal Output Stream"}),e.jsx("pre",{className:"p-4 bg-slate-900 rounded-lg border border-slate-800 text-emerald-300 font-mono text-xs overflow-x-auto whitespace-pre-wrap flex-1",children:n==="direct"?`=======================================================
               CODER & ACCOTAX - SELF-TEST
=======================================================
Gross Course Fee   : INR 12,000.00
18% GST Assessment : +INR 2,160.00
Net Total Payable  : INR 14,160.00
[PASSED] All internal unit tests passed successfully!`:`(Silent Execution - 0 lines printed to console)
Module 'fee_manager' loaded into sys.modules successfully.
Functions available: fee_manager.calculate_fee()`})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Practical Use Cases for the Main Guard"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Use Case"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"What is Placed Inside Guard"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Behavior When Imported"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Behavior When Run Directly"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"Dual-Mode CLI Tool"}),e.jsxs("td",{className:"py-3 px-4",children:[e.jsx("code",{className:"text-teal-300",children:"sys.argv"})," or ",e.jsx("code",{className:"text-teal-300",children:"argparse"})," parser"]}),e.jsx("td",{className:"py-3 px-4",children:"Functions imported as library"}),e.jsx("td",{className:"py-3 px-4",children:"Interactive command-line tool"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-300 font-semibold",children:"Self-Testing Assertions"}),e.jsx("td",{className:"py-3 px-4",children:e.jsx("code",{className:"text-emerald-300",children:"assert func(x) == expected"})}),e.jsx("td",{className:"py-3 px-4",children:"Zero test overhead"}),e.jsx("td",{className:"py-3 px-4",children:"Instant unit test verification"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"Algorithm Benchmarking"}),e.jsxs("td",{className:"py-3 px-4",children:[e.jsx("code",{className:"text-cyan-300",children:"time.perf_counter()"})," timer"]}),e.jsx("td",{className:"py-3 px-4",children:"Zero timing overhead"}),e.jsx("td",{className:"py-3 px-4",children:"Measures execution latency"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Multiprocessing Safety"}),e.jsxs("td",{className:"py-3 px-4",children:[e.jsx("code",{className:"text-purple-300",children:"multiprocessing.Process"})," spawn"]}),e.jsx("td",{className:"py-3 px-4",children:"Prevents infinite fork loops"}),e.jsx("td",{className:"py-3 px-4",children:"Spawns child processes cleanly"})]})]})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating dunder name mechanics, dual-purpose FX currency tools, unit test assertions, and GST tax invoice CLI generators:"}),e.jsx(x,{files:[{filename:"dunder_name_idiom_mechanics.py",code:h,description:"Exploring __name__ dynamic assignment and preventing unwanted top-level code execution on import."},{filename:"reusable_library_and_cli_tool.py",code:f,description:"Dual-purpose currency conversion library with interactive sys.argv terminal argument parsing."},{filename:"unit_testing_and_benchmarking_guard.py",code:g,description:"Self-testing unit assertions and algorithm micro-benchmarking inside main guards."},{filename:"tax_invoice_cli_and_module.py",code:b,description:"Enterprise GST tax invoice generator and interactive terminal CLI tool."}]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Single Equals Assignment Typo"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"if __name__ = '__main__':"})," causes a fatal ",e.jsx("code",{className:"text-rose-300 font-mono",children:"SyntaxError"})," because single equals is an assignment operator!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always use double equals: ",e.jsx("code",{className:"text-emerald-300",children:"if __name__ == '__main__':"})]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Defining Functions Inside the Guard"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"If you place function definitions inside the main guard, they will NOT exist when another script imports your module!"}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Define functions globally; only put execution calls inside the guard."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Multiprocessing Infinite Loops on Windows"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Spawning multiprocessing workers without the guard on Windows triggers an infinite fork bomb because child processes re-execute the file."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always wrap multiprocessing entry points inside the main guard."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Global Variable Pollution in Guard"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Declaring raw variables inside the guard block makes them global module variables, creating accidental leaks."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Wrap logic inside ",e.jsx("code",{className:"text-emerald-300",children:"def main():"})," and call ",e.jsx("code",{className:"text-emerald-300",children:"main()"}),"."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering dunder name evaluation, import side effects, dual-mode architectures, and multiprocessing guards:"}),e.jsx(u,{questions:v})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with execution context tables, CLI templates, and self-testing recipes:"}),e.jsx("div",{className:"mb-10",children:e.jsx(p,{content:y,filename:"python_topic4_main_guard_idiom_notes.txt",title:"Print Topic 4 Study Notes"})}),e.jsx(_,{})]})]})]})}export{A as default};
