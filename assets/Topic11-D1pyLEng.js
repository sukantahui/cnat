import{b as o,j as e,bg as d}from"./vendor-react-core-Doz9nIC6.js";import{P as i}from"./PythonFileLoader-hCi5osN-.js";import{P as m}from"./PlainTextPrint-C08xhKA4.js";import{F as h}from"./FAQTemplate-CkSqDH4B.js";import{T as x}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const p=`# ====================================================================\r
# Topic 11: Symmetric Difference Deep Dive\r
# File: symmetric_difference_basics.py\r
# Description: Demonstrating set.symmetric_difference() and '^' operator\r
# ====================================================================\r
\r
# Batch A: Students attending Morning Class in Barrackpore\r
morning_batch = {"Susmita", "Debangshu", "Mamata", "Abhronila"}\r
\r
# Batch B: Students attending Evening Class in Barrackpore\r
evening_batch = {"Mamata", "Abhronila", "Rohan", "Pooja"}\r
\r
print("Morning Batch:", morning_batch)\r
print("Evening Batch:", evening_batch)\r
\r
# 1. Non-mutating Symmetric Difference using '^' operator\r
# Retains students who attend ONLY Morning OR ONLY Evening (NOT both)\r
exclusive_students = morning_batch ^ evening_batch\r
print("\\n1. Exclusive Single-Session Students (A ^ B):", exclusive_students)\r
\r
# 2. Mathematical equivalence: (A | B) - (A & B)\r
math_equivalent = (morning_batch | evening_batch) - (morning_batch & evening_batch)\r
print("2. Math Verification ((A | B) - (A & B)):", math_equivalent)\r
print("Are they identical? ->", exclusive_students == math_equivalent)\r
\r
# 3. Commutative Property: A ^ B == B ^ A\r
print("3. Commutative Check (A ^ B == B ^ A):", morning_batch ^ evening_batch == evening_batch ^ morning_batch)\r
\r
# 4. Method Syntax with List argument: .symmetric_difference()\r
guest_candidates = ["Susmita", "Tanmay", "Bikram"]\r
method_result = morning_batch.symmetric_difference(guest_candidates)\r
print("\\n4. Method Syntax .symmetric_difference(list):", method_result)\r
`,f=`# ====================================================================\r
# Topic 11: Symmetric Difference Deep Dive\r
# File: symmetric_difference_update_demo.py\r
# Description: Demonstrating set.symmetric_difference_update() and '^=' operator\r
# ====================================================================\r
\r
# Active feature flags on Production Server in Kolkata\r
production_flags = {"DARK_MODE", "BETA_PAYMENTS", "ANALYTICS_V2", "SSO_LOGIN"}\r
print("Initial Production Flags:", production_flags)\r
\r
# Staging Environment Feature Flags\r
staging_flags = {"BETA_PAYMENTS", "ANALYTICS_V2", "NEW_UI_SIDEBAR", "AI_TUTOR"}\r
print("Staging Environment Flags:", staging_flags)\r
\r
# 1. In-Place Symmetric Difference Mutation using '^=' operator\r
# Mutates production_flags to hold only flags that DIFFER between Prod and Staging\r
divergent_flags = production_flags.copy()\r
divergent_flags ^= staging_flags\r
print("\\n--- After In-Place '^=' Mutation ---")\r
print("Divergent Feature Flags:", divergent_flags)\r
\r
# 2. Named method equivalent: .symmetric_difference_update()\r
alt_flags = {"A", "B", "C"}\r
alt_flags.symmetric_difference_update({"B", "C", "D"})\r
print("\\nAfter .symmetric_difference_update():", alt_flags)  # {'A', 'D'}\r
`,u=`# ====================================================================\r
# Topic 11: Symmetric Difference Deep Dive\r
# File: disjoint_exclusive_auditing.py\r
# Description: Multi-set chaining with '^' and three-way XOR behavior\r
# ====================================================================\r
\r
# Sets of voters registered in Barrackpore (A), Ichapur (B), and Shyamnagar (C)\r
set_a = {"Susmita", "Mamata", "Debangshu"}\r
set_b = {"Mamata", "Debangshu", "Rohan"}\r
set_c = {"Debangshu", "Pooja", "Susmita"}\r
\r
# Multi-set chaining: A ^ B ^ C\r
# In mathematics/Boolean algebra, A ^ B ^ C keeps elements that appear\r
# in an ODD number of sets (i.e. in 1 set or all 3 sets)!\r
three_way_xor = set_a ^ set_b ^ set_c\r
\r
print("Set A:", set_a)\r
print("Set B:", set_b)\r
print("Set C:", set_c)\r
print("\\nThree-Way Chained Symmetric Difference (A ^ B ^ C):", three_way_xor)\r
print("Note: Debangshu is in ALL 3 sets (odd count) -> Kept!")\r
print("Note: Mamata is in 2 sets (even count) -> Cancelled out!")\r
print("Note: Rohan is in 1 set (odd count) -> Kept!")\r
`,g=`# ====================================================================\r
# Topic 11: Symmetric Difference Deep Dive\r
# File: bank_reconciliation_anomaly.py\r
# Description: Real-World Accounting Ledger Anomaly Detection & Bank Reconciliation in ₹\r
# ====================================================================\r
\r
# Transaction Reference IDs recorded in Barrackpore Institute Internal ERP\r
internal_erp_txns = {\r
    "TXN-BP-801",\r
    "TXN-BP-802",\r
    "TXN-BP-803",\r
    "TXN-BP-804",\r
    "TXN-BP-805"\r
}\r
\r
# Transaction Reference IDs confirmed in Bank Statement (SBI Barrackpore)\r
bank_statement_txns = {\r
    "TXN-BP-801",\r
    "TXN-BP-802",\r
    "TXN-BP-804",\r
    "TXN-BP-805",\r
    "TXN-BP-999"  # Direct bank deposit not yet logged in ERP\r
}\r
\r
# Symmetric Difference: Identifies ALL unreconciled discrepancies in 1 line!\r
unreconciled_discrepancies = internal_erp_txns ^ bank_statement_txns\r
\r
print("--- Bank Reconciliation Audit Report (Barrackpore Center) ---")\r
print(f"Total Discrepant Transactions ({len(unreconciled_discrepancies)}): {unreconciled_discrepancies}")\r
\r
for txn in unreconciled_discrepancies:\r
    if txn in internal_erp_txns:\r
        print(f"  • {txn}: In ERP, but NOT yet cleared in Bank Statement (Pending Clearance: ₹4,500)")\r
    else:\r
        print(f"  • {txn}: In Bank Statement, but MISSING from ERP (Unrecorded Deposit: ₹4,500)")\r
\r
total_anomaly_value = len(unreconciled_discrepancies) * 4500\r
print(f"\\nTotal Discrepancy Amount Under Audit: ₹{total_anomaly_value:,}")\r
`,b=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
                PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_006: SETS\r
                          TOPIC 11: SYMMETRIC DIFFERENCE\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. TOPIC OVERVIEW & MATHEMATICAL DEFINITION\r
--------------------------------------------------------------------------------\r
Symmetric Difference (A Δ B or A ^ B):\r
  • Returns the set of all elements that belong to EITHER set A or set B,\r
    but NOT to both (i.e. Disjunctive Union / Exclusive OR / XOR).\r
  • Mathematical Equivalence: \`A ^ B == (A | B) - (A & B) == (A - B) | (B - A)\`\r
  • Time Complexity: O(len(A) + len(B)).\r
\r
--------------------------------------------------------------------------------\r
2. SYNTAX & IN-PLACE VARIANTS\r
--------------------------------------------------------------------------------\r
  • Operator (Strict sets only): \`A ^ B\`\r
  • Method (Accepts any iterable): \`A.symmetric_difference(iterable)\`\r
  • In-Place Mutating Operator: \`A ^= B\`\r
  • In-Place Mutating Method: \`A.symmetric_difference_update(iterable)\`\r
\r
--------------------------------------------------------------------------------\r
3. MATHEMATICAL PROPERTIES\r
--------------------------------------------------------------------------------\r
  • Commutative: \`A ^ B == B ^ A\`\r
  • Associative: \`(A ^ B) ^ C == A ^ (B ^ C)\`\r
  • Identity: \`A ^ set() == A\`\r
  • Self-Inverse: \`A ^ A == set()\` (Self-cancelling XOR!)\r
  • Multi-Set Chaining: In \`A ^ B ^ C\`, elements appearing in an ODD number\r
    of sets are preserved; elements appearing in an EVEN number are cancelled.\r
\r
--------------------------------------------------------------------------------\r
4. PRODUCTION INDUSTRY APPLICATIONS\r
--------------------------------------------------------------------------------\r
  • Financial Bank Reconciliation: Finding unreconciled ledger discrepancies.\r
  • Configuration Drift Detection: Spotting diffs between Prod and Staging.\r
  • Bi-Directional Database Sync: Identifying unsynchronized records.\r
  • Cross-Cohort Exclusivity: Grouping single-course students.\r
\r
================================================================================\r
            END OF STUDY NOTE • TOPIC 11: SYMMETRIC DIFFERENCE\r
================================================================================\r
`,y=[{question:"What is the mathematical definition of set Symmetric Difference (A ^ B)?",shortAnswer:"The set of elements that belong to either set A or set B, but NOT to both (A Δ B = (A ∪ B) - (A ∩ B)).",explanation:"Symmetric difference acts like a logical XOR (Exclusive OR) on set memberships: it keeps elements unique to set A and elements unique to set B, excluding any elements in their common intersection.",hint:"Think of XOR: elements in either set, but not in both.",level:"basic",codeExample:`A = {"Python", "React"}
B = {"React", "Django"}
print(A ^ B)  # {'Python', 'Django'}`},{question:"What is the output of {1, 2, 3} ^ {2, 3, 4}?",shortAnswer:"{1, 4}.",explanation:"2 and 3 are shared (intersection) and thus discarded; 1 is exclusive to the first set and 4 is exclusive to the second set, yielding {1, 4}.",hint:"Exclude the shared items 2 and 3.",level:"basic",codeExample:"print({1, 2, 3} ^ {2, 3, 4})  # {1, 4}"},{question:"Is Symmetric Difference commutative: Is A ^ B always equal to B ^ A?",shortAnswer:"Yes, symmetric difference is strictly commutative: A ^ B == B ^ A for all sets.",explanation:"Because (A \\ B) ∪ (B \\ A) is equivalent to (B \\ A) ∪ (A \\ B), the order of operands has zero effect on the resulting set.",hint:"A ^ B produces the exact same set as B ^ A.",level:"basic",codeExample:`A, B = {10, 20}, {20, 30}
print(A ^ B == B ^ A)  # True ({10, 30})`},{question:"What is the output of A ^ A for any set A?",shortAnswer:"set() (an empty set).",explanation:"Every element in A exists in both operands, so the intersection equals the entire set, leaving zero exclusive elements (self-inversion).",hint:"Any set XORed with itself is completely empty.",level:"basic",codeExample:`s = {"Kolkata", "Barrackpore"}
print(s ^ s)  # set()`},{question:"What is the output of A ^ set() for any set A?",shortAnswer:"A (a new shallow clone of set A).",explanation:"Because an empty set has 0 elements, the intersection is empty and all elements of A are exclusive, returning set A.",hint:"Symmetric difference with empty set returns A.",level:"basic",codeExample:`s = {1, 2, 3}
print(s ^ set() == s)  # True`},{question:"What is the difference between A ^ B and A.symmetric_difference(B)?",shortAnswer:"The ^ operator strictly requires both operands to be set instances; .symmetric_difference() accepts any iterable (list, tuple, etc.).",explanation:"Writing A ^ [1, 2] raises TypeError, whereas A.symmetric_difference([1, 2]) automatically converts the list and computes the result.",hint:"Operators require sets; methods accept any iterable.",level:"moderate",codeExample:`A = {1, 2}
# A ^ [2, 3]                          # TypeError
res = A.symmetric_difference([2, 3])  # Valid! Returns {1, 3}`},{question:"Why does A.symmetric_difference(B, C) raise a TypeError?",shortAnswer:"symmetric_difference() accepts exactly ONE iterable argument; multi-set symmetric difference must be chained with operators: A ^ B ^ C.",explanation:"Unlike union() and intersection() which accept *others variadic arguments, symmetric_difference() is defined pairwise and takes exactly one argument.",hint:"symmetric_difference takes only 1 argument; chain with ^ for multiple sets.",level:"expert",codeExample:`A, B, C = {1}, {2}, {3}
# A.symmetric_difference(B, C)  # TypeError
res = A ^ B ^ C                 # Valid! Returns {1, 2, 3}`},{question:"How does multi-set chaining work: What elements are in A ^ B ^ C?",shortAnswer:"Elements that appear in an ODD number of sets (i.e. present in exactly 1 set OR present in all 3 sets).",explanation:"Following XOR logic: items in 1 set appear 1 time (odd -> kept); items in 2 sets appear 2 times (even -> cancelled out); items in 3 sets appear 3 times (odd -> kept).",hint:"Elements with odd multiplicity are kept; even multiplicity are cancelled.",level:"expert",codeExample:`A = {1, 2, 3}
B = {2, 3, 4}
C = {3, 4, 5}
# 1 in A (odd: kept)
# 2 in A,B (even: dropped)
# 3 in A,B,C (odd: kept)
# 4 in B,C (even: dropped)
# 5 in C (odd: kept)
print(A ^ B ^ C)  # {1, 3, 5}`},{question:"What is the in-place mutating equivalent of A ^ B?",shortAnswer:"A ^= B or A.symmetric_difference_update(B).",explanation:"Both ^= and symmetric_difference_update() mutate set A in place, replacing its elements with the symmetric difference and returning None.",hint:"Use ^= or symmetric_difference_update().",level:"basic",codeExample:`A = {1, 2}
B = {2, 3}
A ^= B
print(A)  # {1, 3}`},{question:"How can you use symmetric difference to detect discrepancies between an ERP database and a bank statement in one line?",shortAnswer:"discrepancies = erp_transactions ^ bank_transactions.",explanation:"Any transaction that exists only in the ERP (un-cleared payment) or only in the bank statement (unrecorded deposit) appears in the symmetric difference set.",hint:"Symmetric difference highlights all non-matching records.",level:"moderate",codeExample:`erp = {"TXN1", "TXN2", "TXN3"}
bank = {"TXN1", "TXN2", "TXN4"}
print(erp ^ bank)  # {'TXN3', 'TXN4'}`},{question:"What is the time complexity of set Symmetric Difference (A ^ B)?",shortAnswer:"O(len(A) + len(B)).",explanation:"Python constructs a new set, copies elements from A, and then iterates through all elements of B, toggling (adding missing, removing present) in O(1) time per element.",hint:"Proportional to the total number of items in both sets.",level:"moderate",codeExample:"# Time: O(len(A) + len(B))"},{question:"How does ^= optimize memory compared to A = A ^ B?",shortAnswer:"A ^= B mutates the existing hash table in place, avoiding the allocation and garbage collection of an intermediate set object.",explanation:"In-place ^= re-uses the existing PySetObject structure, mutating buckets directly rather than creating a second copy in RAM.",hint:"In-place mutation avoids allocating a new container.",level:"expert",codeExample:`A = set(range(100000))
B = set(range(50000, 150000))
A ^= B  # Re-uses A's memory block`},{question:"What is the result of A ^ B when A and B are completely disjoint sets (A & B == set())?",shortAnswer:"A | B (The union of both sets).",explanation:"Because the intersection is empty ((A & B) == set()), subtracting nothing from the union leaves the entire union: (A | B) - set() == A | B.",hint:"Disjoint sets have no shared items to subtract.",level:"basic",codeExample:`A = {"A", "B"}
B = {"C", "D"}
print(A ^ B == A | B)  # True`},{question:"What is the result of A ^ B when A is a subset of B (A <= B)?",shortAnswer:"B - A (The difference of B and A).",explanation:"Since all elements of A are inside B, the intersection is A. The union is B. Thus (A | B) - (A & B) = B - A.",hint:"Union is B and intersection is A, so result is B - A.",level:"moderate",codeExample:`A = {1, 2}
B = {1, 2, 3, 4}
print(A ^ B == B - A)  # True ({3, 4})`},{question:"How can you detect configuration drift between Production and Staging server feature flags?",shortAnswer:"drift_flags = prod_flags ^ staging_flags.",explanation:"Symmetric difference highlights flags enabled in production but disabled in staging, and vice versa.",hint:"Symmetric difference finds all environment discrepancies.",level:"basic",codeExample:`prod = {"AUTH_V2", "DARK_MODE"}
staging = {"AUTH_V2", "BETA_DASHBOARD"}
print(prod ^ staging)  # {'DARK_MODE', 'BETA_DASHBOARD'}`},{question:"Can symmetric difference be applied directly between dictionary keys views: dict1.keys() ^ dict2.keys()?",shortAnswer:"Yes, in Python 3 dictionary key views support the ^ operator directly.",explanation:"dict_keys objects implement full set algebraic operators, enabling instantaneous key difference queries.",hint:"dict.keys() supports ^ natively.",level:"moderate",codeExample:`d1 = {"a": 1, "b": 2}
d2 = {"b": 3, "c": 4}
print(d1.keys() ^ d2.keys())  # {'a', 'c'}`},{question:"What happens if you execute: A = {1, 2}; A = A.symmetric_difference_update({2, 3})?",shortAnswer:"A becomes None because symmetric_difference_update() mutates in place and returns None.",explanation:"This is the classic return-value reassignment trap. Mutating methods return None.",hint:"Mutating methods return None.",level:"basic",codeExample:`A = {1, 2}
# A = A.symmetric_difference_update({2, 3}) # DANGER: A becomes None!
A.symmetric_difference_update({2, 3})      # Correct!`},{question:"How do you find characters that appear in string 1 or string 2, but not in both?",shortAnswer:"set(str1) ^ set(str2).",explanation:"Converting strings to sets of characters and applying ^ finds all non-common letters.",hint:"Convert strings to sets and apply ^.",level:"basic",codeExample:`s1 = "barrackpore"
s2 = "kolkata"
print(set(s1) ^ set(s2))  # Characters exclusive to either city`},{question:"Is Symmetric Difference associative: Is (A ^ B) ^ C equal to A ^ (B ^ C)?",shortAnswer:"Yes, symmetric difference is strictly associative.",explanation:"Parenthesization order does not change the resulting set of odd-multiplicity elements.",hint:"Associativity holds for symmetric difference.",level:"expert",codeExample:`A, B, C = {1, 2}, {2, 3}, {3, 4}
print(((A ^ B) ^ C) == (A ^ (B ^ C)))  # True`},{question:"How can you find students who take exactly ONE course between Course A, Course B, and Course C (exclusive single-course students)?",shortAnswer:"(A - B - C) | (B - A - C) | (C - A - B).",explanation:"Note that A ^ B ^ C includes students in all 3 courses as well (odd count). To strictly get students in exactly 1 course, unite the pairwise differences.",hint:"Unite students exclusive to each single course.",level:"expert",codeExample:`A, B, C = {1, 2}, {2, 3}, {2, 4}
strictly_one = (A - B - C) | (B - A - C) | (C - A - B)
print(strictly_one)  # {1, 3, 4}`},{question:"What is the output of {True, 1} ^ {1, 2} and why?",shortAnswer:"{2}.",explanation:"Because True == 1 and hash(True) == hash(1), {True, 1} evaluates to {True} (or {1}). In {1} ^ {1, 2}, 1 is shared and eliminated, leaving {2}.",hint:"True and 1 collapse into a single element.",level:"expert",codeExample:"print({True, 1} ^ {1, 2})  # {2}"},{question:"What happens if you use ^ between a set and a frozenset?",shortAnswer:"It succeeds; the return type matches the type of the left-hand operand.",explanation:"set ^ frozenset produces a set; frozenset ^ set produces a frozenset.",hint:"Left operand dictates return type.",level:"moderate",codeExample:`s = {1, 2}
fs = frozenset([2, 3])
print(type(s ^ fs))   # <class 'set'>
print(type(fs ^ s))  # <class 'frozenset'>`},{question:"How do you find elements that changed between two versions of a data record?",shortAnswer:"delta = set(record_v1.items()) ^ set(record_v2.items()).",explanation:"Converting key-value pairs to tuple sets and applying ^ extracts modified or added key-value pairs in O(N) time.",hint:"Apply ^ on dict.items() tuple sets.",level:"moderate",codeExample:`v1 = {"name": "Susmita", "fee": 4500}
v2 = {"name": "Susmita", "fee": 5000}
print(set(v1.items()) ^ set(v2.items()))  # {('fee', 4500), ('fee', 5000)}`},{question:"What is the algebraic relationship between Difference and Symmetric Difference?",shortAnswer:"A ^ B == (A - B) | (B - A).",explanation:"Symmetric difference is the union of relative complements.",hint:"Union of A - B and B - A.",level:"basic",codeExample:`A, B = {1, 2}, {2, 3}
print(A ^ B == ((A - B) | (B - A)))  # True`},{question:"What is the output of: s = set(); print(s.symmetric_difference([]))?",shortAnswer:"set() (empty set).",explanation:"Both collections are empty, so symmetric difference is empty.",hint:"Empty set XOR empty list is empty set.",level:"basic",codeExample:"print(set().symmetric_difference([]))  # set()"},{question:"Can set symmetric difference be used to toggle the presence of an item in a set?",shortAnswer:"Yes: s ^= {item} adds item if absent, and removes item if already present.",explanation:"If item exists in s, {item} is shared and removed. If item is missing from s, it is exclusive and added (classic toggle pattern!).",hint:"s ^= {x} acts as an in-place state toggle.",level:"expert",codeExample:`selected = {"DARK_MODE"}
selected ^= {"DARK_MODE"}  # Toggles OFF -> set()
print(selected)
selected ^= {"DARK_MODE"}  # Toggles ON  -> {'DARK_MODE'}
print(selected)`},{question:"Why is s ^= {item} preferred for state toggling in GUI/CLI applications?",shortAnswer:"It eliminates if/else branching logic: if item in s: s.remove(item) else: s.add(item) becomes a clean 1-liner.",explanation:"Symmetric difference naturally encapsulates the toggle condition in a single atomic expression.",hint:"Replaces if/else with a clean 1-line expression.",level:"moderate",codeExample:`# Instead of:
# if x in s: s.remove(x) else: s.add(x)
# Use:
s ^= {x}`},{question:"What is the output of {1, 2} ^ {3, 4} ^ {1, 3}?",shortAnswer:"{2, 4}.",explanation:"1 appears in set1 and set3 (even -> cancelled); 3 appears in set2 and set3 (even -> cancelled); 2 appears only in set1 (odd -> kept); 4 appears only in set2 (odd -> kept).",hint:"1 and 3 appear twice (even), so they drop out.",level:"moderate",codeExample:"print({1, 2} ^ {3, 4} ^ {1, 3})  # {2, 4}"},{question:"How does set symmetric difference assist in biometric database deduplication?",shortAnswer:"It isolates unique fingerprint or face feature hashes that don't match across two scan captures.",explanation:"Computing hash_a ^ hash_b highlights mismatched biometric minutiae points in O(1) hash lookups.",hint:"Highlights non-matching feature points.",level:"moderate",codeExample:"# Feature delta: scan1 ^ scan2"},{question:"What is the key takeaway for a software developer regarding Symmetric Difference?",shortAnswer:"Use Symmetric Difference (A ^ B) whenever you need to find deltas, discrepancies, or anomalies between two datasets in a single step.",explanation:"From bank ledger reconciliation to feature toggle states and configuration diffs, Symmetric Difference provides instantaneous delta resolution in Python.",hint:"Symmetric Difference = Instant Delta & Discrepancy Finder.",level:"basic",codeExample:`# Master Formula:
# Discrepancies = System_A ^ System_B
# Toggle State  = Active_States ^= {Feature}`}];function T(){const r=o.useRef([]),[a,l]=o.useState("xor");o.useEffect(()=>{const n=new IntersectionObserver(s=>{s.forEach(c=>{c.isIntersecting&&c.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return r.current.forEach(s=>{s&&n.observe(s)}),()=>n.disconnect()},[]);const t=n=>{n&&!r.current.includes(n)&&r.current.push(n)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-emerald-500/30 selection:text-emerald-200",children:[e.jsx("style",{children:`
        .section-hidden {
          transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .section-visible {
          transform: translateY(0);
        }
      `}),e.jsxs("header",{ref:t,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-emerald-950/80 text-emerald-300 px-3 py-1 rounded-full border border-emerald-800/80 shadow-sm shadow-emerald-950/50",children:"Segment 2 • Module 002_006"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-sky-950/80 text-sky-300 px-3 py-1 rounded-full border border-sky-800/80 shadow-sm shadow-sky-950/50",children:"Topic 11"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Exclusive Disjunctive Logic"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Symmetric Difference: ",e.jsx("code",{className:"text-purple-400 font-mono",children:"^"})," & ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"^="})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Mastering set XOR algebra: isolating elements in either set but NOT in both (",e.jsx("code",{className:"text-purple-400 font-mono",children:"(A | B) - (A & B)"}),"), state toggling patterns, and bank reconciliation anomaly detection."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"Δ Disjunctive Union (XOR)"}),e.jsxs("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:["🔄 State Toggling Pattern (s ^= ","{item}",")"]}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🏦 Bank Ledger Reconciler"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📐 Self-Inverting: A ^ A == set()"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"Δ"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Logic of Symmetric Difference (XOR)"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["In set theory, ",e.jsx("strong",{className:"text-purple-400",children:"Symmetric Difference (A Δ B)"})," answers the question: ",e.jsx("em",{className:"text-white",children:'"Which items exist in exactly ONE of these two sets, but are NOT shared between them?"'})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5 my-6 not-prose",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/70 border border-purple-800/60 shadow-lg shadow-purple-950/30 transition-all duration-300 hover:border-purple-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"📐"})," Mathematical Formula"]}),e.jsx("p",{className:"text-sm text-slate-300 mb-2",children:"Mathematically equivalent to subtracting the shared intersection from the full union:"}),e.jsx("div",{className:"text-xs font-mono text-purple-300 bg-slate-900 p-2.5 rounded border border-purple-900/50",children:"A ^ B == (A | B) - (A & B) == (A - B) | (B - A)"})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/70 border border-emerald-800/60 shadow-lg shadow-emerald-950/30 transition-all duration-300 hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"💡"})," The State Toggle Pattern"]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-2",children:["Writing ",e.jsxs("code",{className:"text-emerald-300 font-mono",children:["selected ^= ","{item}"]})," adds ",e.jsx("code",{className:"text-white font-mono",children:"item"})," if absent, and deletes it if already present."]}),e.jsxs("div",{className:"text-xs font-mono text-slate-400",children:["Eliminates verbose ",e.jsx("code",{className:"text-slate-300 font-mono",children:"if item in s: s.remove(item) else: s.add(item)"})," branches!"]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-purple-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-2",children:"🌟 Crucial Algebraic Properties"}),e.jsxs("ul",{className:"text-sm sm:text-base text-slate-300 space-y-1 list-disc list-inside",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-white",children:"Commutative:"})," ",e.jsx("code",{className:"text-purple-300 font-mono",children:"A ^ B == B ^ A"})," (Operand order never matters)."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-white",children:"Self-Inversion:"})," ",e.jsx("code",{className:"text-purple-300 font-mono",children:"A ^ A == set()"})," (Any set XORed with itself cancels to empty)."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-white",children:"Identity:"})," ",e.jsx("code",{className:"text-purple-300 font-mono",children:"A ^ set() == A"})," (Empty set is identity)."]})]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Symmetric Difference & Delta Auditing"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>l("xor"),className:d("px-3 py-1.5 rounded-lg transition-all",a==="xor"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"XOR Venn Lobes (A ^ B)"}),e.jsx("button",{onClick:()=>l("audit"),className:d("px-3 py-1.5 rounded-lg transition-all",a==="audit"?"bg-emerald-900/50 text-emerald-300 border border-emerald-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Bank Ledger Discrepancy Flow"})]})]}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:a==="xor"?e.jsxs("svg",{viewBox:"0 0 850 320",className:"w-full h-auto min-w-[650px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#f8fafc",fontSize:"15",fontWeight:"bold",children:"Symmetric Difference (A ^ B): Highlighting Exclusive Lobes, Excluding Shared Core"}),e.jsx("circle",{cx:"340",cy:"160",r:"110",fill:"#9333ea33",stroke:"#a855f7",strokeWidth:"2.5"}),e.jsx("circle",{cx:"510",cy:"160",r:"110",fill:"#9333ea33",stroke:"#a855f7",strokeWidth:"2.5"}),e.jsx("ellipse",{cx:"425",cy:"160",rx:"45",ry:"80",fill:"#020617",stroke:"#334155",strokeWidth:"1.5"}),e.jsx("text",{x:"270",y:"150",fill:"#f5d0fe",fontSize:"13",fontWeight:"bold",children:'"Susmita"'}),e.jsx("text",{x:"260",y:"175",fill:"#a855f7",fontSize:"11",children:"✓ KEPT (Only A)"}),e.jsx("text",{x:"395",y:"145",fill:"#64748b",fontSize:"11",textDecoration:"line-through",children:'"Mamata"'}),e.jsx("text",{x:"390",y:"170",fill:"#64748b",fontSize:"11",textDecoration:"line-through",children:'"Debangshu"'}),e.jsx("text",{x:"395",y:"195",fill:"#ef4444",fontSize:"10",children:"❌ EXCLUDED"}),e.jsx("text",{x:"550",y:"150",fill:"#f5d0fe",fontSize:"13",fontWeight:"bold",children:'"Rohan"'}),e.jsx("text",{x:"545",y:"175",fill:"#a855f7",fontSize:"11",children:"✓ KEPT (Only B)"}),e.jsx("text",{x:"260",y:"70",fill:"#c084fc",fontSize:"13",fontWeight:"bold",children:"Set A (Morning Batch)"}),e.jsx("text",{x:"520",y:"70",fill:"#c084fc",fontSize:"13",fontWeight:"bold",children:"Set B (Evening Batch)"}),e.jsx("rect",{x:"30",y:"275",width:"790",height:"35",rx:"6",fill:"#0f172a",stroke:"#a855f7",strokeWidth:"1"}),e.jsxs("text",{x:"50",y:"297",fill:"#f5d0fe",fontSize:"12",fontWeight:"bold",children:["Result of A ^ B: ",'{"Susmita", "Rohan"}'," (Students attending strictly ONE session!)"]})]}):e.jsxs("svg",{viewBox:"0 0 850 320",className:"w-full h-auto min-w-[650px] font-sans",children:[e.jsx("text",{x:"30",y:"35",fill:"#f8fafc",fontSize:"15",fontWeight:"bold",children:"One-Line Bank Reconciliation: erp_txns ^ bank_txns"}),e.jsx("rect",{x:"30",y:"65",width:"380",height:"190",rx:"8",fill:"#1e293b",stroke:"#0ea5e9",strokeWidth:"1.5"}),e.jsx("text",{x:"50",y:"95",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"Internal ERP System (Barrackpore)"}),e.jsx("text",{x:"50",y:"125",fill:"#cbd5e1",fontSize:"11",children:"• TXN-801 (Cleared)"}),e.jsx("text",{x:"50",y:"145",fill:"#cbd5e1",fontSize:"11",children:"• TXN-802 (Cleared)"}),e.jsx("text",{x:"50",y:"170",fill:"#fbbf24",fontSize:"12",fontWeight:"bold",children:"• TXN-803 (Un-cleared in Bank: ₹4,500)"}),e.jsx("rect",{x:"440",y:"65",width:"380",height:"190",rx:"8",fill:"#1e293b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"460",y:"95",fill:"#34d399",fontSize:"14",fontWeight:"bold",children:"Bank Statement (SBI Barrackpore)"}),e.jsx("text",{x:"460",y:"125",fill:"#cbd5e1",fontSize:"11",children:"• TXN-801 (Cleared)"}),e.jsx("text",{x:"460",y:"145",fill:"#cbd5e1",fontSize:"11",children:"• TXN-802 (Cleared)"}),e.jsx("text",{x:"460",y:"170",fill:"#fbbf24",fontSize:"12",fontWeight:"bold",children:"• TXN-999 (Unrecorded Deposit: ₹4,500)"}),e.jsx("rect",{x:"30",y:"270",width:"790",height:"40",rx:"6",fill:"#451a03",stroke:"#f59e0b",strokeWidth:"1.5"}),e.jsxs("text",{x:"50",y:"295",fill:"#fde68a",fontSize:"12",fontWeight:"bold",children:["erp ^ bank Discrepancies: ",'{"TXN-803", "TXN-999"}'," (Total Anomaly Under Audit: ₹9,000)"]})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 space-y-8",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Python Code Labs"})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab A: Symmetric Difference Basics, Math Equivalence & Commutativity"}),e.jsx(i,{fileModule:p,title:"symmetric_difference_basics.py",highlightLines:[6,14,18,22,27]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab B: In-Place Mutation with ^= and Feature Flag Delta Detection"}),e.jsx(i,{fileModule:f,title:"symmetric_difference_update_demo.py",highlightLines:[6,10,16,22]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab C: Three-Way Chaining (A ^ B ^ C) & Odd-Multiplicity Inclusion"}),e.jsx(i,{fileModule:u,title:"disjoint_exclusive_auditing.py",highlightLines:[6,14,18]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab D: Real-World Bank Reconciliation & Audit Anomaly in ₹"}),e.jsx(i,{fileModule:g,title:"bank_reconciliation_anomaly.py",highlightLines:[6,15,24,32]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏢"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Industry Applications in West Bengal"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🏦"})," 1. Automated Bank Reconciliation"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Auditors in ",e.jsx("strong",{children:"Barrackpore"})," execute ",e.jsx("code",{className:"font-mono text-purple-400",children:"erp_txns ^ bank_txns"})," to isolate un-cleared checks and unrecorded deposits, balancing books in Indian Rupees (",e.jsx("strong",{className:"text-emerald-300",children:"₹4,500/discrepancy"}),")."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"⚙️"})," 2. DevOps Config Drift Detection"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Cloud engineers in ",e.jsx("strong",{children:"Kolkata"})," compare active server feature flags against staging environments using ",e.jsx("code",{className:"font-mono text-emerald-400",children:"prod_flags ^ staging_flags"})," to verify release readiness before zero-downtime deployments."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🔄"})," 3. Bi-Directional Database Sync"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Mobile apps syncing offline SQLite caches with cloud PostgreSQL backends compute ",e.jsx("code",{className:"font-mono text-sky-400",children:"local_ids ^ cloud_ids"})," in ",e.jsx("strong",{children:"Ichapur"})," to push and pull modified records."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🔘"})," 4. Atomic UI Feature Toggling"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Frontend event listeners in ",e.jsx("strong",{children:"Jadavpur"})," toggle multi-select filter tags using ",e.jsxs("code",{className:"font-mono text-amber-400",children:["active_filters ^= ","{tag_id}"]}),", flipping active state in 1 clean line."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Pitfalls & Tricky Gotchas in Symmetric Difference"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 1: Multi-Arguments in Method"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Calling ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"A.symmetric_difference(B, C)"})," raises ",e.jsx("code",{className:"text-rose-400 font-bold",children:"TypeError"}),". Chain with operator ",e.jsx("code",{className:"font-mono text-emerald-400",children:"A ^ B ^ C"})," instead."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 2: Reassigning to ^="}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Writing ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"s = s.symmetric_difference_update(other)"})," destroys ",e.jsx("code",{className:"font-mono text-white",children:"s"})," by setting it to ",e.jsx("code",{className:"font-mono text-rose-400",children:"None"}),"!"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 3: Assuming 3-Way XOR is Strictly 1-Set"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:[e.jsx("code",{className:"font-mono",children:"A ^ B ^ C"})," includes elements present in ",e.jsx("strong",{className:"text-white",children:"all 3 sets"})," (odd count). To strictly get 1-set items, unite pairwise differences."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 4: Type Errors with Lists"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Writing ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"my_set ^ [1, 2]"})," fails with ",e.jsx("code",{className:"text-rose-400 font-bold",children:"TypeError"}),". Use ",e.jsx("code",{className:"font-mono text-emerald-400",children:"my_set.symmetric_difference([1, 2])"}),"!"]})]})]})]}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(m,{content:b,title:"Topic 11: Symmetric Difference Study Guide",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Study Note",downloadFileName:"topic11_symmetric_difference_note.txt"})}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(h,{title:"Topic 11 • Symmetric Difference: Master Viva & Review Questions",questions:y})}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(x,{note:"Teacher's XOR Maxim: Symmetric Difference is the ultimate discrepancy detector. Whenever Susmita in Barrackpore wants to reconcile banking spreadsheets with internal course fee records, A ^ B will instantly expose every un-cleared transaction and unrecorded deposit. And for frontend developers, s ^= {tag} is the cleanest, branch-free toggle trick in Python!"})})]})]})}export{T as default};
