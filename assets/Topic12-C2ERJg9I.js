import{b as o,j as e,bg as d}from"./vendor-react-core-Doz9nIC6.js";import{P as N}from"./PythonFileLoader-hCi5osN-.js";import{P as _}from"./PlainTextPrint-C08xhKA4.js";import{F as w}from"./FAQTemplate-CkSqDH4B.js";import{T as S}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const j=`# topic12_files/fail_fast_design_patterns.py\r
# Module: 003_002_basic-exception-handling\r
# Topic: Best practices: Fail fast, log errors, defensive programming\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 12 - File 1: Fail-Fast Architecture & Guard Clauses\r
Demonstrates:\r
  1. Fail-Fast Principle: Halting immediately on invalid input at API boundaries\r
  2. Guard Clauses vs Nested 'Pyramid of Doom' (Flattening complex conditionals)\r
  3. Preventing corrupt state from polluting downstream systems\r
"""\r
\r
import re\r
from typing import Dict, Any\r
\r
# =====================================================================\r
# 1. THE FLAWED APPROACH: DEEP NESTED 'PYRAMID OF DOOM' (Anti-Pattern)\r
# =====================================================================\r
def flawed_enroll_student_nested(student_data: dict) -> bool:\r
    """Anti-pattern: Deeply nested if-statements, hard to read, fails slowly."""\r
    if student_data is not None:\r
        if "name" in student_data:\r
            if len(student_data["name"].strip()) > 0:\r
                if "fee" in student_data:\r
                    if student_data["fee"] >= 5000:\r
                        print("  [ENROLLED NESTED] Successfully enrolled.")\r
                        return True\r
                    else:\r
                        print("  Fee too low")\r
                else:\r
                    print("  Missing fee")\r
            else:\r
                print("  Empty name")\r
        else:\r
            print("  Missing name")\r
    return False\r
\r
\r
# =====================================================================\r
# 2. THE PYTHONIC FAIL-FAST GUARD CLAUSES APPROACH\r
# =====================================================================\r
def pythonic_enroll_student_fail_fast(student_data: Dict[str, Any]) -> Dict[str, Any]:\r
    """Pythonic: Flat, readable guard clauses that fail fast with descriptive exceptions."""\r
    # Guard 1: Root Dictionary Existence\r
    if not isinstance(student_data, dict):\r
        raise TypeError(f"Student data must be a dictionary, got {type(student_data).__name__}!")\r
\r
    # Guard 2: Name Validation\r
    name = student_data.get("name")\r
    if not isinstance(name, str) or not name.strip():\r
        raise ValueError("Student 'name' is required and cannot be empty!")\r
\r
    # Guard 3: Student ID Validation\r
    stu_id = student_data.get("id")\r
    if not isinstance(stu_id, str) or not re.match(r"^STU-\\d{3,6}$", stu_id):\r
        raise ValueError(f"Invalid Student ID format '{stu_id}'. Expected 'STU-XXXX' (e.g. STU-101)!")\r
\r
    # Guard 4: Financial Minimum Threshold\r
    fee = student_data.get("fee")\r
    if not isinstance(fee, (int, float)) or fee < 5000.0:\r
        raise ValueError(f"Minimum enrollment deposit is INR 5,000.00, received: INR {fee}!")\r
\r
    # Core Happy Path (Zero Nesting!)\r
    print(f"  [ENROLLMENT CONFIRMED] {name.strip()} ({stu_id}) | Deposit: INR {fee:,.2f}")\r
    return {"id": stu_id, "name": name.strip(), "fee": fee, "status": "ACTIVE"}\r
\r
\r
def demonstrate_fail_fast():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - FAIL-FAST ARCHITECTURE & GUARD CLAUSES")\r
    print("=" * 70)\r
\r
    # 1. Valid Record\r
    print("1. Processing Valid Student Record:")\r
    record = {"id": "STU-101", "name": "Sourav Mukherjee", "fee": 18000.0}\r
    pythonic_enroll_student_fail_fast(record)\r
\r
    # 2. Testing Invalid Student ID Guard\r
    print("\\n2. Testing Malformed Student ID ('INVALID_ID'):")\r
    try:\r
        pythonic_enroll_student_fail_fast({"id": "INVALID_ID", "name": "Priyanka Sen", "fee": 18000.0})\r
    except ValueError as err:\r
        print(f"   [BLOCKED FAIL-FAST] ValueError: {err}")\r
\r
    # 3. Testing Underpaid Fee Guard\r
    print("\\n3. Testing Underpaid Initial Fee (INR 2,500):")\r
    try:\r
        pythonic_enroll_student_fail_fast({"id": "STU-102", "name": "Rahul Verma", "fee": 2500.0})\r
    except ValueError as err:\r
        print(f"   [BLOCKED FAIL-FAST] ValueError: {err}")\r
\r
    print("\\n[PASSED] Fail-Fast Architecture & Guard Clauses Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_fail_fast()\r
`,T=`# topic12_files/exception_logging_and_auditing_best_practices.py\r
# Module: 003_002_basic-exception-handling\r
# Topic: Best practices: Fail fast, log errors, defensive programming\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 12 - File 2: Exception Logging & Forensic Auditing Best Practices\r
Demonstrates:\r
  1. The Danger of Silent Exception Swallowing (\`except: pass\` anti-pattern)\r
  2. Structured forensic logging with contextual metadata\r
  3. The "Log, Rollback & Graceful Degradation" pattern\r
"""\r
\r
import logging\r
import sys\r
from typing import Optional, Dict, Any\r
\r
# Configure Institutional Logger\r
logging.basicConfig(\r
    level=logging.INFO,\r
    format="[%(asctime)s] [%(levelname)-7s] [%(name)s] %(message)s",\r
    datefmt="%H:%M:%S"\r
)\r
logger = logging.getLogger("FeeAuditService")\r
\r
# =====================================================================\r
# 1. THE CATASTROPHIC ANTI-PATTERN: SILENT EXCEPTION SWALLOWING\r
# =====================================================================\r
def flawed_save_fee_silent_swallow(student_id: str, amount: float):\r
    """CATASTROPHIC: Catches all errors and does 'pass', hiding corruption permanently!"""\r
    try:\r
        # Simulate network or database crash:\r
        raise ConnectionResetError("SQL Socket Reset by peer on port 5432")\r
    except Exception:\r
        pass  # ❌ SILENT BUG: The caller thinks the write succeeded, but data was LOST!\r
\r
\r
# =====================================================================\r
# 2. THE PYTHONIC DEFENSIVE PATTERN: AUDITED GRACEFUL DEGRADATION\r
# =====================================================================\r
def pythonic_save_fee_with_audit(student_id: str, amount: float) -> Optional[Dict[str, Any]]:\r
    """Pythonic: Logs forensic error, creates recovery queue, and returns structured status."""\r
    try:\r
        if amount <= 0:\r
            raise ValueError(f"Fee amount must be positive, got INR {amount}")\r
\r
        # Simulate transient network drop\r
        raise ConnectionResetError("SQL Socket Reset by peer on port 5432")\r
\r
    except ConnectionResetError as net_err:\r
        # Step 1: Log detailed forensic telemetry with exception traceback\r
        logger.error(\r
            f"Transient database disconnection while processing Fee for Student {student_id} (INR {amount:,.2f}): {net_err}"\r
        )\r
\r
        # Step 2: Enqueue to offline fallback persistence buffer\r
        logger.info(f"  [OFFLINE QUEUE] Pushed transaction to offline SQLite sync queue for Student {student_id}.")\r
\r
        # Step 3: Return graceful degradation payload or raise domain exception\r
        return {\r
            "status": "QUEUED_OFFLINE",\r
            "student_id": student_id,\r
            "amount": amount,\r
            "message": "Payment recorded in secure offline sync ledger. Will sync upon reconnection."\r
        }\r
\r
\r
def demonstrate_logging_best_practices():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - EXCEPTION LOGGING & AUDITING BEST PRACTICES")\r
    print("=" * 70)\r
\r
    # 1. Demonstrating the Silent Swallow Anti-Pattern\r
    print("1. Demonstrating Silent Exception Swallowing (The Danger of \`except: pass\`):")\r
    flawed_save_fee_silent_swallow("STU-101", 18000.0)\r
    print("   -> Notice: Function returned silently with NO output, hiding database data loss!\\n")\r
\r
    # 2. Demonstrating Audited Fallback\r
    print("2. Demonstrating Defensive Forensic Auditing & Offline Queuing:")\r
    res = pythonic_save_fee_with_audit("STU-102", 18000.0)\r
    print(f"   Service Response: {res}")\r
\r
    print("\\n[PASSED] Exception Logging & Auditing Best Practices Demonstrated.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_logging_best_practices()\r
`,A=`# topic12_files/defensive_programming_contracts.py\r
# Module: 003_002_basic-exception-handling\r
# Topic: Best practices: Fail fast, log errors, defensive programming\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 12 - File 3: EAFP vs LBYL & Defensive Invariant Contracts\r
Demonstrates:\r
  1. EAFP (Easier to Ask for Forgiveness than Permission) in Python\r
  2. LBYL (Look Before You Leap) and the TOCTOU (Time-of-Check to Time-of-Use) Race Hazard\r
  3. Preconditions, Postconditions, and Class Invariants\r
"""\r
\r
from typing import Dict, Any, Optional\r
\r
# =====================================================================\r
# 1. EAFP VS LBYL DICTIONARY LOOKUP\r
# =====================================================================\r
def lbyl_get_student_fee(database: dict, student_id: str) -> Optional[float]:\r
    """LBYL: Checks existence first, then retrieves (2 lookups, slower)."""\r
    if student_id in database:\r
        return database[student_id]["fee"]\r
    return None\r
\r
\r
def eafp_get_student_fee(database: dict, student_id: str) -> Optional[float]:\r
    """EAFP (Pythonic): Directly attempts access, catches KeyError (1 lookup, faster & thread-safe)."""\r
    try:\r
        return database[student_id]["fee"]\r
    except KeyError:\r
        return None\r
\r
\r
# =====================================================================\r
# 2. DEFENSIVE CLASS INVARIANTS: ATOMIC STUDENT WALLET\r
# =====================================================================\r
class DefensiveStudentWallet:\r
    """Implements complete pre/post conditions and class invariants."""\r
\r
    def __init__(self, student_id: str, initial_balance: float = 0.0):\r
        # Precondition\r
        if initial_balance < 0:\r
            raise ValueError(f"Initial balance cannot be negative: INR {initial_balance}")\r
\r
        self.student_id = student_id\r
        self._balance = float(initial_balance)\r
        self._check_class_invariant()\r
\r
    def _check_class_invariant(self):\r
        """Internal Invariant: Balance must NEVER be negative in memory."""\r
        assert self._balance >= 0.0, f"Class Invariant Broken: Balance {self._balance} < 0!"\r
\r
    @property\r
    def balance(self) -> float:\r
        return self._balance\r
\r
    def transfer_fee(self, amount: float):\r
        # 1. Preconditions\r
        if not isinstance(amount, (int, float)) or amount <= 0:\r
            raise ValueError(f"Transfer amount must be strictly positive, got {amount}")\r
        if amount > self._balance:\r
            raise ValueError(f"Insufficient funds: Balance is INR {self._balance:,.2f}, requested INR {amount:,.2f}")\r
\r
        # 2. State Mutation\r
        old_balance = self._balance\r
        self._balance -= float(amount)\r
\r
        # 3. Postcondition & Class Invariant Check\r
        assert self._balance == old_balance - amount, "Postcondition Broken: Math arithmetic error!"\r
        self._check_class_invariant()\r
\r
        print(f"  [TRANSFER COMPLETE] -INR {amount:,.2f} | Remaining: INR {self._balance:,.2f}")\r
\r
\r
def demonstrate_defensive_contracts():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - EAFP VS LBYL & DEFENSIVE CONTRACTS")\r
    print("=" * 70)\r
\r
    sample_db = {"STU-101": {"name": "Sourav Mukherjee", "fee": 18000.0}}\r
\r
    # 1. EAFP vs LBYL\r
    print("1. Comparing EAFP vs LBYL Query Performance:")\r
    print(f"   LBYL Result : {lbyl_get_student_fee(sample_db, 'STU-101')}")\r
    print(f"   EAFP Result : {eafp_get_student_fee(sample_db, 'STU-101')}\\n")\r
\r
    # 2. Defensive Invariant Wallet\r
    print("2. Executing Defensive Atomic Wallet Operations:")\r
    wallet = DefensiveStudentWallet("STU-101", initial_balance=25000.0)\r
    wallet.transfer_fee(5000.0)\r
    wallet.transfer_fee(10000.0)\r
\r
    # 3. Triggering Precondition Guard\r
    print("\\n3. Testing Precondition Violation (Overdraft Attempt):")\r
    try:\r
        wallet.transfer_fee(15000.0) # Balance is 10000\r
    except ValueError as err:\r
        print(f"   [BLOCKED BY PRECONDITION] ValueError: {err}")\r
\r
    print("\\n[PASSED] Defensive Programming Contracts Demonstrated Successfully.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_defensive_contracts()\r
`,k=`# topic12_files/enterprise_resilient_financial_engine.py\r
# Module: 003_002_basic-exception-handling\r
# Topic: Best practices: Fail fast, log errors, defensive programming\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 12 - File 4: Resilient Educational Ledger & Billing Engine (Capstone Case Study)\r
Demonstrates:\r
  1. Complete synthesis of Module 003_002 principles\r
  2. Fail-Fast input validation guards + EAFP data retrieval\r
  3. Custom domain exceptions with chained root-causes (\`from\`)\r
  4. Structured logging + Atomic transaction state rollback\r
"""\r
\r
import logging\r
import datetime as dt\r
from typing import Dict, Any, List\r
\r
# =====================================================================\r
# CUSTOM DOMAIN EXCEPTION HIERARCHY\r
# =====================================================================\r
class ResilientInstituteError(Exception):\r
    """Base exception for all educational ledger transactions."""\r
    pass\r
\r
class StudentAdmissionValidationError(ResilientInstituteError):\r
    """Raised when applicant data fails fail-fast boundary validation."""\r
    pass\r
\r
class LedgerTransactionDiscrepancyError(ResilientInstituteError):\r
    """Raised when atomic transaction invariants fail."""\r
    pass\r
\r
\r
# =====================================================================\r
# ENTERPRISE RESILIENT LEDGER ENGINE\r
# =====================================================================\r
class ResilientLedgerEngine:\r
    """Production transaction manager with defensive invariants and logging."""\r
\r
    def __init__(self, logger: logging.Logger):\r
        self.logger = logger\r
        self._accounts: Dict[str, Dict[str, Any]] = {}\r
        self._audit_trail: List[Dict[str, Any]] = []\r
\r
    def register_account(self, student_id: str, name: str, initial_deposit: float):\r
        # 1. FAIL-FAST INPUT GUARDS\r
        if not isinstance(student_id, str) or not student_id.startswith("STU-"):\r
            raise StudentAdmissionValidationError(f"Invalid student ID format '{student_id}'")\r
        if not isinstance(name, str) or not name.strip():\r
            raise StudentAdmissionValidationError("Student name is mandatory")\r
        if initial_deposit < 0:\r
            raise StudentAdmissionValidationError(f"Initial deposit cannot be negative: INR {initial_deposit}")\r
\r
        self._accounts[student_id] = {\r
            "name": name.strip(),\r
            "balance": float(initial_deposit),\r
            "created_at": dt.datetime.now().strftime("%Y-%m-%d %H:%M:%S")\r
        }\r
        self.logger.info(f"Created Ledger Account for {name} ({student_id}) with INR {initial_deposit:,.2f}")\r
\r
    def execute_atomic_tuition_deduction(self, student_id: str, tuition_fee: float) -> float:\r
        """Executes an atomic fee deduction with rollback guarantee."""\r
        # EAFP lookup\r
        try:\r
            account = self._accounts[student_id]\r
        except KeyError as key_err:\r
            raise StudentAdmissionValidationError(f"Account for '{student_id}' does not exist!") from key_err\r
\r
        if tuition_fee <= 0:\r
            raise StudentAdmissionValidationError(f"Tuition fee must be strictly positive: INR {tuition_fee}")\r
\r
        # Snapshot state for rollback:\r
        original_balance = account["balance"]\r
        self.logger.debug(f"Snapshot original balance for {student_id}: INR {original_balance:,.2f}")\r
\r
        try:\r
            if tuition_fee > account["balance"]:\r
                raise LedgerTransactionDiscrepancyError(\r
                    f"Insufficient funds: Balance is INR {account['balance']:,.2f}, required: INR {tuition_fee:,.2f}"\r
                )\r
\r
            # Mutate state:\r
            account["balance"] -= tuition_fee\r
\r
            # Postcondition Invariant:\r
            assert account["balance"] == original_balance - tuition_fee, "Math Invariant Violated!"\r
\r
            # Record audit log:\r
            self._audit_trail.append({\r
                "student_id": student_id,\r
                "deducted": tuition_fee,\r
                "remaining": account["balance"],\r
                "timestamp": dt.datetime.now().strftime("%Y-%m-%d %H:%M:%S")\r
            })\r
\r
            self.logger.info(f"Deducted INR {tuition_fee:,.2f} from {student_id}. New Balance: INR {account['balance']:,.2f}")\r
            return account["balance"]\r
\r
        except Exception as tx_err:\r
            # ATOMIC ROLLBACK ON EXCEPTION:\r
            account["balance"] = original_balance\r
            self.logger.error(f"Transaction aborted. Rolled back balance for {student_id} to INR {original_balance:,.2f}: {tx_err}")\r
            raise\r
\r
\r
def run_resilient_engine_demo():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - RESILIENT LEDGER BILLING ENGINE")\r
    print("=" * 70)\r
\r
    # Configure logger\r
    logging.basicConfig(level=logging.INFO, format="[%(asctime)s] [%(levelname)s] %(message)s", datefmt="%H:%M:%S")\r
    logger = logging.getLogger("ResilientLedger")\r
\r
    engine = ResilientLedgerEngine(logger)\r
\r
    # 1. Register Student Account\r
    print("1. Registering Student Account (Sourav Mukherjee):")\r
    engine.register_account("STU-101", "Sourav Mukherjee", 25000.0)\r
\r
    # 2. Valid Tuition Deduction\r
    print("\\n2. Executing Valid Tuition Payment (INR 15,000):")\r
    engine.execute_atomic_tuition_deduction("STU-101", 15000.0)\r
\r
    # 3. Triggering Insufficient Funds with Rollback\r
    print("\\n3. Executing Over-Limit Deduction (INR 20,000 against INR 10,000 balance):")\r
    try:\r
        engine.execute_atomic_tuition_deduction("STU-101", 20000.0)\r
    except LedgerTransactionDiscrepancyError as err:\r
        print(f"\\n[CAUGHT DISCREPANCY ERROR] {err}")\r
\r
    # Verify balance was protected and rolled back:\r
    final_balance = engine._accounts["STU-101"]["balance"]\r
    print(f"\\nVerified Final Ledger Balance: INR {final_balance:,.2f} (Cleanly rolled back to INR 10,000!)")\r
\r
    print("\\n[PASSED] Resilient Educational Ledger Billing Engine Verified.")\r
\r
\r
if __name__ == "__main__":\r
    run_resilient_engine_demo()\r
`,I=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_002: EXCEPTION HANDLING\r
            TOPIC 12: EXCEPTION HANDLING & DEFENSIVE CODING BEST PRACTICES\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. THE FAIL-FAST GUARD CLAUSE PATTERN\r
--------------------------------------------------------------------------------\r
  def process_user(user_data):\r
      if not isinstance(user_data, dict):\r
          raise TypeError("Expected dict")\r
      if "id" not in user_data:\r
          raise ValueError("Missing ID")\r
      # Flat, clean happy path follows!\r
\r
--------------------------------------------------------------------------------\r
2. EAFP VS LBYL\r
--------------------------------------------------------------------------------\r
  • EAFP (Pythonic): try: return data[key] except KeyError: return None\r
  • LBYL (Cautious): if key in data: return data[key] else: return None\r
\r
--------------------------------------------------------------------------------\r
3. THE 5 CARDINAL RULES OF PYTHON EXCEPTION HANDLING\r
--------------------------------------------------------------------------------\r
  1. Never use bare \`except:\` or \`except Exception: pass\` (Silent Swallow).\r
  2. Always catch the most specific exception class first.\r
  3. Validate public inputs with \`raise\` (Fail-Fast); check math with \`assert\`.\r
  4. Use \`raise ... from e\` when wrapping low-level errors into domain exceptions.\r
  5. Always maintain clean atomic rollback guarantees in financial/data writes.\r
\r
================================================================================\r
        END OF STUDY NOTE • TOPIC 12: EXCEPTION BEST PRACTICES CAPSTONE\r
================================================================================\r
`,C=[{question:"What is the 'Fail-Fast' principle in Python programming?",shortAnswer:"The practice of validating inputs immediately at function/API boundaries and raising descriptive exceptions upon the very first invalid condition, preventing corrupt data from propagating into downstream systems.",explanation:"Eliminates hard-to-trace bugs caused by corrupted variables bubbling through deep call stacks.",hint:"Validate inputs immediately and halt execution on the first sign of invalid data.",level:"basic",codeExample:`if not isinstance(user_id, str):
    raise TypeError('user_id must be a string')`},{question:"What is a 'Guard Clause' and how does it prevent the 'Pyramid of Doom'?",shortAnswer:"A guard clause is an early return or early raise check at the top of a function; it eliminates deeply nested 'if...else' ladders (the Pyramid of Doom) by exiting immediately, keeping the main happy-path logic unindented and flat.",explanation:"Improves code readability, testability, and cognitive clarity.",hint:"Early validation checks at function tops that keep the main code flat.",level:"basic",codeExample:`def process(data):
    if not data: raise ValueError
    if not data.is_valid: raise ValidationError
    # Flat happy path!`},{question:"Why is 'except Exception: pass' considered one of the worst anti-patterns in software engineering?",shortAnswer:"Because it silently swallows all exceptions, hiding critical crashes, database failures, and corrupt states while giving the caller a false illusion of success.",explanation:"Causes silent data loss that can go undetected for weeks.",hint:"Silently masks severe crashes and causes undetected data loss.",level:"basic",codeExample:`# CATASTROPHIC ANTI-PATTERN:
except Exception:
    pass`},{question:"What does 'EAFP' stand for in Python philosophy?",shortAnswer:"'Easier to Ask for Forgiveness than Permission' — the idiomatic Python practice of assuming valid keys/files exist and catching the resulting exception (KeyError, FileNotFoundError) if they do not, rather than checking beforehand.",explanation:"Contrasts with LBYL (Look Before You Leap).",hint:"Easier to Ask for Forgiveness than Permission.",level:"basic",codeExample:`try:
    return config['timeout']
except KeyError:
    return 30`},{question:"What does 'LBYL' stand for and what is its main drawback in concurrent systems?",shortAnswer:"'Look Before You Leap' — checking preconditions before acting (e.g. 'if key in dict: return dict[key]'); its main drawback in concurrent systems is the TOCTOU (Time-of-Check to Time-of-Use) race condition where another thread modifies state between the check and the use.",explanation:"EAFP avoids TOCTOU by performing the operation atomically.",hint:"Look Before You Leap; vulnerable to TOCTOU race conditions.",level:"moderate",codeExample:"# LBYL: if file.exists(): open(file) -> Race condition if deleted in between!"},{question:"What is a 'TOCTOU' (Time-of-Check to Time-of-Use) race hazard?",shortAnswer:"A concurrency bug where a condition verified during a check (e.g. 'if os.path.exists(path)') becomes invalid before the resource is used (e.g. file is deleted by another process before 'open()').",explanation:"EAFP's 'try open() except FileNotFoundError' is immune to this hazard.",hint:"State changes between the check step and the execution step.",level:"complex",codeExample:"# TOCTOU Hazard: checking if a file exists before opening it"},{question:"What are Preconditions, Postconditions, and Class Invariants?",shortAnswer:"Preconditions are requirements that must hold before a method executes (e.g. fee > 0); Postconditions are guarantees that must hold when a method finishes (e.g. output sum == 1.0); Class Invariants are truths that must hold for an object at all times (e.g. balance >= 0).",explanation:"The foundation of Design by Contract (DbC) and defensive programming.",hint:"Pre = before execution; Post = after completion; Invariant = always true for object.",level:"moderate",codeExample:`# Precondition: raise ValueError
# Postcondition: assert math_valid
# Invariant: assert self._bal >= 0`},{question:"How do you implement an 'Atomic Rollback' pattern in Python when an operation fails?",shortAnswer:"By taking a snapshot of the original state before mutation, executing the operation inside a 'try' block, and restoring the original snapshot inside the 'except' block before re-raising or logging the error.",explanation:"Guarantees that objects never remain in corrupted half-mutated states.",hint:"Snapshot state before mutation and restore it in the except handler.",level:"moderate",codeExample:`old_state = state.copy()
try: mutate()
except Exception:
    state = old_state; raise`},{question:"When should you use 'logger.warning()' vs 'logger.error()'?",shortAnswer:"Use 'logger.warning()' when an unexpected event occurs but the system successfully handled it or degraded gracefully; use 'logger.error()' when an operation failed and could not fulfill its primary goal.",explanation:"Maintains clear signal-to-noise ratio in monitoring dashboards.",hint:"Warning = recovered/degraded; Error = operation failed.",level:"basic",codeExample:`# Warning: logger.warning('Cache miss, fetching DB')
# Error: logger.error('DB query failed')`},{question:"Why should you never catch 'BaseException' directly in application code?",shortAnswer:"Because 'BaseException' catches 'KeyboardInterrupt' (Ctrl+C), 'SystemExit', and 'GeneratorExit', preventing users from terminating the program or killing worker processes cleanly.",explanation:"Always catch 'Exception' instead.",hint:"BaseException catches Ctrl+C (KeyboardInterrupt) and SystemExit.",level:"basic",codeExample:`except Exception:  # Correct!
# except BaseException:  # Dangerous!`},{question:"What is 'Graceful Degradation' in microservice exception handling?",shortAnswer:"The capability of an application to continue operating in a limited or fallback capacity (e.g. serving cached data or enqueuing to offline buffers) when a primary dependency or database fails.",explanation:"Prevents total system outages during partial infrastructure failures.",hint:"Continuing operation in a fallback mode when dependencies fail.",level:"moderate",codeExample:`except DatabaseError:
    return fetch_stale_cache_fallback()`},{question:"Why should error messages never expose raw SQL queries or passwords?",shortAnswer:"Because error messages often get propagated to logs, error monitoring tools, or API responses, where exposed credentials or database schemas represent a major security risk (OWASP Top 10).",explanation:"Sanitize logs and use 'from None' on public boundaries.",hint:"Prevents credential leaks and schema disclosure in logs/APIs.",level:"basic",codeExample:"# Sanitize credentials before logging or raising"},{question:"What is the 'Circuit Breaker' pattern?",shortAnswer:"A stability pattern that detects repeated failures to an external service and temporarily stops sending requests (tripping the circuit) to give the downstream service time to recover and avoid cascading timeouts.",explanation:"Commonly implemented in production API gateways and microservices.",hint:"Temporarily halts requests to a failing service to prevent cascading crashes.",level:"complex",codeExample:"# Circuit breaker trips after 5 consecutive timeouts"},{question:"What does the 'else' block in a 'try...except...else...finally' construct accomplish?",shortAnswer:"The 'else' block executes ONLY when the 'try' block completes without raising any exceptions, keeping code that shouldn't be protected by the try block separate from the try body.",explanation:"Reduces the amount of code in the try block, preventing accidental catching of unrelated bugs.",hint:"Runs only when no exception occurs in the try block.",level:"basic",codeExample:`try: data = load()
except Error: handle()
else: process_data(data) # Clean!`},{question:"What is the purpose of the 'finally' block?",shortAnswer:"To guarantee that resource cleanup (closing files, releasing locks, terminating database sessions) executes 100% of the time, regardless of whether exceptions were raised or caught.",explanation:"Essential for leak-free resource management.",hint:"Guarantees cleanup code executes under all circumstances.",level:"basic",codeExample:`finally:
    db_connection.close()`},{question:"Why is the 'with' statement (Context Manager) preferred over manual 'try...finally'?",shortAnswer:"Because Context Managers encapsulate '__enter__' and '__exit__' mechanics automatically, preventing human error from forgetting to close resources or release locks.",explanation:"The Pythonic standard for resource management.",hint:"Automates resource cleanup and prevents forgetting to close files/locks.",level:"basic",codeExample:`with open('file.txt') as f:
    data = f.read()  # Auto-closed!`},{question:"How should you handle unexpected exceptions at the very top level of a CLI or web application?",shortAnswer:"Catch 'Exception' at the top-level boundary, log the full traceback with 'logger.exception()', emit a clean user-facing error message or HTTP 500 status code, and exit cleanly with non-zero exit code.",explanation:"Prevents ugly raw tracebacks from splashing across user terminals while retaining full forensic logs.",hint:"Catch at boundary, log full traceback, show friendly error, exit cleanly.",level:"moderate",codeExample:`except Exception as e:
    logger.exception('Fatal crash'); sys.exit(1)`},{question:"What is the difference between 'logging.error()' and 'logging.exception()'?",shortAnswer:"'logging.exception()' automatically appends the current exception's full traceback to the log message (exc_info=True); 'logging.error()' logs only the text message unless exc_info is explicitly passed.",explanation:"Always use logger.exception() inside except blocks.",hint:"logging.exception() automatically includes the full exception traceback.",level:"basic",codeExample:`# Inside except block:
logger.exception('Operation failed')`},{question:"What is 'Defensive Copying'?",shortAnswer:"Creating a shallow or deep copy of mutable input data structures (lists, dicts) before operating on them, ensuring external caller objects are not unintentionally mutated or corrupted.",explanation:"Prevents spooky action-at-a-distance bugs.",hint:"Copying mutable input arguments before modifying them internally.",level:"moderate",codeExample:`def process(data):
    internal_copy = list(data)`},{question:"How do you test that an exception is raised with the correct message in pytest?",shortAnswer:`Using 'with pytest.raises(ExpectedError, match=r"regex_pattern"):' or by inspecting 'exc_info.value'.`,explanation:"Verifies both exception type and diagnostic message accuracy.",hint:"Use pytest.raises(ExpectedError, match='pattern').",level:"basic",codeExample:`with pytest.raises(ValueError, match='Invalid age'):
    enroll(age=-5)`},{question:"Why should you avoid creating a giant 'try' block that wraps an entire 200-line function?",shortAnswer:"Because a giant try block makes it impossible to know which specific line triggered the exception, and can accidentally catch and mask unrelated bugs in other parts of the function.",explanation:"Keep try blocks tight, focused, and small.",hint:"Keep try blocks small and focused to avoid masking unrelated bugs.",level:"basic",codeExample:"# Wrap only the specific risky line in try...except"},{question:"What is a 'Sentinel Value' and when is raising an exception better?",shortAnswer:"A sentinel value is a special return value (like None or -1) representing failure; raising an exception is better whenever returning a sentinel could be ignored or confused with a valid return value (e.g. 0 or None).",explanation:"Exceptions enforce explicit handling.",hint:"Exceptions prevent sentinel values from being confused with valid data.",level:"moderate",codeExample:"# Raising exception is unambiguous compared to returning None"},{question:"How does type hinting with 'Optional[T]' relate to exception handling?",shortAnswer:"Functions that return 'Optional[T]' signal that returning None is a normal valid possibility; functions that should always return 'T' should raise exceptions on failure rather than returning None.",explanation:"Clarifies function contracts in modern statically-typed Python.",hint:"Use Optional when None is a valid outcome; raise exceptions for actual failures.",level:"moderate",codeExample:"def find_student(id: str) -> Student: ... # Raises StudentNotFound"},{question:"What are the 5 Cardinal Rules of Python Exception Handling?",shortAnswer:"1. Never silently swallow exceptions (`except: pass`). 2. Order except blocks from most specific to most general. 3. Validate public inputs with `raise` (Fail-Fast); verify internal math with `assert`. 4. Use `raise from e` to preserve causal chains. 5. Maintain atomic rollback guarantees on failure.",explanation:"The comprehensive summary of professional Python error engineering.",hint:"No silent swallow, specific first, fail fast, chain with from, atomic rollback.",level:"basic",codeExample:"# The 5 Cardinal Rules of Python Exception Handling"},{question:"What is the ultimate golden rule for Defensive Programming in Python?",shortAnswer:"Design systems that fail fast at boundaries, communicate failures through specific typed exceptions, preserve forensic root causes with structured logging and chaining, and guarantee that no failure leaves the application in a corrupted state.",explanation:"The foundation of crash-proof, enterprise-ready Python software.",hint:"Fail fast, use specific exceptions, log structured telemetry, and protect state integrity.",level:"basic",codeExample:"# Master defensive programming architecture"}];function V(){const f=o.useRef([]),[c,u]=o.useState("failfast"),[x,m]=o.useState("STU-101"),[p,h]=o.useState("Sourav Mukherjee"),[a,g]=o.useState(25e3),[s,b]=o.useState(15e3),[r,l]=o.useState({status:"IDLE",originalBalance:25e3,currentBalance:25e3,message:"Ready to execute defensive atomic transaction.",rollbackTriggered:!1,auditTrail:[]}),v=()=>{if(!x.startsWith("STU-")){l({status:"ERROR_VALIDATION",originalBalance:a,currentBalance:a,message:`StudentAdmissionValidationError: Invalid ID format '${x}'. Must start with 'STU-'!`,rollbackTriggered:!1,auditTrail:[{time:new Date().toLocaleTimeString(),event:"Fail-Fast Validation Blocked"}]});return}if(!p.trim()){l({status:"ERROR_VALIDATION",originalBalance:a,currentBalance:a,message:"StudentAdmissionValidationError: Student name is mandatory!",rollbackTriggered:!1,auditTrail:[{time:new Date().toLocaleTimeString(),event:"Empty Name Blocked"}]});return}if(s<=0){l({status:"ERROR_VALIDATION",originalBalance:a,currentBalance:a,message:`StudentAdmissionValidationError: Tuition fee must be strictly positive: INR ${s}`,rollbackTriggered:!1,auditTrail:[{time:new Date().toLocaleTimeString(),event:"Non-positive Fee Blocked"}]});return}const t=a;if(s>a){l({status:"ERROR_ROLLBACK",originalBalance:t,currentBalance:t,message:`LedgerTransactionDiscrepancyError: Insufficient funds (Available: INR ${t.toLocaleString()}, Required: INR ${s.toLocaleString()}) -> ATOMIC ROLLBACK EXECUTED. Balance preserved at INR ${t.toLocaleString()}!`,rollbackTriggered:!0,auditTrail:[{time:new Date().toLocaleTimeString(),event:`Snapshot original balance: INR ${t.toLocaleString()}`},{time:new Date().toLocaleTimeString(),event:"Insufficient balance detected"},{time:new Date().toLocaleTimeString(),event:`Rolled back balance to INR ${t.toLocaleString()}`}]});return}const n=a-s;g(n),l({status:"SUCCESS",originalBalance:t,currentBalance:n,message:`[ATOMIC COMMIT APPROVED] Disbursed INR ${s.toLocaleString()} for ${p} (${x}). Remaining: INR ${n.toLocaleString()}`,rollbackTriggered:!1,auditTrail:[{time:new Date().toLocaleTimeString(),event:`Snapshot original balance: INR ${t.toLocaleString()}`},{time:new Date().toLocaleTimeString(),event:`Deducted INR ${s.toLocaleString()}`},{time:new Date().toLocaleTimeString(),event:"Postcondition Invariant Verified (Sum == Original - Fee)"},{time:new Date().toLocaleTimeString(),event:`Committed new balance: INR ${n.toLocaleString()}`}]})},E=()=>{g(25e3),m("STU-101"),h("Sourav Mukherjee"),b(15e3),l({status:"IDLE",originalBalance:25e3,currentBalance:25e3,message:"Reset state to INR 25,000.00.",rollbackTriggered:!1,auditTrail:[]})};o.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(y=>{y.isIntersecting&&y.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return f.current.forEach(n=>{n&&t.observe(n)}),()=>t.disconnect()},[]);const i=t=>{t&&!f.current.includes(t)&&f.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:i,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_002"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 12 (Module Capstone)"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Robust Exception Handling & Defensive Coding"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Exception Best Practices & ",e.jsx("span",{className:"text-teal-400",children:"Defensive Architecture"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master crash-proof software design: the Fail-Fast principle, replacing the Pyramid of Doom with guard clauses, avoiding silent exception swallowing (",e.jsx("code",{className:"text-rose-400 font-mono",children:"except: pass"}),"), EAFP vs LBYL, and atomic rollback transaction guarantees."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ Fail-Fast Guard Clauses"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🐍 EAFP vs LBYL Philosophy"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔄 Atomic Transaction Rollbacks"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📊 Forensic Telemetry Auditing"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:i,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The 5 Cardinal Rules of Python Exception Engineering"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"Writing robust, production-grade Python software requires following five proven architectural design rules:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/40 border border-rose-800/60 shadow-lg",children:[e.jsx("div",{className:"text-rose-400 font-bold text-sm mb-1",children:"1️⃣ Never Silently Swallow"}),e.jsx("code",{className:"text-xs font-mono text-rose-300 block mb-1",children:"except: pass (FORBIDDEN)"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Always log, notify, re-raise, or gracefully degrade. Never hide errors."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"2️⃣ Specific-First Ordering"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"ChildError before BaseError"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Order except blocks from most specific to most general to avoid dead code."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"3️⃣ Fail-Fast at Boundaries"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"raise for inputs / assert for math"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Validate inputs immediately with guard clauses; check internal invariants with assert."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"4️⃣ Chain with `from e`"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"raise DomainError from root_err"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Preserve causal history across architectural subsystem boundaries."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 shadow-lg",children:[e.jsx("div",{className:"text-emerald-400 font-bold text-sm mb-1",children:"5️⃣ Atomic Rollback"}),e.jsx("code",{className:"text-xs font-mono text-emerald-300 block mb-1",children:"try mutate / except restore"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Guarantee that no exception leaves database or financial balances in half-mutated states."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"EAFP (Pythonic) vs LBYL (Cautious)"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Python strongly favors ",e.jsx("strong",{children:"EAFP"})," (",e.jsx("em",{children:'"Easier to Ask for Forgiveness than Permission"'}),") using ",e.jsx("code",{className:"text-teal-300 font-mono",children:"try...except"})," over ",e.jsx("strong",{children:"LBYL"})," (",e.jsx("em",{children:'"Look Before You Leap"'}),") using ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"if key in dict"}),". EAFP is faster on the happy path and eliminates multi-threaded ",e.jsx("strong",{children:"TOCTOU"})," (Time-of-Check to Time-of-Use) race hazards!"]})]})]})]}),e.jsxs("section",{ref:i,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Defensive Architecture & Guard Pipelines"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>u("failfast"),className:d("px-3 py-1.5 rounded-lg transition-all",c==="failfast"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Guard Clauses vs Pyramid"}),e.jsx("button",{onClick:()=>u("eafp"),className:d("px-3 py-1.5 rounded-lg transition-all",c==="eafp"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"EAFP vs LBYL Decision Tree"}),e.jsx("button",{onClick:()=>u("rollback"),className:d("px-3 py-1.5 rounded-lg transition-all",c==="rollback"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Atomic Rollback Guarantee"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining code structure flattening, Pythonic EAFP access, and atomic rollback workflows:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:c==="failfast"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"FAIL-FAST GUARD CLAUSES VS PYRAMID OF DOOM"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"❌ Pyramid of Doom (Nested If-Ladders)"}),e.jsx("text",{x:"20",y:"60",fill:"#fca5a5",fontSize:"8 font-mono",children:"if data is not None:"}),e.jsx("text",{x:"35",y:"78",fill:"#fca5a5",fontSize:"8 font-mono",children:'if "name" in data:'}),e.jsx("text",{x:"50",y:"96",fill:"#fca5a5",fontSize:"8 font-mono",children:'if len(data["name"]) > 0:'}),e.jsx("text",{x:"65",y:"114",fill:"#fca5a5",fontSize:"8 font-mono",children:'if "fee" in data:'}),e.jsx("text",{x:"80",y:"132",fill:"#fca5a5",fontSize:"8 font-mono",children:'if data["fee"] >= 5000:'}),e.jsx("text",{x:"95",y:"150",fill:"#34d399",fontSize:"8 font-mono",children:"# Actual Core Logic Buried Deep!"}),e.jsx("rect",{x:"20",y:"170",width:"340",height:"50",rx:"4",fill:"#881337",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"195",fill:"#ffe4e6",fontSize:"9 font-mono",children:"Hard to read, hard to test, fails slowly!"})]}),e.jsxs("g",{transform:"translate(460, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"✓ Pythonic Fail-Fast Guard Clauses"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"8 font-mono",children:'if not data: raise TypeError("Missing data")'}),e.jsx("text",{x:"20",y:"78",fill:"#ecfdf5",fontSize:"8 font-mono",children:'if "name" not in data: raise ValueError("Name required")'}),e.jsx("text",{x:"20",y:"96",fill:"#ecfdf5",fontSize:"8 font-mono",children:'if data["fee"] < 5000: raise ValueError("Fee < 5k")'}),e.jsx("rect",{x:"20",y:"125",width:"340",height:"95",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"150",fill:"#34d399",fontSize:"10 font-bold",children:"Flat Unindented Happy Path:"}),e.jsx("text",{x:"30",y:"170",fill:"#ecfdf5",fontSize:"8 font-mono",children:"# Clean business logic follows immediately at column 0!"}),e.jsx("text",{x:"30",y:"190",fill:"#a7f3d0",fontSize:"8 font-mono",children:"Instant bug pinpointing in production logs."})]})]}):c==="eafp"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"EAFP (PYTHONIC) VS LBYL (CAUTIOUS) COMPARISON"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"LBYL: Look Before You Leap"}),e.jsx("text",{x:"20",y:"65",fill:"#ecfdf5",fontSize:"9 font-mono",children:"if student_id in student_database:"}),e.jsx("text",{x:"35",y:"85",fill:"#ecfdf5",fontSize:"9 font-mono",children:"return student_database[student_id]"}),e.jsx("text",{x:"20",y:"105",fill:"#ecfdf5",fontSize:"9 font-mono",children:"else:"}),e.jsx("text",{x:"35",y:"125",fill:"#ecfdf5",fontSize:"9 font-mono",children:"return None"}),e.jsx("rect",{x:"20",y:"150",width:"340",height:"70",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"30",y:"175",fill:"#fda4af",fontSize:"9 font-bold",children:"Weaknesses:"}),e.jsx("text",{x:"30",y:"195",fill:"#cbd5e1",fontSize:"8 font-mono",children:"2 dictionary hash lookups; vulnerable to TOCTOU race!"})]}),e.jsxs("g",{transform:"translate(460, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"20",y:"30",fill:"#a5f3fc",fontSize:"12",fontWeight:"bold",children:"EAFP: Easier to Ask Forgiveness (Pythonic)"}),e.jsx("text",{x:"20",y:"65",fill:"#ecfdf5",fontSize:"9 font-mono",children:"try:"}),e.jsx("text",{x:"35",y:"85",fill:"#34d399",fontSize:"9 font-mono font-bold",children:"return student_database[student_id]"}),e.jsx("text",{x:"20",y:"105",fill:"#ecfdf5",fontSize:"9 font-mono",children:"except KeyError:"}),e.jsx("text",{x:"35",y:"125",fill:"#ecfdf5",fontSize:"9 font-mono",children:"return None"}),e.jsx("rect",{x:"20",y:"150",width:"340",height:"70",rx:"4",fill:"#022c22",stroke:"#0284c7"}),e.jsx("text",{x:"30",y:"175",fill:"#34d399",fontSize:"9 font-bold",children:"Advantages:"}),e.jsx("text",{x:"30",y:"195",fill:"#a7f3d0",fontSize:"8 font-mono",children:"Single hash lookup on happy path; 100% thread-safe!"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"ATOMIC TRANSACTION EXECUTION & ROLLBACK ARCHITECTURE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"190",height:"240",rx:"6",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"1. Snapshot State"}),e.jsx("text",{x:"15",y:"60",fill:"#ecfdf5",fontSize:"8 font-mono",children:"orig_bal = acc.balance"}),e.jsx("text",{x:"15",y:"90",fill:"#cbd5e1",fontSize:"8",children:"• Takes in-memory"}),e.jsx("text",{x:"15",y:"105",fill:"#cbd5e1",fontSize:"8",children:"or DB checkpoint"}),e.jsx("rect",{x:"210",y:"0",width:"190",height:"240",rx:"6",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"225",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. Execute Mutation"}),e.jsx("text",{x:"225",y:"60",fill:"#ecfdf5",fontSize:"8 font-mono",children:"acc.balance -= fee"}),e.jsx("text",{x:"225",y:"90",fill:"#cbd5e1",fontSize:"8",children:"• Performs balance"}),e.jsx("text",{x:"225",y:"105",fill:"#cbd5e1",fontSize:"8",children:"deduction"}),e.jsx("rect",{x:"420",y:"0",width:"190",height:"240",rx:"6",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"435",y:"30",fill:"#fda4af",fontSize:"11 font-bold",children:"3. Exception Caught"}),e.jsx("text",{x:"435",y:"60",fill:"#fca5a5",fontSize:"8 font-mono",children:"except Discrepancy:"}),e.jsx("text",{x:"445",y:"80",fill:"#fda4af",fontSize:"8 font-mono",children:"acc.bal = orig_bal"}),e.jsx("text",{x:"435",y:"110",fill:"#cbd5e1",fontSize:"8",children:"• Restores balance"}),e.jsx("text",{x:"435",y:"125",fill:"#cbd5e1",fontSize:"8",children:"instantly!"}),e.jsx("rect",{x:"630",y:"0",width:"190",height:"240",rx:"6",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"645",y:"30",fill:"#a7f3d0",fontSize:"11 font-bold",children:"4. Audit & Raise"}),e.jsx("text",{x:"645",y:"60",fill:"#ecfdf5",fontSize:"8 font-mono",children:"logger.error(...)"}),e.jsx("text",{x:"645",y:"80",fill:"#34d399",fontSize:"8 font-mono",children:"raise"}),e.jsx("text",{x:"645",y:"110",fill:"#cbd5e1",fontSize:"8",children:"• Zero corrupted data"}),e.jsx("text",{x:"645",y:"125",fill:"#cbd5e1",fontSize:"8",children:"in database!"})]})]})})]}),e.jsxs("section",{ref:i,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Resilient Billing Engine & Rollback Playground"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Execute fee deductions against the defensive ledger to test fail-fast guards, boundary validation, and automatic atomic rollbacks:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"Transaction Parameters"}),e.jsx("button",{onClick:E,className:"text-[11px] font-mono text-slate-400 hover:text-white underline",children:"Reset Ledger"})]}),e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-xs text-slate-400 font-mono",children:"Active Student Balance:"}),e.jsxs("div",{className:"text-xl font-bold text-teal-300 font-mono mt-0.5",children:["INR ",a.toLocaleString("en-IN",{minimumFractionDigits:2})]})]}),r.rollbackTriggered&&e.jsx("span",{className:"text-xs font-mono px-2 py-1 bg-rose-950 text-rose-300 border border-rose-700 rounded animate-pulse",children:"ROLLBACK EXECUTED"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"text-xs font-mono text-slate-400 block",children:"Student ID (Must start with 'STU-'):"}),e.jsx("input",{type:"text",value:x,onChange:t=>m(t.target.value),className:"w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs font-mono text-white focus:border-teal-500 focus:outline-none"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"text-xs font-mono text-slate-400 block",children:"Student Name:"}),e.jsx("input",{type:"text",value:p,onChange:t=>h(t.target.value),className:"w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs font-mono text-white focus:border-teal-500 focus:outline-none"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[e.jsx("span",{className:"text-slate-400",children:"Tuition Deduction Amount:"}),e.jsxs("span",{className:"text-teal-300 font-bold",children:["INR ",s.toLocaleString()]})]}),e.jsx("input",{type:"range",min:"5000",max:"40000",step:"5000",value:s,onChange:t=>b(Number(t.target.value)),className:"w-full accent-teal-500"})]}),e.jsx("button",{onClick:v,className:"w-full py-2.5 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-lg text-xs font-mono transition-all shadow-lg shadow-teal-950/50",children:"Execute Atomic Deduction (execute_atomic_tuition_deduction())"})]}),e.jsxs("div",{className:"space-y-3 flex flex-col justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block font-bold",children:"Defensive Telemetry & Rollback Audit Log"}),e.jsxs("div",{className:d("p-4 rounded-xl border flex-1 space-y-2.5 text-xs font-mono",r.status==="SUCCESS"?"bg-slate-900 border-slate-800":r.status==="IDLE"?"bg-slate-900 border-slate-800 text-slate-400":"bg-rose-950/40 border-rose-800"),children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-slate-400",children:"Transaction Status: "}),e.jsx("span",{className:d("font-bold",r.status==="SUCCESS"?"text-emerald-400":r.status==="IDLE"?"text-slate-400":"text-rose-400"),children:r.status==="SUCCESS"?"✓ COMMITTED (200 OK)":r.status==="IDLE"?"IDLE":"❌ ABORTED & ROLLED BACK"})]}),e.jsx("div",{className:"pt-2 border-t border-slate-800 text-slate-300 leading-relaxed text-[11px]",children:r.message}),r.auditTrail.length>0&&e.jsxs("div",{className:"pt-2 border-t border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-slate-400 block text-[10px] uppercase font-bold",children:"Forensic Audit Trail:"}),r.auditTrail.map((t,n)=>e.jsxs("div",{className:"text-[11px] text-teal-300 flex gap-2",children:[e.jsxs("span",{className:"text-slate-500",children:["[",t.time,"]"]}),e.jsx("span",{children:t.event})]},n))]})]})]})]})]}),e.jsxs("section",{ref:i,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Defensive Exception Handling Architecture Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Pattern / Strategy"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Python Code Template"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Key Architectural Advantage"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Avoided Anti-Pattern"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"Guard Clauses"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"if not valid: raise Error"}),e.jsx("td",{className:"py-3 px-4",children:"Flattens code, fails fast at entry point"}),e.jsx("td",{className:"py-3 px-4 text-rose-300",children:"Pyramid of Doom (Deep nesting)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"EAFP Access"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"try: data[k] except KeyError:"}),e.jsx("td",{className:"py-3 px-4",children:"Faster happy path, eliminates TOCTOU races"}),e.jsx("td",{className:"py-3 px-4 text-rose-300",children:"LBYL multi-lookup race conditions"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Atomic Rollback"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"except Exception: state = orig; raise"}),e.jsx("td",{className:"py-3 px-4",children:"Guarantees data integrity on failure"}),e.jsx("td",{className:"py-3 px-4 text-rose-300",children:"Half-mutated corrupted records"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"Forensic Logging"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:'logger.exception("Failed: ...")'}),e.jsx("td",{className:"py-3 px-4",children:"Automatic complete stack trace telemetry"}),e.jsx("td",{className:"py-3 px-4 text-rose-300",children:"Silent swallow (except: pass)"})]})]})]})})]}),e.jsxs("section",{ref:i,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating fail-fast guard clauses, exception logging best practices, defensive contracts, and resilient financial engines:"}),e.jsx(N,{files:[{filename:"fail_fast_design_patterns.py",code:j,description:"Fail-Fast architecture, guard clauses vs pyramid of doom, and boundary input validation."},{filename:"exception_logging_and_auditing_best_practices.py",code:T,description:"Silent swallow anti-pattern hazards, forensic logging with logger.exception(), and graceful degradation."},{filename:"defensive_programming_contracts.py",code:A,description:"EAFP vs LBYL performance, TOCTOU race hazard elimination, and defensive class invariants."},{filename:"enterprise_resilient_financial_engine.py",code:k,description:"Enterprise Resilient Educational Ledger Engine with atomic rollbacks, domain exceptions, and logging."}]})]}),e.jsxs("section",{ref:i,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Silent Swallow (`except: pass`)"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Catching errors and doing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"pass"})," creates silent failures, masking database corruption and data loss from operators."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always log, re-raise, or enqueue to fallback buffers."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Giant 200-Line Try Blocks"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Wrapping entire functions in a single try block makes it impossible to know which line failed and accidentally catches unrelated bugs."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Keep try blocks tight, focused, and small."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Catching BaseException"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-purple-300 font-mono",children:"except BaseException:"})," intercepts ",e.jsx("code",{className:"text-purple-300 font-mono",children:"KeyboardInterrupt"})," (Ctrl+C), preventing users from terminating hanging tasks."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Catch ",e.jsx("code",{className:"text-emerald-300",children:"Exception"})," instead."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Non-Atomic State Mutations"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Mutating state without taking a snapshot means that if step 2 of a calculation fails, the database is left in a corrupted half-updated state."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always implement atomic rollback handlers on exception."]})]})]})]}),e.jsxs("section",{ref:i,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive capstone question-and-answer repository covering exception handling best practices, defensive coding, and EAFP vs LBYL:"}),e.jsx(w,{questions:C})]}),e.jsxs("section",{ref:i,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete capstone reference sheet with cardinal rules, defensive blueprints, and rollback recipes:"}),e.jsx("div",{className:"mb-10",children:e.jsx(_,{content:I,filename:"python_topic12_exception_best_practices_notes.txt",title:"Print Topic 12 Study Notes"})}),e.jsx(S,{})]})]})]})}export{V as default};
