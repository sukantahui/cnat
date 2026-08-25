import{b as a,j as e,bg as d}from"./vendor-react-core-Doz9nIC6.js";import{P as i}from"./PythonFileLoader-hCi5osN-.js";import{P as h}from"./PlainTextPrint-C08xhKA4.js";import{F as m}from"./FAQTemplate-CkSqDH4B.js";import{T as x}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const p=`# ====================================================================\r
# Topic 10: Union, Intersection, Difference Deep Dive\r
# File: union_deep_dive.py\r
# Description: In-depth exploration of set.union() and '|' operator\r
# ====================================================================\r
\r
# Enrolled batches in Barrackpore and Kolkata centers\r
barrackpore_students = {"Susmita", "Debangshu", "Mamata"}\r
kolkata_students     = {"Mamata", "Abhronila", "Rohan"}\r
online_students      = {"Pooja", "Debangshu", "Bikram"}\r
\r
# 1. Non-mutating Union using '|' operator\r
all_in_person = barrackpore_students | kolkata_students\r
print("All In-Person Students (A | B):", all_in_person)\r
\r
# 2. Multi-set Union with operator chaining\r
all_batches = barrackpore_students | kolkata_students | online_students\r
print("All Batches Combined (A | B | C):", all_batches)\r
\r
# 3. Union method with mixed iterables (Tuple + List)\r
guest_list = ["Sneha", "Tanmay"]\r
vip_tuple = ("Arjun",)\r
expanded_cohort = barrackpore_students.union(guest_list, vip_tuple)\r
print("\\nExpanded Cohort via .union(*iterables):", expanded_cohort)\r
\r
# 4. In-Place Union using '|=' operator (mutates barrackpore_students)\r
barrackpore_students |= {"New_Student_Ichapur"}\r
print("After In-Place Union (|=):", barrackpore_students)\r
`,u=`# ====================================================================\r
# Topic 10: Union, Intersection, Difference Deep Dive\r
# File: intersection_deep_dive.py\r
# Description: In-depth exploration of set.intersection() and '&' operator\r
# ====================================================================\r
\r
# Skill requirements for a Full-Stack Python Architect in Kolkata\r
job_requirements = {"Python", "FastAPI", "React", "PostgreSQL", "Docker", "Git"}\r
\r
# Candidate skills profiles\r
candidate_susmita = {"Python", "React", "PostgreSQL", "Git", "Tailwind"}\r
candidate_debangshu = {"Python", "FastAPI", "PostgreSQL", "Docker", "Git", "React", "AWS"}\r
\r
# 1. Non-mutating Intersection with '&' operator\r
matched_susmita = job_requirements & candidate_susmita\r
print("Matched Skills for Susmita:", matched_susmita)\r
print(f"Match Count: {len(matched_susmita)} / {len(job_requirements)}")\r
\r
matched_debangshu = job_requirements & candidate_debangshu\r
print("\\nMatched Skills for Debangshu:", matched_debangshu)\r
print(f"Match Count: {len(matched_debangshu)} / {len(job_requirements)}")\r
\r
# 2. Multi-Candidate Common Skills (Chained Intersection)\r
universal_skills = candidate_susmita & candidate_debangshu & job_requirements\r
print("\\nSkills Mastered by Both Candidates:", universal_skills)\r
\r
# 3. In-Place Intersection Mutation using '&='\r
scratch_set = candidate_susmita.copy()\r
scratch_set &= {"Python", "Rust", "Go"}\r
print("\\nAfter In-Place Intersection (&=):", scratch_set)\r
`,f=`# ====================================================================\r
# Topic 10: Union, Intersection, Difference Deep Dive\r
# File: difference_deep_dive.py\r
# Description: In-depth exploration of set.difference() and '-' operator\r
# ====================================================================\r
\r
job_requirements = {"Python", "FastAPI", "React", "PostgreSQL", "Docker", "Git"}\r
candidate_skills = {"Python", "React", "PostgreSQL"}\r
\r
# 1. Missing skills calculation (Requirements - Candidate)\r
missing_skills = job_requirements - candidate_skills\r
print("Job Requirements:", job_requirements)\r
print("Candidate Skills:", candidate_skills)\r
print("\\nMissing Skills Required for Hiring (A - B):", missing_skills)\r
\r
# 2. Non-commutative nature: B - A != A - B\r
extra_skills = candidate_skills - job_requirements\r
print("Extra Skills not required (B - A):", extra_skills)\r
\r
# 3. Multi-set difference: A - B - C\r
backend_basics = {"Python", "Git"}\r
advanced_missing = job_requirements - candidate_skills - backend_basics\r
print("\\nAdvanced Skills Missing (A - B - C):", advanced_missing)\r
\r
# 4. In-Place Difference Mutation using '-='\r
editable_requirements = job_requirements.copy()\r
editable_requirements -= {"Docker", "Git"}\r
print("\\nAfter In-Place Difference (-=):", editable_requirements)\r
`,b=`# ====================================================================\r
# Topic 10: Union, Intersection, Difference Deep Dive\r
# File: cross_cohort_analytics.py\r
# Description: Real-World Student Batch Analytics & Tuition Revenue in Barrackpore (₹)\r
# ====================================================================\r
\r
# Enrolled student rosters\r
python_batch = {"Susmita", "Debangshu", "Mamata", "Abhronila"}\r
react_batch  = {"Mamata", "Abhronila", "Rohan", "Pooja"}\r
\r
python_fee = 4500\r
react_fee  = 3500\r
\r
# 1. Total distinct students across both courses (Union)\r
total_students = python_batch | react_batch\r
print(f"Total Unique Students Enrolled (Union): {len(total_students)}")\r
\r
# 2. Dual course students receiving a ₹1,000 combo discount (Intersection)\r
combo_students = python_batch & react_batch\r
print(f"Dual-Enrolled Students (Intersection): {combo_students}")\r
\r
# 3. Students exclusively in Python (Difference)\r
only_python_students = python_batch - react_batch\r
print(f"Exclusive Python Students (Difference): {only_python_students}")\r
\r
# 4. Students exclusively in React (Difference)\r
only_react_students = react_batch - python_batch\r
print(f"Exclusive React Students (Difference): {only_react_students}")\r
\r
# Financial Revenue Calculations in Indian Rupees (₹)\r
revenue_only_python = len(only_python_students) * python_fee\r
revenue_only_react  = len(only_react_students) * react_fee\r
revenue_combo       = len(combo_students) * (python_fee + react_fee - 1000)  # ₹1000 combo discount\r
\r
total_revenue = revenue_only_python + revenue_only_react + revenue_combo\r
\r
print("\\n--- Financial Ledger Summary (Barrackpore & Kolkata) ---")\r
print(f"Revenue from Python Only ({len(only_python_students)} students): ₹{revenue_only_python:,}")\r
print(f"Revenue from React Only  ({len(only_react_students)} students): ₹{revenue_only_react:,}")\r
print(f"Revenue from Combo Batch ({len(combo_students)} students): ₹{revenue_combo:,}")\r
print(f"Total Consolidated Batch Revenue: ₹{total_revenue:,}")\r
`,g=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
                PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_006: SETS\r
                   TOPIC 10: UNION, INTERSECTION, AND DIFFERENCE\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. OPERATION 1: UNION (A | B or A.union(*others))\r
--------------------------------------------------------------------------------\r
  • Definition: All distinct items present in set A, set B, or both.\r
  • Time Complexity: O(len(A) + len(B)).\r
  • In-Place Mutating Operator: \`A |= B\` (or \`A.update(*others)\`).\r
  • Key Use Case: Merging user registries, aggregating multi-source IDs.\r
\r
--------------------------------------------------------------------------------\r
2. OPERATION 2: INTERSECTION (A & B or A.intersection(*others))\r
--------------------------------------------------------------------------------\r
  • Definition: Only the common items present simultaneously in all sets.\r
  • Time Complexity: O(min(len(A), len(B))) - Python loops over smaller set!\r
  • In-Place Mutating Operator: \`A &= B\` (or \`A.intersection_update(*others)\`).\r
  • Key Use Case: Candidate skill matching, mutual friend discovery.\r
\r
--------------------------------------------------------------------------------\r
3. OPERATION 3: DIFFERENCE (A - B or A.difference(*others))\r
--------------------------------------------------------------------------------\r
  • Definition: Items in set A that are NOT present in set B.\r
  • Time Complexity: O(len(A)).\r
  • In-Place Mutating Operator: \`A -= B\` (or \`A.difference_update(*others)\`).\r
  • Crucial Rule: NON-COMMUTATIVE! \`A - B != B - A\`.\r
  • Key Use Case: Missing form fields, identifying unsubscribed churn users.\r
\r
--------------------------------------------------------------------------------\r
4. OPERATOR VS METHOD BEHAVIOR SUMMARY\r
--------------------------------------------------------------------------------\r
  Operation     | Operator Syntax (Sets Only) | Method Syntax (Any Iterable)\r
  --------------+-----------------------------+------------------------------\r
  Union         | A | B | C                   | A.union(list1, tuple2)\r
  Intersection  | A & B & C                   | A.intersection(list1, tuple2)\r
  Difference    | A - B - C                   | A.difference(list1, tuple2)\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 10: UNION, INTERSECTION, DIFFERENCE\r
================================================================================\r
`,y=[{question:"What is the return value of A | B if A = {'Python', 'React'} and B = {'React', 'Django'}?",shortAnswer:"{'Python', 'React', 'Django'}.",explanation:"Union combines all elements from both sets into a single set, keeping exactly one instance of the shared element 'React'.",hint:"Union merges elements without duplicates.",level:"basic",codeExample:`A = {"Python", "React"}
B = {"React", "Django"}
print(A | B)  # {'Python', 'React', 'Django'}`},{question:"What is the return value of A & B if A = {'Python', 'React'} and B = {'React', 'Django'}?",shortAnswer:"{'React'}.",explanation:"Intersection extracts only elements that exist simultaneously in both sets A and B, which is 'React'.",hint:"Intersection keeps only shared elements.",level:"basic",codeExample:`A = {"Python", "React"}
B = {"React", "Django"}
print(A & B)  # {'React'}`},{question:"What is the result of A - B versus B - A if A = {1, 2, 3} and B = {3, 4, 5}?",shortAnswer:"A - B is {1, 2}; B - A is {4, 5}.",explanation:"A - B removes elements of B from A (leaving 1, 2). B - A removes elements of A from B (leaving 4, 5). Difference is non-commutative.",hint:"Subtraction order determines which set loses elements.",level:"basic",codeExample:`A, B = {1, 2, 3}, {3, 4, 5}
print("A - B:", A - B)  # {1, 2}
print("B - A:", B - A)  # {4, 5}`},{question:"How does Python optimize the time complexity of the set intersection (A & B)?",shortAnswer:"Python iterates over the smaller set and performs O(1) hash lookups in the larger set, achieving O(min(len(A), len(B))).",explanation:"If set A has 1,000,000 items and set B has 5 items, Python loops only 5 times through set B and checks if each exists in set A, executing in microsecond speed.",hint:"Python loops over the smaller set to minimize checks.",level:"expert",codeExample:`big = set(range(1000000))
small = {5, 10, 9999999}
# Loops 3 times through 'small', checking 'big' in O(1)
res = big & small`},{question:"What is the difference between A.union(B) and A |= B?",shortAnswer:"A.union(B) returns a NEW set without modifying A; A |= B mutates set A in place and returns None.",explanation:"union() is a pure function that leaves both operands untouched. |= (or update()) directly adds the elements into set A's internal hash table.",hint:"union creates a new set; |= modifies A in place.",level:"basic",codeExample:`A = {1, 2}
C = A.union({3})  # A is still {1, 2}
A |= {3}          # A is now {1, 2, 3}`},{question:"Why does A.intersection([1, 2, 3]) work, while A & [1, 2, 3] raises a TypeError?",shortAnswer:"The & operator requires both operands to be set instances; the .intersection() method accepts any iterable.",explanation:"Python enforces strict operand typing on bitwise/set operators (&, |, -, ^), while named methods accept any iterable container.",hint:"Operators strictly require sets; methods accept any iterable.",level:"moderate",codeExample:`A = {1, 2}
# A & [2, 3]            # TypeError
res = A.intersection([2, 3]) # Valid! Returns {2}`},{question:"How can you find the elements present in ALL three sets: A, B, and C?",shortAnswer:"A & B & C or A.intersection(B, C).",explanation:"Chaining the intersection operator or passing multiple collections to the intersection method extracts only elements shared by all three sets.",hint:"Chain & or pass multiple arguments to intersection().",level:"basic",codeExample:`A, B, C = {1, 2, 3}, {2, 3, 4}, {3, 4, 5}
print(A & B & C)  # {3}`},{question:"What is the result of A - B - C if A = {1, 2, 3, 4}, B = {2}, and C = {3}?",shortAnswer:"{1, 4}.",explanation:"Operation evaluates left-to-right: (A - B) gives {1, 3, 4}. Then {1, 3, 4} - C removes 3, leaving {1, 4}.",hint:"Subtract sequentially from left to right.",level:"basic",codeExample:`A, B, C = {1, 2, 3, 4}, {2}, {3}
print(A - B - C)  # {1, 4}`},{question:"What is the output of set.intersection() called with zero additional arguments: A.intersection()?",shortAnswer:"A shallow copy of set A.",explanation:"Calling s.intersection() with no arguments returns a brand new set containing all elements of s, equivalent to s.copy().",hint:"With no arguments, it returns a clone of A.",level:"moderate",codeExample:`A = {10, 20}
clone = A.intersection()
print(clone == A)       # True
print(clone is not A)   # True`},{question:"What happens when you execute A &= B (intersection_update)?",shortAnswer:"Set A is mutated in place to retain only elements that also exist in B; all other elements are deleted from A.",explanation:"&= removes non-overlapping elements directly from set A's hash table and returns None.",hint:"&= keeps only shared items in A.",level:"moderate",codeExample:`A = {1, 2, 3}
B = {2, 3, 4}
A &= B
print(A)  # {2, 3}`},{question:"What happens when you execute A -= B (difference_update)?",shortAnswer:"Set A is mutated in place by removing any element that exists in B.",explanation:"-= removes members of B directly from A and returns None.",hint:"-= removes matching items from A.",level:"basic",codeExample:`A = {10, 20, 30}
B = {20, 40}
A -= B
print(A)  # {10, 30}`},{question:"How can you use set difference to find which skills a candidate is missing for a job vacancy?",shortAnswer:"missing_skills = required_skills - candidate_skills.",explanation:"Subtracting candidate skills from required skills leaves only the criteria the candidate has not yet mastered.",hint:"Required minus Candidate gives missing skills.",level:"basic",codeExample:`required = {"Python", "Docker", "AWS"}
candidate = {"Python"}
print(required - candidate)  # {'Docker', 'AWS'}`},{question:"What is the output of {1, 2} & set()?",shortAnswer:"set() (empty set).",explanation:"An empty set shares zero elements with {1, 2}, so intersection yields set().",hint:"Intersection with empty set is always empty.",level:"basic",codeExample:"print({1, 2} & set())  # set()"},{question:"What is the output of {1, 2} | set()?",shortAnswer:"{1, 2}.",explanation:"Union with an empty set adds zero new elements, returning a new set with {1, 2}.",hint:"Union with empty set returns the original elements.",level:"basic",codeExample:"print({1, 2} | set())  # {1, 2}"},{question:"What is the output of {1, 2} - set()?",shortAnswer:"{1, 2}.",explanation:"Subtracting an empty set removes zero elements, returning {1, 2}.",hint:"Subtracting empty set leaves elements unchanged.",level:"basic",codeExample:"print({1, 2} - set())  # {1, 2}"},{question:"What is the output of set() - {1, 2}?",shortAnswer:"set() (empty set).",explanation:"Subtracting from an empty set leaves an empty set.",hint:"Subtracting from empty set remains empty.",level:"basic",codeExample:"print(set() - {1, 2})  # set()"},{question:"Can set intersection be used to compare two dictionaries by their keys?",shortAnswer:"Yes, dict1.keys() & dict2.keys() returns a set of shared keys.",explanation:"In Python 3, dictionary key views support set operations directly without manual conversion.",hint:"dict.keys() supports & directly.",level:"moderate",codeExample:`d1 = {"a": 1, "b": 2}
d2 = {"b": 9, "c": 8}
print(d1.keys() & d2.keys())  # {'b'}`},{question:"How can you merge three sets A, B, and C into a single new set using a method?",shortAnswer:"A.union(B, C).",explanation:"The union() method accepts multiple iterable arguments separated by commas, merging them all into a new set.",hint:"Pass B and C as comma-separated arguments to union().",level:"basic",codeExample:`A, B, C = {1}, {2}, {3}
print(A.union(B, C))  # {1, 2, 3}`},{question:"What is the result of A & B when sets A and B are completely disjoint (have no common items)?",shortAnswer:"set() (an empty set).",explanation:"Disjoint sets share zero elements, so their intersection produces an empty set.",hint:"Disjoint sets produce empty intersection.",level:"basic",codeExample:`A = {"A", "B"}
B = {"C", "D"}
print(A & B)  # set()`},{question:"What is the distributive law of Intersection over Union in Python set algebra?",shortAnswer:"A & (B | C) == (A & B) | (A & C).",explanation:"Intersecting A with the union of B and C is mathematically identical to uniting the intersection of (A, B) and (A, C).",hint:"Intersection distributes over Union.",level:"expert",codeExample:`A, B, C = {1, 2}, {2, 3}, {3, 4}
print((A & (B | C)) == ((A & B) | (A & C)))  # True`},{question:"What is the distributive law of Union over Intersection in Python set algebra?",shortAnswer:"A | (B & C) == (A | B) & (A | C).",explanation:"Uniting A with the intersection of B and C is mathematically identical to intersecting the union of (A, B) and (A, C).",hint:"Union distributes over Intersection.",level:"expert",codeExample:`A, B, C = {1, 2}, {2, 3}, {3, 4}
print((A | (B & C)) == ((A | B) & (A | C)))  # True`},{question:"How do you remove all punctuation characters from a string using set difference?",shortAnswer:"import string; clean_chars = set(text) - set(string.punctuation).",explanation:"Subtracting the punctuation set from the text character set leaves only alphanumeric and whitespace characters.",hint:"Subtract string.punctuation set from text set.",level:"basic",codeExample:`import string
text = "hello, world!"
clean = set(text) - set(string.punctuation)
print(clean)`},{question:"What happens if you reassign A = A.intersection(B) vs executing A.intersection_update(B)?",shortAnswer:"Both update A, but intersection_update() mutates the existing memory object in place without allocating a new object.",explanation:"Reassignment creates a new set object and updates the variable name. intersection_update() modifies the existing object, updating any shared references.",hint:"intersection_update modifies in place without allocating a new object.",level:"moderate",codeExample:`A = {1, 2, 3}
ref = A
A.intersection_update({2, 3})
print(ref)  # {2, 3} (Reflected in alias!)`},{question:"What is the output of: s = {1, 2, 3}; print(s - s)?",shortAnswer:"set() (empty set).",explanation:"Subtracting any set from itself removes all of its elements, leaving an empty set.",hint:"A set minus itself is empty.",level:"basic",codeExample:`s = {1, 2, 3}
print(s - s)  # set()`},{question:"What is the output of: s = {1, 2, 3}; print(s & s)?",shortAnswer:"{1, 2, 3} (a new set with identical elements).",explanation:"Intersecting a set with itself yields an identical set (idempotent operation).",hint:"Intersection with self returns the set itself.",level:"basic",codeExample:`s = {1, 2, 3}
print(s & s)  # {1, 2, 3}`},{question:"What is the output of: s = {1, 2, 3}; print(s | s)?",shortAnswer:"{1, 2, 3} (a new set with identical elements).",explanation:"Uniting a set with itself is idempotent and yields an identical set.",hint:"Union with self returns the set itself.",level:"basic",codeExample:`s = {1, 2, 3}
print(s | s)  # {1, 2, 3}`},{question:"How can you find common email subscribers across two independent newsletter lists in O(N) time?",shortAnswer:"common_emails = set(list_a) & set(list_b).",explanation:"Converting both lists to sets and intersecting them runs in O(len(A) + len(B)) time, finding shared subscribers instantaneously.",hint:"Convert lists to sets and use the & operator.",level:"basic",codeExample:`list_a = ["s@test.com", "m@test.com"]
list_b = ["m@test.com", "d@test.com"]
print(set(list_a) & set(list_b))  # {'m@test.com'}`},{question:"How do you find words that appear in document 1 but NOT in document 2?",shortAnswer:"set(doc1.split()) - set(doc2.split()).",explanation:"Splitting text into word lists, converting to sets, and applying difference (-) extracts unique vocabulary from doc1.",hint:"Subtract doc2 words set from doc1 words set.",level:"basic",codeExample:`doc1 = "learn python programming in barrackpore"
doc2 = "learn javascript programming in kolkata"
unique_to_doc1 = set(doc1.split()) - set(doc2.split())
print(unique_to_doc1)  # {'python', 'barrackpore'}`},{question:"Why is set difference (A - B) faster than list filtering [x for x in A if x not in B]?",shortAnswer:"Set difference uses O(1) hash lookups; the list comprehension does slow O(len(B)) scans for every item in A if B is a list.",explanation:"If B is a list, the list comprehension runs in O(len(A) * len(B)) quadratic time. Set difference runs in fast O(len(A)) linear time.",hint:"Set difference runs in O(len(A)) time instead of O(N*M).",level:"expert",codeExample:`# Set difference: O(len(A))
# Nested list scan: O(len(A) * len(B))`},{question:"What is the key takeaway for a software developer regarding Union, Intersection, and Difference?",shortAnswer:"Use Union (|) to aggregate, Intersection (&) to filter commonalities, and Difference (-) to isolate missing items or exclusions.",explanation:"These three operations form the foundation of high-performance data processing, access control, and deduplication logic in Python applications.",hint:"Union = Aggregate; Intersection = Match; Difference = Exclude.",level:"basic",codeExample:`# Core Triad:
# Aggregate: A | B
# Match:     A & B
# Exclude:   A - B`}];function S(){const r=a.useRef([]),[o,l]=a.useState("triad");a.useEffect(()=>{const n=new IntersectionObserver(s=>{s.forEach(c=>{c.isIntersecting&&c.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return r.current.forEach(s=>{s&&n.observe(s)}),()=>n.disconnect()},[]);const t=n=>{n&&!r.current.includes(n)&&r.current.push(n)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-emerald-500/30 selection:text-emerald-200",children:[e.jsx("style",{children:`
        .section-hidden {
          transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .section-visible {
          transform: translateY(0);
        }
      `}),e.jsxs("header",{ref:t,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-emerald-950/80 text-emerald-300 px-3 py-1 rounded-full border border-emerald-800/80 shadow-sm shadow-emerald-950/50",children:"Segment 2 • Module 002_006"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-sky-950/80 text-sky-300 px-3 py-1 rounded-full border border-sky-800/80 shadow-sm shadow-sky-950/50",children:"Topic 10"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"The Core Set Triad"})]}),e.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:"Union, Intersection & Difference"}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Deep dive into the fundamental triad of set algebra: aggregating data with ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"|"}),", finding mutual criteria with ",e.jsx("code",{className:"text-sky-400 font-mono",children:"&"}),", and isolating missing attributes with ",e.jsx("code",{className:"text-rose-400 font-mono",children:"-"}),"."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"∪ Union (A | B)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"∩ Intersection (A & B)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"∖ Difference (A - B)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ In-Place Mutations (|=, &=, -=)"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧩"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Three Fundamental Set Operations"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"In production Python systems, Union, Intersection, and Difference solve 90% of data aggregation and filtering challenges:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/70 border border-emerald-800/60 shadow-lg shadow-emerald-950/30 transition-all duration-300 hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"∪"})," 1. Union: A | B"]}),e.jsx("p",{className:"text-sm text-slate-300 mb-2",children:"Aggregates all unique items across sets."}),e.jsx("div",{className:"text-xs font-mono text-emerald-300 bg-slate-900 p-2 rounded",children:"Time: O(len(A) + len(B))"})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/70 border border-sky-800/60 shadow-lg shadow-sky-950/30 transition-all duration-300 hover:border-sky-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sky-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"∩"})," 2. Intersection: A & B"]}),e.jsx("p",{className:"text-sm text-slate-300 mb-2",children:"Filters elements present in ALL input sets."}),e.jsx("div",{className:"text-xs font-mono text-sky-300 bg-slate-900 p-2 rounded",children:"Time: O(min(len(A), len(B)))"})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/70 border border-rose-800/60 shadow-lg shadow-rose-950/30 transition-all duration-300 hover:border-rose-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"∖"})," 3. Difference: A - B"]}),e.jsx("p",{className:"text-sm text-slate-300 mb-2",children:"Subtracts members of B from A (Non-commutative!)."}),e.jsx("div",{className:"text-xs font-mono text-rose-300 bg-slate-900 p-2 rounded",children:"Time: O(len(A))"})]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"🔬"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Memory Operations & In-Place Mutations"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>l("triad"),className:d("px-3 py-1.5 rounded-lg transition-all",o==="triad"?"bg-emerald-900/50 text-emerald-300 border border-emerald-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"The Triad Flows"}),e.jsx("button",{onClick:()=>l("inplace"),className:d("px-3 py-1.5 rounded-lg transition-all",o==="inplace"?"bg-sky-900/50 text-sky-300 border border-sky-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"In-Place Mutations (|=, &=, -=)"})]})]}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:o==="triad"?e.jsxs("svg",{viewBox:"0 0 850 320",className:"w-full h-auto min-w-[650px] font-sans",children:[e.jsxs("text",{x:"30",y:"35",fill:"#f8fafc",fontSize:"15",fontWeight:"bold",children:["Memory Flow: A = ",'{"Python", "React"}'," | B = ",'{"React", "Docker"}']}),e.jsx("rect",{x:"30",y:"65",width:"250",height:"220",rx:"8",fill:"#1e293b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"45",y:"95",fill:"#34d399",fontSize:"14",fontWeight:"bold",children:"1. UNION (A | B)"}),e.jsx("text",{x:"45",y:"125",fill:"#cbd5e1",fontSize:"11",children:"Merges all unique keys:"}),e.jsx("rect",{x:"45",y:"140",width:"220",height:"40",rx:"6",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"55",y:"165",fill:"#a7f3d0",fontSize:"11",fontWeight:"bold",children:'{"Python", "React", "Docker"}'}),e.jsx("text",{x:"45",y:"210",fill:"#94a3b8",fontSize:"11",children:"• Combines both pools."}),e.jsx("text",{x:"45",y:"235",fill:"#94a3b8",fontSize:"11",children:'• Eliminates duplicate "React".'}),e.jsx("text",{x:"45",y:"260",fill:"#34d399",fontSize:"11",fontWeight:"bold",children:"Result Count: 3 items"}),e.jsx("rect",{x:"300",y:"65",width:"250",height:"220",rx:"8",fill:"#1e293b",stroke:"#0ea5e9",strokeWidth:"1.5"}),e.jsx("text",{x:"315",y:"95",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"2. INTERSECTION (A & B)"}),e.jsx("text",{x:"315",y:"125",fill:"#cbd5e1",fontSize:"11",children:"Extracts shared keys:"}),e.jsx("rect",{x:"315",y:"140",width:"220",height:"40",rx:"6",fill:"#0c4a6e",stroke:"#0ea5e9"}),e.jsx("text",{x:"365",y:"165",fill:"#bae6fd",fontSize:"12",fontWeight:"bold",children:'{"React"}'}),e.jsx("text",{x:"315",y:"210",fill:"#94a3b8",fontSize:"11",children:"• Loops over smaller set B."}),e.jsx("text",{x:"315",y:"235",fill:"#94a3b8",fontSize:"11",children:"• Checks A bucket in O(1)."}),e.jsx("text",{x:"315",y:"260",fill:"#38bdf8",fontSize:"11",fontWeight:"bold",children:"Result Count: 1 item"}),e.jsx("rect",{x:"570",y:"65",width:"250",height:"220",rx:"8",fill:"#1e293b",stroke:"#f43f5e",strokeWidth:"1.5"}),e.jsx("text",{x:"585",y:"95",fill:"#fca5a5",fontSize:"14",fontWeight:"bold",children:"3. DIFFERENCE (A - B)"}),e.jsx("text",{x:"585",y:"125",fill:"#cbd5e1",fontSize:"11",children:"Subtracts B from A:"}),e.jsx("rect",{x:"585",y:"140",width:"220",height:"40",rx:"6",fill:"#450a0a",stroke:"#f43f5e"}),e.jsx("text",{x:"635",y:"165",fill:"#fecaca",fontSize:"12",fontWeight:"bold",children:'{"Python"}'}),e.jsx("text",{x:"585",y:"210",fill:"#94a3b8",fontSize:"11",children:"• Keeps A items not in B."}),e.jsxs("text",{x:"585",y:"235",fill:"#94a3b8",fontSize:"11",children:["• B - A would give ",'{"Docker"}',"."]}),e.jsx("text",{x:"585",y:"260",fill:"#fca5a5",fontSize:"11",fontWeight:"bold",children:"Result Count: 1 item"})]}):e.jsxs("svg",{viewBox:"0 0 850 320",className:"w-full h-auto min-w-[650px] font-sans",children:[e.jsx("text",{x:"30",y:"35",fill:"#f8fafc",fontSize:"15",fontWeight:"bold",children:"In-Place Augmented Mutations (Zero New Object Allocation)"}),e.jsx("rect",{x:"30",y:"65",width:"250",height:"220",rx:"8",fill:"#1e293b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"45",y:"95",fill:"#34d399",fontSize:"14",fontWeight:"bold",children:"A |= B (update)"}),e.jsx("text",{x:"45",y:"125",fill:"#cbd5e1",fontSize:"11",children:"• Mutates Set A directly."}),e.jsx("text",{x:"45",y:"150",fill:"#cbd5e1",fontSize:"11",children:"• Adds new buckets from B."}),e.jsx("text",{x:"45",y:"175",fill:"#cbd5e1",fontSize:"11",children:"• Returns None."}),e.jsx("rect",{x:"45",y:"200",width:"220",height:"40",rx:"4",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"55",y:"225",fill:"#a7f3d0",fontSize:"11",fontWeight:"bold",children:"A becomes A ∪ B"}),e.jsx("rect",{x:"300",y:"65",width:"250",height:"220",rx:"8",fill:"#1e293b",stroke:"#0ea5e9",strokeWidth:"1.5"}),e.jsx("text",{x:"315",y:"95",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"A &= B (intersect_update)"}),e.jsx("text",{x:"315",y:"125",fill:"#cbd5e1",fontSize:"11",children:"• Mutates Set A directly."}),e.jsx("text",{x:"315",y:"150",fill:"#cbd5e1",fontSize:"11",children:"• Deletes items absent in B."}),e.jsx("text",{x:"315",y:"175",fill:"#cbd5e1",fontSize:"11",children:"• Returns None."}),e.jsx("rect",{x:"315",y:"200",width:"220",height:"40",rx:"4",fill:"#0c4a6e",stroke:"#0ea5e9"}),e.jsx("text",{x:"325",y:"225",fill:"#bae6fd",fontSize:"11",fontWeight:"bold",children:"A becomes A ∩ B"}),e.jsx("rect",{x:"570",y:"65",width:"250",height:"220",rx:"8",fill:"#1e293b",stroke:"#f43f5e",strokeWidth:"1.5"}),e.jsx("text",{x:"585",y:"95",fill:"#fca5a5",fontSize:"14",fontWeight:"bold",children:"A -= B (diff_update)"}),e.jsx("text",{x:"585",y:"125",fill:"#cbd5e1",fontSize:"11",children:"• Mutates Set A directly."}),e.jsx("text",{x:"585",y:"150",fill:"#cbd5e1",fontSize:"11",children:"• Deletes items present in B."}),e.jsx("text",{x:"585",y:"175",fill:"#cbd5e1",fontSize:"11",children:"• Returns None."}),e.jsx("rect",{x:"585",y:"200",width:"220",height:"40",rx:"4",fill:"#450a0a",stroke:"#f43f5e"}),e.jsx("text",{x:"595",y:"225",fill:"#fecaca",fontSize:"11",fontWeight:"bold",children:"A becomes A ∖ B"})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 space-y-8",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Python Code Labs"})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab A: Union Deep Dive: Operators, Multi-Args & In-Place |="}),e.jsx(i,{fileModule:p,title:"union_deep_dive.py",highlightLines:[6,12,16,23]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab B: Intersection Deep Dive: Candidate Skill Matching & &="}),e.jsx(i,{fileModule:u,title:"intersection_deep_dive.py",highlightLines:[6,14,21,26]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab C: Difference Deep Dive: Missing Skills Analysis & -="}),e.jsx(i,{fileModule:f,title:"difference_deep_dive.py",highlightLines:[6,11,15,24]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab D: Real-World Cross-Cohort Accounting & Combo Discounts in ₹"}),e.jsx(i,{fileModule:b,title:"cross_cohort_analytics.py",highlightLines:[6,13,17,21,29]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏢"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Industry Applications in West Bengal"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"💼"})," 1. Automated Job Skill Matching"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Recruitment portals in ",e.jsx("strong",{children:"Kolkata"})," evaluate applicant profiles against tech criteria using ",e.jsx("code",{className:"font-mono text-emerald-400",children:"matched = job_req & candidate_skills"}),", ranking candidates by percentage fit."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🎓"})," 2. Student Combo Discount Ledger"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Accounts departments in ",e.jsx("strong",{children:"Barrackpore"})," calculate combo fee discounts (",e.jsx("strong",{className:"text-emerald-300",children:"₹1,000 combo rebate"}),") for dual-enrolled students identified via ",e.jsx("code",{className:"font-mono text-sky-400",children:"python_batch & react_batch"}),"."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"📧"})," 3. Marketing Campaign Exclusions"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Email engines dispatch promotional newsletters to non-buyers using ",e.jsx("code",{className:"font-mono text-purple-400",children:"targets = all_subscribers - active_customers"})," in ",e.jsx("strong",{children:"Ichapur"}),"."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🔒"})," 4. Security Scope Invalidation"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Auth engines invalidate compromised privileges using in-place difference ",e.jsx("code",{className:"font-mono text-amber-400",children:"user_perms -= blacklisted_scopes"})," in ",e.jsx("strong",{children:"Jadavpur"})," microservices."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Pitfalls & Tricky Gotchas in the Set Triad"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 1: Difference Direction Trap"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Remember that ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"A - B"})," is ",e.jsx("strong",{className:"text-white",children:"NOT"})," ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"B - A"}),"! Subtracting in the wrong order inverts your filtered output completely."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 2: Reassigning to Mutating Variants"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Writing ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"A = A.intersection_update(B)"})," destroys ",e.jsx("code",{className:"font-mono text-white",children:"A"})," by assigning ",e.jsx("code",{className:"font-mono text-rose-400",children:"None"})," to it!"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 3: TypeError on Non-Set Operands"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:[e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"A & ['Python']"})," crashes with TypeError. Use ",e.jsx("code",{className:"font-mono text-emerald-400",children:"A.intersection(['Python'])"})," when handling non-set containers."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 4: Operator Precedence Misunderstanding"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:[e.jsx("code",{className:"font-mono",children:"&"})," evaluates before ",e.jsx("code",{className:"font-mono",children:"|"})," and ",e.jsx("code",{className:"font-mono",children:"-"}),". Always wrap expressions in parentheses ",e.jsx("code",{className:"font-mono text-emerald-400",children:"(A | B) - C"})," for explicit logic."]})]})]})]}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(h,{content:g,title:"Topic 10: Union, Intersection, Difference Study Guide",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Study Note",downloadFileName:"topic10_union_intersection_difference_note.txt"})}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(m,{title:"Topic 10 • Union, Intersection, Difference: Master Viva & Review Questions",questions:y})}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(x,{note:"Teacher's Algebraic Insight: Master the triad! Use Union (|) when you want to bring everyone together into a single cohort. Use Intersection (&) when Susmita and Debangshu need to find common skill matches for tech placements in Kolkata. And use Difference (-) whenever you need to find who hasn't paid their course fees or what mandatory fields were missed in a form submission. These three tools will make your backend logic unbreakable!"})})]})]})}export{S as default};
