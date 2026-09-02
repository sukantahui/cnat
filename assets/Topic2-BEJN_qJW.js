import{b as c,j as e,bg as a}from"./vendor-react-core-Doz9nIC6.js";import{P as p}from"./PythonFileLoader-hCi5osN-.js";import{P as b}from"./PlainTextPrint-C08xhKA4.js";import{F as y}from"./FAQTemplate-BHhlgA96.js";import{T as _}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const N=`"""\r
# Module: 004_004_capstone-projects\r
# Topic 2: Configuring logging, error handling, and modular CLI / GUI interfaces\r
# File: logging_configuration_and_rotating_handlers.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating enterprise logging configuration, rotating file handlers,\r
#              custom formatters, and log levels.\r
"""\r
\r
import logging\r
from logging.handlers import RotatingFileHandler\r
from pathlib import Path\r
import tempfile\r
\r
def setup_production_logger(name: str, log_file: Path, log_level: int = logging.INFO) -> logging.Logger:\r
    """Configures a production logger with console and rotating file outputs."""\r
    logger = logging.getLogger(name)\r
    logger.setLevel(log_level)\r
    logger.propagate = False\r
\r
    # Prevent duplicate handlers if re-initialized\r
    if logger.hasHandlers():\r
        logger.handlers.clear()\r
\r
    # Formatter: [TIMESTAMP] [LEVEL] [LOGGER] MESSAGE\r
    formatter = logging.Formatter(\r
        fmt="%(asctime)s [%(levelname)-8s] (%(name)s) %(message)s",\r
        datefmt="%Y-%m-%d %H:%M:%S"\r
    )\r
\r
    # 1. Console Stream Handler\r
    console_handler = logging.StreamHandler()\r
    console_handler.setLevel(log_level)\r
    console_handler.setFormatter(formatter)\r
    logger.addHandler(console_handler)\r
\r
    # 2. Rotating File Handler (Max 1MB per file, keep 3 backups)\r
    log_file.parent.mkdir(parents=True, exist_ok=True)\r
    file_handler = RotatingFileHandler(\r
        filename=log_file,\r
        maxBytes=1_000_000,\r
        backupCount=3,\r
        encoding="utf-8"\r
    )\r
    file_handler.setLevel(logging.DEBUG)  # Log deeper diagnostics to file\r
    file_handler.setFormatter(formatter)\r
    logger.addHandler(file_handler)\r
\r
    return logger\r
\r
def test_logger_workflow():\r
    print("   [...] Testing Production Logging & Rotating Handlers...")\r
    with tempfile.TemporaryDirectory() as tmpdir:\r
        log_path = Path(tmpdir) / "institutional.log"\r
        logger = setup_production_logger("institutional_manager.admission", log_path, logging.INFO)\r
\r
        # Emit log messages across severity levels\r
        logger.debug("Debug diagnostic: Parsing student marks payload") # Suppressed on console (INFO level)\r
        logger.info("Student 'Mamata' enrolled at Barrackpore Campus.")\r
        logger.warning("Tuition fee discount exceeded standard 30% threshold (Applied: 35%).")\r
        logger.error("Payment settlement gateway timeout for Student ID: STU_CC_02")\r
\r
        # Verify file output\r
        assert log_path.exists()\r
        with open(log_path, "r", encoding="utf-8") as f:\r
            content = f.read()\r
\r
        assert "Student 'Mamata' enrolled" in content\r
        assert "Payment settlement gateway timeout" in content\r
        print("   [PASS] 1. Console & File logging handlers verified successfully")\r
        print(f"   [PASS] 2. Log file created: {log_path.name} ({len(content.splitlines())} lines written)")\r
\r
        # Close all handlers cleanly before exiting TemporaryDirectory (Windows file lock release)\r
        for h in list(logger.handlers):\r
            h.close()\r
            logger.removeHandler(h)\r
\r
def main():\r
    print("=" * 75)\r
    print("[ENTERPRISE LOGGING] Rotating Handlers & Structured Formatters")\r
    print("=" * 75)\r
\r
    test_logger_workflow()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] RotatingFileHandlers prevent disk exhaustion while capturing")\r
    print("           vital operational milestones and exception tracebacks in production.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,S=`"""\r
# Module: 004_004_capstone-projects\r
# Topic 2: Configuring logging, error handling, and modular CLI / GUI interfaces\r
# File: custom_exception_hierarchy_and_handling.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating structured domain exception hierarchies, error codes,\r
#              and exception chaining.\r
"""\r
\r
from typing import Any, Optional\r
\r
# ------------------------------------------------------------------------------\r
# 1. BASE DOMAIN EXCEPTION\r
# ------------------------------------------------------------------------------\r
class InstitutionalError(Exception):\r
    """Root base exception for all institutional management domain errors."""\r
    def __init__(self, message: str, code: str = "GENERIC_INSTITUTIONAL_ERROR", payload: Optional[dict[str, Any]] = None):\r
        super().__init__(message)\r
        self.message = message\r
        self.code = code\r
        self.payload = payload or {}\r
\r
    def to_dict(self) -> dict[str, Any]:\r
        return {\r
            "error": self.__class__.__name__,\r
            "code": self.code,\r
            "message": self.message,\r
            "payload": self.payload\r
        }\r
\r
# ------------------------------------------------------------------------------\r
# 2. SPECIFIC SUB-EXCEPTIONS\r
# ------------------------------------------------------------------------------\r
class StudentNotFoundError(InstitutionalError):\r
    def __init__(self, sid: str):\r
        super().__init__(\r
            message=f"Student record with ID '{sid}' does not exist.",\r
            code="STUDENT_NOT_FOUND",\r
            payload={"sid": sid}\r
        )\r
\r
class DuplicateEnrollmentError(InstitutionalError):\r
    def __init__(self, sid: str, existing_name: str):\r
        super().__init__(\r
            message=f"Student ID '{sid}' is already assigned to '{existing_name}'.",\r
            code="DUPLICATE_ENROLLMENT",\r
            payload={"sid": sid, "existing_name": existing_name}\r
        )\r
\r
class InsufficientFundsError(InstitutionalError):\r
    def __init__(self, sid: str, required_amount: float, available_balance: float):\r
        super().__init__(\r
            message=f"Payment of Rs. {required_amount:,.2f} exceeds outstanding debt of Rs. {available_balance:,.2f}.",\r
            code="INSUFFICIENT_FUNDS",\r
            payload={"sid": sid, "required_amount": required_amount, "available_balance": available_balance}\r
        )\r
\r
# ------------------------------------------------------------------------------\r
# 3. VERIFICATION & EXCEPTION HANDLING\r
# ------------------------------------------------------------------------------\r
def test_exception_hierarchy():\r
    print("   [...] Testing Domain Exception Hierarchy & Payloads...")\r
\r
    # 1. Catching specific error\r
    try:\r
        raise StudentNotFoundError("STU_BP_99")\r
    except StudentNotFoundError as err:\r
        assert err.code == "STUDENT_NOT_FOUND"\r
        assert err.payload["sid"] == "STU_BP_99"\r
        print(f"   [PASS] 1. Specific Catch: [{err.code}] {err.message}")\r
\r
    # 2. Polymorphic Catch using base class\r
    try:\r
        raise InsufficientFundsError("STU_BP_01", 30000.0, 10000.0)\r
    except InstitutionalError as base_err:\r
        err_dict = base_err.to_dict()\r
        assert err_dict["code"] == "INSUFFICIENT_FUNDS"\r
        assert err_dict["payload"]["required_amount"] == 30000.0\r
        print(f"   [PASS] 2. Base Catch: Structured JSON Payload -> {err_dict}")\r
\r
def main():\r
    print("=" * 75)\r
    print("[CUSTOM EXCEPTIONS] Domain Hierarchies, Error Codes & Structured Payloads")\r
    print("=" * 75)\r
\r
    test_exception_hierarchy()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Structured domain exceptions provide clean, typed error channels")\r
    print("           that communicate exact failure reasons to API/CLI consumers.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,j=`"""\r
# Module: 004_004_capstone-projects\r
# Topic 2: Configuring logging, error handling, and modular CLI / GUI interfaces\r
# File: modular_cli_interface_argparse_click.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating modular CLI architecture with argparse subcommands,\r
#              formatted tables, and POSIX exit codes.\r
"""\r
\r
import argparse\r
import sys\r
from typing import Optional\r
\r
def build_cli_parser() -> argparse.ArgumentParser:\r
    """Builds an enterprise CLI parser with subcommands and detailed help menus."""\r
    parser = argparse.ArgumentParser(\r
        prog="campus-cli",\r
        description="Institutional Student & Fee Management Administrative CLI Hub",\r
        epilog="Coder & Accotax • Educational Tutorial Series (Barrackpore, Kolkata)"\r
    )\r
    parser.add_argument("-v", "--verbose", action="store_true", help="Enable verbose debug logging")\r
\r
    subparsers = parser.add_subparsers(dest="command", required=True, help="Administrative subcommands")\r
\r
    # 1. 'enroll' subcommand\r
    enroll_p = subparsers.add_parser("enroll", help="Enroll a new student dossier")\r
    enroll_p.add_argument("--sid", required=True, help="Unique Student Registration ID (e.g. STU_BP_01)")\r
    enroll_p.add_argument("--name", required=True, help="Full Student Name")\r
    enroll_p.add_argument("--campus", default="Barrackpore", choices=["Barrackpore", "Kolkata", "Ichapur", "Jadavpur"], help="Campus location")\r
    enroll_p.add_argument("--fee", type=float, required=True, help="Base tuition fee (INR)")\r
\r
    # 2. 'pay' subcommand\r
    pay_p = subparsers.add_parser("pay", help="Record tuition installment payment")\r
    pay_p.add_argument("--sid", required=True, help="Student Registration ID")\r
    pay_p.add_argument("--amount", type=float, required=True, help="Payment amount (INR)")\r
    pay_p.add_argument("--memo", default="Tuition Installment", help="Payment memo / transaction reference")\r
\r
    # 3. 'report' subcommand\r
    report_p = subparsers.add_parser("report", help="Generate formatted ledger balance report")\r
    report_p.add_argument("--campus", default=None, help="Optional campus filter")\r
\r
    return parser\r
\r
def execute_cli_command(args: argparse.Namespace) -> int:\r
    """Executes the parsed command and returns standard POSIX exit codes."""\r
    if args.command == "enroll":\r
        print(f"   [CLI SUCCESS] Enrolled student '{args.name}' (ID: {args.sid}) at {args.campus} Campus.")\r
        print(f"                 Tuition Fee: Rs. {args.fee:,.2f}")\r
        return 0\r
    elif args.command == "pay":\r
        if args.amount <= 0:\r
            print(f"   [CLI ERROR] Payment amount must be positive. Got: {args.amount}", file=sys.stderr)\r
            return 1\r
        print(f"   [CLI SUCCESS] Payment of Rs. {args.amount:,.2f} recorded for {args.sid} ({args.memo}).")\r
        return 0\r
    elif args.command == "report":\r
        print("   +------------+------------+---------------+----------------+")\r
        print("   | Student ID | Name       | Campus        | Net Balance    |")\r
        print("   +------------+------------+---------------+----------------+")\r
        print("   | STU_BP_01  | Mamata     | Barrackpore   | Rs.   8,000.00 |")\r
        print("   | STU_CC_01  | Mahima     | Kolkata       | Rs.  12,500.00 |")\r
        print("   | STU_IC_01  | Abhronila  | Ichapur       | Rs.       0.00 |")\r
        print("   +------------+------------+---------------+----------------+")\r
        return 0\r
    return 1\r
\r
def main():\r
    print("=" * 75)\r
    print("[MODULAR CLI] Subcommand Dispatcher & Formatted Output")\r
    print("=" * 75)\r
\r
    parser = build_cli_parser()\r
\r
    # Simulate: campus-cli enroll --sid STU_BP_01 --name Mamata --fee 20000\r
    args_enroll = parser.parse_args(["enroll", "--sid", "STU_BP_01", "--name", "Mamata", "--fee", "20000"])\r
    exit_code_1 = execute_cli_command(args_enroll)\r
    assert exit_code_1 == 0\r
\r
    # Simulate: campus-cli report\r
    args_report = parser.parse_args(["report"])\r
    exit_code_2 = execute_cli_command(args_report)\r
    assert exit_code_2 == 0\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Standard subcommands, input choices, and POSIX exit codes")\r
    print("           turn internal Python scripts into powerful terminal tools.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,E=`"""\r
# Module: 004_004_capstone-projects\r
# Topic 2: Configuring logging, error handling, and modular CLI / GUI interfaces\r
# File: institutional_cli_and_logging_case_study.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: End-to-end administrative management CLI and logging engine case study\r
#              coordinating custom exceptions, audit trails, and multi-campus operations.\r
"""\r
\r
import logging\r
from dataclasses import dataclass\r
from typing import Optional\r
\r
# Set up dedicated audit logger\r
audit_logger = logging.getLogger("institutional.audit")\r
audit_logger.setLevel(logging.INFO)\r
audit_handler = logging.StreamHandler()\r
audit_handler.setFormatter(logging.Formatter("[AUDIT] %(asctime)s - %(message)s", datefmt="%H:%M:%S"))\r
if not audit_logger.hasHandlers():\r
    audit_logger.addHandler(audit_handler)\r
\r
@dataclass\r
class StudentProfile:\r
    sid: str\r
    name: str\r
    campus: str\r
    balance: float\r
\r
class InstitutionalCLIController:\r
    """Production CLI controller handling business dispatch, logging, and error handling."""\r
    def __init__(self):\r
        self.students: dict[str, StudentProfile] = {}\r
\r
    def handle_enrollment(self, sid: str, name: str, campus: str, base_fee: float) -> str:\r
        if sid in self.students:\r
            raise KeyError(f"Student '{sid}' already registered.")\r
        if base_fee <= 0:\r
            raise ValueError("Tuition fee must be strictly positive.")\r
\r
        # Enroll student\r
        student = StudentProfile(sid, name, campus, balance=base_fee)\r
        self.students[sid] = student\r
\r
        # Record security audit trail\r
        audit_logger.info("ENROLL_SUCCESS | SID: %s | NAME: %s | CAMPUS: %s | FEE: Rs. %.2f",\r
                          sid, name, campus, base_fee)\r
        return f"Successfully enrolled {name} at {campus} (Balance: Rs. {base_fee:,.2f})"\r
\r
    def handle_payment(self, sid: str, amount: float, memo: str) -> str:\r
        if sid not in self.students:\r
            raise KeyError(f"Student ID '{sid}' not found.")\r
        if amount <= 0:\r
            raise ValueError("Payment amount must be positive.")\r
        \r
        student = self.students[sid]\r
        if amount > student.balance:\r
            raise ValueError(f"Payment Rs. {amount:,.2f} exceeds outstanding balance Rs. {student.balance:,.2f}.")\r
\r
        student.balance -= amount\r
        audit_logger.info("PAYMENT_RECORDED | SID: %s | AMOUNT: Rs. %.2f | MEMO: %s | REMAINING: Rs. %.2f",\r
                          sid, amount, memo, student.balance)\r
        return f"Payment of Rs. {amount:,.2f} processed. Remaining balance: Rs. {student.balance:,.2f}"\r
\r
def test_institutional_cli_suite():\r
    print("   [...] Running Institutional CLI & Logging Test Suite...")\r
    controller = InstitutionalCLIController()\r
\r
    # 1. Enroll Mamata at Barrackpore\r
    res1 = controller.handle_enrollment("STU_BP_01", "Mamata", "Barrackpore", 25000.0)\r
    assert "Successfully enrolled" in res1\r
    print("   [PASS] 1. Mamata enrollment handled & logged to audit stream")\r
\r
    # 2. Record Partial Payment\r
    res2 = controller.handle_payment("STU_BP_01", 15000.0, "Installment 1 - UPI")\r
    assert "Remaining balance: Rs. 10,000.00" in res2\r
    print("   [PASS] 2. Partial payment handled: Balance reduced to Rs. 10,000")\r
\r
    # 3. Test Overpayment Rejection\r
    try:\r
        controller.handle_payment("STU_BP_01", 20000.0, "Overpayment attempt")\r
        assert False, "Expected ValueError on overpayment"\r
    except ValueError as err:\r
        assert "exceeds outstanding balance" in str(err)\r
        print("   [PASS] 3. Overpayment rejected safely via domain validation")\r
\r
def main():\r
    print("=" * 80)\r
    print("[CASE STUDY] Complete Institutional Administrative CLI & Logging Engine")\r
    print("=" * 80)\r
\r
    test_institutional_cli_suite()\r
\r
    print("=" * 80)\r
    print("[TAKEAWAY] Combining structured error handling, rotating audit logs,")\r
    print("           and modular CLI controllers provides rock-solid administrative tools.")\r
    print("=" * 80)\r
\r
if __name__ == "__main__":\r
    main()\r
`,I=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 4: PRO LEVEL • MODULE 004_004: CAPSTONE PROJECTS\r
           TOPIC 2: CONFIGURING LOGGING, ERROR HANDLING & MODULAR CLI INTERFACES\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. ENTERPRISE LOGGING STANDARDS\r
--------------------------------------------------------------------------------\r
  1. Standard Log Levels:\r
     - DEBUG (10): Detailed diagnostic information for developers\r
     - INFO (20): Normal confirmation of application operations\r
     - WARNING (30): Unexpected events that did not halt execution\r
     - ERROR (40): Operation failed due to an error (e.g. payment failed)\r
     - CRITICAL (50): Severe crash or outage requiring immediate alert\r
\r
  2. Rotating File Handlers:\r
     from logging.handlers import RotatingFileHandler\r
     handler = RotatingFileHandler("app.log", maxBytes=5_000_000, backupCount=5)\r
\r
--------------------------------------------------------------------------------\r
2. CUSTOM EXCEPTION HIERARCHY\r
--------------------------------------------------------------------------------\r
  class InstitutionalError(Exception):\r
      """Base exception for all domain errors."""\r
      def __init__(self, message: str, code: str = "GENERIC_ERROR"):\r
          super().__init__(message)\r
          self.code = code\r
\r
  class StudentNotFoundError(InstitutionalError):\r
      def __init__(self, sid: str):\r
          super().__init__(f"Student '{sid}' not found.", code="STUDENT_NOT_FOUND")\r
\r
--------------------------------------------------------------------------------\r
3. MODULAR CLI WITH SUBCOMMANDS (ARGPARSE)\r
--------------------------------------------------------------------------------\r
  parser = argparse.ArgumentParser(prog="campus-cli", description="Campus Manager")\r
  subparsers = parser.add_subparsers(dest="command", required=True)\r
  \r
  # enroll sub-command\r
  enroll_parser = subparsers.add_parser("enroll", help="Enroll a new student")\r
  enroll_parser.add_argument("--name", required=True, help="Student Name")\r
  enroll_parser.add_argument("--campus", default="Barrackpore", help="Campus")\r
\r
================================================================================\r
       END OF STUDY NOTE • TOPIC 2: LOGGING, ERROR HANDLING & CLI\r
================================================================================\r
`,v=[{question:"Why is Python's standard 'logging' module preferred over 'print()' statements in production applications?",shortAnswer:"The 'logging' module provides severity levels (DEBUG to CRITICAL), structured formatting with timestamps and module names, destination routing (console, rotating files, remote syslog), and dynamic log level filtering without modifying code.",explanation:"Production logging advantages over amateur print debugging.",hint:"Provides severity levels, timestamps, rotating files, and dynamic filtering.",level:"basic",codeExample:`import logging
logger = logging.getLogger(__name__)
logger.info('Student enrolled successfully')`},{question:"What are the 5 standard logging levels in Python and their numerical hierarchy?",shortAnswer:"1. DEBUG (10), 2. INFO (20), 3. WARNING (30), 4. ERROR (40), and 5. CRITICAL (50). Setting a logger to INFO automatically suppresses DEBUG messages.",explanation:"The 5 standard Python logging severity levels.",hint:"DEBUG (10), INFO (20), WARNING (30), ERROR (40), CRITICAL (50).",level:"basic",codeExample:"logging.basicConfig(level=logging.INFO) # DEBUG ignored"},{question:"What is a 'RotatingFileHandler' and why is it essential for long-running servers?",shortAnswer:"A 'RotatingFileHandler' automatically rolls over log files when they reach a maximum byte threshold (e.g. 5MB), keeping a fixed number of historical backup files (e.g. 'app.log.1', 'app.log.2') to prevent application logs from consuming all server disk space.",explanation:"Disk space exhaustion defense via rotating log handlers.",hint:"Rotates log files when they reach maxBytes to prevent disk space exhaustion.",level:"basic",codeExample:`from logging.handlers import RotatingFileHandler
handler = RotatingFileHandler('app.log', maxBytes=5_000_000, backupCount=5)`},{question:"Why should you create a domain-specific custom Exception hierarchy in enterprise Python applications?",shortAnswer:"A domain exception hierarchy (e.g. inheriting from 'class InstitutionalError(Exception)') allows calling code to catch specific business errors (like 'StudentNotFoundError' or 'InsufficientFundsError') while providing structured error codes and user-friendly messages.",explanation:"Domain exception design and structured error categorization.",hint:"Inheriting from a base domain exception allows clean, categorized error handling.",level:"moderate",codeExample:`class InstitutionalError(Exception): pass
class StudentNotFoundError(InstitutionalError): pass`},{question:"How do you capture full exception tracebacks in logs when an unexpected error occurs?",shortAnswer:`Use 'logger.exception("Error message")' or pass 'exc_info=True' to 'logger.error()', which automatically appends the complete Python exception traceback to the log entry.`,explanation:"Traceback logging via logger.exception and exc_info.",hint:"Use logger.exception('message') inside an except block to log full tracebacks.",level:"basic",codeExample:`try:
    enroll()
except Exception:
    logger.exception('Failed to enroll student')`},{question:"What is 'argparse.ArgumentParser' and how do sub-commands work (e.g. 'git commit', 'campus-cli enroll')?",shortAnswer:"'argparse.ArgumentParser' is Python's standard library tool for parsing CLI arguments; using 'parser.add_subparsers()' allows dividing a CLI tool into distinct operational sub-commands, each with its own arguments, flags, and handler functions.",explanation:"Sub-command CLI architectures in standard Python.",hint:"add_subparsers() creates modular subcommands like enroll, pay, and report.",level:"moderate",codeExample:`subparsers = parser.add_subparsers(dest='command')
enroll_p = subparsers.add_parser('enroll')`},{question:"What are POSIX standard exit codes and why should Python CLI scripts return them (sys.exit(0) vs sys.exit(1))?",shortAnswer:"Exit code 0 signals success, while non-zero exit codes (1-255) signal specific errors; this allows shell scripts, CI/CD pipelines, and orchestrators (Docker, Kubernetes) to reliably detect script success or failure.",explanation:"Process exit code standards in operating systems.",hint:"sys.exit(0) for success; sys.exit(1) for error, enabling CI/CD status checks.",level:"basic",codeExample:`import sys
sys.exit(0) # Success | sys.exit(1) # Error`},{question:"Why should you name module loggers using 'logging.getLogger(__name__)'?",shortAnswer:"Using '__name__' automatically creates a hierarchical logger named after the module's dot-separated package path (e.g. 'institutional_manager.services.admission'), allowing granular log filtering per package.",explanation:"Hierarchical logger naming convention.",hint:"Automatically names the logger after the current module path for hierarchical filtering.",level:"basic",codeExample:"logger = logging.getLogger(__name__)"},{question:"What is the danger of a 'bare except:' or 'except Exception: pass' block in production code?",shortAnswer:"Swallowing exceptions silently hides critical bugs, memory errors, or system exit signals (KeyboardInterrupt/SystemExit), making the application fail unpredictably without any trace in the logs.",explanation:"Exception swallowing and silent failure hazards.",hint:"Hides critical defects and makes debugging impossible; always log or handle exceptions.",level:"basic",codeExample:`# ANTI-PATTERN: try: ... except: pass
# BEST PRACTICE: except InstitutionalError as e: logger.error(e)`},{question:"What is 'Exception Chaining' ('raise NewError() from orig_error') in Python 3?",shortAnswer:"Exception chaining explicitly links a high-level domain error to the underlying lower-level cause (e.g. wrapping an sqlite3.OperationalError into a DatabaseConnectionError), preserving the original traceback for debugging.",explanation:"Explicit exception chaining with the 'from' keyword.",hint:"Use 'raise CustomError() from original_error' to preserve the underlying traceback.",level:"moderate",codeExample:`except sqlite3.Error as e:
    raise StorageError('Database failed') from e`},{question:"How can you format log records as structured JSON in modern cloud-native architectures?",shortAnswer:"By implementing a custom 'logging.Formatter' that converts the 'LogRecord' into a dictionary (timestamp, level, message, module, process) and serializes it with 'json.dumps()', enabling automated parsing by tools like Datadog, ELK, or CloudWatch.",explanation:"Structured JSON logging for centralized cloud observability.",hint:"Subclass logging.Formatter to output json.dumps(record_dict) for log aggregators.",level:"complex",codeExample:`class JSONFormatter(logging.Formatter):
    def format(self, record): return json.dumps({'msg': record.getMessage()})`},{question:"What is the difference between 'logging.basicConfig()' and configuring custom handlers?",shortAnswer:"'basicConfig()' is a quick one-line setup for the root logger; production applications should explicitly instantiate loggers, formatters, and handlers (e.g. StreamHandler, RotatingFileHandler) or use 'logging.config.dictConfig()'.",explanation:"Basic vs production logger configuration.",hint:"basicConfig is a simple root setup; production apps use dictConfig or custom handlers.",level:"moderate",codeExample:"logging.config.dictConfig(logging_config_dictionary)"},{question:"How do you create optional flags vs positional arguments in 'argparse'?",shortAnswer:"Arguments prefixed with '--' (e.g. '--campus', '-c') are optional flags (with defaults), while arguments without '--' (e.g. 'student_id') are required positional arguments.",explanation:"Positional vs optional flag arguments in argparse.",hint:"Prefix with '--' for optional flags; omit '--' for required positional arguments.",level:"basic",codeExample:`parser.add_argument('sid') # Positional
parser.add_argument('--campus', default='BP') # Flag`},{question:"What is the role of a 'Global Exception Boundary' in a CLI or desktop application?",shortAnswer:"A top-level try/except block (or 'sys.excepthook') at the application entrypoint that catches unhandled exceptions, logs the full diagnostic traceback, and displays a polite, human-readable error message to the user before cleanly exiting.",explanation:"Top-level crash recovery and graceful error presentation.",hint:"Catches any unhandled error at the top level, logs it, and shows a clean message.",level:"moderate",codeExample:`def main():
    try: run_app()
    except Exception as e: logger.critical(e); sys.exit(1)`},{question:"Why should sensitive data (passwords, payment tokens) never be printed or logged?",shortAnswer:"Logging sensitive credentials stores plain-text secrets in log files, exposing them to log aggregators, developers, and unauthorized users, violating compliance standards (PCI-DSS, GDPR).",explanation:"Log sanitization and security hygiene.",hint:"Logging passwords leaks plain-text secrets; always sanitize or redact sensitive data.",level:"basic",codeExample:"# Sanitize: logger.info('Card charged: ****-****-****-%s', card[-4:])"},{question:"What is the difference between 'logger.info()' and 'logger.debug()' in terms of production volume?",shortAnswer:"'INFO' logs high-level milestone events (e.g. service started, payment processed) and runs continuously in production; 'DEBUG' logs high-volume granular details (e.g. loop iterations, raw payloads) and is enabled only during troubleshooting.",explanation:"Log volume management and production performance.",hint:"INFO logs major events; DEBUG logs high-volume details for troubleshooting.",level:"basic",codeExample:"# INFO for milestones, DEBUG for deep troubleshooting"},{question:"How do you add color and formatted tables to Python CLI applications?",shortAnswer:"Using standard ANSI escape codes or modern libraries like 'rich' (e.g. 'rich.table.Table', 'rich.console.Console') to render beautiful colored tables, progress bars, and panels.",explanation:"Modern terminal user interface formatting.",hint:"Use the 'rich' library or ANSI escape codes to render styled tables and panels.",level:"basic",codeExample:`from rich.console import Console
console = Console()
console.print('[green]Success![/green]')`},{question:"How do you prompt users for interactive confirmation before dangerous operations in a CLI (e.g. deleting student records)?",shortAnswer:`Use 'input("Are you sure? (y/N): ").strip().lower() in ('y', 'yes')' or rich/click confirmation prompts before executing irreversible mutations.`,explanation:"Defensive CLI confirmation patterns.",hint:"Use input() prompt or Click confirmation prompt before irreversible actions.",level:"basic",codeExample:"if input('Delete student? (y/N): ').lower() == 'y': repo.delete(sid)"},{question:"What is an 'Audit Log' and how does it differ from standard application logs?",shortAnswer:"An audit log is an immutable, append-only record of security-critical business actions (who performed what action, on which student ID, at what timestamp, from what IP/terminal), retained for legal and compliance auditing.",explanation:"Audit trail logging vs operational error logging.",hint:"Immutable log of security-critical business events for compliance and tracking.",level:"moderate",codeExample:"audit_logger.info('USER: admin | ACTION: FEE_OVERRIDE | TARGET: STU_BP_01 | AMT: 5000')"},{question:"What is the ultimate golden rule of logging, error handling, and CLI design?",shortAnswer:"Never use 'print()' for system diagnostics, use hierarchical loggers with rotating handlers, structure custom exception hierarchies with status codes, catch errors at top-level boundaries, and return standard POSIX exit codes.",explanation:"The complete enterprise Python CLI and observability standard.",hint:"Rotating loggers + custom exceptions + top-level boundaries + POSIX exit codes.",level:"basic",codeExample:"# Enterprise Python Logging & CLI Standard"}];function F(){const g=c.useRef([]),[s,x]=c.useState("loggingPipeline"),[o,h]=c.useState("ENROLL"),[i,f]=c.useState("INFO");let l=`campus-cli enroll --sid STU_BP_01 --name Mamata --campus Barrackpore --fee 25000
[SUCCESS] Enrolled Mamata at Barrackpore Campus (Tuition: Rs. 25,000.00)`,d="2026-08-25 11:46:00 [INFO    ] (institutional.admission) Student 'Mamata' enrolled at Barrackpore Campus.",n=0;o==="ENROLL"?(l=`$ campus-cli enroll --sid STU_BP_01 --name Mamata --campus Barrackpore --fee 25000
[SUCCESS] Enrolled Mamata (ID: STU_BP_01) at Barrackpore Campus.
          Base Tuition: Rs. 25,000.00 | Status: ACTIVE`,d=`2026-08-25 11:46:00 [${i.padEnd(8," ")}] (institutional.admission) Student 'Mamata' enrolled at Barrackpore Campus.`,n=0):o==="PAY"?(l=`$ campus-cli pay --sid STU_BP_01 --amount 15000 --memo 'Installment 1 - UPI'
[SUCCESS] Payment of Rs. 15,000.00 recorded for STU_BP_01.
          Remaining Balance: Rs. 10,000.00`,d=`2026-08-25 11:46:05 [${i.padEnd(8," ")}] (institutional.ledger) Payment recorded: STU_BP_01 | Rs. 15,000.00 | Remaining: Rs. 10,000.00`,n=0):o==="REPORT"?(l=`$ campus-cli report
+------------+------------+---------------+----------------+
| Student ID | Name       | Campus        | Net Balance    |
+------------+------------+---------------+----------------+
| STU_BP_01  | Mamata     | Barrackpore   | Rs.  10,000.00 |
| STU_CC_01  | Mahima     | Kolkata       | Rs.  12,500.00 |
| STU_IC_01  | Abhronila  | Ichapur       | Rs.       0.00 |
+------------+------------+---------------+----------------+`,d=`2026-08-25 11:46:10 [${i.padEnd(8," ")}] (institutional.reporting) Multi-campus ledger summary report generated (3 records).`,n=0):o==="AUDIT"&&(l=`$ campus-cli pay --sid STU_BP_01 --amount 50000
[ERROR] InsufficientFundsError: Payment Rs. 50,000 exceeds debt Rs. 10,000
[EXIT] Process returned non-zero error code 1.`,d="2026-08-25 11:46:15 [ERROR   ] (institutional.security) [INSUFFICIENT_FUNDS] Overpayment rejected for STU_BP_01: Amount Rs. 50,000 > Debt Rs. 10,000",n=1),c.useEffect(()=>{const t=new IntersectionObserver(m=>{m.forEach(u=>{u.isIntersecting&&u.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return g.current.forEach(m=>{m&&t.observe(m)}),()=>t.disconnect()},[]);const r=t=>{t&&!g.current.includes(t)&&g.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:r,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 4 • Module 004_004"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 2"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Capstone Projects, Portfolio & Interview Mastery"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Configuring Logging & ",e.jsx("span",{className:"text-teal-400",children:"Modular CLI Interfaces"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master production observability and command-line interfaces in Python: configuring hierarchical loggers with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"RotatingFileHandler"})," to eliminate disk overflow, designing domain-specific custom exception hierarchies with status codes, building modular sub-command CLI tools with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"argparse"}),", rendering rich ANSI terminal tables, and standardizing POSIX process exit codes."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📜 Rotating File Handlers (5MB Max)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Domain Custom Exception Hierarchies"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"💻 Modular Subcommand Dispatchers"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🚦 POSIX Process Exit Codes (0 / 1)"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Production Observability & CLI Architecture"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["Production applications replace amateur ",e.jsx("code",{className:"text-rose-400 font-mono",children:"print()"})," debugging with structured rotating logs, defensive error hierarchies, and self-documenting CLI interfaces:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Rotating Logs"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"RotatingFileHandler"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Rotates log files automatically when reaching byte limits, keeping historical backups and preventing disk space crashes."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Custom Exceptions"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"InstitutionalError"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Domain exception classes with machine-readable error codes and structured JSON context payloads."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Subcommand CLIs"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"add_subparsers()"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Modular command dispatching (enroll, pay, report) with argument validation, choices, and automated help menus."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 shadow-lg",children:[e.jsx("div",{className:"text-amber-400 font-bold text-sm mb-1",children:"4️⃣ POSIX Exit Codes"}),e.jsx("code",{className:"text-xs font-mono text-amber-300 block mb-1",children:"sys.exit(0 / 1)"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Standard process exit codes enabling CI/CD pipelines, Docker orchestrators, and Bash scripts to detect status."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"Why print() Statements Fail in Production"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Using ",e.jsx("code",{className:"text-rose-400 font-mono",children:"print()"})," sends unformatted text to standard output without timestamps, severity levels, or source module context. It cannot be redirected to rotating files or filtered dynamically in production without editing source code. Always use ",e.jsx("span",{className:"text-emerald-400 font-bold",children:"logging.getLogger(__name__)"}),"!"]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Logging Pipelines, Error Trees & CLI Dispatchers"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>x("loggingPipeline"),className:a("px-3 py-1.5 rounded-lg transition-all",s==="loggingPipeline"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Logging Handler Pipeline"}),e.jsx("button",{onClick:()=>x("exceptionTree"),className:a("px-3 py-1.5 rounded-lg transition-all",s==="exceptionTree"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Domain Exception Hierarchy"}),e.jsx("button",{onClick:()=>x("cliDispatch"),className:a("px-3 py-1.5 rounded-lg transition-all",s==="cliDispatch"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"CLI Subcommand Tree"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining multi-destination log dispatching, structured exception inheritance trees, and modular argument parsing:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:s==="loggingPipeline"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"MULTI-DESTINATION LOGGING PIPELINE & ROTATING HANDLERS"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"220",height:"235",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("text",{x:"15",y:"25",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"Logger Source"}),e.jsx("text",{x:"15",y:"50",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"logger.info()"}),e.jsx("text",{x:"15",y:"70",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"logger.warning()"}),e.jsx("text",{x:"15",y:"90",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"logger.error()"}),e.jsx("rect",{x:"10",y:"125",width:"200",height:"95",rx:"4",fill:"#082f49"}),e.jsx("text",{x:"15",y:"145",fill:"#38bdf8",fontSize:"8",fontWeight:"bold",children:"LogRecord Metadata:"}),e.jsx("text",{x:"15",y:"162",fill:"#e0f2fe",fontSize:"8",children:"• %(asctime)s"}),e.jsx("text",{x:"15",y:"177",fill:"#e0f2fe",fontSize:"8",children:"• %(levelname)s"}),e.jsx("text",{x:"15",y:"192",fill:"#e0f2fe",fontSize:"8",children:"• %(name)s (Module)"}),e.jsx("text",{x:"15",y:"207",fill:"#e0f2fe",fontSize:"8",children:"• %(message)s"})]}),e.jsx("path",{d:"M 260 160 L 290 160",stroke:"#14b8a6",strokeWidth:"3",markerEnd:"url(#arrow)"}),e.jsxs("g",{transform:"translate(300, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"230",height:"235",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"15",y:"25",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"Formatter & Filter"}),e.jsx("text",{x:"15",y:"50",fill:"#ccfbf1",fontSize:"9",fontFamily:"monospace",children:"logging.Formatter(...)"}),e.jsx("text",{x:"15",y:"75",fill:"#ccfbf1",fontSize:"8",children:"Threshold Level: INFO (20)"}),e.jsx("rect",{x:"10",y:"105",width:"210",height:"115",rx:"4",fill:"#022c22"}),e.jsx("text",{x:"15",y:"125",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Severity Hierarchy:"}),e.jsx("text",{x:"15",y:"145",fill:"#a7f3d0",fontSize:"8",children:"DEBUG (10) ➔ Suppressed"}),e.jsx("text",{x:"15",y:"162",fill:"#a7f3d0",fontSize:"8",children:"INFO (20) ➔ Allowed ✅"}),e.jsx("text",{x:"15",y:"179",fill:"#a7f3d0",fontSize:"8",children:"WARNING (30) ➔ Allowed ✅"}),e.jsx("text",{x:"15",y:"196",fill:"#fca5a5",fontSize:"8",children:"ERROR (40) ➔ Allowed ✅"}),e.jsx("text",{x:"15",y:"211",fill:"#f87171",fontSize:"8",children:"CRITICAL (50) ➔ Allowed ✅"})]}),e.jsxs("g",{transform:"translate(570, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"110",rx:"6",fill:"#1e1b4b",stroke:"#818cf8"}),e.jsx("text",{x:"15",y:"25",fill:"#e0e7ff",fontSize:"11",fontWeight:"bold",children:"StreamHandler (Console)"}),e.jsx("text",{x:"15",y:"50",fill:"#c7d2fe",fontSize:"8",fontFamily:"monospace",children:"stdout / stderr"}),e.jsx("text",{x:"15",y:"70",fill:"#a5b4fc",fontSize:"8",children:"Live operational alerts formatted"}),e.jsx("text",{x:"15",y:"88",fill:"#a5b4fc",fontSize:"8",children:"for terminal operators"}),e.jsx("rect",{x:"0",y:"125",width:"250",height:"110",rx:"6",fill:"#3b0764",stroke:"#c084fc"}),e.jsx("text",{x:"15",y:"150",fill:"#f3e8ff",fontSize:"11",fontWeight:"bold",children:"RotatingFileHandler (Disk)"}),e.jsx("text",{x:"15",y:"175",fill:"#d8b4fe",fontSize:"8",fontFamily:"monospace",children:"app.log (Max 5MB, 5 Backups)"}),e.jsx("text",{x:"15",y:"195",fill:"#e9d5ff",fontSize:"8",children:"Persistent historical disk logs"}),e.jsx("text",{x:"15",y:"213",fill:"#86efac",fontSize:"8",children:"Zero disk overflow risk ✅"})]})]}):s==="exceptionTree"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"DOMAIN EXCEPTION INHERITANCE TREE & STRUCTURED ERROR CODES"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#082f49",stroke:"#0ea5e9"}),e.jsx("rect",{x:"330",y:"20",width:"160",height:"40",rx:"6",fill:"#0369a1",stroke:"#38bdf8"}),e.jsx("text",{x:"355",y:"45",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"builtins.Exception"}),e.jsx("path",{d:"M 410 60 L 410 85",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("rect",{x:"290",y:"85",width:"240",height:"50",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"320",y:"110",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"class InstitutionalError"}),e.jsx("text",{x:"310",y:"125",fill:"#ccfbf1",fontSize:"8",fontFamily:"monospace",children:"code: str, payload: dict"}),e.jsx("path",{d:"M 410 135 L 410 155",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("path",{d:"M 130 155 L 690 155",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("path",{d:"M 130 155 L 130 175",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("path",{d:"M 410 155 L 410 175",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("path",{d:"M 690 155 L 690 175",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("rect",{x:"30",y:"175",width:"200",height:"60",rx:"6",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"40",y:"195",fill:"#fda4af",fontSize:"9",fontWeight:"bold",children:"StudentNotFoundError"}),e.jsx("text",{x:"40",y:"212",fill:"#fecdd3",fontSize:"8",fontFamily:"monospace",children:'code: "STUDENT_NOT_FOUND"'}),e.jsx("text",{x:"40",y:"226",fill:"#ffe4e6",fontSize:"7",children:'payload: {"sid": "STU_1"}'}),e.jsx("rect",{x:"310",y:"175",width:"200",height:"60",rx:"6",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"320",y:"195",fill:"#fda4af",fontSize:"9",fontWeight:"bold",children:"DuplicateEnrollmentError"}),e.jsx("text",{x:"320",y:"212",fill:"#fecdd3",fontSize:"8",fontFamily:"monospace",children:'code: "DUPLICATE_ENROLL"'}),e.jsx("text",{x:"320",y:"226",fill:"#ffe4e6",fontSize:"7",children:'payload: {"sid": "STU_1"}'}),e.jsx("rect",{x:"590",y:"175",width:"200",height:"60",rx:"6",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"600",y:"195",fill:"#fda4af",fontSize:"9",fontWeight:"bold",children:"InsufficientFundsError"}),e.jsx("text",{x:"600",y:"212",fill:"#fecdd3",fontSize:"8",fontFamily:"monospace",children:'code: "INSUFFICIENT_FUNDS"'}),e.jsx("text",{x:"600",y:"226",fill:"#ffe4e6",fontSize:"7",children:'payload: {"amount": 50000}'})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"MODULAR CLI SUBCOMMAND DISPATCH TREE (ARGPARSE)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#1e1b4b",stroke:"#a855f7"}),e.jsx("rect",{x:"310",y:"20",width:"200",height:"40",rx:"6",fill:"#4f46e5",stroke:"#818cf8"}),e.jsx("text",{x:"330",y:"45",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"prog: campus-cli [-v]"}),e.jsx("path",{d:"M 410 60 L 410 85",stroke:"#a855f7",strokeWidth:"2"}),e.jsx("path",{d:"M 130 85 L 690 85",stroke:"#a855f7",strokeWidth:"2"}),e.jsx("path",{d:"M 130 85 L 130 105",stroke:"#a855f7",strokeWidth:"2"}),e.jsx("path",{d:"M 410 85 L 410 105",stroke:"#a855f7",strokeWidth:"2"}),e.jsx("path",{d:"M 690 85 L 690 105",stroke:"#a855f7",strokeWidth:"2"}),e.jsx("rect",{x:"25",y:"105",width:"210",height:"120",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"35",y:"130",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"subparser: enroll"}),e.jsx("text",{x:"35",y:"150",fill:"#ccfbf1",fontSize:"8",fontFamily:"monospace",children:"--sid STU_BP_01 (Req)"}),e.jsx("text",{x:"35",y:"167",fill:"#ccfbf1",fontSize:"8",fontFamily:"monospace",children:'--name "Mamata" (Req)'}),e.jsx("text",{x:"35",y:"184",fill:"#ccfbf1",fontSize:"8",fontFamily:"monospace",children:"--campus [BP/CC/IC]"}),e.jsx("text",{x:"35",y:"201",fill:"#ccfbf1",fontSize:"8",fontFamily:"monospace",children:"--fee 25000 (Float)"}),e.jsx("rect",{x:"305",y:"105",width:"210",height:"120",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("text",{x:"315",y:"130",fill:"#e0f2fe",fontSize:"11",fontWeight:"bold",children:"subparser: pay"}),e.jsx("text",{x:"315",y:"150",fill:"#bae6fd",fontSize:"8",fontFamily:"monospace",children:"--sid STU_BP_01 (Req)"}),e.jsx("text",{x:"315",y:"167",fill:"#bae6fd",fontSize:"8",fontFamily:"monospace",children:"--amount 15000 (Req)"}),e.jsx("text",{x:"315",y:"184",fill:"#bae6fd",fontSize:"8",fontFamily:"monospace",children:'--memo "UPI Payment"'}),e.jsx("text",{x:"315",y:"210",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Exit Code: 0 (Success)"}),e.jsx("rect",{x:"585",y:"105",width:"210",height:"120",rx:"6",fill:"#3b0764",stroke:"#c084fc"}),e.jsx("text",{x:"595",y:"130",fill:"#f3e8ff",fontSize:"11",fontWeight:"bold",children:"subparser: report"}),e.jsx("text",{x:"595",y:"150",fill:"#d8b4fe",fontSize:"8",fontFamily:"monospace",children:"--campus (Optional)"}),e.jsx("text",{x:"595",y:"170",fill:"#e9d5ff",fontSize:"8",children:"Renders ASCII table of"}),e.jsx("text",{x:"595",y:"187",fill:"#e9d5ff",fontSize:"8",children:"multi-campus balances"}),e.jsx("text",{x:"595",y:"210",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Table Formatter"})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧪"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive CLI Terminal & Logging Inspector"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Execute sub-commands in the simulated administrative CLI terminal, adjust active log levels, and observe structured logging output and POSIX exit codes:"}),e.jsxs("div",{className:"bg-slate-950 p-5 sm:p-6 rounded-xl border border-slate-800/90 space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"Select CLI Subcommand:"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{id:"ENROLL",label:"campus-cli enroll",desc:"Enroll Mamata"},{id:"PAY",label:"campus-cli pay",desc:"Pay Rs. 15,000"},{id:"REPORT",label:"campus-cli report",desc:"Balance Report"},{id:"AUDIT",label:"campus-cli pay (Error)",desc:"Trigger 50k Error"}].map(t=>e.jsxs("button",{onClick:()=>h(t.id),className:a("p-2.5 rounded-xl border text-left transition-all",o===t.id?t.id==="AUDIT"?"bg-rose-950/60 border-rose-500 shadow-md shadow-rose-950/50":"bg-teal-950/60 border-teal-500 shadow-md shadow-teal-950/50":"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"),children:[e.jsx("div",{className:"text-xs font-bold text-slate-200",children:t.label}),e.jsx("div",{className:"text-[10px] text-cyan-400 font-mono",children:t.desc})]},t.id))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"Active Log Severity Threshold:"}),e.jsx("div",{className:"grid grid-cols-3 gap-2",children:["DEBUG","INFO","WARNING"].map(t=>e.jsx("button",{onClick:()=>f(t),className:a("p-2.5 rounded-xl border text-center font-mono font-bold transition-all",i===t?"bg-purple-950/60 border-purple-500 text-purple-300 shadow-md":"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"),children:t},t))}),e.jsxs("div",{className:"text-[11px] text-slate-400 mt-2",children:["Setting ",i," controls console stream filter threshold"]})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:[e.jsx("span",{children:"Simulated Terminal Output:"}),e.jsxs("span",{className:a("font-mono px-2 py-0.5 rounded text-[11px] font-bold",n===0?"bg-emerald-950 text-emerald-300 border border-emerald-800":"bg-rose-950 text-rose-300 border border-rose-800"),children:["Exit Code: ",n," ",n===0?"(SUCCESS)":"(ERROR)"]})]}),e.jsx("pre",{className:"p-4 bg-slate-900/90 border border-slate-800 rounded-xl text-xs sm:text-sm font-mono text-emerald-300 overflow-x-auto leading-relaxed",children:l})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"Emitted Rotating Log Record (app.log):"}),e.jsx("pre",{className:"p-3 bg-slate-900/90 border border-purple-900/50 rounded-xl text-xs sm:text-sm font-mono text-purple-300 overflow-x-auto",children:d})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Production Code Labs & CLI Engines"})]}),e.jsxs("p",{className:"text-slate-300 mb-8 text-base leading-relaxed",children:["Inspect, run, and master all four production-grade observability and CLI labs covering rotating log handlers, custom exception hierarchies, modular ",e.jsx("code",{className:"text-teal-300 font-mono",children:"argparse"})," subcommands, and the complete institutional management case study:"]}),e.jsxs("div",{className:"space-y-10",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:"Lab 1: Enterprise Logging & Rotating File Handlers"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Configuring console stream handlers alongside rotating disk log files (1MB max, 3 backups) with structured timestamp formatting."})]}),e.jsx(p,{fileModule:N,title:"logging_configuration_and_rotating_handlers.py",highlightLines:[18,32,42,58]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-cyan-300",children:"Lab 2: Domain Custom Exception Hierarchy & JSON Payloads"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Designing structured domain errors (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"StudentNotFoundError"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"InsufficientFundsError"}),") with machine-readable error codes."]})]}),e.jsx(p,{fileModule:S,title:"custom_exception_hierarchy_and_handling.py",highlightLines:[16,30,48,64]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-purple-300",children:"Lab 3: Modular CLI Interface with Subcommands & Tables"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Building modular command-line subcommands (",e.jsx("code",{className:"text-purple-300 font-mono",children:"enroll"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"pay"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"report"}),") with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"argparse"})," and POSIX exit codes."]})]}),e.jsx(p,{fileModule:j,title:"modular_cli_interface_argparse_click.py",highlightLines:[16,26,40,52]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-amber-300",children:"Lab 4: Complete Institutional Management Administrative CLI Case Study"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Complete administrative CLI controller coordinating domain exceptions, audit trails, and multi-campus operations for Mamata and Mahima across Barrackpore and Kolkata."})]}),e.jsx(p,{fileModule:E,title:"institutional_cli_and_logging_case_study.py",highlightLines:[14,30,48,64]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Logging & CLI Pitfalls & Anti-Patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"1. Silent Exception Swallowing"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Using bare ",e.jsx("code",{className:"text-rose-400 font-mono",children:"except: pass"})," blocks hides critical crashes, memory errors, and syntax defects from logs completely."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# ANTI-PATTERN: try: enroll() except: pass",`
`,'# BEST PRACTICE: except Exception: logger.exception("Failed")']})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"2. Logging Without File Rotation"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Using a plain ",e.jsx("code",{className:"text-rose-400 font-mono",children:"FileHandler"})," without rotation creates unbounded 50GB log files that eventually exhaust server disk space."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:['# RISKY: FileHandler("app.log") (Unbounded!)',`
`,'# SAFE: RotatingFileHandler("app.log", maxBytes=5_000_000)']})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"3. Logging Plain-Text Sensitive Secrets"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Printing raw passwords, payment card numbers, or API keys directly into logs creates critical security and compliance breaches."}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:['# VULNERABLE: logger.info(f"Card: {card_number}")',`
`,'# SECURE: logger.info("Card: ****-****-****-%s", card[-4:])']})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"4. Always Exiting with Code 0 on Error"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Printing an error message to stdout and exiting without ",e.jsx("code",{className:"text-rose-400 font-mono",children:"sys.exit(1)"})," fools CI/CD pipelines into thinking the job passed!"]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:['# BUG: print("Error!") (Returns 0 to Bash!)',`
`,"# FIX: sys.exit(1) on unrecoverable errors"]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Professional Observability & CLI Checklist"})]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm sm:text-base",children:[e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Use Rotating File Handlers:"})," Always configure ",e.jsx("code",{className:"text-teal-300 font-mono",children:"RotatingFileHandler"})," with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"maxBytes"})," and ",e.jsx("code",{className:"text-teal-300 font-mono",children:"backupCount"}),"."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Structure Domain Exceptions:"})," Inherit from a root base domain exception with distinct error codes and context payloads."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Modular Subcommands:"})," Use ",e.jsx("code",{className:"text-teal-300 font-mono",children:"argparse.add_subparsers()"})," for clean, separated CLI commands."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Return Standard Exit Codes:"})," Explicitly call ",e.jsx("code",{className:"text-teal-300 font-mono",children:"sys.exit(0)"})," on success and ",e.jsx("code",{className:"text-teal-300 font-mono",children:"sys.exit(1)"})," on failure."]})]})]})]}),e.jsx("section",{ref:r,className:"section-hidden",children:e.jsx(y,{title:"Logging, Error Handling & CLI FAQs",questions:v})}),e.jsx("section",{ref:r,className:"section-hidden",children:e.jsx(b,{content:I,title:"Topic 2: Logging, Error Handling & Modular CLI Interfaces Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic2_note.txt"})}),e.jsx("section",{ref:r,className:"section-hidden",children:e.jsx(_,{note:"A software system is only as reliable as its observability and error transparency. When administrators operate our institutional management system across Barrackpore, Kolkata, Ichapur, and Jadavpur, rotating log files capture every admission and financial transaction with full audit trails, while custom domain exceptions and modular CLI subcommands give Mamata, Mahima, and Susmita clear, graceful feedback instead of crashing terminal screens."})})]})]})}export{F as default};
