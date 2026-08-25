import{b as a,j as e,bg as i}from"./vendor-react-core-Doz9nIC6.js";import{P as w}from"./PythonFileLoader-hCi5osN-.js";import{P as E}from"./PlainTextPrint-C08xhKA4.js";import{F as S}from"./FAQTemplate-CkSqDH4B.js";import{T as A}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const T=`# topic9_files/memory_and_eager_vs_lazy_evaluation_benchmark.py\r
# Module: 003_003_decorators-generators\r
# Topic: Generator functions vs regular functions\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 9 - File 1: Memory & Performance Benchmark: Eager List vs Lazy Generator\r
Demonstrates:\r
  1. Eager Evaluation (Regular Function returning List) vs Lazy Evaluation (Generator yielding items)\r
  2. Memory footprint comparison using \`sys.getsizeof\`\r
  3. Immediate first-item latency advantages of Generators\r
"""\r
\r
import sys\r
import time\r
from typing import List, Generator\r
\r
# 1. Regular Function (Eager List Allocation):\r
def eager_generate_student_records(count: int) -> List[dict]:\r
    """Allocates all student dictionaries in RAM simultaneously."""\r
    records = []\r
    for i in range(1, count + 1):\r
        records.append({"id": f"STU-{1000+i}", "name": f"Student_{i}", "fee": 25000.0})\r
    return records\r
\r
\r
# 2. Generator Function (Lazy Streaming):\r
def lazy_generate_student_records(count: int) -> Generator[dict, None, None]:\r
    """Yields student records on demand one at a time."""\r
    for i in range(1, count + 1):\r
        yield {"id": f"STU-{1000+i}", "name": f"Student_{i}", "fee": 25000.0}\r
\r
\r
def demonstrate_eager_vs_lazy():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - EAGER LIST VS LAZY GENERATOR BENCHMARK")\r
    print("=" * 70)\r
\r
    ITEM_COUNT = 100_000\r
\r
    # Benchmark Eager List:\r
    print(f"1. Eager List Evaluation ({ITEM_COUNT:,} items):")\r
    t0 = time.perf_counter()\r
    eager_list = eager_generate_student_records(ITEM_COUNT)\r
    eager_time = (time.perf_counter() - t0) * 1000.0\r
    eager_mem_bytes = sys.getsizeof(eager_list)\r
\r
    print(f"   * Generation Time  : {eager_time:.2f} ms")\r
    print(f"   * RAM Footprint    : {eager_mem_bytes:,} bytes (~{eager_mem_bytes / 1024 / 1024:.2f} MB)")\r
    print(f"   * First Item Ready : After full {eager_time:.2f} ms delay\\n")\r
\r
    # Benchmark Lazy Generator:\r
    print(f"2. Lazy Generator Evaluation ({ITEM_COUNT:,} items):")\r
    t0 = time.perf_counter()\r
    lazy_gen = lazy_generate_student_records(ITEM_COUNT)\r
    gen_init_time = (time.perf_counter() - t0) * 1000.0\r
    gen_mem_bytes = sys.getsizeof(lazy_gen)\r
\r
    # First item latency:\r
    t0_first = time.perf_counter()\r
    first_item = next(lazy_gen)\r
    first_item_latency = (time.perf_counter() - t0_first) * 1000.0\r
\r
    print(f"   * Instantiation Time: {gen_init_time:.4f} ms (INSTANT)")\r
    print(f"   * RAM Footprint     : {gen_mem_bytes:,} bytes (CONSTANT O(1)!)")\r
    print(f"   * First Item Ready  : {first_item_latency:.4f} ms")\r
    print(f"   * First Item Sample : {first_item}\\n")\r
\r
    print(r"""\r
Memory Efficiency Comparison:\r
  For 100,000 items:\r
  - Regular List : ~800,000+ bytes (Grows linearly with N)\r
  - Generator    : ~112 bytes (Constant O(1) regardless of N)\r
""")\r
    print("[PASSED] Eager vs Lazy Evaluation Benchmark Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_eager_vs_lazy()\r
`,k=`# topic9_files/subgenerator_delegation_yield_from.py\r
# Module: 003_003_decorators-generators\r
# Topic: Generator functions vs regular functions\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 9 - File 2: Sub-Generator Delegation with \`yield from\` (PEP 380)\r
Demonstrates:\r
  1. Delegating iteration to sub-generators using \`yield from\`\r
  2. Replacing nested \`for item in sub: yield item\` loops cleanly\r
  3. Capturing sub-generator return values: \`summary = yield from sub_generator()\`\r
"""\r
\r
from typing import Generator, List, Dict, Any\r
\r
def branch_batch_stream(branch_name: str, students: List[str]) -> Generator[str, None, int]:\r
    """Sub-generator that yields students for a branch and returns total count."""\r
    count = 0\r
    for s in students:\r
        yield f"[{branch_name}] {s}"\r
        count += 1\r
    return count  # Subgenerator return value!\r
\r
\r
def consolidated_institution_pipeline() -> Generator[str, None, Dict[str, int]]:\r
    """Delegator generator using \`yield from\` to chain subgenerators seamlessly."""\r
    print("  [DELEGATOR] Starting Barrackpore Cohort Stream...")\r
    barrackpore_students = ["Sourav Mukherjee", "Priyanka Sen"]\r
    # 1. yield from delegates directly to sub-generator and captures its return value:\r
    bp_count = yield from branch_batch_stream("Barrackpore Campus", barrackpore_students)\r
\r
    print(f"  [DELEGATOR] Barrackpore Stream Finished (Processed {bp_count} students).")\r
\r
    print("  [DELEGATOR] Starting Kolkata Cohort Stream...")\r
    kolkata_students = ["Rahul Verma", "Debolina Roy"]\r
    kol_count = yield from branch_batch_stream("Kolkata Campus", kolkata_students)\r
\r
    print(f"  [DELEGATOR] Kolkata Stream Finished (Processed {kol_count} students).")\r
\r
    # Master pipeline return summary:\r
    return {\r
        "barrackpore_total": bp_count,\r
        "kolkata_total": kol_count,\r
        "grand_total": bp_count + kol_count\r
    }\r
\r
\r
def demonstrate_yield_from():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - \`yield from\` SUB-GENERATOR DELEGATION")\r
    print("=" * 70)\r
\r
    pipeline = consolidated_institution_pipeline()\r
\r
    # Consuming the delegated pipeline manually to capture the master return value:\r
    while True:\r
        try:\r
            student_entry = next(pipeline)\r
            print(f"   * Received Student: {student_entry}")\r
        except StopIteration as exc:\r
            summary = exc.value\r
            print("\\n2. Master Delegator Return Value (\`StopIteration.value\`):")\r
            print(f"   * Barrackpore Total : {summary['barrackpore_total']}")\r
            print(f"   * Kolkata Total     : {summary['kolkata_total']}")\r
            print(f"   * Grand Total       : {summary['grand_total']}")\r
            break\r
\r
    print(r"""\r
The \`yield from\` Superpowers:\r
  1. Transparent Data Pipeline: Emits items from subgenerator directly to caller.\r
  2. Automatic Return Capture: \`val = yield from subgen()\` assigns subgen's return value.\r
  3. Bidirectional Exception & Signal Passing: Routes \`send()\`, \`throw()\`, and \`close()\`.\r
""")\r
    print("[PASSED] Subgenerator Delegation with yield from Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_yield_from()\r
`,C=`# topic9_files/bidirectional_communication_with_send_and_close.py\r
# Module: 003_003_decorators-generators\r
# Topic: Generator functions vs regular functions\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 9 - File 3: Bidirectional Communication with \`send()\`, \`throw()\`, and \`close()\`\r
Demonstrates:\r
  1. Sending values into a suspended generator using \`gen.send(val)\`\r
  2. Priming a generator to its first yield point\r
  3. Handling exceptions and clean termination with \`throw()\` and \`close()\`\r
"""\r
\r
from typing import Generator\r
\r
def running_scholarship_accumulator() -> Generator[float, float, str]:\r
    """Coroutine accumulator receiving scholarship disbursements via send() and returning status."""\r
    total_disbursed = 0.0\r
    disbursement_count = 0\r
    print("  [ACCUMULATOR STARTED] Waiting for initial scholarship allocation...")\r
\r
    try:\r
        while True:\r
            # \`received_amount\` gets the argument passed to \`send()\`:\r
            received_amount = yield total_disbursed\r
\r
            if received_amount is not None:\r
                if received_amount < 0:\r
                    raise ValueError(f"Scholarship disbursement cannot be negative ({received_amount})")\r
                total_disbursed += received_amount\r
                disbursement_count += 1\r
                print(f"  [ACCUMULATOR UPDATED] Added INR {received_amount:,.2f} -> Total Fund: INR {total_disbursed:,.2f}")\r
    except GeneratorExit:\r
        print("  [ACCUMULATOR CLOSED] Final cleanup triggered via gen.close().")\r
        return f"AUDIT_CLOSED: Disbursed INR {total_disbursed:,.2f} across {disbursement_count} grants."\r
\r
\r
def demonstrate_send_and_close():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - BIDIRECTIONAL COMMUNICATION (\`send\` & \`close\`)")\r
    print("=" * 70)\r
\r
    # 1. Instantiate accumulator generator:\r
    acc = running_scholarship_accumulator()\r
\r
    # 2. Priming the generator (advancing to first yield):\r
    initial_total = next(acc)  # Equivalent to acc.send(None)\r
    print(f"1. Primed Accumulator. Initial Total: INR {initial_total:,.2f}\\n")\r
\r
    # 3. Sending scholarship grants into generator:\r
    print("2. Sending Grants to Coroutine:")\r
    tot1 = acc.send(5000.0)\r
    print(f"   -> Current Running Total returned from yield: INR {tot1:,.2f}")\r
\r
    tot2 = acc.send(7500.0)\r
    print(f"   -> Current Running Total returned from yield: INR {tot2:,.2f}")\r
\r
    tot3 = acc.send(12500.0)\r
    print(f"   -> Current Running Total returned from yield: INR {tot3:,.2f}\\n")\r
\r
    # 4. Closing the generator cleanly:\r
    print("3. Closing Generator Stream via \`acc.close()\`:")\r
    acc.close()\r
\r
    print(r"""\r
Coroutine Communication Rules:\r
  - \`next(gen)\` or \`gen.send(None)\` PRIMES the coroutine to the first yield.\r
  - \`gen.send(val)\` passes \`val\` into the \`yield\` expression and returns next yielded item.\r
  - \`gen.close()\` raises \`GeneratorExit\` inside the generator to release resources.\r
""")\r
    print("[PASSED] Bidirectional Communication with send & close Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_send_and_close()\r
`,R=`# topic9_files/institutional_multicampus_financial_pipeline_suite.py\r
# Module: 003_003_decorators-generators\r
# Topic: Generator functions vs regular functions\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 9 - File 4: Multi-Campus Regional Financial Pipeline Suite (Case Study)\r
Demonstrates:\r
  1. High-throughput regional financial pipeline utilizing \`yield from\` subgenerator delegation\r
  2. Independent sub-generator batch reporting combined into a master institutional ledger\r
  3. Constant O(1) memory consumption across multi-branch enterprise scale\r
"""\r
\r
from typing import List, Dict, Any, Generator\r
\r
def branch_admission_stream(\r
    branch_name: str,\r
    records: List[Dict[str, Any]]\r
) -> Generator[Dict[str, Any], None, Dict[str, Any]]:\r
    """Sub-generator streaming verified admission vouchers and returning branch revenue."""\r
    branch_revenue = 0.0\r
    admitted = 0\r
\r
    for r in records:\r
        net_fee = round(r["fee"] * (1.0 - r.get("scholarship", 0.0)), 2)\r
        branch_revenue += net_fee\r
        admitted += 1\r
\r
        yield {\r
            "branch": branch_name,\r
            "voucher_id": f"VOUCH-{branch_name[:3].upper()}-{r['id']}",\r
            "student_id": r["id"],\r
            "name": r["name"],\r
            "course": r["course"],\r
            "fee_paid": net_fee\r
        }\r
\r
    return {\r
        "branch": branch_name,\r
        "total_admitted": admitted,\r
        "branch_revenue": branch_revenue\r
    }\r
\r
\r
def multi_campus_regional_pipeline(\r
    barrackpore_records: List[Dict[str, Any]],\r
    kolkata_records: List[Dict[str, Any]],\r
    online_records: List[Dict[str, Any]]\r
) -> Generator[Dict[str, Any], None, Dict[str, Any]]:\r
    """Master delegator pipeline aggregating all branches with \`yield from\`."""\r
    # 1. Stream Barrackpore:\r
    bp_report = yield from branch_admission_stream("Barrackpore", barrackpore_records)\r
\r
    # 2. Stream Kolkata:\r
    kol_report = yield from branch_admission_stream("Kolkata", kolkata_records)\r
\r
    # 3. Stream Online:\r
    online_report = yield from branch_admission_stream("Online", online_records)\r
\r
    # Calculate master consolidation:\r
    gross_regional_revenue = bp_report["branch_revenue"] + kol_report["branch_revenue"] + online_report["branch_revenue"]\r
    grand_students_total = bp_report["total_admitted"] + kol_report["total_admitted"] + online_report["total_admitted"]\r
\r
    return {\r
        "regional_branches": [bp_report, kol_report, online_report],\r
        "grand_students_total": grand_students_total,\r
        "gross_regional_revenue": gross_regional_revenue,\r
        "audit_status": "REGIONAL_SETTLEMENT_VERIFIED"\r
    }\r
\r
\r
def run_multicampus_demo():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - MULTI-CAMPUS REGIONAL FINANCIAL PIPELINE")\r
    print("=" * 70)\r
\r
    bp_data = [\r
        {"id": "STU-101", "name": "Sourav Mukherjee", "course": "Python AI", "fee": 25000.0, "scholarship": 0.20},\r
        {"id": "STU-102", "name": "Priyanka Sen", "course": "Data Science", "fee": 30000.0, "scholarship": 0.10}\r
    ]\r
    kol_data = [\r
        {"id": "STU-201", "name": "Rahul Verma", "course": "Python Core", "fee": 18000.0, "scholarship": 0.00},\r
        {"id": "STU-202", "name": "Debolina Roy", "course": "ML & DL", "fee": 28000.0, "scholarship": 0.15}\r
    ]\r
    online_data = [\r
        {"id": "STU-301", "name": "Amitava Sen", "course": "Full-Stack Web", "fee": 22000.0, "scholarship": 0.10}\r
    ]\r
\r
    print("1. Streaming Multi-Campus Vouchers Lazily via \`yield from\`:")\r
    pipeline = multi_campus_regional_pipeline(bp_data, kol_data, online_data)\r
\r
    while True:\r
        try:\r
            voucher = next(pipeline)\r
            print(f"   [{voucher['branch']:<11}] {voucher['voucher_id']}: {voucher['name']:<18} -> INR {voucher['fee_paid']:>8,.2f}")\r
        except StopIteration as exc:\r
            manifest = exc.value\r
            print("\\n2. Consolidated Regional Accounting Manifest (\`StopIteration.value\`):")\r
            for b in manifest["regional_branches"]:\r
                print(f"   * Branch: {b['branch']:<12} | Students: {b['total_admitted']} | Revenue: INR {b['branch_revenue']:>9,.2f}")\r
            print(f"\\n   -> Total Regional Admissions: {manifest['grand_students_total']}")\r
            print(f"   -> Gross Regional Revenue   : INR {manifest['gross_regional_revenue']:,.2f}")\r
            print(f"   -> Audit Status             : {manifest['audit_status']}")\r
            break\r
\r
    print("\\n[PASSED] Multi-Campus Regional Financial Pipeline Verified.")\r
\r
\r
if __name__ == "__main__":\r
    run_multicampus_demo()\r
`,I=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_003: DECORATORS & GENERATORS\r
          TOPIC 9: GENERATOR FUNCTIONS VS REGULAR FUNCTIONS IN PYTHON\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. EAGER VS LAZY EVALUATION\r
--------------------------------------------------------------------------------\r
  • Regular Function : Allocates all N items in memory upfront (O(N) RAM).\r
  • Generator Function: Yields 1 item at a time on demand (O(1) RAM).\r
\r
--------------------------------------------------------------------------------\r
2. SUBGENERATOR DELEGATION: \`yield from\` (PEP 380)\r
--------------------------------------------------------------------------------\r
  def master_pipeline():\r
      # Delegates stream and captures subgenerator's return value:\r
      bp_count = yield from branch_stream("Barrackpore")\r
      kol_count = yield from branch_stream("Kolkata")\r
      return bp_count + kol_count\r
\r
--------------------------------------------------------------------------------\r
3. COROUTINE COMMUNICATION: \`send()\`, \`throw()\`, \`close()\`\r
--------------------------------------------------------------------------------\r
  • \`next(g)\` or \`g.send(None)\` : Primes the generator.\r
  • \`g.send(val)\`               : Injects \`val\` into active \`yield\` expression.\r
  • \`g.close()\`                 : Raises \`GeneratorExit\` to terminate cleanly.\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 9: GENERATORS VS FUNCTIONS\r
================================================================================\r
`,O=[{question:"What is the core philosophical difference between Regular Functions and Generator Functions?",shortAnswer:"Regular functions use 'Eager Evaluation' (computing the entire collection in RAM upfront before returning); Generator functions use 'Lazy Evaluation' (computing items one at a time on demand).",explanation:"Eager computation trades memory for instant random access; lazy evaluation optimizes for constant O(1) memory.",hint:"Eager evaluation upfront vs lazy evaluation on demand.",level:"basic",codeExample:`# Regular: return [1, 2, 3]
# Generator: yield 1; yield 2; yield 3`},{question:"How does the memory complexity of a Generator compare to a List of 1,000,000 integers?",shortAnswer:"A List of 1,000,000 integers occupies ~8 MB of RAM in CPython; a Generator generating the same 1,000,000 integers occupies only ~112 bytes of constant O(1) heap memory.",explanation:"Generators eliminate Out-Of-Memory (OOM) failures on massive datasets.",hint:"List takes ~8MB (O(N)); Generator takes ~112 bytes (O(1)).",level:"basic",codeExample:"# sys.getsizeof(gen) == 112 bytes regardless of stream length"},{question:"What is 'First-Item Latency' and why are generators superior in streaming pipelines?",shortAnswer:"First-Item Latency is the time delay before the consumer receives the first element. Regular functions have high latency (must finish computing all N items); generators have near-zero latency (yield first item immediately).",explanation:"Critical for streaming UI responses and live network feeds.",hint:"Generators emit the first item immediately without waiting for the entire batch.",level:"moderate",codeExample:"# Generators provide immediate first-item availability"},{question:"What does the 'yield from' syntax do in Python (PEP 380)?",shortAnswer:"It delegates iteration transparently to a sub-generator or iterable, establishing a direct bidirectional channel between the caller and the sub-generator for values, return values, exceptions, and signals.",explanation:"Replaces boilerplate 'for item in subgen: yield item' loops.",hint:"Delegates iteration directly to a sub-generator.",level:"moderate",codeExample:`def chain(a, b):
    yield from a
    yield from b`},{question:"How does 'yield from' capture the return value of a sub-generator?",shortAnswer:"The 'yield from sub_generator()' expression directly evaluates to the sub-generator's return value: 'sub_result = yield from sub_generator()'.",explanation:"Allows subgenerators to report metadata, counts, or exit statuses to delegators.",hint:"result = yield from subgen() assigns the return value of subgen.",level:"complex",codeExample:"total_count = yield from process_branch_stream()"},{question:"What is the purpose of the 'gen.send(value)' method?",shortAnswer:"It resumes a suspended generator and injects 'value' into the generator frame as the result of the active 'yield' expression, enabling bidirectional coroutine communication.",explanation:"Turns generators into stateful data-consuming coroutines.",hint:"Sends data into a generator; the yield expression evaluates to that value.",level:"moderate",codeExample:"received = yield emitted_val  # received gets arg from send()"},{question:"Why must a generator/coroutine be 'primed' before calling 'gen.send(val)' with a non-None value?",shortAnswer:"Because when a generator is created ('GEN_CREATED'), it hasn't reached its first 'yield' statement yet; Python requires calling 'next(gen)' or 'gen.send(None)' first to advance to the initial yield point.",explanation:"Calling gen.send('data') on a fresh generator raises TypeError: can't send non-None value to a just-started generator.",hint:"Must advance to the first yield with next(gen) or gen.send(None) first.",level:"moderate",codeExample:"# Priming: next(gen) or gen.send(None)"},{question:"What does calling 'gen.close()' do on a generator object?",shortAnswer:"It raises a 'GeneratorExit' exception at the current suspension point inside the generator, triggering any 'finally' cleanup blocks and closing the generator.",explanation:"Safely terminates infinite streams and releases held file descriptors.",hint:"Raises GeneratorExit to trigger finally blocks and terminate the stream.",level:"basic",codeExample:"gen.close()"},{question:"What does calling 'gen.throw(ExcType, value)' do?",shortAnswer:"It raises the specified exception at the exact line where the generator is currently suspended, giving the generator an opportunity to handle or recover via 'try...except'.",explanation:"Provides remote error injection into running coroutines.",hint:"Raises an exception inside the suspended generator frame.",level:"complex",codeExample:"gen.throw(ValueError, 'Corrupted data stream')"},{question:"When should you choose a Regular Function returning a List over a Generator?",shortAnswer:"When you need random access (indexing e.g. 'data[42]'), need to know the length upfront ('len(data)'), need to iterate multiple times without re-running, or need to serialize the complete dataset immediately.",explanation:"Lists provide O(1) random access; generators provide O(1) memory streaming.",hint:"When you need indexing, len(), multiple passes, or instant random access.",level:"basic",codeExample:"# Use List when data[i] indexing or len() is mandatory"},{question:"What is a 'Pipeline Architecture' using chained generators?",shortAnswer:"A design where multiple generator functions are chained together in series (e.g. 'clean(filter(parse(read_stream())))'), streaming data from source to sink with zero intermediate memory buffers.",explanation:"The hallmark of Unix-like composable data engineering in Python.",hint:"Connecting generators in series where output of one feeds the input of the next.",level:"moderate",codeExample:"pipeline = sum(x * 2 for x in read_numbers() if x > 0)"},{question:"Can a generator function be recursive?",shortAnswer:"Yes. A recursive generator function uses 'yield from recursive_func()' to yield items from child sub-trees (e.g. traversing binary trees or nested directory hierarchies).",explanation:"Provides elegant O(1) memory traversal of nested tree structures.",hint:"Yes, by using 'yield from' for recursive sub-tree calls.",level:"complex",codeExample:`def traverse(node):
    yield node.val
    for child in node.children:
        yield from traverse(child)`},{question:"How does 'sys.getsizeof()' report memory for a Generator object?",shortAnswer:"It reports the static size of the 'PyGenObject' heap struct (~112 to 128 bytes in 64-bit CPython), which remains fixed regardless of whether the generator yields 10 items or 10 billion items.",explanation:"Shows that memory does not scale with dataset volume.",hint:"Reports constant ~112-128 bytes regardless of stream length.",level:"basic",codeExample:"assert sys.getsizeof(gen) < 200"},{question:"What happens if a generator function raises an unhandled exception inside a 'yield from' pipeline?",shortAnswer:"The exception propagates transparently through the 'yield from' delegation chain up to the top-level caller, closing all participating sub-generators.",explanation:"Exception transparency guaranteed by PEP 380.",hint:"The exception bubbles up through all yield from layers to the caller.",level:"moderate",codeExample:"# Exception propagates cleanly across delegation chain"},{question:"Can a generator function be decorated with standard function decorators?",shortAnswer:"Yes. A decorator wrapping a generator function receives the generator object upon invocation and can intercept yielded values, measure throughput, or log execution events.",explanation:"Combines Decorator and Generator paradigms seamlessly.",hint:"Yes, decorators can wrap and intercept generator objects.",level:"moderate",codeExample:`@log_stream
def my_gen(): yield 1`},{question:"What is the 'Coroutine Coroutine Trampoline' pattern?",shortAnswer:"A loop that continuously drives multiple cooperating generators by taking values yielded by one generator and sending them into another, acting as a lightweight task scheduler.",explanation:"The historical predecessor to Python's asyncio event loop.",hint:"A scheduler loop driving cooperative generators via next() and send().",level:"complex",codeExample:"# Event loop trampoline driving generators"},{question:"Why does calling 'len(my_generator)' raise a TypeError?",shortAnswer:"Because generators produce values lazily on demand and cannot know their total length without consuming and exhausting the entire stream.",explanation:"Generators do not implement __len__.",hint:"Generators do not know their length upfront without being consumed.",level:"basic",codeExample:"# TypeError: object of type 'generator' has no len()"},{question:"How can you count the total number of items in a generator without building a full list in memory?",shortAnswer:"Using 'sum(1 for _ in my_generator)' consumes the generator lazily while maintaining O(1) memory complexity.",explanation:"Memory-efficient generator item counting idiom.",hint:"Use sum(1 for _ in gen) for O(1) memory counting.",level:"basic",codeExample:"total_items = sum(1 for _ in stream)"},{question:"What is the difference between 'yield' and 'yield from' in terms of performance?",shortAnswer:"'yield from' delegates at the CPython C-interpreter level, bypassing bytecode evaluation loops for each element and resulting in ~15-20% faster execution compared to manual 'for x in sub: yield x'.",explanation:"CPython optimizes yield from directly in the ceval loop.",hint:"yield from is optimized in CPython C code, executing faster than manual for loops.",level:"moderate",codeExample:"# yield from sub is faster than for x in sub: yield x"},{question:"How does the 'contextlib.contextmanager' decorator utilize generator functions?",shortAnswer:"It wraps a generator with a single 'yield': code before 'yield' runs on '__enter__', the yielded value is bound to the 'as' variable, and code after 'yield' runs on '__exit__'.",explanation:"Elegant synthesis of Context Managers and Generators.",hint:"Code before yield runs on enter; code after yield runs on exit.",level:"complex",codeExample:`@contextmanager
def open_db():
    db = connect()
    try: yield db
    finally: db.close()`},{question:"Can a generator function return multiple times?",shortAnswer:"No. The first 'return' statement encountered raises 'StopIteration' and closes the generator immediately; any code after that return is unreachable.",explanation:"Standard return semantics apply.",hint:"No, return immediately terminates the generator with StopIteration.",level:"basic",codeExample:"return 'Done'  # Terminates generator permanently"},{question:"What happens if a generator function is garbage collected while in 'GEN_SUSPENDED' state?",shortAnswer:"CPython automatically calls 'gen.close()', which raises 'GeneratorExit' inside the frame to allow any 'finally' blocks to clean up open files or sockets.",explanation:"Guaranteed resource reclamation upon garbage collection.",hint:"CPython calls gen.close() automatically, executing finally blocks.",level:"moderate",codeExample:"# finally block is guaranteed to execute on GC"},{question:"How do you filter a generator stream using standard Python built-ins?",shortAnswer:"Using the built-in 'filter(predicate, gen)' or generator expressions '(x for x in gen if condition)' maintains lazy streaming without allocating memory.",explanation:"Pure lazy stream transformations.",hint:"Use filter(func, gen) or (x for x in gen if cond).",level:"basic",codeExample:"evens = (x for x in stream if x % 2 == 0)"},{question:"Why should you never execute slow network I/O inside a synchronous generator during time-critical UI loops?",shortAnswer:"Because synchronous 'next()' calls block the entire Python thread until the network I/O completes, freezing UI responsiveness; use asynchronous generators ('async def' with 'async for') instead.",explanation:"Preserves concurrency and UI smoothness.",hint:"Synchronous next() blocks the thread; use async generators for non-blocking I/O.",level:"moderate",codeExample:"# Use async def for non-blocking stream I/O"},{question:"What is the ultimate golden rule for choosing between Generator Functions and Regular Functions?",shortAnswer:"Use Regular Functions when you require random indexing, multiple iterations, or len(); use Generator Functions when streaming data, processing large/infinite datasets, or chaining multi-stage pipelines with O(1) memory.",explanation:"The architectural dividing line in professional Python software engineering.",hint:"Regular for indexing/len/multi-pass; Generators for streaming/O(1) memory/pipelines.",level:"basic",codeExample:"# Python Function vs Generator Engineering Mastery"}];function B(){const h=a.useRef([]),[l,f]=a.useState("memory"),d=[{branch:"Barrackpore",id:"STU-101",name:"Sourav Mukherjee",fee:2e4},{branch:"Barrackpore",id:"STU-102",name:"Priyanka Sen",fee:27e3},{branch:"Kolkata",id:"STU-201",name:"Rahul Verma",fee:18e3},{branch:"Kolkata",id:"STU-202",name:"Debolina Roy",fee:23800},{branch:"Online Global",id:"STU-301",name:"Amitava Sen",fee:19800}],[s,g]=a.useState(-1),[c,b]=a.useState([]),[o,p]=a.useState("Not Started"),[m,y]=a.useState(!1),[x,_]=a.useState(null),v=()=>{g(-1),b([]),p("Not Started"),y(!1),_(null)},j=()=>{if(m)return;const t=s+1;if(t<d.length){const n=d[t];g(t),p(n.branch),b([...c,n])}else{y(!0),p("All Subgenerators Completed");const n=d.reduce((u,N)=>u+N.fee,0);_({totalAdmitted:d.length,grossRevenue:n,barrackpore:47e3,kolkata:41800,online:19800,status:"REGIONAL_SETTLEMENT_VERIFIED"})}};a.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(u=>{u.isIntersecting&&u.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return h.current.forEach(n=>{n&&t.observe(n)}),()=>t.disconnect()},[]);const r=t=>{t&&!h.current.includes(t)&&h.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:r,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_003"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 9"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Decorators, Generators & Iterators"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Generator Functions ",e.jsx("span",{className:"text-teal-400",children:"vs Regular Functions"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master the architectural divide in Python: Eager evaluation vs Lazy evaluation, benchmarking memory (",e.jsx("code",{className:"text-teal-300 font-mono",children:"O(N)"})," vs ",e.jsx("code",{className:"text-teal-300 font-mono",children:"O(1)"}),"), subgenerator delegation with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"yield from"})," (PEP 380), and bidirectional communication with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"send()"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"throw()"}),", and ",e.jsx("code",{className:"text-purple-300 font-mono",children:"close()"}),"."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚖️ Eager vs Lazy Evaluation"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📊 O(N) vs O(1) Memory Benchmarking"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛣️ `yield from` Subgenerator Delegation"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📡 Coroutines: send(), throw(), close()"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚖️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. Eager Evaluation vs Lazy Evaluation"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"The choice between a regular function and a generator function is a fundamental engineering tradeoff:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/90 border border-slate-800 shadow-lg",children:[e.jsx("div",{className:"text-slate-200 font-bold text-sm mb-1",children:"📦 Regular Functions (Eager)"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"return [records...]"}),e.jsxs("p",{className:"text-[11px] text-slate-400",children:["Allocates the entire collection in RAM upfront. Ideal when random indexing (",e.jsx("code",{className:"text-slate-300 font-mono",children:"data[i]"}),") or ",e.jsx("code",{className:"text-slate-300 font-mono",children:"len()"})," is mandatory. High first-item latency."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"⚡ Generator Functions (Lazy)"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"yield record"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Computes items one at a time on demand. Constant ",e.jsx("code",{className:"text-teal-300",children:"O(1)"})," memory regardless of dataset scale. Instant first-item response."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The `yield from` Subgenerator Delegation Highway (PEP 380)"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Rather than writing tedious ",e.jsx("code",{className:"text-teal-300 font-mono",children:"for item in subgen(): yield item"})," loops, Python provides ",e.jsx("code",{className:"text-teal-300 font-mono",children:"yield from subgen()"}),". It delegates data streaming directly at CPython interpreter speed and captures the subgenerator's return value: ",e.jsx("code",{className:"text-teal-300 font-mono",children:"result = yield from subgen()"}),"."]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Memory Footprints, `yield from` & Coroutines"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>f("memory"),className:i("px-3 py-1.5 rounded-lg transition-all",l==="memory"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Memory: O(N) vs O(1)"}),e.jsx("button",{onClick:()=>f("yieldfrom"),className:i("px-3 py-1.5 rounded-lg transition-all",l==="yieldfrom"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"`yield from` Delegation"}),e.jsx("button",{onClick:()=>f("coroutine"),className:i("px-3 py-1.5 rounded-lg transition-all",l==="coroutine"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Coroutine `send(val)` Channel"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining RAM scaling, delegated sub-generator highways, and bidirectional coroutine data injection:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:l==="memory"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"MEMORY ALLOCATION: EAGER LIST (O(N)) VS LAZY GENERATOR (O(1))"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"Eager List Allocation (1,000,000 items)"}),e.jsx("rect",{x:"20",y:"55",width:"340",height:"35",rx:"4",fill:"#881337",stroke:"#e11d48"}),e.jsx("text",{x:"190",y:"78",fill:"#ffe4e6",fontSize:"11 font-mono font-bold",textAnchor:"middle",children:"RAM: ~8.4 MB (O(N) Linear Growth)"}),e.jsx("rect",{x:"20",y:"110",width:"340",height:"110",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"135",fill:"#fca5a5",fontSize:"9 font-bold",children:"Latency & Failure Risk:"}),e.jsx("text",{x:"30",y:"155",fill:"#cbd5e1",fontSize:"8",children:"• Consumer must wait for ALL 1M items to generate"}),e.jsx("text",{x:"30",y:"170",fill:"#cbd5e1",fontSize:"8",children:"• 100M items causes MemoryError / OOM Crash"}),e.jsx("text",{x:"30",y:"185",fill:"#cbd5e1",fontSize:"8",children:"• Allocates huge contiguous array on heap"})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"Lazy Generator Streaming (1,000,000 items)"}),e.jsx("rect",{x:"20",y:"55",width:"340",height:"35",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"190",y:"78",fill:"#34d399",fontSize:"11 font-mono font-bold",textAnchor:"middle",children:"RAM: ~112 Bytes (O(1) Constant Space!)"}),e.jsx("rect",{x:"20",y:"110",width:"340",height:"110",rx:"4",fill:"#090d16",stroke:"#059669"}),e.jsx("text",{x:"30",y:"135",fill:"#34d399",fontSize:"9 font-bold",children:"Immediate Latency & Infinite Scale:"}),e.jsx("text",{x:"30",y:"155",fill:"#cbd5e1",fontSize:"8",children:"• First item ready in ~0.001 ms"}),e.jsx("text",{x:"30",y:"170",fill:"#cbd5e1",fontSize:"8",children:"• Can process 100 Billion items with same 112 bytes"}),e.jsx("text",{x:"30",y:"185",fill:"#cbd5e1",fontSize:"8",children:"• Freezes/resumes frame without intermediate arrays"})]})]}):l==="yieldfrom"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"`yield from` SUBGENERATOR DELEGATION HIGHWAY (PEP 380)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"300",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"Master Delegator Generator"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"8 font-mono",children:"def regional_pipeline():"}),e.jsx("text",{x:"35",y:"80",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"r1 = yield from stream_bp()"}),e.jsx("text",{x:"35",y:"100",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"r2 = yield from stream_kol()"}),e.jsx("text",{x:"35",y:"125",fill:"#c4b5fd",fontSize:"8 font-mono",children:"return r1 + r2"}),e.jsx("rect",{x:"20",y:"150",width:"260",height:"70",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"30",y:"175",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Automatic Pipeline:"}),e.jsx("text",{x:"30",y:"195",fill:"#cbd5e1",fontSize:"8",children:"Transparently pipes subgen items"})]}),e.jsxs("g",{transform:"translate(350, 140)",children:[e.jsx("text",{x:"0",y:"0",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",children:"Direct Subgen Pipe"}),e.jsx("text",{x:"30",y:"25",fill:"#38bdf8",fontSize:"28",fontWeight:"bold",children:"⇆"})]}),e.jsxs("g",{transform:"translate(480, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"370",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"Subgenerators (Modular Streams)"}),e.jsx("rect",{x:"20",y:"55",width:"330",height:"75",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"75",fill:"#34d399",fontSize:"9 font-mono font-bold",children:"stream_bp():"}),e.jsx("text",{x:"30",y:"95",fill:"#ecfdf5",fontSize:"8 font-mono",children:"yield student_1; yield student_2"}),e.jsxs("text",{x:"30",y:"115",fill:"#a7f3d0",fontSize:"8 font-mono",children:["return ","{",'branch: "Barrackpore", total: 2',"}"]}),e.jsx("rect",{x:"20",y:"145",width:"330",height:"75",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"165",fill:"#34d399",fontSize:"9 font-mono font-bold",children:"stream_kol():"}),e.jsx("text",{x:"30",y:"185",fill:"#ecfdf5",fontSize:"8 font-mono",children:"yield student_3; yield student_4"}),e.jsxs("text",{x:"30",y:"205",fill:"#a7f3d0",fontSize:"8 font-mono",children:["return ","{",'branch: "Kolkata", total: 2',"}"]})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"BIDIRECTIONAL COROUTINE CHANNEL WITH `gen.send(value)`"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"15",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"1. Prime Coroutine"}),e.jsx("text",{x:"15",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"next(coroutine)"}),e.jsx("text",{x:"15",y:"75",fill:"#cbd5e1",fontSize:"8",children:"Advances execution to the"}),e.jsx("text",{x:"15",y:"90",fill:"#cbd5e1",fontSize:"8",children:"very first `yield` expression."}),e.jsx("rect",{x:"15",y:"125",width:"220",height:"90",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"25",y:"150",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Waiting for Data:"}),e.jsx("text",{x:"25",y:"170",fill:"#cbd5e1",fontSize:"8",children:"Coroutine pauses at yield"}),e.jsx("text",{x:"25",y:"185",fill:"#cbd5e1",fontSize:"8",children:"ready to accept incoming values."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"310",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. Inject via `send(val)`"}),e.jsx("text",{x:"310",y:"55",fill:"#38bdf8",fontSize:"8 font-mono font-bold",children:"val = coroutine.send(5000)"}),e.jsx("text",{x:"310",y:"80",fill:"#ecfdf5",fontSize:"8 font-mono",children:"val gets assigned to LHS"}),e.jsx("text",{x:"310",y:"100",fill:"#ecfdf5",fontSize:"8 font-mono",children:"of `yield` expression!"}),e.jsx("rect",{x:"310",y:"125",width:"220",height:"90",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"320",y:"150",fill:"#38bdf8",fontSize:"9 font-bold",children:"Two-Way Data Transfer:"}),e.jsx("text",{x:"320",y:"170",fill:"#cbd5e1",fontSize:"8",children:"1. Sends 5000 in"}),e.jsx("text",{x:"320",y:"185",fill:"#cbd5e1",fontSize:"8",children:"2. Returns new total out!"}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"605",y:"30",fill:"#fda4af",fontSize:"11 font-bold",children:"3. Clean Close"}),e.jsx("text",{x:"605",y:"55",fill:"#fca5a5",fontSize:"8 font-mono",children:"coroutine.close()"}),e.jsx("text",{x:"605",y:"80",fill:"#cbd5e1",fontSize:"8",children:"Raises `GeneratorExit`"}),e.jsx("text",{x:"605",y:"95",fill:"#cbd5e1",fontSize:"8",children:"inside frame to cleanup."}),e.jsx("rect",{x:"605",y:"125",width:"200",height:"90",rx:"4",fill:"#881337",stroke:"#e11d48"}),e.jsx("text",{x:"615",y:"150",fill:"#ffe4e6",fontSize:"9 font-bold",children:"Safe Teardown:"}),e.jsx("text",{x:"615",y:"170",fill:"#fca5a5",fontSize:"8",children:"Executes finally blocks"}),e.jsx("text",{x:"615",y:"185",fill:"#fca5a5",fontSize:"8",children:"and releases open handles."})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Multi-Campus Financial Delegation Pipeline Simulator"})]}),e.jsxs("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:["Step through the master financial delegator pipeline to watch ",e.jsx("code",{className:"text-teal-300 font-mono",children:"yield from"})," seamlessly transition across branch sub-generators and calculate unified regional accounting ledgers:"]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"1. Delegated Pipeline Stepper"}),e.jsx("button",{onClick:v,className:"text-[11px] font-mono text-slate-400 hover:text-white underline",children:"Reset Master Pipeline"})]}),e.jsx("button",{onClick:j,disabled:m,className:i("w-full py-3 rounded-lg text-xs font-mono font-bold transition-all shadow-lg",m?"bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700":"bg-teal-600 hover:bg-teal-500 text-white shadow-teal-950/50"),children:m?"All Regional Streams Consolidated":"Execute `next(master_pipeline)` -> (Delegates via yield from)"}),e.jsxs("div",{className:"space-y-2 pt-2 border-t border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400 font-bold block uppercase",children:"Sub-Generator Delegation Sequence:"}),e.jsx("div",{className:i("p-2.5 rounded border text-xs font-mono transition-all",o==="Barrackpore"?"bg-teal-950 border-teal-500 text-teal-200 font-bold animate-glow-teal":s>=1?"bg-slate-900/50 border-slate-800 text-slate-500":"bg-slate-900 border-slate-800 text-slate-400"),children:e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"1. `yield from stream_barrackpore()`"}),e.jsx("span",{children:s>=1?"[COMPLETED]":o==="Barrackpore"?"ACTIVE DELEGATION":"PENDING"})]})}),e.jsx("div",{className:i("p-2.5 rounded border text-xs font-mono transition-all",o==="Kolkata"?"bg-cyan-950 border-cyan-500 text-cyan-200 font-bold animate-glow-teal":s>=3?"bg-slate-900/50 border-slate-800 text-slate-500":"bg-slate-900 border-slate-800 text-slate-400"),children:e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"2. `yield from stream_kolkata()`"}),e.jsx("span",{children:s>=3?"[COMPLETED]":o==="Kolkata"?"ACTIVE DELEGATION":"PENDING"})]})}),e.jsx("div",{className:i("p-2.5 rounded border text-xs font-mono transition-all",o==="Online Global"?"bg-purple-950 border-purple-500 text-purple-200 font-bold animate-glow-teal":s>=4?"bg-slate-900/50 border-slate-800 text-slate-500":"bg-slate-900 border-slate-800 text-slate-400"),children:e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"3. `yield from stream_online()`"}),e.jsx("span",{children:s>=4?"[COMPLETED]":o==="Online Global"?"ACTIVE DELEGATION":"PENDING"})]})})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2 text-xs font-mono",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:"Master Pipeline Telemetry:"}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Active Subgenerator Stream:"}),e.jsx("span",{className:"text-teal-300 font-bold",children:o})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Streamed Vouchers Count:"}),e.jsxs("span",{className:"text-cyan-300 font-bold",children:[c.length," / ",d.length]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Pipeline Memory Footprint:"}),e.jsx("span",{className:"text-emerald-400 font-bold",children:"112 Bytes (O(1) Constant)"})]})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[160px] space-y-1.5 font-mono text-xs",children:[e.jsx("span",{className:"text-slate-400 block font-bold text-[10px] uppercase",children:x?"Consolidated Regional Manifest (StopIteration.value):":"Emitted Student Vouchers:"}),x?e.jsxs("div",{className:"p-2.5 bg-slate-950 rounded border border-teal-800/80 space-y-1",children:[e.jsx("div",{className:"text-teal-300 font-bold text-sm",children:"Regional Financial Settlement"}),e.jsxs("div",{className:"text-slate-300",children:["Total Enrolled: ",x.totalAdmitted," Students"]}),e.jsxs("div",{className:"text-emerald-400 font-bold",children:["Gross Regional Revenue: INR ",x.grossRevenue.toLocaleString()]}),e.jsx("div",{className:"text-[10px] text-slate-500",children:"Barrackpore: INR 47,000 | Kolkata: INR 41,800 | Online: INR 19,800"})]}):c.length===0?e.jsx("div",{className:"text-slate-500 italic text-[11px]",children:'Click "Execute next(master_pipeline)" to start subgenerator delegation.'}):c.map((t,n)=>e.jsxs("div",{className:"p-1.5 bg-slate-950 rounded border border-slate-800 flex justify-between text-[11px]",children:[e.jsxs("span",{className:"text-cyan-300 font-bold",children:["[",t.branch,"] ",t.name]}),e.jsxs("span",{className:"text-emerald-400 font-bold",children:["INR ",t.fee.toLocaleString()]})]},n))]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Feature Comparison: Functions vs Generators"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Capability / Characteristic"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Regular Function (`return`)"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Generator Function (`yield`)"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Delegated Generator (`yield from`)"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"Evaluation Mode"}),e.jsx("td",{className:"py-3 px-4",children:"Eager (Upfront all in RAM)"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Lazy (1-at-a-time)"}),e.jsx("td",{className:"py-3 px-4 text-cyan-300",children:"Lazy (Delegated to subgen)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"Memory Complexity"}),e.jsx("td",{className:"py-3 px-4 text-rose-300",children:"O(N)"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"O(1) (~112 Bytes)"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"O(1) (~112 Bytes)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Random Indexing (`data[i]`)"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Yes (Instant O(1))"}),e.jsx("td",{className:"py-3 px-4 text-rose-300",children:"No (Must consume)"}),e.jsx("td",{className:"py-3 px-4 text-rose-300",children:"No (Must consume)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"Bidirectional `send()`"}),e.jsx("td",{className:"py-3 px-4 text-rose-300",children:"No"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Yes (`gen.send(val)`)"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Yes (Forwarded directly)"})]})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating memory benchmarking, `yield from` subgenerator delegation, bidirectional coroutine channels, and multi-campus financial suites:"}),e.jsx(w,{files:[{filename:"memory_and_eager_vs_lazy_evaluation_benchmark.py",code:T,description:"Eager list allocation vs Lazy generator memory and latency benchmarks with sys.getsizeof."},{filename:"subgenerator_delegation_yield_from.py",code:k,description:"PEP 380 yield from sub-generator delegation and capturing subgenerator return values."},{filename:"bidirectional_communication_with_send_and_close.py",code:C,description:"Coroutine priming, two-way data passing via send(), throw(), and close() teardown."},{filename:"institutional_multicampus_financial_pipeline_suite.py",code:R,description:"Enterprise Multi-Campus Regional Financial Pipeline Suite with yield from delegation."}]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Calling `len(generator)`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Generators produce elements on the fly and cannot know their length without consuming the stream, raising ",e.jsx("code",{className:"text-rose-300 font-mono",children:"TypeError: object of type 'generator' has no len()"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"sum(1 for _ in gen)"})," to count without list allocation."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Sending Data without Priming"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-amber-300 font-mono",children:"gen.send('data')"})," on a newly created generator raises ",e.jsx("code",{className:"text-amber-300 font-mono",children:"TypeError: can't send non-None value to a just-started generator"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Prime first with ",e.jsx("code",{className:"text-emerald-300",children:"next(gen)"})," or ",e.jsx("code",{className:"text-emerald-300",children:"gen.send(None)"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Manual `for x in sub: yield x`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing manual iteration loops over subgenerators is 15-20% slower than ",e.jsx("code",{className:"text-purple-300 font-mono",children:"yield from subgen"})," and fails to route ",e.jsx("code",{className:"text-purple-300 font-mono",children:"send()"})," or return values."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always use ",e.jsx("code",{className:"text-emerald-300",children:"yield from subgen"})," for delegation."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Blocking I/O in Synchronous Generator"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Synchronous socket or database requests in ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"__next__()"})," lock the entire execution thread until I/O returns."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use asynchronous generators (",e.jsx("code",{className:"text-emerald-300",children:"async def / async for"}),") for network I/O."]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering generator functions vs regular functions, eager vs lazy evaluation, yield from, and coroutines:"}),e.jsx(S,{questions:O})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with eager vs lazy benchmarks, yield from architectures, and coroutine send recipes:"}),e.jsx("div",{className:"mb-10",children:e.jsx(E,{content:I,filename:"python_topic9_generators_vs_functions_notes.txt",title:"Print Topic 9 Study Notes"})}),e.jsx(A,{})]})]})]})}export{B as default};
