import{b as n,j as e,bg as a}from"./vendor-react-core-Doz9nIC6.js";import{P as F}from"./PythonFileLoader-hCi5osN-.js";import{P as H}from"./PlainTextPrint-C08xhKA4.js";import{F as L}from"./FAQTemplate-CkSqDH4B.js";import{T as U}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const z=`# topic4_files/any_and_all_short_circuit_mechanics.py\r
# Module: 003_005_advance-comprehensions\r
# Topic: any() and all() predicates for quick boolean checks\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 4 - File 1: \`any()\` and \`all()\` Short-Circuit Mechanics & Truthiness Rules\r
Demonstrates:\r
  1. Fundamental truth tables for \`any(iterable)\` and \`all(iterable)\`\r
  2. Short-circuit evaluation: halting immediately on first decisive boolean value\r
  3. The Vacuous Truth rule on empty sequences: \`all([]) is True\` and \`any([]) is False\`\r
"""\r
\r
def demonstrate_any_all_mechanics():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - ANY() AND ALL() SHORT-CIRCUIT MECHANICS")\r
    print("=" * 70)\r
\r
    # 1. Fundamental any() and all() Truth Tables:\r
    bool_list_1 = [True, True, True]\r
    bool_list_2 = [True, False, True]\r
    bool_list_3 = [False, False, False]\r
\r
    print("1. Truth Table Comparison:")\r
    print(f"   * [True, True, True]   -> all(): {all(bool_list_1):<5} | any(): {any(bool_list_1)}")\r
    print(f"   * [True, False, True]  -> all(): {all(bool_list_2):<5} | any(): {any(bool_list_2)}")\r
    print(f"   * [False, False, False]-> all(): {all(bool_list_3):<5} | any(): {any(bool_list_3)}\\n")\r
\r
    # 2. Short-Circuit Evaluation Demonstration:\r
    # Generator logging to prove execution halts early\r
    print("2. Short-Circuiting Proof (Execution Halts on First Decisive Item):")\r
    eval_log = []\r
\r
    def check_score(score: int, name: str) -> bool:\r
        eval_log.append(f"Tested {name} ({score})")\r
        return score >= 90\r
\r
    candidates = [\r
        {"name": "Sourav", "score": 95},   # True (score >= 90) -> any() short-circuits here!\r
        {"name": "Priyanka", "score": 88},\r
        {"name": "Debolina", "score": 96}\r
    ]\r
\r
    eval_log.clear()\r
    has_honors = any(check_score(c["score"], c["name"]) for c in candidates)\r
    print(f"   * any() result: {has_honors}")\r
    print(f"   * any() Short-circuit trace: {eval_log} (Only 1 item tested, rest skipped!)\\n")\r
\r
    eval_log.clear()\r
    all_honors = all(check_score(c["score"], c["name"]) for c in candidates)\r
    print(f"   * all() result: {all_honors}")\r
    print(f"   * all() Short-circuit trace: {eval_log} (Halts immediately on Priyanka at index 1!)\\n")\r
\r
    # 3. Vacuous Truth on Empty Sequences:\r
    print("3. Empty Collection Truthiness Invariant (Vacuous Truth):")\r
    empty_list = []\r
    print(f"   * all([]) == {all(empty_list)} (Vacuous Truth: all elements in empty set trivially satisfy condition)")\r
    print(f"   * any([]) == {any(empty_list)} (False: no element exists to satisfy condition)")\r
\r
    print(r"""\r
Short-Circuit Invariants:\r
  1. \`any()\` halts immediately on the first \`True\` value.\r
  2. \`all()\` halts immediately on the first \`False\` value.\r
  3. \`all([])\` is ALWAYS \`True\`! Check \`if seq and all(...)\` if empty lists must fail validation.\r
""")\r
    print("[PASSED] any() and all() Mechanics Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_any_all_mechanics()\r
`,V=`# topic4_files/combining_any_all_with_generator_expressions.py\r
# Module: 003_005_advance-comprehensions\r
# Topic: any() and all() predicates for quick boolean checks\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 4 - File 2: Generator Expressions with \`any()\` and \`all()\` (O(1) Memory)\r
Demonstrates:\r
  1. The critical hazard of using List Comprehensions inside \`any()\` / \`all()\` (destroys short-circuiting!)\r
  2. Generator expressions enable instantaneous O(1) memory short-circuit exits\r
  3. Multi-field data validation pipelines\r
"""\r
\r
import timeit\r
from typing import Dict, Any, List\r
\r
def demonstrate_generators_with_any_all():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - ANY/ALL WITH GENERATOR EXPRESSIONS")\r
    print("=" * 70)\r
\r
    # 1. Performance & Short-Circuit Comparison on 1,000,000 Elements\r
    print("1. Performance: Generator Expression vs List Comprehension inside \`any()\`:")\r
    n_items = 1_000_000\r
\r
    # Target is right at index 0 (immediate match):\r
    # Generator: \`(x == 0 for x in range(n_items))\` -> Halts after 1 item!\r
    # List: \`[x == 0 for x in range(n_items)]\` -> FORCED to build 1,000,000-element list in RAM before calling any()!\r
    t_gen = timeit.timeit(lambda: any(x == 0 for x in range(n_items)), number=10)\r
    t_list = timeit.timeit(lambda: any([x == 0 for x in range(n_items)]), number=10)\r
\r
    print(f"   * Generator: \`any(x == 0 for x in ...)\`  : {t_gen:.6f}s (Instant short-circuit, O(1) RAM)")\r
    print(f"   * List Comp: \`any([x == 0 for x in ...])\`: {t_list:.6f}s (Builds full 1M list, negates short-circuit!)")\r
    print(f"   * Speedup Factor                         : ~{int(t_list / t_gen):,}x faster with generator!\\n")\r
\r
    # 2. Multi-Condition Validation Pipeline using \`all()\`\r
    print("2. Multi-Condition Student Admission Validation Pipeline:")\r
    candidate_profile = {\r
        "id": "STU-101",\r
        "name": "Sourav Mukherjee",\r
        "age": 21,\r
        "marks_10th": 85.0,\r
        "marks_12th": 88.5,\r
        "has_aadhaar": True,\r
        "fee_deposit_cleared": True\r
    }\r
\r
    # Declarative validation rules list:\r
    validation_checks = [\r
        candidate_profile["age"] >= 18,\r
        candidate_profile["marks_10th"] >= 60.0,\r
        candidate_profile["marks_12th"] >= 60.0,\r
        candidate_profile["has_aadhaar"] is True,\r
        candidate_profile["fee_deposit_cleared"] is True\r
    ]\r
\r
    is_admitted = all(validation_checks)\r
    print(f"   * Candidate: {candidate_profile['name']}")\r
    print(f"   * Admission Status: {'[APPROVED]' if is_admitted else '[REJECTED]'}")\r
\r
    # Check if ANY critical flags are missing:\r
    missing_flags = any(v is False for v in [candidate_profile["has_aadhaar"], candidate_profile["fee_deposit_cleared"]])\r
    print(f"   * Has Missing Regulatory Flags: {missing_flags}")\r
\r
    print(r"""\r
Optimization Invariants:\r
  1. NEVER use square brackets inside \`any([...])\` or \`all([...])\`.\r
  2. Always use generator parentheses \`any(cond for x in seq)\` to ensure short-circuit evaluation.\r
""")\r
    print("[PASSED] Generator Expressions with any() and all() Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_generators_with_any_all()\r
`,G=`# topic4_files/matrix_and_nested_collection_predicates.py\r
# Module: 003_005_advance-comprehensions\r
# Topic: any() and all() predicates for quick boolean checks\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 4 - File 3: Matrix & Nested Collection Predicates\r
Demonstrates:\r
  1. Validating 2D matrices using nested \`all()\` / \`any()\` predicates\r
  2. Checking dictionary key completeness against mandatory schema specifications\r
  3. Verifying sub-collection subset relations and disjointness\r
"""\r
\r
from typing import List, Dict, Set\r
\r
def demonstrate_nested_collection_predicates():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - NESTED COLLECTION & MATRIX PREDICATES")\r
    print("=" * 70)\r
\r
    # 1. 2D Matrix Validation: Check if ALL elements in ALL rows are positive non-zero\r
    print("1. Validating 2D Matrix Elements (\`all(all(x > 0 for x in row) for row in matrix)\`):")\r
    score_matrix_valid = [\r
        [85, 92, 78],\r
        [90, 88, 95],\r
        [72, 80, 84]\r
    ]\r
    score_matrix_corrupt = [\r
        [85, 92, 78],\r
        [90, -5, 95],   # Negative score!\r
        [72, 80, 84]\r
    ]\r
\r
    is_m1_valid = all(all(score >= 0 for score in row) for row in score_matrix_valid)\r
    is_m2_valid = all(all(score >= 0 for score in row) for row in score_matrix_corrupt)\r
\r
    print(f"   * Valid Matrix Pass Check   : {is_m1_valid}")\r
    print(f"   * Corrupt Matrix Pass Check : {is_m2_valid}\\n")\r
\r
    # 2. Mandatory Schema Completeness Check across Dictionary Records:\r
    print("2. Verifying Mandatory Key Completeness across Student Payload:")\r
    mandatory_fields = {"id", "name", "email", "course"}\r
\r
    incoming_payloads = [\r
        {"id": "STU-101", "name": "Sourav", "email": "sourav@test.com", "course": "PY-AI"},\r
        {"id": "STU-102", "name": "Priyanka", "email": "priya@test.com", "course": "DS-ML"},\r
        {"id": "STU-103", "name": "Rahul", "course": "WEB-DEV"}  # Missing 'email'!\r
    ]\r
\r
    # Rule: All payloads must contain all mandatory fields\r
    all_payloads_compliant = all(\r
        mandatory_fields.issubset(record.keys())\r
        for record in incoming_payloads\r
    )\r
    print(f"   * Batch Schema Compliance Check: {all_payloads_compliant} (Failed because STU-103 lacks 'email')")\r
\r
    # Identify non-compliant records using any() in comprehension:\r
    quarantined = [\r
        rec["id"] for rec in incoming_payloads\r
        if not mandatory_fields.issubset(rec.keys())\r
    ]\r
    print(f"   * Quarantined Record IDs        : {quarantined}\\n")\r
\r
    # 3. Disjoint Sub-Collection Verification:\r
    # Check if ANY student is enrolled in conflicting afternoon batches\r
    batch_a_students = {"STU-101", "STU-102", "STU-103"}\r
    batch_b_students = {"STU-104", "STU-105", "STU-101"} # STU-101 in both!\r
\r
    has_clash = any(student in batch_b_students for student in batch_a_students)\r
    print(f"3. Cross-Batch Collision Check: {has_clash} (Found shared student STU-101)")\r
\r
    print(r"""\r
Nested Predicate Rules:\r
  1. \`all(all(...) for row in M)\` guarantees entire 2D table conforms to validation invariant.\r
  2. \`mandatory_keys.issubset(doc.keys())\` provides fast O(1) set-based schema verification.\r
""")\r
    print("[PASSED] Nested Collection & Matrix Predicates Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_nested_collection_predicates()\r
`,Y=`# topic4_files/institutional_eligibility_and_compliance_validator.py\r
# Module: 003_005_advance-comprehensions\r
# Topic: any() and all() predicates for quick boolean checks\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 4 - File 4: Institutional Eligibility & Compliance Validator (Case Study)\r
Demonstrates:\r
  1. Production admission compliance engine powered by short-circuiting \`all()\` and \`any()\`\r
  2. Multi-rule evaluation: mandatory documentation, academic cutoffs, and fee clearance\r
  3. Generating granular compliance audit reports\r
"""\r
\r
from decimal import Decimal\r
from typing import Dict, Any, List, Tuple\r
\r
class InstitutionalAdmissionComplianceEngine:\r
    """Production validator using any() and all() for institutional admission audits."""\r
\r
    MANDATORY_DOCUMENTS = {"AADHAAR_CARD", "10TH_MARKSHEET", "12TH_MARKSHEET", "PASSPORT_PHOTO"}\r
    MIN_ACADEMIC_PERCENTAGE = Decimal("60.0")\r
    MIN_INITIAL_FEE = Decimal("15000.00")\r
\r
    def __init__(self, applications: List[Dict[str, Any]]):\r
        self.applications = applications\r
\r
    def validate_candidate(self, candidate: Dict[str, Any]) -> Tuple[bool, List[str]]:\r
        """Validates a single candidate using short-circuiting predicates."""\r
        rejection_reasons = []\r
\r
        # Check 1: Mandatory Document Verification (all)\r
        docs_submitted = set(candidate.get("submitted_documents", []))\r
        if not self.MANDATORY_DOCUMENTS.issubset(docs_submitted):\r
            missing = self.MANDATORY_DOCUMENTS - docs_submitted\r
            rejection_reasons.append(f"Missing mandatory documents: {list(missing)}")\r
\r
        # Check 2: Academic Cutoff Across All Recorded Subjects (all)\r
        subject_scores = [Decimal(str(s)) for s in candidate.get("subject_scores", [])]\r
        if not subject_scores or any(score < self.MIN_ACADEMIC_PERCENTAGE for score in subject_scores):\r
            rejection_reasons.append(f"Subject score below minimum {self.MIN_ACADEMIC_PERCENTAGE}% cutoff")\r
\r
        # Check 3: Fee Deposit Verification\r
        fee_paid = Decimal(str(candidate.get("fee_deposit", "0")))\r
        if fee_paid < self.MIN_INITIAL_FEE:\r
            rejection_reasons.append(f"Fee deposit INR {fee_paid} below threshold INR {self.MIN_INITIAL_FEE}")\r
\r
        # Check 4: Disciplinary Blacklist Check (any)\r
        has_disciplinary_flag = candidate.get("has_disciplinary_action", False)\r
        if has_disciplinary_flag:\r
            rejection_reasons.append("Candidate flagged for previous institutional disciplinary action")\r
\r
        is_eligible = len(rejection_reasons) == 0\r
        return is_eligible, rejection_reasons\r
\r
    def evaluate_cohort(self) -> Dict[str, Any]:\r
        """Evaluates entire cohort."""\r
        admitted = []\r
        rejected = []\r
\r
        for app in self.applications:\r
            eligible, reasons = self.validate_candidate(app)\r
            if eligible:\r
                admitted.append(app)\r
            else:\r
                rejected.append({"candidate": app["name"], "app_id": app["app_id"], "reasons": reasons})\r
\r
        # Cohort level predicate checks:\r
        # Check if ALL admitted candidates are cleared for enrollment\r
        is_cohort_100_percent_compliant = all(self.validate_candidate(a)[0] for a in admitted)\r
        # Check if ANY candidate has a scholarship recommendation\r
        has_scholarship_candidate = any(\r
            Decimal(str(a.get("scholarship_score", 0))) >= Decimal("90.0")\r
            for a in admitted\r
        )\r
\r
        return {\r
            "total_applicants": len(self.applications),\r
            "total_admitted": len(admitted),\r
            "total_rejected": len(rejected),\r
            "cohort_compliant": is_cohort_100_percent_compliant,\r
            "has_scholarship_candidate": has_scholarship_candidate,\r
            "admitted_roster": admitted,\r
            "rejected_audit": rejected\r
        }\r
\r
\r
def demonstrate_compliance_validator():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - INSTITUTIONAL COMPLIANCE & ELIGIBILITY VALIDATOR")\r
    print("=" * 70)\r
\r
    cohort_applications = [\r
        {\r
            "app_id": "APP-2026-01",\r
            "name": "Sourav Mukherjee",\r
            "submitted_documents": ["AADHAAR_CARD", "10TH_MARKSHEET", "12TH_MARKSHEET", "PASSPORT_PHOTO"],\r
            "subject_scores": [95.0, 92.5, 88.0, 94.0],\r
            "fee_deposit": "28500.00",\r
            "has_disciplinary_action": False,\r
            "scholarship_score": 92.5\r
        },\r
        {\r
            "app_id": "APP-2026-02",\r
            "name": "Priyanka Sen",\r
            "submitted_documents": ["AADHAAR_CARD", "10TH_MARKSHEET", "12TH_MARKSHEET", "PASSPORT_PHOTO"],\r
            "subject_scores": [88.0, 85.0, 90.0, 82.0],\r
            "fee_deposit": "32000.00",\r
            "has_disciplinary_action": False,\r
            "scholarship_score": 86.0\r
        },\r
        {\r
            "app_id": "APP-2026-03",\r
            "name": "Rahul Verma",\r
            "submitted_documents": ["AADHAAR_CARD", "10TH_MARKSHEET"],  # Missing 12th & photo!\r
            "subject_scores": [55.0, 70.0, 48.0],  # Scores below 60%!\r
            "fee_deposit": "10000.00",  # Below 15,000 threshold!\r
            "has_disciplinary_action": True,  # Disciplinary flag!\r
            "scholarship_score": 50.0\r
        }\r
    ]\r
\r
    engine = InstitutionalAdmissionComplianceEngine(cohort_applications)\r
    report = engine.evaluate_cohort()\r
\r
    print("1. Cohort Admission Audit Summary:")\r
    print(f"   * Total Applicants Evaluated : {report['total_applicants']}")\r
    print(f"   * Approved for Admission     : {report['total_admitted']}")\r
    print(f"   * Rejected Candidates        : {report['total_rejected']}")\r
    print(f"   * All Admitted 100% Compliant: {report['cohort_compliant']}")\r
    print(f"   * Has Scholarship Candidates : {report['has_scholarship_candidate']}\\n")\r
\r
    print("2. Rejection Audit Log Details:")\r
    for rej in report["rejected_audit"]:\r
        print(f"   * [REJECTED] {rej['app_id']} ({rej['candidate']}):")\r
        for r in rej["reasons"]:\r
            print(f"     - {r}")\r
\r
    print("\\n[PASSED] Institutional Eligibility & Compliance Validator Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_compliance_validator()\r
`,B=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
          PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_005: ADVANCED COMPREHENSIONS\r
           TOPIC 4: ANY() AND ALL() PREDICATES FOR QUICK BOOLEAN CHECKS\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. SHORT-CIRCUIT EVALUATION\r
--------------------------------------------------------------------------------\r
  * any(generator) : Halts immediately on the FIRST True value\r
  * all(generator) : Halts immediately on the FIRST False value\r
\r
--------------------------------------------------------------------------------\r
2. VACUOUS TRUTH ON EMPTY LISTS\r
--------------------------------------------------------------------------------\r
  * all([]) == True   (Vacuously True: every element in empty set passes)\r
  * any([]) == False  (False: no element exists to pass)\r
  * Defensive Check: if seq and all(cond for x in seq): ...\r
\r
--------------------------------------------------------------------------------\r
3. GENERATOR VS LIST COMPREHENSION TRAP\r
--------------------------------------------------------------------------------\r
  * Correct   : any(check(x) for x in stream)    # O(1) Memory, short-circuits\r
  * DANGEROUS : any([check(x) for x in stream])  # O(N) Memory, NO short-circuit!\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 4: ANY AND ALL PREDICATES\r
================================================================================\r
`,W=[{question:"What is the fundamental difference between 'any(iterable)' and 'all(iterable)' in Python?",shortAnswer:"'any()' returns True if AT LEAST ONE element in the iterable is truthy; 'all()' returns True ONLY IF EVERY element in the iterable is truthy.",explanation:"The two core boolean aggregation predicates in Python.",hint:"any() needs at least one True; all() requires every element to be True.",level:"basic",codeExample:"any([False, True, False]) # True; all([True, True, False]) # False"},{question:"How does 'Short-Circuit Evaluation' operate in 'any()' and 'all()'?",shortAnswer:"'any()' stops iterating immediately upon finding the first 'True' value; 'all()' stops iterating immediately upon finding the first 'False' value, leaving remaining elements unevaluated.",explanation:"Optimizes CPU cycles and prevents unnecessary downstream evaluations.",hint:"any() halts on first True; all() halts on first False.",level:"basic",codeExample:"any(x == 0 for x in range(1_000_000)) # Halts after testing 0!"},{question:"What is 'Vacuous Truth' and why does 'all([])' evaluate to 'True' in Python?",shortAnswer:"In formal mathematical logic, a universal claim about all members of an empty set is vacuously true because there are no counterexamples (no elements that are False) to invalidate it.",explanation:"A fundamental mathematical and programming principle.",hint:"There are no False elements in an empty list, so all([]) evaluates to True.",level:"moderate",codeExample:"all([]) # True; any([]) # False"},{question:"How do you prevent an empty list from falsely passing an 'all()' validation guard?",shortAnswer:"Check that the sequence is non-empty before calling 'all()': 'if sequence and all(condition for x in sequence): ...'.",explanation:"Defensive validation against vacuous truth.",hint:"Use 'if seq and all(...)'.",level:"basic",codeExample:"is_valid = bool(scores) and all(s >= 60 for s in scores)"},{question:"Why is writing 'any([check(x) for x in stream])' a major performance anti-pattern?",shortAnswer:"Using square brackets creates a full List Comprehension in memory first, executing 'check(x)' on EVERY item and defeating short-circuiting; using a generator expression 'any(check(x) for x in stream)' halts on the first match.",explanation:"Eager list allocation negates short-circuit optimization.",hint:"Square brackets build the entire list first, defeating short-circuiting.",level:"moderate",codeExample:"# BAD: any([f(x) for x in data]) -> GOOD: any(f(x) for x in data)"},{question:"How do De Morgan's Laws apply to 'any()' and 'all()' in Python?",shortAnswer:"'not all(conditions)' is logically equivalent to 'any(not c for c in conditions)', and 'not any(conditions)' is logically equivalent to 'all(not c for c in conditions)'.",explanation:"Boolean duality transformations.",hint:"not all(P) == any(not P); not any(P) == all(not P).",level:"moderate",codeExample:"not all(x > 0 for x in nums) == any(x <= 0 for x in nums)"},{question:"How do you check if all elements in a 2D matrix are greater than zero?",shortAnswer:"Using nested generator expressions with 'all()': 'all(all(cell > 0 for cell in row) for row in matrix)'.",explanation:"Validates 2D matrices across all rows and columns.",hint:"Use all(all(c > 0 for c in row) for row in matrix).",level:"basic",codeExample:"all(all(x >= 0 for x in row) for row in score_matrix)"},{question:"How do you verify that a dictionary contains ALL required keys using 'all()'?",shortAnswer:"Using 'all(key in my_dict for key in required_keys)' (or 'required_keys.issubset(my_dict.keys())').",explanation:"Validates schema completeness before processing payloads.",hint:"Use all(k in d for k in required_keys).",level:"basic",codeExample:"has_all_keys = all(k in student for k in ['id', 'name', 'course'])"},{question:"What is the best-case and worst-case time complexity of 'any()' over a sequence of N elements?",shortAnswer:"Best-case is O(1) if the very first element is True; worst-case is O(N) if all elements are False or the only True element is at the end.",explanation:"Short-circuit algorithmic complexity.",hint:"O(1) best case (first item True); O(N) worst case (no True items).",level:"basic",codeExample:"# Best case O(1), Worst case O(N)"},{question:"How do you check if at least one string in a list contains whitespace?",shortAnswer:"Using 'any(' ' in s for s in string_list)'.",explanation:"Simple substring containment test.",hint:"Use any(' ' in s for s in list).",level:"basic",codeExample:"has_spaces = any(' ' in tag for tag in skill_tags)"},{question:"How do you verify that all numbers in a list are strictly positive and even?",shortAnswer:"Using 'all(x > 0 and x % 2 == 0 for x in numbers)'.",explanation:"Combines multiple boolean conditions within a single generator predicate.",hint:"Combine conditions with 'and' inside generator.",level:"basic",codeExample:"all(x > 0 and x % 2 == 0 for x in [2, 4, 6, 8])"},{question:"Can 'any()' and 'all()' be passed custom objects or classes?",shortAnswer:"Yes. Python tests each object for truthiness using its '__bool__()' or '__len__()' dunder method.",explanation:"Truth value testing protocol in Python.",hint:"Yes, Python evaluates truthiness via __bool__() or __len__().",level:"basic",codeExample:"all([Student(active=True), Student(active=True)])"},{question:"How do you check if two sets share any common elements using 'any()'?",shortAnswer:"Using 'any(item in set_b for item in set_a)' (or 'bool(set_a & set_b)').",explanation:"Tests for set intersection / overlap.",hint:"Use any(x in set_b for x in set_a) or bool(a & b).",level:"basic",codeExample:"has_overlap = any(s in batch_b for s in batch_a)"},{question:"How do you check if a candidate meets at least one scholarship prerequisite?",shortAnswer:"Using 'any(prereq in candidate_skills for prereq in required_prereqs)'.",explanation:"Multi-option eligibility verification.",hint:"Use any(req in candidate_skills for req in required).",level:"basic",codeExample:"any(course in completed for course in ['AI-101', 'ML-201'])"},{question:"Why should you avoid creating a list inside 'all()' when validating a database query?",shortAnswer:"Building an eager list queries/evaluates all rows into RAM; a generator halts on the very first invalid row without querying the remaining rows.",explanation:"Database I/O optimization via lazy generator streaming.",hint:"Generator halts on first invalid row without processing remaining database rows.",level:"moderate",codeExample:"all(row.is_valid() for row in db_cursor) # Streams O(1)"},{question:"How do you verify that all strings in a collection are non-empty?",shortAnswer:"Using 'all(bool(s.strip()) for s in strings)' or 'all(s.strip() != '' for s in strings)'.",explanation:"Validates string collections against whitespace-only values.",hint:"Use all(bool(s.strip()) for s in strings).",level:"basic",codeExample:"all(bool(name.strip()) for name in candidate_names)"},{question:"What is the return type of 'any()' and 'all()'?",shortAnswer:"Always a pure boolean primitive: 'bool' ('True' or 'False').",explanation:"Guaranteed boolean return type.",hint:"Always returns True or False (type bool).",level:"basic",codeExample:"type(any([1, 2])) # <class 'bool'>"},{question:"How do you check if an IP address is valid (all 4 octets between 0 and 255)?",shortAnswer:"Using 'octets = ip.split('.')' followed by 'len(octets) == 4 and all(o.isdigit() and 0 <= int(o) <= 255 for o in octets)'.",explanation:"Classic network validation recipe.",hint:"Split by dot, check length == 4, and use all() on integer range 0..255.",level:"moderate",codeExample:"len(parts) == 4 and all(0 <= int(p) <= 255 for p in parts if p.isdigit())"},{question:"How do you check if ANY transaction in a ledger is flagged as fraudulent?",shortAnswer:"Using 'any(tx['risk_score'] > 0.85 for tx in ledger)'.",explanation:"Fraud detection telemetry scan.",hint:"Use any(tx['risk_score'] > threshold for tx in transactions).",level:"basic",codeExample:"has_fraud = any(tx['is_fraud'] for tx in transaction_ledger)"},{question:"How do you check if ALL values in a dictionary meet a criterion?",shortAnswer:"Using 'all(val >= threshold for val in my_dict.values())'.",explanation:"Iterates over dictionary values directly.",hint:"Use all(v >= threshold for v in d.values()).",level:"basic",codeExample:"all(fee >= 10000 for fee in course_fees.values())"},{question:"Can 'any()' and 'all()' be used with infinite iterators (like 'itertools.count()')?",shortAnswer:"Yes, provided the short-circuit condition is met; 'any(x == 5 for x in itertools.count())' terminates at 5, but if the condition is never met, it will loop indefinitely.",explanation:"Short-circuiting on infinite generator streams.",hint:"Yes, but they will hang indefinitely if the short-circuit condition is never triggered.",level:"complex",codeExample:"any(x == 10 for x in itertools.count()) # Terminates cleanly at 10"},{question:"How do you verify that a list is sorted in strictly ascending order using 'all()'?",shortAnswer:"Using 'all(seq[i] < seq[i+1] for i in range(len(seq) - 1))'.",explanation:"Pairwise sorted order verification.",hint:"Compare adjacent elements: all(a < b for a, b in zip(seq, seq[1:])).",level:"moderate",codeExample:"all(arr[i] <= arr[i+1] for i in range(len(arr) - 1))"},{question:"What is the cognitive benefit of using 'all()' vs writing a manual 'for' loop with boolean flags?",shortAnswer:"'all()' expresses the declarative intent in a single expressive statement, eliminating 5 lines of boilerplate flag tracking ('flag = True; for x in seq: if not cond: flag = False; break').",explanation:"Declarative code clarity.",hint:"Replaces boilerplate flag variables with a single declarative expression.",level:"basic",codeExample:"# all(cond for x in seq) vs 5 lines of flag boilerplate"},{question:"How do you check if at least one student in a batch received distinction honors?",shortAnswer:"Using 'any(s['score'] >= 90 for s in batch_students)'.",explanation:"Batch threshold telemetry predicate.",hint:"Use any(s['score'] >= 90 for s in students).",level:"basic",codeExample:"has_distinction = any(s['score'] >= 90 for s in students)"},{question:"What is the ultimate golden rule for using 'any()' and 'all()' in Python?",shortAnswer:"Always pass Generator Expressions without square brackets for instant O(1) memory short-circuit evaluation, guard against vacuous truth with 'if seq and all(...)', and use them to replace verbose flag-tracking loops.",explanation:"The complete enterprise guideline for boolean predicate operations in Python.",hint:"Always use generator expressions, guard against vacuous truth on empty sequences, and short-circuit early.",level:"basic",codeExample:"# Python Boolean Predicate Mastery"}];function ne(){const p=n.useRef([]),[i,u]=n.useState("shortCircuit"),[c,N]=n.useState(92),[d,T]=n.useState(88),[x,w]=n.useState(76),[m,A]=n.useState(94),[f,S]=n.useState(!0),[y,C]=n.useState(!0),[b,E]=n.useState(!0),[g,k]=n.useState(!0),[l,P]=n.useState(25e3),[_,R]=n.useState(!1),v=[c,d,x,m],D=v.every(t=>t>=60),I=f&&y&&b&&g,M=l>=15e3,O=!_;let r=null;D?I?M?O||(r="Disciplinary Rule: Flagged for previous institutional action"):r="Financial Rule: Fee deposit below INR 15,000 threshold":r="Documentation Rule: Mandatory KYC documents missing":r="Academic Rule: Score below 60% minimum cutoff";const o=!r,q=`# Declarative validation with all() and any():
is_academic_valid = all(score >= 60 for score in [${v.join(", ")}])
is_docs_valid = all([${f}, ${y}, ${b}, ${g}])
is_fee_valid = ${l} >= 15000
has_no_disciplinary = not ${_}

# Final evaluation short-circuits on first False:
is_admitted = all([
    is_academic_valid,
    is_docs_valid,
    is_fee_valid,
    has_no_disciplinary
])`;n.useEffect(()=>{const t=new IntersectionObserver(h=>{h.forEach(j=>{j.isIntersecting&&j.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return p.current.forEach(h=>{h&&t.observe(h)}),()=>t.disconnect()},[]);const s=t=>{t&&!p.current.includes(t)&&p.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:s,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_005"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 4"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Advanced Comprehensions & Functional Python"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Boolean Predicates: ",e.jsx("span",{className:"text-teal-400",children:"any() and all()"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master Python's built-in boolean aggregators: short-circuit evaluation mechanics, vacuous truth on empty sequences (",e.jsx("code",{className:"text-teal-300 font-mono",children:"all([]) == True"}),"), combining predicates with generator expressions for ",e.jsx("code",{className:"text-teal-300 font-mono",children:"O(1)"})," memory efficiency, multi-dimensional matrix validation, and institutional eligibility rules."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ Short-Circuit Halting"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📭 `all([])` Vacuous Truth"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🚀 `O(1)` Generator Streams"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Schema Completeness"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚖️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. Short-Circuit Evaluation & Vacuous Truth"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:[e.jsx("code",{className:"text-teal-300 font-mono",children:"any()"})," and ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"all()"})," allow declarative multi-condition validation across collections with zero boilerplate loop flags:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg space-y-2",children:[e.jsxs("div",{className:"text-teal-400 font-bold text-sm flex items-center gap-2",children:[e.jsx("span",{children:"⚡"})," `any(iterable)` (Logical OR)"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Returns ",e.jsx("code",{className:"text-teal-300 font-mono",children:"True"})," as soon as the first truthy item is encountered. Stops evaluating further items immediately."]}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block",children:"any([]) == False"})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg space-y-2",children:[e.jsxs("div",{className:"text-cyan-400 font-bold text-sm flex items-center gap-2",children:[e.jsx("span",{children:"🛡️"})," `all(iterable)` (Logical AND)"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Returns ",e.jsx("code",{className:"text-rose-400 font-mono",children:"False"})," as soon as the first falsy item is encountered. Returns ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"True"})," if all pass."]}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block",children:"all([]) == True (Vacuous Truth)"})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Vacuous Truth & Empty List Guard"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Because there are no ",e.jsx("code",{className:"text-rose-400",children:"False"})," items in an empty sequence, ",e.jsx("code",{className:"text-cyan-300",children:"all([])"})," evaluates to ",e.jsx("code",{className:"text-emerald-400",children:"True"}),". In admission or security validators, always guard with ",e.jsx("code",{className:"text-teal-300",children:"if scores and all(s >= 60 for s in scores): ..."})," to prevent empty candidates from passing!"]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Short-Circuiting, Vacuous Truth & Memory"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>u("shortCircuit"),className:a("px-3 py-1.5 rounded-lg transition-all",i==="shortCircuit"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Short-Circuit Halting"}),e.jsx("button",{onClick:()=>u("vacuousTruth"),className:a("px-3 py-1.5 rounded-lg transition-all",i==="vacuousTruth"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Vacuous Truth `all([])`"}),e.jsx("button",{onClick:()=>u("memoryImpact"),className:a("px-3 py-1.5 rounded-lg transition-all",i==="memoryImpact"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Generator vs List Memory"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining short-circuit exit waveforms, empty set truth tables, and generator streaming memory:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:i==="shortCircuit"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"SHORT-CIRCUIT HALTING MECHANICS (`any()` VS `all()`)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"`any(x >= 90 for x in [70, 95, 88, 99])`"}),e.jsx("text",{x:"20",y:"65",fill:"#fca5a5",fontSize:"8 font-mono",children:"1. Item 0: 70 >= 90 -> False (Continue)"}),e.jsx("text",{x:"20",y:"85",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"2. Item 1: 95 >= 90 -> True (HALT & RETURN True!)"}),e.jsx("text",{x:"20",y:"105",fill:"#64748b",fontSize:"8 font-mono",children:"3. Item 2: 88 (SKIPPED)"}),e.jsx("text",{x:"20",y:"125",fill:"#64748b",fontSize:"8 font-mono",children:"4. Item 3: 99 (SKIPPED)"}),e.jsx("rect",{x:"20",y:"150",width:"340",height:"70",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"175",fill:"#34d399",fontSize:"9 font-bold",children:"Instant Early Exit:"}),e.jsx("text",{x:"30",y:"195",fill:"#cbd5e1",fontSize:"8",children:"Evaluates only 2 elements, saving 50% CPU cycles."})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"`all(s >= 60 for s in [85, 42, 90, 78])`"}),e.jsx("text",{x:"20",y:"65",fill:"#34d399",fontSize:"8 font-mono",children:"1. Item 0: 85 >= 60 -> True (Continue)"}),e.jsx("text",{x:"20",y:"85",fill:"#f43f5e",fontSize:"8 font-mono font-bold",children:"2. Item 1: 42 >= 60 -> False (HALT & RETURN False!)"}),e.jsx("text",{x:"20",y:"105",fill:"#64748b",fontSize:"8 font-mono",children:"3. Item 2: 90 (SKIPPED)"}),e.jsx("text",{x:"20",y:"125",fill:"#64748b",fontSize:"8 font-mono",children:"4. Item 3: 78 (SKIPPED)"}),e.jsx("rect",{x:"20",y:"150",width:"340",height:"70",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"30",y:"175",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Defensive Rejection:"}),e.jsx("text",{x:"30",y:"195",fill:"#cbd5e1",fontSize:"8",children:"Stops checking as soon as first violation is detected."})]})]}):i==="vacuousTruth"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"VACUOUS TRUTH ON EMPTY COLLECTIONS"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"`all([]) == True` (Vacuous Truth)"}),e.jsx("text",{x:"20",y:"65",fill:"#34d399",fontSize:"8 font-mono",children:"Mathematical Logic Invariant:"}),e.jsx("text",{x:"20",y:"85",fill:"#ecfdf5",fontSize:"8 font-mono",children:"∀x ∈ ∅, P(x) is trivially True."}),e.jsx("text",{x:"20",y:"105",fill:"#ecfdf5",fontSize:"8 font-mono",children:"No element exists in [] to disprove condition."}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"Required Production Guard:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"`if sequence and all(cond for x in sequence):`"})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"`any([]) == False` (Existence Check)"}),e.jsx("text",{x:"20",y:"65",fill:"#fca5a5",fontSize:"8 font-mono",children:"Mathematical Logic Invariant:"}),e.jsx("text",{x:"20",y:"85",fill:"#ecfdf5",fontSize:"8 font-mono",children:"∃x ∈ ∅ such that P(x) is False."}),e.jsx("text",{x:"20",y:"105",fill:"#ecfdf5",fontSize:"8 font-mono",children:"No element exists in [] to satisfy condition."}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"155",fill:"#fda4af",fontSize:"9 font-bold",children:"Standard Safety:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"`any([])` safely returns False without extra checks."})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"MEMORY HAZARD: GENERATOR EXPRESSION VS LIST COMPREHENSION"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"`any([x == 0 for x in range(1M)])` [DANGEROUS]"}),e.jsx("text",{x:"20",y:"65",fill:"#fca5a5",fontSize:"8 font-mono",children:"1. Evaluates all 1,000,000 items into RAM"}),e.jsx("text",{x:"20",y:"85",fill:"#fca5a5",fontSize:"8 font-mono",children:"2. Allocates ~8.5 MB boolean list"}),e.jsx("text",{x:"20",y:"105",fill:"#f43f5e",fontSize:"8 font-mono font-bold",children:"3. Zero Short-Circuiting Benefits!"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"155",fill:"#fda4af",fontSize:"9 font-bold",children:"Anti-Pattern Hazard:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Square brackets force full allocation before calling any()."})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"`any(x == 0 for x in range(1M))` [OPTIMAL]"}),e.jsx("text",{x:"20",y:"65",fill:"#34d399",fontSize:"8 font-mono",children:"1. Streams items lazily on demand"}),e.jsx("text",{x:"20",y:"85",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"2. Halts after testing 1st element (0 == 0)"}),e.jsx("text",{x:"20",y:"105",fill:"#34d399",fontSize:"8 font-mono",children:"3. Constant 104 Bytes O(1) Memory!"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"Pure Short-Circuit:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Parentheses stream lazily with instant early return."})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Admission Eligibility & Short-Circuit Inspector"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Adjust candidate marks, toggle mandatory KYC documentation, adjust fee deposits, and observe live short-circuit evaluation in Python:"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold block",children:"1. Candidate Subject Marks (Min 60% Cutoff):"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 text-xs font-mono",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Python AI:"}),e.jsxs("span",{className:a(c>=60?"text-teal-300":"text-rose-400 font-bold"),children:[c,"%"]})]}),e.jsx("input",{type:"range",min:40,max:100,value:c,onChange:t=>N(Number(t.target.value)),className:"w-full accent-teal-500 cursor-pointer"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Mathematics:"}),e.jsxs("span",{className:a(d>=60?"text-teal-300":"text-rose-400 font-bold"),children:[d,"%"]})]}),e.jsx("input",{type:"range",min:40,max:100,value:d,onChange:t=>T(Number(t.target.value)),className:"w-full accent-teal-500 cursor-pointer"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Data Structures:"}),e.jsxs("span",{className:a(x>=60?"text-teal-300":"text-rose-400 font-bold"),children:[x,"%"]})]}),e.jsx("input",{type:"range",min:40,max:100,value:x,onChange:t=>w(Number(t.target.value)),className:"w-full accent-teal-500 cursor-pointer"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Algorithms:"}),e.jsxs("span",{className:a(m>=60?"text-teal-300":"text-rose-400 font-bold"),children:[m,"%"]})]}),e.jsx("input",{type:"range",min:40,max:100,value:m,onChange:t=>A(Number(t.target.value)),className:"w-full accent-teal-500 cursor-pointer"})]})]}),e.jsxs("div",{className:"space-y-1.5 pt-2 border-t border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-cyan-400 font-bold block",children:"2. Mandatory Documentation (`all()` check):"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs font-mono",children:[e.jsxs("label",{className:"flex items-center gap-1.5 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:f,onChange:t=>S(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"Aadhaar Card"})]}),e.jsxs("label",{className:"flex items-center gap-1.5 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:y,onChange:t=>C(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"10th Marksheet"})]}),e.jsxs("label",{className:"flex items-center gap-1.5 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:b,onChange:t=>E(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"12th Marksheet"})]}),e.jsxs("label",{className:"flex items-center gap-1.5 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:g,onChange:t=>k(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"Passport Photo"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-2 border-t border-slate-800 text-xs font-mono",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Fee Deposit:"}),e.jsxs("span",{className:a(l>=15e3?"text-teal-300":"text-rose-400 font-bold"),children:["INR ",l.toLocaleString()]})]}),e.jsx("input",{type:"range",min:5e3,max:35e3,step:1e3,value:l,onChange:t=>P(Number(t.target.value)),className:"w-full accent-teal-500 cursor-pointer"})]}),e.jsx("div",{className:"flex items-center",children:e.jsxs("label",{className:"flex items-center gap-1.5 cursor-pointer text-rose-300",children:[e.jsx("input",{type:"checkbox",checked:_,onChange:t=>R(t.target.checked),className:"accent-rose-500 rounded"}),e.jsx("span",{children:"Flagged for Disciplinary Action"})]})})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs space-y-1",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:"Generated Python Predicate Code:"}),e.jsx("pre",{className:"text-teal-300 text-[11px] leading-relaxed break-all font-mono overflow-x-auto",children:q})]}),e.jsxs("div",{className:a("p-4 rounded-xl border font-mono text-xs space-y-2 transition-all",o?"bg-emerald-950/40 border-emerald-700/80 text-emerald-300":"bg-rose-950/40 border-rose-700/80 text-rose-300"),children:[e.jsxs("div",{className:"flex justify-between items-center text-sm font-bold",children:[e.jsx("span",{children:"Candidate Admission Status:"}),e.jsx("span",{className:a(o?"text-emerald-400":"text-rose-400"),children:o?"[APPROVED FOR ADMISSION]":"[REJECTED / QUARANTINED]"})]}),!o&&e.jsxs("div",{className:"text-[11px] text-rose-200",children:[e.jsx("strong",{children:"Short-Circuit Trigger:"})," ",r]}),o&&e.jsx("div",{className:"text-[11px] text-emerald-200",children:"All 4 regulatory predicate guards passed! 100% compliant."})]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Boolean Predicate Reference Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Predicate Function"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Short-Circuit Trigger"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Empty List `[]` Result"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Recommended Syntax"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"`any(generator)`"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"First `True` value encountered"}),e.jsx("td",{className:"py-3 px-4 text-rose-400",children:"`False`"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`any(cond for x in seq)`"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"`all(generator)`"}),e.jsx("td",{className:"py-3 px-4 text-rose-400",children:"First `False` value encountered"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"`True` (Vacuous Truth)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`seq and all(cond for x in seq)`"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"`not any(...)`"}),e.jsx("td",{className:"py-3 px-4 text-slate-300",children:"Equivalent to `all(not ...)`"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"`True`"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`not any(is_bad(x) for x in seq)`"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"`not all(...)`"}),e.jsx("td",{className:"py-3 px-4 text-slate-300",children:"Equivalent to `any(not ...)`"}),e.jsx("td",{className:"py-3 px-4 text-rose-400",children:"`False`"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`any(not is_valid(x) for x in seq)`"})]})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating any/all mechanics, generator performance benchmarks, matrix predicates, and institutional admission validators:"}),e.jsx(F,{files:[{filename:"any_and_all_short_circuit_mechanics.py",code:z,description:"Short-circuit evaluation and vacuous truth rules for any() and all()."},{filename:"combining_any_all_with_generator_expressions.py",code:V,description:"Memory efficiency and short-circuit benchmark comparisons."},{filename:"matrix_and_nested_collection_predicates.py",code:G,description:"Nested any/all predicates on 2D matrices and schema completeness."},{filename:"institutional_eligibility_and_compliance_validator.py",code:Y,description:"Multi-rule admission validation with any() and all() predicates."}]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Using Square Brackets in `any([...])`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"any([expensive(x) for x in huge_list])"})," forces Python to execute ",e.jsx("code",{className:"text-slate-300",children:"expensive(x)"})," on ALL elements, defeating short-circuiting!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always omit square brackets: ",e.jsx("code",{className:"text-emerald-300",children:"any(expensive(x) for x in huge_list)"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Vacuous Truth on Empty Collections"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-amber-300 font-mono",children:"all(scores >= 60 for scores in [])"})," returns ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"True"}),"! This allows empty profiles to bypass security filters."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Guard with ",e.jsx("code",{className:"text-emerald-300",children:"if scores and all(s >= 60 for s in scores):"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Negating `all()` Incorrectly"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:[`Confusing "not all pass" with "all fail". Under De Morgan's Laws, `,e.jsx("code",{className:"text-purple-300 font-mono",children:"not all(P)"})," is equivalent to ",e.jsx("code",{className:"text-purple-300 font-mono",children:"any(not P)"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Check De Morgan's duality when writing negation logic."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Boilerplate Flag Variables"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing 6-line procedural loops with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"flag = True; for x in seq: if not x: flag = False; break"})," clutters codebases."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Replace with declarative ",e.jsx("code",{className:"text-emerald-300",children:"all(...)"}),"."]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering any, all, short-circuit evaluation, vacuous truth, and schema validation:"}),e.jsx(L,{questions:W})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with boolean predicate truth tables, vacuous truth defenses, and generator recipes:"}),e.jsx("div",{className:"mb-10",children:e.jsx(H,{content:B,filename:"python_topic4_any_and_all_predicates_notes.txt",title:"Print Topic 4 Study Notes"})}),e.jsx(U,{})]})]})]})}export{ne as default};
