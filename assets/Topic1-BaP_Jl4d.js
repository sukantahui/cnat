import{b as n,j as e,bg as o}from"./vendor-react-core-Doz9nIC6.js";import{P as k}from"./PythonFileLoader-hCi5osN-.js";import{P as A}from"./PlainTextPrint-C08xhKA4.js";import{F as E}from"./FAQTemplate-CkSqDH4B.js";import{T as C}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const O=`# topic1_files/pathlib_object_oriented_path_fundamentals.py\r
# Module: 004_001_filesystem-os\r
# Topic: Modern path manipulation with pathlib.Path\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 1 - File 1: \`pathlib.Path\` Object-Oriented Path Fundamentals\r
Demonstrates:\r
  1. Creating and anchoring paths: \`Path.cwd()\`, \`Path.home()\`, \`Path()\`\r
  2. The intuitive slash \`/\` path joining operator (replaces \`os.path.join\`)\r
  3. Decomposing paths: \`.name\`, \`.stem\`, \`.suffix\`, \`.suffixes\`, \`.parent\`, \`.parents\`\r
"""\r
\r
from pathlib import Path\r
from typing import List\r
\r
def demonstrate_pathlib_fundamentals():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - PATHLIB OBJECT-ORIENTED FUNDAMENTALS")\r
    print("=" * 70)\r
\r
    # 1. Instantiating Path Objects & Anchors:\r
    cwd_path = Path.cwd()\r
    home_path = Path.home()\r
    print("1. Path Anchors & Instances:")\r
    print(f"   * Current Working Directory : {cwd_path}")\r
    print(f"   * User Home Directory       : {home_path}\\n")\r
\r
    # 2. Intuitive Slash \`/\` Operator (Replaces \`os.path.join\`):\r
    vault_base = Path("accotax_vault")\r
    student_doc = vault_base / "students" / "2026" / "STU_101_Sourav.kyc.pdf"\r
\r
    print("2. Slash \`/\` Path Composition:")\r
    print(f"   * Composed Path: {student_doc}")\r
    print(f"   * Path Type    : {type(student_doc).__name__} ({'WindowsPath' if Path is type(student_doc) else 'PosixPath'})\\n")\r
\r
    # 3. Path Anatomy & Decomposition:\r
    print("3. Path Anatomy Breakdown (\`.name\`, \`.stem\`, \`.suffix\`, \`.parent\`):")\r
    print(f"   * Full Path Str       : {student_doc}")\r
    print(f"   * .name (Filename)    : {student_doc.name}")\r
    print(f"   * .stem (Base Name)   : {student_doc.stem} (Without last extension)")\r
    print(f"   * .suffix (Extension) : {student_doc.suffix}")\r
    print(f"   * .suffixes (All Exts): {student_doc.suffixes} (Multiple extensions)")\r
    print(f"   * .parent (Folder)    : {student_doc.parent}")\r
    print(f"   * .parents[0] (Parent): {student_doc.parents[0]}")\r
    print(f"   * .parents[1] (Grand) : {student_doc.parents[1]}")\r
    print(f"   * .parents[2] (Great) : {student_doc.parents[2]}\\n")\r
\r
    # 4. Pure Path Transformations (.with_suffix, .with_name):\r
    print("4. Pure Path Transformation Helpers (Copy-on-Write):")\r
    backup_doc = student_doc.with_suffix(".bak.pdf")\r
    renamed_doc = student_doc.with_name("STU_101_Archived.pdf")\r
\r
    print(f"   * with_suffix('.bak.pdf') : {backup_doc.name}")\r
    print(f"   * with_name('Archived')   : {renamed_doc.name}")\r
\r
    print(r"""\r
pathlib Invariants:\r
  1. \`pathlib.Path\` treats paths as first-class objects with rich methods rather than raw strings.\r
  2. The \`/\` operator automatically joins paths with the correct operating system separator.\r
  3. \`.stem\` extracts the filename without the last extension; \`.suffixes\` returns a list of all extensions.\r
""")\r
    print("[PASSED] pathlib.Path Fundamentals Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_pathlib_fundamentals()\r
`,I=`# topic1_files/pathlib_filesystem_io_and_methods.py\r
# Module: 004_001_filesystem-os\r
# Topic: Modern path manipulation with pathlib.Path\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 1 - File 2: \`pathlib.Path\` File I/O & Filesystem Operations\r
Demonstrates:\r
  1. Convenient one-liner reading and writing: \`path.read_text()\`, \`path.write_text()\`\r
  2. Directory creation: \`path.mkdir(parents=True, exist_ok=True)\`\r
  3. File touching and deleting: \`path.touch()\`, \`path.unlink(missing_ok=True)\`\r
  4. Resolving canonical absolute paths: \`path.resolve()\`\r
"""\r
\r
import shutil\r
from pathlib import Path\r
\r
def demonstrate_pathlib_io_operations():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - PATHLIB FILE I/O & FILESYSTEM METHODS")\r
    print("=" * 70)\r
\r
    demo_dir = Path("temp_pathlib_sandbox")\r
    sample_file = demo_dir / "audit_reports" / "summary.json"\r
\r
    try:\r
        # 1. Recursive Directory Creation via path.mkdir():\r
        print("1. Recursive Directory Creation (\`path.mkdir(parents=True, exist_ok=True)\`):")\r
        sample_file.parent.mkdir(parents=True, exist_ok=True)\r
        print(f"   * Created parent directory: {sample_file.parent}")\r
        print(f"   * sample_file.parent.is_dir(): {sample_file.parent.is_dir()}\\n")\r
\r
        # 2. Writing text with single call path.write_text():\r
        print("2. Writing Content with \`path.write_text(content, encoding='utf-8')\`:")\r
        json_payload = '{"institution": "Coder & AccoTax", "status": "AUDIT_CLEARED", "year": 2026}'\r
        bytes_written = sample_file.write_text(json_payload, encoding="utf-8")\r
        print(f"   * Wrote {bytes_written} characters to '{sample_file}'\\n")\r
\r
        # 3. Reading text with single call path.read_text():\r
        print("3. Reading Content with \`path.read_text(encoding='utf-8')\`:")\r
        read_content = sample_file.read_text(encoding="utf-8")\r
        print(f"   * Read payload: {read_content}\\n")\r
\r
        # 4. Canonical Path Resolution (.resolve()):\r
        print("4. Canonical Path Resolution with \`path.resolve()\`:")\r
        canonical_path = sample_file.resolve()\r
        print(f"   * Relative Path  : {sample_file}")\r
        print(f"   * Canonical Path : {canonical_path}\\n")\r
\r
        # 5. Deleting File via path.unlink(missing_ok=True):\r
        print("5. Deleting File with \`path.unlink(missing_ok=True)\`:")\r
        sample_file.unlink(missing_ok=True)\r
        print(f"   * File deleted successfully. Exists: {sample_file.exists()}")\r
\r
    finally:\r
        # Cleanup sandbox directory\r
        if demo_dir.exists():\r
            shutil.rmtree(demo_dir)\r
            print("6. Sandbox cleanup: Removed temporary demo directory.")\r
\r
    print(r"""\r
pathlib I/O Invariants:\r
  1. \`path.write_text()\` and \`path.read_text()\` eliminate verbose \`with open(...) as f:\` boilerplate for small text files.\r
  2. Always specify \`encoding="utf-8"\` when reading or writing text files.\r
  3. \`path.unlink(missing_ok=True)\` deletes files idempotently without raising \`FileNotFoundError\`.\r
""")\r
    print("[PASSED] pathlib.Path File I/O & Operations Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_pathlib_io_operations()\r
`,R=`# topic1_files/pathlib_globbing_and_pattern_matching.py\r
# Module: 004_001_filesystem-os\r
# Topic: Modern path manipulation with pathlib.Path\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 1 - File 3: \`pathlib.Path\` Globbing, Pattern Matching & Relative Paths\r
Demonstrates:\r
  1. Shallow directory scanning: \`path.iterdir()\`\r
  2. Pattern globbing: \`path.glob("*.csv")\`\r
  3. Recursive directory search: \`path.rglob("*.pdf")\`\r
  4. Computing relative subpaths: \`path.relative_to(base)\`\r
"""\r
\r
import shutil\r
from pathlib import Path\r
from typing import List\r
\r
def demonstrate_pathlib_globbing():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - PATHLIB GLOBBING & PATTERN SEARCH")\r
    print("=" * 70)\r
\r
    sandbox_root = Path("temp_accotax_glob_sandbox")\r
\r
    try:\r
        # 1. Setup multi-level folder structure with dummy files:\r
        (sandbox_root / "barrackpore" / "batch1").mkdir(parents=True, exist_ok=True)\r
        (sandbox_root / "barrackpore" / "batch2").mkdir(parents=True, exist_ok=True)\r
        (sandbox_root / "kolkata" / "batch1").mkdir(parents=True, exist_ok=True)\r
\r
        (sandbox_root / "barrackpore" / "batch1" / "stu_101.csv").touch()\r
        (sandbox_root / "barrackpore" / "batch1" / "stu_101.pdf").touch()\r
        (sandbox_root / "barrackpore" / "batch2" / "stu_102.pdf").touch()\r
        (sandbox_root / "kolkata" / "batch1" / "stu_103.csv").touch()\r
        (sandbox_root / "kolkata" / "batch1" / "stu_103.pdf").touch()\r
\r
        # 2. Shallow Directory Iteration with path.iterdir():\r
        print("1. Shallow Directory Scan (\`sandbox_root.iterdir()\`):")\r
        top_entries = list(sandbox_root.iterdir())\r
        for entry in top_entries:\r
            print(f"   * Entry: {entry.name:<15} | is_dir(): {entry.is_dir()}")\r
\r
        # 3. Shallow Glob Pattern with path.glob():\r
        print("\\n2. Shallow Wildcard Glob (\`sandbox_root.glob('*')\`):")\r
        campuses = [p.name for p in sandbox_root.glob("*") if p.is_dir()]\r
        print(f"   * Campuses Discovered: {campuses}")\r
\r
        # 4. Deep Recursive Glob with path.rglob():\r
        print("\\n3. Recursive Deep Glob (\`sandbox_root.rglob('*.pdf')\`):")\r
        all_pdfs = list(sandbox_root.rglob("*.pdf"))\r
        print(f"   * Found {len(all_pdfs)} PDF files across all subdirectories:")\r
        for pdf in all_pdfs:\r
            # Computing path relative to sandbox root\r
            rel_path = pdf.relative_to(sandbox_root)\r
            print(f"     - Relative: {rel_path} | Size: {pdf.stat().st_size} bytes")\r
\r
        # 5. Matching all CSV files recursively:\r
        all_csvs = list(sandbox_root.rglob("*.csv"))\r
        print(f"\\n4. Recursive CSV Files: {[p.name for p in all_csvs]}")\r
\r
    finally:\r
        # Cleanup sandbox directory\r
        if sandbox_root.exists():\r
            shutil.rmtree(sandbox_root)\r
            print("\\n5. Cleanup: Removed glob sandbox directory tree.")\r
\r
    print(r"""\r
pathlib Globbing Invariants:\r
  1. \`path.glob("pattern")\` scans only the immediate directory.\r
  2. \`path.rglob("pattern")\` (or \`path.glob("**/*")\`) recursively searches all subfolders.\r
  3. \`path.relative_to(base)\` calculates clean, portable relative paths.\r
""")\r
    print("[PASSED] pathlib.Path Globbing & Pattern Search Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_pathlib_globbing()\r
`,D=`# topic1_files/institutional_pathlib_document_vault_manager.py\r
# Module: 004_001_filesystem-os\r
# Topic: Modern path manipulation with pathlib.Path\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 1 - File 4: Institutional Document Vault & Path Manager (Case Study)\r
Demonstrates:\r
  1. Complete digital vault manager using \`pathlib.Path\`\r
  2. Automated candidate folder creation, document sanitization, and extension checks\r
  3. Recursive audit scanning with \`.rglob()\` and computing \`.relative_to()\` summaries\r
"""\r
\r
import json\r
import shutil\r
from pathlib import Path\r
from typing import Dict, Any, List, Tuple\r
\r
class InstitutionalDocumentVaultManager:\r
    """Production digital document vault manager powered by pathlib.Path."""\r
\r
    ALLOWED_EXTENSIONS = {".pdf", ".jpg", ".png", ".json"}\r
\r
    def __init__(self, vault_root: Path):\r
        self.vault_root = vault_root\r
        self.vault_root.mkdir(parents=True, exist_ok=True)\r
\r
    def register_student_dossier(self, campus: str, batch: str, student_id: str, student_name: str, payload_data: Dict[str, Any]) -> Path:\r
        """Creates a dedicated student dossier folder and persists profile metadata."""\r
        # Sanitize student folder name\r
        sanitized_name = student_name.strip().replace(" ", "_")\r
        student_folder = self.vault_root / campus.lower() / batch.lower() / f"{student_id}_{sanitized_name}"\r
        student_folder.mkdir(parents=True, exist_ok=True)\r
\r
        # Write metadata profile JSON:\r
        profile_path = student_folder / "profile.json"\r
        profile_path.write_text(json.dumps(payload_data, indent=2), encoding="utf-8")\r
\r
        # Create mock KYC files\r
        (student_folder / "aadhaar_card.pdf").write_text("DUMMY_AADHAAR_CONTENT", encoding="utf-8")\r
        (student_folder / "marksheet_12th.pdf").write_text("DUMMY_MARKSHEET_CONTENT", encoding="utf-8")\r
\r
        return student_folder\r
\r
    def audit_vault_documents(self) -> Dict[str, Any]:\r
        """Scans entire vault recursively with .rglob() and verifies document integrity."""\r
        all_files = list(self.vault_root.rglob("*"))\r
        regular_files = [f for f in all_files if f.is_file()]\r
\r
        valid_docs = []\r
        invalid_extensions = []\r
\r
        for doc in regular_files:\r
            rel_path = doc.relative_to(self.vault_root)\r
            if doc.suffix.lower() in self.ALLOWED_EXTENSIONS:\r
                valid_docs.append({\r
                    "filename": doc.name,\r
                    "stem": doc.stem,\r
                    "suffix": doc.suffix,\r
                    "relative_path": str(rel_path),\r
                    "size_bytes": doc.stat().st_size\r
                })\r
            else:\r
                invalid_extensions.append(str(rel_path))\r
\r
        return {\r
            "vault_root": str(self.vault_root.resolve()),\r
            "total_files_audited": len(regular_files),\r
            "valid_document_count": len(valid_docs),\r
            "quarantined_files": invalid_extensions,\r
            "document_inventory": valid_docs\r
        }\r
\r
\r
def demonstrate_vault_manager():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - INSTITUTIONAL DOCUMENT VAULT & PATH MANAGER")\r
    print("=" * 70)\r
\r
    vault_path = Path("temp_accotax_institutional_vault")\r
    manager = InstitutionalDocumentVaultManager(vault_path)\r
\r
    try:\r
        # 1. Registering Candidate Dossiers across Campuses:\r
        print("1. Initializing Student Dossier Paths with \`pathlib.Path\`:")\r
        s1_folder = manager.register_student_dossier(\r
            campus="Barrackpore",\r
            batch="PY-AI-2026",\r
            student_id="STU-101",\r
            student_name="Sourav Mukherjee",\r
            payload_data={"id": "STU-101", "name": "Sourav Mukherjee", "course": "PY-AI", "fee_cleared": True}\r
        )\r
        print(f"   * Registered Dossier 1: {s1_folder}")\r
\r
        s2_folder = manager.register_student_dossier(\r
            campus="Kolkata",\r
            batch="DS-ML-2026",\r
            student_id="STU-102",\r
            student_name="Priyanka Sen",\r
            payload_data={"id": "STU-102", "name": "Priyanka Sen", "course": "DS-ML", "fee_cleared": True}\r
        )\r
        print(f"   * Registered Dossier 2: {s2_folder}\\n")\r
\r
        # 2. Executing Recursive Vault Audit (.rglob):\r
        print("2. Executing Recursive Vault Audit (\`vault_path.rglob('*')\`):")\r
        audit_report = manager.audit_vault_documents()\r
\r
        print(f"   * Vault Canonical Path     : {audit_report['vault_root']}")\r
        print(f"   * Total Files Stored       : {audit_report['total_files_audited']}")\r
        print(f"   * Valid Approved Documents : {audit_report['valid_document_count']}")\r
        print(f"   * Quarantined Files        : {audit_report['quarantined_files']}\\n")\r
\r
        print("3. Sample Document Inventory Entries:")\r
        for doc in audit_report["document_inventory"][:4]:\r
            print(f"   * [{doc['suffix']:<5}] {doc['filename']:<22} | Rel: {doc['relative_path']}")\r
\r
    finally:\r
        # Cleanup vault directory\r
        if vault_path.exists():\r
            shutil.rmtree(vault_path)\r
            print("\\n4. Cleanup: Removed institutional document vault safely.")\r
\r
    print("\\n[PASSED] Institutional Document Vault & Path Manager Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_vault_manager()\r
`,z=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
          PYTHON PROGRAMMING • SEGMENT 4: PRO LEVEL • MODULE 004_001: FILESYSTEM & OS\r
             TOPIC 1: MODERN PATH MANIPULATION WITH PATHLIB.PATH\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. PATH ANATOMY\r
--------------------------------------------------------------------------------\r
  p = Path("vault/students/2026/sourav.kyc.pdf")\r
  * p.name        : "sourav.kyc.pdf"\r
  * p.stem        : "sourav.kyc"\r
  * p.suffix      : ".pdf"\r
  * p.suffixes    : [".kyc", ".pdf"]\r
  * p.parent      : Path("vault/students/2026")\r
  * p.parents[1]  : Path("vault/students")\r
\r
--------------------------------------------------------------------------------\r
2. SLASH OPERATOR & TRANSFORMATIONS\r
--------------------------------------------------------------------------------\r
  * path = base_dir / "folder" / "file.txt"    # Cross-platform joining\r
  * new_p = p.with_suffix(".json")             # Change extension\r
  * new_p = p.with_name("archived.pdf")        # Change filename\r
\r
--------------------------------------------------------------------------------\r
3. ONE-LINER I/O & DIRECTORIES\r
--------------------------------------------------------------------------------\r
  * p.write_text("Hello World", encoding="utf-8")\r
  * text = p.read_text(encoding="utf-8")\r
  * p.mkdir(parents=True, exist_ok=True)\r
  * p.unlink(missing_ok=True)\r
  * list(p.rglob("*.pdf"))                      # Recursive search\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 1: PATHLIB.PATH\r
================================================================================\r
`,M=[{question:"Why was 'pathlib' introduced in Python 3.4 to replace legacy 'os.path'?",shortAnswer:"'pathlib' provides an intuitive, object-oriented API where paths are rich first-class objects with methods and properties, eliminating error-prone string manipulation and hardcoded path separators.",explanation:"Object-oriented filesystem abstraction.",hint:"Encapsulates paths as rich objects rather than raw strings.",level:"basic",codeExample:`from pathlib import Path
p = Path('data') / 'report.csv'`},{question:"How does the slash '/' operator operate in 'pathlib.Path'?",shortAnswer:"The '/' operator is overloaded via the '__truediv__' dunder method to join path components cleanly using the host OS's native separator ('\\' on Windows, '/' on POSIX).",explanation:"Intuitive path joining syntax.",hint:"Overloads the division operator to join path components.",level:"basic",codeExample:"full_path = Path.cwd() / 'vault' / 'students' / 'profile.json'"},{question:"What is the difference between 'path.name', 'path.stem', and 'path.suffix'?",shortAnswer:"'path.name' is the full filename with extensions ('data.kyc.pdf'); 'path.stem' is the filename without the final extension ('data.kyc'); 'path.suffix' is the final extension ('.pdf').",explanation:"Path anatomy properties.",hint:"name=full leaf; stem=leaf without last extension; suffix=last extension.",level:"basic",codeExample:"p = Path('a/b/test.kyc.pdf'); p.name # 'test.kyc.pdf'; p.stem # 'test.kyc'; p.suffix # '.pdf'"},{question:"What does 'path.suffixes' return on a file with multiple extensions like 'archive.tar.gz'?",shortAnswer:`It returns a list of all extension strings in order: "['.tar', '.gz']".`,explanation:"Multi-extension decomposition.",hint:"Returns a list of all extensions: ['.tar', '.gz'].",level:"basic",codeExample:"Path('backup.tar.gz').suffixes # ['.tar', '.gz']"},{question:"How do you change only the file extension of a Path object without mutating the original?",shortAnswer:`Using the pure transformation method 'path.with_suffix(".new_ext")'.`,explanation:"Non-mutating extension replacement.",hint:"Use path.with_suffix('.csv').",level:"basic",codeExample:"new_path = Path('report.json').with_suffix('.csv')"},{question:"How do you change only the filename (leaf name) of a Path object?",shortAnswer:`Using 'path.with_name("new_filename.ext")' (or 'path.with_stem("new_name")' in Python 3.9+ to keep the extension).`,explanation:"Leaf name replacement.",hint:"Use path.with_name('new_file.txt') or path.with_stem('new_stem').",level:"basic",codeExample:"Path('dir/old.txt').with_name('new.txt') # Path('dir/new.txt')"},{question:"What is the benefit of 'path.read_text()' and 'path.write_text()' over 'open()'?",shortAnswer:"They provide clean, readable one-liners that automatically handle file opening, reading/writing, and closing without verbose 'with open(...) as f:' context manager boilerplate.",explanation:"Concise standard library I/O convenience.",hint:"Convenient one-liners that automatically handle opening and closing files.",level:"basic",codeExample:"content = Path('config.json').read_text(encoding='utf-8')"},{question:`Why should you ALWAYS pass 'encoding="utf-8"' to 'path.read_text()' and 'path.write_text()'?`,shortAnswer:"Without an explicit encoding, Python defaults to the OS-dependent system encoding ('cp1252' on Windows), causing 'UnicodeDecodeError' when encountering non-ASCII or UTF-8 characters.",explanation:"Windows encoding portability invariant.",hint:"Prevents UnicodeDecodeError on Windows default cp1252.",level:"basic",codeExample:"Path('log.txt').write_text(data, encoding='utf-8')"},{question:"How do you create a deeply nested directory tree safely using pathlib?",shortAnswer:"Using 'path.mkdir(parents=True, exist_ok=True)'.",explanation:"Recursive idempotent directory creation.",hint:"Use path.mkdir(parents=True, exist_ok=True).",level:"basic",codeExample:"Path('vault/2026/q1/audits').mkdir(parents=True, exist_ok=True)"},{question:"How do you delete a file safely without raising an error if it doesn't exist?",shortAnswer:"Using 'path.unlink(missing_ok=True)' (introduced in Python 3.8).",explanation:"Idempotent file deletion.",hint:"Use path.unlink(missing_ok=True).",level:"basic",codeExample:"Path('temp_file.tmp').unlink(missing_ok=True)"},{question:`What is the difference between 'path.glob("*.py")' and 'path.rglob("*.py")'?`,shortAnswer:`'path.glob("*.py")' searches ONLY the immediate directory; 'path.rglob("*.py")' recursively searches the directory and ALL nested subdirectories.`,explanation:"Shallow vs recursive directory searching.",hint:"glob() searches immediate directory; rglob() searches all nested subdirectories.",level:"basic",codeExample:"all_py = list(Path.cwd().rglob('*.py'))"},{question:"How do you compute a relative subpath from a base directory using pathlib?",shortAnswer:"Using 'child_path.relative_to(base_path)'.",explanation:"Relative path derivation.",hint:"Use path.relative_to(base).",level:"basic",codeExample:"Path('/a/b/c/d.txt').relative_to('/a/b') # Path('c/d.txt')"},{question:"What is the difference between 'Path.cwd()' and 'Path.home()'?",shortAnswer:"'Path.cwd()' returns the Current Working Directory; 'Path.home()' returns the current user's operating system home directory (e.g. '/home/user' or 'C:\\Users\\user').",explanation:"Standard system path anchors.",hint:"cwd() is current working directory; home() is user's home folder.",level:"basic",codeExample:"user_downloads = Path.home() / 'Downloads'"},{question:"What does 'path.resolve()' do?",shortAnswer:"It converts a relative path into an absolute canonical path and resolves all filesystem symbolic links (symlinks) and '..' segments.",explanation:"Path normalization and canonicalization.",hint:"Resolves relative segments and symlinks to absolute canonical path.",level:"moderate",codeExample:"abs_path = Path('../report.csv').resolve()"},{question:"What does 'path.parent' vs 'path.parents' return?",shortAnswer:"'path.parent' returns the immediate parent folder; 'path.parents' is an immutable sequence of all ancestor directories leading up to the root ('path.parents[0]' is immediate, '[1]' is grandparent).",explanation:"Ancestor path hierarchy traversal.",hint:"parent is immediate folder; parents is sequence of all ancestor folders.",level:"basic",codeExample:"p = Path('/a/b/c/d.txt'); p.parent # /a/b/c; p.parents[1] # /a/b"},{question:"How do you check if a Path object points to an existing regular file or directory?",shortAnswer:"Using 'path.is_file()' (for regular files) and 'path.is_dir()' (for directories).",explanation:"Node classification methods.",hint:"path.is_file() and path.is_dir().",level:"basic",codeExample:"if target.is_file(): process_file(target)"},{question:"How do you read raw binary bytes from a file using pathlib?",shortAnswer:"Using 'raw_bytes = path.read_bytes()' and write with 'path.write_bytes(data)'.",explanation:"Binary file I/O convenience.",hint:"Use path.read_bytes() and path.write_bytes().",level:"basic",codeExample:"img_bytes = Path('logo.png').read_bytes()"},{question:"What does 'path.iterdir()' return and how does it differ from 'os.listdir()'?",shortAnswer:"'os.listdir()' returns a list of raw string filenames; 'path.iterdir()' yields 'Path' objects lazily, enabling immediate chaining of Path methods.",explanation:"Object-oriented directory iteration.",hint:"Yields Path objects lazily instead of raw strings.",level:"basic",codeExample:"for p in Path('.').iterdir(): print(p.suffix)"},{question:"What is 'PurePath' in the pathlib module?",shortAnswer:"A base class that provides pure computational path manipulation without accessing the real filesystem (useful when manipulating Unix paths on Windows or vice versa).",explanation:"Pure computational path manipulation.",hint:"Manipulates path strings purely in memory without filesystem I/O.",level:"moderate",codeExample:`from pathlib import PurePosixPath
p = PurePosixPath('/etc/nginx/nginx.conf')`},{question:"Can 'pathlib.Path' objects be passed directly to 'open()' or built-in functions?",shortAnswer:"Yes. 'Path' implements the '__fspath__' protocol (PEP 519), allowing Path objects to be passed seamlessly to 'open()', 'os.path', 'json.dump()', and third-party libraries.",explanation:"Standard OS filesystem path protocol compatibility.",hint:"Yes, Path implements __fspath__ and is accepted by all standard library file functions.",level:"basic",codeExample:"with open(Path('data.txt')) as f: ..."},{question:"How do you find the size of a file in bytes using pathlib?",shortAnswer:"Using 'path.stat().st_size'.",explanation:"Filesystem stat size query on Path objects.",hint:"Use path.stat().st_size.",level:"basic",codeExample:"size_kb = Path('app.log').stat().st_size / 1024"},{question:"How do you touch (create or update timestamp) a file using pathlib?",shortAnswer:"Using 'path.touch(exist_ok=True)'.",explanation:"File touching.",hint:"Use path.touch(exist_ok=True).",level:"basic",codeExample:"Path('heartbeat.lock').touch(exist_ok=True)"},{question:"How do you rename or move a file using pathlib?",shortAnswer:"Using 'path.rename(target_path)' (or 'path.replace(target_path)' for atomic overwrites).",explanation:"Path moving and renaming.",hint:"Use path.replace(new_path) for atomic replacement.",level:"basic",codeExample:"Path('draft.txt').replace(Path('published.txt'))"},{question:"What happens if you call 'path.relative_to(base)' when 'path' is not inside 'base'?",shortAnswer:"It raises a 'ValueError: path does not start with base'.",explanation:"Relative path boundary verification.",hint:"Raises ValueError if path is not a subpath of base.",level:"moderate",codeExample:"# Raises ValueError if path is not a child of base"},{question:"What is the ultimate golden rule for modern path manipulation in Python?",shortAnswer:`Use 'pathlib.Path' for all filesystem operations, compose paths with the '/' operator, use '.read_text()' and '.write_text()' with explicit 'encoding="utf-8"', and create directories with '.mkdir(parents=True, exist_ok=True)'.`,explanation:"The complete enterprise guideline for modern path handling in Python.",hint:"Always use pathlib.Path with slash operator, UTF-8 encoding, and idempotent mkdir.",level:"basic",codeExample:"# Python pathlib Enterprise Mastery"}];function Y(){const _=n.useRef([]),[l,g]=n.useState("anatomy"),[r,N]=n.useState("barrackpore"),[d,W]=n.useState("py-ai-2026"),[c,U]=n.useState("STU_101_Sourav_Mukherjee"),[x,P]=n.useState(".kyc.pdf"),[m,S]=n.useState("DECOMPOSE"),i=`accotax_vault/${r}/${d}/${c}${x}`,s=`${c}${x}`,f=s.lastIndexOf("."),y=f!==-1?s.substring(0,f):s,v=f!==-1?s.substring(f):"",j=s.split(".").slice(1).map(t=>`.${t}`),u=`accotax_vault/${r}/${d}`,T=`accotax_vault/${r}`;let p="",h={};if(m==="DECOMPOSE")p=`# Decompose path object properties:
p = Path("${i}")
print(p.name)     # '${s}'
print(p.stem)     # '${y}'
print(p.suffix)   # '${v}'
print(p.suffixes) # ${JSON.stringify(j)}
print(p.parent)   # Path('${u}')`,h={"Path Object":`Path("${i}")`,".name":s,".stem":y,".suffix":v,".suffixes":j,".parent":u,".parents[1]":T};else if(m==="WITH_SUFFIX"){const t=`${c}.bak.pdf`;p=`# Pure Copy-on-Write extension replacement:
p = Path("${i}")
backup_path = p.with_suffix(".bak.pdf")
print("New Filename:", backup_path.name)`,h={"Original Path":i,"Transformed Path":`accotax_vault/${r}/${d}/${t}`,"Transformed .name":t,"Transformed .suffix":".pdf"}}else m==="WRITE_READ"?(p=`# Concise one-liner file I/O:
target_file = Path("${i}").with_suffix(".json")
target_file.parent.mkdir(parents=True, exist_ok=True)
target_file.write_text('{"status": "CLEARED"}', encoding="utf-8")
content = target_file.read_text(encoding="utf-8")`,h={"File Path":`${u}/${c}.json`,"Directory Created":`${u} (mkdir parents=True, exist_ok=True)`,"Written Content":'{"status": "CLEARED"}',Encoding:"utf-8"}):(p=`# Recursive search with .rglob():
vault = Path("accotax_vault")
all_pdfs = list(vault.rglob("*.pdf"))
for pdf in all_pdfs:
    print(pdf.relative_to(vault))`,h={"Search Root":"Path('accotax_vault')","Search Pattern":"vault.rglob('*.pdf')","Matches Found":[`${r}/${d}/${c}${x}`,`${r}/${d}/marksheet.pdf`,"kolkata/ds-ml-2026/STU_102_Priyanka.pdf"]});n.useEffect(()=>{const t=new IntersectionObserver(b=>{b.forEach(w=>{w.isIntersecting&&w.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return _.current.forEach(b=>{b&&t.observe(b)}),()=>t.disconnect()},[]);const a=t=>{t&&!_.current.includes(t)&&_.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:a,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 4 • Module 004_001"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 1"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Advanced File Operations, OS & Subprocess Automation"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Modern Path Manipulation with ",e.jsx("span",{className:"text-teal-400",children:"pathlib.Path"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master Python's modern object-oriented filesystem standard: cross-platform path joining with the slash ",e.jsx("code",{className:"text-teal-300 font-mono",children:"/"})," operator, path anatomy (",e.jsx("code",{className:"text-cyan-300 font-mono",children:".stem"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:".suffix"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:".parent"}),"), concise one-liner file I/O (",e.jsx("code",{className:"text-purple-300 font-mono",children:"read_text"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"write_text"}),"), and recursive glob pattern matching with ",e.jsx("code",{className:"text-amber-300 font-mono",children:"rglob()"}),"."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"✂️ Slash `/` Operator"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🧬 `.stem` vs `.suffix`"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📝 One-Liner `read_text()`"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔍 Recursive `rglob()`"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧭"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Object-Oriented Path Paradigm"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"In modern Python, filesystem paths are treated as first-class objects rather than raw strings:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Slash Operator"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:'base / "sub" / "file.txt"'}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Joins paths automatically using native OS separators with zero string concatenation bugs."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Path Anatomy"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:".name, .stem, .suffix"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Extracts extensions, base names, and parent directories directly as properties."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Concise File I/O"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:'path.read_text("utf-8")'}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Reads and writes file content in a single call without verbose ",e.jsx("code",{className:"text-purple-300",children:"with open()"})," boilerplate."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Explicit Encoding Invariant"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Always pass ",e.jsx("code",{className:"text-teal-300 font-mono",children:'encoding="utf-8"'})," to ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"path.read_text()"})," and ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"path.write_text()"}),"! On Windows, Python defaults to ",e.jsx("code",{className:"text-rose-400 font-mono",children:"cp1252"}),", which raises ",e.jsx("code",{className:"text-rose-400 font-mono",children:"UnicodeDecodeError"})," on international characters."]})]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Path Anatomy, Slash Operator & Recursive Glob"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>g("anatomy"),className:o("px-3 py-1.5 rounded-lg transition-all",l==="anatomy"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Path Anatomy"}),e.jsx("button",{onClick:()=>g("slashOp"),className:o("px-3 py-1.5 rounded-lg transition-all",l==="slashOp"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Slash `/` Joining"}),e.jsx("button",{onClick:()=>g("rglobScan"),className:o("px-3 py-1.5 rounded-lg transition-all",l==="rglobScan"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Recursive `rglob()`"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining object-oriented path properties, cross-platform path composition, and recursive tree searches:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:l==="anatomy"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"PATHLIB.PATH OBJECT ANATOMY BREAKDOWN"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"60",rx:"6",fill:"#090d16",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"35",fill:"#38bdf8",fontSize:"14 font-mono",children:"/var/accotax/vault/students/STU_101_Sourav.kyc.pdf"})]}),e.jsxs("g",{transform:"translate(30, 130)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"150",rx:"6",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"1. `.parent`"}),e.jsx("text",{x:"15",y:"60",fill:"#cbd5e1",fontSize:"8 font-mono",children:"`/var/accotax/vault/students`"}),e.jsx("text",{x:"15",y:"85",fill:"#38bdf8",fontSize:"8 font-mono",children:"`.parents[0]` = students"}),e.jsx("text",{x:"15",y:"105",fill:"#38bdf8",fontSize:"8 font-mono",children:"`.parents[1]` = vault"}),e.jsx("rect",{x:"280",y:"0",width:"250",height:"150",rx:"6",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"295",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. `.stem`"}),e.jsx("text",{x:"295",y:"60",fill:"#34d399",fontSize:"9 font-mono font-bold",children:"`STU_101_Sourav.kyc`"}),e.jsx("text",{x:"295",y:"85",fill:"#cbd5e1",fontSize:"8",children:"Base name without the"}),e.jsx("text",{x:"295",y:"105",fill:"#cbd5e1",fontSize:"8",children:"final extension string."}),e.jsx("rect",{x:"560",y:"0",width:"260",height:"150",rx:"6",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"575",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"3. `.suffix` & `.suffixes`"}),e.jsx("text",{x:"575",y:"60",fill:"#c084fc",fontSize:"9 font-mono font-bold",children:"`.suffix`   : `.pdf`"}),e.jsx("text",{x:"575",y:"85",fill:"#c084fc",fontSize:"9 font-mono font-bold",children:"`.suffixes` : `['.kyc', '.pdf']`"}),e.jsx("text",{x:"575",y:"110",fill:"#cbd5e1",fontSize:"8",children:"Full multi-extension list."})]})]}):l==="slashOp"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"SLASH `/` OPERATOR VS STRING CONCATENATION"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"String Concatenation (Anti-Pattern)"}),e.jsx("text",{x:"20",y:"65",fill:"#fca5a5",fontSize:"8 font-mono",children:'`path = dir + "\\\\" + file`'}),e.jsx("text",{x:"20",y:"85",fill:"#fca5a5",fontSize:"8 font-mono",children:"❌ Hardcodes Windows backslash"}),e.jsx("text",{x:"20",y:"105",fill:"#f43f5e",fontSize:"8 font-mono font-bold",children:"Crashes on Linux/Docker containers"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"155",fill:"#fda4af",fontSize:"9 font-bold",children:"Brittle & Non-Portable:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Requires manual delimiter checking and string escaping."})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"`pathlib.Path` Slash `/` Operator (Standard)"}),e.jsx("text",{x:"20",y:"65",fill:"#34d399",fontSize:"8 font-mono",children:'`path = Path.cwd() / "vault" / "data.csv"`'}),e.jsx("text",{x:"20",y:"85",fill:"#34d399",fontSize:"8 font-mono",children:"✅ Resolves native OS delimiter automatically"}),e.jsx("text",{x:"20",y:"105",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"100% Cross-Platform Compatible"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"Universal Portability:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Works seamlessly across Windows, Linux, macOS, and AWS."})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"SHALLOW `glob()` VS RECURSIVE `rglob()` DIRECTORY TRAVERSAL"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"20",y:"30",fill:"#a5f3fc",fontSize:"12",fontWeight:"bold",children:'Shallow `path.glob("*.pdf")`'}),e.jsx("text",{x:"20",y:"65",fill:"#cbd5e1",fontSize:"8 font-mono",children:"Scans ONLY the immediate root directory."}),e.jsx("text",{x:"20",y:"85",fill:"#38bdf8",fontSize:"8 font-mono",children:"vault/root_doc.pdf -> MATCHED"}),e.jsx("text",{x:"20",y:"105",fill:"#fca5a5",fontSize:"8 font-mono",children:"vault/2026/q1/nested.pdf -> SKIPPED"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"30",y:"155",fill:"#38bdf8",fontSize:"9 font-bold",children:"Single-Level Scope:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Does not descend into nested child subfolders."})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:'Recursive `path.rglob("*.pdf")`'}),e.jsx("text",{x:"20",y:"65",fill:"#cbd5e1",fontSize:"8 font-mono",children:"Recursively traverses entire folder tree."}),e.jsx("text",{x:"20",y:"85",fill:"#34d399",fontSize:"8 font-mono",children:"vault/root_doc.pdf -> MATCHED"}),e.jsx("text",{x:"20",y:"105",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"vault/2026/q1/nested.pdf -> MATCHED"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"30",y:"155",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Deep Recursive Search:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Yields Path objects from all arbitrary depth subdirectories."})]})]})})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Digital Document Vault & Path Inspector"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Configure campus dossiers, toggle extensions, select pathlib operations, and inspect live path decomposition structures:"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"1. Select Pathlib Action Trigger:"}),e.jsx("div",{className:"grid grid-cols-2 gap-1.5 bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:[{id:"DECOMPOSE",label:"1. Decompose Path"},{id:"WITH_SUFFIX",label:"2. with_suffix()"},{id:"WRITE_READ",label:"3. write_text() / read"},{id:"RGLOB",label:"4. rglob('*.pdf')"}].map(t=>e.jsx("button",{onClick:()=>S(t.id),className:o("py-1.5 rounded transition-all",m===t.id?"bg-teal-900/60 text-teal-300 font-bold border border-teal-700/80":"text-slate-400 hover:text-white"),children:t.label},t.id))})]}),e.jsxs("div",{className:"space-y-1.5 pt-1",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold",children:"2. Campus Node:"}),e.jsx("div",{className:"flex bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:["barrackpore","kolkata"].map(t=>e.jsxs("button",{onClick:()=>N(t),className:o("flex-1 py-1 rounded transition-all capitalize",r===t?"bg-cyan-900/60 text-cyan-300 font-bold border border-cyan-700/80":"text-slate-400 hover:text-white"),children:[t," Campus"]},t))})]}),e.jsxs("div",{className:"space-y-1.5 pt-1",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-purple-400 font-bold",children:"3. Extension & Dossier Type:"}),e.jsx("div",{className:"flex bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:[".kyc.pdf",".json",".csv",".tar.gz"].map(t=>e.jsx("button",{onClick:()=>P(t),className:o("flex-1 py-1 rounded transition-all",x===t?"bg-purple-900/60 text-purple-300 font-bold border border-purple-700/80":"text-slate-400 hover:text-white"),children:t},t))})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs font-mono space-y-1",children:[e.jsx("div",{className:"text-slate-400 text-[10px] uppercase font-bold",children:"Active Path Object:"}),e.jsxs("div",{className:"text-teal-300 text-[11px] break-all font-bold",children:['Path("',i,'")']})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs space-y-1",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:"Generated Python Pathlib Code:"}),e.jsx("pre",{className:"text-teal-300 text-[11px] leading-relaxed break-all font-mono overflow-x-auto",children:p})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[160px] font-mono text-xs space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-[10px] font-bold uppercase text-slate-400",children:[e.jsx("span",{children:"Path Object Inspection:"}),e.jsx("span",{className:"text-emerald-400",children:"Pure Instance"})]}),e.jsx("pre",{className:"text-slate-200 text-[11px] leading-relaxed font-mono",children:JSON.stringify(h,null,2)})]})]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master `pathlib.Path` Method Reference Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Pathlib Method / Property"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Category"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Return Type"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Primary Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"`p.with_suffix(new_ext)`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Transformation"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"`Path`"}),e.jsx("td",{className:"py-3 px-4",children:"Changing file extension safely"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"`p.read_text(encoding)`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"File I/O"}),e.jsx("td",{className:"py-3 px-4 text-cyan-300",children:"`str`"}),e.jsx("td",{className:"py-3 px-4",children:"One-liner text reading without `with open()`"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"`p.mkdir(parents, exist_ok)`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Directory CRUD"}),e.jsx("td",{className:"py-3 px-4 text-purple-300",children:"`None`"}),e.jsx("td",{className:"py-3 px-4",children:"Idempotent recursive folder tree creation"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"`p.rglob(pattern)`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Search"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"`Iterator[Path]`"}),e.jsx("td",{className:"py-3 px-4",children:"Deep recursive pattern file searching"})]})]})]})})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating pathlib fundamentals, file I/O, globbing/pattern search, and institutional digital document vaults:"}),e.jsx(k,{files:[{filename:"pathlib_object_oriented_path_fundamentals.py",code:O,description:"Path instantiation, the slash operator, and path decomposition."},{filename:"pathlib_filesystem_io_and_methods.py",code:I,description:"path.read_text, path.write_text, mkdir, and unlink."},{filename:"pathlib_globbing_and_pattern_matching.py",code:R,description:"iterdir, glob, rglob, and relative_to."},{filename:"institutional_pathlib_document_vault_manager.py",code:D,description:"Digital document vault management, student dossier directories, and rglob audits."}]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"}),' Trap 1: Omission of `encoding="utf-8"`']}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-rose-300 font-mono",children:"p.read_text()"})," without encoding defaults to Windows ",e.jsx("code",{className:"text-rose-300",children:"cp1252"}),", causing ",e.jsx("code",{className:"text-slate-300",children:"UnicodeDecodeError"})," on international data."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always pass ",e.jsx("code",{className:"text-emerald-300",children:'encoding="utf-8"'}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: String Concatenation on Path Objects"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-amber-300 font-mono",children:'p + "/file.txt"'})," fails with ",e.jsx("code",{className:"text-slate-300 font-mono",children:"TypeError: unsupported operand type for +: 'WindowsPath' and 'str'"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use the slash operator: ",e.jsx("code",{className:"text-emerald-300",children:'p / "file.txt"'}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Missing `parents=True` in `mkdir()`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-purple-300 font-mono",children:"p.mkdir()"})," on a multi-level path raises ",e.jsx("code",{className:"text-slate-300 font-mono",children:"FileNotFoundError"})," if parent folders do not exist."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Specify ",e.jsx("code",{className:"text-emerald-300",children:"p.mkdir(parents=True, exist_ok=True)"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Non-Idempotent `unlink()`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"p.unlink()"})," raises ",e.jsx("code",{className:"text-slate-300 font-mono",children:"FileNotFoundError"})," if the target file has already been deleted."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Pass ",e.jsx("code",{className:"text-emerald-300",children:"p.unlink(missing_ok=True)"}),"."]})]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering pathlib.Path, slash operator, stem vs suffix, read_text, mkdir, and rglob:"}),e.jsx(E,{questions:M})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with pathlib anatomy rules, slash operator recipes, and digital vault templates:"}),e.jsx("div",{className:"mb-10",children:e.jsx(A,{content:z,filename:"python_topic1_pathlib_modern_paths_notes.txt",title:"Print Topic 1 Study Notes"})}),e.jsx(C,{})]})]})]})}export{Y as default};
