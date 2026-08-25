import{b as r,j as e,bg as o}from"./vendor-react-core-Doz9nIC6.js";import{P as C}from"./PythonFileLoader-hCi5osN-.js";import{P as k}from"./PlainTextPrint-C08xhKA4.js";import{F}from"./FAQTemplate-CkSqDH4B.js";import{T as O}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const D=`# topic5_files/fstring_expressions_and_debugging.py\r
# Module: 002_007_string-processing\r
# Topic: Advanced Formatting (f-strings, format() method, padding, alignment)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
"""\r
Topic 5 - File 1: f-String Expressions, Conversions & Self-Documenting Debugging\r
Demonstrates:\r
  1. Formatted string literals (f-strings) fundamentals\r
  2. Evaluating expressions, function calls, arithmetic & ternary logic inline\r
  3. Self-documenting debugging specifier: f"{var=}" (Python 3.8+)\r
  4. Escaping curly braces: {{ and }}\r
  5. Explicit conversions: !r (repr), !s (str), !a (ascii)\r
  6. Multi-line f-strings and quotes\r
"""\r
\r
import math\r
from datetime import datetime\r
\r
def demonstrate_fstring_expressions():\r
    print("=" * 65)\r
    print("1. f-STRING INLINE EXPRESSIONS & TERNARY LOGIC")\r
    print("=" * 65)\r
\r
    student_name = "Susmita Mukherjee"\r
    course = "Python Core & Advanced"\r
    marks = 94.5\r
    city = "Barrackpore"\r
\r
    # 1. Direct variable substitution\r
    intro = f"Student: {student_name}, Course: {course}, Center: {city}"\r
    print(f"Basic Substitution:\\n  {intro}\\n")\r
\r
    # 2. Arithmetic & math function evaluation\r
    radius = 7.0\r
    area = f"Radius: {radius} cm -> Circle Area: {math.pi * (radius ** 2):.2f} sq.cm"\r
    print(f"Math Expression:\\n  {area}\\n")\r
\r
    # 3. Method calls & uppercase transformation\r
    clean_alert = f"Alert: {student_name.upper()} enrolled from {city.title()}."\r
    print(f"Method Invocation:\\n  {clean_alert}\\n")\r
\r
    # 4. Inline ternary conditional logic\r
    status = f"Result: {'DISTINCTION' if marks >= 90 else ('PASS' if marks >= 50 else 'FAIL')} (Marks: {marks})"\r
    print(f"Ternary Condition:\\n  {status}")\r
\r
\r
def demonstrate_debugging_specifier():\r
    print("\\n" + "=" * 65)\r
    print("2. SELF-DOCUMENTING DEBUGGING: f\\"{variable=}\\" (Python 3.8+)")\r
    print("=" * 65)\r
\r
    batch_id = "PY-2026-B1"\r
    active_students = 28\r
    fee_per_student = 4500.0\r
    total_revenue = active_students * fee_per_student\r
\r
    # The '=' specifier prints the expression text followed by '=' and the evaluated value\r
    print("--- Debug Print Output ---")\r
    print(f"{batch_id=}")\r
    print(f"{active_students=}")\r
    print(f"{fee_per_student=}")\r
    print(f"{active_students * fee_per_student=}")\r
    print(f"{math.sqrt(total_revenue)=:.2f}")\r
\r
\r
def demonstrate_escaping_and_conversions():\r
    print("\\n" + "=" * 65)\r
    print("3. ESCAPING CURLY BRACES & CONVERSION FLAGS (!r, !s, !a)")\r
    print("=" * 65)\r
\r
    # Escaping curly braces {{ and }}\r
    css_class = "student-card"\r
    css_rule = f".{css_class} {{ padding: 12px; border-radius: 8px; }}"\r
    print(f"Escaped Braces CSS Rule:\\n  {css_rule}\\n")\r
\r
    # Conversion flags:\r
    # !s calls str()\r
    # !r calls repr() (shows quotes and exact representations)\r
    # !a calls ascii() (escapes non-ASCII characters)\r
    raw_location = "Barrackpore \\t\\n 'Kolkata' Café"\r
\r
    print(f"Direct   : {raw_location}")\r
    print(f"!s (str) : {raw_location!s}")\r
    print(f"!r (repr): {raw_location!r} (Quotes and escape codes visible)")\r
    print(f"!a (ascii): {raw_location!a} (Non-ASCII 'é' escaped to \\\\xe9)")\r
\r
\r
def demonstrate_datetime_specifiers():\r
    print("\\n" + "=" * 65)\r
    print("4. DATETIME FORMAT SPECIFIERS INSIDE f-STRINGS")\r
    print("=" * 65)\r
\r
    now = datetime(2026, 8, 24, 18, 30, 0)\r
    print(f"Raw Datetime Object : {now}")\r
    print(f"ISO Standard Date   : {now:%Y-%m-%d}")\r
    print(f"Indian Standard Date: {now:%d-%b-%Y}")\r
    print(f"Full Timestamp      : {now:%A, %d %B %Y at %I:%M %p}")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_fstring_expressions()\r
    demonstrate_debugging_specifier()\r
    demonstrate_escaping_and_conversions()\r
    demonstrate_datetime_specifiers()\r
`,M=`# topic5_files/padding_alignment_and_numbers.py\r
# Module: 002_007_string-processing\r
# Topic: Advanced Formatting (f-strings, format() method, padding, alignment)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
"""\r
Topic 5 - File 2: Padding, Alignment & Number Format Specification Mini-Language\r
Demonstrates:\r
  1. Alignment operators: < (left), > (right), ^ (center), = (sign-aware)\r
  2. Custom fill characters (*, -, _, 0)\r
  3. Fixed-point float precision: :.2f, :.4f\r
  4. Percentage formatting: :.1%\r
  5. Thousands separators: :, and :_\r
  6. Base conversions: Binary (:b), Octal (:o), Hexadecimal (:x, :#X)\r
"""\r
\r
def demonstrate_alignment_and_padding():\r
    print("=" * 65)\r
    print("1. ALIGNMENT OPERATORS & CUSTOM FILL CHARACTERS")\r
    print("=" * 65)\r
\r
    title = "PYTHON"\r
    width = 24\r
\r
    # Default alignments: Strings default to left (<), Numbers default to right (>)\r
    print(f"Left-Aligned   (<)  : '{title:<{width}}'")\r
    print(f"Right-Aligned  (>)  : '{title:>{width}}'")\r
    print(f"Center-Aligned (^)  : '{title:^{width}}'\\n")\r
\r
    # Custom fill characters: [fill][align][width]\r
    print(f"Fill with '*'       : '{title:*<{width}}'")\r
    print(f"Fill with '-'       : '{title:->{width}}'")\r
    print(f"Fill with '='       : '{title:=^{width}}'")\r
    print(f"Header Banner       : '{title: ^30}'")\r
\r
\r
def demonstrate_number_precision_and_currency():\r
    print("\\n" + "=" * 65)\r
    print("2. FLOAT PRECISION, PERCENTAGES & THOUSANDS SEPARATORS")\r
    print("=" * 65)\r
\r
    amount = 1245000.7856\r
    discount_rate = 0.185\r
    ratio = 7 / 3\r
\r
    print(f"Raw Amount            : {amount}")\r
    print(f"Fixed 2 Decimals (:.2f): {amount:.2f}")\r
    print(f"Comma Separator (:,)  : {amount:,.2f}  (INR Standard)")\r
    print(f"Underscore Sep (:_)   : {amount:_.2f}  (Pythonic Literal Style)\\n")\r
\r
    print(f"Percentage (:.1%)     : {discount_rate:.1%}")\r
    print(f"Percentage (:.2%)     : {discount_rate:.2%}")\r
    print(f"Scientific (:.2e)     : {amount:.2e}\\n")\r
\r
    print(f"Ratio 7/3 (:.4f)      : {ratio:.4f}")\r
\r
\r
def demonstrate_sign_aware_and_zero_padding():\r
    print("=" * 65)\r
    print("3. SIGN-AWARE PADDING (=) & ZERO-PADDING (:0N)")\r
    print("=" * 65)\r
\r
    invoice_id = 942\r
    pos_temp = 32.5\r
    neg_temp = -18.4\r
\r
    # Zero-padding for IDs & Serial Numbers\r
    print(f"Invoice Serial (:06d) : {invoice_id:06d}")\r
    print(f"Padded ID (:08d)      : {invoice_id:08d}\\n")\r
\r
    # Sign display specifiers:\r
    # '+' shows sign for both positive and negative\r
    # '-' shows sign for negative only (default)\r
    # ' ' (space) shows leading space for positive, '-' for negative\r
    print(f"Sign Always (+): Pos = {pos_temp:+.1f}, Neg = {neg_temp:+.1f}")\r
    print(f"Space Sign  ( ): Pos = '{pos_temp: .1f}', Neg = '{neg_temp: .1f}'\\n")\r
\r
    # Sign-aware padding with '=': places padding BETWEEN the sign and digits\r
    print(f"Sign-aware pad (:=+10.2f):")\r
    print(f"  Pos: '{pos_temp:=+10.2f}'")\r
    print(f"  Neg: '{neg_temp:=+10.2f}'")\r
\r
\r
def demonstrate_integer_base_conversions():\r
    print("\\n" + "=" * 65)\r
    print("4. INTEGER BASE CONVERSIONS: BINARY, OCTAL, HEX")\r
    print("=" * 65)\r
\r
    num = 255\r
    print(f"Decimal Value : {num}")\r
    print(f"Binary (:b)   : {num:b} (Prefixed :#b: {num:#b})")\r
    print(f"Octal  (:o)   : {num:o} (Prefixed :#o: {num:#o})")\r
    print(f"Hex Lower (:x): {num:x} (Prefixed :#x: {num:#x})")\r
    print(f"Hex Upper (:X): {num:X} (Prefixed :#X: {num:#X})")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_alignment_and_padding()\r
    demonstrate_number_precision_and_currency()\r
    demonstrate_sign_aware_and_zero_padding()\r
    demonstrate_integer_base_conversions()\r
`,W=`# topic5_files/format_method_and_legacy_interpolation.py\r
# Module: 002_007_string-processing\r
# Topic: Advanced Formatting (f-strings, format() method, padding, alignment)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
"""\r
Topic 5 - File 3: str.format() Method, Legacy % Interpolation & Performance Comparison\r
Demonstrates:\r
  1. str.format() positional & named placeholders\r
  2. Unpacking dictionaries (**dict) & lists (*list) into format()\r
  3. Reusing and reordering placeholders\r
  4. Legacy % printf-style string formatting\r
  5. Speed benchmark: f-strings vs str.format() vs % vs '+'\r
"""\r
\r
import time\r
\r
def demonstrate_format_method():\r
    print("=" * 65)\r
    print("1. str.format() METHOD (POSITIONAL & NAMED)")\r
    print("=" * 65)\r
\r
    # 1. Positional placeholders\r
    template_pos = "Student {0} from {1} scored {2:.1f}% in Python."\r
    msg1 = template_pos.format("Susmita", "Barrackpore", 96.5)\r
    print(f"Positional format():\\n  {msg1}\\n")\r
\r
    # 2. Named keyword placeholders\r
    template_named = "Enrollment: {name} (ID: {student_id}) enrolled for course '{course}'."\r
    msg2 = template_named.format(name="Rahul Roy", student_id="PY-9402", course="Data Science")\r
    print(f"Named format():\\n  {msg2}\\n")\r
\r
    # 3. Argument reuse & reordering\r
    math_rule = "{0} squared is {1}, and {0} cubed is {2}."\r
    print(f"Reused Arguments:\\n  {math_rule.format(5, 5**2, 5**3)}\\n")\r
\r
    # 4. Dictionary unpacking (**dict)\r
    config = {\r
        "host": "localhost",\r
        "port": 5432,\r
        "db": "accounting_db",\r
        "user": "sukanta_admin"\r
    }\r
    db_uri = "postgresql://{user}@{host}:{port}/{db}".format(**config)\r
    print(f"Dictionary Unpacking (**config):\\n  {db_uri}")\r
\r
\r
def demonstrate_legacy_percent_formatting():\r
    print("\\n" + "=" * 65)\r
    print("2. LEGACY % (PRINTF-STYLE) FORMATTING")\r
    print("=" * 65)\r
\r
    name = "Ankan"\r
    marks = 88.75\r
    rank = 3\r
\r
    # %s for string, %d for integer, %.2f for float\r
    legacy_msg = "Student %s ranked #%d with score %.1f%%" % (name, rank, marks)\r
    print(f"Legacy %s/%d/%.2f  : {legacy_msg}")\r
\r
    # Named % dictionary mapping\r
    named_legacy = "Invoice %(inv_id)06d: INR %(total).2f" % {"inv_id": 428, "total": 4500.0}\r
    print(f"Named %(key)s     : {named_legacy}")\r
\r
\r
def benchmark_formatting_speeds():\r
    print("\\n" + "=" * 65)\r
    print("3. BENCHMARK: f-STRINGS VS str.format() VS % VS '+'")\r
    print("=" * 65)\r
\r
    student = "Susmita"\r
    center = "Barrackpore"\r
    score = 95.5\r
    iterations = 500000\r
\r
    # 1. f-string (Compiled to optimized bytecode BUILD_STRING opcode)\r
    t0 = time.perf_counter()\r
    for _ in range(iterations):\r
        _ = f"Student {student} at {center} scored {score:.1f}"\r
    time_fstring = time.perf_counter() - t0\r
\r
    # 2. str.format()\r
    t0 = time.perf_counter()\r
    for _ in range(iterations):\r
        _ = "Student {} at {} scored {:.1f}".format(student, center, score)\r
    time_format = time.perf_counter() - t0\r
\r
    # 3. % formatting\r
    t0 = time.perf_counter()\r
    for _ in range(iterations):\r
        _ = "Student %s at %s scored %.1f" % (student, center, score)\r
    time_percent = time.perf_counter() - t0\r
\r
    # 4. '+' Concatenation\r
    t0 = time.perf_counter()\r
    for _ in range(iterations):\r
        _ = "Student " + student + " at " + center + " scored " + str(score)\r
    time_plus = time.perf_counter() - t0\r
\r
    print(f"Iterations             : {iterations:,}")\r
    print(f"1. f-Strings (f'...')  : {time_fstring * 1000:.2f} ms (FASTEST - Direct Bytecode)")\r
    print(f"2. %-Formatting (%)    : {time_percent * 1000:.2f} ms ({time_percent / time_fstring:.2f}x slower)")\r
    print(f"3. '+' Concatenation   : {time_plus * 1000:.2f} ms ({time_plus / time_fstring:.2f}x slower)")\r
    print(f"4. str.format()        : {time_format * 1000:.2f} ms ({time_format / time_fstring:.2f}x slower)")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_format_method()\r
    demonstrate_legacy_percent_formatting()\r
    benchmark_formatting_speeds()\r
`,G=`# topic5_files/financial_invoice_and_report_generator.py\r
# Module: 002_007_string-processing\r
# Topic: Advanced Formatting (f-strings, format() method, padding, alignment)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
"""\r
Topic 5 - File 4: Production Financial Invoice & Fee Receipt Generator\r
Demonstrates:\r
  1. Dynamic table generation with precise alignment (<, >, ^)\r
  2. Fixed-point currency formatting (INR :,.2f)\r
  3. Percentage discounts & GST tax computations (:.1%)\r
  4. Zero-padded serial codes (:06d)\r
  5. Formatted datetime stamps (%d-%b-%Y %I:%M %p)\r
"""\r
\r
from datetime import datetime\r
from typing import List, Dict, Any\r
\r
class InvoiceGenerator:\r
    """Generates professional, formatted financial billing statements."""\r
\r
    INSTITUTE = "CODER & ACCOTAX"\r
    BRANCH = "25(10/A) Shibtala Road, Barrackpore, Kolkata - 700120"\r
    PHONE = "+91 7003756860"\r
    GST_IN = "19AAEC8492Q1ZT"\r
\r
    @classmethod\r
    def generate_receipt(\r
        cls,\r
        invoice_no: int,\r
        student_name: str,\r
        student_id: str,\r
        courses: List[Dict[str, Any]],\r
        discount_rate: float = 0.05,\r
        gst_rate: float = 0.18\r
    ) -> str:\r
        date_str = f"{datetime(2026, 8, 24, 18, 45, 0):%d-%b-%Y %I:%M %p}"\r
        line_w = 76\r
\r
        # Calculate Financials\r
        subtotal = sum(item["fee"] for item in courses)\r
        discount_amount = subtotal * discount_rate\r
        discounted_subtotal = subtotal - discount_amount\r
        gst_amount = discounted_subtotal * gst_rate\r
        net_payable = discounted_subtotal + gst_amount\r
\r
        lines = []\r
        # Header Banner\r
        lines.append("=" * line_w)\r
        lines.append(f"{cls.INSTITUTE:^{line_w}}")\r
        lines.append(f"{cls.BRANCH:^{line_w}}")\r
        lines.append(f"{'Phone: ' + cls.PHONE + ' | GSTIN: ' + cls.GST_IN:^{line_w}}")\r
        lines.append(f"{'OFFICIAL STUDENT FEE RECEIPT':^{line_w}}")\r
        lines.append("=" * line_w)\r
\r
        # Meta Details Grid\r
        lines.append(f"Invoice No : INV-{invoice_no:06d}{'Date & Time: ' + date_str:>49}")\r
        lines.append(f"Student    : {student_name:<30} Student ID : {student_id}")\r
        lines.append("-" * line_w)\r
\r
        # Items Table Header\r
        header = f"{'#':<3} | {'COURSE DESCRIPTION':<36} | {'DURATION':<10} | {'FEE (INR)':>15}"\r
        lines.append(header)\r
        lines.append("-" * line_w)\r
\r
        # Items Rows\r
        for i, item in enumerate(courses, 1):\r
            row = f"{i:<3} | {item['title']:<36} | {item['duration']:<10} | {item['fee']:>15,.2f}"\r
            lines.append(row)\r
\r
        lines.append("-" * line_w)\r
\r
        # Financial Summary Breakdown\r
        lines.append(f"{'Gross Course Fee Subtotal:':>56} INR {subtotal:>12,.2f}")\r
        lines.append(f"{f'Special Early Bird Discount ({discount_rate:.1%}):':>56} -INR {discount_amount:>11,.2f}")\r
        lines.append(f"{'Taxable Assessment Amount:':>56} INR {discounted_subtotal:>12,.2f}")\r
        lines.append(f"{f'Central & State GST ({gst_rate:.1%}):':>56} +INR {gst_amount:>11,.2f}")\r
        lines.append("=" * line_w)\r
        lines.append(f"{'NET PAYABLE AMOUNT:':>56} INR {net_payable:>12,.2f}")\r
        lines.append("=" * line_w)\r
\r
        # Footer Notice\r
        lines.append(f"{'Thank you for learning with Coder & AccoTax!':^{line_w}}")\r
        lines.append(f"{'Website: https://www.codernaccotax.co.in':^{line_w}}")\r
        lines.append("=" * line_w)\r
\r
        return "\\n".join(lines)\r
\r
\r
def run_invoice_demo():\r
    sample_courses = [\r
        {"title": "Python Programming (Basic to Pro)", "duration": "4 Months", "fee": 4500.00},\r
        {"title": "Data Analytics (NumPy & Pandas)", "duration": "3 Months", "fee": 3800.00},\r
        {"title": "Web Development (FastAPI + React)", "duration": "3 Months", "fee": 5200.00},\r
    ]\r
\r
    receipt_text = InvoiceGenerator.generate_receipt(\r
        invoice_no=942,\r
        student_name="Susmita Mukherjee",\r
        student_id="PY-2026-084",\r
        courses=sample_courses,\r
        discount_rate=0.10,  # 10% discount\r
        gst_rate=0.18        # 18% GST\r
    )\r
\r
    print(receipt_text)\r
\r
\r
if __name__ == "__main__":\r
    run_invoice_demo()\r
`,L=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
            PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_007: STRING PROCESSING\r
        TOPIC 5: ADVANCED FORMATTING (F-STRINGS, FORMAT METHOD, PADDING & ALIGNMENT)\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. FORMAT SPECIFICATION MINI-LANGUAGE ANATOMY\r
--------------------------------------------------------------------------------\r
  Syntax: {[expression] : [[fill]align] [sign] [#] [0] [width] [grouping] [.precision] [type]}\r
\r
  Components:\r
  • fill      : Any single character used for padding (e.g. '*', '-', '_', '0').\r
  • align     : '<' (Left), '>' (Right), '^' (Center), '=' (Sign-aware).\r
  • sign      : '+' (Show sign always), '-' (Negative only), ' ' (Leading space for +).\r
  • #         : Alternate form (prefixes 0b, 0o, 0x for binary, octal, hex).\r
  • 0         : Enable zero-padding (equivalent to fill '0' with align '=').\r
  • width     : Minimum total field width.\r
  • grouping  : ',' (Thousands comma) or '_' (Thousands underscore).\r
  • precision : Number of decimal places for floats, or max characters for strings.\r
  • type      : 'f' (float), 'd' (int), 's' (str), '%' (percent), 'e' (scientific),\r
                'b' (binary), 'o' (octal), 'x' / 'X' (hex).\r
\r
--------------------------------------------------------------------------------\r
2. COMMON FORMAT SPECIFIERS CHEAT SHEET\r
--------------------------------------------------------------------------------\r
  Format Code          Sample Value      Output String       Description\r
  ------------------------------------------------------------------------------\r
  {val:.2f}            124.5678          "124.57"            Fixed 2 decimal digits\r
  {val:,.2f}           1250000.5         "1,250,000.50"      Currency with commas\r
  {val:.1%}            0.185             "18.5%"             Percentage formatting\r
  {val:06d}            942               "000942"            Zero-padded 6 digits\r
  {val:<15}            "Python"          "Python         "   Left-aligned width 15\r
  {val:>15}            "Python"          "         Python"   Right-aligned width 15\r
  {val:^15}            "Python"          "    Python     "   Center-aligned width 15\r
  {val:*^15}           "Python"          "****Python*****"   Center fill with '*'\r
  {val:#x}             255               "0xff"              Hexadecimal with prefix\r
  {val:#b}             13                "0b1101"            Binary with prefix\r
  {dt:%d-%b-%Y}        2026-08-24        "24-Aug-2026"       Formatted Datetime\r
\r
--------------------------------------------------------------------------------\r
3. SELF-DOCUMENTING DEBUGGING: f"{var=}" (Python 3.8+)\r
--------------------------------------------------------------------------------\r
  • Placing an '=' sign directly after an expression prints both the expression\r
    text and its evaluated result:\r
      x = 10; y = 25\r
      print(f"{x + y = }")       # Output: "x + y = 35"\r
      print(f"{x * y = :,.2f}")   # Output: "x * y = 250.00"\r
\r
--------------------------------------------------------------------------------\r
4. ESCAPING BRACES & CONVERSION FLAGS\r
--------------------------------------------------------------------------------\r
  • Escaping: Use double curly braces {{ and }} to print literal { and }:\r
      f"JSON: {{ 'id': {user_id} }}" -> "JSON: { 'id': 101 }"\r
  • Conversion Flags:\r
      !s -> Forces str() conversion.\r
      !r -> Forces repr() conversion (adds quotes, shows escape codes).\r
      !a -> Forces ascii() conversion (escapes non-ASCII characters).\r
\r
--------------------------------------------------------------------------------\r
5. str.format() VS f-STRINGS COMPARISON\r
--------------------------------------------------------------------------------\r
  Feature               f-Strings (f"...")          str.format()\r
  ------------------------------------------------------------------------------\r
  Introduced in         Python 3.6                  Python 2.7 / 3.0\r
  Execution Speed       Blistering Fast (Bytecode)  Slower (Function call overhead)\r
  Syntax Readability    Inline & Natural            Positional / Placeholder based\r
  Dynamic Templates     Defined at compile time     Can be loaded dynamically from DB\r
  Dictionary Unpack     Direct variable access      Requires .format(**dict)\r
\r
================================================================================\r
           END OF STUDY NOTE • TOPIC 5: ADVANCED STRING FORMATTING\r
================================================================================\r
`,B=[{question:"What are Formatted String Literals (f-strings) in Python and why are they preferred?",shortAnswer:"f-strings (prefixed with 'f' or 'F') allow embedding Python expressions directly inside string literals using curly braces {}.",explanation:"Introduced in Python 3.6 (PEP 498), f-strings are evaluated at runtime directly into optimized CPython bytecode (BUILD_STRING opcode), making them substantially faster, cleaner, and more readable than str.format() or '%' formatting.",hint:"f-strings are prefixed with f and use {expression}.",level:"basic",codeExample:`name = 'Susmita'
score = 96.5
print(f'Student: {name}, Score: {score:.1f}%')  # 'Student: Susmita, Score: 96.5%'`},{question:"How do you format a floating-point number to exactly two decimal places inside an f-string?",shortAnswer:"{value:.2f}",explanation:"The specifier ':.2f' specifies fixed-point presentation ('f') rounded to 2 digits of precision.",hint:"Use :.2f.",level:"basic",codeExample:`price = 450.7854
print(f'Price: INR {price:.2f}')  # 'Price: INR 450.79' (Rounded!)`},{question:"How do you format large numbers with commas as thousands separators?",shortAnswer:"{value:,} or {value:,.2f}",explanation:"Adding a comma ',' in the format specification inserts commas at thousands groupings (e.g. 1,000,000).",hint:"Use :, in the specifier.",level:"basic",codeExample:`revenue = 1450000.5
print(f'Revenue: INR {revenue:,.2f}')  # 'Revenue: INR 1,450,000.50'`},{question:"How do you format a decimal number as a percentage in Python?",shortAnswer:"{value:.1%} or {value:.2%}",explanation:"The '%' format type multiplies the number by 100, displays it in fixed-point format with the specified precision, and appends a '%' sign.",hint:"Use :.1% or :.2%.",level:"basic",codeExample:`rate = 0.185
print(f'GST Rate: {rate:.1%}')  # 'GST Rate: 18.5%'`},{question:"How do you zero-pad an integer to a fixed length (e.g., 6 digits: 000942)?",shortAnswer:"{number:06d}",explanation:"The specifier ':06d' sets the minimum width to 6 and pads leading positions with zeros.",hint:"Use :06d.",level:"basic",codeExample:`serial = 942
print(f'INV-{serial:06d}')  # 'INV-000942'`},{question:"What do the alignment characters '<', '>', and '^' mean in format specifications?",shortAnswer:"'<' forces left-alignment, '>' forces right-alignment, and '^' forces center-alignment within the specified field width.",explanation:"By default, strings are left-aligned and numbers are right-aligned. You can override this using alignment operators (e.g., {name:<20}, {score:>10}, {title:^30}).",hint:"< = left, > = right, ^ = center.",level:"basic",codeExample:`title = 'Python'
print(f'{title:<10}')  # 'Python    '
print(f'{title:>10}')  # '    Python'
print(f'{title:^10}')  # '  Python  '`},{question:"How do you pad a string with custom characters instead of spaces (e.g., '****Python****')?",shortAnswer:"Specify the fill character immediately before the alignment operator: {value:*^14}",explanation:"The format specification syntax is [[fill]align][width]. For example, '*^14' uses '*' as the fill character, centers the string, and makes total width 14.",hint:"[fill][align][width]",level:"moderate",codeExample:`header = 'REPORT'
print(f'{header:=^24}')  # '=========REPORT========='`},{question:'What is the self-documenting debugging specifier f"{variable=}" introduced in Python 3.8?',shortAnswer:"Placing '=' after an expression prints both the expression text and its evaluated value, simplifying print debugging.",explanation:"Writing f'{x=}' outputs 'x=10'. It preserves whitespace inside braces and can be combined with format specifiers like f'{x * 2 = :.2f}'.",hint:"f'{x=}' prints variable name and its value.",level:"basic",codeExample:`user = 'Susmita'
balance = 4500.5
print(f'{user=}, {balance=:.2f}')  # 'user=\\'Susmita\\', balance=4500.50'`},{question:"How do you escape curly braces in an f-string to output literal '{' or '}'?",shortAnswer:"Use double curly braces: '{{' outputs '{' and '}}' outputs '}'.",explanation:"Because single curly braces denote replacement fields, doubling them tells Python to treat them as literal brace characters.",hint:"Double the curly braces {{ and }}.",level:"basic",codeExample:`user_id = 101
print(f'JSON: {{"id": {user_id}}}')  # 'JSON: {"id": 101}'`},{question:"What do the conversion flags !s, !r, and !a do inside an f-string?",shortAnswer:"!s calls str(), !r calls repr(), and !a calls ascii() on the expression before formatting.",explanation:"!r is particularly helpful in debugging because it displays string quotes and escape sequences (e.g. \\n, \\t).",hint:"!r displays repr(value).",level:"moderate",codeExample:`val = 'Barrackpore\\n'
print(f'{val!s}')  # Prints with newline
print(f'{val!r}')  # Prints 'Barrackpore\\n' with quotes`},{question:"How do you format datetime objects directly inside f-strings?",shortAnswer:"Use standard strftime format specifiers after a colon: f'{date:%Y-%m-%d %H:%M:%S}'",explanation:"Any valid strftime code (e.g. %Y for 4-digit year, %B for full month name, %I:%M %p for 12-hour clock) can be placed directly in the f-string specifier.",hint:"Use strftime directives after colon.",level:"moderate",codeExample:`from datetime import datetime
now = datetime(2026, 8, 24, 18, 30)
print(f'{now:%d-%b-%Y (%A)}')  # '24-Aug-2026 (Monday)'`},{question:"How do you convert an integer to binary, octal, and hexadecimal strings inside an f-string?",shortAnswer:"Use ':b' (binary), ':o' (octal), and ':x' or ':X' (hexadecimal). Use ':#' for prefix (0b, 0o, 0x).",explanation:"The alternate '#' modifier automatically prepends base prefixes: ':#b' -> 0b1101, ':#x' -> 0xff, ':#X' -> 0XFF.",hint:"b = binary, o = octal, x = hex.",level:"basic",codeExample:`num = 255
print(f'Binary: {num:#b}, Octal: {num:#o}, Hex: {num:#x}')
# 'Binary: 0b11111111, Octal: 0o377, Hex: 0xff'`},{question:"What improvement did PEP 701 bring to f-strings in Python 3.12+?",shortAnswer:"It lifted restrictions on quotes, allowing arbitrary reuse of quotes, backslashes, comments, and multi-line expressions inside expressions.",explanation:"In Python 3.11 and earlier, reusing the same quote type inside an f-string expression caused syntax errors. In Python 3.12+, f-strings use a formalized grammar allowing quotes to be nested arbitrarily.",hint:"Python 3.12 allows arbitrary quote nesting inside f-strings.",level:"complex",codeExample:`data = {'name': 'Susmita'}
# Valid in Python 3.12+ (double quotes inside double quotes):
# print(f"Student: {data["name"]}")`},{question:"When should you still use str.format() instead of f-strings?",shortAnswer:"When the template string is stored externally (e.g. in a database, JSON, or localization file) and resolved dynamically at runtime.",explanation:"f-strings are evaluated at the point of compilation/definition in code. If the user loads dynamic templates from a database, str.format() or string.Template is required.",hint:"Use str.format() when template is loaded dynamically at runtime.",level:"moderate",codeExample:`template_from_db = 'Welcome {name}, your balance is INR {bal:,.2f}'
print(template_from_db.format(name='Susmita', bal=4500.0))`},{question:"How do you unpack a dictionary into str.format()?",shortAnswer:"Using the dictionary unpacking operator **: template.format(**my_dict)",explanation:"Passing **my_dict unpacks its key-value pairs as named keyword arguments matching placeholder names.",hint:"Use **dict.",level:"basic",codeExample:`student = {'name': 'Rahul', 'dept': 'Python', 'marks': 92}
msg = 'Student {name} ({dept}) scored {marks}%'.format(**student)
print(msg)`},{question:"What is the difference between sign specifier '+' vs ' ' (space) in numeric formatting?",shortAnswer:"'+' always displays '+' for positive and '-' for negative; ' ' displays a leading space for positive and '-' for negative.",explanation:"The space specifier ' ' ensures positive and negative numbers align neatly in columns by giving positive numbers a leading space equal to the minus sign width.",hint:"+ forces plus sign; space aligns positive numbers with negative ones.",level:"moderate",codeExample:`pos, neg = 45.0, -45.0
print(f'{pos:+10.1f}\\n{neg:+10.1f}')
print(f'{pos: 10.1f}\\n{neg: 10.1f}')`},{question:"What does the '=' alignment specifier do in numeric formatting?",shortAnswer:"It pads after the sign but before the digits: e.g. f'{-5:=+10}' -> '-000000005'.",explanation:"The '=' sign-aware alignment places padding characters between the sign (+/-) and the actual numbers, ensuring column borders stay intact.",hint:"Pads between sign and digits.",level:"complex",codeExample:`val = -42.5
print(f'{val:=+10.2f}')  # '-    42.50'`},{question:"Can you dynamically specify the width or precision in an f-string?",shortAnswer:"Yes, by nesting an expression inside curly braces: f'{value:{width}.{precision}f}'",explanation:"f-strings support nested curly braces within the format specifier to control width and precision dynamically from variables.",hint:"Nest curly braces for dynamic width/precision.",level:"complex",codeExample:`val = 3.14159265
w, p = 12, 3
print(f'Result: [{val:{w}.{p}f}]')  # 'Result: [       3.142]'`},{question:"Why is an f-string faster than str.format()?",shortAnswer:"f-strings are parsed during compilation and emit optimized bytecode instructions directly, eliminating runtime string parsing and function call overhead.",explanation:"str.format() has to parse the format string on every invocation and make an expensive Python function call. f-strings build the string in optimized C-level bytecodes.",hint:"f-strings are compiled directly to bytecode.",level:"moderate",codeExample:"# f-strings execute in ~20 nanoseconds in CPython"},{question:"How do you format an exponential / scientific notation number?",shortAnswer:"{value:.2e} or {value:.2E}",explanation:"The 'e' or 'E' format type formats the number in scientific notation with exponential power.",hint:"Use :.2e or :.2E.",level:"basic",codeExample:`speed_of_light = 299792458
print(f'c = {speed_of_light:.2e} m/s')  # 'c = 3.00e+08 m/s'`},{question:"How do you truncate a long string to a maximum number of characters using format specifications?",shortAnswer:"{string:.N} where N is the maximum allowed character count.",explanation:"When applied to strings, the precision specifier ('.N') acts as a truncation limit, extracting at most N characters.",hint:"Use :.N on strings to truncate.",level:"moderate",codeExample:`description = 'Coder and AccoTax Educational Tutorials Barrackpore'
print(f'{description:.15}')  # 'Coder and AccoT'`},{question:"What error occurs if you write an invalid expression like f'{1/0}' in an f-string?",shortAnswer:"ZeroDivisionError is raised at runtime when the f-string is evaluated.",explanation:"Because f-string replacement fields are genuine Python expressions, runtime exceptions (like ZeroDivisionError, NameError, IndexError) will be raised normally.",hint:"Standard Python exceptions are raised.",level:"basic",codeExample:`try:
    f'{10/0}'
except ZeroDivisionError as e:
    print(e)  # division by zero`},{question:"How can you print a centered banner with equals signs: '========== PYTHON =========='?",shortAnswer:"f'{title: =^30}' or f'{title:=^30}'",explanation:"Using '=' as the fill character with '^' center alignment and width 30 surrounds the title with equal signs.",hint:"Use :=^30.",level:"basic",codeExample:`title = ' PYTHON '
print(f'{title:=^30}')  # '=========== PYTHON ==========='`},{question:"How does the underscore grouping separator (:_) differ from comma grouping (:,)?",shortAnswer:"It uses underscores '_' instead of commas ',' as thousands separators.",explanation:"Underscore separators match Python's integer literal syntax (e.g. 1_000_000) and can also group binary numbers in nibbles: f'{0b11010110:_b}' -> '1101_0110'.",hint:"Underscores match Python code literal style.",level:"moderate",codeExample:`num = 1000000
print(f'{num:_}')     # '1_000_000'
byte_val = 0b11010110
print(f'{byte_val:_b}') # '1101_0110'`},{question:"Can an f-string span multiple lines in Python?",shortAnswer:`Yes, by using triple quotes (f'''...''' or f"""...""") or string literal concatenation across lines.`,explanation:"Multi-line f-strings support newline preservation or implicit concatenation inside parentheses.",hint:"Use triple quotes or parenthesized concatenation.",level:"basic",codeExample:`name = 'Susmita'
role = 'Developer'
msg = (
    f'Student: {name}\\n'
    f'Role: {role}'
)
print(msg)`}];function J(){const y=r.useRef([]),[l,N]=r.useState("anatomy"),[_,S]=r.useState("1245000.7856"),[v,A]=r.useState(24),[d,P]=r.useState("^"),[f,I]=r.useState("*"),[c,E]=r.useState(2),[h,T]=r.useState(!0),[i,R]=r.useState("f");r.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(m=>{m.isIntersecting&&m.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return y.current.forEach(n=>{n&&t.observe(n)}),()=>t.disconnect()},[]);const s=t=>{t&&!y.current.includes(t)&&y.current.push(t)},u=(()=>{const t=parseFloat(_);let n="";if(!isNaN(t)&&(i==="f"||i==="%"))if(i==="%")n=`${(t*100).toFixed(c)}%`;else{const a=t.toFixed(c);if(h){const x=a.split(".");x[0]=x[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),n=x.join(".")}else n=a}else if(!isNaN(t)&&i==="d"){const a=Math.floor(t);n=h?a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):a.toString()}else n=_;const m=n.length,j=Math.max(v,m),g=j-m,b=f||" ";let p=n;if(d==="<")p=n+b.repeat(g);else if(d===">")p=b.repeat(g)+n;else if(d==="^"){const a=Math.floor(g/2),x=g-a;p=b.repeat(a)+n+b.repeat(x)}const w=`${f!==" "?f:""}${d}${j}${h&&!isNaN(t)?",":""}${i==="f"||i==="%"?`.${c}`:""}${i}`;return{specifier:w,pythonCode:`f"Result: [{value:${w}}]"`,rendered:`[${p}]`,charCount:p.length}})();return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-amber-500/30 selection:text-amber-200",children:[e.jsx("style",{children:`
        .section-hidden {
          transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .section-visible {
          transform: translateY(0);
        }
        @keyframes pulseGlowAmber {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(245, 158, 11, 0.4)); }
          50% { filter: drop-shadow(0 0 10px rgba(245, 158, 11, 0.8)); }
        }
        .animate-glow-amber {
          animation: pulseGlowAmber 3s infinite ease-in-out;
        }
      `}),e.jsxs("header",{ref:s,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-amber-950/80 text-amber-300 px-3 py-1 rounded-full border border-amber-800/80 shadow-sm shadow-amber-950/50",children:"Segment 2 • Module 002_007"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-blue-950/80 text-blue-300 px-3 py-1 rounded-full border border-blue-800/80 shadow-sm shadow-blue-950/50",children:"Topic 5"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"String Processing & Pattern Handling"})]}),e.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:"Advanced String Formatting, f-Strings & Alignments"}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master formatted string literals (",e.jsx("code",{className:"text-amber-400 font-mono",children:'f"..."'}),"), inline expressions, self-documenting debugging (",e.jsx("code",{className:"text-cyan-400 font-mono",children:'f"{var=}"'}),"), the Format Specification Mini-Language, currency commas (",e.jsx("code",{className:"text-emerald-400 font-mono",children:":,.2f"}),"), alignments (",e.jsx("code",{className:"text-purple-400 font-mono",children:"<"}),", ",e.jsx("code",{className:"text-purple-400 font-mono",children:">"}),", ",e.jsx("code",{className:"text-purple-400 font-mono",children:"^"}),"), and ",e.jsx("code",{className:"text-pink-400 font-mono",children:"str.format()"}),"."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ Bytecode-Optimized f-Strings (PEP 498 & 701)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📐 Format Mini-Language Anatomy"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"💰 Currency (:,.2f) & Percentage (:.1%)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🐞 Self-Documenting Debugging ({var=})"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"✨"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Modern Python String Formatting Architecture"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["Python has evolved through three distinct formatting paradigms: legacy ",e.jsx("strong",{className:"text-slate-400",children:"% printf-style"}),", ",e.jsx("strong",{className:"text-blue-400",children:"str.format()"}),", and modern ",e.jsx("strong",{className:"text-amber-400",children:"Formatted String Literals (f-strings)"}),"."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-amber-950/40 border border-amber-800/60 shadow-lg shadow-amber-950/30 transition-all duration-300 hover:scale-[1.01] hover:border-amber-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"⚡"})," f-Strings (PEP 498)"]}),e.jsx("p",{className:"text-sm text-slate-300 mb-2",children:"Parsed at compile time and emitted directly as optimized bytecode. Evaluates arbitrary expressions, arithmetic, and ternary branches inline."}),e.jsx("span",{className:"text-xs text-amber-400/80 font-mono",children:"Status: Standard & Fastest"})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg shadow-cyan-950/30 transition-all duration-300 hover:scale-[1.01] hover:border-cyan-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"🐞"})," Debugging Specifier"]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-2",children:["Writing ",e.jsx("code",{className:"text-cyan-300 font-mono",children:'f"{total=:.2f}"'})," automatically prints both the variable expression name and its formatted value."]}),e.jsx("span",{className:"text-xs text-cyan-400/80 font-mono",children:"Introduced in: Python 3.8+"})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg shadow-purple-950/30 transition-all duration-300 hover:scale-[1.01] hover:border-purple-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"📐"})," Format Mini-Language"]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-2",children:["Standardized grammar for controlling width, precision, thousands commas (",e.jsx("code",{className:"text-purple-300 font-mono",children:":,"}),"), alignments (",e.jsx("code",{className:"text-purple-300 font-mono",children:"<"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:">"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"^"}),"), and bases."]}),e.jsx("span",{className:"text-xs text-purple-400/80 font-mono",children:"Feature: Rich Formatting Engine"})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-amber-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-2",children:"Format Specification Mini-Language Structure"}),e.jsx("div",{className:"bg-slate-900 p-3 rounded-lg font-mono text-xs sm:text-sm text-amber-300 border border-slate-800 overflow-x-auto",children:"{[expression] : [[fill]align] [sign] [#] [0] [width] [grouping] [.precision] [type]}"}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-400 mt-2",children:["Example: ",e.jsx("code",{className:"text-emerald-300 font-mono",children:'f"{fee:*^20,.2f}"'}),"  →  Fill with ",e.jsx("code",{className:"text-slate-200 font-mono",children:"'*'"}),", center align ",e.jsx("code",{className:"text-slate-200 font-mono",children:"'^'"}),", total width ",e.jsx("code",{className:"text-slate-200 font-mono",children:"20"}),", thousands comma ",e.jsx("code",{className:"text-slate-200 font-mono",children:"','"}),", 2 float decimals ",e.jsx("code",{className:"text-slate-200 font-mono",children:"'.2f'"}),"."]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"🔍"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Format Mini-Language & Alignments"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>N("anatomy"),className:o("px-3 py-1.5 rounded-lg transition-all",l==="anatomy"?"bg-amber-900/50 text-amber-300 border border-amber-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Mini-Language Anatomy"}),e.jsx("button",{onClick:()=>N("alignments"),className:o("px-3 py-1.5 rounded-lg transition-all",l==="alignments"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Alignment & Padding"}),e.jsx("button",{onClick:()=>N("numbers"),className:o("px-3 py-1.5 rounded-lg transition-all",l==="numbers"?"bg-emerald-900/50 text-emerald-300 border border-emerald-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Number & Currency Layout"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining syntax breakdown, padding mechanics, and precision formatting:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:l==="anatomy"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#f59e0b",fontSize:"14",fontWeight:"bold",children:"FORMAT SPECIFIER BREAKDOWN: {fee : * ^ + 20 , .2 f}"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"100",height:"70",rx:"8",fill:"#1e293b",stroke:"#f59e0b",strokeWidth:"1.5"}),e.jsx("text",{x:"50",y:"25",fill:"#fde68a",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"1. FILL"}),e.jsx("text",{x:"50",y:"50",fill:"#38bdf8",fontSize:"18",fontWeight:"extrabold",textAnchor:"middle",children:"'*'"}),e.jsx("rect",{x:"115",y:"0",width:"100",height:"70",rx:"8",fill:"#1e293b",stroke:"#a855f7",strokeWidth:"1.5"}),e.jsx("text",{x:"165",y:"25",fill:"#e9d5ff",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"2. ALIGN"}),e.jsx("text",{x:"165",y:"50",fill:"#c084fc",fontSize:"18",fontWeight:"extrabold",textAnchor:"middle",children:"'^'"}),e.jsx("rect",{x:"230",y:"0",width:"100",height:"70",rx:"8",fill:"#1e293b",stroke:"#0ea5e9",strokeWidth:"1.5"}),e.jsx("text",{x:"280",y:"25",fill:"#bae6fd",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"3. SIGN"}),e.jsx("text",{x:"280",y:"50",fill:"#38bdf8",fontSize:"18",fontWeight:"extrabold",textAnchor:"middle",children:"'+'"}),e.jsx("rect",{x:"345",y:"0",width:"100",height:"70",rx:"8",fill:"#1e293b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"395",y:"25",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"4. WIDTH"}),e.jsx("text",{x:"395",y:"50",fill:"#34d399",fontSize:"18",fontWeight:"extrabold",textAnchor:"middle",children:"'20'"}),e.jsx("rect",{x:"460",y:"0",width:"100",height:"70",rx:"8",fill:"#1e293b",stroke:"#f43f5e",strokeWidth:"1.5"}),e.jsx("text",{x:"510",y:"25",fill:"#fda4af",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"5. GROUP"}),e.jsx("text",{x:"510",y:"50",fill:"#fb7185",fontSize:"18",fontWeight:"extrabold",textAnchor:"middle",children:"','"}),e.jsx("rect",{x:"575",y:"0",width:"115",height:"70",rx:"8",fill:"#1e293b",stroke:"#eab308",strokeWidth:"1.5"}),e.jsx("text",{x:"632",y:"25",fill:"#fef08a",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"6. PRECISION"}),e.jsx("text",{x:"632",y:"50",fill:"#facc15",fontSize:"18",fontWeight:"extrabold",textAnchor:"middle",children:"'.2'"}),e.jsx("rect",{x:"705",y:"0",width:"105",height:"70",rx:"8",fill:"#1e293b",stroke:"#6366f1",strokeWidth:"1.5"}),e.jsx("text",{x:"757",y:"25",fill:"#c7d2fe",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"7. TYPE"}),e.jsx("text",{x:"757",y:"50",fill:"#818cf8",fontSize:"18",fontWeight:"extrabold",textAnchor:"middle",children:"'f'"})]}),e.jsxs("g",{transform:"translate(30, 145)",children:[e.jsx("rect",{x:"0",y:"0",width:"810",height:"135",rx:"8",fill:"#090d16",stroke:"#334155"}),e.jsx("text",{x:"20",y:"30",fill:"#34d399",fontSize:"13",fontWeight:"bold",children:"Evaluated Result on fee = 4500.5:"}),e.jsx("rect",{x:"20",y:"45",width:"770",height:"40",rx:"6",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"405",y:"70",fill:"#ecfdf5",fontSize:"16",fontWeight:"bold",textAnchor:"middle",children:'"*****+4,500.50******" (Length: 20 chars)'}),e.jsx("text",{x:"20",y:"115",fill:"#94a3b8",fontSize:"12",children:"Centers the value, prepends the sign, formats thousands comma, limits decimals to 2, and pads remaining 10 slots with '*'."})]})]}):l==="alignments"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:'ALIGNMENT OPERATORS: target = "PYTHON", width = 20'}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"810",height:"55",rx:"8",fill:"#1e1b4b",stroke:"#6366f1"}),e.jsx("text",{x:"20",y:"33",fill:"#c7d2fe",fontSize:"14",fontWeight:"bold",children:'Left (<) : f"{target:<20}"'}),e.jsx("text",{x:"450",y:"33",fill:"#a7f3d0",fontSize:"14",fontStyle:"italic",children:'"PYTHON              "'}),e.jsx("rect",{x:"0",y:"70",width:"810",height:"55",rx:"8",fill:"#1e1b4b",stroke:"#6366f1"}),e.jsx("text",{x:"20",y:"103",fill:"#c7d2fe",fontSize:"14",fontWeight:"bold",children:'Right (>) : f"{target:>20}"'}),e.jsx("text",{x:"450",y:"103",fill:"#a7f3d0",fontSize:"14",fontStyle:"italic",children:'"              PYTHON"'}),e.jsx("rect",{x:"0",y:"140",width:"810",height:"55",rx:"8",fill:"#1e1b4b",stroke:"#6366f1"}),e.jsx("text",{x:"20",y:"173",fill:"#c7d2fe",fontSize:"14",fontWeight:"bold",children:'Center (^) : f"{target:^20}"'}),e.jsx("text",{x:"450",y:"173",fill:"#a7f3d0",fontSize:"14",fontStyle:"italic",children:'"       PYTHON       "'}),e.jsx("rect",{x:"0",y:"210",width:"810",height:"55",rx:"8",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"20",y:"243",fill:"#a7f3d0",fontSize:"14",fontWeight:"bold",children:'Custom Fill : f"{target:*^20}"'}),e.jsx("text",{x:"450",y:"243",fill:"#ecfdf5",fontSize:"14",fontWeight:"bold",children:'"*******PYTHON*******"'})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#34d399",fontSize:"14",fontWeight:"bold",children:"NUMBER, CURRENCY & BASE FORMATTING MATRIX"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"75",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"25",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:'Currency INR : f"INR {1250000.5:,.2f}"'}),e.jsx("text",{x:"20",y:"52",fill:"#ecfdf5",fontSize:"15",fontWeight:"bold",children:'"INR 1,250,000.50"'}),e.jsx("rect",{x:"420",y:"0",width:"390",height:"75",rx:"8",fill:"#0c4a6e",stroke:"#0ea5e9"}),e.jsx("text",{x:"440",y:"25",fill:"#bae6fd",fontSize:"13",fontWeight:"bold",children:'Percentage : f"{0.185:.1%}"'}),e.jsx("text",{x:"440",y:"52",fill:"#e0f2fe",fontSize:"15",fontWeight:"bold",children:'"18.5%" (Auto-multiplies 100)'}),e.jsx("rect",{x:"0",y:"90",width:"390",height:"75",rx:"8",fill:"#3b0764",stroke:"#a855f7"}),e.jsx("text",{x:"20",y:"115",fill:"#e9d5ff",fontSize:"13",fontWeight:"bold",children:'Zero-Padded Invoice : f"INV-{942:06d}"'}),e.jsx("text",{x:"20",y:"142",fill:"#fae8ff",fontSize:"15",fontWeight:"bold",children:'"INV-000942"'}),e.jsx("rect",{x:"420",y:"90",width:"390",height:"75",rx:"8",fill:"#451a03",stroke:"#f59e0b"}),e.jsx("text",{x:"440",y:"115",fill:"#fde68a",fontSize:"13",fontWeight:"bold",children:'Hex Base Prefixed : f"{255:#x}"'}),e.jsx("text",{x:"440",y:"142",fill:"#fef3c7",fontSize:"15",fontWeight:"bold",children:'"0xff" (Binary: 0b11111111)'}),e.jsx("rect",{x:"0",y:"180",width:"810",height:"65",rx:"8",fill:"#090d16",stroke:"#334155"}),e.jsx("text",{x:"20",y:"205",fill:"#38bdf8",fontSize:"13",fontWeight:"bold",children:'Datetime Specifier : f"{datetime.now():%d-%b-%Y %I:%M %p}"'}),e.jsx("text",{x:"20",y:"228",fill:"#cbd5e1",fontSize:"13",children:'"24-Aug-2026 06:45 PM" (Native strftime inside f-strings)'})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Format Specification Playground"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Adjust the sliders, alignment, fill character, and precision below to generate dynamic Python f-string expressions in real time:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",children:[e.jsxs("div",{className:"space-y-4 bg-slate-950 p-5 rounded-xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1",children:"Sample Value (Text or Number)"}),e.jsx("input",{type:"text",value:_,onChange:t=>S(t.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-slate-100 font-mono text-sm focus:outline-none focus:border-amber-500"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1",children:["Field Width: ",v]}),e.jsx("input",{type:"range",min:"10",max:"40",value:v,onChange:t=>A(parseInt(t.target.value,10)),className:"w-full accent-amber-500 cursor-pointer"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1",children:["Decimals / Precision: ",c]}),e.jsx("input",{type:"range",min:"0",max:"4",value:c,onChange:t=>E(parseInt(t.target.value,10)),className:"w-full accent-amber-500 cursor-pointer"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1",children:"Alignment Operator"}),e.jsx("div",{className:"flex gap-2",children:[{id:"<",label:"Left (<)"},{id:">",label:"Right (>)"},{id:"^",label:"Center (^)"}].map(t=>e.jsx("button",{onClick:()=>P(t.id),className:o("flex-1 py-1.5 rounded-lg text-xs font-mono font-bold border transition-all",d===t.id?"bg-amber-950 border-amber-500 text-amber-300 shadow":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:t.label},t.id))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1",children:"Fill Character"}),e.jsx("div",{className:"flex gap-2",children:[{val:" ",label:"Space ' '"},{val:"*",label:"Star '*'"},{val:"-",label:"Dash '-'"},{val:"=",label:"Equal '='"},{val:"0",label:"Zero '0'"}].map(t=>e.jsx("button",{onClick:()=>I(t.val),className:o("flex-1 py-1.5 rounded-lg text-xs font-mono font-bold border transition-all",f===t.val?"bg-purple-950 border-purple-500 text-purple-300 shadow":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:t.label},t.val))})]}),e.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-slate-800",children:[e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer text-xs font-mono text-slate-300",children:[e.jsx("input",{type:"checkbox",checked:h,onChange:t=>T(t.target.checked),className:"accent-amber-500"}),"Thousands Comma (:,)"]}),e.jsx("div",{className:"flex gap-1.5 text-xs font-mono",children:["f","%","d","s"].map(t=>e.jsxs("button",{onClick:()=>R(t),className:o("px-2.5 py-1 rounded border",i===t?"bg-emerald-950 border-emerald-500 text-emerald-300 font-bold":"bg-slate-900 border-slate-800 text-slate-400"),children:[":",t]},t))})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block",children:"Generated Python f-String Statement"}),e.jsx("pre",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800 text-amber-300 font-mono text-sm overflow-x-auto",children:u.pythonCode}),e.jsxs("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block mt-2",children:["Specifier Anatomy: ",e.jsxs("code",{className:"text-cyan-300 font-mono",children:[":",u.specifier]})]})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400",children:"Rendered Terminal Output"}),e.jsxs("span",{className:"text-xs font-mono text-emerald-400 font-bold",children:["Length: ",u.charCount," chars"]})]}),e.jsx("pre",{className:"p-4 bg-slate-900 rounded-lg border border-slate-800 text-emerald-300 font-mono text-base overflow-x-auto font-bold",children:u.rendered})]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚙️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Format Specifier Cheat Sheet"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Format Specifier"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Category"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Sample Value"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Rendered Output"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"{val:.2f}"}),e.jsx("td",{className:"py-3 px-4",children:"Float"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"124.5678"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"'124.57'"}),e.jsx("td",{className:"py-3 px-4",children:"Fixed 2 decimal digits (rounded)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"{val:,.2f}"}),e.jsx("td",{className:"py-3 px-4",children:"Currency"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"1250000.5"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"'1,250,000.50'"}),e.jsx("td",{className:"py-3 px-4",children:"Financial currency formatting with thousands commas"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"{val:.1%}"}),e.jsx("td",{className:"py-3 px-4",children:"Percentage"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"0.185"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"'18.5%'"}),e.jsx("td",{className:"py-3 px-4",children:"Tax rate & discount percentages"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"{val:06d}"}),e.jsx("td",{className:"py-3 px-4",children:"Integer Pad"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"942"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"'000942'"}),e.jsx("td",{className:"py-3 px-4",children:"Fixed-length invoice serials & IDs"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"{val:*^20}"}),e.jsx("td",{className:"py-3 px-4",children:"Alignment"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:'"PYTHON"'}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"'*******PYTHON*******'"}),e.jsx("td",{className:"py-3 px-4",children:"Centered banner headers"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"{val=}"}),e.jsx("td",{className:"py-3 px-4",children:"Debugging"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"x = 10"}),e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-400 font-bold",children:"'x=10'"}),e.jsx("td",{className:"py-3 px-4",children:"Self-documenting debug logging"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-pink-300 font-semibold",children:"{val:#x}"}),e.jsx("td",{className:"py-3 px-4",children:"Hex Base"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"255"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"'0xff'"}),e.jsx("td",{className:"py-3 px-4",children:"Prefixed hexadecimal notation"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-300 font-semibold",children:"{dt:%d-%b-%Y}"}),e.jsx("td",{className:"py-3 px-4",children:"Datetime"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"datetime.now()"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"'24-Aug-2026'"}),e.jsx("td",{className:"py-3 px-4",children:"Standardized date representation"})]})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating f-strings, self-documenting debugging, alignment engines, str.format() dictionary unpacking, and financial fee receipt generators:"}),e.jsx(C,{files:[{filename:"fstring_expressions_and_debugging.py",code:D,description:"Inline expressions, ternary logic, f'{var=}' debugging, brace escaping, and datetime formatters."},{filename:"padding_alignment_and_numbers.py",code:M,description:"Alignments (<, >, ^, =), custom fill characters, float precision, thousands commas, and base conversions."},{filename:"format_method_and_legacy_interpolation.py",code:W,description:"str.format() positional & named mapping, **dict unpacking, legacy %, and speed benchmarks."},{filename:"financial_invoice_and_report_generator.py",code:G,description:"Production financial invoice & student fee billing receipt generator with exact column alignments."}]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Forgetting to Escape JSON / CSS Braces"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:`f"JSON: {'id': 101}"`})," raises a ",e.jsx("code",{className:"text-rose-300 font-mono",children:"SyntaxError"})," because Python tries to evaluate ",e.jsx("code",{className:"text-rose-300 font-mono",children:"'id': 101"})," as a dictionary expression."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Double the braces: ",e.jsx("code",{className:"text-emerald-300",children:`f"JSON: {{'id': {uid}}}"`})]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Quote Clashes in Python ≤ 3.11"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-amber-300 font-mono",children:'f"Hello {data["name"]}"'})," crashed in Python 3.11 with ",e.jsx("code",{className:"text-amber-300 font-mono",children:"SyntaxError"})," due to matching outer double quotes."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Tip:"})," Alternate quotes ",e.jsx("code",{className:"text-emerald-300",children:`f'{data["name"]}'`})," or upgrade to Python 3.12+ (PEP 701)!"]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Float Rounding Imprecision"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:[e.jsx("code",{className:"text-purple-300 font-mono",children:'f"{2.675:.2f}"'})," might render as ",e.jsx("code",{className:"text-purple-300 font-mono",children:'"2.67"'})," instead of ",e.jsx("code",{className:"text-purple-300 font-mono",children:'"2.68"'})," due to standard IEEE 754 binary floating-point representation."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"decimal.Decimal"})," for financial accounting calculations!"]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Dynamic Templates with f-Strings"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"f-strings cannot format strings loaded from a database or JSON file at runtime because they are evaluated only at compile time."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"template_str.format(**params)"})," for runtime dynamic templates!"]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering f-string mechanics, debugging specifiers, alignment operators, and performance benchmarks:"}),e.jsx(F,{questions:B})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with format mini-language rules, alignment tables, and invoice generators:"}),e.jsx("div",{className:"mb-10",children:e.jsx(k,{content:L,filename:"python_topic5_advanced_formatting_notes.txt",title:"Print Topic 5 Study Notes"})}),e.jsx(O,{})]})]})]})}export{J as default};
