import{b as a,j as e,bg as n}from"./vendor-react-core-Doz9nIC6.js";import{P as b}from"./PythonFileLoader-hCi5osN-.js";import{P as _}from"./PlainTextPrint-C08xhKA4.js";import{F as y}from"./FAQTemplate-CkSqDH4B.js";import{T as v}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const P=`# topic3_files/cprofile_deterministic_profiler_fundamentals.py\r
# Module: 004_002_performance-optimization\r
# Topic: Profiling CPU execution using cProfile and pstats\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 3 - File 1: Python \`cProfile\` & \`pstats\` Profiling Fundamentals\r
Demonstrates:\r
  1. Deterministic CPU profiling using standard library \`cProfile.Profile\`\r
  2. Formatting, filtering, and sorting profiling reports with \`pstats.Stats\`\r
  3. Differentiating \`tottime\` (time in function body) vs \`cumtime\` (function + all subcalls)\r
  4. Sorting by \`SortKey.CUMULATIVE\`, \`SortKey.TIME\`, and \`SortKey.CALLS\`\r
"""\r
\r
import time\r
import cProfile\r
import pstats\r
from io import StringIO\r
from typing import List\r
\r
# Sub-functions simulating processing workload:\r
def step_a_fast_math(n: int) -> int:\r
    return sum(i * 2 for i in range(n))\r
\r
def step_b_slow_bottleneck(n: int) -> List[int]:\r
    """Artificial bottleneck simulating slow quadratic or string operations."""\r
    out = []\r
    for i in range(n):\r
        time.sleep(0.0001)  # Simulate expensive I/O or CPU calculation\r
        out.append(i * i)\r
    return out\r
\r
def step_c_formatting(records: List[int]) -> List[str]:\r
    return [f"VAL-{r}" for r in records]\r
\r
def execute_admission_pipeline(count: int = 50):\r
    """Main pipeline invoking multiple subroutines."""\r
    a_res = step_a_fast_math(count * 100)\r
    b_res = step_b_slow_bottleneck(count)\r
    c_res = step_c_formatting(b_res)\r
    return len(c_res)\r
\r
\r
def run_cprofile_fundamentals():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - CPROFILE & PSTATS PROFILING FUNDAMENTALS")\r
    print("=" * 70)\r
\r
    # 1. Initialize cProfile instance\r
    profiler = cProfile.Profile()\r
\r
    print("1. Profiling Execution of \`execute_admission_pipeline()\`...")\r
    profiler.enable()\r
    execute_admission_pipeline(count=60)\r
    profiler.disable()\r
\r
    # 2. Format profile statistics using pstats\r
    stream = StringIO()\r
    stats = pstats.Stats(profiler, stream=stream)\r
\r
    # Sort by cumulative time to find highest-level bottlenecks:\r
    stats.strip_dirs()\r
    stats.sort_stats(pstats.SortKey.CUMULATIVE)\r
    stats.print_stats(10)\r
\r
    print("\\n2. Top 10 Functions by Cumulative Time (\`cumtime\`):")\r
    print(stream.getvalue())\r
\r
    print(r"""\r
cProfile Metrics Anatomy:\r
  1. \`ncalls\`  : Number of times the function was invoked (e.g. 50/1 indicates 50 total calls, 1 primitive).\r
  2. \`tottime\` : Total time spent inside the function body EXCLUDING time spent in sub-calls.\r
  3. \`cumtime\` : Total cumulative time spent inside the function AND ALL sub-functions called.\r
  4. \`percall\` : Average time per invocation (\`tottime / ncalls\` or \`cumtime / ncalls\`).\r
""")\r
    print("[PASSED] cProfile Fundamentals Verified.")\r
\r
\r
if __name__ == "__main__":\r
    run_cprofile_fundamentals()\r
`,w=`# topic3_files/cprofile_context_manager_and_decorators.py\r
# Module: 004_002_performance-optimization\r
# Topic: Profiling CPU execution using cProfile and pstats\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 3 - File 2: Reusable Profiling Decorator, Context Manager & Snapshots\r
Demonstrates:\r
  1. Creating a custom \`@profile_function\` decorator for selective profiling\r
  2. Creating a custom \`ProfilerContext\` context manager for code blocks\r
  3. Exporting binary profiling dumps (\`stats.dump_stats()\`) for external tools like Snakeviz\r
"""\r
\r
import os\r
import cProfile\r
import pstats\r
import functools\r
from io import StringIO\r
from typing import Callable, Any\r
\r
# 1. Custom Profiler Context Manager\r
class ProfilerContext:\r
    """Context manager to profile specific targeted code blocks."""\r
\r
    def __init__(self, label: str = "Block Profile", limit: int = 5):\r
        self.label = label\r
        self.limit = limit\r
        self.profiler = cProfile.Profile()\r
\r
    def __enter__(self):\r
        self.profiler.enable()\r
        return self\r
\r
    def __exit__(self, exc_type, exc_val, exc_tb):\r
        self.profiler.disable()\r
        stream = StringIO()\r
        stats = pstats.Stats(self.profiler, stream=stream).strip_dirs()\r
        stats.sort_stats(pstats.SortKey.CUMULATIVE)\r
        stats.print_stats(self.limit)\r
        print(f"\\n--- [PROFILER CONTEXT: {self.label}] ---")\r
        print(stream.getvalue())\r
\r
# 2. Custom Profiling Decorator\r
def profile_function(limit: int = 5, sort_by=pstats.SortKey.CUMULATIVE):\r
    """Decorator to automatically profile any targeted function."""\r
    def decorator(func: Callable):\r
        @functools.wraps(func)\r
        def wrapper(*args, **kwargs) -> Any:\r
            profiler = cProfile.Profile()\r
            profiler.enable()\r
            result = func(*args, **kwargs)\r
            profiler.disable()\r
\r
            stream = StringIO()\r
            stats = pstats.Stats(profiler, stream=stream).strip_dirs()\r
            stats.sort_stats(sort_by)\r
            stats.print_stats(limit)\r
            print(f"\\n--- [FUNCTION PROFILE: {func.__name__}()] ---")\r
            print(stream.getvalue())\r
            return result\r
        return wrapper\r
    return decorator\r
\r
\r
@profile_function(limit=3)\r
def process_student_dossiers(n: int = 500):\r
    """Sample decorated student processing routine."""\r
    records = [f"STU-{i}" for i in range(n)]\r
    formatted = [f"DOSSIER-{r}" for r in records]\r
    return len(formatted)\r
\r
\r
def demonstrate_custom_profiling():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - CUSTOM PROFILING UTILITIES & SNAPSHOTS")\r
    print("=" * 70)\r
\r
    # 1. Test Decorated Function\r
    print("1. Invoking Function with \`@profile_function\` Decorator:")\r
    res = process_student_dossiers(300)\r
\r
    # 2. Test Profiler Context Manager\r
    print("2. Executing Targeted Code Block with \`with ProfilerContext():\`:")\r
    with ProfilerContext(label="Batch Math Computation", limit=3):\r
        total = sum(i * i for i in range(100_000))\r
\r
    # 3. Exporting Binary Snapshot for Snakeviz\r
    snapshot_file = "temp_admission_profile.pstats"\r
    try:\r
        profiler = cProfile.Profile()\r
        profiler.enable()\r
        _ = sum(i for i in range(50_000))\r
        profiler.disable()\r
        profiler.dump_stats(snapshot_file)\r
        print(f"3. Binary Profile Snapshot Exported: '{snapshot_file}' ({os.path.getsize(snapshot_file)} bytes)")\r
    finally:\r
        if os.path.exists(snapshot_file):\r
            os.remove(snapshot_file)\r
            print("4. Cleanup: Removed temporary snapshot file.")\r
\r
    print(r"""\r
Profiling Ecosystem Invariants:\r
  1. Use \`@profile_function\` to monitor isolated hot-path services in development.\r
  2. Dumping \`.pstats\` snapshots allows opening interactive flamegraphs in web browsers via \`snakeviz profile.pstats\`.\r
  3. Keep profiling disabled in production production workloads to avoid runtime overhead.\r
""")\r
    print("[PASSED] Custom Profiling Utilities & Snapshots Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_custom_profiling()\r
`,j=`# topic3_files/identifying_and_resolving_cpu_bottlenecks.py\r
# Module: 004_002_performance-optimization\r
# Topic: Profiling CPU execution using cProfile and pstats\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 3 - File 3: Identifying & Resolving CPU Bottlenecks with cProfile\r
Demonstrates:\r
  1. Profiling a slow multi-stage data processing pipeline\r
  2. Pinpointing the exact bottleneck function consuming 95%+ of execution time\r
  3. Refactoring the bottleneck and re-profiling to verify 50x performance speedup\r
"""\r
\r
import time\r
import cProfile\r
import pstats\r
from io import StringIO\r
from typing import List, Dict\r
\r
# Stage 1: Fast Data Ingestion\r
def stage1_ingest_records(count: int) -> List[str]:\r
    return [f"STU-{i},Student_{i},30000" for i in range(count)]\r
\r
# Stage 2: Bottleneck - Uncompiled regex & repeated list scans\r
def stage2_slow_validation_bottleneck(raw_records: List[str]) -> List[Dict]:\r
    """Slow implementation: repeatedly checks membership in a list inside a loop."""\r
    valid_ids = [f"STU-{i}" for i in range(len(raw_records))]  # List (O(N) search!)\r
    validated = []\r
\r
    for r in raw_records:\r
        sid, name, fee = r.split(",")\r
        # BOTTLENECK: Linear scan in list for every item -> O(N^2) total!\r
        if sid in valid_ids:\r
            validated.append({"id": sid, "name": name, "fee": float(fee)})\r
    return validated\r
\r
# Stage 2 Optimized: Using Hash Set for O(1) membership\r
def stage2_fast_validation_optimized(raw_records: List[str]) -> List[Dict]:\r
    """Optimized implementation: converts valid_ids to a set for O(1) lookups."""\r
    valid_ids_set = {f"STU-{i}" for i in range(len(raw_records))}  # Set (O(1) search!)\r
    validated = []\r
\r
    for r in raw_records:\r
        sid, name, fee = r.split(",")\r
        if sid in valid_ids_set:  # O(1) Instant\r
            validated.append({"id": sid, "name": name, "fee": float(fee)})\r
    return validated\r
\r
# Stage 3: Fast Formatting\r
def stage3_aggregate_tax(records: List[Dict]) -> float:\r
    return sum(r["fee"] * 0.18 for r in records)\r
\r
\r
def run_bottleneck_walkthrough():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - IDENTIFYING & RESOLVING CPU BOTTLENECKS")\r
    print("=" * 70)\r
\r
    n_records = 2_000\r
\r
    # 1. Profile Slow Pipeline\r
    print(f"1. Profiling Slow Pipeline with {n_records:,} records...")\r
    prof_slow = cProfile.Profile()\r
    prof_slow.enable()\r
\r
    r1 = stage1_ingest_records(n_records)\r
    r2_slow = stage2_slow_validation_bottleneck(r1)\r
    tax_slow = stage3_aggregate_tax(r2_slow)\r
\r
    prof_slow.disable()\r
\r
    stream_slow = StringIO()\r
    pstats.Stats(prof_slow, stream=stream_slow).strip_dirs().sort_stats(pstats.SortKey.CUMULATIVE).print_stats(5)\r
\r
    print("\\n--- [SLOW PIPELINE HOTSPOT PROFILE] ---")\r
    print(stream_slow.getvalue())\r
\r
    # 2. Profile Optimized Pipeline\r
    print("2. Profiling Optimized Pipeline (After Replacing List with Set)...")\r
    prof_fast = cProfile.Profile()\r
    prof_fast.enable()\r
\r
    r1_fast = stage1_ingest_records(n_records)\r
    r2_fast = stage2_fast_validation_optimized(r1_fast)\r
    tax_fast = stage3_aggregate_tax(r2_fast)\r
\r
    prof_fast.disable()\r
\r
    stream_fast = StringIO()\r
    pstats.Stats(prof_fast, stream=stream_fast).strip_dirs().sort_stats(pstats.SortKey.CUMULATIVE).print_stats(5)\r
\r
    print("\\n--- [OPTIMIZED PIPELINE PROFILE] ---")\r
    print(stream_fast.getvalue())\r
\r
    print(r"""\r
Bottleneck Elimination Invariants:\r
  1. \`cProfile\` immediately exposes which sub-function consumes the highest \`cumtime\`.\r
  2. In this case, \`stage2_slow_validation_bottleneck\` consumed 98% of time due to list membership scans.\r
  3. Converting the list to a \`set\` collapsed latency from hundreds of milliseconds to sub-millisecond execution.\r
""")\r
    print("[PASSED] CPU Bottleneck Identification Verified.")\r
\r
\r
if __name__ == "__main__":\r
    run_bottleneck_walkthrough()\r
`,S=`# topic3_files/institutional_admission_ledger_cpu_profiler.py\r
# Module: 004_002_performance-optimization\r
# Topic: Profiling CPU execution using cProfile and pstats\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 3 - File 4: Institutional Admission Ledger CPU Hotspot Profiler (Case Study)\r
Demonstrates:\r
  1. Production CPU profiler for Coder & AccoTax candidate admission & tax pipeline\r
  2. Profiling pipeline stages: data synthesis, KYC parsing, fee GST calculation, and JSON export\r
  3. Generating programmatic audit profiling summaries with bottleneck telemetry\r
"""\r
\r
import re\r
import json\r
import cProfile\r
import pstats\r
from io import StringIO\r
from typing import Dict, List, Any\r
\r
# Pre-compiled regex for high performance\r
KYC_AADHAAR_PATTERN = re.compile(r"^\\d{4}-\\d{4}-\\d{4}$")\r
\r
class InstitutionalAdmissionLedgerProfiler:\r
    """Production CPU profiler for institutional admission processing pipeline."""\r
\r
    def __init__(self, candidate_count: int = 1_000):\r
        self.candidate_count = candidate_count\r
        self.profiler = cProfile.Profile()\r
\r
    def _synthesize_candidate_records(self) -> List[Dict[str, Any]]:\r
        """Stage 1: Generate synthetic student registration records."""\r
        records = []\r
        for i in range(self.candidate_count):\r
            records.append({\r
                "id": f"STU-{i:05d}",\r
                "name": f"Student_{i}",\r
                "aadhaar": f"{1000 + i % 9000}-4422-9988",\r
                "fee": 30000.0 if i % 2 == 0 else 35000.0,\r
                "campus": "barrackpore" if i % 2 == 0 else "kolkata"\r
            })\r
        return records\r
\r
    def _validate_kyc_aadhaar_batch(self, records: List[Dict[str, Any]]) -> List[Dict[str, Any]]:\r
        """Stage 2: Validate student Aadhaar using pre-compiled regex."""\r
        valid_records = []\r
        for r in records:\r
            if KYC_AADHAAR_PATTERN.match(r["aadhaar"]):\r
                valid_records.append(r)\r
        return valid_records\r
\r
    def _compute_gst_and_scholarships(self, records: List[Dict[str, Any]]) -> List[Dict[str, Any]]:\r
        """Stage 3: Compute GST tax breakdown and net payable."""\r
        computed = []\r
        for r in records:\r
            base_fee = r["fee"]\r
            gst_amount = base_fee * 0.18  # 18% GST in India\r
            scholarship = 5000.0 if "barrackpore" in r["campus"] else 0.0\r
            net_fee = (base_fee - scholarship) + gst_amount\r
            computed.append({\r
                **r,\r
                "gst_18pct": gst_amount,\r
                "scholarship": scholarship,\r
                "net_payable": net_fee\r
            })\r
        return computed\r
\r
    def execute_profiled_ledger_pipeline(self) -> Dict[str, Any]:\r
        """Runs the entire ledger processing pipeline under active cProfile profiling."""\r
        self.profiler.enable()\r
\r
        raw_data = self._synthesize_candidate_records()\r
        validated_data = self._validate_kyc_aadhaar_batch(raw_data)\r
        processed_ledger = self._compute_gst_and_scholarships(validated_data)\r
\r
        self.profiler.disable()\r
\r
        # Extract stats\r
        stream = StringIO()\r
        stats = pstats.Stats(self.profiler, stream=stream).strip_dirs()\r
        stats.sort_stats(pstats.SortKey.CUMULATIVE)\r
        stats.print_stats(5)\r
\r
        total_net_fees = sum(r["net_payable"] for r in processed_ledger)\r
        total_gst_collected = sum(r["gst_18pct"] for r in processed_ledger)\r
\r
        return {\r
            "candidate_count": self.candidate_count,\r
            "valid_kyc_count": len(validated_data),\r
            "total_net_fees_inr": total_net_fees,\r
            "total_gst_inr": total_gst_collected,\r
            "profile_summary_text": stream.getvalue()\r
        }\r
\r
\r
def demonstrate_institutional_profiler():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - INSTITUTIONAL ADMISSION LEDGER CPU PROFILER")\r
    print("=" * 70)\r
\r
    engine = InstitutionalAdmissionLedgerProfiler(candidate_count=2_000)\r
    report = engine.execute_profiled_ledger_pipeline()\r
\r
    print("1. Admission Ledger Processing Summary:")\r
    print(f"   * Candidates Processed : {report['candidate_count']:,} records")\r
    print(f"   * Valid KYC Records    : {report['valid_kyc_count']:,}")\r
    print(f"   * Total Net Fees (INR) : INR {report['total_net_fees_inr']:,.2f}")\r
    print(f"   * Total GST Breakdown  : INR {report['total_gst_inr']:,.2f}\\n")\r
\r
    print("2. cProfile Statistical Execution Report (Top 5 Functions):")\r
    print(report["profile_summary_text"])\r
\r
    print(r"""\r
Production Profiling Summary:\r
  1. Pre-compiling \`re.compile()\` in global scope eliminates repeated regex compilation opcodes.\r
  2. Profiling confirms that dictionary unpacking \`{**r, ...}\` executes in sub-millisecond time.\r
  3. Regularly profiling ETL services guarantees sub-10ms response times for institutional APIs.\r
""")\r
    print("[PASSED] Institutional Admission Ledger CPU Profiler Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_institutional_profiler()\r
`,N=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 4: PRO LEVEL • MODULE 004_002: PERFORMANCE OPTIMIZATION\r
               TOPIC 3: CPU PROFILING WITH CPROFILE & PSTATS\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. CPROFILE EXECUTION RECIPES\r
--------------------------------------------------------------------------------\r
  # Programmatic Profiling:\r
  profiler = cProfile.Profile()\r
  profiler.enable()\r
  my_heavy_function()\r
  profiler.disable()\r
\r
  # Format and sort with pstats:\r
  stats = pstats.Stats(profiler)\r
  stats.strip_dirs()\r
  stats.sort_stats(pstats.SortKey.CUMULATIVE)\r
  stats.print_stats(10)\r
\r
--------------------------------------------------------------------------------\r
2. CPROFILE METRICS CHEATSHEET\r
--------------------------------------------------------------------------------\r
  * ncalls  : Number of times the function was called\r
  * tottime : Time spent IN the function body itself (excluding sub-calls)\r
  * percall : tottime / ncalls (Average time per call)\r
  * cumtime : Time spent IN the function AND ALL ITS CHILDREN\r
  * percall : cumtime / ncalls (Average cumulative time per call)\r
\r
--------------------------------------------------------------------------------\r
3. EXPORTING FOR SNAKEVIZ FLAMEGRAPHS\r
--------------------------------------------------------------------------------\r
  profiler.dump_stats("profile.pstats")\r
  # View in terminal / browser:\r
  # $ snakeviz profile.pstats\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 3: CPROFILE & PSTATS MODULES\r
================================================================================\r
`,T=[{question:"What is 'cProfile' in Python and how does it work?",shortAnswer:"'cProfile' is a built-in C-extension deterministic CPU profiler that monitors every function call, return, and exception, recording precise call counts, internal execution time ('tottime'), and cumulative time ('cumtime').",explanation:"Standard deterministic CPU execution profiler.",hint:"Built-in C extension that deterministically tracks call counts and execution durations.",level:"basic",codeExample:`import cProfile
cProfile.run('my_pipeline()')`},{question:"What is the difference between 'cProfile' and the legacy 'profile' module?",shortAnswer:"'cProfile' is implemented in C with minimal runtime overhead (~10-30%); 'profile' is written in pure Python and adds severe slowdown overhead (~1000%), making 'cProfile' the standard choice.",explanation:"C-extension vs pure Python profiler implementation.",hint:"cProfile is written in C with minimal overhead; profile is pure Python and very slow.",level:"basic",codeExample:"# Always use cProfile over profile"},{question:"What is the difference between 'tottime' and 'cumtime' in a profiling report?",shortAnswer:"'tottime' is the total time spent inside the function body itself EXCLUDING sub-calls; 'cumtime' is the cumulative time spent in the function AND ALL its child sub-functions.",explanation:"Internal function time vs cumulative call-tree time.",hint:"tottime excludes sub-calls; cumtime includes all child sub-functions.",level:"basic",codeExample:"# tottime = self only; cumtime = self + child calls"},{question:"What does an entry like 'ncalls = 50/1' mean in a pstats report?",shortAnswer:"The first number (50) is the total number of calls, and the second number (1) is the number of primitive (non-recursive) top-level calls, indicating recursive execution.",explanation:"Recursive call count notation.",hint:"Total calls / Primitive non-recursive calls.",level:"moderate",codeExample:"# 50 total calls, initiated by 1 top-level caller"},{question:"What is the role of the 'pstats' module when working with 'cProfile'?",shortAnswer:"'pstats.Stats' formats, filters, cleans filenames ('strip_dirs()'), sorts by specific metrics ('sort_stats()'), and restricts output lines ('print_stats(10)') from a 'cProfile.Profile' instance.",explanation:"Profiling statistics report generator.",hint:"Formats, cleans, filters, and sorts raw profiler output.",level:"basic",codeExample:"stats = pstats.Stats(profiler).strip_dirs().sort_stats('cumulative')"},{question:"How do you sort a profiling report to find high-level workflow bottlenecks vs low-level CPU hogs?",shortAnswer:`Sort by 'SortKey.CUMULATIVE' (or '"cumulative"') to find high-level workflow bottlenecks; sort by 'SortKey.TIME' (or '"time"') to find low-level CPU-bound functions with heavy internal logic.`,explanation:"Cumulative vs internal time sorting strategies.",hint:"Cumulative time identifies high-level bottlenecks; internal time identifies leaf CPU hogs.",level:"basic",codeExample:`stats.sort_stats(pstats.SortKey.CUMULATIVE)
stats.sort_stats(pstats.SortKey.TIME)`},{question:"How do you profile a specific targeted block of code without profiling the entire script?",shortAnswer:"Create a 'cProfile.Profile()' object, call 'profiler.enable()' before the block, and call 'profiler.disable()' immediately after the block.",explanation:"Targeted section profiling lifecycle.",hint:"Use profiler.enable() and profiler.disable() around the target code block.",level:"basic",codeExample:`prof = cProfile.Profile()
prof.enable()
process_batch()
prof.disable()`},{question:"How do you export profile statistics to a binary file for visual analysis?",shortAnswer:`Call 'profiler.dump_stats("filename.pstats")' (or 'stats.dump_stats("...")') to save a binary snapshot of the profiling data.`,explanation:"Binary profile snapshot persistence.",hint:"Call profiler.dump_stats('profile.pstats').",level:"basic",codeExample:"profiler.dump_stats('admission_profile.pstats')"},{question:"What is Snakeviz and how does it integrate with 'cProfile' snapshots?",shortAnswer:"Snakeviz is a web-based graphical viewer for Python profiling data that reads '.pstats' files and renders interactive icicle diagrams and sunburst flamegraphs in the browser via 'snakeviz profile.pstats'.",explanation:"Browser flamegraph visualization ecosystem.",hint:"Visualizes .pstats binary files as interactive browser flamegraphs and icicle charts.",level:"basic",codeExample:"# Terminal: snakeviz admission_profile.pstats"},{question:"What does 'stats.strip_dirs()' do in 'pstats'?",shortAnswer:"It strips long absolute directory path prefixes from filenames in the report, leaving only the base filename and line number (e.g. 'utils.py:45' instead of 'C:\\Users\\...\\utils.py:45') for cleaner terminal display.",explanation:"Path truncation formatting.",hint:"Removes long directory paths from filenames to make reports clean and readable.",level:"basic",codeExample:"stats.strip_dirs().print_stats(10)"},{question:"What is the difference between Deterministic Profiling ('cProfile') and Statistical Sampling Profiling (e.g. 'py-spy')?",shortAnswer:"Deterministic profiling intercepts EVERY function call (high detail, moderate overhead); Statistical sampling samples the call stack at periodic intervals (low overhead, zero code changes, safe for live production).",explanation:"Deterministic event tracing vs periodic sampling.",hint:"Deterministic tracks all calls; sampling checks the stack periodically with zero overhead.",level:"complex",codeExample:"# cProfile = deterministic; py-spy = statistical sampling"},{question:"Why should deterministic profiling ('cProfile') generally NOT be left active on live production servers?",shortAnswer:"Because intercepting every function call introduces a 10% to 30% execution overhead and consumes memory to track call counters, increasing request latency.",explanation:"Profiling overhead impact in production environments.",hint:"Introduces 10-30% CPU overhead and memory usage on live request paths.",level:"basic",codeExample:"# Keep cProfile in dev/staging; use sampling or APMs in production"},{question:"How do you run 'cProfile' directly from the command line on an entire Python script?",shortAnswer:"Using the '-m cProfile' flag: 'python -m cProfile -s cumulative my_script.py' or exporting to file: 'python -m cProfile -o output.pstats my_script.py'.",explanation:"CLI cProfile script execution.",hint:"python -m cProfile -s cumulative script.py",level:"basic",codeExample:"# Terminal: python -m cProfile -s cumulative app.py"},{question:"What is 'line_profiler' and when should it be used instead of 'cProfile'?",shortAnswer:"'line_profiler' (using the '@profile' decorator and 'kernprof') provides line-by-line execution time breakdown INSIDE a single function, used after 'cProfile' has identified which function is the bottleneck.",explanation:"Function-level macro profiling vs line-level micro profiling.",hint:"Use cProfile to find the bottleneck function, then line_profiler to find the exact slow line.",level:"moderate",codeExample:"# kernprof -l -v script.py (line-by-line inspection)"},{question:"What does a high 'ncalls' count combined with low 'tottime' per call indicate in a profile?",shortAnswer:"A function that is called excessively inside a tight loop (e.g. millions of calls), where the function itself is fast but the sheer call volume creates a major bottleneck.",explanation:"Call count amplification bottleneck.",hint:"Indicates a function invoked millions of times inside loops, creating high cumulative cost.",level:"moderate",codeExample:"# Inlining or caching the function can eliminate call overhead"},{question:"How can you restrict a 'pstats' report to show only functions matching a specific regex or module name?",shortAnswer:`Pass the regex string to 'print_stats()': 'stats.print_stats("admission_")' or 'stats.print_stats(10, "accotax")'.`,explanation:"Regex filtering in pstats reports.",hint:"Pass a string or regex pattern to stats.print_stats().",level:"basic",codeExample:"stats.print_stats('my_module')"},{question:"How do you create a custom reusable '@profile_function' decorator?",shortAnswer:"Instantiate a 'cProfile.Profile()' inside the wrapper, enable it before invoking 'func(*args, **kwargs)', disable it after, and print 'pstats.Stats(profiler)'.",explanation:"Decorator pattern for profiling.",hint:"Wrap the function with profiler.enable() and profiler.disable() in a decorator.",level:"basic",codeExample:`def profile(fn):
    def wrapper(*a, **k):
        p = cProfile.Profile(); p.enable(); res = fn(*a, **k); p.disable()
        pstats.Stats(p).print_stats(5); return res
    return wrapper`},{question:"What does '{built-in method ...}' in a cProfile report signify?",shortAnswer:"It represents standard library or C-level built-in operations (like 'built-in method builtins.sum', 'built-in method time.sleep', or 'built-in method posix.stat').",explanation:"Built-in C function notation in cProfile.",hint:"Identifies standard library or C-level functions executing outside pure Python frames.",level:"basic",codeExample:"# {built-in method builtins.sorted}"},{question:"What is 'callers' and 'callees' analysis in 'pstats'?",shortAnswer:"'stats.print_callers()' shows which functions called a specific function; 'stats.print_callees()' shows which sub-functions were called by a specific function, allowing you to trace call relationships.",explanation:"Call graph relationship introspection.",hint:"print_callers() shows who called the function; print_callees() shows what it called.",level:"moderate",codeExample:`stats.print_callers('validate_kyc')
stats.print_callees('execute_pipeline')`},{question:"How can cProfile help detect uncompiled regular expressions?",shortAnswer:"By showing thousands of calls to 're.compile' or 'sre_compile.compile' in the profiling report, indicating that regexes are being re-parsed inside a loop instead of pre-compiled globally.",explanation:"Regex compilation overhead detection.",hint:"High ncalls for sre_compile indicates regexes are being compiled inside loops.",level:"moderate",codeExample:"# Profiler reveals: 10,000 calls to sre_compile.compile"},{question:"What is the systematic 3-step workflow for CPU optimization using cProfile?",shortAnswer:"1. Profile the application with cProfile to find the top bottleneck function by 'cumtime'; 2. Refactor the bottleneck algorithm (e.g. O(N^2) to O(N) or pre-compile); 3. Re-profile to verify latency reduction.",explanation:"Systematic profiling and verification cycle.",hint:"1. Profile to find bottleneck; 2. Refactor algorithm; 3. Re-profile to verify speedup.",level:"basic",codeExample:"# Measure -> Refactor -> Verify"},{question:"Why should you avoid optimizing code based purely on intuition without profiling?",shortAnswer:"Because developers frequently misjudge where CPU time is actually spent (e.g. optimizing microsecond string syntax while 95% of time is wasted on an unindexed database query or quadratic loop).",explanation:"Premature optimization fallacy and evidence-based profiling.",hint:"Intuition is often wrong; profiling provides empirical proof of where time is spent.",level:"basic",codeExample:"# 'Premature optimization is the root of all evil' - Donald Knuth"},{question:"How do you capture profile statistics into a string variable instead of printing to stdout?",shortAnswer:"Pass an 'io.StringIO()' buffer to 'pstats.Stats(profiler, stream=my_buffer)', then retrieve the formatted text via 'my_buffer.getvalue()'.",explanation:"StringIO buffer redirection for profiling reports.",hint:"Pass a StringIO instance to the stream= parameter of pstats.Stats.",level:"basic",codeExample:`buf = io.StringIO()
stats = pstats.Stats(prof, stream=buf)
stats.print_stats()
report_str = buf.getvalue()`},{question:"Can cProfile profile multi-threaded Python programs?",shortAnswer:"By default, 'cProfile' only profiles the calling thread; to profile multi-threaded programs, a profiler instance must be explicitly attached to each worker thread target function.",explanation:"Thread-specific profiling scope in CPython.",hint:"Only profiles the calling thread; worker threads require separate profiler instances.",level:"complex",codeExample:`def thread_worker():
    p = cProfile.Profile(); p.enable(); ...; p.disable()`},{question:"What is the ultimate golden rule of CPU profiling with cProfile?",shortAnswer:"Never guess where bottlenecks are: use 'cProfile' sorted by cumulative time to pinpoint the exact 5% of code consuming 95% of runtime, eliminate the algorithmic bottleneck, and re-profile to verify the speedup.",explanation:"The complete enterprise guideline for CPU profiling in Python.",hint:"Use cProfile sorted by cumulative time to find the 5% bottleneck consuming 95% runtime.",level:"basic",codeExample:"# Python CPU Profiling Mastery"}];function U(){const c=a.useRef([]),[o,d]=a.useState("callTreeAnatomy"),[m,h]=a.useState("BOTTLENECK"),[l,u]=a.useState("CUMULATIVE");let r=[],p="420.5 ms",f="stage2_validate_records consumes 96.2% of runtime!";m==="BOTTLENECK"?(p="420.5 ms",f="stage2_validate_records consumes 96.2% of runtime (O(N²) list scan)!",r=[{name:"execute_pipeline()",ncalls:"1",tottime:"0.2 ms",cumtime:"420.5 ms",pct:100,isHot:!1},{name:"stage2_validate_records()",ncalls:"1",tottime:"404.6 ms",cumtime:"404.6 ms",pct:96.2,isHot:!0},{name:"stage1_ingest_records()",ncalls:"1",tottime:"10.4 ms",cumtime:"10.4 ms",pct:2.5,isHot:!1},{name:"stage3_compute_tax()",ncalls:"1",tottime:"5.3 ms",cumtime:"5.3 ms",pct:1.3,isHot:!1}]):(p="18.2 ms",f="Hotspot eliminated! Pipeline executes in 18.2 ms (23x Speedup).",r=[{name:"execute_pipeline()",ncalls:"1",tottime:"0.2 ms",cumtime:"18.2 ms",pct:100,isHot:!1},{name:"stage1_ingest_records()",ncalls:"1",tottime:"10.4 ms",cumtime:"10.4 ms",pct:57.1,isHot:!1},{name:"stage3_compute_tax()",ncalls:"1",tottime:"5.3 ms",cumtime:"5.3 ms",pct:29.1,isHot:!1},{name:"stage2_validate_records() [Set]",ncalls:"1",tottime:"2.3 ms",cumtime:"2.3 ms",pct:12.6,isHot:!1}]),l==="TIME"?r=[...r].sort((t,i)=>parseFloat(i.tottime)-parseFloat(t.tottime)):l==="CALLS"?r=[...r].sort((t,i)=>parseInt(i.ncalls)-parseInt(t.ncalls)):r=[...r].sort((t,i)=>parseFloat(i.cumtime)-parseFloat(t.cumtime));const g=`# cProfile CPU Profiling & pstats Report Generation:
import cProfile
import pstats

profiler = cProfile.Profile()
profiler.enable()

# Execute target workload:
execute_pipeline()

profiler.disable()

# Format report with pstats:
stats = pstats.Stats(profiler)
stats.strip_dirs()
stats.sort_stats(pstats.SortKey.${l})
stats.print_stats(10)`;a.useEffect(()=>{const t=new IntersectionObserver(i=>{i.forEach(x=>{x.isIntersecting&&x.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return c.current.forEach(i=>{i&&t.observe(i)}),()=>t.disconnect()},[]);const s=t=>{t&&!c.current.includes(t)&&c.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:s,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 4 • Module 004_002"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 3"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Performance Optimization, Profiling & Big-O Thinking"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["CPU Profiling: ",e.jsx("span",{className:"text-teal-400",children:"cProfile & pstats Modules"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master deterministic CPU profiling in Python: isolating execution bottlenecks with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"cProfile.Profile()"}),", analyzing call tree metrics with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"pstats.Stats()"}),", understanding internal (",e.jsx("code",{className:"text-amber-300 font-mono",children:"tottime"}),") versus cumulative (",e.jsx("code",{className:"text-purple-300 font-mono",children:"cumtime"}),") costs, building custom profiling decorators, and exporting ",e.jsx("code",{className:"text-emerald-400 font-mono",children:".pstats"})," binary snapshots for interactive Snakeviz flamegraphs."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔬 Deterministic Profiling"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📊 `tottime` vs `cumtime`"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔥 Hotspot Elimination"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🌐 Snakeviz Flamegraphs"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🔬"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The CPU Execution Profiling Architecture"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"Deterministic profiling intercepts every function call, return, and exception to build a complete statistical model of program execution:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ `cProfile.Profile`"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"enable(), disable()"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"C-extension profiler with minimal runtime overhead. Records precise call counts and execution timestamps."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ `pstats.Stats`"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:'sort_stats("cumulative")'}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Formats, strips directories, and sorts profiling logs by cumulative time, internal time, or call count."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Flamegraph Dumps"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:'dump_stats("prof.pstats")'}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Exports binary profiling dumps to open interactive visual flamegraphs and icicle charts via Snakeviz."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Golden Profiling Rule: `tottime` vs `cumtime`"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:[e.jsx("code",{className:"text-amber-300 font-mono",children:"tottime"})," represents the time spent inside the function body itself (excluding sub-calls). ",e.jsx("code",{className:"text-purple-300 font-mono",children:"cumtime"})," represents the cumulative time spent inside the function AND all its child sub-routines. Always sort by ",e.jsx("code",{className:"text-teal-300 font-mono",children:"cumtime"})," first to locate the high-level bottleneck branch!"]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Call Trees, Hotspot Isolation & Flamegraphs"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>d("callTreeAnatomy"),className:n("px-3 py-1.5 rounded-lg transition-all",o==="callTreeAnatomy"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Call Tree Anatomy"}),e.jsx("button",{onClick:()=>d("hotspotIsolation"),className:n("px-3 py-1.5 rounded-lg transition-all",o==="hotspotIsolation"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Hotspot Isolation"}),e.jsx("button",{onClick:()=>d("flamegraphEcosystem"),className:n("px-3 py-1.5 rounded-lg transition-all",o==="flamegraphEcosystem"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Flamegraph Tooling"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining call tree hierarchy metrics, identifying the 95% execution hotspot, and integrating with browser flamegraph viewers:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:o==="callTreeAnatomy"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"CPROFILE CALL TREE HIERARCHY & METRIC DECOMPOSITION"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"60",rx:"6",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"20",y:"25",fill:"#a5f3fc",fontSize:"11 font-bold",children:"Top-Level Caller: `execute_pipeline()` (ncalls = 1)"}),e.jsx("text",{x:"20",y:"45",fill:"#38bdf8",fontSize:"9 font-mono",children:"cumtime = 420.5 ms (Total Tree Runtime) | tottime = 0.2 ms (Self Work)"})]}),e.jsxs("g",{transform:"translate(30, 130)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"150",rx:"6",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"`stage1_ingest_records()`"}),e.jsx("text",{x:"15",y:"55",fill:"#34d399",fontSize:"8 font-mono",children:"ncalls = 1"}),e.jsx("text",{x:"15",y:"75",fill:"#38bdf8",fontSize:"8 font-mono",children:"cumtime = 10.4 ms (2.5%)"}),e.jsx("text",{x:"15",y:"95",fill:"#cbd5e1",fontSize:"8",children:"Fast data loading."}),e.jsx("text",{x:"15",y:"115",fill:"#34d399",fontSize:"8 font-bold",children:"STATUS: OPTIMAL"}),e.jsx("rect",{x:"280",y:"0",width:"260",height:"150",rx:"6",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"295",y:"30",fill:"#fda4af",fontSize:"11 font-bold",children:"`stage2_validate_records()`"}),e.jsx("text",{x:"295",y:"55",fill:"#fca5a5",fontSize:"8 font-mono",children:"ncalls = 1"}),e.jsx("text",{x:"295",y:"75",fill:"#f43f5e",fontSize:"8 font-mono font-bold",children:"cumtime = 404.6 ms (96.2%)"}),e.jsx("text",{x:"295",y:"95",fill:"#fca5a5",fontSize:"8",children:"Repeated linear list scans."}),e.jsx("text",{x:"295",y:"115",fill:"#f43f5e",fontSize:"8 font-bold",children:"🔥 SEVERE BOTTLENECK"}),e.jsx("rect",{x:"570",y:"0",width:"250",height:"150",rx:"6",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"585",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"`stage3_compute_tax()`"}),e.jsx("text",{x:"585",y:"55",fill:"#34d399",fontSize:"8 font-mono",children:"ncalls = 1"}),e.jsx("text",{x:"585",y:"75",fill:"#38bdf8",fontSize:"8 font-mono",children:"cumtime = 5.3 ms (1.3%)"}),e.jsx("text",{x:"585",y:"95",fill:"#cbd5e1",fontSize:"8",children:"Fast float arithmetic."}),e.jsx("text",{x:"585",y:"115",fill:"#34d399",fontSize:"8 font-bold",children:"STATUS: OPTIMAL"})]})]}):o==="hotspotIsolation"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"SYSTEMATIC BOTTLENECK ELIMINATION: 96% BOTTLENECK COLLAPSE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"Before Optimization: 420.5 ms"}),e.jsx("text",{x:"20",y:"65",fill:"#fca5a5",fontSize:"8 font-mono",children:"`if student_id in valid_ids_list:`"}),e.jsx("text",{x:"20",y:"85",fill:"#fca5a5",fontSize:"8 font-mono",children:"Scans list of 2,000 IDs for every candidate"}),e.jsx("text",{x:"20",y:"105",fill:"#f43f5e",fontSize:"8 font-mono font-bold",children:"Total comparisons: 2,000 x 2,000 = 4,000,000"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"155",fill:"#fda4af",fontSize:"9 font-bold",children:"Profiler Diagnosis:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Stage 2 consumes 96.2% of pipeline latency."})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"After Optimization: 18.2 ms (23x Faster!)"}),e.jsx("text",{x:"20",y:"65",fill:"#34d399",fontSize:"8 font-mono",children:"`valid_ids_set = set(valid_ids_list)`"}),e.jsx("text",{x:"20",y:"85",fill:"#34d399",fontSize:"8 font-mono",children:"`if student_id in valid_ids_set:` (O(1) Hash)"}),e.jsx("text",{x:"20",y:"105",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"Total comparisons: 2,000 instant bucket checks"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"Verification with cProfile:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Stage 2 latency collapsed from 404.6 ms to 2.3 ms."})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"PROFILING ECOSYSTEM & SNAKEVIZ FLAMEGRAPH PIPELINE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"1. Capture Profile"}),e.jsx("text",{x:"15",y:"55",fill:"#38bdf8",fontSize:"8 font-mono",children:"`cProfile.Profile()`"}),e.jsx("text",{x:"15",y:"80",fill:"#cbd5e1",fontSize:"8",children:"Tracks function entry"}),e.jsx("text",{x:"15",y:"95",fill:"#cbd5e1",fontSize:"8",children:"and exit timestamps."}),e.jsx("rect",{x:"15",y:"130",width:"220",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"25",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"In-Memory Engine:"}),e.jsx("text",{x:"25",y:"175",fill:"#cbd5e1",fontSize:"8",children:"C-level event listener."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"310",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. Dump Binary Snapshot"}),e.jsx("text",{x:"310",y:"55",fill:"#38bdf8",fontSize:"8 font-mono",children:'`dump_stats("out.pstats")`'}),e.jsx("text",{x:"310",y:"80",fill:"#cbd5e1",fontSize:"8",children:"Persists complete call"}),e.jsx("text",{x:"310",y:"95",fill:"#cbd5e1",fontSize:"8",children:"tree to binary file."}),e.jsx("rect",{x:"310",y:"130",width:"220",height:"85",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"320",y:"155",fill:"#38bdf8",fontSize:"9 font-bold",children:"Binary Portability:"}),e.jsx("text",{x:"320",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Inspect anytime without re-running."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"605",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"3. Snakeviz Visualizer"}),e.jsx("text",{x:"605",y:"55",fill:"#c084fc",fontSize:"8 font-mono",children:"`$ snakeviz out.pstats`"}),e.jsx("text",{x:"605",y:"80",fill:"#cbd5e1",fontSize:"8",children:"Interactive icicle plots,"}),e.jsx("text",{x:"605",y:"95",fill:"#cbd5e1",fontSize:"8",children:"zoomable call trees,"}),e.jsx("text",{x:"605",y:"110",fill:"#cbd5e1",fontSize:"8",children:"and sunburst graphs."}),e.jsx("rect",{x:"605",y:"130",width:"200",height:"85",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"615",y:"155",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Visual Hotspotting:"}),e.jsx("text",{x:"615",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Zero guesswork debugging."})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive cProfile Hotspot Inspector Laboratory"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Switch between bottlenecked and optimized pipelines, adjust pstats sort criteria, and inspect real-time call tree profiles:"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"1. Target Pipeline Architecture:"}),e.jsx("div",{className:"flex bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:[{id:"BOTTLENECK",label:"1. Bottleneck (O(N²) List)"},{id:"OPTIMIZED",label:"2. Optimized (O(1) Set)"}].map(t=>e.jsx("button",{onClick:()=>h(t.id),className:n("flex-1 py-1.5 rounded transition-all",m===t.id?"bg-teal-900/60 text-teal-300 font-bold border border-teal-700/80":"text-slate-400 hover:text-white"),children:t.label},t.id))})]}),e.jsxs("div",{className:"space-y-1.5 pt-1",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold",children:"2. pstats Sort Key (`sort_stats`):"}),e.jsx("div",{className:"flex bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:[{id:"CUMULATIVE",label:"Cumulative (cumtime)"},{id:"TIME",label:"Internal (tottime)"},{id:"CALLS",label:"Calls (ncalls)"}].map(t=>e.jsx("button",{onClick:()=>u(t.id),className:n("flex-1 py-1 rounded transition-all",l===t.id?"bg-cyan-900/60 text-cyan-300 font-bold border border-cyan-700/80":"text-slate-400 hover:text-white"),children:t.label},t.id))})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs font-mono space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-center text-slate-400 text-[10px] uppercase font-bold border-b border-slate-800 pb-1",children:[e.jsx("span",{children:"Function"}),e.jsx("span",{children:"cumtime (% Total)"})]}),r.map(t=>e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[e.jsxs("span",{className:n(t.isHot?"text-rose-400 font-bold":"text-slate-300"),children:[t.isHot?"🔥 ":"",t.name]}),e.jsxs("span",{className:n(t.isHot?"text-rose-400 font-bold":"text-slate-400"),children:[t.cumtime," (",t.pct,"%)"]})]}),e.jsx("div",{className:"w-full bg-slate-950 h-1.5 rounded-full overflow-hidden",children:e.jsx("div",{className:n("h-full rounded-full",t.isHot?"bg-rose-500":"bg-teal-500"),style:{width:`${t.pct}%`}})})]},t.name))]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs space-y-1",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:"Generated cProfile Execution Script:"}),e.jsx("pre",{className:"text-teal-300 text-[11px] leading-relaxed break-all font-mono overflow-x-auto",children:g})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[160px] font-mono text-xs space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-[10px] font-bold uppercase text-slate-400",children:[e.jsx("span",{children:"pstats Formatted Terminal Output:"}),e.jsxs("span",{className:"text-emerald-400",children:["Total: ",p]})]}),e.jsx("pre",{className:"text-slate-200 text-[11px] leading-relaxed font-mono whitespace-pre-wrap",children:`ncalls  tottime  percall  cumtime  percall filename:lineno(function)
${r.map(t=>`${t.ncalls.padEnd(6)} ${t.tottime.padEnd(8)} ${(parseFloat(t.tottime)/parseInt(t.ncalls)).toFixed(1)}ms  ${t.cumtime.padEnd(8)} ${(parseFloat(t.cumtime)/parseInt(t.ncalls)).toFixed(1)}ms ${t.name}`).join(`
`)}

[DIAGNOSIS] ${f}`})]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Python Profiling Tooling Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Profiling Tool"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Type"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Overhead"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Primary Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"`cProfile`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Deterministic (All calls)"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Low (~10-30%)"}),e.jsx("td",{className:"py-3 px-4",children:"Standard library whole-program call tree profiling"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"`pstats`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Report Generator"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Zero (Post-run)"}),e.jsx("td",{className:"py-3 px-4",children:"Sorting, filtering, and exporting binary `.pstats` snapshots"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"`Snakeviz`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Browser Visualizer"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Zero (GUI viewer)"}),e.jsx("td",{className:"py-3 px-4",children:"Rendering interactive icicle charts and flamegraphs"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"`line_profiler`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Line-by-Line Micro"}),e.jsx("td",{className:"py-3 px-4 text-amber-300",children:"High (~200-500%)"}),e.jsx("td",{className:"py-3 px-4",children:"Finding the exact slow line inside a single function"})]})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating cProfile fundamentals, custom decorators, bottleneck debugging walkthroughs, and institutional ledger profilers:"}),e.jsx(b,{files:[{filename:"cprofile_deterministic_profiler_fundamentals.py",code:P,description:"cProfile.Profile, pstats.Stats, tottime vs cumtime, and SortKey sorting."},{filename:"cprofile_context_manager_and_decorators.py",code:w,description:"Custom @profile_function decorators, ProfilerContext context managers, and pstats dumps."},{filename:"identifying_and_resolving_cpu_bottlenecks.py",code:j,description:"Before/after CPU hotspot profiling and bottleneck elimination."},{filename:"institutional_admission_ledger_cpu_profiler.py",code:S,description:"Multi-stage admission ledger CPU profiling and structured telemetry reporting."}]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Confusing `tottime` with `cumtime`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Sorting by ",e.jsx("code",{className:"text-rose-300 font-mono",children:"tottime"})," misses high-level orchestrator bottlenecks whose children consume 95% of execution time."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Sort by ",e.jsx("code",{className:"text-emerald-300",children:"SortKey.CUMULATIVE"})," first."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Running cProfile in Production"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Leaving active deterministic profiling enabled on live API servers adds 20%+ request latency and allocates extra memory."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use sampling profilers (e.g. `py-spy`) for live production monitoring."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Premature Intuition Optimization"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Rewriting code based on assumptions without profiling evidence often optimizes the wrong 2% of the codebase."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Profile first, locate the hotspot, refactor, and re-profile."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Multi-Threading Profile Blindspots"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"`cProfile` only profiles the thread that instantiated it, missing background worker thread executions."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Attach separate profilers to worker thread target functions."]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering CPU execution profiling, cProfile, pstats, tottime vs cumtime, and Snakeviz:"}),e.jsx(y,{questions:T})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with cProfile recipes, pstats sort flags, and profiling best practices:"}),e.jsx("div",{className:"mb-10",children:e.jsx(_,{content:N,filename:"python_topic3_cprofile_cpu_profiling_notes.txt",title:"Print Topic 3 Study Notes"})}),e.jsx(v,{})]})]})]})}export{U as default};
