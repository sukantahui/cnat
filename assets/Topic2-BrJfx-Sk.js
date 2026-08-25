import{b as d,j as e,bg as l}from"./vendor-react-core-Doz9nIC6.js";import{P as g}from"./PythonFileLoader-hCi5osN-.js";import{P as u}from"./PlainTextPrint-C08xhKA4.js";import{F as b}from"./FAQTemplate-CkSqDH4B.js";import{T as y}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const N=`# topic2_files/indexing_and_bounds.py\r
# Module: 002_007_string-processing\r
# Topic: Indexing, Slicing, Step Slicing & Reversing Strings\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
"""\r
Topic 2 - File 1: Positive and Negative Indexing & Boundary Safety\r
Demonstrates:\r
  1. Positive 0-based indexing (0 to N-1)\r
  2. Negative indexing (-1 to -N)\r
  3. Python has no 'char' data type: single-character access returns a 'str' of len 1\r
  4. IndexError behavior on out-of-bounds single-character indexing\r
  5. Defensive indexing using len() and custom safe getter\r
"""\r
\r
def demonstrate_indexing_basics():\r
    institute_name = "Coder & AccoTax Barrackpore"\r
    total_len = len(institute_name)\r
    \r
    print("=" * 60)\r
    print("1. POSITIVE & NEGATIVE INDEXING BASICS")\r
    print("=" * 60)\r
    print(f"Target String : '{institute_name}'")\r
    print(f"Total Length  : {total_len} characters\\n")\r
\r
    # Positive indexing (Left to Right: 0 to len - 1)\r
    first_char = institute_name[0]\r
    fifth_char = institute_name[4]\r
    last_pos_char = institute_name[total_len - 1]\r
    \r
    print(f"First character institute_name[0]  : '{first_char}' (Type: {type(first_char).__name__})")\r
    print(f"Fifth character institute_name[4]  : '{fifth_char}'")\r
    print(f"Last positive   institute_name[{total_len - 1}] : '{last_pos_char}'\\n")\r
\r
    # Negative indexing (Right to Left: -1 to -len)\r
    last_char = institute_name[-1]\r
    second_last = institute_name[-2]\r
    first_neg_char = institute_name[-total_len]\r
    \r
    print(f"Last character  institute_name[-1] : '{last_char}'")\r
    print(f"Second last     institute_name[-2] : '{second_last}'")\r
    print(f"First character institute_name[-{total_len}]: '{first_neg_char}'")\r
    \r
    # Verification of symmetry\r
    assert institute_name[0] == institute_name[-total_len]\r
    assert institute_name[total_len - 1] == institute_name[-1]\r
    print("\\n[Assertion Passed] institute_name[0] == institute_name[-len] and [len-1] == [-1]")\r
\r
\r
def demonstrate_index_error_and_safety():\r
    print("\\n" + "=" * 60)\r
    print("2. BOUNDARY SAFETY & IndexError TRAPS")\r
    print("=" * 60)\r
    city = "Kolkata"  # len = 7, valid positive: 0..6, valid negative: -7..-1\r
    print(f"String: '{city}' (len = {len(city)})")\r
\r
    # Direct Out-of-Bounds Positive Access\r
    try:\r
        invalid_char = city[7]  # Index 7 does not exist\r
    except IndexError as err:\r
        print(f"Caught Expected Error for city[7]  : {type(err).__name__} -> {err}")\r
\r
    # Direct Out-of-Bounds Negative Access\r
    try:\r
        invalid_neg = city[-8]  # Index -8 is out of bounds\r
    except IndexError as err:\r
        print(f"Caught Expected Error for city[-8] : {type(err).__name__} -> {err}")\r
\r
    # Safe Character Extraction Utility Function\r
    def safe_char_at(text: str, index: int, default: str = "") -> str:\r
        """Defensively retrieves a character by index without raising IndexError."""\r
        try:\r
            return text[index]\r
        except (IndexError, TypeError):\r
            return default\r
\r
    print("\\nTesting safe_char_at utility:")\r
    print(f"safe_char_at('{city}', 0)   -> '{safe_char_at(city, 0)}'")\r
    print(f"safe_char_at('{city}', 5)   -> '{safe_char_at(city, 5)}'")\r
    print(f"safe_char_at('{city}', 100) -> '{safe_char_at(city, 100, default='[NOT_FOUND]')}'")\r
    print(f"safe_char_at('{city}', -10) -> '{safe_char_at(city, -10, default='[NOT_FOUND]')}'")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_indexing_basics()\r
    demonstrate_index_error_and_safety()\r
`,v=`# topic2_files/slicing_and_step.py\r
# Module: 002_007_string-processing\r
# Topic: Indexing, Slicing, Step Slicing & Reversing Strings\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
"""\r
Topic 2 - File 2: Slicing Syntax, Step Strides & Boundary Tolerance\r
Demonstrates:\r
  1. Standard Slicing: [start:stop] (Half-open interval: includes start, excludes stop)\r
  2. Omitting Defaults: [:stop], [start:], [:] (Full shallow copy)\r
  3. Step Slicing: [start:stop:step] (Skipping characters by stride)\r
  4. Slicing Out-of-Bounds Tolerance: Why slicing NEVER raises IndexError\r
  5. Practical Real-World Field Extraction: Emails, Indian Tax IDs & Dates\r
"""\r
\r
def demonstrate_basic_slicing():\r
    print("=" * 60)\r
    print("1. BASIC SLICING & HALF-OPEN INTERVAL [start:stop)")\r
    print("=" * 60)\r
    \r
    phrase = "BARRACKPORE"  # Indices 0..10 (Length: 11)\r
    print(f"Target Phrase : '{phrase}'")\r
    print("Index Map     :  0 1 2 3 4 5 6 7 8 9 10")\r
    print("Letters       :  B A R R A C K P O R E\\n")\r
\r
    # Slice [0:6] takes characters at 0, 1, 2, 3, 4, 5 (Stops before index 6)\r
    sub1 = phrase[0:6]\r
    print(f"phrase[0:6]  -> '{sub1}' (Includes index 0..5, excludes 6)")\r
\r
    # Slice [6:11] takes characters from index 6 to 10\r
    sub2 = phrase[6:11]\r
    print(f"phrase[6:11] -> '{sub2}' (Includes index 6..10)")\r
\r
    # Property: phrase[0:k] + phrase[k:len] == phrase\r
    combined = phrase[0:6] + phrase[6:11]\r
    assert combined == phrase\r
    print(f"Recombined   -> '{combined}' (Matches original!)")\r
\r
\r
def demonstrate_omitted_bounds_and_steps():\r
    print("\\n" + "=" * 60)\r
    print("2. OMITTED BOUNDS & STEP STRIDES")\r
    print("=" * 60)\r
    \r
    alphabet = "ABCDEFGHIJKLMN"\r
    print(f"Alphabet       : '{alphabet}' (len={len(alphabet)})")\r
\r
    # Omitting start defaults to 0\r
    print(f"alphabet[:5]   : '{alphabet[:5]}' (First 5 characters)")\r
\r
    # Omitting stop defaults to len(s)\r
    print(f"alphabet[8:]   : '{alphabet[8:]}' (From index 8 to end)")\r
\r
    # Full copy\r
    full_copy = alphabet[:]\r
    print(f"alphabet[:]    : '{full_copy}' (Entire string copy)")\r
\r
    # Step stride of 2 (Every second character: 0, 2, 4, 6...)\r
    step2 = alphabet[::2]\r
    print(f"alphabet[::2]  : '{step2}' (Even indices: A, C, E, G, I, K, M)")\r
\r
    # Step stride of 3\r
    step3 = alphabet[::3]\r
    print(f"alphabet[::3]  : '{step3}' (Indices 0, 3, 6, 9, 12: A, D, G, J, M)")\r
\r
    # Slice with start, stop, and step: indices 1, 3, 5, 7, 9\r
    custom_stride = alphabet[1:11:2]\r
    print(f"alphabet[1:11:2]: '{custom_stride}' (Odd indices between 1 and 10)")\r
\r
\r
def demonstrate_slicing_safety_tolerance():\r
    print("\\n" + "=" * 60)\r
    print("3. SLICING OUT-OF-BOUNDS TOLERANCE (NO IndexError)")\r
    print("=" * 60)\r
    \r
    district = "Hooghly"  # len = 7\r
    print(f"District: '{district}' (Length: {len(district)})")\r
\r
    # Single item access at index 100 RAISES IndexError\r
    try:\r
        val = district[100]\r
    except IndexError:\r
        print("district[100]     -> Raised IndexError (Single index is strict!)")\r
\r
    # Slicing at index 100 DOES NOT raise error; returns empty string\r
    safe_slice1 = district[100:200]\r
    print(f"district[100:200] -> '{safe_slice1}' (Length: {len(safe_slice1)}) -> Completely safe!")\r
\r
    # Slicing with oversized stop clamps automatically to string length\r
    safe_slice2 = district[2:999]\r
    print(f"district[2:999]   -> '{safe_slice2}' (Clamped to end of string)")\r
\r
\r
def practical_data_extraction():\r
    print("\\n" + "=" * 60)\r
    print("4. PRACTICAL REAL-WORLD SLICING PARSER")\r
    print("=" * 60)\r
\r
    # 1. Parsing standard ISO date 'YYYYMMDD'\r
    raw_date = "20260824"\r
    year = raw_date[:4]\r
    month = raw_date[4:6]\r
    day = raw_date[6:]\r
    formatted_date = f"{day}/{month}/{year}"\r
    print(f"Raw Date: '{raw_date}' -> Formatted: {formatted_date}")\r
\r
    # 2. Parsing Student Enrollment Code: DEPT-YEAR-ROLL (e.g. PY-2026-0428)\r
    roll_code = "PY-2026-0428"\r
    dept = roll_code[:2]\r
    batch_year = roll_code[3:7]\r
    student_id = roll_code[8:]\r
    print(f"Enrollment Code: '{roll_code}' -> Dept: {dept}, Year: {batch_year}, Roll: {student_id}")\r
\r
    # 3. Extracting domain name from email via slice\r
    email = "susmita.student@codernaccotax.co.in"\r
    at_index = email.index("@")\r
    username = email[:at_index]\r
    domain = email[at_index + 1:]\r
    print(f"Email: '{email}' -> User: '{username}', Domain: '{domain}'")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_basic_slicing()\r
    demonstrate_omitted_bounds_and_steps()\r
    demonstrate_slicing_safety_tolerance()\r
    practical_data_extraction()\r
`,_=`# topic2_files/string_reversing_and_palindromes.py\r
# Module: 002_007_string-processing\r
# Topic: Indexing, Slicing, Step Slicing & Reversing Strings\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
"""\r
Topic 2 - File 3: String Reversing, Negative Strides & Robust Palindrome Engine\r
Demonstrates:\r
  1. Negative step slicing: [::-1], [stop:start:-1]\r
  2. Performance comparison: s[::-1] vs ''.join(reversed(s)) vs manual loop\r
  3. Palindrome testing: Word level & phrase level (ignoring case & non-alphanumeric chars)\r
  4. Practical string manipulation tests\r
"""\r
\r
import time\r
import string\r
\r
def demonstrate_reversal_mechanics():\r
    print("=" * 60)\r
    print("1. STRING REVERSAL & NEGATIVE STRIDE MECHANICS")\r
    print("=" * 60)\r
    \r
    text = "PYTHON"\r
    print(f"Original Text : '{text}'")\r
    \r
    # 1. Full Reverse using s[::-1]\r
    # When step is negative:\r
    # default start becomes len(s)-1 (last char)\r
    # default stop becomes before index 0 (traverses all the way to start)\r
    reversed_text = text[::-1]\r
    print(f"text[::-1]    : '{reversed_text}'")\r
\r
    # 2. Slice subset in reverse: start=4 ('O'), stop=1 ('Y'), step=-1\r
    # Extracts indices: 4, 3, 2 (stops before 1) -> 'O', 'H', 'T'\r
    sub_rev = text[4:1:-1]\r
    print(f"text[4:1:-1]  : '{sub_rev}' (Indices 4, 3, 2 -> 'OHT')")\r
\r
    # 3. Alternative reversing via reversed() iterator\r
    reversed_iter = "".join(reversed(text))\r
    print(f"''.join(reversed(text)) : '{reversed_iter}'")\r
\r
\r
def is_palindrome_strict(text: str) -> bool:\r
    """Checks if a single word is an exact palindrome."""\r
    return text == text[::-1]\r
\r
\r
def is_palindrome_advanced(phrase: str) -> bool:\r
    """\r
    Robust Palindrome Verifier:\r
    1. Converts all letters to lowercase\r
    2. Filters out punctuation, symbols, and spaces\r
    3. Compares sanitized string with its reverse\r
    """\r
    # Keep only alphanumeric characters and lowercase them\r
    sanitized = "".join(ch.lower() for ch in phrase if ch.isalnum())\r
    return sanitized == sanitized[::-1]\r
\r
\r
def test_palindrome_cases():\r
    print("\\n" + "=" * 60)\r
    print("2. PALINDROME VERIFICATION (WORDS & PHRASES)")\r
    print("=" * 60)\r
\r
    test_words = ["radar", "madam", "kayak", "nayan", "level", "kolkata", "python"]\r
    print("--- Single Word Strict Palindrome Check ---")\r
    for word in test_words:\r
        res = is_palindrome_strict(word)\r
        status = "[PALINDROME]" if res else "[NOT PALINDROME]"\r
        print(f"'{word:<10}' -> Reversed: '{word[::-1]:<10}' -> {status}")\r
\r
    print("\\n--- Advanced Phrase-Level Palindrome Check ---")\r
    phrases = [\r
        "A man, a plan, a canal: Panama!",\r
        "Was it a car or a cat I saw?",\r
        "No lemon, no melon",\r
        "Coder & AccoTax Barrackpore",\r
        "Step on no pets",\r
        "Live on time, emit no evil"\r
    ]\r
    for p in phrases:\r
        res = is_palindrome_advanced(p)\r
        status = "[YES - PALINDROME]" if res else "[NO - NOT PALINDROME]"\r
        sanitized = "".join(ch.lower() for ch in p if ch.isalnum())\r
        print(f"Original : \\"{p}\\"")\r
        print(f"Cleaned  : \\"{sanitized}\\" (Rev: \\"{sanitized[::-1]}\\") -> {status}\\n")\r
\r
\r
def benchmark_reversal_methods():\r
    print("=" * 60)\r
    print("3. BENCHMARK: s[::-1] VS reversed() VS Loop")\r
    print("=" * 60)\r
\r
    sample = "CoderAndAccoTaxBarrackporeWestBengalIndia" * 1000  # 41,000 chars\r
    iterations = 500\r
\r
    # Method A: Slice s[::-1] (Direct C-level memcpy in CPython)\r
    start_a = time.perf_counter()\r
    for _ in range(iterations):\r
        res_a = sample[::-1]\r
    time_a = time.perf_counter() - start_a\r
\r
    # Method B: ''.join(reversed(s)) (Iterator approach)\r
    start_b = time.perf_counter()\r
    for _ in range(iterations):\r
        res_b = "".join(reversed(sample))\r
    time_b = time.perf_counter() - start_b\r
\r
    # Method C: Accumulator Loop (Slow string concatenation)\r
    # Run only 1 iteration for safety\r
    start_c = time.perf_counter()\r
    res_c = ""\r
    for ch in sample[:1000]:  # only first 1,000 chars for loop demo\r
        res_c = ch + res_c\r
    time_c = time.perf_counter() - start_c\r
\r
    print(f"String Size       : {len(sample):,} characters")\r
    print(f"Iterations        : {iterations}")\r
    print(f"Method A (s[::-1]): {time_a * 1000:.3f} ms (Fastest - C-level stride)")\r
    print(f"Method B (join)   : {time_b * 1000:.3f} ms ({time_b / time_a:.2f}x slower)")\r
    print(f"Method C (Loop)   : {time_c * 1000:.3f} ms (for 1,000 chars only - Avoid!)")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_reversal_mechanics()\r
    test_palindrome_cases()\r
    benchmark_reversal_methods()\r
`,j=`# topic2_files/log_parser_and_packet_extractor.py\r
# Module: 002_007_string-processing\r
# Topic: Indexing, Slicing, Step Slicing & Reversing Strings\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
"""\r
Topic 2 - File 4: Real-World Log & Payment Packet Parser using Fixed-Width Slicing\r
Demonstrates:\r
  1. Parsing fixed-width legacy telecommunication & payment transaction streams\r
  2. Slicing structured fields: Timestamp, Log Level, IP, Txn ID, Amount, Status\r
  3. Defensive parsing with boundary slicing and field trimming\r
  4. Aggregate summary metrics (Total ₹ volume, failed transactions)\r
"""\r
\r
from typing import List, Dict, Any\r
\r
# Simulated fixed-width telemetry packets from Coder & AccoTax Payment Gateway\r
RAW_TRANSACTION_LOGS = [\r
    "2026-08-24 14:02:15 INFO  192.168.001.045 TXN-940281048201 0004500.00 SUCCESS User Susmita enrolled Python Pro",\r
    "2026-08-24 14:05:33 WARN  192.168.001.102 TXN-940281048202 0001200.50 RETRY   Temporary payment gateway timeout",\r
    "2026-08-24 14:08:19 ERROR 103.045.022.019 TXN-940281048203 0015000.00 FAILED  Insufficient balance in card",\r
    "2026-08-24 14:12:01 INFO  192.168.001.088 TXN-940281048204 0008500.00 SUCCESS User Rahul paid Web Dev advance",\r
    "2026-08-24 14:15:40 INFO  192.168.001.012 TXN-940281048205 0003200.00 SUCCESS User Ankan enrolled Data Analytics",\r
    "2026-08-24 14:22:11 ERROR 103.045.022.077 TXN-940281048206 0004500.00 FAILED  Card expired",\r
]\r
\r
class FixedWidthPacketParser:\r
    """Parses fixed-width telemetry records using exact slice boundaries."""\r
    \r
    # Slice coordinate layout: (start, stop)\r
    TIMESTAMP_SLICE = (0, 19)\r
    LEVEL_SLICE     = (20, 25)\r
    IP_SLICE        = (26, 41)\r
    TXN_ID_SLICE    = (42, 58)\r
    AMOUNT_SLICE    = (59, 69)\r
    STATUS_SLICE    = (70, 78)\r
    PAYLOAD_SLICE   = (78, None)  # Slices to the end of line\r
\r
    @classmethod\r
    def parse_line(cls, record: str) -> Dict[str, Any]:\r
        """Extracts and sanitizes fields from a single fixed-width string."""\r
        return {\r
            "timestamp": record[cls.TIMESTAMP_SLICE[0]:cls.TIMESTAMP_SLICE[1]].strip(),\r
            "level": record[cls.LEVEL_SLICE[0]:cls.LEVEL_SLICE[1]].strip(),\r
            "ip_address": record[cls.IP_SLICE[0]:cls.IP_SLICE[1]].strip(),\r
            "txn_id": record[cls.TXN_ID_SLICE[0]:cls.TXN_ID_SLICE[1]].strip(),\r
            "amount": float(record[cls.AMOUNT_SLICE[0]:cls.AMOUNT_SLICE[1]].strip()),\r
            "status": record[cls.STATUS_SLICE[0]:cls.STATUS_SLICE[1]].strip(),\r
            "message": record[cls.PAYLOAD_SLICE[0]:].strip(),\r
        }\r
\r
    @classmethod\r
    def parse_all(cls, logs: List[str]) -> List[Dict[str, Any]]:\r
        return [cls.parse_line(line) for line in logs]\r
\r
\r
def run_payment_audit():\r
    print("=" * 75)\r
    print("CODER & ACCOTAX - BARRACKPORE PAYMENT TRANSACTION AUDIT")\r
    print("=" * 75)\r
    print(f"Parsing {len(RAW_TRANSACTION_LOGS)} incoming fixed-width payment packets...\\n")\r
\r
    parsed_records = FixedWidthPacketParser.parse_all(RAW_TRANSACTION_LOGS)\r
\r
    # Display Parsed Structured Table\r
    header = f"{'TIMESTAMP':<20} | {'STATUS':<8} | {'AMOUNT (INR)':>12} | {'TXN ID':<18} | {'MESSAGE'}"\r
    print(header)\r
    print("-" * len(header))\r
\r
    total_revenue = 0.0\r
    successful_count = 0\r
    failed_count = 0\r
\r
    for r in parsed_records:\r
        status_tag = "[OK]  " if r["status"] == "SUCCESS" else ("[WARN]" if r["status"] == "RETRY" else "[FAIL]")\r
        print(f"{r['timestamp']:<20} | {status_tag} {r['status']:<7} | INR {r['amount']:>10.2f} | {r['txn_id']:<18} | {r['message']}")\r
        \r
        if r["status"] == "SUCCESS":\r
            total_revenue += r["amount"]\r
            successful_count += 1\r
        elif r["status"] == "FAILED":\r
            failed_count += 1\r
\r
    print("-" * len(header))\r
    print("\\n=== AUDIT SUMMARY ===")\r
    print(f"  * Total Processed Packets : {len(parsed_records)}")\r
    print(f"  * Successful Payments     : {successful_count}")\r
    print(f"  * Failed Transactions     : {failed_count}")\r
    print(f"  * Total Collected Revenue : INR {total_revenue:,.2f}")\r
\r
\r
if __name__ == "__main__":\r
    run_payment_audit()\r
`,E=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
            PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_007: STRING PROCESSING\r
        TOPIC 2: INDEXING, SLICING, STEP SLICING & REVERSING STRINGS\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. ZERO-BASED & NEGATIVE INDEXING GRID\r
--------------------------------------------------------------------------------\r
  In Python, string sequences are indexed starting from 0 on the left (positive\r
  indices) and from -1 on the right (negative indices).\r
\r
  Example String: "B A R R A C K P O R E" (Length = 11)\r
\r
   Positive Index:   0   1   2   3   4   5   6   7   8   9  10\r
   Characters    : | B | A | R | R | A | C | K | P | O | R | E |\r
   Negative Index: -11 -10  -9  -8  -7  -6  -5  -4  -3  -2  -1\r
\r
  • Formula for Negative Index:  neg_index = pos_index - len(s)\r
  • Property: s[0] == s[-len(s)] and s[len(s) - 1] == s[-1]\r
  • Note: Python has NO 'char' type. s[i] always produces a string of length 1.\r
\r
--------------------------------------------------------------------------------\r
2. SINGLE-INDEX ACCESS VS IndexError\r
--------------------------------------------------------------------------------\r
  • Valid Positive Range: 0 to len(s) - 1\r
  • Valid Negative Range: -len(s) to -1\r
  • Accessing any index outside these ranges raises:\r
      IndexError: string index out of range\r
      Example: s = "Kolkata"; s[7] -> Raises IndexError!\r
\r
--------------------------------------------------------------------------------\r
3. SLICING SYNTAX & HALF-OPEN INTERVAL: s[start:stop]\r
--------------------------------------------------------------------------------\r
  • Syntax: s[start : stop]\r
  • Rule: Includes the character at 'start', stops BEFORE 'stop' (half-open: [start, stop)).\r
  • Resulting Length:  len = stop - start  (for positive indices where stop > start)\r
  • Preservation Property: s[:k] + s[k:] == s  (for any valid index k)\r
\r
  Examples:\r
    s = "BARRACKPORE"\r
    s[0:6]  -> "BARRAC"  (characters at 0, 1, 2, 3, 4, 5)\r
    s[6:11] -> "KPORE"   (characters at 6, 7, 8, 9, 10)\r
    s[:4]   -> "BARR"    (start defaults to 0)\r
    s[7:]   -> "PORE"    (stop defaults to end of string)\r
    s[:]    -> "BARRACKPORE" (shallow copy of whole string)\r
\r
--------------------------------------------------------------------------------\r
4. SLICING TOLERANCE (NO IndexError GUARANTEE)\r
--------------------------------------------------------------------------------\r
  Unlike single-item indexing, SLICING NEVER RAISES IndexError!\r
  • If start >= len(s), Python returns an empty string "".\r
  • If stop > len(s), Python automatically clamps stop to len(s).\r
  • If start >= stop (with positive step), Python returns "".\r
\r
  Examples:\r
    s = "Hooghly"   (len = 7)\r
    s[10:20] -> ""       (Completely out of range -> returns empty string safely)\r
    s[2:999] -> "oghly"  (Clamps stop to len(s))\r
\r
--------------------------------------------------------------------------------\r
5. STEP SLICING & STRIDE: s[start:stop:step]\r
--------------------------------------------------------------------------------\r
  • Syntax: s[start : stop : step]\r
  • Default 'step' is +1.\r
  • When step > 0:\r
      Takes characters at start, start + step, start + 2*step, up to stop - 1.\r
      Example: "ABCDEF"[::2] -> "ACE" (indices 0, 2, 4)\r
\r
  • When step < 0 (Negative Stride):\r
      Traverses right-to-left.\r
      Default start becomes -1 (or len-1), default stop traverses past index 0.\r
      Example: "PYTHON"[::-1] -> "NOHTYP" (Full string reversal)\r
      Example: "PYTHON"[4:1:-1] -> "OHT" (indices 4, 3, 2)\r
\r
--------------------------------------------------------------------------------\r
6. STRING REVERSAL & PALINDROME DETECTION\r
--------------------------------------------------------------------------------\r
  1. Idiomatic Fast Reversal (C-level memcpy in CPython):\r
       reversed_str = s[::-1]\r
  2. Alternative using iterator:\r
       reversed_str = "".join(reversed(s))\r
  3. Robust Palindrome Verification:\r
       def is_palindrome(text):\r
           cleaned = "".join(ch.lower() for ch in text if ch.isalnum())\r
           return cleaned == cleaned[::-1]\r
\r
--------------------------------------------------------------------------------\r
7. COMMON MISTAKES TO AVOID\r
--------------------------------------------------------------------------------\r
  ❌ Mistake: Confusing stop index as inclusive: s[0:4] yields 4 chars (indices 0,1,2,3), NOT 5.\r
  ❌ Mistake: Expecting s[5:2] with positive step to work (returns empty string "").\r
              To traverse backwards, you MUST supply a negative step: s[5:2:-1].\r
  ❌ Mistake: Attempting in-place slice mutation: s[0:2] = "Hi" -> Raises TypeError!\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 2: INDEXING & SLICING IN PYTHON\r
================================================================================\r
`,S=[{question:"What is zero-based indexing in Python strings?",shortAnswer:"The first character of a string is at index 0, the second at 1, and the last at len(s) - 1.",explanation:"Python uses 0-based indexing for all sequence data types (strings, lists, tuples). For a string with length N, valid positive indices range from 0 to N - 1.",hint:"Counting starts at 0, not 1.",level:"basic",codeExample:`s = 'PYTHON'
print(s[0])  # 'P'
print(s[5])  # 'N'
print(len(s)) # 6`},{question:"How does negative indexing work in Python strings?",shortAnswer:"Negative indices access elements from right to left, starting at -1 for the last character and -len(s) for the first.",explanation:"Negative index -k refers to the character at position len(s) - k. For instance, in 'KOLKATA' (len=7), s[-1] is 'A' and s[-7] is 'K'.",hint:"Index -1 is the last character.",level:"basic",codeExample:`s = 'KOLKATA'
print(s[-1])  # 'A'
print(s[-2])  # 'T'
print(s[-7])  # 'K'`},{question:"Does Python have a distinct 'char' or 'character' data type?",shortAnswer:"No, indexing a single character in Python returns a string of length 1 (str).",explanation:"Unlike C, C++, or Java, Python does not have a separate char primitive type. Single characters are simply instances of the built-in str class with len(s) == 1.",hint:"type(s[0]) is always str.",level:"basic",codeExample:`s = 'Barrackpore'
ch = s[0]
print(type(ch))  # <class 'str'>
print(len(ch))   # 1`},{question:"What happens when you access a single index that is out of bounds (e.g., s = 'abc'; s[5])?",shortAnswer:"Python raises an IndexError: string index out of range.",explanation:"Single-item indexing is strict. Attempting to access an index >= len(s) or < -len(s) immediately terminates execution with an IndexError.",hint:"Direct indexing out of range raises IndexError.",level:"basic",codeExample:`s = 'abc'
try:
    print(s[10])
except IndexError as e:
    print(e)  # string index out of range`},{question:"What is the general syntax for string slicing in Python?",shortAnswer:"string[start : stop : step]",explanation:"Slicing extracts a substring. 'start' is the starting index (inclusive), 'stop' is the ending index (exclusive), and 'step' is the stride (optional, defaults to 1).",hint:"[start:stop:step]",level:"basic",codeExample:`s = 'PROGRAMMING'
print(s[0:4])    # 'PROG'
print(s[3:7])    # 'GRAM'
print(s[0:10:2]) # 'PRAMI'`},{question:"Why is Python slicing described as a 'half-open interval' [start, stop)?",shortAnswer:"Because it includes the character at 'start' but excludes the character at 'stop'.",explanation:"The half-open interval ensures that the number of extracted characters equals (stop - start) when step is 1, and allows clean consecutive partitioning: s[:k] + s[k:] == s.",hint:"Start is included, stop is excluded.",level:"basic",codeExample:`s = 'PYTHON'
# Length of slice [1:4] is exactly 4 - 1 = 3 ('YTH')
print(s[1:4])
print(s[:3] + s[3:] == s)  # True`},{question:"What are the default values when start or stop are omitted in a slice?",shortAnswer:"Start defaults to 0 (or len-1 if step < 0), and stop defaults to len(s) (or before index 0 if step < 0).",explanation:"Writing s[:stop] slices from index 0 up to stop-1. Writing s[start:] slices from start to the very end of the string. Writing s[:] creates a shallow copy of the entire string.",hint:"Defaults extend from the start to the end.",level:"basic",codeExample:`s = 'Hooghly'
print(s[:4])   # 'Hoog'
print(s[4:])   # 'hly'
print(s[:])    # 'Hooghly'`},{question:"Why does slicing out of bounds (e.g., s[10:20]) NOT raise an IndexError?",shortAnswer:"Python slicing is tolerant and automatically clamps indices to valid string boundaries.",explanation:"Unlike single index access, slicing gracefully clamps oversized indices to len(s) and out-of-range starting indices to valid bounds, returning an empty string '' if no valid range exists.",hint:"Slices clamp indices rather than raising errors.",level:"moderate",codeExample:`s = 'Kolkata'
print(repr(s[100:200]))  # ''
print(repr(s[2:999]))    # 'lkata'`},{question:"What does step slicing s[::2] do?",shortAnswer:"It extracts every second character starting from index 0 (indices 0, 2, 4, 6...).",explanation:"The step value defines the stride between elements. A step of +2 skips 1 character after every extracted character.",hint:"Stride jumps by the step amount.",level:"basic",codeExample:`s = 'ABCDEFGHIJ'
print(s[::2])  # 'ACEGI'
print(s[1::2]) # 'BDFHJ'`},{question:"How do you reverse a string idiomatically in Python using slicing?",shortAnswer:"Using the slice s[::-1].",explanation:"When step is -1 and start/stop are omitted, start defaults to the last index and stop traverses backwards past the first index, effectively reversing the string in C-level optimized memory.",hint:"s[::-1] reverses a string.",level:"basic",codeExample:`word = 'BARRACKPORE'
print(word[::-1])  # 'EROPKCARRAB'`},{question:"What is the difference between s[::-1] and ''.join(reversed(s))?",shortAnswer:"s[::-1] is a fast C-level memory copy; reversed(s) creates a reverse iterator object that must be joined.",explanation:"s[::-1] is typically 2x-4x faster because CPython handles slice strides directly in native C without iterator object overhead.",hint:"s[::-1] is direct slicing; reversed() is an iterator.",level:"moderate",codeExample:`s = 'Python'
print(s[::-1])             # 'nohtyP'
print(''.join(reversed(s))) # 'nohtyP'`},{question:"How do you check if a word is a palindrome using slicing in Python?",shortAnswer:"word == word[::-1]",explanation:"If a string is identical to its reversed slice, it is a palindrome.",hint:"Compare the string with its reverse slice.",level:"basic",codeExample:`def is_palindrome(w):
    return w == w[::-1]

print(is_palindrome('radar'))  # True
print(is_palindrome('python')) # False`},{question:"What is the result of s[5:2] with default step (+1)?",shortAnswer:"An empty string ''",explanation:"With a positive step (+1), slicing only progresses from left to right. Since start (5) is greater than stop (2), the slice condition is immediately false and returns ''.",hint:"When start > stop with positive step, result is empty.",level:"moderate",codeExample:`s = 'DEVELOPER'
print(repr(s[5:2]))     # ''
print(repr(s[5:2:-1]))  # 'OLE' (Works with negative step!)`},{question:"What does s[5:2:-1] return for s = 'DEVELOPER'?",shortAnswer:"'OLE'",explanation:"With step = -1, traversal goes backwards from index 5 ('O') to index 3 ('E'), stopping before index 2 ('V'). The extracted characters are at indices 5, 4, 3: 'O', 'L', 'E'.",hint:"Starts at 5, stops before 2, moving backwards.",level:"moderate",codeExample:`s = 'DEVELOPER'
# Indices: 0:D, 1:E, 2:V, 3:E, 4:L, 5:O, 6:P, 7:E, 8:R
print(s[5:2:-1])  # 'OLE'`},{question:"What error occurs if you try to assign to a slice: s[0:2] = 'AB'?",shortAnswer:"TypeError: 'str' object does not support slice assignment.",explanation:"Because strings are immutable, slice assignment is strictly prohibited. Unlike lists (which allow list[0:2] = [1, 2]), string slices cannot be mutated.",hint:"Strings do not support slice assignment.",level:"moderate",codeExample:`s = 'hello'
try:
    s[0:2] = 'HE'
except TypeError as e:
    print(e)  # 'str' object does not support slice assignment`},{question:"How do you extract the last 4 characters of any non-empty string?",shortAnswer:"s[-4:]",explanation:"Using negative start index -4 and omitting stop captures all characters from 4 positions before the end through to the last character.",hint:"Negative start index with omitted stop.",level:"basic",codeExample:`filename = 'document_report.pdf'
print(filename[-4:])  # '.pdf'`},{question:"How do you remove the last 3 characters from a string using slicing?",shortAnswer:"s[:-3]",explanation:"s[:-3] slices from index 0 up to 3 positions before the end (excluding the last 3 characters).",hint:"Omit start, use negative stop.",level:"basic",codeExample:`text = 'BarrackporeWest'
print(text[:-4])  # 'Barrackpore'`},{question:"What is the result of s[-1:-5:-1] on s = 'abcdefg'?",shortAnswer:"'gfed'",explanation:"Starts at index -1 ('g'), moves backwards with step -1, and stops before index -5 ('c'). The extracted characters are at indices -1 ('g'), -2 ('f'), -3 ('e'), -4 ('d').",hint:"Traversing right-to-left from -1 to before -5.",level:"moderate",codeExample:`s = 'abcdefg'
print(s[-1:-5:-1])  # 'gfed'`},{question:"How do you calculate the length of a slice s[start:stop:step] theoretically?",shortAnswer:"max(0, math.ceil((stop - start) / step)) when indices are within bounds.",explanation:"For step > 0 and stop > start, the length is ceil((stop - start) / step). If start >= stop, the length is 0.",hint:"Ceil of difference divided by step.",level:"complex",codeExample:`import math
s = '0123456789'
start, stop, step = 1, 8, 2
slice_len = len(s[start:stop:step])
formula_len = max(0, math.ceil((stop - start) / step))
print(slice_len == formula_len)  # True (4: '1357')`},{question:"How do you write a robust phrase palindrome verifier that ignores spaces and punctuation?",shortAnswer:"Filter for alphanumeric characters, lowercase them, and compare with the reversed string.",explanation:"Using a generator expression with ch.isalnum() and ch.lower() removes symbols and standardizes case before applying [::-1].",hint:"Clean characters with isalnum() before reversing.",level:"moderate",codeExample:`def is_phrase_palindrome(phrase):
    clean = ''.join(ch.lower() for ch in phrase if ch.isalnum())
    return clean == clean[::-1]

print(is_phrase_palindrome('A man, a plan, a canal: Panama!')) # True`},{question:"Does slicing a string in Python create a copy or a view?",shortAnswer:"In standard CPython, slicing a string creates a brand-new string copy in memory.",explanation:"Because Python strings are immutable and compact (PEP 393), slices create new string instances containing copies of the character bytes. (Unlike memoryview or numpy slices, which share buffer pointers).",hint:"String slices allocate new string objects.",level:"complex",codeExample:`s = 'Hello Kolkata'
sub = s[0:5]
print(id(s) != id(sub))  # True (Distinct heap object)`},{question:"What is the difference between s[0] and s[0:1]?",shortAnswer:"s[0] raises an IndexError if s is empty; s[0:1] safely returns '' without error.",explanation:"Both return the first character when s is non-empty. However, on an empty string s = '', s[0] crashes with IndexError, whereas s[0:1] evaluates safely to ''.",hint:"Single index is strict; slice is fault-tolerant.",level:"moderate",codeExample:`s = ''
# print(s[0])   # IndexError!
print(repr(s[0:1]))  # '' (Safe!)`},{question:"How do you split a string into two equal halves using slicing?",shortAnswer:"mid = len(s) // 2; first_half = s[:mid]; second_half = s[mid:]",explanation:"Integer division // computes the midpoint index, dividing the string into two halves that cleanly recombine as s[:mid] + s[mid:] == s.",hint:"Use len(s) // 2 as the slice boundary.",level:"basic",codeExample:`s = 'Barrackpore'
mid = len(s) // 2
print(s[:mid], '|', s[mid:])  # 'Barra | ckpore'`},{question:"What does the slice s[::] do?",shortAnswer:"It returns a shallow copy of the entire string.",explanation:"With all three parameters omitted, start defaults to 0, stop defaults to len(s), and step defaults to 1, producing the full string.",hint:"Same as s[:]",level:"basic",codeExample:`s = 'Python'
print(s[::] == s)  # True`},{question:"How is fixed-width text parsing implemented using slicing?",shortAnswer:"By defining constant (start, stop) tuples for each column and slicing each line at those boundaries.",explanation:"Fixed-width data streams (legacy mainframe dumps, telecommunication records, bank slips) have fixed character offsets, making slicing (e.g., line[0:10], line[10:25]) the fastest parsing strategy.",hint:"Define fixed column ranges and slice lines.",level:"complex",codeExample:`record = '2026-08-24TXN94028SUCCESS'
date = record[:10]
txn = record[10:18]
status = record[18:]
print(date, txn, status)  # 2026-08-24 TXN94028 SUCCESS`}];function L(){const c=d.useRef([]),[o,x]=d.useState("indexing"),[p,f]=d.useState("s[0:6]");d.useEffect(()=>{const n=new IntersectionObserver(t=>{t.forEach(s=>{s.isIntersecting&&s.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return c.current.forEach(t=>{t&&n.observe(t)}),()=>n.disconnect()},[]);const a=n=>{n&&!c.current.includes(n)&&c.current.push(n)},i="BARRACKPORE".split(""),h=[{label:"s[0:6]",desc:"First 6 characters (indices 0..5)",result:"BARRAC",activeIndices:[0,1,2,3,4,5]},{label:"s[6:]",desc:"From index 6 to the end",result:"KPORE",activeIndices:[6,7,8,9,10]},{label:"s[:4]",desc:"Prefix: start omitted defaults to 0",result:"BARR",activeIndices:[0,1,2,3]},{label:"s[-4:]",desc:"Suffix: last 4 characters",result:"PORE",activeIndices:[7,8,9,10]},{label:"s[::2]",desc:"Stride 2: every second character",result:"BRCOE",activeIndices:[0,2,4,6,8,10]},{label:"s[::-1]",desc:"Full string reversal (negative stride)",result:"EROPKCARRAB",activeIndices:[10,9,8,7,6,5,4,3,2,1,0]},{label:"s[5:1:-1]",desc:"Reverse subset: indices 5, 4, 3, 2",result:"CARR",activeIndices:[5,4,3,2]},{label:"s[100:200]",desc:"Oversized range: Fault-tolerant empty string",result:'""',activeIndices:[]}],m=h.find(n=>n.label===p)||h[0];return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-cyan-500/30 selection:text-cyan-200",children:[e.jsx("style",{children:`
        .section-hidden {
          transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .section-visible {
          transform: translateY(0);
        }
        @keyframes pulseGlowCyan {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(6, 182, 212, 0.4)); }
          50% { filter: drop-shadow(0 0 10px rgba(6, 182, 212, 0.8)); }
        }
        .animate-glow-cyan {
          animation: pulseGlowCyan 3s infinite ease-in-out;
        }
      `}),e.jsxs("header",{ref:a,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Segment 2 • Module 002_007"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-blue-950/80 text-blue-300 px-3 py-1 rounded-full border border-blue-800/80 shadow-sm shadow-blue-950/50",children:"Topic 2"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"String Processing & Pattern Handling"})]}),e.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:"Indexing, Slicing, Step Slicing & Reversing"}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master dual-direction sequence indexing (0-based & negative), the half-open interval ",e.jsx("code",{className:"text-cyan-400 font-mono",children:"[start:stop)"}),", step strides ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"[::step]"}),", idiomatic reversal ",e.jsx("code",{className:"text-pink-400 font-mono",children:"s[::-1]"}),", and fault-tolerant parsing."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🎯 Zero-Based (0..N-1) & Negative (-1..-N)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"✂️ Half-Open Interval [start:stop)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ Step Strides & s[::-1] Reversal"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Fault-Tolerant Boundary Clamping"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. Sequence Coordinate System & Boundary Rules"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["In Python, strings are ordered, indexed collections of characters. Because Python sequences are indexed symmetrically from both ends, every single position has two valid coordinates: a ",e.jsx("strong",{className:"text-cyan-400",children:"positive index"})," (0 to ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"len - 1"}),") and a ",e.jsx("strong",{className:"text-purple-400",children:"negative index"})," (-1 to ",e.jsx("code",{className:"text-purple-300 font-mono",children:"-len"}),")."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg shadow-cyan-950/30 transition-all duration-300 hover:scale-[1.01] hover:border-cyan-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"➡️"})," Left-to-Right (0-Based)"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Index ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"0"})," is the first character. The last character is at ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"len(s) - 1"}),"."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg shadow-purple-950/30 transition-all duration-300 hover:scale-[1.01] hover:border-purple-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"⬅️"})," Right-to-Left (Negative)"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Index ",e.jsx("code",{className:"text-purple-300 font-mono",children:"-1"})," is the last character. The first character is at ",e.jsx("code",{className:"text-purple-300 font-mono",children:"-len(s)"}),"."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 shadow-lg shadow-emerald-950/30 transition-all duration-300 hover:scale-[1.01] hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"✂️"})," Half-Open Slice [start:stop)"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Slices include ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"start"})," and stop strictly before ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"stop"}),". Length is ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"stop - start"}),"."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-cyan-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-2",children:"Indexing vs Slicing: The Critical Difference in Error Handling"}),e.jsxs("p",{className:"text-sm sm:text-base text-slate-300 leading-relaxed mb-2",children:["• ",e.jsx("strong",{className:"text-rose-400",children:"Single Indexing is Strict:"})," Accessing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"s[100]"})," when ",e.jsx("code",{className:"text-rose-300 font-mono",children:"len(s) = 10"})," instantly crashes with an ",e.jsx("code",{className:"text-rose-300 font-mono",children:"IndexError: string index out of range"}),"."]}),e.jsxs("p",{className:"text-sm sm:text-base text-slate-300 leading-relaxed",children:["• ",e.jsx("strong",{className:"text-emerald-400",children:"Slicing is Fault-Tolerant:"})," Slicing ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"s[100:200]"})," NEVER raises an error! Python gracefully clamps out-of-range boundaries and returns an empty string ",e.jsx("code",{className:"text-emerald-300 font-mono",children:'""'})," or the available subset."]})]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"🔍"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visual Architecture & Index Mapping"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>x("indexing"),className:l("px-3 py-1.5 rounded-lg transition-all",o==="indexing"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Dual Index Grid"}),e.jsx("button",{onClick:()=>x("slicing"),className:l("px-3 py-1.5 rounded-lg transition-all",o==="slicing"?"bg-emerald-900/50 text-emerald-300 border border-emerald-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Half-Open Boundaries"}),e.jsx("button",{onClick:()=>x("reversal"),className:l("px-3 py-1.5 rounded-lg transition-all",o==="reversal"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Step & Reversal s[::-1]"})]})]}),e.jsxs("p",{className:"text-slate-300 mb-6 text-base",children:["Examining character memory slots for the string ",e.jsx("code",{className:"text-cyan-400 font-mono",children:'"BARRACKPORE"'})," (",e.jsx("code",{className:"text-slate-400 font-mono",children:"len = 11"}),")."]}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:o==="indexing"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"POSITIVE INDICES (0 to len - 1)"}),e.jsx("text",{x:"30",y:"270",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"NEGATIVE INDICES (-1 to -len)"}),i.map((n,t)=>{const s=40+t*72,r=t-i.length;return e.jsxs("g",{children:[e.jsx("rect",{x:s,y:"45",width:"60",height:"28",rx:"6",fill:"#082f49",stroke:"#0284c7",strokeWidth:"1"}),e.jsx("text",{x:s+30,y:"64",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",textAnchor:"middle",children:t}),e.jsx("rect",{x:s,y:"85",width:"60",height:"75",rx:"8",fill:"#1e293b",stroke:"#475569",strokeWidth:"1.5"}),e.jsx("text",{x:s+30,y:"132",fill:"#f8fafc",fontSize:"24",fontWeight:"extrabold",textAnchor:"middle",children:n}),e.jsx("path",{d:`M ${s+30} 170 L ${s+30} 185`,stroke:"#64748b",strokeWidth:"1.5",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:s,y:"195",width:"60",height:"28",rx:"6",fill:"#3b0764",stroke:"#9333ea",strokeWidth:"1"}),e.jsx("text",{x:s+30,y:"214",fill:"#d8b4fe",fontSize:"14",fontWeight:"bold",textAnchor:"middle",children:r})]},t)}),e.jsx("rect",{x:"40",y:"285",width:"800",height:"38",rx:"6",fill:"#090d16",stroke:"#334155"}),e.jsxs("text",{x:"60",y:"309",fill:"#94a3b8",fontSize:"13",children:["Symmetry Formula: ",e.jsx("tspan",{fill:"#38bdf8",fontWeight:"bold",children:"s[0] == s[-11] ('B')"}),"  |  ",e.jsx("tspan",{fill:"#d8b4fe",fontWeight:"bold",children:"s[10] == s[-1] ('E')"}),"  |  ",e.jsx("tspan",{fill:"#fca5a5",fontWeight:"bold",children:"s[11] → IndexError!"})]})]}):o==="slicing"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#34d399",fontSize:"14",fontWeight:"bold",children:'HALF-OPEN SLICE INTERVAL: s[0:6] = "BARRAC"'}),i.map((n,t)=>{const s=40+t*72,r=t<6;return e.jsxs("g",{children:[e.jsx("line",{x1:s,y1:"45",x2:s,y2:"175",stroke:t===0||t===6?"#10b981":"#334155",strokeWidth:t===0||t===6?"2.5":"1",strokeDasharray:t===0||t===6?"none":"3,3"}),e.jsxs("text",{x:s,y:"40",fill:t===0?"#34d399":t===6?"#f43f5e":"#64748b",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:["|",t]}),e.jsx("rect",{x:s+6,y:"60",width:"60",height:"70",rx:"6",fill:r?"#064e3b":"#1e293b",stroke:r?"#10b981":"#475569",strokeWidth:r?"2":"1"}),e.jsx("text",{x:s+36,y:"104",fill:r?"#a7f3d0":"#94a3b8",fontSize:"22",fontWeight:"bold",textAnchor:"middle",children:n})]},t)}),e.jsx("line",{x1:832,y1:"45",x2:832,y2:"175",stroke:"#334155",strokeWidth:"1",strokeDasharray:"3,3"}),e.jsx("text",{x:832,y:"40",fill:"#64748b",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"|11"}),e.jsx("rect",{x:"40",y:"160",width:432,height:"32",rx:"6",fill:"#065f46",stroke:"#34d399"}),e.jsx("text",{x:256,y:"181",fill:"#ecfdf5",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"s[0:6] Extracted: 'BARRAC' (Length: 6 - 0 = 6 items)"}),e.jsx("rect",{x:472,y:"160",width:360,height:"32",rx:"6",fill:"#1e1b4b",stroke:"#6366f1"}),e.jsx("text",{x:40+8.5*72,y:"181",fill:"#e0e7ff",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"s[6:11] Extracted: 'KPORE' (5 items)"}),e.jsx("rect",{x:"40",y:"220",width:"800",height:"95",rx:"8",fill:"#090d16",stroke:"#334155"}),e.jsx("text",{x:"60",y:"250",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"Key Invariant: s[:k] + s[k:] == s"}),e.jsx("text",{x:"60",y:"275",fill:"#cbd5e1",fontSize:"13",children:"Because 'stop' is exclusive, slicing at boundary index 6 partitions the string cleanly without overlapping or dropping characters:"}),e.jsx("text",{x:"60",y:"298",fill:"#a7f3d0",fontSize:"13",fontStyle:"italic",children:'"BARRAC" (s[:6]) + "KPORE" (s[6:]) == "BARRACKPORE" (s)'})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#f43f5e",fontSize:"14",fontWeight:"bold",children:"STEP STRIDE: s[::2] (EVERY 2nd CHAR) VS REVERSAL: s[::-1]"}),e.jsxs("g",{transform:"translate(0, 15)",children:[e.jsx("text",{x:"40",y:"45",fill:"#38bdf8",fontSize:"13",fontWeight:"bold",children:"1. Stride +2: s[::2] (Even Indices 0, 2, 4, 6, 8, 10)"}),i.map((n,t)=>{const s=40+t*72,r=t%2===0;return e.jsxs("g",{children:[e.jsx("rect",{x:s,y:"60",width:"60",height:"50",rx:"6",fill:r?"#0c4a6e":"#1e293b",stroke:r?"#0ea5e9":"#334155",strokeWidth:r?"2":"1"}),e.jsx("text",{x:s+30,y:"92",fill:r?"#38bdf8":"#64748b",fontSize:"18",fontWeight:"bold",textAnchor:"middle",children:n}),e.jsxs("text",{x:s+30,y:"125",fill:r?"#7dd3fc":"#475569",fontSize:"11",textAnchor:"middle",children:["i=",t]})]},t)}),e.jsx("text",{x:"40",y:"150",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"Result of s[::2] → 'BRCOE'"})]}),e.jsxs("g",{transform:"translate(0, 165)",children:[e.jsx("text",{x:"40",y:"35",fill:"#f43f5e",fontSize:"13",fontWeight:"bold",children:"2. Negative Stride -1: s[::-1] (Right-to-Left C-Memcpy Reversal)"}),e.jsx("rect",{x:"40",y:"45",width:"800",height:"65",rx:"8",fill:"#4c0519",stroke:"#e11d48",strokeWidth:"1.5"}),e.jsx("text",{x:"60",y:"72",fill:"#ffe4e6",fontSize:"14",fontWeight:"bold",children:"s[::-1] Output: 'EROPKCARRAB'"}),e.jsx("text",{x:"60",y:"96",fill:"#fda4af",fontSize:"12",children:"Traverses from index 10 down to 0 in a single pass at native C speed without creating iterator overhead."})]})]})})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Slice Experiment Playground"})]}),e.jsxs("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:["Click any preset slice below to see how Python evaluates boundary indices on the character string ",e.jsx("code",{className:"text-cyan-400 font-mono",children:'"BARRACKPORE"'}),":"]}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8",children:h.map(n=>e.jsxs("button",{onClick:()=>f(n.label),className:l("p-3 rounded-xl text-left border transition-all duration-200",p===n.label?"bg-cyan-950/80 border-cyan-500 shadow-lg shadow-cyan-950/50 text-cyan-200":"bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"),children:[e.jsx("div",{className:"font-mono font-bold text-sm text-cyan-300",children:n.label}),e.jsx("div",{className:"text-xs text-slate-400 mt-1 line-clamp-1",children:n.desc})]},n.label))}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800/90 space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400",children:"Current Slice Expression"}),e.jsx("div",{className:"text-2xl font-mono font-bold text-cyan-400 mt-0.5",children:p})]}),e.jsxs("div",{className:"sm:text-right",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400",children:"Extracted Substring"}),e.jsxs("div",{className:"text-2xl font-mono font-bold text-emerald-400 mt-0.5",children:['"',m.result.replace(/^"|"$/g,""),'"']})]})]}),e.jsx("div",{className:"overflow-x-auto pb-2",children:e.jsx("div",{className:"flex items-center gap-2 min-w-[650px] justify-between",children:i.map((n,t)=>{const s=m.activeIndices.includes(t);return e.jsxs("div",{className:l("flex-1 flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-300",s?"bg-cyan-950/90 border-cyan-400 shadow-lg shadow-cyan-950 scale-105":"bg-slate-900/60 border-slate-800/80 opacity-40"),children:[e.jsxs("span",{className:"text-xs font-mono text-slate-400",children:["i=",t]}),e.jsx("span",{className:l("text-2xl font-extrabold my-1",s?"text-cyan-200":"text-slate-500"),children:n}),e.jsx("span",{className:"text-xs font-mono text-purple-400",children:-i.length+t})]},t)})})}),e.jsxs("div",{className:"text-sm text-slate-400 italic bg-slate-900/70 p-3.5 rounded-xl border border-slate-800",children:["💡 ",e.jsx("strong",{className:"text-slate-200",children:"Behavior:"})," ",m.desc]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚙️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Complete Slicing Syntax Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Slice Syntax"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Start Index"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Stop Index"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Step Stride"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:'Example on "KOLKATA"'}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Result"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"s[start:stop]"}),e.jsx("td",{className:"py-3 px-4",children:"start"}),e.jsx("td",{className:"py-3 px-4",children:"stop (exclusive)"}),e.jsx("td",{className:"py-3 px-4 text-slate-400",children:"+1 (default)"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"s[0:3]"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"'KOL'"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"s[:stop]"}),e.jsx("td",{className:"py-3 px-4",children:"0 (default)"}),e.jsx("td",{className:"py-3 px-4",children:"stop (exclusive)"}),e.jsx("td",{className:"py-3 px-4 text-slate-400",children:"+1"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"s[:4]"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"'KOLK'"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"s[start:]"}),e.jsx("td",{className:"py-3 px-4",children:"start"}),e.jsx("td",{className:"py-3 px-4",children:"len(s) (default)"}),e.jsx("td",{className:"py-3 px-4 text-slate-400",children:"+1"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"s[3:]"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"'KATA'"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"s[:]"}),e.jsx("td",{className:"py-3 px-4",children:"0"}),e.jsx("td",{className:"py-3 px-4",children:"len(s)"}),e.jsx("td",{className:"py-3 px-4 text-slate-400",children:"+1"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"s[:]"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"'KOLKATA'"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"s[::2]"}),e.jsx("td",{className:"py-3 px-4",children:"0"}),e.jsx("td",{className:"py-3 px-4",children:"len(s)"}),e.jsx("td",{className:"py-3 px-4 text-cyan-400 font-bold",children:"+2"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"s[::2]"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"'KLAA'"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-pink-300 font-semibold",children:"s[::-1]"}),e.jsx("td",{className:"py-3 px-4",children:"len(s) - 1"}),e.jsx("td",{className:"py-3 px-4",children:"before index 0"}),e.jsx("td",{className:"py-3 px-4 text-pink-400 font-bold",children:"-1"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"s[::-1]"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"'ATAKLOK'"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-pink-300 font-semibold",children:"s[5:1:-1]"}),e.jsx("td",{className:"py-3 px-4",children:"5 ('T')"}),e.jsx("td",{className:"py-3 px-4",children:"1 ('O' excl.)"}),e.jsx("td",{className:"py-3 px-4 text-pink-400 font-bold",children:"-1"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"s[5:1:-1]"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"'TAKL'"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"s[100:200]"}),e.jsx("td",{className:"py-3 px-4",children:"Clamped"}),e.jsx("td",{className:"py-3 px-4",children:"Clamped"}),e.jsx("td",{className:"py-3 px-4 text-slate-400",children:"+1"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"s[100:200]"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400 font-bold",children:"'' (Zero Error)"})]})]})]})})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating indexing safety, slice strides, palindrome detection algorithms, and telemetry log parsing:"}),e.jsx(g,{files:[{filename:"indexing_and_bounds.py",code:N,description:"Positive/negative indexing, IndexError behavior, and defensive character access."},{filename:"slicing_and_step.py",code:v,description:"Half-open slicing interval, step strides, fault-tolerant clamping, and ISO date parsing."},{filename:"string_reversing_and_palindromes.py",code:_,description:"s[::-1] stride mechanics, phrase-level palindrome verification, and performance benchmarks."},{filename:"log_parser_and_packet_extractor.py",code:j,description:"Real-world payment transaction packet parser using exact slice boundaries."}]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Expecting Reverse Traversal without Negative Step"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"s[5:2]"})," with default positive step yields ",e.jsx("code",{className:"text-rose-300 font-mono",children:'""'})," (empty string) because positive slicing only moves forward from left to right."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Supply ",e.jsx("code",{className:"text-emerald-300",children:"s[5:2:-1]"})," with negative stride!"]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Attempting Slice Item Mutation"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-amber-300 font-mono",children:'s[0:2] = "AB"'})," crashes with ",e.jsx("code",{className:"text-amber-300 font-mono",children:"TypeError: 'str' object does not support slice assignment"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Recombine substrings: ",e.jsx("code",{className:"text-emerald-300",children:'s = "AB" + s[2:]'})]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Off-By-One Stop Index Assumption"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Beginners often think ",e.jsx("code",{className:"text-purple-300 font-mono",children:"s[0:4]"})," includes character at index 4. The stop index is strictly ",e.jsx("strong",{children:"exclusive"}),", so it extracts indices 0, 1, 2, 3 (4 characters total)."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," To include index ",e.jsx("code",{className:"text-emerald-300",children:"k"}),", pass ",e.jsx("code",{className:"text-emerald-300",children:"k + 1"})," as stop."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Direct Indexing vs Slicing Empty Strings"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["If string ",e.jsx("code",{className:"text-cyan-300 font-mono",children:'s = ""'}),", ",e.jsx("code",{className:"text-rose-400 font-mono",children:"s[0]"})," raises ",e.jsx("code",{className:"text-rose-400 font-mono",children:"IndexError"}),", while ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"s[:1]"})," safely yields ",e.jsx("code",{className:"text-emerald-400 font-mono",children:'""'}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Defensive Tip:"})," Use slice ",e.jsx("code",{className:"text-emerald-300",children:"s[:1]"})," for optional first character checks!"]})]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering sequence coordinates, half-open intervals, stride arithmetic, palindrome tests, and CPython optimization:"}),e.jsx(b,{questions:S})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with ASCII coordinate grids, slice invariants, and palindrome detection formulas:"}),e.jsx("div",{className:"mb-10",children:e.jsx(u,{content:E,filename:"python_topic2_indexing_and_slicing_notes.txt",title:"Print Topic 2 Study Notes"})}),e.jsx(y,{})]})]})]})}export{L as default};
