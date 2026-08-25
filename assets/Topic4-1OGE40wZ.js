import{b as a,j as e,bg as l}from"./vendor-react-core-Doz9nIC6.js";import{P as v}from"./PythonFileLoader-hCi5osN-.js";import{P as E}from"./PlainTextPrint-C08xhKA4.js";import{F as A}from"./FAQTemplate-CkSqDH4B.js";import{T as R}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const C=`# topic4_files/decorator_factories_three_tier_architecture.py\r
# Module: 003_003_decorators-generators\r
# Topic: Decorators with arguments & functools.wraps preservation\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 4 - File 1: 3-Tier Decorator Factory Architecture\r
Demonstrates:\r
  1. The 3-Tier nested function structure required for Decorators with Arguments\r
  2. How \`@repeat(num_times=3)\` evaluates to \`func = repeat(num_times=3)(func)\`\r
  3. Preserving function identity using \`@functools.wraps(func)\`\r
"""\r
\r
import functools\r
\r
# 3-TIER DECORATOR FACTORY ARCHITECTURE:\r
# Tier 1: Factory Function (Accepts custom decorator arguments)\r
def repeat_execution(num_times: int = 2, prefix: str = "EXEC"):\r
    """Tier 1: Decorator Factory that configures how many times to repeat execution."""\r
\r
    # Tier 2: Actual Decorator Function (Accepts target function)\r
    def decorator(func):\r
\r
        # Tier 3: Inner Wrapper Function (Accepts target function's arguments)\r
        @functools.wraps(func)\r
        def wrapper(*args, **kwargs):\r
            last_result = None\r
            for iteration in range(1, num_times + 1):\r
                print(f"  [{prefix} #{iteration}/{num_times}] Calling \`{func.__name__}\`...")\r
                last_result = func(*args, **kwargs)\r
            return last_result\r
\r
        return wrapper\r
\r
    return decorator\r
\r
\r
# Applying Decorator with Arguments:\r
@repeat_execution(num_times=3, prefix="ACADEMIC_AUDIT")\r
def certify_student_enrollment(student_id: str, student_name: str) -> str:\r
    """Issues certified student registration certificate."""\r
    return f"CERT-{student_id}-{student_name.upper().replace(' ', '_')}"\r
\r
\r
def demonstrate_three_tier_factories():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - 3-TIER DECORATOR FACTORY ARCHITECTURE")\r
    print("=" * 70)\r
\r
    # 1. Invoking decorated function:\r
    print("1. Invoking \`@repeat_execution(num_times=3)\` decorated function:")\r
    cert = certify_student_enrollment("STU-101", "Sourav Mukherjee")\r
    print(f"   Returned Certificate: {cert}\\n")\r
\r
    # 2. Inspecting Preserved Metadata via @functools.wraps:\r
    print("2. Metadata Preserved with \`@functools.wraps\`:")\r
    print(f"   * \`__name__\` : {certify_student_enrollment.__name__}")\r
    print(f"   * \`__doc__\`  : {certify_student_enrollment.__doc__}")\r
\r
    print(r"""\r
The 3-Tier Evaluation Sequence:\r
  @repeat_execution(num_times=3)\r
  def certify_student_enrollment(...): pass\r
\r
  Step 1: \`decorator = repeat_execution(num_times=3)\`  (Tier 1 returns Tier 2)\r
  Step 2: \`wrapper = decorator(certify_student_enrollment)\` (Tier 2 returns Tier 3)\r
  Step 3: \`certify_student_enrollment = wrapper\`\r
""")\r
    print("[PASSED] 3-Tier Decorator Factory Architecture Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_three_tier_factories()\r
`,k=`# topic4_files/retry_and_resilience_decorator_with_arguments.py\r
# Module: 003_003_decorators-generators\r
# Topic: Decorators with arguments & functools.wraps preservation\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 4 - File 2: Parameterized Retry Decorator with Exponential Backoff\r
Demonstrates:\r
  1. Writing a configurable \`@retry_with_backoff\` decorator taking custom parameters\r
  2. Dynamic exception type filtering (only retrying specified exception classes)\r
  3. Exponential delay backoff calculations for distributed systems resilience\r
"""\r
\r
import functools\r
import time\r
from typing import Tuple, Type\r
\r
def retry_with_backoff(\r
    max_retries: int = 3,\r
    initial_delay_sec: float = 0.01,\r
    backoff_factor: float = 2.0,\r
    retryable_exceptions: Tuple[Type[Exception], ...] = (ConnectionError, TimeoutError)\r
):\r
    """Decorator factory that retries failing functions with exponential delay."""\r
\r
    def decorator(func):\r
\r
        @functools.wraps(func)\r
        def wrapper(*args, **kwargs):\r
            current_delay = initial_delay_sec\r
\r
            for attempt in range(1, max_retries + 1):\r
                try:\r
                    return func(*args, **kwargs)\r
                except retryable_exceptions as exc:\r
                    if attempt == max_retries:\r
                        print(f"  [RETRY EXHAUSTED] \`{func.__name__}\` failed after {max_retries} attempts: {exc}")\r
                        raise\r
\r
                    print(\r
                        f"  [RETRY ATTEMPT #{attempt}/{max_retries}] \`{func.__name__}\` caught {exc.__class__.__name__}. "\r
                        f"Backing off for {current_delay*1000:.1f} ms..."\r
                    )\r
                    time.sleep(current_delay)\r
                    current_delay *= backoff_factor\r
\r
        return wrapper\r
\r
    return decorator\r
\r
\r
# Simulated flaky database connection for test:\r
_connection_attempts = 0\r
\r
@retry_with_backoff(\r
    max_retries=4,\r
    initial_delay_sec=0.005,\r
    backoff_factor=2.0,\r
    retryable_exceptions=(ConnectionError,)\r
)\r
def query_central_tuition_database(student_id: str) -> dict:\r
    """Queries student fee record from central remote server (simulates 2 network dropouts)."""\r
    global _connection_attempts\r
    _connection_attempts += 1\r
\r
    if _connection_attempts < 3:\r
        raise ConnectionError(f"Network glitch on port 5432 (Simulated attempt #{_connection_attempts})")\r
\r
    return {"student_id": student_id, "name": "Sourav Mukherjee", "fee_status": "PAID"}\r
\r
\r
def demonstrate_retry_decorator():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - RETRY DECORATOR WITH EXPONENTIAL BACKOFF")\r
    print("=" * 70)\r
\r
    print("1. Invoking Flaky Database Query with \`@retry_with_backoff\`:")\r
    res = query_central_tuition_database("STU-101")\r
    print(f"\\n   Final Successful Query Result: {res}")\r
    print(f"   Total Attempts Required      : {_connection_attempts}")\r
\r
    print("\\n[PASSED] Parameterized Retry Decorator Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_retry_decorator()\r
`,S=`# topic4_files/cache_memoization_decorator_with_ttl.py\r
# Module: 003_003_decorators-generators\r
# Topic: Decorators with arguments & functools.wraps preservation\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 4 - File 3: Parameterized Caching Decorator with TTL (Time-To-Live)\r
Demonstrates:\r
  1. Writing a configurable caching decorator with custom TTL expiration in seconds\r
  2. Cache hit / miss introspection methods attached to the wrapper\r
  3. Automatic cache invalidation when timestamps exceed TTL\r
"""\r
\r
import functools\r
import time\r
from typing import Dict, Tuple, Any\r
\r
def memoize_with_ttl(ttl_seconds: float = 2.0, max_size: int = 100):\r
    """Decorator factory creating an in-memory cache with TTL expiration."""\r
\r
    def decorator(func):\r
        cache: Dict[Tuple, Tuple[float, Any]] = {}\r
        stats = {"hits": 0, "misses": 0}\r
\r
        @functools.wraps(func)\r
        def wrapper(*args, **kwargs):\r
            # Create hashable key from args and sorted kwargs:\r
            key = (args, tuple(sorted(kwargs.items())))\r
            now = time.time()\r
\r
            if key in cache:\r
                timestamp, cached_result = cache[key]\r
                if now - timestamp < ttl_seconds:\r
                    stats["hits"] += 1\r
                    print(f"  [CACHE HIT] \`{func.__name__}{args}\` -> Instant Return (Hits: {stats['hits']})")\r
                    return cached_result\r
                else:\r
                    print(f"  [CACHE EXPIRED] \`{func.__name__}{args}\` -> TTL ({ttl_seconds}s) exceeded. Recomputing...")\r
\r
            # Cache Miss or Expired:\r
            stats["misses"] += 1\r
            print(f"  [CACHE MISS] \`{func.__name__}{args}\` -> Computing Fresh Value...")\r
            result = func(*args, **kwargs)\r
\r
            # Evict if max size reached:\r
            if len(cache) >= max_size:\r
                oldest_key = min(cache.keys(), key=lambda k: cache[k][0])\r
                del cache[oldest_key]\r
\r
            cache[key] = (now, result)\r
            return result\r
\r
        def cache_info() -> Dict[str, Any]:\r
            return {\r
                "hits": stats["hits"],\r
                "misses": stats["misses"],\r
                "currsize": len(cache),\r
                "maxsize": max_size,\r
                "ttl_seconds": ttl_seconds\r
            }\r
\r
        def cache_clear() -> None:\r
            cache.clear()\r
            stats["hits"] = 0\r
            stats["misses"] = 0\r
\r
        wrapper.cache_info = cache_info\r
        wrapper.cache_clear = cache_clear\r
        return wrapper\r
\r
    return decorator\r
\r
\r
@memoize_with_ttl(ttl_seconds=0.1, max_size=50)\r
def compute_complex_student_scholarship(gpa: float, family_income: float) -> float:\r
    """Computes complex institutional scholarship allocation."""\r
    time.sleep(0.005)  # Simulate expensive calculation\r
    return round((gpa * 5000.0) / (family_income / 100000.0), 2)\r
\r
\r
def demonstrate_caching_decorator():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - PARAMETERIZED CACHING DECORATOR WITH TTL")\r
    print("=" * 70)\r
\r
    # 1. First Call (Cache Miss):\r
    print("1. First Invocation (GPA 3.8, Income 400000):")\r
    res1 = compute_complex_student_scholarship(3.8, 400000.0)\r
    print(f"   Calculated Scholarship: INR {res1:,.2f}\\n")\r
\r
    # 2. Second Call (Immediate - Cache Hit):\r
    print("2. Second Immediate Invocation (Same Args):")\r
    res2 = compute_complex_student_scholarship(3.8, 400000.0)\r
    print(f"   Returned Scholarship  : INR {res2:,.2f}\\n")\r
\r
    # 3. Third Call after TTL Expiration (Cache Miss):\r
    print("3. Sleeping 0.15s to Exceed 0.1s TTL:")\r
    time.sleep(0.15)\r
    res3 = compute_complex_student_scholarship(3.8, 400000.0)\r
    print(f"   Recalculated Value    : INR {res3:,.2f}\\n")\r
\r
    # 4. Cache Info Introspection:\r
    print("4. Inspecting Wrapper Cache Telemetry:")\r
    print(f"   \`cache_info()\`: {compute_complex_student_scholarship.cache_info()}")\r
\r
    print("\\n[PASSED] Parameterized Caching Decorator with TTL Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_caching_decorator()\r
`,I=`# topic4_files/institutional_tuition_discount_policy_decorator.py\r
# Module: 003_003_decorators-generators\r
# Topic: Decorators with arguments & functools.wraps preservation\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 4 - File 4: Multi-Campus Dynamic Tuition Policy Engine (Case Study)\r
Demonstrates:\r
  1. Stacking multiple Parameterized Decorators with custom domain configurations\r
  2. Enforcing institutional policy constraints (Discount Caps, Campus Rules)\r
  3. Dynamic audit logging with configurable ledger categories\r
"""\r
\r
import functools\r
from typing import Dict, Any\r
\r
# =====================================================================\r
# PARAMETERIZED PRODUCTION POLICY DECORATORS\r
# =====================================================================\r
def enforce_discount_ceiling(max_discount_rate: float, campus_code: str):\r
    """Tier 1: Decorator Factory enforcing campus-specific concession ceilings."""\r
\r
    def decorator(func):\r
\r
        @functools.wraps(func)\r
        def wrapper(base_fee: float, discount_rate: float, *args, **kwargs):\r
            if discount_rate > max_discount_rate:\r
                raise ValueError(\r
                    f"[POLICY VIOLATION] Discount {discount_rate*100:.1f}% exceeds maximum allowed "\r
                    f"ceiling of {max_discount_rate*100:.1f}% for campus '{campus_code}'!"\r
                )\r
            return func(base_fee, discount_rate, *args, **kwargs)\r
\r
        return wrapper\r
\r
    return decorator\r
\r
\r
def audit_financial_transaction(ledger_code: str, min_alert_threshold: float = 4000.0):\r
    """Tier 1: Decorator Factory auditing concessions and flagging large deductions."""\r
\r
    def decorator(func):\r
\r
        @functools.wraps(func)\r
        def wrapper(base_fee: float, discount_rate: float, *args, **kwargs):\r
            discount_amount = base_fee * discount_rate\r
            net_fee = func(base_fee, discount_rate, *args, **kwargs)\r
\r
            print(\r
                f"  [LEDGER AUDIT: {ledger_code}] Base: INR {base_fee:,.2f} | "\r
                f"Discount: INR {discount_amount:,.2f} | Net Payable: INR {net_fee:,.2f}"\r
            )\r
\r
            if discount_amount >= min_alert_threshold:\r
                print(f"  [MANAGEMENT ALERT] Large concession of INR {discount_amount:,.2f} flagged for director review.")\r
\r
            return net_fee\r
\r
        return wrapper\r
\r
    return decorator\r
\r
\r
# =====================================================================\r
# DECORATED TUITION CALCULATOR\r
# =====================================================================\r
@enforce_discount_ceiling(max_discount_rate=0.25, campus_code="BARRACKPORE")\r
@audit_financial_transaction(ledger_code="SCHOLARSHIP-2026", min_alert_threshold=4000.0)\r
def calculate_concession_fee(base_fee: float, discount_rate: float, student_id: str) -> float:\r
    """Calculates net payable tuition fee after applying institutional concessions."""\r
    return base_fee * (1.0 - discount_rate)\r
\r
\r
def run_tuition_policy_demo():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - TUITION CONCESSION POLICY ENGINE")\r
    print("=" * 70)\r
\r
    # 1. Standard Concession (15% - Allowed):\r
    print("1. Calculating 15% Academic Concession (Base INR 20,000):")\r
    fee1 = calculate_concession_fee(20000.0, 0.15, student_id="STU-101")\r
    print(f"   Final Net Fee: INR {fee1:,.2f}\\n")\r
\r
    # 2. Large Concession (20% on INR 30,000 - Triggers Management Alert):\r
    print("2. Calculating 20% Concession on INR 30,000 (INR 6,000 deduction):")\r
    fee2 = calculate_concession_fee(30000.0, 0.20, student_id="STU-102")\r
    print(f"   Final Net Fee: INR {fee2:,.2f}\\n")\r
\r
    # 3. Policy Ceiling Violation (35% requested against 25% max):\r
    print("3. Attempting 35% Concession (Exceeds 25% Ceiling):")\r
    try:\r
        calculate_concession_fee(20000.0, 0.35, student_id="STU-103")\r
    except ValueError as err:\r
        print(f"   [BLOCKED BY POLICY GUARD] {err}")\r
\r
    print("\\n[PASSED] Tuition Concession Policy Engine Verified.")\r
\r
\r
if __name__ == "__main__":\r
    run_tuition_policy_demo()\r
`,D=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_003: DECORATORS & GENERATORS\r
          TOPIC 4: DECORATORS WITH ARGUMENTS & FUNCTOOLS.WRAPS IN PYTHON\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. THE 3-TIER DECORATOR FACTORY BLUEPRINT\r
--------------------------------------------------------------------------------\r
  # Tier 1: Factory (takes decorator parameters)\r
  def repeat(num_times: int = 3):\r
      # Tier 2: Decorator (takes target function)\r
      def decorator(func):\r
          # Tier 3: Wrapper (takes runtime arguments)\r
          @functools.wraps(func)\r
          def wrapper(*args, **kwargs):\r
              for _ in range(num_times):\r
                  result = func(*args, **kwargs)\r
              return result\r
          return wrapper\r
      return decorator\r
\r
--------------------------------------------------------------------------------\r
2. HOW \`@repeat(3)\` EVALUATES\r
--------------------------------------------------------------------------------\r
  @repeat(3)\r
  def greet(): pass\r
\r
  # Step 1: dec = repeat(3)\r
  # Step 2: greet = dec(greet)\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 4: DECORATORS WITH ARGUMENTS\r
================================================================================\r
`,P=[{question:"Why do Decorators with Arguments require a 3-tier nested function architecture?",shortAnswer:"Because Python must first call the outermost Factory function with the custom arguments to generate the actual Decorator function (middle tier), which in turn accepts the target function and returns the Wrapper function (inner tier).",explanation:"Evaluates as: func = factory(args)(func).",hint:"Factory (Tier 1) -> Decorator (Tier 2) -> Wrapper (Tier 3).",level:"basic",codeExample:`def factory(arg):
    def decorator(fn):
        def wrapper(*a, **kw): ...
        return wrapper
    return decorator`},{question:"What does '@repeat(num_times=3)' evaluate to under the hood?",shortAnswer:"It is evaluated in 2 distinct steps: first 'dec = repeat(num_times=3)' (returns the decorator), then 'func = dec(func)'.",explanation:"Two successive function call evaluations.",hint:"func = repeat(num_times=3)(func).",level:"basic",codeExample:`# @repeat(3)
# def foo(): pass
# Equivalent to: foo = repeat(3)(foo)`},{question:"Where should '@functools.wraps(func)' be placed in a 3-tier decorator factory?",shortAnswer:"Directly above the innermost 'wrapper' function (Tier 3), passing the target function 'func' from Tier 2.",explanation:"Preserves the target function's metadata onto the returned wrapper.",hint:"Above the innermost wrapper function in Tier 3.",level:"basic",codeExample:`def decorator(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs): ...`},{question:"What happens if a decorator factory forgets to 'return decorator' from its outermost body?",shortAnswer:"The factory returns 'None', and when Python tries to apply the decorator via 'None(func)', a 'TypeError: 'NoneType' object is not callable' is immediately raised at import time!",explanation:"A frequent bug when writing 3-tier decorator factories.",hint:"Raises 'TypeError: NoneType object is not callable' at import time.",level:"moderate",codeExample:"# TypeError: 'NoneType' object is not callable"},{question:"How does a Parameterized Retry decorator implement Exponential Backoff?",shortAnswer:"By starting with an initial delay (e.g. 0.1s) and multiplying the delay by a backoff factor (e.g. 2.0x) on each caught retryable exception ('delay *= backoff_factor') before sleeping.",explanation:"Standard resilience pattern for distributed microservices.",hint:"Multiplies delay by backoff factor (e.g. 2x) on each retry attempt.",level:"moderate",codeExample:`time.sleep(current_delay)
current_delay *= backoff_factor`},{question:"Can a decorator factory accept optional arguments with default values?",shortAnswer:`Yes. By providing default parameter values in the outermost factory function: 'def repeat(num=3, prefix="LOG"):'.`,explanation:"Allows users to write '@repeat(num=5)' or '@repeat()'.",hint:"Yes, by defining default parameter values in the factory definition.",level:"basic",codeExample:`def repeat(num_times=3):
    ...`},{question:"What is the difference between writing '@my_dec' and '@my_dec()'?",shortAnswer:"'@my_dec' passes the function directly to 'my_dec' (a standard 2-tier decorator); '@my_dec()' first invokes 'my_dec()' to obtain the decorator function (a 3-tier factory).",explanation:"Mixing these two syntax styles without designing a dual decorator causes TypeErrors.",hint:"@my_dec passes function directly; @my_dec() executes the factory first.",level:"moderate",codeExample:`# 2-tier: @my_dec
# 3-tier: @my_dec()`},{question:"How can you design a 'Dual Decorator' that works both WITH and WITHOUT parentheses (e.g. both '@dec' and '@dec(arg=val)')?",shortAnswer:"By checking if the first argument is callable: if callable, treat it as the target function and wrap immediately; otherwise return the decorator factory.",explanation:"Used extensively in libraries like Click and Pytest.",hint:"Check if the first argument is callable (isinstance/callable(arg)).",level:"complex",codeExample:`def smart_dec(func=None, *, option=1):
    if func is not None: return decorator(func)
    return decorator`},{question:"How does a TTL (Time-To-Live) caching decorator determine when a cached item has expired?",shortAnswer:"By storing a timestamp '(time.time(), result)' alongside the result in the cache dictionary and checking if 'current_time - cached_time > ttl_seconds'.",explanation:"Invalidates stale cache entries automatically on read.",hint:"Compares current timestamp with stored timestamp against TTL seconds.",level:"moderate",codeExample:"if time.time() - timestamp > ttl: recompute()"},{question:"How does '@functools.lru_cache' in Python's standard library handle decorator arguments?",shortAnswer:"'@functools.lru_cache(maxsize=128, typed=False)' is a 3-tier decorator factory that builds an LRU cache with configured capacity.",explanation:"Standard library implementation of parameterized memoization.",hint:"It is a standard 3-tier decorator factory from the functools module.",level:"basic",codeExample:`@functools.lru_cache(maxsize=256)
def fib(n): ...`},{question:"What key is used in caching decorators to store results for parameterized functions?",shortAnswer:"A hashable tuple containing positional 'args' and sorted keyword arguments: '(args, tuple(sorted(kwargs.items())))'.",explanation:"Ensures dictionary keys are immutable and order-independent.",hint:"A hashable tuple of args and sorted kwargs items.",level:"moderate",codeExample:"key = (args, tuple(sorted(kwargs.items())))"},{question:"Can a decorator factory accept complex objects like database connections or logger instances as arguments?",shortAnswer:"Yes. Decorator factories can accept any valid Python objects (instances, classes, strings, callables, configs) as arguments.",explanation:"Enables dependency injection into decorator wrappers.",hint:"Yes, decorator factories can accept any Python objects.",level:"basic",codeExample:`@inject_db(db_engine=prod_engine)
def get_student(): pass`},{question:"How can a decorator with arguments attach helper methods to the returned wrapper?",shortAnswer:"By defining helper functions inside Tier 2 (the middle decorator) and binding them as attributes on the wrapper object before returning (e.g. 'wrapper.cache_info = cache_info').",explanation:"Allows runtime inspection and cache clearing.",hint:"Attach helper functions directly to wrapper object attributes.",level:"moderate",codeExample:`wrapper.cache_info = cache_info
wrapper.cache_clear = cache_clear`},{question:"Why should mutable objects (like empty lists '[]' or dicts '{}') be avoided as default arguments in decorator factories?",shortAnswer:"Because default mutable arguments are instantiated once at module definition time, meaning all decorated functions would unintentionally share the same mutable object across scopes!",explanation:"The classic Python mutable default argument trap.",hint:"Use None as default and initialize a new list inside the factory body.",level:"moderate",codeExample:`# AVOID: def factory(tags=[])
# USE: def factory(tags=None): if tags is None: tags = []`},{question:"What happens if a decorated function raises an unhandled exception inside a retry decorator?",shortAnswer:"If retries are exhausted or the raised exception is not listed in 'retryable_exceptions', the decorator lets the exception propagate upward to the caller.",explanation:"Preserves transparent exception handling.",hint:"The exception propagates upward to the caller.",level:"basic",codeExample:"if attempt == max_retries: raise"},{question:"How do class-based decorators with arguments work (using '__init__' and '__call__')?",shortAnswer:"'__init__(self, *dec_args)' captures the decorator arguments, and '__call__(self, func)' accepts the target function and returns the wrapper.",explanation:"An alternative OOP approach to 3-tier function factories.",hint:"__init__ takes decorator arguments; __call__ takes the function.",level:"complex",codeExample:`class Repeat:
    def __init__(self, n): self.n = n
    def __call__(self, fn): ...`},{question:"Can multiple decorator factories be chained on a single function?",shortAnswer:"Yes. Python evaluates all factory calls from top to bottom at definition time to generate the middle decorator functions, then wraps the target function from bottom to top.",explanation:"Seamlessly stacks parameterized decorators.",hint:"Yes, Python evaluates all factory arguments and wraps the decorators.",level:"basic",codeExample:`@retry(max=3)
@memoize(ttl=60)
@audit(code='PAY')
def process(): pass`},{question:"How does '@pytest.mark.parametrize' utilize decorators with arguments?",shortAnswer:"It acts as a decorator factory accepting parameter names and a list of test tuples, generating parameterized test cases for each data row.",explanation:"Central feature of pytest testing framework.",hint:"It is a decorator factory generating parameterized test runs.",level:"moderate",codeExample:`@pytest.mark.parametrize('x,y', [(1,2), (3,4)])
def test_add(x, y): pass`},{question:"What is the memory impact of enclosing arguments in Tier 1 of a decorator factory?",shortAnswer:"The arguments are captured in heap 'cell' objects referenced in 'wrapper.__closure__', occupying a tiny memory footprint (~64 bytes per cell) that persists for the lifetime of the wrapper.",explanation:"Extremely efficient memory footprint.",hint:"Negligible footprint (~64 bytes) preserved in closure cells.",level:"complex",codeExample:"print(wrapper.__closure__)"},{question:"Can a decorator factory validate its own configuration arguments?",shortAnswer:"Yes. The outermost factory function can perform validation (e.g. checking that 'max_retries > 0') and raise ValueError immediately at module definition time.",explanation:"Fails fast before the application even starts serving requests.",hint:"Yes, validate parameters in the Tier 1 factory body before returning Tier 2.",level:"basic",codeExample:"if max_retries < 1: raise ValueError('max_retries must be >= 1')"},{question:"How can a decorator factory dynamically alter behavior based on environment variables (e.g. DEV vs PROD)?",shortAnswer:`By inspecting 'os.environ.get("ENV")' inside the factory body and configuring decorator options (e.g. disabling caching or reducing retry timeouts in DEV) accordingly.`,explanation:"Common pattern for environment-aware middleware.",hint:"Inspect os.environ inside the factory to adjust decorator behavior.",level:"moderate",codeExample:"if os.getenv('ENV') == 'DEV': return func # Bypass in DEV"},{question:"Why should '@functools.wraps(func)' always be used when writing decorator factories for web APIs?",shortAnswer:"Because modern web frameworks (FastAPI, Flask, Celery) inspect 'func.__name__', 'func.__doc__', and 'func.__annotations__' to generate OpenAPI docs and route tables; without wraps, routes collide as 'wrapper'!",explanation:"Route collision disaster in web frameworks without wraps.",hint:"Prevents endpoint name collisions and broken OpenAPI schema docs.",level:"moderate",codeExample:"# Crucial for FastAPI OpenAPI schema generation"},{question:"How do you unit-test a decorator factory with arguments?",shortAnswer:"Instantiate the factory with test arguments, pass a mock function, invoke the resulting wrapper with test arguments, and assert on expected side-effects and return values.",explanation:"Standard unit testing pattern for higher-order factories.",hint:"Test factory invocation -> wrapper generation -> wrapper execution.",level:"moderate",codeExample:"dec = repeat(3); wrapped = dec(mock_fn); wrapped()"},{question:"What is the primary difference between Decorators with Arguments and Decorators without Arguments?",shortAnswer:"Decorators without arguments have 2 tiers (decorator -> wrapper) and take the function directly; Decorators with arguments have 3 tiers (factory -> decorator -> wrapper) where the factory accepts configuration first.",explanation:"2 tiers vs 3 tiers.",hint:"2 tiers (func -> wrapper) vs 3 tiers (args -> func -> wrapper).",level:"basic",codeExample:`# No args: 2 tiers
# With args: 3 tiers`},{question:"What is the ultimate golden rule for writing Decorators with Arguments in Python?",shortAnswer:"Master the 3-Tier Factory Architecture, always apply '@functools.wraps(func)' on the innermost wrapper, validate factory inputs upfront, forward '*args, **kwargs' transparently, and return the computed result.",explanation:"The blueprint for building world-class Python libraries and middleware.",hint:"Follow the 3-tier blueprint, use @functools.wraps, and validate factory inputs.",level:"basic",codeExample:"# World-class decorator engineering in Python"}];function B(){const p=a.useRef([]),[c,u]=a.useState("threetier"),[s,_]=a.useState("BARRACKPORE"),[o,w]=a.useState(20),[i,T]=a.useState(25e3),[j,O]=a.useState(3),[h,g]=a.useState([]),[d,b]=a.useState(null),f={BARRACKPORE:25,KOLKATA:20,ONLINE:15},N=()=>{const t=[],r=f[s],m=o/100,x=i*m,y=i-x;if(t.push({tier:"TIER 1 (FACTORY)",text:`[FACTORY CONFIG] Initialized \`enforce_ceiling(max=${r}%, campus='${s}')\` & \`retry(max=${j})\``}),o>r){t.push({tier:"TIER 3 (WRAPPER)",type:"ERROR",text:`[POLICY GUARD FAILED] ValueError: Requested discount ${o}% exceeds ${s} campus ceiling of ${r}%!`}),b(null),g(t);return}t.push({tier:"TIER 3 (WRAPPER)",type:"SUCCESS",text:`[POLICY VERIFIED] Discount ${o}% is within ${s} limit (${r}%). Proceeding...`}),t.push({tier:"TIER 3 (WRAPPER)",type:"AUDIT",text:`[LEDGER AUDIT] Base: INR ${i.toLocaleString()} | Concession: INR ${x.toLocaleString()} | Net: INR ${y.toLocaleString()}`}),x>=5e3&&t.push({tier:"TIER 3 (WRAPPER)",type:"ALERT",text:`[MANAGEMENT NOTICE] Concession of INR ${x.toLocaleString()} flagged for Director Review.`}),b({base:i,discountPct:o,discountAmt:x,netPayable:y,campus:s}),g(t)};a.useEffect(()=>{const t=new IntersectionObserver(r=>{r.forEach(m=>{m.isIntersecting&&m.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return p.current.forEach(r=>{r&&t.observe(r)}),()=>t.disconnect()},[]);const n=t=>{t&&!p.current.includes(t)&&p.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:n,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_003"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 4"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Decorators, Generators & Iterators"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Decorators with Arguments & ",e.jsx("span",{className:"text-teal-400",children:"functools.wraps"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master the 3-Tier Decorator Factory architecture in Python: parameterized retry logic with exponential backoff, configurable TTL cache eviction, and deep metadata preservation with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"functools.wraps"}),"."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🏗️ 3-Tier Factory Architecture"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔁 Exponential Backoff Retries"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⏳ Configurable TTL In-Memory Caches"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Deep Metadata Preservation"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The 3-Tier Decorator Factory Architecture"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["When a decorator needs custom arguments (e.g. ",e.jsx("code",{className:"text-teal-300 font-mono",children:"@repeat(num_times=3)"}),"), Python requires a ",e.jsx("strong",{children:"3-tier nested hierarchy"})," of functions:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"Tier 1: Factory"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"def repeat(num=3):"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Accepts decorator arguments and returns the middle decorator."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"Tier 2: Decorator"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"def decorator(func):"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Accepts the target callable and returns the innermost wrapper."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"Tier 3: Wrapper"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"def wrapper(*args):"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Accepts runtime parameters and executes the wrapped logic."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"How Python Evaluates `@repeat(num_times=3)`"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["1. ",e.jsx("span",{className:"text-teal-300",children:"decorator = repeat(num_times=3)"})," (Invokes Tier 1 to get Tier 2)",e.jsx("br",{}),"2. ",e.jsx("span",{className:"text-cyan-300",children:"wrapper = decorator(target_function)"})," (Invokes Tier 2 to get Tier 3)",e.jsx("br",{}),"3. ",e.jsx("span",{className:"text-purple-300",children:"target_function = wrapper"})," (Rebinds identifier)"]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing 3-Tier Calls, Retries & TTL Eviction"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>u("threetier"),className:l("px-3 py-1.5 rounded-lg transition-all",c==="threetier"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"3-Tier Hierarchy"}),e.jsx("button",{onClick:()=>u("retry"),className:l("px-3 py-1.5 rounded-lg transition-all",c==="retry"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Exponential Retry"}),e.jsx("button",{onClick:()=>u("ttl"),className:l("px-3 py-1.5 rounded-lg transition-all",c==="ttl"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"TTL Cache Eviction"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining 3-tier factory scoping, retry backoff algorithms, and in-memory TTL caching lifecycles:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:c==="threetier"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"THE 3-TIER DECORATOR FACTORY HIERARCHY"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"240",rx:"10",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"25",fill:"#99f6e4",fontSize:"11 font-bold",children:"TIER 1: DECORATOR FACTORY (`def repeat(num_times=3):`)"}),e.jsx("text",{x:"20",y:"42",fill:"#a7f3d0",fontSize:"8 font-mono",children:"Receives decorator configuration arguments. Encloses `num_times` in lexical scope."}),e.jsx("rect",{x:"30",y:"60",width:"760",height:"165",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"50",y:"82",fill:"#a5f3fc",fontSize:"11 font-bold",children:"TIER 2: DECORATOR FUNCTION (`def decorator(func):`)"}),e.jsx("text",{x:"50",y:"99",fill:"#bae6fd",fontSize:"8 font-mono",children:"Receives target function `func`. Applies `@functools.wraps(func)`."}),e.jsx("rect",{x:"60",y:"115",width:"700",height:"95",rx:"6",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"80",y:"140",fill:"#c4b5fd",fontSize:"11 font-bold",children:"TIER 3: INNER WRAPPER FUNCTION (`def wrapper(*args, **kwargs):`)"}),e.jsx("text",{x:"80",y:"162",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Executes loop `for _ in range(num_times): result = func(*args, **kwargs)`"}),e.jsx("text",{x:"80",y:"182",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"Returns computed `result` to the caller!"})]})]}):c==="retry"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"PARAMETERIZED RETRY WITH EXPONENTIAL BACKOFF"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"180",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"15",y:"30",fill:"#fda4af",fontSize:"11 font-bold",children:"Attempt #1"}),e.jsx("text",{x:"15",y:"55",fill:"#fca5a5",fontSize:"8 font-mono",children:"Call db_query()"}),e.jsx("text",{x:"15",y:"75",fill:"#f87171",fontSize:"8 font-bold",children:"❌ ConnectionError"}),e.jsx("rect",{x:"15",y:"110",width:"150",height:"100",rx:"4",fill:"#881337",stroke:"#e11d48"}),e.jsx("text",{x:"25",y:"135",fill:"#ffe4e6",fontSize:"8 font-bold",children:"Backoff Delay:"}),e.jsx("text",{x:"25",y:"155",fill:"#ecfdf5",fontSize:"8 font-mono",children:"delay = 0.010s"}),e.jsx("text",{x:"25",y:"180",fill:"#ecfdf5",fontSize:"8 font-mono",children:"sleep(10ms)"}),e.jsx("text",{x:"190",y:"125",fill:"#38bdf8",fontSize:"20",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"215",y:"0",width:"180",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"230",y:"30",fill:"#fda4af",fontSize:"11 font-bold",children:"Attempt #2 (2x)"}),e.jsx("text",{x:"230",y:"55",fill:"#fca5a5",fontSize:"8 font-mono",children:"Call db_query()"}),e.jsx("text",{x:"230",y:"75",fill:"#f87171",fontSize:"8 font-bold",children:"❌ TimeoutError"}),e.jsx("rect",{x:"230",y:"110",width:"150",height:"100",rx:"4",fill:"#881337",stroke:"#e11d48"}),e.jsx("text",{x:"240",y:"135",fill:"#ffe4e6",fontSize:"8 font-bold",children:"Exponential Scale:"}),e.jsx("text",{x:"240",y:"155",fill:"#ecfdf5",fontSize:"8 font-mono",children:"delay = 0.020s"}),e.jsx("text",{x:"240",y:"180",fill:"#ecfdf5",fontSize:"8 font-mono",children:"sleep(20ms)"}),e.jsx("text",{x:"405",y:"125",fill:"#38bdf8",fontSize:"20",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"430",y:"0",width:"180",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"445",y:"30",fill:"#fda4af",fontSize:"11 font-bold",children:"Attempt #3 (4x)"}),e.jsx("text",{x:"445",y:"55",fill:"#fca5a5",fontSize:"8 font-mono",children:"Call db_query()"}),e.jsx("text",{x:"445",y:"75",fill:"#f87171",fontSize:"8 font-bold",children:"❌ PortBusy"}),e.jsx("rect",{x:"445",y:"110",width:"150",height:"100",rx:"4",fill:"#881337",stroke:"#e11d48"}),e.jsx("text",{x:"455",y:"135",fill:"#ffe4e6",fontSize:"8 font-bold",children:"Exponential Scale:"}),e.jsx("text",{x:"455",y:"155",fill:"#ecfdf5",fontSize:"8 font-mono",children:"delay = 0.040s"}),e.jsx("text",{x:"455",y:"180",fill:"#ecfdf5",fontSize:"8 font-mono",children:"sleep(40ms)"}),e.jsx("text",{x:"620",y:"125",fill:"#38bdf8",fontSize:"20",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"645",y:"0",width:"175",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"660",y:"30",fill:"#a7f3d0",fontSize:"11 font-bold",children:"Attempt #4 (Success)"}),e.jsx("text",{x:"660",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Call db_query()"}),e.jsx("text",{x:"660",y:"75",fill:"#34d399",fontSize:"8 font-bold",children:"✓ 200 OK (PAID)"}),e.jsx("rect",{x:"660",y:"110",width:"145",height:"100",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"670",y:"135",fill:"#34d399",fontSize:"8 font-bold",children:"Recovered!"}),e.jsx("text",{x:"670",y:"155",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Returns record"}),e.jsx("text",{x:"670",y:"180",fill:"#a7f3d0",fontSize:"8 font-mono",children:"transparently."})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"TTL IN-MEMORY CACHING & EVICTION LIFECYCLE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"15",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"1. First Call: Cache Miss"}),e.jsx("text",{x:"15",y:"60",fill:"#ecfdf5",fontSize:"8 font-mono",children:"compute_scholarship(3.8)"}),e.jsx("text",{x:"15",y:"85",fill:"#cbd5e1",fontSize:"8",children:"• Computes fresh value"}),e.jsx("text",{x:"15",y:"105",fill:"#cbd5e1",fontSize:"8",children:"• Stores `(timestamp, result)`"}),e.jsx("rect",{x:"15",y:"130",width:"220",height:"85",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"25",y:"155",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Cache Entry Created:"}),e.jsx("text",{x:"25",y:"175",fill:"#cbd5e1",fontSize:"8",children:"key = (3.8,)"}),e.jsx("text",{x:"25",y:"190",fill:"#34d399",fontSize:"8",children:"timestamp = 22:45:00"}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"310",y:"30",fill:"#a7f3d0",fontSize:"11 font-bold",children:"2. Immediate Call: Cache Hit"}),e.jsx("text",{x:"310",y:"60",fill:"#ecfdf5",fontSize:"8 font-mono",children:"compute_scholarship(3.8)"}),e.jsx("text",{x:"310",y:"85",fill:"#34d399",fontSize:"8 font-mono",children:"now - timestamp < TTL (5s)"}),e.jsx("rect",{x:"310",y:"130",width:"220",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"320",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"Instant O(1) Return:"}),e.jsx("text",{x:"320",y:"175",fill:"#ecfdf5",fontSize:"8",children:"Bypasses calculation."}),e.jsx("text",{x:"320",y:"190",fill:"#ecfdf5",fontSize:"8",children:"`hits += 1`"}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"605",y:"30",fill:"#fda4af",fontSize:"11 font-bold",children:"3. Call after 6s: TTL Expired"}),e.jsx("text",{x:"605",y:"60",fill:"#fca5a5",fontSize:"8 font-mono",children:"now - timestamp > 5s"}),e.jsx("text",{x:"605",y:"85",fill:"#fda4af",fontSize:"8 font-mono font-bold",children:"Cache Invalidated!"}),e.jsx("rect",{x:"605",y:"130",width:"200",height:"85",rx:"4",fill:"#881337",stroke:"#e11d48"}),e.jsx("text",{x:"615",y:"155",fill:"#ffe4e6",fontSize:"9 font-bold",children:"Automatic Eviction:"}),e.jsx("text",{x:"615",y:"175",fill:"#fca5a5",fontSize:"8",children:"Recomputes fresh data"}),e.jsx("text",{x:"615",y:"190",fill:"#fca5a5",fontSize:"8",children:"and updates timestamp."})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Tuition Concession Policy Decorator Simulator"})]}),e.jsxs("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:["Configure campus discount limits and pass parameters through the 3-tier decorator pipeline (",e.jsx("code",{className:"text-teal-300 font-mono",children:"@enforce_ceiling"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"@audit_ledger"}),") to inspect live runtime enforcement:"]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold block",children:"1. Decorator Factory & Function Parameters"}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"text-xs font-mono text-slate-400 block",children:"Campus Center (Sets Decorator Ceiling):"}),e.jsx("div",{className:"grid grid-cols-3 gap-2",children:Object.keys(f).map(t=>e.jsxs("button",{onClick:()=>_(t),className:l("p-2 rounded-lg text-center text-xs font-mono border transition-all",s===t?"bg-teal-950 border-teal-500 text-teal-200 font-bold":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:[t,e.jsxs("span",{className:"block text-[10px] text-slate-500",children:["Max ",f[t],"%"]})]},t))})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[e.jsx("span",{className:"text-slate-400",children:"Requested Concession Rate:"}),e.jsxs("span",{className:l("font-bold",o>f[s]?"text-rose-400":"text-teal-300"),children:[o,"% (Campus Cap: ",f[s],"%)"]})]}),e.jsx("input",{type:"range",min:"5",max:"40",step:"5",value:o,onChange:t=>w(Number(t.target.value)),className:"w-full accent-teal-500"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[e.jsx("span",{className:"text-slate-400",children:"Base Tuition Fee:"}),e.jsxs("span",{className:"text-slate-200 font-bold",children:["INR ",i.toLocaleString()]})]}),e.jsx("input",{type:"range",min:"10000",max:"50000",step:"2500",value:i,onChange:t=>T(Number(t.target.value)),className:"w-full accent-cyan-500"})]}),e.jsx("button",{onClick:N,className:"w-full py-2.5 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-lg text-xs font-mono transition-all shadow-lg shadow-teal-950/50",children:"Execute Parameterized Decorator Pipeline"})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2 text-xs font-mono",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:"Certified Financial Invoice Breakdown:"}),d?e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Base Tuition:"}),e.jsxs("span",{className:"text-slate-200",children:["INR ",d.base.toLocaleString()]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("span",{className:"text-slate-400",children:["Approved Concession (",d.discountPct,"%):"]}),e.jsxs("span",{className:"text-teal-300",children:["- INR ",d.discountAmt.toLocaleString()]})]}),e.jsxs("div",{className:"flex justify-between pt-1 border-t border-slate-800 font-bold",children:[e.jsx("span",{className:"text-emerald-400",children:"Final Net Payable:"}),e.jsxs("span",{className:"text-emerald-400 text-sm",children:["INR ",d.netPayable.toLocaleString()]})]})]}):e.jsx("div",{className:"text-slate-500 italic text-[11px]",children:"No valid calculation generated yet or policy guard blocked request."})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[160px] space-y-1.5 font-mono text-xs",children:[e.jsx("span",{className:"text-slate-400 block font-bold text-[10px] uppercase",children:"3-Tier Execution Pipeline Trace:"}),h.length===0?e.jsx("div",{className:"text-slate-500 italic text-[11px]",children:'Click "Execute Parameterized Decorator Pipeline" to run.'}):h.map((t,r)=>e.jsxs("div",{className:l("p-1.5 rounded text-[11px] leading-relaxed",t.type==="ERROR"&&"bg-rose-950/60 border border-rose-800 text-rose-300 font-bold",t.type==="SUCCESS"&&"text-emerald-300 font-bold",t.type==="AUDIT"&&"text-cyan-300",t.type==="ALERT"&&"text-amber-300 font-bold",!t.type&&"text-slate-400"),children:[e.jsx("span",{className:"text-[9px] text-slate-500 block font-bold",children:t.tier}),t.text]},r))]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master 3-Tier Decorator Architecture Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Tier Layer"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Input Parameter"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Returned Value"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Execution Timing"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"Tier 1: Factory"}),e.jsx("td",{className:"py-3 px-4",children:"Decorator Config (e.g. `retries=3, ttl=5`)"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Middle Decorator Function"}),e.jsx("td",{className:"py-3 px-4 text-slate-300",children:"Module definition time"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"Tier 2: Decorator"}),e.jsx("td",{className:"py-3 px-4",children:"Target Function (`func`)"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Innermost Wrapper Function"}),e.jsx("td",{className:"py-3 px-4 text-slate-300",children:"Module definition time"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Tier 3: Wrapper"}),e.jsx("td",{className:"py-3 px-4",children:"Runtime Arguments (`*args, **kwargs`)"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Original Computed Result"}),e.jsx("td",{className:"py-3 px-4 text-amber-300",children:"Runtime (On every call)"})]})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating 3-tier factories, retry backoffs, TTL caching, and multi-campus tuition policies:"}),e.jsx(v,{files:[{filename:"decorator_factories_three_tier_architecture.py",code:C,description:"The 3-tier decorator factory architecture and functools.wraps preservation."},{filename:"retry_and_resilience_decorator_with_arguments.py",code:k,description:"Parameterized retry decorator with exponential backoff and exception filtering."},{filename:"cache_memoization_decorator_with_ttl.py",code:S,description:"Parameterized in-memory caching decorator with TTL expiration and cache info telemetry."},{filename:"institutional_tuition_discount_policy_decorator.py",code:I,description:"Multi-Campus Dynamic Tuition Concession Policy Engine using stacked parameterized decorators."}]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Forgetting `return decorator`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["If the outermost Tier 1 factory forgets to return Tier 2, Python raises ",e.jsx("code",{className:"text-rose-300 font-mono",children:"TypeError: 'NoneType' object is not callable"})," at import time."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Tier 1 must return Tier 2; Tier 2 must return Tier 3!"]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Placing `@wraps` on Wrong Tier"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Placing ",e.jsx("code",{className:"text-amber-300 font-mono",children:"@functools.wraps"})," above Tier 2 instead of Tier 3 fails to preserve metadata on the final wrapper."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Place ",e.jsx("code",{className:"text-emerald-300",children:"@functools.wraps(func)"})," directly above Tier 3 wrapper."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Mutable Defaults in Tier 1"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-purple-300 font-mono",children:"def factory(tags=[]):"})," shares the same list across all decorated functions in the app."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"tags=None"})," and initialize inside the factory."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Route Name Collisions in Web APIs"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["In FastAPI/Flask, forgetting wraps causes all route endpoints to be registered as ",e.jsx("code",{className:"text-cyan-300 font-mono",children:'"wrapper"'}),", crashing with route collisions."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always use ",e.jsx("code",{className:"text-emerald-300",children:"@functools.wraps(func)"})," in web middleware."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering 3-tier decorator factories, parameterized retries, TTL caching, and functools.wraps:"}),e.jsx(A,{questions:P})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with 3-tier factory blueprints, retry templates, and TTL cache recipes:"}),e.jsx("div",{className:"mb-10",children:e.jsx(E,{content:D,filename:"python_topic4_decorators_with_arguments_notes.txt",title:"Print Topic 4 Study Notes"})}),e.jsx(R,{})]})]})]})}export{B as default};
