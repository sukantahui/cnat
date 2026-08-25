import{b as i,j as e,bg as o}from"./vendor-react-core-Doz9nIC6.js";import{P as v}from"./PythonFileLoader-hCi5osN-.js";import{P as w}from"./PlainTextPrint-C08xhKA4.js";import{F as E}from"./FAQTemplate-CkSqDH4B.js";import{T as S}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const A=`# topic3_files/map_filter_reduce_fundamentals.py\r
# Module: 003_005_advance-comprehensions\r
# Topic: Functional tools: map(), filter(), and functools.reduce()\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 3 - File 1: Functional Trinity: \`map()\`, \`filter()\`, and \`functools.reduce()\`\r
Demonstrates:\r
  1. \`map(func, iterable)\`: Lazy transformation of elements\r
  2. \`filter(predicate, iterable)\`: Lazy selection of matching items\r
  3. \`functools.reduce(func, iterable, [initializer])\`: Sequential pairwise folding / accumulation\r
"""\r
\r
import functools\r
from typing import List, Dict, Any\r
\r
def demonstrate_functional_fundamentals():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - FUNCTIONAL TRINITY (map, filter, reduce)")\r
    print("=" * 70)\r
\r
    raw_fees = [25000, 32000, 18000, 45000, 12000, 38000]\r
\r
    # 1. map(): Apply 18% GST Tax to all tuition fees\r
    print("1. \`map(func, seq)\` - Transforming Items Lazily:")\r
    def apply_gst(fee: float) -> float:\r
        return round(fee * 1.18, 2)\r
\r
    gst_mapped_iterator = map(apply_gst, raw_fees)\r
    print(f"   * Lazy Map Iterator Object : {gst_mapped_iterator}")\r
    # Materialize to list:\r
    fees_with_gst = list(gst_mapped_iterator)\r
    print(f"   * Materialized Fees (+18% GST): {fees_with_gst}\\n")\r
\r
    # 2. filter(): Retain only fees >= 30,000 INR\r
    print("2. \`filter(predicate, seq)\` - Selecting Matching Elements:")\r
    def is_premium_tier(fee: float) -> bool:\r
        return fee >= 30000.0\r
\r
    filtered_iterator = filter(is_premium_tier, raw_fees)\r
    premium_fees = list(filtered_iterator)\r
    print(f"   * Premium Fees (>= INR 30,000): {premium_fees}\\n")\r
\r
    # 3. functools.reduce(): Fold / Accumulate collection into single value\r
    print("3. \`functools.reduce(func, seq, initializer)\` - Pairwise Accumulation:")\r
    # Accumulate total revenue:\r
    def sum_accumulator(running_total: float, current_fee: float) -> float:\r
        return running_total + current_fee\r
\r
    total_revenue = functools.reduce(sum_accumulator, raw_fees, 0.0)\r
    print(f"   * Total Calculated Revenue : INR {total_revenue:,.2f}")\r
\r
    # Finding maximum fee using reduce:\r
    max_fee = functools.reduce(lambda acc, x: x if x > acc else acc, raw_fees)\r
    print(f"   * Maximum Fee in Ledger   : INR {max_fee:,.2f}")\r
\r
    print(r"""\r
Functional Invariants:\r
  1. \`map()\` and \`filter()\` in Python 3 return lazy, single-pass iterators.\r
  2. \`functools.reduce()\` requires an explicit import and sequentially applies \`f(acc, item)\`.\r
  3. Always provide an \`initializer\` to \`reduce()\` to handle empty iterables safely without TypeError.\r
""")\r
    print("[PASSED] Functional Tools map(), filter(), and reduce() Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_functional_fundamentals()\r
`,C=`# topic3_files/map_filter_vs_comprehensions_and_lambdas.py\r
# Module: 003_005_advance-comprehensions\r
# Topic: Functional tools: map(), filter(), and functools.reduce()\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 3 - File 2: \`map()\` / \`filter()\` vs List Comprehensions & Lambdas\r
Demonstrates:\r
  1. Syntactic comparison: \`list(map(lambda ...))\` vs List Comprehension\r
  2. Performance benchmark: List Comprehension vs \`map()\` with existing function vs \`map()\` with lambda\r
  3. When \`map()\` with a C-builtin function (\`map(int, strings)\`) outperforms comprehensions\r
"""\r
\r
import timeit\r
from typing import List\r
\r
def demonstrate_functional_vs_comprehensions():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - MAP/FILTER VS COMPREHENSIONS BENCHMARK")\r
    print("=" * 70)\r
\r
    # 1. Syntactic Comparison:\r
    student_scores = [95, 42, 88, 76, 91, 55]\r
\r
    # Functional Map + Filter with Lambdas:\r
    fn_result = list(map(lambda s: s * 1.1, filter(lambda s: s >= 60, student_scores)))\r
\r
    # Idiomatic List Comprehension:\r
    comp_result = [s * 1.1 for s in student_scores if s >= 60]\r
\r
    print("1. Syntactic Comparison (Filter + Transform):")\r
    print(f"   * map + filter + lambda : {fn_result}")\r
    print(f"   * List Comprehension    : {comp_result}")\r
    print("   -> Comprehensions are universally recognized as more readable in Python.\\n")\r
\r
    # 2. Performance Benchmark: 3 Cases\r
    # Case A: Built-in C function casting (e.g. str to int)\r
    # Case B: Custom Python lambda expression\r
    print("2. Performance Benchmark on 100,000 Elements:")\r
    raw_str_numbers = [str(i) for i in range(100_000)]\r
\r
    # Benchmark 1: map() with built-in C function \`int\`\r
    t_map_builtin = timeit.timeit(lambda: list(map(int, raw_str_numbers)), number=20)\r
    # Benchmark 2: List comprehension \`[int(x) for x in raw_str_numbers]\`\r
    t_comp_builtin = timeit.timeit(lambda: [int(x) for x in raw_str_numbers], number=20)\r
    # Benchmark 3: map() with custom lambda\r
    t_map_lambda = timeit.timeit(lambda: list(map(lambda x: int(x), raw_str_numbers)), number=20)\r
\r
    print(f"   * \`list(map(int, data))\`       (C Built-in)   : {t_map_builtin:.4f}s (Fastest C-level loop!)")\r
    print(f"   * \`[int(x) for x in data]\`     (Comprehension): {t_comp_builtin:.4f}s (Very fast C-opcode)")\r
    print(f"   * \`list(map(lambda x: ...))\`   (Lambda Map)   : {t_map_lambda:.4f}s (Slowest due to lambda frame overhead)")\r
\r
    print(r"""\r
Speed & Style Decision Rules:\r
  1. \`map(built_in_fn, data)\` (e.g. \`map(str.upper, names)\`) is faster than comprehensions!\r
  2. If using a custom \`lambda\`, ALWAYS prefer a List Comprehension (cleaner & faster).\r
  3. Avoid chaining \`map(..., filter(...))\` when a single comprehension \`[f(x) for x in seq if cond]\` is vastly more readable.\r
""")\r
    print("[PASSED] map/filter vs Comprehensions Benchmark Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_functional_vs_comprehensions()\r
`,T=`# topic3_files/advanced_functional_pipelines_and_composition.py\r
# Module: 003_005_advance-comprehensions\r
# Topic: Functional tools: map(), filter(), and functools.reduce()\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 3 - File 3: Advanced Functional Pipelines, Composition & \`functools.partial\`\r
Demonstrates:\r
  1. Multi-stage functional data pipelines with function composition\r
  2. Currying and partial application using \`functools.partial\`\r
  3. Custom dictionary reduction accumulators for multi-metric aggregation\r
"""\r
\r
import functools\r
from typing import Dict, Any, List\r
\r
def calculate_discounted_fee(base_fee: float, discount_percent: float) -> float:\r
    """Calculates discounted fee."""\r
    return base_fee * (1.0 - (discount_percent / 100.0))\r
\r
def demonstrate_advanced_functional_pipelines():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - ADVANCED FUNCTIONAL PIPELINES & PARTIALS")\r
    print("=" * 70)\r
\r
    student_transactions = [\r
        {"id": "STU-101", "name": "Sourav", "base_fee": 35000.0, "category": "AI", "status": "CLEARED"},\r
        {"id": "STU-102", "name": "Priyanka", "base_fee": 32000.0, "category": "DS", "status": "PENDING"},\r
        {"id": "STU-103", "name": "Debolina", "base_fee": 35000.0, "category": "AI", "status": "CLEARED"},\r
        {"id": "STU-104", "name": "Rahul", "base_fee": 25000.0, "category": "WEB", "status": "CLEARED"},\r
        {"id": "STU-105", "name": "Amit", "base_fee": 35000.0, "category": "AI", "status": "CLEARED"}\r
    ]\r
\r
    # 1. Partial Application with \`functools.partial\`:\r
    # Pre-bind standard 15% institutional scholarship discount\r
    apply_institutional_discount = functools.partial(calculate_discounted_fee, discount_percent=15.0)\r
\r
    print("1. Partial Application with \`functools.partial\`:")\r
    sample_fee = 30000.0\r
    discounted_sample = apply_institutional_discount(sample_fee)\r
    print(f"   * Base INR {sample_fee:,.2f} -> 15% Discounted: INR {discounted_sample:,.2f}\\n")\r
\r
    # 2. Multi-Stage Functional Pipeline:\r
    # Filter CLEARED -> Map Discount -> Reduce to Multi-Metric Summary\r
    print("2. Executing Multi-Stage Functional Data Pipeline:")\r
\r
    # Stage 1: Filter\r
    cleared_records = filter(lambda s: s["status"] == "CLEARED", student_transactions)\r
\r
    # Stage 2: Map\r
    def enrich_record(s: Dict[str, Any]) -> Dict[str, Any]:\r
        return {\r
            "id": s["id"],\r
            "name": s["name"],\r
            "category": s["category"],\r
            "final_fee": apply_institutional_discount(s["base_fee"])\r
        }\r
\r
    enriched_stream = map(enrich_record, cleared_records)\r
\r
    # Stage 3: Reduce (Multi-Metric Custom Dictionary Accumulator)\r
    def financial_accumulator(acc: Dict[str, Any], record: Dict[str, Any]) -> Dict[str, Any]:\r
        acc["total_revenue"] += record["final_fee"]\r
        acc["cleared_count"] += 1\r
        acc["category_counts"][record["category"]] = acc["category_counts"].get(record["category"], 0) + 1\r
        return acc\r
\r
    initial_state = {\r
        "total_revenue": 0.0,\r
        "cleared_count": 0,\r
        "category_counts": {}\r
    }\r
\r
    final_metrics = functools.reduce(financial_accumulator, enriched_stream, initial_state)\r
\r
    print(f"   * Total Collected Revenue: INR {final_metrics['total_revenue']:,.2f}")\r
    print(f"   * Total Cleared Students : {final_metrics['cleared_count']}")\r
    print(f"   * Category Breakdown     : {final_metrics['category_counts']}")\r
\r
    print(r"""\r
Pipeline Composition Invariants:\r
  1. \`functools.partial\` freezes function arguments for clean integration with \`map()\`.\r
  2. Multi-metric reductions initialize with a state dictionary \`acc\` and return the mutated/updated state.\r
""")\r
    print("\\n[PASSED] Advanced Functional Pipelines & Partials Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_advanced_functional_pipelines()\r
`,R=`# topic3_files/institutional_financial_ledger_functional_pipeline.py\r
# Module: 003_005_advance-comprehensions\r
# Topic: Functional tools: map(), filter(), and functools.reduce()\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 3 - File 4: Financial Ledger & GST Tax Functional Pipeline (Case Study)\r
Demonstrates:\r
  1. Complete pure functional pipeline using \`map()\`, \`filter()\`, \`reduce()\`, and \`partial\`\r
  2. High-precision financial calculations using \`Decimal\`\r
  3. Generating full financial audit summaries without mutating source data\r
"""\r
\r
import functools\r
from decimal import Decimal\r
from typing import Dict, Any, List\r
\r
def calculate_gross_with_gst(base_fee: Decimal, gst_rate: Decimal) -> Decimal:\r
    """Computes gross fee inclusive of GST tax."""\r
    return round(base_fee * (Decimal("1.00") + gst_rate), 2)\r
\r
def run_financial_functional_pipeline(transactions: List[Dict[str, Any]]) -> Dict[str, Any]:\r
    # 1. Partial: Freeze 18% GST rate for professional education services\r
    apply_18_gst = functools.partial(calculate_gross_with_gst, gst_rate=Decimal("0.18"))\r
\r
    # 2. Filter: Only audited, cleared transactions\r
    is_cleared = lambda tx: tx.get("payment_status") == "CLEARED"\r
    cleared_txs = filter(is_cleared, transactions)\r
\r
    # 3. Map: Enrich transactions with exact Gross Fee (including GST)\r
    def enrich_financials(tx: Dict[str, Any]) -> Dict[str, Any]:\r
        base = Decimal(str(tx["base_fee"]))\r
        gross = apply_18_gst(base)\r
        gst_component = gross - base\r
        return {\r
            "txn_id": tx["txn_id"],\r
            "student_name": tx["student_name"],\r
            "course": tx["course"],\r
            "base_fee": base,\r
            "gst_component": gst_component,\r
            "gross_fee": gross\r
        }\r
\r
    enriched_stream = map(enrich_financials, cleared_txs)\r
\r
    # 4. Reduce: Fold entire stream into Institutional Audit Ledger\r
    def audit_ledger_reducer(acc: Dict[str, Any], tx: Dict[str, Any]) -> Dict[str, Any]:\r
        acc["total_base_revenue"] += tx["base_fee"]\r
        acc["total_gst_collected"] += tx["gst_component"]\r
        acc["total_gross_collected"] += tx["gross_fee"]\r
        acc["cleared_tx_count"] += 1\r
        acc["processed_records"].append(tx)\r
        return acc\r
\r
    ledger_initial_state = {\r
        "total_base_revenue": Decimal("0.00"),\r
        "total_gst_collected": Decimal("0.00"),\r
        "total_gross_collected": Decimal("0.00"),\r
        "cleared_tx_count": 0,\r
        "processed_records": []\r
    }\r
\r
    return functools.reduce(audit_ledger_reducer, enriched_stream, ledger_initial_state)\r
\r
\r
def demonstrate_financial_ledger_pipeline():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - INSTITUTIONAL FINANCIAL FUNCTIONAL PIPELINE")\r
    print("=" * 70)\r
\r
    raw_tx_records = [\r
        {"txn_id": "TXN-801", "student_name": "Sourav Mukherjee", "course": "PY-AI", "base_fee": "28500.00", "payment_status": "CLEARED"},\r
        {"txn_id": "TXN-802", "student_name": "Priyanka Sen", "course": "DS-ML", "base_fee": "32000.00", "payment_status": "CLEARED"},\r
        {"txn_id": "TXN-803", "student_name": "Debolina Roy", "course": "PY-AI", "base_fee": "28500.00", "payment_status": "PENDING"},\r
        {"txn_id": "TXN-804", "student_name": "Rahul Verma", "course": "WEB-DEV", "base_fee": "25000.00", "payment_status": "CLEARED"},\r
        {"txn_id": "TXN-805", "student_name": "Sneha Gupta", "course": "DS-ML", "base_fee": "32000.00", "payment_status": "CLEARED"}\r
    ]\r
\r
    report = run_financial_functional_pipeline(raw_tx_records)\r
\r
    print("1. Institutional Financial Audit Summary (Derived via map-filter-reduce):")\r
    print(f"   * Total Cleared Transactions : {report['cleared_tx_count']}")\r
    print(f"   * Total Base Revenue (Net)   : INR {report['total_base_revenue']:,.2f}")\r
    print(f"   * Total GST Collected (18%)  : INR {report['total_gst_collected']:,.2f}")\r
    print(f"   * Total Gross Revenue (Bank) : INR {report['total_gross_collected']:,.2f}\\n")\r
\r
    print("2. Cleared Transaction Ledger Entries:")\r
    for tx in report["processed_records"]:\r
        print(f"   * [{tx['txn_id']}] {tx['student_name']:<18} | Base: INR {tx['base_fee']:>9,.2f} | GST: INR {tx['gst_component']:>8,.2f} | Gross: INR {tx['gross_fee']:>9,.2f}")\r
\r
    print("\\n[PASSED] Institutional Financial Ledger Functional Pipeline Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_financial_ledger_pipeline()\r
`,P=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
          PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_005: ADVANCED COMPREHENSIONS\r
        TOPIC 3: FUNCTIONAL TOOLS: MAP(), FILTER(), AND FUNCTOOLS.REDUCE()\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. THE FUNCTIONAL TRINITY\r
--------------------------------------------------------------------------------\r
  * map(fn, seq)               : Transforms items lazily (returns iterator)\r
  * filter(pred, seq)          : Selects items lazily (returns iterator)\r
  * functools.reduce(fn, seq)  : Folds items sequentially into single value\r
\r
--------------------------------------------------------------------------------\r
2. REDUCE ACCUMULATOR TEMPLATE\r
--------------------------------------------------------------------------------\r
  total = functools.reduce(lambda acc, x: acc + x, numbers, 0)\r
\r
--------------------------------------------------------------------------------\r
3. PARTIAL APPLICATION (\`functools.partial\`)\r
--------------------------------------------------------------------------------\r
  add_18_gst = functools.partial(calc_tax, rate=0.18)\r
  gross_fees = list(map(add_18_gst, base_fees))\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 3: FUNCTIONAL TOOLS\r
================================================================================\r
`,L=[{question:"What are the three core functions of Python's 'Functional Trinity' and what does each do?",shortAnswer:"'map(func, seq)' transforms elements lazily; 'filter(pred, seq)' selects elements that evaluate to True lazily; 'functools.reduce(func, seq)' folds/accumulates elements pairwise into a single scalar or aggregate value.",explanation:"The three foundational higher-order functions of functional programming in Python.",hint:"map transforms, filter selects, and reduce folds into a single value.",level:"basic",codeExample:"map(fn, seq); filter(pred, seq); functools.reduce(fn, seq, init)"},{question:"Why do 'map()' and 'filter()' return lazy iterators in Python 3 instead of lists?",shortAnswer:"To conserve memory and enable streaming computation; lazy iterators produce elements one-at-a-time on demand (O(1) memory) rather than allocating the entire transformed list in RAM immediately.",explanation:"Python 3 iterator design transition.",hint:"Conserves memory by yielding elements lazily on demand without allocating full lists.",level:"basic",codeExample:"type(map(int, ['1', '2'])) # <class 'map'>"},{question:"Why was 'reduce()' moved from built-in scope to the 'functools' module in Python 3?",shortAnswer:"Guido van Rossum (Python's creator) moved it to discourage overuse in favor of clearer built-in reducers like 'sum()', 'min()', 'max()', 'any()', 'all()', or explicit 'for' loops.",explanation:"Design philosophy favoring readability.",hint:"Moved to functools to encourage clearer built-in reducers like sum() and max().",level:"basic",codeExample:"from functools import reduce"},{question:"What is the purpose of the 'initializer' argument in 'functools.reduce()'?",shortAnswer:"It specifies the starting accumulator value before processing elements; if the iterable is empty, 'reduce' returns the initializer safely without raising an error.",explanation:"Prevents runtime crashes on empty collections.",hint:"Sets initial accumulator value and handles empty iterables safely.",level:"moderate",codeExample:"reduce(lambda acc, x: acc + x, [], 0) # Returns 0 without error"},{question:"What happens if 'functools.reduce()' is called on an empty sequence WITHOUT an initializer?",shortAnswer:"It raises 'TypeError: reduce() of empty iterable with no initial value'.",explanation:"A critical production runtime error.",hint:"Raises TypeError: reduce() of empty iterable with no initial value.",level:"basic",codeExample:"# TypeError: reduce(lambda a, b: a + b, [])"},{question:"When does 'map()' execute faster than an equivalent List Comprehension?",shortAnswer:"When using an existing built-in C function (such as 'map(int, str_list)' or 'map(str.upper, words)'), because 'map' executes entirely in optimized C without Python bytecode interpreter overhead.",explanation:"C-speed built-in function mapping.",hint:"When using built-in C functions like int, str, or str.upper.",level:"moderate",codeExample:"list(map(int, str_numbers)) # Faster than [int(x) for x in str_numbers]"},{question:"Why are List Comprehensions preferred over 'map()' when using 'lambda' expressions?",shortAnswer:"List comprehensions avoid the overhead of lambda function call frames and are much more readable than 'list(map(lambda x: ..., seq))'.",explanation:"Comprehensions are universally recognized as more Pythonic than lambda maps.",hint:"Comprehensions avoid lambda frame overhead and are cleaner to read.",level:"basic",codeExample:"[x * 2 for x in seq] # Better than list(map(lambda x: x * 2, seq))"},{question:"How does 'filter(None, sequence)' behave in Python?",shortAnswer:"Passing 'None' as the predicate to 'filter()' removes all falsy elements (0, '', None, False, [], {}), leaving only truthy values.",explanation:"Handy built-in truthiness filter idiom.",hint:"Passing None removes all falsy values (0, '', None, False, []).",level:"moderate",codeExample:"list(filter(None, [0, 'Sourav', '', None, 42])) # ['Sourav', 42]"},{question:"What is 'functools.partial' and how does it assist functional pipelines?",shortAnswer:"It creates a new callable with one or more arguments pre-filled ('frozen'), making multi-argument functions compatible with single-argument 'map()' or 'filter()' callers.",explanation:"Currying and partial function application in Python.",hint:"Pre-fills arguments of a function to make it compatible with map().",level:"moderate",codeExample:`add_tax = functools.partial(calc_tax, rate=0.18)
list(map(add_tax, fees))`},{question:"How do you chain 'filter' and 'map' together without evaluating intermediate lists?",shortAnswer:"By nesting or piping the iterators directly: 'map(transform, filter(predicate, seq))', which computes transformed elements on-the-fly during consumption.",explanation:"Zero-allocation lazy streaming pipelines.",hint:"Nest iterators directly: map(f, filter(p, data)).",level:"moderate",codeExample:"stream = map(f, filter(p, data)) # Both are lazy iterators"},{question:"Can 'map()' accept multiple iterable arguments simultaneously?",shortAnswer:"Yes. 'map(func, iter1, iter2)' passes corresponding elements from each iterable in parallel to the function, terminating when the shortest iterable is exhausted.",explanation:"Multi-sequence parallel mapping.",hint:"Yes, map passes corresponding elements from all iterables in parallel.",level:"moderate",codeExample:"list(map(lambda x, y: x + y, [1, 2], [10, 20])) # [11, 22]"},{question:"How do you implement a rolling multi-metric statistical summary using 'functools.reduce()'?",shortAnswer:"By passing a dictionary or dataclass as the initial accumulator state and updating total count, sum, min, and max within the reducer function on each step.",explanation:"Multi-metric state accumulation pattern.",hint:"Use a dictionary state accumulator inside reduce.",level:"complex",codeExample:"reduce(lambda acc, x: {'sum': acc['sum'] + x, 'cnt': acc['cnt'] + 1}, seq, {'sum': 0, 'cnt': 0})"},{question:"What is the time complexity of 'functools.reduce()' over a sequence of N elements?",shortAnswer:"O(N * C), where N is the number of elements and C is the time complexity of the reduction step function.",explanation:"Linear pass accumulation.",hint:"Linear O(N) time assuming constant step function.",level:"basic",codeExample:"# O(N) linear iteration"},{question:"Why can't you iterate over a 'map' or 'filter' object multiple times?",shortAnswer:"Because they are single-pass generator-like iterators; once exhausted by a loop or 'list()', subsequent iterations yield nothing unless recreated.",explanation:"Iterator exhaustion in Python.",hint:"They are single-pass iterators; once exhausted, they yield nothing.",level:"basic",codeExample:"m = map(int, ['1', '2']); list(m) # [1, 2]; list(m) # [] (Empty!)"},{question:"How do you calculate factorial of N using 'functools.reduce()'?",shortAnswer:"Using 'functools.reduce(lambda acc, x: acc * x, range(1, N + 1), 1)'.",explanation:"Classic multiplicative reduction.",hint:"Use reduce with multiplication operator: reduce(lambda a, b: a * b, range(1, n+1), 1).",level:"basic",codeExample:"fact = functools.reduce(operator.mul, range(1, 6), 1) # 120"},{question:"What module in the standard library provides optimized C functions for 'reduce()' operations like addition and multiplication?",shortAnswer:"The 'operator' module (e.g. 'operator.add', 'operator.mul', 'operator.concat').",explanation:"Standard library C-speed operator functions.",hint:"The operator module (operator.add, operator.mul).",level:"basic",codeExample:`import operator
reduce(operator.add, numbers, 0)`},{question:"How do you flatten a list of lists into a single list using 'functools.reduce()'?",shortAnswer:"Using 'functools.reduce(operator.concat, list_of_lists, [])' (or 'reduce(lambda a, b: a + b, lists, [])').",explanation:"Concatenation folding reduction.",hint:"Use reduce with operator.concat and [] initializer.",level:"moderate",codeExample:"reduce(operator.concat, [[1, 2], [3, 4]], []) # [1, 2, 3, 4]"},{question:"Why is 'itertools.chain.from_iterable()' preferred over 'reduce(operator.concat, ...)' for massive lists?",shortAnswer:"'reduce(operator.concat, ...)' creates new intermediate list objects at every step (O(N^2) total copying time); 'itertools.chain' flattens in linear O(N) streaming time.",explanation:"Quadratic string/list concatenation overhead avoidance.",hint:"reduce(concat) has O(N^2) quadratic copying overhead; chain is O(N) streaming.",level:"complex",codeExample:"itertools.chain.from_iterable(nested_lists) # O(N) time"},{question:"How do you find the longest string in a list using 'functools.reduce()'?",shortAnswer:"Using 'functools.reduce(lambda a, b: a if len(a) >= len(b) else b, words)'.",explanation:"Extreme value selection via reduction.",hint:"Use reduce comparing lengths of a and b.",level:"basic",codeExample:"reduce(lambda a, b: a if len(a) >= len(b) else b, ['AI', 'Python', 'Go']) # 'Python'"},{question:"What is 'Function Composition' in Python functional programming?",shortAnswer:"Combining two or more functions 'f' and 'g' such that the output of 'g(x)' becomes the input to 'f(g(x))'.",explanation:"Building high-order transformation chains.",hint:"Piping the output of one function as the input to the next: f(g(x)).",level:"moderate",codeExample:"compose = lambda f, g: lambda x: f(g(x))"},{question:"How does 'functools.reduce' compare to 'itertools.accumulate'?",shortAnswer:"'reduce' returns only the single final aggregated value; 'itertools.accumulate' yields all intermediate running subtotals as an iterator.",explanation:"Final scalar reduction vs running prefix stream.",hint:"reduce returns final scalar; accumulate yields all intermediate running subtotals.",level:"moderate",codeExample:"list(itertools.accumulate([1, 2, 3, 4])) # [1, 3, 6, 10]"},{question:"How do you reverse a string using 'functools.reduce()'?",shortAnswer:"Using 'functools.reduce(lambda acc, char: char + acc, my_string, '')'.",explanation:"Prepending accumulator folding.",hint:"Prepend char to accumulator: reduce(lambda acc, c: c + acc, s, '').",level:"basic",codeExample:"reduce(lambda acc, c: c + acc, 'Python', '') # 'nohtyP'"},{question:"How do you count occurrences of elements in a list using 'functools.reduce()'?",shortAnswer:"Using 'functools.reduce(lambda acc, x: {**acc, x: acc.get(x, 0) + 1}, items, {})' (though 'collections.Counter' is more idiomatic).",explanation:"Frequency map reduction.",hint:"Accumulate counts into a dictionary using reduce.",level:"moderate",codeExample:"reduce(lambda acc, x: {**acc, x: acc.get(x, 0) + 1}, ['a', 'b', 'a'], {})"},{question:"What is the memory benefit of piping 'filter' -> 'map' -> 'reduce' on large files?",shortAnswer:"Data is processed element-by-element in a streaming conveyor belt with constant O(1) memory, allowing multi-gigabyte log files to be processed on systems with minimal RAM.",explanation:"Streaming big data architecture in pure Python.",hint:"Streams data in O(1) RAM without loading the full file into memory.",level:"moderate",codeExample:"# Streaming O(1) memory pipeline"},{question:"What is the ultimate golden rule for Functional Tools (`map`, `filter`, `reduce`) in Python?",shortAnswer:"Use 'map()' for C built-in casts, 'filter(None, ...)' for falsy cleaning, and 'functools.reduce()' with an initializer for custom accumulations; for custom lambda transformations, use List Comprehensions for clarity.",explanation:"The complete enterprise guideline for functional programming in Python.",hint:"map for C-builtins, filter for selection, reduce with initializer for custom folds; comprehensions for lambdas.",level:"basic",codeExample:"# Python Functional Programming Mastery"}];function B(){const x=i.useRef([]),[c,p]=i.useState("trinity"),h=[{txn_id:"TXN-801",name:"Sourav Mukherjee",course:"PY-AI",base_fee:28500,status:"CLEARED"},{txn_id:"TXN-802",name:"Priyanka Sen",course:"DS-ML",base_fee:32e3,status:"CLEARED"},{txn_id:"TXN-803",name:"Debolina Roy",course:"PY-AI",base_fee:28500,status:"PENDING"},{txn_id:"TXN-804",name:"Rahul Verma",course:"WEB-DEV",base_fee:25e3,status:"CLEARED"},{txn_id:"TXN-805",name:"Sneha Gupta",course:"DS-ML",base_fee:32e3,status:"CLEARED"}],[d,b]=i.useState(.18),[s,g]=i.useState("CLEARED"),[r,y]=i.useState("SUM_REVENUE"),[f,_]=i.useState(!1),m=h.filter(t=>s==="CLEARED"?t.status==="CLEARED":s==="HIGH_FEE"?t.base_fee>=3e4:!0).map(t=>{const n=Math.round(t.base_fee*(1+d)*100)/100,u=Math.round((n-t.base_fee)*100)/100;return{...t,gst_amount:u,gross_fee:n}});let l=null;r==="SUM_REVENUE"?l=m.reduce((t,n)=>t+n.gross_fee,0):r==="MAX_FEE"?l=m.reduce((t,n)=>n.gross_fee>t?n.gross_fee:t,0):l=m.reduce((t,n)=>(t[n.course]=(t[n.course]||0)+n.gross_fee,t),{});const N=`apply_gst = functools.partial(calc_gross, gst_rate=${d})
cleared_txs = filter(lambda tx: ${s==="CLEARED"?"tx['status'] == 'CLEARED'":s==="HIGH_FEE"?"tx['base_fee'] >= 30000":"True"}, transactions)
mapped_stream = map(lambda tx: {**tx, 'gross': apply_gst(tx['base_fee'])}, cleared_txs)
result = functools.reduce(lambda acc, tx: ${r==="SUM_REVENUE"?"acc + tx['gross']":r==="MAX_FEE"?"max(acc, tx['gross'])":"{**acc, tx['course']: acc.get(tx['course'], 0) + tx['gross']}"}, mapped_stream, ${r==="CATEGORY_BREAKDOWN"?"{}":"0.0"})`,j=`# Equivalent List Comprehension + Built-in sum():
gross_fees = [
    round(tx['base_fee'] * (1 + ${d}), 2)
    for tx in transactions
    if ${s==="CLEARED"?"tx['status'] == 'CLEARED'":s==="HIGH_FEE"?"tx['base_fee'] >= 30000":"True"}
]
result = ${r==="SUM_REVENUE"?"sum(gross_fees)":r==="MAX_FEE"?"max(gross_fees)":"{...}"}`;i.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(u=>{u.isIntersecting&&u.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return x.current.forEach(n=>{n&&t.observe(n)}),()=>t.disconnect()},[]);const a=t=>{t&&!x.current.includes(t)&&x.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:a,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_005"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 3"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Advanced Comprehensions & Functional Python"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Functional Tools: ",e.jsx("span",{className:"text-teal-400",children:"map(), filter() & functools.reduce()"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master Python's functional programming triad: lazy stream transformations with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"map()"})," and ",e.jsx("code",{className:"text-teal-300 font-mono",children:"filter()"}),", sequential folding with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"functools.reduce()"}),", currying with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"functools.partial"}),", accumulator patterns, and institutional ledger computations."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔄 `map(func, iterable)`"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🎯 `filter(predicate, iterable)`"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🧮 `functools.reduce(func, seq, init)`"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"❄️ `functools.partial` (Currying)"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Functional Trinity: Transformation, Filtering & Folding"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"Functional programming treats computation as the evaluation of mathematical functions, eliminating side-effects and mutable state:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ `map(func, seq)`"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"map(lambda x: x*2, nums)"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Applies function to every element lazily. Yields 1 transformed item per input item."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ `filter(pred, seq)`"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"filter(lambda x: x>0, nums)"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Tests each element with boolean predicate. Yields only matching elements."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ `reduce(fn, seq)`"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"reduce(lambda acc,x: acc+x, nums, 0)"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Folds elements pairwise from left to right into a single scalar or aggregate state."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Reduce Empty Sequence Danger"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Calling ",e.jsx("code",{className:"text-rose-400 font-mono",children:"functools.reduce(lambda a, b: a + b, [])"})," raises ",e.jsx("code",{className:"text-rose-400 font-mono",children:"TypeError: reduce() of empty sequence with no initial value"}),". Always provide a 3rd ",e.jsx("code",{className:"text-teal-300 font-mono",children:"initializer"})," argument (e.g. ",e.jsx("code",{className:"text-teal-300 font-mono",children:"0"})," or ",e.jsx("code",{className:"text-teal-300 font-mono",children:'Decimal("0.00")'}),")!"]})]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Functional Pipelines & Reduction Folding"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>p("trinity"),className:o("px-3 py-1.5 rounded-lg transition-all",c==="trinity"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Functional Triad"}),e.jsx("button",{onClick:()=>p("lazyStream"),className:o("px-3 py-1.5 rounded-lg transition-all",c==="lazyStream"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Lazy Stream Conveyor"}),e.jsx("button",{onClick:()=>p("folding"),className:o("px-3 py-1.5 rounded-lg transition-all",c==="folding"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Reduce Folding Flow"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining the functional pipeline data stream, lazy memory buffers, and pairwise accumulator transitions:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:c==="trinity"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"THE FUNCTIONAL TRINITY PIPELINE: MAP -> FILTER -> REDUCE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"1. `filter(predicate)`"}),e.jsx("text",{x:"15",y:"55",fill:"#38bdf8",fontSize:"8 font-mono",children:"Input: [28.5k, 32k, 25k, 12k]"}),e.jsx("text",{x:"15",y:"75",fill:"#38bdf8",fontSize:"8 font-mono",children:"Predicate: fee >= 25k"}),e.jsx("text",{x:"15",y:"95",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"Output: [28.5k, 32k, 25k]"}),e.jsx("rect",{x:"15",y:"115",width:"220",height:"100",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"25",y:"140",fill:"#34d399",fontSize:"9 font-bold",children:"Selective Filter:"}),e.jsx("text",{x:"25",y:"160",fill:"#cbd5e1",fontSize:"8",children:"Discards non-matching"}),e.jsx("text",{x:"25",y:"175",fill:"#cbd5e1",fontSize:"8",children:"elements from the stream."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"310",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. `map(apply_gst)`"}),e.jsx("text",{x:"310",y:"55",fill:"#38bdf8",fontSize:"8 font-mono",children:"Transform: fee * 1.18"}),e.jsx("text",{x:"310",y:"75",fill:"#ecfdf5",fontSize:"8 font-mono font-bold",children:"Mapped: [33.63k, 37.76k, 29.5k]"}),e.jsx("text",{x:"310",y:"95",fill:"#34d399",fontSize:"8 font-mono",children:"Zero side-effects"}),e.jsx("rect",{x:"310",y:"115",width:"220",height:"100",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"320",y:"140",fill:"#38bdf8",fontSize:"9 font-bold",children:"Pure Mapping:"}),e.jsx("text",{x:"320",y:"160",fill:"#cbd5e1",fontSize:"8",children:"Enriches transactions with"}),e.jsx("text",{x:"320",y:"175",fill:"#cbd5e1",fontSize:"8",children:"tax without mutating originals."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"605",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"3. `functools.reduce()`"}),e.jsx("text",{x:"605",y:"55",fill:"#c084fc",fontSize:"8 font-mono",children:"Reducer: lambda acc, x: acc + x"}),e.jsx("text",{x:"605",y:"75",fill:"#34d399",fontSize:"11 font-mono font-bold",children:"Total: INR 100,890.00"}),e.jsx("rect",{x:"605",y:"115",width:"200",height:"100",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"615",y:"140",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Pairwise Fold:"}),e.jsx("text",{x:"615",y:"160",fill:"#cbd5e1",fontSize:"8",children:"Folds stream into single"}),e.jsx("text",{x:"615",y:"175",fill:"#cbd5e1",fontSize:"8",children:"audited ledger balance."})]})]}):c==="lazyStream"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"LAZY STREAM EVALUATION: O(1) CONSTANT MEMORY PIPELINE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"Eager List Pipeline (Legacy Python 2)"}),e.jsx("text",{x:"20",y:"65",fill:"#fca5a5",fontSize:"8 font-mono",children:"1. filter() allocates intermediate List A (8.5 MB)"}),e.jsx("text",{x:"20",y:"85",fill:"#fca5a5",fontSize:"8 font-mono",children:"2. map() allocates intermediate List B (8.5 MB)"}),e.jsx("text",{x:"20",y:"105",fill:"#fca5a5",fontSize:"8 font-mono",children:"3. reduce() consumes List B"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"155",fill:"#fda4af",fontSize:"9 font-bold",children:"High Memory Overhead:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Requires allocating full intermediate collections in RAM."})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"Lazy Streaming Pipeline (Modern Python 3)"}),e.jsx("text",{x:"20",y:"65",fill:"#34d399",fontSize:"8 font-mono",children:"1. `filter()` returns lazy iterator <filter object>"}),e.jsx("text",{x:"20",y:"85",fill:"#34d399",fontSize:"8 font-mono",children:"2. `map()` returns lazy iterator <map object>"}),e.jsx("text",{x:"20",y:"105",fill:"#34d399",fontSize:"8 font-mono",children:"3. Elements pulled ONE-BY-ONE as needed"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"O(1) Constant Memory:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Streams multi-million record logs with zero memory spikes!"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"PAIRWISE ACCUMULATOR REDUCTION STEP-BY-STEP FLOW"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"Step-by-Step Folding: `functools.reduce(lambda acc, x: acc + x, [10, 20, 30], 0)`"}),e.jsxs("g",{transform:"translate(20, 55)",children:[e.jsx("rect",{x:"0",y:"0",width:"180",height:"150",rx:"6",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"10",y:"25",fill:"#a78bfa",fontSize:"10 font-bold",children:"Step 0 (Init)"}),e.jsx("text",{x:"10",y:"55",fill:"#cbd5e1",fontSize:"8 font-mono",children:"acc = 0 (Initializer)"}),e.jsx("text",{x:"10",y:"75",fill:"#38bdf8",fontSize:"8 font-mono",children:"Stream: [10, 20, 30]"}),e.jsx("rect",{x:"200",y:"0",width:"180",height:"150",rx:"6",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"210",y:"25",fill:"#38bdf8",fontSize:"10 font-bold",children:"Step 1 (First Item)"}),e.jsx("text",{x:"210",y:"55",fill:"#cbd5e1",fontSize:"8 font-mono",children:"f(acc=0, x=10)"}),e.jsx("text",{x:"210",y:"75",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"New acc = 10"}),e.jsx("rect",{x:"400",y:"0",width:"180",height:"150",rx:"6",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"410",y:"25",fill:"#38bdf8",fontSize:"10 font-bold",children:"Step 2 (Second Item)"}),e.jsx("text",{x:"410",y:"55",fill:"#cbd5e1",fontSize:"8 font-mono",children:"f(acc=10, x=20)"}),e.jsx("text",{x:"410",y:"75",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"New acc = 30"}),e.jsx("rect",{x:"600",y:"0",width:"180",height:"150",rx:"6",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"610",y:"25",fill:"#34d399",fontSize:"10 font-bold",children:"Step 3 (Final Item)"}),e.jsx("text",{x:"610",y:"55",fill:"#cbd5e1",fontSize:"8 font-mono",children:"f(acc=30, x=30)"}),e.jsx("text",{x:"610",y:"75",fill:"#34d399",fontSize:"11 font-mono font-bold",children:"Return: 60"})]})]})]})})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Financial Ledger & Tax Pipeline Laboratory"})]}),e.jsxs("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:["Configure GST rates (using ",e.jsx("code",{className:"text-purple-300 font-mono",children:"functools.partial"}),"), toggle payment status filters, select reducer aggregation modes, and inspect live functional streams:"]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"1. GST Tax Rate (functools.partial):"}),e.jsx("div",{className:"flex bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:[0,.05,.12,.18].map(t=>e.jsxs("button",{onClick:()=>b(t),className:o("flex-1 py-1 rounded transition-all",d===t?"bg-teal-900/60 text-teal-300 font-bold border border-teal-700/80":"text-slate-400 hover:text-white"),children:[t*100,"% GST"]},t))})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold",children:"2. Stage 1: `filter()` Selection:"}),e.jsx("div",{className:"flex bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:[{id:"CLEARED",label:"Only CLEARED"},{id:"HIGH_FEE",label:"Fee >= 30,000"},{id:"ALL",label:"All Records"}].map(t=>e.jsx("button",{onClick:()=>g(t.id),className:o("flex-1 py-1 rounded transition-all",s===t.id?"bg-cyan-900/60 text-cyan-300 font-bold border border-cyan-700/80":"text-slate-400 hover:text-white"),children:t.label},t.id))})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-purple-400 font-bold",children:"3. Stage 3: `functools.reduce()` Mode:"}),e.jsx("div",{className:"flex bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:[{id:"SUM_REVENUE",label:"Sum Revenue"},{id:"MAX_FEE",label:"Max Fee"},{id:"CATEGORY_BREAKDOWN",label:"By Course"}].map(t=>e.jsx("button",{onClick:()=>y(t.id),className:o("flex-1 py-1 rounded transition-all",r===t.id?"bg-purple-900/60 text-purple-300 font-bold border border-purple-700/80":"text-slate-400 hover:text-white"),children:t.label},t.id))})]}),e.jsx("div",{className:"pt-1",children:e.jsxs("label",{className:"flex items-center gap-2 p-2 bg-slate-900 rounded border border-slate-800 text-xs font-mono cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:f,onChange:t=>_(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"View Equivalent List Comprehension"})]})})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs space-y-1",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:f?"Comprehension + sum() Equivalent:":"Generated Functional Pipeline (map + filter + reduce):"}),e.jsx("pre",{className:"text-teal-300 text-[11px] leading-relaxed break-all font-mono overflow-x-auto",children:f?j:N})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[160px] font-mono text-xs space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-[10px] font-bold uppercase text-slate-400",children:[e.jsx("span",{children:"Reduction Final Folded Result:"}),e.jsx("span",{className:"text-emerald-400",children:"Audited State"})]}),e.jsx("div",{className:"text-white text-base font-bold pt-2",children:typeof l=="number"?e.jsxs("span",{children:["INR ",l.toLocaleString("en-IN",{minimumFractionDigits:2})]}):e.jsx("pre",{className:"text-xs text-slate-200",children:JSON.stringify(l,null,2)})}),e.jsxs("div",{className:"text-[10px] text-slate-400 pt-1",children:["Processed ",m.length," records through lazy stream."]})]})]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Functional Tool Reference Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Functional Tool"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Module Scope"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Return Type (Python 3)"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Best Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"`map(func, seq)`"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"Built-in"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Lazy Iterator (`map object`)"}),e.jsx("td",{className:"py-3 px-4",children:"Fast C-level casts (`map(int, ...)` )"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"`filter(pred, seq)`"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"Built-in"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Lazy Iterator (`filter object`)"}),e.jsx("td",{className:"py-3 px-4",children:"Falsy value removal (`filter(None, ...)` )"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"`reduce(fn, seq, init)`"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`functools`"}),e.jsx("td",{className:"py-3 px-4 text-purple-300",children:"Single scalar / dictionary"}),e.jsx("td",{className:"py-3 px-4",children:"Custom multi-metric state folding"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"`partial(fn, *args)`"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`functools`"}),e.jsx("td",{className:"py-3 px-4 text-amber-300",children:"Callable (`partial object`)"}),e.jsx("td",{className:"py-3 px-4",children:"Freezing parameters for pipelines"})]})]})]})})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating functional fundamentals, benchmarks vs comprehensions, partial application, and financial tax pipelines:"}),e.jsx(v,{files:[{filename:"map_filter_reduce_fundamentals.py",code:A,description:"map, filter, and functools.reduce with lazy iterators and accumulators."},{filename:"map_filter_vs_comprehensions_and_lambdas.py",code:C,description:"Syntactic and performance benchmarks of map/filter vs comprehensions."},{filename:"advanced_functional_pipelines_and_composition.py",code:T,description:"Functional pipelines, functools.partial, and custom reduce state aggregations."},{filename:"institutional_financial_ledger_functional_pipeline.py",code:R,description:"Complete map, filter, reduce, and partial financial audit pipelines."}]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Missing Initializer in `reduce()`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-rose-300 font-mono",children:"functools.reduce(fn, [])"})," without an initial value raises ",e.jsx("code",{className:"text-rose-300 font-mono",children:"TypeError: reduce() of empty iterable with no initial value"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always provide an explicit initializer like ",e.jsx("code",{className:"text-emerald-300",children:"0"})," or ",e.jsx("code",{className:"text-emerald-300",children:"{}"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Single-Pass Iterator Exhaustion"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:[e.jsx("code",{className:"text-amber-300 font-mono",children:"map()"})," and ",e.jsx("code",{className:"text-amber-300 font-mono",children:"filter()"})," return single-pass iterators; reading them a second time returns an empty sequence!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Materialize with ",e.jsx("code",{className:"text-emerald-300",children:"list()"})," if multiple passes are needed."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Lambda Frame Overhead in `map()`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Using ",e.jsx("code",{className:"text-purple-300 font-mono",children:"map(lambda x: x*2, nums)"})," is slower and less readable than ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"[x*2 for x in nums]"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Only use ",e.jsx("code",{className:"text-emerald-300",children:"map()"})," when passing pre-existing named C-functions."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Quadratic List Concat with `reduce()`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Using ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"reduce(operator.concat, lists)"})," creates new intermediate lists on every step, leading to terrible O(N^2) quadratic time."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"itertools.chain.from_iterable()"})," for linear O(N) flattening."]})]})]})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering map, filter, functools.reduce, lazy iterators, partial functions, and accumulator patterns:"}),e.jsx(E,{questions:L})]}),e.jsxs("section",{ref:a,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with functional trinity recipes, reducer templates, and partial application patterns:"}),e.jsx("div",{className:"mb-10",children:e.jsx(w,{content:P,filename:"python_topic3_functional_tools_notes.txt",title:"Print Topic 3 Study Notes"})}),e.jsx(S,{})]})]})]})}export{B as default};
