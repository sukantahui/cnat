import{b as o,j as e,bg as c}from"./vendor-react-core-Doz9nIC6.js";import{P as p}from"./PythonFileLoader-hCi5osN-.js";import{P as b}from"./PlainTextPrint-C08xhKA4.js";import{F as _}from"./FAQTemplate-BHhlgA96.js";import{T as E}from"./TeacherSukantaHui-CEPuAfsb.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const v=`"""\r
# Module: 004_003_python-testing\r
# Topic 5: Testing exceptions with pytest.raises\r
# File: basic_pytest_raises_context.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating basic pytest.raises context manager exception validation.\r
"""\r
\r
def register_candidate(name: str, campus: str, age: int, initial_deposit: float):\r
    if not name or not name.strip():\r
        raise ValueError("Candidate name cannot be empty.")\r
    if campus.lower() not in ("barrackpore", "kolkata", "ichapur", "jadavpur"):\r
        raise ValueError(f"Invalid regional campus: '{campus}'")\r
    if age < 16:\r
        raise ValueError(f"Candidate age {age} is below the minimum requirement of 16 years.")\r
    if initial_deposit < 2000.0:\r
        raise ValueError(f"Initial deposit Rs. {initial_deposit} is below minimum requirement of Rs. 2,000.")\r
    return {"name": name, "campus": campus, "status": "REGISTERED"}\r
\r
# ------------------------------------------------------------------------------\r
# SIMULATED PYTEST.RAISES EXCEPTION TESTING\r
# ------------------------------------------------------------------------------\r
def test_empty_name_raises_value_error():\r
    print("   [...] Testing empty name validation contract...")\r
    try:\r
        register_candidate("", "Barrackpore", 18, 5000.0)\r
        assert False, "Expected ValueError on empty name"\r
    except ValueError as e:\r
        assert "name cannot be empty" in str(e).lower()\r
        print("   [PASS] test_empty_name_raises_value_error")\r
\r
def test_invalid_campus_raises_value_error():\r
    print("   [...] Testing invalid campus validation contract...")\r
    try:\r
        register_candidate("Mamata", "UnknownCity", 18, 5000.0)\r
        assert False, "Expected ValueError on invalid campus"\r
    except ValueError as e:\r
        assert "invalid regional campus" in str(e).lower()\r
        print("   [PASS] test_invalid_campus_raises_value_error")\r
\r
def test_underage_candidate_raises_value_error():\r
    print("   [...] Testing minimum age limit (Age 14 < 16)...")\r
    try:\r
        register_candidate("Debangshu", "Kolkata", 14, 5000.0)\r
        assert False, "Expected ValueError on underage candidate"\r
    except ValueError as e:\r
        assert "below the minimum requirement" in str(e).lower()\r
        print("   [PASS] test_underage_candidate_raises_value_error")\r
\r
def test_insufficient_deposit_raises_value_error():\r
    print("   [...] Testing insufficient deposit (Rs. 1000 < Rs. 2000)...")\r
    try:\r
        register_candidate("Mahima", "Ichapur", 20, 1000.0)\r
        assert False, "Expected ValueError on low deposit"\r
    except ValueError as e:\r
        assert "below minimum requirement" in str(e).lower()\r
        print("   [PASS] test_insufficient_deposit_raises_value_error")\r
\r
def main():\r
    print("=" * 75)\r
    print("[PYTEST.RAISES] Basic Exception Context & Negative Testing")\r
    print("=" * 75)\r
\r
    test_empty_name_raises_value_error()\r
    test_invalid_campus_raises_value_error()\r
    test_underage_candidate_raises_value_error()\r
    test_insufficient_deposit_raises_value_error()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Negative testing with pytest.raises proves that systems reject")\r
    print("           malformed inputs defensively before invalid state corrupts data.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,j=`"""\r
# Module: 004_003_python-testing\r
# Topic 5: Testing exceptions with pytest.raises\r
# File: exception_message_regex_matching.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating regular expression error message matching and\r
#              ExceptionInfo attribute inspection.\r
"""\r
\r
import re\r
\r
def issue_course_certificate(student_id: str, marks_pct: float, attendance_pct: float) -> str:\r
    """Issues certificate or raises specific formatted exception."""\r
    if marks_pct < 50.0:\r
        raise ValueError(f"CERT_FAIL_401: Score {marks_pct:.1f}% is below passing mark 50.0%")\r
    if attendance_pct < 75.0:\r
        raise ValueError(f"CERT_FAIL_402: Attendance {attendance_pct:.1f}% is below required 75.0%")\r
    return f"CERT_SUCCESS_{student_id}"\r
\r
# ------------------------------------------------------------------------------\r
# SIMULATED REGEX MATCHING & ATTRIBUTE INSPECTION\r
# ------------------------------------------------------------------------------\r
def test_certificate_low_score_regex_matching():\r
    print("   [...] Testing regex message matching on low score (CERT_FAIL_401)...")\r
    expected_pattern = r"^CERT_FAIL_401: Score 42\\.5% is below passing.*"\r
    \r
    try:\r
        issue_course_certificate("STU_BP_01", marks_pct=42.5, attendance_pct=90.0)\r
        assert False, "Expected ValueError"\r
    except ValueError as e:\r
        msg = str(e)\r
        assert re.search(expected_pattern, msg), f"Message '{msg}' did not match regex '{expected_pattern}'"\r
        print(f"   [PASS] test_certificate_low_score_regex_matching -> Matched '{msg}'")\r
\r
def test_certificate_low_attendance_regex_matching():\r
    print("   [...] Testing regex message matching on low attendance (CERT_FAIL_402)...")\r
    expected_pattern = r"^CERT_FAIL_402: Attendance 68\\.0% is below required 75\\.0%"\r
    \r
    try:\r
        issue_course_certificate("STU_CC_02", marks_pct=95.0, attendance_pct=68.0)\r
        assert False, "Expected ValueError"\r
    except ValueError as e:\r
        msg = str(e)\r
        assert re.search(expected_pattern, msg)\r
        print(f"   [PASS] test_certificate_low_attendance_regex_matching -> Matched '{msg}'")\r
\r
def main():\r
    print("=" * 75)\r
    print("[PYTEST MATCH] Error Message Regex Verification (match=r'...')")\r
    print("=" * 75)\r
\r
    test_certificate_low_score_regex_matching()\r
    test_certificate_low_attendance_regex_matching()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Using pytest.raises(Exception, match=r'...') asserts both the")\r
    print("           exact error type and ensures the error message contains the expected cause.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,w=`"""\r
# Module: 004_003_python-testing\r
# Topic 5: Testing exceptions with pytest.raises\r
# File: custom_exception_hierarchy_testing.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating testing custom enterprise domain exception hierarchies\r
#              and inspecting structured exception payload attributes.\r
"""\r
\r
# Enterprise Custom Domain Exception Hierarchy\r
class InstitutionalError(Exception):\r
    """Base domain exception."""\r
    pass\r
\r
class AdmissionQuotaExceededError(InstitutionalError):\r
    """Raised when campus batch reaches maximum seating capacity."""\r
    def __init__(self, campus: str, batch: str, capacity: int):\r
        self.campus = campus\r
        self.batch = batch\r
        self.capacity = capacity\r
        super().__init__(f"Quota full for {campus} [{batch}]: Maximum {capacity} students reached.")\r
\r
class PaymentDeclinedError(InstitutionalError):\r
    """Raised when tuition transaction is declined by bank."""\r
    def __init__(self, student_id: str, amount: float, decline_code: str):\r
        self.student_id = student_id\r
        self.amount = amount\r
        self.decline_code = decline_code\r
        super().__init__(f"Payment of Rs. {amount} declined for {student_id} (Code: {decline_code}).")\r
\r
# ------------------------------------------------------------------------------\r
# SIMULATED DOMAIN SERVICES\r
# ------------------------------------------------------------------------------\r
def enroll_in_batch(campus: str, batch: str, current_enrolled: int, max_cap: int = 30):\r
    if current_enrolled >= max_cap:\r
        raise AdmissionQuotaExceededError(campus, batch, max_cap)\r
    return {"status": "SUCCESS", "campus": campus, "batch": batch}\r
\r
def process_fee_charge(sid: str, amount: float, card_valid: bool):\r
    if not card_valid:\r
        raise PaymentDeclinedError(sid, amount, "BANK_ERR_INSUFFICIENT_FUNDS")\r
    return {"status": "PAID", "sid": sid, "amount": amount}\r
\r
# ------------------------------------------------------------------------------\r
# TESTS WITH EXCEPTION ATTRIBUTE INSPECTION\r
# ------------------------------------------------------------------------------\r
def test_quota_exceeded_exception_payload():\r
    print("   [...] Testing AdmissionQuotaExceededError structured payload attributes...")\r
    try:\r
        enroll_in_batch("Barrackpore", "Python_Batch_A", current_enrolled=30, max_cap=30)\r
        assert False, "Expected AdmissionQuotaExceededError"\r
    except AdmissionQuotaExceededError as err:\r
        # In PyTest: exc_info.value exposes all custom attributes\r
        assert isinstance(err, InstitutionalError), "Should inherit from base InstitutionalError"\r
        assert err.campus == "Barrackpore"\r
        assert err.batch == "Python_Batch_A"\r
        assert err.capacity == 30\r
        assert "Maximum 30 students reached" in str(err)\r
        print(f"   [PASS] test_quota_exceeded_exception_payload -> Payload verified: {err.campus}, Cap: {err.capacity}")\r
\r
def test_payment_declined_exception_payload():\r
    print("   [...] Testing PaymentDeclinedError structured payload attributes...")\r
    try:\r
        process_fee_charge("STU_MAMATA_01", 15000.0, card_valid=False)\r
        assert False, "Expected PaymentDeclinedError"\r
    except PaymentDeclinedError as err:\r
        assert err.student_id == "STU_MAMATA_01"\r
        assert err.amount == 15000.0\r
        assert err.decline_code == "BANK_ERR_INSUFFICIENT_FUNDS"\r
        print(f"   [PASS] test_payment_declined_exception_payload -> Code: {err.decline_code}")\r
\r
def main():\r
    print("=" * 75)\r
    print("[CUSTOM EXCEPTIONS] Structured Payload Inspection & Inheritance Testing")\r
    print("=" * 75)\r
\r
    test_quota_exceeded_exception_payload()\r
    test_payment_declined_exception_payload()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Testing custom exceptions ensures that error payloads carry rich")\r
    print("           structured context for logging, telemetry, and API responses.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,N=`"""\r
# Module: 004_003_python-testing\r
# Topic 5: Testing exceptions with pytest.raises\r
# File: institutional_admission_validation_suite.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: End-to-end multi-campus candidate validation suite testing\r
#              duplicate student IDs, age boundaries, negative scores, and voucher validation.\r
"""\r
\r
class AdmissionRegistry:\r
    def __init__(self):\r
        self.students = {}\r
        self.vouchers = {"SUMMER2026": 0.20, "MERIT50": 0.50}\r
\r
    def admit_candidate(self, sid: str, name: str, campus: str, age: int, voucher: str = None) -> dict:\r
        if not sid or not sid.strip():\r
            raise ValueError("Student ID cannot be empty.")\r
        if sid in self.students:\r
            raise KeyError(f"Student ID '{sid}' already registered in registry.")\r
        if age < 16 or age > 65:\r
            raise ValueError(f"Age {age} is outside eligible admission bracket (16-65).")\r
        \r
        discount = 0.0\r
        if voucher:\r
            if voucher not in self.vouchers:\r
                raise ValueError(f"Invalid or expired admission voucher code: '{voucher}'")\r
            discount = self.vouchers[voucher]\r
\r
        record = {\r
            "sid": sid,\r
            "name": name,\r
            "campus": campus,\r
            "age": age,\r
            "discount": discount,\r
            "status": "ACTIVE"\r
        }\r
        self.students[sid] = record\r
        return record\r
\r
# ------------------------------------------------------------------------------\r
# TEST SUITE\r
# ------------------------------------------------------------------------------\r
def test_successful_admission():\r
    reg = AdmissionRegistry()\r
    res = reg.admit_candidate("STU_BP_01", "Mamata", "Barrackpore", 19, "SUMMER2026")\r
    assert res["name"] == "Mamata"\r
    assert res["discount"] == 0.20\r
    print("   [PASS] test_successful_admission (Mamata admitted with 20% voucher)")\r
\r
def test_duplicate_sid_raises_key_error():\r
    reg = AdmissionRegistry()\r
    reg.admit_candidate("STU_CC_02", "Mahima", "Kolkata", 21)\r
    \r
    try:\r
        reg.admit_candidate("STU_CC_02", "Mahima Duplicate", "Kolkata", 21)\r
        assert False, "Expected KeyError on duplicate ID"\r
    except KeyError as e:\r
        assert "already registered" in str(e)\r
        print("   [PASS] test_duplicate_sid_raises_key_error")\r
\r
def test_invalid_voucher_raises_value_error():\r
    reg = AdmissionRegistry()\r
    try:\r
        reg.admit_candidate("STU_IC_03", "Abhronila", "Ichapur", 20, voucher="FAKE_CODE")\r
        assert False, "Expected ValueError on bad voucher"\r
    except ValueError as e:\r
        assert "Invalid or expired admission voucher" in str(e)\r
        print("   [PASS] test_invalid_voucher_raises_value_error")\r
\r
def test_invalid_age_boundary():\r
    reg = AdmissionRegistry()\r
    try:\r
        reg.admit_candidate("STU_JU_04", "Susmita", "Jadavpur", age=12)\r
        assert False, "Expected ValueError on age 12"\r
    except ValueError as e:\r
        assert "outside eligible admission bracket" in str(e)\r
        print("   [PASS] test_invalid_age_boundary")\r
\r
def main():\r
    print("=" * 80)\r
    print("[CASE STUDY] Institutional Multi-Campus Admission Guard Test Suite")\r
    print("=" * 80)\r
\r
    test_successful_admission()\r
    test_duplicate_sid_raises_key_error()\r
    test_invalid_voucher_raises_value_error()\r
    test_invalid_age_boundary()\r
\r
    print("=" * 80)\r
    print("[TAKEAWAY] Exception testing ensures all domain integrity constraints are")\r
    print("           strictly enforced across all campus admission endpoints.")\r
    print("=" * 80)\r
\r
if __name__ == "__main__":\r
    main()\r
`,T=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 4: PRO LEVEL • MODULE 004_003: PYTHON TESTING\r
                     TOPIC 5: TESTING EXCEPTIONS WITH PYTEST.RAISES\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. BASIC PYTEST.RAISES CONTEXT MANAGER\r
--------------------------------------------------------------------------------\r
  import pytest\r
\r
  def test_negative_fee_raises_value_error():\r
      # Passes only if ValueError is raised inside the block\r
      with pytest.raises(ValueError):\r
          calculate_fee(base_fee=-1000.0)\r
\r
--------------------------------------------------------------------------------\r
2. ERROR MESSAGE REGEX MATCHING\r
--------------------------------------------------------------------------------\r
  def test_exact_error_message():\r
      # Asserts exception type AND matches message against regular expression\r
      with pytest.raises(ValueError, match=r"Fee must be positive.*"):\r
          calculate_fee(base_fee=-500.0)\r
\r
--------------------------------------------------------------------------------\r
3. INSPECTING EXCEPTION ATTRIBUTES\r
--------------------------------------------------------------------------------\r
  def test_custom_exception_payload():\r
      with pytest.raises(QuotaExceededError) as exc_info:\r
          enroll_student("Barrackpore", "Python_Batch_1")\r
\r
      # Inspect exception object attributes\r
      err = exc_info.value\r
      assert err.campus == "Barrackpore"\r
      assert err.max_capacity == 40\r
      assert "Batch is full" in str(err)\r
\r
================================================================================\r
       END OF STUDY NOTE • TOPIC 5: TESTING EXCEPTIONS WITH PYTEST\r
================================================================================\r
`,S=[{question:"Why is exception testing ('Negative Testing') critical for building enterprise-grade Python software?",shortAnswer:"Negative testing proves that an application rejects invalid data, handles edge case violations defensively, raises specific error types rather than crashing unexpectedly, and provides actionable error diagnostics.",explanation:"Defensive programming and boundary error handling verification.",hint:"Verifies that code fails safely and predictably on invalid inputs.",level:"basic",codeExample:"with pytest.raises(ValueError): calculate_fee(-500)"},{question:"What is the primary syntax for testing an expected exception using 'pytest.raises'?",shortAnswer:"Using the context manager: 'with pytest.raises(ExpectedException):' around the line of code expected to raise the error.",explanation:"Standard context manager syntax for exception assertion in pytest.",hint:"with pytest.raises(ValueError): target_call()",level:"basic",codeExample:`with pytest.raises(KeyError):
    student_db.get_record('NONEXISTENT')`},{question:"How does the 'match' parameter in 'pytest.raises' verify exception error messages?",shortAnswer:`The 'match' argument accepts a regular expression string (e.g. 'match=r"must be positive.*"') and asserts that the string representation of the raised exception matches that regex pattern.`,explanation:"Regex-based error message assertion in pytest.",hint:"with pytest.raises(ValueError, match=r'regex pattern'):",level:"basic",codeExample:`with pytest.raises(ValueError, match=r'Invalid score: -5'):
    validate_score(-5)`},{question:"How can you capture and inspect custom attributes on a raised exception object in PyTest?",shortAnswer:"By capturing the exception info object with 'with pytest.raises(CustomError) as exc_info:' and then accessing the exception instance via 'exc_info.value' (e.g. 'assert exc_info.value.error_code == 4001').",explanation:"Exception instance inspection via ExceptionInfo wrapper.",hint:"Use 'as exc_info' and inspect 'exc_info.value.attribute'.",level:"moderate",codeExample:`with pytest.raises(QuotaError) as exc_info:
    enroll('BP')
assert exc_info.value.max_capacity == 50`},{question:"What happens if the code inside a 'with pytest.raises(ValueError):' block DOES NOT raise any exception?",shortAnswer:"The test immediately FAILS with a 'Failed: DID NOT RAISE <class 'ValueError'>' error message.",explanation:"Failure semantics when an expected exception is missing.",hint:"PyTest fails the test because the expected exception was not raised.",level:"basic",codeExample:"# Fails if no exception is raised inside the block"},{question:"What happens if code inside 'with pytest.raises(ValueError):' raises a 'TypeError' instead?",shortAnswer:"The test FAILS because a TypeError does not match the expected ValueError; PyTest lets the unexpected TypeError propagate as an unhandled error.",explanation:"Strict exception type matching and unhandled exception propagation.",hint:"The test fails because the raised type does not match the expected type.",level:"basic",codeExample:"# Fails because TypeError is not a subclass of ValueError"},{question:"Can 'pytest.raises' match multiple possible exception types?",shortAnswer:"Yes, by passing a tuple of exception classes: 'with pytest.raises((ValueError, TypeError)):', which succeeds if either exception type is raised.",explanation:"Multiple exception type matching via tuple argument.",hint:"Pass a tuple of exception classes: pytest.raises((ErrorA, ErrorB))",level:"moderate",codeExample:`with pytest.raises((ValueError, KeyError)):
    process_record(bad_data)`},{question:"How do you test both valid success cases and expected exception cases in a single '@pytest.mark.parametrize' test?",shortAnswer:"By passing the expected exception class (or 'contextlib.nullcontext()' for successful runs) as a parameter in the tuple, and using 'with expectation:' inside the test.",explanation:"Unified success and failure parametrization via contextlib.nullcontext.",hint:"Use contextlib.nullcontext() for successes and pytest.raises(Error) for failures.",level:"complex",codeExample:`from contextlib import nullcontext
@pytest.mark.parametrize('val, expectation', [
    (100, nullcontext()),
    (-1, pytest.raises(ValueError))
])
def test_fn(val, expectation):
    with expectation: validate(val)`},{question:"What is the danger of writing an overly broad 'with pytest.raises(Exception):' assertion?",shortAnswer:"Testing against the generic base 'Exception' can mask unintended bugs (such as NameErrors, SyntaxErrors, or TypeErrors occurring in fixture setup or earlier lines) that pass the test by accident.",explanation:"Specificity in exception contract testing vs masked defects.",hint:"Broad Exception masks accidental NameError or TypeError bugs; always specify the exact error type.",level:"moderate",codeExample:`# BAD: with pytest.raises(Exception):
# GOOD: with pytest.raises(AdmissionQuotaError):`},{question:"Why should you keep the code inside a 'with pytest.raises():' block as minimal as possible (ideally 1 line)?",shortAnswer:"Placing multiple lines of setup or calculation inside the context block creates ambiguity; an earlier line might raise the expected exception for the wrong reason rather than the actual function under test.",explanation:"Minimizing exception trapping scope to target operations.",hint:"Keep only the single target function call inside the with block.",level:"moderate",codeExample:`# GOOD:
student = setup_student() # Outside with block
with pytest.raises(ValueError):
    student.pay(-100) # Only 1 line inside!`},{question:"How does 'pytest.warns()' differ from 'pytest.raises()'?",shortAnswer:"'pytest.raises()' expects an exception that halts execution; 'pytest.warns(DeprecationWarning)' expects a non-fatal Python warning (via the 'warnings' module) that allows code execution to continue.",explanation:"Warning assertion vs exception trapping.",hint:"pytest.warns tests non-fatal warnings (e.g. deprecations) without stopping execution.",level:"moderate",codeExample:`with pytest.warns(DeprecationWarning, match=r'deprecated'):
    legacy_method()`},{question:"How can you test custom exception hierarchies where subclasses inherit from a domain base exception?",shortAnswer:"Testing against the base class (e.g. 'with pytest.raises(InstitutionalError):') will catch any custom subclass ('PaymentError', 'QuotaError'), or testing the specific subclass to verify exact error specialization.",explanation:"Object-oriented exception inheritance verification.",hint:"Subclasses are caught by their parent exception classes in pytest.raises.",level:"moderate",codeExample:`# class PaymentError(InstitutionalError): pass
with pytest.raises(InstitutionalError):
    raise PaymentError('Failed')`},{question:"What does 'exc_info.type' vs 'exc_info.typename' provide?",shortAnswer:`'exc_info.type' returns the actual exception class object (e.g. '<class ValueError>'), while 'exc_info.typename' returns the class name as a plain string (e.g. '"ValueError"').`,explanation:"Exception metadata properties on ExceptionInfo.",hint:"type returns the class; typename returns the class name string.",level:"basic",codeExample:"assert exc_info.typename == 'ValueError'"},{question:"Why is using 'try...except' with 'assert False' inside tests considered an anti-pattern compared to 'pytest.raises'?",shortAnswer:"Writing manual 'try...except' requires 6+ lines of boilerplate code, risks forgetting the 'assert False' in the try block (causing silent false passes), and lacks automatic regex matching and rich traceback reporting.",explanation:"Anti-pattern of manual try-except in test code.",hint:"Manual try-except is verbose, error-prone, and lacks pytest's match features.",level:"basic",codeExample:"# Anti-pattern: try: f() except: pass (Do NOT use! Use pytest.raises)"},{question:"How do you test that an exception contains specific structured JSON or dictionary details in an API test?",shortAnswer:`By catching the exception with 'as exc_info' and asserting on the structured payload properties (e.g. 'assert exc_info.value.details["field"] == "email"').`,explanation:"Testing structured API validation exception payloads.",hint:"Access exc_info.value.details and assert on the dictionary keys.",level:"moderate",codeExample:`with pytest.raises(ValidationError) as exc_info:
    parse_user({})
assert exc_info.value.field == 'email'`},{question:"What is 'exc_info.traceback' used for in advanced test scenarios?",shortAnswer:"It provides access to the captured traceback object, allowing advanced assertions on call stack depth or verifying that an exception originated in a specific source module.",explanation:"Traceback inspection in ExceptionInfo.",hint:"Allows inspecting the call stack and origin of the raised error.",level:"complex",codeExample:"assert 'admission.py' in str(exc_info.traceback)"},{question:"How do you test that an exception is raised from another exception ('raise ... from err')?",shortAnswer:"By asserting on 'exc_info.value.__cause__', which points to the underlying original cause exception chained by Python's exception handling syntax.",explanation:"Chained exception assertion in Python 3.",hint:"Check exc_info.value.__cause__ to verify the underlying cause exception.",level:"complex",codeExample:"assert isinstance(exc_info.value.__cause__, DatabaseError)"},{question:"What is the behavior of 'pytest.raises' when testing asynchronous coroutines?",shortAnswer:"Inside an 'async def test_*' function, place the 'await' call inside the context block: 'with pytest.raises(ValueError): await async_function()'.",explanation:"Async exception assertion syntax in pytest-asyncio.",hint:"Place 'await async_call()' inside the 'with pytest.raises' block.",level:"moderate",codeExample:`with pytest.raises(ValueError):
    await fetch_invalid_student()`},{question:"Why should regex special characters in the 'match' parameter be escaped when matching exact strings?",shortAnswer:`Characters like '(', ')', '[', ']', '.', and '*' have special meanings in regular expressions; if your error message contains parentheses (e.g. 'Invalid (code 400)'), you must escape them ('match=r"Invalid (code 400)"') or use re.escape.`,explanation:"Regex character escaping in pytest error message matching.",hint:"Escape parentheses and brackets with backslashes in regex match strings.",level:"moderate",codeExample:"with pytest.raises(ValueError, match=re.escape('Error (Code 400)')):"},{question:"What is the ultimate golden rule of exception testing in Python?",shortAnswer:`Always test the exact exception type, assert that the error message contains the expected cause via 'match=r"..."', and keep the context block focused to a single target line to eliminate false passes.`,explanation:"The complete enterprise exception testing standard.",hint:"Exact error type + regex message match + minimal single-line scope.",level:"basic",codeExample:"# Enterprise Exception Testing Standard"}];function V(){const h=o.useRef([]),[a,m]=o.useState("raisesFlow"),[s,f]=o.useState("ValueError"),[n,g]=o.useState(!0);let l="Verifies input validation failures",i="r'Candidate age .* is below minimum'",d="Catching underage candidates (<16 years old)";s==="ValueError"?(l="Validates numerical boundary and data type integrity",i="r'Candidate age .* is below minimum'",d="Catching negative tuition fees or invalid ages"):s==="KeyError"?(l="Guards dictionary lookups and duplicate identity keys",i="r'Student ID .* already registered'",d="Preventing duplicate student admission tokens"):s==="QuotaExceededError"&&(l="Custom domain exception with structured capacity metadata",i="r'Quota full for Barrackpore .*'",d="Enforcing maximum 30-student cohort caps per batch");const y=`# Exception Contract Testing with PyTest
# Target: ${s} | Match Mode: ${n?"Regex Enabled":"Type Only"}

import pytest

def test_${s.toLowerCase()}_contract():
${n?`    # Asserts exact exception type AND verifies error message via regex!
    with pytest.raises(${s}, match=${i}) as exc_info:
        # Minimal single-line execution scope
        enroll_student("STU_BP_01", campus="Barrackpore", age=14)

    # Inspect captured ExceptionInfo payload attributes:
    assert exc_info.typename == "${s}"`:`    # Asserts only the exception type
    with pytest.raises(${s}):
        enroll_student("STU_BP_01", campus="Barrackpore", age=14)`}
${s==="QuotaExceededError"?`    # Inspect custom domain attributes
    err = exc_info.value
    assert err.campus == "Barrackpore"
    assert err.capacity == 30`:""}`;o.useEffect(()=>{const t=new IntersectionObserver(x=>{x.forEach(u=>{u.isIntersecting&&u.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return h.current.forEach(x=>{x&&t.observe(x)}),()=>t.disconnect()},[]);const r=t=>{t&&!h.current.includes(t)&&h.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:r,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 4 • Module 004_003"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 5"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Automated Testing, PyTest & Quality Assurance"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Testing Exceptions: ",e.jsx("span",{className:"text-teal-400",children:"pytest.raises"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master negative testing and exception contract verification in PyTest: asserting expected errors with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"with pytest.raises()"}),", verifying failure messages using regular expression matching with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:'match=r"..."'}),", inspecting custom exception attributes via ",e.jsx("code",{className:"text-purple-300 font-mono",children:"exc_info.value"}),", and validating domain error hierarchies."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Defensive Negative Testing"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:'🔍 Regex Message match=r"..."'}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📦 exc_info.value Payload Inspection"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🏛️ Custom Domain Hierarchies"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Exception Contract Testing Architecture"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["In robust software systems, proving that functions fail predictably and safely on invalid data is just as critical as proving they work on valid data. ",e.jsx("code",{className:"text-teal-300 font-mono",children:"pytest.raises"})," acts as a context manager that intercepts and validates expected exceptions:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Context Manager"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"with pytest.raises()"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Wraps the target function call. Passes only if the specified exception is raised; fails if no error occurs."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Regex Message Match"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:'match=r"pattern"'}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Matches error message strings against regular expressions to ensure the exception was raised for the exact right reason."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Payload Inspection"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"exc_info.value"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Captures the live exception object to assert on custom attributes (",e.jsx("code",{className:"text-purple-300",children:"error_code"}),", ",e.jsx("code",{className:"text-purple-300",children:"capacity"}),", ",e.jsx("code",{className:"text-purple-300",children:"details"}),")."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 shadow-lg",children:[e.jsx("div",{className:"text-amber-400 font-bold text-sm mb-1",children:"4️⃣ Domain Hierarchies"}),e.jsx("code",{className:"text-xs font-mono text-amber-300 block mb-1",children:"class CustomError"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Tests enterprise domain exception trees (",e.jsx("code",{className:"text-amber-300",children:"QuotaExceededError"})," inheriting from ",e.jsx("code",{className:"text-amber-300",children:"AdmissionError"}),")."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Trap of Broad Exception Testing"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Writing ",e.jsx("code",{className:"text-rose-400 font-mono",children:"with pytest.raises(Exception):"})," is a dangerous anti-pattern. If a typo in your test creates an accidental ",e.jsx("code",{className:"text-rose-400 font-mono",children:"NameError"}),", the test passes by mistake! Always specify the ",e.jsx("span",{className:"text-emerald-400 font-bold",children:"exact exception class"})," and use ",e.jsx("code",{className:"text-teal-300 font-mono",children:'match=r"..."'}),"."]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing pytest.raises Flow, Regex Matching & Payload Capture"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>m("raisesFlow"),className:c("px-3 py-1.5 rounded-lg transition-all",a==="raisesFlow"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"pytest.raises Execution Flow"}),e.jsx("button",{onClick:()=>m("regexMatching"),className:c("px-3 py-1.5 rounded-lg transition-all",a==="regexMatching"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Regex Message Matching"}),e.jsx("button",{onClick:()=>m("exceptionPayload"),className:c("px-3 py-1.5 rounded-lg transition-all",a==="exceptionPayload"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Custom Exception Payload"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining context interception lifecycle, regex message verification, and structured exception attributes:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:a==="raisesFlow"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"PYTEST.RAISES CONTEXT MANAGER INTERCEPTION PIPELINE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#0f172a",stroke:"#14b8a6"}),e.jsx("rect",{x:"25",y:"45",width:"220",height:"150",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"35",y:"70",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"1. Enter Context Block"}),e.jsx("rect",{x:"35",y:"85",width:"200",height:"40",rx:"4",fill:"#134e4a"}),e.jsx("text",{x:"45",y:"105",fill:"#ccfbf1",fontSize:"9",fontFamily:"monospace",children:"with pytest.raises(ValueError):"}),e.jsx("text",{x:"35",y:"145",fill:"#99f6e4",fontSize:"9",children:"PyTest installs active exception trap"}),e.jsx("text",{x:"35",y:"165",fill:"#facc15",fontSize:"8",fontWeight:"bold",children:"Active Listener Ready"}),e.jsx("path",{d:"M 245 120 L 295 120",stroke:"#14b8a6",strokeWidth:"2"}),e.jsx("rect",{x:"300",y:"45",width:"230",height:"150",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("text",{x:"310",y:"70",fill:"#e0f2fe",fontSize:"11",fontWeight:"bold",children:"2. Target Function Executes"}),e.jsx("rect",{x:"310",y:"85",width:"210",height:"40",rx:"4",fill:"#0369a1"}),e.jsx("text",{x:"320",y:"105",fill:"#ffffff",fontSize:"9",fontFamily:"monospace",children:"validate_age(14) # < 16"}),e.jsx("text",{x:"310",y:"145",fill:"#bae6fd",fontSize:"9",children:'Raises: ValueError("Age too low")'}),e.jsx("text",{x:"310",y:"165",fill:"#f87171",fontSize:"8",fontWeight:"bold",children:"Exception Propagates"}),e.jsx("path",{d:"M 530 120 L 580 120",stroke:"#14b8a6",strokeWidth:"2"}),e.jsx("rect",{x:"585",y:"45",width:"210",height:"150",rx:"6",fill:"#1e1b4b",stroke:"#818cf8"}),e.jsx("text",{x:"595",y:"70",fill:"#e0e7ff",fontSize:"11",fontWeight:"bold",children:"3. Trap Matches & Passes"}),e.jsx("rect",{x:"595",y:"85",width:"190",height:"40",rx:"4",fill:"#312e81"}),e.jsx("text",{x:"605",y:"105",fill:"#86efac",fontSize:"9",fontFamily:"monospace",children:"Type Matches ValueError!"}),e.jsx("text",{x:"595",y:"145",fill:"#c7d2fe",fontSize:"9",children:"Suppresses crash cleanly"}),e.jsx("text",{x:"595",y:"170",fill:"#86efac",fontSize:"9",fontWeight:"bold",children:"✅ TEST PASSED"})]})]}):a==="regexMatching"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"REGEX MESSAGE MATCHING: PREVENTING WRONG-CAUSE FALSE PASSES"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#082f49",stroke:"#0ea5e9"}),e.jsx("rect",{x:"25",y:"45",width:"370",height:"180",rx:"6",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"35",y:"70",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:'Type Only (No match=r"..."): Risky'}),e.jsx("rect",{x:"35",y:"85",width:"350",height:"30",rx:"4",fill:"#1c1917"}),e.jsx("text",{x:"45",y:"105",fill:"#fca5a5",fontSize:"9",fontFamily:"monospace",children:"with pytest.raises(ValueError):"}),e.jsx("rect",{x:"35",y:"120",width:"350",height:"40",rx:"4",fill:"#881337"}),e.jsx("text",{x:"45",y:"137",fill:"#fecdd3",fontSize:"9",children:'⚠️ If code raises ValueError("DB Down") instead'}),e.jsx("text",{x:"45",y:"152",fill:"#fecdd3",fontSize:"8",children:'of "Invalid fee", test STILL PASSES silently!'}),e.jsx("text",{x:"45",y:"195",fill:"#fda4af",fontSize:"9",fontWeight:"bold",children:"💥 Masks underlying functional regressions!"}),e.jsx("rect",{x:"425",y:"45",width:"370",height:"180",rx:"6",fill:"#042f2e",stroke:"#14b8a6"}),e.jsx("text",{x:"435",y:"70",fill:"#5eead4",fontSize:"12",fontWeight:"bold",children:'Type + match=r"..." (Strict & Safe)'}),e.jsx("rect",{x:"435",y:"85",width:"350",height:"30",rx:"4",fill:"#064e3b"}),e.jsx("text",{x:"445",y:"105",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:'with pytest.raises(ValueError, match=r"Fee.*positive"):'}),e.jsx("rect",{x:"435",y:"120",width:"350",height:"40",rx:"4",fill:"#134e4a"}),e.jsx("text",{x:"445",y:"137",fill:"#ccfbf1",fontSize:"9",children:"✅ Matches exact error cause string"}),e.jsx("text",{x:"445",y:"152",fill:"#ccfbf1",fontSize:"8",children:"Rejects unrelated ValueError exceptions"}),e.jsx("text",{x:"445",y:"195",fill:"#86efac",fontSize:"9",fontWeight:"bold",children:"🎯 Zero false passes. Enterprise precision."})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"CUSTOM EXCEPTION HIERARCHY & STRUCTURED PAYLOAD CAPTURE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#1e1b4b",stroke:"#a855f7"}),e.jsx("rect",{x:"25",y:"40",width:"380",height:"180",rx:"6",fill:"#3b0764",stroke:"#c084fc"}),e.jsx("text",{x:"35",y:"65",fill:"#f3e8ff",fontSize:"12",fontWeight:"bold",children:"Captured exc_info.value Instance:"}),e.jsx("rect",{x:"35",y:"75",width:"360",height:"135",rx:"4",fill:"#0f172a",stroke:"#a855f7"}),e.jsx("text",{x:"45",y:"95",fill:"#d8b4fe",fontSize:"9",fontFamily:"monospace",children:"class AdmissionQuotaExceededError(InstitutionalError):"}),e.jsx("text",{x:"45",y:"115",fill:"#e9d5ff",fontSize:"9",fontFamily:"monospace",children:'  err.campus      ➔ "Barrackpore"'}),e.jsx("text",{x:"45",y:"135",fill:"#e9d5ff",fontSize:"9",fontFamily:"monospace",children:'  err.batch       ➔ "Python_Batch_1"'}),e.jsx("text",{x:"45",y:"155",fill:"#e9d5ff",fontSize:"9",fontFamily:"monospace",children:"  err.capacity    ➔ 30"}),e.jsx("text",{x:"45",y:"175",fill:"#e9d5ff",fontSize:"9",fontFamily:"monospace",children:"  err.error_code  ➔ 4001"}),e.jsx("text",{x:"45",y:"198",fill:"#86efac",fontSize:"9",fontWeight:"bold",children:"✅ Rich structured domain context"}),e.jsx("rect",{x:"425",y:"40",width:"370",height:"180",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("text",{x:"435",y:"65",fill:"#e0f2fe",fontSize:"12",fontWeight:"bold",children:"Test Assertion Verifications:"}),e.jsx("rect",{x:"435",y:"75",width:"350",height:"135",rx:"4",fill:"#0f172a",stroke:"#38bdf8"}),e.jsx("text",{x:"445",y:"95",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"assert isinstance(err, InstitutionalError)"}),e.jsx("text",{x:"445",y:"115",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:'assert err.campus == "Barrackpore"'}),e.jsx("text",{x:"445",y:"135",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"assert err.capacity == 30"}),e.jsx("text",{x:"445",y:"155",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"assert err.error_code == 4001"}),e.jsx("text",{x:"445",y:"198",fill:"#fde047",fontSize:"9",fontWeight:"bold",children:"⚡ Validates telemetry & API response contracts"})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧪"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Exception & Regex Match Simulator"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Select exception types and toggle regex error message validation to observe interception flows and inspect generated PyTest code:"}),e.jsxs("div",{className:"bg-slate-950 p-5 sm:p-6 rounded-xl border border-slate-800/90 space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3",children:"Select Exception Type to Test:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[{id:"ValueError",label:"ValueError",icon:"🔢",tag:"Invalid Data Value"},{id:"KeyError",label:"KeyError",icon:"🔑",tag:"Duplicate or Missing Key"},{id:"QuotaExceededError",label:"QuotaExceededError",icon:"🏛️",tag:"Domain Custom Exception"}].map(t=>e.jsxs("button",{onClick:()=>f(t.id),className:c("p-3 rounded-xl border text-left transition-all",s===t.id?"bg-teal-950/60 border-teal-500 shadow-md shadow-teal-950/50":"bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400"),children:[e.jsxs("div",{className:"text-base mb-1",children:[t.icon," ",e.jsx("strong",{className:"text-slate-200 text-xs sm:text-sm",children:t.label})]}),e.jsx("div",{className:"text-[11px] text-teal-400 font-mono",children:t.tag})]},t.id))})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 bg-slate-900/80 rounded-xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-bold text-white",children:'Enable Regex Message Matching (match=r"...")'}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"Enforces exact error cause verification instead of type-only trapping"})]}),e.jsx("button",{onClick:()=>g(!n),className:c("px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all",n?"bg-emerald-950 border border-emerald-500 text-emerald-300":"bg-slate-800 border border-slate-700 text-slate-400"),children:n?"REGEX MATCH: STRICT":"TYPE ONLY: LENIENT"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2",children:[e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-teal-900/50",children:[e.jsx("div",{className:"text-xs text-teal-400 font-medium mb-1",children:"Contract Verification"}),e.jsx("div",{className:"text-xs font-bold font-mono text-teal-300 mt-1 leading-snug",children:l})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-cyan-900/50",children:[e.jsx("div",{className:"text-xs text-cyan-400 font-medium mb-1",children:"Regex Pattern"}),e.jsx("div",{className:"text-xs font-bold font-mono text-cyan-300 mt-1 leading-snug",children:i})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-purple-900/50",children:[e.jsx("div",{className:"text-xs text-purple-400 font-medium mb-1",children:"Institutional Use Case"}),e.jsx("div",{className:"text-xs font-bold font-mono text-purple-300 mt-1 leading-snug",children:d})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"Generated pytest.raises Implementation:"}),e.jsx("pre",{className:"p-4 bg-slate-900/90 border border-slate-800 rounded-xl text-xs sm:text-sm font-mono text-teal-200 overflow-x-auto leading-relaxed",children:y})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Production Code Labs & Exception Suites"})]}),e.jsx("p",{className:"text-slate-300 mb-8 text-base leading-relaxed",children:"Inspect, run, and master all four production-grade exception testing labs covering basic contexts, regex error matching, structured custom exception payloads, and the complete institutional admission guard:"}),e.jsxs("div",{className:"space-y-10",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:"Lab 1: Basic pytest.raises Exception Validation"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Testing minimum age requirements (<16) and minimum initial deposit thresholds (Rs. 2,000) for candidate registrations."})]}),e.jsx(p,{fileModule:v,title:"basic_pytest_raises_context.py",highlightLines:[12,23,40]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-cyan-300",children:'Lab 2: Error Message Regex Matching (match=r"...")'}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Asserting specific certificate issuance error codes (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"CERT_FAIL_401"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"CERT_FAIL_402"}),") with strict regex expressions."]})]}),e.jsx(p,{fileModule:j,title:"exception_message_regex_matching.py",highlightLines:[14,25,36]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-purple-300",children:"Lab 3: Custom Exception Hierarchy & Structured Payload Testing"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Inspecting structured attributes on ",e.jsx("code",{className:"text-purple-300 font-mono",children:"AdmissionQuotaExceededError"})," and bank decline codes on ",e.jsx("code",{className:"text-purple-300 font-mono",children:"PaymentDeclinedError"}),"."]})]}),e.jsx(p,{fileModule:w,title:"custom_exception_hierarchy_testing.py",highlightLines:[17,26,46,56]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-amber-300",children:"Lab 4: Institutional Multi-Campus Admission Guard Case Study"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Comprehensive admission guard test suite guarding against duplicate student IDs, expired vouchers, and invalid age boundaries across Mamata, Mahima, and Abhronila."})]}),e.jsx(p,{fileModule:N,title:"institutional_admission_validation_suite.py",highlightLines:[17,36,44,53]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Exception Testing Pitfalls & Anti-Patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"1. Trapping Generic 'Exception'"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Testing ",e.jsx("code",{className:"text-rose-400 font-mono",children:"with pytest.raises(Exception)"})," catches unintended SyntaxErrors, NameErrors, or TypeErrors, causing buggy tests to pass accidentally!"]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# BUG: with pytest.raises(Exception): f()",`
`,"# FIX: with pytest.raises(AdmissionQuotaError): f()"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"2. Putting Setup Code Inside 'with' Block"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Placing fixture setup inside the ",e.jsx("code",{className:"text-rose-400 font-mono",children:"with pytest.raises"})," block risks catching exceptions from the setup rather than the function under test."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# BUG: with pytest.raises(...): s = User(); s.pay()",`
`,"# FIX: s = User(); with pytest.raises(...): s.pay()"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"3. Unescaped Regex Special Characters"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["If the error string has parentheses (e.g. ",e.jsx("code",{className:"text-rose-400 font-mono",children:'"Error (Code 404)"'}),"), unescaped parentheses in ",e.jsx("code",{className:"text-teal-300 font-mono",children:"match"})," act as regex capture groups and fail to match."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:['# BUG: match="Error (Code 404)"',`
`,'# FIX: match=r"Error \\(Code 404\\)" or re.escape()']})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"4. Manual try...except Without assert False"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Writing manual ",e.jsx("code",{className:"text-rose-400 font-mono",children:"try: f() except: pass"})," without checking that the exception actually occurred will pass even if no exception was raised at all!"]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# ANTI-PATTERN: try: f() except: pass",`
`,"# BEST PRACTICE: with pytest.raises(ExpectedError): f()"]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Professional Exception Testing Checklist"})]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm sm:text-base",children:[e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Specify Exact Exception Types:"})," Always test against specific errors like ",e.jsx("code",{className:"text-teal-300 font-mono",children:"ValueError"})," or ",e.jsx("code",{className:"text-teal-300 font-mono",children:"KeyError"}),", never generic ",e.jsx("code",{className:"text-rose-400 font-mono",children:"Exception"}),"."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Match Error Message Causes:"})," Use ",e.jsx("code",{className:"text-teal-300 font-mono",children:'match=r"..."'})," to verify that the exception occurred for the expected underlying reason."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Keep Context Block Minimal:"})," Keep only the single target operation inside the ",e.jsx("code",{className:"text-teal-300 font-mono",children:"with pytest.raises()"})," block."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Assert on Custom Error Attributes:"})," Capture ",e.jsx("code",{className:"text-teal-300 font-mono",children:"exc_info.value"})," to assert on domain error payloads and HTTP status codes."]})]})]})]}),e.jsx("section",{ref:r,className:"section-hidden",children:e.jsx(_,{title:"Testing Exceptions with PyTest FAQs",questions:S})}),e.jsx("section",{ref:r,className:"section-hidden",children:e.jsx(b,{content:T,title:"Topic 5: Testing Exceptions with PyTest Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic5_note.txt"})}),e.jsx("section",{ref:r,className:"section-hidden",children:e.jsx(E,{note:"Defensive software architecture requires rigorous negative testing. In our multi-campus student management system across Barrackpore, Kolkata, Ichapur, and Jadavpur, proving that our admission pipeline rejects underage candidates, detects duplicate roll numbers, and blocks overpayment transactions with precise exception types is fundamental to data integrity. Using pytest.raises with regex message matching guarantees that every boundary rule for Mamata, Mahima, and Abhronila fails cleanly and informatively before any bad data hits production databases."})})]})]})}export{V as default};
