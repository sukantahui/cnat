import{b as n,j as e,bg as l}from"./vendor-react-core-Doz9nIC6.js";import{P as v}from"./PythonFileLoader-hCi5osN-.js";import{P as E}from"./PlainTextPrint-C08xhKA4.js";import{F as w}from"./FAQTemplate-CkSqDH4B.js";import{T as N}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const j=`# topic0_files/os_environment_and_process_management.py\r
# Module: 004_001_filesystem-os\r
# Topic: os module: environment variables, cwd, file system queries\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 0 - File 1: \`os\` Environment Variables & Process Management\r
Demonstrates:\r
  1. Reading and setting environment variables: \`os.environ\`, \`os.getenv()\`, \`os.environ.setdefault()\`\r
  2. Safe fallback configurations for production secrets and database URLs\r
  3. Process runtime introspection: \`os.getpid()\`, \`os.name\`, \`os.cpu_count()\`\r
"""\r
\r
import os\r
import sys\r
\r
def demonstrate_os_environment_and_process():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - OS ENVIRONMENT & PROCESS MANAGEMENT")\r
    print("=" * 70)\r
\r
    # 1. Process Metadata & Operating System Detection:\r
    print("1. Process & Operating System Introspection:")\r
    current_pid = os.getpid()\r
    parent_pid = os.getppid() if hasattr(os, "getppid") else "N/A"\r
    os_kernel_type = os.name  # 'nt' for Windows, 'posix' for Linux/macOS\r
    cpu_cores = os.cpu_count() or 1\r
\r
    print(f"   * Current Process ID (PID)  : {current_pid}")\r
    print(f"   * Parent Process ID (PPID)   : {parent_pid}")\r
    print(f"   * OS Kernel Family (\`os.name\`): {os_kernel_type} ({'Windows NT' if os_kernel_type == 'nt' else 'POSIX/Unix'})")\r
    print(f"   * Available CPU Core Count   : {cpu_cores}\\n")\r
\r
    # 2. Reading Environment Variables with Fallbacks:\r
    print("2. Environment Variable Management (\`os.getenv\` vs \`os.environ\`):")\r
    # Setting institutional environment variables for demonstration:\r
    os.environ["ACCOTAX_CAMPUS"] = "Barrackpore Main Campus"\r
    os.environ["ACCOTAX_PORT"] = "8080"\r
\r
    campus = os.getenv("ACCOTAX_CAMPUS", "Default Campus")\r
    port = int(os.getenv("ACCOTAX_PORT", "5000"))\r
    db_secret = os.getenv("ACCOTAX_DB_SECRET", "DEMO_SECRET_KEY_DEV_ONLY")\r
\r
    print(f"   * ACCOTAX_CAMPUS (Read) : {campus}")\r
    print(f"   * ACCOTAX_PORT (Parsed) : {port}")\r
    print(f"   * ACCOTAX_DB_SECRET     : {db_secret} (Fallback loaded)\\n")\r
\r
    # 3. Defensive KeyError Handling:\r
    print("3. Defensive Lookup vs Direct Indexing:")\r
    # Direct access raises KeyError if missing:\r
    try:\r
        missing_val = os.environ["NON_EXISTENT_SECRET_TOKEN"]\r
    except KeyError:\r
        print("   * [DEFENSIVE ERROR CAUGHT] KeyError: 'NON_EXISTENT_SECRET_TOKEN' was not set.")\r
        print("   -> \`os.getenv('KEY', default)\` is safer than direct \`os.environ['KEY']\`.")\r
\r
    # 4. Modifying Environment Variables safely:\r
    os.environ.setdefault("ACCOTAX_LOG_LEVEL", "INFO")\r
    print(f"\\n4. Default Set: ACCOTAX_LOG_LEVEL = {os.environ['ACCOTAX_LOG_LEVEL']}")\r
\r
    print(r"""\r
OS Environment Invariants:\r
  1. \`os.environ\` represents the environment variables inherited from the parent process.\r
  2. Modifying \`os.environ\` affects only the current Python process and child subprocesses it spawns.\r
  3. Always use \`os.getenv("VAR_NAME", fallback)\` to prevent fatal KeyErrors in production.\r
""")\r
    print("[PASSED] os Environment & Process Management Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_os_environment_and_process()\r
`,S=`# topic0_files/os_working_directory_and_path_queries.py\r
# Module: 004_001_filesystem-os\r
# Topic: os module: environment variables, cwd, file system queries\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 0 - File 2: Working Directory Management & Filesystem Queries\r
Demonstrates:\r
  1. Current Working Directory (CWD) inspection: \`os.getcwd()\`\r
  2. Path existence and classification: \`os.path.exists()\`, \`os.path.isfile()\`, \`os.path.isdir()\`\r
  3. Querying file metadata and timestamps with \`os.stat()\` and \`os.path.getsize()\`\r
"""\r
\r
import os\r
import time\r
from datetime import datetime\r
\r
def demonstrate_cwd_and_path_queries():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - CWD & FILESYSTEM QUERIES")\r
    print("=" * 70)\r
\r
    # 1. Current Working Directory:\r
    cwd = os.getcwd()\r
    print("1. Current Working Directory (CWD):")\r
    print(f"   * os.getcwd(): {cwd}\\n")\r
\r
    # 2. Creating a temporary test file for metadata inspection:\r
    test_filename = "accotax_sample_ledger.tmp"\r
    with open(test_filename, "w", encoding="utf-8") as f:\r
        f.write("TXN-101,Sourav Mukherjee,30000.00,CLEARED\\n")\r
        f.write("TXN-102,Priyanka Sen,35000.00,CLEARED\\n")\r
\r
    try:\r
        # 3. Path Existence & Type Checks:\r
        print("2. Path Existence & Classification:")\r
        print(f"   * os.path.exists('{test_filename}') : {os.path.exists(test_filename)}")\r
        print(f"   * os.path.isfile('{test_filename}')   : {os.path.isfile(test_filename)}")\r
        print(f"   * os.path.isdir('{test_filename}')    : {os.path.isdir(test_filename)}")\r
        print(f"   * os.path.isabs('{test_filename}')    : {os.path.isabs(test_filename)}")\r
        print(f"   * os.path.abspath('{test_filename}')  : {os.path.abspath(test_filename)}\\n")\r
\r
        # 4. Querying File Size & Modification Timestamp:\r
        print("3. Querying File Metadata:")\r
        file_size_bytes = os.path.getsize(test_filename)\r
        mod_timestamp = os.path.getmtime(test_filename)\r
        formatted_mtime = datetime.fromtimestamp(mod_timestamp).strftime("%Y-%m-%d %H:%M:%S")\r
\r
        print(f"   * File Size (Bytes)    : {file_size_bytes} Bytes")\r
        print(f"   * Last Modified Time   : {formatted_mtime}")\r
\r
        # 5. Low-Level os.stat() Struct:\r
        print("\\n4. Low-Level \`os.stat()\` Struct Inspection:")\r
        stat_info = os.stat(test_filename)\r
        print(f"   * st_size (file size)  : {stat_info.st_size} bytes")\r
        print(f"   * st_mode (permissions): {oct(stat_info.st_mode)}")\r
        print(f"   * st_mtime (unix epoch): {stat_info.st_mtime}")\r
\r
    finally:\r
        # Cleanup temporary sample file\r
        if os.path.exists(test_filename):\r
            os.remove(test_filename)\r
\r
    print(r"""\r
Path Query Invariants:\r
  1. \`os.path.exists()\` returns False if the path does not exist or if permission is denied.\r
  2. \`os.stat()\` returns low-level inode/filesystem metadata directly from the OS kernel.\r
  3. Always clean up temporary files using \`try...finally\` blocks.\r
""")\r
    print("[PASSED] CWD & Filesystem Queries Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_cwd_and_path_queries()\r
`,T=`# topic0_files/os_filesystem_crud_and_permissions.py\r
# Module: 004_001_filesystem-os\r
# Topic: os module: environment variables, cwd, file system queries\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 0 - File 3: Directory Creation, File Operations & Permission Checks\r
Demonstrates:\r
  1. Safe recursive directory creation: \`os.makedirs(path, exist_ok=True)\`\r
  2. Atomic file renaming/replacing: \`os.rename()\` vs \`os.replace()\`\r
  3. Testing file accessibility & permission bits: \`os.access()\`\r
"""\r
\r
import os\r
import shutil\r
\r
def demonstrate_filesystem_crud_and_permissions():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - FILESYSTEM CRUD & PERMISSION CHECKS")\r
    print("=" * 70)\r
\r
    demo_root_dir = "temp_accotax_demo_tree"\r
    nested_dir = os.path.join(demo_root_dir, "audits", "2026", "q1")\r
    file_v1 = os.path.join(nested_dir, "ledger_v1.txt")\r
    file_v2 = os.path.join(nested_dir, "ledger_v2_final.txt")\r
\r
    try:\r
        # 1. Recursive Directory Creation:\r
        print("1. Recursive Directory Creation with \`os.makedirs(path, exist_ok=True)\`:")\r
        os.makedirs(nested_dir, exist_ok=True)\r
        print(f"   * Created nested directory hierarchy: '{nested_dir}'")\r
        print(f"   * os.path.isdir('{nested_dir}'): {os.path.isdir(nested_dir)}\\n")\r
\r
        # 2. Writing Initial File:\r
        with open(file_v1, "w", encoding="utf-8") as f:\r
            f.write("ACCOTAX FINANCIAL LEDGER 2026 Q1 - DRAFT")\r
\r
        # 3. Checking File Access Permissions:\r
        print("2. Permission Testing with \`os.access()\`:")\r
        is_readable = os.access(file_v1, os.R_OK)\r
        is_writable = os.access(file_v1, os.W_OK)\r
        is_executable = os.access(file_v1, os.X_OK)\r
\r
        print(f"   * Read Permission (R_OK)   : {is_readable}")\r
        print(f"   * Write Permission (W_OK)  : {is_writable}")\r
        print(f"   * Execute Permission (X_OK): {is_executable}\\n")\r
\r
        # 4. Atomic File Replacement with os.replace():\r
        print("3. Atomic File Renaming / Overwrite with \`os.replace()\`:")\r
        # os.replace() is atomic and silently overwrites destination if it exists on both POSIX and Windows\r
        os.replace(file_v1, file_v2)\r
        print(f"   * Replaced '{file_v1}' -> '{file_v2}'")\r
        print(f"   * Original '{file_v1}' exists: {os.path.exists(file_v1)}")\r
        print(f"   * Final '{file_v2}' exists   : {os.path.exists(file_v2)}\\n")\r
\r
        # 5. Listing Contents:\r
        dir_contents = os.listdir(nested_dir)\r
        print(f"4. Directory Contents (\`os.listdir('{nested_dir}')\`): {dir_contents}")\r
\r
    finally:\r
        # Cleanup directory tree safely\r
        if os.path.exists(demo_root_dir):\r
            shutil.rmtree(demo_root_dir)\r
            print("\\n5. Cleanup: Removed demo directory tree successfully.")\r
\r
    print(r"""\r
Filesystem CRUD Invariants:\r
  1. Always pass \`exist_ok=True\` to \`os.makedirs()\` to prevent \`FileExistsError\` in concurrent environments.\r
  2. Use \`os.replace()\` instead of \`os.rename()\` when you require cross-platform atomic overwrites.\r
  3. \`os.access()\` tests if the real user ID has permissions, honoring OS access control lists.\r
""")\r
    print("[PASSED] Filesystem CRUD & Permissions Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_filesystem_crud_and_permissions()\r
`,A=`# topic0_files/institutional_system_environment_and_audit_inspector.py\r
# Module: 004_001_filesystem-os\r
# Topic: os module: environment variables, cwd, file system queries\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 0 - File 4: Institutional System Environment & Health Inspector (Case Study)\r
Demonstrates:\r
  1. Complete system runtime inspection suite for Coder & AccoTax backend servers\r
  2. Verifying mandatory environment variables, secret tokens, and database endpoints\r
  3. Validating logging directories, permission bits, and generating compliance reports\r
"""\r
\r
import os\r
import sys\r
import shutil\r
from datetime import datetime\r
from typing import Dict, Any, List, Tuple\r
\r
class InstitutionalSystemEnvironmentAuditor:\r
    """Production runtime environment auditor for Coder & AccoTax servers."""\r
\r
    MANDATORY_ENV_VARS = [\r
        ("ACCOTAX_NODE_ENV", "production"),\r
        ("ACCOTAX_DATABASE_URL", "postgresql://db.accotax.internal:5432/main"),\r
        ("ACCOTAX_STORAGE_ROOT", "accotax_storage_vault"),\r
        ("ACCOTAX_API_KEY", "DEMO_KEY_SECRET_789")\r
    ]\r
\r
    def __init__(self):\r
        self.audit_log: List[str] = []\r
\r
    def setup_mock_environment(self):\r
        """Sets up institutional environment variables for audit testing."""\r
        for key, val in self.MANDATORY_ENV_VARS:\r
            os.environ.setdefault(key, val)\r
\r
    def run_full_system_audit(self) -> Dict[str, Any]:\r
        """Runs end-to-end environment, process, and filesystem health audit."""\r
        # 1. Environment Variables Check\r
        missing_vars = []\r
        env_inventory = {}\r
        for key, default in self.MANDATORY_ENV_VARS:\r
            val = os.getenv(key)\r
            if not val:\r
                missing_vars.append(key)\r
            else:\r
                # Mask sensitive secrets\r
                masked_val = val[:4] + "****" if "KEY" in key or "SECRET" in key else val\r
                env_inventory[key] = masked_val\r
\r
        # 2. Process & Runtime Info\r
        process_info = {\r
            "pid": os.getpid(),\r
            "os_name": os.name,\r
            "platform": sys.platform,\r
            "python_version": sys.version.split()[0],\r
            "cwd": os.getcwd(),\r
            "cpu_cores": os.cpu_count() or 1\r
        }\r
\r
        # 3. Storage Vault & Directory Verification\r
        storage_root = os.getenv("ACCOTAX_STORAGE_ROOT", "accotax_storage_vault")\r
        log_dir = os.path.join(storage_root, "system_logs")\r
        os.makedirs(log_dir, exist_ok=True)\r
\r
        is_readable = os.access(log_dir, os.R_OK)\r
        is_writable = os.access(log_dir, os.W_OK)\r
\r
        # Write test health heartbeat\r
        heartbeat_file = os.path.join(log_dir, "heartbeat.log")\r
        with open(heartbeat_file, "a", encoding="utf-8") as f:\r
            f.write(f"[{datetime.now().isoformat()}] AUDIT_HEARTBEAT_OK - PID: {os.getpid()}\\n")\r
\r
        heartbeat_stat = os.stat(heartbeat_file)\r
\r
        is_healthy = len(missing_vars) == 0 and is_readable and is_writable\r
\r
        return {\r
            "is_system_healthy": is_healthy,\r
            "missing_env_vars": missing_vars,\r
            "environment_inventory": env_inventory,\r
            "process_metadata": process_info,\r
            "storage_audit": {\r
                "storage_root": os.path.abspath(storage_root),\r
                "is_readable": is_readable,\r
                "is_writable": is_writable,\r
                "heartbeat_log_size": heartbeat_stat.st_size\r
            }\r
        }\r
\r
\r
def demonstrate_system_auditor():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - INSTITUTIONAL SYSTEM ENVIRONMENT AUDITOR")\r
    print("=" * 70)\r
\r
    auditor = InstitutionalSystemEnvironmentAuditor()\r
    auditor.setup_mock_environment()\r
    report = auditor.run_full_system_audit()\r
\r
    print("1. System Health & Compliance Overview:")\r
    print(f"   * System Overall Health Status : {'[HEALTHY]' if report['is_system_healthy'] else '[DEGRADED]'}")\r
    print(f"   * Missing Mandatory Variables : {report['missing_env_vars']}\\n")\r
\r
    print("2. Process Runtime Metadata:")\r
    proc = report["process_metadata"]\r
    print(f"   * Process ID (PID)  : {proc['pid']}")\r
    print(f"   * Python Version    : {proc['python_version']} on {proc['platform']} (\`{proc['os_name']}\`)")\r
    print(f"   * Current Working Dir: {proc['cwd']}")\r
    print(f"   * CPU Cores Online  : {proc['cpu_cores']}\\n")\r
\r
    print("3. Environment Variables Inventory:")\r
    for k, v in report["environment_inventory"].items():\r
        print(f"   * {k:<22} = {v}")\r
\r
    print("\\n4. Storage Directory & Permission Audit:")\r
    storage = report["storage_audit"]\r
    print(f"   * Storage Vault Path : {storage['storage_root']}")\r
    print(f"   * Vault Permissions  : Read={storage['is_readable']} | Write={storage['is_writable']}")\r
    print(f"   * Heartbeat Log Size : {storage['heartbeat_log_size']} bytes")\r
\r
    # Cleanup mock storage vault\r
    mock_root = os.getenv("ACCOTAX_STORAGE_ROOT", "accotax_storage_vault")\r
    if os.path.exists(mock_root):\r
        shutil.rmtree(mock_root)\r
\r
    print("\\n[PASSED] Institutional System Environment Auditor Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_system_auditor()\r
`,k=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
          PYTHON PROGRAMMING • SEGMENT 4: PRO LEVEL • MODULE 004_001: FILESYSTEM & OS\r
           TOPIC 0: OS MODULE: ENVIRONMENT VARIABLES, CWD, FILE SYSTEM QUERIES\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. ENVIRONMENT VARIABLES\r
--------------------------------------------------------------------------------\r
  * os.getenv("DB_URL", "fallback")   : Safe read with fallback (No KeyError)\r
  * os.environ["KEY"] = "val"         : Sets environment variable for process\r
  * os.environ.setdefault("K", "v")   : Sets only if not already present\r
\r
--------------------------------------------------------------------------------\r
2. CWD & FILESYSTEM QUERIES\r
--------------------------------------------------------------------------------\r
  * os.getcwd()                       : Returns absolute path of current working dir\r
  * os.path.exists(path)              : Checks if file/folder exists\r
  * os.path.isfile(path)              : True if regular file\r
  * os.path.isdir(path)               : True if directory\r
  * os.path.getsize(path)             : File size in bytes\r
  * os.stat(path)                     : Full low-level filesystem inode metadata\r
\r
--------------------------------------------------------------------------------\r
3. DIRECTORY CRUD & PERMISSIONS\r
--------------------------------------------------------------------------------\r
  * os.makedirs(path, exist_ok=True)  : Recursively creates directory tree safely\r
  * os.replace(src, dst)              : Atomic cross-platform file replacement\r
  * os.access(path, os.R_OK | os.W_OK): Tests read/write permissions\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 0: OS MODULE & ENVIRONMENT\r
================================================================================\r
`,O=[{question:"What is the primary role of the 'os' module in Python?",shortAnswer:"The 'os' module provides a portable, cross-platform interface to interact with operating system dependent functionalities (process management, environment variables, working directory, and filesystem queries).",explanation:"Core OS interface module in the Python standard library.",hint:"Provides cross-platform access to operating system and filesystem APIs.",level:"basic",codeExample:"import os; print(os.name, os.getcwd())"},{question:"What is the key difference between 'os.environ' and 'os.getenv()'?",shortAnswer:"'os.environ' is a dictionary-like mapping where missing keys raise a 'KeyError'; 'os.getenv(key, default=None)' returns a fallback default value instead of raising an error.",explanation:"Defensive environment variable access.",hint:"os.environ raises KeyError on missing keys; os.getenv returns a default value.",level:"basic",codeExample:"val = os.getenv('DATABASE_URL', 'localhost:5432') # Safe fallback"},{question:"Does modifying 'os.environ['MY_VAR'] = '123'' permanently change the environment in the host operating system shell?",shortAnswer:"No. Changes to 'os.environ' only affect the currently running Python process and any child subprocesses spawned by it; the parent OS shell environment remains completely unchanged.",explanation:"Process environment isolation invariant.",hint:"No, environment changes are scoped only to the running Python process and child subprocesses.",level:"moderate",codeExample:"os.environ['APP_PORT'] = '8080' # Affects only current process"},{question:"What does 'os.environ.setdefault(key, default)' do?",shortAnswer:"It sets the environment variable to 'default' ONLY IF the variable is not already defined in the environment, preserving existing values.",explanation:"Safe environment default initialization.",hint:"Sets the variable only if it does not already exist.",level:"basic",codeExample:"os.environ.setdefault('LOG_LEVEL', 'DEBUG')"},{question:"What is the difference between 'os.getcwd()' and the special variable '__file__'?",shortAnswer:"'os.getcwd()' returns the Current Working Directory from which the Python script was launched; '__file__' holds the relative or absolute path of the script file itself on disk.",explanation:"CWD vs script file location distinction.",hint:"os.getcwd() is where the terminal was when running python; __file__ is where the .py file lives.",level:"basic",codeExample:"cwd = os.getcwd(); script_dir = os.path.dirname(os.path.abspath(__file__))"},{question:"Why is calling 'os.chdir(new_dir)' considered an anti-pattern in multi-threaded web servers?",shortAnswer:"The Current Working Directory is process-global; calling 'os.chdir()' changes the working directory for ALL concurrently running threads in the process, causing race conditions in relative file operations.",explanation:"Process-global state hazard in concurrent systems.",hint:"CWD is shared globally across all threads, causing race conditions.",level:"moderate",codeExample:"# Prefer passing absolute paths over calling os.chdir()"},{question:"What is the difference between 'os.path.exists()', 'os.path.isfile()', and 'os.path.isdir()'?",shortAnswer:"'os.path.exists()' returns True for any existing filesystem entry (file, directory, symlink); 'os.path.isfile()' returns True only for regular files; 'os.path.isdir()' returns True only for directories.",explanation:"Filesystem node classification.",hint:"exists checks any node; isfile checks regular files; isdir checks directories.",level:"basic",codeExample:"os.path.exists(p); os.path.isfile(p); os.path.isdir(p)"},{question:"What is the difference between 'os.mkdir()' and 'os.makedirs()'?",shortAnswer:"'os.mkdir()' creates only a single directory and fails if parent directories are missing; 'os.makedirs()' recursively creates all missing intermediate parent directories along the path.",explanation:"Single directory creation vs recursive hierarchy creation.",hint:"os.mkdir creates only the leaf; os.makedirs creates intermediate parent directories.",level:"basic",codeExample:"os.makedirs('logs/2026/q1', exist_ok=True)"},{question:"Why should you ALWAYS pass 'exist_ok=True' to 'os.makedirs()' in production code?",shortAnswer:"Without 'exist_ok=True', 'os.makedirs()' raises a 'FileExistsError' if the target directory already exists; with 'exist_ok=True', it succeeds idempotently without error.",explanation:"Idempotent directory creation.",hint:"Prevents FileExistsError if the directory already exists.",level:"basic",codeExample:"os.makedirs(vault_dir, exist_ok=True)"},{question:"What is 'os.replace(src, dst)' and why is it preferred over 'os.rename(src, dst)'?",shortAnswer:"'os.replace()' is guaranteed to be an atomic cross-platform file replacement, silently overwriting 'dst' if it exists on both Windows and POSIX systems; on Windows, 'os.rename()' raises 'FileExistsError' if 'dst' exists.",explanation:"Atomic file swap semantics.",hint:"os.replace atomically overwrites the destination on all OS platforms.",level:"moderate",codeExample:"os.replace('temp_draft.txt', 'production_data.txt')"},{question:"How do you test file permissions using 'os.access()'?",shortAnswer:"Using bitwise OR of permission constants: 'os.access(path, os.R_OK | os.W_OK)', which checks for read and write permissions according to the operating system.",explanation:"OS permission verification.",hint:"Use os.access(path, os.R_OK | os.W_OK | os.X_OK).",level:"basic",codeExample:"is_writable = os.access('/var/log/app.log', os.W_OK)"},{question:"What information does 'os.stat(path)' return?",shortAnswer:"A 'stat_result' object containing low-level inode/filesystem metadata: 'st_size' (bytes), 'st_mtime' (modification time), 'st_ctime' (creation time), 'st_mode' (permissions), and 'st_uid'/'st_gid'.",explanation:"Filesystem metadata inspection.",hint:"Returns st_size, st_mtime, st_ctime, st_mode, etc.",level:"basic",codeExample:"stat_info = os.stat('data.csv'); print(stat_info.st_size, stat_info.st_mtime)"},{question:"What does 'os.name' return on Windows vs Linux/macOS?",shortAnswer:"'os.name' returns ''nt'' on Windows NT-based systems, and ''posix'' on Linux, macOS, and Unix-like operating systems.",explanation:"OS kernel identification.",hint:"'nt' on Windows, 'posix' on Linux and macOS.",level:"basic",codeExample:"is_windows = (os.name == 'nt')"},{question:"How do you get the current Process ID (PID) and Parent Process ID (PPID) in Python?",shortAnswer:"Using 'os.getpid()' for the current process ID and 'os.getppid()' for the parent process ID.",explanation:"Process identification in Python.",hint:"os.getpid() and os.getppid().",level:"basic",codeExample:"pid = os.getpid(); ppid = os.getppid()"},{question:"How do you get the number of logical CPU cores on the host machine using 'os'?",shortAnswer:"Using 'os.cpu_count()', which returns an integer representing the number of logical cores (or 'None' if undetermined).",explanation:"Hardware introspection.",hint:"Use os.cpu_count().",level:"basic",codeExample:"workers = os.cpu_count() or 4"},{question:"How do you delete a single file and a single empty directory using 'os'?",shortAnswer:"Use 'os.remove(file_path)' (or 'os.unlink()') to delete a file, and 'os.rmdir(dir_path)' to delete an empty directory.",explanation:"File and empty folder removal.",hint:"os.remove() for files; os.rmdir() for empty directories.",level:"basic",codeExample:"os.remove('temp.log'); os.rmdir('empty_folder')"},{question:"What happens if you call 'os.rmdir()' on a directory that contains files?",shortAnswer:"It raises an 'OSError: [Errno 39] Directory not empty' (or 'WindowsError: [Error 145]'); use 'shutil.rmtree()' to delete non-empty directory trees.",explanation:"Non-empty directory deletion safety.",hint:"Raises OSError because the directory is not empty; use shutil.rmtree() instead.",level:"basic",codeExample:"# To delete non-empty directory: shutil.rmtree(dir_path)"},{question:"How do you convert a Unix epoch timestamp from 'os.path.getmtime()' into a human-readable datetime string?",shortAnswer:`Using 'datetime.datetime.fromtimestamp(os.path.getmtime(path)).strftime("%Y-%m-%d %H:%M:%S")'.`,explanation:"Timestamp formatting.",hint:"Use datetime.fromtimestamp(os.path.getmtime(path)).",level:"basic",codeExample:"dt = datetime.fromtimestamp(os.path.getmtime('app.log'))"},{question:"What is 'os.path.abspath(path)' vs 'os.path.realpath(path)'?",shortAnswer:"'os.path.abspath()' resolves relative paths against the CWD; 'os.path.realpath()' additionally resolves all filesystem symbolic links (symlinks) to their canonical target.",explanation:"Path canonicalization and symlink resolution.",hint:"abspath resolves relative paths; realpath also resolves symlinks.",level:"moderate",codeExample:"canonical_path = os.path.realpath('/symlink/to/data')"},{question:"How do you join path components portably across Windows and Linux using 'os.path'?",shortAnswer:`Using 'os.path.join("folder", "subfolder", "file.txt")' (or modern 'pathlib.Path').`,explanation:"Cross-platform path separator handling.",hint:"Use os.path.join() to handle OS-specific path separators automatically.",level:"basic",codeExample:"log_path = os.path.join('var', 'log', 'app.log')"},{question:"What does 'os.listdir(dir_path)' return?",shortAnswer:"A list of strings containing the names of all entries (files and folders) inside the directory, excluding '.' and '..'.",explanation:"Directory listing.",hint:"Returns a list of entry names inside the directory.",level:"basic",codeExample:"files = os.listdir('/var/log')"},{question:"Why is hardcoding forward slashes ('/') or backslashes ('\\\\') in file paths an anti-pattern?",shortAnswer:"Hardcoded separators break cross-platform portability; Windows uses '\\' and Linux/macOS use '/', so use 'os.path.join()' or 'pathlib.Path' instead.",explanation:"Cross-platform path compatibility.",hint:"Hardcoded separators cause bugs across Windows and Linux; use os.path.join.",level:"basic",codeExample:"# BAD: 'dir\\file.txt' -> GOOD: os.path.join('dir', 'file.txt')"},{question:"How do you safely read an integer environment variable with a default fallback?",shortAnswer:`Using 'int(os.getenv("PORT", "8000"))', providing a default string value before calling 'int()'.`,explanation:"Type casting environment variables.",hint:"Pass default as string to getenv, then cast to int.",level:"basic",codeExample:"port = int(os.getenv('PORT', '8080'))"},{question:"What is 'os.urandom(size)' and why is it used for cryptography?",shortAnswer:"It generates cryptographically strong random bytes from the OS kernel entropy source ('/dev/urandom' on Unix, CryptGenRandom/BCrypt on Windows), suitable for encryption keys and tokens.",explanation:"Kernel cryptographic random source.",hint:"Generates cryptographically secure random bytes directly from the OS kernel.",level:"moderate",codeExample:"token = os.urandom(32).hex()"},{question:"What is the ultimate golden rule for using the 'os' module in production Python applications?",shortAnswer:"Always access environment secrets with 'os.getenv()' fallbacks, create directories with 'os.makedirs(exist_ok=True)', perform atomic file overwrites with 'os.replace()', and never hardcode OS path separators.",explanation:"The complete enterprise guideline for the os module in Python.",hint:"Use os.getenv with fallbacks, os.makedirs(exist_ok=True), os.replace for atomic swaps, and portable path joins.",level:"basic",codeExample:"# Python OS Module Enterprise Mastery"}];function U(){const m=n.useRef([]),[i,p]=n.useState("kernelBoundary"),[x,f]=n.useState("production"),[s,C]=n.useState("accotax_storage_vault/system_logs"),[d,u]=n.useState("INVENTORY_ENV"),_=48120,b=8,y="Windows NT (os.name='nt')",g="E:\\react_routing_tailwind";let o="",a="";d==="INVENTORY_ENV"?(a=`# Inspect environment variables safely:
env_mode = os.getenv("ACCOTAX_ENV", "development")
db_url = os.getenv("ACCOTAX_DATABASE_URL", "postgresql://localhost:5432")
api_key = os.getenv("ACCOTAX_API_KEY", "DEMO_KEY")
masked_key = api_key[:4] + "****"`,o=`[OS_AUDIT] INVENTORYING ENVIRONMENT VARIABLES:
* ACCOTAX_ENV          = "${x}"
* ACCOTAX_DATABASE_URL = "postgresql://db.accotax.internal:5432/main"
* ACCOTAX_API_KEY      = "DEMO****" (Masked for Security)
* ACCOTAX_PORT         = "8080"
[STATUS] 100% Mandatory Environment Variables Verified.`):d==="QUERY_STAT"?(a=`# Low-level filesystem query with os.stat():
file_path = "${s}/heartbeat.log"
if os.path.exists(file_path) and os.path.isfile(file_path):
    stat_info = os.stat(file_path)
    file_size = stat_info.st_size
    mod_time = datetime.fromtimestamp(stat_info.st_mtime)`,o=`[OS_AUDIT] QUERYING FILESYSTEM METADATA:
* Target Path  : ${s}/heartbeat.log
* os.path.exists() : True
* os.path.isfile() : True
* os.stat().st_size: 1,420 bytes
* os.stat().st_mode: 0o100666 (Regular File rw-rw-rw-)
* Modified Time: 2026-08-24 23:45:00`):d==="TEST_MAKEDIRS"?(a=`# Safe idempotent recursive directory creation:
vault_dir = "${s}"
os.makedirs(vault_dir, exist_ok=True)
print("Created hierarchy:", os.path.isdir(vault_dir))`,o=`[OS_AUDIT] RECURSIVE DIRECTORY CREATION:
* Executing: os.makedirs("${s}", exist_ok=True)
* Created nested path: '${s}'
* Is Directory: True
* Idempotency Check: Succeeded without FileExistsError.`):(a=`# Verify OS file permissions:
is_readable = os.access("${s}", os.R_OK)
is_writable = os.access("${s}", os.W_OK)
is_executable = os.access("${s}", os.X_OK)`,o=`[OS_AUDIT] TESTING OS PERMISSION BITS:
* Target: '${s}'
* Read Permission (os.R_OK)    : True [GRANTED]
* Write Permission (os.W_OK)   : True [GRANTED]
* Execute Permission (os.X_OK) : False [DENIED]
[STATUS] Node storage directory is fully writable.`),n.useEffect(()=>{const t=new IntersectionObserver(c=>{c.forEach(h=>{h.isIntersecting&&h.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return m.current.forEach(c=>{c&&t.observe(c)}),()=>t.disconnect()},[]);const r=t=>{t&&!m.current.includes(t)&&m.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:r,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 4 • Module 004_001"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 0"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Advanced File Operations, OS & Subprocess Automation"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["OS Module: ",e.jsx("span",{className:"text-teal-400",children:"Environment, CWD & Filesystem Queries"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master Python's core operating system interface: defensive environment variable access with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"os.getenv()"}),", process runtime metadata, working directory management, recursive directory creation (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"os.makedirs(exist_ok=True)"}),"), atomic file replacement (",e.jsx("code",{className:"text-purple-300 font-mono",children:"os.replace"}),"), and kernel permission bits (",e.jsx("code",{className:"text-amber-300 font-mono",children:"os.access"}),")."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔐 `os.getenv` Fallbacks"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📂 `os.makedirs(exist_ok=True)`"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ Atomic `os.replace`"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ `os.access` Permission Bits"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚙️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Operating System Interface Architecture"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["The ",e.jsx("code",{className:"text-teal-300 font-mono",children:"os"})," module serves as the primary bridge between the Python runtime and the host operating system kernel:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Environment & Process"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"os.getenv(), os.getpid()"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Reads configuration secrets, detects process IDs, CPU count, and kernel platform."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ CWD & Metadata"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"os.getcwd(), os.stat()"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Inspects working directories, file size, timestamps, and inode metadata."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Tree CRUD & Permissions"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"os.makedirs(), os.replace()"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Atomic file renaming, recursive directory trees, and OS access permission testing."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The KeyError Danger of Direct `os.environ` Indexing"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Calling ",e.jsx("code",{className:"text-rose-400 font-mono",children:'os.environ["SECRET_TOKEN"]'})," raises an unhandled ",e.jsx("code",{className:"text-rose-400 font-mono",children:"KeyError"})," if the variable is not set. In production services, always use ",e.jsx("code",{className:"text-teal-300 font-mono",children:'os.getenv("SECRET_TOKEN", fallback)'})," to provide safe, reliable fallbacks!"]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing OS Process Boundaries, Stat Structs & Directories"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>p("kernelBoundary"),className:l("px-3 py-1.5 rounded-lg transition-all",i==="kernelBoundary"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Kernel & Process Boundary"}),e.jsx("button",{onClick:()=>p("statStruct"),className:l("px-3 py-1.5 rounded-lg transition-all",i==="statStruct"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"`os.stat()` Metadata"}),e.jsx("button",{onClick:()=>p("treeCreation"),className:l("px-3 py-1.5 rounded-lg transition-all",i==="treeCreation"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"`os.makedirs` Safety"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining kernel process boundaries, low-level filesystem inode structs, and recursive directory creation trees:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:i==="kernelBoundary"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"OS KERNEL & PROCESS ENVIRONMENT BOUNDARY"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"Parent Operating System Shell"}),e.jsx("text",{x:"20",y:"65",fill:"#c084fc",fontSize:"8 font-mono",children:"System Env: PATH, HOME, USERNAME"}),e.jsx("text",{x:"20",y:"85",fill:"#cbd5e1",fontSize:"8 font-mono",children:"Spawns Python Subprocess (fork / CreateProcess)"}),e.jsx("rect",{x:"20",y:"125",width:"340",height:"90",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"30",y:"150",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Process Isolation Invariant:"}),e.jsx("text",{x:"30",y:"170",fill:"#cbd5e1",fontSize:"8",children:"Parent shell environment is immutable to child modifications."}),e.jsx("text",{x:"30",y:"185",fill:"#cbd5e1",fontSize:"8",children:"`os.environ['X'] = 1` does NOT change parent terminal!"})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"Python Process (`PID = 48120`)"}),e.jsx("text",{x:"20",y:"65",fill:"#34d399",fontSize:"8 font-mono",children:"1. `os.environ` inherits snapshot copy"}),e.jsx("text",{x:"20",y:"85",fill:"#34d399",fontSize:"8 font-mono",children:"2. `os.getcwd()` references launch folder"}),e.jsx("text",{x:"20",y:"105",fill:"#34d399",fontSize:"8 font-mono",children:"3. `os.cpu_count()` queries hardware cores"}),e.jsx("rect",{x:"20",y:"125",width:"340",height:"90",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"150",fill:"#34d399",fontSize:"9 font-bold",children:"Safe Ingestion:"}),e.jsx("text",{x:"30",y:"170",fill:"#cbd5e1",fontSize:"8",children:"`os.getenv('DATABASE_URL', fallback)` protects process"}),e.jsx("text",{x:"30",y:"185",fill:"#cbd5e1",fontSize:"8",children:"from crashing on missing cloud environment variables."})]})]}):i==="statStruct"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"LOW-LEVEL `os.stat(path)` INODE & METADATA STRUCT"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"20",y:"30",fill:"#a5f3fc",fontSize:"12",fontWeight:"bold",children:'`os.stat("accotax_ledger.csv")` -> os.stat_result'}),e.jsxs("g",{transform:"translate(20, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"245",height:"155",rx:"6",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"15",y:"30",fill:"#38bdf8",fontSize:"10 font-bold",children:"1. File Size & Inode"}),e.jsx("text",{x:"15",y:"60",fill:"#cbd5e1",fontSize:"8 font-mono",children:"st_size  : 1,420 bytes"}),e.jsx("text",{x:"15",y:"80",fill:"#cbd5e1",fontSize:"8 font-mono",children:"st_ino   : 9283719482"}),e.jsx("text",{x:"15",y:"100",fill:"#34d399",fontSize:"8 font-mono",children:"`os.path.getsize(path)`"}),e.jsx("rect",{x:"265",y:"0",width:"245",height:"155",rx:"6",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"280",y:"30",fill:"#38bdf8",fontSize:"10 font-bold",children:"2. Timestamps"}),e.jsx("text",{x:"280",y:"60",fill:"#cbd5e1",fontSize:"8 font-mono",children:"st_mtime : 1771891200"}),e.jsx("text",{x:"280",y:"80",fill:"#cbd5e1",fontSize:"8 font-mono",children:"st_ctime : 1771890000"}),e.jsx("text",{x:"280",y:"100",fill:"#34d399",fontSize:"8 font-mono",children:"`datetime.fromtimestamp()`"}),e.jsx("rect",{x:"530",y:"0",width:"245",height:"155",rx:"6",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"545",y:"30",fill:"#38bdf8",fontSize:"10 font-bold",children:"3. Permissions & Mode"}),e.jsx("text",{x:"545",y:"60",fill:"#cbd5e1",fontSize:"8 font-mono",children:"st_mode  : 0o100644"}),e.jsx("text",{x:"545",y:"80",fill:"#cbd5e1",fontSize:"8 font-mono",children:"os.R_OK  : True"}),e.jsx("text",{x:"545",y:"100",fill:"#34d399",fontSize:"8 font-mono",children:"`os.access(path, W_OK)`"})]})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"RECURSIVE DIRECTORY CREATION: `os.mkdir()` VS `os.makedirs(exist_ok=True)`"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:'`os.mkdir("logs/2026/q1")` [BRITTLE]'}),e.jsx("text",{x:"20",y:"65",fill:"#fca5a5",fontSize:"8 font-mono",children:"1. If 'logs' folder does NOT exist -> FileNotFoundError!"}),e.jsx("text",{x:"20",y:"85",fill:"#fca5a5",fontSize:"8 font-mono",children:"2. If 'q1' folder ALREADY exists -> FileExistsError!"}),e.jsx("text",{x:"20",y:"105",fill:"#f43f5e",fontSize:"8 font-mono font-bold",children:"Requires manual try-except boilerplate"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"155",fill:"#fda4af",fontSize:"9 font-bold",children:"Fragile & Non-Idempotent:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Fails on multi-level paths or pre-existing folders."})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:'`os.makedirs("logs/2026/q1", exist_ok=True)` [IDEMPOTENT]'}),e.jsx("text",{x:"20",y:"65",fill:"#34d399",fontSize:"8 font-mono",children:"1. Recursively creates 'logs', '2026', and 'q1'"}),e.jsx("text",{x:"20",y:"85",fill:"#34d399",fontSize:"8 font-mono",children:"2. `exist_ok=True` suppresses FileExistsError"}),e.jsx("text",{x:"20",y:"105",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"3. 100% Thread-Safe & Idempotent"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"Production Standard:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Guarantees directory tree exists with a single call."})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive OS Environment & Filesystem Laboratory"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Configure server environment modes, select OS query actions, inspect process metadata, and observe live terminal execution telemetry:"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"1. Select OS Action Trigger:"}),e.jsx("div",{className:"grid grid-cols-2 gap-1.5 bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:[{id:"INVENTORY_ENV",label:"1. Inventory Env Vars"},{id:"QUERY_STAT",label:"2. Query os.stat()"},{id:"TEST_MAKEDIRS",label:"3. os.makedirs Tree"},{id:"TEST_PERMS",label:"4. Test os.access()"}].map(t=>e.jsx("button",{onClick:()=>u(t.id),className:l("py-1.5 rounded transition-all",d===t.id?"bg-teal-900/60 text-teal-300 font-bold border border-teal-700/80":"text-slate-400 hover:text-white"),children:t.label},t.id))})]}),e.jsxs("div",{className:"space-y-1.5 pt-1",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold",children:"2. ACCOTAX_ENV Variable:"}),e.jsx("div",{className:"flex bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:["production","staging","development"].map(t=>e.jsx("button",{onClick:()=>f(t),className:l("flex-1 py-1 rounded transition-all capitalize",x===t?"bg-cyan-900/60 text-cyan-300 font-bold border border-cyan-700/80":"text-slate-400 hover:text-white"),children:t},t))})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs font-mono space-y-1",children:[e.jsx("div",{className:"text-slate-400 text-[10px] uppercase font-bold",children:"Host Process Metadata:"}),e.jsxs("div",{className:"flex justify-between text-slate-300 text-[11px]",children:[e.jsxs("span",{children:["PID: ",e.jsx("strong",{className:"text-teal-300",children:_})]}),e.jsxs("span",{children:["Kernel: ",e.jsx("strong",{className:"text-cyan-300",children:y})]}),e.jsxs("span",{children:["CPUs: ",e.jsxs("strong",{className:"text-purple-300",children:[b," Cores"]})]})]}),e.jsxs("div",{className:"text-[10px] text-slate-400 truncate pt-0.5",children:["CWD: ",g]})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs space-y-1",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:"Generated Python os Execution Code:"}),e.jsx("pre",{className:"text-teal-300 text-[11px] leading-relaxed break-all font-mono overflow-x-auto",children:a})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[160px] font-mono text-xs space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-[10px] font-bold uppercase text-slate-400",children:[e.jsx("span",{children:"OS Terminal Telemetry Stream:"}),e.jsx("span",{className:"text-emerald-400",children:"Exit Code 0"})]}),e.jsx("pre",{className:"text-slate-200 text-[11px] leading-relaxed font-mono whitespace-pre-wrap",children:o})]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master `os` Module Function Reference Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Function Signature"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Category"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Error Behavior"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Primary Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"`os.getenv(k, def)`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Environment"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Safe (Returns `def`)"}),e.jsx("td",{className:"py-3 px-4",children:"Production secret & DB URL ingestion"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"`os.makedirs(p, exist_ok=True)`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Directory CRUD"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Safe (Idempotent)"}),e.jsx("td",{className:"py-3 px-4",children:"Creating nested log/storage trees"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"`os.replace(src, dst)`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"File Operation"}),e.jsx("td",{className:"py-3 px-4 text-purple-300",children:"Atomic Overwrite"}),e.jsx("td",{className:"py-3 px-4",children:"Cross-platform atomic file swapping"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"`os.access(p, mode)`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Permissions"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Returns `bool`"}),e.jsx("td",{className:"py-3 px-4",children:"Testing read/write OS permissions"})]})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating environment variable management, path queries, directory CRUD, and institutional server auditors:"}),e.jsx(v,{files:[{filename:"os_environment_and_process_management.py",code:j,description:"Environment variables, getenv fallbacks, and process introspection."},{filename:"os_working_directory_and_path_queries.py",code:S,description:"getcwd, path queries, and stat metadata."},{filename:"os_filesystem_crud_and_permissions.py",code:T,description:"os.makedirs(exist_ok=True), os.replace, and os.access."},{filename:"institutional_system_environment_and_audit_inspector.py",code:A,description:"Server environment audit, process metadata, and filesystem permission inspection."}]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Direct Indexing `os.environ['KEY']`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Direct indexing raises a fatal ",e.jsx("code",{className:"text-rose-300 font-mono",children:"KeyError"})," if the variable is missing from the host environment."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always use ",e.jsx("code",{className:"text-emerald-300",children:"os.getenv('KEY', fallback)"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Mutating CWD with `os.chdir()`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["CWD is process-global; modifying it via ",e.jsx("code",{className:"text-amber-300 font-mono",children:"os.chdir()"})," changes the directory for all concurrent threads!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use absolute paths (",e.jsx("code",{className:"text-emerald-300",children:"os.path.abspath"})," or ",e.jsx("code",{className:"text-emerald-300",children:"pathlib.Path"}),")."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Omission of `exist_ok=True`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-purple-300 font-mono",children:"os.makedirs(path)"})," without ",e.jsx("code",{className:"text-purple-300 font-mono",children:"exist_ok=True"})," crashes with ",e.jsx("code",{className:"text-slate-300",children:"FileExistsError"})," when run multiple times."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always specify ",e.jsx("code",{className:"text-emerald-300",children:"exist_ok=True"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Hardcoding OS Path Separators"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-cyan-300 font-mono",children:'path = "folder\\\\sub\\\\file.txt"'})," breaks portability on Linux/macOS."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"os.path.join()"})," or ",e.jsx("code",{className:"text-emerald-300",children:"pathlib.Path"}),"."]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering os module, environment variables, working directory, stat structs, and filesystem permissions:"}),e.jsx(w,{questions:O})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with os module recipes, environment variable patterns, and filesystem query templates:"}),e.jsx("div",{className:"mb-10",children:e.jsx(E,{content:k,filename:"python_topic0_os_module_and_environment_notes.txt",title:"Print Topic 0 Study Notes"})}),e.jsx(N,{})]})]})]})}export{U as default};
