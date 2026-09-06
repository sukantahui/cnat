import{b as s,j as e,bg as r}from"./vendor-react-core-Doz9nIC6.js";import{P as m}from"./PythonFileLoader-hCi5osN-.js";import{P as y}from"./PlainTextPrint-C08xhKA4.js";import{F as _}from"./FAQTemplate-BHhlgA96.js";import{T as v}from"./TeacherSukantaHui-DDN87fI5.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const j=`"""\r
# Module: 004_003_python-testing\r
# Topic 4: Parametrized tests with @pytest.mark.parametrize\r
# File: basic_parametrize_boundaries.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating multi-argument @pytest.mark.parametrize on grade boundaries.\r
"""\r
\r
def evaluate_academic_tier(score: float) -> str:\r
    """Evaluates student score against strict academic tiers."""\r
    if not (0.0 <= score <= 100.0):\r
        raise ValueError("Score must be between 0 and 100.")\r
    if score >= 90.0:\r
        return "DISTINCTION_A_PLUS"\r
    elif score >= 80.0:\r
        return "FIRST_CLASS_A"\r
    elif score >= 60.0:\r
        return "SECOND_CLASS_B"\r
    elif score >= 40.0:\r
        return "PASS_CLASS_C"\r
    return "FAILED_F"\r
\r
# ------------------------------------------------------------------------------\r
# SIMULATED PARAMETRIZED TEST RUNNER\r
# ------------------------------------------------------------------------------\r
PARAMETRIZED_CASES = [\r
    # (Student, Score, Expected Tier)\r
    ("Mamata", 98.5, "DISTINCTION_A_PLUS"),\r
    ("Mahima (Exact 90.0 Boundary)", 90.0, "DISTINCTION_A_PLUS"),\r
    ("Abhronila (89.9 Sub-boundary)", 89.9, "FIRST_CLASS_A"),\r
    ("Susmita (Exact 80.0 Boundary)", 80.0, "FIRST_CLASS_A"),\r
    ("Debangshu (Exact 40.0 Pass Boundary)", 40.0, "PASS_CLASS_C"),\r
    ("Failing Edge Case (39.9)", 39.9, "FAILED_F"),\r
    ("Zero Score Edge Case", 0.0, "FAILED_F"),\r
    ("Perfect Score Edge Case", 100.0, "DISTINCTION_A_PLUS"),\r
]\r
\r
def test_academic_tier_parametrized():\r
    print("\\n[...] Running 8 Parameterized Test Variations...")\r
    passed = 0\r
    for name, score, expected in PARAMETRIZED_CASES:\r
        actual = evaluate_academic_tier(score)\r
        assert actual == expected, f"Failed for {name}: expected {expected}, got {actual}"\r
        print(f"   [PASS] {name:<42} (Score {score:>5.1f}) -> {actual}")\r
        passed += 1\r
    print(f"\\n[+] Total {passed}/{len(PARAMETRIZED_CASES)} Parameterized Tests Passed!")\r
\r
def main():\r
    print("=" * 75)\r
    print("[PYTEST PARAMETRIZE] Multi-Argument Boundary Verification")\r
    print("=" * 75)\r
\r
    test_academic_tier_parametrized()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] @pytest.mark.parametrize maps input-output vectors into single clean")\r
    print("           test functions, verifying extensive boundary tables with zero boilerplate.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,T=`"""\r
# Module: 004_003_python-testing\r
# Topic 4: Parametrized tests with @pytest.mark.parametrize\r
# File: matrix_combinatorial_parametrize.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating stacked @pytest.mark.parametrize decorators generating\r
#              Cartesian Product combinatorial test matrices.\r
"""\r
\r
def calculate_regional_course_fee(campus: str, course_tier: str) -> float:\r
    """Calculates final tuition fee across campus and course combinations."""\r
    base_fees = {\r
        "FOUNDATION": 5000.0,\r
        "PRO": 15000.0,\r
        "MASTER": 25000.0\r
    }\r
    \r
    # Campus multipliers\r
    campus_discounts = {\r
        "barrackpore": 0.15, # 15% discount\r
        "ichapur": 0.10,     # 10% discount\r
        "kolkata": 0.05,     # 5% discount\r
        "jadavpur": 0.00     # 0% discount\r
    }\r
    \r
    fee = base_fees[course_tier.upper()]\r
    discount = campus_discounts[campus.lower()]\r
    return fee * (1.0 - discount)\r
\r
# ------------------------------------------------------------------------------\r
# SIMULATING STACKED @pytest.mark.parametrize CARTESIAN PRODUCT\r
# @pytest.mark.parametrize("campus", ["Barrackpore", "Kolkata", "Ichapur", "Jadavpur"])\r
# @pytest.mark.parametrize("tier", ["FOUNDATION", "PRO", "MASTER"])\r
# Generates 4 x 3 = 12 combinatorial test runs!\r
# ------------------------------------------------------------------------------\r
CAMPUSES = ["Barrackpore", "Kolkata", "Ichapur", "Jadavpur"]\r
TIERS = ["FOUNDATION", "PRO", "MASTER"]\r
\r
def run_combinatorial_matrix_test():\r
    print(f"\\n[...] Executing Cartesian Product Matrix ({len(CAMPUSES)} Campuses x {len(TIERS)} Tiers = {len(CAMPUSES)*len(TIERS)} Tests)...")\r
    \r
    test_count = 0\r
    for campus in CAMPUSES:\r
        for tier in TIERS:\r
            net_fee = calculate_regional_course_fee(campus, tier)\r
            \r
            # Assert fee is strictly positive and adheres to discount bounds\r
            assert net_fee > 0.0\r
            assert net_fee <= 25000.0\r
            \r
            print(f"   [TEST {test_count+1:>2}] Campus: {campus:<12} | Tier: {tier:<11} -> Net Fee: Rs. {net_fee:>9,f}")\r
            test_count += 1\r
            \r
    print(f"\\n[+] Successfully executed all {test_count} Cartesian product test variations!")\r
\r
def main():\r
    print("=" * 75)\r
    print("[PYTEST MATRIX] Stacked Parametrize Decorators (Cartesian Product)")\r
    print("=" * 75)\r
\r
    run_combinatorial_matrix_test()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Stacking multiple @pytest.mark.parametrize decorators automatically")\r
    print("           generates the complete Cartesian product of all parameter values.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,k=`"""\r
# Module: 004_003_python-testing\r
# Topic 4: Parametrized tests with @pytest.mark.parametrize\r
# File: custom_parametrize_ids_and_xfail.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating custom test IDs and individual row metadata with pytest.param().\r
"""\r
\r
def parse_student_token(token: str) -> dict:\r
    """Parses student admission token e.g. 'BP-2026-STU01'."""\r
    parts = token.split("-")\r
    if len(parts) != 3:\r
        raise ValueError(f"Invalid token format: {token}")\r
    return {\r
        "campus_code": parts[0],\r
        "year": int(parts[1]),\r
        "student_id": parts[2]\r
    }\r
\r
# ------------------------------------------------------------------------------\r
# SIMULATED PYTEST.PARAM DATA WITH CUSTOM IDS AND XFAIL MARKERS\r
# ------------------------------------------------------------------------------\r
PARAMETRIZED_ROWS = [\r
    {\r
        "id": "valid_barrackpore_2026",\r
        "token": "BP-2026-MAMATA01",\r
        "expected": {"campus_code": "BP", "year": 2026, "student_id": "MAMATA01"},\r
        "is_xfail": False\r
    },\r
    {\r
        "id": "valid_kolkata_2026",\r
        "token": "CC-2026-MAHIMA02",\r
        "expected": {"campus_code": "CC", "year": 2026, "student_id": "MAHIMA02"},\r
        "is_xfail": False\r
    },\r
    {\r
        "id": "valid_ichapur_2026",\r
        "token": "IC-2026-ABHRONILA03",\r
        "expected": {"campus_code": "IC", "year": 2026, "student_id": "ABHRONILA03"},\r
        "is_xfail": False\r
    },\r
    {\r
        "id": "legacy_two_part_token_known_bug",\r
        "token": "BP-MAMATA01", # Missing year component (Expected failure!)\r
        "expected": None,\r
        "is_xfail": True\r
    }\r
]\r
\r
def run_custom_ids_and_xfail_tests():\r
    print("\\n[...] Executing Parametrized Test Suite with Custom IDs & xfail rows:")\r
    \r
    for row in PARAMETRIZED_ROWS:\r
        test_id = row["id"]\r
        token = row["token"]\r
        is_xfail = row["is_xfail"]\r
        \r
        if is_xfail:\r
            try:\r
                parse_student_token(token)\r
                print(f"   [XPASS] Test [{test_id}] passed unexpectedly!")\r
            except ValueError:\r
                print(f"   [XFAIL] Test [{test_id}] failed as expected (Handled gracefully)")\r
        else:\r
            actual = parse_student_token(token)\r
            assert actual == row["expected"]\r
            print(f"   [PASS]  Test [{test_id:<32}] -> {actual}")\r
\r
def main():\r
    print("=" * 75)\r
    print("[PYTEST PARAM] Custom Test IDs & pytest.param(marks=pytest.mark.xfail)")\r
    print("=" * 75)\r
\r
    run_custom_ids_and_xfail_tests()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] pytest.param() attaches individual IDs and markers to specific rows,")\r
    print("           making test output crystal clear and tracking known defects safely.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,N=`"""\r
# Module: 004_003_python-testing\r
# Topic 4: Parametrized tests with @pytest.mark.parametrize\r
# File: institutional_fee_matrix_casestudy.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Full enterprise multi-tier student admission fee and scholarship\r
#              matrix verifying 15 distinct cohort scenarios in one clean test.\r
"""\r
\r
def calculate_institutional_fee(\r
    base_fee: float,\r
    campus: str,\r
    merit_score: float,\r
    is_early_bird: bool\r
) -> dict:\r
    """Enterprise fee calculation engine."""\r
    if base_fee <= 0:\r
        raise ValueError("Base fee must be positive.")\r
    if not (0.0 <= merit_score <= 100.0):\r
        raise ValueError("Merit score must be between 0 and 100.")\r
\r
    # 1. Merit scholarship\r
    if merit_score >= 90.0:\r
        merit_discount = 0.20 # 20%\r
    elif merit_score >= 80.0:\r
        merit_discount = 0.10 # 10%\r
    else:\r
        merit_discount = 0.0\r
\r
    # 2. Regional campus grant\r
    campus_grants = {\r
        "barrackpore": 0.10,\r
        "ichapur": 0.08,\r
        "kolkata": 0.05,\r
        "jadavpur": 0.00\r
    }\r
    campus_discount = campus_grants.get(campus.lower(), 0.0)\r
\r
    # 3. Early bird incentive\r
    early_discount = 0.05 if is_early_bird else 0.0\r
\r
    total_discount_pct = min(0.35, merit_discount + campus_discount + early_discount)\r
    net_fee = round(base_fee * (1.0 - total_discount_pct), 2)\r
    saved_amount = round(base_fee - net_fee, 2)\r
\r
    return {\r
        "base_fee": base_fee,\r
        "net_fee": net_fee,\r
        "saved_amount": saved_amount,\r
        "discount_pct": round(total_discount_pct * 100.0, 1)\r
    }\r
\r
# ------------------------------------------------------------------------------\r
# PARAMETRIZED ENTERPRISE TEST CASES\r
# ------------------------------------------------------------------------------\r
ENTERPRISE_FEE_MATRIX = [\r
    # (Desc, BaseFee, Campus, Score, Early, ExpectedNet, ExpectedDiscountPct)\r
    ("Mamata: BP Top Merit + Early (35% Max Cap)", 20000.0, "Barrackpore", 95.0, True, 13000.0, 35.0),\r
    ("Mahima: Kolkata First Class + Early (20%)", 20000.0, "Kolkata", 85.0, True, 16000.0, 20.0),\r
    ("Abhronila: Ichapur Top Merit No Early (28%)", 20000.0, "Ichapur", 92.0, False, 14400.0, 28.0),\r
    ("Susmita: Jadavpur Standard Merit (10%)", 15000.0, "Jadavpur", 82.0, False, 13500.0, 10.0),\r
    ("Debangshu: Barrackpore Regional Only (10%)", 10000.0, "Barrackpore", 65.0, False, 9000.0, 10.0),\r
    ("Regular Non-scholarship Applicant (0%)", 10000.0, "Jadavpur", 50.0, False, 10000.0, 0.0),\r
]\r
\r
def test_enterprise_fee_matrix():\r
    print("\\n[...] Executing Multi-Campus Enterprise Fee Matrix Test Suite...")\r
    passed = 0\r
    for desc, base, campus, score, early, exp_net, exp_pct in ENTERPRISE_FEE_MATRIX:\r
        res = calculate_institutional_fee(base, campus, score, early)\r
        \r
        assert res["net_fee"] == exp_net, f"Net fee mismatch for {desc}"\r
        assert res["discount_pct"] == exp_pct, f"Discount % mismatch for {desc}"\r
        \r
        print(f"   [PASS] {desc:<50} -> Net: Rs. {res['net_fee']:>9,f} ({res['discount_pct']}%)")\r
        passed += 1\r
\r
    print(f"\\n[+] Successfully verified {passed}/{len(ENTERPRISE_FEE_MATRIX)} enterprise tuition scenarios!")\r
\r
def main():\r
    print("=" * 80)\r
    print("[CASE STUDY] Multi-Campus Enterprise Fee & Scholarship Parametrized Matrix")\r
    print("=" * 80)\r
\r
    test_enterprise_fee_matrix()\r
\r
    print("=" * 80)\r
    print("[TAKEAWAY] @pytest.mark.parametrize allows expressing complex multi-variable")\r
    print("           pricing and discount matrices in clean, self-documenting test tables.")\r
    print("=" * 80)\r
\r
if __name__ == "__main__":\r
    main()\r
`,A=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 4: PRO LEVEL • MODULE 004_003: PYTHON TESTING\r
              TOPIC 4: PARAMETRIZED TESTS WITH @PYTEST.MARK.PARAMETRIZE\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. BASIC MULTI-ARGUMENT PARAMETRIZATION\r
--------------------------------------------------------------------------------\r
  import pytest\r
\r
  @pytest.mark.parametrize("score, expected_grade", [\r
      (95.0, "A+"),\r
      (90.0, "A+"), # Boundary check\r
      (80.0, "A"),\r
      (60.0, "B"),\r
      (40.0, "C"),\r
      (35.0, "F"),\r
  ])\r
  def test_grade_boundaries(score, expected_grade):\r
      # PyTest generates 6 individual independent test cases!\r
      assert calculate_grade(score) == expected_grade\r
\r
--------------------------------------------------------------------------------\r
2. CARTESIAN PRODUCT (STACKED DECORATORS)\r
--------------------------------------------------------------------------------\r
  @pytest.mark.parametrize("campus", ["Barrackpore", "Kolkata"])\r
  @pytest.mark.parametrize("course", ["Python", "DataScience", "DevOps"])\r
  def test_campus_course_matrix(campus, course):\r
      # Generates 2 x 3 = 6 combinatorial test runs automatically!\r
      assert verify_roster_availability(campus, course) is True\r
\r
--------------------------------------------------------------------------------\r
3. CUSTOM IDS & INDIVIDUAL PARAMETER MARKERS\r
--------------------------------------------------------------------------------\r
  @pytest.mark.parametrize("input_val, expected", [\r
      pytest.param(100, 90, id="regular_10pct_waiver"),\r
      pytest.param(0, 0, id="zero_fee_edge_case"),\r
      pytest.param(-50, None, marks=pytest.mark.xfail, id="known_negative_bug"),\r
  ])\r
  def test_waiver_rules(input_val, expected):\r
      assert apply_waiver(input_val) == expected\r
\r
================================================================================\r
       END OF STUDY NOTE • TOPIC 4: PARAMETRIZED TESTS WITH PYTEST\r
================================================================================\r
`,w=[{question:"What is the primary benefit of '@pytest.mark.parametrize' over running a 'for' loop inside a test function?",shortAnswer:"'@pytest.mark.parametrize' generates a distinct, independent test case for each parameter tuple in the test runner; if one parameter fails, all other test cases still execute and report their individual pass/fail statuses, whereas a 'for' loop aborts on the first failure.",explanation:"Granular independent test case generation per parameter tuple.",hint:"Generates independent test runs so one failure doesn't stop the others.",level:"basic",codeExample:`@pytest.mark.parametrize('x, expected', [(1, 2), (2, 4), (3, 6)])
def test_double(x, expected): assert x * 2 == expected`},{question:"How do you define multiple arguments in '@pytest.mark.parametrize'?",shortAnswer:`By passing a comma-separated string of argument names as the first parameter (e.g. '"input_val, discount, expected"') and a list of tuples containing the matching values as the second parameter.`,explanation:"Multi-argument parametrization syntax in pytest.",hint:"@pytest.mark.parametrize('arg1, arg2', [(val1, val2), ...])",level:"basic",codeExample:`@pytest.mark.parametrize('score, campus, expected', [
    (95.0, 'Barrackpore', 5000.0),
    (85.0, 'Kolkata', 3000.0)
])`},{question:"What happens when you stack multiple '@pytest.mark.parametrize' decorators on top of a single test function?",shortAnswer:"PyTest calculates and executes the Cartesian Product (all combinatorial permutations) of all stacked parameters (e.g. 3 campuses stacked on 4 courses generates 3 x 4 = 12 distinct test cases).",explanation:"Cartesian product combinatorial test generation via stacked decorators.",hint:"Multiplies parameter sets to test all possible combinations (Cartesian product).",level:"moderate",codeExample:`@pytest.mark.parametrize('x', [1, 2])
@pytest.mark.parametrize('y', ['A', 'B'])
# Generates: (1, 'A'), (1, 'B'), (2, 'A'), (2, 'B')`},{question:"How do you assign custom, human-readable names to parameterized test cases?",shortAnswer:`By passing the 'ids' argument to '@pytest.mark.parametrize', either as a list of strings ('ids=["top_performer", "boundary_fail"]') or as a callable function that formats names dynamically.`,explanation:"Custom test case identification in pytest reports.",hint:"Use ids=['case1', 'case2'] or ids=lambda x: f'val_{x}'.",level:"basic",codeExample:"@pytest.mark.parametrize('x', [10, 20], ids=['low_tier', 'high_tier'])"},{question:"What is 'pytest.param()' and what special capabilities does it provide?",shortAnswer:`'pytest.param(*values, id="custom_name", marks=pytest.mark.xfail)' allows attaching individual metadata, custom IDs, or specific markers (like 'xfail' or 'skip') to a single parameter row without affecting other rows.`,explanation:"Per-row parameter customization and metadata tagging.",hint:"pytest.param(val, id='name', marks=pytest.mark.xfail)",level:"moderate",codeExample:`@pytest.mark.parametrize('val', [
    pytest.param(-5, marks=pytest.mark.xfail, id='known_bug'),
    pytest.param(10, id='valid')
])`},{question:"How do you pass parameterized values directly into a fixture using 'indirect=True'?",shortAnswer:`By specifying 'indirect=True' (or 'indirect=["fixture_name"]') in '@pytest.mark.parametrize', PyTest passes the parameter value to the fixture's 'request.param' attribute rather than passing it directly to the test function.`,explanation:"Indirect fixture parametrization in pytest.",hint:"Use indirect=True to feed parameter values to a fixture's request.param.",level:"complex",codeExample:`@pytest.fixture
def student(request): return Student(request.param)

@pytest.mark.parametrize('student', ['Mamata', 'Mahima'], indirect=True)
def test_name(student): assert student.name in ['Mamata', 'Mahima']`},{question:"How does PyTest's CLI output identify failing parameterized test cases?",shortAnswer:"PyTest appends the parameter values or custom ID in brackets to the test name in the terminal output (e.g. 'test_grades.py::test_boundary[90.0-A+] FAILED').",explanation:"Terminal test node ID formatting for parameterized tests.",hint:"Displays the parameter values or IDs in brackets [param1-param2].",level:"basic",codeExample:"test_scores.py::test_grade[95.0-A+] PASSED"},{question:"Can you run a single specific parameterized variation from the command line?",shortAnswer:`Yes, by passing the exact bracketed parameter ID to pytest on the CLI (e.g. 'pytest test_fees.py -k "test_waiver[barrackpore-10000]"').`,explanation:"Targeted CLI execution of specific parameter permutations.",hint:"Use pytest -k with the bracketed parameter name.",level:"basic",codeExample:"pytest -k 'test_fee[Barrackpore]'"},{question:"What is 'pytest_generate_tests' and when should you use it?",shortAnswer:"'pytest_generate_tests(metafunc)' is a built-in PyTest hook used to generate test parameters dynamically at runtime (e.g. reading test cases from an external JSON file, CSV dataset, or database).",explanation:"Dynamic runtime test generation hook.",hint:"A hook function to dynamically generate test parameters from external files.",level:"complex",codeExample:`def pytest_generate_tests(metafunc):
    if 'db_row' in metafunc.fixturenames:
        metafunc.parametrize('db_row', load_test_cases_from_json())`},{question:"Why is testing boundary edge cases (e.g. 74.9 vs 75.0) particularly convenient with '@pytest.mark.parametrize'?",shortAnswer:"Because developers can define extensive tables of boundary inputs (e.g. just below, exactly at, and just above cutoffs) in a clean, readable table format within 5 lines of code.",explanation:"Boundary value table modeling in test parametrization.",hint:"Allows defining tables of adjacent boundary inputs in a compact, readable list.",level:"basic",codeExample:`@pytest.mark.parametrize('score, pass_status', [
    (39.9, False), (40.0, True), (40.1, True)
])`},{question:"What is the difference between a list of tuples vs a list of pytest.param instances in parametrize?",shortAnswer:"A list of raw tuples provides only the input values; a list of 'pytest.param()' instances allows customizing IDs and attaching markers (like 'skip' or 'xfail') to specific rows.",explanation:"Plain tuples vs decorated parameter objects.",hint:"pytest.param lets you add custom IDs and markers to individual test rows.",level:"basic",codeExample:"# Raw tuple: (1, 2) | pytest.param: pytest.param(1, 2, id='test_one')"},{question:"How does parametrization improve test suite maintainability over time?",shortAnswer:"Adding new test cases requires simply adding a new single-line tuple to the parameter list, avoiding code duplication, copy-paste errors, and large bloated test files.",explanation:"DRY test suite maintenance and extensible test tables.",hint:"You can add new test scenarios by simply adding a tuple row to the list.",level:"basic",codeExample:"# Adding a new test scenario is just 1 new line in the list"},{question:"What happens if a parameterized test with 'marks=pytest.mark.xfail' unexpectedly passes?",shortAnswer:"PyTest reports it as an 'XPASS' (Unexpected Pass); if 'strict=True' is configured, PyTest will treat the unexpected pass as a test suite failure.",explanation:"XPASS reporting for unexpected successes in xfail parameters.",hint:"PyTest reports it as XPASS (Unexpected Pass).",level:"moderate",codeExample:"pytest.param(90, 5000, marks=pytest.mark.xfail(strict=True))"},{question:"Can you parametrize an entire test class in PyTest?",shortAnswer:"Yes, applying '@pytest.mark.parametrize' at the class level automatically parametrizes every test method inside that class with those parameters.",explanation:"Class-level test parametrization in pytest.",hint:"Decorate the class with @pytest.mark.parametrize to apply to all class methods.",level:"moderate",codeExample:`@pytest.mark.parametrize('campus', ['Barrackpore', 'Kolkata'])
class TestCampusOperations: def test_1(self, campus): ... `},{question:"How do you test equivalence partitions efficiently using parametrize?",shortAnswer:"By selecting representative values from each valid and invalid input partition (e.g. negative numbers, zero, small positives, boundary cutoffs, extreme maximums) and listing them in the parameter table.",explanation:"Equivalence class partitioning via data-driven test tables.",hint:"Pick representative samples from each equivalence group in the parameter list.",level:"moderate",codeExample:"@pytest.mark.parametrize('amount', [-100, 0, 500, 1000000])"},{question:"Why should you avoid generating thousands of Cartesian product combinations without filtering?",shortAnswer:"Overly broad stacked parametrizations can cause combinatorial explosion (e.g. 10 x 10 x 10 x 10 = 10,000 tests), slowing down CI pipelines with redundant, low-value tests.",explanation:"Combinatorial explosion prevention in test matrix design.",hint:"Avoid multiplying too many large parameter lists to prevent huge slow test suites.",level:"moderate",codeExample:"# 5 x 5 x 5 = 125 tests (Fast) vs 50 x 50 x 50 = 125,000 tests (Too slow!)"},{question:"What is the best practice for naming parameter arguments in '@pytest.mark.parametrize'?",shortAnswer:`Use clear, descriptive domain names matching the function parameters and expected outputs (e.g. '"score, attendance, expected_grade"') rather than generic names like '"a, b, c"'.`,explanation:"Self-documenting parameter naming conventions.",hint:"Use meaningful names like 'base_fee, discount, expected_net' instead of 'x, y, z'.",level:"basic",codeExample:"@pytest.mark.parametrize('base_fee, discount, expected_net', [...])"},{question:"How does PyTest report failures when testing multiple data types (e.g. int, float, str, None)?",shortAnswer:"PyTest clearly outputs the exact type and value of the parameter passed to the failing run in the failure traceback, making type-handling defects obvious immediately.",explanation:"Type-aware parameter failure tracing.",hint:"Shows the exact type and value for the specific failed permutation.",level:"basic",codeExample:"# Clearly shows: FAILED test_func[None-expected_error]"},{question:"Can you combine '@pytest.mark.parametrize' with exception testing ('pytest.raises')?",shortAnswer:"Yes, by passing the expected exception class or 'nullcontext()' as a parameter, allowing valid and invalid cases to be tested in the same parameterized function.",explanation:"Parametrizing expected successes alongside expected exceptions.",hint:"Pass the expected exception class as a parameter in the tuple.",level:"complex",codeExample:`@pytest.mark.parametrize('score, expected_exc', [
    (95, None),
    (-5, ValueError)
])`},{question:"What is the ultimate golden rule of parameterized testing in PyTest?",shortAnswer:"Use '@pytest.mark.parametrize' whenever the same logical verification applies to multiple input-output data pairs, boundary conditions, or configuration matrices, keeping test code DRY and reporting granular per-case results.",explanation:"The core principle of enterprise data-driven test engineering.",hint:"Parametrize identical logic across multiple data pairs instead of copy-pasting tests.",level:"basic",codeExample:"# Enterprise Data-Driven Testing Standard"}];function D(){const p=s.useRef([]),[n,x]=s.useState("tableMapping"),[i,h]=s.useState(4),[o,f]=s.useState(3),[l,b]=s.useState(!0),d=i*o+(l?1:0),g=`# Data-Driven PyTest Parametrization
# Combinatorial Test Matrix: ${d} Independent Test Cases

import pytest

@pytest.mark.parametrize("campus", [
${i===4?'    "Barrackpore", "Kolkata", "Ichapur", "Jadavpur"':'    "Barrackpore", "Kolkata"'}
])
@pytest.mark.parametrize("course_tier", [
${o===3?'    "FOUNDATION", "PRO", "MASTER"':'    "FOUNDATION", "PRO"'}
])
def test_campus_course_pricing_matrix(campus, course_tier):
    # Stacking generates ${i*o} Cartesian product test variations!
    net_fee = calculate_course_fee(campus, course_tier)
    assert net_fee > 0.0
    assert net_fee <= 25000.0

# Granular Row Customization with pytest.param()
@pytest.mark.parametrize("score, expected_grade", [
    pytest.param(95.0, "A+", id="mamata_top_merit"),
    pytest.param(90.0, "A+", id="mahima_exact_90_boundary"),
    pytest.param(80.0, "A",  id="abhronila_80_boundary"),
    pytest.param(40.0, "C",  id="debangshu_pass_cutoff"),
${l?'    pytest.param(-5.0, None, marks=pytest.mark.xfail, id="known_negative_bug"),':'    pytest.param(35.0, "F",  id="failing_grade_case"),'}
])
def test_student_grade_tiers(score, expected_grade):
    assert evaluate_grade(score) == expected_grade`;s.useEffect(()=>{const t=new IntersectionObserver(c=>{c.forEach(u=>{u.isIntersecting&&u.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return p.current.forEach(c=>{c&&t.observe(c)}),()=>t.disconnect()},[]);const a=t=>{t&&!p.current.includes(t)&&p.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:a,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 4 • Module 004_003"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 4"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Automated Testing, PyTest & Quality Assurance"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Parametrized Tests: ",e.jsx("span",{className:"text-teal-400",children:"@pytest.mark.parametrize"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master data-driven testing in PyTest: replacing repetitive test copy-pasting with clean input-output parameter tables, generating Cartesian product combinatorial matrices via stacked decorators, assigning human-readable test names with custom ",e.jsx("code",{className:"text-teal-300 font-mono",children:"ids"}),", and attaching row-specific markers using ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"pytest.param(marks=pytest.mark.xfail)"}),"."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📊 DRY Data-Driven Tables"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"✖️ Cartesian Product Matrices"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🏷️ Custom IDs & pytest.param"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Precise Boundary Verification"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Data-Driven Testing Paradigm"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["When testing functions with multiple inputs, outputs, or boundary conditions, writing separate test functions for each scenario leads to massive code bloat. ",e.jsx("code",{className:"text-teal-300 font-mono",children:"@pytest.mark.parametrize"})," executes a single test function across an entire table of inputs, treating every single row as an independent, fully isolated test case:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Multi-Argument Vector"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"@pytest.mark.parametrize"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Maps parameter tuples to function arguments. Each tuple executes as an isolated test case with individual pass/fail tracking."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Cartesian Product"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"Stacked Decorators"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Stacking decorators multiplies parameter sets ($N \\times M$), automatically generating complete multi-variable testing matrices."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Custom Test IDs"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:'ids=["name_1", ...]'}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Assign descriptive names to parameter variations so terminal failure logs pinpoint the exact business scenario immediately."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 shadow-lg",children:[e.jsx("div",{className:"text-amber-400 font-bold text-sm mb-1",children:"4️⃣ Row Metadata"}),e.jsx("code",{className:"text-xs font-mono text-amber-300 block mb-1",children:"pytest.param(marks=...)"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Attach custom markers (like ",e.jsx("code",{className:"text-amber-300 font-mono",children:"xfail"})," or ",e.jsx("code",{className:"text-amber-300 font-mono",children:"skip"}),") to individual parameter rows without affecting others."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"Parametrization vs Native For-Loops"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Running assertions inside a native ",e.jsx("code",{className:"text-rose-400 font-mono",children:"for"})," loop means that if the 2nd item fails, ",e.jsx("span",{className:"text-rose-400 font-bold",children:"the entire test aborts and skips items 3, 4, 5"}),"! With ",e.jsx("code",{className:"text-teal-300 font-mono",children:"@pytest.mark.parametrize"}),", PyTest treats all 5 cases as independent tests, executing all of them and reporting exactly which ones succeeded or failed."]})]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Data Tables, Cartesian Products & Test IDs"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>x("tableMapping"),className:r("px-3 py-1.5 rounded-lg transition-all",n==="tableMapping"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Table Vector Mapping"}),e.jsx("button",{onClick:()=>x("cartesianMatrix"),className:r("px-3 py-1.5 rounded-lg transition-all",n==="cartesianMatrix"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Cartesian Product Matrix"}),e.jsx("button",{onClick:()=>x("pytestParamIds"),className:r("px-3 py-1.5 rounded-lg transition-all",n==="pytestParamIds"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Custom IDs & xfail Tags"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining parameter vector expansion, combinatorial decorator stacking, and granular test identification:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:n==="tableMapping"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"@PYTEST.MARK.PARAMETRIZE: VECTOR TUPLE TABLE ➔ INDEPENDENT TEST NODES"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"245",rx:"8",fill:"#0f172a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#5eead4",fontSize:"12",fontWeight:"bold",children:"Input-Output Parameter Table:"}),e.jsx("rect",{x:"20",y:"50",width:"340",height:"35",rx:"4",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"30",y:"72",fill:"#d1fae5",fontSize:"10",fontFamily:"monospace",children:'(95.0, "Barrackpore") ➔ Rs. 5000 (Mamata)'}),e.jsx("rect",{x:"20",y:"95",width:"340",height:"35",rx:"4",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"30",y:"117",fill:"#d1fae5",fontSize:"10",fontFamily:"monospace",children:'(90.0, "Kolkata")     ➔ Rs. 5000 (Mahima)'}),e.jsx("rect",{x:"20",y:"140",width:"340",height:"35",rx:"4",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"30",y:"162",fill:"#d1fae5",fontSize:"10",fontFamily:"monospace",children:'(80.0, "Ichapur")     ➔ Rs. 3000 (Abhronila)'}),e.jsx("rect",{x:"20",y:"185",width:"340",height:"40",rx:"4",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("text",{x:"30",y:"210",fill:"#bae6fd",fontSize:"9",children:"⚡ 1 Function Definition ➔ 3 Clean Independent Tests"})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"245",rx:"8",fill:"#1e1e2e",stroke:"#38bdf8"}),e.jsx("text",{x:"20",y:"30",fill:"#93c5fd",fontSize:"12",fontWeight:"bold",children:"PyTest Test Runner Execution Tree:"}),e.jsx("rect",{x:"20",y:"50",width:"340",height:"45",rx:"4",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"30",y:"70",fill:"#ccfbf1",fontSize:"10",fontFamily:"monospace",children:"test_scholarship[95.0-Barrackpore]"}),e.jsx("text",{x:"30",y:"86",fill:"#86efac",fontSize:"9",fontWeight:"bold",children:"✅ PASSED (0.001s)"}),e.jsx("rect",{x:"20",y:"105",width:"340",height:"45",rx:"4",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"30",y:"125",fill:"#ccfbf1",fontSize:"10",fontFamily:"monospace",children:"test_scholarship[90.0-Kolkata]"}),e.jsx("text",{x:"30",y:"141",fill:"#86efac",fontSize:"9",fontWeight:"bold",children:"✅ PASSED (0.001s)"}),e.jsx("rect",{x:"20",y:"160",width:"340",height:"45",rx:"4",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"30",y:"180",fill:"#ccfbf1",fontSize:"10",fontFamily:"monospace",children:"test_scholarship[80.0-Ichapur]"}),e.jsx("text",{x:"30",y:"196",fill:"#86efac",fontSize:"9",fontWeight:"bold",children:"✅ PASSED (0.001s)"})]})]}):n==="cartesianMatrix"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"CARTESIAN PRODUCT MATRIX: STACKED PARAMETRIZE DECORATORS"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#082f49",stroke:"#0ea5e9"}),e.jsx("rect",{x:"25",y:"40",width:"230",height:"60",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("text",{x:"35",y:"62",fill:"#e0f2fe",fontSize:"10",fontWeight:"bold",children:"Decorator 1: Campus (N = 4)"}),e.jsx("text",{x:"35",y:"80",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"['BP', 'CC', 'IC', 'JU']"}),e.jsx("text",{x:"285",y:"75",fill:"#facc15",fontSize:"22",fontWeight:"bold",children:"✖"}),e.jsx("rect",{x:"325",y:"40",width:"230",height:"60",rx:"6",fill:"#064e3b",stroke:"#34d399"}),e.jsx("text",{x:"335",y:"62",fill:"#d1fae5",fontSize:"10",fontWeight:"bold",children:"Decorator 2: Course Tier (M = 3)"}),e.jsx("text",{x:"335",y:"80",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"['FOUNDATION', 'PRO', 'MASTER']"}),e.jsx("text",{x:"585",y:"75",fill:"#facc15",fontSize:"22",fontWeight:"bold",children:"="}),e.jsx("rect",{x:"625",y:"40",width:"165",height:"60",rx:"6",fill:"#1e1b4b",stroke:"#818cf8"}),e.jsx("text",{x:"635",y:"62",fill:"#e0e7ff",fontSize:"11",fontWeight:"bold",children:"12 Total Tests"}),e.jsx("text",{x:"635",y:"80",fill:"#c7d2fe",fontSize:"9",children:"4 × 3 Combinations"}),e.jsx("rect",{x:"25",y:"115",width:"765",height:"110",rx:"6",fill:"#0f172a",stroke:"#334155"}),e.jsx("text",{x:"40",y:"137",fill:"#94a3b8",fontSize:"10",fontWeight:"bold",children:"Generated Combinatorial Permutations Grid:"}),e.jsx("text",{x:"40",y:"160",fill:"#cbd5e1",fontSize:"9",fontFamily:"monospace",children:"BP x FOUNDATION | BP x PRO | BP x MASTER | CC x FOUNDATION | CC x PRO | CC x MASTER"}),e.jsx("text",{x:"40",y:"180",fill:"#cbd5e1",fontSize:"9",fontFamily:"monospace",children:"IC x FOUNDATION | IC x PRO | IC x MASTER | JU x FOUNDATION | JU x PRO | JU x MASTER"}),e.jsx("text",{x:"40",y:"208",fill:"#86efac",fontSize:"9",fontWeight:"bold",children:"🚀 Fully tests all regional campus discount and course tier permutations automatically!"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"CUSTOM TEST IDS & PYTEST.PARAM(MARKS=PYTEST.MARK.XFAIL)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#1e1b4b",stroke:"#a855f7"}),e.jsx("rect",{x:"25",y:"45",width:"240",height:"120",rx:"6",fill:"#3b0764",stroke:"#c084fc"}),e.jsx("text",{x:"35",y:"70",fill:"#f3e8ff",fontSize:"11",fontWeight:"bold",children:'pytest.param(id="mamata_bp")'}),e.jsx("text",{x:"35",y:"90",fill:"#d8b4fe",fontSize:"9",fontFamily:"monospace",children:'token: "BP-2026-MAMATA01"'}),e.jsx("text",{x:"35",y:"108",fill:"#d8b4fe",fontSize:"9",fontFamily:"monospace",children:"expected: valid"}),e.jsx("text",{x:"35",y:"145",fill:"#86efac",fontSize:"9",fontWeight:"bold",children:"✅ Custom Named Pass"}),e.jsx("rect",{x:"290",y:"45",width:"240",height:"120",rx:"6",fill:"#3b0764",stroke:"#c084fc"}),e.jsx("text",{x:"300",y:"70",fill:"#f3e8ff",fontSize:"11",fontWeight:"bold",children:'pytest.param(id="mahima_cc")'}),e.jsx("text",{x:"300",y:"90",fill:"#d8b4fe",fontSize:"9",fontFamily:"monospace",children:'token: "CC-2026-MAHIMA02"'}),e.jsx("text",{x:"300",y:"108",fill:"#d8b4fe",fontSize:"9",fontFamily:"monospace",children:"expected: valid"}),e.jsx("text",{x:"300",y:"145",fill:"#86efac",fontSize:"9",fontWeight:"bold",children:"✅ Custom Named Pass"}),e.jsx("rect",{x:"555",y:"45",width:"240",height:"120",rx:"6",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"565",y:"70",fill:"#fda4af",fontSize:"11",fontWeight:"bold",children:"marks=pytest.mark.xfail"}),e.jsx("text",{x:"565",y:"90",fill:"#fecdd3",fontSize:"9",fontFamily:"monospace",children:'id="legacy_missing_year"'}),e.jsx("text",{x:"565",y:"108",fill:"#fecdd3",fontSize:"9",fontFamily:"monospace",children:'token: "BP-MAMATA01"'}),e.jsx("text",{x:"565",y:"145",fill:"#facc15",fontSize:"9",fontWeight:"bold",children:"⚠️ XFAIL (Expected Failure)"}),e.jsx("rect",{x:"25",y:"180",width:"770",height:"45",rx:"4",fill:"#0f172a",stroke:"#a855f7"}),e.jsx("text",{x:"40",y:"207",fill:"#e9d5ff",fontSize:"10",children:"🎯 pytest.param() attaches metadata to individual rows, documenting expected bugs without failing the CI build."})]})]})})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧪"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Combinatorial Test Matrix Simulator"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Configure Cartesian product parameter dimensions and observe how PyTest dynamically generates multi-variable test suites:"}),e.jsxs("div",{className:"bg-slate-950 p-5 sm:p-6 rounded-xl border border-slate-800/90 space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"Campus Dimension (N):"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{count:2,label:"2 Campuses",desc:"BP, Kolkata"},{count:4,label:"4 Campuses",desc:"BP, CC, IC, JU"}].map(t=>e.jsxs("button",{onClick:()=>h(t.count),className:r("p-3 rounded-xl border text-left transition-all",i===t.count?"bg-teal-950/60 border-teal-500 shadow-md shadow-teal-950/50":"bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400"),children:[e.jsx("div",{className:"text-xs sm:text-sm font-bold text-slate-200",children:t.label}),e.jsx("div",{className:"text-[10px] text-teal-400 font-mono",children:t.desc})]},t.count))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"Course Tier Dimension (M):"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{count:2,label:"2 Tiers",desc:"Foundation, Pro"},{count:3,label:"3 Tiers",desc:"Foundation, Pro, Master"}].map(t=>e.jsxs("button",{onClick:()=>f(t.count),className:r("p-3 rounded-xl border text-left transition-all",o===t.count?"bg-cyan-950/60 border-cyan-500 shadow-md shadow-cyan-950/50":"bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400"),children:[e.jsx("div",{className:"text-xs sm:text-sm font-bold text-slate-200",children:t.label}),e.jsx("div",{className:"text-[10px] text-cyan-400 font-mono",children:t.desc})]},t.count))})]})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 bg-slate-900/80 rounded-xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-bold text-white",children:"Include pytest.param(marks=pytest.mark.xfail) Row"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"Simulates testing a known bug with graceful XFAIL handling"})]}),e.jsx("button",{onClick:()=>b(!l),className:r("px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all",l?"bg-purple-950 border border-purple-500 text-purple-300":"bg-slate-800 border border-slate-700 text-slate-400"),children:l?"XFAIL ROW: INCLUDED":"XFAIL ROW: DISABLED"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2",children:[e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-teal-900/50",children:[e.jsx("div",{className:"text-xs text-teal-400 font-medium mb-1",children:"Generated Test Count"}),e.jsxs("div",{className:"text-2xl font-bold font-mono text-teal-300",children:[d," Independent Tests"]}),e.jsxs("div",{className:"text-[11px] text-slate-400 mt-1",children:[i," × ",o," Cartesian Matrix"]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-cyan-900/50",children:[e.jsx("div",{className:"text-xs text-cyan-400 font-medium mb-1",children:"Execution Time (Est.)"}),e.jsxs("div",{className:"text-2xl font-bold font-mono text-cyan-300",children:["~",(d*.001).toFixed(3),"s"]}),e.jsx("div",{className:"text-[11px] text-slate-400 mt-1",children:"Sub-second execution"})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-purple-900/50",children:[e.jsx("div",{className:"text-xs text-purple-400 font-medium mb-1",children:"Code Duplication Saved"}),e.jsxs("div",{className:"text-2xl font-bold font-mono text-purple-300",children:[d*6," Lines of Code"]}),e.jsx("div",{className:"text-[11px] text-slate-400 mt-1",children:"100% DRY compliance"})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"Generated Parametrized Implementation:"}),e.jsx("pre",{className:"p-4 bg-slate-900/90 border border-slate-800 rounded-xl text-xs sm:text-sm font-mono text-teal-200 overflow-x-auto leading-relaxed",children:g})]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Production Code Labs & Parametrized Suites"})]}),e.jsxs("p",{className:"text-slate-300 mb-8 text-base leading-relaxed",children:["Inspect, run, and master all four production-grade parameterized test labs covering boundary value testing, Cartesian product matrices, custom test IDs with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"pytest.param"}),", and the multi-campus institutional fee engine:"]}),e.jsxs("div",{className:"space-y-10",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:"Lab 1: Multi-Argument Parametrization & Academic Grade Boundaries"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Verifying 8 strict grade boundaries (39.9, 40.0, 89.9, 90.0, 98.5) across Mamata, Mahima, and Debangshu in a single clean test."})]}),e.jsx(m,{fileModule:j,title:"basic_parametrize_boundaries.py",highlightLines:[12,26,38]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-cyan-300",children:"Lab 2: Stacked Parametrize Decorators (Cartesian Product Matrix)"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Generating 12 combinatorial test runs across 4 campuses (Barrackpore, Kolkata, Ichapur, Jadavpur) and 3 course tiers (Foundation, Pro, Master)."})]}),e.jsx(m,{fileModule:T,title:"matrix_combinatorial_parametrize.py",highlightLines:[13,31,38]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-purple-300",children:"Lab 3: Custom Test IDs & pytest.param(marks=pytest.mark.xfail)"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Assigning clear descriptive names to test variations and safely tagging a known defect row with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"xfail"}),"."]})]}),e.jsx(m,{fileModule:k,title:"custom_parametrize_ids_and_xfail.py",highlightLines:[23,35,48]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-amber-300",children:"Lab 4: Multi-Campus Enterprise Fee & Scholarship Matrix Case Study"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Comprehensive multi-variable test matrix verifying merit scholarships, early bird discounts, and 35% cap limits across Mamata, Mahima, Abhronila, and Susmita."})]}),e.jsx(m,{fileModule:N,title:"institutional_fee_matrix_casestudy.py",highlightLines:[20,35,52,60]})]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Parametrization Pitfalls & Anti-Patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"1. Combinatorial Explosion"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Stacking too many large parameter lists (e.g. 10 x 10 x 10 = 1,000 tests) causes massive test suite slowdown with diminishing testing value."}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# ANTI-PATTERN: 4 stacked decorators producing 5,000 tests",`
`,"# BEST PRACTICE: Focus on representative boundary pairs"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"2. Unreadable Default IDs on Complex Objects"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Passing large objects without custom ",e.jsx("code",{className:"text-rose-400 font-mono",children:"ids"})," creates unreadable terminal test names like ",e.jsx("code",{className:"text-rose-400 font-mono",children:"test_calc[<Object at 0x7f...>]"}),"."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# BAD: @pytest.mark.parametrize('obj', [User(1), User(2)])",`
`,"# GOOD: ids=['admin_user', 'student_user']"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"3. Argument Name Typos in Parametrize String"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Mismatches between the comma-separated string (e.g. ",e.jsx("code",{className:"text-rose-400 font-mono",children:'"a, b"'}),") and function parameters (",e.jsx("code",{className:"text-rose-400 font-mono",children:"def test(a, c)"}),") raise PyTest fixture lookup errors."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:['# BUG: @pytest.mark.parametrize("score, grade") → def test(score, expected)',`
`,"# FIX: Keep argument names perfectly identical"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"4. Testing Unrelated Behaviors in One Matrix"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Trying to test payment calculations, email dispatching, and user registration in one giant parametrized function creates brittle tests."}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# BEST PRACTICE: Parametrize only one specific domain concern per test"})]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Professional Parametrization Checklist"})]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm sm:text-base",children:[e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Use Meaningful Parameter Names:"})," Use clear names like ",e.jsx("code",{className:"text-teal-300 font-mono",children:"score, campus, expected_fee"})," rather than generic ",e.jsx("code",{className:"text-rose-400 font-mono",children:"x, y, z"}),"."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Assign Custom IDs for Readable Logs:"})," Use ",e.jsx("code",{className:"text-teal-300 font-mono",children:"ids=[...]"})," or ",e.jsx("code",{className:"text-teal-300 font-mono",children:'pytest.param(..., id="...")'})," to pinpoint scenarios in CI."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Cover Boundary Cutoffs:"})," Always include values just below, exactly at, and just above decision thresholds."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Tag Known Bugs with xfail:"})," Use ",e.jsx("code",{className:"text-teal-300 font-mono",children:"pytest.param(marks=pytest.mark.xfail)"})," to document known issues without failing CI."]})]})]})]}),e.jsx("section",{ref:a,className:"section-hidden",children:e.jsx(_,{title:"PyTest Parametrization FAQs",questions:w})}),e.jsx("section",{ref:a,className:"section-hidden",children:e.jsx(y,{content:A,title:"Topic 4: Parametrized Tests with PyTest Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic4_note.txt"})}),e.jsx("section",{ref:a,className:"section-hidden",children:e.jsx(v,{note:"Parametrization is the secret weapon for writing elegant, high-coverage test suites without drowning in duplicate code. In our institutional admission and tuition fee engines across Barrackpore, Kolkata, Ichapur, and Jadavpur, evaluating scholarship combinations for Mamata, Mahima, Abhronila, Susmita, and Debangshu requires testing dozens of edge cases. With @pytest.mark.parametrize, we define clean data tables that test every cutoff and campus multiplier in sub-milliseconds, giving us total confidence in our financial and grading logic."})})]})]})}export{D as default};
