import{b as o,j as e,bg as l}from"./vendor-react-core-Doz9nIC6.js";import{P as w}from"./PythonFileLoader-hCi5osN-.js";import{P as S}from"./PlainTextPrint-C08xhKA4.js";import{F as N}from"./FAQTemplate-CkSqDH4B.js";import{T as k}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const C=`# topic4_files/sys_argv_raw_argument_parsing.py\r
# Module: 004_001_filesystem-os\r
# Topic: Command-line arguments parsing: sys.argv & argparse module\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 4 - File 1: Low-Level \`sys.argv\` Raw Argument Parsing\r
Demonstrates:\r
  1. Inspecting raw CLI tokens via \`sys.argv\`\r
  2. Manual flag parsing, key-value extraction, and type casting\r
  3. Defensive boundary handling for missing parameters\r
"""\r
\r
import sys\r
from typing import Dict, Any, List\r
\r
def parse_raw_arguments(argv: List[str]) -> Dict[str, Any]:\r
    """Manually parses flags and parameters from a raw sys.argv token list."""\r
    script_name = argv[0] if argv else "unknown_script.py"\r
    raw_args = argv[1:]\r
\r
    options = {\r
        "script_name": script_name,\r
        "is_verbose": False,\r
        "campus": "barrackpore",\r
        "batch_limit": 50,\r
        "positional_targets": []\r
    }\r
\r
    i = 0\r
    while i < len(raw_args):\r
        token = raw_args[i]\r
        if token in ("-v", "--verbose"):\r
            options["is_verbose"] = True\r
            i += 1\r
        elif token in ("-c", "--campus") and i + 1 < len(raw_args):\r
            options["campus"] = raw_args[i + 1]\r
            i += 2\r
        elif token in ("-l", "--limit") and i + 1 < len(raw_args):\r
            try:\r
                options["batch_limit"] = int(raw_args[i + 1])\r
            except ValueError:\r
                print(f"[WARNING] Invalid limit '{raw_args[i + 1]}', using default {options['batch_limit']}")\r
            i += 2\r
        elif not token.startswith("-"):\r
            options["positional_targets"].append(token)\r
            i += 1\r
        else:\r
            print(f"[WARNING] Unrecognized flag '{token}'")\r
            i += 1\r
\r
    return options\r
\r
\r
def demonstrate_sys_argv_parsing():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - LOW-LEVEL SYS.ARGV CLI PARSING")\r
    print("=" * 70)\r
\r
    # 1. Inspecting Live sys.argv Tokens:\r
    print("1. Live Process \`sys.argv\` Token Stream:")\r
    print(f"   * sys.argv Length : {len(sys.argv)}")\r
    print(f"   * sys.argv[0]     : {sys.argv[0]} (Script Entrypoint)")\r
    print(f"   * sys.argv[1:]    : {sys.argv[1:]} (CLI Parameters)\\n")\r
\r
    # 2. Simulating Mock CLI Invocations:\r
    print("2. Parsing Simulated Command Line Invocations:")\r
    mock_cli_call_1 = ["accotax_sync.py", "--campus", "kolkata", "--limit", "100", "--verbose", "admissions.csv"]\r
    parsed_1 = parse_raw_arguments(mock_cli_call_1)\r
\r
    print(f"   * Input Invocation : {' '.join(mock_cli_call_1)}")\r
    print(f"   * Campus           : {parsed_1['campus']}")\r
    print(f"   * Batch Limit      : {parsed_1['batch_limit']}")\r
    print(f"   * Verbose Mode     : {parsed_1['is_verbose']}")\r
    print(f"   * Target Files     : {parsed_1['positional_targets']}\\n")\r
\r
    mock_cli_call_2 = ["accotax_sync.py", "-c", "barrackpore", "-v", "q1.json", "q2.json"]\r
    parsed_2 = parse_raw_arguments(mock_cli_call_2)\r
    print(f"   * Input Invocation : {' '.join(mock_cli_call_2)}")\r
    print(f"   * Parsed Result    : {parsed_2}")\r
\r
    print(r"""\r
sys.argv Invariants:\r
  1. \`sys.argv[0]\` always holds the name or path of the running Python script.\r
  2. All elements in \`sys.argv\` are raw strings; manual casting to int, float, or bool is required.\r
  3. Manual parsing becomes error-prone for complex CLIs; use the \`argparse\` module for production tools.\r
""")\r
    print("[PASSED] sys.argv Raw Argument Parsing Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_sys_argv_parsing()\r
`,A=`# topic4_files/argparse_positional_and_optional_arguments.py\r
# Module: 004_001_filesystem-os\r
# Topic: Command-line arguments parsing: sys.argv & argparse module\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 4 - File 2: \`argparse\` Positional, Optional & Typed Flags\r
Demonstrates:\r
  1. Setting up \`argparse.ArgumentParser\` with descriptions and epilogs\r
  2. Positional arguments vs optional flags (\`-c\`, \`--campus\`)\r
  3. Type coercion (\`type=int\`), choices validation, defaults, and \`action='store_true'\`\r
"""\r
\r
import argparse\r
from pathlib import Path\r
from typing import List\r
\r
def build_student_ingestion_parser() -> argparse.ArgumentParser:\r
    """Builds a structured ArgumentParser for student record ingestion."""\r
    parser = argparse.ArgumentParser(\r
        prog="student_ingest",\r
        description="Coder & AccoTax Student Record Ingestion & Validation CLI Utility.",\r
        epilog="For institutional support, visit https://www.codernaccotax.co.in"\r
    )\r
\r
    # 1. Positional Argument (Required target file):\r
    parser.add_argument(\r
        "source_file",\r
        type=Path,\r
        help="Path to the source CSV or JSON student roster file."\r
    )\r
\r
    # 2. Optional Flag with Choices & Default:\r
    parser.add_argument(\r
        "-c", "--campus",\r
        type=str,\r
        choices=["barrackpore", "kolkata", "all"],\r
        default="barrackpore",\r
        help="Target institutional campus node (default: barrackpore)."\r
    )\r
\r
    # 3. Typed Integer Flag with Default:\r
    parser.add_argument(\r
        "-b", "--batch-size",\r
        type=int,\r
        default=50,\r
        help="Maximum records to process per batch (default: 50)."\r
    )\r
\r
    # 4. Boolean Action Flags (store_true):\r
    parser.add_argument(\r
        "-d", "--dry-run",\r
        action="store_true",\r
        help="Simulate ingestion without writing changes to the database."\r
    )\r
    parser.add_argument(\r
        "-v", "--verbose",\r
        action="store_true",\r
        help="Enable detailed diagnostic logging."\r
    )\r
\r
    return parser\r
\r
\r
def demonstrate_argparse_features():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - ARGPARSE POSITIONAL & OPTIONAL FLAGS")\r
    print("=" * 70)\r
\r
    parser = build_student_ingestion_parser()\r
\r
    # 1. Parsing Simulated Valid Invocations:\r
    print("1. Parsing Standard CLI Invocations:")\r
    sample_cli_1 = ["students_2026.csv", "--campus", "kolkata", "--batch-size", "100", "--dry-run"]\r
    args1 = parser.parse_args(sample_cli_1)\r
\r
    print(f"   * Input Command : student_ingest {' '.join(sample_cli_1)}")\r
    print(f"   * source_file   : {args1.source_file} (Type: {type(args1.source_file).__name__})")\r
    print(f"   * campus        : {args1.campus}")\r
    print(f"   * batch_size    : {args1.batch_size} (Type: {type(args1.batch_size).__name__})")\r
    print(f"   * dry_run       : {args1.dry_run}")\r
    print(f"   * verbose       : {args1.verbose}\\n")\r
\r
    # 2. Automated Help Text Formatting:\r
    print("2. Generated Auto-Formatted Help Manual (\`parser.format_help()\`):")\r
    help_text = parser.format_help()\r
    for line in help_text.splitlines()[:12]:\r
        print(f"   | {line}")\r
\r
    print(r"""\r
argparse Invariants:\r
  1. Positional arguments are required by default; optional flags begin with '-' or '--'.\r
  2. The \`type=\` parameter automatically coerces raw string inputs into target types (\`int\`, \`Path\`).\r
  3. \`action='store_true'\` creates boolean flags that default to \`False\` and become \`True\` when specified.\r
  4. \`choices=['a', 'b']\` enforces valid enum values and prints user-friendly error messages on invalid input.\r
""")\r
    print("[PASSED] argparse Positional & Optional Flags Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_argparse_features()\r
`,E=`# topic4_files/argparse_subcommands_and_custom_validators.py\r
# Module: 004_001_filesystem-os\r
# Topic: Command-line arguments parsing: sys.argv & argparse module\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 4 - File 3: \`argparse\` Subcommands & Mutually Exclusive Groups\r
Demonstrates:\r
  1. Multi-command routing with \`add_subparsers()\`\r
  2. Enforcing exclusivity with \`add_mutually_exclusive_group()\`\r
  3. Custom argument type validation functions (e.g., positive integer, date format)\r
"""\r
\r
import argparse\r
import re\r
from typing import List\r
\r
def valid_student_id(val: str) -> str:\r
    """Custom validator: Enforces format STU-XXXX (e.g. STU-1001)."""\r
    pattern = r"^STU-\\d{3,5}$"\r
    if not re.match(pattern, val):\r
        raise argparse.ArgumentTypeError(f"Invalid Student ID '{val}'. Must match format 'STU-XXXX' (e.g., STU-101).")\r
    return val\r
\r
def build_advanced_cli() -> argparse.ArgumentParser:\r
    """Constructs a multi-command CLI with subparsers and mutually exclusive groups."""\r
    root_parser = argparse.ArgumentParser(\r
        prog="accotax",\r
        description="Institutional Multi-Command Operational CLI Suite."\r
    )\r
\r
    subparsers = root_parser.add_subparsers(\r
        dest="subcommand",\r
        required=True,\r
        help="Subcommand to execute"\r
    )\r
\r
    # 1. Subcommand: 'enroll'\r
    enroll_parser = subparsers.add_parser("enroll", help="Enroll a new candidate.")\r
    enroll_parser.add_argument("student_id", type=valid_student_id, help="Student ID (Format: STU-101)")\r
    enroll_parser.add_argument("student_name", type=str, help="Full student legal name")\r
    enroll_parser.add_argument("--course", default="Python Pro", help="Course track")\r
\r
    # 2. Subcommand: 'audit' (with mutually exclusive format group)\r
    audit_parser = subparsers.add_parser("audit", help="Run financial or compliance audit.")\r
    audit_parser.add_argument("--year", type=int, default=2026, help="Audit financial year")\r
\r
    # Mutually exclusive output format:\r
    fmt_group = audit_parser.add_mutually_exclusive_group()\r
    fmt_group.add_argument("--json", action="store_true", help="Output results in JSON format.")\r
    fmt_group.add_argument("--csv", action="store_true", help="Output results in CSV format.")\r
    fmt_group.add_argument("--table", action="store_true", help="Output results in ASCII Table format.")\r
\r
    return root_parser\r
\r
\r
def demonstrate_subcommands_and_validation():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - ARGPARSE SUBCOMMANDS & VALIDATORS")\r
    print("=" * 70)\r
\r
    cli = build_advanced_cli()\r
\r
    # 1. Parsing 'enroll' Subcommand:\r
    print("1. Parsing 'enroll' Subcommand with Custom ID Validator:")\r
    enroll_cmd = ["enroll", "STU-101", "Sourav Mukherjee", "--course", "Python AI & Cloud"]\r
    args_enroll = cli.parse_args(enroll_cmd)\r
\r
    print(f"   * Executed Command : accotax {' '.join(enroll_cmd)}")\r
    print(f"   * Subcommand Route : {args_enroll.subcommand}")\r
    print(f"   * Validated ID     : {args_enroll.student_id}")\r
    print(f"   * Student Name     : {args_enroll.student_name}")\r
    print(f"   * Course Track     : {args_enroll.course}\\n")\r
\r
    # 2. Parsing 'audit' Subcommand with Mutually Exclusive Flags:\r
    print("2. Parsing 'audit' Subcommand with Mutually Exclusive Format:")\r
    audit_cmd = ["audit", "--year", "2026", "--json"]\r
    args_audit = cli.parse_args(audit_cmd)\r
\r
    print(f"   * Executed Command : accotax {' '.join(audit_cmd)}")\r
    print(f"   * Subcommand Route : {args_audit.subcommand}")\r
    print(f"   * Audit Year       : {args_audit.year}")\r
    print(f"   * Output JSON      : {args_audit.json}")\r
    print(f"   * Output CSV       : {args_audit.csv}\\n")\r
\r
    # 3. Handling Validation Errors Defensively:\r
    print("3. Defensive Custom Validation Rejection:")\r
    try:\r
        invalid_cmd = ["enroll", "INVALID_ID_999", "Priyanka Sen"]\r
        cli.parse_args(invalid_cmd)\r
    except SystemExit:\r
        print("   * [DEFENSIVE ERROR CAUGHT] \`argparse\` rejected invalid student ID correctly.")\r
\r
    print(r"""\r
Subcommand Invariants:\r
  1. \`add_subparsers(dest='command')\` enables building Git-like or Docker-like multi-command CLI interfaces.\r
  2. \`add_mutually_exclusive_group()\` ensures conflicting flags (e.g. \`--json\` vs \`--csv\`) cannot be passed simultaneously.\r
  3. Custom validation functions raise \`argparse.ArgumentTypeError\` to trigger standard CLI error reporting.\r
""")\r
    print("[PASSED] argparse Subcommands & Custom Validators Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_subcommands_and_validation()\r
`,T=`# topic4_files/institutional_accotax_cli_suite.py\r
# Module: 004_001_filesystem-os\r
# Topic: Command-line arguments parsing: sys.argv & argparse module\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 4 - File 4: Institutional Multi-Command CLI Management Suite (Case Study)\r
Demonstrates:\r
  1. Complete production-grade multi-command CLI tool using \`argparse\`\r
  2. Command routing to dedicated service handlers (\`enroll\`, \`audit\`, \`backup\`)\r
  3. Formatted ASCII table outputs, exit codes, and comprehensive CLI UX\r
"""\r
\r
import sys\r
import json\r
import argparse\r
from typing import List, Dict, Any\r
\r
class InstitutionalCliSuite:\r
    """Production CLI operations suite for Coder & AccoTax administrative workflows."""\r
\r
    def __init__(self):\r
        self.parser = self._construct_parser()\r
\r
    def _construct_parser(self) -> argparse.ArgumentParser:\r
        root_parser = argparse.ArgumentParser(\r
            prog="accotax-admin",\r
            description="Institutional Management CLI for Coder & AccoTax Operations.",\r
            formatter_class=argparse.RawDescriptionHelpFormatter,\r
            epilog="""\r
Examples:\r
  accotax-admin enroll --id STU-101 --name "Sourav Mukherjee" --campus barrackpore\r
  accotax-admin audit --year 2026 --format table\r
  accotax-admin backup --campus all --dry-run\r
"""\r
        )\r
        root_parser.add_argument("-v", "--verbose", action="store_true", help="Enable verbose diagnostics.")\r
\r
        subparsers = root_parser.add_subparsers(dest="command", required=True, help="Operational command")\r
\r
        # 1. 'enroll' Command\r
        enroll_p = subparsers.add_parser("enroll", help="Enroll a new student candidate.")\r
        enroll_p.add_argument("--id", required=True, help="Unique student ID (e.g. STU-101)")\r
        enroll_p.add_argument("--name", required=True, help="Full candidate name")\r
        enroll_p.add_argument("--campus", choices=["barrackpore", "kolkata"], default="barrackpore", help="Campus node")\r
        enroll_p.add_argument("--fee", type=float, default=30000.0, help="Tuition fee amount")\r
\r
        # 2. 'audit' Command\r
        audit_p = subparsers.add_parser("audit", help="Generate institutional financial/compliance audit.")\r
        audit_p.add_argument("--year", type=int, default=2026, help="Financial audit fiscal year")\r
        audit_p.add_argument("--format", choices=["table", "json", "csv"], default="table", help="Output format")\r
\r
        # 3. 'backup' Command\r
        backup_p = subparsers.add_parser("backup", help="Trigger snapshot backup archive creation.")\r
        backup_p.add_argument("--campus", choices=["barrackpore", "kolkata", "all"], default="all", help="Target campus")\r
        backup_p.add_argument("--dry-run", action="store_true", help="Simulate backup without writing archives.")\r
\r
        return root_parser\r
\r
    def handle_enroll(self, args: argparse.Namespace) -> int:\r
        print(f"\\n[ENROLL SERVICE] Registering candidate in database:")\r
        print(f"   * Student ID   : {args.id}")\r
        print(f"   * Legal Name   : {args.name}")\r
        print(f"   * Campus Node  : {args.campus.title()} Main Center")\r
        print(f"   * Tuition Fee  : INR {args.fee:,.2f}")\r
        print("   -> Candidate enrolled and KYC record initiated. [STATUS: OK]")\r
        return 0\r
\r
    def handle_audit(self, args: argparse.Namespace) -> int:\r
        records = [\r
            {"id": "STU-101", "name": "Sourav Mukherjee", "course": "Python AI", "fee_status": "CLEARED"},\r
            {"id": "STU-102", "name": "Priyanka Sen", "course": "DS & ML", "fee_status": "CLEARED"},\r
            {"id": "STU-103", "name": "Amitava Ghosh", "course": "Tax Pro", "fee_status": "PENDING"}\r
        ]\r
\r
        if args.format == "json":\r
            print(json.dumps({"fiscal_year": args.year, "audit_records": records}, indent=2))\r
        elif args.format == "csv":\r
            print("id,name,course,fee_status")\r
            for r in records:\r
                print(f"{r['id']},{r['name']},{r['course']},{r['fee_status']}")\r
        else:\r
            print(f"\\n[AUDIT SERVICE - FISCAL YEAR {args.year}]")\r
            print(f"{'ID':<10} {'STUDENT NAME':<22} {'COURSE':<16} {'FEE STATUS':<10}")\r
            print("-" * 60)\r
            for r in records:\r
                print(f"{r['id']:<10} {r['name']:<22} {r['course']:<16} {r['fee_status']:<10}")\r
        return 0\r
\r
    def handle_backup(self, args: argparse.Namespace) -> int:\r
        print(f"\\n[BACKUP SERVICE] Initiating snapshot for target: '{args.campus}'")\r
        if args.dry_run:\r
            print("   * [DRY-RUN MODE] Simulated backup successfully. 0 bytes written to disk.")\r
        else:\r
            print("   * Snapshot created and compressed archive stored in vault.")\r
        return 0\r
\r
    def execute_cli(self, argv: List[str]) -> int:\r
        try:\r
            args = self.parser.parse_args(argv)\r
            if args.command == "enroll":\r
                return self.handle_enroll(args)\r
            elif args.command == "audit":\r
                return self.handle_audit(args)\r
            elif args.command == "backup":\r
                return self.handle_backup(args)\r
            return 1\r
        except SystemExit as e:\r
            return e.code if isinstance(e.code, int) else 1\r
\r
\r
def demonstrate_cli_suite():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - INSTITUTIONAL CLI MANAGEMENT SUITE")\r
    print("=" * 70)\r
\r
    cli_app = InstitutionalCliSuite()\r
\r
    # 1. Execute 'enroll'\r
    print("1. Executing CLI Ingestion ('enroll'):")\r
    enroll_args = ["enroll", "--id", "STU-101", "--name", "Sourav Mukherjee", "--campus", "barrackpore", "--fee", "35000"]\r
    print(f"Command: accotax-admin {' '.join(enroll_args)}")\r
    cli_app.execute_cli(enroll_args)\r
\r
    # 2. Execute 'audit' (Table output)\r
    print("\\n2. Executing CLI Compliance ('audit --format table'):")\r
    audit_args = ["audit", "--year", "2026", "--format", "table"]\r
    print(f"Command: accotax-admin {' '.join(audit_args)}")\r
    cli_app.execute_cli(audit_args)\r
\r
    # 3. Execute 'backup' (Dry run)\r
    print("\\n3. Executing CLI Infrastructure ('backup --dry-run'):")\r
    backup_args = ["backup", "--campus", "all", "--dry-run"]\r
    print(f"Command: accotax-admin {' '.join(backup_args)}")\r
    cli_app.execute_cli(backup_args)\r
\r
    print("\\n[PASSED] Institutional CLI Suite Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_cli_suite()\r
`,I=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
          PYTHON PROGRAMMING • SEGMENT 4: PRO LEVEL • MODULE 004_001: FILESYSTEM & OS\r
             TOPIC 4: COMMAND-LINE ARGUMENTS: SYS.ARGV & ARGPARSE MODULE\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. SYS.ARGV RAW TOKENS\r
--------------------------------------------------------------------------------\r
  * sys.argv[0] : Running script name/path string\r
  * sys.argv[1:]: Raw list of command-line argument strings\r
\r
--------------------------------------------------------------------------------\r
2. ARGPARSE STANDARD ARGUMENTS\r
--------------------------------------------------------------------------------\r
  parser = argparse.ArgumentParser(description="CLI Tool")\r
  parser.add_argument("source", type=Path, help="Positional required")\r
  parser.add_argument("-c", "--campus", choices=["bkp", "kol"], default="bkp")\r
  parser.add_argument("-b", "--batch", type=int, default=50)\r
  parser.add_argument("-d", "--dry-run", action="store_true")\r
\r
--------------------------------------------------------------------------------\r
3. SUBPARSER MULTI-COMMAND ROUTING\r
--------------------------------------------------------------------------------\r
  sub = parser.add_subparsers(dest="command", required=True)\r
  enroll_p = sub.add_parser("enroll", help="Enroll candidate")\r
  audit_p = sub.add_parser("audit", help="Audit records")\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 4: ARGPARSE & CLI ENGINEERING\r
================================================================================\r
`,P=[{question:"What is 'sys.argv' in Python and what does it contain?",shortAnswer:"'sys.argv' is a list of strings representing the command-line arguments passed to the script, where 'sys.argv[0]' is the script filename and 'sys.argv[1:]' are the user arguments.",explanation:"Command-line token list in the sys module.",hint:"List of raw strings with the script name at index 0 and arguments at subsequent indices.",level:"basic",codeExample:`import sys
print('Script:', sys.argv[0], 'Args:', sys.argv[1:])`},{question:"What data type are all elements in 'sys.argv' by default?",shortAnswer:"All elements in 'sys.argv' are raw strings ('str'); numerical values, booleans, and dates must be manually cast.",explanation:"String typing invariant of sys.argv.",hint:"All elements are strings and require manual casting.",level:"basic",codeExample:"port = int(sys.argv[1]) if len(sys.argv) > 1 else 8080"},{question:"Why is the standard library 'argparse' module preferred over manual 'sys.argv' parsing?",shortAnswer:"'argparse' automatically generates user-friendly help text ('--help'), performs type validation/coercion, supports short/long flags, enforces choices, and handles subcommands with zero boilerplate.",explanation:"Standard library CLI framework benefits.",hint:"Provides auto-help, type casting, flag parsing, and error handling automatically.",level:"basic",codeExample:"parser = argparse.ArgumentParser(); parser.add_argument('--port', type=int)"},{question:"How does 'argparse' distinguish between positional arguments and optional flags?",shortAnswer:`Arguments without leading dashes ('"source_file"') are positional and required by default; arguments starting with '-' or '--' ('"--campus"', '"-c"') are optional flags.`,explanation:"Positional vs optional argument syntax.",hint:"Positional arguments have no leading dash; optional flags start with '-' or '--'.",level:"basic",codeExample:`parser.add_argument('file') # Positional
parser.add_argument('-v', '--verbose') # Optional`},{question:`What does 'action="store_true"' do in 'parser.add_argument()'?`,shortAnswer:"It creates a boolean flag that defaults to 'False' if omitted, and stores 'True' if the user passes the flag on the command line.",explanation:"Boolean switch flag action.",hint:"Creates a boolean flag that is True when present and False when omitted.",level:"basic",codeExample:"parser.add_argument('--dry-run', action='store_true')"},{question:"How do you enforce that an argument must be an integer and provide a default fallback?",shortAnswer:`By specifying 'type=int' and 'default=value': 'parser.add_argument("--limit", type=int, default=50)'.`,explanation:"Typed argument coercion with defaults.",hint:"Use type=int and default=50.",level:"basic",codeExample:"parser.add_argument('--limit', type=int, default=50)"},{question:"How do you restrict an argument's value to a specific set of allowed options?",shortAnswer:`Using the 'choices=' parameter: 'parser.add_argument("--campus", choices=["barrackpore", "kolkata"])'.`,explanation:"Enum-like value constraints.",hint:"Use choices=['opt1', 'opt2'].",level:"basic",codeExample:"parser.add_argument('--format', choices=['json', 'csv', 'table'])"},{question:"How do you allow an argument to accept multiple values into a list?",shortAnswer:`Using 'nargs="+"' (one or more values) or 'nargs="*"' (zero or more values), which gathers tokens into a Python list.`,explanation:"Variable argument count (nargs).",hint:"Use nargs='+' for 1+ values or nargs='*' for 0+ values.",level:"basic",codeExample:"parser.add_argument('files', nargs='+', help='One or more file paths')"},{question:"How do you build a multi-command CLI (e.g. 'git commit', 'docker run') in argparse?",shortAnswer:`Using 'subparsers = parser.add_subparsers(dest="command", required=True)' and adding individual command parsers with 'subparsers.add_parser("enroll")'.`,explanation:"Subcommand routing in argparse.",hint:"Use parser.add_subparsers() and add_parser() for each subcommand.",level:"moderate",codeExample:"sub = parser.add_subparsers(dest='cmd'); enroll = sub.add_parser('enroll')"},{question:"What is 'add_mutually_exclusive_group()' and when should it be used?",shortAnswer:"It creates a group where only ONE of the included flags can be provided at a time (e.g., mutually exclusive output formats like '--json' vs '--csv').",explanation:"Mutually exclusive flag enforcement.",hint:"Ensures that conflicting flags cannot be passed at the same time.",level:"basic",codeExample:`group = parser.add_mutually_exclusive_group()
group.add_argument('--json', action='store_true')
group.add_argument('--csv', action='store_true')`},{question:"How do you implement a custom argument validator that raises a descriptive CLI error?",shortAnswer:`Define a function that takes a string argument, validates it, and raises 'argparse.ArgumentTypeError("Error message")' if invalid, then pass that function to 'type=my_func'.`,explanation:"Custom validation functions in argparse.",hint:"Pass a function to type= that raises argparse.ArgumentTypeError on invalid input.",level:"moderate",codeExample:"def positive_int(v): i = int(v); if i <= 0: raise argparse.ArgumentTypeError('Must be > 0'); return i"},{question:"Can 'pathlib.Path' be passed directly to 'type=' in 'add_argument()'?",shortAnswer:"Yes. Passing 'type=pathlib.Path' automatically converts the command-line string into a 'Path' object in the resulting parsed namespace.",explanation:"Pathlib integration with argparse.",hint:"Yes, use type=Path to receive Path objects directly in args.",level:"basic",codeExample:`from pathlib import Path
parser.add_argument('config', type=Path)`},{question:"What happens when a user passes '--help' or '-h' to an argparse script?",shortAnswer:"'argparse' automatically prints a cleanly formatted help manual including script description, parameter usage, options, and epilog, then exits with code 0.",explanation:"Automated help manual generation.",hint:"Prints auto-generated help manual and exits cleanly with code 0.",level:"basic",codeExample:"$ python script.py --help"},{question:"How do you make an optional flag required?",shortAnswer:`By passing 'required=True': 'parser.add_argument("--api-key", required=True)'.`,explanation:"Mandatory optional-style flags.",hint:"Pass required=True to add_argument.",level:"basic",codeExample:"parser.add_argument('--token', required=True)"},{question:"What does 'parser.parse_args(args=None)' return?",shortAnswer:"An 'argparse.Namespace' object containing the parsed parameters as attributes (e.g. 'args.campus', 'args.batch_size').",explanation:"Namespace attribute container.",hint:"Returns an argparse.Namespace object with attributes matching argument names.",level:"basic",codeExample:"args = parser.parse_args(); print(args.campus)"},{question:"How do you convert an 'argparse.Namespace' object into a standard Python dictionary?",shortAnswer:"Using 'vars(args)': 'args_dict = vars(parser.parse_args())'.",explanation:"Namespace to dictionary conversion.",hint:"Use vars(args) to get a dict representation.",level:"basic",codeExample:"config_dict = vars(args)"},{question:"What is 'parser.parse_known_args()' and when is it useful?",shortAnswer:"It parses only the arguments defined in the parser and returns a 2-tuple '(args, unknown_args)' without raising an error on unrecognized flags (ideal for forwarding extra flags to sub-tools).",explanation:"Partial argument parsing for wrappers.",hint:"Returns (known_args, unknown_args) without crashing on extra unrecognized flags.",level:"moderate",codeExample:"known, extra = parser.parse_known_args()"},{question:"How do you customize the name of the attribute in 'args' when using a flag with hyphens like '--batch-size'?",shortAnswer:`'argparse' automatically replaces hyphens with underscores, making it accessible as 'args.batch_size' (or you can override it using 'dest="custom_name"').`,explanation:"Hyphen normalization and dest parameter.",hint:"Hyphens become underscores (args.batch_size) or customize with dest=.",level:"basic",codeExample:"parser.add_argument('--max-items', dest='limit') # Accessible as args.limit"},{question:"What is 'metavar' in 'add_argument()' and how does it affect '--help'?",shortAnswer:"'metavar' overrides the placeholder name displayed in help messages without changing the attribute name in the 'args' namespace.",explanation:"CLI documentation placeholder customization.",hint:"Controls the parameter name shown in the help documentation.",level:"basic",codeExample:"parser.add_argument('--ip', metavar='HOST_IP', help='Server IP address')"},{question:"How do you specify a custom version flag in argparse?",shortAnswer:`Using 'action="version"' with 'version="%(prog)s 1.0.0"': 'parser.add_argument("-V", "--version", action="version", version="%(prog)s 2.0")'.`,explanation:"Version flag protocol in argparse.",hint:"Use action='version' and version='%(prog)s 1.0.0'.",level:"basic",codeExample:"parser.add_argument('--version', action='version', version='%(prog)s 2026.1')"},{question:"Why should you avoid parsing CLI arguments inside library modules?",shortAnswer:`CLI parsing should be confined to script entrypoints ('if __name__ == "__main__":') to keep library modules reusable, importable, and easily unit-testable without side effects.`,explanation:"Separation of concerns in Python architecture.",hint:"Keep CLI parsing in entrypoints so modules remain reusable and unit-testable.",level:"moderate",codeExample:"if __name__ == '__main__': cli_main()"},{question:"How do you test 'argparse' logic in unit tests without invoking the command line?",shortAnswer:`Pass an explicit list of argument strings to 'parser.parse_args(["--campus", "kolkata"])' instead of relying on 'sys.argv'.`,explanation:"Unit testing CLI parsers.",hint:"Pass an explicit list of strings to parser.parse_args(['-c', 'kolkata']).",level:"basic",codeExample:"args = parser.parse_args(['--campus', 'kolkata'])"},{question:"What is 'argparse.RawDescriptionHelpFormatter' used for?",shortAnswer:"It prevents 'argparse' from automatically line-wrapping and collapsing whitespace in the description/epilog, preserving formatted ASCII tables and multi-line examples.",explanation:"Preserving raw text formatting in help manuals.",hint:"Preserves custom whitespace and linebreaks in help descriptions and examples.",level:"moderate",codeExample:"parser = argparse.ArgumentParser(formatter_class=argparse.RawDescriptionHelpFormatter)"},{question:"What exit code should a Python CLI return on success vs validation failure?",shortAnswer:"Return code 0 on success, and non-zero (typically 1 or 2) on error/validation failure ('sys.exit(0)' vs 'sys.exit(1)').",explanation:"Standard OS process exit code conventions.",hint:"0 for success, non-zero (1, 2) for error.",level:"basic",codeExample:"sys.exit(0) # Success"},{question:"What is the ultimate golden rule for command-line arguments in Python?",shortAnswer:"Always use 'argparse.ArgumentParser' with descriptive help strings, validate types with 'type=', create modular subcommands with 'add_subparsers()', and provide safe '--dry-run' flags for destructive operations.",explanation:"The complete enterprise guideline for CLI engineering in Python.",hint:"Use argparse with types, choices, subparsers, and dry-run switches for robust production CLIs.",level:"basic",codeExample:"# Python CLI Engineering Mastery"}];function q(){const u=o.useRef([]),[d,x]=o.useState("tokenStream"),[a,f]=o.useState("audit"),[t,b]=o.useState("barrackpore"),[c,_]=o.useState("table"),[g,y]=o.useState(!1),[p,v]=o.useState(!0);let n=`accotax-admin ${a}`,i="";a==="enroll"?(n+=` --id STU-101 --name "Sourav Mukherjee" --campus ${t}`,p&&(n+=" --verbose"),i=`[ENROLL SERVICE] Registering candidate in database:
* Student ID   : STU-101
* Legal Name   : Sourav Mukherjee
* Campus Node  : ${t.toUpperCase()} Main Center
* Tuition Fee  : INR 30,000.00
[STATUS] Candidate enrolled successfully. Exit Code: 0`):a==="audit"?(n+=` --year 2026 --campus ${t} --format ${c}`,p&&(n+=" --verbose"),c==="json"?i=`{
  "fiscal_year": 2026,
  "campus": "${t}",
  "records": [
    {"id": "STU-101", "name": "Sourav", "fee": "CLEARED"}
  ]
}`:c==="csv"?i=`id,name,campus,fee_status
STU-101,Sourav Mukherjee,${t},CLEARED`:i=`[AUDIT SERVICE - FISCAL YEAR 2026]
ID         STUDENT NAME           CAMPUS        FEE STATUS
----------------------------------------------------------
STU-101    Sourav Mukherjee       ${t.padEnd(13)} CLEARED`):(n+=` --campus ${t}`,g&&(n+=" --dry-run"),p&&(n+=" --verbose"),i=`[BACKUP SERVICE] Initiating snapshot for '${t}':
${g?"* [DRY-RUN MODE] Simulated backup successfully. 0 bytes written.":"* Snapshot created and compressed archive stored in vault."}
[STATUS] Exit Code: 0`);const j=`# Standard argparse configuration:
parser = argparse.ArgumentParser(prog="accotax-admin")
subparsers = parser.add_subparsers(dest="command", required=True)

# '${a}' subcommand:
sub_p = subparsers.add_parser("${a}")
${a==="enroll"?`sub_p.add_argument("--id", required=True)
sub_p.add_argument("--name", required=True)
sub_p.add_argument("--campus", choices=["barrackpore", "kolkata"], default="barrackpore")`:a==="audit"?`sub_p.add_argument("--year", type=int, default=2026)
sub_p.add_argument("--format", choices=["table", "json", "csv"], default="table")`:`sub_p.add_argument("--campus", choices=["barrackpore", "kolkata", "all"], default="all")
sub_p.add_argument("--dry-run", action="store_true")`}
sub_p.add_argument("-v", "--verbose", action="store_true")`;o.useEffect(()=>{const r=new IntersectionObserver(m=>{m.forEach(h=>{h.isIntersecting&&h.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return u.current.forEach(m=>{m&&r.observe(m)}),()=>r.disconnect()},[]);const s=r=>{r&&!u.current.includes(r)&&u.current.push(r)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:s,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 4 • Module 004_001"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 4"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Advanced File Operations, OS & Subprocess Automation"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["CLI Engineering: ",e.jsx("span",{className:"text-teal-400",children:"sys.argv & argparse Module"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master command-line interface development in Python: low-level token unpacking with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"sys.argv"}),", professional CLI construction with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"argparse.ArgumentParser"}),", automatic type coercion (",e.jsx("code",{className:"text-purple-300 font-mono",children:"type=int, Path"}),"), boolean switches (",e.jsx("code",{className:"text-amber-300 font-mono",children:"action='store_true'"}),"), multi-command subparser routing (",e.jsx("code",{className:"text-teal-300 font-mono",children:"add_subparsers"}),"), and auto-generated ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"--help"})," manuals."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📜 `sys.argv` Token Stream"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛠️ `argparse.ArgumentParser`"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔀 Subcommand Routing"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ `action='store_true'`"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⌨️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Command-Line Interface Engineering Architecture"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"Building robust command-line tools requires transitioning from brittle string indexing to standard declarative CLI parsers:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ `sys.argv` Raw Tokens"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"sys.argv[0], sys.argv[1:]"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Raw string list provided by the OS. Useful for quick 1-line scripts, but lacks type casting and help docs."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Declarative `argparse`"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:'add_argument("-c", type=...)'}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Standard library CLI engine. Handles automatic type casting, short/long flags, defaults, and choices."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Subcommand Dispatch"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:'add_subparsers(dest="cmd")'}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Builds modular multi-command tools (e.g. ",e.jsx("code",{className:"text-purple-300 font-mono",children:"accotax enroll"})," vs ",e.jsx("code",{className:"text-purple-300 font-mono",children:"audit"}),")."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Raw String Trap in `sys.argv`"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Tokens in ",e.jsx("code",{className:"text-rose-400 font-mono",children:"sys.argv"})," are ALWAYS raw strings! If you execute ",e.jsx("code",{className:"text-teal-300 font-mono",children:"python script.py 50"}),", ",e.jsx("code",{className:"text-rose-400 font-mono",children:"sys.argv[1]"})," evaluates to ",e.jsx("code",{className:"text-rose-400 font-mono",children:'"50"'})," (string), not integer ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"50"}),"! ",e.jsx("code",{className:"text-teal-300 font-mono",children:"argparse(type=int)"})," automatically coerces and validates types."]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing CLI Token Streams, Subparser Dispatch & Argument Flags"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>x("tokenStream"),className:l("px-3 py-1.5 rounded-lg transition-all",d==="tokenStream"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"`sys.argv` Token Stream"}),e.jsx("button",{onClick:()=>x("subparserRoute"),className:l("px-3 py-1.5 rounded-lg transition-all",d==="subparserRoute"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Subparser Routing"}),e.jsx("button",{onClick:()=>x("exclusiveFlags"),className:l("px-3 py-1.5 rounded-lg transition-all",d==="exclusiveFlags"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Mutually Exclusive Flags"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining CLI argument token streams, hierarchical subcommand routing, and mutually exclusive group validations:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:d==="tokenStream"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"COMMAND-LINE STRING TOKEN STREAM TO `sys.argv`"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"55",rx:"6",fill:"#090d16",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"32",fill:"#38bdf8",fontSize:"13 font-mono",children:"python accotax.py enroll STU-101 --campus kolkata --limit 100 --dry-run"})]}),e.jsxs("g",{transform:"translate(30, 120)",children:[e.jsx("rect",{x:"0",y:"0",width:"130",height:"160",rx:"6",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"`sys.argv[0]`"}),e.jsx("text",{x:"15",y:"60",fill:"#34d399",fontSize:"9 font-mono",children:'"accotax.py"'}),e.jsx("text",{x:"15",y:"85",fill:"#cbd5e1",fontSize:"8",children:"Script Entrypoint"}),e.jsx("text",{x:"15",y:"105",fill:"#38bdf8",fontSize:"8 font-mono",children:"Always String"}),e.jsx("rect",{x:"145",y:"0",width:"125",height:"160",rx:"6",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"160",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"`sys.argv[1]`"}),e.jsx("text",{x:"160",y:"60",fill:"#38bdf8",fontSize:"9 font-mono",children:'"enroll"'}),e.jsx("text",{x:"160",y:"85",fill:"#cbd5e1",fontSize:"8",children:"Subcommand"}),e.jsx("text",{x:"160",y:"105",fill:"#38bdf8",fontSize:"8 font-mono",children:"Positional"}),e.jsx("rect",{x:"285",y:"0",width:"125",height:"160",rx:"6",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"300",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"`sys.argv[2]`"}),e.jsx("text",{x:"300",y:"60",fill:"#38bdf8",fontSize:"9 font-mono",children:'"STU-101"'}),e.jsx("text",{x:"300",y:"85",fill:"#cbd5e1",fontSize:"8",children:"Candidate ID"}),e.jsx("text",{x:"300",y:"105",fill:"#38bdf8",fontSize:"8 font-mono",children:"Validated"}),e.jsx("rect",{x:"425",y:"0",width:"190",height:"160",rx:"6",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"440",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"`sys.argv[3:5]`"}),e.jsx("text",{x:"440",y:"60",fill:"#c084fc",fontSize:"9 font-mono",children:'"--campus", "kolkata"'}),e.jsx("text",{x:"440",y:"85",fill:"#cbd5e1",fontSize:"8",children:"Optional Key-Value"}),e.jsx("text",{x:"440",y:"105",fill:"#34d399",fontSize:"8 font-mono",children:"choices constraint"}),e.jsx("rect",{x:"630",y:"0",width:"190",height:"160",rx:"6",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"645",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"`sys.argv[5:7]`"}),e.jsx("text",{x:"645",y:"60",fill:"#c084fc",fontSize:"9 font-mono",children:'"--dry-run"'}),e.jsx("text",{x:"645",y:"85",fill:"#cbd5e1",fontSize:"8",children:"Boolean Switch Flag"}),e.jsx("text",{x:"645",y:"105",fill:"#34d399",fontSize:"8 font-mono",children:"action='store_true'"})]})]}):d==="subparserRoute"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"ARGPARSE SUBCOMMAND ROUTING & DISPATCH PIPELINE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"60",rx:"6",fill:"#090d16",stroke:"#06b6d4"}),e.jsx("text",{x:"20",y:"35",fill:"#a5f3fc",fontSize:"13 font-mono",children:'Root Parser: `accotax-admin` -> `add_subparsers(dest="command")`'})]}),e.jsxs("g",{transform:"translate(30, 130)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"150",rx:"6",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"`subparsers.add_parser('enroll')`"}),e.jsx("text",{x:"15",y:"60",fill:"#34d399",fontSize:"8 font-mono",children:"--id STU-101 (Required)"}),e.jsx("text",{x:"15",y:"80",fill:"#34d399",fontSize:"8 font-mono",children:'--name "Sourav" (Required)'}),e.jsx("text",{x:"15",y:"100",fill:"#cbd5e1",fontSize:"8",children:"Handler: `handle_enroll(args)`"}),e.jsx("rect",{x:"280",y:"0",width:"250",height:"150",rx:"6",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"295",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"`subparsers.add_parser('audit')`"}),e.jsx("text",{x:"295",y:"60",fill:"#38bdf8",fontSize:"8 font-mono",children:"--year 2026 (type=int)"}),e.jsx("text",{x:"295",y:"80",fill:"#38bdf8",fontSize:"8 font-mono",children:"--format table|json|csv"}),e.jsx("text",{x:"295",y:"100",fill:"#cbd5e1",fontSize:"8",children:"Handler: `handle_audit(args)`"}),e.jsx("rect",{x:"560",y:"0",width:"260",height:"150",rx:"6",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"575",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"`subparsers.add_parser('backup')`"}),e.jsx("text",{x:"575",y:"60",fill:"#c084fc",fontSize:"8 font-mono",children:"--campus bkp|kol|all"}),e.jsx("text",{x:"575",y:"80",fill:"#c084fc",fontSize:"8 font-mono",children:"--dry-run (action='store_true')"}),e.jsx("text",{x:"575",y:"100",fill:"#cbd5e1",fontSize:"8",children:"Handler: `handle_backup(args)`"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"MUTUALLY EXCLUSIVE ARGUMENT GROUPS"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"Passing Conflicting Flags [REJECTED]"}),e.jsx("text",{x:"20",y:"65",fill:"#fca5a5",fontSize:"8 font-mono",children:"`accotax audit --json --csv`"}),e.jsx("text",{x:"20",y:"85",fill:"#fca5a5",fontSize:"8 font-mono",children:"❌ User requested conflicting formats simultaneously"}),e.jsx("text",{x:"20",y:"105",fill:"#f43f5e",fontSize:"8 font-mono font-bold",children:"argparse raises error: argument --csv: not allowed with argument --json"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"155",fill:"#fda4af",fontSize:"9 font-bold",children:"Automatic CLI Defense:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Prevents contradictory backend processing states."})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"Passing Single Format Flag [ACCEPTED]"}),e.jsx("text",{x:"20",y:"65",fill:"#34d399",fontSize:"8 font-mono",children:"`accotax audit --json`"}),e.jsx("text",{x:"20",y:"85",fill:"#34d399",fontSize:"8 font-mono",children:"✅ `args.json == True`, `args.csv == False`"}),e.jsx("text",{x:"20",y:"105",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"Clean Unambiguous Dispatch"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"Deterministic Flow:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Routes cleanly to single target serialization format."})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive CLI Invocation & Argument Parser Laboratory"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Select subcommands, toggle flags, configure formats, inspect the generated terminal invocation string, and observe parsed namespace outputs:"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"1. Operational Subcommand:"}),e.jsx("div",{className:"flex bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:["enroll","audit","backup"].map(r=>e.jsx("button",{onClick:()=>f(r),className:l("flex-1 py-1.5 rounded transition-all uppercase font-bold",a===r?"bg-teal-900/60 text-teal-300 border border-teal-700/80":"text-slate-400 hover:text-white"),children:r},r))})]}),e.jsxs("div",{className:"space-y-1.5 pt-1",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold",children:"2. Campus Flag (`--campus`):"}),e.jsx("div",{className:"flex bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:["barrackpore","kolkata"].map(r=>e.jsx("button",{onClick:()=>b(r),className:l("flex-1 py-1 rounded transition-all capitalize",t===r?"bg-cyan-900/60 text-cyan-300 font-bold border border-cyan-700/80":"text-slate-400 hover:text-white"),children:r},r))})]}),a==="audit"&&e.jsxs("div",{className:"space-y-1.5 pt-1",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-purple-400 font-bold",children:"3. Output Format (`--format`):"}),e.jsx("div",{className:"flex bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:["table","json","csv"].map(r=>e.jsx("button",{onClick:()=>_(r),className:l("flex-1 py-1 rounded transition-all uppercase",c===r?"bg-purple-900/60 text-purple-300 font-bold border border-purple-700/80":"text-slate-400 hover:text-white"),children:r},r))})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs font-mono pt-1",children:[e.jsxs("label",{className:"flex items-center gap-1.5 cursor-pointer bg-slate-900 p-2 rounded border border-slate-800",children:[e.jsx("input",{type:"checkbox",checked:p,onChange:r=>v(r.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"Verbose Mode (`-v`)"})]}),a==="backup"&&e.jsxs("label",{className:"flex items-center gap-1.5 cursor-pointer bg-slate-900 p-2 rounded border border-slate-800",children:[e.jsx("input",{type:"checkbox",checked:g,onChange:r=>y(r.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"Dry-Run Mode (`--dry-run`)"})]})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs font-mono space-y-1",children:[e.jsx("div",{className:"text-slate-400 text-[10px] uppercase font-bold",children:"Constructed CLI Command:"}),e.jsxs("div",{className:"text-teal-300 text-[11px] break-all font-bold",children:["$ ",n]})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs space-y-1",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:"Generated Python argparse Code:"}),e.jsx("pre",{className:"text-teal-300 text-[11px] leading-relaxed break-all font-mono overflow-x-auto",children:j})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[160px] font-mono text-xs space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-[10px] font-bold uppercase text-slate-400",children:[e.jsx("span",{children:"Simulated CLI Execution Output:"}),e.jsx("span",{className:"text-emerald-400",children:"Exit Code 0"})]}),e.jsx("pre",{className:"text-slate-200 text-[11px] leading-relaxed font-mono whitespace-pre-wrap",children:i})]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master `argparse` Parameter Reference Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Parameter / Method"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Category"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Type / Behavior"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Primary Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:'`action="store_true"`'}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Boolean Switch"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"`bool` (`False` -> `True`)"}),e.jsx("td",{className:"py-3 px-4",children:"Flags like `--verbose`, `--dry-run`, `--force`"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"`type=int` / `type=Path`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Type Coercion"}),e.jsx("td",{className:"py-3 px-4 text-cyan-300",children:"Automatic Cast"}),e.jsx("td",{className:"py-3 px-4",children:"Coercing port numbers, file paths, and counts"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"`choices=['a', 'b']`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Validation"}),e.jsx("td",{className:"py-3 px-4 text-purple-300",children:"Restricted Set"}),e.jsx("td",{className:"py-3 px-4",children:"Limiting values to allowed enums (e.g. `--format`)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"`add_subparsers()`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Subcommand Routing"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"`_SubParsersAction`"}),e.jsx("td",{className:"py-3 px-4",children:"Multi-command CLI suites (Git/Docker style)"})]})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating raw sys.argv parsing, positional/optional flags, subcommands, and institutional CLI operations suites:"}),e.jsx(w,{files:[{filename:"sys_argv_raw_argument_parsing.py",code:C,description:"sys.argv token handling, manual flag parsing, and type casting."},{filename:"argparse_positional_and_optional_arguments.py",code:A,description:"ArgumentParser, positional/optional arguments, types, and choices."},{filename:"argparse_subcommands_and_custom_validators.py",code:E,description:"subparsers, mutually exclusive groups, and custom validator functions."},{filename:"institutional_accotax_cli_suite.py",code:T,description:"Multi-command routing, subparsers, and formatted CLI table outputs."}]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Assuming `sys.argv` Converts Types"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Tokens in ",e.jsx("code",{className:"text-rose-300 font-mono",children:"sys.argv"})," are strings. If a user passes ",e.jsx("code",{className:"text-slate-300",children:"50"}),", comparing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"sys.argv[1] == 50"})," returns ",e.jsx("code",{className:"text-rose-300 font-mono",children:"False"}),"!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"argparse(type=int)"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Direct `sys.argv[1]` Indexing"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Accessing ",e.jsx("code",{className:"text-amber-300 font-mono",children:"sys.argv[1]"})," when no arguments are passed crashes with ",e.jsx("code",{className:"text-slate-300 font-mono",children:"IndexError: list index out of range"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"argparse"})," to handle required arguments gracefully."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Omission of `action='store_true'`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Adding ",e.jsx("code",{className:"text-purple-300 font-mono",children:"parser.add_argument('--verbose')"})," requires the user to pass a value (",e.jsx("code",{className:"text-slate-300",children:"--verbose True"}),") instead of acting as a boolean switch."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Specify ",e.jsx("code",{className:"text-emerald-300",children:"action='store_true'"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Parsing CLI Inside Library Code"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Running ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"parser.parse_args()"})," at module top-level breaks imports when other modules import the file."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Guard under ",e.jsx("code",{className:"text-emerald-300",children:"if __name__ == '__main__':"}),"."]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering sys.argv, ArgumentParser, positional/optional flags, subparsers, and custom validators:"}),e.jsx(N,{questions:P})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with CLI engineering patterns, argparse recipes, and subcommand routing templates:"}),e.jsx("div",{className:"mb-10",children:e.jsx(S,{content:I,filename:"python_topic4_argparse_cli_notes.txt",title:"Print Topic 4 Study Notes"})}),e.jsx(k,{})]})]})]})}export{q as default};
