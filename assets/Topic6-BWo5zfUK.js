import{b as o,j as e,bg as m}from"./vendor-react-core-Doz9nIC6.js";import{P as y}from"./PythonFileLoader-hCi5osN-.js";import{P as N}from"./PlainTextPrint-C08xhKA4.js";import{F as w}from"./FAQTemplate-CkSqDH4B.js";import{T as _}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const S=`# topic6_files/join_basics_and_delimiters.py\r
# Module: 002_007_string-processing\r
# Topic: Joining Lists of Strings with join()\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
"""\r
Topic 6 - File 1: delimiter.join(iterable) Fundamentals & Delimiter Mechanics\r
Demonstrates:\r
  1. Core syntax: delimiter.join(iterable)\r
  2. Why join is a string method rather than a list method (Design Rationale)\r
  3. Common delimiters: empty string, spaces, commas, newlines, pipes, hyphens\r
  4. Joining string literals & character sequences: "-".join("PYTHON")\r
  5. Edge cases: Empty list [], single-item list ['Only'], no trailing delimiter rule\r
"""\r
\r
def demonstrate_basic_joining():\r
    print("=" * 65)\r
    print("1. delimiter.join(iterable) BASIC DELIMITERS")\r
    print("=" * 65)\r
\r
    branches = ["Barrackpore", "Kolkata", "Shyamnagar", "Sodepur"]\r
    print(f"Original List: {branches}\\n")\r
\r
    # 1. Comma with space\r
    print(f"', '.join(branches)  : '{', '.join(branches)}'")\r
\r
    # 2. Hyphen separator\r
    print(f"'-'.join(branches)   : '{'-'.join(branches)}'")\r
\r
    # 3. Pipe separator\r
    print(f"' | '.join(branches) : '{' | '.join(branches)}'")\r
\r
    # 4. Multi-character arrow delimiter\r
    print(f"' -> '.join(branches): '{' -> '.join(branches)}'")\r
\r
    # 5. Empty string "" (Direct concatenation)\r
    letters = ["C", "o", "d", "e", "r"]\r
    print(f"''.join(letters)     : '{''.join(letters)}'")\r
\r
    # 6. Newline "\\n" delimiter (Multi-line text block)\r
    bullet_list = "\\n".join(f"* {b}" for b in branches)\r
    print(f"\\nNewline Joined Output:\\n{bullet_list}")\r
\r
\r
def demonstrate_delimiter_placement_rule():\r
    print("\\n" + "=" * 65)\r
    print("2. DELIMITER PLACEMENT RULE: NO TRAILING SEPARATORS")\r
    print("=" * 65)\r
\r
    # In Python, join() places the delimiter strictly BETWEEN elements.\r
    # It NEVER adds a leading or trailing delimiter!\r
\r
    # A. Empty Iterable\r
    empty_res = ",".join([])\r
    print(f"','.join([])          -> '{empty_res}' (Length: {len(empty_res)})")\r
\r
    # B. Single-Element Iterable\r
    single_res = ",".join(["Barrackpore"])\r
    print(f"','.join(['Single'])  -> '{single_res}' (No comma added!)")\r
\r
    # C. Multi-Element Iterable\r
    multi_res = ",".join(["A", "B", "C"])\r
    print(f"','.join(['A','B','C'])-> '{multi_res}' (Commas only between items)")\r
\r
\r
def demonstrate_joining_strings_and_tuples():\r
    print("\\n" + "=" * 65)\r
    print("3. JOINING STRINGS AS ITERABLES & TUPLES")\r
    print("=" * 65)\r
\r
    # A string is an iterable of 1-character strings\r
    word = "PYTHON"\r
    spaced_word = " ".join(word)\r
    hyphen_word = "-".join(word)\r
    print(f"Original Word      : '{word}'")\r
    print(f"' '.join('{word}')   : '{spaced_word}'")\r
    print(f"'-'.join('{word}')   : '{hyphen_word}'\\n")\r
\r
    # Joining immutable tuples\r
    coordinate_tuple = ("22.7667 N", "88.3667 E")\r
    geo_str = ", ".join(coordinate_tuple)\r
    print(f"Tuple Joined       : '{geo_str}' (Barrackpore Coordinates)")\r
\r
\r
def explain_design_rationale():\r
    print("\\n" + "=" * 65)\r
    print("4. PYTHON DESIGN RATIONALE: WHY delimiter.join()?")\r
    print("=" * 65)\r
    print("Why is it 'separator.join(list)' instead of 'list.join(separator)'?")\r
    print("  1. Polymorphism: join() can take ANY iterable (lists, tuples, sets,")\r
    print("     generators, dictionaries, open file objects), not just lists.")\r
    print("  2. Type Safety: The method belongs to the string type, ensuring that")\r
    print("     the separator is always a valid string object.")\r
    print("  3. Non-redundancy: If join() were on list, it would also have to be")\r
    print("     duplicated across tuple, set, dict, and generator classes.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_basic_joining()\r
    demonstrate_delimiter_placement_rule()\r
    demonstrate_joining_strings_and_tuples()\r
    explain_design_rationale()\r
`,v=`# topic6_files/iterables_and_type_casting.py\r
# Module: 002_007_string-processing\r
# Topic: Joining Lists of Strings with join()\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
"""\r
Topic 6 - File 2: Handling Non-String Iterables, Type Casting & Dictionary Joining\r
Demonstrates:\r
  1. The common TypeError: sequence item 0: expected str instance, int found\r
  2. The 3 defensive casting patterns: list comp, map(str, ...), generator expr\r
  3. Joining dictionaries: keys, values, and formatted (key, value) pairs\r
  4. Joining sets and lazy generators\r
  5. Formatting SQL WHERE clause and URL query parameters with join()\r
"""\r
\r
def demonstrate_type_error_and_solutions():\r
    print("=" * 65)\r
    print("1. THE TYPEERROR TRAP & DEFENSIVE CASTING PATTERNS")\r
    print("=" * 65)\r
\r
    student_scores = [95, 88, 76, 92, 100]\r
    print(f"Original Numeric List: {student_scores} (Integers)\\n")\r
\r
    # A. Direct join causes TypeError\r
    try:\r
        ", ".join(student_scores)\r
    except TypeError as err:\r
        print(f"Direct join(scores) -> Caught Expected TypeError:\\n  {err}\\n")\r
\r
    # Pattern 1: Generator Expression (Memory Efficient)\r
    res_gen = ", ".join(str(s) for s in student_scores)\r
    print(f"Pattern 1 (Generator) : '{res_gen}'")\r
\r
    # Pattern 2: map(str, iterable) (Functional & Fast in C)\r
    res_map = ", ".join(map(str, student_scores))\r
    print(f"Pattern 2 (map)       : '{res_map}'")\r
\r
    # Pattern 3: List Comprehension with f-string formatting\r
    res_fstr = ", ".join(f"{s}%" for s in student_scores)\r
    print(f"Pattern 3 (Formatted) : '{res_fstr}'")\r
\r
\r
def demonstrate_dictionary_joining():\r
    print("\\n" + "=" * 65)\r
    print("2. JOINING DICTIONARIES: KEYS, VALUES & KEY-VALUE PAIRS")\r
    print("=" * 65)\r
\r
    student_profile = {\r
        "name": "Susmita Mukherjee",\r
        "course": "Python Pro",\r
        "center": "Barrackpore",\r
        "roll": "PY-9402",\r
        "active": True\r
    }\r
    print(f"Target Dictionary:\\n  {student_profile}\\n")\r
\r
    # A. Default join on dict: JOINS THE KEYS ONLY!\r
    joined_keys = ", ".join(student_profile)\r
    print(f"', '.join(dict)        : '{joined_keys}' (Keys Only!)\\n")\r
\r
    # B. Joining dictionary values with map(str, ...)\r
    joined_values = " | ".join(map(str, student_profile.values()))\r
    print(f"' | '.join(values())   : '{joined_values}'\\n")\r
\r
    # C. Generating URL Query Parameters (key=value&...)\r
    url_params = "&".join(f"{k}={v}" for k, v in student_profile.items())\r
    print(f"URL Query String Params: '{url_params}'\\n")\r
\r
    # D. Generating SQL UPDATE / SET Clause\r
    sql_set = ", ".join(f"{k} = '{v}'" for k, v in student_profile.items())\r
    print(f"SQL SET Clause         : 'SET {sql_set}'")\r
\r
\r
def demonstrate_joining_sets_and_generators():\r
    print("\\n" + "=" * 65)\r
    print("3. JOINING SETS & LAZY GENERATOR PIPELINES")\r
    print("=" * 65)\r
\r
    # Joining sets (Note: Set order is arbitrary)\r
    unique_skills = {"Python", "SQL", "Pandas", "TailwindCSS", "React"}\r
    skills_csv = ", ".join(sorted(unique_skills))  # Sort first for deterministic output\r
    print(f"Sorted Set Joined: '{skills_csv}'\\n")\r
\r
    # Lazy generator pipeline (Filter even numbers and format as hex)\r
    even_hex = " - ".join(f"0x{n:02X}" for n in range(1, 20) if n % 2 == 0)\r
    print(f"Generator Pipeline (Even Hex): '{even_hex}'")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_type_error_and_solutions()\r
    demonstrate_dictionary_joining()\r
    demonstrate_joining_sets_and_generators()\r
`,E=`# topic6_files/performance_and_memory_architecture.py\r
# Module: 002_007_string-processing\r
# Topic: Joining Lists of Strings with join()\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
"""\r
Topic 6 - File 3: CPython Memory Architecture & O(N) vs O(N^2) Performance Benchmark\r
Demonstrates:\r
  1. Internal CPython string allocation mechanics (Two-pass join algorithm)\r
  2. Why string += in loops leads to catastrophic O(N^2) quadratic reallocation\r
  3. Why join() achieves O(N) linear time with a single heap allocation\r
  4. Empirical benchmark: += vs join() vs StringIO across 20,000 strings\r
"""\r
\r
import time\r
import io\r
import sys\r
\r
def explain_cpython_two_pass_algorithm():\r
    print("=" * 70)\r
    print("1. CPYTHON INTERNAL MEMORY ARCHITECTURE: TWO-PASS join()")\r
    print("=" * 70)\r
    print("""\r
When you call \`separator.join(list_of_strings)\`, CPython executes a 2-Pass C function:\r
  Pass 1 (Size Calculation):\r
    Iterates through the list in C, sums up the exact byte length of every string \r
    plus (N - 1) * len(separator), and determines the unified Unicode character width (PEP 393).\r
  Memory Allocation:\r
    Allocates EXACTLY ONE contiguous memory block on the heap with the pre-calculated size.\r
  Pass 2 (Memory Copy):\r
    Copies the byte contents of each string and separator directly into the single buffer \r
    using native C memcpy() without any intermediate object creation!\r
\r
Contrast with '+=' Loop Concatenation (Quadratic O(N^2) Nightmare):\r
  On every single iteration 's += word', Python must:\r
    1. Allocate a brand-new memory block for (len(s) + len(word)).\r
    2. Copy all previous characters from 's' into the new block.\r
    3. Copy 'word' into the new block.\r
    4. Deallocate the old 's' object.\r
  For N strings of length L, copying 1L + 2L + 3L + ... + NL bytes = O(N^2) operations!\r
""")\r
\r
\r
def run_empirical_benchmark():\r
    print("=" * 70)\r
    print("2. EMPIRICAL BENCHMARK: join() VS += LOOP VS StringIO")\r
    print("=" * 70)\r
\r
    num_items = 20000\r
    token_list = [f"Token_{i:05d}" for i in range(num_items)]\r
\r
    print(f"Dataset Size : {num_items:,} strings (approx {num_items * 11 / 1024:.1f} KB)\\n")\r
\r
    # Method 1: List append + ''.join() (Idiomatic Pythonic approach)\r
    t0 = time.perf_counter()\r
    res_join = ",".join(token_list)\r
    time_join = time.perf_counter() - t0\r
\r
    # Method 2: map(str, ...) + ''.join()\r
    t0 = time.perf_counter()\r
    res_map = ",".join(map(str, token_list))\r
    time_map = time.perf_counter() - t0\r
\r
    # Method 3: io.StringIO stream buffer\r
    t0 = time.perf_counter()\r
    sio = io.StringIO()\r
    for i, tok in enumerate(token_list):\r
        if i > 0:\r
            sio.write(",")\r
        sio.write(tok)\r
    res_sio = sio.getvalue()\r
    time_sio = time.perf_counter() - t0\r
\r
    # Method 4: += loop concatenation (O(N^2) - Warning: slow!)\r
    t0 = time.perf_counter()\r
    res_concat = ""\r
    for i, tok in enumerate(token_list):\r
        if i > 0:\r
            res_concat += ","\r
        res_concat += tok\r
    time_concat = time.perf_counter() - t0\r
\r
    # Verify all outputs match identically\r
    assert res_join == res_map == res_sio == res_concat\r
    print("[Assertion Passed] All 4 methods produced 100% identical output strings!\\n")\r
\r
    # Output Benchmark Results Table\r
    header = f"{'METHOD':<30} | {'EXECUTION TIME':<16} | {'RELATIVE SPEED'}"\r
    print(header)\r
    print("-" * len(header))\r
    print(f"{'1. delimiter.join(list)':<30} | {time_join * 1000:>10.2f} ms     | {'1.00x (FASTEST)'}")\r
    print(f"{'2. delimiter.join(map)':<30} | {time_map * 1000:>10.2f} ms     | {f'{time_map / time_join:.2f}x'}")\r
    print(f"{'3. io.StringIO buffer':<30} | {time_sio * 1000:>10.2f} ms     | {f'{time_sio / time_join:.2f}x slower'}")\r
    print(f"{'4. str += in loop [O(N^2)]':<30} | {time_concat * 1000:>10.2f} ms     | {f'{time_concat / time_join:.2f}x SLOWER (AVOID!)'}")\r
    print("-" * len(header))\r
\r
\r
if __name__ == "__main__":\r
    explain_cpython_two_pass_algorithm()\r
    run_empirical_benchmark()\r
`,T=`# topic6_files/log_exporter_and_report_builder.py\r
# Module: 002_007_string-processing\r
# Topic: Joining Lists of Strings with join()\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
"""\r
Topic 6 - File 4: Production Report Builder & Multi-Format Exporter with join()\r
Demonstrates:\r
  1. Generating clean RFC-compliant CSV tables using comma.join()\r
  2. Formatting GitHub-Flavored Markdown tables using pipe.join()\r
  3. Generating bulk SQL INSERT statement batches\r
  4. Building semantic HTML summary lists with join()\r
  5. Building clean JSON string arrays\r
"""\r
\r
from typing import List, Dict, Any\r
\r
# Sample student batch dataset from Coder & AccoTax Barrackpore\r
STUDENT_DATASET = [\r
    {"id": 101, "name": "Susmita Mukherjee", "course": "Python Pro", "city": "Barrackpore", "marks": 96.5, "status": "PASSED"},\r
    {"id": 102, "name": "Rahul Roy Chowdhury", "course": "Data Analytics", "city": "Kolkata", "marks": 88.0, "status": "PASSED"},\r
    {"id": 103, "name": "Anirban Banerjee", "course": "Python Core", "city": "Palta", "marks": 91.5, "status": "PASSED"},\r
    {"id": 104, "name": "Priya Das", "course": "Web Dev React", "city": "Barrackpore", "marks": 84.0, "status": "PASSED"},\r
    {"id": 105, "name": "Debojyoti Sen Gupta", "course": "Python Core", "city": "Sodepur", "marks": 94.0, "status": "PASSED"}\r
]\r
\r
class ReportBuilder:\r
    """Industrial multi-format text & document exporter utilizing str.join()."""\r
\r
    @staticmethod\r
    def build_csv(records: List[Dict[str, Any]]) -> str:\r
        """Generates standard CSV output."""\r
        headers = ["ID", "Name", "Course", "City", "Marks", "Status"]\r
        rows = [",".join(headers)]\r
        \r
        for r in records:\r
            row_vals = [str(r["id"]), f'"{r["name"]}"', f'"{r["course"]}"', r["city"], f"{r['marks']:.1f}", r["status"]]\r
            rows.append(",".join(row_vals))\r
            \r
        return "\\n".join(rows)\r
\r
    @staticmethod\r
    def build_markdown_table(records: List[Dict[str, Any]]) -> str:\r
        """Generates GitHub-Flavored Markdown table."""\r
        headers = ["ID", "Student Name", "Course", "Center", "Marks", "Result"]\r
        header_row = f"| {' | '.join(headers)} |"\r
        separator_row = f"| {' | '.join(['---'] * len(headers))} |"\r
        \r
        data_rows = []\r
        for r in records:\r
            row = f"| {r['id']:<3} | {r['name']:<20} | {r['course']:<15} | {r['city']:<11} | {r['marks']:>5.1f} | {r['status']:<6} |"\r
            data_rows.append(row)\r
\r
        table_lines = [header_row, separator_row] + data_rows\r
        return "\\n".join(table_lines)\r
\r
    @staticmethod\r
    def build_sql_batch_insert(table_name: str, records: List[Dict[str, Any]]) -> str:\r
        """Constructs an optimized bulk SQL INSERT statement."""\r
        columns = " (id, student_name, course_name, branch_city, final_marks, exam_status)"\r
        \r
        value_tuples = []\r
        for r in records:\r
            tup = f"({r['id']}, '{r['name']}', '{r['course']}', '{r['city']}', {r['marks']:.1f}, '{r['status']}')"\r
            value_tuples.append(tup)\r
            \r
        values_clause = ",\\n  ".join(value_tuples)\r
        return f"INSERT INTO {table_name}{columns} VALUES\\n  {values_clause};"\r
\r
    @staticmethod\r
    def build_html_bullet_list(records: List[Dict[str, Any]]) -> str:\r
        """Constructs semantic HTML list."""\r
        items = [f"  <li><strong>{r['name']}</strong> ({r['city']}) - {r['course']} : <em>{r['marks']}%</em></li>" for r in records]\r
        return "<ul>\\n" + "\\n".join(items) + "\\n</ul>"\r
\r
\r
def run_exporter_demo():\r
    print("=" * 75)\r
    print("CODER & ACCOTAX - PRODUCTION MULTI-FORMAT EXPORTER WITH join()")\r
    print("=" * 75)\r
\r
    print("\\n--- 1. GENERATING CSV EXPORT ---")\r
    print(ReportBuilder.build_csv(STUDENT_DATASET))\r
\r
    print("\\n--- 2. GENERATING MARKDOWN TABLE ---")\r
    print(ReportBuilder.build_markdown_table(STUDENT_DATASET))\r
\r
    print("\\n--- 3. GENERATING BULK SQL INSERT QUERY ---")\r
    print(ReportBuilder.build_sql_batch_insert("student_assessments", STUDENT_DATASET))\r
\r
    print("\\n--- 4. GENERATING SEMANTIC HTML LIST ---")\r
    print(ReportBuilder.build_html_bullet_list(STUDENT_DATASET))\r
\r
\r
if __name__ == "__main__":\r
    run_exporter_demo()\r
`,k=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
            PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_007: STRING PROCESSING\r
        TOPIC 6: JOINING LISTS OF STRINGS WITH delimiter.join(iterable)\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. delimiter.join(iterable) SYNTAX & DESIGN RATIONALE\r
--------------------------------------------------------------------------------\r
  Syntax:\r
      "separator".join(iterable_of_strings)\r
\r
  Why separator.join(list) and NOT list.join(separator)?\r
  • Polymorphism: join() works with ANY iterable (tuples, sets, dictionaries,\r
    generators, open file objects), not just lists.\r
  • Type Safety: The method belongs to str, guaranteeing that the separator\r
    is always a valid string object.\r
  • Consistency: Avoids duplicating the same join() logic across list, tuple,\r
    set, and dict classes.\r
\r
--------------------------------------------------------------------------------\r
2. DELIMITER PLACEMENT INVARIANTS\r
--------------------------------------------------------------------------------\r
  • Delimiters are placed strictly BETWEEN items.\r
  • No leading or trailing delimiters are ever generated!\r
      Example:\r
        ", ".join([])          -> ""             (Empty string)\r
        ", ".join(["Single"])  -> "Single"       (Zero comma)\r
        ", ".join(["A", "B"])  -> "A, B"         (Single comma between)\r
\r
--------------------------------------------------------------------------------\r
3. DEFENSIVE TYPE CASTING PATTERNS\r
--------------------------------------------------------------------------------\r
  Rule: ALL items in the iterable MUST be strings, or Python raises TypeError!\r
    TypeError: sequence item 0: expected str instance, int found\r
\r
  Solution Patterns:\r
  1. Generator Expression:\r
       ", ".join(str(x) for x in data)\r
  2. Functional map() in C:\r
       ", ".join(map(str, data))\r
  3. Formatted List Comprehension:\r
       ", ".join(f"INR {x:,.2f}" for x in amounts)\r
\r
--------------------------------------------------------------------------------\r
4. DICTIONARY JOINING PATTERNS\r
--------------------------------------------------------------------------------\r
  Given d = {"name": "Susmita", "city": "Barrackpore"}:\r
  • ", ".join(d)                       -> "name, city" (Keys by default)\r
  • ", ".join(d.values())              -> "Susmita, Barrackpore" (Values)\r
  • "&".join(f"{k}={v}" for k,v in d.items()) -> "name=Susmita&city=Barrackpore"\r
\r
--------------------------------------------------------------------------------\r
5. CPYTHON MEMORY ARCHITECTURE: O(N) VS O(N^2)\r
--------------------------------------------------------------------------------\r
  Why is join() 40x-100x faster than += in loops?\r
\r
  A. Two-Pass join() [O(N) Complexity]:\r
     • Pass 1: Sums total byte length of all strings + (N-1) * len(separator).\r
     • Heap Allocation: Allocates EXACTLY ONE contiguous memory buffer.\r
     • Pass 2: Copies each string and delimiter directly via native C memcpy().\r
\r
  B. '+=' Loop Concatenation [O(N^2) Complexity]:\r
     • On each step, Python must allocate a new string, copy all previous\r
       characters, copy the new word, and discard the old object.\r
     • For 20,000 strings, this causes catastrophic quadratic slowdown.\r
\r
--------------------------------------------------------------------------------\r
6. COMMON MISTAKES TO AVOID\r
--------------------------------------------------------------------------------\r
  ❌ Mistake: Calling list.join(", ") -> Raises AttributeError!\r
              Fix: Call ", ".join(list).\r
  ❌ Mistake: Joining numbers directly without str() -> Raises TypeError!\r
              Fix: ", ".join(map(str, numbers)).\r
  ❌ Mistake: Using a '+' concatenation loop to build long strings or CSVs.\r
              Fix: Collect rows into a list and call "\\n".join(rows).\r
\r
================================================================================\r
             END OF STUDY NOTE • TOPIC 6: STRING JOINING IN PYTHON\r
================================================================================\r
`,A=[{question:"What is the syntax for joining a sequence of strings into a single string in Python?",shortAnswer:"delimiter.join(iterable)",explanation:"The join() method is called on the delimiter string (e.g. ', ', ' - ', '\\n', '') and receives an iterable of strings as its argument.",hint:"'separator'.join(list)",level:"basic",codeExample:`words = ['Python', 'is', 'awesome']
print(' '.join(words))  # 'Python is awesome'`},{question:"Why is join() a method of the str class ('delimiter.join(list)') rather than the list class ('list.join(delimiter)')?",shortAnswer:"To support polymorphic joining of any arbitrary iterable (tuples, sets, dictionaries, generators, file objects) and guarantee delimiter type safety.",explanation:"If join were a list method, it would only work on lists. Putting it on the str class allows any iterable to be joined, guarantees the separator is a string, and prevents code duplication across multiple collection classes.",hint:"Allows join() to accept any iterable, not just lists.",level:"moderate",codeExample:`print(', '.join(('A', 'B', 'C')))         # Tuple
print(', '.join({'Python', 'React'}))      # Set
print(', '.join(x for x in ['X', 'Y']))    # Generator`},{question:"What happens if you pass an iterable containing non-string objects (like integers) directly to join()?",shortAnswer:"Python raises a TypeError: sequence item: expected str instance, int found.",explanation:"join() does not implicitly convert items to strings. All elements must strictly be of type 'str'.",hint:"Raises TypeError on non-strings.",level:"basic",codeExample:`nums = [10, 20, 30]
try:
    ','.join(nums)
except TypeError as e:
    print(e)  # sequence item 0: expected str instance, int found`},{question:"How do you join a list of integers into a comma-separated string defensively?",shortAnswer:"','.join(map(str, nums)) or ','.join(str(x) for x in nums)",explanation:"Using map(str, nums) or a generator expression converts every element to a string before passing to join().",hint:"Use map(str, items) or (str(x) for x in items).",level:"basic",codeExample:`scores = [95, 88, 92]
print(', '.join(map(str, scores)))  # '95, 88, 92'`},{question:"How does delimiter.join() handle an empty iterable [] and a single-element list ['A']?",shortAnswer:"join([]) returns an empty string '', and join(['A']) returns 'A' without any delimiter attached.",explanation:"In Python, the delimiter is placed strictly BETWEEN elements. It is never prepended at the start or appended at the end.",hint:"No trailing or leading delimiters are added.",level:"basic",codeExample:`print(repr(','.join([])))     # ''
print(repr(','.join(['Only']))) # 'Only'`},{question:"What is the time complexity of delimiter.join(list_of_strings) in CPython?",shortAnswer:"O(N) linear time with respect to the total number of characters.",explanation:"CPython uses a two-pass algorithm: it first calculates the total required memory buffer and allocates it once on the heap, then copies all characters in a single pass using fast native C memcpy().",hint:"join() runs in linear O(N) time with a single heap allocation.",level:"moderate",codeExample:"# Runs in microsecond-scale linear time for 100,000+ items"},{question:"Why is repeated string concatenation using '+=' in a loop considered an anti-pattern?",shortAnswer:"Because strings are immutable, '+=' reallocates memory and copies all existing characters on every step, leading to catastrophic O(N^2) quadratic complexity.",explanation:"For N strings, copying 1 + 2 + 3 + ... + N characters results in N*(N+1)/2 total operations. For large datasets, += can be 100x slower than join().",hint:"+= in a loop causes quadratic O(N^2) memory reallocation.",level:"moderate",codeExample:`# BAD (O(N^2)):
s = ''
for w in words: s += w

# GOOD (O(N)):
s = ''.join(words)`},{question:"What happens when you call delimiter.join() directly on a dictionary: ', '.join({'a': 1, 'b': 2})?",shortAnswer:"It joins the dictionary's KEYS by default: 'a, b'.",explanation:"Iterating over a dictionary yields its keys. To join the values, you must explicitly call d.values(): ', '.join(map(str, d.values())).",hint:"Iterating a dictionary yields its keys.",level:"basic",codeExample:`d = {'name': 'Susmita', 'city': 'Barrackpore'}
print(', '.join(d))           # 'name, city'
print(', '.join(d.values()))  # 'Susmita, Barrackpore'`},{question:"How can you construct an HTTP URL query string ('key1=val1&key2=val2') using join()?",shortAnswer:"'&'.join(f'{k}={v}' for k, v in params.items())",explanation:"Iterating through dict.items() and formatting each key-value pair into a string before joining with '&' generates a clean query string.",hint:"Use & delimiter with f'{k}={v}' generator.",level:"basic",codeExample:`params = {'course': 'python', 'center': 'barrackpore', 'page': 1}
query = '&'.join(f'{k}={v}' for k, v in params.items())
print(query)  # 'course=python&center=barrackpore&page=1'`},{question:"What does '-'.join('PYTHON') output and why?",shortAnswer:"'P-Y-T-H-O-N'",explanation:"A string in Python is an iterable of 1-character substrings. join() places the hyphen '-' between each character of the string.",hint:"Strings are character sequences.",level:"basic",codeExample:"print('-'.join('PYTHON'))  # 'P-Y-T-H-O-N'"},{question:"How do you join a list of strings with newline characters to form a multi-line document?",shortAnswer:"'\\n'.join(lines)",explanation:"The newline character '\\n' places every element on a new row without leaving a trailing newline at the bottom of the string.",hint:"Use '\\n'.join(lines).",level:"basic",codeExample:`lines = ['Line 1: Python', 'Line 2: Barrackpore', 'Line 3: Coder & AccoTax']
print('\\n'.join(lines))`},{question:"How do you construct a dynamic SQL IN clause like 'WHERE city IN ('Kolkata', 'Barrackpore')' using join()?",shortAnswer:`f"WHERE city IN ({', '.join(repr(c) for c in cities)})"`,explanation:"Using repr(c) wraps each string in single quotes, and join(', ') connects them cleanly inside the parentheses.",hint:`Wrap elements in quotes with repr(c) or f"'{c}'".`,level:"moderate",codeExample:`cities = ['Kolkata', 'Barrackpore', 'Shyamnagar']
sql = f"SELECT * FROM students WHERE city IN ({', '.join(repr(c) for c in cities)});"
print(sql)
# SELECT * FROM students WHERE city IN ('Kolkata', 'Barrackpore', 'Shyamnagar');`},{question:"What is the result of ''.join(['P', 'y', 't', 'h', 'o', 'n'])?",shortAnswer:"'Python'",explanation:"Using the empty string '' as the delimiter stitches all characters together directly with no intervening separators.",hint:"Empty string delimiter performs direct concatenation.",level:"basic",codeExample:`chars = ['P', 'y', 't', 'h', 'o', 'n']
print(''.join(chars))  # 'Python'`},{question:"Can you pass a generator expression directly to join() without converting it to a list first?",shortAnswer:"Yes, join() accepts generator expressions directly: ', '.join(x.upper() for x in words).",explanation:"Generator expressions are memory-efficient because items are yielded lazily on demand without allocating an intermediate list in memory.",hint:"Generators can be passed directly to join().",level:"moderate",codeExample:`words = ['apple', 'banana', 'cherry']
print(', '.join(w.upper() for w in words))  # 'APPLE, BANANA, CHERRY'`},{question:"What is the difference between ', '.join(map(str, data)) and ', '.join([str(x) for x in data])?",shortAnswer:"map(str, data) uses an internal C-level iterator; list comprehension creates an intermediate list in memory before joining.",explanation:"For very large collections, map() and generator expressions consume less memory than creating full intermediate lists.",hint:"map() avoids allocating an intermediate list.",level:"moderate",codeExample:`data = range(5)
print(', '.join(map(str, data)))  # '0, 1, 2, 3, 4'`},{question:"How do you construct a CSV header and data row dynamically using join()?",shortAnswer:"headers_csv = ','.join(headers); row_csv = ','.join(map(str, row_values))",explanation:"join(',') connects column names and cell data cleanly according to CSV standards.",hint:"Use comma as the join delimiter.",level:"basic",codeExample:`headers = ['ID', 'Name', 'Marks']
vals = [101, 'Susmita', 96.5]
print(','.join(headers))
print(','.join(map(str, vals)))`},{question:"What error occurs if you mistakenly write words.join(', ') instead of ', '.join(words)?",shortAnswer:"AttributeError: 'list' object has no attribute 'join'.",explanation:"The join method belongs to the str class, not the list class.",hint:"Lists do not have a join() method.",level:"basic",codeExample:`words = ['A', 'B']
try:
    words.join(', ')
except AttributeError as e:
    print(e)  # 'list' object has no attribute 'join'`},{question:"How do you join items with a custom prefix and suffix around each item (e.g. '[A], [B], [C]')?",shortAnswer:"', '.join(f'[{x}]' for x in items)",explanation:"Using an f-string inside a generator formats each element individually before the delimiter is applied.",hint:"Format items with f'[{x}]' before joining.",level:"basic",codeExample:`letters = ['A', 'B', 'C']
print(', '.join(f'[{x}]' for x in letters))  # '[A], [B], [C]'`},{question:"How does join() compare with io.StringIO for string building?",shortAnswer:"join() is faster and simpler for existing sequences; io.StringIO is preferred when strings are written incrementally across complex nested loops or functions.",explanation:"io.StringIO provides a file-like write() buffer interface. join() is best when all parts can be gathered into an iterable.",hint:"join() is ideal for sequences; StringIO is ideal for stream-like writes.",level:"complex",codeExample:`import io
buf = io.StringIO()
buf.write('Hello')
buf.write(' World')
print(buf.getvalue())  # 'Hello World'`},{question:"What is the output of ' * '.join(['Sun', 'Mon', 'Tue'])?",shortAnswer:"'Sun * Mon * Tue'",explanation:"The 3-character delimiter ' * ' is inserted between the three elements.",hint:"Multi-character delimiters are supported.",level:"basic",codeExample:`days = ['Sun', 'Mon', 'Tue']
print(' * '.join(days))  # 'Sun * Mon * Tue'`},{question:"How do you filter out empty strings before joining a list?",shortAnswer:"', '.join(x for x in items if x)",explanation:"Adding a conditional 'if x' to the generator expression discards empty strings '' and None-like falsy values before joining.",hint:"Use an 'if x' filter in the generator.",level:"basic",codeExample:`parts = ['Barrackpore', '', 'Kolkata', '', 'Shyamnagar']
print(', '.join(x for x in parts if x))  # 'Barrackpore, Kolkata, Shyamnagar'`},{question:"How do you join elements of a set in a deterministic order?",shortAnswer:"', '.join(sorted(my_set))",explanation:"Because sets are unordered, calling sorted() sorts the elements into a list first, guaranteeing consistent output.",hint:"Sort the set with sorted() before joining.",level:"basic",codeExample:`s = {'Z', 'A', 'M'}
print(', '.join(sorted(s)))  # 'A, M, Z'`},{question:"Can you use join() on an open file object to concatenate all its lines?",shortAnswer:"Yes, because open file objects are iterables of line strings: ''.join(file_obj)",explanation:"An open file yields line strings sequentially, so ''.join(f) reads and stitches all lines into a single string.",hint:"File objects are iterables of strings.",level:"moderate",codeExample:`# with open('data.txt') as f:
#     full_text = ''.join(f)`},{question:"What is the return type of delimiter.join()?",shortAnswer:"A single string object (str).",explanation:"join() always returns a new str instance representing the concatenated sequence.",hint:"Always returns a str.",level:"basic",codeExample:`res = '-'.join(['a', 'b'])
print(type(res))  # <class 'str'>`},{question:"How do you create a bulleted list string from a Python list using join()?",shortAnswer:"'\\n'.join(f'• {item}' for item in items)",explanation:"Prepend the bullet symbol to each item in the generator and join with newline '\\n'.",hint:"Prefix with bullet and join with newline.",level:"basic",codeExample:`courses = ['Python Pro', 'Data Science', 'FastAPI']
print('\\n'.join(f'• {c}' for c in courses))`}];function W(){const h=o.useRef([]),[l,f]=o.useState("memory"),[u,g]=o.useState("Barrackpore, Kolkata, Shyamnagar, Sodepur"),[i,j]=o.useState(", "),[n,b]=o.useState("none");o.useEffect(()=>{const t=new IntersectionObserver(d=>{d.forEach(c=>{c.isIntersecting&&c.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return h.current.forEach(d=>{d&&t.observe(d)}),()=>t.disconnect()},[]);const r=t=>{t&&!h.current.includes(t)&&h.current.push(t)},p=(()=>{const t=u.split(",").map(s=>s.trim()).filter(s=>s.length>0),c=t.map(s=>n==="quotes"?`"${s}"`:n==="brackets"?`[${s}]`:n==="html"?`<li>${s}</li>`:n==="sql"?`'${s}'`:s).join(i);let a="";return n==="none"?a=`${JSON.stringify(i)}.join(items)`:n==="quotes"?a=`${JSON.stringify(i)}.join(f'"{x}"' for x in items)`:n==="brackets"?a=`${JSON.stringify(i)}.join(f'[{x}]' for x in items)`:n==="html"?a=`${JSON.stringify(i)}.join(f'<li>{x}</li>' for x in items)`:n==="sql"&&(a=`${JSON.stringify(i)}.join(f"'{x}'" for x in items)`),{itemsCount:t.length,result:c,pythonSnippet:`items = ${JSON.stringify(t)}
result = ${a}
print(result)`,charLength:c.length}})();return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-pink-500/30 selection:text-pink-200",children:[e.jsx("style",{children:`
        .section-hidden {
          transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .section-visible {
          transform: translateY(0);
        }
        @keyframes pulseGlowPink {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(236, 72, 153, 0.4)); }
          50% { filter: drop-shadow(0 0 10px rgba(236, 72, 153, 0.8)); }
        }
        .animate-glow-pink {
          animation: pulseGlowPink 3s infinite ease-in-out;
        }
      `}),e.jsxs("header",{ref:r,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-pink-950/80 text-pink-300 px-3 py-1 rounded-full border border-pink-800/80 shadow-sm shadow-pink-950/50",children:"Segment 2 • Module 002_007"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-purple-950/80 text-purple-300 px-3 py-1 rounded-full border border-purple-800/80 shadow-sm shadow-purple-950/50",children:"Topic 6"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"String Processing & Pattern Handling"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Joining Lists of Strings with ",e.jsx("code",{className:"text-pink-400 font-mono",children:"delimiter.join()"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master high-performance ",e.jsx("span",{className:"text-emerald-400 font-semibold",children:"O(N)"})," sequence stitching, design polymorphism (why ",e.jsx("code",{className:"text-pink-300 font-mono",children:"str.join"})," instead of ",e.jsx("code",{className:"text-rose-400 font-mono",children:"list.join"}),"), defensive type casting (",e.jsx("code",{className:"text-cyan-400 font-mono",children:"map(str, ...)"}),"), and CPython memory allocation mechanics."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ O(N) Linear Time (CPython 2-Pass C memcpy)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Defensive Type Casting (map & generator)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📐 Strict Between-Item Delimiter Invariant"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📑 CSV, Markdown, SQL & HTML Exporters"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧵"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Anatomy & Design Rationale of `delimiter.join()`"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["In Python, joining a collection of strings is executed by calling ",e.jsx("code",{className:"text-pink-400 font-mono",children:'"separator".join(iterable)'}),". Beginners often wonder why it isn't ",e.jsx("code",{className:"text-rose-400 font-mono",children:'my_list.join(", ")'}),". Python's designers intentionally placed ",e.jsx("code",{className:"text-pink-300 font-mono",children:"join()"})," on the ",e.jsx("strong",{className:"text-white",children:"string class"})," for three crucial architectural reasons:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-pink-950/40 border border-pink-800/60 shadow-lg shadow-pink-950/30 transition-all duration-300 hover:scale-[1.01] hover:border-pink-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-pink-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"🔄"})," Universal Polymorphism"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:[e.jsx("code",{className:"text-pink-300 font-mono",children:"join()"})," works seamlessly with ",e.jsx("strong",{children:"ANY iterable"})," (lists, tuples, sets, dictionaries, generators, open file lines), not just lists!"]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg shadow-cyan-950/30 transition-all duration-300 hover:scale-[1.01] hover:border-cyan-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"🔒"})," Guaranteed Type Safety"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Because the method belongs to ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"str"}),", Python is guaranteed that the separator itself is a valid string instance before processing."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 shadow-lg shadow-emerald-950/30 transition-all duration-300 hover:scale-[1.01] hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"🧼"})," Zero Redundancy (DRY)"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Avoids duplicating the exact same join implementation across ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"list"}),", ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"tuple"}),", ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"set"}),", and ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"dict"})," classes."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-pink-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-2",children:"The Delimiter Placement Invariant"}),e.jsxs("p",{className:"text-sm sm:text-base text-slate-300 leading-relaxed",children:["• ",e.jsx("strong",{className:"text-emerald-400",children:"Strictly Between Elements:"})," The separator is inserted strictly between adjacent items (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"N - 1"})," delimiters for ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"N"})," items)."]}),e.jsxs("p",{className:"text-sm sm:text-base text-slate-300 leading-relaxed mt-1",children:["• ",e.jsx("strong",{className:"text-cyan-400",children:"No Edge Leftovers:"})," Joining an empty list ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"[]"})," yields ",e.jsx("code",{className:"text-cyan-300 font-mono",children:'""'}),". Joining a single element ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"['A']"})," yields ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"'A'"})," without any leading or trailing commas."]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"🔍"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Memory Allocation & Complexity"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>f("memory"),className:m("px-3 py-1.5 rounded-lg transition-all",l==="memory"?"bg-pink-900/50 text-pink-300 border border-pink-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"O(N) vs O(N²) Memory"}),e.jsx("button",{onClick:()=>f("placement"),className:m("px-3 py-1.5 rounded-lg transition-all",l==="placement"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Delimiter Placement"}),e.jsx("button",{onClick:()=>f("polymorphism"),className:m("px-3 py-1.5 rounded-lg transition-all",l==="polymorphism"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Iterable Polymorphism"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Exploring CPython internal allocation pipelines, delimiter insertion, and collection processing:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:l==="memory"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#34d399",fontSize:"14",fontWeight:"bold",children:"CPYTHON TWO-PASS join() [O(N)] VS LOOP += [O(N²)]"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"250",rx:"8",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"14",fontWeight:"bold",children:"1. delimiter.join(list) [O(N) Linear]"}),e.jsxs("text",{x:"20",y:"55",fill:"#f8fafc",fontSize:"12",children:["• ",e.jsx("tspan",{fill:"#34d399",fontWeight:"bold",children:"Pass 1:"})," Scans list in C, sums total byte size."]}),e.jsxs("text",{x:"20",y:"80",fill:"#f8fafc",fontSize:"12",children:["• ",e.jsx("tspan",{fill:"#34d399",fontWeight:"bold",children:"Alloc:"})," Allocates EXACTLY 1 heap buffer block."]}),e.jsxs("text",{x:"20",y:"105",fill:"#f8fafc",fontSize:"12",children:["• ",e.jsx("tspan",{fill:"#34d399",fontWeight:"bold",children:"Pass 2:"})," Copies all chars directly with native memcpy."]}),e.jsx("rect",{x:"20",y:"130",width:"350",height:"95",rx:"6",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"35",y:"160",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"Single Heap Block Allocation:"}),e.jsx("text",{x:"35",y:"185",fill:"#ecfdf5",fontSize:"12",fontStyle:"italic",children:'"Barrackpore, Kolkata, Shyamnagar"'}),e.jsx("text",{x:"35",y:"210",fill:"#34d399",fontSize:"11",fontWeight:"bold",children:"Zero intermediate string object reallocations!"})]}),e.jsxs("g",{transform:"translate(450, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"250",rx:"8",fill:"#4c0519",stroke:"#f43f5e",strokeWidth:"1.5"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"14",fontWeight:"bold",children:"2. str += in loop [O(N²) Quadratic]"}),e.jsx("text",{x:"20",y:"55",fill:"#f8fafc",fontSize:"12",children:'• Step 1: Allocates "A" + copies.'}),e.jsx("text",{x:"20",y:"80",fill:"#f8fafc",fontSize:"12",children:'• Step 2: Allocates "A, B" + copies "A" + copies "B".'}),e.jsx("text",{x:"20",y:"105",fill:"#f8fafc",fontSize:"12",children:'• Step 3: Allocates "A, B, C" + copies "A, B" + "C"...'}),e.jsx("rect",{x:"20",y:"130",width:"350",height:"95",rx:"6",fill:"#881337",stroke:"#e11d48"}),e.jsx("text",{x:"35",y:"160",fill:"#fecdd3",fontSize:"13",fontWeight:"bold",children:"Repeated Garbage Reallocation:"}),e.jsx("text",{x:"35",y:"185",fill:"#ffe4e6",fontSize:"12",children:"Copies 1L + 2L + 3L + ... + NL bytes!"}),e.jsx("text",{x:"35",y:"210",fill:"#fca5a5",fontSize:"11",fontWeight:"bold",children:"40x - 100x slower on large lists!"})]})]}):l==="placement"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"DELIMITER PLACEMENT INVARIANT: STRICTLY BETWEEN ELEMENTS"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"810",height:"75",rx:"8",fill:"#1e293b",stroke:"#0284c7"}),e.jsx("text",{x:"20",y:"28",fill:"#38bdf8",fontSize:"13",fontWeight:"bold",children:'Case 1: Multi-Item List: ", ".join(["A", "B", "C"])'}),e.jsxs("g",{transform:"translate(20, 38)",children:[e.jsx("rect",{x:"0",y:"0",width:"60",height:"26",rx:"4",fill:"#082f49",stroke:"#38bdf8"}),e.jsx("text",{x:"30",y:"18",fill:"#f8fafc",fontSize:"12",textAnchor:"middle",children:'"A"'}),e.jsx("text",{x:"75",y:"18",fill:"#f43f5e",fontSize:"14",fontWeight:"bold",children:", "}),e.jsx("rect",{x:"90",y:"0",width:"60",height:"26",rx:"4",fill:"#082f49",stroke:"#38bdf8"}),e.jsx("text",{x:"120",y:"18",fill:"#f8fafc",fontSize:"12",textAnchor:"middle",children:'"B"'}),e.jsx("text",{x:"165",y:"18",fill:"#f43f5e",fontSize:"14",fontWeight:"bold",children:", "}),e.jsx("rect",{x:"180",y:"0",width:"60",height:"26",rx:"4",fill:"#082f49",stroke:"#38bdf8"}),e.jsx("text",{x:"210",y:"18",fill:"#f8fafc",fontSize:"12",textAnchor:"middle",children:'"C"'}),e.jsx("text",{x:"260",y:"18",fill:"#34d399",fontSize:"12",children:'→ Output: "A, B, C" (2 commas for 3 elements)'})]})]}),e.jsxs("g",{transform:"translate(30, 140)",children:[e.jsx("rect",{x:"0",y:"0",width:"810",height:"75",rx:"8",fill:"#1e293b",stroke:"#0284c7"}),e.jsx("text",{x:"20",y:"28",fill:"#38bdf8",fontSize:"13",fontWeight:"bold",children:'Case 2: Single-Item List: ", ".join(["Barrackpore"])'}),e.jsxs("g",{transform:"translate(20, 38)",children:[e.jsx("rect",{x:"0",y:"0",width:"120",height:"26",rx:"4",fill:"#082f49",stroke:"#38bdf8"}),e.jsx("text",{x:"60",y:"18",fill:"#f8fafc",fontSize:"12",textAnchor:"middle",children:'"Barrackpore"'}),e.jsx("text",{x:"140",y:"18",fill:"#34d399",fontSize:"12",children:'→ Output: "Barrackpore" (Zero comma added! Clean single value)'})]})]}),e.jsxs("g",{transform:"translate(30, 230)",children:[e.jsx("rect",{x:"0",y:"0",width:"810",height:"75",rx:"8",fill:"#1e293b",stroke:"#0284c7"}),e.jsx("text",{x:"20",y:"28",fill:"#38bdf8",fontSize:"13",fontWeight:"bold",children:'Case 3: Empty List: ", ".join([])'}),e.jsx("text",{x:"20",y:"55",fill:"#34d399",fontSize:"13",children:'→ Output: "" (Empty string - perfectly safe no-op)'})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"ITERABLE POLYMORPHISM: JOINING DIVERSE PYTHON STRUCTURES"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"75",rx:"8",fill:"#1e1b4b",stroke:"#6366f1"}),e.jsx("text",{x:"20",y:"25",fill:"#c7d2fe",fontSize:"13",fontWeight:"bold",children:'Tuple : ", ".join(("22.76 N", "88.36 E"))'}),e.jsx("text",{x:"20",y:"52",fill:"#a7f3d0",fontSize:"14",children:'"22.76 N, 88.36 E"'}),e.jsx("rect",{x:"420",y:"0",width:"390",height:"75",rx:"8",fill:"#3b0764",stroke:"#a855f7"}),e.jsx("text",{x:"440",y:"25",fill:"#e9d5ff",fontSize:"13",fontWeight:"bold",children:'Dictionary Keys : ", ".join(student_dict)'}),e.jsx("text",{x:"440",y:"52",fill:"#a7f3d0",fontSize:"14",children:'"name, course, city" (Keys by default!)'}),e.jsx("rect",{x:"0",y:"90",width:"390",height:"75",rx:"8",fill:"#0c4a6e",stroke:"#0ea5e9"}),e.jsx("text",{x:"20",y:"115",fill:"#bae6fd",fontSize:"13",fontWeight:"bold",children:'Generator : "-".join(f"0x{x:02X}" for x in range(4))'}),e.jsx("text",{x:"20",y:"142",fill:"#a7f3d0",fontSize:"14",children:'"0x00-0x01-0x02-0x03"'}),e.jsx("rect",{x:"420",y:"90",width:"390",height:"75",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"440",y:"115",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:'Sorted Set : " | ".join(sorted(skills_set))'}),e.jsx("text",{x:"440",y:"142",fill:"#a7f3d0",fontSize:"14",children:'"Pandas | Python | SQL"'}),e.jsx("rect",{x:"0",y:"180",width:"810",height:"65",rx:"8",fill:"#090d16",stroke:"#334155"}),e.jsx("text",{x:"20",y:"205",fill:"#38bdf8",fontSize:"13",fontWeight:"bold",children:'String as Char Iterable : "-".join("PYTHON")'}),e.jsx("text",{x:"20",y:"228",fill:"#cbd5e1",fontSize:"13",children:'"P-Y-T-H-O-N" (Strings are sequences of 1-character elements)'})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive String Join Playground"})]}),e.jsxs("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:["Customize the elements list, choose or type a delimiter, and select formatting wrappers to see live Python ",e.jsx("code",{className:"text-pink-300 font-mono",children:"delimiter.join()"})," code and output:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",children:[e.jsxs("div",{className:"space-y-4 bg-slate-950 p-5 rounded-xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1",children:"Input Elements (Comma-Separated)"}),e.jsx("textarea",{value:u,onChange:t=>g(t.target.value),rows:2,className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-slate-100 font-mono text-sm focus:outline-none focus:border-pink-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1",children:"Choose Delimiter Separator"}),e.jsx("div",{className:"grid grid-cols-4 gap-2 mb-2",children:[{val:", ",label:"Comma ', '"},{val:"-",label:"Hyphen '-'"},{val:" | ",label:"Pipe ' | '"},{val:`
`,label:"Newline '\\n'"},{val:"",label:"Empty ''"},{val:" -> ",label:"Arrow ' -> '"},{val:"/",label:"Slash '/'"},{val:" & ",label:"And ' & '"}].map(t=>e.jsx("button",{onClick:()=>j(t.val),className:m("py-1.5 px-2 rounded-lg text-xs font-mono border transition-all text-center",i===t.val?"bg-pink-950 border-pink-500 text-pink-300 shadow font-bold":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:t.label},t.val))}),e.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400",children:"Custom:"}),e.jsx("input",{type:"text",value:i,onChange:t=>j(t.target.value),className:"flex-1 bg-slate-900 border border-slate-700 rounded p-1.5 font-mono text-xs text-pink-300"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1",children:"Element Wrapper Style"}),e.jsx("div",{className:"flex gap-2",children:[{id:"none",label:"Raw item"},{id:"quotes",label:'"item"'},{id:"brackets",label:"[item]"},{id:"sql",label:"'item'"},{id:"html",label:"<li>item</li>"}].map(t=>e.jsx("button",{onClick:()=>b(t.id),className:m("flex-1 py-1.5 rounded-lg text-xs font-mono border transition-all text-center",n===t.id?"bg-purple-950 border-purple-500 text-purple-300 font-bold shadow":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:t.label},t.id))})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400",children:"Generated Python Code"}),e.jsxs("span",{className:"text-xs font-mono text-pink-400 font-bold",children:[p.itemsCount," Elements"]})]}),e.jsx("pre",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800 text-pink-300 font-mono text-xs overflow-x-auto whitespace-pre-wrap",children:p.pythonSnippet})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400",children:"Rendered String Output"}),e.jsxs("span",{className:"text-xs font-mono text-emerald-400 font-bold",children:["Length: ",p.charLength," chars"]})]}),e.jsx("pre",{className:"p-4 bg-slate-900 rounded-lg border border-slate-800 text-emerald-300 font-mono text-sm overflow-x-auto whitespace-pre-wrap font-bold max-h-40",children:p.result})]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚙️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master String Join Cheat Sheet & Recipes"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Recipe Name"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Python Expression"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Sample Input"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Output String"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-bold text-slate-200",children:"CSV Row"}),e.jsx("td",{className:"py-3 px-4 font-mono text-pink-300 font-semibold",children:"','.join(items)"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"['101', 'Susmita', '96.5']"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"'101,Susmita,96.5'"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-bold text-slate-200",children:"Type Cast Numbers"}),e.jsx("td",{className:"py-3 px-4 font-mono text-pink-300 font-semibold",children:"', '.join(map(str, nums))"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"[95, 88, 100]"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"'95, 88, 100'"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-bold text-slate-200",children:"URL Query String"}),e.jsx("td",{className:"py-3 px-4 font-mono text-pink-300 font-semibold",children:"'&'.join(f'{k}={v}' for k,v in d.items())"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"{'q': 'python', 'page': 1}"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"'q=python&page=1'"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-bold text-slate-200",children:"SQL IN Clause"}),e.jsxs("td",{className:"py-3 px-4 font-mono text-pink-300 font-semibold",children:[`', '.join(f"'`,x,`'" for x in cities)`]}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"['Kolkata', 'Barrackpore']"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:`"'Kolkata', 'Barrackpore'"`})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-bold text-slate-200",children:"Multi-Line Bullets"}),e.jsx("td",{className:"py-3 px-4 font-mono text-pink-300 font-semibold",children:"'\\n'.join(f'• {x}' for x in list)"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"['Item 1', 'Item 2']"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"'• Item 1\\n• Item 2'"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-bold text-slate-200",children:"Character Spacing"}),e.jsx("td",{className:"py-3 px-4 font-mono text-pink-300 font-semibold",children:"'-'.join('PYTHON')"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"'PYTHON'"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"'P-Y-T-H-O-N'"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-bold text-slate-200",children:"Filtered Non-Empty"}),e.jsx("td",{className:"py-3 px-4 font-mono text-pink-300 font-semibold",children:"', '.join(x for x in list if x)"}),e.jsx("td",{className:"py-3 px-4 font-mono",children:"['A', '', 'B', '']"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"'A, B'"})]})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating join fundamentals, defensive type casting, CPython two-pass memory benchmarks, and multi-format document generators:"}),e.jsx(y,{files:[{filename:"join_basics_and_delimiters.py",code:S,description:"delimiter.join fundamentals, edge cases (empty list, single element), and design rationale."},{filename:"iterables_and_type_casting.py",code:v,description:"Defensive type casting (map & generators), dictionary key/value joining, and SQL/URL builders."},{filename:"performance_and_memory_architecture.py",code:E,description:"CPython two-pass memcpy algorithm and 20,000-item benchmark (join vs loop += vs StringIO)."},{filename:"log_exporter_and_report_builder.py",code:T,description:"Production report builder exporting CSV tables, Markdown tables, bulk SQL inserts, and HTML lists."}]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"}),' Trap 1: Calling `my_list.join(", ")`']}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-rose-300 font-mono",children:'my_list.join(", ")'})," raises ",e.jsx("code",{className:"text-rose-300 font-mono",children:"AttributeError: 'list' object has no attribute 'join'"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Call on separator: ",e.jsx("code",{className:"text-emerald-300",children:'", ".join(my_list)'})]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Joining Non-String Data Types Directly"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-amber-300 font-mono",children:'", ".join([10, 20, 30])'})," crashes with ",e.jsx("code",{className:"text-amber-300 font-mono",children:"TypeError: sequence item 0: expected str instance, int found"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:'", ".join(map(str, nums))'})]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Building Strings with `+=` in Loops"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Using ",e.jsx("code",{className:"text-purple-300 font-mono",children:"s += row"})," in a loop creates an ",e.jsx("code",{className:"text-purple-300 font-mono",children:"O(N²)"})," bottleneck by reallocating the whole string on every step."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Collect in list, then call ",e.jsx("code",{className:"text-emerald-300",children:'"\\n".join(rows)'}),"!"]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Dictionary Key Surprise"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-cyan-300 font-mono",children:'", ".join(my_dict)'})," joins the dictionary's ",e.jsx("strong",{children:"KEYS"}),", not its values."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," For values, write ",e.jsx("code",{className:"text-emerald-300",children:'", ".join(my_dict.values())'})]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering delimiter mechanics, design rationale, memory architecture, and defensive type casting:"}),e.jsx(w,{questions:A})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with delimiter placement invariants, CPython memory diagrams, and report exporter recipes:"}),e.jsx("div",{className:"mb-10",children:e.jsx(N,{content:k,filename:"python_topic6_joining_strings_notes.txt",title:"Print Topic 6 Study Notes"})}),e.jsx(_,{})]})]})]})}export{W as default};
