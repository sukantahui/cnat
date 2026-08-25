import{b as r,j as e,bg as i}from"./vendor-react-core-Doz9nIC6.js";import{P as I}from"./PythonFileLoader-hCi5osN-.js";import{P as R}from"./PlainTextPrint-C08xhKA4.js";import{F as D}from"./FAQTemplate-CkSqDH4B.js";import{T as O}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const C=`# topic2_files/decorator_syntax_and_wrapping.py\r
# Module: 003_003_decorators-generators\r
# Topic: Understanding Decorators: Concept and @decorator syntax\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 2 - File 1: Decorator Concept & @decorator Syntactic Sugar\r
Demonstrates:\r
  1. What a Decorator is (A higher-order function that takes a function and returns a wrapper)\r
  2. How \`@decorator\` syntax is identical to \`func = decorator(func)\`\r
  3. Writing a clean execution banner and logging decorator\r
"""\r
\r
def banner_logger_decorator(original_func):\r
    """Decorator that wraps a function with visual execution banners."""\r
\r
    def wrapper():\r
        print(f"\\n>>> [START OF EXECUTION]: {original_func.__name__}() <<<")\r
        result = original_func()\r
        print(f">>> [END OF EXECUTION]: {original_func.__name__}() <<<\\n")\r
        return result\r
\r
    return wrapper\r
\r
\r
# 1. Manual Wrapping (Without @ Syntax):\r
def manual_generate_report():\r
    print("  [REPORT GENERATOR] Compiling Institutional Daily Attendance...")\r
    return "ATTENDANCE_OK"\r
\r
# Applying decorator manually:\r
decorated_report = banner_logger_decorator(manual_generate_report)\r
\r
\r
# 2. Modern Pythonic @decorator Syntax (Identical to manual wrapping!):\r
@banner_logger_decorator\r
def automated_generate_report():\r
    print("  [REPORT GENERATOR] Compiling Certified Revenue & Tuition Audit...")\r
    return "REVENUE_OK"\r
\r
\r
def demonstrate_decorator_syntax():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - DECORATOR SYNTAX & WRAPPING FUNDAMENTALS")\r
    print("=" * 70)\r
\r
    # 1. Calling manually decorated function:\r
    print("1. Invoking Manually Wrapped Function (\`decorated_report = decorator(func)\`):")\r
    res1 = decorated_report()\r
    print(f"   Returned Result: {res1}")\r
\r
    # 2. Calling function decorated with \`@\` syntax:\r
    print("2. Invoking Function with \`@banner_logger_decorator\` Syntactic Sugar:")\r
    res2 = automated_generate_report()\r
    print(f"   Returned Result: {res2}")\r
\r
    print(r"""\r
The Fundamental Equivalence:\r
  @my_decorator\r
  def target_function():\r
      pass\r
\r
  Is 100% equivalent to:\r
  def target_function():\r
      pass\r
  target_function = my_decorator(target_function)\r
""")\r
    print("[PASSED] Decorator Syntax & Wrapping Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_decorator_syntax()\r
`,P=`# topic2_files/decorating_functions_with_arguments.py\r
# Module: 003_003_decorators-generators\r
# Topic: Understanding Decorators: Concept and @decorator syntax\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 2 - File 2: Universal Decorators with \`*args\` and \`**kwargs\`\r
Demonstrates:\r
  1. Wrapping functions that accept arbitrary positional and keyword arguments\r
  2. Always capturing and returning the wrapped function's return value\r
  3. High-precision performance timing with \`time.perf_counter()\`\r
"""\r
\r
import time\r
\r
def performance_timer_decorator(original_func):\r
    """Decorator that measures and logs the high-precision execution duration of any function."""\r
\r
    # Universal Wrapper Envelope (*args, **kwargs):\r
    def wrapper(*args, **kwargs):\r
        start_time = time.perf_counter()\r
\r
        # Invoking original function with forwarded arguments:\r
        result = original_func(*args, **kwargs)\r
\r
        end_time = time.perf_counter()\r
        elapsed_ms = (end_time - start_time) * 1000.0\r
\r
        print(f"  [TIMER LOG] \`{original_func.__name__}\` executed in {elapsed_ms:.4f} ms")\r
\r
        # Crucial: Always return the original result!\r
        return result\r
\r
    return wrapper\r
\r
\r
@performance_timer_decorator\r
def calculate_single_student_discount(base_fee: float, scholarship_rate: float) -> float:\r
    """Calculates discounted fee for a single student."""\r
    time.sleep(0.005)  # Simulate brief processing latency\r
    return base_fee * (1.0 - scholarship_rate)\r
\r
\r
@performance_timer_decorator\r
def process_batch_student_records(records: list, campus_tax: float = 0.18) -> float:\r
    """Calculates total revenue across an entire batch of students."""\r
    time.sleep(0.010)  # Simulate batch processing latency\r
    total_raw = sum(r["fee"] for r in records)\r
    return total_raw * (1.0 + campus_tax)\r
\r
\r
def demonstrate_parameterized_decorating():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - DECORATING FUNCTIONS WITH ARGUMENTS (*args, **kwargs)")\r
    print("=" * 70)\r
\r
    # 1. Calling function with 2 positional arguments:\r
    print("1. Calling Parameterized Function \`calculate_single_student_discount(20000, 0.15)\`:")\r
    net_fee = calculate_single_student_discount(20000.0, 0.15)\r
    print(f"   Returned Net Payable: INR {net_fee:,.2f}\\n")\r
\r
    # 2. Calling function with list argument and keyword argument:\r
    print("2. Calling Batch Function with Keyword Argument:")\r
    batch = [\r
        {"id": "STU-101", "fee": 18000.0},\r
        {"id": "STU-102", "fee": 22000.0},\r
        {"id": "STU-103", "fee": 25000.0}\r
    ]\r
    total_rev = process_batch_student_records(batch, campus_tax=0.18)\r
    print(f"   Returned Total Batch Revenue: INR {total_rev:,.2f}")\r
\r
    print("\\n[PASSED] Parameterized Decorators Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_parameterized_decorating()\r
`,U=`# topic2_files/preserving_metadata_with_functools_wraps.py\r
# Module: 003_003_decorators-generators\r
# Topic: Understanding Decorators: Concept and @decorator syntax\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 2 - File 3: Metadata Preservation with \`functools.wraps\`\r
Demonstrates:\r
  1. The Metadata Erasure Trap: Why undecorated wrappers lose their identity\r
  2. How \`@functools.wraps(func)\` preserves \`__name__\`, \`__doc__\`, and \`__annotations__\`\r
  3. Accessing the unwrapped primordial function via \`__wrapped__\`\r
"""\r
\r
import functools\r
\r
# ❌ BAD: Decorator without functools.wraps (Erases Metadata!)\r
def flawed_audit_decorator(func):\r
    def wrapper(*args, **kwargs):\r
        """Generic wrapper docstring (Overwrites original docstring!)."""\r
        print(f"  [FLAWED AUDIT] Called: {func.__name__}")\r
        return func(*args, **kwargs)\r
    return wrapper\r
\r
\r
# ✓ GOOD: Decorator with @functools.wraps (Preserves Metadata!)\r
def pythonic_audit_decorator(func):\r
    @functools.wraps(func)\r
    def wrapper(*args, **kwargs):\r
        print(f"  [PYTHONIC AUDIT] Called: {func.__name__}")\r
        return func(*args, **kwargs)\r
    return wrapper\r
\r
\r
# Applying Flawed Decorator:\r
@flawed_audit_decorator\r
def calculate_scholarship_fund(total_corpus: float, share_pct: float) -> float:\r
    """Calculates allocation from institutional scholarship corpus."""\r
    return total_corpus * share_pct\r
\r
\r
# Applying Pythonic Decorator:\r
@pythonic_audit_decorator\r
def calculate_infrastructure_fund(total_corpus: float, share_pct: float) -> float:\r
    """Calculates allocation for campus lab and AI classroom infrastructure."""\r
    return total_corpus * share_pct\r
\r
\r
def demonstrate_metadata_preservation():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - METADATA PRESERVATION WITH \`functools.wraps\`")\r
    print("=" * 70)\r
\r
    # 1. Inspecting Function Decorated with Flawed Decorator:\r
    print("1. Inspecting Function Decorated WITHOUT @functools.wraps:")\r
    print(f"   * \`__name__\` : '{calculate_scholarship_fund.__name__}' (LOST! Replaced with 'wrapper')")\r
    print(f"   * \`__doc__\`  : '{calculate_scholarship_fund.__doc__}' (ERASED!)\\n")\r
\r
    # 2. Inspecting Function Decorated WITH @functools.wraps:\r
    print("2. Inspecting Function Decorated WITH @functools.wraps:")\r
    print(f"   * \`__name__\` : '{calculate_infrastructure_fund.__name__}' (PRESERVED!)")\r
    print(f"   * \`__doc__\`  : '{calculate_infrastructure_fund.__doc__}' (PRESERVED!)")\r
    print(f"   * Has \`__wrapped__\` attribute: {hasattr(calculate_infrastructure_fund, '__wrapped__')}")\r
    print(f"   * Direct Unwrapped Call: INR {calculate_infrastructure_fund.__wrapped__(100000.0, 0.25):,.2f}")\r
\r
    print("\\n[PASSED] Metadata Preservation with functools.wraps Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_metadata_preservation()\r
`,M=`# topic2_files/institutional_admission_telemetry_decorator_suite.py\r
# Module: 003_003_decorators-generators\r
# Topic: Understanding Decorators: Concept and @decorator syntax\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 2 - File 4: Institutional Admission & Telemetry Decorator Suite (Case Study)\r
Demonstrates:\r
  1. Stacking multiple orthogonal decorators: Validation, Timing, and Auditing\r
  2. Input argument validation and security enforcement via decorators\r
  3. Generating real-time telemetry logs for institutional admissions\r
"""\r
\r
import functools\r
import time\r
import re\r
from typing import Dict, Any\r
\r
# =====================================================================\r
# PRODUCTION DECORATORS\r
# =====================================================================\r
def validate_student_id_format(func):\r
    """Enforces that candidate student ID matches 'STU-XXXX' regex pattern."""\r
    @functools.wraps(func)\r
    def wrapper(student_id: str, *args, **kwargs):\r
        if not isinstance(student_id, str) or not re.match(r"^STU-\\d{3,6}$", student_id):\r
            raise ValueError(f"[VALIDATION FAILED] Invalid Student ID format: '{student_id}'. Expected 'STU-XXXX'!")\r
        return func(student_id, *args, **kwargs)\r
    return wrapper\r
\r
\r
def forensic_admission_audit(func):\r
    """Logs full input parameters, timestamp, and returned registration status."""\r
    @functools.wraps(func)\r
    def wrapper(*args, **kwargs):\r
        func_name = func.__name__\r
        print(f"  [FORENSIC AUDIT ENTRY] Executing \`{func_name}\` | Positional Args: {args} | Keyword Args: {kwargs}")\r
\r
        result = func(*args, **kwargs)\r
\r
        print(f"  [FORENSIC AUDIT EXIT] \`{func_name}\` Completed -> Status: {result.get('status', 'OK')}")\r
        return result\r
    return wrapper\r
\r
\r
def measure_admission_latency(func):\r
    """Measures microsecond latency for mission-critical student onboarding."""\r
    @functools.wraps(func)\r
    def wrapper(*args, **kwargs):\r
        start = time.perf_counter()\r
        result = func(*args, **kwargs)\r
        elapsed_us = (time.perf_counter() - start) * 1_000_000.0\r
        print(f"  [LATENCY TELEMETRY] \`{func.__name__}\` finished in {elapsed_us:.2f} microseconds")\r
        return result\r
    return wrapper\r
\r
\r
# =====================================================================\r
# DECORATED ADMISSION SERVICE FUNCTION\r
# =====================================================================\r
@validate_student_id_format\r
@forensic_admission_audit\r
@measure_admission_latency\r
def onboard_new_candidate(student_id: str, student_name: str, course_name: str, deposit: float) -> Dict[str, Any]:\r
    """Official student onboarding service with automated validation, telemetry, and auditing."""\r
    if deposit < 5000.0:\r
        raise ValueError(f"Minimum enrollment deposit is INR 5,000.00, received INR {deposit:,.2f}")\r
\r
    return {\r
        "student_id": student_id,\r
        "name": student_name,\r
        "course": course_name,\r
        "deposit": deposit,\r
        "status": "ACTIVE_ENROLLED"\r
    }\r
\r
\r
def run_decorator_suite_demo():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - ADMISSION TELEMETRY DECORATOR SUITE")\r
    print("=" * 70)\r
\r
    # 1. Valid Candidate Onboarding\r
    print("1. Onboarding Valid Candidate (Sourav Mukherjee):")\r
    record1 = onboard_new_candidate("STU-101", "Sourav Mukherjee", "Python Full-Stack & AI", 18000.0)\r
    print(f"   Candidate Record Generated: {record1}\\n")\r
\r
    # 2. Testing Invalid Student ID (Fails in \`@validate_student_id_format\`)\r
    print("2. Testing Invalid Student ID ('INVALID_REG_ID'):")\r
    try:\r
        onboard_new_candidate("INVALID_REG_ID", "Priyanka Sen", "Python Full-Stack & AI", 18000.0)\r
    except ValueError as err:\r
        print(f"   [BLOCKED BY DECORATOR GUARD] {err}\\n")\r
\r
    # 3. Testing Underpaid Deposit\r
    print("3. Testing Underpaid Deposit (INR 2,000 against INR 5,000 min):")\r
    try:\r
        onboard_new_candidate("STU-102", "Rahul Verma", "Python Core", 2000.0)\r
    except ValueError as err:\r
        print(f"   [BLOCKED BY BUSINESS RULE] {err}")\r
\r
    print("\\n[PASSED] Institutional Admission Telemetry Decorator Suite Verified.")\r
\r
\r
if __name__ == "__main__":\r
    run_decorator_suite_demo()\r
`,W=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_003: DECORATORS & GENERATORS\r
          TOPIC 2: UNDERSTANDING DECORATORS & @DECORATOR SYNTAX IN PYTHON\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. THE UNIVERSAL DECORATOR TEMPLATE\r
--------------------------------------------------------------------------------\r
  import functools\r
\r
  def my_decorator(func):\r
      @functools.wraps(func)  # Mandatory to preserve __name__ and __doc__!\r
      def wrapper(*args, **kwargs):\r
          # 1. Pre-execution logic\r
          print("Before function execution")\r
\r
          # 2. Execute original function\r
          result = func(*args, **kwargs)\r
\r
          # 3. Post-execution logic\r
          print("After function execution")\r
\r
          # 4. Mandatory return!\r
          return result\r
      return wrapper\r
\r
--------------------------------------------------------------------------------\r
2. THE \`@\` SYNTACTIC SUGAR EQUIVALENCE\r
--------------------------------------------------------------------------------\r
  @my_decorator\r
  def process():\r
      pass\r
\r
  # Identical to:\r
  # def process(): pass\r
  # process = my_decorator(process)\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 2: PYTHON DECORATORS SYNTAX\r
================================================================================\r
`,F=[{question:"What is a Decorator in Python?",shortAnswer:"A higher-order function that takes another function as an argument, extends or alters its behavior without modifying its source code, and returns a new callable wrapper function object.",explanation:"A clean implementation of the structural Decorator Pattern.",hint:"A function that takes a function, adds functionality, and returns a wrapper.",level:"basic",codeExample:`@my_decorator
def greet(): print('Hello')`},{question:"What is the '@decorator' syntax equivalent to in standard Python code?",shortAnswer:"Writing '@dec' above 'def foo(): ...' is 100% equivalent to 'foo = dec(foo)'.",explanation:"Syntactic sugar introduced in PEP 318.",hint:"It is equivalent to: target_func = decorator(target_func).",level:"basic",codeExample:`# @my_dec
# def foo(): ...
# Equivalent to: foo = my_dec(foo)`},{question:"Why should wrapper functions in decorators almost always accept '*args, **kwargs'?",shortAnswer:"To make the decorator universal, allowing it to wrap functions that accept any number of positional or keyword arguments without raising TypeError signature mismatch errors.",explanation:"Ensures reusable decorator design.",hint:"To support decorating any function regardless of its argument signature.",level:"basic",codeExample:`def wrapper(*args, **kwargs):
    return func(*args, **kwargs)`},{question:"What happens if a decorator wrapper executes 'func(*args, **kwargs)' but forgets to 'return' the result?",shortAnswer:"The decorated function will execute correctly, but will silently return 'None' to its caller instead of its actual computed return value!",explanation:"One of the most frequent beginner decorator bugs.",hint:"The caller will receive None instead of the real return value.",level:"basic",codeExample:`# BUG: def wrapper(): func()  # Returns None!
# FIX: def wrapper(): return func()`},{question:"What is the 'Metadata Erasure Trap' in Python decorators?",shortAnswer:"When a function is decorated without '@functools.wraps', its '__name__', '__doc__', and '__annotations__' attributes are overwritten by the generic inner 'wrapper' function's attributes, breaking help(), docstrings, and IDE introspection.",explanation:"Erases the identity of the original function.",hint:"The decorated function's __name__ becomes 'wrapper' and __doc__ is lost.",level:"moderate",codeExample:"# Without wraps: print(add.__name__) -> 'wrapper'"},{question:"How does '@functools.wraps(func)' solve the metadata erasure problem?",shortAnswer:"It copies the original function's '__name__', '__doc__', '__module__', '__annotations__', and sets '__wrapped__' onto the inner wrapper function, preserving its true identity.",explanation:"Standard library utility for writing professional decorators.",hint:"It copies the original function's metadata onto the wrapper.",level:"basic",codeExample:`import functools
@functools.wraps(func)
def wrapper(*args, **kwargs): ...`},{question:"What does the '__wrapped__' attribute on a decorated function provide?",shortAnswer:"It points directly to the original primordial un-decorated function object, allowing developers and test suites to bypass the decorator wrapper and invoke the raw function directly.",explanation:"Populated automatically by @functools.wraps.",hint:"Provides direct access to the original un-wrapped function object.",level:"moderate",codeExample:"raw_result = decorated_func.__wrapped__(*args)"},{question:"In what order do stacked decorators execute?",shortAnswer:"Decorators wrap from BOTTOM to TOP (closest to function first), but during runtime invocation, they execute from TOP to BOTTOM (outermost decorator runs first).",explanation:"@A @B def f() -> f = A(B(f)). A wraps the result of B.",hint:"Wrap bottom-to-top; execute top-to-bottom.",level:"moderate",codeExample:`# @dec_a
# @dec_b
# def f(): -> A runs first, then B, then f`},{question:"Can a decorator modify the arguments passed into the decorated function?",shortAnswer:"Yes. The wrapper function can sanitize, validate, or transform the arguments in 'args' and 'kwargs' before passing them into 'func(*args, **kwargs)'.",explanation:"Commonly used for argument casting, stripping whitespace, or security validation.",hint:"Yes, by modifying args/kwargs before calling the original function.",level:"basic",codeExample:`clean_args = [x.strip() for x in args]
return func(*clean_args, **kwargs)`},{question:"Can a decorator alter or post-process the return value of a function?",shortAnswer:"Yes. The wrapper can capture 'res = func(*args, **kwargs)', apply transformations (e.g. converting to JSON, rounding decimals, encrypting), and return the modified result.",explanation:"Enables output formatting and response post-processing.",hint:"Yes, capture result = func() and transform it before returning.",level:"basic",codeExample:`res = func(*args)
return round(res, 2)`},{question:"Can a decorator prevent the decorated function from executing entirely?",shortAnswer:"Yes. If an authorization check or rate limit fails inside the wrapper, the wrapper can raise an exception or return an error response without ever calling 'func()'.",explanation:"Core mechanism for authentication guards and caching.",hint:"Yes, by raising an error or returning early without calling func().",level:"basic",codeExample:`if not user.is_authenticated: raise PermissionError
return func(*args)`},{question:"When is the decorator function itself executed?",shortAnswer:"At module IMPORT / DEFINITION time (when the function is defined), NOT at function invocation time; only the returned wrapper function executes on each call.",explanation:"A critical distinction between setup-time and runtime.",hint:"The decorator runs once at definition time; the wrapper runs on every call.",level:"complex",codeExample:"# Decorator outer body runs when module loads"},{question:"Can a class method inside an OOP class be decorated with a standard decorator?",shortAnswer:"Yes. The method's 'self' reference will simply be passed as the very first argument in '*args' to the wrapper function.",explanation:"Standard decorators work seamlessly on instance methods.",hint:"Yes, 'self' is passed as the first positional argument in args.",level:"moderate",codeExample:`class Account:
    @timer
    def pay(self, amt): ...`},{question:"What is the difference between a function decorator and a class decorator?",shortAnswer:"A function decorator wraps and returns a callable function; a class decorator takes a class object ('cls') as input, modifies its attributes/methods, and returns the modified class.",explanation:"Both use the @ syntax but target different constructs.",hint:"Function decorators wrap functions; class decorators modify entire classes.",level:"moderate",codeExample:`@dataclass
class Student: ...`},{question:"What built-in decorators are commonly used in standard Python?",shortAnswer:"'@property', '@classmethod', '@staticmethod', '@functools.lru_cache', and '@dataclasses.dataclass'.",explanation:"Standard library tools implemented as decorators.",hint:"@property, @classmethod, @staticmethod, @lru_cache.",level:"basic",codeExample:`@classmethod
def from_string(cls, s): ...`},{question:"Why is a decorator preferred over manually placing logging code inside 20 different functions?",shortAnswer:"Because decorators adhere to the DRY (Don't Repeat Yourself) principle and Single Responsibility Principle, separating cross-cutting concerns (logging, timing, auth) from core business logic.",explanation:"Eliminates duplicate boilerplate across the entire codebase.",hint:"Adheres to DRY and separates cross-cutting concerns from business logic.",level:"basic",codeExample:"# Write logging once in @logger; apply to 20 functions"},{question:"How can a decorator implement basic caching / memoization?",shortAnswer:"By storing a dictionary in the enclosing closure scope, using 'args' as a dictionary key, and returning the cached value if the key already exists before calling 'func()'.",explanation:"The foundation of functools.lru_cache.",hint:"Using a closure dictionary to store previous results by argument tuple key.",level:"moderate",codeExample:`cache = {}
if args in cache: return cache[args]`},{question:"Can a decorator catch and handle exceptions raised by the decorated function?",shortAnswer:"Yes. The wrapper can wrap the 'func(*args, **kwargs)' call inside a 'try...except' block to log errors, retry failed network calls, or return safe default fallbacks.",explanation:"Commonly used in resilience decorators (retry, fallback).",hint:"Yes, by placing a try...except around the func() call in the wrapper.",level:"basic",codeExample:`try: return func(*args)
except TimeoutError: return fallback()`},{question:"What is an 'Identity Decorator'?",shortAnswer:"A decorator that simply registers or inspects a function and returns the original function unaltered ('return func') without creating an inner wrapper.",explanation:"Often used for route registration in web frameworks (e.g. Flask/FastAPI @app.route).",hint:"A decorator that registers the function and returns it without wrapping.",level:"complex",codeExample:`def register(func):
    REGISTRY.append(func)
    return func`},{question:"How does 'pytest.fixture' use decorators?",shortAnswer:"It decorates setup functions to mark them as dependency injection fixtures, providing test data and resources to test functions automatically.",explanation:"Core pattern in modern test frameworks.",hint:"Marks setup functions for dependency injection in tests.",level:"moderate",codeExample:`@pytest.fixture
def student_db(): return DB()`},{question:"Can a decorator accept custom arguments (e.g. '@retry(max_attempts=3)')?",shortAnswer:"Yes. This requires a 3-layer nested decorator factory: the outermost function takes the arguments, the middle function takes the target function, and the innermost function is the wrapper.",explanation:"Topic 4 will explore decorators with arguments in depth.",hint:"Yes, via a 3-layer decorator factory function.",level:"moderate",codeExample:`def repeat(num):
    def decorator(fn):
        def wrapper(): ...
        return wrapper
    return decorator`},{question:"What is the performance overhead of calling a decorated function?",shortAnswer:"It introduces one extra Python function call frame overhead (~100-200 nanoseconds), which is negligible for 99.9% of real-world applications.",explanation:"Extremely lightweight abstraction.",hint:"One extra frame call (~100-200 ns), negligible in practice.",level:"basic",codeExample:"# Negligible microsecond overhead"},{question:"How does Python inspect function signatures through decorators using the 'inspect' module?",shortAnswer:"'inspect.signature(decorated_func)' follows the '__wrapped__' chain established by '@functools.wraps', accurately extracting the original function's parameter names and type annotations.",explanation:"Crucial for frameworks like FastAPI and Pydantic.",hint:"inspect.signature() follows __wrapped__ to read original parameters.",level:"complex",codeExample:`import inspect
sig = inspect.signature(func)`},{question:"Why should you never write 'def wrapper(args, kwargs):' without stars '*'? ",shortAnswer:"Without stars, 'wrapper' expects exactly 2 positional arguments named 'args' and 'kwargs', crashing immediately when called with normal function arguments!",explanation:"Must always use *args and **kwargs with asterisks.",hint:"Missing stars treats args and kwargs as 2 ordinary positional parameters.",level:"basic",codeExample:`# WRONG: def wrapper(args, kwargs)
# RIGHT: def wrapper(*args, **kwargs)`},{question:"What is the ultimate golden rule for writing Python Decorators?",shortAnswer:"Always use '@functools.wraps(func)' on your wrapper, accept '*args, **kwargs' for universality, and always return the evaluated result of 'func(*args, **kwargs)'.",explanation:"The hallmark of robust, professional Python decorator engineering.",hint:"Use @functools.wraps, accept *args/**kwargs, and return the result.",level:"basic",codeExample:"# Professional, production-grade Python decorator"}];function K(){const u=r.useRef([]),[l,p]=r.useState("syntax"),[s,b]=r.useState("STU-101"),[x,w]=r.useState("Sourav Mukherjee"),[h,z]=r.useState("Full-Stack Python & AI"),[c,y]=r.useState(18e3),[g,N]=r.useState(!0),[f,j]=r.useState(!0),[m,v]=r.useState(!0),[o,T]=r.useState(!0),[_,E]=r.useState([]),[L,S]=r.useState(!0),A=()=>{const t=[];let n=!0;const d=performance.now();if(m&&t.push({type:"TIMER",text:"[TIMER START] Initializing high-precision performance counter for `onboard_candidate`..."}),f&&t.push({type:"AUDIT",text:`[FORENSIC AUDIT ENTRY] Executing \`onboard_candidate\` with args: ('${s}', '${x}', '${h}', INR ${c.toLocaleString()})`}),g&&(s.match(/^STU-\d{3,6}$/)?t.push({type:"VALIDATION",text:`[VALIDATION OK] Student ID '${s}' verified against institutional regex pattern.`}):(t.push({type:"ERROR",text:`[VALIDATION FAILED] ValueError: Invalid Student ID format '${s}'. Must match 'STU-XXXX'!`}),n=!1)),n&&(c<5e3?(t.push({type:"ERROR",text:`[BUSINESS RULE FAILED] ValueError: Minimum deposit is INR 5,000.00, received INR ${c.toLocaleString()}`}),n=!1):t.push({type:"CORE",text:`[CORE FUNCTION EXECUTED] Generated Admission Certificate for ${x} (${s}) in ${h}.`})),f&&t.push({type:"AUDIT",text:`[FORENSIC AUDIT EXIT] Completed -> Status: ${n?"ACTIVE_ENROLLED (200 OK)":"TRANSACTION_ABORTED"}`}),m){const k=((performance.now()-d)*10).toFixed(2);t.push({type:"TIMER",text:`[TIMER END] Execution finished in ${k} microseconds.`})}S(n),E(t)};r.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(d=>{d.isIntersecting&&d.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return u.current.forEach(n=>{n&&t.observe(n)}),()=>t.disconnect()},[]);const a=t=>{t&&!u.current.includes(t)&&u.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:a,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_003"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 2"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Decorators, Generators & Iterators"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Understanding Decorators & ",e.jsx("span",{className:"text-teal-400",children:"`@decorator` Syntax"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master the mechanics of Python function wrapping: understanding ",e.jsx("code",{className:"text-teal-300 font-mono",children:"@decorator"})," syntactic sugar, building universal ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"*args, **kwargs"})," wrappers, preserving function metadata with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"functools.wraps"}),", and decorator stacking."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"✨ @ Syntactic Sugar (fn = dec(fn))"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🌐 Universal *args, **kwargs Wrappers"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ functools.wraps Metadata Preservation"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🥞 Decorator Stacking Pipeline"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎨"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Anatomy of a Python Decorator"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["A ",e.jsx("strong",{children:"Decorator"})," is a design pattern implemented as a higher-order function that accepts a target function, wraps it with additional pre/post execution behavior, and returns the modified wrapper function:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ The @ Syntax"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"fn = decorator(fn)"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Syntactic sugar that replaces the original function with the wrapper."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ *args, **kwargs"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"def wrapper(*args, **kw):"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Universal envelope accepting and forwarding all arguments seamlessly."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ functools.wraps"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"@functools.wraps(func)"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Preserves ",e.jsx("code",{className:"text-purple-300 font-mono",children:"__name__"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"__doc__"}),", and ",e.jsx("code",{className:"text-purple-300 font-mono",children:"__wrapped__"}),"."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-rose-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Fatal Beginner Trap: Forgetting `return result`"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["If your wrapper executes ",e.jsx("code",{className:"text-teal-300 font-mono",children:"result = func(*args, **kwargs)"})," but forgets to ",e.jsx("code",{className:"text-teal-300 font-mono",children:"return result"}),", the decorated function will silently return ",e.jsx("code",{className:"text-rose-400 font-mono",children:"None"})," to every caller! Always return the evaluated result."]})]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Decorator Wrapping & Stacking Pipelines"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>p("syntax"),className:i("px-3 py-1.5 rounded-lg transition-all",l==="syntax"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"@ Sugar Transformation"}),e.jsx("button",{onClick:()=>p("envelope"),className:i("px-3 py-1.5 rounded-lg transition-all",l==="envelope"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Wrapper Execution Envelope"}),e.jsx("button",{onClick:()=>p("stacking"),className:i("px-3 py-1.5 rounded-lg transition-all",l==="stacking"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Decorator Stacking Order"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining syntactic transformation, runtime envelope wrapping, and multi-decorator stacking:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:l==="syntax"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"THE `@decorator` SYNTACTIC SUGAR TRANSFORMATION"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"What You Write in Source Code:"}),e.jsx("text",{x:"20",y:"65",fill:"#34d399",fontSize:"10 font-mono font-bold",children:"@audit_logger"}),e.jsx("text",{x:"20",y:"90",fill:"#ecfdf5",fontSize:"10 font-mono",children:"def enroll_student(student_id):"}),e.jsx("text",{x:"40",y:"115",fill:"#cbd5e1",fontSize:"10 font-mono",children:'print("Enrolling:", student_id)'}),e.jsx("text",{x:"40",y:"140",fill:"#cbd5e1",fontSize:"10 font-mono",children:'return "ENROLLED"'}),e.jsx("rect",{x:"20",y:"170",width:"340",height:"50",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"195",fill:"#34d399",fontSize:"9 font-mono",children:"Clean, declarative, and elegant syntax."})]}),e.jsxs("g",{transform:"translate(425, 140)",children:[e.jsx("text",{x:"0",y:"0",fill:"#2dd4bf",fontSize:"12",fontWeight:"bold",children:"equivalent to"}),e.jsx("text",{x:"25",y:"25",fill:"#38bdf8",fontSize:"26",fontWeight:"bold",children:"→"})]}),e.jsxs("g",{transform:"translate(480, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"370",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"What Python Interpreter Executes:"}),e.jsx("text",{x:"20",y:"65",fill:"#ecfdf5",fontSize:"10 font-mono",children:"def enroll_student(student_id):"}),e.jsx("text",{x:"40",y:"90",fill:"#cbd5e1",fontSize:"10 font-mono",children:"..."}),e.jsx("text",{x:"20",y:"125",fill:"#34d399",fontSize:"10 font-mono font-bold",children:"enroll_student = audit_logger("}),e.jsx("text",{x:"40",y:"150",fill:"#34d399",fontSize:"10 font-mono font-bold",children:"enroll_student"}),e.jsx("text",{x:"20",y:"175",fill:"#34d399",fontSize:"10 font-mono font-bold",children:")"}),e.jsx("rect",{x:"20",y:"190",width:"330",height:"35",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"30",y:"212",fill:"#c4b5fd",fontSize:"9 font-mono",children:"Rebinds identifier to returned wrapper object!"})]})]}):l==="envelope"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"UNIVERSAL WRAPPER ENVELOPE: `*args, **kwargs`"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"1. Pre-Execution Hook"}),e.jsx("text",{x:"15",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"def wrapper(*args, **kw):"}),e.jsx("text",{x:"25",y:"85",fill:"#34d399",fontSize:"9 font-mono",children:"t0 = perf_counter()"}),e.jsx("text",{x:"25",y:"105",fill:"#34d399",fontSize:"9 font-mono",children:"validate(args)"}),e.jsx("rect",{x:"15",y:"140",width:"220",height:"80",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"25",y:"165",fill:"#34d399",fontSize:"9 font-bold",children:"Intercept Arguments:"}),e.jsx("text",{x:"25",y:"185",fill:"#cbd5e1",fontSize:"8",children:"Logging, timing, or auth check."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"310",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. Core Function Call"}),e.jsx("text",{x:"310",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"result = func(*args, **kw)"}),e.jsx("text",{x:"310",y:"85",fill:"#38bdf8",fontSize:"9 font-mono",children:"# Executes original logic"}),e.jsx("rect",{x:"310",y:"140",width:"220",height:"80",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"320",y:"165",fill:"#38bdf8",fontSize:"9 font-bold",children:"Pure Execution:"}),e.jsx("text",{x:"320",y:"185",fill:"#cbd5e1",fontSize:"8",children:"Original function runs unaware."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"605",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"3. Post-Execution Hook"}),e.jsx("text",{x:"605",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"log_latency(perf_counter()-t0)"}),e.jsx("text",{x:"605",y:"85",fill:"#34d399",fontSize:"9 font-mono font-bold",children:"return result # CRUCIAL!"}),e.jsx("rect",{x:"605",y:"140",width:"200",height:"80",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"615",y:"165",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Forward Return Value:"}),e.jsx("text",{x:"615",y:"185",fill:"#cbd5e1",fontSize:"8",children:"Returns computed output."})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"DECORATOR STACKING ORDER: BOTTOM-UP WRAPPING, TOP-DOWN RUNTIME"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"400",height:"65",rx:"6",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"25",fill:"#fda4af",fontSize:"11 font-bold",children:"1. `@validate_params` (Runs 1st at runtime)"}),e.jsx("text",{x:"20",y:"48",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Enforces argument types and constraints before proceeding."}),e.jsx("rect",{x:"0",y:"85",width:"400",height:"65",rx:"6",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"20",y:"110",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. `@audit_logger` (Runs 2nd at runtime)"}),e.jsx("text",{x:"20",y:"133",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Logs forensic telemetry with timestamps."}),e.jsx("rect",{x:"0",y:"170",width:"400",height:"65",rx:"6",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"195",fill:"#99f6e4",fontSize:"11 font-bold",children:"3. `onboard_candidate()` [CORE FUNCTION]"}),e.jsx("text",{x:"20",y:"218",fill:"#34d399",fontSize:"8 font-mono",children:"Executes actual business database commit."})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"235",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"The Golden Stacking Rules"}),e.jsx("rect",{x:"20",y:"55",width:"340",height:"70",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"80",fill:"#34d399",fontSize:"10 font-bold",children:"1. Wrapping Order (Definition Time):"}),e.jsx("text",{x:"30",y:"100",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Wraps BOTTOM to TOP: `validate(audit(func))`"}),e.jsx("rect",{x:"20",y:"140",width:"340",height:"70",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"165",fill:"#34d399",fontSize:"10 font-bold",children:"2. Execution Order (Invocation Time):"}),e.jsx("text",{x:"30",y:"185",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Executes TOP to BOTTOM: Validate → Audit → Func!"})]})]})})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Admission Telemetry & Decorator Playground"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Configure student onboarding parameters and toggle stacked decorators to inspect runtime wrapper execution logs in real-time:"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold block",children:"1. Candidate Onboarding Parameters"}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"text-xs font-mono text-slate-400 block",children:"Student ID (Format: `STU-XXXX`):"}),e.jsx("input",{type:"text",value:s,onChange:t=>b(t.target.value),className:"w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs font-mono text-white focus:border-teal-500 focus:outline-none"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"text-xs font-mono text-slate-400 block",children:"Candidate Name:"}),e.jsx("input",{type:"text",value:x,onChange:t=>w(t.target.value),className:"w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs font-mono text-white focus:border-teal-500 focus:outline-none"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[e.jsx("span",{className:"text-slate-400",children:"Enrollment Deposit:"}),e.jsxs("span",{className:"text-teal-300 font-bold",children:["INR ",c.toLocaleString()]})]}),e.jsx("input",{type:"range",min:"2000",max:"30000",step:"1000",value:c,onChange:t=>y(Number(t.target.value)),className:"w-full accent-teal-500"})]}),e.jsxs("div",{className:"space-y-2 pt-2 border-t border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block",children:"2. Active Stacked Decorators (@):"}),e.jsxs("div",{className:"flex flex-col gap-1.5 text-xs font-mono text-slate-300",children:[e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:g,onChange:t=>N(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"@validate_student_id (Regex Pattern Guard)"})]}),e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:f,onChange:t=>j(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"@forensic_admission_audit (Entry/Exit Telemetry)"})]}),e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:m,onChange:t=>v(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"@measure_admission_latency (Microsecond Benchmark)"})]}),e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:o,onChange:t=>T(t.target.checked),className:"accent-purple-500 rounded"}),e.jsx("span",{className:"text-purple-300",children:"@functools.wraps (Preserve Metadata)"})]})]})]}),e.jsx("button",{onClick:A,className:"w-full py-2.5 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-lg text-xs font-mono transition-all shadow-lg shadow-teal-950/50",children:"Invoke `onboard_new_candidate(...)`"})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2 text-xs font-mono",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:"Introspected Decorated Function Attributes:"}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"`fn.__name__`:"}),e.jsx("span",{className:i("font-bold",o?"text-teal-300":"text-rose-400"),children:o?"onboard_new_candidate":"wrapper (METADATA ERASED!)"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"`fn.__doc__`:"}),e.jsx("span",{className:"text-slate-300 text-[11px] truncate max-w-[200px]",children:o?"Official student onboarding service...":"Generic wrapper docstring"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"`__wrapped__` Accessible:"}),e.jsx("span",{className:i("font-bold",o?"text-emerald-400":"text-slate-500"),children:o?"True (Original func callable)":"False"})]})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[200px] space-y-1.5 font-mono text-xs",children:[e.jsx("span",{className:"text-slate-400 block font-bold text-[10px] uppercase",children:"Live Execution Telemetry Trace:"}),_.length===0?e.jsx("div",{className:"text-slate-500 italic text-[11px]",children:'Click "Invoke onboard_new_candidate" to execute decorated pipeline.'}):_.map((t,n)=>e.jsx("div",{className:i("p-1.5 rounded text-[11px] leading-relaxed",t.type==="ERROR"&&"bg-rose-950/60 border border-rose-800 text-rose-300",t.type==="TIMER"&&"text-cyan-300",t.type==="AUDIT"&&"text-teal-300",t.type==="VALIDATION"&&"text-emerald-300",t.type==="CORE"&&"text-purple-300 font-bold"),children:t.text},n))]})]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Python Decorators Reference Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Feature / Component"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Syntax Blueprint"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Purpose / Responsibility"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Failure Trap"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"@decorator Syntax"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"@my_dec \\n def f(): ..."}),e.jsx("td",{className:"py-3 px-4",children:"Syntactic sugar for `f = my_dec(f)`"}),e.jsx("td",{className:"py-3 px-4 text-rose-300",children:"Assuming decorator runs on each call"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"*args, **kwargs"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"def wrapper(*args, **kwargs):"}),e.jsx("td",{className:"py-3 px-4",children:"Universal parameter forwarding"}),e.jsx("td",{className:"py-3 px-4 text-rose-300",children:"TypeError on parameterized target functions"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"functools.wraps"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"@functools.wraps(func)"}),e.jsx("td",{className:"py-3 px-4",children:"Preserves `__name__` and `__doc__`"}),e.jsx("td",{className:"py-3 px-4 text-rose-300",children:"Erasing function name to 'wrapper'"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-300 font-semibold",children:"Return Value"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"return func(*args, **kwargs)"}),e.jsx("td",{className:"py-3 px-4",children:"Forwards return value to caller"}),e.jsx("td",{className:"py-3 px-4 text-rose-300",children:"Silently returning None on forget"})]})]})]})})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating decorator syntax, argument forwarding, metadata preservation with functools.wraps, and telemetry suites:"}),e.jsx(I,{files:[{filename:"decorator_syntax_and_wrapping.py",code:C,description:"Decorator concept, manual wrapping vs @decorator syntax, and execution banners."},{filename:"decorating_functions_with_arguments.py",code:P,description:"Universal *args and **kwargs wrappers, return value forwarding, and performance timers."},{filename:"preserving_metadata_with_functools_wraps.py",code:U,description:"Metadata erasure trap, @functools.wraps preservation, and __wrapped__ introspection."},{filename:"institutional_admission_telemetry_decorator_suite.py",code:M,description:"Enterprise Student Admission & Telemetry Decorator Suite with validation and latency benchmarks."}]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Forgetting `return result`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-rose-300 font-mono",children:"func(*args, **kwargs)"})," without returning the evaluated result causes the decorated function to silently return ",e.jsx("code",{className:"text-rose-300 font-mono",children:"None"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always write ",e.jsx("code",{className:"text-emerald-300",children:"return func(*args, **kwargs)"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Missing `functools.wraps`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Forgetting ",e.jsx("code",{className:"text-amber-300 font-mono",children:"@functools.wraps(func)"})," replaces the function's name with ",e.jsx("code",{className:"text-amber-300 font-mono",children:'"wrapper"'})," and wipes all docstrings."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Place ",e.jsx("code",{className:"text-emerald-300",children:"@functools.wraps(func)"})," above every inner wrapper."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Decorator Execution Timing"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"The outer decorator function runs at module import/definition time, NOT when the decorated function is called."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Place per-call runtime logic inside the inner wrapper function."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Non-Star Parameters in Wrapper"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"def wrapper(args, kwargs):"})," without asterisks expects exactly 2 positional arguments!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always use ",e.jsx("code",{className:"text-emerald-300",children:"*args, **kwargs"})," with asterisks."]})]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering Python decorators, @ syntactic sugar, functools.wraps, and stacking:"}),e.jsx(D,{questions:F})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with decorator syntax blueprints, functools.wraps templates, and stacking rules:"}),e.jsx("div",{className:"mb-10",children:e.jsx(R,{content:W,filename:"python_topic2_decorators_syntax_notes.txt",title:"Print Topic 2 Study Notes"})}),e.jsx(O,{})]})]})]})}export{K as default};
