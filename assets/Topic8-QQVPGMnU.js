import{b as a,j as e,bg as l}from"./vendor-react-core-Doz9nIC6.js";import{P as I}from"./PythonFileLoader-hCi5osN-.js";import{P as C}from"./PlainTextPrint-C08xhKA4.js";import{F as G}from"./FAQTemplate-CkSqDH4B.js";import{T as A}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const D=`# topic8_files/generator_fundamentals_and_yield_mechanics.py\r
# Module: 003_003_decorators-generators\r
# Topic: Generators & the yield statement\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 8 - File 1: Generator Fundamentals & The \`yield\` Statement\r
Demonstrates:\r
  1. What happens when a function contains the \`yield\` keyword (Returns a Generator Object)\r
  2. Frame pausing (suspending) and state retention across \`next()\` invocations\r
  3. Inspecting CPython generator frame state (\`gi_running\`, \`gi_frame\`)\r
"""\r
\r
import inspect\r
\r
def simple_course_generator():\r
    """A generator function that yields institutional course modules."""\r
    print("  [EXECUTION RESUMED] Step 1: Preparing Python Core...")\r
    yield "MODULE-1: Python Core & Syntax"\r
\r
    print("  [EXECUTION RESUMED] Step 2: Preparing Data Structures...")\r
    yield "MODULE-2: OOP & Data Structures"\r
\r
    print("  [EXECUTION RESUMED] Step 3: Preparing Decorators & Generators...")\r
    yield "MODULE-3: Decorators & Generators"\r
\r
    print("  [EXECUTION RESUMED] Step 4: Reached end of generator body.")\r
\r
\r
def demonstrate_generator_fundamentals():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - GENERATOR FUNDAMENTALS & \`yield\` MECHANICS")\r
    print("=" * 70)\r
\r
    # 1. Calling a generator function does NOT execute its body!\r
    print("1. Instantiating Generator Function:")\r
    gen = simple_course_generator()\r
    print(f"   Returned Object : {gen}")\r
    print(f"   Object Type     : {type(gen)}")\r
    print(f"   Is Generator?   : {inspect.isgenerator(gen)}")\r
    print(f"   Generator State : {inspect.getgeneratorstate(gen)} (GEN_CREATED)\\n")\r
\r
    # 2. Stepping through with next():\r
    print("2. First \`next(gen)\` Invocation:")\r
    item1 = next(gen)\r
    print(f"   -> Received Item: {item1}")\r
    print(f"   -> Generator State: {inspect.getgeneratorstate(gen)} (GEN_SUSPENDED)\\n")\r
\r
    print("3. Second \`next(gen)\` Invocation:")\r
    item2 = next(gen)\r
    print(f"   -> Received Item: {item2}")\r
    print(f"   -> Generator State: {inspect.getgeneratorstate(gen)} (GEN_SUSPENDED)\\n")\r
\r
    print("4. Third \`next(gen)\` Invocation:")\r
    item3 = next(gen)\r
    print(f"   -> Received Item: {item3}\\n")\r
\r
    # 3. Exhaustion & StopIteration:\r
    print("5. Fourth \`next(gen)\` Invocation (Triggers StopIteration):")\r
    try:\r
        next(gen)\r
    except StopIteration:\r
        print("   [CAUGHT EXPECTED StopIteration] Generator has completed execution.")\r
        print(f"   Final State : {inspect.getgeneratorstate(gen)} (GEN_CLOSED)")\r
\r
    print("\\n[PASSED] Generator Fundamentals & yield Mechanics Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_generator_fundamentals()\r
`,P=`# topic8_files/fibonacci_and_sequence_generators.py\r
# Module: 003_003_decorators-generators\r
# Topic: Generators & the yield statement\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 8 - File 2: Infinite and Finite Sequence Generators (Fibonacci & Installments)\r
Demonstrates:\r
  1. Classic Fibonacci generator maintaining O(1) memory\r
  2. Generating custom tuition installment schedules lazily\r
  3. Safe consumption using \`itertools.islice\` and standard loops\r
"""\r
\r
import itertools\r
from typing import Generator, Dict, Any\r
\r
def fibonacci_generator(max_count: int = None) -> Generator[int, None, None]:\r
    """Generates Fibonacci numbers lazily with O(1) memory space."""\r
    a, b = 0, 1\r
    yielded = 0\r
\r
    while max_count is None or yielded < max_count:\r
        yield a\r
        a, b = b, a + b\r
        yielded += 1\r
\r
\r
def tuition_installment_schedule_generator(\r
    total_fee: float,\r
    number_of_installments: int = 4\r
) -> Generator[Dict[str, Any], None, None]:\r
    """Generates monthly installment schedules for enrolled students."""\r
    installment_amount = round(total_fee / number_of_installments, 2)\r
    cumulative_paid = 0.0\r
\r
    for installment_num in range(1, number_of_installments + 1):\r
        cumulative_paid += installment_amount\r
        remaining_balance = max(0.0, total_fee - cumulative_paid)\r
\r
        yield {\r
            "installment_no": installment_num,\r
            "due_amount": installment_amount,\r
            "cumulative_paid": cumulative_paid,\r
            "remaining_balance": remaining_balance\r
        }\r
\r
\r
def demonstrate_sequence_generators():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - SEQUENCE GENERATORS (FIBONACCI & TUITION)")\r
    print("=" * 70)\r
\r
    # 1. Fibonacci Generator (First 8 elements):\r
    print("1. First 8 Fibonacci Numbers via \`fibonacci_generator(8)\`:")\r
    fib_gen = fibonacci_generator(8)\r
    for num in fib_gen:\r
        print(f"   * Fib: {num}")\r
\r
    # 2. Infinite Fibonacci with \`itertools.islice\`:\r
    print("\\n2. Consuming Infinite Generator using \`itertools.islice(gen, 5, 10)\`:")\r
    infinite_fib = fibonacci_generator()\r
    subset = list(itertools.islice(infinite_fib, 5, 10))\r
    print(f"   Fibonacci Elements [Index 5 to 10]: {subset}\\n")\r
\r
    # 3. Tuition Installment Schedule (INR 24,000 in 4 installments):\r
    print("3. Generating Student Tuition Installment Schedule (INR 24,000 / 4 Months):")\r
    installment_stream = tuition_installment_schedule_generator(24000.0, 4)\r
    for inst in installment_stream:\r
        print(\r
            f"   * Installment #{inst['installment_no']}: Due INR {inst['due_amount']:,.2f} | "\r
            f"Paid: INR {inst['cumulative_paid']:,.2f} | Remaining: INR {inst['remaining_balance']:,.2f}"\r
        )\r
\r
    print("\\n[PASSED] Fibonacci & Sequence Generators Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_sequence_generators()\r
`,O=`# topic8_files/generator_return_and_stopiteration_values.py\r
# Module: 003_003_decorators-generators\r
# Topic: Generators & the yield statement\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 8 - File 3: Generator Return Values & \`StopIteration.value\`\r
Demonstrates:\r
  1. Using \`return value\` inside generator functions (Python 3.3+ PEP 380)\r
  2. How \`return value\` is encapsulated inside \`StopIteration.value\`\r
  3. Extracting metadata summaries upon generator completion\r
"""\r
\r
from typing import Generator, Dict, Any\r
\r
def audit_batch_admission_fees(students: list) -> Generator[Dict[str, Any], None, Dict[str, Any]]:\r
    """Yields processed fee records and returns an audit summary dictionary upon completion."""\r
    total_collected = 0.0\r
    processed_count = 0\r
\r
    for s in students:\r
        fee = s["gross_fee"] * (1.0 - s.get("discount", 0.0))\r
        total_collected += fee\r
        processed_count += 1\r
\r
        yield {\r
            "student_id": s["id"],\r
            "name": s["name"],\r
            "net_payable": fee\r
        }\r
\r
    # Returning final settlement summary payload (Sets StopIteration.value!):\r
    return {\r
        "total_students": processed_count,\r
        "total_revenue": total_collected,\r
        "average_fee": total_collected / processed_count if processed_count > 0 else 0.0,\r
        "status": "BATCH_SETTLEMENT_COMPLETE"\r
    }\r
\r
\r
def demonstrate_generator_returns():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - GENERATOR RETURNS & \`StopIteration.value\`")\r
    print("=" * 70)\r
\r
    batch = [\r
        {"id": "STU-101", "name": "Sourav Mukherjee", "gross_fee": 25000.0, "discount": 0.15},\r
        {"id": "STU-102", "name": "Priyanka Sen", "gross_fee": 30000.0, "discount": 0.10},\r
        {"id": "STU-103", "name": "Rahul Verma", "gross_fee": 18000.0, "discount": 0.00},\r
    ]\r
\r
    print("1. Driving Generator Manually to Capture \`StopIteration.value\`:")\r
    gen = audit_batch_admission_fees(batch)\r
\r
    # Manual Consumption Loop:\r
    while True:\r
        try:\r
            record = next(gen)\r
            print(f"   * Yielded Record: {record['name']:<18} ({record['student_id']}) -> Net: INR {record['net_payable']:,.2f}")\r
        except StopIteration as exc:\r
            # The returned payload is stored on \`exc.value\`:\r
            summary = exc.value\r
            print(f"\\n2. Extracted Generator Return Value (\`StopIteration.value\`):")\r
            print(f"   * Total Students : {summary['total_students']}")\r
            print(f"   * Total Revenue  : INR {summary['total_revenue']:,.2f}")\r
            print(f"   * Average Fee    : INR {summary['average_fee']:,.2f}")\r
            print(f"   * Batch Status   : {summary['status']}")\r
            break\r
\r
    print(r"""\r
The Generator Return Rule:\r
  In Python 3.3+ (PEP 380):\r
  - \`return result\` in a generator does NOT yield a value.\r
  - Instead, it raises \`StopIteration(result)\`.\r
  - When used with \`yield from sub_gen()\`, the return value is returned as the expression result:\r
    \`final_summary = yield from audit_batch_admission_fees(batch)\`\r
""")\r
    print("[PASSED] Generator Return Values & StopIteration.value Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_generator_returns()\r
`,z=`# topic8_files/institutional_admission_batch_generator_stream.py\r
# Module: 003_003_decorators-generators\r
# Topic: Generators & the yield statement\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 8 - File 4: Institutional Admission Stream Generator (Case Study)\r
Demonstrates:\r
  1. Production generator function streaming student admissions with telemetry\r
  2. Maintaining stateful cumulative financial metrics across yield points\r
  3. Clean termination and returning an immutable batch settlement report\r
"""\r
\r
from typing import List, Dict, Any, Generator\r
\r
def stream_admission_cohort(\r
    candidates: List[Dict[str, Any]],\r
    institution_branch: str = "Barrackpore Campus"\r
) -> Generator[Dict[str, Any], None, Dict[str, Any]]:\r
    """Streams candidate admissions lazily, calculating fees, and returns settlement report."""\r
    total_revenue_acc = 0.0\r
    scholarships_awarded_acc = 0.0\r
    admitted_count = 0\r
\r
    for idx, candidate in enumerate(candidates, start=1):\r
        base_tuition = candidate["base_tuition"]\r
        discount_rate = candidate.get("scholarship_rate", 0.0)\r
\r
        concession_amount = round(base_tuition * discount_rate, 2)\r
        net_payable = round(base_tuition - concession_amount, 2)\r
\r
        total_revenue_acc += net_payable\r
        scholarships_awarded_acc += concession_amount\r
        admitted_count += 1\r
\r
        # Yield admission certificate envelope:\r
        yield {\r
            "batch_sequence": idx,\r
            "certificate_id": f"ADM-2026-{candidate['id']}",\r
            "student_id": candidate["id"],\r
            "student_name": candidate["name"],\r
            "course": candidate["course"],\r
            "campus": institution_branch,\r
            "net_fee": net_payable,\r
            "scholarship_applied": concession_amount,\r
            "running_revenue": total_revenue_acc\r
        }\r
\r
    # Return final audit summary upon completion:\r
    return {\r
        "campus": institution_branch,\r
        "total_admitted": admitted_count,\r
        "gross_collected": total_revenue_acc,\r
        "total_scholarships_disbursed": scholarships_awarded_acc,\r
        "average_student_fee": total_revenue_acc / admitted_count if admitted_count > 0 else 0.0,\r
        "status": "SETTLED_AND_CONFIRMED"\r
    }\r
\r
\r
def run_admission_stream_demo():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - ADMISSION STREAM GENERATOR")\r
    print("=" * 70)\r
\r
    cohort = [\r
        {"id": "STU-101", "name": "Sourav Mukherjee", "course": "Python & AI", "base_tuition": 25000.0, "scholarship_rate": 0.20},\r
        {"id": "STU-102", "name": "Priyanka Sen", "course": "Data Science", "base_tuition": 30000.0, "scholarship_rate": 0.10},\r
        {"id": "STU-103", "name": "Rahul Verma", "course": "Python Core", "base_tuition": 18000.0, "scholarship_rate": 0.00},\r
        {"id": "STU-104", "name": "Debolina Roy", "course": "Machine Learning", "base_tuition": 28000.0, "scholarship_rate": 0.15},\r
    ]\r
\r
    print("1. Streaming Admission Certificates Lazily:")\r
    stream = stream_admission_cohort(cohort, "Barrackpore Main Campus")\r
\r
    # Manual iteration to observe yields and extract return value:\r
    while True:\r
        try:\r
            cert = next(stream)\r
            print(\r
                f"   [SEQ #{cert['batch_sequence']}] {cert['certificate_id']}: {cert['student_name']:<18} | "\r
                f"Net: INR {cert['net_fee']:>8,.2f} | Running Total: INR {cert['running_revenue']:>9,.2f}"\r
            )\r
        except StopIteration as exc:\r
            report = exc.value\r
            print("\\n2. Final Cohort Audit Settlement Report (StopIteration.value):")\r
            print(f"   * Campus                      : {report['campus']}")\r
            print(f"   * Total Students Admitted     : {report['total_admitted']}")\r
            print(f"   * Gross Revenue Collected     : INR {report['gross_collected']:,.2f}")\r
            print(f"   * Total Scholarships Disbursed: INR {report['total_scholarships_disbursed']:,.2f}")\r
            print(f"   * Average Fee Per Student     : INR {report['average_student_fee']:,.2f}")\r
            print(f"   * Settlement Status           : {report['status']}")\r
            break\r
\r
    print("\\n[PASSED] Institutional Admission Stream Generator Verified.")\r
\r
\r
if __name__ == "__main__":\r
    run_admission_stream_demo()\r
`,k=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_003: DECORATORS & GENERATORS\r
              TOPIC 8: GENERATORS & THE YIELD STATEMENT IN PYTHON\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. THE \`yield\` KEYWORD MECHANICS\r
--------------------------------------------------------------------------------\r
  def my_generator():\r
      print("Starting...")\r
      yield 1  # Suspends execution and returns 1 to caller!\r
      print("Resuming...")\r
      yield 2  # Suspends again!\r
\r
  • Calling \`gen = my_generator()\` does NOT run the code; it returns a Generator!\r
  • Calling \`next(gen)\` executes until the next \`yield\` statement.\r
\r
--------------------------------------------------------------------------------\r
2. THE 4 GENERATOR STATES\r
--------------------------------------------------------------------------------\r
  1. GEN_CREATED   : Instantiated but \`next()\` not yet called.\r
  2. GEN_SUSPENDED : Paused at a \`yield\` statement.\r
  3. GEN_RUNNING   : Currently executing code inside the frame.\r
  4. GEN_CLOSED    : Completed execution or closed with \`close()\`.\r
\r
--------------------------------------------------------------------------------\r
3. GENERATOR RETURN VALUES (PEP 380)\r
--------------------------------------------------------------------------------\r
  def stream():\r
      yield 100\r
      return "DONE"  # Raises StopIteration("DONE") -> exc.value = "DONE"\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 8: GENERATORS & YIELD\r
================================================================================\r
`,F=[{question:"What is a Generator Function in Python?",shortAnswer:"A function that contains one or more 'yield' statements; when called, it returns a generator iterator object without immediately executing the function body.",explanation:"Allows writing iterators using concise function syntax rather than full classes.",hint:"A function containing 'yield' that produces values on demand.",level:"basic",codeExample:`def my_gen():
    yield 1
    yield 2`},{question:"What happens when you call a generator function like 'g = my_generator()'?",shortAnswer:"The function body does NOT execute; Python immediately constructs and returns a Generator Object in the 'GEN_CREATED' state.",explanation:"Execution only starts when next(g) or a for loop is called.",hint:"Returns a generator object without executing any lines inside the body.",level:"basic",codeExample:"g = count_gen()  # No lines executed yet!"},{question:"How does the 'yield' keyword differ from the 'return' keyword?",shortAnswer:"'return' terminates the function and destroys its stack frame; 'yield' pauses/freezes the function frame, returns a value to the caller, and retains all local variable state for future resumption.",explanation:"The foundation of coroutines and lazy stream processing.",hint:"yield pauses and preserves state; return terminates and destroys the frame.",level:"basic",codeExample:"# yield preserves local variables between calls"},{question:"What are the 4 lifecycle states of a Python generator object?",shortAnswer:"1. 'GEN_CREATED' (waiting to start), 2. 'GEN_SUSPENDED' (paused at yield), 3. 'GEN_RUNNING' (actively executing), 4. 'GEN_CLOSED' (exhausted or terminated).",explanation:"Inspectable via 'inspect.getgeneratorstate(g)'.",hint:"GEN_CREATED, GEN_SUSPENDED, GEN_RUNNING, GEN_CLOSED.",level:"moderate",codeExample:`import inspect
state = inspect.getgeneratorstate(gen)`},{question:"How does a generator function automatically fulfill the Iteration Protocol?",shortAnswer:"Every generator object automatically implements both '__iter__()' (returning self) and '__next__()' (advancing to the next yield statement), making it a 100% compliant iterator.",explanation:"Eliminates the boilerplate of writing custom __iter__ and __next__ classes.",hint:"Python automatically injects __iter__() and __next__() onto generator objects.",level:"basic",codeExample:`g = my_gen()
assert hasattr(g, '__iter__') and hasattr(g, '__next__')`},{question:"What happens when a generator function reaches the end of its body or executes 'return'?",shortAnswer:"Python raises 'StopIteration' automatically, transitioning the generator to the 'GEN_CLOSED' state and terminating consuming 'for' loops cleanly.",explanation:"Standard generator exhaustion behavior.",hint:"Raises StopIteration and transitions to GEN_CLOSED.",level:"basic",codeExample:"# Exiting body triggers StopIteration"},{question:"How does 'return value' behave inside a Python 3.3+ generator function (PEP 380)?",shortAnswer:"It attaches 'value' to the 'StopIteration' exception object ('raise StopIteration(value)'), which can be accessed via 'exc.value' or as the result of 'yield from'.",explanation:"Enables generators to return final summary data or coroutine return values.",hint:"Encapsulates the return value inside StopIteration.value.",level:"complex",codeExample:`def gen(): yield 1; return 'DONE'
# StopIteration.value == 'DONE'`},{question:"Why does a generator-based Fibonacci function consume O(1) constant memory?",shortAnswer:"Because it only stores two integer variables ('a' and 'b') in its suspended frame, computing and yielding successive terms on demand without maintaining a growing list in memory.",explanation:"Can produce trillions of terms without consuming RAM.",hint:"Only keeps variables a and b in memory, computing terms on the fly.",level:"basic",codeExample:"def fib(): a,b = 0,1; while True: yield a; a,b = b, a+b"},{question:"What utility can you use to safely take the first N elements from an infinite generator?",shortAnswer:"'itertools.islice(generator, N)' takes the first N items lazily without creating infinite loops or loading unnecessary elements into memory.",explanation:"Standard library tool for generator slicing.",hint:"Use itertools.islice(gen, N).",level:"basic",codeExample:"first_10 = list(itertools.islice(fib_gen, 10))"},{question:"Can a generator function contain multiple 'yield' statements in different branches?",shortAnswer:"Yes. A generator function can have as many 'yield' statements as needed across if/else branches, loops, and nested blocks.",explanation:"Provides complete imperative control over emitted values.",hint:"Yes, yield can appear anywhere in loops or conditional branches.",level:"basic",codeExample:`if cond: yield A
else: yield B`},{question:"Can a generator yield values of different data types across successive steps?",shortAnswer:"Yes. Python generators are dynamically typed; they can yield strings, integers, dictionaries, custom objects, or even other functions.",explanation:"Complete flexibility in emitted data payloads.",hint:"Yes, generators can yield any Python data types.",level:"basic",codeExample:"yield 100; yield 'Success'; yield {'id': 1}"},{question:"What is the 'close()' method on a generator object?",shortAnswer:"'gen.close()' raises a 'GeneratorExit' exception inside the suspended generator frame, causing it to exit early, clean up any 'finally' blocks, and transition to 'GEN_CLOSED'.",explanation:"Allows consumers to terminate long-running streams safely.",hint:"Raises GeneratorExit to terminate the generator and run finally blocks.",level:"moderate",codeExample:"gen.close()  # Generator is closed immediately"},{question:"What happens if a generator contains a 'try...finally' block and is closed early?",shortAnswer:"The 'finally' block is guaranteed to execute when 'close()' is called or when the generator is garbage collected, ensuring resources (files, sockets) are closed safely.",explanation:"Essential pattern for resource management in generators.",hint:"The finally block executes immediately to clean up resources.",level:"moderate",codeExample:`try: yield data
finally: file.close() # Guaranteed cleanup`},{question:"Can you rewind or restart a generator object once it has yielded items?",shortAnswer:"No. Generator objects are strictly single-pass stream consumers; to restart, you must invoke the generator function again to instantiate a fresh generator object.",explanation:"Generators cannot move backwards.",hint:"No, generators are single-pass; call the generator function again for a new stream.",level:"basic",codeExample:"g = my_gen(); list(g); list(g) # Second list is []"},{question:"How do generators compare to custom Iterator classes in terms of boilerplate code?",shortAnswer:"Generators reduce 20-30 lines of custom class boilerplate (writing '__init__', '__iter__', '__next__', and state management) to a simple 4-line function with 'yield'.",explanation:"Dramatic improvement in code readability and maintainability.",hint:"Generators replace full __iter__/__next__ class boilerplate with concise yield functions.",level:"basic",codeExample:"# 4 lines of generator vs 25 lines of class boilerplate"},{question:"What happens if an unhandled exception occurs inside a generator function?",shortAnswer:"The exception propagates immediately out of the 'next()' call to the caller, and the generator is abruptly closed (transitions to 'GEN_CLOSED').",explanation:"Generators cannot be resumed after an uncaught exception.",hint:"The exception bubbles up to next() and the generator is closed.",level:"basic",codeExample:"# Uncaught exception terminates the generator permanently"},{question:"What is the 'throw()' method on a generator object?",shortAnswer:"'gen.throw(ExcType, value)' raises the specified exception at the exact line where the generator is currently suspended, allowing the generator to handle or recover from it.",explanation:"Underpins advanced coroutine error handling.",hint:"Raises an exception inside the suspended generator frame.",level:"complex",codeExample:"gen.throw(ValueError, 'Invalid data chunk')"},{question:"How does Python optimize generator frame allocations in CPython?",shortAnswer:"CPython allocates a compact 'PyGenObject' structure containing the execution evaluation frame on the heap, allowing it to be suspended and resumed with near-zero overhead (~100 nanoseconds).",explanation:"Extremely lightweight compared to operating system threads.",hint:"Compact heap frame structure resumed in nanoseconds.",level:"complex",codeExample:"# Nanosecond suspension and resumption"},{question:"Can you pass arguments into a suspended generator when resuming it?",shortAnswer:"Yes. By using the 'gen.send(value)' method; the 'yield' expression evaluates to the sent value (explored further in Coroutines).",explanation:"Transforms generators into bidirectional data coroutines.",hint:"Yes, using the generator.send(value) method.",level:"moderate",codeExample:"received = yield result  # received gets value from send()"},{question:"Why should you avoid creating large lists inside a generator function before yielding?",shortAnswer:"Because building a large list in memory defeats the primary benefit of generators (lazy evaluation and constant O(1) memory consumption).",explanation:"Always stream/yield items one-by-one or in small chunks.",hint:"Defeats the O(1) memory purpose; items should be yielded one-by-one.",level:"basic",codeExample:`# BAD: temp = [huge_data]; for x in temp: yield x
# GOOD: for x in stream: yield x`},{question:"How do you test a generator function in pytest?",shortAnswer:"Instantiate the generator, call 'list(gen)' or use a 'for' loop to verify all yielded items, and assert on expected values and sequence order.",explanation:"Standard unit testing pattern for generator streams.",hint:"Test items by consuming with list(gen) or next(gen) assertions.",level:"basic",codeExample:"assert list(my_gen()) == [1, 2, 3]"},{question:"Can a generator function yield from another generator?",shortAnswer:"Yes, using the 'yield from sub_generator()' syntax introduced in PEP 380, which transparently delegates iteration to the sub-generator.",explanation:"Topic 9 and 11 explore delegation in depth.",hint:"Yes, using the 'yield from' delegation syntax.",level:"moderate",codeExample:`def chain(g1, g2):
    yield from g1
    yield from g2`},{question:"What is the 'Lazy Evaluation' paradigm in Python generators?",shortAnswer:"Computing values only at the exact moment they are requested by the consumer ('call-by-need'), saving CPU cycles and memory when only a fraction of items are consumed.",explanation:"Fundamental design philosophy of functional Python programming.",hint:"Values are computed on demand only when requested by the consumer.",level:"basic",codeExample:"# Compute on demand rather than upfront"},{question:"Why is 'yield' not allowed inside a list comprehension or lambda function directly?",shortAnswer:"Because 'yield' turns the enclosing code block into a generator function, which has distinct frame suspension semantics incompatible with single-expression lambdas.",explanation:"Use generator expressions '(x for x in seq)' instead.",hint:"Lambdas are single expressions; use generator expressions instead.",level:"moderate",codeExample:"# Use (x for x in seq) instead of lambda with yield"},{question:"What is the ultimate golden rule for Generators and the `yield` statement in Python?",shortAnswer:"Use generator functions whenever producing sequences or streaming data to maintain O(1) memory, let 'yield' manage frame state suspension automatically, and leverage 'return' with PEP 380 for completion summaries.",explanation:"The bedrock of modern, high-performance Python data engineering.",hint:"Use yield for O(1) memory streaming and let Python manage frame state automatically.",level:"basic",codeExample:"# Python Generator & Yield Mastery"}];function V(){const u=a.useRef([]),[d,h]=a.useState("yieldcycle"),c=[{id:"STU-101",name:"Sourav Mukherjee",course:"Python & AI",fee:25e3,discount:.2},{id:"STU-102",name:"Priyanka Sen",course:"Data Science",fee:3e4,discount:.1},{id:"STU-103",name:"Rahul Verma",course:"Python Core",fee:18e3,discount:0},{id:"STU-104",name:"Debolina Roy",course:"Machine Learning",fee:28e3,discount:.15}],[x,b]=a.useState(-1),[r,p]=a.useState("GEN_CREATED"),[f,y]=a.useState([]),[m,_]=a.useState(0),[g,N]=a.useState(0),[o,j]=a.useState(null),v=()=>{b(-1),p("GEN_CREATED"),y([]),_(0),N(0),j(null)},w=()=>{if(r==="GEN_CLOSED")return;const t=x+1;if(t<c.length){const n=c[t],i=Math.round(n.fee*n.discount),S=n.fee-i,E=m+S,R=g+i,T={seq:t+1,certId:`ADM-2026-${n.id}`,name:n.name,course:n.course,netFee:S,concession:i,runningRev:E};b(t),_(E),N(R),y([...f,T]),p("GEN_SUSPENDED")}else p("GEN_CLOSED"),j({totalAdmitted:c.length,grossCollected:m,totalScholarships:g,avgFee:m/c.length,status:"SETTLED_AND_CONFIRMED"})};a.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&i.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return u.current.forEach(n=>{n&&t.observe(n)}),()=>t.disconnect()},[]);const s=t=>{t&&!u.current.includes(t)&&u.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:s,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_003"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 8"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Decorators, Generators & Iterators"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Generators & ",e.jsx("span",{className:"text-teal-400",children:"The `yield` Statement"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master lazy stream generation in Python: how ",e.jsx("code",{className:"text-teal-300 font-mono",children:"yield"})," suspends and resumes execution frames with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"O(1)"})," memory, the 4 generator lifecycle states, and capturing generator return values via ",e.jsx("code",{className:"text-purple-300 font-mono",children:"StopIteration.value"})," (PEP 380)."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⏸️ Frame Freezing & Resumption"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔄 4 Generator States (CREATED → CLOSED)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"♾️ O(1) Memory Infinite Streams"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📦 StopIteration.value Returns (PEP 380)"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚡"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Mechanics of the `yield` Keyword"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["When a Python function body contains the ",e.jsx("code",{className:"text-teal-300 font-mono",children:"yield"})," statement, its entire execution paradigm changes fundamentally:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Instantiation"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"g = my_gen()"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Calling the function does NOT execute any code! It returns a Generator object in state ",e.jsx("code",{className:"text-teal-300",children:"GEN_CREATED"}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Frame Suspension"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"yield value"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Returns ",e.jsx("code",{className:"text-cyan-300",children:"value"})," to the caller and freezes local variable state in place (",e.jsx("code",{className:"text-cyan-300",children:"GEN_SUSPENDED"}),")."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Return Value (PEP 380)"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"return summary"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Raises ",e.jsx("code",{className:"text-purple-300",children:"StopIteration(summary)"}),", allowing consumers to extract completion payloads via ",e.jsx("code",{className:"text-purple-300",children:"exc.value"}),"."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The 4 Generator Lifecycle States"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["• ",e.jsx("span",{className:"text-teal-300 font-bold",children:"GEN_CREATED"}),": Instantiated, waiting for first ",e.jsx("code",{className:"text-slate-200",children:"next()"}),".",e.jsx("br",{}),"• ",e.jsx("span",{className:"text-cyan-300 font-bold",children:"GEN_SUSPENDED"}),": Paused at a ",e.jsx("code",{className:"text-slate-200",children:"yield"})," statement.",e.jsx("br",{}),"• ",e.jsx("span",{className:"text-amber-300 font-bold",children:"GEN_RUNNING"}),": Currently executing code inside the frame.",e.jsx("br",{}),"• ",e.jsx("span",{className:"text-purple-300 font-bold",children:"GEN_CLOSED"}),": Terminated via return, exception, or ",e.jsx("code",{className:"text-slate-200",children:"close()"}),"."]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Frame Freezing & Generator States"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>h("yieldcycle"),className:l("px-3 py-1.5 rounded-lg transition-all",d==="yieldcycle"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Yield & Resumption Cycle"}),e.jsx("button",{onClick:()=>h("states"),className:l("px-3 py-1.5 rounded-lg transition-all",d==="states"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"State Machine Lifecycle"}),e.jsx("button",{onClick:()=>h("returnval"),className:l("px-3 py-1.5 rounded-lg transition-all",d==="returnval"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"StopIteration.value Return"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining execution suspension points, state machine transitions, and PEP 380 return values:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:d==="yieldcycle"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"THE `yield` EXECUTION SUSPENSION & RESUMPTION CYCLE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"1. `next(gen)` Invocation"}),e.jsx("text",{x:"15",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Caller calls next(gen)"}),e.jsx("text",{x:"15",y:"80",fill:"#34d399",fontSize:"8 font-mono",children:"Frame starts or resumes"}),e.jsx("text",{x:"15",y:"100",fill:"#ecfdf5",fontSize:"8 font-mono",children:"from exact last line"}),e.jsx("rect",{x:"15",y:"130",width:"220",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"25",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"Resumed Execution:"}),e.jsx("text",{x:"25",y:"175",fill:"#cbd5e1",fontSize:"8",children:"CPython restores local"}),e.jsx("text",{x:"25",y:"190",fill:"#cbd5e1",fontSize:"8",children:"registers and bytecode pointer."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"310",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. Hits `yield item`"}),e.jsx("text",{x:"310",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"yield student_cert"}),e.jsx("text",{x:"310",y:"80",fill:"#38bdf8",fontSize:"8 font-mono",children:"1. Emits value to caller"}),e.jsx("text",{x:"310",y:"100",fill:"#38bdf8",fontSize:"8 font-mono font-bold",children:"2. Freezes stack frame!"}),e.jsx("rect",{x:"310",y:"130",width:"220",height:"85",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"320",y:"155",fill:"#38bdf8",fontSize:"9 font-bold",children:"Frame Frozen in RAM:"}),e.jsx("text",{x:"320",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Variables remain intact"}),e.jsx("text",{x:"320",y:"190",fill:"#cbd5e1",fontSize:"8",children:"without being garbage collected."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"605",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"3. Next `next()` Resumes"}),e.jsx("text",{x:"605",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"next(gen) called again"}),e.jsx("text",{x:"605",y:"80",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"Executes line AFTER yield!"}),e.jsx("rect",{x:"605",y:"130",width:"200",height:"85",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"615",y:"155",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Zero Recomputation:"}),e.jsx("text",{x:"615",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Seamlessly continues loop"}),e.jsx("text",{x:"615",y:"190",fill:"#cbd5e1",fontSize:"8",children:"from where it left off."})]})]}):d==="states"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"THE 4 GENERATOR LIFECYCLE STATES (`inspect.getgeneratorstate`)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"180",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"15",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"1. GEN_CREATED"}),e.jsx("text",{x:"15",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"`gen = stream()`"}),e.jsx("text",{x:"15",y:"80",fill:"#cbd5e1",fontSize:"8",children:"• Function called"}),e.jsx("text",{x:"15",y:"95",fill:"#cbd5e1",fontSize:"8",children:"• `next()` not yet run"}),e.jsx("rect",{x:"15",y:"130",width:"150",height:"80",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"25",y:"155",fill:"#c4b5fd",fontSize:"8 font-bold",children:"Waiting to Start"}),e.jsx("text",{x:"190",y:"125",fill:"#38bdf8",fontSize:"20",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"215",y:"0",width:"180",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"230",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. GEN_RUNNING"}),e.jsx("text",{x:"230",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"During `next(gen)`"}),e.jsx("text",{x:"230",y:"80",fill:"#cbd5e1",fontSize:"8",children:"• Bytecode executing"}),e.jsx("text",{x:"230",y:"95",fill:"#cbd5e1",fontSize:"8",children:"• Computing values"}),e.jsx("rect",{x:"230",y:"130",width:"150",height:"80",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"240",y:"155",fill:"#38bdf8",fontSize:"8 font-bold",children:"Active in Thread"}),e.jsx("text",{x:"405",y:"125",fill:"#38bdf8",fontSize:"20",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"430",y:"0",width:"180",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"445",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"3. GEN_SUSPENDED"}),e.jsx("text",{x:"445",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"At `yield` line"}),e.jsx("text",{x:"445",y:"80",fill:"#34d399",fontSize:"8 font-bold",children:"• Frame Frozen"}),e.jsx("text",{x:"445",y:"95",fill:"#cbd5e1",fontSize:"8",children:"• State preserved"}),e.jsx("rect",{x:"445",y:"130",width:"150",height:"80",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"455",y:"155",fill:"#34d399",fontSize:"8 font-bold",children:"Suspended in RAM"}),e.jsx("text",{x:"620",y:"125",fill:"#38bdf8",fontSize:"20",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"645",y:"0",width:"175",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"660",y:"30",fill:"#fda4af",fontSize:"11 font-bold",children:"4. GEN_CLOSED"}),e.jsx("text",{x:"660",y:"55",fill:"#fca5a5",fontSize:"8 font-mono",children:"On `return` / StopIter"}),e.jsx("text",{x:"660",y:"80",fill:"#f87171",fontSize:"8 font-bold",children:"• Exhausted"}),e.jsx("text",{x:"660",y:"95",fill:"#cbd5e1",fontSize:"8",children:"• Frame destroyed"}),e.jsx("rect",{x:"660",y:"130",width:"145",height:"80",rx:"4",fill:"#881337",stroke:"#e11d48"}),e.jsx("text",{x:"670",y:"155",fill:"#ffe4e6",fontSize:"8 font-bold",children:"Terminated"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"EXTRACTING `StopIteration.value` UPON GENERATOR COMPLETION (PEP 380)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"Generator Function with `return`"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"def stream_admissions(cohort):"}),e.jsx("text",{x:"35",y:"80",fill:"#cbd5e1",fontSize:"9 font-mono",children:"for c in cohort: yield c"}),e.jsx("text",{x:"35",y:"105",fill:"#34d399",fontSize:"9 font-mono font-bold",children:'return {"total": 4, "rev": 88000}'}),e.jsx("rect",{x:"20",y:"135",width:"340",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"160",fill:"#34d399",fontSize:"9 font-bold",children:"PEP 380 Mechanics:"}),e.jsx("text",{x:"30",y:"180",fill:"#ecfdf5",fontSize:"8 font-mono",children:"`return payload` does NOT yield a value."}),e.jsx("text",{x:"30",y:"198",fill:"#a7f3d0",fontSize:"8 font-mono",children:"It raises `StopIteration(payload)`!"})]}),e.jsxs("g",{transform:"translate(425, 140)",children:[e.jsx("text",{x:"0",y:"0",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",children:"captures"}),e.jsx("text",{x:"25",y:"25",fill:"#38bdf8",fontSize:"26",fontWeight:"bold",children:"→"})]}),e.jsxs("g",{transform:"translate(480, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"370",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"Consumer Capturing `exc.value`"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"try:"}),e.jsx("text",{x:"35",y:"80",fill:"#ecfdf5",fontSize:"9 font-mono",children:"next(gen)"}),e.jsx("text",{x:"20",y:"105",fill:"#fca5a5",fontSize:"9 font-mono font-bold",children:"except StopIteration as exc:"}),e.jsxs("text",{x:"35",y:"125",fill:"#34d399",fontSize:"9 font-mono font-bold",children:["summary = exc.value  # ","{","total: 4...","}"]}),e.jsx("rect",{x:"20",y:"145",width:"330",height:"75",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"30",y:"170",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Return Value Accessible:"}),e.jsx("text",{x:"30",y:"190",fill:"#cbd5e1",fontSize:"8 font-mono",children:"`exc.value` stores the return payload safely."})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Student Admission Stream Generator Simulator"})]}),e.jsxs("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:["Step through the admission generator stream using ",e.jsx("code",{className:"text-teal-300 font-mono",children:"next()"})," to watch the frame suspend at each ",e.jsx("code",{className:"text-teal-300 font-mono",children:"yield"}),", accumulate cumulative revenues, and capture the final ",e.jsx("code",{className:"text-purple-300 font-mono",children:"StopIteration.value"})," report:"]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"1. Generator Stepping Controls"}),e.jsx("button",{onClick:v,className:"text-[11px] font-mono text-slate-400 hover:text-white underline",children:"`stream = stream_admission()` (Reset)"})]}),e.jsx("button",{onClick:w,disabled:r==="GEN_CLOSED",className:l("w-full py-3 rounded-lg text-xs font-mono font-bold transition-all shadow-lg",r==="GEN_CLOSED"?"bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700":"bg-teal-600 hover:bg-teal-500 text-white shadow-teal-950/50"),children:r==="GEN_CLOSED"?"Generator Closed (StopIteration Raised)":r==="GEN_CREATED"?"Execute First `next(stream)` -> (Starts Generator)":"Execute Next `next(stream)` -> (Resumes Frame)"}),e.jsxs("div",{className:"space-y-1.5 pt-2 border-t border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400 font-bold block uppercase",children:"Candidate Stream Sequence & Frame Pointer:"}),e.jsx("div",{className:"space-y-1",children:c.map((t,n)=>e.jsxs("div",{className:l("p-2 rounded text-xs font-mono border transition-all flex justify-between items-center",x===n?"bg-teal-950 border-teal-500 text-teal-200 font-bold animate-glow-teal":x>n?"bg-slate-900/50 border-slate-800 text-slate-500":"bg-slate-900 border-slate-800 text-slate-300"),children:[e.jsxs("div",{children:[e.jsxs("span",{className:"font-bold",children:["[",n+1,"] ",t.id,": "]}),e.jsx("span",{children:t.name}),e.jsxs("span",{className:"text-[10px] text-slate-500 block",children:[t.course," (Disc: ",t.discount*100,"%)"]})]}),e.jsxs("div",{className:"text-right",children:[e.jsxs("span",{className:"text-emerald-400 font-bold",children:["INR ",(t.fee*(1-t.discount)).toLocaleString()]}),x===n&&e.jsx("span",{className:"ml-2 text-teal-400 font-bold block text-[10px]",children:"⏸️ YIELDED & SUSPENDED"})]})]},t.id))})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2 text-xs font-mono",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:"Generator Frame Inspector:"}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"`inspect.getgeneratorstate()`:"}),e.jsx("span",{className:l("font-bold",r==="GEN_CREATED"&&"text-purple-300",r==="GEN_SUSPENDED"&&"text-teal-300",r==="GEN_CLOSED"&&"text-rose-400"),children:r})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Enclosed Running Revenue:"}),e.jsxs("span",{className:"text-emerald-400 font-bold",children:["INR ",m.toLocaleString()]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Total Scholarships Awarded:"}),e.jsxs("span",{className:"text-cyan-300 font-bold",children:["INR ",g.toLocaleString()]})]})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[160px] space-y-1.5 font-mono text-xs",children:[e.jsx("span",{className:"text-slate-400 block font-bold text-[10px] uppercase",children:o?"Captured `StopIteration.value` Settlement Report:":"Live Yielded Stream Output:"}),o?e.jsxs("div",{className:"p-2.5 bg-slate-950 rounded border border-purple-800/80 space-y-1",children:[e.jsx("div",{className:"text-purple-300 font-bold text-sm",children:"Batch Settlement Complete"}),e.jsxs("div",{className:"text-slate-300",children:["Total Admitted: ",o.totalAdmitted," Students"]}),e.jsxs("div",{className:"text-emerald-400 font-bold",children:["Gross Revenue: INR ",o.grossCollected.toLocaleString()]}),e.jsxs("div",{className:"text-cyan-300",children:["Scholarships: INR ",o.totalScholarships.toLocaleString()]}),e.jsxs("div",{className:"text-[10px] text-slate-500",children:["Status: ",o.status]})]}):f.length===0?e.jsx("div",{className:"text-slate-500 italic text-[11px]",children:'Click "Execute First next(stream)" to start generator execution.'}):f.map((t,n)=>e.jsxs("div",{className:"p-1.5 bg-slate-950 rounded border border-slate-800 flex justify-between text-[11px]",children:[e.jsxs("span",{className:"text-teal-300 font-bold",children:[t.certId,": ",t.name]}),e.jsxs("span",{className:"text-emerald-400 font-bold",children:["INR ",t.netFee.toLocaleString()]})]},n))]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Generator vs Regular Function Reference Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Feature / Behavior"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Regular Function (`return`)"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Generator Function (`yield`)"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Engineering Impact"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"Invocation Result"}),e.jsx("td",{className:"py-3 px-4",children:"Executes body immediately, returns result"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Returns suspended Generator object"}),e.jsx("td",{className:"py-3 px-4",children:"Zero upfront computation cost"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"Memory Complexity"}),e.jsx("td",{className:"py-3 px-4 text-rose-300",children:"O(N) (Allocates full collection in RAM)"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"O(1) (Produces 1 item at a time)"}),e.jsx("td",{className:"py-3 px-4",children:"Zero Out-Of-Memory (OOM) crashes"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Frame Lifecycle"}),e.jsx("td",{className:"py-3 px-4",children:"Stack frame destroyed on return"}),e.jsx("td",{className:"py-3 px-4 text-purple-300",children:"Frame frozen in heap, resumes later"}),e.jsx("td",{className:"py-3 px-4",children:"State retention across calls"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"Stream Capability"}),e.jsx("td",{className:"py-3 px-4",children:"Finite collections only"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Supports infinite streams (Fibonacci)"}),e.jsx("td",{className:"py-3 px-4",children:"Continuous real-time pipelines"})]})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating generator fundamentals, Fibonacci sequence streams, generator return values, and admission batch generators:"}),e.jsx(I,{files:[{filename:"generator_fundamentals_and_yield_mechanics.py",code:D,description:"Generator instantiation vs execution, frame state inspection, and yield mechanics."},{filename:"fibonacci_and_sequence_generators.py",code:P,description:"Infinite and finite sequence generators with O(1) memory and tuition installment streams."},{filename:"generator_return_and_stopiteration_values.py",code:O,description:"Using return inside generators and capturing StopIteration.value payloads (PEP 380)."},{filename:"institutional_admission_batch_generator_stream.py",code:z,description:"Enterprise Student Admission Stream Generator with cumulative financial telemetry."}]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Calling Generator without Iterating"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-rose-300 font-mono",children:"my_gen()"})," returns a generator object without executing any lines of code inside the function body."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Drive the generator using ",e.jsx("code",{className:"text-emerald-300",children:"next()"})," or a ",e.jsx("code",{className:"text-emerald-300",children:"for"})," loop."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Building Full Lists Inside Generator"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-amber-300 font-mono",children:"results = [big_data]; for r in results: yield r"})," allocates memory upfront, defeating the O(1) purpose."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Yield items directly on the fly as they are computed."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Expecting `for` Loop to Catch Return Values"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Standard ",e.jsx("code",{className:"text-purple-300 font-mono",children:"for item in gen:"})," loops catch ",e.jsx("code",{className:"text-purple-300 font-mono",children:"StopIteration"})," and discard the returned value."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"yield from"})," or manual ",e.jsx("code",{className:"text-emerald-300",children:"try...except StopIteration as exc"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Attempting to Rewind a Generator"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Generators are strictly single-pass stream consumers; once exhausted, calling ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"next()"})," raises ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"StopIteration"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Re-invoke the generator function to create a new stream."]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering generator functions, the yield statement, generator states, and StopIteration.value:"}),e.jsx(G,{questions:F})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with generator lifecycles, yield recipes, and PEP 380 templates:"}),e.jsx("div",{className:"mb-10",children:e.jsx(C,{content:k,filename:"python_topic8_generators_yield_notes.txt",title:"Print Topic 8 Study Notes"})}),e.jsx(A,{})]})]})]})}export{V as default};
