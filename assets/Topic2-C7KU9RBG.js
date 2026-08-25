import{b as n,j as e,bg as i}from"./vendor-react-core-Doz9nIC6.js";import{P as k}from"./PythonFileLoader-hCi5osN-.js";import{P as T}from"./PlainTextPrint-C08xhKA4.js";import{F as S}from"./FAQTemplate-CkSqDH4B.js";import{T as E}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const A=`# topic2_files/os_walk_tree_traversal_mechanics.py\r
# Module: 004_001_filesystem-os\r
# Topic: Directory traversal: os.walk(), scandir(), and glob patterns\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 2 - File 1: \`os.walk()\` Tree Traversal & In-Place Pruning\r
Demonstrates:\r
  1. The 3-tuple \`(root, dirs, files)\` generated during recursive tree walks\r
  2. In-place directory pruning by mutating \`dirs[:]\` or \`dirs.remove()\`\r
  3. Top-down (\`topdown=True\`) vs Bottom-up (\`topdown=False\`) tree traversal\r
"""\r
\r
import os\r
import shutil\r
\r
def demonstrate_os_walk_mechanics():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - OS.WALK() TREE TRAVERSAL & PRUNING")\r
    print("=" * 70)\r
\r
    demo_root = "temp_accotax_walk_tree"\r
\r
    try:\r
        # 1. Setup multi-level folder structure with active and cached folders:\r
        os.makedirs(os.path.join(demo_root, "barrackpore", "py_ai_2026"), exist_ok=True)\r
        os.makedirs(os.path.join(demo_root, "barrackpore", "__pycache__"), exist_ok=True)\r
        os.makedirs(os.path.join(demo_root, "kolkata", "ds_ml_2026"), exist_ok=True)\r
        os.makedirs(os.path.join(demo_root, "kolkata", ".temp_backup"), exist_ok=True)\r
\r
        with open(os.path.join(demo_root, "barrackpore", "py_ai_2026", "stu_101.json"), "w") as f:\r
            f.write('{"id": "STU-101", "name": "Sourav"}')\r
        with open(os.path.join(demo_root, "barrackpore", "__pycache__", "cache.pyc"), "w") as f:\r
            f.write("COMPILED_BYTECODE")\r
        with open(os.path.join(demo_root, "kolkata", "ds_ml_2026", "stu_102.json"), "w") as f:\r
            f.write('{"id": "STU-102", "name": "Priyanka"}')\r
\r
        # 2. Standard Top-Down Tree Walk:\r
        print("1. Standard \`os.walk(topdown=True)\` - Inspecting 3-Tuple (root, dirs, files):")\r
        for root, dirs, files in os.walk(demo_root, topdown=True):\r
            indent_level = root.count(os.sep)\r
            indent = "  " * indent_level\r
            print(f"{indent}[DIR] {root}")\r
            for f_name in files:\r
                print(f"{indent}  |-- [FILE] {f_name}")\r
\r
        # 3. In-Place Directory Pruning (Excluding '__pycache__' and '.temp_backup'):\r
        print("\\n2. In-Place Tree Pruning (\`dirs[:] = [d for d in dirs if not d.startswith('.')]\`):")\r
        pruned_results = []\r
        for root, dirs, files in os.walk(demo_root, topdown=True):\r
            # PRUNING INVARIANT: Modify \`dirs\` in-place to prevent os.walk from recursing into them!\r
            dirs[:] = [d for d in dirs if d != "__pycache__" and not d.startswith(".")]\r
\r
            for f_name in files:\r
                full_file_path = os.path.join(root, f_name)\r
                pruned_results.append(full_file_path)\r
\r
        print(f"   * Discovered {len(pruned_results)} Valid Files after Pruning Caches:")\r
        for path in pruned_results:\r
            print(f"     - {path}")\r
\r
        # 4. Bottom-Up Walk (\`topdown=False\`):\r
        print("\\n3. Bottom-Up Traversal (\`os.walk(topdown=False)\`):")\r
        for root, dirs, files in os.walk(demo_root, topdown=False):\r
            print(f"   * Finished Children of: {root} (dirs: {dirs}, files: {files})")\r
\r
    finally:\r
        # Cleanup demo tree\r
        if os.path.exists(demo_root):\r
            shutil.rmtree(demo_root)\r
            print("\\n4. Cleanup: Removed demo directory tree.")\r
\r
    print(r"""\r
os.walk Invariants:\r
  1. \`os.walk()\` yields a 3-tuple \`(root, dirs, files)\` at every directory node.\r
  2. Modifying \`dirs[:]\` in-place when \`topdown=True\` tells \`os.walk()\` to SKIP visiting pruned subtrees.\r
  3. \`topdown=False\` traverses child folders before parent folders (ideal for recursive bottom-up cleanup).\r
""")\r
    print("[PASSED] os.walk() Tree Traversal & Pruning Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_os_walk_mechanics()\r
`,C=`# topic2_files/os_scandir_high_performance_iterator.py\r
# Module: 004_001_filesystem-os\r
# Topic: Directory traversal: os.walk(), scandir(), and glob patterns\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 2 - File 2: \`os.scandir()\` High-Performance Iterator & \`DirEntry\`\r
Demonstrates:\r
  1. \`os.scandir()\` iterator yielding rich \`os.DirEntry\` objects\r
  2. Inode & metadata caching: avoiding redundant \`stat\` system calls\r
  3. Performance benchmark: \`os.scandir()\` vs legacy \`os.listdir() + os.stat()\`\r
"""\r
\r
import os\r
import shutil\r
import timeit\r
\r
def demonstrate_scandir_performance():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - OS.SCANDIR() HIGH-PERFORMANCE ITERATOR")\r
    print("=" * 70)\r
\r
    sandbox = "temp_accotax_scandir_bench"\r
\r
    try:\r
        # Create 100 dummy files for benchmarking\r
        os.makedirs(sandbox, exist_ok=True)\r
        for i in range(100):\r
            with open(os.path.join(sandbox, f"record_{i:04d}.csv"), "w") as f:\r
                f.write("SAMPLE_RECORD_DATA")\r
\r
        # 1. Using os.scandir() with Context Manager:\r
        print("1. Inspecting \`os.DirEntry\` Objects via \`os.scandir()\`:")\r
        with os.scandir(sandbox) as entries:\r
            sample_entries = [e for _, e in zip(range(3), entries)]\r
            for entry in sample_entries:\r
                print(f"   * Entry Name   : {entry.name}")\r
                print(f"   * Entry Path   : {entry.path}")\r
                print(f"   * is_file()    : {entry.is_file()}")\r
                print(f"   * is_dir()     : {entry.is_dir()}")\r
                print(f"   * Cached Size  : {entry.stat().st_size} bytes\\n")\r
\r
        # 2. Performance Benchmark on 100 files:\r
        print("2. Performance Benchmark: \`os.scandir()\` vs \`os.listdir() + os.stat()\` (100 files x 20 runs):")\r
\r
        def bench_listdir():\r
            total_size = 0\r
            for name in os.listdir(sandbox):\r
                full_p = os.path.join(sandbox, name)\r
                if os.path.isfile(full_p):\r
                    total_size += os.path.getsize(full_p)\r
            return total_size\r
\r
        def bench_scandir():\r
            total_size = 0\r
            with os.scandir(sandbox) as entries:\r
                for entry in entries:\r
                    if entry.is_file():\r
                        total_size += entry.stat().st_size\r
            return total_size\r
\r
        t_listdir = timeit.timeit(bench_listdir, number=20)\r
        t_scandir = timeit.timeit(bench_scandir, number=20)\r
\r
        print(f"   * Legacy \`os.listdir() + os.stat()\` : {t_listdir:.4f}s")\r
        print(f"   * Modern \`os.scandir()\`             : {t_scandir:.4f}s (C-level Cached Inodes)")\r
        print(f"   * Speedup                           : ~{t_listdir / t_scandir:.1f}x Faster with os.scandir()!\\n")\r
\r
    finally:\r
        # Cleanup sandbox directory\r
        if os.path.exists(sandbox):\r
            shutil.rmtree(sandbox)\r
            print("3. Cleanup: Removed benchmark directory successfully.")\r
\r
    print(r"""\r
os.scandir Invariants:\r
  1. \`os.scandir()\` returns an iterator of \`DirEntry\` objects that cache file attributes from the directory scan.\r
  2. It avoids expensive secondary \`stat()\` system calls, making it 2x to 10x faster than \`os.listdir()\`.\r
  3. Always use \`with os.scandir(path) as it:\` to ensure early release of OS directory file handles.\r
""")\r
    print("[PASSED] os.scandir() High-Performance Iterator Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_scandir_performance()\r
`,P=`# topic2_files/glob_and_fnmatch_pattern_matching.py\r
# Module: 004_001_filesystem-os\r
# Topic: Directory traversal: os.walk(), scandir(), and glob patterns\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 2 - File 3: \`glob\` and \`fnmatch\` Unix Pattern Matching\r
Demonstrates:\r
  1. \`glob.glob()\` and memory-efficient \`glob.iglob()\`\r
  2. Unix shell filename pattern syntax: \`*\`, \`?\`, \`[0-9]\`, \`[!a-z]\`\r
  3. Filtering filenames inside \`os.walk()\` using \`fnmatch.fnmatch()\` and \`fnmatch.filter()\`\r
"""\r
\r
import os\r
import glob\r
import fnmatch\r
import shutil\r
\r
def demonstrate_glob_and_fnmatch():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - GLOB & FNMATCH PATTERN MATCHING")\r
    print("=" * 70)\r
\r
    sandbox = "temp_accotax_fnmatch_sandbox"\r
\r
    try:\r
        # Create test files with distinct naming patterns\r
        os.makedirs(os.path.join(sandbox, "reports"), exist_ok=True)\r
        os.makedirs(os.path.join(sandbox, "data"), exist_ok=True)\r
\r
        test_files = [\r
            "reports/audit_2026_q1.csv",\r
            "reports/audit_2026_q2.csv",\r
            "reports/audit_2025_q4.csv",\r
            "reports/summary.json",\r
            "data/student_101.txt",\r
            "data/student_102.txt",\r
            "data/temp_test.tmp"\r
        ]\r
        for rel_f in test_files:\r
            with open(os.path.join(sandbox, rel_f), "w") as f:\r
                f.write("TEST_CONTENT")\r
\r
        # 1. glob.glob() Pattern Matching:\r
        print("1. Wildcard Searches with \`glob.glob()\`:")\r
        q_2026_reports = glob.glob(os.path.join(sandbox, "reports", "audit_2026_q?.csv"))\r
        print(f"   * Pattern 'audit_2026_q?.csv' Matches : {q_2026_reports}")\r
\r
        # 2. glob.iglob() Streaming Iterator:\r
        print("\\n2. Memory-Efficient Generator with \`glob.iglob(..., recursive=True)\`:")\r
        all_csv_iter = glob.iglob(os.path.join(sandbox, "**", "*.csv"), recursive=True)\r
        print(f"   * \`glob.iglob\` Generator Object       : {all_csv_iter}")\r
        for match in all_csv_iter:\r
            print(f"     - Streamed Match: {match}")\r
\r
        # 3. fnmatch.fnmatch() & fnmatch.filter():\r
        print("\\n3. In-Memory Filtering with \`fnmatch.filter()\`:")\r
        all_filenames = ["stu_101.json", "stu_102.csv", "backup_2026.bak", "stu_103.json", "temp.tmp"]\r
\r
        json_matches = fnmatch.filter(all_filenames, "stu_*.json")\r
        print(f"   * All Filenames  : {all_filenames}")\r
        print(f"   * Match 'stu_*.json': {json_matches}")\r
\r
        # 4. Pattern Testing with fnmatch.fnmatchcase():\r
        print("\\n4. Individual Pattern Evaluation (\`fnmatch.fnmatchcase\`):")\r
        print(f"   * 'Report_2026.CSV' matches '*.csv' (case-insensitive on Windows): {fnmatch.fnmatch('Report_2026.CSV', '*.csv')}")\r
        print(f"   * 'Report_2026.CSV' matches '*.csv' (case-sensitive check)       : {fnmatch.fnmatchcase('Report_2026.CSV', '*.csv')}")\r
\r
    finally:\r
        # Cleanup sandbox directory\r
        if os.path.exists(sandbox):\r
            shutil.rmtree(sandbox)\r
            print("\\n5. Cleanup: Removed pattern match sandbox.")\r
\r
    print(r"""\r
glob & fnmatch Invariants:\r
  1. \`glob.glob()\` expands Unix shell wildcards against the physical filesystem.\r
  2. \`glob.iglob()\` yields matches lazily one-by-one without creating in-memory lists.\r
  3. \`fnmatch.filter(names, pattern)\` provides fast wildcard filtering over in-memory string lists.\r
""")\r
    print("[PASSED] glob and fnmatch Pattern Matching Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_glob_and_fnmatch()\r
`,I=`# topic2_files/institutional_multicampus_tree_crawler_and_indexer.py\r
# Module: 004_001_filesystem-os\r
# Topic: Directory traversal: os.walk(), scandir(), and glob patterns\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 2 - File 4: Institutional Storage Tree Crawler & Indexer (Case Study)\r
Demonstrates:\r
  1. Production multi-campus crawler using \`os.walk()\` and \`os.scandir()\`\r
  2. Dynamic in-place directory pruning (\`dirs[:]\`) to ignore caches and archives\r
  3. Building comprehensive telemetry indexes: file counts, extension breakdowns, and total storage usage\r
"""\r
\r
import os\r
import shutil\r
import fnmatch\r
from typing import Dict, Any, List, Set, Tuple\r
\r
class InstitutionalTreeCrawlerAndIndexer:\r
    """Production filesystem crawler and storage indexer for Coder & AccoTax."""\r
\r
    IGNORED_DIRECTORY_PATTERNS = {"__pycache__", ".*", "temp_*", "archive_*"}\r
\r
    def __init__(self, root_dir: str):\r
        self.root_dir = root_dir\r
        self.total_dirs_scanned = 0\r
        self.total_files_indexed = 0\r
        self.pruned_subtrees_count = 0\r
        self.extension_distribution: Dict[str, int] = {}\r
        self.file_index: List[Dict[str, Any]] = []\r
\r
    def crawl_and_index(self) -> Dict[str, Any]:\r
        """Crawls root directory, prunes excluded folders, and indexes file assets."""\r
        total_storage_bytes = 0\r
\r
        for root, dirs, files in os.walk(self.root_dir, topdown=True):\r
            self.total_dirs_scanned += 1\r
\r
            # 1. In-Place Directory Pruning\r
            original_dir_count = len(dirs)\r
            dirs[:] = [\r
                d for d in dirs\r
                if not any(fnmatch.fnmatch(d, pat) for pat in self.IGNORED_DIRECTORY_PATTERNS)\r
            ]\r
            self.pruned_subtrees_count += (original_dir_count - len(dirs))\r
\r
            # 2. Index Regular Files using os.scandir for high-speed attribute retrieval\r
            with os.scandir(root) as entries:\r
                for entry in entries:\r
                    if entry.is_file():\r
                        self.total_files_indexed += 1\r
                        file_stat = entry.stat()\r
                        size = file_stat.st_size\r
                        total_storage_bytes += size\r
\r
                        ext = os.path.splitext(entry.name)[1].lower() or ".unknown"\r
                        self.extension_distribution[ext] = self.extension_distribution.get(ext, 0) + 1\r
\r
                        self.file_index.append({\r
                            "name": entry.name,\r
                            "path": entry.path,\r
                            "relative_path": os.path.relpath(entry.path, self.root_dir),\r
                            "extension": ext,\r
                            "size_bytes": size\r
                        })\r
\r
        return {\r
            "root_scanned": os.path.abspath(self.root_dir),\r
            "directories_visited": self.total_dirs_scanned,\r
            "subtrees_pruned": self.pruned_subtrees_count,\r
            "files_indexed": self.total_files_indexed,\r
            "total_storage_bytes": total_storage_bytes,\r
            "extension_breakdown": self.extension_distribution,\r
            "file_catalog_sample": self.file_index[:5]\r
        }\r
\r
\r
def demonstrate_crawler_suite():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - INSTITUTIONAL STORAGE TREE CRAWLER & INDEXER")\r
    print("=" * 70)\r
\r
    demo_root = "temp_accotax_institutional_storage"\r
\r
    try:\r
        # Create mock multi-campus storage hierarchy:\r
        os.makedirs(os.path.join(demo_root, "barrackpore", "py_ai_2026"), exist_ok=True)\r
        os.makedirs(os.path.join(demo_root, "barrackpore", "__pycache__"), exist_ok=True)\r
        os.makedirs(os.path.join(demo_root, "barrackpore", "archive_2025"), exist_ok=True)\r
        os.makedirs(os.path.join(demo_root, "kolkata", "ds_ml_2026"), exist_ok=True)\r
\r
        with open(os.path.join(demo_root, "barrackpore", "py_ai_2026", "stu_101.json"), "w") as f:\r
            f.write('{"id": "STU-101", "fee": 30000.0}')\r
        with open(os.path.join(demo_root, "barrackpore", "py_ai_2026", "stu_101.pdf"), "w") as f:\r
            f.write("DUMMY_PDF_PAYLOAD_CONTENT")\r
        with open(os.path.join(demo_root, "barrackpore", "__pycache__", "module.pyc"), "w") as f:\r
            f.write("CACHED_BYTECODE_SHOULD_BE_PRUNED")\r
        with open(os.path.join(demo_root, "kolkata", "ds_ml_2026", "stu_102.json"), "w") as f:\r
            f.write('{"id": "STU-102", "fee": 35000.0}')\r
        with open(os.path.join(demo_root, "kolkata", "ds_ml_2026", "stu_102.pdf"), "w") as f:\r
            f.write("DUMMY_PDF_PAYLOAD_CONTENT")\r
\r
        crawler = InstitutionalTreeCrawlerAndIndexer(demo_root)\r
        audit_summary = crawler.crawl_and_index()\r
\r
        print("1. Multi-Campus Filesystem Crawl Audit Summary:")\r
        print(f"   * Root Scanned           : {audit_summary['root_scanned']}")\r
        print(f"   * Directories Visited    : {audit_summary['directories_visited']}")\r
        print(f"   * Subtrees Pruned (DLQ)  : {audit_summary['subtrees_pruned']} (Ignored cache & archives)")\r
        print(f"   * Total Files Indexed    : {audit_summary['files_indexed']}")\r
        print(f"   * Total Vault Storage    : {audit_summary['total_storage_bytes']} Bytes\\n")\r
\r
        print("2. Extension Distribution Breakdown:")\r
        for ext, count in audit_summary["extension_breakdown"].items():\r
            print(f"   * {ext:<10} : {count} files")\r
\r
        print("\\n3. Sample File Catalog Index Entries:")\r
        for item in audit_summary["file_catalog_sample"]:\r
            print(f"   * [{item['extension']:<6}] {item['name']:<18} | Rel: {item['relative_path']}")\r
\r
    finally:\r
        # Cleanup mock storage hierarchy\r
        if os.path.exists(demo_root):\r
            shutil.rmtree(demo_root)\r
            print("\\n4. Cleanup: Removed institutional storage tree safely.")\r
\r
    print("\\n[PASSED] Institutional Storage Tree Crawler & Indexer Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_crawler_suite()\r
`,D=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
          PYTHON PROGRAMMING • SEGMENT 4: PRO LEVEL • MODULE 004_001: FILESYSTEM & OS\r
       TOPIC 2: DIRECTORY TRAVERSAL: OS.WALK(), SCANDIR(), AND GLOB PATTERNS\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. OS.WALK() & IN-PLACE PRUNING\r
--------------------------------------------------------------------------------\r
  for root, dirs, files in os.walk(top_dir, topdown=True):\r
      # Prune hidden or cache folders in-place:\r
      dirs[:] = [d for d in dirs if not d.startswith(".") and d != "__pycache__"]\r
      for f in files:\r
          full_path = os.path.join(root, f)\r
\r
--------------------------------------------------------------------------------\r
2. HIGH-SPEED OS.SCANDIR()\r
--------------------------------------------------------------------------------\r
  with os.scandir(folder_path) as entries:\r
      for entry in entries:\r
          if entry.is_file():\r
              size = entry.stat().st_size  # CACHED from directory read!\r
\r
--------------------------------------------------------------------------------\r
3. GLOB & FNMATCH PATTERNS\r
--------------------------------------------------------------------------------\r
  * glob.glob("reports/2026/q?.csv")             # Immediate search\r
  * glob.iglob("vault/**/*.pdf", recursive=True) # Lazy streaming generator\r
  * fnmatch.filter(names, "stu_*.json")          # In-memory list filter\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 2: DIRECTORY TRAVERSAL\r
================================================================================\r
`,z=[{question:"What does 'os.walk(top_dir)' yield on each iteration?",shortAnswer:"A 3-tuple '(root, dirs, files)' where 'root' is the current directory path string, 'dirs' is a list of subdirectories in 'root', and 'files' is a list of non-directory filenames in 'root'.",explanation:"Recursive directory tree generator protocol.",hint:"Yields a 3-tuple: (root, dirs, files).",level:"basic",codeExample:"for root, dirs, files in os.walk('.'): print(root, len(files))"},{question:"How do you prune subdirectories (e.g., skip '.git' or '__pycache__') during 'os.walk()'?",shortAnswer:"By mutating the 'dirs' list IN-PLACE using slice assignment ('dirs[:] = [d for d in dirs if not d.startswith('.')]') or 'dirs.remove(name)' when 'topdown=True'.",explanation:"In-place list mutation pruning invariant.",hint:"Mutate dirs in-place with dirs[:] = [...] or dirs.remove().",level:"moderate",codeExample:`for root, dirs, files in os.walk(p, topdown=True):
    dirs[:] = [d for d in dirs if d != '__pycache__']`},{question:`Why does writing 'dirs = [d for d in dirs if d != ".git"]' FAIL to prune directories in 'os.walk()'?`,shortAnswer:"Because reassigning 'dirs = ...' binds the local variable 'dirs' to a brand new list in memory without modifying the original list referenced internally by the 'os.walk()' generator; you must mutate it in-place via 'dirs[:] = ...'.",explanation:"Python variable rebinding vs in-place slice mutation.",hint:"dirs = ... rebinds the local variable; dirs[:] = ... modifies the list in-place.",level:"moderate",codeExample:"# BAD: dirs = [d for d in dirs] -> GOOD: dirs[:] = [d for d in dirs]"},{question:"What is the difference between 'topdown=True' and 'topdown=False' in 'os.walk()'?",shortAnswer:"With 'topdown=True', parent directories are visited BEFORE their children (enabling subtree pruning); with 'topdown=False', child leaf directories are visited BEFORE their parents (ideal for bottom-up deletion).",explanation:"Tree traversal order.",hint:"topdown=True visits parents first; topdown=False visits children first.",level:"basic",codeExample:"# topdown=False is ideal for bottom-up directory deletion"},{question:"Why is 'topdown=False' required when writing a script to delete a directory tree using 'os.rmdir()'?",shortAnswer:"Because 'os.rmdir()' only deletes empty directories; visiting children first ensures child files/folders are deleted before attempting to remove the parent directory.",explanation:"Bottom-up tree removal invariant.",hint:"Leaves must be deleted before their parent folder can become empty.",level:"moderate",codeExample:`for root, dirs, files in os.walk(path, topdown=False):
    os.rmdir(root)`},{question:"What is 'os.scandir()' and why is it significantly faster than 'os.listdir()'?",shortAnswer:"'os.scandir()' yields 'DirEntry' objects that cache file attributes and types directly from the operating system directory stream, avoiding expensive secondary 'stat()' system calls for every file.",explanation:"C-level inode caching in scandir.",hint:"Caches file metadata directly from the directory stream, avoiding stat() calls.",level:"basic",codeExample:`with os.scandir('.') as entries:
    for e in entries: print(e.name, e.stat().st_size)`},{question:"Why should 'os.scandir()' always be used inside a 'with' context manager?",shortAnswer:"To guarantee that the underlying operating system directory stream handle is closed immediately when exiting the block, preventing resource leaks.",explanation:"OS directory stream lifecycle safety.",hint:"Ensures the OS directory stream file descriptor is closed properly.",level:"basic",codeExample:`with os.scandir(folder) as it:
    for entry in it: ...`},{question:"What is the difference between 'entry.is_file()' and 'os.path.isfile(entry.path)' when using 'DirEntry'?",shortAnswer:"'entry.is_file()' retrieves the cached file type directly without making a separate system call; 'os.path.isfile()' invokes an additional 'stat' system call against the disk.",explanation:"Direct attribute cache vs secondary system call.",hint:"entry.is_file() uses cached attributes; os.path.isfile makes a new system call.",level:"moderate",codeExample:"if entry.is_file(): ... # Fast cached lookup"},{question:"What is the difference between 'glob.glob()' and 'glob.iglob()'?",shortAnswer:"'glob.glob()' returns an eager list containing all matching paths in memory at once; 'glob.iglob()' returns a lazy generator iterator that streams matches one-by-one with O(1) memory.",explanation:"Eager list vs lazy iterator globbing.",hint:"glob.glob returns a full list; glob.iglob returns a streaming iterator.",level:"basic",codeExample:"for path in glob.iglob('**/*.csv', recursive=True): process(path)"},{question:`What does '**' represent in 'glob.glob("data/**/*.json", recursive=True)'?`,shortAnswer:"The '**' wildcard matches zero or more nested subdirectories recursively when 'recursive=True' is enabled.",explanation:"Recursive recursive glob wildcard.",hint:"Matches zero or more nested directory levels recursively.",level:"basic",codeExample:"glob.glob('vault/**/*.pdf', recursive=True)"},{question:"What is the difference between the 'glob' module and the 'fnmatch' module?",shortAnswer:"'glob' queries the physical filesystem directly to find matching paths; 'fnmatch' evaluates wildcard patterns against in-memory string lists without touching the disk.",explanation:"Filesystem traversal vs in-memory string matching.",hint:"glob scans the disk; fnmatch matches strings in memory.",level:"basic",codeExample:"fnmatch.filter(['a.txt', 'b.csv'], '*.txt') # ['a.txt']"},{question:"What wildcard patterns does 'fnmatch' support?",shortAnswer:"'*' (matches any characters), '?' (matches exactly one character), '[seq]' (matches any character in seq), and '[!seq]' (matches any character not in seq).",explanation:"Unix shell pattern syntax.",hint:"* for any chars, ? for single char, [seq] for char set, [!seq] for negation.",level:"basic",codeExample:"fnmatch.fnmatch('student_1.json', 'student_?.json') # True"},{question:"What is the difference between 'fnmatch.fnmatch()' and 'fnmatch.fnmatchcase()'?",shortAnswer:"'fnmatch.fnmatch()' normalizes case according to the host OS filesystem (case-insensitive on Windows, case-sensitive on POSIX); 'fnmatch.fnmatchcase()' ALWAYS performs strict case-sensitive matching on all platforms.",explanation:"Cross-platform case sensitivity matching.",hint:"fnmatch respects OS case conventions; fnmatchcase is strictly case-sensitive.",level:"moderate",codeExample:"fnmatch.fnmatchcase('File.CSV', '*.csv') # False"},{question:"How do you filter a list of 100,000 filenames efficiently using 'fnmatch'?",shortAnswer:"Using 'fnmatch.filter(names_list, pattern)', which executes an optimized C-level regex loop over the string list.",explanation:"Bulk in-memory wildcard filtering.",hint:"Use fnmatch.filter(list, pattern).",level:"basic",codeExample:"csv_files = fnmatch.filter(file_names, '*.csv')"},{question:"How do you handle filesystem permission errors during 'os.walk()'?",shortAnswer:"Pass an error handler function to the 'onerror' parameter: 'os.walk(path, onerror=my_err_handler)'.",explanation:"Graceful error recovery during tree walks.",hint:"Use the onerror callback parameter of os.walk.",level:"moderate",codeExample:`def on_err(err): print('Access Denied:', err)
os.walk('.', onerror=on_err)`},{question:"How do you count the total number of files in a directory tree without loading full lists?",shortAnswer:"Using a generator expression with 'os.walk()': 'sum(len(files) for _, _, files in os.walk(root))'.",explanation:"Constant memory file counting.",hint:"Use sum(len(files) for _, _, files in os.walk(root)).",level:"basic",codeExample:"total_files = sum(len(files) for _, _, files in os.walk(vault_dir))"},{question:"How do you calculate the total disk size consumed by all PDF files in a directory tree?",shortAnswer:`Combine 'os.walk()' with 'os.path.getsize()' (or 'os.scandir()') filtering by filename extension '.endswith(".pdf")'.`,explanation:"Tree aggregation calculation.",hint:"Iterate with os.walk and sum os.path.getsize() for matching files.",level:"basic",codeExample:"total_bytes = sum(os.path.getsize(os.path.join(r, f)) for r, _, fs in os.walk('.') for f in fs if f.endswith('.pdf'))"},{question:"What is 'followlinks=True' in 'os.walk()' and what hazard does it introduce?",shortAnswer:"It tells 'os.walk()' to traverse symbolic links (symlinks) pointing to directories; hazard: if symlinks form a cycle, 'os.walk()' will loop infinitely until recursion or memory crashes.",explanation:"Symlink recursion cycle hazard.",hint:"Follows directory symlinks, but can cause infinite loops if symlinks form cycles.",level:"complex",codeExample:"os.walk('.', followlinks=True) # Danger if cyclical symlinks exist"},{question:"How does 'pathlib.Path.rglob()' compare to 'os.walk()'?",shortAnswer:"'pathlib.Path.rglob()' is more concise for pattern-based file searches; 'os.walk()' provides greater control over directory pruning ('dirs[:]') and bottom-up traversal ('topdown=False').",explanation:"API tradeoff: convenience vs fine-grained traversal control.",hint:"rglob() is cleaner for simple pattern searches; os.walk() gives granular pruning control.",level:"basic",codeExample:"# rglob for quick scans; os.walk for custom pruning & bottom-up cleanup"},{question:"How do you extract the directory depth (nesting level) of the current folder during 'os.walk()'?",shortAnswer:"Calculate the difference in path separator counts: 'depth = root.count(os.sep) - top_dir.count(os.sep)'.",explanation:"Nesting depth calculation.",hint:"Count the number of os.sep separators relative to the root directory.",level:"basic",codeExample:"depth = root.count(os.sep) - base_dir.count(os.sep)"},{question:"What is 'os.DirEntry.stat(follow_symlinks=False)' used for?",shortAnswer:"It queries metadata about the symlink itself rather than the target file it points to.",explanation:"Symlink metadata inspection.",hint:"Inspects symlink metadata rather than target file metadata.",level:"moderate",codeExample:"entry.stat(follow_symlinks=False)"},{question:"How do you find all files modified in the last 24 hours across a directory tree?",shortAnswer:"Iterate with 'os.scandir()' inside 'os.walk()', comparing 'entry.stat().st_mtime' against '(time.time() - 86400)'.",explanation:"Timestamp-based filesystem filtering.",hint:"Compare st_mtime against time.time() - 86400.",level:"moderate",codeExample:`cutoff = time.time() - 86400
recent = [e.path for r in os.walk('.') with ... if e.stat().st_mtime >= cutoff]`},{question:"Why does 'os.walk()' yield directory paths as strings rather than Path objects?",shortAnswer:"Because 'os.walk()' was written for legacy Python before 'pathlib' existed; 'os.fwalk()' or wrapping paths in 'Path(root)' bridges the two APIs.",explanation:"Legacy string API vs modern Path wrappers.",hint:"os.walk is a classic API that yields strings for backwards compatibility.",level:"basic",codeExample:"root_path = Path(root)"},{question:"How do you implement a max-depth limit on 'os.walk()'?",shortAnswer:"Compute the current depth; if 'depth >= max_depth', clear the 'dirs' list in-place ('dirs.clear()') to prevent 'os.walk()' from descending deeper.",explanation:"Depth-bounded tree traversal.",hint:"Check depth and call dirs.clear() when max depth is reached.",level:"moderate",codeExample:"if depth >= 2: dirs.clear() # Stops descending deeper"},{question:"What is the ultimate golden rule for directory traversal in Python?",shortAnswer:"Use 'os.scandir()' for high-performance single-directory scanning, 'os.walk(topdown=True)' with 'dirs[:] = [...]' in-place pruning for deep crawling, and 'glob.iglob()' for streaming pattern matching.",explanation:"The complete enterprise guideline for directory traversal in Python.",hint:"Use os.scandir for speed, os.walk with dirs[:] for pruning, and glob.iglob for streaming wildcards.",level:"basic",codeExample:"# Python Directory Traversal Mastery"}];function B(){const h=n.useRef([]),[a,m]=n.useState("walkTuple"),[x,u]=n.useState(!0),[o,y]=n.useState(!0),[l,_]=n.useState(!0),[p,w]=n.useState("*.pdf"),b=[{dir:"barrackpore/py_ai_2026",files:["stu_101.pdf","stu_101.json","scores.csv"],size:45200,isPruned:!1},{dir:"barrackpore/__pycache__",files:["module.cpython-313.pyc"],size:12400,isCache:!0},{dir:"barrackpore/archive_2025",files:["legacy_ledger.csv","archive.zip"],size:184e3,isArchive:!0},{dir:"kolkata/ds_ml_2026",files:["stu_102.pdf","stu_102.json","model.pkl"],size:68100,isPruned:!1},{dir:"kolkata/.temp_cache",files:["session.tmp"],size:4200,isCache:!0}],f=b.filter(t=>!(o&&t.isCache||l&&t.isArchive)),j=b.length-f.length,v=(t,r)=>r==="*.*"?!0:r==="*.pdf"?t.endsWith(".pdf"):r==="*.json"?t.endsWith(".json"):r==="*.csv"?t.endsWith(".csv"):!0,c=[];let g=0;f.forEach(t=>{t.files.forEach(r=>{if(v(r,p)){const d=Math.round(t.size/t.files.length);c.push({dir:t.dir,filename:r,sizeBytes:d}),g+=d}})});const N=`# Recursive walk with in-place pruning and fnmatch:
for root, dirs, files in os.walk(root_dir, topdown=${x?"True":"False"}):
    ${o||l?`# IN-PLACE PRUNING INVARIANT:
    dirs[:] = [d for d in dirs if not (`+(o?"d == '__pycache__' or d.startswith('.')":"")+(o&&l?" or ":"")+(l?"d.startswith('archive_')":"")+")]":"# No pruning applied"}
    for f in fnmatch.filter(files, "${p}"):
        print(os.path.join(root, f))`;n.useEffect(()=>{const t=new IntersectionObserver(r=>{r.forEach(d=>{d.isIntersecting&&d.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return h.current.forEach(r=>{r&&t.observe(r)}),()=>t.disconnect()},[]);const s=t=>{t&&!h.current.includes(t)&&h.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:s,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 4 • Module 004_001"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 2"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Advanced File Operations, OS & Subprocess Automation"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Directory Traversal: ",e.jsx("span",{className:"text-teal-400",children:"os.walk(), scandir() & glob"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master recursive filesystem traversal and high-speed directory scanning: unpacking the ",e.jsx("code",{className:"text-teal-300 font-mono",children:"(root, dirs, files)"})," 3-tuple, dynamic in-place directory subtree pruning (",e.jsx("code",{className:"text-teal-300 font-mono",children:"dirs[:] = [...]"}),"), high-performance scanning with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"os.scandir()"})," and ",e.jsx("code",{className:"text-purple-300 font-mono",children:"DirEntry"})," inode caching, and wildcard pattern filtering with ",e.jsx("code",{className:"text-amber-300 font-mono",children:"fnmatch"}),"."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🌳 `os.walk` 3-Tuple"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"✂️ In-Place `dirs[:]` Pruning"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ High-Speed `os.scandir()`"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🎯 `fnmatch.filter()`"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🗂️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Directory Traversal & Scanning Triad"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"Navigating deep filesystem directory hierarchies requires choosing the optimal tool based on tree depth, speed, and pruning requirements:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ `os.walk()` Generator"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"for root, dirs, files in ..."}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Recursive tree crawler. Yields 3-tuple and allows in-place subtree pruning with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"dirs[:]"}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ `os.scandir()` High-Speed"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"with os.scandir(p) as it:"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["C-level directory scanning. Caches ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"DirEntry"})," inode metadata, avoiding slow ",e.jsx("code",{className:"text-cyan-300",children:"stat()"})," calls."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ `glob` & `fnmatch`"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"glob.iglob(), fnmatch.filter()"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Unix shell wildcard matching (",e.jsx("code",{className:"text-purple-300 font-mono",children:"*.pdf"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"q?"}),") across disk and in-memory lists."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The In-Place Slice Assignment Pruning Rule"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Writing ",e.jsx("code",{className:"text-rose-400 font-mono",children:'dirs = [d for d in dirs if d != ".git"]'})," rebinds the local variable and fails to prune! You must mutate the list in-place using slice assignment: ",e.jsx("code",{className:"text-teal-300 font-mono",children:'dirs[:] = [d for d in dirs if d != ".git"]'}),"."]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Tree Walk Tuples, In-Place Pruning & Scandir Caching"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>m("walkTuple"),className:i("px-3 py-1.5 rounded-lg transition-all",a==="walkTuple"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"`os.walk` 3-Tuple"}),e.jsx("button",{onClick:()=>m("pruningFlow"),className:i("px-3 py-1.5 rounded-lg transition-all",a==="pruningFlow"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"In-Place `dirs[:]` Pruning"}),e.jsx("button",{onClick:()=>m("scandirSpeed"),className:i("px-3 py-1.5 rounded-lg transition-all",a==="scandirSpeed"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"`os.scandir` Inode Cache"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining tree iteration tuple structures, in-place slice mutation pruning, and cached inode performance:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:a==="walkTuple"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"ANATOMY OF THE `(root, dirs, files)` 3-TUPLE IN `os.walk()`"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"1. `root` (Current Path)"}),e.jsx("text",{x:"15",y:"55",fill:"#38bdf8",fontSize:"8 font-mono",children:"Type: str"}),e.jsx("text",{x:"15",y:"75",fill:"#ecfdf5",fontSize:"8 font-mono",children:'"barrackpore/py_ai_2026"'}),e.jsx("text",{x:"15",y:"95",fill:"#34d399",fontSize:"8 font-mono",children:"DIRECTORY NODE"}),e.jsx("rect",{x:"15",y:"115",width:"220",height:"100",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"25",y:"140",fill:"#34d399",fontSize:"9 font-bold",children:"Current Base:"}),e.jsx("text",{x:"25",y:"160",fill:"#cbd5e1",fontSize:"8",children:"Use `os.path.join(root, f)`"}),e.jsx("text",{x:"25",y:"175",fill:"#cbd5e1",fontSize:"8",children:"to get absolute file paths."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"310",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. `dirs` (Subfolders)"}),e.jsx("text",{x:"310",y:"55",fill:"#38bdf8",fontSize:"8 font-mono",children:"Type: List[str]"}),e.jsx("text",{x:"310",y:"75",fill:"#ecfdf5",fontSize:"8 font-mono font-bold",children:"['batch1', '__pycache__']"}),e.jsx("text",{x:"310",y:"95",fill:"#34d399",fontSize:"8 font-mono",children:"MUTABLE IN-PLACE"}),e.jsx("rect",{x:"310",y:"115",width:"220",height:"100",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"320",y:"140",fill:"#38bdf8",fontSize:"9 font-bold",children:"Pruning Gateway:"}),e.jsx("text",{x:"320",y:"160",fill:"#cbd5e1",fontSize:"8",children:"Modify `dirs[:]` in-place to"}),e.jsx("text",{x:"320",y:"175",fill:"#cbd5e1",fontSize:"8",children:"skip recursing into subtrees."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"605",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"3. `files` (Filenames)"}),e.jsx("text",{x:"605",y:"55",fill:"#c084fc",fontSize:"8 font-mono",children:"Type: List[str]"}),e.jsx("text",{x:"605",y:"75",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"['stu_101.pdf', 'data.csv']"}),e.jsx("text",{x:"605",y:"95",fill:"#ecfdf5",fontSize:"8 font-mono",children:"LEAF ASSETS"}),e.jsx("rect",{x:"605",y:"115",width:"200",height:"100",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"615",y:"140",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Direct Filter:"}),e.jsx("text",{x:"615",y:"160",fill:"#cbd5e1",fontSize:"8",children:"Filter with `fnmatch` or"}),e.jsx("text",{x:"615",y:"175",fill:"#cbd5e1",fontSize:"8",children:"comprehension extensions."})]})]}):a==="pruningFlow"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"IN-PLACE SUBTREE PRUNING WITH `dirs[:] = [...]`"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"Local Variable Rebinding [FAILS TO PRUNE]"}),e.jsx("text",{x:"20",y:"65",fill:"#fca5a5",fontSize:"8 font-mono",children:"`dirs = [d for d in dirs if d != '__pycache__']`"}),e.jsx("text",{x:"20",y:"85",fill:"#fca5a5",fontSize:"8 font-mono",children:"Rebinds only local variable `dirs` in memory"}),e.jsx("text",{x:"20",y:"105",fill:"#f43f5e",fontSize:"8 font-mono font-bold",children:"os.walk() Still Traverses '__pycache__'!"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"155",fill:"#fda4af",fontSize:"9 font-bold",children:"Silent Pruning Failure:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Generator still holds reference to original mutable list."})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"In-Place Slice Assignment [SUCCESSFUL PRUNE]"}),e.jsx("text",{x:"20",y:"65",fill:"#34d399",fontSize:"8 font-mono",children:"`dirs[:] = [d for d in dirs if d != '__pycache__']`"}),e.jsx("text",{x:"20",y:"85",fill:"#34d399",fontSize:"8 font-mono",children:"Mutates internal list referenced by generator"}),e.jsx("text",{x:"20",y:"105",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"os.walk() Completely Skips '__pycache__'!"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"True Subtree Pruning:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Saves millions of disk I/O operations across large trees."})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"HIGH-SPEED `os.scandir()` VS `os.listdir() + os.stat()`"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"Legacy `os.listdir()` + `os.stat()` [SLOW]"}),e.jsx("text",{x:"20",y:"65",fill:"#fca5a5",fontSize:"8 font-mono",children:"1. `os.listdir()` fetches 10,000 filename strings"}),e.jsx("text",{x:"20",y:"85",fill:"#fca5a5",fontSize:"8 font-mono",children:"2. Loop executes 10,000 separate `os.stat()` syscalls"}),e.jsx("text",{x:"20",y:"105",fill:"#f43f5e",fontSize:"8 font-mono font-bold",children:"Total Syscalls: 10,001 System Calls!"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"155",fill:"#fda4af",fontSize:"9 font-bold",children:"Heavy Disk I/O Overhead:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Queries kernel for metadata on every individual file."})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"Modern `os.scandir()` [UP TO 10X FASTER]"}),e.jsx("text",{x:"20",y:"65",fill:"#34d399",fontSize:"8 font-mono",children:"1. Reads directory stream & file metadata in 1 pass"}),e.jsx("text",{x:"20",y:"85",fill:"#34d399",fontSize:"8 font-mono",children:"2. Yields `DirEntry` objects with CACHED attributes"}),e.jsx("text",{x:"20",y:"105",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"Total Syscalls: Only 1 Directory Stream Call!"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"C-Level Attribute Caching:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Retrieves file size and type without extra stat calls."})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Multi-Campus Storage Tree Crawler & Indexer"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Configure traversal direction, toggle cache and archive subtree pruning, filter by wildcard extension patterns, and observe live crawler telemetry:"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"1. Traversal Direction (`topdown` parameter):"}),e.jsxs("div",{className:"flex bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:[e.jsx("button",{onClick:()=>u(!0),className:i("flex-1 py-1.5 rounded transition-all",x?"bg-teal-900/60 text-teal-300 font-bold border border-teal-700/80":"text-slate-400 hover:text-white"),children:"Top-Down (`topdown=True`)"}),e.jsx("button",{onClick:()=>u(!1),className:i("flex-1 py-1.5 rounded transition-all",x?"text-slate-400 hover:text-white":"bg-cyan-900/60 text-cyan-300 font-bold border border-cyan-700/80"),children:"Bottom-Up (`topdown=False`)"})]})]}),e.jsxs("div",{className:"space-y-1.5 pt-1",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold",children:"2. In-Place Subtree Pruning (`dirs[:]`):"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs font-mono",children:[e.jsxs("label",{className:"flex items-center gap-1.5 cursor-pointer bg-slate-900 p-2 rounded border border-slate-800",children:[e.jsx("input",{type:"checkbox",checked:o,onChange:t=>y(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"Prune Caches (`__pycache__`)"})]}),e.jsxs("label",{className:"flex items-center gap-1.5 cursor-pointer bg-slate-900 p-2 rounded border border-slate-800",children:[e.jsx("input",{type:"checkbox",checked:l,onChange:t=>_(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"Prune Archives (`archive_*`)"})]})]})]}),e.jsxs("div",{className:"space-y-1.5 pt-1",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-purple-400 font-bold",children:"3. Extension Wildcard Pattern (`fnmatch`):"}),e.jsx("div",{className:"flex bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:["*.pdf","*.json","*.csv","*.*"].map(t=>e.jsx("button",{onClick:()=>w(t),className:i("flex-1 py-1 rounded transition-all",p===t?"bg-purple-900/60 text-purple-300 font-bold border border-purple-700/80":"text-slate-400 hover:text-white"),children:t},t))})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-xs font-mono",children:[e.jsxs("div",{className:"p-2.5 bg-slate-900 rounded-lg border border-slate-800",children:[e.jsx("div",{className:"text-slate-400 text-[10px] uppercase",children:"Visited Dirs"}),e.jsx("div",{className:"text-white font-bold text-base",children:f.length})]}),e.jsxs("div",{className:"p-2.5 bg-emerald-950/40 border border-emerald-800/60 rounded-lg",children:[e.jsx("div",{className:"text-emerald-400 text-[10px] uppercase",children:"Files Matched"}),e.jsx("div",{className:"text-emerald-300 font-bold text-base",children:c.length})]}),e.jsxs("div",{className:"p-2.5 bg-amber-950/40 border border-amber-800/60 rounded-lg",children:[e.jsx("div",{className:"text-amber-400 text-[10px] uppercase",children:"Pruned Subtrees"}),e.jsx("div",{className:"text-amber-300 font-bold text-base",children:j})]})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs space-y-1",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:"Generated Python os.walk & fnmatch Traversal:"}),e.jsx("pre",{className:"text-teal-300 text-[11px] leading-relaxed break-all font-mono overflow-x-auto",children:N})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[160px] font-mono text-xs space-y-1.5",children:[e.jsxs("div",{className:"flex justify-between text-[10px] font-bold uppercase text-slate-400",children:[e.jsxs("span",{children:["Matched Assets (",c.length," records):"]}),e.jsxs("span",{className:"text-emerald-400",children:[(g/1024).toFixed(1)," KB Total"]})]}),c.map((t,r)=>e.jsxs("div",{className:"flex justify-between text-[11px] text-slate-200 border-b border-slate-800/60 pb-0.5",children:[e.jsxs("span",{children:[e.jsx("strong",{className:"text-teal-300",children:t.filename})," (",t.dir,")"]}),e.jsxs("span",{className:"text-slate-400 font-mono",children:[t.sizeBytes," B"]})]},r))]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Traversal & Scanning Reference Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Function / Protocol"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Traversal Scope"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Pruning Support"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Best Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"`os.walk(topdown=True)`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Full Directory Tree"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Yes (`dirs[:] = [...]`)"}),e.jsx("td",{className:"py-3 px-4",children:"Deep tree crawling with selective exclusions"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"`os.scandir(path)`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Single Directory"}),e.jsx("td",{className:"py-3 px-4 text-slate-400",children:"N/A (Single level)"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Ultra fast scanning with cached inode stats"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"`glob.iglob(recursive)`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Wildcard Patterns"}),e.jsx("td",{className:"py-3 px-4 text-slate-400",children:"No"}),e.jsx("td",{className:"py-3 px-4",children:"Lazy streaming wildcard pattern searches"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"`fnmatch.filter(names)`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"In-Memory List"}),e.jsx("td",{className:"py-3 px-4 text-slate-400",children:"N/A"}),e.jsx("td",{className:"py-3 px-4",children:"Fast wildcard filtering over pre-collected strings"})]})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating tree traversal, scandir performance benchmarks, glob/fnmatch patterns, and institutional storage tree crawlers:"}),e.jsx(k,{files:[{filename:"os_walk_tree_traversal_mechanics.py",code:A,description:"(root, dirs, files) tuples, in-place pruning, and topdown=False."},{filename:"os_scandir_high_performance_iterator.py",code:C,description:"os.scandir, DirEntry caching, and performance benchmarking."},{filename:"glob_and_fnmatch_pattern_matching.py",code:P,description:"glob.glob, glob.iglob, and fnmatch pattern filtering."},{filename:"institutional_multicampus_tree_crawler_and_indexer.py",code:I,description:"os.walk, os.scandir, in-place pruning, and storage telemetry indexing."}]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Rebinding `dirs` Variable"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"dirs = [d for d in dirs if d != '.git']"})," rebinds the local variable and fails to prune the walk!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always use slice assignment: ",e.jsx("code",{className:"text-emerald-300",children:"dirs[:] = [...]"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Infinite Loops with `followlinks=True`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Enabling ",e.jsx("code",{className:"text-amber-300 font-mono",children:"followlinks=True"})," on cyclical directory symlinks creates infinite recursive loops."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Track visited device/inode sets: ",e.jsx("code",{className:"text-emerald-300",children:"(st_dev, st_ino)"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Top-Down Tree Deletion"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Attempting to delete folders with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"topdown=True"})," raises ",e.jsx("code",{className:"text-slate-300",children:"OSError: Directory not empty"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"topdown=False"})," or ",e.jsx("code",{className:"text-emerald-300",children:"shutil.rmtree()"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Slow `os.listdir() + os.stat()`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Executing ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"os.stat()"})," inside an ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"os.listdir()"})," loop issues N separate syscalls."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"os.scandir()"})," for cached ",e.jsx("code",{className:"text-emerald-300",children:"DirEntry"})," stats."]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering os.walk, in-place pruning, os.scandir caching, glob.iglob, and fnmatch patterns:"}),e.jsx(S,{questions:z})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with os.walk pruning patterns, scandir optimization templates, and crawler recipes:"}),e.jsx("div",{className:"mb-10",children:e.jsx(T,{content:D,filename:"python_topic2_directory_traversal_notes.txt",title:"Print Topic 2 Study Notes"})}),e.jsx(E,{})]})]})]})}export{B as default};
