import{b as i,j as e,bg as d}from"./vendor-react-core-Doz9nIC6.js";import{P as b}from"./PythonFileLoader-hCi5osN-.js";import{P as y}from"./PlainTextPrint-C08xhKA4.js";import{F as g}from"./FAQTemplate-CkSqDH4B.js";import{T as j}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const w=`# topic2_files/math_and_random_modules.py\r
# Module: 002_009_modules-packages\r
# Topic: Built-in standard library modules: math, random, datetime, sys, os\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 2 - File 1: Python math, random & secrets Standard Library Modules\r
Demonstrates:\r
  1. math module functions: sqrt, ceil, floor, gcd, isclose, pi, e\r
  2. random module: randint, choice, shuffle, sample, seed\r
  3. secrets module: Cryptographically secure random tokens for auth and security\r
"""\r
\r
import math\r
import random\r
import secrets\r
\r
def demonstrate_math_module():\r
    print("=" * 65)\r
    print("1. math MODULE: HIGH-PRECISION MATHEMATICAL FUNCTIONS")\r
    print("=" * 65)\r
\r
    # Basic Constants\r
    print(f"math.pi             : {math.pi:.6f}")\r
    print(f"math.e              : {math.e:.6f}\\n")\r
\r
    # Rounding & Roots\r
    val = 14.337\r
    print(f"math.ceil({val})      : {math.ceil(val)} (Round up)")\r
    print(f"math.floor({val})     : {math.floor(val)} (Round down)")\r
    print(f"math.sqrt(225)      : {math.sqrt(225)}")\r
    print(f"math.pow(2, 8)      : {math.pow(2, 8)} (2^8 as float)\\n")\r
\r
    # Number Theory & Comparisons\r
    print(f"math.gcd(48, 180)   : {math.gcd(48, 180)} (Greatest Common Divisor)")\r
    print(f"math.factorial(6)   : {math.factorial(6)} (6!)")\r
    \r
    # Float precision comparison: math.isclose()\r
    f1 = 0.1 + 0.2\r
    f2 = 0.3\r
    print(f"0.1 + 0.2 == 0.3    : {f1 == f2} (False due to float binary representation!)")\r
    print(f"math.isclose(f1, f2): {math.isclose(f1, f2)} (True - safe float comparison!)")\r
\r
\r
def demonstrate_random_module():\r
    print("\\n" + "=" * 65)\r
    print("2. random MODULE: PSEUDO-RANDOM NUMBER GENERATION")\r
    print("=" * 65)\r
\r
    # Set seed for reproducible experiments\r
    random.seed(42)\r
\r
    students = ["Susmita", "Rahul", "Priya", "Anirban", "Sneha", "Debjit"]\r
    print(f"Student Pool        : {students}")\r
\r
    # Random selection\r
    lucky_winner = random.choice(students)\r
    print(f"random.choice()     : '{lucky_winner}' selected as batch representative")\r
\r
    # Random sampling without replacement\r
    committee = random.sample(students, k=3)\r
    print(f"random.sample(k=3)  : {committee}")\r
\r
    # Random integers & floats\r
    roll_num = random.randint(1001, 1099)\r
    discount = round(random.uniform(5.0, 15.0), 1)\r
    print(f"random.randint()    : Roll #{roll_num}")\r
    print(f"random.uniform()    : {discount}% Scholarship discount")\r
\r
    # In-place shuffling\r
    deck = [1, 2, 3, 4, 5]\r
    random.shuffle(deck)\r
    print(f"random.shuffle()    : {deck}")\r
\r
\r
def demonstrate_secrets_module():\r
    print("\\n" + "=" * 65)\r
    print("3. secrets MODULE: CRYPTOGRAPHICALLY SECURE RANDOM GENERATION")\r
    print("=" * 65)\r
\r
    # secrets is designed for passwords, security tokens, and OTPs\r
    auth_token = secrets.token_hex(16)\r
    url_safe_token = secrets.token_urlsafe(16)\r
    otp_code = secrets.randbelow(900000) + 100000  # 6-digit OTP\r
\r
    print(f"Auth Hex Token (32-char) : {auth_token}")\r
    print(f"URL-Safe Token           : {url_safe_token}")\r
    print(f"Secure 6-Digit SMS OTP   : {otp_code}")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_math_module()\r
    demonstrate_random_module()\r
    demonstrate_secrets_module()\r
`,N=`# topic2_files/datetime_and_time_modules.py\r
# Module: 002_009_modules-packages\r
# Topic: Built-in standard library modules: math, random, datetime, sys, os\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 2 - File 2: datetime, timedelta & time Standard Library Modules\r
Demonstrates:\r
  1. Creating and inspecting date, time, and datetime objects\r
  2. Timedelta arithmetic (Adding/subtracting days, computing date differences)\r
  3. Formatting with strftime() and parsing strings with strptime()\r
  4. High-resolution benchmarking with time.perf_counter()\r
"""\r
\r
import datetime as dt\r
import time\r
\r
def demonstrate_datetime_and_timedelta():\r
    print("=" * 65)\r
    print("1. datetime & timedelta: DATE ARITHMETIC")\r
    print("=" * 65)\r
\r
    # Current date and time\r
    now = dt.datetime(2026, 8, 24, 18, 30, 0)\r
    today = now.date()\r
    print(f"Current Datetime     : {now}")\r
    print(f"Date Component       : {today}\\n")\r
\r
    # Timedelta Arithmetic\r
    days_to_exam = dt.timedelta(days=45)\r
    exam_date = today + days_to_exam\r
    print(f"Exam Scheduled Date  : {exam_date} (+45 days)")\r
\r
    # Date difference calculation\r
    course_start = dt.date(2026, 7, 1)\r
    elapsed = today - course_start\r
    print(f"Days Since Batch Start: {elapsed.days} days completed\\n")\r
\r
\r
def demonstrate_strftime_and_strptime():\r
    print("=" * 65)\r
    print("2. strftime() (FORMATTING) VS strptime() (PARSING)")\r
    print("=" * 65)\r
\r
    # A. strftime: datetime -> String\r
    current_moment = dt.datetime(2026, 8, 24, 18, 30, 0)\r
    formatted_in = current_moment.strftime("%d-%b-%Y (%A) at %I:%M %p")\r
    iso_format = current_moment.strftime("%Y-%m-%dT%H:%M:%S")\r
\r
    print(f"strftime() Indian Format : '{formatted_in}'")\r
    print(f"strftime() ISO-8601      : '{iso_format}'\\n")\r
\r
    # B. strptime: String -> datetime object\r
    raw_date_str = "15/09/2026 10:00:00"\r
    parsed_dt = dt.datetime.strptime(raw_date_str, "%d/%m/%Y %H:%M:%S")\r
    print(f"Raw Input String         : '{raw_date_str}'")\r
    print(f"strptime() Parsed Object : {parsed_dt} (Type: {type(parsed_dt).__name__})")\r
\r
\r
def demonstrate_time_perf_counter():\r
    print("\\n" + "=" * 65)\r
    print("3. time.perf_counter(): HIGH-PRECISION BENCHMARKING")\r
    print("=" * 65)\r
\r
    # High-precision timer for algorithm benchmarking\r
    t_start = time.perf_counter()\r
\r
    # Perform a light calculation (sum of 1,000,000 numbers)\r
    total = sum(i ** 2 for i in range(100_000))\r
\r
    t_end = time.perf_counter()\r
    duration_ms = (t_end - t_start) * 1000\r
\r
    print(f"Calculated Sum           : {total}")\r
    print(f"Execution Duration       : {duration_ms:.3f} milliseconds")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_datetime_and_timedelta()\r
    demonstrate_strftime_and_strptime()\r
    demonstrate_time_perf_counter()\r
`,v=`# topic2_files/sys_and_os_system_modules.py\r
# Module: 002_009_modules-packages\r
# Topic: Built-in standard library modules: math, random, datetime, sys, os\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 2 - File 3: sys & os System & Operating System Bridge Modules\r
Demonstrates:\r
  1. sys module: sys.argv, sys.platform, sys.version, sys.getsizeof()\r
  2. os module: os.getcwd(), os.listdir(), os.environ environment variables\r
  3. os.path: Cross-platform path construction (os.path.join vs string concat)\r
  4. Memory footprint inspection for core Python data types\r
"""\r
\r
import sys\r
import os\r
\r
def demonstrate_sys_module():\r
    print("=" * 65)\r
    print("1. sys MODULE: INTERPRETER RUNTIME METADATA")\r
    print("=" * 65)\r
\r
    print(f"Python Version       : {sys.version.split()[0]}")\r
    print(f"Operating Platform   : {sys.platform} (e.g. win32, linux, darwin)")\r
    print(f"CPython Executable   : '{sys.executable}'")\r
    print(f"Command-Line argv    : {sys.argv}\\n")\r
\r
    # Object Memory Footprint (sys.getsizeof in bytes)\r
    sample_int = 42\r
    sample_str = "Coder & AccoTax Barrackpore"\r
    sample_list = [1, 2, 3, 4, 5]\r
    sample_dict = {"a": 1, "b": 2}\r
\r
    print("Memory Consumption (sys.getsizeof):")\r
    print(f"  * int (42)         : {sys.getsizeof(sample_int)} bytes")\r
    print(f"  * str ('{sample_str[:12]}...'): {sys.getsizeof(sample_str)} bytes")\r
    print(f"  * list (5 items)   : {sys.getsizeof(sample_list)} bytes")\r
    print(f"  * dict (2 items)   : {sys.getsizeof(sample_dict)} bytes\\n")\r
\r
\r
def demonstrate_os_and_os_path():\r
    print("=" * 65)\r
    print("2. os & os.path: FILE SYSTEM & ENVIRONMENT BRIDGE")\r
    print("=" * 65)\r
\r
    # Current working directory\r
    cwd = os.getcwd()\r
    print(f"Current Working Dir  : '{cwd}'")\r
\r
    # Safe cross-platform path joining (Handles Windows \\\\ vs Unix / automatically)\r
    reports_dir = os.path.join(cwd, "reports", "2026", "august")\r
    print(f"os.path.join() Path  : '{reports_dir}'")\r
    print(f"Path Exists?         : {os.path.exists(reports_dir)}\\n")\r
\r
    # Environment variables inspection\r
    os_name = os.environ.get("OS", "Unknown OS")\r
    user_name = os.environ.get("USERNAME", os.environ.get("USER", "DefaultUser"))\r
    print(f"OS Environment       : {os_name}")\r
    print(f"Active User Account  : {user_name}")\r
\r
    # Directory contents listing (first 5 files)\r
    entries = os.listdir(cwd)[:5]\r
    print(f"Directory Entries (5): {entries}")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_sys_module()\r
    demonstrate_os_and_os_path()\r
`,_=`# topic2_files/automated_system_audit_and_lottery.py\r
# Module: 002_009_modules-packages\r
# Topic: Built-in standard library modules: math, random, datetime, sys, os\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 2 - File 4: Integrated System Environment Audit & Scholarship Lottery Suite\r
Demonstrates:\r
  1. Integrating all 5 core standard library modules (math, random, datetime, sys, os)\r
  2. System health, memory footprint, and environment diagnostic\r
  3. Verifiable scholarship lottery selector using pseudo-random seeding\r
  4. Enterprise report generation with date math and path safety\r
"""\r
\r
import sys\r
import os\r
import math\r
import random\r
import datetime as dt\r
from typing import Dict, Any, List\r
\r
class EnterpriseDiagnosticSuite:\r
    """Integrated system diagnostic and student event manager."""\r
\r
    @classmethod\r
    def audit_environment(cls) -> Dict[str, Any]:\r
        """Audits Python runtime, memory, and OS parameters."""\r
        return {\r
            "python_version": sys.version.split()[0],\r
            "platform": sys.platform,\r
            "cwd": os.getcwd(),\r
            "user": os.environ.get("USERNAME", os.environ.get("USER", "SystemUser")),\r
            "audit_timestamp": dt.datetime.now(),\r
            "next_scheduled_audit": dt.datetime.now() + dt.timedelta(days=7),\r
        }\r
\r
    @classmethod\r
    def conduct_scholarship_lottery(\r
        cls,\r
        candidates: List[Dict[str, Any]],\r
        winners_count: int = 2,\r
        seed: int = 2026\r
    ) -> List[Dict[str, Any]]:\r
        """Conducts a verifiable, reproducible scholarship draw."""\r
        # Seeding guarantees the lottery can be independently verified and audited\r
        random.seed(seed)\r
        \r
        # Select winners\r
        selected = random.sample(candidates, k=min(winners_count, len(candidates)))\r
        \r
        # Calculate scholarship amounts using math\r
        results = []\r
        for winner in selected:\r
            original_fee = winner["fee"]\r
            # 25% discount rounded up to nearest integer\r
            discount = math.ceil(original_fee * 0.25)\r
            net_fee = original_fee - discount\r
            results.append({\r
                "student_id": winner["id"],\r
                "name": winner["name"],\r
                "course": winner["course"],\r
                "original_fee": original_fee,\r
                "scholarship_discount": discount,\r
                "net_fee_payable": net_fee\r
            })\r
        return results\r
\r
\r
def run_enterprise_demo():\r
    print("=" * 75)\r
    print("CODER & ACCOTAX - INTEGRATED ENVIRONMENT AUDIT & LOTTERY ENGINE")\r
    print("=" * 75)\r
\r
    # 1. System Environment Audit\r
    audit = EnterpriseDiagnosticSuite.audit_environment()\r
    print("\\n--- 1. SYSTEM ENVIRONMENT DIAGNOSTIC ---")\r
    print(f"CPython Version   : {audit['python_version']}")\r
    print(f"Host Platform     : {audit['platform']}")\r
    print(f"Active Operator   : {audit['user']}")\r
    print(f"Audit Timestamp   : {audit['audit_timestamp']:%d-%b-%Y %I:%M:%S %p}")\r
    print(f"Next Audit Date   : {audit['next_scheduled_audit']:%d-%b-%Y}")\r
\r
    # 2. Scholarship Draw\r
    student_candidates = [\r
        {"id": 101, "name": "Susmita Mukherjee", "course": "Python Pro", "fee": 12000},\r
        {"id": 102, "name": "Rahul Roy", "course": "Data Analytics", "fee": 10000},\r
        {"id": 103, "name": "Priya Sharma", "course": "Web Development", "fee": 14000},\r
        {"id": 104, "name": "Anirban Banerjee", "course": "GST & Accounting", "fee": 8500},\r
        {"id": 105, "name": "Sneha Das", "course": "Python Pro", "fee": 12000},\r
    ]\r
\r
    print("\\n--- 2. VERIFIABLE 2026 SCHOLARSHIP LOTTERY DRAW ---")\r
    winners = EnterpriseDiagnosticSuite.conduct_scholarship_lottery(student_candidates, winners_count=2, seed=2026)\r
    for idx, w in enumerate(winners, 1):\r
        print(f"Winner #{idx}: {w['name']} (ID: {w['student_id']}) - {w['course']}")\r
        print(f"  Gross: INR {w['original_fee']} | Scholarship: -INR {w['scholarship_discount']} (25%) | Net: INR {w['net_fee_payable']}\\n")\r
\r
\r
if __name__ == "__main__":\r
    run_enterprise_demo()\r
`,S=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
            PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_009: MODULES & PACKAGES\r
      TOPIC 2: BUILT-IN STANDARD LIBRARY MODULES (MATH, RANDOM, DATETIME, SYS, OS)\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. THE 5 PILLAR STANDARD LIBRARY MODULES QUICK REFERENCE\r
--------------------------------------------------------------------------------\r
  Module      Core Capabilities                              Key Functions\r
  ------------------------------------------------------------------------------\r
  math        High-precision math, roots, gcd, trigonometry  sqrt, ceil, floor, gcd, isclose\r
  random      Pseudo-random simulation & sampling            randint, choice, sample, shuffle\r
  datetime    Calendar dates, clock times, duration math     date, datetime, timedelta, strftime\r
  sys         CPython interpreter & memory internals         argv, platform, version, getsizeof\r
  os          Operating system & file path management        getcwd, listdir, environ, path.join\r
\r
--------------------------------------------------------------------------------\r
2. RANDOM VS SECRETS (SECURITY RULE)\r
--------------------------------------------------------------------------------\r
  • Use \`random\`: Simulations, games, statistical sampling, data shuffling.\r
  • Use \`secrets\`: Passwords, authentication tokens, password reset links, OTPs.\r
  • NEVER use \`random\` for generating security keys or sensitive tokens!\r
\r
--------------------------------------------------------------------------------\r
3. DATETIME: strftime() VS strptime()\r
--------------------------------------------------------------------------------\r
  • strftime (Format): Datetime Object -> Formatted String\r
      now.strftime("%d-%b-%Y") -> "24-Aug-2026"\r
  • strptime (Parse): Raw String -> Datetime Object\r
      dt.datetime.strptime("24-08-2026", "%d-%m-%Y") -> datetime(2026, 8, 24)\r
\r
--------------------------------------------------------------------------------\r
4. CROSS-PLATFORM PATH RULE (os.path.join)\r
--------------------------------------------------------------------------------\r
  • BAD (Platform Dependent):\r
      path = folder + "\\\\" + filename  # Fails on Linux/macOS\r
  • GOOD (Cross-Platform):\r
      path = os.path.join(folder, filename) # Works on Windows, Linux, and macOS\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 2: CORE STANDARD LIBRARY MODULES\r
================================================================================\r
`,E=[{question:"Why does (0.1 + 0.2 == 0.3) evaluate to False in Python and how does math.isclose() solve this?",shortAnswer:"Floating-point numbers are represented in binary IEEE 754 format which cannot represent base-10 decimals exactly; math.isclose(a, b) compares floats within a tiny tolerance (relative tolerance).",explanation:"0.1 + 0.2 produces 0.30000000000000004 in binary float math. math.isclose(0.1 + 0.2, 0.3) handles this tolerance safely and returns True.",hint:"Binary float precision issues; use math.isclose().",level:"basic",codeExample:`import math
print(0.1 + 0.2 == 0.3)          # False
print(math.isclose(0.1 + 0.2, 0.3))  # True`},{question:"What is the difference between random.choice() and random.sample()?",shortAnswer:"random.choice() returns a single random element; random.sample(seq, k) returns a list of k unique elements chosen without replacement.",explanation:"If you need 3 distinct winners from a student list without duplicates, use random.sample(students, 3).",hint:"choice() gives 1 item; sample(seq, k) gives k unique items.",level:"basic",codeExample:`import random
items = ['A', 'B', 'C', 'D']
print(random.choice(items))      # 'B'
print(random.sample(items, 2))   # ['C', 'A']`},{question:"Why should you NEVER use the 'random' module for generating passwords, authentication tokens, or OTPs?",shortAnswer:"The 'random' module uses the Mersenne Twister algorithm which is pseudo-random and completely predictable after observing 624 outputs; use the 'secrets' module instead.",explanation:"The standard 'secrets' module generates cryptographically secure pseudo-random numbers (CSPRNG) backed by operating system entropy.",hint:"random is predictable; secrets is cryptographically secure.",level:"basic",codeExample:`import secrets
print(secrets.token_hex(16))     # Secure 32-character token
print(secrets.randbelow(900000) + 100000) # Secure 6-digit OTP`},{question:"What is the operational difference between strftime() and strptime() in the datetime module?",shortAnswer:"strftime() formats a datetime object into a string (String Format Time); strptime() parses a string into a datetime object (String Parse Time).",explanation:"Memory mnemonic: 'f' in strftime stands for 'Format', 'p' in strptime stands for 'Parse'.",hint:"strftime = Datetime to String; strptime = String to Datetime.",level:"basic",codeExample:`import datetime as dt
# strftime:
print(dt.date(2026, 8, 24).strftime('%d-%b-%Y'))  # '24-Aug-2026'
# strptime:
print(dt.datetime.strptime('24-08-2026', '%d-%m-%Y'))  # datetime(2026, 8, 24)`},{question:"How do you calculate a future date 30 days from today using datetime.timedelta?",shortAnswer:"today = datetime.date.today(); future_date = today + datetime.timedelta(days=30)",explanation:"timedelta represents a duration of time and supports addition and subtraction directly with date and datetime objects.",hint:"Use date + timedelta(days=30).",level:"basic",codeExample:`import datetime as dt
today = dt.date(2026, 8, 24)
due_date = today + dt.timedelta(days=30)
print(due_date)  # 2026-09-23`},{question:"Why is time.perf_counter() preferred over time.time() for benchmarking code execution speed?",shortAnswer:"time.perf_counter() is a monotonic, high-resolution clock designed specifically for performance measurement, unaffected by system clock updates or daylight savings shifts.",explanation:"time.time() measures wall-clock time and can jump backwards if the system clock syncs with an NTP server, invalidating benchmark results.",hint:"perf_counter is monotonic and high-resolution.",level:"moderate",codeExample:`import time
t0 = time.perf_counter()
sum(range(100000))
t1 = time.perf_counter()
print(f'Elapsed: {(t1-t0)*1000:.3f} ms')`},{question:"What does sys.argv contain when a Python script is executed from the command line?",shortAnswer:"A list of command-line argument strings passed to the script, where sys.argv[0] is the script filename itself.",explanation:"Running 'python app.py --port 8000' populates sys.argv with ['app.py', '--port', '8000'].",hint:"A list of strings containing CLI arguments.",level:"basic",codeExample:`import sys
print('Script name:', sys.argv[0])`},{question:"What does sys.getsizeof(object) return?",shortAnswer:"The memory footprint of the Python object in bytes allocated by the CPython interpreter heap.",explanation:"Due to object header overhead, even an empty integer or string consumes dozens of bytes in Python.",hint:"Returns object size in bytes.",level:"basic",codeExample:`import sys
print(sys.getsizeof(0))      # 28 bytes
print(sys.getsizeof('hello')) # 54 bytes`},{question:"Why should you always use os.path.join() instead of manual string concatenation for building file paths?",shortAnswer:"os.path.join() automatically uses the correct operating system path separator ('\\' on Windows, '/' on Linux/macOS), preventing cross-platform file path errors.",explanation:"Hardcoding '\\' breaks immediately on Linux and cloud servers. os.path.join ensures code is portable.",hint:"Handles OS-specific slashes (\\ vs /) automatically.",level:"basic",codeExample:`import os
path = os.path.join('data', 'reports', 'august.csv')
print(path)  # data\\reports\\august.csv on Windows, data/reports/august.csv on Linux`},{question:"How do you read an environment variable in Python safely without raising a KeyError?",shortAnswer:"os.environ.get('KEY_NAME', default_value)",explanation:"Accessing os.environ['KEY'] directly raises KeyError if missing; .get() returns None or a specified default safely.",hint:"Use os.environ.get('KEY', default).",level:"basic",codeExample:`import os
db_host = os.environ.get('DB_HOST', 'localhost')
print(db_host)`},{question:"What does random.seed(x) do and why is it essential for reproducible data science experiments?",shortAnswer:"It initializes the internal pseudo-random number generator state so that subsequent random calls produce the exact same sequence of numbers every time.",explanation:"Seeding ensures machine learning splits, simulations, and unit tests produce deterministic, reproducible results.",hint:"Fixes the random sequence for reproducibility.",level:"moderate",codeExample:`import random
random.seed(42)
print(random.randint(1, 100))  # Always prints 82`},{question:"What is the difference between math.ceil() and math.floor()?",shortAnswer:"math.ceil(x) rounds UP to the nearest integer (ceiling); math.floor(x) rounds DOWN to the nearest integer (floor).",explanation:"For 4.2: ceil is 5, floor is 4. For negative -4.2: ceil is -4, floor is -5.",hint:"ceil = up, floor = down.",level:"basic",codeExample:`import math
print(math.ceil(4.1))   # 5
print(math.floor(4.9))  # 4`},{question:"How do you compute the Greatest Common Divisor of two integers in Python?",shortAnswer:"math.gcd(a, b)",explanation:"math.gcd uses Euclid's algorithm in fast C code to compute GCD in logarithmic time.",hint:"Use math.gcd(a, b).",level:"basic",codeExample:`import math
print(math.gcd(48, 180))  # 12`},{question:"What is the difference between os.getcwd() and os.path.dirname(__file__)?",shortAnswer:"os.getcwd() returns the directory from which the terminal command was executed; os.path.dirname(__file__) returns the directory where the .py script file actually resides.",explanation:"If you run 'python /opt/app/main.py' from your home folder, getcwd() is your home folder, while __file__ points to '/opt/app'.",hint:"getcwd is terminal execution dir; __file__ is script location dir.",level:"moderate",codeExample:`import os
print('CWD:', os.getcwd())
print('Script Dir:', os.path.dirname(__file__))`},{question:"How do you shuffle a list in-place using the random module?",shortAnswer:"random.shuffle(my_list)",explanation:"random.shuffle modifies the list in place and returns None (it does not return a new list).",hint:"random.shuffle(list) modifies in place.",level:"basic",codeExample:`import random
deck = [1, 2, 3, 4]
random.shuffle(deck)
print(deck)`},{question:"How do you immediately terminate a running Python program with a specific exit status code?",shortAnswer:"sys.exit(code) (0 for success, non-zero for error)",explanation:"sys.exit() raises the SystemExit exception, allowing Python to clean up finally blocks and exit cleanly.",hint:"Use sys.exit(0) or sys.exit(1).",level:"basic",codeExample:`import sys
# sys.exit(0) -> Success
# sys.exit(1) -> General Error`},{question:"How do you check if a file or directory exists on disk using the standard library?",shortAnswer:"os.path.exists(path) or pathlib.Path(path).exists()",explanation:"Returns True if the path exists, False otherwise.",hint:"Use os.path.exists(path).",level:"basic",codeExample:`import os
print(os.path.exists('Topic2.jsx'))`},{question:"What does sys.platform return on Windows vs Linux vs macOS?",shortAnswer:"'win32' on Windows, 'linux' on Linux, and 'darwin' on macOS.",explanation:"Used extensively for cross-platform branching in production scripts.",hint:"'win32', 'linux', 'darwin'.",level:"basic",codeExample:`import sys
print('Platform:', sys.platform)`},{question:"How do you calculate the difference in days between two dates in Python?",shortAnswer:"(date2 - date1).days",explanation:"Subtracting two date objects returns a timedelta object whose .days property gives the integer day count.",hint:"Subtract dates and read .days.",level:"basic",codeExample:`import datetime as dt
d1 = dt.date(2026, 8, 1)
d2 = dt.date(2026, 8, 24)
print((d2 - d1).days)  # 23`},{question:"What is math.factorial(n)?",shortAnswer:"Computes the product of all positive integers less than or equal to n (n!).",explanation:"math.factorial(5) computes 5 * 4 * 3 * 2 * 1 = 120 in C speed.",hint:"Computes n!",level:"basic",codeExample:`import math
print(math.factorial(5))  # 120`},{question:"How do you list all files and folders in a specific directory using the os module?",shortAnswer:"os.listdir(directory_path)",explanation:"Returns a list of entry names in the given directory.",hint:"Use os.listdir(path).",level:"basic",codeExample:`import os
print(os.listdir('.'))`},{question:"What is the modern standard library replacement for os.path in Python 3.4+?",shortAnswer:"The pathlib module (pathlib.Path)",explanation:"pathlib provides an object-oriented interface for file paths with overloaded '/' operators (e.g. Path('data') / 'file.txt').",hint:"The pathlib module.",level:"moderate",codeExample:`from pathlib import Path
p = Path.cwd() / 'data' / 'file.txt'
print(p)`},{question:"How do you generate a random floating-point number between 10.0 and 20.0?",shortAnswer:"random.uniform(10.0, 20.0)",explanation:"random.random() gives [0.0, 1.0), whereas random.uniform(a, b) gives a float in [a, b].",hint:"Use random.uniform(a, b).",level:"basic",codeExample:`import random
print(round(random.uniform(10.0, 20.0), 2))`},{question:"How do you get the current date and time in UTC format in Python?",shortAnswer:"datetime.datetime.now(datetime.timezone.utc)",explanation:"Using timezone.utc guarantees timezone-aware UTC timestamps, avoiding deprecated utcnow().",hint:"Use datetime.datetime.now(datetime.timezone.utc).",level:"moderate",codeExample:`import datetime as dt
print(dt.datetime.now(dt.timezone.utc))`},{question:"What is math.pow(x, y) vs the built-in operator x ** y?",shortAnswer:"math.pow(x, y) always converts its arguments to floats and returns a float; x ** y supports exact arbitrary-precision integers.",explanation:"For massive integer powers like 2 ** 1000, always use ** to preserve full integer precision.",hint:"math.pow returns float; ** preserves exact integer precision.",level:"moderate",codeExample:`import math
print(math.pow(2, 3))  # 8.0 (float)
print(2 ** 3)          # 8 (int)`}];function z(){const c=i.useRef([]),[o,m]=i.useState("pillars"),[s,h]=i.useState("math"),[a,f]=i.useState(48),[l,u]=i.useState(180);i.useEffect(()=>{const t=new IntersectionObserver(r=>{r.forEach(p=>{p.isIntersecting&&p.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return c.current.forEach(r=>{r&&t.observe(r)}),()=>t.disconnect()},[]);const n=t=>{t&&!c.current.includes(t)&&c.current.push(t)},x=(t,r)=>r?x(r,t%r):t;return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:n,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 2 • Module 002_009"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 2"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Modules, Packages & Python Standard Library"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Built-in Standard Library Modules: ",e.jsx("code",{className:"text-teal-400 font-mono",children:"math"}),", ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"random"}),", ",e.jsx("code",{className:"text-cyan-400 font-mono",children:"datetime"}),", ",e.jsx("code",{className:"text-purple-400 font-mono",children:"sys"}),", ",e.jsx("code",{className:"text-amber-400 font-mono",children:"os"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:[`Master Python's legendary "Batteries Included" standard library: high-precision mathematical operations, pseudo-random & cryptographic sampling, calendar arithmetic with `,e.jsx("code",{className:"text-cyan-300 font-mono",children:"timedelta"}),", interpreter metadata with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"sys"}),", and cross-platform operating system interaction with ",e.jsx("code",{className:"text-amber-300 font-mono",children:"os.path"}),"."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📐 math & isclose() Float Precision"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🎲 random vs secrets Cryptographic Security"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📅 datetime, timedelta & strftime / strptime"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"💻 sys.argv, os.environ & os.path.join()"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The 5 Core Standard Library Pillars"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"Python ships out of the box with over 200 standard library modules. The foundational five power 90% of real-world backend, utility, and automation scripts:"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg shadow-teal-950/30",children:[e.jsx("div",{className:"text-teal-400 font-bold text-base mb-1",children:"📐 math"}),e.jsx("p",{className:"text-xs text-slate-300 mb-2",children:e.jsx("code",{className:"text-teal-300",children:"sqrt, gcd, ceil, floor, isclose"})}),e.jsx("span",{className:"text-[11px] text-teal-400/80 font-mono",children:"Precision Math"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 shadow-lg shadow-emerald-950/30",children:[e.jsx("div",{className:"text-emerald-400 font-bold text-base mb-1",children:"🎲 random"}),e.jsx("p",{className:"text-xs text-slate-300 mb-2",children:e.jsx("code",{className:"text-emerald-300",children:"randint, choice, sample, shuffle"})}),e.jsx("span",{className:"text-[11px] text-emerald-400/80 font-mono",children:"Simulations & Sampling"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg shadow-cyan-950/30",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-base mb-1",children:"📅 datetime"}),e.jsx("p",{className:"text-xs text-slate-300 mb-2",children:e.jsx("code",{className:"text-cyan-300",children:"date, timedelta, strftime, strptime"})}),e.jsx("span",{className:"text-[11px] text-cyan-400/80 font-mono",children:"Date Arithmetic"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg shadow-purple-950/30",children:[e.jsx("div",{className:"text-purple-400 font-bold text-base mb-1",children:"⚙️ sys"}),e.jsx("p",{className:"text-xs text-slate-300 mb-2",children:e.jsx("code",{className:"text-purple-300",children:"argv, platform, exit, getsizeof"})}),e.jsx("span",{className:"text-[11px] text-purple-400/80 font-mono",children:"Interpreter Runtime"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 shadow-lg shadow-amber-950/30",children:[e.jsx("div",{className:"text-amber-400 font-bold text-base mb-1",children:"📂 os"}),e.jsx("p",{className:"text-xs text-slate-300 mb-2",children:e.jsx("code",{className:"text-amber-300",children:"getcwd, listdir, environ, path.join"})}),e.jsx("span",{className:"text-[11px] text-amber-400/80 font-mono",children:"OS & File System"})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Security Golden Rule: `random` vs `secrets`"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"random"})," module uses the Mersenne Twister algorithm which is completely predictable after observing 624 outputs. ",e.jsx("strong",{children:"NEVER"})," use ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"random"})," for passwords, security tokens, or OTPs. Always use the cryptographically secure ",e.jsx("code",{className:"text-teal-400 font-mono",children:"secrets"})," module instead."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"🧭"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Core Standard Library Architecture"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>m("pillars"),className:d("px-3 py-1.5 rounded-lg transition-all",o==="pillars"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"The 5 Pillars"}),e.jsx("button",{onClick:()=>m("datetime"),className:d("px-3 py-1.5 rounded-lg transition-all",o==="datetime"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Datetime Timeline"}),e.jsx("button",{onClick:()=>m("osbridge"),className:d("px-3 py-1.5 rounded-lg transition-all",o==="osbridge"?"bg-amber-900/50 text-amber-300 border border-amber-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"os & sys Hardware Bridge"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining standard library boundaries, date duration pipelines, and host OS interfaces:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:o==="pillars"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"PYTHON STANDARD LIBRARY ECOSYSTEM"}),e.jsxs("g",{transform:"translate(30, 60)",children:[e.jsx("rect",{x:"0",y:"0",width:"150",height:"150",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"28",fill:"#99f6e4",fontSize:"13",fontWeight:"bold",children:"math"}),e.jsx("text",{x:"15",y:"55",fill:"#f8fafc",fontSize:"10",children:"• sqrt(144) = 12"}),e.jsx("text",{x:"15",y:"75",fill:"#f8fafc",fontSize:"10",children:"• ceil(14.2) = 15"}),e.jsx("text",{x:"15",y:"95",fill:"#f8fafc",fontSize:"10",children:"• gcd(48, 180)"}),e.jsx("text",{x:"15",y:"115",fill:"#f8fafc",fontSize:"10",children:"• isclose(a, b)"}),e.jsx("rect",{x:"165",y:"0",width:"150",height:"150",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"180",y:"28",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"random"}),e.jsx("text",{x:"180",y:"55",fill:"#f8fafc",fontSize:"10",children:"• randint(1, 100)"}),e.jsx("text",{x:"180",y:"75",fill:"#f8fafc",fontSize:"10",children:"• choice(seq)"}),e.jsx("text",{x:"180",y:"95",fill:"#f8fafc",fontSize:"10",children:"• sample(seq, 3)"}),e.jsx("text",{x:"180",y:"115",fill:"#f8fafc",fontSize:"10",children:"• shuffle(deck)"}),e.jsx("rect",{x:"330",y:"0",width:"150",height:"150",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"345",y:"28",fill:"#a5f3fc",fontSize:"13",fontWeight:"bold",children:"datetime"}),e.jsx("text",{x:"345",y:"55",fill:"#f8fafc",fontSize:"10",children:"• date(2026, 8, 24)"}),e.jsx("text",{x:"345",y:"75",fill:"#f8fafc",fontSize:"10",children:"• timedelta(days=30)"}),e.jsx("text",{x:"345",y:"95",fill:"#f8fafc",fontSize:"10",children:"• strftime('%d-%b')"}),e.jsx("text",{x:"345",y:"115",fill:"#f8fafc",fontSize:"10",children:"• strptime(str)"}),e.jsx("rect",{x:"495",y:"0",width:"150",height:"150",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"510",y:"28",fill:"#c4b5fd",fontSize:"13",fontWeight:"bold",children:"sys"}),e.jsx("text",{x:"510",y:"55",fill:"#f8fafc",fontSize:"10",children:"• sys.argv (CLI)"}),e.jsx("text",{x:"510",y:"75",fill:"#f8fafc",fontSize:"10",children:"• sys.platform"}),e.jsx("text",{x:"510",y:"95",fill:"#f8fafc",fontSize:"10",children:"• sys.getsizeof()"}),e.jsx("text",{x:"510",y:"115",fill:"#f8fafc",fontSize:"10",children:"• sys.exit(0)"}),e.jsx("rect",{x:"660",y:"0",width:"150",height:"150",rx:"8",fill:"#451a03",stroke:"#f59e0b"}),e.jsx("text",{x:"675",y:"28",fill:"#fde68a",fontSize:"13",fontWeight:"bold",children:"os"}),e.jsx("text",{x:"675",y:"55",fill:"#f8fafc",fontSize:"10",children:"• os.getcwd()"}),e.jsx("text",{x:"675",y:"75",fill:"#f8fafc",fontSize:"10",children:"• os.listdir()"}),e.jsx("text",{x:"675",y:"95",fill:"#f8fafc",fontSize:"10",children:"• os.environ"}),e.jsx("text",{x:"675",y:"115",fill:"#f8fafc",fontSize:"10",children:"• os.path.join()"})]}),e.jsxs("g",{transform:"translate(30, 230)",children:[e.jsx("rect",{x:"0",y:"0",width:"810",height:"70",rx:"6",fill:"#090d16",stroke:"#334155"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"Batteries Included Philosophy:"}),e.jsx("text",{x:"20",y:"52",fill:"#cbd5e1",fontSize:"12",children:"These modules are written in high-performance C and require zero external 'pip install' commands!"})]})]}):o==="datetime"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"DATETIME TIMELINE & TIMEDELTA ARITHMETIC"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"240",height:"130",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"20",y:"30",fill:"#a5f3fc",fontSize:"13",fontWeight:"bold",children:"Today: dt.date.today()"}),e.jsx("text",{x:"20",y:"65",fill:"#f8fafc",fontSize:"16",fontWeight:"bold",children:"2026-08-24"}),e.jsx("text",{x:"20",y:"100",fill:"#94a3b8",fontSize:"11",children:"Current Session Date"}),e.jsx("text",{x:"260",y:"70",fill:"#38bdf8",fontSize:"24",fontWeight:"bold",children:"+"}),e.jsx("rect",{x:"295",y:"0",width:"240",height:"130",rx:"8",fill:"#1e1b4b",stroke:"#818cf8"}),e.jsx("text",{x:"315",y:"30",fill:"#c7d2fe",fontSize:"13",fontWeight:"bold",children:"dt.timedelta(days=30)"}),e.jsx("text",{x:"315",y:"65",fill:"#a7f3d0",fontSize:"16",fontWeight:"bold",children:"+30 Days Duration"}),e.jsx("text",{x:"315",y:"100",fill:"#94a3b8",fontSize:"11",children:"Invoice Due Offset"}),e.jsx("text",{x:"555",y:"70",fill:"#38bdf8",fontSize:"24",fontWeight:"bold",children:"="}),e.jsx("rect",{x:"590",y:"0",width:"220",height:"130",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"610",y:"30",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"Invoice Due Date"}),e.jsx("text",{x:"610",y:"65",fill:"#ecfdf5",fontSize:"16",fontWeight:"bold",children:"2026-09-23"}),e.jsx("text",{x:"610",y:"100",fill:"#a7f3d0",fontSize:"11",children:"Calculated Automatically!"})]}),e.jsxs("g",{transform:"translate(30, 200)",children:[e.jsx("rect",{x:"0",y:"0",width:"810",height:"90",rx:"6",fill:"#090d16",stroke:"#334155"}),e.jsx("text",{x:"20",y:"30",fill:"#38bdf8",fontSize:"13",fontWeight:"bold",children:"strftime() vs strptime() Mnemonic:"}),e.jsxs("text",{x:"20",y:"55",fill:"#cbd5e1",fontSize:"12",children:["• ",e.jsx("tspan",{fill:"#34d399",fontWeight:"bold",children:'strftime("%d-%b-%Y")'})," = Datetime ",e.jsx("tspan",{fill:"#38bdf8",children:"→"})," String (String ",e.jsx("strong",{children:"F"}),"ormat Time)"]}),e.jsxs("text",{x:"20",y:"75",fill:"#cbd5e1",fontSize:"12",children:["• ",e.jsx("tspan",{fill:"#34d399",fontWeight:"bold",children:"strptime(str, format)"})," = String ",e.jsx("tspan",{fill:"#38bdf8",children:"→"})," Datetime (String ",e.jsx("strong",{children:"P"}),"arse Time)"]})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#f59e0b",fontSize:"14",fontWeight:"bold",children:"os & sys: OPERATING SYSTEM & HOST RUNTIME BRIDGE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"13",fontWeight:"bold",children:"sys: CPython Runtime Internals"}),e.jsx("text",{x:"20",y:"65",fill:"#cbd5e1",fontSize:"12 font-mono",children:"• sys.argv = ['app.py', '--port', '8000']"}),e.jsx("text",{x:"20",y:"95",fill:"#cbd5e1",fontSize:"12 font-mono",children:"• sys.platform = 'win32' (or 'linux')"}),e.jsx("text",{x:"20",y:"125",fill:"#cbd5e1",fontSize:"12 font-mono",children:"• sys.getsizeof(42) = 28 bytes"}),e.jsx("text",{x:"20",y:"155",fill:"#cbd5e1",fontSize:"12 font-mono",children:"• sys.exit(0) / sys.exit(1)"}),e.jsx("rect",{x:"20",y:"180",width:"350",height:"40",rx:"4",fill:"#090d16",stroke:"#475569"}),e.jsx("text",{x:"30",y:"205",fill:"#34d399",fontSize:"11",children:"Bridge to Python Interpreter & CLI"})]}),e.jsxs("g",{transform:"translate(450, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"240",rx:"8",fill:"#451a03",stroke:"#f59e0b"}),e.jsx("text",{x:"20",y:"30",fill:"#fde68a",fontSize:"13",fontWeight:"bold",children:"os & os.path: OS & File System Bridge"}),e.jsx("text",{x:"20",y:"65",fill:"#cbd5e1",fontSize:"12 font-mono",children:"• os.getcwd() = Current working directory"}),e.jsx("text",{x:"20",y:"95",fill:"#cbd5e1",fontSize:"12 font-mono",children:"• os.listdir('./reports')"}),e.jsx("text",{x:"20",y:"125",fill:"#cbd5e1",fontSize:"12 font-mono",children:"• os.environ.get('USERNAME')"}),e.jsx("text",{x:"20",y:"155",fill:"#cbd5e1",fontSize:"12 font-mono",children:"• os.path.join('data', 'file.csv')"}),e.jsx("rect",{x:"20",y:"180",width:"350",height:"40",rx:"4",fill:"#090d16",stroke:"#475569"}),e.jsx("text",{x:"30",y:"205",fill:"#f59e0b",fontSize:"11",children:"Cross-Platform File System Portability"})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Standard Library Explorer"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Select a module to test live Python standard library functions and inspect generated code:"}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:[{id:"math",label:"math Module"},{id:"random",label:"random & secrets"},{id:"datetime",label:"datetime & timedelta"},{id:"sys",label:"sys Module"},{id:"os",label:"os & os.path"}].map(t=>e.jsx("button",{onClick:()=>h(t.id),className:d("py-2 px-4 rounded-xl text-xs sm:text-sm font-mono font-bold border transition-all",s===t.id?"bg-teal-950 border-teal-500 text-teal-300 shadow-md shadow-teal-950":"bg-slate-950 border-slate-800 text-slate-400 hover:text-white"),children:t.label},t.id))}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[s==="math"?e.jsxs("div",{className:"space-y-4",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 block font-bold",children:"GCD & Float Precision Inspector"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-mono text-slate-400 mb-1",children:"Number A"}),e.jsx("input",{type:"number",value:a,onChange:t=>f(Number(t.target.value)),className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-teal-300 font-mono text-sm"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-mono text-slate-400 mb-1",children:"Number B"}),e.jsx("input",{type:"number",value:l,onChange:t=>u(Number(t.target.value)),className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-teal-300 font-mono text-sm"})]})]}),e.jsxs("div",{className:"space-y-2 text-xs font-mono text-slate-300 pt-2",children:[e.jsxs("div",{children:["• math.gcd(",a,", ",l,") = ",e.jsx("span",{className:"text-emerald-400 font-bold",children:x(a,l)})]}),e.jsxs("div",{children:["• math.sqrt(",a,") = ",e.jsx("span",{className:"text-cyan-300 font-bold",children:Math.sqrt(a).toFixed(3)})]}),e.jsxs("div",{children:["• math.isclose(0.1 + 0.2, 0.3) = ",e.jsx("span",{className:"text-emerald-400 font-bold",children:"True"})]})]})]}):s==="random"?e.jsxs("div",{className:"space-y-4",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-emerald-400 block font-bold",children:"Sampling & Seeding Explorer"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Candidate Pool: ",e.jsx("code",{className:"text-emerald-300",children:"['Susmita', 'Rahul', 'Priya', 'Anirban', 'Sneha']"})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs font-mono space-y-1.5",children:[e.jsx("div",{children:"random.seed(2026)"}),e.jsxs("div",{children:["random.sample(pool, 2) → ",e.jsx("span",{className:"text-emerald-300 font-bold",children:"['Susmita', 'Rahul']"})]}),e.jsxs("div",{children:["secrets.token_hex(8) → ",e.jsx("span",{className:"text-teal-300 font-bold",children:"a9f83c12d45e7b89"})," (Secure)"]})]})]}):s==="datetime"?e.jsxs("div",{className:"space-y-4",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-cyan-400 block font-bold",children:"Date Arithmetic & Formatting"}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs font-mono space-y-1.5",children:[e.jsxs("div",{children:["Session Date: ",e.jsx("span",{className:"text-cyan-300 font-bold",children:"2026-08-24"})]}),e.jsxs("div",{children:["+ timedelta(days=30) → ",e.jsx("span",{className:"text-emerald-300 font-bold",children:"2026-09-23"})," (Due Date)"]}),e.jsxs("div",{children:["strftime('%d-%b-%Y') → ",e.jsx("span",{className:"text-teal-300 font-bold",children:"'24-Aug-2026'"})]})]})]}):s==="sys"?e.jsxs("div",{className:"space-y-4",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-purple-400 block font-bold",children:"Interpreter Runtime & Memory"}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs font-mono space-y-1.5",children:[e.jsxs("div",{children:["sys.version → ",e.jsx("span",{className:"text-purple-300 font-bold",children:"CPython 3.13.2"})]}),e.jsxs("div",{children:["sys.platform → ",e.jsx("span",{className:"text-purple-300 font-bold",children:"'win32'"})]}),e.jsxs("div",{children:["sys.getsizeof(42) → ",e.jsx("span",{className:"text-emerald-300 font-bold",children:"28 bytes"})]})]})]}):e.jsxs("div",{className:"space-y-4",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-amber-400 block font-bold",children:"File System & Environment"}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs font-mono space-y-1.5",children:[e.jsxs("div",{children:["os.getcwd() → ",e.jsx("span",{className:"text-amber-300 font-bold",children:"'e:/react_routing_tailwind'"})]}),e.jsxs("div",{children:["os.path.join('data', 'app.csv') → ",e.jsx("span",{className:"text-emerald-300 font-bold",children:"'data\\\\app.csv'"})]}),e.jsxs("div",{children:["os.environ.get('USERNAME') → ",e.jsx("span",{className:"text-teal-300 font-bold",children:"'sukanta'"})]})]})]}),e.jsxs("div",{className:"space-y-2 flex flex-col justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block",children:"Generated Python Script"}),e.jsx("pre",{className:"p-4 bg-slate-900 rounded-lg border border-slate-800 text-teal-300 font-mono text-xs overflow-x-auto whitespace-pre-wrap flex-1",children:s==="math"?`import math

print("GCD:", math.gcd(${a}, ${l}))
print("Safe Float:", math.isclose(0.1 + 0.2, 0.3))`:s==="random"?`import random, secrets

random.seed(42)
print("Winner:", random.choice(["Susmita", "Rahul", "Priya"]))
print("Secure Token:", secrets.token_hex(16))`:s==="datetime"?`import datetime as dt

today = dt.date(2026, 8, 24)
due_date = today + dt.timedelta(days=30)
print("Due Date:", due_date.strftime("%d-%b-%Y"))`:s==="sys"?`import sys

print("Platform:", sys.platform)
print("Memory for int(42):", sys.getsizeof(42), "bytes")`:`import os

path = os.path.join("reports", "2026", "august.csv")
print("Cross-Platform Path:", path)`})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Standard Library Reference Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Module"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Domain Purpose"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Essential Functions / Classes"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Security / Accuracy Gotchas"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"math"}),e.jsx("td",{className:"py-3 px-4",children:"Precision mathematics & roots"}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300",children:"sqrt, ceil, floor, gcd, isclose"}),e.jsxs("td",{className:"py-3 px-4",children:["Use ",e.jsx("code",{className:"text-teal-300",children:"math.isclose()"})," for float equality checks"]})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-300 font-semibold",children:"random"}),e.jsx("td",{className:"py-3 px-4",children:"Pseudo-random simulations & sampling"}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300",children:"randint, choice, sample, shuffle"}),e.jsxs("td",{className:"py-3 px-4 font-mono text-rose-400",children:["UNSAFE for passwords! Use ",e.jsx("code",{className:"text-emerald-300",children:"secrets"})]})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"datetime"}),e.jsx("td",{className:"py-3 px-4",children:"Calendar dates, times, and duration math"}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300",children:"date, datetime, timedelta, strftime"}),e.jsxs("td",{className:"py-3 px-4",children:[e.jsx("code",{className:"text-cyan-300",children:"strftime"})," (format) vs ",e.jsx("code",{className:"text-cyan-300",children:"strptime"})," (parse)"]})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"sys"}),e.jsx("td",{className:"py-3 px-4",children:"Interpreter internals & runtime parameters"}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300",children:"argv, platform, version, getsizeof"}),e.jsxs("td",{className:"py-3 px-4",children:[e.jsx("code",{className:"text-purple-300",children:"sys.argv[0]"})," is always the script name itself"]})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"os"}),e.jsx("td",{className:"py-3 px-4",children:"Operating system & filesystem bridge"}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300",children:"getcwd, listdir, environ, path.join"}),e.jsxs("td",{className:"py-3 px-4",children:["Always use ",e.jsx("code",{className:"text-amber-300",children:"os.path.join"})," (avoid string concat)"]})]})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating math roots, random sampling vs secrets, timedelta date arithmetic, and enterprise diagnostic suites:"}),e.jsx(b,{files:[{filename:"math_and_random_modules.py",code:w,description:"math functions (gcd, isclose), random choice/sample/shuffle, and cryptographically secure secrets OTP generator."},{filename:"datetime_and_time_modules.py",code:N,description:"datetime objects, timedelta date calculations, strftime formatting, strptime parsing, and time.perf_counter benchmarking."},{filename:"sys_and_os_system_modules.py",code:v,description:"sys CLI arguments and memory footprints (sys.getsizeof), plus os.getcwd, os.environ, and os.path.join."},{filename:"automated_system_audit_and_lottery.py",code:_,description:"Enterprise environment audit diagnostic and verifiable student scholarship lottery selector combining all 5 modules."}]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Using `random` for Auth & Passwords"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Using ",e.jsx("code",{className:"text-rose-300 font-mono",children:"random.randint()"})," or ",e.jsx("code",{className:"text-rose-300 font-mono",children:"random.choice()"})," to generate security tokens creates easily crackable vulnerabilities."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always use ",e.jsx("code",{className:"text-emerald-300",children:"secrets.token_hex(16)"})," or ",e.jsx("code",{className:"text-emerald-300",children:"secrets.token_urlsafe(16)"}),"!"]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Direct Float Equality Comparison"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-amber-300 font-mono",children:"0.1 + 0.2 == 0.3"})," evaluates to ",e.jsx("code",{className:"text-amber-300 font-mono",children:"False"})," due to binary IEEE 754 float inaccuracies."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"math.isclose(0.1 + 0.2, 0.3)"})," or Python's ",e.jsx("code",{className:"text-emerald-300",children:"decimal.Decimal"}),"!"]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Hardcoding Windows Slashes in File Paths"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-purple-300 font-mono",children:'"reports\\\\" + name'})," breaks on Linux web servers and Docker containers."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always use ",e.jsx("code",{className:"text-emerald-300",children:'os.path.join("reports", name)'})," or ",e.jsx("code",{className:"text-emerald-300",children:"pathlib.Path"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Accessing `os.environ` With Direct Indexing"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-cyan-300 font-mono",children:'os.environ["API_KEY"]'})," crashes with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"KeyError"})," if the environment variable has not been set."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:'os.environ.get("API_KEY", "default_val")'}),"."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering math, random vs secrets, datetime timedelta, sys runtime metadata, and os filesystem management:"}),e.jsx(g,{questions:E})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with standard library cheat sheets, timedelta formulas, and cross-platform path rules:"}),e.jsx("div",{className:"mb-10",children:e.jsx(y,{content:S,filename:"python_topic2_built_in_standard_library_notes.txt",title:"Print Topic 2 Study Notes"})}),e.jsx(j,{})]})]})]})}export{z as default};
