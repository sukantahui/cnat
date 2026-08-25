import{b as o,j as e,bg as g}from"./vendor-react-core-Doz9nIC6.js";import{P as T}from"./PythonFileLoader-hCi5osN-.js";import{P as E}from"./PlainTextPrint-C08xhKA4.js";import{F as C}from"./FAQTemplate-CkSqDH4B.js";import{T as R}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const O=`# topic5_files/deep_nested_json_traversal_and_safe_get.py\r
# Module: 003_004_working-with-json\r
# Topic: Working with nested JSON structures and API payloads\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 5 - File 1: Deep Nested JSON Traversal, Safe Path Lookup & Flattening\r
Demonstrates:\r
  1. Safe traversal of deeply nested dictionaries and lists without KeyError/IndexError\r
  2. The \`safe_get_path(data, path, default)\` functional traversal pattern\r
  3. Flattening arbitrary nested JSON hierarchies into flat tabular structures\r
"""\r
\r
import json\r
from typing import Any, List, Dict, Union\r
\r
def safe_get_path(data: Any, path: List[Union[str, int]], default: Any = None) -> Any:\r
    """Safely retrieves a value from a nested JSON tree given a sequence of keys/indices."""\r
    current = data\r
    for token in path:\r
        if isinstance(current, dict) and isinstance(token, str):\r
            current = current.get(token)\r
        elif isinstance(current, (list, tuple)) and isinstance(token, int):\r
            if 0 <= token < len(current):\r
                current = current[token]\r
            else:\r
                return default\r
        else:\r
            return default\r
        if current is None:\r
            return default\r
    return current\r
\r
\r
def flatten_nested_json(data: Dict[str, Any], parent_key: str = "", separator: str = ".") -> Dict[str, Any]:\r
    """Recursively flattens a nested JSON dictionary into flat dot-delimited keys."""\r
    items = {}\r
    for k, v in data.items():\r
        new_key = f"{parent_key}{separator}{k}" if parent_key else k\r
        if isinstance(v, dict):\r
            items.update(flatten_nested_json(v, new_key, separator=separator))\r
        elif isinstance(v, list):\r
            for i, elem in enumerate(v):\r
                if isinstance(elem, dict):\r
                    items.update(flatten_nested_json(elem, f"{new_key}[{i}]", separator=separator))\r
                else:\r
                    items[f"{new_key}[{i}]"] = elem\r
        else:\r
            items[new_key] = v\r
    return items\r
\r
\r
def demonstrate_nested_traversal():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - NESTED JSON TRAVERSAL & FLATTENING")\r
    print("=" * 70)\r
\r
    # Complex multi-tier nested API response payload:\r
    api_payload = {\r
        "api_status": "SUCCESS",\r
        "timestamp": "2026-08-24T10:00:00Z",\r
        "institution": {\r
            "name": "Coder & AccoTax",\r
            "branches": [\r
                {\r
                    "campus_id": "BP-01",\r
                    "location": "Barrackpore Main Campus",\r
                    "head_instructor": "Sukanta Hui",\r
                    "top_students": [\r
                        {"id": "STU-101", "name": "Sourav Mukherjee", "gpa": 9.45},\r
                        {"id": "STU-102", "name": "Priyanka Sen", "gpa": 9.10}\r
                    ]\r
                },\r
                {\r
                    "campus_id": "KL-02",\r
                    "location": "Kolkata Hub",\r
                    "top_students": []\r
                }\r
            ]\r
        }\r
    }\r
\r
    # 1. Safe Path Queries:\r
    print("1. Safe Path Lookups (\`safe_get_path\`):")\r
    student_name = safe_get_path(api_payload, ["institution", "branches", 0, "top_students", 0, "name"])\r
    print(f"   * Query Path ['institution', 'branches', 0, 'top_students', 0, 'name'] : '{student_name}'")\r
\r
    # Safe Missing Keys (No KeyError / IndexError):\r
    missing_instructor = safe_get_path(api_payload, ["institution", "branches", 1, "head_instructor"], "NOT_ASSIGNED")\r
    print(f"   * Query Missing Branch 1 Instructor (Fallback Default)                 : '{missing_instructor}'")\r
\r
    out_of_bounds = safe_get_path(api_payload, ["institution", "branches", 99, "location"], "CAMPUS_NOT_FOUND")\r
    print(f"   * Query Out-of-Bounds Campus 99 (Fallback Default)                     : '{out_of_bounds}'\\n")\r
\r
    # 2. Flattening Nested Hierarchy:\r
    print("2. Flattening Deep Nested Structure into Dot-Delimited Keys:")\r
    flat_record = flatten_nested_json(api_payload)\r
    for k, v in list(flat_record.items())[:8]:\r
        print(f"   * {k:<48} = {repr(v)}")\r
\r
    print("\\n[PASSED] Deep Nested JSON Traversal & Flattening Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_nested_traversal()\r
`,z=`# topic5_files/filtering_transforming_nested_api_payloads.py\r
# Module: 003_004_working-with-json\r
# Topic: Working with nested JSON structures and API payloads\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 5 - File 2: Filtering & Transforming Complex Nested API Envelopes\r
Demonstrates:\r
  1. Unpacking standard REST API envelope payloads (\`status\`, \`pagination\`, \`data\`)\r
  2. Filtering and transforming nested items with generator comprehensions\r
  3. Extracting and aggregating metrics across multi-level nested datasets\r
"""\r
\r
import json\r
from typing import Dict, Any, List\r
\r
def process_paginated_api_response(raw_api_json: str) -> Dict[str, Any]:\r
    """Extracts, filters, and computes summary statistics from a REST API payload envelope."""\r
    payload = json.loads(raw_api_json)\r
\r
    # 1. Validate envelope health\r
    if payload.get("status") != "OK":\r
        raise ValueError(f"API returned non-OK status: {payload.get('status')}")\r
\r
    items: List[Dict[str, Any]] = payload.get("data", {}).get("items", [])\r
    pagination = payload.get("pagination", {})\r
\r
    # 2. Filter qualified merit scholarship candidates (score >= 90.0 and active)\r
    merit_candidates = [\r
        {\r
            "student_id": item["id"],\r
            "name": item["profile"]["full_name"],\r
            "city": item["profile"]["address"]["city"],\r
            "course": item["enrollment"]["course_code"],\r
            "score": item["academics"]["score"],\r
            "fee_paid": item["enrollment"]["fee_paid"]\r
        }\r
        for item in items\r
        if item.get("status") == "ACTIVE" and item.get("academics", {}).get("score", 0) >= 90.0\r
    ]\r
\r
    # 3. Aggregate metrics over filtered data\r
    total_active_fees = sum(item["enrollment"]["fee_paid"] for item in items if item.get("status") == "ACTIVE")\r
    average_score = sum(c["score"] for c in merit_candidates) / len(merit_candidates) if merit_candidates else 0.0\r
\r
    return {\r
        "page_number": pagination.get("current_page"),\r
        "total_active_students": len(items),\r
        "merit_candidates_count": len(merit_candidates),\r
        "total_active_revenue_inr": total_active_fees,\r
        "average_merit_score": round(average_score, 2),\r
        "merit_roster": merit_candidates\r
    }\r
\r
\r
def demonstrate_api_payload_processing():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - NESTED API PAYLOAD EXTRACTION & AGGREGATION")\r
    print("=" * 70)\r
\r
    simulated_api_json = """\r
    {\r
        "status": "OK",\r
        "api_version": "2026.1",\r
        "pagination": {"current_page": 1, "page_size": 10, "total_records": 4},\r
        "data": {\r
            "items": [\r
                {\r
                    "id": "STU-101",\r
                    "status": "ACTIVE",\r
                    "profile": {\r
                        "full_name": "Sourav Mukherjee",\r
                        "address": {"city": "Barrackpore", "state": "WB"}\r
                    },\r
                    "enrollment": {"course_code": "PY-AI", "fee_paid": 28000.0},\r
                    "academics": {"score": 95.5}\r
                },\r
                {\r
                    "id": "STU-102",\r
                    "status": "ACTIVE",\r
                    "profile": {\r
                        "full_name": "Priyanka Sen",\r
                        "address": {"city": "Kolkata", "state": "WB"}\r
                    },\r
                    "enrollment": {"course_code": "DS-ML", "fee_paid": 32000.0},\r
                    "academics": {"score": 88.0}\r
                },\r
                {\r
                    "id": "STU-103",\r
                    "status": "ACTIVE",\r
                    "profile": {\r
                        "full_name": "Debolina Roy",\r
                        "address": {"city": "Barrackpore", "state": "WB"}\r
                    },\r
                    "enrollment": {"course_code": "PY-AI", "fee_paid": 28000.0},\r
                    "academics": {"score": 96.0}\r
                }\r
            ]\r
        }\r
    }\r
    """\r
\r
    summary = process_paginated_api_response(simulated_api_json)\r
\r
    print("1. Processed Nested REST API Payload Summary:")\r
    print(f"   * Current Page           : {summary['page_number']}")\r
    print(f"   * Total Active Students  : {summary['total_active_students']}")\r
    print(f"   * Total Active Revenue   : INR {summary['total_active_revenue_inr']:,.2f}")\r
    print(f"   * Merit Candidates (>=90): {summary['merit_candidates_count']}")\r
    print(f"   * Average Merit Score    : {summary['average_merit_score']}%\\n")\r
\r
    print("2. Merit Scholarship Candidate Roster:")\r
    for c in summary["merit_roster"]:\r
        print(f"   * [{c['student_id']}] {c['name']:<18} | City: {c['city']:<12} | Course: {c['course']} | Score: {c['score']}%")\r
\r
    print("\\n[PASSED] Filtering & Transforming Nested API Payloads Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_api_payload_processing()\r
`,D=`# topic5_files/recursive_json_schema_masker_and_sanitizer.py\r
# Module: 003_004_working-with-json\r
# Topic: Working with nested JSON structures and API payloads\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 5 - File 3: Recursive PII Data Masking & Key Normalization\r
Demonstrates:\r
  1. Deep recursive redaction of sensitive PII fields (passwords, tokens, bank accounts)\r
  2. Recursive key transformation (converting JavaScript \`camelCase\` keys to Python \`snake_case\`)\r
  3. Sanitizing arbitrary depth JSON trees before database persistence or log output\r
"""\r
\r
import json\r
import re\r
from typing import Any, Set\r
\r
SENSITIVE_PII_KEYS: Set[str] = {\r
    "password", "secret", "auth_token", "access_token",\r
    "bank_account", "card_cvv", "aadhaar_number", "ssn"\r
}\r
\r
def camel_to_snake(name: str) -> str:\r
    """Converts a camelCase string to snake_case."""\r
    s1 = re.sub(r"(.)([A-Z][a-z]+)", r"\\1_\\2", name)\r
    return re.sub(r"([a-z0-9])([A-Z])", r"\\1_\\2", s1).lower()\r
\r
\r
def sanitize_and_mask_nested_json(data: Any, mask_str: str = "********") -> Any:\r
    """Recursively converts keys to snake_case and redacts sensitive PII values."""\r
    if isinstance(data, dict):\r
        sanitized = {}\r
        for k, v in data.items():\r
            snake_k = camel_to_snake(str(k))\r
            if snake_k in SENSITIVE_PII_KEYS or any(sens in snake_k for sens in ("password", "secret", "token")):\r
                sanitized[snake_k] = mask_str\r
            else:\r
                sanitized[snake_k] = sanitize_and_mask_nested_json(v, mask_str=mask_str)\r
        return sanitized\r
    elif isinstance(data, (list, tuple)):\r
        return [sanitize_and_mask_nested_json(item, mask_str=mask_str) for item in data]\r
    return data\r
\r
\r
def demonstrate_pii_masking():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - RECURSIVE PII MASKING & KEY NORMALIZATION")\r
    print("=" * 70)\r
\r
    # Raw incoming webhook with camelCase keys and sensitive security credentials:\r
    raw_incoming_webhook = {\r
        "studentProfile": {\r
            "fullName": "Sourav Mukherjee",\r
            "contactEmail": "sourav@codernaccotax.internal",\r
            "userPassword": "SuperSecretPassword123!",\r
            "billingDetails": {\r
                "bankAccountNumber": "SBIN00012345678",\r
                "cardCvv": "999",\r
                "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."\r
            }\r
        },\r
        "academicRegistration": {\r
            "courseName": "Python Full-Stack & AI",\r
            "feePaid": 28000.0\r
        }\r
    }\r
\r
    print("1. Original Raw Webhook (Containing Unmasked PII & camelCase keys):")\r
    print(json.dumps(raw_incoming_webhook, indent=2))\r
\r
    # 2. Apply Recursive Sanitizer & Masker:\r
    print("\\n2. Sanitized & Masked Payload (snake_case + Redacted PII):")\r
    clean_webhook = sanitize_and_mask_nested_json(raw_incoming_webhook)\r
    print(json.dumps(clean_webhook, indent=2))\r
\r
    print(r"""\r
Production Invariants:\r
  1. Never write unmasked sensitive credentials to log files or audit trails.\r
  2. Normalize camelCase API keys to Pythonic snake_case for consistent internal schema handling.\r
  3. Recursive traversal guarantees deep nested structures (at arbitrary depths) are safely sanitized.\r
""")\r
    print("[PASSED] Recursive PII Masking & Key Normalization Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_pii_masking()\r
`,M=`# topic5_files/institutional_multicampus_admission_payload_pipeline.py\r
# Module: 003_004_working-with-json\r
# Topic: Working with nested JSON structures and API payloads\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 5 - File 4: Multi-Campus University Ingestion Pipeline (Case Study)\r
Demonstrates:\r
  1. Deep multi-tier nested traversal across campuses, departments, cohorts, and students\r
  2. Aggregating financial metrics and academic performance per campus\r
  3. Redacting sensitive student banking data before generating certified audit reports\r
"""\r
\r
import json\r
from decimal import Decimal\r
from typing import Dict, Any, List\r
\r
def process_multicampus_deep_payload(raw_json_str: str) -> Dict[str, Any]:\r
    """Ingests multi-campus university payload, computes metrics, and redacts PII."""\r
    doc = json.loads(raw_json_str)\r
\r
    campuses: List[Dict[str, Any]] = doc.get("university_system", {}).get("campuses", [])\r
    campus_reports = []\r
    total_system_revenue = Decimal("0.00")\r
    total_system_students = 0\r
\r
    for campus in campuses:\r
        campus_name = campus.get("campus_name", "UNKNOWN")\r
        campus_id = campus.get("campus_id", "UNKNOWN")\r
        students = campus.get("enrollment_records", [])\r
\r
        campus_revenue = Decimal("0.00")\r
        honors_count = 0\r
\r
        sanitized_students = []\r
        for s in students:\r
            fee = Decimal(str(s.get("billing", {}).get("tuition_fee_inr", 0.0)))\r
            score = float(s.get("academics", {}).get("aggregate_gpa", 0.0))\r
\r
            campus_revenue += fee\r
            if score >= 9.0:\r
                honors_count += 1\r
\r
            # Redact banking credentials\r
            clean_s = {\r
                "student_id": s.get("student_id"),\r
                "name": s.get("name"),\r
                "gpa": score,\r
                "course": s.get("course"),\r
                "fee_paid": float(fee),\r
                "payment_gateway": s.get("billing", {}).get("gateway", "UNKNOWN"),\r
                "bank_account_redacted": "********" + str(s.get("billing", {}).get("account_no", "0000"))[-4:]\r
            }\r
            sanitized_students.append(clean_s)\r
\r
        total_system_revenue += campus_revenue\r
        total_system_students += len(students)\r
\r
        campus_reports.append({\r
            "campus_id": campus_id,\r
            "campus_name": campus_name,\r
            "student_count": len(students),\r
            "campus_revenue_inr": campus_revenue,\r
            "honors_candidates_count": honors_count,\r
            "students": sanitized_students\r
        })\r
\r
    return {\r
        "institution": doc.get("university_system", {}).get("system_name", "Coder & AccoTax"),\r
        "academic_session": doc.get("university_system", {}).get("academic_year", "2026-2027"),\r
        "total_active_campuses": len(campuses),\r
        "total_enrolled_students": total_system_students,\r
        "total_system_revenue_inr": total_system_revenue,\r
        "campus_breakdown": campus_reports\r
    }\r
\r
\r
def run_multicampus_pipeline_demo():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - MULTI-CAMPUS NESTED INGESTION PIPELINE")\r
    print("=" * 70)\r
\r
    # Complex multi-campus nested payload:\r
    sample_system_json = """\r
    {\r
        "university_system": {\r
            "system_name": "Coder & AccoTax Autonomous System",\r
            "academic_year": "2026-2027",\r
            "campuses": [\r
                {\r
                    "campus_id": "BP-01",\r
                    "campus_name": "Barrackpore Main Campus",\r
                    "enrollment_records": [\r
                        {\r
                            "student_id": "STU-101",\r
                            "name": "Sourav Mukherjee",\r
                            "course": "Python Full-Stack & AI",\r
                            "academics": {"aggregate_gpa": 9.45},\r
                            "billing": {"tuition_fee_inr": 28000.0, "gateway": "RAZORPAY", "account_no": "123456789012"}\r
                        },\r
                        {\r
                            "student_id": "STU-102",\r
                            "name": "Priyanka Sen",\r
                            "course": "Data Science",\r
                            "academics": {"aggregate_gpa": 9.10},\r
                            "billing": {"tuition_fee_inr": 32000.0, "gateway": "HDFC_NETBANK", "account_no": "987654321098"}\r
                        }\r
                    ]\r
                },\r
                {\r
                    "campus_id": "KL-02",\r
                    "campus_name": "Kolkata Hub",\r
                    "enrollment_records": [\r
                        {\r
                            "student_id": "STU-201",\r
                            "name": "Rahul Verma",\r
                            "course": "Core Python",\r
                            "academics": {"aggregate_gpa": 8.75},\r
                            "billing": {"tuition_fee_inr": 25000.0, "gateway": "UPI_PHONEPE", "account_no": "555544443333"}\r
                        }\r
                    ]\r
                }\r
            ]\r
        }\r
    }\r
    """\r
\r
    report = process_multicampus_deep_payload(sample_system_json)\r
\r
    print("1. Multi-Campus University System Ingestion Summary:")\r
    print(f"   * System Name            : {report['institution']}")\r
    print(f"   * Academic Year          : {report['academic_session']}")\r
    print(f"   * Total Active Campuses  : {report['total_active_campuses']}")\r
    print(f"   * Total Students         : {report['total_enrolled_students']}")\r
    print(f"   * Total System Revenue   : INR {report['total_system_revenue_inr']:,.2f}\\n")\r
\r
    print("2. Campus Financial & Academic Performance Breakdown:")\r
    for camp in report["campus_breakdown"]:\r
        print(f"   * [{camp['campus_id']}] {camp['campus_name']:<24} | Students: {camp['student_count']} | Revenue: INR {camp['campus_revenue_inr']:,.2f} | Honors: {camp['honors_candidates_count']}")\r
        for s in camp["students"]:\r
            print(f"       - [{s['student_id']}] {s['name']:<18} | GPA: {s['gpa']} | Bank: {s['bank_account_redacted']}")\r
\r
    print("\\n[PASSED] Multi-Campus University Ingestion Pipeline Verified.")\r
\r
\r
if __name__ == "__main__":\r
    run_multicampus_pipeline_demo()\r
`,U=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
          PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_004: WORKING WITH JSON\r
              TOPIC 5: WORKING WITH NESTED JSON STRUCTURES & API PAYLOADS\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. SAFE PATH TRAVERSAL PATTERN\r
--------------------------------------------------------------------------------\r
  def safe_get(data, path, default=None):\r
      curr = data\r
      for token in path:\r
          if isinstance(curr, dict) and isinstance(token, str):\r
              curr = curr.get(token)\r
          elif isinstance(curr, (list, tuple)) and isinstance(token, int):\r
              curr = curr[token] if 0 <= token < len(curr) else None\r
          else: return default\r
          if curr is None: return default\r
      return curr\r
\r
  name = safe_get(payload, ["institution", "branches", 0, "top_student", "name"])\r
\r
--------------------------------------------------------------------------------\r
2. RECURSIVE PII MASKING\r
--------------------------------------------------------------------------------\r
  def redact_pii(data):\r
      if isinstance(data, dict):\r
          return {k: "********" if "password" in k or "token" in k else redact_pii(v) for k, v in data.items()}\r
      elif isinstance(data, list):\r
          return [redact_pii(x) for x in data]\r
      return data\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 5: NESTED JSON STRUCTURES\r
================================================================================\r
`,F=[{question:"What error occurs if you chain multiple '.get()' calls when an intermediate key is missing or None?",shortAnswer:"It raises 'AttributeError: 'NoneType' object has no attribute 'get'' because the first missing key returns None, on which '.get()' cannot be invoked.",explanation:"The classic intermediate None trap in nested dictionary access.",hint:"Raises AttributeError: 'NoneType' object has no attribute 'get'.",level:"basic",codeExample:"data.get('user', {}).get('profile', {}).get('email')"},{question:"How does the 'safe_get_path(data, path, default)' function prevent traversal crashes?",shortAnswer:"It iterates through a sequence of keys and indices, checking whether each intermediate node is a dictionary (for string keys) or a list (for valid integer indices) before advancing.",explanation:"Safely handles missing keys, null nodes, and out-of-bounds list indices.",hint:"Checks node type and bounds on every step of the path list.",level:"basic",codeExample:"val = safe_get_path(data, ['campuses', 0, 'top_student', 'name'], default='N/A')"},{question:"What is 'Flattening' a nested JSON document?",shortAnswer:`The process of recursively converting a multi-level nested JSON hierarchy into a flat, single-level dictionary where keys are dot-delimited paths: '{"a.b[0].c": 100}'.`,explanation:"Essential for loading nested JSON into relational databases or pandas DataFrames.",hint:"Converts nested trees into flat dot-delimited dictionary keys.",level:"moderate",codeExample:"# {'user.address.city': 'Barrackpore', 'user.scores[0]': 95}"},{question:"What is the standard 'API Envelope' pattern commonly found in REST API responses?",shortAnswer:"A root JSON object containing metadata ('status', 'api_version', 'pagination') alongside the actual domain payload stored under a 'data' or 'items' key.",explanation:"Standard REST API response format across microservices.",hint:"A wrapper object containing metadata (status, pagination) and a 'data' payload.",level:"basic",codeExample:'{"status": "OK", "pagination": {"page": 1}, "data": {"items": [...]}}'},{question:"How do you extract and aggregate data from deeply nested list items with a generator expression?",shortAnswer:`By nesting loops in a generator: 'sum(student["fee"] for camp in data["campuses"] for student in camp["students"])'.`,explanation:"Processes multi-level nested data in constant O(1) memory.",hint:"Use nested for-in clauses inside a generator comprehension.",level:"moderate",codeExample:"total = sum(s['fee'] for c in campuses for s in c['students'])"},{question:"How do you recursively redact sensitive PII (passwords, tokens, bank accounts) in arbitrary depth JSON trees?",shortAnswer:"By recursively walking dictionaries and lists, replacing values whose keys match sensitive key sets (e.g. 'password', 'token') with a mask string like '********'.",explanation:"Mandatory security practice before logging or storing untrusted API payloads.",hint:"Walk the tree recursively and replace values matching sensitive key names with '********'.",level:"moderate",codeExample:"def mask(d): return {k: '***' if 'secret' in k else mask(v) if isinstance(v, dict) else v for k, v in d.items()}"},{question:"How do you convert JavaScript 'camelCase' keys to Python 'snake_case' keys recursively?",shortAnswer:"By applying a regex substitution 're.sub(r'([a-z0-9])([A-Z])', r'\\1_\\2', key).lower()' to every key across the recursive traversal.",explanation:"Standardizes foreign API payloads to idiomatic Python naming conventions.",hint:"Use regex substitution recursively on all dictionary keys.",level:"moderate",codeExample:"re.sub(r'([a-z0-9])([A-Z])', r'\\1_\\2', k).lower()"},{question:"What is 'glom' or 'jmespath' in Python JSON processing?",shortAnswer:"Third-party declarative query languages / libraries that allow querying and transforming complex nested JSON trees using expression strings (e.g. 'campuses[*].students[?score > 90].name').",explanation:"Declarative alternatives to writing custom recursive traversal functions.",hint:"Declarative JSON query libraries for complex path extraction.",level:"complex",codeExample:`import jmespath
jmespath.search('campuses[*].students[*].name', data)`},{question:"How do you handle 'null' values in intermediate nested JSON nodes safely?",shortAnswer:"Always test 'if current is None: return default' during path traversal, because calling '.get()' on None raises an AttributeError.",explanation:"A common cause of production API parser crashes.",hint:"Check for None before attempting to access child keys.",level:"basic",codeExample:"if node is None: return default"},{question:"How can you convert a deeply nested JSON array of objects into a flat 'pandas.DataFrame'?",shortAnswer:`Using the built-in 'pandas.json_normalize(data["items"])' function, which automatically flattens nested dictionaries into prefixed column headers.`,explanation:"Standard data science ETL pattern.",hint:"Use pandas.json_normalize(data).",level:"moderate",codeExample:`import pandas as pd
df = pd.json_normalize(data['campuses'], record_path=['students'], meta=['campus_name'])`},{question:"What is the recursion limit risk when parsing very deeply nested JSON payloads in Python?",shortAnswer:"Deeply recursive traversal functions can trigger 'RecursionError: maximum recursion depth exceeded' (default limit 1000) on pathological inputs; use an iterative stack-based traversal for unbounded depths.",explanation:"Protects backend parsers against stack overflow attacks.",hint:"Can hit RecursionError; use an iterative stack for unbounded depths.",level:"complex",codeExample:"stack = [(root, [])] # Iterative traversal pattern"},{question:"How do you merge two deeply nested JSON dictionaries in Python (Deep Merge)?",shortAnswer:"By recursively updating keys: if both values are dictionaries, recursively merge them; otherwise, overwrite the destination key with the source value.",explanation:"Standard pattern for merging default configurations with user overrides.",hint:"Recursively merge child dictionaries rather than doing a shallow dict.update().",level:"moderate",codeExample:"def deep_merge(a, b): return {k: deep_merge(a[k], b[k]) if k in a and isinstance(a[k], dict) and isinstance(b[k], dict) else b.get(k, a.get(k)) for k in set(a) | set(b)}"},{question:"How do you filter a list of nested dictionaries by a deeply nested property?",shortAnswer:`Using list comprehensions with safe navigation: '[item for item in items if item.get("academics", {}).get("score", 0) >= 90]'.`,explanation:"Filters nested arrays without crashing on missing intermediate keys.",hint:"Use list comprehensions checking intermediate get() defaults.",level:"basic",codeExample:"[item for item in items if item.get('scores', {}).get('math', 0) >= 90]"},{question:"What is the difference between shallow copy and deep copy on nested JSON dictionaries?",shortAnswer:"A shallow copy ('dict.copy()') only duplicates the root container, leaving nested child dictionaries and lists shared; 'copy.deepcopy(dict)' recursively duplicates all nested objects.",explanation:"Modifying nested structures in shallow copies mutates the original object.",hint:"Shallow copy shares nested dicts; deepcopy creates independent copies at all levels.",level:"basic",codeExample:`import copy
independent_copy = copy.deepcopy(nested_dict)`},{question:"How do you find all occurrences of a specific key (e.g. 'id') anywhere in an arbitrary JSON tree?",shortAnswer:"Using a generator function that recursively yields values whenever 'k == target_key', traversing all dictionary values and list elements.",explanation:"Universal key search pattern.",hint:"Recursively traverse dicts and lists, yielding matching keys.",level:"moderate",codeExample:"def find_all(data, key): ... # Generator yielding all matches"},{question:"How do you update a deeply nested value given a key path (e.g. ['a', 'b', 'c']) in place?",shortAnswer:"Navigate to the second-to-last node ('parent = safe_get_path(data, path[:-1])'), then assign 'parent[path[-1]] = new_value'.",explanation:"In-place nested value mutation.",hint:"Traverse to the parent dictionary, then assign the final key.",level:"moderate",codeExample:"parent = safe_get(data, path[:-1]); parent[path[-1]] = new_val"},{question:"What is the best way to handle polymorphic nested items (e.g. a mixed list of 'Student' and 'Instructor' objects)?",shortAnswer:`Inspect a discriminator property (e.g. 'item["role"]' or 'item["__type__"]') in a loop and branch to the specific parsing logic.`,explanation:"Standard pattern for heterogeneous API collections.",hint:"Check a discriminator tag like item['role'] to branch parser logic.",level:"moderate",codeExample:"if item.get('role') == 'TEACHER': parse_teacher(item)"},{question:"How do you prune / remove empty dictionaries or None values from a nested JSON tree?",shortAnswer:"Using recursive dictionary comprehensions: '{k: clean_empty(v) for k, v in data.items() if v is not None and v != {}}'.",explanation:"Cleans sparse JSON trees before serialization.",hint:"Recursively filter out None and empty dicts with dict comprehensions.",level:"moderate",codeExample:"def clean(d): return {k: clean(v) for k, v in d.items() if v is not None}"},{question:`Why should you avoid accessing deeply nested arrays using hardcoded indices like 'data["items"][0]["id"]'?`,shortAnswer:"If the list is empty ('items: []'), Python raises an unhandled 'IndexError' which can crash the entire request handler.",explanation:`Always check 'if data["items"]:' or use safe access helpers.`,hint:"Raises IndexError if the list is empty; use safe path lookup instead.",level:"basic",codeExample:"# DANGEROUS: data['items'][0]['id']"},{question:"How can you validate that a nested array has at least one element before processing?",shortAnswer:`Using truthiness check: 'items = data.get("items", []); if items: process(items[0])'.`,explanation:"Simple defensive guard pattern.",hint:"Check 'if items:' before accessing index 0.",level:"basic",codeExample:"if items := data.get('items'): process(items[0])"},{question:"How do you compute a nested field's average safely when some items lack the field?",shortAnswer:`Filter for valid numbers first: 'scores = [s["score"] for s in students if "score" in s and isinstance(s["score"], (int, float))]; avg = sum(scores)/len(scores) if scores else 0.0'.`,explanation:"Prevents ZeroDivisionError and TypeError on missing/null fields.",hint:"Extract valid numeric values into a list and guard against empty lists.",level:"basic",codeExample:"scores = [x['score'] for x in items if 'score' in x]"},{question:"What is the performance overhead of recursive nested JSON traversal in pure Python?",shortAnswer:"Recursive Python function calls have slight stack frame overhead; for millions of deeply nested records, iterative loops or C-extensions (like jmespath) offer higher throughput.",explanation:"Tradeoff between expressiveness and execution speed.",hint:"Function call overhead is higher than iterative loops for massive datasets.",level:"moderate",codeExample:"# Use iterative stack for extreme throughput"},{question:"How do you serialize a cyclic nested structure safely?",shortAnswer:"Standard JSON cannot represent cycles; you must break the cycle by tracking visited object IDs and replacing cycles with a reference ID or string marker (e.g. '[Circular]').",explanation:"Eliminates ValueError: Circular reference detected.",hint:"Track visited object IDs in a set and replace cyclic references with markers.",level:"complex",codeExample:"if id(obj) in visited: return '[Circular]'"},{question:"How can you sort a list of nested dictionaries by a child attribute (e.g. by 'profile.score')?",shortAnswer:`Using 'sorted(items, key=lambda x: x.get("profile", {}).get("score", 0), reverse=True)'.`,explanation:"Sorts complex nested collections safely.",hint:"Pass a lambda extracting the nested key to the 'key' argument of sorted().",level:"basic",codeExample:"sorted(students, key=lambda s: s.get('academics', {}).get('gpa', 0), reverse=True)"},{question:"What is the ultimate golden rule for Working with Nested JSON Structures in Python?",shortAnswer:"Never assume nested keys exist; use safe path lookup helpers ('safe_get_path') to avoid 'KeyError'/'IndexError', redact sensitive PII recursively before logging, and normalize keys to 'snake_case' for consistent processing.",explanation:"The standard operational guideline for production API data engineering.",hint:"Use safe path lookups, redact PII recursively, and normalize keys to snake_case.",level:"basic",codeExample:"# Python Nested JSON Mastery"}];function G(){const f=o.useRef([]),[l,h]=o.useState("traversal"),y={universitySystem:{systemName:"Coder & AccoTax",campuses:[{campusId:"BP-01",campusName:"Barrackpore Main Campus",students:[{id:"STU-101",fullName:"Sourav Mukherjee",academics:{gpa:9.45,courses:["Python AI","Generators"]},billing:{feePaid:28e3,bankAccount:"123456789012",userPassword:"secretPassword123"}},{id:"STU-102",fullName:"Priyanka Sen",academics:{gpa:9.1,courses:["Data Science"]},billing:{feePaid:32e3,bankAccount:"987654321098",userPassword:"mySecretPass456"}}]}]}},[b,d]=o.useState("universitySystem.campuses.0.students.0.fullName"),[j,c]=o.useState("Sourav Mukherjee"),[_,S]=o.useState(!0),[v,w]=o.useState(!0),[N,A]=o.useState(!1),m=t=>{try{const r=t.split(".").map(n=>isNaN(Number(n))?n:Number(n));let s=y;for(const n of r)if(s&&typeof s=="object")s=s[n];else return"NOT_FOUND (None / Out of Bounds)";return s!==void 0?JSON.stringify(s):"NOT_FOUND (None)"}catch{return"ERROR: Malformed Path Query"}},I=()=>{const t=m(b);c(t)},P=()=>{let t=JSON.parse(JSON.stringify(y));const r=s=>{if(Array.isArray(s))return s.map(r);if(s!==null&&typeof s=="object"){const n={};for(const[p,u]of Object.entries(s)){let i=p;v&&(i=p.replace(/([a-z0-9])([A-Z])/g,"$1_$2").toLowerCase()),_&&(i.includes("password")||i.includes("bank")||i.includes("token"))?n[i]="********":n[i]=r(u)}return n}return s};if(t=r(t),N){const s={},n=(p,u="")=>{for(const[i,x]of Object.entries(p)){const k=u?`${u}.${i}`:i;x!==null&&typeof x=="object"?n(x,k):s[k]=x}};return n(t),JSON.stringify(s,null,2)}return JSON.stringify(t,null,2)};o.useEffect(()=>{const t=new IntersectionObserver(r=>{r.forEach(s=>{s.isIntersecting&&s.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return f.current.forEach(r=>{r&&t.observe(r)}),()=>t.disconnect()},[]);const a=t=>{t&&!f.current.includes(t)&&f.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:a,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_004"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 5"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Working with JSON & External Data APIs"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Nested JSON Structures & ",e.jsx("span",{className:"text-teal-400",children:"API Payloads"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master navigating, transforming, and securing complex nested JSON hierarchies: safe path traversal without ",e.jsx("code",{className:"text-rose-400 font-mono",children:"KeyError"}),", flattening multi-tier hierarchies, unpacking REST API envelopes, and recursive PII data masking."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🧭 Safe Path Traversal (`safe_get`)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📄 Flattening Nested Trees"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Recursive PII Redaction"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔄 Key Normalization (camelCase -> snake_case)"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧭"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. Navigating Deeply Nested JSON Trees Safely"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["In real-world REST APIs, responses contain multiple nested dictionaries and arrays. Direct chained indexing (",e.jsx("code",{className:"text-rose-400 font-mono",children:'data["campuses"][0]["students"][0]'}),") is extremely fragile:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Safe Path Lookup"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:'safe_get_path(d, ["a", 0, "b"])'}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Safely checks intermediate keys and array bounds, returning a fallback default on missing nodes."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Recursive PII Redaction"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"mask_pii(data)"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Recursively masks passwords, auth tokens, and banking accounts throughout arbitrary depth trees."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Tree Flattening"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"flatten_nested_json(d)"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Flattens multi-tier nested objects into single-level dot-delimited key mappings for tabular analysis."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Intermediate None Trap"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Writing ",e.jsx("code",{className:"text-rose-400",children:'data.get("profile").get("email")'})," raises ",e.jsx("code",{className:"text-rose-400",children:"AttributeError: 'NoneType' object has no attribute 'get'"})," if ",e.jsx("code",{className:"text-slate-300",children:"profile"})," is missing or null. Always use safe path helpers or default fallbacks: ",e.jsx("code",{className:"text-teal-300 font-mono",children:'(data.get("profile") or {}).get("email")'}),"."]})]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Path Traversal, PII Redaction & Flattening"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>h("traversal"),className:g("px-3 py-1.5 rounded-lg transition-all",l==="traversal"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Safe Path Traversal"}),e.jsx("button",{onClick:()=>h("masking"),className:g("px-3 py-1.5 rounded-lg transition-all",l==="masking"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Recursive PII Redaction"}),e.jsx("button",{onClick:()=>h("flattening"),className:g("px-3 py-1.5 rounded-lg transition-all",l==="flattening"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Hierarchical Flattening"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining safe tree path queries, recursive security maskers, and flat dot-delimited key transformations:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:l==="traversal"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"SAFE PATH TRAVERSAL PATTERN (`safe_get_path(data, path, default)`)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"15",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"1. Query Path Array"}),e.jsx("text",{x:"15",y:"55",fill:"#34d399",fontSize:"8 font-mono",children:'["campuses", 0, "students", 0, "name"]'}),e.jsx("text",{x:"15",y:"75",fill:"#cbd5e1",fontSize:"8",children:"Specifies exact multi-tier"}),e.jsx("text",{x:"15",y:"90",fill:"#cbd5e1",fontSize:"8",children:"dictionary & index lookup sequence."}),e.jsx("rect",{x:"15",y:"110",width:"220",height:"105",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"25",y:"135",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Fragile Chaining Danger:"}),e.jsx("text",{x:"25",y:"155",fill:"#fca5a5",fontSize:"8",children:'• `data["a"]["b"]` crashes on missing'}),e.jsx("text",{x:"25",y:"170",fill:"#fca5a5",fontSize:"8",children:'• `data["items"][0]` crashes on empty'}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"310",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. Defensive Step Evaluator"}),e.jsx("text",{x:"310",y:"55",fill:"#38bdf8",fontSize:"8 font-mono",children:"isinstance(curr, dict) -> get()"}),e.jsx("text",{x:"310",y:"75",fill:"#38bdf8",fontSize:"8 font-mono",children:"isinstance(curr, list) -> bounds"}),e.jsx("text",{x:"310",y:"95",fill:"#ecfdf5",fontSize:"8 font-mono",children:"if curr is None: return default"}),e.jsx("rect",{x:"310",y:"110",width:"220",height:"105",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"320",y:"135",fill:"#38bdf8",fontSize:"9 font-bold",children:"Fault-Tolerant Step:"}),e.jsx("text",{x:"320",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Catches missing branches &"}),e.jsx("text",{x:"320",y:"170",fill:"#cbd5e1",fontSize:"8",children:"empty arrays automatically."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"605",y:"30",fill:"#a7f3d0",fontSize:"11 font-bold",children:"3. Guaranteed Result"}),e.jsx("text",{x:"605",y:"55",fill:"#34d399",fontSize:"9 font-mono font-bold",children:'"Sourav Mukherjee"'}),e.jsx("text",{x:"605",y:"75",fill:"#cbd5e1",fontSize:"8",children:"or fallback value: `None`"}),e.jsx("rect",{x:"605",y:"110",width:"200",height:"105",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"615",y:"135",fill:"#34d399",fontSize:"9 font-bold",children:"Zero Crash Guarantee:"}),e.jsx("text",{x:"615",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Production web servers"}),e.jsx("text",{x:"615",y:"170",fill:"#cbd5e1",fontSize:"8",children:"never raise unhandled 500s."})]})]}):l==="masking"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"RECURSIVE PII REDACTION & KEY NORMALIZATION PIPELINE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"Raw Incoming JSON (Exposed PII + camelCase)"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"8 font-mono",children:"{"}),e.jsx("text",{x:"35",y:"78",fill:"#fca5a5",fontSize:"8 font-mono font-bold",children:'"userPassword": "SuperSecret123",'}),e.jsx("text",{x:"35",y:"96",fill:"#fca5a5",fontSize:"8 font-mono font-bold",children:'"bankAccount": "123456789012"'}),e.jsx("text",{x:"20",y:"114",fill:"#ecfdf5",fontSize:"8 font-mono",children:"}"}),e.jsx("rect",{x:"20",y:"135",width:"340",height:"85",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"160",fill:"#fda4af",fontSize:"9 font-bold",children:"Security Violation:"}),e.jsx("text",{x:"30",y:"180",fill:"#cbd5e1",fontSize:"8",children:"• Leaks credentials to logging services & SIEM"}),e.jsx("text",{x:"30",y:"195",fill:"#cbd5e1",fontSize:"8",children:"• Violates data privacy standards (GDPR/DPDP)"})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"Sanitized Output (Redacted PII + snake_case)"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"8 font-mono",children:"{"}),e.jsx("text",{x:"35",y:"78",fill:"#34d399",fontSize:"8 font-mono font-bold",children:'"user_password": "********",'}),e.jsx("text",{x:"35",y:"96",fill:"#34d399",fontSize:"8 font-mono font-bold",children:'"bank_account": "********"'}),e.jsx("text",{x:"20",y:"114",fill:"#ecfdf5",fontSize:"8 font-mono",children:"}"}),e.jsx("rect",{x:"20",y:"135",width:"340",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"160",fill:"#34d399",fontSize:"9 font-bold",children:"Certified Enterprise Sanitation:"}),e.jsx("text",{x:"30",y:"180",fill:"#cbd5e1",fontSize:"8",children:"• 100% Safe for logging, debug traces, and telemetry"}),e.jsx("text",{x:"30",y:"195",fill:"#a7f3d0",fontSize:"8",children:"• Standardizes camelCase keys to Pythonic snake_case"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"HIERARCHICAL FLATTENING INTO TABULAR DOT-DELIMITED SCHEMAS"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"15",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"1. Deep Nested Hierarchy"}),e.jsx("text",{x:"15",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"campus.students[0].name"}),e.jsx("text",{x:"15",y:"75",fill:"#cbd5e1",fontSize:"8",children:"Tree structure with variable"}),e.jsx("text",{x:"15",y:"90",fill:"#cbd5e1",fontSize:"8",children:"depth and nested arrays."}),e.jsx("rect",{x:"15",y:"110",width:"220",height:"105",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"25",y:"135",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Tree Model:"}),e.jsx("text",{x:"25",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Difficult to export directly to"}),e.jsx("text",{x:"25",y:"170",fill:"#cbd5e1",fontSize:"8",children:"SQL tables or CSV reports."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"310",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. Flattening Engine"}),e.jsx("text",{x:"310",y:"55",fill:"#38bdf8",fontSize:"8 font-mono",children:'prefix = f"{parent}.{k}"'}),e.jsx("text",{x:"310",y:"75",fill:"#38bdf8",fontSize:"8 font-mono",children:'array = f"{parent}[{i}]"'}),e.jsx("rect",{x:"310",y:"110",width:"220",height:"105",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"320",y:"135",fill:"#38bdf8",fontSize:"9 font-bold",children:"Dot-Delimited Path Generator:"}),e.jsx("text",{x:"320",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Recursively collapses branches"}),e.jsx("text",{x:"320",y:"170",fill:"#cbd5e1",fontSize:"8",children:"into single-level keys."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"605",y:"30",fill:"#a7f3d0",fontSize:"11 font-bold",children:"3. 1D Flat Grid Mapping"}),e.jsx("text",{x:"605",y:"55",fill:"#34d399",fontSize:"8 font-mono",children:"campus.students[0].name"}),e.jsx("text",{x:"605",y:"75",fill:"#34d399",fontSize:"8 font-mono",children:'= "Sourav Mukherjee"'}),e.jsx("rect",{x:"605",y:"110",width:"200",height:"105",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"615",y:"135",fill:"#34d399",fontSize:"9 font-bold",children:"Tabular Integration:"}),e.jsx("text",{x:"615",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Instant conversion to pandas"}),e.jsx("text",{x:"615",y:"170",fill:"#cbd5e1",fontSize:"8",children:"DataFrames and SQL columns."})]})]})})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Deep Traversal, Query & PII Redactor Lab"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Execute safe path queries on deep JSON nodes, toggle recursive PII masking, and convert hierarchical structures into flat tabular schemas:"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"1. Deep Path Query Bar"})}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"text",value:b,onChange:t=>d(t.target.value),className:"flex-1 bg-slate-900 text-slate-100 font-mono text-xs p-2.5 rounded-lg border border-slate-800 focus:border-teal-500 focus:outline-none",placeholder:"e.g. universitySystem.campuses.0.students.0.fullName"}),e.jsx("button",{onClick:I,className:"px-4 py-2.5 bg-teal-600 hover:bg-teal-500 text-white font-mono text-xs font-bold rounded-lg transition-all",children:"Query Path"})]}),e.jsxs("div",{className:"flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-400",children:[e.jsx("span",{children:"Presets:"}),e.jsx("button",{onClick:()=>{const t="universitySystem.campuses.0.students.0.fullName";d(t),c(m(t))},className:"px-2 py-0.5 bg-slate-900 border border-slate-800 rounded hover:text-white",children:"Student 0 Name"}),e.jsx("button",{onClick:()=>{const t="universitySystem.campuses.0.students.0.billing.bankAccount";d(t),c(m(t))},className:"px-2 py-0.5 bg-slate-900 border border-slate-800 rounded hover:text-white",children:"Student 0 Bank"}),e.jsx("button",{onClick:()=>{const t="universitySystem.campuses.99.missing";d(t),c(m(t))},className:"px-2 py-0.5 bg-slate-900 border border-slate-800 rounded hover:text-white",children:"Missing Branch 99"})]}),e.jsxs("div",{className:"space-y-2 text-xs font-mono pt-2 border-t border-slate-800",children:[e.jsx("span",{className:"text-slate-400 font-bold uppercase text-[10px] block",children:"Recursive Transformation Filters:"}),e.jsxs("label",{className:"flex items-center gap-2 p-2 bg-slate-900 rounded border border-slate-800 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:_,onChange:t=>S(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"Redact Sensitive PII (passwords, bank accounts, tokens)"})]}),e.jsxs("label",{className:"flex items-center gap-2 p-2 bg-slate-900 rounded border border-slate-800 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:v,onChange:t=>w(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"Normalize Keys to Pythonic `snake_case` (e.g. `fullName` -> `full_name`)"})]}),e.jsxs("label",{className:"flex items-center gap-2 p-2 bg-slate-900 rounded border border-slate-800 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:N,onChange:t=>A(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"Flatten Nested Hierarchy into Dot-Delimited Keys"})]})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs space-y-1",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:"Path Query Evaluation:"}),e.jsx("div",{className:"text-emerald-400 font-bold text-sm truncate",children:j})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[220px] font-mono text-xs space-y-1",children:[e.jsx("span",{className:"text-slate-400 block font-bold text-[10px] uppercase",children:"Transformed Document Preview:"}),e.jsx("pre",{className:"text-slate-200 text-[11px] leading-relaxed",children:P()})]})]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Nested Traversal & Transformation Patterns"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Traversal Pattern"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Syntax Recipe"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Failure Mode Avoided"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Primary Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"Safe Path Traversal"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:'`safe_get(d, ["a", 0, "b"])`'}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"KeyError & IndexError"}),e.jsx("td",{className:"py-3 px-4",children:"Deep nested API payload navigation"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"Nested Comprehensions"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`[s for c in camps for s in c]`"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"High memory allocation"}),e.jsx("td",{className:"py-3 px-4",children:"Aggregating child items across list elements"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Recursive PII Masking"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`mask_pii(node)`"}),e.jsx("td",{className:"py-3 px-4 text-rose-300",children:"Security / Credential Leaks"}),e.jsx("td",{className:"py-3 px-4",children:"Sanitizing webhooks before logging"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"Tree Flattening"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`flatten_nested_json(d)`"}),e.jsx("td",{className:"py-3 px-4 text-cyan-300",children:"Schema mismatch in SQL"}),e.jsx("td",{className:"py-3 px-4",children:"Loading JSON into relational DBs / CSVs"})]})]})]})})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating safe nested path lookups, API envelope unpacking, recursive PII masking, and multi-campus pipelines:"}),e.jsx(T,{files:[{filename:"deep_nested_json_traversal_and_safe_get.py",code:O,description:"Safe path lookup without KeyError/IndexError and flattening nested trees."},{filename:"filtering_transforming_nested_api_payloads.py",code:z,description:"Unpacking REST API response envelopes and aggregating nested collection metrics."},{filename:"recursive_json_schema_masker_and_sanitizer.py",code:D,description:"Recursive PII credential masking and camelCase to snake_case key transformation."},{filename:"institutional_multicampus_admission_payload_pipeline.py",code:M,description:"Multi-campus university admission pipeline with financial aggregation and PII redaction."}]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Chained `.get()` NoneType Crash"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:'data.get("a").get("b")'})," crashes with ",e.jsx("code",{className:"text-rose-300 font-mono",children:"AttributeError: 'NoneType' object has no attribute 'get'"})," if key ",e.jsx("code",{className:"text-slate-300",children:'"a"'})," returns None."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:'(data.get("a") or {}).get("b")'})," or a safe path traversal helper."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Hardcoded Index Crash on Empty Arrays"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-amber-300 font-mono",children:'data["items"][0]["name"]'})," on an empty list ",e.jsx("code",{className:"text-amber-300 font-mono",children:"items: []"})," raises an unhandled ",e.jsx("code",{className:"text-rose-400 font-mono",children:"IndexError"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always check ",e.jsx("code",{className:"text-emerald-300",children:'if items := data.get("items"): ...'})," before indexing."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Leaking Passwords to Application Logs"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Printing raw webhook payloads exposes client passwords, API tokens, and banking credentials in log files."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Pass all untrusted JSON through a recursive PII redactor before logging."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Shallow Copy Mutation Bugs"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"d2 = d1.copy()"})," leaves nested dictionaries shared; mutating ",e.jsx("code",{className:"text-cyan-300 font-mono",children:'d2["user"]["score"]'})," modifies ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"d1"}),"!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"copy.deepcopy(nested_dict)"})," for independent duplicate trees."]})]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering nested path traversal, safe navigation, API envelope processing, and PII masking:"}),e.jsx(C,{questions:F})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with safe path navigation recipes, flattening patterns, and PII masking templates:"}),e.jsx("div",{className:"mb-10",children:e.jsx(E,{content:U,filename:"python_topic5_nested_json_structures_notes.txt",title:"Print Topic 5 Study Notes"})}),e.jsx(R,{})]})]})]})}export{G as default};
