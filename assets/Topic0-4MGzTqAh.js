import{b as i,j as e,bg as o}from"./vendor-react-core-Doz9nIC6.js";import{P as d}from"./PythonFileLoader-hCi5osN-.js";import{P as b}from"./PlainTextPrint-C08xhKA4.js";import{F as y}from"./FAQTemplate-CkSqDH4B.js";import{T as v}from"./TeacherSukantaHui-CC0AKmkm.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const A=`"""\r
# Module: 004_003_python-testing\r
# Topic 0: Why automated testing is mandatory for professional software\r
# File: manual_testing_fragility.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating the extreme fragility of manual print() debugging\r
#              versus automated self-verifying test assertions.\r
"""\r
\r
def calculate_admission_fee(base_fee: float, campus: str, is_early_bird: bool) -> float:\r
    """Calculates final net admission fee with regional and early bird discounts."""\r
    if base_fee <= 0:\r
        raise ValueError("Base fee must be greater than zero.")\r
        \r
    discount = 0.0\r
    \r
    # Campus specific discount\r
    if campus.lower() in ("barrackpore", "ichapur"):\r
        discount += 0.10  # 10% regional scholarship\r
    elif campus.lower() in ("kolkata", "jadavpur"):\r
        discount += 0.05  # 5% regional scholarship\r
        \r
    # Early bird discount\r
    if is_early_bird:\r
        discount += 0.05  # 5% additional early bird\r
        \r
    return base_fee * (1.0 - discount)\r
\r
# ------------------------------------------------------------------------------\r
# APPROACH 1: THE FRAGILITY OF MANUAL PRINT() DEBUGGING\r
# ------------------------------------------------------------------------------\r
def demonstrate_manual_print_debugging():\r
    print("\\n[MANUAL TESTING] Running print() debugging (Requires human eyes to check):")\r
    \r
    # Requires human to manually calculate in mind and visually inspect every line!\r
    res1 = calculate_admission_fee(10000.0, "Barrackpore", True)\r
    print(f"   * Test 1 (Barrackpore, Early): Result = Rs. {res1} (Expected 8500.0)")\r
\r
    res2 = calculate_admission_fee(10000.0, "Kolkata", False)\r
    print(f"   * Test 2 (Kolkata, Normal)   : Result = Rs. {res2} (Expected 9500.0)")\r
\r
    print("   [-] Flaw: If an algorithm bug produces 8600.0, the script still prints without warning!")\r
\r
# ------------------------------------------------------------------------------\r
# APPROACH 2: AUTOMATED SELF-VERIFYING ASSERTION CONTRACTS\r
# ------------------------------------------------------------------------------\r
def run_automated_test_suite():\r
    print("\\n[AUTOMATED TEST SUITE] Running Self-Verifying Assertion Contracts:")\r
    \r
    tests = [\r
        ("Barrackpore Early Bird (15% off)", 10000.0, "Barrackpore", True, 8500.0),\r
        ("Ichapur Regular (10% off)", 10000.0, "Ichapur", False, 9000.0),\r
        ("Kolkata Early Bird (10% off)", 10000.0, "Kolkata", True, 9000.0),\r
        ("Jadavpur Regular (5% off)", 10000.0, "Jadavpur", False, 9500.0),\r
        ("Other City Regular (0% off)", 10000.0, "Siliguri", False, 10000.0),\r
    ]\r
    \r
    passed_count = 0\r
    for name, fee, campus, early, expected in tests:\r
        actual = calculate_admission_fee(fee, campus, early)\r
        \r
        # Self-verifying contract: Raises AssertionError automatically if mismatched!\r
        assert actual == expected, f"FAIL: {name} | Got {actual}, Expected {expected}"\r
        \r
        print(f"   [PASS] {name:<32} -> Net Fee: Rs. {actual:,.2f}")\r
        passed_count += 1\r
        \r
    print(f"\\n[+] Total Automated Tests Passed: {passed_count}/{len(tests)} (100% Verified)")\r
\r
def main():\r
    print("=" * 75)\r
    print("[TESTING FOUNDATION] Manual Print Inspection vs Automated Test Assertions")\r
    print("=" * 75)\r
\r
    demonstrate_manual_print_debugging()\r
    run_automated_test_suite()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Never rely on manual 'print()' checks. Write automated assertions")\r
    print("           that fail loudly and immediately whenever logic breaks.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,_=`"""\r
# Module: 004_003_python-testing\r
# Topic 0: Why automated testing is mandatory for professional software\r
# File: regression_detection_suite.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating how automated regression tests catch silent bugs\r
#              introduced during code refactoring or feature additions.\r
"""\r
\r
# ------------------------------------------------------------------------------\r
# 1. ORIGINAL WORKING IMPLEMENTATION\r
# ------------------------------------------------------------------------------\r
def calculate_scholarship_v1(score: float, income: float) -> float:\r
    """Original working scholarship rule:\r
       - Score >= 90: Rs. 5,000\r
       - Score >= 75 and Income <= 300,000: Rs. 3,000\r
       - Otherwise: Rs. 0\r
    """\r
    if score >= 90.0:\r
        return 5000.0\r
    elif score >= 75.0 and income <= 300000.0:\r
        return 3000.0\r
    return 0.0\r
\r
# ------------------------------------------------------------------------------\r
# 2. BUGGY REFACTORED IMPLEMENTATION (Introduced an off-by-one boundary bug)\r
# ------------------------------------------------------------------------------\r
def calculate_scholarship_v2_buggy(score: float, income: float) -> float:\r
    """Developer attempted to refactor with ternary logic, but used '>' instead of '>='!"""\r
    if score > 90.0: # BUG: Off-by-one! Score of exactly 90.0 misses top tier!\r
        return 5000.0\r
    elif score >= 75.0 and income <= 300000.0:\r
        return 3000.0\r
    return 0.0\r
\r
# ------------------------------------------------------------------------------\r
# 3. REGRESSION TEST RUNNER\r
# ------------------------------------------------------------------------------\r
def run_regression_suite(func, version_name: str):\r
    print(f"\\n[...] Executing Regression Suite on '{version_name}'...")\r
    \r
    test_cases = [\r
        ("Mamata (Score 95.0, Top Tier)", 95.0, 500000.0, 5000.0),\r
        ("Mahima (Score Exactly 90.0 Boundary)", 90.0, 400000.0, 5000.0),\r
        ("Abhronila (Score 80.0, Low Income)", 80.0, 250000.0, 3000.0),\r
        ("Susmita (Score 80.0, High Income)", 80.0, 450000.0, 0.0),\r
        ("Debangshu (Score Exactly 75.0 Boundary)", 75.0, 280000.0, 3000.0),\r
        ("Sub-threshold Score (65.0)", 65.0, 100000.0, 0.0)\r
    ]\r
    \r
    failures = []\r
    for desc, score, income, expected in test_cases:\r
        actual = func(score, income)\r
        if actual != expected:\r
            failures.append(f"   [FAIL] {desc:<40} -> Expected {expected}, but Got {actual}")\r
        else:\r
            print(f"   [PASS] {desc:<40} -> Scholarship: Rs. {actual:,.2f}")\r
            \r
    if failures:\r
        print(f"\\n[!] REGRESSION DETECTED IN {version_name}:")\r
        for f in failures:\r
            print(f)\r
        return False\r
    else:\r
        print(f"\\n[+] ALL TESTS PASSED: '{version_name}' is 100% regression-free!")\r
        return True\r
\r
def main():\r
    print("=" * 75)\r
    print("[REGRESSION TESTING] Catching Silent Refactoring Bugs Automatically")\r
    print("=" * 75)\r
\r
    # 1. Run on original code\r
    run_regression_suite(calculate_scholarship_v1, "Version 1 (Original)")\r
\r
    # 2. Run on refactored code (Catches Mahima's boundary regression!)\r
    run_regression_suite(calculate_scholarship_v2_buggy, "Version 2 (Buggy Refactor)")\r
\r
    print("\\n" + "=" * 75)\r
    print("[TAKEAWAY] Automated regression tests catch subtle boundary bugs in seconds")\r
    print("           before they ever reach production or affect real students.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,S=`"""\r
# Module: 004_003_python-testing\r
# Topic 0: Why automated testing is mandatory for professional software\r
# File: assertion_contract_verification.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating the AAA (Arrange, Act, Assert) pattern, boundary\r
#              testing, and contract invariant verification in Python.\r
"""\r
\r
class StudentAccount:\r
    """Represents a student tuition fee balance ledger."""\r
    def __init__(self, student_id: str, name: str, campus: str, initial_balance: float = 0.0):\r
        if initial_balance < 0:\r
            raise ValueError("Initial balance cannot be negative.")\r
        self.student_id = student_id\r
        self.name = name\r
        self.campus = campus\r
        self.balance = float(initial_balance)\r
        self.transactions = []\r
\r
    def deposit(self, amount: float):\r
        """Deposits tuition payment."""\r
        if amount <= 0:\r
            raise ValueError("Deposit amount must be positive.")\r
        self.balance += amount\r
        self.transactions.append(("DEPOSIT", amount))\r
        return self.balance\r
\r
    def charge_fee(self, amount: float):\r
        """Charges course fee."""\r
        if amount <= 0:\r
            raise ValueError("Charge amount must be positive.")\r
        self.balance -= amount\r
        self.transactions.append(("CHARGE", amount))\r
        return self.balance\r
\r
# ------------------------------------------------------------------------------\r
# AAA (ARRANGE, ACT, ASSERT) TEST CONTRACTS\r
# ------------------------------------------------------------------------------\r
\r
def test_student_account_initialization():\r
    """Test 1: Verifying account creation and initial state."""\r
    # [ARRANGE] Setup test fixtures\r
    sid = "STU_BP_001"\r
    name = "Mamata"\r
    campus = "Barrackpore"\r
    init_bal = 1000.0\r
\r
    # [ACT] Execute target constructor\r
    account = StudentAccount(sid, name, campus, init_bal)\r
\r
    # [ASSERT] Verify post-conditions\r
    assert account.student_id == sid, "Student ID mismatch"\r
    assert account.name == name, "Student name mismatch"\r
    assert account.campus == campus, "Campus mismatch"\r
    assert account.balance == 1000.0, "Balance initialization failed"\r
    assert len(account.transactions) == 0, "Transactions should start empty"\r
    print("   [PASS] test_student_account_initialization")\r
\r
def test_deposit_and_charge_lifecycle():\r
    """Test 2: Verifying balance mutations and transaction logs."""\r
    # [ARRANGE]\r
    account = StudentAccount("STU_CC_002", "Mahima", "Kolkata", 5000.0)\r
\r
    # [ACT] Perform operations\r
    account.charge_fee(2000.0)  # Balance: 3000.0\r
    account.deposit(1500.0)     # Balance: 4500.0\r
\r
    # [ASSERT]\r
    assert account.balance == 4500.0, f"Expected 4500.0, but got {account.balance}"\r
    assert len(account.transactions) == 2, "Expected exactly 2 transaction entries"\r
    assert account.transactions[0] == ("CHARGE", 2000.0), "First transaction log invalid"\r
    assert account.transactions[1] == ("DEPOSIT", 1500.0), "Second transaction log invalid"\r
    print("   [PASS] test_deposit_and_charge_lifecycle")\r
\r
def test_negative_deposit_raises_exception():\r
    """Test 3: Verifying negative deposit raises ValueError."""\r
    # [ARRANGE]\r
    account = StudentAccount("STU_IC_003", "Abhronila", "Ichapur", 2000.0)\r
    exception_caught = False\r
\r
    # [ACT & ASSERT]\r
    try:\r
        account.deposit(-500.0)\r
    except ValueError as e:\r
        exception_caught = True\r
        assert "must be positive" in str(e).lower()\r
\r
    assert exception_caught, "Expected ValueError when depositing negative amount!"\r
    assert account.balance == 2000.0, "Balance should not change on failed deposit"\r
    print("   [PASS] test_negative_deposit_raises_exception")\r
\r
def main():\r
    print("=" * 75)\r
    print("[CONTRACT VERIFICATION] AAA Pattern (Arrange, Act, Assert) Test Suite")\r
    print("=" * 75)\r
\r
    test_student_account_initialization()\r
    test_deposit_and_charge_lifecycle()\r
    test_negative_deposit_raises_exception()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] The AAA pattern structures tests into predictable, readable,")\r
    print("           and maintainable contracts that guard business invariants.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,w=`"""\r
# Module: 004_003_python-testing\r
# Topic 0: Why automated testing is mandatory for professional software\r
# File: institutional_grade_testing_case.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: End-to-end automated testing suite for student grading,\r
#              attendance thresholds, and honors distinction evaluation.\r
"""\r
\r
def evaluate_student_performance(scores: list[float], attendance_pct: float) -> dict:\r
    """Evaluates student average score, letter grade, and honors distinction."""\r
    if not scores:\r
        raise ValueError("Score list cannot be empty.")\r
    if not (0.0 <= attendance_pct <= 100.0):\r
        raise ValueError(f"Invalid attendance percentage: {attendance_pct}")\r
\r
    avg_score = sum(scores) / len(scores)\r
\r
    # Attendance disqualification rule\r
    if attendance_pct < 75.0:\r
        return {\r
            "average": round(avg_score, 2),\r
            "grade": "F (Low Attendance)",\r
            "passed": False,\r
            "honors": False\r
        }\r
\r
    # Grade determination\r
    if avg_score >= 90.0:\r
        grade = "A+"\r
    elif avg_score >= 80.0:\r
        grade = "A"\r
    elif avg_score >= 60.0:\r
        grade = "B"\r
    elif avg_score >= 40.0:\r
        grade = "C"\r
    else:\r
        grade = "F"\r
\r
    passed = grade != "F"\r
    honors = (avg_score >= 85.0) and (attendance_pct >= 90.0)\r
\r
    return {\r
        "average": round(avg_score, 2),\r
        "grade": grade,\r
        "passed": passed,\r
        "honors": honors\r
    }\r
\r
# ------------------------------------------------------------------------------\r
# AUTOMATED TEST CASES\r
# ------------------------------------------------------------------------------\r
def run_institutional_test_suite():\r
    tests = [\r
        {\r
            "name": "Mamata (Top Performer: A+, Honors)",\r
            "scores": [95.0, 92.0, 98.0],\r
            "attendance": 96.0,\r
            "expected_grade": "A+",\r
            "expected_passed": True,\r
            "expected_honors": True\r
        },\r
        {\r
            "name": "Mahima (Good Student: A, No Honors due to 88% attendance)",\r
            "scores": [82.0, 85.0, 88.0],\r
            "attendance": 88.0,\r
            "expected_grade": "A",\r
            "expected_passed": True,\r
            "expected_honors": False\r
        },\r
        {\r
            "name": "Abhronila (High Score, Failed on Low Attendance < 75%)",\r
            "scores": [95.0, 98.0, 92.0],\r
            "attendance": 70.0,\r
            "expected_grade": "F (Low Attendance)",\r
            "expected_passed": False,\r
            "expected_honors": False\r
        },\r
        {\r
            "name": "Susmita (Exact Boundary Passing: 40.0 Avg, 75.0% Attendance)",\r
            "scores": [40.0, 40.0, 40.0],\r
            "attendance": 75.0,\r
            "expected_grade": "C",\r
            "expected_passed": True,\r
            "expected_honors": False\r
        },\r
        {\r
            "name": "Debangshu (Failing Grade: 35.0 Avg, 95% Attendance)",\r
            "scores": [30.0, 40.0, 35.0],\r
            "attendance": 95.0,\r
            "expected_grade": "F",\r
            "expected_passed": False,\r
            "expected_honors": False\r
        }\r
    ]\r
\r
    print("\\n[...] Running Institutional Student Evaluation Test Suite...")\r
    passed = 0\r
    for t in tests:\r
        res = evaluate_student_performance(t["scores"], t["attendance"])\r
        \r
        assert res["grade"] == t["expected_grade"], f"Grade mismatch for {t['name']}"\r
        assert res["passed"] == t["expected_passed"], f"Pass status mismatch for {t['name']}"\r
        assert res["honors"] == t["expected_honors"], f"Honors status mismatch for {t['name']}"\r
        \r
        print(f"   [PASS] {t['name']:<60} -> Grade: {res['grade']:<18} | Honors: {res['honors']}")\r
        passed += 1\r
\r
    print(f"\\n[+] Successfully verified {passed}/{len(tests)} candidate grading scenarios!")\r
\r
def main():\r
    print("=" * 80)\r
    print("[CASE STUDY] Institutional Student Evaluation Automated Test Suite")\r
    print("=" * 80)\r
\r
    run_institutional_test_suite()\r
\r
    print("=" * 80)\r
    print("[TAKEAWAY] Automated tests cover complex multi-variable business rules")\r
    print("           (grades, attendance gates, honors flags) with complete fidelity.")\r
    print("=" * 80)\r
\r
if __name__ == "__main__":\r
    main()\r
`,T=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 4: PRO LEVEL • MODULE 004_003: PYTHON TESTING\r
             TOPIC 0: WHY AUTOMATED TESTING IS MANDATORY FOR PROFESSIONAL SOFTWARE\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. THE VALUE OF AUTOMATED TESTING\r
--------------------------------------------------------------------------------\r
  Manual 'print()' testing fails because:\r
  - It is slow, non-repeatable, and human error-prone.\r
  - It cannot run automatically inside Continuous Integration (CI) pipelines.\r
  - It leaves no permanent regression shield when codebase changes.\r
\r
  Automated tests provide:\r
  - Rapid sub-second feedback during development.\r
  - Regression detection: alerts instantly when a bug is introduced.\r
  - Living executable documentation of system requirements.\r
\r
--------------------------------------------------------------------------------\r
2. BASIC ASSERTION CONTRACTS IN PYTHON\r
--------------------------------------------------------------------------------\r
  def calculate_scholarship(score: float, base_fee: float) -> float:\r
      if score >= 90.0:\r
          return base_fee * 0.50 # 50% waiver\r
      elif score >= 75.0:\r
          return base_fee * 0.25 # 25% waiver\r
      return 0.0\r
\r
  # Automated Test Verification Contract\r
  assert calculate_scholarship(95.0, 10000.0) == 5000.0, "Failed 90%+ tier"\r
  assert calculate_scholarship(80.0, 10000.0) == 2500.0, "Failed 75%+ tier"\r
  assert calculate_scholarship(60.0, 10000.0) == 0.0,    "Failed below 75% tier"\r
\r
================================================================================\r
       END OF STUDY NOTE • TOPIC 0: WHY AUTOMATED TESTING IS MANDATORY\r
================================================================================\r
`,j=[{question:"Why is automated testing fundamentally superior to manual 'print()' debugging in professional software?",shortAnswer:"Automated tests execute deterministically in milliseconds, can be run automatically on every code commit in CI/CD pipelines, verify exact expected assertions, and permanently guard against regressions without relying on human vigilance.",explanation:"Deterministic repeatability and continuous quality gating.",hint:"Think about speed, repeatability, regression protection, and CI/CD automation.",level:"basic",codeExample:`# Automated assertions vs manual print inspections
assert calculate_fee(5000, 0.1) == 4500.0`},{question:"What is a 'Regression' in software development?",shortAnswer:"A regression is a software defect where a previously working feature or logic gets broken unintentionally after adding new code, optimizing performance, or refactoring existing modules.",explanation:"Unintended degradation of existing working functionality.",hint:"A bug where previously working code breaks when new changes are made.",level:"basic",codeExample:"# Automated test suites catch regressions immediately upon code changes"},{question:"How does the 'Cost of Defect' curve behave as a bug moves from development to production?",shortAnswer:"The cost of fixing a bug increases exponentially: finding a bug during development costs minutes of developer time, in staging it costs hours of QA time, but in production it leads to data corruption, financial loss, brand damage, and emergency patching.",explanation:"Exponential cost progression of software defects across lifecycle stages.",hint:"Bugs caught early in development cost 10x-100x less to fix than in production.",level:"basic",codeExample:"# Catching bugs at dev time via automated tests saves exponential costs"},{question:"What does it mean for an automated test to be 'Deterministic'?",shortAnswer:"A deterministic test produces the exact same outcome (pass or fail) every single time it runs given the same input, with zero flakiness or dependence on external variable states like network latency or random time.",explanation:"Predictable, repeatable test execution without intermittent failures.",hint:"Produces identical results on every single run without random flakiness.",level:"moderate",codeExample:"# Deterministic: No unseeded random numbers or uncontrolled network dependencies"},{question:"What is the primary role of an 'Assertion' in Python testing?",shortAnswer:"An assertion evaluates a boolean condition; if the condition is True, execution proceeds smoothly, but if False, Python raises an 'AssertionError' with a descriptive error message indicating test failure.",explanation:"Contract verification and test failure triggering.",hint:"assert condition, 'Error message' raises AssertionError when condition is False.",level:"basic",codeExample:"assert student.status == 'ENROLLED', 'Student was not enrolled'"},{question:"Why should automated tests run in complete isolation from one another?",shortAnswer:"Test isolation ensures that state changes from one test (like modifying a database record or global variable) do not bleed into or corrupt subsequent tests, allowing tests to run in any order or in parallel.",explanation:"State encapsulation and prevention of test contamination.",hint:"Prevents one test's mutations from affecting or failing another test.",level:"moderate",codeExample:"# Clean up state before and after every test run"},{question:"How do automated tests act as 'Executable Documentation'?",shortAnswer:"Tests demonstrate exact real-world inputs, method calls, edge cases, and expected output values in actual executable code that never goes out of date because outdated test code immediately fails.",explanation:"Self-validating living specifications.",hint:"Tests show developers exactly how functions are meant to be called and expected outputs.",level:"moderate",codeExample:"# A test method clearly documents the behavior of discount rules"},{question:"What is a 'Quality Gate' in Continuous Integration (CI) pipelines?",shortAnswer:"A quality gate is an automated check (such as all tests passing with zero failures and meeting code coverage thresholds) that must succeed before code can be merged into the main branch or deployed.",explanation:"Automated deployment blockers based on test results.",hint:"An automated rule in CI (like GitHub Actions) preventing buggy code merges.",level:"basic",codeExample:"# GitHub Actions step: run: pytest"},{question:"Why can 'assert' statements in production application code be dangerous if Python is run with optimizations?",shortAnswer:"When Python is executed with the '-O' (optimize) flag, all built-in 'assert' statements are stripped out and ignored by the bytecode compiler, meaning critical business validation must use explicit 'if ... raise ValueError' checks.",explanation:"Bytecode stripping of assert statements during optimized execution.",hint:"Python -O removes assert statements; use explicit if-checks for runtime validation.",level:"complex",codeExample:`# In production logic: if fee < 0: raise ValueError('Invalid fee')
# In test files: assert fee > 0`},{question:"What is the difference between a False Positive and a False Negative in automated testing?",shortAnswer:"A False Positive is when a test fails even though the code is correct (flaky test); a False Negative is when a test passes even though the code contains a serious bug (insufficient assertion).",explanation:"Test precision and sensitivity errors.",hint:"False positive: test fails on good code; False negative: test passes on buggy code.",level:"moderate",codeExample:"# High-quality tests minimize both false positives and false negatives"},{question:"What is the AAA pattern in automated test design?",shortAnswer:"Arrange (prepare the data, dependencies, and environment), Act (execute the function or method under test), and Assert (verify that the actual result matches the expected outcome).",explanation:"Standard structural template for clear, readable tests.",hint:"Arrange, Act, Assert.",level:"basic",codeExample:`# Arrange: s = Student('Mamata', 95)
# Act: res = s.get_grade()
# Assert: assert res == 'A+'`},{question:"Why is testing edge cases (boundary values) critical?",shortAnswer:"Bugs frequently cluster at operational boundaries (e.g. 0, -1, maximum values, empty lists, boundary thresholds like 74.9 vs 75.0) where developers make off-by-one errors with '>' vs '>='.",explanation:"Boundary value analysis and off-by-one fault localization.",hint:"Most bugs happen at boundary limits like 0, empty inputs, or exact threshold cutoffs.",level:"basic",codeExample:`assert get_tier(74.9) == 'SILVER'
assert get_tier(75.0) == 'GOLD'`},{question:"What is 'Code Refactoring' and why is it virtually impossible without automated tests?",shortAnswer:"Refactoring is restructuring internal code without altering its external behavior; without tests, developers cannot verify whether optimizations or cleanups accidentally broke existing features.",explanation:"Safety net for structural codebase evolution.",hint:"Automated tests give developers confidence that cleanups didn't break functionality.",level:"basic",codeExample:"# Refactoring code with confidence when test suite passes green"},{question:"How do automated tests accelerate feature development velocity over time?",shortAnswer:"While writing tests takes slight initial time, it eliminates hours of repetitive manual testing, debugging regressions, and emergency hotfixes, allowing teams to ship updates rapidly with total confidence.",explanation:"Long-term velocity compounding vs short-term manual debt.",hint:"Automated tests prevent compounding technical debt and manual testing bottlenecks.",level:"moderate",codeExample:"# Fast test suite runs in 2 seconds vs 20 minutes manual UI clicking"},{question:"What is a 'Smoke Test'?",shortAnswer:"A preliminary subset of critical tests run first to verify that the core application builds and starts successfully before running full deep test suites.",explanation:"High-level sanity check for critical subsystem availability.",hint:"A fast high-level test ensuring the core app doesn't crash on startup.",level:"basic",codeExample:"# Smoke test: assert app.health_check() == 200"},{question:"Why should test code be maintained to the same high clean-code standards as production code?",shortAnswer:"Poorly written, brittle test code becomes difficult to understand and maintain, leading developers to disable or ignore failing tests rather than fixing real bugs.",explanation:"Test maintainability and preventing test suite decay.",hint:"Messy tests become technical debt and get deleted or ignored.",level:"moderate",codeExample:"# Clean, descriptive, self-contained test helper methods"},{question:"What is 'Flakiness' in testing and why is it dangerous?",shortAnswer:"A flaky test intermittently passes or fails without any code changes; it destroys developer trust in the test suite, causing engineers to overlook genuine production regressions.",explanation:"Non-deterministic test failures eroding developer confidence.",hint:"Intermittent random test failures that erode trust in the test suite.",level:"complex",codeExample:"# Flaky: sleep(1) instead of polling for actual state readiness"},{question:"How do automated tests enable fearless dependency upgrades (e.g. updating Python or libraries)?",shortAnswer:"Running the comprehensive test suite after upgrading Python or third-party packages immediately highlights breaking API changes or behavioral discrepancies across the application.",explanation:"Ecosystem migration safety and compatibility verification.",hint:"Tests verify that updating libraries didn't break application behavior.",level:"basic",codeExample:"# Upgrade dependency -> run pytest -> verify all green"},{question:"What is the relationship between automated testing and software architecture modularity?",shortAnswer:"Code that is easy to test requires low coupling, dependency injection, and clean separation of concerns, naturally driving developers toward superior modular software architecture.",explanation:"Testability driving clean architectural decoupling.",hint:"Writing tests forces code to be modular, loosely coupled, and well-structured.",level:"moderate",codeExample:"# Decoupled services are simple to instantiate and test in isolation"},{question:"What is the ultimate golden rule of professional software testing?",shortAnswer:"Never consider a feature or bugfix complete until it is accompanied by deterministic automated tests that prove it works, handle edge cases, and permanently prevent future regressions.",explanation:"The foundational principle of software engineering professionalism.",hint:"Code without automated tests is unfinished and vulnerable to silent breakage.",level:"basic",codeExample:"# Professional Standard: Code + Automated Tests = Production Ready"}];function D(){const c=i.useRef([]),[a,u]=i.useState("defectCurve"),[s,h]=i.useState("CLEAN"),[N,p]=i.useState(!1);let x=5,r=0,m="All 5 automated test contracts passed with zero regressions!";s==="BUGGY_OFF_BY_ONE"?(x=4,r=1,m="REGRESSION CAUGHT: Boundary test failed! Student with score 90.0 missed top scholarship!"):s==="BUGGY_NEGATIVE_FEE"&&(x=3,r=2,m="CRITICAL FAILURE: Invalid negative fee did not raise ValueError contract!");const g=`# Automated Testing Verification Contract
# System State: ${s}

def calculate_scholarship(score: float, income: float) -> float:
${s==="CLEAN"?`    if score >= 90.0:  # Clean boundary check
        return 5000.0
    elif score >= 75.0 and income <= 300000.0:
        return 3000.0
    return 0.0`:s==="BUGGY_OFF_BY_ONE"?`    if score > 90.0:   # ⚠️ BUG: Off-by-one! Fails for exact score of 90.0!
        return 5000.0
    elif score >= 75.0 and income <= 300000.0:
        return 3000.0
    return 0.0`:`    if score >= 90.0:
        return 5000.0
    # ⚠️ BUG: Missing validation contract for negative income/fee!
    return 0.0`}

# --- AUTOMATED ASSERTION CONTRACT SUITE ---
def test_scholarship_boundaries():
    assert calculate_scholarship(95.0, 500000.0) == 5000.0, "Mamata top tier failed"
    assert calculate_scholarship(90.0, 400000.0) == 5000.0, "Mahima exact boundary 90.0 failed"
    assert calculate_scholarship(80.0, 250000.0) == 3000.0, "Abhronila middle tier failed"
    assert calculate_scholarship(75.0, 280000.0) == 3000.0, "Debangshu exact boundary 75.0 failed"
    print("✅ All test assertions verified successfully!")`;i.useEffect(()=>{const t=new IntersectionObserver(l=>{l.forEach(f=>{f.isIntersecting&&f.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return c.current.forEach(l=>{l&&t.observe(l)}),()=>t.disconnect()},[]);const n=t=>{t&&!c.current.includes(t)&&c.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:n,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 4 • Module 004_003"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 0"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Automated Testing, PyTest & Quality Assurance"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Why Automated Testing is ",e.jsx("span",{className:"text-teal-400",children:"Mandatory"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Discover why automated software testing is the bedrock of professional engineering: understanding the exponential cost-of-defect curve, replacing error-prone manual ",e.jsx("code",{className:"text-rose-400 font-mono",children:"print()"})," debugging with deterministic assertion contracts, building permanent regression shields, structuring tests with the Arrange-Act-Assert (AAA) pattern, and automating quality gates in CI/CD pipelines."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Regression Prevention"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ Sub-Second Verification"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📐 AAA Pattern (Arrange, Act, Assert)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🚀 CI/CD Quality Gates"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Economics & Foundations of Automated Testing"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["In amateur software projects, developers test by running code and visually scanning terminal ",e.jsx("code",{className:"text-rose-400 font-mono",children:"print()"})," outputs. In enterprise systems, this approach quickly collapses under codebase size. Automated testing transforms software quality from a hope into an enforceable mathematical guarantee:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Defect Economics"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"Exponential Cost Curve"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Catching bugs at dev time takes seconds; in production, bugs trigger data corruption, financial loss, and emergency downtime."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Regression Shield"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"Zero Breakage Guarantee"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Enables fearless refactoring and performance optimization by immediately alerting when previously working features break."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Living Documentation"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"Executable Specs"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Tests clearly demonstrate required inputs, boundary edge cases, and expected outputs in actual code that never goes obsolete."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 shadow-lg",children:[e.jsx("div",{className:"text-amber-400 font-bold text-sm mb-1",children:"4️⃣ Continuous Quality"}),e.jsx("code",{className:"text-xs font-mono text-amber-300 block mb-1",children:"CI/CD Quality Gates"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Automated test suites run on every Git pull request, physically blocking buggy code from being merged or deployed."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The AAA Pattern: Arrange, Act, Assert"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Professional tests follow the ",e.jsx("span",{className:"text-teal-300 font-bold",children:"AAA Pattern"}),": 1. ",e.jsx("span",{className:"text-teal-300",children:"Arrange"})," (prepare inputs, fixtures, accounts) ➔ 2. ",e.jsx("span",{className:"text-cyan-300",children:"Act"})," (invoke target function or method) ➔ 3. ",e.jsx("span",{className:"text-emerald-400",children:"Assert"})," (validate actual output against expected contract)."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Defect Curves, Regression Shields & AAA Pipelines"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>u("defectCurve"),className:o("px-3 py-1.5 rounded-lg transition-all",a==="defectCurve"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Cost of Defect Curve"}),e.jsx("button",{onClick:()=>u("regressionShield"),className:o("px-3 py-1.5 rounded-lg transition-all",a==="regressionShield"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Regression Shield Workflow"}),e.jsx("button",{onClick:()=>u("aaaPipeline"),className:o("px-3 py-1.5 rounded-lg transition-all",a==="aaaPipeline"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"AAA Test Pipeline"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Exploring the economics of software bugs, regression feedback loops, and structured assertion execution:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:a==="defectCurve"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"THE DEFECT COST CURVE: CATCHING BUGS AT DEVELOPMENT VS IN PRODUCTION"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#0f172a",stroke:"#14b8a6"}),e.jsx("rect",{x:"30",y:"160",width:"160",height:"60",rx:"4",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"40",y:"185",fill:"#a7f3d0",fontSize:"11",fontWeight:"bold",children:"1. Development"}),e.jsx("text",{x:"40",y:"202",fill:"#d1fae5",fontSize:"10",children:"Cost: ~1x (Seconds)"}),e.jsx("text",{x:"40",y:"215",fill:"#6ee7b7",fontSize:"8",children:"Fixed during typing"}),e.jsx("rect",{x:"230",y:"120",width:"160",height:"100",rx:"4",fill:"#1e3a8a",stroke:"#3b82f6"}),e.jsx("text",{x:"240",y:"145",fill:"#bfdbfe",fontSize:"11",fontWeight:"bold",children:"2. CI / Staging"}),e.jsx("text",{x:"240",y:"165",fill:"#dbeafe",fontSize:"10",children:"Cost: ~10x (Hours)"}),e.jsx("text",{x:"240",y:"180",fill:"#93c5fd",fontSize:"8",children:"Blocked by test gate"}),e.jsx("rect",{x:"430",y:"80",width:"160",height:"140",rx:"4",fill:"#78350f",stroke:"#f59e0b"}),e.jsx("text",{x:"440",y:"105",fill:"#fde68a",fontSize:"11",fontWeight:"bold",children:"3. QA Testing"}),e.jsx("text",{x:"440",y:"125",fill:"#fef3c7",fontSize:"10",children:"Cost: ~30x (Days)"}),e.jsx("text",{x:"440",y:"140",fill:"#fcd34d",fontSize:"8",children:"Manual bug triage"}),e.jsx("rect",{x:"630",y:"30",width:"160",height:"190",rx:"4",fill:"#881337",stroke:"#f43f5e"}),e.jsx("text",{x:"640",y:"55",fill:"#fecdd3",fontSize:"11",fontWeight:"bold",children:"4. Production"}),e.jsx("text",{x:"640",y:"75",fill:"#ffe4e6",fontSize:"11",fontWeight:"bold",children:"Cost: 100x - 1000x!"}),e.jsx("text",{x:"640",y:"95",fill:"#fda4af",fontSize:"9",children:"Data corruption,"}),e.jsx("text",{x:"640",y:"110",fill:"#fda4af",fontSize:"9",children:"Financial lawsuits,"}),e.jsx("text",{x:"640",y:"125",fill:"#fda4af",fontSize:"9",children:"Emergency hotfix"})]})]}):a==="regressionShield"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"REGRESSION SHIELD: HOW AUTOMATED TESTS PROTECT REFACTORED CODE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#082f49",stroke:"#0ea5e9"}),e.jsx("rect",{x:"30",y:"50",width:"220",height:"130",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("text",{x:"45",y:"75",fill:"#e0f2fe",fontSize:"11",fontWeight:"bold",children:"1. Existing Features"}),e.jsx("text",{x:"45",y:"98",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"Scholarship Rules v1"}),e.jsx("text",{x:"45",y:"116",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"Passing 100% Tests"}),e.jsx("text",{x:"45",y:"145",fill:"#86efac",fontSize:"9",fontWeight:"bold",children:"🛡️ Baseline Protected"}),e.jsx("rect",{x:"290",y:"50",width:"240",height:"130",rx:"6",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"305",y:"75",fill:"#ffe4e6",fontSize:"11",fontWeight:"bold",children:"2. Developer Modifies Code"}),e.jsx("text",{x:"305",y:"98",fill:"#fecdd3",fontSize:"9",fontFamily:"monospace",children:"Refactors logic to v2"}),e.jsx("text",{x:"305",y:"116",fill:"#fecdd3",fontSize:"9",fontFamily:"monospace",children:"Accidentally uses '>'"}),e.jsx("text",{x:"305",y:"145",fill:"#fca5a5",fontSize:"9",fontWeight:"bold",children:"⚠️ Silent boundary bug!"}),e.jsx("rect",{x:"570",y:"50",width:"220",height:"130",rx:"6",fill:"#064e3b",stroke:"#34d399"}),e.jsx("text",{x:"585",y:"75",fill:"#d1fae5",fontSize:"11",fontWeight:"bold",children:"3. Instant CI Catch"}),e.jsx("text",{x:"585",y:"98",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"pytest detects fail"}),e.jsx("text",{x:"585",y:"116",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"Mahima 90.0 score"}),e.jsx("text",{x:"585",y:"145",fill:"#fde047",fontSize:"9",fontWeight:"bold",children:"🚀 Bug caught in 0.05s!"}),e.jsx("rect",{x:"30",y:"195",width:"760",height:"35",rx:"4",fill:"#0c4a6e",stroke:"#0284c7"}),e.jsx("text",{x:"45",y:"217",fill:"#e0f2fe",fontSize:"10",children:"💡 Result: The developer fixes the bug in seconds before any code is committed or deployed!"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"THE AAA PATTERN: ARRANGE ➔ ACT ➔ ASSERT IN ACTION"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#1e1b4b",stroke:"#a855f7"}),e.jsx("rect",{x:"30",y:"50",width:"230",height:"130",rx:"6",fill:"#3b0764",stroke:"#c084fc"}),e.jsx("text",{x:"45",y:"75",fill:"#f3e8ff",fontSize:"12",fontWeight:"bold",children:"1. ARRANGE"}),e.jsx("text",{x:"45",y:"98",fill:"#d8b4fe",fontSize:"9",fontFamily:"monospace",children:'sid = "STU_BP_001"'}),e.jsx("text",{x:"45",y:"116",fill:"#d8b4fe",fontSize:"9",fontFamily:"monospace",children:"acc = StudentAccount(sid)"}),e.jsx("text",{x:"45",y:"145",fill:"#fbcfe8",fontSize:"9",children:"Prepare test fixtures"}),e.jsx("rect",{x:"295",y:"50",width:"230",height:"130",rx:"6",fill:"#1e293b",stroke:"#60a5fa"}),e.jsx("text",{x:"310",y:"75",fill:"#e0f2fe",fontSize:"12",fontWeight:"bold",children:"2. ACT"}),e.jsx("text",{x:"310",y:"98",fill:"#93c5fd",fontSize:"9",fontFamily:"monospace",children:"acc.deposit(1500.0)"}),e.jsx("text",{x:"310",y:"116",fill:"#93c5fd",fontSize:"9",fontFamily:"monospace",children:"acc.charge_fee(500.0)"}),e.jsx("text",{x:"310",y:"145",fill:"#bfdbfe",fontSize:"9",children:"Execute target logic"}),e.jsx("rect",{x:"560",y:"50",width:"230",height:"130",rx:"6",fill:"#064e3b",stroke:"#34d399"}),e.jsx("text",{x:"575",y:"75",fill:"#d1fae5",fontSize:"12",fontWeight:"bold",children:"3. ASSERT"}),e.jsx("text",{x:"575",y:"98",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"assert acc.balance == 1000"}),e.jsx("text",{x:"575",y:"116",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"assert len(acc.tx) == 2"}),e.jsx("text",{x:"575",y:"145",fill:"#86efac",fontSize:"9",children:"Verify invariant contract"}),e.jsx("rect",{x:"30",y:"195",width:"760",height:"35",rx:"4",fill:"#0f172a",stroke:"#a855f7"}),e.jsx("text",{x:"45",y:"217",fill:"#e9d5ff",fontSize:"10",children:"🎯 Structured AAA tests are crystal clear, self-contained, and simple to debug when assertions fail."})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧪"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Regression Detector & Assertion Simulator"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Simulate code changes to a student scholarship rules engine and run the automated test suite to observe how assertions immediately catch silent regressions:"}),e.jsxs("div",{className:"bg-slate-950 p-5 sm:p-6 rounded-xl border border-slate-800/90 space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3",children:"Simulate Code State / Refactoring Change:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[{id:"CLEAN",label:"Clean Production Code",icon:"✅",desc:"Correct >= boundary checks"},{id:"BUGGY_OFF_BY_ONE",label:"Off-by-One Boundary Bug",icon:"⚠️",desc:"Refactored with > instead of >="},{id:"BUGGY_NEGATIVE_FEE",label:"Missing Input Validation",icon:"💥",desc:"No check for negative balance"}].map(t=>e.jsxs("button",{onClick:()=>{h(t.id),p(!0)},className:o("p-3 rounded-xl border text-left transition-all",s===t.id?"bg-teal-950/60 border-teal-500 shadow-md shadow-teal-950/50":"bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400"),children:[e.jsxs("div",{className:"text-base mb-1",children:[t.icon," ",e.jsx("strong",{className:"text-slate-200 text-xs sm:text-sm",children:t.label})]}),e.jsx("div",{className:"text-[11px] text-slate-400",children:t.desc})]},t.id))})]}),e.jsxs("div",{className:o("p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3",r===0?"bg-emerald-950/40 border-emerald-800/70 text-emerald-300":"bg-rose-950/40 border-rose-800/70 text-rose-300"),children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-xs uppercase font-mono tracking-wider font-bold",children:r===0?"✅ TEST SUITE STATUS: ALL GREEN":"🚨 TEST SUITE STATUS: REGRESSION DETECTED"}),e.jsx("div",{className:"text-sm font-semibold mt-0.5",children:m})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:"text-xs font-mono bg-slate-900/80 px-2.5 py-1 rounded border border-slate-700 text-slate-300",children:["Passed: ",x]}),e.jsxs("span",{className:"text-xs font-mono bg-slate-900/80 px-2.5 py-1 rounded border border-slate-700 text-slate-300",children:["Failed: ",r]})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"Active Code Implementation & Assertion Suite:"}),e.jsx("pre",{className:"p-4 bg-slate-900/90 border border-slate-800 rounded-xl text-xs sm:text-sm font-mono text-teal-200 overflow-x-auto leading-relaxed",children:g})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Production Code Labs & Test Suites"})]}),e.jsx("p",{className:"text-slate-300 mb-8 text-base leading-relaxed",children:"Inspect, run, and master all four production-grade testing labs covering manual print fragility, automated regression suites, the AAA verification pattern, and multi-campus student grade evaluation:"}),e.jsxs("div",{className:"space-y-10",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:"Lab 1: Manual Print Debugging vs Self-Verifying Assertions"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Demonstrating how manual ",e.jsx("code",{className:"text-rose-400 font-mono",children:"print()"})," visual checks fail when algorithms output wrong values, and replacing them with self-verifying test assertion contracts."]})]}),e.jsx(d,{fileModule:A,title:"manual_testing_fragility.py",highlightLines:[12,33,52]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-cyan-300",children:"Lab 2: Automated Regression Detection & Boundary Verification"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Demonstrating how an automated test suite immediately catches an off-by-one boundary regression introduced during code refactoring across Barrackpore and Kolkata students."})]}),e.jsx(d,{fileModule:_,title:"regression_detection_suite.py",highlightLines:[25,43,51]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-purple-300",children:"Lab 3: The Arrange-Act-Assert (AAA) Pattern & Invariants"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Structuring test cases into clean Arrange, Act, Assert blocks, validating mutations, transaction logs, and exception-raising contracts."})]}),e.jsx(d,{fileModule:S,title:"assertion_contract_verification.py",highlightLines:[42,57,72]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-amber-300",children:"Lab 4: Institutional Student Grading & Attendance Test Suite"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Complete end-to-end multi-variable grading test suite verifying curves, attendance gates (<75% failure), and honors distinction flags for Mamata, Mahima, Abhronila, Susmita, and Debangshu."})]}),e.jsx(d,{fileModule:w,title:"institutional_grade_testing_case.py",highlightLines:[20,30,80]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Testing Pitfalls & Anti-Patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"1. Relying on Visual Terminal Prints"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Relying on manual visual checks is slow, human error-prone, and impossible to automate in CI pipelines. Always write executable assertions."}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:['# BAD: print("Result:", calculate(x)) # Human must inspect!',`
`,"# GOOD: assert calculate(x) == expected"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"2. Test Interdependence (Polluting Global State)"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Letting one test mutate a global dictionary or database table causes subsequent tests to fail randomly depending on execution order."}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# BUG: test1 modifies GLOBAL_USERS without cleanup!",`
`,"# FIX: Use clean fixtures per test"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"3. Ignoring Boundary Edge Cases"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Testing only typical inputs (e.g. 85.0) and missing exact cutoffs (74.9 vs 75.0) leads to off-by-one errors in production."}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# MUST TEST: 74.9 (Fail) and 75.0 (Pass)",`
`,"# MUST TEST: 0, -1, empty list []"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"4. Flaky Tests with sleep()"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Using ",e.jsx("code",{className:"text-rose-400 font-mono",children:"time.sleep(1)"})," to wait for background operations creates slow, flaky tests. Use deterministic event polling or mocks."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# BAD: time.sleep(2) # Flaky on slow CI!",`
`,"# GOOD: wait_until(lambda: job.is_ready())"]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Professional Software Testing Checklist"})]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm sm:text-base",children:[e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Follow the AAA Pattern:"})," Structure all tests with clean Arrange, Act, and Assert steps."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Test Boundaries & Exceptions:"})," Always verify exact cutoffs (e.g. 89.9 vs 90.0) and verify that invalid inputs raise expected exceptions."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Keep Tests Isolated & Deterministic:"})," Zero reliance on execution order, network availability, or unseeded random numbers."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Automate CI Quality Gates:"})," Run all tests on every Git pull request to block regressions from reaching production."]})]})]})]}),e.jsx("section",{ref:n,className:"section-hidden",children:e.jsx(y,{title:"Automated Testing Foundations FAQs",questions:j})}),e.jsx("section",{ref:n,className:"section-hidden",children:e.jsx(b,{content:T,title:"Topic 0: Why Automated Testing is Mandatory Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic0_note.txt"})}),e.jsx("section",{ref:n,className:"section-hidden",children:e.jsx(v,{note:"Automated testing is the single most defining characteristic that separates hobbyist scripts from professional enterprise software. When managing student accounts and grade evaluations for Mamata, Mahima, Abhronila, Susmita, and Debangshu across Barrackpore, Kolkata, Ichapur, and Jadavpur, we cannot afford silent bugs or manual check fatigue. Writing self-verifying assertion contracts ensures that every edge case is covered, every refactoring is safe, and our systems maintain 100% mathematical fidelity."})})]})]})}export{D as default};
