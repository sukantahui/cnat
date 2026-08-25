import{b as c,j as e,bg as r}from"./vendor-react-core-Doz9nIC6.js";import{P as h}from"./PythonFileLoader-hCi5osN-.js";import{P as m}from"./PlainTextPrint-C08xhKA4.js";import{F as u}from"./FAQTemplate-CkSqDH4B.js";import{T as f}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const _=`# topic9_files/explicit_exception_chaining_from.py\r
# Module: 003_002_basic-exception-handling\r
# Topic: Exception Chaining (raise ... from ...)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 9 - File 1: Explicit Exception Chaining (\`raise ... from ...\`)\r
Demonstrates:\r
  1. Explicit chaining using \`raise NewException(...) from OriginalException\` (PEP 3134)\r
  2. How Python populates the \`__cause__\` attribute on the new exception\r
  3. Outputting clear causal tracebacks: "The above exception was the direct cause of the following exception"\r
"""\r
\r
class StudentLedgerStorageError(Exception):\r
    """High-level domain exception for ledger storage failures."""\r
    pass\r
\r
\r
def parse_raw_tuition_record(raw_line: str) -> dict:\r
    """Parses a comma-separated record and raises chained domain exception on failure."""\r
    try:\r
        parts = raw_line.split(",")\r
        student_id = parts[0].strip()\r
        fee_amount = float(parts[1].strip())\r
        return {"id": student_id, "fee": fee_amount}\r
    except (IndexError, ValueError) as root_cause:\r
        # EXPLICIT EXCEPTION CHAINING:\r
        raise StudentLedgerStorageError(\r
            f"Failed to process tuition record string: '{raw_line}'"\r
        ) from root_cause\r
\r
\r
def demonstrate_explicit_chaining():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - EXPLICIT EXCEPTION CHAINING (raise ... from ...)")\r
    print("=" * 70)\r
\r
    # 1. Valid Parsing\r
    print("1. Parsing Valid Tuition Record:")\r
    res = parse_raw_tuition_record("STU-101, 18000.0")\r
    print(f"   Parsed Record: {res}\\n")\r
\r
    # 2. Triggering Explicit Chained Exception\r
    print("2. Parsing Corrupt Record ('STU-102, INVALID_FEE'):")\r
    try:\r
        parse_raw_tuition_record("STU-102, INVALID_FEE")\r
    except StudentLedgerStorageError as domain_err:\r
        print(f"\\n[CAUGHT HIGH-LEVEL DOMAIN EXCEPTION]:\\n  {domain_err}")\r
        \r
        # Inspecting the __cause__ attribute:\r
        cause = domain_err.__cause__\r
        print(f"\\n[INSPECTING __cause__ ATTRIBUTE]:")\r
        print(f"  * Root Cause Type    : {type(cause).__name__}")\r
        print(f"  * Root Cause Message : {cause}")\r
        print(f"  * Is Chained Explicitly: {domain_err.__cause__ is not None}")\r
\r
    print("\\n[PASSED] Explicit Exception Chaining Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_explicit_chaining()\r
`,b=`# topic9_files/implicit_chaining_and_context.py\r
# Module: 003_002_basic-exception-handling\r
# Topic: Exception Chaining (raise ... from ...)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 9 - File 2: Implicit Chaining, \`__context__\` & Suppressing with \`from None\`\r
Demonstrates:\r
  1. Implicit chaining: Automatic setting of \`__context__\` when an error occurs in \`except\`\r
  2. The traceback message: "During handling of the above exception, another exception occurred"\r
  3. Suppressing low-level tracebacks with \`raise ... from None\`\r
"""\r
\r
class StudentAuthenticationError(Exception):\r
    """Clean public exception shown to end-users."""\r
    pass\r
\r
\r
def implicit_chaining_demo(db_path: str):\r
    """Demonstrates implicit chaining (shows two tracebacks automatically)."""\r
    try:\r
        # Step 1: Low-level file opening error\r
        with open(db_path, "r") as f:\r
            return f.read()\r
    except FileNotFoundError:\r
        # Step 2: Raising a new exception inside except WITHOUT 'from':\r
        # Python automatically sets __context__ to the FileNotFoundError!\r
        raise StudentAuthenticationError("Internal authentication credentials could not be loaded!")\r
\r
\r
def suppressed_chaining_demo(db_path: str):\r
    """Demonstrates suppressed chaining with \`from None\` (hides low-level traceback)."""\r
    try:\r
        with open(db_path, "r") as f:\r
            return f.read()\r
    except FileNotFoundError:\r
        # Step 2: SUPPRESSING THE INTERNAL TRACEBACK USING 'from None':\r
        raise StudentAuthenticationError("Invalid or missing institutional authentication credentials.") from None\r
\r
\r
def demonstrate_implicit_and_suppressed():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - IMPLICIT CHAINING & \`from None\` SUPPRESSION")\r
    print("=" * 70)\r
\r
    # 1. Implicit Chaining Inspection:\r
    print("1. Inspecting Implicit Chaining (__context__):")\r
    try:\r
        implicit_chaining_demo("non_existent_auth.db")\r
    except StudentAuthenticationError as err:\r
        print(f"  * Caught Error : {err}")\r
        print(f"  * __context__  : {type(err.__context__).__name__}: {err.__context__}")\r
        print(f"  * __cause__    : {err.__cause__} (None because chaining was implicit!)")\r
        print(f"  * __suppress_context__: {err.__suppress_context__}\\n")\r
\r
    # 2. Suppressed Chaining Inspection (\`from None\`):\r
    print("2. Inspecting Suppressed Chaining (\`from None\`):")\r
    try:\r
        suppressed_chaining_demo("non_existent_auth.db")\r
    except StudentAuthenticationError as err:\r
        print(f"  * Caught Error : {err}")\r
        print(f"  * __cause__    : {err.__cause__}")\r
        print(f"  * __suppress_context__: {err.__suppress_context__} (Clean, single traceback!)")\r
\r
    print(r"""\r
Summary of Differences:\r
  - \`raise New from Original\` -> Explicit (\`__cause__\` set, shows "direct cause").\r
  - \`raise New\` (in except)   -> Implicit (\`__context__\` set, shows "during handling").\r
  - \`raise New from None\`     -> Suppressed (\`__suppress_context__ = True\`, hides root).\r
""")\r
    print("[PASSED] Implicit & Suppressed Chaining Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_implicit_and_suppressed()\r
`,g=`# topic9_files/subsystem_exception_translation_layer.py\r
# Module: 003_002_basic-exception-handling\r
# Topic: Exception Chaining (raise ... from ...)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 9 - File 3: Subsystem Exception Translation Layer Architecture\r
Demonstrates:\r
  1. The Subsystem Exception Translation pattern\r
  2. Translating low-level library/hardware errors into clean high-level domain exceptions\r
  3. Preserving root-cause telemetry for Sentry/Datadog and DevOps engineers\r
"""\r
\r
from typing import Dict, Any\r
\r
# High-Level Domain Exceptions\r
class StudentPortalServiceError(Exception):\r
    """Base domain exception for student portal microservices."""\r
    pass\r
\r
class StudentRecordNotFoundError(StudentPortalServiceError):\r
    """High-level error raised when a requested student cannot be found."""\r
    pass\r
\r
class FeePaymentProcessingError(StudentPortalServiceError):\r
    """High-level error raised when payment gateway operations fail."""\r
    pass\r
\r
\r
class MockDatabaseSubsystem:\r
    """Simulates a low-level key-value or SQL storage driver."""\r
    def __init__(self):\r
        self._raw_data = {\r
            "STU-101": {"name": "Sourav Mukherjee", "fee_balance": 5000.0}\r
        }\r
\r
    def fetch_raw_row(self, key: str) -> Dict[str, Any]:\r
        # Raises low-level KeyError if row does not exist:\r
        return self._raw_data[key]\r
\r
\r
class StudentPortalService:\r
    """High-level application service translating low-level errors."""\r
    def __init__(self):\r
        self.db = MockDatabaseSubsystem()\r
\r
    def get_student_profile(self, student_id: str) -> Dict[str, Any]:\r
        try:\r
            return self.db.fetch_raw_row(student_id)\r
        except KeyError as low_level_key_err:\r
            # TRANSLATE LOW-LEVEL KeyError -> HIGH-LEVEL StudentRecordNotFoundError\r
            raise StudentRecordNotFoundError(\r
                f"Student with registration ID '{student_id}' does not exist in Coder & AccoTax active registry!"\r
            ) from low_level_key_err\r
\r
\r
def demonstrate_translation_layer():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - SUBSYSTEM EXCEPTION TRANSLATION LAYER")\r
    print("=" * 70)\r
\r
    service = StudentPortalService()\r
\r
    # 1. Successful Query\r
    print("1. Fetching Existing Student Record (STU-101):")\r
    profile = service.get_student_profile("STU-101")\r
    print(f"   Record Found: {profile}\\n")\r
\r
    # 2. Triggering Translated Chained Error\r
    print("2. Fetching Non-Existent Student Record (STU-999):")\r
    try:\r
        service.get_student_profile("STU-999")\r
    except StudentRecordNotFoundError as domain_err:\r
        print(f"  [DOMAIN LEVEL ERROR]: {domain_err}")\r
        print(f"  [ORIGINAL ROOT CAUSE]: {type(domain_err.__cause__).__name__}: {domain_err.__cause__}")\r
\r
    print(r"""\r
Architectural Benefits:\r
  1. Abstraction Boundary: Callers never need to know internal storage uses dicts, SQL, or MongoDB.\r
  2. Complete Traceability: DevOps can inspect \`err.__cause__\` to diagnose the exact low-level failure!\r
""")\r
    print("[PASSED] Subsystem Exception Translation Layer Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_translation_layer()\r
`,y=`# topic9_files/banking_gateway_exception_chaining_suite.py\r
# Module: 003_002_basic-exception-handling\r
# Topic: Exception Chaining (raise ... from ...)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 9 - File 4: Enterprise Banking & Fee Gateway Exception Chaining Suite (Case Study)\r
Demonstrates:\r
  1. Production payment gateway client wrapping multi-layer network and parsing failures\r
  2. Full exception chaining with \`from root_cause\` for forensic tracking\r
  3. Sanitizing public API errors using \`from None\` to prevent credential leaks\r
"""\r
\r
import json\r
from typing import Dict, Any\r
\r
# =====================================================================\r
# DOMAIN PAYMENT GATEWAY EXCEPTIONS\r
# =====================================================================\r
class PaymentGatewayBaseError(Exception):\r
    """Base exception for all payment gateway transactions."""\r
    pass\r
\r
class PaymentGatewayTimeoutError(PaymentGatewayBaseError):\r
    """Raised when bank API socket fails to respond within timeout window."""\r
    pass\r
\r
class MalformedPaymentResponseError(PaymentGatewayBaseError):\r
    """Raised when bank API returns corrupt or invalid JSON."""\r
    pass\r
\r
class CardAuthorizationFailedError(PaymentGatewayBaseError):\r
    """Clean public exception shown to students/parents."""\r
    pass\r
\r
\r
# =====================================================================\r
# PAYMENT GATEWAY CLIENT\r
# =====================================================================\r
class InstitutionalFeePaymentGateway:\r
    """Enterprise payment client for Coder & AccoTax fees."""\r
\r
    def submit_fee_payment(self, student_id: str, amount_inr: float, simulated_scenario: str) -> Dict[str, Any]:\r
        print(f"  [GATEWAY INITIATED] Processing INR {amount_inr:,.2f} for Student {student_id}...")\r
\r
        # Scenario 1: Socket Timeout\r
        if simulated_scenario == "timeout":\r
            try:\r
                # Simulating low-level socket timeout\r
                raise TimeoutError("Socket read timed out after 3000ms on api.bankgateway.in:443")\r
            except TimeoutError as socket_err:\r
                raise PaymentGatewayTimeoutError(\r
                    f"Bank authorization server timed out for transaction (Student: {student_id})"\r
                ) from socket_err\r
\r
        # Scenario 2: Corrupt JSON Response\r
        elif simulated_scenario == "corrupt_json":\r
            try:\r
                raw_response = "<xml>Gateway 502 Bad Gateway</xml>"  # Not JSON!\r
                parsed = json.loads(raw_response)\r
            except json.JSONDecodeError as json_err:\r
                raise MalformedPaymentResponseError(\r
                    f"Bank API returned invalid non-JSON payload for Student {student_id}"\r
                ) from json_err\r
\r
        # Scenario 3: Clean Public Error (Suppressed Chaining)\r
        elif simulated_scenario == "card_declined":\r
            try:\r
                # Internal bank decline with internal routing codes\r
                raise ValueError("DECLINE_CODE_51_INSUFFICIENT_LIMIT_ACC_998124")\r
            except ValueError:\r
                # Suppress internal account strings from leaking to client UI:\r
                raise CardAuthorizationFailedError(\r
                    "Your payment card was declined by the issuing bank. Please contact your bank or try another card."\r
                ) from None\r
\r
        # Scenario 4: Success\r
        return {\r
            "status": "APPROVED",\r
            "transaction_id": "TXN-2026-991823",\r
            "student_id": student_id,\r
            "amount_paid": amount_inr\r
        }\r
\r
\r
def run_banking_chaining_demo():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - PAYMENT GATEWAY EXCEPTION CHAINING SUITE")\r
    print("=" * 70)\r
\r
    gateway = InstitutionalFeePaymentGateway()\r
\r
    # 1. Successful Transaction\r
    print("1. Successful Tuition Payment:")\r
    receipt = gateway.submit_fee_payment("STU-101", 18000.0, simulated_scenario="success")\r
    print(f"   Receipt: {receipt}\\n")\r
\r
    # 2. Testing Network Timeout (Chained via \`from socket_err\`)\r
    print("2. Testing Bank Socket Timeout (Chained via \`from\`):")\r
    try:\r
        gateway.submit_fee_payment("STU-102", 15000.0, simulated_scenario="timeout")\r
    except PaymentGatewayTimeoutError as err:\r
        print(f"   [CAUGHT DOMAIN ERROR] {err}")\r
        print(f"   * Root Cause Type   : {type(err.__cause__).__name__}")\r
        print(f"   * Root Cause Message: {err.__cause__}\\n")\r
\r
    # 3. Testing Corrupt JSON (Chained via \`from json_err\`)\r
    print("3. Testing Malformed JSON Response (Chained via \`from\`):")\r
    try:\r
        gateway.submit_fee_payment("STU-103", 22000.0, simulated_scenario="corrupt_json")\r
    except MalformedPaymentResponseError as err:\r
        print(f"   [CAUGHT DOMAIN ERROR] {err}")\r
        print(f"   * Root Cause Type   : {type(err.__cause__).__name__}\\n")\r
\r
    # 4. Testing Card Declined (Suppressed via \`from None\`)\r
    print("4. Testing Card Declined (Suppressed via \`from None\` to hide internal codes):")\r
    try:\r
        gateway.submit_fee_payment("STU-104", 12000.0, simulated_scenario="card_declined")\r
    except CardAuthorizationFailedError as err:\r
        print(f"   [CLEAN PUBLIC ERROR] {err}")\r
        print(f"   * __cause__ is None : {err.__cause__ is None}")\r
        print(f"   * Context Suppressed: {err.__suppress_context__}")\r
\r
    print("\\n[PASSED] Payment Gateway Exception Chaining Suite Completed Successfully.")\r
\r
\r
if __name__ == "__main__":\r
    run_banking_chaining_demo()\r
`,w=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_002: EXCEPTION HANDLING\r
            TOPIC 9: EXCEPTION CHAINING (RAISE ... FROM ...) IN PYTHON\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. EXPLICIT CHAINING (\`raise ... from e\`)\r
--------------------------------------------------------------------------------\r
  try:\r
      raw = socket.read()\r
  except TimeoutError as e:\r
      # Explicitly chains e as the direct cause:\r
      raise PaymentGatewayTimeoutError("Bank timed out") from e\r
\r
  # Populates: err.__cause__ = e\r
  # Traceback: "The above exception was the direct cause of the following exception"\r
\r
--------------------------------------------------------------------------------\r
2. SUPPRESSED CHAINING (\`raise ... from None\`)\r
--------------------------------------------------------------------------------\r
  try:\r
      execute_internal_db()\r
  except InternalSqlError:\r
      # Suppresses internal traceback to prevent leaking schema details:\r
      raise UserVisibleError("Failed to update profile") from None\r
\r
  # Sets: err.__suppress_context__ = True\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 9: EXCEPTION CHAINING (FROM)\r
================================================================================\r
`,N=[{question:"What is Exception Chaining in Python (PEP 3134)?",shortAnswer:"A language feature that links a newly raised exception to the original root-cause exception that triggered it, preserving complete causal diagnostic history in tracebacks.",explanation:"Introduced in Python 3 to provide full visibility into multi-tiered errors.",hint:"Linking a new exception to its original root cause.",level:"basic",codeExample:"raise DomainError('Transaction failed') from root_socket_error"},{question:"What attribute does Python populate on the new exception when using 'raise NewException from OriginalException'?",shortAnswer:"It populates the '__cause__' attribute ('new_err.__cause__ = OriginalException').",explanation:"Allows programmatic inspection of the root cause.",hint:"The __cause__ attribute.",level:"basic",codeExample:"print(err.__cause__)  # The original exception instance"},{question:"What is the difference between explicit chaining and implicit chaining?",shortAnswer:"Explicit chaining uses 'raise New from Orig' (sets '__cause__', traceback displays 'direct cause'); implicit chaining occurs automatically when an error is raised inside an 'except' block without 'from' (sets '__context__', traceback displays 'During handling of the above exception').",explanation:"Explicit chaining indicates deliberate causal wrapping; implicit indicates secondary errors during recovery.",hint:"Explicit uses 'from' (__cause__); implicit happens automatically (__context__).",level:"moderate",codeExample:`# Explicit: raise B from A
# Implicit: except A: raise B`},{question:"What is the purpose of 'raise NewException from None'?",shortAnswer:"To explicitly suppress and hide the original root-cause exception and its traceback, setting '__suppress_context__ = True' to show only the new clean exception.",explanation:"Essential for creating clean user-facing error messages without leaking internal implementation details.",hint:"Suppresses the underlying traceback to present a clean single error.",level:"basic",codeExample:"raise CardDeclinedError('Card declined') from None"},{question:"Why is 'from None' crucial for security in public web APIs?",shortAnswer:"Because it prevents sensitive internal implementation details (such as raw SQL queries, database hostnames, file paths, or API secret keys) from leaking into client-visible error responses.",explanation:"A core principle of secure application design.",hint:"Prevents internal database schemas or credentials from leaking in tracebacks.",level:"moderate",codeExample:`# Hides internal SQL schema from client:
raise PublicAPIError('User not found') from None`},{question:"What is the 'Subsystem Exception Translation Layer' pattern?",shortAnswer:"An architectural pattern where a high-level service catches low-level driver or third-party exceptions (e.g. psycopg2, urllib, requests) and wraps them into domain exceptions (e.g. DatabaseTimeoutError) chained with 'from e'.",explanation:"Decouples application logic from specific vendor libraries while preserving forensic root causes.",hint:"Wrapping third-party library errors into clean domain exceptions.",level:"moderate",codeExample:`except sqlite3.OperationalError as e:
    raise LedgerStorageError from e`},{question:"How does traceback formatting differ between explicit and implicit chaining?",shortAnswer:"Explicit chaining displays: 'The above exception was the direct cause of the following exception:'; implicit chaining displays: 'During handling of the above exception, another exception occurred:'.",explanation:"Allows engineers reading logs to distinguish deliberate wrapping from unexpected crashes.",hint:"Explicit = 'direct cause'; Implicit = 'During handling...'.",level:"moderate",codeExample:"# CPython traceback rendering distinction"},{question:"Can you chain an exception that was created dynamically without catching it first?",shortAnswer:`Yes. You can instantiate an exception object and chain it directly: 'raise HighLevelError() from ValueError("Initial reason")'.`,explanation:"Any instance or subclass of BaseException (or None) can follow 'from'.",hint:"Yes, any exception instance or class can follow 'from'.",level:"complex",codeExample:"raise ApplicationError('Failed') from TimeoutError('3000ms')"},{question:`What happens if you pass an object that does NOT inherit from BaseException to 'from' (e.g. 'raise MyError from "bad string"')?`,shortAnswer:"Python raises 'TypeError: exception causes must derive from BaseException or be None'.",explanation:"Enforced by Python's runtime exception machinery.",hint:"Raises TypeError: causes must derive from BaseException or be None.",level:"moderate",codeExample:"# TypeError: exception causes must derive from BaseException"},{question:"How can centralized monitoring tools (like Sentry or Datadog) utilize chained exceptions?",shortAnswer:"They inspect the '__cause__' and '__context__' recursive tree to display multi-layered stack traces, linking high-level business failures to low-level socket or query crashes.",explanation:"Provides instant end-to-end root cause diagnostics.",hint:"Inspects __cause__ tree to display multi-layered causal stack traces.",level:"moderate",codeExample:"# Sentry groups errors by root __cause__"},{question:"Can an exception chain have more than two levels (e.g. A caused B which caused C)?",shortAnswer:"Yes. Python supports arbitrary depth causal chains: 'err_c.__cause__ = err_b', and 'err_b.__cause__ = err_a', printing all causal links in sequence.",explanation:"Reflects deep multi-tier microservice call chains accurately.",hint:"Yes, exception chains can be nested to arbitrary depths.",level:"basic",codeExample:"# Level 1 -> Level 2 -> Level 3 full causal chain"},{question:"How do you access the original root cause programmatically in Python code?",shortAnswer:"By reading the 'err.__cause__' attribute on the caught exception instance.",explanation:"Returns the original exception instance (or None if unchained).",hint:"Read the err.__cause__ attribute.",level:"basic",codeExample:`except HighLevelError as e:
    root = e.__cause__`},{question:"What happens if both '__cause__' and '__context__' are present on an exception?",shortAnswer:"If '__cause__' is explicitly set (even to None), Python ignores '__context__' and renders only the explicit cause (or suppresses it if None).",explanation:"Explicit '__cause__' always takes priority over implicit '__context__'.",hint:"Explicit __cause__ overrides implicit __context__.",level:"complex",codeExample:"# __cause__ takes precedence over __context__"},{question:"Why should you NOT use bare 'raise NewError' inside an 'except' block when translating exceptions?",shortAnswer:"Because it relies on implicit chaining ('__context__'), which displays confusing 'During handling...' messages instead of clear causal 'direct cause' relationships.",explanation:"Always use explicit 'raise NewError from old_error' for intentional translation.",hint:"Use explicit 'from e' to signal intentional causal translation.",level:"moderate",codeExample:`# Prefer: raise DomainError from e
# Over: raise DomainError`},{question:"Can you iterate through an entire exception causal chain programmatically?",shortAnswer:"Yes. Use a simple while loop: 'current = err; while current.__cause__: current = current.__cause__' to find the primordial root cause.",explanation:"Common utility function in enterprise error reporting libraries.",hint:"Traverse current = current.__cause__ in a loop.",level:"complex",codeExample:`def get_root(e):
    while e.__cause__: e = e.__cause__
    return e`},{question:"How does exception chaining interact with 'sys.exc_info()'?",shortAnswer:"'sys.exc_info()' returns only the topmost active exception; chained ancestors are accessed via the returned exception's '__cause__' or '__context__' attributes.",explanation:"Keeps sys.exc_info() focused on the currently active event.",hint:"sys.exc_info() returns topmost exception; inspect its __cause__.",level:"complex",codeExample:`exc_type, exc_val, tb = sys.exc_info()
root = exc_val.__cause__`},{question:"What is the relationship between PEP 3134 and Python 2 vs Python 3?",shortAnswer:"PEP 3134 introduced exception chaining in Python 3; Python 2 had no native 'raise ... from ...' syntax and would lose or overwrite root tracebacks when new exceptions were raised.",explanation:"A major evolutionary upgrade in Python 3's error handling model.",hint:"PEP 3134 added native chaining in Python 3; Python 2 lacked 'raise from'.",level:"basic",codeExample:"# Python 3 native feature: raise B from A"},{question:"Can you chain exceptions inside an asynchronous coroutine ('async def')?",shortAnswer:"Yes. Exception chaining works identically in synchronous functions, asynchronous coroutines, and generator functions.",explanation:"Standard part of the Python runtime core.",hint:"Yes, fully supported in async/await coroutines.",level:"basic",codeExample:`async def fetch():
    raise APIError from timeout_err`},{question:"What is the difference between 'raise' and 'raise err from err'?",shortAnswer:"'raise' re-raises the active exception as-is; 'raise err from err' creates a confusing circular self-referencing causal loop (err.__cause__ = err) and should never be done.",explanation:"Always use bare 'raise' to re-raise.",hint:"Use bare 'raise' to re-raise; never chain an exception to itself.",level:"complex",codeExample:"# Anti-pattern: raise e from e -> Circular chain!"},{question:"How does the 'traceback' module print chained exceptions?",shortAnswer:"'traceback.print_exc()' and 'traceback.format_exc()' automatically traverse '__cause__' and '__context__' chains, printing the complete multi-tier traceback by default.",explanation:"Provides complete forensic visibility out of the box.",hint:"traceback module automatically prints the entire chained hierarchy.",level:"moderate",codeExample:`import traceback
traceback.print_exc()  # Prints all chained tracebacks`},{question:"Can you attach custom metadata to an exception before chaining it?",shortAnswer:"Yes. You can populate attributes on the new domain exception (e.g. 'new_err.txn_id = 99') and then execute 'raise new_err from old_err'.",explanation:"Combines rich domain payloads with root cause tracing.",hint:"Yes, set attributes on the new exception and chain with 'from'.",level:"basic",codeExample:"err = DomainError('Failed'); err.txn_id = 99; raise err from e"},{question:"What is a 'Causal Audit Log'?",shortAnswer:"A structured log entry that records both the high-level business operation failure and the exact low-level technical root cause extracted from '__cause__'.",explanation:"Bridges the gap between business reporting and technical debugging.",hint:"Logging both high-level business error and technical root cause.",level:"basic",codeExample:"logger.error(f'{err} caused by {err.__cause__}')"},{question:"How does 'pytest' handle testing chained exceptions?",shortAnswer:"You catch the outer exception with 'with pytest.raises(OuterError) as exc_info:', and then assert 'isinstance(exc_info.value.__cause__, InnerError)'.",explanation:"Enables precise unit testing of translation layers.",hint:"Assert isinstance(exc_info.value.__cause__, InnerError).",level:"moderate",codeExample:`with pytest.raises(PortalError) as exc:
    service.query()
assert isinstance(exc.value.__cause__, KeyError)`},{question:"When should you prefer 'raise ... from None' over 'raise ... from e'?",shortAnswer:"Use 'from None' when the underlying error is an internal implementation detail that adds noise or leaks sensitive data; use 'from e' when the underlying error provides vital forensic context for debugging.",explanation:"Balances security/cleanliness with diagnostic transparency.",hint:"Use 'from None' to hide noise/secrets; use 'from e' for forensic debugging.",level:"moderate",codeExample:`# Clean UI: from None
# Internal backend debugging: from e`},{question:"What is the ultimate golden rule for Exception Chaining in Python?",shortAnswer:"Always use explicit 'raise DomainError(...) from original_err' when translating low-level errors into high-level domain exceptions, use 'from None' to sanitize public-facing errors, and inspect '__cause__' for telemetry and debugging.",explanation:"Maintains pristine abstraction boundaries while preserving complete forensic traceability.",hint:"Use 'from e' for domain translation, 'from None' for sanitized UI errors, and inspect __cause__.",level:"basic",codeExample:"# Complete, professional Python exception chaining"}];function I(){const d=c.useRef([]),[i,x]=c.useState("explicit"),[a,o]=c.useState("timeout"),n={timeout:{title:"Bank Socket Timeout (Explicit Chaining: `from socket_err`)",highLevelError:"PaymentGatewayTimeoutError: Bank authorization server timed out for student STU-102",rootCause:"TimeoutError: Socket read timed out after 3000ms on api.bankgateway.in:443",causeAttr:"TimeoutError('Socket read timed out after 3000ms')",suppressContext:!1,tracebackMsg:"The above exception was the direct cause of the following exception:",isClean:!1},corrupt_json:{title:"Malformed Bank API Payload (Explicit Chaining: `from json_err`)",highLevelError:"MalformedPaymentResponseError: Bank API returned invalid non-JSON payload for student STU-103",rootCause:"json.decoder.JSONDecodeError: Expecting value: line 1 column 1 (char 0)",causeAttr:"JSONDecodeError('Expecting value')",suppressContext:!1,tracebackMsg:"The above exception was the direct cause of the following exception:",isClean:!1},card_declined:{title:"Card Declined - Public UI Sanitized (Suppressed: `from None`)",highLevelError:"CardAuthorizationFailedError: Your payment card was declined by issuing bank.",rootCause:"HIDDEN (Suppressed internal decline routing code DECLINE_CODE_51_ACC_998124)",causeAttr:"None (Explicitly suppressed via `from None`)",suppressContext:!0,tracebackMsg:"None (Single clean public traceback shown to user)",isClean:!0},approved:{title:"Normal Approved Transaction (No Exceptions)",highLevelError:"None (Transaction Status 200 OK)",rootCause:"None",causeAttr:"None",suppressContext:!1,tracebackMsg:"None",isClean:!0,isSuccess:!0}}[a];c.useEffect(()=>{const s=new IntersectionObserver(l=>{l.forEach(p=>{p.isIntersecting&&p.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return d.current.forEach(l=>{l&&s.observe(l)}),()=>s.disconnect()},[]);const t=s=>{s&&!d.current.includes(s)&&d.current.push(s)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:t,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_002"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 9"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Robust Exception Handling & Defensive Coding"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Exception Chaining (",e.jsx("code",{className:"text-teal-400 font-mono",children:"raise ... from ..."}),")"]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master PEP 3134 exception chaining: connecting high-level domain errors to low-level technical root causes (",e.jsx("code",{className:"text-teal-300 font-mono",children:"__cause__"}),"), implicit context (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"__context__"}),"), suppressing tracebacks with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"from None"}),", and building subsystem translation layers."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔗 Explicit Chaining with from e"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Suppressing Tracebacks with from None"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔍 Inspecting __cause__ & __context__"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🏛️ Subsystem Translation Layers"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🔗"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. PEP 3134: Explicit & Suppressed Exception Chaining"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["When writing modular microservices, low-level errors (like socket timeouts or database syntax errors) should rarely be shown directly to user-facing layers. However, simply replacing the error loses valuable diagnostic context. ",e.jsx("strong",{children:"Exception Chaining"})," solves this dilemma by linking high-level domain errors to their technical root causes:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-base mb-1",children:"1️⃣ Explicit: `raise B from A`"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"new_err.__cause__ = old_err"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Direct causal link: Displays ",e.jsx("em",{children:'"The above exception was the direct cause of..."'})," in tracebacks."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-base mb-1",children:"2️⃣ Implicit: `raise B`"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"new_err.__context__ = old_err"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Occurs automatically inside except blocks without ",e.jsx("code",{children:"from"}),". Displays ",e.jsx("em",{children:'"During handling..."'}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-base mb-1",children:"3️⃣ Suppressed: `from None`"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"__suppress_context__ = True"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Hides low-level internal tracebacks to prevent leaking database schemas or security credentials in public APIs."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Golden Translation Pattern"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Always use ",e.jsx("code",{className:"text-teal-300 font-mono",children:"raise DomainError(...) from original_err"})," when translating low-level library errors into clean domain exceptions. It protects architectural abstraction boundaries while preserving complete forensic traceability for Sentry, Datadog, and DevOps engineers!"]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Exception Chaining & Translation Pipelines"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>x("explicit"),className:r("px-3 py-1.5 rounded-lg transition-all",i==="explicit"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Explicit Chaining (__cause__)"}),e.jsx("button",{onClick:()=>x("suppress"),className:r("px-3 py-1.5 rounded-lg transition-all",i==="suppress"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Suppression via `from None`"}),e.jsx("button",{onClick:()=>x("translation"),className:r("px-3 py-1.5 rounded-lg transition-all",i==="translation"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Subsystem Translation Layer"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining dual tracebacks, causal linkages, and public API sanitization:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:i==="explicit"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"EXPLICIT EXCEPTION CHAINING: `raise NewError from OriginalError`"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"360",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"1. Root-Cause Exception"}),e.jsx("text",{x:"20",y:"60",fill:"#fca5a5",fontSize:"9 font-mono",children:"try:"}),e.jsx("text",{x:"35",y:"80",fill:"#fca5a5",fontSize:"9 font-mono",children:'socket.connect("bank.gateway:443")'}),e.jsx("text",{x:"20",y:"105",fill:"#fca5a5",fontSize:"9 font-mono",children:"except TimeoutError as socket_err:"}),e.jsx("rect",{x:"20",y:"130",width:"320",height:"85",rx:"4",fill:"#881337",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"155",fill:"#ffe4e6",fontSize:"10 font-bold",children:"Original Low-Level Failure:"}),e.jsx("text",{x:"30",y:"175",fill:"#ecfdf5",fontSize:"8 font-mono",children:"TimeoutError: Socket read timed out"}),e.jsx("text",{x:"30",y:"195",fill:"#fda4af",fontSize:"8 font-mono",children:"after 3000ms on port 443"})]}),e.jsxs("g",{transform:"translate(405, 140)",children:[e.jsx("text",{x:"0",y:"0",fill:"#2dd4bf",fontSize:"12",fontWeight:"bold",children:"from socket_err"}),e.jsx("text",{x:"25",y:"25",fill:"#38bdf8",fontSize:"26",fontWeight:"bold",children:"→"})]}),e.jsxs("g",{transform:"translate(490, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"360",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"2. High-Level Domain Exception"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"raise PaymentGatewayTimeoutError("}),e.jsx("text",{x:"35",y:"80",fill:"#34d399",fontSize:"9 font-mono",children:'"Bank server timed out"'}),e.jsx("text",{x:"20",y:"100",fill:"#ecfdf5",fontSize:"9 font-mono",children:") from socket_err"}),e.jsx("rect",{x:"20",y:"130",width:"320",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"155",fill:"#34d399",fontSize:"10 font-bold",children:"Populates `err.__cause__`:"}),e.jsx("text",{x:"30",y:"175",fill:"#ecfdf5",fontSize:"8 font-mono",children:"err.__cause__ = socket_err"}),e.jsx("text",{x:"30",y:"195",fill:"#a7f3d0",fontSize:"8 font-mono",children:"Traceback prints full dual-causal stack!"})]})]}):i==="suppress"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"SUPPRESSING TRACEBACKS WITH `raise ... from None`"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"Internal Database / API Handler"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"try:"}),e.jsx("text",{x:"35",y:"80",fill:"#cbd5e1",fontSize:"9 font-mono",children:'query_db("SELECT * FROM tbl_secrets")'}),e.jsx("text",{x:"20",y:"105",fill:"#ecfdf5",fontSize:"9 font-mono",children:"except SqlInternalError as raw_err:"}),e.jsx("text",{x:"35",y:"130",fill:"#f43f5e",fontSize:"9 font-mono font-bold",children:"# Sensitive schema leaked in raw_err!"}),e.jsx("rect",{x:"20",y:"155",width:"340",height:"60",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"30",y:"180",fill:"#fda4af",fontSize:"9 font-bold",children:"Danger if not suppressed:"}),e.jsx("text",{x:"30",y:"198",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Raw table names leak to client browsers in traceback!"})]}),e.jsxs("g",{transform:"translate(425, 140)",children:[e.jsx("text",{x:"0",y:"0",fill:"#c084fc",fontSize:"12",fontWeight:"bold",children:"from None"}),e.jsx("text",{x:"20",y:"25",fill:"#38bdf8",fontSize:"26",fontWeight:"bold",children:"→"})]}),e.jsxs("g",{transform:"translate(480, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"370",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"Sanitized Public REST API Response"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"raise UserVisibleError("}),e.jsx("text",{x:"35",y:"80",fill:"#34d399",fontSize:"9 font-mono",children:'"Failed to load user profile"'}),e.jsx("text",{x:"20",y:"100",fill:"#34d399",fontSize:"9 font-mono font-bold",children:") from None  # SUPPRESSED!"}),e.jsx("rect",{x:"20",y:"130",width:"330",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"155",fill:"#34d399",fontSize:"10 font-bold",children:"✓ Clean Single Traceback:"}),e.jsx("text",{x:"30",y:"175",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Sets `__suppress_context__ = True`"}),e.jsx("text",{x:"30",y:"195",fill:"#a7f3d0",fontSize:"8 font-mono",children:"Zero internal database secrets exposed!"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"SUBSYSTEM EXCEPTION TRANSLATION LAYER ARCHITECTURE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"15",y:"30",fill:"#a5f3fc",fontSize:"11",fontWeight:"bold",children:"1. Third-Party Driver"}),e.jsx("text",{x:"15",y:"60",fill:"#cbd5e1",fontSize:"9",children:"• sqlite3.OperationalError"}),e.jsx("text",{x:"15",y:"80",fill:"#cbd5e1",fontSize:"9",children:"• psycopg2.DatabaseError"}),e.jsx("text",{x:"15",y:"100",fill:"#cbd5e1",fontSize:"9",children:"• requests.TimeoutError"}),e.jsx("rect",{x:"15",y:"130",width:"220",height:"85",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"25",y:"155",fill:"#38bdf8",fontSize:"9 font-bold",children:"Vendor-Specific Details:"}),e.jsx("text",{x:"25",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Tied to specific DB drivers."}),e.jsx("text",{x:"25",y:"190",fill:"#cbd5e1",fontSize:"8",children:"Changes if you swap Postgres/MySQL."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"310",y:"30",fill:"#99f6e4",fontSize:"11",fontWeight:"bold",children:"2. Translation Layer (`from`)"}),e.jsx("text",{x:"310",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"except DBError as e:"}),e.jsx("text",{x:"325",y:"85",fill:"#34d399",fontSize:"9 font-mono font-bold",children:"raise DomainError from e"}),e.jsx("rect",{x:"310",y:"130",width:"220",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"320",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"Decoupling Boundary:"}),e.jsx("text",{x:"320",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Converts low-level error into"}),e.jsx("text",{x:"320",y:"190",fill:"#cbd5e1",fontSize:"8",children:"unified enterprise exception."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"605",y:"30",fill:"#c4b5fd",fontSize:"11",fontWeight:"bold",children:"3. Business Service Layer"}),e.jsx("text",{x:"605",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"except DomainError:"}),e.jsx("text",{x:"620",y:"85",fill:"#34d399",fontSize:"9 font-mono",children:"retry_transaction()"}),e.jsx("rect",{x:"605",y:"130",width:"200",height:"85",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"615",y:"155",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Clean Business Logic:"}),e.jsx("text",{x:"615",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Business rules never depend"}),e.jsx("text",{x:"615",y:"190",fill:"#cbd5e1",fontSize:"8",children:"on driver-specific classes."})]})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Payment Gateway & Exception Chaining Inspector"})]}),e.jsxs("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:["Select a payment gateway failure mode to inspect how CPython handles dual tracebacks, causal links (",e.jsx("code",{className:"text-teal-300 font-mono",children:"__cause__"}),"), and suppression (",e.jsx("code",{className:"text-purple-300 font-mono",children:"from None"}),"):"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold block",children:"Simulated Gateway Event Scenario"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("button",{onClick:()=>o("timeout"),className:r("p-3 rounded-lg text-left text-xs font-mono transition-all border",a==="timeout"?"bg-teal-950/80 border-teal-500 text-teal-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"font-bold text-teal-300",children:"1. Bank Socket Timeout (raise from socket_err)"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"Explicit chaining sets __cause__ to TimeoutError"})]}),e.jsxs("button",{onClick:()=>o("corrupt_json"),className:r("p-3 rounded-lg text-left text-xs font-mono transition-all border",a==="corrupt_json"?"bg-cyan-950/80 border-cyan-500 text-cyan-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"font-bold text-cyan-300",children:"2. Malformed Response (raise from json_err)"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"Explicit chaining sets __cause__ to JSONDecodeError"})]}),e.jsxs("button",{onClick:()=>o("card_declined"),className:r("p-3 rounded-lg text-left text-xs font-mono transition-all border",a==="card_declined"?"bg-purple-950/80 border-purple-500 text-purple-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"font-bold text-purple-300",children:"3. Card Declined (raise from None)"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"Suppressed chaining hides internal routing codes"})]}),e.jsxs("button",{onClick:()=>o("approved"),className:r("p-3 rounded-lg text-left text-xs font-mono transition-all border",a==="approved"?"bg-emerald-950/80 border-emerald-500 text-emerald-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"font-bold text-emerald-300",children:"4. Normal Approved Payment (200 OK)"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"Successful execution without errors"})]})]})]}),e.jsxs("div",{className:"space-y-3 flex flex-col justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block font-bold",children:"Live Traceback & `__cause__` Inspector"}),e.jsxs("div",{className:r("p-4 rounded-xl border flex-1 space-y-2.5 text-xs font-mono",n.isSuccess?"bg-emerald-950/40 border-emerald-800":n.isClean?"bg-slate-900 border-purple-800":"bg-rose-950/40 border-rose-800"),children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-slate-400",children:"High-Level Exception: "}),e.jsx("span",{className:r("font-bold block mt-0.5",n.isSuccess?"text-emerald-300":"text-rose-300"),children:n.highLevelError})]}),e.jsxs("div",{className:"pt-2 border-t border-slate-800",children:[e.jsx("span",{className:"text-slate-400",children:"Root-Cause Exception:"}),e.jsx("div",{className:"text-cyan-300 mt-0.5",children:n.rootCause})]}),e.jsxs("div",{className:"pt-2 border-t border-slate-800 space-y-1",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"`err.__cause__`:"}),e.jsx("span",{className:"text-teal-300 font-bold",children:n.causeAttr})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"`__suppress_context__`:"}),e.jsx("span",{className:"text-purple-300 font-bold",children:String(n.suppressContext)})]})]}),e.jsxs("div",{className:"pt-2 border-t border-slate-800",children:[e.jsx("span",{className:"text-slate-400 block mb-0.5",children:"Traceback Message:"}),e.jsx("span",{className:"text-slate-300 italic text-[11px]",children:n.tracebackMsg})]})]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Exception Chaining Mechanics Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Chaining Style"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Syntax Pattern"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Attribute Populated"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Traceback Output Phrase"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"Explicit Chaining"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"raise NewError from OrigError"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-mono",children:"__cause__ = OrigError"}),e.jsx("td",{className:"py-3 px-4 italic text-slate-300",children:'"The above exception was the direct cause..."'})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"Implicit Chaining"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"except OrigError: raise NewError"}),e.jsx("td",{className:"py-3 px-4 text-cyan-300 font-mono",children:"__context__ = OrigError"}),e.jsx("td",{className:"py-3 px-4 italic text-slate-300",children:'"During handling of the above exception..."'})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Suppressed Chaining"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"raise NewError from None"}),e.jsx("td",{className:"py-3 px-4 text-purple-300 font-mono",children:"__suppress_context__ = True"}),e.jsx("td",{className:"py-3 px-4 italic text-slate-300",children:"Hides root traceback completely (clean single error)"})]})]})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating explicit chaining, suppression with from None, translation layers, and payment gateway clients:"}),e.jsx(h,{files:[{filename:"explicit_exception_chaining_from.py",code:_,description:"Explicit chaining using raise from, __cause__ attribute inspection, and PEP 3134 tracebacks."},{filename:"implicit_chaining_and_context.py",code:b,description:"Implicit chaining, __context__ attribute, and suppressing tracebacks using raise from None."},{filename:"subsystem_exception_translation_layer.py",code:g,description:"Subsystem translation layer architecture wrapping low-level errors into domain exceptions."},{filename:"banking_gateway_exception_chaining_suite.py",code:y,description:"Enterprise Banking & Fee Gateway Client with timeout, JSON decoding, and card decline chaining."}]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Circular Exception Chaining"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"except Exception as e: raise e from e"})," creates a circular loop where the error references itself as its own root cause!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Use bare ",e.jsx("code",{className:"text-emerald-300",children:"raise"})," to re-raise active exceptions."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Leaking Database Secrets to Public UIs"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Forgetting to use ",e.jsx("code",{className:"text-amber-300 font-mono",children:"from None"})," in public web endpoints can leak raw SQL syntax and database hostnames directly to client browsers."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always use ",e.jsx("code",{className:"text-emerald-300",children:"raise PublicError from None"})," on public API endpoints."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Passing Non-Exception to `from`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-purple-300 font-mono",children:'raise MyError from "error string"'})," crashes with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"TypeError: exception causes must derive from BaseException or be None"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Only pass exception instances/classes or ",e.jsx("code",{className:"text-emerald-300",children:"None"})," to ",e.jsx("code",{className:"text-emerald-300",children:"from"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Relying on Implicit Chaining"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Omitting ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"from e"}),' during intentional exception translation triggers confusing "During handling of the above exception..." messages.']}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always be explicit: ",e.jsx("code",{className:"text-emerald-300",children:"raise DomainError from e"}),"."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering Exception Chaining, __cause__, __context__, and from None suppression:"}),e.jsx(u,{questions:N})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with chaining recipes, suppression templates, and gateway translation patterns:"}),e.jsx("div",{className:"mb-10",children:e.jsx(m,{content:w,filename:"python_topic9_exception_chaining_notes.txt",title:"Print Topic 9 Study Notes"})}),e.jsx(f,{})]})]})]})}export{I as default};
