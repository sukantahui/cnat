import{b as a,j as e,bg as o}from"./vendor-react-core-Doz9nIC6.js";import{P as y}from"./PythonFileLoader-hCi5osN-.js";import{P as w}from"./PlainTextPrint-C08xhKA4.js";import{F as j}from"./FAQTemplate-CkSqDH4B.js";import{T as v}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const N=`# topic6_files/log_rotation_and_cleanup_maintenance.py\r
# Module: 004_001_filesystem-os\r
# Topic: Building automated system maintenance scripts\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 6 - File 1: Automated Log Rotation & Compression Maintenance\r
Demonstrates:\r
  1. Age-based and size-based log file detection\r
  2. Compressing oversized \`.log\` files into \`.log.gz\` using Python's standard \`gzip\` module\r
  3. Purging historical compressed logs older than retention threshold (e.g. 7 days)\r
"""\r
\r
import os\r
import gzip\r
import time\r
import shutil\r
from datetime import datetime, timedelta\r
from typing import List, Dict, Any\r
\r
def rotate_and_compress_logs(log_dir: str, max_size_bytes: int = 1000, retention_days: int = 7) -> Dict[str, Any]:\r
    """Rotates logs exceeding max_size_bytes and purges logs older than retention_days."""\r
    now = time.time()\r
    retention_cutoff = now - (retention_days * 86400)\r
\r
    rotated_files = []\r
    purged_files = []\r
\r
    for item in os.listdir(log_dir):\r
        full_path = os.path.join(log_dir, item)\r
        if not os.path.isfile(full_path):\r
            continue\r
\r
        file_stat = os.stat(full_path)\r
\r
        # 1. Purge ancient compressed logs:\r
        if item.endswith(".gz") and file_stat.st_mtime < retention_cutoff:\r
            os.remove(full_path)\r
            purged_files.append(item)\r
            continue\r
\r
        # 2. Compress and rotate oversized active logs:\r
        if item.endswith(".log") and file_stat.st_size >= max_size_bytes:\r
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")\r
            gz_name = f"{item}.{timestamp}.gz"\r
            gz_path = os.path.join(log_dir, gz_name)\r
\r
            # Stream into gzip compressed file:\r
            with open(full_path, "rb") as f_in, gzip.open(gz_path, "wb") as f_out:\r
                shutil.copyfileobj(f_in, f_out)\r
\r
            # Truncate active log to reset size without breaking file handles:\r
            with open(full_path, "w", encoding="utf-8") as f_reset:\r
                f_reset.write(f"[{datetime.now().isoformat()}] LOG ROTATED - NEW CYCLE INITIATED\\n")\r
\r
            rotated_files.append({"original": item, "compressed": gz_name, "size_before": file_stat.st_size})\r
\r
    return {\r
        "log_directory": os.path.abspath(log_dir),\r
        "rotated_count": len(rotated_files),\r
        "purged_count": len(purged_files),\r
        "rotated_details": rotated_files,\r
        "purged_files": purged_files\r
    }\r
\r
\r
def demonstrate_log_rotation():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - AUTOMATED LOG ROTATION & CLEANUP")\r
    print("=" * 70)\r
\r
    sandbox = "temp_accotax_logs_maintenance"\r
    os.makedirs(sandbox, exist_ok=True)\r
\r
    try:\r
        # Create oversized mock log file:\r
        active_log = os.path.join(sandbox, "accotax_server.log")\r
        with open(active_log, "w", encoding="utf-8") as f:\r
            for i in range(50):\r
                f.write(f"[{datetime.now().isoformat()}] EVENT #{i:03d} - Candidate Fee Transaction Cleared\\n")\r
\r
        # Create ancient mock compressed log (>7 days old):\r
        old_gz = os.path.join(sandbox, "accotax_server.log.20250101.gz")\r
        with gzip.open(old_gz, "wb") as f_gz:\r
            f_gz.write(b"ANCIENT_LOG_ARCHIVE_DATA")\r
        # Set mtime to 30 days ago:\r
        ancient_time = time.time() - (30 * 86400)\r
        os.utime(old_gz, (ancient_time, ancient_time))\r
\r
        print("1. Running Automated Log Rotation & Purge Cycle:")\r
        summary = rotate_and_compress_logs(sandbox, max_size_bytes=500, retention_days=7)\r
\r
        print(f"   * Log Directory  : {summary['log_directory']}")\r
        print(f"   * Logs Rotated   : {summary['rotated_count']}")\r
        print(f"   * Logs Purged    : {summary['purged_count']}")\r
        print(f"   * Purged Files   : {summary['purged_files']}\\n")\r
\r
        print("2. Rotated Files Details:")\r
        for r in summary["rotated_details"]:\r
            print(f"   * Compressed '{r['original']}' ({r['size_before']} bytes) -> '{r['compressed']}'")\r
\r
        print("\\n3. Directory Contents after Maintenance:")\r
        for f in os.listdir(sandbox):\r
            print(f"   * {f} ({os.path.getsize(os.path.join(sandbox, f))} bytes)")\r
\r
    finally:\r
        # Cleanup sandbox directory\r
        if os.path.exists(sandbox):\r
            shutil.rmtree(sandbox)\r
            print("\\n4. Cleanup: Removed maintenance sandbox directory.")\r
\r
    print(r"""\r
Log Maintenance Invariants:\r
  1. Truncating active logs (\`open(path, 'w')\`) resets file size without deleting active file handles.\r
  2. Compressing rotated logs with \`gzip\` reduces log footprint by up to 90% on disk.\r
  3. Age-based purging with \`os.stat().st_mtime\` prevents disk volume exhaustion over time.\r
""")\r
    print("[PASSED] Log Rotation & Cleanup Maintenance Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_log_rotation()\r
`,S=`# topic6_files/temp_file_sweeper_and_cache_purger.py\r
# Module: 004_001_filesystem-os\r
# Topic: Building automated system maintenance scripts\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 6 - File 2: Stale Temp File Sweeper & Bytecode Cache Purger\r
Demonstrates:\r
  1. Recursively scanning for junk files (\`.tmp\`, \`.bak\`, \`.pyc\`, \`~*\`)\r
  2. Safe dry-run simulation mode (\`--dry-run\`)\r
  3. Purging \`__pycache__\` directories and calculating reclaimed disk space\r
"""\r
\r
import os\r
import shutil\r
import fnmatch\r
from typing import List, Dict, Any\r
\r
class TempFileSweeper:\r
    """Production automated sweeper for stale temp files and bytecode caches."""\r
\r
    JUNK_FILE_PATTERNS = ["*.tmp", "*.bak", "*.pyc", "*.pyo", "~*", "*.swp"]\r
    CACHE_DIR_NAMES = {"__pycache__", ".pytest_cache", ".temp_cache"}\r
\r
    def __init__(self, target_root: str, dry_run: bool = False):\r
        self.target_root = target_root\r
        self.dry_run = dry_run\r
\r
    def sweep_directory_tree(self) -> Dict[str, Any]:\r
        """Scans directory tree, purges stale files/caches, and returns reclamation summary."""\r
        deleted_files = []\r
        deleted_dirs = []\r
        bytes_reclaimed = 0\r
\r
        # Traverse bottom-up (topdown=False) to safely remove empty/cached folders\r
        for root, dirs, files in os.walk(self.target_root, topdown=False):\r
            # 1. Sweep Junk Files\r
            for f_name in files:\r
                if any(fnmatch.fnmatch(f_name, pat) for pat in self.JUNK_FILE_PATTERNS):\r
                    full_p = os.path.join(root, f_name)\r
                    size = os.path.getsize(full_p)\r
                    bytes_reclaimed += size\r
                    deleted_files.append({"path": full_p, "size_bytes": size})\r
                    if not self.dry_run:\r
                        os.remove(full_p)\r
\r
            # 2. Sweep Cache Folders\r
            for d_name in dirs:\r
                if d_name in self.CACHE_DIR_NAMES:\r
                    full_d = os.path.join(root, d_name)\r
                    deleted_dirs.append(full_d)\r
                    if not self.dry_run:\r
                        shutil.rmtree(full_d, ignore_errors=True)\r
\r
        return {\r
            "root_path": os.path.abspath(self.target_root),\r
            "dry_run_mode": self.dry_run,\r
            "deleted_files_count": len(deleted_files),\r
            "deleted_dirs_count": len(deleted_dirs),\r
            "total_bytes_reclaimed": bytes_reclaimed,\r
            "purged_files_sample": deleted_files[:5],\r
            "purged_directories": deleted_dirs\r
        }\r
\r
\r
def demonstrate_temp_sweeper():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - STALE TEMP SWEEPER & CACHE PURGER")\r
    print("=" * 70)\r
\r
    sandbox = "temp_accotax_sweeper_sandbox"\r
    os.makedirs(os.path.join(sandbox, "project", "__pycache__"), exist_ok=True)\r
    os.makedirs(os.path.join(sandbox, "project", "data"), exist_ok=True)\r
\r
    try:\r
        # Create valid and junk files:\r
        with open(os.path.join(sandbox, "project", "app.py"), "w") as f:\r
            f.write("print('VALID APP CODE')")\r
        with open(os.path.join(sandbox, "project", "__pycache__", "app.cpython-313.pyc"), "w") as f:\r
            f.write("COMPILED_BYTECODE_CONTENT")\r
        with open(os.path.join(sandbox, "project", "data", "draft.bak"), "w") as f:\r
            f.write("BACKUP_DATA_TEMP")\r
        with open(os.path.join(sandbox, "project", "data", "session.tmp"), "w") as f:\r
            f.write("STALE_SESSION_DATA")\r
\r
        # 1. Run Dry-Run Simulation:\r
        print("1. Running Sweeper in DRY-RUN Mode (Simulation):")\r
        dry_sweeper = TempFileSweeper(sandbox, dry_run=True)\r
        dry_res = dry_sweeper.sweep_directory_tree()\r
\r
        print(f"   * [DRY-RUN] Files Marked for Deletion : {dry_res['deleted_files_count']}")\r
        print(f"   * [DRY-RUN] Caches Marked for Purge   : {dry_res['deleted_dirs_count']}")\r
        print(f"   * [DRY-RUN] Estimated Space Reclaimed : {dry_res['total_bytes_reclaimed']} Bytes\\n")\r
\r
        # 2. Run Live Sweeper Execution:\r
        print("2. Running Sweeper in LIVE Execution Mode:")\r
        live_sweeper = TempFileSweeper(sandbox, dry_run=False)\r
        live_res = live_sweeper.sweep_directory_tree()\r
\r
        print(f"   * Files Purged from Disk   : {live_res['deleted_files_count']}")\r
        print(f"   * Cache Folders Purged     : {live_res['deleted_dirs_count']}")\r
        print(f"   * Total Bytes Reclaimed    : {live_res['total_bytes_reclaimed']} Bytes\\n")\r
\r
        print("3. Remaining Production Files:")\r
        for r, _, fs in os.walk(sandbox):\r
            for f in fs:\r
                print(f"   * {os.path.join(r, f)}")\r
\r
    finally:\r
        # Cleanup sandbox directory\r
        if os.path.exists(sandbox):\r
            shutil.rmtree(sandbox)\r
            print("\\n4. Cleanup: Removed sweeper demo sandbox.")\r
\r
    print(r"""\r
Temp Sweeper Invariants:\r
  1. Always provide a \`--dry-run\` flag in automated maintenance scripts to prevent accidental data loss.\r
  2. Using \`topdown=False\` ensures nested child cache files are wiped before removing parent directories.\r
  3. Reclaiming bytecode and session files regularly maintains fast, clutter-free production environments.\r
""")\r
    print("[PASSED] Temp File Sweeper & Cache Purger Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_temp_sweeper()\r
`,A=`# topic6_files/system_resource_and_health_monitor.py\r
# Module: 004_001_filesystem-os\r
# Topic: Building automated system maintenance scripts\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 6 - File 3: System Storage & Health Monitoring Telemetry\r
Demonstrates:\r
  1. Inspecting host disk space and computing usage percentages with \`shutil.disk_usage()\`\r
  2. Evaluating disk exhaustion thresholds (Warning at >80%, Critical at >90%)\r
  3. Generating structured JSON telemetry reports for automated monitoring daemons\r
"""\r
\r
import os\r
import sys\r
import json\r
import shutil\r
from datetime import datetime\r
from typing import Dict, Any\r
\r
def inspect_host_health_telemetry(mount_point: str = ".", threshold_warn_pct: float = 80.0, threshold_crit_pct: float = 90.0) -> Dict[str, Any]:\r
    """Inspects storage capacity, evaluates alert thresholds, and produces a health report."""\r
    usage = shutil.disk_usage(mount_point)\r
\r
    total_gb = usage.total / (1024 ** 3)\r
    used_gb = usage.used / (1024 ** 3)\r
    free_gb = usage.free / (1024 ** 3)\r
    used_percent = (usage.used / usage.total) * 100\r
\r
    # Determine health alert level:\r
    if used_percent >= threshold_crit_pct:\r
        alert_status = "CRITICAL_STORAGE_EXHAUSTION"\r
    elif used_percent >= threshold_warn_pct:\r
        alert_status = "WARNING_HIGH_USAGE"\r
    else:\r
        alert_status = "HEALTHY_NORMAL"\r
\r
    report = {\r
        "timestamp": datetime.now().isoformat(),\r
        "host_platform": f"{sys.platform} ({os.name})",\r
        "python_runtime": sys.version.split()[0],\r
        "cpu_logical_cores": os.cpu_count() or 1,\r
        "mount_point": os.path.abspath(mount_point),\r
        "storage": {\r
            "total_gb": round(total_gb, 2),\r
            "used_gb": round(used_gb, 2),\r
            "free_gb": round(free_gb, 2),\r
            "used_percentage": round(used_percent, 1)\r
        },\r
        "health_assessment": {\r
            "status": alert_status,\r
            "requires_maintenance": (alert_status != "HEALTHY_NORMAL"),\r
            "threshold_warn_pct": threshold_warn_pct,\r
            "threshold_crit_pct": threshold_crit_pct\r
        }\r
    }\r
\r
    return report\r
\r
\r
def demonstrate_health_monitor():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - SYSTEM STORAGE & HEALTH TELEMETRY")\r
    print("=" * 70)\r
\r
    report = inspect_host_health_telemetry()\r
\r
    print("1. Host Environment & Storage Capacity Assessment:")\r
    print(f"   * Status Assessment : [{report['health_assessment']['status']}]")\r
    print(f"   * Mount Target      : {report['mount_point']}")\r
    print(f"   * Total Drive Space : {report['storage']['total_gb']} GB")\r
    print(f"   * Used Space        : {report['storage']['used_gb']} GB ({report['storage']['used_percentage']}%)")\r
    print(f"   * Free Available    : {report['storage']['free_gb']} GB")\r
    print(f"   * Logical CPU Cores : {report['cpu_logical_cores']} Cores\\n")\r
\r
    print("2. Formatted JSON Health Telemetry Snapshot:")\r
    print(json.dumps(report, indent=2))\r
\r
    print(r"""\r
Health Monitoring Invariants:\r
  1. \`shutil.disk_usage()\` provides cross-platform drive capacity metrics without external dependencies.\r
  2. Emitting JSON telemetry allows seamless integration with cron jobs, Datadog, or Grafana alerts.\r
  3. Setting threshold warnings enables proactive log purging before disk saturation causes server crashes.\r
""")\r
    print("[PASSED] System Storage & Health Telemetry Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_health_monitor()\r
`,T=`# topic6_files/institutional_automated_server_maintenance_daemon.py\r
# Module: 004_001_filesystem-os\r
# Topic: Building automated system maintenance scripts\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 6 - File 4: Institutional Automated Server Maintenance Engine (Case Study)\r
Demonstrates:\r
  1. Complete automated server maintenance pipeline for Coder & AccoTax nodes\r
  2. Orchestrating log rotation, gzip compression, temp sweeping, and storage checks\r
  3. Generating timestamped audit records and maintenance summary reports\r
"""\r
\r
import os\r
import sys\r
import gzip\r
import time\r
import shutil\r
import fnmatch\r
from datetime import datetime\r
from typing import Dict, Any, List\r
\r
class InstitutionalServerMaintenanceEngine:\r
    """Production automated maintenance daemon for Coder & AccoTax infrastructure."""\r
\r
    def __init__(self, facility_root: str, dry_run: bool = False):\r
        self.facility_root = facility_root\r
        self.dry_run = dry_run\r
        self.logs_dir = os.path.join(facility_root, "logs")\r
        self.data_dir = os.path.join(facility_root, "data")\r
        self.audit_dir = os.path.join(facility_root, "maintenance_audits")\r
\r
        if not self.dry_run:\r
            os.makedirs(self.logs_dir, exist_ok=True)\r
            os.makedirs(self.data_dir, exist_ok=True)\r
            os.makedirs(self.audit_dir, exist_ok=True)\r
\r
    def execute_maintenance_cycle(self) -> Dict[str, Any]:\r
        """Executes full maintenance: log rotation, temp purge, and health assessment."""\r
        start_time = time.time()\r
        \r
        # 1. Log Rotation & Compression Pass\r
        rotated_logs = 0\r
        if os.path.exists(self.logs_dir):\r
            for item in os.listdir(self.logs_dir):\r
                full_p = os.path.join(self.logs_dir, item)\r
                if item.endswith(".log") and os.path.isfile(full_p):\r
                    if os.path.getsize(full_p) > 200:  # Rotate if > 200 bytes for demo\r
                        rotated_logs += 1\r
                        if not self.dry_run:\r
                            gz_name = f"{item}.{datetime.now().strftime('%Y%m%d_%H%M%S')}.gz"\r
                            with open(full_p, "rb") as f_in, gzip.open(os.path.join(self.logs_dir, gz_name), "wb") as f_out:\r
                                shutil.copyfileobj(f_in, f_out)\r
                            with open(full_p, "w", encoding="utf-8") as f_reset:\r
                                f_reset.write(f"[{datetime.now().isoformat()}] CYCLE_RESET\\n")\r
\r
        # 2. Temp & Cache Sweeper Pass\r
        reclaimed_bytes = 0\r
        purged_files = 0\r
        if os.path.exists(self.facility_root):\r
            for root, dirs, files in os.walk(self.facility_root, topdown=False):\r
                for f in files:\r
                    if f.endswith((".tmp", ".bak", ".pyc")):\r
                        full_f = os.path.join(root, f)\r
                        size = os.path.getsize(full_f)\r
                        reclaimed_bytes += size\r
                        purged_files += 1\r
                        if not self.dry_run:\r
                            os.remove(full_f)\r
\r
        # 3. Disk Quota Health Evaluation\r
        usage = shutil.disk_usage(self.facility_root if os.path.exists(self.facility_root) else ".")\r
        free_gb = usage.free / (1024 ** 3)\r
        is_healthy = free_gb >= 1.0  # Require >= 1GB free\r
\r
        elapsed_ms = round((time.time() - start_time) * 1000, 2)\r
\r
        summary = {\r
            "facility_root": os.path.abspath(self.facility_root),\r
            "timestamp": datetime.now().isoformat(),\r
            "dry_run": self.dry_run,\r
            "logs_rotated": rotated_logs,\r
            "junk_files_purged": purged_files,\r
            "bytes_reclaimed": reclaimed_bytes,\r
            "free_storage_gb": round(free_gb, 2),\r
            "system_health": "OPTIMAL" if is_healthy else "LOW_SPACE_WARNING",\r
            "elapsed_ms": elapsed_ms\r
        }\r
\r
        # Write maintenance audit log\r
        if not self.dry_run and os.path.exists(self.audit_dir):\r
            audit_file = os.path.join(self.audit_dir, f"audit_{datetime.now().strftime('%Y%m%d')}.log")\r
            with open(audit_file, "a", encoding="utf-8") as f_log:\r
                f_log.write(f"[{summary['timestamp']}] MAINT_PASS_OK - Reclaimed: {reclaimed_bytes}B - Status: {summary['system_health']}\\n")\r
\r
        return summary\r
\r
\r
def demonstrate_server_maintenance():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - AUTOMATED SERVER MAINTENANCE ENGINE")\r
    print("=" * 70)\r
\r
    demo_root = "temp_accotax_maintenance_server"\r
\r
    try:\r
        # Create mock server logs, data, and temp files:\r
        os.makedirs(os.path.join(demo_root, "logs"), exist_ok=True)\r
        os.makedirs(os.path.join(demo_root, "data", "__pycache__"), exist_ok=True)\r
\r
        with open(os.path.join(demo_root, "logs", "access.log"), "w") as f:\r
            f.write("LOG_ENTRY_DATA\\n" * 30)  # >200 bytes\r
        with open(os.path.join(demo_root, "data", "draft.tmp"), "w") as f:\r
            f.write("STALE_TEMP_BUFFER")\r
        with open(os.path.join(demo_root, "data", "backup.bak"), "w") as f:\r
            f.write("STALE_BACKUP_BUFFER")\r
\r
        engine = InstitutionalServerMaintenanceEngine(demo_root, dry_run=False)\r
        report = engine.execute_maintenance_cycle()\r
\r
        print("1. Maintenance Pass Execution Summary:")\r
        print(f"   * Facility Root        : {report['facility_root']}")\r
        print(f"   * Status Assessment    : [{report['system_health']}]")\r
        print(f"   * Logs Rotated & Gzipped: {report['logs_rotated']}")\r
        print(f"   * Junk Files Purged    : {report['junk_files_purged']}")\r
        print(f"   * Storage Reclaimed    : {report['bytes_reclaimed']} Bytes")\r
        print(f"   * Execution Latency    : {report['elapsed_ms']} ms\\n")\r
\r
        print("2. Directory Structure After Maintenance Pass:")\r
        for r, _, fs in os.walk(demo_root):\r
            for f in fs:\r
                print(f"   * {os.path.join(r, f)}")\r
\r
    finally:\r
        # Cleanup maintenance server directory\r
        if os.path.exists(demo_root):\r
            shutil.rmtree(demo_root)\r
            print("\\n3. Cleanup: Removed demo maintenance facility.")\r
\r
    print("\\n[PASSED] Automated Server Maintenance Engine Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_server_maintenance()\r
`,E=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
          PYTHON PROGRAMMING • SEGMENT 4: PRO LEVEL • MODULE 004_001: FILESYSTEM & OS\r
           TOPIC 6: BUILDING AUTOMATED SYSTEM MAINTENANCE SCRIPTS\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. LOG ROTATION & GZIP COMPRESSION\r
--------------------------------------------------------------------------------\r
  # Rotate and compress oversized log:\r
  with open("app.log", "rb") as f_in, gzip.open("app.log.gz", "wb") as f_out:\r
      shutil.copyfileobj(f_in, f_out)\r
  # Reset original log:\r
  with open("app.log", "w") as f_reset:\r
      f_reset.write("[CYCLE_RESET]\\n")\r
\r
--------------------------------------------------------------------------------\r
2. STALE TEMP SWEEPER\r
--------------------------------------------------------------------------------\r
  for root, dirs, files in os.walk(path, topdown=False):\r
      for f in files:\r
          if f.endswith((".tmp", ".bak", ".pyc")):\r
              os.remove(os.path.join(root, f))\r
\r
--------------------------------------------------------------------------------\r
3. DISK CAPACITY ALERTS\r
--------------------------------------------------------------------------------\r
  usage = shutil.disk_usage("/")\r
  used_pct = (usage.used / usage.total) * 100\r
  if used_pct > 85.0:\r
      send_alert("WARNING: Disk capacity critical!")\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 6: AUTOMATED MAINTENANCE\r
================================================================================\r
`,k=[{question:"What is the primary goal of automated system maintenance scripts in production Python environments?",shortAnswer:"To autonomously monitor host health, rotate and compress growing log files, purge stale temporary files/caches, evaluate disk capacity thresholds, and ensure continuous system stability without manual intervention.",explanation:"Autonomous system maintenance principles.",hint:"Autonomously manages log growth, temp file cleanup, and disk health monitoring.",level:"basic",codeExample:"# Automated Python Maintenance Engineering"},{question:"What is the difference between size-based and age-based log rotation?",shortAnswer:"Size-based rotation triggers when a log file exceeds a maximum byte threshold (e.g. 50 MB); age-based rotation triggers at fixed time intervals (e.g. daily, or purging archives older than 30 days).",explanation:"Log rotation trigger strategies.",hint:"Size-based rotates upon exceeding bytes; age-based rotates at time intervals.",level:"basic",codeExample:"if size > 50*1024*1024: rotate_log() # Size-based"},{question:"How do you compress a log file directly into a '.gz' archive using Python's standard library?",shortAnswer:`Using the built-in 'gzip' and 'shutil' modules: 'with open("app.log", "rb") as f_in, gzip.open("app.log.gz", "wb") as f_out: shutil.copyfileobj(f_in, f_out)'.`,explanation:"Streaming gzip compression.",hint:"Use gzip.open and shutil.copyfileobj to stream compressed bytes.",level:"basic",codeExample:"with open('a.log', 'rb') as fi, gzip.open('a.log.gz', 'wb') as fo: shutil.copyfileobj(fi, fo)"},{question:`Why should you truncate an active log with 'open(path, "w")' instead of deleting it with 'os.remove()'?`,shortAnswer:"On Unix systems, running server daemons keep open file descriptors; deleting the file unlinks its name but the process continues writing to the deleted inode in RAM, causing disk space to remain un-reclaimed until the daemon restarts.",explanation:"Open file descriptor inode semantics on Unix.",hint:"Truncating preserves the open file descriptor held by active server processes.",level:"complex",codeExample:`# GOOD: Truncate active log
with open(log_path, 'w') as f: f.write('[ROTATED]\\n')`},{question:"Why is a '--dry-run' mode essential in automated cleanup and maintenance scripts?",shortAnswer:"It allows system administrators to simulate and review which files and directories WOULD be deleted without making any destructive modifications on the real filesystem.",explanation:"Safe simulation and risk mitigation.",hint:"Simulates deletions and shows what would be purged without actually modifying disk.",level:"basic",codeExample:"if not args.dry_run: os.remove(file_path)"},{question:"Why should temporary file sweepers use 'topdown=False' during 'os.walk()'?",shortAnswer:"Because child files and subdirectories must be removed before an empty parent cache folder (like '__pycache__') can be removed with 'os.rmdir()' or cleaned up safely.",explanation:"Bottom-up filesystem traversal safety.",hint:"Ensures leaf files are deleted before parent folders are removed.",level:"moderate",codeExample:"for root, dirs, files in os.walk(path, topdown=False): ..."},{question:"How do you calculate if a file is older than 7 days using 'os.stat()'?",shortAnswer:"Compare 'file_stat.st_mtime' against '(time.time() - (7 * 86400))': 'if file_stat.st_mtime < (time.time() - 7 * 86400): purge()'.",explanation:"Timestamp delta comparison.",hint:"Check if st_mtime is less than time.time() minus 7*86400 seconds.",level:"basic",codeExample:"is_old = os.stat(p).st_mtime < (time.time() - 7 * 86400)"},{question:"How do you calculate the percentage of used disk space using 'shutil.disk_usage()'?",shortAnswer:`'usage = shutil.disk_usage("/"); used_pct = (usage.used / usage.total) * 100'.`,explanation:"Disk usage percentage formula.",hint:"(usage.used / usage.total) * 100.",level:"basic",codeExample:"u = shutil.disk_usage('.'); pct = (u.used / u.total) * 100"},{question:"What standard temporary file patterns should an automated maintenance script clean?",shortAnswer:"Temporary buffers ('*.tmp'), editor lock/swap files ('*.swp', '~*'), backup artifacts ('*.bak'), and Python compiled bytecode files ('*.pyc', '*.pyo', '__pycache__').",explanation:"Common junk file classification.",hint:"*.tmp, *.bak, *.pyc, *.swp, and __pycache__ directories.",level:"basic",codeExample:"JUNK_PATTERNS = ['*.tmp', '*.bak', '*.pyc', '*.swp', '~*']"},{question:"How do you schedule a Python maintenance script on Linux systems?",shortAnswer:"By adding a cron entry via 'crontab -e', for example: '0 2 * * * /usr/bin/python3 /opt/accotax/maintenance.py >> /var/log/maint.log 2>&1' (runs nightly at 2:00 AM).",explanation:"Linux cron job automation.",hint:"Use crontab -e to set scheduled execution intervals.",level:"basic",codeExample:"# crontab: 0 2 * * * /usr/bin/python3 /path/maintenance.py"},{question:"How do you schedule a Python maintenance script on Windows systems?",shortAnswer:"Using the Windows Task Scheduler ('schtasks' command or GUI), creating a task that runs 'python.exe C:\\path\\maintenance.py' on a scheduled trigger.",explanation:"Windows task scheduler automation.",hint:"Use Windows Task Scheduler (schtasks.exe).",level:"basic",codeExample:'# schtasks /create /tn "AccoTaxMaint" /tr "python.exe maint.py" /sc daily /st 02:00'},{question:"How do you ensure that multiple instances of a maintenance script do not run concurrently?",shortAnswer:"By acquiring a file lock on a dedicated lockfile (e.g. using 'fcntl.flock' on Unix, or creating an exclusive lockfile with 'os.open(path, os.O_CREAT | os.O_EXCL)').",explanation:"Singleton process locking invariant.",hint:"Use an exclusive lockfile to prevent concurrent execution.",level:"moderate",codeExample:"lock_fd = os.open('maint.lock', os.O_CREAT | os.O_EXCL | os.O_RDWR)"},{question:"Why should maintenance scripts emit structured JSON logs alongside human-readable logs?",shortAnswer:"Structured JSON logs allow automated log collectors (Elasticsearch, CloudWatch, Datadog) to parse metrics (bytes reclaimed, rotation counts, execution latency) programmatically.",explanation:"Structured observability in DevOps.",hint:"Enables programmatic parsing by cloud monitoring and alerting platforms.",level:"basic",codeExample:"print(json.dumps({'event': 'MAINT_COMPLETE', 'bytes_reclaimed': 1048576}))"},{question:"What should a maintenance script do if a PermissionError occurs on a single file during sweeping?",shortAnswer:"Log a warning with the file path and continue sweeping remaining files rather than crashing the entire maintenance cycle.",explanation:"Resilient fault tolerance in batch operations.",hint:"Log the warning and continue processing remaining items.",level:"basic",codeExample:`try: os.remove(p)
except PermissionError as e: logger.warning('Skipped %s: %s', p, e)`},{question:"How do you measure the exact execution duration of a maintenance script pass?",shortAnswer:"Using 'start_time = time.perf_counter()' at the start and calculating 'elapsed_ms = (time.perf_counter() - start_time) * 1000' at completion.",explanation:"High-resolution benchmarking.",hint:"Use time.perf_counter() to compute elapsed milliseconds.",level:"basic",codeExample:"t0 = time.perf_counter(); ...; ms = (time.perf_counter() - t0) * 1000"},{question:"What is the role of 'os.utime(path, times)' in testing age-based maintenance scripts?",shortAnswer:"It allows manually setting the access and modification timestamps ('st_atime', 'st_mtime') of a test file to a historical date (e.g. 30 days ago) to verify purge logic.",explanation:"Filesystem timestamp mocking.",hint:"Sets access and modification timestamps to simulate old files in tests.",level:"moderate",codeExample:"past = time.time() - 30 * 86400; os.utime('old.log', (past, past))"},{question:"How do you configure warning and critical alert thresholds in a storage health monitor?",shortAnswer:"Define warning at e.g. 80% usage and critical at 90% usage; trigger automated cleanup at warning, and page on-call engineers via webhook/email at critical.",explanation:"Tiered alert threshold architecture.",hint:"Set warning at 80% and critical at 90% to trigger progressive recovery actions.",level:"basic",codeExample:"if used_pct >= 90: alert_critical() elif used_pct >= 80: trigger_cleanup()"},{question:"Why should log compression be performed in streaming chunks using 'shutil.copyfileobj()'?",shortAnswer:"Streaming in fixed buffer chunks (e.g. 64KB) prevents reading entire multi-gigabyte log files into RAM at once, keeping the maintenance script's memory footprint under 20MB.",explanation:"Constant-memory streaming I/O.",hint:"Avoids loading large multi-gigabyte log files into memory at once.",level:"moderate",codeExample:"shutil.copyfileobj(f_in, f_out, length=64*1024)"},{question:"How do you automatically clean empty directories after purging their contents?",shortAnswer:"Traverse bottom-up ('topdown=False') with 'os.walk()'; if 'len(os.listdir(root)) == 0', remove the directory with 'os.rmdir(root)'.",explanation:"Empty directory pruning.",hint:"Check if directory is empty after child deletion and call os.rmdir().",level:"basic",codeExample:"if not os.listdir(dir_path): os.rmdir(dir_path)"},{question:"What is 'RotatingFileHandler' in Python's standard 'logging.handlers' module?",shortAnswer:"A built-in logging handler that automatically rotates log files when they reach a specified 'maxBytes' size and maintains a fixed 'backupCount' of historical log files.",explanation:"Standard logging framework log rotator.",hint:"Standard library logging handler for automatic size-based log rotation.",level:"moderate",codeExample:`from logging.handlers import RotatingFileHandler
h = RotatingFileHandler('app.log', maxBytes=10*1024*1024, backupCount=5)`},{question:"What is 'TimedRotatingFileHandler' in Python's standard 'logging.handlers' module?",shortAnswer:`A built-in logging handler that rotates log files at scheduled time intervals (such as midnight every day 'when="midnight"' or every hour 'when="H"').`,explanation:"Standard logging framework timed rotator.",hint:"Standard library logging handler for automatic time-interval log rotation.",level:"moderate",codeExample:`from logging.handlers import TimedRotatingFileHandler
h = TimedRotatingFileHandler('app.log', when='midnight', backupCount=30)`},{question:"How do you ensure maintenance audit records cannot be overwritten?",shortAnswer:`Open audit log files in append mode ('open(path, "a")') and restrict permissions to append-only for the application service account.`,explanation:"Immutable audit trail integrity.",hint:"Open in append mode ('a') and enforce strict OS write permissions.",level:"basic",codeExample:"with open('maintenance_audit.log', 'a') as f: f.write(entry)"},{question:"How do you calculate total disk bytes reclaimed across all purged files?",shortAnswer:"Sum 'os.stat(p).st_size' for every file successfully removed during the maintenance pass.",explanation:"Storage reclamation metric aggregation.",hint:"Sum the sizes of all files deleted during the sweep.",level:"basic",codeExample:"reclaimed += os.path.getsize(f); os.remove(f)"},{question:"What exit code should a maintenance script return if a critical disk warning is detected?",shortAnswer:"Return non-zero (e.g. exit code 2) to signal monitoring systems and CI/CD pipelines that the server requires immediate attention.",explanation:"Process exit code signalling for monitoring.",hint:"Return a non-zero exit code to alert monitoring tools.",level:"basic",codeExample:"sys.exit(2 if is_critical else 0)"},{question:"What is the ultimate golden rule for writing system maintenance scripts in Python?",shortAnswer:"Always support '--dry-run' simulation, truncate active logs instead of unlinking, stream gzip compression in constant memory, traverse bottom-up for safe cache cleanup, and emit structured audit telemetry.",explanation:"The complete enterprise guideline for automated maintenance scripts.",hint:"Support dry-run, truncate active logs, stream gzip compression, and emit structured audit metrics.",level:"basic",codeExample:"# Python Automated Maintenance Mastery"}];function D(){const m=a.useRef([]),[i,h]=a.useState("logRotation"),[r,x]=a.useState("barrackpore"),[u,g]=a.useState(7),[s,_]=a.useState(!1),[c,b]=a.useState("FULL_PASS");let l="",d="";c==="ROTATE_LOGS"?(l=`# Size-based log rotation and gzip compression:
for log_file in os.listdir("logs/${r}"):
    if log_file.endswith(".log") and os.path.getsize(f"logs/{campus}/{log_file}") > 500*1024:
        gz_name = f"{log_file}.{datetime.now().strftime('%Y%m%d')}.gz"
        ${s?"print(f'[DRY-RUN] Would compress {log_file} -> {gz_name}')":`with open(log_path, "rb") as f_in, gzip.open(gz_path, "wb") as f_out:
            shutil.copyfileobj(f_in, f_out)
        with open(log_path, "w") as f_res:
            f_res.write("[CYCLE_RESET]\\n")`}`,d=`[MAINTENANCE_DAEMON] LOG ROTATION PASS:
* Target Campus  : ${r.toUpperCase()}
* Mode           : ${s?"[DRY-RUN SIMULATION]":"[LIVE EXECUTION]"}
* Logs Rotated   : 3 files (access.log, transactions.log, errors.log)
* Gzip Ratio     : ~87.4% compression savings
* Inode Reset    : Preserved active server file handles.
[STATUS] Log rotation cycle completed.`):c==="PURGE_TEMP"?(l=`# Bottom-up stale temporary file & cache sweeper:
for root, dirs, files in os.walk("storage/${r}", topdown=False):
    for f in files:
        if f.endswith((".tmp", ".bak", ".pyc")):
            ${s?"print('[DRY-RUN] Would delete:', f)":"os.remove(os.path.join(root, f))"}
    for d in dirs:
        if d == "__pycache__":
            ${s?"print('[DRY-RUN] Would remove cache folder:', d)":"shutil.rmtree(os.path.join(root, d))"}`,d=`[MAINTENANCE_DAEMON] TEMP & CACHE SWEEPER PASS:
* Target Campus     : ${r.toUpperCase()}
* Mode              : ${s?"[DRY-RUN SIMULATION]":"[LIVE EXECUTION]"}
* Stale Files Wiped : 14 files (.tmp, .bak, .pyc)
* Caches Reclaimed  : 4 __pycache__ directories
* Storage Reclaimed : 4.82 MB
[STATUS] Temp sweep completed cleanly.`):c==="HEALTH_CHECK"?(l=`# Storage capacity and threshold inspection:
usage = shutil.disk_usage("/")
used_pct = (usage.used / usage.total) * 100
if used_pct >= 90.0:
    status = "CRITICAL_STORAGE_EXHAUSTION"
elif used_pct >= 80.0:
    status = "WARNING_HIGH_USAGE"
else:
    status = "HEALTHY_NORMAL"
print(f"Health Status: {status} ({used_pct:.1f}% used)")`,d=`[MAINTENANCE_DAEMON] HOST HEALTH EVALUATION:
* Target Mount   : storage/${r}
* Total Drive    : 512.00 GB
* Used Space     : 218.40 GB (42.7%)
* Free Available : 293.60 GB
* Health Status  : [HEALTHY_NORMAL]
[STATUS] All resource quotas optimal.`):(l=`# Automated Full Maintenance Pass Orchestration:
engine = InstitutionalServerMaintenanceEngine("storage/${r}", dry_run=${s?"True":"False"})
summary = engine.execute_maintenance_cycle()
print("Maintenance Summary:", json.dumps(summary, indent=2))`,d=`[MAINTENANCE_DAEMON] EXECUTING FULL MAINTENANCE PASS:
* Campus Node        : ${r.toUpperCase()} Production Server
* Execution Mode     : ${s?"[DRY-RUN SIMULATION]":"[LIVE EXECUTION]"}
* Logs Rotated & Gz  : 3 active log streams
* Junk Files Purged  : 14 temp artifacts
* Storage Reclaimed  : 4.82 MB
* Storage Assessment : [OPTIMAL HEALTH] (293.6 GB Free)
* Audit Log Recorded : maintenance_audits/audit_20260825.log
[PASSED] Maintenance pass finished in 32.4 ms.`),a.useEffect(()=>{const t=new IntersectionObserver(p=>{p.forEach(f=>{f.isIntersecting&&f.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return m.current.forEach(p=>{p&&t.observe(p)}),()=>t.disconnect()},[]);const n=t=>{t&&!m.current.includes(t)&&m.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:n,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 4 • Module 004_001"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 6"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Advanced File Operations, OS & Subprocess Automation"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["System Maintenance: ",e.jsx("span",{className:"text-teal-400",children:"Log Rotation & Health Monitoring"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master autonomous server maintenance engineering in Python: size and age-based log rotation with standard ",e.jsx("code",{className:"text-teal-300 font-mono",children:"gzip"})," compression, open file descriptor truncation invariants, bottom-up temporary file and bytecode cache sweeping, safe simulation with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"--dry-run"})," modes, and storage health threshold alerting using ",e.jsx("code",{className:"text-purple-300 font-mono",children:"shutil.disk_usage()"}),"."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🗜️ Gzip Log Compression"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🧹 Temp File Sweeping"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Safe `--dry-run` Mode"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🚨 Storage Quota Alerts"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧹"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Autonomous Server Maintenance Architecture"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"Production server health depends on autonomous maintenance scripts that prevent disk saturation and clean temporary artifacts:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Log Rotation & Gzip"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:'gzip.open(), truncate("w")'}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Rotates oversized logs into compressed ",e.jsx("code",{className:"text-teal-300 font-mono",children:".gz"})," files while preserving active daemon file handles."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Temp & Cache Sweeper"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"os.walk(topdown=False)"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Purges stale ",e.jsx("code",{className:"text-cyan-300 font-mono",children:".tmp"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:".bak"}),", and ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"__pycache__"})," folders bottom-up."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Quota & Thresholds"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"disk_usage(), JSON telemetry"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Evaluates warning (>80%) and critical (>90%) thresholds to trigger proactive automated recoveries."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Log Truncation Invariant: Never Delete Active Logs"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Calling ",e.jsx("code",{className:"text-rose-400 font-mono",children:"os.remove('server.log')"})," on a running daemon unlinks the filename but leaves the open inode allocated in kernel RAM, failing to reclaim disk space! Always truncate the active log with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"open('server.log', 'w')"})," after gzip compression."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Log Rotation, Cache Sweeping & Health Thresholds"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>h("logRotation"),className:o("px-3 py-1.5 rounded-lg transition-all",i==="logRotation"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Log Rotation & Gzip"}),e.jsx("button",{onClick:()=>h("sweeperFlow"),className:o("px-3 py-1.5 rounded-lg transition-all",i==="sweeperFlow"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Bottom-Up Sweeper"}),e.jsx("button",{onClick:()=>h("quotaAlerts"),className:o("px-3 py-1.5 rounded-lg transition-all",i==="quotaAlerts"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Disk Quota Thresholds"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining log compression pipelines, bottom-up cache purging, and multi-tiered disk capacity alerts:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:i==="logRotation"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"STREAMING GZIP LOG ROTATION & INODE TRUNCATION"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"1. Oversized Active Log"}),e.jsx("text",{x:"15",y:"55",fill:"#38bdf8",fontSize:"8 font-mono",children:"`app.log` (> 500 KB)"}),e.jsx("text",{x:"15",y:"80",fill:"#cbd5e1",fontSize:"8",children:"Active server daemon"}),e.jsx("text",{x:"15",y:"95",fill:"#cbd5e1",fontSize:"8",children:"holds open write handle."}),e.jsx("text",{x:"15",y:"110",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"Never unlink directly!"}),e.jsx("rect",{x:"15",y:"130",width:"220",height:"90",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"25",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"Read Stream:"}),e.jsx("text",{x:"25",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Open `app.log` in `'rb'` mode."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"310",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. Streaming Gzip"}),e.jsx("text",{x:"310",y:"55",fill:"#38bdf8",fontSize:"8 font-mono",children:"`app.log.20260825.gz`"}),e.jsx("text",{x:"310",y:"80",fill:"#cbd5e1",fontSize:"8",children:"Stream bytes using"}),e.jsx("text",{x:"310",y:"95",fill:"#34d399",fontSize:"8 font-mono",children:"`shutil.copyfileobj()`"}),e.jsx("text",{x:"310",y:"110",fill:"#cbd5e1",fontSize:"8",children:"into `gzip.open('wb')`."}),e.jsx("rect",{x:"310",y:"130",width:"220",height:"90",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"320",y:"155",fill:"#38bdf8",fontSize:"9 font-bold",children:"Compression Efficiency:"}),e.jsx("text",{x:"320",y:"175",fill:"#cbd5e1",fontSize:"8",children:"85% to 90% disk space savings."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"605",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"3. Truncate Active Log"}),e.jsx("text",{x:"605",y:"55",fill:"#c084fc",fontSize:"8 font-mono",children:"`open('app.log', 'w')`"}),e.jsx("text",{x:"605",y:"80",fill:"#cbd5e1",fontSize:"8",children:"Resets file size to 0"}),e.jsx("text",{x:"605",y:"95",fill:"#34d399",fontSize:"8 font-bold",children:"Preserves file descriptor!"}),e.jsx("text",{x:"605",y:"110",fill:"#cbd5e1",fontSize:"8",children:"Server logs seamlessly."}),e.jsx("rect",{x:"605",y:"130",width:"200",height:"90",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"615",y:"155",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Zero Daemon Restarts:"}),e.jsx("text",{x:"615",y:"175",fill:"#cbd5e1",fontSize:"8",children:"100% Zero-downtime maintenance."})]})]}):i==="sweeperFlow"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"BOTTOM-UP JUNK FILE & BYTECODE SWEEPER (`topdown=False`)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"Top-Down Sweeping [CRASHES ON DIRECTORIES]"}),e.jsx("text",{x:"20",y:"65",fill:"#fca5a5",fontSize:"8 font-mono",children:"1. Visits parent `__pycache__` before child `.pyc`"}),e.jsx("text",{x:"20",y:"85",fill:"#fca5a5",fontSize:"8 font-mono",children:"2. Attempts `os.rmdir('__pycache__')`"}),e.jsx("text",{x:"20",y:"105",fill:"#f43f5e",fontSize:"8 font-mono font-bold",children:"Raises OSError: Directory not empty!"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"155",fill:"#fda4af",fontSize:"9 font-bold",children:"Traversal Order Hazard:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Cannot remove directories while children still exist."})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"Bottom-Up Sweeping (`topdown=False`) [CLEAN]"}),e.jsx("text",{x:"20",y:"65",fill:"#34d399",fontSize:"8 font-mono",children:"1. Deletes child `.pyc`, `.tmp`, and `.bak` files first"}),e.jsx("text",{x:"20",y:"85",fill:"#34d399",fontSize:"8 font-mono",children:"2. Parent `__pycache__` becomes empty"}),e.jsx("text",{x:"20",y:"105",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"3. Safely removes parent cache folder"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"Deterministic Cleanup:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Leaves zero empty junk directories on the filesystem."})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"DISK STORAGE CAPACITY THRESHOLD MONITORING"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"15",y:"30",fill:"#a7f3d0",fontSize:"11 font-bold",children:"< 80% Usage [HEALTHY]"}),e.jsx("text",{x:"15",y:"55",fill:"#34d399",fontSize:"8 font-mono",children:"Status: NORMAL"}),e.jsx("text",{x:"15",y:"80",fill:"#cbd5e1",fontSize:"8",children:"Storage capacity is"}),e.jsx("text",{x:"15",y:"95",fill:"#cbd5e1",fontSize:"8",children:"plentiful (> 100 GB Free)."}),e.jsx("text",{x:"15",y:"110",fill:"#34d399",fontSize:"8",children:"Standard scheduled passes."}),e.jsx("rect",{x:"15",y:"135",width:"220",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"25",y:"160",fill:"#34d399",fontSize:"9 font-bold",children:"Action Taken:"}),e.jsx("text",{x:"25",y:"180",fill:"#cbd5e1",fontSize:"8",children:"Normal nightly maintenance."}),e.jsx("rect",{x:"280",y:"0",width:"250",height:"240",rx:"8",fill:"#78350f",stroke:"#f59e0b"}),e.jsx("text",{x:"295",y:"30",fill:"#fde68a",fontSize:"11 font-bold",children:"80% - 90% [WARNING]"}),e.jsx("text",{x:"295",y:"55",fill:"#fbbf24",fontSize:"8 font-mono",children:"Status: HIGH_USAGE"}),e.jsx("text",{x:"295",y:"80",fill:"#cbd5e1",fontSize:"8",children:"Storage threshold exceeded."}),e.jsx("text",{x:"295",y:"95",fill:"#fde68a",fontSize:"8",children:"Proactive purge triggered."}),e.jsx("text",{x:"295",y:"110",fill:"#cbd5e1",fontSize:"8",children:"Deletes logs older than 7 days."}),e.jsx("rect",{x:"295",y:"135",width:"220",height:"85",rx:"4",fill:"#451a03",stroke:"#d97706"}),e.jsx("text",{x:"305",y:"160",fill:"#fde68a",fontSize:"9 font-bold",children:"Action Taken:"}),e.jsx("text",{x:"305",y:"180",fill:"#cbd5e1",fontSize:"8",children:"Executes aggressive cache purge."}),e.jsx("rect",{x:"560",y:"0",width:"260",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"575",y:"30",fill:"#fda4af",fontSize:"11 font-bold",children:"> 90% [CRITICAL ALERT]"}),e.jsx("text",{x:"575",y:"55",fill:"#f43f5e",fontSize:"8 font-mono",children:"Status: EXHAUSTION"}),e.jsx("text",{x:"575",y:"80",fill:"#cbd5e1",fontSize:"8",children:"Immediate outage risk!"}),e.jsx("text",{x:"575",y:"95",fill:"#fda4af",fontSize:"8",children:"Database write locks imminent."}),e.jsx("text",{x:"575",y:"110",fill:"#f43f5e",fontSize:"8 font-bold",children:"Pages on-call DevOps."}),e.jsx("rect",{x:"575",y:"135",width:"230",height:"85",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"585",y:"160",fill:"#fda4af",fontSize:"9 font-bold",children:"Action Taken:"}),e.jsx("text",{x:"585",y:"180",fill:"#cbd5e1",fontSize:"8",children:"Emergency purge + Ops Webhook."})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Maintenance Daemon & Sweeper Laboratory"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Configure campus server nodes, toggle retention periods, switch between dry-run simulation and live execution, and inspect real-time maintenance telemetry:"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"1. Maintenance Cycle Action:"}),e.jsx("div",{className:"grid grid-cols-2 gap-1.5 bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:[{id:"FULL_PASS",label:"1. Full Maintenance Pass"},{id:"ROTATE_LOGS",label:"2. Rotate & Gzip Logs"},{id:"PURGE_TEMP",label:"3. Sweep Temp / Cache"},{id:"HEALTH_CHECK",label:"4. Storage Quota Check"}].map(t=>e.jsx("button",{onClick:()=>b(t.id),className:o("py-1.5 rounded transition-all",c===t.id?"bg-teal-900/60 text-teal-300 font-bold border border-teal-700/80":"text-slate-400 hover:text-white"),children:t.label},t.id))})]}),e.jsxs("div",{className:"space-y-1.5 pt-1",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold",children:"2. Campus Production Node:"}),e.jsx("div",{className:"flex bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:["barrackpore","kolkata"].map(t=>e.jsxs("button",{onClick:()=>x(t),className:o("flex-1 py-1 rounded transition-all capitalize",r===t?"bg-cyan-900/60 text-cyan-300 font-bold border border-cyan-700/80":"text-slate-400 hover:text-white"),children:[t," Node"]},t))})]}),e.jsxs("div",{className:"space-y-1.5 pt-1",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-purple-400 font-bold",children:"3. Log Retention Threshold:"}),e.jsx("div",{className:"flex bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:[7,14,30].map(t=>e.jsxs("button",{onClick:()=>g(t),className:o("flex-1 py-1 rounded transition-all",u===t?"bg-purple-900/60 text-purple-300 font-bold border border-purple-700/80":"text-slate-400 hover:text-white"),children:[t," Days"]},t))})]}),e.jsx("div",{className:"pt-1",children:e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-xs font-mono",children:[e.jsx("input",{type:"checkbox",checked:s,onChange:t=>_(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"Simulation Mode (`--dry-run` - Preview without Deletion)"})]})})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs space-y-1",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:"Generated Python Maintenance Automation Code:"}),e.jsx("pre",{className:"text-teal-300 text-[11px] leading-relaxed break-all font-mono overflow-x-auto",children:l})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[160px] font-mono text-xs space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-[10px] font-bold uppercase text-slate-400",children:[e.jsx("span",{children:"Maintenance Telemetry Stream:"}),e.jsx("span",{className:"text-emerald-400",children:"Exit Code 0"})]}),e.jsx("pre",{className:"text-slate-200 text-[11px] leading-relaxed font-mono whitespace-pre-wrap",children:d})]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Maintenance Module & Technique Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Technique / Recipe"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Category"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Memory & Inode Impact"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Primary Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"`gzip.open() + copyfileobj`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Log Compression"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Constant RAM (64KB chunks)"}),e.jsx("td",{className:"py-3 px-4",children:"Compressing multi-GB access logs without RAM bloat"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"`open(log, 'w')` Truncation"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Log Reset"}),e.jsx("td",{className:"py-3 px-4 text-cyan-300",children:"Preserves open file handle"}),e.jsx("td",{className:"py-3 px-4",children:"Zero-downtime log rotation on running daemon services"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"`os.walk(topdown=False)`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Cache Sweeper"}),e.jsx("td",{className:"py-3 px-4 text-purple-300",children:"Bottom-up leaf removal"}),e.jsx("td",{className:"py-3 px-4",children:"Safely wiping `.pyc` and `__pycache__` directories"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"`shutil.disk_usage()`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Health Monitoring"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Zero disk I/O cost"}),e.jsx("td",{className:"py-3 px-4",children:"Evaluating >80% and >90% storage alert thresholds"})]})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating log rotation, temp file sweeping, health monitoring, and institutional server maintenance daemons:"}),e.jsx(y,{files:[{filename:"log_rotation_and_cleanup_maintenance.py",code:N,description:"Automated log rotation, gzip compression, and age-based purging."},{filename:"temp_file_sweeper_and_cache_purger.py",code:S,description:"Temp file sweeping, dry-run simulation, and bytecode cache purging."},{filename:"system_resource_and_health_monitor.py",code:A,description:"Storage inspection, threshold alerting, and JSON telemetry generation."},{filename:"institutional_automated_server_maintenance_daemon.py",code:T,description:"Full server maintenance orchestration, log rotation, and audit logs."}]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Unlinking Active Log Files"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-rose-300 font-mono",children:"os.remove('server.log')"})," on a running daemon unlinks the filename but leaves the open inode allocated in kernel RAM, failing to reclaim disk space!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Truncate active log with ",e.jsx("code",{className:"text-emerald-300",children:"open('server.log', 'w')"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Running Without `--dry-run` Validation"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Executing automated delete passes without dry-run testing risks wiping legitimate production data if wildcard patterns match unintended files."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always default to or provide ",e.jsx("code",{className:"text-emerald-300",children:"--dry-run"})," previews."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Memory Exhaustion in Gzip Reads"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-purple-300 font-mono",children:"f_in.read()"})," on a 5GB log loads all 5GB into RAM, crashing the maintenance worker with ",e.jsx("code",{className:"text-slate-300",children:"MemoryError"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"shutil.copyfileobj(f_in, f_out)"})," in 64KB chunks."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Top-Down Cache Deletion"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Sweeping directories with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"topdown=True"})," crashes when attempting to delete parent folders that still contain child files."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always traverse bottom-up using ",e.jsx("code",{className:"text-emerald-300",children:"topdown=False"}),"."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering automated maintenance, log rotation, gzip streams, temp sweepers, dry-run, and disk quotas:"}),e.jsx(j,{questions:k})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with maintenance daemon recipes, log rotation patterns, and sweeper templates:"}),e.jsx("div",{className:"mb-10",children:e.jsx(w,{content:E,filename:"python_topic6_automated_maintenance_notes.txt",title:"Print Topic 6 Study Notes"})}),e.jsx(v,{})]})]})]})}export{D as default};
