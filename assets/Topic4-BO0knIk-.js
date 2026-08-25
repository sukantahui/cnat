import{b as s,j as e,bg as n}from"./vendor-react-core-Doz9nIC6.js";import{P as k}from"./PythonFileLoader-hCi5osN-.js";import{P as C}from"./PlainTextPrint-C08xhKA4.js";import{F as O}from"./FAQTemplate-CkSqDH4B.js";import{T}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const z=`# topic4_files/custom_json_encoder_subclassing.py\r
# Module: 003_004_working-with-json\r
# Topic: Handling custom Python objects with custom JSONEncoders & object_hook\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 4 - File 1: Custom JSONEncoder Subclassing (\`default\` method override)\r
Demonstrates:\r
  1. Subclassing \`json.JSONEncoder\` to handle domain-specific Python objects\r
  2. Overriding \`default(self, o)\` for \`datetime\`, \`Decimal\`, \`UUID\`, \`set\`, and custom classes\r
  3. Delegating to \`super().default(o)\` to preserve standard \`TypeError\` behavior\r
"""\r
\r
import json\r
from datetime import datetime\r
from decimal import Decimal\r
import uuid\r
from typing import Set\r
\r
class StudentRecord:\r
    """Domain model representing an enrolled student."""\r
    def __init__(self, student_id: str, name: str, fee_paid: Decimal, enrollment_dt: datetime, badges: Set[str]):\r
        self.student_id = student_id\r
        self.name = name\r
        self.fee_paid = fee_paid\r
        self.enrollment_dt = enrollment_dt\r
        self.badges = badges\r
\r
\r
class EnterpriseJSONEncoder(json.JSONEncoder):\r
    """Custom JSONEncoder supporting datetime, Decimal, UUID, sets, and domain objects."""\r
    def default(self, o):\r
        if isinstance(o, StudentRecord):\r
            return {\r
                "__type__": "StudentRecord",\r
                "student_id": o.student_id,\r
                "name": o.name,\r
                "fee_paid": o.fee_paid,          # Re-routed through default() for Decimal\r
                "enrollment_dt": o.enrollment_dt,  # Re-routed through default() for datetime\r
                "badges": o.badges               # Re-routed through default() for set\r
            }\r
        elif isinstance(o, datetime):\r
            return o.isoformat()\r
        elif isinstance(o, Decimal):\r
            return float(o)\r
        elif isinstance(o, uuid.UUID):\r
            return str(o)\r
        elif isinstance(o, set):\r
            return sorted(list(o))\r
        # Let base class raise TypeError for unsupported types:\r
        return super().default(o)\r
\r
\r
def demonstrate_custom_encoder():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - CUSTOM JSONENCODER SUBCLASS")\r
    print("=" * 70)\r
\r
    student = StudentRecord(\r
        student_id="STU-101",\r
        name="Sourav Mukherjee",\r
        fee_paid=Decimal("28500.50"),\r
        enrollment_dt=datetime(2026, 8, 24, 10, 30, 0),\r
        badges={"PYTHON_CORE", "AI_PRO", "DECORATORS_MASTER"}\r
    )\r
\r
    # 1. Without Custom Encoder: Fails with TypeError\r
    print("1. Standard \`json.dumps()\` (No Custom Encoder):")\r
    try:\r
        json.dumps(student)\r
    except TypeError as exc:\r
        print(f"   * [DEFAULT ERROR BLOCKED] : {exc}\\n")\r
\r
    # 2. With EnterpriseJSONEncoder:\r
    print("2. Serializing with \`cls=EnterpriseJSONEncoder\`:")\r
    serialized_json = json.dumps(student, cls=EnterpriseJSONEncoder, indent=2)\r
    print(serialized_json)\r
\r
    print(r"""\r
JSONEncoder Subclassing Golden Rules:\r
  1. Subclass \`json.JSONEncoder\` and override \`default(self, o)\`.\r
  2. Return a serializable primitive (dict, list, str, int, float, bool, None).\r
  3. ALWAYS call \`return super().default(o)\` at the end to ensure proper TypeErrors!\r
""")\r
    print("[PASSED] Custom JSONEncoder Subclass Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_custom_encoder()\r
`,D=`# topic4_files/deserializing_custom_objects_with_object_hook.py\r
# Module: 003_004_working-with-json\r
# Topic: Handling custom Python objects with custom JSONEncoders & object_hook\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 4 - File 2: Custom Object Deserialization with \`object_hook\`\r
Demonstrates:\r
  1. Using \`object_hook\` callback in \`json.loads()\` to reconstruct Python class instances\r
  2. Inspecting type discriminator metadata (\`"__type__"\`) to instantiate appropriate classes\r
  3. Restoring Dataclass and custom domain models with methods\r
"""\r
\r
import json\r
from datetime import datetime\r
from decimal import Decimal\r
from typing import Set\r
\r
class StudentRecord:\r
    """Domain model representing an enrolled student."""\r
    def __init__(self, student_id: str, name: str, fee_paid: Decimal, enrollment_dt: datetime, badges: Set[str]):\r
        self.student_id = student_id\r
        self.name = name\r
        self.fee_paid = fee_paid\r
        self.enrollment_dt = enrollment_dt\r
        self.badges = badges\r
\r
    def calculate_scholarship_rebate(self, discount_pct: float) -> Decimal:\r
        """Domain business logic method."""\r
        return round(self.fee_paid * (Decimal(str(discount_pct)) / Decimal("100.0")), 2)\r
\r
    def __repr__(self):\r
        return f"StudentRecord(id='{self.student_id}', name='{self.name}', fee={self.fee_paid}, badges={len(self.badges)})"\r
\r
\r
def student_domain_object_hook(dct: dict):\r
    """Callback function converting JSON dictionaries back into rich Python domain models."""\r
    if dct.get("__type__") == "StudentRecord":\r
        return StudentRecord(\r
            student_id=dct["student_id"],\r
            name=dct["name"],\r
            fee_paid=Decimal(str(dct["fee_paid"])),\r
            enrollment_dt=datetime.fromisoformat(dct["enrollment_dt"]),\r
            badges=set(dct["badges"])\r
        )\r
    return dct\r
\r
\r
def demonstrate_object_hook():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - DESERIALIZATION WITH \`object_hook\`")\r
    print("=" * 70)\r
\r
    sample_json = """\r
    {\r
        "batch_id": "BATCH-2026-AI",\r
        "student": {\r
            "__type__": "StudentRecord",\r
            "student_id": "STU-101",\r
            "name": "Sourav Mukherjee",\r
            "fee_paid": 28500.50,\r
            "enrollment_dt": "2026-08-24T10:30:00",\r
            "badges": ["PYTHON_CORE", "AI_PRO", "DECORATORS_MASTER"]\r
        }\r
    }\r
    """\r
\r
    # 1. Standard Deserialization (Yields generic dict):\r
    print("1. Standard \`json.loads()\` (Yields standard Python dict):")\r
    standard_doc = json.loads(sample_json)\r
    print(f"   * Student Type : {type(standard_doc['student']).__name__}")\r
    print(f"   * Raw Dict     : {standard_doc['student']}\\n")\r
\r
    # 2. Deserialization with \`object_hook\`:\r
    print("2. Deserializing with \`object_hook=student_domain_object_hook\`:")\r
    reconstructed_doc = json.loads(sample_json, object_hook=student_domain_object_hook)\r
    student_obj: StudentRecord = reconstructed_doc["student"]\r
\r
    print(f"   * Student Type : {type(student_obj).__name__} (Custom Domain Class!)")\r
    print(f"   * Object Repr  : {student_obj}")\r
    print(f"   * Badges Type  : {type(student_obj.badges).__name__} ({student_obj.badges})")\r
    print(f"   * Fee Type     : {type(student_obj.fee_paid).__name__} (INR {student_obj.fee_paid})")\r
\r
    # Calling domain methods on restored object:\r
    rebate = student_obj.calculate_scholarship_rebate(10.0)\r
    print(f"   * Invoked Method calculate_scholarship_rebate(10%): INR {rebate}")\r
\r
    print("\\n[PASSED] Custom Object Deserialization with object_hook Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_object_hook()\r
`,A=`# topic4_files/bidirectional_custom_codec_dataclass_pipeline.py\r
# Module: 003_004_working-with-json\r
# Topic: Handling custom Python objects with custom JSONEncoders & object_hook\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 4 - File 3: Bidirectional Dataclass JSON Codec Architecture\r
Demonstrates:\r
  1. Pairing \`@dataclass\` domain models with custom JSONEncoder & object_hook\r
  2. Achieving 100% roundtrip fidelity without manual dict-unpacking boilerplate\r
  3. Handling nested dataclasses and enumerations cleanly\r
"""\r
\r
import json\r
from dataclasses import dataclass\r
from datetime import date\r
from enum import Enum\r
from typing import List\r
\r
class CourseTier(Enum):\r
    FOUNDATION = "FOUNDATION"\r
    INTERMEDIATE = "INTERMEDIATE"\r
    ADVANCED = "ADVANCED"\r
\r
\r
@dataclass\r
class ModuleSyllabus:\r
    module_code: str\r
    topic_name: str\r
    lecture_hours: int\r
\r
\r
@dataclass\r
class AcademicCourse:\r
    course_id: str\r
    title: str\r
    tier: CourseTier\r
    launch_date: date\r
    modules: List[ModuleSyllabus]\r
\r
\r
class CourseDataClassCodec:\r
    """Unified bidirectional serializer & deserializer for Course dataclasses."""\r
\r
    class Encoder(json.JSONEncoder):\r
        def default(self, o):\r
            if isinstance(o, CourseTier):\r
                return o.value\r
            elif isinstance(o, (date,)):\r
                return o.isoformat()\r
            elif isinstance(o, ModuleSyllabus):\r
                return {\r
                    "__dataclass__": "ModuleSyllabus",\r
                    "module_code": o.module_code,\r
                    "topic_name": o.topic_name,\r
                    "lecture_hours": o.lecture_hours\r
                }\r
            elif isinstance(o, AcademicCourse):\r
                return {\r
                    "__dataclass__": "AcademicCourse",\r
                    "course_id": o.course_id,\r
                    "title": o.title,\r
                    "tier": o.tier,\r
                    "launch_date": o.launch_date,\r
                    "modules": o.modules\r
                }\r
            return super().default(o)\r
\r
    @classmethod\r
    def object_hook(cls, dct: dict):\r
        dtype = dct.get("__dataclass__")\r
        if dtype == "ModuleSyllabus":\r
            return ModuleSyllabus(\r
                module_code=dct["module_code"],\r
                topic_name=dct["topic_name"],\r
                lecture_hours=dct["lecture_hours"]\r
            )\r
        elif dtype == "AcademicCourse":\r
            return AcademicCourse(\r
                course_id=dct["course_id"],\r
                title=dct["title"],\r
                tier=CourseTier(dct["tier"]),\r
                launch_date=date.fromisoformat(dct["launch_date"]),\r
                modules=dct["modules"]\r
            )\r
        return dct\r
\r
    @classmethod\r
    def serialize(cls, obj) -> str:\r
        return json.dumps(obj, cls=cls.Encoder, indent=2)\r
\r
    @classmethod\r
    def deserialize(cls, json_str: str):\r
        return json.loads(json_str, object_hook=cls.object_hook)\r
\r
\r
def demonstrate_bidirectional_codec():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - BIDIRECTIONAL DATACLASS JSON CODEC")\r
    print("=" * 70)\r
\r
    course = AcademicCourse(\r
        course_id="CRS-PY-2026",\r
        title="Python Full-Stack & Agentic AI",\r
        tier=CourseTier.ADVANCED,\r
        launch_date=date(2026, 9, 1),\r
        modules=[\r
            ModuleSyllabus("M01", "OOP & Decorators", 12),\r
            ModuleSyllabus("M02", "Generators & Iterators", 10),\r
            ModuleSyllabus("M03", "JSON APIs & Serialization", 8)\r
        ]\r
    )\r
\r
    print("1. Serializing Nested Dataclasses to JSON:")\r
    json_doc = CourseDataClassCodec.serialize(course)\r
    print(json_doc)\r
\r
    print("\\n2. Deserializing Back to Dataclasses via \`object_hook\`:")\r
    restored_course: AcademicCourse = CourseDataClassCodec.deserialize(json_doc)\r
\r
    print(f"   * Course Type      : {type(restored_course).__name__}")\r
    print(f"   * Course Title     : {restored_course.title}")\r
    print(f"   * Tier Enum Type   : {type(restored_course.tier)} ({restored_course.tier})")\r
    print(f"   * Launch Date Type : {type(restored_course.launch_date)} ({restored_course.launch_date})")\r
    print(f"   * First Module     : {restored_course.modules[0].topic_name} (Type: {type(restored_course.modules[0]).__name__})")\r
    print(f"   * Objects Match?   : {restored_course == course} [100% Roundtrip Fidelity!]")\r
\r
    print("\\n[PASSED] Bidirectional Dataclass JSON Codec Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_bidirectional_codec()\r
`,R=`# topic4_files/institutional_student_portfolio_codec_suite.py\r
# Module: 003_004_working-with-json\r
# Topic: Handling custom Python objects with custom JSONEncoders & object_hook\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 4 - File 4: Institutional Student Portfolio Codec Suite (Case Study)\r
Demonstrates:\r
  1. Production codec architecture for multi-model student portfolios\r
  2. Subclassing \`JSONEncoder\` for custom domains and integrating \`object_hook\`\r
  3. Preserving precision, enums, dates, and domain methods across persistence boundaries\r
"""\r
\r
import json\r
from datetime import datetime\r
from decimal import Decimal\r
from typing import List, Set\r
\r
class AcademicCertificate:\r
    """Certificate entity earned by a student."""\r
    def __init__(self, cert_code: str, title: str, award_date: datetime, honors_tier: str):\r
        self.cert_code = cert_code\r
        self.title = title\r
        self.award_date = award_date\r
        self.honors_tier = honors_tier\r
\r
    def __repr__(self):\r
        return f"Certificate({self.cert_code}, {self.title}, {self.honors_tier})"\r
\r
\r
class StudentPortfolio:\r
    """Comprehensive academic and financial portfolio for Coder & AccoTax students."""\r
    def __init__(\r
        self,\r
        student_id: str,\r
        full_name: str,\r
        total_fees_paid: Decimal,\r
        skill_tags: Set[str],\r
        certificates: List[AcademicCertificate]\r
    ):\r
        self.student_id = student_id\r
        self.full_name = full_name\r
        self.total_fees_paid = total_fees_paid\r
        self.skill_tags = skill_tags\r
        self.certificates = certificates\r
\r
    def calculate_merit_grant(self) -> Decimal:\r
        """Calculates institutional merit scholarship award."""\r
        if any(c.honors_tier == "PLATINUM" for c in self.certificates):\r
            return round(self.total_fees_paid * Decimal("0.25"), 2)\r
        return Decimal("0.00")\r
\r
\r
class InstitutionalPortfolioCodec:\r
    """Full-featured enterprise codec for student portfolios."""\r
\r
    class Encoder(json.JSONEncoder):\r
        def default(self, o):\r
            if isinstance(o, StudentPortfolio):\r
                return {\r
                    "__model__": "StudentPortfolio",\r
                    "student_id": o.student_id,\r
                    "full_name": o.full_name,\r
                    "total_fees_paid": o.total_fees_paid,\r
                    "skill_tags": o.skill_tags,\r
                    "certificates": o.certificates\r
                }\r
            elif isinstance(o, AcademicCertificate):\r
                return {\r
                    "__model__": "AcademicCertificate",\r
                    "cert_code": o.cert_code,\r
                    "title": o.title,\r
                    "award_date": o.award_date,\r
                    "honors_tier": o.honors_tier\r
                }\r
            elif isinstance(o, datetime):\r
                return o.isoformat()\r
            elif isinstance(o, Decimal):\r
                return float(o)\r
            elif isinstance(o, set):\r
                return sorted(list(o))\r
            return super().default(o)\r
\r
    @classmethod\r
    def object_hook(cls, dct: dict):\r
        model_type = dct.get("__model__")\r
        if model_type == "AcademicCertificate":\r
            return AcademicCertificate(\r
                cert_code=dct["cert_code"],\r
                title=dct["title"],\r
                award_date=datetime.fromisoformat(dct["award_date"]),\r
                honors_tier=dct["honors_tier"]\r
            )\r
        elif model_type == "StudentPortfolio":\r
            return StudentPortfolio(\r
                student_id=dct["student_id"],\r
                full_name=dct["full_name"],\r
                total_fees_paid=Decimal(str(dct["total_fees_paid"])),\r
                skill_tags=set(dct["skill_tags"]),\r
                certificates=dct["certificates"]\r
            )\r
        return dct\r
\r
\r
def run_portfolio_codec_case_study():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - INSTITUTIONAL STUDENT PORTFOLIO CODEC")\r
    print("=" * 70)\r
\r
    # 1. Create Rich Student Portfolio:\r
    original_portfolio = StudentPortfolio(\r
        student_id="STU-101",\r
        full_name="Sourav Mukherjee",\r
        total_fees_paid=Decimal("35000.00"),\r
        skill_tags={"PYTHON_CORE", "GENERATORS", "REST_APIS", "DECORATORS"},\r
        certificates=[\r
            AcademicCertificate("CERT-PY-01", "Python AI Engineering", datetime(2026, 8, 20), "PLATINUM"),\r
            AcademicCertificate("CERT-DB-02", "Relational Database Systems", datetime(2026, 6, 15), "GOLD")\r
        ]\r
    )\r
\r
    # 2. Serialize to JSON:\r
    print("1. Serializing Rich Portfolio Object to JSON:")\r
    json_doc = json.dumps(original_portfolio, cls=InstitutionalPortfolioCodec.Encoder, indent=2)\r
    print(json_doc)\r
\r
    # 3. Deserialize via object_hook:\r
    print("\\n2. Deserializing Back to Live Python Domain Objects:")\r
    restored: StudentPortfolio = json.loads(json_doc, object_hook=InstitutionalPortfolioCodec.object_hook)\r
\r
    print(f"   * Restored Class : {type(restored).__name__}")\r
    print(f"   * Student Name   : {restored.full_name} ({restored.student_id})")\r
    print(f"   * Total Fees     : INR {restored.total_fees_paid} (Type: {type(restored.total_fees_paid).__name__})")\r
    print(f"   * Skill Tags     : {restored.skill_tags} (Type: {type(restored.skill_tags).__name__})")\r
    print(f"   * Certificates   : {restored.certificates}")\r
\r
    # Invoke Business Logic Method on Restored Instance:\r
    grant = restored.calculate_merit_grant()\r
    print(f"   * Executed Method calculate_merit_grant(): INR {grant:,.2f}")\r
\r
    print("\\n[PASSED] Institutional Student Portfolio Codec Verified.")\r
\r
\r
if __name__ == "__main__":\r
    run_portfolio_codec_case_study()\r
`,P=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
          PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_004: WORKING WITH JSON\r
              TOPIC 4: CUSTOM JSONENCODERS & object_hook DESERIALIZATION\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. CUSTOM JSONEncoder SUBCLASS\r
--------------------------------------------------------------------------------\r
  class EnterpriseEncoder(json.JSONEncoder):\r
      def default(self, o):\r
          if isinstance(o, datetime):\r
              return o.isoformat()\r
          elif isinstance(o, Decimal):\r
              return float(o)\r
          elif isinstance(o, Student):\r
              return {"__type__": "Student", **o.__dict__}\r
          return super().default(o)  # Raises TypeError if unknown!\r
\r
  json_str = json.dumps(data, cls=EnterpriseEncoder)\r
\r
--------------------------------------------------------------------------------\r
2. OBJECT_HOOK DESERIALIZATION\r
--------------------------------------------------------------------------------\r
  def custom_object_hook(dct):\r
      if dct.get("__type__") == "Student":\r
          return Student(**dct)\r
      return dct\r
\r
  student = json.loads(json_str, object_hook=custom_object_hook)\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 4: CUSTOM JSON CODECS\r
================================================================================\r
`,I=[{question:"Why does serializing a custom Python class with 'json.dumps(obj)' raise a 'TypeError' by default?",shortAnswer:"Because Python's standard 'JSONEncoder' only knows how to serialize built-in primitive types (dict, list, tuple, str, int, float, bool, None) and lacks knowledge of custom class attributes.",explanation:"Custom classes must be transformed into primitive serializable dictionaries.",hint:"Standard JSONEncoder only supports primitive types by default.",level:"basic",codeExample:`class Student: pass
json.dumps(Student()) # TypeError: Object of type Student is not JSON serializable`},{question:"How do you subclass 'json.JSONEncoder' to support custom Python objects?",shortAnswer:"By creating a subclass and overriding the 'default(self, o)' method to return a serializable representation (or call 'super().default(o)').",explanation:"The standard OOP extension point for Python JSON serialization.",hint:"Subclass json.JSONEncoder and override the default(self, o) method.",level:"basic",codeExample:`class MyEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, MyClass): return o.__dict__
        return super().default(o)`},{question:"Why is calling 'return super().default(o)' at the end of custom 'default()' mandatory?",shortAnswer:"Calling 'super().default(o)' ensures that objects not handled by your custom encoder raise the standard 'TypeError: Object of type ... is not JSON serializable' instead of returning None or corrupting output.",explanation:"Maintains standard Python exception semantics.",hint:"Ensures unhandled types raise the standard TypeError.",level:"basic",codeExample:"return super().default(o) # Standard fallback"},{question:"How do you apply a custom JSONEncoder subclass to 'json.dumps()' or 'json.dump()'?",shortAnswer:"By passing the class to the 'cls' keyword argument: 'json.dumps(data, cls=MyEncoder)'.",explanation:"Instantiates and uses your custom encoder for the serialization session.",hint:"Pass cls=MyEncoder to json.dumps() or json.dump().",level:"basic",codeExample:"json.dumps(student_record, cls=EnterpriseJSONEncoder)"},{question:"What is the alternative to subclassing 'JSONEncoder' for simple serialization of custom objects?",shortAnswer:"Passing a standalone serializer function to the 'default' parameter: 'json.dumps(data, default=my_serializer_func)'.",explanation:"Lightweight alternative for quick functional serialization.",hint:"Pass a function to the default= parameter in json.dumps().",level:"basic",codeExample:"json.dumps(data, default=lambda o: o.isoformat() if isinstance(o, datetime) else str(o))"},{question:"What is 'object_hook' in 'json.loads()' and 'json.load()'?",shortAnswer:"A callback function that is invoked with the result of any decoded JSON object (dictionary), allowing automatic transformation into custom Python domain class instances.",explanation:"The primary hook for converting JSON dictionaries back into rich Python objects.",hint:"Callback called on every decoded dictionary to transform it into custom class instances.",level:"moderate",codeExample:"json.loads(json_str, object_hook=custom_student_hook)"},{question:"What is a 'Type Discriminator Tag' (e.g. '__type__' or '__model__') in custom JSON encoding?",shortAnswer:"A special metadata field injected into the JSON object during serialization that identifies the Python class name so that 'object_hook' knows which class to instantiate during deserialization.",explanation:"Enables polymorphic and multi-class deserialization pipelines.",hint:"A metadata field like '__type__': 'StudentRecord' specifying the class to reconstruct.",level:"moderate",codeExample:'{"__type__": "StudentRecord", "name": "Sourav", "fee": 28000}'},{question:"How does 'object_hook' handle nested dictionaries during deserialization?",shortAnswer:"'object_hook' operates bottom-up (innermost dictionaries first); child objects are transformed into custom class instances before their parent dictionaries are passed to 'object_hook'.",explanation:"Ensures nested domain hierarchies are constructed in correct dependency order.",hint:"Evaluates bottom-up: innermost child dictionaries are processed first.",level:"complex",codeExample:"# Child dictionaries are reconstructed before the parent dictionary"},{question:"How do you serialize a Python '@dataclass' instance using 'dataclasses.asdict()'?",shortAnswer:"'asdict(my_dataclass_instance)' recursively converts the dataclass and all its nested dataclass fields into standard Python dictionaries, which 'json.dumps()' can serialize directly.",explanation:"Standard library utility for dataclass dictionary conversion.",hint:"Use dataclasses.asdict(obj) to convert dataclasses to standard dicts.",level:"basic",codeExample:`from dataclasses import asdict
json.dumps(asdict(my_course))`},{question:"How do you serialize Python 'enum.Enum' objects in custom JSONEncoders?",shortAnswer:"By checking 'if isinstance(o, Enum): return o.value' (or 'o.name') to return the primitive enum value or name.",explanation:"Standard recipe for enum serialization.",hint:"Return o.value or o.name when isinstance(o, Enum).",level:"basic",codeExample:"if isinstance(o, Enum): return o.value"},{question:"How do you serialize 'uuid.UUID' objects in a custom JSONEncoder?",shortAnswer:"By checking 'if isinstance(o, uuid.UUID): return str(o)'.",explanation:"Converts 128-bit UUID objects into canonical 36-character hyphenated strings.",hint:"Return str(o) when isinstance(o, uuid.UUID).",level:"basic",codeExample:"if isinstance(o, uuid.UUID): return str(o)"},{question:"What is the difference between 'object_hook' and 'object_pairs_hook' in 'json.loads()'?",shortAnswer:"'object_hook' receives a decoded Python 'dict'; 'object_pairs_hook' receives the raw list of 2-tuples '[(key, value), ...]', allowing preservation of duplicate keys or OrderedDict ordering.",explanation:"object_pairs_hook provides lower-level access to key-value pairs before dict construction.",hint:"object_hook gets a dict; object_pairs_hook gets a list of (key, value) pairs.",level:"complex",codeExample:"json.loads(s, object_pairs_hook=collections.OrderedDict)"},{question:"Can 'object_hook' and 'object_pairs_hook' be used simultaneously in 'json.loads()'?",shortAnswer:"No. 'object_pairs_hook' takes precedence over 'object_hook'; specifying both causes Python to use 'object_pairs_hook' and ignore 'object_hook'.",explanation:"Mutually exclusive deserialization hooks.",hint:"No, object_pairs_hook overrides object_hook.",level:"moderate",codeExample:"# object_pairs_hook takes priority if both are specified"},{question:"How do you restore methods on a deserialized custom object?",shortAnswer:"By instantiating the actual Python class in 'object_hook' (e.g. 'return StudentRecord(**dct)'), the restored instance retains all class methods, properties, and behaviors.",explanation:"Re-binds the object to its original class __dict__ and method table.",hint:"Instantiate the class inside object_hook to restore all methods.",level:"basic",codeExample:"def hook(d): return Student(**d) # Restores all Student methods"},{question:"What happens if a custom object has private attributes (e.g. '__secret') during 'o.__dict__' serialization?",shortAnswer:"Python mangles private attributes into '_ClassName__secret' in '__dict__'; use explicit dictionary mapping or property getters to avoid exporting mangled keys.",explanation:"Private attribute name mangling in Python.",hint:"Private attributes are name-mangled into _ClassName__attr; map keys explicitly.",level:"moderate",codeExample:"# Mangles __secret into _Student__secret"},{question:"How do you handle recursive custom objects in a custom JSONEncoder?",shortAnswer:"Return a dictionary containing nested custom objects; Python's encoder will automatically re-invoke 'default()' recursively on each un-serializable child element.",explanation:"Recursive traversal is built directly into Python's JSONEncoder.",hint:"Return a dict containing child objects; default() is re-invoked recursively on children.",level:"moderate",codeExample:"# Sub-objects in returned dict are automatically passed through default()"},{question:"How do you serialize a 'pydantic.BaseModel' instance to JSON?",shortAnswer:"In modern Pydantic (v2), call 'model.model_dump_json()' (or in v1, 'model.json()') for high-performance Rust-backed serialization.",explanation:"Pydantic provides native, schema-validated JSON serialization.",hint:"Call model.model_dump_json() in Pydantic v2.",level:"basic",codeExample:"student_model.model_dump_json()"},{question:"What is the danger of blindly passing untrusted JSON to an 'object_hook' that calls 'globals()[cls_name]'?",shortAnswer:"Arbitrary Class Instantiation vulnerability: An attacker can pass '__type__': 'subprocess.Popen' to execute arbitrary commands on the system.",explanation:"Always whitelist permitted class names in a safe dictionary lookup map.",hint:"Allows attackers to instantiate dangerous classes; always whitelist allowed types.",level:"complex",codeExample:"ALLOWED_CLASSES = {'Student': Student} # Safe whitelist lookup"},{question:"How do you benchmark custom JSONEncoder performance versus standard dictionary serialization?",shortAnswer:"Using 'timeit.timeit(lambda: json.dumps(obj, cls=MyEncoder), number=1000)'.",explanation:"Measures custom serializer execution overhead.",hint:"Use timeit.timeit() to benchmark serialization speed.",level:"basic",codeExample:`import timeit
timeit.timeit(lambda: json.dumps(obj, cls=MyEncoder), number=1000)`},{question:"Can a custom 'JSONEncoder' encode non-string dictionary keys?",shortAnswer:"No. 'JSONEncoder.default()' is only called for un-serializable *values*, not keys; non-string keys must be stringified before encoding or bypassed with 'skipkeys=True'.",explanation:"Key stringification occurs before value encoding in Python's C JSON module.",hint:"default() only handles values, not dictionary keys.",level:"complex",codeExample:"# default() is only called on object values, never keys"},{question:"How do you serialize a Python 'set' deterministically in a custom encoder?",shortAnswer:"By returning 'sorted(list(o))' in 'default()', ensuring the set elements are ordered consistently in the resulting JSON array.",explanation:"Eliminates random array ordering from sets.",hint:"Return sorted(list(o)) for deterministic set ordering.",level:"basic",codeExample:"if isinstance(o, set): return sorted(list(o))"},{question:"How do you implement a unified 'Codec' class that pairs an Encoder and Decoder together?",shortAnswer:"Create a class containing an inner 'Encoder(json.JSONEncoder)' subclass and a classmethod 'object_hook(dct)', exposing '.serialize(obj)' and '.deserialize(json_str)' helper methods.",explanation:"The standard enterprise design pattern for cohesive domain serialization.",hint:"Bundle Encoder and object_hook into a single class with serialize/deserialize methods.",level:"moderate",codeExample:`class StudentCodec:
    # Contains Encoder, object_hook, serialize(), and deserialize()`},{question:"How does 'functools.singledispatch' offer an alternative to large 'if isinstance()' chains in 'default()'?",shortAnswer:"By defining a generic singledispatch serializer function with registered type handlers for each domain class, producing cleaner and modular serialization code.",explanation:"Clean architectural alternative to monolithic if-elif chains.",hint:"Use @singledispatch to register separate handlers per type.",level:"complex",codeExample:`@functools.singledispatch
def serialize_type(val): raise TypeError()`},{question:"What happens if 'default(self, o)' returns an un-serializable object without calling super()?",shortAnswer:"Python will re-invoke 'default()' recursively with the same object until reaching 'RecursionError: maximum recursion depth exceeded'.",explanation:"Always delegate unknown types to super().default(o).",hint:"Causes infinite recursion; always call super().default(o) for unhandled types.",level:"moderate",codeExample:"# Unhandled types must call super().default(o)"},{question:"What is the ultimate golden rule for Custom Python JSON Codecs?",shortAnswer:"Subclass 'json.JSONEncoder' overriding 'default()' with 'super().default(o)' fallback for encoding; inject safe '__type__' discriminator tags; and use a whitelisted 'object_hook' to reconstruct rich Python class instances with full method fidelity.",explanation:"The complete enterprise architecture for domain object persistence and API serialization.",hint:"Override default() with super fallback, use __type__ tag, and reconstruct with object_hook.",level:"basic",codeExample:"# Python Custom JSON Codec Mastery"}];function W(){const u=s.useRef([]),[l,x]=s.useState("encoder"),[d,p]=s.useState("custom"),[o,b]=s.useState("hook"),[r,h]=s.useState("object"),[S,f]=s.useState(!1),[N,a]=s.useState("Ready to serialize custom StudentPortfolio instance."),[_,c]=s.useState(null),j={className:"StudentPortfolio",student_id:"STU-101",full_name:"Sourav Mukherjee",total_fees_paid:"35000.00 (Decimal)",enrollment_dt:"2026-08-24T10:30:00 (datetime)",skill_tags:["PYTHON_CORE","AI_PRO","DECORATORS_MASTER"],certificates:[{cert_code:"CERT-PY-01",title:"Python AI Engineering",honors_tier:"PLATINUM"},{cert_code:"CERT-DB-02",title:"Database Systems",honors_tier:"GOLD"}]},v=`{
  "__model__": "StudentPortfolio",
  "student_id": "STU-101",
  "full_name": "Sourav Mukherjee",
  "total_fees_paid": 35000.0,
  "enrollment_dt": "2026-08-24T10:30:00",
  "skill_tags": [
    "AI_PRO",
    "DECORATORS_MASTER",
    "PYTHON_CORE"
  ],
  "certificates": [
    {
      "__model__": "AcademicCertificate",
      "cert_code": "CERT-PY-01",
      "title": "Python AI Engineering",
      "honors_tier": "PLATINUM"
    },
    {
      "__model__": "AcademicCertificate",
      "cert_code": "CERT-DB-02",
      "title": "Database Systems",
      "honors_tier": "GOLD"
    }
  ]
}`,y=()=>{d==="standard"?(f(!0),h("object"),a("TypeError: Object of type StudentPortfolio is not JSON serializable! (Switch to Custom Enterprise JSONEncoder)"),c(null)):(f(!1),h("json"),a("Successfully serialized custom domain object using EnterpriseJSONEncoder."),c(null))},E=()=>{if(r!=="json"&&d==="standard"){y();return}f(!1),h("restored"),a(o==="hook"?"Reconstructed StudentPortfolio instance with live callable methods via object_hook!":"Deserialized into generic Python dict. Notice: Business logic methods are NOT available!"),c(null)},w=()=>{if(r!=="restored"||o!=="hook"){a("Cannot execute method! Generic dicts have no 'calculate_merit_grant()' method. Use object_hook!");return}c("INR 8,750.00 (25% Platinum Merit Grant)"),a("Executed student.calculate_merit_grant() on restored instance successfully!")};s.useEffect(()=>{const i=new IntersectionObserver(m=>{m.forEach(g=>{g.isIntersecting&&g.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return u.current.forEach(m=>{m&&i.observe(m)}),()=>i.disconnect()},[]);const t=i=>{i&&!u.current.includes(i)&&u.current.push(i)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:t,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_004"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 4"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Working with JSON & External Data APIs"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Custom Python Objects: ",e.jsx("span",{className:"text-teal-400",children:"`JSONEncoder` & `object_hook`"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master custom object serialization and deserialization in Python: subclassing ",e.jsx("code",{className:"text-teal-300 font-mono",children:"json.JSONEncoder"}),", overriding ",e.jsx("code",{className:"text-teal-300 font-mono",children:"default()"})," to encode complex types (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"datetime"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"Decimal"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"UUID"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"set"}),"), and reconstructing rich Python class instances with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"object_hook"}),"."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🧬 Subclassing `json.JSONEncoder`"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚙️ Overriding `default(self, o)`"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🎯 Deserializing with `object_hook`"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔄 Bidirectional Dataclass Codecs"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧬"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. Custom Object Serialization & Deserialization Architecture"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["By default, Python's ",e.jsx("code",{className:"text-teal-300 font-mono",children:"json"})," module only serializes native primitive types. Custom domain classes, datetimes, decimals, and sets require a dual-stage Codec architecture:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ `JSONEncoder.default()`"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"def default(self, o): ..."}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Transforms custom classes into dictionaries containing serializable primitives and a type tag."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Type Discriminator"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:'"__type__": "StudentRecord"'}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Embeds metadata into the JSON payload identifying which Python class to reconstruct."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ `object_hook` Factory"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"object_hook=custom_hook"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Re-instantiates rich Python class instances with live methods from parsed JSON dictionaries."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Mandatory `super().default(o)` Fallback"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["When subclassing ",e.jsx("code",{className:"text-teal-300",children:"json.JSONEncoder"}),", always end your ",e.jsx("code",{className:"text-teal-300",children:"default()"})," method with ",e.jsx("code",{className:"text-cyan-300",children:"return super().default(o)"}),". This ensures unhandled objects correctly raise standard ",e.jsx("code",{className:"text-rose-400",children:"TypeError"})," instead of causing infinite recursion or corrupt output."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Encoder Subclasses, `object_hook` & Codecs"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>x("encoder"),className:n("px-3 py-1.5 rounded-lg transition-all",l==="encoder"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"`JSONEncoder` Subclass"}),e.jsx("button",{onClick:()=>x("hook"),className:n("px-3 py-1.5 rounded-lg transition-all",l==="hook"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"`object_hook` Factory"}),e.jsx("button",{onClick:()=>x("roundtrip"),className:n("px-3 py-1.5 rounded-lg transition-all",l==="roundtrip"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Bidirectional Dataclass Codec"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining encoder dispatch hierarchies, bottom-up object hooks, and dataclass round-trip codecs:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:l==="encoder"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"CUSTOM `JSONEncoder` SUBCLASS ARCHITECTURE (`default()` OVERRIDE)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"15",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"1. Custom Python Object"}),e.jsx("text",{x:"15",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"student = StudentRecord(...)"}),e.jsx("text",{x:"15",y:"75",fill:"#cbd5e1",fontSize:"8",children:"Contains Decimal, Datetime,"}),e.jsx("text",{x:"15",y:"90",fill:"#cbd5e1",fontSize:"8",children:"Sets, and nested Certificates."}),e.jsx("rect",{x:"15",y:"110",width:"220",height:"105",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"25",y:"135",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Standard Encoder:"}),e.jsx("text",{x:"25",y:"155",fill:"#fca5a5",fontSize:"8",children:"• Raises TypeError"}),e.jsx("text",{x:"25",y:"170",fill:"#fca5a5",fontSize:"8",children:"• Cannot serialize domain classes"}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"310",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. `default(self, o)` Dispatch"}),e.jsx("text",{x:"310",y:"55",fill:"#38bdf8",fontSize:"8 font-mono",children:"if isinstance(o, Student):"}),e.jsx("text",{x:"325",y:"70",fill:"#ecfdf5",fontSize:"8 font-mono",children:'return {"__type__": ...}'}),e.jsx("text",{x:"310",y:"90",fill:"#38bdf8",fontSize:"8 font-mono",children:"elif isinstance(o, Decimal):"}),e.jsx("text",{x:"325",y:"105",fill:"#ecfdf5",fontSize:"8 font-mono",children:"return float(o)"}),e.jsx("rect",{x:"310",y:"125",width:"220",height:"90",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"320",y:"150",fill:"#38bdf8",fontSize:"9 font-bold",children:"Recursive Primitive Reduction:"}),e.jsx("text",{x:"320",y:"170",fill:"#cbd5e1",fontSize:"8",children:"Converts rich objects to"}),e.jsx("text",{x:"320",y:"185",fill:"#cbd5e1",fontSize:"8",children:"native JSON data primitives."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"605",y:"30",fill:"#a7f3d0",fontSize:"11 font-bold",children:"3. Valid JSON Output"}),e.jsx("text",{x:"605",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"{"}),e.jsx("text",{x:"615",y:"75",fill:"#34d399",fontSize:"8 font-mono",children:'"__type__": "Student",'}),e.jsx("text",{x:"615",y:"95",fill:"#34d399",fontSize:"8 font-mono",children:'"fee": 35000.0'}),e.jsx("text",{x:"605",y:"115",fill:"#ecfdf5",fontSize:"8 font-mono",children:"}"}),e.jsx("rect",{x:"605",y:"130",width:"200",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"615",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"Preserved Metadata:"}),e.jsx("text",{x:"615",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Ready for network transfer"}),e.jsx("text",{x:"615",y:"190",fill:"#cbd5e1",fontSize:"8",children:"or database storage."})]})]}):l==="hook"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"`object_hook` DESERIALIZATION & DOMAIN CLASS FACTORY PIPELINE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"1. Parsed JSON Dictionaries (Bottom-Up)"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"8 font-mono",children:"{"}),e.jsx("text",{x:"35",y:"78",fill:"#34d399",fontSize:"8 font-mono font-bold",children:'"__type__": "StudentRecord",'}),e.jsx("text",{x:"35",y:"96",fill:"#ecfdf5",fontSize:"8 font-mono",children:'"student_id": "STU-101",'}),e.jsx("text",{x:"35",y:"114",fill:"#ecfdf5",fontSize:"8 font-mono",children:'"fee_paid": 35000.0'}),e.jsx("text",{x:"20",y:"132",fill:"#ecfdf5",fontSize:"8 font-mono",children:"}"}),e.jsx("rect",{x:"20",y:"150",width:"340",height:"70",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"172",fill:"#34d399",fontSize:"9 font-bold",children:"Hook Trigger:"}),e.jsx("text",{x:"30",y:"190",fill:"#cbd5e1",fontSize:"8",children:"`object_hook` receives every decoded dictionary."})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"2. Restored Domain Model Instance"}),e.jsx("text",{x:"20",y:"60",fill:"#38bdf8",fontSize:"8 font-mono font-bold",children:"return StudentRecord("}),e.jsx("text",{x:"35",y:"78",fill:"#ecfdf5",fontSize:"8 font-mono",children:'student_id=dct["student_id"],'}),e.jsx("text",{x:"35",y:"96",fill:"#ecfdf5",fontSize:"8 font-mono",children:'fee_paid=Decimal(str(dct["fee"])),'}),e.jsx("text",{x:"20",y:"114",fill:"#38bdf8",fontSize:"8 font-mono font-bold",children:")"}),e.jsx("rect",{x:"20",y:"135",width:"340",height:"85",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"30",y:"160",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Method & Property Restoration:"}),e.jsx("text",{x:"30",y:"180",fill:"#cbd5e1",fontSize:"8",children:"• `student.calculate_merit_grant()` is callable!"}),e.jsx("text",{x:"30",y:"195",fill:"#a7f3d0",fontSize:"8",children:"• Restores Decimal precision and Set uniqueness"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"BIDIRECTIONAL DATACLASS CODEC ROUND-TRIP FIDELITY"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"15",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"1. `@dataclass` Instance"}),e.jsx("text",{x:"15",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"course = AcademicCourse(...)"}),e.jsx("text",{x:"15",y:"75",fill:"#38bdf8",fontSize:"8 font-mono",children:"tier: CourseTier.ADVANCED"}),e.jsx("rect",{x:"15",y:"110",width:"220",height:"105",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"25",y:"135",fill:"#38bdf8",fontSize:"9 font-bold",children:"Dataclass Definition:"}),e.jsx("text",{x:"25",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Rich type hints and Enum"}),e.jsx("text",{x:"25",y:"170",fill:"#cbd5e1",fontSize:"8",children:"tier values in Python."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"310",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"2. `Codec.serialize(obj)`"}),e.jsx("text",{x:"310",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Uses `asdict(obj)` +"}),e.jsx("text",{x:"310",y:"75",fill:"#34d399",fontSize:"8 font-mono font-bold",children:'"__dataclass__": "Course"'}),e.jsx("rect",{x:"310",y:"110",width:"220",height:"105",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"320",y:"135",fill:"#34d399",fontSize:"9 font-bold",children:"Lossless Encoding:"}),e.jsx("text",{x:"320",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Serializes Enums to strings"}),e.jsx("text",{x:"320",y:"170",fill:"#cbd5e1",fontSize:"8",children:"and dates to ISO strings."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"605",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"3. `Codec.deserialize(str)`"}),e.jsx("text",{x:"605",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Rebuilds `AcademicCourse`"}),e.jsx("text",{x:"605",y:"75",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"`restored == original` [True]"}),e.jsx("rect",{x:"605",y:"110",width:"200",height:"105",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"615",y:"135",fill:"#c4b5fd",fontSize:"9 font-bold",children:"100% Roundtrip Match:"}),e.jsx("text",{x:"615",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Zero data loss or type drift"}),e.jsx("text",{x:"615",y:"170",fill:"#cbd5e1",fontSize:"8",children:"across serialization."})]})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Custom Object Codec & Method Restoration Lab"})]}),e.jsxs("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:["Test serializing a rich ",e.jsx("code",{className:"text-teal-300 font-mono",children:"StudentPortfolio"})," domain instance, observe how standard encoders fail vs custom encoders, and execute methods on restored class objects:"]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"1. Codec Mode Configuration"})}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"text-xs font-mono text-slate-300",children:"Serialization Encoder:"}),e.jsxs("div",{className:"flex bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:[e.jsx("button",{onClick:()=>p("custom"),className:n("flex-1 py-1.5 rounded transition-all",d==="custom"?"bg-teal-900/60 text-teal-300 font-bold border border-teal-700/80":"text-slate-400 hover:text-white"),children:"Custom `EnterpriseJSONEncoder`"}),e.jsx("button",{onClick:()=>p("standard"),className:n("flex-1 py-1.5 rounded transition-all",d==="standard"?"bg-rose-900/60 text-rose-300 font-bold border border-rose-700/80":"text-slate-400 hover:text-white"),children:"Standard `json.dumps()` (Fails)"})]})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"text-xs font-mono text-slate-300",children:"Deserialization Strategy:"}),e.jsxs("div",{className:"flex bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:[e.jsx("button",{onClick:()=>b("hook"),className:n("flex-1 py-1.5 rounded transition-all",o==="hook"?"bg-purple-900/60 text-purple-300 font-bold border border-purple-700/80":"text-slate-400 hover:text-white"),children:"Domain `object_hook` (Restores Class)"}),e.jsx("button",{onClick:()=>b("generic"),className:n("flex-1 py-1.5 rounded transition-all",o==="generic"?"bg-cyan-900/60 text-cyan-300 font-bold border border-cyan-700/80":"text-slate-400 hover:text-white"),children:"Generic `dict` (No Methods)"})]})]}),e.jsxs("div",{className:"space-y-2 pt-2",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:y,className:"flex-1 py-2.5 bg-teal-600 hover:bg-teal-500 text-white font-mono text-xs font-bold rounded-lg transition-all shadow-lg shadow-teal-950/50",children:"1. Execute `json.dumps()`"}),e.jsx("button",{onClick:E,className:"flex-1 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-xs font-bold rounded-lg transition-all shadow-lg shadow-cyan-950/50",children:"2. Execute `json.loads()`"})]}),e.jsx("button",{onClick:w,className:"w-full py-2.5 bg-purple-700 hover:bg-purple-600 text-white font-mono text-xs font-bold rounded-lg transition-all shadow-lg shadow-purple-950/50",children:"3. Invoke `student.calculate_merit_grant()`"})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:n("p-3 rounded-xl border font-mono text-xs",S?"bg-rose-950/60 border-rose-800 text-rose-300":"bg-slate-900 border-slate-800 text-teal-300"),children:[e.jsx("div",{className:"font-bold text-[11px] uppercase mb-1",children:"Codec Status:"}),e.jsx("div",{className:"text-[11px] leading-relaxed",children:N}),_&&e.jsxs("div",{className:"mt-2 p-2 bg-purple-950 rounded border border-purple-800 text-purple-200 font-bold",children:["Method Result: ",_]})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[180px] font-mono text-xs space-y-1.5",children:[e.jsx("span",{className:"text-slate-400 block font-bold text-[10px] uppercase",children:r==="object"?"Live Python Domain Instance (`StudentPortfolio`):":r==="json"?"Serialized JSON String Document (`__model__` Tagged):":o==="hook"?"Restored Python Domain Class (Methods Live):":"Deserialized Generic Python Dictionary:"}),e.jsx("pre",{className:"text-slate-200 text-[11px] leading-relaxed",children:r==="object"?JSON.stringify(j,null,2):r==="json"?v:o==="hook"?"<StudentRecord STU-101 (Sourav Mukherjee) | Fees: Decimal('35000.00') | Badges: 3 | Methods: [calculate_merit_grant]>":JSON.stringify(j,null,2)})]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Custom Object Type Handling Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Python Complex Type"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"`JSONEncoder.default()` Recipe"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"`object_hook` Restoration Recipe"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Fidelity Invariant"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"datetime / date"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`o.isoformat()`"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-mono",children:"`datetime.fromisoformat(val)`"}),e.jsx("td",{className:"py-3 px-4",children:"Preserves exact timezone & seconds"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"Decimal"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`float(o)` or `str(o)`"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-mono",children:"`Decimal(str(val))`"}),e.jsx("td",{className:"py-3 px-4",children:"Zero sub-cent currency rounding loss"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"uuid.UUID"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`str(o)`"}),e.jsx("td",{className:"py-3 px-4 text-purple-300 font-mono",children:"`uuid.UUID(val)`"}),e.jsx("td",{className:"py-3 px-4",children:"Standard 36-char canonical hex string"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"Enum"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`o.value`"}),e.jsx("td",{className:"py-3 px-4 text-amber-300 font-mono",children:"`MyEnum(val)`"}),e.jsx("td",{className:"py-3 px-4",children:"Restores type-safe enum constants"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-rose-300 font-semibold",children:"Custom Domain Class"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:'`{"__type__": "Class", ...}`'}),e.jsx("td",{className:"py-3 px-4 text-cyan-300 font-mono",children:"`Student(**dct)`"}),e.jsx("td",{className:"py-3 px-4",children:"Restores all methods & behaviors"})]})]})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating custom JSONEncoder subclasses, object_hook deserialization, dataclass codecs, and institutional portfolio suites:"}),e.jsx(k,{files:[{filename:"custom_json_encoder_subclassing.py",code:z,description:"Subclassing json.JSONEncoder and overriding default(self, o) for domain objects."},{filename:"deserializing_custom_objects_with_object_hook.py",code:D,description:"Reconstructing rich domain class instances and callable methods with object_hook."},{filename:"bidirectional_custom_codec_dataclass_pipeline.py",code:A,description:"Unified bidirectional serializer & deserializer for Python Dataclasses."},{filename:"institutional_student_portfolio_codec_suite.py",code:R,description:"Enterprise Student Portfolio Codec with multi-model restoration and method execution."}]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Omitting `super().default(o)`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["If unhandled objects are not passed to ",e.jsx("code",{className:"text-rose-300 font-mono",children:"super().default(o)"}),", Python re-invokes ",e.jsx("code",{className:"text-rose-300 font-mono",children:"default()"})," until crashing with ",e.jsx("code",{className:"text-rose-300 font-mono",children:"RecursionError"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always end ",e.jsx("code",{className:"text-emerald-300",children:"default()"})," with ",e.jsx("code",{className:"text-emerald-300",children:"return super().default(o)"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Security RCE with `globals()[type]`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Blindly instantiating classes with ",e.jsx("code",{className:"text-amber-300 font-mono",children:'globals()[dct["__type__"]]'})," in ",e.jsx("code",{className:"text-amber-300 font-mono",children:"object_hook"})," allows attackers to inject malicious classes."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always use an explicit whitelist dictionary of approved domain classes."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Private Attribute Name Mangling"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Serializing private attributes with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"o.__dict__"})," outputs mangled keys like ",e.jsx("code",{className:"text-purple-300 font-mono",children:"_Student__secret"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Explicitly map domain properties or use dataclasses with ",e.jsx("code",{className:"text-emerald-300",children:"asdict()"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Loss of Methods on Generic Dicts"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Deserializing without ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"object_hook"})," produces raw dicts; calling ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"data.calculate_grant()"})," raises ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"AttributeError: 'dict' object has no attribute"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"object_hook"})," to restore actual class instances."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering `JSONEncoder`, `default()`, `object_hook`, `object_pairs_hook`, dataclass serialization, and domain object restoration:"}),e.jsx(O,{questions:I})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with custom JSONEncoder recipes, object_hook patterns, and dataclass codec templates:"}),e.jsx("div",{className:"mb-10",children:e.jsx(C,{content:P,filename:"python_topic4_custom_json_codecs_notes.txt",title:"Print Topic 4 Study Notes"})}),e.jsx(T,{})]})]})]})}export{W as default};
