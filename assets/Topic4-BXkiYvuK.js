import{b as l,j as e,bg as i}from"./vendor-react-core-Doz9nIC6.js";import{P as _}from"./PythonFileLoader-hCi5osN-.js";import{P as T}from"./PlainTextPrint-C08xhKA4.js";import{F as S}from"./FAQTemplate-CkSqDH4B.js";import{T as A}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const E=`# topic4_files/searching_and_counting_methods.py\r
# Module: 002_007_string-processing\r
# Topic: Searching & Validation (find, rfind, count, startswith, endswith, isdigit, isalpha)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
"""\r
Topic 4 - File 1: Substring Searching, Counting & Boundary Mechanics\r
Demonstrates:\r
  1. find() vs rfind(): Substring index discovery from left and right (-1 on failure)\r
  2. index() vs rindex(): Strict searching (raises ValueError on failure)\r
  3. in and not in membership operators\r
  4. count(): Non-overlapping occurrence counting\r
  5. Searching within slice boundaries: find(sub, start, stop)\r
"""\r
\r
def demonstrate_find_vs_index():\r
    print("=" * 65)\r
    print("1. find() VS index(): ERROR HANDLING & DISCOVERY")\r
    print("=" * 65)\r
\r
    sentence = "Coder & AccoTax Barrackpore - Python training in Barrackpore"\r
    print(f"Target String: '{sentence}'\\n")\r
\r
    # 1. find(sub): Finds first occurrence from left, returns index (or -1)\r
    first_bp = sentence.find("Barrackpore")\r
    print(f"sentence.find('Barrackpore')  -> Index {first_bp}")\r
\r
    # 2. rfind(sub): Finds last occurrence from right, returns index (or -1)\r
    last_bp = sentence.rfind("Barrackpore")\r
    print(f"sentence.rfind('Barrackpore') -> Index {last_bp}")\r
\r
    # 3. Handling missing substrings with find(): Returns -1 (Safe!)\r
    missing_find = sentence.find("Kolkata")\r
    print(f"sentence.find('Kolkata')      -> {missing_find} (Safe -1 return)")\r
\r
    # 4. Strict searching with index(): Raises ValueError if missing!\r
    try:\r
        sentence.index("Kolkata")\r
    except ValueError as err:\r
        print(f"sentence.index('Kolkata')     -> Caught Expected ValueError: {err}")\r
\r
\r
def demonstrate_membership_testing():\r
    print("\\n" + "=" * 65)\r
    print("2. 'in' AND 'not in' MEMBERSHIP OPERATORS")\r
    print("=" * 65)\r
\r
    email = "susmita.student@codernaccotax.co.in"\r
    print(f"Email: '{email}'\\n")\r
\r
    # Substring boolean check\r
    has_at = "@" in email\r
    has_domain = "codernaccotax" in email\r
    has_spam = "lottery" in email\r
\r
    print(f"'@' in email             -> {has_at}")\r
    print(f"'codernaccotax' in email  -> {has_domain}")\r
    print(f"'lottery' not in email   -> {not has_spam}")\r
\r
\r
def demonstrate_occurrence_counting():\r
    print("\\n" + "=" * 65)\r
    print("3. str.count(sub, start, stop): NON-OVERLAPPING OCCURRENCES")\r
    print("=" * 65)\r
\r
    text = "Python is powerful. Python is clean. Python is fun."\r
    print(f"Text: '{text}'\\n")\r
\r
    # Total occurrences\r
    total_py = text.count("Python")\r
    print(f"text.count('Python')                  -> {total_py} times")\r
\r
    # Non-overlapping count gotcha:\r
    # "banana" has only 1 non-overlapping "ana", not 2!\r
    fruit = "banana"\r
    print(f"'banana'.count('ana')                -> {fruit.count('ana')} (Non-overlapping rule!)")\r
\r
    # Counting with start and stop bounds\r
    # Search only in the first 20 characters\r
    bounded_count = text.count("Python", 0, 20)\r
    print(f"text.count('Python', 0, 20)           -> {bounded_count} time (Indices 0..20)")\r
\r
\r
def find_all_occurrences_helper():\r
    print("\\n" + "=" * 65)\r
    print("4. FINDING ALL OCCURRENCES (CUSTOM HELPER)")\r
    print("=" * 65)\r
\r
    doc = "cat and dog and cat and bird and cat"\r
    query = "cat"\r
\r
    indices = []\r
    start = 0\r
    while True:\r
        pos = doc.find(query, start)\r
        if pos == -1:\r
            break\r
        indices.append(pos)\r
        start = pos + len(query)  # Advance start pointer past current match\r
\r
    print(f"Document : '{doc}'")\r
    print(f"Query    : '{query}'")\r
    print(f"All Found Indices: {indices} (Total: {len(indices)} matches)")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_find_vs_index()\r
    demonstrate_membership_testing()\r
    demonstrate_occurrence_counting()\r
    find_all_occurrences_helper()\r
`,I=`# topic4_files/prefix_and_suffix_validation.py\r
# Module: 002_007_string-processing\r
# Topic: Searching & Validation (find, rfind, count, startswith, endswith, isdigit, isalpha)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
"""\r
Topic 4 - File 2: Prefix and Suffix Validation & Stripping\r
Demonstrates:\r
  1. startswith() and endswith(): Single prefix/suffix checks\r
  2. Tuple of candidates: startswith(('http://', 'https://'))\r
  3. Bounded prefix checking: startswith(prefix, start, stop)\r
  4. removeprefix() & removesuffix() (Python 3.9+ clean substring removal)\r
  5. File type classification & routing engine\r
"""\r
\r
def demonstrate_basic_prefix_suffix():\r
    print("=" * 65)\r
    print("1. startswith() & endswith() BASIC VALIDATION")\r
    print("=" * 65)\r
\r
    website = "https://www.codernaccotax.co.in"\r
    print(f"Target URL: '{website}'\\n")\r
\r
    # Single string check\r
    is_secure = website.startswith("https://")\r
    is_india_domain = website.endswith(".in")\r
    is_com_domain = website.endswith(".com")\r
\r
    print(f"website.startswith('https://') -> {is_secure}")\r
    print(f"website.endswith('.in')       -> {is_india_domain}")\r
    print(f"website.endswith('.com')      -> {is_com_domain}")\r
\r
\r
def demonstrate_tuple_candidate_matching():\r
    print("\\n" + "=" * 65)\r
    print("2. TUPLE OF CANDIDATE PREFIXES & SUFFIXES")\r
    print("=" * 65)\r
\r
    # You can pass a TUPLE of strings (Lists or sets are NOT allowed!)\r
    valid_protocols = ("http://", "https://", "ftp://")\r
    valid_doc_extensions = (".pdf", ".docx", ".xlsx", ".pptx")\r
\r
    test_urls = [\r
        "https://codernaccotax.co.in",\r
        "ftp://backup.server.local",\r
        "smtp://mail.office.com",\r
        "www.barrackpore.gov.in"\r
    ]\r
\r
    print("--- URL Protocol Validation ---")\r
    for url in test_urls:\r
        allowed = url.startswith(valid_protocols)\r
        status = "[ALLOWED]" if allowed else "[BLOCKED]"\r
        print(f"'{url:<30}' -> {status}")\r
\r
    print("\\n--- File Extension Routing ---")\r
    filenames = [\r
        "invoice_9402.pdf",\r
        "tax_audit_report.xlsx",\r
        "setup_script.py",\r
        "student_photo.jpg"\r
    ]\r
    for fn in filenames:\r
        is_doc = fn.endswith(valid_doc_extensions)\r
        status = "[DOCUMENT]" if is_doc else "[OTHER FILE]"\r
        print(f"'{fn:<25}' -> {status}")\r
\r
\r
def demonstrate_removeprefix_and_removesuffix():\r
    print("\\n" + "=" * 65)\r
    print("3. Python 3.9+ removeprefix() & removesuffix()")\r
    print("=" * 65)\r
\r
    # Contrast with strip() gotchas\r
    test_str = "www.codernaccotax.co.in"\r
    print(f"Original: '{test_str}'\\n")\r
\r
    # removeprefix() only removes exact prefix if it exists\r
    no_www = test_str.removeprefix("www.")\r
    print(f"test_str.removeprefix('www.') -> '{no_www}'")\r
\r
    # removesuffix() only removes exact suffix if it exists\r
    no_tld = test_str.removesuffix(".co.in")\r
    print(f"test_str.removesuffix('.co.in') -> '{no_tld}'")\r
\r
    # Safe no-op when prefix/suffix is absent\r
    safe_noop = test_str.removeprefix("https://")\r
    print(f"test_str.removeprefix('https://') -> '{safe_noop}' (Zero Error, unchanged)")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_basic_prefix_suffix()\r
    demonstrate_tuple_candidate_matching()\r
    demonstrate_removeprefix_and_removesuffix()\r
`,P=`# topic4_files/character_classification_predicates.py\r
# Module: 002_007_string-processing\r
# Topic: Searching & Validation (find, rfind, count, startswith, endswith, isdigit, isalpha)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
"""\r
Topic 4 - File 3: Character Classification & Boolean Predicate Methods\r
Demonstrates:\r
  1. The Numeric Hierarchy: isdecimal() vs isdigit() vs isnumeric()\r
  2. Text classification: isalpha(), isalnum(), isascii()\r
  3. Whitespace & printable checking: isspace(), isprintable()\r
  4. Identifier validation: isidentifier() (valid Python variable names)\r
  5. Case state inspection: islower(), isupper(), istitle()\r
"""\r
\r
def demonstrate_numeric_hierarchy():\r
    print("=" * 70)\r
    print("1. THE NUMERIC HIERARCHY: isdecimal() vs isdigit() vs isnumeric()")\r
    print("=" * 70)\r
\r
    # Comparison matrix for different numeric representations\r
    test_cases = [\r
        ("12345", "Standard ASCII Digits", "12345"),\r
        ("2\\u00B2", "Superscript 2^2", "2\\\\u00B2"),\r
        ("\\u00BD", "Vulgar Fraction 1/2", "\\\\u00BD"),\r
        ("IX", "Roman Numeral (ASCII 'IX')", "IX"),\r
        ("-10", "Negative Integer String", "-10"),\r
        ("3.14", "Float Number String", "3.14"),\r
    ]\r
\r
    header = f"{'STRING':<15} | {'DESCRIPTION':<28} | {'isdecimal()':<11} | {'isdigit()':<9} | {'isnumeric()'}"\r
    print(header)\r
    print("-" * len(header))\r
\r
    for val, desc, display_name in test_cases:\r
        print(f"{display_name:<15} | {desc:<28} | {str(val.isdecimal()):<11} | {str(val.isdigit()):<9} | {str(val.isnumeric())}")\r
\r
    print("-" * len(header))\r
    print("Key Insights:")\r
    print("  * isdecimal(): Strict base-10 digits 0-9 (can be safely passed to int()).")\r
    print("  * isdigit()  : Strict digits + superscripts/subscripts (e.g. 2²).")\r
    print("  * isnumeric(): Broadest set (includes fractions ½, Chinese numerals).")\r
    print("  * Notice that negative numbers ('-10') and floats ('3.14') return False for ALL THREE!")\r
\r
\r
def demonstrate_alphanumeric_and_ascii():\r
    print("\\n" + "=" * 70)\r
    print("2. isalpha(), isalnum(), AND isascii()")\r
    print("=" * 70)\r
\r
    samples = [\r
        ("Barrackpore", "Alphabetic Only"),\r
        ("Python313", "Alphanumeric (Letters + Digits)"),\r
        ("Coder & AccoTax", "Contains Symbols/Spaces"),\r
        ("", "Empty String"),\r
    ]\r
\r
    for val, desc in samples:\r
        print(f"'{val}' ({desc}):")\r
        print(f"  * isalpha(): {val.isalpha()}")\r
        print(f"  * isalnum(): {val.isalnum()}")\r
        print(f"  * isascii(): {val.isascii()}\\n")\r
\r
\r
def demonstrate_isspace_and_isprintable():\r
    print("=" * 70)\r
    print("3. isspace() AND isprintable()")\r
    print("=" * 70)\r
\r
    # isspace() checks if string contains ONLY whitespace characters (non-empty)\r
    print(f"'   \\\\t\\\\n  '.isspace()       -> {'   \\t\\n  '.isspace()} (All whitespace)")\r
    print(f"''.isspace()               -> {''.isspace()} (Empty string is False!)")\r
    print(f"'  Python  '.isspace()     -> {'  Python  '.isspace()} (Contains letters)\\n")\r
\r
    # isprintable() detects non-printable escape/control codes\r
    print(f"'Hello World 2026'.isprintable() -> {'Hello World 2026'.isprintable()}")\r
    print(f"'Line 1\\\\nLine 2'.isprintable()     -> {'Line 1\\nLine 2'.isprintable()} (Contains \\\\n control code)")\r
\r
\r
def demonstrate_isidentifier():\r
    print("\\n" + "=" * 70)\r
    print("4. isidentifier(): PYTHON VARIABLE NAME VALIDATION")\r
    print("=" * 70)\r
\r
    test_identifiers = [\r
        ("student_name", "Valid snake_case"),\r
        ("_private_var", "Valid leading underscore"),\r
        ("2nd_roll", "Invalid: starts with digit"),\r
        ("user-name", "Invalid: contains hyphen"),\r
        ("for", "Syntactically valid identifier (though a keyword)"),\r
        ("class", "Syntactically valid identifier (though a keyword)"),\r
    ]\r
\r
    import keyword\r
    for name, desc in test_identifiers:\r
        valid_id = name.isidentifier()\r
        is_kw = keyword.iskeyword(name)\r
        status = "[VALID VARIABLE]" if valid_id and not is_kw else ("[KEYWORD - RESERVED]" if is_kw else "[INVALID]")\r
        print(f"'{name:<15}' -> isidentifier: {str(valid_id):<5} | iskeyword: {str(is_kw):<5} -> {status}")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_numeric_hierarchy()\r
    demonstrate_alphanumeric_and_ascii()\r
    demonstrate_isspace_and_isprintable()\r
    demonstrate_isidentifier()\r
`,F=`# topic4_files/form_validator_and_security_scanner.py\r
# Module: 002_007_string-processing\r
# Topic: Searching & Validation (find, rfind, count, startswith, endswith, isdigit, isalpha)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
"""\r
Topic 4 - File 4: Production Form Validator & Security Threat Scanner\r
Demonstrates:\r
  1. Validating Indian Financial & Personal IDs (PAN, PIN Code, Mobile)\r
  2. Password complexity validation using isupper(), islower(), isdigit(), count()\r
  3. Security scanning for SQL Injection & Cross-Site Scripting (XSS) patterns\r
  4. Comprehensive audit and validation reporting\r
"""\r
\r
from typing import List, Dict, Tuple\r
\r
class FormValidator:\r
    """Production validation engine using Python core string validation methods."""\r
\r
    @staticmethod\r
    def validate_pan(pan: str) -> Tuple[bool, str]:\r
        """\r
        Validates Indian Permanent Account Number (PAN):\r
        Format: 5 Uppercase Letters + 4 Digits + 1 Uppercase Letter (e.g. ABCDE1234F)\r
        """\r
        pan = pan.strip().upper()\r
        if len(pan) != 10:\r
            return False, "PAN must be exactly 10 characters long"\r
        \r
        prefix = pan[:5]\r
        digits = pan[5:9]\r
        suffix = pan[9]\r
\r
        if not prefix.isalpha():\r
            return False, "First 5 characters must be alphabetic letters"\r
        if not digits.isdigit():\r
            return False, "Characters 6 through 9 must be digits"\r
        if not suffix.isalpha():\r
            return False, "Last character must be an alphabetic letter"\r
        \r
        return True, "Valid PAN Number"\r
\r
    @staticmethod\r
    def validate_pin_code(pin: str) -> Tuple[bool, str]:\r
        """\r
        Validates Indian Postal PIN code (e.g. 700120 for Barrackpore).\r
        Must be 6 digits and cannot start with '0'.\r
        """\r
        pin = pin.strip()\r
        if len(pin) != 6:\r
            return False, "PIN code must be exactly 6 digits"\r
        if not pin.isdigit():\r
            return False, "PIN code must contain only numeric digits"\r
        if pin.startswith("0"):\r
            return False, "PIN code cannot start with '0'"\r
        \r
        return True, "Valid PIN Code"\r
\r
    @staticmethod\r
    def validate_indian_mobile(phone: str) -> Tuple[bool, str]:\r
        """\r
        Validates Indian 10-digit mobile number.\r
        Must start with 6, 7, 8, or 9 and be all digits.\r
        """\r
        phone = phone.strip()\r
        if phone.startswith("+91"):\r
            phone = phone[3:].strip()\r
        elif phone.startswith("0"):\r
            phone = phone[1:].strip()\r
\r
        if len(phone) != 10 or not phone.isdigit():\r
            return False, "Mobile number must be exactly 10 digits"\r
        if not phone.startswith(("6", "7", "8", "9")):\r
            return False, "Indian mobile number must start with 6, 7, 8, or 9"\r
\r
        return True, "Valid Mobile Number"\r
\r
    @staticmethod\r
    def validate_password_strength(pwd: str) -> Tuple[bool, List[str]]:\r
        """Checks password length, upper, lower, digits, and special characters."""\r
        issues = []\r
        if len(pwd) < 8:\r
            issues.append("Must be at least 8 characters long")\r
        if not any(c.isupper() for c in pwd):\r
            issues.append("Must contain at least 1 uppercase letter")\r
        if not any(c.islower() for c in pwd):\r
            issues.append("Must contain at least 1 lowercase letter")\r
        if not any(c.isdigit() for c in pwd):\r
            issues.append("Must contain at least 1 numeric digit")\r
        if not any(c in "!@#$%^&*()-_+=" for c in pwd):\r
            issues.append("Must contain at least 1 special symbol (!@#$%^&*)")\r
\r
        return len(issues) == 0, issues\r
\r
\r
class SecurityThreatScanner:\r
    """Detects malicious input payloads using string search methods."""\r
\r
    FORBIDDEN_SQL_KEYWORDS = ("SELECT ", "DROP TABLE", "INSERT INTO", "UNION SELECT", "OR '1'='1'")\r
    FORBIDDEN_XSS_PATTERNS = ("<script>", "<\/script>", "javascript:", "onload=", "onerror=")\r
\r
    @classmethod\r
    def scan_input(cls, payload: str) -> List[str]:\r
        """Returns detected security vulnerabilities in user input."""\r
        threats = []\r
        normalized = payload.lower()\r
\r
        # Check SQL Injection triggers\r
        for pattern in cls.FORBIDDEN_SQL_KEYWORDS:\r
            if pattern.lower() in normalized:\r
                threats.append(f"SQL Injection Threat: Detected '{pattern}'")\r
\r
        # Check XSS triggers\r
        for pattern in cls.FORBIDDEN_XSS_PATTERNS:\r
            if pattern in normalized:\r
                threats.append(f"XSS Threat: Detected '{pattern}'")\r
\r
        return threats\r
\r
\r
def run_validation_demo():\r
    print("=" * 75)\r
    print("CODER & ACCOTAX - PRODUCTION FORM & SECURITY AUDIT SYSTEM")\r
    print("=" * 75)\r
\r
    # 1. PAN Test\r
    pan_samples = ["ABCDE1234F", "abcde1234f", "12345ABCDE", "ABCDE12345"]\r
    print("--- 1. PAN Number Verification ---")\r
    for p in pan_samples:\r
        valid, msg = FormValidator.validate_pan(p)\r
        status = "[VALID]" if valid else "[INVALID]"\r
        print(f"PAN: '{p:<12}' -> {status:<9} | {msg}")\r
\r
    # 2. PIN Code Test\r
    pin_samples = ["700120", "001203", "70012A", "700025"]\r
    print("\\n--- 2. PIN Code Verification ---")\r
    for pin in pin_samples:\r
        valid, msg = FormValidator.validate_pin_code(pin)\r
        status = "[VALID]" if valid else "[INVALID]"\r
        print(f"PIN: '{pin:<8}' -> {status:<9} | {msg}")\r
\r
    # 3. Security Threat Scanning\r
    test_inputs = [\r
        "Susmita Mukherjee, Barrackpore",\r
        "admin' OR '1'='1' --",\r
        "Hello <script>alert('hack')<\/script>",\r
        "standard_query_report_2026.pdf"\r
    ]\r
    print("\\n--- 3. Input Security Threat Scan ---")\r
    for inp in test_inputs:\r
        threats = SecurityThreatScanner.scan_input(inp)\r
        status = "[FLAGGED THREAT]" if threats else "[CLEAN INPUT]"\r
        print(f"Input : '{inp}'")\r
        print(f"Status: {status}")\r
        if threats:\r
            for t in threats:\r
                print(f"  * {t}")\r
        print()\r
\r
\r
if __name__ == "__main__":\r
    run_validation_demo()\r
`,C=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
            PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_007: STRING PROCESSING\r
        TOPIC 4: SEARCHING & VALIDATION (FIND, RFIND, COUNT, STARTSWITH, ENDSWITH, ISDIGIT, ISALPHA)\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. SUBSTRING SEARCHING: find() VS index()\r
--------------------------------------------------------------------------------\r
  Method       Direction    If Found              If NOT Found\r
  ------------------------------------------------------------------------------\r
  s.find(sub)  Left-to-Right Lowest index (int)   Returns -1 (Safe!)\r
  s.rfind(sub) Right-to-Left Highest index (int)  Returns -1 (Safe!)\r
  s.index(sub) Left-to-Right Lowest index (int)   Raises ValueError: substring not found\r
  s.rindex(sub)Right-to-Left Highest index (int)  Raises ValueError: substring not found\r
\r
  Rule of Thumb:\r
  • Use 'sub in s' if you only need a boolean existence check.\r
  • Use s.find(sub) if you need the position and want to handle missing values safely.\r
  • Use s.index(sub) only when the substring is guaranteed to exist or within try/except.\r
\r
--------------------------------------------------------------------------------\r
2. OCCURRENCE COUNTING: s.count(sub, start, stop)\r
--------------------------------------------------------------------------------\r
  • Returns the number of NON-OVERLAPPING occurrences of 'sub' in s[start:stop].\r
  • Critical Gotcha:\r
      "banana".count("ana") -> 1 (NOT 2, because 'ana' at index 1 consumes chars).\r
\r
--------------------------------------------------------------------------------\r
3. PREFIX & SUFFIX MATCHING: startswith() & endswith()\r
--------------------------------------------------------------------------------\r
  • Syntax:\r
      s.startswith(prefix_or_tuple, start, stop)\r
      s.endswith(suffix_or_tuple, start, stop)\r
  • Matching Multiple Candidates:\r
      Pass a TUPLE (not list or set):\r
      is_doc = filename.endswith((".pdf", ".docx", ".xlsx"))\r
      is_web = url.startswith(("http://", "https://"))\r
\r
--------------------------------------------------------------------------------\r
4. THE NUMERIC PREDICATE HIERARCHY\r
--------------------------------------------------------------------------------\r
  Hierarchy: isdecimal() ⊆ isdigit() ⊆ isnumeric()\r
\r
  Input String     isdecimal()   isdigit()   isnumeric()   Notes\r
  ------------------------------------------------------------------------------\r
  "12345"          True          True        True          Base-10 ASCII digits\r
  "²" (\\u00B2)     False         True        True          Superscript digit\r
  "½" (\\u00BD)     False         False       True          Vulgar fraction\r
  "四" (\\u56DB)    False         False       True          Chinese numeral (4)\r
  "-10"            False         False       False         Minus sign is not digit\r
  "3.14"           False         False       False         Decimal point is not digit\r
\r
--------------------------------------------------------------------------------\r
5. CHARACTER CLASSIFICATION PREDICATES MATRIX\r
--------------------------------------------------------------------------------\r
  Predicate Method   Returns True IF:\r
  ------------------------------------------------------------------------------\r
  s.isalpha()        All characters are alphabetic letters (A-Z, a-z, Unicode letters) & len > 0.\r
  s.isalnum()        All characters are alphanumeric (letters or numbers) & len > 0.\r
  s.isascii()        All characters are in the 7-bit ASCII range (0..127) or string is empty.\r
  s.isspace()        All characters are whitespace (space, \\t, \\n, \\r) & len > 0.\r
  s.isprintable()    All characters are printable (no unescaped control codes like \\n, \\x00).\r
  s.isidentifier()   String forms a valid Python language identifier (variable name).\r
  s.islower()        All cased characters are lowercase & contains at least 1 cased char.\r
  s.isupper()        All cased characters are uppercase & contains at least 1 cased char.\r
  s.istitle()        String matches title-case conventions & contains at least 1 cased char.\r
\r
================================================================================\r
           END OF STUDY NOTE • TOPIC 4: SEARCHING & VALIDATION METHODS\r
================================================================================\r
`,R=[{question:"What is the primary difference between s.find('sub') and s.index('sub')?",shortAnswer:"find() returns -1 if the substring is not found, whereas index() raises a ValueError exception.",explanation:"find() is fault-tolerant and returns an integer sentinel (-1), making it safe for optional searches. index() is strict and raises ValueError: substring not found.",hint:"find() returns -1; index() crashes with ValueError.",level:"basic",codeExample:`s = 'Kolkata'
print(s.find('Delhi'))   # -1 (Safe)
try:
    print(s.index('Delhi'))
except ValueError as e:
    print(e)  # substring not found`},{question:"What do s.rfind('sub') and s.rindex('sub') do?",shortAnswer:"They search for the substring starting from the right (highest index position).",explanation:"rfind() returns the highest index where the substring is found, or -1 if absent. rindex() returns the highest index or raises ValueError.",hint:"r stands for reverse/rightmost search.",level:"basic",codeExample:`path = '/home/user/docs/file.txt'
print(path.rfind('/'))   # 15 (Last slash index)
print(path.find('/'))    # 0 (First slash index)`},{question:"How does s.count('sub') handle overlapping occurrences?",shortAnswer:"s.count() counts only NON-OVERLAPPING occurrences from left to right.",explanation:"Once a matching substring is identified, the search index moves past the entire matched substring length. For example, in 'banana', 'ana' occurs at index 1 and index 3, but count('ana') returns 1 because the first match consumes indices 1, 2, 3.",hint:"Matched characters cannot be reused in subsequent counts.",level:"moderate",codeExample:`word = 'banana'
print(word.count('ana'))  # 1 (Not 2! Non-overlapping)`},{question:"Can s.startswith() and s.endswith() check against multiple candidate strings simultaneously?",shortAnswer:"Yes, by passing a TUPLE of candidate strings (lists or sets are not allowed).",explanation:"s.startswith(('http://', 'https://')) returns True if the string starts with ANY of the prefixes in the tuple. Passing a list or set raises a TypeError.",hint:"Pass a tuple of candidate prefixes/suffixes.",level:"moderate",codeExample:`url = 'https://codernaccotax.co.in'
print(url.startswith(('http://', 'https://')))  # True
fn = 'report.pdf'
print(fn.endswith(('.pdf', '.docx', '.xlsx')))    # True`},{question:"What is the difference between isdecimal(), isdigit(), and isnumeric()?",shortAnswer:"isdecimal() is for strict base-10 digits 0-9; isdigit() includes superscripts/subscripts; isnumeric() includes vulgar fractions and numeral characters.",explanation:"The relationship is a subset hierarchy: isdecimal() ⊂ isdigit() ⊂ isnumeric(). For ASCII '123', all three are True. For superscript '²', isdigit() and isnumeric() are True. For fraction '½', only isnumeric() is True.",hint:"isdecimal is strict digits; isdigit adds powers; isnumeric adds fractions.",level:"moderate",codeExample:`print('123'.isdecimal(), '123'.isdigit(), '123'.isnumeric())   # True, True, True
print('²'.isdecimal(), '²'.isdigit(), '²'.isnumeric())       # False, True, True
print('½'.isdecimal(), '½'.isdigit(), '½'.isnumeric())       # False, False, True`},{question:"Why do '-10'.isdigit() and '3.14'.isdigit() both return False?",shortAnswer:"Because the minus sign '-' and decimal point '.' are non-digit punctuation symbols.",explanation:"isdigit() requires EVERY character in the string to be a numeric digit. Punctuation symbols make isdigit(), isdecimal(), and isnumeric() all evaluate to False.",hint:"Minus and dot are punctuation symbols, not digits.",level:"basic",codeExample:`print('-10'.isdigit())   # False (Contains '-')
print('3.14'.isdigit())  # False (Contains '.')`},{question:"What does s.isalpha() verify, and does it allow spaces?",shortAnswer:"It verifies that ALL characters are alphabetic letters and length > 0. It returns False if there are any spaces.",explanation:"s.isalpha() returns True only if every character is a letter (A-Z, a-z, or Unicode alphabetic letter). Strings with spaces or digits return False.",hint:"A space character causes isalpha() to return False.",level:"basic",codeExample:`print('Barrackpore'.isalpha())        # True
print('Coder & AccoTax'.isalpha())     # False (Spaces & '&')
print(''.isalpha())                    # False (Empty string)`},{question:"What is the difference between s.isalpha() and s.isalnum()?",shortAnswer:"isalpha() requires all characters to be letters; isalnum() allows both letters and numeric digits.",explanation:"isalnum() returns True if every character is either alphabetic or numeric (and non-empty).",hint:"alnum = alphabet + number.",level:"basic",codeExample:`print('Python313'.isalpha())  # False (Contains digits)
print('Python313'.isalnum())  # True`},{question:"What does s.isspace() test for?",shortAnswer:"It tests whether the non-empty string consists solely of whitespace characters (spaces, tabs, newlines).",explanation:"If the string contains only spaces (' '), tabs ('\\t'), newlines ('\\n'), carriage returns ('\\r'), etc., isspace() returns True. If the string is empty '', it returns False.",hint:"Tests for whitespace-only strings (must be non-empty).",level:"basic",codeExample:`print('   \\t\\n  '.isspace())  # True
print(''.isspace())            # False (Empty)
print('  a  '.isspace())        # False (Contains 'a')`},{question:"What does s.isidentifier() do in Python?",shortAnswer:"It checks whether a string is syntactically a valid Python identifier (variable/function/class name).",explanation:"A valid identifier must start with a letter (or underscore) and be followed by letters, digits, or underscores. Note that isidentifier() returns True even for Python keywords like 'for' or 'class', so use keyword.iskeyword() to check for reserved words.",hint:"Checks if a string is a valid variable name.",level:"moderate",codeExample:`print('student_name'.isidentifier())  # True
print('2nd_place'.isidentifier())     # False (Starts with digit)
print('user-name'.isidentifier())      # False (Contains hyphen)`},{question:"What does s.isprintable() do?",shortAnswer:"It checks if all characters in the string are printable (no unescaped control codes like \\n, \\r, \\0).",explanation:"Printable characters include alphanumeric characters, symbols, and spaces. Control codes such as newline (\\n) and null byte (\\0) are non-printable.",hint:"Returns False if string contains escape/control characters.",level:"moderate",codeExample:`print('Hello World 2026'.isprintable())  # True
print('Hello\\nWorld'.isprintable())      # False (\\n is a control code)`},{question:"What is the return value of s.isalpha(), s.isdigit(), and s.isspace() when s is an empty string ''?",shortAnswer:"They all return False.",explanation:"All character classification methods require the string to contain at least one character. If len(s) == 0, they return False (except isascii() which returns True on '').",hint:"Empty string yields False for almost all is...() methods.",level:"basic",codeExample:`print(''.isalpha())   # False
print(''.isdigit())   # False
print(''.isspace())   # False
print(''.isascii())   # True (Special case)`},{question:"How do you check if a string contains only uppercase letters?",shortAnswer:"s.isupper()",explanation:"isupper() returns True if all cased characters in the string are uppercase and there is at least one cased character.",hint:"Use isupper().",level:"basic",codeExample:`print('KOLKATA'.isupper())      # True
print('Kolkata'.isupper())      # False
print('123'.isupper())          # False (No cased characters)`},{question:"What does s.istitle() verify?",shortAnswer:"It verifies that uppercase characters follow only uncased characters and lowercase characters follow only cased ones (Title Case).",explanation:"In title-cased strings, each word starts with an uppercase letter followed by lowercase letters (e.g. 'Coder And Accotax').",hint:"Checks for Title Case format.",level:"basic",codeExample:`print('Coder And Accotax'.istitle())  # True
print('coder and accotax'.istitle())  # False`},{question:"How do removeprefix() and removesuffix() differ from lstrip() and rstrip()?",shortAnswer:"removeprefix/removesuffix remove an EXACT substring prefix/suffix; lstrip/rstrip remove ANY character from a set of characters.",explanation:"removeprefix('https://') only trims that exact sequence once. lstrip('https://') strips any combination of 'h','t','p','s',':','/' from the left edge until a different char is met.",hint:"removeprefix targets exact substrings; strip targets sets of characters.",level:"moderate",codeExample:`url = 'https://https.com'
print(url.removeprefix('https://'))  # 'https.com'
print(url.lstrip('https://'))         # '.com' (Over-stripping gotcha!)`},{question:"How do you search for a substring within a specific index range using find()?",shortAnswer:"s.find(sub, start, stop)",explanation:"The optional start and stop arguments restrict the search to the slice s[start:stop], returning the absolute index in the original string (or -1).",hint:"Pass start and stop index bounds.",level:"basic",codeExample:`s = 'cat and dog and cat'
print(s.find('cat', 5))     # 16 (Finds second 'cat')`},{question:"What is the best way to check if a substring exists if you do not need its index?",shortAnswer:"Use the 'in' operator: if 'sub' in s:",explanation:"The 'in' operator is the most readable, pythonic, and fastest way to perform a boolean membership check.",hint:"'sub in s' is faster and more readable than s.find() != -1.",level:"basic",codeExample:`if 'Barrackpore' in 'Coder & AccoTax Barrackpore':
    print('Location found!')`},{question:"How can you validate if a string represents a valid positive integer before casting to int()?",shortAnswer:"if s.isdigit(): val = int(s)",explanation:"s.isdigit() or s.isdecimal() ensures that every character is a digit, preventing ValueError when int(s) is called.",hint:"Use s.isdigit() or s.isdecimal().",level:"basic",codeExample:`user_input = '700120'
if user_input.isdigit():
    pincode = int(user_input)
    print('Valid PIN:', pincode)`},{question:"How can you validate if a string represents a float value?",shortAnswer:"Try casting with float(s) in a try/except block, or split by '.' with one dot and digits on both sides.",explanation:"Because Python string methods like isdigit() do not recognize decimal points, try/except float() is the most robust way to validate floating point strings.",hint:"Use try: float(s) except ValueError.",level:"moderate",codeExample:`def is_float(val):
    try:
        float(val)
        return True
    except ValueError:
        return False

print(is_float('3.1415'))  # True
print(is_float('abc'))     # False`},{question:"How do you count all occurrences of a character, ignoring case?",shortAnswer:"s.lower().count(sub.lower()) or s.casefold().count(sub.casefold())",explanation:"Normalizing both the target string and the search substring to lowercase before calling count() performs a case-insensitive count.",hint:"Normalize case first with lower() or casefold().",level:"basic",codeExample:`text = 'Python python PYTHON PyThOn'
print(text.lower().count('python'))  # 4`},{question:"How do you check if a filename is an image file using endswith()?",shortAnswer:"filename.lower().endswith(('.jpg', '.jpeg', '.png', '.gif', '.webp'))",explanation:"Lowercasing handles uppercase extensions like '.PNG' or '.JPG', while passing a tuple to endswith() tests all candidate extensions in one call.",hint:"Use lower() + endswith(tuple_of_extensions).",level:"basic",codeExample:`photo = 'student_profile.PNG'
is_image = photo.lower().endswith(('.jpg', '.jpeg', '.png', '.webp'))
print(is_image)  # True`},{question:"What happens if start index is beyond the string length in s.startswith(prefix, start)?",shortAnswer:"It returns False without raising any IndexError.",explanation:"startswith() uses boundary-tolerant slice semantics, returning False when start >= len(s).",hint:"Tolerant slice boundary rules apply.",level:"moderate",codeExample:`s = 'Hello'
print(s.startswith('H', 100))  # False (No error)`},{question:"How do you find all positions of a substring in a string in Python?",shortAnswer:"Use a while loop with s.find(sub, start) advancing start = pos + 1 (or + len(sub)).",explanation:"By repeatedly calling find() with the previous match position + 1 as the new start parameter, you collect all matching indices.",hint:"Advance start index in a while loop with find().",level:"moderate",codeExample:`def find_all(s, sub):
    res = []
    pos = s.find(sub)
    while pos != -1:
        res.append(pos)
        pos = s.find(sub, pos + 1)
    return res

print(find_all('banana', 'an'))  # [1, 3]`},{question:"How do you validate if an Indian PAN card number format is valid using string methods?",shortAnswer:"len(pan) == 10 and pan[:5].isalpha() and pan[5:9].isdigit() and pan[9].isalpha()",explanation:"Standard PAN cards consist of 5 uppercase letters, 4 digits, and 1 letter (e.g. ABCDE1234F).",hint:"Combine slicing with isalpha() and isdigit().",level:"moderate",codeExample:`def is_valid_pan(pan):
    return len(pan) == 10 and pan[:5].isalpha() and pan[5:9].isdigit() and pan[9].isalpha()

print(is_valid_pan('ABCDE1234F'))  # True
print(is_valid_pan('12345ABCDE'))  # False`},{question:"What is the time complexity of s.find('sub') and s.count('sub')?",shortAnswer:"O(N * M) worst-case, where N is len(s) and M is len(sub), though CPython uses the fast Boyer-Moore-Horspool algorithm on average.",explanation:"CPython implements a highly optimized hybrid string search algorithm (Boyer-Moore-Horspool combined with memchr) in native C, making searches virtually O(N) in practice.",hint:"Optimized in native C with fast skip heuristics.",level:"complex",codeExample:"# Search runs in microsecond-scale C loops in CPython runtime"}];function z(){const d=l.useRef([]),[a,c]=l.useState("search"),[p,h]=l.useState("700120");l.useEffect(()=>{const t=new IntersectionObserver(s=>{s.forEach(o=>{o.isIntersecting&&o.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return d.current.forEach(s=>{s&&t.observe(s)}),()=>t.disconnect()},[]);const r=t=>{t&&!d.current.includes(t)&&d.current.push(t)},n=(t=>{const s=t.length,o=/^[\x00-\x7F]*$/.test(t),x=s>0&&/^[0-9]+$/.test(t),m=x||s>0&&/^[\d\u00B2\u00B3\u00B9\u2070-\u2079]+$/.test(t),u=m||s>0&&/^[\d\u00B2\u00B3\u00B9\u00BC-\u00BE\u2150-\u215E\u56DB]+$/.test(t),b=s>0&&/^[A-Za-z]+$/.test(t),g=s>0&&/^[A-Za-z0-9]+$/.test(t),w=s>0&&/^\s+$/.test(t),y=/^[\x20-\x7E\xA0-\xFF]*$/.test(t),N=/[a-z]/.test(t)&&!/[A-Z]/.test(t),v=/[A-Z]/.test(t)&&!/[a-z]/.test(t),j=/^[A-Za-z_][A-Za-z0-9_]*$/.test(t);return{isdecimal:x,isdigit:m,isnumeric:u,isalpha:b,isalnum:g,isspace:w,isprintable:y,islower:N,isupper:v,isidentifier:j,isascii:o}})(p),f=[{label:"700120",desc:"PIN code (Decimal)"},{label:"ABCDE1234F",desc:"PAN card (Alnum)"},{label:"student_name_2",desc:"Python Identifier"},{label:"²",desc:"Superscript (Digit, not Decimal)"},{label:"½",desc:"Vulgar Fraction (Numeric only)"},{label:"Kolkata 2026",desc:"Mixed text with spaces"},{label:`  	
  `,desc:"Whitespace only (isspace)"},{label:"-42",desc:"Negative number (False for all digits!)"}];return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-blue-500/30 selection:text-blue-200",children:[e.jsx("style",{children:`
        .section-hidden {
          transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .section-visible {
          transform: translateY(0);
        }
        @keyframes pulseGlowBlue {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(59, 130, 246, 0.4)); }
          50% { filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.8)); }
        }
        .animate-glow-blue {
          animation: pulseGlowBlue 3s infinite ease-in-out;
        }
      `}),e.jsxs("header",{ref:r,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-blue-950/80 text-blue-300 px-3 py-1 rounded-full border border-blue-800/80 shadow-sm shadow-blue-950/50",children:"Segment 2 • Module 002_007"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-indigo-950/80 text-indigo-300 px-3 py-1 rounded-full border border-indigo-800/80 shadow-sm shadow-indigo-950/50",children:"Topic 4"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"String Processing & Pattern Handling"})]}),e.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:"Searching, Inspection & Validation Methods"}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master substring discovery (",e.jsx("code",{className:"text-blue-400 font-mono",children:"find"})," vs ",e.jsx("code",{className:"text-rose-400 font-mono",children:"index"}),"), occurrence counting (",e.jsx("code",{className:"text-cyan-400 font-mono",children:"count"}),"), multi-prefix testing (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"startswith"}),", ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"endswith"}),"), and character classification predicates (",e.jsx("code",{className:"text-purple-400 font-mono",children:"isdecimal"}),", ",e.jsx("code",{className:"text-purple-400 font-mono",children:"isdigit"}),", ",e.jsx("code",{className:"text-purple-400 font-mono",children:"isalpha"}),")."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔎 find() vs index() (-1 vs ValueError)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🎯 Tuple Matching (startswith / endswith)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔢 Numeric Hierarchy (isdecimal ⊂ isdigit ⊂ isnumeric)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Security Scanning & PAN/PIN Validation"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎯"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. Searching, Affixes & Validation Categories"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["String searching and validation in Python is structured around two distinct operational goals: ",e.jsx("strong",{className:"text-blue-400",children:"locating substrings"})," (where is the term located?) and ",e.jsx("strong",{className:"text-emerald-400",children:"validating constraints"})," (does the text satisfy structural and type rules?)."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-blue-950/40 border border-blue-800/60 shadow-lg shadow-blue-950/30 transition-all duration-300 hover:scale-[1.01] hover:border-blue-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-blue-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"🔍"})," Substring Locator"]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-2",children:[e.jsx("code",{className:"text-blue-300 font-mono",children:"find()"}),", ",e.jsx("code",{className:"text-blue-300 font-mono",children:"rfind()"}),", ",e.jsx("code",{className:"text-blue-300 font-mono",children:"index()"}),", ",e.jsx("code",{className:"text-blue-300 font-mono",children:"rindex()"}),", ",e.jsx("code",{className:"text-blue-300 font-mono",children:"count()"}),"."]}),e.jsx("span",{className:"text-xs text-blue-400/80 font-mono",children:"Returns: int index or -1"})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 shadow-lg shadow-emerald-950/30 transition-all duration-300 hover:scale-[1.01] hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"🏁"})," Affix Matching"]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-2",children:[e.jsx("code",{className:"text-emerald-300 font-mono",children:"startswith(tuple)"}),", ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"endswith(tuple)"}),", ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"removeprefix()"}),", ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"removesuffix()"}),"."]}),e.jsx("span",{className:"text-xs text-emerald-400/80 font-mono",children:"Returns: bool or trimmed str"})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg shadow-purple-950/30 transition-all duration-300 hover:scale-[1.01] hover:border-purple-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"📋"})," Predicate Inspections"]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-2",children:[e.jsx("code",{className:"text-purple-300 font-mono",children:"isdecimal()"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"isdigit()"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"isalpha()"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"isspace()"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"isidentifier()"}),"."]}),e.jsx("span",{className:"text-xs text-purple-400/80 font-mono",children:"Returns: bool (True/False)"})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-blue-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-2",children:"The -1 Truthiness Pitfall: Why `if s.find(x):` is Dangerous"}),e.jsxs("p",{className:"text-sm sm:text-base text-slate-300 leading-relaxed",children:["In Python, ",e.jsx("code",{className:"text-rose-400 font-mono",children:"-1"})," is truthy (",e.jsx("code",{className:"text-rose-300 font-mono",children:"bool(-1) == True"}),"). If you write ",e.jsx("code",{className:"text-rose-300 font-mono",children:"if s.find('x'):"}),", Python will enter the if-block even when 'x' is MISSING!"]}),e.jsxs("p",{className:"text-sm sm:text-base text-emerald-300 font-semibold mt-1",children:["✓ Best Practice: Always check ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"if s.find('x') != -1:"})," or use ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"if 'x' in s:"}),"."]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"🔍"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Search Mechanics & Numeric Hierarchy"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>c("search"),className:i("px-3 py-1.5 rounded-lg transition-all",a==="search"?"bg-blue-900/50 text-blue-300 border border-blue-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"find() vs index()"}),e.jsx("button",{onClick:()=>c("affixes"),className:i("px-3 py-1.5 rounded-lg transition-all",a==="affixes"?"bg-emerald-900/50 text-emerald-300 border border-emerald-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Tuple Affix Matching"}),e.jsx("button",{onClick:()=>c("hierarchy"),className:i("px-3 py-1.5 rounded-lg transition-all",a==="hierarchy"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Numeric Hierarchy Venn"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Exploring directional search pointers, candidate prefix testing, and character classification sets:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:a==="search"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:'SUBSTRING SCANNING: s = "Coder & AccoTax Barrackpore"'}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"90",rx:"8",fill:"#082f49",stroke:"#0ea5e9",strokeWidth:"1.5"}),e.jsx("text",{x:"20",y:"30",fill:"#7dd3fc",fontSize:"13",fontWeight:"bold",children:'s.find("Barrackpore") (Left-to-Right)'}),e.jsxs("text",{x:"20",y:"55",fill:"#f8fafc",fontSize:"12",children:["Returns first match index: ",e.jsx("tspan",{fill:"#38bdf8",fontWeight:"bold",children:"16"})]}),e.jsxs("text",{x:"20",y:"75",fill:"#94a3b8",fontSize:"11",children:["If missing: returns ",e.jsx("tspan",{fill:"#34d399",fontWeight:"bold",children:"-1 (Zero Exception)"})]}),e.jsx("rect",{x:"420",y:"0",width:"390",height:"90",rx:"8",fill:"#4c0519",stroke:"#f43f5e",strokeWidth:"1.5"}),e.jsx("text",{x:"440",y:"30",fill:"#fda4af",fontSize:"13",fontWeight:"bold",children:'s.index("Barrackpore") (Strict)'}),e.jsxs("text",{x:"440",y:"55",fill:"#f8fafc",fontSize:"12",children:["Returns first match index: ",e.jsx("tspan",{fill:"#fda4af",fontWeight:"bold",children:"16"})]}),e.jsxs("text",{x:"440",y:"75",fill:"#fca5a5",fontSize:"11",children:["If missing: raises ",e.jsx("tspan",{fill:"#f43f5e",fontWeight:"bold",children:"ValueError: substring not found"})]})]}),e.jsxs("g",{transform:"translate(30, 160)",children:[e.jsx("rect",{x:"0",y:"0",width:"810",height:"145",rx:"8",fill:"#090d16",stroke:"#334155"}),e.jsx("text",{x:"20",y:"30",fill:"#34d399",fontSize:"13",fontWeight:"bold",children:"Non-Overlapping Occurrence Rule: 'banana'.count('ana') == 1"}),e.jsx("g",{transform:"translate(20, 45)",children:["b","a","n","a","n","a"].map((t,s)=>e.jsxs("g",{children:[e.jsx("rect",{x:s*55,y:"0",width:"45",height:"45",rx:"6",fill:s>=1&&s<=3?"#065f46":"#1e293b",stroke:s>=1&&s<=3?"#34d399":"#475569"}),e.jsx("text",{x:s*55+22,y:"28",fill:"#f8fafc",fontSize:"16",fontWeight:"bold",textAnchor:"middle",children:t}),e.jsxs("text",{x:s*55+22,y:"58",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:["i=",s]})]},s))}),e.jsx("text",{x:"360",y:"70",fill:"#cbd5e1",fontSize:"12",children:"• Match 1: indices [1, 2, 3] ('ana') is claimed."}),e.jsx("text",{x:"360",y:"95",fill:"#fda4af",fontSize:"12",children:"• Index 3 ('a') is already consumed, so indices [3, 4, 5] cannot form a second match!"}),e.jsx("text",{x:"360",y:"120",fill:"#34d399",fontSize:"12",fontWeight:"bold",children:"Result: count('ana') returns 1."})]})]}):a==="affixes"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#34d399",fontSize:"14",fontWeight:"bold",children:"TUPLE AFFIX MATCHING & SUBSTRING STRIPPING"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"810",height:"110",rx:"8",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"14",fontWeight:"bold",children:"url.startswith(('http://', 'https://', 'ftp://'))"}),e.jsxs("text",{x:"20",y:"55",fill:"#f8fafc",fontSize:"12",children:["Python allows passing a ",e.jsx("tspan",{fill:"#34d399",fontWeight:"bold",children:"TUPLE"})," of candidate prefixes (lists and sets raise TypeError)."]}),e.jsxs("text",{x:"20",y:"80",fill:"#cbd5e1",fontSize:"12",children:['• "https://codernaccotax.co.in".startswith(("http://", "https://")) → ',e.jsx("tspan",{fill:"#34d399",fontWeight:"bold",children:"True"})]}),e.jsxs("text",{x:"20",y:"98",fill:"#cbd5e1",fontSize:"12",children:['• "smtp://mail.office.com".startswith(("http://", "https://")) → ',e.jsx("tspan",{fill:"#fca5a5",fontWeight:"bold",children:"False"})]})]}),e.jsxs("g",{transform:"translate(30, 180)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"120",rx:"8",fill:"#1e1b4b",stroke:"#6366f1"}),e.jsx("text",{x:"20",y:"30",fill:"#a5b4fc",fontSize:"13",fontWeight:"bold",children:'s.removeprefix("www.") (Python 3.9+)'}),e.jsx("text",{x:"20",y:"55",fill:"#f8fafc",fontSize:"12",children:"Removes EXACT prefix only."}),e.jsx("text",{x:"20",y:"75",fill:"#a7f3d0",fontSize:"12",children:'"www.example.com" → "example.com"'}),e.jsx("text",{x:"20",y:"95",fill:"#94a3b8",fontSize:"11",children:"Safe no-op if prefix is missing."}),e.jsx("rect",{x:"420",y:"0",width:"390",height:"120",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"440",y:"30",fill:"#fda4af",fontSize:"13",fontWeight:"bold",children:'s.lstrip("w.") (Character Set Trap)'}),e.jsx("text",{x:"440",y:"55",fill:"#f8fafc",fontSize:"12",children:"Removes ANY 'w' or '.' character."}),e.jsx("text",{x:"440",y:"75",fill:"#fda4af",fontSize:"12",children:'"www.w3schools.com" → "3schools.com" (Gotcha!)'}),e.jsx("text",{x:"440",y:"95",fill:"#fca5a5",fontSize:"11",children:"Removes 'w' from actual domain word!"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"THE NUMERIC HIERARCHY VENN: isdecimal() ⊂ isdigit() ⊂ isnumeric()"}),e.jsx("circle",{cx:"440",cy:"180",r:"140",fill:"#3b0764",stroke:"#a855f7",strokeWidth:"2",opacity:"0.6"}),e.jsx("text",{x:"440",y:"65",fill:"#e9d5ff",fontSize:"14",fontWeight:"bold",textAnchor:"middle",children:"1. isnumeric() (Broadest: Fractions '½', Chinese '四', Roman Numerals)"}),e.jsx("circle",{cx:"440",cy:"195",r:"100",fill:"#1e1b4b",stroke:"#6366f1",strokeWidth:"2",opacity:"0.8"}),e.jsx("text",{x:"440",y:"115",fill:"#c7d2fe",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"2. isdigit() (Adds Superscripts '²', Subscripts)"}),e.jsx("circle",{cx:"440",cy:"215",r:"60",fill:"#064e3b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"440",y:"210",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"3. isdecimal()"}),e.jsx("text",{x:"440",y:"235",fill:"#ecfdf5",fontSize:"12",textAnchor:"middle",children:"'0' - '9' (int() safe)"}),e.jsx("rect",{x:"30",y:"240",width:"220",height:"70",rx:"6",fill:"#090d16",stroke:"#f43f5e"}),e.jsx("text",{x:"45",y:"265",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"Float & Negative Trap:"}),e.jsx("text",{x:"45",y:"290",fill:"#cbd5e1",fontSize:"11",children:'"-10" & "3.14" fail ALL 3 methods!'})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive String Predicate Sandbox"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Type any string below or choose a preset to inspect live return values across all Python validation methods:"}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6",children:f.map(t=>e.jsxs("button",{onClick:()=>h(t.label),className:i("p-2.5 rounded-xl text-left border transition-all text-xs",p===t.label?"bg-blue-950/90 border-blue-500 text-blue-200 shadow-md shadow-blue-950":"bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"),children:[e.jsx("div",{className:"font-mono font-bold text-blue-300",children:t.label}),e.jsx("div",{className:"text-[11px] text-slate-400 line-clamp-1",children:t.desc})]},t.label))}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{className:"block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2",children:"Inspect Target String"}),e.jsx("input",{type:"text",value:p,onChange:t=>h(t.target.value),className:"w-full bg-slate-950 border border-slate-700 rounded-xl p-3.5 text-slate-100 font-mono text-base focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500",placeholder:"Type any string to inspect predicates..."})]}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800",children:[e.jsx("div",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 mb-4",children:"Boolean Predicate Evaluation Results"}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3",children:[{name:".isdecimal()",val:n.isdecimal,tip:"Base-10 digits 0-9"},{name:".isdigit()",val:n.isdigit,tip:"Digits & superscripts"},{name:".isnumeric()",val:n.isnumeric,tip:"Broadest numeric set"},{name:".isalpha()",val:n.isalpha,tip:"Letters only"},{name:".isalnum()",val:n.isalnum,tip:"Letters + numbers"},{name:".isspace()",val:n.isspace,tip:"Whitespace only"},{name:".isidentifier()",val:n.isidentifier,tip:"Valid Python variable"},{name:".isprintable()",val:n.isprintable,tip:"No control codes"},{name:".islower()",val:n.islower,tip:"All letters lowercase"},{name:".isupper()",val:n.isupper,tip:"All letters uppercase"},{name:".isascii()",val:n.isascii,tip:"ASCII range (0..127)"}].map(t=>e.jsxs("div",{className:i("p-3 rounded-xl border flex flex-col justify-between transition-all",t.val?"bg-emerald-950/70 border-emerald-500/80 text-emerald-200":"bg-slate-900/50 border-slate-800 text-slate-500"),children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-mono text-xs font-bold text-slate-200",children:t.name}),e.jsx("span",{className:i("text-xs font-bold font-mono px-2 py-0.5 rounded",t.val?"bg-emerald-900 text-emerald-300":"bg-slate-800 text-slate-400"),children:t.val?"True":"False"})]}),e.jsx("span",{className:"text-[11px] text-slate-400 mt-2",children:t.tip})]},t.name))})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚙️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Complete Search & Validation Reference Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Method"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Return Type"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Behavior if Found / Satisfied"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Behavior if NOT Found / Unmet"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-blue-300 font-semibold",children:"s.find(sub, start, stop)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400",children:"int"}),e.jsx("td",{className:"py-3 px-4",children:"Lowest matching index (left-to-right)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"-1 (Zero Error)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-blue-300 font-semibold",children:"s.rfind(sub, start, stop)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400",children:"int"}),e.jsx("td",{className:"py-3 px-4",children:"Highest matching index (right-to-left)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"-1 (Zero Error)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-rose-300 font-semibold",children:"s.index(sub, start, stop)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400",children:"int"}),e.jsx("td",{className:"py-3 px-4",children:"Lowest matching index"}),e.jsx("td",{className:"py-3 px-4 font-mono text-rose-400 font-bold",children:"Raises ValueError"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"s.count(sub, start, stop)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400",children:"int"}),e.jsx("td",{className:"py-3 px-4",children:"Number of non-overlapping occurrences"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400",children:"0"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-300 font-semibold",children:"s.startswith(prefix_tuple)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400",children:"bool"}),e.jsx("td",{className:"py-3 px-4",children:"Returns True if s starts with any candidate prefix"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400",children:"False"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-300 font-semibold",children:"s.endswith(suffix_tuple)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400",children:"bool"}),e.jsx("td",{className:"py-3 px-4",children:"Returns True if s ends with any candidate suffix"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400",children:"False"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"s.isdecimal()"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400",children:"bool"}),e.jsx("td",{className:"py-3 px-4",children:"All characters are base-10 digits 0-9 (len > 0)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400",children:"False"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"s.isalpha()"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400",children:"bool"}),e.jsx("td",{className:"py-3 px-4",children:"All characters are alphabetic letters (len > 0)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400",children:"False"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"s.isidentifier()"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400",children:"bool"}),e.jsx("td",{className:"py-3 px-4",children:"Valid Python variable / identifier syntax"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400",children:"False"})]})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating substring searching, multi-prefix routing, character predicate classifications, and form security validators:"}),e.jsx(_,{files:[{filename:"searching_and_counting_methods.py",code:E,description:"find vs index (-1 vs ValueError), count non-overlapping rules, and membership testing."},{filename:"prefix_and_suffix_validation.py",code:I,description:"startswith/endswith with tuple candidates, removeprefix, and document router."},{filename:"character_classification_predicates.py",code:P,description:"The numeric hierarchy (isdecimal vs isdigit vs isnumeric) and isidentifier variable validator."},{filename:"form_validator_and_security_scanner.py",code:F,description:"Production form validator (PAN, PIN, mobile, password) and SQLi/XSS threat scanner."}]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: The Truthy -1 `find()` Trap"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:'if s.find("admin"):'})," evaluates to ",e.jsx("code",{className:"text-rose-300 font-mono",children:"True"}),' when "admin" is NOT found because ',e.jsx("code",{className:"text-rose-300 font-mono",children:"bool(-1) == True"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Write ",e.jsx("code",{className:"text-emerald-300",children:'if "admin" in s:'})," or ",e.jsx("code",{className:"text-emerald-300",children:'if s.find("admin") != -1:'})]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Passing Lists or Sets to `startswith()`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:[e.jsx("code",{className:"text-amber-300 font-mono",children:'s.startswith([".pdf", ".docx"])'})," crashes with ",e.jsx("code",{className:"text-amber-300 font-mono",children:"TypeError: tuple for startswith must only contain str"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always pass a ",e.jsx("strong",{children:"TUPLE"}),": ",e.jsx("code",{className:"text-emerald-300",children:'s.startswith((".pdf", ".docx"))'})]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Expecting `isdigit()` on Negative Numbers"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:[e.jsx("code",{className:"text-purple-300 font-mono",children:'"-10".isdigit()'})," returns ",e.jsx("code",{className:"text-purple-300 font-mono",children:"False"})," because the minus sign ",e.jsx("code",{className:"text-purple-300 font-mono",children:"'-'"})," is punctuation, not a digit."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Strip sign: ",e.jsx("code",{className:"text-emerald-300",children:'s.lstrip("-+").isdigit()'})]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Empty String Returns `False`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:[e.jsx("code",{className:"text-cyan-300 font-mono",children:'"".isalpha()'}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:'"".isdigit()'}),", and ",e.jsx("code",{className:"text-cyan-300 font-mono",children:'"".isspace()'})," all return ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"False"})," because they require length > 0."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Note:"})," ",e.jsx("code",{className:"text-emerald-300",children:'"".isascii()'})," is the only predicate returning ",e.jsx("code",{className:"text-emerald-300",children:"True"})," on empty strings!"]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering substring finders, tuple affixes, numeric hierarchies, and security validations:"}),e.jsx(S,{questions:R})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with search algorithms, predicate matrices, and security scanner recipes:"}),e.jsx("div",{className:"mb-10",children:e.jsx(T,{content:C,filename:"python_topic4_searching_and_validation_notes.txt",title:"Print Topic 4 Study Notes"})}),e.jsx(A,{})]})]})]})}export{z as default};
