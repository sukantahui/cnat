import{b as o,j as e,bg as r}from"./vendor-react-core-Doz9nIC6.js";import{P as N}from"./PythonFileLoader-hCi5osN-.js";import{P as v}from"./PlainTextPrint-C08xhKA4.js";import{F as S}from"./FAQTemplate-CkSqDH4B.js";import{T as A}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const k=`# topic3_files/custom_logging_and_call_count_decorators.py\r
# Module: 003_003_decorators-generators\r
# Topic: Writing custom decorators (logging, timing execution, authentication)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 3 - File 1: Custom Logging & Stateful Call-Counter Decorators\r
Demonstrates:\r
  1. Writing a stateful call counter decorator using function attributes\r
  2. Structured logging decorator with argument serialization\r
  3. Dynamic inspection of function invocation metrics\r
"""\r
\r
import functools\r
import datetime as dt\r
\r
def count_calls_decorator(func):\r
    """Decorator that tracks how many times a function has been invoked across its lifetime."""\r
    @functools.wraps(func)\r
    def wrapper(*args, **kwargs):\r
        wrapper.calls += 1\r
        print(f"  [CALL COUNTER] \`{func.__name__}\` invocation #{wrapper.calls}")\r
        return func(*args, **kwargs)\r
\r
    wrapper.calls = 0  # Attach state attribute to wrapper function object\r
    return wrapper\r
\r
\r
def structured_audit_logger(func):\r
    """Decorator that records structured execution telemetry."""\r
    @functools.wraps(func)\r
    def wrapper(*args, **kwargs):\r
        timestamp = dt.datetime.now().strftime("%Y-%m-%d %H:%M:%S")\r
        arg_str = ", ".join([repr(a) for a in args] + [f"{k}={repr(v)}" for k, v in kwargs.items()])\r
        print(f"[{timestamp}] [AUDIT ENTRY] Invoking \`{func.__name__}({arg_str})\`")\r
\r
        result = func(*args, **kwargs)\r
\r
        print(f"[{timestamp}] [AUDIT EXIT]  \`{func.__name__}\` returned: {result}")\r
        return result\r
    return wrapper\r
\r
\r
@count_calls_decorator\r
@structured_audit_logger\r
def issue_student_hall_ticket(student_id: str, exam_code: str) -> str:\r
    """Generates hall ticket credential for institutional examination."""\r
    return f"TICKET-2026-{exam_code}-{student_id}"\r
\r
\r
def demonstrate_custom_loggers():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - CUSTOM LOGGING & CALL COUNTER DECORATORS")\r
    print("=" * 70)\r
\r
    # 1. First invocation:\r
    print("1. First Invocation:")\r
    t1 = issue_student_hall_ticket("STU-101", "PY-301")\r
    print(f"   Generated: {t1}\\n")\r
\r
    # 2. Second invocation:\r
    print("2. Second Invocation:")\r
    t2 = issue_student_hall_ticket("STU-102", "PY-301")\r
    print(f"   Generated: {t2}\\n")\r
\r
    # 3. Third invocation:\r
    print("3. Third Invocation:")\r
    t3 = issue_student_hall_ticket("STU-103", "AI-401")\r
    print(f"   Generated: {t3}\\n")\r
\r
    # 4. Inspecting total invocation metric:\r
    print(f"Total Lifetime Calls Tracked: {issue_student_hall_ticket.calls}")\r
\r
    print("\\n[PASSED] Custom Logging & Call Counter Decorators Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_custom_loggers()\r
`,E=`# topic3_files/execution_timing_and_profiling_decorators.py\r
# Module: 003_003_decorators-generators\r
# Topic: Writing custom decorators (logging, timing execution, authentication)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 3 - File 2: Execution Timing & Slow-Query Alerting Decorators\r
Demonstrates:\r
  1. High-precision execution profiling using \`time.perf_counter()\`\r
  2. Emitting warning alerts when execution exceeds latency thresholds\r
  3. Tracking statistical min/max/average execution times inside closures\r
"""\r
\r
import functools\r
import time\r
\r
def slow_execution_alert(threshold_ms: float = 15.0):\r
    """Decorator factory that warns when a function exceeds latency threshold."""\r
    def decorator(func):\r
        history = []\r
\r
        @functools.wraps(func)\r
        def wrapper(*args, **kwargs):\r
            start = time.perf_counter()\r
            result = func(*args, **kwargs)\r
            elapsed_ms = (time.perf_counter() - start) * 1000.0\r
\r
            history.append(elapsed_ms)\r
            avg_ms = sum(history) / len(history)\r
\r
            if elapsed_ms > threshold_ms:\r
                print(f"  [SLOW EXECUTION ALERT] \`{func.__name__}\` took {elapsed_ms:.2f} ms (Threshold: {threshold_ms} ms)!")\r
            else:\r
                print(f"  [PERFORMANCE OK] \`{func.__name__}\` executed in {elapsed_ms:.2f} ms (Avg: {avg_ms:.2f} ms)")\r
\r
            return result\r
\r
        wrapper.history = history\r
        return wrapper\r
    return decorator\r
\r
\r
@slow_execution_alert(threshold_ms=10.0)\r
def fast_student_lookup(student_id: str) -> dict:\r
    """Simulates fast in-memory hash cache lookup."""\r
    time.sleep(0.003)  # 3ms\r
    return {"id": student_id, "name": "Sourav Mukherjee", "status": "ACTIVE"}\r
\r
\r
@slow_execution_alert(threshold_ms=10.0)\r
def slow_database_batch_sync(batch_size: int) -> int:\r
    """Simulates heavy database disk I/O and batch calculation."""\r
    time.sleep(0.015)  # 15ms (Triggers slow warning!)\r
    return batch_size\r
\r
\r
def demonstrate_timing_decorators():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - EXECUTION TIMING & SLOW ALERTING DECORATORS")\r
    print("=" * 70)\r
\r
    # 1. Fast operation (Under 10ms threshold):\r
    print("1. Executing Fast Cached Operation (3ms):")\r
    res1 = fast_student_lookup("STU-101")\r
    print(f"   Result: {res1}\\n")\r
\r
    # 2. Slow operation (Exceeds 10ms threshold):\r
    print("2. Executing Slow Database Batch Operation (15ms):")\r
    res2 = slow_database_batch_sync(500)\r
    print(f"   Processed Records: {res2}")\r
\r
    print("\\n[PASSED] Execution Timing & Profiling Decorators Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_timing_decorators()\r
`,T=`# topic3_files/authentication_and_rbac_decorators.py\r
# Module: 003_003_decorators-generators\r
# Topic: Writing custom decorators (logging, timing execution, authentication)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 3 - File 3: Authentication & Role-Based Access Control (RBAC) Decorators\r
Demonstrates:\r
  1. Securing sensitive business functions with authorization decorators\r
  2. Inspecting user session contexts passed in kwargs or global request states\r
  3. Raising \`PermissionError\` when non-authorized roles attempt access\r
"""\r
\r
import functools\r
from typing import Dict, Any\r
\r
# Current Simulated User Session Context\r
current_session = {\r
    "user_id": "USR-991",\r
    "username": "sourav_student",\r
    "role": "STUDENT",\r
    "is_authenticated": True\r
}\r
\r
\r
def require_authenticated(func):\r
    """Enforces that the caller has an active authenticated session."""\r
    @functools.wraps(func)\r
    def wrapper(*args, **kwargs):\r
        if not current_session.get("is_authenticated"):\r
            raise PermissionError("[ACCESS DENIED] User is not authenticated. Please log in first!")\r
        return func(*args, **kwargs)\r
    return wrapper\r
\r
\r
def require_role(*allowed_roles: str):\r
    """Decorator factory that restricts access to specific institutional roles."""\r
    def decorator(func):\r
        @functools.wraps(func)\r
        def wrapper(*args, **kwargs):\r
            user_role = current_session.get("role", "GUEST")\r
            if user_role not in allowed_roles:\r
                raise PermissionError(\r
                    f"[ACCESS DENIED] Role '{user_role}' is not authorized to execute \`{func.__name__}\`! "\r
                    f"Required roles: {allowed_roles}"\r
                )\r
            return func(*args, **kwargs)\r
        return wrapper\r
    return decorator\r
\r
\r
# Secured Endpoints:\r
@require_authenticated\r
def view_own_report_card(student_id: str) -> Dict[str, Any]:\r
    return {"student_id": student_id, "gpa": 3.92, "status": "PASSED"}\r
\r
\r
@require_authenticated\r
@require_role("ADMIN", "FACULTY")\r
def publish_institutional_exam_schedule(exam_code: str, date_str: str) -> str:\r
    return f"Official Exam Schedule for '{exam_code}' published on {date_str} by {current_session['username']}."\r
\r
\r
@require_authenticated\r
@require_role("ADMIN")\r
def purge_student_ledger_record(student_id: str) -> str:\r
    return f"Student record '{student_id}' permanently purged by Administrator."\r
\r
\r
def demonstrate_rbac_decorators():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - AUTHENTICATION & RBAC DECORATORS")\r
    print("=" * 70)\r
\r
    # 1. Student viewing own report card (Allowed):\r
    print(f"1. Current Session: Role = '{current_session['role']}'")\r
    report = view_own_report_card("STU-101")\r
    print(f"   [OK] View Report Card: {report}\\n")\r
\r
    # 2. Student attempting to publish exam schedule (Blocked by @require_role):\r
    print("2. Student attempting to Publish Exam Schedule (Requires ADMIN / FACULTY):")\r
    try:\r
        publish_institutional_exam_schedule("PY-301", "2026-09-15")\r
    except PermissionError as err:\r
        print(f"   [DENIED] {err}\\n")\r
\r
    # 3. Switching Session to ADMIN:\r
    print("3. Elevating Session to Role = 'ADMIN':")\r
    current_session["role"] = "ADMIN"\r
    current_session["username"] = "sukanta_director"\r
\r
    res = publish_institutional_exam_schedule("PY-301", "2026-09-15")\r
    print(f"   [OK] {res}")\r
\r
    purge_res = purge_student_ledger_record("STU-999")\r
    print(f"   [OK] {purge_res}")\r
\r
    print("\\n[PASSED] Authentication & RBAC Decorators Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_rbac_decorators()\r
`,C=`# topic3_files/institutional_examination_security_portal_suite.py\r
# Module: 003_003_decorators-generators\r
# Topic: Writing custom decorators (logging, timing execution, authentication)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 3 - File 4: Institutional Exam Security & Telemetry Portal (Case Study)\r
Demonstrates:\r
  1. Complete synthesis of Custom Decorators: Security, Rate-Limiting, Timing, and Auditing\r
  2. Multi-tier decorator architecture protecting critical administrative APIs\r
  3. Comprehensive execution logs and access control audit trails\r
"""\r
\r
import functools\r
import time\r
import datetime as dt\r
from typing import Dict, Any, List\r
\r
# Simulated Global Authentication Context\r
session_context = {\r
    "user_id": "ADMIN-01",\r
    "role": "ADMIN",\r
    "is_authenticated": True\r
}\r
\r
\r
# 1. Rate Limiting Decorator (Prevents API abuse)\r
def rate_limit(max_per_minute: int = 3):\r
    """Decorator factory that throttles function invocations."""\r
    def decorator(func):\r
        invocation_timestamps = []\r
\r
        @functools.wraps(func)\r
        def wrapper(*args, **kwargs):\r
            now = time.time()\r
            # Clean timestamps older than 60 seconds:\r
            valid_timestamps = [t for t in invocation_timestamps if now - t < 60.0]\r
            invocation_timestamps.clear()\r
            invocation_timestamps.extend(valid_timestamps)\r
\r
            if len(invocation_timestamps) >= max_per_minute:\r
                raise RuntimeError(\r
                    f"[RATE LIMIT EXCEEDED] \`{func.__name__}\` cannot exceed {max_per_minute} calls/minute! Please wait."\r
                )\r
\r
            invocation_timestamps.append(now)\r
            return func(*args, **kwargs)\r
        return wrapper\r
    return decorator\r
\r
\r
# 2. RBAC Security Guard\r
def require_roles(*allowed_roles: str):\r
    def decorator(func):\r
        @functools.wraps(func)\r
        def wrapper(*args, **kwargs):\r
            role = session_context.get("role", "GUEST")\r
            if role not in allowed_roles:\r
                raise PermissionError(f"[UNAUTHORIZED] Role '{role}' cannot access \`{func.__name__}\`. Allowed: {allowed_roles}")\r
            return func(*args, **kwargs)\r
        return wrapper\r
    return decorator\r
\r
\r
# 3. High-Precision Timing & Forensic Audit\r
def forensic_telemetry(func):\r
    @functools.wraps(func)\r
    def wrapper(*args, **kwargs):\r
        t0 = time.perf_counter()\r
        user = session_context.get("user_id", "ANONYMOUS")\r
        print(f"  [AUDIT ENTRY] User: {user} | Method: \`{func.__name__}\` | Timestamp: {dt.datetime.now().strftime('%H:%M:%S')}")\r
\r
        result = func(*args, **kwargs)\r
\r
        elapsed_ms = (time.perf_counter() - t0) * 1000.0\r
        print(f"  [AUDIT EXIT]  Method \`{func.__name__}\` finished in {elapsed_ms:.2f} ms")\r
        return result\r
    return wrapper\r
\r
\r
# =====================================================================\r
# SECURED MISSION-CRITICAL PORTAL METHODS\r
# =====================================================================\r
@require_roles("ADMIN", "EXAM_CONTROLLER")\r
@rate_limit(max_per_minute=2)\r
@forensic_telemetry\r
def finalize_and_lock_exam_grades(exam_code: str, student_count: int) -> Dict[str, Any]:\r
    """Finalizes and cryptographically locks exam grades."""\r
    time.sleep(0.005)\r
    return {\r
        "exam_code": exam_code,\r
        "records_locked": student_count,\r
        "status": "FINALIZED_AND_SEALED"\r
    }\r
\r
\r
def run_portal_suite_demo():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - INSTITUTIONAL EXAM SECURITY PORTAL")\r
    print("=" * 70)\r
\r
    # 1. Successful Invocation #1:\r
    print("1. Admin Finalizing Grades (Call 1/2 - Allowed):")\r
    res1 = finalize_and_lock_exam_grades("PY-301-FINAL", 45)\r
    print(f"   Result: {res1}\\n")\r
\r
    # 2. Successful Invocation #2:\r
    print("2. Admin Finalizing Grades (Call 2/2 - Allowed):")\r
    res2 = finalize_and_lock_exam_grades("AI-401-FINAL", 32)\r
    print(f"   Result: {res2}\\n")\r
\r
    # 3. Triggering Rate Limit Guard (Call #3 in rapid succession):\r
    print("3. Attempting Rapid Call #3 (Triggers @rate_limit):")\r
    try:\r
        finalize_and_lock_exam_grades("DATA-201-FINAL", 28)\r
    except RuntimeError as err:\r
        print(f"   [BLOCKED] {err}\\n")\r
\r
    # 4. Testing Permission Guard with Unauthorized Student Role:\r
    print("4. Attempting Execution with Role = 'STUDENT' (Triggers @require_roles):")\r
    session_context["role"] = "STUDENT"\r
    try:\r
        finalize_and_lock_exam_grades("PY-301-FINAL", 45)\r
    except PermissionError as err:\r
        print(f"   [BLOCKED] {err}")\r
\r
    print("\\n[PASSED] Institutional Exam Security Portal Suite Verified.")\r
\r
\r
if __name__ == "__main__":\r
    run_portal_suite_demo()\r
`,R=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_003: DECORATORS & GENERATORS\r
          TOPIC 3: WRITING CUSTOM DECORATORS (LOGGING, TIMING, AUTH)\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. PERFORMANCE TIMING DECORATOR\r
--------------------------------------------------------------------------------\r
  def performance_timer(func):\r
      @functools.wraps(func)\r
      def wrapper(*args, **kwargs):\r
          t0 = time.perf_counter()\r
          res = func(*args, **kwargs)\r
          elapsed = (time.perf_counter() - t0) * 1000.0\r
          print(f"{func.__name__} took {elapsed:.2f} ms")\r
          return res\r
      return wrapper\r
\r
--------------------------------------------------------------------------------\r
2. RBAC SECURITY DECORATOR\r
--------------------------------------------------------------------------------\r
  def require_role(*allowed):\r
      def decorator(func):\r
          @functools.wraps(func)\r
          def wrapper(*args, **kwargs):\r
              if current_user.role not in allowed:\r
                  raise PermissionError("Access Denied")\r
              return func(*args, **kwargs)\r
          return wrapper\r
      return decorator\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 3: CUSTOM PYTHON DECORATORS\r
================================================================================\r
`,I=[{question:"What is the primary architectural purpose of writing Custom Decorators in Python?",shortAnswer:"To encapsulate cross-cutting concerns (such as logging, execution timing, authentication, rate limiting, and caching) into reusable modules without polluting business logic.",explanation:"Adheres to the Single Responsibility Principle and DRY.",hint:"Separates cross-cutting concerns (logging, auth, timing) from core business logic.",level:"basic",codeExample:`@audit_log
@require_auth
def process_payment(): pass`},{question:"Why is 'time.perf_counter()' preferred over 'time.time()' for execution timing decorators?",shortAnswer:"'time.perf_counter()' uses a high-resolution monotonic hardware clock that is immune to system clock adjustments and NTP syncs, providing microsecond-accurate benchmarking.",explanation:"'time.time()' can jump backward or forward if system time changes.",hint:"perf_counter() is monotonic and provides high-resolution hardware timing.",level:"basic",codeExample:`t0 = time.perf_counter()
res = func(*args)
elapsed = time.perf_counter() - t0`},{question:"How can a decorator track the invocation count of a function across its lifetime?",shortAnswer:"By attaching a state counter attribute directly to the wrapper function object (e.g. 'wrapper.calls += 1' with 'wrapper.calls = 0' defined on wrapper creation).",explanation:"Leverages the fact that functions in Python are mutable objects with a __dict__.",hint:"Attach a counter attribute directly to the wrapper function object.",level:"moderate",codeExample:`def counter(fn):
    def wrapper(*a, **kw):
        wrapper.calls += 1
        return fn(*a, **kw)
    wrapper.calls = 0
    return wrapper`},{question:"What is an 'RBAC' (Role-Based Access Control) security decorator?",shortAnswer:"A decorator that checks the active user's role against a list of authorized roles before allowing the decorated function to execute, raising 'PermissionError' if unauthorized.",explanation:"Standard pattern for securing endpoints in Django, FastAPI, and Flask.",hint:"A decorator that restricts function execution to specific user roles.",level:"basic",codeExample:`@require_role('ADMIN', 'MANAGER')
def delete_record(): pass`},{question:"How does a Rate-Limiting decorator prevent API abuse?",shortAnswer:"By maintaining a sliding window of recent invocation timestamps (or token bucket) in its closure, raising an exception if calls exceed the maximum allowed threshold within a time window.",explanation:"Protects against brute-force login attempts and DDOS.",hint:"Tracks timestamps in a closure window to block excessive calls.",level:"moderate",codeExample:`@rate_limit(max_per_minute=5)
def submit_login(): pass`},{question:"Can a custom decorator capture both positional and keyword arguments for structured logging?",shortAnswer:`Yes. By formatting 'args' (tuple) and 'kwargs' (dict) inside the wrapper: 'f"args={args}, kwargs={kwargs}"'.`,explanation:"Provides complete forensic visibility into input parameters.",hint:"Yes, by inspecting args and kwargs directly in the wrapper body.",level:"basic",codeExample:"logger.info(f'{func.__name__} called with {args}, {kwargs}')"},{question:"How can a timing decorator emit warnings only when a function runs slower than a specified threshold?",shortAnswer:"By calculating elapsed time and comparing it against a threshold: 'if elapsed_ms > threshold_ms: logger.warning(...)'.",explanation:"Reduces log noise by alerting only on performance degradation.",hint:"Compare elapsed time against a threshold and log a warning if exceeded.",level:"basic",codeExample:`if elapsed > 0.050:
    logger.warning(f'Slow execution: {elapsed}s')`},{question:"What is the 'Retry on Failure' decorator pattern?",shortAnswer:"A decorator that executes 'func(*args, **kwargs)' inside a loop with 'try...except', catching transient network/database errors and retrying up to N times before giving up.",explanation:"Crucial for microservice network resilience.",hint:"Catches exceptions and retries function execution up to N times.",level:"moderate",codeExample:`for attempt in range(3):
    try: return func()
    except TransientError: sleep(1)`},{question:"How can an authentication decorator extract user session info in web frameworks?",shortAnswer:"By inspecting 'request.user' or session tokens passed via keyword arguments, thread-local storage, or context variables ('contextvars').",explanation:"Standard integration with web request contexts.",hint:"Inspects request.user or context variables passed in args/kwargs.",level:"moderate",codeExample:"user = kwargs.get('user') or request.user"},{question:"Why should custom decorators never swallow exceptions unless explicitly designed as a fallback handler?",shortAnswer:"Because swallowing exceptions hides system bugs, masks database write failures, and prevents callers from handling errors properly.",explanation:"Follows Python's 'Errors should never pass silently' Zen rule.",hint:"Swallowing exceptions hides bugs and corrupts application state.",level:"basic",codeExample:"# Anti-pattern: except Exception: pass in decorator"},{question:"Can a decorator log the return value of a function?",shortAnswer:"Yes. Capture 'result = func(*args, **kwargs)', log 'result', and then return 'result' to the caller.",explanation:"Enables comprehensive request/response audit trails.",hint:"Capture the return value in a variable, log it, and return it.",level:"basic",codeExample:`res = func(*args, **kwargs)
logger.info(f'Return: {res}')
return res`},{question:"How can a decorator sanitize sensitive arguments (like passwords or credit card numbers) before logging?",shortAnswer:"By filtering 'kwargs' to mask sensitive keys (e.g. replacing 'password' value with '***') before writing to logs.",explanation:"Essential for GDPR and PCI-DSS compliance.",hint:"Mask sensitive keys (password, cvv) in kwargs before logging.",level:"moderate",codeExample:"clean_kwargs = {k: '***' if 'pass' in k else v for k, v in kwargs.items()}"},{question:"How does a caching decorator differ from a timing decorator?",shortAnswer:"A timing decorator always invokes 'func()' and measures duration; a caching decorator checks if the argument tuple exists in cache, returning immediately on a hit without calling 'func()'.",explanation:"Timing adds observation; caching alters control flow to optimize performance.",hint:"Caching skips calling func() on cache hits; timing always calls func().",level:"basic",codeExample:"# Caching short-circuits execution"},{question:"Can a custom decorator be applied to asynchronous 'async def' coroutines?",shortAnswer:"Yes, but the inner wrapper must also be declared as 'async def wrapper(*args, **kwargs):' and use 'await func(*args, **kwargs)'.",explanation:"Decorating coroutines requires async wrappers.",hint:"The inner wrapper must be async def and await the target function.",level:"complex",codeExample:`async def wrapper(*a, **kw):
    return await func(*a, **kw)`},{question:"What is the 'Deprecated' warning decorator?",shortAnswer:`A decorator that emits a 'warnings.warn("deprecated", DeprecationWarning)' when an obsolete function is invoked, alerting developers during migrations.`,explanation:"Standard library pattern for API lifecycle management.",hint:"Emits a DeprecationWarning when an old function is called.",level:"basic",codeExample:"warnings.warn(f'{func.__name__} is deprecated', DeprecationWarning)"},{question:"How do you test a custom decorator in pytest?",shortAnswer:"Apply the decorator to a dummy mock function and assert that pre/post conditions (logs, timing metrics, exceptions) behave as expected when calling the decorated mock.",explanation:"Verifies wrapper behavior in isolation.",hint:"Decorate a test function and assert on return value, timing, or side-effects.",level:"moderate",codeExample:`def test_timer():
    @timer
    def sample(): sleep(0.01)
    sample()`},{question:"What is a 'Type Validation' decorator?",shortAnswer:"A decorator that inspects function type annotations ('__annotations__') and verifies that passed runtime argument types match declared type hints, raising TypeError on mismatch.",explanation:"Enforces strict type contracts in dynamic Python code.",hint:"Checks runtime argument types against __annotations__.",level:"complex",codeExample:`@type_check
def calc(x: int, y: float): ...`},{question:"Can a decorator store historical execution statistics across multiple runs?",shortAnswer:"Yes. By appending metrics (e.g. durations, timestamps) to a list stored in the decorator's closure or wrapper attributes.",explanation:"Enables in-memory profiling and latency tracking.",hint:"Yes, by storing metrics in a closure list or wrapper attribute.",level:"moderate",codeExample:"wrapper.history.append(duration)"},{question:"How do you handle keyword-only arguments in custom decorators?",shortAnswer:"'*args, **kwargs' automatically captures all keyword-only arguments in the 'kwargs' dictionary, preserving their keyword-only nature when forwarded.",explanation:"Universal forwarding handles all argument styles.",hint:"**kwargs captures all keyword-only arguments automatically.",level:"basic",codeExample:"func(*args, **kwargs)  # Forwards keyword-only arguments"},{question:"Why is placing authorization logic in a decorator better than inside the function body?",shortAnswer:"It makes security declarative, auditable at a glance, prevents developers from forgetting auth checks, and decouples permissions from core business calculations.",explanation:"Reduces security vulnerabilities across enterprise backends.",hint:"Declarative security prevents human error and keeps business logic clean.",level:"basic",codeExample:"# @require_admin makes permissions immediately visible"},{question:"What is the 'Thread-Safety' consideration for stateful decorators in multithreaded apps?",shortAnswer:"When mutating shared closure state (like call counters or sliding rate-limit windows), access must be synchronized using 'threading.Lock()' to avoid race conditions.",explanation:"Critical for concurrent production web services (Gunicorn/FastAPI).",hint:"Use threading.Lock() when mutating shared state in multithreaded environments.",level:"complex",codeExample:`with lock:
    wrapper.calls += 1`},{question:"Can a decorator modify global variables?",shortAnswer:"Yes, but modifying globals inside decorators is an anti-pattern; state should be encapsulated in closures or wrapper attributes instead.",explanation:"Avoid global state pollution.",hint:"Possible, but encapsulating state in closures is vastly preferred.",level:"basic",codeExample:"# Prefer closure state over global variables"},{question:"What is the 'Singleton Class' decorator pattern?",shortAnswer:"A class decorator that wraps a class and ensures only one instance is ever created, returning the cached instance on subsequent instantiations.",explanation:"Implements the classic Creational Singleton Pattern.",hint:"Ensures only one instance of a class is created.",level:"complex",codeExample:`instances = {}
def singleton(cls):
    def get(): return instances.setdefault(cls, cls())
    return get`},{question:"How can decorators be chained to build a multi-layered security and monitoring pipeline?",shortAnswer:"By stacking them above the target function: '@audit_log', '@measure_latency', '@rate_limit', '@require_role', creating a sequential interceptor pipeline.",explanation:"The hallmark of clean, modular middleware architecture.",hint:"Stack decorators sequentially: @audit @timer @rate_limit @require_role.",level:"basic",codeExample:`@audit
@timer
@require_admin
def delete_student(): pass`},{question:"What is the ultimate golden rule for writing Custom Decorators in Python?",shortAnswer:"Keep each decorator focused on a single cross-cutting concern, always use '@functools.wraps(func)', accept and forward '*args, **kwargs', return the original evaluated result, and handle security/timing cleanly without side-effect pollution.",explanation:"The foundation of maintainable, high-performance Python architectures.",hint:"Single responsibility, use @functools.wraps, forward *args/**kwargs, return result.",level:"basic",codeExample:"# Production-grade custom decorator mastery"}];function B(){const p=o.useRef([]),[x,h]=o.useState("rbac"),[s,g]=o.useState("STUDENT"),[a,f]=o.useState("view_report"),[u,b]=o.useState(0),[l]=o.useState(3),[w,c]=o.useState([]),_=()=>{const t=[],i=performance.now(),d=u+1;if(b(d),d>l){t.push({type:"ERROR",text:`[RATE LIMIT EXCEEDED] RuntimeError: Rate limit of ${l} calls exceeded! Throttling request.`}),c(t);return}if(s==="GUEST"){t.push({type:"ERROR",text:"[AUTH FAILED] PermissionError: User is not authenticated. Please log in first!"}),c(t);return}if(a==="lock_grades"&&s!=="ADMIN"){t.push({type:"ERROR",text:`[RBAC DENIED] PermissionError: Role '${s}' is unauthorized for \`finalize_and_lock_grades\`. Required: ['ADMIN']`}),c(t);return}if(a==="publish_schedule"&&!["ADMIN","FACULTY"].includes(s)){t.push({type:"ERROR",text:`[RBAC DENIED] PermissionError: Role '${s}' is unauthorized for \`publish_exam_schedule\`. Required: ['ADMIN', 'FACULTY']`}),c(t);return}let m="";a==="view_report"?m="Retrieved Student Grade Sheet: Score 94.5% (Distinction Certificate Awarded)":a==="publish_schedule"?m="Published Official Examination Schedule for Batch 2026 (Room 102, AI Lab)":m="Cryptographically Locked & Sealed All Final Examination Grades (45 Candidates)";const j=((performance.now()-i)*10).toFixed(2);t.push({type:"SUCCESS",text:`[AUDIT PASS] Action \`${a}\` executed successfully by role '${s}'.`}),t.push({type:"RESULT",text:`[RESPONSE DATA] ${m}`}),t.push({type:"TIMER",text:`[BENCHMARK] Executed in ${j} microseconds. (Session Call #${d}/${l})`}),c(t)},y=()=>{b(0),c([]),g("STUDENT")};o.useEffect(()=>{const t=new IntersectionObserver(i=>{i.forEach(d=>{d.isIntersecting&&d.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return p.current.forEach(i=>{i&&t.observe(i)}),()=>t.disconnect()},[]);const n=t=>{t&&!p.current.includes(t)&&p.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:n,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_003"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 3"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Decorators, Generators & Iterators"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Writing Custom Decorators: ",e.jsx("span",{className:"text-teal-400",children:"Logging, Timing & Auth"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master building production-grade custom decorators: structured audit logging, stateful call counters, high-precision latency profiling with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"perf_counter()"}),", Role-Based Access Control (RBAC), and rate-limiting throttles."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔒 RBAC & Authentication Guards"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⏱️ High-Precision Performance Timers"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔢 Stateful Call Counters"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🚦 Sliding-Window Rate Limiting"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🛠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The 4 Essential Production Decorator Patterns"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"In production backend services, custom decorators allow you to enforce security, monitoring, and rate limiting uniformly across dozens of endpoints without duplicating code:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Audit Logging"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"@audit_logger"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Records timestamp, input args, and return status for compliance."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Latency Timer"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"@benchmark_timer"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Measures microsecond latency with ",e.jsx("code",{className:"text-cyan-300",children:"perf_counter()"})," and alerts on slow calls."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Security & RBAC"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"@require_role('ADMIN')"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Enforces authentication and permission checks before method entry."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 shadow-lg",children:[e.jsx("div",{className:"text-emerald-400 font-bold text-sm mb-1",children:"4️⃣ Rate Limiting"}),e.jsx("code",{className:"text-xs font-mono text-emerald-300 block mb-1",children:"@rate_limit(max=5)"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Throttles excessive invocations to prevent brute-force attacks."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"Stateful Function Attributes"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Because Python functions are mutable objects, decorators can attach state directly to the wrapper function object (e.g. ",e.jsx("code",{className:"text-teal-300 font-mono",children:"wrapper.calls = 0"}),"; ",e.jsx("code",{className:"text-teal-300 font-mono",children:"wrapper.calls += 1"}),") to track lifetime invocation metrics without global variables!"]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Security, Profiling & Stateful Interception"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>h("rbac"),className:r("px-3 py-1.5 rounded-lg transition-all",x==="rbac"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"RBAC Security Interceptor"}),e.jsx("button",{onClick:()=>h("counter"),className:r("px-3 py-1.5 rounded-lg transition-all",x==="counter"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Stateful Metric Tracking"}),e.jsx("button",{onClick:()=>h("ratelimit"),className:r("px-3 py-1.5 rounded-lg transition-all",x==="ratelimit"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Rate-Limiting Throttling"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining security verification gates, metric accumulation, and rate-limiting throttles:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:x==="rbac"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"ROLE-BASED ACCESS CONTROL (RBAC) SECURITY INTERCEPTION"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"15",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"1. Client Invocation"}),e.jsx("text",{x:"15",y:"60",fill:"#ecfdf5",fontSize:"8 font-mono",children:'finalize_grades("PY-301")'}),e.jsx("text",{x:"15",y:"85",fill:"#cbd5e1",fontSize:"8",children:"• Active Role: `STUDENT`"}),e.jsx("rect",{x:"15",y:"130",width:"220",height:"85",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"25",y:"155",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Caller Context:"}),e.jsx("text",{x:"25",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Context extracted from"}),e.jsx("text",{x:"25",y:"190",fill:"#cbd5e1",fontSize:"8",children:"request session or JWT token."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"310",y:"30",fill:"#fda4af",fontSize:"11 font-bold",children:"2. `@require_role('ADMIN')`"}),e.jsx("text",{x:"310",y:"60",fill:"#fca5a5",fontSize:"8 font-mono",children:"if role not in allowed:"}),e.jsx("text",{x:"325",y:"85",fill:"#fda4af",fontSize:"8 font-mono font-bold",children:"raise PermissionError()"}),e.jsx("rect",{x:"310",y:"130",width:"220",height:"85",rx:"4",fill:"#881337",stroke:"#e11d48"}),e.jsx("text",{x:"320",y:"155",fill:"#ffe4e6",fontSize:"9 font-bold",children:"Instant Gatekeeper Guard:"}),e.jsx("text",{x:"320",y:"175",fill:"#fca5a5",fontSize:"8",children:"Blocks unauthorized roles"}),e.jsx("text",{x:"320",y:"190",fill:"#fca5a5",fontSize:"8",children:"before business logic runs!"}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"605",y:"30",fill:"#a7f3d0",fontSize:"11 font-bold",children:"3. Core Admin Logic"}),e.jsx("text",{x:"605",y:"60",fill:"#ecfdf5",fontSize:"8 font-mono",children:"lock_exam_database()"}),e.jsx("text",{x:"605",y:"85",fill:"#34d399",fontSize:"8 font-mono font-bold",children:'return "SEALED"'}),e.jsx("rect",{x:"605",y:"130",width:"200",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"615",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"Secure Execution:"}),e.jsx("text",{x:"615",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Only authorized admins"}),e.jsx("text",{x:"615",y:"190",fill:"#cbd5e1",fontSize:"8",children:"can ever reach this line."})]})]}):x==="counter"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"STATEFUL METRIC TRACKING VIA FUNCTION ATTRIBUTES"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"Call Counter Decorator Code"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"8 font-mono",children:"def count_calls(func):"}),e.jsx("text",{x:"35",y:"80",fill:"#cbd5e1",fontSize:"8 font-mono",children:"def wrapper(*args, **kw):"}),e.jsx("text",{x:"50",y:"100",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"wrapper.calls += 1  # INCREMENT"}),e.jsx("text",{x:"50",y:"120",fill:"#cbd5e1",fontSize:"8 font-mono",children:"return func(*args, **kw)"}),e.jsx("text",{x:"35",y:"145",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"wrapper.calls = 0  # ATTACH ATTRIBUTE"}),e.jsx("text",{x:"35",y:"165",fill:"#ecfdf5",fontSize:"8 font-mono",children:"return wrapper"}),e.jsx("rect",{x:"20",y:"185",width:"340",height:"40",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"210",fill:"#a7f3d0",fontSize:"8 font-mono",children:"Functions are mutable objects in Python!"})]}),e.jsxs("g",{transform:"translate(425, 140)",children:[e.jsx("text",{x:"0",y:"0",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",children:"stores state"}),e.jsx("text",{x:"25",y:"25",fill:"#38bdf8",fontSize:"26",fontWeight:"bold",children:"→"})]}),e.jsxs("g",{transform:"translate(480, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"370",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"20",y:"30",fill:"#a5f3fc",fontSize:"12",fontWeight:"bold",children:"Function Object State in Memory"}),e.jsx("rect",{x:"20",y:"60",width:"330",height:"155",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"35",y:"85",fill:"#ecfdf5",fontSize:"9 font-mono",children:'issue_ticket("STU-101") -> `calls = 1`'}),e.jsx("text",{x:"35",y:"110",fill:"#ecfdf5",fontSize:"9 font-mono",children:'issue_ticket("STU-102") -> `calls = 2`'}),e.jsx("text",{x:"35",y:"135",fill:"#ecfdf5",fontSize:"9 font-mono",children:'issue_ticket("STU-103") -> `calls = 3`'}),e.jsx("text",{x:"35",y:"165",fill:"#38bdf8",fontSize:"9 font-mono font-bold",children:"print(issue_ticket.calls) -> 3"}),e.jsx("text",{x:"35",y:"195",fill:"#a5f3fc",fontSize:"8 font-bold",children:"✓ Zero global variables required!"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"SLIDING-WINDOW RATE LIMITING DECORATOR ARCHITECTURE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"15",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"1. Timestamp Ingestion"}),e.jsx("text",{x:"15",y:"60",fill:"#ecfdf5",fontSize:"8 font-mono",children:"now = time.time()"}),e.jsx("text",{x:"15",y:"85",fill:"#cbd5e1",fontSize:"8",children:"• Purge timestamps"}),e.jsx("text",{x:"15",y:"100",fill:"#cbd5e1",fontSize:"8",children:"older than 60s"}),e.jsx("rect",{x:"15",y:"130",width:"220",height:"85",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"25",y:"155",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Sliding Window:"}),e.jsx("text",{x:"25",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Maintains rolling history"}),e.jsx("text",{x:"25",y:"190",fill:"#cbd5e1",fontSize:"8",children:"of call timestamps."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"310",y:"30",fill:"#fda4af",fontSize:"11 font-bold",children:"2. Threshold Evaluation"}),e.jsx("text",{x:"310",y:"60",fill:"#fca5a5",fontSize:"8 font-mono",children:"if len(history) >= max:"}),e.jsx("text",{x:"325",y:"85",fill:"#fda4af",fontSize:"8 font-mono font-bold",children:"raise RuntimeError()"}),e.jsx("rect",{x:"310",y:"130",width:"220",height:"85",rx:"4",fill:"#881337",stroke:"#e11d48"}),e.jsx("text",{x:"320",y:"155",fill:"#ffe4e6",fontSize:"9 font-bold",children:"Throttling Tripwire:"}),e.jsx("text",{x:"320",y:"175",fill:"#fca5a5",fontSize:"8",children:"Protects database from"}),e.jsx("text",{x:"320",y:"190",fill:"#fca5a5",fontSize:"8",children:"brute-force request floods."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"605",y:"30",fill:"#a7f3d0",fontSize:"11 font-bold",children:"3. Forward & Execute"}),e.jsx("text",{x:"605",y:"60",fill:"#ecfdf5",fontSize:"8 font-mono",children:"history.append(now)"}),e.jsx("text",{x:"605",y:"85",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"return func(*args)"}),e.jsx("rect",{x:"605",y:"130",width:"200",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"615",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"Controlled Flow:"}),e.jsx("text",{x:"615",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Smooth, predictable API"}),e.jsx("text",{x:"615",y:"190",fill:"#cbd5e1",fontSize:"8",children:"rate consumption."})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Examination Security & RBAC Portal Simulator"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Select a session user role and attempt to invoke secured examination methods to witness RBAC and rate-limiting decorators in action:"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"1. Active Session Credentials"}),e.jsx("button",{onClick:y,className:"text-[11px] font-mono text-slate-400 hover:text-white underline",children:"Reset Session & Rate Limit"})]}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:["ADMIN","FACULTY","STUDENT","GUEST"].map(t=>e.jsx("button",{onClick:()=>g(t),className:r("p-2 rounded-lg text-center text-xs font-mono border transition-all",s===t?"bg-teal-950 border-teal-500 text-teal-200 font-bold":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:t},t))}),e.jsxs("div",{className:"space-y-2 pt-2 border-t border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block",children:"2. Select Decorated Target Method:"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("button",{onClick:()=>f("view_report"),className:r("p-2.5 rounded-lg text-left text-xs font-mono border transition-all",a==="view_report"?"bg-cyan-950/80 border-cyan-500 text-cyan-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"font-bold text-cyan-300",children:"view_own_report_card(student_id)"}),e.jsx("div",{className:"text-[10px] text-slate-500",children:"Decorated with: `@require_authenticated`"})]}),e.jsxs("button",{onClick:()=>f("publish_schedule"),className:r("p-2.5 rounded-lg text-left text-xs font-mono border transition-all",a==="publish_schedule"?"bg-purple-950/80 border-purple-500 text-purple-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"font-bold text-purple-300",children:"publish_exam_schedule(code, date)"}),e.jsx("div",{className:"text-[10px] text-slate-500",children:"Decorated with: `@require_role('ADMIN', 'FACULTY')`"})]}),e.jsxs("button",{onClick:()=>f("lock_grades"),className:r("p-2.5 rounded-lg text-left text-xs font-mono border transition-all",a==="lock_grades"?"bg-rose-950/80 border-rose-500 text-rose-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"font-bold text-rose-300",children:"finalize_and_lock_grades(code, count)"}),e.jsx("div",{className:"text-[10px] text-slate-500",children:"Decorated with: `@require_role('ADMIN')`, `@rate_limit(3)`"})]})]})]}),e.jsx("button",{onClick:_,className:"w-full py-2.5 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-lg text-xs font-mono transition-all shadow-lg shadow-teal-950/50",children:"Invoke Method (Execute Through Decorator Pipeline)"})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2 text-xs font-mono",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:"Rate Limit & Security Gatekeeper Status:"}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Authenticated Role:"}),e.jsx("span",{className:"text-teal-300 font-bold",children:s})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Session Rate Limit Usage:"}),e.jsxs("span",{className:r("font-bold",u>l?"text-rose-400":"text-emerald-400"),children:[u," / ",l," calls consumed"]})]}),e.jsx("div",{className:"w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800",children:e.jsx("div",{className:r("h-full transition-all duration-300",u>l?"bg-rose-500":"bg-teal-500"),style:{width:`${Math.min(u/l*100,100)}%`}})})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[180px] space-y-1.5 font-mono text-xs",children:[e.jsx("span",{className:"text-slate-400 block font-bold text-[10px] uppercase",children:"Telemetry & Security Interception Log:"}),w.length===0?e.jsx("div",{className:"text-slate-500 italic text-[11px]",children:'Click "Invoke Method" to execute secured call.'}):w.map((t,i)=>e.jsx("div",{className:r("p-1.5 rounded text-[11px] leading-relaxed",t.type==="ERROR"&&"bg-rose-950/60 border border-rose-800 text-rose-300 font-bold",t.type==="SUCCESS"&&"text-emerald-300 font-bold",t.type==="RESULT"&&"text-teal-200",t.type==="TIMER"&&"text-cyan-300 text-[10px]"),children:t.text},i))]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Custom Decorator Design Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Category"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Implementation Strategy"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Key Mechanism"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Production Benefit"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"Audit Logging"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"def wrapper(*a, **kw): log(a, kw); return fn(*a, **kw)"}),e.jsx("td",{className:"py-3 px-4",children:"Pre/Post execution serialization"}),e.jsx("td",{className:"py-3 px-4",children:"Zero business logic pollution"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"Latency Profiler"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"t0 = perf_counter(); res = fn(); log(perf_counter()-t0)"}),e.jsx("td",{className:"py-3 px-4",children:"Monotonic hardware timing"}),e.jsx("td",{className:"py-3 px-4",children:"Immediate slow-query detection"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"RBAC Security"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"if user.role not in allowed: raise PermissionError"}),e.jsx("td",{className:"py-3 px-4",children:"Early authorization gatekeeper"}),e.jsx("td",{className:"py-3 px-4",children:"Declarative, secure endpoints"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-300 font-semibold",children:"Call Counter"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"wrapper.calls += 1; return fn(*a, **kw)"}),e.jsx("td",{className:"py-3 px-4",children:"Function object attribute mutation"}),e.jsx("td",{className:"py-3 px-4",children:"In-memory metric telemetry"})]})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating call counters, execution profiling, RBAC security, and institutional examination portals:"}),e.jsx(N,{files:[{filename:"custom_logging_and_call_count_decorators.py",code:k,description:"Stateful call counter decorator using function attributes and structured audit logging."},{filename:"execution_timing_and_profiling_decorators.py",code:E,description:"High-precision performance timer with perf_counter() and slow-execution warning alerts."},{filename:"authentication_and_rbac_decorators.py",code:T,description:"Authentication and Role-Based Access Control (RBAC) security decorators enforcing permissions."},{filename:"institutional_examination_security_portal_suite.py",code:C,description:"Enterprise Examination Security Portal with stacked rate-limiting, RBAC, and forensic telemetry."}]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Swallowing Exceptions in Decorators"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Catching errors inside a decorator without re-raising hides critical backend crashes and corrupts database transactions."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Log errors with ",e.jsx("code",{className:"text-emerald-300",children:"logger.exception()"})," and re-raise."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Leaking Passwords in Audit Logs"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Blindly logging ",e.jsxs("code",{className:"text-amber-300 font-mono",children:['f"kwargs=',kwargs,'"']})," can write raw passwords and credit cards into plain text log files!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Sanitize sensitive keys (",e.jsx("code",{className:"text-emerald-300",children:"'password', 'token'"}),") before logging."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Using `time.time()` for Benchmarking"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["System clock adjustments (NTP syncs) can cause ",e.jsx("code",{className:"text-purple-300 font-mono",children:"time.time()"})," to produce negative or wildly inaccurate durations."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always use monotonic ",e.jsx("code",{className:"text-emerald-300",children:"time.perf_counter()"})," for benchmarking."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Thread Race in Stateful Counters"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Mutating ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"wrapper.calls += 1"})," in multi-threaded servers causes race conditions without locks."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Synchronize shared counter access using ",e.jsx("code",{className:"text-emerald-300",children:"threading.Lock()"}),"."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering custom decorators, audit logging, performance timers, and RBAC authentication:"}),e.jsx(S,{questions:I})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with custom decorator templates, timing recipes, and RBAC blueprints:"}),e.jsx("div",{className:"mb-10",children:e.jsx(v,{content:R,filename:"python_topic3_custom_decorators_notes.txt",title:"Print Topic 3 Study Notes"})}),e.jsx(A,{})]})]})]})}export{B as default};
