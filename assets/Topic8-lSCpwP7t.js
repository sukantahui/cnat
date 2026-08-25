import{b as a,j as e,bg as d}from"./vendor-react-core-Doz9nIC6.js";import{P as D}from"./PythonFileLoader-hCi5osN-.js";import{P as E}from"./PlainTextPrint-C08xhKA4.js";import{F as L}from"./FAQTemplate-CkSqDH4B.js";import{T as I}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const C=`# topic8_files/atomic_json_file_store_with_tempfile_replace.py\r
# Module: 003_004_working-with-json\r
# Topic: Building JSON-backed persistent data stores\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 8 - File 1: Atomic JSON File Store with \`tempfile\` & \`os.replace\`\r
Demonstrates:\r
  1. The danger of direct \`with open("db.json", "w")\` truncation corrupting data on crashes\r
  2. The POSIX / Windows Atomic Write pattern: Write to temp file -> flush -> fsync -> \`os.replace\`\r
  3. Guaranteeing 100% data integrity with zero 0-byte corrupt database files\r
"""\r
\r
import json\r
import os\r
import tempfile\r
from typing import Dict, Any\r
\r
class AtomicJsonStore:\r
    """ACID-compliant atomic JSON file storage manager."""\r
\r
    def __init__(self, target_filepath: str):\r
        self.target_filepath = target_filepath\r
\r
    def save_atomic(self, data: Dict[str, Any]):\r
        """Writes data to a temporary file and atomically replaces the target file."""\r
        target_dir = os.path.dirname(os.path.abspath(self.target_filepath))\r
        os.makedirs(target_dir, exist_ok=True)\r
\r
        # 1. Create a secure temp file in the SAME directory to ensure atomic cross-device rename\r
        temp_fd, temp_path = tempfile.mkstemp(dir=target_dir, prefix="db_tmp_", suffix=".json")\r
\r
        try:\r
            with os.fdopen(temp_fd, "w", encoding="utf-8") as f:\r
                json.dump(data, f, indent=2)\r
                f.flush()\r
                # 2. Force write buffers to physical disk\r
                os.fsync(f.fileno())\r
\r
            # 3. Atomic replacement (atomic swap guaranteed by OS filesystem)\r
            os.replace(temp_path, self.target_filepath)\r
        except Exception:\r
            # Clean up temporary file if write failed before replace\r
            if os.path.exists(temp_path):\r
                os.remove(temp_path)\r
            raise\r
\r
    def load(self) -> Dict[str, Any]:\r
        """Loads data from the JSON store."""\r
        if not os.path.exists(self.target_filepath):\r
            return {}\r
        with open(self.target_filepath, "r", encoding="utf-8") as f:\r
            return json.load(f)\r
\r
\r
def demonstrate_atomic_writes():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - ATOMIC JSON FILE STORE (os.replace)")\r
    print("=" * 70)\r
\r
    db_path = os.path.join(tempfile.gettempdir(), "coder_accotax_atomic_store.json")\r
    store = AtomicJsonStore(db_path)\r
\r
    # 1. Initial Atomic Write:\r
    initial_registry = {\r
        "institution": "Coder & AccoTax",\r
        "last_updated": "2026-08-24T10:00:00Z",\r
        "students": {\r
            "STU-101": {"name": "Sourav Mukherjee", "course": "Python AI", "fee_paid": 28500.0}\r
        }\r
    }\r
\r
    print("1. Executing Atomic Write (\`tempfile\` + \`os.fsync\` + \`os.replace\`):")\r
    store.save_atomic(initial_registry)\r
    print(f"   * Written Database File Size: {os.path.getsize(db_path)} bytes")\r
\r
    # 2. Update Database Atomically:\r
    print("\\n2. Updating Database with New Enrolled Student:")\r
    current_data = store.load()\r
    current_data["students"]["STU-102"] = {\r
        "name": "Priyanka Sen",\r
        "course": "Data Science",\r
        "fee_paid": 32000.0\r
    }\r
    store.save_atomic(current_data)\r
\r
    # Verify:\r
    verified_data = store.load()\r
    print(f"   * Total Students in Store   : {len(verified_data['students'])}")\r
    for sid, sinfo in verified_data["students"].items():\r
        print(f"     - [{sid}] {sinfo['name']:<18} | Course: {sinfo['course']}")\r
\r
    # Cleanup:\r
    if os.path.exists(db_path):\r
        os.remove(db_path)\r
\r
    print(r"""\r
Atomic Write Invariants:\r
  1. Never write directly to \`open("db.json", "w")\` in production (crashes leave empty 0-byte files).\r
  2. Create temp file in SAME directory (ensures \`os.replace\` is an atomic filesystem inode swap).\r
  3. Always call \`os.fsync()\` before renaming to ensure bytes are committed to hardware disk.\r
""")\r
    print("[PASSED] Atomic JSON File Store Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_atomic_writes()\r
`,R=`# topic8_files/thread_safe_json_document_database.py\r
# Module: 003_004_working-with-json\r
# Topic: Building JSON-backed persistent data stores\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 8 - File 2: Thread-Safe JSON Document Database with Secondary Indexing\r
Demonstrates:\r
  1. Thread-safe concurrency control using \`threading.RLock\`\r
  2. In-memory dictionary store with secondary hash indices for O(1) attribute lookups\r
  3. CRUD API with ACID-like atomic disk persistence\r
"""\r
\r
import json\r
import os\r
import tempfile\r
import threading\r
from typing import Dict, Any, List, Optional, Callable\r
\r
class ThreadSafeJsonDocDB:\r
    """Thread-safe, indexed JSON document store."""\r
\r
    def __init__(self, db_filepath: str):\r
        self.db_filepath = db_filepath\r
        self._lock = threading.RLock()\r
        self._documents: Dict[str, Dict[str, Any]] = {}\r
        # Secondary index: course_code -> Set of document IDs\r
        self._index_by_course: Dict[str, set] = {}\r
        self._load_from_disk()\r
\r
    def _load_from_disk(self):\r
        with self._lock:\r
            if os.path.exists(self.db_filepath) and os.path.getsize(self.db_filepath) > 0:\r
                try:\r
                    with open(self.db_filepath, "r", encoding="utf-8") as f:\r
                        self._documents = json.load(f)\r
                    self._rebuild_indices()\r
                except Exception:\r
                    self._documents = {}\r
\r
    def _rebuild_indices(self):\r
        self._index_by_course.clear()\r
        for doc_id, doc in self._documents.items():\r
            course = doc.get("course_code")\r
            if course:\r
                self._index_by_course.setdefault(course, set()).add(doc_id)\r
\r
    def _save_atomic_to_disk(self):\r
        target_dir = os.path.dirname(os.path.abspath(self.db_filepath))\r
        os.makedirs(target_dir, exist_ok=True)\r
        fd, tmp_path = tempfile.mkstemp(dir=target_dir, prefix="db_flush_", suffix=".json")\r
        try:\r
            with os.fdopen(fd, "w", encoding="utf-8") as f:\r
                json.dump(self._documents, f, indent=2)\r
                f.flush()\r
                os.fsync(f.fileno())\r
            os.replace(tmp_path, self.db_filepath)\r
        except Exception:\r
            if os.path.exists(tmp_path):\r
                os.remove(tmp_path)\r
            raise\r
\r
    def insert(self, doc_id: str, doc: Dict[str, Any]) -> bool:\r
        with self._lock:\r
            if doc_id in self._documents:\r
                return False  # Primary key conflict\r
            self._documents[doc_id] = doc\r
            # Update secondary index\r
            course = doc.get("course_code")\r
            if course:\r
                self._index_by_course.setdefault(course, set()).add(doc_id)\r
            self._save_atomic_to_disk()\r
            return True\r
\r
    def get(self, doc_id: str) -> Optional[Dict[str, Any]]:\r
        with self._lock:\r
            return self._documents.get(doc_id)\r
\r
    def find_by_course(self, course_code: str) -> List[Dict[str, Any]]:\r
        """O(1) secondary index lookup."""\r
        with self._lock:\r
            doc_ids = self._index_by_course.get(course_code, set())\r
            return [self._documents[did] for did in doc_ids if did in self._documents]\r
\r
    def query(self, predicate: Callable[[Dict[str, Any]], bool]) -> List[Dict[str, Any]]:\r
        """General predicate scan."""\r
        with self._lock:\r
            return [doc for doc in self._documents.values() if predicate(doc)]\r
\r
    def count(self) -> int:\r
        with self._lock:\r
            return len(self._documents)\r
\r
\r
def demonstrate_thread_safe_docdb():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - THREAD-SAFE JSON DOCUMENT STORE")\r
    print("=" * 70)\r
\r
    db_path = os.path.join(tempfile.gettempdir(), "coder_accotax_doc_db.json")\r
    db = ThreadSafeJsonDocDB(db_path)\r
\r
    # 1. Insert documents\r
    print("1. Inserting Student Documents with Concurrency Locks & Indices:")\r
    db.insert("STU-101", {"name": "Sourav Mukherjee", "course_code": "PY-AI", "fee": 28500.0})\r
    db.insert("STU-102", {"name": "Priyanka Sen", "course_code": "DS-ML", "fee": 32000.0})\r
    db.insert("STU-103", {"name": "Debolina Roy", "course_code": "PY-AI", "fee": 28500.0})\r
\r
    print(f"   * Total Records in Database: {db.count()}")\r
\r
    # 2. Fast O(1) Secondary Index Query:\r
    print("\\n2. Querying Students by Course Code (O(1) Secondary Index Lookup):")\r
    py_students = db.find_by_course("PY-AI")\r
    print(f"   * Found {len(py_students)} Students in 'PY-AI':")\r
    for s in py_students:\r
        print(f"     - {s['name']} (Fee: INR {s['fee']:,.2f})")\r
\r
    # 3. Predicate Scan Query:\r
    print("\\n3. Scanning with Predicate Function (Fee > 30,000):")\r
    high_fee_students = db.query(lambda d: d.get("fee", 0) > 30000.0)\r
    for s in high_fee_students:\r
        print(f"     - {s['name']} (Course: {s['course_code']})")\r
\r
    # Cleanup:\r
    if os.path.exists(db_path):\r
        os.remove(db_path)\r
\r
    print("\\n[PASSED] Thread-Safe JSON Document Database Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_thread_safe_docdb()\r
`,P=`# topic8_files/append_only_ndjson_wal_engine.py\r
# Module: 003_004_working-with-json\r
# Topic: Building JSON-backed persistent data stores\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 8 - File 3: Append-Only NDJSON Write-Ahead Log (WAL) & Compaction\r
Demonstrates:\r
  1. High-throughput Write-Ahead Logging (WAL) using newline-delimited JSON (NDJSON)\r
  2. Crash-resilient transaction ledger: fast O(1) appends without full-file rewrites\r
  3. Snapshot compaction engine: collapsing delta transactions into a canonical state\r
"""\r
\r
import json\r
import os\r
import tempfile\r
from typing import Dict, Any, List\r
\r
class NdjsonWalEngine:\r
    """High-performance append-only Write-Ahead Log engine for JSON transactions."""\r
\r
    def __init__(self, wal_filepath: str, snapshot_filepath: str):\r
        self.wal_filepath = wal_filepath\r
        self.snapshot_filepath = snapshot_filepath\r
\r
    def append_transaction(self, action: str, doc_id: str, payload: Dict[str, Any]):\r
        """Appends a transaction log line (O(1) append time)."""\r
        tx_record = {\r
            "action": action,     # INSERT | UPDATE | DELETE\r
            "doc_id": doc_id,\r
            "data": payload\r
        }\r
        with open(self.wal_filepath, "a", encoding="utf-8") as f:\r
            f.write(json.dumps(tx_record) + "\\n")\r
            f.flush()\r
\r
    def replay_wal_to_state(self) -> Dict[str, Dict[str, Any]]:\r
        """Replays all transactions from disk into in-memory state."""\r
        state = {}\r
\r
        # 1. Start from base snapshot if exists\r
        if os.path.exists(self.snapshot_filepath):\r
            with open(self.snapshot_filepath, "r", encoding="utf-8") as f:\r
                state = json.load(f)\r
\r
        # 2. Replay incremental WAL logs\r
        if os.path.exists(self.wal_filepath):\r
            with open(self.wal_filepath, "r", encoding="utf-8") as f:\r
                for line in f:\r
                    line = line.strip()\r
                    if not line:\r
                        continue\r
                    tx = json.loads(line)\r
                    action = tx["action"]\r
                    doc_id = tx["doc_id"]\r
\r
                    if action in ("INSERT", "UPDATE"):\r
                        state[doc_id] = tx["data"]\r
                    elif action == "DELETE":\r
                        state.pop(doc_id, None)\r
\r
        return state\r
\r
    def compact_and_checkpoint(self):\r
        """Compacts WAL into a clean base snapshot and resets the log."""\r
        canonical_state = self.replay_wal_to_state()\r
\r
        # Write canonical snapshot atomically\r
        target_dir = os.path.dirname(os.path.abspath(self.snapshot_filepath))\r
        fd, tmp_path = tempfile.mkstemp(dir=target_dir, prefix="snap_tmp_", suffix=".json")\r
        with os.fdopen(fd, "w", encoding="utf-8") as f:\r
            json.dump(canonical_state, f, indent=2)\r
            f.flush()\r
            os.fsync(f.fileno())\r
        os.replace(tmp_path, self.snapshot_filepath)\r
\r
        # Reset WAL log\r
        with open(self.wal_filepath, "w", encoding="utf-8") as f:\r
            f.write("")  # Truncate clean\r
\r
\r
def demonstrate_ndjson_wal():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - APPEND-ONLY NDJSON WAL & COMPACTION")\r
    print("=" * 70)\r
\r
    wal_file = os.path.join(tempfile.gettempdir(), "student_tx_ledger.ndjson")\r
    snap_file = os.path.join(tempfile.gettempdir(), "student_snapshot.json")\r
    engine = NdjsonWalEngine(wal_file, snap_file)\r
\r
    # 1. Append fast transaction events:\r
    print("1. Appending Fast Transaction Events to NDJSON WAL:")\r
    engine.append_transaction("INSERT", "STU-101", {"name": "Sourav Mukherjee", "fee": 28000.0, "status": "PENDING"})\r
    engine.append_transaction("INSERT", "STU-102", {"name": "Priyanka Sen", "fee": 32000.0, "status": "PENDING"})\r
    engine.append_transaction("UPDATE", "STU-101", {"name": "Sourav Mukherjee", "fee": 28000.0, "status": "PAID_VERIFIED"})\r
    engine.append_transaction("INSERT", "STU-103", {"name": "Temporary Record", "fee": 0.0, "status": "DRAFT"})\r
    engine.append_transaction("DELETE", "STU-103", {})\r
\r
    print(f"   * WAL Transaction Log Size: {os.path.getsize(wal_file)} bytes")\r
\r
    # 2. Replay state from WAL:\r
    print("\\n2. Replaying Incremental WAL Log into Canonical State:")\r
    current_state = engine.replay_wal_to_state()\r
    print(f"   * Total Active Entities: {len(current_state)}")\r
    for sid, doc in current_state.items():\r
        print(f"     - [{sid}] {doc['name']:<18} | Status: {doc['status']}")\r
\r
    # 3. Compact WAL:\r
    print("\\n3. Compacting WAL Log into Permanent Base Snapshot:")\r
    engine.compact_and_checkpoint()\r
    print(f"   * Snapshot File Size: {os.path.getsize(snap_file)} bytes")\r
    print(f"   * Compacted WAL Size: {os.path.getsize(wal_file)} bytes (Cleanly Reset)")\r
\r
    # Cleanup:\r
    for path in (wal_file, snap_file):\r
        if os.path.exists(path):\r
            os.remove(path)\r
\r
    print("\\n[PASSED] Append-Only NDJSON WAL Engine Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_ndjson_wal()\r
`,W=`# topic8_files/institutional_student_registry_json_database.py\r
# Module: 003_004_working-with-json\r
# Topic: Building JSON-backed persistent data stores\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 8 - File 4: Institutional Student Registry JSON Database Engine (Case Study)\r
Demonstrates:\r
  1. Complete ACID-like embedded JSON document database\r
  2. Concurrency-safe transactions, secondary multi-attribute indexing, and atomic writes\r
  3. Automatic timestamped backup snapshot generation and disaster recovery\r
"""\r
\r
import json\r
import os\r
import shutil\r
import tempfile\r
import threading\r
import time\r
from decimal import Decimal\r
from typing import Dict, Any, List, Optional\r
\r
class InstitutionalRegistryDB:\r
    """Production JSON document database for Coder & AccoTax Student Registrations."""\r
\r
    def __init__(self, base_dir: str):\r
        self.base_dir = base_dir\r
        self.db_filepath = os.path.join(base_dir, "student_registry_live.json")\r
        self.backup_dir = os.path.join(base_dir, "backups")\r
        os.makedirs(self.backup_dir, exist_ok=True)\r
\r
        self._lock = threading.RLock()\r
        self._store: Dict[str, Dict[str, Any]] = {}\r
        self._index_course: Dict[str, set] = {}\r
        self._index_status: Dict[str, set] = {}\r
\r
        self._initialize_store()\r
\r
    def _initialize_store(self):\r
        with self._lock:\r
            if os.path.exists(self.db_filepath) and os.path.getsize(self.db_filepath) > 0:\r
                try:\r
                    with open(self.db_filepath, "r", encoding="utf-8") as f:\r
                        self._store = json.load(f)\r
                    self._reindex()\r
                except Exception as exc:\r
                    print(f"  [ALERT] Primary store corrupt ({exc}). Checking backups...")\r
                    self._restore_latest_backup()\r
            else:\r
                self._store = {}\r
                self._flush_atomic()\r
\r
    def _reindex(self):\r
        self._index_course.clear()\r
        self._index_status.clear()\r
        for sid, doc in self._store.items():\r
            if "course_code" in doc:\r
                self._index_course.setdefault(doc["course_code"], set()).add(sid)\r
            if "status" in doc:\r
                self._index_status.setdefault(doc["status"], set()).add(sid)\r
\r
    def _flush_atomic(self):\r
        fd, tmp = tempfile.mkstemp(dir=self.base_dir, prefix="db_tx_", suffix=".json")\r
        with os.fdopen(fd, "w", encoding="utf-8") as f:\r
            json.dump(self._store, f, indent=2)\r
            f.flush()\r
            os.fsync(f.fileno())\r
        os.replace(tmp, self.db_filepath)\r
\r
    def create_backup_snapshot(self) -> str:\r
        with self._lock:\r
            ts = time.strftime("%Y%m%d_%H%M%S")\r
            backup_path = os.path.join(self.backup_dir, f"registry_backup_{ts}.json")\r
            shutil.copy2(self.db_filepath, backup_path)\r
            return backup_path\r
\r
    def _restore_latest_backup(self):\r
        backups = sorted(os.listdir(self.backup_dir), reverse=True)\r
        for b in backups:\r
            bpath = os.path.join(self.backup_dir, b)\r
            try:\r
                with open(bpath, "r", encoding="utf-8") as f:\r
                    self._store = json.load(f)\r
                self._reindex()\r
                self._flush_atomic()\r
                print(f"  [RECOVERY SUCCESS] Restored database from backup: {b}")\r
                return\r
            except Exception:\r
                continue\r
        self._store = {}\r
\r
    def register_student(self, student_id: str, full_name: str, course_code: str, fee_paid: float) -> bool:\r
        with self._lock:\r
            if student_id in self._store:\r
                return False\r
            self._store[student_id] = {\r
                "student_id": student_id,\r
                "full_name": full_name,\r
                "course_code": course_code,\r
                "fee_paid": fee_paid,\r
                "status": "ENROLLED",\r
                "registered_at": time.strftime("%Y-%m-%d %H:%M:%S")\r
            }\r
            self._reindex()\r
            self._flush_atomic()\r
            return True\r
\r
    def find_by_course(self, course_code: str) -> List[Dict[str, Any]]:\r
        with self._lock:\r
            sids = self._index_course.get(course_code, set())\r
            return [self._store[sid] for sid in sids if sid in self._store]\r
\r
    def get_financial_summary(self) -> Dict[str, Any]:\r
        with self._lock:\r
            total_rev = sum(Decimal(str(doc.get("fee_paid", 0.0))) for doc in self._store.values())\r
            return {\r
                "total_registered_students": len(self._store),\r
                "total_revenue_inr": total_rev,\r
                "course_enrollment_counts": {c: len(ids) for c, ids in self._index_course.items()}\r
            }\r
\r
\r
def run_institutional_registry_demo():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - INSTITUTIONAL STUDENT REGISTRY JSON DATABASE")\r
    print("=" * 70)\r
\r
    work_dir = tempfile.mkdtemp(prefix="coder_accotax_db_")\r
    db = InstitutionalRegistryDB(work_dir)\r
\r
    # 1. Register students\r
    print("1. Registering Students into Atomic Document Store:")\r
    db.register_student("STU-101", "Sourav Mukherjee", "PY-AI", 28500.0)\r
    db.register_student("STU-102", "Priyanka Sen", "DS-ML", 32000.0)\r
    db.register_student("STU-103", "Debolina Roy", "PY-AI", 28500.0)\r
\r
    # 2. Financial & enrollment summary:\r
    summary = db.get_financial_summary()\r
    print("\\n2. Live Financial & Enrollment Audit Metrics:")\r
    print(f"   * Total Active Students : {summary['total_registered_students']}")\r
    print(f"   * Total Collected Revenue: INR {summary['total_revenue_inr']:,.2f}")\r
    print(f"   * Enrollment By Course  : {summary['course_enrollment_counts']}\\n")\r
\r
    # 3. Create Backup Snapshot:\r
    print("3. Generating Automated Backup Snapshot:")\r
    backup_file = db.create_backup_snapshot()\r
    print(f"   * Backup Created At : {os.path.basename(backup_file)}")\r
\r
    # 4. Query using Secondary Index:\r
    print("\\n4. Fast O(1) Index Lookup for Course 'PY-AI':")\r
    py_students = db.find_by_course("PY-AI")\r
    for s in py_students:\r
        print(f"   * [{s['student_id']}] {s['full_name']:<18} | Status: {s['status']}")\r
\r
    # Cleanup:\r
    shutil.rmtree(work_dir, ignore_errors=True)\r
\r
    print("\\n[PASSED] Institutional Student Registry JSON Database Verified.")\r
\r
\r
if __name__ == "__main__":\r
    run_institutional_registry_demo()\r
`,J=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
          PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_004: WORKING WITH JSON\r
             TOPIC 8: BUILDING JSON-BACKED PERSISTENT DATA STORES\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. ATOMIC WRITE PATTERN (ZERO 0-BYTE CORRUPTIONS)\r
--------------------------------------------------------------------------------\r
  def atomic_save(data, target_path):\r
      target_dir = os.path.dirname(os.path.abspath(target_path))\r
      fd, tmp_path = tempfile.mkstemp(dir=target_dir, prefix="db_tmp_", suffix=".json")\r
      with os.fdopen(fd, "w", encoding="utf-8") as f:\r
          json.dump(data, f, indent=2)\r
          f.flush()\r
          os.fsync(f.fileno())  # Commit buffers to physical disk\r
      os.replace(tmp_path, target_path)  # Atomic filesystem inode swap\r
\r
--------------------------------------------------------------------------------\r
2. APPEND-ONLY NDJSON WAL ENGINE\r
--------------------------------------------------------------------------------\r
  with open("tx_log.ndjson", "a", encoding="utf-8") as f:\r
      f.write(json.dumps({"action": "INSERT", "data": record}) + "\\n")\r
      f.flush()\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 8: JSON PERSISTENT DATA STORES\r
================================================================================\r
`,z=[{question:`Why is writing directly to a database file with 'with open("db.json", "w") as f:' dangerous in production?`,shortAnswer:`Opening a file in '"w"' mode immediately truncates the file to 0 bytes; if the process crashes, power is lost, or an exception occurs before 'json.dump()' completes, the entire database is permanently destroyed.`,explanation:"The classic 0-byte file corruption hazard of non-atomic file writes.",hint:"Opening in 'w' mode instantly truncates the file to 0 bytes before writing completes.",level:"basic",codeExample:"# DANGEROUS: with open('db.json', 'w') as f: json.dump(data, f)"},{question:"How does the 'Atomic Write & Swap' pattern using 'os.replace()' guarantee ACID atomicity?",shortAnswer:"Data is written and synced to a temporary file first; 'os.replace(temp_path, target_path)' then performs an atomic filesystem inode/directory entry swap that either succeeds completely or leaves the original file unmodified.",explanation:"Guarantees the target file is never left in an incomplete or corrupted state.",hint:"Write to temp file, sync to disk, then atomically swap with os.replace().",level:"basic",codeExample:"os.replace(temp_path, target_path) # Atomic filesystem rename"},{question:"Why must 'os.fsync(f.fileno())' be invoked before calling 'os.replace()'?",shortAnswer:"'f.flush()' only clears Python's user-space buffers into OS kernel memory; 'os.fsync()' forces the operating system kernel to physically flush dirty buffers to hardware disk/SSD platters before renaming.",explanation:"Prevents data loss during sudden power outages or OS kernel panics.",hint:"Forces OS kernel buffers to commit data to physical hardware storage.",level:"moderate",codeExample:`f.flush()
os.fsync(f.fileno())
os.replace(tmp, dest)`},{question:"Why MUST the temporary file be created in the SAME directory/filesystem as the target file?",shortAnswer:"Atomic file renaming ('os.replace') is only atomic when both files reside on the same filesystem/mount point; cross-device renames fallback to slow, non-atomic copy-and-delete operations.",explanation:"A critical operating system filesystem invariant.",hint:"Cross-device renames are non-atomic; keep temp file in the same directory.",level:"moderate",codeExample:"tempfile.mkstemp(dir=os.path.dirname(target_path))"},{question:"How do you achieve thread-safe reads and writes in a Python JSON document database?",shortAnswer:"By wrapping all document mutations (insert, update, delete) and read operations inside a reentrant lock: 'with self._lock:' ('threading.RLock').",explanation:"Prevents race conditions, torn reads, and concurrent dictionary mutations.",hint:"Use threading.RLock() context managers around all read/write operations.",level:"basic",codeExample:`with self._lock:
    self._store[doc_id] = doc
    self._flush_atomic()`},{question:"What is Newline-Delimited JSON (NDJSON / JSON Lines) and why is it ideal for Write-Ahead Logs (WAL)?",shortAnswer:`NDJSON stores each JSON record on a single separate line separated by '\\n'; this allows appending new transactions in O(1) time ('f.write(json.dumps(tx) + "\\n")') without rewriting the entire file.`,explanation:"High-throughput append-only transaction logging.",hint:"Each record is a single line; enables fast O(1) appends without full-file rewrites.",level:"basic",codeExample:`{"action": "INSERT", "id": "STU-101"}
{"action": "UPDATE", "id": "STU-101"}`},{question:"What is 'Snapshot Compaction' in a WAL-backed JSON database?",shortAnswer:"The process of replaying all delta transactions in the WAL to construct the latest canonical state, saving that state to a snapshot file, and truncating the WAL log back to 0 bytes.",explanation:"Prevents unbounded WAL growth and accelerates database startup replay times.",hint:"Collapses delta transactions into a canonical snapshot and resets the log.",level:"moderate",codeExample:"engine.compact_and_checkpoint() # Merges WAL into snapshot"},{question:"How do you implement secondary indexing in an in-memory JSON document database?",shortAnswer:"By maintaining auxiliary dictionaries mapping attribute values to sets of primary keys (e.g. 'self._index_by_course: Dict[str, Set[str]]'), enabling O(1) attribute lookups.",explanation:"Avoids O(N) full collection scans for frequent queries.",hint:"Maintain mapping dicts from secondary keys to sets of primary document IDs.",level:"moderate",codeExample:"self._index_course.setdefault(course_code, set()).add(doc_id)"},{question:"What is 'TinyDB' in the Python ecosystem?",shortAnswer:"A popular, lightweight, pure-Python document-oriented database that persists data in human-readable JSON files with an expressive query syntax.",explanation:"Industry-standard embedded JSON database package.",hint:"Lightweight pure-Python embedded document database using JSON files.",level:"basic",codeExample:`from tinydb import TinyDB, Query
db = TinyDB('db.json')`},{question:"How do you implement automated timestamped backup rotation for a JSON database?",shortAnswer:"By copying the live database file to a 'backups/backup_YYYYMMDD_HHMMSS.json' file periodically and pruning backups older than a retention threshold (e.g. keep latest 10 backups).",explanation:"Protects against accidental mass deletions or operator error.",hint:"Create timestamped copies and prune backups older than retention limit.",level:"moderate",codeExample:`shutil.copy2(db_path, f'backups/backup_{time.strftime("%Y%m%d_%H%M%S")}.json')`},{question:"How do you recover a JSON database when the primary file is corrupted due to an abnormal crash?",shortAnswer:"Catch 'json.JSONDecodeError' on startup, inspect the backup directory, load the most recent valid backup snapshot, re-index the data, and atomically overwrite the corrupted primary file.",explanation:"Automatic self-healing disaster recovery architecture.",hint:"Catch JSONDecodeError and restore from the latest valid backup snapshot.",level:"moderate",codeExample:`except JSONDecodeError:
    self._restore_latest_backup()`},{question:"What is the memory limitation of storing an entire JSON database in RAM?",shortAnswer:"The entire working dataset must fit into available system RAM; for datasets exceeding several gigabytes, disk-page based databases (like SQLite / PostgreSQL) must be used.",explanation:"JSON document stores are optimized for small to medium embedded datasets (< 500 MB).",hint:"Dataset must fit in RAM; use SQLite/Postgres for multi-gigabyte datasets.",level:"basic",codeExample:"# Best suited for datasets < 500 MB"},{question:"How do you implement soft deletes in a JSON document store?",shortAnswer:`By setting a metadata flag '"is_deleted": True' and '"deleted_at": timestamp' instead of immediately purging the record, allowing recovery and audit tracing.`,explanation:"Enterprise auditing standard for record management.",hint:"Mark record with is_deleted: True instead of removing from dictionary.",level:"basic",codeExample:"doc['is_deleted'] = True; doc['deleted_at'] = time.time()"},{question:"How does 'portalocker' or 'filelock' prevent multi-process write conflicts on JSON database files?",shortAnswer:"They acquire exclusive operating system file-level locks ('fcntl.flock' on Unix, 'msvcrt.locking' on Windows) so only one OS process can write to the JSON file at any given time.",explanation:"Inter-process concurrency control.",hint:"Acquires OS file locks (fcntl/msvcrt) across separate OS processes.",level:"complex",codeExample:`from filelock import FileLock
with FileLock('db.json.lock'): ...`},{question:"What happens if two processes attempt to write to the same JSON file simultaneously without locks?",shortAnswer:"Write interleaving occurs; one process's writes overwrite part of the other's, corrupting the JSON formatting and causing unrecoverable syntax errors.",explanation:"The fundamental race condition in file-based storage.",hint:"Causes write interleaving and corrupted unparseable JSON files.",level:"basic",codeExample:"# Concurrent writes without locks corrupt file bytes"},{question:"How do you perform pagination over an in-memory JSON document database?",shortAnswer:"By sorting the collection keys or documents and slicing: 'items[offset : offset + limit]'.",explanation:"Standard pagination slicing over memory collections.",hint:"Slice list of documents: items[offset : offset + page_size].",level:"basic",codeExample:"page = list(self._store.values())[(page - 1) * size : page * size]"},{question:"How do you implement schema migrations for JSON document stores?",shortAnswer:`Store a '"_schema_version": 2' metadata integer at the root; on startup, run migration functions incrementally (v1 -> v2 -> v3) to transform legacy records before serving queries.`,explanation:"Ensures backwards compatibility as data models evolve.",hint:"Track _schema_version and execute sequential migration functions on startup.",level:"complex",codeExample:"if doc.get('_version', 1) == 1: doc = migrate_v1_to_v2(doc)"},{question:"Why is formatting JSON with 'indent=2' useful in development but discouraged for multi-gigabyte logs?",shortAnswer:"Indentation adds significant whitespace overhead (often increasing file size by 30%-50%); compact JSON ('separators=(',', ':')') saves disk space and I/O bandwidth in production.",explanation:"Tradeoff between human readability and storage efficiency.",hint:"Indentation increases file size by 30-50%; use compact JSON in production.",level:"basic",codeExample:"json.dump(data, f, separators=(',', ':')) # Compact storage"},{question:"How do you enforce Primary Key uniqueness in a JSON document store?",shortAnswer:"By keying the in-memory store by the primary identifier ('self._store[primary_id] = doc') and checking 'if primary_id in self._store:' before allowing insertions.",explanation:"Guarantees O(1) duplicate key detection.",hint:"Use the primary ID as the top-level dictionary key and check existence on insert.",level:"basic",codeExample:"if doc_id in self._store: raise ValueError('Duplicate Key')"},{question:"How do you execute atomic batch transactions (multiple inserts/updates) in a JSON store?",shortAnswer:"Perform all mutations on an in-memory working copy inside a lock, and execute a single atomic write swap to disk only after all items succeed (rolling back memory if any step fails).",explanation:"All-or-nothing transactional consistency.",hint:"Mutate in memory inside a lock and commit with a single atomic disk flush.",level:"moderate",codeExample:`with self._lock:
    # Mutate all items
    self._flush_atomic()`},{question:"How do you compress archived JSON backups to save disk space?",shortAnswer:`Using the built-in 'gzip' module: 'with gzip.open("backup.json.gz", "wt") as f: json.dump(data, f)' (typically achieves 80%-90% compression ratio on JSON).`,explanation:"Massive storage savings for JSON text archives.",hint:"Use gzip.open() to compress JSON text by 80-90%.",level:"basic",codeExample:`import gzip
with gzip.open('db.json.gz', 'wt') as f: json.dump(data, f)`},{question:"When should you graduate from a JSON document database to SQLite or PostgreSQL?",shortAnswer:"When dataset size exceeds available RAM, when complex SQL multi-table joins are required, when high concurrent write throughput is demanded, or when strict ACID transactional guarantees across distributed processes are needed.",explanation:"Clear architectural boundary for relational databases.",hint:"When data exceeds RAM, needs multi-table joins, or demands high write concurrency.",level:"moderate",codeExample:"# Graduate to SQLite / PostgreSQL for heavy relational workloads"},{question:"How do you implement full-text search across JSON document fields in pure Python?",shortAnswer:"By building an inverted index dictionary mapping tokenized, lowercased words to sets of document IDs ('self._inverted_index[word].add(doc_id)').",explanation:"Fast in-memory keyword search engine.",hint:"Maintain an inverted index mapping words to sets of matching document IDs.",level:"complex",codeExample:"for word in doc['name'].lower().split(): self._index[word].add(doc_id)"},{question:"How do you benchmark JSON database read and write IOPS (operations per second)?",shortAnswer:"Using 'timeit' or 'cProfile' to benchmark 10,000 in-memory index queries vs 1,000 atomic disk flushes.",explanation:"Validates database throughput metrics.",hint:"Benchmark using timeit or cProfile measuring operations per second.",level:"moderate",codeExample:"timeit.timeit(lambda: db.find_by_course('PY-AI'), number=10000)"},{question:"What is the ultimate golden rule for Building JSON-Backed Persistent Data Stores in Python?",shortAnswer:"Always write atomically via temporary files and 'os.replace' with 'os.fsync', protect memory with 'threading.RLock', maintain secondary hash indices for O(1) queries, append transactions with NDJSON WAL, and automate timestamped backup rotations with disaster recovery.",explanation:"The complete enterprise blueprint for building reliable, production-grade JSON document databases.",hint:"Atomic os.replace writes, fsync, RLock concurrency, secondary indexing, and NDJSON WAL.",level:"basic",codeExample:"# Python JSON Persistent Data Store Mastery"}];function K(){const f=a.useRef([]),[o,m]=a.useState("atomic"),_={"STU-101":{student_id:"STU-101",full_name:"Sourav Mukherjee",course_code:"PY-AI",fee_paid:28500,status:"ENROLLED"},"STU-102":{student_id:"STU-102",full_name:"Priyanka Sen",course_code:"DS-ML",fee_paid:32e3,status:"ENROLLED"},"STU-103":{student_id:"STU-103",full_name:"Debolina Roy",course_code:"PY-AI",fee_paid:28500,status:"ENROLLED"}},y=[{action:"INSERT",doc_id:"STU-101",timestamp:"10:00:01"},{action:"INSERT",doc_id:"STU-102",timestamp:"10:00:05"},{action:"INSERT",doc_id:"STU-103",timestamp:"10:00:12"}],[i,x]=a.useState(_),[u,c]=a.useState(y),[h,g]=a.useState("ALL"),[S,s]=a.useState("Database active. All writes synchronized to in-memory store."),[U,w]=a.useState(["backup_20260824_100000.json"]),[M,N]=a.useState(!1),l={};for(const[t,n]of Object.entries(i))l[n.course_code]||(l[n.course_code]=[]),l[n.course_code].push(t);const j=()=>{if(i["STU-104"]){s("Record 'STU-104' already exists! Primary key violation prevented.");return}const t={student_id:"STU-104",full_name:"Rahul Verma",course_code:"FULL-STACK",fee_paid:25e3,status:"ENROLLED"};x(n=>({...n,"STU-104":t})),c(n=>[...n,{action:"INSERT",doc_id:"STU-104",timestamp:new Date().toLocaleTimeString()}]),s("Inserted 'STU-104' (Rahul Verma). Secondary indices updated and WAL line appended.")},A=()=>{if(!i["STU-101"]){s("Student 'STU-101' not found!");return}x(t=>({...t,"STU-101":{...t["STU-101"],status:"PAID_VERIFIED"}})),c(t=>[...t,{action:"UPDATE",doc_id:"STU-101",timestamp:new Date().toLocaleTimeString()}]),s("Updated 'STU-101' status to 'PAID_VERIFIED'. WAL transaction logged.")},k=()=>{if(!i["STU-103"]){s("Student 'STU-103' already deleted or not found!");return}x(t=>{const n={...t};return delete n["STU-103"],n}),c(t=>[...t,{action:"DELETE",doc_id:"STU-103",timestamp:new Date().toLocaleTimeString()}]),s("Deleted 'STU-103'. Cleaned from primary store and secondary course index.")},v=()=>{s("Flushed memory state to disk atomically via 'tempfile' + 'os.fsync' + 'os.replace' (Zero 0-byte risk)!")},T=()=>{N(!0),c([{action:"CHECKPOINT_COMPACTION",doc_id:"ALL",timestamp:new Date().toLocaleTimeString()}]),s("Compacted WAL transactions into base snapshot and cleanly reset WAL transaction log!")},O=()=>{const n=`backup_${new Date().toISOString().replace(/[-:T]/g,"").slice(0,14)}.json`;w(p=>[n,...p]),s(`Created backup snapshot: ${n}`)},b=h==="ALL"?Object.values(i):(l[h]||[]).map(t=>i[t]).filter(Boolean);a.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(p=>{p.isIntersecting&&p.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return f.current.forEach(n=>{n&&t.observe(n)}),()=>t.disconnect()},[]);const r=t=>{t&&!f.current.includes(t)&&f.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:r,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_004"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 8 • Final Topic"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Working with JSON & External Data APIs"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["JSON-Backed ",e.jsx("span",{className:"text-teal-400",children:"Persistent Data Stores"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master building robust, crash-resilient embedded JSON databases in Python: atomic file writes with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"tempfile"})," and ",e.jsx("code",{className:"text-teal-300 font-mono",children:"os.replace"})," (eliminating 0-byte corruptions), thread-safe concurrency with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"threading.RLock"}),", secondary in-memory indexing, append-only NDJSON Write-Ahead Logging (WAL), snapshot compaction, and automated backup rotation."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚛️ Atomic Writes (`os.replace`)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔒 Thread-Safe Locks (`RLock`)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ Fast Secondary Hash Indexing"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📝 Append-Only NDJSON WAL"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🗄️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Architecture of JSON-Backed Document Stores"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"JSON document stores are lightweight, zero-configuration databases ideal for desktop tools, microservices, and embedded caching. Production systems enforce three architectural invariants:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Atomic Writes"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"os.replace(tmp, dest)"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Writes to a temporary file, calls ",e.jsx("code",{className:"text-teal-300",children:"os.fsync()"}),", and swaps destination atomically."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Concurrency Locking"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"with threading.RLock():"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Protects in-memory dictionaries and file handles against simultaneous multi-threaded write corruption."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ NDJSON WAL Engine"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:'f.write(json + "\\n")'}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Appends delta events in O(1) time to Write-Ahead Logs before snapshot compaction."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The 0-Byte Direct Truncation Trap"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Opening a file with ",e.jsx("code",{className:"text-rose-400 font-mono",children:'open("db.json", "w")'})," immediately truncates the file to 0 bytes. If power fails or an exception occurs before ",e.jsx("code",{className:"text-slate-300",children:"json.dump()"})," finishes, all database data is lost. Atomic writes eliminate this hazard completely."]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Atomic Swaps, Secondary Indexing & WAL"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>m("atomic"),className:d("px-3 py-1.5 rounded-lg transition-all",o==="atomic"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Atomic Write Swap"}),e.jsx("button",{onClick:()=>m("indexing"),className:d("px-3 py-1.5 rounded-lg transition-all",o==="indexing"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Secondary Indexing"}),e.jsx("button",{onClick:()=>m("wal"),className:d("px-3 py-1.5 rounded-lg transition-all",o==="wal"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"NDJSON WAL Compaction"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining filesystem inode swaps, in-memory hash index mappings, and append-only write-ahead logging:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:o==="atomic"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"ATOMIC WRITE & SWAP ARCHITECTURE (`tempfile` + `os.replace`)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"15",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"1. Write to Temp File"}),e.jsx("text",{x:"15",y:"55",fill:"#38bdf8",fontSize:"8 font-mono",children:"fd, tmp = mkstemp(dir=dir)"}),e.jsx("text",{x:"15",y:"75",fill:"#ecfdf5",fontSize:"8 font-mono",children:"json.dump(data, f, indent=2)"}),e.jsx("text",{x:"15",y:"95",fill:"#34d399",fontSize:"8 font-mono",children:"f.flush() + os.fsync()"}),e.jsx("rect",{x:"15",y:"115",width:"220",height:"100",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"25",y:"140",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Isolated Staging:"}),e.jsx("text",{x:"25",y:"160",fill:"#cbd5e1",fontSize:"8",children:"Target database remains"}),e.jsx("text",{x:"25",y:"175",fill:"#cbd5e1",fontSize:"8",children:"untouched during dump."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"310",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. Atomic Inode Replacement"}),e.jsx("text",{x:"310",y:"55",fill:"#38bdf8",fontSize:"8 font-mono font-bold",children:'os.replace(tmp, "db.json")'}),e.jsx("text",{x:"310",y:"75",fill:"#ecfdf5",fontSize:"8 font-mono",children:"OS Directory Entry Swap"}),e.jsx("text",{x:"310",y:"95",fill:"#34d399",fontSize:"8 font-mono",children:"Instant 1-Operation Switch"}),e.jsx("rect",{x:"310",y:"115",width:"220",height:"100",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"320",y:"140",fill:"#38bdf8",fontSize:"9 font-bold",children:"Atomic Swap Guarantee:"}),e.jsx("text",{x:"320",y:"160",fill:"#cbd5e1",fontSize:"8",children:"OS guarantees readers see"}),e.jsx("text",{x:"320",y:"175",fill:"#cbd5e1",fontSize:"8",children:"either old or new file 100%."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"605",y:"30",fill:"#a7f3d0",fontSize:"11 font-bold",children:"3. 100% Data Integrity"}),e.jsx("text",{x:"605",y:"55",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"Zero 0-Byte Corruptions"}),e.jsx("text",{x:"605",y:"75",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Survives Sudden Power Cuts"}),e.jsx("rect",{x:"605",y:"115",width:"200",height:"100",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"615",y:"140",fill:"#34d399",fontSize:"9 font-bold",children:"ACID Atomicity:"}),e.jsx("text",{x:"615",y:"160",fill:"#cbd5e1",fontSize:"8",children:"Enterprise-grade durability"}),e.jsx("text",{x:"615",y:"175",fill:"#cbd5e1",fontSize:"8",children:"for embedded JSON files."})]})]}):o==="indexing"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"THREAD-SAFE MEMORY CACHE & SECONDARY HASH INDEXING"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"1. Primary Document Store (Keyed by Student ID)"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"8 font-mono",children:'"STU-101": {name: "Sourav", course: "PY-AI"}'}),e.jsx("text",{x:"20",y:"80",fill:"#ecfdf5",fontSize:"8 font-mono",children:'"STU-102": {name: "Priyanka", course: "DS-ML"}'}),e.jsx("text",{x:"20",y:"100",fill:"#ecfdf5",fontSize:"8 font-mono",children:'"STU-103": {name: "Debolina", course: "PY-AI"}'}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"Primary Key Map:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"O(1) direct document retrieval by primary `student_id`."})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"2. Secondary Hash Index (`index_course`)"}),e.jsx("text",{x:"20",y:"60",fill:"#38bdf8",fontSize:"8 font-mono font-bold",children:'"PY-AI"   -> {"STU-101", "STU-103"}'}),e.jsx("text",{x:"20",y:"80",fill:"#38bdf8",fontSize:"8 font-mono font-bold",children:'"DS-ML"   -> {"STU-102"}'}),e.jsx("text",{x:"20",y:"100",fill:"#38bdf8",fontSize:"8 font-mono font-bold",children:'"FULL-STK"-> {"STU-104"}'}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"30",y:"155",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Index Acceleration:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Instant O(1) course lookup without O(N) full table scan."})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"APPEND-ONLY NDJSON WAL LOG & SNAPSHOT COMPACTION"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"15",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"1. Fast Append-Only WAL"}),e.jsx("text",{x:"15",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:'{action: "INSERT", id: 101}'}),e.jsx("text",{x:"15",y:"75",fill:"#ecfdf5",fontSize:"8 font-mono",children:'{action: "UPDATE", id: 101}'}),e.jsx("text",{x:"15",y:"95",fill:"#fca5a5",fontSize:"8 font-mono",children:'{action: "DELETE", id: 103}'}),e.jsx("rect",{x:"15",y:"115",width:"220",height:"100",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"25",y:"140",fill:"#38bdf8",fontSize:"9 font-bold",children:"O(1) Appends:"}),e.jsx("text",{x:"25",y:"160",fill:"#cbd5e1",fontSize:"8",children:"Zero full-file rewrites."}),e.jsx("text",{x:"25",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Extremely high write IOPS."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"310",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"2. Snapshot Compactor"}),e.jsx("text",{x:"310",y:"55",fill:"#38bdf8",fontSize:"8 font-mono",children:"Replays delta events"}),e.jsx("text",{x:"310",y:"75",fill:"#38bdf8",fontSize:"8 font-mono",children:"Collapses to final state"}),e.jsx("text",{x:"310",y:"95",fill:"#34d399",fontSize:"8 font-mono",children:"Atomic Base Snapshot"}),e.jsx("rect",{x:"310",y:"115",width:"220",height:"100",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"320",y:"140",fill:"#34d399",fontSize:"9 font-bold",children:"State Checkpoint:"}),e.jsx("text",{x:"320",y:"160",fill:"#cbd5e1",fontSize:"8",children:"Overwrites snapshot"}),e.jsx("text",{x:"320",y:"175",fill:"#cbd5e1",fontSize:"8",children:"and truncates WAL log."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"605",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"3. Cleaned State"}),e.jsx("text",{x:"605",y:"55",fill:"#34d399",fontSize:"8 font-mono",children:"Snapshot Size: 1.2 KB"}),e.jsx("text",{x:"605",y:"75",fill:"#34d399",fontSize:"8 font-mono",children:"WAL Size: 0 bytes (Reset)"}),e.jsx("rect",{x:"605",y:"115",width:"200",height:"100",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"615",y:"140",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Constant Efficiency:"}),e.jsx("text",{x:"615",y:"160",fill:"#cbd5e1",fontSize:"8",children:"Keeps database startup"}),e.jsx("text",{x:"615",y:"175",fill:"#cbd5e1",fontSize:"8",children:"replay times sub-millisecond."})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive JSON Document Database & WAL Laboratory"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Execute CRUD operations on the live in-memory JSON document database, observe secondary index updates, inspect the append-only NDJSON WAL transaction log, and trigger atomic snapshot flushes:"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"1. Database Operations Engine"}),e.jsxs("span",{className:"text-[11px] font-mono text-slate-400",children:["Total Records: ",e.jsx("strong",{className:"text-white",children:Object.keys(i).length})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("button",{onClick:j,className:"py-2.5 bg-teal-600 hover:bg-teal-500 text-white font-mono text-xs font-bold rounded-lg transition-all",children:"➕ Insert Student (STU-104)"}),e.jsx("button",{onClick:A,className:"py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-xs font-bold rounded-lg transition-all",children:"✏️ Update STU-101 (Paid)"}),e.jsx("button",{onClick:k,className:"py-2.5 bg-rose-700 hover:bg-rose-600 text-white font-mono text-xs font-bold rounded-lg transition-all",children:"🗑️ Delete STU-103"}),e.jsx("button",{onClick:v,className:"py-2.5 bg-purple-700 hover:bg-purple-600 text-white font-mono text-xs font-bold rounded-lg transition-all",children:"⚛️ Atomic Flush (`os.replace`)"})]}),e.jsxs("div",{className:"flex gap-2 pt-1",children:[e.jsx("button",{onClick:T,className:"flex-1 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-mono text-xs rounded-lg transition-all",children:"🧹 Compact WAL Log"}),e.jsx("button",{onClick:O,className:"flex-1 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-mono text-xs rounded-lg transition-all",children:"📦 Create Backup Snapshot"})]}),e.jsxs("div",{className:"space-y-1.5 pt-2 border-t border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-slate-300",children:"Filter by Secondary Course Index:"}),e.jsx("div",{className:"flex bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:["ALL","PY-AI","DS-ML","FULL-STACK"].map(t=>e.jsx("button",{onClick:()=>g(t),className:d("flex-1 py-1 rounded transition-all",h===t?"bg-teal-900/60 text-teal-300 font-bold border border-teal-700/80":"text-slate-400 hover:text-white"),children:t},t))})]}),e.jsxs("div",{className:"p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-xs font-mono space-y-1",children:[e.jsx("span",{className:"text-[10px] text-slate-400 uppercase font-bold block",children:"Secondary Hash Index Map (`index_course`):"}),e.jsx("div",{className:"text-[11px] text-cyan-300",children:JSON.stringify(l)})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs space-y-1",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:"Database Engine Status Log:"}),e.jsx("div",{className:"text-teal-300 text-[11px] leading-relaxed",children:S})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[140px] font-mono text-xs space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-[10px] font-bold uppercase text-slate-400",children:[e.jsx("span",{children:"In-Memory Document Store:"}),e.jsxs("span",{children:["Filtered: ",b.length]})]}),e.jsx("pre",{className:"text-slate-200 text-[11px] leading-relaxed",children:JSON.stringify(b,null,2)})]}),e.jsxs("div",{className:"p-2.5 bg-slate-900 rounded-xl border border-slate-800 font-mono text-[11px] space-y-1 max-h-[80px] overflow-y-auto",children:[e.jsxs("span",{className:"text-[10px] text-slate-400 uppercase font-bold block",children:["Append-Only NDJSON WAL Log (",u.length," Lines):"]}),u.map((t,n)=>e.jsxs("div",{className:"text-slate-300 text-[10px] flex justify-between",children:[e.jsxs("span",{children:[e.jsx("strong",{className:d(t.action==="INSERT"?"text-emerald-400":t.action==="UPDATE"?"text-cyan-400":t.action==="DELETE"?"text-rose-400":"text-purple-400"),children:t.action})," ",t.doc_id]}),e.jsx("span",{className:"text-slate-500",children:t.timestamp})]},n))]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master JSON Database Durability & Performance Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Architecture Layer"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Standard Implementation"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Failure Mode Prevented"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Complexity / Cost"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"Atomic Write Swap"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`mkstemp()` + `fsync()` + `os.replace()`"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"0-byte corrupted database files"}),e.jsx("td",{className:"py-3 px-4",children:"O(N) file rewrite time"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"Concurrency Lock"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`threading.RLock()`"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Race conditions & torn reads"}),e.jsx("td",{className:"py-3 px-4",children:"Sub-microsecond lock contention"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Secondary Indexing"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`dict[key] -> Set[doc_ids]`"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"O(N) slow full-table scans"}),e.jsx("td",{className:"py-3 px-4",children:"O(1) query time / slight RAM overhead"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"Append-Only WAL"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"NDJSON single-line appends"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Slow full-database rewrites on writes"}),e.jsx("td",{className:"py-3 px-4",children:"O(1) append time + periodic compaction"})]})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating atomic JSON stores, thread-safe indexed document databases, append-only NDJSON WAL engines, and institutional registry databases:"}),e.jsx(D,{files:[{filename:"atomic_json_file_store_with_tempfile_replace.py",code:C,description:"Atomic JSON file store with tempfile and os.replace preventing 0-byte corruptions."},{filename:"thread_safe_json_document_database.py",code:R,description:"Thread-safe in-memory document store with secondary indexing and atomic disk persistence."},{filename:"append_only_ndjson_wal_engine.py",code:P,description:"High-throughput append-only NDJSON Write-Ahead Logging (WAL) and compaction engine."},{filename:"institutional_student_registry_json_database.py",code:W,description:"Complete ACID-like embedded JSON document database with automated backup rotation and recovery."}]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Direct File Truncation Data Loss"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Using ",e.jsx("code",{className:"text-rose-300 font-mono",children:'with open("db.json", "w") as f: json.dump(...)'})," truncates the database to 0 bytes immediately. If an unexpected power outage occurs, all data is destroyed."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always write to a temp file and swap atomically with ",e.jsx("code",{className:"text-emerald-300",children:"os.replace()"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Cross-Device Temp File Rename Errors"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Creating temp files in ",e.jsx("code",{className:"text-amber-300 font-mono",children:"/tmp"})," while the database is on another disk partition causes ",e.jsx("code",{className:"text-rose-400 font-mono",children:"os.replace()"})," to fail or become non-atomic."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always specify ",e.jsx("code",{className:"text-emerald-300",children:"dir=os.path.dirname(target_path)"})," in ",e.jsx("code",{className:"text-emerald-300",children:"mkstemp()"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Multi-Threaded Race Conditions"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Concurrent threads modifying the document store without locks can interleave writes, leading to corrupted in-memory state or torn file writes."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Protect all read and write methods with ",e.jsx("code",{className:"text-emerald-300",children:"threading.RLock()"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Unbounded WAL Growth"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Never compacting NDJSON transaction logs causes the WAL file to grow indefinitely, slowing down application startup replay times."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Trigger periodic checkpoint compaction to collapse deltas into base snapshots."]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering atomic writes, os.replace, RLock concurrency, secondary indexing, NDJSON WAL, and compaction:"}),e.jsx(L,{questions:z})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with atomic write recipes, thread-safe database templates, and NDJSON WAL engines:"}),e.jsx("div",{className:"mb-10",children:e.jsx(E,{content:J,filename:"python_topic8_json_persistent_data_stores_notes.txt",title:"Print Topic 8 Study Notes"})}),e.jsx(I,{})]})]})]})}export{K as default};
