import{b as h,j as e,bg as x}from"./vendor-react-core-Doz9nIC6.js";import{P as j}from"./PythonFileLoader-hCi5osN-.js";import{P as _}from"./PlainTextPrint-C08xhKA4.js";import{F as C}from"./FAQTemplate-CkSqDH4B.js";import{T as A}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const v=`# topic9_files/palindrome_and_anagram_algorithms.py\r
# Module: 002_007_string-processing\r
# Topic: Common String Processing Algorithms (palindromes, anagrams, word counts)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 9 - File 1: Palindrome Verification & Anagram Detection Algorithms\r
Demonstrates:\r
  1. Palindrome detection algorithms:\r
     - Fast slice reversal: s == s[::-1] (O(N) time, O(N) space)\r
     - Two-pointer inward scan: O(N) time, O(1) auxiliary space (ignoring non-alphanumerics)\r
  2. Anagram verification algorithms:\r
     - Sorted string comparison: sorted(s1) == sorted(s2) (O(N log N))\r
     - Hash table frequency comparison: collections.Counter (O(N))\r
  3. Anagram group clustering algorithm\r
"""\r
\r
import collections\r
from typing import List, Dict\r
\r
def is_palindrome_slice(s: str) -> bool:\r
    """Standard slice-based palindrome checker."""\r
    clean = "".join(c.lower() for c in s if c.isalnum())\r
    return clean == clean[::-1]\r
\r
\r
def is_palindrome_two_pointer(s: str) -> bool:\r
    """\r
    Two-pointer inward scan palindrome checker.\r
    Time Complexity: O(N), Space Complexity: O(1) auxiliary space.\r
    """\r
    left = 0\r
    right = len(s) - 1\r
\r
    while left < right:\r
        # Advance left pointer if non-alphanumeric\r
        while left < right and not s[left].isalnum():\r
            left += 1\r
        # Decrement right pointer if non-alphanumeric\r
        while left < right and not s[right].isalnum():\r
            right -= 1\r
\r
        if s[left].lower() != s[right].lower():\r
            return False\r
\r
        left += 1\r
        right -= 1\r
\r
    return True\r
\r
\r
def are_anagrams_sorted(s1: str, s2: str) -> bool:\r
    """Sorting approach: O(N log N) time."""\r
    clean1 = "".join(c.lower() for c in s1 if c.isalnum())\r
    clean2 = "".join(c.lower() for c in s2 if c.isalnum())\r
    return sorted(clean1) == sorted(clean2)\r
\r
\r
def are_anagrams_counter(s1: str, s2: str) -> bool:\r
    """Hash map frequency approach: O(N) time, O(1) space for 26 alphabet letters."""\r
    clean1 = [c.lower() for c in s1 if c.isalnum()]\r
    clean2 = [c.lower() for c in s2 if c.isalnum()]\r
    return collections.Counter(clean1) == collections.Counter(clean2)\r
\r
\r
def group_anagrams(words: List[str]) -> Dict[str, List[str]]:\r
    """Groups words into anagram clusters using character frequency tuples as keys."""\r
    clusters = collections.defaultdict(list)\r
    for w in words:\r
        # Sorted character tuple as canonical key\r
        canonical_key = "".join(sorted(w.lower()))\r
        clusters[canonical_key].append(w)\r
    return dict(clusters)\r
\r
\r
def run_demo():\r
    print("=" * 65)\r
    print("1. PALINDROME ALGORITHM VERIFICATION")\r
    print("=" * 65)\r
\r
    test_palindromes = [\r
        "Racecar",\r
        "A man, a plan, a canal: Panama!",\r
        "Was it a car or a cat I saw?",\r
        "Coder & AccoTax Barrackpore",\r
        "No 'x' in Nixon",\r
        "Madam, I'm Adam"\r
    ]\r
\r
    for p in test_palindromes:\r
        is_pal = is_palindrome_two_pointer(p)\r
        status = "[PALINDROME]" if is_pal else "[NOT PALINDROME]"\r
        print(f"'{p:<35}' -> {status}")\r
\r
    print("\\n" + "=" * 65)\r
    print("2. ANAGRAM VERIFICATION (COUNTER O(N) METHOD)")\r
    print("=" * 65)\r
\r
    anagram_pairs = [\r
        ("listen", "silent"),\r
        ("Debit Card", "Bad Credit"),\r
        ("Conversation", "Voices, rant on!"),\r
        ("Python", "Java"),\r
        ("The eyes", "They see")\r
    ]\r
\r
    for w1, w2 in anagram_pairs:\r
        is_ana = are_anagrams_counter(w1, w2)\r
        status = "[ANAGRAMS]" if is_ana else "[NOT ANAGRAMS]"\r
        print(f"'{w1:<15}' vs '{w2:<18}' -> {status}")\r
\r
    print("\\n" + "=" * 65)\r
    print("3. ANAGRAM GROUPING & CLUSTERING")\r
    print("=" * 65)\r
\r
    word_pool = ["eat", "tea", "tan", "ate", "nat", "bat", "silent", "listen"]\r
    grouped = group_anagrams(word_pool)\r
    print(f"Input Words : {word_pool}\\n")\r
    print("Clustered Anagram Buckets:")\r
    for key, cluster in grouped.items():\r
        print(f"  Key '{key:<6}': {cluster}")\r
\r
\r
if __name__ == "__main__":\r
    run_demo()\r
`,E=`# topic9_files/word_counting_and_frequency_analysis.py\r
# Module: 002_007_string-processing\r
# Topic: Common String Processing Algorithms (palindromes, anagrams, word counts)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 9 - File 2: Word Counting, N-Grams & Levenshtein Edit Distance\r
Demonstrates:\r
  1. Tokenizing & counting word frequencies using collections.Counter\r
  2. First non-repeating character discovery algorithm\r
  3. Generating word N-grams (Bigrams, Trigrams) for NLP & text analysis\r
  4. Levenshtein Edit Distance algorithm using 2D Dynamic Programming (DP)\r
"""\r
\r
import collections\r
import re\r
from typing import List, Tuple\r
\r
def analyze_word_frequencies(text: str) -> collections.Counter:\r
    """Extracts words, normalizes case, and returns frequency distribution."""\r
    words = re.findall(r"\\b[a-zA-Z]+\\b", text.lower())\r
    return collections.Counter(words)\r
\r
\r
def find_first_non_repeating_char(s: str) -> Tuple[str, int]:\r
    """\r
    Finds the first character that appears exactly once in the string.\r
    Returns: (char, index) or ('', -1) if no unique character exists.\r
    """\r
    counts = collections.Counter(s)\r
    for idx, ch in enumerate(s):\r
        if counts[ch] == 1:\r
            return ch, idx\r
    return "", -1\r
\r
\r
def generate_ngrams(words: List[str], n: int = 2) -> List[Tuple[str, ...]]:\r
    """Generates contiguous sequence of N items from words list."""\r
    return [tuple(words[i:i+n]) for i in range(len(words) - n + 1)]\r
\r
\r
def levenshtein_distance(s1: str, s2: str) -> int:\r
    """\r
    Computes minimum edit operations (insertions, deletions, substitutions)\r
    needed to transform s1 into s2 using 2D Dynamic Programming.\r
    Time Complexity: O(M * N), Space Complexity: O(M * N).\r
    """\r
    m, n = len(s1), len(s2)\r
    # Initialize (m+1) x (n+1) matrix\r
    dp = [[0] * (n + 1) for _ in range(m + 1)]\r
\r
    # Base cases: cost of transforming empty string\r
    for i in range(m + 1):\r
        dp[i][0] = i\r
    for j in range(n + 1):\r
        dp[0][j] = j\r
\r
    # Fill DP table\r
    for i in range(1, m + 1):\r
        for j in range(1, n + 1):\r
            if s1[i - 1] == s2[j - 1]:\r
                dp[i][j] = dp[i - 1][j - 1]  # No operation needed\r
            else:\r
                dp[i][j] = 1 + min(\r
                    dp[i - 1][j],     # Deletion from s1\r
                    dp[i][j - 1],     # Insertion into s1\r
                    dp[i - 1][j - 1]  # Substitution\r
                )\r
\r
    return dp[m][n]\r
\r
\r
def run_demo():\r
    print("=" * 65)\r
    print("1. WORD FREQUENCY ANALYSIS")\r
    print("=" * 65)\r
\r
    sample_doc = """\r
    Python is an incredible language. Python is clean, Python is powerful,\r
    and Python is the core technology taught at Coder & AccoTax Barrackpore.\r
    Students love Python because Python makes data analysis simple and intuitive.\r
    """\r
\r
    counts = analyze_word_frequencies(sample_doc)\r
    print(f"Total Word Tokens : {sum(counts.values())}")\r
    print(f"Unique Vocabulary : {len(counts)}\\n")\r
    print("Top 5 Most Frequent Words:")\r
    for word, freq in counts.most_common(5):\r
        print(f"  * '{word:<12}': {freq} times")\r
\r
    print("\\n" + "=" * 65)\r
    print("2. FIRST NON-REPEATING CHARACTER DISCOVERY")\r
    print("=" * 65)\r
\r
    test_words = ["swiss", "barrackpore", "pythonprogramming", "aabbcc"]\r
    for w in test_words:\r
        ch, idx = find_first_non_repeating_char(w)\r
        if idx != -1:\r
            print(f"'{w:<18}' -> First unique: '{ch}' at index {idx}")\r
        else:\r
            print(f"'{w:<18}' -> No unique character found")\r
\r
    print("\\n" + "=" * 65)\r
    print("3. N-GRAM GENERATION (BIGRAMS & TRIGRAMS)")\r
    print("=" * 65)\r
\r
    tokens = ["Python", "data", "science", "course", "in", "Barrackpore"]\r
    bigrams = generate_ngrams(tokens, n=2)\r
    print(f"Tokens  : {tokens}")\r
    print(f"Bigrams : {bigrams[:4]}...")\r
\r
    print("\\n" + "=" * 65)\r
    print("4. LEVENSHTEIN EDIT DISTANCE (FUZZY STRING MATCHING)")\r
    print("=" * 65)\r
\r
    comparisons = [\r
        ("kitten", "sitting"),\r
        ("Python", "Pythan"),\r
        ("Barrackpore", "Barackpore"),\r
        ("algorithm", "altruism")\r
    ]\r
\r
    for w1, w2 in comparisons:\r
        dist = levenshtein_distance(w1, w2)\r
        print(f"Distance between '{w1:<12}' and '{w2:<12}' = {dist} edit(s)")\r
\r
\r
if __name__ == "__main__":\r
    run_demo()\r
`,O=`# topic9_files/string_compression_and_transformation.py\r
# Module: 002_007_string-processing\r
# Topic: Common String Processing Algorithms (palindromes, anagrams, word counts)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 9 - File 3: Run-Length Encoding (RLE), Case Converters & Caesar Cipher\r
Demonstrates:\r
  1. Run-Length Encoding (RLE) lossless string compression & decompression\r
  2. Case transformation algorithms: snake_case <-> camelCase <-> PascalCase\r
  3. Caesar cipher & ROT13 character encryption / decryption using ord() and chr()\r
"""\r
\r
import re\r
\r
def compress_run_length(s: str) -> str:\r
    """\r
    Compresses consecutive duplicate characters using Run-Length Encoding.\r
    Example: 'AAABBBCCDAA' -> 'A3B3C2D1A2'\r
    """\r
    if not s:\r
        return ""\r
\r
    encoded_chunks = []\r
    current_char = s[0]\r
    count = 1\r
\r
    for char in s[1:]:\r
        if char == current_char:\r
            count += 1\r
        else:\r
            encoded_chunks.append(f"{current_char}{count}")\r
            current_char = char\r
            count = 1\r
\r
    encoded_chunks.append(f"{current_char}{count}")\r
    return "".join(encoded_chunks)\r
\r
\r
def decompress_run_length(s: str) -> str:\r
    """Decompresses an RLE string back to original format."""\r
    # Find all pairs of (char, count)\r
    matches = re.findall(r"([A-Za-z])(\\d+)", s)\r
    return "".join(char * int(count) for char, count in matches)\r
\r
\r
def snake_to_camel_case(s: str) -> str:\r
    """Converts 'student_enrollment_id' to 'studentEnrollmentId'."""\r
    components = s.split("_")\r
    return components[0].lower() + "".join(x.capitalize() for x in components[1:])\r
\r
\r
def camel_to_snake_case(s: str) -> str:\r
    """Converts 'studentEnrollmentId' to 'student_enrollment_id'."""\r
    return re.sub(r"(?<!^)(?=[A-Z])", "_", s).lower()\r
\r
\r
def caesar_cipher(text: str, shift: int = 13) -> str:\r
    """Encodes/decodes text using Caesar Cipher (shift 13 = ROT13)."""\r
    result = []\r
    for ch in text:\r
        if ch.isalpha():\r
            base = ord('A') if ch.isupper() else ord('a')\r
            shifted = chr((ord(ch) - base + shift) % 26 + base)\r
            result.append(shifted)\r
        else:\r
            result.append(ch)\r
    return "".join(result)\r
\r
\r
def run_demo():\r
    print("=" * 65)\r
    print("1. RUN-LENGTH ENCODING (RLE) COMPRESSION")\r
    print("=" * 65)\r
\r
    original_sequence = "AAAAABBBCCCCCCDDDDDEEEEEEE"\r
    compressed = compress_run_length(original_sequence)\r
    decompressed = decompress_run_length(compressed)\r
\r
    print(f"Original String     : '{original_sequence}' (Length: {len(original_sequence)})")\r
    print(f"Compressed (RLE)    : '{compressed}' (Length: {len(compressed)})")\r
    print(f"Decompressed String : '{decompressed}'")\r
    print(f"Lossless Match Check: {original_sequence == decompressed}\\n")\r
\r
    print("=" * 65)\r
    print("2. CASE CONVERSION ALGORITHMS")\r
    print("=" * 65)\r
\r
    snake_samples = ["student_first_name", "batch_enrollment_count", "total_fee_payable"]\r
    for sn in snake_samples:\r
        camel = snake_to_camel_case(sn)\r
        reverted = camel_to_snake_case(camel)\r
        print(f"Snake: '{sn:<24}' -> Camel: '{camel:<22}' -> Reverted: '{reverted}'")\r
\r
    print("\\n" + "=" * 65)\r
    print("3. CAESAR CIPHER & ROT13 ENCRYPTION")\r
    print("=" * 65)\r
\r
    secret = "Coder & AccoTax Barrackpore: Python 2026 Batch"\r
    encrypted = caesar_cipher(secret, shift=13)  # ROT13\r
    decrypted = caesar_cipher(encrypted, shift=13)  # Applying ROT13 twice decrypts!\r
\r
    print(f"Original  : '{secret}'")\r
    print(f"Encrypted : '{encrypted}'")\r
    print(f"Decrypted : '{decrypted}'")\r
\r
\r
if __name__ == "__main__":\r
    run_demo()\r
`,T=`# topic9_files/industrial_text_analytics_engine.py\r
# Module: 002_007_string-processing\r
# Topic: Common String Processing Algorithms (palindromes, anagrams, word counts)\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 9 - File 4: Enterprise Text Analytics & Course Catalog Fuzzy Search Engine\r
Demonstrates:\r
  1. Automated text mining, readability stats, and lexical density analysis\r
  2. Stop-word filtering & top keyword frequency distributions\r
  3. Fuzzy string matching for typo-tolerant course queries (Levenshtein Distance)\r
  4. Comprehensive analytical audit reporting\r
"""\r
\r
import collections\r
import re\r
from typing import List, Dict, Any, Tuple\r
\r
# Standard English stop words to filter out during keyword extraction\r
STOP_WORDS = {\r
    "a", "an", "and", "are", "as", "at", "be", "by", "for", "from",\r
    "has", "he", "in", "is", "it", "its", "of", "on", "that", "the",\r
    "to", "was", "were", "will", "with", "all", "can", "our", "you"\r
}\r
\r
COURSE_CATALOG = [\r
    "Python Programming (Basic to Pro)",\r
    "Data Science & Machine Learning",\r
    "Web Development with FastAPI & React",\r
    "Relational Database Management with MySQL",\r
    "Financial Accounting & GST Compliance",\r
    "TailwindCSS & Modern Web UI Design"\r
]\r
\r
class TextAnalyticsEngine:\r
    """Industrial text mining and fuzzy search suite."""\r
\r
    @staticmethod\r
    def compute_lexical_metrics(text: str) -> Dict[str, Any]:\r
        """Calculates total words, unique vocabulary, lexical density, and reading time."""\r
        words = re.findall(r"\\b[a-zA-Z]+\\b", text.lower())\r
        total_words = len(words)\r
        unique_words = len(set(words))\r
        \r
        # Lexical density = (unique words / total words) * 100\r
        density = (unique_words / total_words * 100) if total_words > 0 else 0.0\r
        # Estimated reading time at 200 words/min\r
        reading_time_sec = (total_words / 200) * 60\r
\r
        return {\r
            "total_words": total_words,\r
            "unique_words": unique_words,\r
            "lexical_density": density,\r
            "reading_time_sec": reading_time_sec,\r
            "char_count": len(text),\r
        }\r
\r
    @staticmethod\r
    def extract_top_keywords(text: str, top_n: int = 5) -> List[Tuple[str, int]]:\r
        """Filters stop words and extracts top substantive keywords."""\r
        words = re.findall(r"\\b[a-zA-Z]+\\b", text.lower())\r
        filtered_words = [w for w in words if w not in STOP_WORDS and len(w) > 2]\r
        return collections.Counter(filtered_words).most_common(top_n)\r
\r
    @staticmethod\r
    def levenshtein(s1: str, s2: str) -> int:\r
        """2D DP implementation for edit distance."""\r
        m, n = len(s1), len(s2)\r
        dp = [[0] * (n + 1) for _ in range(m + 1)]\r
        for i in range(m + 1): dp[i][0] = i\r
        for j in range(n + 1): dp[0][j] = j\r
        for i in range(1, m + 1):\r
            for j in range(1, n + 1):\r
                if s1[i - 1] == s2[j - 1]:\r
                    dp[i][j] = dp[i - 1][j - 1]\r
                else:\r
                    dp[i][j] = 1 + min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])\r
        return dp[m][n]\r
\r
    @classmethod\r
    def fuzzy_course_search(cls, query: str, max_distance: int = 4) -> List[Tuple[str, int]]:\r
        """Finds closest matching courses for a misspelled query."""\r
        results = []\r
        q_clean = query.strip().lower()\r
        for course in COURSE_CATALOG:\r
            # Check full string distance or token substring distance\r
            dist = cls.levenshtein(q_clean, course.lower()[:len(q_clean)])\r
            if dist <= max_distance:\r
                results.append((course, dist))\r
        # Sort by closest match (minimum edit distance)\r
        return sorted(results, key=lambda x: x[1])\r
\r
\r
def run_analytics_demo():\r
    print("=" * 75)\r
    print("CODER & ACCOTAX - ENTERPRISE TEXT ANALYTICS & FUZZY SEARCH ENGINE")\r
    print("=" * 75)\r
\r
    sample_curriculum = """\r
    Python is the core foundation at Coder & AccoTax Barrackpore.\r
    Our comprehensive Python programming course covers data structures, algorithms,\r
    regular expressions, database querying with SQL, and modern web application development.\r
    Students build real-world projects, write clean Python code, and master industry workflows.\r
    Python empowers learners to excel in software engineering and data analytics.\r
    """\r
\r
    # 1. Lexical Metrics\r
    metrics = TextAnalyticsEngine.compute_lexical_metrics(sample_curriculum)\r
    print("\\n--- 1. DOCUMENT READABILITY & LEXICAL METRICS ---")\r
    print(f"Total Word Tokens : {metrics['total_words']}")\r
    print(f"Unique Vocabulary : {metrics['unique_words']}")\r
    print(f"Lexical Density   : {metrics['lexical_density']:.1f}%")\r
    print(f"Est. Reading Time : {metrics['reading_time_sec']:.1f} seconds")\r
\r
    # 2. Top Keywords\r
    top_kw = TextAnalyticsEngine.extract_top_keywords(sample_curriculum, top_n=5)\r
    print("\\n--- 2. TOP KEYWORDS (AFTER STOP-WORD FILTERING) ---")\r
    for kw, count in top_kw:\r
        print(f"  * Keyword: '{kw:<14}' -> Frequency: {count}")\r
\r
    # 3. Typo-Tolerant Course Search\r
    print("\\n--- 3. FUZZY SEARCH (TYPO-TOLERANT COURSE FINDER) ---")\r
    misspelled_queries = ["Pythn", "FastApi", "MySql", "Tailwnd"]\r
    for query in misspelled_queries:\r
        matches = TextAnalyticsEngine.fuzzy_course_search(query)\r
        print(f"User Query: '{query}'")\r
        if matches:\r
            for course, dist in matches:\r
                print(f"  -> Match: '{course}' (Edit Distance: {dist})")\r
        else:\r
            print("  -> No matching course found.")\r
        print()\r
\r
\r
if __name__ == "__main__":\r
    run_analytics_demo()\r
`,S=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
            PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_007: STRING PROCESSING\r
        TOPIC 9: COMMON STRING PROCESSING ALGORITHMS (PALINDROMES, ANAGRAMS, WORD COUNTS)\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. PALINDROME VERIFICATION ALGORITHMS\r
--------------------------------------------------------------------------------\r
  A. Slicing Approach:\r
       clean = "".join(c.lower() for c in s if c.isalnum())\r
       return clean == clean[::-1]\r
       • Time Complexity: O(N)\r
       • Space Complexity: O(N) (Creates reversed copy of string)\r
\r
  B. Two-Pointer Inward Scan (Optimal Space):\r
       left, right = 0, len(s) - 1\r
       while left < right:\r
           while left < right and not s[left].isalnum(): left += 1\r
           while left < right and not s[right].isalnum(): right -= 1\r
           if s[left].lower() != s[right].lower(): return False\r
           left += 1; right -= 1\r
       return True\r
       • Time Complexity: O(N)\r
       • Space Complexity: O(1) auxiliary space (No string copying!)\r
\r
--------------------------------------------------------------------------------\r
2. ANAGRAM DETECTION ALGORITHMS\r
--------------------------------------------------------------------------------\r
  A. Sorting Method:\r
       return sorted(s1.lower()) == sorted(s2.lower())\r
       • Time Complexity: O(N log N) (Dominated by Timsort)\r
       • Space Complexity: O(N) (Allocates sorted lists)\r
\r
  B. Frequency Counter Method:\r
       return collections.Counter(s1.lower()) == collections.Counter(s2.lower())\r
       • Time Complexity: O(N) (Linear single-pass hashing)\r
       • Space Complexity: O(1) (At most 26 lowercase English character keys)\r
\r
--------------------------------------------------------------------------------\r
3. LEVENSHTEIN EDIT DISTANCE (DYNAMIC PROGRAMMING)\r
--------------------------------------------------------------------------------\r
  • Calculates minimum number of single-character edits (Insert, Delete, Replace)\r
    to transform string s1 into s2.\r
  • DP State Recurrence:\r
      if s1[i-1] == s2[j-1]:\r
          dp[i][j] = dp[i-1][j-1]\r
      else:\r
          dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])\r
  • Time Complexity: O(M * N) | Space Complexity: O(M * N)\r
\r
--------------------------------------------------------------------------------\r
4. RUN-LENGTH ENCODING (RLE) COMPRESSION\r
--------------------------------------------------------------------------------\r
  • Replaces consecutive duplicate characters with char + count:\r
      Input  : "AAAAABBBCCCCCCDDDDDEEEEEEE"\r
      Output : "A5B3C6D5E7"\r
  • Decompression:\r
      "".join(char * int(count) for char, count in re.findall(r"([A-Za-z])(\\d+)", s))\r
\r
--------------------------------------------------------------------------------\r
5. SUMMARY OF ALGORITHMIC COMPLEXITY\r
--------------------------------------------------------------------------------\r
  Algorithm                     Time Complexity    Space Complexity\r
  ------------------------------------------------------------------------------\r
  Two-Pointer Palindrome        O(N)               O(1)\r
  Counter Anagram Check         O(N)               O(1) (fixed alphabet)\r
  Anagram Group Clustering      O(N * K log K)     O(N * K)\r
  First Unique Character        O(N)               O(1)\r
  Levenshtein Distance          O(M * N)           O(M * N)\r
  Run-Length Encoding           O(N)               O(N)\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 9: COMMON STRING PROCESSING ALGORITHMS\r
================================================================================\r
`,R=[{question:"What is the optimal algorithm to check if a string is a palindrome while ignoring punctuation, spaces, and case?",shortAnswer:"The Two-Pointer Inward Scan algorithm achieves O(N) time complexity with O(1) auxiliary space.",explanation:"By placing one pointer at index 0 and another at len(s) - 1, and skipping non-alphanumeric characters inward, you avoid allocating a new reversed copy of the string.",hint:"Two pointers scanning inward achieve O(1) space.",level:"moderate",codeExample:`def is_palindrome(s):
    l, r = 0, len(s) - 1
    while l < r:
        while l < r and not s[l].isalnum(): l += 1
        while l < r and not s[r].isalnum(): r -= 1
        if s[l].lower() != s[r].lower(): return False
        l += 1; r -= 1
    return True`},{question:"What is the difference in time complexity between checking anagrams via sorting vs collections.Counter?",shortAnswer:"Sorting takes O(N log N) time; collections.Counter takes O(N) linear time.",explanation:"Sorting both strings requires Timsort (O(N log N)). Building a character frequency hashmap with Counter counts every character in a single linear pass (O(N)).",hint:"Sorting is O(N log N); Counter is O(N).",level:"basic",codeExample:`import collections
# O(N log N):
print(sorted('listen') == sorted('silent'))
# O(N):
print(collections.Counter('listen') == collections.Counter('silent'))`},{question:"How do you group a list of words into clusters of anagrams in Python?",shortAnswer:"Use a collections.defaultdict(list) where the key is the sorted character string (canonical key) of each word.",explanation:"Words like 'eat', 'tea', and 'ate' all share the same sorted key 'aet', allowing them to be appended into the same bucket in O(N * K log K) time.",hint:"Use sorted(word) as the dictionary key.",level:"moderate",codeExample:`import collections
def group_anagrams(words):
    groups = collections.defaultdict(list)
    for w in words:
        groups[''.join(sorted(w))].append(w)
    return list(groups.values())`},{question:"What is Levenshtein Edit Distance?",shortAnswer:"The minimum number of single-character operations (insertions, deletions, substitutions) required to transform one string into another.",explanation:"Levenshtein distance is the foundational algorithm for spell checkers, typo-tolerant search bars, and DNA sequence alignment, computed in O(M * N) using 2D Dynamic Programming.",hint:"Measures min edits (insert, delete, replace) between strings.",level:"moderate",codeExample:"# kitten -> sitting (replace k->s, replace e->i, insert g = distance 3)"},{question:"How do you find the first non-repeating (unique) character in a string in O(N) time?",shortAnswer:"Count character frequencies using collections.Counter(s), then iterate through the string in order and return the first character with frequency 1.",explanation:"The first pass counts frequencies in O(N); the second pass finds the first unique character in original left-to-right order.",hint:"Count frequencies in pass 1, find first count==1 in pass 2.",level:"moderate",codeExample:`import collections
def first_unique(s):
    counts = collections.Counter(s)
    for ch in s:
        if counts[ch] == 1:
            return ch
    return None

print(first_unique('swiss'))  # 'w'`},{question:"What is Run-Length Encoding (RLE) and how does it compress strings?",shortAnswer:"RLE replaces consecutive repeated characters with the character followed by its repetition count: e.g. 'AAAAABBBCC' -> 'A5B3C2'.",explanation:"RLE is a simple, lossless data compression algorithm highly effective on strings with long runs of repeated symbols.",hint:"Replaces runs of duplicate characters with char+count.",level:"basic",codeExample:`def rle_compress(s):
    if not s: return ''
    res, cur, count = [], s[0], 1
    for ch in s[1:]:
        if ch == cur: count += 1
        else: res.append(f'{cur}{count}'); cur = ch; count = 1
    res.append(f'{cur}{count}')
    return ''.join(res)

print(rle_compress('AAAAABBBCC'))  # 'A5B3C2'`},{question:"How do you generate word Bigrams and Trigrams in Python?",shortAnswer:"[tuple(words[i:i+n]) for i in range(len(words) - n + 1)]",explanation:"A sliding window of size n slices the word list to create contiguous n-token tuples.",hint:"Use a sliding slice of size n across the list.",level:"basic",codeExample:`words = ['Python', 'data', 'science', 'pro']
bigrams = [tuple(words[i:i+2]) for i in range(len(words)-1)]
print(bigrams)  # [('Python', 'data'), ('data', 'science'), ('science', 'pro')]`},{question:"How do you convert a string from snake_case to camelCase in Python?",shortAnswer:"components = s.split('_'); return components[0] + ''.join(x.title() for x in components[1:])",explanation:"Splitting on underscores, keeping the first word lowercase, and capitalizing subsequent components produces camelCase.",hint:"Split by underscore and capitalize tail words.",level:"basic",codeExample:`s = 'student_first_name'
parts = s.split('_')
print(parts[0] + ''.join(x.capitalize() for x in parts[1:]))
# 'studentFirstName'`},{question:"How do you convert a string from camelCase to snake_case using regex?",shortAnswer:"re.sub(r'(?<!^)(?=[A-Z])', '_', s).lower()",explanation:"The lookahead (?=[A-Z]) and negative lookbehind (?<!^) insert an underscore before every uppercase letter except at index 0.",hint:"Insert '_' before uppercase letters with regex lookahead.",level:"moderate",codeExample:`import re
print(re.sub(r'(?<!^)(?=[A-Z])', '_', 'studentFirstName').lower())
# 'student_first_name'`},{question:"How does the Caesar Cipher / ROT13 algorithm work in Python?",shortAnswer:"It shifts each alphabetic character by N positions (13 for ROT13) in the alphabet using ord() and chr() with modulo 26 arithmetic.",explanation:"ROT13 is symmetric: applying ROT13 to an encrypted string decrypts it back to original plaintext because (x + 13 + 13) % 26 == x.",hint:"Shift characters using chr((ord(c) - base + shift) % 26 + base).",level:"moderate",codeExample:`def rot13(text):
    res = []
    for c in text:
        if c.isalpha():
            base = ord('A') if c.isupper() else ord('a')
            res.append(chr((ord(c) - base + 13) % 26 + base))
        else: res.append(c)
    return ''.join(res)

print(rot13('Python'))  # 'Clguba'
print(rot13('Clguba'))  # 'Python'`},{question:"Why does the slicing palindrome check `s == s[::-1]` consume O(N) auxiliary space?",shortAnswer:"Because `s[::-1]` creates a brand new reversed string object in memory containing N characters.",explanation:"For short strings, slice reversal is blazing fast in CPython. For massive multi-megabyte strings, the two-pointer approach avoids allocating another copy in RAM.",hint:"Reversed slice creates a new string in memory.",level:"basic",codeExample:"# Slicing creates new object; two-pointer uses pointers in-place"},{question:"How do you find the top 5 most common words in a large text document?",shortAnswer:"collections.Counter(re.findall(r'\\b\\w+\\b', text.lower())).most_common(5)",explanation:"Regex tokenizes words, lower() normalizes case, and Counter.most_common(5) returns the top 5 (word, frequency) tuples efficiently using a heap.",hint:"Use Counter(words).most_common(5).",level:"basic",codeExample:`import collections, re
words = re.findall(r'\\b\\w+\\b', 'Python is great. Python is fast. Python is fun.')
print(collections.Counter(words).most_common(2))
# [('Python', 3), ('is', 3)]`},{question:"What is the time complexity of building collections.Counter(words) vs sorting a word list?",shortAnswer:"Counter takes O(N) linear time; sorting takes O(N log N) time.",explanation:"Hashing each element into a Counter runs in average O(1) time per word, totaling O(N) for N words.",hint:"Counter is O(N); sorting is O(N log N).",level:"basic",codeExample:"# Counter is significantly faster than sorting for frequency analysis"},{question:"How do you calculate the Lexical Density of a text document?",shortAnswer:"(Number of Unique Words / Total Number of Words) * 100",explanation:"Lexical density measures vocabulary richness. A higher percentage indicates a richer, more diverse vocabulary.",hint:"(len(set(words)) / len(words)) * 100",level:"basic",codeExample:`words = ['python', 'code', 'python', 'fast']
density = (len(set(words)) / len(words)) * 100
print(f'{density:.1f}%')  # '75.0%'`},{question:"How do you decompress a Run-Length Encoded string like 'A5B3C2' using regex?",shortAnswer:"''.join(char * int(count) for char, count in re.findall(r'([A-Za-z])(\\d+)', s))",explanation:"re.findall captures each character and its associated integer count, allowing direct string multiplication and joining.",hint:"Extract (char, count) pairs with regex and multiply.",level:"moderate",codeExample:`import re
rle = 'A5B3C2'
print(''.join(c * int(n) for c, n in re.findall(r'([A-Za-z])(\\d+)', rle)))
# 'AAAAABBBCC'`},{question:"What is the base case cost in the Levenshtein Distance dynamic programming matrix?",shortAnswer:"Transforming an empty string of length 0 into a string of length N costs N insertions (dp[0][j] = j), and vice versa (dp[i][0] = i).",explanation:"Row 0 and Column 0 are initialized to represent the cost of deleting all characters or inserting all characters.",hint:"Row 0 = j insertions; Column 0 = i deletions.",level:"moderate",codeExample:"# dp[i][0] = i, dp[0][j] = j"},{question:"How do you implement a typo-tolerant fuzzy search for a course catalog in Python?",shortAnswer:"Iterate through catalog items, calculate Levenshtein distance between query and each title, and return titles with distance <= threshold sorted by distance.",explanation:"Fuzzy matching allows users who type 'Pythn' or 'FastApi' to find 'Python Programming' and 'FastAPI Web Development'.",hint:"Filter catalog titles by Levenshtein distance <= threshold.",level:"moderate",codeExample:"# Filters catalog items where levenshtein(query, title) <= 3"},{question:"How do you remove English stop words (like 'the', 'is', 'in') from a word frequency count?",shortAnswer:"filtered_words = [w for w in words if w not in STOP_WORDS_SET]",explanation:"Filtering against a set of stop words has O(1) membership lookup, stripping noise words before frequency analysis.",hint:"Use set membership 'if w not in stop_words'.",level:"basic",codeExample:`stop_words = {'is', 'the', 'in', 'at'}
words = ['python', 'is', 'the', 'best']
print([w for w in words if w not in stop_words])  # ['python', 'best']`},{question:"What is an Anagram?",shortAnswer:"A word or phrase formed by rearranging the letters of a different word or phrase, using all original letters exactly once.",explanation:"For example, 'listen' and 'silent' are anagrams because they contain the exact same multiset of characters.",hint:"Rearranging letters of a word to produce another word.",level:"basic",codeExample:"print(sorted('rail safety') == sorted('fairy tales'))  # True"},{question:"What is a Palindrome?",shortAnswer:"A word, phrase, number, or sequence of characters that reads the same forwards and backwards.",explanation:"Examples include 'racecar', 'level', and phrases like 'A man, a plan, a canal: Panama!'.",hint:"Reads identically forwards and backwards.",level:"basic",codeExample:"print('racecar' == 'racecar'[::-1])  # True"},{question:"What happens in RLE compression when consecutive characters do NOT repeat (e.g. 'ABCDEF')?",shortAnswer:"The compressed output becomes larger than the original: 'A1B1C1D1E1F1' (12 chars vs 6 chars).",explanation:"RLE is ineffective on random or non-repeating data. It should only be used when character repetition runs are high.",hint:"RLE expands non-repeating text.",level:"moderate",codeExample:"# 'ABC' -> 'A1B1C1' (Negative compression ratio)"},{question:"How do you check if two strings are anagrams in Python in a single line of code?",shortAnswer:"collections.Counter(s1) == collections.Counter(s2)",explanation:"Counter automatically builds and compares character frequency dictionaries.",hint:"Counter(s1) == Counter(s2)",level:"basic",codeExample:`from collections import Counter
print(Counter('anagram') == Counter('nagaram'))  # True`},{question:"What is the longest palindromic substring algorithm time complexity?",shortAnswer:"O(N^2) using center expansion, or O(N) using Manacher's Algorithm.",explanation:"Expanding around each potential center takes O(N^2); Manacher's algorithm achieves linear O(N) by exploiting palindrome symmetry.",hint:"Center expansion is O(N^2); Manacher's is O(N).",level:"complex",codeExample:"# Center expansion tests 2N-1 centers"},{question:"How do you count character frequencies in a string using Python built-ins without any imports?",shortAnswer:"d = {}; for c in s: d[c] = d.get(c, 0) + 1",explanation:"dict.get(c, 0) returns 0 for unseen keys and increments by 1 on each encounter.",hint:"Use d[c] = d.get(c, 0) + 1.",level:"basic",codeExample:`s = 'barrackpore'
d = {}
for c in s:
    d[c] = d.get(c, 0) + 1
print(d['r'])  # 3`},{question:"How do you find the most frequent character in a string in one line?",shortAnswer:"max(set(s), key=s.count) or collections.Counter(s).most_common(1)[0][0]",explanation:"Counter.most_common(1) is O(N), whereas max with key=s.count is O(N^2) due to repeated count() calls.",hint:"Use Counter(s).most_common(1)[0][0] for O(N) performance.",level:"moderate",codeExample:`from collections import Counter
print(Counter('barrackpore').most_common(1)[0])  # ('r', 3)`}];function W(){const f=h.useRef([]),[u,b]=h.useState("palindrome"),[l,N]=h.useState("palindrome"),[o,p]=h.useState("A man, a plan, a canal: Panama!"),[g,y]=h.useState("Panama");h.useEffect(()=>{const n=new IntersectionObserver(r=>{r.forEach(s=>{s.isIntersecting&&s.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return f.current.forEach(r=>{r&&n.observe(r)}),()=>n.disconnect()},[]);const d=n=>{n&&!f.current.includes(n)&&f.current.push(n)},i=(()=>{if(l==="palindrome"){const n=o.toLowerCase().replace(/[^a-z0-9]/g,""),r=n===n.split("").reverse().join("");return{isPal:r,cleanString:n,pySnippet:`def is_palindrome(s):
    clean = "".join(c.lower() for c in s if c.isalnum())
    return clean == clean[::-1]

print(is_palindrome("${o}"))  # ${r?"True":"False"}`}}else if(l==="anagram"){const n=o.toLowerCase().replace(/[^a-z0-9]/g,"").split("").sort().join(""),r=g.toLowerCase().replace(/[^a-z0-9]/g,"").split("").sort().join(""),s=n.length>0&&n===r;return{isAna:s,c1:n,c2:r,pySnippet:`from collections import Counter
def are_anagrams(s1, s2):
    c1 = [c.lower() for c in s1 if c.isalnum()]
    c2 = [c.lower() for c in s2 if c.isalnum()]
    return Counter(c1) == Counter(c2)

print(are_anagrams("${o}", "${g}"))  # ${s?"True":"False"}`}}else if(l==="frequency"){const n=o.toLowerCase().match(/\b[a-z0-9]+\b/g)||[],r={};n.forEach(c=>r[c]=(r[c]||0)+1);const s=Object.entries(r).sort((c,a)=>a[1]-c[1]);return{totalWords:n.length,uniqueWords:Object.keys(r).length,topWords:s.slice(0,5),pySnippet:`import collections, re
words = re.findall(r"\\b\\w+\\b", text.lower())
counts = collections.Counter(words)
print(counts.most_common(5))`}}else if(l==="rle"){if(!o)return{compressed:"",ratio:"0%"};let n="",r=o[0],s=1;for(let a=1;a<o.length;a++)o[a]===r?s++:(n+=`${r}${s}`,r=o[a],s=1);n+=`${r}${s}`;const c=(n.length/o.length*100).toFixed(1);return{compressed:n,origLen:o.length,compLen:n.length,ratio:c,pySnippet:`def rle_compress(s):
    if not s: return ""
    res, cur, count = [], s[0], 1
    for ch in s[1:]:
        if ch == cur: count += 1
        else: res.append(f"{cur}{count}"); cur = ch; count = 1
    res.append(f"{cur}{count}")
    return "".join(res)`}}else if(l==="levenshtein"){const n=o.toLowerCase(),r=g.toLowerCase(),s=n.length,c=r.length,a=Array.from({length:s+1},()=>Array(c+1).fill(0));for(let t=0;t<=s;t++)a[t][0]=t;for(let t=0;t<=c;t++)a[0][t]=t;for(let t=1;t<=s;t++)for(let m=1;m<=c;m++)n[t-1]===r[m-1]?a[t][m]=a[t-1][m-1]:a[t][m]=1+Math.min(a[t-1][m],a[t][m-1],a[t-1][m-1]);const w=a[s][c];return{dist:w,pySnippet:`def levenshtein(s1, s2):
    m, n = len(s1), len(s2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m + 1): dp[i][0] = i
    for j in range(n + 1): dp[0][j] = j
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s1[i-1] == s2[j-1]: dp[i][j] = dp[i-1][j-1]
            else: dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
    return dp[m][n]

print(levenshtein("${o}", "${g}"))  # ${w}`}}})();return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-indigo-500/30 selection:text-indigo-200",children:[e.jsx("style",{children:`
        .section-hidden {
          transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .section-visible {
          transform: translateY(0);
        }
        @keyframes pulseGlowIndigo {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(99, 102, 241, 0.4)); }
          50% { filter: drop-shadow(0 0 10px rgba(99, 102, 241, 0.8)); }
        }
        .animate-glow-indigo {
          animation: pulseGlowIndigo 3s infinite ease-in-out;
        }
      `}),e.jsxs("header",{ref:d,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-indigo-950/80 text-indigo-300 px-3 py-1 rounded-full border border-indigo-800/80 shadow-sm shadow-indigo-950/50",children:"Segment 2 • Module 002_007"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-violet-950/80 text-violet-300 px-3 py-1 rounded-full border border-violet-800/80 shadow-sm shadow-violet-950/50",children:"Topic 9 (Module Capstone)"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"String Processing & Pattern Handling"})]}),e.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:"Common String Algorithms: Palindromes, Anagrams & Word Counts"}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master production string algorithms: two-pointer ",e.jsx("span",{className:"text-emerald-400 font-semibold",children:"O(1)"})," space palindrome verification, ",e.jsx("span",{className:"text-indigo-400 font-semibold",children:"O(N)"})," Counter anagram matching, N-gram generation, 2D Dynamic Programming for ",e.jsx("span",{className:"text-purple-400 font-semibold",children:"Levenshtein Edit Distance"}),", and Run-Length Encoding (RLE) lossless compression."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚡ Two-Pointer Palindromes (O(N) Time, O(1) Space)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔠 O(N) Anagram Detection with collections.Counter"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📊 2D DP Levenshtein Edit Distance (Fuzzy Search)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🗜️ Run-Length Encoding (RLE) Lossless Compression"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:d,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. Core Algorithmic Paradigms in String Processing"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"String algorithms represent the intersection of data structures, hashing, pointer manipulation, and dynamic programming. Choosing the optimal algorithm prevents catastrophic performance bottlenecks:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-indigo-950/40 border border-indigo-800/60 shadow-lg shadow-indigo-950/30 transition-all duration-300 hover:scale-[1.01] hover:border-indigo-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-indigo-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"↔️"})," Two-Pointer Technique"]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-2",children:["Inward scanning eliminates memory allocation overhead by checking characters symmetrically in ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"O(1)"})," auxiliary space."]}),e.jsx("span",{className:"text-xs text-indigo-400/80 font-mono",children:"Use Case: Palindromes & In-Place Reversal"})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg shadow-purple-950/30 transition-all duration-300 hover:scale-[1.01] hover:border-purple-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"📊"})," Frequency Hashing"]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-2",children:["Using ",e.jsx("code",{className:"text-purple-300 font-mono",children:"collections.Counter"})," counts character multisets in linear ",e.jsx("code",{className:"text-purple-300 font-mono",children:"O(N)"})," time, beating sorting."]}),e.jsx("span",{className:"text-xs text-purple-400/80 font-mono",children:"Use Case: Anagrams & Vocabulary Density"})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 shadow-lg shadow-emerald-950/30 transition-all duration-300 hover:scale-[1.01] hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"📐"})," Dynamic Programming"]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-2",children:["Constructing 2D subproblem grids to find minimum edit costs (insertions, deletions, substitutions) in ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"O(M*N)"}),"."]}),e.jsx("span",{className:"text-xs text-emerald-400/80 font-mono",children:"Use Case: Levenshtein & Typo-Tolerant Search"})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-indigo-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-2",children:"The O(N²) Quadratic Frequency Trap"}),e.jsxs("p",{className:"text-sm sm:text-base text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-400 font-mono",children:"max(set(s), key=s.count)"})," to find the most frequent character scans the entire string once for EVERY unique character, degrading to ",e.jsx("code",{className:"text-rose-400 font-mono",children:"O(N²)"}),"!"]}),e.jsxs("p",{className:"text-sm sm:text-base text-emerald-300 font-semibold mt-1",children:["✓ Best Practice: Use ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"collections.Counter(s).most_common(1)"})," for clean, single-pass ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"O(N)"})," linear performance."]})]})]})]}),e.jsxs("section",{ref:d,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"🔍"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Two-Pointer Scans & Dynamic Programming"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>b("palindrome"),className:x("px-3 py-1.5 rounded-lg transition-all",u==="palindrome"?"bg-indigo-900/50 text-indigo-300 border border-indigo-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Two-Pointer Inward Scan"}),e.jsx("button",{onClick:()=>b("anagram"),className:x("px-3 py-1.5 rounded-lg transition-all",u==="anagram"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Anagram Frequency Vector"}),e.jsx("button",{onClick:()=>b("dp"),className:x("px-3 py-1.5 rounded-lg transition-all",u==="dp"?"bg-emerald-900/50 text-emerald-300 border border-emerald-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Levenshtein DP Grid"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Exploring pointer convergence, character frequency equivalence, and distance matrices:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:u==="palindrome"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#818cf8",fontSize:"14",fontWeight:"bold",children:'OPTIMAL TWO-POINTER INWARD PALINDROME SCAN: Target = "R A C E C A R"'}),e.jsxs("g",{transform:"translate(100, 60)",children:[["R","A","C","E","C","A","R"].map((n,r)=>e.jsxs("g",{children:[e.jsx("rect",{x:r*90,y:"0",width:"70",height:"70",rx:"8",fill:"#1e1b4b",stroke:"#6366f1",strokeWidth:"1.5"}),e.jsx("text",{x:r*90+35,y:"45",fill:"#f8fafc",fontSize:"24",fontWeight:"bold",textAnchor:"middle",children:n}),e.jsxs("text",{x:r*90+35,y:"95",fill:"#94a3b8",fontSize:"12",textAnchor:"middle",children:["i=",r]})]},r)),e.jsx("path",{d:"M 35 120 L 35 150 M 25 130 L 35 120 L 45 130",stroke:"#34d399",strokeWidth:"2.5",fill:"none"}),e.jsx("text",{x:"35",y:"175",fill:"#34d399",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"Left (i=0)"}),e.jsx("path",{d:"M 575 120 L 575 150 M 565 130 L 575 120 L 585 130",stroke:"#38bdf8",strokeWidth:"2.5",fill:"none"}),e.jsx("text",{x:"575",y:"175",fill:"#38bdf8",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"Right (i=6)"})]}),e.jsxs("g",{transform:"translate(30, 250)",children:[e.jsx("rect",{x:"0",y:"0",width:"810",height:"60",rx:"6",fill:"#090d16",stroke:"#334155"}),e.jsx("text",{x:"20",y:"25",fill:"#a7f3d0",fontSize:"12",fontWeight:"bold",children:"Pointer Convergence Rule:"}),e.jsx("text",{x:"20",y:"45",fill:"#cbd5e1",fontSize:"12",children:"Compares s[left] with s[right]. If equal, advances left += 1 and decrements right -= 1. Zero auxiliary memory allocation (O(1) space)!"})]})]}):u==="anagram"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:'ANAGRAM FREQUENCY COMPARISON: "listen" VS "silent"'}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"150",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"14",fontWeight:"bold",children:'Word 1: "listen"'}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"13 font-mono",children:"Counter: {'e':1, 'i':1, 'l':1, 'n':1, 's':1, 't':1}"}),e.jsx("text",{x:"20",y:"95",fill:"#a7f3d0",fontSize:"12 font-mono",children:'Canonical Key: "".join(sorted("listen")) → "eilnst"'}),e.jsx("text",{x:"20",y:"125",fill:"#38bdf8",fontSize:"11",children:"Time: O(N) single-pass frequency count"})]}),e.jsxs("g",{transform:"translate(450, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"390",height:"150",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"14",fontWeight:"bold",children:'Word 2: "silent"'}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"13 font-mono",children:"Counter: {'e':1, 'i':1, 'l':1, 'n':1, 's':1, 't':1}"}),e.jsx("text",{x:"20",y:"95",fill:"#a7f3d0",fontSize:"12 font-mono",children:'Canonical Key: "".join(sorted("silent")) → "eilnst"'}),e.jsx("text",{x:"20",y:"125",fill:"#38bdf8",fontSize:"11",children:"Time: O(N) single-pass frequency count"})]}),e.jsxs("g",{transform:"translate(30, 220)",children:[e.jsx("rect",{x:"0",y:"0",width:"810",height:"80",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"35",fill:"#a7f3d0",fontSize:"14",fontWeight:"bold",children:'Equivalence Check: Counter("listen") == Counter("silent")'}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"13",children:"→ Returns True! Both strings contain identical multisets of characters."})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#34d399",fontSize:"14",fontWeight:"bold",children:'LEVENSHTEIN 2D DYNAMIC PROGRAMMING MATRIX: "kitten" → "sitting"'}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"810",height:"150",rx:"8",fill:"#090d16",stroke:"#334155"}),e.jsx("text",{x:"20",y:"30",fill:"#38bdf8",fontSize:"13",fontWeight:"bold",children:"DP State Recurrence Equation:"}),e.jsxs("text",{x:"20",y:"60",fill:"#f8fafc",fontSize:"12",children:["if s1[i-1] == s2[j-1]:   ",e.jsx("tspan",{fill:"#34d399",fontWeight:"bold",children:"dp[i][j] = dp[i-1][j-1]"}),"  (Zero edit cost)"]}),e.jsxs("text",{x:"20",y:"90",fill:"#f8fafc",fontSize:"12",children:["else:   ",e.jsx("tspan",{fill:"#f59e0b",fontWeight:"bold",children:"dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])"}),"  (Delete, Insert, Replace)"]}),e.jsx("text",{x:"20",y:"125",fill:"#94a3b8",fontSize:"11",children:"Time Complexity: O(M * N) | Space Complexity: O(M * N)"})]}),e.jsxs("g",{transform:"translate(30, 220)",children:[e.jsx("rect",{x:"0",y:"0",width:"810",height:"80",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"20",y:"35",fill:"#a7f3d0",fontSize:"14",fontWeight:"bold",children:'Transformation from "kitten" to "sitting": Total 3 Edits'}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"12",children:"1. Substitute 'k' with 's'  |  2. Substitute 'e' with 'i'  |  3. Insert 'g' at the end."})]})]})})]}),e.jsxs("section",{ref:d,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive String Processing Algorithms Playground"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Select an algorithm, type or modify input strings, and observe real-time algorithmic verifications and Python implementations:"}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6",children:[{id:"palindrome",label:"Palindrome Checker"},{id:"anagram",label:"Anagram Matcher"},{id:"frequency",label:"Word Frequencies"},{id:"rle",label:"RLE Compression"},{id:"levenshtein",label:"Levenshtein Distance"}].map(n=>e.jsx("button",{onClick:()=>{N(n.id),n.id==="palindrome"?p("A man, a plan, a canal: Panama!"):n.id==="anagram"?(p("Debit Card"),y("Bad Credit")):n.id==="frequency"?p("Python is clean, Python is powerful, and Python is fun."):n.id==="rle"?p("AAAAABBBCCCCCCDDDDDEEEEEEE"):n.id==="levenshtein"&&(p("kitten"),y("sitting"))},className:x("py-2 px-3 rounded-xl text-xs font-mono font-bold border transition-all text-center",l===n.id?"bg-indigo-950 border-indigo-500 text-indigo-300 shadow-md shadow-indigo-950":"bg-slate-950 border-slate-800 text-slate-400 hover:text-white"),children:n.label},n.id))}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",children:[e.jsxs("div",{className:"space-y-4 bg-slate-950 p-5 rounded-xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1",children:"Primary Input String"}),e.jsx("textarea",{value:o,onChange:n=>p(n.target.value),rows:l==="frequency"?4:2,className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-slate-100 font-mono text-xs focus:outline-none focus:border-indigo-500"})]}),(l==="anagram"||l==="levenshtein")&&e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1",children:"Secondary Target String"}),e.jsx("input",{type:"text",value:g,onChange:n=>y(n.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-indigo-300 font-mono text-sm focus:outline-none focus:border-indigo-500"})]})]}),e.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block",children:"Generated Python Algorithm Snippet"}),e.jsx("pre",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800 text-indigo-300 font-mono text-xs overflow-x-auto whitespace-pre-wrap max-h-36",children:i.pySnippet})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block",children:"Algorithmic Evaluation Result"}),l==="palindrome"?e.jsxs("div",{className:"space-y-1 text-xs font-mono",children:[e.jsxs("div",{className:x("font-bold text-sm",i.isPal?"text-emerald-300":"text-rose-400"),children:["Verdict: ",i.isPal?"✓ Valid Palindrome":"✗ Not a Palindrome"]}),e.jsxs("div",{className:"text-slate-400",children:['Normalized: "',i.cleanString,'"']})]}):l==="anagram"?e.jsxs("div",{className:"space-y-1 text-xs font-mono",children:[e.jsxs("div",{className:x("font-bold text-sm",i.isAna?"text-emerald-300":"text-rose-400"),children:["Verdict: ",i.isAna?"✓ Valid Anagram Pair":"✗ Not Anagrams"]}),e.jsxs("div",{className:"text-slate-400",children:['Keys: "',i.c1,'" vs "',i.c2,'"']})]}):l==="frequency"?e.jsxs("div",{className:"space-y-1 text-xs font-mono",children:[e.jsxs("div",{className:"text-emerald-300 font-bold",children:["Total Words: ",i.totalWords," | Unique Vocabulary: ",i.uniqueWords]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-1",children:i.topWords.map(([n,r])=>e.jsxs("span",{className:"bg-indigo-950 border border-indigo-700 px-2 py-0.5 rounded text-indigo-200",children:[n,": ",r]},n))})]}):l==="rle"?e.jsxs("div",{className:"space-y-1 text-xs font-mono",children:[e.jsxs("div",{className:"text-emerald-300 font-bold",children:['Compressed: "',i.compressed,'" (',i.compLen," chars)"]}),e.jsxs("div",{className:"text-slate-400",children:["Original: ",i.origLen," chars (Compression Ratio: ",i.ratio,"%)"]})]}):e.jsxs("div",{className:"space-y-1 text-xs font-mono",children:[e.jsxs("div",{className:"text-emerald-300 font-bold text-sm",children:["Levenshtein Edit Distance: ",i.dist," edit(s)"]}),e.jsx("div",{className:"text-slate-400",children:"Minimum insertions, deletions, and replacements."})]})]})]})]})]}),e.jsxs("section",{ref:d,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master String Algorithms Complexity Reference Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Algorithm Name"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Method Paradigm"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Time Complexity"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Space Complexity"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Real-World Application"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-indigo-300 font-semibold",children:"Two-Pointer Palindrome"}),e.jsx("td",{className:"py-3 px-4",children:"Inward Scan"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"O(N)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"O(1) Auxiliary"}),e.jsx("td",{className:"py-3 px-4",children:"Large-scale DNA & textual symmetric verification"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Counter Anagram Check"}),e.jsx("td",{className:"py-3 px-4",children:"Hash Multiset"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"O(N)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"O(1) (26 letters)"}),e.jsx("td",{className:"py-3 px-4",children:"Duplicate product inquiry & review clustering"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Anagram Grouping"}),e.jsx("td",{className:"py-3 px-4",children:"Canonical Key Hashing"}),e.jsx("td",{className:"py-3 px-4 font-mono text-amber-400",children:"O(N * K log K)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-amber-400",children:"O(N * K)"}),e.jsx("td",{className:"py-3 px-4",children:"Word game solvers & cryptographic hash clustering"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-cyan-300 font-semibold",children:"First Unique Character"}),e.jsx("td",{className:"py-3 px-4",children:"2-Pass Frequency"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"O(N)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"O(1) (26 letters)"}),e.jsx("td",{className:"py-3 px-4",children:"Streaming character queue sanitization"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-300 font-semibold",children:"Levenshtein Distance"}),e.jsx("td",{className:"py-3 px-4",children:"2D Dynamic Programming"}),e.jsx("td",{className:"py-3 px-4 font-mono text-rose-400",children:"O(M * N)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-rose-400",children:"O(M * N)"}),e.jsx("td",{className:"py-3 px-4",children:"Typo-tolerant search bars & spelling suggestions"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-pink-300 font-semibold",children:"Run-Length Encoding (RLE)"}),e.jsx("td",{className:"py-3 px-4",children:"Lossless Compression"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"O(N)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-emerald-400 font-bold",children:"O(N)"}),e.jsx("td",{className:"py-3 px-4",children:"Repetitive sensor telemetry & image bitmap compression"})]})]})]})})]}),e.jsxs("section",{ref:d,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating two-pointer palindrome checkers, Counter anagram clusters, Levenshtein distance, RLE compressors, and enterprise text analytics engines:"}),e.jsx(j,{files:[{filename:"palindrome_and_anagram_algorithms.py",code:v,description:"Optimal two-pointer palindrome check (O(1) space), anagram frequency hashing (O(N)), and anagram group clusters."},{filename:"word_counting_and_frequency_analysis.py",code:E,description:"Word frequency distributions with collections.Counter, first unique character finder, and 2D DP Levenshtein distance."},{filename:"string_compression_and_transformation.py",code:O,description:"Run-Length Encoding (RLE) compression/decompression, snake_case <-> camelCase converters, and Caesar/ROT13 cipher."},{filename:"industrial_text_analytics_engine.py",code:T,description:"Production text mining engine: lexical density, stop-word removal, and typo-tolerant fuzzy course search."}]})]}),e.jsxs("section",{ref:d,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Case & Punctuation Palindrome Oversight"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Checking ",e.jsx("code",{className:"text-rose-300 font-mono",children:"s == s[::-1]"})," on ",e.jsx("code",{className:"text-slate-300 font-mono",children:'"Racecar"'})," or ",e.jsx("code",{className:"text-slate-300 font-mono",children:`"Madam, I'm Adam"`})," returns ",e.jsx("code",{className:"text-rose-300 font-mono",children:"False"})," due to capital letters, spaces, and punctuation."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Filter alphanumerics: ",e.jsx("code",{className:"text-emerald-300",children:'"".join(c.lower() for c in s if c.isalnum())'})]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Using `s.count` in `max()` for Frequency"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:[e.jsx("code",{className:"text-amber-300 font-mono",children:"max(set(s), key=s.count)"})," triggers an ",e.jsx("code",{className:"text-rose-400 font-mono",children:"O(N²)"})," quadratic scan by calling ",e.jsx("code",{className:"text-amber-300 font-mono",children:"count()"})," repeatedly for each character."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"Counter(s).most_common(1)[0][0]"})," for ",e.jsx("code",{className:"text-emerald-300",children:"O(N)"}),"!"]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: RLE on Non-Repeating Data"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Running Run-Length Encoding on ",e.jsx("code",{className:"text-purple-300 font-mono",children:'"ABCDEF"'})," yields ",e.jsx("code",{className:"text-purple-300 font-mono",children:'"A1B1C1D1E1F1"'}),", expanding the string by 200%!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Only apply RLE when character run length > 2."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Sorting Large Strings for Anagrams"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Sorting 100,000-character documents with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"sorted()"})," causes ",e.jsx("code",{className:"text-rose-400 font-mono",children:"O(N log N)"})," latency and memory bloat."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"collections.Counter"})," for linear ",e.jsx("code",{className:"text-emerald-300",children:"O(N)"})," comparison!"]})]})]})]}),e.jsxs("section",{ref:d,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering palindrome optimizations, anagram hash maps, dynamic programming Levenshtein distance, and text analytics:"}),e.jsx(C,{questions:R})]}),e.jsxs("section",{ref:d,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with algorithmic complexity tables, DP recurrences, and text analytics recipes:"}),e.jsx("div",{className:"mb-10",children:e.jsx(_,{content:S,filename:"python_topic9_common_string_algorithms_notes.txt",title:"Print Topic 9 Study Notes"})}),e.jsx(A,{})]})]})]})}export{W as default};
