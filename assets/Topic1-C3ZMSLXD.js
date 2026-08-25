import{b as c,j as e,bg as l}from"./vendor-react-core-Doz9nIC6.js";import{P as T}from"./PythonFileLoader-hCi5osN-.js";import{P as D}from"./PlainTextPrint-C08xhKA4.js";import{F as E}from"./FAQTemplate-CkSqDH4B.js";import{T as A}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const k=`# topic1_files/nested_comprehension_order_and_flattening.py\r
# Module: 003_005_advance-comprehensions\r
# Topic: Nested and Multi-variable Comprehensions with filtering\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 1 - File 1: Nested Comprehension Loop Order, Flattening & Matrix Construction\r
Demonstrates:\r
  1. The Left-to-Right loop ordering rule: \`[item for outer in seq for item in outer]\`\r
  2. Flattening 2D and 3D nested lists into flat 1D collections\r
  3. Constructing nested 2D matrices via nested list comprehensions\r
"""\r
\r
from typing import List\r
\r
def demonstrate_nested_comprehensions():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - NESTED COMPREHENSIONS & 2D MATRIX FLATTENING")\r
    print("=" * 70)\r
\r
    # Multi-campus student batches (2D List)\r
    campus_batches: List[List[str]] = [\r
        ["Sourav Mukherjee (BP)", "Debolina Roy (BP)"],\r
        ["Priyanka Sen (KL)", "Sneha Gupta (KL)"],\r
        ["Rahul Verma (WB)", "Amit Das (WB)"]\r
    ]\r
\r
    # 1. Flattening 2D list into 1D flat list\r
    # Rule: Loop order in comprehension matches loop order of nested for loops!\r
    # Equivalent to:\r
    # for batch in campus_batches:\r
    #     for student in batch:\r
    #         flat_roster.append(student)\r
    print("1. Flattening 2D List into 1D (\`[s for batch in campus_batches for s in batch]\`):")\r
    flat_roster = [student for batch in campus_batches for student in batch]\r
    print(f"   * Flat Student Roster ({len(flat_roster)} students):")\r
    for s in flat_roster:\r
        print(f"     - {s}")\r
\r
    # 2. Flattening with Filtering Guard (Only Barrackpore 'BP' students):\r
    print("\\n2. Flattening with Filtering Guard (Only 'BP' Students):")\r
    bp_students = [\r
        student for batch in campus_batches\r
        for student in batch\r
        if "(BP)" in student\r
    ]\r
    print(f"   * Filtered BP Roster: {bp_students}\\n")\r
\r
    # 3. Constructing a 2D Multiplication / Score Weighting Matrix (3x3):\r
    # Rule: Nested comprehension \`[[col for col in ...] for row in ...]\`\r
    print("3. Constructing 2D Matrix via Nested Comprehensions (\`[[... for col] for row]\`):")\r
    grid_matrix = [\r
        [f"R{row}C{col}" for col in range(1, 4)]\r
        for row in range(1, 4)\r
    ]\r
    for row in grid_matrix:\r
        print(f"   * {row}")\r
\r
    print(r"""\r
Loop Ordering Invariants:\r
  1. Flattening: \`[item for outer in container for item in outer]\` (Single 1D result).\r
  2. Matrix Construction: \`[[expr for inner in row] for row in matrix]\` (2D nested result).\r
  3. Clauses are read Left-to-Right in the exact same order as nested \`for\` statements.\r
""")\r
    print("[PASSED] Nested Comprehension Order & Flattening Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_nested_comprehensions()\r
`,M=`# topic1_files/cartesian_products_and_multi_variable_filtering.py\r
# Module: 003_005_advance-comprehensions\r
# Topic: Nested and Multi-variable Comprehensions with filtering\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 1 - File 2: Cartesian Products, Tuple Unpacking & Matrix Transposition\r
Demonstrates:\r
  1. Generating Cartesian cross-products between independent collections\r
  2. Multi-variable tuple unpacking directly inside comprehension loop headers\r
  3. Transposing rectangular and square 2D matrices using nested list comprehensions\r
"""\r
\r
from typing import List, Tuple\r
\r
def demonstrate_cartesian_and_transposition():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - CARTESIAN PRODUCTS & MATRIX TRANSPOSITION")\r
    print("=" * 70)\r
\r
    instructors = ["Sukanta Hui", "Prabhat Sen"]\r
    courses = ["Python Full-Stack", "AI Engineering", "Data Science"]\r
    campuses = ["Barrackpore", "Kolkata"]\r
\r
    # 1. Cartesian Cross-Product: All possible Teaching Allocations\r
    # [Instructor x Course x Campus]\r
    print("1. 3-Way Cartesian Product \`[(i, c, cmp) for i in ... for c in ... for cmp in ...]\`: ")\r
    allocation_matrix = [\r
        {"instructor": inst, "course": crs, "campus": camp}\r
        for inst in instructors\r
        for crs in courses\r
        for camp in campuses\r
        if not (inst == "Prabhat Sen" and crs == "Python Full-Stack")  # Filter guard\r
    ]\r
\r
    print(f"   * Total Generated Allocations ({len(allocation_matrix)} slots):")\r
    for alloc in allocation_matrix[:5]:\r
        print(f"     - {alloc['instructor']:<14} -> {alloc['course']:<18} @ {alloc['campus']}")\r
\r
    # 2. Multi-Variable Tuple Unpacking in Comprehensions:\r
    print("\\n2. Multi-Variable Tuple Unpacking \`[(id, name, score) for ...]\`: ")\r
    student_records: List[Tuple[str, str, int]] = [\r
        ("STU-101", "Sourav Mukherjee", 95),\r
        ("STU-102", "Priyanka Sen", 88),\r
        ("STU-103", "Debolina Roy", 96)\r
    ]\r
\r
    # Unpack directly in comprehension loop variable:\r
    formatted_summaries = [\r
        f"[{sid}] {name.upper()}: Grade A (Score: {score})"\r
        for sid, name, score in student_records\r
        if score >= 90\r
    ]\r
    for summ in formatted_summaries:\r
        print(f"   * {summ}")\r
\r
    # 3. 2D Matrix Transposition (Swapping rows and columns):\r
    print("\\n3. Matrix Transposition via Nested Comprehension (\`[[row[i] for row in M] for i in range(cols)]\`):")\r
    # Original 3x2 Matrix (3 rows, 2 columns):\r
    # [ [10, 20],\r
    #   [30, 40],\r
    #   [50, 60] ]\r
    matrix_3x2 = [\r
        [10, 20],\r
        [30, 40],\r
        [50, 60]\r
    ]\r
\r
    n_rows = len(matrix_3x2)\r
    n_cols = len(matrix_3x2[0])\r
\r
    transposed_2x3 = [\r
        [matrix_3x2[row_idx][col_idx] for row_idx in range(n_rows)]\r
        for col_idx in range(n_cols)\r
    ]\r
\r
    print("   * Original 3x2 Matrix:")\r
    for r in matrix_3x2:\r
        print(f"     {r}")\r
\r
    print("   * Transposed 2x3 Matrix (Rows <-> Columns Swapped):")\r
    for r in transposed_2x3:\r
        print(f"     {r}")\r
\r
    print("\\n[PASSED] Cartesian Products & Matrix Transposition Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_cartesian_and_transposition()\r
`,O=`# topic1_files/nested_dict_and_lookup_table_comprehensions.py\r
# Module: 003_005_advance-comprehensions\r
# Topic: Nested and Multi-variable Comprehensions with filtering\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 1 - File 3: Nested Dict Comprehensions & Composite Lookup Tables\r
Demonstrates:\r
  1. Constructing nested dictionary hierarchies using nested dict comprehensions\r
  2. Building composite multi-key indexing tables: \`{(campus, course): [student_ids]}\`\r
  3. Filtering nested dictionary values without mutating originals\r
"""\r
\r
from typing import Dict, Any, List, Tuple\r
\r
def demonstrate_nested_dict_comprehensions():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - NESTED DICT COMPREHENSIONS & COMPOSITE LOOKUPS")\r
    print("=" * 70)\r
\r
    students = [\r
        {"id": "STU-101", "name": "Sourav", "dept": "AI", "campus": "BP", "score": 95},\r
        {"id": "STU-102", "name": "Priyanka", "dept": "DS", "campus": "KL", "score": 88},\r
        {"id": "STU-103", "name": "Debolina", "dept": "AI", "campus": "BP", "score": 96},\r
        {"id": "STU-104", "name": "Rahul", "dept": "WEB", "campus": "KL", "score": 78},\r
        {"id": "STU-105", "name": "Amit", "dept": "AI", "campus": "KL", "score": 91}\r
    ]\r
\r
    # 1. Nested Dict Comprehension: {Dept -> {Student ID -> Score}}\r
    departments = sorted(list({s["dept"] for s in students}))\r
    nested_dept_scores: Dict[str, Dict[str, int]] = {\r
        dept: {\r
            s["id"]: s["score"]\r
            for s in students\r
            if s["dept"] == dept\r
        }\r
        for dept in departments\r
    }\r
\r
    print("1. Nested Dict Comprehension \`{dept: {id: score for s in students if s['dept'] == dept}}\`:")\r
    for dept, score_map in nested_dept_scores.items():\r
        print(f"   * [{dept:<3}] -> {score_map}")\r
\r
    # 2. Composite Key Lookup Index: {(Campus, Dept) -> List of Student Names}\r
    campuses = sorted(list({s["campus"] for s in students}))\r
    composite_index: Dict[Tuple[str, str], List[str]] = {\r
        (camp, dept): [\r
            s["name"] for s in students\r
            if s["campus"] == camp and s["dept"] == dept\r
        ]\r
        for camp in campuses\r
        for dept in departments\r
        if any(s["campus"] == camp and s["dept"] == dept for s in students)  # Filter empty slots\r
    }\r
\r
    print("\\n2. Composite Multi-Key Lookup Index \`{(Campus, Dept): [students]}\`:")\r
    for (camp, dept), roster in sorted(composite_index.items()):\r
        print(f"   * Campus: {camp} | Dept: {dept:<3} -> {roster}")\r
\r
    print(r"""\r
Nested Dict Principles:\r
  1. Outer comprehension iterates categories; inner comprehension builds sub-dictionaries.\r
  2. Tuples \`(key1, key2)\` can serve as composite dictionary keys for multi-dimensional lookups.\r
""")\r
    print("\\n[PASSED] Nested Dict & Lookup Table Comprehensions Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_nested_dict_comprehensions()\r
`,L=`# topic1_files/institutional_multicampus_scheduler_comprehension_suite.py\r
# Module: 003_005_advance-comprehensions\r
# Topic: Nested and Multi-variable Comprehensions with filtering\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 1 - File 4: Multi-Campus Examination Scheduler & Clash Matrix Suite (Case Study)\r
Demonstrates:\r
  1. Multi-clause nested comprehensions for institutional exam timetable generation\r
  2. Cartesian product pairing to detect cross-course student exam slot collisions\r
  3. Generating transposed time-slot and room allocation matrices\r
"""\r
\r
from typing import Dict, Any, List, Tuple\r
\r
def run_scheduler_comprehension_suite():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - MULTI-CAMPUS EXAMINATION SCHEDULER SUITE")\r
    print("=" * 70)\r
\r
    campuses = ["Barrackpore Main", "Kolkata Hub"]\r
    exam_slots = ["SLOT-09:00", "SLOT-12:00", "SLOT-15:00"]\r
    courses = [\r
        {"code": "PY-AI", "title": "Python Full-Stack & AI", "students": ["STU-101", "STU-103", "STU-105"]},\r
        {"code": "DS-ML", "title": "Data Science & ML", "students": ["STU-102", "STU-105"]},  # STU-105 is double enrolled!\r
        {"code": "WEB-DEV", "title": "Web Development", "students": ["STU-104"]}\r
    ]\r
\r
    # 1. Generate All Permissible Campus-Slot-Course Combinations:\r
    # 3-Way Nested Comprehension:\r
    exam_schedule_grid: List[Dict[str, str]] = [\r
        {"campus": camp, "slot": slot, "course": c["code"]}\r
        for camp in campuses\r
        for slot in exam_slots\r
        for c in courses\r
        if not (camp == "Kolkata Hub" and slot == "SLOT-15:00" and c["code"] == "WEB-DEV") # Filter guard\r
    ]\r
\r
    print(f"1. Generated Timetable Grid ({len(exam_schedule_grid)} allocated slots across 2 campuses):")\r
    for s in exam_schedule_grid[:6]:\r
        print(f"   * [{s['campus']:<16}] {s['slot']} -> Course: {s['course']}")\r
\r
    # 2. Cross-Course Student Clash Detection via Cartesian Product Comprehension:\r
    # Rule: Find any pair of distinct courses (c1 != c2) that share overlapping students\r
    course_clashes: List[Dict[str, Any]] = [\r
        {\r
            "course_a": c1["code"],\r
            "course_b": c2["code"],\r
            "clashing_students": list(set(c1["students"]) & set(c2["students"]))\r
        }\r
        for i, c1 in enumerate(courses)\r
        for j, c2 in enumerate(courses)\r
        if i < j and (set(c1["students"]) & set(c2["students"]))  # Filter distinct pairs with overlap\r
    ]\r
\r
    print("\\n2. Automated Examination Clash Detection Matrix:")\r
    if course_clashes:\r
        for clash in course_clashes:\r
            print(f"   * [SCHEDULE CLASH DETECTED] {clash['course_a']} <-> {clash['course_b']}: Students {clash['clashing_students']}")\r
            print("     -> Rule: These two courses MUST NOT be scheduled in the same time slot!")\r
    else:\r
        print("   * Zero course clashes detected.")\r
\r
    # 3. Transposing Course-Student Enrolment Matrix:\r
    # Build {student_id -> list of enrolled courses} using nested dict & list comprehension:\r
    all_student_ids = sorted(list({sid for c in courses for sid in c["students"]}))\r
    student_course_map: Dict[str, List[str]] = {\r
        sid: [c["code"] for c in courses if sid in c["students"]]\r
        for sid in all_student_ids\r
    }\r
\r
    print("\\n3. Inverted Student Enrolment Matrix (Multi-Variable Lookup):")\r
    for sid, crs_list in student_course_map.items():\r
        print(f"   * [{sid}] -> Enrolled Courses: {crs_list} {'(DOUBLE ENROLLED!)' if len(crs_list) > 1 else ''}")\r
\r
    print("\\n[PASSED] Multi-Campus Examination Scheduler Suite Verified.")\r
\r
\r
if __name__ == "__main__":\r
    run_scheduler_comprehension_suite()\r
`,P=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
          PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_005: ADVANCED COMPREHENSIONS\r
       TOPIC 1: NESTED AND MULTI-VARIABLE COMPREHENSIONS WITH FILTERING\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. FLATTENING 2D LISTS\r
--------------------------------------------------------------------------------\r
  # Loop order is EXACTLY same as nested for-loops (Left to Right):\r
  flat_list = [item for row in matrix for item in row]\r
\r
--------------------------------------------------------------------------------\r
2. CONSTRUCTING 2D MATRICES\r
--------------------------------------------------------------------------------\r
  matrix = [[f"R{r}C{c}" for c in range(cols)] for r in range(rows)]\r
\r
--------------------------------------------------------------------------------\r
3. CARTESIAN PRODUCTS & MATRIX TRANSPOSITION\r
--------------------------------------------------------------------------------\r
  # Cartesian product:\r
  pairs = [(x, y) for x in list_a for y in list_b if x != y]\r
\r
  # Matrix transposition (rows <-> columns):\r
  transposed = [[matrix[r][c] for r in range(num_rows)] for c in range(num_cols)]\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 1: NESTED COMPREHENSIONS\r
================================================================================\r
`,I=[{question:"What is the Left-to-Right loop ordering rule in multi-clause list comprehensions?",shortAnswer:"The 'for' clauses in a comprehension appear in the EXACT same order as standard nested 'for' loops: outer loop first, inner loop second ('[item for outer in matrix for item in outer]').",explanation:"Outer loop precedes inner loop left-to-right.",hint:"Outer loop is on the left, inner loop is on the right.",level:"basic",codeExample:"[item for row in matrix for item in row] # Matches for row in matrix: for item in row:"},{question:"Why does '[item for item in row for row in matrix]' fail with a 'NameError: name 'row' is not defined'?",shortAnswer:"Because Python reads comprehension clauses from left to right; attempting to iterate over 'row' in the first clause before 'row' is defined in the second clause causes a NameError.",explanation:"Clause evaluation order is strictly left-to-right.",hint:"Clauses are evaluated left to right; outer 'row' must be defined before inner 'item in row'.",level:"basic",codeExample:"# NameError: name 'row' is not defined"},{question:"How do you flatten a 2D list of lists into a 1D flat list in Python?",shortAnswer:"Using '[item for sublist in matrix for item in sublist]'.",explanation:"The standard idiomatic pattern for flattening 2D matrices.",hint:"Use [x for row in matrix for x in row].",level:"basic",codeExample:`matrix = [[1, 2], [3, 4]]
flat = [x for row in matrix for x in row] # [1, 2, 3, 4]`},{question:"How does 2D matrix flattening differ syntactically from 2D matrix construction?",shortAnswer:"Flattening uses multiple 'for' clauses in a single bracket: '[x for row in M for x in row]'; Matrix construction nests two sets of brackets: '[[expr for col in cols] for row in rows]'.",explanation:"Single bracket = 1D output; Nested brackets = 2D output.",hint:"Flattening has 1 pair of brackets; Matrix construction has nested [[... for col] for row] brackets.",level:"moderate",codeExample:"flat = [x for r in m for x in r] vs nested = [[0 for c in range(3)] for r in range(3)]"},{question:"How do you generate a Cartesian Product of two lists 'A' and 'B' using a comprehension?",shortAnswer:"Using '[(a, b) for a in A for b in B]', which computes all |A| * |B| possible pairs.",explanation:"Cartesian product generation without importing itertools.product.",hint:"Use [(a, b) for a in A for b in B].",level:"basic",codeExample:"[(x, y) for x in [1, 2] for y in ['a', 'b']] # [(1, 'a'), (1, 'b'), (2, 'a'), (2, 'b')]"},{question:"How do you transpose a 2D rectangular matrix 'M' using a nested list comprehension?",shortAnswer:"Using '[[M[row][col] for row in range(len(M))] for col in range(len(M[0]))]'.",explanation:"Swaps row and column indices across the matrix.",hint:"Iterate col indices in outer loop and row indices in inner loop.",level:"moderate",codeExample:"transposed = [[row[i] for row in matrix] for i in range(len(matrix[0]))]"},{question:"How do you unpack multi-variable tuples directly in a comprehension's loop header?",shortAnswer:`By specifying the tuple structure in the 'for' target: '[f"{name}: {score}" for (id, name), score in record_pairs]'.`,explanation:"Eliminates manual index unpacking (e.g. item[0][1]).",hint:"Place tuple unpacking pattern directly after the 'for' keyword.",level:"basic",codeExample:"[name for (sid, name), score in student_data if score >= 90]"},{question:"How do you create a nested dictionary using a nested Dict comprehension?",shortAnswer:`Using '{dept: {s["id"]: s["score"] for s in students if s["dept"] == dept} for dept in departments}'.`,explanation:"Constructs 2-tier hierarchical dictionary mappings.",hint:"Nest a dict comprehension inside the value expression of an outer dict comprehension.",level:"moderate",codeExample:"{dept: {s['id']: s['score'] for s in students if s['dept'] == dept} for dept in depts}"},{question:"Can a composite tuple like '(campus, course)' be used as a key in a Dict comprehension?",shortAnswer:"Yes. Tuples containing immutable elements are hashable and can serve as composite multi-attribute dictionary keys: '{(camp, crs): [...] for camp in camps for crs in courses}'.",explanation:"Multi-dimensional hash indexing in Python.",hint:"Yes, tuples are hashable and serve as multi-dimensional keys.",level:"basic",codeExample:"{(s['campus'], s['course']): s['name'] for s in students}"},{question:"How do you filter pairs in a Cartesian product to exclude identical self-pairings ('x == y')?",shortAnswer:"By adding a filtering guard: '[(x, y) for x in items for y in items if x != y]'.",explanation:"Generates all non-reflexive permutations.",hint:"Add 'if x != y' at the end of the comprehension.",level:"basic",codeExample:"[(c1, c2) for c1 in courses for c2 in courses if c1 != c2]"},{question:"How do you generate combinations without duplicates ('A-B' and not 'B-A') using indexed filtering?",shortAnswer:"Using 'enumerate': '[(items[i], items[j]) for i in range(len(items)) for j in range(i + 1, len(items))]'.",explanation:"Generates strictly upper-triangular index pairs without duplicate ordering.",hint:"Iterate j from i + 1 to len(items).",level:"moderate",codeExample:"[(items[i], items[j]) for i in range(len(items)) for j in range(i + 1, len(items))]"},{question:"How do you flatten a 3D list (Cube / Volume) into a 1D flat list?",shortAnswer:"Using 3 sequential 'for' clauses: '[item for layer in cube for row in layer for item in row]'.",explanation:"Extends Left-to-Right loop ordering to 3 dimensions.",hint:"Chain 3 for clauses: [x for layer in cube for row in layer for x in row].",level:"moderate",codeExample:"[val for layer in 3d_grid for row in layer for val in row]"},{question:"How do you detect clashes between groups of students in a course scheduling matrix?",shortAnswer:`Using set intersection in a comprehension: '[(c1, c2) for c1 in courses for c2 in courses if c1 < c2 and (set(c1["students"]) & set(c2["students"]))'.`,explanation:"Finds course pairs sharing one or more common enrolled students.",hint:"Check if set(c1['students']) & set(c2['students']) is non-empty.",level:"complex",codeExample:"clashes = [(a['id'], b['id']) for a in courses for b in courses if set(a['s']) & set(b['s'])]"},{question:"Can an inner 'for' loop in a comprehension depend on a variable from the outer 'for' loop?",shortAnswer:"Yes. The inner loop iterable can reference the variable bound by the outer loop: '[j for i in range(4) for j in range(i)]'.",explanation:"Dynamic dependent range iteration.",hint:"Yes, inner for clause can reference outer loop variable directly.",level:"basic",codeExample:"[y for x in range(3) for y in range(x)] # [0, 0, 1]"},{question:"What is the equivalent 'itertools' function for generating Cartesian products?",shortAnswer:"'itertools.product(list_a, list_b)', which returns an iterator of tuple pairs without allocating the full list in memory immediately.",explanation:"Memory-optimized alternative for massive Cartesian products.",hint:"itertools.product(A, B).",level:"moderate",codeExample:`import itertools
pairs = list(itertools.product(list_a, list_b))`},{question:"How do you filter a 2D matrix to keep only rows whose elements sum to greater than 100?",shortAnswer:"Using '[row for row in matrix if sum(row) > 100]'.",explanation:"Filters full sub-lists based on aggregate conditions.",hint:"Use [row for row in matrix if sum(row) > 100].",level:"basic",codeExample:"[row for row in score_matrix if sum(row) >= 250]"},{question:"How do you extract the diagonal elements of a square 2D matrix using a list comprehension?",shortAnswer:"Using '[matrix[i][i] for i in range(len(matrix))]'.",explanation:"Extracts main diagonal elements in O(N) time.",hint:"Use [M[i][i] for i in range(len(M))].",level:"basic",codeExample:"diagonal = [matrix[i][i] for i in range(len(matrix))]"},{question:"What happens if you have multiple 'if' conditions in a multi-clause comprehension?",shortAnswer:"Multiple trailing 'if' clauses act as an implicit logical 'AND': '[x for x in seq if cond1 if cond2]' is identical to '[x for x in seq if cond1 and cond2]'.",explanation:"Chained filtering condition mechanics.",hint:"Sequential 'if' clauses act as an implicit logical AND.",level:"moderate",codeExample:"[x for x in range(100) if x % 2 == 0 if x % 5 == 0] # Multiples of 10"},{question:"How do you invert a dictionary of lists into a flattened reverse mapping?",shortAnswer:"Using '{item: category for category, items in data.items() for item in items}'.",explanation:"Multi-clause dict comprehension for reverse mapping.",hint:"Iterate dict items in outer loop and item list in inner loop.",level:"moderate",codeExample:"{student: course for course, students in course_map.items() for student in students}"},{question:"How do you construct an identity matrix of size N x N using nested list comprehensions?",shortAnswer:"Using '[[1 if r == c else 0 for c in range(N)] for r in range(N)]'.",explanation:"Combines 2D matrix construction with ternary conditional evaluation.",hint:"Use [[1 if r == c else 0 for c in range(N)] for r in range(N)].",level:"basic",codeExample:"identity_3x3 = [[1 if r == c else 0 for c in range(3)] for r in range(3)]"},{question:"What is the cognitive complexity threshold for multi-clause comprehensions?",shortAnswer:"Comprehensions with more than 2 'for' clauses or multiple nested conditions become difficult to read and debug; refactoring into readable helper functions is standard engineering practice.",explanation:"Ensuring codebase maintainability.",hint:"Limit comprehensions to max 2 for clauses to preserve readability.",level:"basic",codeExample:"# Avoid 3+ nested for clauses in production code"},{question:"How do you group elements of a matrix by their column index into a list of tuples?",shortAnswer:"Using '[tuple(row[col] for row in matrix) for col in range(len(matrix[0]))]' (or 'list(zip(*matrix))').",explanation:"Column-wise tuple aggregation.",hint:"Use nested comprehension with tuple() or zip(*matrix).",level:"moderate",codeExample:"[tuple(r[c] for r in matrix) for c in range(cols)]"},{question:"How do you remove duplicates while preserving order across a flattened 2D list in Python 3.7+?",shortAnswer:"Using 'list(dict.fromkeys(item for row in matrix for item in row))'.",explanation:"High-performance O(N) order-preserving deduplication.",hint:"Use list(dict.fromkeys(flat_generator)).",level:"complex",codeExample:"unique_ordered = list(dict.fromkeys(x for r in m for x in r))"},{question:"How do you create a coordinate grid of (X, Y) points within a bounding box?",shortAnswer:"Using '[(x, y) for x in range(min_x, max_x + 1) for y in range(min_y, max_y + 1)]'.",explanation:"Standard 2D spatial grid generation.",hint:"Use [(x, y) for x in range(...) for y in range(...)].",level:"basic",codeExample:"grid = [(x, y) for x in range(3) for y in range(3)]"},{question:"What is the ultimate golden rule for Nested and Multi-Variable Comprehensions in Python?",shortAnswer:"Always write 'for' clauses in Left-to-Right order matching standard nested loops (outer loop first), use nested brackets for 2D construction and single brackets for flattening, and refactor whenever nesting exceeds 2 levels.",explanation:"The complete enterprise guideline for writing clean, efficient multi-variable comprehensions.",hint:"Left-to-right loop order, single bracket for flattening, nested brackets for matrix generation.",level:"basic",codeExample:"# Python Nested Comprehension Mastery"}];function G(){const b=c.useRef([]),[x,g]=c.useState("loopOrder"),[s,u]=c.useState("flatten"),[m,w]=c.useState(!1),[h,j]=c.useState(!0),N=[["Sourav (BP)","Debolina (BP)"],["Priyanka (KL)","Sneha (KL)"],["Rahul (WB)","Amit (WB)"]],p=[[10,20],[30,40],[50,60]],S=["Sukanta Hui","Prabhat Sen"],_=["Python AI","Data Science"],v=["Barrackpore","Kolkata"],d=[{code:"PY-AI",students:["STU-101","STU-103","STU-105"]},{code:"DS-ML",students:["STU-102","STU-105"]},{code:"WEB-DEV",students:["STU-104"]}];let f="",i=null;if(s==="flatten"){f=`[student for batch in campus_batches for student in batch${m?' if "(BP)" in student':""}]`;const t=N.flat();i=m?t.filter(n=>n.includes("(BP)")):t}else if(s==="transpose"){f=`[[matrix[row][col] for row in range(${p.length})] for col in range(${p[0].length})]`;const t=p.length,n=p[0].length;i=Array.from({length:n},(r,a)=>Array.from({length:t},(y,C)=>p[C][a]))}else if(s==="cartesian"){f=`[f"{inst} -> {crs} @ {camp}" for inst in instructors for crs in courses for camp in campuses${m?' if camp == "Barrackpore"':""}]`;const t=[];for(const n of S)for(const r of _)for(const a of v)(!m||a==="Barrackpore")&&t.push(`${n} -> ${r} @ ${a}`);i=t}else{f=`[{"c1": c1['code'], "c2": c2['code'], "overlap": list(set(c1['s']) & set(c2['s']))} for i, c1 in enumerate(courses) for j, c2 in enumerate(courses) if ${h?"i < j":"True"} and (set(c1['s']) & set(c2['s']))]`;const t=[];for(let n=0;n<d.length;n++)for(let r=0;r<d.length;r++)if(!h||n<r){const a=d[n].students.filter(y=>d[r].students.includes(y));a.length>0&&(n!==r||!h)&&t.push({course_a:d[n].code,course_b:d[r].code,shared_students:a})}i=t}c.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(r=>{r.isIntersecting&&r.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return b.current.forEach(n=>{n&&t.observe(n)}),()=>t.disconnect()},[]);const o=t=>{t&&!b.current.includes(t)&&b.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:o,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_005"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 1"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Advanced Comprehensions & Functional Python"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Nested & Multi-Variable ",e.jsx("span",{className:"text-teal-400",children:"Comprehensions"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master multi-clause loop ordering in Python: Left-to-Right loop semantics, flattening 2D/3D hierarchies (",e.jsx("code",{className:"text-teal-300 font-mono",children:"[x for r in m for x in r]"}),"), constructing 2D matrices (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"[[... for c] for r]"}),"), Cartesian cross-products, matrix transposition, and cross-dataset clash matrices."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔀 Left-to-Right Loop Order"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📄 2D Matrix Flattening"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"✖️ Cartesian Products"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔄 Matrix Transposition"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:o,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🔀"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Left-to-Right Nested Loop Rule"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["In multi-clause comprehensions, loop clauses are read from left to right in the exact same order as standard nested ",e.jsx("code",{className:"text-teal-300 font-mono",children:"for"})," statements:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Flattening 2D Lists"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"[x for row in M for x in row]"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Outer loop iterates rows; inner loop iterates items. Yields a single flat 1D list."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ 2D Matrix Construction"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"[[expr for col] for row]"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Nests two sets of brackets to produce a 2D matrix of sub-lists."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Cartesian Product"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"[(a, b) for a in A for b in B]"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Generates all cross combinations between independent collections."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Inverted Clause NameError Trap"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Writing ",e.jsx("code",{className:"text-rose-400 font-mono",children:"[x for x in row for row in matrix]"})," causes ",e.jsx("code",{className:"text-rose-400 font-mono",children:"NameError: name 'row' is not defined"}),". The outer container variable must always be bound first on the left!"]})]})]})]}),e.jsxs("section",{ref:o,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Clause Ordering, Transposition & Clashes"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>g("loopOrder"),className:l("px-3 py-1.5 rounded-lg transition-all",x==="loopOrder"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Loop Ordering"}),e.jsx("button",{onClick:()=>g("transposition"),className:l("px-3 py-1.5 rounded-lg transition-all",x==="transposition"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Matrix Transposition"}),e.jsx("button",{onClick:()=>g("clashMatrix"),className:l("px-3 py-1.5 rounded-lg transition-all",x==="clashMatrix"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Clash Matrix"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining multi-clause loop execution order, 2D matrix transposition, and cross-course clash detection:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:x==="loopOrder"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"LEFT-TO-RIGHT NESTED LOOP ORDERING RULE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"11 font-bold",children:"1. Standard Nested Loop"}),e.jsx("text",{x:"15",y:"55",fill:"#38bdf8",fontSize:"8 font-mono",children:"for row in matrix:"}),e.jsx("text",{x:"25",y:"72",fill:"#38bdf8",fontSize:"8 font-mono",children:"for item in row:"}),e.jsx("text",{x:"35",y:"89",fill:"#34d399",fontSize:"8 font-mono",children:"flat_list.append(item)"}),e.jsx("rect",{x:"15",y:"115",width:"220",height:"100",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"25",y:"140",fill:"#34d399",fontSize:"9 font-bold",children:"Standard Procedural Order:"}),e.jsx("text",{x:"25",y:"160",fill:"#cbd5e1",fontSize:"8",children:"Outer loop `row` defined first;"}),e.jsx("text",{x:"25",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Inner loop `item` iterates `row`."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#083344",stroke:"#06b6d4"}),e.jsx("text",{x:"310",y:"30",fill:"#a5f3fc",fontSize:"11 font-bold",children:"2. List Comprehension"}),e.jsx("text",{x:"310",y:"55",fill:"#34d399",fontSize:"9 font-mono font-bold",children:"[item"}),e.jsx("text",{x:"325",y:"72",fill:"#38bdf8",fontSize:"8 font-mono",children:"for row in matrix"}),e.jsx("text",{x:"325",y:"89",fill:"#38bdf8",fontSize:"8 font-mono",children:"for item in row]"}),e.jsx("rect",{x:"310",y:"115",width:"220",height:"100",rx:"4",fill:"#090d16",stroke:"#0284c7"}),e.jsx("text",{x:"320",y:"140",fill:"#38bdf8",fontSize:"9 font-bold",children:"Exact Syntax Mirror:"}),e.jsx("text",{x:"320",y:"160",fill:"#cbd5e1",fontSize:"8",children:"Left-to-right order matches"}),e.jsx("text",{x:"320",y:"175",fill:"#cbd5e1",fontSize:"8",children:"the nested procedural loop 100%."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"605",y:"30",fill:"#a7f3d0",fontSize:"11 font-bold",children:"3. Flattened 1D Result"}),e.jsx("text",{x:"605",y:"55",fill:"#34d399",fontSize:"9 font-mono font-bold",children:"[1, 2, 3, 4, 5, 6]"}),e.jsx("text",{x:"605",y:"75",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Zero Method Overhead"}),e.jsx("rect",{x:"605",y:"115",width:"200",height:"100",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"615",y:"140",fill:"#34d399",fontSize:"9 font-bold",children:"High Speed Output:"}),e.jsx("text",{x:"615",y:"160",fill:"#cbd5e1",fontSize:"8",children:"Single flat list produced"}),e.jsx("text",{x:"615",y:"175",fill:"#cbd5e1",fontSize:"8",children:"in optimal C-level loop."})]})]}):x==="transposition"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"2D MATRIX TRANSPOSITION (SWAPPING ROWS & COLUMNS)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"Original 3x2 Matrix (3 Rows, 2 Columns)"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"9 font-mono",children:"[ [10, 20],"}),e.jsx("text",{x:"20",y:"80",fill:"#ecfdf5",fontSize:"9 font-mono",children:"  [30, 40],"}),e.jsx("text",{x:"20",y:"100",fill:"#ecfdf5",fontSize:"9 font-mono",children:"  [50, 60] ]"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"155",fill:"#34d399",fontSize:"9 font-bold",children:"Row-Major Orientation:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Row 0: [10, 20] | Row 1: [30, 40] | Row 2: [50, 60]"})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"Transposed 2x3 Matrix (`[[M[r][c] for r] for c]`)"}),e.jsx("text",{x:"20",y:"60",fill:"#34d399",fontSize:"9 font-mono font-bold",children:"[ [10, 30, 50],"}),e.jsx("text",{x:"20",y:"80",fill:"#34d399",fontSize:"9 font-mono font-bold",children:"  [20, 40, 60] ]"}),e.jsx("rect",{x:"20",y:"130",width:"340",height:"85",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"30",y:"155",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Column-Major Transposition:"}),e.jsx("text",{x:"30",y:"175",fill:"#cbd5e1",fontSize:"8",children:"Columns become rows; ideal for feature matrix swaps."})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"CROSS-COURSE CLASH DETECTION MATRIX GENERATION"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"15",y:"30",fill:"#c4b5fd",fontSize:"11 font-bold",children:"1. Enrolled Student Sets"}),e.jsx("text",{x:"15",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"PY-AI: {101, 103, 105}"}),e.jsx("text",{x:"15",y:"75",fill:"#ecfdf5",fontSize:"8 font-mono",children:"DS-ML: {102, 105}"}),e.jsx("text",{x:"15",y:"95",fill:"#38bdf8",fontSize:"8 font-mono",children:"WEB  : {104}"}),e.jsx("rect",{x:"15",y:"115",width:"220",height:"100",rx:"4",fill:"#090d16",stroke:"#6d28d9"}),e.jsx("text",{x:"25",y:"140",fill:"#c4b5fd",fontSize:"9 font-bold",children:"Student Enrolment:"}),e.jsx("text",{x:"25",y:"160",fill:"#cbd5e1",fontSize:"8",children:"Student STU-105 is double"}),e.jsx("text",{x:"25",y:"175",fill:"#cbd5e1",fontSize:"8",children:"enrolled in PY-AI & DS-ML."}),e.jsx("text",{x:"265",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"295",y:"0",width:"250",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"310",y:"30",fill:"#fda4af",fontSize:"11 font-bold",children:"2. Cartesian Pairing & Intersection"}),e.jsx("text",{x:"310",y:"55",fill:"#fca5a5",fontSize:"8 font-mono",children:"for c1 in courses"}),e.jsx("text",{x:"310",y:"72",fill:"#fca5a5",fontSize:"8 font-mono",children:"for c2 in courses"}),e.jsx("text",{x:"310",y:"89",fill:"#fda4af",fontSize:"8 font-mono",children:"if set(c1) & set(c2)"}),e.jsx("rect",{x:"310",y:"115",width:"220",height:"100",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"320",y:"140",fill:"#fda4af",fontSize:"9 font-bold",children:"Overlap Detector:"}),e.jsx("text",{x:"320",y:"160",fill:"#cbd5e1",fontSize:"8",children:"Finds intersecting student"}),e.jsx("text",{x:"320",y:"175",fill:"#cbd5e1",fontSize:"8",children:"IDs between course pairs."}),e.jsx("text",{x:"560",y:"125",fill:"#38bdf8",fontSize:"22",fontWeight:"bold",children:"→"}),e.jsx("rect",{x:"590",y:"0",width:"230",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"605",y:"30",fill:"#a7f3d0",fontSize:"11 font-bold",children:"3. Timetable Constraint"}),e.jsx("text",{x:"605",y:"55",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"PY-AI <-> DS-ML [CLASH]"}),e.jsx("text",{x:"605",y:"75",fill:"#ecfdf5",fontSize:"8 font-mono",children:"Shared: STU-105"}),e.jsx("rect",{x:"605",y:"115",width:"200",height:"100",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"615",y:"140",fill:"#34d399",fontSize:"9 font-bold",children:"Scheduler Action:"}),e.jsx("text",{x:"615",y:"160",fill:"#cbd5e1",fontSize:"8",children:"Guarantees PY-AI & DS-ML"}),e.jsx("text",{x:"615",y:"175",fill:"#cbd5e1",fontSize:"8",children:"run in separate time slots."})]})]})})]}),e.jsxs("section",{ref:o,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Multi-Variable Matrix & Clash Laboratory"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Test flattening 2D matrices, transposing rectangular tables, generating Cartesian cross-products, and detecting timetable collisions in real time:"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold",children:"1. Multi-Variable Transformation Mode"})}),e.jsxs("div",{className:"grid grid-cols-2 gap-1.5 bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:[e.jsx("button",{onClick:()=>u("flatten"),className:l("py-1.5 rounded transition-all",s==="flatten"?"bg-teal-900/60 text-teal-300 font-bold border border-teal-700/80":"text-slate-400 hover:text-white"),children:"1. 2D List Flattening"}),e.jsx("button",{onClick:()=>u("transpose"),className:l("py-1.5 rounded transition-all",s==="transpose"?"bg-cyan-900/60 text-cyan-300 font-bold border border-cyan-700/80":"text-slate-400 hover:text-white"),children:"2. Matrix Transpose"}),e.jsx("button",{onClick:()=>u("cartesian"),className:l("py-1.5 rounded transition-all",s==="cartesian"?"bg-purple-900/60 text-purple-300 font-bold border border-purple-700/80":"text-slate-400 hover:text-white"),children:"3. Cartesian Product"}),e.jsx("button",{onClick:()=>u("clash"),className:l("py-1.5 rounded transition-all",s==="clash"?"bg-rose-900/60 text-rose-300 font-bold border border-rose-700/80":"text-slate-400 hover:text-white"),children:"4. Clash Detector"})]}),e.jsxs("div",{className:"space-y-2 text-xs font-mono pt-1",children:[(s==="flatten"||s==="cartesian")&&e.jsxs("label",{className:"flex items-center gap-2 p-2 bg-slate-900 rounded border border-slate-800 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:m,onChange:t=>w(t.target.checked),className:"accent-teal-500 rounded"}),e.jsx("span",{children:"Filter Only Barrackpore (BP) Elements"})]}),s==="clash"&&e.jsxs("label",{className:"flex items-center gap-2 p-2 bg-slate-900 rounded border border-slate-800 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:h,onChange:t=>j(t.target.checked),className:"accent-rose-500 rounded"}),e.jsx("span",{children:"Exclude Self-Course Comparison Pairs (`i < j`)"})]})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs space-y-1",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:"Generated Multi-Clause Comprehension Expression:"}),e.jsx("div",{className:"text-teal-300 text-[11px] leading-relaxed break-all font-mono",children:f})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[160px] font-mono text-xs space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-[10px] font-bold uppercase text-slate-400",children:[e.jsxs("span",{children:["Evaluated Result (",Array.isArray(i)?i.length:Object.keys(i||{}).length," Elements):"]}),e.jsx("span",{className:"text-emerald-400",children:"Optimized Loop Stream"})]}),e.jsx("pre",{className:"text-slate-200 text-[11px] leading-relaxed",children:JSON.stringify(i,null,2)})]})]})]})]}),e.jsxs("section",{ref:o,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Multi-Clause Pattern Reference Table"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Operation"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Comprehension Recipe"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Loop Order Invariant"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Output Dimension"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"2D Flattening"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`[x for row in M for x in row]`"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"Outer loop left, inner loop right"}),e.jsx("td",{className:"py-3 px-4",children:"1D List (`List[T]`)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"2D Construction"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`[[col for col in r] for r in rows]`"}),e.jsx("td",{className:"py-3 px-4 text-cyan-300",children:"Inner list nested in outer list"}),e.jsx("td",{className:"py-3 px-4",children:"2D Matrix (`List[List[T]]`)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Cartesian Product"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`[(a, b) for a in A for b in B]`"}),e.jsx("td",{className:"py-3 px-4 text-purple-300",children:"Generates |A| * |B| tuples"}),e.jsx("td",{className:"py-3 px-4",children:"1D List of Tuples"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"Matrix Transpose"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"`[[M[r][c] for r in R] for c in C]`"}),e.jsx("td",{className:"py-3 px-4 text-amber-300",children:"Iterates cols outer, rows inner"}),e.jsx("td",{className:"py-3 px-4",children:"Transposed 2D Matrix"})]})]})]})})]}),e.jsxs("section",{ref:o,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating nested loop ordering, Cartesian cross-products, nested lookup tables, and multi-campus exam schedulers:"}),e.jsx(T,{files:[{filename:"nested_comprehension_order_and_flattening.py",code:k,description:"Loop ordering, 2D matrix flattening, and nested matrix generation."},{filename:"cartesian_products_and_multi_variable_filtering.py",code:M,description:"Cartesian products, tuple unpacking, and matrix transposition in comprehensions."},{filename:"nested_dict_and_lookup_table_comprehensions.py",code:O,description:"Nested dictionary comprehensions and composite tuple key lookup indexes."},{filename:"institutional_multicampus_scheduler_comprehension_suite.py",code:L,description:"Multi-clause nested comprehensions, timetable generation, clash matrices, and matrix inversion."}]})]}),e.jsxs("section",{ref:o,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Inverted Clause Loop Ordering"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"[x for x in row for row in matrix]"})," causes an unrecoverable ",e.jsx("code",{className:"text-rose-300 font-mono",children:"NameError: name 'row' is not defined"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Always write ",e.jsx("code",{className:"text-emerald-300",children:"[x for row in matrix for x in row]"})," (Outer first, inner second)."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Combinatorial Explosion on Cartesian Products"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Nesting 4 large collections (",e.jsx("code",{className:"text-amber-300 font-mono",children:"1000 * 1000 * 1000 * 1000"}),") creates a 1-trillion element list, causing catastrophic out-of-memory crashes."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"itertools.product()"})," generator expressions for streaming evaluation."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Confusing 1D Flattening with 2D Construction"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Flattening produces a single 1D list ",e.jsx("code",{className:"text-purple-300 font-mono",children:"[x for r in m for x in r]"}),"; 2D matrix construction requires nested brackets ",e.jsx("code",{className:"text-purple-300 font-mono",children:"[[x for x in r] for r in m]"}),"."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Check your brackets: 1 pair = 1D, 2 pairs = 2D."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Deep Cognitive Complexity (> 2 Clauses)"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Writing 3 or 4 nested loops in a single comprehension expression creates unreadable, unmaintainable code that violates the Zen of Python."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," If it exceeds 2 `for` clauses, refactor to standard loops or functions."]})]})]})]}),e.jsxs("section",{ref:o,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering nested loop ordering, 2D matrix flattening, Cartesian products, and matrix transposition:"}),e.jsx(E,{questions:I})]}),e.jsxs("section",{ref:o,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with nested comprehension recipes, flattening templates, and matrix transposition patterns:"}),e.jsx("div",{className:"mb-10",children:e.jsx(D,{content:P,filename:"python_topic1_nested_comprehensions_notes.txt",title:"Print Topic 1 Study Notes"})}),e.jsx(A,{})]})]})]})}export{G as default};
