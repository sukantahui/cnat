import{b as r,j as e,bg as a}from"./vendor-react-core-Doz9nIC6.js";import{P as m}from"./PythonFileLoader-hCi5osN-.js";import{P as b}from"./PlainTextPrint-C08xhKA4.js";import{F as _}from"./FAQTemplate-BHhlgA96.js";import{T as v}from"./TeacherSukantaHui-BaJcBHAy.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const j=`"""\r
# Module: 004_004_capstone-projects\r
# Topic 0: End-to-End project architecture & clean directory layout\r
# File: src_layout_vs_flat_layout.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating the architectural advantages of the src/ layout vs flat layout.\r
"""\r
\r
def get_recommended_project_tree() -> str:\r
    """Returns the gold-standard enterprise Python project directory tree in clean ASCII."""\r
    tree = """\r
institutional_capstone/\r
|-- .env.example                  <- Template for environment secrets\r
|-- .gitignore                    <- Git exclusion list (.venv, __pycache__, .coverage)\r
|-- pyproject.toml                <- Modern build & tool manifest (PEP 621)\r
|-- README.md                     <- Comprehensive project documentation\r
|-- LICENSE                       <- MIT / Apache 2.0 open-source license\r
|-- src/                          <- SOURCE ROOT (Prevents import parity bugs!)\r
|   +-- institutional_manager/    <- Core Python Package\r
|       |-- __init__.py           <- Package version & public API (__all__)\r
|       |-- __main__.py           <- Enables: python -m institutional_manager\r
|       |-- config.py             <- Strongly-typed AppConfig dataclass\r
|       |-- models/               <- Domain Entities & Enums\r
|       |   |-- __init__.py\r
|       |   |-- student.py        <- StudentProfile domain class\r
|       |   +-- campus.py         <- CampusLocation enum\r
|       |-- repositories/         <- Database persistence & I/O\r
|       |   |-- __init__.py\r
|       |   +-- student_repo.py   <- SQLite / JSON student persistence\r
|       |-- services/             <- Pure business logic & calculation\r
|       |   |-- __init__.py\r
|       |   +-- admission_svc.py  <- Fee waiver & enrollment calculations\r
|       +-- cli/                  <- Terminal user interface\r
|           |-- __init__.py\r
|           +-- main.py           <- Click / Argparse CLI commands\r
+-- tests/                        <- TEST ROOT\r
    |-- conftest.py               <- Shared PyTest fixtures & mocks\r
    |-- unit/                     <- Fast, isolated unit tests\r
    |   |-- test_models.py\r
    |   +-- test_services.py\r
    +-- integration/              <- End-to-end database & CLI tests\r
        +-- test_sqlite_persistence.py\r
"""\r
    return tree\r
\r
def explain_src_layout_benefits():\r
    print("=" * 75)\r
    print("[ARCHITECTURAL PATTERN] Why the 'src/' Layout Dominates Flat Layouts")\r
    print("=" * 75)\r
    print(get_recommended_project_tree())\r
    print("-" * 75)\r
    print("KEY BENEFITS OF THE 'src/' LAYOUT:")\r
    print("  1. Import Parity: Prevents pytest from testing uninstalled local code.")\r
    print("  2. Packaging Cleanliness: Guarantees only files inside src/ are packaged in wheels.")\r
    print("  3. Forced Editable Mode: Enforces clean 'pip install -e .' workflow.")\r
    print("  4. Eliminates Root Clutter: Keeps test runners and linters isolated from source code.")\r
    print("=" * 75)\r
\r
def main():\r
    explain_src_layout_benefits()\r
\r
if __name__ == "__main__":\r
    main()\r
`,S=`"""\r
# Module: 004_004_capstone-projects\r
# Topic 0: End-to-End project architecture & clean directory layout\r
# File: package_modularity_and_init.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating package modularity, __init__.py, __all__ exports,\r
#              and one-directional dependency flows.\r
"""\r
\r
from enum import Enum\r
from dataclasses import dataclass\r
\r
# 1. MODELS LAYER (No dependencies on other application layers)\r
class CampusBranch(Enum):\r
    BARRACKPORE = "Barrackpore"\r
    KOLKATA = "Kolkata"\r
    ICHAPUR = "Ichapur"\r
    JADAVPUR = "Jadavpur"\r
\r
@dataclass\r
class StudentDossier:\r
    sid: str\r
    name: str\r
    campus: CampusBranch\r
    base_tuition: float\r
    is_active: bool = True\r
\r
# 2. SERVICES LAYER (Depends only on Models)\r
class AdmissionFeeService:\r
    DISCOUNT_RATES = {\r
        CampusBranch.BARRACKPORE: 0.15,\r
        CampusBranch.ICHAPUR: 0.10,\r
        CampusBranch.KOLKATA: 0.05,\r
        CampusBranch.JADAVPUR: 0.00\r
    }\r
\r
    @classmethod\r
    def calculate_net_fee(cls, student: StudentDossier, merit_score: float) -> float:\r
        merit_pct = 0.20 if merit_score >= 90.0 else 0.0\r
        regional_pct = cls.DISCOUNT_RATES.get(student.campus, 0.0)\r
        total_discount = min(0.35, merit_pct + regional_pct)\r
        return round(student.base_tuition * (1.0 - total_discount), 2)\r
\r
# 3. PUBLIC API EXPORTS (__init__.py simulation)\r
__all__ = [\r
    "CampusBranch",\r
    "StudentDossier",\r
    "AdmissionFeeService"\r
]\r
\r
def test_package_layering():\r
    print("   [...] Testing Clean Layered Architecture & Exports...")\r
    \r
    # Instantiate domain entity\r
    student = StudentDossier("STU_BP_01", "Mamata", CampusBranch.BARRACKPORE, 20000.0)\r
    \r
    # Execute service computation\r
    net = AdmissionFeeService.calculate_net_fee(student, merit_score=95.0)\r
    \r
    # 20% merit + 15% Barrackpore = 35% discount -> 13,000.0\r
    assert net == 13000.0\r
    print(f"   [PASS] Student: {student.name} ({student.campus.value}) -> Net Fee: Rs. {net:,.2f}")\r
    print(f"   [PASS] Package public __all__ exports: {__all__}")\r
\r
def main():\r
    print("=" * 75)\r
    print("[PACKAGE MODULARITY] Clean Tiered Architecture & __all__ Exports")\r
    print("=" * 75)\r
\r
    test_package_layering()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Strict one-directional dependency flows (Models -> Repositories ->")\r
    print("           Services -> CLI) eliminate circular imports and keep packages clean.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,E=`"""\r
# Module: 004_004_capstone-projects\r
# Topic 0: End-to-End project architecture & clean directory layout\r
# File: environment_and_config_loader.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating 12-factor configuration loading via environment variables and dataclasses.\r
"""\r
\r
import os\r
from dataclasses import dataclass\r
from pathlib import Path\r
\r
@dataclass(frozen=True)\r
class AppConfig:\r
    """Type-safe, immutable application configuration container."""\r
    app_env: str\r
    database_url: str\r
    log_level: str\r
    default_campus: str\r
    max_batch_size: int\r
    enable_sms_alerts: bool\r
\r
    @classmethod\r
    def from_env(cls) -> "AppConfig":\r
        """Loads and parses environment configuration with sensible defaults."""\r
        return cls(\r
            app_env=os.environ.get("APP_ENV", "development"),\r
            database_url=os.environ.get("DATABASE_URL", "sqlite:///institutional_data.db"),\r
            log_level=os.environ.get("LOG_LEVEL", "INFO").upper(),\r
            default_campus=os.environ.get("DEFAULT_CAMPUS", "Barrackpore"),\r
            max_batch_size=int(os.environ.get("MAX_BATCH_SIZE", "30")),\r
            enable_sms_alerts=os.environ.get("ENABLE_SMS_ALERTS", "false").lower() in ("true", "1", "yes")\r
        )\r
\r
def test_config_loader():\r
    print("   [...] Testing AppConfig Environment Loader...")\r
\r
    # 1. Test default configuration loading\r
    cfg = AppConfig.from_env()\r
    assert cfg.default_campus == "Barrackpore"\r
    assert cfg.max_batch_size == 30\r
    assert cfg.enable_sms_alerts is False\r
    print("   [PASS] 1. Default configuration loaded cleanly:")\r
    print(f"          - Environment: {cfg.app_env}")\r
    print(f"          - DB URL:      {cfg.database_url}")\r
    print(f"          - Campus:      {cfg.default_campus} (Batch Max: {cfg.max_batch_size})")\r
\r
    # 2. Test environment variable overrides\r
    os.environ["DEFAULT_CAMPUS"] = "Kolkata"\r
    os.environ["MAX_BATCH_SIZE"] = "50"\r
    os.environ["ENABLE_SMS_ALERTS"] = "true"\r
\r
    custom_cfg = AppConfig.from_env()\r
    assert custom_cfg.default_campus == "Kolkata"\r
    assert custom_cfg.max_batch_size == 50\r
    assert custom_cfg.enable_sms_alerts is True\r
    print("   [PASS] 2. Environment overrides parsed successfully:")\r
    print(f"          - Campus:      {custom_cfg.default_campus} (Batch Max: {custom_cfg.max_batch_size})")\r
    print(f"          - SMS Alerts:  {custom_cfg.enable_sms_alerts}")\r
\r
def main():\r
    print("=" * 75)\r
    print("[12-FACTOR CONFIG] Strongly-Typed Immutable Configuration Loader")\r
    print("=" * 75)\r
\r
    test_config_loader()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Using frozen dataclasses for configuration ensures all environment")\r
    print("           secrets and flags are validated and typed before application startup.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,A=`"""\r
# Module: 004_004_capstone-projects\r
# Topic 0: End-to-End project architecture & clean directory layout\r
# File: institutional_capstone_scaffold.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Production scaffolding and structure generator for the Multi-Campus\r
#              Student Management System across Barrackpore, Kolkata, Ichapur, and Jadavpur.\r
"""\r
\r
from dataclasses import dataclass\r
from typing import Optional\r
import sqlite3\r
\r
# ------------------------------------------------------------------------------\r
# 1. DOMAIN MODELS (models/student.py)\r
# ------------------------------------------------------------------------------\r
@dataclass\r
class Student:\r
    sid: str\r
    name: str\r
    campus: str\r
    course: str\r
    base_fee: float\r
    paid_fee: float = 0.0\r
\r
    @property\r
    def balance(self) -> float:\r
        return self.base_fee - self.paid_fee\r
\r
# ------------------------------------------------------------------------------\r
# 2. REPOSITORY LAYER (repositories/student_repo.py)\r
# ------------------------------------------------------------------------------\r
class SQLiteStudentRepository:\r
    def __init__(self, conn: sqlite3.Connection):\r
        self.conn = conn\r
        self._init_db()\r
\r
    def _init_db(self):\r
        with self.conn:\r
            self.conn.execute("""\r
                CREATE TABLE IF NOT EXISTS students (\r
                    sid TEXT PRIMARY KEY,\r
                    name TEXT NOT NULL,\r
                    campus TEXT NOT NULL,\r
                    course TEXT NOT NULL,\r
                    base_fee REAL NOT NULL,\r
                    paid_fee REAL NOT NULL\r
                )\r
            """)\r
\r
    def save(self, student: Student):\r
        with self.conn:\r
            self.conn.execute("""\r
                INSERT OR REPLACE INTO students VALUES (?, ?, ?, ?, ?, ?)\r
            """, (student.sid, student.name, student.campus, student.course, student.base_fee, student.paid_fee))\r
\r
    def get_by_id(self, sid: str) -> Optional[Student]:\r
        cursor = self.conn.cursor()\r
        cursor.execute("SELECT sid, name, campus, course, base_fee, paid_fee FROM students WHERE sid = ?", (sid,))\r
        row = cursor.fetchone()\r
        if not row:\r
            return None\r
        return Student(*row)\r
\r
# ------------------------------------------------------------------------------\r
# 3. SERVICE LAYER (services/admission_service.py)\r
# ------------------------------------------------------------------------------\r
class InstitutionalAdmissionService:\r
    def __init__(self, repo: SQLiteStudentRepository):\r
        self.repo = repo\r
\r
    def enroll_new_student(self, sid: str, name: str, campus: str, course: str, fee: float) -> Student:\r
        existing = self.repo.get_by_id(sid)\r
        if existing:\r
            raise KeyError(f"Student ID '{sid}' already registered.")\r
        \r
        student = Student(sid, name, campus, course, fee, paid_fee=0.0)\r
        self.repo.save(student)\r
        return student\r
\r
    def record_payment(self, sid: str, amount: float) -> float:\r
        student = self.repo.get_by_id(sid)\r
        if not student:\r
            raise KeyError(f"Student '{sid}' not found.")\r
        if amount <= 0:\r
            raise ValueError("Payment amount must be positive.")\r
        if amount > student.balance:\r
            raise ValueError("Payment exceeds remaining balance.")\r
            \r
        student.paid_fee += amount\r
        self.repo.save(student)\r
        return student.balance\r
\r
# ------------------------------------------------------------------------------\r
# VERIFICATION SUITE\r
# ------------------------------------------------------------------------------\r
def test_institutional_scaffold():\r
    print("   [...] Testing Scaffolding Workflow: Models -> Repository -> Service...")\r
    \r
    # In-memory DB connection\r
    conn = sqlite3.connect(":memory:")\r
    repo = SQLiteStudentRepository(conn)\r
    service = InstitutionalAdmissionService(repo)\r
\r
    # 1. Enroll Mamata at Barrackpore\r
    s1 = service.enroll_new_student("STU_BP_01", "Mamata", "Barrackpore", "Python Pro", 20000.0)\r
    assert s1.balance == 20000.0\r
    print("   [PASS] 1. Mamata enrolled via Service Layer (Saved to SQLite Repository)")\r
\r
    # 2. Record Payment of Rs. 12,000\r
    rem = service.record_payment("STU_BP_01", 12000.0)\r
    assert rem == 8000.0\r
    print(f"   [PASS] 2. Payment recorded: New Balance = Rs. {rem:,.2f}")\r
\r
    # 3. Verify persistence reload\r
    reloaded = repo.get_by_id("STU_BP_01")\r
    assert reloaded.paid_fee == 12000.0\r
    assert reloaded.balance == 8000.0\r
    print("   [PASS] 3. Database persistence verified across transactions")\r
\r
def main():\r
    print("=" * 80)\r
    print("[CASE STUDY] Multi-Campus Scaffolding: Layered Architecture in Action")\r
    print("=" * 80)\r
\r
    test_institutional_scaffold()\r
\r
    print("=" * 80)\r
    print("[TAKEAWAY] Clean tiered architectures allow each layer to be developed,")\r
    print("           tested in isolation, and maintained with effortless scalability.")\r
    print("=" * 80)\r
\r
if __name__ == "__main__":\r
    main()\r
`,N=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 4: PRO LEVEL • MODULE 004_004: CAPSTONE PROJECTS\r
           TOPIC 0: END-TO-END PROJECT ARCHITECTURE & CLEAN DIRECTORY LAYOUT\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. THE PROFESSIONAL SRC/ DIRECTORY LAYOUT\r
--------------------------------------------------------------------------------\r
  my_project/\r
  ├── pyproject.toml              # Modern build & packaging manifest (PEP 621)\r
  ├── README.md                   # Project overview & quickstart instructions\r
  ├── LICENSE                     # MIT / Apache 2.0 open-source license\r
  ├── .gitignore                  # Ignore .venv, __pycache__, .coverage, .env\r
  ├── .env.example                # Sample environment variables template\r
  ├── src/                        # SOURCE DIRECTORY (Prevents accidental imports!)\r
  │   └── my_package/             # Core Python package namespace\r
  │       ├── __init__.py         # Package version & public API exports (__all__)\r
  │       ├── __main__.py         # Allows: python -m my_package\r
  │       ├── config.py           # Dataclass environment configuration\r
  │       ├── models/             # Domain entities (Data classes, Enums)\r
  │       ├── repositories/       # Database queries & storage persistence\r
  │       ├── services/           # Business logic & calculation rules\r
  │       └── cli/                # CLI commands & user interfaces\r
  └── tests/                      # AUTOMATED TEST SUITE\r
      ├── conftest.py             # Shared pytest fixtures\r
      ├── unit/                   # Fast isolated unit tests\r
      └── integration/            # Multi-component & database tests\r
\r
--------------------------------------------------------------------------------\r
2. MODERN PYPROJECT.TOML PACKAGING\r
--------------------------------------------------------------------------------\r
  [build-system]\r
  requires = ["hatchling"]\r
  build-backend = "hatchling.build"\r
\r
  [project]\r
  name = "institutional-manager"\r
  version = "1.0.0"\r
  description = "Multi-campus student admission & ledger system"\r
  readme = "README.md"\r
  requires-python = ">=3.10"\r
  dependencies = ["requests>=2.31.0"]\r
\r
  [project.scripts]\r
  campus-cli = "my_package.cli.main:run_cli"\r
\r
================================================================================\r
       END OF STUDY NOTE • TOPIC 0: PROJECT ARCHITECTURE & LAYOUT\r
================================================================================\r
`,w=[{question:"What is the 'src/ layout' in Python project architecture and why is it superior to a flat layout?",shortAnswer:"The 'src/ layout' places all source packages inside a 'src/' subfolder (e.g. 'src/my_pkg/'), which prevents Python from accidentally importing local uninstalled development files when running test runners or CLI tools from the repository root, guaranteeing import parity with production installations.",explanation:"Import isolation and package testing parity provided by src/ layout.",hint:"Puts code inside src/ to prevent tests from accidentally importing local uninstalled modules.",level:"basic",codeExample:`# Project root:
my_project/src/my_app/__init__.py
my_project/tests/test_app.py`},{question:"What is the purpose of 'pyproject.toml' in modern Python development (PEP 517/518/621)?",shortAnswer:"'pyproject.toml' is the standardized, unified configuration file for Python packaging, specifying build backends (Hatch, Flit, Setuptools), project metadata (name, version, dependencies), entrypoint CLI scripts, and tool configurations (pytest, ruff, black, mypy, coverage).",explanation:"Modern centralized Python packaging and tooling standard.",hint:"Replaces setup.py, setup.cfg, and requirements.txt with a single standardized TOML manifest.",level:"basic",codeExample:`[project]
name = 'campus-manager'
version = '1.0.0'
dependencies = ['pydantic>=2.0']`},{question:"What is the function of '__all__' inside a package's '__init__.py' file?",shortAnswer:"'__all__' is a list of strings that explicitly defines the public API of the package, controlling exactly which symbols and classes are exported when a user writes 'from my_package import *'.",explanation:"Explicit public namespace export control via __all__.",hint:"__all__ = ['Student', 'AdmissionEngine'] defines the public exports for wildcard imports.",level:"basic",codeExample:`# src/my_package/__init__.py
__all__ = ['StudentProfile', 'calculate_fee']`},{question:"What does '__main__.py' do inside a Python package directory?",shortAnswer:"'__main__.py' serves as the default entry point when a package is executed directly via Python's module flag: 'python -m <package_name>'.",explanation:"Executable package entry point convention.",hint:"Allows executing the package directly from terminal using python -m my_package.",level:"basic",codeExample:"# Allows: python -m my_app"},{question:"Why should you separate 'repositories/' (data persistence) from 'services/' (business logic) in layered architecture?",shortAnswer:"Separation of concerns allows business calculation rules (services) to remain pure and independent of database choices (repositories), enabling easy unit testing without database dependencies and effortless swapping of storage engines (e.g. SQLite to PostgreSQL).",explanation:"Architectural decoupling and repository pattern benefits.",hint:"Services handle business calculations; repositories handle database reading/writing.",level:"moderate",codeExample:"# Service: calculates discount | Repository: saves student to SQLite table"},{question:"What essential files must be present at the root of every professional Python repository?",shortAnswer:"1. 'pyproject.toml' (build/metadata), 2. 'README.md' (documentation/quickstart), 3. 'LICENSE' (open source legal license), 4. '.gitignore' (ignoring virtual environments, pycache, .env), and 5. '.env.example' (template for environment variables).",explanation:"Standard root repository manifest artifacts.",hint:"pyproject.toml, README.md, LICENSE, .gitignore, and .env.example.",level:"basic",codeExample:"# Root manifest files for open-source and enterprise repositories"},{question:"How does the 12-Factor App methodology recommend handling environment configuration in Python?",shortAnswer:"Store configuration that varies across deployment environments (database URLs, API keys, secret tokens, debug flags) in Environment Variables rather than hardcoding them in Python source code.",explanation:"Decoupling configuration from code according to 12-Factor principles.",hint:"Use environment variables (loaded via .env or os.environ) instead of hardcoding secrets.",level:"moderate",codeExample:"DATABASE_URL = os.environ.get('DATABASE_URL', 'sqlite:///dev.db')"},{question:"What is the difference between relative imports ('from .models import Student') and absolute imports ('from my_pkg.models import Student')?",shortAnswer:"Relative imports navigate based on current module location in the package hierarchy (using dots '.'); absolute imports specify the full path starting from the package root, which is generally preferred for clarity and refactoring stability.",explanation:"Relative vs absolute import semantics in Python packages.",hint:"Absolute imports specify the full package path; relative imports use dot notation.",level:"moderate",codeExample:"from my_package.models.student import Student # Absolute (Preferred)"},{question:"What entries should always be included in a Python '.gitignore' file?",shortAnswer:"'.venv/', 'venv/', '__pycache__/', '*.pyc', '.pytest_cache/', '.coverage', 'htmlcov/', '.mypy_cache/', '.ruff_cache/', 'dist/', 'build/', and '.env' (to prevent secret leaks).",explanation:"Standard gitignore entries for Python repositories.",hint:"Virtual environments, bytecode pycache, test coverage caches, and sensitive .env files.",level:"basic",codeExample:`# .gitignore
__pycache__/
.venv/
.env
.coverage`},{question:"How do you create an editable install of your local package for development?",shortAnswer:"Run 'pip install -e .' (or 'pip install --editable .') from the project root containing 'pyproject.toml', which links the package to your virtual environment so code edits take effect immediately without reinstalling.",explanation:"Editable development mode installation.",hint:"pip install -e . installs the current project in editable mode.",level:"basic",codeExample:"pip install -e ."},{question:"What is the purpose of configuring '[project.scripts]' in 'pyproject.toml'?",shortAnswer:`It defines command-line console scripts (CLI commands) that pip automatically installs into the environment's bin/Scripts path (e.g. 'campus-cli = "my_pkg.cli:main"').`,explanation:"Automated CLI executable entrypoint generation.",hint:"Creates terminal commands that run Python functions directly (e.g. campus-cli).",level:"moderate",codeExample:`[project.scripts]
campus-cli = 'my_package.cli.main:run_cli'`},{question:"Why should you never commit your '.env' file containing real API keys or passwords to Git?",shortAnswer:"Committing '.env' leaks sensitive credentials (database passwords, payment API tokens) into Git history, creating severe security vulnerabilities and credential compromise.",explanation:"Secret protection and git security hygiene.",hint:"Committing .env leaks passwords to Git history; always add .env to .gitignore.",level:"basic",codeExample:"# Add .env to .gitignore and commit .env.example with dummy placeholders"},{question:"What is the role of a 'dataclass' in structuring application configuration?",shortAnswer:"A frozen dataclass (e.g. '@dataclass(frozen=True)') provides a strongly-typed, immutable, self-documenting configuration container that validates and holds parsed environment variables.",explanation:"Type-safe immutable configuration container pattern.",hint:"Provides a strongly typed, immutable container for environment variables.",level:"moderate",codeExample:`@dataclass(frozen=True)
class AppConfig:
    db_path: str
    debug_mode: bool = False`},{question:"How should the 'tests/' directory be structured in relation to the 'src/' directory?",shortAnswer:"'tests/' should sit alongside 'src/' at the project root, mirroring the sub-package structure of 'src/' and separated into 'unit/' (fast, isolated tests) and 'integration/' (database/API tests).",explanation:"Test directory organization mirroring source code packages.",hint:"tests/ sits at the root next to src/ with conftest.py and unit/integration folders.",level:"basic",codeExample:`tests/unit/test_models.py
tests/integration/test_db.py`},{question:"What is the difference between 'requirements.txt' and dependencies in 'pyproject.toml'?",shortAnswer:"'pyproject.toml' declares abstract library dependencies (e.g. 'requests>=2.31.0') required for the package to function; 'requirements.txt' (or lockfiles like poetry.lock/Pipfile.lock) pins exact concrete versions for reproducible deployment environments.",explanation:"Abstract library dependencies vs concrete deployment pins.",hint:"pyproject.toml defines minimum package requirements; requirements.txt pins exact build versions.",level:"moderate",codeExample:"# pyproject.toml: requests>=2.30 | requirements.txt: requests==2.31.0"},{question:"What is a 'Virtual Environment' (.venv) and why must every project have its own isolated environment?",shortAnswer:"A virtual environment isolates project dependencies, preventing version conflicts between different Python projects and avoiding polluting the global system Python installation.",explanation:"Dependency isolation via virtual environments.",hint:"Prevents dependency version conflicts between different projects.",level:"basic",codeExample:"python -m venv .venv && source .venv/bin/activate"},{question:"What is the purpose of 'conftest.py' in the root of the 'tests/' directory?",shortAnswer:"It acts as the central fixture configuration root for PyTest, automatically sharing global test fixtures (e.g. mock databases, test clients) across all test subdirectories without requiring explicit imports.",explanation:"Central fixture sharing root in tests.",hint:"Provides shared fixtures to all test files across the tests/ directory.",level:"basic",codeExample:`# tests/conftest.py
@pytest.fixture
def mock_db(): return MemoryDB()`},{question:"How do you define optional dependency groups (extras) in 'pyproject.toml' (e.g. dev, test, docs)?",shortAnswer:`Under the '[project.optional-dependencies]' table, defining groups like 'dev = ["pytest", "ruff", "mypy", "pytest-cov"]', which users can install via 'pip install -e .[dev]'.`,explanation:"Optional extras and development dependency grouping in pyproject.toml.",hint:"Use [project.optional-dependencies] with groups like dev = ['pytest', 'ruff'].",level:"moderate",codeExample:`[project.optional-dependencies]
dev = ['pytest>=8.0', 'pytest-cov>=5.0']`},{question:"What is 'Circular Import' in Python and how does clean architecture prevent it?",shortAnswer:"A circular import occurs when Module A imports Module B while Module B imports Module A during module initialization; clean layered architecture prevents this by enforcing strict one-directional dependency flows (e.g. Services → Repositories → Models).",explanation:"Circular dependency hazards and strict one-directional layering.",hint:"When module A imports B and B imports A; prevented by strict one-way layer dependencies.",level:"complex",codeExample:"# Enforce: controllers → services → repositories → models (Never backwards!)"},{question:"What is the ultimate golden rule of professional Python project architecture?",shortAnswer:"Use the 'src/' layout, centralize configuration in 'pyproject.toml', enforce strict one-directional tiered layering (models → repositories → services → interfaces), isolate secrets in '.env', and test continuously in editable mode.",explanation:"The complete enterprise Python project architecture standard.",hint:"src/ layout + pyproject.toml + layered architecture + .env secret isolation.",level:"basic",codeExample:"# Enterprise Python Architecture Standard"}];function z(){const x=r.useRef([]),[s,f]=r.useState("srcBlueprint"),[i,h]=r.useState("CLI_APP"),[o,y]=r.useState("hatchling");let l="models/, repositories/, services/, cli/",c="python -m institutional_manager or campus-cli",d="Multi-campus student ledger & terminal management";i==="CLI_APP"?(l="models/, repositories/, services/, cli/",c="campus-cli (via [project.scripts])",d="Interactive administrative command-line toolkit"):i==="REST_API"?(l="models/, repositories/, services/, api/routes/",c="uvicorn institutional_manager.api:app --reload",d="High-concurrency microservice backend with SQLite/Postgres"):i==="DATA_ENGINE"&&(l="models/, pipelines/, analytics/, exporters/",c="python -m institutional_manager.analytics",d="Automated student performance & financial reporting engine");const g=`# pyproject.toml - Modern Enterprise Packaging (PEP 621)
# Project: institutional-manager | Build Backend: ${o}

[build-system]
requires = ["${o}"]
build-backend = "${o}.build"

[project]
name = "institutional-manager"
version = "1.0.0"
description = "Enterprise multi-campus student admission & ledger system"
readme = "README.md"
requires-python = ">=3.10"
license = { text = "MIT" }
authors = [
    { name = "Sukanta Hui", email = "contact@codernaccotax.co.in" }
]
dependencies = [
    "pydantic>=2.6.0",
    "rich>=13.7.0"
]

[project.optional-dependencies]
dev = [
    "pytest>=8.0.0",
    "pytest-cov>=5.0.0",
    "ruff>=0.3.0",
    "mypy>=1.9.0"
]

[project.scripts]
campus-cli = "institutional_manager.cli.main:run_cli"

[tool.pytest.ini_options]
testpaths = ["tests"]
addopts = "-v --cov=src --cov-report=term-missing"`;r.useEffect(()=>{const t=new IntersectionObserver(p=>{p.forEach(u=>{u.isIntersecting&&u.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return x.current.forEach(p=>{p&&t.observe(p)}),()=>t.disconnect()},[]);const n=t=>{t&&!x.current.includes(t)&&x.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:n,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 4 • Module 004_004"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 0"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Capstone Projects, Portfolio & Interview Mastery"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Project Architecture & ",e.jsx("span",{className:"text-teal-400",children:"Clean Directory Layout"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master the architectural foundations of production Python software: structuring modular codebases with the industry-standard ",e.jsx("code",{className:"text-teal-300 font-mono",children:"src/"})," layout, unifying builds with modern ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"pyproject.toml"})," (PEP 621), enforcing layered separation of concerns (Models, Repositories, Services, CLI), managing 12-factor configuration with immutable dataclasses, and controlling public APIs with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"__all__"}),"."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📁 src/ Layout Standard"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚙️ pyproject.toml (PEP 621)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🏛️ Layered Separation of Concerns"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔐 12-Factor App Configuration"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Professional Python Project Architecture"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["Professional software is distinguished from amateur scripts by its architectural clarity, package isolation, and modular organization. The modern Python ecosystem has converged on the ",e.jsx("code",{className:"text-teal-300 font-mono",children:"src/"})," layout and unified ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"pyproject.toml"})," manifest:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ src/ Layout"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"src/package_name/"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Isolates source code from the current working directory, guaranteeing test runners execute against installed package binaries."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ pyproject.toml"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"PEP 517 / 621"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Standardized declarative manifest replacing legacy ",e.jsx("code",{className:"text-cyan-300",children:"setup.py"}),", centralizing build, dependencies, and tool settings."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Layered Architecture"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"Models ➔ Repos ➔ Services"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Strict one-directional dependencies preventing circular imports and isolating database SQL from business rules."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 shadow-lg",children:[e.jsx("div",{className:"text-amber-400 font-bold text-sm mb-1",children:"4️⃣ 12-Factor Config"}),e.jsx("code",{className:"text-xs font-mono text-amber-300 block mb-1",children:".env + AppConfig"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Decouples environment secrets from source code, validating configuration into typed immutable dataclasses."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"Why Flat Layouts Cause Subtle Production Outages"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["In a flat layout (where package folders sit directly at root), running ",e.jsx("code",{className:"text-teal-300 font-mono",children:"pytest"})," imports local uninstalled files because ",e.jsx("code",{className:"text-teal-300 font-mono",children:'""'})," (current directory) is prepended to ",e.jsx("code",{className:"text-teal-300 font-mono",children:"sys.path"}),". Tests pass locally even if package packaging manifests omit critical files, only to crash when deployed to production servers! The ",e.jsx("span",{className:"text-emerald-400 font-bold",children:"src/ layout permanently solves this bug"}),"."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Directory Layouts, Layered Tiers & Config Flows"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>f("srcBlueprint"),className:a("px-3 py-1.5 rounded-lg transition-all",s==="srcBlueprint"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"src/ Layout Blueprint"}),e.jsx("button",{onClick:()=>f("layerTiers"),className:a("px-3 py-1.5 rounded-lg transition-all",s==="layerTiers"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Layered Dependency Tiers"}),e.jsx("button",{onClick:()=>f("configHierarchy"),className:a("px-3 py-1.5 rounded-lg transition-all",s==="configHierarchy"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"12-Factor Config Flow"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining standard project directory trees, strict one-way architectural layer boundaries, and environment parsing:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:s==="srcBlueprint"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"ENTERPRISE PYTHON SRC/ DIRECTORY LAYOUT BLUEPRINT"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#0f172a",stroke:"#14b8a6"}),e.jsx("rect",{x:"25",y:"35",width:"230",height:"185",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"35",y:"60",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"📁 Root Manifests"}),e.jsx("text",{x:"35",y:"85",fill:"#ccfbf1",fontSize:"9",fontFamily:"monospace",children:"📄 pyproject.toml"}),e.jsx("text",{x:"35",y:"105",fill:"#ccfbf1",fontSize:"9",fontFamily:"monospace",children:"📄 README.md"}),e.jsx("text",{x:"35",y:"125",fill:"#ccfbf1",fontSize:"9",fontFamily:"monospace",children:"📄 LICENSE (MIT)"}),e.jsx("text",{x:"35",y:"145",fill:"#ccfbf1",fontSize:"9",fontFamily:"monospace",children:"📄 .gitignore"}),e.jsx("text",{x:"35",y:"165",fill:"#ccfbf1",fontSize:"9",fontFamily:"monospace",children:"📄 .env.example"}),e.jsx("text",{x:"35",y:"195",fill:"#facc15",fontSize:"8",fontWeight:"bold",children:"PEP 621 Standard Root"}),e.jsx("rect",{x:"280",y:"35",width:"280",height:"185",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("text",{x:"290",y:"60",fill:"#e0f2fe",fontSize:"11",fontWeight:"bold",children:"📁 src/institutional_manager/"}),e.jsx("text",{x:"290",y:"85",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"├── __init__.py (__all__)"}),e.jsx("text",{x:"290",y:"105",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"├── __main__.py (Entrypoint)"}),e.jsx("text",{x:"290",y:"125",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"├── config.py (Dataclass)"}),e.jsx("text",{x:"290",y:"145",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"├── models/ (Student, Campus)"}),e.jsx("text",{x:"290",y:"165",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"├── services/ (Admission, Fee)"}),e.jsx("text",{x:"290",y:"185",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"└── repositories/ (SQLite)"}),e.jsx("rect",{x:"585",y:"35",width:"210",height:"185",rx:"6",fill:"#1e1b4b",stroke:"#818cf8"}),e.jsx("text",{x:"595",y:"60",fill:"#e0e7ff",fontSize:"11",fontWeight:"bold",children:"📁 tests/"}),e.jsx("text",{x:"595",y:"85",fill:"#c7d2fe",fontSize:"9",fontFamily:"monospace",children:"├── conftest.py"}),e.jsx("text",{x:"595",y:"110",fill:"#c7d2fe",fontSize:"9",fontFamily:"monospace",children:"├── unit/"}),e.jsx("text",{x:"610",y:"130",fill:"#a5b4fc",fontSize:"8",fontFamily:"monospace",children:"test_models.py"}),e.jsx("text",{x:"610",y:"145",fill:"#a5b4fc",fontSize:"8",fontFamily:"monospace",children:"test_services.py"}),e.jsx("text",{x:"595",y:"170",fill:"#c7d2fe",fontSize:"9",fontFamily:"monospace",children:"└── integration/"}),e.jsx("text",{x:"610",y:"190",fill:"#a5b4fc",fontSize:"8",fontFamily:"monospace",children:"test_db_repo.py"})]})]}):s==="layerTiers"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"ONE-DIRECTIONAL ARCHITECTURAL TIERS: PREVENTING CIRCULAR IMPORTS"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#082f49",stroke:"#0ea5e9"}),e.jsx("rect",{x:"25",y:"40",width:"165",height:"160",rx:"6",fill:"#1e1b4b",stroke:"#818cf8"}),e.jsx("text",{x:"35",y:"65",fill:"#e0e7ff",fontSize:"11",fontWeight:"bold",children:"1. Entry Tier"}),e.jsx("text",{x:"35",y:"85",fill:"#c7d2fe",fontSize:"9",fontFamily:"monospace",children:"cli/ & api/"}),e.jsx("text",{x:"35",y:"115",fill:"#e0e7ff",fontSize:"8",children:"CLI commands & REST"}),e.jsx("text",{x:"35",y:"130",fill:"#e0e7ff",fontSize:"8",children:"routes receive user input"}),e.jsx("text",{x:"35",y:"175",fill:"#facc15",fontSize:"8",fontWeight:"bold",children:"Calls Services"}),e.jsx("path",{d:"M 195 120 L 225 120",stroke:"#38bdf8",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"230",y:"40",width:"170",height:"160",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("text",{x:"240",y:"65",fill:"#e0f2fe",fontSize:"11",fontWeight:"bold",children:"2. Service Tier"}),e.jsx("text",{x:"240",y:"85",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"services/"}),e.jsx("text",{x:"240",y:"115",fill:"#e0f2fe",fontSize:"8",children:"Pure business logic,"}),e.jsx("text",{x:"240",y:"130",fill:"#e0f2fe",fontSize:"8",children:"fee calculations, waiver rules"}),e.jsx("text",{x:"240",y:"175",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Zero SQL or CLI logic"}),e.jsx("path",{d:"M 405 120 L 435 120",stroke:"#38bdf8",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"440",y:"40",width:"175",height:"160",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"450",y:"65",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"3. Repository Tier"}),e.jsx("text",{x:"450",y:"85",fill:"#ccfbf1",fontSize:"9",fontFamily:"monospace",children:"repositories/"}),e.jsx("text",{x:"450",y:"115",fill:"#ccfbf1",fontSize:"8",children:"SQLite / Postgres queries,"}),e.jsx("text",{x:"450",y:"130",fill:"#ccfbf1",fontSize:"8",children:"JSON files, save/get"}),e.jsx("text",{x:"450",y:"175",fill:"#facc15",fontSize:"8",fontWeight:"bold",children:"Translates to Models"}),e.jsx("path",{d:"M 620 120 L 650 120",stroke:"#38bdf8",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"655",y:"40",width:"140",height:"160",rx:"6",fill:"#3b0764",stroke:"#c084fc"}),e.jsx("text",{x:"665",y:"65",fill:"#f3e8ff",fontSize:"11",fontWeight:"bold",children:"4. Domain Core"}),e.jsx("text",{x:"665",y:"85",fill:"#d8b4fe",fontSize:"9",fontFamily:"monospace",children:"models/"}),e.jsx("text",{x:"665",y:"115",fill:"#f3e8ff",fontSize:"8",children:"Dataclasses, Enums,"}),e.jsx("text",{x:"665",y:"130",fill:"#f3e8ff",fontSize:"8",children:"domain invariants"}),e.jsx("text",{x:"665",y:"175",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Pure Zero-Dep"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"12-FACTOR CONFIGURATION LOADING & IMMUTABLE DATACLASS PIPELINE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#1e1b4b",stroke:"#a855f7"}),e.jsx("rect",{x:"25",y:"40",width:"220",height:"85",rx:"6",fill:"#3b0764",stroke:"#c084fc"}),e.jsx("text",{x:"35",y:"65",fill:"#f3e8ff",fontSize:"11",fontWeight:"bold",children:"1. .env Local File"}),e.jsx("text",{x:"35",y:"85",fill:"#d8b4fe",fontSize:"9",fontFamily:"monospace",children:"DEFAULT_CAMPUS=Barrackpore"}),e.jsx("text",{x:"35",y:"105",fill:"#d8b4fe",fontSize:"9",fontFamily:"monospace",children:"DATABASE_URL=sqlite:///app.db"}),e.jsx("rect",{x:"25",y:"135",width:"220",height:"85",rx:"6",fill:"#3b0764",stroke:"#c084fc"}),e.jsx("text",{x:"35",y:"160",fill:"#f3e8ff",fontSize:"11",fontWeight:"bold",children:"2. OS Environment Variables"}),e.jsx("text",{x:"35",y:"180",fill:"#d8b4fe",fontSize:"9",fontFamily:"monospace",children:"export LOG_LEVEL=DEBUG"}),e.jsx("text",{x:"35",y:"200",fill:"#d8b4fe",fontSize:"9",fontFamily:"monospace",children:"export APP_ENV=production"}),e.jsx("path",{d:"M 250 130 L 290 130",stroke:"#a855f7",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"295",y:"40",width:"240",height:"180",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"305",y:"65",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"AppConfig.from_env()"}),e.jsx("text",{x:"305",y:"88",fill:"#a7f3d0",fontSize:"8",fontFamily:"monospace",children:"1. Reads os.environ with fallbacks"}),e.jsx("text",{x:"305",y:"105",fill:"#a7f3d0",fontSize:"8",fontFamily:"monospace",children:"2. Coerces int: int(os.getenv(...))"}),e.jsx("text",{x:"305",y:"122",fill:"#a7f3d0",fontSize:"8",fontFamily:"monospace",children:"3. Coerces bool: 'true' ➔ True"}),e.jsx("text",{x:"305",y:"140",fill:"#a7f3d0",fontSize:"8",fontFamily:"monospace",children:"4. Validates database path presence"}),e.jsx("text",{x:"305",y:"175",fill:"#facc15",fontSize:"8",fontWeight:"bold",children:"Type-Safe Parsing Gate"}),e.jsx("path",{d:"M 540 130 L 580 130",stroke:"#a855f7",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"585",y:"40",width:"210",height:"180",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("text",{x:"595",y:"65",fill:"#e0f2fe",fontSize:"11",fontWeight:"bold",children:"@dataclass(frozen=True)"}),e.jsx("text",{x:"595",y:"88",fill:"#bae6fd",fontSize:"8",fontFamily:"monospace",children:"config.default_campus"}),e.jsx("text",{x:"595",y:"105",fill:"#bae6fd",fontSize:"8",fontFamily:"monospace",children:"config.database_url"}),e.jsx("text",{x:"595",y:"122",fill:"#bae6fd",fontSize:"8",fontFamily:"monospace",children:"config.max_batch_size: int"}),e.jsx("text",{x:"595",y:"140",fill:"#bae6fd",fontSize:"8",fontFamily:"monospace",children:"config.enable_sms: bool"}),e.jsx("text",{x:"595",y:"175",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Immutable Across App"})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧪"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Project Scaffolder & pyproject.toml Generator"})]}),e.jsxs("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:["Configure application project templates and build backends to inspect dynamic architectural scaffolding and generated ",e.jsx("code",{className:"text-teal-300 font-mono",children:"pyproject.toml"})," manifests:"]}),e.jsxs("div",{className:"bg-slate-950 p-5 sm:p-6 rounded-xl border border-slate-800/90 space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3",children:"Select Project Architectural Template:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[{id:"CLI_APP",label:"CLI Console Tool",icon:"💻",tag:"Click / Rich Entrypoint"},{id:"REST_API",label:"REST Microservice",icon:"🚀",tag:"FastAPI / SQLite Backend"},{id:"DATA_ENGINE",label:"Data Analytics Engine",icon:"📊",tag:"Pandas / Reporting Hub"}].map(t=>e.jsxs("button",{onClick:()=>h(t.id),className:a("p-3 rounded-xl border text-left transition-all",i===t.id?"bg-teal-950/60 border-teal-500 shadow-md shadow-teal-950/50":"bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400"),children:[e.jsxs("div",{className:"text-base mb-1",children:[t.icon," ",e.jsx("strong",{className:"text-slate-200 text-xs sm:text-sm",children:t.label})]}),e.jsx("div",{className:"text-[11px] text-teal-400 font-mono",children:t.tag})]},t.id))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"Select Modern Build Backend (PEP 517):"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:["hatchling","flit_core","setuptools"].map(t=>e.jsxs("button",{onClick:()=>y(t),className:a("px-3 py-1.5 rounded-lg border text-xs font-mono transition-all",o===t?"bg-cyan-950/80 border-cyan-500 text-cyan-300 shadow-sm":"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"),children:['build-backend = "',t,'"']},t))})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2",children:[e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-teal-900/50",children:[e.jsx("div",{className:"text-xs text-teal-400 font-medium mb-1",children:"Architectural Layer Structure"}),e.jsx("div",{className:"text-xs font-bold font-mono text-teal-300 mt-1 leading-snug",children:l})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-cyan-900/50",children:[e.jsx("div",{className:"text-xs text-cyan-400 font-medium mb-1",children:"Application Entrypoint"}),e.jsx("div",{className:"text-xs font-bold font-mono text-cyan-300 mt-1 leading-snug",children:c})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-purple-900/50",children:[e.jsx("div",{className:"text-xs text-purple-400 font-medium mb-1",children:"Production Domain"}),e.jsx("div",{className:"text-xs font-bold font-mono text-purple-300 mt-1 leading-snug",children:d})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"Generated pyproject.toml Manifest:"}),e.jsx("pre",{className:"p-4 bg-slate-900/90 border border-slate-800 rounded-xl text-xs sm:text-sm font-mono text-teal-200 overflow-x-auto leading-relaxed",children:g})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Production Code Labs & Architectural Scaffolds"})]}),e.jsxs("p",{className:"text-slate-300 mb-8 text-base leading-relaxed",children:["Inspect, run, and master all four production-grade architectural labs covering the ",e.jsx("code",{className:"text-teal-300 font-mono",children:"src/"})," layout, clean package exports with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"__all__"}),", 12-factor configuration loaders, and the complete institutional multi-campus scaffold:"]}),e.jsxs("div",{className:"space-y-10",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:"Lab 1: src/ Layout Blueprint vs Flat Layout Parity"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Inspecting the gold-standard enterprise project tree and understanding how ",e.jsx("code",{className:"text-teal-300 font-mono",children:"src/"})," prevents subtle test runner import bugs."]})]}),e.jsx(m,{fileModule:j,title:"src_layout_vs_flat_layout.py",highlightLines:[12,25,42]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-cyan-300",children:"Lab 2: Package Modularity, Layering & __all__ Public Exports"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Enforcing one-directional dependency flows (Models → Services) and declaring public API symbols via ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"__all__"}),"."]})]}),e.jsx(m,{fileModule:S,title:"package_modularity_and_init.py",highlightLines:[15,27,43]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-purple-300",children:"Lab 3: 12-Factor AppConfig Environment Loader"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Parsing environment variables with fallback defaults into an immutable ",e.jsx("code",{className:"text-purple-300 font-mono",children:"@dataclass(frozen=True)"})," container."]})]}),e.jsx(m,{fileModule:E,title:"environment_and_config_loader.py",highlightLines:[15,25,40]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-amber-300",children:"Lab 4: Multi-Campus Institutional System Scaffolding Case Study"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Complete end-to-end scaffolding coordinating SQLite repositories, admission services, and student domain models for Mamata across Barrackpore and Kolkata."})]}),e.jsx(m,{fileModule:A,title:"institutional_capstone_scaffold.py",highlightLines:[16,32,58,80]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Architecture Pitfalls & Anti-Patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"1. Committing .env Secrets to Git"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Committing ",e.jsx("code",{className:"text-rose-400 font-mono",children:".env"})," files containing live database passwords or API tokens exposes credentials permanently in Git commit history!"]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# BUG: git add .env (Leaks passwords to GitHub!)",`
`,"# FIX: Add .env to .gitignore; commit .env.example"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"2. Circular Layer Imports"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Having a model import a service while the service imports the model creates circular import crashes on module initialization."}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# BUG: student.py imports fee_service.py",`
`,"# FIX: Enforce one-way flow: services ➔ models"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"3. Legacy setup.py / setup.cfg Bloat"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Scattering configurations across ",e.jsx("code",{className:"text-rose-400 font-mono",children:"setup.py"}),", ",e.jsx("code",{className:"text-rose-400 font-mono",children:"setup.cfg"}),", and ",e.jsx("code",{className:"text-rose-400 font-mono",children:"requirements.txt"})," creates outdated fragmentation."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# ANTI-PATTERN: setup.py + setup.cfg + requirements.txt",`
`,"# MODERN STANDARD: pyproject.toml (PEP 621)"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"4. God Modules with Mixed Concerns"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Writing SQL database queries, business math, and terminal ",e.jsx("code",{className:"text-rose-400 font-mono",children:"print()"})," prompts in a single 1,000-line file destroys testability."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# ANTI-PATTERN: 1 file doing DB + Business + UI",`
`,"# BEST PRACTICE: Separate models, repos, services, CLI"]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Professional Project Architecture Checklist"})]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm sm:text-base",children:[e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Adopt the src/ Layout:"})," Place source packages inside ",e.jsx("code",{className:"text-teal-300 font-mono",children:"src/my_package/"})," to guarantee packaging import parity."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Centralize in pyproject.toml:"})," Manage project metadata, dependencies, scripts, and linters in a single TOML manifest."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Isolate Layer Concerns:"})," Keep models pure, repositories focused on SQL, services on business logic, and CLI on user I/O."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Decouple Environment Variables:"})," Load secrets via ",e.jsx("code",{className:"text-teal-300 font-mono",children:".env"})," and parse into strongly-typed immutable ",e.jsx("code",{className:"text-teal-300 font-mono",children:"@dataclass(frozen=True)"})," containers."]})]})]})]}),e.jsx("section",{ref:n,className:"section-hidden",children:e.jsx(_,{title:"Project Architecture & Layout FAQs",questions:w})}),e.jsx("section",{ref:n,className:"section-hidden",children:e.jsx(b,{content:N,title:"Topic 0: Project Architecture & Clean Directory Layout Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic0_note.txt"})}),e.jsx("section",{ref:n,className:"section-hidden",children:e.jsx(v,{note:"A clean, standardized project architecture is what separates hobbyist code from enterprise software engineering. In our institutional capstone projects across Barrackpore, Kolkata, Ichapur, and Jadavpur, adopting the src/ layout and pyproject.toml ensures that managing student data for Mamata, Mahima, Abhronila, Susmita, and Debangshu is modular, maintainable, and ready for immediate deployment. Structure your layers cleanly from day one, and your projects will scale effortlessly."})})]})]})}export{z as default};
