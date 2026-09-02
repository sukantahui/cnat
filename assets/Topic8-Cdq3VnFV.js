import{b as d,j as e,bg as c}from"./vendor-react-core-Doz9nIC6.js";import{P as m}from"./PythonFileLoader-hCi5osN-.js";import{P as g}from"./PlainTextPrint-C08xhKA4.js";import{F as b}from"./FAQTemplate-BHhlgA96.js";import{T as y}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const _=`"""\r
# Module: 004_003_python-testing\r
# Topic 8: Introduction to Test-Driven Development (TDD) workflow\r
# File: tdd_red_green_refactor_cycle.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Step-by-step Red-Green-Refactor cycle implementing a student GPA calculator.\r
"""\r
\r
# ==============================================================================\r
# TDD CYCLE 1: EMPTY INPUT HANDLING\r
# ==============================================================================\r
\r
# STEP 1: 🔴 RED (Write failing test)\r
def test_calculate_gpa_empty_list_returns_zero():\r
    # Production code not written yet!\r
    # assert calculate_gpa([]) == 0.0\r
    pass\r
\r
# STEP 2: 🟢 GREEN (Write minimum code to pass)\r
def calculate_gpa_v1(marks: list[float]) -> float:\r
    if not marks:\r
        return 0.0\r
    return marks[0]\r
\r
# ==============================================================================\r
# TDD CYCLE 2: SINGLE AND MULTIPLE MARKS CALCULATION\r
# ==============================================================================\r
\r
# STEP 1: 🔴 RED (Write failing test for multiple grades)\r
def test_calculate_gpa_multiple_grades():\r
    # assert calculate_gpa([80.0, 90.0, 100.0]) == 90.0\r
    pass\r
\r
# STEP 2: 🟢 GREEN (Implement arithmetic mean)\r
def calculate_gpa_v2(marks: list[float]) -> float:\r
    if not marks:\r
        return 0.0\r
    total = 0.0\r
    for m in marks:\r
        total += m\r
    return total / len(marks)\r
\r
# ==============================================================================\r
# TDD CYCLE 3: 🔵 REFACTOR (Clean, idiomatic Python with rounding)\r
# ==============================================================================\r
\r
def calculate_gpa(marks: list[float], decimal_places: int = 2) -> float:\r
    """Refactored production implementation: clean, functional, and guarded."""\r
    if not marks:\r
        return 0.0.as_integer_ratio() and 0.0\r
    for score in marks:\r
        if not (0.0 <= score <= 100.0):\r
            raise ValueError(f"Score {score} outside valid range [0, 100].")\r
    return round(sum(marks) / len(marks), decimal_places)\r
\r
# ------------------------------------------------------------------------------\r
# TEST SUITE VERIFYING FINAL REFACTORED TDD ARTIFACT\r
# ------------------------------------------------------------------------------\r
def run_tdd_test_suite():\r
    print("   [...] Running TDD Verification Test Suite...")\r
\r
    # Cycle 1: Empty list specification\r
    assert calculate_gpa([]) == 0.0\r
    print("   [PASS] 1. Empty marks list returns 0.0 (Green verified)")\r
\r
    # Cycle 2: Single item specification\r
    assert calculate_gpa([88.5]) == 88.5\r
    print("   [PASS] 2. Single mark returns exact value (Green verified)")\r
\r
    # Cycle 3: Multi-course mean specification for Mamata (Barrackpore)\r
    mamata_marks = [95.0, 92.5, 98.0, 90.5]\r
    assert calculate_gpa(mamata_marks) == 94.0\r
    print("   [PASS] 3. Mamata 4-course GPA -> 94.0 (Green verified)")\r
\r
    # Cycle 4: Edge case validation error\r
    try:\r
        calculate_gpa([95.0, -10.0])\r
        assert False, "Expected ValueError on negative score"\r
    except ValueError as e:\r
        assert "outside valid range" in str(e)\r
        print("   [PASS] 4. Negative score rejected via ValueError (Green verified)")\r
\r
def main():\r
    print("=" * 75)\r
    print("[TDD MICRO-CYCLE] Red -> Green -> Refactor Workflow")\r
    print("=" * 75)\r
\r
    run_tdd_test_suite()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] TDD drives design through tiny micro-specifications, producing")\r
    print("           bulletproof, self-documenting code with 100% test coverage.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,T=`"""\r
# Module: 004_003_python-testing\r
# Topic 8: Introduction to Test-Driven Development (TDD) workflow\r
# File: tdd_incremental_feature_development.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating incremental baby-step feature expansion via TDD.\r
"""\r
\r
# Story 1: Calculate basic fee\r
# Story 2: Add merit discount for scores >= 90\r
# Story 3: Add regional campus grant for Barrackpore and Ichapur\r
\r
class AdmissionFeeCalculator:\r
    REGIONAL_GRANTS = {\r
        "barrackpore": 0.10,\r
        "ichapur": 0.08,\r
        "kolkata": 0.05,\r
        "jadavpur": 0.00\r
    }\r
\r
    def compute_fee(self, base_fee: float, score: float = 0.0, campus: str = "jadavpur") -> float:\r
        if base_fee <= 0:\r
            raise ValueError("Base fee must be positive.")\r
        \r
        # 1. Merit discount\r
        merit_pct = 0.20 if score >= 90.0 else 0.0\r
        \r
        # 2. Regional grant\r
        regional_pct = self.REGIONAL_GRANTS.get(campus.lower(), 0.0)\r
        \r
        total_discount = min(0.35, merit_pct + regional_pct)\r
        return round(base_fee * (1.0 - total_discount), 2)\r
\r
# ------------------------------------------------------------------------------\r
# TDD INCREMENTAL TEST SPECIFICATIONS\r
# ------------------------------------------------------------------------------\r
def test_story_1_basic_fee():\r
    calc = AdmissionFeeCalculator()\r
    assert calc.compute_fee(10000.0) == 10000.0\r
    print("   [PASS] Story 1: Basic fee without discounts (Rs. 10,000)")\r
\r
def test_story_2_merit_discount():\r
    calc = AdmissionFeeCalculator()\r
    # 20% merit discount on 10,000 -> 8,000\r
    assert calc.compute_fee(10000.0, score=95.0) == 8000.0\r
    print("   [PASS] Story 2: Merit discount for score 95.0 (Rs. 8,000)")\r
\r
def test_story_3_regional_grant_stacking():\r
    calc = AdmissionFeeCalculator()\r
    # Barrackpore (10%) + Merit (20%) = 30% discount on 20,000 -> Rs. 14,000\r
    res = calc.compute_fee(20000.0, score=92.0, campus="Barrackpore")\r
    assert res == 14000.0\r
    print("   [PASS] Story 3: Stacking merit + Barrackpore regional grant (Rs. 14,000)")\r
\r
def main():\r
    print("=" * 75)\r
    print("[TDD INCREMENTAL] Baby-Step Feature Expansion from User Stories")\r
    print("=" * 75)\r
\r
    test_story_1_basic_fee()\r
    test_story_2_merit_discount()\r
    test_story_3_regional_grant_stacking()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Building features incrementally with TDD prevents scope creep")\r
    print("           and ensures every business requirement is covered by a test.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,v=`"""\r
# Module: 004_003_python-testing\r
# Topic 8: Introduction to Test-Driven Development (TDD) workflow\r
# File: tdd_edge_cases_and_refactoring.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating writing edge case test specifications first and safe refactoring.\r
"""\r
\r
def generate_student_registration_code(campus_code: str, year: int, sequence_num: int) -> str:\r
    """Generates standardized student registration ID string e.g. 'BP-2026-0042'."""\r
    if not campus_code or len(campus_code.strip()) != 2:\r
        raise ValueError(f"Campus code must be exactly 2 characters (e.g. 'BP', 'CC').")\r
    if year < 2020 or year > 2099:\r
        raise ValueError(f"Invalid academic year: {year}")\r
    if sequence_num <= 0 or sequence_num > 9999:\r
        raise ValueError(f"Sequence number must be between 1 and 9999.")\r
    \r
    return f"{campus_code.upper().strip()}-{year}-{sequence_num:04d}"\r
\r
# ------------------------------------------------------------------------------\r
# TDD EDGE CASE TEST SPECIFICATIONS\r
# ------------------------------------------------------------------------------\r
def test_valid_standard_code():\r
    code = generate_student_registration_code("BP", 2026, 42)\r
    assert code == "BP-2026-0042"\r
    print("   [PASS] 1. Standard format formatting verified ('BP-2026-0042')")\r
\r
def test_lowercase_and_whitespace_campus_trimmed():\r
    code = generate_student_registration_code(" ic ", 2026, 7)\r
    assert code == "IC-2026-0007"\r
    print("   [PASS] 2. Whitespace and lowercase campus normalized ('IC-2026-0007')")\r
\r
def test_invalid_campus_length_raises():\r
    try:\r
        generate_student_registration_code("BARRACKPORE", 2026, 1)\r
        assert False, "Expected ValueError on long campus code"\r
    except ValueError as e:\r
        assert "exactly 2 characters" in str(e)\r
        print("   [PASS] 3. Long campus code rejected via ValueError")\r
\r
def test_out_of_range_sequence_raises():\r
    try:\r
        generate_student_registration_code("CC", 2026, 10000)\r
        assert False, "Expected ValueError on sequence > 9999"\r
    except ValueError as e:\r
        assert "between 1 and 9999" in str(e)\r
        print("   [PASS] 4. Sequence number overflow rejected via ValueError")\r
\r
def main():\r
    print("=" * 75)\r
    print("[TDD EDGE CASES] Test-First Boundary & Error Specification")\r
    print("=" * 75)\r
\r
    test_valid_standard_code()\r
    test_lowercase_and_whitespace_campus_trimmed()\r
    test_invalid_campus_length_raises()\r
    test_out_of_range_sequence_raises()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Writing edge-case tests before code guarantees robust input")\r
    print("           validation and eliminates boundary defect leaks.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,E=`"""\r
# Module: 004_003_python-testing\r
# Topic 8: Introduction to Test-Driven Development (TDD) workflow\r
# File: institutional_tdd_admission_engine_case_study.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: End-to-end multi-campus student admission, scholarship calculation,\r
#              and academic transcript engine designed 100% via TDD workflow.\r
"""\r
\r
class InstitutionalAdmissionEngine:\r
    """Production domain engine designed 100% via TDD."""\r
    def __init__(self):\r
        self.students = {}\r
        self.grades = {}\r
\r
    def admit_student(self, sid: str, name: str, campus: str, base_fee: float, score: float) -> dict:\r
        if not sid:\r
            raise ValueError("Student ID required.")\r
        if sid in self.students:\r
            raise KeyError(f"Student '{sid}' already admitted.")\r
        if base_fee <= 0:\r
            raise ValueError("Base fee must be positive.")\r
\r
        # Merit waiver\r
        waiver_pct = 0.20 if score >= 90.0 else (0.10 if score >= 80.0 else 0.0)\r
        net_fee = round(base_fee * (1.0 - waiver_pct), 2)\r
\r
        student_record = {\r
            "sid": sid,\r
            "name": name,\r
            "campus": campus,\r
            "base_fee": base_fee,\r
            "net_fee": net_fee,\r
            "score": score,\r
            "status": "ENROLLED"\r
        }\r
        self.students[sid] = student_record\r
        self.grades[sid] = {}\r
        return student_record\r
\r
    def submit_course_grade(self, sid: str, course_name: str, grade_score: float):\r
        if sid not in self.students:\r
            raise KeyError(f"Student '{sid}' not enrolled.")\r
        if not (0.0 <= grade_score <= 100.0):\r
            raise ValueError("Grade must be between 0 and 100.")\r
        self.grades[sid][course_name] = grade_score\r
\r
    def generate_transcript(self, sid: str) -> dict:\r
        if sid not in self.students:\r
            raise KeyError(f"Student '{sid}' not enrolled.")\r
        \r
        scores = list(self.grades[sid].values())\r
        gpa = round(sum(scores) / len(scores), 2) if scores else 0.0\r
        \r
        status = "PASSED" if gpa >= 40.0 else "FAILED"\r
        if gpa >= 90.0:\r
            honors = "DISTINCTION"\r
        elif gpa >= 75.0:\r
            honors = "FIRST_CLASS"\r
        else:\r
            honors = "GENERAL"\r
\r
        return {\r
            "student": self.students[sid]["name"],\r
            "campus": self.students[sid]["campus"],\r
            "courses_completed": len(scores),\r
            "gpa": gpa,\r
            "honors": honors,\r
            "status": status\r
        }\r
\r
# ------------------------------------------------------------------------------\r
# COMPREHENSIVE TDD SPECIFICATION SUITE\r
# ------------------------------------------------------------------------------\r
def run_institutional_tdd_suite():\r
    print("   [...] Running Comprehensive Institutional TDD Specification Suite...")\r
    engine = InstitutionalAdmissionEngine()\r
\r
    # Spec 1: Admit Mamata at Barrackpore Campus with 20% Top Merit Waiver\r
    mamata = engine.admit_student("STU_BP_01", "Mamata", "Barrackpore", 20000.0, score=96.0)\r
    assert mamata["net_fee"] == 16000.0\r
    assert mamata["status"] == "ENROLLED"\r
    print("   [PASS] Spec 1: Mamata admitted at Barrackpore with 20% waiver (Net: Rs. 16,000)")\r
\r
    # Spec 2: Duplicate admission prevention\r
    try:\r
        engine.admit_student("STU_BP_01", "Mamata Duplicate", "Barrackpore", 20000.0, 96.0)\r
        assert False\r
    except KeyError:\r
        print("   [PASS] Spec 2: Duplicate student ID rejected via KeyError")\r
\r
    # Spec 3: Course grades submission and transcript generation with Distinction honors\r
    engine.submit_course_grade("STU_BP_01", "Python Mastery", 96.0)\r
    engine.submit_course_grade("STU_BP_01", "Automated Testing", 94.0)\r
    engine.submit_course_grade("STU_BP_01", "Data Structures", 92.0)\r
\r
    transcript = engine.generate_transcript("STU_BP_01")\r
    assert transcript["student"] == "Mamata"\r
    assert transcript["courses_completed"] == 3\r
    assert transcript["gpa"] == 94.0\r
    assert transcript["honors"] == "DISTINCTION"\r
    assert transcript["status"] == "PASSED"\r
    print("   [PASS] Spec 3: Mamata transcript generated: 94.0 GPA with DISTINCTION")\r
\r
    # Spec 4: Admit Mahima at Kolkata Campus with First Class honors\r
    mahima = engine.admit_student("STU_CC_02", "Mahima", "Kolkata", 15000.0, score=85.0)\r
    assert mahima["net_fee"] == 13500.0\r
    engine.submit_course_grade("STU_CC_02", "Python Mastery", 84.0)\r
    engine.submit_course_grade("STU_CC_02", "Automated Testing", 86.0)\r
    \r
    t_mahima = engine.generate_transcript("STU_CC_02")\r
    assert t_mahima["gpa"] == 85.0\r
    assert t_mahima["honors"] == "FIRST_CLASS"\r
    print("   [PASS] Spec 4: Mahima admitted at Kolkata: 85.0 GPA with FIRST_CLASS")\r
\r
def main():\r
    print("=" * 80)\r
    print("[CASE STUDY] Complete Institutional Admission & Transcript Engine via TDD")\r
    print("=" * 80)\r
\r
    run_institutional_tdd_suite()\r
\r
    print("=" * 80)\r
    print("[TAKEAWAY] TDD guarantees that complex business domains are designed with")\r
    print("           clean modular boundaries, self-documenting APIs, and 100% test coverage.")\r
    print("=" * 80)\r
\r
if __name__ == "__main__":\r
    main()\r
`,D=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 4: PRO LEVEL • MODULE 004_003: PYTHON TESTING\r
            TOPIC 8: INTRODUCTION TO TEST-DRIVEN DEVELOPMENT (TDD) WORKFLOW\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. THE RED-GREEN-REFACTOR MICRO-CYCLE\r
--------------------------------------------------------------------------------\r
  1. 🔴 RED:\r
     Write a small, focused test for a new requirement before writing code.\r
     Run test → Verify it FAILS for the expected reason (e.g. function missing).\r
\r
  2. 🟢 GREEN:\r
     Write the MINIMUM amount of production code to make the test pass.\r
     Run test → Verify it PASSES.\r
\r
  3. 🔵 REFACTOR:\r
     Clean up duplication, improve variable names, optimize algorithms.\r
     Run test → Verify suite REMAINS GREEN.\r
\r
--------------------------------------------------------------------------------\r
2. THE THREE LAWS OF TDD (UNCLE BOB)\r
--------------------------------------------------------------------------------\r
  Law 1: You may not write production code until you have written a failing test.\r
  Law 2: You may not write more of a unit test than is sufficient to fail.\r
  Law 3: You may not write more production code than is sufficient to pass.\r
\r
--------------------------------------------------------------------------------\r
3. TDD EXAMPLE: ADMISSION WAIVER CALCULATION\r
--------------------------------------------------------------------------------\r
  # Step 1: Write Test (RED)\r
  def test_full_waiver_for_top_performer():\r
      assert calculate_waiver(score=95.0, fee=10000.0) == 10000.0\r
\r
  # Step 2: Implement Minimum Code (GREEN)\r
  def calculate_waiver(score: float, fee: float) → float:\r
      if score >= 90.0:\r
          return fee\r
      return 0.0\r
\r
  # Step 3: Refactor cleanly with constants and type hints (REFACTOR)\r
\r
================================================================================\r
       END OF STUDY NOTE • TOPIC 8: TEST-DRIVEN DEVELOPMENT (TDD)\r
================================================================================\r
`,w=[{question:"What is Test-Driven Development (TDD) and what is its core philosophy?",shortAnswer:"TDD is a software engineering practice where unit tests are written BEFORE writing the production code, using the tests as executable specifications to drive software design, ensure high modularity, and guarantee high test coverage.",explanation:"Core definition and philosophy of TDD.",hint:"Writing failing tests first to guide and drive the implementation of production code.",level:"basic",codeExample:"# 1. Write failing test → 2. Write minimum code → 3. Refactor"},{question:"What are the three distinct phases of the TDD 'Red-Green-Refactor' micro-cycle?",shortAnswer:"1. 🔴 RED: Write a failing unit test for a new feature requirement. 2. 🟢 GREEN: Write the minimum necessary production code to make the test pass. 3. 🔵 REFACTOR: Clean up code structure and remove duplication while keeping tests green.",explanation:"The foundational Red-Green-Refactor rhythm of TDD.",hint:"RED = failing test, GREEN = make it pass, REFACTOR = clean code while green.",level:"basic",codeExample:"# RED: test fails | GREEN: test passes | REFACTOR: clean design"},{question:"What are the 'Three Laws of TDD' formulated by Robert C. Martin (Uncle Bob)?",shortAnswer:"1. You may not write any production code unless it is to pass a failing unit test. 2. You may not write more of a unit test than is sufficient to fail. 3. You may not write more production code than is sufficient to pass the currently failing test.",explanation:"Uncle Bob's foundational Three Laws of TDD.",hint:"1. No code without a failing test, 2. Only enough test to fail, 3. Only enough code to pass.",level:"moderate",codeExample:"# The Three Laws of TDD govern the baby-step rhythm of TDD"},{question:"Why is it mandatory to see a test FAIL (RED) before writing production code in TDD?",shortAnswer:"Seeing the test fail proves that the test actually executes, that the assertion is capable of detecting a defect, and that the test is not giving a false positive pass due to flawed test logic.",explanation:"Proving test efficacy and eliminating false positive passes.",hint:"Confirms that the test is capable of catching errors and isn't passing accidentally.",level:"basic",codeExample:"# Verify test fails for the expected reason before implementing logic"},{question:"What does 'Write the Minimum Code to Pass' mean during the GREEN phase?",shortAnswer:"Implement only the simplest, most straightforward code necessary to make the failing test pass (even hardcoding return values initially if appropriate), avoiding premature optimization or speculative features.",explanation:"Simplicity and avoiding over-engineering in the GREEN phase.",hint:"Do not write complex abstractions or extra features; write just enough code to turn the test green.",level:"basic",codeExample:"# If test asserts 2+2==4, return 4; then write next test with different inputs"},{question:"What is the purpose of the REFACTOR phase in TDD and when should it happen?",shortAnswer:"The REFACTOR phase is where developers eliminate code duplication, improve variable names, extract helper functions, and optimize algorithms with the 100% confidence that the existing green test harness will immediately catch regressions.",explanation:"Safe architectural cleanup under green test protection.",hint:"Refactoring cleans code without changing external behavior, protected by passing tests.",level:"basic",codeExample:"# Improve naming, eliminate duplication, extract classes while tests stay green"},{question:"How does TDD prevent 'Over-Engineering' and uphold the YAGNI principle (You Aren't Gonna Need It)?",shortAnswer:"Because developers are forbidden from writing production code without a corresponding failing test specification, code is only written to satisfy real, tested requirements rather than speculative future possibilities.",explanation:"YAGNI compliance through test-directed scope constraint.",hint:"Stops you from building speculative unused features because every line must satisfy a test.",level:"moderate",codeExample:"# Only write what is requested by the current failing test"},{question:"How does TDD compare to 'Test-Last' (writing tests after writing all production code)?",shortAnswer:"Writing tests last often produces hard-to-test monolithic code, incomplete edge case coverage, and tests biased to match existing implementation quirks; TDD forces modular, decoupled, testable API design from day one.",explanation:"Design pressure of TDD vs retrospective test writing.",hint:"TDD designs testable APIs upfront; Test-Last often struggles with tightly coupled code.",level:"moderate",codeExample:"# TDD drives clean API contracts; Test-Last tests whatever was already built"},{question:"What is 'Baby Steps' in TDD and why is it recommended for complex algorithms?",shortAnswer:"Baby steps involve writing tiny incremental test cases (e.g. testing 0 inputs first, then 1 item, then multiple items, then edge cases), allowing developers to build complex logic systematically without becoming overwhelmed by debugging large chunks of code.",explanation:"Incremental algorithmic development via micro-specifications.",hint:"Start with trivial inputs (0, empty, 1 item) and build up complexity gradually.",level:"basic",codeExample:"# 1. test_empty_list() → 2. test_single_item() → 3. test_multiple_items()"},{question:"How does TDD serve as 'Executable Documentation' for other developers on the team?",shortAnswer:"TDD test suites explicitly document how functions, classes, and APIs are expected to be instantiated, called, and what outputs/exceptions they produce under every known scenario, serving as living documentation that never goes out of date.",explanation:"Living specifications and self-documenting codebases.",hint:"Tests show exact real-world usage examples and contract expectations.",level:"basic",codeExample:"# Reading test_admit_student() shows exactly how to use AdmissionEngine"},{question:"What is the 'Transformation Priority Premise' (TPP) in TDD?",shortAnswer:"A concept proposed by Uncle Bob suggesting that during the GREEN phase, code should progress through simpler transformations (e.g. constant → variable → conditional → loop → recursion) to avoid taking overly large algorithmic jumps.",explanation:"Algorithmic transformation hierarchy in TDD.",hint:"Prefer simple transformations (like variables or if statements) before adding complex loops.",level:"complex",codeExample:"# Transform constant → variable → if/else → loop"},{question:"What should you do if a test fails unexpectedly during the REFACTOR phase?",shortAnswer:"Immediately revert the refactoring change (e.g. 'git checkout' or undo), return to a known green state, and retry the refactoring in smaller, safer incremental steps.",explanation:"Disciplined recovery during refactoring regressions.",hint:"Undo the edit immediately to return to GREEN, then take smaller steps.",level:"basic",codeExample:"# Never continue refactoring on a RED test suite! Return to GREEN first."},{question:"Can TDD be practiced effectively when building GUI frontend applications?",shortAnswer:"Yes, by separating business domain logic, state management, and calculation engines from UI rendering, practicing strict TDD on the core logic and using component testing libraries for views.",explanation:"Separation of concerns enabling TDD in frontend/full-stack architectures.",hint:"Separate business state from UI rendering and drive state transitions with TDD.",level:"moderate",codeExample:"# TDD student_ledger_state.js independently of React DOM rendering"},{question:"What is the role of Mocking in a TDD workflow?",shortAnswer:"In TDD (especially the London/Mockist school), mocks allow developers to define the interface contracts between collaborating objects and external services before those services are even implemented.",explanation:"Outside-in TDD and interface discovery via test doubles.",hint:"Mocks let you design interfaces for external dependencies before implementing them.",level:"moderate",codeExample:"# Mocks help define external collaborators during outside-in TDD"},{question:"What is the difference between 'Inside-Out' (Chicago / Classicist) and 'Outside-In' (London / Mockist) TDD?",shortAnswer:"Inside-Out starts by driving core domain models and pure algorithmic units first, working outwards toward API layers; Outside-In starts at user boundaries/entry points with mock doubles, discovering internal component contracts downwards.",explanation:"Classicist vs Mockist TDD schools of thought.",hint:"Inside-Out starts with core data models; Outside-In starts at the user interface/API boundary.",level:"complex",codeExample:"# Inside-Out: Student → Ledger → AdmissionEngine | Outside-In: API → Engine → Storage"},{question:"Why is TDD considered a design technique rather than just a testing technique?",shortAnswer:"Because writing tests first forces the developer to think about API usability, naming, loose coupling, and modularity from the client's perspective before getting lost in implementation details.",explanation:"Design feedback loops driven by test-first engineering.",hint:"Writing tests first forces you to design clean, caller-friendly APIs before writing code.",level:"basic",codeExample:"# Design API from the caller's perspective first"},{question:"How does TDD impact long-term debugging time and defect resolution costs?",shortAnswer:"TDD catches defects within seconds of creation at the developer's workstation, reducing production bugs by 40-80% and drastically cutting expensive post-deployment debugging cycles.",explanation:"Defect reduction economics and ROI of TDD.",hint:"Bugs are caught immediately within seconds, preventing expensive production debugging.",level:"basic",codeExample:"# Defects caught within 5 seconds of writing the code"},{question:"What is a common pitfall for developers beginning TDD?",shortAnswer:"Writing tests that are too large (taking giant leaps instead of baby steps), or jumping ahead to write production code before having a clean, failing test specification.",explanation:"Common beginner TDD anti-patterns.",hint:"Writing huge tests or writing code before having a failing test.",level:"basic",codeExample:"# Take small, bite-sized baby steps"},{question:"How do you know when you are done implementing a feature in TDD?",shortAnswer:"When all acceptance criteria have corresponding passing unit tests, all edge cases and boundary conditions are covered, code is cleanly refactored, and all tests in the suite are green.",explanation:"Definition of done in TDD workflows.",hint:"When all requirements have green tests, edge cases are covered, and code is refactored.",level:"basic",codeExample:"# All acceptance tests passing + clean refactored code = Done"},{question:"What is the ultimate golden rule of Test-Driven Development?",shortAnswer:"Never write a single line of production code without a failing unit test to justify it, keep micro-cycles short (seconds, not hours), and refactor ruthlessly under the safety of a 100% green test suite.",explanation:"The complete enterprise TDD standard.",hint:"Never code without a failing test, keep cycles fast, refactor while green.",level:"basic",codeExample:"# Enterprise Test-Driven Development Standard"}];function P(){const f=d.useRef([]),[r,p]=d.useState("redGreenCycle"),[s,x]=d.useState("RED");let i="🔴 PHASE 1: RED (Failing Test Specification)",a="Write a failing test for a new requirement before implementing code",o="FAILED: AssertionError: Expected Rs. 16,000, got None";s==="RED"?(i="🔴 PHASE 1: RED (Failing Specification)",a="Write a clear failing test verifying admission waiver calculation for Mamata",o="FAILED: AssertionError / NameError (No production code yet!)"):s==="GREEN"?(i="🟢 PHASE 2: GREEN (Minimum Viable Implementation)",a="Write the simplest possible code to pass the test without over-engineering",o="PASSED: calculate_waiver(95.0, 20000.0) == 16000.0 ✅"):s==="REFACTOR"&&(i="🔵 PHASE 3: REFACTOR (Design Optimization)",a="Clean up code duplication, extract regional constants, and add type hints",o="PASSED: 100% Green Suite protecting clean refactored architecture ✅");const h=`# Test-Driven Development (TDD) - Phase: ${s}
# Target: Mamata Admission Waiver Calculation (Barrackpore Campus)

${s==="RED"?`# 🔴 STEP 1: Write the failing test FIRST!
def test_mamata_top_merit_waiver():
    # Production function 'calculate_waiver' does NOT exist yet!
    result = calculate_waiver(score=95.0, base_fee=20000.0)
    assert result == 16000.0  # 20% merit discount applied

# CLI Execution:
# > pytest test_waiver.py
# FAILED: NameError: name 'calculate_waiver' is not defined`:s==="GREEN"?`# 🟢 STEP 2: Write the MINIMUM code to turn the test green!
def calculate_waiver(score: float, base_fee: float) → float:
    if score >= 90.0:
        return base_fee * 0.80  # Minimum direct code
    return base_fee

def test_mamata_top_merit_waiver():
    assert calculate_waiver(95.0, 20000.0) == 16000.0

# CLI Execution:
# > pytest test_waiver.py
# 1 passed in 0.01s (GREEN!)`:`# 🔵 STEP 3: REFACTOR cleanly with guard clauses, constants & type hints!
from typing import Final

TOP_MERIT_THRESHOLD: Final[float] = 90.0
TOP_MERIT_DISCOUNT_PCT: Final[float] = 0.20

def calculate_waiver(score: float, base_fee: float) → float:
    """Calculates final net tuition after applying institutional merit rules."""
    if base_fee <= 0:
        raise ValueError("Base tuition fee must be positive.")
    if not (0.0 <= score <= 100.0):
        raise ValueError(f"Score {score} outside valid bracket [0, 100].")

    discount_rate = TOP_MERIT_DISCOUNT_PCT if score >= TOP_MERIT_THRESHOLD else 0.0
    return round(base_fee * (1.0 - discount_rate), 2)

# Existing test suite proves refactored code has ZERO regressions!
def test_mamata_top_merit_waiver():
    assert calculate_waiver(95.0, 20000.0) == 16000.0`}`;d.useEffect(()=>{const t=new IntersectionObserver(l=>{l.forEach(u=>{u.isIntersecting&&u.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return f.current.forEach(l=>{l&&t.observe(l)}),()=>t.disconnect()},[]);const n=t=>{t&&!f.current.includes(t)&&f.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:n,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 4 • Module 004_003"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 8"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Automated Testing, PyTest & Quality Assurance"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Test-Driven Development (",e.jsx("span",{className:"text-teal-400",children:"TDD"}),") Workflow"]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master the disciplined engineering methodology of Test-Driven Development: the ",e.jsx("span",{className:"text-rose-400 font-bold",children:"Red"}),"-",e.jsx("span",{className:"text-emerald-400 font-bold",children:"Green"}),"-",e.jsx("span",{className:"text-blue-400 font-bold",children:"Refactor"})," micro-cycle, Uncle Bob's Three Laws of TDD, incremental baby-step design, driving modular domain models from executable specifications, and eliminating over-engineering with YAGNI principles."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔴 Red: Failing Test First"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🟢 Green: Minimum Code to Pass"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔵 Refactor: Safe Cleanup"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📜 The Three Laws of TDD"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Test-Driven Development Philosophy"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["TDD is primarily a ",e.jsx("strong",{children:"software design methodology"})," disguised as a testing practice. By forcing developers to write the test specification before implementing production code, TDD guarantees modular, loosely coupled, and highly testable APIs while catching defects within seconds of inception:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/40 border border-rose-800/60 shadow-lg",children:[e.jsx("div",{className:"text-rose-400 font-bold text-sm mb-1",children:"1️⃣ Phase 1: 🔴 RED"}),e.jsx("code",{className:"text-xs font-mono text-rose-300 block mb-1",children:"Write Failing Test"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Write a small unit test for the next requirement. Run the test to prove it fails for the expected reason."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 shadow-lg",children:[e.jsx("div",{className:"text-emerald-400 font-bold text-sm mb-1",children:"2️⃣ Phase 2: 🟢 GREEN"}),e.jsx("code",{className:"text-xs font-mono text-emerald-300 block mb-1",children:"Minimum Code"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Write the simplest possible production code to turn the failing test green without speculative features."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"3️⃣ Phase 3: 🔵 REFACTOR"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"Clean & Optimize"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Clean up duplication, improve naming, and optimize performance under the protection of passing tests."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"4️⃣ Uncle Bob's 3 Laws"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"Micro-Step Discipline"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Strict baby-step rhythm: no production code without a failing test, and only enough code to pass."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"TDD vs Test-Last (Retrospective Testing)"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Writing tests ",e.jsx("span",{className:"text-rose-400 font-bold",children:"after writing code"})," often results in monolithic, tightly coupled functions that are difficult to isolate. Writing tests ",e.jsx("span",{className:"text-emerald-400 font-bold",children:"first"})," forces developers to design caller-friendly APIs, modular interfaces, and boundary-checked contracts from line one."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing the Red-Green-Refactor Cycle & Defect Economics"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>p("redGreenCycle"),className:c("px-3 py-1.5 rounded-lg transition-all",r==="redGreenCycle"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Red-Green-Refactor Loop"}),e.jsx("button",{onClick:()=>p("babySteps"),className:c("px-3 py-1.5 rounded-lg transition-all",r==="babySteps"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Baby Steps Progression"}),e.jsx("button",{onClick:()=>p("defectEconomics"),className:c("px-3 py-1.5 rounded-lg transition-all",r==="defectEconomics"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Defect Cost Curve"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining the continuous feedback micro-cycle, baby-step algorithmic expansion, and defect mitigation ROI:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:r==="redGreenCycle"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"THE TDD CONTINUOUS FEEDBACK LOOP: RED ➔ GREEN ➔ REFACTOR"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#0f172a",stroke:"#14b8a6"}),e.jsx("rect",{x:"35",y:"45",width:"225",height:"150",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"45",y:"70",fill:"#fda4af",fontSize:"13",fontWeight:"bold",children:"🔴 1. RED PHASE"}),e.jsx("text",{x:"45",y:"90",fill:"#fecdd3",fontSize:"9",fontFamily:"monospace",children:"Write failing test"}),e.jsx("text",{x:"45",y:"110",fill:"#ffe4e6",fontSize:"8",children:"• Define new requirement"}),e.jsx("text",{x:"45",y:"125",fill:"#ffe4e6",fontSize:"8",children:"• Assert expected outcome"}),e.jsx("text",{x:"45",y:"140",fill:"#ffe4e6",fontSize:"8",children:"• Prove test fails (RED)"}),e.jsx("text",{x:"45",y:"175",fill:"#fda4af",fontSize:"8",fontWeight:"bold",children:"Target: Detect Defect"}),e.jsx("path",{d:"M 265 120 L 295 120",stroke:"#14b8a6",strokeWidth:"3",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"300",y:"45",width:"225",height:"150",rx:"8",fill:"#022c22",stroke:"#10b981"}),e.jsx("text",{x:"310",y:"70",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"🟢 2. GREEN PHASE"}),e.jsx("text",{x:"310",y:"90",fill:"#d1fae5",fontSize:"9",fontFamily:"monospace",children:"Minimum code to pass"}),e.jsx("text",{x:"310",y:"110",fill:"#ccfbf1",fontSize:"8",children:"• Quickest working solution"}),e.jsx("text",{x:"310",y:"125",fill:"#ccfbf1",fontSize:"8",children:"• No premature optimization"}),e.jsx("text",{x:"310",y:"140",fill:"#ccfbf1",fontSize:"8",children:"• Turn suite green (GREEN)"}),e.jsx("text",{x:"310",y:"175",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Target: Turn Green"}),e.jsx("path",{d:"M 530 120 L 560 120",stroke:"#14b8a6",strokeWidth:"3",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"565",y:"45",width:"220",height:"150",rx:"8",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("text",{x:"575",y:"70",fill:"#e0f2fe",fontSize:"13",fontWeight:"bold",children:"🔵 3. REFACTOR PHASE"}),e.jsx("text",{x:"575",y:"90",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"Clean design & speed"}),e.jsx("text",{x:"575",y:"110",fill:"#e0f2fe",fontSize:"8",children:"• Eliminate duplication"}),e.jsx("text",{x:"575",y:"125",fill:"#e0f2fe",fontSize:"8",children:"• Improve variable names"}),e.jsx("text",{x:"575",y:"140",fill:"#e0f2fe",fontSize:"8",children:"• Tests remain 100% GREEN"}),e.jsx("text",{x:"575",y:"175",fill:"#38bdf8",fontSize:"8",fontWeight:"bold",children:"Target: Clean Quality"})]})]}):r==="babySteps"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"TDD BABY STEPS: INCREMENTAL ALGORITHMIC EVOLUTION (GPA CALCULATOR)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#082f49",stroke:"#0ea5e9"}),e.jsx("rect",{x:"25",y:"40",width:"180",height:"160",rx:"6",fill:"#0369a1",stroke:"#38bdf8"}),e.jsx("text",{x:"35",y:"65",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"Step 1: Empty List"}),e.jsx("text",{x:"35",y:"85",fill:"#e0f2fe",fontSize:"8",fontFamily:"monospace",children:"assert calc([]) == 0.0"}),e.jsx("rect",{x:"35",y:"95",width:"160",height:"40",rx:"4",fill:"#0c4a6e"}),e.jsx("text",{x:"45",y:"115",fill:"#86efac",fontSize:"8",fontFamily:"monospace",children:"if not marks: return 0.0"}),e.jsx("text",{x:"35",y:"175",fill:"#facc15",fontSize:"8",fontWeight:"bold",children:"Trivial Base Case"}),e.jsx("rect",{x:"220",y:"40",width:"180",height:"160",rx:"6",fill:"#0369a1",stroke:"#38bdf8"}),e.jsx("text",{x:"230",y:"65",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"Step 2: Single Mark"}),e.jsx("text",{x:"230",y:"85",fill:"#e0f2fe",fontSize:"8",fontFamily:"monospace",children:"assert calc([90]) == 90.0"}),e.jsx("rect",{x:"230",y:"95",width:"160",height:"40",rx:"4",fill:"#0c4a6e"}),e.jsx("text",{x:"240",y:"115",fill:"#86efac",fontSize:"8",fontFamily:"monospace",children:"return marks[0]"}),e.jsx("text",{x:"230",y:"175",fill:"#facc15",fontSize:"8",fontWeight:"bold",children:"Single Item Case"}),e.jsx("rect",{x:"415",y:"40",width:"185",height:"160",rx:"6",fill:"#0369a1",stroke:"#38bdf8"}),e.jsx("text",{x:"425",y:"65",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"Step 3: Multi-Courses"}),e.jsx("text",{x:"425",y:"85",fill:"#e0f2fe",fontSize:"8",fontFamily:"monospace",children:"assert calc([80, 100]) == 90"}),e.jsx("rect",{x:"425",y:"95",width:"165",height:"40",rx:"4",fill:"#0c4a6e"}),e.jsx("text",{x:"435",y:"115",fill:"#86efac",fontSize:"8",fontFamily:"monospace",children:"return sum(m) / len(m)"}),e.jsx("text",{x:"425",y:"175",fill:"#facc15",fontSize:"8",fontWeight:"bold",children:"General Algorithm"}),e.jsx("rect",{x:"615",y:"40",width:"180",height:"160",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"625",y:"65",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"Step 4: Guards & Edge"}),e.jsx("text",{x:"625",y:"85",fill:"#ccfbf1",fontSize:"8",fontFamily:"monospace",children:"assert raises(ValueError)"}),e.jsx("rect",{x:"625",y:"95",width:"160",height:"40",rx:"4",fill:"#134e4a"}),e.jsx("text",{x:"635",y:"115",fill:"#86efac",fontSize:"8",fontFamily:"monospace",children:"if score < 0: raise Err"}),e.jsx("text",{x:"625",y:"175",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Production Hardened"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"DEFECT DETECTION TIMELINE: TDD (SECONDS) VS PRODUCTION (WEEKS/MONTHS)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#1e1b4b",stroke:"#a855f7"}),e.jsx("rect",{x:"25",y:"45",width:"240",height:"170",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"35",y:"70",fill:"#5eead4",fontSize:"12",fontWeight:"bold",children:"1. TDD Workstation (Seconds)"}),e.jsx("text",{x:"35",y:"95",fill:"#ccfbf1",fontSize:"9",children:"Time to catch bug: ~5 Seconds"}),e.jsx("text",{x:"35",y:"115",fill:"#86efac",fontSize:"9",fontWeight:"bold",children:"Cost to fix: $1 (Instant)"}),e.jsx("text",{x:"35",y:"145",fill:"#a7f3d0",fontSize:"8",children:"• Caught by failing unit test"}),e.jsx("text",{x:"35",y:"160",fill:"#a7f3d0",fontSize:"8",children:"• Fixed immediately in code editor"}),e.jsx("text",{x:"35",y:"195",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"✅ Zero Customer Impact"}),e.jsx("rect",{x:"290",y:"45",width:"240",height:"170",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("text",{x:"300",y:"70",fill:"#e0f2fe",fontSize:"12",fontWeight:"bold",children:"2. CI Pipeline (Minutes)"}),e.jsx("text",{x:"300",y:"95",fill:"#bae6fd",fontSize:"9",children:"Time to catch bug: ~5 Minutes"}),e.jsx("text",{x:"300",y:"115",fill:"#fde047",fontSize:"9",fontWeight:"bold",children:"Cost to fix: $10 (Minor)"}),e.jsx("text",{x:"300",y:"145",fill:"#e0f2fe",fontSize:"8",children:"• Caught by GitHub Actions"}),e.jsx("text",{x:"300",y:"160",fill:"#e0f2fe",fontSize:"8",children:"• Blocks pull request merge"}),e.jsx("text",{x:"300",y:"195",fill:"#fde047",fontSize:"8",fontWeight:"bold",children:"⚠️ Minor Dev Interruption"}),e.jsx("rect",{x:"555",y:"45",width:"240",height:"170",rx:"6",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"565",y:"70",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"3. Production (Months)"}),e.jsx("text",{x:"565",y:"95",fill:"#fecdd3",fontSize:"9",children:"Time to catch bug: ~30 Days"}),e.jsx("text",{x:"565",y:"115",fill:"#fb7185",fontSize:"9",fontWeight:"bold",children:"Cost to fix: $1000+ (Critical)"}),e.jsx("text",{x:"565",y:"145",fill:"#ffe4e6",fontSize:"8",children:"• Customer escalations & data corruption"}),e.jsx("text",{x:"565",y:"160",fill:"#ffe4e6",fontSize:"8",children:"• Emergency hotfixes & downtime"}),e.jsx("text",{x:"565",y:"195",fill:"#fb7185",fontSize:"8",fontWeight:"bold",children:"💥 Catastrophic Business Cost"})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧪"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive TDD Step-by-Step Cycle Simulator"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Walk through the Red, Green, and Refactor phases of implementing an institutional admission fee discount algorithm:"}),e.jsxs("div",{className:"bg-slate-950 p-5 sm:p-6 rounded-xl border border-slate-800/90 space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3",children:"Select Active TDD Phase:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[{id:"RED",label:"Phase 1: 🔴 RED",tag:"Failing Test Spec"},{id:"GREEN",label:"Phase 2: 🟢 GREEN",tag:"Minimum Working Code"},{id:"REFACTOR",label:"Phase 3: 🔵 REFACTOR",tag:"Clean Architecture"}].map(t=>e.jsxs("button",{onClick:()=>x(t.id),className:c("p-3 rounded-xl border text-left transition-all",s===t.id?t.id==="RED"?"bg-rose-950/60 border-rose-500 shadow-md shadow-rose-950/50":t.id==="GREEN"?"bg-emerald-950/60 border-emerald-500 shadow-md shadow-emerald-950/50":"bg-cyan-950/60 border-cyan-500 shadow-md shadow-cyan-950/50":"bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400"),children:[e.jsx("div",{className:"text-xs sm:text-sm font-bold text-slate-200",children:t.label}),e.jsx("div",{className:"text-[11px] text-teal-400 font-mono mt-0.5",children:t.tag})]},t.id))})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2",children:[e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-teal-900/50",children:[e.jsx("div",{className:"text-xs text-teal-400 font-medium mb-1",children:"Current TDD Stage"}),e.jsx("div",{className:"text-xs font-bold font-mono text-teal-300 mt-1 leading-snug",children:i})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-cyan-900/50",children:[e.jsx("div",{className:"text-xs text-cyan-400 font-medium mb-1",children:"Developer Goal"}),e.jsx("div",{className:"text-xs font-bold text-cyan-300 mt-1 leading-snug",children:a})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-purple-900/50",children:[e.jsx("div",{className:"text-xs text-purple-400 font-medium mb-1",children:"Test Runner State"}),e.jsx("div",{className:"text-xs font-bold font-mono text-purple-300 mt-1 leading-snug",children:o})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"TDD Source Artifacts at Current Step:"}),e.jsx("pre",{className:"p-4 bg-slate-900/90 border border-slate-800 rounded-xl text-xs sm:text-sm font-mono text-teal-200 overflow-x-auto leading-relaxed",children:h})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Production Code Labs & TDD Suites"})]}),e.jsx("p",{className:"text-slate-300 mb-8 text-base leading-relaxed",children:"Inspect, run, and master all four production-grade TDD suites covering Red-Green-Refactor cycles, baby-step incremental features, edge-case specifications, and the complete institutional admission engine:"}),e.jsxs("div",{className:"space-y-10",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:"Lab 1: Red-Green-Refactor Cycle (Student GPA Calculator)"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Step-by-step TDD progression from empty list handling (Red) to arithmetic mean calculation (Green) and defensive guard refactoring (Refactor)."})]}),e.jsx(m,{fileModule:_,title:"tdd_red_green_refactor_cycle.py",highlightLines:[15,23,44,58]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-cyan-300",children:"Lab 2: Incremental Baby-Step Feature Expansion from User Stories"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Implementing admission fees, merit scholarships, and stacked Barrackpore regional grants incrementally one story at a time."})]}),e.jsx(m,{fileModule:T,title:"tdd_incremental_feature_development.py",highlightLines:[19,34,40,47]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-purple-300",children:"Lab 3: Test-First Boundary & Edge Case Specifications"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Specifying registration token formatting, whitespace trimming, and sequence number overflow exceptions before implementing code."})]}),e.jsx(m,{fileModule:v,title:"tdd_edge_cases_and_refactoring.py",highlightLines:[12,23,29,35]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-amber-300",children:"Lab 4: Institutional Admission & Transcript Engine (100% TDD Case Study)"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Comprehensive multi-campus engine designed 100% via TDD, managing student enrollment, grade submission, and distinction honors across Mamata and Mahima."})]}),e.jsx(m,{fileModule:E,title:"institutional_tdd_admission_engine_case_study.py",highlightLines:[17,36,42,69]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. TDD Pitfalls & Anti-Patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"1. Writing Code Before a Failing Test"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Writing production code before having a failing test violates Law 1 of TDD, creating untestable code and missing the design feedback of test-first."}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# ANTI-PATTERN: Implement engine → write test later",`
`,"# BEST PRACTICE: Write failing test → write code to pass"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"2. Skipping the REFACTOR Phase"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Stopping as soon as tests turn green without cleaning duplication and naming creates accumulated technical debt and messy codebases."}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# ANTI-PATTERN: Red → Green → Red → Green",`
`,"# BEST PRACTICE: Red → Green → Refactor → Red → Green"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"3. Taking Giant Leaps (Skipping Baby Steps)"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Writing massive, 50-line unit tests that try to test an entire subsystem at once causes debugging paralysis when tests fail."}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# ANTI-PATTERN: Testing 10 interacting features in 1 test",`
`,"# BEST PRACTICE: Test 0 cases → 1 case → multiple → edge"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"4. Testing Implementation Details Instead of Behavior"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Asserting on internal private variables (",e.jsx("code",{className:"text-rose-400 font-mono",children:"engine._temp_cache"}),") makes tests brittle during internal refactorings."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# ANTI-PATTERN: assert obj._internal_counter == 1",`
`,'# BEST PRACTICE: assert obj.get_public_status() == "ACTIVE"']})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Professional TDD Checklist"})]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm sm:text-base",children:[e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Verify the Red Failure:"})," Ensure the test fails for the expected reason before writing production code."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Write the Minimum Code:"})," Implement only what is required to pass the currently failing test (YAGNI)."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Refactor on Green Only:"})," Clean code, remove duplication, and optimize design while all tests remain green."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Treat Tests as Living Specifications:"})," Write self-documenting tests that clearly describe business behavior to future maintainers."]})]})]})]}),e.jsx("section",{ref:n,className:"section-hidden",children:e.jsx(b,{title:"Test-Driven Development (TDD) FAQs",questions:w})}),e.jsx("section",{ref:n,className:"section-hidden",children:e.jsx(g,{content:D,title:"Topic 8: Test-Driven Development (TDD) Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic8_note.txt"})}),e.jsx("section",{ref:n,className:"section-hidden",children:e.jsx(y,{note:"Test-Driven Development transforms coding from an anxious guesswork process into a calm, confident engineering discipline. When building mission-critical student admission, fee waiver, and transcript generation engines across Barrackpore, Kolkata, Ichapur, and Jadavpur, writing our tests first for Mamata, Mahima, Abhronila, Susmita, and Debangshu ensures our API design is intuitive, our edge cases are covered from day one, and our code is refactored cleanly under the protection of a 100% green test harness."})})]})]})}export{P as default};
