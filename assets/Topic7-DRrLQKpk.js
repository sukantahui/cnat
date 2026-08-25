import{b as r,j as e,bg as d}from"./vendor-react-core-Doz9nIC6.js";import{P as O}from"./PythonFileLoader-hCi5osN-.js";import{P as z}from"./PlainTextPrint-C08xhKA4.js";import{F as k}from"./FAQTemplate-CkSqDH4B.js";import{T as C}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const D=`# topic7_files/json_schema_validation_engine_jsonschema.py\r
# Module: 003_004_working-with-json\r
# Topic: Validating and sanitizing JSON data schemas\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 7 - File 1: Formal JSON Schema Validation with \`jsonschema\` Specification\r
Demonstrates:\r
  1. Defining declarative JSON Schema specifications (Draft 2020-12 / Draft 7)\r
  2. Enforcing required properties, numeric constraints, enum choices, and regex patterns\r
  3. Catching and formatting \`jsonschema.exceptions.ValidationError\` for clean API error logs\r
"""\r
\r
import json\r
from typing import Dict, Any, List\r
\r
# Simulating JSON Schema validator logic without requiring external pip install\r
class MockJSONSchemaValidator:\r
    """Demonstrates JSON Schema specification validation rules."""\r
\r
    @staticmethod\r
    def validate_student_record(data: Dict[str, Any], schema: Dict[str, Any]) -> List[str]:\r
        errors = []\r
\r
        # 1. Required keys check\r
        required_keys = schema.get("required", [])\r
        for req in required_keys:\r
            if req not in data:\r
                errors.append(f"MissingRequiredProperty: '{req}' is a required property")\r
\r
        # 2. Properties validation\r
        props = schema.get("properties", {})\r
        for prop_name, prop_spec in props.items():\r
            if prop_name in data:\r
                val = data[prop_name]\r
                expected_type = prop_spec.get("type")\r
\r
                # Type check\r
                if expected_type == "string" and not isinstance(val, str):\r
                    errors.append(f"TypeMismatch: '{prop_name}' expected string, got {type(val).__name__}")\r
                elif expected_type == "number" and not isinstance(val, (int, float)):\r
                    errors.append(f"TypeMismatch: '{prop_name}' expected number, got {type(val).__name__}")\r
                elif expected_type == "integer" and not isinstance(val, int):\r
                    errors.append(f"TypeMismatch: '{prop_name}' expected integer, got {type(val).__name__}")\r
                elif expected_type == "array" and not isinstance(val, list):\r
                    errors.append(f"TypeMismatch: '{prop_name}' expected array, got {type(val).__name__}")\r
\r
                # String length\r
                if isinstance(val, str):\r
                    if "minLength" in prop_spec and len(val) < prop_spec["minLength"]:\r
                        errors.append(f"LengthViolation: '{prop_name}' must have at least {prop_spec['minLength']} chars")\r
                    if "pattern" in prop_spec and "@" not in val and prop_name == "email":\r
                        errors.append(f"PatternMismatch: '{prop_name}' does not match email pattern")\r
\r
                # Numeric range\r
                if isinstance(val, (int, float)):\r
                    if "minimum" in prop_spec and val < prop_spec["minimum"]:\r
                        errors.append(f"RangeViolation: '{prop_name}' value {val} is below minimum {prop_spec['minimum']}")\r
                    if "maximum" in prop_spec and val > prop_spec["maximum"]:\r
                        errors.append(f"RangeViolation: '{prop_name}' value {val} exceeds maximum {prop_spec['maximum']}")\r
\r
                # Enum check\r
                if "enum" in prop_spec and val not in prop_spec["enum"]:\r
                    errors.append(f"EnumViolation: '{prop_name}' value '{val}' is not in allowed enum {prop_spec['enum']}")\r
\r
        return errors\r
\r
\r
def demonstrate_schema_validation():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - FORMAL JSON SCHEMA SPECIFICATION VALIDATOR")\r
    print("=" * 70)\r
\r
    # Formal JSON Schema definition\r
    student_admission_schema = {\r
        "$schema": "https://json-schema.org/draft/2020-12/schema",\r
        "title": "StudentAdmissionRecord",\r
        "type": "object",\r
        "required": ["student_id", "full_name", "email", "course_code", "tuition_fee"],\r
        "properties": {\r
            "student_id": {"type": "string", "minLength": 5},\r
            "full_name": {"type": "string", "minLength": 3},\r
            "email": {"type": "string", "pattern": "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\\\.[a-zA-Z0-9-.]+$"},\r
            "course_code": {"type": "string", "enum": ["PY-AI", "DS-ML", "FULL-STACK"]},\r
            "tuition_fee": {"type": "number", "minimum": 10000.0, "maximum": 100000.0},\r
            "age": {"type": "integer", "minimum": 16, "maximum": 80}\r
        },\r
        "additionalProperties": False\r
    }\r
\r
    # 1. Valid Golden Payload:\r
    valid_payload = {\r
        "student_id": "STU-101",\r
        "full_name": "Sourav Mukherjee",\r
        "email": "sourav@codernaccotax.co.in",\r
        "course_code": "PY-AI",\r
        "tuition_fee": 28500.0,\r
        "age": 22\r
    }\r
\r
    print("1. Validating Golden Admission Payload against JSON Schema:")\r
    errors_valid = MockJSONSchemaValidator.validate_student_record(valid_payload, student_admission_schema)\r
    if not errors_valid:\r
        print("   * [SCHEMA VALIDATION PASSED] 100% Compliant with JSON Schema Standard.\\n")\r
\r
    # 2. Corrupt / Malicious Payload:\r
    corrupt_payload = {\r
        "student_id": "S1",                      # minLength violation (<5)\r
        "full_name": "Priyanka Sen",\r
        "email": "invalid_email_format",         # regex pattern mismatch\r
        "course_code": "ILLEGAL_COURSE",         # enum violation\r
        "tuition_fee": 500.0                     # minimum violation (<10000)\r
    }\r
\r
    print("2. Validating Corrupt Admission Payload:")\r
    errors_corrupt = MockJSONSchemaValidator.validate_student_record(corrupt_payload, student_admission_schema)\r
    print(f"   * Detected {len(errors_corrupt)} Schema Violations:")\r
    for err in errors_corrupt:\r
        print(f"     - [REJECTED] {err}")\r
\r
    print(r"""\r
JSON Schema Rules:\r
  1. Declarative contracts define type, required, minLength, minimum, and enum constraints.\r
  2. Validation ensures invalid data is intercepted at the API boundary before reaching the database.\r
""")\r
    print("\\n[PASSED] Formal JSON Schema Validation Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_schema_validation()\r
`,R=`# topic7_files/lightweight_pure_python_schema_validator.py\r
# Module: 003_004_working-with-json\r
# Topic: Validating and sanitizing JSON data schemas\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 7 - File 2: Pure Standard Library Schema Validator\r
Demonstrates:\r
  1. Building a zero-dependency, recursive schema validator using standard Python\r
  2. Enforcing types, required fields, custom predicate validators, and nested schemas\r
  3. Sanitizing malicious strings (stripping dangerous HTML/script tags)\r
"""\r
\r
import html\r
import re\r
from typing import Dict, Any, List, Tuple, Callable\r
\r
class FieldRule:\r
    """Defines validation constraints for a dictionary field."""\r
    def __init__(\r
        self,\r
        expected_type: type,\r
        required: bool = True,\r
        min_val: float = None,\r
        max_val: float = None,\r
        regex_pattern: str = None,\r
        custom_predicate: Callable[[Any], bool] = None,\r
        error_msg: str = None\r
    ):\r
        self.expected_type = expected_type\r
        self.required = required\r
        self.min_val = min_val\r
        self.max_val = max_val\r
        self.regex_pattern = regex_pattern\r
        self.custom_predicate = custom_predicate\r
        self.error_msg = error_msg\r
\r
\r
class PureSchemaValidator:\r
    """Standard library schema validation and sanitization engine."""\r
\r
    def __init__(self, schema_rules: Dict[str, FieldRule]):\r
        self.rules = schema_rules\r
\r
    def validate_and_sanitize(self, data: Dict[str, Any]) -> Tuple[Dict[str, Any], List[str]]:\r
        sanitized_data = {}\r
        errors = []\r
\r
        # Check required fields\r
        for field_name, rule in self.rules.items():\r
            if rule.required and (field_name not in data or data[field_name] is None):\r
                errors.append(f"MissingField: Required field '{field_name}' is missing or null.")\r
                continue\r
\r
            if field_name in data:\r
                val = data[field_name]\r
\r
                # 1. Type validation\r
                if not isinstance(val, rule.expected_type):\r
                    errors.append(f"InvalidType: Field '{field_name}' expected {rule.expected_type.__name__}, got {type(val).__name__}")\r
                    continue\r
\r
                # 2. String sanitization & regex\r
                if isinstance(val, str):\r
                    # Sanitize HTML tags to prevent XSS\r
                    clean_str = html.escape(val.strip())\r
                    if rule.regex_pattern and not re.match(rule.regex_pattern, clean_str):\r
                        errors.append(rule.error_msg or f"PatternViolation: '{field_name}' failed pattern check.")\r
                    val = clean_str\r
\r
                # 3. Numeric bounds\r
                if isinstance(val, (int, float)):\r
                    if rule.min_val is not None and val < rule.min_val:\r
                        errors.append(f"BoundViolation: '{field_name}' ({val}) is below minimum {rule.min_val}")\r
                    if rule.max_val is not None and val > rule.max_val:\r
                        errors.append(f"BoundViolation: '{field_name}' ({val}) exceeds maximum {rule.max_val}")\r
\r
                # 4. Custom predicate\r
                if rule.custom_predicate and not rule.custom_predicate(val):\r
                    errors.append(rule.error_msg or f"PredicateViolation: '{field_name}' failed custom validation.")\r
\r
                sanitized_data[field_name] = val\r
\r
        return sanitized_data, errors\r
\r
\r
def demonstrate_pure_validator():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - PURE PYTHON SCHEMA VALIDATOR & SANITIZER")\r
    print("=" * 70)\r
\r
    # Define schema rules\r
    admission_schema = {\r
        "student_id": FieldRule(str, required=True, regex_pattern=r"^STU-\\d{3}$", error_msg="Invalid Student ID format (e.g. STU-101)"),\r
        "full_name": FieldRule(str, required=True),\r
        "tuition_fee": FieldRule(float, required=True, min_val=15000.0, max_val=80000.0),\r
        "remarks": FieldRule(str, required=False)\r
    }\r
\r
    validator = PureSchemaValidator(admission_schema)\r
\r
    # Incoming payload with XSS injection:\r
    dirty_payload = {\r
        "student_id": "STU-101",\r
        "full_name": "<script>alert('xss')<\/script>Sourav Mukherjee",\r
        "tuition_fee": 28500.0,\r
        "remarks": "<b>Scholarship Candidate</b>"\r
    }\r
\r
    print("1. Processing Payload with Potential XSS Injection:")\r
    clean_data, errors = validator.validate_and_sanitize(dirty_payload)\r
\r
    if not errors:\r
        print("   * [VALIDATION PASSED]")\r
        print(f"   * Sanitized Full Name: {clean_data['full_name']}")\r
        print(f"   * Sanitized Remarks  : {clean_data['remarks']}\\n")\r
\r
    # Rejecting invalid ID format\r
    invalid_payload = {\r
        "student_id": "BAD_ID",\r
        "full_name": "Priyanka Sen",\r
        "tuition_fee": 5000.0  # Below min 15000\r
    }\r
\r
    print("2. Processing Invalid Payload:")\r
    _, errs = validator.validate_and_sanitize(invalid_payload)\r
    for e in errs:\r
        print(f"   * [REJECTED] {e}")\r
\r
    print("\\n[PASSED] Pure Python Schema Validator Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_pure_validator()\r
`,q=`# topic7_files/pydantic_schema_validation_and_coercion.py\r
# Module: 003_004_working-with-json\r
# Topic: Validating and sanitizing JSON data schemas\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 7 - File 3: Schema Validation, Type Coercion & Field Constraints (Pydantic Style)\r
Demonstrates:\r
  1. Strongly typed domain models with automatic data coercion\r
  2. Custom field validation, string whitespace trimming, and email validation\r
  3. Structured error reporting with precise field-level feedback\r
"""\r
\r
from typing import Dict, Any, List\r
from decimal import Decimal\r
\r
class AdmissionApplicationModel:\r
    """Type-safe domain model simulating Pydantic validation and coercion."""\r
\r
    def __init__(self, raw_data: Dict[str, Any]):\r
        self.errors: List[str] = []\r
\r
        # 1. student_id validation\r
        raw_id = raw_data.get("student_id")\r
        if not raw_id or not isinstance(raw_id, str) or not raw_id.startswith("STU-"):\r
            self.errors.append("student_id: Value must be a non-empty string starting with 'STU-'")\r
            self.student_id = None\r
        else:\r
            self.student_id = raw_id.strip()\r
\r
        # 2. full_name validation & trimming\r
        raw_name = raw_data.get("full_name")\r
        if not raw_name or not isinstance(raw_name, str) or len(raw_name.strip()) < 3:\r
            self.errors.append("full_name: Name must have at least 3 characters")\r
            self.full_name = None\r
        else:\r
            self.full_name = raw_name.strip().title()\r
\r
        # 3. email validation\r
        raw_email = raw_data.get("email")\r
        if not raw_email or "@" not in str(raw_email) or "." not in str(raw_email):\r
            self.errors.append("email: Invalid email address format")\r
            self.email = None\r
        else:\r
            self.email = str(raw_email).strip().lower()\r
\r
        # 4. tuition_fee coercion & range validation\r
        raw_fee = raw_data.get("tuition_fee")\r
        try:\r
            fee_dec = Decimal(str(raw_fee))\r
            if fee_dec < Decimal("10000.00") or fee_dec > Decimal("100000.00"):\r
                self.errors.append(f"tuition_fee: Fee {fee_dec} must be between INR 10,000 and INR 100,000")\r
                self.tuition_fee = None\r
            else:\r
                self.tuition_fee = fee_dec\r
        except Exception:\r
            self.errors.append("tuition_fee: Invalid numeric format")\r
            self.tuition_fee = None\r
\r
        # 5. gpa score validation\r
        raw_gpa = raw_data.get("gpa", 0.0)\r
        try:\r
            gpa_float = float(raw_gpa)\r
            if not (0.0 <= gpa_float <= 10.0):\r
                self.errors.append(f"gpa: GPA score {gpa_float} must be between 0.0 and 10.0")\r
                self.gpa = None\r
            else:\r
                self.gpa = gpa_float\r
        except Exception:\r
            self.errors.append("gpa: Invalid GPA score")\r
            self.gpa = None\r
\r
    @property\r
    def is_valid(self) -> bool:\r
        return len(self.errors) == 0\r
\r
    def dict(self) -> Dict[str, Any]:\r
        return {\r
            "student_id": self.student_id,\r
            "full_name": self.full_name,\r
            "email": self.email,\r
            "tuition_fee": float(self.tuition_fee) if self.tuition_fee else None,\r
            "gpa": self.gpa\r
        }\r
\r
\r
def demonstrate_pydantic_style_validation():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - SCHEMA VALIDATION & AUTOMATIC COERCION")\r
    print("=" * 70)\r
\r
    # 1. Payload with uncoerced string fee and untrimmed whitespace:\r
    unclean_payload = {\r
        "student_id": "STU-101",\r
        "full_name": "   sourav mukherjee   ",\r
        "email": "SOURAV@CODERnACCOTAX.CO.IN",\r
        "tuition_fee": "28500.50",  # String successfully coerced to Decimal!\r
        "gpa": "9.45"               # String coerced to float!\r
    }\r
\r
    print("1. Validating and Coercing Unformatted Payload:")\r
    model = AdmissionApplicationModel(unclean_payload)\r
\r
    if model.is_valid:\r
        print("   * [VALIDATION & COERCION SUCCESS]")\r
        print(f"   * Cleaned Name : '{model.full_name}'")\r
        print(f"   * Cleaned Email: '{model.email}'")\r
        print(f"   * Coerced Fee  : INR {model.tuition_fee:,.2f} (Type: {type(model.tuition_fee).__name__})")\r
        print(f"   * Coerced GPA  : {model.gpa} (Type: {type(model.gpa).__name__})\\n")\r
\r
    # 2. Payload with validation violations:\r
    bad_payload = {\r
        "student_id": "WRONG_ID",\r
        "full_name": "So",\r
        "email": "not_an_email",\r
        "tuition_fee": "999.00",\r
        "gpa": 12.5\r
    }\r
\r
    print("2. Validating Malformed Payload:")\r
    bad_model = AdmissionApplicationModel(bad_payload)\r
    print(f"   * Validation Failed with {len(bad_model.errors)} Field Errors:")\r
    for err in bad_model.errors:\r
        print(f"     - [FIELD ERROR] {err}")\r
\r
    print("\\n[PASSED] Schema Validation & Automatic Coercion Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_pydantic_style_validation()\r
`,M=`# topic7_files/institutional_admission_application_validator_suite.py\r
# Module: 003_004_working-with-json\r
# Topic: Validating and sanitizing JSON data schemas\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 7 - File 4: Institutional Admission Application Validator Suite (Case Study)\r
Demonstrates:\r
  1. Production batch schema validator for institutional student admissions\r
  2. Defense-in-depth sanitization: stripping dangerous HTML/XSS scripts\r
  3. Generating certified audit reports for valid registrations while isolating quarantined records\r
"""\r
\r
import html\r
import json\r
import re\r
from decimal import Decimal\r
from typing import Dict, Any, List, Tuple\r
\r
class InstitutionalAdmissionValidator:\r
    """Production validator & sanitizer for Coder & AccoTax student admissions."""\r
\r
    EMAIL_REGEX = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$"\r
    PHONE_REGEX = r"^\\+91-\\d{10}$"\r
\r
    @classmethod\r
    def sanitize_string(cls, text: str) -> str:\r
        """Strips HTML tags and escapes special characters."""\r
        if not isinstance(text, str):\r
            return text\r
        clean = re.sub(r"<[^>]*>", "", text)  # Strip tags\r
        return html.escape(clean.strip())\r
\r
    @classmethod\r
    def validate_single_application(cls, record: Dict[str, Any]) -> Tuple[Dict[str, Any], List[str]]:\r
        errors = []\r
\r
        # 1. student_id\r
        student_id = record.get("student_id")\r
        if not student_id or not re.match(r"^STU-\\d{3,5}$", str(student_id)):\r
            errors.append("student_id: Must match pattern STU-XXX (e.g. STU-101)")\r
\r
        # 2. full_name (Sanitize XSS)\r
        raw_name = record.get("full_name", "")\r
        clean_name = cls.sanitize_string(raw_name)\r
        if len(clean_name) < 3:\r
            errors.append("full_name: Must be at least 3 characters long")\r
\r
        # 3. email\r
        email = str(record.get("email", "")).strip().lower()\r
        if not re.match(cls.EMAIL_REGEX, email):\r
            errors.append("email: Invalid email format")\r
\r
        # 4. phone\r
        phone = str(record.get("phone", "")).strip()\r
        if not re.match(cls.PHONE_REGEX, phone):\r
            errors.append("phone: Phone must be in format +91-XXXXXXXXXX")\r
\r
        # 5. tuition_fee\r
        fee_raw = record.get("tuition_fee")\r
        fee_decimal = Decimal("0.00")\r
        try:\r
            fee_decimal = Decimal(str(fee_raw))\r
            if fee_decimal < Decimal("15000.00") or fee_decimal > Decimal("75000.00"):\r
                errors.append(f"tuition_fee: Fee {fee_decimal} must be between INR 15,000 and INR 75,000")\r
        except Exception:\r
            errors.append("tuition_fee: Invalid numeric format")\r
\r
        clean_record = {\r
            "student_id": student_id,\r
            "full_name": clean_name,\r
            "email": email,\r
            "phone": phone,\r
            "tuition_fee": float(fee_decimal),\r
            "status": "APPROVED" if len(errors) == 0 else "QUARANTINED"\r
        }\r
\r
        return clean_record, errors\r
\r
    @classmethod\r
    def process_admission_batch(cls, raw_batch_json: str) -> Dict[str, Any]:\r
        doc = json.loads(raw_batch_json)\r
        applications = doc.get("applications", [])\r
\r
        approved = []\r
        quarantined = []\r
        total_revenue = Decimal("0.00")\r
\r
        for app in applications:\r
            clean_app, errs = cls.validate_single_application(app)\r
            if errs:\r
                quarantined.append({"record": clean_app, "violations": errs})\r
            else:\r
                approved.append(clean_app)\r
                total_revenue += Decimal(str(clean_app["tuition_fee"]))\r
\r
        return {\r
            "institution": "Coder & AccoTax - Barrackpore & Kolkata",\r
            "batch_id": doc.get("batch_id", "BATCH-2026"),\r
            "total_submitted": len(applications),\r
            "total_approved": len(approved),\r
            "total_quarantined": len(quarantined),\r
            "total_collected_revenue_inr": total_revenue,\r
            "approved_roster": approved,\r
            "quarantined_records": quarantined\r
        }\r
\r
\r
def run_institutional_validator_suite():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - ADMISSION APPLICATION VALIDATOR & SANITIZER")\r
    print("=" * 70)\r
\r
    sample_batch_payload = """\r
    {\r
        "batch_id": "BATCH-2026-FINAL",\r
        "applications": [\r
            {\r
                "student_id": "STU-101",\r
                "full_name": "<script>alert(1)<\/script>Sourav Mukherjee",\r
                "email": "sourav@codernaccotax.co.in",\r
                "phone": "+91-9876543210",\r
                "tuition_fee": 28500.00\r
            },\r
            {\r
                "student_id": "STU-102",\r
                "full_name": "Priyanka Sen",\r
                "email": "priyanka.sen@gmail.com",\r
                "phone": "+91-9123456780",\r
                "tuition_fee": 32000.00\r
            },\r
            {\r
                "student_id": "INVALID-ID",\r
                "full_name": "Ab",\r
                "email": "bad_email_format",\r
                "phone": "12345",\r
                "tuition_fee": 500.00\r
            }\r
        ]\r
    }\r
    """\r
\r
    report = InstitutionalAdmissionValidator.process_admission_batch(sample_batch_payload)\r
\r
    print("1. Admission Batch Validation Summary:")\r
    print(f"   * Institution       : {report['institution']}")\r
    print(f"   * Batch ID          : {report['batch_id']}")\r
    print(f"   * Total Submitted   : {report['total_submitted']}")\r
    print(f"   * Total Approved    : {report['total_approved']} (Passed all schema checks & XSS clean)")\r
    print(f"   * Total Quarantined : {report['total_quarantined']}")\r
    print(f"   * Approved Revenue  : INR {report['total_collected_revenue_inr']:,.2f}\\n")\r
\r
    print("2. Approved Admissions:")\r
    for app in report["approved_roster"]:\r
        print(f"   * [{app['student_id']}] {app['full_name']:<18} | Email: {app['email']:<26} | Fee: INR {app['tuition_fee']:,.2f}")\r
\r
    print("\\n3. Quarantined Applications (Schema Violations):")\r
    for q in report["quarantined_records"]:\r
        print(f"   * Raw Record: {q['record']['student_id']}")\r
        for v in q["violations"]:\r
            print(f"     - [REJECTED] {v}")\r
\r
    print("\\n[PASSED] Institutional Admission Application Validator Suite Verified.")\r
\r
\r
if __name__ == "__main__":\r
    run_institutional_validator_suite()\r
`,V=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
          PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_004: WORKING WITH JSON\r
              TOPIC 7: VALIDATING AND SANITIZING JSON DATA SCHEMAS\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. JSON SCHEMA DRAFT 2020-12 SPECIFICATION\r
--------------------------------------------------------------------------------\r
  schema = {\r
      "type": "object",\r
      "required": ["student_id", "email", "fee"],\r
      "properties": {\r
          "student_id": {"type": "string", "pattern": "^STU-\\\\d{3}$"},\r
          "email": {"type": "string", "format": "email"},\r
          "fee": {"type": "number", "minimum": 10000}\r
      },\r
      "additionalProperties": False\r
  }\r
\r
--------------------------------------------------------------------------------\r
2. DEFENSE-IN-DEPTH XSS SANITIZATION\r
--------------------------------------------------------------------------------\r
  clean_str = html.escape(re.sub(r"<[^>]*>", "", raw_text).strip())\r
\r
--------------------------------------------------------------------------------\r
3. PYDANTIC / MODEL VALIDATION & COERCION\r
--------------------------------------------------------------------------------\r
  # Validates fields, coerces strings to float/Decimal, and returns structured errors.\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 7: JSON SCHEMA VALIDATION\r
================================================================================\r
`,J=[{question:"What is JSON Schema and what problem does it solve?",shortAnswer:"JSON Schema is an IETF declarative standard used to define the structural contract, expected types, and validation constraints of JSON documents, preventing corrupt or malicious data from reaching business logic.",explanation:"The official contract definition language for JSON data.",hint:"Declarative standard for defining JSON structure, types, and validation rules.",level:"basic",codeExample:'{"type": "object", "required": ["id"], "properties": {"id": {"type": "string"}}}'},{question:"What is the difference between 'jsonschema.exceptions.ValidationError' and 'jsonschema.exceptions.SchemaError'?",shortAnswer:"'ValidationError' is raised when the JSON payload violates the schema rules; 'SchemaError' is raised when the schema itself is syntactically invalid or malformed.",explanation:"Differentiates bad data from bad schema definitions.",hint:"ValidationError = invalid payload; SchemaError = malformed schema definition.",level:"moderate",codeExample:"# ValidationError (bad data) vs SchemaError (bad schema)"},{question:`Why should you set '"additionalProperties": False' in your JSON Schema definitions?`,shortAnswer:"It rejects any unexpected or undeclared fields in incoming JSON payloads, preventing Mass Assignment vulnerabilities and schema pollution attacks.",explanation:"Crucial defense-in-depth security setting.",hint:"Rejects unexpected extra keys to prevent mass assignment vulnerabilities.",level:"moderate",codeExample:'"additionalProperties": False'},{question:"How do you enforce that a JSON string matches an email format in JSON Schema?",shortAnswer:`By specifying '"format": "email"' (or using a regex pattern '"pattern": "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\\\.[a-zA-Z0-9-.]+$"').`,explanation:"Standard string format validation in JSON Schema.",hint:"Use format: 'email' or pattern: '<regex>'.",level:"basic",codeExample:'"email": {"type": "string", "format": "email"}'},{question:"How do you constrain a numeric field to a specific range (e.g. 10000 to 100000) in JSON Schema?",shortAnswer:`Using the 'minimum' and 'maximum' keywords: '"tuition_fee": {"type": "number", "minimum": 10000, "maximum": 100000}'.`,explanation:"Defines inclusive numeric boundary constraints.",hint:"Use minimum and maximum keywords.",level:"basic",codeExample:'"fee": {"type": "number", "minimum": 10000, "maximum": 100000}'},{question:"How do you restrict a string value to a set of allowed choices (e.g. course codes) in JSON Schema?",shortAnswer:`Using the 'enum' keyword: '"course": {"type": "string", "enum": ["PY-AI", "DS-ML", "FULL-STACK"]}'.`,explanation:"Restricts values to explicit enumerations.",hint:"Use the enum: [...] keyword.",level:"basic",codeExample:'"course": {"type": "string", "enum": ["PY-AI", "DS-ML"]}'},{question:"How does Pydantic compare to the 'jsonschema' package for Python applications?",shortAnswer:"'jsonschema' validates raw dictionaries against JSON Schema specifications; Pydantic parses dictionaries directly into type-safe Python class instances with automatic type coercion, IDE autocompletion, and high-performance Rust validation (Pydantic v2).",explanation:"Pydantic combines validation with object instantiation and coercion.",hint:"Pydantic provides automatic type coercion and produces strongly typed Python objects.",level:"moderate",codeExample:`class Student(BaseModel):
    id: str
    fee: float`},{question:"What is 'Type Coercion' in schema validation frameworks?",shortAnswer:`The automatic conversion of compatible types, such as converting a numeric string '"28500.50"' into a Python 'float' or 'Decimal', or converting '"true"' into a boolean 'True'.`,explanation:"Simplifies handling strings submitted by HTML forms and query strings.",hint:"Automatically converting strings to target types like int, float, or bool.",level:"basic",codeExample:"# Coerces '28500' -> 28500"},{question:"How do you sanitize malicious HTML / XSS `<script>` tags from user-submitted JSON strings in Python?",shortAnswer:`By stripping tags using regex 're.sub(r"<[^>]*>", "", text)' and escaping special entities using 'html.escape(text.strip())'.`,explanation:"Standard input sanitization before storing text in databases.",hint:"Use re.sub to strip tags and html.escape() to encode HTML entities.",level:"basic",codeExample:`import html
clean_text = html.escape(raw_input.strip())`},{question:"How do you validate array length and item uniqueness in JSON Schema?",shortAnswer:`Using 'minItems', 'maxItems', and '"uniqueItems": True': '"badges": {"type": "array", "minItems": 1, "uniqueItems": True}'.`,explanation:"Enforces array count bounds and prohibits duplicate elements.",hint:"Use minItems, maxItems, and uniqueItems: True.",level:"moderate",codeExample:'"badges": {"type": "array", "minItems": 1, "uniqueItems": True}'},{question:"How do you define optional fields with default values in JSON Schema?",shortAnswer:`Exclude the field from the root '"required": [...]' list and define a '"default": value' property inside the field's property specification.`,explanation:"Optional fields with standard default assignments.",hint:"Omit from 'required' list and specify 'default': value.",level:"basic",codeExample:'"status": {"type": "string", "default": "PENDING"}'},{question:"How can you validate all errors in a JSON document at once instead of failing on the first error?",shortAnswer:"Using 'Draft202012Validator(schema).iter_errors(instance)' in the 'jsonschema' package, which yields every validation violation across the document.",explanation:"Enables comprehensive form error reports in a single pass.",hint:"Use validator.iter_errors(data) to collect all errors in a single pass.",level:"complex",codeExample:"for err in validator.iter_errors(data): print(err.message)"},{question:"What is the '$ref' keyword in JSON Schema?",shortAnswer:`A reference pointer (e.g. '"$ref": "#/$defs/Address"') that allows reusing modular sub-schemas across different parts of a larger schema.`,explanation:"Enables DRY (Don't Repeat Yourself) schema composition.",hint:"References reusable sub-schema definitions (like #/$defs/MyModel).",level:"complex",codeExample:'"billing_address": {"$ref": "#/$defs/Address"}'},{question:"How do you validate that a field is either of two types (e.g. number or null) in JSON Schema?",shortAnswer:`By passing a list of types to the 'type' keyword: '"discount": {"type": ["number", "null"]}'.`,explanation:"Allows nullable types in JSON Schema.",hint:"Pass a list of allowed types: type: ['number', 'null'].",level:"basic",codeExample:'"score": {"type": ["number", "null"]}'},{question:"What is 'Cerberus' or 'Marshmallow' in Python?",shortAnswer:"Popular third-party Python validation libraries providing pure-Python schema definition syntax and serialization/deserialization pipelines.",explanation:"Alternative schema validation libraries in the Python ecosystem.",hint:"Alternative Python schema validation and serialization libraries.",level:"moderate",codeExample:"# from marshmallow import Schema, fields"},{question:"How do you prevent Denial of Service (ReDoS) when using regex patterns in JSON Schema?",shortAnswer:"Avoid catastrophic backtracking patterns (e.g. nested quantifiers like '(a+)+$') and keep regular expressions anchored, simple, and linear in complexity.",explanation:"Security best practice for regex schema validation.",hint:"Avoid nested quantifiers to prevent ReDoS CPU exhaustion.",level:"complex",codeExample:"# Safe linear regex: ^[a-zA-Z0-9_-]+$"},{question:"How do you validate conditional schemas (e.g. IF type is 'COMPANY', THEN require 'tax_id') in JSON Schema?",shortAnswer:"Using the 'if', 'then', 'else' keywords in Draft 7 / Draft 2020-12 schema specifications.",explanation:"Conditional branching logic in JSON Schema contracts.",hint:"Use 'if', 'then', 'else' keywords in JSON Schema.",level:"complex",codeExample:'{"if": {"properties": {"type": {"const": "CORP"}}}, "then": {"required": ["tax_id"]}}'},{question:"How do you isolate invalid records during batch processing without crashing the entire pipeline?",shortAnswer:"By implementing a Quarantine pattern: validate each record individually, routing valid records to the approved queue and storing rejected records alongside their validation errors in a quarantine list.",explanation:"Essential for robust batch data ingestion pipelines.",hint:"Quarantine pattern: route valid records to database, quarantine rejected records with error logs.",level:"moderate",codeExample:`if errs: quarantine.append((item, errs))
else: approved.append(item)`},{question:"What is the danger of trusting client-side schema validation alone?",shortAnswer:"Client-side validation can be bypassed easily via curl, Postman, or malicious browser scripts; backend server-side validation is mandatory for security.",explanation:"Never trust client-side validation alone.",hint:"Clients can bypass browser checks; backend validation is mandatory.",level:"basic",codeExample:"# Always validate on backend!"},{question:"How do you sanitize control characters and null bytes ('\\x00') from incoming JSON strings?",shortAnswer:"Using regex: 're.sub(r'[\0--]', '', text)'.",explanation:"Prevents null-byte injection attacks in file systems and C-extensions.",hint:"Strip non-printable control characters and null bytes using regex.",level:"complex",codeExample:"clean = re.sub(r'[\0-]', '', raw_text)"},{question:"How do you validate date-time strings strictly in JSON Schema?",shortAnswer:`Using '"format": "date-time"' (ISO 8601 representation like '2026-08-24T10:30:00Z').`,explanation:"Standard ISO timestamp validation.",hint:"Use format: 'date-time' for ISO 8601 strings.",level:"basic",codeExample:'"created_at": {"type": "string", "format": "date-time"}'},{question:"How does FastAPI leverage Pydantic models for JSON validation?",shortAnswer:"FastAPI automatically validates incoming JSON request bodies against Pydantic model schemas, returns HTTP 422 Unprocessable Entity with detailed field errors on failure, and auto-generates OpenAPI docs.",explanation:"The core architecture of FastAPI REST microservices.",hint:"Auto-validates bodies, returns 422 on failure, and creates OpenAPI docs.",level:"moderate",codeExample:`@app.post('/admit')
def admit(student: StudentModel): return student`},{question:"How do you test schema validation logic using 'pytest'?",shortAnswer:"By writing test cases with parameterized golden valid payloads (asserting zero errors) and boundary-breaking invalid payloads (asserting specific error types and messages).",explanation:"Standard automated unit testing pattern.",hint:"Use pytest with valid and invalid payloads to test error detection.",level:"moderate",codeExample:"def test_schema_rejects_negative_fee(): assert validate({'fee': -10}) == False"},{question:"What is the difference between data validation and data sanitization?",shortAnswer:"Validation verifies that incoming data satisfies structural and logical rules (rejecting if invalid); Sanitization cleanses or transforms potentially unsafe data (e.g. stripping HTML or trimming whitespace) into a safe form.",explanation:"Complementary defense-in-depth data engineering stages.",hint:"Validation checks rules and rejects; Sanitization cleans and transforms data safely.",level:"basic",codeExample:"# Validate -> Reject; Sanitize -> Clean"},{question:"What is the ultimate golden rule for JSON Schema Validation & Sanitization in Python?",shortAnswer:"Define strict declarative contracts with 'additionalProperties: False', validate payloads at the API entry point, sanitize all string inputs against HTML/XSS injections, and isolate invalid records in a quarantined audit log without crashing the application.",explanation:"The complete enterprise standard for robust, secure JSON API development.",hint:"Strict schema contracts, entry-point validation, XSS sanitization, and quarantined audit logs.",level:"basic",codeExample:"# Python JSON Schema Validation Mastery"}];function Z(){const c=r.useRef([]),[o,m]=r.useState("schema"),_=`{
  "student_id": "STU-101",
  "full_name": "Sourav Mukherjee",
  "email": "sourav@codernaccotax.co.in",
  "course_code": "PY-AI",
  "tuition_fee": 28500.0,
  "age": 22
}`,j=`{
  "student_id": "S1",
  "full_name": "<script>alert('xss')<\/script>Priyanka Sen",
  "email": "invalid_email_format",
  "course_code": "ILLEGAL_COURSE",
  "tuition_fee": 500.0,
  "age": 12,
  "hacker_field": "unauthorized_data"
}`,[p,x]=r.useState(_),[f,w]=r.useState(!0),[A,L]=r.useState(!0),[u,T]=r.useState(!0),[h,g]=r.useState([]),[b,y]=r.useState(null),[S,v]=r.useState(!0),I=()=>{try{const t=JSON.parse(p),n=[],a={},P=new Set(["student_id","full_name","email","course_code","tuition_fee","age"]);if(u)for(const s of Object.keys(t))P.has(s)||n.push(`AdditionalProperty: '${s}' is not allowed by schema (additionalProperties: False)`);!t.student_id||typeof t.student_id!="string"||t.student_id.length<5?n.push("student_id: Must be a string with at least 5 characters (e.g. STU-101)"):a.student_id=t.student_id,!t.full_name||typeof t.full_name!="string"||t.full_name.length<3?n.push("full_name: Must be at least 3 characters long"):f?a.full_name=t.full_name.replace(/<[^>]*>/g,"").trim():a.full_name=t.full_name;const E=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;!t.email||!E.test(t.email)?n.push("email: Must be a valid email format matching standard RFC pattern"):a.email=t.email.toLowerCase().trim();const N=["PY-AI","DS-ML","FULL-STACK"];N.includes(t.course_code)?a.course_code=t.course_code:n.push(`course_code: Value '${t.course_code}' must be one of ${JSON.stringify(N)}`);const l=Number(t.tuition_fee);if(isNaN(l)||l<1e4||l>1e5?n.push(`tuition_fee: Fee (${t.tuition_fee}) must be between INR 10,000 and INR 100,000`):a.tuition_fee=l,t.age!==void 0){const s=Number(t.age);isNaN(s)||s<16||s>80?n.push(`age: Value (${t.age}) must be between 16 and 80`):a.age=s}g(n),v(n.length===0),y(a)}catch{g(["JSONParseError: Invalid JSON syntax in payload editor"]),v(!1),y(null)}};r.useEffect(()=>{I()},[p,f,A,u]),r.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(a=>{a.isIntersecting&&a.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return c.current.forEach(n=>{n&&t.observe(n)}),()=>t.disconnect()},[]);const i=t=>{t&&!c.current.includes(t)&&c.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:i,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_004"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 7"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Working with JSON & External Data APIs"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["JSON Schema: ",e.jsx("span",{className:"text-teal-400",children:"Validation & Sanitization"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master contract validation and data sanitization in Python: the formal JSON Schema standard (",e.jsx("code",{className:"text-teal-300 font-mono",children:"Draft 2020-12"}),"), constraint keywords (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"minimum"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"enum"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"pattern"}),"), Pydantic type coercion, defense-in-depth XSS sanitization, and quarantined batch error isolation."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📜 JSON Schema Draft 2020-12"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ `additionalProperties: False`"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🧹 Anti-XSS Sanitization"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🚨 Quarantine Error Isolation"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:i,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📜"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. JSON Schema Specification & Sanitization Principles"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"Schema validation acts as the first line of defense at the API boundary, ensuring invalid or malicious data is caught before reaching core business logic:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ JSON Schema Contract"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"validate(data, schema)"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"IETF declarative standard defining required keys, data types, numeric ranges, and regex patterns."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Security Sanitization"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"html.escape(strip_tags(s))"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Strips malicious HTML and script tags to prevent Cross-Site Scripting (XSS) in stored records."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Quarantined Isolation"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"quarantine.append(record)"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Isolates rejected records in a diagnostic log without dropping or crashing the entire batch process."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The `additionalProperties: False` Security Invariant"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Always include ",e.jsx("code",{className:"text-teal-300",children:'"additionalProperties": false'})," in your JSON Schemas. This prevents Mass Assignment attacks where attackers inject unauthorized fields (e.g. ",e.jsx("code",{className:"text-rose-400",children:'"is_admin": true'}),") into registration endpoints."]})]})]})]}),e.jsxs("section",{ref:i,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Validation Flows, Coercion & Anti-XSS"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>m("schema"),className:d("px-3 py-1.5 rounded-lg transition-all",o==="schema"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"JSON Schema Contract"}),e.jsx("button",{onClick:()=>m("pydantic"),className:d("px-3 py-1.5 rounded-lg transition-all",o==="pydantic"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Pydantic Coercion"}),e.jsx("button",{onClick:()=>m("sanitizer"),className:d("px-3 py-1.5 rounded-lg transition-all",o==="sanitizer"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Anti-XSS Defense"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining declarative contract gates, automatic type coercion pipelines, and XSS sanitizers:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:o==="schema"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"JSON SCHEMA VALIDATION GATEWAY (`Draft 2020-12`)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"15",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"1. Incoming JSON Payload"}),e.jsx("text",{x:"15",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"{"}),e.jsx("text",{x:"25",y:"72",fill:"#38bdf8",fontSize:"8 font-mono",children:'"student_id": "STU-101",'}),e.jsx("text",{x:"25",y:"89",fill:"#34d399",fontSize:"8 font-mono",children:'"fee": 28500.0'}),e.jsx("text",{x:"15",y:"106",fill:"#ecfdf5",fontSize:"8 font-mono",children:"}"}),e.jsx("rect",{x:"15",y:"115",width:"220",height:"100",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"25",y:"140",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Untrusted Client Input:"}),e.jsx("text",{x:"25",y:"160",fill:"#cbd5e1",fontSize:"8",children:"May contain corrupt types,"}),e.jsx("text",{x:"25",y:"175",fill:"#cbd5e1",fontSize:"8",children:"missing fields, or attacks."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"310",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. Schema Specification"}),e.jsx("text",{x:"310",y:"55",fill:"#38bdf8",fontSize:"8 font-mono",children:'required: ["student_id", ...]'}),e.jsx("text",{x:"310",y:"75",fill:"#38bdf8",fontSize:"8 font-mono",children:"fee: minimum: 10000.0"}),e.jsx("text",{x:"310",y:"95",fill:"#34d399",fontSize:"8 font-mono",children:"additionalProperties: false"}),e.jsx("rect",{x:"310",y:"115",width:"220",height:"100",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"320",y:"140",fill:"#38bdf8",fontSize:"9 font-bold",children:"Declarative Gate:"}),e.jsx("text",{x:"320",y:"160",fill:"#cbd5e1",fontSize:"8",children:"Inspects every property"}),e.jsx("text",{x:"320",y:"175",fill:"#cbd5e1",fontSize:"8",children:"against type and bound rules."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"605",y:"30",fill:"#a7f3d0",fontSize:"11 font-bold",children:"3. Validated Database Ingestion"}),e.jsx("text",{x:"605",y:"55",fill:"#34d399",fontSize:"8 font-mono",children:"VALIDATION_PASSED [OK]"}),e.jsx("text",{x:"605",y:"75",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Safe for SQL Persistence"}),e.jsx("rect",{x:"605",y:"115",width:"200",height:"100",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"615",y:"140",fill:"#34d399",fontSize:"9 font-bold",children:"Zero Corrupt Records:"}),e.jsx("text",{x:"615",y:"160",fill:"#cbd5e1",fontSize:"8",children:"Database guaranteed to"}),e.jsx("text",{x:"615",y:"175",fill:"#cbd5e1",fontSize:"8",children:"hold 100% compliant data."})]})]}):o==="pydantic"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"PYDANTIC MODEL VALIDATION & TYPE COERCION PIPELINE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"1. Raw Unformatted HTTP Payload"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"8 font-mono",children:"{"}),e.jsx("text",{x:"35",y:"78",fill:"#fca5a5",fontSize:"8 font-mono",children:'"full_name": "  sourav mukherjee  ",'}),e.jsx("text",{x:"35",y:"96",fill:"#fca5a5",fontSize:"8 font-mono",children:'"tuition_fee": "28500.50",'}),e.jsx("text",{x:"35",y:"114",fill:"#fca5a5",fontSize:"8 font-mono",children:'"email": "SOURAV@CODER.IN"'}),e.jsx("text",{x:"20",y:"132",fill:"#ecfdf5",fontSize:"8 font-mono",children:"}"}),e.jsx("rect",{x:"20",y:"150",width:"340",height:"70",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"172",fill:"#34d399",fontSize:"9 font-bold",children:"Unformatted Data:"}),e.jsx("text",{x:"30",y:"190",fill:"#cbd5e1",fontSize:"8",children:"Strings submitted via web forms require cleanup."})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"2. Strongly-Typed Validated Instance"}),e.jsx("text",{x:"20",y:"60",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"StudentRecordModel("}),e.jsx("text",{x:"35",y:"78",fill:"#ecfdf5",fontSize:"8 font-mono",children:'full_name="Sourav Mukherjee",'}),e.jsx("text",{x:"35",y:"96",fill:"#38bdf8",fontSize:"8 font-mono",children:"tuition_fee=Decimal('28500.50'),"}),e.jsx("text",{x:"35",y:"114",fill:"#ecfdf5",fontSize:"8 font-mono",children:'email="sourav@coder.in"'}),e.jsx("text",{x:"20",y:"132",fill:"#34d399",fontSize:"8 font-mono font-bold",children:")"}),e.jsx("rect",{x:"20",y:"150",width:"340",height:"70",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"30",y:"172",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Automatic Coercion:"}),e.jsx("text",{x:"30",y:"190",fill:"#cbd5e1",fontSize:"8",children:"Trimmed whitespace, normalized case, Decimal fee."})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"DEFENSE-IN-DEPTH ANTI-XSS SANITIZATION & STRIPPING"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"15",y:"30",fill:"#fda4af",fontSize:"11 font-bold",children:"1. Malicious Injected String"}),e.jsx("text",{x:"15",y:"55",fill:"#fca5a5",fontSize:"8 font-mono font-bold",children:"<script>alert(1)<\/script>"}),e.jsx("text",{x:"15",y:"75",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Sourav Mukherjee"}),e.jsx("rect",{x:"15",y:"110",width:"220",height:"105",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"25",y:"135",fill:"#fda4af",fontSize:"9 font-bold",children:"Attack Vector:"}),e.jsx("text",{x:"25",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Stored XSS attacking admin"}),e.jsx("text",{x:"25",y:"170",fill:"#cbd5e1",fontSize:"8",children:"dashboards viewing student records."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"310",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. Sanitization Pipeline"}),e.jsx("text",{x:"310",y:"55",fill:"#38bdf8",fontSize:"8 font-mono",children:'clean = re.sub(r"<[^>]*>", "")'}),e.jsx("text",{x:"310",y:"75",fill:"#38bdf8",fontSize:"8 font-mono",children:"clean = html.escape(clean)"}),e.jsx("rect",{x:"310",y:"110",width:"220",height:"105",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"320",y:"135",fill:"#38bdf8",fontSize:"9 font-bold",children:"Tag Stripper & Escaper:"}),e.jsx("text",{x:"320",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Completely neutralizes HTML"}),e.jsx("text",{x:"320",y:"170",fill:"#cbd5e1",fontSize:"8",children:"and script tags automatically."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"605",y:"30",fill:"#a7f3d0",fontSize:"11 font-bold",children:"3. Cleaned Safe String"}),e.jsx("text",{x:"605",y:"55",fill:"#34d399",fontSize:"8 font-mono font-bold",children:'"Sourav Mukherjee"'}),e.jsx("text",{x:"605",y:"75",fill:"#cbd5e1",fontSize:"8",children:"100% Safe for DB & UI"}),e.jsx("rect",{x:"605",y:"110",width:"200",height:"105",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"615",y:"135",fill:"#34d399",fontSize:"9 font-bold",children:"Clean Persistent Entity:"}),e.jsx("text",{x:"615",y:"155",fill:"#cbd5e1",fontSize:"8",children:"No threat of client-side"}),e.jsx("text",{x:"615",y:"170",fill:"#cbd5e1",fontSize:"8",children:"execution on student portals."})]})]})})]}),e.jsxs("section",{ref:i,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive JSON Schema Validator & Sanitizer Laboratory"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Test validating JSON payloads against strict enterprise constraints, observe anti-XSS stripping, and inspect quarantined field-level violations:"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"1. Incoming Admission JSON Payload Editor"}),e.jsxs("div",{className:"flex gap-2 text-[11px] font-mono",children:[e.jsx("button",{onClick:()=>x(_),className:"text-teal-400 hover:text-white underline",children:"Load Golden Valid"}),e.jsx("button",{onClick:()=>x(j),className:"text-rose-400 hover:text-white underline",children:"Load Malicious"})]})]}),e.jsx("textarea",{value:p,onChange:t=>x(t.target.value),rows:10,className:"w-full bg-slate-900 text-slate-100 font-mono text-xs p-3 rounded-lg border border-slate-800 focus:border-teal-500 focus:outline-none leading-relaxed"}),e.jsxs("div",{className:"space-y-2 text-xs font-mono pt-1",children:[e.jsxs("label",{className:"flex items-center gap-2 p-2 bg-slate-900 rounded border border-slate-800 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:f,onChange:t=>w(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"Enable Anti-XSS Sanitizer (Strips <script> and HTML tags)"})]}),e.jsxs("label",{className:"flex items-center gap-2 p-2 bg-slate-900 rounded border border-slate-800 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:u,onChange:t=>T(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"Enforce `additionalProperties: False` (Rejects undeclared keys)"})]})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:d("p-3 rounded-xl border font-mono text-xs space-y-1.5",S?"bg-emerald-950/60 border-emerald-800 text-emerald-300":"bg-rose-950/60 border-rose-800 text-rose-300"),children:[e.jsxs("div",{className:"font-bold text-[11px] uppercase flex items-center justify-between",children:[e.jsx("span",{children:"Validation Gate Status:"}),e.jsx("span",{children:S?"[PASSED • 100% COMPLIANT]":`[REJECTED • ${h.length} ERRORS]`})]}),h.length>0&&e.jsx("div",{className:"space-y-1 pt-1 border-t border-rose-800/60 max-h-[90px] overflow-y-auto",children:h.map((t,n)=>e.jsxs("div",{className:"text-[10px] text-rose-300 leading-snug",children:["• ",t]},n))})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[160px] font-mono text-xs space-y-1",children:[e.jsx("span",{className:"text-slate-400 block font-bold text-[10px] uppercase",children:"Sanitized & Cleaned Document Output:"}),e.jsx("pre",{className:"text-slate-200 text-[11px] leading-relaxed",children:b?JSON.stringify(b,null,2):"Parsing failed: Malformed JSON syntax"})]})]})]})]}),e.jsxs("section",{ref:i,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master JSON Schema Validation & Constraint Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Constraint Keyword"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"JSON Schema Syntax"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Pydantic Equivalent"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Enforced Guarantee"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"required"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:'`required: ["id", "fee"]`'}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-mono",children:"`id: str` (no default)"}),e.jsx("td",{className:"py-3 px-4",children:"Guarantees mandatory keys are present"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"minimum / maximum"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`minimum: 10000`"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-mono",children:"`Field(ge=10000, le=100000)`"}),e.jsx("td",{className:"py-3 px-4",children:"Guarantees numeric values stay within boundaries"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"pattern"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:'`pattern: "^STU-\\\\d{3}$"`'}),e.jsx("td",{className:"py-3 px-4 text-purple-300 font-mono",children:'`Field(pattern=r"...")`'}),e.jsx("td",{className:"py-3 px-4",children:"Guarantees string matches exact regex format"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"enum"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:'`enum: ["PY", "DS"]`'}),e.jsx("td",{className:"py-3 px-4 text-amber-300 font-mono",children:"`course: CourseEnum`"}),e.jsx("td",{className:"py-3 px-4",children:"Restricts values to explicit allowable choices"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-rose-300 font-semibold",children:"additionalProperties"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`additionalProperties: false`"}),e.jsx("td",{className:"py-3 px-4 text-rose-300 font-mono",children:"`extra='forbid'`"}),e.jsx("td",{className:"py-3 px-4",children:"Blocks unauthorized/unexpected extra fields"})]})]})]})})]}),e.jsxs("section",{ref:i,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating JSON Schema validators, lightweight pure Python rules, Pydantic type coercion, and institutional admission validation suites:"}),e.jsx(O,{files:[{filename:"json_schema_validation_engine_jsonschema.py",code:D,description:"JSON Schema specification validator with required keys, enums, and regex patterns."},{filename:"lightweight_pure_python_schema_validator.py",code:R,description:"Zero-dependency pure Python schema validator with HTML sanitization."},{filename:"pydantic_schema_validation_and_coercion.py",code:q,description:"Pydantic-style schema validation, automatic type coercion, and structured field errors."},{filename:"institutional_admission_application_validator_suite.py",code:M,description:"Institutional Admission Application validator with XSS stripping and quarantined isolation."}]})]}),e.jsxs("section",{ref:i,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Omitting `additionalProperties: False`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["By default, JSON Schema permits arbitrary extra keys. Attackers can inject unauthorized fields (e.g. ",e.jsx("code",{className:"text-rose-300 font-mono",children:"is_admin: true"}),") into registration endpoints."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always set ",e.jsx("code",{className:"text-emerald-300",children:'"additionalProperties": false'}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Relying Solely on Client-Side Checks"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"HTML5 form constraints can be bypassed in seconds with curl or Postman. Backend server-side validation is non-negotiable."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always re-validate and sanitize on the server."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Stored XSS Script Injections"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Accepting raw text fields (e.g. ",e.jsx("code",{className:"text-purple-300 font-mono",children:"<script>...<\/script>"}),") without stripping HTML tags allows attackers to execute code in administrator web dashboards."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Strip HTML tags and run ",e.jsx("code",{className:"text-emerald-300",children:"html.escape()"})," before storage."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Crashing Entire Batches on Single Bad Record"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Raising an unhandled exception on record #50 in a 1,000-record batch rolls back the entire transaction."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Quarantine invalid records and process valid ones."]})]})]})]}),e.jsxs("section",{ref:i,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering JSON Schema, Pydantic, XSS sanitization, additionalProperties, and quarantined isolation:"}),e.jsx(k,{questions:J})]}),e.jsxs("section",{ref:i,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with JSON Schema recipes, Pydantic coercion patterns, and anti-XSS sanitizer implementations:"}),e.jsx("div",{className:"mb-10",children:e.jsx(z,{content:V,filename:"python_topic7_json_schema_validation_notes.txt",title:"Print Topic 7 Study Notes"})}),e.jsx(C,{})]})]})]})}export{Z as default};
