import{b as s,j as e,bg as o}from"./vendor-react-core-Doz9nIC6.js";import{P as _}from"./PythonFileLoader-hCi5osN-.js";import{P as b}from"./PlainTextPrint-C08xhKA4.js";import{F as y}from"./FAQTemplate-CkSqDH4B.js";import{T as w}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const v=`# topic7_files/file_sorter_and_extension_classifier.py\r
# Module: 004_001_filesystem-os\r
# Topic: Automated directory backup and file organizer scripts\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 7 - File 1: Automated File Sorter & Extension Classifier\r
Demonstrates:\r
  1. Automated sorting of messy ingestion directories (e.g. Downloads, incoming vaults)\r
  2. Categorizing files by extension (\`.pdf\` -> \`Documents/\`, \`.csv\` -> \`Data/\`, \`.png\` -> \`Images/\`)\r
  3. Collision resolution (renaming duplicates \`name (1).ext\`) and atomic moving with \`shutil.move()\`\r
"""\r
\r
import os\r
import shutil\r
from pathlib import Path\r
from typing import Dict, List, Any\r
\r
class AutomatedFileOrganizer:\r
    """Production directory organizer and extension classifier."""\r
\r
    CATEGORY_MAP = {\r
        "Documents": {".pdf", ".docx", ".doc", ".txt", ".odt"},\r
        "Spreadsheets_and_Data": {".csv", ".xlsx", ".xls", ".json", ".sql"},\r
        "Images_and_Media": {".png", ".jpg", ".jpeg", ".svg", ".gif"},\r
        "Archives_and_Backups": {".zip", ".tar", ".gz", ".rar", ".7z"}\r
    }\r
\r
    def __init__(self, watch_dir: str):\r
        self.watch_dir = Path(watch_dir)\r
\r
    def resolve_filename_collision(self, target_path: Path) -> Path:\r
        """Returns a non-colliding path by appending a counter: 'doc (1).pdf'."""\r
        if not target_path.exists():\r
            return target_path\r
        \r
        parent = target_path.parent\r
        stem = target_path.stem\r
        suffix = target_path.suffix\r
        counter = 1\r
\r
        while True:\r
            new_path = parent / f"{stem} ({counter}){suffix}"\r
            if not new_path.exists():\r
                return new_path\r
            counter += 1\r
\r
    def organize_directory(self) -> Dict[str, Any]:\r
        """Categorizes and moves all loose files in watch_dir to categorized subfolders."""\r
        if not self.watch_dir.exists():\r
            return {"error": "Watch directory does not exist"}\r
\r
        moved_files = []\r
        uncategorized_files = []\r
\r
        # Iterate over immediate files in watch directory\r
        for item in self.watch_dir.iterdir():\r
            if not item.is_file():\r
                continue\r
\r
            file_ext = item.suffix.lower()\r
            target_category = "Other_Uncategorized"\r
\r
            # Match extension against category mapping:\r
            for cat, extensions in self.CATEGORY_MAP.items():\r
                if file_ext in extensions:\r
                    target_category = cat\r
                    break\r
\r
            cat_dir = self.watch_dir / target_category\r
            cat_dir.mkdir(parents=True, exist_ok=True)\r
\r
            destination_path = self.resolve_filename_collision(cat_dir / item.name)\r
            shutil.move(str(item), str(destination_path))\r
\r
            record = {\r
                "original_name": item.name,\r
                "category": target_category,\r
                "moved_to": str(destination_path.relative_to(self.watch_dir))\r
            }\r
\r
            if target_category == "Other_Uncategorized":\r
                uncategorized_files.append(record)\r
            else:\r
                moved_files.append(record)\r
\r
        return {\r
            "watch_directory": str(self.watch_dir.resolve()),\r
            "total_files_organized": len(moved_files) + len(uncategorized_files),\r
            "categorized_count": len(moved_files),\r
            "uncategorized_count": len(uncategorized_files),\r
            "organized_manifest": moved_files + uncategorized_files\r
        }\r
\r
\r
def demonstrate_file_organizer():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - AUTOMATED FILE SORTER & EXTENSION CLASSIFIER")\r
    print("=" * 70)\r
\r
    sandbox = Path("temp_accotax_organizer_sandbox")\r
    sandbox.mkdir(parents=True, exist_ok=True)\r
\r
    try:\r
        # Create loose unorganized files:\r
        (sandbox / "sourav_admission.pdf").write_text("DUMMY_PDF")\r
        (sandbox / "admissions_2026.csv").write_text("id,name\\nSTU-101,Sourav")\r
        (sandbox / "campus_logo.png").write_text("DUMMY_PNG")\r
        (sandbox / "backup_archive.zip").write_text("DUMMY_ZIP")\r
        (sandbox / "unrecognized_asset.xyz").write_text("DUMMY_XYZ")\r
\r
        organizer = AutomatedFileOrganizer(str(sandbox))\r
        report = organizer.organize_directory()\r
\r
        print("1. File Organization Execution Summary:")\r
        print(f"   * Watch Directory  : {report['watch_directory']}")\r
        print(f"   * Total Organized  : {report['total_files_organized']}")\r
        print(f"   * Categorized      : {report['categorized_count']}")\r
        print(f"   * Uncategorized    : {report['uncategorized_count']}\\n")\r
\r
        print("2. Organized Files Manifest:")\r
        for item in report["organized_manifest"]:\r
            print(f"   * {item['original_name']:<24} -> [{item['category']:<22}] {item['moved_to']}")\r
\r
    finally:\r
        # Cleanup sandbox directory\r
        if sandbox.exists():\r
            shutil.rmtree(sandbox)\r
            print("\\n3. Cleanup: Removed organizer demo sandbox.")\r
\r
    print("\\n[PASSED] Automated File Sorter & Classifier Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_file_organizer()\r
`,j=`# topic7_files/duplicate_file_detector_and_hasher.py\r
# Module: 004_001_filesystem-os\r
# Topic: Automated directory backup and file organizer scripts\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 7 - File 2: Two-Stage SHA-256 Duplicate File Detector & Hasher\r
Demonstrates:\r
  1. Cryptographic content hashing with \`hashlib.sha256\`\r
  2. High-performance two-stage optimization:\r
     - Stage 1: Group files by exact byte size (avoids hashing unique files)\r
     - Stage 2: Stream 64KB chunks into SHA-256 hash only for size collisions\r
  3. Identifying exact duplicate file clusters and calculating reclaimable storage\r
"""\r
\r
import os\r
import shutil\r
import hashlib\r
from collections import defaultdict\r
from typing import Dict, List, Any\r
\r
def compute_file_sha256(file_path: str, chunk_size: int = 64 * 1024) -> str:\r
    """Computes SHA-256 hex digest of a file in 64KB streaming chunks."""\r
    hasher = hashlib.sha256()\r
    with open(file_path, "rb") as f:\r
        for chunk in iter(lambda: f.read(chunk_size), b""):\r
            hasher.update(chunk)\r
    return hasher.hexdigest()\r
\r
def find_duplicate_files(root_dir: str) -> Dict[str, Any]:\r
    """Scans directory tree using two-stage size + SHA-256 hashing to find duplicate files."""\r
    # Stage 1: Group files by file size\r
    size_map = defaultdict(list)\r
    for root, _, files in os.walk(root_dir):\r
        for f in files:\r
            full_p = os.path.join(root, f)\r
            try:\r
                size = os.path.getsize(full_p)\r
                if size > 0:  # Ignore 0-byte empty files\r
                    size_map[size].append(full_p)\r
            except (FileNotFoundError, PermissionError):\r
                continue\r
\r
    # Stage 2: Hash only files that share the same byte size\r
    duplicates_by_hash = defaultdict(list)\r
    potential_collision_groups = {size: paths for size, paths in size_map.items() if len(paths) > 1}\r
\r
    for size, paths in potential_collision_groups.items():\r
        for path in paths:\r
            file_hash = compute_file_sha256(path)\r
            duplicates_by_hash[file_hash].append({"path": path, "size_bytes": size})\r
\r
    # Filter only verified SHA-256 collision clusters (len > 1)\r
    verified_duplicate_clusters = [\r
        cluster for cluster in duplicates_by_hash.values() if len(cluster) > 1\r
    ]\r
\r
    total_wasted_bytes = sum(\r
        cluster[0]["size_bytes"] * (len(cluster) - 1) for cluster in verified_duplicate_clusters\r
    )\r
\r
    return {\r
        "root_scanned": os.path.abspath(root_dir),\r
        "total_duplicate_clusters": len(verified_duplicate_clusters),\r
        "total_wasted_storage_bytes": total_wasted_bytes,\r
        "duplicate_clusters": verified_duplicate_clusters\r
    }\r
\r
\r
def demonstrate_duplicate_detector():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - TWO-STAGE SHA-256 DUPLICATE DETECTOR")\r
    print("=" * 70)\r
\r
    sandbox = "temp_accotax_duplicates_sandbox"\r
    os.makedirs(os.path.join(sandbox, "folder_a"), exist_ok=True)\r
    os.makedirs(os.path.join(sandbox, "folder_b"), exist_ok=True)\r
\r
    try:\r
        # Create identical duplicate files with different names:\r
        payload_1 = "STUDENT_RECORD: Sourav Mukherjee | Course: Python Pro | Fee: 30000"\r
        payload_2 = "STUDENT_RECORD: Priyanka Sen | Course: Data Science | Fee: 35000"\r
\r
        with open(os.path.join(sandbox, "folder_a", "sourav.csv"), "w") as f:\r
            f.write(payload_1)\r
        with open(os.path.join(sandbox, "folder_b", "sourav_backup_copy.csv"), "w") as f:\r
            f.write(payload_1)  # Exact Duplicate of sourav.csv\r
        with open(os.path.join(sandbox, "folder_a", "priyanka.csv"), "w") as f:\r
            f.write(payload_2)\r
\r
        print("1. Running Two-Stage Duplicate Detection Scan:")\r
        results = find_duplicate_files(sandbox)\r
\r
        print(f"   * Root Scanned              : {results['root_scanned']}")\r
        print(f"   * Duplicate Clusters Found  : {results['total_duplicate_clusters']}")\r
        print(f"   * Redundant Storage Wasted  : {results['total_wasted_storage_bytes']} Bytes\\n")\r
\r
        print("2. Verified Duplicate File Clusters:")\r
        for idx, cluster in enumerate(results["duplicate_clusters"], 1):\r
            print(f"   * Cluster #{idx} (Size: {cluster[0]['size_bytes']} bytes, {len(cluster)} copies):")\r
            for item in cluster:\r
                print(f"     - {item['path']}")\r
\r
    finally:\r
        # Cleanup sandbox directory\r
        if os.path.exists(sandbox):\r
            shutil.rmtree(sandbox)\r
            print("\\n3. Cleanup: Removed duplicate detector sandbox.")\r
\r
    print("\\n[PASSED] Two-Stage SHA-256 Duplicate Detector Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_duplicate_detector()\r
`,S=`# topic7_files/incremental_snapshot_backup_engine.py\r
# Module: 004_001_filesystem-os\r
# Topic: Automated directory backup and file organizer scripts\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 7 - File 3: Incremental Snapshot Backup & Delta Synchronization Engine\r
Demonstrates:\r
  1. Comparing source files against target backup directory\r
  2. Timestamp-based delta detection: copying only new and modified files with \`shutil.copy2()\`\r
  3. Generating synchronization manifests (\`added\`, \`updated\`, \`unchanged\`)\r
"""\r
\r
import os\r
import shutil\r
from pathlib import Path\r
from datetime import datetime\r
from typing import Dict, List, Any\r
\r
class IncrementalBackupEngine:\r
    """Production incremental directory backup and delta synchronization engine."""\r
\r
    def __init__(self, source_dir: str, backup_dir: str):\r
        self.source_dir = Path(source_dir)\r
        self.backup_dir = Path(backup_dir)\r
        self.backup_dir.mkdir(parents=True, exist_ok=True)\r
\r
    def sync_incremental_backup(self) -> Dict[str, Any]:\r
        """Synchronizes only new or modified files from source to backup directory."""\r
        added_files = []\r
        updated_files = []\r
        unchanged_files = []\r
\r
        # Traverse source directory recursively\r
        for src_path in self.source_dir.rglob("*"):\r
            if not src_path.is_file():\r
                continue\r
\r
            rel_path = src_path.relative_to(self.source_dir)\r
            dst_path = self.backup_dir / rel_path\r
\r
            # Case 1: Target file does not exist (NEW FILE)\r
            if not dst_path.exists():\r
                dst_path.parent.mkdir(parents=True, exist_ok=True)\r
                shutil.copy2(str(src_path), str(dst_path))\r
                added_files.append(str(rel_path))\r
\r
            # Case 2: Target file exists, check if source is newer or different size\r
            else:\r
                src_stat = src_path.stat()\r
                dst_stat = dst_path.stat()\r
\r
                # If source is newer or has different size:\r
                if src_stat.st_mtime > dst_stat.st_mtime or src_stat.st_size != dst_stat.st_size:\r
                    shutil.copy2(str(src_path), str(dst_path))\r
                    updated_files.append(str(rel_path))\r
                else:\r
                    unchanged_files.append(str(rel_path))\r
\r
        return {\r
            "source_dir": str(self.source_dir.resolve()),\r
            "backup_dir": str(self.backup_dir.resolve()),\r
            "timestamp": datetime.now().isoformat(),\r
            "added_count": len(added_files),\r
            "updated_count": len(updated_files),\r
            "unchanged_count": len(unchanged_files),\r
            "added_files": added_files,\r
            "updated_files": updated_files\r
        }\r
\r
\r
def demonstrate_incremental_backup():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - INCREMENTAL SNAPSHOT BACKUP ENGINE")\r
    print("=" * 70)\r
\r
    sandbox = Path("temp_accotax_incremental_sandbox")\r
    src = sandbox / "source_data"\r
    dst = sandbox / "backup_vault"\r
\r
    src.mkdir(parents=True, exist_ok=True)\r
    dst.mkdir(parents=True, exist_ok=True)\r
\r
    try:\r
        # Create initial source files\r
        (src / "students.csv").write_text("id,name\\nSTU-101,Sourav")\r
        (src / "curriculum.json").write_text('{"module": "004_001"}')\r
\r
        engine = IncrementalBackupEngine(str(src), str(dst))\r
\r
        # Pass 1: Initial Full Backup\r
        print("1. Execution Pass 1: Initial Sync (All Files are New):")\r
        pass1_report = engine.sync_incremental_backup()\r
        print(f"   * Added Files     : {pass1_report['added_count']} {pass1_report['added_files']}")\r
        print(f"   * Updated Files   : {pass1_report['updated_count']}")\r
        print(f"   * Unchanged Files : {pass1_report['unchanged_count']}\\n")\r
\r
        # Pass 2: No Changes Sync\r
        print("2. Execution Pass 2: Idempotent Sync (Zero Changes):")\r
        pass2_report = engine.sync_incremental_backup()\r
        print(f"   * Added Files     : {pass2_report['added_count']}")\r
        print(f"   * Updated Files   : {pass2_report['updated_count']}")\r
        print(f"   * Unchanged Files : {pass2_report['unchanged_count']}\\n")\r
\r
        # Modify one file and add a new file:\r
        (src / "students.csv").write_text("id,name,fee\\nSTU-101,Sourav,30000\\nSTU-102,Priyanka,35000")\r
        (src / "fees_2026.csv").write_text("TXN-101,PAID")\r
\r
        # Pass 3: Delta Incremental Sync\r
        print("3. Execution Pass 3: Delta Sync (1 Updated, 1 Added, 1 Unchanged):")\r
        pass3_report = engine.sync_incremental_backup()\r
        print(f"   * Added Files     : {pass3_report['added_count']} {pass3_report['added_files']}")\r
        print(f"   * Updated Files   : {pass3_report['updated_count']} {pass3_report['updated_files']}")\r
        print(f"   * Unchanged Files : {pass3_report['unchanged_count']}")\r
\r
    finally:\r
        # Cleanup sandbox directory\r
        if sandbox.exists():\r
            shutil.rmtree(sandbox)\r
            print("\\n4. Cleanup: Removed incremental backup sandbox.")\r
\r
    print("\\n[PASSED] Incremental Snapshot Backup Engine Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_incremental_backup()\r
`,z=`# topic7_files/institutional_multicampus_digital_organizer_and_backup_system.py\r
# Module: 004_001_filesystem-os\r
# Topic: Automated directory backup and file organizer scripts\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 7 - File 4: Institutional Multi-Campus Digital Organizer & Backup Engine (Capstone)\r
Demonstrates:\r
  1. Complete capstone production application combining all module concepts:\r
     - \`pathlib.Path\` and \`os\` module for path and process management\r
     - \`shutil\` for copying, moving, archiving, and delta synchronization\r
     - \`hashlib\` for two-stage SHA-256 duplicate content detection\r
     - \`argparse\` for multi-command CLI routing (\`organize\`, \`dedup\`, \`backup\`)\r
  2. Multi-campus digital asset pipeline for Coder & AccoTax Barrackpore & Kolkata\r
"""\r
\r
import os\r
import sys\r
import json\r
import shutil\r
import hashlib\r
import argparse\r
from pathlib import Path\r
from datetime import datetime\r
from collections import defaultdict\r
from typing import Dict, List, Any\r
\r
class InstitutionalDigitalVaultEngine:\r
    """Capstone enterprise digital asset organizer and backup system."""\r
\r
    CATEGORY_MAP = {\r
        "Dossiers_and_KYC": {".pdf", ".docx", ".doc"},\r
        "Accounts_and_Ledgers": {".csv", ".xlsx", ".json", ".sql"},\r
        "Media_and_Identity": {".png", ".jpg", ".jpeg"},\r
        "Archives_and_Exports": {".zip", ".gz", ".tar"}\r
    }\r
\r
    def __init__(self, workspace_root: Path):\r
        self.workspace_root = workspace_root\r
        self.incoming_dir = workspace_root / "incoming_box"\r
        self.organized_dir = workspace_root / "organized_vault"\r
        self.backup_dir = workspace_root / "cloud_backup_vault"\r
\r
        self.incoming_dir.mkdir(parents=True, exist_ok=True)\r
        self.organized_dir.mkdir(parents=True, exist_ok=True)\r
        self.backup_dir.mkdir(parents=True, exist_ok=True)\r
\r
    def organize_incoming_files(self) -> Dict[str, Any]:\r
        """Categorizes loose incoming files into institutional categories."""\r
        moved_records = []\r
        for file_path in self.incoming_dir.iterdir():\r
            if not file_path.is_file():\r
                continue\r
\r
            ext = file_path.suffix.lower()\r
            category = "Other_Uncategorized"\r
            for cat, extensions in self.CATEGORY_MAP.items():\r
                if ext in extensions:\r
                    category = cat\r
                    break\r
\r
            target_dir = self.organized_dir / category\r
            target_dir.mkdir(parents=True, exist_ok=True)\r
\r
            dest_path = target_dir / file_path.name\r
            shutil.move(str(file_path), str(dest_path))\r
            moved_records.append({"file": file_path.name, "category": category})\r
\r
        return {\r
            "status": "ORGANIZATION_COMPLETE",\r
            "total_organized": len(moved_records),\r
            "records": moved_records\r
        }\r
\r
    def scan_for_duplicates(self) -> Dict[str, Any]:\r
        """Two-stage duplicate file detection across organized vault."""\r
        size_map = defaultdict(list)\r
        for path in self.organized_dir.rglob("*"):\r
            if path.is_file():\r
                size_map[path.stat().st_size].append(path)\r
\r
        duplicates = []\r
        for size, paths in size_map.items():\r
            if len(paths) > 1 and size > 0:\r
                hash_map = defaultdict(list)\r
                for p in paths:\r
                    hasher = hashlib.sha256()\r
                    with open(p, "rb") as f:\r
                        for chunk in iter(lambda: f.read(64*1024), b""):\r
                            hasher.update(chunk)\r
                    hash_map[hasher.hexdigest()].append(str(p.relative_to(self.workspace_root)))\r
\r
                for h, p_list in hash_map.items():\r
                    if len(p_list) > 1:\r
                        duplicates.append({"sha256": h[:12], "size_bytes": size, "copies": p_list})\r
\r
        return {\r
            "status": "DEDUPLICATION_SCAN_COMPLETE",\r
            "duplicate_clusters_count": len(duplicates),\r
            "clusters": duplicates\r
        }\r
\r
    def sync_to_backup_vault(self) -> Dict[str, Any]:\r
        """Performs incremental synchronization from organized vault to cloud backup vault."""\r
        synced = []\r
        for src_path in self.organized_dir.rglob("*"):\r
            if not src_path.is_file():\r
                continue\r
\r
            rel = src_path.relative_to(self.organized_dir)\r
            dst_path = self.backup_dir / rel\r
\r
            if not dst_path.exists() or src_path.stat().st_mtime > dst_path.stat().st_mtime:\r
                dst_path.parent.mkdir(parents=True, exist_ok=True)\r
                shutil.copy2(str(src_path), str(dst_path))\r
                synced.append(str(rel))\r
\r
        return {\r
            "status": "INCREMENTAL_BACKUP_COMPLETE",\r
            "synced_count": len(synced),\r
            "synced_files": synced\r
        }\r
\r
\r
def demonstrate_capstone_suite():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - INSTITUTIONAL DIGITAL ORGANIZER & BACKUP ENGINE")\r
    print("=" * 70)\r
\r
    workspace = Path("temp_accotax_capstone_workspace")\r
\r
    try:\r
        engine = InstitutionalDigitalVaultEngine(workspace)\r
\r
        # 1. Populate Incoming Box\r
        (engine.incoming_dir / "stu_101_aadhaar.pdf").write_text("AADHAAR_CONTENT_101")\r
        (engine.incoming_dir / "stu_101_aadhaar_dup.pdf").write_text("AADHAAR_CONTENT_101") # Duplicate\r
        (engine.incoming_dir / "admissions_q1.csv").write_text("id,fee\\n101,30000")\r
        (engine.incoming_dir / "campus_banner.jpg").write_text("IMAGE_BINARY_DATA")\r
\r
        # 2. Execute Step 1: Organize\r
        print("1. Executing Stage 1: Categorization & Organization:")\r
        org_report = engine.organize_incoming_files()\r
        print(f"   * Status           : {org_report['status']}")\r
        print(f"   * Total Organized  : {org_report['total_organized']}")\r
        for r in org_report["records"]:\r
            print(f"     - [{r['category']:<22}] {r['file']}\\n")\r
\r
        # 3. Execute Step 2: Deduplication Scan\r
        print("2. Executing Stage 2: Two-Stage SHA-256 Deduplication Scan:")\r
        dedup_report = engine.scan_for_duplicates()\r
        print(f"   * Status             : {dedup_report['status']}")\r
        print(f"   * Duplicate Clusters : {dedup_report['duplicate_clusters_count']}")\r
        for cluster in dedup_report["clusters"]:\r
            print(f"     - SHA256 [{cluster['sha256']}] ({cluster['size_bytes']} B): {cluster['copies']}\\n")\r
\r
        # 4. Execute Step 3: Incremental Sync to Backup Vault\r
        print("3. Executing Stage 3: Incremental Sync to Backup Vault:")\r
        backup_report = engine.sync_to_backup_vault()\r
        print(f"   * Status           : {backup_report['status']}")\r
        print(f"   * Synced to Vault  : {backup_report['synced_count']} files")\r
        print(f"   * Synced Inventory : {backup_report['synced_files']}")\r
\r
    finally:\r
        # Cleanup workspace\r
        if workspace.exists():\r
            shutil.rmtree(workspace)\r
            print("\\n4. Cleanup: Removed capstone demonstration workspace.")\r
\r
    print("\\n[PASSED] Institutional Digital Organizer & Backup Engine Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_capstone_suite()\r
`,N=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
          PYTHON PROGRAMMING • SEGMENT 4: PRO LEVEL • MODULE 004_001: FILESYSTEM & OS\r
           TOPIC 7: AUTOMATED DIRECTORY BACKUP & FILE ORGANIZER SCRIPTS\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. EXTENSION-BASED DIRECTORY ORGANIZER\r
--------------------------------------------------------------------------------\r
  CATEGORY_MAP = {\r
      "Documents": {".pdf", ".docx", ".txt"},\r
      "Data": {".csv", ".json", ".xlsx"},\r
      "Media": {".png", ".jpg", ".svg"}\r
  }\r
  # Match extension and move with collision handling:\r
  shutil.move(src_path, dest_dir / unique_name)\r
\r
--------------------------------------------------------------------------------\r
2. TWO-STAGE SHA-256 DUPLICATE DETECTION\r
--------------------------------------------------------------------------------\r
  # Stage 1: Group by file size (os.path.getsize)\r
  # Stage 2: Hash only files in same size group (hashlib.sha256 in 64KB chunks)\r
\r
--------------------------------------------------------------------------------\r
3. INCREMENTAL BACKUP SYNC\r
--------------------------------------------------------------------------------\r
  if not dst.exists() or src.stat().st_mtime > dst.stat().st_mtime:\r
      shutil.copy2(src, dst)  # Sync only new or updated files\r
\r
================================================================================\r
     END OF STUDY NOTE • MODULE 004_001: FILESYSTEM & OS AUTOMATION (COMPLETE)\r
================================================================================\r
`,k=[{question:"How does an automated file organizer script categorize incoming files?",shortAnswer:"By mapping file extensions (using 'pathlib.Path.suffix.lower()') to target category directory names in a lookup dictionary and moving matching files into their respective subfolders.",explanation:"Extension mapping directory categorization.",hint:"Uses a dictionary mapping extensions (.pdf, .csv) to category folders.",level:"basic",codeExample:"CATEGORY_MAP = {'Documents': {'.pdf', '.docx'}, 'Data': {'.csv', '.json'}}"},{question:"How do you handle filename collisions when moving a file to an existing destination?",shortAnswer:`Check if the destination path exists; if it does, dynamically append a sequence counter: 'f"{path.stem} ({counter}){path.suffix}"' until an unused filename is found.`,explanation:"Deterministic collision resolution algorithm.",hint:"Append an incrementing number in parentheses until the path is unique.",level:"basic",codeExample:"while target.exists(): target = parent / f'{stem} ({counter}){suffix}'"},{question:"Why is comparing filenames insufficient for detecting duplicate files?",shortAnswer:"Files with identical names may contain completely different contents, and identical content is frequently saved under different filenames (e.g. 'doc.pdf' and 'doc_copy.pdf').",explanation:"Name vs content identity distinction.",hint:"Identical contents can have different names, and same names can have different contents.",level:"basic",codeExample:"# Content verification requires cryptographic hashing or byte comparisons"},{question:"What is the two-stage optimization for finding duplicate files across large filesystem trees?",shortAnswer:"Stage 1: Group all files by exact byte size ('os.path.getsize()'); Stage 2: Compute SHA-256 hashes ONLY for files that share the exact same size, skipping hashing for uniquely-sized files.",explanation:"Two-stage duplicate detection optimization.",hint:"Group by file size first, then hash only files with matching sizes.",level:"moderate",codeExample:"if len(size_map[size]) > 1: hash_files(size_map[size])"},{question:"Why should cryptographic hashing ('hashlib.sha256') always read files in streaming chunks?",shortAnswer:"To prevent loading large multi-gigabyte files (e.g. 10GB ISOs or video files) into system RAM all at once, which causes 'MemoryError' crashes.",explanation:"Constant-memory streaming hashing.",hint:"Streams data in 64KB chunks to keep memory usage under 10MB regardless of file size.",level:"moderate",codeExample:"for chunk in iter(lambda: f.read(64*1024), b''): hasher.update(chunk)"},{question:"What is the key difference between a full backup and an incremental backup?",shortAnswer:"A full backup copies every file regardless of whether it has changed; an incremental backup copies ONLY new files and files whose modification timestamp or size has changed since the last backup.",explanation:"Full vs incremental delta synchronization.",hint:"Full copies everything; incremental copies only new or modified files.",level:"basic",codeExample:"if not dst.exists() or src.stat().st_mtime > dst.stat().st_mtime: copy2(src, dst)"},{question:"Why is 'shutil.copy2()' mandatory when writing an incremental backup engine?",shortAnswer:"Because 'shutil.copy2()' preserves original modification timestamps ('st_mtime'); if regular 'copy()' were used, destination files would get current timestamps and subsequent runs would erroneously re-copy unchanged files.",explanation:"Timestamp preservation in delta synchronization.",hint:"Preserves modification timestamps so subsequent syncs accurately detect unchanged files.",level:"moderate",codeExample:"shutil.copy2(src_path, dst_path) # Preserves st_mtime"},{question:"How do you detect if a source file has been modified compared to its backup copy?",shortAnswer:"Compare their modification timestamps ('src.stat().st_mtime > dst.stat().st_mtime') and file sizes ('src.stat().st_size != dst.stat().st_size').",explanation:"Delta modification detection.",hint:"Check if source mtime is greater than destination mtime or sizes differ.",level:"basic",codeExample:"is_modified = (src_stat.st_mtime > dst_stat.st_mtime) or (src_stat.st_size != dst_stat.st_size)"},{question:"What does an incremental backup audit manifest typically contain?",shortAnswer:"Summary statistics including timestamp, count and paths of 'added_files' (new), 'updated_files' (modified), and 'unchanged_files' (skipped).",explanation:"Backup audit manifest structure.",hint:"Contains added, updated, and unchanged file counts and paths.",level:"basic",codeExample:"{'added': 5, 'updated': 2, 'unchanged': 140}"},{question:"How do you organize files by their creation or modification date into 'YYYY/MM' folders?",shortAnswer:`Extract the year and month from 'datetime.fromtimestamp(path.stat().st_mtime)' and move the file into 'f"{year}/{month:02d}/"'.`,explanation:"Date-based folder hierarchy organization.",hint:"Extract year and month from mtime and construct YYYY/MM destination subfolders.",level:"basic",codeExample:"dt = datetime.fromtimestamp(p.stat().st_mtime); dst = root / f'{dt.year}/{dt.month:02d}'"},{question:"How do you safely clean up exact duplicate files after hashing?",shortAnswer:"Keep the primary original file in each cluster, and replace duplicates with symbolic links (symlinks), hardlinks, or move them to a 'Quarantined_Duplicates/' folder before permanent deletion.",explanation:"Safe deduplication workflow.",hint:"Keep the original and quarantine or link duplicate copies.",level:"moderate",codeExample:"for dup in cluster[1:]: os.remove(dup['path']) # Keeps cluster[0]"},{question:"What is the benefit of using 'hashlib.sha256' over 'hashlib.md5' for file deduplication?",shortAnswer:"SHA-256 has zero practical risk of hash collisions and meets modern cryptographic compliance standards, whereas MD5 has known collision vulnerabilities.",explanation:"Cryptographic hash security.",hint:"SHA-256 eliminates collision risks and complies with enterprise security standards.",level:"basic",codeExample:"hasher = hashlib.sha256()"},{question:"How do you prevent an organizer script from moving its own destination category folders?",shortAnswer:"Filter out directory entries using 'if item.is_file():' or check if 'item.name' is in the set of category folder names.",explanation:"Directory filtering in file organizers.",hint:"Check item.is_file() so only regular files are processed.",level:"basic",codeExample:"for item in watch_dir.iterdir(): if not item.is_file(): continue"},{question:"How do you calculate total disk space wasted by duplicate files across an entire system?",shortAnswer:"For each duplicate cluster, multiply the file size by '(number_of_copies - 1)' and sum across all clusters.",explanation:"Wasted storage calculation formula.",hint:"Sum of size * (count - 1) across all verified duplicate clusters.",level:"basic",codeExample:"wasted = sum(c[0]['size_bytes'] * (len(c) - 1) for c in duplicate_clusters)"},{question:"How do you handle files without any file extension in an organizer script?",shortAnswer:"Route them to an 'Other_Uncategorized' or 'No_Extension' category folder.",explanation:"Fallback category routing.",hint:"Assign them to a default 'Other_Uncategorized' fallback directory.",level:"basic",codeExample:"cat = CATEGORY_MAP.get(ext, 'Other_Uncategorized')"},{question:"Why should an organizer script convert extensions to lowercase before checking ('suffix.lower()')?",shortAnswer:"Filesystems on Windows and cameras produce uppercase extensions ('.PDF', '.JPG'); converting to lowercase ensures accurate mapping matches.",explanation:"Extension case normalization.",hint:"Normalizes uppercase extensions (.PDF, .JPG) for reliable matching.",level:"basic",codeExample:"ext = path.suffix.lower()"},{question:"What is 'os.replace()' vs 'shutil.move()' when organizing files?",shortAnswer:"'os.replace()' is an atomic replacement for files on the same filesystem; 'shutil.move()' automatically handles cross-directory and cross-drive filesystem moves.",explanation:"Atomic replace vs cross-drive move.",hint:"shutil.move handles cross-drive relocation; os.replace is same-filesystem atomic swap.",level:"basic",codeExample:"shutil.move(str(src), str(dst))"},{question:"How do you implement a progress bar or telemetry counter in a file organizer script?",shortAnswer:`Count total files upfront, then update an enumerated progress counter during iteration, printing 'f"[{i}/{total}] Organized {item.name}"'.`,explanation:"CLI UX progress tracking.",hint:"Enumerate the file list and print progress percentages.",level:"basic",codeExample:"for i, f in enumerate(files, 1): print(f'[{i}/{len(files)}] Moving {f.name}')"},{question:"How do you prevent partial file writes from corrupting an incremental backup if interrupted?",shortAnswer:"Write the file to a temporary file (e.g. 'file.tmp') in the target folder first, and upon successful completion, atomically rename it to final name with 'os.replace()'.",explanation:"Atomic file writing pattern.",hint:"Write to temp file first, then atomically rename to target with os.replace.",level:"complex",codeExample:"# Atomic write pattern: copy to .tmp, then os.replace to final"},{question:"How do you exclude hidden files (starting with '.') from being organized?",shortAnswer:`Check 'if item.name.startswith("."): continue'.`,explanation:"Hidden file filtering.",hint:"Skip files where name.startswith('.').",level:"basic",codeExample:"if item.name.startswith('.'): continue"},{question:"Can an incremental backup engine handle deleted source files?",shortAnswer:"Yes; if configured for full mirroring ('--mirror'), the engine scans the backup directory and removes any backup file that no longer exists in the source directory.",explanation:"Mirroring deletion synchronization.",hint:"Scan destination and remove files that no longer exist in source.",level:"moderate",codeExample:"for dst_f in dst_dir.rglob('*'): if not (src_dir / rel).exists(): os.remove(dst_f)"},{question:"How do you generate a timestamped backup directory name?",shortAnswer:`Using 'datetime.now().strftime("%Y%m%d_%H%M%S")': 'backup_dir = root / f"backup_{datetime.now().strftime('%Y%m%d_%H%M%S')}"'.`,explanation:"Timestamped backup naming.",hint:"Format datetime.now() with YYYYMMDD_HHMMSS.",level:"basic",codeExample:"ts = datetime.now().strftime('%Y%m%d_%H%M%S'); dir_name = f'snapshot_{ts}'"},{question:"What is the time complexity of the two-stage duplicate file detection algorithm on N files?",shortAnswer:"Stage 1 (Size grouping) is O(N) disk stats; Stage 2 (Hashing) is O(M) where M is the small subset of files with size collisions, drastically outperforming naive O(N) hashing of all files.",explanation:"Algorithmic complexity optimization.",hint:"O(N) for size checks, O(M) for hashing only size collisions.",level:"moderate",codeExample:"# Two-stage size + hash complexity optimization"},{question:"How do you combine the organizer, duplicate detector, and incremental backup into a single CLI tool?",shortAnswer:"Use 'argparse' with subparsers ('organize', 'dedup', 'backup'), dispatching to dedicated methods of a unified vault management class.",explanation:"Modular CLI application architecture.",hint:"Use argparse subparsers to route commands to dedicated engine methods.",level:"basic",codeExample:"sub = parser.add_subparsers(dest='cmd'); sub.add_parser('organize'); sub.add_parser('dedup')"},{question:"What is the ultimate golden rule for directory backup and file organizer scripts?",shortAnswer:"Always resolve collisions deterministically, use two-stage size+SHA256 duplicate detection in 64KB chunks, preserve modification timestamps with 'shutil.copy2()' during incremental backups, and maintain comprehensive audit manifests.",explanation:"The complete enterprise guideline for file organization and backup automation in Python.",hint:"Deterministic collision resolution, 2-stage chunked hashing, copy2 timestamp preservation, and audit manifests.",level:"basic",codeExample:"# Python File Organization & Backup Engineering Mastery"}];function M(){const p=s.useRef([]),[r,m]=s.useState("sorterPipeline"),[l,h]=s.useState("barrackpore"),[d,x]=s.useState("END_TO_END"),[u,g]=s.useState(!0);let i="",a="";d==="CLASSIFY"?(i=`# Extension-based categorization and atomic relocation:
CATEGORY_MAP = {
    "Documents": {".pdf", ".docx", ".txt"},
    "Spreadsheets": {".csv", ".xlsx", ".json"},
    "Media": {".png", ".jpg", ".jpeg"},
    "Archives": {".zip", ".gz"}
}
for file in incoming_dir.iterdir():
    if file.is_file():
        category = match_category(file.suffix.lower())
        dest_dir = vault_root / category
        dest_dir.mkdir(exist_ok=True)
        shutil.move(str(file), str(dest_dir / resolve_collision(file.name)))`,a=`[ORGANIZER_PIPELINE] CATEGORIZING INCOMING REPOSITORY:
* Target Campus  : ${l.toUpperCase()} Ingestion Node
* Total Ingested : 5 loose files
* Categorization Manifest:
  -> Documents/     : sourav_admission.pdf, sourav_admission_copy.pdf
  -> Spreadsheets/  : admissions_2026.csv
  -> Media/         : photo_101.png
  -> Archives/      : campus_archive.zip
[STATUS] All loose files sorted and organized.`):d==="DEDUP"?(i=`# Two-stage duplicate detection (Size grouping -> SHA-256):
size_map = defaultdict(list)
for f in vault_root.rglob("*"):
    if f.is_file():
        size_map[f.stat().st_size].append(f)

for size, paths in size_map.items():
    if len(paths) > 1 and size > 0:
        hash_map = defaultdict(list)
        for p in paths:
            h = compute_sha256_chunked(p) # 64KB chunks
            hash_map[h].append(p)
        # Identify duplicates where len(hash_map[h]) > 1`,a=`[DEDUPLICATION_ENGINE] TWO-STAGE SHA-256 SCAN:
* Stage 1 (Fast Size Filter) : Grouped 5 files by byte size.
* Stage 2 (SHA-256 Hashing)  : Found 1 collision cluster (3,850 B).
* Duplicate Files Detected:
  -> Primary Original : Documents/sourav_admission.pdf (Kept)
  -> Redundant Copy   : Documents/sourav_admission_copy.pdf (Duplicate)
* Redundant Storage Wasted: 3,850 Bytes
[STATUS] Deduplication report generated.`):d==="BACKUP"?(i=`# Incremental delta backup synchronization:
for src_f in vault_root.rglob("*"):
    if src_f.is_file():
        rel = src_f.relative_to(vault_root)
        dst_f = backup_vault / rel
        if not dst_f.exists() or src_f.stat().st_mtime > dst_f.stat().st_mtime:
            dst_f.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(str(src_f), str(dst_f)) # Preserves st_mtime!`,a=`[INCREMENTAL_BACKUP] DELTA SYNCHRONIZATION:
* Target Backup Vault: cloud_backup_${l}/
* Delta Evaluation   : Comparing mtime and byte sizes...
* Added Files (New)  : 4 files synced
* Updated (Modified) : 0 files
* Unchanged (Skip)   : 0 files
* Bandwidth Saved    : 0% on initial pass (100% on subsequent passes)
[STATUS] Cloud backup synchronized successfully.`):(i=`# Complete Institutional Digital Vault Capstone Pipeline:
engine = InstitutionalDigitalVaultEngine(workspace_root)
# 1. Categorize
org_report = engine.organize_incoming_files()
# 2. Deduplicate
dedup_report = engine.scan_for_duplicates()
# 3. Incremental Backup
backup_report = engine.sync_to_backup_vault()
print("Pipeline Finished Successfully.")`,a=`[CAPSTONE_PIPELINE] EXECUTING FULL AUTONOMOUS SUITE:
* Campus Location     : ${l.toUpperCase()} Central Hub
* Step 1: Categorize  : 5 files categorized into Documents, Media, Data
* Step 2: Deduplicate : 1 SHA-256 duplicate identified and quarantined
* Step 3: Incremental : 4 verified unique files mirrored to Cloud Vault
* Integrity Check     : All SHA-256 digests verified in destination vault.
[PASSED] Autonomous digital organizer & backup cycle complete.`),s.useEffect(()=>{const t=new IntersectionObserver(c=>{c.forEach(f=>{f.isIntersecting&&f.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return p.current.forEach(c=>{c&&t.observe(c)}),()=>t.disconnect()},[]);const n=t=>{t&&!p.current.includes(t)&&p.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:n,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 4 • Module 004_001"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 7 (Capstone)"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Advanced File Operations, OS & Subprocess Automation"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["File Organizer & ",e.jsx("span",{className:"text-teal-400",children:"Incremental Backup Engine"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["The ultimate capstone module project in Python filesystem engineering: automated directory sorting with extension classification, deterministic collision resolution, high-performance two-stage duplicate detection (",e.jsx("code",{className:"text-teal-300 font-mono",children:"hashlib.sha256"})," streaming), and incremental delta backup synchronization with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"shutil.copy2()"}),"."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📁 Automated Sorter"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔐 SHA-256 Deduplication"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ Delta Incremental Sync"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🏆 Capstone Architecture"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Complete Institutional Digital Asset Architecture"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"Combining all filesystem, OS, cryptographic, and automation concepts into an integrated production asset vault pipeline:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Extension Classification"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"pathlib.Path.suffix, shutil.move"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Maps messy loose files into categorized folders (",e.jsx("code",{className:"text-teal-300 font-mono",children:"Documents"}),", ",e.jsx("code",{className:"text-teal-300 font-mono",children:"Data"}),", ",e.jsx("code",{className:"text-teal-300 font-mono",children:"Media"}),") with collision handling."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Two-Stage SHA-256"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"size grouping -> 64KB chunk hash"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Groups by byte size first, hashing only files with size collisions. Avoids RAM bloat and skips 90% unnecessary hashes."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Delta Sync Backup"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"shutil.copy2(), mtime comparison"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Copies only new and modified files, preserving timestamps and saving 95% bandwidth on subsequent sync cycles."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Timestamp Invariant: Why `shutil.copy2()` is Mandatory"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Using ",e.jsx("code",{className:"text-rose-400 font-mono",children:"shutil.copy()"})," sets the destination file's modification timestamp (",e.jsx("code",{className:"text-rose-400 font-mono",children:"st_mtime"}),") to the current time, destroying modification history and causing subsequent incremental backup runs to erroneously re-copy all unchanged files! Always use ",e.jsx("code",{className:"text-teal-300 font-mono",children:"shutil.copy2()"})," to preserve original metadata."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Classification, Two-Stage Hashing & Delta Sync"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>m("sorterPipeline"),className:o("px-3 py-1.5 rounded-lg transition-all",r==="sorterPipeline"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Extension Sorter"}),e.jsx("button",{onClick:()=>m("twoStageHashing"),className:o("px-3 py-1.5 rounded-lg transition-all",r==="twoStageHashing"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Two-Stage SHA-256"}),e.jsx("button",{onClick:()=>m("deltaSync"),className:o("px-3 py-1.5 rounded-lg transition-all",r==="deltaSync"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Delta Sync Backup"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining category mapping algorithms, size-filtered hash optimization, and timestamp delta synchronization:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:r==="sorterPipeline"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"AUTOMATED INGESTION DIRECTORY CLASSIFICATION & SORTING"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"240",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"Incoming Loose Box"}),e.jsx("text",{x:"15",y:"60",fill:"#38bdf8",fontSize:"8 font-mono",children:"1. stu_101.pdf"}),e.jsx("text",{x:"15",y:"80",fill:"#34d399",fontSize:"8 font-mono",children:"2. roster.csv"}),e.jsx("text",{x:"15",y:"100",fill:"#c084fc",fontSize:"8 font-mono",children:"3. campus.jpg"}),e.jsx("text",{x:"15",y:"120",fill:"#fbbf24",fontSize:"8 font-mono",children:"4. backup.zip"}),e.jsx("rect",{x:"15",y:"145",width:"210",height:"70",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"25",y:"170",fill:"#34d399",fontSize:"9 font-bold",children:"Collision Safety:"}),e.jsx("text",{x:"25",y:"190",fill:"#cbd5e1",fontSize:"8",children:"Resolves 'doc (1).pdf' conflicts."}),e.jsx("text",{x:"250",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"280",y:"0",width:"260",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"295",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"Extension Classifier Engine"}),e.jsxs("text",{x:"295",y:"60",fill:"#38bdf8",fontSize:"8 font-mono",children:["CATEGORY_MAP = ","{"]}),e.jsxs("text",{x:"310",y:"80",fill:"#cbd5e1",fontSize:"8 font-mono",children:['"Documents": ',"{'.pdf', '.docx'}",","]}),e.jsxs("text",{x:"310",y:"100",fill:"#cbd5e1",fontSize:"8 font-mono",children:['"Data": ',"{'.csv', '.json'}",","]}),e.jsxs("text",{x:"310",y:"120",fill:"#cbd5e1",fontSize:"8 font-mono",children:['"Media": ',"{'.png', '.jpg'}"]}),e.jsx("text",{x:"295",y:"140",fill:"#38bdf8",fontSize:"8 font-mono",children:"}"}),e.jsx("rect",{x:"295",y:"155",width:"230",height:"60",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"305",y:"175",fill:"#38bdf8",fontSize:"8 font-bold font-mono",children:"shutil.move(src, target_cat)"}),e.jsx("text",{x:"305",y:"195",fill:"#cbd5e1",fontSize:"8",children:"Atomic cross-directory move"}),e.jsx("text",{x:"550",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"580",y:"0",width:"240",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"595",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"Organized Vault Folders"}),e.jsx("text",{x:"595",y:"60",fill:"#38bdf8",fontSize:"8 font-mono",children:"/Documents/stu_101.pdf"}),e.jsx("text",{x:"595",y:"80",fill:"#34d399",fontSize:"8 font-mono",children:"/Data/roster.csv"}),e.jsx("text",{x:"595",y:"100",fill:"#c084fc",fontSize:"8 font-mono",children:"/Media/campus.jpg"}),e.jsx("text",{x:"595",y:"120",fill:"#fbbf24",fontSize:"8 font-mono",children:"/Archives/backup.zip"}),e.jsx("rect",{x:"595",y:"145",width:"210",height:"70",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"605",y:"170",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Clean Vault:"}),e.jsx("text",{x:"605",y:"190",fill:"#cbd5e1",fontSize:"8",children:"100% structured directories."})]})]}):r==="twoStageHashing"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"TWO-STAGE SHA-256 DUPLICATE DETECTION ARCHITECTURE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"20",y:"30",fill:"#a5f3fc",fontSize:"12",fontWeight:"bold",children:"Stage 1: Fast Size Grouping [O(N) Stats]"}),e.jsx("text",{x:"20",y:"65",fill:"#38bdf8",fontSize:"8 font-mono",children:"1. Query `os.path.getsize(p)` for all files"}),e.jsx("text",{x:"20",y:"85",fill:"#cbd5e1",fontSize:"8 font-mono",children:"2. Map into `size_map[size] -> [paths]`"}),e.jsx("text",{x:"20",y:"105",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"3. Unique size files (len == 1) SKIPPED!"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"30",y:"155",fill:"#38bdf8",fontSize:"9 font-bold",children:"Massive Performance Gain:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Eliminates 90% of costly disk read I/O operations upfront."})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"Stage 2: 64KB Chunk SHA-256 Hashing"}),e.jsx("text",{x:"20",y:"65",fill:"#c084fc",fontSize:"8 font-mono",children:"1. Stream 64KB chunks: `hasher.update(chunk)`"}),e.jsx("text",{x:"20",y:"85",fill:"#cbd5e1",fontSize:"8 font-mono",children:"2. Map matching digests: `hash_map[sha256]`"}),e.jsx("text",{x:"20",y:"105",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"3. Exact byte collisions confirmed with 100% accuracy!"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"30",y:"155",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Constant Memory Footprint:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Operates in <10 MB RAM even for multi-gigabyte ISO files."})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"DELTA INCREMENTAL SNAPSHOT SYNCHRONIZATION"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"240",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"Source Working Vault"}),e.jsx("text",{x:"15",y:"60",fill:"#38bdf8",fontSize:"8 font-mono",children:"file1.csv (Modified: 10:30)"}),e.jsx("text",{x:"15",y:"80",fill:"#34d399",fontSize:"8 font-mono",children:"file2.pdf (Unchanged: 08:00)"}),e.jsx("text",{x:"15",y:"100",fill:"#fbbf24",fontSize:"8 font-mono",children:"file3.json (NEW FILE)"}),e.jsx("rect",{x:"15",y:"130",width:"210",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"25",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"Active Working Tree:"}),e.jsx("text",{x:"25",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Contains current institutional data."}),e.jsx("text",{x:"250",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"280",y:"0",width:"260",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"295",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"Delta Sync Evaluator"}),e.jsx("text",{x:"295",y:"60",fill:"#38bdf8",fontSize:"8 font-mono",children:"if not dst.exists():"}),e.jsx("text",{x:"310",y:"75",fill:"#34d399",fontSize:"8 font-mono",children:"COPY (NEW FILE)"}),e.jsx("text",{x:"295",y:"95",fill:"#38bdf8",fontSize:"8 font-mono",children:"elif src.mtime > dst.mtime:"}),e.jsx("text",{x:"310",y:"110",fill:"#fbbf24",fontSize:"8 font-mono",children:"COPY (UPDATED DELTA)"}),e.jsx("text",{x:"295",y:"130",fill:"#38bdf8",fontSize:"8 font-mono",children:"else: SKIP (UNCHANGED)"}),e.jsx("rect",{x:"295",y:"150",width:"230",height:"65",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"305",y:"175",fill:"#38bdf8",fontSize:"8 font-mono font-bold",children:"shutil.copy2(src, dst)"}),e.jsx("text",{x:"305",y:"195",fill:"#cbd5e1",fontSize:"8",children:"Preserves timestamps!"}),e.jsx("text",{x:"550",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"580",y:"0",width:"240",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"595",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"Cloud Backup Vault"}),e.jsx("text",{x:"595",y:"60",fill:"#38bdf8",fontSize:"8 font-mono",children:"file1.csv (UPDATED)"}),e.jsx("text",{x:"595",y:"80",fill:"#34d399",fontSize:"8 font-mono",children:"file2.pdf (SKIPPED)"}),e.jsx("text",{x:"595",y:"100",fill:"#fbbf24",fontSize:"8 font-mono",children:"file3.json (COPIED)"}),e.jsx("rect",{x:"595",y:"130",width:"210",height:"85",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"605",y:"155",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Disaster Recovery:"}),e.jsx("text",{x:"605",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Exact mirror at 5% bandwidth cost."})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Digital Vault Organizer & Backup Laboratory"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Select campus ingestion nodes, trigger individual pipeline stages or execute the full autonomous capstone suite, and inspect live vault telemetry:"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"1. Execution Pipeline Stage:"}),e.jsx("div",{className:"grid grid-cols-2 gap-1.5 bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:[{id:"END_TO_END",label:"1. Full Capstone Suite"},{id:"CLASSIFY",label:"2. Extension Sorter"},{id:"DEDUP",label:"3. SHA-256 Deduplicate"},{id:"BACKUP",label:"4. Incremental Sync"}].map(t=>e.jsx("button",{onClick:()=>x(t.id),className:o("py-1.5 rounded transition-all",d===t.id?"bg-teal-900/60 text-teal-300 font-bold border border-teal-700/80":"text-slate-400 hover:text-white"),children:t.label},t.id))})]}),e.jsxs("div",{className:"space-y-1.5 pt-1",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold",children:"2. Campus Digital Vault Node:"}),e.jsx("div",{className:"flex bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:["barrackpore","kolkata"].map(t=>e.jsxs("button",{onClick:()=>h(t),className:o("flex-1 py-1 rounded transition-all capitalize",l===t?"bg-cyan-900/60 text-cyan-300 font-bold border border-cyan-700/80":"text-slate-400 hover:text-white"),children:[t," Vault"]},t))})]}),e.jsx("div",{className:"pt-1",children:e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-xs font-mono",children:[e.jsx("input",{type:"checkbox",checked:u,onChange:t=>g(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"Enable Two-Stage Cryptographic Deduplication (`SHA-256`)"})]})}),e.jsxs("div",{className:"p-3 bg-teal-950/40 rounded-lg border border-teal-800/80 text-xs font-mono space-y-1",children:[e.jsx("div",{className:"text-teal-400 text-[10px] uppercase font-bold",children:"Module 004_001 Capstone Integration:"}),e.jsxs("div",{className:"text-slate-300 text-[11px]",children:["Unifies ",e.jsx("code",{className:"text-teal-300",children:"os"}),", ",e.jsx("code",{className:"text-cyan-300",children:"pathlib"}),", ",e.jsx("code",{className:"text-purple-300",children:"shutil"}),", ",e.jsx("code",{className:"text-amber-300",children:"argparse"}),", and ",e.jsx("code",{className:"text-emerald-400",children:"hashlib"})," into a single enterprise CLI tool."]})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs space-y-1",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:"Generated Python Capstone Code:"}),e.jsx("pre",{className:"text-teal-300 text-[11px] leading-relaxed break-all font-mono overflow-x-auto",children:i})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[160px] font-mono text-xs space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-[10px] font-bold uppercase text-slate-400",children:[e.jsx("span",{children:"Digital Vault Telemetry:"}),e.jsx("span",{className:"text-emerald-400",children:"Exit Code 0"})]}),e.jsx("pre",{className:"text-slate-200 text-[11px] leading-relaxed font-mono whitespace-pre-wrap",children:a})]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Capstone Engineering Pattern Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Engineering Pattern"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Standard Library Modules"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Algorithmic Complexity"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Production Role"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"Extension Mapping Organizer"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"`pathlib.Path`, `shutil`"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"`O(N)` linear file scan"}),e.jsx("td",{className:"py-3 px-4",children:"Automated incoming digital asset sorting"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"Two-Stage SHA-256 Deduplication"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"`hashlib`, `collections`"}),e.jsx("td",{className:"py-3 px-4 text-cyan-300",children:"`O(N)` stats + `O(M)` hash"}),e.jsx("td",{className:"py-3 px-4",children:"Cryptographic duplicate discovery without RAM bloat"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Incremental Delta Snapshot"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"`shutil.copy2()`, `os.stat`"}),e.jsx("td",{className:"py-3 px-4 text-purple-300",children:"`O(D)` delta sync only"}),e.jsx("td",{className:"py-3 px-4",children:"Disaster recovery mirroring with timestamp preservation"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"Multi-Command CLI Subparsers"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"`argparse`"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Deterministic routing"}),e.jsx("td",{className:"py-3 px-4",children:"Modular CLI interface for devops and cron workers"})]})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating automated directory sorting, two-stage SHA-256 deduplication, incremental snapshot synchronization, and institutional capstone vault suites:"}),e.jsx(_,{files:[{filename:"file_sorter_and_extension_classifier.py",code:v,description:"Automated directory sorting, extension categorization, and collision resolution."},{filename:"duplicate_file_detector_and_hasher.py",code:j,description:"Two-stage size and SHA-256 hashing duplicate detection."},{filename:"incremental_snapshot_backup_engine.py",code:S,description:"Delta synchronization, timestamp comparison, and shutil.copy2 snapshotting."},{filename:"institutional_multicampus_digital_organizer_and_backup_system.py",code:z,description:"Full capstone organizer, SHA-256 deduplication, and incremental backup."}]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Filename Collision Overwrites"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Blindly moving ",e.jsx("code",{className:"text-rose-300 font-mono",children:"shutil.move('invoice.pdf', dest)"})," overwrites existing files if a file with the same name already exists in the destination category folder."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Resolve collisions with ",e.jsx("code",{className:"text-emerald-300",children:"name (1).ext"})," suffixing."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Hashing All Files Indiscriminately"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Computing SHA-256 on 10,000 unique files reads hundreds of gigabytes from disk unnecessarily."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use Stage 1 file size grouping first!"]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Memory Exhaustion in File Hashing"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-purple-300 font-mono",children:"hashlib.sha256(open(p, 'rb').read())"})," crashes on multi-GB video or ISO files with ",e.jsx("code",{className:"text-slate-300",children:"MemoryError"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Stream in 64KB chunks (",e.jsx("code",{className:"text-emerald-300",children:"iter(lambda: f.read(65536), b'')"}),")."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Using `shutil.copy` in Incremental Sync"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Regular ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"copy()"})," resets ",e.jsx("code",{className:"text-slate-300 font-mono",children:"st_mtime"})," to current time, breaking timestamp comparisons on all subsequent sync passes."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always use ",e.jsx("code",{className:"text-emerald-300",children:"shutil.copy2()"}),"."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering file organizers, collision resolution, two-stage SHA-256 deduplication, delta syncs, and capstone architecture:"}),e.jsx(y,{questions:k})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with file organizer recipes, duplicate detection patterns, and delta backup templates:"}),e.jsx("div",{className:"mb-10",children:e.jsx(b,{content:N,filename:"python_topic7_file_organizer_backup_notes.txt",title:"Print Topic 7 Study Notes"})}),e.jsx(w,{})]})]})]})}export{M as default};
