import{b as l,j as e,bg as p}from"./vendor-react-core-Doz9nIC6.js";import{P as j}from"./PythonFileLoader-hCi5osN-.js";import{P as y}from"./PlainTextPrint-C08xhKA4.js";import{F as _}from"./FAQTemplate-CkSqDH4B.js";import{T as w}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const v=`# topic8_files/matching_methods_and_match_objects.py\r
# Module: 002_007_string-processing\r
# Topic: Pattern Matching (search, match, findall, sub)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 8 - File 1: search() vs match() vs fullmatch() & The Match Object Anatomy\r
Demonstrates:\r
  1. The 3 primary match methods:\r
     - re.match(): Matches ONLY at the start (index 0) of the string.\r
     - re.search(): Scans anywhere in the string for the FIRST match.\r
     - re.fullmatch(): Entire string must match from start to finish.\r
  2. The Match Object:\r
     - .group(0) / .group(): Full matched text\r
     - .group(1), .group(2): Positional captured subgroups\r
     - .groups(): Tuple of all captured subgroups\r
     - .groupdict(): Dictionary of named captured groups (?P<name>...)\r
     - .start(), .end(), .span(): Substring boundary coordinates\r
"""\r
\r
import re\r
\r
def demonstrate_match_vs_search_vs_fullmatch():\r
    print("=" * 65)\r
    print("1. re.match() VS re.search() VS re.fullmatch()")\r
    print("=" * 65)\r
\r
    sample = "Student Susmita (ID: 9402) enrolled from Barrackpore."\r
    pattern_num = r"\\d+"\r
\r
    # A. re.match() - Looks ONLY at index 0\r
    match_res = re.match(pattern_num, sample)\r
    print(f"Sample: '{sample}'")\r
    print(f"Pattern: r'\\\\d+'\\n")\r
    print(f"re.match(pattern, sample)     -> {match_res} (None! Sample starts with 'S')")\r
\r
    # B. re.search() - Scans through entire string for FIRST match\r
    search_res = re.search(pattern_num, sample)\r
    print(f"re.search(pattern, sample)    -> Match Found: '{search_res.group()}' at index {search_res.span()}")\r
\r
    # C. re.fullmatch() - Entire string must match pattern\r
    full_sample = "9402"\r
    full_res = re.fullmatch(pattern_num, full_sample)\r
    print(f"re.fullmatch(r'\\\\d+', '9402')  -> Match Found: '{full_res.group()}' (Full match)")\r
    print(f"re.fullmatch(r'\\\\d+', sample)  -> {re.fullmatch(pattern_num, sample)} (None - contains non-digits)")\r
\r
\r
def demonstrate_match_object_anatomy():\r
    print("\\n" + "=" * 65)\r
    print("2. THE Match OBJECT ANATOMY & POSITIONAL GROUPS")\r
    print("=" * 65)\r
\r
    date_str = "Session Date: 2026-08-24 (Monday)"\r
    # Pattern with 3 positional groups: (Year)-(Month)-(Day)\r
    date_pattern = r"(\\d{4})-(\\d{2})-(\\d{2})"\r
\r
    m = re.search(date_pattern, date_str)\r
    if m:\r
        print(f"Target Text        : '{date_str}'")\r
        print(f"Pattern            : r'(\\\\d{{4}})-(\\\\d{{2}})-(\\\\d{{2}})'\\n")\r
        print(f"m.group() / .group(0): '{m.group(0)}' (Full Match)")\r
        print(f"m.group(1) (Year)  : '{m.group(1)}'")\r
        print(f"m.group(2) (Month) : '{m.group(2)}'")\r
        print(f"m.group(3) (Day)   : '{m.group(3)}'")\r
        print(f"m.groups() (Tuple) : {m.groups()}")\r
        print(f"m.start(), m.end() : {m.start()} to {m.end()}")\r
        print(f"m.span()           : {m.span()} (Slice: date_str[{m.start()}:{m.end()}])")\r
\r
\r
def demonstrate_named_capture_groups():\r
    print("\\n" + "=" * 65)\r
    print("3. NAMED CAPTURE GROUPS (?P<name>...) & groupdict()")\r
    print("=" * 65)\r
\r
    invoice_entry = "Invoice: INV-000942 | Amount: INR 14,337.00 | City: Barrackpore"\r
    \r
    # Named capture groups: (?P<inv_id>\\d+), (?P<amount>[\\d,]+\\.\\d{2}), (?P<city>\\w+)\r
    named_pattern = re.compile(\r
        r"Invoice:\\s*INV-(?P<inv_id>\\d+)\\s*\\|\\s*Amount:\\s*INR\\s*(?P<amount>[\\d,]+\\.\\d{2})\\s*\\|\\s*City:\\s*(?P<city>\\w+)"\r
    )\r
\r
    m = named_pattern.search(invoice_entry)\r
    if m:\r
        print(f"Entry: '{invoice_entry}'\\n")\r
        print(f"m.group('inv_id')  : '{m.group('inv_id')}'")\r
        print(f"m.group('amount')  : '{m.group('amount')}'")\r
        print(f"m.group('city')    : '{m.group('city')}'")\r
        print(f"\\nm.groupdict()      :\\n  {m.groupdict()}")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_match_vs_search_vs_fullmatch()\r
    demonstrate_match_object_anatomy()\r
    demonstrate_named_capture_groups()\r
`,T=`# topic8_files/findall_finditer_and_groups.py\r
# Module: 002_007_string-processing\r
# Topic: Pattern Matching (search, match, findall, sub)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 8 - File 2: findall() Return Rules, finditer() Streaming & re.split()\r
Demonstrates:\r
  1. re.findall() output types:\r
     - 0 groups: list of strings (full matches)\r
     - 1 group: list of strings (captured group)\r
     - 2+ groups: list of tuples of strings\r
  2. re.finditer(): Memory-efficient lazy generator of Match objects\r
  3. re.split(): Splitting strings on complex regex patterns\r
  4. Capturing parentheses in re.split(): Preserving delimiters\r
"""\r
\r
import re\r
\r
def demonstrate_findall_group_rules():\r
    print("=" * 65)\r
    print("1. re.findall() GROUP RETURN STRUCTURE RULES")\r
    print("=" * 65)\r
\r
    contacts = "Susmita: 96.5% (Barrackpore), Rahul: 88.0% (Kolkata), Priya: 92.0% (Palta)"\r
    print(f"Target Text: '{contacts}'\\n")\r
\r
    # Rule A: Zero capture groups -> Returns list of full matching strings\r
    pat_no_group = r"\\b[A-Za-z]+:\\s*\\d+\\.\\d+%"\r
    res_no_group = re.findall(pat_no_group, contacts)\r
    print("A. Zero Groups (r'\\\\b[A-Za-z]+:\\\\s*\\\\d+\\\\.\\\\d+%'):")\r
    print(f"   Returns list of full strings: {res_no_group}\\n")\r
\r
    # Rule B: Exactly One capture group -> Returns list of strings for that group\r
    pat_one_group = r"\\b([A-Za-z]+):\\s*\\d+\\.\\d+%"\r
    res_one_group = re.findall(pat_one_group, contacts)\r
    print("B. One Group (r'\\\\b([A-Za-z]+):\\\\s*\\\\d+\\\\.\\\\d+%'):")\r
    print(f"   Returns list of captured names: {res_one_group}\\n")\r
\r
    # Rule C: Two or More capture groups -> Returns list of TUPLES of strings\r
    pat_multi_groups = r"\\b([A-Za-z]+):\\s*(\\d+\\.\\d+)%\\s*\\(([A-Za-z]+)\\)"\r
    res_multi_groups = re.findall(pat_multi_groups, contacts)\r
    print("C. Three Groups (r'\\\\b([A-Za-z]+):\\\\s*(\\\\d+\\\\.\\\\d+)%\\\\s*\\\\(([A-Za-z]+)\\\\)'):")\r
    print(f"   Returns list of tuples (Name, Marks, City):")\r
    for tup in res_multi_groups:\r
        print(f"     -> {tup}")\r
\r
\r
def demonstrate_finditer_streaming():\r
    print("\\n" + "=" * 65)\r
    print("2. re.finditer(): STREAMING Match OBJECTS LAZILY")\r
    print("=" * 65)\r
\r
    log_stream = """\r
2026-08-24 10:00:15 - USER: 101 - LOGIN SUCCESS\r
2026-08-24 10:05:22 - USER: 102 - FAILED PASSWORD\r
2026-08-24 10:12:40 - USER: 101 - PURCHASE COURSE\r
"""\r
\r
    log_pattern = re.compile(\r
        r"(?P<ts>\\d{4}-\\d{2}-\\d{2}\\s\\d{2}:\\d{2}:\\d{2})\\s-\\sUSER:\\s(?P<uid>\\d+)\\s-\\s(?P<action>.+)"\r
    )\r
\r
    print("Iterating Match objects via re.finditer():")\r
    for match in log_pattern.finditer(log_stream):\r
        ts = match.group("ts")\r
        uid = match.group("uid")\r
        action = match.group("action")\r
        start_idx, end_idx = match.span()\r
        print(f"  [Span: {start_idx:>3}:{end_idx:>3}] User {uid:>3} performed '{action:<16}' at {ts}")\r
\r
\r
def demonstrate_regex_split():\r
    print("\\n" + "=" * 65)\r
    print("3. re.split(): ADVANCED REGEX DELIMITER SPLITTING")\r
    print("=" * 65)\r
\r
    # Splitting by multiple irregular separators: commas, semicolons, pipes, or spaces\r
    messy_tags = "Python,  SQL;  FastAPI |  React ,,,   TailwindCSS"\r
    clean_tokens = re.split(r"[,;|\\s]+", messy_tags.strip())\r
    print(f"Raw String     : '{messy_tags}'")\r
    print(f"re.split()     : {clean_tokens}\\n")\r
\r
    # Retaining delimiters using capturing parentheses ()\r
    formula = "10+25*4-100/5"\r
    tokens_with_delims = re.split(r"([+\\-*/])", formula)\r
    print(f"Math Formula   : '{formula}'")\r
    print(f"Captured Split : {tokens_with_delims} (Operators preserved!)")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_findall_group_rules()\r
    demonstrate_finditer_streaming()\r
    demonstrate_regex_split()\r
`,S=`# topic8_files/sub_subn_and_replacement_functions.py\r
# Module: 002_007_string-processing\r
# Topic: Pattern Matching (search, match, findall, sub)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 8 - File 3: re.sub() Backreferences, Custom Callback Functions & re.subn()\r
Demonstrates:\r
  1. re.sub() fundamentals with backreferences (\\1, \\2, \\g<name>)\r
  2. Date format conversion (ISO YYYY-MM-DD -> Indian DD-MM-YYYY)\r
  3. Dynamic transformation callbacks (Callable function passed to re.sub)\r
  4. USD to INR currency conversion using regex replacement callback\r
  5. re.subn(): Tracking total substitution counts\r
"""\r
\r
import re\r
\r
def demonstrate_backreference_substitution():\r
    print("=" * 65)\r
    print("1. re.sub() WITH BACKREFERENCES (\\\\1, \\\\2, \\\\g<name>)")\r
    print("=" * 65)\r
\r
    # 1. Swapping Date Format: ISO YYYY-MM-DD -> DD-MM-YYYY\r
    text = "Exam date: 2026-08-24. Registration deadline: 2026-08-15."\r
    date_pat = r"(\\d{4})-(\\d{2})-(\\d{2})"\r
    \r
    # \\3 is Day, \\2 is Month, \\1 is Year\r
    indian_dates = re.sub(date_pat, r"\\3-\\2-\\1", text)\r
    print(f"Original Text : '{text}'")\r
    print(f"Substituted   : '{indian_dates}'\\n")\r
\r
    # 2. Named Group Backreferences (\\g<name>)\r
    named_pat = r"(?P<first>\\w+)\\s+(?P<last>\\w+)"\r
    names = "Susmita Mukherjee, Rahul Roy, Anirban Banerjee"\r
    last_first = re.sub(named_pat, r"\\g<last>, \\g<first>", names)\r
    print(f"Original Names: '{names}'")\r
    print(f"Last, First   : '{last_first}'")\r
\r
\r
def demonstrate_callable_replacement_function():\r
    print("\\n" + "=" * 65)\r
    print("2. DYNAMIC CALLBACK REPLACEMENT FUNCTIONS IN re.sub()")\r
    print("=" * 65)\r
\r
    # Scenario: Convert USD amounts ($XX.XX) to INR (at exchange rate 1 USD = 83.5 INR)\r
    text = "Courses: Python ($55.00), SQL Analytics ($40.00), React ($65.50)."\r
    usd_pattern = r"\\$(?P<usd>\\d+(?:\\.\\d{2})?)"\r
\r
    def usd_to_inr_callback(match: re.Match) -> str:\r
        usd_val = float(match.group("usd"))\r
        inr_val = usd_val * 83.5\r
        return f"INR {inr_val:,.2f}"\r
\r
    inr_text = re.sub(usd_pattern, usd_to_inr_callback, text)\r
    print(f"USD Text : '{text}'")\r
    print(f"INR Text : '{inr_text}'\\n")\r
\r
    # Masking Email Usernames (e.g. susmita.student@gmail.com -> s*****a@gmail.com)\r
    email_text = "Contact: susmita.m@codernaccotax.co.in or admin.support@office.com"\r
    email_pat = r"(?P<user>[a-zA-Z0-9_.+-]+)@(?P<domain>[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+)"\r
\r
    def mask_email_callback(m: re.Match) -> str:\r
        u = m.group("user")\r
        d = m.group("domain")\r
        masked_user = u[0] + ("*" * (len(u) - 2)) + u[-1] if len(u) > 2 else u[0] + "*"\r
        return f"{masked_user}@{d}"\r
\r
    masked_emails = re.sub(email_pat, mask_email_callback, email_text)\r
    print(f"Masked Email Text:\\n  '{masked_emails}'")\r
\r
\r
def demonstrate_subn():\r
    print("\\n" + "=" * 65)\r
    print("3. re.subn(): TRACKING SUBSTITUTION COUNTS")\r
    print("=" * 65)\r
\r
    paragraph = "Python 2 is old. Python 2 lacks modern features. Migrate from Python 2 today."\r
    \r
    # re.subn returns a tuple: (new_string, count_of_replacements)\r
    updated_text, count = re.subn(r"Python 2", "Python 3", paragraph)\r
    print(f"Original Text     : '{paragraph}'")\r
    print(f"Updated Text      : '{updated_text}'")\r
    print(f"Total Replacements: {count} changes made.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_backreference_substitution()\r
    demonstrate_callable_replacement_function()\r
    demonstrate_subn()\r
`,E=`# topic8_files/log_parser_and_pii_redactor.py\r
# Module: 002_007_string-processing\r
# Topic: Pattern Matching (search, match, findall, sub)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 8 - File 4: Production Web Server Log Parser & PII Redactor\r
Demonstrates:\r
  1. Parsing multi-line Nginx/Apache web server logs with finditer()\r
  2. Named capture groups for structured record extraction\r
  3. Industrial PII (Personally Identifiable Information) data redactor\r
  4. Masking Indian Mobile numbers, PAN cards, and emails\r
"""\r
\r
import re\r
from typing import List, Dict, Any\r
\r
SAMPLE_WEB_LOGS = """\r
103.21.124.8 - - [24/Aug/2026:18:30:15 +0530] "GET /courses/python-pro HTTP/1.1" 200 4520 "https://codernaccotax.co.in"\r
182.74.15.92 - - [24/Aug/2026:18:31:02 +0530] "POST /api/register HTTP/1.1" 201 1024 "https://codernaccotax.co.in/register"\r
103.21.124.8 - - [24/Aug/2026:18:32:44 +0530] "GET /student/fees/invoice-9402 HTTP/1.1" 200 8920 "https://codernaccotax.co.in"\r
49.207.50.11 - - [24/Aug/2026:18:35:10 +0530] "GET /images/logo.png HTTP/1.1" 304 0 "https://codernaccotax.co.in"\r
"""\r
\r
SAMPLE_SENSITIVE_TEXT = """\r
Student Enrollment Record:\r
- Name: Susmita Mukherjee\r
- Mobile: +91 7003756860\r
- Emergency Contact: 9830012345\r
- PAN Card: ABCDE1234F\r
- Email: susmita.mukherjee@codernaccotax.co.in\r
- Fee Paid: INR 14,337.00 for Barrackpore Batch 2026.\r
"""\r
\r
class ProductionSecuritySuite:\r
    """Enterprise log parsing and privacy redaction engine."""\r
\r
    # Combined Log Format Regex Pattern with Named Groups\r
    LOG_PATTERN = re.compile(\r
        r"""\r
        ^\r
        (?P<ip>\\d{1,3}(?:\\.\\d{1,3}){3})         # Client IP Address\r
        \\s+-\\s+-\\s+\r
        \\[(?P<timestamp>[^\\]]+)\\]               # Date and time stamp\r
        \\s+\r
        "(?P<method>[A-Z]+)\\s+(?P<url>[^\\s]+)\\s+HTTP/[0-9.]+" # HTTP Request Line\r
        \\s+\r
        (?P<status>\\d{3})                       # HTTP Status Code\r
        \\s+\r
        (?P<bytes>\\d+)                          # Response Body Bytes\r
        """,\r
        re.VERBOSE | re.MULTILINE\r
    )\r
\r
    # PII Patterns for Redaction\r
    MOBILE_PATTERN = re.compile(r"(?:\\+91[\\-\\s]?)?[6-9]\\d{9}")\r
    PAN_PATTERN = re.compile(r"\\b[A-Z]{5}\\d{4}[A-Z]\\b", re.IGNORECASE)\r
    EMAIL_PATTERN = re.compile(r"\\b(?P<user>[a-zA-Z0-9_.+-]+)@(?P<domain>[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+)\\b")\r
\r
    @classmethod\r
    def parse_logs(cls, log_text: str) -> List[Dict[str, Any]]:\r
        """Parses raw server logs into structured dictionary records."""\r
        parsed_records = []\r
        for m in cls.LOG_PATTERN.finditer(log_text.strip()):\r
            rec = m.groupdict()\r
            rec["status"] = int(rec["status"])\r
            rec["bytes"] = int(rec["bytes"])\r
            parsed_records.append(rec)\r
        return parsed_records\r
\r
    @classmethod\r
    def redact_pii(cls, text: str) -> str:\r
        """Redacts sensitive PII information from text before public logging."""\r
        \r
        # 1. Mask Mobile Numbers: +91 7003756860 -> +91 ******6860\r
        def mask_mobile(m: re.Match) -> str:\r
            full = m.group(0)\r
            digits_only = re.sub(r"\\D", "", full)\r
            if len(digits_only) >= 10:\r
                last4 = digits_only[-4:]\r
                return f"+91 ******{last4}"\r
            return "[REDACTED PHONE]"\r
\r
        text = cls.MOBILE_PATTERN.sub(mask_mobile, text)\r
\r
        # 2. Mask PAN: ABCDE1234F -> AB*****4F\r
        def mask_pan(m: re.Match) -> str:\r
            pan = m.group(0).upper()\r
            return f"{pan[:2]}*****{pan[-2:]}"\r
\r
        text = cls.PAN_PATTERN.sub(mask_pan, text)\r
\r
        # 3. Mask Email: susmita.mukherjee@... -> s*****e@...\r
        def mask_email(m: re.Match) -> str:\r
            user = m.group("user")\r
            domain = m.group("domain")\r
            if len(user) > 2:\r
                masked = user[0] + ("*" * (len(user) - 2)) + user[-1]\r
            else:\r
                masked = user[0] + "*"\r
            return f"{masked}@{domain}"\r
\r
        text = cls.EMAIL_PATTERN.sub(mask_email, text)\r
\r
        return text\r
\r
\r
def run_pipeline_demo():\r
    print("=" * 75)\r
    print("CODER & ACCOTAX - PRODUCTION LOG PARSER & PII REDACTOR")\r
    print("=" * 75)\r
\r
    print("\\n--- 1. PARSED WEB SERVER LOGS (via finditer) ---")\r
    records = ProductionSecuritySuite.parse_logs(SAMPLE_WEB_LOGS)\r
    print(f"Total Structured Records Extracted: {len(records)}\\n")\r
    for r in records:\r
        print(f"IP: {r['ip']:<15} | Method: {r['method']:<4} | Status: {r['status']} | URL: {r['url']}")\r
\r
    print("\\n" + "=" * 75)\r
    print("--- 2. PRIVACY REDACTION OF SENSITIVE STUDENT DATA ---")\r
    print("=" * 75)\r
    print("ORIGINAL SENSITIVE TEXT:")\r
    print(SAMPLE_SENSITIVE_TEXT.strip())\r
\r
    print("\\nREDACTED AUDIT-SAFE OUTPUT:")\r
    redacted_output = ProductionSecuritySuite.redact_pii(SAMPLE_SENSITIVE_TEXT)\r
    print(redacted_output.strip())\r
\r
\r
if __name__ == "__main__":\r
    run_pipeline_demo()\r
`,P=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
            PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_007: STRING PROCESSING\r
        TOPIC 8: PATTERN MATCHING & SUBSTITUTION (SEARCH, MATCH, FINDALL, SUB)\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. CORE PATTERN MATCHING TRIO: match() VS search() VS fullmatch()\r
--------------------------------------------------------------------------------\r
  Method           Where it Looks               Returns on Match    Returns on Fail\r
  ------------------------------------------------------------------------------\r
  re.match(p, s)   Index 0 ONLY (Start of str)  Match object        None\r
  re.search(p, s)  Scans ENTIRE string          Match object (1st)  None\r
  re.fullmatch(p,s)Entire string must match     Match object        None\r
\r
  Example: s = "ID: 9402"\r
    re.match(r"\\d+", s)     -> None (Starts with 'I')\r
    re.search(r"\\d+", s)    -> <Match object; span=(4, 8), match='9402'>\r
    re.fullmatch(r"\\d+", s) -> None (Contains non-digits)\r
\r
--------------------------------------------------------------------------------\r
2. THE Match OBJECT ANATOMY & METHODS\r
--------------------------------------------------------------------------------\r
  Given m = re.search(r"(\\d{4})-(\\d{2})-(\\d{2})", "Date: 2026-08-24")\r
\r
  Method / Property    Sample Return Value         Description\r
  ------------------------------------------------------------------------------\r
  m.group() / group(0) "2026-08-24"                Full matched text\r
  m.group(1)           "2026"                      1st captured subgroup (Year)\r
  m.group(2)           "08"                        2nd captured subgroup (Month)\r
  m.group(3)           "24"                        3rd captured subgroup (Day)\r
  m.groups()           ("2026", "08", "24")        Tuple of all captured groups\r
  m.groupdict()        {"year": "2026", ...}       Dict if named groups used (?P<name>)\r
  m.start(), m.end()   6, 16                       Start and End index positions\r
  m.span()             (6, 16)                     Tuple of (start, end) indices\r
\r
--------------------------------------------------------------------------------\r
3. re.findall() RETURN STRUCTURE RULES\r
--------------------------------------------------------------------------------\r
  • 0 Groups in Pattern: Returns list of strings [full_match_1, full_match_2, ...]\r
  • 1 Group in Pattern : Returns list of strings [group1_match_1, group1_match_2, ...]\r
  • 2+ Groups in Pattern: Returns list of tuples [(g1, g2), (g1, g2), ...]\r
\r
--------------------------------------------------------------------------------\r
4. re.finditer(): STREAMING Match OBJECTS\r
--------------------------------------------------------------------------------\r
  • Memory-efficient iterator for large text files and web logs.\r
  • Yields Match objects lazily one at a time:\r
      for match in pattern.finditer(huge_log_stream):\r
          ip = match.group("ip")\r
          status = match.group("status")\r
\r
--------------------------------------------------------------------------------\r
5. re.sub() & re.subn(): BACKREFERENCES & DYNAMIC CALLBACKS\r
--------------------------------------------------------------------------------\r
  • Backreferences in Replacement String:\r
      re.sub(r"(\\d{4})-(\\d{2})-(\\d{2})", r"\\3-\\2-\\1", "2026-08-24") -> "24-08-2026"\r
  • Named Backreferences:\r
      re.sub(r"(?P<first>\\w+)\\s+(?P<last>\\w+)", r"\\g<last>, \\g<first>", "Susmita Mukherjee")\r
  • Dynamic Callable Callback:\r
      def mask_phone(m):\r
          return "+91 ******" + m.group()[-4:]\r
      re.sub(r"[6-9]\\d{9}", mask_phone, text)\r
  • re.subn():\r
      Returns (new_string, count_of_substitutions)\r
\r
================================================================================\r
           END OF STUDY NOTE • TOPIC 8: PATTERN MATCHING & SUBSTITUTION\r
================================================================================\r
`,A=[{question:"What is the key operational difference between re.match() and re.search()?",shortAnswer:"re.match() checks for a match ONLY at the beginning (index 0) of the string; re.search() scans through the entire string for the FIRST match anywhere.",explanation:"If a pattern occurs later in the string, re.match() will return None, while re.search() will successfully return the corresponding Match object.",hint:"match() looks at index 0 only; search() looks anywhere.",level:"basic",codeExample:`import re
text = 'Invoice #9402'
print(re.match(r'\\d+', text))   # None (Starts with 'I')
print(re.search(r'\\d+', text))  # <Match object; span=(9, 13), match='9402'>`},{question:"What does re.fullmatch() do?",shortAnswer:"It requires the ENTIRE string to match the pattern from start to end (equivalent to implicit ^...$).",explanation:"If there are any leading or trailing characters not accounted for by the pattern, re.fullmatch() returns None.",hint:"The entire string must match the pattern completely.",level:"basic",codeExample:`import re
print(re.fullmatch(r'\\d{6}', '700120'))     # Match object (Valid PIN)
print(re.fullmatch(r'\\d{6}', '700120A'))    # None (Contains 'A')`},{question:"What happens if you call .group() on the result of re.search() when no match is found?",shortAnswer:"An AttributeError is raised: 'NoneType' object has no attribute 'group'.",explanation:"When a search fails, re.search() returns None. You must always check 'if match:' or use walrus operator 'if (m := re.search(...)):' before calling .group().",hint:"Always check 'if match:' before calling .group().",level:"basic",codeExample:`import re
m = re.search(r'\\d+', 'No numbers here')
if m:
    print(m.group())
else:
    print('No match found safely!')`},{question:"What is the difference between match.group(), match.group(1), and match.groups()?",shortAnswer:"match.group() / group(0) returns the full matched string; group(1) returns the first captured subgroup; groups() returns a tuple of all captured subgroups.",explanation:"Subgroups are defined by parentheses (group1)(group2) in the regex pattern.",hint:"group(0) = whole match; group(1) = 1st group; groups() = tuple of all groups.",level:"basic",codeExample:`import re
m = re.search(r'(\\w+)-(\\d+)', 'Item-42')
print(m.group(0))  # 'Item-42'
print(m.group(1))  # 'Item'
print(m.group(2))  # '42'
print(m.groups())  # ('Item', '42')`},{question:"How do you extract named capture groups using the Match object?",shortAnswer:"match.group('name') for individual named groups, or match.groupdict() to get all named groups as a dictionary.",explanation:"Named capture groups are defined using (?P<group_name>pattern).",hint:"Use match.group('name') or match.groupdict().",level:"moderate",codeExample:`import re
m = re.search(r'(?P<course>\\w+):\\s*(?P<fee>\\d+)', 'Python: 4500')
print(m.group('course'))  # 'Python'
print(m.groupdict())      # {'course': 'Python', 'fee': '4500'}`},{question:"What does match.span() return?",shortAnswer:"A 2-tuple (start_index, end_index) representing the substring slice boundaries in the original string.",explanation:"match.span() is equivalent to (match.start(), match.end()), satisfying original_text[start:end] == match.group().",hint:"Returns (start_index, end_index).",level:"basic",codeExample:`import re
m = re.search(r'Barrackpore', 'Welcome to Barrackpore!')
print(m.span())  # (11, 22)
print('Welcome to Barrackpore!'[11:22])  # 'Barrackpore'`},{question:"How does re.findall() format its return value when there are NO capture groups vs MULTIPLE capture groups?",shortAnswer:"No groups: returns a list of strings (full matches); Multiple groups: returns a list of tuples of captured groups.",explanation:"If the pattern has 0 or 1 group, findall returns a flat list of strings. If it has 2 or more groups, it returns a list of tuples containing the strings for each group.",hint:"0 groups -> list of strings; 2+ groups -> list of tuples.",level:"moderate",codeExample:`import re
text = 'A: 10, B: 20'
print(re.findall(r'\\w+:\\s*\\d+', text))    # ['A: 10', 'B: 20']
print(re.findall(r'(\\w+):\\s*(\\d+)', text))  # [('A', '10'), ('B', '20')]`},{question:"Why is re.finditer() preferred over re.findall() when processing large files or continuous log streams?",shortAnswer:"re.finditer() returns an iterator yielding Match objects lazily on demand without building an entire list in memory, saving RAM and execution time.",explanation:"In addition to memory efficiency, finditer provides full Match objects containing span coordinates and named group dictionaries, which findall does not provide.",hint:"finditer yields Match objects lazily on demand.",level:"moderate",codeExample:`import re
for m in re.finditer(r'\\d+', '100 items, 200 boxes, 300 pallets'):
    print(f'Found {m.group()} at span {m.span()}')`},{question:"How does re.sub() use backreferences in the replacement string?",shortAnswer:"Use \\1, \\2, etc. (or \\g<1>, \\g<name>) to reference captured subgroups from the matching pattern.",explanation:"Backreferences allow reordering or wrapping matched subgroups in the replacement output.",hint:"Use \\1, \\2 or \\g<name> in replacement string.",level:"moderate",codeExample:`import re
# Swap First Last to Last, First:
names = 'Susmita Mukherjee'
print(re.sub(r'(\\w+)\\s+(\\w+)', r'\\2, \\1', names))
# 'Mukherjee, Susmita'`},{question:"How can you pass a custom callable function to re.sub() for dynamic replacements?",shortAnswer:"Pass a function receiving a Match object and returning a replacement string: re.sub(pattern, callback_fn, text).",explanation:"The callback function is executed for every match, enabling mathematical calculations, external lookups, or conditional masking.",hint:"Pass a function that takes a Match object and returns a str.",level:"moderate",codeExample:`import re
def double_num(m):
    return str(int(m.group()) * 2)

print(re.sub(r'\\d+', double_num, 'Prices: 10, 25, 50'))
# 'Prices: 20, 50, 100'`},{question:"What does re.subn() return and how does it differ from re.sub()?",shortAnswer:"re.subn() returns a 2-tuple: (modified_string, number_of_substitutions_made).",explanation:"re.sub() returns only the string; re.subn() additionally provides the exact count of substitutions performed.",hint:"Returns (new_string, count).",level:"basic",codeExample:`import re
text, count = re.subn(r'cat', 'dog', 'cat and cat and dog')
print(text)   # 'dog and dog and dog'
print(count)  # 2`},{question:"How does re.split() behave when the pattern contains capturing parentheses (r'(\\W+)')?",shortAnswer:"It retains the delimiter strings in the resulting list alongside the split tokens.",explanation:"Without parentheses, delimiters are discarded. With capturing parentheses, matched delimiters are kept in the return list.",hint:"Capturing parentheses retain delimiters in split output.",level:"moderate",codeExample:`import re
print(re.split(r'\\s*([+*])\\s*', '10 + 20 * 30'))
# ['10', '+', '20', '*', '30']`},{question:"How do you limit the maximum number of substitutions in re.sub()?",shortAnswer:"Pass the count parameter: re.sub(pattern, repl, string, count=N)",explanation:"Setting count=1 replaces only the first matching occurrence; default count=0 replaces all occurrences.",hint:"Use count=N argument.",level:"basic",codeExample:`import re
print(re.sub(r'\\d+', 'X', '10 20 30 40', count=2))
# 'X X 30 40'`},{question:"How do you convert an ISO date 'YYYY-MM-DD' to Indian format 'DD-MM-YYYY' with re.sub()?",shortAnswer:"re.sub(r'(\\d{4})-(\\d{2})-(\\d{2})', r'\\3-\\2-\\1', date_str)",explanation:"\\3 refers to day (group 3), \\2 refers to month (group 2), and \\1 refers to year (group 1).",hint:"Swap groups using r'\\3-\\2-\\1'.",level:"basic",codeExample:`import re
print(re.sub(r'(\\d{4})-(\\d{2})-(\\d{2})', r'\\3-\\2-\\1', '2026-08-24'))
# '24-08-2026'`},{question:"What is the walrus operator pattern for combining search and match checks in Python 3.8+?",shortAnswer:"if (m := re.search(pattern, text)): use m.group()",explanation:"The walrus operator := assigns the match object and evaluates truthiness in one clean line.",hint:"if (m := re.search(...)):",level:"moderate",codeExample:`import re
text = 'Invoice: 9402'
if (m := re.search(r'\\d+', text)):
    print('Invoice ID:', m.group())`},{question:"How do you mask an Indian mobile number (e.g. +91 7003756860 -> +91 ******6860) using re.sub()?",shortAnswer:"re.sub(r'(\\+91\\s?)?\\d{6}(\\d{4})', r'\\1******\\2', phone_str)",explanation:"Group 1 captures the optional +91 prefix, the middle 6 digits are replaced with asterisks, and Group 2 preserves the last 4 digits.",hint:"Capture prefix and last 4 digits, replace middle with asterisks.",level:"moderate",codeExample:`import re
phone = '+91 7003756860'
print(re.sub(r'(\\+91\\s?)?\\d{6}(\\d{4})', r'\\1******\\2', phone))
# '+91 ******6860'`},{question:"Can re.split() split by multiple whitespace characters and punctuation simultaneously?",shortAnswer:"Yes: re.split(r'[,;\\s]+', text)",explanation:"The character class [,;\\s]+ matches sequences of commas, semicolons, or whitespace as a single delimiter.",hint:"Use character class in split pattern: r'[,;\\s]+'.",level:"basic",codeExample:`import re
print(re.split(r'[,;\\s]+', 'Python, SQL; FastAPI  React'))
# ['Python', 'SQL', 'FastAPI', 'React']`},{question:"What happens if a capture group in a pattern is optional and does not match?",shortAnswer:"match.group(n) returns None for that unmatched group, and groups() includes None at that position.",explanation:"For example in r'(\\d+)?(\\w+)', if digits are absent, group(1) will be None.",hint:"Unmatched optional groups return None.",level:"moderate",codeExample:`import re
m = re.search(r'(\\d+)?([A-Za-z]+)', 'Python')
print(m.group(1))  # None
print(m.group(2))  # 'Python'`},{question:"How do you reference a named capture group in a re.sub() replacement string?",shortAnswer:"Use \\g<group_name>",explanation:"\\g<name> references the captured named group in the replacement template.",hint:"Use \\g<group_name> in replacement template.",level:"moderate",codeExample:`import re
pattern = r'(?P<city>\\w+):\\s*(?P<temp>\\d+)C'
print(re.sub(pattern, r'Temperature in \\g<city> is \\g<temp> degrees', 'Barrackpore: 32C'))
# 'Temperature in Barrackpore is 32 degrees'`},{question:"What is the difference between re.search() and str.find()?",shortAnswer:"str.find() only searches for fixed, literal substrings and returns an integer index (-1 if missing); re.search() searches for flexible regex patterns and returns a Match object (or None).",explanation:"Use str.find() or 'in' for simple literal substring checks, and re.search() for complex patterns involving digits, formats, or wildcards.",hint:"str.find() is for literal substrings; re.search() is for regex patterns.",level:"basic",codeExample:`s = 'Student 101'
print(s.find('101'))       # 8 (int index)
print(re.search(r'\\d+', s)) # <Match object>`},{question:"How do you parse an Apache/Nginx web server access log line using re.search()?",shortAnswer:"Use a regex pattern with named groups for IP, timestamp, HTTP method, URL, and status code.",explanation:"Named groups (?P<ip>...), (?P<method>...), etc., allow extracting fields directly into a dictionary with .groupdict().",hint:"Use named groups with .groupdict().",level:"complex",codeExample:`import re
log = '103.21.124.8 - - [24/Aug/2026:18:30:15 +0530] "GET /courses HTTP/1.1" 200 4520'
pat = r'(?P<ip>\\S+)\\s+-\\s+-\\s+\\[(?P<ts>[^\\]]+)\\]\\s+"(?P<method>\\w+)\\s+(?P<url>\\S+)'
print(re.search(pat, log).groupdict())
# {'ip': '103.21.124.8', 'ts': '24/Aug/2026:18:30:15 +0530', 'method': 'GET', 'url': '/courses'}`},{question:"What is the return type of re.sub() when the replacement is performed?",shortAnswer:"A new string (str).",explanation:"re.sub() never modifies the original string in place because Python strings are immutable; it returns a new string.",hint:"Returns a new str.",level:"basic",codeExample:`s = 'apple'
res = re.sub('a', 'o', s)
print(res, type(res))  # 'opple' <class 'str'>`},{question:"How do you find all occurrences of overlapping regex matches in Python?",shortAnswer:"re.findall() finds non-overlapping matches only; for overlapping matches, use positive lookahead: re.findall(r'(?=(\\w{3}))', text).",explanation:"Lookaheads assert a condition without consuming characters, allowing subsequent matches to overlap.",hint:"Use positive lookahead (?=(pattern)).",level:"complex",codeExample:`import re
# Overlapping 3-character groups in 'banana':
print(re.findall(r'(?=(\\w{3}))', 'banana'))
# ['ban', 'ana', 'nan', 'ana']`},{question:"How do you sanitize user inputs to strip all HTML tags using re.sub()?",shortAnswer:"re.sub(r'<[^>]+>', '', html_text)",explanation:"The pattern <[^>]+> matches '<' followed by any characters that are not '>' up to the closing '>', safely removing all HTML tags.",hint:"Use re.sub(r'<[^>]+>', '', text).",level:"basic",codeExample:`import re
html = '<p>Welcome to <b>Coder & AccoTax</b>!</p>'
print(re.sub(r'<[^>]+>', '', html))
# 'Welcome to Coder & AccoTax!'`},{question:"What is the default count parameter in re.sub() and what does it signify?",shortAnswer:"count=0, which means replace ALL matching occurrences across the string.",explanation:"If count is 0 or omitted, all matches are replaced.",hint:"count=0 replaces all occurrences.",level:"basic",codeExample:`import re
print(re.sub(r'x', 'y', 'xxx'))  # 'yyy' (Replaced all 3)`}];function B(){const m=l.useRef([]),[c,u]=l.useState("trio"),[i,x]=l.useState("sub"),[d,f]=l.useState("Susmita Mukherjee: 2026-08-24, Rahul Roy: 2026-08-15"),[s,g]=l.useState("(\\d{4})-(\\d{2})-(\\d{2})"),[h,b]=l.useState("$3-$2-$1");l.useEffect(()=>{const t=new IntersectionObserver(r=>{r.forEach(a=>{a.isIntersecting&&a.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return m.current.forEach(r=>{r&&t.observe(r)}),()=>t.disconnect()},[]);const o=t=>{t&&!m.current.includes(t)&&m.current.push(t)},n=(()=>{try{if(i==="sub"){const t=new RegExp(s,"g"),r=d.replace(t,h),a=h.replace(/\$(\d+)/g,"\\$1");return{valid:!0,outputType:"substituted_string",result:r,pyCode:`import re
pattern = r"${s}"
result = re.sub(pattern, r"${a}", text)
print(result)`}}else if(i==="match"){const r=new RegExp(`^${s}`).exec(d);return r?{valid:!0,outputType:"match_object",fullMatch:r[0],groups:r.slice(1),span:`(0, ${r[0].length})`,pyCode:`import re
m = re.match(r"${s}", text)
if m:
    print(m.group(), m.groups())`}:{valid:!0,outputType:"none",result:"None (Pattern did not match at start index 0)",pyCode:`import re
m = re.match(r"${s}", text)  # Returns None`}}else if(i==="search"){const r=new RegExp(s).exec(d);return r?{valid:!0,outputType:"match_object",fullMatch:r[0],groups:r.slice(1),span:`(${r.index}, ${r.index+r[0].length})`,pyCode:`import re
m = re.search(r"${s}", text)
if m:
    print(f"Match: {m.group()} at {m.span()}")`}:{valid:!0,outputType:"none",result:"None (Pattern not found anywhere in string)",pyCode:`import re
m = re.search(r"${s}", text)  # Returns None`}}else if(i==="findall"){const t=new RegExp(s,"g"),r=[];let a;for(;(a=t.exec(d))!==null;)a.length>2?r.push(a.slice(1)):a.length===2?r.push(a[1]):r.push(a[0]),a.index===t.lastIndex&&t.lastIndex++;return{valid:!0,outputType:"findall_list",matches:r,count:r.length,pyCode:`import re
matches = re.findall(r"${s}", text)
print(matches)`}}}catch(t){return{valid:!1,error:t.message}}})(),N=[{label:"Date Swapper (sub)",op:"sub",text:"Exam 1: 2026-08-24, Exam 2: 2026-09-15",pattern:"(\\d{4})-(\\d{2})-(\\d{2})",repl:"$3-$2-$1"},{label:"Find Names & Marks (findall)",op:"findall",text:"Susmita: 96.5%, Rahul: 88.0%, Priya: 92.5%",pattern:"([A-Za-z]+):\\s*(\\d+\\.\\d+)%",repl:""},{label:"Search Invoice (search)",op:"search",text:"Transaction receipt for INV-000942 completed.",pattern:"INV-(\\d+)",repl:""},{label:"Match Start Token (match)",op:"match",text:"PY-9402: Susmita Mukherjee enrolled.",pattern:"PY-\\d+",repl:""}];return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:o,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 2 • Module 002_007"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-emerald-950/80 text-emerald-300 px-3 py-1 rounded-full border border-emerald-800/80 shadow-sm shadow-emerald-950/50",children:"Topic 8"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"String Processing & Pattern Handling"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Pattern Matching & Substitution with ",e.jsx("code",{className:"text-teal-400 font-mono",children:"search()"}),", ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"match()"}),", ",e.jsx("code",{className:"text-cyan-400 font-mono",children:"findall()"})," & ",e.jsx("code",{className:"text-rose-400 font-mono",children:"sub()"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master Python's core regex operations: the matching trio (",e.jsx("code",{className:"text-teal-300 font-mono",children:"search"})," vs ",e.jsx("code",{className:"text-teal-300 font-mono",children:"match"})," vs ",e.jsx("code",{className:"text-teal-300 font-mono",children:"fullmatch"}),"), ",e.jsx("code",{className:"text-purple-400 font-mono",children:"Match"})," object coordinates (",e.jsx("code",{className:"text-purple-300 font-mono",children:".group()"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:".span()"}),"), group extraction rules with ",e.jsx("code",{className:"text-cyan-400 font-mono",children:"findall()"}),", streaming with ",e.jsx("code",{className:"text-cyan-400 font-mono",children:"finditer()"}),", and backreference substitution with ",e.jsx("code",{className:"text-rose-400 font-mono",children:"re.sub()"}),"."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🎯 search() vs match() vs fullmatch()"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📦 Match Object (.group, .groups, .groupdict, .span)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔄 sub() Backreferences (\\1, \\2, \\g<name>)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Web Log Parsing & PII Data Redaction"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:o,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚙️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The 4 Fundamental Regex Operations in Python"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["The Python ",e.jsx("code",{className:"text-teal-400 font-mono",children:"re"})," module provides 4 specialized functions tailored for discovering, extracting, streaming, and transforming structured text:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg shadow-teal-950/30 transition-all duration-300 hover:scale-[1.01] hover:border-teal-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-teal-400 font-bold text-base mb-2",children:[e.jsx("span",{children:"🔎"})," re.search()"]}),e.jsxs("p",{className:"text-xs text-slate-300 mb-2",children:["Scans anywhere in the string to find the ",e.jsx("strong",{children:"FIRST"})," matching location."]}),e.jsx("span",{className:"text-[11px] text-teal-400/80 font-mono",children:"Returns: Match or None"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 shadow-lg shadow-emerald-950/30 transition-all duration-300 hover:scale-[1.01] hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-base mb-2",children:[e.jsx("span",{children:"📍"})," re.match()"]}),e.jsxs("p",{className:"text-xs text-slate-300 mb-2",children:["Checks for a match strictly at the ",e.jsx("strong",{children:"BEGINNING (index 0)"})," of the string."]}),e.jsx("span",{className:"text-[11px] text-emerald-400/80 font-mono",children:"Returns: Match or None"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg shadow-cyan-950/30 transition-all duration-300 hover:scale-[1.01] hover:border-cyan-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base mb-2",children:[e.jsx("span",{children:"📑"})," re.findall()"]}),e.jsxs("p",{className:"text-xs text-slate-300 mb-2",children:["Finds ",e.jsx("strong",{children:"ALL"})," non-overlapping matches across the entire text."]}),e.jsx("span",{className:"text-[11px] text-cyan-400/80 font-mono",children:"Returns: list of str/tuples"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/40 border border-rose-800/60 shadow-lg shadow-rose-950/30 transition-all duration-300 hover:scale-[1.01] hover:border-rose-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base mb-2",children:[e.jsx("span",{children:"🔄"})," re.sub()"]}),e.jsxs("p",{className:"text-xs text-slate-300 mb-2",children:["Replaces matches using templates, ",e.jsx("strong",{children:"backreferences (\\1)"}),", or callable callbacks."]}),e.jsx("span",{className:"text-[11px] text-rose-400/80 font-mono",children:"Returns: new str"})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-2",children:"The AttributeError Trap on Failed Searches"}),e.jsxs("p",{className:"text-sm sm:text-base text-slate-300 leading-relaxed",children:["When a pattern is not found, ",e.jsx("code",{className:"text-teal-300 font-mono",children:"re.search()"})," and ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"re.match()"})," return ",e.jsx("code",{className:"text-rose-400 font-mono",children:"None"}),". Calling ",e.jsx("code",{className:"text-rose-400 font-mono",children:"re.search(pat, s).group()"})," directly will crash with ",e.jsx("code",{className:"text-rose-300 font-mono",children:"AttributeError: 'NoneType' object has no attribute 'group'"}),"."]}),e.jsxs("p",{className:"text-sm sm:text-base text-emerald-300 font-semibold mt-1",children:["✓ Best Practice: Use Python 3.8+ walrus operator: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"if (m := re.search(pat, s)): print(m.group())"}),"."]})]})]})]}),e.jsxs("section",{ref:o,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"🔍"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Matching Mechanics & Substitution"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>u("trio"),className:p("px-3 py-1.5 rounded-lg transition-all",c==="trio"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"match vs search vs fullmatch"}),e.jsx("button",{onClick:()=>u("anatomy"),className:p("px-3 py-1.5 rounded-lg transition-all",c==="anatomy"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Match Object Anatomy"}),e.jsx("button",{onClick:()=>u("subengine"),className:p("px-3 py-1.5 rounded-lg transition-all",c==="subengine"?"bg-rose-900/50 text-rose-300 border border-rose-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"re.sub() Backreferences"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining start constraints, coordinate extraction, and backreference replacement pipelines:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:c==="trio"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:'MATCHING TRIO COMPARISON: Target = "Student: 9402 from Barrackpore"'}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"810",height:"75",rx:"8",fill:"#1e293b",stroke:"#0d9488"}),e.jsx("text",{x:"20",y:"28",fill:"#2dd4bf",fontSize:"13",fontWeight:"bold",children:'1. re.match(r"\\d+", text)  [Index 0 Only]'}),e.jsxs("text",{x:"20",y:"55",fill:"#fca5a5",fontSize:"12",children:["Evaluates at index 0 ('S') → ",e.jsx("tspan",{fill:"#f43f5e",fontWeight:"bold",children:"Returns None"})," (Fails immediately because text starts with letters)."]})]}),e.jsxs("g",{transform:"translate(30, 140)",children:[e.jsx("rect",{x:"0",y:"0",width:"810",height:"75",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"28",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:'2. re.search(r"\\d+", text) [Scans Entire String]'}),e.jsxs("text",{x:"20",y:"55",fill:"#ecfdf5",fontSize:"12",children:["Scans left-to-right → ",e.jsx("tspan",{fill:"#34d399",fontWeight:"bold",children:"Returns Match Object"}),": match='9402', span=(9, 13)."]})]}),e.jsxs("g",{transform:"translate(30, 230)",children:[e.jsx("rect",{x:"0",y:"0",width:"810",height:"75",rx:"8",fill:"#1e1b4b",stroke:"#6366f1"}),e.jsx("text",{x:"20",y:"28",fill:"#c7d2fe",fontSize:"13",fontWeight:"bold",children:'3. re.fullmatch(r"\\d+", text) [Entire String Must Match]'}),e.jsxs("text",{x:"20",y:"55",fill:"#fca5a5",fontSize:"12",children:["Full text contains letters and spaces → ",e.jsx("tspan",{fill:"#f43f5e",fontWeight:"bold",children:"Returns None"}),' (Would match only if text == "9402").']})]})]}):c==="anatomy"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsxs("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:['THE Match OBJECT ANATOMY: m = re.search(r"(\\d',4,")-(\\d",2,")-(\\d",2,')", "2026-08-24")']}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"255",height:"110",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"13",fontWeight:"bold",children:"m.group() / m.group(0)"}),e.jsx("text",{x:"20",y:"55",fill:"#ecfdf5",fontSize:"16",fontWeight:"bold",children:'"2026-08-24"'}),e.jsx("text",{x:"20",y:"90",fill:"#94a3b8",fontSize:"11",children:"Entire matched sequence"}),e.jsx("rect",{x:"275",y:"0",width:"255",height:"110",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"295",y:"30",fill:"#c4b5fd",fontSize:"13",fontWeight:"bold",children:"m.groups() (Tuple)"}),e.jsx("text",{x:"295",y:"55",fill:"#a7f3d0",fontSize:"15",fontWeight:"bold",children:"('2026', '08', '24')"}),e.jsx("text",{x:"295",y:"90",fill:"#94a3b8",fontSize:"11",children:"Tuple of all captured subgroups"}),e.jsx("rect",{x:"550",y:"0",width:"260",height:"110",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"570",y:"30",fill:"#c4b5fd",fontSize:"13",fontWeight:"bold",children:"m.span() Coordinates"}),e.jsx("text",{x:"570",y:"55",fill:"#38bdf8",fontSize:"16",fontWeight:"bold",children:"(0, 10)"}),e.jsx("text",{x:"570",y:"90",fill:"#94a3b8",fontSize:"11",children:"start()=0, end()=10 in text"})]}),e.jsxs("g",{transform:"translate(30, 180)",children:[e.jsx("rect",{x:"0",y:"0",width:"810",height:"110",rx:"8",fill:"#090d16",stroke:"#334155"}),e.jsx("text",{x:"20",y:"30",fill:"#34d399",fontSize:"13",fontWeight:"bold",children:"Positional Groups Breakdown:"}),e.jsxs("text",{x:"20",y:"60",fill:"#cbd5e1",fontSize:"13",children:["• ",e.jsx("tspan",{fill:"#38bdf8",fontWeight:"bold",children:"m.group(1)"}),' = "2026" (Year)   |   • ',e.jsx("tspan",{fill:"#38bdf8",fontWeight:"bold",children:"m.group(2)"}),' = "08" (Month)   |   • ',e.jsx("tspan",{fill:"#38bdf8",fontWeight:"bold",children:"m.group(3)"}),' = "24" (Day)']}),e.jsxs("text",{x:"20",y:"90",fill:"#94a3b8",fontSize:"12",children:["If named groups are used: ",e.jsx("tspan",{fill:"#f59e0b",fontStyle:"italic",children:"m.groupdict() → {'year': '2026', 'month': '08', 'day': '24'}"})]})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#fb7185",fontSize:"14",fontWeight:"bold",children:"re.sub() BACKREFERENCE ENGINE & DYNAMIC CALLBACK"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"810",height:"110",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"28",fill:"#fda4af",fontSize:"13",fontWeight:"bold",children:'A. Date Format Swapper with Backreferences: r"\\3-\\2-\\1"'}),e.jsx("text",{x:"20",y:"55",fill:"#f8fafc",fontSize:"13",children:'re.sub(r"(\\d{4})-(\\d{2})-(\\d{2})", r"\\3-\\2-\\1", "2026-08-24")'}),e.jsx("text",{x:"20",y:"85",fill:"#a7f3d0",fontSize:"14",fontWeight:"bold",children:'→ Output: "24-08-2026" (Swaps Day \\3 to front, Year \\1 to end)'})]}),e.jsxs("g",{transform:"translate(30, 180)",children:[e.jsx("rect",{x:"0",y:"0",width:"810",height:"110",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"28",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"B. Dynamic Callback Function in re.sub()"}),e.jsx("text",{x:"20",y:"55",fill:"#f8fafc",fontSize:"12",children:'re.sub(r"\\$(\\d+)", lambda m: f"INR {float(m.group(1))*83.5:,.2f}", "Price: $50")'}),e.jsx("text",{x:"20",y:"85",fill:"#ecfdf5",fontSize:"14",fontWeight:"bold",children:'→ Output: "Price: INR 4,175.00" (Executes custom Python math on every match!)'})]})]})})]}),e.jsxs("section",{ref:o,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Regex Operation Simulator"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Select an operation, enter your pattern with capture groups, and preview live match objects or backreference substitutions:"}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6",children:N.map(t=>e.jsxs("button",{onClick:()=>{x(t.op),f(t.text),g(t.pattern),t.repl&&b(t.repl)},className:p("p-2.5 rounded-xl text-left border transition-all text-xs",i===t.op&&s===t.pattern?"bg-teal-950 border-teal-500 text-teal-200 shadow-md shadow-teal-950":"bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"),children:[e.jsx("div",{className:"font-mono font-bold text-teal-300",children:t.label}),e.jsx("div",{className:"text-[11px] text-slate-400 line-clamp-1",children:t.pattern})]},t.label))}),e.jsx("div",{className:"flex gap-2 mb-6",children:[{id:"search",label:"re.search()"},{id:"match",label:"re.match()"},{id:"findall",label:"re.findall()"},{id:"sub",label:"re.sub()"}].map(t=>e.jsx("button",{onClick:()=>x(t.id),className:p("flex-1 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold border transition-all",i===t.id?"bg-teal-950 border-teal-500 text-teal-300 shadow-md shadow-teal-950":"bg-slate-950 border-slate-800 text-slate-400 hover:text-white"),children:t.label},t.id))}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",children:[e.jsxs("div",{className:"space-y-4 bg-slate-950 p-5 rounded-xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1",children:"Target Sample String"}),e.jsx("textarea",{value:d,onChange:t=>f(t.target.value),rows:3,className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-slate-100 font-mono text-xs focus:outline-none focus:border-teal-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1",children:"Regex Pattern String (with capture groups)"}),e.jsx("input",{type:"text",value:s,onChange:t=>g(t.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-teal-300 font-mono text-sm focus:outline-none focus:border-teal-500"})]}),i==="sub"&&e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1",children:"Replacement Template (Use $1, $2 or \\1, \\2 for groups)"}),e.jsx("input",{type:"text",value:h,onChange:t=>b(t.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-rose-300 font-mono text-sm focus:outline-none focus:border-rose-500"})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block",children:"Generated Python Code"}),e.jsx("pre",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800 text-teal-300 font-mono text-xs overflow-x-auto whitespace-pre-wrap",children:n.pyCode})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block",children:"Evaluated Result"}),n.valid?n.outputType==="match_object"?e.jsxs("div",{className:"space-y-1.5 text-xs font-mono",children:[e.jsxs("div",{className:"text-emerald-300 font-bold",children:['Match Found: "',n.fullMatch,'" at span ',n.span]}),e.jsxs("div",{className:"text-slate-300",children:["Subgroups: ",JSON.stringify(n.groups)]})]}):n.outputType==="findall_list"?e.jsxs("div",{className:"space-y-1 text-xs font-mono",children:[e.jsxs("div",{className:"text-emerald-300 font-bold",children:["Total Matches: ",n.count]}),e.jsx("div",{className:"text-slate-200 bg-slate-900 p-2 rounded max-h-24 overflow-y-auto",children:JSON.stringify(n.matches,null,2)})]}):n.outputType==="substituted_string"?e.jsx("pre",{className:"p-3 bg-slate-900 rounded border border-slate-800 text-emerald-300 font-mono text-xs whitespace-pre-wrap font-bold",children:n.result}):e.jsx("div",{className:"text-xs font-mono text-rose-400 italic",children:n.result}):e.jsx("div",{className:"text-xs font-mono text-rose-400",children:n.error})]})]})]})]}),e.jsxs("section",{ref:o,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Regex Methods Comparison Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Method"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Search Scope"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Return Type on Match"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Return on Failure"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Ideal Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"re.search(pat, s)"}),e.jsx("td",{className:"py-3 px-4",children:"Scans anywhere in string"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400",children:"Match Object"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400",children:"None"}),e.jsx("td",{className:"py-3 px-4",children:"Finding the first occurrence of an embedded pattern"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"re.match(pat, s)"}),e.jsx("td",{className:"py-3 px-4",children:"Index 0 (Start of string only)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400",children:"Match Object"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400",children:"None"}),e.jsx("td",{className:"py-3 px-4",children:"Validating line start tokens or command prefixes"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"re.fullmatch(pat, s)"}),e.jsx("td",{className:"py-3 px-4",children:"Entire string from start to end"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400",children:"Match Object"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400",children:"None"}),e.jsx("td",{className:"py-3 px-4",children:"Strict form validation (PAN, PIN, Mobile numbers)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"re.findall(pat, s)"}),e.jsx("td",{className:"py-3 px-4",children:"Entire string for all matches"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400",children:"list of str or tuples"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400",children:"[] (Empty list)"}),e.jsx("td",{className:"py-3 px-4",children:"Extracting all occurrences into a Python list"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"re.finditer(pat, s)"}),e.jsx("td",{className:"py-3 px-4",children:"Entire string (Lazy stream)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400",children:"callable_iterator"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400",children:"Empty iterator"}),e.jsx("td",{className:"py-3 px-4",children:"Streaming Match objects over huge log files with zero RAM waste"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-rose-300 font-semibold",children:"re.sub(pat, repl, s)"}),e.jsx("td",{className:"py-3 px-4",children:"Entire string substitution"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400",children:"str (Modified string)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400",children:"Original string"}),e.jsx("td",{className:"py-3 px-4",children:"Pattern replacements, date reformatting, PII redaction"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-rose-300 font-semibold",children:"re.split(pat, s)"}),e.jsx("td",{className:"py-3 px-4",children:"Splits by pattern delimiters"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400",children:"list of str"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400",children:"[s]"}),e.jsx("td",{className:"py-3 px-4",children:"Splitting text across multiple irregular separators"})]})]})]})})]}),e.jsxs("section",{ref:o,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating search/match/fullmatch, findall group rules, finditer streaming, sub backreferences, and server log PII redactors:"}),e.jsx(j,{files:[{filename:"matching_methods_and_match_objects.py",code:v,description:"re.search vs re.match vs re.fullmatch, positional groups (.group(1)), named groups, and span coordinates."},{filename:"findall_finditer_and_groups.py",code:T,description:"findall() return rules (0/1/2+ groups), finditer lazy streaming, and re.split with capturing delimiters."},{filename:"sub_subn_and_replacement_functions.py",code:S,description:"re.sub with backreferences (\\1, \\2), dynamic callback replacement functions, and re.subn substitution counters."},{filename:"log_parser_and_pii_redactor.py",code:E,description:"Industrial web server access log parser and privacy PII data redactor for mobile, PAN, and emails."}]})]}),e.jsxs("section",{ref:o,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Calling `.group()` Without Checking `None`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"val = re.search(pat, s).group(1)"})," crashes with ",e.jsx("code",{className:"text-rose-300 font-mono",children:"AttributeError: 'NoneType' object has no attribute 'group'"})," whenever the search fails."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Write ",e.jsx("code",{className:"text-emerald-300",children:"if (m := re.search(pat, s)): val = m.group(1)"})]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Using `re.match()` Expecting Full-Text Search"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:[e.jsx("code",{className:"text-amber-300 font-mono",children:'re.match(r"\\d+", "Invoice 101")'})," returns ",e.jsx("code",{className:"text-amber-300 font-mono",children:"None"})," because ",e.jsx("code",{className:"text-amber-300 font-mono",children:"match()"})," only looks at index 0 ('I')."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:'re.search(r"\\d+", text)'})," for general substring searches!"]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: `re.findall()` Tuple Surprise"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Adding parentheses to a pattern in ",e.jsx("code",{className:"text-purple-300 font-mono",children:'re.findall(r"(\\w+)-(\\d+)", s)'})," changes the return type from a list of strings to a ",e.jsx("strong",{children:"list of tuples"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Tip:"})," Use non-capturing groups ",e.jsx("code",{className:"text-emerald-300",children:"(?:...)"})," if you want full string matches!"]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Backreference Escaping in `re.sub()`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-cyan-300 font-mono",children:'re.sub(pat, "\\1", s)'})," without raw string prefix treats ",e.jsx("code",{className:"text-cyan-300 font-mono",children:'"\\1"'})," as ASCII character ",e.jsx("code",{className:"text-slate-400 font-mono",children:"\\x01"})," instead of group 1."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always use raw strings for replacement templates: ",e.jsx("code",{className:"text-emerald-300",children:'r"\\1"'})," or ",e.jsx("code",{className:"text-emerald-300",children:'r"\\g<1>"'})]})]})]})]}),e.jsxs("section",{ref:o,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering match objects, group extraction rules, finditer streaming, and dynamic re.sub callbacks:"}),e.jsx(_,{questions:A})]}),e.jsxs("section",{ref:o,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with matching trio comparisons, Match object cheat sheets, and log redactor pipelines:"}),e.jsx("div",{className:"mb-10",children:e.jsx(y,{content:P,filename:"python_topic8_pattern_matching_notes.txt",title:"Print Topic 8 Study Notes"})}),e.jsx(w,{})]})]})]})}export{B as default};
