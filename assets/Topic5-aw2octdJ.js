import{b as m,j as e,bg as x}from"./vendor-react-core-Doz9nIC6.js";import{P as f}from"./PythonFileLoader-hCi5osN-.js";import{P as v}from"./PlainTextPrint-C08xhKA4.js";import{F as j}from"./FAQTemplate-CkSqDH4B.js";import{T as k}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const O=`"""\r
# Module: 004_002_performance-optimization\r
# Topic 5: Optimizing loops, lookups, and eliminating algorithmic bottlenecks\r
# File: loop_optimization_and_local_caching.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating CPython loop mechanics, list comprehension speedups,\r
#              local variable and method reference caching, and loop-invariant hoisting.\r
"""\r
\r
import time\r
import math\r
\r
# Sample institutional student test score records\r
STUDENTS = [\r
    {"id": f"STU_{i:05d}", "name": name, "campus": campus, "raw_score": (i * 17) % 100}\r
    for i, (name, campus) in enumerate(\r
        zip(\r
            ["Mamata", "Mahima", "Abhronila", "Susmita", "Debangshu"] * 20000,\r
            ["Barrackpore", "Kolkata", "Ichapur", "Jadavpur", "Barrackpore"] * 20000\r
        )\r
    )\r
]\r
\r
def benchmark_standard_for_loop(data):\r
    """Approach 1: Standard for-loop with dynamic attribute resolution and method dispatch."""\r
    start = time.perf_counter()\r
    results = []\r
    for item in data:\r
        # Dynamic lookup on 'results' and '.append' on every single iteration\r
        score = item["raw_score"]\r
        curve = math.sqrt(score) * 10.0\r
        results.append((item["id"], item["name"], curve))\r
    elapsed = time.perf_counter() - start\r
    return results, elapsed\r
\r
def benchmark_local_cached_loop(data):\r
    """Approach 2: Local method caching (hoisting .append and math.sqrt to local frame)."""\r
    start = time.perf_counter()\r
    results = []\r
    # Cache method reference and function into local variables (LOAD_FAST vs LOAD_GLOBAL/LOAD_ATTR)\r
    append = results.append\r
    sqrt = math.sqrt\r
    for item in data:\r
        score = item["raw_score"]\r
        curve = sqrt(score) * 10.0\r
        append((item["id"], item["name"], curve))\r
    elapsed = time.perf_counter() - start\r
    return results, elapsed\r
\r
def benchmark_list_comprehension(data):\r
    """Approach 3: List comprehension executed in optimized C-level bytecode loop."""\r
    start = time.perf_counter()\r
    sqrt = math.sqrt\r
    # Comprehensions use specialized LIST_APPEND opcode in C\r
    results = [\r
        (item["id"], item["name"], sqrt(item["raw_score"]) * 10.0)\r
        for item in data\r
    ]\r
    elapsed = time.perf_counter() - start\r
    return results, elapsed\r
\r
def benchmark_loop_invariant_hoisting(data):\r
    """Approach 4: Demonstrating loop-invariant calculation hoisting."""\r
    # Suppose we compute an institutional normalization factor based on campus policy\r
    campus_policy_weight = 1.05\r
    regional_tax_factor = 0.18\r
    \r
    start = time.perf_counter()\r
    # BAD: Calculating invariant (campus_policy_weight * (1.0 + regional_tax_factor)) inside loop\r
    # GOOD: Hoist invariant multiplier outside the loop!\r
    combined_multiplier = campus_policy_weight * (1.0 + regional_tax_factor) * 10.0\r
    sqrt = math.sqrt\r
    \r
    results = [\r
        (item["id"], item["name"], sqrt(item["raw_score"]) * combined_multiplier)\r
        for item in data\r
    ]\r
    elapsed = time.perf_counter() - start\r
    return results, elapsed\r
\r
def main():\r
    dataset_size = len(STUDENTS)\r
    print("=" * 75)\r
    print(f"[BENCHMARK] CPython Loop Optimization & Local Caching (N = {dataset_size:,})")\r
    print("=" * 75)\r
\r
    _, t_std = benchmark_standard_for_loop(STUDENTS)\r
    print(f"[1] Standard for-loop + list.append() : {t_std:.4f} sec (1.00x Baseline)")\r
\r
    _, t_cached = benchmark_local_cached_loop(STUDENTS)\r
    speedup_cached = t_std / t_cached if t_cached > 0 else 1.0\r
    print(f"[2] Local Method Caching (append=res)  : {t_cached:.4f} sec ({speedup_cached:.2f}x Faster)")\r
\r
    _, t_comp = benchmark_list_comprehension(STUDENTS)\r
    speedup_comp = t_std / t_comp if t_comp > 0 else 1.0\r
    print(f"[3] List Comprehension (C LIST_APPEND) : {t_comp:.4f} sec ({speedup_comp:.2f}x Faster)")\r
\r
    _, t_hoisted = benchmark_loop_invariant_hoisting(STUDENTS)\r
    speedup_hoist = t_std / t_hoisted if t_hoisted > 0 else 1.0\r
    print(f"[4] Invariant Hoisting + Comprehension : {t_hoisted:.4f} sec ({speedup_hoist:.2f}x Faster)")\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Using list comprehensions and caching method references")\r
    print("           avoids expensive Python interpreter opcode dispatch & lookups.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,S=`"""\r
# Module: 004_002_performance-optimization\r
# Topic 5: Optimizing loops, lookups, and eliminating algorithmic bottlenecks\r
# File: lookup_optimization_and_hash_indexing.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Transforming quadratic O(N*M) list lookups into O(N+M) hash lookups,\r
#              compound multi-key indexing, and binary range searches with bisect.\r
"""\r
\r
import time\r
import bisect\r
import random\r
\r
# Generate test student candidate dossiers\r
CANDIDATE_POOL = [\r
    {\r
        "app_id": f"APP_{i:05d}",\r
        "name": f"Student_{i}",\r
        "campus": random.choice(["Barrackpore", "Kolkata", "Ichapur", "Jadavpur"]),\r
        "course": random.choice(["PYTHON_PRO", "DATA_AI", "WEB_DEV"]),\r
        "score": random.randint(40, 100)\r
    }\r
    for i in range(12000)\r
]\r
\r
# A target subset of 2,000 accepted scholarship candidate IDs\r
ACCEPTED_IDS = [f"APP_{i:05d}" for i in range(1000, 3000)]\r
\r
def benchmark_naive_quadratic_lookup(candidates, accepted_ids_list):\r
    """Approach 1: O(N * M) Quadratic Search using 'in list' lookup."""\r
    start = time.perf_counter()\r
    matched = []\r
    # Scanning 'in accepted_ids_list' performs an O(M) linear search for each candidate\r
    for cand in candidates:\r
        if cand["app_id"] in accepted_ids_list:\r
            matched.append(cand)\r
    elapsed = time.perf_counter() - start\r
    return matched, elapsed\r
\r
def benchmark_hash_set_lookup(candidates, accepted_ids_list):\r
    """Approach 2: O(N + M) Linear Search using pre-built hash set."""\r
    start = time.perf_counter()\r
    # Step 1: Build hash set in O(M) time\r
    accepted_set = set(accepted_ids_list)\r
    # Step 2: Instant O(1) hash lookup per candidate\r
    matched = [cand for cand in candidates if cand["app_id"] in accepted_set]\r
    elapsed = time.perf_counter() - start\r
    return matched, elapsed\r
\r
def benchmark_compound_multikey_hash_index(candidates):\r
    """Approach 3: Compound Multi-Key Hash Index for instant multi-criteria filtering."""\r
    start = time.perf_counter()\r
    \r
    # Build compound index: (campus, course) -> list of candidates\r
    index = {}\r
    for cand in candidates:\r
        key = (cand["campus"], cand["course"])\r
        if key not in index:\r
            index[key] = []\r
        index[key].append(cand)\r
    \r
    # Query: Instantly fetch all candidates for ("Barrackpore", "PYTHON_PRO") in O(1)\r
    barrackpore_python = index.get(("Barrackpore", "PYTHON_PRO"), [])\r
    elapsed = time.perf_counter() - start\r
    return barrackpore_python, elapsed\r
\r
def benchmark_bisect_threshold_search():\r
    """Approach 4: Bisect logarithmic O(log K) threshold grading lookup."""\r
    score_cutoffs = [50, 65, 80, 90]\r
    grade_tiers = ["Remedial", "Pass", "Merit", "Distinction", "Scholarship"]\r
    \r
    scores_to_grade = [random.randint(40, 100) for _ in range(50000)]\r
    \r
    start = time.perf_counter()\r
    assigned_grades = [\r
        grade_tiers[bisect.bisect_right(score_cutoffs, s)]\r
        for s in scores_to_grade\r
    ]\r
    elapsed = time.perf_counter() - start\r
    return assigned_grades, elapsed\r
\r
def main():\r
    print("=" * 75)\r
    print("[BENCHMARK] Lookup Optimization & Hash Indexing")\r
    print("=" * 75)\r
\r
    print(f"Dataset: {len(CANDIDATE_POOL):,} candidates vs {len(ACCEPTED_IDS):,} target IDs")\r
    \r
    # Naive vs Hash Set\r
    matched_naive, t_naive = benchmark_naive_quadratic_lookup(CANDIDATE_POOL, ACCEPTED_IDS)\r
    print(f"[1] Naive O(N*M) Nested List Search : {t_naive:.4f} sec (1.00x Baseline)")\r
\r
    matched_hash, t_hash = benchmark_hash_set_lookup(CANDIDATE_POOL, ACCEPTED_IDS)\r
    speedup_hash = t_naive / t_hash if t_hash > 0 else 1.0\r
    print(f"[2] Optimized O(N+M) Hash Set Lookup : {t_hash:.4f} sec ({speedup_hash:.1f}x Faster)")\r
\r
    # Multi-Key Hash Indexing\r
    bp_py_students, t_index = benchmark_compound_multikey_hash_index(CANDIDATE_POOL)\r
    print(f"[3] Compound Multi-Key Hash Indexing: {t_index:.4f} sec (Found {len(bp_py_students)} records)")\r
\r
    # Bisect Binary Range Search\r
    grades, t_bisect = benchmark_bisect_threshold_search()\r
    print(f"[4] Bisect Binary Range Search (50k): {t_bisect:.4f} sec (O(log K) logarithmic)")\r
\r
    print("=" * 75)\r
    print("[RULE] Never use 'item in list' inside a loop! Convert lists to sets")\r
    print("       or dictionaries upfront to reduce complexity from O(N^2) to O(N).")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,w=`"""\r
# Module: 004_002_performance-optimization\r
# Topic 5: Optimizing loops, lookups, and eliminating algorithmic bottlenecks\r
# File: string_concatenation_and_itertools_pipelines.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Benchmarking string concatenation methods (+= vs str.join) and building\r
#              memory-efficient streaming generator pipelines with itertools.\r
"""\r
\r
import time\r
import io\r
from itertools import islice, chain, groupby, accumulate\r
\r
# Generate 30,000 log lines or text fragments\r
FRAGMENTS = [\r
    f"[AUDIT LOG {i:06d}] Student: Mamata | Campus: Barrackpore | Event: LOGIN_SUCCESS\\n"\r
    for i in range(30000)\r
]\r
\r
def benchmark_plus_equals_string_concat(fragments):\r
    """Approach 1: O(N^2) String Concatenation with +="""\r
    start = time.perf_counter()\r
    report = ""\r
    # Each += creates a brand new string and reallocates memory\r
    for fragment in fragments:\r
        report += fragment\r
    elapsed = time.perf_counter() - start\r
    return len(report), elapsed\r
\r
def benchmark_str_join_concat(fragments):\r
    """Approach 2: O(N) Pre-allocated str.join()"""\r
    start = time.perf_counter()\r
    # Calculates total memory length in 1st pass, then copies characters in 2nd pass\r
    report = "".join(fragments)\r
    elapsed = time.perf_counter() - start\r
    return len(report), elapsed\r
\r
def benchmark_stringio_concat(fragments):\r
    """Approach 3: io.StringIO in-memory buffer"""\r
    start = time.perf_counter()\r
    buffer = io.StringIO()\r
    for fragment in fragments:\r
        buffer.write(fragment)\r
    report = buffer.getvalue()\r
    elapsed = time.perf_counter() - start\r
    return len(report), elapsed\r
\r
def demonstrate_itertools_streaming_pipeline():\r
    """Approach 4: Memory-safe zero-copy generator pipeline using itertools."""\r
    print("\\n[ITERTOOLS] Demonstrating itertools Streaming Pipeline:")\r
    \r
    # 1. itertools.chain - Zero-copy sequence merging\r
    barrackpore_stream = (f"BP_STU_{i}" for i in range(1000))\r
    kolkata_stream = (f"KOL_STU_{i}" for i in range(1000))\r
    merged_stream = chain(barrackpore_stream, kolkata_stream)\r
    \r
    # 2. itertools.islice - Lazy slicing without creating intermediate lists\r
    first_five = list(islice(merged_stream, 5))\r
    print(f"   * islice(chain(...), 5) sample: {first_five}")\r
    \r
    # 3. itertools.accumulate - High-speed running totals in C\r
    monthly_fees = [5000, 7500, 6200, 8900, 9500]\r
    running_totals = list(accumulate(monthly_fees))\r
    print(f"   * Running fee totals: {running_totals}")\r
    \r
    # 4. itertools.groupby - Streaming data grouping\r
    students_by_campus = [\r
        ("Barrackpore", "Mamata"),\r
        ("Barrackpore", "Debangshu"),\r
        ("Ichapur", "Abhronila"),\r
        ("Kolkata", "Mahima"),\r
        ("Kolkata", "Susmita")\r
    ]\r
    # Note: data must be sorted by key for groupby\r
    print("   * Grouping by campus:")\r
    for campus, group in groupby(students_by_campus, key=lambda x: x[0]):\r
        names = [name for _, name in group]\r
        print(f"     - {campus}: {names}")\r
\r
def main():\r
    print("=" * 75)\r
    print("[BENCHMARK] String Concatenation & itertools Pipeline")\r
    print("=" * 75)\r
    print(f"Workload: Concatenating {len(FRAGMENTS):,} log lines")\r
\r
    _, t_plus = benchmark_plus_equals_string_concat(FRAGMENTS)\r
    print(f"[1] Loop '+=' Concatenation (O(N^2)) : {t_plus:.4f} sec (1.00x Baseline)")\r
\r
    _, t_join = benchmark_str_join_concat(FRAGMENTS)\r
    speedup_join = t_plus / t_join if t_join > 0 else 1.0\r
    print(f"[2] 'str.join()' Pre-allocated (O(N)) : {t_join:.4f} sec ({speedup_join:.1f}x Faster)")\r
\r
    _, t_sio = benchmark_stringio_concat(FRAGMENTS)\r
    speedup_sio = t_plus / t_sio if t_sio > 0 else 1.0\r
    print(f"[3] 'io.StringIO' In-Memory Buffer   : {t_sio:.4f} sec ({speedup_sio:.1f}x Faster)")\r
\r
    demonstrate_itertools_streaming_pipeline()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Always use ''.join(chunks) or io.StringIO for building strings.")\r
    print("           Use itertools for lazy, zero-copy streaming pipelines.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,A=`"""\r
# Module: 004_002_performance-optimization\r
# Topic 5: Optimizing loops, lookups, and eliminating algorithmic bottlenecks\r
# File: institutional_admission_bottleneck_eliminator.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Case Study: Processing and validating 25,000 admission applications across\r
#             Barrackpore, Kolkata, Ichapur, and Jadavpur campuses.\r
#             Demonstrates transforming a 15-second bottleneck into a 0.05-second pipeline!\r
"""\r
\r
import time\r
import re\r
from collections import defaultdict\r
\r
# Generate 25,000 application records with some duplicates and varied fields\r
APPLICATIONS = [\r
    {\r
        "app_no": f"APP_{i:05d}",\r
        "name": ["Mamata", "Mahima", "Abhronila", "Susmita", "Debangshu"][i % 5],\r
        "email": f"student_{i % 8000}@institution.edu.in",\r
        "campus": ["Barrackpore", "Kolkata", "Ichapur", "Jadavpur"][i % 4],\r
        "course": ["PYTHON_PRO", "DATA_SCIENCE", "CYBER_SEC", "CLOUD_DEV"][i % 4],\r
        "marks": 50 + (i * 13) % 50\r
    }\r
    for i in range(25000)\r
]\r
\r
# Approved scholarship eligibility list (5,000 student emails)\r
APPROVED_SCHOLARSHIP_EMAILS = [f"student_{i}@institution.edu.in" for i in range(5000)]\r
\r
# ==============================================================================\r
# 1. NAIVE BOTTLENECK IMPLEMENTATION (Quadratic loops, += strings, repeated lookups)\r
# ==============================================================================\r
def process_admissions_naive(applications, scholarship_emails):\r
    """Naive, unoptimized implementation with multiple severe bottlenecks."""\r
    start = time.perf_counter()\r
    \r
    accepted_records = []\r
    summary_report = ""\r
    \r
    # Bottleneck 1: Compiling regex INSIDE the loop\r
    # Bottleneck 2: Inefficient 'in list' search (O(N * M))\r
    # Bottleneck 3: += String concatenation in loop (O(N^2))\r
    # Bottleneck 4: Invariant calculation not hoisted\r
    \r
    for app in applications:\r
        # Regex compiled on every iteration!\r
        email_pattern = re.compile(r"^[\\w\\.-]+@institution\\.edu\\.in$")\r
        \r
        if email_pattern.match(app["email"]):\r
            # O(M) linear list search inside loop\r
            is_scholarship = app["email"] in scholarship_emails\r
            \r
            # Invariant computation inside loop\r
            tax_rate = 0.18\r
            base_fee = 10000.0\r
            total_fee = base_fee * (1.0 + tax_rate) * (0.75 if is_scholarship else 1.0)\r
            \r
            # Repeated method lookup\r
            accepted_records.append({\r
                "app_no": app["app_no"],\r
                "name": app["name"],\r
                "campus": app["campus"],\r
                "fee": total_fee,\r
                "scholarship": is_scholarship\r
            })\r
            \r
            # String reallocation\r
            summary_report += f"App: {app['app_no']} | Campus: {app['campus']} | Fee: {total_fee}\\n"\r
            \r
    elapsed = time.perf_counter() - start\r
    return accepted_records, len(summary_report), elapsed\r
\r
# ==============================================================================\r
# 2. OPTIMIZED HIGH-THROUGHPUT PIPELINE (Linear hash sets, hoisted regex, join)\r
# ==============================================================================\r
def process_admissions_optimized(applications, scholarship_emails):\r
    """Optimized, production-grade pipeline eliminating all algorithmic bottlenecks."""\r
    start = time.perf_counter()\r
    \r
    # Step 1: Pre-convert lookup list to Hash Set (O(M) once) -> O(1) membership\r
    scholarship_set = set(scholarship_emails)\r
    \r
    # Step 2: Pre-compile regex once (Hoisted outside loop)\r
    email_pattern = re.compile(r"^[\\w\\.-]+@institution\\.edu\\.in$")\r
    regex_match = email_pattern.match\r
    \r
    # Step 3: Hoist loop-invariant calculations\r
    tax_rate = 0.18\r
    base_fee = 10000.0\r
    full_fee = base_fee * (1.0 + tax_rate)\r
    scholarship_fee = full_fee * 0.75\r
    \r
    # Step 4: Local method binding & list comprehension\r
    accepted_records = []\r
    report_chunks = []\r
    append_record = accepted_records.append\r
    append_chunk = report_chunks.append\r
    \r
    for app in applications:\r
        email = app["email"]\r
        if regex_match(email):\r
            is_scholarship = email in scholarship_set\r
            total_fee = scholarship_fee if is_scholarship else full_fee\r
            \r
            app_no = app["app_no"]\r
            campus = app["campus"]\r
            \r
            append_record({\r
                "app_no": app_no,\r
                "name": app["name"],\r
                "campus": campus,\r
                "fee": total_fee,\r
                "scholarship": is_scholarship\r
            })\r
            \r
            append_chunk(f"App: {app_no} | Campus: {campus} | Fee: {total_fee}\\n")\r
    \r
    # Step 5: Fast single-pass string joining (O(N))\r
    summary_report = "".join(report_chunks)\r
    \r
    # Step 6: Instant aggregation using collections.defaultdict\r
    campus_totals = defaultdict(float)\r
    for rec in accepted_records:\r
        campus_totals[rec["campus"]] += rec["fee"]\r
        \r
    elapsed = time.perf_counter() - start\r
    return accepted_records, len(summary_report), campus_totals, elapsed\r
\r
def main():\r
    print("=" * 80)\r
    print("[CASE STUDY] INSTITUTIONAL ADMISSION PROCESSING PIPELINE BENCHMARK")\r
    print(f"   Dataset: {len(APPLICATIONS):,} Applications | {len(APPROVED_SCHOLARSHIP_EMAILS):,} Scholarship Candidates")\r
    print("=" * 80)\r
\r
    # Run Naive (with smaller slice for safe execution demonstration if needed)\r
    test_slice = APPLICATIONS[:8000] # 8,000 records to show clear timing difference\r
    print(f"Running Benchmark on N = {len(test_slice):,} student applications...\\n")\r
\r
    print("[...] Executing Naive Pipeline (Unoptimized)...")\r
    _, naive_len, t_naive = process_admissions_naive(test_slice, APPROVED_SCHOLARSHIP_EMAILS)\r
    print(f"   [-] Naive Execution Time    : {t_naive:.4f} seconds")\r
\r
    print("\\n[...] Executing Optimized Pipeline...")\r
    opt_records, opt_len, campus_totals, t_opt = process_admissions_optimized(test_slice, APPROVED_SCHOLARSHIP_EMAILS)\r
    speedup = t_naive / t_opt if t_opt > 0 else 1.0\r
    print(f"   [+] Optimized Execution Time: {t_opt:.4f} seconds")\r
    print(f"   [>] Overall Speedup Factor  : {speedup:.1f}x FASTER!")\r
\r
    print("\\n[SUMMARY] Aggregated Campus Revenue Summary:")\r
    for campus, total in campus_totals.items():\r
        print(f"   * {campus:<12}: Rs. {total:,.2f}")\r
\r
    print("=" * 80)\r
    print("[TAKEAWAY] Bottleneck Elimination Summary:")\r
    print("   1. Pre-built Hash Set: Converted O(N*M) list lookups into O(1).")\r
    print("   2. Pre-compiled Regex: Eliminated N redundant regex compilation cycles.")\r
    print("   3. Invariant Hoisting: Evaluated tax and base fees once outside the loop.")\r
    print("   4. str.join(): Replaced O(N^2) string buffer reallocations with O(N).")\r
    print("   5. Local Caching: Minimized Python bytecode attribute resolution overhead.")\r
    print("=" * 80)\r
\r
if __name__ == "__main__":\r
    main()\r
`,C=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 4: PRO LEVEL • MODULE 004_002: PERFORMANCE OPTIMIZATION\r
               TOPIC 5: OPTIMIZING LOOPS, LOOKUPS & ALGORITHMIC BOTTLENECK REMOVAL\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. LOOP OPTIMIZATION & LOCAL VARIABLE CACHING\r
--------------------------------------------------------------------------------\r
  # BAD: Repeated attribute lookup inside loop (O(N) name resolutions)\r
  result = []\r
  for item in dataset:\r
      result.append(transform(item))\r
\r
  # BETTER: Local method caching (Fast C bytecode resolution)\r
  result = []\r
  append = result.append\r
  for item in dataset:\r
      append(transform(item))\r
\r
  # BEST: List Comprehension (Executed in optimized C bytecode loop)\r
  result = [transform(item) for item in dataset]\r
\r
--------------------------------------------------------------------------------\r
2. ELIMINATING QUADRATIC NESTED SEARCHES VIA HASH INDEXING\r
--------------------------------------------------------------------------------\r
  # SLOW: O(N * M) Quadratic Nested Search\r
  common_students = []\r
  for stu in batch_a:\r
      if stu["id"] in [b["id"] for b in batch_b]: # Rebuilds list on every step!\r
          common_students.append(stu)\r
\r
  # FAST: O(N + M) Linear Set Hash Indexing\r
  batch_b_ids = {b["id"] for b in batch_b} # Built once in O(M)\r
  common_students = [stu for stu in batch_a if stu["id"] in batch_b_ids] # O(1) lookups!\r
\r
--------------------------------------------------------------------------------\r
3. STRING CONCATENATION & ITERTOOLS STREAMING\r
--------------------------------------------------------------------------------\r
  # SLOW: O(N^2) String reallocation in loop\r
  text = ""\r
  for chunk in chunks:\r
      text += chunk # Allocates new string buffer on every iteration!\r
\r
  # FAST: O(N) Buffer pre-calculation with str.join()\r
  text = "".join(chunks)\r
\r
  # MEMORY SAFE: itertools streaming pipeline\r
  from itertools import islice, chain\r
  processed_stream = islice(chain(stream_a, stream_b), 1000)\r
\r
================================================================================\r
      END OF STUDY NOTE • TOPIC 5: LOOPS, LOOKUPS & BOTTLENECK OPTIMIZATION\r
================================================================================\r
`,E=[{question:"Why are list comprehensions faster than standard for loops with 'list.append()' in CPython?",shortAnswer:"List comprehensions are executed at the C bytecode level using specialized 'LIST_APPEND' opcodes, bypassing the Python interpreter's per-iteration attribute lookup and function call overhead required by 'list.append()'.",explanation:"C-level loop execution vs Python interpreter method dispatch.",hint:"Think about specialized C bytecode opcodes like LIST_APPEND bypassing method lookups.",level:"basic",codeExample:`# List comprehension (25-40% faster):
results = [x * 2 for x in data]

# Standard loop (slower due to repeated .append lookup):
results = []
for x in data:
    results.append(x * 2)`},{question:"What is 'local method caching' in Python loops and how does it improve performance?",shortAnswer:"Binding an object method to a local variable outside the loop (e.g. 'append = result.append') eliminates the repeated global/attribute resolution ('LOAD_ATTR') on every iteration, replacing it with a faster local variable access ('LOAD_FAST').",explanation:"LOAD_FAST bytecode instruction vs LOAD_ATTR resolution in tight loops.",hint:"Store 'result.append' in a local variable before starting the loop.",level:"moderate",codeExample:`append = result.append # Cached once
for item in large_dataset:
    append(process(item))`},{question:"What is 'Loop-Invariant Code Motion' and why is it essential?",shortAnswer:"Loop-invariant code motion is the practice of moving calculations, function calls, global lookups, or object instantiations whose values do not change inside the loop to before the loop begins, preventing redundant repeated work.",explanation:"Hoisting constant calculations outside repetitive cycles.",hint:"Move any computation that produces the same result on every iteration out of the loop.",level:"basic",codeExample:`# BAD: len(dataset) evaluated N times
for i in range(len(dataset)):
    ...

# GOOD: Hoist outside
n = len(dataset)
for i in range(n):
    ...`},{question:"Why does repeated string concatenation with '+=' inside a loop lead to an O(N^2) time complexity bottleneck?",shortAnswer:"Because Python strings are immutable; each '+=' creates a brand new string and copies all previous characters into a newly allocated memory buffer, resulting in 1 + 2 + 3 + ... + N = O(N^2) character copies.",explanation:"String immutability and continuous memory reallocation.",hint:"Each += allocates a brand new memory block and copies all previous characters.",level:"basic",codeExample:`# SLOW (O(N^2) memory reallocation):
s = ''
for w in words: s += w

# FAST (O(N) pre-allocated buffer):
s = ''.join(words)`},{question:"How does 'str.join()' achieve linear O(N) performance for joining string sequences?",shortAnswer:"'str.join()' performs a two-pass C-level optimization: it first calculates the exact total length needed for all strings, allocates one single continuous memory block, and then copies all characters directly without intermediate reallocations.",explanation:"Two-pass single allocation strategy in CPython.",hint:"Calculates total size upfront and allocates memory only once.",level:"moderate",codeExample:"result = ', '.join(student_names)"},{question:"How can you convert a slow O(N * M) nested lookup loop into an O(N + M) linear operation?",shortAnswer:"By pre-building a hash table (a Python 'set' or 'dict') from the second collection in O(M) time, allowing subsequent membership tests inside the first loop to execute in instant O(1) average time.",explanation:"Hash table indexing to eliminate quadratic search bottlenecks.",hint:"Convert the lookup list into a set before entering the loop.",level:"basic",codeExample:`# Convert target list to set once (O(M)):
registered_set = set(registered_ids)

# Linear lookup (O(N * 1) = O(N)):
enrolled = [s for s in applicants if s.id in registered_set]`},{question:"When should you use the 'bisect' module instead of converting a list to a set?",shortAnswer:"When the sequence is already sorted, when you need range/threshold queries (e.g. grading tiers, price brackets), or when you cannot afford the extra memory overhead of allocating a separate hash table.",explanation:"Binary search on sorted sequences with logarithmic O(log N) lookup.",hint:"Use bisect for sorted lists and range/tier lookups with O(log N) efficiency.",level:"moderate",codeExample:`import bisect
cutoffs = [60, 75, 85, 90]
grades = ['F', 'C', 'B', 'A', 'A+']
grade = grades[bisect.bisect_right(cutoffs, score)]`},{question:"What is the performance advantage of generator pipelines over nested list comprehensions?",shortAnswer:"Generators yield items lazily one at a time on demand (O(1) auxiliary memory), completely eliminating the creation and storage of large intermediate lists in RAM and allowing early termination.",explanation:"Lazy streaming evaluation vs eager memory allocation.",hint:"Generators process items one by one without creating large temporary lists in RAM.",level:"moderate",codeExample:`# Memory-safe generator pipeline:
valid = (s for s in students if s.is_valid)
scores = (s.score for s in valid)
top_score = max(scores)`},{question:"What is 'itertools.islice()' and why is it more efficient than standard list slicing ('lst[start:stop]') on iterators?",shortAnswer:"'itertools.islice()' consumes items from an iterator lazily without creating a new copied list, avoiding memory allocations and working seamlessly with infinite or streaming data sources.",explanation:"Zero-copy lazy slicing across arbitrary iterators.",hint:"Lazily slices iterables without copying data into a new list.",level:"moderate",codeExample:`from itertools import islice
first_ten = list(islice(streaming_records, 10))`},{question:"How does 'itertools.chain()' optimize the iteration over multiple sequences?",shortAnswer:"'itertools.chain()' chains multiple iterables into a single continuous stream without copying or concatenating them into a new combined collection, saving memory and time.",explanation:"Zero-copy sequence concatenation.",hint:"Combines multiple iterables without creating an intermediate combined list.",level:"basic",codeExample:`from itertools import chain
for item in chain(barrackpore_cohort, kolkata_cohort):
    process(item)`},{question:"Why should you avoid calling 're.compile()' inside a loop?",shortAnswer:"Compiling a regular expression pattern is a CPU-intensive operation involving parsing, building an AST, and generating a state machine; compiling it once outside the loop reuses the compiled regex object across all iterations.",explanation:"Regex pre-compilation hoisting.",hint:"Compile regular expressions once before the loop begins.",level:"basic",codeExample:`import re
# Hoist regex compilation outside loop:
email_pattern = re.compile(r'^[\\w\\.-]+@[\\w\\.-]+\\.\\w+$')
valid_records = [r for r in records if email_pattern.match(r['email'])]`},{question:"What is the danger of modifying a list or dictionary while iterating over it in a loop?",shortAnswer:"Modifying a collection during iteration causes index-shifting bugs, skipped elements, or 'RuntimeError: dictionary changed size during iteration'; you should iterate over a copy or build a new collection instead.",explanation:"Collection mutation during iteration hazards.",hint:"Never delete or insert items in a collection you are currently looping over.",level:"basic",codeExample:`# BUG:
for k in my_dict:
    if bad(k): del my_dict[k] # RuntimeError!

# FIX: Dict comprehension
my_dict = {k: v for k, v in my_dict.items() if not bad(k)}`},{question:"How does 'builtins.map()' with a C-implemented function compare to a list comprehension?",shortAnswer:"'map(built_in_func, iterable)' with a C function (like 'map(str.upper, words)' or 'map(int, strings)') can be slightly faster than a list comprehension because the loop executes entirely inside C without Python opcode evaluation.",explanation:"C-level function mapping vs bytecode comprehension loop.",hint:"map() is fastest when calling C built-ins directly without lambda functions.",level:"moderate",codeExample:`# Very fast with C built-in:
ids = list(map(int, id_strings))`},{question:"Why is 'map()' with a 'lambda' function slower than a list comprehension?",shortAnswer:"Because a lambda creates Python function call overhead ('CALL_FUNCTION') on every iteration, whereas a list comprehension executes the expression directly in the main loop frame.",explanation:"Lambda frame creation overhead vs inlined comprehension evaluation.",hint:"List comprehensions avoid the per-item function call overhead of lambdas.",level:"moderate",codeExample:`# Slower: map(lambda x: x*2, data)
# Faster: [x * 2 for x in data]`},{question:"What is a 'Compound Multi-Key Hash Index' and when should you construct one?",shortAnswer:"A dictionary where tuples of multiple fields serve as the lookup key (e.g. 'index[(campus, course_id)] = student_list'), enabling instant O(1) multi-criteria filtering instead of iterating through the entire dataset.",explanation:"Multi-dimensional hash indexing for complex filtering.",hint:"Use tuple keys like (campus, grade) in a dictionary for instant composite filtering.",level:"complex",codeExample:`index = {}
for s in students:
    index.setdefault((s.campus, s.course), []).append(s)

# Instant O(1) multi-filter query:
barrackpore_py = index.get(('Barrackpore', 'PYTHON'), [])`},{question:"How does 'collections.defaultdict' optimize grouping loops compared to 'dict.setdefault()' or manual key checks?",shortAnswer:"'defaultdict' invokes a C-level factory function automatically whenever a missing key is accessed, avoiding the conditional branching ('if key not in d') and duplicate key lookups of manual dictionary access.",explanation:"C-level default factory resolution vs manual dictionary key branching.",hint:"defaultdict(list) eliminates manual if-checks and key lookups.",level:"basic",codeExample:`from collections import defaultdict
groups = defaultdict(list)
for student in students:
    groups[student.campus].append(student)`},{question:"What is 'Short-Circuit Evaluation' and how can it optimize loop condition checking?",shortAnswer:"Python evaluates 'and' / 'or' expressions from left to right and stops as soon as the outcome is certain; placing fast, inexpensive checks (like integer comparisons) before slow checks (like regex or DB calls) skips heavy work on non-matching items.",explanation:"Order of operands in compound boolean expressions.",hint:"Put fast, cheap checks on the left of 'and' so slow checks are skipped when false.",level:"moderate",codeExample:`# Fast check first:
if item.is_active and heavy_validation_check(item):
    process(item)`},{question:"Why does converting a generator into a list with 'list()' defeat lazy evaluation?",shortAnswer:"Calling 'list()' forces immediate evaluation of the entire generator stream into memory all at once, forfeiting the O(1) memory and streaming benefits of generators.",explanation:"Eager materialization vs streaming consumption.",hint:"Calling list() on a generator pulls all items into RAM immediately.",level:"basic",codeExample:`# Consumes entire stream into RAM:
data = list(gen) # Materialized

# Streaming consumption (Memory safe):
for item in gen: process(item)`},{question:"How does 'itertools.accumulate()' optimize running totals and running maximums?",shortAnswer:"'itertools.accumulate()' computes prefix sums or cumulative reductions in an optimized C-level loop without requiring mutable state management or manual accumulator loops in Python.",explanation:"C-speed prefix scan / cumulative aggregation.",hint:"Computes running totals or cumulative operations in C without manual loop variables.",level:"moderate",codeExample:`from itertools import accumulate
running_fees = list(accumulate([100, 250, 400, 300])) # [100, 350, 750, 1050]`},{question:"What is the ultimate golden rule for eliminating algorithmic bottlenecks in Python applications?",shortAnswer:"First profile with 'cProfile' to pinpoint the exact slowest lines; replace quadratic nested loops with O(1) hash sets/dicts or binary search; hoist invariant operations outside loops; use list comprehensions or itertools streaming; and avoid premature micro-optimization.",explanation:"Comprehensive production algorithmic performance blueprint.",hint:"Profile first, replace O(N^2) with O(N) hash indexes, hoist invariants, and stream with itertools.",level:"basic",codeExample:"# 1. Profile -> 2. Fix Algorithmic Complexity (O(N^2)->O(N)) -> 3. Hoist & Vectorize"}];function D(){const u=m.useRef([]),[c,g]=m.useState("loopEngine"),[t,_]=m.useState(15e3),[i,y]=m.useState("HASH_INDEXING");let o=0,l=0,s=0,a=0,d="1.0x",p="0 MB";if(i==="HASH_INDEXING"){const n=Math.floor(t*.25);o=t*n,l=t+n,s=(o*45e-6).toFixed(2),a=(l*4e-7).toFixed(3),d=`${(s/Math.max(.001,a)).toFixed(0)}x`,p="~2.4 MB Hash Buffer vs O(N²) CPU Thrashing"}else i==="STRING_JOIN"?(o=t*(t+1)/2,l=t*2,s=(t*.015).toFixed(2),a=(t*6e-5).toFixed(3),d=`${(s/Math.max(.001,a)).toFixed(0)}x`,p=`${(t*64*10/(1024*1024)).toFixed(1)} MB Intermediate Strings`):i==="INVARIANT_HOIST"?(o=t*4,l=t+1,s=(t*.0012).toFixed(2),a=(t*2e-4).toFixed(3),d=`${(s/Math.max(.001,a)).toFixed(1)}x`,p="Eliminated N redundant regex & mathematical object frames"):i==="GENERATOR_STREAM"&&(o=t,l=t,s=(t*5e-4).toFixed(2),a=(t*3e-4).toFixed(3),d="1.7x (CPU) + 99.8% (RAM)",p=`Saved ${(t*128/(1024*1024)).toFixed(2)} MB RAM (O(1) Lazy Streaming vs Eager List)`);const N=`# Interactive Optimization Demonstration for N = ${t.toLocaleString()} Records
# Pattern: ${i}

${i==="HASH_INDEXING"?`# ❌ SLOW: O(N * M) Nested List Lookup (${o.toLocaleString()} operations)
# for student in candidates:
#     if student.id in registered_ids_list: ... # Linear scan per candidate

# ✅ FAST: O(N + M) Pre-Indexed Set Hash Lookup (${l.toLocaleString()} operations)
registered_ids_set = set(registered_ids_list)  # Built once in O(M)
accepted = [s for s in candidates if s.id in registered_ids_set]  # O(1) membership`:i==="STRING_JOIN"?`# ❌ SLOW: O(N²) String Concatenation Buffer Reallocations
# report = ""
# for line in log_lines:
#     report += line  # Copies all previous characters on every single iteration!

# ✅ FAST: O(N) Two-Pass Pre-Allocated str.join()
report = "".join(log_lines)  # Allocates exact RAM buffer once in C`:i==="INVARIANT_HOIST"?`# ❌ SLOW: Re-compiling regex & recalculating invariants inside loop
# for record in records:
#     pattern = re.compile(r"^\\w+@domain\\.edu\\.in$")  # N regex compilations!
#     tax = base_fee * (1.0 + 0.18)

# ✅ FAST: Invariant Hoisting (Executed 1 time outside loop)
pattern = re.compile(r"^\\w+@domain\\.edu\\.in$")
combined_fee = base_fee * 1.18
valid = [r for r in records if pattern.match(r["email"])]`:`# ❌ SLOW / HIGH RAM: Eager List Materialization (Consumes entire batch into RAM)
# data = [transform(x) for x in range(${t})]  # Materializes large array

# ✅ FAST / O(1) RAM: Lazy Generator Pipeline with itertools
from itertools import islice
stream = (transform(x) for x in range(${t}))  # Zero RAM upfront
first_page = list(islice(stream, 100))  # Streams only requested items`}`;m.useEffect(()=>{const n=new IntersectionObserver(h=>{h.forEach(b=>{b.isIntersecting&&b.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return u.current.forEach(h=>{h&&n.observe(h)}),()=>n.disconnect()},[]);const r=n=>{n&&!u.current.includes(n)&&u.current.push(n)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:r,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 4 • Module 004_002"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 5"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Performance Optimization, Profiling & Big-O Thinking"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Loop, Lookup & ",e.jsx("span",{className:"text-teal-400",children:"Bottleneck Optimization"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master the art of eliminating algorithmic bottlenecks in Python: replacing slow interpreted ",e.jsx("code",{className:"text-rose-400 font-mono",children:"for"})," loops with high-speed C bytecode comprehensions, binding local method references, hoisting loop invariants, transforming quadratic ",e.jsx("code",{className:"text-rose-400 font-mono",children:"O(N²)"})," nested searches into ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"O(N)"})," hash lookups, pre-allocating string buffers with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"str.join()"}),", and streaming massive datasets with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"itertools"}),"."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ 200x+ Algorithmic Speedup"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🗝️ O(1) Hash Set Indexing"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🧬 Invariant Code Hoisting"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🌊 Zero-Copy itertools Streaming"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. CPython Loop Mechanics & Bottleneck Physics"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["In high-throughput Python backends, loops and cross-referencing lookups account for over ",e.jsx("strong",{className:"text-teal-300",children:"90% of execution latency"}),". Understanding why standard Python loops crawl under heavy loads empowers you to write lightning-fast code:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/40 border border-rose-800/60 shadow-lg",children:[e.jsx("div",{className:"text-rose-400 font-bold text-sm mb-1",children:"1️⃣ Bytecode Dispatch"}),e.jsx("code",{className:"text-xs font-mono text-rose-300 block mb-1",children:"LOAD_ATTR + CALL_METHOD"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Standard loops execute multiple Python virtual machine opcode fetches per item, resolving names dynamically on every cycle."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"2️⃣ C Bytecode Loops"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"LIST_APPEND Opcode"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"List comprehensions run in optimized internal C loops, avoiding repeated attribute lookups for 25-40% faster execution."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"3️⃣ Hash Set Indexing"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"O(N²) ➔ O(N) Complexity"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Converting target lists to hash sets upfront turns linear scans into instant O(1) hash bucket checks."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"4️⃣ Memory Streaming"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"itertools Zero-Copy"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Generators stream items lazily on demand, slashing RAM consumption from hundreds of megabytes to a constant O(1)."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Golden Rule: Hoisting Loop Invariants"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Any calculation, regular expression compilation (",e.jsx("code",{className:"text-teal-300 font-mono",children:"re.compile"}),"), database connection, or container size calculation (",e.jsx("code",{className:"text-rose-400 font-mono",children:"len(data)"}),") that yields the same value on every cycle ",e.jsx("span",{className:"text-amber-300 font-bold",children:"must be computed once before the loop starts"}),"!"]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Optimization Mechanics & Pipelines"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>g("loopEngine"),className:x("px-3 py-1.5 rounded-lg transition-all",c==="loopEngine"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Loop Bytecode Engine"}),e.jsx("button",{onClick:()=>g("hashLookup"),className:x("px-3 py-1.5 rounded-lg transition-all",c==="hashLookup"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"O(N²) vs O(N) Hash Indexing"}),e.jsx("button",{onClick:()=>g("streamPipeline"),className:x("px-3 py-1.5 rounded-lg transition-all",c==="streamPipeline"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"itertools Streaming Pipeline"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining how CPython processes instructions at the bytecode level and how algorithmic transformations eliminate bottlenecks:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:c==="loopEngine"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"CPYTHON LOOP EXECUTION: INTERPRETED FOR-LOOP VS C BYTECODE COMPREHENSION"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"245",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"Standard for-loop (High Opcode Overhead)"}),e.jsx("rect",{x:"20",y:"50",width:"340",height:"35",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"72",fill:"#fca5a5",fontSize:"10",fontFamily:"monospace",children:"1. FOR_ITER ➔ Fetch next element"}),e.jsx("rect",{x:"20",y:"95",width:"340",height:"35",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"117",fill:"#fca5a5",fontSize:"10",fontFamily:"monospace",children:"2. LOAD_GLOBAL / LOAD_ATTR 'append' ⚠️"}),e.jsx("rect",{x:"20",y:"140",width:"340",height:"35",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"162",fill:"#fca5a5",fontSize:"10",fontFamily:"monospace",children:"3. CALL_FUNCTION ➔ Push frame, execute, pop"}),e.jsx("rect",{x:"20",y:"185",width:"340",height:"40",rx:"4",fill:"#881337",stroke:"#fb7185"}),e.jsx("text",{x:"30",y:"210",fill:"#ffe4e6",fontSize:"10",fontWeight:"bold",children:"🐢 Repeated Python name resolution on EVERY cycle"})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"245",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#6ee7b7",fontSize:"12",fontWeight:"bold",children:"List Comprehension (Optimized C Engine)"}),e.jsx("rect",{x:"20",y:"50",width:"340",height:"35",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"72",fill:"#a7f3d0",fontSize:"10",fontFamily:"monospace",children:"1. C-level pre-allocated buffer expansion"}),e.jsx("rect",{x:"20",y:"95",width:"340",height:"35",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"117",fill:"#a7f3d0",fontSize:"10",fontFamily:"monospace",children:"2. LIST_APPEND opcode (Direct C array write) ⚡"}),e.jsx("rect",{x:"20",y:"140",width:"340",height:"35",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"162",fill:"#a7f3d0",fontSize:"10",fontFamily:"monospace",children:"3. No CALL_FUNCTION or stack frame overhead"}),e.jsx("rect",{x:"20",y:"185",width:"340",height:"40",rx:"4",fill:"#065f46",stroke:"#34d399"}),e.jsx("text",{x:"30",y:"210",fill:"#ecfdf5",fontSize:"10",fontWeight:"bold",children:"🚀 25% to 40% Faster C execution loop"})]})]}):c==="hashLookup"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"CROSS-REFERENCING: QUADRATIC O(N*M) LIST SEARCH VS LINEAR O(N+M) HASH SET"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"245",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"Naive 'in list' Search: O(N × M)"}),e.jsx("rect",{x:"20",y:"55",width:"340",height:"45",rx:"4",fill:"#1c1917",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"77",fill:"#fca5a5",fontSize:"10",fontFamily:"monospace",children:"For each Candidate (N = 10,000):"}),e.jsx("text",{x:"30",y:"92",fill:"#f87171",fontSize:"9",fontFamily:"monospace",children:"Linear scan Target List (M = 5,000)"}),e.jsx("rect",{x:"20",y:"115",width:"340",height:"50",rx:"4",fill:"#881337",stroke:"#fb7185"}),e.jsx("text",{x:"30",y:"137",fill:"#ffe4e6",fontSize:"11",fontWeight:"bold",children:"Total Comparisons: 50,000,000 ops! 💥"}),e.jsx("text",{x:"30",y:"153",fill:"#fecdd3",fontSize:"9",children:"Latency: ~12.5 seconds (CPU bottleneck)"}),e.jsx("rect",{x:"20",y:"180",width:"340",height:"45",rx:"4",fill:"#090d16",stroke:"#f43f5e"}),e.jsx("text",{x:"30",y:"207",fill:"#fca5a5",fontSize:"10",children:"❌ Unusable for live REST API microservices"})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"245",rx:"8",fill:"#082f49",stroke:"#0ea5e9"}),e.jsx("text",{x:"20",y:"30",fill:"#7dd3fc",fontSize:"12",fontWeight:"bold",children:"Hash Set Pre-Indexing: O(N + M)"}),e.jsx("rect",{x:"20",y:"55",width:"340",height:"45",rx:"4",fill:"#0369a1",stroke:"#38bdf8"}),e.jsx("text",{x:"30",y:"77",fill:"#e0f2fe",fontSize:"10",fontFamily:"monospace",children:"1. Build Hash Table from Target in O(M)"}),e.jsx("text",{x:"30",y:"92",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"5,000 hash bucket insertions (0.001s)"}),e.jsx("rect",{x:"20",y:"115",width:"340",height:"50",rx:"4",fill:"#075985",stroke:"#38bdf8"}),e.jsx("text",{x:"30",y:"137",fill:"#f0f9ff",fontSize:"11",fontWeight:"bold",children:"2. Instant O(1) Hash Lookups per Candidate ⚡"}),e.jsx("text",{x:"30",y:"153",fill:"#bae6fd",fontSize:"9",children:"Total Comparisons: 15,000 ops! (0.003 seconds)"}),e.jsx("rect",{x:"20",y:"180",width:"340",height:"45",rx:"4",fill:"#0c4a6e",stroke:"#0284c7"}),e.jsx("text",{x:"30",y:"207",fill:"#e0f2fe",fontSize:"10",fontWeight:"bold",children:"🚀 4,000x Speedup with minimal RAM overhead!"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"MEMORY STREAMING: EAGER LIST ALLOCATION VS ITERTOOLS LAZY GENERATOR PIPELINE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"245",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"Eager Lists: [x for x in stream]"}),e.jsx("rect",{x:"20",y:"55",width:"340",height:"45",rx:"4",fill:"#1c1917",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"77",fill:"#fca5a5",fontSize:"10",fontFamily:"monospace",children:"Loads all 1,000,000 records into RAM"}),e.jsx("text",{x:"30",y:"92",fill:"#f87171",fontSize:"9",fontFamily:"monospace",children:"Allocates massive continuous pointer array"}),e.jsx("rect",{x:"20",y:"115",width:"340",height:"50",rx:"4",fill:"#881337",stroke:"#fb7185"}),e.jsx("text",{x:"30",y:"137",fill:"#ffe4e6",fontSize:"11",fontWeight:"bold",children:"RAM Footprint: ~250 MB Heap RAM ⚠️"}),e.jsx("text",{x:"30",y:"153",fill:"#fecdd3",fontSize:"9",children:"Risk of Out-Of-Memory (OOM) in containers"}),e.jsx("rect",{x:"20",y:"180",width:"340",height:"45",rx:"4",fill:"#090d16",stroke:"#f43f5e"}),e.jsx("text",{x:"30",y:"207",fill:"#fca5a5",fontSize:"10",children:"❌ Heavy Garbage Collection (GC) pauses"})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"245",rx:"8",fill:"#3b0764",stroke:"#a855f7"}),e.jsx("text",{x:"20",y:"30",fill:"#e9d5ff",fontSize:"12",fontWeight:"bold",children:"itertools Lazy Pipeline: (x for x in stream)"}),e.jsx("rect",{x:"20",y:"55",width:"340",height:"45",rx:"4",fill:"#581c87",stroke:"#c084fc"}),e.jsx("text",{x:"30",y:"77",fill:"#faf5ff",fontSize:"10",fontFamily:"monospace",children:"itertools.chain + islice + groupby"}),e.jsx("text",{x:"30",y:"92",fill:"#e9d5ff",fontSize:"9",fontFamily:"monospace",children:"Yields 1 item at a time on demand"}),e.jsx("rect",{x:"20",y:"115",width:"340",height:"50",rx:"4",fill:"#6b21a8",stroke:"#d8b4fe"}),e.jsx("text",{x:"30",y:"137",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"RAM Footprint: < 0.05 MB Constant RAM 🛡️"}),e.jsx("text",{x:"30",y:"153",fill:"#f3e8ff",fontSize:"9",children:"Zero intermediate list allocations in RAM"}),e.jsx("rect",{x:"20",y:"180",width:"340",height:"45",rx:"4",fill:"#2e1065",stroke:"#9333ea"}),e.jsx("text",{x:"30",y:"207",fill:"#f3e8ff",fontSize:"10",fontWeight:"bold",children:"🚀 Safe for infinite streams & gigabyte CSVs!"})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧪"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Algorithmic Simulator & Speedup Calculator"})]}),e.jsxs("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:["Test different optimization patterns across varying dataset sizes ",e.jsx("code",{className:"text-teal-300 font-mono",children:"N"}),". Observe the dramatic reduction in operation count, CPU latency, and RAM thrashing:"]}),e.jsxs("div",{className:"bg-slate-950 p-5 sm:p-6 rounded-xl border border-slate-800/90 space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3",children:"Select Optimization Pattern:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5",children:[{id:"HASH_INDEXING",label:"Hash Set Lookup",icon:"🗝️",desc:"O(N²) ➔ O(N)"},{id:"STRING_JOIN",label:"str.join() Buffer",icon:"🧵",desc:"+= Reallocation ➔ O(N)"},{id:"INVARIANT_HOIST",label:"Invariant Hoisting",icon:"🧬",desc:"N redundant calls ➔ 1"},{id:"GENERATOR_STREAM",label:"itertools Stream",icon:"🌊",desc:"Eager List ➔ O(1) RAM"}].map(n=>e.jsxs("button",{onClick:()=>y(n.id),className:x("p-3 rounded-xl border text-left transition-all",i===n.id?"bg-teal-950/60 border-teal-500 shadow-md shadow-teal-950/50":"bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400"),children:[e.jsxs("div",{className:"text-base mb-0.5",children:[n.icon," ",e.jsx("strong",{className:"text-slate-200 text-xs sm:text-sm",children:n.label})]}),e.jsx("div",{className:"text-[11px] text-teal-400 font-mono",children:n.desc})]},n.id))})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("span",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400",children:"Dataset Size (N Student Records):"}),e.jsxs("span",{className:"text-sm font-mono font-bold text-teal-400 bg-teal-950/80 px-3 py-1 rounded-lg border border-teal-800",children:[t.toLocaleString()," Records"]})]}),e.jsx("input",{type:"range",min:2e3,max:5e4,step:2e3,value:t,onChange:n=>_(Number(n.target.value)),className:"w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-500"}),e.jsxs("div",{className:"flex justify-between text-[11px] text-slate-500 font-mono mt-1",children:[e.jsx("span",{children:"2,000"}),e.jsx("span",{children:"25,000"}),e.jsx("span",{children:"50,000 (Enterprise Batch)"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2",children:[e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-rose-900/50",children:[e.jsx("div",{className:"text-xs text-rose-400 font-medium mb-1",children:"Naive Operations"}),e.jsxs("div",{className:"text-lg sm:text-xl font-bold font-mono text-rose-300",children:[o.toLocaleString()," ops"]}),e.jsxs("div",{className:"text-[11px] text-slate-400 mt-1",children:["~",s," ms CPU latency"]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-teal-900/50",children:[e.jsx("div",{className:"text-xs text-teal-400 font-medium mb-1",children:"Optimized Operations"}),e.jsxs("div",{className:"text-lg sm:text-xl font-bold font-mono text-teal-300",children:[l.toLocaleString()," ops"]}),e.jsxs("div",{className:"text-[11px] text-slate-400 mt-1",children:["~",a," ms CPU latency"]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-cyan-900/50",children:[e.jsx("div",{className:"text-xs text-cyan-400 font-medium mb-1",children:"Speedup Factor"}),e.jsx("div",{className:"text-lg sm:text-xl font-bold font-mono text-cyan-300",children:d}),e.jsx("div",{className:"text-[11px] text-emerald-400 mt-1",children:"⚡ Instantaneous response"})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-purple-900/50",children:[e.jsx("div",{className:"text-xs text-purple-400 font-medium mb-1",children:"Memory / Efficiency Gain"}),e.jsx("div",{className:"text-xs font-bold font-mono text-purple-300 mt-1 leading-snug",children:p}),e.jsx("div",{className:"text-[11px] text-slate-400 mt-1",children:"Zero OOM hazard"})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"Dynamic Python Optimization Equivalent:"}),e.jsx("pre",{className:"p-4 bg-slate-900/90 border border-slate-800 rounded-xl text-xs sm:text-sm font-mono text-teal-200 overflow-x-auto leading-relaxed",children:N})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Production Code Labs & Benchmarking Suite"})]}),e.jsxs("p",{className:"text-slate-300 mb-8 text-base leading-relaxed",children:["Inspect, run, and master all four production-grade optimization scripts covering local variable caching, hash set index conversions, binary searches with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"bisect"}),", string joins, ",e.jsx("code",{className:"text-purple-300 font-mono",children:"itertools"})," pipelines, and the complete institutional admission case study:"]}),e.jsxs("div",{className:"space-y-10",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:"Lab 1: CPython Loop Bytecode, List Comprehensions & Local Caching"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Demonstrating the speed differences between standard interpreted loops, local method caching (",e.jsx("code",{className:"text-teal-300 font-mono",children:"append = results.append"}),"), list comprehensions, and invariant hoisting."]})]}),e.jsx(f,{fileModule:O,title:"loop_optimization_and_local_caching.py",highlightLines:[23,33,44,58]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-cyan-300",children:"Lab 2: Transforming Quadratic O(N*M) Searches into Linear O(N+M) Hash Lookups"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Comparing naive list membership tests vs pre-indexed set hash tables, compound multi-key indexes for instant queries, and ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"bisect"})," binary range search."]})]}),e.jsx(f,{fileModule:S,title:"lookup_optimization_and_hash_indexing.py",highlightLines:[32,40,52,69]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-purple-300",children:"Lab 3: String Concatenation Buffers & itertools Streaming Pipelines"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Benchmarking O(N²) ",e.jsx("code",{className:"text-rose-400 font-mono",children:"+="})," string reallocations against O(N) ",e.jsx("code",{className:"text-teal-300 font-mono",children:"str.join()"})," and building memory-safe streaming pipelines with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"itertools.chain"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"islice"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"groupby"}),", and ",e.jsx("code",{className:"text-purple-300 font-mono",children:"accumulate"}),"."]})]}),e.jsx(f,{fileModule:w,title:"string_concatenation_and_itertools_pipelines.py",highlightLines:[25,33,53,58,64]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-amber-300",children:"Lab 4: Institutional Admission Bottleneck Eliminator (Case Study)"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["End-to-end real-world benchmark processing 25,000 admission records across Barrackpore, Kolkata, Ichapur, and Jadavpur campuses, eliminating 5 severe bottlenecks to achieve a ",e.jsx("span",{className:"text-emerald-400 font-bold",children:"25x+ speedup"}),"."]})]}),e.jsx(f,{fileModule:A,title:"institutional_admission_bottleneck_eliminator.py",highlightLines:[42,68,72,76,99]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Common Pitfalls & Bottleneck Anti-Patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"1. 'in list' Inside Loops (Silent O(N²) Trap)"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Writing ",e.jsx("code",{className:"text-rose-400 font-mono",children:"if item in target_list:"})," inside a loop iterates through the entire list for every outer element. Always convert ",e.jsx("code",{className:"text-teal-300 font-mono",children:"target_set = set(target_list)"})," before entering the loop."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# BUG: if user_id in all_user_ids: # O(N*M)!",`
`,"# FIX: users_set = set(all_user_ids) # O(N+M)"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"2. String Concatenation with '+=' in Loops"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Strings in Python are immutable. Using ",e.jsx("code",{className:"text-rose-400 font-mono",children:"+="})," allocates a new string buffer and copies all previous characters on every iteration. Use ",e.jsx("code",{className:"text-teal-300 font-mono",children:'"".join(chunks)'}),"."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# BUG: html += '<div>' + row + '</div>'",`
`,"# FIX: html = ''.join(f'<div>","{r}","</div>' for r in rows)"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"3. Calling re.compile() Inside Loops"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Compiling regular expressions is computationally heavy. Compiling the regex pattern inside the loop causes repeated AST construction and state-machine generation."}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# BUG: re.compile(...) inside loop",`
`,"# FIX: PATTERN = re.compile(...) outside loop"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"4. Mutating Collections While Iterating"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Modifying a list or dictionary while looping over it causes skipped elements or raises ",e.jsx("code",{className:"text-rose-400 font-mono",children:"RuntimeError: dictionary changed size during iteration"}),"."]}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# BUG: for k in d: if bad(k): del d[k]",`
`,"# FIX: d = ","{k: v for k, v in d.items() if not bad(k)}"]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Professional Algorithmic Optimization Checklist"})]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm sm:text-base",children:[e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Profile Before Optimizing:"})," Always profile with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"cProfile"})," or ",e.jsx("code",{className:"text-teal-300 font-mono",children:"timeit"})," to verify actual bottlenecks rather than guessing."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Convert Repeated Searches to Hash Tables:"})," Use ",e.jsx("code",{className:"text-teal-300 font-mono",children:"set"})," for membership and ",e.jsx("code",{className:"text-teal-300 font-mono",children:"dict"})," for lookups to ensure O(1) performance."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Prefer List & Dict Comprehensions:"})," Comprehensions leverage dedicated C opcodes (",e.jsx("code",{className:"text-teal-300 font-mono",children:"LIST_APPEND"}),") and avoid bytecode function call overhead."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Hoist Invariant Calculations:"})," Compute constants, regular expressions, and invariant formulas once before starting loop cycles."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Use itertools for Large or Infinite Streams:"})," Prevent RAM exhaustion by chaining and slicing generator streams lazily without eager array allocations."]})]})]})]}),e.jsx("section",{ref:r,className:"section-hidden",children:e.jsx(j,{title:"Optimizing Loops, Lookups & Algorithmic Bottlenecks FAQs",questions:E})}),e.jsx("section",{ref:r,className:"section-hidden",children:e.jsx(v,{content:C,title:"Topic 5: Loop, Lookup & Bottleneck Optimization Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic5_note.txt"})}),e.jsx("section",{ref:r,className:"section-hidden",children:e.jsx(k,{note:"Mastering loop and lookup optimization is the dividing line between junior coders and production-grade software engineers. When evaluating code for Mamata, Mahima, Abhronila, Susmita, or Debangshu across Barrackpore, Kolkata, Ichapur, and Jadavpur, always ask: 'Can this quadratic O(N²) search be indexed into an O(1) set lookup? Can this invariant calculation be hoisted outside the loop? Can we stream this with itertools rather than materializing a 500MB list?' Eliminating algorithmic bottlenecks transforms slow, crashing backends into blazing fast, enterprise-ready systems."})})]})]})}export{D as default};
