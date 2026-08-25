import{b as o,j as e,bg as c}from"./vendor-react-core-Doz9nIC6.js";import{P as g}from"./PythonFileLoader-hCi5osN-.js";import{P as b}from"./PlainTextPrint-C08xhKA4.js";import{F as w}from"./FAQTemplate-CkSqDH4B.js";import{T as y}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const j=`# topic3_files/case_and_sanitization_methods.py\r
# Module: 002_007_string-processing\r
# Topic: Essential String Methods (upper, lower, title, strip, split, join, replace)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
"""\r
Topic 3 - File 1: Case Transformation & Whitespace Sanitization Methods\r
Demonstrates:\r
  1. Case conversion: upper(), lower(), capitalize(), title(), swapcase(), casefold()\r
  2. Unicode caseless matching: lower() vs casefold() (German ß, Greek sigma)\r
  3. Whitespace trimming: strip(), lstrip(), rstrip()\r
  4. Custom character set stripping (and why strip removes individual chars, not substrings)\r
  5. Title case quirks (handling apostrophes like "O'Connor" vs capwords)\r
"""\r
\r
import string\r
\r
def demonstrate_case_transformations():\r
    print("=" * 65)\r
    print("1. CASE CONVERSION METHODS")\r
    print("=" * 65)\r
\r
    original = "coder & accoTax bARRACkpORE"\r
    print(f"Original String    : '{original}'\\n")\r
\r
    # 1. upper(): All characters to uppercase\r
    print(f"original.upper()      : '{original.upper()}'")\r
\r
    # 2. lower(): All characters to lowercase\r
    print(f"original.lower()      : '{original.lower()}'")\r
\r
    # 3. capitalize(): Capitalizes ONLY the first character of the entire string\r
    print(f"original.capitalize() : '{original.capitalize()}'")\r
\r
    # 4. title(): Capitalizes the first character of every distinct word\r
    print(f"original.title()      : '{original.title()}'")\r
\r
    # 5. swapcase(): Inverts case of each character\r
    mixed = "Python 3.13 in Kolkata"\r
    print(f"'{mixed}'.swapcase() : '{mixed.swapcase()}'")\r
\r
\r
def demonstrate_unicode_casefold():\r
    print("\\n" + "=" * 65)\r
    print("2. UNICODE CASELESS MATCHING: lower() VS casefold()")\r
    print("=" * 65)\r
\r
    # In German, 'ß' (Eszett) is lowercase for 'SS'\r
    german_word = "Straße"  # German for 'Street'\r
    search_query = "STRASSE"\r
\r
    print(f"German Word  : '{german_word}'")\r
    print(f"Search Query : '{search_query}'")\r
\r
    # Using lower()\r
    match_lower = german_word.lower() == search_query.lower()\r
    print(f"Comparison with lower()    : {match_lower}  ('straße' != 'strasse')")\r
\r
    # Using casefold() (Aggressive Unicode normalization)\r
    match_casefold = german_word.casefold() == search_query.casefold()\r
    print(f"Comparison with casefold() : {match_casefold}  ('strasse' == 'strasse') -> [MATCH!]")\r
\r
\r
def demonstrate_whitespace_sanitization():\r
    print("\\n" + "=" * 65)\r
    print("3. WHITESPACE STRIPPING: strip(), lstrip(), rstrip()")\r
    print("=" * 65)\r
\r
    messy_input = "  \\t\\n  Susmita Mukherjee - Barrackpore  \\r\\n  "\r
    print(f"Raw Input (repr)  : {repr(messy_input)}")\r
\r
    # lstrip(): Strips leading whitespace only\r
    print(f"lstrip() (repr)   : {repr(messy_input.lstrip())}")\r
\r
    # rstrip(): Strips trailing whitespace only\r
    print(f"rstrip() (repr)   : {repr(messy_input.rstrip())}")\r
\r
    # strip(): Strips both leading and trailing whitespace\r
    cleaned = messy_input.strip()\r
    print(f"strip() (repr)    : {repr(cleaned)}")\r
\r
\r
def demonstrate_custom_char_stripping():\r
    print("\\n" + "=" * 65)\r
    print("4. CUSTOM CHARACTER SET STRIPPING (CRITICAL GOTCHA)")\r
    print("=" * 65)\r
\r
    # IMPORTANT: strip(chars) takes a SET of characters, not a prefix/suffix substring!\r
    raw_url = "https://www.codernaccotax.co.in///"\r
    cleaned_url = raw_url.rstrip("/")\r
    print(f"raw_url.rstrip('/')           : '{cleaned_url}'")\r
\r
    filename = "...$$$invoice_report_2026.pdf$$$..."\r
    cleaned_filename = filename.strip(". $")\r
    print(f"filename.strip('. $')         : '{cleaned_filename}'")\r
\r
    # Gotcha demonstration:\r
    sample = "www.example.com"\r
    stripped_bad = sample.strip("w.com")  # Removes ANY 'w', '.', 'c', 'o', 'm' from edges!\r
    print(f"'{sample}'.strip('w.com')    : '{stripped_bad}' (Notice 'e' and 'xample'!)")\r
    print("  -> Tip: In Python 3.9+, use removeprefix() and removesuffix() for exact substrings!")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_case_transformations()\r
    demonstrate_unicode_casefold()\r
    demonstrate_whitespace_sanitization()\r
    demonstrate_custom_char_stripping()\r
`,N=`# topic3_files/split_and_partition_methods.py\r
# Module: 002_007_string-processing\r
# Topic: Essential String Methods (upper, lower, title, strip, split, join, replace)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
"""\r
Topic 3 - File 2: String Splitting, Line Parsing & 3-Tuple Partitioning\r
Demonstrates:\r
  1. split() vs split(" "): The whitespace collapse rule\r
  2. rsplit() and maxsplit parameter\r
  3. splitlines() for multi-line document parsing (keepends flag)\r
  4. partition() & rpartition(): Guaranteed 3-tuple (head, sep, tail)\r
  5. Practical key-value and URL query string parsing\r
"""\r
\r
def demonstrate_split_whitespace_vs_sep():\r
    print("=" * 65)\r
    print("1. split() VS split(' '): WHITESPACE COLLAPSE RULE")\r
    print("=" * 65)\r
\r
    sentence = "Python    is   awesome   in   Barrackpore"\r
    print(f"Original Text : '{sentence}'\\n")\r
\r
    # Default split() with NO ARGUMENTS:\r
    # Groups consecutive whitespace (spaces, tabs, newlines) and discards empty items\r
    words_default = sentence.split()\r
    print(f"sentence.split()    : {words_default} (Clean words, 5 items)")\r
\r
    # Explicit split(' ') with a single space:\r
    # Does NOT collapse consecutive spaces; preserves empty strings ''\r
    words_explicit = sentence.split(" ")\r
    print(f"sentence.split(' ') : {words_explicit} (Preserves empty slots, {len(words_explicit)} items)")\r
\r
\r
def demonstrate_maxsplit_and_rsplit():\r
    print("\\n" + "=" * 65)\r
    print("2. MAXSPLIT & RSPLIT() MECHANICS")\r
    print("=" * 65)\r
\r
    log_entry = "2026-08-24 ERROR DatabaseConnectionFailed Timeout at 10.0.0.1"\r
    print(f"Log Entry: '{log_entry}'\\n")\r
\r
    # Split from left with maxsplit=2:\r
    # Extracts timestamp, level, and leaves the entire remaining message intact\r
    parts_left = log_entry.split(" ", maxsplit=2)\r
    print(f"split(' ', maxsplit=2)  -> {parts_left}")\r
    print(f"  * Date    : {parts_left[0]}")\r
    print(f"  * Level   : {parts_left[1]}")\r
    print(f"  * Message : {parts_left[2]}\\n")\r
\r
    # rsplit from right with maxsplit=1:\r
    # Splits only the last word\r
    filepath = "users/sukantahui/documents/python_tutorial.pdf"\r
    folder_and_file = filepath.rsplit("/", maxsplit=1)\r
    print(f"File Path: '{filepath}'")\r
    print(f"rsplit('/', maxsplit=1) -> Dir: '{folder_and_file[0]}', File: '{folder_and_file[1]}'")\r
\r
\r
def demonstrate_partition_vs_split():\r
    print("\\n" + "=" * 65)\r
    print("3. partition() & rpartition(): GUARANTEED 3-TUPLE")\r
    print("=" * 65)\r
\r
    # partition() splits at the FIRST occurrence of separator into: (head, sep, tail)\r
    config_line = "DATABASE_URL = postgresql://user:pass@localhost:5432/main_db"\r
    key, sep, val = config_line.partition("=")\r
    print(f"Config String: '{config_line}'")\r
    print(f"partition('='):")\r
    print(f"  * Key   : '{key.strip()}'")\r
    print(f"  * Sep   : '{sep}'")\r
    print(f"  * Value : '{val.strip()}'\\n")\r
\r
    # Behavior when separator is NOT found: returns (original_str, '', '')\r
    missing_sep = "DEBUG_MODE_ENABLED"\r
    k2, s2, v2 = missing_sep.partition("=")\r
    print(f"Missing sep partition('='): ('{k2}', '{s2}', '{v2}') -> Zero Exception Risk!\\n")\r
\r
    # rpartition() splits at the LAST occurrence\r
    domain_record = "sub.api.codernaccotax.co.in"\r
    prefix, sep, suffix = domain_record.rpartition(".")\r
    print(f"Domain: '{domain_record}'")\r
    print(f"rpartition('.'): Prefix: '{prefix}', TLD: '{suffix}'")\r
\r
\r
def demonstrate_splitlines():\r
    print("\\n" + "=" * 65)\r
    print("4. splitlines(): MULTI-LINE DOCUMENT PARSING")\r
    print("=" * 65)\r
\r
    receipt = "CODER & ACCOTAX\\nINVOICE #9402\\nAMOUNT: INR 4500\\nSTATUS: PAID"\r
    lines = receipt.splitlines()\r
    print("receipt.splitlines():")\r
    for i, line in enumerate(lines, 1):\r
        print(f"  Line {i}: '{line}'")\r
\r
    # With keepends=True: Preserves \\n line endings\r
    lines_keepends = receipt.splitlines(keepends=True)\r
    print(f"\\nsplitlines(keepends=True) repr: {repr(lines_keepends)}")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_split_whitespace_vs_sep()\r
    demonstrate_maxsplit_and_rsplit()\r
    demonstrate_partition_vs_split()\r
    demonstrate_splitlines()\r
`,_=`# topic3_files/join_and_replace_methods.py\r
# Module: 002_007_string-processing\r
# Topic: Essential String Methods (upper, lower, title, strip, split, join, replace)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
"""\r
Topic 3 - File 3: String Joining, Replacement & Chained Pipeline Transformation\r
Demonstrates:\r
  1. delimiter.join(iterable): Fast O(N) sequence stitching\r
  2. Handling non-string iterables defensively via map(str, ...)\r
  3. replace(old, new, count): Substring replacement and limit counts\r
  4. Method Chaining: Fluent sanitization pipelines (.strip().lower().replace())\r
  5. join() vs '+=' loop performance benchmark\r
"""\r
\r
import time\r
\r
def demonstrate_join_mechanics():\r
    print("=" * 65)\r
    print("1. delimiter.join(iterable) MECHANICS")\r
    print("=" * 65)\r
\r
    words = ["Python", "Tutorial", "Barrackpore", "Coder", "AccoTax"]\r
    print(f"Word List: {words}\\n")\r
\r
    # Joining with different delimiters\r
    print(f"' '.join(words)  : '{' '.join(words)}'")\r
    print(f"'-'.join(words)  : '{'-'.join(words)}'")\r
    print(f"', '.join(words) : '{', '.join(words)}'")\r
    print(f"'///'.join(words): '{'///'.join(words)}'")\r
    print(f"''.join(words)   : '{''.join(words)}' (Direct concatenation)\\n")\r
\r
    # Defensive Joining of Mixed Data Types\r
    mixed_data = ["Order #", 9402, " Amount: INR ", 4500.50, " (", True, ")"]\r
    try:\r
        bad_join = "".join(mixed_data)  # Raises TypeError: sequence item 1: expected str instance, int found\r
    except TypeError as err:\r
        print(f"Direct join on non-strings -> Caught TypeError: {err}")\r
\r
    # Proper way: convert each item to string\r
    safe_join = "".join(str(item) for item in mixed_data)\r
    print(f"Defensive join via str()   -> '{safe_join}'")\r
\r
\r
def demonstrate_replace_mechanics():\r
    print("\\n" + "=" * 65)\r
    print("2. str.replace(old, new, count) MECHANICS")\r
    print("=" * 65)\r
\r
    paragraph = "Python is fast. Python is elegant. Python is popular in Kolkata."\r
    print(f"Original Text:\\n  '{paragraph}'\\n")\r
\r
    # Replace ALL occurrences (default count = -1)\r
    rep_all = paragraph.replace("Python", "Python 3")\r
    print(f"replace('Python', 'Python 3'):\\n  '{rep_all}'\\n")\r
\r
    # Replace with limited count (e.g. only the first occurrence)\r
    rep_first = paragraph.replace("Python", "Python 3", 1)\r
    print(f"replace('Python', 'Python 3', count=1):\\n  '{rep_first}'\\n")\r
\r
    # Deleting substrings by replacing with empty string ""\r
    raw_phone = "+91 (700) 375-6860"\r
    clean_digits = raw_phone.replace("+91", "").replace("(", "").replace(")", "").replace(" ", "").replace("-", "")\r
    print(f"Clean Phone: '{raw_phone}' -> '{clean_digits}'")\r
\r
\r
def demonstrate_method_chaining():\r
    print("\\n" + "=" * 65)\r
    print("3. FLUENT METHOD CHAINING (PIPELINE SANITIZATION)")\r
    print("=" * 65)\r
\r
    raw_user_input = "  \\t  sUKaNTA HUI - BARRACKPORE \\n  "\r
    print(f"Raw Input : {repr(raw_user_input)}")\r
\r
    # Chain: strip whitespace -> lower case -> replace hyphen with bullet -> title case\r
    sanitized = (\r
        raw_user_input\r
        .strip()\r
        .replace("-", "|")\r
        .title()\r
    )\r
    print(f"Chained   : '{sanitized}'")\r
\r
\r
def benchmark_join_vs_concat():\r
    print("\\n" + "=" * 65)\r
    print("4. PERFORMANCE BENCHMARK: join() VS += LOOP CONCATENATION")\r
    print("=" * 65)\r
\r
    tokens = [f"Token_{i}" for i in range(10000)]  # 10,000 strings\r
\r
    # Method A: ''.join(tokens) (Pre-allocates total buffer, O(N))\r
    start_join = time.perf_counter()\r
    res_join = ",".join(tokens)\r
    time_join = time.perf_counter() - start_join\r
\r
    # Method B: Loop with += (O(N^2) reallocation)\r
    start_loop = time.perf_counter()\r
    res_loop = ""\r
    for tok in tokens:\r
        if res_loop:\r
            res_loop += ","\r
        res_loop += tok\r
    time_loop = time.perf_counter() - start_loop\r
\r
    print(f"Tokens Count : {len(tokens):,} strings")\r
    print(f"join() Time  : {time_join * 1000:.3f} ms (Fastest - Single Allocation)")\r
    print(f"+= Loop Time : {time_loop * 1000:.3f} ms ({time_loop / time_join:.2f}x slower)")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_join_mechanics()\r
    demonstrate_replace_mechanics()\r
    demonstrate_method_chaining()\r
    benchmark_join_vs_concat()\r
`,v=`# topic3_files/customer_data_cleaner.py\r
# Module: 002_007_string-processing\r
# Topic: Essential String Methods (upper, lower, title, strip, split, join, replace)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
"""\r
Topic 3 - File 4: Real-World Customer Record Sanitization & Normalization Pipeline\r
Demonstrates:\r
  1. Cleaning noisy, unformatted customer intake data\r
  2. Normalizing names (title casing, extra whitespace collapse)\r
  3. Email validation and domain extraction using partition() and lower()\r
  4. Phone number digits extraction using replace()\r
  5. Address standardizing for Barrackpore & Kolkata clients\r
  6. Generating clean formatted CSV output using delimiter.join()\r
"""\r
\r
from typing import List, Dict, Any\r
\r
# Raw, unformatted customer registration dump\r
RAW_CUSTOMER_RECORDS = [\r
    "  101 |   sUSMITA    mUKHERJEE   |  SUSMITA.STUDENT@GMAIL.COM  |  +91 (700) 375-6860  |  25 shibtala rd, BARRACKPORE, WB - 700120 ",\r
    "102 |  rahul  roy  chowdhury | RAHUL.ROY@YAHOO.CO.IN | 9830012345 | 14/B S.P. Mukherjee road, kolkata, wb - 700025",\r
    "  103|ANIRBAN  BANERJEE|anirban.b@codernaccotax.co.in|+91-9433-221100| 88 Ghoshpara Road, palta, 24 Pgs (N) - 743122 ",\r
    " 104 |  pRIYA   DAS   | priya.das@outlook.com | (033) 2592-1144 | 5 Riverside Road, Barrackpore Cantonment, WB - 700120",\r
    "105|   DEBOJYOTI  SEN   GUPTA |  debo.sen@techcorp.io | +91 7003 112 233 | flat 4A, Green View Apt, sodepur, kolkata - 700110 "\r
]\r
\r
class CustomerDataSanitizer:\r
    """Production data pipeline to standardize dirty string inputs."""\r
\r
    @staticmethod\r
    def clean_name(raw_name: str) -> str:\r
        """Collapses multiple internal spaces and applies proper title casing."""\r
        # split() without args collapses all multiple spaces/tabs\r
        words = raw_name.split()\r
        return " ".join(words).title()\r
\r
    @staticmethod\r
    def clean_email(raw_email: str) -> str:\r
        """Strips whitespace and converts email to canonical lowercase."""\r
        return raw_email.strip().lower()\r
\r
    @staticmethod\r
    def clean_phone(raw_phone: str) -> str:\r
        """Removes all non-digit formatting characters."""\r
        cleaned = raw_phone.strip()\r
        for char in ["+91", "(", ")", "-", " "]:\r
            cleaned = cleaned.replace(char, "")\r
        # Keep standard 10-digit format if it starts with 0\r
        if cleaned.startswith("0") and len(cleaned) == 11:\r
            cleaned = cleaned[1:]\r
        return cleaned\r
\r
    @staticmethod\r
    def clean_address(raw_address: str) -> str:\r
        """Standardizes street address components and pin code."""\r
        # Split by comma to clean each address part\r
        parts = [p.strip().title() for p in raw_address.split(",") if p.strip()]\r
        return ", ".join(parts)\r
\r
    @classmethod\r
    def sanitize_record(cls, raw_line: str) -> Dict[str, Any]:\r
        """Parses and sanitizes a single pipe-delimited raw line."""\r
        fields = [f.strip() for f in raw_line.split("|")]\r
        \r
        cust_id = fields[0]\r
        full_name = cls.clean_name(fields[1])\r
        email = cls.clean_email(fields[2])\r
        phone = cls.clean_phone(fields[3])\r
        address = cls.clean_address(fields[4])\r
\r
        # Extract email domain using partition()\r
        _, _, domain = email.partition("@")\r
\r
        return {\r
            "id": cust_id,\r
            "name": full_name,\r
            "email": email,\r
            "domain": domain,\r
            "phone": phone,\r
            "address": address\r
        }\r
\r
\r
def run_pipeline():\r
    print("=" * 80)\r
    print("CODER & ACCOTAX - CUSTOMER DATA SANITIZATION PIPELINE")\r
    print("=" * 80)\r
    print(f"Processing {len(RAW_CUSTOMER_RECORDS)} dirty intake records...\\n")\r
\r
    cleaned_records = [CustomerDataSanitizer.sanitize_record(line) for line in RAW_CUSTOMER_RECORDS]\r
\r
    # Display Clean Output Table\r
    header = f"{'ID':<5} | {'FULL NAME':<24} | {'PHONE':<12} | {'EMAIL':<30} | {'DOMAIN'}"\r
    print(header)\r
    print("-" * len(header))\r
\r
    for rec in cleaned_records:\r
        print(f"{rec['id']:<5} | {rec['name']:<24} | {rec['phone']:<12} | {rec['email']:<30} | {rec['domain']}")\r
\r
    print("-" * len(header))\r
    print("\\n=== GENERATING CLEAN EXPORT CSV ===")\r
    csv_header = "ID,Name,Phone,Email,Domain,Address"\r
    csv_rows = [csv_header]\r
\r
    for r in cleaned_records:\r
        # Wrap address in quotes to protect embedded commas\r
        row_str = f"{r['id']},{r['name']},{r['phone']},{r['email']},{r['domain']},\\"{r['address']}\\""\r
        csv_rows.append(row_str)\r
\r
    clean_csv_output = "\\n".join(csv_rows)\r
    print(clean_csv_output)\r
\r
\r
if __name__ == "__main__":\r
    run_pipeline()\r
`,S=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
            PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_007: STRING PROCESSING\r
        TOPIC 3: ESSENTIAL STRING METHODS (UPPER, LOWER, TITLE, STRIP, SPLIT, JOIN, REPLACE)\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. CASE CONVERSION METHODS MATRIX\r
--------------------------------------------------------------------------------\r
  Method         Description                                   Example -> Output\r
  ------------------------------------------------------------------------------\r
  s.upper()      Converts all characters to UPPERCASE.        "kolkata" -> "KOLKATA"\r
  s.lower()      Converts all characters to lowercase.        "PYTHON" -> "python"\r
  s.capitalize() Capitalizes 1st char of string only.         "hello world" -> "Hello world"\r
  s.title()      Capitalizes 1st letter of every word.        "sukanta hui" -> "Sukanta Hui"\r
  s.swapcase()   Inverts uppercase <-> lowercase.             "PyThOn" -> "pYtHoN"\r
  s.casefold()   Aggressive Unicode caseless matching.        "Straße" -> "strasse"\r
\r
--------------------------------------------------------------------------------\r
2. WHITESPACE & CHARACTER STRIPPING: strip(), lstrip(), rstrip()\r
--------------------------------------------------------------------------------\r
  • Default (no args): Strips leading/trailing spaces, tabs (\\t), newlines (\\n), \\r.\r
  • Custom chars: s.strip(chars) takes a SET of individual characters, NOT a substring!\r
      Example: "www.example.com".strip("w.com") -> "example"\r
  • Left/Right variants:\r
      s.lstrip() -> Cleans leading (left) characters only.\r
      s.rstrip() -> Cleans trailing (right) characters only.\r
\r
--------------------------------------------------------------------------------\r
3. TOKENIZATION & PARSING: split(), rsplit(), splitlines()\r
--------------------------------------------------------------------------------\r
  1. s.split() (No Arguments):\r
     • Collapses multiple consecutive whitespaces of any type.\r
     • Automatically discards empty strings.\r
     • Example: "A    B   C".split() -> ["A", "B", "C"]\r
\r
  2. s.split(sep) (Explicit Separator):\r
     • Does NOT collapse consecutive separators.\r
     • Preserves empty strings.\r
     • Example: "A,,B".split(",") -> ["A", "", "B"]\r
\r
  3. maxsplit Parameter:\r
     • s.split(sep, maxsplit=N) -> Performs at most N splits from left.\r
     • s.rsplit(sep, maxsplit=N) -> Performs at most N splits from right.\r
\r
  4. s.splitlines(keepends=False):\r
     • Splits string at line boundaries (\\n, \\r\\n, \\r, \\v, \\f).\r
\r
--------------------------------------------------------------------------------\r
4. GUARANTEED 3-TUPLE PARTITIONING: partition() & rpartition()\r
--------------------------------------------------------------------------------\r
  • Syntax: s.partition(sep) -> (head, sep, tail)\r
  • Scans left-to-right; splits at the FIRST occurrence of sep.\r
  • If sep IS NOT FOUND: returns (s, "", "") -> Never raises ValueError!\r
  • rpartition(sep) -> Scans right-to-left; splits at LAST occurrence.\r
  • Best use case: Parsing "KEY = VALUE" configs, URL query strings, email domains.\r
\r
--------------------------------------------------------------------------------\r
5. SEQUENCE STITCHING: delimiter.join(iterable)\r
--------------------------------------------------------------------------------\r
  • Syntax: "delimiter".join(list_of_strings)\r
  • Crucial Rule: All elements in the iterable MUST be of type 'str'.\r
      If elements are integers or floats, use: "".join(str(x) for x in data).\r
  • Performance: join() pre-calculates total memory size and allocates the\r
    heap buffer ONCE in O(N) time (avoid += in loops which is O(N^2)).\r
\r
--------------------------------------------------------------------------------\r
6. SUBSTRING REPLACEMENT: s.replace(old, new, count)\r
--------------------------------------------------------------------------------\r
  • Replaces occurrences of 'old' with 'new'.\r
  • Optional 'count': Limits the maximum number of replacements from left to right.\r
      Example: "banana".replace("a", "o", 2) -> "bonona"\r
  • Delete substrings by replacing with empty string: s.replace("bad_word", "").\r
\r
--------------------------------------------------------------------------------\r
7. FLUENT METHOD CHAINING PIPELINE\r
--------------------------------------------------------------------------------\r
  Because all string methods return a new string object, you can chain operations:\r
    clean_text = (\r
        raw_input\r
        .strip()\r
        .replace("-", " ")\r
        .title()\r
    )\r
\r
================================================================================\r
           END OF STUDY NOTE • TOPIC 3: ESSENTIAL STRING METHODS\r
================================================================================\r
`,T=[{question:"Do string methods like s.upper() or s.replace() modify the original string in place?",shortAnswer:"No, because strings are immutable; they return a brand-new string object.",explanation:"Any string method in Python returns a freshly allocated string with the transformations applied. The original string remains completely unchanged in memory.",hint:"Strings are immutable in Python.",level:"basic",codeExample:`s = 'kolkata'
res = s.upper()
print(s)    # 'kolkata' (Unchanged)
print(res)  # 'KOLKATA' (New object)`},{question:"What is the difference between s.capitalize() and s.title()?",shortAnswer:"capitalize() uppercases only the very first letter of the entire string; title() uppercases the first letter of every individual word.",explanation:"capitalize() converts character at index 0 to uppercase and all remaining characters to lowercase. title() identifies word boundaries (spaces, punctuation) and capitalizes each word.",hint:"capitalize() is for the whole sentence; title() is for each word.",level:"basic",codeExample:`text = 'python programming in barrackpore'
print(text.capitalize())  # 'Python programming in barrackpore'
print(text.title())       # 'Python Programming In Barrackpore'`},{question:"Why should you use s.casefold() instead of s.lower() for international text comparison?",shortAnswer:"casefold() implements full Unicode casefolding, handling multilingual characters that lower() misses (such as German 'ß' -> 'ss').",explanation:"lower() uses standard ASCII/1-to-1 character mappings, whereas casefold() conforms to the Unicode standard for aggressive caseless matching across various international scripts.",hint:"casefold() is designed for aggressive Unicode caseless matching.",level:"moderate",codeExample:`word = 'Straße'
print(word.lower() == 'STRASSE'.lower())       # False ('straße' != 'strasse')
print(word.casefold() == 'STRASSE'.casefold()) # True  ('strasse' == 'strasse')`},{question:"What whitespace characters does s.strip() remove by default?",shortAnswer:"All standard whitespace characters: spaces, tabs ('\\t'), newlines ('\\n'), carriage returns ('\\r'), vertical tabs, and form feeds.",explanation:"When called with no arguments, strip() trims all leading and trailing ASCII and Unicode whitespace characters from both ends of the string.",hint:"Spaces, tabs, newlines from both ends.",level:"basic",codeExample:`s = ' \\t\\n Coder & AccoTax \\r\\n '
print(repr(s.strip()))  # 'Coder & AccoTax'`},{question:"What is the difference between s.lstrip(), s.rstrip(), and s.strip()?",shortAnswer:"lstrip() removes leading (left) characters only; rstrip() removes trailing (right) characters only; strip() removes both.",explanation:"lstrip starts from index 0 moving right. rstrip starts from index -1 moving left. strip applies both passes simultaneously.",hint:"l = left, r = right, strip = both.",level:"basic",codeExample:`s = '***Python***'
print(s.lstrip('*'))  # 'Python***'
print(s.rstrip('*'))  # '***Python'
print(s.strip('*'))   # 'Python'`},{question:"Why does 'www.example.com'.strip('w.com') result in 'example' instead of '.example.'?",shortAnswer:"Because strip(chars) takes a SET of individual characters to remove, NOT a whole prefix/suffix substring.",explanation:"strip('w.com') iterates through both ends and removes any character present in the set {'w', '.', 'c', 'o', 'm'}. To remove exact substrings, use removeprefix() and removesuffix() in Python 3.9+.",hint:"strip treats its argument as a set of characters.",level:"moderate",codeExample:`s = 'www.example.com'
print(s.strip('w.com'))               # 'example'
print(s.removeprefix('www.').removesuffix('.com')) # 'example'`},{question:"What is the key difference between s.split() and s.split(' ')?",shortAnswer:"s.split() collapses consecutive whitespaces and discards empty items; s.split(' ') splits strictly on single spaces, preserving empty strings.",explanation:"When sep is omitted, split() treats consecutive whitespace (spaces, tabs, newlines) as a single delimiter and strips leading/trailing spaces. When sep=' ', every individual space is a separator, producing empty strings for adjacent spaces.",hint:"split() collapses whitespace; split(' ') preserves empty slots.",level:"moderate",codeExample:`s = 'A    B   C'
print(s.split())     # ['A', 'B', 'C'] (3 items)
print(s.split(' ')) # ['A', '', '', '', 'B', '', '', 'C'] (8 items)`},{question:"What does the maxsplit argument do in s.split(sep, maxsplit=N)?",shortAnswer:"It limits the number of splits performed to at most N, leaving the remainder of the string in the last list element.",explanation:"The resulting list will have at most maxsplit + 1 elements. Useful for extracting prefixes/headers while preserving unstructured payloads.",hint:"Splits at most N times.",level:"moderate",codeExample:`log = '2026-08-24 ERROR Connection timed out at Barrackpore server'
parts = log.split(' ', maxsplit=2)
print(parts)  # ['2026-08-24', 'ERROR', 'Connection timed out at Barrackpore server']`},{question:"What is the difference between split() and rsplit()?",shortAnswer:"split() splits from left to right; rsplit() splits from right to left (relevant when maxsplit is specified).",explanation:"Without maxsplit, split() and rsplit() return the same list. With maxsplit=1, rsplit() extracts only the last word/field from the right.",hint:"rsplit starts splitting from the right end.",level:"moderate",codeExample:`path = 'users/sukanta/documents/report.pdf'
print(path.rsplit('/', maxsplit=1))  # ['users/sukanta/documents', 'report.pdf']`},{question:"What does s.partition(sep) return, and how does it differ from s.split(sep, 1)?",shortAnswer:"partition() always returns a 3-tuple (head, sep, tail); split(sep, 1) returns a 1 or 2-element list.",explanation:"partition(sep) splits at the first occurrence of sep into (before, sep, after). If sep is not found, it returns (s, '', ''), avoiding unpacking errors.",hint:"partition() guarantees a 3-tuple (head, sep, tail).",level:"moderate",codeExample:`cfg = 'PORT = 8080'
key, sep, val = cfg.partition('=')
print(key.strip(), ':', val.strip())  # 'PORT : 8080'

missing = 'DEBUG_MODE'
k, s, v = missing.partition('=')
print(k, s, v)  # ('DEBUG_MODE', '', '')`},{question:"What does s.rpartition(sep) do?",shortAnswer:"It partitions the string at the LAST occurrence of sep, returning a 3-tuple (head, sep, tail).",explanation:"rpartition searches from right to left. If sep is not found, it returns ('', '', s).",hint:"Partitions at the last occurrence.",level:"moderate",codeExample:`domain = 'api.staging.codernaccotax.co.in'
head, sep, tail = domain.rpartition('.')
print(head)  # 'api.staging.codernaccotax.co'
print(tail)  # 'in'`},{question:"What does s.splitlines(keepends=True) do?",shortAnswer:"It splits a multi-line string into lines while keeping line break characters (\\n, \\r\\n) attached to each line.",explanation:"By default, keepends is False, which strips newline characters. Setting keepends=True preserves them, which is useful when rewriting files verbatim.",hint:"keepends=True preserves newline endings.",level:"moderate",codeExample:`doc = 'Line 1\\nLine 2\\nLine 3'
print(doc.splitlines())                # ['Line 1', 'Line 2', 'Line 3']
print(doc.splitlines(keepends=True))  # ['Line 1\\n', 'Line 2\\n', 'Line 3']`},{question:"Why does ''.join(['a', 1, 'b']) raise a TypeError?",shortAnswer:"Because join() requires ALL elements in the iterable to be strings (type 'str').",explanation:"join() does not automatically call str() on non-string items. If any item is an integer or boolean, Python raises TypeError: sequence item: expected str instance.",hint:"Use (str(x) for x in items) or map(str, items).",level:"basic",codeExample:`items = ['Item ', 101, ' active: ', True]
# ''.join(items) -> Raises TypeError!
clean = ''.join(str(x) for x in items)
print(clean)  # 'Item 101 active: True'`},{question:"Why is delimiter.join(list_of_strings) preferred over looping with string += concatenation?",shortAnswer:"join() runs in O(N) linear time with a single memory allocation; += in a loop runs in O(N^2) quadratic time due to repeated memory reallocation.",explanation:"Because strings are immutable, += creates a new string object and copies all previous characters on every single iteration. join() pre-computes the total length and allocates the heap buffer once.",hint:"join() allocates memory once in O(N) time.",level:"moderate",codeExample:`# BAD (O(N^2)):
s = ''
for w in ['A', 'B', 'C']: s += w

# GOOD (O(N)):
s = ''.join(['A', 'B', 'C'])`},{question:"What is the syntax and behavior of s.replace(old, new, count)?",shortAnswer:"It returns a new string where occurrences of 'old' are replaced with 'new'. If 'count' is given, only the first 'count' occurrences are replaced.",explanation:"The replacement is non-overlapping from left to right. If count is omitted or negative, all occurrences are replaced.",hint:"count limits the number of replacements.",level:"basic",codeExample:`s = 'apple banana apple cherry apple'
print(s.replace('apple', 'orange', 2))
# 'orange banana orange cherry apple'`},{question:"How do you remove all spaces from a string using string methods?",shortAnswer:"s.replace(' ', '') or ''.join(s.split())",explanation:"s.replace(' ', '') removes all literal space characters. ''.join(s.split()) removes all whitespace characters including tabs and newlines.",hint:"Replace spaces with empty string '', or split and join.",level:"basic",codeExample:`s = ' 700 120 - WB '
print(s.replace(' ', ''))       # '700120-WB'
print(''.join(s.split()))       # '700120-WB'`},{question:"What is method chaining in Python strings?",shortAnswer:"Calling multiple string methods in succession (e.g., s.strip().lower().replace(' ', '_')) on the returned string objects.",explanation:"Because each string method returns a new str instance, subsequent string methods can be invoked immediately on the result in a clean fluent pipeline.",hint:"Chaining calls on returned string instances.",level:"basic",codeExample:`raw = '   sUSMITA MUKHERJEE   '
clean = raw.strip().title().replace(' ', '_')
print(clean)  # 'Susmita_Mukherjee'`},{question:"What does s.swapcase() do?",shortAnswer:"It converts all uppercase characters to lowercase, and all lowercase characters to uppercase.",explanation:"Characters with no case (digits, symbols, punctuation) remain unchanged.",hint:"Inverts character casing.",level:"basic",codeExample:`s = 'Hello Kolkata 2026'
print(s.swapcase())  # 'hELLO kOLKATA 2026'`},{question:"How do you count the number of words in a sentence accurately using string methods?",shortAnswer:"len(sentence.split())",explanation:"Calling split() with no arguments correctly ignores leading, trailing, and multiple consecutive spaces, returning a list of actual words.",hint:"len(s.split()) handles irregular spacing.",level:"basic",codeExample:`text = '  Coder   and   AccoTax   Barrackpore  '
print(len(text.split()))  # 4 words`},{question:`How does s.title() behave when words contain apostrophes (e.g., "they're", "O'Connor")?`,shortAnswer:`It treats the apostrophe as a word boundary and capitalizes the letter following it (e.g., "They'Re", "O'Connor").`,explanation:"s.title() uses a simple character-based algorithm where any non-letter triggers capitalization of the next letter. For true grammatical title casing, use string.capwords() or regular expressions.",hint:"Apostrophes cause title() to capitalize the following letter.",level:"complex",codeExample:`import string
name = "o'connor"
print(name.title())              # "O'Connor"
phrase = "they're learning"
print(phrase.title())            # "They'Re Learning" (Quirk!)
print(string.capwords(phrase))   # "They're Learning"`},{question:"What is the return type of s.split() when called on an empty string s = ''?",shortAnswer:"An empty list []",explanation:"s.split() with no arguments yields [] on an empty string. Note that s.split(',') on '' yields [''] (a list with one empty string).",hint:"''.split() returns [], but ''.split(',') returns [''].",level:"complex",codeExample:`print(''.split())     # []
print(''.split(',')) # ['']`},{question:"How can you convert a comma-separated string '10,20,30' into a list of integers?",shortAnswer:"[int(x.strip()) for x in s.split(',')]",explanation:"Split by comma, optionally strip whitespace from each token, and map through int() using a list comprehension.",hint:"Combine split with list comprehension and int().",level:"basic",codeExample:`csv_data = '10, 25, 45, 80'
numbers = [int(x.strip()) for x in csv_data.split(',')]
print(numbers)  # [10, 25, 45, 80]`},{question:"What does '-'.join('PYTHON') output?",shortAnswer:"'P-Y-T-H-O-N'",explanation:"Strings are iterables of single-character strings, so passing a string to join() places the delimiter between every character.",hint:"A string is an iterable of characters.",level:"basic",codeExample:"print('-'.join('PYTHON'))  # 'P-Y-T-H-O-N'"},{question:"How do you replace only the last occurrence of a substring in Python?",shortAnswer:"Using rpartition(): head, sep, tail = s.rpartition(old); return head + new + tail",explanation:"Because replace() only takes count from the left, using rpartition() to find the rightmost match and re-stitching with 'new' replaces the last occurrence cleanly.",hint:"Use rpartition to target the rightmost occurrence.",level:"complex",codeExample:`def replace_last(s, old, new):
    head, sep, tail = s.rpartition(old)
    return head + new + tail if sep else s

print(replace_last('apple banana apple cherry apple', 'apple', 'ORANGE'))
# 'apple banana apple cherry ORANGE'`},{question:"What happens if old is not found in s.replace(old, new)?",shortAnswer:"It returns a copy of the original string unchanged without raising any error.",explanation:"replace() is safe and does not raise ValueError if the search string is absent.",hint:"Returns the original string untouched.",level:"basic",codeExample:`s = 'Kolkata'
print(s.replace('Mumbai', 'Delhi'))  # 'Kolkata'`}];function L(){const d=o.useRef([]),[a,p]=o.useState("case"),[t,f]=o.useState(`  sUSMITA  mUKHERJEE - bARRACKPORE  
`),[x,u]=o.useState("title");o.useEffect(()=>{const r=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&i.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return d.current.forEach(n=>{n&&r.observe(n)}),()=>r.disconnect()},[]);const s=r=>{r&&!d.current.includes(r)&&d.current.push(r)},l=(()=>{try{switch(x){case"upper":return{type:"str",result:t.toUpperCase(),desc:"All characters converted to uppercase."};case"lower":return{type:"str",result:t.toLowerCase(),desc:"All characters converted to lowercase."};case"title":return{type:"str",result:t.split(" ").map(h=>h?h.charAt(0).toUpperCase()+h.slice(1).toLowerCase():"").join(" "),desc:"First letter of each word capitalized."};case"capitalize":return{type:"str",result:t.charAt(0).toUpperCase()+t.slice(1).toLowerCase(),desc:"First letter of entire string capitalized, rest lowercase."};case"strip":return{type:"str",result:t.trim(),desc:"Leading & trailing whitespace trimmed."};case"lstrip":return{type:"str",result:t.replace(/^\s+/,""),desc:"Leading whitespace removed."};case"rstrip":return{type:"str",result:t.replace(/\s+$/,""),desc:"Trailing whitespace removed."};case"split_default":const r=t.trim().split(/\s+/).filter(Boolean);return{type:"list",result:JSON.stringify(r,null,2),itemCount:r.length,desc:"Whitespace collapsed into clean token list."};case"split_comma":const n=t.split(",");return{type:"list",result:JSON.stringify(n,null,2),itemCount:n.length,desc:"Split on commas without collapsing empty items."};case"partition_dash":const i=t.indexOf("-"),m=i!==-1?[t.slice(0,i),"-",t.slice(i+1)]:[t,"",""];return{type:"tuple (3 elements)",result:`("${m[0].trim()}", "${m[1]}", "${m[2].trim()}")`,desc:"Guaranteed 3-tuple: (head, sep, tail) at first '-' occurrence."};case"replace_dash":return{type:"str",result:t.replaceAll("-","|"),desc:"Substituted '-' with '|'."};default:return{type:"str",result:t,desc:"Original string."}}}catch{return{type:"error",result:"Transformation error",desc:"Invalid input"}}})();return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-emerald-500/30 selection:text-emerald-200",children:[e.jsx("style",{children:`
        .section-hidden {
          transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .section-visible {
          transform: translateY(0);
        }
        @keyframes pulseGlowEmerald {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(16, 185, 129, 0.4)); }
          50% { filter: drop-shadow(0 0 10px rgba(16, 185, 129, 0.8)); }
        }
        .animate-glow-emerald {
          animation: pulseGlowEmerald 3s infinite ease-in-out;
        }
      `}),e.jsxs("header",{ref:s,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-emerald-950/80 text-emerald-300 px-3 py-1 rounded-full border border-emerald-800/80 shadow-sm shadow-emerald-950/50",children:"Segment 2 • Module 002_007"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 3"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"String Processing & Pattern Handling"})]}),e.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:"Essential String Methods & Transformation Pipelines"}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master case conversion (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"upper"}),", ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"lower"}),", ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"title"}),", ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"casefold"}),"), whitespace sanitization (",e.jsx("code",{className:"text-cyan-400 font-mono",children:"strip"}),"), delimiter tokenization (",e.jsx("code",{className:"text-purple-400 font-mono",children:"split"}),", ",e.jsx("code",{className:"text-purple-400 font-mono",children:"partition"}),"), sequence stitching (",e.jsx("code",{className:"text-pink-400 font-mono",children:"join"}),"), and substitution (",e.jsx("code",{className:"text-amber-400 font-mono",children:"replace"}),")."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔤 Case Normalization & Unicode Casefold"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🧹 Strip & Character-Set Trimming"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🧩 split() vs partition() Tokenizers"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ O(N) delimiter.join() & replace()"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧰"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Five Core String Method Families"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["Because strings in Python are strictly immutable, every string method operates as a ",e.jsx("strong",{className:"text-emerald-400",children:"pure function"}),": it accepts the current string, performs its transformation or tokenization, and returns a ",e.jsx("strong",{className:"text-white",children:"brand-new string, list, or tuple"}),"."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 shadow-lg shadow-emerald-950/30 transition-all duration-300 hover:scale-[1.01] hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"🔤"})," Case Conversion"]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-2",children:[e.jsx("code",{className:"text-emerald-300 font-mono",children:"upper()"}),", ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"lower()"}),", ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"title()"}),", ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"capitalize()"}),", ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"swapcase()"}),", ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"casefold()"}),"."]}),e.jsx("span",{className:"text-xs text-emerald-400/80 font-mono",children:"Returns: new str"})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg shadow-cyan-950/30 transition-all duration-300 hover:scale-[1.01] hover:border-cyan-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"🧹"})," Trimming & Sanitizing"]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-2",children:[e.jsx("code",{className:"text-cyan-300 font-mono",children:"strip()"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"lstrip()"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"rstrip()"}),". Removes whitespace or custom character sets from edges."]}),e.jsx("span",{className:"text-xs text-cyan-400/80 font-mono",children:"Returns: new str"})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg shadow-purple-950/30 transition-all duration-300 hover:scale-[1.01] hover:border-purple-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"✂️"})," Tokenizing & Splitting"]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-2",children:[e.jsx("code",{className:"text-purple-300 font-mono",children:"split()"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"rsplit()"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"splitlines()"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"partition()"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"rpartition()"}),"."]}),e.jsx("span",{className:"text-xs text-purple-400/80 font-mono",children:"Returns: list or 3-tuple"})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-emerald-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-2",children:"Why Method Chaining is Idiomatic & Powerful in Python"}),e.jsxs("p",{className:"text-sm sm:text-base text-slate-300 leading-relaxed mb-2",children:["Because each string transformation method returns a new ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"str"})," instance, you can chain multiple operations into a readable, high-performance data processing pipeline:"]}),e.jsx("div",{className:"bg-slate-900 p-3 rounded-lg font-mono text-xs sm:text-sm text-emerald-300 border border-slate-800",children:'clean_name = raw_user_input.strip().title().replace("-", " ")'})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"🔍"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Method Architecture & Execution"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>p("case"),className:c("px-3 py-1.5 rounded-lg transition-all",a==="case"?"bg-emerald-900/50 text-emerald-300 border border-emerald-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Case Transformations"}),e.jsx("button",{onClick:()=>p("strip"),className:c("px-3 py-1.5 rounded-lg transition-all",a==="strip"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Strip & Edge Trimming"}),e.jsx("button",{onClick:()=>p("tokenizer"),className:c("px-3 py-1.5 rounded-lg transition-all",a==="tokenizer"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"split() vs partition()"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Exploring internal behavior and transformation steps across core string methods:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:a==="case"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#34d399",fontSize:"14",fontWeight:"bold",children:'CASE CONVERSION ENGINE (ORIGINAL: "coder & accoTax bARRACkpORE")'}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"60",rx:"8",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"15",y:"25",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"s.upper()"}),e.jsx("text",{x:"15",y:"47",fill:"#f8fafc",fontSize:"12",fontStyle:"italic",children:'"CODER & ACCOTAX BARRACKPORE"'}),e.jsx("rect",{x:"420",y:"0",width:"390",height:"60",rx:"8",fill:"#0c4a6e",stroke:"#0ea5e9",strokeWidth:"1.5"}),e.jsx("text",{x:"435",y:"25",fill:"#7dd3fc",fontSize:"13",fontWeight:"bold",children:"s.lower()"}),e.jsx("text",{x:"435",y:"47",fill:"#f8fafc",fontSize:"12",fontStyle:"italic",children:'"coder & accotax barrackpore"'}),e.jsx("rect",{x:"0",y:"75",width:"390",height:"60",rx:"8",fill:"#1e1b4b",stroke:"#6366f1",strokeWidth:"1.5"}),e.jsx("text",{x:"15",y:"100",fill:"#c7d2fe",fontSize:"13",fontWeight:"bold",children:"s.title()"}),e.jsx("text",{x:"15",y:"122",fill:"#f8fafc",fontSize:"12",fontStyle:"italic",children:'"Coder & Accotax Barrackpore"'}),e.jsx("rect",{x:"420",y:"75",width:"390",height:"60",rx:"8",fill:"#3b0764",stroke:"#a855f7",strokeWidth:"1.5"}),e.jsx("text",{x:"435",y:"100",fill:"#e9d5ff",fontSize:"13",fontWeight:"bold",children:"s.capitalize()"}),e.jsx("text",{x:"435",y:"122",fill:"#f8fafc",fontSize:"12",fontStyle:"italic",children:'"Coder & accotax barrackpore" (1st char only)'})]}),e.jsx("rect",{x:"30",y:"210",width:"810",height:"100",rx:"8",fill:"#090d16",stroke:"#334155"}),e.jsx("text",{x:"50",y:"240",fill:"#f59e0b",fontSize:"13",fontWeight:"bold",children:"Unicode Caseless Matching: lower() vs casefold()"}),e.jsxs("text",{x:"50",y:"265",fill:"#cbd5e1",fontSize:"12",children:["• German 'Straße'.lower() == 'STRASSE'.lower() → ",e.jsx("tspan",{fill:"#fca5a5",fontWeight:"bold",children:"False"})," ('straße' != 'strasse')"]}),e.jsxs("text",{x:"50",y:"290",fill:"#cbd5e1",fontSize:"12",children:["• German 'Straße'.casefold() == 'STRASSE'.casefold() → ",e.jsx("tspan",{fill:"#34d399",fontWeight:"bold",children:"True"})," (Aggressive Unicode normalization)"]})]}):a==="strip"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"BOUNDARY STRIPPING & WHITESPACE SANITIZATION"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"810",height:"70",rx:"8",fill:"#1e293b",stroke:"#475569",strokeWidth:"1"}),e.jsx("rect",{x:"10",y:"12",width:"130",height:"45",rx:"6",fill:"#881337",stroke:"#f43f5e",strokeDasharray:"3,3"}),e.jsx("text",{x:"75",y:"38",fill:"#fda4af",fontSize:"12",textAnchor:"middle",children:"\\t \\n (Leading)"}),e.jsx("rect",{x:"150",y:"12",width:"480",height:"45",rx:"6",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"390",y:"40",fill:"#a7f3d0",fontSize:"15",fontWeight:"bold",textAnchor:"middle",children:'"Susmita Mukherjee - Barrackpore"'}),e.jsx("rect",{x:"640",y:"12",width:"160",height:"45",rx:"6",fill:"#881337",stroke:"#f43f5e",strokeDasharray:"3,3"}),e.jsx("text",{x:"720",y:"38",fill:"#fda4af",fontSize:"12",textAnchor:"middle",children:"\\r \\n (Trailing)"})]}),e.jsxs("g",{transform:"translate(30, 140)",children:[e.jsx("rect",{x:"0",y:"0",width:"255",height:"75",rx:"8",fill:"#0c4a6e",stroke:"#0ea5e9"}),e.jsx("text",{x:"15",y:"25",fill:"#7dd3fc",fontSize:"13",fontWeight:"bold",children:"lstrip() [Left Only]"}),e.jsx("text",{x:"15",y:"48",fill:"#f8fafc",fontSize:"11",children:"Removes leading whitespace."}),e.jsx("text",{x:"15",y:"65",fill:"#94a3b8",fontSize:"11",children:"Trailing \\r\\n remains."}),e.jsx("rect",{x:"277",y:"0",width:"255",height:"75",rx:"8",fill:"#0c4a6e",stroke:"#0ea5e9"}),e.jsx("text",{x:"292",y:"25",fill:"#7dd3fc",fontSize:"13",fontWeight:"bold",children:"rstrip() [Right Only]"}),e.jsx("text",{x:"292",y:"48",fill:"#f8fafc",fontSize:"11",children:"Removes trailing whitespace."}),e.jsx("text",{x:"292",y:"65",fill:"#94a3b8",fontSize:"11",children:"Leading \\t\\n remains."}),e.jsx("rect",{x:"555",y:"0",width:"255",height:"75",rx:"8",fill:"#064e3b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"570",y:"25",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"strip() [Both Ends]"}),e.jsx("text",{x:"570",y:"48",fill:"#f8fafc",fontSize:"11",children:"Removes both edges cleanly."}),e.jsx("text",{x:"570",y:"65",fill:"#34d399",fontSize:"11",fontWeight:"bold",children:"Output: Clean String!"})]}),e.jsx("rect",{x:"30",y:"235",width:"810",height:"75",rx:"8",fill:"#090d16",stroke:"#334155"}),e.jsx("text",{x:"50",y:"260",fill:"#f43f5e",fontSize:"12",fontWeight:"bold",children:"⚠️ Crucial Rule: strip(chars) takes a SET of individual characters, not a prefix!"}),e.jsx("text",{x:"50",y:"285",fill:"#cbd5e1",fontSize:"12",children:`"www.example.com".strip("w.com") → "example" (Removes ANY 'w', '.', 'c', 'o', 'm' from either end).`})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"TOKENIZER COMPARISON: split() (LIST) VS partition() (GUARANTEED 3-TUPLE)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"250",rx:"8",fill:"#1e1b4b",stroke:"#6366f1",strokeWidth:"1.5"}),e.jsx("text",{x:"20",y:"30",fill:"#a5b4fc",fontSize:"14",fontWeight:"bold",children:"1. s.split() / s.split(sep, maxsplit)"}),e.jsxs("text",{x:"20",y:"55",fill:"#cbd5e1",fontSize:"12",children:["• Returns a ",e.jsx("tspan",{fill:"#38bdf8",fontWeight:"bold",children:"list of strings"})," (variable length)."]}),e.jsx("text",{x:"20",y:"80",fill:"#cbd5e1",fontSize:"12",children:"• s.split() collapses multiple spaces automatically."}),e.jsx("text",{x:"20",y:"105",fill:"#cbd5e1",fontSize:"12",children:"• maxsplit limits number of tokens from left."}),e.jsx("rect",{x:"20",y:"125",width:"350",height:"105",rx:"6",fill:"#090d16",stroke:"#334155"}),e.jsx("text",{x:"35",y:"150",fill:"#94a3b8",fontSize:"11",children:'Target: "2026-08-24 ERROR Timeout"'}),e.jsx("text",{x:"35",y:"175",fill:"#38bdf8",fontSize:"12",fontStyle:"italic",children:'s.split(" ", maxsplit=2)'}),e.jsx("text",{x:"35",y:"200",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"['2026-08-24', 'ERROR', 'Timeout']"})]}),e.jsxs("g",{transform:"translate(450, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"250",rx:"8",fill:"#3b0764",stroke:"#a855f7",strokeWidth:"1.5"}),e.jsx("text",{x:"20",y:"30",fill:"#e9d5ff",fontSize:"14",fontWeight:"bold",children:"2. s.partition(sep) (Guaranteed 3-Tuple)"}),e.jsxs("text",{x:"20",y:"55",fill:"#cbd5e1",fontSize:"12",children:["• Returns exactly ",e.jsx("tspan",{fill:"#d8b4fe",fontWeight:"bold",children:"(head, sep, tail)"}),"."]}),e.jsx("text",{x:"20",y:"80",fill:"#cbd5e1",fontSize:"12",children:"• Splits at the FIRST occurrence of separator."}),e.jsx("text",{x:"20",y:"105",fill:"#cbd5e1",fontSize:"12",children:'• If sep not found: returns (s, "", "") (Zero error!).'}),e.jsx("rect",{x:"20",y:"125",width:"350",height:"105",rx:"6",fill:"#090d16",stroke:"#334155"}),e.jsx("text",{x:"35",y:"150",fill:"#94a3b8",fontSize:"11",children:'Target: "DATABASE_URL = postgresql://..."'}),e.jsx("text",{x:"35",y:"175",fill:"#d8b4fe",fontSize:"12",fontStyle:"italic",children:'key, sep, val = s.partition("=")'}),e.jsx("text",{x:"35",y:"200",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:'key="DATABASE_URL", val="postgresql://..."'})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive String Method Playground"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Type custom text in the input box below or click any method to see live Python transformations:"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2",children:"Raw Input String (Editable)"}),e.jsx("textarea",{value:t,onChange:r=>f(r.target.value),rows:2,className:"w-full bg-slate-950 border border-slate-700 rounded-xl p-3.5 text-slate-100 font-mono text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500",placeholder:"Enter any raw string to test methods..."})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2",children:"Select String Method Transformation"}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2",children:[{id:"upper",label:".upper()"},{id:"lower",label:".lower()"},{id:"title",label:".title()"},{id:"capitalize",label:".capitalize()"},{id:"strip",label:".strip()"},{id:"lstrip",label:".lstrip()"},{id:"rstrip",label:".rstrip()"},{id:"split_default",label:".split()"},{id:"split_comma",label:".split(',')"},{id:"partition_dash",label:".partition('-')"},{id:"replace_dash",label:".replace('-', '|')"}].map(r=>e.jsx("button",{onClick:()=>u(r.id),className:c("py-2 px-3 rounded-lg font-mono text-xs font-semibold border transition-all text-center",x===r.id?"bg-emerald-950 border-emerald-500 text-emerald-300 shadow-md shadow-emerald-950":"bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"),children:r.label},r.id))})]}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400",children:"Return Type:"}),e.jsxs("span",{className:"text-xs font-mono bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-800 font-bold",children:["<class '",l.type,"'>"]}),l.itemCount!==void 0&&e.jsxs("span",{className:"text-xs font-mono text-slate-400",children:["(",l.itemCount," items)"]})]}),e.jsx("div",{className:"text-xs text-slate-400 italic",children:l.desc})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1",children:"Transformed Output"}),e.jsx("pre",{className:"p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-emerald-300 font-mono text-sm overflow-x-auto whitespace-pre-wrap",children:l.result})]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚙️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master String Methods Reference Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Method Signature"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Return Type"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Primary Behavior"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Example Input"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Output"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-300 font-semibold",children:"s.upper()"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400",children:"str"}),e.jsx("td",{className:"py-3 px-4",children:"All characters to uppercase"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:'"kolkata"'}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"'KOLKATA'"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-300 font-semibold",children:"s.lower()"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400",children:"str"}),e.jsx("td",{className:"py-3 px-4",children:"All characters to lowercase"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:'"PYTHON"'}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"'python'"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-300 font-semibold",children:"s.title()"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400",children:"str"}),e.jsx("td",{className:"py-3 px-4",children:"Capitalizes first letter of every word"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:'"sukanta hui"'}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"'Sukanta Hui'"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-300 font-semibold",children:"s.strip(chars)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400",children:"str"}),e.jsx("td",{className:"py-3 px-4",children:"Trims leading and trailing characters/whitespace"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:'"  hi \\n"'}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"'hi'"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"s.split(sep, maxsplit)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400",children:"list[str]"}),e.jsx("td",{className:"py-3 px-4",children:"Tokenizes string on delimiter (collapses whitespace if sep=None)"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:'"A B C"'}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-400 font-bold",children:"['A', 'B', 'C']"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"s.partition(sep)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400",children:"tuple (3)"}),e.jsx("td",{className:"py-3 px-4",children:"Splits at first separator into (head, sep, tail)"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:'"KEY=VAL"'}),e.jsx("td",{className:"py-3 px-4 font-mono text-purple-400 font-bold",children:"('KEY', '=', 'VAL')"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-pink-300 font-semibold",children:"sep.join(iterable)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400",children:"str"}),e.jsx("td",{className:"py-3 px-4",children:"Stitches sequence of strings in O(N) linear time"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:`"-".join(['A', 'B'])`}),e.jsx("td",{className:"py-3 px-4 font-mono text-pink-400 font-bold",children:"'A-B'"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"s.replace(old, new, cnt)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400",children:"str"}),e.jsx("td",{className:"py-3 px-4",children:"Substitutes occurrences of substring with limit count"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:'"a-b-c".replace("-", "|", 1)'}),e.jsx("td",{className:"py-3 px-4 font-mono text-amber-400 font-bold",children:"'a|b-c'"})]})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating case conversions, whitespace cleaning, tokenizing, and customer intake pipelines:"}),e.jsx(g,{files:[{filename:"case_and_sanitization_methods.py",code:j,description:"upper, lower, title, casefold Unicode matching, and character-set stripping."},{filename:"split_and_partition_methods.py",code:N,description:"split whitespace collapse vs split(sep), maxsplit, splitlines, and 3-tuple partition()."},{filename:"join_and_replace_methods.py",code:_,description:"delimiter.join, defensive type casting, replace with count, and O(N) benchmarks."},{filename:"customer_data_cleaner.py",code:v,description:"Production customer registration sanitizer generating standardized records and clean CSV."}]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Assuming strip(chars) Removes Substrings"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:'"www.example.com".strip("w.com")'})," yields ",e.jsx("code",{className:"text-rose-300 font-mono",children:'"example"'})," because strip treats its argument as a set of individual characters to trim from both edges."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:'removeprefix("www.").removesuffix(".com")'})," in Python 3.9+!"]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Passing Non-Strings to delimiter.join()"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-amber-300 font-mono",children:'"".join([1, 2, 3])'})," crashes with ",e.jsx("code",{className:"text-amber-300 font-mono",children:"TypeError: sequence item 0: expected str instance, int found"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Cast items: ",e.jsx("code",{className:"text-emerald-300",children:'"".join(str(x) for x in items)'})]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"}),' Trap 3: split() vs split(" ") Empty Slots']}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:[e.jsx("code",{className:"text-purple-300 font-mono",children:'"A  B".split()'})," produces ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"['A', 'B']"}),", while ",e.jsx("code",{className:"text-purple-300 font-mono",children:'"A  B".split(" ")'})," produces ",e.jsx("code",{className:"text-amber-400 font-mono",children:"['A', '', 'B']"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Omit arguments when tokenizing irregular whitespace!"]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Forgetting to Reassign Transformed String"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"name.strip()"})," on its own does NOT modify ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"name"})," because strings are immutable."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always rebind: ",e.jsx("code",{className:"text-emerald-300",children:"name = name.strip()"})]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering case conversions, whitespace cleaning, tokenizing, and method chaining:"}),e.jsx(w,{questions:T})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with method comparison matrices, partition patterns, and pipeline recipes:"}),e.jsx("div",{className:"mb-10",children:e.jsx(b,{content:S,filename:"python_topic3_essential_string_methods_notes.txt",title:"Print Topic 3 Study Notes"})}),e.jsx(y,{})]})]})]})}export{L as default};
