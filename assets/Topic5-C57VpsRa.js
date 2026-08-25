import{b as i,j as e,bg as c}from"./vendor-react-core-Doz9nIC6.js";import{P as n}from"./PythonFileLoader-hCi5osN-.js";import{P as m}from"./PlainTextPrint-C08xhKA4.js";import{F as p}from"./FAQTemplate-CkSqDH4B.js";import{T as h}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const x=`# ====================================================================\r
# Topic 5: Removing Elements (remove, discard, pop, clear)\r
# File: remove_vs_discard.py\r
# Description: Demonstrating set.remove() vs set.discard() error handling\r
# ====================================================================\r
\r
active_students = {"Susmita", "Mamata", "Debangshu", "Abhronila"}\r
print("Initial Active Students:", active_students)\r
\r
# 1. set.remove() - Removes item successfully\r
active_students.remove("Mamata")\r
print("\\nAfter active_students.remove('Mamata'):", active_students)\r
\r
# 2. set.remove() with non-existent element -> Raises KeyError!\r
try:\r
    active_students.remove("Pooja")\r
except KeyError as error:\r
    print("\\n[KeyError Caught with .remove()]:", error)\r
    print("Explanation: .remove() requires the element to exist, or it raises KeyError!")\r
\r
# 3. set.discard() - Removes item successfully if present\r
active_students.discard("Abhronila")\r
print("\\nAfter active_students.discard('Abhronila'):", active_students)\r
\r
# 4. set.discard() with non-existent element -> Silent, Safe No-Op!\r
active_students.discard("Pooja")  # Does NOT raise an error!\r
print("After active_students.discard('Pooja') (Silent No-Op):", active_students)\r
print("Set remains safe and intact:", active_students)\r
`,f=`# ====================================================================\r
# Topic 5: Removing Elements (remove, discard, pop, clear)\r
# File: pop_and_clear_demo.py\r
# Description: Demonstrating set.pop() arbitrary removal and set.clear()\r
# ====================================================================\r
\r
cities = {"Kolkata", "Barrackpore", "Ichapur", "Jadavpur"}\r
print("Initial Cities Set:", cities)\r
\r
# 1. set.pop() - Removes and returns an arbitrary element\r
popped_item_1 = cities.pop()\r
print(f"\\n1st Popped Element: '{popped_item_1}'")\r
print("Remaining Set:", cities)\r
\r
popped_item_2 = cities.pop()\r
print(f"2nd Popped Element: '{popped_item_2}'")\r
print("Remaining Set:", cities)\r
\r
# 2. set.pop() on an empty set raises KeyError\r
empty_demo = set()\r
try:\r
    empty_demo.pop()\r
except KeyError as error:\r
    print("\\n[KeyError with pop() on empty set]:", error)\r
\r
# 3. set.clear() - Removes all elements in-place\r
cities.clear()\r
print("\\nAfter cities.clear():", cities)\r
print("Type after clear():", type(cities))\r
print("Length after clear():", len(cities))\r
`,u=`# ====================================================================\r
# Topic 5: Removing Elements (remove, discard, pop, clear)\r
# File: removal_edge_cases.py\r
# Description: Removing multiple elements via -= and difference_update()\r
# ====================================================================\r
\r
# Master set of server permission privileges\r
user_permissions = {\r
    "READ_REPORTS",\r
    "WRITE_DATA",\r
    "DELETE_USERS",\r
    "EXPORT_FINANCIALS",\r
    "MANAGE_KEYS"\r
}\r
\r
print("Original User Permissions:", user_permissions)\r
\r
# 1. Removing multiple specific items with difference_update() / -=\r
revoked_permissions = ["DELETE_USERS", "MANAGE_KEYS", "NON_EXISTENT_PERMISSION"]\r
\r
# difference_update() removes all specified items without raising KeyError for missing ones\r
user_permissions.difference_update(revoked_permissions)\r
print("\\nAfter difference_update(revoked_permissions):", user_permissions)\r
\r
# 2. In-place set subtraction with -= operator (requires set operand)\r
user_permissions -= {"EXPORT_FINANCIALS"}\r
print("After user_permissions -= {'EXPORT_FINANCIALS'}:", user_permissions)\r
`,b=`# ====================================================================\r
# Topic 5: Removing Elements (remove, discard, pop, clear)\r
# File: student_deregistration.py\r
# Description: Real-World Student Batch Cleanup & Fee Refund in Barrackpore\r
# ====================================================================\r
\r
# Active enrolled students in Barrackpore Python Pro batch\r
enrolled_roster = {"STU-101", "STU-102", "STU-103", "STU-104", "STU-105"}\r
course_fee = 4500\r
\r
print(f"Initial Batch Size: {len(enrolled_roster)} students")\r
print(f"Initial Total Batch Revenue: ₹{len(enrolled_roster) * course_fee}")\r
\r
# 1. Voluntary student withdrawal (using .discard() for safety)\r
withdrawing_student = "STU-103"\r
if withdrawing_student in enrolled_roster:\r
    enrolled_roster.discard(withdrawing_student)\r
    print(f"\\nStudent {withdrawing_student} successfully deregistered.")\r
    print(f"Processed Refund: ₹{course_fee}")\r
\r
# 2. Defensive deregistration of another student ID that may or may not exist\r
mystery_id = "STU-999"\r
enrolled_roster.discard(mystery_id)  # Safe, no crash!\r
print(f"Deregistration attempted for {mystery_id} (No crash occurred).")\r
\r
# 3. Final Batch State and Net Revenue in Indian Rupees (₹)\r
print(f"\\nFinal Active Batch Roster: {enrolled_roster}")\r
print(f"Final Active Count: {len(enrolled_roster)}")\r
print(f"Final Net Revenue: ₹{len(enrolled_roster) * course_fee}")\r
`,v=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
                PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_006: SETS\r
             TOPIC 5: REMOVING ELEMENTS: REMOVE(), DISCARD(), POP(), CLEAR()\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. OVERVIEW OF SET REMOVAL METHODS\r
--------------------------------------------------------------------------------\r
Python provides four distinct built-in methods to remove elements from a set:\r
  1. \`set.remove(elem)\`: Removes \`elem\`; RAISES \`KeyError\` if not found.\r
  2. \`set.discard(elem)\`: Removes \`elem\`; SILENT NO-OP if not found.\r
  3. \`set.pop()\`: Removes & returns an ARBITRARY element; RAISES \`KeyError\` if empty.\r
  4. \`set.clear()\`: Empties the entire set in place, leaving \`set()\`.\r
\r
--------------------------------------------------------------------------------\r
2. DETAILED COMPARISON TABLE\r
--------------------------------------------------------------------------------\r
  Method         | Target Item Exists       | Target Item Missing   | Return Value\r
  ---------------+--------------------------+-----------------------+--------------\r
  s.remove(x)    | Deletes x from bucket    | RAISES KeyError!      | None\r
  s.discard(x)   | Deletes x from bucket    | Silent safe no-op     | None\r
  s.pop()        | Deletes 1st active bucket| RAISES KeyError (empty)| Popped element\r
  s.clear()      | Wipes all active buckets | Safe on empty set     | None\r
\r
--------------------------------------------------------------------------------\r
3. REMOVING MULTIPLE ELEMENTS AT ONCE\r
--------------------------------------------------------------------------------\r
  A. Using \`difference_update(*iterables)\`:\r
     \`s.difference_update(["A", "B", "C"])\`  # Modifies s in place\r
\r
  B. Using in-place subtraction operator \`-=\`:\r
     \`s -= {"A", "B"}\`                      # Requires a set operand\r
\r
--------------------------------------------------------------------------------\r
4. BEST PRACTICE RULES\r
--------------------------------------------------------------------------------\r
  • Use \`s.remove(x)\` when the element MUST exist, and absence indicates a bug.\r
  • Use \`s.discard(x)\` when you want defensive deletion without try/except blocks.\r
  • Use \`s.pop()\` when draining tasks or picking an arbitrary worker from a pool.\r
  • Use \`s.clear()\` when resetting or recycling an existing set object.\r
\r
================================================================================\r
         END OF STUDY NOTE • TOPIC 5: REMOVING ELEMENTS FROM SETS\r
================================================================================\r
`,y=[{question:"What is the crucial difference between set.remove() and set.discard() when the specified element does NOT exist?",shortAnswer:"set.remove(x) raises a KeyError; set.discard(x) completes silently without raising any error.",explanation:"Both methods remove the element if it exists in the set. However, if the element is absent, remove() raises KeyError, while discard() is idempotent and safe, acting as a silent no-op.",hint:"Think about error-raising strict deletion vs defensive silent deletion.",level:"basic",codeExample:`s = {"Kolkata"}
s.discard("Barrackpore")  # Safe! No error
# s.remove("Barrackpore")   # KeyError: 'Barrackpore'`},{question:"What does set.pop() do, and how does its behavior differ from list.pop()?",shortAnswer:"set.pop() removes and returns an arbitrary element; list.pop() removes and returns the last element (or specified index).",explanation:"Because sets are unordered and have no tail index, set.pop() removes whatever element happens to occupy the first non-empty hash bucket encountered in memory.",hint:"Lists pop from the end; sets pop an arbitrary item.",level:"moderate",codeExample:`s = {"A", "B", "C"}
item = s.pop()
print("Popped:", item)
print("Remaining:", s)`},{question:"What happens if you call set.pop() on an empty set?",shortAnswer:"It raises KeyError: 'pop from an empty set'.",explanation:"When len(s) == 0, set.pop() has no elements to extract, raising a KeyError. You should verify len(s) > 0 or use a try/except block when popping dynamically.",hint:"An empty set raises KeyError on pop.",level:"basic",codeExample:`empty_set = set()
try:
    empty_set.pop()
except KeyError as e:
    print(e)  # 'pop from an empty set'`},{question:"What is the effect of calling set.clear() on a populated set?",shortAnswer:"It empties the set in place, leaving an empty set() with len(s) == 0.",explanation:"set.clear() wipes all hash bucket entries and resets the set's active element count to 0, mutating the set in place without changing its memory identity.",hint:"clear() resets the set to empty set().",level:"basic",codeExample:`s = {1, 2, 3}
s.clear()
print(s)       # set()
print(len(s))  # 0`},{question:"What is the time complexity of set.remove(x) and set.discard(x)?",shortAnswer:"Both execute in O(1) average time complexity.",explanation:"Both compute hash(x) and inspect the target bucket directly. Removing the entry and marking the bucket slot as a dummy tombstone takes constant O(1) time.",hint:"Direct hash lookup allows O(1) constant-time deletion.",level:"moderate",codeExample:`# s.remove(x)  -> O(1) average
# s.discard(x) -> O(1) average`},{question:"How does Python handle bucket deletions internally without breaking hash collision chains?",shortAnswer:"It marks deleted slots with a special 'dummy' / tombstone marker rather than truly emptying them.",explanation:"If Python cleared the bucket completely to NULL, subsequent lookups for colliding elements further down the probe chain would stop prematurely. Marking deleted slots as dummy entries preserves open-addressing probe continuity.",hint:"Tombstone markers preserve probing continuity.",level:"expert",codeExample:"# CPython uses PySet_Dummy to preserve probing sequences"},{question:"How can you remove multiple elements from a set simultaneously without looping?",shortAnswer:"Use set.difference_update(iterable) or the -= operator.",explanation:"s.difference_update([item1, item2]) removes all items found in the passed iterable in-place. The -= operator (e.g. s -= {item1, item2}) performs the same operation with another set.",hint:"Use difference_update() or the -= operator.",level:"moderate",codeExample:`s = {1, 2, 3, 4, 5}
s.difference_update([2, 4, 99])
print(s)  # {1, 3, 5}`},{question:"Why should you NOT use s.remove(x) inside a for loop iterating over s?",shortAnswer:"It raises RuntimeError: Set changed size during iteration.",explanation:"Mutating the set during active iteration invalidates the iterator's bucket cursor offset, causing Python to terminate the loop with a RuntimeError.",hint:"Modifying while iterating triggers RuntimeError.",level:"moderate",codeExample:`s = {1, 2, 3, 4}
try:
    for x in s:
        if x % 2 == 0:
            s.remove(x)
except RuntimeError as e:
    print(e)  # Set changed size during iteration`},{question:"What is the safe pattern to remove items from a set based on a condition?",shortAnswer:"Use a set comprehension s = {x for x in s if not condition} or iterate over s.copy().",explanation:"Rebuilding the set with a comprehension is clean and pythonic. Alternatively, for x in s.copy(): allows calling s.remove(x) safely because the loop iterates over an independent clone.",hint:"Rebuild via comprehension or loop over a copy.",level:"moderate",codeExample:`s = {1, 2, 3, 4, 5, 6}
# Clean comprehension filtering:
s = {x for x in s if x % 2 != 0}
print(s)  # {1, 3, 5}`},{question:"What is the return value of set.remove(), set.discard(), and set.clear()?",shortAnswer:"All three methods return None (in-place mutations).",explanation:"Like all mutating container methods in standard Python, remove, discard, and clear return None to signify that the underlying object was modified in place.",hint:"All three return None.",level:"basic",codeExample:`s = {"A", "B"}
print(s.discard("A"))  # None
print(s.clear())        # None`},{question:"What happens if you try to remove an unhashable object using s.discard([1, 2])?",shortAnswer:"It raises TypeError: unhashable type: 'list'.",explanation:"Even though discard() does not raise a KeyError for missing elements, it still must compute hash(item) to check the hash table. Passing an unhashable list fails at the hash computation step.",hint:"discard still needs to compute hash(x).",level:"expert",codeExample:`s = {1, 2, 3}
try:
    s.discard([1, 2])
except TypeError as e:
    print(e)  # unhashable type: 'list'`},{question:"How can you drain an entire set element-by-element using a while loop?",shortAnswer:"while s: item = s.pop(); process(item).",explanation:"Because an empty set evaluates to False in boolean context (truthiness), while s: will pop and process items until the set is completely empty.",hint:"Use while s: combined with s.pop().",level:"basic",codeExample:`tasks = {"Task-A", "Task-B", "Task-C"}
while tasks:
    current = tasks.pop()
    print("Processing:", current)
print("All tasks completed. Set is now:", tasks)`},{question:"What is the difference between s.difference(other) and s.difference_update(other)?",shortAnswer:"s.difference(other) returns a NEW set; s.difference_update(other) mutates s in place and returns None.",explanation:"difference() creates a new third set containing elements present in s but absent from other. difference_update() removes those elements directly from s.",hint:"difference returns new; difference_update mutates in place.",level:"moderate",codeExample:`s1 = {1, 2, 3}
s2 = {2, 3, 4}
new_s = s1.difference(s2)  # s1 is still {1, 2, 3}
s1.difference_update(s2)   # s1 becomes {1}`},{question:"How do you safely remove a student ID from an active batch roster only if present?",shortAnswer:"Use active_roster.discard(student_id).",explanation:"discard() safely removes the student ID if found, and does nothing if the student was not enrolled, preventing application crashes.",hint:"Use discard() for defensive, crash-proof deletion.",level:"basic",codeExample:`roster = {"STU-101", "STU-102"}
roster.discard("STU-101")  # Removed
roster.discard("STU-999")  # Safe no-op`},{question:"Why is s.clear() better than reassigning s = set() when other variables share the set reference?",shortAnswer:"s.clear() clears the shared memory object in place; s = set() only rebinds the local variable name to a new object.",explanation:"If ref = s, calling s.clear() empties the shared set so ref is also empty. Writing s = set() rebinds s to a new set, leaving ref pointing to the old un-cleared set.",hint:"In-place mutation updates all shared aliases.",level:"expert",codeExample:`s = {1, 2, 3}
ref = s
s.clear()        # Both s and ref are now set()
print(ref)       # set()`},{question:"What is the output of: s = {1, 2, 3}; s.remove(2); s.discard(2); print(s)?",shortAnswer:"{1, 3}.",explanation:"s.remove(2) removes 2. Then s.discard(2) looks for 2, finds it absent, and does nothing silently. The final set is {1, 3}.",hint:"The second call to discard on 2 is a safe no-op.",level:"basic",codeExample:`s = {1, 2, 3}
s.remove(2)
s.discard(2)
print(s)  # {1, 3}`},{question:"Can set.remove() take multiple arguments: s.remove(1, 2)?",shortAnswer:"No, set.remove() takes exactly 1 argument (raises TypeError if multiple are passed).",explanation:"set.remove accepts exactly one parameter. To remove multiple elements, use difference_update([1, 2]) or -= {1, 2}.",hint:"remove() takes exactly one element.",level:"basic",codeExample:`s = {1, 2, 3}
# s.remove(1, 2)  # TypeError: set.remove() takes exactly one argument
s -= {1, 2}       # Correct!`},{question:"What error occurs if you call del s[0] on a set?",shortAnswer:"TypeError: 'set' object doesn't support item deletion.",explanation:"Because sets do not support index subscription or key mapping assignment, del s[0] fails with a TypeError. You must use s.remove(x) or s.discard(x).",hint:"del s[index] fails because sets have no indices.",level:"moderate",codeExample:`s = {10, 20}
try:
    del s[0]
except TypeError as e:
    print(e)  # 'set' object doesn't support item deletion`},{question:"What is the difference between del s and s.clear()?",shortAnswer:"del s deletes the variable name s from scope; s.clear() empties the elements inside the set while keeping the variable alive.",explanation:"After del s, referencing s raises a NameError. After s.clear(), s still exists as a valid empty set object set().",hint:"del destroys the variable; clear empties the container.",level:"basic",codeExample:`s = {1, 2}
s.clear()  # s is still defined as set()
del s      # s is completely deleted from namespace`},{question:"How does set.discard() simplify defensive code compared to try/except remove?",shortAnswer:"discard() eliminates 4 lines of boilerplate try/except KeyError handling with a clean 1-line call.",explanation:"Instead of writing try: s.remove(x) except KeyError: pass, calling s.discard(x) expresses the same intent in a single readable line.",hint:"discard replaces try: remove except KeyError: pass.",level:"basic",codeExample:`# Verbose:
try:
    s.remove(x)
except KeyError:
    pass

# Pythonic:
s.discard(x)`},{question:"What happens if you remove True from a set containing {1, 2, 3}?",shortAnswer:"1 is removed, leaving {2, 3}, because True == 1 and hash(True) == hash(1).",explanation:"Because True and 1 compare equal and have the same hash code, s.remove(True) matches and deletes the element 1 from the set.",hint:"True and 1 are identical in set lookups.",level:"expert",codeExample:`s = {1, 2, 3}
s.remove(True)
print(s)  # {2, 3}`},{question:"What happens if you remove 0 from a set containing {False, 'Kolkata'}?",shortAnswer:"False is removed, leaving {'Kolkata'}, because False == 0 and hash(False) == hash(0).",explanation:"Because 0 and False are numerically equal and share hash 0, s.remove(0) matches and deletes False.",hint:"0 and False are treated as identical elements.",level:"expert",codeExample:`s = {False, "Kolkata"}
s.remove(0)
print(s)  # {'Kolkata'}`},{question:"Can set.pop() be used to implement a non-deterministic task worker pool?",shortAnswer:"Yes, worker threads can pop jobs from a shared set until empty.",explanation:"Calling job = tasks.pop() extracts an arbitrary task in O(1) time without needing to track pointer indices.",hint:"pop() is great for draining a pool of unordered jobs.",level:"moderate",codeExample:`jobs = {"job_101", "job_102", "job_103"}
while jobs:
    exec_job = jobs.pop()`},{question:"What happens when you pass a set of elements to difference_update: s1.difference_update(s2)?",shortAnswer:"All elements present in s2 are removed from s1 in-place.",explanation:"s1 is mutated directly by removing any member that also exists in s2.",hint:"difference_update subtracts in place.",level:"basic",codeExample:`s1 = {"A", "B", "C"}
s2 = {"B", "C", "D"}
s1.difference_update(s2)
print(s1)  # {'A'}`},{question:"How do you remove all vowels from a set of characters?",shortAnswer:"char_set.difference_update('aeiouAEIOU') or char_set -= set('aeiouAEIOU').",explanation:"Passing the vowel string to difference_update unpacks all vowel characters and removes them from char_set in-place.",hint:"Use difference_update with the vowel string.",level:"basic",codeExample:`chars = set("barrackpore")
chars.difference_update("aeiou")
print(chars)  # {'b', 'r', 'c', 'k', 'p'}`},{question:"What is the memory impact of calling set.clear() on a 1,000,000 element set in CPython?",shortAnswer:"It deletes all elements and shrinks the internal hash table down to its minimal 8-slot array size, freeing memory.",explanation:"set.clear() deallocates the large hash table buffer and re-initializes a small 8-slot PySetObject struct, instantly releasing RAM back to Python's memory manager.",hint:"clear() releases the large allocated table memory.",level:"expert",codeExample:`import sys
s = set(range(100000))
print("Populated Size:", sys.getsizeof(s))  # ~4MB
s.clear()
print("Cleared Size:", sys.getsizeof(s))    # ~216 bytes`},{question:"Why does s -= [1, 2] raise a TypeError while s.difference_update([1, 2]) works?",shortAnswer:"The -= operator requires both operands to be sets; the difference_update() method accepts any iterable.",explanation:"Operators enforce strict type matching (both operands must be sets). Named methods accept any iterable (lists, tuples, ranges, etc.).",hint:"Operators require sets; methods accept any iterable.",level:"expert",codeExample:`s = {1, 2, 3}
# s -= [1, 2]               # TypeError
s.difference_update([1, 2]) # Valid! s becomes {3}`},{question:"What is the difference between removing an element from a set vs removing an element from a list?",shortAnswer:"Set removal is O(1) by value; list removal (list.remove(x)) is slow O(N) because it must scan and shift array memory.",explanation:"Removing from a list requires scanning elements sequentially O(N) and shifting all subsequent pointers. Removing from a set computes hash(x) and clears the bucket in O(1) without shifting any elements.",hint:"Set removal is O(1) without memory shifts; list removal is O(N).",level:"moderate",codeExample:`# Set:  s.remove(val)    -> O(1)
# List: l.remove(val)    -> O(N) (Linear search + array shift)`},{question:"How can you remove an element from a frozenset?",shortAnswer:"You cannot; frozenset is immutable and has no remove, discard, pop, or clear methods.",explanation:"frozenset objects cannot be mutated. To remove an item, you must construct a new frozenset: new_fs = frozenset(x for x in fs if x != target).",hint:"frozenset is completely immutable.",level:"moderate",codeExample:`fs = frozenset([1, 2, 3])
# fs.remove(2)  # AttributeError
new_fs = frozenset(x for x in fs if x != 2)`},{question:"What is the key takeaway for a Python developer regarding set removal methods?",shortAnswer:"Use .discard() for safe defensive deletions, .remove() when absence is an error, .pop() to drain queues, and .clear() to reset state.",explanation:"Choosing the correct deletion method ensures clean error boundaries, prevents unnecessary try/except blocks, and maintains robust, high-performance applications.",hint:"Match the removal tool to the requirement: Safe -> discard; Strict -> remove; Drain -> pop.",level:"basic",codeExample:`# Golden Removal Rule:
# Strict: s.remove(x)
# Safe:   s.discard(x)
# Drain:  s.pop()
# Reset:  s.clear()`}];function A(){const a=i.useRef([]),[o,l]=i.useState("comparison");i.useEffect(()=>{const s=new IntersectionObserver(r=>{r.forEach(d=>{d.isIntersecting&&d.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return a.current.forEach(r=>{r&&s.observe(r)}),()=>s.disconnect()},[]);const t=s=>{s&&!a.current.includes(s)&&a.current.push(s)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-emerald-500/30 selection:text-emerald-200",children:[e.jsx("style",{children:`
        .section-hidden {
          transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .section-visible {
          transform: translateY(0);
        }
      `}),e.jsxs("header",{ref:t,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-emerald-950/80 text-emerald-300 px-3 py-1 rounded-full border border-emerald-800/80 shadow-sm shadow-emerald-950/50",children:"Segment 2 • Module 002_006"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-sky-950/80 text-sky-300 px-3 py-1 rounded-full border border-sky-800/80 shadow-sm shadow-sky-950/50",children:"Topic 5"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Set Deletion & Cleanup"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Removing Elements: ",e.jsx("code",{className:"text-rose-400 font-mono",children:"remove()"}),", ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"discard()"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"pop()"}),", ",e.jsx("code",{className:"text-amber-400 font-mono",children:"clear()"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Mastering set deletion operations: strict removal with ",e.jsx("code",{className:"text-rose-400 font-mono",children:"KeyError"})," trapping, idempotent safe cleanup with ",e.jsx("code",{className:"text-emerald-400 font-mono",children:".discard()"}),", arbitrary extraction with ",e.jsx("code",{className:"text-sky-400 font-mono",children:".pop()"}),", and total reset with ",e.jsx("code",{className:"text-amber-400 font-mono",children:".clear()"}),"."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Safe Idempotent Deletion"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚠️ KeyError Trapping"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🎲 Arbitrary Extraction via pop()"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🧹 Memory Reset via clear()"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🗑️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The 4 Set Deletion Methods Compared"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"Python provides four distinct built-in methods for removing elements from a set. Understanding when each raises an exception vs when it acts silently is critical for writing robust, crash-free applications:"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/70 border border-rose-800/60 shadow-lg shadow-rose-950/30 transition-all duration-300 hover:border-rose-500",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-lg",children:[e.jsx("span",{children:"❌"})," s.remove(x)"]}),e.jsx("span",{className:"text-xs font-mono bg-rose-950 text-rose-300 px-2 py-0.5 rounded border border-rose-800",children:"Strict Deletion"})]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-2",children:["Deletes ",e.jsx("code",{className:"text-rose-300 font-mono",children:"x"}),". If ",e.jsx("code",{className:"text-rose-300 font-mono",children:"x"})," is absent, ",e.jsx("strong",{className:"text-rose-400",children:"RAISES KeyError!"})]}),e.jsx("div",{className:"text-xs font-mono text-slate-400",children:"Use when absence of the item represents a critical bug."})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/70 border border-emerald-800/60 shadow-lg shadow-emerald-950/30 transition-all duration-300 hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-lg",children:[e.jsx("span",{children:"🛡️"})," s.discard(x)"]}),e.jsx("span",{className:"text-xs font-mono bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800",children:"Safe Idempotent"})]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-2",children:["Deletes ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"x"}),". If absent, ",e.jsx("strong",{className:"text-emerald-400",children:"SILENT NO-OP"})," (Never crashes)."]}),e.jsx("div",{className:"text-xs font-mono text-slate-400",children:"Use for defensive cleanup without try/except blocks."})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/70 border border-sky-800/60 shadow-lg shadow-sky-950/30 transition-all duration-300 hover:border-sky-500",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sky-400 font-bold text-lg",children:[e.jsx("span",{children:"🎲"})," s.pop()"]}),e.jsx("span",{className:"text-xs font-mono bg-sky-950 text-sky-300 px-2 py-0.5 rounded border border-sky-800",children:"Arbitrary Pop"})]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-2",children:["Removes & returns an ",e.jsx("strong",{className:"text-sky-300",children:"arbitrary element"}),". If empty, raises ",e.jsx("strong",{className:"text-rose-400",children:"KeyError"}),"."]}),e.jsx("div",{className:"text-xs font-mono text-slate-400",children:"Use for draining task queues or picking worker items."})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/70 border border-amber-800/60 shadow-lg shadow-amber-950/30 transition-all duration-300 hover:border-amber-500",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-lg",children:[e.jsx("span",{children:"🧹"})," s.clear()"]}),e.jsx("span",{className:"text-xs font-mono bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-800",children:"Total Reset"})]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-2",children:["Empties all buckets in place, leaving ",e.jsx("code",{className:"text-amber-300 font-mono",children:"set()"})," with ",e.jsx("strong",{className:"text-white",children:"len = 0"}),"."]}),e.jsx("div",{className:"text-xs font-mono text-slate-400",children:"Use to recycle existing memory sets across loops."})]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"🔍"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Deletion Behaviors"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>l("comparison"),className:c("px-3 py-1.5 rounded-lg transition-all",o==="comparison"?"bg-emerald-900/50 text-emerald-300 border border-emerald-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"remove() vs discard()"}),e.jsx("button",{onClick:()=>l("popflow"),className:c("px-3 py-1.5 rounded-lg transition-all",o==="popflow"?"bg-sky-900/50 text-sky-300 border border-sky-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"pop() & clear() Mechanics"})]})]}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:o==="comparison"?e.jsxs("svg",{viewBox:"0 0 850 320",className:"w-full h-auto min-w-[650px] font-sans",children:[e.jsx("text",{x:"30",y:"35",fill:"#f8fafc",fontSize:"15",fontWeight:"bold",children:'Behavior When Deleting a Non-Existent Element: "UnknownCity"'}),e.jsx("rect",{x:"30",y:"65",width:"380",height:"220",rx:"10",fill:"#1e293b",stroke:"#ef4444",strokeWidth:"2"}),e.jsx("text",{x:"50",y:"95",fill:"#fca5a5",fontSize:"15",fontWeight:"bold",children:'s.remove("UnknownCity")'}),e.jsx("rect",{x:"50",y:"115",width:"340",height:"45",rx:"6",fill:"#450a0a",stroke:"#ef4444"}),e.jsx("text",{x:"65",y:"142",fill:"#fecaca",fontSize:"13",fontWeight:"bold",children:"💥 CRASH: KeyError: 'UnknownCity'"}),e.jsx("text",{x:"50",y:"185",fill:"#cbd5e1",fontSize:"12",children:'• Computes hash("UnknownCity").'}),e.jsx("text",{x:"50",y:"210",fill:"#cbd5e1",fontSize:"12",children:"• Inspects bucket → Finds item is absent."}),e.jsx("text",{x:"50",y:"235",fill:"#fca5a5",fontSize:"12",fontWeight:"bold",children:"• Immediately raises KeyError and terminates execution!"}),e.jsx("rect",{x:"440",y:"65",width:"380",height:"220",rx:"10",fill:"#1e293b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"460",y:"95",fill:"#34d399",fontSize:"15",fontWeight:"bold",children:'s.discard("UnknownCity")'}),e.jsx("rect",{x:"460",y:"115",width:"340",height:"45",rx:"6",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"475",y:"142",fill:"#a7f3d0",fontSize:"13",fontWeight:"bold",children:"🛡️ SAFE NO-OP: Returns None (Zero Error)"}),e.jsx("text",{x:"460",y:"185",fill:"#cbd5e1",fontSize:"12",children:'• Computes hash("UnknownCity").'}),e.jsx("text",{x:"460",y:"210",fill:"#cbd5e1",fontSize:"12",children:"• Inspects bucket → Finds item is absent."}),e.jsx("text",{x:"460",y:"235",fill:"#34d399",fontSize:"12",fontWeight:"bold",children:"• Silently exits without error. Program continues safely!"})]}):e.jsxs("svg",{viewBox:"0 0 850 320",className:"w-full h-auto min-w-[650px] font-sans",children:[e.jsx("text",{x:"30",y:"35",fill:"#f8fafc",fontSize:"15",fontWeight:"bold",children:"set.pop() vs set.clear() Internal Memory Actions"}),e.jsx("rect",{x:"30",y:"65",width:"380",height:"220",rx:"10",fill:"#1e293b",stroke:"#0ea5e9",strokeWidth:"1.5"}),e.jsx("text",{x:"50",y:"95",fill:"#38bdf8",fontSize:"15",fontWeight:"bold",children:"item = s.pop()  (Arbitrary Extraction)"}),e.jsx("rect",{x:"50",y:"115",width:"340",height:"45",rx:"6",fill:"#0c4a6e",stroke:"#0ea5e9"}),e.jsx("text",{x:"65",y:"142",fill:"#bae6fd",fontSize:"12",fontWeight:"bold",children:"Extracts 1st Occupied Bucket → Returns Element"}),e.jsx("text",{x:"50",y:"185",fill:"#cbd5e1",fontSize:"12",children:"• Removes 1 item from hash table."}),e.jsx("text",{x:"50",y:"210",fill:"#cbd5e1",fontSize:"12",children:"• Returns the extracted element to caller."}),e.jsx("text",{x:"50",y:"235",fill:"#fca5a5",fontSize:"12",fontWeight:"bold",children:"• Raises KeyError if set is already empty!"}),e.jsx("rect",{x:"440",y:"65",width:"380",height:"220",rx:"10",fill:"#1e293b",stroke:"#f59e0b",strokeWidth:"1.5"}),e.jsx("text",{x:"460",y:"95",fill:"#fbbf24",fontSize:"15",fontWeight:"bold",children:"s.clear()  (Total In-Place Reset)"}),e.jsx("rect",{x:"460",y:"115",width:"340",height:"45",rx:"6",fill:"#451a03",stroke:"#f59e0b"}),e.jsx("text",{x:"475",y:"142",fill:"#fde68a",fontSize:"12",fontWeight:"bold",children:"Deallocates all Buckets → Resets len(s) == 0"}),e.jsx("text",{x:"460",y:"185",fill:"#cbd5e1",fontSize:"12",children:"• Wipes all table elements in place."}),e.jsx("text",{x:"460",y:"210",fill:"#cbd5e1",fontSize:"12",children:"• Keeps existing memory object reference alive."}),e.jsx("text",{x:"460",y:"235",fill:"#34d399",fontSize:"12",fontWeight:"bold",children:"• 100% Safe even if set is already empty!"})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 space-y-8",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Python Code Labs"})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab A: KeyError Trapping in remove() vs Safe discard()"}),e.jsx(n,{fileModule:x,title:"remove_vs_discard.py",highlightLines:[6,12,19,23]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab B: Arbitrary Removal with pop() & Resetting with clear()"}),e.jsx(n,{fileModule:f,title:"pop_and_clear_demo.py",highlightLines:[6,11,20,26]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab C: Bulk Removal with difference_update() and -= Operator"}),e.jsx(n,{fileModule:u,title:"removal_edge_cases.py",highlightLines:[16,20]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab D: Real-World Student Deregistration & Tuition Refund in ₹"}),e.jsx(n,{fileModule:b,title:"student_deregistration.py",highlightLines:[12,19,24]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Industry Applications in West Bengal"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🎓"})," 1. Defensive Student Deregistration"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["When student roll numbers withdraw from course batches in ",e.jsx("strong",{children:"Barrackpore"}),", calling ",e.jsx("code",{className:"font-mono text-emerald-400",children:"roster.discard(student_id)"})," processes refunds (",e.jsx("strong",{className:"text-emerald-300",children:"₹4,500/student"}),") defensively without crashing if the student was already removed."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"⚙️"})," 2. Worker Queue Task Draining"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Background processing daemons drain incoming PDF generation jobs using ",e.jsx("code",{className:"font-mono text-sky-400",children:"while job_set: job = job_set.pop()"}),", processing asynchronous invoices in rapid O(1) steps until the set is completely empty."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🔐"})," 3. Revoking Granular API Scopes"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Authentication microservices revoke expired permission scopes using ",e.jsx("code",{className:"font-mono text-purple-400",children:"user_scopes -= revoked_scopes"}),", adjusting access permissions in real time in ",e.jsx("strong",{children:"Kolkata"})," tech hubs."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🧹"})," 4. User Session Cache Recycling"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["High-throughput web servers reset active user session sets on user logout using ",e.jsx("code",{className:"font-mono text-amber-400",children:"active_tokens.clear()"}),", reclaiming memory immediately without creating new object references."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Pitfalls & Tricky Deletion Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 1: Unhandled KeyError in remove()"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Calling ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:'s.remove("absent_item")'})," crashes with ",e.jsx("code",{className:"text-rose-400 font-bold",children:"KeyError"}),". Use ",e.jsx("code",{className:"font-mono text-emerald-400",children:'s.discard("absent_item")'})," whenever absence is expected or harmless."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 2: Popping from Empty Set"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Calling ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"set().pop()"})," raises ",e.jsx("code",{className:"text-rose-400 font-bold",children:"KeyError: 'pop from an empty set'"}),". Always verify ",e.jsx("code",{className:"font-mono text-emerald-400",children:"if my_set:"})," before calling pop()."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 3: Reassigning to None"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:[e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:'s = s.discard("A")'})," destroys ",e.jsx("code",{className:"font-mono text-white",children:"s"})," by setting it to ",e.jsx("code",{className:"font-mono text-rose-400",children:"None"}),". Call deletion methods as standalone statements!"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 4: del s[0] Syntax Error"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Writing ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"del s[0]"})," fails with ",e.jsx("code",{className:"text-rose-400 font-bold",children:"TypeError: 'set' object doesn't support item deletion"})," because sets have no indices."]})]})]})]}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(m,{content:v,title:"Topic 5: Removing Elements Study Guide",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Study Note",downloadFileName:"topic5_removing_elements_note.txt"})}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(p,{title:"Topic 5 • Removing Elements: Master Viva & Review Questions",questions:y})}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(h,{note:"Teacher's Golden Rule for Deletions: If you aren't 100% sure whether an item exists in the set, default to .discard()—it guarantees your program will never crash with a KeyError! Use .remove() only when an element's absence indicates a serious bug in your business logic. When Susmita and Debangshu process student batch dropouts in Barrackpore, .discard() is your safest guardian!"})})]})]})}export{A as default};
