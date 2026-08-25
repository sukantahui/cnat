import{b as s,j as e,bg as i}from"./vendor-react-core-Doz9nIC6.js";import{P as E}from"./PythonFileLoader-hCi5osN-.js";import{P as w}from"./PlainTextPrint-C08xhKA4.js";import{F as N}from"./FAQTemplate-CkSqDH4B.js";import{T as v}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const j=`# topic7_files/raising_exceptions_fundamentals.py\r
# Module: 003_002_basic-exception-handling\r
# Topic: Raising exceptions intentionally using raise keyword\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 7 - File 1: Raising Exceptions Intentionally (\`raise\` statement)\r
Demonstrates:\r
  1. Syntax and semantics of the \`raise\` keyword\r
  2. Raising exceptions with descriptive error messages\r
  3. Precondition enforcement: Validating function inputs fail-fast\r
"""\r
\r
def enroll_student(full_name: str, age: int, initial_fee_inr: float):\r
    """Enforces institutional enrollment invariants using \`raise\`."""\r
    # 1. Type Validation Guard\r
    if not isinstance(full_name, str) or not full_name.strip():\r
        raise TypeError(f"Student name must be a non-empty string, got {type(full_name).__name__}!")\r
\r
    # 2. Age Constraint Guard\r
    if not isinstance(age, int):\r
        raise TypeError(f"Age must be an integer, got {type(age).__name__}!")\r
    if not (14 <= age <= 80):\r
        raise ValueError(f"Student age {age} is outside eligible institutional criteria (14 - 80 years)!")\r
\r
    # 3. Financial Invariant Guard\r
    if initial_fee_inr < 0:\r
        raise ValueError(f"Initial fee cannot be negative: INR {initial_fee_inr:,.2f}")\r
\r
    print(f"  [ENROLLMENT SUCCESSFUL] Student: {full_name.strip()} (Age: {age}) | Fee: INR {initial_fee_inr:,.2f}")\r
\r
\r
def demonstrate_raising_fundamentals():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - RAISING EXCEPTIONS FUNDAMENTALS")\r
    print("=" * 70)\r
\r
    # 1. Valid Enrollment\r
    print("1. Valid Student Enrollment:")\r
    enroll_student("Sourav Mukherjee", 21, 18000.0)\r
\r
    # 2. Triggering Type Guard\r
    print("\\n2. Triggering Type Guard (Passing empty name):")\r
    try:\r
        enroll_student("", 22, 18000.0)\r
    except TypeError as err:\r
        print(f"   [CAUGHT] TypeError: {err}")\r
\r
    # 3. Triggering Age Constraint Guard\r
    print("\\n3. Triggering Age Guard (Passing age 10):")\r
    try:\r
        enroll_student("Arijit Roy", 10, 18000.0)\r
    except ValueError as err:\r
        print(f"   [CAUGHT] ValueError: {err}")\r
\r
    # 4. Triggering Financial Invariant Guard\r
    print("\\n4. Triggering Fee Guard (Passing negative fee):")\r
    try:\r
        enroll_student("Priyanka Sen", 24, -5000.0)\r
    except ValueError as err:\r
        print(f"   [CAUGHT] ValueError: {err}")\r
\r
    print("\\n[PASSED] Raising Exceptions Fundamentals Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_raising_fundamentals()\r
`,_=`# topic7_files/re_raising_active_exceptions.py\r
# Module: 003_002_basic-exception-handling\r
# Topic: Raising exceptions intentionally using raise keyword\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 7 - File 2: Re-Raising Active Exceptions (Bare \`raise\` statement)\r
Demonstrates:\r
  1. The bare \`raise\` syntax inside an \`except\` block\r
  2. Preserving the exact original traceback during error re-raising\r
  3. The "Log, Cleanup & Re-raise" production middleware pattern\r
"""\r
\r
import datetime as dt\r
\r
def audit_log_error(action_name: str, error_instance: Exception):\r
    timestamp = dt.datetime.now().strftime("%Y-%m-%d %H:%M:%S")\r
    print(f"  [SYSTEM AUDIT LOG] [{timestamp}] Failed Action '{action_name}': {type(error_instance).__name__}: {error_instance}")\r
\r
\r
def execute_database_transaction(account_id: str, amount_inr: float):\r
    """Simulates a database transaction with audit logging and re-raising."""\r
    try:\r
        if amount_inr > 50000.0:\r
            raise PermissionError(f"Transaction of INR {amount_inr:,.2f} exceeds single API withdrawal limit (INR 50,000.00)!")\r
        print(f"  [DB COMMIT] Successfully transferred INR {amount_inr:,.2f} to {account_id}")\r
    except PermissionError as err:\r
        # Step 1: Log forensic audit trail locally\r
        audit_log_error("execute_database_transaction", err)\r
        # Step 2: Clean up connection / rollback state\r
        print("  [ROLLBACK] Rolled back transaction state to maintain database consistency.")\r
        # Step 3: Re-raise original exception up the call stack!\r
        raise\r
\r
\r
def run_caller_service():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - BARE \`raise\` RE-RAISING PATTERN")\r
    print("=" * 70)\r
\r
    # 1. Successful Transaction\r
    print("1. Executing Normal Transaction (INR 12,000):")\r
    execute_database_transaction("ACC-101", 12000.0)\r
\r
    # 2. Triggering Guard & Re-raising Exception\r
    print("\\n2. Executing Over-Limit Transaction (INR 75,000):")\r
    try:\r
        execute_database_transaction("ACC-101", 75000.0)\r
    except PermissionError as err:\r
        print(f"\\n[CALLER SERVICE CAUGHT RE-RAISED ERROR] Client Alert: {err}")\r
\r
    print(r"""\r
Key Takeaway:\r
  A bare \`raise\` statement inside an \`except\` block re-raises the active exception\r
  without altering its original traceback. This allows intermediate layers to log\r
  or cleanup without masking errors from the top-level caller!\r
""")\r
    print("[PASSED] Re-raising Active Exceptions Demonstrated Successfully.")\r
\r
\r
if __name__ == "__main__":\r
    run_caller_service()\r
`,S=`# topic7_files/conditional_validation_guards.py\r
# Module: 003_002_basic-exception-handling\r
# Topic: Raising exceptions intentionally using raise keyword\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 7 - File 3: Exceptions vs Error Codes & Fail-Fast Guards\r
Demonstrates:\r
  1. The Danger of Returning Error Codes (\`return None\` or \`return -1\`)\r
  2. The Pythonic Fail-Fast Principle using \`raise\`\r
  3. Composing multi-tiered input validation guards\r
"""\r
\r
import re\r
from typing import Dict, Any\r
\r
# =====================================================================\r
# 1. THE FLAWED APPROACH: RETURNING ERROR CODES (Silent Bug Hazard!)\r
# =====================================================================\r
def flawed_calculate_tax_return_code(salary: float) -> float:\r
    """Flawed: Returns -1 on error. Caller might forget to check and use -1 in calculations!"""\r
    if salary < 0:\r
        return -1.0  # Flawed error code!\r
    return salary * 0.15\r
\r
\r
# =====================================================================\r
# 2. THE PYTHONIC FAIL-FAST APPROACH: RAISING EXCEPTIONS\r
# =====================================================================\r
def pythonic_calculate_tax(salary: float, pan_number: str) -> float:\r
    """Pythonic: Raises descriptive exceptions immediately on invalid data."""\r
    if not isinstance(salary, (int, float)):\r
        raise TypeError(f"Salary must be numeric, got {type(salary).__name__}!")\r
\r
    if salary < 0:\r
        raise ValueError(f"Salary cannot be negative: INR {salary:,.2f}")\r
\r
    if not isinstance(pan_number, str) or not re.match(r"^[A-Z]{5}[0-9]{4}[A-Z]$", pan_number.strip()):\r
        raise ValueError(f"Invalid Indian Income Tax PAN format: '{pan_number}'. Expected 10-char alphanumeric (e.g. ABCDE1234F).")\r
\r
    return salary * 0.15\r
\r
\r
def demonstrate_fail_fast_vs_error_codes():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - EXCEPTIONS VS ERROR CODES (FAIL-FAST)")\r
    print("=" * 70)\r
\r
    # 1. The Flawed Error Code Bug:\r
    print("1. Demonstrating Silent Corruption with Return Codes:")\r
    corrupt_tax = flawed_calculate_tax_return_code(-50000.0)\r
    print(f"   Corrupt Tax Returned: INR {corrupt_tax} (Caller accidentally adds -1 to ledger!)\\n")\r
\r
    # 2. The Pythonic Fail-Fast Exception:\r
    print("2. Demonstrating Pythonic Fail-Fast Protection:")\r
    try:\r
        tax = pythonic_calculate_tax(-50000.0, "ABCDE1234F")\r
    except ValueError as err:\r
        print(f"   [PREVENTED DISASTER] ValueError: {err}\\n")\r
\r
    # 3. PAN Regex Validation Guard:\r
    print("3. Demonstrating Invalid PAN Format Guard:")\r
    try:\r
        tax = pythonic_calculate_tax(75000.0, "INVALID-PAN-99")\r
    except ValueError as err:\r
        print(f"   [PREVENTED DISASTER] ValueError: {err}")\r
\r
    print("\\n[PASSED] Fail-Fast Exception Guards Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_fail_fast_vs_error_codes()\r
`,R=`# topic7_files/student_banking_withdrawal_guard.py\r
# Module: 003_002_basic-exception-handling\r
# Topic: Raising exceptions intentionally using raise keyword\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 7 - File 4: Student Financial Wallet & Defensive Invariant Engine (Case Study)\r
Demonstrates:\r
  1. Production financial ledger invariant guards using \`raise\`\r
  2. Differentiating TypeError, ValueError, and PermissionError based on failure mode\r
  3. Safe atomic transaction handling guaranteeing corrupted states are impossible\r
"""\r
\r
class StudentCampusWallet:\r
    """Enterprise Student Digital Wallet with Defensive Invariant Guards."""\r
    SINGLE_WITHDRAWAL_LIMIT_INR = 5000.0\r
\r
    def __init__(self, student_id: str, student_name: str, initial_balance: float = 0.0):\r
        self.student_id = student_id\r
        self.student_name = student_name\r
        self.is_active = True\r
\r
        if initial_balance < 0:\r
            raise ValueError(f"Initial wallet balance cannot be negative: INR {initial_balance:,.2f}")\r
        self._balance = float(initial_balance)\r
\r
    @property\r
    def balance(self) -> float:\r
        return self._balance\r
\r
    def deposit(self, amount: float):\r
        """Guarded deposit method."""\r
        if not isinstance(amount, (int, float)):\r
            raise TypeError(f"Deposit amount must be numeric, got {type(amount).__name__}!")\r
        if amount <= 0:\r
            raise ValueError(f"Deposit amount must be strictly positive: INR {amount:,.2f}")\r
\r
        self._balance += float(amount)\r
        print(f"  [DEPOSIT SUCCESS] +INR {amount:,.2f} | New Balance: INR {self._balance:,.2f}")\r
\r
    def withdraw(self, amount: float) -> float:\r
        """Guarded withdrawal method enforcing institutional safety constraints."""\r
        if not self.is_active:\r
            raise PermissionError(f"Wallet for {self.student_name} ({self.student_id}) is FROZEN by administration!")\r
\r
        if not isinstance(amount, (int, float)):\r
            raise TypeError(f"Withdrawal amount must be numeric, got {type(amount).__name__}!")\r
\r
        if amount <= 0:\r
            raise ValueError(f"Withdrawal amount must be strictly positive: INR {amount:,.2f}")\r
\r
        if amount > self.SINGLE_WITHDRAWAL_LIMIT_INR:\r
            raise ValueError(f"Withdrawal of INR {amount:,.2f} exceeds single transaction limit of INR {self.SINGLE_WITHDRAWAL_LIMIT_INR:,.2f}!")\r
\r
        if amount > self._balance:\r
            raise ValueError(f"Insufficient Funds: Requested INR {amount:,.2f}, Available: INR {self._balance:,.2f}!")\r
\r
        self._balance -= float(amount)\r
        print(f"  [WITHDRAWAL SUCCESS] -INR {amount:,.2f} | Remaining Balance: INR {self._balance:,.2f}")\r
        return self._balance\r
\r
\r
def run_wallet_case_study():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - STUDENT WALLET INVARIANT ENGINE")\r
    print("=" * 70)\r
\r
    wallet = StudentCampusWallet("STU-882", "Debanjan Roy", initial_balance=10000.0)\r
    print(f"Initialized Wallet for {wallet.student_name} with INR {wallet.balance:,.2f}\\n")\r
\r
    # 1. Normal Withdrawal\r
    print("1. Executing Valid Withdrawal (INR 2,500.00):")\r
    wallet.withdraw(2500.0)\r
\r
    # 2. Exceeding Single Limit\r
    print("\\n2. Attempting to withdraw INR 7,000 (Exceeds Single TX Cap):")\r
    try:\r
        wallet.withdraw(7000.0)\r
    except ValueError as err:\r
        print(f"   [BLOCKED] ValueError: {err}")\r
\r
    # 3. Insufficient Funds (Within single limit 5,000, but exceeds remaining balance 2,500)\r
    print("\\n3. Attempting to withdraw INR 4,000 after multiple transactions:")\r
    wallet.withdraw(3000.0) # Balance becomes 4500\r
    wallet.withdraw(3000.0) # Balance becomes 1500\r
    try:\r
        wallet.withdraw(3000.0) # 3000 <= 5000 limit, but > 1500 balance!\r
    except ValueError as err:\r
        print(f"   [BLOCKED] ValueError: {err}")\r
\r
    # 4. Account Frozen Permission Error\r
    print("\\n4. Freezing Wallet and attempting withdrawal:")\r
    wallet.is_active = False\r
    try:\r
        wallet.withdraw(500.0)\r
    except PermissionError as err:\r
        print(f"   [BLOCKED] PermissionError: {err}")\r
\r
    print(f"\\nFinal Verified Wallet Balance: INR {wallet.balance:,.2f}")\r
    print("[PASSED] Student Wallet Invariant Case Study Completed Successfully.")\r
\r
\r
if __name__ == "__main__":\r
    run_wallet_case_study()\r
`,I=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_002: EXCEPTION HANDLING\r
            TOPIC 7: RAISING EXCEPTIONS INTENTIONALLY WITH \`raise\`\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. SYNTAX OF THE \`raise\` STATEMENT\r
--------------------------------------------------------------------------------\r
  # Preferred syntax with descriptive message:\r
  raise ValueError("Withdrawal amount cannot be negative!")\r
\r
  # Raising existing exception instance:\r
  err = TypeError("Expected integer")\r
  raise err\r
\r
--------------------------------------------------------------------------------\r
2. RE-RAISING ACTIVE EXCEPTIONS (BARE \`raise\`)\r
--------------------------------------------------------------------------------\r
  try:\r
      execute_database_commit()\r
  except DatabaseError as e:\r
      log_error_to_file(e)\r
      rollback_transaction()\r
      raise  # Re-raises the active exception preserving original traceback!\r
\r
--------------------------------------------------------------------------------\r
3. FAIL-FAST VS ERROR CODES\r
--------------------------------------------------------------------------------\r
  ❌ BAD (Return Code):\r
      if amount < 0: return -1  # Caller forgets to check and corrupts DB!\r
\r
  ✓ GOOD (Fail-Fast Exception):\r
      if amount < 0: raise ValueError("Amount must be positive")\r
\r
================================================================================\r
         END OF STUDY NOTE • TOPIC 7: RAISING EXCEPTIONS WITH \`raise\`\r
================================================================================\r
`,T=[{question:"What is the purpose of the 'raise' keyword in Python?",shortAnswer:"To intentionally trigger and propagate an exception at a specific point in code when an error condition or invariant violation occurs.",explanation:"Halts normal execution and transfers control to the nearest matching except handler.",hint:"Keyword used to intentionally trigger and throw an exception.",level:"basic",codeExample:`if age < 0:
    raise ValueError('Age cannot be negative!')`},{question:`What is the difference between 'raise ValueError("message")' and 'raise ValueError'?`,shortAnswer:`'raise ValueError("message")' instantiates the exception with a descriptive error message; 'raise ValueError' instantiates the class with no arguments (equivalent to 'raise ValueError()').`,explanation:"Always provide descriptive error messages in production code.",hint:"Passing a string provides a descriptive message for logs and tracebacks.",level:"basic",codeExample:`# Best practice:
raise ValueError('Invalid PAN card format: must be 10 characters')`},{question:"What does a bare 'raise' statement do when executed inside an 'except' block?",shortAnswer:"It re-raises the currently active exception that was caught, preserving the exact original traceback without resetting line numbers.",explanation:"Crucial for intermediate layers that need to log or clean up before propagating the error.",hint:"Re-raises the active exception preserving the original traceback.",level:"basic",codeExample:`except DatabaseError as e:
    logger.error(e)
    rollback()
    raise`},{question:"What happens if you execute a bare 'raise' statement outside of any active 'except' handler?",shortAnswer:"Python raises a 'RuntimeError: No active exception to reraise'.",explanation:"Because Python has no active exception context to re-throw.",hint:"Raises RuntimeError: No active exception to reraise.",level:"moderate",codeExample:"# RuntimeError if executed outside an except block"},{question:"Why is raising exceptions considered far superior to returning error codes (e.g. 'return -1' or 'return None')?",shortAnswer:"Because error codes are easily ignored by calling code, leading to silent data corruption; exceptions cannot be ignored and enforce fail-fast application integrity.",explanation:"A core principle of robust software engineering.",hint:"Exceptions cannot be silently ignored and prevent downstream data corruption.",level:"basic",codeExample:`# Bad: return -1
# Good: raise ValueError('Invalid input')`},{question:`What error occurs if you attempt to raise an object that does NOT inherit from 'BaseException' (e.g. 'raise "error string"')?`,shortAnswer:"Python raises 'TypeError: exceptions must derive from BaseException' (in Python 3, string exceptions are illegal).",explanation:"All raised objects must be subclasses or instances of BaseException.",hint:"Raises TypeError: exceptions must derive from BaseException.",level:"moderate",codeExample:"# TypeError: raise 'Fatal Error' -> Invalid in Python 3!"},{question:"When should you raise a 'TypeError' vs a 'ValueError'?",shortAnswer:"Raise 'TypeError' when an argument receives an unexpected data type (e.g., string instead of int); raise 'ValueError' when the data type is correct but the value is invalid or out of range (e.g., negative age).",explanation:"Standard PEP 8 guideline for standard exception semantics.",hint:"TypeError = wrong type; ValueError = right type, invalid value.",level:"basic",codeExample:`# TypeError: not isinstance(x, int)
# ValueError: x < 0`},{question:"What is the 'Fail-Fast' principle in software engineering?",shortAnswer:"The design practice of checking preconditions and immediately raising exceptions at the earliest point of failure, rather than continuing execution with corrupted data.",explanation:"Pinpoints the exact origin of bugs and prevents cascading failures.",hint:"Validate inputs immediately and fail before executing further operations.",level:"basic",codeExample:`def transfer(amount):
    if amount <= 0: raise ValueError  # Fail fast!`},{question:"Can you raise an exception inside a 'finally' block?",shortAnswer:"Yes, but doing so will permanently suppress and discard any previous active exception that was being handled, replacing it with the new exception.",explanation:"Exercise caution when executing risky operations in finally blocks.",hint:"Yes, but it overwrites and suppresses any earlier active exception.",level:"complex",codeExample:`finally:
    raise CleanupError  # Overwrites earlier exceptions`},{question:"How does 'raise' interact with 'try...except...else' blocks?",shortAnswer:"If a 'raise' occurs inside the 'try' block, the 'else' block is completely skipped, and execution jumps directly to matching 'except' blocks.",explanation:"'else' executes only when the 'try' block completes without raising any exceptions.",hint:"Raising an exception skips the 'else' block immediately.",level:"basic",codeExample:`try: raise ValueError
else: print('Never executed')`},{question:"What is the 'Log, Cleanup & Re-Raise' middleware pattern?",shortAnswer:"A pattern where intermediate middleware catches an exception, records a forensic audit log, rolls back transactions or releases locks, and calls bare 'raise' to pass the error to upstream callers.",explanation:"Standard pattern in enterprise web frameworks and database drivers.",hint:"Catch -> Log -> Rollback -> bare raise.",level:"moderate",codeExample:`except Exception as e:
    log(e); rollback(); raise`},{question:"Can an exception object be assigned to a variable before raising it?",shortAnswer:`Yes: 'err = ValueError("bad value"); raise err' is completely valid and functionally identical to inline raising.`,explanation:"Useful when building dynamic exception objects with custom metadata.",hint:"Yes, exception instances can be assigned to variables before raising.",level:"basic",codeExample:"err = ValueError('Timeout'); raise err"},{question:"What is the danger of catching an exception and silently doing 'pass' instead of handling or re-raising it?",shortAnswer:"It creates a 'Silent Failure' bug, hiding crashes, masking corrupt state, and making root-cause diagnosis nearly impossible.",explanation:"The infamous 'silent except' anti-pattern.",hint:"Masks errors, hides bugs, and causes silent state corruption.",level:"basic",codeExample:`# Anti-pattern:
except Exception: pass`},{question:"When should you raise a 'PermissionError'?",shortAnswer:"When an operation is attempted by a user or process that lacks required authorization, credentials, or filesystem access rights.",explanation:"Built-in exception inheriting from OSError.",hint:"For authorization, access control, and credential failures.",level:"basic",codeExample:`if not user.is_admin:
    raise PermissionError('Admin privilege required!')`},{question:"When should you raise a 'NotImplementedError'?",shortAnswer:"In abstract base methods or interface stubs to indicate that a derived subclass has not yet provided the mandatory implementation.",explanation:"Signals that a concrete implementation is required.",hint:"Indicates that an abstract method has not been implemented by a subclass.",level:"basic",codeExample:`def calculate_tax(self):
    raise NotImplementedError('Subclasses must implement calculate_tax!')`},{question:"What is the difference between 'raise NotImplementedError' and 'return NotImplemented'?",shortAnswer:"'raise NotImplementedError' is an exception indicating an unfinished method; 'return NotImplemented' is a special singleton used in magic operator methods (__add__) to prompt Python to try reflected operators.",explanation:"Never raise NotImplemented (which is not an exception class).",hint:"NotImplementedError is an exception; NotImplemented is a return singleton for operators.",level:"complex",codeExample:`# Magic methods: return NotImplemented
# Abstract stubs: raise NotImplementedError`},{question:"Can you pass multiple arguments to an exception constructor when raising it?",shortAnswer:"Yes. All arguments passed to 'raise MyException(arg1, arg2)' are stored as a tuple in the exception's 'args' attribute ('err.args').",explanation:"Allows passing structured diagnostic metadata.",hint:"Yes, arguments are stored in the exception's .args tuple.",level:"moderate",codeExample:"raise CustomError('Invalid Code', 404, {'user': 'Sourav'})"},{question:"How does raising an exception inside a generator or coroutine behave?",shortAnswer:"It immediately terminates generator iteration, propagating the exception to the caller (or triggering 'StopIteration' if unhandled).",explanation:"You can also inject exceptions into generators using 'gen.throw(Exception)'.",hint:"Terminates generator iteration and propagates the error to the caller.",level:"complex",codeExample:`def my_gen():
    raise ValueError('Aborted'); yield 1`},{question:"Can you catch an exception, modify its message or attributes, and re-raise it?",shortAnswer:"Yes. You can mutate 'err.args' or attach custom attributes (e.g. 'err.failed_at = time.time()') before calling bare 'raise'.",explanation:"Enriches error context without losing original traceback.",hint:"Yes, attach attributes to the exception instance before calling bare raise.",level:"moderate",codeExample:`except ValueError as e:
    e.extra_info = 42
    raise`},{question:"Why should error messages in 'raise' statements be specific rather than generic?",shortAnswer:"Because generic messages like 'Invalid input' force engineers to guess what failed, whereas 'Expected age between 14-80, got 10' enables instant diagnosis in production logs.",explanation:"Drastically reduces Mean Time to Resolution (MTTR).",hint:"Specific messages provide immediate diagnostic context in production logs.",level:"basic",codeExample:"raise ValueError(f'Invalid withdrawal INR {amt}: balance is INR {bal}')"},{question:"What is the difference between 'raise' and 'assert'?",shortAnswer:"'raise' is for production error handling and input validation that should always execute; 'assert' is for internal debugging invariants and can be globally disabled with the Python '-O' flag.",explanation:"Topic 10 in this module explores assertions in detail.",hint:"raise is for production validation; assert can be disabled in optimized mode (-O).",level:"moderate",codeExample:`# Production validation: raise ValueError
# Internal debug invariant: assert x > 0`},{question:"Can you raise exceptions inside Python property setters?",shortAnswer:"Yes! Raising ValueError or TypeError inside '@property.setter' methods is the standard Pythonic mechanism for enforcing data validation invariants on attribute assignment.",explanation:"Prevents objects from entering invalid states.",hint:"Yes, standard mechanism for validating attribute assignment.",level:"basic",codeExample:`@price.setter
def price(self, val):
    if val < 0: raise ValueError`},{question:"What happens if an exception is raised inside a constructor ('__init__')?",shortAnswer:"Object initialization is aborted immediately, no reference is returned to the caller, and the half-constructed object is scheduled for garbage collection.",explanation:"Prevents callers from holding references to corrupted objects.",hint:"Aborts initialization and prevents corrupted object creation.",level:"moderate",codeExample:`def __init__(self, val):
    if val < 0: raise ValueError`},{question:"How does raising exceptions help with writing unit tests with 'pytest' or 'unittest'?",shortAnswer:"Testing frameworks can assert that specific invalid inputs correctly raise expected exception types using 'pytest.raises(ValueError)' or 'self.assertRaises()'.",explanation:"Essential for comprehensive test-driven development (TDD).",hint:"Enables testing invalid input scenarios using pytest.raises().",level:"basic",codeExample:`with pytest.raises(ValueError):
    wallet.withdraw(999999)`},{question:"What is the ultimate rule for using the 'raise' statement in Python?",shortAnswer:"Raise standard, specific exceptions (TypeError, ValueError, PermissionError) early to fail-fast on invalid inputs, include rich diagnostic messages, and use bare 'raise' when intermediate logging or cleanup is required.",explanation:"Ensures clean, maintainable, and crash-proof Python applications.",hint:"Fail fast with specific exceptions, write rich messages, and re-raise with bare raise.",level:"basic",codeExample:"# Fail-fast with rich messages: raise ValueError(f'Invalid {arg}')"}];function O(){const x=s.useRef([]),[o,m]=s.useState("pipeline"),[d,p]=s.useState(1e4),[f,g]=s.useState(2500),[c,h]=s.useState(!1),[l,n]=s.useState({type:"SUCCESS",msg:"Wallet initialized with INR 10,000.00. Ready for guarded transactions."});s.useEffect(()=>{const t=new IntersectionObserver(a=>{a.forEach(u=>{u.isIntersecting&&u.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return x.current.forEach(a=>{a&&t.observe(a)}),()=>t.disconnect()},[]);const r=t=>{t&&!x.current.includes(t)&&x.current.push(t)},b=()=>{const t=Number(f);if(c){n({type:"ERROR_PERMISSION",msg:"PermissionError: Wallet for Debanjan Roy is FROZEN by administration!"});return}if(isNaN(t)){n({type:"ERROR_TYPE",msg:"TypeError: Withdrawal amount must be a numeric value!"});return}if(t<=0){n({type:"ERROR_VALUE",msg:`ValueError: Withdrawal amount must be strictly positive: INR ${t.toFixed(2)}`});return}if(t>5e3){n({type:"ERROR_VALUE",msg:`ValueError: Withdrawal of INR ${t.toLocaleString()} exceeds single transaction limit of INR 5,000.00!`});return}if(t>d){n({type:"ERROR_VALUE",msg:`ValueError: Insufficient Funds: Requested INR ${t.toLocaleString()}, Available: INR ${d.toLocaleString()}!`});return}const a=d-t;p(a),n({type:"SUCCESS",msg:`[WITHDRAWAL SUCCESS] Disbursed -INR ${t.toLocaleString()} | Remaining Balance: INR ${a.toLocaleString()}`})},y=()=>{p(1e4),h(!1),n({type:"SUCCESS",msg:"Wallet balance reset to INR 10,000.00."})};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:r,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_002"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 7"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Robust Exception Handling & Defensive Coding"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Raising Exceptions Intentionally with ",e.jsx("code",{className:"text-teal-400 font-mono",children:"raise"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master proactive error signaling and fail-fast programming: triggering exceptions with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"raise"}),", why raising exceptions beats returning error codes, re-raising active errors with bare ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"raise"}),", and enforcing domain invariants."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🚨 Triggering Exceptions with raise"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ Fail-Fast vs Error Code Hazards"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔄 Bare raise Re-Raising & Traceback Preservation"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Financial Invariant Guards"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The `raise` Statement: Proactive Error Triggering"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["In Python, you do not need to wait for a crash to occur. The ",e.jsx("code",{className:"text-teal-300 font-mono",children:"raise"})," statement allows you to proactively halt execution and report invalid states before they corrupt downstream data:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-base mb-1",children:"1️⃣ Inline Exception Raise"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:'raise ValueError("Bad Arg")'}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Instantiates and throws a standard exception with a descriptive error message."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-base mb-1",children:"2️⃣ Bare raise Re-Raise"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"except Error: log(); raise"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Re-throws the currently active exception inside an except block without losing its original traceback."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-base mb-1",children:"3️⃣ Fail-Fast Principle"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"if x < 0: raise ValueError"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Validates function inputs immediately, preventing silent data corruption from return codes."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-rose-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Return Code Trap: Why `return -1` Fails"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Returning ",e.jsx("code",{className:"text-rose-400 font-mono",children:"return -1"})," or ",e.jsx("code",{className:"text-rose-400 font-mono",children:"return None"})," requires every caller to remember to check for errors. If a caller forgets, the ",e.jsx("code",{className:"text-rose-400 font-mono",children:"-1"})," is silently added to accounts or database ledgers, causing catastrophic data corruption. Raising an exception ",e.jsx("em",{children:"cannot be ignored"}),"!"]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Exception Propagation & Bare `raise`"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>m("pipeline"),className:i("px-3 py-1.5 rounded-lg transition-all",o==="pipeline"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"raise Propagation Flow"}),e.jsx("button",{onClick:()=>m("reraise"),className:i("px-3 py-1.5 rounded-lg transition-all",o==="reraise"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Bare raise Logging Pattern"}),e.jsx("button",{onClick:()=>m("failfast"),className:i("px-3 py-1.5 rounded-lg transition-all",o==="failfast"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Fail-Fast vs Return Codes"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining call stack unwinding, traceback preservation, and defensive validation guards:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:o==="pipeline"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"THE `raise` STATEMENT CALL STACK UNWINDING FLOW"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"15",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"1. Main Application Service"}),e.jsx("text",{x:"15",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"try:"}),e.jsx("text",{x:"30",y:"80",fill:"#38bdf8",fontSize:"9 font-mono",children:"enroll_student(age=10)"}),e.jsx("text",{x:"15",y:"110",fill:"#ecfdf5",fontSize:"9 font-mono",children:"except ValueError as err:"}),e.jsx("text",{x:"30",y:"130",fill:"#34d399",fontSize:"9 font-mono",children:"handle_alert(err)"}),e.jsx("rect",{x:"15",y:"160",width:"220",height:"60",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"25",y:"185",fill:"#a7f3d0",fontSize:"9 font-bold",children:"Catches Propagated Error:"}),e.jsx("text",{x:"25",y:"205",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Prompts user to re-enter age!"}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"←"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"310",y:"30",fill:"#a5f3fc",fontSize:"12",fontWeight:"bold",children:"2. enroll_student() Function"}),e.jsx("text",{x:"310",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"def enroll_student(age):"}),e.jsx("text",{x:"325",y:"85",fill:"#fda4af",fontSize:"9 font-mono",children:"if age < 14:"}),e.jsx("text",{x:"340",y:"110",fill:"#f43f5e",fontSize:"9 font-mono font-bold",children:'raise ValueError("Age < 14")'}),e.jsx("rect",{x:"310",y:"150",width:"220",height:"70",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"320",y:"175",fill:"#fca5a5",fontSize:"9 font-bold",children:"Execution Halted Immediately:"}),e.jsx("text",{x:"320",y:"195",fill:"#cbd5e1",fontSize:"8",children:"Unwinds stack to main caller"}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"←"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"605",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"3. Invariant Boundary"}),e.jsx("text",{x:"605",y:"60",fill:"#cbd5e1",fontSize:"9",children:"• Validates age 14-80"}),e.jsx("text",{x:"605",y:"80",fill:"#cbd5e1",fontSize:"9",children:"• Validates non-negative fee"}),e.jsx("text",{x:"605",y:"100",fill:"#cbd5e1",fontSize:"9",children:"• Validates student name"}),e.jsx("rect",{x:"605",y:"140",width:"200",height:"80",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"615",y:"165",fill:"#34d399",fontSize:"10 font-bold",children:"✓ Fail-Fast Guarantee:"}),e.jsx("text",{x:"615",y:"185",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Corrupt data never touches"}),e.jsx("text",{x:"615",y:"200",fill:"#ecfdf5",fontSize:"8 font-mono",children:"the institutional database!"})]})]}):o==="reraise"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"BARE `raise` LOGGING & ROLLBACK PATTERN"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"400",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"Database Middleware Handler"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"try:"}),e.jsx("text",{x:"40",y:"80",fill:"#cbd5e1",fontSize:"9 font-mono",children:"execute_db_transaction(amount)"}),e.jsx("text",{x:"20",y:"105",fill:"#ecfdf5",fontSize:"9 font-mono",children:"except PermissionError as err:"}),e.jsx("text",{x:"40",y:"125",fill:"#38bdf8",fontSize:"9 font-mono",children:"1. audit_log_error(err)  # Forensic Log"}),e.jsx("text",{x:"40",y:"145",fill:"#38bdf8",fontSize:"9 font-mono",children:"2. rollback_db_state()   # Clean state"}),e.jsx("text",{x:"40",y:"170",fill:"#34d399",fontSize:"10 font-mono font-bold",children:"3. raise                 # BARE RAISE!"}),e.jsx("rect",{x:"20",y:"195",width:"360",height:"30",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"30",y:"215",fill:"#a7f3d0",fontSize:"8 font-mono",children:"Preserves line number of original error in execute_db()!"})]}),e.jsx("g",{transform:"translate(445, 140)",children:e.jsx("text",{x:"10",y:"20",fill:"#38bdf8",fontSize:"26",fontWeight:"bold",children:"→"})}),e.jsxs("g",{transform:"translate(490, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"360",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"Top-Level Web / API Gateway"}),e.jsx("rect",{x:"20",y:"60",width:"320",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"85",fill:"#34d399",fontSize:"10 font-bold",children:"Catches Re-Raised Exception:"}),e.jsx("text",{x:"30",y:"105",fill:"#ecfdf5",fontSize:"9 font-mono",children:"Returns HTTP 403 Forbidden"}),e.jsx("text",{x:"30",y:"125",fill:"#ecfdf5",fontSize:"9 font-mono",children:"to mobile application client!"}),e.jsx("text",{x:"20",y:"175",fill:"#cbd5e1",fontSize:"9",children:"• Clean architectural separation"}),e.jsx("text",{x:"20",y:"195",fill:"#cbd5e1",fontSize:"9",children:"• Zero error masking or swallow bugs"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"FAIL-FAST EXCEPTIONS VS RETURNING ERROR CODES"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"❌ Flawed Return Code Approach"}),e.jsx("text",{x:"20",y:"60",fill:"#fca5a5",fontSize:"9 font-mono",children:"def calc_tax(salary):"}),e.jsx("text",{x:"40",y:"80",fill:"#fca5a5",fontSize:"9 font-mono",children:"if salary < 0: return -1.0  # ERROR CODE"}),e.jsx("rect",{x:"20",y:"115",width:"340",height:"100",rx:"4",fill:"#881337",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"140",fill:"#ffe4e6",fontSize:"10 font-bold",children:"Silent Disaster:"}),e.jsx("text",{x:"30",y:"160",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Caller forgets to check for -1:"}),e.jsx("text",{x:"30",y:"180",fill:"#ecfdf5",fontSize:"8 font-mono",children:"total_tax += calc_tax(-50000)  # Adds -1 to ledger!"}),e.jsx("text",{x:"30",y:"200",fill:"#fda4af",fontSize:"8 font-mono",children:"Corrupts financial accounting silently!"})]}),e.jsxs("g",{transform:"translate(460, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"✓ Pythonic Fail-Fast Exception"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"def calc_tax(salary):"}),e.jsx("text",{x:"40",y:"80",fill:"#34d399",fontSize:"9 font-mono",children:'if salary < 0: raise ValueError("Negative!")'}),e.jsx("rect",{x:"20",y:"115",width:"340",height:"100",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"140",fill:"#a7f3d0",fontSize:"10 font-bold",children:"Guaranteed Safety:"}),e.jsx("text",{x:"30",y:"160",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Execution halts at the exact line of bug."}),e.jsx("text",{x:"30",y:"180",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Invalid negative value can NEVER enter ledger!"}),e.jsx("text",{x:"30",y:"200",fill:"#34d399",fontSize:"8 font-mono",children:"Immediate feedback in logs and tracebacks."})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Student Digital Wallet & `raise` Guard Playground"})]}),e.jsxs("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:["Test institutional financial transaction guards protected by ",e.jsx("code",{className:"text-teal-300 font-mono",children:"raise"})," statements:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"Student Financial Account"}),e.jsx("button",{onClick:y,className:"text-[11px] font-mono text-slate-400 hover:text-white underline",children:"Reset Balance"})]}),e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-xs text-slate-400 font-mono",children:"Debanjan Roy (STU-882)"}),e.jsxs("div",{className:"text-xl font-bold text-teal-300 font-mono mt-0.5",children:["INR ",d.toLocaleString("en-IN",{minimumFractionDigits:2})]})]}),e.jsx("span",{className:i("text-xs font-mono px-2 py-1 rounded border",c?"bg-rose-950 text-rose-300 border-rose-700":"bg-emerald-950 text-emerald-300 border-emerald-700"),children:c?"FROZEN":"ACTIVE"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"text-xs font-mono text-slate-400 block",children:"Withdrawal Amount (Max Single Limit: INR 5,000.00):"}),e.jsx("input",{type:"number",value:f,onChange:t=>g(t.target.value),className:"w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-sm font-mono text-white focus:border-teal-500 focus:outline-none",placeholder:"Enter amount..."})]}),e.jsxs("label",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between text-xs font-mono cursor-pointer hover:border-slate-700",children:[e.jsx("span",{className:"text-slate-300",children:"Administrative Account Freeze"}),e.jsx("input",{type:"checkbox",checked:c,onChange:t=>h(t.target.checked),className:"accent-rose-500 w-4 h-4"})]}),e.jsx("button",{onClick:b,className:"w-full py-2.5 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-lg text-xs font-mono transition-all shadow-lg shadow-teal-950/50",children:"Execute Guarded Withdrawal (withdraw())"})]}),e.jsxs("div",{className:"space-y-3 flex flex-col justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block font-bold",children:"Live Defensive Invariant Audit Trace"}),e.jsxs("div",{className:i("p-4 rounded-xl border flex-1 space-y-2.5 text-xs font-mono",l.type==="SUCCESS"?"bg-slate-900 border-slate-800":"bg-rose-950/40 border-rose-800"),children:[e.jsxs("div",{className:"text-slate-400",children:["Transaction Status:"," ",e.jsx("span",{className:i("font-bold",l.type==="SUCCESS"?"text-emerald-400":"text-rose-400"),children:l.type==="SUCCESS"?"✓ APPROVED (200 OK)":"❌ BLOCKED BY `raise`"})]}),e.jsxs("div",{className:"pt-2 border-t border-slate-800",children:[e.jsx("span",{className:"text-slate-400 block mb-1",children:"Execution Feedback:"}),e.jsx("div",{className:i("p-3 rounded-lg border leading-relaxed",l.type==="SUCCESS"?"bg-emerald-950/40 border-emerald-800 text-emerald-300":"bg-slate-950 border-rose-900 text-rose-300"),children:l.msg})]}),e.jsx("div",{className:"pt-2 border-t border-slate-800 text-[10px] text-slate-500",children:"Invariants enforced: Non-zero positive, single limit INR 5k, balance check, authorization status."})]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master `raise` Scenarios Reference Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Scenario / Syntax"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Python Code Pattern"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Traceback Behavior"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Recommended Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"New Exception"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:'raise ValueError("msg")'}),e.jsx("td",{className:"py-3 px-4",children:"Creates new traceback at current line"}),e.jsx("td",{className:"py-3 px-4",children:"Input validation, boundary guards, domain checks"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"Bare Re-Raise"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"except Exception: log(); raise"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-bold",children:"Preserves original line numbers"}),e.jsx("td",{className:"py-3 px-4",children:"Logging, rollback, and middleware auditing"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Permission Guard"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:'raise PermissionError("Frozen")'}),e.jsx("td",{className:"py-3 px-4",children:"Halts unauthorized user actions"}),e.jsx("td",{className:"py-3 px-4",children:"RBAC access control, frozen wallets, expired tokens"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"Abstract Stub"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"raise NotImplementedError()"}),e.jsx("td",{className:"py-3 px-4",children:"Signals missing child implementation"}),e.jsx("td",{className:"py-3 px-4",children:"Unimplemented base class methods"})]})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating the `raise` keyword, bare re-raising, fail-fast guards, and student wallet invariant engines:"}),e.jsx(E,{files:[{filename:"raising_exceptions_fundamentals.py",code:j,description:"Raising exceptions intentionally with raise, input validation, and descriptive error messages."},{filename:"re_raising_active_exceptions.py",code:_,description:"Bare raise re-raising, preserving original tracebacks, and the log-cleanup-reraise pattern."},{filename:"conditional_validation_guards.py",code:S,description:"Fail-Fast exceptions vs silent error return codes and Indian PAN validation guards."},{filename:"student_banking_withdrawal_guard.py",code:R,description:"Enterprise Student Campus Wallet with strict invariant guards and atomic transactions."}]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Bare `raise` Outside Except Block"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Calling bare ",e.jsx("code",{className:"text-rose-300 font-mono",children:"raise"})," when no exception is active raises ",e.jsx("code",{className:"text-rose-300 font-mono",children:"RuntimeError: No active exception to reraise"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Only use bare ",e.jsx("code",{className:"text-emerald-300",children:"raise"})," inside ",e.jsx("code",{className:"text-emerald-300",children:"except"})," blocks."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Raising Non-Exception Types"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-amber-300 font-mono",children:'raise "Invalid Password"'})," in Python 3 causes ",e.jsx("code",{className:"text-amber-300 font-mono",children:"TypeError: exceptions must derive from BaseException"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always instantiate exception classes: ",e.jsx("code",{className:"text-emerald-300",children:'raise ValueError("msg")'}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Generic Unhelpful Error Messages"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-purple-300 font-mono",children:'raise ValueError("Error")'})," makes debugging in production logs impossible."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Include specific values: ",e.jsxs("code",{className:"text-emerald-300",children:['raise ValueError(f"Expected age >= 14, got ',age,'")']}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Silent Exception Swallowing"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Catching an exception and executing ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"except Exception: pass"})," silently masks severe crashes and database corruptions."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always handle, log, or re-raise with ",e.jsx("code",{className:"text-emerald-300",children:"raise"}),"."]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering the `raise` keyword, bare re-raising, fail-fast guards, and defensive coding:"}),e.jsx(N,{questions:T})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with raise recipes, fail-fast validation templates, and wallet guard patterns:"}),e.jsx("div",{className:"mb-10",children:e.jsx(w,{content:I,filename:"python_topic7_raising_exceptions_notes.txt",title:"Print Topic 7 Study Notes"})}),e.jsx(v,{})]})]})]})}export{O as default};
