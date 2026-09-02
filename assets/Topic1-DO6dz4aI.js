import{b as c,j as e,bg as d}from"./vendor-react-core-Doz9nIC6.js";import{P as m}from"./PythonFileLoader-hCi5osN-.js";import{P as g}from"./PlainTextPrint-C08xhKA4.js";import{F as b}from"./FAQTemplate-BHhlgA96.js";import{T as y}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const S=`"""\r
# Module: 004_004_capstone-projects\r
# Topic 1: Integrating SQLite / JSON persistence, OOP models, and business logic\r
# File: sqlite_schema_migrations_and_ddl.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating SQLite schema DDL, Foreign Keys PRAGMA, indexes, and migrations.\r
"""\r
\r
import sqlite3\r
\r
def create_institutional_database(conn: sqlite3.Connection):\r
    """Initializes normalized tables with strict referential constraints and indexes."""\r
    # MANDATORY: Enable Foreign Key constraint checking in SQLite\r
    conn.execute("PRAGMA foreign_keys = ON;")\r
    \r
    with conn:\r
        # 1. Campuses Table\r
        conn.execute("""\r
            CREATE TABLE IF NOT EXISTS campuses (\r
                campus_id TEXT PRIMARY KEY,\r
                name TEXT NOT NULL UNIQUE,\r
                city TEXT NOT NULL,\r
                regional_grant_pct REAL DEFAULT 0.0\r
            );\r
        """)\r
\r
        # 2. Students Table (with Foreign Key to campuses)\r
        conn.execute("""\r
            CREATE TABLE IF NOT EXISTS students (\r
                sid TEXT PRIMARY KEY,\r
                name TEXT NOT NULL,\r
                campus_id TEXT NOT NULL,\r
                base_fee REAL NOT NULL CHECK(base_fee > 0),\r
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\r
                FOREIGN KEY (campus_id) REFERENCES campuses(campus_id) ON DELETE RESTRICT\r
            );\r
        """)\r
\r
        # 3. Ledger Transactions Table (Child records)\r
        conn.execute("""\r
            CREATE TABLE IF NOT EXISTS ledger_entries (\r
                entry_id INTEGER PRIMARY KEY AUTOINCREMENT,\r
                sid TEXT NOT NULL,\r
                entry_type TEXT NOT NULL CHECK(entry_type IN ('CHARGE', 'PAYMENT', 'SCHOLARSHIP')),\r
                amount REAL NOT NULL CHECK(amount > 0),\r
                description TEXT NOT NULL,\r
                FOREIGN KEY (sid) REFERENCES students(sid) ON DELETE CASCADE\r
            );\r
        """)\r
\r
        # 4. Indexes for high-speed queries\r
        conn.execute("CREATE INDEX IF NOT EXISTS idx_student_campus ON students(campus_id);")\r
        conn.execute("CREATE INDEX IF NOT EXISTS idx_ledger_student ON ledger_entries(sid);")\r
\r
def seed_campuses(conn: sqlite3.Connection):\r
    with conn:\r
        conn.executemany("""\r
            INSERT OR IGNORE INTO campuses (campus_id, name, city, regional_grant_pct)\r
            VALUES (?, ?, ?, ?)\r
        """, [\r
            ("BP", "Barrackpore Campus", "Barrackpore", 0.15),\r
            ("CC", "Kolkata City Hub", "Kolkata", 0.05),\r
            ("IC", "Ichapur Tech Campus", "Ichapur", 0.10),\r
            ("JU", "Jadavpur Center", "Kolkata", 0.00)\r
        ])\r
\r
def test_database_integrity():\r
    print("   [...] Testing SQLite Schema, Foreign Keys & Integrity...")\r
    conn = sqlite3.connect(":memory:")\r
    conn.row_factory = sqlite3.Row\r
    create_institutional_database(conn)\r
    seed_campuses(conn)\r
\r
    # 1. Insert valid student linked to Barrackpore campus\r
    with conn:\r
        conn.execute("INSERT INTO students (sid, name, campus_id, base_fee) VALUES (?, ?, ?, ?);",\r
                     ("STU_BP_01", "Mamata", "BP", 20000.0))\r
    print("   [PASS] 1. Mamata registered under valid Barrackpore Campus (BP)")\r
\r
    # 2. Verify Foreign Key violation on invalid campus\r
    try:\r
        with conn:\r
            conn.execute("INSERT INTO students (sid, name, campus_id, base_fee) VALUES (?, ?, ?, ?);",\r
                         ("STU_XX_99", "Invalid Student", "INVALID_CAMPUS", 10000.0))\r
        assert False, "Expected IntegrityError on invalid foreign key"\r
    except sqlite3.IntegrityError:\r
        print("   [PASS] 2. Referential integrity: Invalid campus foreign key blocked")\r
\r
    # 3. Add ledger transactions\r
    with conn:\r
        conn.execute("INSERT INTO ledger_entries (sid, entry_type, amount, description) VALUES (?, ?, ?, ?);",\r
                     ("STU_BP_01", "CHARGE", 20000.0, "Admission Tuition Fee"))\r
        conn.execute("INSERT INTO ledger_entries (sid, entry_type, amount, description) VALUES (?, ?, ?, ?);",\r
                     ("STU_BP_01", "PAYMENT", 12000.0, "Online NetBanking Settlement"))\r
\r
    cursor = conn.cursor()\r
    cursor.execute("""\r
        SELECT s.name, c.name AS campus_name,\r
               SUM(CASE WHEN l.entry_type = 'CHARGE' THEN l.amount ELSE 0 END) -\r
               SUM(CASE WHEN l.entry_type = 'PAYMENT' THEN l.amount ELSE 0 END) AS net_balance\r
        FROM students s\r
        JOIN campuses c ON s.campus_id = c.campus_id\r
        JOIN ledger_entries l ON s.sid = l.sid\r
        WHERE s.sid = ?\r
        GROUP BY s.sid;\r
    """, ("STU_BP_01",))\r
    \r
    row = cursor.fetchone()\r
    assert row["name"] == "Mamata"\r
    assert row["net_balance"] == 8000.0\r
    print(f"   [PASS] 3. Relational JOIN Query: {row['name']} at {row['campus_name']} -> Balance: Rs. {row['net_balance']:,.2f}")\r
\r
def main():\r
    print("=" * 75)\r
    print("[SQLITE DDL & PRAGMAS] Strict Foreign Keys, Schemas & Indexes")\r
    print("=" * 75)\r
\r
    test_database_integrity()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Enabling 'PRAGMA foreign_keys = ON' and indexes guarantees")\r
    print("           bulletproof referential integrity and ultra-fast query performance.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,E=`"""\r
# Module: 004_004_capstone-projects\r
# Topic 1: Integrating SQLite / JSON persistence, OOP models, and business logic\r
# File: json_document_store_and_serializer.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating crash-proof atomic JSON persistence and custom encoders.\r
"""\r
\r
import json\r
import os\r
from dataclasses import dataclass, asdict\r
from datetime import datetime, timezone\r
from pathlib import Path\r
import tempfile\r
\r
@dataclass\r
class StudentProfileDocument:\r
    sid: str\r
    name: str\r
    campus: str\r
    enrolled_courses: list[str]\r
    last_updated: datetime\r
\r
class InstitutionalJSONEncoder(json.JSONEncoder):\r
    """Custom JSON encoder handling datetime objects and custom domain models."""\r
    def default(self, obj):\r
        if isinstance(obj, datetime):\r
            return obj.isoformat()\r
        if hasattr(obj, "__dataclass_fields__"):\r
            return asdict(obj)\r
        return super().default(obj)\r
\r
def atomic_save_json(filepath: Path, data: dict | list):\r
    """Atomically writes JSON to disk via temporary file and atomic swap."""\r
    filepath = Path(filepath)\r
    filepath.parent.mkdir(parents=True, exist_ok=True)\r
\r
    # 1. Write to temporary file in the same directory\r
    temp_file = filepath.with_suffix(".tmp")\r
    with open(temp_file, "w", encoding="utf-8") as f:\r
        json.dump(data, f, cls=InstitutionalJSONEncoder, indent=2)\r
\r
    # 2. Atomic OS replace - atomic across modern filesystems\r
    os.replace(temp_file, filepath)\r
\r
def load_json(filepath: Path) -> dict:\r
    with open(filepath, "r", encoding="utf-8") as f:\r
        return json.load(f)\r
\r
def test_atomic_json_store():\r
    print("   [...] Testing Crash-Resilient Atomic JSON Persistence...")\r
    with tempfile.TemporaryDirectory() as tmpdir:\r
        json_path = Path(tmpdir) / "students_registry.json"\r
\r
        # 1. Create document with datetime\r
        doc = StudentProfileDocument(\r
            sid="STU_BP_01",\r
            name="Mamata",\r
            campus="Barrackpore",\r
            enrolled_courses=["Python Pro", "Automated Testing"],\r
            last_updated=datetime.now(timezone.utc)\r
        )\r
\r
        # 2. Atomic save\r
        atomic_save_json(json_path, [doc])\r
        print("   [PASS] 1. Document serialized and atomically written to disk")\r
\r
        # 3. Reload and inspect\r
        loaded = load_json(json_path)\r
        assert len(loaded) == 1\r
        assert loaded[0]["name"] == "Mamata"\r
        assert loaded[0]["campus"] == "Barrackpore"\r
        print(f"   [PASS] 2. Reloaded JSON: {loaded[0]['name']} ({loaded[0]['campus']}) -> Courses: {loaded[0]['enrolled_courses']}")\r
\r
def main():\r
    print("=" * 75)\r
    print("[JSON ATOMIC STORAGE] Crash-Resilient Document Persistence")\r
    print("=" * 75)\r
\r
    test_atomic_json_store()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Writing JSON through a temporary file with os.replace() prevents")\r
    print("           corrupted 0-byte files if a system loses power during saving.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,N=`"""\r
# Module: 004_004_capstone-projects\r
# Topic 1: Integrating SQLite / JSON persistence, OOP models, and business logic\r
# File: repository_pattern_crud_operations.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating the Repository Pattern for clean CRUD abstraction.\r
"""\r
\r
from abc import ABC, abstractmethod\r
from dataclasses import dataclass\r
from typing import Optional\r
import sqlite3\r
\r
# 1. DOMAIN MODEL\r
@dataclass\r
class StudentRecord:\r
    sid: str\r
    name: str\r
    campus: str\r
    gpa: float = 0.0\r
\r
# 2. ABSTRACT REPOSITORY INTERFACE\r
class IStudentRepository(ABC):\r
    @abstractmethod\r
    def add(self, student: StudentRecord) -> None:\r
        pass\r
\r
    @abstractmethod\r
    def get(self, sid: str) -> Optional[StudentRecord]:\r
        pass\r
\r
    @abstractmethod\r
    def list_by_campus(self, campus: str) -> list[StudentRecord]:\r
        pass\r
\r
    @abstractmethod\r
    def update_gpa(self, sid: str, new_gpa: float) -> bool:\r
        pass\r
\r
# 3. SQLITE CONCRETE IMPLEMENTATION\r
class SQLiteStudentRepository(IStudentRepository):\r
    def __init__(self, conn: sqlite3.Connection):\r
        self.conn = conn\r
        self._init_schema()\r
\r
    def _init_schema(self):\r
        with self.conn:\r
            self.conn.execute("""\r
                CREATE TABLE IF NOT EXISTS student_registry (\r
                    sid TEXT PRIMARY KEY,\r
                    name TEXT NOT NULL,\r
                    campus TEXT NOT NULL,\r
                    gpa REAL DEFAULT 0.0\r
                );\r
            """)\r
\r
    def add(self, student: StudentRecord) -> None:\r
        with self.conn:\r
            self.conn.execute(\r
                "INSERT INTO student_registry (sid, name, campus, gpa) VALUES (?, ?, ?, ?);",\r
                (student.sid, student.name, student.campus, student.gpa)\r
            )\r
\r
    def get(self, sid: str) -> Optional[StudentRecord]:\r
        cursor = self.conn.cursor()\r
        cursor.execute("SELECT sid, name, campus, gpa FROM student_registry WHERE sid = ?;", (sid,))\r
        row = cursor.fetchone()\r
        if not row:\r
            return None\r
        return StudentRecord(*row)\r
\r
    def list_by_campus(self, campus: str) -> list[StudentRecord]:\r
        cursor = self.conn.cursor()\r
        cursor.execute("SELECT sid, name, campus, gpa FROM student_registry WHERE campus = ? ORDER BY name ASC;", (campus,))\r
        return [StudentRecord(*row) for row in cursor.fetchall()]\r
\r
    def update_gpa(self, sid: str, new_gpa: float) -> bool:\r
        with self.conn:\r
            cursor = self.conn.execute(\r
                "UPDATE student_registry SET gpa = ? WHERE sid = ?;",\r
                (new_gpa, sid)\r
            )\r
            return cursor.rowcount > 0\r
\r
def test_repository_pattern():\r
    print("   [...] Testing Repository Pattern CRUD Abstraction...")\r
    conn = sqlite3.connect(":memory:")\r
    repo = SQLiteStudentRepository(conn)\r
\r
    # 1. Add students across Barrackpore and Kolkata\r
    repo.add(StudentRecord("STU_BP_01", "Mamata", "Barrackpore", 94.5))\r
    repo.add(StudentRecord("STU_BP_02", "Abhronila", "Barrackpore", 92.0))\r
    repo.add(StudentRecord("STU_CC_01", "Mahima", "Kolkata", 88.0))\r
    print("   [PASS] 1. Students created in repository")\r
\r
    # 2. Query by ID\r
    s = repo.get("STU_BP_01")\r
    assert s is not None and s.name == "Mamata"\r
    print(f"   [PASS] 2. Fetched by ID: {s.name} (GPA: {s.gpa})")\r
\r
    # 3. Filter by Campus\r
    bp_students = repo.list_by_campus("Barrackpore")\r
    assert len(bp_students) == 2\r
    print(f"   [PASS] 3. Filtered Barrackpore students count: {len(bp_students)} (Mamata, Abhronila)")\r
\r
    # 4. Update GPA\r
    updated = repo.update_gpa("STU_BP_01", 96.0)\r
    assert updated is True\r
    assert repo.get("STU_BP_01").gpa == 96.0\r
    print("   [PASS] 4. GPA updated to 96.0 successfully")\r
\r
def main():\r
    print("=" * 75)\r
    print("[REPOSITORY PATTERN] Clean CRUD Decoupling from SQL")\r
    print("=" * 75)\r
\r
    test_repository_pattern()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] The repository pattern allows business services to query")\r
    print("           data without writing a single line of SQL in business logic.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,T=`"""\r
# Module: 004_004_capstone-projects\r
# Topic 1: Integrating SQLite / JSON persistence, OOP models, and business logic\r
# File: institutional_ledger_persistence_engine.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: End-to-end multi-campus fee ledger, student persistence,\r
#              and atomic settlement engine for Barrackpore, Kolkata, and Ichapur.\r
"""\r
\r
from dataclasses import dataclass\r
from typing import Optional\r
import sqlite3\r
\r
# ------------------------------------------------------------------------------\r
# 1. DOMAIN MODELS\r
# ------------------------------------------------------------------------------\r
@dataclass\r
class Campus:\r
    campus_id: str\r
    name: str\r
    city: str\r
\r
@dataclass\r
class StudentProfile:\r
    sid: str\r
    name: str\r
    campus_id: str\r
    total_fee: float\r
\r
@dataclass\r
class LedgerSummary:\r
    sid: str\r
    name: str\r
    campus_name: str\r
    total_charges: float\r
    total_payments: float\r
    outstanding_balance: float\r
\r
# ------------------------------------------------------------------------------\r
# 2. PERSISTENCE LAYER\r
# ------------------------------------------------------------------------------\r
class InstitutionalLedgerRepository:\r
    def __init__(self, conn: sqlite3.Connection):\r
        self.conn = conn\r
        self.conn.execute("PRAGMA foreign_keys = ON;")\r
        self._init_tables()\r
\r
    def _init_tables(self):\r
        with self.conn:\r
            self.conn.execute("""\r
                CREATE TABLE IF NOT EXISTS campuses (\r
                    campus_id TEXT PRIMARY KEY,\r
                    name TEXT NOT NULL,\r
                    city TEXT NOT NULL\r
                );\r
            """)\r
            self.conn.execute("""\r
                CREATE TABLE IF NOT EXISTS students (\r
                    sid TEXT PRIMARY KEY,\r
                    name TEXT NOT NULL,\r
                    campus_id TEXT NOT NULL,\r
                    total_fee REAL NOT NULL,\r
                    FOREIGN KEY (campus_id) REFERENCES campuses(campus_id)\r
                );\r
            """)\r
            self.conn.execute("""\r
                CREATE TABLE IF NOT EXISTS ledger (\r
                    id INTEGER PRIMARY KEY AUTOINCREMENT,\r
                    sid TEXT NOT NULL,\r
                    entry_type TEXT NOT NULL CHECK(entry_type IN ('CHARGE', 'PAYMENT')),\r
                    amount REAL NOT NULL CHECK(amount > 0),\r
                    description TEXT NOT NULL,\r
                    FOREIGN KEY (sid) REFERENCES students(sid)\r
                );\r
            """)\r
\r
    def add_campus(self, campus: Campus):\r
        with self.conn:\r
            self.conn.execute("INSERT OR REPLACE INTO campuses VALUES (?, ?, ?);",\r
                             (campus.campus_id, campus.name, campus.city))\r
\r
    def enroll_student(self, student: StudentProfile):\r
        with self.conn:\r
            self.conn.execute("INSERT INTO students VALUES (?, ?, ?, ?);",\r
                             (student.sid, student.name, student.campus_id, student.total_fee))\r
            # Initial tuition charge\r
            self.conn.execute("INSERT INTO ledger (sid, entry_type, amount, description) VALUES (?, 'CHARGE', ?, 'Initial Course Tuition');",\r
                             (student.sid, student.total_fee))\r
\r
    def record_payment(self, sid: str, amount: float, description: str):\r
        with self.conn:\r
            self.conn.execute("INSERT INTO ledger (sid, entry_type, amount, description) VALUES (?, 'PAYMENT', ?, ?);",\r
                             (sid, amount, description))\r
\r
    def get_ledger_summary(self, sid: str) -> Optional[LedgerSummary]:\r
        cursor = self.conn.cursor()\r
        cursor.execute("""\r
            SELECT s.sid, s.name, c.name,\r
                   COALESCE(SUM(CASE WHEN l.entry_type = 'CHARGE' THEN l.amount ELSE 0 END), 0) AS charges,\r
                   COALESCE(SUM(CASE WHEN l.entry_type = 'PAYMENT' THEN l.amount ELSE 0 END), 0) AS payments\r
            FROM students s\r
            JOIN campuses c ON s.campus_id = c.campus_id\r
            LEFT JOIN ledger l ON s.sid = l.sid\r
            WHERE s.sid = ?\r
            GROUP BY s.sid;\r
        """, (sid,))\r
        row = cursor.fetchone()\r
        if not row:\r
            return None\r
        sid, name, campus_name, charges, payments = row\r
        return LedgerSummary(\r
            sid=sid,\r
            name=name,\r
            campus_name=campus_name,\r
            total_charges=charges,\r
            total_payments=payments,\r
            outstanding_balance=charges - payments\r
        )\r
\r
# ------------------------------------------------------------------------------\r
# VERIFICATION SUITE\r
# ------------------------------------------------------------------------------\r
def test_institutional_ledger_engine():\r
    print("   [...] Running Institutional Ledger Persistence Suite...")\r
    conn = sqlite3.connect(":memory:")\r
    repo = InstitutionalLedgerRepository(conn)\r
\r
    # 1. Seed Campuses\r
    repo.add_campus(Campus("BP", "Barrackpore Campus", "Barrackpore"))\r
    repo.add_campus(Campus("CC", "Kolkata Hub", "Kolkata"))\r
    print("   [PASS] 1. Campuses seeded (Barrackpore, Kolkata)")\r
\r
    # 2. Enroll Mamata at Barrackpore\r
    repo.enroll_student(StudentProfile("STU_BP_01", "Mamata", "BP", 25000.0))\r
    s_initial = repo.get_ledger_summary("STU_BP_01")\r
    assert s_initial.outstanding_balance == 25000.0\r
    print("   [PASS] 2. Mamata enrolled: Initial Balance = Rs. 25,000")\r
\r
    # 3. Record Installment Payment 1: Rs. 15,000\r
    repo.record_payment("STU_BP_01", 15000.0, "Installment 1 - UPI")\r
    s_p1 = repo.get_ledger_summary("STU_BP_01")\r
    assert s_p1.outstanding_balance == 10000.0\r
    assert s_p1.total_payments == 15000.0\r
    print("   [PASS] 3. Payment 1 recorded: Outstanding Balance = Rs. 10,000")\r
\r
    # 4. Record Installment Payment 2: Rs. 10,000 (Full Settlement)\r
    repo.record_payment("STU_BP_01", 10000.0, "Installment 2 - NetBanking")\r
    s_final = repo.get_ledger_summary("STU_BP_01")\r
    assert s_final.outstanding_balance == 0.0\r
    assert s_final.total_payments == 25000.0\r
    print("   [PASS] 4. Payment 2 recorded: Full Account Settlement (Balance: Rs. 0.00)")\r
\r
def main():\r
    print("=" * 80)\r
    print("[CASE STUDY] Complete Institutional Multi-Campus Ledger Engine")\r
    print("=" * 80)\r
\r
    test_institutional_ledger_engine()\r
\r
    print("=" * 80)\r
    print("[TAKEAWAY] Combining SQLite referential constraints, atomic transactions,")\r
    print("           and repository abstractions ensures 100% data integrity in production.")\r
    print("=" * 80)\r
\r
if __name__ == "__main__":\r
    main()\r
`,_=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 4: PRO LEVEL • MODULE 004_004: CAPSTONE PROJECTS\r
           TOPIC 1: INTEGRATING SQLITE / JSON PERSISTENCE & BUSINESS LOGIC\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. SQLITE INTEGRATION BEST PRACTICES\r
--------------------------------------------------------------------------------\r
  1. Always enable Foreign Keys:\r
     conn.execute("PRAGMA foreign_keys = ON;")\r
\r
  2. Always use parameterized queries (?) to prevent SQL Injection:\r
     cursor.execute("SELECT * FROM students WHERE campus = ?;", (campus_name,))\r
\r
  3. Use connection context managers for automated commit/rollback:\r
     with conn:\r
         conn.execute("UPDATE accounts SET balance = balance - ? WHERE id = ?", (amt, id1))\r
         conn.execute("UPDATE accounts SET balance = balance + ? WHERE id = ?", (amt, id2))\r
\r
--------------------------------------------------------------------------------\r
2. CRASH-PROOF ATOMIC JSON FILE WRITING\r
--------------------------------------------------------------------------------\r
  # Prevents 0-byte corrupted files if process crashes midway:\r
  def atomic_save_json(filepath: Path, data: dict):\r
      temp_file = filepath.with_suffix(".tmp")\r
      with open(temp_file, "w", encoding="utf-8") as f:\r
          json.dump(data, f, indent=2)\r
      os.replace(temp_file, filepath)  # Atomic OS rename operation\r
\r
--------------------------------------------------------------------------------\r
3. THE REPOSITORY PATTERN\r
--------------------------------------------------------------------------------\r
  Domain Model (Student) <-> StudentRepository (SQL/JSON) <-> AdmissionService\r
\r
================================================================================\r
       END OF STUDY NOTE • TOPIC 1: SQLITE / JSON PERSISTENCE\r
================================================================================\r
`,j=[{question:"Why must you execute 'PRAGMA foreign_keys = ON;' on every new SQLite connection in Python?",shortAnswer:"For historical backwards compatibility, SQLite disables foreign key constraint enforcement by default; executing 'PRAGMA foreign_keys = ON;' ensures referential integrity (e.g. preventing orphan student ledger entries) is strictly enforced.",explanation:"SQLite foreign key default behavior and referential integrity.",hint:"SQLite disables foreign keys by default for backwards compatibility; you must turn it on.",level:"basic",codeExample:`conn = sqlite3.connect('campus.db')
conn.execute('PRAGMA foreign_keys = ON;')`},{question:"What is SQL Injection and how do parameterized queries ('?') eliminate this vulnerability?",shortAnswer:"SQL Injection occurs when user input strings are formatted directly into SQL queries (e.g. f-strings), allowing attackers to execute malicious commands; parameterized queries pass data separately as bound parameters, ensuring input is treated purely as literal values.",explanation:"SQL Injection mechanism and parameterized query defense.",hint:"Never use f-strings in SQL; use '?' placeholders with tuples of parameters.",level:"basic",codeExample:`# VULNERABLE: f'SELECT * FROM users WHERE name = {user}'
# SECURE: cursor.execute('SELECT * FROM users WHERE name = ?', (user,))`},{question:"How does Python's 'with conn:' context manager handle SQLite transactions automatically?",shortAnswer:"When wrapping database operations in 'with conn:', Python opens an atomic transaction; if the block executes without error, it automatically calls 'conn.commit()'; if an exception is raised, it automatically triggers 'conn.rollback()'.",explanation:"Automated transaction commit and rollback via connection context managers.",hint:"Commits automatically on success; rolls back automatically on unhandled exception.",level:"basic",codeExample:`with conn:
    conn.execute('UPDATE accounts SET bal = bal - 100 WHERE id = 1')
    conn.execute('UPDATE accounts SET bal = bal + 100 WHERE id = 2')`},{question:"What is 'Atomic File Writing' in JSON persistence and why is it crucial?",shortAnswer:"Writing data to a temporary file (e.g. 'data.json.tmp') first and then atomically swapping it with 'os.replace()' ensures that if the computer crashes or loses power during the write, the original 'data.json' remains uncorrupted.",explanation:"Preventing zero-byte file corruption during sudden system crashes.",hint:"Write to a temporary file first, then use os.replace() to prevent file corruption during crashes.",level:"moderate",codeExample:`# Atomic JSON write pattern:
with open('data.tmp', 'w') as f: json.dump(data, f)
os.replace('data.tmp', 'data.json')`},{question:"What is the 'Repository Pattern' and what architectural problem does it solve?",shortAnswer:"The Repository Pattern acts as an abstraction layer between business services and the data persistence tier, mediating between domain objects and SQL/JSON storage so business logic remains 100% agnostic to storage implementation details.",explanation:"Repository Pattern decoupling domain models from storage mechanisms.",hint:"Mediates between domain entities and SQL/JSON queries, keeping business logic clean.",level:"moderate",codeExample:`class StudentRepository:
    def get_by_id(self, sid: str) → Student:
        # Encapsulates SQL queries`},{question:"How can you serialize custom dataclasses and datetime objects to JSON in Python?",shortAnswer:"By defining a custom subclass of 'json.JSONEncoder' overriding 'default()' (or using dataclasses.asdict() and datetime.isoformat()), or using Pydantic's 'model_dump_json()'.",explanation:"Custom JSON serialization for complex Python objects.",hint:"Subclass json.JSONEncoder or use dataclasses.asdict() / model.isoformat().",level:"basic",codeExample:`class CustomEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, datetime): return o.isoformat()
        return super().default(o)`},{question:"What is the difference between 'cursor.fetchone()' and 'cursor.fetchall()'?",shortAnswer:"'cursor.fetchone()' retrieves the next single row from the result set (returning None when no rows remain), minimizing memory usage; 'cursor.fetchall()' loads all remaining rows into memory at once as a list.",explanation:"Result set memory streaming vs batch fetching in sqlite3.",hint:"fetchone() loads one row at a time; fetchall() loads all rows into a list.",level:"basic",codeExample:"row = cursor.fetchone() # Efficient for single lookups"},{question:"Why should database column names be mapped to domain model attributes rather than passing raw tuples through services?",shortAnswer:"Passing raw tuples (e.g. 'row[0]', 'row[3]') creates fragile, unreadable code that breaks whenever SQL column ordering changes; mapping tuples to strongly-typed dataclasses provides type safety, autocompletion, and domain encapsulation.",explanation:"Domain Model Entity mapping vs raw tuple anti-pattern.",hint:"Raw tuples break easily if column order changes; dataclasses provide clear named fields.",level:"basic",codeExample:"# Convert tuple to Dataclass: Student(*row) or Student(sid=row[0], name=row[1])"},{question:"What is an SQLite 'INDEX' and when should you create one?",shortAnswer:"An index is a B-tree data structure that accelerates lookups and queries on specific columns (e.g. 'CREATE INDEX idx_student_campus ON students(campus);'); they should be created on frequently searched, filtered, or joined columns.",explanation:"Query optimization and index design in SQLite.",hint:"Speeds up search queries on frequently filtered columns like campus or email.",level:"moderate",codeExample:"CREATE INDEX IF NOT EXISTS idx_campus ON students(campus);"},{question:"How do you configure sqlite3 to return dictionary-like row objects instead of raw tuples?",shortAnswer:`Set 'conn.row_factory = sqlite3.Row', which allows accessing columns by name (e.g. 'row["name"]') as well as by positional index.`,explanation:"sqlite3.Row dictionary-like column access.",hint:"Set conn.row_factory = sqlite3.Row to access columns by name like a dict.",level:"basic",codeExample:`conn.row_factory = sqlite3.Row
row = cursor.fetchone()
print(row['name'])`},{question:"What are ACID properties in database management systems?",shortAnswer:"Atomicity (all operations succeed or all roll back), Consistency (data satisfies all schema rules and constraints), Isolation (concurrent transactions do not interfere), and Durability (committed transactions survive system crashes).",explanation:"The foundational ACID relational database principles.",hint:"Atomicity, Consistency, Isolation, and Durability.",level:"moderate",codeExample:"# ACID ensures financial transactions remain correct under all conditions"},{question:"When is JSON document storage preferred over an SQLite database?",shortAnswer:"JSON is ideal for hierarchical configuration files, small semi-structured document payloads, or user preferences; SQLite is vastly superior for relational data, large datasets, indexing, concurrent access, and ACID transactions.",explanation:"Trade-offs between flat JSON documents and relational SQLite databases.",hint:"JSON is great for simple configs; SQLite is best for relational data and indexing.",level:"moderate",codeExample:"# JSON for config.json | SQLite for institutional_ledger.db"},{question:"How do you safely handle database migrations and schema upgrades in Python?",shortAnswer:"By maintaining a 'schema_version' metadata table, tracking applied migration scripts sequentially, and running migration DDL commands inside atomic transactions.",explanation:"Schema versioning and migration lifecycle management.",hint:"Use a schema_version table to track applied migration scripts sequentially.",level:"complex",codeExample:"CREATE TABLE IF NOT EXISTS schema_version (version INT PRIMARY KEY);"},{question:"What happens if an unhandled Python exception occurs inside a 'with conn:' block?",shortAnswer:"The connection context manager catches the exception, immediately executes 'ROLLBACK' on the active transaction to restore previous state, and re-raises the exception to the caller.",explanation:"Automated error recovery and rollback mechanics.",hint:"The transaction is rolled back automatically to prevent corrupted partial state.",level:"basic",codeExample:"# Unhandled error → ROLLBACK → database remains in consistent valid state"},{question:"Why should you never store database connection objects as global module-level singletons in multi-threaded applications?",shortAnswer:"By default, standard SQLite connection objects cannot be shared across different operating system threads without risk of race conditions and threading crashes ('SQLite objects created in a thread can only be used in that same thread').",explanation:"Thread safety and SQLite connection scoping.",hint:"SQLite connections are not thread-safe by default; create scoped connections or use pooling.",level:"complex",codeExample:"# Create connection per request/thread or use connection pooling"},{question:"How do you implement an In-Memory SQLite database for fast unit testing?",shortAnswer:`Pass ':memory:' as the database path to 'sqlite3.connect(":memory:")', creating an ultra-fast database that lives exclusively in RAM and is destroyed upon connection close.`,explanation:"Ephemeral in-memory SQLite testing databases.",hint:"Use sqlite3.connect(':memory:') for isolated, ultra-fast unit testing.",level:"basic",codeExample:"test_conn = sqlite3.connect(':memory:')"},{question:"What is the purpose of 'ON DELETE CASCADE' in foreign key definitions?",shortAnswer:"It automatically deletes associated child records when a parent record is deleted (e.g. deleting a student automatically removes all their ledger and grade entries), preventing orphan rows.",explanation:"Cascade deletion and referential integrity automation.",hint:"Automatically deletes child records when the parent record is deleted.",level:"moderate",codeExample:"FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE"},{question:"How can you prevent race conditions when updating ledger balances in SQLite?",shortAnswer:"Perform updates using atomic SQL arithmetic (e.g. 'UPDATE accounts SET balance = balance - ? WHERE id = ? AND balance >= ?') inside an immediate transaction, checking that rowcount == 1.",explanation:"Atomic update arithmetic preventing balance race conditions.",hint:"Use atomic SQL math like 'balance = balance - ?' inside an atomic transaction.",level:"moderate",codeExample:"UPDATE ledgers SET balance = balance - 500 WHERE id = 1 AND balance >= 500;"},{question:"What is the difference between 'json.dump()' and 'json.dumps()'?",shortAnswer:"'json.dump()' serializes Python objects directly into a writable file stream; 'json.dumps()' serializes Python objects into an in-memory string.",explanation:"File streaming serialization vs in-memory string formatting in json module.",hint:"dump() writes to a file; dumps() returns a string ('dump string').",level:"basic",codeExample:"json.dump(data, file_handle) vs string_data = json.dumps(data)"},{question:"What is the ultimate golden rule of database persistence in professional Python software?",shortAnswer:"Always enforce foreign keys ('PRAGMA foreign_keys = ON'), use parameterized queries ('?') without exception, encapsulate SQL in dedicated Repository classes, and wrap multi-statement mutations in atomic transactions.",explanation:"The complete enterprise Python database persistence standard.",hint:"Foreign keys ON + parameterized queries + Repository pattern + atomic transactions.",level:"basic",codeExample:"# Enterprise Python Database Persistence Standard"}];function v(){const p=c.useRef([]),[a,x]=c.useState("sqliteSchema"),[s,f]=c.useState("ENROLL");let r="Mamata enrolled at Barrackpore (Total Tuition: Rs. 25,000)",i=25e3,o="COMMITTED ✅ (1 Charge Entry Created)";s==="ENROLL"?(r="Mamata enrolled at Barrackpore (Total Tuition: Rs. 25,000)",i=25e3,o="COMMITTED ✅ (1 Charge Entry Created)"):s==="PAY_PARTIAL"?(r="Installment 1 Payment of Rs. 15,000 via NetBanking",i=1e4,o="COMMITTED ✅ (1 Payment Entry Created, Balance: Rs. 10,000)"):s==="PAY_FULL"?(r="Installment 2 Payment of Rs. 10,000 (Full Settlement)",i=0,o="COMMITTED ✅ (Account Fully Settled, Balance: Rs. 0.00)"):s==="CRASH_ROLLBACK"&&(r="Invalid Payment (> Balance or Network Exception midway)",i=1e4,o="ROLLED BACK 🔄 (Zero State Corrupted, ACID Protected)");const h=`# SQLite Atomic Transaction & Repository Execution
# Action: ${s} | Student: Mamata (STU_BP_01)

${s==="ENROLL"?`# 1. Enrolling new student inside atomic transaction
with conn:
    # Foreign key constraint verified: 'BP' exists in campuses table
    conn.execute(
        "INSERT INTO students (sid, name, campus_id, total_fee) VALUES (?, ?, ?, ?);",
        ("STU_BP_01", "Mamata", "BP", 25000.0)
    )
    conn.execute(
        "INSERT INTO ledger (sid, entry_type, amount, description) VALUES (?, 'CHARGE', ?, ?);",
        ("STU_BP_01", 25000.0, "Initial Tuition Fee")
    )
# Result: Transaction committed automatically!`:s==="PAY_PARTIAL"?`# 2. Recording partial payment installment
with conn:
    conn.execute(
        "INSERT INTO ledger (sid, entry_type, amount, description) VALUES (?, 'PAYMENT', ?, ?);",
        ("STU_BP_01", 15000.0, "Installment 1 - NetBanking")
    )

# Outstanding Balance: Rs. 10,000.00`:s==="PAY_FULL"?`# 3. Final settlement installment
with conn:
    conn.execute(
        "INSERT INTO ledger (sid, entry_type, amount, description) VALUES (?, 'PAYMENT', ?, ?);",
        ("STU_BP_01", 10000.0, "Installment 2 - UPI Settlement")
    )

# Outstanding Balance: Rs. 0.00 (Fully Settled)`:`# 4. Exception Handling & Automated Rollback Demo
try:
    with conn:
        conn.execute(
            "INSERT INTO ledger (sid, entry_type, amount, description) VALUES (?, 'PAYMENT', ?, ?);",
            ("STU_BP_01", 50000.0, "Overpayment")
        )
        raise ValueError("Payment amount exceeds outstanding debt!")
except ValueError as e:
    # 'with conn' automatically executes ROLLBACK on active transaction!
    print(f"Transaction aborted safely: {e}")`}`;c.useEffect(()=>{const t=new IntersectionObserver(l=>{l.forEach(u=>{u.isIntersecting&&u.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return p.current.forEach(l=>{l&&t.observe(l)}),()=>t.disconnect()},[]);const n=t=>{t&&!p.current.includes(t)&&p.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:n,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 4 • Module 004_004"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 1"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Capstone Projects, Portfolio & Interview Mastery"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Integrating SQLite & JSON: ",e.jsx("span",{className:"text-teal-400",children:"Persistence & Business Logic"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master industrial data persistence in Python: enforcing relational integrity with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"PRAGMA foreign_keys = ON"}),", preventing SQL Injection with parameterized queries (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"?"}),"), managing atomic ACID transactions with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"with conn:"}),", crash-proof atomic JSON file writing via temporary files and ",e.jsx("code",{className:"text-amber-300 font-mono",children:"os.replace()"}),", and abstracting data storage behind the Repository Pattern."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🗄️ SQLite Relational Architecture"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Parameterized SQL (?) & Injection Defense"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔄 Atomic JSON File Swapping"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🏛️ Repository Pattern CRUD Abstraction"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Data Persistence Architecture"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"Professional Python applications combine relational databases for structured, high-integrity transactional data with JSON document stores for configuration and export artifacts:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Referential Integrity"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"PRAGMA foreign_keys=ON"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Strictly validates relationships between parents (campuses) and children (students, ledgers) to eliminate orphan rows."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Parameterized SQL"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:'execute("... WHERE id=?", (id,))'}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Separates query structure from user data, permanently neutralizing SQL Injection vulnerabilities."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Atomic File Writing"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"tempfile + os.replace()"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Writes JSON to temporary files first and swaps atomically, preventing zero-byte file corruption during crashes."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 shadow-lg",children:[e.jsx("div",{className:"text-amber-400 font-bold text-sm mb-1",children:"4️⃣ Repository Pattern"}),e.jsx("code",{className:"text-xs font-mono text-amber-300 block mb-1",children:"IStudentRepository"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Mediates between domain entities and database tables, keeping business calculation rules 100% free of raw SQL."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The SQLite Context Manager Superpower: Automated Commit & Rollback"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Wrapping database operations in ",e.jsx("code",{className:"text-teal-300 font-mono",children:"with conn:"})," opens an ACID transaction. If all statements complete successfully, ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"conn.commit()"})," is called automatically. If any statement raises an error, ",e.jsx("code",{className:"text-rose-400 font-mono",children:"conn.rollback()"})," is triggered instantly, preventing partially mutated ledger balances!"]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Relational Integrity, Atomic JSON & Repository Layers"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>x("sqliteSchema"),className:d("px-3 py-1.5 rounded-lg transition-all",a==="sqliteSchema"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Relational Foreign Keys"}),e.jsx("button",{onClick:()=>x("atomicJson"),className:d("px-3 py-1.5 rounded-lg transition-all",a==="atomicJson"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Crash-Proof Atomic JSON"}),e.jsx("button",{onClick:()=>x("repoPattern"),className:d("px-3 py-1.5 rounded-lg transition-all",a==="repoPattern"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Repository Pattern Decoupling"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining SQLite table schemas, temporary file swapping mechanisms, and repository abstraction boundaries:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:a==="sqliteSchema"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"RELATIONAL SCHEMA INTEGRITY: CAMPUSES ➔ STUDENTS ➔ LEDGER ENTRIES"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"220",height:"235",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("rect",{x:"0",y:"0",width:"220",height:"30",rx:"6",fill:"#0d9488"}),e.jsx("text",{x:"15",y:"20",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"TABLE: campuses"}),e.jsx("text",{x:"15",y:"55",fill:"#facc15",fontSize:"9",fontFamily:"monospace",children:"🔑 campus_id TEXT PK"}),e.jsx("text",{x:"15",y:"75",fill:"#ccfbf1",fontSize:"9",fontFamily:"monospace",children:"name TEXT NOT NULL"}),e.jsx("text",{x:"15",y:"95",fill:"#ccfbf1",fontSize:"9",fontFamily:"monospace",children:"city TEXT NOT NULL"}),e.jsx("text",{x:"15",y:"115",fill:"#ccfbf1",fontSize:"9",fontFamily:"monospace",children:"regional_grant_pct REAL"}),e.jsx("rect",{x:"10",y:"145",width:"200",height:"75",rx:"4",fill:"#022c22"}),e.jsx("text",{x:"15",y:"165",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Seed Data:"}),e.jsx("text",{x:"15",y:"180",fill:"#a7f3d0",fontSize:"8",fontFamily:"monospace",children:"BP: Barrackpore (15%)"}),e.jsx("text",{x:"15",y:"195",fill:"#a7f3d0",fontSize:"8",fontFamily:"monospace",children:"CC: Kolkata (5%)"}),e.jsx("text",{x:"15",y:"210",fill:"#a7f3d0",fontSize:"8",fontFamily:"monospace",children:"IC: Ichapur (10%)"})]}),e.jsxs("g",{transform:"translate(290, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"235",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("rect",{x:"0",y:"0",width:"250",height:"30",rx:"6",fill:"#0284c7"}),e.jsx("text",{x:"15",y:"20",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"TABLE: students"}),e.jsx("text",{x:"15",y:"55",fill:"#facc15",fontSize:"9",fontFamily:"monospace",children:"🔑 sid TEXT PK"}),e.jsx("text",{x:"15",y:"75",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"name TEXT NOT NULL"}),e.jsx("text",{x:"15",y:"95",fill:"#38bdf8",fontSize:"9",fontFamily:"monospace",children:"🔗 campus_id FK ➔ campuses"}),e.jsx("text",{x:"15",y:"115",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"base_fee REAL NOT NULL"}),e.jsx("text",{x:"15",y:"135",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"created_at TIMESTAMP"}),e.jsx("rect",{x:"10",y:"155",width:"230",height:"65",rx:"4",fill:"#082f49"}),e.jsx("text",{x:"15",y:"175",fill:"#38bdf8",fontSize:"8",fontWeight:"bold",children:"Foreign Key Rule:"}),e.jsx("text",{x:"15",y:"192",fill:"#e0f2fe",fontSize:"8",children:"ON DELETE RESTRICT"}),e.jsx("text",{x:"15",y:"208",fill:"#e0f2fe",fontSize:"8",children:"INDEX: idx_student_campus"})]}),e.jsxs("g",{transform:"translate(580, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"235",rx:"6",fill:"#1e1b4b",stroke:"#818cf8"}),e.jsx("rect",{x:"0",y:"0",width:"250",height:"30",rx:"6",fill:"#4f46e5"}),e.jsx("text",{x:"15",y:"20",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"TABLE: ledger_entries"}),e.jsx("text",{x:"15",y:"55",fill:"#facc15",fontSize:"9",fontFamily:"monospace",children:"🔑 entry_id INTEGER PK AUTO"}),e.jsx("text",{x:"15",y:"75",fill:"#818cf8",fontSize:"9",fontFamily:"monospace",children:"🔗 sid FK ➔ students"}),e.jsx("text",{x:"15",y:"95",fill:"#c7d2fe",fontSize:"9",fontFamily:"monospace",children:"entry_type TEXT CHECK"}),e.jsx("text",{x:"15",y:"115",fill:"#c7d2fe",fontSize:"9",fontFamily:"monospace",children:"amount REAL CHECK(>0)"}),e.jsx("text",{x:"15",y:"135",fill:"#c7d2fe",fontSize:"9",fontFamily:"monospace",children:"description TEXT"}),e.jsx("rect",{x:"10",y:"155",width:"230",height:"65",rx:"4",fill:"#0f172a"}),e.jsx("text",{x:"15",y:"175",fill:"#818cf8",fontSize:"8",fontWeight:"bold",children:"Audit & Balance:"}),e.jsx("text",{x:"15",y:"192",fill:"#e0e7ff",fontSize:"8",children:"SUM(CHARGE) - SUM(PAYMENT)"}),e.jsx("text",{x:"15",y:"208",fill:"#86efac",fontSize:"8",children:"Immutable Transaction Log"})]})]}):a==="atomicJson"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"CRASH-PROOF ATOMIC FILE PERSISTENCE PIPELINE (OS.REPLACE)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#082f49",stroke:"#0ea5e9"}),e.jsx("rect",{x:"25",y:"40",width:"220",height:"165",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("text",{x:"35",y:"65",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"1. In-Memory Dataclass"}),e.jsx("text",{x:"35",y:"90",fill:"#bae6fd",fontSize:"8",fontFamily:"monospace",children:"StudentProfile("}),e.jsx("text",{x:"45",y:"105",fill:"#bae6fd",fontSize:"8",fontFamily:"monospace",children:'name="Mamata",'}),e.jsx("text",{x:"45",y:"120",fill:"#bae6fd",fontSize:"8",fontFamily:"monospace",children:"updated=datetime.now()"}),e.jsx("text",{x:"35",y:"135",fill:"#bae6fd",fontSize:"8",fontFamily:"monospace",children:")"}),e.jsx("text",{x:"35",y:"180",fill:"#facc15",fontSize:"8",fontWeight:"bold",children:"Custom JSONEncoder"}),e.jsx("path",{d:"M 255 120 L 285 120",stroke:"#38bdf8",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"295",y:"40",width:"240",height:"165",rx:"6",fill:"#3b0764",stroke:"#c084fc"}),e.jsx("text",{x:"305",y:"65",fill:"#f3e8ff",fontSize:"11",fontWeight:"bold",children:"2. Write to Temp File"}),e.jsx("text",{x:"305",y:"90",fill:"#d8b4fe",fontSize:"8",fontFamily:"monospace",children:"registry.json.tmp"}),e.jsx("text",{x:"305",y:"115",fill:"#e9d5ff",fontSize:"8",children:"Data written in full to disk"}),e.jsx("text",{x:"305",y:"130",fill:"#e9d5ff",fontSize:"8",children:"If crash occurs here, main"}),e.jsx("text",{x:"305",y:"145",fill:"#e9d5ff",fontSize:"8",children:"file is untouched & intact!"}),e.jsx("text",{x:"305",y:"180",fill:"#fb7185",fontSize:"8",fontWeight:"bold",children:"Crash Isolation Zone"}),e.jsx("path",{d:"M 545 120 L 575 120",stroke:"#38bdf8",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"585",y:"40",width:"210",height:"165",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"595",y:"65",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"3. Atomic os.replace()"}),e.jsx("text",{x:"595",y:"90",fill:"#ccfbf1",fontSize:"8",fontFamily:"monospace",children:"os.replace(tmp, live)"}),e.jsx("text",{x:"595",y:"115",fill:"#a7f3d0",fontSize:"8",children:"Instant OS inode swap"}),e.jsx("text",{x:"595",y:"130",fill:"#a7f3d0",fontSize:"8",children:"Zero partial-write window"}),e.jsx("text",{x:"595",y:"145",fill:"#a7f3d0",fontSize:"8",children:"100% crash resilient"}),e.jsx("text",{x:"595",y:"180",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"✅ Production Safe"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"THE REPOSITORY PATTERN: DECOUPLING BUSINESS LOGIC FROM SQL"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#1e1b4b",stroke:"#a855f7"}),e.jsx("rect",{x:"25",y:"40",width:"220",height:"165",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("text",{x:"35",y:"65",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"Admission Service"}),e.jsx("text",{x:"35",y:"90",fill:"#bae6fd",fontSize:"8",fontFamily:"monospace",children:"def calculate_waiver()"}),e.jsx("text",{x:"35",y:"105",fill:"#bae6fd",fontSize:"8",fontFamily:"monospace",children:"def enroll_student()"}),e.jsx("text",{x:"35",y:"135",fill:"#e0f2fe",fontSize:"8",children:"Knows pure business rules"}),e.jsx("text",{x:"35",y:"150",fill:"#e0f2fe",fontSize:"8",children:"Zero SQL knowledge"}),e.jsx("text",{x:"35",y:"180",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Pure Business Logic"}),e.jsx("path",{d:"M 255 120 L 285 120",stroke:"#a855f7",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"295",y:"40",width:"240",height:"165",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"305",y:"65",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"StudentRepository"}),e.jsx("text",{x:"305",y:"90",fill:"#ccfbf1",fontSize:"8",fontFamily:"monospace",children:"repo.add(student)"}),e.jsx("text",{x:"305",y:"105",fill:"#ccfbf1",fontSize:"8",fontFamily:"monospace",children:"repo.get(sid)"}),e.jsx("text",{x:"305",y:"120",fill:"#ccfbf1",fontSize:"8",fontFamily:"monospace",children:"repo.list_by_campus()"}),e.jsx("text",{x:"305",y:"150",fill:"#a7f3d0",fontSize:"8",children:"Encapsulates all SQL & queries"}),e.jsx("text",{x:"305",y:"180",fill:"#facc15",fontSize:"8",fontWeight:"bold",children:"Storage Abstraction Gate"}),e.jsx("path",{d:"M 545 120 L 575 120",stroke:"#a855f7",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"585",y:"40",width:"210",height:"165",rx:"6",fill:"#3b0764",stroke:"#c084fc"}),e.jsx("text",{x:"595",y:"65",fill:"#f3e8ff",fontSize:"11",fontWeight:"bold",children:"Physical Storage"}),e.jsx("text",{x:"595",y:"90",fill:"#d8b4fe",fontSize:"8",fontFamily:"monospace",children:"institutional_data.db"}),e.jsx("text",{x:"595",y:"110",fill:"#d8b4fe",fontSize:"8",fontFamily:"monospace",children:"(SQLite / PostgreSQL)"}),e.jsx("text",{x:"595",y:"140",fill:"#e9d5ff",fontSize:"8",children:"Can swap SQLite for"}),e.jsx("text",{x:"595",y:"155",fill:"#e9d5ff",fontSize:"8",children:"Postgres with 0 service edits!"}),e.jsx("text",{x:"595",y:"180",fill:"#c084fc",fontSize:"8",fontWeight:"bold",children:"Swappable Engine"})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧪"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Ledger & ACID Transaction Simulator"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Execute real-time ledger mutations for Mamata at Barrackpore campus, testing installment settlements, balance auditing, and automatic transaction rollback on errors:"}),e.jsxs("div",{className:"bg-slate-950 p-5 sm:p-6 rounded-xl border border-slate-800/90 space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3",children:"Select Database Mutation Action:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3",children:[{id:"ENROLL",label:"1. Enroll Student",tag:"Rs. 25,000 Tuition Charge"},{id:"PAY_PARTIAL",label:"2. Pay Installment 1",tag:"Rs. 15,000 NetBanking"},{id:"PAY_FULL",label:"3. Pay Installment 2",tag:"Rs. 10,000 Full Settlement"},{id:"CRASH_ROLLBACK",label:"4. Exception Rollback",tag:"Simulate Error & Rollback"}].map(t=>e.jsxs("button",{onClick:()=>f(t.id),className:d("p-3 rounded-xl border text-left transition-all",s===t.id?t.id==="CRASH_ROLLBACK"?"bg-rose-950/60 border-rose-500 shadow-md shadow-rose-950/50":"bg-teal-950/60 border-teal-500 shadow-md shadow-teal-950/50":"bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400"),children:[e.jsx("div",{className:"text-xs sm:text-sm font-bold text-slate-200",children:t.label}),e.jsx("div",{className:"text-[10px] text-teal-400 font-mono mt-0.5",children:t.tag})]},t.id))})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2",children:[e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-teal-900/50",children:[e.jsx("div",{className:"text-xs text-teal-400 font-medium mb-1",children:"Active Mutation"}),e.jsx("div",{className:"text-xs font-bold font-mono text-teal-300 mt-1 leading-snug",children:r})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-cyan-900/50",children:[e.jsx("div",{className:"text-xs text-cyan-400 font-medium mb-1",children:"Outstanding Balance"}),e.jsxs("div",{className:"text-2xl font-bold font-mono text-cyan-300 mt-1",children:["Rs. ",i.toLocaleString()]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-purple-900/50",children:[e.jsx("div",{className:"text-xs text-purple-400 font-medium mb-1",children:"ACID Transaction State"}),e.jsx("div",{className:"text-xs font-bold font-mono text-purple-300 mt-1 leading-snug",children:o})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"Executed SQLite Statements & Python Context Manager:"}),e.jsx("pre",{className:"p-4 bg-slate-900/90 border border-slate-800 rounded-xl text-xs sm:text-sm font-mono text-teal-200 overflow-x-auto leading-relaxed",children:h})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Production Code Labs & Persistence Engines"})]}),e.jsx("p",{className:"text-slate-300 mb-8 text-base leading-relaxed",children:"Inspect, run, and master all four production-grade persistence labs covering SQLite Foreign Keys DDL, crash-proof atomic JSON serialization, the Repository pattern, and the complete institutional ledger engine:"}),e.jsxs("div",{className:"space-y-10",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:"Lab 1: SQLite Schema DDL, Foreign Keys & Indexes"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Enforcing referential integrity with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"PRAGMA foreign_keys = ON"}),", indexing queries, and executing relational JOINs."]})]}),e.jsx(m,{fileModule:S,title:"sqlite_schema_migrations_and_ddl.py",highlightLines:[16,28,48,64]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-cyan-300",children:"Lab 2: Crash-Proof Atomic JSON Persistence & Custom Encoders"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Serializing datetimes and dataclasses with custom encoders and swapping temporary files with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"os.replace()"}),"."]})]}),e.jsx(m,{fileModule:E,title:"json_document_store_and_serializer.py",highlightLines:[22,34,40]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-purple-300",children:"Lab 3: Repository Pattern CRUD Abstraction"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Decoupling business logic from database tables with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"IStudentRepository"})," abstract interface."]})]}),e.jsx(m,{fileModule:N,title:"repository_pattern_crud_operations.py",highlightLines:[20,48,62,70]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-amber-300",children:"Lab 4: Complete Multi-Campus Institutional Ledger Engine"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Full persistence engine recording tuition charges, installment payments, and computing outstanding balances for Mamata and Mahima across Barrackpore and Kolkata."})]}),e.jsx(m,{fileModule:T,title:"institutional_ledger_persistence_engine.py",highlightLines:[36,56,70,92]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Persistence Pitfalls & Anti-Patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"1. String Formatting in SQL (SQL Injection)"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Using f-strings or ",e.jsx("code",{className:"text-rose-400 font-mono",children:"%"})," formatting in SQL queries creates critical security vulnerabilities allowing attackers to dump or delete databases."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:[`# VULNERABLE: f"SELECT * FROM users WHERE name='{name}'"`,`
`,'# SECURE: execute("SELECT * FROM users WHERE name=?", (name,))']})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"2. Forgetting PRAGMA foreign_keys = ON"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"SQLite disables foreign key enforcement by default for backwards compatibility; omitting this PRAGMA allows corrupted orphan child records."}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# BUG: conn = sqlite3.connect(...) (FKs disabled!)",`
`,'# FIX: conn.execute("PRAGMA foreign_keys = ON;")']})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"3. Direct JSON Overwrite Without Temp Files"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Opening an existing JSON file in ",e.jsx("code",{className:"text-rose-400 font-mono",children:'"w"'})," mode truncates the file immediately; a crash midway leaves a permanently corrupted 0-byte file."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:['# RISKY: with open("data.json", "w") as f: json.dump(d, f)',`
`,"# SAFE: Write data.tmp then os.replace(data.tmp, data.json)"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"4. Leaking Raw SQL Tuples to UI Layers"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Passing raw tuples like ",e.jsx("code",{className:"text-rose-400 font-mono",children:"row[3]"})," directly to frontend templates breaks if database columns are reordered."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# ANTI-PATTERN: return cursor.fetchall()  # [(1, 'Mamata')]",`
`,"# BEST PRACTICE: return [Student(*row) for row in rows]"]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Professional Persistence Checklist"})]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm sm:text-base",children:[e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Always Enable Foreign Keys:"})," Run ",e.jsx("code",{className:"text-teal-300 font-mono",children:"PRAGMA foreign_keys = ON;"})," immediately upon opening every SQLite connection."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Strict Parameterization:"})," Never format variables into SQL queries; always pass parameters via ",e.jsx("code",{className:"text-teal-300 font-mono",children:"?"})," tuples."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Atomic JSON Swapping:"})," Always write JSON files to temporary files first and swap atomically with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"os.replace()"}),"."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Encapsulate with Repositories:"})," Wrap SQL queries in dedicated Repository classes returning strongly typed domain dataclasses."]})]})]})]}),e.jsx("section",{ref:n,className:"section-hidden",children:e.jsx(b,{title:"SQLite & JSON Persistence FAQs",questions:j})}),e.jsx("section",{ref:n,className:"section-hidden",children:e.jsx(g,{content:_,title:"Topic 1: Integrating SQLite / JSON Persistence Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic1_note.txt"})}),e.jsx("section",{ref:n,className:"section-hidden",children:e.jsx(y,{note:"Data integrity is the non-negotiable foundation of all professional software. When tracking admissions and financial ledgers for Mamata, Mahima, Abhronila, Susmita, and Debangshu across Barrackpore, Kolkata, Ichapur, and Jadavpur, executing 'PRAGMA foreign_keys = ON', parameterizing every query with '?', and managing multi-step ledger mutations inside atomic 'with conn:' blocks ensures that our data remains mathematically sound, secure from injection, and completely crash-resilient."})})]})]})}export{v as default};
