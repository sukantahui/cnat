import{b as a,j as e,bg as s}from"./vendor-react-core-Doz9nIC6.js";import{P as u}from"./PythonFileLoader-hCi5osN-.js";import{P as b}from"./PlainTextPrint-C08xhKA4.js";import{F as g}from"./FAQTemplate-CkSqDH4B.js";import{T as y}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const v=`# topic2_files/readability_metrics_and_zen_of_python.py\r
# Module: 003_005_advance-comprehensions\r
# Topic: Readability guidelines: When to use comprehensions vs loops\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 2 - File 1: Readability Guidelines & The Zen of Python\r
Demonstrates:\r
  1. The Zen of Python rules: "Readability counts", "Flat is better than nested"\r
  2. The 2-Clause rule: when comprehensions excel vs when they become cryptic line noise\r
  3. The Side-Effect Anti-Pattern: why comprehensions should NEVER be used solely for side-effects\r
"""\r
\r
from typing import List, Dict, Any\r
\r
def demonstrate_readability_guidelines():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - COMPREHENSION READABILITY GUIDELINES")\r
    print("=" * 70)\r
\r
    students = [\r
        {"name": "Sourav", "score": 95, "fees_pending": 0},\r
        {"name": "Priyanka", "score": 88, "fees_pending": 5000},\r
        {"name": "Rahul", "score": 42, "fees_pending": 0},\r
        {"name": "Debolina", "score": 96, "fees_pending": 0}\r
    ]\r
\r
    # 1. EXCELLENT Comprehension (1 Loop + 1 Filter Guard): Clear, concise, idiomatic\r
    print("1. [GOOD] Clear, Idiomatic List Comprehension (High Readability):")\r
    honors_students = [s["name"] for s in students if s["score"] >= 90]\r
    print(f"   * Honors Students: {honors_students} (Zen: 'Simple is better than complex')\\n")\r
\r
    # 2. ANTI-PATTERN: Side-Effects in Comprehensions\r
    # DANGEROUS / BAD: [print(f"Audit: {s['name']}") for s in students]\r
    # Creates an unnecessary temporary list of [None, None, None, None] in RAM!\r
    print("2. [ANTI-PATTERN] Side-Effects in Comprehensions vs Clean Loop:")\r
    print("   * Bad Practice : [audit_log(s) for s in students] (Wastes RAM creating list of Nones)")\r
    print("   * Good Practice: for s in students: audit_log(s) (Clean procedural loop)\\n")\r
\r
    # Correct procedural loop for side-effects:\r
    print("   * Executing Clean Procedural Audit Loop:")\r
    for s in students:\r
        if s["fees_pending"] > 0:\r
            print(f"     [ALERT] Student {s['name']} has pending balance: INR {s['fees_pending']}")\r
\r
    # 3. ANTI-PATTERN: Over-Complex Monster Comprehension\r
    # Cryptic, hard to debug, unmaintainable:\r
    print("\\n3. [ANTI-PATTERN] Cryptic Monster Comprehensions (> 2 loops + nested ternary):")\r
    raw_matrix = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]\r
    # Overly complex single line:\r
    cryptic = [val * 2 if val % 2 == 0 else val * 3 for layer in raw_matrix for row in layer for val in row if val > 2]\r
    print(f"   * Cryptic Result: {cryptic}")\r
    print("   * Zen Warning: 'If the implementation is hard to explain, it's a bad idea.'")\r
\r
    print(r"""\r
Readability Threshold Invariants:\r
  1. Use Comprehensions when: Creating a new sequence via 1 loop and at most 1 simple filter.\r
  2. Use Procedural Loops when: Executing side-effects (I/O, logging, database writes),\r
     handling exceptions (try...except), or when logic exceeds 2 nested loop levels.\r
""")\r
    print("[PASSED] Readability Guidelines & Zen of Python Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_readability_guidelines()\r
`,N=`# topic2_files/refactoring_complex_comprehensions_to_loops.py\r
# Module: 003_005_advance-comprehensions\r
# Topic: Readability guidelines: When to use comprehensions vs loops\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 2 - File 2: Refactoring Complex Comprehensions to Readable Loops\r
Demonstrates:\r
  1. Systematic refactoring of 4-clause monster comprehensions into clean procedural loops\r
  2. Overcoming comprehension limitations: adding \`try...except\` exception handling\r
  3. Adding structured debug telemetry and intermediate audit variables\r
"""\r
\r
from typing import List, Dict, Any, Optional\r
\r
def demonstrate_refactoring_to_loops():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - REFACTORING COMPREHENSIONS TO READABLE LOOPS")\r
    print("=" * 70)\r
\r
    # Messy incoming API payload with missing keys and dirty strings\r
    raw_incoming_records = [\r
        {"id": "STU-101", "name": "Sourav", "marks": "95.5", "status": "active"},\r
        {"id": "STU-102", "name": "Priyanka", "marks": "INVALID_MARK", "status": "active"},\r
        {"id": "STU-103", "name": "Debolina", "marks": "96.0", "status": "active"},\r
        {"id": "STU-104", "name": "Rahul", "marks": None, "status": "inactive"}\r
    ]\r
\r
    # 1. ATTEMPTING MONSTER COMPREHENSION (BRITTLE & UNREADABLE):\r
    # Cannot handle float("INVALID_MARK") without crashing!\r
    print("1. Problem: Comprehensions Cannot Contain \`try...except\` Directly:")\r
    print("   * Trying \`[float(s['marks']) for s in raw_incoming_records]\` raises ValueError!\\n")\r
\r
    # 2. REFACTORED CLEAN PROCEDURAL LOOP (DEFENSIVE, READABLE, ROBUST):\r
    print("2. Refactored Procedural Loop with Defensive Exception Handling:")\r
    cleaned_roster: List[Dict[str, Any]] = []\r
    quarantined_count = 0\r
\r
    for s in raw_incoming_records:\r
        # Filter active students only\r
        if s.get("status") != "active":\r
            continue\r
\r
        raw_mark = s.get("marks")\r
        if raw_mark is None:\r
            quarantined_count += 1\r
            continue\r
\r
        try:\r
            score = float(raw_mark)\r
            cleaned_roster.append({\r
                "student_id": s["id"],\r
                "name": s["name"],\r
                "score": score,\r
                "grade": "EXCELLENT" if score >= 90 else "STANDARD"\r
            })\r
        except (ValueError, TypeError) as exc:\r
            print(f"   [DEFENSIVE INTERCEPT] Quarantined record {s['id']}: {exc}")\r
            quarantined_count += 1\r
\r
    print(f"\\n   * Cleaned Student Roster ({len(cleaned_roster)} Valid Records):")\r
    for r in cleaned_roster:\r
        print(f"     - [{r['student_id']}] {r['name']:<12} | Score: {r['score']:<5} | Grade: {r['grade']}")\r
    print(f"   * Total Quarantined Records: {quarantined_count}")\r
\r
    print(r"""\r
Refactoring Decision Matrix:\r
  - If your comprehension needs \`try...except\` -> Refactor to a \`for\` loop (or helper function).\r
  - If your comprehension needs intermediate debug \`print()\` -> Refactor to a \`for\` loop.\r
  - If your comprehension spans > 3 physical lines -> Refactor to a \`for\` loop.\r
""")\r
    print("[PASSED] Refactoring Complex Comprehensions to Loops Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_refactoring_to_loops()\r
`,_=`# topic2_files/memory_and_profiling_comprehensions_vs_generators.py\r
# Module: 003_005_advance-comprehensions\r
# Topic: Readability guidelines: When to use comprehensions vs loops\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 2 - File 3: Memory & Profiling: List Comprehensions vs Generator Expressions\r
Demonstrates:\r
  1. Heap memory consumption: Eager List Comprehension vs Lazy Generator Expression\r
  2. Measuring object byte sizes using \`sys.getsizeof()\`\r
  3. When to choose List Comprehensions (indexing, len, multiple passes) vs Generators (massive streams, sum/max)\r
"""\r
\r
import sys\r
import timeit\r
\r
def demonstrate_memory_and_profiling():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - MEMORY PROFILING: LIST COMP VS GENERATOR")\r
    print("=" * 70)\r
\r
    n_elements = 1_000_000\r
\r
    # 1. Memory Footprint Comparison:\r
    print(f"1. Memory Profiling on {n_elements:,} Elements:")\r
\r
    # Eager List Comprehension: Allocates all elements immediately in RAM\r
    eager_list = [x * 2 for x in range(n_elements)]\r
    list_mem_bytes = sys.getsizeof(eager_list)\r
    list_mem_mb = list_mem_bytes / (1024 * 1024)\r
\r
    # Lazy Generator Expression: Produces items one by one on demand\r
    lazy_gen = (x * 2 for x in range(n_elements))\r
    gen_mem_bytes = sys.getsizeof(lazy_gen)\r
\r
    print(f"   * Eager List Comprehension Memory : {list_mem_bytes:,} bytes (~{list_mem_mb:.2f} MB)")\r
    print(f"   * Lazy Generator Expression Memory : {gen_mem_bytes:,} bytes (Constant O(1) Memory!)")\r
    print(f"   * Memory Reduction Factor          : ~{list_mem_bytes // gen_mem_bytes:,}x less RAM!\\n")\r
\r
    # 2. Performance Comparison on Reductions (e.g. sum):\r
    print("2. Performance on Reductions (\`sum()\`):")\r
    t_list = timeit.timeit(lambda: sum([x * 2 for x in range(100_000)]), number=20)\r
    t_gen = timeit.timeit(lambda: sum(x * 2 for x in range(100_000)), number=20)\r
\r
    print(f"   * sum([list_comprehension]) : {t_list:.4f}s (Requires full memory allocation)")\r
    print(f"   * sum(generator_expression) : {t_gen:.4f}s (Streams directly into accumulator)")\r
\r
    print(r"""\r
Container Selection Invariants:\r
  - Choose LIST COMPREHENSION when: You need random access indexing (\`res[0]\`), \`len()\`,\r
    slicing, or multiple passes over the dataset.\r
  - Choose GENERATOR EXPRESSION when: You only need to iterate once, stream large files,\r
    or pass directly to reducing functions like \`sum()\`, \`max()\`, \`min()\`, or \`any()\`.\r
""")\r
    print("[PASSED] Memory & Profiling Comprehensions vs Generators Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_memory_and_profiling()\r
`,j=`# topic2_files/institutional_admission_roster_cleaner_suite.py\r
# Module: 003_005_advance-comprehensions\r
# Topic: Readability guidelines: When to use comprehensions vs loops\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 2 - File 4: Institutional Admission Roster Cleaner & Code Review Suite (Case Study)\r
Demonstrates:\r
  1. Strategic balance: using comprehensions for clean transformations and procedural loops for defensive I/O\r
  2. Automatic readability and code quality scoring for student data pipelines\r
  3. Handling dirty financial and academic payloads with graceful degradation\r
"""\r
\r
from decimal import Decimal, InvalidOperation\r
from typing import Dict, Any, List, Tuple\r
\r
class InstitutionalAdmissionCleaner:\r
    """Production data pipeline demonstrating idiomatic comprehension vs loop decisions."""\r
\r
    def __init__(self, raw_applications: List[Dict[str, Any]]):\r
        self.raw_applications = raw_applications\r
        self.approved_roster: List[Dict[str, Any]] = []\r
        self.quarantined_records: List[Dict[str, Any]] = []\r
\r
    def clean_and_audit(self) -> Dict[str, Any]:\r
        # Phase 1: Procedural Loop for defensive parsing, dirty type coercion, and error logging\r
        for raw in self.raw_applications:\r
            app_id = raw.get("app_id", "UNKNOWN")\r
            name = str(raw.get("name", "")).strip()\r
            course = str(raw.get("course", "")).strip().upper()\r
            fee_str = str(raw.get("fee_submitted", "0")).replace(",", "").strip()\r
\r
            if not name or len(name) < 3:\r
                self.quarantined_records.append({"app_id": app_id, "reason": "Invalid or missing name"})\r
                continue\r
\r
            try:\r
                fee = Decimal(fee_str)\r
                if fee < Decimal("10000.00"):\r
                    self.quarantined_records.append({"app_id": app_id, "reason": f"Fee {fee} below threshold"})\r
                    continue\r
\r
                self.approved_roster.append({\r
                    "app_id": app_id,\r
                    "name": name,\r
                    "course": course,\r
                    "fee": fee\r
                })\r
            except (InvalidOperation, ValueError) as exc:\r
                self.quarantined_records.append({"app_id": app_id, "reason": f"Corrupt fee format ({exc})"})\r
\r
        # Phase 2: Idiomatic Comprehensions for Pure Data Aggregations and Indexing (High Readability!)\r
        \r
        # 1. Set Comprehension: Extract unique approved courses\r
        unique_courses = {s["course"] for s in self.approved_roster}\r
\r
        # 2. Dict Comprehension: Course to approved student count map\r
        course_counts = {\r
            c: len([s for s in self.approved_roster if s["course"] == c])\r
            for c in unique_courses\r
        }\r
\r
        # 3. Generator Expression: Total revenue aggregation (O(1) memory)\r
        total_revenue = sum(s["fee"] for s in self.approved_roster)\r
\r
        # 4. List Comprehension: Extract scholarship candidates (Fee >= 30,000)\r
        scholarship_candidates = [\r
            s["name"] for s in self.approved_roster if s["fee"] >= Decimal("30000.00")\r
        ]\r
\r
        return {\r
            "total_submitted": len(self.raw_applications),\r
            "approved_count": len(self.approved_roster),\r
            "quarantined_count": len(self.quarantined_records),\r
            "total_revenue_inr": total_revenue,\r
            "unique_courses": list(unique_courses),\r
            "course_distribution": course_counts,\r
            "scholarship_eligible": scholarship_candidates\r
        }\r
\r
\r
def run_admission_cleaner_demo():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - INSTITUTIONAL ADMISSION CLEANER & AUDIT SUITE")\r
    print("=" * 70)\r
\r
    raw_data = [\r
        {"app_id": "APP-001", "name": "Sourav Mukherjee", "course": "py-ai", "fee_submitted": "28,500.00"},\r
        {"app_id": "APP-002", "name": "Priyanka Sen", "course": "ds-ml", "fee_submitted": "32,000.00"},\r
        {"app_id": "APP-003", "name": "Al", "course": "py-ai", "fee_submitted": "25000"},  # Name too short (< 3 chars)\r
        {"app_id": "APP-004", "name": "Debolina Roy", "course": "py-ai", "fee_submitted": "35,000.00"},\r
        {"app_id": "APP-005", "name": "Rahul Verma", "course": "web-dev", "fee_submitted": "INVALID_NUMBER"}  # Corrupt fee\r
    ]\r
\r
    cleaner = InstitutionalAdmissionCleaner(raw_data)\r
    report = cleaner.clean_and_audit()\r
\r
    print("1. Admission Pipeline Audit Report:")\r
    print(f"   * Total Applications Submitted: {report['total_submitted']}")\r
    print(f"   * Approved Applications       : {report['approved_count']}")\r
    print(f"   * Quarantined Applications    : {report['quarantined_count']}")\r
    print(f"   * Total Collected Revenue     : INR {report['total_revenue_inr']:,.2f}")\r
    print(f"   * Course Distribution         : {report['course_distribution']}")\r
    print(f"   * Scholarship Eligible Names  : {report['scholarship_eligible']}\\n")\r
\r
    print("2. Quarantined Audit Logs (Procedural Defense):")\r
    for q in cleaner.quarantined_records:\r
        print(f"   * [REJECTED] {q['app_id']}: {q['reason']}")\r
\r
    print("\\n[PASSED] Institutional Admission Cleaner Suite Verified.")\r
\r
\r
if __name__ == "__main__":\r
    run_admission_cleaner_demo()\r
`,w=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
          PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_005: ADVANCED COMPREHENSIONS\r
        TOPIC 2: READABILITY GUIDELINES: WHEN TO USE COMPREHENSIONS VS LOOPS\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. WHEN TO USE COMPREHENSIONS\r
--------------------------------------------------------------------------------\r
  * Constructing a new list, dict, or set from an existing iterable\r
  * Maximum of 1 loop and 1 simple filter guard\r
  * Transforming data without side-effects (Pure functions)\r
\r
--------------------------------------------------------------------------------\r
2. WHEN TO USE PROCEDURAL LOOPS\r
--------------------------------------------------------------------------------\r
  * Executing side-effects (I/O, database writes, file logging)\r
  * Exception handling required (try...except)\r
  * Logic exceeds 2 nested loops or spans > 3 physical lines\r
  * Complex branching logic (multiple if-elif-else statements)\r
\r
--------------------------------------------------------------------------------\r
3. MEMORY RULE: LIST vs GENERATOR\r
--------------------------------------------------------------------------------\r
  * Eager List [x for x in seq]     : O(N) RAM (Need len, indexing, multiple passes)\r
  * Lazy Generator (x for x in seq) : O(1) RAM (Streaming into sum, max, or file)\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 2: READABILITY & REFACTORING\r
================================================================================\r
`,E=[{question:"What core 'Zen of Python' aphorism is most frequently cited when evaluating comprehensions?",shortAnswer:"'Readability counts.' If a comprehension is difficult to read, understand, or debug at a glance, it should be refactored into a clear procedural loop.",explanation:"Readability takes precedence over clever one-liners.",hint:"Readability counts; simple is better than complex.",level:"basic",codeExample:"# Prioritize readability over cleverness"},{question:"What is the '2-Clause Threshold Rule' for writing maintainable comprehensions?",shortAnswer:"A comprehension should generally have at most 2 clauses (e.g. 1 'for' and 1 'if', or 2 'for' loops); anything exceeding 2 clauses should be refactored into a procedural loop.",explanation:"Empirical software engineering guideline.",hint:"Limit to max 2 clauses (1 for + 1 if, or 2 for loops).",level:"basic",codeExample:"[x * 2 for x in seq if x > 0] # Good: 2 clauses max"},{question:"Why is using a list comprehension solely for side-effects (e.g. '[print(x) for x in seq]') considered an anti-pattern?",shortAnswer:"Because it constructs and stores an unnecessary list of '[None, None, ...]' in memory that is immediately discarded, wasting RAM and confusing readers who expect comprehensions to produce usable data.",explanation:"Comprehensions are for constructing data, not executing side-effects.",hint:"It wastes memory building a useless list of [None, None, ...] that is immediately discarded.",level:"basic",codeExample:"# BAD: [audit(x) for x in items] -> GOOD: for x in items: audit(x)"},{question:"Can a Python comprehension contain a 'try...except' block directly?",shortAnswer:"No. Python grammar does not permit statements like 'try...except' inside expressions; to handle exceptions, you must either use a helper function or refactor to a standard 'for' loop.",explanation:"Comprehensions are pure expressions, not statement blocks.",hint:"No, try...except cannot be used inside comprehension expressions.",level:"basic",codeExample:"# def safe_cast(x): try: return float(x) except: return None"},{question:"How does PEP 8 recommend formatting a comprehension that spans multiple lines?",shortAnswer:"Break each clause onto its own indented line with the opening and closing brackets on separate lines for visual symmetry and readability.",explanation:"PEP 8 multi-line comprehension formatting guidelines.",hint:"Indent each for and if clause on its own line with matching bracket indentation.",level:"moderate",codeExample:`honors = [
    s['name']
    for s in students
    if s['score'] >= 90
]`},{question:"When should you prefer a Generator Expression over a List Comprehension?",shortAnswer:"When you only need to iterate over the data once (e.g. passing to 'sum()', 'max()', 'any()', or streaming to a file) and do not need indexing, length, or multiple passes.",explanation:"Saves massive amounts of heap memory via O(1) lazy evaluation.",hint:"Use generator when iterating once, streaming large files, or calculating aggregates like sum().",level:"moderate",codeExample:"total = sum(s['fee'] for s in students) # O(1) memory generator"},{question:"How do you measure the memory allocation difference between a list comprehension and a generator?",shortAnswer:"Using 'sys.getsizeof(my_object)': a 1,000,000-element list consumes ~8.5 MB of RAM, while the equivalent generator expression consumes only ~104 bytes.",explanation:"Demonstrates memory conservation of lazy iteration.",hint:"Use sys.getsizeof() to compare object byte allocations.",level:"moderate",codeExample:`import sys
sys.getsizeof([x for x in range(1000000)]) # ~8.5 MB
sys.getsizeof((x for x in range(1000000))) # ~104 bytes`},{question:"What is the 'Walrus Operator' (':=') and how can it prevent redundant computations in comprehensions?",shortAnswer:"The assignment expression operator (':=') binds intermediate results to a variable within the comprehension, avoiding calling an expensive function twice in the expression and filter guard.",explanation:"Optimizes expensive filtering and transformation pipelines.",hint:"Use := to compute expensive expressions once and reuse in expression and filter.",level:"complex",codeExample:"[res for x in seq if (res := expensive_func(x)) > threshold]"},{question:"Why should you avoid nesting multiple ternary 'if-else' expressions inside a comprehension?",shortAnswer:"Nested ternary expressions ('A if c1 else B if c2 else C') create cryptic, unreadable code that obscures business logic; a helper function or dictionary mapping is much clearer.",explanation:"Prevents ternary ladder cognitive overload.",hint:"Chained ternary expressions become unreadable; use helper functions instead.",level:"basic",codeExample:"# BAD: [A if c1 else B if c2 else C for x in seq]"},{question:"When is a standard 'for' loop strictly better than a comprehension?",shortAnswer:"When the loop requires logging/debugging statements, multi-step mutations with intermediate variables, complex branching ('elif'), or early exit conditions ('break'/'continue').",explanation:"Procedural control flow strengths.",hint:"When logic needs logging, exception handling, early break/continue, or multiple elif branches.",level:"basic",codeExample:"# Use for loop when debugging or early break is required"},{question:"How do you refactor a comprehension that needs to skip items based on dynamic validation?",shortAnswer:"Use a procedural 'for' loop with 'continue' statements and quarantine logging for invalid records.",explanation:"Provides clear tracing and debugging in production.",hint:"Use a procedural loop with 'continue' and quarantine logging.",level:"moderate",codeExample:`for raw in data:
    if not is_valid(raw): continue
    clean.append(raw)`},{question:"Can comprehensions contain 'break' or 'continue' statements?",shortAnswer:"No. 'break' and 'continue' are statements, not expressions, and cannot be used inside comprehensions (though 'if' filters act similarly to 'continue').",explanation:"Control flow statement restrictions in comprehensions.",hint:"No, break and continue are statements and cannot exist in comprehensions.",level:"basic",codeExample:"# SyntaxError: [x for x in seq if break]"},{question:"What is the 'Hybrid Architecture' pattern in production data pipelines?",shortAnswer:"Using defensive procedural 'for' loops with 'try...except' to clean and quarantine dirty raw I/O data, followed by clean, idiomatic comprehensions for pure data transformations and indexing.",explanation:"Best-of-both-worlds enterprise software design.",hint:"Defensive loops for dirty I/O parsing, then pure comprehensions for analytics.",level:"moderate",codeExample:"# Defensive loop -> Clean data -> Pure comprehensions"},{question:"What is the impact of list comprehensions on code reviews and pull request velocity?",shortAnswer:"Clean 1-line comprehensions improve code review speed by making intent immediately obvious, whereas 4-line monster comprehensions increase review time and hide potential bugs.",explanation:"Software engineering readability impact.",hint:"Clear comprehensions accelerate reviews; monster comprehensions slow down reviews.",level:"basic",codeExample:"# Keep comprehensions readable for smooth code reviews"},{question:"How does mutating an external variable inside a comprehension violate functional programming principles?",shortAnswer:"Comprehensions should be pure functions that compute a new collection; mutating external global or closure variables introduces hidden side-effects and bugs.",explanation:"Functional purity invariants.",hint:"Mutating external state inside comprehensions introduces hidden side-effects.",level:"moderate",codeExample:"# BAD: total = 0; [total := total + x for x in seq]"},{question:"Why is 'map(func, iterable)' sometimes less readable than '[func(x) for x in iterable]'?",shortAnswer:"List comprehensions avoid the need for 'lambda' expressions and explicitly display the data transformation without wrapping in 'list(map(...))'.",explanation:"Idiomatic Python style preference for comprehensions over lambda maps.",hint:"Comprehensions avoid lambda syntax and explicit list() wrapping.",level:"basic",codeExample:"[x * 2 for x in seq] # Cleaner than list(map(lambda x: x * 2, seq))"},{question:"How do you test and debug a complex comprehension when it produces incorrect results?",shortAnswer:"Refactor it temporarily into a standard 'for' loop with 'print()' statements or breakpoints, verify the logic, and decide whether to keep the loop for clarity.",explanation:"Standard debugging methodology for comprehensions.",hint:"Temporarily expand to a procedural loop with print statements or breakpoints.",level:"basic",codeExample:"# Expand comprehension to for loop with print() for debugging"},{question:"What is the maximum recommended physical line length for comprehensions under PEP 8?",shortAnswer:"79 characters (or 88 characters under Black/Flake8); if a comprehension exceeds this limit, break it across multiple indented lines.",explanation:"Standard PEP 8 line length limits.",hint:"79 characters (or 88 in Black formatter).",level:"basic",codeExample:"# Break across multiple lines if > 79 characters"},{question:"How do you calculate a readability index for Python code?",shortAnswer:"Using tools like 'radon' or 'flake8' to compute Cyclomatic Complexity (McCabe metric) and Halstead volume metrics.",explanation:"Automated static analysis tooling.",hint:"Use radon or flake8 to measure Cyclomatic Complexity.",level:"complex",codeExample:"# radon cc my_script.py -a"},{question:"What happens if an exception is raised halfway through evaluating a list comprehension?",shortAnswer:"The comprehension immediately terminates, the call stack unwinds, and any elements computed before the error are discarded with nothing returned.",explanation:"All-or-nothing execution semantics of comprehensions.",hint:"Execution halts immediately and all partially computed elements are discarded.",level:"moderate",codeExample:"# [1 / x for x in [2, 1, 0, 3]] -> Raises ZeroDivisionError"},{question:"How can a helper function restore readability to a comprehension with complex logic?",shortAnswer:"Encapsulate the multi-line conditional or transformation logic inside a descriptive helper function ('[categorize_student(s) for s in students]').",explanation:"Decomposition into named domain abstractions.",hint:"Extract complex logic into a named helper function and call inside comprehension.",level:"basic",codeExample:"[evaluate_scholarship(s) for s in students if is_eligible(s)]"},{question:"Why should you avoid creating throwaway list comprehensions just to pass to 'len()'?",shortAnswer:"Writing 'len([x for x in seq if cond])' allocates an entire list in memory; using 'sum(1 for x in seq if cond)' or a loop avoids list allocation.",explanation:"Memory-efficient counting.",hint:"Use sum(1 for x in seq if cond) to count items without allocating full lists.",level:"moderate",codeExample:"count = sum(1 for s in students if s['score'] >= 90) # O(1) memory"},{question:"What is the cognitive danger of 'code golf' with comprehensions?",shortAnswer:"Writing overly condensed, cryptic single-line comprehensions solely to minimize line count increases tech debt and makes maintenance difficult for teammates.",explanation:"Software maintainability over brevity.",hint:"Minimizing line count at the expense of readability creates tech debt.",level:"basic",codeExample:"# Avoid code golf in production software"},{question:"How does type hinting improve the readability of complex comprehensions?",shortAnswer:"Explicitly annotating variable types (e.g. 'honors: List[str] = [...]') documents the expected container and element types for maintainers and IDEs.",explanation:"Static typing clarity.",hint:"Add type annotations like List[str] or Dict[str, float] to document output type.",level:"basic",codeExample:"honors: List[str] = [s['name'] for s in students if s['score'] >= 90]"},{question:"What is the ultimate golden rule for When to Use Comprehensions vs Loops in Python?",shortAnswer:"Use comprehensions for clear, declarative, pure data transformations (max 2 clauses) without side-effects; use procedural loops when side-effects, exception handling, complex branching, or debugging are required.",explanation:"The complete enterprise architecture guideline for idiomatic Python programming.",hint:"Comprehensions for pure data transforms (max 2 clauses); procedural loops for side-effects, I/O, and exceptions.",level:"basic",codeExample:"# Python Readability & Comprehension Mastery"}];function L(){const c=a.useRef([]),[o,p]=a.useState("decisionTree"),l=[{id:"simple_map",title:"1. Simple Filter & Map",verdict:"COMPREHENSION_IDEAL",compCode:"honors = [s['name'] for s in students if s['score'] >= 90]",loopCode:`honors = []
for s in students:
    if s['score'] >= 90:
        honors.append(s['name'])`,reason:"Single loop, simple filter, zero side-effects. Comprehension is concise and ~30% faster.",score:98},{id:"side_effect",title:"2. Side-Effect Audit Logger",verdict:"LOOP_REQUIRED",compCode:`[logger.info(f"Audit: {s['id']}") for s in students]  # ANTI-PATTERN!`,loopCode:`for s in students:
    logger.info(f"Audit: {s['id']}")
    audit_db.record_entry(s)`,reason:"Comprehension creates a useless [None, None] list in RAM. Procedural loop is proper for I/O.",score:35},{id:"exceptions",title:"3. Dirty Payload Exception Handling",verdict:"LOOP_REQUIRED",compCode:"[float(s['marks']) for s in dirty_records]  # CRASHES ON INVALID STRINGS!",loopCode:`clean_scores = []
for s in dirty_records:
    try:
        clean_scores.append(float(s['marks']))
    except (ValueError, TypeError):
        quarantine.append(s)`,reason:"Comprehensions cannot contain try...except. Procedural loop handles errors defensively.",score:20},{id:"monster_nested",title:"4. Monster 4-Level Nested Logic",verdict:"LOOP_REQUIRED",compCode:"[v*2 if v%2==0 else v*3 for lay in cube for r in lay for v in r if v>5]  # CRYPTIC!",loopCode:`results = []
for layer in cube:
    for row in layer:
        for val in row:
            if val > 5:
                transformed = val * 2 if val % 2 == 0 else val * 3
                results.append(transformed)`,reason:"Exceeds 2-clause threshold. Violates Zen of Python ('Readability counts').",score:15}],[x,h]=a.useState("simple_map"),[r,m]=a.useState("compare"),i=l.find(n=>n.id===x)||l[0];a.useEffect(()=>{const n=new IntersectionObserver(d=>{d.forEach(f=>{f.isIntersecting&&f.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return c.current.forEach(d=>{d&&n.observe(d)}),()=>n.disconnect()},[]);const t=n=>{n&&!c.current.includes(n)&&c.current.push(n)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:t,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_005"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 2"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Advanced Comprehensions & Functional Python"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Readability Guidelines: ",e.jsx("span",{className:"text-teal-400",children:"Comprehensions vs Loops"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:[`Master Python's core software engineering principles: The Zen of Python rules ("Readability counts", "Flat is better than nested"), the empirical 2-clause threshold rule, refactoring side-effect anti-patterns, handling defensive exceptions with `,e.jsx("code",{className:"text-teal-300 font-mono",children:"try...except"}),", and memory profiling eager lists vs lazy generators."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:'📖 Zen of Python ("Readability Counts")'}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📏 The 2-Clause Threshold Rule"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Defensive `try...except` Handling"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ Eager List vs Lazy Generator Memory"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚖️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Comprehension vs Loop Decision Rubric"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:'Comprehensions are powerful tools for data construction, but overuse leads to cryptic "code golf" that creates maintainability hazards:'}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg space-y-2",children:[e.jsxs("div",{className:"text-teal-400 font-bold text-sm flex items-center gap-2",children:[e.jsx("span",{children:"✅"})," When to Use Comprehensions"]}),e.jsxs("ul",{className:"text-xs text-slate-300 space-y-1.5 list-disc list-inside",children:[e.jsx("li",{children:"Constructing a new list, dict, or set from an iterable"}),e.jsx("li",{children:"At most 1 loop and 1 simple filter guard (Max 2 clauses)"}),e.jsx("li",{children:"Pure transformations without external side-effects"}),e.jsx("li",{children:"Clear, expressive 1-line or cleanly indented PEP 8 expressions"})]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg space-y-2",children:[e.jsxs("div",{className:"text-cyan-400 font-bold text-sm flex items-center gap-2",children:[e.jsx("span",{children:"🔄"})," When to Use Procedural Loops"]}),e.jsxs("ul",{className:"text-xs text-slate-300 space-y-1.5 list-disc list-inside",children:[e.jsx("li",{children:"Executing side-effects (logging, file I/O, database writes)"}),e.jsxs("li",{children:["Handling exceptions defensively (",e.jsx("code",{className:"text-cyan-300",children:"try...except"}),")"]}),e.jsxs("li",{children:["Complex branching (",e.jsx("code",{className:"text-cyan-300",children:"elif"})," ladders, early ",e.jsx("code",{className:"text-cyan-300",children:"break"}),"/",e.jsx("code",{className:"text-cyan-300",children:"continue"}),")"]}),e.jsx("li",{children:"Logic exceeds 2 nested loop levels or requires debugging step-throughs"})]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Side-Effect Anti-Pattern Warning"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Writing ",e.jsx("code",{className:"text-rose-400 font-mono",children:"[audit_log(x) for x in items]"})," allocates an unnecessary list of ",e.jsx("code",{className:"text-slate-400 font-mono",children:"[None, None, ...]"})," in heap RAM that is immediately discarded. Always use a standard ",e.jsx("code",{className:"text-teal-300 font-mono",children:"for"})," loop for side-effects!"]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visual Decision Tree, Complexity & Memory Allocation"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>p("decisionTree"),className:s("px-3 py-1.5 rounded-lg transition-all",o==="decisionTree"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Decision Tree"}),e.jsx("button",{onClick:()=>p("complexity"),className:s("px-3 py-1.5 rounded-lg transition-all",o==="complexity"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Cognitive Complexity"}),e.jsx("button",{onClick:()=>p("memory"),className:s("px-3 py-1.5 rounded-lg transition-all",o==="memory"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Memory: List vs Gen"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining the decision flowchart, cyclomatic threshold limits, and heap memory allocation curves:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:o==="decisionTree"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"COMPREHENSION VS PROCEDURAL LOOP DECISION TREE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"15",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"1. Primary Purpose Question"}),e.jsx("text",{x:"15",y:"55",fill:"#38bdf8",fontSize:"8 font-mono",children:"Building new collection?"}),e.jsx("text",{x:"15",y:"75",fill:"#ecfdf5",fontSize:"8 font-mono",children:"OR executing side-effects?"}),e.jsx("rect",{x:"15",y:"105",width:"220",height:"110",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"25",y:"130",fill:"#f43f5e",fontSize:"9 font-bold",children:"If Side-Effects (I/O, DB, Print):"}),e.jsx("text",{x:"25",y:"150",fill:"#cbd5e1",fontSize:"8 font-bold",children:"➡️ USE FOR LOOP"}),e.jsx("text",{x:"25",y:"170",fill:"#34d399",fontSize:"9 font-bold",children:"If Building Collection:"}),e.jsx("text",{x:"25",y:"190",fill:"#cbd5e1",fontSize:"8",children:"Proceed to step 2 ➡️"}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"310",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. Complexity & Error Checks"}),e.jsx("text",{x:"310",y:"55",fill:"#38bdf8",fontSize:"8 font-mono",children:"Needs `try...except`?"}),e.jsx("text",{x:"310",y:"75",fill:"#38bdf8",fontSize:"8 font-mono",children:"Clauses > 2 levels?"}),e.jsx("rect",{x:"310",y:"105",width:"220",height:"110",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"320",y:"130",fill:"#f43f5e",fontSize:"9 font-bold",children:"If Exceptions / > 2 Loops:"}),e.jsx("text",{x:"320",y:"150",fill:"#cbd5e1",fontSize:"8 font-bold",children:"➡️ USE FOR LOOP"}),e.jsx("text",{x:"320",y:"170",fill:"#34d399",fontSize:"9 font-bold",children:"If Simple & Safe:"}),e.jsx("text",{x:"320",y:"190",fill:"#cbd5e1",fontSize:"8",children:"Proceed to step 3 ➡️"}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"605",y:"30",fill:"#a7f3d0",fontSize:"11 font-bold",children:"3. Optimal Comprehension"}),e.jsx("text",{x:"605",y:"55",fill:"#34d399",fontSize:"9 font-mono font-bold",children:"[x for x in seq if cond]"}),e.jsx("text",{x:"605",y:"75",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Clean, Idiomatic & Fast"}),e.jsx("rect",{x:"605",y:"105",width:"200",height:"110",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"615",y:"130",fill:"#34d399",fontSize:"9 font-bold",children:"Optimal Choice:"}),e.jsx("text",{x:"615",y:"150",fill:"#cbd5e1",fontSize:"8",children:"Executes at C-speed"}),e.jsx("text",{x:"615",y:"165",fill:"#cbd5e1",fontSize:"8",children:"with maximum readability"}),e.jsx("text",{x:"615",y:"180",fill:"#cbd5e1",fontSize:"8",children:"and 100% Zen compliance."})]})]}):o==="complexity"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"COGNITIVE COMPLEXITY & READABILITY THRESHOLD"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"1. Clean Comprehension (Cognitive Score: 95/100)"}),e.jsx("text",{x:"20",y:"65",fill:"#34d399",fontSize:"9 font-mono font-bold",children:"honors = [s['name'] for s in students if s['score'] >= 90]"}),e.jsx("rect",{x:"20",y:"100",width:"340",height:"115",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"125",fill:"#34d399",fontSize:"9 font-bold",children:"Zen of Python Compliance:"}),e.jsx("text",{x:"30",y:"145",fill:"#cbd5e1",fontSize:"8",children:"• Simple is better than complex (True)"}),e.jsx("text",{x:"30",y:"160",fill:"#cbd5e1",fontSize:"8",children:"• Readability counts (True)"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"• Single scan mental model"})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"2. Monster Comprehension (Cognitive Score: 15/100)"}),e.jsx("text",{x:"20",y:"65",fill:"#fca5a5",fontSize:"8 font-mono",children:"[v*2 if v%2==0 else v*3 for L in M for r in L for v in r if v>5]"}),e.jsx("rect",{x:"20",y:"100",width:"340",height:"115",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"125",fill:"#fda4af",fontSize:"9 font-bold",children:"Maintainability Violations:"}),e.jsx("text",{x:"30",y:"145",fill:"#cbd5e1",fontSize:"8",children:"• 3 nested loops + ternary ladder (Violates 2-clause rule)"}),e.jsx("text",{x:"30",y:"160",fill:"#cbd5e1",fontSize:"8",children:"• Impossible to set breakpoints or log intermediate states"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"• Refactor immediately to procedural loop!"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"MEMORY PROFILING: 1,000,000 ELEMENTS (LIST VS GENERATOR)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"Eager List Comprehension `[x for x in ...]`"}),e.jsx("text",{x:"20",y:"60",fill:"#fca5a5",fontSize:"8 font-mono",children:"1,000,000 Integers Allocated in RAM"}),e.jsx("text",{x:"20",y:"80",fill:"#f43f5e",fontSize:"16 font-bold",children:"~8.5 MB Heap Memory"}),e.jsx("rect",{x:"20",y:"110",width:"340",height:"105",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"135",fill:"#fda4af",fontSize:"9 font-bold",children:"Allocation Invariant:"}),e.jsx("text",{x:"30",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Full O(N) memory allocated up front."}),e.jsx("text",{x:"30",y:"170",fill:"#cbd5e1",fontSize:"8",children:"Essential for indexing (`M[0]`), `len()`, or multiple passes."})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"Lazy Generator Expression `(x for x in ...)`"}),e.jsx("text",{x:"20",y:"60",fill:"#34d399",fontSize:"8 font-mono",children:"Streams 1 Item at a Time on Demand"}),e.jsx("text",{x:"20",y:"80",fill:"#34d399",fontSize:"16 font-bold",children:"104 Bytes Constant O(1) Memory!"}),e.jsx("rect",{x:"20",y:"110",width:"340",height:"105",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"135",fill:"#34d399",fontSize:"9 font-bold",children:"Streaming Invariant:"}),e.jsx("text",{x:"30",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Constant O(1) memory footprint (~80,000x less RAM!)."}),e.jsx("text",{x:"30",y:"170",fill:"#cbd5e1",fontSize:"8",children:"Ideal for passing directly to `sum()`, `max()`, or file streaming."})]})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Readability & Refactoring Laboratory"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Select a coding scenario, compare raw comprehensions against refactored procedural loops, and inspect Zen of Python quality scorecards:"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"1. Select Code Scenario"}),e.jsxs("span",{className:"text-[11px] font-mono text-slate-400",children:["Total Scenarios: ",l.length]})]}),e.jsx("div",{className:"space-y-2",children:l.map(n=>e.jsxs("button",{onClick:()=>h(n.id),className:s("w-full text-left p-3 rounded-lg border font-mono text-xs transition-all flex items-center justify-between",x===n.id?"bg-teal-950/60 border-teal-600/80 text-white shadow-md":"bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white"),children:[e.jsx("span",{children:n.title}),e.jsx("span",{className:s("px-2 py-0.5 rounded text-[10px] font-bold",n.verdict==="COMPREHENSION_IDEAL"?"bg-emerald-950 text-emerald-300 border border-emerald-800":"bg-rose-950 text-rose-300 border border-rose-800"),children:n.verdict==="COMPREHENSION_IDEAL"?"✅ USE COMPREHENSION":"🔄 USE FOR LOOP"})]},n.id))}),e.jsx("div",{className:"pt-2",children:e.jsxs("div",{className:"flex bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:[e.jsx("button",{onClick:()=>m("compare"),className:s("flex-1 py-1 rounded transition-all",r==="compare"?"bg-teal-900/60 text-teal-300 font-bold border border-teal-700/80":"text-slate-400 hover:text-white"),children:"Side-by-Side Diff"}),e.jsx("button",{onClick:()=>m("comp"),className:s("flex-1 py-1 rounded transition-all",r==="comp"?"bg-cyan-900/60 text-cyan-300 font-bold border border-cyan-700/80":"text-slate-400 hover:text-white"),children:"Comprehension"}),e.jsx("button",{onClick:()=>m("loop"),className:s("flex-1 py-1 rounded transition-all",r==="loop"?"bg-purple-900/60 text-purple-300 font-bold border border-purple-700/80":"text-slate-400 hover:text-white"),children:"Procedural Loop"})]})})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs space-y-1",children:[e.jsxs("div",{className:"flex justify-between items-center text-[10px] uppercase font-bold text-slate-400",children:[e.jsx("span",{children:"Zen of Python Compliance Score:"}),e.jsxs("span",{className:s(i.score>=70?"text-emerald-400 font-bold":"text-rose-400 font-bold"),children:[i.score," / 100"]})]}),e.jsx("div",{className:"text-slate-300 text-[11px] leading-relaxed pt-1",children:i.reason})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[190px] font-mono text-xs space-y-3",children:[(r==="compare"||r==="comp")&&e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"text-[10px] text-teal-400 font-bold uppercase block",children:"Comprehension Expression:"}),e.jsx("pre",{className:"text-slate-200 text-[11px] leading-relaxed bg-slate-950 p-2 rounded border border-slate-800 overflow-x-auto",children:i.compCode})]}),(r==="compare"||r==="loop")&&e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"text-[10px] text-cyan-400 font-bold uppercase block",children:"Refactored Procedural Loop:"}),e.jsx("pre",{className:"text-slate-200 text-[11px] leading-relaxed bg-slate-950 p-2 rounded border border-slate-800 overflow-x-auto",children:i.loopCode})]})]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Decision Rubric Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Criteria"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"List Comprehension"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Procedural `for` Loop"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Generator `(x for ...)`"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"Side-Effects (I/O)"}),e.jsx("td",{className:"py-3 px-4 text-rose-400",children:"❌ Anti-pattern"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"✅ Recommended"}),e.jsx("td",{className:"py-3 px-4 text-rose-400",children:"❌ Anti-pattern"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"Exception Handling"}),e.jsx("td",{className:"py-3 px-4 text-rose-400",children:"❌ Not supported"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"✅ Full `try...except`"}),e.jsx("td",{className:"py-3 px-4 text-rose-400",children:"❌ Not supported"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Memory Usage"}),e.jsx("td",{className:"py-3 px-4 text-amber-300",children:"O(N) Full RAM"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Variable"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"✅ O(1) Constant"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"C-Speed Opcode"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"✅ Fast `LIST_APPEND`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Standard bytecode"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"✅ Fast stream"})]})]})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating readability guidelines, monster comprehension refactoring, memory profiling, and admission roster cleaners:"}),e.jsx(u,{files:[{filename:"readability_metrics_and_zen_of_python.py",code:v,description:"Zen of Python principles, 2-clause threshold, and side-effect anti-patterns."},{filename:"refactoring_complex_comprehensions_to_loops.py",code:N,description:"Refactoring monster comprehensions to clean procedural loops with exception handling."},{filename:"memory_and_profiling_comprehensions_vs_generators.py",code:_,description:"Memory benchmarks with sys.getsizeof and timeit (List vs Generator)."},{filename:"institutional_admission_roster_cleaner_suite.py",code:j,description:"Strategic balance of defensive loops and idiomatic comprehensions in student pipelines."}]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Side-Effects in Comprehensions"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"[print(x) for x in seq]"})," wastes heap memory constructing an immediately discarded list of ",e.jsx("code",{className:"text-rose-300 font-mono",children:"[None, ...]"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Use standard ",e.jsx("code",{className:"text-emerald-300",children:"for"})," loops for side-effects and logging."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Lack of Native Exception Handling"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"If a single element raises an unhandled exception inside a comprehension, the entire pipeline crashes with all partially computed items lost."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use a procedural loop with ",e.jsx("code",{className:"text-emerald-300",children:"try...except"})," to quarantine bad records."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Memory Exhaustion on Massive Streams"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Using ",e.jsx("code",{className:"text-purple-300 font-mono",children:"sum([x for x in range(10_000_000)])"})," creates an 85 MB list in RAM instead of streaming directly."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use lazy generator expressions ",e.jsx("code",{className:"text-emerald-300",children:"sum(x for x in range(...))"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Code Golf Tech Debt"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Writing 4-line monster comprehensions solely to minimize line count slows down team pull requests and obscures edge case bugs."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"}),' "Readability counts." Keep comprehensions under 2 clauses.']})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering readability guidelines, Zen of Python principles, exception handling, and memory profiling:"}),e.jsx(g,{questions:E})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with readability rubrics, refactoring decision trees, and memory profiling metrics:"}),e.jsx("div",{className:"mb-10",children:e.jsx(b,{content:w,filename:"python_topic2_readability_guidelines_notes.txt",title:"Print Topic 2 Study Notes"})}),e.jsx(y,{})]})]})]})}export{L as default};
