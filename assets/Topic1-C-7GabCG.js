import{b as s,j as e,bg as o}from"./vendor-react-core-Doz9nIC6.js";import{P}from"./PythonFileLoader-hCi5osN-.js";import{P as A}from"./PlainTextPrint-C08xhKA4.js";import{F as I}from"./FAQTemplate-CkSqDH4B.js";import{T as C}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const R=`# topic1_files/python_json_type_coercion_and_keys.py\r
# Module: 003_004_working-with-json\r
# Topic: JSON in Python: Mapping Python types to JSON types\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 1 - File 1: Python-to-JSON Key Coercion & \`skipkeys\` Parameter\r
Demonstrates:\r
  1. How non-string dictionary keys (int, float, bool) are coerced to strings in JSON\r
  2. The \`skipkeys=True\` parameter to bypass un-serializable dictionary keys (tuples, objects)\r
  3. The dictionary key mutation trap upon deserialization\r
"""\r
\r
import json\r
\r
def demonstrate_key_coercion():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - JSON KEY COERCION & \`skipkeys\` PARAMETER")\r
    print("=" * 70)\r
\r
    # 1. Dictionary with heterogeneous keys:\r
    student_scores = {\r
        101: 94.5,            # Integer key -> Becomes string "101"\r
        True: "PAID",         # Boolean key -> Becomes string "true"\r
        99.9: "TOPPER",       # Float key   -> Becomes string "99.9"\r
        "standard_key": "OK"  # String key  -> Preserved as "standard_key"\r
    }\r
\r
    print("1. Serializing Dictionary with Non-String Keys:")\r
    json_str = json.dumps(student_scores, indent=2)\r
    print(json_str)\r
\r
    # Deserializing back to Python:\r
    reconstructed = json.loads(json_str)\r
    print("\\n2. Inspecting Restored Keys (All converted to str):")\r
    for k, v in reconstructed.items():\r
        print(f"   * Key: {repr(k):<16} (Type: {type(k).__name__}) -> Value: {v}")\r
\r
    # 3. Tuple and Complex Object Keys:\r
    print("\\n3. Testing Tuple Keys without and with \`skipkeys\`:")\r
    complex_dict = {\r
        "valid_key": "Processed",\r
        ("batch_2026", "barrackpore"): "AI Cohort",  # Tuple key cannot be converted automatically!\r
        102: "Priyanka Sen"\r
    }\r
\r
    # Without skipkeys: Raises TypeError\r
    try:\r
        json.dumps(complex_dict)\r
    except TypeError as exc:\r
        print(f"   * [DEFAULT ERROR] : {exc}")\r
\r
    # With skipkeys=True: Silently ignores the tuple key\r
    skipped_json = json.dumps(complex_dict, skipkeys=True, indent=2)\r
    print("   * [WITH skipkeys=True] (Tuple key skipped safely):")\r
    print(f"     {skipped_json.replace(chr(10), chr(10) + '     ')}")\r
\r
    print(r"""\r
The Key Coercion Rules:\r
  1. JSON object keys MUST always be strings.\r
  2. Python \`int\`, \`float\`, and \`bool\` keys are automatically converted to strings.\r
  3. Complex keys (tuples, custom objects) raise \`TypeError: keys must be str, int, float, bool or None\`.\r
  4. Use \`skipkeys=True\` to ignore non-basic keys instead of crashing.\r
""")\r
    print("[PASSED] Python-to-JSON Key Coercion Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_key_coercion()\r
`,J=`# topic1_files/handling_special_floats_and_allow_nan.py\r
# Module: 003_004_working-with-json\r
# Topic: JSON in Python: Mapping Python types to JSON types\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 1 - File 2: Special Floating-Point Values (\`NaN\`, \`Infinity\`) & \`allow_nan\`\r
Demonstrates:\r
  1. Default Python handling of \`NaN\`, \`Infinity\`, and \`-Infinity\`\r
  2. The \`allow_nan=False\` parameter enforcing strict RFC 8259 compliance\r
  3. Sanitizing floating-point metric payloads before JSON export\r
"""\r
\r
import json\r
import math\r
\r
def demonstrate_special_floats():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - SPECIAL FLOATS (NaN / Infinity) & \`allow_nan\`")\r
    print("=" * 70)\r
\r
    # Dictionary containing edge-case floating point numbers:\r
    performance_metrics = {\r
        "student_id": "STU-101",\r
        "valid_score": 94.5,\r
        "unassigned_score": float("nan"),\r
        "upper_bound": float("inf"),\r
        "lower_bound": float("-inf")\r
    }\r
\r
    # 1. Default Python Serialization (allow_nan=True):\r
    print("1. Default Python Serialization (Outputs unquoted NaN/Infinity):")\r
    default_json = json.dumps(performance_metrics, indent=2)\r
    print(default_json)\r
    print("   [WARNING] Unquoted \`NaN\` and \`Infinity\` are ILLEGAL in strict RFC 8259 JSON!\\n")\r
\r
    # 2. Strict RFC 8259 Compliance with \`allow_nan=False\`:\r
    print("2. Strict Enforcement with \`allow_nan=False\` (Raises ValueError on NaN/Inf):")\r
    try:\r
        json.dumps(performance_metrics, allow_nan=False)\r
    except ValueError as exc:\r
        print(f"   * [STRICT VALIDATION BLOCKED] : {exc}\\n")\r
\r
    # 3. Sanitizing Special Floats for Safe Production APIs:\r
    print("3. Production Float Sanitization Function:")\r
    def sanitize_float_values(obj):\r
        if isinstance(obj, dict):\r
            return {k: sanitize_float_values(v) for k, v in obj.items()}\r
        elif isinstance(obj, list):\r
            return [sanitize_float_values(v) for v in obj]\r
        elif isinstance(obj, float):\r
            if math.isnan(obj):\r
                return None  # Convert NaN to JSON null\r
            elif math.isinf(obj):\r
                return "Infinity" if obj > 0 else "-Infinity"\r
        return obj\r
\r
    sanitized_data = sanitize_float_values(performance_metrics)\r
    compliant_json = json.dumps(sanitized_data, indent=2, allow_nan=False)\r
    print("   * Sanitized Compliant Output (Compatible with all web browsers):")\r
    print(f"     {compliant_json.replace(chr(10), chr(10) + '     ')}")\r
\r
    print("\\n[PASSED] Special Floats & allow_nan Compliance Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_special_floats()\r
`,D=`# topic1_files/roundtrip_type_fidelity_and_type_restoration.py\r
# Module: 003_004_working-with-json\r
# Topic: JSON in Python: Mapping Python types to JSON types\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 1 - File 3: Round-Trip Type Fidelity & Restoration Post-Processors\r
Demonstrates:\r
  1. Systematic audit of data type changes across \`json.dumps()\` -> \`json.loads()\`\r
  2. Building type restoration schemas to recover tuples, integer keys, and sets\r
  3. Guaranteeing deterministic round-trip data fidelity\r
"""\r
\r
import json\r
from typing import Dict, Any, Tuple\r
\r
def audit_roundtrip_type_mutations():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - ROUND-TRIP TYPE MUTATION & RESTORATION AUDIT")\r
    print("=" * 70)\r
\r
    # 1. Original Heterogeneous Payload:\r
    original_record = {\r
        "student_id": 101,                                     # int key\r
        "name": "Sourav Mukherjee",\r
        "coordinates": (22.7600, 88.3700),                     # tuple\r
        "score_history": [88.5, 92.0, 96.0],                   # list\r
        "course_catalog_ids": {101: "Python Core", 102: "AI"}  # dict with int keys\r
    }\r
\r
    # 2. Serialize and Deserialize:\r
    json_serialized = json.dumps(original_record)\r
    restored_record = json.loads(json_serialized)\r
\r
    print("1. Auditing Type Changes Across JSON Round-Trip:")\r
    print(f"   * Key 'coordinates':")\r
    print(f"     - Original Type : {type(original_record['coordinates']).__name__} {original_record['coordinates']}")\r
    print(f"     - Restored Type : {type(restored_record['coordinates']).__name__} {restored_record['coordinates']} (MUTATED to list!)")\r
\r
    print(f"   * Key 'course_catalog_ids':")\r
    print(f"     - Original Keys : {[type(k).__name__ for k in original_record['course_catalog_ids'].keys()]}")\r
    print(f"     - Restored Keys : {[type(k).__name__ for k in restored_record['course_catalog_ids'].keys()]} (MUTATED to str!)")\r
\r
    # 3. Restoring Type Fidelity with Post-Processor:\r
    print("\\n2. Applying Type-Restoration Post-Processor:")\r
    def restore_student_schema_types(doc: dict) -> dict:\r
        """Restores tuples and integer dictionary keys according to schema contract."""\r
        return {\r
            "student_id": int(doc["student_id"]),\r
            "name": doc["name"],\r
            "coordinates": tuple(doc["coordinates"]),  # Restored to tuple\r
            "score_history": doc["score_history"],\r
            "course_catalog_ids": {int(k): v for k, v in doc["course_catalog_ids"].items()}  # Restored int keys\r
        }\r
\r
    perfect_record = restore_student_schema_types(restored_record)\r
    print(f"   * Restored Coordinates Type : {type(perfect_record['coordinates']).__name__} {perfect_record['coordinates']}")\r
    print(f"   * Restored Catalog Key Types: {[type(k).__name__ for k in perfect_record['course_catalog_ids'].keys()]}")\r
    print(f"   * Perfect Round-Trip Fidelity: {perfect_record == original_record}")\r
\r
    print("\\n[PASSED] Round-Trip Type Fidelity & Restoration Verified.")\r
\r
\r
if __name__ == "__main__":\r
    audit_roundtrip_type_mutations()\r
`,F=`# topic1_files/institutional_course_enrollment_type_sanitizer.py\r
# Module: 003_004_working-with-json\r
# Topic: JSON in Python: Mapping Python types to JSON types\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 1 - File 4: Course Enrollment & Financial Ledger Type Sanitizer (Case Study)\r
Demonstrates:\r
  1. Automated pre-serialization type conversion for enterprise student registries\r
  2. Converting unsupported types (\`set\` -> \`sorted list\`, \`datetime\` -> ISO 8601, \`Decimal\` -> \`float\`)\r
  3. Generating deterministic, schema-compliant JSON documents for audit compliance\r
"""\r
\r
import json\r
from datetime import datetime\r
from decimal import Decimal\r
from typing import Dict, Any, List\r
\r
def sanitize_enterprise_record(record: Any) -> Any:\r
    """Recursively converts unsupported Python types into standard JSON primitives."""\r
    if isinstance(record, dict):\r
        return {str(k): sanitize_enterprise_record(v) for k, v in record.items()}\r
    elif isinstance(record, (list, tuple)):\r
        return [sanitize_enterprise_record(item) for item in record]\r
    elif isinstance(record, set):\r
        return sorted([sanitize_enterprise_record(item) for item in record])\r
    elif isinstance(record, datetime):\r
        return record.isoformat()\r
    elif isinstance(record, Decimal):\r
        return float(record)\r
    elif isinstance(record, bytes):\r
        return record.decode("utf-8", errors="replace")\r
    return record\r
\r
\r
def run_sanitizer_case_study():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - ENTERPRISE RECORD TYPE SANITIZER")\r
    print("=" * 70)\r
\r
    # Complex Python domain payload containing heterogeneous non-JSON types:\r
    raw_enrollment_record = {\r
        "student_id": "STU-101",\r
        "candidate_name": "Sourav Mukherjee",\r
        "enrollment_timestamp": datetime(2026, 8, 24, 10, 30, 0),\r
        "tuition_fee_decimal": Decimal("28500.50"),\r
        "earned_skill_badges": {"AI_ENGINEER", "DECORATORS_MASTER", "PYTHON_CORE"},\r
        "campus_location_tuple": ("Barrackpore Main Campus", "West Bengal"),\r
        "digital_audit_signature": b"SEAL_VALIDATED_2026",\r
        "module_credits_map": {\r
            101: Decimal("4.0"),\r
            102: Decimal("3.5")\r
        }\r
    }\r
\r
    print("1. Original Python Record with Unsupported Types:")\r
    print(f"   * Badges Type     : {type(raw_enrollment_record['earned_skill_badges']).__name__}")\r
    print(f"   * Timestamp Type  : {type(raw_enrollment_record['enrollment_timestamp']).__name__}")\r
    print(f"   * Fee Decimal Type: {type(raw_enrollment_record['tuition_fee_decimal']).__name__}")\r
    print(f"   * Signature Type  : {type(raw_enrollment_record['digital_audit_signature']).__name__}\\n")\r
\r
    # 2. Sanitize and Serialize:\r
    print("2. Running Enterprise Type Sanitizer:")\r
    clean_payload = sanitize_enterprise_record(raw_enrollment_record)\r
    compliant_json = json.dumps(clean_payload, indent=2, sort_keys=True)\r
\r
    print("   [SUCCESS] Successfully Serialized to 100% Valid RFC 8259 JSON Document:")\r
    print(compliant_json)\r
\r
    print("\\n[PASSED] Enterprise Record Type Sanitizer Verified.")\r
\r
\r
if __name__ == "__main__":\r
    run_sanitizer_case_study()\r
`,M=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
          PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_004: WORKING WITH JSON\r
           TOPIC 1: MAPPING PYTHON DATA TYPES TO JSON SPECIFICATIONS\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. KEY COERCION & skipkeys\r
--------------------------------------------------------------------------------\r
  • JSON keys MUST be strings.\r
  • Python int/float/bool keys are automatically coerced to strings: {101: "A"} -> {"101": "A"}\r
  • Tuple keys raise TypeError unless \`skipkeys=True\` is passed: \`json.dumps(d, skipkeys=True)\`\r
\r
--------------------------------------------------------------------------------\r
2. SPECIAL FLOATS: NaN & INFINITY\r
--------------------------------------------------------------------------------\r
  • Default \`json.dumps()\` emits unquoted \`NaN\` (Illegal in strict RFC 8259).\r
  • Use \`allow_nan=False\` to raise ValueError and enforce strict compliance.\r
\r
--------------------------------------------------------------------------------\r
3. ROUND-TRIP MUTATIONS\r
--------------------------------------------------------------------------------\r
  • \`tuple\` (1, 2)  ---> \`list\` [1, 2]\r
  • \`dict\` {101: v} ---> \`dict\` {"101": v}\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 1: PYTHON-JSON TYPE MAPPING\r
================================================================================\r
`,q=[{question:"What happens to Python integer, float, and boolean dictionary keys when serialized to JSON?",shortAnswer:`They are automatically coerced to strings: '{101: "data"}' becomes '{"101": "data"}', '{True: 1}' becomes '{"true": 1}'.`,explanation:"Mandated because all JSON object keys must be strings.",hint:"Keys are automatically coerced into strings during serialization.",level:"basic",codeExample:`json.dumps({101: 'A'}) # '{"101": "A"}'`},{question:`What happens if a Python dictionary has a tuple as a key (e.g. '{("batch", 2026): "AI"}')?`,shortAnswer:"By default, it raises 'TypeError: keys must be str, int, float, bool or None, not tuple', because tuples cannot be directly coerced to JSON string keys.",explanation:"Complex keys require custom serialization or string conversion.",hint:"Raises TypeError because tuple keys cannot be converted automatically.",level:"basic",codeExample:"json.dumps({('a', 'b'): 1}) # Raises TypeError"},{question:"What is the purpose of the 'skipkeys=True' parameter in 'json.dumps()'?",shortAnswer:"When set to True, 'json.dumps(d, skipkeys=True)' silently skips dictionary keys that are not basic types (such as tuples or custom objects) rather than raising a 'TypeError'.",explanation:"Safe serialization fallback for dictionaries with heterogeneous keys.",hint:"Silently skips keys that cannot be converted to strings.",level:"moderate",codeExample:"json.dumps(dict_with_tuple_keys, skipkeys=True)"},{question:`How does Python handle 'float("nan")' and 'float("inf")' during JSON serialization by default?`,shortAnswer:"By default ('allow_nan=True'), Python emits unquoted 'NaN', 'Infinity', and '-Infinity', which is non-compliant with the strict RFC 8259 JSON specification.",explanation:"Standard JavaScript parsers and strict REST endpoints reject unquoted NaN.",hint:"Emits unquoted NaN/Infinity by default, which is non-compliant with RFC 8259.",level:"moderate",codeExample:`json.dumps({'score': float('nan')}) # '{"score": NaN}'`},{question:"What does setting 'allow_nan=False' do in 'json.dumps()'?",shortAnswer:"It enforces strict RFC 8259 compliance by raising a 'ValueError: Out of range float values are not JSON compliant' whenever NaN, Infinity, or -Infinity is encountered.",explanation:"Ensures exported JSON is 100% compliant with standard web parsers.",hint:"Raises ValueError on NaN or Infinity to enforce strict compliance.",level:"moderate",codeExample:"json.dumps({'score': float('nan')}, allow_nan=False) # Raises ValueError"},{question:"What happens to Python 'tuples' during a JSON round-trip ('json.loads(json.dumps(data))')?",shortAnswer:"Tuples are converted to JSON arrays on serialization, and deserialized back as Python 'lists', losing their original tuple type and immutability.",explanation:"The classic 'Tuple-to-Array Asymmetry' in Python JSON processing.",hint:"Tuples are converted to lists upon deserialization.",level:"basic",codeExample:"t = (1, 2); res = json.loads(json.dumps(t)); assert isinstance(res, list)"},{question:"How do you serialize a 'decimal.Decimal' object to JSON?",shortAnswer:"By converting it to a 'float' ('float(my_decimal)') or formatted 'str' ('str(my_decimal)'), or using a custom 'JSONEncoder' subclass.",explanation:"Decimals are not supported by the default encoder.",hint:"Convert Decimal to float or str before serialization.",level:"basic",codeExample:`from decimal import Decimal
json.dumps({'fee': float(Decimal('25000.50'))})`},{question:"How do you serialize a Python 'datetime' object to JSON?",shortAnswer:`By converting it to an ISO 8601 string representation using 'dt.isoformat()': '{"timestamp": datetime.now().isoformat()}'.`,explanation:"ISO 8601 is the universal standard for date/time strings in JSON APIs.",hint:"Convert datetime to string using dt.isoformat().",level:"basic",codeExample:"json.dumps({'created': datetime.now().isoformat()})"},{question:"What happens to dictionary keys of type 'int' after deserialization with 'json.loads()'?",shortAnswer:`They remain of type 'str' (e.g. key '101' remains '"101"') because JSON only supports string keys and does not retain the original Python key type information.`,explanation:"Post-processing is required if original int keys are needed.",hint:"Integer keys remain strings in the parsed dictionary.",level:"basic",codeExample:`d = json.loads('{"101": "A"}'); assert type(list(d.keys())[0]) is str`},{question:"How do you serialize a Python 'set' to JSON?",shortAnswer:"By converting the set to a 'list': 'json.dumps(list(my_set))' (or 'sorted(list(my_set))' for deterministic ordering).",explanation:"JSON arrays represent collections, so sets must become lists.",hint:"Convert set to list or sorted list using list(my_set).",level:"basic",codeExample:"json.dumps(sorted(list({'A', 'B'})))"},{question:"How do you serialize Python 'bytes' to JSON?",shortAnswer:"By encoding the bytes with Base64: 'base64.b64encode(my_bytes).decode('ascii')' or decoding text directly with '.decode('utf-8')'.",explanation:"JSON is purely text-based and cannot store raw binary bytes directly.",hint:"Base64 encode the bytes or decode to UTF-8 text.",level:"moderate",codeExample:`import base64
json.dumps({'raw': base64.b64encode(b'secret').decode()})`},{question:"Can Python 'None' be used as a dictionary key when serializing to JSON?",shortAnswer:`Yes. In Python, '{None: "value"}' serializes to '{"null": "value"}', coercing 'None' to the string '"null"'.`,explanation:"When deserialized, key becomes the string 'null', not NoneType.",hint:"Serializes to the string key 'null'.",level:"moderate",codeExample:`json.dumps({None: 100}) # '{"null": 100}'`},{question:"What is the difference between 'json.dumps()' and 'json.dump()'?",shortAnswer:"'json.dumps()' serializes a Python object to a JSON-formatted 'str'; 'json.dump()' serializes a Python object and writes it directly to a file-like stream object (e.g. open file).",explanation:"'s' stands for string.",hint:"dumps() returns a string; dump() writes directly to a file stream.",level:"basic",codeExample:`s = json.dumps(data) # string
json.dump(data, file_handle) # file`},{question:"What happens if a dictionary contains circular references when passed to 'json.dumps()'?",shortAnswer:"It raises 'ValueError: Circular reference detected' because JSON requires an acyclic tree structure.",explanation:"Python tracks visited object IDs to prevent infinite recursion.",hint:"Raises ValueError (Circular reference detected).",level:"moderate",codeExample:"a = {}; a['self'] = a; json.dumps(a) # Raises ValueError"},{question:"How does 'check_circular=False' affect JSON serialization performance?",shortAnswer:"Disabling circular reference checking ('check_circular=False') provides a minor speedup for strictly non-circular datasets, but risks stack overflow if circular references exist.",explanation:"Use with caution only on trusted non-cyclic data structures.",hint:"Bypasses circular checking for slight speedup; risky on cyclic data.",level:"complex",codeExample:"json.dumps(large_tree, check_circular=False)"},{question:"How can you ensure dictionary keys in JSON output are sorted deterministically?",shortAnswer:"By passing 'sort_keys=True' to 'json.dumps(data, sort_keys=True)'.",explanation:"Essential for reproducible output, hashing, and git diffs.",hint:"Use json.dumps(data, sort_keys=True).",level:"basic",codeExample:`json.dumps({'b': 1, 'a': 2}, sort_keys=True) # '{"a": 2, "b": 1}'`},{question:"What is the 'object_pairs_hook' parameter in 'json.loads()'?",shortAnswer:"A callback function that receives the decoded key-value pairs as a list of 2-tuples '[(key, val), ...]', commonly used to maintain custom ordering ('collections.OrderedDict') or detect duplicate keys.",explanation:"Advanced deserialization hook for fine-grained object creation.",hint:"Receives decoded key-value pairs as a list of tuples.",level:"complex",codeExample:"json.loads(json_str, object_pairs_hook=collections.OrderedDict)"},{question:`What happens if a JSON document contains duplicate keys in an object (e.g. '{"a": 1, "a": 2}')?`,shortAnswer:`By default, Python's 'json.loads()' overwrites earlier keys with the last occurrence (so '{"a": 2}' is returned); custom hooks can detect or forbid duplicates.`,explanation:"RFC 8259 allows duplicate keys but leaves behavior implementation-defined.",hint:"The last occurrence overwrites earlier occurrences by default.",level:"moderate",codeExample:`data = json.loads('{"a": 1, "a": 2}') # data['a'] == 2`},{question:"How can you validate that a restored JSON dictionary has all expected types?",shortAnswer:"By implementing a schema validation function that checks 'isinstance(val, ExpectedType)' for all required keys in the deserialized dictionary.",explanation:"Protects against type corruption during API consumption.",hint:"Use isinstance() checks against a schema definition.",level:"basic",codeExample:"assert isinstance(data['score'], (int, float))"},{question:"Why does serializing a custom Python class instance raise a 'TypeError' by default?",shortAnswer:"Because Python's standard 'JSONEncoder' only knows how to serialize built-in primitive types (dict, list, tuple, str, int, float, bool, None).",explanation:"Custom classes require custom serializers or converting 'obj.__dict__'.",hint:"Standard JSONEncoder only supports primitive types by default.",level:"basic",codeExample:`class Student: pass
json.dumps(Student()) # TypeError`},{question:"How do you sanitize a Python dictionary recursively before JSON export?",shortAnswer:"By walking the dictionary tree and converting sets to lists, datetimes to ISO strings, and Decimals to floats before calling 'json.dumps()'.",explanation:"Standard production pre-processing pattern.",hint:"Recursively transform unsupported types to primitives.",level:"moderate",codeExample:"def sanitize(d): return {k: v.isoformat() if isinstance(v, datetime) else v for k, v in d.items()}"},{question:"What is the memory impact of deserializing large JSON documents with 'json.loads()'?",shortAnswer:"'json.loads()' constructs Python dictionary and list objects on the heap, typically consuming 2x to 4x the raw text byte size in RAM.",explanation:"Python object wrapper overhead on primitive values.",hint:"Constructed Python dicts/lists occupy 2x-4x more memory than raw JSON text.",level:"moderate",codeExample:"# 10MB JSON file creates ~30MB of Python dicts in RAM"},{question:"How can you detect NaN values in floating-point metrics before serializing to JSON?",shortAnswer:"Using the built-in 'math.isnan(val)' function: 'if math.isnan(val): val = None'.",explanation:"Prevents non-compliant NaN outputs in JSON APIs.",hint:"Use math.isnan(val) and replace with None.",level:"basic",codeExample:"clean_val = None if math.isnan(val) else val"},{question:"Can Python 'collections.namedtuple' be serialized directly with 'json.dumps()'?",shortAnswer:"Yes. Because 'namedtuple' is a subclass of 'tuple', 'json.dumps()' serializes it as a JSON array '[val1, val2...]', discarding the named attribute keys!",explanation:"To preserve named keys, convert to dict first via 'obj._asdict()'.",hint:"Serializes as a list; use obj._asdict() to preserve named keys as an object.",level:"moderate",codeExample:"json.dumps(my_named_tuple._asdict())"},{question:"What is the ultimate golden rule for Mapping Python Types to JSON?",shortAnswer:"JSON object keys must always be strings; handle unsupported types (sets, datetimes, decimals) explicitly before serialization; use 'allow_nan=False' for strict API compliance; and account for tuple-to-list asymmetry in round-trips.",explanation:"The blueprint for robust data interchange and API reliability in Python.",hint:"Stringify keys, convert unsupported types, use allow_nan=False, account for tuple-to-list.",level:"basic",codeExample:"# Python JSON Type Mapping Mastery"}];function G(){const p=s.useRef([]),[a,x]=s.useState("keys"),[i,k]=s.useState(!1),[m,S]=s.useState(!1),[b,w]=s.useState(!0),[g,v]=s.useState(!0),[h,T]=s.useState(!0),[u,l]=s.useState("raw"),j=()=>{const t={student_id:101,name:"Sourav Mukherjee",coordinates:[22.76,88.37],badges:["AI_MASTER","DECORATOR_PRO"],score:m?NaN:94.5,catalog:{101:"Python Core",102:"AI"}};return i&&(t["('batch_2026', 'barrackpore')"]="AI Cohort"),t},[z,f]=s.useState(""),[O,d]=s.useState("Click 'Serialize to JSON' to inspect type transformations."),[N,y]=s.useState(!1),_=()=>{if(i&&!h){y(!0),d("TypeError: keys must be str, int, float, bool or None, not tuple! (Enable skipkeys=True or remove tuple key)"),f(`Traceback (most recent call last):
  TypeError: keys must be str, int, float, bool or None, not tuple`),l("raw");return}if(m&&!g){y(!0),d("ValueError: Out of range float values are not JSON compliant (NaN)! (Enable allow_nan=True or sanitize floats)"),f(`Traceback (most recent call last):
  ValueError: Out of range float values are not JSON compliant: nan`),l("raw");return}y(!1);const t=j(),r={student_id:t.student_id,name:t.name,coordinates:t.coordinates,badges:t.badges,score:isNaN(t.score)?b?null:"NaN":t.score,catalog:{101:"Python Core",102:"AI"}};i&&!h&&(r["('batch_2026', 'barrackpore')"]="AI Cohort");const c=JSON.stringify(r,null,2);f(c),l("serialized"),d("Successfully serialized Python data to RFC 8259 JSON document.")},E=()=>{u!=="serialized"&&_(),l("deserialized"),d("Deserialized back to Python. Notice: tuples became lists and int keys became strings!")};s.useEffect(()=>{const t=new IntersectionObserver(r=>{r.forEach(c=>{c.isIntersecting&&c.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return p.current.forEach(r=>{r&&t.observe(r)}),()=>t.disconnect()},[]);const n=t=>{t&&!p.current.includes(t)&&p.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:n,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_004"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 1"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Working with JSON & External Data APIs"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Mapping Python Types ",e.jsx("span",{className:"text-teal-400",children:"to JSON Specifications"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master the mechanics of Python-to-JSON type translation: dictionary key coercion, bypassing non-basic keys with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"skipkeys=True"}),", strict special float handling (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"allow_nan=False"}),"), and tuple-to-list round-trip mutations."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔑 Dictionary Key Stringification"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ skipkeys=True Parameter"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🎯 Special Floats (NaN / Inf) & allow_nan"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔄 Tuple-to-Array Asymmetry"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🔑"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. Key Coercion, `skipkeys` & Type Mapping"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"When serializing Python data to JSON, automatic type coercion applies to dictionary keys and scalar primitives:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Key Stringification"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:'{101: "A"} -> {"101": "A"}'}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Python ",e.jsx("code",{className:"text-teal-300",children:"int"}),", ",e.jsx("code",{className:"text-teal-300",children:"float"}),", and ",e.jsx("code",{className:"text-teal-300",children:"bool"})," keys become strings automatically."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Tuple Keys & `skipkeys`"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"skipkeys=True"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Tuple and custom object keys raise ",e.jsx("code",{className:"text-rose-400",children:"TypeError"})," unless ",e.jsx("code",{className:"text-cyan-300",children:"skipkeys=True"})," is specified."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Special Floats (`NaN`/`Inf`)"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"allow_nan=False"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Enforces strict RFC 8259 compliance by raising ",e.jsx("code",{className:"text-purple-300",children:"ValueError"})," on NaN or Infinity values."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Tuple-to-Array Asymmetry Round-Trip Gotcha"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Python tuples ",e.jsx("code",{className:"text-teal-300 font-mono",children:"(1, 2)"})," are serialized into JSON arrays ",e.jsx("code",{className:"text-teal-300 font-mono",children:"[1, 2]"}),". When parsed back via ",e.jsx("code",{className:"text-teal-300 font-mono",children:"json.loads()"}),", they become Python ",e.jsx("strong",{children:"lists"}),"! To restore tuple immutability, apply a schema post-processor: ",e.jsx("code",{className:"text-teal-300 font-mono",children:'tuple(doc["coords"])'}),"."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Key Coercion, Special Floats & Round-Trips"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>x("keys"),className:o("px-3 py-1.5 rounded-lg transition-all",a==="keys"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Key Coercion & `skipkeys`"}),e.jsx("button",{onClick:()=>x("floats"),className:o("px-3 py-1.5 rounded-lg transition-all",a==="floats"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Special Floats & `allow_nan`"}),e.jsx("button",{onClick:()=>x("roundtrip"),className:o("px-3 py-1.5 rounded-lg transition-all",a==="roundtrip"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Round-Trip Mutation Audit"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining key coercion flows, float boundary compliance, and post-processor type restorations:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:a==="keys"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"DICTIONARY KEY COERCION & `skipkeys=True` FILTERING"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"15",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"1. Python Dict with Mixed Keys"}),e.jsx("text",{x:"15",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:'101: "Sourav" (int key)'}),e.jsx("text",{x:"15",y:"75",fill:"#ecfdf5",fontSize:"8 font-mono",children:'True: "Paid" (bool key)'}),e.jsx("text",{x:"15",y:"95",fill:"#fca5a5",fontSize:"8 font-mono font-bold",children:'("batch", 2026): "AI" (tuple key!)'}),e.jsx("rect",{x:"15",y:"125",width:"220",height:"90",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"25",y:"150",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Heterogeneous Keys:"}),e.jsx("text",{x:"25",y:"170",fill:"#cbd5e1",fontSize:"8",children:"Python permits any hashable"}),e.jsx("text",{x:"25",y:"185",fill:"#cbd5e1",fontSize:"8",children:"object as dictionary keys."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"310",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. Serialization Strategy"}),e.jsx("text",{x:"310",y:"55",fill:"#38bdf8",fontSize:"8 font-mono",children:'101 -> "101" (Coerced)'}),e.jsx("text",{x:"310",y:"75",fill:"#38bdf8",fontSize:"8 font-mono",children:'True -> "true" (Coerced)'}),e.jsx("text",{x:"310",y:"95",fill:"#fca5a5",fontSize:"8 font-mono",children:"tuple key -> TypeError!"}),e.jsx("rect",{x:"310",y:"125",width:"220",height:"90",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"320",y:"150",fill:"#38bdf8",fontSize:"9 font-bold",children:"Handling Complex Keys:"}),e.jsx("text",{x:"320",y:"170",fill:"#cbd5e1",fontSize:"8",children:"With `skipkeys=True`, the"}),e.jsx("text",{x:"320",y:"185",fill:"#cbd5e1",fontSize:"8",children:"tuple key is safely skipped!"}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"605",y:"30",fill:"#a7f3d0",fontSize:"11 font-bold",children:"3. Valid Output JSON"}),e.jsx("text",{x:"605",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"{"}),e.jsx("text",{x:"615",y:"75",fill:"#34d399",fontSize:"8 font-mono",children:'"101": "Sourav",'}),e.jsx("text",{x:"615",y:"95",fill:"#34d399",fontSize:"8 font-mono",children:'"true": "Paid"'}),e.jsx("text",{x:"605",y:"115",fill:"#ecfdf5",fontSize:"8 font-mono",children:"}"}),e.jsx("rect",{x:"605",y:"130",width:"200",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"615",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"100% Valid RFC 8259:"}),e.jsx("text",{x:"615",y:"175",fill:"#cbd5e1",fontSize:"8",children:"All keys are double-quoted"}),e.jsx("text",{x:"615",y:"190",fill:"#cbd5e1",fontSize:"8",children:"strings without crashes."})]})]}):a==="floats"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"SPECIAL FLOATS: `NaN`, `Infinity` & `allow_nan=False` COMPLIANCE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"Default Python: `allow_nan=True` (Non-compliant)"}),e.jsx("text",{x:"20",y:"60",fill:"#fca5a5",fontSize:"9 font-mono",children:'payload = {"score": float("nan")}'}),e.jsx("text",{x:"20",y:"85",fill:"#fca5a5",fontSize:"9 font-mono font-bold",children:'Output: {"score": NaN}'}),e.jsx("rect",{x:"20",y:"120",width:"340",height:"95",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"145",fill:"#fda4af",fontSize:"9 font-bold",children:"Syntax Violation in Web APIs:"}),e.jsx("text",{x:"30",y:"165",fill:"#cbd5e1",fontSize:"8",children:"• Unquoted `NaN` and `Infinity` are ILLEGAL in JSON"}),e.jsx("text",{x:"30",y:"180",fill:"#cbd5e1",fontSize:"8",children:"• JavaScript `JSON.parse()` crashes with SyntaxError"}),e.jsx("text",{x:"30",y:"195",fill:"#cbd5e1",fontSize:"8",children:"• Breaks strict REST API contracts"})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"Strict Mode: `allow_nan=False`"}),e.jsx("text",{x:"20",y:"60",fill:"#34d399",fontSize:"9 font-mono",children:"json.dumps(payload, allow_nan=False)"}),e.jsx("text",{x:"20",y:"85",fill:"#34d399",fontSize:"9 font-mono font-bold",children:"Raises: ValueError (Catches corruption)"}),e.jsx("rect",{x:"20",y:"120",width:"340",height:"95",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"145",fill:"#34d399",fontSize:"9 font-bold",children:"Sanitization Recipe:"}),e.jsx("text",{x:"30",y:"165",fill:"#cbd5e1",fontSize:"8",children:"• Convert `NaN` to `null` before serialization"}),e.jsx("text",{x:"30",y:"180",fill:"#cbd5e1",fontSize:"8",children:'• Convert `Infinity` to strings: `"Infinity"`'}),e.jsx("text",{x:"30",y:"195",fill:"#cbd5e1",fontSize:"8",children:"• 100% Browser & Microservice compatible"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"ROUND-TRIP TYPE MUTATIONS & SCHEMA RESTORATION"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"15",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"1. Original Python Object"}),e.jsx("text",{x:"15",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:'"coords": (22.76, 88.37) [tuple]'}),e.jsx("text",{x:"15",y:"75",fill:"#ecfdf5",fontSize:"8 font-mono",children:'"catalog": {101: "AI"} [int key]'}),e.jsx("rect",{x:"15",y:"110",width:"220",height:"105",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"25",y:"135",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Python Domain Types:"}),e.jsx("text",{x:"25",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Rich native types with"}),e.jsx("text",{x:"25",y:"170",fill:"#cbd5e1",fontSize:"8",children:"tuple immutability & int keys."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"310",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. Restored by `json.loads()`"}),e.jsx("text",{x:"310",y:"55",fill:"#fca5a5",fontSize:"8 font-mono",children:'"coords": [22.76, 88.37] [list]'}),e.jsx("text",{x:"310",y:"75",fill:"#fca5a5",fontSize:"8 font-mono",children:'"catalog": {"101": "AI"} [str key]'}),e.jsx("rect",{x:"310",y:"110",width:"220",height:"105",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"320",y:"135",fill:"#38bdf8",fontSize:"9 font-bold",children:"Type Mutations Occurred:"}),e.jsx("text",{x:"320",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Tuples became lists;"}),e.jsx("text",{x:"320",y:"170",fill:"#cbd5e1",fontSize:"8",children:"Integer keys became strings."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"605",y:"30",fill:"#a7f3d0",fontSize:"11 font-bold",children:"3. Type Restoration Hook"}),e.jsx("text",{x:"605",y:"55",fill:"#34d399",fontSize:"8 font-mono",children:'tuple(doc["coords"])'}),e.jsx("text",{x:"605",y:"75",fill:"#34d399",fontSize:"8 font-mono",children:"{int(k): v for k,v in doc}"}),e.jsx("rect",{x:"605",y:"110",width:"200",height:"105",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"615",y:"135",fill:"#34d399",fontSize:"9 font-bold",children:"100% Type Fidelity:"}),e.jsx("text",{x:"615",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Restores original domain"}),e.jsx("text",{x:"615",y:"170",fill:"#cbd5e1",fontSize:"8",children:"types for business logic."})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Python Type Sanitizer & Round-Trip Inspector"})]}),e.jsxs("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:["Configure test flags to observe how Python's ",e.jsx("code",{className:"text-teal-300 font-mono",children:"json.dumps()"})," handles complex keys, NaN floats, and type mutations across round-trips:"]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"1. Serialization Flags & Data Invariant Toggles"})}),e.jsxs("div",{className:"space-y-2 text-xs font-mono",children:[e.jsxs("label",{className:"flex items-center gap-2 p-2 bg-slate-900 rounded border border-slate-800 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:i,onChange:t=>k(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"Inject Tuple Key: `('batch_2026', 'barrackpore'): 'AI Cohort'`"})]}),e.jsxs("label",{className:"flex items-center gap-2 p-2 bg-slate-900 rounded border border-slate-800 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:h,onChange:t=>T(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"Enable `skipkeys=True` (Bypass non-string keys safely)"})]}),e.jsxs("label",{className:"flex items-center gap-2 p-2 bg-slate-900 rounded border border-slate-800 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:m,onChange:t=>S(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"Inject `float('nan')` in score metric"})]}),e.jsxs("label",{className:"flex items-center gap-2 p-2 bg-slate-900 rounded border border-slate-800 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:g,onChange:t=>v(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"`allow_nan=True` (False raises ValueError on NaN)"})]}),e.jsxs("label",{className:"flex items-center gap-2 p-2 bg-slate-900 rounded border border-slate-800 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:b,onChange:t=>w(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"Enable Pre-Serialization Sanitizer (`NaN` -> `null`)"})]})]}),e.jsxs("div",{className:"flex gap-2 pt-2",children:[e.jsx("button",{onClick:_,className:"flex-1 py-2.5 bg-teal-600 hover:bg-teal-500 text-white font-mono text-xs font-bold rounded-lg transition-all shadow-lg shadow-teal-950/50",children:"Execute `json.dumps()`"}),e.jsx("button",{onClick:E,className:"flex-1 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-xs font-bold rounded-lg transition-all shadow-lg shadow-cyan-950/50",children:"Execute `json.loads()`"})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:o("p-3 rounded-xl border font-mono text-xs",N?"bg-rose-950/60 border-rose-800 text-rose-300":"bg-slate-900 border-slate-800 text-teal-300"),children:[e.jsx("div",{className:"font-bold text-[11px] uppercase mb-1",children:"Execution Status:"}),e.jsx("div",{className:"text-[11px] leading-relaxed",children:O})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[180px] font-mono text-xs space-y-1.5",children:[e.jsx("span",{className:"text-slate-400 block font-bold text-[10px] uppercase",children:u==="raw"?"Raw Python Data Object:":u==="serialized"?"JSON Serialized Document (RFC 8259):":"Deserialized Python Dictionary (Restored Types):"}),e.jsx("pre",{className:o("text-[11px] leading-relaxed",N?"text-rose-400":"text-slate-200"),children:z||JSON.stringify(j(),null,2)})]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Parameter & Behavior Matrix in `json.dumps()`"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Parameter"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Default Value"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"RFC 8259 Compliance Effect"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Production Recommendation"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"skipkeys"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"False"}),e.jsx("td",{className:"py-3 px-4",children:"Omits non-basic dictionary keys safely"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Set `True` on untrusted mixed dicts"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"allow_nan"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"True (Non-compliant)"}),e.jsx("td",{className:"py-3 px-4 text-rose-300",children:"Emits invalid unquoted `NaN`/`Inf`"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Set `False` on public REST APIs"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"sort_keys"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"False"}),e.jsx("td",{className:"py-3 px-4",children:"Alphabetical deterministic ordering"}),e.jsx("td",{className:"py-3 px-4 text-cyan-300",children:"Set `True` for testing & hashing"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"separators"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:'`(", ", ": ")`'}),e.jsx("td",{className:"py-3 px-4",children:"Controls inter-token whitespace"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Use `(',', ':')` for minification"})]})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating dictionary key coercion, special floats, round-trip fidelity, and recursive type sanitizers:"}),e.jsx(P,{files:[{filename:"python_json_type_coercion_and_keys.py",code:R,description:"Dictionary key coercion, tuple keys, and skipkeys=True in Python JSON serialization."},{filename:"handling_special_floats_and_allow_nan.py",code:J,description:"Handling NaN, Infinity, -Infinity, and enforcing RFC 8259 strict compliance with allow_nan=False."},{filename:"roundtrip_type_fidelity_and_type_restoration.py",code:D,description:"Auditing type mutations across JSON round-trips and restoring tuples and int keys."},{filename:"institutional_course_enrollment_type_sanitizer.py",code:F,description:"Enterprise recursive pre-serialization type sanitizer for sets, datetimes, and decimals."}]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Integer Keys Disappear on Roundtrip"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Serializing ",e.jsx("code",{className:"text-rose-300 font-mono",children:'{101: "A"}'})," and calling ",e.jsx("code",{className:"text-rose-300 font-mono",children:"json.loads()"})," yields ",e.jsx("code",{className:"text-rose-300 font-mono",children:'{"101": "A"}'}),"; lookup with ",e.jsx("code",{className:"text-rose-300 font-mono",children:"data[101]"})," raises ",e.jsx("code",{className:"text-rose-300 font-mono",children:"KeyError"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use string keys ",e.jsx("code",{className:"text-emerald-300 font-mono",children:'data["101"]'})," or post-process with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"{int(k): v for k,v in d.items()}"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Emitting Unquoted NaN in REST APIs"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Default ",e.jsx("code",{className:"text-amber-300 font-mono",children:"json.dumps()"})," emits unquoted ",e.jsx("code",{className:"text-amber-300 font-mono",children:"NaN"}),", crashing browser JavaScript ",e.jsx("code",{className:"text-amber-300 font-mono",children:"JSON.parse()"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Set ",e.jsx("code",{className:"text-emerald-300",children:"allow_nan=False"})," or sanitize ",e.jsx("code",{className:"text-emerald-300",children:"NaN -> None"})," before serialization."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Tuple Key Crashes"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Passing dictionaries with tuple keys ",e.jsx("code",{className:"text-purple-300 font-mono",children:"{('a', 'b'): 1}"})," raises ",e.jsx("code",{className:"text-purple-300 font-mono",children:"TypeError: keys must be str, int..."}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"skipkeys=True"})," or convert tuple keys to strings before dumping."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Loss of Decimal Precision"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Casting financial ",e.jsx("code",{className:"text-cyan-300 font-mono",children:'Decimal("28500.50")'})," to binary float can introduce IEEE-754 precision drift."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," In high-precision financial ledgers, serialize Decimals as formatted strings: ",e.jsx("code",{className:"text-emerald-300",children:"str(dec)"}),"."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering Python-to-JSON type mapping, key coercion, skipkeys, allow_nan, and round-trip fidelity:"}),e.jsx(I,{questions:q})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with type mapping rules, skipkeys flags, and special float recipes:"}),e.jsx("div",{className:"mb-10",children:e.jsx(A,{content:M,filename:"python_topic1_type_mapping_notes.txt",title:"Print Topic 1 Study Notes"})}),e.jsx(C,{})]})]})]})}export{G as default};
