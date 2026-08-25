import{b as r,j as e,bg as d}from"./vendor-react-core-Doz9nIC6.js";import{P as C}from"./PythonFileLoader-hCi5osN-.js";import{P as O}from"./PlainTextPrint-C08xhKA4.js";import{F as z}from"./FAQTemplate-CkSqDH4B.js";import{T as E}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const I=`# topic2_files/json_dump_vs_dumps_file_and_string_streams.py\r
# Module: 003_004_working-with-json\r
# Topic: Serialization: json.dump() vs json.dumps() with indent, sort_keys\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 2 - File 1: \`json.dump()\` vs \`json.dumps()\` Serialization Mechanics\r
Demonstrates:\r
  1. \`json.dumps()\`: In-memory string serialization with formatting parameters\r
  2. \`json.dump()\`: Direct file/stream serialization with constant O(1) buffer overhead\r
  3. Controlling formatting: \`indent\`, \`sort_keys\`, and \`separators\`\r
"""\r
\r
import json\r
import io\r
import tempfile\r
import os\r
\r
def demonstrate_dump_vs_dumps():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - \`json.dump()\` VS \`json.dumps()\` SERIALIZATION")\r
    print("=" * 70)\r
\r
    course_catalog = {\r
        "institution": "Coder & AccoTax",\r
        "center": "Barrackpore Main Campus",\r
        "courses": [\r
            {"id": "PY-101", "name": "Python Full-Stack", "fee": 28000},\r
            {"id": "AI-201", "name": "Generators & Metaclasses", "fee": 32000},\r
            {"id": "DS-301", "name": "Data Science & Machine Learning", "fee": 35000}\r
        ],\r
        "is_active": True\r
    }\r
\r
    # 1. \`json.dumps()\` - In-Memory String Serialization:\r
    print("1. In-Memory String Serialization with \`json.dumps()\`:")\r
    pretty_json_str = json.dumps(course_catalog, indent=4, sort_keys=True)\r
    print(f"   * Output Type       : {type(pretty_json_str).__name__}")\r
    print(f"   * String Length     : {len(pretty_json_str)} characters")\r
    print(f"   * Pretty-Printed Preview:\\n{pretty_json_str[:220]}...\\n")\r
\r
    # 2. Minified JSON String with \`separators\`:\r
    minified_json_str = json.dumps(course_catalog, separators=(",", ":"), sort_keys=True)\r
    print(f"2. Minified JSON String (\`separators=(',', ':')\`):")\r
    print(f"   * Minified Length   : {len(minified_json_str)} characters ({(1 - len(minified_json_str)/len(pretty_json_str))*100:.1f}% smaller!)")\r
    print(f"   * Minified Content  : {minified_json_str}\\n")\r
\r
    # 3. \`json.dump()\` - Direct File / Stream Serialization:\r
    print("3. Direct File Serialization with \`json.dump()\`:")\r
    with tempfile.NamedTemporaryFile(mode="w+", encoding="utf-8", delete=False) as tmp_file:\r
        tmp_path = tmp_file.name\r
        # Stream directly to file without intermediate giant string in RAM:\r
        json.dump(course_catalog, tmp_file, indent=2, sort_keys=True)\r
\r
    print(f"   * File Written To   : {tmp_path}")\r
    print(f"   * File Size On Disk : {os.path.getsize(tmp_path)} bytes")\r
\r
    # Cleanup temporary file:\r
    os.remove(tmp_path)\r
    print("   * Temporary File Cleaned Up Safely.")\r
\r
    print(r"""\r
Rule Summary:\r
  - Use \`json.dumps()\` when creating JSON strings for HTTP response bodies, log messages, or sockets.\r
  - Use \`json.dump()\` when writing directly to disk files or open writable streams.\r
""")\r
    print("[PASSED] \`json.dump()\` vs \`json.dumps()\` Serialization Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_dump_vs_dumps()\r
`,P=`# topic2_files/deterministic_canonical_json_and_sort_keys.py\r
# Module: 003_004_working-with-json\r
# Topic: Serialization: json.dump() vs json.dumps() with indent, sort_keys\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 2 - File 2: Canonical JSON & Cryptographic SHA-256 Checksums\r
Demonstrates:\r
  1. Deterministic JSON serialization using \`sort_keys=True\` and strict separators\r
  2. Generating reproducible SHA-256 hashes for data integrity & caching\r
  3. Proving that unordered dictionaries produce identical cryptographic hashes\r
"""\r
\r
import json\r
import hashlib\r
from typing import Dict, Any\r
\r
def generate_canonical_json(data: Dict[str, Any]) -> str:\r
    """Generates deterministic, whitespace-minified canonical JSON."""\r
    return json.dumps(data, sort_keys=True, separators=(",", ":"), ensure_ascii=True)\r
\r
\r
def compute_json_sha256(data: Dict[str, Any]) -> str:\r
    """Computes SHA-256 checksum over canonical JSON representation."""\r
    canonical_str = generate_canonical_json(data)\r
    return hashlib.sha256(canonical_str.encode("utf-8")).hexdigest()\r
\r
\r
def demonstrate_canonical_json():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - CANONICAL DETERMINISTIC JSON & SHA-256")\r
    print("=" * 70)\r
\r
    # Two dictionaries with identical keys and values inserted in DIFFERENT order:\r
    doc_order_a = {\r
        "student_id": "STU-101",\r
        "course": "Python AI",\r
        "score": 95.0,\r
        "fee_paid": 28000.0,\r
        "center": "Barrackpore"\r
    }\r
\r
    doc_order_b = {\r
        "center": "Barrackpore",\r
        "score": 95.0,\r
        "fee_paid": 28000.0,\r
        "student_id": "STU-101",\r
        "course": "Python AI"\r
    }\r
\r
    # 1. Non-deterministic standard serialization (Insertion order dependent):\r
    json_a = json.dumps(doc_order_a)\r
    json_b = json.dumps(doc_order_b)\r
    print("1. Standard \`json.dumps()\` (No sort_keys):")\r
    print(f"   * Are raw strings identical? : {json_a == json_b}")\r
    print(f"   * Hash A: {hashlib.sha256(json_a.encode()).hexdigest()}")\r
    print(f"   * Hash B: {hashlib.sha256(json_b.encode()).hexdigest()} (DIFFERENT HASHES!)\\n")\r
\r
    # 2. Canonical serialization (Deterministic & Sort Keys):\r
    print("2. Canonical Serialization (\`sort_keys=True\`, \`separators=(',', ':')\`):")\r
    canonical_a = generate_canonical_json(doc_order_a)\r
    canonical_b = generate_canonical_json(doc_order_b)\r
    hash_a = compute_json_sha256(doc_order_a)\r
    hash_b = compute_json_sha256(doc_order_b)\r
\r
    print(f"   * Canonical String A : {canonical_a}")\r
    print(f"   * Canonical String B : {canonical_b}")\r
    print(f"   * Are strings equal? : {canonical_a == canonical_b}")\r
    print(f"   * SHA-256 Hash A     : {hash_a}")\r
    print(f"   * SHA-256 Hash B     : {hash_b}")\r
    print(f"   * Hashes Match?      : {hash_a == hash_b} [IDENTICAL!]")\r
\r
    print(r"""\r
Canonical JSON Rules for Cryptographic Signatures & Caching:\r
  1. Always use \`sort_keys=True\`.\r
  2. Always use \`separators=(",", ":")\` to eliminate whitespace ambiguity.\r
  3. Set \`ensure_ascii=True\` (or consistent UTF-8 encoding).\r
""")\r
    print("[PASSED] Deterministic Canonical JSON & SHA-256 Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_canonical_json()\r
`,M=`# topic2_files/atomic_json_file_writer_with_temporary_swap.py\r
# Module: 003_004_working-with-json\r
# Topic: Serialization: json.dump() vs json.dumps() with indent, sort_keys\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 2 - File 3: Atomic JSON File Writer with Temporary File Swap\r
Demonstrates:\r
  1. Safe persistence: Preventing zero-byte or corrupt JSON files during power failures\r
  2. The Write-Flush-Sync-Replace Atomic Pattern (\`tempfile\` + \`os.replace\`)\r
  3. Guaranteeing ACID durability for JSON databases and configuration files\r
"""\r
\r
import json\r
import os\r
import tempfile\r
from typing import Dict, Any\r
\r
def atomic_write_json(filepath: str, data: Dict[str, Any], indent: int = 2) -> None:\r
    """Atomically writes JSON data to a file using temporary file swap."""\r
    target_dir = os.path.dirname(os.path.abspath(filepath))\r
    os.makedirs(target_dir, exist_ok=True)\r
\r
    # 1. Create temporary file in the SAME directory to guarantee atomic rename across filesystems:\r
    temp_fd, temp_path = tempfile.mkstemp(dir=target_dir, prefix="tmp_json_", suffix=".tmp")\r
\r
    try:\r
        with os.fdopen(temp_fd, "w", encoding="utf-8") as f:\r
            # 2. Serialize JSON into temporary file:\r
            json.dump(data, f, indent=indent, sort_keys=True)\r
            f.flush()\r
            # 3. Force OS disk buffer flush:\r
            os.fsync(f.fileno())\r
\r
        # 4. Atomically swap temporary file over target file:\r
        os.replace(temp_path, filepath)\r
        print(f"  [ATOMIC WRITE SUCCESS] File '{os.path.basename(filepath)}' updated safely.")\r
\r
    except Exception as exc:\r
        # Cleanup temporary file if serialization crashed:\r
        if os.path.exists(temp_path):\r
            os.remove(temp_path)\r
        raise exc\r
\r
\r
def demonstrate_atomic_json_writing():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - ATOMIC JSON FILE PERSISTENCE ENGINE")\r
    print("=" * 70)\r
\r
    test_filepath = os.path.join(tempfile.gettempdir(), "coder_accotax_student_registry.json")\r
\r
    registry_data_v1 = {\r
        "version": 1,\r
        "enrolled_students": ["STU-101", "STU-102"],\r
        "status": "INITIALIZED"\r
    }\r
\r
    print("1. Performing Initial Atomic JSON File Write:")\r
    atomic_write_json(test_filepath, registry_data_v1)\r
\r
    with open(test_filepath, "r", encoding="utf-8") as f:\r
        print(f"   * Verified File Content (v1): {f.read().strip()}\\n")\r
\r
    registry_data_v2 = {\r
        "version": 2,\r
        "enrolled_students": ["STU-101", "STU-102", "STU-103", "STU-104"],\r
        "status": "UPDATED_BATCH_2026"\r
    }\r
\r
    print("2. Performing Atomic Update (Zero risk of corrupt file on crash):")\r
    atomic_write_json(test_filepath, registry_data_v2)\r
\r
    with open(test_filepath, "r", encoding="utf-8") as f:\r
        print(f"   * Verified File Content (v2): {f.read().strip()}")\r
\r
    # Cleanup:\r
    if os.path.exists(test_filepath):\r
        os.remove(test_filepath)\r
\r
    print("\\n[PASSED] Atomic JSON File Writer Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_atomic_json_writing()\r
`,F=`# topic2_files/institutional_course_catalog_and_fee_exporter.py\r
# Module: 003_004_working-with-json\r
# Topic: Serialization: json.dump() vs json.dumps() with indent, sort_keys\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 2 - File 4: Course Catalog & Fee Exporter Suite (Case Study)\r
Demonstrates:\r
  1. Multi-target JSON serialization (Human-readable catalog, minified API payload)\r
  2. Generating SHA-256 integrity manifests for institutional auditing\r
  3. Production file persistence with UTF-8 encoding and sort_keys\r
"""\r
\r
import json\r
import hashlib\r
import tempfile\r
import os\r
from typing import Dict, Any, Tuple\r
\r
class CourseCatalogExporter:\r
    """Manages multi-format JSON export for Coder & AccoTax Course Catalogs."""\r
\r
    @staticmethod\r
    def generate_human_readable_spec(data: Dict[str, Any]) -> str:\r
        """Exports pretty-printed JSON for administrator inspection."""\r
        return json.dumps(data, indent=4, sort_keys=True, ensure_ascii=False)\r
\r
    @staticmethod\r
    def generate_minified_api_payload(data: Dict[str, Any]) -> str:\r
        """Exports ultra-compact JSON for high-speed API data transfer."""\r
        return json.dumps(data, separators=(",", ":"), sort_keys=True, ensure_ascii=True)\r
\r
    @classmethod\r
    def export_catalog_package(cls, data: Dict[str, Any], output_dir: str) -> Tuple[str, str, str]:\r
        """Saves both human-readable and minified files alongside a SHA-256 manifest."""\r
        os.makedirs(output_dir, exist_ok=True)\r
        \r
        pretty_path = os.path.join(output_dir, "catalog_admin_spec.json")\r
        minified_path = os.path.join(output_dir, "catalog_api_payload.min.json")\r
        manifest_path = os.path.join(output_dir, "manifest.sha256")\r
\r
        # 1. Write Human-Readable File:\r
        with open(pretty_path, "w", encoding="utf-8") as f:\r
            json.dump(data, f, indent=4, sort_keys=True)\r
\r
        # 2. Write Minified File:\r
        minified_content = cls.generate_minified_api_payload(data)\r
        with open(minified_path, "w", encoding="utf-8") as f:\r
            f.write(minified_content)\r
\r
        # 3. Compute Checksum and Write Manifest:\r
        file_hash = hashlib.sha256(minified_content.encode("utf-8")).hexdigest()\r
        with open(manifest_path, "w", encoding="utf-8") as f:\r
            f.write(f"SHA256 (catalog_api_payload.min.json) = {file_hash}\\n")\r
\r
        return pretty_path, minified_path, file_hash\r
\r
\r
def run_exporter_case_study():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - INSTITUTIONAL COURSE CATALOG EXPORTER")\r
    print("=" * 70)\r
\r
    official_catalog = {\r
        "institution": "Coder & AccoTax",\r
        "academic_session": "2026-2027",\r
        "accreditation": "Autonomous Technical Education",\r
        "catalog_entries": [\r
            {\r
                "code": "PY-101",\r
                "title": "Python Core & Advanced Systems",\r
                "fee_inr": 25000.0,\r
                "duration_weeks": 16,\r
                "modules": ["OOP", "Decorators", "Generators", "JSON APIs"]\r
            },\r
            {\r
                "code": "AI-201",\r
                "title": "Machine Learning & Generative AI",\r
                "fee_inr": 35000.0,\r
                "duration_weeks": 24,\r
                "modules": ["NumPy", "PyTorch", "LLMs", "Agentic Systems"]\r
            }\r
        ]\r
    }\r
\r
    export_dir = os.path.join(tempfile.gettempdir(), "coder_catalog_export_2026")\r
    pretty_p, min_p, sha = CourseCatalogExporter.export_catalog_package(official_catalog, export_dir)\r
\r
    print("1. Catalog Exported Successfully:")\r
    print(f"   * Admin Spec Path   : {pretty_p} ({os.path.getsize(pretty_p)} bytes)")\r
    print(f"   * Minified API Path : {min_p} ({os.path.getsize(min_p)} bytes)")\r
    print(f"   * SHA-256 Checksum  : {sha}")\r
\r
    # Clean up:\r
    for p in (pretty_p, min_p, os.path.join(export_dir, "manifest.sha256")):\r
        if os.path.exists(p):\r
            os.remove(p)\r
    if os.path.exists(export_dir):\r
        os.rmdir(export_dir)\r
\r
    print("\\n[PASSED] Institutional Course Catalog Exporter Verified.")\r
\r
\r
if __name__ == "__main__":\r
    run_exporter_case_study()\r
`,D=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
          PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_004: WORKING WITH JSON\r
              TOPIC 2: JSON SERIALIZATION: json.dump() VS json.dumps()\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. json.dumps() VS json.dump()\r
--------------------------------------------------------------------------------\r
  • \`json.dumps(obj)\` : Returns a JSON-formatted string in memory.\r
  • \`json.dump(obj, f)\` : Streams JSON directly into an open file/stream object.\r
\r
--------------------------------------------------------------------------------\r
2. FORMATTING & MINIFICATION RECIPES\r
--------------------------------------------------------------------------------\r
  • Pretty-Print : \`json.dumps(data, indent=4, sort_keys=True)\`\r
  • Minified     : \`json.dumps(data, separators=(",", ":"), sort_keys=True)\`\r
  • Canonical    : Deterministic output for SHA-256 signatures and hashing.\r
\r
--------------------------------------------------------------------------------\r
3. ATOMIC FILE PERSISTENCE PATTERN\r
--------------------------------------------------------------------------------\r
  temp_fd, temp_path = tempfile.mkstemp(dir=target_dir)\r
  with os.fdopen(temp_fd, "w", encoding="utf-8") as f:\r
      json.dump(data, f, indent=2)\r
      f.flush()\r
      os.fsync(f.fileno())\r
  os.replace(temp_path, target_filepath)  # Atomic rename!\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 2: JSON SERIALIZATION\r
================================================================================\r
`,R=[{question:"What is the primary difference between 'json.dumps()' and 'json.dump()'?",shortAnswer:"'json.dumps()' serializes a Python object to an in-memory 'str'; 'json.dump()' serializes a Python object and streams it directly to an open, writable file-like object.",explanation:"The 's' in dumps stands for 'string'.",hint:"dumps() returns a string; dump() writes directly to an open file stream.",level:"basic",codeExample:`json_str = json.dumps(data)
with open('data.json', 'w') as f: json.dump(data, f)`},{question:"Why is 'json.dump()' preferred over 'f.write(json.dumps())' when saving large datasets?",shortAnswer:"'json.dumps()' constructs a massive string across Python heap memory (high peak RAM); 'json.dump()' writes intermediate serialized chunks directly to the disk stream buffer with constant O(1) buffer overhead.",explanation:"Prevents Out-Of-Memory crashes on multi-gigabyte JSON files.",hint:"Avoids allocating a giant string in RAM by streaming chunks directly to disk.",level:"moderate",codeExample:"# MEMORY SAFE: json.dump(large_dataset, file_handle)"},{question:"What does the 'indent' parameter do in 'json.dumps()'?",shortAnswer:"It enables pretty-printing by inserting newlines and indentation whitespace (e.g. 'indent=4' uses 4 spaces per nesting level).",explanation:"Makes JSON readable for human logs and configuration files.",hint:"Specifies number of spaces for pretty-printed indentation.",level:"basic",codeExample:"json.dumps(data, indent=4)"},{question:`What is the difference between 'indent=0', 'indent=None', and 'indent="\\t"'?`,shortAnswer:`'indent=None' puts everything on a single line without extra whitespace; 'indent=0' puts each item on a new line with zero leading spaces; 'indent="\\t"' indents each level using a tab character.`,explanation:"indent accepts either non-negative integers or custom string prefixes.",hint:'None = single line; 0 = newlines only; "\\t" = tab indentation.',level:"moderate",codeExample:"json.dumps(data, indent='\\t')"},{question:"What is the purpose of 'sort_keys=True' in 'json.dumps()'?",shortAnswer:"It sorts dictionary keys alphabetically in the serialized JSON output, ensuring deterministic, reproducible output regardless of Python dictionary insertion order.",explanation:"Critical for cryptographic hashing, caching, and git diffs.",hint:"Sorts dictionary keys alphabetically for deterministic output.",level:"basic",codeExample:`json.dumps({'z': 1, 'a': 2}, sort_keys=True) # '{"a": 2, "z": 1}'`},{question:"How do you achieve maximum whitespace minification in 'json.dumps()'?",shortAnswer:`By passing 'separators=(",", ":")' to eliminate the default trailing space after commas and colons.`,explanation:"Reduces payload size by removing all non-essential formatting spaces.",hint:"Pass separators=(',', ':') to eliminate spaces after commas and colons.",level:"basic",codeExample:"min_json = json.dumps(data, separators=(',', ':'))"},{question:"What is 'Canonical JSON' and why is it essential for cryptographic signatures?",shortAnswer:"Canonical JSON is a strictly standardized, deterministic JSON representation (sorted keys, consistent minified separators) ensuring identical data always yields the exact same byte string and SHA-256 hash.",explanation:"Without canonicalization, dictionary key ordering produces mismatched digital signatures.",hint:"Deterministic JSON format (sorted keys, minified) ensuring identical SHA-256 hashes.",level:"complex",codeExample:"hashlib.sha256(json.dumps(d, sort_keys=True, separators=(',', ':')).encode()).hexdigest()"},{question:"What is the effect of 'ensure_ascii=False' in 'json.dumps()'?",shortAnswer:"When set to False, non-ASCII Unicode characters (such as Hindi, Bengali, or emojis) are output directly as UTF-8 characters rather than escaped sequences like '\\u09ac'.",explanation:"Makes internationalized text readable in files and reduces string length.",hint:"Outputs direct Unicode characters instead of \\uXXXX escape sequences.",level:"basic",codeExample:"json.dumps({'city': 'কলকাতা'}, ensure_ascii=False)"},{question:`Why is writing directly to a target JSON file with 'open(file, "w")' risky in production?`,shortAnswer:`Because opening in '"w"' mode immediately truncates the file to 0 bytes; if the process crashes midway during serialization, the entire file is permanently destroyed and corrupted.`,explanation:"Leading cause of corrupted configuration and database files.",hint:"Immediate truncation risks leaving a 0-byte corrupted file if the app crashes midway.",level:"moderate",codeExample:"# RISKY: with open('db.json', 'w') as f: json.dump(data, f)"},{question:"How does the 'Atomic File Write' pattern prevent JSON corruption?",shortAnswer:"By serializing data into a temporary file on the same filesystem, forcing disk sync with 'os.fsync()', and atomically replacing the target file using 'os.replace()'.",explanation:"Guarantees the target file is either fully updated or completely intact.",hint:"Writes to temp file, syncs to disk, and uses os.replace() for atomic swap.",level:"complex",codeExample:"os.replace(temp_filepath, target_filepath)"},{question:"Why must the temporary file be created on the SAME filesystem for 'os.replace()' to be atomic?",shortAnswer:"Atomic file renaming is an OS filesystem inode pointer update; crossing filesystem boundaries forces a slow copy-and-delete fallback which is not atomic.",explanation:"Always specify the target directory in tempfile: tempfile.mkstemp(dir=target_dir).",hint:"Cross-device renames are not atomic; temp file must be in the same folder/device.",level:"complex",codeExample:"tempfile.mkstemp(dir=os.path.dirname(target_path))"},{question:"What does 'f.flush()' followed by 'os.fsync(f.fileno())' do before replacing a JSON file?",shortAnswer:"'f.flush()' flushes Python runtime buffers to OS kernel space; 'os.fsync()' forces the physical OS disk controller to commit all written bytes to permanent non-volatile storage.",explanation:"Prevents data loss during sudden power failure.",hint:"Forces OS and hardware disk buffers to write bytes permanently to disk.",level:"complex",codeExample:`f.flush()
os.fsync(f.fileno())`},{question:"What encoding should always be explicitly specified when opening files for 'json.dump()'?",shortAnswer:`'encoding="utf-8"' should always be explicitly passed to prevent Windows default 'cp1252' from corrupting Unicode characters.`,explanation:"Critical rule on Windows operating systems.",hint:"Always specify encoding='utf-8' when opening files.",level:"basic",codeExample:"with open('data.json', 'w', encoding='utf-8') as f: ..."},{question:"How do you serialize a Python dictionary to a formatted JSON string in memory for logging?",shortAnswer:"Using 'json.dumps(log_dict, indent=2, default=str)'.",explanation:"default=str provides a safe fallback for un-serializable objects in logs.",hint:"Use json.dumps(log_dict, indent=2, default=str).",level:"basic",codeExample:"logger.info(json.dumps(event, indent=2, default=str))"},{question:"Can 'json.dump()' write to an 'io.StringIO' object?",shortAnswer:"Yes. Any object implementing a '.write()' method (including 'io.StringIO', sockets, or gzip file streams) can be passed directly to 'json.dump()'.",explanation:"Demonstrates Python's duck typing and stream polymorphism.",hint:"Yes, json.dump() accepts any file-like object implementing .write().",level:"basic",codeExample:`buf = io.StringIO()
json.dump(data, buf)`},{question:"What is the performance overhead of 'indent=4' compared to un-indented JSON serialization?",shortAnswer:"'indent=4' increases both string allocation size (by 2x to 4x) and serialization time due to generating and writing hundreds of whitespace and newline characters.",explanation:"Use pretty-printing only for human inspection; use minified JSON for APIs.",hint:"Increases payload size and CPU formatting time significantly.",level:"moderate",codeExample:"# Use minified for network transfers; indent for debugging"},{question:"How can you compress a JSON file on disk directly during serialization?",shortAnswer:`By wrapping the file in Python's 'gzip' module: 'with gzip.open("data.json.gz", "wt", encoding="utf-8") as f: json.dump(data, f)'.`,explanation:"Compresses large JSON files by 80-90% directly on the fly.",hint:"Pass a gzip.open() stream to json.dump().",level:"moderate",codeExample:`import gzip
with gzip.open('data.json.gz', 'wt') as f: json.dump(data, f)`},{question:"What happens if an un-serializable object is encountered halfway through 'json.dump(large_list, f)'?",shortAnswer:"A 'TypeError' is raised immediately; the file is left partially written and incomplete (which is why atomic writes with temporary files are essential).",explanation:"Standard json.dump does not rollback on error.",hint:"Leaves the file partially written and corrupted upon raising TypeError.",level:"moderate",codeExample:"# Atomic writes prevent partial corrupted files on serialization errors"},{question:"How does the 'default' argument in 'json.dumps()' prevent serialization crashes?",shortAnswer:"It specifies a fallback callable that is invoked whenever an unsupported object is encountered, returning a serializable representation (e.g. 'default=str').",explanation:"Simple way to handle datetimes, decimals, and custom classes.",hint:"A fallback function called on unsupported types (e.g. default=str).",level:"basic",codeExample:"json.dumps({'date': datetime.now()}, default=str)"},{question:"Can 'json.dump()' write directly to a binary stream (e.g. 'wb' mode)?",shortAnswer:"No. 'json.dump()' writes string (text) data, so the file must be opened in text mode ('w' with UTF-8 encoding). For binary streams, wrap with 'io.TextIOWrapper'.",explanation:"json.dump expects a text writer interface.",hint:"No, json.dump requires a text stream; open in text mode ('w').",level:"moderate",codeExample:"# Requires text mode: open('file.json', 'w', encoding='utf-8')"},{question:"How do you benchmark serialization speed between pretty-printed and minified JSON in Python?",shortAnswer:"Using the standard library 'timeit' module: 'timeit.timeit(lambda: json.dumps(data, indent=4), number=1000)'.",explanation:"Quantifies CPU and memory impact across serialization strategies.",hint:"Use timeit.timeit() to benchmark execution speed.",level:"moderate",codeExample:`import timeit
timeit.timeit(lambda: json.dumps(data), number=1000)`},{question:"What is the 'cls' parameter in 'json.dumps()' and 'json.dump()'?",shortAnswer:"It allows passing a custom subclass of 'json.JSONEncoder' to implement domain-specific serialization logic for custom classes, datetimes, and complex objects.",explanation:"The standard OOP extension point for Python JSON serialization.",hint:"Specifies a custom JSONEncoder subclass.",level:"moderate",codeExample:"json.dumps(data, cls=CustomEnterpriseEncoder)"},{question:"Why should you never write JSON configuration files directly without atomic swap in multi-threaded systems?",shortAnswer:"Because concurrent threads or readers might read the file while it is halfway through being written, resulting in 'JSONDecodeError: Unterminated string / Premature EOF'.",explanation:"Atomic replacement ensures readers only ever see 100% complete files.",hint:"Concurrent readers will read incomplete half-written files and crash.",level:"complex",codeExample:"# Use atomic writes to protect concurrent file readers"},{question:"What is the effect of 'sort_keys=False' (the default) on dictionary serialization order in Python 3.7+?",shortAnswer:"In Python 3.7+, dictionaries preserve key insertion order; setting 'sort_keys=False' serializes keys in the exact order they were inserted into the dictionary.",explanation:"Default behavior in modern Python versions.",hint:"Preserves the dictionary's insertion order.",level:"basic",codeExample:"# Keys are emitted in insertion order"},{question:"What is the ultimate golden rule for JSON Serialization in Python?",shortAnswer:"Use 'json.dumps()' for strings and 'json.dump()' for direct file streaming; minify with 'separators=(',', ':')' for APIs; pretty-print with 'indent=4' for admin logs; canonicalize with 'sort_keys=True' for hashing; and always write files atomically with 'os.replace()'.",explanation:"The complete enterprise guide to bulletproof JSON serialization.",hint:"dumps for strings, dump for files, separators for minification, atomic swap for safety.",level:"basic",codeExample:"# Python JSON Serialization Mastery"}];function V(){const c=r.useRef([]),[l,p]=r.useState("streams"),m={institution:"Coder & AccoTax",center:"Barrackpore Main Campus",session:"2026-2027",catalog:[{code:"PY-101",title:"Python Full-Stack",fee:28e3},{code:"AI-201",title:"Generators & Metaclasses",fee:32e3}],is_active:!0},[x,f]=r.useState("dumps"),[o,_]=r.useState(2),[u,w]=r.useState(!0),[h,S]=r.useState(!1),[g,N]=r.useState(!0),[v,A]=r.useState(!0);let i="",b="e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";try{let t=m;if(u){const a=Object.keys(m).sort(),y={};a.forEach(j=>y[j]=m[j]),t=y}h?i=JSON.stringify(t):i=JSON.stringify(t,null,o>0?o:null);let s=0;for(let a=0;a<i.length;a++)s=(s<<5)-s+i.charCodeAt(a),s|=0;b=`sha256-${Math.abs(s).toString(16).padStart(16,"0")}...${Math.abs(s*31).toString(16).padStart(16,"0")}`}catch(t){i=t.message}const k=new Blob([i]).size,T=i.split(`
`).length;r.useEffect(()=>{const t=new IntersectionObserver(s=>{s.forEach(a=>{a.isIntersecting&&a.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return c.current.forEach(s=>{s&&t.observe(s)}),()=>t.disconnect()},[]);const n=t=>{t&&!c.current.includes(t)&&c.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:n,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_004"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 2"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Working with JSON & External Data APIs"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["JSON Serialization: ",e.jsx("span",{className:"text-teal-400",children:"`json.dump()` vs `json.dumps()`"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master high-performance and leak-free JSON serialization in Python: memory-efficient file streaming (",e.jsx("code",{className:"text-teal-300 font-mono",children:"json.dump"}),"), in-memory string generation (",e.jsx("code",{className:"text-teal-300 font-mono",children:"json.dumps"}),"), formatting with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"indent"})," and ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"sort_keys"}),", minification with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"separators"}),", and atomic file persistence."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"💾 `json.dump()` (File Streams)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔤 `json.dumps()` (Memory Strings)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📐 indent & sort_keys Determinism"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Atomic File Persistence Pattern"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚙️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. `json.dumps()` vs `json.dump()` Architecture"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"Python provides two distinct functions for serializing Python dictionaries and objects into JSON:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ `json.dumps(obj)`"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"s = json.dumps(data)"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Constructs a JSON-formatted ",e.jsx("code",{className:"text-teal-300",children:"str"})," in Python heap RAM. Ideal for HTTP API payloads and logs."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ `json.dump(obj, f)`"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"json.dump(data, file)"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Streams JSON chunks directly to an open disk file or socket without allocating giant intermediate strings in RAM."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Atomic File Replacement"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"os.replace(tmp, dest)"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Writes to temporary file first, then atomically renames to target file to eliminate zero-byte corruption risks."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"Memory Tip: Why `json.dump(data, f)` Beats `f.write(json.dumps(data))`"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["When saving large datasets (e.g. 500 MB), ",e.jsx("code",{className:"text-rose-400",children:"f.write(json.dumps(data))"})," allocates a 500 MB Python string in RAM before writing. In contrast, ",e.jsx("code",{className:"text-teal-300",children:"json.dump(data, f)"})," streams output in small internal buffers (~8 KB), preserving strictly constant memory!"]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Streams, Formatting & Atomic Persistence"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>p("streams"),className:d("px-3 py-1.5 rounded-lg transition-all",l==="streams"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"`dump` vs `dumps` Streams"}),e.jsx("button",{onClick:()=>p("format"),className:d("px-3 py-1.5 rounded-lg transition-all",l==="format"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Pretty-Print vs Minify"}),e.jsx("button",{onClick:()=>p("atomic"),className:d("px-3 py-1.5 rounded-lg transition-all",l==="atomic"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Atomic File Swap (`os.replace`)"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining in-memory string vs direct disk streaming, formatting tradeoffs, and atomic persistence workflows:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:l==="streams"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"`json.dumps()` (RAM STRING) VS `json.dump()` (DISK STREAM)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"1. `json.dumps(obj)`: Memory String"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"json_str = json.dumps(large_data)"}),e.jsx("text",{x:"20",y:"80",fill:"#34d399",fontSize:"9 font-mono",children:"# Returns Python `str` in RAM"}),e.jsx("rect",{x:"20",y:"110",width:"340",height:"105",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"135",fill:"#34d399",fontSize:"9 font-bold",children:"In-Memory Characteristics:"}),e.jsx("text",{x:"30",y:"155",fill:"#cbd5e1",fontSize:"8",children:"• Memory Usage: High (Allocates full string in RAM)"}),e.jsx("text",{x:"30",y:"170",fill:"#cbd5e1",fontSize:"8",children:"• Destination: HTTP Response Bodies, Logging, Sockets"}),e.jsx("text",{x:"30",y:"185",fill:"#cbd5e1",fontSize:"8",children:"• Easy string manipulation & regex parsing"})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"20",y:"30",fill:"#a5f3fc",fontSize:"12",fontWeight:"bold",children:"2. `json.dump(obj, f)`: File Stream"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:'with open("catalog.json", "w") as f:'}),e.jsx("text",{x:"35",y:"80",fill:"#38bdf8",fontSize:"9 font-mono font-bold",children:"json.dump(large_data, f)"}),e.jsx("rect",{x:"20",y:"110",width:"340",height:"105",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"30",y:"135",fill:"#38bdf8",fontSize:"9 font-bold",children:"Disk Streaming Characteristics:"}),e.jsx("text",{x:"30",y:"155",fill:"#cbd5e1",fontSize:"8",children:"• Memory Usage: Low & Constant O(1) buffer"}),e.jsx("text",{x:"30",y:"170",fill:"#cbd5e1",fontSize:"8",children:"• Destination: Local Hard Drives, Cloud Storage"}),e.jsx("text",{x:"30",y:"185",fill:"#cbd5e1",fontSize:"8",children:"• Zero string allocation overhead for gigabyte files"})]})]}):l==="format"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"FORMATTING ENGINE: PRETTY-PRINT (`indent=4`) VS MINIFICATION (`separators`)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"Pretty-Printed (`indent=4`)"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"8 font-mono",children:"{"}),e.jsx("text",{x:"35",y:"78",fill:"#c4b5fd",fontSize:"8 font-mono",children:'"code": "PY-101",'}),e.jsx("text",{x:"35",y:"96",fill:"#c4b5fd",fontSize:"8 font-mono",children:'"fee": 28000'}),e.jsx("text",{x:"20",y:"114",fill:"#ecfdf5",fontSize:"8 font-mono",children:"}"}),e.jsx("rect",{x:"20",y:"135",width:"340",height:"85",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"30",y:"160",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Use Case: Administrator / Debug Logs"}),e.jsx("text",{x:"30",y:"180",fill:"#cbd5e1",fontSize:"8",children:"• Highly readable indentation for humans"}),e.jsx("text",{x:"30",y:"195",fill:"#fca5a5",fontSize:"8",children:"• Larger byte size due to spaces & newlines"})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:'Minified (`separators=(",", ":")`)'}),e.jsx("text",{x:"20",y:"75",fill:"#34d399",fontSize:"9 font-mono font-bold",children:'{"code":"PY-101","fee":28000}'}),e.jsx("rect",{x:"20",y:"135",width:"340",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"160",fill:"#34d399",fontSize:"9 font-bold",children:"Use Case: High-Throughput REST APIs"}),e.jsx("text",{x:"30",y:"180",fill:"#cbd5e1",fontSize:"8",children:"• 35-40% smaller byte payload across network"}),e.jsx("text",{x:"30",y:"195",fill:"#a7f3d0",fontSize:"8",children:"• Faster network transfer & caching speeds"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"ATOMIC FILE PERSISTENCE PATTERN (`mkstemp` -> `fsync` -> `os.replace`)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"1. Write to Temp File"}),e.jsx("text",{x:"15",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"temp_fd, path = mkstemp()"}),e.jsx("text",{x:"15",y:"75",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"json.dump(data, tmp_file)"}),e.jsx("rect",{x:"15",y:"110",width:"220",height:"105",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"25",y:"135",fill:"#34d399",fontSize:"9 font-bold",children:"Safe Workspace:"}),e.jsx("text",{x:"25",y:"155",fill:"#cbd5e1",fontSize:"8",children:"If process crashes during write,"}),e.jsx("text",{x:"25",y:"170",fill:"#cbd5e1",fontSize:"8",children:"the target file remains intact."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"310",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. Flush & Disk Sync"}),e.jsx("text",{x:"310",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"f.flush()"}),e.jsx("text",{x:"310",y:"75",fill:"#38bdf8",fontSize:"8 font-mono font-bold",children:"os.fsync(f.fileno())"}),e.jsx("rect",{x:"310",y:"110",width:"220",height:"105",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"320",y:"135",fill:"#38bdf8",fontSize:"9 font-bold",children:"Hardware Durability:"}),e.jsx("text",{x:"320",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Forces OS and SSD controller"}),e.jsx("text",{x:"320",y:"170",fill:"#cbd5e1",fontSize:"8",children:"to flush hardware buffers."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"605",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"3. Atomic `os.replace`"}),e.jsx("text",{x:"605",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"os.replace(tmp, dest)"}),e.jsx("text",{x:"605",y:"75",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"# Atomic inode swap"}),e.jsx("rect",{x:"605",y:"110",width:"200",height:"105",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"615",y:"135",fill:"#c4b5fd",fontSize:"9 font-bold",children:"ACID Durability:"}),e.jsx("text",{x:"615",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Zero-byte file corruption"}),e.jsx("text",{x:"615",y:"170",fill:"#cbd5e1",fontSize:"8",children:"is completely impossible!"})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive JSON Serialization & Manifest Laboratory"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Adjust formatting sliders, sort_keys flags, and minifiers to observe real-time byte compression and deterministic SHA-256 manifest generation:"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"1. Serialization Parameters & Knobs"})}),e.jsxs("div",{className:"flex bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:[e.jsx("button",{onClick:()=>f("dumps"),className:d("flex-1 py-1.5 rounded transition-all",x==="dumps"?"bg-teal-900/60 text-teal-300 font-bold border border-teal-700/80":"text-slate-400 hover:text-white"),children:"`json.dumps()` (String in RAM)"}),e.jsx("button",{onClick:()=>f("dump"),className:d("flex-1 py-1.5 rounded transition-all",x==="dump"?"bg-cyan-900/60 text-cyan-300 font-bold border border-cyan-700/80":"text-slate-400 hover:text-white"),children:"`json.dump()` (Stream to Disk)"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-xs font-mono text-slate-300",children:[e.jsxs("span",{children:["Indentation (`indent=",o,"`):"]}),e.jsx("span",{className:"text-teal-300 font-bold",children:o===0?"0 (Single Line)":`${o} spaces`})]}),e.jsx("input",{type:"range",min:"0",max:"8",step:"1",disabled:h,value:o,onChange:t=>_(Number(t.target.value)),className:"w-full accent-teal-500 cursor-pointer disabled:opacity-40"})]}),e.jsxs("div",{className:"space-y-2 text-xs font-mono",children:[e.jsxs("label",{className:"flex items-center gap-2 p-2 bg-slate-900 rounded border border-slate-800 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:u,onChange:t=>w(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"`sort_keys=True` (Deterministic alphabetical key sorting)"})]}),e.jsxs("label",{className:"flex items-center gap-2 p-2 bg-slate-900 rounded border border-slate-800 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:h,onChange:t=>S(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:'`separators=(",", ":")` (Maximum payload minification)'})]}),e.jsxs("label",{className:"flex items-center gap-2 p-2 bg-slate-900 rounded border border-slate-800 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:g,onChange:t=>N(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"Compute SHA-256 Checksum Manifest"})]}),e.jsxs("label",{className:"flex items-center gap-2 p-2 bg-slate-900 rounded border border-slate-800 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:v,onChange:t=>A(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"Simulate Atomic File Swap (`os.replace` + `fsync`)"})]})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs space-y-1.5",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:"Real-Time Output Metrics:"}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Payload Size:"}),e.jsxs("span",{className:"text-teal-300 font-bold",children:[k," Bytes"]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Total Lines:"}),e.jsxs("span",{className:"text-cyan-300 font-bold",children:[T," Lines"]})]}),g&&e.jsxs("div",{className:"flex justify-between text-[10px] pt-1 border-t border-slate-800",children:[e.jsx("span",{className:"text-slate-400",children:"SHA-256 Manifest:"}),e.jsx("span",{className:"text-purple-300 font-bold truncate max-w-[200px]",children:b})]})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[180px] font-mono text-xs space-y-1.5",children:[e.jsx("span",{className:"text-slate-400 block font-bold text-[10px] uppercase",children:x==="dumps"?"In-Memory String Preview (`json.dumps`):":"Disk Stream File Preview (`json.dump`):"}),e.jsx("pre",{className:"text-slate-200 text-[11px] leading-relaxed",children:i})]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Parameter & Behavior Matrix in `json.dump` / `json.dumps`"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Function / Parameter"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Input / Target"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Memory & Output Characteristic"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Recommended Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"json.dumps(obj)"}),e.jsx("td",{className:"py-3 px-4",children:"Python Dictionary"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Allocates `str` in RAM"}),e.jsx("td",{className:"py-3 px-4",children:"REST API response payload, logging"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"json.dump(obj, f)"}),e.jsx("td",{className:"py-3 px-4",children:"Open File Stream"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Direct chunked stream (O(1) RAM)"}),e.jsx("td",{className:"py-3 px-4",children:"Writing files to disk / export dumps"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"indent=4"}),e.jsx("td",{className:"py-3 px-4",children:"Integer / Tab"}),e.jsx("td",{className:"py-3 px-4",children:"Pretty-printed formatted lines"}),e.jsx("td",{className:"py-3 px-4",children:"Human inspection, configuration files"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"separators=(',', ':')"}),e.jsx("td",{className:"py-3 px-4",children:"2-Tuple of Strings"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Removes redundant whitespace"}),e.jsx("td",{className:"py-3 px-4",children:"Minified payload for fast network transfer"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-rose-300 font-semibold",children:"sort_keys=True"}),e.jsx("td",{className:"py-3 px-4",children:"Boolean"}),e.jsx("td",{className:"py-3 px-4 text-cyan-300",children:"Alphabetically sorted keys"}),e.jsx("td",{className:"py-3 px-4",children:"Deterministic SHA-256 hashing & git diffs"})]})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating dump vs dumps mechanics, canonical JSON generation, atomic file persistence, and institutional catalog exporters:"}),e.jsx(C,{files:[{filename:"json_dump_vs_dumps_file_and_string_streams.py",code:I,description:"json.dump vs json.dumps mechanics, formatting with indent and sort_keys."},{filename:"deterministic_canonical_json_and_sort_keys.py",code:P,description:"Deterministic Canonical JSON generation and SHA-256 cryptographic checksum manifests."},{filename:"atomic_json_file_writer_with_temporary_swap.py",code:M,description:"ACID Atomic JSON file persistence using tempfile, os.fsync, and os.replace."},{filename:"institutional_course_catalog_and_fee_exporter.py",code:F,description:"Institutional Course Catalog Exporter with multi-format and SHA-256 audit packaging."}]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Zero-Byte File Corruption"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Using ",e.jsx("code",{className:"text-rose-300 font-mono",children:'with open("data.json", "w") as f: json.dump(...)'})," truncates the file to 0 bytes immediately upon opening; a crash leaves a corrupted, unrecoverable file."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use the Atomic File Swap pattern (",e.jsx("code",{className:"text-emerald-300",children:"mkstemp"})," + ",e.jsx("code",{className:"text-emerald-300",children:"os.replace"}),")."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Memory Spike with `f.write(json.dumps())`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-amber-300 font-mono",children:"json.dumps()"})," on multi-gigabyte datasets builds an enormous string in RAM before saving."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Stream directly with ",e.jsx("code",{className:"text-emerald-300",children:"json.dump(large_data, f)"})," for constant memory."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Non-Deterministic Hashes"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Omitting ",e.jsx("code",{className:"text-purple-300 font-mono",children:"sort_keys=True"})," produces random key ordering across different Python environments, breaking cryptographic signature checks."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always use ",e.jsx("code",{className:"text-emerald-300",children:"sort_keys=True"})," and ",e.jsx("code",{className:"text-emerald-300",children:"separators=(',', ':')"})," for hashing."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Windows CP1252 Unicode Corruption"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Opening files on Windows without specifying ",e.jsx("code",{className:"text-cyan-300 font-mono",children:'encoding="utf-8"'})," defaults to CP1252, corrupting Indian languages and Unicode characters."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always pass ",e.jsx("code",{className:"text-emerald-300",children:'encoding="utf-8"'})," to ",e.jsx("code",{className:"text-emerald-300",children:"open()"}),"."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering `json.dump`, `json.dumps`, `indent`, `sort_keys`, `separators`, and atomic file operations:"}),e.jsx(z,{questions:R})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with serialization recipes, atomic persistence patterns, and canonical manifest generation:"}),e.jsx("div",{className:"mb-10",children:e.jsx(O,{content:D,filename:"python_topic2_json_serialization_notes.txt",title:"Print Topic 2 Study Notes"})}),e.jsx(E,{})]})]})]})}export{V as default};
