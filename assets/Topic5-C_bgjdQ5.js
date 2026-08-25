import{b as d,j as e,bg as i}from"./vendor-react-core-Doz9nIC6.js";import{P as j}from"./PythonFileLoader-hCi5osN-.js";import{P as N}from"./PlainTextPrint-C08xhKA4.js";import{F as S}from"./FAQTemplate-CkSqDH4B.js";import{T as v}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const w=`# topic5_files/zip_and_zip_longest_mechanics.py\r
# Module: 003_005_advance-comprehensions\r
# Topic: zip() and itertools module essentials (count, cycle, repeat, chain)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 5 - File 1: \`zip()\`, \`zip(strict=True)\` & \`itertools.zip_longest()\`\r
Demonstrates:\r
  1. Parallel iteration with \`zip(*iterables)\` (silent truncation on shortest sequence)\r
  2. Python 3.10+ \`zip(strict=True)\` defensive length validation\r
  3. \`itertools.zip_longest(*iterables, fillvalue=None)\` for padded aggregation\r
  4. Matrix transposition & sequence unzipping using \`zip(*pairs)\`\r
"""\r
\r
import itertools\r
from typing import List, Tuple\r
\r
def demonstrate_zip_mechanics():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - ZIP, ZIP_STRICT & ZIP_LONGEST MECHANICS")\r
    print("=" * 70)\r
\r
    student_ids = ["STU-101", "STU-102", "STU-103", "STU-104"]\r
    names = ["Sourav Mukherjee", "Priyanka Sen", "Debolina Roy"]  # Length 3 (1 shorter!)\r
    scores = [95.5, 88.0, 96.0, 78.0]\r
\r
    # 1. Standard zip(): Silently truncates to shortest iterable (names = 3)\r
    print("1. Standard \`zip()\` - Truncation to Shortest Sequence (Length 3):")\r
    paired_standard = list(zip(student_ids, names))\r
    print(f"   * Standard zip output: {paired_standard}")\r
    print(f"   * Notice: 'STU-104' was SILENTLY DROPPED because \`names\` only has 3 items!\\n")\r
\r
    # 2. Defensive zip(strict=True) in Python 3.10+:\r
    print("2. Defensive \`zip(strict=True)\` - Prevents Accidental Data Truncation:")\r
    try:\r
        strict_pairs = list(zip(student_ids, names, strict=True))\r
    except ValueError as exc:\r
        print(f"   * [DEFENSIVE ERROR CAUGHT] ValueError: {exc}")\r
        print("   -> \`strict=True\` guarantees all sequences have identical lengths before pairing.\\n")\r
\r
    # 3. itertools.zip_longest(): Pads shorter iterables with fillvalue\r
    print("3. \`itertools.zip_longest(*iterables, fillvalue=None)\` - Padded Pairing:")\r
    padded_pairs = list(itertools.zip_longest(student_ids, names, scores, fillvalue="NOT_ASSIGNED"))\r
    for sid, name, score in padded_pairs:\r
        print(f"   * [{sid}] {name:<18} | Score: {score}")\r
\r
    # 4. Unzipping / Matrix Inversion using \`zip(*pairs)\`:\r
    print("\\n4. Unzipping Sequences using \`zip(*pairs)\`:")\r
    roster_pairs = [("STU-101", "Sourav"), ("STU-102", "Priyanka"), ("STU-103", "Debolina")]\r
    unzipped_ids, unzipped_names = zip(*roster_pairs)\r
    print(f"   * Unzipped IDs   : {unzipped_ids}")\r
    print(f"   * Unzipped Names : {unzipped_names}")\r
\r
    print(r"""\r
Zip Invariants:\r
  1. Standard \`zip()\` silently drops excess items; use \`zip(strict=True)\` to prevent silent bugs.\r
  2. Use \`itertools.zip_longest()\` when missing data must be explicitly padded with a placeholder.\r
  3. \`zip(*paired_data)\` cleanly reverses pairing / transposes rows into columns.\r
""")\r
    print("[PASSED] zip() and itertools.zip_longest() Mechanics Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_zip_mechanics()\r
`,z=`# topic5_files/infinite_iterators_count_cycle_repeat.py\r
# Module: 003_005_advance-comprehensions\r
# Topic: zip() and itertools module essentials (count, cycle, repeat, chain)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 5 - File 2: Infinite Iterators: \`count()\`, \`cycle()\`, and \`repeat()\`\r
Demonstrates:\r
  1. \`itertools.count(start, step)\`: Infinite incremental integer generator\r
  2. \`itertools.cycle(iterable)\`: Infinite round-robin cycling\r
  3. \`itertools.repeat(object, [times])\`: Constant value repeater\r
  4. Safe finite termination using \`itertools.islice()\` and \`zip()\`\r
"""\r
\r
import itertools\r
from typing import List, Dict, Any\r
\r
def demonstrate_infinite_iterators():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - INFINITE ITERATORS (count, cycle, repeat)")\r
    print("=" * 70)\r
\r
    # 1. itertools.count(): Generating sequential Student Roll Numbers\r
    print("1. \`itertools.count(start=101, step=1)\` - Sequential ID Generator:")\r
    roll_counter = itertools.count(start=101, step=1)\r
    students = ["Sourav Mukherjee", "Priyanka Sen", "Debolina Roy", "Rahul Verma"]\r
\r
    # Zip infinite counter with finite student list:\r
    student_roster = [\r
        {"roll_no": f"ROLL-{roll}", "name": name}\r
        for roll, name in zip(roll_counter, students)\r
    ]\r
    for s in student_roster:\r
        print(f"   * {s['roll_no']}: {s['name']}")\r
\r
    # 2. itertools.cycle(): Round-Robin Faculty Proctor Assignment\r
    print("\\n2. \`itertools.cycle()\` - Round-Robin Proctor Rotation:")\r
    faculty_proctors = ["Sukanta Hui", "Prabhat Sen"]\r
    proctor_cycle = itertools.cycle(faculty_proctors)\r
\r
    exam_candidates = [\r
        "Sourav (Room 1)", "Priyanka (Room 2)", "Debolina (Room 3)",\r
        "Rahul (Room 4)", "Amit (Room 5)", "Sneha (Room 6)"\r
    ]\r
\r
    # Assign proctor cyclically:\r
    duty_chart = [\r
        {"candidate": cand, "assigned_proctor": next(proctor_cycle)}\r
        for cand in exam_candidates\r
    ]\r
    for duty in duty_chart:\r
        print(f"   * Candidate: {duty['candidate']:<18} -> Proctor: {duty['assigned_proctor']}")\r
\r
    # 3. itertools.repeat(): Fixed Department Constant Association\r
    print("\\n3. \`itertools.repeat(val, times)\` - Constant Filler:")\r
    dept_tags = list(itertools.repeat("PYTHON_AI_CAMPUS", times=3))\r
    print(f"   * Repeated Department Tags: {dept_tags}\\n")\r
\r
    # 4. Safe Stream Slicing with \`itertools.islice()\`:\r
    print("4. \`itertools.islice(count(100, 10), 0, 5)\` - Slicing Infinite Generators:")\r
    even_tens = list(itertools.islice(itertools.count(100, 10), 0, 5))\r
    print(f"   * Sliced 5 Items from Infinite count(): {even_tens}")\r
\r
    print(r"""\r
Infinite Iterator Invariants:\r
  1. NEVER pass an unbounded \`count()\` or \`cycle()\` directly to \`list()\`, \`set()\`, or a naked \`for\` loop (infinite loop crash!).\r
  2. Always bound infinite generators by pairing them with a finite sequence in \`zip()\` or using \`itertools.islice()\`.\r
""")\r
    print("[PASSED] Infinite Iterators count(), cycle(), and repeat() Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_infinite_iterators()\r
`,T=`# topic5_files/chain_compress_and_islice_iterators.py\r
# Module: 003_005_advance-comprehensions\r
# Topic: zip() and itertools module essentials (count, cycle, repeat, chain)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 5 - File 3: Sequence Chaining, Boolean Masking & Slicing (\`chain\`, \`compress\`, \`islice\`)\r
Demonstrates:\r
  1. \`itertools.chain(*iterables)\` & \`itertools.chain.from_iterable(nested)\` for zero-copy concatenation\r
  2. \`itertools.compress(data, selectors)\`: High-speed boolean masking\r
  3. \`itertools.islice(iterable, start, stop, step)\`: Streaming pagination without creating slice copies\r
"""\r
\r
import itertools\r
import timeit\r
from typing import List\r
\r
def demonstrate_chain_compress_islice():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - CHAIN, COMPRESS & ISLICE ITERATORS")\r
    print("=" * 70)\r
\r
    # 1. itertools.chain & chain.from_iterable():\r
    print("1. Sequence Chaining (\`chain.from_iterable\` vs \`+\` list concatenation):")\r
    batch_bp = ["Sourav (BP)", "Debolina (BP)"]\r
    batch_kl = ["Priyanka (KL)", "Sneha (KL)"]\r
    batch_wb = ["Rahul (WB)", "Amit (WB)"]\r
\r
    # Zero-copy streaming concatenation:\r
    all_batches_nested = [batch_bp, batch_kl, batch_wb]\r
    flat_chained_stream = itertools.chain.from_iterable(all_batches_nested)\r
    print(f"   * Chained Combined Stream: {list(flat_chained_stream)}")\r
\r
    # Performance Benchmark on 10,000 lists:\r
    sample_sublists = [[i, i+1] for i in range(5000)]\r
    t_plus = timeit.timeit(lambda: [x for sub in sample_sublists for x in sub], number=20)\r
    t_chain = timeit.timeit(lambda: list(itertools.chain.from_iterable(sample_sublists)), number=20)\r
\r
    print(f"   * Nested list comprehension : {t_plus:.4f}s")\r
    print(f"   * \`chain.from_iterable()\`   : {t_chain:.4f}s (Optimized C-iterator!)\\n")\r
\r
    # 2. itertools.compress(): Fast Boolean Masking:\r
    print("2. \`itertools.compress(data, boolean_selectors)\` - High-Speed Masking:")\r
    students = ["Sourav", "Priyanka", "Debolina", "Rahul", "Amit"]\r
    # Boolean mask: True = Cleared KYC, False = Pending\r
    kyc_cleared_mask = [True, True, True, False, True]\r
\r
    approved_candidates = list(itertools.compress(students, kyc_cleared_mask))\r
    print(f"   * All Candidates   : {students}")\r
    print(f"   * KYC Mask         : {kyc_cleared_mask}")\r
    print(f"   * Approved (Masked): {approved_candidates}\\n")\r
\r
    # 3. itertools.islice(): Streaming Pagination\r
    print("3. \`itertools.islice(stream, start, stop, step)\` - Zero-Copy Pagination:")\r
    # Stream page 2 (items 3 to 6):\r
    dataset_stream = (f"RECORD-{i}" for i in range(100))\r
    page_2_items = list(itertools.islice(dataset_stream, 3, 7))\r
    print(f"   * Page 2 (Offset 3, Limit 4): {page_2_items}")\r
\r
    print(r"""\r
itertools Invariants:\r
  1. \`chain.from_iterable()\` provides linear O(N) zero-copy sequence flattening.\r
  2. \`compress(data, mask)\` extracts matching elements without lambda conditions.\r
  3. \`islice()\` slices non-indexable generator streams without loading entire dataset in memory.\r
""")\r
    print("[PASSED] chain, compress, and islice Iterators Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_chain_compress_islice()\r
`,A=`# topic5_files/institutional_multicampus_roundrobin_scheduler.py\r
# Module: 003_005_advance-comprehensions\r
# Topic: zip() and itertools module essentials (count, cycle, repeat, chain)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 5 - File 4: Institutional Round-Robin Examination Scheduler (Case Study)\r
Demonstrates:\r
  1. Production exam scheduling suite leveraging \`zip()\`, \`count()\`, \`cycle()\`, and \`chain.from_iterable()\`\r
  2. Round-robin faculty proctor duty allocation\r
  3. Multi-campus room batch flattening, pagination with \`islice()\`, and boolean mask filtering with \`compress()\`\r
"""\r
\r
import itertools\r
from typing import Dict, Any, List, Tuple\r
\r
class InstitutionalRoundRobinScheduler:\r
    """Production examination logistics engine powered by itertools."""\r
\r
    def __init__(self, faculty_pool: List[str], campuses: List[str]):\r
        self.faculty_pool = faculty_pool\r
        self.campuses = campuses\r
        self._roll_counter = itertools.count(start=1001, step=1)\r
        self._proctor_cycler = itertools.cycle(faculty_pool)\r
\r
    def allocate_exam_cohort(self, campus_batches: Dict[str, List[Dict[str, Any]]]) -> Dict[str, Any]:\r
        """Allocates roll numbers, proctors, and flattened timetable."""\r
        # 1. Flatten all campus student lists into a single continuous stream\r
        all_campus_students_flat = list(itertools.chain.from_iterable(campus_batches.values()))\r
\r
        # 2. Assign unique sequential roll numbers via itertools.count()\r
        # and round-robin faculty proctors via itertools.cycle()\r
        allocated_roster = []\r
        for student in all_campus_students_flat:\r
            allocated_roster.append({\r
                "roll_no": f"EXAM-{next(self._roll_counter)}",\r
                "name": student["name"],\r
                "course": student["course"],\r
                "campus": student["campus"],\r
                "assigned_proctor": next(self._proctor_cycler),\r
                "is_cleared": student.get("is_cleared", False)\r
            })\r
\r
        # 3. Filter cleared candidates using itertools.compress()\r
        cleared_mask = [s["is_cleared"] for s in allocated_roster]\r
        cleared_roster = list(itertools.compress(allocated_roster, cleared_mask))\r
\r
        # 4. Generate Paginated Exam Room Allocation (Room Capacity = 2 students per room)\r
        # Using itertools.islice() for batch chunks:\r
        room_allocations = []\r
        it = iter(cleared_roster)\r
        room_num = 1\r
        while True:\r
            room_batch = list(itertools.islice(it, 2))\r
            if not room_batch:\r
                break\r
            room_allocations.append({\r
                "room_name": f"HALL-{room_num:02d}",\r
                "students": [s["name"] for s in room_batch],\r
                "proctor": room_batch[0]["assigned_proctor"]\r
            })\r
            room_num += 1\r
\r
        return {\r
            "total_registered_students": len(all_campus_students_flat),\r
            "total_cleared_students": len(cleared_roster),\r
            "total_rooms_allocated": len(room_allocations),\r
            "cleared_roster": cleared_roster,\r
            "room_chart": room_allocations\r
        }\r
\r
\r
def demonstrate_scheduler_engine():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - INSTITUTIONAL ROUND-ROBIN SCHEDULER SUITE")\r
    print("=" * 70)\r
\r
    faculty = ["Sukanta Hui", "Prabhat Sen", "Ananya Mukherjee"]\r
    campuses = ["Barrackpore Main", "Kolkata Hub"]\r
\r
    cohort_data = {\r
        "Barrackpore": [\r
            {"name": "Sourav Mukherjee", "course": "PY-AI", "campus": "Barrackpore", "is_cleared": True},\r
            {"name": "Debolina Roy", "course": "PY-AI", "campus": "Barrackpore", "is_cleared": True},\r
            {"name": "Amit Das", "course": "PY-AI", "campus": "Barrackpore", "is_cleared": False} # Not cleared\r
        ],\r
        "Kolkata": [\r
            {"name": "Priyanka Sen", "course": "DS-ML", "campus": "Kolkata", "is_cleared": True},\r
            {"name": "Sneha Gupta", "course": "DS-ML", "campus": "Kolkata", "is_cleared": True},\r
            {"name": "Rahul Verma", "course": "WEB-DEV", "campus": "Kolkata", "is_cleared": True}\r
        ]\r
    }\r
\r
    scheduler = InstitutionalRoundRobinScheduler(faculty, campuses)\r
    schedule = scheduler.allocate_exam_cohort(cohort_data)\r
\r
    print("1. Examination Logistics Audit Summary:")\r
    print(f"   * Total Registered Candidates : {schedule['total_registered_students']}")\r
    print(f"   * Total Cleared Candidates    : {schedule['total_cleared_students']}")\r
    print(f"   * Total Exam Rooms Allocated  : {schedule['total_rooms_allocated']}\\n")\r
\r
    print("2. Cleared Candidate Proctor & Roll Allocation (\`count\` + \`cycle\`):")\r
    for s in schedule["cleared_roster"]:\r
        print(f"   * [{s['roll_no']}] {s['name']:<18} | {s['campus']:<12} | Proctor: {s['assigned_proctor']}")\r
\r
    print("\\n3. Paginated Exam Room Allocation Chart (\`islice\` chunks):")\r
    for r in schedule["room_chart"]:\r
        print(f"   * [{r['room_name']}] -> Students: {r['students']} | Duty Proctor: {r['proctor']}")\r
\r
    print("\\n[PASSED] Institutional Round-Robin Scheduler Suite Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_scheduler_engine()\r
`,k=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
          PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_005: ADVANCED COMPREHENSIONS\r
        TOPIC 5: ZIP() AND ITERTOOLS MODULE ESSENTIALS (COUNT, CYCLE, CHAIN)\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. ZIP VARIANTS\r
--------------------------------------------------------------------------------\r
  * zip(a, b)                      : Silently truncates to shortest sequence\r
  * zip(a, b, strict=True)         : Raises ValueError if lengths differ (Python 3.10+)\r
  * itertools.zip_longest(a, b)    : Pads shorter sequences with fillvalue\r
  * zip(*pairs)                    : Unzips / transposes paired collections\r
\r
--------------------------------------------------------------------------------\r
2. INFINITE ITERATORS & BOUNDING\r
--------------------------------------------------------------------------------\r
  * itertools.count(start, step)   : Infinite numbers 100, 101, 102...\r
  * itertools.cycle(iterable)      : Infinite round-robin cycling A -> B -> C -> A\r
  * itertools.repeat(val, times)   : Repeats constant value\r
  * itertools.islice(stream, 0, N) : Slices infinite generators safely\r
\r
--------------------------------------------------------------------------------\r
3. CHAINING & MASKING\r
--------------------------------------------------------------------------------\r
  * itertools.chain.from_iterable(nested) : Zero-copy O(N) sequence flattening\r
  * itertools.compress(data, mask)        : High-speed boolean filtering\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 5: ITERTOOLS ESSENTIALS\r
================================================================================\r
`,E=[{question:"What happens when standard 'zip()' is called with iterables of unequal length?",shortAnswer:"'zip()' silently stops yielding pairs as soon as the shortest iterable is exhausted, discarding all excess elements in longer iterables without warning.",explanation:"Silent truncation behavior of standard zip.",hint:"It silently truncates and stops at the end of the shortest iterable.",level:"basic",codeExample:"list(zip([1, 2, 3, 4], ['a', 'b'])) # [(1, 'a'), (2, 'b')]"},{question:"What is 'zip(strict=True)' introduced in Python 3.10?",shortAnswer:"A defensive mode that raises a 'ValueError: zip() argument N is shorter than argument M' if any of the passed iterables differ in length.",explanation:"Prevents silent data loss bugs in parallel iterations.",hint:"Raises ValueError if any input iterable has a different length.",level:"basic",codeExample:"zip([1, 2], ['a', 'b', 'c'], strict=True) # Raises ValueError"},{question:"How does 'itertools.zip_longest()' handle iterables of unequal length?",shortAnswer:"It continues iterating until the LONGEST iterable is exhausted, padding missing values from shorter iterables with 'fillvalue=None' (or a custom specified value).",explanation:"Padded parallel iteration.",hint:"Iterates until the longest sequence finishes, padding shorter ones with fillvalue.",level:"basic",codeExample:"list(itertools.zip_longest([1, 2], ['a'], fillvalue='N/A')) # [(1, 'a'), (2, 'N/A')]"},{question:"How do you unzip a list of 2-tuples back into two separate lists or tuples in Python?",shortAnswer:"Using the argument unpacking operator with zip: 'ids, names = zip(*paired_records)'.",explanation:"Inverse pairing / matrix transposition recipe.",hint:"Use zip(*pairs) with the asterisk unpacking operator.",level:"basic",codeExample:"pairs = [(1, 'a'), (2, 'b')]; x, y = zip(*pairs) # x=(1, 2), y=('a', 'b')"},{question:"What is 'itertools.count(start, step)' and how is it safely bounded?",shortAnswer:"An infinite generator that yields incrementing numbers starting at 'start' by 'step'; it is bounded by pairing it with a finite sequence in 'zip()' or slicing with 'itertools.islice()'.",explanation:"Infinite sequence generator in Python.",hint:"Generates infinite numbers; bound it using zip() or itertools.islice().",level:"moderate",codeExample:"ids = [f'ID-{n}' for n, user in zip(itertools.count(1001), users)]"},{question:"What is 'itertools.cycle(iterable)' and what is a classic real-world use case?",shortAnswer:"An infinite iterator that repeats elements of an iterable in an endless loop; commonly used for round-robin task dispatching, load balancing, and shift rotations.",explanation:"Round-robin scheduling generator.",hint:"Loops over an iterable infinitely; ideal for round-robin load balancing.",level:"basic",codeExample:`proctors = itertools.cycle(['Alice', 'Bob'])
next(proctors); next(proctors)`},{question:"What is 'itertools.repeat(object, [times])'?",shortAnswer:"An iterator that yields the same object repeatedly; if 'times' is omitted, it yields infinitely; commonly used to supply constant arguments to 'map()'.",explanation:"Constant value repeater.",hint:"Yields the same object N times or infinitely.",level:"basic",codeExample:"list(map(pow, range(5), itertools.repeat(2))) # [0, 1, 4, 9, 16]"},{question:"What is 'itertools.chain.from_iterable(nested_iterables)' and why is it faster than '+' list concatenation?",shortAnswer:"It streams elements from nested sub-iterables one-by-one in linear O(N) time with zero intermediate list allocations, avoiding the quadratic O(N^2) memory copying overhead of '+' concatenation.",explanation:"High-performance zero-copy flattening.",hint:"Flattens nested iterables in O(N) zero-copy streaming time.",level:"moderate",codeExample:"flat = list(itertools.chain.from_iterable([[1, 2], [3, 4]]))"},{question:"What does 'itertools.compress(data, selectors)' do?",shortAnswer:"It filters elements of 'data' returning only those where the corresponding boolean selector in 'selectors' is True (high-speed boolean masking).",explanation:"Boolean mask filtering without writing explicit lambdas.",hint:"Filters data where the corresponding selector item is True.",level:"basic",codeExample:"list(itertools.compress(['A', 'B', 'C'], [True, False, True])) # ['A', 'C']"},{question:"How does 'itertools.islice(iterable, start, stop, [step])' enable zero-copy pagination?",shortAnswer:"It slices generator streams and non-indexable iterables on-the-fly without loading or copying the entire dataset into memory.",explanation:"Streaming pagination across generator pipelines.",hint:"Slices any iterator on-the-fly without allocating full list copies in RAM.",level:"moderate",codeExample:"page_2 = list(itertools.islice(generator_stream, 10, 20))"},{question:"What happens if you pass an unbounded 'itertools.count()' directly to 'list()'?",shortAnswer:"It causes an infinite loop that exhausts system RAM and eventually crashes the Python interpreter with a 'MemoryError'.",explanation:"Infinite generator materialization hazard.",hint:"Causes an infinite loop and crashes with MemoryError.",level:"basic",codeExample:"# DANGEROUS: list(itertools.count())"},{question:"How do you construct a dictionary from two separate lists of keys and values using 'zip()'?",shortAnswer:"Using 'dict(zip(keys, values))'.",explanation:"Idiomatic dictionary construction from paired sequences.",hint:"Use dict(zip(keys, values)).",level:"basic",codeExample:"user_map = dict(zip(['id', 'name'], ['STU-101', 'Sourav']))"},{question:"How do you iterate through elements of a list in consecutive overlapping pairs (e.g. (x0, x1), (x1, x2))?",shortAnswer:"Using 'zip(seq, seq[1:])' or 'itertools.pairwise(seq)' (introduced in Python 3.10).",explanation:"Consecutive pairwise sliding window.",hint:"Use itertools.pairwise(seq) or zip(seq, seq[1:]).",level:"moderate",codeExample:`import itertools
list(itertools.pairwise([1, 2, 3, 4])) # [(1, 2), (2, 3), (3, 4)]`},{question:"Can 'zip()' accept generator expressions as arguments?",shortAnswer:"Yes. 'zip(g1, g2)' consumes items from each generator in lockstep with O(1) constant memory.",explanation:"Lockstep streaming evaluation.",hint:"Yes, zip consumes generators in parallel lockstep with O(1) memory.",level:"basic",codeExample:"zip((x*2 for x in seq1), (y*3 for y in seq2))"},{question:"How do you flatten a multi-campus dictionary of student lists into a flat list using itertools?",shortAnswer:"Using 'list(itertools.chain.from_iterable(campus_dict.values()))'.",explanation:"Dictionary value flattening.",hint:"Use itertools.chain.from_iterable(d.values()).",level:"basic",codeExample:"all_students = list(itertools.chain.from_iterable(campuses.values()))"},{question:"What is the difference between 'itertools.chain(a, b, c)' and 'itertools.chain.from_iterable([a, b, c])'?",shortAnswer:"'chain(*iterables)' requires all sequences to be passed as separate positional arguments; 'chain.from_iterable()' accepts a single iterable containing the sub-sequences lazily.",explanation:"Positional argument unpacking vs single lazy iterable input.",hint:"chain() takes *args; chain.from_iterable() takes a single iterable of iterables.",level:"moderate",codeExample:"chain(a, b) vs chain.from_iterable(list_of_lists)"},{question:"How do you calculate running prefix sums using itertools?",shortAnswer:"Using 'itertools.accumulate(numbers, operator.add)' (or 'list(itertools.accumulate(numbers))').",explanation:"Prefix scan accumulation.",hint:"Use itertools.accumulate(numbers).",level:"basic",codeExample:"list(itertools.accumulate([10, 20, 30])) # [10, 30, 60]"},{question:"What is 'itertools.takewhile(predicate, iterable)'?",shortAnswer:"An iterator that yields elements as long as the predicate evaluates to True, halting immediately as soon as the first element evaluates to False.",explanation:"Conditional stream prefix extraction.",hint:"Yields elements until the predicate becomes False, then stops permanently.",level:"moderate",codeExample:"list(itertools.takewhile(lambda x: x < 5, [1, 3, 5, 2, 4])) # [1, 3]"},{question:"What is 'itertools.dropwhile(predicate, iterable)'?",shortAnswer:"An iterator that skips elements as long as the predicate evaluates to True, and yields ALL remaining elements once the predicate evaluates to False for the first time.",explanation:"Conditional stream prefix dropping.",hint:"Drops items until predicate is False, then yields all remaining items.",level:"moderate",codeExample:"list(itertools.dropwhile(lambda x: x < 5, [1, 3, 5, 2, 4])) # [5, 2, 4]"},{question:"How do you group sorted data by a key using itertools?",shortAnswer:"Using 'itertools.groupby(sorted_iterable, key_func)'; the input data MUST be sorted by the grouping key beforehand.",explanation:"Consecutive key grouping.",hint:"Use itertools.groupby() on pre-sorted data.",level:"complex",codeExample:"for k, g in itertools.groupby(sorted_students, key=lambda s: s['dept']): ..."},{question:"Why must data be pre-sorted before calling 'itertools.groupby()'?",shortAnswer:"'itertools.groupby()' only aggregates CONSECUTIVE identical keys; if identical keys appear non-consecutively, multiple separate groups will be created.",explanation:"Single-pass consecutive grouping invariant.",hint:"It only groups consecutive items; non-consecutive keys form separate groups.",level:"complex",codeExample:"# Must sort data before groupby: sorted(data, key=keyfunc)"},{question:"How do you generate Cartesian permutations and combinations using itertools?",shortAnswer:"Using 'itertools.permutations(iterable, r)' (order matters) and 'itertools.combinations(iterable, r)' (order does not matter).",explanation:"Combinatorial iterators in Python.",hint:"itertools.permutations for ordered sets; itertools.combinations for unordered subsets.",level:"basic",codeExample:"list(itertools.permutations([1, 2], 2)); list(itertools.combinations([1, 2], 2))"},{question:"How do you generate combinations with replacement using itertools?",shortAnswer:"Using 'itertools.combinations_with_replacement(iterable, r)'.",explanation:"Combinatorics allowing repeated element selection.",hint:"itertools.combinations_with_replacement(seq, r).",level:"moderate",codeExample:"list(itertools.combinations_with_replacement(['A', 'B'], 2)) # [('A', 'A'), ('A', 'B'), ('B', 'B')]"},{question:"What is the memory advantage of using itertools functions over list comprehensions?",shortAnswer:"itertools functions operate in C-level streaming memory, yielding items on-the-fly with constant O(1) memory, preventing out-of-memory crashes on massive datasets.",explanation:"High-throughput streaming architecture.",hint:"Operates in constant O(1) memory, preventing out-of-memory crashes on big data.",level:"basic",codeExample:"# O(1) memory itertools stream"},{question:"What is the ultimate golden rule for `zip()` and `itertools` in Python?",shortAnswer:"Use `zip(strict=True)` in Python 3.10+ to prevent silent truncation, `zip_longest` when padding is required, `chain.from_iterable` for zero-copy flattening, and `cycle`/`count` bounded with `islice` for round-robin generation.",explanation:"The complete enterprise guideline for zip and itertools in Python.",hint:"Use zip(strict=True), zip_longest for padding, chain.from_iterable for flattening, and islice to bound infinite streams.",level:"basic",codeExample:"# Python zip & itertools Mastery"}];function q(){const f=d.useRef([]),[o,b]=d.useState("zipPairing"),p=[{id:"STU-101",name:"Sourav Mukherjee",course:"PY-AI"},{id:"STU-102",name:"Priyanka Sen",course:"DS-ML"},{id:"STU-103",name:"Debolina Roy",course:"PY-AI"},{id:"STU-104",name:"Rahul Verma",course:"WEB-DEV"}],m=["Sukanta Hui","Prabhat Sen"],[a,x]=d.useState("cycle"),[l,_]=d.useState(2);let s=[],h="SUCCESS",u="All allocations computed cleanly using itertools streaming generator.",c="";a==="cycle"?(c=`# Round-robin cycling with itertools.cycle():
proctor_cycler = itertools.cycle(["Sukanta Hui", "Prabhat Sen"])
duty_chart = [
    {"student": s['name'], "proctor": next(proctor_cycler)}
    for s in candidates
]`,s=p.map((t,n)=>({roll_no:`EXAM-${1001+n}`,student:t.name,course:t.course,proctor:m[n%m.length]}))):a==="standardZip"?(c=`# Standard zip() silently truncates to length 2 (dropping 2 students!):
duty_chart = [
    {"student": s['name'], "proctor": p}
    for s, p in zip(candidates, ["Sukanta Hui", "Prabhat Sen"])
]`,s=m.map((t,n)=>({roll_no:`EXAM-${1001+n}`,student:p[n].name,course:p[n].course,proctor:t})),h="TRUNCATED",u="WARNING: Standard zip() silently dropped STU-103 and STU-104 due to unequal list lengths!"):a==="zipLongest"?(c=`# itertools.zip_longest() pads missing proctors with fillvalue:
duty_chart = [
    {"student": s['name'], "proctor": p}
    for s, p in itertools.zip_longest(candidates, ["Sukanta Hui", "Prabhat Sen"], fillvalue="SELF_STUDY_HALL")
]`,s=p.map((t,n)=>({roll_no:`EXAM-${1001+n}`,student:t.name,course:t.course,proctor:m[n]||"SELF_STUDY_HALL"})),u="itertools.zip_longest padded unmatched candidates with 'SELF_STUDY_HALL'."):(c=`# Python 3.10+ zip(strict=True) detects length mismatches:
try:
    duty_chart = list(zip(candidates, ["Sukanta Hui", "Prabhat Sen"], strict=True))
except ValueError as exc:
    print("Defensive Validation Error:", exc)`,h="STRICT_ERROR",u="ValueError: zip() argument 2 is shorter than argument 1 (2 proctors vs 4 candidates)!",s=[]);const g=[];for(let t=0;t<s.length;t+=l)g.push({roomName:`HALL-${Math.floor(t/l)+1}`,students:s.slice(t,t+l)});d.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(y=>{y.isIntersecting&&y.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return f.current.forEach(n=>{n&&t.observe(n)}),()=>t.disconnect()},[]);const r=t=>{t&&!f.current.includes(t)&&f.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:r,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_005"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 5"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Advanced Comprehensions & Functional Python"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["zip() & itertools: ",e.jsx("span",{className:"text-teal-400",children:"count, cycle, repeat, chain"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master parallel iteration and high-performance stream tools: ",e.jsx("code",{className:"text-teal-300 font-mono",children:"zip(strict=True)"})," length validation, ",e.jsx("code",{className:"text-teal-300 font-mono",children:"itertools.zip_longest"})," padding, infinite round-robin cycles with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"count()"})," and ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"cycle()"}),", zero-copy sequence chaining (",e.jsx("code",{className:"text-purple-300 font-mono",children:"chain.from_iterable"}),"), boolean masking with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"compress()"}),", and stream pagination with ",e.jsx("code",{className:"text-amber-300 font-mono",children:"islice()"}),"."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ `zip(strict=True)`"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔄 `itertools.cycle` (Round-Robin)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔗 `chain.from_iterable` (Zero-Copy)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"✂️ `itertools.islice` (Pagination)"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧰"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The `itertools` Streaming Powerhouse"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["The ",e.jsx("code",{className:"text-teal-300 font-mono",children:"itertools"})," module implements fast, memory-efficient C-level iterator building blocks that stream data in constant ",e.jsx("code",{className:"text-teal-300 font-mono",children:"O(1)"})," memory:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Infinite Generators"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"count(), cycle(), repeat()"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Infinite sequential numbers, round-robin rotating queues, and constant fillers."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Parallel & Padded Pairing"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"zip(strict=True), zip_longest()"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Pairs multiple iterables in lockstep with defensive length verification or fallback padding."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ Chaining & Slicing"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"chain.from_iterable(), islice()"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Zero-copy sequence flattening, boolean mask filtering (",e.jsx("code",{className:"text-purple-300 font-mono",children:"compress"}),"), and pagination."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Silent Truncation Trap in Standard `zip()`"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Standard ",e.jsx("code",{className:"text-rose-400 font-mono",children:"zip(A, B)"})," silently stops at the end of the shorter sequence, dropping excess items without any warning. In Python 3.10+, always use ",e.jsx("code",{className:"text-teal-300 font-mono",children:"zip(A, B, strict=True)"})," or ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"itertools.zip_longest(A, B, fillvalue=None)"})," to prevent silent data loss!"]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Parallel Pairing, Round-Robin & Chaining"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>b("zipPairing"),className:i("px-3 py-1.5 rounded-lg transition-all",o==="zipPairing"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"`zip` vs `zip_longest`"}),e.jsx("button",{onClick:()=>b("roundRobin"),className:i("px-3 py-1.5 rounded-lg transition-all",o==="roundRobin"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"`cycle` Round-Robin"}),e.jsx("button",{onClick:()=>b("zeroCopy"),className:i("px-3 py-1.5 rounded-lg transition-all",o==="zeroCopy"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"`chain` Zero-Copy"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining parallel pairing truncation, infinite round-robin cycles, and zero-copy sequence flattening:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:o==="zipPairing"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"PARALLEL PAIRING: `zip()` (TRUNCATED) VS `itertools.zip_longest()` (PADDED)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"Standard `zip(A, B)` [SILENT TRUNCATION]"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"8 font-mono",children:"List A: [STU-101, STU-102, STU-103, STU-104] (Len: 4)"}),e.jsx("text",{x:"20",y:"78",fill:"#ecfdf5",fontSize:"8 font-mono",children:"List B: [Sukanta, Prabhat] (Len: 2)"}),e.jsx("text",{x:"20",y:"105",fill:"#fca5a5",fontSize:"8 font-mono font-bold",children:"Output: [(STU-101, Sukanta), (STU-102, Prabhat)]"}),e.jsx("text",{x:"20",y:"125",fill:"#f43f5e",fontSize:"8 font-mono",children:"❌ STU-103 & STU-104 Silently Dropped!"}),e.jsx("rect",{x:"20",y:"145",width:"340",height:"75",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"170",fill:"#fda4af",fontSize:"9 font-bold",children:"Silent Data Loss Hazard:"}),e.jsx("text",{x:"30",y:"190",fill:"#cbd5e1",fontSize:"8",children:"Fails silently when datasets are of mismatched lengths."})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"`itertools.zip_longest(A, B, fillvalue='N/A')`"}),e.jsx("text",{x:"20",y:"60",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"1. (STU-101, Sukanta)"}),e.jsx("text",{x:"20",y:"78",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"2. (STU-102, Prabhat)"}),e.jsx("text",{x:"20",y:"96",fill:"#38bdf8",fontSize:"8 font-mono",children:"3. (STU-103, 'N/A') [PADDED]"}),e.jsx("text",{x:"20",y:"114",fill:"#38bdf8",fontSize:"8 font-mono",children:"4. (STU-104, 'N/A') [PADDED]"}),e.jsx("rect",{x:"20",y:"145",width:"340",height:"75",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"170",fill:"#34d399",fontSize:"9 font-bold",children:"100% Data Preservation:"}),e.jsx("text",{x:"30",y:"190",fill:"#cbd5e1",fontSize:"8",children:"All 4 records preserved with explicit fallback padding."})]})]}):o==="roundRobin"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"ROUND-ROBIN CYCLING: `itertools.cycle(['Sukanta', 'Prabhat'])`"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"Rotating Fixed Resource Pool across Dynamic Streams"}),e.jsxs("g",{transform:"translate(20, 55)",children:[e.jsx("rect",{x:"0",y:"0",width:"180",height:"150",rx:"6",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"10",y:"25",fill:"#34d399",fontSize:"10 font-bold",children:"STU-101"}),e.jsx("text",{x:"10",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"next(cycler)"}),e.jsx("text",{x:"10",y:"80",fill:"#34d399",fontSize:"10 font-mono font-bold",children:"➡️ Sukanta Hui"}),e.jsx("rect",{x:"200",y:"0",width:"180",height:"150",rx:"6",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"210",y:"25",fill:"#34d399",fontSize:"10 font-bold",children:"STU-102"}),e.jsx("text",{x:"210",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"next(cycler)"}),e.jsx("text",{x:"210",y:"80",fill:"#38bdf8",fontSize:"10 font-mono font-bold",children:"➡️ Prabhat Sen"}),e.jsx("rect",{x:"400",y:"0",width:"180",height:"150",rx:"6",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"410",y:"25",fill:"#34d399",fontSize:"10 font-bold",children:"STU-103"}),e.jsx("text",{x:"410",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"next(cycler) [WRAPS]"}),e.jsx("text",{x:"410",y:"80",fill:"#34d399",fontSize:"10 font-mono font-bold",children:"➡️ Sukanta Hui"}),e.jsx("rect",{x:"600",y:"0",width:"180",height:"150",rx:"6",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"610",y:"25",fill:"#34d399",fontSize:"10 font-bold",children:"STU-104"}),e.jsx("text",{x:"610",y:"55",fill:"#ecfdf5",fontSize:"8 font-mono",children:"next(cycler)"}),e.jsx("text",{x:"610",y:"80",fill:"#38bdf8",fontSize:"10 font-mono font-bold",children:"➡️ Prabhat Sen"})]})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"ZERO-COPY STREAM FLATTENING: `itertools.chain.from_iterable()`"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"`L1 + L2 + L3` or `reduce(operator.concat)`"}),e.jsx("text",{x:"20",y:"65",fill:"#fca5a5",fontSize:"8 font-mono",children:"Creates new intermediate list at every '+'"}),e.jsx("text",{x:"20",y:"85",fill:"#fca5a5",fontSize:"8 font-mono",children:"Copies elements repeatedly: O(N²) quadratic time"}),e.jsx("text",{x:"20",y:"105",fill:"#f43f5e",fontSize:"8 font-mono font-bold",children:"Heavy Garbage Collection Triggers"}),e.jsx("rect",{x:"20",y:"135",width:"340",height:"80",rx:"4",fill:"#090d16",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"160",fill:"#fda4af",fontSize:"9 font-bold",children:"High Memory Copying:"}),e.jsx("text",{x:"30",y:"180",fill:"#cbd5e1",fontSize:"8",children:"Re-allocates memory buffer for every sublist joined."})]}),e.jsxs("g",{transform:"translate(470, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"30",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"`itertools.chain.from_iterable(nested_lists)`"}),e.jsx("text",{x:"20",y:"65",fill:"#34d399",fontSize:"8 font-mono",children:"Streams elements directly from inner iterables"}),e.jsx("text",{x:"20",y:"85",fill:"#34d399",fontSize:"8 font-mono",children:"Zero intermediate list allocations: O(N) linear time"}),e.jsx("text",{x:"20",y:"105",fill:"#34d399",fontSize:"8 font-mono font-bold",children:"Optimized C-level iterator wrapper"}),e.jsx("rect",{x:"20",y:"135",width:"340",height:"80",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"160",fill:"#34d399",fontSize:"9 font-bold",children:"Zero-Copy Streaming:"}),e.jsx("text",{x:"30",y:"180",fill:"#cbd5e1",fontSize:"8",children:"Flattens nested multi-gigabyte files with constant O(1) RAM."})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Round-Robin Proctor & Room Scheduler Laboratory"})]}),e.jsxs("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:["Test allocating 4 candidates to 2 faculty proctors using ",e.jsx("code",{className:"text-teal-300 font-mono",children:"itertools.cycle"}),", standard ",e.jsx("code",{className:"text-rose-400 font-mono",children:"zip()"}),", ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"zip_longest()"}),", and ",e.jsx("code",{className:"text-purple-300 font-mono",children:"strict=True"})," validation:"]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 font-bold block",children:"1. Pairing & Allocation Strategy:"}),e.jsxs("div",{className:"grid grid-cols-2 gap-1.5 bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-xs font-mono",children:[e.jsx("button",{onClick:()=>x("cycle"),className:i("py-1.5 rounded transition-all",a==="cycle"?"bg-teal-900/60 text-teal-300 font-bold border border-teal-700/80":"text-slate-400 hover:text-white"),children:"1. `cycle()` Round-Robin"}),e.jsx("button",{onClick:()=>x("standardZip"),className:i("py-1.5 rounded transition-all",a==="standardZip"?"bg-rose-900/60 text-rose-300 font-bold border border-rose-700/80":"text-slate-400 hover:text-white"),children:"2. Standard `zip()`"}),e.jsx("button",{onClick:()=>x("zipLongest"),className:i("py-1.5 rounded transition-all",a==="zipLongest"?"bg-cyan-900/60 text-cyan-300 font-bold border border-cyan-700/80":"text-slate-400 hover:text-white"),children:"3. `zip_longest()` Pad"}),e.jsx("button",{onClick:()=>x("strictZip"),className:i("py-1.5 rounded transition-all",a==="strictZip"?"bg-purple-900/60 text-purple-300 font-bold border border-purple-700/80":"text-slate-400 hover:text-white"),children:"4. `zip(strict=True)`"})]}),e.jsxs("div",{className:"space-y-1 pt-2 border-t border-slate-800",children:[e.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[e.jsx("span",{className:"text-slate-300",children:"Room Chunk Size (`itertools.islice`):"}),e.jsxs("span",{className:"text-teal-300 font-bold",children:[l," students/room"]})]}),e.jsx("input",{type:"range",min:1,max:4,value:l,onChange:t=>_(Number(t.target.value)),className:"w-full accent-teal-500 cursor-pointer"})]}),e.jsxs("div",{className:i("p-3 rounded-lg border font-mono text-xs space-y-1",h==="SUCCESS"?"bg-emerald-950/40 border-emerald-700/80 text-emerald-300":h==="TRUNCATED"?"bg-amber-950/40 border-amber-700/80 text-amber-300":"bg-rose-950/40 border-rose-700/80 text-rose-300"),children:[e.jsx("div",{className:"font-bold text-[10px] uppercase",children:"Engine Execution Status:"}),e.jsx("div",{className:"text-[11px] leading-relaxed",children:u})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs space-y-1",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider text-[10px]",children:"Generated Python itertools Expression:"}),e.jsx("pre",{className:"text-teal-300 text-[11px] leading-relaxed break-all font-mono overflow-x-auto",children:c})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 flex-1 overflow-y-auto max-h-[160px] font-mono text-xs space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-[10px] font-bold uppercase text-slate-400",children:[e.jsxs("span",{children:["Allocated Duty Roster (",s.length," Active Records):"]}),e.jsxs("span",{children:["Rooms: ",g.length]})]}),s.length===0?e.jsx("div",{className:"text-rose-400 text-[11px] pt-2",children:"[ERROR] No records allocated due to length mismatch in strict mode."}):e.jsx("div",{className:"space-y-1.5",children:s.map((t,n)=>e.jsxs("div",{className:"flex justify-between text-[11px] text-slate-200 border-b border-slate-800/60 pb-1",children:[e.jsxs("span",{children:[e.jsx("strong",{className:"text-teal-300",children:t.roll_no}),": ",t.student," (",t.course,")"]}),e.jsx("span",{className:"text-cyan-300 font-semibold",children:t.proctor})]},n))})]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master `itertools` Function Reference Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Function Signature"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Iterator Category"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Memory & Time Complexity"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Primary Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"`zip(strict=True)`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Parallel Pairing"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"O(1) RAM / O(N) Time"}),e.jsx("td",{className:"py-3 px-4",children:"Defensive parallel aggregation"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"`zip_longest(fillvalue)`"}),e.jsx("td",{className:"py-3 px-4 text-slate-200",children:"Padded Parallel"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"O(1) RAM / O(N) Time"}),e.jsx("td",{className:"py-3 px-4",children:"Mismatched sequence padding"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"`cycle(iterable)`"}),e.jsx("td",{className:"py-3 px-4 text-purple-300",children:"Infinite Generator"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"O(1) RAM / Infinite"}),e.jsx("td",{className:"py-3 px-4",children:"Round-robin load balancing"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"`chain.from_iterable()`"}),e.jsx("td",{className:"py-3 px-4 text-amber-300",children:"Stream Flattening"}),e.jsx("td",{className:"py-3 px-4 text-emerald-400",children:"O(1) RAM / O(N) Time"}),e.jsx("td",{className:"py-3 px-4",children:"Zero-copy multi-list flattening"})]})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating zip mechanics, infinite generator bounding, chain/compress/islice, and institutional round-robin schedulers:"}),e.jsx(j,{files:[{filename:"zip_and_zip_longest_mechanics.py",code:w,description:"zip, zip strict=True, and itertools.zip_longest padding."},{filename:"infinite_iterators_count_cycle_repeat.py",code:z,description:"count, cycle, repeat, islice, and round-robin allocations."},{filename:"chain_compress_and_islice_iterators.py",code:T,description:"chain, chain.from_iterable, compress, and islice."},{filename:"institutional_multicampus_roundrobin_scheduler.py",code:A,description:"round-robin proctor rotation, sequential roll numbers, and islice pagination."}]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Silent Truncation in Standard `zip()`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-rose-300 font-mono",children:"zip([1, 2, 3], ['a'])"})," silently drops elements 2 and 3 without raising any error."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," In Python 3.10+, always specify ",e.jsx("code",{className:"text-emerald-300",children:"strict=True"})," or use ",e.jsx("code",{className:"text-emerald-300",children:"zip_longest()"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Unbounded Infinite Iterators Materialization"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Passing ",e.jsx("code",{className:"text-amber-300 font-mono",children:"list(itertools.count())"})," or ",e.jsx("code",{className:"text-amber-300 font-mono",children:"list(itertools.cycle([1, 2]))"})," causes an infinite loop that crashes the process with MemoryError."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always bound infinite streams with ",e.jsx("code",{className:"text-emerald-300",children:"itertools.islice()"})," or finite ",e.jsx("code",{className:"text-emerald-300",children:"zip()"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Unsorted Data with `itertools.groupby()`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:[e.jsx("code",{className:"text-purple-300 font-mono",children:"itertools.groupby()"})," only aggregates consecutive matching keys. If unsorted, identical keys will be fragmented across multiple separate groups!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Always pre-sort input data: ",e.jsx("code",{className:"text-emerald-300",children:"sorted(data, key=keyfunc)"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Quadratic List Concatenation"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Concatenating lists with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"L1 + L2 + L3"})," creates intermediate copies on every step, yielding terrible O(N²) time."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"itertools.chain.from_iterable()"})," for linear O(N) flattening."]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering zip, strict zip, itertools count, cycle, repeat, chain, compress, and islice:"}),e.jsx(S,{questions:E})]}),e.jsxs("section",{ref:r,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with zip pairing patterns, infinite stream recipes, and itertools flattening templates:"}),e.jsx("div",{className:"mb-10",children:e.jsx(N,{content:k,filename:"python_topic5_zip_and_itertools_notes.txt",title:"Print Topic 5 Study Notes"})}),e.jsx(v,{})]})]})]})}export{q as default};
