import{b as a,j as e,bg as r}from"./vendor-react-core-Doz9nIC6.js";import{P as l}from"./PythonFileLoader-hCi5osN-.js";import{P as h}from"./PlainTextPrint-C08xhKA4.js";import{F as g}from"./FAQTemplate-BHhlgA96.js";import{T as b}from"./TeacherSukantaHui-DerPxfxp.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const y=`"""\r
# Module: 004_004_capstone-projects\r
# Topic 3: Writing complete documentation (README.md, docstrings, typing hints)\r
# File: pep257_docstrings_and_sphinx_formatting.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating PEP 257 Google-Style docstrings and executable doctests.\r
"""\r
\r
import doctest\r
\r
def calculate_merit_scholarship(base_fee: float, academic_score: float, is_ews: bool = False) -> float:\r
    """Calculates final discounted tuition fee after applying institutional scholarship rules.\r
\r
    Applies a 20% merit discount for scores >= 90.0% and an additional 10%\r
    Economically Weaker Section (EWS) grant, capped at a maximum 30% reduction.\r
\r
    Args:\r
        base_fee (float): The total unadjusted course tuition in INR (must be > 0).\r
        academic_score (float): Academic admission test score between 0.0 and 100.0.\r
        is_ews (bool, optional): Whether the candidate qualifies for EWS aid. Defaults to False.\r
\r
    Returns:\r
        float: Net tuition amount payable after applying verified deductions.\r
\r
    Raises:\r
        ValueError: If base_fee is non-positive or academic_score is outside [0.0, 100.0].\r
\r
    Examples:\r
        >>> calculate_merit_scholarship(20000.0, 95.0, is_ews=False)\r
        16000.0\r
        >>> calculate_merit_scholarship(20000.0, 92.0, is_ews=True)\r
        14000.0\r
        >>> calculate_merit_scholarship(10000.0, 75.0, is_ews=False)\r
        10000.0\r
    """\r
    if base_fee <= 0:\r
        raise ValueError("Base tuition fee must be strictly positive.")\r
    if not (0.0 <= academic_score <= 100.0):\r
        raise ValueError(f"Score {academic_score} is outside the valid range [0.0, 100.0].")\r
\r
    merit_rate = 0.20 if academic_score >= 90.0 else (0.10 if academic_score >= 80.0 else 0.0)\r
    ews_rate = 0.10 if is_ews else 0.0\r
    \r
    total_rate = min(0.30, merit_rate + ews_rate)\r
    return round(base_fee * (1.0 - total_rate), 2)\r
\r
def run_doctest_verification():\r
    print("   [...] Executing Embedded Docstring Doctests...")\r
    results = doctest.testmod(verbose=False)\r
    assert results.failed == 0, f"Doctests failed: {results.failed} errors"\r
    print(f"   [PASS] 1. All {results.attempted} embedded docstring doctests executed & passed!")\r
\r
def main():\r
    print("=" * 75)\r
    print("[PEP 257 DOCSTRINGS] Google-Style Formatting & Executable Doctests")\r
    print("=" * 75)\r
\r
    run_doctest_verification()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Writing executable doctests in PEP 257 docstrings guarantees")\r
    print("           that documentation examples never go out of sync with code behavior.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,E=`"""\r
# Module: 004_004_capstone-projects\r
# Topic 3: Writing complete documentation (README.md, docstrings, typing hints)\r
# File: pep484_static_typing_and_mypy_annotations.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating PEP 484 / PEP 585 static typing, Generics, Protocols,\r
#              Literal, TypedDict, and Self.\r
"""\r
\r
from typing import Protocol, TypeVar, Literal, TypedDict, Self\r
from dataclasses import dataclass\r
\r
# 1. LITERAL TYPES & TYPED DICTS\r
CampusCode = Literal["BP", "CC", "IC", "JU"]\r
\r
class StudentJSONPayload(TypedDict):\r
    sid: str\r
    name: str\r
    campus: CampusCode\r
    balance: float\r
\r
# 2. PROTOCOL (Static Duck Typing / Structural Subtyping)\r
class Serializable(Protocol):\r
    def to_json(self) -> str:\r
        ...\r
\r
# 3. GENERICS WITH TYPEVAR\r
T = TypeVar("T")\r
\r
class RepositoryContainer(list[T]):\r
    """Generic in-memory repository container."""\r
    def find_first(self) -> T | None:\r
        return self[0] if self else None\r
\r
# 4. FLUENT BUILDER USING 'Self' (Python 3.11+)\r
@dataclass\r
class StudentProfile:\r
    sid: str\r
    name: str\r
    campus: CampusCode\r
    balance: float = 0.0\r
\r
    def with_name(self, new_name: str) -> Self:\r
        self.name = new_name\r
        return self\r
\r
    def with_balance(self, new_balance: float) -> Self:\r
        self.balance = new_balance\r
        return self\r
\r
    def to_dict(self) -> StudentJSONPayload:\r
        return {\r
            "sid": self.sid,\r
            "name": self.name,\r
            "campus": self.campus,\r
            "balance": self.balance\r
        }\r
\r
def test_static_typing():\r
    print("   [...] Testing Static Typing Contracts & Generics...")\r
\r
    # 1. Fluent builder typing\r
    student = StudentProfile("STU_BP_01", "Mamata", "BP")\r
    student.with_name("Mamata Banerjee").with_balance(15000.0)\r
    assert student.name == "Mamata Banerjee"\r
    assert student.balance == 15000.0\r
    print("   [PASS] 1. Fluent builder with Self type annotations validated")\r
\r
    # 2. Generic Container\r
    repo: RepositoryContainer[StudentProfile] = RepositoryContainer()\r
    repo.append(student)\r
    first_item = repo.find_first()\r
    assert first_item is not None and first_item.sid == "STU_BP_01"\r
    print(f"   [PASS] 2. Generic RepositoryContainer[T] fetched: {first_item.name} ({first_item.campus})")\r
\r
    # 3. TypedDict Payload\r
    payload: StudentJSONPayload = student.to_dict()\r
    assert payload["campus"] == "BP"\r
    print(f"   [PASS] 3. Strongly-typed TypedDict generated: {payload}")\r
\r
def main():\r
    print("=" * 75)\r
    print("[PEP 484 STATIC TYPING] Protocols, Generics, Literal & TypedDict")\r
    print("=" * 75)\r
\r
    test_static_typing()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Comprehensive static typing annotations turn Python into a")\r
    print("           robust, self-verifying language with zero runtime performance cost.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,v=`"""\r
# Module: 004_004_capstone-projects\r
# Topic 3: Writing complete documentation (README.md, docstrings, typing hints)\r
# File: readme_generation_and_badges.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating automated generation of a professional open-source README.md.\r
"""\r
\r
def generate_production_readme(project_name: str, author: str) -> str:\r
    """Generates an enterprise-ready Markdown README with badges, quickstarts, and architecture."""\r
    readme_content = f"""# {project_name}\r
\r
[![CI Build](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/coder-accotax)\r
[![Code Coverage](https://img.shields.io/badge/coverage-96%25-brightgreen.svg)](https://github.com/coder-accotax)\r
[![Python Version](https://img.shields.io/badge/python-3.10%20%7C%203.11%20%7C%203.12-blue.svg)](https://www.python.org/)\r
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\r
\r
> **Enterprise multi-campus student admission, ledger tracking, and fee settlement engine.**\r
\r
---\r
\r
## Key Features\r
\r
- **Relational Integrity**: SQLite backend with strict PRAGMA foreign_keys = ON and indexes.\r
- **Layered Architecture**: Decoupled domain models, SQLite repositories, and business services.\r
- **Defensive Observability**: Multi-destination logging with RotatingFileHandler and custom domain exceptions.\r
- **Modular CLI Hub**: Subcommand-driven administrative terminal powered by argparse.\r
\r
---\r
\r
## Quickstart & Installation\r
\r
\`\`\`bash\r
# 1. Clone the repository\r
git clone https://github.com/coder-accotax/institutional-manager.git\r
cd institutional-manager\r
\r
# 2. Create and activate virtual environment\r
python -m venv .venv\r
source .venv/bin/activate  # On Windows: .venv\\\\Scripts\\\\activate\r
\r
# 3. Install in editable development mode with dev dependencies\r
pip install -e ".[dev]"\r
\`\`\`\r
\r
---\r
\r
## CLI Usage Examples\r
\r
\`\`\`bash\r
# Enroll a student\r
campus-cli enroll --sid STU_BP_01 --name "Mamata" --campus "Barrackpore" --fee 25000\r
\r
# Record an installment payment\r
campus-cli pay --sid STU_BP_01 --amount 15000 --memo "Installment 1 - NetBanking"\r
\r
# Generate multi-campus ledger summary report\r
campus-cli report\r
\`\`\`\r
\r
---\r
\r
## Running Automated Tests & Coverage\r
\r
\`\`\`bash\r
# Run pytest with branch coverage quality gates\r
pytest --cov=src --cov-branch --cov-report=term-missing --cov-fail-under=85\r
\`\`\`\r
\r
---\r
\r
## Author & License\r
\r
Maintained by **{author}** ([Coder & Accotax](https://www.codernaccotax.co.in)).  \r
Released under the [MIT License](LICENSE).\r
"""\r
    return readme_content\r
\r
def test_readme_generator():\r
    print("   [...] Generating Professional README Manifest...")\r
    doc = generate_production_readme("Institutional Student Manager", "Sukanta Hui")\r
    assert "Key Features" in doc\r
    assert "Quickstart & Installation" in doc\r
    assert "Running Automated Tests" in doc\r
    print("   [PASS] 1. Production README.md generated with Shields.io badges & quickstarts")\r
\r
def main():\r
    print("=" * 75)\r
    print("[README GENERATION] Standout Open-Source Documentation Standards")\r
    print("=" * 75)\r
\r
    test_readme_generator()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] A clean, badge-decorated README with quickstart copy-paste")\r
    print("           commands establishes immediate project credibility for recruiters.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,j=`"""\r
# Module: 004_004_capstone-projects\r
# Topic 3: Writing complete documentation (README.md, docstrings, typing hints)\r
# File: institutional_documentation_audit_suite.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Full documentation, type annotation, and doctest verification suite\r
#              for the institutional management engine.\r
"""\r
\r
from typing import Literal, Optional\r
from dataclasses import dataclass\r
import doctest\r
\r
CampusTier = Literal["Tier1_Metropolitan", "Tier2_Regional"]\r
\r
@dataclass\r
class VerifiedStudent:\r
    """Represents a verified institutional student record.\r
\r
    Attributes:\r
        sid (str): Standardized registration token (e.g. 'BP-2026-0042').\r
        name (str): Full registered student name.\r
        campus (str): Campus location (Barrackpore, Kolkata, Ichapur).\r
        base_fee (float): Initial tuition fee.\r
        paid_amount (float): Total payments completed.\r
    """\r
    sid: str\r
    name: str\r
    campus: str\r
    base_fee: float\r
    paid_amount: float = 0.0\r
\r
    @property\r
    def outstanding_balance(self) -> float:\r
        """Calculates remaining tuition balance.\r
\r
        Returns:\r
            float: Outstanding debt amount.\r
\r
        Examples:\r
            >>> s = VerifiedStudent('BP-2026-0001', 'Mamata', 'Barrackpore', 20000.0, 12000.0)\r
            >>> s.outstanding_balance\r
            8000.0\r
        """\r
        return max(0.0, self.base_fee - self.paid_amount)\r
\r
class InstitutionalDocumentationEngine:\r
    """Administrative documentation and certification engine."""\r
\r
    @classmethod\r
    def format_completion_certificate(cls, student: VerifiedStudent, gpa: float) -> str:\r
        """Generates formal graduation certification string.\r
\r
        Args:\r
            student (VerifiedStudent): Validated student domain entity.\r
            gpa (float): Cumulative grade point average (0.0 to 100.0).\r
\r
        Returns:\r
            str: Standardized certificate transcript string.\r
\r
        Raises:\r
            ValueError: If GPA is not in range [0.0, 100.0] or student has unpaid debt.\r
\r
        Examples:\r
            >>> s = VerifiedStudent('BP-01', 'Mamata', 'Barrackpore', 20000.0, 20000.0)\r
            >>> InstitutionalDocumentationEngine.format_completion_certificate(s, 95.0)\r
            'CERTIFICATE: Mamata has graduated from Barrackpore Campus with 95.0 GPA.'\r
        """\r
        if not (0.0 <= gpa <= 100.0):\r
            raise ValueError(f"Invalid GPA {gpa}: must be between 0.0 and 100.0.")\r
        if student.outstanding_balance > 0:\r
            raise ValueError(f"Cannot certify student with unpaid balance of Rs. {student.outstanding_balance:,.2f}.")\r
\r
        return f"CERTIFICATE: {student.name} has graduated from {student.campus} Campus with {gpa:.1f} GPA."\r
\r
def run_documentation_audit():\r
    print("   [...] Running Institutional Documentation & Doctest Audit...")\r
    results = doctest.testmod(verbose=False)\r
    assert results.failed == 0, f"Doctests failed: {results.failed} errors"\r
    print(f"   [PASS] 1. All {results.attempted} embedded docstring examples passed verification")\r
\r
    # 2. Test certificate generation for Mamata\r
    mamata = VerifiedStudent("BP-2026-0001", "Mamata", "Barrackpore", 25000.0, 25000.0)\r
    cert = InstitutionalDocumentationEngine.format_completion_certificate(mamata, 96.5)\r
    assert "Mamata" in cert and "96.5 GPA" in cert\r
    print(f"   [PASS] 2. Verified Student Certificate generated: {cert}")\r
\r
def main():\r
    print("=" * 80)\r
    print("[CASE STUDY] Complete Institutional Documentation & Type Audit")\r
    print("=" * 80)\r
\r
    run_documentation_audit()\r
\r
    print("=" * 80)\r
    print("[TAKEAWAY] Pair rigorous PEP 257 Google-style docstrings with executable doctests")\r
    print("           and static typing for bulletproof enterprise codebases.")\r
    print("=" * 80)\r
\r
if __name__ == "__main__":\r
    main()\r
`,w=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 4: PRO LEVEL • MODULE 004_004: CAPSTONE PROJECTS\r
           TOPIC 3: WRITING COMPLETE DOCUMENTATION (README, DOCSTRINGS, TYPES)\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. GOOGLE-STYLE DOCSTRING FORMAT\r
--------------------------------------------------------------------------------\r
  def calculate_waiver(base_fee: float, score: float) → float:\r
      """Calculates net tuition fee after applying institutional merit rules.\r
\r
      Args:\r
          base_fee (float): The initial tuition charge in INR (must be > 0).\r
          score (float): Academic admission merit percentile (0 to 100).\r
\r
      Returns:\r
          float: Final discounted tuition amount.\r
\r
      Raises:\r
          ValueError: If base_fee is non-positive or score is outside [0, 100].\r
\r
      Examples:\r
          >>> calculate_waiver(20000.0, 95.0)\r
          16000.0\r
      """\r
\r
--------------------------------------------------------------------------------\r
2. MODERN STATIC TYPE ANNOTATIONS (PEP 585 / 604)\r
--------------------------------------------------------------------------------\r
  from typing import Protocol, TypeVar, Literal\r
\r
  CampusName = Literal["Barrackpore", "Kolkata", "Ichapur", "Jadavpur"]\r
\r
  def get_campus_grant(campus: CampusName) → float:\r
      return 0.15 if campus == "Barrackpore" else 0.05\r
\r
--------------------------------------------------------------------------------\r
3. ANATOMY OF A STANDOUT README.MD\r
--------------------------------------------------------------------------------\r
  1. Project Title + Badges (CI status, Coverage, License, Python version)\r
  2. Short Value Proposition / 2-sentence Overview\r
  3. Key Features & Architecture Diagram\r
  4. Quickstart / Installation (pip install -e .)\r
  5. Usage CLI & Python API Examples\r
  6. Running Automated Tests (pytest --cov)\r
  7. License & Author Attribution\r
\r
================================================================================\r
       END OF STUDY NOTE • TOPIC 3: DOCUMENTATION & TYPE HINTS\r
================================================================================\r
`,T=[{question:"What are the primary sections of a standard Google-Style Python docstring (PEP 257)?",shortAnswer:"1. One-line summary, 2. Extended description, 3. 'Args:' (parameter names, types, descriptions), 4. 'Returns:' (return type and description), 5. 'Raises:' (exceptions and trigger conditions), and 6. 'Examples:' (interactive doctests).",explanation:"Standard Google Python docstring sections.",hint:"Summary, Args, Returns, Raises, and Examples.",level:"basic",codeExample:`"""One-line summary.

Args:
    sid: Student ID.

Returns:
    StudentProfile.
"""`},{question:"What is a 'doctest' in Python and how do you execute it?",shortAnswer:"Doctests are interactive Python REPL sessions embedded directly within function docstrings (using '>>>'); running 'python -m doctest module.py' or 'pytest --doctest-modules' verifies that the code examples in documentation execute correctly without errors.",explanation:"Self-testing documentation using Python's doctest module.",hint:"Embeds '>>>' sessions in docstrings and tests them with python -m doctest.",level:"basic",codeExample:`"""
Examples:
    >>> add(2, 3)
    5
"""`},{question:"What are the advantages of adding PEP 484 static type hints to Python codebases?",shortAnswer:"Type hints provide instant IDE autocompletion, enable automated static error detection with Mypy before runtime, serve as self-enforcing documentation, and dramatically improve code maintainability during large refactorings.",explanation:"Static typing benefits in dynamic Python.",hint:"Enables IDE autocomplete, Mypy bug catching before runtime, and self-documenting code.",level:"basic",codeExample:"def calculate_fee(base: float, discount: float = 0.0) → float:"},{question:"What is 'typing.Protocol' (Structural Subtyping / Static Duck Typing) introduced in PEP 544?",shortAnswer:"'Protocol' allows defining an interface based on expected methods and attributes; any class that implements those methods is automatically considered a valid subtype by Mypy without requiring explicit inheritance.",explanation:"Structural subtyping via Protocol vs nominal subclassing.",hint:"Allows static duck typing: if it has the required methods, it satisfies the Protocol without subclassing.",level:"complex",codeExample:`class Renderable(Protocol):
    def render(self) → str: ...`},{question:"What are the essential sections every professional GitHub 'README.md' must contain?",shortAnswer:"1. Project Title & Status Badges, 2. Value Proposition (What it does & why it matters), 3. Key Features list, 4. Installation Quickstart ('pip install -e .'), 5. Usage Code Examples, 6. Running Tests ('pytest --cov'), 7. Architecture Overview, and 8. License.",explanation:"Standard structure of a professional open-source README.",hint:"Title/badges, description, installation, usage examples, testing guide, and license.",level:"basic",codeExample:"# Institutional Manager\n[![CI](...)]\n\n## Quickstart\n```bash\npip install -e .\n```"},{question:"What is the modern Python 3.10+ union syntax compared to legacy 'typing.Union'?",shortAnswer:"Python 3.10+ uses the pipe operator '|' (e.g. 'str | None', 'int | float') instead of 'Union[str, None]' and 'Optional[str]'.",explanation:"PEP 604 union syntax via the pipe operator.",hint:"Use 'str | None' instead of 'Optional[str]' or 'Union[str, None]'.",level:"basic",codeExample:"def find_student(sid: str) → Student | None:"},{question:"What does 'typing.Literal' represent and when should it be used?",shortAnswer:`'Literal' restricts a type to an exact set of predefined literal values (e.g. 'Literal["Barrackpore", "Kolkata", "Ichapur"]'), providing compile-time validation for fixed strings or constants.`,explanation:"Literal type constraints in static typing.",hint:`Restricts arguments to exact specific literal values like 'Literal["GET", "POST"]'.`,level:"moderate",codeExample:"CampusType = Literal['Barrackpore', 'Kolkata', 'Ichapur']"},{question:"What is the difference between 'typing.TypeVar' and concrete types in generic programming?",shortAnswer:"'TypeVar' is a type variable used in generic functions or classes to declare that an input type and output type are linked (e.g. 'def first(items: list[T]) → T:'), preserving exact type information across transformations.",explanation:"Generic type parameters via TypeVar.",hint:"T = TypeVar('T') preserves the exact type across function inputs and outputs.",level:"moderate",codeExample:`T = TypeVar('T')
def get_first(items: list[T]) → T: return items[0]`},{question:"What is the Diátaxis documentation framework and what are its 4 distinct quadrants?",shortAnswer:"1. Tutorials (learning-oriented for beginners), 2. How-To Guides (problem-oriented step-by-step solutions), 3. Reference (information-oriented technical specs and API docs), and 4. Explanation (understanding-oriented architectural concepts).",explanation:"The Diátaxis documentation architecture.",hint:"Tutorials, How-To Guides, Technical Reference, and Conceptual Explanation.",level:"moderate",codeExample:"# Diátaxis Framework organizes documentation into 4 distinct quadrants"},{question:"What does 'mypy --strict' check during automated continuous integration?",shortAnswer:"'mypy --strict' enforces maximum type safety by disallowing untyped function definitions, forbidding implicit 'Any', checking optional access (None checks), and enforcing strict generic variance.",explanation:"Strict static type verification with Mypy.",hint:"Forces all functions to have type hints, forbids untyped Any, and enforces strict None checks.",level:"moderate",codeExample:"mypy --strict src/"},{question:"What is 'typing.TypedDict' and how does it differ from a standard Python 'dict'?",shortAnswer:"'TypedDict' allows type checkers to validate that a dictionary possesses specific string keys with specific value types at compile time, while remaining a regular runtime dictionary with zero performance overhead.",explanation:"Type-checked dictionary schemas via TypedDict.",hint:"Provides compile-time type checking for dictionary keys and value types.",level:"moderate",codeExample:`class StudentPayload(TypedDict):
    sid: str
    gpa: float`},{question:"How do you generate automated HTML API documentation from Python docstrings?",shortAnswer:"Using documentation generators like Sphinx (with 'sphinx-autodoc') or MkDocs (with 'mkdocstrings'), which parse Python docstrings and build static searchable HTML websites.",explanation:"Automated API documentation pipelines.",hint:"Use Sphinx or MkDocs with mkdocstrings to build static searchable HTML sites.",level:"basic",codeExample:"# mkdocs.yml with mkdocstrings plugin"},{question:"What is 'typing.Callable' used for in type annotations?",shortAnswer:"'Callable[[ArgType1, ArgType2], ReturnType]' annotates higher-order functions that accept or return functions, callbacks, or decorators.",explanation:"Function signature typing with Callable.",hint:"Annotates callback functions and function parameters: Callable[[int, int], str].",level:"moderate",codeExample:"def apply_discount(fee: float, strategy: Callable[[float], float]) → float:"},{question:"What is the purpose of 'typing.overload'?",shortAnswer:"'@overload' decorators allow developers to declare multiple type signatures for a single function whose return type depends on the specific types of its arguments, followed by one single runtime implementation.",explanation:"Function signature overloading in Python static typing.",hint:"Declares different return types depending on input types for IDEs and type checkers.",level:"complex",codeExample:`@overload
def get_val(key: str) → str: ...
@overload
def get_val(key: int) → int: ...`},{question:"What is 'typing.Final' and '@final' in Python?",shortAnswer:"'Final' prevents a variable or attribute from being reassigned, and '@final' prevents a class from being subclassed or a method from being overridden.",explanation:"Immutability and inheritance prevention via Final.",hint:"Prevents variables from being reassigned and classes from being inherited.",level:"basic",codeExample:"MAX_FEE: Final[float] = 50000.0"},{question:"Why should you include Shields.io status badges in your project's README.md?",shortAnswer:"Badges provide immediate visual proof of repository health (CI build passing, code coverage %, latest release version, supported Python versions, license type), establishing immediate credibility.",explanation:"Repository credibility and visual status indicators.",hint:"Visually displays CI status, test coverage %, and supported Python versions at a glance.",level:"basic",codeExample:"[![Build Status](https://img.shields.io/github/actions/workflow/status/org/repo/ci.yml)]"},{question:"What is 'typing.Self' introduced in Python 3.11 (PEP 673)?",shortAnswer:"'Self' represents the current class instance type within method signatures, making fluent method chaining and classmethod factory constructors cleanly typed without manual TypeVar boilerplate.",explanation:"Fluent builder typing with Self.",hint:"Represents the returning class instance type for method chaining.",level:"moderate",codeExample:`def set_name(self, name: str) → Self:
    self.name = name
    return self`},{question:"How do you document exceptions that a function is expected to raise?",shortAnswer:"Under the 'Raises:' section of the docstring, listing the exact Exception class and the business condition that triggers it.",explanation:"Documenting failure modes and exceptions.",hint:"Use the 'Raises:' block in docstrings with the exception name and trigger condition.",level:"basic",codeExample:`Raises:
    ValueError: If base_fee is negative.
    StudentNotFoundError: If sid does not exist.`},{question:"What is the difference between a docstring and a comment in Python?",shortAnswer:`Comments ('#') are ignored by the Python interpreter and intended for internal code notes; docstrings ('"""..."""') are retained in memory at runtime as '__doc__' attributes, accessible via 'help()' and documentation generators.`,explanation:"Runtime introspection of docstrings vs stripped comments.",hint:"Docstrings are retained in '__doc__' for help() and tools; comments are ignored.",level:"basic",codeExample:"print(calculate_fee.__doc__) # Inspect docstring at runtime"},{question:"What is the ultimate golden rule of professional Python documentation and typing?",shortAnswer:"Every public function, class, and module must have a PEP 257 Google-style docstring with executable doctests, full PEP 484 static type annotations passing 'mypy --strict', and a clear, badge-decorated GitHub README.",explanation:"The complete enterprise Python documentation standard.",hint:"Google docstrings + doctests + PEP 484 static typing + mypy strict + clean README.",level:"basic",codeExample:"# Enterprise Python Documentation Standard"}];function R(){const d=a.useRef([]),[s,c]=a.useState("docstringAnatomy"),[m,x]=a.useState("GOOGLE"),[p,f]=a.useState(!0);let i="";m==="GOOGLE"?i=`def calculate_waiver(base_fee: float, score: float) → float:
    """Calculates final net tuition after applying institutional merit rules.

    Args:
        base_fee (float): Initial tuition fee in INR (must be > 0).
        score (float): Academic admission test score between 0.0 and 100.0.

    Returns:
        float: Net discounted tuition fee payable.

    Raises:
        ValueError: If base_fee <= 0 or score is outside [0.0, 100.0].

    Examples:
        >>> calculate_waiver(20000.0, 95.0)
        16000.0
    """`:m==="NUMPY"?i=`def calculate_waiver(base_fee: float, score: float) → float:
    """
    Calculates final net tuition after applying institutional merit rules.

    Parameters
    ----------
    base_fee : float
        Initial tuition fee in INR (must be > 0).
    score : float
        Academic admission test score between 0.0 and 100.0.

    Returns
    -------
    float
        Net discounted tuition fee payable.

    Raises
    ------
    ValueError
        If base_fee <= 0 or score is outside [0.0, 100.0].
    """`:i=`def calculate_waiver(base_fee: float, score: float) → float:
    """Calculates final net tuition after applying institutional merit rules.

    :param base_fee: Initial tuition fee in INR (must be > 0).
    :type base_fee: float
    :param score: Academic admission test score between 0.0 and 100.0.
    :type score: float
    :returns: Net discounted tuition fee payable.
    :rtype: float
    :raises ValueError: If base_fee <= 0 or score is outside [0.0, 100.0].
    """`,a.useEffect(()=>{const t=new IntersectionObserver(o=>{o.forEach(u=>{u.isIntersecting&&u.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return d.current.forEach(o=>{o&&t.observe(o)}),()=>t.disconnect()},[]);const n=t=>{t&&!d.current.includes(t)&&d.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:n,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 4 • Module 004_004"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 3"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Capstone Projects, Portfolio & Interview Mastery"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Writing Complete Documentation: ",e.jsx("span",{className:"text-teal-400",children:"README, Docstrings & Types"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master the art of self-documenting codebases and open-source documentation: writing PEP 257 Google-style docstrings, embedding executable doctests with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"doctest.testmod()"}),", annotating full PEP 484 / PEP 585 static types (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"Protocol"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"TypeVar"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"TypedDict"}),"), passing ",e.jsx("code",{className:"text-purple-300 font-mono",children:"mypy --strict"}),", and crafting standout GitHub ",e.jsx("code",{className:"text-amber-300 font-mono",children:"README.md"})," files."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📖 PEP 257 Google-Style Docstrings"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🧪 Executable Doctests (doctest.testmod)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ PEP 484 / 585 Static Typing (Mypy)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🌟 Shields.io Decorated README"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Professional Documentation & Static Typing Architecture"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"High-caliber software engineers treat documentation and static typing contracts as first-class architectural assets alongside production algorithms:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ PEP 257 Docstrings"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"Google / Sphinx Style"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Standardized sections (Args, Returns, Raises) parsed by IDE tooltips and automated HTML generators (Sphinx/MkDocs)."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Executable Doctests"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:">>> calculate()"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Interactive REPL examples embedded in docstrings that test themselves automatically during CI execution."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ PEP 484 / 585 Types"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"mypy --strict"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Full static typing (Protocol, TypeVar, TypedDict, Self) catching type mismatches and None-access errors before runtime."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 shadow-lg",children:[e.jsx("div",{className:"text-amber-400 font-bold text-sm mb-1",children:"4️⃣ Standout README"}),e.jsx("code",{className:"text-xs font-mono text-amber-300 block mb-1",children:"Shields.io + Quickstart"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Visual badges, copy-paste quickstart commands, and architectural mermaid diagrams establishing immediate repo credibility."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Diátaxis Documentation Framework"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Organize documentation into 4 distinct quadrants: ",e.jsx("span",{className:"text-teal-300 font-bold",children:"Tutorials"})," (learning-oriented), ",e.jsx("span",{className:"text-cyan-300 font-bold",children:"How-To Guides"})," (problem-oriented recipes), ",e.jsx("span",{className:"text-purple-300 font-bold",children:"Reference"})," (technical API specifications), and ",e.jsx("span",{className:"text-amber-300 font-bold",children:"Explanation"})," (conceptual architecture)."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Docstring Anatomy, Static Typing & Diátaxis Matrix"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>c("docstringAnatomy"),className:r("px-3 py-1.5 rounded-lg transition-all",s==="docstringAnatomy"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Google Docstring Anatomy"}),e.jsx("button",{onClick:()=>c("staticTypes"),className:r("px-3 py-1.5 rounded-lg transition-all",s==="staticTypes"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"PEP 484 Type System"}),e.jsx("button",{onClick:()=>c("diataxisMatrix"),className:r("px-3 py-1.5 rounded-lg transition-all",s==="diataxisMatrix"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Diátaxis 4-Quadrant Matrix"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining docstring specification blocks, structural typing contracts, and documentation information architecture:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:s==="docstringAnatomy"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"PEP 257 GOOGLE-STYLE DOCSTRING STRUCTURE & DOCTEST BLOCKS"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#0f172a",stroke:"#14b8a6"}),e.jsx("rect",{x:"25",y:"30",width:"770",height:"25",rx:"4",fill:"#042f2e",stroke:"#0d9488"}),e.jsx("text",{x:"35",y:"47",fill:"#5eead4",fontSize:"10",fontFamily:"monospace",children:"def calculate_merit_scholarship(base_fee: float, academic_score: float) -> float:"}),e.jsx("rect",{x:"35",y:"65",width:"750",height:"30",rx:"3",fill:"#0c4a6e"}),e.jsx("text",{x:"45",y:"84",fill:"#e0f2fe",fontSize:"9",fontFamily:"monospace",children:'"""1. One-Line Summary: Calculates discounted tuition fee based on merit scores.'}),e.jsx("rect",{x:"35",y:"100",width:"750",height:"38",rx:"3",fill:"#134e4a"}),e.jsx("text",{x:"45",y:"115",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"Args:"}),e.jsx("text",{x:"65",y:"130",fill:"#ccfbf1",fontSize:"8",fontFamily:"monospace",children:"base_fee (float): Tuition in INR (> 0). | academic_score (float): Score in [0, 100]."}),e.jsx("rect",{x:"35",y:"143",width:"750",height:"38",rx:"3",fill:"#1e1b4b"}),e.jsx("text",{x:"45",y:"158",fill:"#e0e7ff",fontSize:"9",fontFamily:"monospace",children:"Returns: float (Final net fee) | Raises: ValueError (Invalid score or fee)"}),e.jsx("rect",{x:"35",y:"186",width:"750",height:"38",rx:"3",fill:"#3b0764"}),e.jsx("text",{x:"45",y:"200",fill:"#f3e8ff",fontSize:"9",fontFamily:"monospace",children:'Examples: >>> calculate_merit_scholarship(20000.0, 95.0)  ➔  16000.0 """'})]})]}):s==="staticTypes"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"PEP 484 / PEP 585 STATIC TYPE SYSTEM IN MODERN PYTHON"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#082f49",stroke:"#0ea5e9"}),e.jsx("rect",{x:"25",y:"35",width:"180",height:"180",rx:"6",fill:"#0369a1",stroke:"#38bdf8"}),e.jsx("text",{x:"35",y:"60",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"1. Generics (TypeVar)"}),e.jsx("text",{x:"35",y:"85",fill:"#e0f2fe",fontSize:"8",fontFamily:"monospace",children:'T = TypeVar("T")'}),e.jsx("text",{x:"35",y:"105",fill:"#e0f2fe",fontSize:"8",fontFamily:"monospace",children:"class Repo(Generic[T]):"}),e.jsx("text",{x:"45",y:"125",fill:"#e0f2fe",fontSize:"8",fontFamily:"monospace",children:"def get(self) -> T:"}),e.jsx("text",{x:"35",y:"195",fill:"#facc15",fontSize:"8",fontWeight:"bold",children:"Preserves Type Links"}),e.jsx("rect",{x:"220",y:"35",width:"180",height:"180",rx:"6",fill:"#0369a1",stroke:"#38bdf8"}),e.jsx("text",{x:"230",y:"60",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"2. Protocol (Duck Type)"}),e.jsx("text",{x:"230",y:"85",fill:"#e0f2fe",fontSize:"8",fontFamily:"monospace",children:"class Renderable(Protocol):"}),e.jsx("text",{x:"240",y:"105",fill:"#e0f2fe",fontSize:"8",fontFamily:"monospace",children:"def render(self) -> str:"}),e.jsx("text",{x:"250",y:"125",fill:"#e0f2fe",fontSize:"8",fontFamily:"monospace",children:"..."}),e.jsx("text",{x:"230",y:"195",fill:"#facc15",fontSize:"8",fontWeight:"bold",children:"Structural Subtyping"}),e.jsx("rect",{x:"415",y:"35",width:"185",height:"180",rx:"6",fill:"#0369a1",stroke:"#38bdf8"}),e.jsx("text",{x:"425",y:"60",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"3. TypedDict"}),e.jsx("text",{x:"425",y:"85",fill:"#e0f2fe",fontSize:"8",fontFamily:"monospace",children:"class StudentDict(TypedDict):"}),e.jsx("text",{x:"435",y:"105",fill:"#e0f2fe",fontSize:"8",fontFamily:"monospace",children:"sid: str"}),e.jsx("text",{x:"435",y:"125",fill:"#e0f2fe",fontSize:"8",fontFamily:"monospace",children:"balance: float"}),e.jsx("text",{x:"425",y:"195",fill:"#facc15",fontSize:"8",fontWeight:"bold",children:"Compile-Time Dict Keys"}),e.jsx("rect",{x:"615",y:"35",width:"180",height:"180",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"625",y:"60",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"4. Literal & Self"}),e.jsx("text",{x:"625",y:"85",fill:"#ccfbf1",fontSize:"8",fontFamily:"monospace",children:'Campus = Literal["BP", "CC"]'}),e.jsx("text",{x:"625",y:"110",fill:"#ccfbf1",fontSize:"8",fontFamily:"monospace",children:"def build(self) -> Self:"}),e.jsx("text",{x:"635",y:"130",fill:"#ccfbf1",fontSize:"8",fontFamily:"monospace",children:"return self"}),e.jsx("text",{x:"625",y:"195",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Fluent Builder Types"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"THE DIÁTAXIS DOCUMENTATION ARCHITECTURE (4 QUADRANTS)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#1e1b4b",stroke:"#a855f7"}),e.jsx("rect",{x:"25",y:"35",width:"375",height:"95",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"35",y:"60",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"1. Tutorials (Learning-Oriented)"}),e.jsx("text",{x:"35",y:"80",fill:"#ccfbf1",fontSize:"8",children:"Guides the novice student from zero to first working script."}),e.jsx("text",{x:"35",y:"98",fill:"#a7f3d0",fontSize:"8",fontFamily:"monospace",children:'Example: "Your First Student Admission in 5 Minutes"'}),e.jsx("rect",{x:"420",y:"35",width:"375",height:"95",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("text",{x:"430",y:"60",fill:"#e0f2fe",fontSize:"11",fontWeight:"bold",children:"2. How-To Guides (Problem-Oriented)"}),e.jsx("text",{x:"430",y:"80",fill:"#bae6fd",fontSize:"8",children:"Step-by-step recipes for solving real-world specific tasks."}),e.jsx("text",{x:"430",y:"98",fill:"#e0f2fe",fontSize:"8",fontFamily:"monospace",children:'Example: "How to Configure SQLite Foreign Keys"'}),e.jsx("rect",{x:"25",y:"140",width:"375",height:"90",rx:"6",fill:"#3b0764",stroke:"#c084fc"}),e.jsx("text",{x:"35",y:"165",fill:"#f3e8ff",fontSize:"11",fontWeight:"bold",children:"3. Reference (Information-Oriented)"}),e.jsx("text",{x:"35",y:"185",fill:"#d8b4fe",fontSize:"8",children:"Technical API specifications, signatures, docstrings, and tables."}),e.jsx("text",{x:"35",y:"203",fill:"#f3e8ff",fontSize:"8",fontFamily:"monospace",children:'Example: "AdmissionService API & Docstrings"'}),e.jsx("rect",{x:"420",y:"140",width:"375",height:"90",rx:"6",fill:"#78350f",stroke:"#f59e0b"}),e.jsx("text",{x:"430",y:"165",fill:"#fef3c7",fontSize:"11",fontWeight:"bold",children:"4. Explanation (Understanding-Oriented)"}),e.jsx("text",{x:"430",y:"185",fill:"#fde68a",fontSize:"8",children:"Discussions on architecture, design trade-offs, and why."}),e.jsx("text",{x:"430",y:"203",fill:"#fef3c7",fontSize:"8",fontFamily:"monospace",children:'Example: "Why the src/ Layout Prevents Import Parity Bugs"'})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧪"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Docstring & Static Type Inspector"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Switch between standard Python docstring styles (Google, NumPy, Sphinx) and toggle static Mypy strict mode analysis:"}),e.jsxs("div",{className:"bg-slate-950 p-5 sm:p-6 rounded-xl border border-slate-800/90 space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"Docstring Specification Format:"}),e.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{id:"GOOGLE",label:"Google Style"},{id:"NUMPY",label:"NumPy Style"},{id:"SPHINX",label:"Sphinx Style"}].map(t=>e.jsx("button",{onClick:()=>x(t.id),className:r("p-2.5 rounded-xl border text-center font-mono font-bold transition-all",m===t.id?"bg-teal-950/60 border-teal-500 text-teal-300 shadow-md":"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"),children:t.label},t.id))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"Mypy Static Analysis Strictness:"}),e.jsx("button",{onClick:()=>f(!p),className:r("w-full p-2.5 rounded-xl border font-mono text-xs font-bold transition-all",p?"bg-emerald-950/70 border-emerald-500 text-emerald-300 shadow-md":"bg-slate-900 border-slate-800 text-slate-400"),children:p?"MYPY STRICT MODE: ACTIVE (--strict)":"LENIENT TYPE CHECKING"})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"Generated Annotated Function with PEP 257 Docstring:"}),e.jsx("pre",{className:"p-4 bg-slate-900/90 border border-slate-800 rounded-xl text-xs sm:text-sm font-mono text-teal-200 overflow-x-auto leading-relaxed",children:i})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Production Code Labs & Documentation Suites"})]}),e.jsx("p",{className:"text-slate-300 mb-8 text-base leading-relaxed",children:"Inspect, run, and master all four production-grade documentation and typing labs covering PEP 257 Google docstrings, PEP 484 static typing, automated README generators, and institutional verification suites:"}),e.jsxs("div",{className:"space-y-10",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:"Lab 1: PEP 257 Google Docstrings & Executable Doctests"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Documenting Args, Returns, Raises, and running embedded doctests automatically with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"doctest.testmod()"}),"."]})]}),e.jsx(l,{fileModule:y,title:"pep257_docstrings_and_sphinx_formatting.py",highlightLines:[18,30,42,54]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-cyan-300",children:"Lab 2: PEP 484 Static Typing, Protocols & Generics"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Annotating structural subtyping with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"Protocol"}),", generic repositories with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"TypeVar"}),", and typed dictionary payloads with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"TypedDict"}),"."]})]}),e.jsx(l,{fileModule:E,title:"pep484_static_typing_and_mypy_annotations.py",highlightLines:[14,25,38,54]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-purple-300",children:"Lab 3: Standout Open-Source README Generator with Shields.io Badges"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Automating GitHub README generation complete with quickstart installation guides, CLI examples, and CI status badges."})]}),e.jsx(l,{fileModule:v,title:"readme_generation_and_badges.py",highlightLines:[12,28,44,60]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-amber-300",children:"Lab 4: Institutional Documentation & Certification Engine Case Study"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Full self-documenting graduation certification engine generating verified graduation transcripts for Mamata across Barrackpore and Kolkata."})]}),e.jsx(l,{fileModule:j,title:"institutional_documentation_audit_suite.py",highlightLines:[16,32,48,68]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Documentation & Typing Pitfalls & Anti-Patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"1. Outdated Docstrings with Mismatched Args"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Refactoring function parameters without updating the docstring confuses callers and breaks automated API documentation builds."}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:['# ANTI-PATTERN: def f(a, b): """Args: x, y""" (Stale!)',`
`,"# BEST PRACTICE: Run automated doctests in CI"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"2. Overuse of Any (Type Erasure)"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Annotating everything with ",e.jsx("code",{className:"text-rose-400 font-mono",children:"Any"})," disables Mypy type-checking completely, defeating the purpose of static typing."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# ANTI-PATTERN: def process(data: Any) -> Any",`
`,"# BEST PRACTICE: Use TypeVar, Protocol, or TypedDict"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"3. Untested Code Examples"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Writing code snippets in docstrings that contain syntax errors or outdated APIs misleads developers and recruiters."}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# FIX: Add '>>>' doctests and verify with doctest.testmod()"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"4. Sparse 1-Line README Files"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Publishing repositories with empty or single-sentence READMEs repels open-source users and signals low code quality to hiring managers."}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# FIX: Include Badges, Quickstart, Usage, and Tests sections"})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Professional Documentation & Typing Checklist"})]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm sm:text-base",children:[e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"PEP 257 Google Format:"})," Document every public function with summary, Args, Returns, and Raises blocks."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Embed Executable Doctests:"})," Add interactive ",e.jsx("code",{className:"text-teal-300 font-mono",children:">>>"})," code examples verified by ",e.jsx("code",{className:"text-teal-300 font-mono",children:"doctest.testmod()"}),"."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Pass Mypy Strict Mode:"})," Eliminate implicit ",e.jsx("code",{className:"text-teal-300 font-mono",children:"Any"})," and unannotated function signatures."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Decorate README with Badges:"})," Include Shields.io CI build, coverage %, and license badges at the top of the README."]})]})]})]}),e.jsx("section",{ref:n,className:"section-hidden",children:e.jsx(g,{title:"Documentation, Docstrings & Typing FAQs",questions:T})}),e.jsx("section",{ref:n,className:"section-hidden",children:e.jsx(h,{content:w,title:"Topic 3: Writing Complete Documentation Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic3_note.txt"})}),e.jsx("section",{ref:n,className:"section-hidden",children:e.jsx(b,{note:"Code is written once, but read hundreds of times by your team, maintainers, and future employers. In our institutional student management systems across Barrackpore, Kolkata, Ichapur, and Jadavpur, pairing PEP 257 Google docstrings with executable doctests and strict PEP 484 static typing guarantees that every fee formula, admission waiver, and graduation certificate for Mamata, Mahima, and Susmita is self-documenting, autocompleting, and verifiably bug-free."})})]})]})}export{R as default};
