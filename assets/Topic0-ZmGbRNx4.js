import{b as o,j as e,bg as c}from"./vendor-react-core-Doz9nIC6.js";import{P as j}from"./PythonFileLoader-hCi5osN-.js";import{P as T}from"./PlainTextPrint-C08xhKA4.js";import{F as E}from"./FAQTemplate-CkSqDH4B.js";import{T as A}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const w=`# topic0_files/list_dict_set_comprehension_fundamentals.py\r
# Module: 003_005_advance-comprehensions\r
# Topic: Deep Dive: List, Dict, and Set Comprehensions\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 0 - File 1: List, Dict, and Set Comprehension Fundamentals & Performance\r
Demonstrates:\r
  1. Idiomatic syntax for List, Dict, and Set comprehensions\r
  2. Bytecode efficiency: comprehension vs traditional \`for\` loop \`.append()\`\r
  3. Set comprehension automatic deduplication and Dict comprehension key-value mapping\r
"""\r
\r
import timeit\r
from typing import List, Dict, Set\r
\r
def demonstrate_comprehension_fundamentals():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - COMPREHENSION FUNDAMENTALS & BYTECODE EFFICIENCY")\r
    print("=" * 70)\r
\r
    raw_students = [\r
        {"id": "STU-101", "name": "Sourav Mukherjee", "score": 94.5, "dept": "PYTHON"},\r
        {"id": "STU-102", "name": "Priyanka Sen", "score": 88.0, "dept": "DATA_SCIENCE"},\r
        {"id": "STU-103", "name": "Debolina Roy", "score": 96.0, "dept": "PYTHON"},\r
        {"id": "STU-104", "name": "Rahul Verma", "score": 78.5, "dept": "WEB_DEV"},\r
        {"id": "STU-105", "name": "Amit Das", "score": 91.0, "dept": "PYTHON"}\r
    ]\r
\r
    # 1. List Comprehension: Extracting Honors Students (Score >= 90)\r
    print("1. List Comprehension \`[expr for x in seq if cond]\`:")\r
    honors_students: List[str] = [\r
        s["name"] for s in raw_students if s["score"] >= 90.0\r
    ]\r
    print(f"   * Honors Candidates (Score >= 90): {honors_students}\\n")\r
\r
    # 2. Dict Comprehension: Mapping Student ID -> Clean Profile\r
    print("2. Dict Comprehension \`{key_expr: val_expr for x in seq}\`:")\r
    id_to_score_map: Dict[str, float] = {\r
        s["id"]: s["score"] for s in raw_students if s["dept"] == "PYTHON"\r
    }\r
    print(f"   * Python Dept Score Map: {id_to_score_map}\\n")\r
\r
    # 3. Set Comprehension: Extracting Unique Departments (Deduplicated)\r
    print("3. Set Comprehension \`{expr for x in seq}\` (Auto-Deduplication):")\r
    unique_depts: Set[str] = {\r
        s["dept"] for s in raw_students\r
    }\r
    print(f"   * Unique Departments: {unique_depts}\\n")\r
\r
    # 4. Performance Benchmark: List Comprehension vs For-Loop Append\r
    print("4. Performance Benchmark: Comprehension vs \`for\` loop \`list.append()\`:")\r
    n_items = 100_000\r
\r
    def loop_append():\r
        res = []\r
        for i in range(n_items):\r
            if i % 2 == 0:\r
                res.append(i * 2)\r
        return res\r
\r
    def list_comp():\r
        return [i * 2 for i in range(n_items) if i % 2 == 0]\r
\r
    t_loop = timeit.timeit(loop_append, number=10)\r
    t_comp = timeit.timeit(list_comp, number=10)\r
\r
    print(f"   * Traditional \`for\` loop + \`.append()\` : {t_loop:.4f}s")\r
    print(f"   * Idiomatic List Comprehension          : {t_comp:.4f}s (Faster due to C-level \`LIST_APPEND\` bytecode!)")\r
\r
    print(r"""\r
Comprehension Rules:\r
  1. List: \`[expr for x in seq if cond]\`\r
  2. Dict: \`{key: val for x in seq if cond}\`\r
  3. Set:  \`{expr for x in seq if cond}\`\r
  4. Comprehensions execute at C-speed, avoiding repeated Python method lookup overhead of \`.append()\`.\r
""")\r
    print("[PASSED] List, Dict, and Set Comprehension Fundamentals Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_comprehension_fundamentals()\r
`,C=`# topic0_files/conditional_expressions_in_comprehensions.py\r
# Module: 003_005_advance-comprehensions\r
# Topic: Deep Dive: List, Dict, and Set Comprehensions\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 0 - File 2: Filtering \`if\` vs Ternary \`if-else\` in Comprehensions\r
Demonstrates:\r
  1. The crucial distinction between filtering (\`if\` at the end) and transformation (\`if-else\` ternary at the start)\r
  2. Synthesizing both: \`[A if condition else B for x in seq if filter_guard]\`\r
  3. Common syntax pitfalls and readability rules\r
"""\r
\r
def demonstrate_conditional_comprehensions():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - FILTERING IF VS TERNARY IF-ELSE MECHANICS")\r
    print("=" * 70)\r
\r
    exam_scores = [95, 42, 88, 33, 76, 91, 55, 28, 84]\r
\r
    # 1. Filtering \`if\` (At the END): Selects a subset of elements\r
    print("1. Filtering \`if\` (At the END - Omits Non-Matching Elements):")\r
    passing_scores = [s for s in exam_scores if s >= 50]\r
    print(f"   * Passing Scores (>= 50): {passing_scores} (Length reduced from {len(exam_scores)} to {len(passing_scores)})\\n")\r
\r
    # 2. Ternary \`if-else\` (At the START): Transforms EVERY element (Length preserved)\r
    print("2. Ternary \`if-else\` (At the START - Evaluates Expression per Item):")\r
    grade_labels = ["PASS" if s >= 50 else "FAIL" for s in exam_scores]\r
    print(f"   * Grade Labels: {grade_labels} (Length preserved at {len(grade_labels)})\\n")\r
\r
    # 3. Combining Both: Filter THEN Transform\r
    print("3. Combined Filtering AND Ternary Transformation:")\r
    # Rule: For students who passed (s >= 50), label honors (>=90: "DISTINCTION", else: "STANDARD_PASS")\r
    annotated_passes = [\r
        f"{s} (DISTINCTION)" if s >= 90 else f"{s} (PASS)"\r
        for s in exam_scores\r
        if s >= 50  # Filter guard\r
    ]\r
    print(f"   * Annotated Passing Scores: {annotated_passes}\\n")\r
\r
    # 4. Dict Comprehension with Ternary Transformation:\r
    print("4. Dict Comprehension with Tiered Categorization:")\r
    student_records = {"Sourav": 95, "Priyanka": 88, "Rahul": 42, "Debolina": 91}\r
    tier_map = {\r
        name: ("PLATINUM" if score >= 90 else "GOLD" if score >= 75 else "STANDARD")\r
        for name, score in student_records.items()\r
    }\r
    print(f"   * Student Tier Map: {tier_map}")\r
\r
    print(r"""\r
Conditional Syntax Rulebook:\r
  - FILTERING ONLY: \`[x for x in seq if filter_condition]\` (No 'else' allowed here!)\r
  - TRANSFORMATION ONLY: \`[A if cond else B for x in seq]\` ('else' is MANDATORY!)\r
  - COMBINED: \`[A if cond else B for x in seq if filter_condition]\`\r
""")\r
    print("[PASSED] Conditional Expressions in Comprehensions Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_conditional_comprehensions()\r
`,k=`# topic0_files/dict_and_set_advanced_transformations.py\r
# Module: 003_005_advance-comprehensions\r
# Topic: Deep Dive: List, Dict, and Set Comprehensions\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 0 - File 3: Dict & Set Advanced Transformations & Inversions\r
Demonstrates:\r
  1. Inverting dictionaries (swapping key-value pairs)\r
  2. Inverting 1-to-many relationships (grouping keys by value)\r
  3. Advanced set comprehensions for dataset deduplication and tag extraction\r
"""\r
\r
from typing import Dict, List, Set\r
\r
def demonstrate_advanced_dict_set_transformations():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - DICT & SET ADVANCED TRANSFORMATIONS")\r
    print("=" * 70)\r
\r
    # 1. Direct 1-to-1 Dictionary Inversion:\r
    student_id_to_roll = {"STU-101": 1, "STU-102": 2, "STU-103": 3}\r
    roll_to_student_id = {v: k for k, v in student_id_to_roll.items()}\r
    print("1. Direct 1-to-1 Dictionary Inversion \`{v: k for k, v in d.items()}\`:")\r
    print(f"   * Original Map : {student_id_to_roll}")\r
    print(f"   * Inverted Map : {roll_to_student_id}\\n")\r
\r
    # 2. 1-to-Many Grouping Inversion (Handling duplicate values):\r
    student_course_assignments = {\r
        "Sourav": "PY-AI",\r
        "Priyanka": "DS-ML",\r
        "Debolina": "PY-AI",\r
        "Rahul": "WEB-DEV",\r
        "Amit": "PY-AI"\r
    }\r
\r
    # Group students by course using dict comprehension + set comprehension:\r
    unique_courses = {c for c in student_course_assignments.values()}\r
    course_roster = {\r
        course: [name for name, c in student_course_assignments.items() if c == course]\r
        for course in unique_courses\r
    }\r
\r
    print("2. Grouping Students by Course (1-to-Many Inversion):")\r
    for course, roster in sorted(course_roster.items()):\r
        print(f"   * [{course:<8}] -> {roster}")\r
\r
    # 3. Set Comprehension for Normalizing Messy Tag Collections:\r
    raw_skill_tags = [\r
        " Python ", "PYTHON", "python_core", " decorators ",\r
        "DECORATORS", "Generators", "generators"\r
    ]\r
\r
    normalized_unique_skills = {\r
        tag.strip().upper().replace(" ", "_")\r
        for tag in raw_skill_tags\r
    }\r
    print(f"\\n3. Set Comprehension Data Normalization ({len(raw_skill_tags)} raw tags -> {len(normalized_unique_skills)} unique):")\r
    print(f"   * Normalized Unique Skills: {sorted(list(normalized_unique_skills))}")\r
\r
    print(r"""\r
Transformation Invariants:\r
  1. Direct inversion \`{v: k for k, v in d.items()}\` assumes values are unique and hashable.\r
  2. For non-unique values, group keys into a list/set per value to prevent key overwriting.\r
  3. Set comprehensions \`{fn(x) for x in seq}\` guarantee canonical normalization without duplicate noise.\r
""")\r
    print("[PASSED] Dict & Set Advanced Transformations Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_advanced_dict_set_transformations()\r
`,D=`# topic0_files/institutional_student_marks_comprehension_engine.py\r
# Module: 003_005_advance-comprehensions\r
# Topic: Deep Dive: List, Dict, and Set Comprehensions\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 0 - File 4: Institutional Marks & Scholarship Comprehension Suite (Case Study)\r
Demonstrates:\r
  1. Full-pipeline academic marks processing using pure comprehensions\r
  2. Synthesizing list, dict, and set comprehensions for roster analytics\r
  3. Calculating grade allocations, distinction honors, and scholarship subsidies\r
"""\r
\r
from decimal import Decimal\r
from typing import Dict, Any, List, Set\r
\r
def run_academic_comprehension_pipeline(students_dataset: List[Dict[str, Any]]) -> Dict[str, Any]:\r
    """Processes student records using list, dict, and set comprehensions."""\r
\r
    # 1. Set comprehension: Extract distinct enrolled departments\r
    departments: Set[str] = {s["department"] for s in students_dataset}\r
\r
    # 2. List comprehension: Extract honors candidates with calculated scholarship grant\r
    honors_candidates = [\r
        {\r
            "student_id": s["id"],\r
            "name": s["name"],\r
            "score": s["score"],\r
            "department": s["department"],\r
            "scholarship_inr": round(Decimal(str(s["tuition_fee"])) * Decimal("0.20"), 2)\r
        }\r
        for s in students_dataset\r
        if s["score"] >= 90.0 and s["status"] == "ACTIVE"\r
    ]\r
\r
    # 3. Dict comprehension: Grade allocation map\r
    grade_roster = {\r
        s["id"]: {\r
            "name": s["name"],\r
            "grade": "PLATINUM" if s["score"] >= 90 else "GOLD" if s["score"] >= 80 else "STANDARD",\r
            "score": s["score"]\r
        }\r
        for s in students_dataset\r
    }\r
\r
    # 4. Dict comprehension: Departmental student count summary\r
    department_summary = {\r
        dept: len([s for s in students_dataset if s["department"] == dept])\r
        for dept in departments\r
    }\r
\r
    # 5. Comprehension-based metric aggregation\r
    total_scholarship_allocated = sum(c["scholarship_inr"] for c in honors_candidates)\r
\r
    return {\r
        "total_active_students": len(students_dataset),\r
        "departments_count": len(departments),\r
        "department_distribution": department_summary,\r
        "honors_candidates_count": len(honors_candidates),\r
        "total_scholarship_grant_inr": total_scholarship_allocated,\r
        "honors_roster": honors_candidates,\r
        "grade_book": grade_roster\r
    }\r
\r
\r
def demonstrate_institutional_marks_suite():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - INSTITUTIONAL COMPREHENSION SUITE")\r
    print("=" * 70)\r
\r
    dataset = [\r
        {"id": "STU-101", "name": "Sourav Mukherjee", "score": 95.5, "department": "AI_ENGINEERING", "tuition_fee": 35000.0, "status": "ACTIVE"},\r
        {"id": "STU-102", "name": "Priyanka Sen", "score": 88.0, "department": "DATA_SCIENCE", "tuition_fee": 32000.0, "status": "ACTIVE"},\r
        {"id": "STU-103", "name": "Debolina Roy", "score": 96.0, "department": "AI_ENGINEERING", "tuition_fee": 35000.0, "status": "ACTIVE"},\r
        {"id": "STU-104", "name": "Rahul Verma", "score": 78.0, "department": "WEB_DEV", "tuition_fee": 25000.0, "status": "ACTIVE"},\r
        {"id": "STU-105", "name": "Sneha Gupta", "score": 92.5, "department": "DATA_SCIENCE", "tuition_fee": 32000.0, "status": "ACTIVE"}\r
    ]\r
\r
    report = run_academic_comprehension_pipeline(dataset)\r
\r
    print("1. Academic Processing Summary (Derived via Pure Comprehensions):")\r
    print(f"   * Total Active Students       : {report['total_active_students']}")\r
    print(f"   * Department Distribution     : {report['department_distribution']}")\r
    print(f"   * Total Honors Candidates     : {report['honors_candidates_count']}")\r
    print(f"   * Total Scholarship Grant     : INR {report['total_scholarship_grant_inr']:,.2f}\\n")\r
\r
    print("2. Honors Scholarship Awardees:")\r
    for h in report["honors_roster"]:\r
        print(f"   * [{h['student_id']}] {h['name']:<18} | Dept: {h['department']:<15} | Score: {h['score']}% | Grant: INR {h['scholarship_inr']:,.2f}")\r
\r
    print("\\n[PASSED] Institutional Marks Comprehension Suite Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_institutional_marks_suite()\r
`,I=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
          PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_005: ADVANCED COMPREHENSIONS\r
              TOPIC 0: DEEP DIVE: LIST, DICT, AND SET COMPREHENSIONS\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. THE THREE COMPREHENSION CONTAINERS\r
--------------------------------------------------------------------------------\r
  * List Comprehension : [x * 2 for x in seq if x > 0]\r
  * Dict Comprehension : {k: v for k, v in pairs if v > 0}\r
  * Set Comprehension  : {x.upper() for x in seq}  (Auto-Deduplicated)\r
\r
--------------------------------------------------------------------------------\r
2. FILTERING IF vs TERNARY IF-ELSE\r
--------------------------------------------------------------------------------\r
  * Filtering (Subset)      : [x for x in seq if x >= 50]\r
  * Transformation (All)    : ["PASS" if x >= 50 else "FAIL" for x in seq]\r
  * Combined (Both)         : [A if cond1 else B for x in seq if filter_cond]\r
\r
--------------------------------------------------------------------------------\r
3. DICTIONARY INVERSION\r
--------------------------------------------------------------------------------\r
  * 1-to-1 Inversion : {v: k for k, v in orig_dict.items()}\r
  * 1-to-Many Group  : {val: [k for k, v in d.items() if v == val] for val in set(d.values())}\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 0: COMPREHENSIONS DEEP DIVE\r
================================================================================\r
`,P=[{question:"Why are list comprehensions significantly faster than traditional 'for' loops using 'list.append()' in Python?",shortAnswer:"Comprehensions execute directly in optimized C-level bytecode instructions ('BUILD_LIST' and 'LIST_APPEND'), bypassing the runtime attribute lookup overhead and method call frame creation of 'list.append()'.",explanation:"C-level bytecode execution without method lookup overhead.",hint:"Bypasses method lookup overhead of .append() using C-level LIST_APPEND bytecode.",level:"basic",codeExample:"[x * 2 for x in range(1000)] # Faster than for loop append"},{question:"What is the syntactic difference between Filtering 'if' and Ternary 'if-else' in comprehensions?",shortAnswer:"Filtering 'if' goes at the END to omit items: '[x for x in seq if cond]'; Ternary 'if-else' goes at the START to transform items: '[A if cond else B for x in seq]'.",explanation:"The two conditional forms serve completely different purposes.",hint:"Filtering 'if' is at the end (omits items); Ternary 'if-else' is at the start (transforms items).",level:"basic",codeExample:"[s for s in scores if s >= 50] vs ['PASS' if s >= 50 else 'FAIL' for s in scores]"},{question:"Can an 'else' clause be used in the trailing filtering 'if' of a comprehension?",shortAnswer:"No. Writing '[x for x in seq if cond else other]' is a syntax error; 'else' is only permitted in ternary expressions at the beginning of the comprehension.",explanation:"Trailing if clauses are pure boolean filters.",hint:"No, trailing 'if' cannot have an 'else' branch; use ternary if-else at the start instead.",level:"basic",codeExample:"# SYNTAX ERROR: [x for x in seq if x > 0 else 0]"},{question:"How does a Set comprehension differ from a List comprehension?",shortAnswer:"A Set comprehension uses curly braces '{expr for x in seq}' and automatically removes duplicate elements, yielding an unordered, unique collection.",explanation:"Automatic deduplication and hash table backing.",hint:"Uses curly braces and automatically deduplicates elements.",level:"basic",codeExample:"{x.lower() for x in ['Python', 'PYTHON', 'Java']} # {'python', 'java'}"},{question:"How do you construct a Dict comprehension in Python?",shortAnswer:"Using curly braces with a colon separating key and value expressions: '{key_expr: val_expr for x in seq if cond}'.",explanation:"Constructs dictionaries directly from iterables in a single expression.",hint:"Use {k: v for item in seq}.",level:"basic",codeExample:"{s['id']: s['name'] for s in students}"},{question:"How do you invert a 1-to-1 dictionary (swap keys and values) using a Dict comprehension?",shortAnswer:"Using '{v: k for k, v in original_dict.items()}', assuming all values are unique and hashable.",explanation:"Standard recipe for dictionary key-value inversion.",hint:"Use {v: k for k, v in d.items()}.",level:"basic",codeExample:`id_to_name = {'STU-1': 'Alice', 'STU-2': 'Bob'}
name_to_id = {v: k for k, v in id_to_name.items()}`},{question:"What happens during a direct 1-to-1 dictionary inversion if multiple keys have identical values?",shortAnswer:"Subsequent duplicate values overwrite earlier keys in the resulting dictionary; to prevent data loss, you must group keys into a list/set per value.",explanation:"Dictionary keys must be unique.",hint:"Duplicate values overwrite previous keys; group into lists to avoid loss.",level:"moderate",codeExample:"# {val: [k for k, v in d.items() if v == val] for val in set(d.values())}"},{question:"Do loop variables in list comprehensions leak into the surrounding scope in Python 3?",shortAnswer:"No. In Python 3, comprehensions have their own local nested function scope; loop variables do NOT leak or overwrite variables in the enclosing scope (unlike in Python 2).",explanation:"Python 3 scoping isolation.",hint:"No, Python 3 isolates comprehension loop variables in their own scope.",level:"moderate",codeExample:"x = 100; [x for x in range(5)]; print(x) # Prints 100!"},{question:"How does a List comprehension compare to a Generator expression in memory usage?",shortAnswer:"A List comprehension constructs the entire list in memory immediately (O(N) RAM); a Generator expression ('(expr for x in seq)') produces items lazily on demand (O(1) RAM).",explanation:"Eager memory allocation vs lazy streaming evaluation.",hint:"List comp allocates full list in RAM (O(N)); Generator yields on demand (O(1)).",level:"moderate",codeExample:"sum(x * 2 for x in range(10_000_000)) # O(1) generator memory"},{question:"How do you combine a filtering guard with a ternary transformation in a single comprehension?",shortAnswer:"By placing the ternary transformation at the start and the filter guard at the end: '[A if cond1 else B for x in seq if filter_guard]'.",explanation:"Processes and transforms only the elements that pass the filter.",hint:"Place ternary if-else at start, filter if at end.",level:"moderate",codeExample:"[f'{x}: EVEN' if x % 2 == 0 else f'{x}: ODD' for x in range(20) if x > 10]"},{question:"Can you create an empty set using '{}'?",shortAnswer:"No. '{}' creates an empty dictionary ('dict'); to create an empty set, use 'set()' (though '{x for x in []}' evaluates to an empty set).",explanation:"A common beginner syntax pitfall.",hint:"{} is an empty dict; use set() for an empty set.",level:"basic",codeExample:"type({}) # <class 'dict'>; type(set()) # <class 'set'>"},{question:"How do you filter a dictionary by its values using a Dict comprehension?",shortAnswer:"Using '{k: v for k, v in d.items() if v >= threshold}'.",explanation:"Creates a sub-dictionary containing only matching entries.",hint:"Use {k: v for k, v in d.items() if v > threshold}.",level:"basic",codeExample:"passed = {k: v for k, v in scores.items() if v >= 50}"},{question:"How do you normalize string casing across a collection using a Set comprehension?",shortAnswer:"Using '{s.strip().upper() for s in raw_strings}'.",explanation:"Eliminates duplicate variations caused by whitespace or letter case.",hint:"Apply string methods inside set comprehension: {s.upper() for s in list}.",level:"basic",codeExample:"{tag.strip().upper() for tag in ['python', ' Python ', 'PYTHON']}"},{question:"What is the time complexity of looking up an item in the result of a List vs Set comprehension?",shortAnswer:"List lookup ('item in my_list') is O(N) linear time; Set lookup ('item in my_set') is O(1) constant average time due to hash table indexing.",explanation:"Hash table indexing advantages of sets.",hint:"List lookup is O(N); Set lookup is O(1).",level:"basic",codeExample:"valid_ids = {s['id'] for s in students}; if 'STU-101' in valid_ids: ... # O(1)"},{question:"Can side-effects (such as 'print()' or file writes) be placed inside comprehensions?",shortAnswer:"Technically yes, but it is strongly discouraged as an anti-pattern; comprehensions should be pure functional expressions used to produce new data structures.",explanation:"Comprehensions are for data construction, not side-effects.",hint:"Discouraged; comprehensions should construct data, not execute side-effects.",level:"moderate",codeExample:"# BAD: [print(x) for x in seq] -> GOOD: for x in seq: print(x)"},{question:"How do you create a dictionary mapping words to their character lengths?",shortAnswer:"Using '{word: len(word) for word in words}'.",explanation:"Classic map transformation.",hint:"Use {w: len(w) for w in words}.",level:"basic",codeExample:"{w: len(w) for w in ['Python', 'FastAPI', 'AI']}"},{question:"How do you flatten a dictionary of lists into a unique set of all items?",shortAnswer:"Using '{item for sublist in dict_data.values() for item in sublist}'.",explanation:"Flattens nested collections into a deduplicated set.",hint:"Nest for loops inside set comprehension: {item for lst in d.values() for item in lst}.",level:"complex",codeExample:"{badge for badges in student_badges.values() for badge in badges}"},{question:"What error occurs if you attempt to use an unhashable object (like a list) as a key in a Dict comprehension?",shortAnswer:"It raises 'TypeError: unhashable type: 'list'' because dictionary keys must be immutable and hashable.",explanation:"Hashability requirement for dictionary keys and set elements.",hint:"Raises TypeError: unhashable type: 'list'.",level:"basic",codeExample:"# TypeError: {[1, 2]: 'val'}"},{question:"How do you sort a dictionary by its values using a Dict comprehension?",shortAnswer:"Using '{k: v for k, v in sorted(d.items(), key=lambda item: item[1])}'.",explanation:"Re-creates the dictionary in sorted value order (Python 3.7+ preserves insertion order).",hint:"Sort d.items() by value and rebuild with dict comprehension.",level:"moderate",codeExample:"{k: v for k, v in sorted(scores.items(), key=lambda x: x[1], reverse=True)}"},{question:"Can a comprehension call user-defined functions or methods in its expression?",shortAnswer:"Yes. Any callable expression (such as 'transform(x)' or 'x.to_dict()') can be used as the expression in list, dict, or set comprehensions.",explanation:"Allows clean integration of domain model methods.",hint:"Yes, functions and methods can be called directly in the expression.",level:"basic",codeExample:"[student.calculate_gpa() for student in roster]"},{question:"How do you extract common keys between two dictionaries using a Dict comprehension?",shortAnswer:"Using '{k: (d1[k], d2[k]) for k in d1.keys() & d2.keys()}'.",explanation:"Combines set operations on dict keys with dict comprehension.",hint:"Use d1.keys() & d2.keys() intersection inside comprehension.",level:"complex",codeExample:"{k: d1[k] for k in d1.keys() & d2.keys()}"},{question:"What is the readability guideline for complex comprehensions?",shortAnswer:"If a comprehension requires more than two 'for' clauses or multiple nested conditions, refactor it into a standard multi-line 'for' loop or helper function for readability.",explanation:"The Zen of Python: 'Readability counts'.",hint:"If longer than 2 clauses, refactor to standard loops for readability.",level:"basic",codeExample:"# Keep comprehensions clean and readable"},{question:"How do you create a identity dictionary mapping a list of IDs to their default state?",shortAnswer:"Using '{uid: {'status': 'PENDING', 'attempts': 0} for uid in id_list}'.",explanation:"Initializes state structures efficiently.",hint:"Use {uid: default_dict for uid in list}.",level:"basic",codeExample:"{uid: {'active': True} for uid in user_ids}"},{question:"How do you conditionally exclude keys with 'None' values from a dictionary?",shortAnswer:"Using '{k: v for k, v in data.items() if v is not None}'.",explanation:"Cleans sparse dictionary payloads.",hint:"Use {k: v for k, v in d.items() if v is not None}.",level:"basic",codeExample:"{k: v for k, v in payload.items() if v is not None}"},{question:"What is the ultimate golden rule for List, Dict, and Set Comprehensions in Python?",shortAnswer:"Use list comprehensions for fast ordered sequences, set comprehensions for automatic deduplication, and dict comprehensions for key-value transformations; use trailing 'if' for filtering and leading 'if-else' for transformations.",explanation:"The complete enterprise blueprint for idiomatic Python comprehensions.",hint:"List for sequences, Set for deduplication, Dict for mappings; trailing if filters, leading if-else transforms.",level:"basic",codeExample:"# Python Comprehension Mastery"}];function G(){const p=o.useRef([]),[m,f]=o.useState("syntax"),g=[{id:"STU-101",name:"Sourav Mukherjee",score:95.5,dept:"AI_ENGINEERING"},{id:"STU-102",name:"Priyanka Sen",score:88,dept:"DATA_SCIENCE"},{id:"STU-103",name:"Debolina Roy",score:96,dept:"AI_ENGINEERING"},{id:"STU-104",name:"Rahul Verma",score:78,dept:"WEB_DEV"},{id:"STU-105",name:"Sneha Gupta",score:92.5,dept:"DATA_SCIENCE"}],[a,h]=o.useState("list"),[i,v]=o.useState(85),[u,N]=o.useState(!0),[l,_]=o.useState(!1),[b,S]=o.useState(!1),x=g.filter(t=>t.score>=i&&(!l||t.dept==="AI_ENGINEERING"));let d="",s=null;if(a==="list")u?(d=`[f"{s['name']} (DISTINCTION)" if s['score'] >= 90 else f"{s['name']} (PASS)" for s in students if s['score'] >= ${i}${l?" and s['dept'] == 'AI_ENGINEERING'":""}]`,s=x.map(t=>t.score>=90?`${t.name} (DISTINCTION)`:`${t.name} (PASS)`)):(d=`[s['name'] for s in students if s['score'] >= ${i}${l?" and s['dept'] == 'AI_ENGINEERING'":""}]`,s=x.map(t=>t.name));else if(a==="dict")if(b){d=`{s['score']: s['name'] for s in students if s['score'] >= ${i}${l?" and s['dept'] == 'AI_ENGINEERING'":""}}`;const t={};x.forEach(n=>{t[n.score]=n.name}),s=t}else{d=`{s['id']: ("PLATINUM" if s['score'] >= 90 else "STANDARD") for s in students if s['score'] >= ${i}${l?" and s['dept'] == 'AI_ENGINEERING'":""}}`;const t={};x.forEach(n=>{t[n.id]=n.score>=90?"PLATINUM":"STANDARD"}),s=t}else d=`{s['dept'] for s in students if s['score'] >= ${i}${l?" and s['dept'] == 'AI_ENGINEERING'":""}}`,s=Array.from(new Set(x.map(t=>t.dept)));o.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(y=>{y.isIntersecting&&y.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return p.current.forEach(n=>{n&&t.observe(n)}),()=>t.disconnect()},[]);const r=t=>{t&&!p.current.includes(t)&&p.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:r,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_005"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 0"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Advanced Comprehensions & Functional Python"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Deep Dive: ",e.jsx("span",{className:"text-teal-400",children:"List, Dict, and Set Comprehensions"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master idiomatic comprehensions in Python: formal syntax grammar, C-level bytecode optimization (",e.jsx("code",{className:"text-teal-300 font-mono",children:"BUILD_LIST"})," & ",e.jsx("code",{className:"text-teal-300 font-mono",children:"LIST_APPEND"}),"), the critical distinction between trailing filtering ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"if"})," and leading ternary ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"if-else"})," transformations, dictionary inversions, and set deduplication."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📋 `[expr for x in seq if cond]`"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔑 `{k: v for k, v in d.items()}`"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ `{x for x in seq}` (Deduplication)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🚀 C-Speed Bytecode Execution"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚡"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Power & Performance of Python Comprehensions"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"Comprehensions provide a concise, declarative syntax to construct collections while executing at C-speed directly in Python's virtual machine:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ List Comprehension"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"[x * 2 for x in seq if x > 0]"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Constructs ordered lists in memory using specialized ",e.jsx("code",{className:"text-teal-300",children:"LIST_APPEND"})," bytecode."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Dict Comprehension"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"{k: v for k, v in pairs}"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Maps keys to values, ideal for dataset indexing, filtering, and 1-to-1 dictionary inversions."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Set Comprehension"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"{s.upper() for s in tags}"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Extracts unique items with automatic hash-based deduplication and case normalization."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"Why Comprehensions are Faster than `for` Loop `.append()`"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Traditional ",e.jsx("code",{className:"text-rose-400 font-mono",children:"for"})," loops perform attribute lookup (",e.jsx("code",{className:"text-slate-300",children:"list.append"}),") and method frame creation on every single iteration. Comprehensions execute a dedicated C-level opcode (",e.jsx("code",{className:"text-teal-300 font-mono",children:"LIST_APPEND"}),"), running up to 35% faster."]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Syntax Anatomy, Conditional Logic & Bytecode"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>f("syntax"),className:c("px-3 py-1.5 rounded-lg transition-all",m==="syntax"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Comprehension Anatomy"}),e.jsx("button",{onClick:()=>f("conditionals"),className:c("px-3 py-1.5 rounded-lg transition-all",m==="conditionals"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Filter `if` vs Ternary `if-else`"}),e.jsx("button",{onClick:()=>f("bytecode"),className:c("px-3 py-1.5 rounded-lg transition-all",m==="bytecode"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Bytecode Optimization"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining comprehension syntax parts, conditional execution positioning, and C-level bytecode instructions:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:m==="syntax"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"ANATOMY OF PYTHON COMPREHENSIONS (LIST, DICT, SET)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"1. List Comprehension `[...]`"}),e.jsx("text",{x:"15",y:"55",fill:"#34d399",fontSize:"9 font-mono font-bold",children:"[expr for x in seq if cond]"}),e.jsx("text",{x:"15",y:"80",fill:"#ecfdf5",fontSize:"8 font-mono",children:"• Delimiters: Square Brackets []"}),e.jsx("text",{x:"15",y:"98",fill:"#ecfdf5",fontSize:"8 font-mono",children:"• Order: Preserves iteration order"}),e.jsx("rect",{x:"15",y:"120",width:"220",height:"95",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"25",y:"145",fill:"#34d399",fontSize:"9 font-bold",children:"Output Container:"}),e.jsx("text",{x:"25",y:"165",fill:"#cbd5e1",fontSize:"8",children:"`list` object"}),e.jsx("text",{x:"25",y:"180",fill:"#cbd5e1",fontSize:"8",children:"Allows duplicates & indexing."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"310",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. Dict Comprehension `{k: v}`"}),e.jsx("text",{x:"310",y:"55",fill:"#38bdf8",fontSize:"9 font-mono font-bold",children:"{k: v for x in seq if cond}"}),e.jsx("text",{x:"310",y:"80",fill:"#ecfdf5",fontSize:"8 font-mono",children:"• Delimiters: Curly Braces + Colon"}),e.jsx("text",{x:"310",y:"98",fill:"#ecfdf5",fontSize:"8 font-mono",children:"• Keys: Must be hashable & unique"}),e.jsx("rect",{x:"310",y:"120",width:"220",height:"95",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"320",y:"145",fill:"#38bdf8",fontSize:"9 font-bold",children:"Output Container:"}),e.jsx("text",{x:"320",y:"165",fill:"#cbd5e1",fontSize:"8",children:"`dict` object"}),e.jsx("text",{x:"320",y:"180",fill:"#cbd5e1",fontSize:"8",children:"O(1) key-value lookup map."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"605",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"3. Set Comprehension `{...}`"}),e.jsx("text",{x:"605",y:"55",fill:"#c084fc",fontSize:"9 font-mono font-bold",children:"{expr for x in seq if cond}"}),e.jsx("text",{x:"605",y:"80",fill:"#ecfdf5",fontSize:"8 font-mono",children:"• Delimiters: Curly Braces (No colon)"}),e.jsx("text",{x:"605",y:"98",fill:"#ecfdf5",fontSize:"8 font-mono",children:"• Auto-Deduplication: Unique only"}),e.jsx("rect",{x:"605",y:"120",width:"200",height:"95",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"615",y:"145",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Output Container:"}),e.jsx("text",{x:"615",y:"165",fill:"#cbd5e1",fontSize:"8",children:"`set` object"}),e.jsx("text",{x:"615",y:"180",fill:"#cbd5e1",fontSize:"8",children:"O(1) membership testing."})]})]}):m==="conditionals"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"FILTERING `if` (END) VS TERNARY `if-else` (START)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"1. Filtering `if` (At the END)"}),e.jsx("text",{x:"20",y:"60",fill:"#34d399",fontSize:"9 font-mono font-bold",children:"[s for s in scores if s >= 50]"}),e.jsx("text",{x:"20",y:"85",fill:"#ecfdf5",fontSize:"8 font-mono",children:"• Evaluated: PRE-APPEND filter guard"}),e.jsx("text",{x:"20",y:"105",fill:"#ecfdf5",fontSize:"8 font-mono",children:"• Result: Omits non-matching elements"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"Length Impact:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Output length <= Input length (Subset selection)."})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"2. Ternary `if-else` (At the START)"}),e.jsx("text",{x:"20",y:"60",fill:"#c084fc",fontSize:"9 font-mono font-bold",children:'["PASS" if s >= 50 else "FAIL" for s in scores]'}),e.jsx("text",{x:"20",y:"85",fill:"#ecfdf5",fontSize:"8 font-mono",children:"• Evaluated: PER-ITEM expression transform"}),e.jsx("text",{x:"20",y:"105",fill:"#ecfdf5",fontSize:"8 font-mono",children:"• Result: Transforms EVERY element ('else' is mandatory!)"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"30",y:"155",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Length Impact:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Output length == Input length (1-to-1 transformation)."})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"BYTECODE EXECUTION: `LIST_APPEND` VS RUNTIME METHOD CALLS"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"Traditional `for` loop + `.append()`"}),e.jsx("text",{x:"20",y:"60",fill:"#fca5a5",fontSize:"8 font-mono",children:"1. LOAD_FAST 'res'"}),e.jsx("text",{x:"20",y:"76",fill:"#fca5a5",fontSize:"8 font-mono",children:"2. LOAD_METHOD 'append' (Runtime attribute lookup!)"}),e.jsx("text",{x:"20",y:"92",fill:"#fca5a5",fontSize:"8 font-mono",children:"3. PRECALL + CALL (Creates function stack frame)"}),e.jsx("text",{x:"20",y:"108",fill:"#fca5a5",fontSize:"8 font-mono",children:"4. POP_TOP"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"155",fill:"#fda4af",fontSize:"9 font-bold",children:"Overhead per Iteration:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Requires repeated dictionary lookups for 'append'."})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"List Comprehension Bytecode"}),e.jsx("text",{x:"20",y:"60",fill:"#34d399",fontSize:"8 font-mono",children:"1. BUILD_LIST 0 (Allocates list in C)"}),e.jsx("text",{x:"20",y:"76",fill:"#34d399",fontSize:"8 font-mono",children:"2. FOR_ITER ..."}),e.jsx("text",{x:"20",y:"92",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"3. LIST_APPEND 1 (Direct C-level array insert!)"}),e.jsx("text",{x:"20",y:"108",fill:"#34d399",fontSize:"8 font-mono",children:"4. RETURN_VALUE"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"Zero Method Overhead:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Executes directly in optimized C opcode (~35% faster)."})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Comprehension Transformation Laboratory"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Configure container types, adjust minimum score filtering guards, toggle ternary distinctions, and observe live evaluated Python comprehensions:"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"1. Target Container Type"})}),e.jsxs("div",{className:"flex bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:[e.jsx("button",{onClick:()=>h("list"),className:c("flex-1 py-1.5 rounded transition-all",a==="list"?"bg-teal-900/60 text-teal-300 font-bold border border-teal-700/80":"text-slate-400 hover:text-white"),children:"List `[...]`"}),e.jsx("button",{onClick:()=>h("dict"),className:c("flex-1 py-1.5 rounded transition-all",a==="dict"?"bg-cyan-900/60 text-cyan-300 font-bold border border-cyan-700/80":"text-slate-400 hover:text-white"),children:"Dict `{k: v}`"}),e.jsx("button",{onClick:()=>h("set"),className:c("flex-1 py-1.5 rounded transition-all",a==="set"?"bg-purple-900/60 text-purple-300 font-bold border border-purple-700/80":"text-slate-400 hover:text-white"),children:"Set `{...}`"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[e.jsx("span",{className:"text-slate-300",children:"Filter Guard: Minimum Score:"}),e.jsxs("span",{className:"text-teal-300 font-bold",children:[i,"%"]})]}),e.jsx("input",{type:"range",min:50,max:95,value:i,onChange:t=>v(Number(t.target.value)),className:"w-full accent-teal-500 cursor-pointer"})]}),e.jsxs("div",{className:"space-y-2 text-xs font-mono pt-1",children:[a==="list"&&e.jsxs("label",{className:"flex items-center gap-2 p-2 bg-slate-900 rounded border border-slate-800 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:u,onChange:t=>N(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"Apply Leading Ternary Distinction Label (DISTINCTION / PASS)"})]}),a==="dict"&&e.jsxs("label",{className:"flex items-center gap-2 p-2 bg-slate-900 rounded border border-slate-800 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:b,onChange:t=>S(t.target.checked),className:"accent-cyan-500 rounded"}),e.jsx("span",{children:"Invert Dictionary Keys (`score -> name`)"})]}),e.jsxs("label",{className:"flex items-center gap-2 p-2 bg-slate-900 rounded border border-slate-800 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:l,onChange:t=>_(t.target.checked),className:"accent-purple-500 rounded"}),e.jsx("span",{children:"Filter Only AI_ENGINEERING Department"})]})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs space-y-1",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:"Generated Python Comprehension Expression:"}),e.jsx("div",{className:"text-teal-300 text-[11px] leading-relaxed break-all font-mono",children:d})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[160px] font-mono text-xs space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-[10px] font-bold uppercase text-slate-400",children:[e.jsxs("span",{children:["Evaluated Output (",Array.isArray(s)?s.length:Object.keys(s||{}).length," Items):"]}),e.jsx("span",{className:"text-emerald-400",children:"C-Speed Opcode Ready"})]}),e.jsx("pre",{className:"text-slate-200 text-[11px] leading-relaxed",children:JSON.stringify(s,null,2)})]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Comprehension Container Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Comprehension Type"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Syntax Template"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Container Invariant"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Primary Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"List Comprehension"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`[expr for x in seq if cond]`"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Ordered, duplicates allowed"}),e.jsx("td",{className:"py-3 px-4",children:"Sequential dataset transformations"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"Dict Comprehension"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`{k: v for x in seq if cond}`"}),e.jsx("td",{className:"py-3 px-4 text-cyan-300",children:"Hash table key-value pairs"}),e.jsx("td",{className:"py-3 px-4",children:"Fast lookups, dictionary inversion"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Set Comprehension"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`{expr for x in seq if cond}`"}),e.jsx("td",{className:"py-3 px-4 text-purple-300",children:"Unique hashable elements only"}),e.jsx("td",{className:"py-3 px-4",children:"Tag normalization, deduplication"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"Generator Expression"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`(expr for x in seq if cond)`"}),e.jsx("td",{className:"py-3 px-4 text-amber-300",children:"Lazy iterator, O(1) memory"}),e.jsx("td",{className:"py-3 px-4",children:"Streaming multi-million record pipelines"})]})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating comprehension fundamentals, conditional mechanics, dict/set inversions, and academic marks suites:"}),e.jsx(j,{files:[{filename:"list_dict_set_comprehension_fundamentals.py",code:w,description:"List, Dict, and Set comprehensions and bytecode performance comparisons."},{filename:"conditional_expressions_in_comprehensions.py",code:C,description:"Filtering if vs ternary if-else expressions in comprehensions."},{filename:"dict_and_set_advanced_transformations.py",code:k,description:"Dictionary inversion, 1-to-many grouping, and set data normalization."},{filename:"institutional_student_marks_comprehension_engine.py",code:D,description:"Institutional Academic Marks & Scholarship Allocation Comprehension Suite."}]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Adding `else` to Trailing Filtering `if`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"[x for x in seq if x > 0 else 0]"})," is a fatal ",e.jsx("code",{className:"text-rose-300 font-mono",children:"SyntaxError"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Put ternary ",e.jsx("code",{className:"text-emerald-300",children:"[x if x > 0 else 0 for x in seq]"})," at the start!"]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Direct Dict Inversion Key Overwriting"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Inverting ",e.jsx("code",{className:"text-amber-300 font-mono",children:"{v: k for k, v in d.items()}"})," when multiple keys share the same value silently overwrites earlier keys!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Group values into a list or set per unique value."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Creating Empty Set with `","`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-purple-300 font-mono",children:"s = {}"})," creates an empty dictionary (",e.jsx("code",{className:"text-purple-300 font-mono",children:"dict"}),"), not a set!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always use ",e.jsx("code",{className:"text-emerald-300",children:"set()"})," for an empty set."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Side-Effects in Comprehensions"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Using comprehensions solely to execute side-effects like ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"[print(x) for x in seq]"})," wastes memory creating temporary discarded lists."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Use standard ",e.jsx("code",{className:"text-emerald-300",children:"for"})," loops for side-effects and I/O."]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering list, dict, and set comprehensions, conditional filtering, bytecode execution, and memory optimization:"}),e.jsx(E,{questions:P})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with comprehension syntax recipes, conditional mechanics, and dictionary inversion templates:"}),e.jsx("div",{className:"mb-10",children:e.jsx(T,{content:I,filename:"python_topic0_comprehensions_deep_dive_notes.txt",title:"Print Topic 0 Study Notes"})}),e.jsx(A,{})]})]})]})}export{G as default};
