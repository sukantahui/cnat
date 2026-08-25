import{b as s,j as e,bg as c}from"./vendor-react-core-Doz9nIC6.js";import{P as w}from"./PythonFileLoader-hCi5osN-.js";import{P as E}from"./PlainTextPrint-C08xhKA4.js";import{F as A}from"./FAQTemplate-CkSqDH4B.js";import{T as j}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const v=`# topic7_files/regex_syntax_and_raw_strings.py\r
# Module: 002_007_string-processing\r
# Topic: Basic Regular Expressions Concept with re Module\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 7 - File 1: Regex Fundamentals, Raw Strings & Core Metacharacters\r
Demonstrates:\r
  1. The "Backslash Plague" & why raw strings r"..." are mandatory in regex\r
  2. Core metacharacters: . (any char), ^ (start), $ (end), | (or)\r
  3. Character sets [abc], ranges [a-z0-9], and negated sets [^0-9]\r
  4. Word boundaries: \\b (word edge) and \\B (non-word boundary)\r
"""\r
\r
import re\r
\r
def demonstrate_raw_strings_and_backslash_plague():\r
    print("=" * 65)\r
    print("1. THE BACKSLASH PLAGUE & RAW STRINGS r'...'")\r
    print("=" * 65)\r
    print("""\r
Why Python Regex MUST Use Raw Strings:\r
  * In normal Python strings, '\\\\' is an escape character (e.g. '\\\\n' = newline).\r
  * In regex syntax, '\\\\' is also an escape character (e.g. '\\\\d' = digit, '\\\\b' = boundary).\r
  * Without raw strings:\r
      To match a literal backslash '\\\\', Python needs '\\\\\\\\' which regex compiles to '\\\\'.\r
      To write '\\\\b' (word boundary) without raw strings, Python treats '\\\\b' as ASCII backspace!\r
  * With raw strings (r"..."):\r
      Backslashes are preserved literally without Python escape interpretation.\r
""")\r
\r
    # Word boundary example\r
    text = "The cat scattered the catalog into the cattle barn."\r
    \r
    # Matching isolated whole word "cat" with \\b boundaries\r
    raw_pattern = r"\\bcat\\b"\r
    matches = re.findall(raw_pattern, text)\r
    print(f"Target Text : '{text}'")\r
    print(f"Pattern     : r'\\\\bcat\\\\b' (Whole word only)")\r
    print(f"Matches     : {matches} (Found exact count: {len(matches)})\\n")\r
\r
\r
def demonstrate_character_sets_and_ranges():\r
    print("=" * 65)\r
    print("2. CHARACTER SETS [abc], RANGES [a-z], & NEGATED SETS [^...]")\r
    print("=" * 65)\r
\r
    sample_text = "Susmita scored 98 in Python, 85 in SQL, and 72 in React (2026 Batch)."\r
    print(f"Sample Text: '{sample_text}'\\n")\r
\r
    # 1. Custom character set: vowels\r
    vowels = re.findall(r"[aeiouAEIOU]", sample_text)\r
    print(f"Vowels [aeiouAEIOU]       : Total {len(vowels)} vowels found")\r
\r
    # 2. Character ranges: 2-digit marks [0-9][0-9]\r
    scores = re.findall(r"\\b[0-9]{2}\\b", sample_text)\r
    print(f"Two-digit scores [0-9]{{2}} : {scores}")\r
\r
    # 3. Negated set: [^0-9] (Any non-digit character)\r
    clean_text = "".join(re.findall(r"[^0-9]", sample_text))\r
    print(f"Text with digits stripped : '{clean_text.strip()}'")\r
\r
\r
def demonstrate_anchors_and_alternation():\r
    print("\\n" + "=" * 65)\r
    print("3. ANCHORS (^, $) AND ALTERNATION (|)")\r
    print("=" * 65)\r
\r
    urls = [\r
        "https://codernaccotax.co.in",\r
        "http://barrackpore.gov.in",\r
        "ftp://backup.server.local",\r
        "invalid_web_url"\r
    ]\r
\r
    # Pattern: Must START with http:// or https://, and END with .in or .com\r
    anchor_pattern = r"^(https?|ftp)://.*?\\.(in|com|gov\\.in|local)$"\r
\r
    for u in urls:\r
        matched = bool(re.search(anchor_pattern, u))\r
        status = "[VALID URL]" if matched else "[INVALID/UNMATCHED]"\r
        print(f"'{u:<30}' -> {status}")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_raw_strings_and_backslash_plague()\r
    demonstrate_character_sets_and_ranges()\r
    demonstrate_anchors_and_alternation()\r
`,S=`# topic7_files/shorthand_character_classes_and_quantifiers.py\r
# Module: 002_007_string-processing\r
# Topic: Basic Regular Expressions Concept with re Module\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 7 - File 2: Shorthand Character Classes & Greedy vs Lazy Quantifiers\r
Demonstrates:\r
  1. Predefined shorthands: \\d vs \\D, \\w vs \\W, \\s vs \\S\r
  2. Quantifier mechanics: *, +, ?, {n}, {m,n}, {m,}\r
  3. The classic HTML trap: Greedy (.*) vs Lazy/Non-Greedy (.*?)\r
  4. Phone numbers and alphanumeric token extraction\r
"""\r
\r
import re\r
\r
def demonstrate_shorthand_classes():\r
    print("=" * 65)\r
    print("1. PREDEFINED SHORTHAND CHARACTER CLASSES")\r
    print("=" * 65)\r
\r
    log_entry = "User_942 (Susmita Mukherjee) paid INR 4500.00 at 18:30:15."\r
    print(f"Target String: '{log_entry}'\\n")\r
\r
    # \\d = digits [0-9], \\D = non-digits\r
    all_digits = re.findall(r"\\d+", log_entry)\r
    print(f"\\\\d+ (All numeric groups)    : {all_digits}")\r
\r
    # \\w = word characters [a-zA-Z0-9_], \\W = non-word symbols\r
    all_words = re.findall(r"\\w+", log_entry)\r
    print(f"\\\\w+ (All word identifiers)  : {all_words[:6]}...")\r
\r
    # \\s = whitespace [ \\t\\n\\r], \\S = non-whitespace\r
    non_spaces = re.findall(r"\\S+", log_entry)\r
    print(f"\\\\S+ (Non-whitespace chunks) : {len(non_spaces)} tokens")\r
\r
\r
def demonstrate_quantifiers_matrix():\r
    print("\\n" + "=" * 65)\r
    print("2. QUANTIFIERS: EXACT, RANGES & OPTIONAL MATCHES")\r
    print("=" * 65)\r
\r
    # Validating PIN code (exactly 6 digits: \\d{6})\r
    pin_samples = ["700120", "700025", "12345", "7001201"]\r
    pin_regex = re.compile(r"^\\d{6}$")\r
\r
    print("--- 6-Digit PIN Code Validation (\\\\d{6}) ---")\r
    for pin in pin_samples:\r
        status = "[VALID PIN]" if pin_regex.match(pin) else "[INVALID]"\r
        print(f"PIN: '{pin:<10}' -> {status}")\r
\r
    # Optional prefix test (+91 or 0) using (?:...)?\r
    phones = ["+917003756860", "07003756860", "7003756860", "98765"]\r
    phone_regex = re.compile(r"^(?:\\+91|0)?[6-9]\\d{9}$")\r
\r
    print("\\n--- 10-Digit Mobile Validation with Optional (+91|0)? ---")\r
    for ph in phones:\r
        status = "[VALID MOBILE]" if phone_regex.match(ph) else "[INVALID]"\r
        print(f"Phone: '{ph:<15}' -> {status}")\r
\r
\r
def demonstrate_greedy_vs_lazy():\r
    print("\\n" + "=" * 65)\r
    print("3. GREEDY (.*) VS LAZY / NON-GREEDY (.*?) MATCHING")\r
    print("=" * 65)\r
\r
    html_snippet = "<p>First Paragraph</p><p>Second Paragraph</p><p>Third Paragraph</p>"\r
    print(f"Target HTML Snippet:\\n  '{html_snippet}'\\n")\r
\r
    # Greedy quantifier (.*): Consumes as MUCH text as possible up to the LAST </p>\r
    greedy_pattern = r"<p>.*</p>"\r
    greedy_matches = re.findall(greedy_pattern, html_snippet)\r
    print("A. GREEDY MATCH (r'<p>.*</p>'):")\r
    print(f"   Match count : {len(greedy_matches)}")\r
    print(f"   Captured    : '{greedy_matches[0]}'")\r
    print("   -> CAUTION: Swallowed ALL paragraphs into a single match!\\n")\r
\r
    # Lazy quantifier (.*?): Stops at the VERY FIRST matching </p>\r
    lazy_pattern = r"<p>.*?</p>"\r
    lazy_matches = re.findall(lazy_pattern, html_snippet)\r
    print("B. LAZY / NON-GREEDY MATCH (r'<p>.*?</p>'):")\r
    print(f"   Match count : {len(lazy_matches)}")\r
    for i, m in enumerate(lazy_matches, 1):\r
        print(f"   Match {i}     : '{m}'")\r
    print("   -> SUCCESS: Correctly extracted each distinct paragraph tag!")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_shorthand_classes()\r
    demonstrate_quantifiers_matrix()\r
    demonstrate_greedy_vs_lazy()\r
`,_=`# topic7_files/compiling_patterns_and_flags.py\r
# Module: 002_007_string-processing\r
# Topic: Basic Regular Expressions Concept with re Module\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
"""\r
Topic 7 - File 3: Pattern Pre-Compilation (re.compile) & Core Regex Flags\r
Demonstrates:\r
  1. Performance optimization: re.compile(pattern)\r
  2. re.IGNORECASE (re.I): Case-insensitive pattern matching\r
  3. re.MULTILINE (re.M): Line-by-line anchors (^ and $)\r
  4. re.DOTALL (re.S): Enabling . (dot) to match newline characters\r
  5. re.VERBOSE (re.X): Documented, multi-line regular expressions with comments\r
  6. Combining flags with bitwise OR: re.I | re.M | re.X\r
"""\r
\r
import re\r
\r
def demonstrate_re_compile_performance():\r
    print("=" * 65)\r
    print("1. PATTERN PRE-COMPILATION WITH re.compile()")\r
    print("=" * 65)\r
\r
    # Pre-compiling a regex turns the pattern string into a Pattern bytecode object\r
    # that can be reused millions of times with zero recompilation overhead.\r
    email_regex = re.compile(r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$")\r
    \r
    candidates = [\r
        "susmita@codernaccotax.co.in",\r
        "student.py-2026@gmail.com",\r
        "invalid_email_at_domain.com",\r
        "admin@barrackpore.gov.in"\r
    ]\r
\r
    for em in candidates:\r
        is_valid = bool(email_regex.match(em))\r
        status = "[VALID EMAIL]" if is_valid else "[INVALID]"\r
        print(f"'{em:<30}' -> {status}")\r
\r
\r
def demonstrate_core_regex_flags():\r
    print("\\n" + "=" * 65)\r
    print("2. CORE REGEX FLAGS: IGNORECASE, MULTILINE & DOTALL")\r
    print("=" * 65)\r
\r
    # A. re.IGNORECASE (re.I)\r
    text = "Python python PYTHON PyThOn"\r
    matches_case = re.findall(r"python", text, flags=re.IGNORECASE)\r
    print(f"re.IGNORECASE: Matched {len(matches_case)} instances in '{text}'\\n")\r
\r
    # B. re.MULTILINE (re.M)\r
    multiline_text = """2026-08-01: Session 1 Python\r
2026-08-02: Session 2 SQL\r
2026-08-03: Session 3 React"""\r
\r
    # Without re.M, ^ only matches the start of the whole string.\r
    # With re.M, ^ matches the start of EVERY LINE.\r
    dates = re.findall(r"^\\d{4}-\\d{2}-\\d{2}", multiline_text, flags=re.MULTILINE)\r
    print(f"re.MULTILINE: Extracted line-start dates: {dates}\\n")\r
\r
    # C. re.DOTALL (re.S)\r
    doc_block = "BEGIN_BLOCK\\nStudent: Susmita Mukherjee\\nCity: Barrackpore\\nEND_BLOCK"\r
    \r
    # Without DOTALL, . does NOT match \\n\r
    no_dotall = re.findall(r"BEGIN_BLOCK.*END_BLOCK", doc_block)\r
    print(f"Without re.DOTALL : Found {len(no_dotall)} matches (Failed across newlines)")\r
\r
    # With DOTALL, . matches \\n\r
    with_dotall = re.findall(r"BEGIN_BLOCK.*END_BLOCK", doc_block, flags=re.DOTALL)\r
    print(f"With re.DOTALL    : Found {len(with_dotall)} match (Successfully bridged newlines)")\r
\r
\r
def demonstrate_verbose_regex():\r
    print("\\n" + "=" * 65)\r
    print("3. re.VERBOSE (re.X): READABLE, COMMENTED REGULAR EXPRESSIONS")\r
    print("=" * 65)\r
\r
    # Complex patterns without re.VERBOSE are notoriously hard to read.\r
    # re.VERBOSE ignores whitespace and allows Python '#' comments inside the pattern!\r
    indian_pan_regex = re.compile(\r
        r"""\r
        ^                   # Start of string anchor\r
        [A-Z]{3}            # First 3 letters: Sequential series (e.g. ABC)\r
        [PCHFATBLJG]        # 4th letter: Entity category (P=Person, C=Company, etc.)\r
        [A-Z]               # 5th letter: Surname first letter\r
        [0-9]{4}            # 4 sequential digits (0001 to 9999)\r
        [A-Z]               # Last letter: Check character\r
        $                   # End of string anchor\r
        """,\r
        re.VERBOSE | re.IGNORECASE\r
    )\r
\r
    test_pans = ["ABCDE1234F", "abcpe1234f", "12345ABCDE", "ABCDE12345"]\r
\r
    print("--- Detailed PAN Card Validation with re.VERBOSE ---")\r
    for pan in test_pans:\r
        valid = bool(indian_pan_regex.match(pan))\r
        status = "[VALID PAN]" if valid else "[INVALID]"\r
        print(f"PAN: '{pan:<12}' -> {status}")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_re_compile_performance()\r
    demonstrate_core_regex_flags()\r
    demonstrate_verbose_regex()\r
`,I=`# topic7_files/token_and_pattern_validator.py\r
# Module: 002_007_string-processing\r
# Topic: Basic Regular Expressions Concept with re Module\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
"""\r
Topic 7 - File 4: Enterprise Indian ID, GST & Contact Validation Engine\r
Demonstrates:\r
  1. Compiling robust regex patterns with re.VERBOSE and re.IGNORECASE\r
  2. PAN Card, GSTIN, PIN Code, Mobile & Email validators\r
  3. Production input sanitization and verification reporting\r
"""\r
\r
import re\r
from typing import Dict, Tuple\r
\r
class EnterprisePatternValidator:\r
    """Pre-compiled regex validation suite for Indian business and student portals."""\r
\r
    # 1. Indian PAN: 5 Letters + 4 Digits + 1 Letter\r
    PAN_PATTERN = re.compile(\r
        r"""\r
        ^                   # Start of string\r
        [A-Z]{5}            # 5 Alphabetic uppercase characters\r
        [0-9]{4}            # 4 Numeric digits\r
        [A-Z]               # 1 Alphabetic checksum character\r
        $                   # End of string\r
        """,\r
        re.VERBOSE | re.IGNORECASE\r
    )\r
\r
    # 2. Indian 15-Digit GSTIN: State Code (2 digits) + PAN (10 chars) + Entity (1) + 'Z' + Checksum (1)\r
    GSTIN_PATTERN = re.compile(\r
        r"""\r
        ^                   # Start of string\r
        [0-9]{2}            # 2 Digit State Code (e.g. 19 for West Bengal)\r
        [A-Z]{5}[0-9]{4}[A-Z] # 10 Character PAN\r
        [1-9A-Z]{1}         # Entity number (1-9 or A-Z)\r
        Z                   # Default 'Z' character\r
        [0-9A-Z]{1}         # 1 Alphanumeric checksum\r
        $                   # End of string\r
        """,\r
        re.VERBOSE | re.IGNORECASE\r
    )\r
\r
    # 3. Indian Postal PIN Code: 6 Digits, never starting with '0'\r
    PIN_PATTERN = re.compile(r"^[1-9][0-9]{5}$")\r
\r
    # 4. Indian Mobile: 10 Digits starting with 6,7,8,9, optional +91 or 0 prefix\r
    MOBILE_PATTERN = re.compile(\r
        r"""\r
        ^                   # Start of string\r
        (?:                 # Non-capturing group for prefix\r
            \\+91[\\-\\s]?     # +91 with optional hyphen or space\r
            |\r
            0               # Or leading 0\r
        )?                  # Prefix is optional\r
        [6-9][0-9]{9}       # 10 Digits starting with 6-9\r
        $                   # End of string\r
        """,\r
        re.VERBOSE\r
    )\r
\r
    # 5. Email Validator (RFC compliant basic regex)\r
    EMAIL_PATTERN = re.compile(\r
        r"""\r
        ^\r
        [a-zA-Z0-9_.+-]+    # Username characters\r
        @                   # At-rate separator\r
        [a-zA-Z0-9-]+       # Domain name\r
        (?:\\.[a-zA-Z0-9-]+)+# One or more domain extensions (.co.in, .com)\r
        $\r
        """,\r
        re.VERBOSE\r
    )\r
\r
    @classmethod\r
    def validate_student_record(cls, record: Dict[str, str]) -> Dict[str, Tuple[bool, str]]:\r
        results = {}\r
        \r
        # PAN\r
        pan = record.get("pan", "").strip()\r
        results["pan"] = (bool(cls.PAN_PATTERN.match(pan)), pan)\r
\r
        # GSTIN\r
        gstin = record.get("gstin", "").strip()\r
        results["gstin"] = (bool(cls.GSTIN_PATTERN.match(gstin)), gstin)\r
\r
        # PIN\r
        pin = record.get("pin", "").strip()\r
        results["pin"] = (bool(cls.PIN_PATTERN.match(pin)), pin)\r
\r
        # Mobile\r
        mobile = record.get("mobile", "").strip()\r
        results["mobile"] = (bool(cls.MOBILE_PATTERN.match(mobile)), mobile)\r
\r
        # Email\r
        email = record.get("email", "").strip()\r
        results["email"] = (bool(cls.EMAIL_PATTERN.match(email)), email)\r
\r
        return results\r
\r
\r
def run_validator_demo():\r
    print("=" * 75)\r
    print("CODER & ACCOTAX - ENTERPRISE REGEX VALIDATION AUDIT")\r
    print("=" * 75)\r
\r
    sample_applicant = {\r
        "pan": "ABCDE1234F",\r
        "gstin": "19ABCDE1234F1Z5",\r
        "pin": "700120",\r
        "mobile": "+91 7003756860",\r
        "email": "susmita.student@codernaccotax.co.in"\r
    }\r
\r
    audit_results = EnterprisePatternValidator.validate_student_record(sample_applicant)\r
\r
    for field, (valid, val) in audit_results.items():\r
        status = "[PASSED VALIDATION]" if valid else "[FAILED VALIDATION]"\r
        print(f"Field: {field.upper():<8} | Value: '{val:<35}' -> {status}")\r
\r
\r
if __name__ == "__main__":\r
    run_validator_demo()\r
`,T=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
            PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_007: STRING PROCESSING\r
        TOPIC 7: BASIC REGULAR EXPRESSIONS CONCEPT WITH PYTHON re MODULE\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. THE BACKSLASH PLAGUE & RAW STRINGS r"..."\r
--------------------------------------------------------------------------------\r
  • Why use r"..." for all regex?\r
    In normal strings, '\\' is an escape character ('\\n' = newline, '\\b' = backspace).\r
    In regex, '\\b' means word boundary and '\\d' means digit.\r
    Using raw strings (r"...") tells Python to preserve backslashes literally so\r
    the regex engine receives '\\b' instead of ASCII backspace '\\x08'!\r
\r
--------------------------------------------------------------------------------\r
2. CORE METACHARACTERS CHEAT SHEET\r
--------------------------------------------------------------------------------\r
  Symbol   Meaning                         Example & Match\r
  ------------------------------------------------------------------------------\r
  .        Any character except newline    'c.t' matches 'cat', 'cut', 'c#t'\r
  ^        Start of string (or line in re.M)'^Python' matches if string starts with Python\r
  $        End of string (or line in re.M)  '2026$' matches if string ends with 2026\r
  |        Alternation (OR)                'cat|dog' matches 'cat' or 'dog'\r
  []       Character set                   '[aeiou]' matches any lowercase vowel\r
  [^...]   Negated character set           '[^0-9]' matches any non-digit character\r
  \\b       Word boundary                   r'\\bcat\\b' matches 'cat' in 'the cat' (not 'catch')\r
  \\B       Non-word boundary               r'\\Bcat\\B' matches inside 'scatter'\r
\r
--------------------------------------------------------------------------------\r
3. SHORTHAND CHARACTER CLASSES\r
--------------------------------------------------------------------------------\r
  Class    Matches                         Equivalent Character Set\r
  ------------------------------------------------------------------------------\r
  \\d       Any decimal digit               [0-9]\r
  \\D       Any non-digit character         [^0-9]\r
  \\w       Any alphanumeric or underscore  [a-zA-Z0-9_]\r
  \\W       Any non-word character          [^a-zA-Z0-9_]\r
  \\s       Any whitespace character        [ \\t\\n\\r\\f\\v]\r
  \\S       Any non-whitespace character    [^ \\t\\n\\r\\f\\v]\r
\r
--------------------------------------------------------------------------------\r
4. QUANTIFIERS: GREEDY VS LAZY (NON-GREEDY)\r
--------------------------------------------------------------------------------\r
  Quantifier   Meaning                     Greedy Mode      Lazy Mode (?)\r
  ------------------------------------------------------------------------------\r
  *            0 or more times             .* (Longest)     .*? (Shortest)\r
  +            1 or more times             .+ (Longest)     .+? (Shortest)\r
  ?            0 or 1 time (Optional)      a?               a??\r
  {n}          Exactly n times             \\d{6}            -\r
  {m,n}        Between m and n times       \\d{2,4}          \\d{2,4}?\r
\r
  Classic HTML Trap:\r
    Input   : "<p>First</p><p>Second</p>"\r
    Greedy  : r"<p>.*</p>"   -> Captures "<p>First</p><p>Second</p>" (Swallowed all!)\r
    Lazy    : r"<p>.*?</p>"  -> Captures ["<p>First</p>", "<p>Second</p>"] (Correct!)\r
\r
--------------------------------------------------------------------------------\r
5. REGEX COMPILATION & FLAGS\r
--------------------------------------------------------------------------------\r
  • Pattern Pre-Compilation:\r
      pattern = re.compile(r"^[1-9]\\d{5}$")\r
      is_valid = bool(pattern.match(pincode))\r
\r
  • Core Compilation Flags:\r
      re.IGNORECASE (re.I) : Case-insensitive matching.\r
      re.MULTILINE  (re.M) : ^ and $ match start and end of every line.\r
      re.DOTALL     (re.S) : Enables . (dot) to match newlines (\\n).\r
      re.VERBOSE    (re.X) : Allows multi-line formatted regex with comments.\r
      Combining Flags      : re.compile(pattern, re.I | re.M | re.X)\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 7: BASIC REGULAR EXPRESSIONS (re)\r
================================================================================\r
`,C=[{question:"What is a Regular Expression (Regex) in Python and which built-in module provides it?",shortAnswer:"A regular expression is a formalized pattern used to match, search, and validate character combinations in strings; provided by Python's standard 're' module.",explanation:"Python includes the 're' module in its standard library, implemented in native C, supporting Perl-compatible regular expressions (PCRE-style).",hint:"Use the built-in 're' module.",level:"basic",codeExample:`import re
match = re.search(r'\\d+', 'User ID: 942')
print(match.group())  # '942'`},{question:"Why should you ALWAYS use raw strings (r'...') when writing regular expressions in Python?",shortAnswer:"To prevent Python's normal string escape mechanism from intercepting backslashes (e.g. \\b being interpreted as ASCII backspace rather than a regex word boundary).",explanation:"Without raw strings, you would need to write '\\\\d' instead of r'\\d' and '\\\\\\\\' instead of r'\\\\' to pass literal backslashes to the regex engine.",hint:"Raw strings preserve backslashes literally for the regex engine.",level:"basic",codeExample:`import re
# Good (Raw string):
pattern = r'\\bword\\b'
# Bad (Normal string requires double escapes):
pattern_bad = '\\\\bword\\\\b'`},{question:"What is the difference between a Greedy quantifier and a Lazy (Non-Greedy) quantifier?",shortAnswer:"A greedy quantifier (like .*) matches the longest possible string, whereas a lazy quantifier (like .*?) matches the shortest possible string.",explanation:"Appending a '?' to any quantifier (*?, +?, ??, {m,n}?) makes it lazy, stopping at the first valid delimiter rather than consuming to the end of the text.",hint:"Append '?' to make a quantifier lazy/non-greedy.",level:"moderate",codeExample:`import re
html = '<p>One</p><p>Two</p>'
print(re.findall(r'<p>.*</p>', html))   # ['<p>One</p><p>Two</p>'] (Greedy)
print(re.findall(r'<p>.*?</p>', html))  # ['<p>One</p>', '<p>Two</p>'] (Lazy)`},{question:"What do the shorthand character classes \\d, \\w, and \\s match?",shortAnswer:"\\d matches any digit [0-9], \\w matches alphanumeric/underscore [a-zA-Z0-9_], and \\s matches any whitespace [ \\t\\n\\r\\f\\v].",explanation:"Their uppercase counterparts (\\D, \\W, \\S) match the exact inverse (non-digits, non-words, non-whitespace).",hint:"\\d = digits, \\w = word characters, \\s = whitespace.",level:"basic",codeExample:`import re
text = 'Invoice #9402 for Susmita'
print(re.findall(r'\\d+', text))  # ['9402']
print(re.findall(r'\\w+', text))  # ['Invoice', '9402', 'for', 'Susmita']`},{question:"What does the word boundary metacharacter \\b do?",shortAnswer:"It matches the zero-width boundary between a word character (\\w) and a non-word character (\\W) or string edge.",explanation:"\\b ensures matching whole words only, preventing 'cat' from matching inside 'catch', 'catalog', or 'scatter'.",hint:"\\b matches word edges without consuming characters.",level:"moderate",codeExample:`import re
text = 'The cat scattered the catalog.'
print(re.findall(r'\\bcat\\b', text))  # ['cat'] (Only the isolated word)`},{question:"What is the purpose of re.compile() and when should it be used?",shortAnswer:"re.compile() pre-compiles a regex string into a reusable Pattern object, eliminating recompilation overhead in repeated loops.",explanation:"When matching thousands of records, pre-compiling the pattern once with re.compile() is significantly faster and cleaner than calling re.search() repeatedly.",hint:"Pre-compiles the pattern into bytecode for reuse.",level:"moderate",codeExample:`import re
pin_validator = re.compile(r'^[1-9]\\d{5}$')
for pin in ['700120', '700025']:
    if pin_validator.match(pin):
        print(pin, 'is valid')`},{question:"What does the re.IGNORECASE (re.I) flag do?",shortAnswer:"It makes pattern matching case-insensitive (e.g. 'python' matches 'Python', 'PYTHON', and 'PyThOn').",explanation:"Pass flags=re.IGNORECASE or re.I to re.compile(), re.search(), or re.findall().",hint:"Enables case-insensitive matching.",level:"basic",codeExample:`import re
print(re.findall(r'python', 'Python and PYTHON', re.IGNORECASE))
# ['Python', 'PYTHON']`},{question:"What does the re.MULTILINE (re.M) flag do to anchors ^ and $?",shortAnswer:"It causes '^' to match the start of every line and '$' to match the end of every line, rather than just the start and end of the entire string.",explanation:"By default, ^ and $ only match the extreme beginning and end of the full string. With re.M, each line in a multi-line string is treated as a separate boundary.",hint:"re.M matches ^ and $ at every line break.",level:"moderate",codeExample:`import re
log = '2026-08-01: Python\\n2026-08-02: SQL'
print(re.findall(r'^\\d{4}-\\d{2}-\\d{2}', log, re.MULTILINE))
# ['2026-08-01', '2026-08-02']`},{question:"What does the re.DOTALL (re.S) flag do to the dot '.' metacharacter?",shortAnswer:"It allows the dot '.' to match ANY character including newline '\\n'.",explanation:"By default, '.' matches every character except newlines. re.DOTALL (or re.S for 'single line') allows '.' to span across multiple lines.",hint:"re.DOTALL makes '.' match newline characters.",level:"moderate",codeExample:`import re
text = '<!-- BEGIN -->\\nContent inside\\n<!-- END -->'
print(re.findall(r'<!-- BEGIN -->.*<!-- END -->', text, re.DOTALL))
# ['<!-- BEGIN -->\\nContent inside\\n<!-- END -->']`},{question:"What does the re.VERBOSE (re.X) flag do?",shortAnswer:"It allows writing readable, multi-line regular expressions with whitespace formatting and '#' comments.",explanation:"Whitespace is ignored (unless escaped or in character classes), allowing complex production regex patterns to be clearly documented.",hint:"Allows multi-line regex with comments.",level:"moderate",codeExample:`import re
phone_regex = re.compile(r'''
    ^\\+91          # Country code
    \\s?            # Optional space
    [6-9]\\d{9}$    # 10 digit Indian mobile
''', re.VERBOSE)`},{question:"How do you combine multiple regex flags (e.g. IGNORECASE, MULTILINE, and VERBOSE)?",shortAnswer:"Use the bitwise OR operator '|': flags = re.I | re.M | re.X",explanation:"Regex flags in Python are integer bitmasks, so combining them with '|' enables all specified options simultaneously.",hint:"Combine with bitwise OR '|'.",level:"basic",codeExample:`import re
pattern = re.compile(r'^python', re.I | re.M)`},{question:"What is the difference between [0-9] and [^0-9]?",shortAnswer:"[0-9] matches any single digit; [^0-9] is a negated character class that matches any character that is NOT a digit.",explanation:"When '^' is placed as the first character inside square brackets, it inverts the character set.",hint:"'^' inside brackets negates the set.",level:"basic",codeExample:`import re
print(re.findall(r'[^0-9]+', 'Room 101, Batch 2026'))
# ['Room ', ', Batch ']`},{question:"What do the quantifiers '*', '+', and '?' mean?",shortAnswer:"'*' means 0 or more occurrences; '+' means 1 or more occurrences; '?' means 0 or 1 occurrence (optional).",explanation:"These are standard repetition quantifiers controlling how many times the preceding token can appear.",hint:"* = 0+, + = 1+, ? = 0 or 1.",level:"basic",codeExample:`import re
# 'https?' matches both 'http' and 'https'
print(re.findall(r'https?://', 'http://a.com https://b.com'))`},{question:"How do you match a specific number of repetitions, such as exactly 6 digits?",shortAnswer:"Use curly braces: \\d{6}",explanation:"{n} specifies exactly n times; {m,n} specifies between m and n times; {m,} specifies at least m times.",hint:"Use \\d{6} or \\d{2,4}.",level:"basic",codeExample:`import re
print(re.findall(r'\\b\\d{6}\\b', 'PIN: 700120, Phone: 7003756860'))  # ['700120']`},{question:"What is the metacharacter '|' used for in regular expressions?",shortAnswer:"Alternation (OR operator) to match either the pattern on the left or the pattern on the right.",explanation:"For example, r'cat|dog' matches either 'cat' or 'dog'. Parentheses can limit the scope: r'gr(a|e)y'.",hint:"| acts as an OR operator.",level:"basic",codeExample:`import re
print(re.findall(r'Python|React|SQL', 'I learn Python and SQL.'))
# ['Python', 'SQL']`},{question:"How do you match a literal dot '.' or question mark '?' in regex?",shortAnswer:"Escape it with a backslash: r'\\.' or r'\\?' (or put it in brackets: r'[.]').",explanation:"Because '.' and '?' are special metacharacters, escaping them with '\\' instructs the regex engine to treat them as literal characters.",hint:"Escape with backslash: \\. or \\?",level:"basic",codeExample:`import re
print(re.findall(r'\\d+\\.\\d+', 'Price: 450.75'))  # ['450.75']`},{question:"What regex pattern validates a standard Indian PAN card number?",shortAnswer:"r'^[A-Z]{5}[0-9]{4}[A-Z]$'",explanation:"An Indian PAN consists of exactly 5 uppercase letters, followed by 4 numeric digits, followed by 1 uppercase letter.",hint:"5 letters + 4 digits + 1 letter.",level:"moderate",codeExample:`import re
pan_regex = re.compile(r'^[A-Z]{5}\\d{4}[A-Z]$')
print(bool(pan_regex.match('ABCDE1234F')))  # True
print(bool(pan_regex.match('12345ABCDE')))  # False`},{question:"What regex pattern validates a 6-digit Indian PIN code (cannot start with 0)?",shortAnswer:"r'^[1-9]\\d{5}$'",explanation:"The first digit must be between 1 and 9 (non-zero), followed by exactly 5 digits (total 6 digits).",hint:"^[1-9]\\d{5}$",level:"basic",codeExample:`import re
pin_regex = re.compile(r'^[1-9]\\d{5}$')
print(bool(pin_regex.match('700120')))  # True (Barrackpore)
print(bool(pin_regex.match('001203')))  # False`},{question:"What does \\B match in regular expressions?",shortAnswer:"A non-word boundary (any position that is NOT a word boundary).",explanation:"r'\\Bcat\\B' will match 'cat' only if it is surrounded by word characters on both sides (e.g. inside 'scattered' or 'location').",hint:"\\B matches within a word (not at the edges).",level:"moderate",codeExample:`import re
print(re.findall(r'\\Bcat\\B', 'scattered catalog cat'))
# ['cat'] (Only from 'scattered')`},{question:"How do you validate an Indian mobile number starting with 6, 7, 8, or 9?",shortAnswer:"r'^[6-9]\\d{9}$' or r'^(?:\\+91|0)?[6-9]\\d{9}$'",explanation:"Indian mobile numbers are 10 digits starting with 6-9, optionally prefixed with '+91' or '0'.",hint:"[6-9]\\d{9}",level:"basic",codeExample:`import re
mob_regex = re.compile(r'^(?:\\+91|0)?[6-9]\\d{9}$')
print(bool(mob_regex.match('+917003756860')))  # True`},{question:"What is the difference between [a-z] and [a-zA-Z]?",shortAnswer:"[a-z] matches lowercase English letters; [a-zA-Z] matches both lowercase and uppercase English letters.",explanation:"Multiple ranges can be combined inside character brackets without separators.",hint:"[a-zA-Z] matches all English alphabetic letters.",level:"basic",codeExample:`import re
print(re.findall(r'[a-zA-Z]+', 'Python 3.13 Pro'))
# ['Python', 'Pro']`},{question:"What is the time complexity of compiling and executing regular expressions?",shortAnswer:"Compilation is O(M) where M is pattern length; matching is typically O(N) where N is string length, though complex nested quantifiers can cause catastrophic backtracking.",explanation:"CPython uses a backtracking NFA engine. Clean linear patterns execute in O(N), but ambiguous nested patterns like (a+)+ can degrade exponentially.",hint:"O(N) for linear patterns; avoid catastrophic backtracking.",level:"complex",codeExample:"# Linear pattern matching runs in microsecond-scale C loops"},{question:"What does re.escape(string) do?",shortAnswer:"It automatically escapes all special metacharacters in a string so it can be used as a literal regex pattern.",explanation:"re.escape() is ideal when taking arbitrary user input (which may contain dots, brackets, or pluses) and inserting it safely into a regex.",hint:"Escapes metacharacters for safe literal matching.",level:"moderate",codeExample:`import re
query = 'Coder & AccoTax (Barrackpore) [2026]'
safe_pattern = re.escape(query)
print(safe_pattern)
# 'Coder\\ \\&\\ AccoTax\\ \\(Barrackpore\\)\\ \\[2026\\]'`},{question:"What is a non-capturing group in regular expressions?",shortAnswer:"A group written as (?:...) that groups tokens together for quantifiers without saving the match for extraction.",explanation:"Non-capturing groups improve performance and prevent re.findall() from returning tuples of captured subgroups.",hint:"Use (?:...) for non-capturing groups.",level:"moderate",codeExample:`import re
# (?:https?|ftp) groups without capturing:
print(re.findall(r'(?:https?|ftp)://\\w+\\.\\w+', 'https://google.com ftp://server.org'))
# ['https://google.com', 'ftp://server.org']`},{question:"How do you extract all numbers (both integers and decimals) from a text with regex?",shortAnswer:"r'\\d+(?:\\.\\d+)?'",explanation:"This matches one or more digits, followed by an optional decimal point and decimal digits.",hint:"Use \\d+(?:\\.\\d+)?",level:"basic",codeExample:`import re
text = 'Items: 5 units at INR 450.75 each, total 2253.75'
print(re.findall(r'\\d+(?:\\.\\d+)?', text))
# ['5', '450.75', '2253.75']`}];function z(){const h=s.useRef([]),[o,p]=s.useState("backslash"),[g,b]=s.useState("Susmita Mukherjee (Barrackpore): PIN 700120, PAN ABCDE1234F, Mob: 7003756860."),[d,f]=s.useState("\\b[A-Z]{5}\\d{4}[A-Z]\\b"),[x,u]=s.useState(!0),[m,N]=s.useState(!1);s.useEffect(()=>{const t=new IntersectionObserver(r=>{r.forEach(i=>{i.isIntersecting&&i.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return h.current.forEach(r=>{r&&t.observe(r)}),()=>t.disconnect()},[]);const n=t=>{t&&!h.current.includes(t)&&h.current.push(t)},a=(()=>{try{let t="g";x&&(t+="i"),m&&(t+="m");const r=new RegExp(d,t),i=[];let l;for(;(l=r.exec(g))!==null;)i.push({text:l[0],index:l.index,length:l[0].length}),l.index===r.lastIndex&&r.lastIndex++;return{valid:!0,matches:i,count:i.length,error:null}}catch(t){return{valid:!1,matches:[],count:0,error:t.message}}})(),y=[{label:"PAN Card",pattern:"\\b[A-Z]{5}\\d{4}[A-Z]\\b",desc:"5 Letters + 4 Digits + 1 Letter"},{label:"PIN Code",pattern:"\\b[1-9]\\d{5}\\b",desc:"6 Digits (Non-zero start)"},{label:"10-Digit Mobile",pattern:"\\b[6-9]\\d{9}\\b",desc:"Indian Mobile Numbers"},{label:"All Digits",pattern:"\\d+",desc:"Numeric Groups"},{label:"Word Tokens",pattern:"\\b[A-Za-z_]+\\b",desc:"Alphabetic Words"},{label:"Greedy HTML",pattern:"<p>.*</p>",desc:"Swallows all tags"},{label:"Lazy HTML",pattern:"<p>.*?</p>",desc:"Isolates each tag"}];return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-rose-500/30 selection:text-rose-200",children:[e.jsx("style",{children:`
        .section-hidden {
          transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .section-visible {
          transform: translateY(0);
        }
        @keyframes pulseGlowRose {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(244, 63, 94, 0.4)); }
          50% { filter: drop-shadow(0 0 10px rgba(244, 63, 94, 0.8)); }
        }
        .animate-glow-rose {
          animation: pulseGlowRose 3s infinite ease-in-out;
        }
      `}),e.jsxs("header",{ref:n,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-rose-950/80 text-rose-300 px-3 py-1 rounded-full border border-rose-800/80 shadow-sm shadow-rose-950/50",children:"Segment 2 • Module 002_007"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-pink-950/80 text-pink-300 px-3 py-1 rounded-full border border-pink-800/80 shadow-sm shadow-pink-950/50",children:"Topic 7"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"String Processing & Pattern Handling"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Basic Regular Expressions Concept with ",e.jsx("code",{className:"text-rose-400 font-mono",children:"re"})," Module"]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master Python's pattern matching engine: raw strings (",e.jsx("code",{className:"text-rose-300 font-mono",children:'r"..."'}),"), the Backslash Plague, metacharacters, character classes (",e.jsx("code",{className:"text-purple-400 font-mono",children:"\\d"}),", ",e.jsx("code",{className:"text-purple-400 font-mono",children:"\\w"}),", ",e.jsx("code",{className:"text-purple-400 font-mono",children:"\\b"}),"), greedy vs lazy quantifiers (",e.jsx("code",{className:"text-cyan-400 font-mono",children:".*"})," vs ",e.jsx("code",{className:"text-cyan-400 font-mono",children:".*?"}),"), and pre-compilation with ",e.jsx("code",{className:"text-amber-400 font-mono",children:"re.compile()"}),"."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:'🛡️ Raw Strings (r"...") & Backslash Plague'}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ Greedy vs Lazy / Non-Greedy (.*?)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🎯 Pattern Pre-Compilation (re.compile)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🚩 Core Flags (re.I, re.M, re.S, re.X)"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧩"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Regex Foundation & The Backslash Plague"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["Regular expressions provide a domain-specific mini-language inside Python for complex text validation, token extraction, and pattern manipulation through the standard ",e.jsx("code",{className:"text-rose-400 font-mono",children:"re"})," module."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-rose-950/40 border border-rose-800/60 shadow-lg shadow-rose-950/30 transition-all duration-300 hover:scale-[1.01] hover:border-rose-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"🛡️"})," Raw String Invariant"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Always use ",e.jsx("code",{className:"text-rose-300 font-mono",children:'r"..."'})," so Python passes backslashes directly to the regex engine without converting ",e.jsx("code",{className:"text-rose-300 font-mono",children:"\\b"})," into an ASCII backspace."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg shadow-purple-950/30 transition-all duration-300 hover:scale-[1.01] hover:border-purple-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"📦"})," Pre-Compilation"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Calling ",e.jsx("code",{className:"text-purple-300 font-mono",children:"re.compile()"})," converts pattern strings into compiled bytecode objects for instant microsecond reusability in loops."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg shadow-cyan-950/30 transition-all duration-300 hover:scale-[1.01] hover:border-cyan-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"🚩"})," Compilation Flags"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Control behavior with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"re.I"})," (case-insensitive), ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"re.M"})," (multiline anchors), and ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"re.X"})," (verbose readable regex)."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-rose-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-2",children:"Why Standard Python Strings Break Regular Expressions"}),e.jsxs("p",{className:"text-sm sm:text-base text-slate-300 leading-relaxed",children:["In standard Python strings, ",e.jsx("code",{className:"text-rose-400 font-mono",children:"'\\b'"})," is interpreted as an ASCII Backspace control code (",e.jsx("code",{className:"text-slate-400 font-mono",children:"\\x08"}),"). When passed to regex without ",e.jsx("code",{className:"text-rose-300 font-mono",children:'r"..."'}),", the regex engine searches for literal backspaces instead of word boundaries!"]}),e.jsxs("p",{className:"text-sm sm:text-base text-emerald-300 font-semibold mt-1",children:["✓ Rule: Always prefix regex pattern strings with ",e.jsx("code",{className:"text-emerald-400 font-mono",children:'r"..."'})," (e.g. ",e.jsx("code",{className:"text-emerald-300 font-mono",children:'r"\\bcat\\b"'}),")."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"🔍"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Regex Pipelines & Quantifiers"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>p("backslash"),className:c("px-3 py-1.5 rounded-lg transition-all",o==="backslash"?"bg-rose-900/50 text-rose-300 border border-rose-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"The Backslash Plague"}),e.jsx("button",{onClick:()=>p("greedy"),className:c("px-3 py-1.5 rounded-lg transition-all",o==="greedy"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Greedy vs Lazy (.*?)"}),e.jsx("button",{onClick:()=>p("classes"),className:c("px-3 py-1.5 rounded-lg transition-all",o==="classes"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Character Classes Matrix"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining raw string processing, greedy backtracking engines, and character class coverage:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:o==="backslash"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#f43f5e",fontSize:"14",fontWeight:"bold",children:'WHY RAW STRINGS r"..." ARE MANDATORY FOR REGEX'}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"250",rx:"8",fill:"#4c0519",stroke:"#f43f5e",strokeWidth:"1.5"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"13",fontWeight:"bold",children:'WITHOUT RAW STRINGS ("\\bword\\b")'}),e.jsxs("text",{x:"20",y:"60",fill:"#f8fafc",fontSize:"12",children:['1. Python Lexer parses "\\b" as ASCII ',e.jsx("tspan",{fill:"#fca5a5",fontWeight:"bold",children:"0x08 (Backspace)"}),"."]}),e.jsx("text",{x:"20",y:"85",fill:"#f8fafc",fontSize:"12",children:"2. Regex Engine receives literal backspace characters."}),e.jsx("text",{x:"20",y:"110",fill:"#fca5a5",fontSize:"12",children:"3. Fails to match word boundaries in text!"}),e.jsx("rect",{x:"20",y:"135",width:"350",height:"90",rx:"6",fill:"#881337",stroke:"#e11d48"}),e.jsx("text",{x:"35",y:"165",fill:"#fecdd3",fontSize:"12",fontWeight:"bold",children:"Double Escape Nightmare:"}),e.jsx("text",{x:"35",y:"190",fill:"#ffe4e6",fontSize:"12",children:"Requires '\\\\\\\\bword\\\\\\\\b' for regex"}),e.jsx("text",{x:"35",y:"210",fill:"#fca5a5",fontSize:"11",children:"Extremely error-prone and unreadable!"})]}),e.jsxs("g",{transform:"translate(450, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"250",rx:"8",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:'WITH RAW STRINGS (r"\\bword\\b")'}),e.jsxs("text",{x:"20",y:"60",fill:"#f8fafc",fontSize:"12",children:["1. Python Lexer treats '\\b' as literal ",e.jsx("tspan",{fill:"#34d399",fontWeight:"bold",children:"'\\' and 'b'"}),"."]}),e.jsx("text",{x:"20",y:"85",fill:"#f8fafc",fontSize:"12",children:"2. Regex Engine receives pristine '\\b' escape token."}),e.jsx("text",{x:"20",y:"110",fill:"#34d399",fontSize:"12",children:"3. Accurately identifies word boundaries!"}),e.jsx("rect",{x:"20",y:"135",width:"350",height:"90",rx:"6",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"35",y:"165",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"Clean Pythonic Code:"}),e.jsx("text",{x:"35",y:"190",fill:"#ecfdf5",fontSize:"12",children:'r"\\b[A-Za-z_]\\w*\\b"'}),e.jsx("text",{x:"35",y:"210",fill:"#34d399",fontSize:"11",fontWeight:"bold",children:"100% clean, native regex syntax!"})]})]}):o==="greedy"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"GREEDY (.*) VS LAZY / NON-GREEDY (.*?) MATCHING ENGINE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"810",height:"40",rx:"6",fill:"#0f172a",stroke:"#334155"}),e.jsx("text",{x:"20",y:"25",fill:"#cbd5e1",fontSize:"13",children:"Target: <p>First Paragraph</p><p>Second Paragraph</p>"})]}),e.jsxs("g",{transform:"translate(30, 105)",children:[e.jsx("rect",{x:"0",y:"0",width:"810",height:"90",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"28",fill:"#fda4af",fontSize:"13",fontWeight:"bold",children:'A. GREEDY PATTERN: r"<p>.*</p>"'}),e.jsxs("text",{x:"20",y:"52",fill:"#f8fafc",fontSize:"12",children:["Consumes characters all the way to the ",e.jsx("tspan",{fill:"#fca5a5",fontWeight:"bold",children:"LAST </p>"})," in the entire document."]}),e.jsx("text",{x:"20",y:"75",fill:"#fecdd3",fontSize:"12",fontWeight:"bold",children:'→ Single Match: "<p>First Paragraph</p><p>Second Paragraph</p>" (Swallowed all!)'})]}),e.jsxs("g",{transform:"translate(30, 210)",children:[e.jsx("rect",{x:"0",y:"0",width:"810",height:"90",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"28",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:'B. LAZY PATTERN: r"<p>.*?</p>"'}),e.jsxs("text",{x:"20",y:"52",fill:"#f8fafc",fontSize:"12",children:["Stops at the ",e.jsx("tspan",{fill:"#34d399",fontWeight:"bold",children:"VERY FIRST </p>"})," encountered."]}),e.jsx("text",{x:"20",y:"75",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:'→ Two Distinct Matches: ["<p>First Paragraph</p>", "<p>Second Paragraph</p>"]'})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"PREDEFINED SHORTHAND CHARACTER CLASSES MATRIX"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"75",rx:"8",fill:"#1e1b4b",stroke:"#6366f1"}),e.jsx("text",{x:"20",y:"25",fill:"#c7d2fe",fontSize:"13",fontWeight:"bold",children:"\\d (Digits [0-9]) vs \\D (Non-Digits)"}),e.jsxs("text",{x:"20",y:"52",fill:"#a7f3d0",fontSize:"13",children:['r"\\d',6,'" matches "700120" (Barrackpore PIN)']}),e.jsx("rect",{x:"420",y:"0",width:"390",height:"75",rx:"8",fill:"#3b0764",stroke:"#a855f7"}),e.jsx("text",{x:"440",y:"25",fill:"#e9d5ff",fontSize:"13",fontWeight:"bold",children:"\\w (Alphanumeric + _) vs \\W (Symbols)"}),e.jsx("text",{x:"440",y:"52",fill:"#a7f3d0",fontSize:"13",children:'r"\\w+" matches "student_name_2026"'}),e.jsx("rect",{x:"0",y:"90",width:"390",height:"75",rx:"8",fill:"#0c4a6e",stroke:"#0ea5e9"}),e.jsx("text",{x:"20",y:"115",fill:"#bae6fd",fontSize:"13",fontWeight:"bold",children:"\\s (Whitespace) vs \\S (Non-Whitespace)"}),e.jsx("text",{x:"20",y:"142",fill:"#a7f3d0",fontSize:"13",children:"Matches spaces, tabs, newlines [\\t\\n\\r]"}),e.jsx("rect",{x:"420",y:"90",width:"390",height:"75",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"440",y:"115",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"\\b (Word Boundary) vs \\B (Inside Word)"}),e.jsx("text",{x:"440",y:"142",fill:"#a7f3d0",fontSize:"13",children:'r"\\bcat\\b" isolates "cat" from "catalog"'}),e.jsx("rect",{x:"0",y:"180",width:"810",height:"65",rx:"8",fill:"#090d16",stroke:"#334155"}),e.jsx("text",{x:"20",y:"205",fill:"#f43f5e",fontSize:"13",fontWeight:"bold",children:"Negated Character Sets: [^0-9] or [^aeiou]"}),e.jsx("text",{x:"20",y:"228",fill:"#cbd5e1",fontSize:"13",children:"Matches ANY character NOT present in the bracketed set"})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Regex Pattern Tester & Sandbox"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Test regular expression patterns live against sample strings, toggle flags, or choose from production presets:"}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6",children:y.map(t=>e.jsxs("button",{onClick:()=>f(t.pattern),className:c("p-2.5 rounded-xl text-left border transition-all text-xs",d===t.pattern?"bg-rose-950/90 border-rose-500 text-rose-200 shadow-md shadow-rose-950":"bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"),children:[e.jsx("div",{className:"font-mono font-bold text-rose-300",children:t.label}),e.jsx("div",{className:"text-[11px] text-slate-400 line-clamp-1",children:t.desc})]},t.label))}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",children:[e.jsxs("div",{className:"space-y-4 bg-slate-950 p-5 rounded-xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1",children:"Target Sample Text"}),e.jsx("textarea",{value:g,onChange:t=>b(t.target.value),rows:3,className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-slate-100 font-mono text-xs focus:outline-none focus:border-rose-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1",children:'Regex Pattern String (Raw: r"...")'}),e.jsx("input",{type:"text",value:d,onChange:t=>f(t.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-rose-300 font-mono text-sm focus:outline-none focus:border-rose-500"})]}),e.jsxs("div",{className:"flex items-center gap-4 pt-2 border-t border-slate-800 text-xs font-mono text-slate-300",children:[e.jsxs("label",{className:"flex items-center gap-1.5 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:x,onChange:t=>u(t.target.checked),className:"accent-rose-500"}),"re.IGNORECASE (re.I)"]}),e.jsxs("label",{className:"flex items-center gap-1.5 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:m,onChange:t=>N(t.target.checked),className:"accent-rose-500"}),"re.MULTILINE (re.M)"]})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400",children:"Compiled Python Snippet"}),e.jsx("span",{className:c("text-xs font-mono font-bold px-2 py-0.5 rounded",a.valid?"bg-emerald-900 text-emerald-300":"bg-rose-900 text-rose-300"),children:a.valid?`${a.count} Matches Found`:"Invalid Pattern"})]}),e.jsx("pre",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800 text-rose-300 font-mono text-xs overflow-x-auto whitespace-pre-wrap",children:`import re
pattern = re.compile(r"${d}"${x?", re.IGNORECASE":""}${m?", re.MULTILINE":""})
matches = pattern.findall(text)`})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block",children:"Captured Match Tokens"}),a.valid?a.matches.length>0?e.jsx("div",{className:"flex flex-wrap gap-2 max-h-28 overflow-y-auto",children:a.matches.map((t,r)=>e.jsxs("span",{className:"bg-rose-950/80 border border-rose-500/80 text-rose-200 font-mono text-xs px-2.5 py-1 rounded-lg",children:["#",r+1,': "',t.text,'" ',e.jsxs("span",{className:"text-slate-400 text-[10px]",children:["(i=",t.index,")"]})]},r))}):e.jsx("div",{className:"text-xs font-mono text-slate-500 italic p-2",children:"No matches found for the given pattern in sample text."}):e.jsxs("div",{className:"text-xs font-mono text-rose-400 p-2",children:["Regex Syntax Error: ",a.error]})]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚙️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Regular Expression Cheat Sheet"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Metacharacter"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Name"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Meaning"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Example Pattern"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Match Output"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-rose-300 font-bold",children:"."}),e.jsx("td",{className:"py-3 px-4",children:"Wildcard"}),e.jsx("td",{className:"py-3 px-4",children:"Any character except newline"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"r'c.t'"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400",children:"'cat', 'cut', 'c#t'"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-rose-300 font-bold",children:"^"}),e.jsx("td",{className:"py-3 px-4",children:"Start Anchor"}),e.jsx("td",{className:"py-3 px-4",children:"Start of string or line (re.M)"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"r'^INV-\\d+'"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400",children:"'INV-000942'"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-rose-300 font-bold",children:"$"}),e.jsx("td",{className:"py-3 px-4",children:"End Anchor"}),e.jsx("td",{className:"py-3 px-4",children:"End of string or line (re.M)"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"r'\\.pdf$'"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400",children:"'report.pdf'"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-bold",children:"\\b"}),e.jsx("td",{className:"py-3 px-4",children:"Word Boundary"}),e.jsx("td",{className:"py-3 px-4",children:"Edge between word char and non-word"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"r'\\bcat\\b'"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400",children:"'cat' (not 'catch')"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-bold",children:"\\d+"}),e.jsx("td",{className:"py-3 px-4",children:"Digits"}),e.jsx("td",{className:"py-3 px-4",children:"One or more decimal digits [0-9]"}),e.jsxs("td",{className:"py-3 px-4 font-mono",children:["r'\\d",6,"'"]}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400",children:"'700120'"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-bold",children:".*?"}),e.jsx("td",{className:"py-3 px-4",children:"Lazy Wildcard"}),e.jsx("td",{className:"py-3 px-4",children:"Shortest match between bounds"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"r'<p>.*?</p>'"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400",children:"'<p>Text</p>'"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-bold",children:"[^0-9]"}),e.jsx("td",{className:"py-3 px-4",children:"Negated Set"}),e.jsx("td",{className:"py-3 px-4",children:"Any character NOT a digit"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"r'[^0-9]+'"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400",children:"'Barrackpore'"})]})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating raw string mechanics, shorthand classes, greedy vs lazy quantifiers, re.compile, and enterprise Indian ID validators:"}),e.jsx(w,{files:[{filename:"regex_syntax_and_raw_strings.py",code:v,description:"Raw strings (r'...'), the backslash plague, character sets, and word boundaries (\\b)."},{filename:"shorthand_character_classes_and_quantifiers.py",code:S,description:"Shorthand classes (\\d, \\w, \\s), quantifiers, and the greedy (.*) vs lazy (.*?) HTML trap."},{filename:"compiling_patterns_and_flags.py",code:_,description:"Pre-compiling with re.compile() and core flags: re.I, re.M, re.S, and re.VERBOSE (re.X)."},{filename:"token_and_pattern_validator.py",code:I,description:"Enterprise validation engine for Indian PAN cards, GSTIN, PIN codes, mobiles, and emails."}]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Missing Raw String Prefix"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:'"\\bcat\\b"'})," turns ",e.jsx("code",{className:"text-rose-300 font-mono",children:"\\b"})," into ASCII Backspace ",e.jsx("code",{className:"text-slate-400 font-mono",children:"\\x08"}),", causing the regex engine to never match word boundaries."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always prefix with ",e.jsx("code",{className:"text-emerald-300",children:'r"\\bcat\\b"'})]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Greedy XML / HTML Tag Swallowing"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-amber-300 font-mono",children:'r"<p>.*</p>"'})," on multi-paragraph text consumes from the first ",e.jsx("code",{className:"text-amber-300 font-mono",children:"<p>"})," to the very last ",e.jsx("code",{className:"text-amber-300 font-mono",children:"</p>"})," in the entire file."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use lazy quantifier: ",e.jsx("code",{className:"text-emerald-300",children:'r"<p>.*?</p>"'})]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Missing Anchors in Form Validation"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsxs("code",{className:"text-purple-300 font-mono",children:['r"\\d',6,'"']})," matches ",e.jsx("code",{className:"text-purple-300 font-mono",children:'"abc700120xyz"'})," because it finds 6 digits as an internal substring."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Anchor with start and end: ",e.jsxs("code",{className:"text-emerald-300",children:['r"^\\d',6,'$"']})]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Recompiling Inside Loops"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"re.search()"})," repeatedly in a 100,000-iteration loop forces Python to re-parse the pattern string continuously."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Compile once outside the loop with ",e.jsx("code",{className:"text-emerald-300",children:"re.compile()"}),"!"]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering metacharacters, raw strings, character classes, greedy vs lazy quantifiers, and regex flags:"}),e.jsx(A,{questions:C})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with regex metacharacters, shorthand classes, and Indian ID validation recipes:"}),e.jsx("div",{className:"mb-10",children:e.jsx(E,{content:T,filename:"python_topic7_basic_regex_notes.txt",title:"Print Topic 7 Study Notes"})}),e.jsx(j,{})]})]})]})}export{z as default};
