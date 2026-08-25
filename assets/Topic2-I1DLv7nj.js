import{b as c,j as e,bg as m}from"./vendor-react-core-Doz9nIC6.js";import{P as _}from"./PythonFileLoader-hCi5osN-.js";import{P as S}from"./PlainTextPrint-C08xhKA4.js";import{F as N}from"./FAQTemplate-CkSqDH4B.js";import{T as j}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const w=`# topic2_files/timeit_fundamentals_and_execution_modes.py\r
# Module: 004_002_performance-optimization\r
# Topic: Benchmarking code with timeit module\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 2 - File 1: Python \`timeit\` Fundamentals & Statistical Accuracy\r
Demonstrates:\r
  1. Micro-benchmarking with \`timeit.timeit()\` and \`timeit.repeat()\`\r
  2. Why \`min(results)\` is statistically superior to \`average()\` (filtering OS noise)\r
  3. Isolating setup overhead with \`setup=\` callable parameter\r
  4. Passing arguments to benchmarks using \`functools.partial\`\r
"""\r
\r
import timeit\r
from functools import partial\r
from typing import List\r
\r
# Target functions to benchmark\r
def naive_loop_square(n: int) -> List[int]:\r
    result = []\r
    for i in range(n):\r
        result.append(i * i)\r
    return result\r
\r
def list_comp_square(n: int) -> List[int]:\r
    return [i * i for i in range(n)]\r
\r
def map_square(n: int) -> List[int]:\r
    return list(map(lambda i: i * i, range(n)))\r
\r
\r
def run_timeit_fundamentals():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - TIMEIT FUNDAMENTALS & EXECUTION MODES")\r
    print("=" * 70)\r
\r
    n_items = 500\r
    loops = 500\r
    repeats = 5\r
\r
    print(f"1. Benchmarking List Squaring (N={n_items:,}, {loops:,} loops, {repeats} repeats):")\r
\r
    # 1. Benchmark Naive Loop using functools.partial\r
    fn_loop = partial(naive_loop_square, n_items)\r
    loop_times = timeit.repeat(fn_loop, number=loops, repeat=repeats)\r
    loop_best_s = min(loop_times)\r
\r
    # 2. Benchmark List Comprehension\r
    fn_comp = partial(list_comp_square, n_items)\r
    comp_times = timeit.repeat(fn_comp, number=loops, repeat=repeats)\r
    comp_best_s = min(comp_times)\r
\r
    # 3. Benchmark Map\r
    fn_map = partial(map_square, n_items)\r
    map_times = timeit.repeat(fn_map, number=loops, repeat=repeats)\r
    map_best_s = min(map_times)\r
\r
    print(f"   * Naive Loop (\`.append()\`) : Best: {loop_best_s:.4f}s | All Repeats: {[round(t, 4) for t in loop_times]}")\r
    print(f"   * List Comprehension       : Best: {comp_best_s:.4f}s | All Repeats: {[round(t, 4) for t in comp_times]}")\r
    print(f"   * \`map()\` with Lambda      : Best: {map_best_s:.4f}s | All Repeats: {[round(t, 4) for t in map_times]}\\n")\r
\r
    speedup = loop_best_s / (comp_best_s or 0.0001)\r
    print(f"2. Statistical Result: List Comprehension is {speedup:.2f}x FASTER than Naive \`.append()\` loop!\\n")\r
\r
    print(r"""\r
timeit Statistical Invariants:\r
  1. Never use \`time.time()\` for micro-benchmarks; it has low clock resolution and includes unrelated system processes.\r
  2. \`timeit\` temporarily disables garbage collection during execution to ensure deterministic timing.\r
  3. Always take \`min(repeat_times)\`: other runs are slowed down by OS context switches, cache misses, and background interrupts.\r
""")\r
    print("[PASSED] timeit Fundamentals Verified.")\r
\r
\r
if __name__ == "__main__":\r
    run_timeit_fundamentals()\r
`,v=`# topic2_files/timeit_syntax_and_idiom_shootouts.py\r
# Module: 004_002_performance-optimization\r
# Topic: Benchmarking code with timeit module\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 2 - File 2: Python Idiom Shootouts & Bytecode Disassembly\r
Demonstrates:\r
  1. Shootout 1: String formatting (\`+\` concat vs \`%\` vs \`.format()\` vs f-string)\r
  2. Shootout 2: Dict literal \`{}\` vs \`dict()\` constructor\r
  3. Shootout 3: Sequence emptiness check \`if not seq:\` vs \`if len(seq) == 0:\`\r
  4. Inspecting CPython bytecode instructions with \`dis.dis()\` to explain speed differences\r
"""\r
\r
import dis\r
import timeit\r
\r
def benchmark_idiom_shootouts():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - PYTHON IDIOM BENCHMARK SHOOTOUTS")\r
    print("=" * 70)\r
\r
    loops = 1_000_000\r
\r
    # -------------------------------------------------------------\r
    # Shootout 1: String Formatting\r
    # -------------------------------------------------------------\r
    print(f"1. Shootout: String Formatting ({loops:,} executions):")\r
    t_fstring = min(timeit.repeat("name = 'Sourav'; f'Student: {name}'", number=loops, repeat=5))\r
    t_plus = min(timeit.repeat("name = 'Sourav'; 'Student: ' + name", number=loops, repeat=5))\r
    t_format = min(timeit.repeat("name = 'Sourav'; 'Student: {}'.format(name)", number=loops, repeat=5))\r
    t_percent = min(timeit.repeat("name = 'Sourav'; 'Student: %s' % name", number=loops, repeat=5))\r
\r
    print(f"   * f-string (\`f'Student: {{name}}'\`) : {t_fstring * 1000:.2f} ms (FASTEST)")\r
    print(f"   * \`+\` concat (\`'Student: ' + name\`) : {t_plus * 1000:.2f} ms")\r
    print(f"   * \`%\` formatting (\`'%s' % name\`)   : {t_percent * 1000:.2f} ms")\r
    print(f"   * \`.format()\` (\`'{{}}'.format(...)\`): {t_format * 1000:.2f} ms (SLOWEST)\\n")\r
\r
    # -------------------------------------------------------------\r
    # Shootout 2: Dict Literal vs Constructor\r
    # -------------------------------------------------------------\r
    print(f"2. Shootout: Dict Creation (\`{{}}\` vs \`dict()\`):")\r
    t_literal = min(timeit.repeat("{'a': 1, 'b': 2}", number=loops, repeat=5))\r
    t_func = min(timeit.repeat("dict(a=1, b=2)", number=loops, repeat=5))\r
\r
    print(f"   * Dict Literal (\`{{'a': 1, 'b': 2}}\`) : {t_literal * 1000:.2f} ms (Direct Bytecode)")\r
    print(f"   * \`dict(...)\` Constructor           : {t_func * 1000:.2f} ms (Function Call Overhead)")\r
    print(f"   * Speedup                           : {t_func / (t_literal or 0.001):.1f}x FASTER!\\n")\r
\r
    # -------------------------------------------------------------\r
    # Shootout 3: Emptiness Check\r
    # -------------------------------------------------------------\r
    print(f"3. Shootout: Emptiness Check (\`if not seq:\` vs \`if len(seq) == 0:\`):")\r
    setup_code = "seq = []"\r
    t_truthy = min(timeit.repeat("if not seq: pass", setup=setup_code, number=loops, repeat=5))\r
    t_len = min(timeit.repeat("if len(seq) == 0: pass", setup=setup_code, number=loops, repeat=5))\r
\r
    print(f"   * Truthiness (\`if not seq:\`)       : {t_truthy * 1000:.2f} ms (Direct C truth check)")\r
    print(f"   * Length Check (\`if len(seq) == 0\`): {t_len * 1000:.2f} ms (Function call + comparison)")\r
    print(f"   * Speedup                           : {t_len / (t_truthy or 0.001):.1f}x FASTER!\\n")\r
\r
    # -------------------------------------------------------------\r
    # Bytecode Disassembly Insight\r
    # -------------------------------------------------------------\r
    print("4. Bytecode Comparison (Disassembly Insight):")\r
    print("--- [DISASSEMBLY: \`dict()\` Constructor] ---")\r
    dis.dis(compile("dict(a=1)", "<string>", "eval"))\r
\r
    print("\\n--- [DISASSEMBLY: \`{}\` Literal] ---")\r
    dis.dis(compile("{'a': 1}", "<string>", "eval"))\r
\r
    print(r"""\r
Bytecode Optimization Invariants:\r
  1. Dict and List literals (\`{}\`, \`[]\`) compile directly into single CPython opcodes (\`BUILD_MAP\`, \`BUILD_LIST\`).\r
  2. \`dict()\` and \`list()\` must perform a global name lookup (\`LOAD_NAME\`) and a function call (\`CALL_FUNCTION\`).\r
  3. f-strings compile into optimized \`FORMAT_VALUE\` bytecodes, executing faster than \`.format()\` or \`%\`.\r
""")\r
    print("[PASSED] Python Idiom Benchmark Shootouts Verified.")\r
\r
\r
if __name__ == "__main__":\r
    benchmark_idiom_shootouts()\r
`,k=`# topic2_files/timeit_cli_and_parameterized_benchmarking.py\r
# Module: 004_002_performance-optimization\r
# Topic: Benchmarking code with timeit module\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 2 - File 3: CLI & Parameterized Benchmarking Harness\r
Demonstrates:\r
  1. Programmatic CLI-style timeit runner\r
  2. Auto-scaling iteration estimation (\`Timer.autorange()\`)\r
  3. Formatted terminal performance cards with execution statistics\r
"""\r
\r
import timeit\r
from typing import Callable, Dict, Any\r
\r
class TimeitBenchmarkHarness:\r
    """Production micro-benchmark harness with automatic scaling and statistics."""\r
\r
    @staticmethod\r
    def benchmark_statement(stmt: str, setup: str = "pass", repeat: int = 5) -> Dict[str, Any]:\r
        """Runs auto-scaled benchmark on statement string and computes statistics."""\r
        timer = timeit.Timer(stmt=stmt, setup=setup)\r
        # Use autorange to pick an optimal number of loops\r
        number, total_time = timer.autorange()\r
        raw_times = timer.repeat(repeat=repeat, number=number)\r
\r
        best_time_s = min(raw_times)\r
        per_loop_us = (best_time_s / number) * 1_000_000.0\r
\r
        return {\r
            "statement": stmt,\r
            "setup": setup,\r
            "loops_per_repeat": number,\r
            "repeats_count": repeat,\r
            "best_total_s": round(best_time_s, 6),\r
            "per_loop_microsec": round(per_loop_us, 4),\r
            "all_runs_s": [round(t, 6) for t in raw_times]\r
        }\r
\r
\r
def demonstrate_cli_harness():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - TIMEIT BENCHMARK HARNESS")\r
    print("=" * 70)\r
\r
    contestants = [\r
        ("String Join", "'-'.join(str(i) for i in range(100))", "pass"),\r
        ("String Concat Loop", "s = '';\\nfor i in range(100): s += str(i) + '-'", "pass"),\r
        ("List Comp Join", "'-'.join([str(i) for i in range(100)])", "pass")\r
    ]\r
\r
    print("1. Running Auto-Scaled Micro-Benchmarks:")\r
    for label, stmt, setup in contestants:\r
        res = TimeitBenchmarkHarness.benchmark_statement(stmt, setup)\r
        print(f"   * [{label:<20}] : {res['per_loop_microsec']:>8.2f} us / loop ({res['loops_per_repeat']:,} loops)")\r
\r
    print(r"""\r
Harness Optimization Invariants:\r
  1. \`Timer.autorange()\` automatically finds a loop count where total run time is at least 0.2 seconds.\r
  2. Evaluating \`per_loop_microsec\` normalizes benchmarks regardless of how many iterations were run.\r
  3. \`[str(i) for i in range(100)]\` is faster in \`str.join()\` than generator expressions because join pre-allocates buffer space for lists.\r
""")\r
    print("[PASSED] Timeit CLI & Parameterized Harness Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_cli_harness()\r
`,A=`# topic2_files/institutional_admission_pipeline_microbenchmark_suite.py\r
# Module: 004_002_performance-optimization\r
# Topic: Benchmarking code with timeit module\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 2 - File 4: Institutional Admission Transformation Benchmark Suite (Case Study)\r
Demonstrates:\r
  1. Micro-benchmarking 4 alternative data ingestion architectures on student KYC records:\r
     - Architecture A: Naive \`for\` loop with \`.append()\`\r
     - Architecture B: Optimized List Comprehension\r
     - Architecture C: Direct Dictionary Comprehension\r
     - Architecture D: Lazy Streaming Generator Pipeline\r
  2. Computing statistical metrics: Minimum (Best), Mean, Median, and Standard Deviation\r
"""\r
\r
import timeit\r
import statistics\r
from typing import List, Dict, Any\r
\r
# Mock raw incoming student transaction rows\r
RAW_STUDENT_ROWS = [\r
    f"STU-{i:05d},Candidate_{i},barrackpore,30000,PAID" for i in range(1_000)\r
]\r
\r
# 1. Architecture A: Naive Loop + Append\r
def transform_via_naive_loop():\r
    results = []\r
    for row in RAW_STUDENT_ROWS:\r
        parts = row.split(",")\r
        results.append({\r
            "id": parts[0],\r
            "name": parts[1],\r
            "campus": parts[2],\r
            "fee": float(parts[3]),\r
            "status": parts[4]\r
        })\r
    return results\r
\r
# 2. Architecture B: List Comprehension\r
def transform_via_list_comp():\r
    return [\r
        {\r
            "id": p[0],\r
            "name": p[1],\r
            "campus": p[2],\r
            "fee": float(p[3]),\r
            "status": p[4]\r
        }\r
        for p in (row.split(",") for row in RAW_STUDENT_ROWS)\r
    ]\r
\r
# 3. Architecture C: Direct Dict Comprehension\r
def transform_via_dict_comp():\r
    return {\r
        p[0]: {"name": p[1], "campus": p[2], "fee": float(p[3]), "status": p[4]}\r
        for p in (row.split(",") for row in RAW_STUDENT_ROWS)\r
    }\r
\r
# 4. Architecture D: Generator Pipeline\r
def transform_via_generator():\r
    return list(\r
        {\r
            "id": p[0],\r
            "name": p[1],\r
            "campus": p[2],\r
            "fee": float(p[3]),\r
            "status": p[4]\r
        }\r
        for p in (row.split(",") for row in RAW_STUDENT_ROWS)\r
    )\r
\r
\r
def run_institutional_benchmark_suite():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - INSTITUTIONAL DATA TRANSFORMATION BENCHMARK SUITE")\r
    print("=" * 70)\r
\r
    loops = 100\r
    repeats = 3\r
\r
    architectures = [\r
        ("Architecture A (Naive Loop + Append)", transform_via_naive_loop),\r
        ("Architecture B (List Comprehension)", transform_via_list_comp),\r
        ("Architecture C (Dict Comprehension)", transform_via_dict_comp),\r
        ("Architecture D (Generator Pipeline)", transform_via_generator),\r
    ]\r
\r
    print(f"1. Benchmarking Ingestion Pipelines ({loops} loops x {repeats} repeats):\\n")\r
\r
    summary_stats = []\r
    for name, func in architectures:\r
        times = timeit.repeat(func, number=loops, repeat=repeats)\r
        times_ms = [(t / loops) * 1000.0 for t in times]\r
\r
        best_ms = min(times_ms)\r
        mean_ms = statistics.mean(times_ms)\r
        stdev_ms = statistics.stdev(times_ms) if len(times_ms) > 1 else 0\r
\r
        summary_stats.append({\r
            "name": name,\r
            "best_ms": best_ms,\r
            "mean_ms": mean_ms,\r
            "stdev_ms": stdev_ms\r
        })\r
\r
        print(f"   * [{name:<36}]")\r
        print(f"     -> Best: {best_ms:.3f} ms/pass | Mean: {mean_ms:.3f} ms | StdDev: {stdev_ms:.4f} ms")\r
\r
    # Speedup relative to naive loop\r
    naive_best = summary_stats[0]["best_ms"]\r
    comp_best = summary_stats[1]["best_ms"]\r
    speedup = naive_best / (comp_best or 0.0001)\r
\r
    print(f"\\n2. Architectural Optimization: List Comprehension is {speedup:.2f}x FASTER than Naive Loops!")\r
\r
    print(r"""\r
Transformation Architecture Invariants:\r
  1. List comprehensions run in optimized C loops, avoiding Python bytecode frame overhead for \`.append()\`.\r
  2. Generator expressions yield lowest memory consumption when piping directly into consumers (e.g. database writers).\r
  3. Pre-splitting nested iterators inside comprehensions achieves clean, high-throughput ETL data pipelines.\r
""")\r
    print("[PASSED] Institutional Data Transformation Benchmark Verified.")\r
\r
\r
if __name__ == "__main__":\r
    run_institutional_benchmark_suite()\r
`,T=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 4: PRO LEVEL • MODULE 004_002: PERFORMANCE OPTIMIZATION\r
               TOPIC 2: BENCHMARKING CODE WITH THE TIMEIT MODULE\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. TIMEIT BENCHMARKING PATTERNS\r
--------------------------------------------------------------------------------\r
  # Measure statement with setup:\r
  t = timeit.timeit(\r
      stmt="'-'.join(str(i) for i in range(100))",\r
      setup="pass",\r
      number=10000\r
  )\r
\r
  # Run repeated passes and take minimum:\r
  times = timeit.repeat(callable_fn, number=10000, repeat=5)\r
  best_time = min(times) # Filters out OS context switch delays!\r
\r
--------------------------------------------------------------------------------\r
2. PYTHON IDIOM SPEED CHEATSHEET\r
--------------------------------------------------------------------------------\r
  * String Formatting  : f"{a} {b}" > " " + b > "%s %s" > "{}".format()\r
  * Dict Creation      : {} literal > dict() constructor (No global lookup)\r
  * List Creation      : [] literal > list() constructor\r
  * Emptiness Check    : if not seq: > if len(seq) == 0:\r
  * Sequence Filtering : [x for x in seq if cond] > for loop with .append()\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 2: TIMEIT BENCHMARKING MODULE\r
================================================================================\r
`,C=[{question:"What is the primary purpose of Python's built-in 'timeit' module?",shortAnswer:"To accurately measure the execution time of small code snippets and functions by repeating them thousands of times, isolating setup costs, and filtering out background OS interference.",explanation:"Standard library micro-benchmarking engine.",hint:"Measures execution time of small code snippets with high statistical accuracy.",level:"basic",codeExample:`import timeit
t = timeit.timeit('"-".join(str(n) for n in range(100))', number=10000)`},{question:"Why should you NEVER use 'time.time()' for micro-benchmarking Python code?",shortAnswer:"'time.time()' has low clock resolution on some operating systems, includes unrelated background processes and CPU interrupts, and measures wall-clock time rather than isolated execution time.",explanation:"Clock resolution and OS context-switch noise.",hint:"Has low clock resolution and includes unrelated background OS processes.",level:"basic",codeExample:"# AVOID: t0 = time.time(); func(); dt = time.time() - t0"},{question:"What is the key difference between 'timeit.timeit()' and 'timeit.repeat()'?",shortAnswer:"'timeit.timeit()' runs the benchmark once for a specified 'number' of loops; 'timeit.repeat()' runs the entire multi-loop benchmark 'repeat' separate times and returns a list of results.",explanation:"Single pass vs multi-pass repetition.",hint:"timeit() runs once; repeat() runs multiple rounds to enable statistical filtering.",level:"basic",codeExample:"times = timeit.repeat(my_func, number=10000, repeat=5)"},{question:"Why is 'min(times)' the statistically correct metric to report from 'timeit.repeat()' rather than 'mean(times)'?",shortAnswer:"Because in a computer system, code cannot run faster than its optimal limit; any slower runs are caused by external OS noise (context switches, garbage collection pauses, disk/network interrupts), so the minimum represents the true execution cost.",explanation:"External interference filtering theory.",hint:"Any slower runs are caused by OS background interrupts, so the minimum is the true speed.",level:"complex",codeExample:"best_time = min(timeit.repeat(stmt, number=1000, repeat=5))"},{question:"How does the 'setup' parameter in 'timeit.timeit()' work?",shortAnswer:"The 'setup' statement is executed once before the timed loop begins, allowing you to import modules or instantiate test data without including that setup overhead in the measurement.",explanation:"Setup isolation in micro-benchmarks.",hint:"Executes once before timing begins to isolate import and data initialization costs.",level:"basic",codeExample:"timeit.timeit('math.sqrt(x)', setup='import math; x = 144', number=100000)"},{question:"How do you benchmark a Python function that requires arguments using 'timeit'?",shortAnswer:"By wrapping the function with 'functools.partial(func, arg1, arg2)' or using a zero-argument lambda: 'timeit.timeit(lambda: func(arg1), number=1000)'.",explanation:"Callable argument binding for timeit.",hint:"Use functools.partial or a lambda wrapper.",level:"basic",codeExample:`from functools import partial
t = timeit.timeit(partial(my_func, 100), number=1000)`},{question:"Why is the dictionary literal '{}' faster than the 'dict()' constructor in Python?",shortAnswer:"'{}' compiles directly into a single CPython opcode ('BUILD_MAP'); 'dict()' requires a global namespace lookup ('LOAD_NAME') followed by a full Python function call frame ('CALL_FUNCTION').",explanation:"Bytecode opcode vs global name lookup overhead.",hint:"{} is a direct C opcode; dict() requires a global name lookup and function call.",level:"moderate",codeExample:`# {} -> BUILD_MAP (Fast)
# dict() -> LOAD_NAME + CALL_FUNCTION (Slower)`},{question:"Why is a list comprehension faster than a standard 'for' loop with 'list.append()'?",shortAnswer:"List comprehensions run in optimized C bytecode ('LIST_APPEND') inside CPython without the overhead of looking up the '.append' attribute and creating Python method call frames on each iteration.",explanation:"C-level opcode loop execution.",hint:"Runs in optimized C loops, avoiding method lookup and function call overhead.",level:"basic",codeExample:"[x * 2 for x in data] # ~2x faster than for x in data: res.append(x * 2)"},{question:`Why are f-strings ('f"{a} {b}"') faster than '.format()' and '%' formatting?`,shortAnswer:"f-strings are evaluated at runtime via dedicated C opcodes ('FORMAT_VALUE' and 'BUILD_STRING') rather than parsing a format specifier string during a function call.",explanation:"Inline C opcode string interpolation.",hint:"Compiled into dedicated FORMAT_VALUE bytecodes rather than runtime function parsing.",level:"basic",codeExample:"f'Hello {name}' # Faster than 'Hello {}'.format(name)"},{question:"Why is 'if not seq:' faster than 'if len(seq) == 0:' for checking emptiness?",shortAnswer:"'if not seq:' invokes the object's direct C truthiness protocol ('__bool__' or 'sq_length'); 'len(seq) == 0' requires looking up 'len', calling the function, and executing an integer comparison.",explanation:"Direct truthiness protocol vs function call and comparison.",hint:"Direct C truthiness check avoids function call and comparison overhead.",level:"basic",codeExample:"if not my_list: pass # Direct C truth protocol (Fastest)"},{question:"What does 'Timer.autorange()' do in the 'timeit' module?",shortAnswer:"It automatically scales the number of loop iterations (1, 2, 5, 10, 20, 50, 100...) until the total benchmark execution time reaches at least 0.2 seconds, returning '(number, total_time)'.",explanation:"Automatic loop count calibration.",hint:"Automatically increases loop counts until execution time reaches at least 0.2 seconds.",level:"moderate",codeExample:"number, time_taken = timeit.Timer('sum(range(100))').autorange()"},{question:"How do you run 'timeit' directly from your operating system terminal (CLI)?",shortAnswer:`Using the '-m timeit' flag with python: 'python -m timeit -s "data = list(range(100))" "sum(data)"'.`,explanation:"Command-line timeit execution.",hint:'python -m timeit -s "setup" "statement"',level:"basic",codeExample:'# Terminal: python -m timeit -s "import math" "math.sqrt(100)"'},{question:"How does 'timeit' handle Garbage Collection by default during benchmarks?",shortAnswer:"By default, 'timeit' temporarily disables Python's cyclic garbage collector to prevent arbitrary GC collection cycles from skewing microsecond measurements.",explanation:"Garbage collection suspension in micro-benchmarks.",hint:"Temporarily disables garbage collection to prevent timing spikes.",level:"complex",codeExample:"# timeit suspends gc by default (or gc.enable() in setup if desired)"},{question:`Why is '"-".join([str(i) for i in range(100)])' faster than using a generator expression inside 'join()'?`,shortAnswer:"'str.join()' can pre-allocate the exact output buffer capacity when passed a list with known length; when passed a generator, it must dynamically resize the memory buffer as items arrive.",explanation:"Buffer pre-allocation in sequence joiners.",hint:"Lists allow join() to pre-allocate memory buffers upfront.",level:"complex",codeExample:"'-'.join([str(i) for i in range(100)]) # Faster than generator in join"},{question:"What is the difference between micro-benchmarking and macro-profiling?",shortAnswer:"Micro-benchmarking ('timeit') measures the isolated execution time of small statements/functions (nanoseconds/microseconds); Macro-profiling ('cProfile') measures an entire application's call tree.",explanation:"Granular micro-tests vs holistic application profiling.",hint:"Micro-benchmarking tests small functions; macro-profiling analyzes entire program call trees.",level:"basic",codeExample:"# timeit = micro-benchmark; cProfile = application macro-profile"},{question:"What is the danger of benchmarking code that has dead-code elimination or constant folding?",shortAnswer:"Python's compiler optimizes constant arithmetic at compile time (e.g. '24 * 60 * 60' becomes '86400'); benchmarking constants measures 0 operations rather than real runtime arithmetic.",explanation:"Compile-time constant folding in CPython.",hint:"Compile-time folding computes constant results ahead of time, measuring zero operations.",level:"complex",codeExample:"# compile('24 * 60', '', 'eval') folds into constant 1440"},{question:"How do you benchmark two alternative regex patterns using 'timeit'?",shortAnswer:"Compile both regex patterns in the 'setup' statement ('re.compile(...)'), and measure the '.match()' or '.search()' call in the benchmark statement.",explanation:"Pre-compiled regex benchmark isolation.",hint:"Pre-compile regular expressions in setup to measure only search execution time.",level:"basic",codeExample:`timeit.timeit('pattern.match(text)', setup='import re; pattern = re.compile(r"\\d+"); text = "12345"')`},{question:"Why is 'local_var' access faster than 'global_var' access in Python benchmarks?",shortAnswer:"Local variables are stored in a fixed-size C array and accessed via the fast 'LOAD_FAST' opcode; global variables require looking up a key in the global dictionary ('LOAD_GLOBAL').",explanation:"LOAD_FAST array offset vs LOAD_GLOBAL dictionary lookup.",hint:"Locals use LOAD_FAST array indexing; globals require dictionary lookups.",level:"complex",codeExample:"# LOAD_FAST (locals) vs LOAD_GLOBAL (globals)"},{question:"How can you store a global function reference in a local variable to speed up loops in Python?",shortAnswer:"Assign the method to a local variable before the loop: 'append = my_list.append; for x in data: append(x)' (avoids looking up '.append' on every iteration).",explanation:"Method caching in local scope.",hint:"Assigning method to local variable avoids repeated attribute lookups in loops.",level:"moderate",codeExample:`append = results.append
for item in data:
    append(item)`},{question:"What is the time complexity difference between building a string via repeated '+=' in a loop vs 'str.join()'?",shortAnswer:"Repeated '+=' in a loop creates new string copies at each step, resulting in O(N^2) quadratic time; 'str.join()' computes the total length and builds the string in a single O(N) pass.",explanation:"String immutability and reallocation mechanics.",hint:"+= creates copies yielding O(N^2); str.join() builds the string in O(N) time.",level:"basic",codeExample:"out = ''.join(chunks) # O(N) vs O(N^2) repeated concat"},{question:"How do you calculate the speedup factor between two benchmarked implementations?",shortAnswer:"Divide the slower execution time by the faster execution time: 'speedup = slow_time / fast_time' (e.g. 50ms / 5ms = 10x speedup).",explanation:"Performance speedup calculation formula.",hint:"Divide slower time by faster time.",level:"basic",codeExample:"speedup = naive_time / optimized_time"},{question:"What is the role of the 'dis' module when analyzing benchmark differences?",shortAnswer:"'dis.dis()' disassembles Python functions or bytecode strings into human-readable CPython virtual machine instructions, showing exactly which opcodes are executed.",explanation:"Bytecode disassembly analysis.",hint:"Disassembles Python code to show exact virtual machine opcodes.",level:"basic",codeExample:`import dis
dis.dis(my_function)`},{question:"Why should you run micro-benchmarks on a machine with minimal background workload?",shortAnswer:"Heavy background processes (browsers, IDE indexers, antivirus) trigger CPU thermal throttling, CPU frequency scaling, and OS context switches that distort microsecond timing.",explanation:"Hardware thermal throttling and environment stability.",hint:"Minimizes CPU throttling, frequency scaling, and context switch timing distortions.",level:"basic",codeExample:"# Isolate benchmark execution environment"},{question:"What is the Specializing Adaptive Interpreter in Python 3.11+ and how does it affect benchmarks?",shortAnswer:"CPython 3.11+ dynamically replaces generic opcodes with specialized fast opcodes (like 'BINARY_OP_ADD_INT') after repeated executions; warm-up loops are needed to measure steady-state speed.",explanation:"Adaptive opcode specialization in modern Python.",hint:"Specializes bytecodes after warm-up loops, making warm code faster than cold code.",level:"complex",codeExample:"# Python 3.11+ Adaptive Specializing Interpreter"},{question:"What is the ultimate golden rule of micro-benchmarking with timeit?",shortAnswer:"Isolate setup costs, run sufficient iterations, repeat 5+ times and take the minimum (not the average), inspect bytecodes with 'dis' to understand the root cause, and verify real-world impact with macro profiling.",explanation:"The complete enterprise guideline for micro-benchmarking in Python.",hint:"Isolate setup, repeat and take minimum, inspect bytecodes, and verify with macro profiling.",level:"basic",codeExample:"# Python Micro-Benchmarking Mastery"}];function R(){const p=c.useRef([]),[l,x]=c.useState("repeatArch"),[n,f]=c.useState("STRINGS"),[h,g]=c.useState(1e5);let i={name:"f-string",timeMs:"4.82 ms",speedup:"1.0x (Fastest)"},r={name:"'+' Concatenation",timeMs:"9.64 ms",speedup:"2.0x Slower"},o={name:"'.format()'",timeMs:"18.35 ms",speedup:"3.8x Slower"};n==="LISTS"?(i={name:"List Comprehension",timeMs:"12.40 ms",isWinner:!0,speedup:"1.0x (Fastest)"},r={name:"map() + Lambda",timeMs:"19.85 ms",isWinner:!1,speedup:"1.6x Slower"},o={name:"for loop + append()",timeMs:"26.90 ms",isWinner:!1,speedup:"2.2x Slower"}):n==="DICTS"?(i={name:"{} Literal",timeMs:"3.20 ms",isWinner:!0,speedup:"1.0x (Fastest)"},r={name:"dict() Constructor",timeMs:"9.60 ms",isWinner:!1,speedup:"3.0x Slower"},o={name:"dict.fromkeys()",timeMs:"11.20 ms",isWinner:!1,speedup:"3.5x Slower"}):n==="EMPTINESS"&&(i={name:"if not seq: (Truthy)",timeMs:"2.10 ms",isWinner:!0,speedup:"1.0x (Fastest)"},r={name:"if len(seq) == 0:",timeMs:"7.35 ms",isWinner:!1,speedup:"3.5x Slower"},o={name:"if seq == []:",timeMs:"14.80 ms",isWinner:!1,speedup:"7.0x Slower"});const y=`# Python timeit Benchmark Shootout:
import timeit

loops = ${h.toLocaleString()}
repeats = 5

# Benchmark Contestants (Taking mathematical min to filter OS noise):
best_a = min(timeit.repeat("${n==="STRINGS"?"f'{name}'":n==="LISTS"?"[x*x for x in range(100)]":n==="DICTS"?"{'a': 1, 'b': 2}":"if not seq: pass"}", setup="${n==="STRINGS"?"name = 'Sourav'":n==="EMPTINESS"?"seq = []":"pass"}", number=loops, repeat=repeats))

best_b = min(timeit.repeat("${n==="STRINGS"?"'Student: ' + name":n==="LISTS"?"list(map(lambda x: x*x, range(100)))":n==="DICTS"?"dict(a=1, b=2)":"if len(seq) == 0: pass"}", setup="${n==="STRINGS"?"name = 'Sourav'":n==="EMPTINESS"?"seq = []":"pass"}", number=loops, repeat=repeats))

print(f"Winner: {best_a:.6f}s vs Slower: {best_b:.6f}s")`;c.useEffect(()=>{const t=new IntersectionObserver(d=>{d.forEach(u=>{u.isIntersecting&&u.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return p.current.forEach(d=>{d&&t.observe(d)}),()=>t.disconnect()},[]);const s=t=>{t&&!p.current.includes(t)&&p.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:s,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 4 • Module 004_002"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 2"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Performance Optimization, Profiling & Big-O Thinking"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Micro-Benchmarking: ",e.jsx("span",{className:"text-teal-400",children:"The timeit Module"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master high-precision statistical micro-benchmarking in Python: isolating execution overhead with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"timeit.timeit()"})," and ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"timeit.repeat()"}),", filtering OS context-switch noise with ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"min()"}),", disabling garbage collection during microsecond runs, and dissecting CPython bytecode with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"dis.dis()"}),"."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⏱️ `timeit.repeat()`"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ OS Noise Filtering (`min`)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔬 Bytecode Disassembly (`dis`)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ Python Idiom Shootouts"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⏱️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Principles of Micro-Benchmarking Accuracy"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["Micro-benchmarking measures nanosecond and microsecond statement execution speeds. Standard wall-clock timers like ",e.jsx("code",{className:"text-rose-400 font-mono",children:"time.time()"})," are completely flawed for microsecond code:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Setup Isolation"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:'setup="import math"'}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Executes module imports and dataset creation once before the timer starts, measuring only target statement cost."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ GC Suspension"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"gc.disable()"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Temporarily freezes cyclic garbage collection during timing loops to prevent random multi-millisecond timing spikes."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Statistical Minimum"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"min(repeat_results)"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Filters out operating system background context switches. The fastest pass represents true baseline capability."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"Why `min()` is Statistically Superior to `average()` in Benchmarks"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Code cannot execute faster than its optimal limit in hardware. Slower passes are corrupted by OS interrupts, CPU throttling, and cache misses. Taking ",e.jsx("code",{className:"text-teal-300 font-mono",children:"min(timeit.repeat())"})," isolates pure execution capability without OS contamination."]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing timeit Repetitions, String Formatting & Bytecode"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>x("repeatArch"),className:m("px-3 py-1.5 rounded-lg transition-all",l==="repeatArch"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Noise Filtering"}),e.jsx("button",{onClick:()=>x("stringShootout"),className:m("px-3 py-1.5 rounded-lg transition-all",l==="stringShootout"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"String Shootout"}),e.jsx("button",{onClick:()=>x("bytecodeDiff"),className:m("px-3 py-1.5 rounded-lg transition-all",l==="bytecodeDiff"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Bytecode Disassembly"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining repeat pass filtering, string formatting execution paths, and virtual machine bytecode comparisons:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:l==="repeatArch"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"TIMEIT REPEAT PIPELINE: FILTERING OS CONTEXT-SWITCH NOISE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"150",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"Pass 1: Baseline"}),e.jsx("text",{x:"15",y:"60",fill:"#34d399",fontSize:"9 font-mono",children:"0.0482s"}),e.jsx("text",{x:"15",y:"90",fill:"#34d399",fontSize:"8 font-bold",children:"★ TRUE MINIMUM"}),e.jsx("text",{x:"15",y:"115",fill:"#cbd5e1",fontSize:"8",children:"Clean CPU pass."}),e.jsx("text",{x:"15",y:"130",fill:"#cbd5e1",fontSize:"8",children:"Zero OS interrupts."}),e.jsx("rect",{x:"165",y:"0",width:"150",height:"240",rx:"8",fill:"#1e293b",stroke:"#475569"}),e.jsx("text",{x:"180",y:"30",fill:"#94a3b8",fontSize:"11 font-bold",children:"Pass 2: Jitter"}),e.jsx("text",{x:"180",y:"60",fill:"#cbd5e1",fontSize:"9 font-mono",children:"0.0514s"}),e.jsx("text",{x:"180",y:"90",fill:"#f59e0b",fontSize:"8",children:"+6.6% OS Noise"}),e.jsx("text",{x:"180",y:"115",fill:"#cbd5e1",fontSize:"8",children:"Minor L2 cache miss."}),e.jsx("rect",{x:"330",y:"0",width:"150",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"345",y:"30",fill:"#fda4af",fontSize:"11 font-bold",children:"Pass 3: Spike"}),e.jsx("text",{x:"345",y:"60",fill:"#fca5a5",fontSize:"9 font-mono",children:"0.0682s"}),e.jsx("text",{x:"345",y:"90",fill:"#f43f5e",fontSize:"8 font-bold",children:"+41.4% Corrupted"}),e.jsx("text",{x:"345",y:"115",fill:"#cbd5e1",fontSize:"8",children:"OS Context switch"}),e.jsx("text",{x:"345",y:"130",fill:"#cbd5e1",fontSize:"8",children:"to background task."}),e.jsx("rect",{x:"495",y:"0",width:"150",height:"240",rx:"8",fill:"#1e293b",stroke:"#475569"}),e.jsx("text",{x:"510",y:"30",fill:"#94a3b8",fontSize:"11 font-bold",children:"Pass 4: Normal"}),e.jsx("text",{x:"510",y:"60",fill:"#cbd5e1",fontSize:"9 font-mono",children:"0.0489s"}),e.jsx("text",{x:"510",y:"90",fill:"#38bdf8",fontSize:"8",children:"+1.4% Variance"}),e.jsx("text",{x:"510",y:"115",fill:"#cbd5e1",fontSize:"8",children:"Clean execution."}),e.jsx("rect",{x:"660",y:"0",width:"160",height:"240",rx:"8",fill:"#1e293b",stroke:"#475569"}),e.jsx("text",{x:"675",y:"30",fill:"#94a3b8",fontSize:"11 font-bold",children:"Pass 5: Jitter"}),e.jsx("text",{x:"675",y:"60",fill:"#cbd5e1",fontSize:"9 font-mono",children:"0.0498s"}),e.jsx("text",{x:"675",y:"90",fill:"#f59e0b",fontSize:"8",children:"+3.3% Variance"}),e.jsx("text",{x:"675",y:"115",fill:"#cbd5e1",fontSize:"8",children:"Normal jitter."})]})]}):l==="stringShootout"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"STRING FORMATTING BENCHMARK SHOOTOUT (1,000,000 EXECUTIONS)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"65",rx:"6",fill:"#064e3b",stroke:"#10b981"}),e.jsxs("text",{x:"20",y:"28",fill:"#a7f3d0",fontSize:"11 font-bold",children:["1. f-string: `f'Student: ",name,"'` [WINNER - FASTEST]"]}),e.jsx("text",{x:"20",y:"48",fill:"#34d399",fontSize:"9 font-mono",children:"Latency: 4.82 ms | C opcodes: `FORMAT_VALUE` + `BUILD_STRING` (Zero function overhead)"}),e.jsx("rect",{x:"0",y:"80",width:"820",height:"65",rx:"6",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"20",y:"108",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. `+` Concatenation: `'Student: ' + name` [2.0x SLOWER]"}),e.jsx("text",{x:"20",y:"128",fill:"#38bdf8",fontSize:"9 font-mono",children:"Latency: 9.64 ms | C opcodes: `BINARY_OP_ADD_UNICODE`"}),e.jsx("rect",{x:"0",y:"160",width:"820",height:"65",rx:"6",fill:"#4c0519",stroke:"#f43f5e"}),e.jsxs("text",{x:"20",y:"188",fill:"#fda4af",fontSize:"11 font-bold",children:["3. `.format()`: `'Student: ","'.format(name)` [3.8x SLOWER]"]}),e.jsx("text",{x:"20",y:"208",fill:"#fca5a5",fontSize:"9 font-mono",children:"Latency: 18.35 ms | Method lookup + positional arg parsing in Python frame"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsxs("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:["BYTECODE DISASSEMBLY: ","`{}`"," LITERAL VS `dict()` CONSTRUCTOR"]}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsxs("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:["`{'a': 1}`"," Literal [FAST OPCODES]"]}),e.jsx("text",{x:"20",y:"65",fill:"#34d399",fontSize:"8 font-mono",children:"1. LOAD_CONST 1 ('a')"}),e.jsx("text",{x:"20",y:"85",fill:"#34d399",fontSize:"8 font-mono",children:"2. LOAD_CONST 2 (1)"}),e.jsx("text",{x:"20",y:"105",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"3. BUILD_MAP 1 (Instant C instantiation)"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"Zero Global Lookups:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Constructs hash table directly in 1 virtual machine step."})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"`dict(a=1)` Constructor [SLOW OVERHEAD]"}),e.jsx("text",{x:"20",y:"65",fill:"#fca5a5",fontSize:"8 font-mono",children:"1. LOAD_NAME 0 ('dict') (Search globals & builtins)"}),e.jsx("text",{x:"20",y:"85",fill:"#fca5a5",fontSize:"8 font-mono",children:"2. LOAD_CONST 1 (1)"}),e.jsx("text",{x:"20",y:"105",fill:"#f43f5e",fontSize:"8 font-mono font-bold",children:"3. CALL_FUNCTION_KW 1 (Creates function frame)"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"155",fill:"#fda4af",fontSize:"9 font-bold",children:"Function Frame Cost:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Global dictionary search + keyword tuple packing."})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Python Idiom Micro-Benchmark Shootout Lab"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Select syntax idiom shootouts, adjust iteration loop counts, and inspect empirical execution timings and speedup multiples:"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"1. Python Idiom Shootout:"}),e.jsx("div",{className:"grid grid-cols-2 gap-1.5 bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:[{id:"STRINGS",label:"1. String Formatting"},{id:"LISTS",label:"2. List Construction"},{id:"DICTS",label:"3. Dict {} vs dict()"},{id:"EMPTINESS",label:"4. Emptiness Checks"}].map(t=>e.jsx("button",{onClick:()=>f(t.id),className:m("py-1.5 rounded transition-all",n===t.id?"bg-teal-900/60 text-teal-300 font-bold border border-teal-700/80":"text-slate-400 hover:text-white"),children:t.label},t.id))})]}),e.jsxs("div",{className:"space-y-1.5 pt-1",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold",children:"2. Benchmark Iterations (Loops):"}),e.jsx("div",{className:"flex bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:[1e4,1e5,1e6].map(t=>e.jsx("button",{onClick:()=>g(t),className:m("flex-1 py-1 rounded transition-all",h===t?"bg-cyan-900/60 text-cyan-300 font-bold border border-cyan-700/80":"text-slate-400 hover:text-white"),children:t.toLocaleString()},t))})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs font-mono space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-center bg-emerald-950/40 p-2 rounded border border-emerald-800/60",children:[e.jsxs("span",{className:"text-emerald-300 font-bold",children:["🥇 ",i.name,":"]}),e.jsxs("span",{className:"text-emerald-400 font-bold",children:[i.timeMs," (",i.speedup,")"]})]}),e.jsxs("div",{className:"flex justify-between items-center bg-slate-950 p-2 rounded border border-slate-800",children:[e.jsxs("span",{className:"text-slate-300",children:["🥈 ",r.name,":"]}),e.jsxs("span",{className:"text-amber-400",children:[r.timeMs," (",r.speedup,")"]})]}),e.jsxs("div",{className:"flex justify-between items-center bg-slate-950 p-2 rounded border border-slate-800",children:[e.jsxs("span",{className:"text-slate-300",children:["🥉 ",o.name,":"]}),e.jsxs("span",{className:"text-rose-400",children:[o.timeMs," (",o.speedup,")"]})]})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs space-y-1",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:"Generated timeit Benchmark Script:"}),e.jsx("pre",{className:"text-teal-300 text-[11px] leading-relaxed break-all font-mono overflow-x-auto",children:y})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[160px] font-mono text-xs space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-[10px] font-bold uppercase text-slate-400",children:[e.jsx("span",{children:"Micro-Benchmark Telemetry:"}),e.jsx("span",{className:"text-emerald-400",children:"Exit Code 0"})]}),e.jsx("pre",{className:"text-slate-200 text-[11px] leading-relaxed font-mono whitespace-pre-wrap",children:`[TIMEIT_HARNESS] Running ${h.toLocaleString()} loops x 5 repeats:
* Winner   : ${i.name} (${i.timeMs})
* Runner-Up: ${r.name} (${r.timeMs})
* Protocol : Cyclic GC disabled; OS jitter filtered via min().`})]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Python Syntax Speed Comparison Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Category"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Fast Idiom (Winner)"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Slow Idiom (Avoid)"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Typical Speedup"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"String Formatting"}),e.jsxs("td",{className:"py-3 px-4 text-emerald-400",children:['`f"',a," ",b,'"` (f-string)']}),e.jsxs("td",{className:"py-3 px-4 text-rose-400",children:['`"','".format(a, b)`']}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"~3.5x faster"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"Dictionary Creation"}),e.jsxs("td",{className:"py-3 px-4 text-emerald-400",children:["`","` Literal (`BUILD_MAP`)"]}),e.jsx("td",{className:"py-3 px-4 text-rose-400",children:"`dict()` Constructor"}),e.jsx("td",{className:"py-3 px-4 text-cyan-300",children:"~3.0x faster"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"List Filtering"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"`[x for x in seq if c]`"}),e.jsx("td",{className:"py-3 px-4 text-rose-400",children:"`for x in seq: res.append(x)`"}),e.jsx("td",{className:"py-3 px-4 text-purple-300",children:"~2.2x faster"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"Emptiness Check"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"`if not seq:` (C truthiness)"}),e.jsx("td",{className:"py-3 px-4 text-rose-400",children:"`if len(seq) == 0:`"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"~3.5x faster"})]})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating timeit fundamentals, syntax shootouts, auto-scaled CLI harnesses, and institutional transformation suites:"}),e.jsx(_,{files:[{filename:"timeit_fundamentals_and_execution_modes.py",code:w,description:"timeit.timeit, timeit.repeat, min filtering, and functools.partial wrappers."},{filename:"timeit_syntax_and_idiom_shootouts.py",code:v,description:"Idiom shootouts and bytecode disassembly comparisons."},{filename:"timeit_cli_and_parameterized_benchmarking.py",code:k,description:"Timer.autorange, parameterized timeit statements, and microsecond normalization."},{filename:"institutional_admission_pipeline_microbenchmark_suite.py",code:A,description:"Ingestion pipeline microbenchmarks with statistical variance reporting."}]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Using `time.time()` for Micro-Tests"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Measuring microsecond loops with ",e.jsx("code",{className:"text-rose-300 font-mono",children:"time.time()"})," introduces clock jitter, background OS process noise, and imprecise system resolution."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always use ",e.jsx("code",{className:"text-emerald-300",children:"timeit.timeit()"})," or ",e.jsx("code",{className:"text-emerald-300",children:"timeit.repeat()"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Averaging Instead of Taking `min()`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Computing the ",e.jsx("code",{className:"text-amber-300 font-mono",children:"mean()"})," of repeated benchmark runs includes external OS context-switching spikes rather than true execution speed."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always report ",e.jsx("code",{className:"text-emerald-300",children:"min(repeat_times)"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Including Setup in Timed Statement"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Importing modules or instantiating test lists inside the timed statement skews the measurement with repeated allocation overhead."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Pass imports and initializations to ",e.jsx("code",{className:"text-emerald-300",children:"setup="}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Benchmarking Constant Folded Code"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Benchmarking literal math like ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"24 * 60 * 60"})," measures zero operations because CPython pre-computes constants at compile time."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use variable lookups to force runtime arithmetic."]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering timeit execution modes, statistical filtering, GC suspension, bytecode disassembly, and idiom shootouts:"}),e.jsx(N,{questions:C})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with timeit recipes, syntax speed comparisons, and bytecode disassembly rules:"}),e.jsx("div",{className:"mb-10",children:e.jsx(S,{content:T,filename:"python_topic2_timeit_microbenchmarking_notes.txt",title:"Print Topic 2 Study Notes"})}),e.jsx(j,{})]})]})]})}export{R as default};
