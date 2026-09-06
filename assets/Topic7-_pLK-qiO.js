import{b as o,j as e,bg as s}from"./vendor-react-core-Doz9nIC6.js";import{P as h}from"./PythonFileLoader-hCi5osN-.js";import{P as _}from"./PlainTextPrint-C08xhKA4.js";import{F as j}from"./FAQTemplate-BHhlgA96.js";import{T as w}from"./TeacherSukantaHui-DDN87fI5.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const N=`"""\r
# Module: 004_003_python-testing\r
# Topic 7: Measuring Code Coverage with coverage.py / pytest-cov\r
# File: basic_statement_vs_branch_coverage.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating statement (line) coverage vs branch coverage\r
#              and exposing hidden logic flaws in partial branch execution.\r
"""\r
\r
def evaluate_scholarship_tier(score: float, is_economically_weak: bool) -> float:\r
    """Calculates scholarship percentage.\r
    \r
    Branch 1: score >= 90 (True branch / False branch)\r
    Branch 2: is_economically_weak (True branch / False branch)\r
    """\r
    discount = 0.0\r
    \r
    # Branch 1\r
    if score >= 90.0:\r
        discount += 0.20  # 20% merit\r
    elif score >= 80.0:\r
        discount += 0.10  # 10% merit\r
    \r
    # Branch 2\r
    if is_economically_weak:\r
        discount += 0.15  # 15% need-based grant\r
        \r
    return min(0.35, discount)\r
\r
# ------------------------------------------------------------------------------\r
# TESTS\r
# ------------------------------------------------------------------------------\r
def test_partial_branch_coverage():\r
    print("   [...] Running Test 1 (High Score + EWS)...")\r
    # Score 95 + EWS=True executes Lines 16, 17, 22, 23, 25 (100% Line Coverage!)\r
    # BUT completely misses score < 90 False branch and score in [80, 90) branch!\r
    res = evaluate_scholarship_tier(95.0, is_economically_weak=True)\r
    assert res == 0.35\r
    print("   [PASS] Test 1: Achieves high line coverage BUT misses critical branches!")\r
\r
def test_full_branch_coverage():\r
    print("   [...] Running Comprehensive Branch Coverage Suite...")\r
    \r
    # 1. Score >= 90 + No EWS (True branch 1, False branch 2)\r
    assert evaluate_scholarship_tier(95.0, False) == 0.20\r
    \r
    # 2. 80 <= Score < 90 + EWS (Elif branch 1, True branch 2)\r
    assert evaluate_scholarship_tier(85.0, True) == 0.25\r
    \r
    # 3. Score < 80 + EWS (False branch 1, True branch 2)\r
    assert evaluate_scholarship_tier(70.0, True) == 0.15\r
    \r
    # 4. Score < 80 + No EWS (False branch 1, False branch 2)\r
    assert evaluate_scholarship_tier(60.0, False) == 0.0\r
    \r
    print("   [PASS] Full Branch Suite: 100% Statements + 100% Branches Traversed!")\r
\r
def main():\r
    print("=" * 75)\r
    print("[CODE COVERAGE] Statement Coverage vs Branch Decision Coverage")\r
    print("=" * 75)\r
\r
    test_partial_branch_coverage()\r
    test_full_branch_coverage()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Branch coverage (--cov-branch) ensures all True/False decisions")\r
    print("           are tested, exposing edge cases that line coverage overlooks.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,C=`"""\r
# Module: 004_003_python-testing\r
# Topic 7: Measuring Code Coverage with coverage.py / pytest-cov\r
# File: coverage_configuration_and_exclusions.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating .coveragerc / pyproject.toml configuration and # pragma: no cover.\r
"""\r
\r
# Example Production Class with Pragmas and Untestable Boilerplate\r
class CampusLocation:\r
    def __init__(self, name: str, code: str, max_capacity: int):\r
        self.name = name\r
        self.code = code\r
        self.max_capacity = max_capacity\r
\r
    def get_regional_tax_rate(self) -> float:\r
        """Tested business logic."""\r
        if self.code.upper() in ("BP", "IC", "CC"):\r
            return 0.18  # 18% GST West Bengal\r
        return 0.12\r
\r
    def __repr__(self) -> str:  # pragma: no cover\r
        # Excluded from coverage calculations via pragma\r
        return f"<CampusLocation: {self.name} ({self.code})>"\r
\r
    def emergency_failover_dump(self):  # pragma: no cover\r
        # Diagnostic debug code never triggered in unit tests\r
        import sys\r
        print(f"Dumping state to {sys.stderr}")\r
\r
# ------------------------------------------------------------------------------\r
# TESTS\r
# ------------------------------------------------------------------------------\r
def test_campus_tax_rate():\r
    print("   [...] Testing business logic for regional tax rates...")\r
    \r
    bp = CampusLocation("Barrackpore", "BP", 100)\r
    assert bp.get_regional_tax_rate() == 0.18\r
    \r
    other = CampusLocation("Outstation", "OTHER", 50)\r
    assert other.get_regional_tax_rate() == 0.12\r
    \r
    print("   [PASS] test_campus_tax_rate (100% covered, __repr__ cleanly excluded)")\r
\r
def print_coverage_toml_sample():\r
    print("\\n   [CONFIG] Recommended pyproject.toml Coverage Table:")\r
    toml_content = """\r
[tool.coverage.run]\r
branch = true\r
source = ["src"]\r
omit = ["*/migrations/*", "*/tests/*"]\r
\r
[tool.coverage.report]\r
fail_under = 85.0\r
show_missing = true\r
exclude_lines = [\r
    "pragma: no cover",\r
    "def __repr__",\r
    "raise NotImplementedError",\r
    "if __name__ == .__main__.:",\r
    "if TYPE_CHECKING:"\r
]\r
    """\r
    print(toml_content.strip())\r
\r
def main():\r
    print("=" * 75)\r
    print("[COVERAGE CONFIG] Exclusion Pragmas & pyproject.toml Standards")\r
    print("=" * 75)\r
\r
    test_campus_tax_rate()\r
    print_coverage_toml_sample()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Using exclusion pragmas and pyproject.toml coverage tables")\r
    print("           keeps reports clean and focuses auditing on real business logic.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,T=`"""\r
# Module: 004_003_python-testing\r
# Topic 7: Measuring Code Coverage with coverage.py / pytest-cov\r
# File: pytest_cov_cli_and_html_reports.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating pytest-cov CLI commands, terminal missing line tables,\r
#              and automated quality gate thresholds.\r
"""\r
\r
def generate_simulated_coverage_table():\r
    """Simulates pytest --cov=src --cov-report=term-missing output."""\r
    report = """\r
----------- coverage: platform win32, python 3.11.8 -----------\r
Name                                      Stmts   Miss Branch BrPart  Cover   Missing\r
-------------------------------------------------------------------------------------\r
src/admission_engine.py                      45      0     12      0   100%   \r
src/billing_processor.py                     60      3     16      2    93%   45-47, 88->92\r
src/transcript_generator.py                  35      1      8      1    95%   24\r
src/campus_notification.py                   20      0      4      0   100%   \r
-------------------------------------------------------------------------------------\r
TOTAL                                       160      4     40      3    96%\r
\r
========================= 45 passed in 0.42s =========================\r
Required test coverage of 90.0% reached. Total coverage: 96.25%\r
"""\r
    return report\r
\r
def main():\r
    print("=" * 75)\r
    print("[PYTEST-COV CLI] Terminal Diagnostic Reports & Quality Gates")\r
    print("=" * 75)\r
\r
    print(generate_simulated_coverage_table())\r
\r
    print("=" * 75)\r
    print("[EXPLANATION OF COLUMNS]")\r
    print("  • Stmts: Total executable Python code statements")\r
    print("  • Miss: Count of lines NEVER executed during test run")\r
    print("  • Missing: Exact line ranges (e.g. 45-47) needing test coverage")\r
    print("  • Branch / BrPart: Total decision branches and partial branches")\r
    print("  • Cover: Computed coverage percentage (Target: >= 85%)")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,E=`"""\r
# Module: 004_003_python-testing\r
# Topic 7: Measuring Code Coverage with coverage.py / pytest-cov\r
# File: institutional_coverage_audit_suite.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: End-to-end multi-campus student admission & fee mutation engine\r
#              audited for 100% statement and branch coverage.\r
"""\r
\r
class InstitutionalStudentLedger:\r
    """Production financial ledger engine."""\r
    def __init__(self, sid: str, name: str, campus: str, base_fee: float):\r
        if base_fee <= 0:\r
            raise ValueError("Base fee must be positive.")\r
        self.sid = sid\r
        self.name = name\r
        self.campus = campus\r
        self.balance = float(base_fee)\r
        self.scholarship_pct = 0.0\r
\r
    def apply_merit_scholarship(self, score: float):\r
        if score >= 90.0:\r
            self.scholarship_pct = 0.20\r
        elif score >= 80.0:\r
            self.scholarship_pct = 0.10\r
        else:\r
            self.scholarship_pct = 0.0\r
            \r
        discount = self.balance * self.scholarship_pct\r
        self.balance -= discount\r
        return self.balance\r
\r
    def pay_amount(self, amount: float):\r
        if amount <= 0:\r
            raise ValueError("Payment amount must be positive.")\r
        if amount > self.balance:\r
            raise ValueError("Payment cannot exceed total due balance.")\r
        self.balance -= amount\r
        return self.balance\r
\r
    def is_fully_settled(self) -> bool:\r
        return self.balance == 0.0\r
\r
# ------------------------------------------------------------------------------\r
# 100% STATEMENT & BRANCH COVERAGE AUDIT SUITE\r
# ------------------------------------------------------------------------------\r
def run_100_percent_coverage_audit():\r
    print("   [...] Auditing InstitutionalStudentLedger for 100% statement & branch coverage...")\r
    \r
    # 1. Invalid base fee constructor exception (Line 14)\r
    try:\r
        InstitutionalStudentLedger("STU_ERR", "Err", "Barrackpore", -100)\r
        assert False\r
    except ValueError:\r
        pass\r
\r
    # 2. Score >= 90 branch (Line 23)\r
    s1 = InstitutionalStudentLedger("STU_BP_01", "Mamata", "Barrackpore", 10000.0)\r
    s1.apply_merit_scholarship(95.0)\r
    assert s1.balance == 8000.0\r
\r
    # 3. 80 <= Score < 90 branch (Line 25)\r
    s2 = InstitutionalStudentLedger("STU_CC_02", "Mahima", "Kolkata", 10000.0)\r
    s2.apply_merit_scholarship(85.0)\r
    assert s2.balance == 9000.0\r
\r
    # 4. Score < 80 else branch (Line 27)\r
    s3 = InstitutionalStudentLedger("STU_IC_03", "Abhronila", "Ichapur", 10000.0)\r
    s3.apply_merit_scholarship(70.0)\r
    assert s3.balance == 10000.0\r
\r
    # 5. Negative payment exception (Line 34)\r
    try:\r
        s1.pay_amount(-500)\r
        assert False\r
    except ValueError:\r
        pass\r
\r
    # 6. Overpayment exception (Line 36)\r
    try:\r
        s1.pay_amount(50000)\r
        assert False\r
    except ValueError:\r
        pass\r
\r
    # 7. Valid partial payment & settle check (Lines 38, 41)\r
    s1.pay_amount(8000.0)\r
    assert s1.is_fully_settled() is True\r
\r
    print("   [PASS] 100% Statement & Branch Coverage Verified: All 7 execution paths traversed!")\r
\r
def main():\r
    print("=" * 80)\r
    print("[CASE STUDY] Institutional Student Ledger 100% Coverage Audit")\r
    print("=" * 80)\r
\r
    run_100_percent_coverage_audit()\r
\r
    print("=" * 80)\r
    print("[TAKEAWAY] Achieving 100% statement and branch coverage on critical financial")\r
    print("           engines eliminates silent defects and guards all boundary conditions.")\r
    print("=" * 80)\r
\r
if __name__ == "__main__":\r
    main()\r
`,S=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 4: PRO LEVEL • MODULE 004_003: PYTHON TESTING\r
              TOPIC 7: MEASURING CODE COVERAGE WITH COVERAGE.PY & PYTEST-COV\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. STATEMENT VS BRANCH COVERAGE\r
--------------------------------------------------------------------------------\r
  # Statement (Line) Coverage: Measures % of lines executed during tests.\r
  # Branch Coverage: Measures % of decision branches (True AND False) taken.\r
\r
  def compute_status(score):\r
      if score >= 90:       # Branch 1: score >= 90 (True branch / False branch)\r
          return "MERIT"\r
      return "REGULAR"\r
\r
  # Testing ONLY score=95 gives 100% line coverage BUT misses the False branch!\r
  # Branch coverage (pytest --cov-branch) catches this gap.\r
\r
--------------------------------------------------------------------------------\r
2. PYTEST-COV POWER CLI COMMANDS\r
--------------------------------------------------------------------------------\r
  pytest --cov=src                              # Basic coverage summary\r
  pytest --cov=src --cov-report=term-missing    # Shows exact unexecuted line numbers\r
  pytest --cov=src --cov-report=html            # Generates interactive HTML report\r
  pytest --cov=src --cov-fail-under=90          # Fails CI build if coverage < 90%\r
  pytest --cov=src --cov-branch                 # Enables strict branch coverage\r
\r
--------------------------------------------------------------------------------\r
3. EXCLUSION PRAGMAS IN CODE & CONFIG\r
--------------------------------------------------------------------------------\r
  def debug_dump(self): # pragma: no cover\r
      # Ignored by coverage calculation\r
      print("Debugging details...")\r
\r
================================================================================\r
       END OF STUDY NOTE • TOPIC 7: CODE COVERAGE WITH PYTEST-COV\r
================================================================================\r
`,A=[{question:"What is Code Coverage and why is it measured during automated software testing?",shortAnswer:"Code coverage is a metric that calculates the percentage of source code executed while running a test suite, helping engineering teams identify untested code paths, dead code, and missing edge cases.",explanation:"Code execution measurement during automated testing.",hint:"Measures what percentage of your source code is executed when tests run.",level:"basic",codeExample:"# pytest --cov=src --cov-report=term-missing"},{question:"What is the critical difference between Statement (Line) Coverage and Branch Coverage?",shortAnswer:"Statement coverage measures whether each line of code was executed at least once; Branch coverage measures whether every possible decision outcome (both the True AND False branches of every 'if', 'elif', or 'while' condition) was taken.",explanation:"Line execution vs full decision path traversal.",hint:"Statement coverage checks lines; Branch coverage checks both True and False branches of conditions.",level:"basic",codeExample:"# pytest --cov=src --cov-branch"},{question:"Why can 100% Statement (Line) Coverage give developers a false sense of security?",shortAnswer:"100% line coverage only proves that every line was executed once; it does NOT prove that assertions were meaningful, that all combination branches were tested, that edge case data was verified, or that exceptions were handled properly.",explanation:"The limitation of raw line coverage metrics without assertion quality.",hint:"Code can execute without having valid assertions, and line coverage doesn't test both True/False branches.",level:"moderate",codeExample:"def f(x): return 10/x # Line executed with x=2 (Passes), crashes on x=0!"},{question:"What does the PyTest CLI flag '--cov-report=term-missing' do?",shortAnswer:"It displays a terminal table summarizing the total statements, missed statements, and coverage percentage for each file, explicitly listing the exact line numbers (e.g. '14-18, 42') that were never executed.",explanation:"Terminal missing line diagnostic reporting.",hint:"Lists the exact missing line numbers in the terminal output.",level:"basic",codeExample:"pytest --cov=src --cov-report=term-missing"},{question:"How do you enforce a minimum coverage quality gate that automatically fails CI builds if coverage drops?",shortAnswer:"By adding '--cov-fail-under=<percentage>' (e.g. 'pytest --cov=src --cov-fail-under=85'), which exits with a non-zero exit code if the total coverage is below the specified threshold.",explanation:"Automated CI/CD quality gate enforcement.",hint:"Use --cov-fail-under=85 to fail the test run if coverage is below 85%.",level:"basic",codeExample:"pytest --cov=src --cov-fail-under=90"},{question:"How do you generate an interactive visual HTML coverage report?",shortAnswer:"Run 'pytest --cov=src --cov-report=html', which generates an 'htmlcov/index.html' directory containing color-coded line-by-line interactive source code views.",explanation:"HTML visual coverage report generation.",hint:"pytest --cov=src --cov-report=html generates an htmlcov directory.",level:"basic",codeExample:"pytest --cov=src --cov-report=html && open htmlcov/index.html"},{question:"What is '# pragma: no cover' and when should it be used?",shortAnswer:"'# pragma: no cover' is an inline comment directive that tells coverage.py to exclude that specific line or block (such as 'def __repr__', abstract methods, or OS-specific fallbacks) from coverage calculations.",explanation:"Targeted coverage calculation exclusion.",hint:"Add '# pragma: no cover' to lines you want coverage tools to ignore.",level:"basic",codeExample:`if __name__ == '__main__': # pragma: no cover
    main()`},{question:"What are common lines that should typically be excluded in '.coveragerc' or 'pyproject.toml'?",shortAnswer:"1. '# pragma: no cover', 2. 'def __repr__', 3. 'raise NotImplementedError', 4. 'if __name__ == .__main__.:', 5. 'if TYPE_CHECKING:', and 6. '@overload' signatures.",explanation:"Standard exclusion configuration rules for clean coverage reports.",hint:"repr methods, type checking guards, main blocks, and NotImplementedErrors.",level:"moderate",codeExample:`[tool.coverage.report]
exclude_lines = ['pragma: no cover', 'if __name__ == .__main__.:']`},{question:"Where is coverage configuration typically stored in modern Python projects?",shortAnswer:"Inside 'pyproject.toml' under the '[tool.coverage.run]' and '[tool.coverage.report]' tables (or in a legacy '.coveragerc' file).",explanation:"Configuration file locations for coverage.py.",hint:"Inside pyproject.toml under [tool.coverage] or in .coveragerc.",level:"basic",codeExample:`# pyproject.toml
[tool.coverage.run]
branch = true
source = ['src']`},{question:"What is the difference between including vs omitting the '--cov-branch' flag?",shortAnswer:"Without '--cov-branch', coverage.py measures only statement (line) coverage; with '--cov-branch', it analyzes both statement coverage and branch decision permutations, reporting missed branch jumps.",explanation:"Enabling strict branch decision coverage.",hint:"--cov-branch forces coverage to evaluate whether all True/False branches were tested.",level:"moderate",codeExample:"pytest --cov=src --cov-branch"},{question:"How do you exclude test files themselves from being counted in code coverage?",shortAnswer:`By targeting only the application source directory (e.g. '--cov=src' or 'source = ["src"]' in config), ensuring test files under 'tests/' are not counted as application code.`,explanation:"Source directory targeting for accurate coverage calculations.",hint:"Set --cov=src so only source application code is measured, not tests.",level:"basic",codeExample:"pytest --cov=src # Measures only files in src/"},{question:"What happens when multiple test jobs run in parallel (e.g. with pytest-xdist)?",shortAnswer:"Each parallel worker generates its own coverage data file (e.g. '.coverage.worker1'); the 'coverage combine' command merges them together into a single unified coverage report.",explanation:"Parallel test coverage aggregation with coverage combine.",hint:"Use 'coverage combine' to merge parallel coverage data files.",level:"complex",codeExample:"pytest -n auto --cov=src && coverage combine"},{question:"What is an acceptable / realistic target code coverage percentage for enterprise systems?",shortAnswer:"Typically 80% to 90% for business logic and core libraries; striving for 100% often yields diminishing returns as teams write brittle tests for trivial boilerplate rather than testing complex domain edge cases.",explanation:"Pragmatic coverage targets and diminishing returns.",hint:"80% to 90% is industry standard; 100% on trivial getters often wastes time.",level:"moderate",codeExample:"# 85% is a healthy, robust enterprise quality gate"},{question:"What does a partial branch coverage indicator (e.g. yellow highlight in HTML report) mean?",shortAnswer:"It indicates that the line containing the 'if' condition was executed, but only one of its branches was taken (e.g. the condition was always True in tests, and never False).",explanation:"Partial branch execution diagnostics in coverage reports.",hint:"Means the condition was tested for True, but never tested for False.",level:"moderate",codeExample:"# 'if score >= 90:' was tested with score=95, but never score=70"},{question:"How do you run coverage directly using Python's standard CLI without pytest-cov?",shortAnswer:"Run: 'coverage run -m pytest' followed by 'coverage report -m' (or 'coverage html').",explanation:"Standalone coverage.py CLI execution workflow.",hint:"coverage run -m pytest && coverage report -m",level:"basic",codeExample:"coverage run -m pytest && coverage report -m"},{question:"How can high code coverage hide concurrency bugs or race conditions?",shortAnswer:"Coverage only tracks that code lines were traversed sequentially; it does not test thread interleaving, deadlock hazards, or race condition permutations during concurrent execution.",explanation:"Limitations of coverage metrics regarding asynchronous/concurrency bugs.",hint:"Coverage tests lines executed sequentially, not concurrent thread race conditions.",level:"moderate",codeExample:"# Concurrency locks require specialized stress/load tests"},{question:"What is 'Mutation Testing' and how does it complement Code Coverage?",shortAnswer:"Mutation testing (e.g. with 'mutmut') injects subtle bugs/mutations into your source code and checks if your test suite catches them ('kills the mutants'), verifying whether assertions are actually effective rather than just executing lines.",explanation:"Mutation testing as a quality check on test assertions.",hint:"Mutates source code to verify that test assertions actually catch bugs.",level:"complex",codeExample:"mutmut run # Tests assertion strength by mutating source code"},{question:"How do you ignore specific files (like migrations or auto-generated code) in coverage reports?",shortAnswer:`By configuring 'omit = ["*/migrations/*", "*/generated/*"]' inside the '[tool.coverage.run]' configuration table.`,explanation:"File pattern omission in coverage configuration.",hint:"Add omit patterns like omit = ['*/migrations/*'] in pyproject.toml.",level:"basic",codeExample:`[tool.coverage.run]
omit = ['*/migrations/*', '*/__init__.py']`},{question:"What does the 'Stmts', 'Miss', and 'Cover' columns represent in pytest-cov output?",shortAnswer:"'Stmts' is the total executable statements; 'Miss' is the count of statements not executed; 'Cover' is the computed percentage formula: ((Stmts - Miss) / Stmts) * 100.",explanation:"Mathematical formula and column definitions in coverage tables.",hint:"Stmts = Total, Miss = Unexecuted, Cover = ((Stmts-Miss)/Stmts)*100%.",level:"basic",codeExample:"# Name: billing.py | Stmts: 100 | Miss: 10 | Cover: 90%"},{question:"What is the ultimate golden rule of Code Coverage in professional software engineering?",shortAnswer:"Treat coverage as a diagnostic tool to find untested blind spots rather than a target to game; combine 85%+ branch coverage with strong assertion testing, negative exception validation, and property-based testing.",explanation:"The complete enterprise code coverage philosophy.",hint:"Use coverage to find blind spots, not to game vanity 100% metrics.",level:"basic",codeExample:"# Enterprise Code Coverage Standard"}];function O(){const m=o.useRef([]),[i,x]=o.useState("branchAnalysis"),[a,f]=o.useState(85),[c,b]=o.useState(4),[n,v]=o.useState(!0),g=4,p=n?Math.round(c/g*100):100,l=p>=a,y=`# pyproject.toml - Enterprise Code Coverage Standards
[tool.coverage.run]
branch = ${n?"true":"false"}
source = ["src"]
omit = [
    "*/migrations/*",
    "*/tests/*",
    "*/__init__.py"
]

[tool.coverage.report]
fail_under = ${a}.0
show_missing = true
precision = 2
exclude_lines = [
    "pragma: no cover",
    "def __repr__",
    "raise NotImplementedError",
    "if __name__ == .__main__.:",
    "if TYPE_CHECKING:",
    "@overload"
]

# Command Line Execution in CI/CD:
# pytest --cov=src --cov-branch --cov-report=term-missing --cov-fail-under=${a}`;o.useEffect(()=>{const t=new IntersectionObserver(d=>{d.forEach(u=>{u.isIntersecting&&u.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return m.current.forEach(d=>{d&&t.observe(d)}),()=>t.disconnect()},[]);const r=t=>{t&&!m.current.includes(t)&&m.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:r,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 4 • Module 004_003"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 7"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Automated Testing, PyTest & Quality Assurance"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Measuring Code Coverage: ",e.jsx("span",{className:"text-teal-400",children:"pytest-cov & coverage.py"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master test suite auditing, coverage metrics, and CI/CD quality gates in Python: distinguishing Statement (Line) Coverage from Branch Decision Coverage, reading terminal missing-line traces with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"--cov-report=term-missing"}),", generating interactive HTML reports, excluding boilerplate with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"# pragma: no cover"}),", and enforcing automated build failure thresholds with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"--cov-fail-under=85"}),"."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📊 Statement vs Branch Metrics"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🚦 CI/CD Quality Gates (--cov-fail-under)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🚫 Exclusion Pragmas (# pragma: no cover)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📑 HTML Interactive Heatmaps"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Code Coverage & Quality Gate Architecture"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"Code coverage acts as an automated audit of your test suite, measuring which parts of your codebase were executed during test execution and highlighting untested blind spots before deployment:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Statement Coverage"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"Line Traversal %"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Measures the fraction of executable lines reached. High line coverage is necessary but does not guarantee correctness."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Branch Coverage"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"--cov-branch"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Verifies that every decision branch (both the True AND False outcomes of every ",e.jsx("code",{className:"text-cyan-300",children:"if"})," statement) was traversed."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Quality Gates"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"--cov-fail-under=85"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Enforces minimum coverage thresholds in CI/CD, automatically rejecting PRs that cause coverage regressions."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 shadow-lg",children:[e.jsx("div",{className:"text-amber-400 font-bold text-sm mb-1",children:"4️⃣ Exclusion Pragmas"}),e.jsx("code",{className:"text-xs font-mono text-amber-300 block mb-1",children:"# pragma: no cover"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Cleanly excludes abstract methods, debug dumps, and ",e.jsx("code",{className:"text-amber-300 font-mono",children:"if __name__ == '__main__':"})," from coverage metrics."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The 100% Coverage Myth"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["A test with zero assertions can achieve ",e.jsx("span",{className:"text-rose-400 font-bold",children:"100% line coverage"})," simply by calling the function! Code coverage measures ",e.jsx("span",{className:"text-emerald-400 font-bold",children:"what code was executed"}),", not whether the output was verified correctly. Aim for 85%+ branch coverage paired with rigorous assertion testing."]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Branch Paths, Terminal Reports & HTML Heatmaps"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>x("branchAnalysis"),className:s("px-3 py-1.5 rounded-lg transition-all",i==="branchAnalysis"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Statement vs Branch Paths"}),e.jsx("button",{onClick:()=>x("terminalReport"),className:s("px-3 py-1.5 rounded-lg transition-all",i==="terminalReport"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Terminal Report Breakdown"}),e.jsx("button",{onClick:()=>x("htmlHeatmap"),className:s("px-3 py-1.5 rounded-lg transition-all",i==="htmlHeatmap"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"HTML Visual Heatmap"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining decision branch coverage gaps, terminal table metric columns, and interactive HTML line traces:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:i==="branchAnalysis"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"STATEMENT VS BRANCH DECISION COVERAGE: THE HIDDEN FALSE BRANCH GAP"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"245",rx:"8",fill:"#0f172a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#5eead4",fontSize:"12",fontWeight:"bold",children:"Code Flow with Single Test (Score=95, EWS=True):"}),e.jsx("rect",{x:"20",y:"50",width:"340",height:"50",rx:"4",fill:"#022c22",stroke:"#0d9488"}),e.jsx("text",{x:"30",y:"70",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"if score >= 90: discount += 0.20"}),e.jsx("text",{x:"30",y:"88",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"if is_ews: discount += 0.15"}),e.jsx("rect",{x:"20",y:"115",width:"340",height:"110",rx:"4",fill:"#134e4a"}),e.jsx("text",{x:"30",y:"137",fill:"#86efac",fontSize:"10",fontWeight:"bold",children:"Statement (Line) Coverage: 100% ✅"}),e.jsx("text",{x:"30",y:"157",fill:"#fca5a5",fontSize:"10",fontWeight:"bold",children:"Branch Coverage: 50% ❌ (2 of 4 branches missed!)"}),e.jsx("text",{x:"30",y:"180",fill:"#fecdd3",fontSize:"8",children:"• Never tested when score < 90 (False branch 1 missed)"}),e.jsx("text",{x:"30",y:"198",fill:"#fecdd3",fontSize:"8",children:"• Never tested when is_ews is False (False branch 2 missed)"})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"245",rx:"8",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"20",y:"30",fill:"#5eead4",fontSize:"12",fontWeight:"bold",children:"Comprehensive Branch Coverage (4 Tests):"}),e.jsx("rect",{x:"20",y:"50",width:"340",height:"30",rx:"4",fill:"#064e3b"}),e.jsx("text",{x:"30",y:"70",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"1. Score=95, EWS=False ➔ True / False"}),e.jsx("rect",{x:"20",y:"85",width:"340",height:"30",rx:"4",fill:"#064e3b"}),e.jsx("text",{x:"30",y:"105",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"2. Score=85, EWS=True  ➔ Elif / True"}),e.jsx("rect",{x:"20",y:"120",width:"340",height:"30",rx:"4",fill:"#064e3b"}),e.jsx("text",{x:"30",y:"140",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"3. Score=70, EWS=True  ➔ False / True"}),e.jsx("rect",{x:"20",y:"155",width:"340",height:"30",rx:"4",fill:"#064e3b"}),e.jsx("text",{x:"30",y:"175",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"4. Score=60, EWS=False ➔ False / False"}),e.jsx("text",{x:"30",y:"215",fill:"#facc15",fontSize:"10",fontWeight:"bold",children:"🚀 100% Statement + 100% Branch Coverage Achieved!"})]})]}):i==="terminalReport"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"PYTEST-COV TERMINAL REPORT DECOMPOSITION (--cov-report=term-missing)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#082f49",stroke:"#0ea5e9"}),e.jsx("rect",{x:"25",y:"35",width:"770",height:"35",rx:"4",fill:"#0369a1"}),e.jsx("text",{x:"35",y:"57",fill:"#ffffff",fontSize:"10",fontWeight:"bold",fontFamily:"monospace",children:"Name                      Stmts   Miss  Branch BrPart  Cover  Missing Lines"}),e.jsx("rect",{x:"25",y:"75",width:"770",height:"28",rx:"2",fill:"#0c4a6e"}),e.jsx("text",{x:"35",y:"93",fill:"#e0f2fe",fontSize:"9",fontFamily:"monospace",children:"src/admission_engine.py      45      0     12      0   100%   (All covered)"}),e.jsx("rect",{x:"25",y:"105",width:"770",height:"28",rx:"2",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"35",y:"123",fill:"#fecdd3",fontSize:"9",fontFamily:"monospace",children:"src/billing_processor.py     60      3     16      2    93%   45-47, 88->92"}),e.jsx("rect",{x:"25",y:"135",width:"770",height:"28",rx:"2",fill:"#0c4a6e"}),e.jsx("text",{x:"35",y:"153",fill:"#e0f2fe",fontSize:"9",fontFamily:"monospace",children:"src/transcript_engine.py     35      0      8      0   100%   (All covered)"}),e.jsx("rect",{x:"25",y:"175",width:"770",height:"50",rx:"4",fill:"#0f172a",stroke:"#38bdf8"}),e.jsx("text",{x:"35",y:"195",fill:"#facc15",fontSize:"9",fontWeight:"bold",children:"Missing Diagnostic: Lines 45-47 in billing_processor.py were never executed!"}),e.jsx("text",{x:"35",y:"212",fill:"#94a3b8",fontSize:"8",children:"Missing Branch: 88->92 indicates condition at line 88 was never evaluated as False."})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"HTML INTERACTIVE COVERAGE HEATMAP (--cov-report=html)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#1e1b4b",stroke:"#a855f7"}),e.jsx("rect",{x:"25",y:"30",width:"770",height:"195",rx:"6",fill:"#090d16",stroke:"#475569"}),e.jsx("rect",{x:"25",y:"30",width:"770",height:"30",rx:"6",fill:"#1e293b"}),e.jsx("text",{x:"35",y:"50",fill:"#cbd5e1",fontSize:"10",fontFamily:"monospace",children:"htmlcov/src_billing_processor_py.html • 93.3% Coverage"}),e.jsx("rect",{x:"35",y:"70",width:"750",height:"22",rx:"2",fill:"#064e3b"}),e.jsx("text",{x:"45",y:"85",fill:"#86efac",fontSize:"9",fontFamily:"monospace",children:"44:   def pay_tuition(self, amount: float):"}),e.jsx("rect",{x:"35",y:"95",width:"750",height:"42",rx:"2",fill:"#881337",stroke:"#fb7185"}),e.jsx("text",{x:"45",y:"110",fill:"#fecdd3",fontSize:"9",fontFamily:"monospace",children:"45:       if amount <= 0:"}),e.jsx("text",{x:"45",y:"128",fill:"#fecdd3",fontSize:"9",fontFamily:"monospace",children:'46:           raise ValueError("Payment must be positive")  # MISSED (RED)'}),e.jsx("rect",{x:"35",y:"140",width:"750",height:"22",rx:"2",fill:"#78350f",stroke:"#f59e0b"}),e.jsx("text",{x:"45",y:"155",fill:"#fef3c7",fontSize:"9",fontFamily:"monospace",children:"88:       if self.is_scholarship_eligible():  # PARTIAL BRANCH (YELLOW)"}),e.jsx("text",{x:"45",y:"195",fill:"#e9d5ff",fontSize:"9",children:"🟢 Green = Executed in tests | 🔴 Red = Never executed | 🟡 Yellow = Partial branch (True or False missed)"})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧪"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Quality Gate & Branch Coverage Simulator"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Adjust tested decision branch counts, toggle branch coverage evaluation, and set CI/CD quality gate failure thresholds:"}),e.jsxs("div",{className:"bg-slate-950 p-5 sm:p-6 rounded-xl border border-slate-800/90 space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"CI Quality Gate Threshold (--cov-fail-under):"}),e.jsx("div",{className:"grid grid-cols-3 gap-2",children:[80,85,90].map(t=>e.jsxs("button",{onClick:()=>f(t),className:s("p-2.5 rounded-xl border text-center font-mono font-bold transition-all",a===t?"bg-teal-950/60 border-teal-500 text-teal-300 shadow-md":"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"),children:[t,"% Threshold"]},t))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"Tested Decision Branches:"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{count:2,label:"2 of 4 Branches (50%)",desc:"Misses False paths"},{count:4,label:"4 of 4 Branches (100%)",desc:"All paths tested"}].map(t=>e.jsxs("button",{onClick:()=>b(t.count),className:s("p-2.5 rounded-xl border text-left transition-all",c===t.count?"bg-cyan-950/60 border-cyan-500 shadow-md":"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"),children:[e.jsx("div",{className:"text-xs font-bold text-slate-200",children:t.label}),e.jsx("div",{className:"text-[10px] text-cyan-400 font-mono",children:t.desc})]},t.count))})]})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 bg-slate-900/80 rounded-xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-bold text-white",children:"Enable Strict Branch Coverage (--cov-branch)"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"Forces coverage calculation to evaluate both True and False outcomes"})]}),e.jsx("button",{onClick:()=>v(!n),className:s("px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all",n?"bg-emerald-950 border border-emerald-500 text-emerald-300":"bg-slate-800 border border-slate-700 text-slate-400"),children:n?"BRANCH COVERAGE: ACTIVE":"STATEMENT ONLY (LENIENT)"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2",children:[e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-teal-900/50",children:[e.jsx("div",{className:"text-xs text-teal-400 font-medium mb-1",children:"Computed Code Coverage"}),e.jsxs("div",{className:"text-3xl font-bold font-mono text-teal-300",children:[p,"%"]}),e.jsx("div",{className:"text-[11px] text-slate-400 mt-1",children:n?`${c}/${g} branches`:"100% statements"})]}),e.jsxs("div",{className:s("p-4 rounded-xl border transition-all",l?"bg-emerald-950/40 border-emerald-500/70":"bg-rose-950/40 border-rose-500/70"),children:[e.jsx("div",{className:s("text-xs font-medium mb-1",l?"text-emerald-400":"text-rose-400"),children:"CI/CD Build Quality Gate"}),e.jsx("div",{className:s("text-2xl font-bold font-mono",l?"text-emerald-300":"text-rose-300"),children:l?"✅ BUILD PASSED":"❌ BUILD FAILED"}),e.jsx("div",{className:"text-[11px] text-slate-300 mt-1",children:l?`Coverage >= ${a}%`:`Required ${a}%, Got ${p}%`})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-purple-900/50",children:[e.jsx("div",{className:"text-xs text-purple-400 font-medium mb-1",children:"Diagnostic Quality"}),e.jsx("div",{className:"text-xs font-bold font-mono text-purple-300 mt-1 leading-snug",children:n&&c===4?"Production Ready: 100% Robustness":"Untested False branches exist!"})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"Generated pyproject.toml Configuration & CLI:"}),e.jsx("pre",{className:"p-4 bg-slate-900/90 border border-slate-800 rounded-xl text-xs sm:text-sm font-mono text-teal-200 overflow-x-auto leading-relaxed",children:y})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Production Code Labs & Coverage Suites"})]}),e.jsx("p",{className:"text-slate-300 mb-8 text-base leading-relaxed",children:"Inspect, run, and master all four production-grade code coverage labs covering statement vs branch metrics, exclusion pragmas, terminal diagnostic tables, and the complete institutional audit:"}),e.jsxs("div",{className:"space-y-10",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:"Lab 1: Statement Coverage vs Branch Decision Coverage"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Demonstrating how a single test achieves 100% line coverage while missing critical False branches in scholarship calculations."})]}),e.jsx(h,{fileModule:N,title:"basic_statement_vs_branch_coverage.py",highlightLines:[18,24,34,46]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-cyan-300",children:"Lab 2: Exclusion Pragmas & pyproject.toml Standards"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Using ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"# pragma: no cover"})," on untestable boilerplate and configuring project-wide coverage rules."]})]}),e.jsx(h,{fileModule:C,title:"coverage_configuration_and_exclusions.py",highlightLines:[20,24,42]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-purple-300",children:"Lab 3: pytest-cov CLI Reports & Missing Line Diagnostics"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Interpreting terminal missing line number ranges (",e.jsx("code",{className:"text-purple-300 font-mono",children:"45-47"}),") and branch decision markers (",e.jsx("code",{className:"text-purple-300 font-mono",children:"88->92"}),")."]})]}),e.jsx(h,{fileModule:T,title:"pytest_cov_cli_and_html_reports.py",highlightLines:[14,21]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-amber-300",children:"Lab 4: Institutional Student Ledger 100% Coverage Audit"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Complete audit of student fee mutations, merit tiers, and settlement logic for Mamata, Mahima, and Abhronila across Barrackpore, Kolkata, and Ichapur."})]}),e.jsx(h,{fileModule:E,title:"institutional_coverage_audit_suite.py",highlightLines:[19,31,48,64]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Code Coverage Pitfalls & Anti-Patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"1. Chasing 100% Vanity Coverage"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Writing low-value tests for trivial getters, setters, or Django settings files to hit 100% creates maintenance drag with zero reliability gain."}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# ANTI-PATTERN: Testing trivial def get_name(self): return self.name",`
`,"# BEST PRACTICE: Focus on 85%+ branch coverage on core logic"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"2. Ignoring Branch Coverage (--cov-branch)"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Evaluating only statement coverage hides untested ",e.jsx("code",{className:"text-rose-400 font-mono",children:"else:"})," branches and unhandled boolean decision conditions."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# BUG: pytest --cov=src (Misses False branches!)",`
`,"# FIX: pytest --cov=src --cov-branch"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"3. Counting Test Files as Source Code"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Running ",e.jsx("code",{className:"text-rose-400 font-mono",children:"pytest --cov=."})," includes test files in the coverage calculation, artificially inflating coverage numbers."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# BUG: --cov=. (Counts tests as source!)",`
`,'# FIX: --cov=src or source = ["src"]']})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"4. Tests with Zero Assertions"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Executing code without asserting on the return value gives high line coverage while testing absolutely nothing!"}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# BUG: def test_f(): calculate_fee() # 100% coverage, 0 checks!",`
`,"# FIX: assert calculate_fee() == 8500.0"]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Professional Code Coverage Checklist"})]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm sm:text-base",children:[e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Enable Branch Coverage:"})," Always include ",e.jsx("code",{className:"text-teal-300 font-mono",children:"--cov-branch"})," to test both True and False decision paths."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Set CI Quality Gates:"})," Enforce ",e.jsx("code",{className:"text-teal-300 font-mono",children:"--cov-fail-under=85"})," to block pull requests that degrade coverage."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Exclude Boilerplate via Pragmas:"})," Use ",e.jsx("code",{className:"text-teal-300 font-mono",children:"# pragma: no cover"})," for untestable ",e.jsx("code",{className:"text-teal-300 font-mono",children:"__repr__"})," and debug fallbacks."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Audit Missing Lines with HTML Reports:"})," Use ",e.jsx("code",{className:"text-teal-300 font-mono",children:"--cov-report=html"})," to visually inspect uncovered red lines."]})]})]})]}),e.jsx("section",{ref:r,className:"section-hidden",children:e.jsx(j,{title:"Measuring Code Coverage with pytest-cov FAQs",questions:A})}),e.jsx("section",{ref:r,className:"section-hidden",children:e.jsx(_,{content:S,title:"Topic 7: Measuring Code Coverage with pytest-cov Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic7_note.txt"})}),e.jsx("section",{ref:r,className:"section-hidden",children:e.jsx(w,{note:"Code coverage is not a competition to reach vanity 100% metrics—it is a diagnostic flashlight that reveals untested logical blind spots. In our institutional student management systems across Barrackpore, Kolkata, Ichapur, and Jadavpur, auditing branch coverage ensures that every discount tier, scholarship boundary, and payment exception for Mamata, Mahima, and Abhronila is verified under both True and False conditions. Enforcing an 85% branch coverage gate in your CI pipeline guarantees rock-solid reliability across every production deployment."})})]})]})}export{O as default};
