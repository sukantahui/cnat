import{b as r,j as e,bg as m}from"./vendor-react-core-Doz9nIC6.js";import{P as u}from"./PythonFileLoader-hCi5osN-.js";import{P as y}from"./PlainTextPrint-C08xhKA4.js";import{F as _}from"./FAQTemplate-BHhlgA96.js";import{T}from"./TeacherSukantaHui-CEPuAfsb.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const v=`"""\r
# Module: 004_003_python-testing\r
# Topic 1: Types of testing: Unit testing, Integration testing, Functional testing\r
# File: unit_testing_pure_functions.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Level 1 of Testing Pyramid - High-speed isolated Unit Tests\r
#              verifying pure calculation functions in memory.\r
"""\r
\r
def calculate_gpa(marks: list[float]) -> float:\r
    """Calculates weighted grade point average on a 10.0 scale."""\r
    if not marks:\r
        raise ValueError("Marks list cannot be empty.")\r
    for m in marks:\r
        if not (0.0 <= m <= 100.0):\r
            raise ValueError(f"Mark out of valid range (0-100): {m}")\r
    return round((sum(marks) / len(marks)) / 10.0, 2)\r
\r
def calculate_late_fee(due_days: int, daily_rate: float = 50.0, cap: float = 1500.0) -> float:\r
    """Calculates late fine with maximum cap."""\r
    if due_days <= 0:\r
        return 0.0\r
    return min(float(due_days * daily_rate), cap)\r
\r
def apply_campus_waiver(base_fee: float, campus: str) -> float:\r
    """Calculates net fee after campus regional waiver."""\r
    waivers = {\r
        "barrackpore": 0.15,\r
        "ichapur": 0.10,\r
        "kolkata": 0.08,\r
        "jadavpur": 0.05\r
    }\r
    pct = waivers.get(campus.lower(), 0.0)\r
    return base_fee * (1.0 - pct)\r
\r
# ------------------------------------------------------------------------------\r
# UNIT TEST SUITE (Isolated in-memory assertions)\r
# ------------------------------------------------------------------------------\r
def test_calculate_gpa_valid():\r
    # Arrange\r
    scores = [90.0, 95.0, 85.0]\r
    # Act\r
    gpa = calculate_gpa(scores)\r
    # Assert\r
    assert gpa == 9.0, f"Expected 9.0, got {gpa}"\r
    print("   [PASS] test_calculate_gpa_valid (Mamata: 9.0 GPA)")\r
\r
def test_calculate_gpa_empty_raises():\r
    try:\r
        calculate_gpa([])\r
        assert False, "Expected ValueError on empty list"\r
    except ValueError:\r
        print("   [PASS] test_calculate_gpa_empty_raises")\r
\r
def test_calculate_late_fee_zero_and_capped():\r
    assert calculate_late_fee(0) == 0.0, "Zero days should have zero fee"\r
    assert calculate_late_fee(5, daily_rate=50.0) == 250.0, "5 days should be 250"\r
    assert calculate_late_fee(50, daily_rate=50.0, cap=1000.0) == 1000.0, "Should cap at 1000"\r
    print("   [PASS] test_calculate_late_fee_zero_and_capped")\r
\r
def test_apply_campus_waivers():\r
    assert apply_campus_waiver(10000.0, "Barrackpore") == 8500.0, "Barrackpore 15% failed"\r
    assert apply_campus_waiver(10000.0, "Kolkata") == 9200.0, "Kolkata 8% failed"\r
    assert apply_campus_waiver(10000.0, "Unknown") == 10000.0, "Unknown campus should have 0% waiver"\r
    print("   [PASS] test_apply_campus_waivers")\r
\r
def main():\r
    print("=" * 75)\r
    print("[UNIT TESTING] Level 1: Isolated In-Memory Function Verification")\r
    print("=" * 75)\r
\r
    test_calculate_gpa_valid()\r
    test_calculate_gpa_empty_raises()\r
    test_calculate_late_fee_zero_and_capped()\r
    test_apply_campus_waivers()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Unit tests execute in microseconds with zero external dependencies,")\r
    print("           pinpointing calculation defects instantly during development.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,S=`"""\r
# Module: 004_003_python-testing\r
# Topic 1: Types of testing: Unit testing, Integration testing, Functional testing\r
# File: integration_testing_multi_component.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Level 2 of Testing Pyramid - Integration testing across multiple\r
#              collaborating subsystems using in-memory SQLite (:memory:).\r
"""\r
\r
import sqlite3\r
\r
class StudentDatabase:\r
    """Database component managing SQLite student tables."""\r
    def __init__(self, db_uri=":memory:"):\r
        self.conn = sqlite3.connect(db_uri)\r
        self._init_schema()\r
\r
    def _init_schema(self):\r
        with self.conn:\r
            self.conn.execute("""\r
                CREATE TABLE students (\r
                    sid TEXT PRIMARY KEY,\r
                    name TEXT NOT NULL,\r
                    campus TEXT NOT NULL,\r
                    fee_balance REAL NOT NULL\r
                )\r
            """)\r
\r
    def insert_student(self, sid: str, name: str, campus: str, fee: float):\r
        with self.conn:\r
            self.conn.execute(\r
                "INSERT INTO students (sid, name, campus, fee_balance) VALUES (?, ?, ?, ?)",\r
                (sid, name, campus, fee)\r
            )\r
\r
    def get_student(self, sid: str):\r
        cursor = self.conn.cursor()\r
        cursor.execute("SELECT sid, name, campus, fee_balance FROM students WHERE sid = ?", (sid,))\r
        row = cursor.fetchone()\r
        if not row:\r
            return None\r
        return {"sid": row[0], "name": row[1], "campus": row[2], "balance": row[3]}\r
\r
    def update_balance(self, sid: str, new_balance: float):\r
        with self.conn:\r
            self.conn.execute("UPDATE students SET fee_balance = ? WHERE sid = ?", (new_balance, sid))\r
\r
class BillingService:\r
    """Business logic service interacting with Database component."""\r
    def __init__(self, db: StudentDatabase):\r
        self.db = db\r
\r
    def process_payment(self, sid: str, payment_amount: float) -> float:\r
        if payment_amount <= 0:\r
            raise ValueError("Payment amount must be positive.")\r
        student = self.db.get_student(sid)\r
        if not student:\r
            raise KeyError(f"Student {sid} not found.")\r
\r
        updated_balance = student["balance"] - payment_amount\r
        self.db.update_balance(sid, updated_balance)\r
        return updated_balance\r
\r
# ------------------------------------------------------------------------------\r
# INTEGRATION TEST SUITE (Verifying Component Collaboration)\r
# ------------------------------------------------------------------------------\r
def test_billing_service_db_integration():\r
    print("   [...] Running BillingService + StudentDatabase Integration Test...")\r
    \r
    # 1. Arrange\r
    db = StudentDatabase(":memory:")\r
    db.insert_student("STU_BP_101", "Mamata", "Barrackpore", 10000.0)\r
    service = BillingService(db)\r
\r
    # 2. Act: Process payment through service\r
    rem_balance = service.process_payment("STU_BP_101", 3500.0)\r
\r
    # 3. Assert: Verify Service return value AND actual persisted DB state\r
    assert rem_balance == 6500.0, f"Expected 6500.0, got {rem_balance}"\r
    \r
    persisted_student = db.get_student("STU_BP_101")\r
    assert persisted_student["balance"] == 6500.0, "Database state was not updated!"\r
    assert persisted_student["name"] == "Mamata"\r
    \r
    print("   [PASS] test_billing_service_db_integration (Payment & DB synchronization verified)")\r
\r
def test_billing_nonexistent_student_integration():\r
    db = StudentDatabase(":memory:")\r
    service = BillingService(db)\r
    \r
    try:\r
        service.process_payment("INVALID_ID", 1000.0)\r
        assert False, "Expected KeyError"\r
    except KeyError:\r
        print("   [PASS] test_billing_nonexistent_student_integration (KeyError contract verified)")\r
\r
def main():\r
    print("=" * 75)\r
    print("[INTEGRATION TESTING] Level 2: Component Collaboration & DB Persistence")\r
    print("=" * 75)\r
\r
    test_billing_service_db_integration()\r
    test_billing_nonexistent_student_integration()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Integration tests verify that real components communicate,")\r
    print("           serialize SQL queries, and synchronize state without errors.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,E=`"""\r
# Module: 004_003_python-testing\r
# Topic 1: Types of testing: Unit testing, Integration testing, Functional testing\r
# File: functional_system_e2e_testing.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Level 3 of Testing Pyramid - Functional / End-to-End (E2E) testing\r
#              simulating complete black-box candidate admission journeys.\r
"""\r
\r
import json\r
\r
class AdmissionSystemApp:\r
    """Black-Box Application Entry Point."""\r
    def __init__(self):\r
        self.students = {}\r
        self.ledger = []\r
\r
    def handle_request(self, request_json: str) -> str:\r
        """Simulates HTTP API endpoint: POST /api/v1/admit"""\r
        payload = json.loads(request_json)\r
        \r
        # Validation\r
        required = ["name", "campus", "course", "initial_payment"]\r
        for r in required:\r
            if r not in payload:\r
                return json.dumps({"status": "ERROR", "message": f"Missing field: {r}"})\r
\r
        if payload["initial_payment"] < 5000.0:\r
            return json.dumps({"status": "REJECTED", "reason": "Minimum initial payment is Rs. 5,000"})\r
\r
        # Process admission\r
        app_id = f"APP_{len(self.students) + 1:04d}"\r
        student_record = {\r
            "app_id": app_id,\r
            "name": payload["name"],\r
            "campus": payload["campus"],\r
            "course": payload["course"],\r
            "total_fee": 25000.0,\r
            "paid": payload["initial_payment"],\r
            "due": 25000.0 - payload["initial_payment"]\r
        }\r
        self.students[app_id] = student_record\r
        self.ledger.append({"app_id": app_id, "amount": payload["initial_payment"], "type": "ADMISSION_FEE"})\r
\r
        return json.dumps({\r
            "status": "SUCCESS",\r
            "app_id": app_id,\r
            "student_name": payload["name"],\r
            "remaining_due": student_record["due"],\r
            "receipt_id": f"RCP_{len(self.ledger):04d}"\r
        })\r
\r
# ------------------------------------------------------------------------------\r
# FUNCTIONAL / E2E TEST SUITE (Black-Box User Journey)\r
# ------------------------------------------------------------------------------\r
def test_e2e_successful_candidate_admission_journey():\r
    print("   [...] Running E2E Admission Journey for Mamata (Barrackpore)...")\r
    app = AdmissionSystemApp()\r
\r
    # 1. User submits complete JSON admission form\r
    request_data = json.dumps({\r
        "name": "Mamata",\r
        "campus": "Barrackpore",\r
        "course": "Python Pro Mastery",\r
        "initial_payment": 8000.0\r
    })\r
\r
    # 2. System handles entire workflow (Validation -> Business Logic -> Persistence -> Receipt)\r
    response_json = app.handle_request(request_data)\r
    response = json.loads(response_json)\r
\r
    # 3. Assert End-to-End User Contract\r
    assert response["status"] == "SUCCESS"\r
    assert response["student_name"] == "Mamata"\r
    assert response["remaining_due"] == 17000.0\r
    assert response["app_id"] == "APP_0001"\r
    assert response["receipt_id"] == "RCP_0001"\r
    \r
    print(f"   [PASS] test_e2e_successful_candidate_admission_journey -> AppID: {response['app_id']}")\r
\r
def test_e2e_underpaid_admission_rejected():\r
    app = AdmissionSystemApp()\r
    request_data = json.dumps({\r
        "name": "Debangshu",\r
        "campus": "Kolkata",\r
        "course": "Python Pro",\r
        "initial_payment": 2000.0 # Under minimum 5000\r
    })\r
\r
    response = json.loads(app.handle_request(request_data))\r
    assert response["status"] == "REJECTED"\r
    assert "Minimum initial payment" in response["reason"]\r
    print("   [PASS] test_e2e_underpaid_admission_rejected")\r
\r
def main():\r
    print("=" * 75)\r
    print("[FUNCTIONAL / E2E TESTING] Level 3: Complete Black-Box User Journey")\r
    print("=" * 75)\r
\r
    test_e2e_successful_candidate_admission_journey()\r
    test_e2e_underpaid_admission_rejected()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Functional E2E tests verify the entire system from the client's")\r
    print("           perspective, validating full business transactions.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,j=`"""\r
# Module: 004_003_python-testing\r
# Topic 1: Types of testing: Unit testing, Integration testing, Functional testing\r
# File: testing_pyramid_case_study.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating the full Testing Pyramid in action - Comparing execution\r
#              speed, test counts, and isolation across Unit, Integration, and E2E tiers.\r
"""\r
\r
import time\r
\r
def run_pyramid_suite():\r
    print("=" * 80)\r
    print("[TESTING PYRAMID BENCHMARK] Executing Multi-Tier Test Suite Distribution")\r
    print("=" * 80)\r
\r
    # 1. UNIT TEST TIER (70% of Suite, e.g. 50 tests in memory)\r
    start_unit = time.perf_counter()\r
    unit_tests_count = 50\r
    for i in range(unit_tests_count):\r
        # Pure math calculation\r
        res = (i * 25.0) * 0.90\r
        assert res >= 0\r
    t_unit = time.perf_counter() - start_unit\r
\r
    # 2. INTEGRATION TEST TIER (20% of Suite, e.g. 15 tests with simulated I/O)\r
    start_integ = time.perf_counter()\r
    integ_tests_count = 15\r
    for i in range(integ_tests_count):\r
        # Simulated database handshake / table query\r
        time.sleep(0.001) # 1ms database latency\r
        assert i < 100\r
    t_integ = time.perf_counter() - start_integ\r
\r
    # 3. FUNCTIONAL / E2E TIER (10% of Suite, e.g. 5 full workflows)\r
    start_e2e = time.perf_counter()\r
    e2e_tests_count = 5\r
    for i in range(e2e_tests_count):\r
        # Simulated HTTP / UI workflow\r
        time.sleep(0.010) # 10ms full journey latency\r
        assert i < 10\r
    t_e2e = time.perf_counter() - start_e2e\r
\r
    total_time = t_unit + t_integ + t_e2e\r
\r
    print("\\n[TIER BREAKDOWN & TIMING METRICS]")\r
    print(f"   * Tier 1 (UNIT)        : {unit_tests_count:>2} Tests | Time: {t_unit*1000:>6.2f} ms | ~{(t_unit/unit_tests_count)*1000000:.1f} microsec/test (Ultra Fast)")\r
    print(f"   * Tier 2 (INTEGRATION) : {integ_tests_count:>2} Tests | Time: {t_integ*1000:>6.2f} ms | ~{(t_integ/integ_tests_count)*1000:.1f} ms/test (Component Boundaries)")\r
    print(f"   * Tier 3 (FUNCTIONAL)  : {e2e_tests_count:>2} Tests | Time: {t_e2e*1000:>6.2f} ms | ~{(t_e2e/e2e_tests_count)*1000:.1f} ms/test (User Workflows)")\r
    print("-" * 80)\r
    print(f"   [+] TOTAL TEST SUITE TIME : {total_time*1000:.2f} ms for {unit_tests_count + integ_tests_count + e2e_tests_count} automated tests!")\r
\r
def main():\r
    run_pyramid_suite()\r
\r
    print("\\n" + "=" * 80)\r
    print("[TAKEAWAY] Follow the 70/20/10 pyramid rule: high speed + maximum coverage")\r
    print("           without the flakiness and high maintenance of top-heavy test suites.")\r
    print("=" * 80)\r
\r
if __name__ == "__main__":\r
    main()\r
`,w=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 4: PRO LEVEL • MODULE 004_003: PYTHON TESTING\r
          TOPIC 1: TYPES OF TESTING: UNIT, INTEGRATION & FUNCTIONAL TESTING\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. THE TESTING PYRAMID\r
--------------------------------------------------------------------------------\r
  Level 1: UNIT TESTS (~70%)\r
  - Tests isolated functions/classes in memory.\r
  - Ultra-fast (<1ms per test). Pinpoints exact line of failure.\r
\r
  Level 2: INTEGRATION TESTS (~20%)\r
  - Tests collaboration between multiple components (e.g. Service + Database).\r
  - Validates SQL schemas, network serializers, and interface contracts.\r
\r
  Level 3: FUNCTIONAL / E2E TESTS (~10%)\r
  - Tests complete black-box user workflows from entry point to exit.\r
  - Slower, but guarantees the entire business system delivers value.\r
\r
--------------------------------------------------------------------------------\r
2. EXAMPLE IN ACTION\r
--------------------------------------------------------------------------------\r
  # Unit Test (Isolated calculation)\r
  assert calculate_tax(1000.0, 0.18) == 180.0\r
\r
  # Integration Test (Database + Service)\r
  db.save_student(Student("STU1", "Mamata"))\r
  assert db.find_student("STU1").name == "Mamata"\r
\r
  # Functional / E2E Test (Full User Journey)\r
  response = client.post("/api/enroll", json={"name": "Mamata", "course": "Python"})\r
  assert response.status_code == 201\r
  assert response.json()["status"] == "SUCCESS"\r
\r
================================================================================\r
       END OF STUDY NOTE • TOPIC 1: TYPES OF TESTING\r
================================================================================\r
`,N=[{question:"What is the primary objective of a Unit Test in Python?",shortAnswer:"A Unit Test verifies the smallest testable unit of source code (such as a single pure function, calculation algorithm, or isolated class method) in complete isolation from external dependencies.",explanation:"Isolated verification of fine-grained logic units.",hint:"Tests a single isolated function or method with no database or network dependencies.",level:"basic",codeExample:`# Unit test on pure function
def test_add(): assert add(2, 3) == 5`},{question:"How does an Integration Test differ from a Unit Test?",shortAnswer:"While a unit test isolates a single function in memory, an integration test verifies that two or more collaborating components (e.g. a Python service interacting with an SQLite database or an external caching layer) interact and communicate correctly across boundaries.",explanation:"Multi-component interface and boundary verification.",hint:"Integration tests check how components work together (e.g. Service + Database).",level:"basic",codeExample:`# Integration test verifying DB persistence
def test_repo_save(db): ... `},{question:"What is Functional / End-to-End (E2E) testing?",shortAnswer:"Functional or E2E testing evaluates the complete software system from the perspective of an end user or external client, verifying full end-to-end business workflows against functional requirements without inspecting internal code details (black-box).",explanation:"Black-box validation of complete user business workflows.",hint:"Simulates full user journey from input request to output response.",level:"basic",codeExample:`# Functional test on HTTP endpoint
res = client.post('/api/admission', json=payload)`},{question:"What is the 'Testing Pyramid' model and what distribution ratio does it recommend?",shortAnswer:"The Testing Pyramid is an architectural guideline recommending a broad base of fast, cheap Unit Tests (~70%), a middle tier of Integration Tests (~20%), and a small apex of comprehensive Functional/E2E Tests (~10%).",explanation:"Cost-effective distribution of automated test types.",hint:"70% Unit Tests, 20% Integration Tests, 10% E2E Tests.",level:"basic",codeExample:"# Testing Pyramid distribution: 70% Unit / 20% Integration / 10% E2E"},{question:"What is the 'Ice Cream Cone' testing anti-pattern?",shortAnswer:"The Ice Cream Cone anti-pattern occurs when a team has very few unit tests, some integration tests, and an excessive number of slow, brittle, expensive E2E/manual tests at the top, leading to high maintenance costs and slow feedback cycles.",explanation:"Inverted testing pyramid leading to brittle test suites.",hint:"Having too many slow E2E tests and too few fast unit tests.",level:"moderate",codeExample:"# Anti-pattern: 80% E2E tests + 10% unit tests (Slow and flaky)"},{question:"Why are Unit Tests significantly faster to execute than Integration Tests?",shortAnswer:"Unit tests execute entirely in CPU memory without performing expensive I/O operations like establishing TCP sockets, writing to disk, running SQL queries, or making HTTP calls, running in microseconds rather than seconds.",explanation:"In-memory execution vs I/O latency.",hint:"Unit tests have no disk, database, or network I/O latency.",level:"basic",codeExample:"# Unit test runs in 0.0001s; Integration test with DB runs in 0.05s"},{question:"What is a 'Test Double' and why is it used in Unit Testing?",shortAnswer:"A Test Double (such as a Mock, Stub, Fake, or Spy) is a stand-in object that replaces a slow or complex external dependency (like a payment gateway or email server) so the unit under test can be verified in total isolation.",explanation:"Simulated substitutes for external subsystem dependencies.",hint:"A mock, stub, or fake that replaces real databases/APIs in unit tests.",level:"moderate",codeExample:`mock_gateway = Mock()
service = AdmissionService(gateway=mock_gateway)`},{question:"When would an Integration Test catch a bug that Unit Tests completely missed?",shortAnswer:"Integration tests catch schema mismatches, SQL syntax errors, incorrect foreign key constraints, serialization/deserialization formatting bugs, and network timeout misconfigurations between components that mock-based unit tests overlook.",explanation:"Real interface mismatches across component boundaries.",hint:"SQL column type mismatches or JSON serialization errors across components.",level:"moderate",codeExample:"# Integration test verifies actual SQL constraint violations"},{question:"What is 'White-Box' vs 'Black-Box' testing?",shortAnswer:"White-Box testing tests internal structures, branches, and code paths with full knowledge of the source code (typical of Unit Tests); Black-Box testing examines functionality without knowledge of internal code mechanisms (typical of Functional/E2E Tests).",explanation:"Internal structural inspection vs external functional evaluation.",hint:"White-box inspects internal code; black-box tests external behavior.",level:"basic",codeExample:"# White-box tests internal algorithms; Black-box tests API contracts"},{question:"What is 'Contract Testing' in microservice architectures?",shortAnswer:"Contract testing verifies that the API requests sent by a consumer and the responses returned by a provider conform to a shared, agreed-upon interface schema without running full end-to-end integration environments.",explanation:"Schema and payload compatibility verification across distributed services.",hint:"Verifies that API request/response structures match between services.",level:"complex",codeExample:"# Verifying OpenAPI / JSON Schema contracts between services"},{question:"Why should you avoid testing private helper methods directly in unit tests?",shortAnswer:"Testing private implementation details couples tests tightly to internal refactoring; tests should verify public interfaces and behaviors so that developers can refactor internal private methods freely without breaking tests.",explanation:"Behavioral testing vs implementation coupling.",hint:"Test public methods; let private helpers be exercised naturally.",level:"moderate",codeExample:"# Test public calculate_total() instead of private _apply_raw_math()"},{question:"What is 'Regression Testing' in relation to unit and integration testing?",shortAnswer:"Regression testing is the continuous re-execution of existing unit and integration test suites after every codebase modification to verify that recent changes haven't introduced regressions into working functionality.",explanation:"Automated verification against functional backsliding.",hint:"Re-running all tests after changes to ensure nothing broke.",level:"basic",codeExample:"# Running pytest on every Git commit"},{question:"How do you achieve fast test execution in integration tests with databases?",shortAnswer:`By using lightweight in-memory databases (e.g. 'sqlite3.connect(":memory:")') or transactional rollbacks per test rather than creating physical on-disk databases.`,explanation:"In-memory database isolation and transactional teardowns.",hint:"Use in-memory SQLite (':memory:') for ultra-fast integration testing.",level:"moderate",codeExample:"conn = sqlite3.connect(':memory:') # Instant in-memory DB"},{question:"What is 'Acceptance Testing'?",shortAnswer:"Acceptance testing is a formal tier of functional testing that validates whether the software meets all business user requirements, specifications, and acceptance criteria before customer delivery.",explanation:"Business stakeholder specification verification.",hint:"Verifies the software satisfies user requirements and business acceptance criteria.",level:"basic",codeExample:"# Acceptance criteria: User can register and receive email receipt"},{question:"What is the primary drawback of having too many End-to-End (E2E) tests?",shortAnswer:"E2E tests are slow to run (taking minutes or hours), brittle (prone to false positives from minor network glitches or UI changes), and difficult to debug because a failure doesn't pinpoint the exact line of code at fault.",explanation:"High maintenance costs and slow feedback loops of heavy E2E suites.",hint:"Slow execution, high maintenance, and difficult failure localization.",level:"moderate",codeExample:"# E2E tests require full environment orchestration and take longer to run"},{question:"How do Unit Tests facilitate modular, decoupled software design?",shortAnswer:"In order to test a unit in isolation, code must be decoupled with Dependency Injection, clear interfaces, and single responsibilities, naturally resulting in cleaner software architecture.",explanation:"Testability promoting architectural loose coupling.",hint:"Writing unit tests forces you to decouple dependencies using dependency injection.",level:"moderate",codeExample:"# Dependency injection makes classes easy to test in isolation"},{question:"What is 'Sanity Testing' vs 'Smoke Testing'?",shortAnswer:"Smoke testing verifies basic overall system startup and core critical paths; sanity testing is a focused subset of tests run after a minor bugfix to verify that the specific fix works without re-testing everything.",explanation:"Broad shallow verification vs focused post-fix validation.",hint:"Smoke is broad basic health check; Sanity is quick validation of a specific bugfix.",level:"moderate",codeExample:"# Smoke: Can the server boot? Sanity: Did the fee calculation fix work?"},{question:"Why should tests avoid hardcoding absolute file paths?",shortAnswer:"Hardcoded absolute paths make tests fail on different operating systems (Windows vs Linux) or CI build runners; tests should use temporary directories ('tmp_path' / 'tempfile') or relative paths.",explanation:"Test portability across operating systems and CI environments.",hint:"Absolute paths break on other machines; use relative paths or temp files.",level:"basic",codeExample:"# BAD: '/home/user/test.txt' | GOOD: tmp_path / 'test.txt'"},{question:"What is 'Exploratory Testing' and how does it fit alongside automated testing?",shortAnswer:"Exploratory testing is simultaneous manual learning, test design, and test execution by human testers to discover unexpected edge cases and usability defects that automated scripted tests were not programmed to check.",explanation:"Human heuristic discovery complementing scripted automation.",hint:"Manual investigation by testers to discover subtle unexpected bugs.",level:"moderate",codeExample:"# Exploratory testing uncovers new scenarios to turn into automated tests"},{question:"What is the ultimate rule for structuring a balanced test suite in Python?",shortAnswer:"Follow the Testing Pyramid: build a solid foundation of hundreds of lightning-fast Unit Tests for algorithms and domain logic, a focused layer of Integration Tests for database/API boundaries, and a lean suite of E2E Functional Tests for critical user journeys.",explanation:"The complete enterprise testing architecture blueprint.",hint:"Many unit tests, moderate integration tests, few E2E tests.",level:"basic",codeExample:"# High-Performance Testing Pyramid Architecture"}];function F(){const p=r.useRef([]),[a,x]=r.useState("pyramidModel"),[n,h]=r.useState("UNIT"),[g,I]=r.useState(100);let i="< 1 microsecond per test",o="Pinpoints exact line of source code",l="Zero (100% In-Memory Execution)",d="70% of entire test suite (Broad Base)";n==="UNIT"?(i="~0.1 microseconds / test",o="Exact source line & assertion contract",l="Zero (Pure memory execution)",d="70% of entire test suite (Foundation)"):n==="INTEGRATION"?(i="~1.5 milliseconds / test",o="Component interface & SQL query boundary",l="In-memory SQLite, Caching, Repository",d="20% of entire test suite (Middle Tier)"):n==="FUNCTIONAL_E2E"&&(i="~15 - 50 milliseconds / test",o="High-level user workflow / subsystem contract",l="Full App Stack, HTTP APIs, Serialization",d="10% of entire test suite (Apex)");const b=`# Testing Pyramid Tier: ${n}
# Test Volume: ${g} tests | Speed: ${i}

${n==="UNIT"?`# Level 1: UNIT TEST (Pure Function in Memory)
def test_gpa_calculation():
    # Arrange: Pure input data
    marks = [95.0, 90.0, 92.0]
    # Act: Calculate in CPU memory (<0.0001s)
    gpa = calculate_gpa(marks)
    # Assert: Exact mathematical contract
    assert gpa == 9.23, "Mamata GPA calculation failed"`:n==="INTEGRATION"?`# Level 2: INTEGRATION TEST (Service + In-Memory Database)
def test_billing_db_synchronization():
    # Arrange: Setup in-memory SQLite table
    db = StudentDatabase(":memory:")
    db.insert_student("STU_BP_101", "Mamata", "Barrackpore", 10000.0)
    service = BillingService(db)

    # Act: Perform multi-component business operation
    rem_balance = service.process_payment("STU_BP_101", 3500.0)

    # Assert: Verify service return AND persisted SQLite state
    assert rem_balance == 6500.0
    assert db.get_student("STU_BP_101")["balance"] == 6500.0`:`# Level 3: FUNCTIONAL / E2E TEST (Complete User Journey)
def test_e2e_student_admission_flow():
    # Arrange: Black-box HTTP API request payload
    app = AdmissionSystemApp()
    request_payload = json.dumps({
        "name": "Mamata",
        "campus": "Barrackpore",
        "course": "Python Pro",
        "initial_payment": 8000.0
    })

    # Act: Process full application journey
    response = json.loads(app.handle_request(request_payload))

    # Assert: Validate end-to-end customer contract
    assert response["status"] == "SUCCESS"
    assert response["app_id"] == "APP_0001"
    assert response["remaining_due"] == 17000.0`}`;r.useEffect(()=>{const t=new IntersectionObserver(c=>{c.forEach(f=>{f.isIntersecting&&f.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return p.current.forEach(c=>{c&&t.observe(c)}),()=>t.disconnect()},[]);const s=t=>{t&&!p.current.includes(t)&&p.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:s,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 4 • Module 004_003"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 1"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Automated Testing, PyTest & Quality Assurance"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Types of Testing: ",e.jsx("span",{className:"text-teal-400",children:"Unit, Integration & E2E"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master the professional Testing Pyramid hierarchy: building hundreds of lightning-fast ",e.jsx("span",{className:"text-teal-300 font-semibold",children:"Unit Tests"})," ($O(1)$ memory execution), robust ",e.jsx("span",{className:"text-cyan-300 font-semibold",children:"Integration Tests"})," (validating database and component collaboration), and lean ",e.jsx("span",{className:"text-purple-300 font-semibold",children:"Functional / E2E Tests"})," (validating complete customer journeys across Barrackpore and Kolkata admission services)."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ 70% Unit Tests (Microsecond Speed)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🗄️ 20% Integration Tests (SQLite/APIs)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🌐 10% Functional E2E Journeys"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Avoid Ice-Cream Cone Trap"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Testing Pyramid Hierarchy & Trade-Offs"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"Different types of automated tests address different failure modes. A balanced testing strategy organizes tests according to speed, cost, and localization precision:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Level 1: Unit Tests (~70%)"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"In-Memory Logic Isolation"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Tests individual functions, formulas, and domain entities with zero I/O. Runs in microseconds and pinpoints the exact line of code at fault."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Level 2: Integration Tests (~20%)"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"Component Collaboration"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Verifies interactions across boundaries (Service + SQLite + Caches). Catches SQL syntax errors, schema mismatches, and serialization bugs."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Level 3: Functional / E2E (~10%)"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"Black-Box User Journeys"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Simulates complete client HTTP requests to database commits and PDF receipts. Ensures the end-to-end business workflow delivers value."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Ice-Cream Cone Anti-Pattern"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["The ",e.jsx("span",{className:"text-rose-400 font-bold",children:"Ice Cream Cone Anti-Pattern"})," occurs when a project has very few unit tests, some integration tests, and massive suites of slow, brittle E2E tests. This results in slow CI builds (taking hours), high test maintenance costs, and frequent false alarms. Always maintain a broad, fast Unit Test base."]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Test Pyramids, Boundary Mocks & Workflows"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>x("pyramidModel"),className:m("px-3 py-1.5 rounded-lg transition-all",a==="pyramidModel"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Testing Pyramid Model"}),e.jsx("button",{onClick:()=>x("integrationBoundary"),className:m("px-3 py-1.5 rounded-lg transition-all",a==="integrationBoundary"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Integration Boundaries"}),e.jsx("button",{onClick:()=>x("e2eUserFlow"),className:m("px-3 py-1.5 rounded-lg transition-all",a==="e2eUserFlow"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"E2E User Journey"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining the distribution ratios, component boundaries, and black-box verification flows:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:a==="pyramidModel"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"THE TESTING PYRAMID: IDEAL DISTRIBUTION RATIOS & EXECUTION SPEEDS"}),e.jsxs("g",{transform:"translate(40, 50)",children:[e.jsx("polygon",{points:"180,20 280,80 80,80",fill:"#3b0764",stroke:"#a855f7",strokeWidth:"2"}),e.jsx("text",{x:"180",y:"65",fill:"#f3e8ff",fontSize:"10",fontWeight:"bold",textAnchor:"middle",children:"10% E2E / Functional"}),e.jsx("polygon",{points:"80,85 280,85 330,155 30,155",fill:"#082f49",stroke:"#0ea5e9",strokeWidth:"2"}),e.jsx("text",{x:"180",y:"125",fill:"#e0f2fe",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"20% Integration Tests"}),e.jsx("polygon",{points:"30,160 330,160 380,235 -20,235",fill:"#042f2e",stroke:"#14b8a6",strokeWidth:"2"}),e.jsx("text",{x:"180",y:"205",fill:"#ccfbf1",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"70% Unit Tests (Broad Base)"})]}),e.jsxs("g",{transform:"translate(460, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"245",rx:"8",fill:"#0f172a",stroke:"#334155"}),e.jsx("text",{x:"20",y:"30",fill:"#94a3b8",fontSize:"12",fontWeight:"bold",children:"Tier Metrics & Characteristics"}),e.jsx("rect",{x:"20",y:"48",width:"350",height:"48",rx:"4",fill:"#2e1065",stroke:"#a855f7"}),e.jsx("text",{x:"30",y:"68",fill:"#f3e8ff",fontSize:"10",fontWeight:"bold",children:"E2E Tests: High Confidence, Slow Speed"}),e.jsx("text",{x:"30",y:"84",fill:"#d8b4fe",fontSize:"9",children:"Speed: ~20-50ms | Scope: Complete Web Journey"}),e.jsx("rect",{x:"20",y:"106",width:"350",height:"48",rx:"4",fill:"#0c4a6e",stroke:"#0ea5e9"}),e.jsx("text",{x:"30",y:"126",fill:"#e0f2fe",fontSize:"10",fontWeight:"bold",children:"Integration Tests: Medium Speed & Scope"}),e.jsx("text",{x:"30",y:"142",fill:"#bae6fd",fontSize:"9",children:"Speed: ~1-3ms | Scope: DB Schemas & Repositories"}),e.jsx("rect",{x:"20",y:"164",width:"350",height:"60",rx:"4",fill:"#115e59",stroke:"#14b8a6"}),e.jsx("text",{x:"30",y:"184",fill:"#ccfbf1",fontSize:"10",fontWeight:"bold",children:"Unit Tests: Ultra-Fast, Precise Failure Spotting"}),e.jsx("text",{x:"30",y:"200",fill:"#99f6e4",fontSize:"9",children:"Speed: <0.001ms | Scope: Pure Functions & Invariants"}),e.jsx("text",{x:"30",y:"214",fill:"#5eead4",fontSize:"8",fontWeight:"bold",children:"⚡ Runs 1,000 tests in 0.05 seconds!"})]})]}):a==="integrationBoundary"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"INTEGRATION TESTING: VALIDATING BOUNDARIES ACROSS COLLABORATING SUBSYSTEMS"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#082f49",stroke:"#0ea5e9"}),e.jsx("rect",{x:"30",y:"60",width:"220",height:"120",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("text",{x:"45",y:"85",fill:"#e0f2fe",fontSize:"12",fontWeight:"bold",children:"BillingService"}),e.jsx("text",{x:"45",y:"108",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"process_payment(sid, 3500)"}),e.jsx("text",{x:"45",y:"126",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"Validates business rules"}),e.jsx("text",{x:"45",y:"155",fill:"#38bdf8",fontSize:"9",fontWeight:"bold",children:"⚙️ Business Logic Tier"}),e.jsx("path",{d:"M 255 120 L 305 120",stroke:"#38bdf8",strokeWidth:"3",markerEnd:"url(#arrow)"}),e.jsx("text",{x:"280",y:"112",fill:"#e0f2fe",fontSize:"9",textAnchor:"middle",children:"SQL Execute"}),e.jsx("rect",{x:"310",y:"60",width:"240",height:"120",rx:"6",fill:"#064e3b",stroke:"#34d399"}),e.jsx("text",{x:"325",y:"85",fill:"#d1fae5",fontSize:"12",fontWeight:"bold",children:"StudentDatabase (:memory:)"}),e.jsx("text",{x:"325",y:"108",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"UPDATE students SET balance"}),e.jsx("text",{x:"325",y:"126",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"WHERE sid = 'STU_BP_101'"}),e.jsx("text",{x:"325",y:"155",fill:"#86efac",fontSize:"9",fontWeight:"bold",children:"🗄️ In-Memory SQLite Table"}),e.jsx("rect",{x:"580",y:"60",width:"210",height:"120",rx:"6",fill:"#1e1b4b",stroke:"#818cf8"}),e.jsx("text",{x:"595",y:"85",fill:"#e0e7ff",fontSize:"12",fontWeight:"bold",children:"Assert Contract"}),e.jsx("text",{x:"595",y:"108",fill:"#c7d2fe",fontSize:"9",fontFamily:"monospace",children:"1. Return == 6500.0"}),e.jsx("text",{x:"595",y:"126",fill:"#c7d2fe",fontSize:"9",fontFamily:"monospace",children:"2. DB.balance == 6500.0"}),e.jsx("text",{x:"595",y:"155",fill:"#fde047",fontSize:"9",fontWeight:"bold",children:"✅ State Sync Verified"}),e.jsx("rect",{x:"30",y:"195",width:"760",height:"35",rx:"4",fill:"#0f172a",stroke:"#0ea5e9"}),e.jsx("text",{x:"45",y:"217",fill:"#e0f2fe",fontSize:"10",children:"💡 Integration tests ensure that SQL statements, data types, and transactional states match perfectly."})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"FUNCTIONAL / E2E: BLACK-BOX CANDIDATE ADMISSION JOURNEY"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#1e1b4b",stroke:"#a855f7"}),e.jsx("rect",{x:"25",y:"55",width:"220",height:"115",rx:"6",fill:"#3b0764",stroke:"#c084fc"}),e.jsx("text",{x:"35",y:"78",fill:"#f3e8ff",fontSize:"11",fontWeight:"bold",children:"1. Client JSON Request"}),e.jsx("text",{x:"35",y:"98",fill:"#d8b4fe",fontSize:"9",fontFamily:"monospace",children:'name: "Mamata"'}),e.jsx("text",{x:"35",y:"114",fill:"#d8b4fe",fontSize:"9",fontFamily:"monospace",children:'campus: "Barrackpore"'}),e.jsx("text",{x:"35",y:"130",fill:"#d8b4fe",fontSize:"9",fontFamily:"monospace",children:"initial_payment: 8000"}),e.jsx("text",{x:"35",y:"153",fill:"#fbcfe8",fontSize:"8",children:"Simulates HTTP POST /admit"}),e.jsx("rect",{x:"275",y:"55",width:"255",height:"115",rx:"6",fill:"#0f172a",stroke:"#38bdf8"}),e.jsx("text",{x:"285",y:"78",fill:"#e0f2fe",fontSize:"11",fontWeight:"bold",children:"2. Black-Box Processing"}),e.jsx("text",{x:"285",y:"98",fill:"#94a3b8",fontSize:"9",fontFamily:"monospace",children:"AdmissionSystemApp()"}),e.jsx("text",{x:"285",y:"114",fill:"#94a3b8",fontSize:"9",fontFamily:"monospace",children:"Validation ➔ Roster Insert"}),e.jsx("text",{x:"285",y:"130",fill:"#94a3b8",fontSize:"9",fontFamily:"monospace",children:"Ledger Entry ➔ Receipt Gen"}),e.jsx("text",{x:"285",y:"153",fill:"#86efac",fontSize:"8",children:"Full business workflow"}),e.jsx("rect",{x:"560",y:"55",width:"235",height:"115",rx:"6",fill:"#064e3b",stroke:"#34d399"}),e.jsx("text",{x:"570",y:"78",fill:"#d1fae5",fontSize:"11",fontWeight:"bold",children:"3. Validated Outcome"}),e.jsx("text",{x:"570",y:"98",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:'status: "SUCCESS"'}),e.jsx("text",{x:"570",y:"114",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:'app_id: "APP_0001"'}),e.jsx("text",{x:"570",y:"130",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:'receipt_id: "RCP_0001"'}),e.jsx("text",{x:"570",y:"153",fill:"#fde047",fontSize:"8",children:"Complete user journey verified"}),e.jsx("rect",{x:"25",y:"185",width:"770",height:"40",rx:"4",fill:"#0f172a",stroke:"#a855f7"}),e.jsx("text",{x:"40",y:"210",fill:"#e9d5ff",fontSize:"10",children:"🌐 Functional E2E tests guarantee that end-users receive expected business value without inspecting code internals."})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧪"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Testing Tier Selector & Metric Simulator"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Select a tier from the Testing Pyramid to examine its execution velocity, architectural scope, failure localization, and production Python code:"}),e.jsxs("div",{className:"bg-slate-950 p-5 sm:p-6 rounded-xl border border-slate-800/90 space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3",children:"Choose Pyramid Level:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[{id:"UNIT",label:"Unit Testing",icon:"⚡",tag:"70% of Suite (Fastest)"},{id:"INTEGRATION",label:"Integration Testing",icon:"🗄️",tag:"20% of Suite (Boundaries)"},{id:"FUNCTIONAL_E2E",label:"Functional / E2E",icon:"🌐",tag:"10% of Suite (User Journeys)"}].map(t=>e.jsxs("button",{onClick:()=>h(t.id),className:m("p-3 rounded-xl border text-left transition-all",n===t.id?"bg-teal-950/60 border-teal-500 shadow-md shadow-teal-950/50":"bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400"),children:[e.jsxs("div",{className:"text-base mb-1",children:[t.icon," ",e.jsx("strong",{className:"text-slate-200 text-xs sm:text-sm",children:t.label})]}),e.jsx("div",{className:"text-[11px] text-teal-400 font-mono",children:t.tag})]},t.id))})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2",children:[e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-teal-900/50",children:[e.jsx("div",{className:"text-xs text-teal-400 font-medium mb-1",children:"Execution Velocity"}),e.jsx("div",{className:"text-xs font-bold font-mono text-teal-300 mt-1",children:i})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-cyan-900/50",children:[e.jsx("div",{className:"text-xs text-cyan-400 font-medium mb-1",children:"Failure Localization"}),e.jsx("div",{className:"text-xs font-bold font-mono text-cyan-300 mt-1 leading-snug",children:o})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-purple-900/50",children:[e.jsx("div",{className:"text-xs text-purple-400 font-medium mb-1",children:"External Dependencies"}),e.jsx("div",{className:"text-xs font-bold font-mono text-purple-300 mt-1 leading-snug",children:l})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-amber-900/50",children:[e.jsx("div",{className:"text-xs text-amber-400 font-medium mb-1",children:"Pyramid Share"}),e.jsx("div",{className:"text-xs font-bold font-mono text-amber-300 mt-1 leading-snug",children:d})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"Production Implementation Example:"}),e.jsx("pre",{className:"p-4 bg-slate-900/90 border border-slate-800 rounded-xl text-xs sm:text-sm font-mono text-teal-200 overflow-x-auto leading-relaxed",children:b})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Production Code Labs & Testing Suite"})]}),e.jsx("p",{className:"text-slate-300 mb-8 text-base leading-relaxed",children:"Inspect, run, and master all four production-grade testing labs covering pure function unit testing, in-memory SQLite integration verification, full black-box functional E2E admission flows, and the multi-tier testing pyramid benchmark:"}),e.jsxs("div",{className:"space-y-10",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:"Lab 1: Unit Testing Isolated Pure Functions in Memory"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Executing sub-microsecond unit tests on GPA calculation, late fee caps, and regional campus waiver logic across Barrackpore and Kolkata students."})]}),e.jsx(u,{fileModule:v,title:"unit_testing_pure_functions.py",highlightLines:[12,27,36,45]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-cyan-300",children:"Lab 2: Integration Testing Service & In-Memory SQLite Database"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Verifying collaboration between ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"BillingService"})," and ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"StudentDatabase"})," using in-memory SQLite tables (",e.jsx("code",{className:"text-cyan-300 font-mono",children:":memory:"}),") to test payment persistence."]})]}),e.jsx(u,{fileModule:S,title:"integration_testing_multi_component.py",highlightLines:[42,53,62]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-purple-300",children:"Lab 3: Functional / End-to-End Black-Box Candidate Admission Flow"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Simulating complete client JSON request payloads through the admission engine, verifying full transaction validation, fee due calculation, and receipt generation."})]}),e.jsx(u,{fileModule:E,title:"functional_system_e2e_testing.py",highlightLines:[18,47,61]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-amber-300",children:"Lab 4: The Multi-Tier Testing Pyramid Benchmark Case Study"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Benchmarking a full 70-test suite distribution (50 Unit, 15 Integration, 5 E2E) demonstrating how 70 unit tests execute in <1ms while maintaining full coverage."})]}),e.jsx(u,{fileModule:j,title:"testing_pyramid_case_study.py",highlightLines:[17,26,35,48]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Testing Pitfalls & Anti-Patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"1. The Ice Cream Cone Trap"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Writing 90% E2E tests and almost no unit tests creates an extremely slow, flaky, and expensive test suite that takes hours to run in CI."}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# ANTI-PATTERN: 100 E2E tests, 5 unit tests",`
`,"# BEST PRACTICE: 100 Unit tests, 10 E2E tests"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"2. Testing Private Helper Implementation Details"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Directly testing private methods (e.g. ",e.jsx("code",{className:"text-rose-400 font-mono",children:"_compute_raw_sub()"}),") breaks tests whenever you refactor internal helper functions. Test public APIs instead."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# BAD: test_obj._private_math_step()",`
`,"# GOOD: test_obj.public_calculate_total()"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"3. Over-Mocking Integration Tests"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Mocking out the database in an integration test defeats the purpose of the test; use real in-memory SQLite tables to verify real SQL queries."}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# BAD: Mocking DB in integration test",`
`,'# GOOD: Using sqlite3.connect(":memory:")']})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"4. Hardcoded File System Paths"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Hardcoding absolute paths (e.g. ",e.jsx("code",{className:"text-rose-400 font-mono",children:'"C:\\temp\\data.json"'}),") causes tests to crash on Linux CI build runners. Use ",e.jsx("code",{className:"text-teal-300 font-mono",children:"tmp_path"}),"."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:['# BAD: path = "C:/test.db"',`
`,'# GOOD: path = tmp_path / "test.db"']})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Professional Testing Pyramid Checklist"})]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm sm:text-base",children:[e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Respect the 70/20/10 Ratio:"})," Build 70% unit tests, 20% integration tests, and 10% E2E tests for maximum velocity and stability."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Use In-Memory SQLite for Integration:"})," Use ",e.jsx("code",{className:"text-teal-300 font-mono",children:":memory:"})," to test real SQL operations in milliseconds without on-disk file cleanup."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Focus E2E on Critical Journeys:"})," Reserve full functional E2E tests for essential user flows (login, payments, candidate admission)."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Test Public Behaviors, Not Private Code:"})," Decouple tests from internal refactoring by exercising public interfaces."]})]})]})]}),e.jsx("section",{ref:s,className:"section-hidden",children:e.jsx(_,{title:"Types of Software Testing FAQs",questions:N})}),e.jsx("section",{ref:s,className:"section-hidden",children:e.jsx(y,{content:w,title:"Topic 1: Types of Testing (Unit, Integration, Functional) Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic1_note.txt"})}),e.jsx("section",{ref:s,className:"section-hidden",children:e.jsx(T,{note:"Understanding the testing pyramid is essential for building scalable applications without drowning in test maintenance. In our multi-campus administrative systems across Barrackpore, Kolkata, Ichapur, and Jadavpur, writing fast unit tests for student fee waivers and grade curves gives us instant feedback, integration tests ensure our SQLite database records stay in sync with payment transactions, and targeted E2E tests confirm that students like Mamata and Mahima receive valid admission receipts. Adhering to the 70/20/10 pyramid rule guarantees both extreme speed and production reliability."})})]})]})}export{F as default};
