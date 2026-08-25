import{b as o,j as e,bg as d}from"./vendor-react-core-Doz9nIC6.js";import{P as r}from"./PythonFileLoader-hCi5osN-.js";import{P as m}from"./PlainTextPrint-C08xhKA4.js";import{F as h}from"./FAQTemplate-CkSqDH4B.js";import{T as p}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const x=`# ====================================================================\r
# Module: 002_007_string-processing\r
# Topic 1: String immutability & memory representation\r
# File: immutability_basics_and_id.py\r
# Description: Demonstrating string immutability, TypeError on mutation, and memory id() tracking\r
# ====================================================================\r
\r
# 1. Strings are Immutable in Memory\r
student_name = "Susmita"\r
print("Initial student name:", student_name)\r
print("Initial memory address (id):", id(student_name))\r
\r
# 2. Attempting in-place item assignment raises TypeError!\r
try:\r
    # Trying to change first letter 'S' to lowercase 's'\r
    student_name[0] = 's'\r
except TypeError as error:\r
    print("\\n--- TypeError Caught ---")\r
    print("Error details:", error)\r
    print("Explanation: Strings cannot be modified in-place.")\r
\r
# 3. Variable Rebinding vs Object Mutation\r
# When you 'modify' a string, Python allocates a completely NEW object\r
student_name = student_name + " Roy"\r
print("\\nRebound student name:", student_name)\r
print("New memory address (id):", id(student_name))\r
\r
# 4. Modifying via Slicing and Reconstruction\r
original_city = "barrackpore"\r
capitalized_city = "B" + original_city[1:]\r
print("\\nOriginal city:", original_city, "| ID:", id(original_city))\r
print("Capitalized city:", capitalized_city, "| ID:", id(capitalized_city))\r
`,u=`# ====================================================================\r
# Module: 002_007_string-processing\r
# Topic 1: String immutability & memory representation\r
# File: string_interning_and_identity.py\r
# Description: Demonstrating String Interning, sys.intern(), and 'is' vs '==' comparison\r
# ====================================================================\r
\r
import sys\r
\r
# 1. Automatic Interning of Identifiers / Short Literals\r
# Strings containing only alphanumeric characters and underscores are automatically interned by CPython\r
center_1 = "barrackpore_hub"\r
center_2 = "barrackpore_hub"\r
\r
print("--- Automatic Interning ---")\r
print("center_1 == center_2 (Value equality):", center_1 == center_2)\r
print("center_1 is center_2 (Memory identity):", center_1 is center_2)\r
print("ID 1:", id(center_1), "| ID 2:", id(center_2))\r
\r
# 2. Dynamically Created Strings with Special Characters\r
# Dynamically constructed strings with spaces are usually NOT automatically interned\r
name_part1 = "Coder & "\r
name_part2 = "AccoTax"\r
full_name_dynamic = name_part1 + name_part2\r
full_name_literal = "Coder & AccoTax"\r
\r
print("\\n--- Non-Interned Dynamic String ---")\r
print("full_name_dynamic == full_name_literal:", full_name_dynamic == full_name_literal)\r
print("full_name_dynamic is full_name_literal:", full_name_dynamic is full_name_literal)\r
print("Dynamic ID:", id(full_name_dynamic))\r
print("Literal ID:", id(full_name_literal))\r
\r
# 3. Explicit Interning with sys.intern()\r
# Forces Python to store and reuse string from internal global intern table\r
interned_dynamic = sys.intern(full_name_dynamic)\r
interned_literal = sys.intern(full_name_literal)\r
\r
print("\\n--- Explicit sys.intern() ---")\r
print("interned_dynamic is interned_literal:", interned_dynamic is interned_literal)\r
print("Shared Interned ID:", id(interned_dynamic))\r
`,g=`# ====================================================================\r
# Module: 002_007_string-processing\r
# Topic 1: String immutability & memory representation\r
# File: concatenation_vs_join_benchmark.py\r
# Description: Benchmarking O(N^2) loop += concatenation vs O(N) ''.join()\r
# ====================================================================\r
\r
import time\r
\r
# List of 50,000 student fee transaction tokens in Barrackpore center\r
records_count = 50000\r
tokens = [f"TXN_{i:06d}_FEE_₹4500\\n" for i in range(records_count)]\r
\r
# Method 1: Naive Inefficient Concatenation using += in loop (O(N^2))\r
start_time_naive = time.perf_counter()\r
naive_buffer = ""\r
for token in tokens[:15000]: # Capped to 15,000 to prevent severe slowdown\r
    naive_buffer += token\r
end_time_naive = time.perf_counter()\r
duration_naive = end_time_naive - start_time_naive\r
\r
# Method 2: High-Speed Industry Standard ''.join() (O(N))\r
start_time_join = time.perf_counter()\r
join_buffer = "".join(tokens[:15000])\r
end_time_join = time.perf_counter()\r
duration_join = end_time_join - start_time_join\r
\r
print("--- Performance Comparison (15,000 String Concatenations) ---")\r
print(f"1. Naive '+=' Loop: {duration_naive * 1000:.2f} ms")\r
print(f"2. Fast ''.join():  {duration_join * 1000:.2f} ms")\r
if duration_join > 0:\r
    speedup = duration_naive / duration_join\r
    print(f"\\n=> ''.join() is ~{speedup:.1f}x faster due to single-pass memory allocation!")\r
`,b=`# ====================================================================\r
# Module: 002_007_string-processing\r
# Topic 1: String immutability & memory representation\r
# File: immutable_audit_log_system.py\r
# Description: Real-world immutable transaction ledger & audit trail for student fees in Rupees (₹)\r
# ====================================================================\r
\r
import hashlib\r
import time\r
\r
class ImmutableAuditLog:\r
    """\r
    Demonstrates leveraging string immutability to build tamper-evident\r
    audit logs for student tuition payments at Coder & AccoTax Barrackpore.\r
    """\r
    def __init__(self):\r
        # A tuple of immutable log string entries\r
        self._ledger = ()\r
\r
    def add_transaction(self, student_name: str, course: str, fee_in_rupees: int):\r
        timestamp = time.strftime("%Y-%m-%d %H:%M:%S")\r
        # Build immutable entry string\r
        entry = f"[{timestamp}] Student: {student_name} | Course: {course} | Paid: ₹{fee_in_rupees:,d}"\r
        \r
        # Calculate cryptographic hash of the string\r
        entry_hash = hashlib.sha256(entry.encode('utf-8')).hexdigest()[:16]\r
        signed_entry = f"{entry} | HASH: {entry_hash}"\r
        \r
        # Rebind immutable tuple with new string\r
        self._ledger = self._ledger + (signed_entry,)\r
\r
    def display_ledger(self):\r
        print("=== IMMUTABLE STUDENT FEE AUDIT LEDGER (BARRACKPORE CENTER) ===")\r
        for record in self._ledger:\r
            print(record)\r
        print("Total Records:", len(self._ledger))\r
\r
\r
# Simulation for Kolkata & Barrackpore Students\r
ledger = ImmutableAuditLog()\r
ledger.add_transaction("Susmita Roy", "Python Pro", 4500)\r
ledger.add_transaction("Debangshu Mukherjee", "FastAPI Mastery", 6000)\r
ledger.add_transaction("Mamata Sharma", "Fullstack Web", 8500)\r
\r
ledger.display_ledger()\r
`,y=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
            PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_007: STRING PROCESSING\r
        TOPIC 1: STRING IMMUTABILITY & MEMORY REPRESENTATION IN CPYTHON\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. WHAT IS IMMUTABILITY?\r
--------------------------------------------------------------------------------\r
  • A string in Python is an IMMUTABLE sequence. Once created in memory, its\r
    contents cannot be modified, resized, or overwritten in place.\r
  • Attempting item assignment raises a fatal TypeError:\r
      s = "Kolkata"\r
      s[0] = "k"   # Raises TypeError: 'str' object does not support item assignment\r
  • To change a string, you must construct a BRAND NEW string object in memory.\r
\r
--------------------------------------------------------------------------------\r
2. VARIABLE REBINDING VS OBJECT MUTATION\r
--------------------------------------------------------------------------------\r
  • Beginners often confuse variable rebinding with mutation:\r
      city = "Barrackpore"\r
      old_id = id(city)\r
      city = city + " North"\r
      new_id = id(city)\r
  • Here, the original object "Barrackpore" was NOT mutated. A brand-new string\r
    "Barrackpore North" was allocated at a different memory address (new_id != old_id),\r
    and the variable name 'city' was rebound (pointed) to the new object.\r
\r
--------------------------------------------------------------------------------\r
3. CPYTHON STRING MEMORY ARCHITECTURE (PEP 393)\r
--------------------------------------------------------------------------------\r
  Python 3.3+ uses the Flexible String Representation (PEP 393):\r
  • 1-byte per character (Latin-1 / ASCII): If max codepoint < 256\r
  • 2-bytes per character (UCS-2): If max codepoint < 65,536 (e.g. Devanagari, Bengali)\r
  • 4-bytes per character (UCS-4): If max codepoint >= 65,536 (e.g. Emojis 🚀)\r
  • This delivers massive memory savings compared to allocating 4 bytes for every ASCII char.\r
\r
--------------------------------------------------------------------------------\r
4. STRING INTERNING (sys.intern)\r
--------------------------------------------------------------------------------\r
  • String Interning is a memory optimization where CPython reuses a single\r
    shared memory object for identical string literals (especially valid Python identifiers).\r
  • For interned strings:\r
      a = "susmita_student"\r
      b = "susmita_student"\r
      a is b   # True! (Both point to the EXACT same memory address)\r
  • Manual interning via sys.intern() speeds up dictionary lookups by enabling\r
    pointer comparison (O(1)) instead of character-by-character comparison (O(N)).\r
\r
--------------------------------------------------------------------------------\r
5. PERFORMANCE: LOOP CONCATENATION VS ''.join()\r
--------------------------------------------------------------------------------\r
  • BAD PRACTICE (O(N^2) Complexity):\r
      s = ""\r
      for word in word_list:\r
          s += word   # Allocates new memory buffer & copies all data on EVERY step!\r
  • BEST PRACTICE (O(N) Complexity):\r
      s = "".join(word_list)  # Pre-computes total size, allocates memory ONCE!\r
\r
--------------------------------------------------------------------------------\r
6. WHY IMMUTABILITY MATTERS (SECURITY & HASHABILITY)\r
--------------------------------------------------------------------------------\r
  1. Hash Stability: Strings can be safely used as Dictionary keys and Set items.\r
  2. Thread Safety: Immutable objects are inherently free from race conditions.\r
  3. Security: String arguments (file paths, database passwords, tokens) cannot\r
     be maliciously altered by secondary functions after validation.\r
\r
================================================================================\r
        END OF STUDY NOTE • TOPIC 1: STRING IMMUTABILITY & MEMORY ARCHITECTURE\r
================================================================================\r
`,f=[{question:"What does it mean that Python strings are 'immutable'?",shortAnswer:"Once a string object is created in memory, its characters and size cannot be modified, replaced, or deleted in place.",explanation:"Any operation that appears to alter a string (such as concatenation, replace, or slicing) actually allocates and returns a brand-new string object in memory.",hint:"Think of an immutable object as read-only memory.",level:"basic",codeExample:`s = 'Kolkata'
# s[0] = 'k'  # Raises TypeError: 'str' object does not support item assignment`},{question:"What error is raised if you execute s[0] = 'A' on an existing string s = 'hello'?",shortAnswer:"TypeError: 'str' object does not support item assignment.",explanation:"Because Python strings do not implement the __setitem__ method, attempting to assign a value to an index raises a TypeError at runtime.",hint:"Strings do not support in-place item assignment.",level:"basic",codeExample:`s = 'hello'
try:
    s[0] = 'H'
except TypeError as e:
    print(e)  # 'str' object does not support item assignment`},{question:"If strings are immutable, why does s = 'Hello'; s = s + ' World' work without error?",shortAnswer:"The variable 's' is rebound to a brand-new string object; the original 'Hello' string is not mutated.",explanation:"Variables in Python are pointers (references) to objects. The operation s + ' World' creates a new string 'Hello World' at a new memory address, and 's' is reassigned to point to that new address.",hint:"Variable reassignment (rebinding) is different from object mutation.",level:"basic",codeExample:`s = 'Hello'
addr1 = id(s)
s = s + ' World'
addr2 = id(s)
print(addr1 == addr2)  # False (New memory address!)`},{question:"What built-in function reveals the unique memory address of a string object in CPython?",shortAnswer:"The id() function.",explanation:"id(obj) returns the identity of an object, which corresponds to its actual memory address in CPython.",hint:"Use id(x).",level:"basic",codeExample:`name = 'Susmita'
print(id(name))  # e.g., 140294820192`},{question:"What is the difference between '==' and 'is' when comparing two strings?",shortAnswer:"'==' checks for value equality; 'is' checks for memory identity (exact same object).",explanation:"'==' invokes the __eq__ method to compare character sequences. 'is' checks whether id(a) == id(b) (whether both variables point to the exact same memory location).",hint:"Equality compares contents; identity compares memory addresses.",level:"basic",codeExample:`a = 'Coder'
b = ''.join(['C', 'o', 'd', 'e', 'r'])
print(a == b)  # True (Same characters)
print(a is b)  # Might be False (Different memory objects)`},{question:"What is String Interning in Python?",shortAnswer:"An optimization where CPython reuses a single shared memory object for identical string literals.",explanation:"String interning stores only one copy of each distinct string value in an internal dictionary, saving memory and speeding up dictionary lookups.",hint:"Interning shares one memory copy for identical strings.",level:"moderate",codeExample:`x = 'python_3'
y = 'python_3'
print(x is y)  # True (Automatically interned identifier)`},{question:"Which types of strings are automatically interned by CPython?",shortAnswer:"String literals that look like valid Python identifiers (alphanumeric characters and underscores).",explanation:"CPython automatically interns short string constants and identifier-like strings to accelerate dictionary key comparisons during attribute lookup.",hint:"Identifier-like names without spaces or special symbols.",level:"moderate",codeExample:`a = 'barrackpore'
b = 'barrackpore'
print(a is b)  # True`},{question:"How can you manually force Python to intern a dynamically computed string?",shortAnswer:"Using the sys.intern() function from the sys module.",explanation:"sys.intern(string) adds the string to the internal interned pool (or returns the existing interned copy), ensuring pointer-level identity comparison.",hint:"Import sys and call sys.intern().",level:"moderate",codeExample:`import sys
s1 = sys.intern('custom token with spaces')
s2 = sys.intern('custom token with spaces')
print(s1 is s2)  # True`},{question:"What is PEP 393 and how did it revolutionize Python 3 string memory representation?",shortAnswer:"PEP 393 introduced Flexible String Representation, allocating 1, 2, or 4 bytes per character based on the maximum codepoint in the string.",explanation:"Before PEP 393, Python built with UCS-4 allocated 4 bytes for every character (even pure ASCII). PEP 393 uses 1 byte for ASCII/Latin-1 (codepoints < 256), 2 bytes for UCS-2 (< 65536), and 4 bytes only when necessary (UCS-4).",hint:"Adaptive 1-byte, 2-byte, or 4-byte encoding per string.",level:"expert",codeExample:`import sys
# Pure ASCII: 1 byte per char
print(sys.getsizeof('abc'))      # ~52 bytes (compact header + 3 bytes)
# Unicode Rupee: 2 bytes per char
print(sys.getsizeof('₹₹₹'))      # ~78 bytes`},{question:"Why is concatenating strings inside a loop using '+=' considered an anti-pattern?",shortAnswer:"It has O(N^2) time complexity because each concatenation creates and copies a new string in memory.",explanation:"Because strings cannot be resized in-place, each += creates a new buffer, copies all preceding characters, and re-allocates memory, leading to quadratic time complexity.",hint:"Each += copies the whole string again, leading to O(N^2).",level:"moderate",codeExample:`# Anti-pattern:
s = ''
for word in words:
    s += word

# Best practice:
s = ''.join(words)`},{question:"Why is str.join() significantly faster than loop concatenation?",shortAnswer:"join() calculates the total required memory upfront and allocates the output buffer in a single pass (O(N)).",explanation:"join() loops over the collection once to calculate total character count, allocates one exact memory block, and copies elements directly without intermediate garbage collection.",hint:"join() calculates length upfront and allocates memory once.",level:"moderate",codeExample:`words = ['Coder', 'and', 'AccoTax', 'Barrackpore']
result = ' '.join(words)  # Fast O(N) allocation
print(result)`},{question:"Can a string be used as a key in a Python dictionary? Why or why not?",shortAnswer:"Yes, because strings are immutable and therefore hashable.",explanation:"Dictionary keys must implement __hash__() and have a hash value that never changes during their lifetime. Because strings are immutable, their hash remains constant.",hint:"Immutability guarantees fixed hash values.",level:"basic",codeExample:`user_scores = {'Susmita': 95, 'Debangshu': 92}
print(user_scores['Susmita'])  # 95`},{question:"What happens to the hash value of a string after it is created?",shortAnswer:"It is calculated once upon request and cached in the string object header for instantaneous O(1) reuse.",explanation:"CPython caches the computed hash in the PyASCIIObject struct, making subsequent dictionary lookups blistering fast.",hint:"CPython computes and caches the hash.",level:"expert",codeExample:`s = 'Barrackpore'
print(hash(s))
print(hash(s))  # Retrieved instantly from cache`},{question:"How does string immutability benefit multithreaded Python applications?",shortAnswer:"Immutable objects are inherently thread-safe because multiple threads can read them simultaneously without locks or race conditions.",explanation:"Since no thread can mutate the data of a string in-place, read access requires no mutex locks, eliminating data corruption risks.",hint:"No mutation means no race conditions during concurrent reads.",level:"moderate",codeExample:`# Multiple worker threads can safely read shared config strings
API_ENDPOINT = 'https://api.codernaccotax.co.in/v1'`},{question:"What does sys.getsizeof(string) return?",shortAnswer:"The total memory in bytes occupied by the string object, including its CPython PyObject header and character buffer.",explanation:"In CPython, an empty string object takes approximately 49-50 bytes due to struct metadata (reference count, type pointer, length, hash, encoding flags).",hint:"Measures struct header plus character bytes in memory.",level:"moderate",codeExample:`import sys
print(sys.getsizeof(''))   # ~49 bytes (CPython header)
print(sys.getsizeof('A'))  # ~50 bytes (Header + 1 byte ASCII)`},{question:"How can you modify the 3rd character of a string 'Kolkata' to 'X' without raising an error?",shortAnswer:"By slicing and concatenating into a new string: s[:2] + 'X' + s[3:].",explanation:"Since in-place modification is impossible, slice before and after the target index and combine them with the replacement character.",hint:"Use slicing: s[:i] + new_char + s[i+1:].",level:"basic",codeExample:`s = 'Kolkata'
new_s = s[:2] + 'X' + s[3:]
print(new_s)  # KoXkata`},{question:"Is it possible for two distinct string variables with identical content to have different id() values?",shortAnswer:"Yes, if they are created dynamically and not interned by CPython.",explanation:"Dynamic string operations create distinct memory objects unless explicitly interned or optimized by the compiler.",hint:"Non-interned dynamic strings have distinct id() addresses.",level:"moderate",codeExample:`s1 = 'Hello World!'
s2 = 'Hello ' + 'World!'
print(s1 == s2)  # True
# In interactive REPL, s1 is s2 may be False`},{question:"Does the bytearray or list data structure allow in-place character modification in Python?",shortAnswer:"Yes, both bytearray and list of characters are mutable sequences that support in-place item assignment.",explanation:"If high-performance in-place character mutation is required, convert the string to a bytearray or list, modify elements, and convert back.",hint:"Use bytearray or list(s) for in-place edits.",level:"moderate",codeExample:`chars = list('Ichapur')
chars[0] = 'E'
print(''.join(chars))  # Echapur`},{question:"What optimization does CPython apply for empty strings ''?",shortAnswer:"CPython maintains a single singleton empty string object; all empty strings share the exact same id().",explanation:"Every instance of '' in Python points to the exact same singleton object Py_EMPTY_STRING.",hint:"Empty strings are global singletons.",level:"expert",codeExample:`a = ''
b = str()
print(a is b)  # True (Exact same singleton object)`},{question:"What optimization does CPython apply for 1-character Latin-1 strings (ASCII 0-255)?",shortAnswer:"CPython pre-allocates and caches all 256 single-byte 1-character strings as singletons.",explanation:"Any 1-character Latin-1 string (like 'a', 'Z', '9') refers to a pre-allocated singleton in CPython's static array.",hint:"All 256 single Latin-1 characters are cached singletons.",level:"expert",codeExample:`c1 = chr(65)  # 'A'
c2 = 'A'
print(c1 is c2)  # True (Cached singleton)`},{question:"Why does string slicing s[1:4] create a new string object in CPython?",shortAnswer:"Because strings are immutable, slicing creates a new sub-string with its own character buffer and header.",explanation:"Unlike NumPy arrays or memoryviews which create zero-copy views, Python string slices allocate a new string object in memory.",hint:"Standard string slicing always allocates a new string.",level:"moderate",codeExample:`s = 'Barrackpore'
sub = s[0:7]
print(id(s) == id(sub))  # False`},{question:"How does the 'memoryview' object provide zero-copy buffer access for binary strings (bytes)?",shortAnswer:"memoryview creates a view pointing directly to the existing buffer memory without allocating a new copy.",explanation:"memoryview works with bytes and bytearrays to slice and manipulate buffer memory with zero copy overhead.",hint:"memoryview provides zero-copy buffer slicing on bytes.",level:"expert",codeExample:`data = b'CoderAccoTax2026'
view = memoryview(data)[0:5]
print(view.tobytes())  # b'Coder'`},{question:"What is the memory impact of storing 1,000,000 duplicate customer city names 'Kolkata' in a list without interning?",shortAnswer:"A list of 1,000,000 pointers will all point to the same interned string object, taking very little extra memory for string data.",explanation:"Because Python string literals are interned, all 1,000,000 list elements hold references (8 bytes each) to the same single 'Kolkata' string object in memory.",hint:"List stores 1,000,000 references to one shared string object.",level:"moderate",codeExample:`cities = ['Kolkata'] * 1000000
print(cities[0] is cities[999999])  # True (Single shared string)`},{question:"What is the CPython struct type that represents pure ASCII strings internally?",shortAnswer:"PyASCIIObject.",explanation:"PyASCIIObject is the base struct in CPython for compact ASCII strings without legacy UTF-8 pointers or UCS-2/4 buffers.",hint:"PyASCIIObject represents compact ASCII strings in C.",level:"expert",codeExample:"# Defined in Include/cpython/unicodeobject.h in CPython source"},{question:"Why can't you mutate a string by passing it into a function?",shortAnswer:"Because Python uses call-by-object-reference; since the string object is immutable, the function cannot modify it in place.",explanation:"Any assignment inside the function merely rebinds the local parameter name to a new object, leaving the caller's original string intact.",hint:"Functions receive references to immutable objects.",level:"basic",codeExample:`def clean_name(name):
    name = name.strip()  # Rebinds local variable 'name'
    return name

user = '  Susmita  '
clean_name(user)
print(repr(user))  # '  Susmita  ' (Unchanged!)`},{question:"What is the difference between string interning and string pooling in Python?",shortAnswer:"They refer to the exact same concept: caching and reusing unique string instances in a central hash table.",explanation:"The terms 'interning' and 'string pooling' are used interchangeably across Python and Java virtual machines.",hint:"Interning and pooling are synonyms.",level:"basic",codeExample:"# sys.intern() manages the string intern pool"},{question:"How does string immutability protect security-sensitive code (e.g. database credentials or file paths)?",shortAnswer:"Once a security check validates a string path or token, no concurrent thread or malicious function can tamper with it before use.",explanation:"If strings were mutable, a malicious thread could change a validated file path '/safe/path.txt' to '/etc/passwd' after validation passed (Time-of-check to time-of-use vulnerability).",hint:"Prevents TOCTOU (Time-of-check to time-of-use) attacks.",level:"expert",codeExample:`# Validated token string cannot be changed behind the scenes
token = validate_token(request_header)`},{question:"What happens when you use 'a += b' in CPython when there are no other references to 'a'?",shortAnswer:"CPython attempts an in-place buffer resize optimization (realloc) if refcount == 1.",explanation:"As an internal CPython optimization, if the reference count of 'a' is exactly 1, CPython may resize the buffer in-place to improve += performance, though developers should never rely on this behavior.",hint:"CPython optimizes += if refcount is 1, but it is an implementation detail.",level:"expert",codeExample:"# Implementation optimization in CPython; do not rely on it for production loops"},{question:"How can you inspect the reference count of a string object in Python?",shortAnswer:"Using sys.getrefcount(obj).",explanation:"sys.getrefcount(obj) returns the number of active references pointing to that object (including the temporary reference passed to getrefcount).",hint:"Use sys.getrefcount(x).",level:"moderate",codeExample:`import sys
name = 'UniqueStringToken_2026'
print(sys.getrefcount(name))  # At least 2 (name + argument to getrefcount)`},{question:"What is the ultimate golden rule for string construction in production Python pipelines?",shortAnswer:"Accumulate string chunks in a list and combine them once using ''.join(list).",explanation:"Accumulating strings in a dynamic list and joining them at the end ensures O(N) linear time complexity, minimal memory allocations, and optimal garbage collection performance.",hint:"Collect in a list -> ''.join(list).",level:"basic",codeExample:`# Golden rule:
chunks = []
for item in records:
    chunks.append(format_record(item))
output = ''.join(chunks)`}];function k(){const i=o.useRef([]),[a,l]=o.useState("rebinding");o.useEffect(()=>{const n=new IntersectionObserver(s=>{s.forEach(c=>{c.isIntersecting&&c.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return i.current.forEach(s=>{s&&n.observe(s)}),()=>n.disconnect()},[]);const t=n=>{n&&!i.current.includes(n)&&i.current.push(n)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-purple-500/30 selection:text-purple-200",children:[e.jsx("style",{children:`
        .section-hidden {
          transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .section-visible {
          transform: translateY(0);
        }
        @keyframes pulseGlow {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(168, 85, 247, 0.4)); }
          50% { filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.8)); }
        }
        .animate-glow {
          animation: pulseGlow 3s infinite ease-in-out;
        }
      `}),e.jsxs("header",{ref:t,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-purple-950/80 text-purple-300 px-3 py-1 rounded-full border border-purple-800/80 shadow-sm shadow-purple-950/50",children:"Segment 2 • Module 002_007"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-indigo-950/80 text-indigo-300 px-3 py-1 rounded-full border border-indigo-800/80 shadow-sm shadow-indigo-950/50",children:"Topic 1"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"String Processing & Pattern Handling"})]}),e.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:"String Immutability & Memory Representation"}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Uncovering CPython's internal memory architecture (PEP 393), pointer rebinding vs mutation, string interning (",e.jsx("code",{className:"text-purple-400 font-mono",children:"sys.intern"}),"), and ",e.jsx("span",{className:"text-emerald-400 font-semibold",children:"O(N)"})," memory allocation strategies."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔒 Strictly Immutable"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🧠 CPython Memory Layout (PEP 393)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ String Interning (sys.intern)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🚀 join() vs += Complexity"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🔒"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. What is String Immutability?"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["In Python, strings are ",e.jsx("strong",{className:"text-white",children:"immutable sequences"}),". Once a string object is created in memory, its character contents, encoding flags, and size ",e.jsx("strong",{className:"text-purple-400",children:"can never be modified, resized, or overwritten in place"}),"."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg shadow-purple-950/30 transition-all duration-300 hover:scale-[1.01] hover:border-purple-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"❌"})," In-Place Mutation is Blocked"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Attempting to change a character like ",e.jsx("code",{className:"text-rose-300 font-mono",children:"s[0] = 'K'"})," instantly raises ",e.jsx("code",{className:"text-rose-400 font-mono",children:"TypeError: 'str' object does not support item assignment"}),"."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-indigo-950/40 border border-indigo-800/60 shadow-lg shadow-indigo-950/30 transition-all duration-300 hover:scale-[1.01] hover:border-indigo-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-indigo-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"🔄"})," Rebinding Creates New Objects"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Writing ",e.jsx("code",{className:"text-indigo-300 font-mono",children:'s = s + " World"'})," does not modify the original string; it allocates a brand-new string object at a new memory address (",e.jsx("code",{className:"text-indigo-300 font-mono",children:"id(s)"})," changes)."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-purple-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-2",children:"Why Did Python Designers Make Strings Immutable?"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1.5 text-sm sm:text-base text-slate-300",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-white",children:"Hash Stability (Dictionary Keys & Sets):"})," Because strings cannot change, their hash value is immutable and computed only once, making dictionary lookups blistering fast and reliable."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-white",children:"Thread Safety:"})," Immutable strings can be read concurrently by dozens of threads without mutex locks or race condition risks."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-white",children:"Security & Sandboxing:"})," File paths, database connection URLs, and auth tokens passed to operating system calls cannot be maliciously modified by untrusted code after validation."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-white",children:"Memory Efficiency (String Interning):"})," Identical string literals can safely share the same memory address across the entire application runtime."]})]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"🔍"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing CPython Memory: Rebinding & Interning"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>l("rebinding"),className:d("px-3 py-1.5 rounded-lg transition-all",a==="rebinding"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Pointer Rebinding"}),e.jsx("button",{onClick:()=>l("interning"),className:d("px-3 py-1.5 rounded-lg transition-all",a==="interning"?"bg-indigo-900/50 text-indigo-300 border border-indigo-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"String Interning & PEP 393"})]})]}),e.jsxs("p",{className:"text-slate-300 mb-6 text-base",children:["In CPython, variable names are simply pointers to heap-allocated ",e.jsx("code",{className:"font-mono text-purple-400",children:"PyASCIIObject"})," structures."]}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:a==="rebinding"?e.jsxs("svg",{viewBox:"0 0 850 360",className:"w-full h-auto min-w-[650px] font-sans",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"gradPurple",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#a855f7",stopOpacity:"0.9"}),e.jsx("stop",{offset:"100%",stopColor:"#7e22ce",stopOpacity:"0.9"})]})}),e.jsx("text",{x:"30",y:"35",fill:"#94a3b8",fontSize:"13",fontWeight:"bold",children:"1. STACK (VARIABLE REFERENCE)"}),e.jsx("rect",{x:"30",y:"65",width:"180",height:"75",rx:"8",fill:"#1e293b",stroke:"#a855f7",strokeWidth:"2"}),e.jsx("text",{x:"45",y:"95",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"Variable: name"}),e.jsx("text",{x:"45",y:"120",fill:"#94a3b8",fontSize:"12",children:"Initially points to: 0x10A"}),e.jsx("rect",{x:"30",y:"170",width:"180",height:"130",rx:"8",fill:"#090d16",stroke:"#475569",strokeWidth:"1"}),e.jsx("text",{x:"42",y:"195",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",children:"Rebinding Statement:"}),e.jsx("text",{x:"42",y:"220",fill:"#f8fafc",fontSize:"12",fontStyle:"italic",children:'name = name + " Roy"'}),e.jsx("text",{x:"42",y:"250",fill:"#94a3b8",fontSize:"11",children:"Pointer re-routed to 0x48F."}),e.jsx("text",{x:"42",y:"275",fill:"#fca5a5",fontSize:"11",children:"0x10A is UNTOUCHED!"}),e.jsx("text",{x:"320",y:"35",fill:"#94a3b8",fontSize:"13",fontWeight:"bold",children:"2. HEAP MEMORY (IMMUTABLE STRING OBJECTS)"}),e.jsx("rect",{x:"320",y:"65",width:"480",height:"100",rx:"10",fill:"#1e293b",stroke:"#334155",strokeWidth:"1.5"}),e.jsxs("text",{x:"340",y:"92",fill:"#94a3b8",fontSize:"12",fontWeight:"bold",children:["Memory Address: ",e.jsx("tspan",{fill:"#a855f7",children:"0x10A (PyASCIIObject)"})]}),e.jsx("rect",{x:"340",y:"105",width:"440",height:"42",rx:"6",fill:"#090d16",stroke:"#334155"}),e.jsx("text",{x:"355",y:"132",fill:"#f8fafc",fontSize:"13",fontWeight:"bold",children:"Length: 7 | Hash: 0x89A... | Characters: ['S', 'u', 's', 'm', 'i', 't', 'a']"}),e.jsx("rect",{x:"320",y:"195",width:"480",height:"100",rx:"10",fill:"#1e293b",stroke:"#10b981",strokeWidth:"2"}),e.jsxs("text",{x:"340",y:"222",fill:"#94a3b8",fontSize:"12",fontWeight:"bold",children:["New Memory Address: ",e.jsx("tspan",{fill:"#34d399",children:"0x48F (Newly Allocated String)"})]}),e.jsx("rect",{x:"340",y:"235",width:"440",height:"42",rx:"6",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"355",y:"262",fill:"#ffffff",fontSize:"13",fontWeight:"bold",children:"Length: 11 | Hash: 0xCF1... | Characters: ['S', 'u', 's', 'm', 'i', 't', 'a', ' ', 'R', 'o', 'y']"}),e.jsx("path",{d:"M 210 102 L 320 102",stroke:"#a855f7",strokeWidth:"2",strokeDasharray:"4 3",fill:"none"}),e.jsx("text",{x:"220",y:"92",fill:"#c084fc",fontSize:"10",children:"Old Ref"}),e.jsx("path",{d:"M 210 120 L 260 120 L 260 245 L 320 245",stroke:"#10b981",strokeWidth:"3",fill:"none"}),e.jsx("text",{x:"225",y:"235",fill:"#34d399",fontSize:"11",fontWeight:"bold",children:"Active Ref"}),e.jsx("text",{x:"320",y:"325",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",children:'✓ Original "Susmita" string is 100% unchanged. Python allocated a brand-new object at 0x48F.'})]}):e.jsxs("svg",{viewBox:"0 0 850 320",className:"w-full h-auto min-w-[650px] font-sans",children:[e.jsx("text",{x:"30",y:"35",fill:"#f8fafc",fontSize:"15",fontWeight:"bold",children:"CPython String Interning: Shared Memory Table"}),e.jsx("rect",{x:"30",y:"65",width:"190",height:"80",rx:"8",fill:"#1e293b",stroke:"#6366f1",strokeWidth:"1.5"}),e.jsx("text",{x:"45",y:"95",fill:"#818cf8",fontSize:"14",fontWeight:"bold",children:"Variable: city_a"}),e.jsx("text",{x:"45",y:"125",fill:"#cbd5e1",fontSize:"12",children:'city_a = "barrackpore"'}),e.jsx("rect",{x:"30",y:"165",width:"190",height:"80",rx:"8",fill:"#1e293b",stroke:"#6366f1",strokeWidth:"1.5"}),e.jsx("text",{x:"45",y:"195",fill:"#818cf8",fontSize:"14",fontWeight:"bold",children:"Variable: city_b"}),e.jsx("text",{x:"45",y:"225",fill:"#cbd5e1",fontSize:"12",children:'city_b = "barrackpore"'}),e.jsx("rect",{x:"340",y:"85",width:"460",height:"140",rx:"12",fill:"#090d16",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"360",y:"115",fill:"#34d399",fontSize:"14",fontWeight:"bold",children:"GLOBAL INTERNED POOL (Single Shared Object)"}),e.jsx("text",{x:"360",y:"140",fill:"#94a3b8",fontSize:"12",children:"Address: 0x7FFF904 | RefCount: 2 | Type: PyASCIIObject (1-byte Compact ASCII)"}),e.jsx("rect",{x:"360",y:"155",width:"420",height:"45",rx:"6",fill:"#1e293b",stroke:"#334155"}),e.jsx("text",{x:"375",y:"183",fill:"#f8fafc",fontSize:"13",fontMono:"true",children:'Value: "barrackpore" (11 Bytes Payload)'}),e.jsx("path",{d:"M 220 105 L 340 135",stroke:"#10b981",strokeWidth:"2.5",fill:"none"}),e.jsx("path",{d:"M 220 205 L 340 175",stroke:"#10b981",strokeWidth:"2.5",fill:"none"}),e.jsx("text",{x:"340",y:"265",fill:"#34d399",fontSize:"13",fontWeight:"bold",children:"✓ city_a is city_b evaluates to TRUE! (Pointer comparison O(1) in CPU cache)"})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚡"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. PEP 393: Flexible String Representation"})]}),e.jsxs("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:["Prior to Python 3.3, Python allocated 4 bytes per character for all strings if compiled with UCS-4. Under ",e.jsx("strong",{className:"text-white",children:"PEP 393"}),", CPython inspects the maximum character code point and dynamically selects the most compact byte width:"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm sm:text-base border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-400 bg-slate-950/50",children:[e.jsx("th",{className:"p-3 font-semibold",children:"Kind / Encoding"}),e.jsx("th",{className:"p-3 font-semibold",children:"Max Codepoint"}),e.jsx("th",{className:"p-3 font-semibold",children:"Bytes per Char"}),e.jsx("th",{className:"p-3 font-semibold",children:"Real-World Example"}),e.jsx("th",{className:"p-3 font-semibold",children:"Memory Overhead"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800/80 text-slate-300",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono text-purple-400 font-bold",children:"PyUnicode_1BYTE_KIND"}),e.jsx("td",{className:"p-3 font-mono text-slate-400",children:"< 256 (ASCII / Latin-1)"}),e.jsx("td",{className:"p-3 font-bold text-emerald-400",children:"1 Byte"}),e.jsx("td",{className:"p-3 font-mono text-xs text-slate-300",children:'"Barrackpore", "Susmita"'}),e.jsx("td",{className:"p-3 text-emerald-400",children:"Minimal (~49B header + 1B/char)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono text-indigo-400 font-bold",children:"PyUnicode_2BYTE_KIND"}),e.jsx("td",{className:"p-3 font-mono text-slate-400",children:"< 65,536 (UCS-2)"}),e.jsx("td",{className:"p-3 font-bold text-sky-400",children:"2 Bytes"}),e.jsx("td",{className:"p-3 font-mono text-xs text-slate-300",children:'"₹ 4,500", "নমস্কার"'}),e.jsx("td",{className:"p-3 text-sky-400",children:"Compact (~72B header + 2B/char)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono text-rose-400 font-bold",children:"PyUnicode_4BYTE_KIND"}),e.jsx("td",{className:"p-3 font-mono text-slate-400",children:">= 65,536 (UCS-4)"}),e.jsx("td",{className:"p-3 font-bold text-amber-400",children:"4 Bytes"}),e.jsx("td",{className:"p-3 font-mono text-xs text-slate-300",children:'"Python 🚀 🔥"'}),e.jsx("td",{className:"p-3 text-amber-400",children:"Standard (~72B header + 4B/char)"})]})]})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🌍"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Real-World Industry Scenarios"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🛡️"})," 1. Immutable Audit Ledgers in Indian Rupees (₹)"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["At ",e.jsx("strong",{className:"text-purple-400",children:"Coder & AccoTax Barrackpore"}),", tuition payment records for students like Susmita, Mamata, and Debangshu are logged as cryptographically signed immutable strings. No rogue script can alter historical fees or audit timestamps in memory."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🚀"})," 2. High-Throughput API Gateway Token Interning"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["In FastAPI/Django backends serving 50,000 requests/sec across Kolkata servers, applying ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"sys.intern()"})," on repeated header keys allows instant pointer comparisons (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"O(1)"}),") instead of character-by-character string comparisons."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"📊"})," 3. Big Data Pipelines: Eliminating O(N²) Slowdowns"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Processing 1,000,000 log records using naive ",e.jsx("code",{className:"text-rose-400 font-mono",children:"+="})," concatenation exhausts memory and crashes due to repeated allocations. Using ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"''.join(records)"})," pre-computes buffer capacity and finishes in milliseconds."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🔑"})," 4. Thread-Safe Dictionary Key Stability"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Caching systems rely on string keys like ",e.jsx("code",{className:"text-amber-300 font-mono",children:'"user:susmita:profile"'}),". Immutability guarantees the cached ",e.jsx("code",{className:"font-mono text-slate-200",children:"hash()"})," never drifts, ensuring rock-solid hash table lookups in concurrent environments."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Hands-On Python Code Demos"})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Demo 1: Immutability, TypeError on Mutation & id() Address Tracking"}),e.jsx(r,{fileModule:x,title:"immutability_basics_and_id.py",highlightLines:[8,12,19,27]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Demo 2: String Interning, Memory Identity (is vs ==) & sys.intern()"}),e.jsx(r,{fileModule:u,title:"string_interning_and_identity.py",highlightLines:[12,13,23,31]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Demo 3: Benchmarking O(N²) Loop Concatenation vs High-Speed ''.join()"}),e.jsx(r,{fileModule:g,title:"concatenation_vs_join_benchmark.py",highlightLines:[10,15,20,26]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Demo 4: Real-World Immutable Student Fee Audit Ledger in Indian Rupees (₹)"}),e.jsx(r,{fileModule:b,title:"immutable_audit_log_system.py",highlightLines:[7,16,20,24]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🛑"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Beginner Pitfalls & Traps"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 1: Attempting In-Place Character Replacement"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Writing ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"s[0] = 'H'"})," fails. To replace characters, construct a new string via slicing: ",e.jsx("code",{className:"font-mono text-slate-200",children:"s = 'H' + s[1:]"})," or convert to a mutable ",e.jsx("code",{className:"font-mono text-slate-200",children:"list(s)"}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 2: Using 'is' Instead of '==' for Value Comparison"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Relying on ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:'if user_input is "admin":'})," causes subtle bugs. Dynamic strings may have identical characters but different memory addresses. Always use ",e.jsx("code",{className:"font-mono text-emerald-400 font-bold",children:"=="})," for content equality."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 3: Accumulating Large Strings with '+='"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Appending strings inside a 10,000-iteration loop with ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"+="})," creates thousands of throwaway string objects, causing GC thrashing. Collect in a list and call ",e.jsx("code",{className:"font-mono text-emerald-400 font-bold",children:"''.join(list)"}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 4: Expecting Function Mutability on String Arguments"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Passing a string into a function and calling ",e.jsx("code",{className:"bg-rose-900/40 px-1 py-0.5 rounded font-mono text-rose-200",children:"param = param.strip()"})," only rebinds the local parameter. The caller's variable remains unchanged unless the return value is assigned."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/90 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💡"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-purple-400",children:"7. Professional Hints & Think-About Prompts"})]}),e.jsxs("div",{className:"space-y-4 text-sm sm:text-base text-slate-300",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3",children:[e.jsx("span",{className:"text-purple-400 font-bold text-lg mt-0.5",children:"💭"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Think about:"})," Why can a string be used as a dictionary key while a list cannot? Because strings are immutable, guaranteeing a stable, unchangeable ",e.jsx("code",{className:"text-purple-300 font-mono",children:"hash()"})," value throughout program execution."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3",children:[e.jsx("span",{className:"text-indigo-400 font-bold text-lg mt-0.5",children:"👁️"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Observe carefully:"})," When you slice a string ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"sub = s[0:5]"}),", Python allocates a new string object in memory. If you need zero-copy memory views on binary data without copying, use ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"memoryview(bytes_data)"}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-400 font-bold text-lg mt-0.5",children:"🧪"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Try changing this:"})," Run ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"import sys; print(sys.getsizeof('A'), sys.getsizeof('₹'), sys.getsizeof('🚀'))"})," to verify PEP 393 adaptive 1-byte, 2-byte, and 4-byte encoding tiers firsthand."]})]})]})]}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(h,{title:"Topic 1 • String Immutability & Memory Architecture: Master Review & FAQ Library",questions:f})}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(m,{content:y,title:"Topic 1: String Immutability & Memory Architecture Study Guide",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Study Note",downloadFileName:"topic1_string_immutability_note.txt"})}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(p,{note:"Remember: In Python, strings are 100% immutable! When Susmita, Mamata, and Debangshu write production pipelines in Barrackpore or Kolkata, NEVER use '+=' inside loops — always collect string tokens in a list and call ''.join(list). It saves massive memory and runs in lightning-fast O(N) time!"})})]})]})}export{k as default};
