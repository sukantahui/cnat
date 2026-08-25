import{b as d,j as e,bg as x}from"./vendor-react-core-Doz9nIC6.js";import{P as b}from"./PythonFileLoader-hCi5osN-.js";import{P as N}from"./PlainTextPrint-C08xhKA4.js";import{F as S}from"./FAQTemplate-CkSqDH4B.js";import{T as g}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const j=`# topic0_files/json_syntax_standards_and_data_types.py\r
# Module: 003_004_working-with-json\r
# Topic: JSON Format overview: types, syntax, and schema standards\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 0 - File 1: JSON Format Overview: Data Types & Strict Syntax (RFC 8259)\r
Demonstrates:\r
  1. The 6 fundamental JSON data types (string, number, object, array, boolean, null)\r
  2. Strict JSON syntax rules (Double quotes only, no trailing commas, no comments)\r
  3. Parsing standard JSON and catching syntax errors\r
"""\r
\r
import json\r
\r
def demonstrate_json_data_types():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - JSON DATA TYPES & STRICT SYNTAX RULES")\r
    print("=" * 70)\r
\r
    # 1. Valid RFC 8259 JSON String containing all 6 data types:\r
    valid_json_string = """\r
    {\r
        "student_id": "STU-101",\r
        "name": "Sourav Mukherjee",\r
        "age": 24,\r
        "gpa": 9.45,\r
        "is_enrolled": true,\r
        "scholarship_expiry": null,\r
        "courses": [\r
            "Python Full-Stack",\r
            "Generators & Decorators",\r
            "Data Science with AI"\r
        ],\r
        "campus_details": {\r
            "center": "Barrackpore Main Campus",\r
            "city": "Kolkata",\r
            "state": "West Bengal",\r
            "pincode": 700120\r
        }\r
    }\r
    """\r
\r
    print("1. Parsing Valid JSON with all 6 Native JSON Types:")\r
    parsed_data = json.loads(valid_json_string)\r
\r
    print(f"   * String  (\`student_id\`) : '{parsed_data['student_id']}'")\r
    print(f"   * Number  (\`age\`, \`gpa\`) : {parsed_data['age']} (int), {parsed_data['gpa']} (float)")\r
    print(f"   * Boolean (\`is_enrolled\`): {parsed_data['is_enrolled']} (Python {type(parsed_data['is_enrolled']).__name__})")\r
    print(f"   * Null    (\`scholarship\`): {parsed_data['scholarship_expiry']} (Python None)")\r
    print(f"   * Array   (\`courses\`)    : {parsed_data['courses']} (Python {type(parsed_data['courses']).__name__})")\r
    print(f"   * Object  (\`campus\`)     : {parsed_data['campus_details']['center']}\\n")\r
\r
    # 2. Testing Strict JSON Syntax Rules:\r
    print("2. Demonstrating Common Strict Syntax Hazards:")\r
\r
    # Hazard 1: Single quotes instead of double quotes\r
    invalid_single_quotes = "{'name': 'Priyanka Sen'}"\r
    try:\r
        json.loads(invalid_single_quotes)\r
    except json.JSONDecodeError as exc:\r
        print(f"   [BLOCKED] Single quotes invalid in JSON! Error: {exc.msg} at line {exc.lineno}")\r
\r
    # Hazard 2: Trailing comma in arrays or objects\r
    invalid_trailing_comma = '{"courses": ["Python Core", "Data Structures",]}'\r
    try:\r
        json.loads(invalid_trailing_comma)\r
    except json.JSONDecodeError as exc:\r
        print(f"   [BLOCKED] Trailing comma invalid in JSON! Error: {exc.msg} at line {exc.lineno}")\r
\r
    # Hazard 3: JavaScript boolean / undefined\r
    invalid_js_undefined = '{"active": undefined}'\r
    try:\r
        json.loads(invalid_js_undefined)\r
    except json.JSONDecodeError as exc:\r
        print(f"   [BLOCKED] \`undefined\` is not valid JSON! Error: {exc.msg}")\r
\r
    print(r"""\r
Strict JSON Rules (RFC 8259 Standard):\r
  1. Keys MUST be enclosed in double quotes: \`"key": "value"\` (Never \`'key'\`).\r
  2. Strings MUST use double quotes: \`"hello"\` (Never \`'hello'\`).\r
  3. Trailing commas are strictly prohibited: \`[1, 2, 3]\` (Never \`[1, 2, 3,]\`).\r
  4. Only 6 native types exist: string, number, object, array, true/false, null.\r
  5. Comments are NOT allowed in standard JSON.\r
""")\r
    print("[PASSED] JSON Data Types & Strict Syntax Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_json_data_types()\r
`,v=`# topic0_files/json_vs_python_data_type_equivalences.py\r
# Module: 003_004_working-with-json\r
# Topic: JSON Format overview: types, syntax, and schema standards\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 0 - File 2: Python vs JSON Data Type Equivalence Matrix\r
Demonstrates:\r
  1. Complete bidirectional type mapping between Python and JSON\r
  2. Tuple to Array conversion asymmetry\r
  3. Handling unsupported types (set, datetime, bytes, custom classes)\r
"""\r
\r
import json\r
from datetime import datetime\r
\r
def demonstrate_type_equivalences():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - PYTHON VS JSON TYPE EQUIVALENCES")\r
    print("=" * 70)\r
\r
    # 1. Native Supported Types:\r
    python_data = {\r
        "institution": "Coder & AccoTax",               # str -> string\r
        "enrolled_count": 450,                          # int -> number\r
        "average_score": 88.75,                         # float -> number\r
        "is_autonomous_center": True,                   # bool -> boolean (true)\r
        "affiliate_partner": None,                      # None -> null\r
        "course_list": ["Python AI", "Web Dev"],        # list -> array\r
        "campus_locations": ("Barrackpore", "Kolkata")  # tuple -> array!\r
    }\r
\r
    print("1. Serializing Native Python Types to JSON:")\r
    json_output = json.dumps(python_data, indent=2)\r
    print(json_output)\r
\r
    # 2. Tuple Asymmetry Gotcha:\r
    print("\\n2. The Tuple Asymmetry Gotcha:")\r
    re_parsed = json.loads(json_output)\r
    original_type = type(python_data["campus_locations"]).__name__\r
    restored_type = type(re_parsed["campus_locations"]).__name__\r
    print(f"   * Original Python Type : {original_type} ('campus_locations')")\r
    print(f"   * Restored JSON Type   : {restored_type} (JSON has no tuple type, only arrays!)")\r
    print(f"   [NOTICE] Tuples are converted into lists during JSON round-tripping!\\n")\r
\r
    # 3. Unsupported Types (Sets, Datetime, Bytes, Classes):\r
    print("3. Attempting to Serialize Unsupported Python Types:")\r
\r
    # Case A: Set\r
    try:\r
        json.dumps({"unique_badges": {"HONORS", "GOLD", "SCHOLAR"}})\r
    except TypeError as exc:\r
        print(f"   * [SET ERROR]      : {exc}")\r
\r
    # Case B: Datetime\r
    try:\r
        json.dumps({"registration_date": datetime.now()})\r
    except TypeError as exc:\r
        print(f"   * [DATETIME ERROR] : {exc}")\r
\r
    # Case C: Bytes\r
    try:\r
        json.dumps({"digital_signature": b"ENCRYPTED_SHA256"})\r
    except TypeError as exc:\r
        print(f"   * [BYTES ERROR]    : {exc}")\r
\r
    print(r"""\r
Type Mapping Summary:\r
  Python Type                | JSON Type\r
  ---------------------------+------------\r
  dict                       | object\r
  list, tuple                | array\r
  str                        | string\r
  int, float                 | number\r
  True / False               | true / false\r
  None                       | null\r
  ---------------------------+------------\r
  set, datetime, bytes, obj  | TypeError (Requires custom encoder!)\r
""")\r
    print("[PASSED] Python vs JSON Type Equivalences Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_type_equivalences()\r
`,_=`# topic0_files/json_schema_validation_fundamentals.py\r
# Module: 003_004_working-with-json\r
# Topic: JSON Format overview: types, syntax, and schema standards\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 0 - File 3: JSON Schema Standards & Programmatic Schema Validation\r
Demonstrates:\r
  1. Defining declarative JSON schema rules (type checks, required fields, range bounds)\r
  2. Programmatic validation of raw JSON API payloads without third-party dependencies\r
  3. Generating clear error diagnostics for invalid payloads\r
"""\r
\r
import json\r
from typing import Dict, Any, List, Tuple\r
\r
class StudentSchemaValidator:\r
    """Validates raw JSON payloads against institutional student schema rules."""\r
\r
    SCHEMA = {\r
        "required_fields": ["student_id", "name", "course", "score", "fee_paid"],\r
        "field_types": {\r
            "student_id": str,\r
            "name": str,\r
            "course": str,\r
            "score": (int, float),\r
            "fee_paid": (int, float),\r
            "is_active": bool\r
        },\r
        "value_ranges": {\r
            "score": (0.0, 100.0),\r
            "fee_paid": (0.0, 100000.0)\r
        }\r
    }\r
\r
    @classmethod\r
    def validate_payload(cls, raw_json_str: str) -> Tuple[bool, List[str], Dict[str, Any]]:\r
        errors = []\r
\r
        # 1. Check JSON Syntax:\r
        try:\r
            data = json.loads(raw_json_str)\r
        except json.JSONDecodeError as exc:\r
            return False, [f"Malformed JSON Syntax: {exc.msg} (line {exc.lineno})"], {}\r
\r
        if not isinstance(data, dict):\r
            return False, ["Root JSON structure must be a JSON Object (dictionary)."], {}\r
\r
        # 2. Check Required Fields:\r
        for req_field in cls.SCHEMA["required_fields"]:\r
            if req_field not in data:\r
                errors.append(f"Missing required field: '{req_field}'")\r
\r
        # 3. Check Data Types:\r
        for field, expected_type in cls.SCHEMA["field_types"].items():\r
            if field in data and data[field] is not None:\r
                if not isinstance(data[field], expected_type):\r
                    errors.append(\r
                        f"Type mismatch on '{field}': Expected {expected_type}, got {type(data[field]).__name__}"\r
                    )\r
\r
        # 4. Check Value Range Bounds:\r
        for field, (min_val, max_val) in cls.SCHEMA["value_ranges"].items():\r
            if field in data and isinstance(data[field], (int, float)):\r
                if not (min_val <= data[field] <= max_val):\r
                    errors.append(f"Range violation on '{field}': Value {data[field]} not in range [{min_val}, {max_val}]")\r
\r
        is_valid = len(errors) == 0\r
        return is_valid, errors, data if is_valid else {}\r
\r
\r
def demonstrate_schema_validation():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - JSON SCHEMA VALIDATION ENGINE")\r
    print("=" * 70)\r
\r
    # Payload 1: Valid Student JSON\r
    valid_payload = '{"student_id": "STU-101", "name": "Sourav Mukherjee", "course": "Python AI", "score": 94.5, "fee_paid": 25000.0, "is_active": true}'\r
    is_valid, errors, data = StudentSchemaValidator.validate_payload(valid_payload)\r
    print("1. Validating Compliant Student Payload:")\r
    print(f"   * Status: {'[VALID]' if is_valid else '[INVALID]'}")\r
    print(f"   * Verified Student: {data.get('name')} ({data.get('student_id')})\\n")\r
\r
    # Payload 2: Schema Violations (Wrong type + Out of range)\r
    invalid_payload = '{"student_id": "STU-102", "name": "Priyanka Sen", "course": "Data Science", "score": 145.0, "fee_paid": "NOT_PAID"}'\r
    is_valid, errors, _ = StudentSchemaValidator.validate_payload(invalid_payload)\r
    print("2. Validating Payload with Schema Violations:")\r
    print(f"   * Status: {'[VALID]' if is_valid else '[INVALID]'}")\r
    for err in errors:\r
        print(f"     - [SCHEMA REJECTION] {err}")\r
\r
    # Payload 3: Missing Required Fields\r
    missing_fields_payload = '{"name": "Rahul Verma", "course": "Python Core"}'\r
    is_valid, errors, _ = StudentSchemaValidator.validate_payload(missing_fields_payload)\r
    print("\\n3. Validating Incomplete Payload (Missing Keys):")\r
    print(f"   * Status: {'[VALID]' if is_valid else '[INVALID]'}")\r
    for err in errors:\r
        print(f"     - [SCHEMA REJECTION] {err}")\r
\r
    print("\\n[PASSED] JSON Schema Validation Engine Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_schema_validation()\r
`,O=`# topic0_files/institutional_student_portal_api_schema_spec.py\r
# Module: 003_004_working-with-json\r
# Topic: JSON Format overview: types, syntax, and schema standards\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 0 - File 4: Institutional Student Portal JSON API Schema Spec (Case Study)\r
Demonstrates:\r
  1. Production JSON API schema contract definition for academic student registries\r
  2. Multi-tier payload validation (Envelope, Academic records, Payment vouchers)\r
  3. Sanitizing and serializing validated payloads into compliant JSON documents\r
"""\r
\r
import json\r
from typing import Dict, Any, Tuple, List\r
\r
INSTITUTIONAL_API_CONTRACT = {\r
    "title": "Coder & AccoTax Student Admission & Examination API",\r
    "version": "2026.1",\r
    "required_envelope_keys": ["api_version", "institution", "timestamp", "payload"],\r
    "allowed_courses": ["Python Full-Stack", "Data Science & AI", "Generators & Metaclasses"],\r
    "allowed_campuses": ["Barrackpore Main Campus", "Kolkata Hub", "Online Global"]\r
}\r
\r
def validate_and_process_admission_payload(raw_json: str) -> Tuple[bool, List[str], str]:\r
    """Validates complete API envelope and student payload according to 2026 schema spec."""\r
    errors = []\r
\r
    # 1. Parse JSON Syntax:\r
    try:\r
        doc = json.loads(raw_json)\r
    except json.JSONDecodeError as exc:\r
        return False, [f"JSON Parse Error: {exc.msg} at line {exc.lineno}"], ""\r
\r
    # 2. Validate API Envelope:\r
    for key in INSTITUTIONAL_API_CONTRACT["required_envelope_keys"]:\r
        if key not in doc:\r
            errors.append(f"Envelope Error: Missing required key '{key}'")\r
\r
    if errors:\r
        return False, errors, ""\r
\r
    payload = doc["payload"]\r
\r
    # 3. Validate Student Metadata:\r
    student_id = payload.get("student_id")\r
    name = payload.get("name")\r
    course = payload.get("course")\r
    campus = payload.get("campus")\r
    marks = payload.get("academic_scores", {})\r
    payment = payload.get("payment_voucher", {})\r
\r
    if not student_id or not str(student_id).startswith("STU-"):\r
        errors.append("Student ID must follow format 'STU-XXXX'")\r
\r
    if course not in INSTITUTIONAL_API_CONTRACT["allowed_courses"]:\r
        errors.append(f"Invalid course '{course}'. Allowed: {INSTITUTIONAL_API_CONTRACT['allowed_courses']}")\r
\r
    if campus not in INSTITUTIONAL_API_CONTRACT["allowed_campuses"]:\r
        errors.append(f"Invalid campus '{campus}'. Allowed: {INSTITUTIONAL_API_CONTRACT['allowed_campuses']}")\r
\r
    # 4. Validate Payment Voucher:\r
    if payment.get("amount_paid", 0) <= 0:\r
        errors.append("Payment voucher must have a positive 'amount_paid'")\r
\r
    if errors:\r
        return False, errors, ""\r
\r
    # Generate Certified Sanitized JSON Record:\r
    certified_record = {\r
        "status": "OFFICIALLY_REGISTERED",\r
        "reference_token": f"SEAL-2026-{student_id}",\r
        "student_name": name,\r
        "course_enrolled": course,\r
        "campus_location": campus,\r
        "fees_settled": payment.get("amount_paid"),\r
        "gpa": sum(marks.values()) / len(marks) if marks else 0.0\r
    }\r
\r
    return True, [], json.dumps(certified_record, indent=2)\r
\r
\r
def run_portal_schema_demo():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - INSTITUTIONAL STUDENT PORTAL JSON API SCHEMA")\r
    print("=" * 70)\r
\r
    # Valid Production Payload:\r
    sample_request_json = """\r
    {\r
        "api_version": "2026.1",\r
        "institution": "Coder & AccoTax",\r
        "timestamp": "2026-08-24T10:00:00Z",\r
        "payload": {\r
            "student_id": "STU-101",\r
            "name": "Sourav Mukherjee",\r
            "course": "Python Full-Stack",\r
            "campus": "Barrackpore Main Campus",\r
            "academic_scores": {\r
                "core_python": 95.0,\r
                "oop_structures": 92.0,\r
                "generators_decorators": 96.5\r
            },\r
            "payment_voucher": {\r
                "voucher_no": "VOUCH-BP-2026-001",\r
                "amount_paid": 28000.0,\r
                "status": "SETTLED"\r
            }\r
        }\r
    }\r
    """\r
\r
    print("1. Processing Valid Admission Payload against 2026 Spec:")\r
    is_valid, errors, certified_json = validate_and_process_admission_payload(sample_request_json)\r
\r
    if is_valid:\r
        print("   [VALIDATED] Payload conforms to official JSON schema contract!")\r
        print(f"   Certified Institutional Output:\\n{certified_json}")\r
    else:\r
        print("   [REJECTED] Payload failed validation:")\r
        for err in errors:\r
            print(f"   - {err}")\r
\r
    print("\\n[PASSED] Institutional Student Portal API Schema Verified.")\r
\r
\r
if __name__ == "__main__":\r
    run_portal_schema_demo()\r
`,T=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
          PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_004: WORKING WITH JSON\r
           TOPIC 0: JSON FORMAT OVERVIEW, SYNTAX RULES & SCHEMA STANDARDS\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. THE 6 NATIVE JSON DATA TYPES (RFC 8259)\r
--------------------------------------------------------------------------------\r
  1. String  : Enclosed in DOUBLE QUOTES ("name": "Sourav")\r
  2. Number  : Integer (24) or Float (9.45)\r
  3. Object  : Key-Value pairs with string keys ({"city": "Kolkata"})\r
  4. Array   : Ordered collection of values (["Python", "AI"])\r
  5. Boolean : Lowercase \`true\` or \`false\`\r
  6. Null    : Lowercase \`null\`\r
\r
--------------------------------------------------------------------------------\r
2. STRICT JSON SYNTAX RULES\r
--------------------------------------------------------------------------------\r
  • Keys MUST use double quotes (\`"key"\` NOT \`'key'\`).\r
  • Strings MUST use double quotes (\`"val"\` NOT \`'val'\`).\r
  • NO trailing commas (\`[1, 2]\` NOT \`[1, 2,]\`).\r
  • NO comments allowed in standard JSON.\r
\r
--------------------------------------------------------------------------------\r
3. PYTHON TO JSON TYPE MAPPING\r
--------------------------------------------------------------------------------\r
  dict          <---> object\r
  list, tuple   <---> array\r
  str           <---> string\r
  int, float    <---> number\r
  True / False  <---> true / false\r
  None          <---> null\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 0: JSON FORMAT & SCHEMA STANDARDS\r
================================================================================\r
`,w=[{question:"What is JSON and what standard specification defines it?",shortAnswer:"JSON (JavaScript Object Notation) is a lightweight, language-independent, text-based data interchange format standardized under RFC 8259 (and ECMA-404).",explanation:"Used universally across web APIs, databases, and configuration files.",hint:"Standardized text format based on RFC 8259.",level:"basic",codeExample:'{"status": "OK", "code": 200}'},{question:"What are the 6 native data types supported in the JSON specification?",shortAnswer:"1. 'string' (in double quotes), 2. 'number' (integer or floating-point), 3. 'object' (key-value pairs), 4. 'array' (ordered list of values), 5. 'boolean' ('true' / 'false'), 6. 'null'.",explanation:"Any data beyond these 6 types must be serialized into string or numeric representations.",hint:"String, Number, Object, Array, Boolean, Null.",level:"basic",codeExample:'{"str": "a", "num": 1, "obj": {}, "arr": [], "bool": true, "nil": null}'},{question:"Why does standard JSON strictly require DOUBLE QUOTES for keys and string values?",shortAnswer:`The RFC 8259 grammar mandates double quotes ('"') for all object keys and string values; using single quotes (''') produces invalid JSON and causes JSONDecodeError.`,explanation:"Unlike Python and JavaScript literals, JSON does not allow single quotes.",hint:"RFC 8259 standard mandates double quotes; single quotes are invalid.",level:"basic",codeExample:`// INVALID: {'name': 'Sourav'}
// VALID: {"name": "Sourav"}`},{question:"Are trailing commas allowed in JSON arrays or objects?",shortAnswer:`No. Trailing commas after the last element (e.g. '[1, 2,]' or '{"a": 1,}') are strictly prohibited by the JSON grammar and raise 'JSONDecodeError'.`,explanation:"One of the most frequent syntax errors in manually edited JSON files.",hint:"No, trailing commas after the last item are strictly forbidden.",level:"basic",codeExample:`# INVALID: {"a": 1, "b": 2,}
# VALID: {"a": 1, "b": 2}`},{question:"Are comments (like '//' or '/* */') supported in standard JSON?",shortAnswer:"No. The official JSON standard (RFC 8259) explicitly forbids comments to prevent parsers from differing in implementation and syntax parsing.",explanation:"Formats like JSON5 or JSONC support comments, but standard JSON does not.",hint:"No, standard JSON forbids comments entirely.",level:"basic",codeExample:"# Comments cause json.decoder.JSONDecodeError"},{question:"How does Python map its native data types to JSON data types?",shortAnswer:"'dict' -> 'object', 'list/tuple' -> 'array', 'str' -> 'string', 'int/float' -> 'number', 'True/False' -> 'true/false', 'None' -> 'null'.",explanation:"Built-in mapping used by json.dumps() and json.dump().",hint:"dict->object, list/tuple->array, str->string, int/float->number, None->null.",level:"basic",codeExample:`json.dumps({'active': True, 'count': None}) # '{"active": true, "count": null}'`},{question:"What is the 'Tuple-to-Array Asymmetry' gotcha when round-tripping data through JSON?",shortAnswer:"Python tuples are serialized into JSON arrays; when deserialized back via 'json.loads()', they become Python 'lists', losing their original tuple type and immutability.",explanation:"json.loads() always creates lists for JSON arrays.",hint:"Tuples become lists when serialized to JSON and parsed back.",level:"moderate",codeExample:"t = (1, 2); l = json.loads(json.dumps(t)); assert type(l) is list"},{question:"What happens if you attempt to serialize a Python 'set' using 'json.dumps()'?",shortAnswer:"It raises 'TypeError: Object of type set is not JSON serializable' because JSON has no native set data type.",explanation:"Sets must be converted to lists ('list(my_set)') before serialization.",hint:"Raises TypeError because JSON does not support sets.",level:"basic",codeExample:"json.dumps(list({'a', 'b'})) # Must convert set to list first"},{question:"What happens if you attempt to serialize a 'datetime.datetime' object directly with 'json.dumps()'?",shortAnswer:"It raises 'TypeError: Object of type datetime is not JSON serializable' unless converted to an ISO 8601 string or handled with a custom JSONEncoder.",explanation:"Standard practice is to serialize datetimes as ISO 8601 strings: dt.isoformat().",hint:"Raises TypeError unless converted to ISO 8601 string (.isoformat()).",level:"basic",codeExample:"json.dumps({'time': datetime.now().isoformat()})"},{question:"What happens if you attempt to serialize 'bytes' (e.g. b'raw_data') to JSON?",shortAnswer:"It raises 'TypeError: Object of type bytes is not JSON serializable'; binary data must be base64-encoded or decoded to UTF-8 text.",explanation:"JSON is strictly a Unicode text format.",hint:"Raises TypeError; encode bytes using base64 or decode to UTF-8.",level:"basic",codeExample:`import base64
json.dumps({'bin': base64.b64encode(b'abc').decode()})`},{question:"What information does 'json.JSONDecodeError' provide when parsing fails?",shortAnswer:"It provides 'exc.msg' (error description), 'exc.lineno' (line number), 'exc.colno' (column number), and 'exc.pos' (byte/char character index in string).",explanation:"Allows pin-pointing the exact corrupt character in a large JSON payload.",hint:"Provides error message, line number (lineno), column number (colno), and char position.",level:"moderate",codeExample:"except json.JSONDecodeError as e: print(f'{e.msg} at line {e.lineno}:{e.colno}')"},{question:"What is a 'JSON Schema'?",shortAnswer:"A declarative specification standard (JSON Schema Draft-07/2020-12) used to annotate and validate the structure, data types, required keys, and constraints of JSON documents.",explanation:"Acts as a formal contract between API producers and consumers.",hint:"A declarative specification defining required keys, types, and constraints for JSON.",level:"moderate",codeExample:'{"type": "object", "required": ["id"], "properties": {"id": {"type": "string"}}}'},{question:"Can JSON object keys be numbers or booleans directly in standard JSON?",shortAnswer:`No. In JSON, all object keys MUST be strings enclosed in double quotes. In Python, '{1: "val"}' serializes to '{"1": "val"}', converting the integer key to a string.`,explanation:"When deserialized, key '1' remains a string and does not revert to an int.",hint:"Keys must always be strings; integer keys are converted to strings.",level:"moderate",codeExample:`json.dumps({101: 'data'}) # Result: '{"101": "data"}'`},{question:"How does JSON handle Special Floating-Point Values (NaN, Infinity, -Infinity)?",shortAnswer:"RFC 8259 strictly forbids 'NaN' and 'Infinity'. By default, Python's 'json' module serializes them non-compliantly unless 'allow_nan=False' is set, which raises 'ValueError'.",explanation:"Setting allow_nan=False enforces strict RFC 8259 compliance.",hint:"RFC 8259 forbids NaN/Infinity; use allow_nan=False to enforce strict compliance.",level:"complex",codeExample:"json.dumps({'val': float('nan')}, allow_nan=False) # Raises ValueError"},{question:"What is the difference between JSON and Python Dictionary syntax?",shortAnswer:"JSON requires double-quoted keys, lowercase booleans ('true'/'false'), 'null', and no comments/trailing commas. Python dicts allow single quotes, unquoted numbers/tuples as keys, 'True'/'False', 'None', and comments.",explanation:"A Python dictionary literal is not automatically valid JSON.",hint:"JSON: double quotes, true/false/null. Python: single quotes, True/False/None.",level:"basic",codeExample:`# Python: {None: True}
# JSON: {"null": true}`},{question:"What is an 'API Envelope' pattern in JSON payload design?",shortAnswer:`A standard API design wrapper containing top-level metadata (status, version, timestamp, error details) alongside the actual data payload: '{"status": "OK", "data": {...}}'.`,explanation:"Ensures uniform API response structures across endpoints.",hint:"A top-level structure containing metadata (status, version) and payload data.",level:"moderate",codeExample:'{"api_version": "2.0", "status": "SUCCESS", "payload": {...}}'},{question:"What character encoding does the JSON specification require?",shortAnswer:"RFC 8259 specifies that JSON text exchanged between systems MUST be encoded in UTF-8 by default (UTF-16 and UTF-32 are allowed only in private contexts).",explanation:"Python's json.loads() accepts both str (Unicode) and UTF-8 bytes.",hint:"UTF-8 is the mandatory default encoding for JSON.",level:"basic",codeExample:"# JSON is exchanged in UTF-8 encoding"},{question:"How do escape sequences work in JSON strings?",shortAnswer:`Special characters are escaped with a backslash: '\\"' (quote), '\\\\' (backslash), '\\n' (newline), '\\t' (tab), and '\\uXXXX' (hexadecimal Unicode character).`,explanation:"Ensures safe representation of control characters in JSON strings.",hint:'Uses backslash escape sequences like \\", \\\\, \\n, \\t, \\uXXXX.',level:"basic",codeExample:'{"text": "Hello \\"World\\"\\nLine 2"}'},{question:"Why should you never use 'eval()' to parse JSON strings in Python?",shortAnswer:"Using 'eval()' executes arbitrary Python code and creates severe remote code execution (RCE) security vulnerabilities; always use 'json.loads()' for safe parsing.",explanation:"eval() can execute malicious system commands embedded in strings.",hint:"eval() is a critical security vulnerability; always use json.loads().",level:"basic",codeExample:"# DANGEROUS: data = eval(untrusted_json_string) # NEVER DO THIS!"},{question:"How can you minify a JSON document in Python?",shortAnswer:`By passing 'separators=(",", ":")' to 'json.dumps()', removing all redundant whitespace between keys and values for compact transmission over networks.`,explanation:"Reduces payload bandwidth by up to 30-40%.",hint:"Use json.dumps(data, separators=(',', ':')).",level:"moderate",codeExample:"compact_json = json.dumps(data, separators=(',', ':'))"},{question:"How do you format (pretty-print) a JSON string with 4-space indentation?",shortAnswer:"By passing 'indent=4' to 'json.dumps(data, indent=4)'.",explanation:"Makes complex nested JSON readable for humans and logs.",hint:"Use json.dumps(data, indent=4).",level:"basic",codeExample:"pretty_json = json.dumps(data, indent=4)"},{question:"What is the role of 'sort_keys=True' in 'json.dumps()'?",shortAnswer:"It sorts object keys alphabetically, producing deterministic, canonical JSON strings that are ideal for unit testing, cryptographic hashing, and diffing.",explanation:"Ensures consistent string output regardless of dictionary insertion order.",hint:"Sorts dictionary keys alphabetically for deterministic output.",level:"moderate",codeExample:"json.dumps(data, sort_keys=True)"},{question:"Can JSON represent recursive / circular data structures?",shortAnswer:`No. Attempting to serialize a circular reference (e.g. 'a = {}; a["self"] = a') raises 'ValueError: Circular reference detected'.`,explanation:"JSON trees are strictly acyclic directed graphs.",hint:"No, circular references raise ValueError (Circular reference detected).",level:"moderate",codeExample:"# ValueError: Circular reference detected"},{question:"How do you safely validate a required field in a parsed JSON dictionary?",shortAnswer:`By checking key existence: 'if "user_id" not in data: raise KeyError("Missing user_id")' or using '.get("user_id")' with default fallbacks.`,explanation:"Standard programmatic validation pattern.",hint:"Use 'if key not in data:' or 'data.get(key)'.",level:"basic",codeExample:"user_id = data.get('user_id') or raise_missing_field()"},{question:"What is the ultimate golden rule for JSON Format & Schema Standards in Python?",shortAnswer:"JSON is a strict RFC 8259 text format with 6 data types requiring double quotes and no trailing commas; use 'json.loads()'/'json.dumps()' for safe serialization and validate payload schema contracts prior to processing.",explanation:"The foundation of all modern API integration and distributed systems in Python.",hint:"Strict RFC 8259 rules: 6 types, double quotes, no trailing commas, schema validation.",level:"basic",codeExample:"# Python JSON Standards Mastery"}];function D(){const m=d.useRef([]),[i,p]=d.useState("types"),l={valid:`{
  "student_id": "STU-101",
  "name": "Sourav Mukherjee",
  "course": "Python Full-Stack",
  "score": 94.5,
  "fee_paid": 28000.0,
  "is_enrolled": true,
  "scholarship": null,
  "skills": ["Python", "Decorators", "Generators"]
}`,singleQuotes:`{
  'student_id': 'STU-102',
  'name': 'Priyanka Sen',
  'course': 'Data Science'
}`,trailingComma:`{
  "student_id": "STU-103",
  "name": "Rahul Verma",
  "courses": ["Core Python", "Data Structures",],
}`,schemaViolation:`{
  "student_id": "STU-104",
  "name": "Debolina Roy",
  "score": 145.0,
  "fee_paid": "NOT_PAID"
}`},[c,o]=d.useState(l.valid),[n,u]=d.useState({isValid:!0,message:"Valid RFC 8259 JSON Syntax & Schema Compliant",parsed:null,errors:[]}),a=()=>{try{const t=JSON.parse(c),s=[];t.student_id||s.push("Missing required field: 'student_id'"),t.name||s.push("Missing required field: 'name'"),typeof t.score=="number"&&(t.score<0||t.score>100)&&s.push(`Score range violation: ${t.score} is not between 0 and 100.`),t.fee_paid!==void 0&&typeof t.fee_paid!="number"&&s.push(`Type mismatch on 'fee_paid': Expected number, got ${typeof t.fee_paid}.`),s.length>0?u({isValid:!1,message:"JSON Syntax Valid, but Schema Contract Violated",parsed:t,errors:s}):u({isValid:!0,message:"100% Valid RFC 8259 JSON & Schema Compliant",parsed:t,errors:[]})}catch(t){u({isValid:!1,message:`JSON Syntax Error: ${t.message}`,parsed:null,errors:[t.message]})}},f=()=>{try{const t=JSON.parse(c);o(JSON.stringify(t)),a()}catch{a()}},y=()=>{try{const t=JSON.parse(c);o(JSON.stringify(t,null,2)),a()}catch{a()}};d.useEffect(()=>{const t=new IntersectionObserver(s=>{s.forEach(h=>{h.isIntersecting&&h.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return m.current.forEach(s=>{s&&t.observe(s)}),()=>t.disconnect()},[]);const r=t=>{t&&!m.current.includes(t)&&m.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:r,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_004"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 0 • Module Launch"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Working with JSON & External Data APIs"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["JSON Format Overview: ",e.jsx("span",{className:"text-teal-400",children:"Types, Syntax & Schema Standards"})]}),e.jsx("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:"Master the official JSON (RFC 8259) standard: the 6 native JSON data types, strict syntax constraints (double quotes, no trailing commas, no comments), Python-to-JSON type mapping equivalences, and declarative schema contracts."}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📜 RFC 8259 Standard Spec"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🧩 6 Native JSON Data Types"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔄 Python ↔ JSON Type Matrix"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ JSON Schema Contract Validation"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧱"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The 6 Fundamental JSON Data Types (RFC 8259)"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["JSON supports exactly 6 primitive and composite data structures. Any other data type (such as Python's ",e.jsx("code",{className:"text-rose-400 font-mono",children:"datetime"}),", ",e.jsx("code",{className:"text-rose-400 font-mono",children:"set"}),", or ",e.jsx("code",{className:"text-rose-400 font-mono",children:"bytes"}),") must be converted into one of these 6 formats:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ String"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:'"name": "Sourav"'}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Unicode characters enclosed in MANDATORY double quotes."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Number"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:'"age": 24, "gpa": 9.45'}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Integers or IEEE-754 floating-point decimals. (No NaN/Infinity)."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Object"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:'{"city": "Kolkata"}'}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Unordered key-value mappings where all keys MUST be strings."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 shadow-lg",children:[e.jsx("div",{className:"text-emerald-400 font-bold text-sm mb-1",children:"4️⃣ Array"}),e.jsx("code",{className:"text-xs font-mono text-emerald-300 block mb-1",children:'["Python", "AI", 100]'}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Ordered lists of values of arbitrary mixed types."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 shadow-lg",children:[e.jsx("div",{className:"text-amber-400 font-bold text-sm mb-1",children:"5️⃣ Boolean"}),e.jsx("code",{className:"text-xs font-mono text-amber-300 block mb-1",children:'"enrolled": true'}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Strictly lowercase literals ",e.jsx("code",{className:"text-amber-300",children:"true"})," or ",e.jsx("code",{className:"text-amber-300",children:"false"}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/40 border border-rose-800/60 shadow-lg",children:[e.jsx("div",{className:"text-rose-400 font-bold text-sm mb-1",children:"6️⃣ Null"}),e.jsx("code",{className:"text-xs font-mono text-rose-300 block mb-1",children:'"expiry": null'}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Strictly lowercase literal ",e.jsx("code",{className:"text-rose-300",children:"null"})," (maps to Python's ",e.jsx("code",{className:"text-slate-200 font-mono",children:"None"}),")."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"Strict JSON Syntax Invariants (RFC 8259)"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["• ",e.jsx("span",{className:"text-rose-400 font-bold",children:"No Single Quotes"}),": ",e.jsx("code",{className:"text-slate-400",children:"'key': 'value'"})," is ILLEGAL.",e.jsx("br",{}),"• ",e.jsx("span",{className:"text-rose-400 font-bold",children:"No Trailing Commas"}),": ",e.jsx("code",{className:"text-slate-400",children:"[1, 2, 3,]"})," is ILLEGAL.",e.jsx("br",{}),"• ",e.jsx("span",{className:"text-rose-400 font-bold",children:"No Comments"}),": ",e.jsx("code",{className:"text-slate-400",children:"// comment"})," causes ",e.jsx("code",{className:"text-cyan-300",children:"JSONDecodeError"}),"."]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing JSON Types, Mappings & Schema Contracts"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>p("types"),className:x("px-3 py-1.5 rounded-lg transition-all",i==="types"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"6 Native Types"}),e.jsx("button",{onClick:()=>p("mapping"),className:x("px-3 py-1.5 rounded-lg transition-all",i==="mapping"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Python ↔ JSON Matrix"}),e.jsx("button",{onClick:()=>p("schema"),className:x("px-3 py-1.5 rounded-lg transition-all",i==="schema"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Schema Contract Flow"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining data type specifications, round-trip serialization conversions, and API schema contracts:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:i==="types"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"THE 6 NATIVE JSON DATA TYPES (RFC 8259 GRAMMAR)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"110",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"25",fill:"#99f6e4",fontSize:"11 font-bold",children:"1. String"}),e.jsx("text",{x:"15",y:"48",fill:"#34d399",fontSize:"9 font-mono font-bold",children:'"student": "Sourav"'}),e.jsx("text",{x:"15",y:"70",fill:"#cbd5e1",fontSize:"8",children:"• Mandatory double quotes"}),e.jsx("text",{x:"15",y:"85",fill:"#cbd5e1",fontSize:"8",children:"• Backslash escape sequences"}),e.jsx("rect",{x:"285",y:"0",width:"250",height:"110",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"300",y:"25",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. Number"}),e.jsx("text",{x:"300",y:"48",fill:"#38bdf8",fontSize:"9 font-mono font-bold",children:'"age": 24, "fee": 28000.50'}),e.jsx("text",{x:"300",y:"70",fill:"#cbd5e1",fontSize:"8",children:"• Integers & standard decimals"}),e.jsx("text",{x:"300",y:"85",fill:"#cbd5e1",fontSize:"8",children:"• No NaN or Infinity literals"}),e.jsx("rect",{x:"570",y:"0",width:"250",height:"110",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"585",y:"25",fill:"#c4b5fd",fontSize:"11 font-bold",children:"3. Object"}),e.jsx("text",{x:"585",y:"48",fill:"#c4b5fd",fontSize:"9 font-mono font-bold",children:'{"city": "Barrackpore"}'}),e.jsx("text",{x:"585",y:"70",fill:"#cbd5e1",fontSize:"8",children:"• Key-Value dictionary maps"}),e.jsx("text",{x:"585",y:"85",fill:"#cbd5e1",fontSize:"8",children:"• Keys MUST be double-quoted strings"}),e.jsx("rect",{x:"0",y:"130",width:"250",height:"110",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"15",y:"155",fill:"#a7f3d0",fontSize:"11 font-bold",children:"4. Array"}),e.jsx("text",{x:"15",y:"178",fill:"#34d399",fontSize:"9 font-mono font-bold",children:'["Python", "Generators"]'}),e.jsx("text",{x:"15",y:"200",fill:"#cbd5e1",fontSize:"8",children:"• Ordered list of values"}),e.jsx("text",{x:"15",y:"215",fill:"#cbd5e1",fontSize:"8",children:"• No trailing commas allowed"}),e.jsx("rect",{x:"285",y:"130",width:"250",height:"110",rx:"8",fill:"#451a03",stroke:"#f59e0b"}),e.jsx("text",{x:"300",y:"155",fill:"#fde68a",fontSize:"11 font-bold",children:"5. Boolean"}),e.jsx("text",{x:"300",y:"178",fill:"#fbbf24",fontSize:"9 font-mono font-bold",children:'"is_enrolled": true'}),e.jsx("text",{x:"300",y:"200",fill:"#cbd5e1",fontSize:"8",children:"• Strictly `true` or `false`"}),e.jsx("text",{x:"300",y:"215",fill:"#cbd5e1",fontSize:"8",children:"• All lowercase characters"}),e.jsx("rect",{x:"570",y:"130",width:"250",height:"110",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"585",y:"155",fill:"#fda4af",fontSize:"11 font-bold",children:"6. Null"}),e.jsx("text",{x:"585",y:"178",fill:"#fda4af",fontSize:"9 font-mono font-bold",children:'"scholarship": null'}),e.jsx("text",{x:"585",y:"200",fill:"#cbd5e1",fontSize:"8",children:"• Strictly lowercase `null`"}),e.jsx("text",{x:"585",y:"215",fill:"#cbd5e1",fontSize:"8",children:"• Represents absence of value"})]})]}):i==="mapping"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"PYTHON TYPE ↔ JSON TYPE BIDIRECTIONAL MAPPING MATRIX"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"340",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"Python Data Structures"}),e.jsxs("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:["dict (","{'a': 1}",")"]}),e.jsx("text",{x:"20",y:"85",fill:"#ecfdf5",fontSize:"9 font-mono",children:"list / tuple ([1, 2] / (1, 2))"}),e.jsx("text",{x:"20",y:"110",fill:"#ecfdf5",fontSize:"9 font-mono",children:'str ("hello")'}),e.jsx("text",{x:"20",y:"135",fill:"#ecfdf5",fontSize:"9 font-mono",children:"int / float (100 / 94.5)"}),e.jsx("text",{x:"20",y:"160",fill:"#ecfdf5",fontSize:"9 font-mono",children:"True / False"}),e.jsx("text",{x:"20",y:"185",fill:"#ecfdf5",fontSize:"9 font-mono",children:"None"}),e.jsx("text",{x:"20",y:"210",fill:"#fca5a5",fontSize:"8 font-mono",children:"set, datetime, bytes (Unsupported!)"})]}),e.jsxs("g",{transform:"translate(395, 140)",children:[e.jsx("text",{x:"0",y:"0",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",children:"json.dumps()"}),e.jsx("text",{x:"15",y:"25",fill:"#38bdf8",fontSize:"28",fontWeight:"bold",children:"⇆"}),e.jsx("text",{x:"-5",y:"45",fill:"#38bdf8",fontSize:"11 font-mono",children:"json.loads()"})]}),e.jsxs("g",{transform:"translate(510, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"340",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"JSON Representation (RFC 8259)"}),e.jsx("text",{x:"20",y:"60",fill:"#34d399",fontSize:"9 font-mono",children:'object ({"a": 1})'}),e.jsx("text",{x:"20",y:"85",fill:"#34d399",fontSize:"9 font-mono",children:"array ([1, 2]) *Tuples become lists!"}),e.jsx("text",{x:"20",y:"110",fill:"#34d399",fontSize:"9 font-mono",children:'string ("hello")'}),e.jsx("text",{x:"20",y:"135",fill:"#34d399",fontSize:"9 font-mono",children:"number (100 / 94.5)"}),e.jsx("text",{x:"20",y:"160",fill:"#34d399",fontSize:"9 font-mono",children:"true / false (lowercase)"}),e.jsx("text",{x:"20",y:"185",fill:"#34d399",fontSize:"9 font-mono",children:"null (lowercase)"}),e.jsx("text",{x:"20",y:"210",fill:"#fda4af",fontSize:"8 font-mono",children:"TypeError (Needs Custom JSONEncoder)"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"JSON SCHEMA CONTRACT & PAYLOAD VALIDATOR FLOW"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"15",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"1. Raw JSON Input"}),e.jsx("text",{x:"15",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"`POST /api/v1/admissions`"}),e.jsx("text",{x:"15",y:"75",fill:"#cbd5e1",fontSize:"8",children:"Incoming payload string from"}),e.jsx("text",{x:"15",y:"90",fill:"#cbd5e1",fontSize:"8",children:"frontend client application."}),e.jsx("rect",{x:"15",y:"110",width:"220",height:"105",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"25",y:"135",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Syntax Parsing:"}),e.jsx("text",{x:"25",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Calls `json.loads()`"}),e.jsx("text",{x:"25",y:"170",fill:"#cbd5e1",fontSize:"8",children:"Catches JSONDecodeError."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"310",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. Schema Contract Guard"}),e.jsx("text",{x:"310",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"1. Required keys check"}),e.jsx("text",{x:"310",y:"75",fill:"#ecfdf5",fontSize:"8 font-mono",children:"2. Field type verification"}),e.jsx("text",{x:"310",y:"95",fill:"#38bdf8",fontSize:"8 font-mono font-bold",children:"3. Range & enum constraints"}),e.jsx("rect",{x:"310",y:"110",width:"220",height:"105",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"320",y:"135",fill:"#38bdf8",fontSize:"9 font-bold",children:"Business Validation:"}),e.jsx("text",{x:"320",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Ensures score in [0, 100]"}),e.jsx("text",{x:"320",y:"170",fill:"#cbd5e1",fontSize:"8",children:"and fee_paid is positive."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"605",y:"30",fill:"#a7f3d0",fontSize:"11 font-bold",children:"3. Certified Execution"}),e.jsx("text",{x:"605",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:'status: "REGISTERED"'}),e.jsx("text",{x:"605",y:"75",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"Inserts into PostgreSQL / DB"}),e.jsx("rect",{x:"605",y:"110",width:"200",height:"105",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"615",y:"135",fill:"#34d399",fontSize:"9 font-bold",children:"Zero Corrupted Data:"}),e.jsx("text",{x:"615",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Protects backend databases"}),e.jsx("text",{x:"615",y:"170",fill:"#cbd5e1",fontSize:"8",children:"from invalid API payloads."})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive JSON Syntax & Schema Validation Laboratory"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Test and diagnose common JSON syntax hazards (single quotes, trailing commas, invalid types) against our institutional student schema rules in real time:"}),e.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400 py-1.5 font-bold uppercase",children:"Presets:"}),e.jsx("button",{onClick:()=>{o(l.valid),setTimeout(a,50)},className:"px-3 py-1 bg-teal-950 border border-teal-700/80 text-teal-300 rounded text-xs font-mono hover:bg-teal-900",children:"1. Valid Student JSON"}),e.jsx("button",{onClick:()=>{o(l.singleQuotes),setTimeout(a,50)},className:"px-3 py-1 bg-rose-950 border border-rose-700/80 text-rose-300 rounded text-xs font-mono hover:bg-rose-900",children:"2. Single Quotes Error"}),e.jsx("button",{onClick:()=>{o(l.trailingComma),setTimeout(a,50)},className:"px-3 py-1 bg-amber-950 border border-amber-700/80 text-amber-300 rounded text-xs font-mono hover:bg-amber-900",children:"3. Trailing Comma Error"}),e.jsx("button",{onClick:()=>{o(l.schemaViolation),setTimeout(a,50)},className:"px-3 py-1 bg-purple-950 border border-purple-700/80 text-purple-300 rounded text-xs font-mono hover:bg-purple-900",children:"4. Schema Range Violation"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs font-mono text-slate-400 font-bold uppercase",children:[e.jsx("span",{children:"JSON Payload Input Editor:"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:y,className:"text-[11px] text-teal-400 hover:text-white underline",children:"Format (indent=2)"}),e.jsx("button",{onClick:f,className:"text-[11px] text-cyan-400 hover:text-white underline",children:"Minify"})]})]}),e.jsx("textarea",{value:c,onChange:t=>o(t.target.value),rows:12,className:"w-full bg-slate-900 text-slate-100 font-mono text-xs p-3 rounded-lg border border-slate-800 focus:border-teal-500 focus:outline-none leading-relaxed",placeholder:"Enter JSON string here..."}),e.jsx("button",{onClick:a,className:"w-full py-3 bg-teal-600 hover:bg-teal-500 text-white font-mono text-xs font-bold rounded-lg transition-all shadow-lg shadow-teal-950/50",children:"Validate JSON Syntax & Schema Contract"})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:x("p-4 rounded-xl border font-mono text-xs space-y-2",n.isValid?"bg-teal-950/60 border-teal-700 text-teal-200":"bg-rose-950/60 border-rose-800 text-rose-200"),children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-sm",children:[e.jsx("span",{children:n.isValid?"✅":"❌"}),e.jsx("span",{children:n.isValid?"VALIDATION PASSED":"VALIDATION REJECTED"})]}),e.jsx("div",{className:"text-[11px] leading-relaxed",children:n.message})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[180px] font-mono text-xs space-y-1.5",children:[e.jsx("span",{className:"text-slate-400 block font-bold text-[10px] uppercase",children:n.isValid?"Parsed Object Inspection:":"Validation Error Diagnostics:"}),n.isValid?e.jsxs("div",{className:"space-y-1 text-slate-300 text-[11px]",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-teal-300 font-bold",children:"Student ID:"})," ",n.parsed?.student_id]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-teal-300 font-bold",children:"Name:"})," ",n.parsed?.name]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-teal-300 font-bold",children:"Score:"})," ",n.parsed?.score,"%"]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-teal-300 font-bold",children:"Fee Paid:"})," INR ",n.parsed?.fee_paid?.toLocaleString()]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-teal-300 font-bold",children:"Enrolled:"})," ",String(n.parsed?.is_enrolled)]})]}):e.jsx("div",{className:"space-y-1 text-rose-300 text-[11px]",children:n.errors.map((t,s)=>e.jsxs("div",{className:"p-1.5 bg-rose-950/40 rounded border border-rose-800/60",children:["• ",t]},s))})]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Python Types vs JSON Types Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Python Type"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"JSON Data Type"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Round-Trip Restored Python Type"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Serialization Notes"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"dict"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"object"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-mono",children:"dict"}),e.jsx("td",{className:"py-3 px-4",children:"All keys converted to strings"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"list"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"array"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-mono",children:"list"}),e.jsx("td",{className:"py-3 px-4",children:"Direct mapping"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"tuple"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"array"}),e.jsx("td",{className:"py-3 px-4 text-rose-300 font-mono",children:"list (Tuple Asymmetry!)"}),e.jsx("td",{className:"py-3 px-4 text-amber-300",children:"Loses tuple immutability"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"str"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"string"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-mono",children:"str"}),e.jsx("td",{className:"py-3 px-4",children:"Double-quoted UTF-8 Unicode"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-300 font-semibold",children:"int / float"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"number"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-mono",children:"int / float"}),e.jsx("td",{className:"py-3 px-4",children:"No NaN or Infinity literals"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-slate-300 font-semibold",children:"True / False"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"true / false"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-mono",children:"bool"}),e.jsx("td",{className:"py-3 px-4",children:"Lowercase booleans in JSON"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-slate-400 font-semibold",children:"None"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"null"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-mono",children:"NoneType"}),e.jsx("td",{className:"py-3 px-4",children:"Lowercase null in JSON"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-rose-400 font-semibold",children:"set, datetime, bytes"}),e.jsx("td",{className:"py-3 px-4 text-rose-400",children:"TypeError"}),e.jsx("td",{className:"py-3 px-4 text-rose-400",children:"N/A"}),e.jsx("td",{className:"py-3 px-4 text-rose-300",children:"Requires Custom JSONEncoder"})]})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating JSON data types, type equivalences, schema validation engines, and institutional student portal APIs:"}),e.jsx(b,{files:[{filename:"json_syntax_standards_and_data_types.py",code:j,description:"The 6 JSON data types, RFC 8259 syntax rules, and catching JSONDecodeError."},{filename:"json_vs_python_data_type_equivalences.py",code:v,description:"Bidirectional Python-to-JSON type mapping, tuple asymmetry, and unsupported type errors."},{filename:"json_schema_validation_fundamentals.py",code:_,description:"Declarative JSON schema definitions, type checks, and value range constraints."},{filename:"institutional_student_portal_api_schema_spec.py",code:O,description:"Institutional Student Portal JSON API Schema Contract with certified output formatting."}]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Single Quotes in JSON"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:`"{'name': 'Sourav'}"`})," causes ",e.jsx("code",{className:"text-rose-300 font-mono",children:"JSONDecodeError: Expecting property name enclosed in double quotes"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," JSON keys and strings MUST use double quotes ",e.jsx("code",{className:"text-emerald-300 font-mono",children:'"..."'}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Trailing Commas in Arrays/Objects"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-amber-300 font-mono",children:"[1, 2, 3,]"})," or ",e.jsx("code",{className:"text-amber-300 font-mono",children:'{"a": 1,}'})," is invalid JSON and raises decode errors."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Never leave trailing commas after the last element."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Tuple Asymmetry"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Serializing a tuple ",e.jsx("code",{className:"text-purple-300 font-mono",children:"(1, 2)"})," produces a JSON array ",e.jsx("code",{className:"text-purple-300 font-mono",children:"[1, 2]"}),", which re-parses as a ",e.jsx("code",{className:"text-purple-300 font-mono",children:"list"}),", losing tuple immutability."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Explicitly cast back: ",e.jsx("code",{className:"text-emerald-300",children:'tuple(parsed["items"])'}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Direct Serialization of `set` / `datetime`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Passing sets or datetimes to ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"json.dumps()"})," crashes with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"TypeError: Object of type ... is not JSON serializable"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Convert sets to lists and datetimes to ",e.jsx("code",{className:"text-emerald-300",children:"dt.isoformat()"}),"."]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering JSON specifications, RFC 8259, data types, and schema validation:"}),e.jsx(S,{questions:w})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with JSON grammar rules, type mapping matrices, and schema templates:"}),e.jsx("div",{className:"mb-10",children:e.jsx(N,{content:T,filename:"python_topic0_json_overview_notes.txt",title:"Print Topic 0 Study Notes"})}),e.jsx(g,{})]})]})]})}export{D as default};
