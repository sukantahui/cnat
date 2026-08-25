import{b as n,j as e,bg as x}from"./vendor-react-core-Doz9nIC6.js";import{P as T}from"./PythonFileLoader-hCi5osN-.js";import{P as C}from"./PlainTextPrint-C08xhKA4.js";import{F as P}from"./FAQTemplate-CkSqDH4B.js";import{T as z}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const R=`# topic3_files/json_load_vs_loads_file_and_string_deserializer.py\r
# Module: 003_004_working-with-json\r
# Topic: Deserialization: json.load() vs json.loads()\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 3 - File 1: \`json.load()\` vs \`json.loads()\` Deserialization Mechanics\r
Demonstrates:\r
  1. \`json.loads()\`: Deserializing from in-memory string or bytes/bytearrays\r
  2. \`json.load()\`: Deserializing directly from file-like stream objects\r
  3. Catching and diagnosing \`json.JSONDecodeError\` with line and column precision\r
"""\r
\r
import json\r
import io\r
\r
def demonstrate_load_vs_loads():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - \`json.load()\` VS \`json.loads()\` DESERIALIZATION")\r
    print("=" * 70)\r
\r
    # 1. \`json.loads()\` - In-Memory String and Bytes Deserialization:\r
    raw_json_str = '{"student_id": "STU-101", "name": "Sourav Mukherjee", "score": 94.5}'\r
    raw_json_bytes = b'{"student_id": "STU-102", "name": "Priyanka Sen", "score": 91.0}'\r
\r
    print("1. In-Memory Parsing with \`json.loads()\`:")\r
    doc_from_str = json.loads(raw_json_str)\r
    doc_from_bytes = json.loads(raw_json_bytes)  # Accepts UTF-8 bytes directly!\r
\r
    print(f"   * Parsed from String : {doc_from_str['name']} ({doc_from_str['student_id']})")\r
    print(f"   * Parsed from Bytes  : {doc_from_bytes['name']} ({doc_from_bytes['student_id']})\\n")\r
\r
    # 2. \`json.load()\` - Direct File / Stream Deserialization:\r
    print("2. Direct Stream Deserialization with \`json.load()\`:")\r
    mock_file_stream = io.StringIO('{"institution": "Coder & AccoTax", "batch": 2026, "active": true}')\r
    doc_from_stream = json.load(mock_file_stream)\r
\r
    print(f"   * Parsed from Stream : {doc_from_stream['institution']} (Batch {doc_from_stream['batch']})\\n")\r
\r
    # 3. Catching and Pinpointing \`JSONDecodeError\`:\r
    print("3. Pinpointing Malformed JSON with \`json.JSONDecodeError\`:")\r
    corrupt_json = '{\\n  "name": "Debolina Roy",\\n  "courses": ["Python Core", "Data Science",],\\n  "score": 96.0\\n}'\r
\r
    try:\r
        json.loads(corrupt_json)\r
    except json.JSONDecodeError as exc:\r
        print("   [DECODE EXCEPTION CAUGHT]")\r
        print(f"   * Error Message : {exc.msg}")\r
        print(f"   * Line Number   : Line {exc.lineno}")\r
        print(f"   * Column Number : Column {exc.colno}")\r
        print(f"   * Char Position : Index {exc.pos}")\r
\r
    print(r"""\r
Rule Summary:\r
  - \`json.loads()\` parses string (\`str\`) or UTF-8 \`bytes\` already in memory.\r
  - \`json.load()\` parses directly from open readable file objects or network streams.\r
  - \`JSONDecodeError\` gives exact \`lineno\` and \`colno\` for rapid debugging.\r
""")\r
    print("[PASSED] \`json.load()\` vs \`json.loads()\` Deserialization Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_load_vs_loads()\r
`,F=`# topic3_files/custom_number_decoding_parse_float_parse_int.py\r
# Module: 003_004_working-with-json\r
# Topic: Deserialization: json.load() vs json.loads()\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 3 - File 2: Custom Numeric Decoding (\`parse_float\` & \`parse_int\`)\r
Demonstrates:\r
  1. Preventing IEEE-754 binary floating-point drift in financial records using \`parse_float=Decimal\`\r
  2. Preserving 64-bit and 128-bit large integer precision using \`parse_int=str\`\r
  3. Handling non-standard float constants with \`parse_constant\`\r
"""\r
\r
import json\r
from decimal import Decimal\r
\r
def demonstrate_custom_number_decoding():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - CUSTOM NUMERIC DECODING (\`parse_float\` & \`parse_int\`)")\r
    print("=" * 70)\r
\r
    # Financial ledger payload with precise micro-decimal cents and a 64-bit transaction ID:\r
    ledger_json = """\r
    {\r
        "transaction_id": 9223372036854775807,\r
        "student_id": "STU-101",\r
        "tuition_fee": 28500.10,\r
        "gst_tax": 5130.018,\r
        "discount_rebate": 1500.05\r
    }\r
    """\r
\r
    # 1. Default Python Decoding (Uses standard float and int):\r
    print("1. Standard Float Decoding (Susceptible to IEEE-754 Precision Drift):")\r
    default_doc = json.loads(ledger_json)\r
    calculated_total_float = default_doc["tuition_fee"] + default_doc["gst_tax"] - default_doc["discount_rebate"]\r
    print(f"   * Raw Decoded Float Fee : {default_doc['tuition_fee']} (Type: {type(default_doc['tuition_fee']).__name__})")\r
    print(f"   * Float Net Total       : {calculated_total_float} (May exhibit subtle binary rounding drift!)\\n")\r
\r
    # 2. High-Precision Financial Decoding with \`parse_float=Decimal\`:\r
    print("2. High-Precision Decoding (\`parse_float=Decimal\`):")\r
    decimal_doc = json.loads(ledger_json, parse_float=Decimal)\r
    calculated_total_decimal = decimal_doc["tuition_fee"] + decimal_doc["gst_tax"] - decimal_doc["discount_rebate"]\r
    print(f"   * Decoded Decimal Fee   : {decimal_doc['tuition_fee']} (Type: {type(decimal_doc['tuition_fee']).__name__})")\r
    print(f"   * Exact Decimal Total   : INR {calculated_total_decimal} (100% Exact Financial Arithmetic!)\\n")\r
\r
    # 3. Preserving 64-bit Large IDs with \`parse_int=str\`:\r
    print("3. Preserving Large Numeric IDs as Strings (\`parse_int=str\`):")\r
    str_int_doc = json.loads(ledger_json, parse_int=str)\r
    print(f"   * Transaction ID String : '{str_int_doc['transaction_id']}' (Type: {type(str_int_doc['transaction_id']).__name__})")\r
\r
    # 4. Custom Constant Handler (\`parse_constant\`):\r
    print("\\n4. Handling Non-Standard Constants with \`parse_constant\`:")\r
    nan_json = '{"metric": NaN, "limit": Infinity}'\r
    safe_doc = json.loads(nan_json, parse_constant=lambda c: f"[SPECIAL_{c}]")\r
    print(f"   * Handled Special Consts: {safe_doc}")\r
\r
    print("\\n[PASSED] Custom Numeric Decoding Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_custom_number_decoding()\r
`,J=`# topic3_files/defensive_json_file_loader_with_recovery.py\r
# Module: 003_004_working-with-json\r
# Topic: Deserialization: json.load() vs json.loads()\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 3 - File 3: Defensive JSON File Loader with Automatic Recovery\r
Demonstrates:\r
  1. Safe file deserialization with graceful fallbacks (Missing file, empty file, syntax error)\r
  2. Automatic corrupted file quarantine and restoration from backup\r
  3. Production error logging and default state initialization\r
"""\r
\r
import json\r
import os\r
import tempfile\r
from typing import Dict, Any, Tuple\r
\r
def load_json_defensively(\r
    primary_filepath: str,\r
    backup_filepath: str = None,\r
    default_payload: Dict[str, Any] = None\r
) -> Tuple[Dict[str, Any], str]:\r
    """Safely loads JSON file with fallback and automatic backup recovery."""\r
    default_payload = default_payload or {}\r
\r
    # Case 1: Primary File does not exist\r
    if not os.path.exists(primary_filepath):\r
        return default_payload, "INITIALIZED_DEFAULT_FILE_MISSING"\r
\r
    # Case 2: Primary File is 0-bytes (corrupted/truncated)\r
    if os.path.getsize(primary_filepath) == 0:\r
        if backup_filepath and os.path.exists(backup_filepath):\r
            with open(backup_filepath, "r", encoding="utf-8") as f_bak:\r
                return json.load(f_bak), "RESTORED_FROM_BACKUP_ZERO_BYTE_PRIMARY"\r
        return default_payload, "FALLBACK_DEFAULT_ZERO_BYTE_PRIMARY"\r
\r
    # Case 3: Try to parse primary file\r
    try:\r
        with open(primary_filepath, "r", encoding="utf-8") as f:\r
            return json.load(f), "LOADED_PRIMARY_SUCCESS"\r
    except (json.JSONDecodeError, UnicodeDecodeError) as exc:\r
        print(f"  [ALERT] Primary JSON corrupt ({exc}). Checking backup...")\r
        if backup_filepath and os.path.exists(backup_filepath):\r
            try:\r
                with open(backup_filepath, "r", encoding="utf-8") as f_bak:\r
                    return json.load(f_bak), "RESTORED_FROM_BACKUP_CORRUPT_PRIMARY"\r
            except Exception:\r
                pass\r
        return default_payload, "FALLBACK_DEFAULT_PARSE_FAILED"\r
\r
\r
def demonstrate_defensive_loader():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - DEFENSIVE JSON FILE LOADER & RECOVERY")\r
    print("=" * 70)\r
\r
    temp_dir = tempfile.gettempdir()\r
    primary_file = os.path.join(temp_dir, "primary_test_reg.json")\r
    backup_file = os.path.join(temp_dir, "backup_test_reg.json")\r
\r
    # 1. Non-existent file:\r
    data, status = load_json_defensively(primary_file, backup_file, {"status": "DEFAULT_BOOTSTRAP"})\r
    print(f"1. Non-Existent File Load Status : {status} (Data: {data})")\r
\r
    # 2. Setup Valid Backup, but Corrupt Primary:\r
    with open(backup_file, "w", encoding="utf-8") as f:\r
        json.dump({"institution": "Coder & AccoTax", "recovered": True}, f)\r
\r
    with open(primary_file, "w", encoding="utf-8") as f:\r
        f.write("{MALFORMED_SYNTAX,,,")\r
\r
    print("\\n2. Loading Corrupted Primary File with Valid Backup Available:")\r
    data, status = load_json_defensively(primary_file, backup_file, {"status": "DEFAULT"})\r
    print(f"   * Resolution Status : {status}")\r
    print(f"   * Restored Data     : {data}")\r
\r
    # Cleanup:\r
    for p in (primary_file, backup_file):\r
        if os.path.exists(p):\r
            os.remove(p)\r
\r
    print("\\n[PASSED] Defensive JSON File Loader Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_defensive_loader()\r
`,U=`# topic3_files/institutional_examination_audit_stream_loader.py\r
# Module: 003_004_working-with-json\r
# Topic: Deserialization: json.load() vs json.loads()\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 3 - File 4: Examination Audit Stream Ingestion Suite (Case Study)\r
Demonstrates:\r
  1. High-precision financial and academic record deserialization from stream files\r
  2. Combining \`json.load()\` with \`parse_float=Decimal\` for fee reconciliation\r
  3. Generating certified audit reports without binary floating-point roundoff errors\r
"""\r
\r
import json\r
import io\r
from decimal import Decimal\r
from typing import Dict, Any, List\r
\r
def process_examination_batch_stream(stream_obj) -> Dict[str, Any]:\r
    """Ingests examination batch JSON stream with Decimal precision."""\r
    # Deserializing directly from stream with Decimal floats:\r
    batch_doc = json.load(stream_obj, parse_float=Decimal)\r
\r
    session = batch_doc.get("session", "UNKNOWN")\r
    center = batch_doc.get("exam_center", "UNKNOWN")\r
    candidates: List[Dict[str, Any]] = batch_doc.get("candidates", [])\r
\r
    total_fees_collected = Decimal("0.00")\r
    total_score_sum = Decimal("0.00")\r
    platinum_distinctions = 0\r
\r
    for cand in candidates:\r
        fee = cand.get("exam_fee_inr", Decimal("0.00"))\r
        score = cand.get("composite_score", Decimal("0.00"))\r
\r
        total_fees_collected += fee\r
        total_score_sum += score\r
\r
        if score >= Decimal("90.0"):\r
            platinum_distinctions += 1\r
\r
    candidate_count = len(candidates)\r
    average_score = (total_score_sum / candidate_count) if candidate_count > 0 else Decimal("0.00")\r
\r
    return {\r
        "status": "AUDITED_SUCCESS",\r
        "academic_session": session,\r
        "center_name": center,\r
        "candidate_count": candidate_count,\r
        "total_fees_reconciled_inr": total_fees_collected,\r
        "average_score_pct": round(average_score, 2),\r
        "platinum_distinctions_awarded": platinum_distinctions\r
    }\r
\r
\r
def run_audit_stream_demo():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - EXAMINATION AUDIT STREAM INGESTION SUITE")\r
    print("=" * 70)\r
\r
    # Simulated incoming batch payload stream:\r
    incoming_batch_stream_data = """\r
    {\r
        "session": "2026-FINAL",\r
        "exam_center": "Barrackpore Main Campus",\r
        "candidates": [\r
            {"id": "STU-101", "name": "Sourav Mukherjee", "exam_fee_inr": 2500.25, "composite_score": 95.50},\r
            {"id": "STU-102", "name": "Priyanka Sen",     "exam_fee_inr": 2500.25, "composite_score": 92.00},\r
            {"id": "STU-103", "name": "Debolina Roy",     "exam_fee_inr": 2500.25, "composite_score": 96.75},\r
            {"id": "STU-104", "name": "Rahul Verma",      "exam_fee_inr": 2500.25, "composite_score": 84.50}\r
        ]\r
    }\r
    """\r
\r
    stream = io.StringIO(incoming_batch_stream_data)\r
    audit_report = process_examination_batch_stream(stream)\r
\r
    print("1. Examination Batch Stream Audited Successfully:")\r
    print(f"   * Session              : {audit_report['academic_session']}")\r
    print(f"   * Center               : {audit_report['center_name']}")\r
    print(f"   * Total Candidates     : {audit_report['candidate_count']}")\r
    print(f"   * Total Fees Settled   : INR {audit_report['total_fees_reconciled_inr']:,.2f} (Exact Decimal)")\r
    print(f"   * Average Score        : {audit_report['average_score_pct']}%")\r
    print(f"   * Platinum Honors Count: {audit_report['platinum_distinctions_awarded']}")\r
\r
    print("\\n[PASSED] Examination Audit Stream Ingestion Suite Verified.")\r
\r
\r
if __name__ == "__main__":\r
    run_audit_stream_demo()\r
`,L=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
          PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_004: WORKING WITH JSON\r
             TOPIC 3: JSON DESERIALIZATION: json.load() VS json.loads()\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. json.loads() VS json.load()\r
--------------------------------------------------------------------------------\r
  • \`json.loads(s)\` : Parses in-memory string or bytes into Python objects.\r
  • \`json.load(f)\`  : Parses directly from an open file/stream object.\r
\r
--------------------------------------------------------------------------------\r
2. HIGH-PRECISION FINANCIAL DECODING\r
--------------------------------------------------------------------------------\r
  from decimal import Decimal\r
  doc = json.loads(payload, parse_float=Decimal)\r
  # Prevents IEEE-754 binary floating-point roundoff drift!\r
\r
--------------------------------------------------------------------------------\r
3. PINPOINTING JSONDecodeError\r
--------------------------------------------------------------------------------\r
  try:\r
      data = json.loads(corrupt_str)\r
  except json.JSONDecodeError as e:\r
      print(f"{e.msg} at line {e.lineno}, column {e.colno} (pos {e.pos})")\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 3: JSON DESERIALIZATION\r
================================================================================\r
`,M=[{question:"What is the primary difference between 'json.loads()' and 'json.load()'?",shortAnswer:"'json.loads()' parses a JSON-formatted string, bytes, or bytearray already resident in memory; 'json.load()' reads and parses directly from a file-like stream object.",explanation:"The 's' in loads stands for 'string'.",hint:"loads() parses strings/bytes; load() parses from an open file stream.",level:"basic",codeExample:`data = json.loads(str_data)
with open('file.json') as f: data = json.load(f)`},{question:"Can 'json.loads()' parse raw UTF-8 'bytes' directly without prior decoding?",shortAnswer:"Yes. Starting in Python 3.6+, 'json.loads()' directly accepts 'bytes' and 'bytearray' encoded in UTF-8, UTF-16, or UTF-32.",explanation:"Eliminates the need for manual 'bytes.decode('utf-8')' calls.",hint:"Yes, json.loads() accepts bytes directly since Python 3.6.",level:"basic",codeExample:`data = json.loads(b'{"status": "OK"}')`},{question:"What attributes are available on a 'json.JSONDecodeError' exception?",shortAnswer:"'exc.msg' (error message), 'exc.lineno' (line number, 1-indexed), 'exc.colno' (column number, 1-indexed), and 'exc.pos' (0-indexed character index in string).",explanation:"Provides precise diagnostics for malformed JSON strings.",hint:"Provides msg, lineno, colno, and pos.",level:"basic",codeExample:"except json.JSONDecodeError as e: print(e.msg, e.lineno, e.colno)"},{question:"Why does standard float decoding in JSON cause subtle errors in financial calculations?",shortAnswer:"Standard JSON floats are decoded into IEEE-754 binary floating-point numbers ('float'), which cannot represent decimal fractions like 0.1 or 0.05 exactly, causing cumulative rounding drift.",explanation:"Financial systems require exact decimal arithmetic.",hint:"Binary IEEE-754 floats introduce fractional rounding drift (e.g. 0.1 + 0.2 != 0.3).",level:"moderate",codeExample:"0.1 + 0.2 # 0.30000000000000004"},{question:"How do you configure 'json.loads()' or 'json.load()' to decode numbers into exact 'decimal.Decimal' objects?",shortAnswer:"By passing 'parse_float=Decimal': 'from decimal import Decimal; doc = json.loads(data, parse_float=Decimal)'.",explanation:"Ensures 100% precision in banking, currency, and tax calculations.",hint:"Pass parse_float=Decimal to json.loads/json.load.",level:"basic",codeExample:`from decimal import Decimal
doc = json.loads('{"fee": 28500.10}', parse_float=Decimal)`},{question:"Why would you use 'parse_int=str' during JSON deserialization?",shortAnswer:"To prevent 64-bit or 128-bit integer IDs (like Twitter Snowflakes or UUID numbers) from exceeding limits or losing formatting when transferred across heterogeneous systems.",explanation:"Stores large numeric IDs as strings directly.",hint:"Preserves large integer IDs as strings to prevent integer clipping.",level:"moderate",codeExample:`doc = json.loads('{"id": 9223372036854775807}', parse_int=str)`},{question:"What does the 'parse_constant' parameter do in 'json.loads()'?",shortAnswer:"It specifies a callback function that is invoked when non-standard constants ('NaN', 'Infinity', '-Infinity') are encountered in the JSON input.",explanation:"Allows converting non-standard constants into custom domain values or raising errors.",hint:"Callback invoked on non-standard constants (NaN, Infinity).",level:"complex",codeExample:`doc = json.loads('{"v": NaN}', parse_constant=lambda c: None)`},{question:"What causes 'json.decoder.JSONDecodeError: Extra data'?",shortAnswer:`It occurs when there is valid JSON followed by additional non-whitespace characters (e.g. two concatenated JSON objects '{"a": 1}{"b": 2}').`,explanation:"Standard JSON parsers expect exactly one root element.",hint:"Occurs when trailing data exists after the first valid JSON root.",level:"moderate",codeExample:`json.loads('{"a": 1} {"b": 2}') # JSONDecodeError: Extra data`},{question:"How do you parse multi-line concatenated JSON documents (NDJSON / JSON Lines)?",shortAnswer:"By iterating line-by-line over the file and calling 'json.loads(line)' on each individual line.",explanation:"The standard format for log files and big data analytics.",hint:"Read line-by-line and call json.loads(line) on each line.",level:"basic",codeExample:"for line in file: yield json.loads(line)"},{question:"How do you defensively handle empty (0-byte) files with 'json.load()'?",shortAnswer:"Check file size before loading ('os.path.getsize(path) == 0') or catch 'json.JSONDecodeError' and return a default empty dictionary '{}'.",explanation:"Prevents application boot crashes on empty config files.",hint:"Check os.path.getsize() or catch JSONDecodeError and return {}.",level:"basic",codeExample:`try: data = json.load(f)
except json.JSONDecodeError: data = {}`},{question:"What is the memory consumption difference between 'json.loads()' and 'json.load()'?",shortAnswer:"'json.loads()' requires the entire raw string in RAM PLUS the constructed Python objects; 'json.load()' streams the file in chunks, reducing peak RAM overhead.",explanation:"Direct stream loading is always more memory efficient.",hint:"json.load() streams in chunks without keeping the raw string in memory.",level:"moderate",codeExample:"# Prefer json.load(f) for file loading"},{question:"What happens if a JSON file contains an invalid UTF-8 byte sequence?",shortAnswer:"Python raises 'UnicodeDecodeError' during file reading before 'json.load()' can even begin parsing.",explanation:`Always open files with 'encoding="utf-8", errors="replace"' for resilience.`,hint:"Raises UnicodeDecodeError; use encoding='utf-8' with proper error handling.",level:"moderate",codeExample:"with open('file.json', 'r', encoding='utf-8', errors='replace') as f: ..."},{question:"What is the 'object_hook' parameter in 'json.loads()'?",shortAnswer:"A callback function that is called with the result of any decoded JSON object (dictionary), allowing automatic conversion into custom Python class instances.",explanation:"The standard deserialization hook for custom domain objects.",hint:"A function called on every decoded dictionary to transform it into custom objects.",level:"moderate",codeExample:"json.loads(data, object_hook=lambda d: Student(**d))"},{question:"How do you detect duplicate keys in a JSON document during deserialization?",shortAnswer:"By using 'object_pairs_hook' with a custom function that inspects the key list for duplicates and raises a 'ValueError'.",explanation:"Prevents silent data loss when duplicate keys are present.",hint:"Use object_pairs_hook to check for duplicate keys in the raw pair list.",level:"complex",codeExample:`def check_dups(pairs):
    keys = [k for k, v in pairs]
    if len(keys) != len(set(keys)): raise ValueError('Duplicate keys!')`},{question:"Why should you never use 'eval()' instead of 'json.loads()' on API inputs?",shortAnswer:"'eval()' executes arbitrary Python code and allows malicious attackers to achieve Remote Code Execution (RCE) on the server.",explanation:"A catastrophic security flaw.",hint:"eval() executes arbitrary code and creates severe RCE vulnerabilities.",level:"basic",codeExample:"# CRITICAL VULNERABILITY: eval(user_json_input)"},{question:"What happens if you pass an integer or boolean to 'json.loads()'?",shortAnswer:`'json.loads("100")' returns the integer '100'; 'json.loads("true")' returns the boolean 'True'; 'json.loads("null")' returns 'None' (valid JSON primitives).`,explanation:"RFC 8259 allows JSON documents to consist of any single top-level primitive.",hint:"Returns the parsed primitive value (int, bool, None).",level:"basic",codeExample:"assert json.loads('true') is True"},{question:"How can you validate that a deserialized JSON payload is a dictionary and not a list or scalar?",shortAnswer:`By checking 'if not isinstance(data, dict): raise TypeError("Expected JSON object")'.`,explanation:"Protects against malicious or unexpected payload types.",hint:"Use isinstance(data, dict) check immediately after loading.",level:"basic",codeExample:`data = json.loads(payload)
if not isinstance(data, dict): raise TypeError()`},{question:"How do you benchmark deserialization performance in Python?",shortAnswer:"Using the standard library 'timeit' module: 'timeit.timeit(lambda: json.loads(payload), number=5000)'.",explanation:"Measures deserialization throughput.",hint:"Use timeit.timeit() with lambda: json.loads(payload).",level:"basic",codeExample:`import timeit
timeit.timeit(lambda: json.loads(payload), number=1000)`},{question:"Can 'json.load()' read from an in-memory 'io.StringIO' or 'io.BytesIO' object?",shortAnswer:"Yes. 'json.load()' works seamlessly with any object that implements a '.read()' method, demonstrating stream polymorphism.",explanation:"Useful in unit testing and stream processing pipelines.",hint:"Yes, accepts any object implementing .read().",level:"basic",codeExample:`stream = io.StringIO('{"a": 1}'); data = json.load(stream)`},{question:"How do you recover gracefully if a primary JSON database file is corrupted?",shortAnswer:"By wrapping file ingestion in a 'try...except' block, logging the error, and automatically restoring state from a verified '.bak' backup file.",explanation:"Standard enterprise persistence recovery pattern.",hint:"Catch JSONDecodeError and restore from verified backup file.",level:"moderate",codeExample:`try: data = json.load(f)
except json.JSONDecodeError: data = load_backup()`},{question:"What happens if a JSON document contains nested structures deeper than Python's recursion limit?",shortAnswer:"It raises 'RecursionError: maximum recursion depth exceeded' during deserialization.",explanation:"Python enforces a recursion limit (default ~1000) to protect the C call stack.",hint:"Raises RecursionError when nesting exceeds recursion depth limit.",level:"complex",codeExample:"import sys; sys.setrecursionlimit(2000) # Increases limit"},{question:"How do you parse a date string automatically during 'json.loads()'?",shortAnswer:"By using an 'object_hook' function that inspects key names (e.g. ending in '_date') or regex patterns and parses them with 'datetime.fromisoformat()'.",explanation:"Automated datetime deserialization pattern.",hint:"Use object_hook and datetime.fromisoformat().",level:"moderate",codeExample:"def parse_dates(d): return {k: datetime.fromisoformat(v) if 'time' in k else v for k, v in d.items()}"},{question:"What is the fastest way to parse large JSON files in Python when standard 'json' is too slow?",shortAnswer:"Using optimized C/Rust-backed third-party libraries like 'orjson' or 'ujson', which can be 5x to 20x faster than standard library 'json'.",explanation:"High-performance alternatives for massive data pipelines.",hint:"Use third-party libraries like orjson or ujson for extreme throughput.",level:"moderate",codeExample:"# import orjson; data = orjson.loads(payload)"},{question:"How do you safely parse JSON input from untrusted web clients in API endpoints?",shortAnswer:"Use 'json.loads()' with maximum payload size limits, validate root data type, and enforce schema validation before passing data to business logic.",explanation:"Defense-in-depth API security practice.",hint:"Enforce payload size limits, check root type, and validate schema.",level:"basic",codeExample:"# Enforce size limits and schema validation"},{question:"What is the ultimate golden rule for JSON Deserialization in Python?",shortAnswer:"Use 'json.loads()' for in-memory strings/bytes and 'json.load()' for direct file streaming; use 'parse_float=Decimal' for financial accuracy; catch 'JSONDecodeError' defensively with backup recovery; and always validate schema contracts.",explanation:"The definitive guide to robust, error-free JSON deserialization in Python.",hint:"loads for strings, load for files, parse_float=Decimal for finance, catch JSONDecodeError.",level:"basic",codeExample:"# Python JSON Deserialization Mastery"}];function Q(){const l=n.useRef([]),[r,d]=n.useState("deserializers"),p=`{
  "transaction_id": 9223372036854775807,
  "student_id": "STU-101",
  "tuition_fee": 28500.10,
  "gst_tax": 5130.018,
  "discount_rebate": 1500.05
}`,[c,f]=n.useState(p),[B,q]=n.useState("loads"),[h,N]=n.useState(!0),[m,S]=n.useState(!0),[u,b]=n.useState(!1),[v,j]=n.useState(null),[i,y]=n.useState(null),w=t=>{if(!t)return null;const a=t.tuition_fee||0,o=t.gst_tax||0,_=t.discount_rebate||0,D=(Number(a)+Number(o)-Number(_)).toFixed(6),k=Math.round(Number(a)*1e3),A=Math.round(Number(o)*1e3),O=Math.round(Number(_)*1e3),I=((k+A-O)/1e3).toFixed(3);return{floatTotal:D,exactDecimalTotal:I}},E=()=>{try{const t=JSON.parse(c);y(t),b(!1),j(null)}catch(t){b(!0),y(null),j({msg:t.message,line:3,col:18})}};n.useEffect(()=>{E()},[c,h,m]);const g=w(i);n.useEffect(()=>{const t=new IntersectionObserver(a=>{a.forEach(o=>{o.isIntersecting&&o.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return l.current.forEach(a=>{a&&t.observe(a)}),()=>t.disconnect()},[]);const s=t=>{t&&!l.current.includes(t)&&l.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:s,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_004"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 3"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Working with JSON & External Data APIs"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["JSON Deserialization: ",e.jsx("span",{className:"text-teal-400",children:"`json.load()` vs `json.loads()`"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master high-fidelity JSON parsing in Python: in-memory string and UTF-8 byte parsing (",e.jsx("code",{className:"text-teal-300 font-mono",children:"json.loads"}),"), stream deserialization (",e.jsx("code",{className:"text-teal-300 font-mono",children:"json.load"}),"), precision financial decoding (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"parse_float=Decimal"}),"), large integer preservation (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"parse_int=str"}),"), and defensive backup recovery."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📥 `json.loads()` (Strings & Bytes)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📁 `json.load()` (Stream Files)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"💰 `parse_float=Decimal` (Zero Drift)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Defensive Recovery & JSONDecodeError"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📥"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. `json.loads()` vs `json.load()` Mechanics"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"Deserialization converts JSON formatted text into native Python data structures (dictionaries, lists, numbers, booleans):"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ `json.loads(s)`"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"doc = json.loads(payload)"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Parses string (",e.jsx("code",{className:"text-teal-300",children:"str"}),") or raw UTF-8 ",e.jsx("code",{className:"text-teal-300",children:"bytes"})," resident in memory."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ `json.load(f)`"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"doc = json.load(file_obj)"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Reads and parses directly from open readable disk files, network sockets, or ",e.jsx("code",{className:"text-cyan-300",children:"io.StringIO"}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ `parse_float=Decimal`"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"parse_float=Decimal"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Decodes floating-point numbers into exact ",e.jsx("code",{className:"text-purple-300",children:"Decimal"})," objects, eliminating binary IEEE-754 rounding errors."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"Pinpointing Errors with `json.JSONDecodeError`"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["When parsing corrupt JSON, Python raises ",e.jsx("code",{className:"text-rose-400",children:"json.JSONDecodeError"})," exposing ",e.jsx("code",{className:"text-cyan-300",children:"exc.lineno"}),", ",e.jsx("code",{className:"text-cyan-300",children:"exc.colno"}),", and ",e.jsx("code",{className:"text-cyan-300",children:"exc.msg"})," for instant diagnostic logging."]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Deserializers, Decimal Precision & Recovery"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>d("deserializers"),className:x("px-3 py-1.5 rounded-lg transition-all",r==="deserializers"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"`load` vs `loads` Parsers"}),e.jsx("button",{onClick:()=>d("precision"),className:x("px-3 py-1.5 rounded-lg transition-all",r==="precision"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Financial Decimal Precision"}),e.jsx("button",{onClick:()=>d("recovery"),className:x("px-3 py-1.5 rounded-lg transition-all",r==="recovery"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Defensive Recovery Flow"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining in-memory string vs direct disk streaming, financial decimal accuracy, and automatic backup recovery:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:r==="deserializers"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"`json.loads()` (MEMORY STR/BYTES) VS `json.load()` (DISK STREAM)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"1. `json.loads(s)`: String / Bytes"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"doc = json.loads(api_response_str)"}),e.jsx("text",{x:"20",y:"80",fill:"#34d399",fontSize:"9 font-mono",children:`doc = json.loads(b'{"key": "val"}')`}),e.jsx("rect",{x:"20",y:"110",width:"340",height:"105",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"135",fill:"#34d399",fontSize:"9 font-bold",children:"In-Memory Parsing:"}),e.jsx("text",{x:"30",y:"155",fill:"#cbd5e1",fontSize:"8",children:"• Input: Python `str`, `bytes`, `bytearray`"}),e.jsx("text",{x:"30",y:"170",fill:"#cbd5e1",fontSize:"8",children:"• Source: Web API Responses (FastAPI/Flask), Redis, Sockets"}),e.jsx("text",{x:"30",y:"185",fill:"#cbd5e1",fontSize:"8",children:"• Directly parses raw UTF-8 payloads"})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"20",y:"30",fill:"#a5f3fc",fontSize:"12",fontWeight:"bold",children:"2. `json.load(f)`: File Stream"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:'with open("registry.json", "r") as f:'}),e.jsx("text",{x:"35",y:"80",fill:"#38bdf8",fontSize:"9 font-mono font-bold",children:"doc = json.load(f)"}),e.jsx("rect",{x:"20",y:"110",width:"340",height:"105",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"30",y:"135",fill:"#38bdf8",fontSize:"9 font-bold",children:"File Stream Parsing:"}),e.jsx("text",{x:"30",y:"155",fill:"#cbd5e1",fontSize:"8",children:"• Input: Open readable file stream object (`.read()`)"}),e.jsx("text",{x:"30",y:"170",fill:"#cbd5e1",fontSize:"8",children:"• Source: Database dumps, System Config files"}),e.jsx("text",{x:"30",y:"185",fill:"#cbd5e1",fontSize:"8",children:"• Avoids allocating the full raw string in RAM"})]})]}):r==="precision"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"FINANCIAL PRECISION: `parse_float=Decimal` VS BINARY IEEE-754 FLOAT"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"Default: Binary `float` (IEEE-754)"}),e.jsx("text",{x:"20",y:"60",fill:"#fca5a5",fontSize:"8 font-mono",children:"fee = 28500.10 + 5130.018 - 1500.05"}),e.jsx("text",{x:"20",y:"85",fill:"#fca5a5",fontSize:"9 font-mono font-bold",children:"Result: 32130.068000000004 (DRIFT!)"}),e.jsx("rect",{x:"20",y:"120",width:"340",height:"95",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"145",fill:"#fda4af",fontSize:"9 font-bold",children:"Precision Failure in Accounting:"}),e.jsx("text",{x:"30",y:"165",fill:"#cbd5e1",fontSize:"8",children:"• Binary fractions cause fractional cent errors"}),e.jsx("text",{x:"30",y:"180",fill:"#cbd5e1",fontSize:"8",children:"• Cumulative ledger discrepancies over millions of txs"}),e.jsx("text",{x:"30",y:"195",fill:"#cbd5e1",fontSize:"8",children:"• Fails statutory banking audit compliance"})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"Strict: `parse_float=Decimal`"}),e.jsx("text",{x:"20",y:"60",fill:"#34d399",fontSize:"8 font-mono",children:"json.loads(s, parse_float=Decimal)"}),e.jsx("text",{x:"20",y:"85",fill:"#34d399",fontSize:"9 font-mono font-bold",children:"Result: Decimal('32130.068') (100% EXACT)"}),e.jsx("rect",{x:"20",y:"120",width:"340",height:"95",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"145",fill:"#34d399",fontSize:"9 font-bold",children:"Institutional Financial Standard:"}),e.jsx("text",{x:"30",y:"165",fill:"#cbd5e1",fontSize:"8",children:"• Exact base-10 decimal mathematics"}),e.jsx("text",{x:"30",y:"180",fill:"#cbd5e1",fontSize:"8",children:"• Zero rounding loss on sub-cent tax fractions"}),e.jsx("text",{x:"30",y:"195",fill:"#cbd5e1",fontSize:"8",children:"• 100% Auditable Coder & AccoTax ledger integrity"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"DEFENSIVE JSON FILE INGESTION & AUTOMATIC BACKUP RESTORATION"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"1. Primary Ingestion"}),e.jsx("text",{x:"15",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:'with open("reg.json") as f:'}),e.jsx("text",{x:"15",y:"75",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"data = json.load(f)"}),e.jsx("rect",{x:"15",y:"110",width:"220",height:"105",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"25",y:"135",fill:"#34d399",fontSize:"9 font-bold",children:"Standard Happy Path:"}),e.jsx("text",{x:"25",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Loads database into Python"}),e.jsx("text",{x:"25",y:"170",fill:"#cbd5e1",fontSize:"8",children:"heap dictionaries directly."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"310",y:"30",fill:"#fda4af",fontSize:"11 font-bold",children:"2. Corrupt / 0-Byte Crash"}),e.jsx("text",{x:"310",y:"55",fill:"#fca5a5",fontSize:"8 font-mono",children:"except JSONDecodeError:"}),e.jsx("text",{x:"310",y:"75",fill:"#fda4af",fontSize:"8 font-mono font-bold",children:"log_alert_and_quarantine()"}),e.jsx("rect",{x:"310",y:"110",width:"220",height:"105",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"320",y:"135",fill:"#fda4af",fontSize:"9 font-bold",children:"Fault Interception:"}),e.jsx("text",{x:"320",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Catches incomplete writes,"}),e.jsx("text",{x:"320",y:"170",fill:"#cbd5e1",fontSize:"8",children:"power cuts, or syntax errors."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"605",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"3. Backup Recovery"}),e.jsx("text",{x:"605",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:'with open("reg.bak") as bak:'}),e.jsx("text",{x:"605",y:"75",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"return json.load(bak)"}),e.jsx("rect",{x:"605",y:"110",width:"200",height:"105",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"615",y:"135",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Zero Downtime Recovery:"}),e.jsx("text",{x:"615",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Restores valid state without"}),e.jsx("text",{x:"615",y:"170",fill:"#cbd5e1",fontSize:"8",children:"crashing the web application."})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Financial Deserializer & Precision Inspector"})]}),e.jsxs("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:["Test precision differences between standard binary floats vs ",e.jsx("code",{className:"text-teal-300 font-mono",children:"parse_float=Decimal"}),", preserve 64-bit integer IDs, and diagnose malformed JSON strings in real time:"]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs font-mono text-slate-400 font-bold uppercase",children:[e.jsx("span",{children:"Financial Ledger JSON Input:"}),e.jsx("button",{onClick:()=>f(p),className:"text-[11px] text-teal-400 hover:text-white underline",children:"Reset Ledger Payload"})]}),e.jsx("textarea",{value:c,onChange:t=>f(t.target.value),rows:9,className:"w-full bg-slate-900 text-slate-100 font-mono text-xs p-3 rounded-lg border border-slate-800 focus:border-teal-500 focus:outline-none leading-relaxed"}),e.jsxs("div",{className:"space-y-2 text-xs font-mono",children:[e.jsxs("label",{className:"flex items-center gap-2 p-2 bg-slate-900 rounded border border-slate-800 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:h,onChange:t=>N(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"Enable `parse_float=Decimal` (Zero IEEE-754 precision loss)"})]}),e.jsxs("label",{className:"flex items-center gap-2 p-2 bg-slate-900 rounded border border-slate-800 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:m,onChange:t=>S(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"Enable `parse_int=str` (Preserve 64-bit large integer IDs)"})]})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs space-y-2",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:"Financial Accounting Audit Comparison:"}),u?e.jsxs("div",{className:"p-2.5 bg-rose-950/60 rounded border border-rose-800 text-rose-300 text-[11px] leading-relaxed",children:[e.jsx("span",{className:"font-bold",children:"JSONDecodeError:"})," ",v?.msg]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex justify-between text-[11px]",children:[e.jsx("span",{className:"text-slate-400",children:"Transaction ID:"}),e.jsx("span",{className:"text-purple-300 font-bold",children:m?`"${i?.transaction_id}" (str)`:`${i?.transaction_id} (int)`})]}),e.jsxs("div",{className:"flex justify-between text-[11px]",children:[e.jsx("span",{className:"text-slate-400",children:"Standard Float Total:"}),e.jsxs("span",{className:"text-rose-400 font-bold",children:["INR ",g?.floatTotal," (Float drift!)"]})]}),e.jsxs("div",{className:"flex justify-between text-[11px] pt-1 border-t border-slate-800",children:[e.jsx("span",{className:"text-slate-400",children:"Exact Decimal Total:"}),e.jsxs("span",{className:"text-emerald-400 font-bold",children:["INR ",g?.exactDecimalTotal," (100% Exact!)"]})]})]})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[140px] font-mono text-xs space-y-1",children:[e.jsx("span",{className:"text-slate-400 block font-bold text-[10px] uppercase",children:"Deserialized Python Dictionary:"}),e.jsx("pre",{className:"text-slate-200 text-[11px] leading-relaxed",children:u?"Parsing failed: Malformed JSON syntax":JSON.stringify(i,null,2)})]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Parameter Matrix in `json.load` / `json.loads`"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Parameter"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Default Callable"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Custom Override Recipe"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Primary Production Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"parse_float"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"float"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-mono",children:"parse_float=Decimal"}),e.jsx("td",{className:"py-3 px-4",children:"Financial ledgers, currency transactions, tax rates"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"parse_int"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"int"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-mono",children:"parse_int=str"}),e.jsx("td",{className:"py-3 px-4",children:"64-bit Snowflake entity IDs, large barcodes"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"parse_constant"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"None (Emits float)"}),e.jsx("td",{className:"py-3 px-4 text-purple-300 font-mono",children:"parse_constant=lambda c: None"}),e.jsx("td",{className:"py-3 px-4",children:"Sanitizing non-standard `NaN` / `Infinity` values"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"object_hook"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"None (Emits dict)"}),e.jsx("td",{className:"py-3 px-4 text-amber-300 font-mono",children:"object_hook=Student.from_dict"}),e.jsx("td",{className:"py-3 px-4",children:"Direct instantiation into custom domain classes"})]})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating load vs loads mechanics, custom numeric decoding, defensive loaders, and examination audit streams:"}),e.jsx(T,{files:[{filename:"json_load_vs_loads_file_and_string_deserializer.py",code:R,description:"json.load vs json.loads mechanics, UTF-8 byte parsing, and JSONDecodeError inspection."},{filename:"custom_number_decoding_parse_float_parse_int.py",code:F,description:"Custom numeric decoding with parse_float=Decimal and parse_int=str."},{filename:"defensive_json_file_loader_with_recovery.py",code:J,description:"Defensive JSON file loader with corrupt payload detection and automatic backup restoration."},{filename:"institutional_examination_audit_stream_loader.py",code:U,description:"Institutional Examination Audit Stream Deserializer with exact Decimal fee reconciliation."}]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Floating Point Drift in Monetary Calculations"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Relying on standard floats causes cumulative rounding errors (e.g. ",e.jsx("code",{className:"text-rose-300 font-mono",children:"0.1 + 0.2 = 0.30000000000000004"}),") in financial statements."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always pass ",e.jsx("code",{className:"text-emerald-300",children:"parse_float=Decimal"})," when decoding currency fields."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Application Crashes on Empty 0-Byte Files"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-amber-300 font-mono",children:"json.load(f)"})," on an empty file raises ",e.jsx("code",{className:"text-amber-300 font-mono",children:"JSONDecodeError: Expecting value: line 1 column 1"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Check ",e.jsx("code",{className:"text-emerald-300",children:"os.path.getsize()"})," or wrap in a defensive fallback loader."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Catastrophic RCE via `eval()`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Using ",e.jsx("code",{className:"text-purple-300 font-mono",children:"eval(untrusted_str)"})," to parse JSON allows attackers to execute arbitrary system commands."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," NEVER use ",e.jsx("code",{className:"text-rose-400",children:"eval()"}),"; always use ",e.jsx("code",{className:"text-emerald-300",children:"json.loads()"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Extra Data Error on Concatenated JSON"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Passing concatenated JSON streams (",e.jsx("code",{className:"text-cyan-300 font-mono",children:'{"a":1}{"b":2}'}),") raises ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"JSONDecodeError: Extra data"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Stream line-by-line (NDJSON / JSON Lines) calling ",e.jsx("code",{className:"text-emerald-300",children:"json.loads(line)"})," per line."]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering `json.load`, `json.loads`, `parse_float=Decimal`, `parse_int`, `JSONDecodeError`, and recovery patterns:"}),e.jsx(P,{questions:M})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with deserializer recipes, precision decoding patterns, and JSONDecodeError diagnostic guides:"}),e.jsx("div",{className:"mb-10",children:e.jsx(C,{content:L,filename:"python_topic3_json_deserialization_notes.txt",title:"Print Topic 3 Study Notes"})}),e.jsx(z,{})]})]})]})}export{Q as default};
