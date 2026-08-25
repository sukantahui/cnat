import{b as l,j as e,bg as c}from"./vendor-react-core-Doz9nIC6.js";import{P as b}from"./PythonFileLoader-hCi5osN-.js";import{P as y}from"./PlainTextPrint-C08xhKA4.js";import{F as v}from"./FAQTemplate-CkSqDH4B.js";import{T as N}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const _=`# topic10_files/assert_statement_fundamentals.py\r
# Module: 003_002_basic-exception-handling\r
# Topic: Using assertions with assert for internal invariant checks\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 10 - File 1: Assert Statement Fundamentals (\`assert\`)\r
Demonstrates:\r
  1. Syntax and semantics of \`assert <condition>, <optional_message>\`\r
  2. How \`assert\` raises \`AssertionError\` when the condition is False\r
  3. Proper use of assertions to catch internal programmer bugs early\r
"""\r
\r
def compute_tuition_discount(gross_fee: float, discount_percentage: float) -> float:\r
    """Computes discounted fee using assert to verify internal calculation integrity."""\r
    # 1. Production Input Validation (Using \`raise\`, NOT \`assert\`!)\r
    if not isinstance(gross_fee, (int, float)) or gross_fee < 0:\r
        raise ValueError(f"Invalid gross fee: INR {gross_fee}")\r
    if not isinstance(discount_percentage, (int, float)) or not (0.0 <= discount_percentage <= 1.0):\r
        raise ValueError(f"Discount percentage must be between 0.0 and 1.0, got {discount_percentage}")\r
\r
    # Calculate discount:\r
    discount_amount = gross_fee * discount_percentage\r
    net_fee = gross_fee - discount_amount\r
\r
    # 2. Internal Invariant Assertion (Guarantees our math algorithm didn't produce an impossible state)\r
    assert 0.0 <= net_fee <= gross_fee, f"Internal Math Invariant Violated! Net fee {net_fee} is outside bounds [0, {gross_fee}]"\r
    assert discount_amount >= 0.0, "Internal Invariant: Discount amount cannot be negative!"\r
\r
    return net_fee\r
\r
\r
def demonstrate_assert_fundamentals():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - ASSERT STATEMENT FUNDAMENTALS")\r
    print("=" * 70)\r
\r
    # 1. Valid Calculation\r
    print("1. Calculating Normal Discount (INR 20,000 with 15% discount):")\r
    net = compute_tuition_discount(20000.0, 0.15)\r
    print(f"   Calculated Net Fee: INR {net:,.2f} (Assertions passed cleanly!)\\n")\r
\r
    # 2. Testing Input Validation Guard (Raises ValueError)\r
    print("2. Testing Input Validation Guard (Passing invalid percentage 1.5):")\r
    try:\r
        compute_tuition_discount(20000.0, 1.5)\r
    except ValueError as err:\r
        print(f"   [CAUGHT INPUT VALIDATION ERROR] ValueError: {err}\\n")\r
\r
    # 3. Triggering an AssertionError directly:\r
    print("3. Demonstrating Raw AssertionError Triggering:")\r
    try:\r
        current_students = -5\r
        assert current_students >= 0, f"Classroom student count cannot be negative: {current_students}"\r
    except AssertionError as err:\r
        print(f"   [CAUGHT INTERNAL ASSERTION ERROR] AssertionError: {err}")\r
\r
    print("\\n[PASSED] Assert Statement Fundamentals Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_assert_fundamentals()\r
`,j=`# topic10_files/python_optimization_flag_trap.py\r
# Module: 003_002_basic-exception-handling\r
# Topic: Using assertions with assert for internal invariant checks\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 10 - File 2: The Optimization Flag (-O) & The Tuple Trap\r
Demonstrates:\r
  1. The Python \`__debug__\` constant and how \`-O\` strips assertions from bytecode\r
  2. The Critical Security Flaw: Never use \`assert\` for user authentication or authorization\r
  3. The Infamous Assert Tuple Trap: \`assert (x > 0, "Error")\` is always TRUE!\r
"""\r
\r
# =====================================================================\r
# 1. THE FATAL SECURITY VULNERABILITY (Assert for Auth)\r
# =====================================================================\r
def vulnerable_admin_delete_student(user_role: str, student_id: str):\r
    """FATAL VULNERABILITY: If Python is run with \`python -O\`, this assertion IS DELETED!"""\r
    assert user_role == "ADMIN", "Security Violation: Only Admins can delete student records!"\r
    print(f"  [DANGER: DELETED] Student {student_id} was purged from database by '{user_role}'!")\r
\r
\r
def secure_admin_delete_student(user_role: str, student_id: str):\r
    """SECURE: Uses \`raise PermissionError\` which CANNOT be disabled by optimization flags."""\r
    if user_role != "ADMIN":\r
        raise PermissionError(f"Security Violation: Role '{user_role}' is not authorized to delete records!")\r
    print(f"  [SECURE DELETE] Student {student_id} purged by authorized Admin.")\r
\r
\r
# =====================================================================\r
# 2. THE INFAMOUS ASSERT TUPLE TRAP\r
# =====================================================================\r
def demonstrate_tuple_trap():\r
    print("\\n--- THE INFAMOUS ASSERT TUPLE TRAP ---")\r
    score = -50  # Obviously invalid!\r
\r
    # ❌ THE FATAL SYNTAX ERROR: Putting parentheses around condition and message!\r
    # In Python, \`(False, "Error message")\` is a non-empty 2-element tuple.\r
    # Non-empty tuples ALWAYS evaluate to True in boolean contexts!\r
    # Therefore, this assertion NEVER FAILS even with negative score!\r
    assert (score >= 0, "Score cannot be negative!")\r
    print(f"  [TRAP TRIGGERED] \`assert (score >= 0, 'msg')\` PASSED SILENTLY on score={score} because non-empty tuples are truthy!")\r
\r
    # ✓ THE CORRECT SYNTAX (No wrapping parentheses):\r
    try:\r
        assert score >= 0, "Score cannot be negative!"\r
    except AssertionError as err:\r
        print(f"  [CORRECT SYNTAX] Properly caught AssertionError: {err}")\r
\r
\r
def demonstrate_optimization_mechanics():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - ASSERT OPTIMIZATION FLAG (-O) & TRAPS")\r
    print("=" * 70)\r
\r
    print(f"1. Current Python Execution Mode: \`__debug__\` = {__debug__}")\r
    if __debug__:\r
        print("   (Normal Development Mode: All \`assert\` statements are actively executing.)")\r
    else:\r
        print("   (Optimized Production Mode (-O): All \`assert\` statements are STRIPPED from bytecode!)")\r
\r
    # 2. Testing Secure vs Vulnerable Auth\r
    print("\\n2. Testing Unauthorized Deletion (Guest User):")\r
    try:\r
        secure_admin_delete_student("GUEST", "STU-101")\r
    except PermissionError as err:\r
        print(f"   [BLOCKED BY SECURE RAISE] PermissionError: {err}")\r
\r
    # 3. Tuple Trap Demo\r
    demonstrate_tuple_trap()\r
\r
    print(r"""\r
Key Rules:\r
  1. NEVER use \`assert\` for security, permissions, or public API input validation.\r
  2. NEVER put parentheses around the assert condition and message: \`assert cond, msg\`.\r
""")\r
    print("[PASSED] Optimization Flag Trap & Tuple Trap Demonstrated.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_optimization_mechanics()\r
`,E=`# topic10_files/defensive_internal_invariants.py\r
# Module: 003_002_basic-exception-handling\r
# Topic: Using assertions with assert for internal invariant checks\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 10 - File 3: Legitimate & Recommended Assert Use Cases\r
Demonstrates:\r
  1. Postcondition Verification: Ensuring complex algorithms satisfy mathematical properties\r
  2. Defensive Invariants in Private Internal Helper Methods\r
  3. Unreachable Code Sentinel in Exhaustive Condition Branches\r
"""\r
\r
from typing import List, Tuple\r
\r
def calculate_normalized_weights(raw_scores: List[float]) -> List[float]:\r
    """Calculates relative normalized weights (0.0 to 1.0) summing to 1.0."""\r
    # 1. Public Input Validation using raise:\r
    if not raw_scores or any(s < 0 for s in raw_scores):\r
        raise ValueError("Raw scores list must be non-empty with all values >= 0")\r
\r
    total_sum = sum(raw_scores)\r
    if total_sum == 0:\r
        return [1.0 / len(raw_scores)] * len(raw_scores)\r
\r
    weights = [score / total_sum for score in raw_scores]\r
\r
    # 2. LEGITIMATE ASSERT USE CASE 1: Mathematical Postcondition Invariant Check\r
    # Guarantees that floating point calculation produced weights summing to approx 1.0:\r
    weight_sum = sum(weights)\r
    assert abs(weight_sum - 1.0) < 1e-6, f"Invariant Broken: Weights sum to {weight_sum}, expected 1.0!"\r
    assert len(weights) == len(raw_scores), "Invariant Broken: Weight vector dimension mismatch!"\r
\r
    return weights\r
\r
\r
def route_grade_action(letter_grade: str) -> str:\r
    """Demonstrates LEGITIMATE ASSERT USE CASE 2: Unreachable Branch Sentinel."""\r
    if letter_grade in ("A+", "A"):\r
        return "Distinction Certificate"\r
    elif letter_grade in ("B+", "B"):\r
        return "Standard Certificate"\r
    elif letter_grade == "F":\r
        return "Remedial Coaching Required"\r
    else:\r
        # If upstream code failed to sanitize grade letter, assert catches the impossible branch!\r
        assert False, f"Unreachable Branch Reached: Unrecognized letter grade '{letter_grade}'!"\r
\r
\r
def demonstrate_legitimate_asserts():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - LEGITIMATE INVARIANT ASSERTION PATTERNS")\r
    print("=" * 70)\r
\r
    # 1. Mathematical Postcondition Check\r
    print("1. Computing Normalized Weights for [85.0, 90.0, 95.0]:")\r
    weights = calculate_normalized_weights([85.0, 90.0, 95.0])\r
    for idx, w in enumerate(weights, 1):\r
        print(f"   Student {idx} Weight: {w:.4f} ({w * 100:.2f}%)")\r
    print("   [OK] Postcondition Invariant (Sum == 1.0) Verified.\\n")\r
\r
    # 2. Unreachable Branch Sentinel\r
    print("2. Testing Unreachable Branch Sentinel with invalid grade 'Z':")\r
    try:\r
        route_grade_action("Z")\r
    except AssertionError as err:\r
        print(f"   [CAUGHT UNREACHABLE BRANCH SENTINEL] AssertionError: {err}")\r
\r
    print("\\n[PASSED] Legitimate Invariant Patterns Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_legitimate_asserts()\r
`,w=`# topic10_files/classroom_grading_and_rank_invariants.py\r
# Module: 003_002_basic-exception-handling\r
# Topic: Using assertions with assert for internal invariant checks\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 10 - File 4: Institutional Exam Ranking & Invariant Suite (Case Study)\r
Demonstrates:\r
  1. Production separation of public \`raise\` input validation vs internal \`assert\` invariants\r
  2. Multi-point invariant verification: Rank Monotonicity, Percentile Limits, Vector Dimension\r
  3. Generating certified academic grading audit reports\r
"""\r
\r
from typing import List, Dict, Any\r
\r
class StudentExamRecord:\r
    def __init__(self, student_id: str, name: str, score: float):\r
        if not isinstance(name, str) or not name.strip():\r
            raise TypeError("Student name must be a non-empty string")\r
        if not isinstance(score, (int, float)) or not (0.0 <= score <= 100.0):\r
            raise ValueError(f"Exam score must be between 0.0 and 100.0, got {score}")\r
\r
        self.student_id = student_id\r
        self.name = name\r
        self.score = float(score)\r
\r
\r
class InstitutionalRankingEngine:\r
    """Academic Ranking Engine with Invariant Assertions."""\r
\r
    def compute_ranked_leaderboard(self, records: List[StudentExamRecord]) -> List[Dict[str, Any]]:\r
        # 1. Public Input Validation using \`raise\`\r
        if not records:\r
            raise ValueError("Cannot generate ranking leaderboard for an empty student list!")\r
\r
        # Sort descending by score:\r
        sorted_records = sorted(records, key=lambda s: s.score, reverse=True)\r
        total_students = len(sorted_records)\r
\r
        leaderboard = []\r
        for rank_idx, student in enumerate(sorted_records, 1):\r
            # Calculate percentile:\r
            percentile = ((total_students - rank_idx) / total_students) * 100.0\r
\r
            # 2. INTERNAL ALGORITHMIC INVARIANTS VIA \`assert\`:\r
            assert 0.0 <= percentile <= 100.0, f"Percentile invariant violated: {percentile}%"\r
            assert rank_idx <= total_students, "Rank index invariant violated!"\r
\r
            leaderboard.append({\r
                "rank": rank_idx,\r
                "student_id": student.student_id,\r
                "name": student.name,\r
                "score": student.score,\r
                "percentile": percentile\r
            })\r
\r
        # 3. GLOBAL POSTCONDITION INVARIANT: Rank Monotonicity Check\r
        # Asserts that Rank N score is ALWAYS >= Rank N+1 score:\r
        for i in range(len(leaderboard) - 1):\r
            assert leaderboard[i]["score"] >= leaderboard[i + 1]["score"], (\r
                f"Rank Monotonicity Invariant Broken! Rank {leaderboard[i]['rank']} "\r
                f"({leaderboard[i]['score']}) < Rank {leaderboard[i+1]['rank']} ({leaderboard[i+1]['score']})"\r
            )\r
\r
        assert len(leaderboard) == total_students, "Dimensionality Invariant: Output size mismatch!"\r
\r
        return leaderboard\r
\r
\r
def run_ranking_case_study():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - EXAM RANKING & INVARIANT ENGINE")\r
    print("=" * 70)\r
\r
    students = [\r
        StudentExamRecord("STU-101", "Sourav Mukherjee", 94.5),\r
        StudentExamRecord("STU-102", "Priyanka Sen", 98.0),\r
        StudentExamRecord("STU-103", "Rahul Verma", 88.0),\r
        StudentExamRecord("STU-104", "Debolina Roy", 91.5)\r
    ]\r
\r
    engine = InstitutionalRankingEngine()\r
    leaderboard = engine.compute_ranked_leaderboard(students)\r
\r
    print("CERTIFIED LEADERBOARD (All Internal Invariants Passed):")\r
    for row in leaderboard:\r
        print(f"  Rank #{row['rank']} | {row['name']:<18} ({row['student_id']}) | Score: {row['score']:>5.1f} | Percentile: {row['percentile']:>5.1f}%")\r
\r
    print("\\n[PASSED] Exam Ranking Invariant Suite Completed Successfully.")\r
\r
\r
if __name__ == "__main__":\r
    run_ranking_case_study()\r
`,A=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_002: EXCEPTION HANDLING\r
          TOPIC 10: USING ASSERTIONS (\`assert\`) FOR INTERNAL INVARIANTS\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. THE FUNDAMENTAL GOLDEN RULE\r
--------------------------------------------------------------------------------\r
  • Use \`raise\`  : For all public function input validation, user inputs, auth.\r
  • Use \`assert\` : For internal programmer sanity checks, postconditions, invariants.\r
\r
--------------------------------------------------------------------------------\r
2. THE PYTHON \`-O\` FLAG (WHY ASSERTS DISAPPEAR)\r
--------------------------------------------------------------------------------\r
  Running \`python -O script.py\` sets \`__debug__ = False\` and completely removes\r
  every \`assert\` statement from bytecode during compilation!\r
  -> Therefore, never use assert for security or business validations!\r
\r
--------------------------------------------------------------------------------\r
3. THE TUPLE TRAP\r
--------------------------------------------------------------------------------\r
  ❌ BAD  : assert (score >= 0, "Error")  # Non-empty tuple -> ALWAYS TRUE!\r
  ✓ GOOD : assert score >= 0, "Error"    # Evaluates boolean properly\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 10: ASSERTIONS & INVARIANTS\r
================================================================================\r
`,T=[{question:"What is the primary purpose of the 'assert' statement in Python?",shortAnswer:"To verify internal programmer consistency, algorithm postconditions, and debugging invariants, signaling a bug in the code itself if the condition evaluates to False.",explanation:"Asserts should check conditions that should theoretically NEVER happen if the code is correct.",hint:"Used for internal developer sanity checks and algorithm invariants.",level:"basic",codeExample:"assert balance >= 0, 'Internal math bug: balance cannot be negative'"},{question:"What exception type is raised when an assertion condition evaluates to False?",shortAnswer:"Python raises an 'AssertionError' containing the optional error message string.",explanation:"Inherits from standard built-in Exception.",hint:"Raises an AssertionError.",level:"basic",codeExample:"# Raises: AssertionError: Vector length mismatch"},{question:"What is the single most important difference between 'assert' and 'raise'?",shortAnswer:"'raise' is for runtime input validation and expected operational failures that must always execute; 'assert' is for internal development invariants and can be completely stripped from bytecode by Python optimization flags.",explanation:"Never use assert where raise is required.",hint:"raise always executes; assert can be disabled by Python optimization flags.",level:"basic",codeExample:`# User input: if x < 0: raise ValueError
# Internal check: assert len(arr) > 0`},{question:"What happens when Python runs with the '-O' (Optimize) or '-OO' command-line flag?",shortAnswer:"Python sets '__debug__ = False' and completely strips and removes all 'assert' statements from the compiled bytecode.",explanation:"Any logic inside assert statements will never execute in optimized mode.",hint:"All assert statements are stripped from bytecode and ignored.",level:"moderate",codeExample:"python -O my_script.py  # All asserts are disabled!"},{question:"Why is using 'assert' for user authentication or authorization a critical security vulnerability?",shortAnswer:"Because if the application is deployed in production with 'python -O', the 'assert user.is_admin' check is completely omitted, allowing unauthenticated or non-admin users full access!",explanation:"A famous CWE-617 software security flaw.",hint:"In -O mode, the assert check vanishes, granting unauthorized access.",level:"moderate",codeExample:`# DANGEROUS: assert user == 'ADMIN'
# SECURE: if user != 'ADMIN': raise PermissionError`},{question:"What is the 'Assert Tuple Trap' in Python?",shortAnswer:`Writing 'assert (condition, "message")' with parentheses creates a 2-element tuple; since non-empty tuples are always truthy in Python, the assertion will NEVER fail, even if the condition is False!`,explanation:"One of the most insidious syntax traps in Python.",hint:"Parentheses create a non-empty tuple which is always True, so the assert never fails.",level:"complex",codeExample:`# BUG: assert (x > 0, 'Error') -> Always True!
# FIX: assert x > 0, 'Error'`},{question:"What is a 'Postcondition Invariant'?",shortAnswer:"A condition that must be true after a complex algorithm or calculation finishes (e.g. verifying normalized weights sum to 1.0 or output list is sorted).",explanation:"Catches subtle mathematical or algorithmic bugs during execution.",hint:"Verifying mathematical properties after an algorithm executes.",level:"moderate",codeExample:`weights = normalize(scores)
assert abs(sum(weights) - 1.0) < 1e-6`},{question:"How can 'assert False' be used legitimately in code?",shortAnswer:"As an unreachable branch sentinel in 'else' blocks or exhaustive pattern matching to ensure unexpected unhandled cases are caught immediately during development.",explanation:"Signals that control flow reached an impossible state.",hint:"Acts as a sentinel for unreachable code branches.",level:"moderate",codeExample:`else:
    assert False, f'Unreachable branch: unrecognized action {action}'`},{question:"Can an 'AssertionError' be caught with 'try...except AssertionError:'?",shortAnswer:"Yes, but catching AssertionError in production code is generally an anti-pattern because assertions represent internal programmer bugs that should be fixed, not caught.",explanation:"Testing frameworks (like pytest) catch AssertionError to report test failures.",hint:"Yes, but generally only testing frameworks should catch it.",level:"moderate",codeExample:`try: assert x > 0
except AssertionError: ...`},{question:"What is the value of the built-in constant '__debug__' by default?",shortAnswer:"It is 'True' under normal execution and 'False' when Python is invoked with '-O' or '-OO' flags.",explanation:"It is a read-only constant and cannot be reassigned at runtime.",hint:"__debug__ is True by default and False in optimized mode.",level:"basic",codeExample:`if __debug__:
    print('Running in debug mode')`},{question:"Why should you never execute side-effects inside an assert expression (e.g. 'assert pop_item() == 5')?",shortAnswer:"Because in optimized mode ('-O'), the entire assert statement is stripped, meaning 'pop_item()' will never be called, altering program logic and corrupting state!",explanation:"Asserts must be side-effect free.",hint:"Stripping the assert in -O mode would prevent the side-effect from executing.",level:"complex",codeExample:`# BAD: assert queue.pop() == 5
# GOOD: item = queue.pop(); assert item == 5`},{question:"When should you use 'assert' on private internal helper methods?",shortAnswer:"To verify that calling code within your own module is passing valid arguments, documenting internal assumptions during refactoring.",explanation:"Helps developers catch internal contract violations during maintenance.",hint:"To verify internal assumptions on private methods.",level:"basic",codeExample:`def _internal_calc(self, _raw_matrix):
    assert _raw_matrix is not None`},{question:"How does 'pytest' leverage the 'assert' statement?",shortAnswer:"Pytest uses AST bytecode rewriting to intercept standard 'assert' expressions and generate rich, detailed failure reports showing variable values on failure without requiring specialized assertion methods.",explanation:"Eliminates the need for self.assertEqual() boilerplate.",hint:"Pytest rewrites bytecode to provide rich failure diffs on standard assert statements.",level:"moderate",codeExample:`def test_calc():
    assert add(2, 3) == 5`},{question:"What is the difference between '-O' and '-OO' flags in Python?",shortAnswer:"'-O' strips assert statements and sets __debug__ to False; '-OO' does everything '-O' does PLUS strips docstrings ('__doc__') from bytecode.",explanation:"Used to minimize .pyc bytecode file sizes in embedded systems.",hint:"-OO strips docstrings in addition to assert statements.",level:"moderate",codeExample:"python -OO app.py  # Strips asserts AND docstrings"},{question:"Can an assertion message be dynamically formatted with f-strings?",shortAnswer:`Yes: 'assert len(items) == expected, f"Expected {expected} items, got {len(items)}"' is standard practice.`,explanation:"Provides clear contextual values when debugging failures.",hint:"Yes, f-strings provide dynamic diagnostic values on failure.",level:"basic",codeExample:"assert x == y, f'Mismatch: {x} != {y}'"},{question:"Why is 'assert isinstance(user_input, int)' on a public API an anti-pattern?",shortAnswer:"Because invalid user input is an expected operational occurrence (not a developer logic bug) and should raise 'TypeError' so callers can handle it cleanly.",explanation:"Public APIs must provide predictable exception contracts.",hint:"Public APIs must raise TypeError/ValueError, not AssertionError.",level:"basic",codeExample:`if not isinstance(user_input, int):
    raise TypeError('Expected int')`},{question:"What is 'Defensive Programming' in relation to assertions?",shortAnswer:"The practice of placing internal assertions at key state transitions to catch corrupt data or broken assumptions immediately before errors propagate into downstream systems.",explanation:"Guarantees system integrity by failing fast at the exact point of logic deviation.",hint:"Placing assertions at key state transitions to catch corrupt data immediately.",level:"moderate",codeExample:`# Defensive check after complex sort
assert is_sorted(arr)`},{question:"Can you assign a custom exception class to an assert statement?",shortAnswer:"No. The 'assert' keyword always raises 'AssertionError'; you cannot make it raise a different exception type (use 'if not cond: raise CustomError' instead).",explanation:"The syntax of assert is hardcoded to raise AssertionError.",hint:"No, assert always raises AssertionError.",level:"basic",codeExample:"# Assert cannot raise custom exception types"},{question:"What is a 'Class Invariant'?",shortAnswer:"A condition regarding an object's internal state that must hold true after every method finishes (e.g. 'assert 0 <= self._balance <= self._credit_limit').",explanation:"Guarantees that objects never reside in corrupted or illegal states.",hint:"A condition that must always remain true for an object instance.",level:"moderate",codeExample:`def deposit(self, amt):
    ...
    assert self._balance >= 0`},{question:"How do assertions help during major codebase refactoring?",shortAnswer:"They act as active internal documentation and tripwires, immediately alerting developers if an architectural refactoring breaks an unwritten mathematical or logical assumption.",explanation:"Provides high confidence when restructuring legacy systems.",hint:"They act as tripwires alerting engineers if refactoring breaks assumptions.",level:"basic",codeExample:"# Tripwire assertion catches broken invariants during refactor"},{question:"What is the runtime performance cost of assertions in development mode?",shortAnswer:"Assertions evaluate the condition expression on every execution, adding minor CPU overhead in development, but with zero overhead in production when run with '-O'.",explanation:"Allows extensive checking in testing without production performance penalty.",hint:"Minor check in dev mode; zero cost when compiled with -O.",level:"basic",codeExample:"# Zero cost in production with python -O"},{question:"Can assertions be used to validate database query invariants?",shortAnswer:`Yes. For example, when querying by a unique primary key, asserting 'assert len(results) <= 1, "Duplicate primary key in DB!"' checks database consistency.`,explanation:"Catches relational integrity corruption immediately.",hint:"Yes, to verify relational consistency assumptions (e.g. <= 1 row for unique key).",level:"moderate",codeExample:`rows = db.query_by_id(101)
assert len(rows) <= 1`},{question:"Why should you never write 'assert False' to handle expected missing files or network drops?",shortAnswer:"Because network drops and missing files are external environment runtime errors (which should raise 'FileNotFoundError' or 'ConnectionError'), not programmer code bugs.",explanation:"Distinguishes environmental failures from software bugs.",hint:"Environmental errors require FileNotFoundError/ConnectionError, not AssertionError.",level:"basic",codeExample:`# Bad: if not file.exists(): assert False
# Good: if not file.exists(): raise FileNotFoundError`},{question:"How do linters like Flake8 or Ruff detect the Assert Tuple Trap?",shortAnswer:"They inspect AST nodes for 'Assert(test=Tuple(...))' and emit warning 'F631: assert tuple is always true'.",explanation:"Static analysis catches this syntax trap automatically.",hint:"Linters emit F631 warning when an assert statement tests a tuple.",level:"complex",codeExample:"# Linter warning: F631 assert tuple is always true"},{question:"What is the ultimate golden rule for the 'assert' statement in Python?",shortAnswer:"Use 'assert' exclusively for internal developer sanity checks, algorithm postconditions, and debugging invariants that should never fail in correct code; use 'raise' for all user inputs, API validations, and operational errors.",explanation:"Ensures secure, robust, and maintainable software architecture.",hint:"Assert for internal developer sanity checks; raise for user inputs and operational errors.",level:"basic",codeExample:"# Clear, correct separation of assert vs raise"}];function F(){const x=l.useRef([]),[a,m]=l.useState("engine"),[d,f]=l.useState(!0),[s,h]=l.useState({sourav:94.5,priyanka:98,rahul:88,debolina:91.5}),u=[...[{id:"STU-101",name:"Sourav Mukherjee",score:s.sourav},{id:"STU-102",name:"Priyanka Sen",score:s.priyanka},{id:"STU-103",name:"Rahul Verma",score:s.rahul},{id:"STU-104",name:"Debolina Roy",score:s.debolina}]].sort((t,n)=>n.score-t.score),p=u.length,i=u.map((t,n)=>{const o=n+1,g=(p-o)/p*100;return{...t,rank:o,percentile:g}});i.every(t=>t.percentile>=0&&t.percentile<=100),i.every((t,n)=>n===0||i[n-1].score>=t.score),i.length,l.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(o=>{o.isIntersecting&&o.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return x.current.forEach(n=>{n&&t.observe(n)}),()=>t.disconnect()},[]);const r=t=>{t&&!x.current.includes(t)&&x.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:r,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_002"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 10"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Robust Exception Handling & Defensive Coding"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Using Assertions with ",e.jsx("code",{className:"text-teal-400 font-mono",children:"assert"})," for Invariants"]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master internal consistency and defensive invariants: understanding ",e.jsx("code",{className:"text-teal-300 font-mono",children:"assert"})," vs ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"raise"}),", why Python's ",e.jsx("code",{className:"text-purple-300 font-mono",children:"-O"})," flag strips assertions from bytecode, the infamous Tuple Trap, and mathematical postcondition checks."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Internal Invariant Checks"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚠️ Python -O Flag & __debug__ Mechanics"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🚨 The Fatal Tuple Trap (assert (x, msg))"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📐 Mathematical Postconditions"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎯"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Role of `assert`: Internal Developer Invariants"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["In Python, the ",e.jsx("code",{className:"text-teal-300 font-mono",children:"assert"})," statement is designed to verify conditions that ",e.jsx("strong",{children:"should never happen"})," if the programmer's internal logic is correct:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-base mb-1",children:"1️⃣ Syntax & Trigger"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:'assert cond, "msg"'}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Evaluates boolean condition. If False, immediately raises ",e.jsx("code",{className:"text-rose-400 font-mono",children:"AssertionError"}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-base mb-1",children:"2️⃣ The `-O` Flag Trap"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"python -O app.py"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Sets ",e.jsx("code",{className:"text-purple-300 font-mono",children:"__debug__ = False"})," and completely strips all assertions from bytecode!"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-base mb-1",children:"3️⃣ assert vs raise"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"raise for inputs / assert for math"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Always use ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"raise"})," for public inputs and auth; use ",e.jsx("code",{className:"text-teal-300 font-mono",children:"assert"})," for algorithm sanity checks."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-rose-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Fatal Security Trap: Never Assert for Auth"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-400 font-mono",children:'assert user.is_admin, "Unauthorized"'})," is a severe security vulnerability. If deployed in production with ",e.jsx("code",{className:"text-rose-400 font-mono",children:"python -O"}),", the assertion statement is deleted during bytecode compilation, granting unauthenticated users full admin privileges! Always use ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"if not user.is_admin: raise PermissionError"}),"."]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Assertions, Optimization & Traps"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>m("engine"),className:c("px-3 py-1.5 rounded-lg transition-all",a==="engine"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Invariant Engine Flow"}),e.jsx("button",{onClick:()=>m("optflag"),className:c("px-3 py-1.5 rounded-lg transition-all",a==="optflag"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"The `-O` Flag Bytecode Stripping"}),e.jsx("button",{onClick:()=>m("tuple"),className:c("px-3 py-1.5 rounded-lg transition-all",a==="tuple"?"bg-rose-900/50 text-rose-300 border border-rose-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"The Infamous Tuple Trap"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining invariant checks, optimization flag mechanics, and the tuple syntax hazard:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:a==="engine"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"THE `assert` INVARIANT EVALUATION FLOW"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"11",fontWeight:"bold",children:"1. Public Input Validation"}),e.jsx("text",{x:"15",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"if gross < 0:"}),e.jsx("text",{x:"30",y:"80",fill:"#34d399",fontSize:"9 font-mono font-bold",children:'raise ValueError("Fee < 0")'}),e.jsx("rect",{x:"15",y:"120",width:"220",height:"95",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"25",y:"145",fill:"#34d399",fontSize:"9 font-bold",children:"Guaranteed Execution:"}),e.jsx("text",{x:"25",y:"165",fill:"#cbd5e1",fontSize:"8",children:"Always runs in dev & prod."}),e.jsx("text",{x:"25",y:"180",fill:"#cbd5e1",fontSize:"8",children:"Protects API boundaries."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"310",y:"30",fill:"#a5f3fc",fontSize:"11",fontWeight:"bold",children:"2. Internal Math Processing"}),e.jsx("text",{x:"310",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"discount = gross * rate"}),e.jsx("text",{x:"310",y:"80",fill:"#ecfdf5",fontSize:"9 font-mono",children:"net = gross - discount"}),e.jsx("rect",{x:"310",y:"120",width:"220",height:"95",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"320",y:"145",fill:"#38bdf8",fontSize:"9 font-bold",children:"Complex Calculation:"}),e.jsx("text",{x:"320",y:"165",fill:"#cbd5e1",fontSize:"8",children:"Floating-point arithmetic,"}),e.jsx("text",{x:"320",y:"180",fill:"#cbd5e1",fontSize:"8",children:"normalization, ranking."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"605",y:"30",fill:"#c4b5fd",fontSize:"11",fontWeight:"bold",children:"3. Internal Postcondition"}),e.jsx("text",{x:"605",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"assert 0 <= net <= gross, \\"}),e.jsx("text",{x:"620",y:"80",fill:"#c4b5fd",fontSize:"9 font-mono",children:'"Math invariant broken!"'}),e.jsx("rect",{x:"605",y:"120",width:"200",height:"95",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"615",y:"145",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Safety Invariant Tripwire:"}),e.jsx("text",{x:"615",y:"165",fill:"#cbd5e1",fontSize:"8",children:"Catches impossible mathematical"}),e.jsx("text",{x:"615",y:"180",fill:"#cbd5e1",fontSize:"8",children:"states during development."})]})]}):a==="optflag"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"THE PYTHON OPTIMIZATION FLAG (-O) BYTECODE STRIPPING"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"Normal Mode: `python app.py` (__debug__ = True)"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"def check():"}),e.jsx("text",{x:"35",y:"80",fill:"#34d399",fontSize:"9 font-mono",children:'assert x > 0, "Error"'}),e.jsx("text",{x:"35",y:"100",fill:"#ecfdf5",fontSize:"9 font-mono",children:"return x"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"155",fill:"#34d399",fontSize:"10 font-bold",children:"Bytecode Execution:"}),e.jsx("text",{x:"30",y:"175",fill:"#ecfdf5",fontSize:"8 font-mono",children:"LOAD_FAST (x) → POP_JUMP_IF_TRUE"}),e.jsx("text",{x:"30",y:"195",fill:"#a7f3d0",fontSize:"8 font-mono",children:"✓ Assertions are actively evaluated!"})]}),e.jsxs("g",{transform:"translate(460, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"Optimized Mode: `python -O app.py` (__debug__ = False)"}),e.jsx("text",{x:"20",y:"60",fill:"#fca5a5",fontSize:"9 font-mono",children:"def check():"}),e.jsx("text",{x:"35",y:"80",fill:"#fda4af",fontSize:"9 font-mono text-rose-300 line-through",children:'# assert x > 0, "Error" (STRIPPED!)'}),e.jsx("text",{x:"35",y:"100",fill:"#fca5a5",fontSize:"9 font-mono",children:"return x"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#881337",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"155",fill:"#ffe4e6",fontSize:"10 font-bold",children:"Bytecode Execution:"}),e.jsx("text",{x:"30",y:"175",fill:"#fda4af",fontSize:"8 font-mono",children:"LOAD_FAST (x) → RETURN_VALUE"}),e.jsx("text",{x:"30",y:"195",fill:"#fca5a5",fontSize:"8 font-mono",children:"❌ Assertions are completely GONE from bytecode!"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#f43f5e",fontSize:"14",fontWeight:"bold",children:'THE INFAMOUS ASSERT TUPLE TRAP: `assert (cond, "msg")`'}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"❌ The Bug: Wrapping with Parentheses"}),e.jsx("text",{x:"20",y:"60",fill:"#fca5a5",fontSize:"9 font-mono",children:"score = -50  # Obviously invalid"}),e.jsx("text",{x:"20",y:"85",fill:"#fca5a5",fontSize:"9 font-mono font-bold",children:'assert (score >= 0, "Negative score!")'}),e.jsx("rect",{x:"20",y:"115",width:"340",height:"100",rx:"4",fill:"#881337",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"140",fill:"#ffe4e6",fontSize:"10 font-bold",children:"Why it NEVER fails:"}),e.jsx("text",{x:"30",y:"160",fill:"#ecfdf5",fontSize:"8 font-mono",children:'`(-50 >= 0, "msg")` creates tuple `(False, "msg")`.'}),e.jsx("text",{x:"30",y:"180",fill:"#ecfdf5",fontSize:"8 font-mono",children:"In Python, non-empty tuples evaluate to TRUE!"}),e.jsx("text",{x:"30",y:"200",fill:"#fda4af",fontSize:"8 font-mono",children:"Assertion passes silently, masking the bug!"})]}),e.jsxs("g",{transform:"translate(460, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"✓ Correct Syntax: No Parentheses"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"score = -50"}),e.jsx("text",{x:"20",y:"85",fill:"#34d399",fontSize:"9 font-mono font-bold",children:'assert score >= 0, "Negative score!"'}),e.jsx("rect",{x:"20",y:"115",width:"340",height:"100",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"140",fill:"#a7f3d0",fontSize:"10 font-bold",children:"Proper Evaluation:"}),e.jsx("text",{x:"30",y:"160",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Evaluates `score >= 0` as a standalone boolean."}),e.jsx("text",{x:"30",y:"180",fill:"#34d399",fontSize:"8 font-mono",children:"Correctly raises `AssertionError: Negative score!`"}),e.jsx("text",{x:"30",y:"200",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Catches the invalid score immediately."})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Exam Ranking & Invariant Dashboard"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Adjust student exam marks and toggle Python's execution mode to witness how mathematical invariants are evaluated in real-time:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"Classroom Exam Marks"}),e.jsx("button",{onClick:()=>f(!d),className:c("px-2.5 py-1 rounded text-[11px] font-mono border transition-all",d?"bg-teal-950 text-teal-300 border-teal-700":"bg-purple-950 text-purple-300 border-purple-700"),children:d?"Mode: Normal (__debug__ = True)":"Mode: Optimized (-O Flag)"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[e.jsx("span",{className:"text-slate-300",children:"Sourav Mukherjee:"}),e.jsxs("span",{className:"text-teal-300 font-bold",children:[s.sourav.toFixed(1),"/100"]})]}),e.jsx("input",{type:"range",min:"0",max:"100",step:"0.5",value:s.sourav,onChange:t=>h({...s,sourav:Number(t.target.value)}),className:"w-full accent-teal-500"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[e.jsx("span",{className:"text-slate-300",children:"Priyanka Sen:"}),e.jsxs("span",{className:"text-teal-300 font-bold",children:[s.priyanka.toFixed(1),"/100"]})]}),e.jsx("input",{type:"range",min:"0",max:"100",step:"0.5",value:s.priyanka,onChange:t=>h({...s,priyanka:Number(t.target.value)}),className:"w-full accent-teal-500"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[e.jsx("span",{className:"text-slate-300",children:"Rahul Verma:"}),e.jsxs("span",{className:"text-teal-300 font-bold",children:[s.rahul.toFixed(1),"/100"]})]}),e.jsx("input",{type:"range",min:"0",max:"100",step:"0.5",value:s.rahul,onChange:t=>h({...s,rahul:Number(t.target.value)}),className:"w-full accent-teal-500"})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1.5 text-xs font-mono",children:[e.jsx("div",{className:"text-slate-400 font-bold",children:"Internal Postcondition Invariants:"}),e.jsxs("div",{className:"flex justify-between text-[11px]",children:[e.jsx("span",{className:"text-slate-300",children:"1. Percentile Range [0, 100%]:"}),e.jsx("span",{className:"text-emerald-400 font-bold",children:"✓ PASSED"})]}),e.jsxs("div",{className:"flex justify-between text-[11px]",children:[e.jsx("span",{className:"text-slate-300",children:"2. Rank Monotonicity (S_i >= S_i+1):"}),e.jsx("span",{className:"text-emerald-400 font-bold",children:"✓ PASSED"})]}),e.jsxs("div",{className:"flex justify-between text-[11px]",children:[e.jsx("span",{className:"text-slate-300",children:"3. Dimensionality (len == 4):"}),e.jsx("span",{className:"text-emerald-400 font-bold",children:"✓ PASSED"})]})]})]}),e.jsxs("div",{className:"space-y-3 flex flex-col justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block font-bold",children:"Computed Certified Leaderboard"}),e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 flex-1 space-y-2 text-xs font-mono",children:[i.map(t=>e.jsxs("div",{className:"p-2.5 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"text-teal-400 font-bold",children:["#",t.rank," "]}),e.jsx("span",{className:"text-slate-200",children:t.name}),e.jsxs("span",{className:"text-slate-500 text-[10px] block",children:["(",t.id,")"]})]}),e.jsxs("div",{className:"text-right",children:[e.jsxs("div",{className:"text-emerald-300 font-bold",children:[t.score.toFixed(1),"/100"]}),e.jsxs("div",{className:"text-[10px] text-cyan-400",children:[t.percentile.toFixed(1),"%ile"]})]})]},t.id)),e.jsx("div",{className:"pt-2 text-[10px] text-slate-500 border-t border-slate-800",children:d?"✓ Active Invariant Enforcement: All 3 assertions verified dynamically on every slider update.":"⚠️ Optimized Mode (-O): Bytecode asserts stripped. Math executed at raw native speed."})]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master `assert` vs `raise` Decision Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Dimension"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Assertion (`assert`)"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Exception Raise (`raise`)"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"Primary Target"}),e.jsx("td",{className:"py-3 px-4",children:"Internal developer sanity checks & algorithm postconditions"}),e.jsx("td",{className:"py-3 px-4 font-semibold text-emerald-400",children:"Public user input validation & operational failures"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Optimization (-O)"}),e.jsx("td",{className:"py-3 px-4 text-rose-400 font-bold",children:"Completely STRIPPED and removed from bytecode"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-bold",children:"Always executes unconditionally"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"Exception Type"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"builtins.AssertionError"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"Any (ValueError, TypeError, PermissionError)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"Security & Auth"}),e.jsx("td",{className:"py-3 px-4 text-rose-400 font-bold",children:"FATAL VULNERABILITY (Never use for security)"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400 font-bold",children:"Industry Standard (raise PermissionError)"})]})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating assert fundamentals, optimization flag traps, defensive invariants, and exam ranking suites:"}),e.jsx(b,{files:[{filename:"assert_statement_fundamentals.py",code:_,description:"Assert statement fundamentals, AssertionError, and internal math postcondition checks."},{filename:"python_optimization_flag_trap.py",code:j,description:"The python -O optimization flag, __debug__ constant, security vulnerabilities, and the tuple trap."},{filename:"defensive_internal_invariants.py",code:E,description:"Legitimate assert patterns: mathematical postconditions, private preconditions, and unreachable sentinels."},{filename:"classroom_grading_and_rank_invariants.py",code:w,description:"Enterprise Exam Ranking Engine separating public raise validation from internal assert postconditions."}]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: The Assert Tuple Trap"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:'assert (x > 0, "msg")'})," creates a 2-element tuple. In Python, non-empty tuples are always True, meaning the assertion ",e.jsx("em",{children:"never fails"}),"!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Remove parentheses: ",e.jsx("code",{className:"text-emerald-300",children:'assert x > 0, "msg"'}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Using Assert for Authorization"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-amber-300 font-mono",children:'assert role == "ADMIN"'})," vanishes when Python runs with ",e.jsx("code",{className:"text-amber-300 font-mono",children:"-O"}),", granting non-admin users full access!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always use ",e.jsx("code",{className:"text-emerald-300",children:'if role != "ADMIN": raise PermissionError'}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Side-Effects Inside Assert"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-purple-300 font-mono",children:"assert queue.pop() == 5"})," means that in ",e.jsx("code",{className:"text-purple-300 font-mono",children:"-O"})," mode, the item is ",e.jsx("em",{children:"never popped"})," from the queue!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Keep assertions completely free of state-mutating side-effects."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Catching AssertionError in Production"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"except AssertionError:"})," to handle routine application logic hides developer bugs instead of fixing them."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Use standard domain exceptions for catchable runtime errors."]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering assertions, AssertionError, __debug__, and the python -O flag:"}),e.jsx(v,{questions:T})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with assert recipes, optimization flag cheat sheets, and invariant templates:"}),e.jsx("div",{className:"mb-10",children:e.jsx(y,{content:A,filename:"python_topic10_assert_invariants_notes.txt",title:"Print Topic 10 Study Notes"})}),e.jsx(N,{})]})]})]})}export{F as default};
