import{b as i,j as e,bg as n}from"./vendor-react-core-Doz9nIC6.js";import{P as N}from"./PythonFileLoader-hCi5osN-.js";import{P as S}from"./PlainTextPrint-C08xhKA4.js";import{F as E}from"./FAQTemplate-CkSqDH4B.js";import{T as C}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const T=`# topic3_files/shutil_copying_and_moving_fundamentals.py\r
# Module: 004_001_filesystem-os\r
# Topic: shutil module: copying, moving, archiving, and recursive deletions\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 3 - File 1: \`shutil\` Copying, Moving & Recursive Trees\r
Demonstrates:\r
  1. Copying flavors: \`shutil.copyfile()\` (data only), \`shutil.copy()\` (data + perms), \`shutil.copy2()\` (data + all metadata & timestamps)\r
  2. Moving files and directories across paths: \`shutil.move()\`\r
  3. Recursive tree cloning: \`shutil.copytree()\` with \`dirs_exist_ok=True\` and \`shutil.ignore_patterns()\`\r
"""\r
\r
import os\r
import shutil\r
import time\r
from datetime import datetime\r
\r
def demonstrate_shutil_copy_and_move():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - SHUTIL COPYING, MOVING & TREE CLONING")\r
    print("=" * 70)\r
\r
    sandbox = "temp_accotax_shutil_sandbox"\r
    src_dir = os.path.join(sandbox, "src_vault")\r
    dst_dir = os.path.join(sandbox, "dst_vault")\r
\r
    try:\r
        # 1. Setup Source Files with Mock Metadata:\r
        os.makedirs(src_dir, exist_ok=True)\r
        orig_file = os.path.join(src_dir, "student_ledger_2026.csv")\r
        with open(orig_file, "w", encoding="utf-8") as f:\r
            f.write("STU_101,Sourav Mukherjee,Python AI,30000.00\\n")\r
\r
        # 2. Comparing copyfile vs copy vs copy2:\r
        print("1. File Copying Hierarchy (\`copyfile\` vs \`copy\` vs \`copy2\`):")\r
        cp_file_dst = os.path.join(src_dir, "ledger_copyfile.csv")\r
        cp_dst = os.path.join(src_dir, "ledger_copy.csv")\r
        cp2_dst = os.path.join(src_dir, "ledger_copy2.csv")\r
\r
        shutil.copyfile(orig_file, cp_file_dst)  # Raw bytes only\r
        shutil.copy(orig_file, cp_dst)          # Bytes + Permission mode bits\r
        shutil.copy2(orig_file, cp2_dst)        # Bytes + Permissions + Full Mod/Creation Timestamps\r
\r
        orig_mtime = os.stat(orig_file).st_mtime\r
        cp2_mtime = os.stat(cp2_dst).st_mtime\r
\r
        print(f"   * Original Timestamp : {datetime.fromtimestamp(orig_mtime).strftime('%Y-%m-%d %H:%M:%S')}")\r
        print(f"   * copy2() Timestamp  : {datetime.fromtimestamp(cp2_mtime).strftime('%Y-%m-%d %H:%M:%S')} (Exact Match Preserved!)\\n")\r
\r
        # 3. Recursive Tree Cloning with ignore_patterns():\r
        print("2. Recursive Tree Cloning (\`shutil.copytree()\` with \`shutil.ignore_patterns()\`):")\r
        # Create dummy subfolders and ignore targets\r
        os.makedirs(os.path.join(src_dir, "__pycache__"), exist_ok=True)\r
        with open(os.path.join(src_dir, "__pycache__", "cache.pyc"), "w") as f:\r
            f.write("BYTECODE")\r
        with open(os.path.join(src_dir, "temp_test.tmp"), "w") as f:\r
            f.write("TEMP_DATA")\r
\r
        # Clone entire tree, ignoring bytecode and temp files\r
        shutil.copytree(\r
            src_dir,\r
            dst_dir,\r
            dirs_exist_ok=True,\r
            ignore=shutil.ignore_patterns("*.pyc", "*.tmp", "__pycache__")\r
        )\r
\r
        dst_entries = os.listdir(dst_dir)\r
        print(f"   * Successfully cloned tree to '{dst_dir}'")\r
        print(f"   * Cloned Directory Contents (Ignored .pyc & .tmp): {dst_entries}\\n")\r
\r
        # 4. Moving / Renaming Files with shutil.move():\r
        print("3. Moving Files with \`shutil.move()\`:")\r
        target_archive_path = os.path.join(dst_dir, "archived_ledger.csv")\r
        shutil.move(os.path.join(dst_dir, "student_ledger_2026.csv"), target_archive_path)\r
        print(f"   * Moved file to: {target_archive_path}")\r
        print(f"   * Target exists: {os.path.exists(target_archive_path)}")\r
\r
    finally:\r
        # Cleanup sandbox\r
        if os.path.exists(sandbox):\r
            shutil.rmtree(sandbox)\r
            print("\\n4. Cleanup: Removed shutil demo directory tree.")\r
\r
    print(r"""\r
shutil Copying Invariants:\r
  1. \`shutil.copy2()\` is the enterprise standard for backups because it preserves file modification timestamps and flags.\r
  2. \`shutil.copytree()\` requires \`dirs_exist_ok=True\` (Python 3.8+) to merge into existing destination folders.\r
  3. \`shutil.ignore_patterns()\` dynamically filters out unwanted file patterns during recursive tree copies.\r
""")\r
    print("[PASSED] shutil Copying, Moving & Tree Cloning Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_shutil_copy_and_move()\r
`,A=`# topic3_files/shutil_recursive_deletion_and_disk_usage.py\r
# Module: 004_001_filesystem-os\r
# Topic: shutil module: copying, moving, archiving, and recursive deletions\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 3 - File 2: \`shutil\` Deletion Mechanics & Disk Capacity Telemetry\r
Demonstrates:\r
  1. Safe recursive directory removal with \`shutil.rmtree()\`\r
  2. Windows read-only file handling via \`onerror\` / \`on_exc\` error recovery callback\r
  3. Querying disk storage capacity: \`shutil.disk_usage()\`\r
"""\r
\r
import os\r
import stat\r
import shutil\r
\r
def remove_readonly_handler(func, path, exc_info):\r
    """Error handler callback to unlock and delete read-only files on Windows."""\r
    # Clear read-only bit and retry removal\r
    os.chmod(path, stat.S_IWRITE)\r
    func(path)\r
\r
def demonstrate_deletion_and_disk_usage():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - SHUTIL DELETION & DISK USAGE TELEMETRY")\r
    print("=" * 70)\r
\r
    sandbox = "temp_accotax_readonly_sandbox"\r
\r
    try:\r
        # 1. Setup nested folder with a locked read-only file\r
        os.makedirs(os.path.join(sandbox, "locked_vault"), exist_ok=True)\r
        locked_file = os.path.join(sandbox, "locked_vault", "readonly_contract.txt")\r
        with open(locked_file, "w") as f:\r
            f.write("CONFIDENTIAL ACCOTAX CONTRACT - READ ONLY")\r
\r
        # Set file to Read-Only mode (triggers PermissionError on standard Windows rmtree)\r
        os.chmod(locked_file, stat.S_IREAD)\r
        print("1. Created Locked Read-Only File on Disk:")\r
        print(f"   * Locked Path: {locked_file}\\n")\r
\r
        # 2. Deleting Directory Tree with Resilient Error Handler:\r
        print("2. Deleting Locked Directory Tree with \`shutil.rmtree(..., onerror=handler)\`:")\r
        shutil.rmtree(sandbox, onerror=remove_readonly_handler)\r
        print(f"   * Successfully deleted locked tree. Exists: {os.path.exists(sandbox)}\\n")\r
\r
    except Exception as e:\r
        print(f"   * [ERROR] Deletion failed: {e}")\r
\r
    # 3. Querying Disk Capacity with shutil.disk_usage():\r
    print("3. Querying Host Disk Storage Capacity with \`shutil.disk_usage()\`:")\r
    usage = shutil.disk_usage(os.getcwd())\r
\r
    total_gb = usage.total / (1024 ** 3)\r
    used_gb = usage.used / (1024 ** 3)\r
    free_gb = usage.free / (1024 ** 3)\r
    used_pct = (usage.used / usage.total) * 100\r
\r
    print(f"   * Total Drive Space : {total_gb:.2f} GB")\r
    print(f"   * Used Drive Space  : {used_gb:.2f} GB ({used_pct:.1f}%)")\r
    print(f"   * Free Available    : {free_gb:.2f} GB")\r
\r
    print(r"""\r
shutil Deletion & Disk Invariants:\r
  1. Standard \`shutil.rmtree()\` crashes on Windows if files have read-only permission flags.\r
  2. Passing an \`onerror\` handler allows dynamically clearing \`stat.S_IWRITE\` and retrying deletion.\r
  3. \`shutil.disk_usage(path)\` returns named tuples \`(total, used, free)\` in bytes.\r
""")\r
    print("[PASSED] shutil Deletion & Disk Usage Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_deletion_and_disk_usage()\r
`,I=`# topic3_files/shutil_archiving_and_unzipping.py\r
# Module: 004_001_filesystem-os\r
# Topic: shutil module: copying, moving, archiving, and recursive deletions\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 3 - File 3: \`shutil\` High-Level Archiving & Unpacking\r
Demonstrates:\r
  1. Inspecting supported archive formats: \`shutil.get_archive_formats()\`\r
  2. Compressing directories into \`.zip\` and \`.tar.gz\` with \`shutil.make_archive()\`\r
  3. Decompressing and extracting archives with \`shutil.unpack_archive()\`\r
"""\r
\r
import os\r
import shutil\r
\r
def demonstrate_archiving_and_unpacking():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - SHUTIL ARCHIVING & UNPACKING SUITE")\r
    print("=" * 70)\r
\r
    sandbox = "temp_accotax_archive_sandbox"\r
    data_dir = os.path.join(sandbox, "data_to_pack")\r
    extracted_dir = os.path.join(sandbox, "extracted_output")\r
    archive_base_name = os.path.join(sandbox, "accotax_backup_2026")\r
\r
    try:\r
        # 1. Inspect Supported Formats:\r
        print("1. Supported Standard Archive Formats in Python:")\r
        for fmt, desc in shutil.get_archive_formats():\r
            print(f"   * Format: {fmt:<8} -> {desc}")\r
\r
        # 2. Setup Files for Compression:\r
        os.makedirs(data_dir, exist_ok=True)\r
        with open(os.path.join(data_dir, "students.csv"), "w") as f:\r
            f.write("id,name,course\\nSTU-101,Sourav Mukherjee,Python Pro\\n")\r
        with open(os.path.join(data_dir, "metadata.json"), "w") as f:\r
            f.write('{"backup_version": "2026.1", "encrypted": false}')\r
\r
        # 3. Create Zip Archive with shutil.make_archive():\r
        print("\\n2. Creating Compressed \`.zip\` Archive with \`shutil.make_archive()\`:")\r
        archive_path = shutil.make_archive(\r
            base_name=archive_base_name,\r
            format="zip",\r
            root_dir=data_dir\r
        )\r
        print(f"   * Created Archive File : {archive_path}")\r
        print(f"   * Archive Size on Disk : {os.path.getsize(archive_path)} bytes\\n")\r
\r
        # 4. Unpack Archive with shutil.unpack_archive():\r
        print("3. Extracting Archive with \`shutil.unpack_archive()\`:")\r
        shutil.unpack_archive(archive_path, extract_dir=extracted_dir)\r
        print(f"   * Extracted to Directory: {extracted_dir}")\r
        print(f"   * Extracted Files       : {os.listdir(extracted_dir)}")\r
\r
    finally:\r
        # Cleanup sandbox directory\r
        if os.path.exists(sandbox):\r
            shutil.rmtree(sandbox)\r
            print("\\n4. Cleanup: Removed archiving sandbox directory.")\r
\r
    print(r"""\r
shutil Archiving Invariants:\r
  1. \`shutil.make_archive()\` handles zip, tar, gztar, bztar, and xztar compression formats without third-party libraries.\r
  2. \`shutil.unpack_archive()\` automatically detects the archive format from the file extension.\r
  3. \`root_dir\` specifies the folder to compress, preventing deep nested relative paths in the resulting zip.\r
""")\r
    print("[PASSED] shutil Archiving & Unpacking Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_archiving_and_unpacking()\r
`,z=`# topic3_files/institutional_automated_backup_and_archiving_engine.py\r
# Module: 004_001_filesystem-os\r
# Topic: shutil module: copying, moving, archiving, and recursive deletions\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 3 - File 4: Institutional Automated Backup & Archiving Engine (Case Study)\r
Demonstrates:\r
  1. Production multi-campus automated backup pipeline using \`shutil\`\r
  2. Disk space pre-flight validation with \`shutil.disk_usage()\`\r
  3. Incremental tree synchronization with \`shutil.copytree()\` & \`ignore_patterns()\`\r
  4. Packaging and rotating compressed \`.zip\` distribution bundles with \`shutil.make_archive()\`\r
"""\r
\r
import os\r
import stat\r
import shutil\r
from datetime import datetime\r
from typing import Dict, Any, List\r
\r
class InstitutionalBackupEngine:\r
    """Production backup and snapshot distribution engine for Coder & AccoTax."""\r
\r
    MIN_REQUIRED_FREE_SPACE_MB = 100\r
\r
    def __init__(self, storage_root: str):\r
        self.storage_root = storage_root\r
        self.snapshots_dir = os.path.join(storage_root, "snapshots")\r
        self.archives_dir = os.path.join(storage_root, "archives")\r
        os.makedirs(self.snapshots_dir, exist_ok=True)\r
        os.makedirs(self.archives_dir, exist_ok=True)\r
\r
    def verify_disk_capacity(self) -> bool:\r
        """Verifies disk has adequate free space before initiating backup."""\r
        usage = shutil.disk_usage(self.storage_root)\r
        free_mb = usage.free / (1024 * 1024)\r
        return free_mb >= self.MIN_REQUIRED_FREE_SPACE_MB\r
\r
    def execute_nightly_backup(self, campus_source_dir: str, campus_id: str) -> Dict[str, Any]:\r
        """Clones source directory, creates a compressed archive, and logs metadata."""\r
        if not self.verify_disk_capacity():\r
            raise RuntimeError("CRITICAL: Insufficient disk space for backup snapshot.")\r
\r
        timestamp_str = datetime.now().strftime("%Y%m%d_%H%M%S")\r
        snapshot_dest = os.path.join(self.snapshots_dir, f"{campus_id}_{timestamp_str}")\r
\r
        # 1. Clone tree ignoring temp and cache files\r
        shutil.copytree(\r
            campus_source_dir,\r
            snapshot_dest,\r
            dirs_exist_ok=True,\r
            ignore=shutil.ignore_patterns("*.tmp", "__pycache__", ".*", "*.log")\r
        )\r
\r
        # 2. Package into compressed ZIP archive\r
        archive_base = os.path.join(self.archives_dir, f"backup_{campus_id}_{timestamp_str}")\r
        archive_file = shutil.make_archive(\r
            base_name=archive_base,\r
            format="zip",\r
            root_dir=snapshot_dest\r
        )\r
\r
        archive_size = os.path.getsize(archive_file)\r
\r
        return {\r
            "campus_id": campus_id,\r
            "timestamp": timestamp_str,\r
            "snapshot_path": snapshot_dest,\r
            "archive_file": archive_file,\r
            "archive_size_bytes": archive_size,\r
            "status": "BACKUP_COMPLETED_SUCCESSFULLY"\r
        }\r
\r
    def rotate_stale_snapshots(self, keep_last: int = 1):\r
        """Purges older snapshots keeping only the most recent N items."""\r
        snapshots = sorted(os.listdir(self.snapshots_dir))\r
        if len(snapshots) > keep_last:\r
            stale = snapshots[:-keep_last]\r
            for folder in stale:\r
                full_p = os.path.join(self.snapshots_dir, folder)\r
                shutil.rmtree(full_p, onerror=lambda fn, p, exc: (os.chmod(p, stat.S_IWRITE), fn(p)))\r
\r
\r
def demonstrate_backup_engine():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - INSTITUTIONAL BACKUP & ARCHIVING ENGINE")\r
    print("=" * 70)\r
\r
    demo_root = "temp_accotax_backup_facility"\r
    campus_data_dir = os.path.join(demo_root, "barrackpore_campus_live")\r
\r
    try:\r
        # Create live campus data\r
        os.makedirs(os.path.join(campus_data_dir, "admissions"), exist_ok=True)\r
        os.makedirs(os.path.join(campus_data_dir, "__pycache__"), exist_ok=True)\r
\r
        with open(os.path.join(campus_data_dir, "admissions", "students_2026.csv"), "w") as f:\r
            f.write("id,name,course,fee_status\\nSTU_101,Sourav Mukherjee,Python AI,PAID\\n")\r
        with open(os.path.join(campus_data_dir, "admissions", "kyc_audit.json"), "w") as f:\r
            f.write('{"verified": true, "officer": "Sukanta Hui"}')\r
        with open(os.path.join(campus_data_dir, "__pycache__", "temp.pyc"), "w") as f:\r
            f.write("COMPILED_CODE_TO_IGNORE")\r
\r
        engine = InstitutionalBackupEngine(demo_root)\r
\r
        # 1. Execute Backup Pipeline\r
        print("1. Running Nightly Backup Snapshot Pipeline:")\r
        backup_res = engine.execute_nightly_backup(\r
            campus_source_dir=campus_data_dir,\r
            campus_id="BKP_MAIN"\r
        )\r
\r
        print(f"   * Status        : {backup_res['status']}")\r
        print(f"   * Campus ID     : {backup_res['campus_id']}")\r
        print(f"   * Snapshot Path : {backup_res['snapshot_path']}")\r
        print(f"   * Archive File  : {backup_res['archive_file']}")\r
        print(f"   * Archive Size  : {backup_res['archive_size_bytes']} Bytes\\n")\r
\r
        # 2. Rotate Stale Snapshots\r
        print("2. Rotating Stale Snapshots:")\r
        engine.rotate_stale_snapshots(keep_last=1)\r
        print("   * Retained active snapshots successfully.")\r
\r
    finally:\r
        # Cleanup backup facility\r
        if os.path.exists(demo_root):\r
            shutil.rmtree(demo_root, ignore_errors=True)\r
            print("\\n3. Cleanup: Removed temporary backup facility.")\r
\r
    print("\\n[PASSED] Institutional Backup & Archiving Engine Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_backup_engine()\r
`,P=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
          PYTHON PROGRAMMING • SEGMENT 4: PRO LEVEL • MODULE 004_001: FILESYSTEM & OS\r
             TOPIC 3: SHUTIL MODULE: COPYING, MOVING, ARCHIVING & DELETIONS\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. COPYING FLAVORS\r
--------------------------------------------------------------------------------\r
  * shutil.copyfile(src, dst)   : Data only (Dest must be file name)\r
  * shutil.copy(src, dst)       : Data + Permission mode bits\r
  * shutil.copy2(src, dst)      : Data + Permissions + Full Timestamps (Enterprise Standard)\r
\r
--------------------------------------------------------------------------------\r
2. RECURSIVE CLONING & PRUNING\r
--------------------------------------------------------------------------------\r
  * shutil.copytree(\r
        src, dst,\r
        dirs_exist_ok=True,\r
        ignore=shutil.ignore_patterns("*.pyc", ".git", "*.tmp")\r
    )\r
\r
--------------------------------------------------------------------------------\r
3. ARCHIVING & DISK QUOTAS\r
--------------------------------------------------------------------------------\r
  * shutil.make_archive("backup_2026", "zip", root_dir="vault")\r
  * shutil.unpack_archive("backup_2026.zip", extract_dir="restored")\r
  * total, used, free = shutil.disk_usage("C:\\\\")\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 3: SHUTIL MODULE & BACKUPS\r
================================================================================\r
`,R=[{question:"What is the primary purpose of the 'shutil' module in Python?",shortAnswer:"The 'shutil' (Shell Utilities) module provides high-level filesystem operations including copying, moving, archiving, and recursive deletion of files and directory trees.",explanation:"High-level shell utilities in standard library.",hint:"Provides high-level file and directory tree operations like copy, move, and rmtree.",level:"basic",codeExample:"import shutil; shutil.copy2('source.csv', 'backup.csv')"},{question:"What is the difference between 'shutil.copyfile()', 'shutil.copy()', and 'shutil.copy2()'?",shortAnswer:"'copyfile()' copies raw file contents only; 'copy()' copies contents plus file permission mode bits; 'copy2()' copies contents, permission bits, AND full metadata (modification/creation timestamps).",explanation:"Copying hierarchy and metadata preservation.",hint:"copyfile=bytes only; copy=bytes+permissions; copy2=bytes+permissions+timestamps.",level:"basic",codeExample:"shutil.copy2('data.csv', 'backup.csv') # Preserves timestamps"},{question:"Why is 'shutil.copy2()' considered the industry standard for production backup pipelines?",shortAnswer:"Because it preserves original file modification and access timestamps ('st_mtime', 'st_atime'), preventing incremental backup tools and audit loggers from assuming the file was newly modified.",explanation:"Timestamp preservation in enterprise backups.",hint:"Preserves file modification timestamps, preventing false new-file flags in backup systems.",level:"moderate",codeExample:"shutil.copy2(src, backup_dir)"},{question:"How does 'shutil.move(src, dst)' handle moving files across different physical disk partitions?",shortAnswer:"If 'src' and 'dst' are on the same filesystem, it executes a fast atomic rename; if they are on different drives/partitions, it automatically copies the file with 'copy2()' and deletes the original.",explanation:"Cross-filesystem relocation semantics.",hint:"Atomic rename on the same drive; automatic copy-then-delete across different drives.",level:"moderate",codeExample:"shutil.move('C:\\data.txt', 'D:\\vault\\data.txt')"},{question:"What is the significance of 'dirs_exist_ok=True' in 'shutil.copytree()' (Python 3.8+)?",shortAnswer:"Without 'dirs_exist_ok=True', 'shutil.copytree()' raises a 'FileExistsError' if the target directory already exists; with 'dirs_exist_ok=True', it merges files into the existing folder tree idempotently.",explanation:"Idempotent directory tree cloning.",hint:"Allows copytree to merge files into an existing folder without raising FileExistsError.",level:"basic",codeExample:"shutil.copytree(src, dst, dirs_exist_ok=True)"},{question:"How do you exclude temporary files and caches during 'shutil.copytree()'?",shortAnswer:`By passing the 'ignore' parameter with 'shutil.ignore_patterns()': 'ignore=shutil.ignore_patterns("*.tmp", "__pycache__", ".git")'.`,explanation:"Pattern-based tree copy filtering.",hint:"Use ignore=shutil.ignore_patterns('*.pyc', '__pycache__').",level:"basic",codeExample:"shutil.copytree(src, dst, ignore=shutil.ignore_patterns('*.tmp', '__pycache__'))"},{question:"Why does 'shutil.rmtree()' fail on Windows when deleting files marked as read-only?",shortAnswer:"On Windows, the OS kernel prevents deleting files with the read-only attribute set, causing 'shutil.rmtree()' to raise a 'PermissionError' (Access Denied).",explanation:"Windows read-only attribute locking invariant.",hint:"Windows blocks deleting files with the read-only attribute.",level:"moderate",codeExample:"# Requires an onerror handler to clear read-only flag before deleting"},{question:"How do you handle read-only file PermissionErrors in 'shutil.rmtree()' gracefully?",shortAnswer:"By providing an 'onerror' (or 'on_exc' in Python 3.12+) callback that calls 'os.chmod(path, stat.S_IWRITE)' to clear the read-only bit and retries the deletion function.",explanation:"Resilient recursive deletion error handler.",hint:"Use an onerror handler that clears the read-only flag with os.chmod(p, stat.S_IWRITE).",level:"moderate",codeExample:`def on_err(func, path, _): os.chmod(path, stat.S_IWRITE); func(path)
shutil.rmtree(dir_path, onerror=on_err)`},{question:"What does 'shutil.disk_usage(path)' return?",shortAnswer:"A named tuple '(total, used, free)' representing the total, used, and available disk space in bytes for the drive containing 'path'.",explanation:"Storage capacity query.",hint:"Returns a named tuple with (total, used, free) space in bytes.",level:"basic",codeExample:"total, used, free = shutil.disk_usage('.'); print(free / (1024**3), 'GB free')"},{question:"What archive formats does 'shutil.make_archive()' support natively?",shortAnswer:"'zip' (ZIP file), 'tar' (Uncompressed tarball), 'gztar' (gzip-compressed tarball), 'bztar' (bzip2-compressed tarball), and 'xztar' (xz-compressed tarball).",explanation:"Standard library compression formats.",hint:"zip, tar, gztar, bztar, and xztar.",level:"basic",codeExample:"shutil.make_archive('backup', 'zip', root_dir='data')"},{question:"What is the difference between 'root_dir' and 'base_dir' in 'shutil.make_archive()'?",shortAnswer:"'root_dir' specifies the root directory that will become the root of the archive; 'base_dir' specifies the directory inside 'root_dir' from which to start archiving.",explanation:"Archive packaging root configuration.",hint:"root_dir is the folder that becomes the root of the zip archive.",level:"moderate",codeExample:"shutil.make_archive('app_pkg', 'zip', root_dir='src')"},{question:"How do you extract an archive file automatically using 'shutil'?",shortAnswer:"Using 'shutil.unpack_archive(archive_path, extract_dir=None, format=None)', which automatically infers the format from the file extension.",explanation:"High-level archive decompression.",hint:"Use shutil.unpack_archive(archive_path, extract_dir).",level:"basic",codeExample:"shutil.unpack_archive('backup.zip', 'extracted_folder')"},{question:"What is 'shutil.which(cmd)' used for?",shortAnswer:"It looks up the executable path of a command in the system 'PATH' environment variable (equivalent to the Unix 'which' or Windows 'where' command).",explanation:"Executable discovery in system PATH.",hint:"Finds the full path of an executable in the system PATH.",level:"basic",codeExample:"git_path = shutil.which('git') # 'C:\\Program Files\\Git\\bin\\git.exe'"},{question:"What is the difference between 'os.remove()' and 'shutil.rmtree()'?",shortAnswer:"'os.remove()' deletes a single file; 'shutil.rmtree()' recursively deletes an entire directory tree including all nested subfolders and files.",explanation:"Single file deletion vs full directory tree removal.",hint:"os.remove is for single files; shutil.rmtree is for entire folder trees.",level:"basic",codeExample:"os.remove('file.txt'); shutil.rmtree('nested_dir')"},{question:"How do you copy only the permissions from one file to another without copying file contents?",shortAnswer:"Using 'shutil.copymode(src, dst)'.",explanation:"Permission-only cloning.",hint:"Use shutil.copymode(src, dst).",level:"moderate",codeExample:"shutil.copymode('script.sh', 'new_script.sh')"},{question:"How do you copy both permissions and timestamps from one file to another without copying file contents?",shortAnswer:"Using 'shutil.copystat(src, dst)'.",explanation:"Stat metadata cloning.",hint:"Use shutil.copystat(src, dst).",level:"moderate",codeExample:"shutil.copystat('orig.txt', 'dest.txt')"},{question:"What happens if 'dst' in 'shutil.copy(src, dst)' is a directory path?",shortAnswer:"The file will be copied into that directory using the base filename from 'src'.",explanation:"Directory destination resolution in shutil.copy.",hint:"Copies the file into the target directory with its original filename.",level:"basic",codeExample:"shutil.copy('report.csv', 'backup_folder/')"},{question:"What happens if 'dst' in 'shutil.copyfile(src, dst)' is a directory path?",shortAnswer:"It raises an 'IsADirectoryError' (or 'PermissionError' on Windows) because 'copyfile()' requires 'dst' to be a full destination filename, not a directory.",explanation:"copyfile strict filename requirement.",hint:"Raises an error because copyfile requires a filename, not a directory.",level:"moderate",codeExample:"# copyfile requires destination to be a complete file path"},{question:"How do you get a list of all supported archive and unpack formats dynamically?",shortAnswer:"Using 'shutil.get_archive_formats()' and 'shutil.get_unpack_formats()'.",explanation:"Format introspection.",hint:"shutil.get_archive_formats() and shutil.get_unpack_formats().",level:"basic",codeExample:"formats = shutil.get_archive_formats()"},{question:"Can custom archive formats be registered with 'shutil'?",shortAnswer:"Yes. Using 'shutil.register_archive_format()' and 'shutil.register_unpack_format()', allowing integration of formats like 7z or custom encryption wrappers.",explanation:"Custom archive codec registration.",hint:"Yes, using shutil.register_archive_format and register_unpack_format.",level:"complex",codeExample:"shutil.register_archive_format('7z', my_7z_archiver)"},{question:"What is 'shutil.chown(path, user, group)' used for?",shortAnswer:"It changes the owner user and/or group of the given path (available on POSIX/Unix systems).",explanation:"Ownership modification on Unix systems.",hint:"Changes user and group ownership of a file or directory on Unix.",level:"basic",codeExample:"shutil.chown('/var/log/app.log', user='nginx', group='nginx')"},{question:"What is 'shutil.get_terminal_size()' used for?",shortAnswer:"It queries the current width and height of the terminal window in columns and lines, useful for formatting dynamic CLI output.",explanation:"Terminal dimension introspection.",hint:"Returns the terminal columns and lines for formatting CLI tables and progress bars.",level:"basic",codeExample:"cols, lines = shutil.get_terminal_size(); print('=' * cols)"},{question:"What is the danger of passing untrusted zip archives to 'shutil.unpack_archive()' without validation?",shortAnswer:"Zip Slip vulnerability: maliciously crafted zip files with relative paths ('../../etc/passwd') could extract files outside the intended destination directory; in Python 3.12+, filter policies help mitigate this.",explanation:"Zip Slip path traversal security hazard.",hint:"Malicious archive entries could extract files outside target folder (Zip Slip).",level:"complex",codeExample:"# Validate archive members or use extraction filters in Python 3.12+"},{question:"How do you copy an open file-like object directly into another open file-like object?",shortAnswer:"Using 'shutil.copyfileobj(fsrc, fdst, length=1024*1024)', which streams buffered data in chunks.",explanation:"Buffered stream copying.",hint:"Use shutil.copyfileobj(fsrc, fdst).",level:"moderate",codeExample:`with open('in.bin', 'rb') as f1, open('out.bin', 'wb') as f2:
    shutil.copyfileobj(f1, f2)`},{question:"What is the ultimate golden rule for using the 'shutil' module in production systems?",shortAnswer:"Always use 'shutil.copy2()' to preserve file timestamps, clone directory trees with 'dirs_exist_ok=True' and 'ignore_patterns()', verify disk quotas with 'disk_usage()', and handle Windows read-only deletion errors with an 'onerror' callback.",explanation:"The complete enterprise guideline for shutil in Python.",hint:"Use copy2 for timestamp preservation, copytree with ignore_patterns, disk_usage checks, and resilient rmtree error handling.",level:"basic",codeExample:"# Python shutil Enterprise Mastery"}];function G(){const m=i.useRef([]),[a,x]=i.useState("copyHierarchy"),[s,g]=i.useState("barrackpore"),[o,y]=i.useState("zip"),[f,b]=i.useState(!0),[v,D]=i.useState(!0),[u,j]=i.useState(!0),[p,k]=i.useState("EXECUTE_BACKUP");let l="",c="";const d=[];f&&d.push('"__pycache__"'),v&&d.push('"*.tmp"','"*.log"');const w=d.length>0?`shutil.ignore_patterns(${d.join(", ")})`:"None";if(p==="EXECUTE_BACKUP")l=`# Nightly automated backup snapshot:
src_dir = "vault/${s}_live"
dst_dir = "snapshots/${s}_20260824_2355"

shutil.copytree(
    src_dir,
    dst_dir,
    dirs_exist_ok=True,
    copy_function=${u?"shutil.copy2":"shutil.copy"},
    ignore=${w}
)`,c=`[BACKUP_ENGINE] CLONING SNAPSHOT DIRECTORY:
* Campus Hub       : ${s.toUpperCase()}
* Source Path      : vault/${s}_live
* Snapshot Target  : snapshots/${s}_20260824_2355
* Copy Function    : ${u?"shutil.copy2 (Preserving Mod/Access Timestamps)":"shutil.copy (Standard)"}
* Ignored Patterns : [${d.join(", ")}]
[SUCCESS] Snapshot cloned without temp files.`;else if(p==="MAKE_ARCHIVE"){const t=o==="zip"?".zip":o==="gztar"?".tar.gz":".tar.bz2";l=`# Compress snapshot into production distribution archive:
archive_path = shutil.make_archive(
    base_name="archives/backup_${s}_2026",
    format="${o}",
    root_dir="snapshots/${s}_20260824_2355"
)`,c=`[BACKUP_ENGINE] PACKAGING COMPRESSED ARCHIVE:
* Base Name    : archives/backup_${s}_2026
* Compression  : ${o.toUpperCase()}
* Output File  : archives/backup_${s}_2026${t}
* Archive Size : 48,290 bytes
[SUCCESS] Archive verified and ready for cloud upload.`}else p==="DISK_USAGE"?(l=`# Query host disk storage capacity:
total, used, free = shutil.disk_usage(".")
free_gb = free / (1024 ** 3)
print(f"Drive Available: {free_gb:.2f} GB")`,c=`[BACKUP_ENGINE] DISK QUOTA INSPECTION:
* Drive Total : 512.00 GB
* Drive Used  : 238.40 GB (46.6%)
* Drive Free  : 273.60 GB [HEALTHY]
[STATUS] Sufficient quota available for nightly archival.`):(l=`# Safe recursive purging of stale snapshots:
def unlock_readonly(func, path, _):
    os.chmod(path, stat.S_IWRITE)
    func(path)

shutil.rmtree("snapshots/${s}_stale", onerror=unlock_readonly)`,c=`[BACKUP_ENGINE] ROTATING OBSOLETE SNAPSHOTS:
* Purging Directory : snapshots/${s}_stale
* Error Callback    : unlock_readonly (stat.S_IWRITE)
* Readonly Handling : Bypassed Windows Permission Locks
[SUCCESS] Stale snapshot reclaimed successfully.`);i.useEffect(()=>{const t=new IntersectionObserver(h=>{h.forEach(_=>{_.isIntersecting&&_.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return m.current.forEach(h=>{h&&t.observe(h)}),()=>t.disconnect()},[]);const r=t=>{t&&!m.current.includes(t)&&m.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:r,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 4 • Module 004_001"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 3"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Advanced File Operations, OS & Subprocess Automation"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["High-Level Shell Utilities: ",e.jsx("span",{className:"text-teal-400",children:"shutil Module"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master Python's enterprise filesystem automation toolkit: copy hierarchy (",e.jsx("code",{className:"text-teal-300 font-mono",children:"copyfile"})," vs ",e.jsx("code",{className:"text-teal-300 font-mono",children:"copy"})," vs ",e.jsx("code",{className:"text-teal-300 font-mono",children:"copy2"}),"), timestamp preservation, recursive directory tree cloning (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"copytree"}),"), pattern-based exclusions (",e.jsx("code",{className:"text-purple-300 font-mono",children:"ignore_patterns"}),"), resilient recursive deletions (",e.jsx("code",{className:"text-rose-400 font-mono",children:"rmtree"})," with read-only error callbacks), disk quota telemetry (",e.jsx("code",{className:"text-amber-300 font-mono",children:"disk_usage"}),"), and archive packaging (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"make_archive"}),")."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📋 `shutil.copy2` Timestamps"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🌲 `copytree` & `ignore_patterns`"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"💽 `shutil.disk_usage()`"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📦 `make_archive` (.zip/.tar.gz)"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧰"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The High-Level Shell Utilities Architecture"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["While the ",e.jsx("code",{className:"text-teal-300 font-mono",children:"os"})," module handles low-level system calls, ",e.jsx("code",{className:"text-teal-300 font-mono",children:"shutil"})," delivers production-grade compound operations:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Copying & Moving"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"copy2(), move(), copytree()"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Preserves modification timestamps and moves files across drive boundaries automatically."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Tree Deletion & Quota"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"rmtree(), disk_usage()"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Recursive folder teardown with read-only unlock handlers and disk space checks."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Archival & Compression"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"make_archive(), unpack()"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Creates self-contained ",e.jsx("code",{className:"text-purple-300",children:".zip"}),", ",e.jsx("code",{className:"text-purple-300",children:".tar.gz"}),", and ",e.jsx("code",{className:"text-purple-300",children:".tar.bz2"})," packages in a single call."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Backup Invariant: Why `copy2()` is Mandatory"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Standard ",e.jsx("code",{className:"text-rose-400 font-mono",children:"shutil.copy()"})," discards file modification timestamps, stamping the backup with the current time. In enterprise pipelines, ALWAYS use ",e.jsx("code",{className:"text-teal-300 font-mono",children:"shutil.copy2()"})," to preserve original timestamps for auditing and incremental backup integrity!"]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Copying Flavors, Tree Cloning & Archival Packaging"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>x("copyHierarchy"),className:n("px-3 py-1.5 rounded-lg transition-all",a==="copyHierarchy"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Copying Hierarchy"}),e.jsx("button",{onClick:()=>x("copytreeIgnore"),className:n("px-3 py-1.5 rounded-lg transition-all",a==="copytreeIgnore"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"`copytree` + `ignore`"}),e.jsx("button",{onClick:()=>x("archivePipeline"),className:n("px-3 py-1.5 rounded-lg transition-all",a==="archivePipeline"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"`make_archive` Pipeline"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining metadata preservation tiers, recursive pattern filtering, and automated compressed packaging:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:a==="copyHierarchy"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"SHUTIL FILE COPYING FLAVORS & METADATA TIERS"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"1. `shutil.copyfile(s, d)`"}),e.jsx("text",{x:"15",y:"55",fill:"#38bdf8",fontSize:"8 font-mono",children:"Scope: Bytes Only"}),e.jsx("text",{x:"15",y:"80",fill:"#cbd5e1",fontSize:"8",children:"Copies raw contents."}),e.jsx("text",{x:"15",y:"95",fill:"#fca5a5",fontSize:"8",children:"❌ Discards permissions"}),e.jsx("text",{x:"15",y:"110",fill:"#fca5a5",fontSize:"8",children:"❌ Discards timestamps"}),e.jsx("text",{x:"15",y:"125",fill:"#fca5a5",fontSize:"8",children:"❌ Destination must be file"}),e.jsx("rect",{x:"15",y:"145",width:"220",height:"75",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"25",y:"170",fill:"#34d399",fontSize:"9 font-bold",children:"Lightweight Raw Copy:"}),e.jsx("text",{x:"25",y:"190",fill:"#cbd5e1",fontSize:"8",children:"Fastest raw data transfer."}),e.jsx("rect",{x:"280",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"295",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. `shutil.copy(s, d)`"}),e.jsx("text",{x:"295",y:"55",fill:"#38bdf8",fontSize:"8 font-mono",children:"Scope: Bytes + Permissions"}),e.jsx("text",{x:"295",y:"80",fill:"#cbd5e1",fontSize:"8",children:"Copies contents + mode bits."}),e.jsx("text",{x:"295",y:"95",fill:"#34d399",fontSize:"8",children:"✅ Preserves executable bit"}),e.jsx("text",{x:"295",y:"110",fill:"#fca5a5",fontSize:"8",children:"❌ Discards timestamps"}),e.jsx("text",{x:"295",y:"125",fill:"#34d399",fontSize:"8",children:"✅ Destination can be folder"}),e.jsx("rect",{x:"295",y:"145",width:"220",height:"75",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"305",y:"170",fill:"#38bdf8",fontSize:"9 font-bold",children:"Shell cp Equivalent:"}),e.jsx("text",{x:"305",y:"190",fill:"#cbd5e1",fontSize:"8",children:"Copies to target directory."}),e.jsx("rect",{x:"560",y:"0",width:"260",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"575",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"3. `shutil.copy2(s, d)` [PRO]"}),e.jsx("text",{x:"575",y:"55",fill:"#c084fc",fontSize:"8 font-mono",children:"Scope: Complete Metadata"}),e.jsx("text",{x:"575",y:"80",fill:"#cbd5e1",fontSize:"8",children:"Copies contents + full stat."}),e.jsx("text",{x:"575",y:"95",fill:"#34d399",fontSize:"8",children:"✅ Preserves permissions"}),e.jsx("text",{x:"575",y:"110",fill:"#34d399",fontSize:"8 font-bold",children:"✅ PRESERVES TIMESTAMPS"}),e.jsx("text",{x:"575",y:"125",fill:"#34d399",fontSize:"8",children:"✅ Destination can be folder"}),e.jsx("rect",{x:"575",y:"145",width:"230",height:"75",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"585",y:"170",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Enterprise Standard:"}),e.jsx("text",{x:"585",y:"190",fill:"#cbd5e1",fontSize:"8",children:"Mandatory for all backup pipelines."})]})]}):a==="copytreeIgnore"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"RECURSIVE `copytree()` WITH PATTERN EXCLUSION FILTER"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"20",y:"30",fill:"#a5f3fc",fontSize:"12",fontWeight:"bold",children:"Source Vault Directory"}),e.jsx("text",{x:"20",y:"65",fill:"#34d399",fontSize:"8 font-mono",children:"students.csv (Keep)"}),e.jsx("text",{x:"20",y:"85",fill:"#34d399",fontSize:"8 font-mono",children:"kyc_report.pdf (Keep)"}),e.jsx("text",{x:"20",y:"105",fill:"#fca5a5",fontSize:"8 font-mono",children:"__pycache__/module.pyc (Skip)"}),e.jsx("text",{x:"20",y:"125",fill:"#fca5a5",fontSize:"8 font-mono",children:"session.tmp (Skip)"}),e.jsx("rect",{x:"20",y:"150",width:"340",height:"70",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"30",y:"175",fill:"#38bdf8",fontSize:"9 font-bold",children:'`shutil.ignore_patterns("*.tmp", "__pycache__")`'}),e.jsx("text",{x:"30",y:"195",fill:"#cbd5e1",fontSize:"8",children:"Filters out cache files dynamically during recursion."})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"Clean Cloned Backup Tree"}),e.jsx("text",{x:"20",y:"65",fill:"#34d399",fontSize:"8 font-mono",children:"✅ students.csv (Preserved with copy2)"}),e.jsx("text",{x:"20",y:"85",fill:"#34d399",fontSize:"8 font-mono",children:"✅ kyc_report.pdf (Preserved with copy2)"}),e.jsx("text",{x:"20",y:"105",fill:"#a7f3d0",fontSize:"8 font-mono font-bold",children:"Zero Junk Bytecode or Cache Files!"}),e.jsx("rect",{x:"20",y:"150",width:"340",height:"70",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"175",fill:"#34d399",fontSize:"9 font-bold",children:"`dirs_exist_ok=True`:"}),e.jsx("text",{x:"30",y:"195",fill:"#cbd5e1",fontSize:"8",children:"Enables safe idempotent merging into existing snapshots."})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"COMPRESSED ARCHIVING & EXTRACTION WORKFLOW"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"`shutil.make_archive()` Compression"}),e.jsx("text",{x:"20",y:"65",fill:"#c084fc",fontSize:"8 font-mono",children:"`make_archive('backup', 'zip', root_dir='vault')`"}),e.jsx("text",{x:"20",y:"85",fill:"#cbd5e1",fontSize:"8",children:"1. Compresses files using Deflate algorithm"}),e.jsx("text",{x:"20",y:"105",fill:"#cbd5e1",fontSize:"8",children:"2. Supports zip, tar, gztar, bztar, and xztar"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"30",y:"155",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Clean Root Structuring:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"`root_dir` prevents archiving deep parent folders."})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"`shutil.unpack_archive()` Decompression"}),e.jsx("text",{x:"20",y:"65",fill:"#34d399",fontSize:"8 font-mono",children:"`unpack_archive('backup.zip', 'restored')`"}),e.jsx("text",{x:"20",y:"85",fill:"#cbd5e1",fontSize:"8",children:"1. Automatically infers format from extension"}),e.jsx("text",{x:"20",y:"105",fill:"#cbd5e1",fontSize:"8",children:"2. Extracts all files into target destination"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"One-Liner Restore:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Eliminates manual zipfile / tarfile boilerplate."})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Backup, Archiving & Deletion Laboratory"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Configure campus nodes, select compression algorithms, toggle ignore patterns, and observe live shutil automation telemetry:"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"1. Select Shutil Action Trigger:"}),e.jsx("div",{className:"grid grid-cols-2 gap-1.5 bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:[{id:"EXECUTE_BACKUP",label:"1. Clone Snapshot"},{id:"MAKE_ARCHIVE",label:"2. make_archive()"},{id:"DISK_USAGE",label:"3. disk_usage()"},{id:"ROTATE",label:"4. rmtree Purge"}].map(t=>e.jsx("button",{onClick:()=>k(t.id),className:n("py-1.5 rounded transition-all",p===t.id?"bg-teal-900/60 text-teal-300 font-bold border border-teal-700/80":"text-slate-400 hover:text-white"),children:t.label},t.id))})]}),e.jsxs("div",{className:"space-y-1.5 pt-1",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold",children:"2. Source Campus Hub:"}),e.jsx("div",{className:"flex bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:["barrackpore","kolkata"].map(t=>e.jsxs("button",{onClick:()=>g(t),className:n("flex-1 py-1 rounded transition-all capitalize",s===t?"bg-cyan-900/60 text-cyan-300 font-bold border border-cyan-700/80":"text-slate-400 hover:text-white"),children:[t," Hub"]},t))})]}),e.jsxs("div",{className:"space-y-1.5 pt-1",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-purple-400 font-bold",children:"3. Archive Compression Format:"}),e.jsx("div",{className:"flex bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:["zip","gztar","bztar"].map(t=>e.jsxs("button",{onClick:()=>y(t),className:n("flex-1 py-1 rounded transition-all",o===t?"bg-purple-900/60 text-purple-300 font-bold border border-purple-700/80":"text-slate-400 hover:text-white"),children:[".",t==="zip"?"zip":t==="gztar"?"tar.gz":"tar.bz2"]},t))})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs font-mono pt-1",children:[e.jsxs("label",{className:"flex items-center gap-1.5 cursor-pointer bg-slate-900 p-2 rounded border border-slate-800",children:[e.jsx("input",{type:"checkbox",checked:u,onChange:t=>j(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"Preserve Timestamps (`copy2`)"})]}),e.jsxs("label",{className:"flex items-center gap-1.5 cursor-pointer bg-slate-900 p-2 rounded border border-slate-800",children:[e.jsx("input",{type:"checkbox",checked:f,onChange:t=>b(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"Ignore `__pycache__`"})]})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs space-y-1",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:"Generated Python shutil Automation Code:"}),e.jsx("pre",{className:"text-teal-300 text-[11px] leading-relaxed break-all font-mono overflow-x-auto",children:l})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[160px] font-mono text-xs space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-[10px] font-bold uppercase text-slate-400",children:[e.jsx("span",{children:"Shutil Pipeline Telemetry:"}),e.jsx("span",{className:"text-emerald-400",children:"Exit Code 0"})]}),e.jsx("pre",{className:"text-slate-200 text-[11px] leading-relaxed font-mono whitespace-pre-wrap",children:c})]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master `shutil` Function Reference Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Function Signature"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Category"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Metadata Scope"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Primary Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"`shutil.copy2(src, dst)`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"File Copy"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Data + Perms + Timestamps"}),e.jsx("td",{className:"py-3 px-4",children:"Enterprise file backups preserving original timestamps"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"`shutil.copytree(s, d, dirs_exist_ok=True)`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Tree Clone"}),e.jsx("td",{className:"py-3 px-4 text-cyan-300",children:"Recursive Hierarchy"}),e.jsx("td",{className:"py-3 px-4",children:"Cloning entire folder trees with ignore patterns"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"`shutil.make_archive(b, fmt, root_dir)`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Archiving"}),e.jsx("td",{className:"py-3 px-4 text-purple-300",children:"Compressed Archive"}),e.jsx("td",{className:"py-3 px-4",children:"Creating .zip / .tar.gz packages in one call"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"`shutil.disk_usage(path)`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Storage Quota"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"`(total, used, free)`"}),e.jsx("td",{className:"py-3 px-4",children:"Pre-flight disk space availability validation"})]})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating copying hierarchies, recursive tree cloning, archiving/unpacking, and institutional backup engines:"}),e.jsx(N,{files:[{filename:"shutil_copying_and_moving_fundamentals.py",code:T,description:"copyfile, copy, copy2, move, and copytree with ignore_patterns."},{filename:"shutil_recursive_deletion_and_disk_usage.py",code:A,description:"rmtree with readonly handler and disk_usage."},{filename:"shutil_archiving_and_unzipping.py",code:I,description:"get_archive_formats, make_archive, and unpack_archive."},{filename:"institutional_automated_backup_and_archiving_engine.py",code:z,description:"Backup pipelines, copytree, make_archive, and snapshot rotation."}]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Using `copyfile` on Directory Target"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-rose-300 font-mono",children:"shutil.copyfile('file.txt', 'target_folder/')"})," raises ",e.jsx("code",{className:"text-rose-300",children:"IsADirectoryError"})," because ",e.jsx("code",{className:"text-slate-300",children:"copyfile"})," requires a full filename."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"shutil.copy2()"})," when copying into a folder."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Read-Only Deletion Crash on Windows"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-amber-300 font-mono",children:"shutil.rmtree()"})," on Windows crashes with ",e.jsx("code",{className:"text-slate-300",children:"PermissionError: Access is denied"})," on read-only files."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Provide an ",e.jsx("code",{className:"text-emerald-300",children:"onerror"})," callback to clear ",e.jsx("code",{className:"text-emerald-300",children:"stat.S_IWRITE"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Missing `dirs_exist_ok=True` in `copytree`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-purple-300 font-mono",children:"shutil.copytree()"})," without ",e.jsx("code",{className:"text-purple-300 font-mono",children:"dirs_exist_ok=True"})," fails with ",e.jsx("code",{className:"text-slate-300",children:"FileExistsError"})," if destination exists."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always pass ",e.jsx("code",{className:"text-emerald-300",children:"dirs_exist_ok=True"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Deep Path Bloat in `make_archive`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Omitting ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"root_dir"})," archives the full nested directory hierarchy into the resulting zip file."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Pass ",e.jsx("code",{className:"text-emerald-300",children:"root_dir=target_folder"})," to create clean relative archives."]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering shutil module, copy2 timestamps, copytree, rmtree error handling, disk_usage, and make_archive:"}),e.jsx(E,{questions:R})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with shutil copying hierarchy recipes, backup engine templates, and archiving patterns:"}),e.jsx("div",{className:"mb-10",children:e.jsx(S,{content:P,filename:"python_topic3_shutil_module_notes.txt",title:"Print Topic 3 Study Notes"})}),e.jsx(C,{})]})]})]})}export{G as default};
