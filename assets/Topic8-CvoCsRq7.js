import{b as n,j as e,bg as x}from"./vendor-react-core-Doz9nIC6.js";import{P as A}from"./PythonFileLoader-hCi5osN-.js";import{P as j}from"./PlainTextPrint-C08xhKA4.js";import{F as w}from"./FAQTemplate-CkSqDH4B.js";import{T as C}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const I=`# topic8_files/custom_exception_hierarchy_fundamentals.py\r
# Module: 003_002_basic-exception-handling\r
# Topic: Creating User-Defined Custom Exception Classes\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 8 - File 1: Custom Exception Class Fundamentals & Hierarchies\r
Demonstrates:\r
  1. Creating custom user-defined exception classes by subclassing \`Exception\`\r
  2. Why you must inherit from \`Exception\` rather than \`BaseException\`\r
  3. Designing cohesive domain-specific exception hierarchies\r
"""\r
\r
# =====================================================================\r
# 1. ROOT DOMAIN EXCEPTION (Base for all institute errors)\r
# =====================================================================\r
class CoderAccoTaxInstituteError(Exception):\r
    """Root base exception for all Coder & AccoTax domain errors.\r
    Allows callers to catch ANY institute error with a single except clause!\r
    """\r
    pass\r
\r
\r
# =====================================================================\r
# 2. SPECIALIZED SUB-HIERARCHIES\r
# =====================================================================\r
class AdmissionError(CoderAccoTaxInstituteError):\r
    """Base exception for enrollment and admission failures."""\r
    pass\r
\r
class CourseQuotaExceededError(AdmissionError):\r
    """Raised when classroom seats are fully booked."""\r
    pass\r
\r
class DuplicateEnrollmentError(AdmissionError):\r
    """Raised when a student attempts to enroll twice with the same ID."""\r
    pass\r
\r
\r
# =====================================================================\r
# 3. DOMAIN SERVICE IMPLEMENTATION\r
# =====================================================================\r
class ClassroomBatch:\r
    def __init__(self, course_name: str, max_capacity: int = 2):\r
        self.course_name = course_name\r
        self.max_capacity = max_capacity\r
        self.enrolled_students = []\r
\r
    def enroll(self, student_id: str, student_name: str):\r
        if student_id in [s["id"] for s in self.enrolled_students]:\r
            raise DuplicateEnrollmentError(f"Student ID '{student_id}' is already enrolled in {self.course_name}!")\r
\r
        if len(self.enrolled_students) >= self.max_capacity:\r
            raise CourseQuotaExceededError(f"Course '{self.course_name}' is FULL (Max capacity: {self.max_capacity} seats)!")\r
\r
        self.enrolled_students.append({"id": student_id, "name": student_name})\r
        print(f"  [ENROLLED] {student_name} ({student_id}) -> {self.course_name}")\r
\r
\r
def demonstrate_custom_hierarchy():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - CUSTOM EXCEPTION CLASS HIERARCHY")\r
    print("=" * 70)\r
\r
    batch = ClassroomBatch("Advanced Python & Cloud Architecture", max_capacity=2)\r
\r
    # 1. Normal Admissions\r
    print("1. Enrolling initial 2 students:")\r
    batch.enroll("STU-101", "Sourav Mukherjee")\r
    batch.enroll("STU-102", "Priyanka Sen")\r
\r
    # 2. Triggering DuplicateEnrollmentError\r
    print("\\n2. Attempting Duplicate Enrollment (STU-101):")\r
    try:\r
        batch.enroll("STU-101", "Sourav Duplicate")\r
    except DuplicateEnrollmentError as err:\r
        print(f"   [CAUGHT SPECIFIC ERROR] DuplicateEnrollmentError: {err}")\r
\r
    # 3. Triggering CourseQuotaExceededError\r
    print("\\n3. Attempting to enroll 3rd student (Quota Full):")\r
    try:\r
        batch.enroll("STU-103", "Rahul Verma")\r
    except CourseQuotaExceededError as err:\r
        print(f"   [CAUGHT SPECIFIC ERROR] CourseQuotaExceededError: {err}")\r
\r
    # 4. Catching via Root Domain Exception (Polymorphic Catching)\r
    print("\\n4. Polymorphic Catching via Base \`CoderAccoTaxInstituteError\`:")\r
    try:\r
        batch.enroll("STU-104", "Debolina Roy")\r
    except CoderAccoTaxInstituteError as err:\r
        print(f"   [CAUGHT VIA ROOT DOMAIN BASE] {type(err).__name__}: {err}")\r
\r
    print("\\n[PASSED] Custom Exception Class Hierarchy Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_custom_hierarchy()\r
`,T=`# topic8_files/custom_exceptions_with_attributes.py\r
# Module: 003_002_basic-exception-handling\r
# Topic: Creating User-Defined Custom Exception Classes\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 8 - File 2: Custom Exceptions with Rich Contextual Metadata\r
Demonstrates:\r
  1. Overriding \`__init__()\` in custom exceptions to store forensic payload attributes\r
  2. Calling \`super().__init__(formatted_message)\` to preserve standard string rendering\r
  3. Exporting structured JSON / dictionary payloads (\`to_dict()\`) for HTTP APIs and logs\r
"""\r
\r
import datetime as dt\r
from typing import Dict, Any\r
\r
class InsufficientTuitionFundsError(Exception):\r
    """Rich domain exception carrying complete financial audit details."""\r
\r
    def __init__(self, student_id: str, student_name: str, requested_amount: float, current_balance: float):\r
        self.student_id = student_id\r
        self.student_name = student_name\r
        self.requested_amount = float(requested_amount)\r
        self.current_balance = float(current_balance)\r
        self.deficit = self.requested_amount - self.current_balance\r
        self.timestamp = dt.datetime.now().strftime("%Y-%m-%d %H:%M:%S")\r
\r
        # Construct clear formatted error message for standard traceback:\r
        message = (\r
            f"Student {self.student_name} ({self.student_id}) has insufficient funds for fee installment. "\r
            f"Required: INR {self.requested_amount:,.2f}, Available: INR {self.current_balance:,.2f} "\r
            f"(Deficit: INR {self.deficit:,.2f})"\r
        )\r
        super().__init__(message)\r
\r
    def to_api_payload(self) -> Dict[str, Any]:\r
        """Serializes error to structured dictionary for REST API JSON responses."""\r
        return {\r
            "error_code": "TUITION_FUNDS_INSUFFICIENT",\r
            "student_id": self.student_id,\r
            "student_name": self.student_name,\r
            "required_inr": self.requested_amount,\r
            "available_inr": self.current_balance,\r
            "deficit_inr": self.deficit,\r
            "timestamp": self.timestamp,\r
            "support_contact": "finance@codernaccotax.co.in"\r
        }\r
\r
\r
def process_semester_fee(student_id: str, student_name: str, installment_fee: float, wallet_balance: float):\r
    if installment_fee > wallet_balance:\r
        raise InsufficientTuitionFundsError(student_id, student_name, installment_fee, wallet_balance)\r
    print(f"  [PAYMENT APPROVED] INR {installment_fee:,.2f} charged to {student_name}'s account.")\r
\r
\r
def demonstrate_rich_exceptions():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - CUSTOM EXCEPTIONS WITH RICH METADATA")\r
    print("=" * 70)\r
\r
    # 1. Successful payment\r
    print("1. Processing Valid Fee Payment:")\r
    process_semester_fee("STU-550", "Debolina Roy", 15000.0, 20000.0)\r
\r
    # 2. Triggering Rich Context Exception\r
    print("\\n2. Processing Payment with Insufficient Balance:")\r
    try:\r
        process_semester_fee("STU-551", "Arijit Sen", 25000.0, 18000.0)\r
    except InsufficientTuitionFundsError as err:\r
        print(f"\\n[STANDARD STR(ERR)]:\\n  {err}\\n")\r
        print("[EXTRACTED CONTEXTUAL ATTRIBUTES]:")\r
        print(f"  * Student ID       : {err.student_id}")\r
        print(f"  * Deficit Amount   : INR {err.deficit:,.2f}")\r
        print(f"  * Event Timestamp  : {err.timestamp}\\n")\r
\r
        print("[STRUCTURED REST API JSON PAYLOAD]:")\r
        print(f"  {err.to_api_payload()}")\r
\r
    print("\\n[PASSED] Custom Exceptions with Rich Metadata Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_rich_exceptions()\r
`,v=`# topic8_files/multi_tiered_domain_exception_handling.py\r
# Module: 003_002_basic-exception-handling\r
# Topic: Creating User-Defined Custom Exception Classes\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 8 - File 3: Hierarchical Exception Dispatch & Ordering Mechanics\r
Demonstrates:\r
  1. Catching exceptions from Most Specific (leaf child) to Most General (root ancestor)\r
  2. The Base Class Shadowing Trap (Unreachable child except blocks)\r
  3. Polymorphic fallback strategies in microservices\r
"""\r
\r
# Base Architecture\r
class InstituteAppError(Exception):\r
    """Level 0: General Application Error."""\r
    pass\r
\r
class AuthenticationError(InstituteAppError):\r
    """Level 1: Security & Session Error."""\r
    pass\r
\r
class ExpiredTokenError(AuthenticationError):\r
    """Level 2: Specific Token Expiry."""\r
    pass\r
\r
class InvalidPasswordError(AuthenticationError):\r
    """Level 2: Specific Password Mismatch."""\r
    pass\r
\r
\r
def login_student(auth_mode: str):\r
    if auth_mode == "expired":\r
        raise ExpiredTokenError("Session expired at 22:30. Please refresh your JWT token.")\r
    elif auth_mode == "wrong_pwd":\r
        raise InvalidPasswordError("Password mismatch: 3 failed attempts remaining.")\r
    elif auth_mode == "network":\r
        raise InstituteAppError("Gateway communication timeout to authentication server.")\r
    print("  [LOGIN SUCCESS] Welcome to Coder & AccoTax Student Portal!")\r
\r
\r
def demonstrate_hierarchical_dispatch():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - HIERARCHICAL EXCEPTION DISPATCH & ORDERING")\r
    print("=" * 70)\r
\r
    test_cases = ["expired", "wrong_pwd", "network"]\r
\r
    for mode in test_cases:\r
        print(f"Testing Scenario: '{mode}'")\r
        try:\r
            login_student(mode)\r
        # 1. MOST SPECIFIC FIRST:\r
        except ExpiredTokenError as err:\r
            print(f"  -> Handled by [ExpiredTokenError Block]: Redirecting to Token Refresh Endpoint! ({err})")\r
        # 2. INTERMEDIATE GENERAL:\r
        except AuthenticationError as err:\r
            print(f"  -> Handled by [AuthenticationError Block]: Showing Password Reset Dialog! ({err})")\r
        # 3. ROOT ANCESTOR LAST:\r
        except InstituteAppError as err:\r
            print(f"  -> Handled by [InstituteAppError Catch-All]: Displaying Generic Network Banner! ({err})")\r
        print()\r
\r
    print(r"""\r
Rule of Ordering:\r
  Always order except clauses from MOST SPECIFIC (subclass) to MOST GENERAL (base class).\r
  If \`except InstituteAppError\` were placed first, it would catch everything, rendering\r
  the child \`ExpiredTokenError\` and \`AuthenticationError\` blocks unreachable!\r
""")\r
    print("[PASSED] Hierarchical Exception Dispatch Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_hierarchical_dispatch()\r
`,R=`# topic8_files/institutional_admission_validation_suite.py\r
# Module: 003_002_basic-exception-handling\r
# Topic: Creating User-Defined Custom Exception Classes\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 8 - File 4: Enterprise Institutional Admission Validation Suite (Case Study)\r
Demonstrates:\r
  1. Complete domain exception hierarchy for educational admissions & billing\r
  2. Custom exception classes carrying domain payloads and error codes\r
  3. Safe multi-tiered error recovery and institutional reporting\r
"""\r
\r
from typing import Dict, Any, List\r
import datetime as dt\r
\r
# =====================================================================\r
# INSTITUTIONAL ADMISSION EXCEPTION HIERARCHY\r
# =====================================================================\r
class AdmissionPipelineError(Exception):\r
    """Base exception for all admission processing operations."""\r
    def __init__(self, message: str, error_code: str):\r
        self.error_code = error_code\r
        self.timestamp = dt.datetime.now().strftime("%Y-%m-%d %H:%M:%S")\r
        super().__init__(f"[{error_code}] {message}")\r
\r
\r
class DuplicateStudentRecordError(AdmissionPipelineError):\r
    """Raised when an applicant with identical ID or PAN is already enrolled."""\r
    def __init__(self, student_id: str, existing_course: str):\r
        self.student_id = student_id\r
        self.existing_course = existing_course\r
        super().__init__(\r
            f"Student ID '{student_id}' is already enrolled in '{existing_course}'!",\r
            "ERR_DUPLICATE_APPLICANT"\r
        )\r
\r
\r
class CourseCapacityExceededError(AdmissionPipelineError):\r
    """Raised when batch seats are completely filled."""\r
    def __init__(self, course_code: str, max_capacity: int, waitlist_number: int):\r
        self.course_code = course_code\r
        self.max_capacity = max_capacity\r
        self.waitlist_number = waitlist_number\r
        super().__init__(\r
            f"Course '{course_code}' is FULL (Max: {max_capacity}). Assigned Waitlist #{waitlist_number}.",\r
            "ERR_CAPACITY_EXCEEDED"\r
        )\r
\r
\r
class TuitionSchemeViolationError(AdmissionPipelineError):\r
    """Raised when initial deposit is below institutional minimum threshold."""\r
    def __init__(self, course_code: str, min_required_fee: float, submitted_fee: float):\r
        self.course_code = course_code\r
        self.min_required_fee = min_required_fee\r
        self.submitted_fee = submitted_fee\r
        self.shortfall = min_required_fee - submitted_fee\r
        super().__init__(\r
            f"Minimum initial deposit for '{course_code}' is INR {min_required_fee:,.2f}. Submitted INR {submitted_fee:,.2f} (Shortfall: INR {self.shortfall:,.2f})",\r
            "ERR_TUITION_SCHEME_VIOLATION"\r
        )\r
\r
\r
# =====================================================================\r
# ADMISSION CONTROLLER\r
# =====================================================================\r
class InstitutionalAdmissionController:\r
    MIN_DEPOSIT_MAP = {\r
        "PY-ADV": 5000.0,\r
        "DATA-ENG": 8000.0,\r
        "AI-ML": 10000.0\r
    }\r
\r
    def __init__(self, course_code: str, max_seats: int = 2):\r
        self.course_code = course_code\r
        self.max_seats = max_seats\r
        self.enrolled_roster: List[Dict[str, Any]] = []\r
        self.waitlist_count = 0\r
\r
    def process_admission(self, student_id: str, name: str, deposit_fee: float) -> Dict[str, Any]:\r
        # Guard 1: Duplicate Check\r
        if any(s["id"] == student_id for s in self.enrolled_roster):\r
            raise DuplicateStudentRecordError(student_id, self.course_code)\r
\r
        # Guard 2: Tuition Scheme Deposit Check\r
        min_fee = self.MIN_DEPOSIT_MAP.get(self.course_code, 5000.0)\r
        if deposit_fee < min_fee:\r
            raise TuitionSchemeViolationError(self.course_code, min_fee, deposit_fee)\r
\r
        # Guard 3: Course Capacity Check\r
        if len(self.enrolled_roster) >= self.max_seats:\r
            self.waitlist_count += 1\r
            raise CourseCapacityExceededError(self.course_code, self.max_seats, self.waitlist_count)\r
\r
        # Success: Record enrollment\r
        record = {\r
            "id": student_id,\r
            "name": name,\r
            "course": self.course_code,\r
            "deposit_paid": deposit_fee,\r
            "enrolled_at": dt.datetime.now().strftime("%Y-%m-%d %H:%M:%S")\r
        }\r
        self.enrolled_roster.append(record)\r
        print(f"  [ADMISSION CONFIRMED] {name} ({student_id}) -> {self.course_code} (Deposit: INR {deposit_fee:,.2f})")\r
        return record\r
\r
\r
def run_admission_suite_demo():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - ENTERPRISE ADMISSION VALIDATION SUITE")\r
    print("=" * 70)\r
\r
    controller = InstitutionalAdmissionController("PY-ADV", max_seats=2)\r
\r
    # 1. Successful Enrollments\r
    print("1. Enrolling initial 2 applicants:")\r
    controller.process_admission("STU-101", "Sourav Mukherjee", 6000.0)\r
    controller.process_admission("STU-102", "Priyanka Sen", 5000.0)\r
\r
    # 2. Testing Tuition Scheme Violation\r
    print("\\n2. Testing Underpaid Deposit (Submitted INR 2,000 for INR 5,000 min):")\r
    try:\r
        controller.process_admission("STU-103", "Rahul Verma", 2000.0)\r
    except TuitionSchemeViolationError as err:\r
        print(f"   [CAUGHT] {err}")\r
        print(f"   * Deficit Shortfall: INR {err.shortfall:,.2f}")\r
\r
    # 3. Testing Capacity Exceeded (Waitlist Assignment)\r
    print("\\n3. Testing Over-Capacity Applicant:")\r
    try:\r
        controller.process_admission("STU-104", "Debolina Roy", 7000.0)\r
    except CourseCapacityExceededError as err:\r
        print(f"   [CAUGHT] {err}")\r
        print(f"   * Assigned Waitlist Position: #{err.waitlist_number}")\r
\r
    # 4. Testing Duplicate Student ID\r
    print("\\n4. Testing Duplicate Enrollment (Re-submitting STU-101):")\r
    try:\r
        controller.process_admission("STU-101", "Sourav Duplicate", 8000.0)\r
    except DuplicateStudentRecordError as err:\r
        print(f"   [CAUGHT] {err}")\r
\r
    print("\\n[PASSED] Enterprise Admission Validation Suite Completed Successfully.")\r
\r
\r
if __name__ == "__main__":\r
    run_admission_suite_demo()\r
`,D=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_002: EXCEPTION HANDLING\r
            TOPIC 8: CREATING USER-DEFINED CUSTOM EXCEPTION CLASSES\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. DEFINING DOMAIN BASE EXCEPTIONS\r
--------------------------------------------------------------------------------\r
  class InstituteAppError(Exception):\r
      """Root domain base exception."""\r
      pass\r
\r
  class AdmissionError(InstituteAppError):\r
      pass\r
\r
  class CourseQuotaExceededError(AdmissionError):\r
      pass\r
\r
--------------------------------------------------------------------------------\r
2. ATTACHING RICH CONTEXTUAL ATTRIBUTES\r
--------------------------------------------------------------------------------\r
  class TuitionDeficitError(InstituteAppError):\r
      def __init__(self, student_id: str, deficit: float):\r
          self.student_id = student_id\r
          self.deficit = deficit\r
          super().__init__(f"Student {student_id} has fee deficit of INR {deficit:,.2f}")\r
\r
--------------------------------------------------------------------------------\r
3. HIERARCHICAL EXCEPT ORDERING\r
--------------------------------------------------------------------------------\r
  try:\r
      process_admission()\r
  except CourseQuotaExceededError:    # 1. Most Specific First\r
      handle_waitlist()\r
  except AdmissionError:              # 2. Intermediate Subsystem Base\r
      handle_admission_error()\r
  except InstituteAppError:           # 3. Root Domain Base Last\r
      handle_general_error()\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 8: CUSTOM EXCEPTION CLASSES\r
================================================================================\r
`,P=[{question:"Why should custom user-defined exception classes inherit from 'Exception' and NOT 'BaseException'?",shortAnswer:"Because 'BaseException' is reserved for system-exiting events (KeyboardInterrupt, SystemExit, GeneratorExit); inheriting from 'Exception' ensures normal domain errors can be safely caught by standard 'except Exception:' handlers without blocking Ctrl+C.",explanation:"A fundamental rule of Python exception architecture.",hint:"Inherit from Exception so KeyboardInterrupt and SystemExit are not accidentally caught.",level:"basic",codeExample:`class MyCustomError(Exception):
    pass  # Correct!`},{question:"What is the 'Root Domain Base Exception' design pattern?",shortAnswer:"Creating a top-level abstract or base exception class (e.g. 'class CoderAccoTaxError(Exception): pass') from which all library/application-specific exceptions inherit.",explanation:"Allows users of your library to catch all module errors with a single except statement.",hint:"A common base class for all exceptions defined in a package or library.",level:"basic",codeExample:`class InstituteError(Exception): pass
class AdmissionError(InstituteError): pass`},{question:"How do you store custom forensic attributes on a user-defined exception instance?",shortAnswer:"By overriding the '__init__' method, accepting the custom arguments, storing them on 'self' (e.g. 'self.student_id = student_id'), and calling 'super().__init__(message)'.",explanation:"Preserves standard string rendering while enabling programmatic access to error metadata.",hint:"Override __init__, save attributes on self, and call super().__init__().",level:"basic",codeExample:`class FeeDeficitError(Exception):
    def __init__(self, stu_id, deficit):
        self.stu_id = stu_id
        self.deficit = deficit
        super().__init__(f'Deficit of INR {deficit}')`},{question:"What is the 'Exception Shadowing' trap in hierarchical 'except' clauses?",shortAnswer:"Placing a general parent exception block (e.g. 'except InstituteError:') BEFORE a specific child exception block (e.g. 'except QuotaFullError:'), which causes the parent block to catch all errors, rendering the child block unreachable dead code.",explanation:"Python evaluates except blocks top-to-bottom and stops at the first matching class.",hint:"Placing a broad parent class before a specific child class makes the child block unreachable.",level:"moderate",codeExample:`# BAD:
except InstituteError: ...
except QuotaFullError: ... # DEAD CODE!`},{question:"What is the correct ordering rule for multi-tiered 'except' blocks?",shortAnswer:"Always order except blocks from Most Specific (leaf derived subclasses) to Most General (root ancestor base classes).",explanation:"Guarantees specific handlers receive priority.",hint:"Most specific subclass first, most general base class last.",level:"basic",codeExample:`except QuotaFullError: ...
except AdmissionError: ...
except InstituteError: ...`},{question:"Why should custom exceptions follow standard Python naming conventions ending in 'Error'?",shortAnswer:"PEP 8 specifies that exception classes should end with the suffix 'Error' (e.g., 'DatabaseConnectionError') to make their purpose instantly recognizable in code and stack traces.",explanation:"Promotes code clarity and consistency.",hint:"PEP 8 requires exception classes to end with the 'Error' suffix.",level:"basic",codeExample:"class StudentNotFoundError(Exception): pass"},{question:"Can a custom exception class be completely empty ('pass')?",shortAnswer:"Yes. An empty class inheriting from Exception ('class RecordNotFoundError(Exception): pass') is 100% functional and automatically inherits message handling from Exception.",explanation:"Common for simple sentinel error types.",hint:"Yes, 'class MyError(Exception): pass' is fully functional.",level:"basic",codeExample:"class ItemNotFoundError(Exception): pass"},{question:"How do custom exceptions facilitate structured REST API error responses in frameworks like FastAPI or Flask?",shortAnswer:"By attaching status codes, error codes, and details to custom exception classes, which global exception handlers serialize into standardized JSON payloads.",explanation:"Separates domain validation from HTTP transport mechanics.",hint:"Custom attributes can be serialized into standardized JSON error responses.",level:"moderate",codeExample:`def to_dict(self):
    return {'error': self.code, 'details': self.details}`},{question:"Can a custom exception inherit from built-in specialized exceptions like 'ValueError' or 'KeyError'?",shortAnswer:"Yes. If your custom exception represents a specialized value or key failure (e.g. 'class InvalidPANError(ValueError): pass'), inheriting from the built-in type allows existing code expecting ValueError to catch it automatically.",explanation:"Leverages Python's existing exception semantics.",hint:"Yes, subclassing ValueError allows it to be caught by except ValueError handlers.",level:"moderate",codeExample:"class InvalidPANError(ValueError): pass"},{question:"What happens if you do NOT call 'super().__init__()' in a custom exception constructor?",shortAnswer:"The exception will still be created, but standard string conversions ('str(err)') and traceback formatting may fail to display the message properly because 'BaseException.args' was not populated.",explanation:"Always call super().__init__() to maintain full Python Data Model compatibility.",hint:"Always call super().__init__() to ensure .args and str(err) work properly.",level:"complex",codeExample:`def __init__(self, msg, code):
    self.code = code
    super().__init__(msg)  # Essential!`},{question:"How can you check if an exception object is an instance of a specific custom hierarchy?",shortAnswer:"Using the built-in 'isinstance(err, MyBaseException)' or 'issubclass(type(err), MyBaseException)' functions.",explanation:"Operates identically to standard Python OOP type checking.",hint:"Use isinstance(err, MyBaseException).",level:"basic",codeExample:`if isinstance(err, AdmissionError):
    print('Admission failure')`},{question:"Can custom exceptions define custom methods (like '__str__' or 'log()')?",shortAnswer:"Yes. Custom exceptions are full-featured Python classes and can define custom helper methods, formatting functions, or diagnostic serializers.",explanation:"Enables rich domain-specific error utilities.",hint:"Yes, custom exceptions are standard Python classes with methods.",level:"basic",codeExample:"def __str__(self): return f'[{self.code}] {self.msg}'"},{question:`What is the advantage of using custom exceptions over raising generic 'Exception("string")'?`,shortAnswer:"Generic 'Exception' cannot be caught selectively without catching unintended bugs; custom exceptions allow precise, targeted error handling while letting unexpected bugs crash or be logged appropriately.",explanation:"Prevents accidental masking of syntax or type bugs.",hint:"Allows targeted catching without masking unrelated system exceptions.",level:"basic",codeExample:"# Specific catching: except QuotaExceededError:"},{question:"How do custom exceptions improve software testability?",shortAnswer:"Test suites can assert that specific failure edge cases raise the exact expected custom exception class (e.g. 'with pytest.raises(DuplicateStudentRecordError):') and verify forensic payload values.",explanation:"Enables rock-solid regression testing.",hint:"Enables testing exact error types and validating metadata with pytest.raises().",level:"basic",codeExample:`with pytest.raises(DuplicateStudentRecordError) as exc:
    assert exc.value.student_id == 'STU-101'`},{question:"What is a 'Mix-in Exception'?",shortAnswer:"A secondary class mixed into custom exception definitions to add shared capabilities, such as JSON serialization or Sentry logging integration.",explanation:"Applies multiple inheritance to enhance exception behavior.",hint:"A mixin class providing shared capabilities across multiple exception types.",level:"complex",codeExample:`class JSONErrorMixin:
    def to_json(self): return json.dumps(self.__dict__)`},{question:"When should you NOT create a custom exception class?",shortAnswer:"When an existing standard built-in exception (like ValueError, TypeError, KeyError, FileNotFoundError) perfectly and unambiguously describes the failure mode without needing custom metadata.",explanation:"Avoid creating redundant exception classes for standard conditions.",hint:"When standard built-ins (ValueError, TypeError) already describe the error perfectly.",level:"basic",codeExample:"# Prefer ValueError over custom 'NegativeNumberError' for simple math"},{question:"Can multiple custom exception classes be defined in a single module file?",shortAnswer:"Yes. It is standard industry practice to group all domain-specific exception classes together in a dedicated 'exceptions.py' file within a package.",explanation:"Provides a single source of truth for library errors.",hint:"Yes, commonly grouped inside an 'exceptions.py' module.",level:"basic",codeExample:"# my_package/exceptions.py"},{question:"How does Python populate the 'err.args' tuple in custom exceptions?",shortAnswer:"Whatever positional arguments are passed into 'super().__init__(*args)' are stored in the immutable tuple 'err.args'.",explanation:"Used internally by Python's serialization and printing mechanics.",hint:"Populated by positional arguments passed into super().__init__().",level:"moderate",codeExample:`err = MyError('msg', 404)
print(err.args)  # ('msg', 404)`},{question:"Can custom exceptions be pickled for multiprocessing or celery task serialization?",shortAnswer:"Yes, provided their '__init__' arguments match the values stored in 'self.args' or by implementing '__reduce__()'.",explanation:"Crucial for distributed task queues like Celery.",hint:"Yes, supported if __init__ args match self.args or via __reduce__.",level:"complex",codeExample:"# Fully picklable across multiprocessing workers"},{question:"What is the difference between a custom exception and a custom dataclass?",shortAnswer:"A custom exception inherits from 'Exception' and participates in Python's stack unwinding and 'try...except' mechanisms; dataclasses are purely data containers and cannot be raised.",explanation:"Though dataclasses can be combined with Exception via '@dataclass class MyError(Exception):'.",hint:"Exceptions participate in try...except and call stack unwinding.",level:"moderate",codeExample:`from dataclasses import dataclass
@dataclass
class APIError(Exception):
    code: int`},{question:"Can you re-raise a custom exception with modified attributes?",shortAnswer:"Yes. Inside an except block, you can mutate custom attributes on the caught instance and invoke bare 'raise' to propagate it.",explanation:"Enriches telemetry as errors bubble up microservice layers.",hint:"Yes, mutate attributes on the instance before calling bare raise.",level:"moderate",codeExample:`except AdmissionError as e:
    e.retries += 1
    raise`},{question:"How do custom exceptions simplify logging in production?",shortAnswer:"Log formatters can inspect custom attributes (e.g. 'err.student_id', 'err.deficit') to emit structured JSON logs with high-cardinality forensic metadata automatically.",explanation:"Drastically simplifies querying logs in Datadog, ELK, or CloudWatch.",hint:"Enables emitting structured JSON logs with rich forensic metadata.",level:"moderate",codeExample:"logger.error('Admission failed', extra=err.to_dict())"},{question:"What is the 'Subsystem Exception Wrapper' pattern?",shortAnswer:"Catching low-level third-party exceptions (e.g. 'psycopg2.OperationalError') at domain boundaries and wrapping them into a custom high-level domain exception (e.g. 'DatabaseConnectionError').",explanation:"Prevents internal implementation details from leaking to callers.",hint:"Wrapping low-level third-party errors into high-level domain exceptions.",level:"moderate",codeExample:`except LowLevelDBError as e:
    raise HighLevelDomainError('Database unreachable') from e`},{question:"Can custom exceptions be used as context managers with 'with' statements?",shortAnswer:"While technically possible by defining '__enter__' and '__exit__', it is an anti-pattern; exception classes should only represent error conditions, not resource lifecycle managers.",explanation:"Keep responsibilities focused and cohesive.",hint:"Avoid using exceptions as context managers; keep responsibilities cohesive.",level:"complex",codeExample:"# Anti-pattern: Do not use exceptions as context managers"},{question:"What is the ultimate golden rule for designing User-Defined Custom Exception Classes in Python?",shortAnswer:"Inherit from 'Exception', establish a root domain base class for your package, end class names with 'Error', store structured forensic metadata on 'self', and always order except handlers from most specific to most general.",explanation:"Produces maintainable, self-documenting, and crash-proof enterprise code.",hint:"Subclass Exception, create a root base class, store rich metadata, and order specific first.",level:"basic",codeExample:"# Enterprise-grade custom exception architecture"}];function B(){const m=n.useRef([]),[d,u]=n.useState("tree"),[i,b]=n.useState("STU-103"),[h,_]=n.useState("Rahul Verma"),[a,g]=n.useState("PY-ADV"),[o,E]=n.useState(6e3),[l,p]=n.useState({status:"IDLE",exceptionClass:null,message:"Ready to process admission application.",payload:null}),f=[{id:"STU-101",name:"Sourav Mukherjee",course:"PY-ADV",fee:6e3},{id:"STU-102",name:"Priyanka Sen",course:"PY-ADV",fee:5e3},{id:"STU-105",name:"Ananya Ghosh",course:"AI-ML",fee:1e4}],y={"PY-ADV":{name:"Python Pro Full-Stack",minDeposit:5e3,maxSeats:2},"DATA-ENG":{name:"Data Engineering Track",minDeposit:8e3,maxSeats:2},"AI-ML":{name:"AI & Deep Learning",minDeposit:1e4,maxSeats:1}};n.useEffect(()=>{const t=new IntersectionObserver(c=>{c.forEach(s=>{s.isIntersecting&&s.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return m.current.forEach(c=>{c&&t.observe(c)}),()=>t.disconnect()},[]);const r=t=>{t&&!m.current.includes(t)&&m.current.push(t)},N=()=>{const t=y[a],c=f.filter(s=>s.course===a);if(f.some(s=>s.id.toUpperCase()===i.toUpperCase())){const s=f.find(S=>S.id.toUpperCase()===i.toUpperCase());p({status:"ERROR",exceptionClass:"DuplicateStudentRecordError",message:`[ERR_DUPLICATE_APPLICANT] Student ID '${i}' is already enrolled in '${s.course}'!`,payload:{error_code:"ERR_DUPLICATE_APPLICANT",student_id:i,existing_student:s.name,existing_course:s.course,timestamp:new Date().toISOString()}});return}if(o<t.minDeposit){const s=t.minDeposit-o;p({status:"ERROR",exceptionClass:"TuitionSchemeViolationError",message:`[ERR_TUITION_SCHEME_VIOLATION] Minimum deposit for '${a}' is INR ${t.minDeposit.toLocaleString()}. Submitted INR ${o.toLocaleString()} (Shortfall: INR ${s.toLocaleString()})`,payload:{error_code:"ERR_TUITION_SCHEME_VIOLATION",course_code:a,required_min_fee:t.minDeposit,submitted_fee:o,shortfall_inr:s,timestamp:new Date().toISOString()}});return}if(c.length>=t.maxSeats){p({status:"ERROR",exceptionClass:"CourseCapacityExceededError",message:`[ERR_CAPACITY_EXCEEDED] Course '${a}' is FULL (Max: ${t.maxSeats}). Assigned Waitlist #1.`,payload:{error_code:"ERR_CAPACITY_EXCEEDED",course_code:a,max_capacity:t.maxSeats,assigned_waitlist_position:1,timestamp:new Date().toISOString()}});return}p({status:"SUCCESS",exceptionClass:null,message:`[ADMISSION CONFIRMED] ${h} (${i}) enrolled in ${t.name}!`,payload:{status:"CONFIRMED",student_id:i,student_name:h,course_name:t.name,deposit_paid:o,timestamp:new Date().toISOString()}})};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:r,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_002"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 8"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Robust Exception Handling & Defensive Coding"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Creating User-Defined ",e.jsx("span",{className:"text-teal-400",children:"Custom Exception Classes"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master domain-driven error engineering: subclassing ",e.jsx("code",{className:"text-teal-300 font-mono",children:"Exception"}),", root domain base hierarchies, embedding stateful forensic payloads (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"self.deficit"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"self.error_code"}),"), serializing structured API responses, and specific-to-general exception ordering."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🌳 Root Domain Base Exception Pattern"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📦 Rich Forensic Payload Attributes"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🎯 Specific-to-General Hierarchical Dispatch"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Preventing Shadowing Traps"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧱"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. Architecting Custom Domain Exceptions"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["In enterprise systems, standard built-ins (like ",e.jsx("code",{className:"text-slate-200 font-mono",children:"ValueError"}),") are often too generic to represent complex domain failures. Custom exceptions allow you to create ",e.jsx("strong",{children:"dedicated error types with structured forensic metadata"}),":"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-base mb-1",children:"1️⃣ Subclass Exception"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"class DomainError(Exception):"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Always inherit from ",e.jsx("code",{className:"text-teal-300",children:"Exception"}),", never ",e.jsx("code",{className:"text-rose-400",children:"BaseException"})," (so KeyboardInterrupt isn't caught)."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-base mb-1",children:"2️⃣ Store Context Metadata"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"self.student_id = stu_id"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Save diagnostic values on self during ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"__init__()"})," for automated JSON serialization and logging."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-base mb-1",children:"3️⃣ Root Base Catch-All"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"except DomainBaseError:"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Allows API callers to catch all module-specific errors with a single polymorphically matched except block."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Exception Shadowing Trap"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Python processes ",e.jsx("code",{className:"text-teal-300 font-mono",children:"except"})," blocks top-to-bottom. If you place a broad parent class (like ",e.jsx("code",{className:"text-teal-300 font-mono",children:"except InstituteError:"}),") before a specific child class (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"except QuotaFullError:"}),"), the parent catches everything and the child block becomes ",e.jsx("strong",{children:"unreachable dead code"}),"! Always order from ",e.jsx("em",{children:"most specific to most general"}),"!"]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Custom Exception Trees & Payloads"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>u("tree"),className:x("px-3 py-1.5 rounded-lg transition-all",d==="tree"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Domain Hierarchy Tree"}),e.jsx("button",{onClick:()=>u("payload"),className:x("px-3 py-1.5 rounded-lg transition-all",d==="payload"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Forensic Payload Architecture"}),e.jsx("button",{onClick:()=>u("dispatch"),className:x("px-3 py-1.5 rounded-lg transition-all",d==="dispatch"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Hierarchical Dispatch Ordering"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining domain inheritance trees, structured forensic payloads, and multi-tiered catch dispatch:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:d==="tree"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"INSTITUTIONAL DOMAIN EXCEPTION HIERARCHY TREE"}),e.jsxs("g",{transform:"translate(320, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"240",height:"40",rx:"6",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"50",y:"25",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"builtins.Exception"})]}),e.jsx("line",{x1:"440",y1:"90",x2:"440",y2:"120",stroke:"#8b5cf6",strokeWidth:"2"}),e.jsxs("g",{transform:"translate(280, 120)",children:[e.jsx("rect",{x:"0",y:"0",width:"320",height:"45",rx:"6",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"25",y:"28",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"CoderAccoTaxInstituteError (Root Base)"})]}),e.jsx("line",{x1:"440",y1:"165",x2:"160",y2:"210",stroke:"#14b8a6",strokeWidth:"2"}),e.jsx("line",{x1:"440",y1:"165",x2:"440",y2:"210",stroke:"#14b8a6",strokeWidth:"2"}),e.jsx("line",{x1:"440",y1:"165",x2:"720",y2:"210",stroke:"#14b8a6",strokeWidth:"2"}),e.jsxs("g",{transform:"translate(40, 210)",children:[e.jsx("rect",{x:"0",y:"0",width:"240",height:"90",rx:"6",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"15",y:"25",fill:"#a5f3fc",fontSize:"11",fontWeight:"bold",children:"DuplicateStudentRecordError"}),e.jsx("text",{x:"15",y:"50",fill:"#cbd5e1",fontSize:"9",children:"• student_id"}),e.jsx("text",{x:"15",y:"70",fill:"#cbd5e1",fontSize:"9",children:"• existing_course"})]}),e.jsxs("g",{transform:"translate(320, 210)",children:[e.jsx("rect",{x:"0",y:"0",width:"240",height:"90",rx:"6",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"15",y:"25",fill:"#fda4af",fontSize:"11",fontWeight:"bold",children:"CourseCapacityExceededError"}),e.jsx("text",{x:"15",y:"50",fill:"#cbd5e1",fontSize:"9",children:"• max_capacity"}),e.jsx("text",{x:"15",y:"70",fill:"#cbd5e1",fontSize:"9",children:"• waitlist_position"})]}),e.jsxs("g",{transform:"translate(600, 210)",children:[e.jsx("rect",{x:"0",y:"0",width:"240",height:"90",rx:"6",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"15",y:"25",fill:"#a7f3d0",fontSize:"11",fontWeight:"bold",children:"TuitionSchemeViolationError"}),e.jsx("text",{x:"15",y:"50",fill:"#cbd5e1",fontSize:"9",children:"• min_required_fee"}),e.jsx("text",{x:"15",y:"70",fill:"#cbd5e1",fontSize:"9",children:"• fee_shortfall"})]})]}):d==="payload"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"CUSTOM EXCEPTION OBJECT WITH RICH FORENSIC ATTRIBUTES"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"Class Definition with Custom Attributes"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"class TuitionDeficitError(Exception):"}),e.jsx("text",{x:"35",y:"80",fill:"#ecfdf5",fontSize:"9 font-mono",children:"def __init__(self, stu_id, req, avail):"}),e.jsx("text",{x:"50",y:"100",fill:"#34d399",fontSize:"9 font-mono",children:"self.student_id = stu_id"}),e.jsx("text",{x:"50",y:"120",fill:"#34d399",fontSize:"9 font-mono",children:"self.deficit = req - avail"}),e.jsxs("text",{x:"50",y:"140",fill:"#38bdf8",fontSize:"9 font-mono",children:['super().__init__(f"Shortfall: ',self.deficit,'")']}),e.jsx("rect",{x:"20",y:"170",width:"340",height:"50",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"30",y:"195",fill:"#c4b5fd",fontSize:"8 font-mono",children:"Preserves str(err) while retaining programmatic attributes!"})]}),e.jsx("g",{transform:"translate(430, 140)",children:e.jsx("text",{x:"10",y:"20",fill:"#38bdf8",fontSize:"26",fontWeight:"bold",children:"→"})}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"Serialized REST API JSON Payload"}),e.jsx("rect",{x:"20",y:"55",width:"340",height:"165",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"80",fill:"#34d399",fontSize:"9 font-mono",children:"{"}),e.jsx("text",{x:"45",y:"100",fill:"#ecfdf5",fontSize:"9 font-mono",children:'"error_code": "TUITION_DEFICIT",'}),e.jsx("text",{x:"45",y:"120",fill:"#ecfdf5",fontSize:"9 font-mono",children:'"student_id": "STU-103",'}),e.jsx("text",{x:"45",y:"140",fill:"#ecfdf5",fontSize:"9 font-mono",children:'"deficit_inr": 3000.00,'}),e.jsx("text",{x:"45",y:"160",fill:"#ecfdf5",fontSize:"9 font-mono",children:'"timestamp": "2026-08-24 22:33:00"'}),e.jsx("text",{x:"30",y:"180",fill:"#34d399",fontSize:"9 font-mono",children:"}"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"SPECIFIC-TO-GENERAL HIERARCHICAL DISPATCH ORDERING"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"15",y:"30",fill:"#a5f3fc",fontSize:"11",fontWeight:"bold",children:"1. Leaf Subclass (1st)"}),e.jsx("text",{x:"15",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"except QuotaFullError:"}),e.jsx("text",{x:"30",y:"85",fill:"#34d399",fontSize:"9 font-mono",children:"add_to_waitlist()"}),e.jsx("rect",{x:"15",y:"120",width:"220",height:"95",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"25",y:"145",fill:"#38bdf8",fontSize:"9 font-bold",children:"Targeted Recovery:"}),e.jsx("text",{x:"25",y:"165",fill:"#cbd5e1",fontSize:"8",children:"Executes specialized domain logic"}),e.jsx("text",{x:"25",y:"180",fill:"#cbd5e1",fontSize:"8",children:"for waitlist allocation."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"310",y:"30",fill:"#99f6e4",fontSize:"11",fontWeight:"bold",children:"2. Subsystem Base (2nd)"}),e.jsx("text",{x:"310",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"except AdmissionError:"}),e.jsx("text",{x:"325",y:"85",fill:"#34d399",fontSize:"9 font-mono",children:"show_admission_alert()"}),e.jsx("rect",{x:"310",y:"120",width:"220",height:"95",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"320",y:"145",fill:"#34d399",fontSize:"9 font-bold",children:"Subsystem Catch-All:"}),e.jsx("text",{x:"320",y:"165",fill:"#cbd5e1",fontSize:"8",children:"Catches other unhandled"}),e.jsx("text",{x:"320",y:"180",fill:"#cbd5e1",fontSize:"8",children:"admission failures."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"605",y:"30",fill:"#c4b5fd",fontSize:"11",fontWeight:"bold",children:"3. Root Base (Last)"}),e.jsx("text",{x:"605",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"except InstituteError:"}),e.jsx("text",{x:"620",y:"85",fill:"#34d399",fontSize:"9 font-mono",children:"log_system_failure()"}),e.jsx("rect",{x:"605",y:"120",width:"200",height:"95",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"615",y:"145",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Top-Level Safety Net:"}),e.jsx("text",{x:"615",y:"165",fill:"#cbd5e1",fontSize:"8",children:"Prevents application crashes"}),e.jsx("text",{x:"615",y:"180",fill:"#cbd5e1",fontSize:"8",children:"from any module bug."})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Admission Suite & Custom Exception Inspector"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Submit admission records to trigger distinct custom exception classes with live structured JSON payloads:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold block",children:"Applicant Admission Entry"}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"text-xs font-mono text-slate-400 block",children:"Student ID (STU-101 and STU-102 already exist):"}),e.jsx("input",{type:"text",value:i,onChange:t=>b(t.target.value),className:"w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs font-mono text-white focus:border-teal-500 focus:outline-none",placeholder:"e.g. STU-103"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"text-xs font-mono text-slate-400 block",children:"Student Full Name:"}),e.jsx("input",{type:"text",value:h,onChange:t=>_(t.target.value),className:"w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs font-mono text-white focus:border-teal-500 focus:outline-none",placeholder:"e.g. Rahul Verma"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"text-xs font-mono text-slate-400 block",children:"Target Course:"}),e.jsxs("select",{value:a,onChange:t=>g(t.target.value),className:"w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs font-mono text-teal-300 focus:border-teal-500 focus:outline-none",children:[e.jsx("option",{value:"PY-ADV",children:"PY-ADV (Min Fee: INR 5,000 | Max Seats: 2 - Already Full!)"}),e.jsx("option",{value:"DATA-ENG",children:"DATA-ENG (Min Fee: INR 8,000 | Max Seats: 2)"}),e.jsx("option",{value:"AI-ML",children:"AI-ML (Min Fee: INR 10,000 | Max Seats: 1 - Full!)"})]})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[e.jsx("span",{className:"text-slate-400",children:"Initial Deposit Paid:"}),e.jsxs("span",{className:"text-teal-300 font-bold",children:["INR ",o.toLocaleString()]})]}),e.jsx("input",{type:"range",min:"1000",max:"15000",step:"1000",value:o,onChange:t=>E(Number(t.target.value)),className:"w-full accent-teal-500"})]}),e.jsx("button",{onClick:N,className:"w-full py-2.5 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-lg text-xs font-mono transition-all shadow-lg shadow-teal-950/50",children:"Submit Admission Application (process_admission())"})]}),e.jsxs("div",{className:"space-y-3 flex flex-col justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block font-bold",children:"Custom Exception & Payload Inspector"}),e.jsxs("div",{className:x("p-4 rounded-xl border flex-1 space-y-2.5 text-xs font-mono",l.status==="ERROR"?"bg-rose-950/40 border-rose-800":"bg-slate-900 border-slate-800"),children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-slate-400",children:"Status: "}),e.jsx("span",{className:x("font-bold",l.status==="ERROR"?"text-rose-400":"text-emerald-400"),children:l.status==="ERROR"?`❌ ${l.exceptionClass}`:"✓ ADMISSION CONFIRMED"})]}),e.jsx("div",{className:"pt-2 border-t border-slate-800 text-slate-300 leading-relaxed",children:l.message}),l.payload&&e.jsxs("div",{className:"pt-2 border-t border-slate-800",children:[e.jsx("span",{className:"text-slate-400 block mb-1 text-[11px]",children:"Structured Forensic API Payload:"}),e.jsx("pre",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 text-teal-300 text-[10px] overflow-x-auto",children:JSON.stringify(l.payload,null,2)})]})]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Custom Exception Class Design Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Pattern / Element"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Python Code Template"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Inherits From"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Architectural Benefit"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"Root Domain Base"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"class LibraryError(Exception): pass"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-mono",children:"builtins.Exception"}),e.jsx("td",{className:"py-3 px-4",children:"Single catch-all clause for entire package"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"Stateful Payload Error"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"def __init__(self, id, code): ..."}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300",children:"LibraryError"}),e.jsx("td",{className:"py-3 px-4",children:"Carries forensic metadata for API JSON serialization"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Specialized Value Subtype"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"class InvalidPANError(ValueError):"}),e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300",children:"builtins.ValueError"}),e.jsx("td",{className:"py-3 px-4",children:"Allows legacy code expecting ValueError to catch it"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"Hierarchical Ordering"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"except Child: ... except Base: ..."}),e.jsx("td",{className:"py-3 px-4",children:"N/A"}),e.jsx("td",{className:"py-3 px-4",children:"Prevents shadow traps and unreachable dead except blocks"})]})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating custom exception hierarchies, contextual metadata payloads, hierarchical dispatch, and admission validation suites:"}),e.jsx(A,{files:[{filename:"custom_exception_hierarchy_fundamentals.py",code:I,description:"Root domain base exception pattern, subclassing Exception, and polymorphic catching."},{filename:"custom_exceptions_with_attributes.py",code:T,description:"Custom exceptions with stateful attributes, deficit calculations, and REST API JSON payloads."},{filename:"multi_tiered_domain_exception_handling.py",code:v,description:"Hierarchical exception dispatch from most specific to most general to prevent shadowing traps."},{filename:"institutional_admission_validation_suite.py",code:R,description:"Enterprise Institutional Student Admission Suite with duplicate, quota, and fee exception classes."}]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Subclassing BaseException"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"class MyError(BaseException):"})," bypasses normal ",e.jsx("code",{className:"text-rose-300 font-mono",children:"except Exception:"})," handlers and can cause dangerous catch-all blocks that intercept ",e.jsx("code",{className:"text-rose-300 font-mono",children:"KeyboardInterrupt"})," (Ctrl+C)."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always inherit from ",e.jsx("code",{className:"text-emerald-300",children:"builtins.Exception"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Shadowing Specific Child Classes"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Placing ",e.jsx("code",{className:"text-amber-300 font-mono",children:"except BaseError:"})," before ",e.jsx("code",{className:"text-amber-300 font-mono",children:"except SpecificError:"})," causes the base block to catch everything, leaving the child block as unreachable dead code."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Order except clauses from most specific to most general."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Forgetting `super().__init__()`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Overriding ",e.jsx("code",{className:"text-purple-300 font-mono",children:"__init__()"})," without calling ",e.jsx("code",{className:"text-purple-300 font-mono",children:"super().__init__(message)"})," breaks ",e.jsx("code",{className:"text-purple-300 font-mono",children:"str(err)"})," and standard traceback formatting."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always pass formatted message to ",e.jsx("code",{className:"text-emerald-300",children:"super().__init__()"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Proliferation of Redundant Classes"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Creating separate custom classes for simple standard errors (e.g. ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"NegativeAgeError"}),") when ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"ValueError"})," is universally understood."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Create custom classes only when domain logic requires specific handling or payload data."]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering user-defined custom exceptions, forensic payloads, and exception dispatch:"}),e.jsx(w,{questions:P})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with custom exception hierarchies, payload templates, and ordering blueprints:"}),e.jsx("div",{className:"mb-10",children:e.jsx(j,{content:D,filename:"python_topic8_custom_exception_classes_notes.txt",title:"Print Topic 8 Study Notes"})}),e.jsx(C,{})]})]})]})}export{B as default};
