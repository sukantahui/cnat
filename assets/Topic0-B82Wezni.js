import{b as c,j as e}from"./vendor-react-core-B-R9HE-Z.js";import{T as m}from"./TeacherSukantaHui-Bmd0QPjl.js";import{F as u}from"./FAQTemplate-16IfroqC.js";import{P as p}from"./PlainTextPrint-C6NaUtnE.js";import{P as h}from"./PythonFileLoader-DZ61U3Y_.js";import{A as d,br as g,f as x,g as b,D as f,a7 as y}from"./vendor-icons-C-igd3yh.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";const v=[{id:1,question:"What is the official CBSE Class XI Computer Science (083) practical examination marks distribution?",options:["Total 30 Marks: Lab Test (Python Program: 12 Marks) + Report File (min 20 programs: 7 Marks) + Project (3 Marks) + Viva Voce (8 Marks)","Total 50 Marks: Theory only","Total 20 Marks: Viva only","Total 100 Marks: Lab exam only"],correctAnswer:0,explanation:"CBSE prescribes a 30-mark practical examination: 12 Marks for Lab Test (Python Problem Solving), 7 Marks for Practical Report File (minimum 20 programs), 3 Marks for Term Project, and 8 Marks for Viva Voce.",hint:"12M Lab Program + 7M Report File + 3M Project + 8M Viva = 30 Marks."},{id:2,question:"How many Python programs are statutory required in the CBSE Class XI practical report file?",options:["Minimum 20 Python programs as prescribed by CBSE","Only 5 programs","Exactly 50 programs","No programs required"],correctAnswer:0,explanation:"CBSE regulations mandate that every Class XI CS student must submit a signed laboratory report file containing a minimum of 20 verified Python programs.",hint:"Minimum 20 Python programs."},{id:3,question:"Viva Question: Why is Euclid's Algorithm faster than brute-force divisor checking for finding the GCD of two large integers?",options:["Because Euclid's Algorithm replaces subtraction with the modulo operator ($a \\pmod b$), reducing the problem size logarithmically in $O(\\log(\\min(a, b)))$ time","Because it skips all odd numbers","Because it uses multi-threading on GPUs","Because it runs in hardware ROM"],correctAnswer:0,explanation:"Euclid's Modulo Algorithm rapidly converges by replacing $(a, b)$ with $(b, a pmod b)$, achieving $O(log N)$ logarithmic time complexity compared to $O(N)$ linear trial division.",hint:"Logarithmic time complexity via modulo reduction."},{id:4,question:"Viva Question: What is an Armstrong Number?",options:["A number that equals the sum of its own digits each raised to the power of the total number of digits (e.g., $153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153$)","A prime number with 10 digits","A negative integer","A number divisible by 7"],correctAnswer:0,explanation:"An $n$-digit integer is an Armstrong number if the sum of the $n$-th power of its digits equals the number itself (e.g. 153, 370, 371, 407).",hint:"Sum of digits raised to the power of total digits."},{id:5,question:"Viva Question: What is a Perfect Number?",options:["A positive integer that is equal to the sum of its proper positive divisors (excluding the number itself, e.g. $6 = 1 + 2 + 3$, $28 = 1 + 2 + 4 + 7 + 14$)","A number divisible by 10","Any floating point number","A prime number"],correctAnswer:0,explanation:"A Perfect Number is a number that equals the sum of its proper positive divisors (e.g. $28 = 1 + 2 + 4 + 7 + 14$).",hint:"Sum of proper divisors equals the number itself."},{id:6,question:"Viva Question: How does string slicing `s[::-1]` reverse a string in Python?",options:["By setting the step size to `-1`, Python traverses the sequence in reverse direction from the last element to the first","By inverting the binary memory bits","By sorting the characters in descending order","By calling an external C library"],correctAnswer:0,explanation:"In extended slice syntax `[start:stop:step]`, omitting start and stop with a step of `-1` instructs the interpreter to traverse backward from the end to the beginning.",hint:"Negative step traverses backward."},{id:7,question:"Viva Question: What is the difference between a shallow copy and a deep copy in Python lists?",options:["A shallow copy (`list.copy()`) creates a new container but references the same nested objects; a deep copy (`copy.deepcopy()`) recursively clones all nested objects independently.","A shallow copy only copies strings; a deep copy copies numbers.","There is no difference in Python.","A shallow copy is faster but deletes the original list."],correctAnswer:0,explanation:"Shallow copies clone outer list structure only (nested lists still share references); deep copies clone the full recursive object hierarchy.",hint:"Shallow copies outer structure; deep copies recursive nested objects."},{id:8,question:"Viva Question: What is the time complexity of searching an element in a Python dictionary by key?",options:["O(1) Average Constant Time (due to hash table indexing)","O(N) Linear Time","O(N²) Quadratic Time","O(log N) Logarithmic Time"],correctAnswer:0,explanation:"Python dictionaries use hash tables where key lookup computes the hash directly to locate the memory bucket in average $O(1)$ constant time.",hint:"O(1) average constant time via hash tables."},{id:9,question:"Viva Question: Why are tuples preferred over lists for dictionary keys in Python?",options:["Because tuples are immutable and therefore hashable, whereas lists are mutable and cannot be hashed (`TypeError: unhashable type: 'list'`)","Because tuples take more RAM","Because tuples sort faster","Because lists cannot hold numbers"],correctAnswer:0,explanation:"Dictionary keys must be hashable (immutable). Tuples are immutable and hashable, while mutable lists raise a `TypeError` if used as keys.",hint:"Dictionary keys must be immutable and hashable."},{id:10,question:"Viva Question: What is the role of `math.isqrt(n)` in prime checking algorithms?",options:["It computes the exact integer square root $\\lfloor \\sqrt{n} \\rfloor$, establishing the maximum necessary trial factor limit","It multiplies numbers by 2","It converts floats to strings","It generates prime numbers automatically"],correctAnswer:0,explanation:"If a composite number $n$ has a factor, at least one factor must be $le sqrt{n}$. Limiting the loop to $\\text{isqrt}(n)$ reduces loop iterations from $n$ to $sqrt{n}$.",hint:"Limits trial division to sqrt(n)."},{id:11,question:"Viva Question: What is the difference between `list.append(x)` and `list.extend(iterable)`?",options:["`append(x)` adds $x$ as a single element at the end; `extend(iterable)` iterates over the argument and appends each element individually.","`append` works only on numbers; `extend` works on strings.","`append` creates a new list; `extend` modifies in place.","They are identical aliases."],correctAnswer:0,explanation:"`append([1, 2])` creates a nested sublist `[..., [1, 2]]`, whereas `extend([1, 2])` unpacks and adds elements individually `[..., 1, 2]`.",hint:"append adds item as-is; extend unpacks and appends each element."},{id:12,question:"Viva Question: How does Python's `math.gcd(a, b)` function handle negative input values?",options:["It returns the greatest common divisor as a positive integer (the absolute GCD)","It raises a ValueError","It returns a negative number","It returns zero"],correctAnswer:0,explanation:"In Python standard library `math.gcd()`, GCD is defined as the greatest positive common divisor, so `math.gcd(-48, 18)` returns positive `6`.",hint:"Always returns a positive integer."},{id:13,question:"Viva Question: What is the output of `dict.get(key, default)` if the key is missing from the dictionary?",options:["It returns the provided `default` value without raising a KeyError","It raises a KeyError crash","It deletes the dictionary","It inserts a None key"],correctAnswer:0,explanation:"`dict.get('missing', 0)` returns `0` safely without raising a `KeyError`.",hint:"get() returns the fallback default value safely."},{id:14,question:"Viva Question: What is the purpose of the `random.seed()` function in testing simulation programs?",options:["It initializes the pseudorandom number generator with a deterministic seed, ensuring reproducible random sequences for testing and grading","It speeds up CPU clock cycles","It encrypts random numbers","It generates prime numbers"],correctAnswer:0,explanation:"Setting `random.seed(42)` makes pseudorandom number generation deterministic and reproducible across multiple test runs.",hint:"Produces deterministic, reproducible random sequences."},{id:15,question:"Viva Question: What is the difference between `str.isdigit()` and `str.isnumeric()`?",options:["`isdigit()` checks for standard digits 0–9; `isnumeric()` also includes Unicode numeric characters (fractions, subscripts, Roman numerals)","They are identical functions.","`isdigit()` works on floats; `isnumeric()` on integers.","`isdigit()` is deprecated in Python 3."],correctAnswer:0,explanation:"`isnumeric()` is broader and returns True for Unicode superscript digits, vulgar fractions (½), and specialized numeric symbols.",hint:"isnumeric() supports broader Unicode numeric glyphs."},{id:16,question:"Viva Question: How does list comprehension improve code compared to traditional `for` loops?",options:["It provides a concise, readable one-line syntax for creating lists and executes faster at the C-level bytecode optimization in CPython","It uses less RAM","It makes lists immutable","It prevents index errors"],correctAnswer:0,explanation:"List comprehensions `[x**2 for x in nums]` are concise and execute faster than explicit loop `.append()` calls because bytecode loop construction is optimized in C.",hint:"Concise syntax and faster C-level bytecode execution."},{id:17,question:"Viva Question: What does the built-in `zip()` function do when passed two lists of unequal length?",options:["It pairs elements until the shortest list is exhausted and truncates any excess elements","It raises a ValueError","It pads missing elements with None","It crashes with IndexError"],correctAnswer:0,explanation:"Standard `zip(list1, list2)` terminates as soon as the shortest iterable is exhausted.",hint:"Stops at the length of the shortest iterable."},{id:18,question:"Viva Question: What is the difference between `list.sort()` and the built-in `sorted(iterable)` function?",options:["`list.sort()` sorts the list in place and returns `None`; `sorted(iterable)` returns a new sorted list without modifying the original iterable.","`list.sort()` works on tuples; `sorted()` on lists.","`list.sort()` sorts descending; `sorted()` sorts ascending.","They are identical."],correctAnswer:0,explanation:"`lst.sort()` is an in-place mutating method returning `None`; `sorted(lst)` is a built-in function returning a brand new list.",hint:"list.sort() modifies in place; sorted() returns a new list."},{id:19,question:"Viva Question: How do you swap two variables in Python without using a third temporary variable?",options:["`a, b = b, a` (using tuple packing and unpacking)","`a = b; b = a`","`swap(a, b)`","`a + b = b + a`"],correctAnswer:0,explanation:"`a, b = b, a` evaluates the right side into a temporary tuple `(b, a)` and unpacks simultaneously into `a` and `b`.",hint:"a, b = b, a."},{id:20,question:"Viva Question: What is the time complexity of linear search on a list of N elements?",options:["O(N) in the worst case (target at the end or not present)","O(1)","O(N²)","O(log N)"],correctAnswer:0,explanation:"Linear search checks each element one by one from index 0 to N-1, requiring $N$ comparisons in the worst case ($O(N)$).",hint:"O(N) linear time complexity."},{id:21,question:"Viva Question: What happens if you pass a negative step value to `range()` without adjusting start and stop values (`range(10, 0, -2)`)?",options:["It generates integers stepping downwards: `[10, 8, 6, 4, 2]`","It raises a ValueError","It generates an empty range","It crashes the interpreter"],correctAnswer:0,explanation:"With start=10, stop=0, step=-2, it counts downward: 10, 8, 6, 4, 2.",hint:"Generates decreasing sequence down to stop + 1."},{id:22,question:"Viva Question: What is an algorithm's Space Complexity?",options:["The total amount of memory (RAM storage) required by an algorithm to execute to completion relative to the input size N","The disk storage size of the .py file","The number of lines of code","The monitor screen resolution"],correctAnswer:0,explanation:"Space Complexity measures total auxiliary memory and data structures required as input size grows.",hint:"Auxiliary memory required during execution."},{id:23,question:"Viva Question: What is the result of `statistics.mean([10, 20, 30, 40, 50])`?",options:["30","25","35","150"],correctAnswer:0,explanation:"The arithmetic mean is $(10+20+30+40+50)/5 = 150/5 = 30$.",hint:"Sum divided by count = 150/5 = 30."},{id:24,question:"Viva Question: How do you remove duplicate elements from a Python list while ignoring order?",options:["`list(set(original_list))`","`original_list.unique()`","`original_list.distinct()`","`delete duplicates`"],correctAnswer:0,explanation:"Converting a list to a `set` eliminates all duplicate items automatically, and converting back to `list` produces a deduplicated collection.",hint:"Convert to set and back to list."},{id:25,question:"Viva Question: Why is code modularization into functions (`def`) recommended in CBSE practical lab programming?",options:["It enhances code readability, facilitates unit testing, enables code reusability, and isolates variables within local scope","It makes the program run on GPUs","It eliminates the need for Python variables","It bypasses the Python interpreter"],correctAnswer:0,explanation:"Functions break complex tasks into modular, reusable, testable blocks with localized scope.",hint:"Readability, reusability, modular testing, and clean scoping."}],w=`================================================================================\r
CBSE CLASS XI COMPUTER SCIENCE (SUBJECT CODE: 083)\r
SPECIAL PRACTICAL EXAMINATION MODULE: 20-PROGRAM PRACTICAL LABORATORY REPOSITORY\r
================================================================================\r
Educator: Sukanta Hui | Institute: Coder & AccoTax | Location: Barrackpore, Kolkata\r
Official Syllabus Aligned: 2024-25 / 2025-26 Senior Secondary Computer Science\r
\r
1. CBSE CLASS XI PRACTICAL EXAMINATION SCHEME (TOTAL: 30 MARKS)\r
--------------------------------------------------------------------------------\r
S.No | Assessment Component                                            | Marks\r
--------------------------------------------------------------------------------\r
1.   | Lab Test: Python Program Solving (Algorithm, Code & Output)      | 12 Marks\r
2.   | Practical Report File (Minimum 20 Python programs verified)      | 07 Marks\r
3.   | Term Project (Python Mini-Project / Application)                | 03 Marks\r
4.   | Viva Voce (Oral examination on Python & Computer Organisation)   | 08 Marks\r
--------------------------------------------------------------------------------\r
     | GRAND TOTAL PRACTICAL MARKS                                     | 30 Marks\r
--------------------------------------------------------------------------------\r
\r
2. THE 20-PROGRAM PRACTICAL LABORATORY REPOSITORY\r
--------------------------------------------------------------------------------\r
The following 20 programs constitute Coder & AccoTax's curated laboratory repository\r
aligned with CBSE's suggested practical problem list, fulfilling the statutory minimum\r
20-program report-file requirement:\r
\r
1. Arithmetic Calculator: Input 2 numbers and calculate (+, -, *, /, //, %, **).\r
2. Largest and Smallest of Three Numbers: Nested conditional comparisons.\r
3. Quadratic Equation Solver: Discriminant D = b^2 - 4ac analysis.\r
4. Prime Number Checker & Primes in Range [start, end].\r
5. Fibonacci Series Generator up to N terms.\r
6. Armstrong Number Verifier: Sum of digits raised to power of total digits.\r
7. Palindrome Verifier for Strings and Numbers.\r
8. Greatest Common Divisor (GCD/HCF) and LCM using Euclid's Modulo Algorithm.\r
9. Sum of Geometric Series: 1 + x + x^2 + x^3 + ... + x^n.\r
10. Sum of Alternating Series: 1 - x + x^2 - x^3 + ... + (-1)^n * x^n.\r
11. Factorial Calculation using iterative loops.\r
12. Perfect Number Verifier (Sum of proper divisors equals number).\r
13. String Glyph Counter: Vowels, Consonants, Uppercase, Lowercase, Digits, Specials.\r
14. Geometric Pattern Generator: Right-angled and Centered Star Pyramids.\r
15. List Mathematical Statistics: Max, Min, Mean, Median, and Second Largest.\r
16. Linear Search Algorithm: Sequential search with index reporting.\r
17. List Element Frequency Counter using Dictionary Mapping.\r
18. Tuple Swapping, Slicing, and Min-Max Extraction.\r
19. Student Records Manager using Nested Dictionaries.\r
20. Random Simulation: 6-Sided Dice Roll and Lottery Generator.\r
\r
3. VIVA VOCE EXAMINATION PREPARATION STRATEGY\r
--------------------------------------------------------------------------------\r
- Be ready to explain time complexity: $O(1)$ for hash lookup vs $O(N)$ for linear search.\r
- Be ready to justify why \`math.isqrt(N)\` is used in prime checking.\r
- Know the difference between mutable (lists, dicts, sets) and immutable (tuples, strings, numbers).\r
- Understand why \`range(start, stop)\` is exclusive of the stop boundary.\r
\r
================================================================================\r
END OF PRACTICAL LAB MANUAL - MODULE 007_002\r
================================================================================\r
`,l=`"""\r
================================================================================\r
CBSE CLASS XI COMPUTER SCIENCE (SUBJECT CODE: 083)\r
SPECIAL PRACTICAL LAB REPOSITORY: 20-PROGRAM CURATED REPOSITORY ALIGNED WITH CBSE SUGGESTIONS\r
Educator: Sukanta Hui | Institute: Coder & AccoTax | Location: Barrackpore, Kolkata\r
================================================================================\r
"""\r
\r
import math\r
import random\r
import statistics\r
\r
\r
# ------------------------------------------------------------------------------\r
# PROGRAM 1: Input two numbers and perform all fundamental arithmetic calculations\r
# ------------------------------------------------------------------------------\r
def program_01_arithmetic_calculator(a: float, b: float) -> dict:\r
    """Performs addition, subtraction, multiplication, true division, floor division, modulo, and power."""\r
    return {\r
        "addition": a + b,\r
        "subtraction": a - b,\r
        "multiplication": a * b,\r
        "true_division": a / b if b != 0 else "Undefined (ZeroDivision)",\r
        "floor_division": a // b if b != 0 else "Undefined",\r
        "modulo": a % b if b != 0 else "Undefined",\r
        "exponentiation": a ** b\r
    }\r
\r
\r
# ------------------------------------------------------------------------------\r
# PROGRAM 2: Determine the largest and smallest among three numbers\r
# ------------------------------------------------------------------------------\r
def program_02_largest_smallest_three(x: float, y: float, z: float) -> tuple:\r
    """Finds largest and smallest using nested conditionals."""\r
    # Finding largest\r
    if x >= y and x >= z:\r
        largest = x\r
    elif y >= x and y >= z:\r
        largest = y\r
    else:\r
        largest = z\r
\r
    # Finding smallest\r
    if x <= y and x <= z:\r
        smallest = x\r
    elif y <= x and y <= z:\r
        smallest = y\r
    else:\r
        smallest = z\r
\r
    return largest, smallest\r
\r
\r
# ------------------------------------------------------------------------------\r
# PROGRAM 3: Quadratic Equation Solver with Discriminant Analysis (ax^2 + bx + c = 0)\r
# ------------------------------------------------------------------------------\r
def program_03_quadratic_roots(a: float, b: float, c: float) -> dict:\r
    """Computes discriminant D = b^2 - 4ac and resolves real or complex roots."""\r
    if a == 0:\r
        return {"type": "Linear Equation", "root": -c / b if b != 0 else None}\r
\r
    d = (b ** 2) - (4 * a * c)\r
    if d > 0:\r
        r1 = (-b + math.sqrt(d)) / (2 * a)\r
        r2 = (-b - math.sqrt(d)) / (2 * a)\r
        return {"nature": "Real and Distinct", "d": d, "roots": (r1, r2)}\r
    elif d == 0:\r
        r = -b / (2 * a)\r
        return {"nature": "Real and Equal", "d": d, "roots": (r, r)}\r
    else:\r
        real_part = -b / (2 * a)\r
        imag_part = math.sqrt(abs(d)) / (2 * a)\r
        return {"nature": "Complex Conjugates", "d": d, "roots": (f"{real_part} + {imag_part}j", f"{real_part} - {imag_part}j")}\r
\r
\r
# ------------------------------------------------------------------------------\r
# PROGRAM 4: Prime Number Verification and Range Generator [start, end]\r
# ------------------------------------------------------------------------------\r
def program_04_is_prime(n: int) -> bool:\r
    if n <= 1:\r
        return False\r
    for i in range(2, int(math.isqrt(n)) + 1):\r
        if n % i == 0:\r
            return False\r
    return True\r
\r
\r
def program_04_primes_in_range(start: int, end: int) -> list:\r
    return [num for num in range(start, end + 1) if program_04_is_prime(num)]\r
\r
\r
# ------------------------------------------------------------------------------\r
# PROGRAM 5: Fibonacci Sequence Generator up to N terms\r
# ------------------------------------------------------------------------------\r
def program_05_fibonacci_series(n_terms: int) -> list:\r
    """Generates Fibonacci terms: 0, 1, 1, 2, 3, 5, 8, 13, ..."""\r
    if n_terms <= 0:\r
        return []\r
    elif n_terms == 1:\r
        return [0]\r
    series = [0, 1]\r
    while len(series) < n_terms:\r
        series.append(series[-1] + series[-2])\r
    return series\r
\r
\r
# ------------------------------------------------------------------------------\r
# PROGRAM 6: Armstrong Number Checker and 3-digit Armstrong numbers\r
# ------------------------------------------------------------------------------\r
def program_06_is_armstrong(n: int) -> bool:\r
    """A number equals sum of its digits raised to power of total digits."""\r
    s = str(n)\r
    power = len(s)\r
    return sum(int(digit) ** power for digit in s) == n\r
\r
\r
# ------------------------------------------------------------------------------\r
# PROGRAM 7: Palindrome String and Number Verification\r
# ------------------------------------------------------------------------------\r
def program_07_is_palindrome(val) -> bool:\r
    s = str(val).lower()\r
    return s == s[::-1]\r
\r
\r
# ------------------------------------------------------------------------------\r
# PROGRAM 8: GCD (HCF) and LCM computation using Euclid's Algorithm\r
# ------------------------------------------------------------------------------\r
def program_08_gcd_and_lcm(a: int, b: int) -> tuple:\r
    x, y = a, b\r
    while y != 0:\r
        x, y = y, x % y\r
    gcd_val = x\r
    lcm_val = abs(a * b) // gcd_val if gcd_val != 0 else 0\r
    return gcd_val, lcm_val\r
\r
\r
# ------------------------------------------------------------------------------\r
# PROGRAM 9: Sum of Geometric Series: 1 + x + x^2 + x^3 + ... + x^n\r
# ------------------------------------------------------------------------------\r
def program_09_sum_series_geometric(x: float, n: int) -> float:\r
    return sum(x ** i for i in range(n + 1))\r
\r
\r
# ------------------------------------------------------------------------------\r
# PROGRAM 10: Sum of Alternating Series: 1 - x + x^2 - x^3 + ... + (-1)^n * x^n\r
# ------------------------------------------------------------------------------\r
def program_10_sum_alternating_series(x: float, n: int) -> float:\r
    return sum(((-1) ** i) * (x ** i) for i in range(n + 1))\r
\r
\r
# ------------------------------------------------------------------------------\r
# PROGRAM 11: Factorial Calculation (Iterative)\r
# ------------------------------------------------------------------------------\r
def program_11_factorial(n: int) -> int:\r
    fact = 1\r
    for i in range(1, n + 1):\r
        fact *= i\r
    return fact\r
\r
\r
# ------------------------------------------------------------------------------\r
# PROGRAM 12: Perfect Number Verifier (Sum of proper divisors == Number)\r
# ------------------------------------------------------------------------------\r
def program_12_is_perfect_number(n: int) -> bool:\r
    if n <= 1:\r
        return False\r
    divisors = [i for i in range(1, n) if n % i == 0]\r
    return sum(divisors) == n\r
\r
\r
# ------------------------------------------------------------------------------\r
# PROGRAM 13: String Character Case and Glyphs Counter\r
# ------------------------------------------------------------------------------\r
def program_13_count_character_types(text: str) -> dict:\r
    counts = {"uppercase": 0, "lowercase": 0, "vowels": 0, "consonants": 0, "digits": 0, "spaces": 0, "specials": 0}\r
    for ch in text:\r
        if ch.isupper():\r
            counts["uppercase"] += 1\r
        elif ch.islower():\r
            counts["lowercase"] += 1\r
        if ch.isalpha():\r
            if ch.lower() in "aeiou":\r
                counts["vowels"] += 1\r
            else:\r
                counts["consonants"] += 1\r
        elif ch.isdigit():\r
            counts["digits"] += 1\r
        elif ch.isspace():\r
            counts["spaces"] += 1\r
        else:\r
            counts["specials"] += 1\r
    return counts\r
\r
\r
# ------------------------------------------------------------------------------\r
# PROGRAM 14: Pattern Generation (Right Triangle & Centered Pyramid)\r
# ------------------------------------------------------------------------------\r
def program_14_triangle_pattern(rows: int) -> list:\r
    return ["* " * i for i in range(1, rows + 1)]\r
\r
\r
# ------------------------------------------------------------------------------\r
# PROGRAM 15: List Statistics: Max, Min, Mean, Median, and Second Largest\r
# ------------------------------------------------------------------------------\r
def program_15_list_statistics(numbers: list) -> dict:\r
    unique_nums = sorted(list(set(numbers)))\r
    second_largest = unique_nums[-2] if len(unique_nums) >= 2 else None\r
    return {\r
        "max": max(numbers),\r
        "min": min(numbers),\r
        "mean": statistics.mean(numbers),\r
        "median": statistics.median(numbers),\r
        "second_largest": second_largest\r
    }\r
\r
\r
# ------------------------------------------------------------------------------\r
# PROGRAM 16: Linear Search Algorithm on List\r
# ------------------------------------------------------------------------------\r
def program_16_linear_search(lst: list, target) -> int:\r
    for idx, val in enumerate(lst):\r
        if val == target:\r
            return idx\r
    return -1\r
\r
\r
# ------------------------------------------------------------------------------\r
# PROGRAM 17: List Element Frequency Counter using Dictionary\r
# ------------------------------------------------------------------------------\r
def program_17_frequency_counter(elements: list) -> dict:\r
    freq = {}\r
    for item in elements:\r
        freq[item] = freq.get(item, 0) + 1\r
    return freq\r
\r
\r
# ------------------------------------------------------------------------------\r
# PROGRAM 18: Tuple Swapping, Slicing, and Min-Max Extraction\r
# ------------------------------------------------------------------------------\r
def program_18_tuple_operations(t1: tuple, t2: tuple) -> dict:\r
    swapped_t1, swapped_t2 = t2, t1\r
    combined = t1 + t2\r
    return {\r
        "swapped": (swapped_t1, swapped_t2),\r
        "concatenated": combined,\r
        "slice_first_three": combined[:3],\r
        "max": max(combined) if all(isinstance(x, (int, float)) for x in combined) else None\r
    }\r
\r
\r
# ------------------------------------------------------------------------------\r
# PROGRAM 19: Student Record Manager using Nested Dictionary\r
# ------------------------------------------------------------------------------\r
def program_19_student_records() -> dict:\r
    students = {\r
        101: {"name": "Mamata", "stream": "Science", "marks": 98.0},\r
        102: {"name": "Susmita", "stream": "Science", "marks": 95.5},\r
        103: {"name": "Abhronila", "stream": "Computer Science", "marks": 99.0},\r
        104: {"name": "Debangshu", "stream": "Commerce", "marks": 91.0}\r
    }\r
    return students\r
\r
\r
# ------------------------------------------------------------------------------\r
# PROGRAM 20: Random Number Simulation (6-Sided Dice Roll & Lottery)\r
# ------------------------------------------------------------------------------\r
def program_20_random_simulation(rolls: int = 10) -> list:\r
    return [random.randint(1, 6) for _ in range(rolls)]\r
\r
\r
if __name__ == "__main__":\r
    print("=" * 70)\r
    print("CBSE CLASS XI COMPUTER SCIENCE (083) - 20 PRACTICAL PROGRAMS AUDIT")\r
    print("=" * 70)\r
    print("1. Arithmetic Calculator (10, 4) ->", program_01_arithmetic_calculator(10, 4))\r
    print("2. Largest & Smallest (45, 89, 12) ->", program_02_largest_smallest_three(45, 89, 12))\r
    print("3. Quadratic Roots (1, -5, 6) ->", program_03_quadratic_roots(1, -5, 6))\r
    print("4. Primes in [10, 30] ->", program_04_primes_in_range(10, 30))\r
    print("5. Fibonacci (7 terms) ->", program_05_fibonacci_series(7))\r
    print("6. Is Armstrong (153) ->", program_06_is_armstrong(153))\r
    print("7. Is Palindrome ('Racecar') ->", program_07_is_palindrome("Racecar"))\r
    print("8. GCD & LCM (48, 18) ->", program_08_gcd_and_lcm(48, 18))\r
    print("9. Factorial (5!) ->", program_11_factorial(5))\r
    print("10. Perfect Number (28) ->", program_12_is_perfect_number(28))\r
    print("=" * 70)\r
`,_=()=>{const[r,a]=c.useState(0),o=[{id:1,title:"Arithmetic Calculations on 2 Numbers",cat:"Basics",desc:"Performs +, -, *, /, //, %, ** on two user-input floats."},{id:2,title:"Largest & Smallest Among Three Numbers",cat:"Conditionals",desc:"Finds max and min using nested if-elif-else logic."},{id:3,title:"Quadratic Equation Solver (ax² + bx + c = 0)",cat:"Math",desc:"Computes discriminant D = b² - 4ac and roots."},{id:4,title:"Prime Number Verification & Range Generator",cat:"Loops",desc:"Optimized trial division up to sqrt(N)."},{id:5,title:"Fibonacci Sequence Generator up to N terms",cat:"Loops",desc:"Computes 0, 1, 1, 2, 3, 5, 8, 13, ..."},{id:6,title:"Armstrong Number Verifier (e.g. 153)",cat:"Loops",desc:"Sum of digits raised to power of total digits."},{id:7,title:"Palindrome Verifier for Strings & Numbers",cat:"Strings",desc:"Tests symmetry using string slicing [::-1]."},{id:8,title:"GCD & LCM using Euclid's Modulo Algorithm",cat:"Algorithms",desc:"Euclidean remainder reduction in logarithmic time."},{id:9,title:"Sum of Geometric Series (1 + x + x² + ... + xⁿ)",cat:"Series",desc:"Accumulates exponential series."},{id:10,title:"Sum of Alternating Series (1 - x + x² - ...)",cat:"Series",desc:"Alternating signs using (-1)ⁱ."},{id:11,title:"Factorial Calculation (Iterative N!)",cat:"Loops",desc:"Iterative product from 1 to N."},{id:12,title:"Perfect Number Verifier (e.g. 28)",cat:"Math",desc:"Sum of proper divisors equals number."},{id:13,title:"String Glyphs & Vowels Counter",cat:"Strings",desc:"Counts uppercase, lowercase, vowels, consonants, digits."},{id:14,title:"Right-Angled Triangle Pattern Generator",cat:"Patterns",desc:"Nested loop geometric star matrix."},{id:15,title:"List Statistics: Max, Min, Mean & 2nd Largest",cat:"Lists",desc:"Computes list metrics and second highest value."},{id:16,title:"Linear Search on List with Index Reporting",cat:"Algorithms",desc:"Sequential search with index tracking."},{id:17,title:"List Frequency Counter using Dictionary",cat:"Dictionaries",desc:"Builds histogram mapping item -> count."},{id:18,title:"Tuple Swapping, Slicing & Concatenation",cat:"Tuples",desc:"Tuple packing, unpacking, and slicing."},{id:19,title:"Student Record Manager (Nested Dict)",cat:"Dictionaries",desc:"Manages student rolls, streams, and marks."},{id:20,title:"Random Simulation: 6-Sided Dice Roll",cat:"Modules",desc:"Uses random.randint() for dice statistics."}],t=o[r];return e.jsxs("div",{className:"bg-slate-950/90 rounded-2xl p-4 sm:p-6 border border-slate-800 shadow-2xl space-y-6",children:[e.jsx("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold",children:e.jsx(d,{size:20})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white tracking-tight",children:"20-Program Practical Repository Aligned with CBSE Suggested Programs"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Select any prescribed laboratory program to inspect its algorithmic design, category, and objective."})]})]})}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2",children:o.map((n,i)=>e.jsxs("button",{onClick:()=>a(i),className:`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between ${r===i?"bg-emerald-500 text-slate-950 border-emerald-400 font-bold shadow-lg scale-105":"bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700"}`,children:[e.jsxs("span",{className:"text-[10px] font-mono opacity-80",children:["Prog #",n.id]}),e.jsx("span",{className:"text-xs truncate font-semibold block",children:n.title.split("(")[0]})]},n.id))}),e.jsxs("div",{className:"bg-slate-900/80 p-5 rounded-2xl border border-emerald-500/30 space-y-2",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("h4",{className:"text-base font-bold text-white",children:["Program ",t.id,": ",t.title]}),e.jsxs("span",{className:"px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40",children:["Category: ",t.cat]})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:t.desc})]})]})};function j(){const[r,a]=c.useState(!1),o=()=>{navigator.clipboard.writeText(l),a(!0),setTimeout(()=>a(!1),2e3)},t=()=>{const n=new Blob([l],{type:"text/x-python;charset=utf-8"}),i=URL.createObjectURL(n),s=document.createElement("a");s.href=i,s.download="cbse_xi_cs083_20_practical_lab_bank.py",document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(i)};return e.jsx("div",{className:"dark bg-slate-950 text-slate-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8 space-y-10 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-10",children:[e.jsxs("div",{className:"bg-gradient-to-r from-slate-900 via-emerald-950/40 to-slate-900 border border-emerald-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold rounded-full uppercase tracking-wider",children:"Practical Examination · 30 Marks"}),e.jsx("span",{className:"px-3 py-1 bg-sky-500/15 text-sky-400 border border-sky-500/30 text-xs font-bold rounded-full",children:"Module 007_002 · Topic 0"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight",children:"Class XI CS (083) 30-Mark Practical Examination Lab Bank: 20-Program Practical Repository Aligned with CBSE Suggested Programs"}),e.jsx("p",{className:"text-sm sm:text-base text-slate-300 max-w-4xl leading-relaxed",children:"Master the official 30-mark CBSE practical examination requirements. Explore the complete 20-program practical laboratory repository aligned with CBSE's suggested problem list, report file guidelines, and comprehensive Viva Voce preparation."})]})]}),e.jsxs("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(d,{size:20,className:"text-emerald-400"}),e.jsx("h3",{className:"text-base font-bold text-white",children:"CBSE Practical Examination Blueprint (30 Marks)"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs",children:[e.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-950 border border-emerald-500/40 space-y-1",children:[e.jsx("span",{className:"text-emerald-400 font-bold block text-sm",children:"1. Lab Problem Solving"}),e.jsx("span",{className:"text-xl font-extrabold text-white",children:"12 Marks"}),e.jsx("p",{className:"text-slate-400 text-[11px] pt-1",children:"Python hands-on program on lab workstation (Logic, code execution, and output)."})]}),e.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-950 border border-sky-500/40 space-y-1",children:[e.jsx("span",{className:"text-sky-400 font-bold block text-sm",children:"2. Practical Report File"}),e.jsx("span",{className:"text-xl font-extrabold text-white",children:"07 Marks"}),e.jsx("p",{className:"text-slate-400 text-[11px] pt-1",children:"Minimum 20 Python programs verified and signed by subject teacher."})]}),e.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-950 border border-amber-500/40 space-y-1",children:[e.jsx("span",{className:"text-amber-400 font-bold block text-sm",children:"3. Term Project"}),e.jsx("span",{className:"text-xl font-extrabold text-white",children:"03 Marks"}),e.jsx("p",{className:"text-slate-400 text-[11px] pt-1",children:"Python terminal-based mini project applying data structures and modules."})]}),e.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-950 border border-purple-500/40 space-y-1",children:[e.jsx("span",{className:"text-purple-400 font-bold block text-sm",children:"4. Viva Voce"}),e.jsx("span",{className:"text-xl font-extrabold text-white",children:"08 Marks"}),e.jsx("p",{className:"text-slate-400 text-[11px] pt-1",children:"Oral examination covering Python concepts, algorithm tracing, and CSO."})]})]})]}),e.jsx("div",{className:"space-y-4",children:e.jsx(_,{})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold",children:e.jsx(g,{size:18})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white tracking-tight",children:"Master Laboratory Script: All 20 Python Practical Programs"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Fully verified, docstring-documented, runnable implementation of all 20 practical programs."})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("button",{onClick:o,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 border border-slate-700 hover:border-emerald-500 text-slate-200 transition-all",children:[r?e.jsx(x,{size:14,className:"text-emerald-400"}):e.jsx(b,{size:14}),e.jsx("span",{children:r?"Copied All 20 Programs!":"Copy Code"})]}),e.jsxs("button",{onClick:t,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md",children:[e.jsx(f,{size:14}),e.jsx("span",{children:"Download .py File"})]})]})]}),e.jsx("div",{className:"rounded-2xl overflow-hidden border border-slate-800 shadow-2xl",children:e.jsx(h,{fileModule:l,title:"cbse_20_practical_lab_bank.py – 20-Program Master Repository",highlightLines:[12,25,45,65]})})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold",children:e.jsx(y,{size:18})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white tracking-tight",children:"Practical Viva Voce Master Preparation (25 Questions)"}),e.jsx("p",{className:"text-xs text-slate-400",children:"High-frequency questions asked by examiners during the 8-mark Viva Voce examination."})]})]}),e.jsx("div",{className:"rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 p-4 sm:p-6",children:e.jsx(u,{questions:v})})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(m,{}),e.jsx("div",{className:"rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 p-4 sm:p-6",children:e.jsx(p,{content:w,filename:"007_002_cbse_20_practical_lab_manual.txt"})})]})]})})}export{j as default};
