import{b as i,j as e,bg as l}from"./vendor-react-core-Doz9nIC6.js";import{P as x}from"./PythonFileLoader-hCi5osN-.js";import{P as y}from"./PlainTextPrint-C08xhKA4.js";import{F as _}from"./FAQTemplate-BHhlgA96.js";import{T as E}from"./TeacherSukantaHui-DerPxfxp.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const j=`"""\r
# Module: 004_003_python-testing\r
# Topic 2: Built-in unittest framework: TestCase, assertions, setUp and tearDown\r
# File: unittest_testcase_and_assertions.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating unittest.TestCase assertion methods:\r
#              assertEqual, assertAlmostEqual, assertIn, assertRaises, and assertDictEqual.\r
"""\r
\r
import unittest\r
\r
def calculate_gpa(marks: list[float]) -> float:\r
    if not marks:\r
        raise ValueError("Marks list cannot be empty.")\r
    return sum(marks) / len(marks)\r
\r
def get_student_dossier(sid: str, name: str, campus: str) -> dict:\r
    return {\r
        "sid": sid,\r
        "name": name,\r
        "campus": campus,\r
        "status": "ENROLLED"\r
    }\r
\r
class TestStudentAssertions(unittest.TestCase):\r
    """Test suite demonstrating standard unittest assertion methods."""\r
\r
    def test_calculate_gpa_valid(self):\r
        # assertAlmostEqual handles floating-point rounding precision safely\r
        result = calculate_gpa([85.5, 92.3, 78.4])\r
        self.assertAlmostEqual(result, 85.4, places=1)\r
        print("   [PASS] test_calculate_gpa_valid (Precision verified)")\r
\r
    def test_calculate_gpa_empty_raises(self):\r
        # with self.assertRaises verifies exception contract\r
        with self.assertRaises(ValueError) as ctx:\r
            calculate_gpa([])\r
        self.assertIn("cannot be empty", str(ctx.exception))\r
        print("   [PASS] test_calculate_gpa_empty_raises (ValueError captured)")\r
\r
    def test_student_dossier_contract(self):\r
        # assertDictEqual checks all keys and values with rich diffs\r
        actual = get_student_dossier("STU_BP_01", "Mamata", "Barrackpore")\r
        expected = {\r
            "sid": "STU_BP_01",\r
            "name": "Mamata",\r
            "campus": "Barrackpore",\r
            "status": "ENROLLED"\r
        }\r
        self.assertDictEqual(actual, expected)\r
        self.assertIn(actual["campus"], ["Barrackpore", "Kolkata", "Ichapur", "Jadavpur"])\r
        print("   [PASS] test_student_dossier_contract (Dict equality verified)")\r
\r
def main():\r
    print("=" * 75)\r
    print("[UNITTEST SUITE] Standard TestCase & Assertion Methods")\r
    print("=" * 75)\r
\r
    suite = unittest.TestLoader().loadTestsFromTestCase(TestStudentAssertions)\r
    runner = unittest.TextTestRunner(verbosity=2)\r
    runner.run(suite)\r
\r
if __name__ == "__main__":\r
    main()\r
`,T=`"""\r
# Module: 004_003_python-testing\r
# Topic 2: Built-in unittest framework: TestCase, assertions, setUp and tearDown\r
# File: unittest_setup_teardown_lifecycle.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating the full test fixture lifecycle:\r
#              setUpClass / tearDownClass (Class-level) and setUp / tearDown (Test-level).\r
"""\r
\r
import unittest\r
import sqlite3\r
\r
class TestDatabaseLifecycle(unittest.TestCase):\r
    """Demonstrates initialization and cleanup hooks in unittest."""\r
\r
    @classmethod\r
    def setUpClass(cls):\r
        """Runs ONCE before all tests in this class: Initialize in-memory SQLite DB."""\r
        print("\\n[HOOK] setUpClass: Establishing in-memory SQLite database connection...")\r
        cls.conn = sqlite3.connect(":memory:")\r
        cls.conn.execute("""\r
            CREATE TABLE student_ledger (\r
                sid TEXT PRIMARY KEY,\r
                name TEXT,\r
                campus TEXT,\r
                balance REAL\r
            )\r
        """)\r
\r
    @classmethod\r
    def tearDownClass(cls):\r
        """Runs ONCE after all tests in this class have finished: Close database."""\r
        print("[HOOK] tearDownClass: Closing in-memory SQLite database connection.\\n")\r
        cls.conn.close()\r
\r
    def setUp(self):\r
        """Runs BEFORE EACH individual test method: Insert fresh test fixtures."""\r
        print("  -> [setUp] Inserting fresh student fixtures...")\r
        with self.conn:\r
            self.conn.execute("DELETE FROM student_ledger")\r
            self.conn.execute("INSERT INTO student_ledger VALUES ('STU_101', 'Mamata', 'Barrackpore', 10000.0)")\r
            self.conn.execute("INSERT INTO student_ledger VALUES ('STU_102', 'Mahima', 'Kolkata', 8000.0)")\r
\r
    def tearDown(self):\r
        """Runs AFTER EACH individual test method: Verify cleanup state."""\r
        print("  <- [tearDown] Test finished. State cleaned.")\r
\r
    def test_fetch_student_record(self):\r
        cursor = self.conn.cursor()\r
        cursor.execute("SELECT name, balance FROM student_ledger WHERE sid = 'STU_101'")\r
        row = cursor.fetchone()\r
        self.assertEqual(row[0], "Mamata")\r
        self.assertEqual(row[1], 10000.0)\r
        print("     [PASS] test_fetch_student_record")\r
\r
    def test_update_student_balance(self):\r
        with self.conn:\r
            self.conn.execute("UPDATE student_ledger SET balance = balance - 3000.0 WHERE sid = 'STU_101'")\r
\r
        cursor = self.conn.cursor()\r
        cursor.execute("SELECT balance FROM student_ledger WHERE sid = 'STU_101'")\r
        updated_balance = cursor.fetchone()[0]\r
        self.assertEqual(updated_balance, 7000.0)\r
        print("     [PASS] test_update_student_balance")\r
\r
def main():\r
    print("=" * 75)\r
    print("[UNITTEST LIFECYCLE] Testing setUpClass, setUp, tearDown, tearDownClass")\r
    print("=" * 75)\r
\r
    suite = unittest.TestLoader().loadTestsFromTestCase(TestDatabaseLifecycle)\r
    runner = unittest.TextTestRunner(verbosity=2)\r
    runner.run(suite)\r
\r
if __name__ == "__main__":\r
    main()\r
`,w=`"""\r
# Module: 004_003_python-testing\r
# Topic 2: Built-in unittest framework: TestCase, assertions, setUp and tearDown\r
# File: unittest_subtests_and_skipping.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating self.subTest() for parameterized iteration diagnostics\r
#              and conditional test skipping with @unittest.skipIf.\r
"""\r
\r
import sys\r
import unittest\r
\r
def calculate_grade_letter(score: float) -> str:\r
    if score >= 90.0:\r
        return "A+"\r
    elif score >= 80.0:\r
        return "A"\r
    elif score >= 60.0:\r
        return "B"\r
    elif score >= 40.0:\r
        return "C"\r
    return "F"\r
\r
class TestAdvancedUnittestFeatures(unittest.TestCase):\r
    """Demonstrates subTest parametrization and conditional skipping."""\r
\r
    def test_grade_boundaries_with_subtests(self):\r
        """self.subTest isolates each iteration so failures don't stop the loop."""\r
        cases = [\r
            ("Mamata Top A+", 95.0, "A+"),\r
            ("Mahima Exact A+ Boundary", 90.0, "A+"),\r
            ("Abhronila Exact A Boundary", 80.0, "A"),\r
            ("Susmita Exact B Boundary", 60.0, "B"),\r
            ("Debangshu Exact C Boundary", 40.0, "C"),\r
            ("Failing Score", 35.0, "F"),\r
        ]\r
\r
        for desc, score, expected in cases:\r
            with self.subTest(candidate=desc, score=score):\r
                actual = calculate_grade_letter(score)\r
                self.assertEqual(actual, expected)\r
                print(f"   [SUBTEST PASS] {desc:<32} -> {actual}")\r
\r
    @unittest.skip("Demonstrating unconditional skipping for deprecated legacy features")\r
    def test_legacy_offline_paper_enrollment(self):\r
        self.fail("This test should be skipped and never run!")\r
\r
    @unittest.skipIf(sys.version_info < (3, 10), "Requires Python 3.10+ pattern matching")\r
    def test_modern_python_features(self):\r
        self.assertTrue(True)\r
        print("   [PASS] test_modern_python_features executed on modern Python runtime")\r
\r
def main():\r
    print("=" * 75)\r
    print("[UNITTEST ADVANCED] self.subTest() & Conditional Skipping")\r
    print("=" * 75)\r
\r
    suite = unittest.TestLoader().loadTestsFromTestCase(TestAdvancedUnittestFeatures)\r
    runner = unittest.TextTestRunner(verbosity=2)\r
    runner.run(suite)\r
\r
if __name__ == "__main__":\r
    main()\r
`,v=`"""\r
# Module: 004_003_python-testing\r
# Topic 2: Built-in unittest framework: TestCase, assertions, setUp and tearDown\r
# File: institutional_unittest_suite.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: End-to-end multi-campus student management test suite using\r
#              unittest.TestCase with fixtures, assertions, and reporting.\r
"""\r
\r
import unittest\r
\r
class StudentProfile:\r
    def __init__(self, sid: str, name: str, campus: str, initial_fee: float):\r
        if initial_fee < 0:\r
            raise ValueError("Fee cannot be negative.")\r
        self.sid = sid\r
        self.name = name\r
        self.campus = campus\r
        self.fee_balance = float(initial_fee)\r
        self.enrolled_courses = []\r
\r
    def enroll(self, course_name: str, course_fee: float):\r
        self.enrolled_courses.append(course_name)\r
        self.fee_balance += course_fee\r
\r
    def pay_tuition(self, amount: float):\r
        if amount <= 0:\r
            raise ValueError("Payment must be positive.")\r
        if amount > self.fee_balance:\r
            raise ValueError("Payment cannot exceed total due balance.")\r
        self.fee_balance -= amount\r
        return self.fee_balance\r
\r
class TestInstitutionalStudentManagement(unittest.TestCase):\r
    """Production test suite for StudentProfile domain model."""\r
\r
    def setUp(self):\r
        """Prepare fresh student fixture before each test method."""\r
        self.student = StudentProfile("STU_BP_01", "Mamata", "Barrackpore", 5000.0)\r
\r
    def test_initial_state_fixture(self):\r
        self.assertEqual(self.student.sid, "STU_BP_01")\r
        self.assertEqual(self.student.name, "Mamata")\r
        self.assertEqual(self.student.campus, "Barrackpore")\r
        self.assertEqual(self.student.fee_balance, 5000.0)\r
        self.assertListEqual(self.student.enrolled_courses, [])\r
        print("   [PASS] test_initial_state_fixture")\r
\r
    def test_course_enrollment_updates_balance(self):\r
        self.student.enroll("Python Pro", 15000.0)\r
        self.assertIn("Python Pro", self.student.enrolled_courses)\r
        self.assertEqual(self.student.fee_balance, 20000.0)\r
        print("   [PASS] test_course_enrollment_updates_balance")\r
\r
    def test_tuition_payment_lifecycle(self):\r
        self.student.enroll("Data Science", 10000.0) # Balance = 15,000\r
        rem = self.student.pay_tuition(6000.0)\r
        self.assertEqual(rem, 9000.0)\r
        self.assertEqual(self.student.fee_balance, 9000.0)\r
        print("   [PASS] test_tuition_payment_lifecycle")\r
\r
    def test_overpayment_raises_value_error(self):\r
        with self.assertRaises(ValueError) as ctx:\r
            self.student.pay_tuition(10000.0) # Balance is only 5000\r
        self.assertIn("cannot exceed total due balance", str(ctx.exception))\r
        print("   [PASS] test_overpayment_raises_value_error")\r
\r
    def test_negative_fee_initialization_fails(self):\r
        with self.assertRaises(ValueError):\r
            StudentProfile("STU_ERR", "Invalid", "Kolkata", -1000.0)\r
        print("   [PASS] test_negative_fee_initialization_fails")\r
\r
def main():\r
    print("=" * 80)\r
    print("[CASE STUDY] Institutional Student Management TestCase Suite")\r
    print("=" * 80)\r
\r
    suite = unittest.TestLoader().loadTestsFromTestCase(TestInstitutionalStudentManagement)\r
    runner = unittest.TextTestRunner(verbosity=2)\r
    runner.run(suite)\r
\r
if __name__ == "__main__":\r
    main()\r
`,S=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 4: PRO LEVEL • MODULE 004_003: PYTHON TESTING\r
               TOPIC 2: BUILT-IN UNITTEST FRAMEWORK: TESTCASE & LIFECYCLE\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. BASIC TESTCASE CLASS STRUCTURE\r
--------------------------------------------------------------------------------\r
  import unittest\r
\r
  class TestStudentModule(unittest.TestCase):\r
\r
      def test_admission_discount(self):\r
          # Specialized TestCase assertions\r
          self.assertEqual(calculate_fee(10000.0, 0.15), 8500.0)\r
          self.assertTrue(is_eligible(95.0))\r
          self.assertIn("PYTHON", ["PYTHON", "SQL", "WEB"])\r
\r
      def test_invalid_score_raises(self):\r
          # Exception assertion context manager\r
          with self.assertRaises(ValueError):\r
              validate_score(-5.0)\r
\r
--------------------------------------------------------------------------------\r
2. FIXTURE LIFECYCLE HOOKS\r
--------------------------------------------------------------------------------\r
  class TestDatabaseIntegration(unittest.TestCase):\r
\r
      @classmethod\r
      def setUpClass(cls):\r
          # Runs ONCE before all tests in this class (e.g. create DB connection)\r
          cls.db = init_in_memory_db()\r
\r
      @classmethod\r
      def tearDownClass(cls):\r
          # Runs ONCE after all tests in this class (e.g. close DB connection)\r
          cls.db.close()\r
\r
      def setUp(self):\r
          # Runs BEFORE EACH test method (e.g. clear tables, setup fresh test data)\r
          self.db.clear_tables()\r
\r
      def tearDown(self):\r
          # Runs AFTER EACH test method (e.g. rollback transactions)\r
          self.db.rollback()\r
\r
--------------------------------------------------------------------------------\r
3. RUNNING FROM CLI\r
--------------------------------------------------------------------------------\r
  python -m unittest discover -s tests -p "test_*.py" -v\r
\r
================================================================================\r
       END OF STUDY NOTE • TOPIC 2: BUILT-IN UNITTEST FRAMEWORK\r
================================================================================\r
`,N=[{question:"What is the primary base class used to write test suites in Python's built-in 'unittest' module?",shortAnswer:"'unittest.TestCase' is the fundamental base class that provides specialized assertion methods, lifecycle hooks, and test execution capabilities.",explanation:"Core object-oriented test case base class in the standard library.",hint:"Subclass unittest.TestCase to create test suites.",level:"basic",codeExample:`import unittest
class TestMyModule(unittest.TestCase):
    def test_example(self): pass`},{question:"What naming convention must test methods follow inside a 'unittest.TestCase' class for auto-discovery?",shortAnswer:"Every test method must start with the prefix 'test_' (e.g. 'test_calculate_gpa'), allowing the test runner to automatically discover and execute it.",explanation:"Method name prefix convention for test discovery.",hint:"Methods must start with 'test_' like def test_addition(self):",level:"basic",codeExample:`def test_fee_calculation(self): # Discovered automatically
    self.assertEqual(1 + 1, 2)`},{question:"Why should you prefer 'self.assertEqual(a, b)' over a raw 'assert a == b' inside 'unittest.TestCase'?",shortAnswer:"'self.assertEqual()' provides rich, detailed failure diagnostic messages showing the exact difference, type mismatch, and formatted diff between 'a' and 'b', whereas a bare 'assert' simply raises a generic AssertionError unless manually formatted.",explanation:"Rich diagnostic diff reporting in unittest assertion methods.",hint:"self.assertEqual displays detailed diff comparisons between expected and actual values.",level:"basic",codeExample:"self.assertEqual(actual_dict, expected_dict) # Shows key-by-key diff on failure"},{question:"How does the per-test fixture lifecycle work with 'setUp()' and 'tearDown()'?",shortAnswer:"'setUp()' is executed immediately BEFORE every individual test method runs, creating fresh test fixtures; 'tearDown()' is executed immediately AFTER every test method finishes, cleaning up resources even if the test fails.",explanation:"Instance-level test preparation and cleanup hooks.",hint:"setUp runs before each test; tearDown runs after each test.",level:"basic",codeExample:`def setUp(self): self.client = Client()
def tearDown(self): self.client.close()`},{question:"When should you use '@classmethod setUpClass(cls)' instead of 'setUp(self)'?",shortAnswer:"Use 'setUpClass(cls)' when setting up expensive resources (like establishing a database connection or spawning an external process) that can be safely shared across all test methods in the class, running once per class rather than before every test.",explanation:"Class-level fixture amortization for expensive initialization.",hint:"Runs once before all tests in the class to initialize expensive shared resources.",level:"moderate",codeExample:`@classmethod
def setUpClass(cls):
    cls.db = create_expensive_db_connection()`},{question:"How do you test floating-point numbers in 'unittest' to avoid decimal precision pitfalls?",shortAnswer:"Using 'self.assertAlmostEqual(a, b, places=2)' (or 'delta=0.01'), which verifies that two floating-point numbers are equal up to a specified number of decimal places, preventing false failures caused by binary float inaccuracies.",explanation:"Epsilon tolerance comparison for floating-point values.",hint:"Use self.assertAlmostEqual(a, b, places=2) to handle float rounding differences.",level:"basic",codeExample:"self.assertAlmostEqual(0.1 + 0.2, 0.3, places=7)"},{question:"How do you verify that a function raises an expected exception using 'unittest' context managers?",shortAnswer:"Using the context manager 'with self.assertRaises(ExpectedException):', which asserts that the enclosed block raises the specified exception, optionally capturing the exception object for message inspection.",explanation:"Context manager pattern for exception verification.",hint:"with self.assertRaises(ValueError): target_function()",level:"basic",codeExample:`with self.assertRaises(ValueError) as ctx:
    validate_age(-1)
self.assertIn('cannot be negative', str(ctx.exception))`},{question:"What is 'self.subTest()' and why is it superior to running a simple 'for' loop in a test method?",shortAnswer:"Inside a loop, a standard assertion failure stops test execution immediately and skips the remaining iterations; 'self.subTest()' isolates each iteration so that if one subtest fails, all other iterations still run and report their individual pass/fail statuses.",explanation:"Non-terminating granular loop parametrization in unittest.",hint:"Prevents the first failing loop iteration from stopping the rest of the loop.",level:"moderate",codeExample:`for num, is_even in [(2, True), (3, False), (4, True)]:
    with self.subTest(num=num):
        self.assertEqual(check_even(num), is_even)`},{question:"How can you conditionally skip a test in 'unittest' based on an environment or OS condition?",shortAnswer:"Using decorators like '@unittest.skip(reason)', '@unittest.skipIf(condition, reason)', or '@unittest.skipUnless(condition, reason)'.",explanation:"Declarative test exclusion based on platform or environment state.",hint:"@unittest.skipIf(sys.platform == 'win32', 'Not supported on Windows')",level:"moderate",codeExample:"@unittest.skipIf(sys.version_info < (3, 11), 'Requires Python 3.11+')"},{question:"What does the '@unittest.expectedFailure' decorator do?",shortAnswer:"It marks a test that is currently known to fail (e.g. tracking a known bug); if the test fails, it is counted as an 'expected failure' rather than a suite failure; if it passes unexpectedly, it is reported as an 'unexpected success'.",explanation:"Known defect tracking without failing CI quality gates.",hint:"Marks a test that is expected to fail without failing the entire test suite.",level:"moderate",codeExample:`@unittest.expectedFailure
def test_feature_in_progress(self): ... `},{question:"What is the difference between 'self.assertIn(item, container)' and 'self.assertTrue(item in container)'?",shortAnswer:"'self.assertIn' provides a clear failure message showing both the missing item and the full container contents (e.g. '5 not found in [1, 2, 3]'), whereas 'self.assertTrue' only outputs generic 'False is not true'.",explanation:"Diagnostic specificity of domain assertions vs generic boolean assertions.",hint:"assertIn prints the item and the container on failure; assertTrue just prints False.",level:"basic",codeExample:"self.assertIn('Mamata', enrolled_students) # Rich diagnostic output"},{question:"How do you execute test discovery from the command line using Python's standard 'unittest' runner?",shortAnswer:`Run: 'python -m unittest discover -s <directory> -p "test_*.py" -v', which automatically finds and executes all matching test files recursively.`,explanation:"Standard library CLI test discovery syntax.",hint:"python -m unittest discover -s tests -p 'test_*.py' -v",level:"basic",codeExample:"# Run tests across project: python -m unittest discover"},{question:"What is 'unittest.TestSuite' and how is it used to group specific tests?",shortAnswer:"'unittest.TestSuite' is a composite container that aggregates multiple test cases or test suites together, allowing custom subsets of tests to be executed together programmatically.",explanation:"Composite pattern container for custom test aggregation.",hint:"suite = unittest.TestSuite(); suite.addTest(TestClass('test_method'))",level:"moderate",codeExample:`suite = unittest.TestSuite()
suite.addTest(TestBilling('test_payment'))
unittest.TextTestRunner().run(suite)`},{question:"What is the purpose of 'self.assertCountEqual(seq1, seq2)' in 'unittest'?",shortAnswer:"It asserts that two sequences contain the exact same elements with the exact same frequencies, regardless of their order (multiset equality).",explanation:"Order-agnostic multiset element comparison.",hint:"Checks that two lists have the exact same elements regardless of order.",level:"moderate",codeExample:"self.assertCountEqual(['A', 'B', 'A'], ['B', 'A', 'A']) # Passes!"},{question:"What happens if an exception is raised inside 'setUp()'?",shortAnswer:"If 'setUp()' raises an exception, the test method is marked as an 'ERROR' (not a 'FAIL'), the test method itself is NEVER executed, but 'tearDown()' is also skipped unless custom cleanup is registered via 'addCleanup()'.",explanation:"Setup failure semantics and cleanup handling.",hint:"The test method is skipped and marked as an ERROR.",level:"complex",codeExample:"# Use self.addCleanup(func) inside setUp to ensure cleanup even if setUp fails"},{question:"How does 'self.addCleanup(function, *args)' provide safer resource cleanup than 'tearDown()'?",shortAnswer:"'addCleanup()' registers cleanup callbacks immediately as resources are created in 'setUp()' or test methods; registered cleanup functions are guaranteed to run in LIFO order even if 'setUp()' crashes midway.",explanation:"Safe LIFO cleanup registration surviving partial initialization failures.",hint:"Guarantees cleanup callbacks execute even if setUp fails halfway through.",level:"complex",codeExample:`f = open('temp.txt', 'w')
self.addCleanup(f.close)`},{question:"What is the difference between a Test 'Failure' and a Test 'Error' in unittest reporting?",shortAnswer:"A 'Failure' (F) occurs when an assertion fails ('self.assertEqual' or 'assert'); an 'Error' (E) occurs when an unexpected exception (like 'KeyError', 'IndexError', 'TypeError', or crash in 'setUp') is raised during execution.",explanation:"Distinction between contract assertion failures and unhandled runtime exceptions.",hint:"Failure = assertion failed; Error = unexpected unhandled exception crash.",level:"basic",codeExample:"# Failure: self.assertEqual(1, 2) | Error: x = 1 / 0 (ZeroDivisionError)"},{question:"Can 'unittest' test asynchronous coroutines in Python 3.8+?",shortAnswer:"Yes, by subclassing 'unittest.IsolatedAsyncioTestCase', which natively supports 'async def test_*', 'async def asyncSetUp()', and 'async def asyncTearDown()'.",explanation:"Native asyncio coroutine testing in standard library unittest.",hint:"Subclass unittest.IsolatedAsyncioTestCase for async tests.",level:"moderate",codeExample:`class TestAsync(unittest.IsolatedAsyncioTestCase):
    async def test_api(self): res = await fetch()`},{question:"Why does 'unittest' instantiate a brand-new instance of the 'TestCase' class for EVERY test method?",shortAnswer:"To ensure complete test isolation, preventing instance variable mutations in one test method from leaking into or polluting another test method.",explanation:"Fresh instance instantiation per test method ensuring state isolation.",hint:"Instantiates a new class instance for each test to avoid state leakage.",level:"moderate",codeExample:"# test_one and test_two run on completely separate object instances"},{question:"What is the primary advantage and disadvantage of Python's built-in 'unittest' module?",shortAnswer:"Advantage: it is part of Python's standard library with zero external dependencies (always available in any environment); Disadvantage: it requires more boilerplate classes and verbose assertion methods compared to modern pytest.",explanation:"Standard library ubiquity vs boilerplate verbosity.",hint:"Zero dependencies and built-in, but requires boilerplate OOP classes and verbose assertions.",level:"basic",codeExample:"# Ubiquitous zero-dependency standard library testing"}];function D(){const u=i.useRef([]),[r,h]=i.useState("lifecycleHooks"),[n,p]=i.useState("PER_TEST_FIXTURE"),[a,b]=i.useState("assertAlmostEqual");let o="setUp() runs before EVERY test; tearDown() runs after EVERY test",d="Complete isolation (fresh instance per test method)",c="Clearing tables or resetting in-memory object fixtures";n==="PER_TEST_FIXTURE"?(o="setUp() & tearDown() executed per test method",d="100% isolated state across test methods",c="Instantiating fresh StudentProfile objects per test"):n==="CLASS_LEVEL_DB"?(o="setUpClass() & tearDownClass() executed ONCE per class",d="Shared connection instance across class methods",c="Establishing expensive SQLite/PostgreSQL connection pools"):n==="SUBTEST_LOOP"&&(o="with self.subTest(): executed per loop iteration",d="Iteration-level isolation without aborting loop on fail",c="Testing 20 student grade boundary thresholds");const g=`# Built-in unittest.TestCase Architecture
# Pattern: ${n} | Assertion: self.${a}()

import unittest

class TestStudentLedger(unittest.TestCase):
${n==="CLASS_LEVEL_DB"?`    @classmethod
    def setUpClass(cls):
        # Runs ONCE before all tests: Expensive resource initialization
        cls.db = sqlite3.connect(":memory:")
        cls.db.execute("CREATE TABLE students (sid TEXT, balance REAL)")

    @classmethod
    def tearDownClass(cls):
        # Runs ONCE after all tests: Clean database shutdown
        cls.db.close()`:n==="PER_TEST_FIXTURE"?`    def setUp(self):
        # Runs BEFORE EACH test method: Prepare fresh test fixtures
        self.student = StudentProfile("STU_BP_01", "Mamata", "Barrackpore", 5000.0)

    def tearDown(self):
        # Runs AFTER EACH test method: State cleanup
        self.student = None`:`    def test_grade_boundaries(self):
        cases = [(95.0, "A+"), (90.0, "A+"), (80.0, "A"), (35.0, "F")]
        for score, expected in cases:
            # self.subTest isolates failures without aborting the loop!
            with self.subTest(score=score):
                self.assertEqual(calculate_grade(score), expected)`}

    def test_operation_contract(self):
        # Using self.${a}()
        self.${a==="assertAlmostEqual"?"assertAlmostEqual(0.1 + 0.2, 0.3, places=7)":a==="assertRaises"?`assertRaises(ValueError):
            validate_fee(-100.0)`:a==="assertDictEqual"?`assertDictEqual(
            {"name": "Mamata", "campus": "Barrackpore"},
            {"name": "Mamata", "campus": "Barrackpore"}
        )`:"assertIn('Python Pro', self.student.enrolled_courses)"}`;i.useEffect(()=>{const t=new IntersectionObserver(f=>{f.forEach(m=>{m.isIntersecting&&m.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return u.current.forEach(f=>{f&&t.observe(f)}),()=>t.disconnect()},[]);const s=t=>{t&&!u.current.includes(t)&&u.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:s,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 4 • Module 004_003"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 2"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Automated Testing, PyTest & Quality Assurance"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Built-in ",e.jsx("span",{className:"text-teal-400",children:"unittest Framework"}),": TestCase & Lifecycle"]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master Python's built-in zero-dependency standard library testing framework: subclassing ",e.jsx("code",{className:"text-teal-300 font-mono",children:"unittest.TestCase"}),", leveraging specialized assertion methods (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"assertEqual"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"assertAlmostEqual"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"assertRaises"}),"), mastering the test fixture lifecycle with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"setUp()"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"tearDown()"}),", and ",e.jsx("code",{className:"text-purple-300 font-mono",children:"setUpClass()"}),", and isolating parameterized loop failures with ",e.jsx("code",{className:"text-amber-300 font-mono",children:"self.subTest()"}),"."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🏛️ Zero-Dependency Standard Library"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔄 setUp & tearDown Lifecycle"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🎯 Rich Assertion Catalog"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔁 Loop Isolation with self.subTest()"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The unittest.TestCase Architecture"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["Python's built-in ",e.jsx("code",{className:"text-teal-300 font-mono",children:"unittest"})," module (inspired by JUnit) organizes tests into object-oriented test case classes. It provides a full suite of lifecycle hooks and descriptive assertion methods without requiring third-party package installations:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ TestCase Class"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"unittest.TestCase"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Subclass base container. Discovers every method prefixed with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"test_"})," as an independent executable test."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Assertion Catalog"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"self.assertEqual()"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Rich diff assertions (",e.jsx("code",{className:"text-cyan-300",children:"assertAlmostEqual"}),", ",e.jsx("code",{className:"text-cyan-300",children:"assertRaises"}),", ",e.jsx("code",{className:"text-cyan-300",children:"assertIn"}),") with formatted error traces."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Fixture Lifecycle"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"setUp & tearDown"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Automatic hooks creating fresh state before each test and guaranteeing resource teardown even upon assertion failures."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 shadow-lg",children:[e.jsx("div",{className:"text-amber-400 font-bold text-sm mb-1",children:"4️⃣ SubTests & Skipping"}),e.jsx("code",{className:"text-xs font-mono text-amber-300 block mb-1",children:"self.subTest()"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Isolates loop iterations so failures don't abort remaining cases, and conditionally skips tests with ",e.jsx("code",{className:"text-amber-300",children:"@unittest.skipIf"}),"."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"Assertion Specificity: self.assertEqual vs bare assert"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["When a test fails, ",e.jsx("code",{className:"text-teal-300 font-mono",children:"self.assertEqual(dict_a, dict_b)"})," prints a full ",e.jsx("span",{className:"text-emerald-400 font-bold",children:"colored key-by-key diff"})," showing exactly which nested keys differed. A bare ",e.jsx("code",{className:"text-rose-400 font-mono",children:"assert dict_a == dict_b"})," prints a generic error requiring manual inspection."]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Test Lifecycles, Assertions & SubTest Isolation"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>h("lifecycleHooks"),className:l("px-3 py-1.5 rounded-lg transition-all",r==="lifecycleHooks"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Fixture Lifecycle Hooks"}),e.jsx("button",{onClick:()=>h("assertionMethods"),className:l("px-3 py-1.5 rounded-lg transition-all",r==="assertionMethods"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Assertion Method Catalog"}),e.jsx("button",{onClick:()=>h("subTestIsolation"),className:l("px-3 py-1.5 rounded-lg transition-all",r==="subTestIsolation"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"self.subTest() Loop Isolation"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining execution flows across class-level and method-level test hooks:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:r==="lifecycleHooks"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"UNITTEST LIFECYCLE EXECUTION TIMELINE: CLASS-LEVEL VS TEST-LEVEL HOOKS"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#0f172a",stroke:"#14b8a6"}),e.jsx("rect",{x:"25",y:"45",width:"130",height:"150",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"35",y:"70",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"setUpClass()"}),e.jsx("text",{x:"35",y:"90",fill:"#ccfbf1",fontSize:"9",fontFamily:"monospace",children:"Runs ONCE"}),e.jsx("text",{x:"35",y:"110",fill:"#99f6e4",fontSize:"8",children:"Open DB Socket"}),e.jsx("text",{x:"35",y:"125",fill:"#99f6e4",fontSize:"8",children:"Global Schema"}),e.jsx("text",{x:"35",y:"170",fill:"#facc15",fontSize:"8",fontWeight:"bold",children:"1x Execution"}),e.jsx("path",{d:"M 160 120 L 180 120",stroke:"#14b8a6",strokeWidth:"2"}),e.jsx("rect",{x:"185",y:"45",width:"220",height:"150",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("text",{x:"195",y:"70",fill:"#e0f2fe",fontSize:"11",fontWeight:"bold",children:"Test Method 1 Lifecycle"}),e.jsx("rect",{x:"195",y:"80",width:"200",height:"26",rx:"4",fill:"#0369a1"}),e.jsx("text",{x:"205",y:"97",fill:"#e0f2fe",fontSize:"9",children:"1. setUp() ➔ Fresh Fixture"}),e.jsx("rect",{x:"195",y:"110",width:"200",height:"26",rx:"4",fill:"#0284c7"}),e.jsx("text",{x:"205",y:"127",fill:"#ffffff",fontSize:"9",fontWeight:"bold",children:"2. test_payment()"}),e.jsx("rect",{x:"195",y:"140",width:"200",height:"26",rx:"4",fill:"#0369a1"}),e.jsx("text",{x:"205",y:"157",fill:"#e0f2fe",fontSize:"9",children:"3. tearDown() ➔ State Clean"}),e.jsx("path",{d:"M 410 120 L 430 120",stroke:"#14b8a6",strokeWidth:"2"}),e.jsx("rect",{x:"435",y:"45",width:"220",height:"150",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("text",{x:"445",y:"70",fill:"#e0f2fe",fontSize:"11",fontWeight:"bold",children:"Test Method 2 Lifecycle"}),e.jsx("rect",{x:"445",y:"80",width:"200",height:"26",rx:"4",fill:"#0369a1"}),e.jsx("text",{x:"455",y:"97",fill:"#e0f2fe",fontSize:"9",children:"1. setUp() ➔ Fresh Fixture"}),e.jsx("rect",{x:"445",y:"110",width:"200",height:"26",rx:"4",fill:"#ffffff"}),e.jsx("text",{x:"455",y:"127",fill:"#0f172a",fontSize:"9",fontWeight:"bold",children:"2. test_refund()"}),e.jsx("rect",{x:"445",y:"140",width:"200",height:"26",rx:"4",fill:"#0369a1"}),e.jsx("text",{x:"455",y:"157",fill:"#e0f2fe",fontSize:"9",children:"3. tearDown() ➔ State Clean"}),e.jsx("path",{d:"M 660 120 L 680 120",stroke:"#14b8a6",strokeWidth:"2"}),e.jsx("rect",{x:"685",y:"45",width:"115",height:"150",rx:"6",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"692",y:"70",fill:"#fda4af",fontSize:"11",fontWeight:"bold",children:"tearDownClass()"}),e.jsx("text",{x:"692",y:"90",fill:"#fecdd3",fontSize:"9",fontFamily:"monospace",children:"Runs ONCE"}),e.jsx("text",{x:"692",y:"110",fill:"#ffe4e6",fontSize:"8",children:"Close DB Socket"}),e.jsx("text",{x:"692",y:"125",fill:"#ffe4e6",fontSize:"8",children:"Drop Schema"}),e.jsx("text",{x:"692",y:"170",fill:"#facc15",fontSize:"8",fontWeight:"bold",children:"1x Execution"})]})]}):r==="assertionMethods"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"SPECIALIZED ASSERTION METHODS IN UNITTEST.TESTCASE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#082f49",stroke:"#0ea5e9"}),e.jsx("rect",{x:"25",y:"40",width:"245",height:"85",rx:"6",fill:"#0369a1",stroke:"#38bdf8"}),e.jsx("text",{x:"35",y:"65",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"self.assertEqual(a, b)"}),e.jsx("text",{x:"35",y:"85",fill:"#e0f2fe",fontSize:"9",children:"Tests equality with deep value diff"}),e.jsx("text",{x:"35",y:"105",fill:"#bae6fd",fontSize:"8",fontFamily:"monospace",children:"self.assertNotEqual(a, b)"}),e.jsx("rect",{x:"285",y:"40",width:"245",height:"85",rx:"6",fill:"#0369a1",stroke:"#38bdf8"}),e.jsx("text",{x:"295",y:"65",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"self.assertAlmostEqual(a, b)"}),e.jsx("text",{x:"295",y:"85",fill:"#e0f2fe",fontSize:"9",children:"Floating-point decimal tolerance"}),e.jsx("text",{x:"295",y:"105",fill:"#bae6fd",fontSize:"8",fontFamily:"monospace",children:"places=2 or delta=0.01"}),e.jsx("rect",{x:"545",y:"40",width:"250",height:"85",rx:"6",fill:"#0369a1",stroke:"#38bdf8"}),e.jsx("text",{x:"555",y:"65",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"self.assertRaises(Error)"}),e.jsx("text",{x:"555",y:"85",fill:"#e0f2fe",fontSize:"9",children:"Verifies exception context manager"}),e.jsx("text",{x:"555",y:"105",fill:"#bae6fd",fontSize:"8",fontFamily:"monospace",children:"with self.assertRaises(ValueError):"}),e.jsx("rect",{x:"25",y:"140",width:"245",height:"85",rx:"6",fill:"#0c4a6e",stroke:"#0284c7"}),e.jsx("text",{x:"35",y:"165",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"self.assertIn(item, list)"}),e.jsx("text",{x:"35",y:"185",fill:"#e0f2fe",fontSize:"9",children:"Verifies membership in container"}),e.jsx("text",{x:"35",y:"205",fill:"#bae6fd",fontSize:"8",fontFamily:"monospace",children:"self.assertNotIn(k, dict)"}),e.jsx("rect",{x:"285",y:"140",width:"245",height:"85",rx:"6",fill:"#0c4a6e",stroke:"#0284c7"}),e.jsx("text",{x:"295",y:"165",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"self.assertDictEqual(d1, d2)"}),e.jsx("text",{x:"295",y:"185",fill:"#e0f2fe",fontSize:"9",children:"Key-by-key dictionary diff output"}),e.jsx("text",{x:"295",y:"205",fill:"#bae6fd",fontSize:"8",fontFamily:"monospace",children:"self.assertListEqual(l1, l2)"}),e.jsx("rect",{x:"545",y:"140",width:"250",height:"85",rx:"6",fill:"#0c4a6e",stroke:"#0284c7"}),e.jsx("text",{x:"555",y:"165",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"self.assertCountEqual(s1, s2)"}),e.jsx("text",{x:"555",y:"185",fill:"#e0f2fe",fontSize:"9",children:"Order-agnostic multiset equality"}),e.jsx("text",{x:"555",y:"205",fill:"#bae6fd",fontSize:"8",fontFamily:"monospace",children:"Same items regardless of order"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"LOOP ISOLATION: NATIVE FOR-LOOP VS SELF.SUBTEST()"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#1e1b4b",stroke:"#a855f7"}),e.jsx("rect",{x:"25",y:"45",width:"370",height:"180",rx:"6",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"35",y:"70",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"Standard For Loop (No subtests)"}),e.jsx("rect",{x:"35",y:"85",width:"350",height:"30",rx:"4",fill:"#1c1917"}),e.jsx("text",{x:"45",y:"105",fill:"#86efac",fontSize:"9",fontFamily:"monospace",children:"Iteration 1 (Score 95.0) ➔ PASS"}),e.jsx("rect",{x:"35",y:"120",width:"350",height:"30",rx:"4",fill:"#881337",stroke:"#fb7185"}),e.jsx("text",{x:"45",y:"140",fill:"#fecdd3",fontSize:"9",fontFamily:"monospace",children:"Iteration 2 (Score 90.0) ➔ FAIL (ABORTS!)"}),e.jsx("rect",{x:"35",y:"155",width:"350",height:"55",rx:"4",fill:"#1c1917"}),e.jsx("text",{x:"45",y:"175",fill:"#fca5a5",fontSize:"9",children:"💥 Iterations 3, 4, 5 NEVER EXECUTE!"}),e.jsx("text",{x:"45",y:"195",fill:"#fda4af",fontSize:"8",children:"Hides other passing/failing boundaries"}),e.jsx("rect",{x:"425",y:"45",width:"370",height:"180",rx:"6",fill:"#042f2e",stroke:"#14b8a6"}),e.jsx("text",{x:"435",y:"70",fill:"#5eead4",fontSize:"12",fontWeight:"bold",children:"with self.subTest() (Isolated Iterations)"}),e.jsx("rect",{x:"435",y:"85",width:"350",height:"30",rx:"4",fill:"#064e3b"}),e.jsx("text",{x:"445",y:"105",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"subTest 1 (Score 95.0) ➔ PASS"}),e.jsx("rect",{x:"435",y:"120",width:"350",height:"30",rx:"4",fill:"#78350f",stroke:"#f59e0b"}),e.jsx("text",{x:"445",y:"140",fill:"#fef3c7",fontSize:"9",fontFamily:"monospace",children:"subTest 2 (Score 90.0) ➔ FAIL (Recorded!)"}),e.jsx("rect",{x:"435",y:"155",width:"350",height:"55",rx:"4",fill:"#064e3b"}),e.jsx("text",{x:"445",y:"175",fill:"#a7f3d0",fontSize:"9",children:"✅ subTests 3, 4, 5 CONTINUE TO RUN!"}),e.jsx("text",{x:"445",y:"195",fill:"#ccfbf1",fontSize:"8",children:"Reports exact subtest failure diagnostics"})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧪"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive TestCase & Fixture Lifecycle Simulator"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Configure TestCase fixture hooks and assertion modes to observe lifecycle scopes and inspect production Python code:"}),e.jsxs("div",{className:"bg-slate-950 p-5 sm:p-6 rounded-xl border border-slate-800/90 space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3",children:"Select Lifecycle Pattern:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[{id:"PER_TEST_FIXTURE",label:"setUp / tearDown",icon:"🔄",tag:"Per-Test Isolation"},{id:"CLASS_LEVEL_DB",label:"setUpClass / tearDownClass",icon:"🏛️",tag:"Shared DB Pool"},{id:"SUBTEST_LOOP",label:"self.subTest() Loop",icon:"🔁",tag:"Loop Parametrization"}].map(t=>e.jsxs("button",{onClick:()=>p(t.id),className:l("p-3 rounded-xl border text-left transition-all",n===t.id?"bg-teal-950/60 border-teal-500 shadow-md shadow-teal-950/50":"bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400"),children:[e.jsxs("div",{className:"text-base mb-1",children:[t.icon," ",e.jsx("strong",{className:"text-slate-200 text-xs sm:text-sm",children:t.label})]}),e.jsx("div",{className:"text-[11px] text-teal-400 font-mono",children:t.tag})]},t.id))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"Select Assertion Method to Test:"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:["assertAlmostEqual","assertRaises","assertDictEqual","assertIn"].map(t=>e.jsxs("button",{onClick:()=>b(t),className:l("px-3 py-1.5 rounded-lg border text-xs font-mono transition-all",a===t?"bg-cyan-950/80 border-cyan-500 text-cyan-300 shadow-sm":"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"),children:["self.",t,"()"]},t))})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2",children:[e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-teal-900/50",children:[e.jsx("div",{className:"text-xs text-teal-400 font-medium mb-1",children:"Lifecycle Hook Scope"}),e.jsx("div",{className:"text-xs font-bold font-mono text-teal-300 mt-1 leading-snug",children:o})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-cyan-900/50",children:[e.jsx("div",{className:"text-xs text-cyan-400 font-medium mb-1",children:"Failure Isolation"}),e.jsx("div",{className:"text-xs font-bold font-mono text-cyan-300 mt-1 leading-snug",children:d})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-purple-900/50",children:[e.jsx("div",{className:"text-xs text-purple-400 font-medium mb-1",children:"Production Use Case"}),e.jsx("div",{className:"text-xs font-bold font-mono text-purple-300 mt-1 leading-snug",children:c})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"Generated unittest.TestCase Implementation:"}),e.jsx("pre",{className:"p-4 bg-slate-900/90 border border-slate-800 rounded-xl text-xs sm:text-sm font-mono text-teal-200 overflow-x-auto leading-relaxed",children:g})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Production Code Labs & TestCase Suites"})]}),e.jsx("p",{className:"text-slate-300 mb-8 text-base leading-relaxed",children:"Inspect, run, and master all four production-grade unittest suites covering assertions, lifecycle fixture hooks, subtest iteration diagnostics, and the multi-campus institutional student manager:"}),e.jsxs("div",{className:"space-y-10",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:"Lab 1: unittest.TestCase Assertion Catalog"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Demonstrating ",e.jsx("code",{className:"text-teal-300 font-mono",children:"assertAlmostEqual"})," for floating-point calculations, ",e.jsx("code",{className:"text-teal-300 font-mono",children:"assertRaises"})," exception contexts, and ",e.jsx("code",{className:"text-teal-300 font-mono",children:"assertDictEqual"})," across student records."]})]}),e.jsx(x,{fileModule:j,title:"unittest_testcase_and_assertions.py",highlightLines:[25,31,44]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-cyan-300",children:"Lab 2: Test Fixture Lifecycles (setUpClass, setUp, tearDown)"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Managing in-memory SQLite database connection lifecycles across ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"setUpClass()"}),", and inserting fresh student records before every test in ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"setUp()"}),"."]})]}),e.jsx(x,{fileModule:T,title:"unittest_setup_teardown_lifecycle.py",highlightLines:[18,30,36,44]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-purple-300",children:"Lab 3: self.subTest() Iteration Isolation & Conditional Skipping"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Testing multiple grade boundary thresholds with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"self.subTest()"})," and conditionally skipping tests with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"@unittest.skipIf"}),"."]})]}),e.jsx(x,{fileModule:w,title:"unittest_subtests_and_skipping.py",highlightLines:[32,38,42]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-amber-300",children:"Lab 4: Institutional Student Management Production TestCase Suite"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Comprehensive test suite validating course enrollment balance mutations, tuition payments, and overpayment exceptions for Mamata across Barrackpore and Kolkata."})]}),e.jsx(x,{fileModule:v,title:"institutional_unittest_suite.py",highlightLines:[36,47,53,59]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. unittest Pitfalls & Anti-Patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"1. Missing 'test_' Method Prefix"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Methods named without ",e.jsx("code",{className:"text-rose-400 font-mono",children:"test_"})," (e.g. ",e.jsx("code",{className:"text-rose-400 font-mono",children:"def verify_student(self):"}),") are completely ignored by the test runner and never execute!"]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# BUG: def check_fee(self): ... # Skipped!",`
`,"# FIX: def test_check_fee(self): ..."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"2. Comparing Floats with assertEqual"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Direct equality (",e.jsx("code",{className:"text-rose-400 font-mono",children:"self.assertEqual(0.1 + 0.2, 0.3)"}),") fails due to binary float representation. Always use ",e.jsx("code",{className:"text-teal-300 font-mono",children:"assertAlmostEqual"}),"."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# BUG: self.assertEqual(0.1 + 0.2, 0.3) # Fails!",`
`,"# FIX: self.assertAlmostEqual(0.1 + 0.2, 0.3, places=7)"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"3. Mutating Class Fixtures in Tests"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Modifying shared ",e.jsx("code",{className:"text-rose-400 font-mono",children:"cls.shared_list"})," inside test methods creates state leakage across tests. Mutate only instance-level fixtures created in ",e.jsx("code",{className:"text-teal-300 font-mono",children:"setUp()"}),"."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# BUG: self.shared_class_data.append(x)",`
`,"# FIX: Create fresh data in setUp()"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"4. Forgetting subTest in Loops"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Running an assertion in a standard loop causes the first failure to abort the loop, hiding whether subsequent edge cases passed or failed."}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# BUG: for x in cases: self.assertEqual(...)",`
`,"# FIX: for x in cases: with self.subTest(): ..."]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Professional unittest Checklist"})]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm sm:text-base",children:[e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Prefix All Test Methods with test_:"})," Ensure the test runner discovers every test case automatically."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Use Specific Assertions:"})," Use ",e.jsx("code",{className:"text-teal-300 font-mono",children:"assertEqual"}),", ",e.jsx("code",{className:"text-teal-300 font-mono",children:"assertIn"}),", and ",e.jsx("code",{className:"text-teal-300 font-mono",children:"assertRaises"})," for rich failure diagnostics."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Isolate Loop Cases with self.subTest():"})," Keep parameterized loop iterations independent so all cases report diagnostics."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Clean Up with tearDown() or addCleanup():"})," Guarantee database and file resources are released even when assertions fail."]})]})]})]}),e.jsx("section",{ref:s,className:"section-hidden",children:e.jsx(_,{title:"Built-in unittest Framework FAQs",questions:N})}),e.jsx("section",{ref:s,className:"section-hidden",children:e.jsx(y,{content:S,title:"Topic 2: Built-in unittest Framework Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic2_note.txt"})}),e.jsx("section",{ref:s,className:"section-hidden",children:e.jsx(E,{note:"Python's standard library unittest module provides an indispensable, zero-dependency testing foundation. When architecting institutional data models across Barrackpore, Kolkata, Ichapur, and Jadavpur, using unittest.TestCase ensures our tests run out-of-the-box on every server and embedded system without installing third-party tools. Leveraging setUp to generate clean student profiles for Mamata and Mahima, assertAlmostEqual for tuition calculations, and self.subTest to test full grade matrices creates resilient, enterprise-grade test suites."})})]})]})}export{D as default};
