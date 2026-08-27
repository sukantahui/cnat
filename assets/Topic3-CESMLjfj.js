import{b as i,j as e,bg as o}from"./vendor-react-core-Doz9nIC6.js";import{P as x}from"./PythonFileLoader-hCi5osN-.js";import{P as g}from"./PlainTextPrint-C08xhKA4.js";import{F as _}from"./FAQTemplate-CkSqDH4B.js";import{T}from"./TeacherSukantaHui-CyIG3xbg.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const j=`"""\r
# Module: 004_003_python-testing\r
# Topic 3: Modern testing with PyTest: test discovery, assert statements, fixtures\r
# File: pytest_assert_rewriting_and_discovery.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating modern PyTest standalone functions and AST assert rewriting.\r
"""\r
\r
def calculate_net_tuition(base_fee: float, scholarship_pct: float) -> float:\r
    if not (0.0 <= scholarship_pct <= 1.0):\r
        raise ValueError("Scholarship percentage must be between 0.0 and 1.0.")\r
    return base_fee * (1.0 - scholarship_pct)\r
\r
def get_student_metadata(sid: str, name: str, campus: str) -> dict:\r
    return {\r
        "sid": sid,\r
        "name": name,\r
        "campus": campus,\r
        "active": True\r
    }\r
\r
# ------------------------------------------------------------------------------\r
# PYTEST STANDALONE FUNCTIONS (Zero OOP Boilerplate!)\r
# ------------------------------------------------------------------------------\r
def test_calculate_net_tuition_regular():\r
    """Standard test function with plain assert statement."""\r
    net = calculate_net_tuition(10000.0, 0.15)\r
    # Plain Python assert statement (PyTest rewrites AST to provide detailed diffs!)\r
    assert net == 8500.0\r
    print("   [PASS] test_calculate_net_tuition_regular (8500.0 verified)")\r
\r
def test_calculate_net_tuition_full_waiver():\r
    net = calculate_net_tuition(15000.0, 1.0)\r
    assert net == 0.0\r
    print("   [PASS] test_calculate_net_tuition_full_waiver (0.0 verified)")\r
\r
def test_student_metadata_dict_comparison():\r
    meta = get_student_metadata("STU_BP_001", "Mamata", "Barrackpore")\r
    # PyTest compares nested dictionaries and highlights missing keys on failure\r
    assert meta == {\r
        "sid": "STU_BP_001",\r
        "name": "Mamata",\r
        "campus": "Barrackpore",\r
        "active": True\r
    }\r
    assert meta["campus"] in ["Barrackpore", "Kolkata", "Ichapur", "Jadavpur"]\r
    print("   [PASS] test_student_metadata_dict_comparison (Dict verified)")\r
\r
def main():\r
    print("=" * 75)\r
    print("[PYTEST DISCOVERY & ASSERT REWRITING] Standalone Test Functions")\r
    print("=" * 75)\r
\r
    test_calculate_net_tuition_regular()\r
    test_calculate_net_tuition_full_waiver()\r
    test_student_metadata_dict_comparison()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] PyTest eliminates OOP class boilerplate and uses standard 'assert'")\r
    print("           with automatic AST rewriting for detailed failure diffs.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,w=`"""\r
# Module: 004_003_python-testing\r
# Topic 3: Modern testing with PyTest: test discovery, assert statements, fixtures\r
# File: pytest_fixtures_and_dependency_injection.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating @pytest.fixture dependency injection, yield teardown,\r
#              and modular fixture composition.\r
"""\r
\r
import sqlite3\r
\r
# ------------------------------------------------------------------------------\r
# SIMULATED PYTEST FIXTURES (Yield Setup & Teardown Architecture)\r
# ------------------------------------------------------------------------------\r
def mock_db_connection_fixture():\r
    """Simulates @pytest.fixture(scope='module') with yield teardown."""\r
    print("\\n   [FIXTURE SETUP] Opening in-memory SQLite database...")\r
    conn = sqlite3.connect(":memory:")\r
    conn.execute("CREATE TABLE student_records (sid TEXT PRIMARY KEY, name TEXT, balance REAL)")\r
    \r
    # In PyTest: yield passes the initialized object to the test\r
    yield conn\r
    \r
    # In PyTest: Code after yield executes as teardown\r
    print("   [FIXTURE TEARDOWN] Closing in-memory SQLite database connection.\\n")\r
    conn.close()\r
\r
def mock_fresh_student_fixture(db_conn):\r
    """Simulates @pytest.fixture requesting another fixture (Composition)."""\r
    with db_conn:\r
        db_conn.execute("INSERT INTO student_records VALUES ('STU_BP_01', 'Mamata', 12000.0)")\r
    return {"sid": "STU_BP_01", "name": "Mamata", "balance": 12000.0}\r
\r
# ------------------------------------------------------------------------------\r
# TESTS CONSUMING FIXTURES VIA DEPENDENCY INJECTION\r
# ------------------------------------------------------------------------------\r
def test_student_initial_fixture_balance(db_conn, fresh_student):\r
    """Test receives db_conn and fresh_student automatically injected."""\r
    cursor = db_conn.cursor()\r
    cursor.execute("SELECT name, balance FROM student_records WHERE sid = ?", (fresh_student["sid"],))\r
    row = cursor.fetchone()\r
    \r
    assert row[0] == "Mamata"\r
    assert row[1] == 12000.0\r
    print("   [PASS] test_student_initial_fixture_balance (Fixture injection verified)")\r
\r
def test_student_payment_mutation(db_conn, fresh_student):\r
    with db_conn:\r
        db_conn.execute("UPDATE student_records SET balance = balance - 4000.0 WHERE sid = ?", (fresh_student["sid"],))\r
        \r
    cursor = db_conn.cursor()\r
    cursor.execute("SELECT balance FROM student_records WHERE sid = ?", (fresh_student["sid"],))\r
    new_bal = cursor.fetchone()[0]\r
    \r
    assert new_bal == 8000.0\r
    print("   [PASS] test_student_payment_mutation (Payment verified)")\r
\r
def main():\r
    print("=" * 75)\r
    print("[PYTEST FIXTURES] Dependency Injection & Yield Teardown")\r
    print("=" * 75)\r
\r
    # Simulate PyTest Fixture Runner Lifecycle\r
    fixture_gen = mock_db_connection_fixture()\r
    db_conn = next(fixture_gen) # Run setup phase\r
\r
    try:\r
        student = mock_fresh_student_fixture(db_conn)\r
        test_student_initial_fixture_balance(db_conn, student)\r
        test_student_payment_mutation(db_conn, student)\r
    finally:\r
        # Run teardown phase\r
        try:\r
            next(fixture_gen)\r
        except StopIteration:\r
            pass\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] @pytest.fixture provides modular dependency injection, yield-based")\r
    print("           teardown, and composable fixtures that request other fixtures.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,S=`"""\r
# Module: 004_003_python-testing\r
# Topic 3: Modern testing with PyTest: test discovery, assert statements, fixtures\r
# File: pytest_conftest_and_shared_fixtures.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating conftest.py shared fixture discovery and composition\r
#              across multi-campus candidate records (Barrackpore, Kolkata, Ichapur).\r
"""\r
\r
# Simulated conftest.py shared fixture provider\r
def conftest_campus_roster_fixture():\r
    """Simulates conftest.py root fixture providing mock campus data."""\r
    return {\r
        "Barrackpore": [\r
            {"name": "Mamata", "course": "Python Pro", "score": 96.0},\r
            {"name": "Debangshu", "course": "Data AI", "score": 88.0}\r
        ],\r
        "Kolkata": [\r
            {"name": "Mahima", "course": "Python Pro", "score": 92.0},\r
            {"name": "Susmita", "course": "Cloud DevOps", "score": 85.0}\r
        ],\r
        "Ichapur": [\r
            {"name": "Abhronila", "course": "Python Pro", "score": 94.0}\r
        ]\r
    }\r
\r
def conftest_top_performers_fixture(campus_roster):\r
    """Simulates composed fixture filtering top performers (Score >= 90)."""\r
    top_students = []\r
    for campus, students in campus_roster.items():\r
        for s in students:\r
            if s["score"] >= 90.0:\r
                top_students.append((s["name"], campus, s["score"]))\r
    return top_students\r
\r
# ------------------------------------------------------------------------------\r
# TESTS\r
# ------------------------------------------------------------------------------\r
def test_campus_roster_distribution(roster):\r
    assert "Barrackpore" in roster\r
    assert "Kolkata" in roster\r
    assert "Ichapur" in roster\r
    assert len(roster["Barrackpore"]) == 2\r
    print("   [PASS] test_campus_roster_distribution (All campuses present)")\r
\r
def test_top_performers_count(top_performers):\r
    # Mamata (BP: 96.0), Mahima (CC: 92.0), Abhronila (IC: 94.0) -> Exactly 3 students!\r
    assert len(top_performers) == 3\r
    names = [s[0] for s in top_performers]\r
    assert "Mamata" in names\r
    assert "Mahima" in names\r
    assert "Abhronila" in names\r
    print("   [PASS] test_top_performers_count (Top 3 candidates verified)")\r
\r
def main():\r
    print("=" * 75)\r
    print("[PYTEST CONFTEST.PY & COMPOSITION] Shared Multi-Campus Fixtures")\r
    print("=" * 75)\r
\r
    # Resolve shared conftest fixtures\r
    roster = conftest_campus_roster_fixture()\r
    top_performers = conftest_top_performers_fixture(roster)\r
\r
    test_campus_roster_distribution(roster)\r
    test_top_performers_count(top_performers)\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] conftest.py allows sharing fixtures project-wide without imports,")\r
    print("           enabling clean modular test suites and effortless test composition.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,v=`"""\r
# Module: 004_003_python-testing\r
# Topic 3: Modern testing with PyTest: test discovery, assert statements, fixtures\r
# File: institutional_pytest_suite.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: End-to-end multi-campus student admission and evaluation suite\r
#              built with modular PyTest function-scoped and module-scoped fixtures.\r
"""\r
\r
class InstitutionalAdmissionEngine:\r
    def __init__(self):\r
        self.enrolled = {}\r
        self.transcripts = {}\r
\r
    def admit_student(self, sid: str, name: str, campus: str, base_fee: float) -> dict:\r
        if sid in self.enrolled:\r
            raise KeyError(f"Student ID {sid} already registered.")\r
        record = {\r
            "sid": sid,\r
            "name": name,\r
            "campus": campus,\r
            "fee": base_fee,\r
            "status": "ACTIVE"\r
        }\r
        self.enrolled[sid] = record\r
        return record\r
\r
    def record_grade(self, sid: str, course: str, score: float):\r
        if sid not in self.enrolled:\r
            raise KeyError(f"Student {sid} not found.")\r
        if sid not in self.transcripts:\r
            self.transcripts[sid] = {}\r
        self.transcripts[sid][course] = score\r
\r
    def calculate_gpa(self, sid: str) -> float:\r
        if sid not in self.transcripts or not self.transcripts[sid]:\r
            return 0.0\r
        scores = list(self.transcripts[sid].values())\r
        return round(sum(scores) / len(scores), 2)\r
\r
# ------------------------------------------------------------------------------\r
# PYTEST FIXTURES & TESTS\r
# ------------------------------------------------------------------------------\r
def get_fresh_engine():\r
    """Simulates @pytest.fixture."""\r
    return InstitutionalAdmissionEngine()\r
\r
def test_student_admission_workflow():\r
    engine = get_fresh_engine()\r
    res = engine.admit_student("STU_BP_01", "Mamata", "Barrackpore", 15000.0)\r
    \r
    # Asserting dictionary contract\r
    assert res == {\r
        "sid": "STU_BP_01",\r
        "name": "Mamata",\r
        "campus": "Barrackpore",\r
        "fee": 15000.0,\r
        "status": "ACTIVE"\r
    }\r
    assert "STU_BP_01" in engine.enrolled\r
    print("   [PASS] test_student_admission_workflow")\r
\r
def test_duplicate_admission_raises_key_error():\r
    engine = get_fresh_engine()\r
    engine.admit_student("STU_CC_02", "Mahima", "Kolkata", 12000.0)\r
    \r
    try:\r
        engine.admit_student("STU_CC_02", "Duplicate", "Kolkata", 10000.0)\r
        assert False, "Expected KeyError on duplicate ID"\r
    except KeyError as e:\r
        assert "already registered" in str(e)\r
        print("   [PASS] test_duplicate_admission_raises_key_error")\r
\r
def test_transcript_gpa_calculation():\r
    engine = get_fresh_engine()\r
    engine.admit_student("STU_IC_03", "Abhronila", "Ichapur", 15000.0)\r
    \r
    engine.record_grade("STU_IC_03", "Python Pro", 95.0)\r
    engine.record_grade("STU_IC_03", "Data Science", 89.0)\r
    engine.record_grade("STU_IC_03", "DevOps", 92.0)\r
    \r
    gpa = engine.calculate_gpa("STU_IC_03")\r
    assert gpa == 92.0\r
    print("   [PASS] test_transcript_gpa_calculation (Abhronila 92.0 GPA verified)")\r
\r
def main():\r
    print("=" * 80)\r
    print("[CASE STUDY] Modern Institutional PyTest Suite")\r
    print("=" * 80)\r
\r
    test_student_admission_workflow()\r
    test_duplicate_admission_raises_key_error()\r
    test_transcript_gpa_calculation()\r
\r
    print("=" * 80)\r
    print("[TAKEAWAY] PyTest allows writing clean, readable, modular tests that verify")\r
    print("           complex domain logic and exception contracts with minimal code.")\r
    print("=" * 80)\r
\r
if __name__ == "__main__":\r
    main()\r
`,N=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 4: PRO LEVEL • MODULE 004_003: PYTHON TESTING\r
          TOPIC 3: MODERN TESTING WITH PYTEST: DISCOVERY, ASSERTIONS & FIXTURES\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. ZERO-BOILERPLATE STANDALONE TEST FUNCTIONS\r
--------------------------------------------------------------------------------\r
  # test_admission.py - No classes or self.assertEqual needed!\r
  def test_admission_discount():\r
      result = calculate_fee(10000.0, 0.15)\r
      # Pytest uses AST rewriting to show rich diffs on standard assert!\r
      assert result == 8500.0\r
\r
--------------------------------------------------------------------------------\r
2. MODULAR FIXTURES & DEPENDENCY INJECTION\r
--------------------------------------------------------------------------------\r
  import pytest\r
\r
  @pytest.fixture(scope="module")\r
  def database_conn():\r
      # Setup phase\r
      conn = init_in_memory_db()\r
      yield conn # Hands over fixture to test\r
      # Teardown phase (runs automatically after tests in module finish)\r
      conn.close()\r
\r
  @pytest.fixture\r
  def fresh_student(database_conn):\r
      # Fixture requesting another fixture!\r
      student = Student("STU_1", "Mamata", "Barrackpore", 10000.0)\r
      database_conn.save(student)\r
      return student\r
\r
  def test_student_payment(fresh_student):\r
      # Dependency injection via function parameter name\r
      assert fresh_student.name == "Mamata"\r
      fresh_student.pay(3000.0)\r
      assert fresh_student.balance == 7000.0\r
\r
--------------------------------------------------------------------------------\r
3. PYTEST CLI POWER COMMANDS\r
--------------------------------------------------------------------------------\r
  pytest                      # Auto-discovers and runs all tests\r
  pytest -v                   # Verbose output\r
  pytest -k "scholarship"     # Runs only tests matching name substring\r
  pytest -x                   # Stop immediately on first test failure\r
  pytest --lf                 # Re-run only failed tests from last run\r
\r
================================================================================\r
       END OF STUDY NOTE • TOPIC 3: MODERN PYTEST DISCOVERY & FIXTURES\r
================================================================================\r
`,E=[{question:"Why has PyTest become the de-facto standard testing framework in modern Python engineering?",shortAnswer:"PyTest eliminates object-oriented test class boilerplate (allowing clean standalone test functions), uses standard Python 'assert' statements with AST-rewritten detailed diff reporting, provides powerful modular fixture dependency injection, and has a rich plugin ecosystem.",explanation:"Ergonomics, simplicity, and modular architecture of pytest.",hint:"No mandatory TestCase classes, clean standard assert statements, and powerful modular fixtures.",level:"basic",codeExample:"# PyTest: def test_fee(): assert calculate(100) == 90"},{question:"How does PyTest auto-discover test files and test functions across a project?",shortAnswer:"PyTest searches recursively for files matching 'test_*.py' or '*_test.py', inside which it discovers standalone functions prefixed with 'test_' or methods inside classes prefixed with 'Test' (without '__init__').",explanation:"Automatic discovery conventions in pytest.",hint:"Finds files named test_*.py or *_test.py and functions named test_*().",level:"basic",codeExample:"# Discovers test_billing.py -> def test_payment():"},{question:"What is 'AST Assert Rewriting' in PyTest and why is it a game-changer?",shortAnswer:"PyTest parses the test file's Abstract Syntax Tree (AST) at import time and rewrites standard 'assert a == b' statements, intercepting intermediate expressions to display rich, colorful diffs of variables, dictionary keys, and list mismatches without requiring verbose 'self.assertEqual()' methods.",explanation:"Bytecode/AST introspection providing detailed failure diffs on plain assert statements.",hint:"PyTest rewrites the AST of plain assert statements to show detailed values and diffs.",level:"moderate",codeExample:`# Plain assert in pytest shows exact list differences:
assert [1, 2, 'BP'] == [1, 2, 'CC']`},{question:"How do you define and inject a fixture into a test function in PyTest?",shortAnswer:"Decorate a function with '@pytest.fixture', and then declare the fixture's name as a parameter in any test function; PyTest automatically resolves and injects the fixture's return value when running the test.",explanation:"Dependency injection via fixture parameters in pytest.",hint:"Define @pytest.fixture def my_fixture(): ... and pass my_fixture as an argument to test_*().",level:"basic",codeExample:`@pytest.fixture
def fresh_student(): return Student('Mamata')

def test_enroll(fresh_student): assert fresh_student.name == 'Mamata'`},{question:"How does teardown / cleanup work inside a '@pytest.fixture'?",shortAnswer:"By using the 'yield' keyword instead of 'return': code before 'yield' runs during setup, the yielded object is passed to the test, and code after 'yield' runs automatically as teardown cleanup after the test completes.",explanation:"Yield-based setup and teardown fixture lifecycle in pytest.",hint:"Code before 'yield' is setup; code after 'yield' is teardown.",level:"basic",codeExample:`@pytest.fixture
def db_conn():
    conn = open_db()
    yield conn # Test runs here
    conn.close() # Teardown cleanup`},{question:"What are the four primary fixture scopes available in PyTest?",shortAnswer:"1. 'function' (default - runs per test function), 2. 'class' (runs once per test class), 3. 'module' (runs once per test module file), and 4. 'session' (runs once across the entire test suite run).",explanation:"Granular fixture lifecycle scope tiers in pytest.",hint:"function (default), class, module, and session.",level:"moderate",codeExample:`@pytest.fixture(scope='session')
def shared_server(): ... `},{question:"What is 'conftest.py' and what special capabilities does it provide in PyTest?",shortAnswer:"'conftest.py' is a special configuration file in pytest that automatically shares fixtures, hooks, and custom markers across all test files within its directory and subdirectories without needing explicit imports.",explanation:"Automatic root and directory-level fixture sharing without imports.",hint:"A file defining fixtures shared across multiple test files without importing them.",level:"moderate",codeExample:`# conftest.py
@pytest.fixture
def global_client(): return Client()`},{question:"Can a PyTest fixture request and consume other fixtures (Fixture Composition)?",shortAnswer:"Yes, fixtures can accept other fixtures as arguments, forming a modular dependency tree (e.g. 'authenticated_user' fixture requests 'db_session' which requests 'app_config').",explanation:"Modular fixture composition and chaining.",hint:"Fixtures can take other fixtures as parameters.",level:"moderate",codeExample:`@pytest.fixture
def admin_student(fresh_student):
    fresh_student.is_admin = True
    return fresh_student`},{question:"What does the PyTest CLI flag '-k <expression>' do?",shortAnswer:`The '-k' flag filters and runs only tests whose names match the given substring expression (e.g. 'pytest -k "scholarship or admission"' or 'pytest -k "not slow"').`,explanation:"Keyword expression-based test filtering in pytest CLI.",hint:"pytest -k 'keyword' filters tests matching that name.",level:"basic",codeExample:"pytest -k 'barrackpore' # Runs only tests containing 'barrackpore'"},{question:"What does the PyTest CLI flag '-x' do?",shortAnswer:"The '-x' flag tells PyTest to stop the entire test run immediately upon encountering the very first test failure ('fail-fast' mode).",explanation:"Immediate test suite termination on first failure.",hint:"pytest -x stops test execution immediately upon the first failure.",level:"basic",codeExample:"pytest -x # Stops on first failure"},{question:"What does the PyTest CLI flag '--lf' (last-failed) do?",shortAnswer:"'pytest --lf' reads PyTest's internal cache and re-executes only the tests that failed in the previous test run, saving time during iterative debugging.",explanation:"Iterative debugging by re-running failed test subset.",hint:"pytest --lf re-runs only the tests that failed in the last run.",level:"basic",codeExample:"pytest --lf # Instant retry on failed tests only"},{question:"What does the '-s' (or '--capture=no') flag do in PyTest?",shortAnswer:"By default, PyTest captures stdout/stderr and only displays output for failing tests; passing '-s' disables output capture so that all 'print()' statements appear in the terminal during test execution.",explanation:"Standard output capture disablement for live console streaming.",hint:"pytest -s allows console print() statements to display live.",level:"basic",codeExample:"pytest -s # Shows print outputs"},{question:"What is an 'autouse=True' fixture in PyTest?",shortAnswer:"An 'autouse=True' fixture runs automatically for every test within its scope without needing to be explicitly declared as a parameter in individual test functions (useful for database transaction rollbacks or environment variable resets).",explanation:"Implicit automatic fixture execution per scope.",hint:"@pytest.fixture(autouse=True) runs automatically without being passed as a parameter.",level:"moderate",codeExample:`@pytest.fixture(autouse=True)
def reset_global_state():
    clear_cache()
    yield`},{question:"How do you access temporary directories in PyTest using built-in fixtures?",shortAnswer:"By requesting the built-in 'tmp_path' fixture (which provides a unique 'pathlib.Path' object for each test) or 'tmpdir' (legacy 'py.path.local'), ensuring temporary files are automatically isolated and cleaned up.",explanation:"Built-in isolated temporary filesystem fixture in pytest.",hint:"Use the built-in tmp_path fixture parameter for clean temp file tests.",level:"basic",codeExample:`def test_save(tmp_path):
    file = tmp_path / 'out.json'
    file.write_text('{}')`},{question:"How does PyTest handle legacy 'unittest.TestCase' test classes?",shortAnswer:"PyTest natively recognizes and executes standard 'unittest.TestCase' subclasses out-of-the-box, allowing teams to run legacy suites and new pytest-style tests in the same test runner.",explanation:"Backward compatibility and interoperability with unittest.",hint:"PyTest automatically discovers and runs legacy unittest.TestCase classes.",level:"basic",codeExample:"# PyTest runs both unittest classes and standalone pytest functions"},{question:"What is the purpose of the 'capsys' built-in fixture in PyTest?",shortAnswer:"'capsys' captures standard output (stdout) and standard error (stderr) generated during test execution, allowing assertions on printed console output via 'captured = capsys.readouterr()'.",explanation:"Console output interception and text assertion.",hint:"capsys.readouterr().out allows asserting on printed terminal text.",level:"moderate",codeExample:`def test_cli(capsys):
    print('Hello Mamata')
    captured = capsys.readouterr()
    assert 'Mamata' in captured.out`},{question:"What is the difference between a fixture returning a value vs yielding a generator?",shortAnswer:"A fixture with 'return' executes only a setup phase; a fixture with 'yield' executes setup before the yield, pauses while the test runs, and resumes after the yield for teardown cleanup.",explanation:"Single-phase return vs dual-phase yield generator fixtures.",hint:"return has only setup; yield supports setup before and teardown after.",level:"basic",codeExample:"# return -> setup only | yield -> setup + teardown"},{question:"How does PyTest's test output differ from unittest when an assertion fails?",shortAnswer:"PyTest displays the failing source code line, evaluates and prints every sub-expression value in the line, and prints a specialized visual diff (showing missing keys in dicts, extra elements in lists, or character differences in strings).",explanation:"Detailed expression evaluation and visual diff rendering.",hint:"PyTest prints full expression values and exact element-by-element diffs.",level:"basic",codeExample:"# Shows: Where: {'name': 'Mamata'} != {'name': 'Mahima'}"},{question:"What is 'pytest.ini' (or pyproject.toml [tool.pytest.ini_options])?",shortAnswer:"It is the central configuration file for PyTest where default CLI options (e.g. 'addopts = -v --strict-markers'), test discovery paths, and custom registered markers are configured.",explanation:"Project-wide configuration file for pytest defaults.",hint:"Configures default CLI flags, markers, and paths in pytest.ini.",level:"moderate",codeExample:`# pytest.ini
[pytest]
addopts = -v --strict-markers
testpaths = tests`},{question:"What is the ultimate golden rule of writing clean PyTest suites?",shortAnswer:"Keep test functions small and focused using standard 'assert', compose modular fixtures with '@pytest.fixture' and 'yield' for setup/teardown, share global fixtures in 'conftest.py', and avoid unnecessary OOP class boilerplate.",explanation:"The complete enterprise PyTest best practice standard.",hint:"Use plain assert, modular fixtures, conftest.py, and simple test functions.",level:"basic",codeExample:"# Professional Modern PyTest Standard"}];function O(){const f=i.useRef([]),[r,p]=i.useState("astRewriting"),[n,h]=i.useState("function"),[a,y]=i.useState(!0);let l="Runs once per test function (Default, maximum isolation)",d="Zero shared state, fresh instance per test",c="Creating isolated student domain entities (Mamata, Mahima)";n==="function"?(l="Setup & Teardown executed for EVERY test function",d="Complete state isolation (no inter-test pollution)",c="Instantiating fresh student objects or database records"):n==="module"?(l="Setup runs ONCE per test file; Teardown runs at file end",d="Amortized initialization for all tests in the file",c="Opening in-memory SQLite schema or loading 50MB sample dataset"):n==="session"&&(l="Setup runs ONCE at test suite start; Teardown at suite exit",d="Highest speed for heavy application-wide resources",c="Spawning Docker container, FastAPI TestClient, or DB pool");const b=`# Modern PyTest Architecture
# Fixture Scope: @pytest.fixture(scope="${n}") | Yield Teardown: ${a}

import pytest
import sqlite3

@pytest.fixture(scope="${n}")
def database_engine():
    # --- SETUP PHASE ---
    print("Connecting to in-memory database...")
    conn = sqlite3.connect(":memory:")
    conn.execute("CREATE TABLE students (sid TEXT, name TEXT, balance REAL)")
    
${a?`    # Yield passes the resource to the test and pauses here
    yield conn
    
    # --- TEARDOWN PHASE (Runs automatically after test finishes!) ---
    print("Closing database connection...")
    conn.close()`:"    return conn  # Setup only (no automatic teardown hook)"}

@pytest.fixture
def sample_student(database_engine):
    # Modular Fixture Composition: requesting another fixture!
    with database_engine:
        database_engine.execute("INSERT INTO students VALUES ('STU_1', 'Mamata', 10000.0)")
    return {"sid": "STU_1", "name": "Mamata", "balance": 10000.0}

# Standalone Test Function (Zero OOP Class Boilerplate!)
def test_student_payment(database_engine, sample_student):
    # AST Assert Rewriting provides detailed key-by-key diffs!
    assert sample_student["name"] == "Mamata"
    assert sample_student["balance"] == 10000.0`;i.useEffect(()=>{const t=new IntersectionObserver(u=>{u.forEach(m=>{m.isIntersecting&&m.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return f.current.forEach(u=>{u&&t.observe(u)}),()=>t.disconnect()},[]);const s=t=>{t&&!f.current.includes(t)&&f.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:s,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 4 • Module 004_003"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 3"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Automated Testing, PyTest & Quality Assurance"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Modern Testing with ",e.jsx("span",{className:"text-teal-400",children:"PyTest"}),": Assertions & Fixtures"]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master the industry-standard Python testing framework: writing clean, zero-boilerplate standalone test functions, leveraging AST assert rewriting for colorful in-depth failure diffs, composing modular dependency-injected fixtures with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"@pytest.fixture"}),", managing teardown lifecycle hooks with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"yield"}),", and sharing fixtures seamlessly across directories with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"conftest.py"}),"."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ Zero-Boilerplate Functions"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔍 AST Assert Rewriting Diffs"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"💉 Modular Fixture Injection"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📂 conftest.py Global Sharing"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The PyTest Philosophy & Architecture"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["PyTest revolutionized Python testing by replacing rigid object-oriented class hierarchies with functional, Pythonic test discovery, standard ",e.jsx("code",{className:"text-teal-300 font-mono",children:"assert"})," statements, and modular dependency-injection fixtures:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Zero Boilerplate"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"def test_*()"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Write plain standalone functions without inheriting from ",e.jsx("code",{className:"text-teal-300",children:"unittest.TestCase"})," or creating class wrappers."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ AST Assert Rewriting"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"assert a == b"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"PyTest rewrites the bytecode AST of plain assertions to render colorful key-by-key and item-by-item failure diffs."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Modular Fixtures"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"@pytest.fixture + yield"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Dependency injection via function parameters with yield-based teardown and scopes (",e.jsx("code",{className:"text-purple-300",children:"function"}),", ",e.jsx("code",{className:"text-purple-300",children:"module"}),", ",e.jsx("code",{className:"text-purple-300",children:"session"}),")."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 shadow-lg",children:[e.jsx("div",{className:"text-amber-400 font-bold text-sm mb-1",children:"4️⃣ conftest.py Discovery"}),e.jsx("code",{className:"text-xs font-mono text-amber-300 block mb-1",children:"Global Scope Sharing"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Define reusable mock fixtures once in ",e.jsx("code",{className:"text-amber-300 font-mono",children:"conftest.py"})," and consume them everywhere without importing."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"Why PyTest Fixtures Destroy Legacy OOP setUp/tearDown"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["In legacy ",e.jsx("code",{className:"text-rose-400 font-mono",children:"unittest"}),", every test in a class shares the exact same ",e.jsx("code",{className:"text-rose-400 font-mono",children:"setUp()"})," method whether it needs it or not. In ",e.jsx("code",{className:"text-teal-300 font-mono",children:"pytest"}),", test functions request ",e.jsx("span",{className:"text-emerald-400 font-bold",children:"only the specific fixtures they need as parameters"}),", producing clean, composable, and decoupled test suites."]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing AST Rewriting, Fixture Trees & conftest Sharing"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>p("astRewriting"),className:o("px-3 py-1.5 rounded-lg transition-all",r==="astRewriting"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"AST Assert Rewriting"}),e.jsx("button",{onClick:()=>p("fixtureTree"),className:o("px-3 py-1.5 rounded-lg transition-all",r==="fixtureTree"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Fixture Composition & Yield"}),e.jsx("button",{onClick:()=>p("conftestScopes"),className:o("px-3 py-1.5 rounded-lg transition-all",r==="conftestScopes"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"conftest.py Root Sharing"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining AST bytecode introspection, dependency-injection graph resolution, and project-wide fixture distribution:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:r==="astRewriting"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"AST ASSERT REWRITING: TURNING SIMPLE ASSERTS INTO RICH FAILURE DIAGNOSTICS"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"245",rx:"8",fill:"#0f172a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#5eead4",fontSize:"12",fontWeight:"bold",children:"What Developer Writes in Python:"}),e.jsx("rect",{x:"20",y:"50",width:"340",height:"50",rx:"4",fill:"#022c22",stroke:"#0d9488"}),e.jsx("text",{x:"30",y:"73",fill:"#a7f3d0",fontSize:"11",fontFamily:"monospace",children:"def test_student():"}),e.jsx("text",{x:"50",y:"90",fill:"#5eead4",fontSize:"11",fontFamily:"monospace",children:'assert get_campus() == "Barrackpore"'}),e.jsx("rect",{x:"20",y:"115",width:"340",height:"110",rx:"4",fill:"#134e4a"}),e.jsx("text",{x:"30",y:"137",fill:"#ffffff",fontSize:"10",fontWeight:"bold",children:"PyTest AST Import Hook Interception:"}),e.jsx("text",{x:"30",y:"155",fill:"#ccfbf1",fontSize:"9",children:"1. Intercepts import of test file"}),e.jsx("text",{x:"30",y:"172",fill:"#ccfbf1",fontSize:"9",children:"2. Rewrites AST comparison nodes"}),e.jsx("text",{x:"30",y:"190",fill:"#ccfbf1",fontSize:"9",children:"3. Instruments sub-expression evaluations"}),e.jsx("text",{x:"30",y:"210",fill:"#facc15",fontSize:"9",fontWeight:"bold",children:"⚡ Zero manual self.assertEqual needed!"})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"245",rx:"8",fill:"#1e1e2e",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"PyTest Failure Output (Rich Diff):"}),e.jsx("rect",{x:"20",y:"50",width:"340",height:"175",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"72",fill:"#fca5a5",fontSize:"10",fontFamily:"monospace",children:'> assert get_campus() == "Barrackpore"'}),e.jsx("text",{x:"30",y:"95",fill:"#fb7185",fontSize:"10",fontFamily:"monospace",children:"E AssertionError: assert 'Kolkata' == 'Barrackpore'"}),e.jsx("text",{x:"30",y:"120",fill:"#fda4af",fontSize:"9",fontFamily:"monospace",children:"- Barrackpore"}),e.jsx("text",{x:"30",y:"138",fill:"#86efac",fontSize:"9",fontFamily:"monospace",children:"+ Kolkata"}),e.jsx("text",{x:"30",y:"170",fill:"#94a3b8",fontSize:"9",children:"Where: 'Kolkata' = get_campus()"}),e.jsx("text",{x:"30",y:"195",fill:"#facc15",fontSize:"9",fontWeight:"bold",children:"🎯 Instant failure localization in seconds!"})]})]}):r==="fixtureTree"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"FIXTURE COMPOSITION & YIELD TEARDOWN TIMELINE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#082f49",stroke:"#0ea5e9"}),e.jsx("rect",{x:"25",y:"45",width:"220",height:"130",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("text",{x:"35",y:"70",fill:"#e0f2fe",fontSize:"11",fontWeight:"bold",children:"@pytest.fixture: db_engine"}),e.jsx("text",{x:"35",y:"90",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"1. conn = sqlite3.connect()"}),e.jsx("text",{x:"35",y:"108",fill:"#facc15",fontSize:"9",fontFamily:"monospace",children:"2. yield conn (Pauses!)"}),e.jsx("text",{x:"35",y:"126",fill:"#f87171",fontSize:"9",fontFamily:"monospace",children:"3. conn.close() (Teardown)"}),e.jsx("text",{x:"35",y:"155",fill:"#38bdf8",fontSize:"8",fontWeight:"bold",children:"Scope: module"}),e.jsx("path",{d:"M 245 110 L 295 110",stroke:"#38bdf8",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"300",y:"45",width:"240",height:"130",rx:"6",fill:"#064e3b",stroke:"#34d399"}),e.jsx("text",{x:"310",y:"70",fill:"#d1fae5",fontSize:"11",fontWeight:"bold",children:"@pytest.fixture: student(db)"}),e.jsx("text",{x:"310",y:"90",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:'1. db.insert("Mamata")'}),e.jsx("text",{x:"310",y:"108",fill:"#facc15",fontSize:"9",fontFamily:"monospace",children:"2. yield student (Active)"}),e.jsx("text",{x:"310",y:"126",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"3. db.delete(student)"}),e.jsx("text",{x:"310",y:"155",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Requests db_engine fixture"}),e.jsx("path",{d:"M 540 110 L 590 110",stroke:"#38bdf8",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"595",y:"45",width:"200",height:"130",rx:"6",fill:"#1e1b4b",stroke:"#818cf8"}),e.jsx("text",{x:"605",y:"70",fill:"#e0e7ff",fontSize:"11",fontWeight:"bold",children:"def test_pay(student):"}),e.jsx("text",{x:"605",y:"95",fill:"#c7d2fe",fontSize:"9",fontFamily:"monospace",children:"student.pay(5000)"}),e.jsx("text",{x:"605",y:"115",fill:"#c7d2fe",fontSize:"9",fontFamily:"monospace",children:"assert student.due == 5000"}),e.jsx("text",{x:"605",y:"155",fill:"#86efac",fontSize:"9",fontWeight:"bold",children:"✅ Injected & Verified"}),e.jsx("rect",{x:"25",y:"190",width:"770",height:"40",rx:"4",fill:"#0f172a",stroke:"#0ea5e9"}),e.jsx("text",{x:"40",y:"215",fill:"#e0f2fe",fontSize:"10",children:"💡 Yield Fixtures cleanly separate Setup (before yield) from Teardown (after yield) with automatic LIFO execution."})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"CONFTEST.PY: AUTOMATIC FIXTURE SHARING ACROSS DIRECTORIES"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#1e1b4b",stroke:"#a855f7"}),e.jsx("rect",{x:"25",y:"35",width:"770",height:"65",rx:"6",fill:"#3b0764",stroke:"#c084fc"}),e.jsx("text",{x:"40",y:"60",fill:"#f3e8ff",fontSize:"12",fontWeight:"bold",children:"📁 tests/conftest.py (Project Root Configuration)"}),e.jsx("text",{x:"40",y:"80",fill:"#d8b4fe",fontSize:"10",fontFamily:"monospace",children:"@pytest.fixture: mock_campus_roster, global_database_pool, auth_client"}),e.jsx("rect",{x:"25",y:"115",width:"240",height:"110",rx:"6",fill:"#0f172a",stroke:"#60a5fa"}),e.jsx("text",{x:"35",y:"140",fill:"#bfdbfe",fontSize:"11",fontWeight:"bold",children:"tests/test_admission.py"}),e.jsx("text",{x:"35",y:"160",fill:"#93c5fd",fontSize:"9",fontFamily:"monospace",children:"def test_admit(auth_client):"}),e.jsx("text",{x:"35",y:"180",fill:"#93c5fd",fontSize:"9",fontFamily:"monospace",children:"  assert auth_client.ready"}),e.jsx("text",{x:"35",y:"205",fill:"#fde047",fontSize:"8",children:"Auto-injected from conftest!"}),e.jsx("rect",{x:"290",y:"115",width:"240",height:"110",rx:"6",fill:"#0f172a",stroke:"#34d399"}),e.jsx("text",{x:"300",y:"140",fill:"#d1fae5",fontSize:"11",fontWeight:"bold",children:"tests/test_billing.py"}),e.jsx("text",{x:"300",y:"160",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"def test_fee(mock_roster):"}),e.jsx("text",{x:"300",y:"180",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:'  assert "Mamata" in roster'}),e.jsx("text",{x:"300",y:"205",fill:"#fde047",fontSize:"8",children:"No import statement required!"}),e.jsx("rect",{x:"555",y:"115",width:"240",height:"110",rx:"6",fill:"#0f172a",stroke:"#f59e0b"}),e.jsx("text",{x:"565",y:"140",fill:"#fef3c7",fontSize:"11",fontWeight:"bold",children:"tests/campus/test_bp.py"}),e.jsx("text",{x:"565",y:"160",fill:"#fde68a",fontSize:"9",fontFamily:"monospace",children:"def test_bp(global_db):"}),e.jsx("text",{x:"565",y:"180",fill:"#fde68a",fontSize:"9",fontFamily:"monospace",children:"  assert global_db.is_open"}),e.jsx("text",{x:"565",y:"205",fill:"#fde047",fontSize:"8",children:"Inherits parent conftest fixtures"})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧪"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive PyTest Fixture Scope & Yield Simulator"})]}),e.jsxs("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:["Configure fixture execution scopes (",e.jsx("code",{className:"text-teal-300 font-mono",children:"function"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"module"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"session"}),") and teardown mechanics to observe lifecycle behaviors and inspect production PyTest code:"]}),e.jsxs("div",{className:"bg-slate-950 p-5 sm:p-6 rounded-xl border border-slate-800/90 space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3",children:"Select Fixture Scope:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[{id:"function",label:"scope='function'",icon:"🔄",tag:"Per Test (Default Isolation)"},{id:"module",label:"scope='module'",icon:"📁",tag:"Once Per Test File"},{id:"session",label:"scope='session'",icon:"🚀",tag:"Once Per Entire Test Run"}].map(t=>e.jsxs("button",{onClick:()=>h(t.id),className:o("p-3 rounded-xl border text-left transition-all",n===t.id?"bg-teal-950/60 border-teal-500 shadow-md shadow-teal-950/50":"bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400"),children:[e.jsxs("div",{className:"text-base mb-1",children:[t.icon," ",e.jsx("strong",{className:"text-slate-200 text-xs sm:text-sm",children:t.label})]}),e.jsx("div",{className:"text-[11px] text-teal-400 font-mono",children:t.tag})]},t.id))})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 bg-slate-900/80 rounded-xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-bold text-white",children:"Enable Yield Teardown Hook"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"Executes automatic cleanup logic after test completion"})]}),e.jsx("button",{onClick:()=>y(!a),className:o("px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all",a?"bg-emerald-950 border border-emerald-500 text-emerald-300":"bg-slate-800 border border-slate-700 text-slate-400"),children:a?"YIELD TEARDOWN: ACTIVE":"RETURN: SETUP ONLY"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2",children:[e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-teal-900/50",children:[e.jsx("div",{className:"text-xs text-teal-400 font-medium mb-1",children:"Execution Lifecycle"}),e.jsx("div",{className:"text-xs font-bold font-mono text-teal-300 mt-1 leading-snug",children:l})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-cyan-900/50",children:[e.jsx("div",{className:"text-xs text-cyan-400 font-medium mb-1",children:"State Isolation"}),e.jsx("div",{className:"text-xs font-bold font-mono text-cyan-300 mt-1 leading-snug",children:d})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-purple-900/50",children:[e.jsx("div",{className:"text-xs text-purple-400 font-medium mb-1",children:"Recommended Usage"}),e.jsx("div",{className:"text-xs font-bold font-mono text-purple-300 mt-1 leading-snug",children:c})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"Generated Modern PyTest Implementation:"}),e.jsx("pre",{className:"p-4 bg-slate-900/90 border border-slate-800 rounded-xl text-xs sm:text-sm font-mono text-teal-200 overflow-x-auto leading-relaxed",children:b})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Production Code Labs & PyTest Suites"})]}),e.jsxs("p",{className:"text-slate-300 mb-8 text-base leading-relaxed",children:["Inspect, run, and master all four production-grade pytest labs covering standalone functions with AST assert rewriting, dependency injection with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"@pytest.fixture"}),", shared project-wide fixtures with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"conftest.py"}),", and the complete institutional student manager:"]}),e.jsxs("div",{className:"space-y-10",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:"Lab 1: PyTest Standalone Functions & AST Assert Rewriting"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Writing zero-boilerplate standalone test functions with plain Python ",e.jsx("code",{className:"text-teal-300 font-mono",children:"assert"})," statements for tuition discounts and dictionary comparisons."]})]}),e.jsx(x,{fileModule:j,title:"pytest_assert_rewriting_and_discovery.py",highlightLines:[25,30,35]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-cyan-300",children:"Lab 2: @pytest.fixture Dependency Injection & Yield Teardown"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Building modular in-memory SQLite database fixtures with yield teardown and chaining composed student fixtures."})]}),e.jsx(x,{fileModule:w,title:"pytest_fixtures_and_dependency_injection.py",highlightLines:[18,23,27,36]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-purple-300",children:"Lab 3: Shared conftest.py Fixtures & Composed Rosters"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Distributing multi-campus student mock rosters (Barrackpore, Kolkata, Ichapur) project-wide without import statements."})]}),e.jsx(x,{fileModule:S,title:"pytest_conftest_and_shared_fixtures.py",highlightLines:[14,29,39]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-amber-300",children:"Lab 4: Institutional Student Admission & GPA PyTest Suite"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Complete modern pytest suite verifying candidate registration, duplicate prevention, and multi-course GPA calculation for Abhronila."})]}),e.jsx(x,{fileModule:v,title:"institutional_pytest_suite.py",highlightLines:[42,54,65]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. PyTest Pitfalls & Anti-Patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"1. Calling Fixtures Directly as Functions"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Calling a fixture like a function (",e.jsx("code",{className:"text-rose-400 font-mono",children:"my_fix = fresh_student()"}),") invokes the fixture generator rather than the injected value! Declare it as a parameter instead."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# BUG: s = fresh_student() # Fixture function call error!",`
`,"# FIX: def test_pay(fresh_student): ..."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"2. Importing conftest.py Explicitly"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Writing ",e.jsx("code",{className:"text-rose-400 font-mono",children:"from conftest import my_fixture"})," causes duplicate fixture registration warnings. PyTest discovers ",e.jsx("code",{className:"text-teal-300 font-mono",children:"conftest.py"})," automatically."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# BUG: from conftest import db_conn",`
`,"# FIX: Just pass db_conn as a test parameter"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"3. Mutating Session-Scoped Fixtures"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Modifying shared data inside a ",e.jsx("code",{className:"text-rose-400 font-mono",children:'scope="session"'})," fixture pollutes subsequent tests. Use session scope only for immutable or read-only resources."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# BUG: global_session_roster.clear()",`
`,'# FIX: Use scope="function" for mutable state']})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"4. Adding __init__.py Inside Test Directories"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Adding ",e.jsx("code",{className:"text-rose-400 font-mono",children:"__init__.py"})," inside test folders can alter module namespace resolution and create import collisions across different test subdirectories."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# BEST PRACTICE: Keep tests/ as a directory without __init__.py",`
`,"# Use src/ layout and pip install -e ."]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Professional PyTest Checklist"})]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm sm:text-base",children:[e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Use Standalone Test Functions:"})," Prefer simple ",e.jsx("code",{className:"text-teal-300 font-mono",children:"def test_*():"})," functions over unnecessary OOP test classes."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Rely on Plain Assert Statements:"})," Let PyTest's AST rewriter generate colorful failure diffs."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Use Yield Fixtures for Teardown:"})," Place setup logic before ",e.jsx("code",{className:"text-teal-300 font-mono",children:"yield"})," and cleanup logic after."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Organize Shared State in conftest.py:"})," Store cross-file fixtures in ",e.jsx("code",{className:"text-teal-300 font-mono",children:"conftest.py"})," for zero-import auto-discovery."]})]})]})]}),e.jsx("section",{ref:s,className:"section-hidden",children:e.jsx(_,{title:"Modern PyTest Framework FAQs",questions:E})}),e.jsx("section",{ref:s,className:"section-hidden",children:e.jsx(g,{content:N,title:"Topic 3: Modern Testing with PyTest Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic3_note.txt"})}),e.jsx("section",{ref:s,className:"section-hidden",children:e.jsx(T,{note:"PyTest represents the pinnacle of modern Python testing ergonomics. In our institutional software across Barrackpore, Kolkata, Ichapur, and Jadavpur, transitioning from verbose test classes to clean, expressive pytest functions and dependency-injected fixtures has cut test code size in half while providing vastly superior failure diagnostics. Leveraging yield fixtures for database setups and conftest.py for candidate roster sharing ensures that testing student enrollment for Mamata, Mahima, and Abhronila is fast, modular, and enjoyable."})})]})]})}export{O as default};
