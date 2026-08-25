import{b as r,j as e,bg as c}from"./vendor-react-core-Doz9nIC6.js";import{P as w}from"./PythonFileLoader-hCi5osN-.js";import{P as C}from"./PlainTextPrint-C08xhKA4.js";import{F as T}from"./FAQTemplate-CkSqDH4B.js";import{T as A}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const R=`# topic10_files/generator_expressions_syntax_and_parentheses_rules.py\r
# Module: 003_003_decorators-generators\r
# Topic: Generator expressions for memory efficiency\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 10 - File 1: Generator Expressions Syntax & Parentheses Rules\r
Demonstrates:\r
  1. Syntax of Generator Expressions: \`(expr for item in iterable if condition)\`\r
  2. Syntactic sugar: Omitting duplicate outer parentheses in single-argument function calls\r
  3. Short-circuiting evaluation with \`any()\` and \`all()\`\r
"""\r
\r
import sys\r
\r
def demonstrate_genexp_syntax():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - GENERATOR EXPRESSION SYNTAX & RULES")\r
    print("=" * 70)\r
\r
    raw_scores = [72, 85, 91, 58, 94, 63, 88]\r
\r
    # 1. List Comprehension vs Generator Expression Syntax:\r
    print("1. List Comprehension vs Generator Expression:")\r
    list_comp = [s * 1.10 for s in raw_scores if s >= 80]\r
    gen_exp = (s * 1.10 for s in raw_scores if s >= 80)\r
\r
    print(f"   * List Comprehension: {list_comp} (Type: {type(list_comp)})")\r
    print(f"   * Generator Expression: {gen_exp} (Type: {type(gen_exp)})\\n")\r
\r
    # 2. Parentheses Reduction in Single-Argument Calls:\r
    print("2. Parentheses Reduction in Built-in Aggregators (\`sum\`, \`max\`, \`min\`):")\r
    # Redundant double parentheses: sum(((s for s in raw_scores)))\r
    # Idiomatic single parentheses:\r
    total_score = sum(s for s in raw_scores)\r
    max_score = max(s for s in raw_scores if s < 90)\r
    min_score = min(s for s in raw_scores)\r
\r
    print(f"   * Idiomatic \`sum(s for s in ...)\`: {total_score}")\r
    print(f"   * Idiomatic \`max(s for s in ...)\`: {max_score}")\r
    print(f"   * Idiomatic \`min(s for s in ...)\`: {min_score}\\n")\r
\r
    # 3. Short-Circuiting Evaluation with \`any()\` and \`all()\`:\r
    print("3. Short-Circuiting Evaluation with \`any()\` & \`all()\`:")\r
    # Generator expression evaluation stops IMMEDIATELY on the first True for any()!\r
    has_topper = any(s >= 90 for s in raw_scores)\r
    all_passed = all(s >= 60 for s in raw_scores)  # Stops on 58!\r
\r
    print(f"   * Has Candidate achieved >= 90%? : {has_topper} (Short-circuits on 91!)")\r
    print(f"   * Have all candidates passed >= 60%? : {all_passed} (Short-circuits on 58!)")\r
\r
    print(r"""\r
The Generator Expression Rules:\r
  1. Syntax: \`(expr for x in iterable if cond)\`\r
  2. Single-Argument Sugar: \`func(x for x in seq)\` instead of \`func((x for x in seq))\`\r
  3. Short-Circuit Efficiency: When used with \`any()\`, \`all()\`, or \`next()\`, evaluation\r
     halts as soon as the condition is satisfied without computing remaining elements!\r
""")\r
    print("[PASSED] Generator Expression Syntax & Rules Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_genexp_syntax()\r
`,P=`# topic10_files/chained_generator_expressions_pipeline.py\r
# Module: 003_003_decorators-generators\r
# Topic: Generator expressions for memory efficiency\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 10 - File 2: Chained Generator Expressions Data Pipeline\r
Demonstrates:\r
  1. Composing Unix-style data processing pipelines using chained generator expressions\r
  2. Data transformations (Ingest -> Parse -> Filter -> Format)\r
  3. Processing without creating intermediate lists in memory\r
"""\r
\r
def demonstrate_chained_genexps():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - CHAINED GENERATOR EXPRESSIONS PIPELINE")\r
    print("=" * 70)\r
\r
    # Simulated raw CSV strings from admission portal:\r
    raw_csv_logs = [\r
        "STU-101,Sourav Mukherjee,Python AI,25000.0,0.20",\r
        "STU-102,Priyanka Sen,Data Science,30000.0,0.10",\r
        "# COMMENT: Incomplete record to be ignored",\r
        "STU-103,Rahul Verma,Python Core,18000.0,0.00",\r
        "INVALID_ROW",\r
        "STU-104,Debolina Roy,Machine Learning,28000.0,0.15",\r
    ]\r
\r
    print("1. Assembling 4-Stage Chained Generator Pipeline:")\r
\r
    # Stage 1: Filter out comments and blank rows:\r
    non_comments = (line.strip() for line in raw_csv_logs if line.strip() and not line.startswith("#"))\r
\r
    # Stage 2: Parse valid 5-column CSV rows:\r
    parsed_records = (\r
        line.split(",")\r
        for line in non_comments\r
        if len(line.split(",")) == 5\r
    )\r
\r
    # Stage 3: Convert types and compute net fee payable:\r
    fee_structures = (\r
        {\r
            "id": row[0],\r
            "name": row[1],\r
            "course": row[2],\r
            "base_fee": float(row[3]),\r
            "discount_rate": float(row[4]),\r
            "net_payable": float(row[3]) * (1.0 - float(row[4]))\r
        }\r
        for row in parsed_records\r
    )\r
\r
    # Stage 4: Filter for high-value student enrollments (Net fee >= INR 20,000):\r
    high_value_enrollments = (\r
        rec for rec in fee_structures\r
        if rec["net_payable"] >= 20000.0\r
    )\r
\r
    print("   [PIPELINE ASSEMBLED] Zero records consumed yet (Pipelined in RAM).\\n")\r
\r
    # Final Sink: Consuming the pipeline:\r
    print("2. Consuming Pipeline via \`for\` Loop (Pull-based streaming):")\r
    total_high_value_revenue = 0.0\r
\r
    for item in high_value_enrollments:\r
        print(\r
            f"   * [{item['id']}] {item['name']:<18} ({item['course']:<16}) -> "\r
            f"Net: INR {item['net_payable']:>8,.2f} (Disc: {item['discount_rate']*100:.0f}%)"\r
        )\r
        total_high_value_revenue += item["net_payable"]\r
\r
    print(f"\\n   Total High-Value Enrollment Revenue: INR {total_high_value_revenue:,.2f}")\r
\r
    print(r"""\r
Pipeline Principle:\r
  Data flows element-by-element through each generator expression:\r
  Raw CSV -> Filter -> Parse -> Transform -> High-Value Filter -> Sink\r
  Memory usage remains O(1) throughout all 4 stages!\r
""")\r
    print("[PASSED] Chained Generator Expressions Pipeline Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_chained_genexps()\r
`,z=`# topic10_files/memory_profiling_comprehensions_vs_genexps.py\r
# Module: 003_003_decorators-generators\r
# Topic: Generator expressions for memory efficiency\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 10 - File 3: Memory Profiling: Comprehensions vs Generator Expressions\r
Demonstrates:\r
  1. Memory consumption of List Comprehension \`[...]\` vs Generator Expression \`(...)\`\r
  2. Comparing Set Comprehension \`{...}\` and Dict Comprehension \`{k:v ...}\`\r
  3. Measuring live heap allocations with \`tracemalloc\`\r
"""\r
\r
import sys\r
import tracemalloc\r
\r
def profile_comprehensions_memory():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - COMPREHENSIONS VS GENERATOR EXPRESSIONS PROFILING")\r
    print("=" * 70)\r
\r
    N = 200_000\r
    print(f"Profiling Dataset Scale: {N:,} elements\\n")\r
\r
    # 1. Generator Expression:\r
    tracemalloc.start()\r
    gen_exp = (x ** 2 for x in range(N))\r
    current_gen, peak_gen = tracemalloc.get_traced_memory()\r
    tracemalloc.stop()\r
    gen_sizeof = sys.getsizeof(gen_exp)\r
\r
    print("1. Generator Expression \`(x**2 for x in range(N))\`:")\r
    print(f"   * \`sys.getsizeof\`   : {gen_sizeof:,} bytes")\r
    print(f"   * Peak Traced Memory: {peak_gen:,} bytes (~{peak_gen / 1024:.2f} KB)\\n")\r
\r
    # 2. List Comprehension:\r
    tracemalloc.start()\r
    list_comp = [x ** 2 for x in range(N)]\r
    current_list, peak_list = tracemalloc.get_traced_memory()\r
    tracemalloc.stop()\r
    list_sizeof = sys.getsizeof(list_comp)\r
\r
    print("2. List Comprehension \`[x**2 for x in range(N)]\`:")\r
    print(f"   * \`sys.getsizeof\`   : {list_sizeof:,} bytes (~{list_sizeof / 1024 / 1024:.2f} MB)")\r
    print(f"   * Peak Traced Memory: {peak_list:,} bytes (~{peak_list / 1024 / 1024:.2f} MB)\\n")\r
\r
    # 3. Set Comprehension:\r
    tracemalloc.start()\r
    set_comp = {x % 1000 for x in range(N)}\r
    current_set, peak_set = tracemalloc.get_traced_memory()\r
    tracemalloc.stop()\r
    set_sizeof = sys.getsizeof(set_comp)\r
\r
    print("3. Set Comprehension \`{x % 1000 for x in range(N)}\`:")\r
    print(f"   * \`sys.getsizeof\`   : {set_sizeof:,} bytes (~{set_sizeof / 1024:.2f} KB)")\r
    print(f"   * Peak Traced Memory: {peak_set:,} bytes (~{peak_set / 1024 / 1024:.2f} MB)\\n")\r
\r
    # 4. Aggregating with Generator Expression without intermediate List:\r
    print("4. Calculating Sum of Squares: \`sum(x**2 for x in range(N))\`:")\r
    tracemalloc.start()\r
    total_sum = sum(x ** 2 for x in range(N))\r
    current_sum, peak_sum = tracemalloc.get_traced_memory()\r
    tracemalloc.stop()\r
\r
    print(f"   * Calculated Sum    : {total_sum:,}")\r
    print(f"   * Peak Traced Memory: {peak_sum:,} bytes (Zero intermediate list allocation!)")\r
\r
    print(r"""\r
Memory Efficiency Summary:\r
  - List Comprehension Peak RAM : ~7.5+ MB\r
  - GenExp Stream Peak RAM      : ~0.001 MB (~1 KB!)\r
""")\r
    print("[PASSED] Memory Profiling Comprehensions vs GenExps Verified.")\r
\r
\r
if __name__ == "__main__":\r
    profile_comprehensions_memory()\r
`,G=`# topic10_files/institutional_examination_audit_stream_analyzer.py\r
# Module: 003_003_decorators-generators\r
# Topic: Generator expressions for memory efficiency\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 10 - File 4: Institutional Exam Audit Stream Analyzer (Case Study)\r
Demonstrates:\r
  1. Multi-stage real-time stream analysis using pure Generator Expressions\r
  2. Zero intermediate list allocations for audit telemetry\r
  3. Fast short-circuiting validation checks using \`any()\` and \`all()\`\r
"""\r
\r
def run_exam_audit_analyzer():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - INSTITUTIONAL EXAM AUDIT STREAM ANALYZER")\r
    print("=" * 70)\r
\r
    # Ingesting raw multi-candidate ledger streams:\r
    raw_exam_stream = [\r
        "STU-101 | Sourav Mukherjee | AI Python | 94.5 | CLEARED",\r
        "STU-102 | Priyanka Sen | Data Science | 88.0 | CLEARED",\r
        "STU-103 | Rahul Verma | Python Core | 76.5 | CLEARED",\r
        "STU-104 | Debolina Roy | Machine Learning | 91.0 | CLEARED",\r
        "STU-105 | Amitava Sen | Full-Stack Web | 54.0 | RE-EXAM_REQUIRED",\r
    ]\r
\r
    print("1. Constructing 4-Stage Generator Expression Analytics Pipeline:")\r
\r
    # Stage 1: Clean & Tokenize:\r
    tokenized_records = (\r
        [field.strip() for field in row.split("|")]\r
        for row in raw_exam_stream\r
    )\r
\r
    # Stage 2: Cast types & validate schemas:\r
    structured_candidates = (\r
        {\r
            "id": fields[0],\r
            "name": fields[1],\r
            "course": fields[2],\r
            "score": float(fields[3]),\r
            "status": fields[4]\r
        }\r
        for fields in tokenized_records\r
        if len(fields) == 5\r
    )\r
\r
    # Stage 3: Merit & Scholarship Tier Classification:\r
    classified_stream = (\r
        {\r
            **cand,\r
            "scholarship_rate": (\r
                0.50 if cand["score"] >= 90.0\r
                else 0.25 if cand["score"] >= 80.0\r
                else 0.10 if cand["score"] >= 70.0\r
                else 0.00\r
            ),\r
            "tier": (\r
                "PLATINUM" if cand["score"] >= 90.0\r
                else "GOLD" if cand["score"] >= 80.0\r
                else "SILVER" if cand["score"] >= 70.0\r
                else "STANDARD"\r
            )\r
        }\r
        for cand in structured_candidates\r
    )\r
\r
    # Stage 4: Filter for Distinction & Scholarship Recipients:\r
    scholarship_recipients = (\r
        c for c in classified_stream\r
        if c["scholarship_rate"] > 0.0 and c["status"] == "CLEARED"\r
    )\r
\r
    # 2. Consume Pipeline:\r
    print("\\n2. Streaming Qualified Merit Scholarship Candidates:")\r
    total_concession_points = 0.0\r
    recipient_count = 0\r
\r
    for cand in scholarship_recipients:\r
        print(\r
            f"   * [{cand['id']}] {cand['name']:<18} | Score: {cand['score']:4.1f}% | "\r
            f"Tier: {cand['tier']:<8} | Scholarship: {cand['scholarship_rate']*100:.0f}%"\r
        )\r
        total_concession_points += cand["scholarship_rate"] * 100.0\r
        recipient_count += 1\r
\r
    avg_scholarship = total_concession_points / recipient_count if recipient_count > 0 else 0.0\r
    print(f"\\n   Total Qualified Candidates : {recipient_count}")\r
    print(f"   Average Scholarship Award  : {avg_scholarship:.1f}%")\r
\r
    print("\\n[PASSED] Institutional Exam Audit Stream Analyzer Verified.")\r
\r
\r
if __name__ == "__main__":\r
    run_exam_audit_analyzer()\r
`,k=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_003: DECORATORS & GENERATORS\r
         TOPIC 10: GENERATOR EXPRESSIONS FOR MEMORY EFFICIENCY IN PYTHON\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. GENERATOR EXPRESSION SYNTAX\r
--------------------------------------------------------------------------------\r
  # List Comprehension: Allocates full list in RAM (O(N)):\r
  list_data = [x ** 2 for x in range(1000000)]\r
\r
  # Generator Expression: Streams lazily on demand (O(1)):\r
  gen_data  = (x ** 2 for x in range(1000000))\r
\r
--------------------------------------------------------------------------------\r
2. PARENTHESES REDUCTION IN SINGLE-ARGUMENT CALLS\r
--------------------------------------------------------------------------------\r
  # Idiomatic single parentheses:\r
  total = sum(x ** 2 for x in numbers)\r
  largest = max(s for s in scores if s < 100)\r
\r
--------------------------------------------------------------------------------\r
3. SHORT-CIRCUITING WITH any() AND all()\r
--------------------------------------------------------------------------------\r
  # Evaluates ONLY until first match is found:\r
  has_passed = any(score >= 40 for score in student_scores)\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 10: GENERATOR EXPRESSIONS\r
================================================================================\r
`,I=[{question:"What is a Generator Expression in Python?",shortAnswer:"A concise, inline expression using parentheses '(expr for item in iterable if condition)' that returns a generator iterator object evaluating elements lazily on demand.",explanation:"Syntactically similar to list comprehensions but evaluated lazily.",hint:"An inline generator defined with parentheses (x for x in iterable).",level:"basic",codeExample:"squares_gen = (x**2 for x in range(1000))"},{question:"How does a Generator Expression differ syntactically from a List Comprehension?",shortAnswer:"A List Comprehension uses square brackets '[x for x in seq]' and builds a full list in RAM; a Generator Expression uses parentheses '(x for x in seq)' and builds a lazy generator object.",explanation:"Square brackets = eager List; parentheses = lazy Generator.",hint:"Square brackets [] vs parentheses ().",level:"basic",codeExample:`l = [x for x in r]  # List
g = (x for x in r)  # Generator`},{question:"What is the Parentheses Reduction rule for Generator Expressions?",shortAnswer:"When a generator expression is the ONLY argument to a function call (e.g. 'sum', 'min', 'max', 'join'), the outer parentheses of the generator expression can be omitted: 'sum(x for x in data)' instead of 'sum((x for x in data))'.",explanation:"Standard idiomatic Python syntax clean-up.",hint:"You can omit the outer parentheses when genexp is the sole argument to a function.",level:"basic",codeExample:"total = sum(x**2 for x in range(10))"},{question:"Why should you use a Generator Expression inside 'sum()' instead of a List Comprehension?",shortAnswer:"'sum(x for x in data)' calculates the sum on the fly using O(1) constant memory without ever allocating a temporary multi-megabyte list in RAM.",explanation:"Eliminates intermediate list garbage collection overhead.",hint:"Avoids allocating an unnecessary intermediate list in memory.",level:"basic",codeExample:`# BAD: sum([x for x in range(10**7)])
# GOOD: sum(x for x in range(10**7))`},{question:"How does 'Short-Circuiting' work with Generator Expressions and 'any()' or 'all()'?",shortAnswer:"'any(gen)' stops evaluation on the first True element; 'all(gen)' stops on the first False element. Remaining generator items are NEVER computed or evaluated.",explanation:"Saves massive CPU time when scanning large datasets.",hint:"Stops evaluating remaining items immediately when the condition is decided.",level:"moderate",codeExample:"has_topper = any(s >= 90 for s in huge_scores_stream)"},{question:"How can you extract only the FIRST matching item from an iterable using a Generator Expression?",shortAnswer:"'next((item for item in iterable if condition), default_value)' finds and returns the first matching item lazily without evaluating subsequent items.",explanation:"The standard Pythonic idiom for 'find first'.",hint:"Use next((x for x in seq if cond), default).",level:"moderate",codeExample:"first_topper = next((s for s in students if s.score >= 90), None)"},{question:"How do you chain multiple Generator Expressions into a multi-stage streaming pipeline?",shortAnswer:"By passing the output generator of one expression as the input iterable of the next: 'stage2 = (transform(x) for x in stage1 if valid(x))'.",explanation:"Unix-style composable streaming with zero intermediate memory.",hint:"Feed one generator expression directly into the next.",level:"moderate",codeExample:`cleaned = (s.strip() for s in lines)
parsed = (json.loads(s) for s in cleaned)`},{question:"What is the memory complexity of a 5-stage Chained Generator Expression pipeline?",shortAnswer:"O(1) constant auxiliary space across all 5 stages, as items flow element-by-element through the stages without accumulating intermediate arrays.",explanation:"Constant memory throughout the entire data processing lifecycle.",hint:"O(1) constant memory across all pipeline stages.",level:"basic",codeExample:"# Memory remains ~112 bytes across all chained stages"},{question:"Why does evaluating a Generator Expression multiple times require re-creating it?",shortAnswer:"Because like all generators, generator expressions are single-pass iterators that become exhausted upon reaching the end of the stream.",explanation:"To re-iterate, the generator expression must be defined again.",hint:"Generators are single-pass; once consumed, they are exhausted.",level:"basic",codeExample:"g = (x for x in range(3)); list(g); list(g) # Second list is []"},{question:"How does a Tuple Comprehension compare to a Generator Expression?",shortAnswer:"There is NO tuple comprehension in Python; writing '(x for x in data)' creates a Generator Expression. To create a tuple, you must pass the genexp to 'tuple()': 'tuple(x for x in data)'.",explanation:"Common Python syntax gotcha for beginners.",hint:"(x for x in seq) creates a generator, NOT a tuple.",level:"basic",codeExample:"my_tuple = tuple(x for x in range(5))"},{question:"When is a List Comprehension faster than a Generator Expression?",shortAnswer:"When you genuinely need the full list in memory for indexing or multiple iterations; list comprehensions are implemented in optimized C loops and can build lists ~10-15% faster than 'list(gen_exp)'.",explanation:"Direct C-level array pre-allocation vs generator frame step overhead.",hint:"When a full list in RAM is mandatory, list comprehensions build lists faster.",level:"moderate",codeExample:"# [x for x in r] is faster than list((x for x in r))"},{question:"Can a Generator Expression contain multiple 'for' clauses (nested loops)?",shortAnswer:"Yes. '( (x, y) for x in seq_a for y in seq_b if condition )' produces cartesian products lazily on demand.",explanation:"Supports nested iteration over multiple dimensions.",hint:"Yes, multiple 'for' and 'if' clauses are allowed.",level:"moderate",codeExample:"pairs = ((r, c) for r in rows for c in cols)"},{question:"What happens to variable scope inside a Generator Expression in Python 3?",shortAnswer:"Loop variables inside generator expressions are localized to a private inner frame and do NOT leak into or overwrite variables in the enclosing scope.",explanation:"Guaranteed scope isolation in Python 3+.",hint:"Loop variables are scoped privately and do not leak to outer scope.",level:"moderate",codeExample:"x = 100; g = (x for x in range(5)); list(g); assert x == 100"},{question:"How does string '.join()' benefit from Generator Expressions?",shortAnswer:"Writing `','.join(str(x) for x in data)` formats and joins items without building an intermediate list of strings in RAM.",explanation:"Efficient formatted string serialization.",hint:"Streams formatted strings directly into the join buffer.",level:"basic",codeExample:"csv_line = ','.join(str(x) for x in row)"},{question:"Can a Generator Expression be indexed (e.g. 'g[0]')?",shortAnswer:"No. Generator expressions do not support indexing or slicing; attempting to index raises 'TypeError: 'generator' object is not subscriptable'.",explanation:"Use itertools.islice() or next() instead.",hint:"Raises TypeError; generators cannot be indexed.",level:"basic",codeExample:"# TypeError: 'generator' object is not subscriptable"},{question:"How does 'itertools.compress' or 'itertools.filterfalse' compare to Generator Expressions with 'if' filters?",shortAnswer:"Generator expressions '(x for x in data if cond)' provide equivalent functionality with more readable, Pythonic inline syntax.",explanation:"GenExps are often preferred for standard inline filtering.",hint:"GenExps provide readable inline syntax for filtering without importing itertools.",level:"basic",codeExample:"filtered = (x for x in data if x > 0)"},{question:"What happens if an exception is raised inside the expression part of a Generator Expression?",shortAnswer:"The exception is NOT raised when the generator expression is defined; it is raised only when the specific faulty element is evaluated during a 'next()' call.",explanation:"Deferred exception evaluation due to lazy execution.",hint:"Exceptions are deferred until the element is actually fetched via next().",level:"moderate",codeExample:"g = (1/x for x in [1, 0, 2]) # No error on definition; errors on 0 during next()"},{question:"Can a Generator Expression refer to global or enclosing variables?",shortAnswer:"Yes. The expression can read variables from enclosing (closure) and global scopes, resolving them at evaluation time.",explanation:"Standard LEGB lexical scope rules apply.",hint:"Yes, standard LEGB scope resolution applies.",level:"basic",codeExample:"tax = 0.18; g = (price * (1 + tax) for price in prices)"},{question:"What is the 'Late Binding' gotcha with Generator Expressions inside loops?",shortAnswer:"If a generator expression captures a loop variable by reference, all generated items will see the FINAL value of the loop variable unless default arguments or closures bind the value eagerly.",explanation:"The classic loop variable closure capture trap.",hint:"Captures the variable by reference, seeing only its final loop value.",level:"complex",codeExample:"# Multipliers late binding trap"},{question:"How does 'sys.getsizeof()' prove that a Generator Expression does not store elements?",shortAnswer:"'sys.getsizeof((x for x in range(N)))' returns ~112 bytes for N=10, N=1,000, and N=1,000,000, proving zero elements are stored in memory.",explanation:"Direct proof of constant O(1) memory complexity.",hint:"Returns constant ~112 bytes regardless of range size N.",level:"basic",codeExample:"assert sys.getsizeof((x for x in range(10**9))) < 200"},{question:"Can you pass multiple generator expressions into a function taking '*args'?",shortAnswer:"Yes, but you must include explicit parentheses around each generator expression to disambiguate the argument boundaries: 'my_func((x for x in a), (y for y in b))'.",explanation:"Parentheses reduction only applies to single-argument calls.",hint:"Must use explicit parentheses around each genexp when passing multiple arguments.",level:"moderate",codeExample:"zip((x for x in a), (y for y in b))"},{question:"What is the difference between 'map(func, iterable)' and '(func(x) for x in iterable)'?",shortAnswer:"Both are lazy iterators with O(1) memory; generator expressions are often preferred for readability, support for inline 'if' filtering, and avoiding lambda definitions.",explanation:"Modern Python style favors generator expressions over map/filter with lambdas.",hint:"GenExps are more readable and support inline 'if' clauses without lambdas.",level:"basic",codeExample:"(func(x) for x in seq if cond)"},{question:"How does a generator expression behave when passed to 'dict()'?",shortAnswer:"If the generator expression yields 2-element pairs '(key, value)', 'dict(gen)' consumes the stream and constructs a dictionary: 'dict((s.id, s.name) for s in students)'.",explanation:"Memory-efficient dictionary instantiation from streams.",hint:"Builds a dictionary from yielded (key, value) pairs.",level:"basic",codeExample:"d = dict((s.id, s.name) for s in students)"},{question:"Can a generator expression be used in an asynchronous 'async for' loop?",shortAnswer:"Synchronous generator expressions cannot be used with 'async for'; for asynchronous iteration, asynchronous generator expressions or async comprehensions (PEP 530) are used.",explanation:"Async comprehensions support async streams in Python 3.6+.",hint:"Use async comprehensions (PEP 530) for async streams.",level:"complex",codeExample:"async for x in async_gen(): pass"},{question:"What is the ultimate golden rule for Generator Expressions in Python?",shortAnswer:"Use Generator Expressions '(expr for x in iterable if cond)' whenever aggregating ('sum', 'any', 'all', 'max') or chaining multi-stage pipelines to guarantee constant O(1) memory and instant responsiveness.",explanation:"The gold standard for clean, memory-efficient data transformations.",hint:"Use genexps for aggregations and pipelines to ensure O(1) memory.",level:"basic",codeExample:"# Python Generator Expression Mastery"}];function H(){const p=r.useRef([]),[i,m]=r.useState("syntax"),j=[{id:"STU-101",name:"Sourav Mukherjee",score:94.5,baseFee:25e3},{id:"STU-102",name:"Priyanka Sen",score:88,baseFee:3e4},{id:"STU-103",name:"Rahul Verma",score:62,baseFee:18e3},{id:"STU-104",name:"Debolina Roy",score:91,baseFee:28e3},{id:"STU-105",name:"Amitava Sen",score:54,baseFee:22e3}],[h,N]=r.useState(70),[f,S]=r.useState(!0),[x,g]=r.useState(-1),[o,b]=r.useState([]),[l,y]=r.useState(!1),a=j.filter(t=>t.score>=h),u=()=>{g(-1),b([]),y(!1)},_=()=>{if(l)return;const t=x+1;if(t<a.length){const n=a[t],d=f&&n.score>=90?.2:f&&n.score>=80?.1:0,v=n.baseFee*(1-d),E={id:n.id,name:n.name,score:n.score,tier:n.score>=90?"DISTINCTION":"MERIT",netFee:v,discount:d*100};g(t),b([...o,E])}else y(!0)};r.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(d=>{d.isIntersecting&&d.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return p.current.forEach(n=>{n&&t.observe(n)}),()=>t.disconnect()},[]);const s=t=>{t&&!p.current.includes(t)&&p.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:s,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_003"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 10"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Decorators, Generators & Iterators"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Generator Expressions ",e.jsx("span",{className:"text-teal-400",children:"for Memory Efficiency"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master Python Generator Expressions: syntax ",e.jsx("code",{className:"text-teal-300 font-mono",children:"(expr for x in seq if cond)"}),", parentheses reduction in single-argument functions (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"sum()"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"max()"}),"), short-circuiting with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"any()"})," / ",e.jsx("code",{className:"text-purple-300 font-mono",children:"all()"}),", and composing chained streaming pipelines."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"( ) GenExp Syntax vs [ ] ListComp"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🎯 Single-Argument Parentheses Reduction"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ Short-Circuiting with any() & all()"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔗 Chained Multi-Stage Pipelines"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💡"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. Generator Expression Syntax & Rules"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"Generator expressions provide concise inline generator syntax using parentheses instead of square brackets:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/90 border border-slate-800 shadow-lg",children:[e.jsx("div",{className:"text-slate-200 font-bold text-sm mb-1",children:"📦 List Comprehension `[...]`"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"list_data = [x**2 for x in seq if x > 0]"}),e.jsxs("p",{className:"text-[11px] text-slate-400",children:["Builds and populates the entire list in memory upfront. Consumes ",e.jsx("code",{className:"text-slate-300 font-mono",children:"O(N)"})," RAM."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"⚡ Generator Expression `(...)`"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"gen_data = (x**2 for x in seq if x > 0)"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Constructs a lazy generator iterator object. Consumes ",e.jsx("code",{className:"text-teal-300 font-mono",children:"O(1)"})," constant memory (~112 bytes)."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"Parentheses Reduction in Single-Argument Calls"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["When passing a generator expression as the sole argument to a function, you can omit the redundant outer parentheses:",e.jsx("br",{}),e.jsx("span",{className:"text-teal-300 font-bold",children:"sum(x**2 for x in data)"})," ",e.jsx("span",{className:"text-slate-500",children:"(Idiomatic)"}),e.jsx("br",{}),e.jsx("span",{className:"text-slate-400",children:"sum((x**2 for x in data))"})," ",e.jsx("span",{className:"text-slate-500",children:"(Redundant outer parens)"})]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Comprehensions, Pipelines & Short-Circuiting"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>m("syntax"),className:c("px-3 py-1.5 rounded-lg transition-all",i==="syntax"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"`[]` vs `()` Allocation"}),e.jsx("button",{onClick:()=>m("pipeline"),className:c("px-3 py-1.5 rounded-lg transition-all",i==="pipeline"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Chained Pipeline Flow"}),e.jsx("button",{onClick:()=>m("shortcircuit"),className:c("px-3 py-1.5 rounded-lg transition-all",i==="shortcircuit"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Short-Circuit: any() / all()"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining memory buffers, multi-stage filter-map pipelines, and immediate short-circuiting termination:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:i==="syntax"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"LIST COMPREHENSION `[...]` VS GENERATOR EXPRESSION `(...)`"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"List Comprehension: `[x**2 for x in data]`"}),e.jsx("text",{x:"20",y:"60",fill:"#fca5a5",fontSize:"9 font-mono",children:"1. Allocates full array on heap"}),e.jsx("text",{x:"20",y:"80",fill:"#fca5a5",fontSize:"9 font-mono",children:"2. Evaluates all elements eagerly"}),e.jsx("text",{x:"20",y:"100",fill:"#fca5a5",fontSize:"9 font-mono",children:"3. Returns full List object"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"155",fill:"#fda4af",fontSize:"9 font-bold",children:"Memory & Scale:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"• 1,000,000 ints: ~8.4 MB of RAM"}),e.jsx("text",{x:"30",y:"190",fill:"#cbd5e1",fontSize:"8",children:"• O(N) Space Complexity"})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"Generator Expression: `(x**2 for x in data)`"}),e.jsx("text",{x:"20",y:"60",fill:"#34d399",fontSize:"9 font-mono",children:"1. Allocates zero element arrays"}),e.jsx("text",{x:"20",y:"80",fill:"#34d399",fontSize:"9 font-mono",children:"2. Evaluates 1 item on demand via `next()`"}),e.jsx("text",{x:"20",y:"100",fill:"#34d399",fontSize:"9 font-mono",children:"3. Returns lightweight Generator object"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"Memory & Scale:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"• 1,000,000 ints: ~112 Bytes of RAM"}),e.jsx("text",{x:"30",y:"190",fill:"#cbd5e1",fontSize:"8",children:"• O(1) Constant Space Complexity"})]})]}):i==="pipeline"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"CHAINED GENERATOR EXPRESSIONS PIPELINE (SOURCE → FILTER → MAP → SINK)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"180",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"15",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"1. Ingest Lines"}),e.jsx("text",{x:"15",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"raw_lines"}),e.jsx("rect",{x:"15",y:"110",width:"150",height:"100",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"25",y:"135",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Stream Ingestion:"}),e.jsx("text",{x:"25",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Reads raw CSV text"}),e.jsx("text",{x:"25",y:"170",fill:"#cbd5e1",fontSize:"8",children:"line-by-line."}),e.jsx("text",{x:"190",y:"125",fill:"#38bdf8",fontSize:"20",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"215",y:"0",width:"180",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"230",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. Parse & Filter"}),e.jsx("text",{x:"230",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"(s.split(',') for s in l)"}),e.jsx("rect",{x:"230",y:"110",width:"150",height:"100",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"240",y:"135",fill:"#38bdf8",fontSize:"9 font-bold",children:"Schema Filter:"}),e.jsx("text",{x:"240",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Ignores invalid lines"}),e.jsx("text",{x:"240",y:"170",fill:"#cbd5e1",fontSize:"8",children:"and comment headers."}),e.jsx("text",{x:"405",y:"125",fill:"#38bdf8",fontSize:"20",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"430",y:"0",width:"180",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"445",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"3. Transform Fees"}),e.jsx("text",{x:"445",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"(compute_fee(x) for x)"}),e.jsx("rect",{x:"445",y:"110",width:"150",height:"100",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"455",y:"135",fill:"#34d399",fontSize:"9 font-bold",children:"Business Logic:"}),e.jsx("text",{x:"455",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Calculates discounts"}),e.jsx("text",{x:"455",y:"170",fill:"#cbd5e1",fontSize:"8",children:"and net fee structures."}),e.jsx("text",{x:"620",y:"125",fill:"#38bdf8",fontSize:"20",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"645",y:"0",width:"175",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"660",y:"30",fill:"#a7f3d0",fontSize:"11 font-bold",children:"4. Consumer Sink"}),e.jsx("text",{x:"660",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"sum(x.net for x in p)"}),e.jsx("rect",{x:"660",y:"110",width:"145",height:"100",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"670",y:"135",fill:"#34d399",fontSize:"9 font-bold",children:"Total Aggregation:"}),e.jsx("text",{x:"670",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Calculates sum with"}),e.jsx("text",{x:"670",y:"170",fill:"#cbd5e1",fontSize:"8",children:"constant O(1) memory!"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"SHORT-CIRCUITING EVALUATION WITH `any()` AND `all()`"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"15",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"1. Large Dataset (100K)"}),e.jsx("text",{x:"15",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"scores = [72, 85, 91, 58...]"}),e.jsx("rect",{x:"15",y:"110",width:"220",height:"105",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"25",y:"135",fill:"#38bdf8",fontSize:"9 font-bold",children:"Lazy Feeder:"}),e.jsx("text",{x:"25",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Generator expression yields"}),e.jsx("text",{x:"25",y:"170",fill:"#cbd5e1",fontSize:"8",children:"one score at a time."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"310",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"2. `any(s >= 90 for s)`"}),e.jsx("text",{x:"310",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Step 1: 72 >= 90 -> False"}),e.jsx("text",{x:"310",y:"75",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Step 2: 85 >= 90 -> False"}),e.jsx("text",{x:"310",y:"95",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"Step 3: 91 >= 90 -> TRUE!"}),e.jsx("rect",{x:"310",y:"120",width:"220",height:"95",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"320",y:"145",fill:"#34d399",fontSize:"9 font-bold",children:"Match Found!"}),e.jsx("text",{x:"320",y:"165",fill:"#cbd5e1",fontSize:"8",children:"`any()` immediately returns True"}),e.jsx("text",{x:"320",y:"180",fill:"#cbd5e1",fontSize:"8",children:"and halts all further iterations!"}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"605",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"3. 99,997 Items Skipped"}),e.jsx("text",{x:"605",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Remaining items untouched"}),e.jsx("text",{x:"605",y:"75",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"Zero wasted CPU cycles"}),e.jsx("rect",{x:"605",y:"110",width:"200",height:"105",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"615",y:"135",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Instant Execution:"}),e.jsx("text",{x:"615",y:"155",fill:"#cbd5e1",fontSize:"8",children:"Completes in 0.002 ms"}),e.jsx("text",{x:"615",y:"170",fill:"#cbd5e1",fontSize:"8",children:"without scanning the rest!"})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Generator Expression Pipeline Laboratory & Stepper"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Configure pipeline filters and step through the generator expression stream one record at a time to inspect lazy transformation in action:"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"1. Pipeline Configuration"}),e.jsx("button",{onClick:u,className:"text-[11px] font-mono text-slate-400 hover:text-white underline",children:"Reset Stream"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-xs font-mono text-slate-300",children:[e.jsx("span",{children:"Minimum Qualifying Score Filter:"}),e.jsxs("span",{className:"text-teal-300 font-bold",children:[h,"%"]})]}),e.jsx("input",{type:"range",min:"50",max:"90",step:"5",value:h,onChange:t=>{N(Number(t.target.value)),u()},className:"w-full accent-teal-500 cursor-pointer"})]}),e.jsxs("label",{className:"flex items-center gap-2 text-xs font-mono text-slate-300 cursor-pointer p-2 bg-slate-900 rounded border border-slate-800",children:[e.jsx("input",{type:"checkbox",checked:f,onChange:t=>{S(t.target.checked),u()},className:"accent-teal-500 rounded"}),e.jsx("span",{children:"Apply Merit Concession (20% for >=90%, 10% for >=80%)"})]}),e.jsx("button",{onClick:_,disabled:l,className:c("w-full py-3 rounded-lg text-xs font-mono font-bold transition-all shadow-lg",l?"bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700":"bg-teal-600 hover:bg-teal-500 text-white shadow-teal-950/50"),children:l?"GenExp Stream Exhausted":"Execute `next(gen_pipeline)` -> (Pulls 1 item)"}),e.jsxs("div",{className:"space-y-1.5 pt-2 border-t border-slate-800",children:[e.jsxs("span",{className:"text-xs font-mono text-slate-400 font-bold block uppercase",children:["Candidate Stream Sequence (",a.length," Eligible):"]}),e.jsx("div",{className:"space-y-1",children:a.map((t,n)=>e.jsxs("div",{className:c("p-2 rounded text-xs font-mono border transition-all flex justify-between items-center",x===n?"bg-teal-950 border-teal-500 text-teal-200 font-bold animate-glow-teal":x>n?"bg-slate-900/50 border-slate-800 text-slate-500":"bg-slate-900 border-slate-800 text-slate-300"),children:[e.jsxs("div",{children:[e.jsxs("span",{className:"font-bold",children:["[",n+1,"] ",t.id,": "]}),e.jsxs("span",{children:[t.name," (",t.score,"%)"]})]}),e.jsxs("div",{className:"text-right",children:[e.jsxs("span",{className:"text-emerald-400 font-bold",children:["INR ",t.baseFee.toLocaleString()]}),x===n&&e.jsx("span",{className:"text-teal-400 font-bold block text-[10px]",children:"← ACTIVE POINTER"})]})]},t.id))})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2 text-xs font-mono",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:"Pipeline Telemetry & Aggregates:"}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Pipeline Memory Footprint:"}),e.jsx("span",{className:"text-emerald-400 font-bold",children:"112 Bytes (O(1) Constant)"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"`any(score >= 90)` Short-Circuit:"}),e.jsx("span",{className:"text-cyan-300 font-bold",children:a.some(t=>t.score>=90)?"True (Topper Present)":"False"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Consumed Records:"}),e.jsxs("span",{className:"text-purple-300 font-bold",children:[o.length," / ",a.length]})]})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[160px] space-y-1.5 font-mono text-xs",children:[e.jsx("span",{className:"text-slate-400 block font-bold text-[10px] uppercase",children:"Transformed Stream Elements:"}),o.length===0?e.jsx("div",{className:"text-slate-500 italic text-[11px]",children:'Click "Execute next(gen_pipeline)" to pull the first record.'}):o.map((t,n)=>e.jsxs("div",{className:"p-1.5 bg-slate-950 rounded border border-slate-800 flex justify-between text-[11px]",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"text-teal-300 font-bold",children:[t.id,": ",t.name]}),e.jsxs("span",{className:"text-[10px] text-slate-500 block",children:["Tier: ",t.tier," (",t.discount,"% Concession)"]})]}),e.jsxs("span",{className:"text-emerald-400 font-bold",children:["INR ",t.netFee.toLocaleString()]})]},n)),l&&e.jsxs("div",{className:"p-1 bg-teal-950 border border-teal-700 text-teal-200 rounded text-center font-bold text-[11px]",children:["Pipeline Complete • Total Stream Revenue: INR ",o.reduce((t,n)=>t+n.netFee,0).toLocaleString()]})]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Comprehensions vs Generator Expressions Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Construct"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Syntax"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Resulting Type"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Memory Footprint"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"Generator Expression"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`(x for x in seq)`"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"`generator` object"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"O(1) Constant (~112 B)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"List Comprehension"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`[x for x in seq]`"}),e.jsx("td",{className:"py-3 px-4 text-slate-300",children:"`list`"}),e.jsx("td",{className:"py-3 px-4 text-rose-300",children:"O(N) Linear (e.g. ~8 MB)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Set Comprehension"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`{x for x in seq}`"}),e.jsx("td",{className:"py-3 px-4 text-slate-300",children:"`set`"}),e.jsx("td",{className:"py-3 px-4 text-rose-300",children:"O(U) Unique elements"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"Dict Comprehension"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`{k: v for k, v in seq}`"}),e.jsx("td",{className:"py-3 px-4 text-slate-300",children:"`dict`"}),e.jsx("td",{className:"py-3 px-4 text-rose-300",children:"O(K) Key-Value pairs"})]})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating generator expression syntax, parentheses reduction, chained pipelines, memory profiling, and exam audit analyzers:"}),e.jsx(w,{files:[{filename:"generator_expressions_syntax_and_parentheses_rules.py",code:R,description:"Genexp syntax, parentheses reduction in sum(), max(), and short-circuiting with any/all."},{filename:"chained_generator_expressions_pipeline.py",code:P,description:"4-stage Unix-style data pipeline using chained generator expressions."},{filename:"memory_profiling_comprehensions_vs_genexps.py",code:z,description:"Memory profiling comparing List/Set/Dict Comprehensions vs GenExps using tracemalloc."},{filename:"institutional_examination_audit_stream_analyzer.py",code:G,description:"Enterprise Examination Audit Stream Analyzer with zero intermediate array allocation."}]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Assuming `(...)` Creates a Tuple"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"(x for x in seq)"})," creates a Generator Expression, NOT a tuple!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," To create a tuple, use ",e.jsx("code",{className:"text-emerald-300",children:"tuple(x for x in seq)"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Redundant Double Parentheses"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-amber-300 font-mono",children:"sum(((x**2 for x in data)))"})," adds ugly redundant parentheses."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Write ",e.jsx("code",{className:"text-emerald-300",children:"sum(x**2 for x in data)"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Subscripting GenExp (`g[0]`)"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Generator expressions do not support index lookups, raising ",e.jsx("code",{className:"text-purple-300 font-mono",children:"TypeError: 'generator' object is not subscriptable"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"next(gen)"})," or ",e.jsx("code",{className:"text-emerald-300",children:"itertools.islice()"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Reusing Exhausted GenExp"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Running ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"total = sum(g)"})," exhausts ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"g"}),"; subsequent calls like ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"max(g)"})," will raise ValueError."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Re-define the generator expression for every consumption pass."]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering generator expressions, parentheses rules, short-circuiting, and memory profiling:"}),e.jsx(T,{questions:I})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with generator expression syntax, parentheses reductions, and pipeline recipes:"}),e.jsx("div",{className:"mb-10",children:e.jsx(C,{content:k,filename:"python_topic10_generator_expressions_notes.txt",title:"Print Topic 10 Study Notes"})}),e.jsx(A,{})]})]})]})}export{H as default};
