import{r as l,j as e}from"./index-D8vKF2mq.js";import{P as t}from"./PythonFileLoader-B7YssHRi.js";import{F as o}from"./FAQTemplate-vk816vUa.js";import{T as d}from"./TeacherSukantaHui-DjhHYUAb.js";import"./PythonCodeBlock-6L5zuSU4.js";import"./prism-DqVe0I4H.js";import"./browser-iABTCUld.js";import"./clsx-B-dksMZM.js";import"./github-CLhUlPeX.js";import"./createLucideIcon-DTJ5VPt2.js";import"./git-branch-ivLG4H_K.js";const c=`# for_loop.py\r
# Demonstrates the for loop approach (recommended)\r
\r
import os\r
\r
def create_sample_file():\r
    """Create a sample file with numbered lines."""\r
    filename = "sample.txt"\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        for i in range(1, 11):\r
            f.write(f"Line {i:02d}: This is some sample content.\\n")\r
    print(f"✅ Created sample file: {filename}")\r
    return filename\r
\r
def read_with_for_loop(filename):\r
    """Read a file using for loop (most Pythonic)."""\r
    print("\\n🔹 Reading with 'for line in f':")\r
    line_count = 0\r
    char_count = 0\r
\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        for line in f:\r
            line_count += 1\r
            char_count += len(line)\r
            # Show first few lines\r
            if line_count <= 3:\r
                print(f"   {line.strip()}")\r
\r
    print(f"   Total lines: {line_count}")\r
    print(f"   Total characters: {char_count}")\r
\r
def read_with_enumerate(filename):\r
    """Read a file with line numbers using enumerate."""\r
    print("\\n🔹 Reading with 'enumerate(f)':")\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        for line_num, line in enumerate(f, 1):\r
            if line_num <= 3:\r
                print(f"   Line {line_num}: {line.strip()}")\r
\r
if __name__ == "__main__":\r
    filename = create_sample_file()\r
    read_with_for_loop(filename)\r
    read_with_enumerate(filename)\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")`,h=`# while_readline.py\r
# Demonstrates the while True with readline() approach\r
\r
import os\r
\r
def create_sample_file():\r
    """Create a sample file."""\r
    filename = "sample.txt"\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        for i in range(1, 11):\r
            f.write(f"Line {i:02d}: Sample content for while loop.\\n")\r
    print(f"✅ Created sample file: {filename}")\r
    return filename\r
\r
def read_with_while_readline(filename):\r
    """Read a file using while True with readline()."""\r
    print("\\n🔹 Reading with 'while True: line = f.readline()':")\r
    line_count = 0\r
\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        while True:\r
            line = f.readline()\r
            if not line:  # EOF\r
                break\r
            line_count += 1\r
            if line_count <= 3:\r
                print(f"   {line.strip()}")\r
\r
    print(f"   Total lines: {line_count}")\r
\r
def read_with_while_readline_size(filename):\r
    """Use size parameter with readline()."""\r
    print("\\n🔹 Reading with 'readline(size)' (partial lines):")\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        # Read first line partially\r
        first_part = f.readline(10)\r
        print(f"   First 10 chars of line 1: '{first_part}'")\r
        # Read rest of first line\r
        rest = f.readline()\r
        print(f"   Rest of line 1: '{rest.strip()}'")\r
\r
if __name__ == "__main__":\r
    filename = create_sample_file()\r
    read_with_while_readline(filename)\r
    read_with_while_readline_size(filename)\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")`,m=`# walrus_operator.py\r
# Demonstrates the walrus operator approach (Python 3.8+)\r
\r
import os\r
\r
def create_sample_file():\r
    """Create a sample file."""\r
    filename = "sample.txt"\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        for i in range(1, 11):\r
            f.write(f"Line {i:02d}: Content for walrus operator.\\n")\r
    print(f"✅ Created sample file: {filename}")\r
    return filename\r
\r
def read_with_walrus(filename):\r
    """Read a file using the walrus operator (Python 3.8+)."""\r
    print("\\n🔹 Reading with 'while line := f.readline()':")\r
    line_count = 0\r
\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        while line := f.readline():\r
            line_count += 1\r
            if line_count <= 3:\r
                print(f"   {line.strip()}")\r
\r
    print(f"   Total lines: {line_count}")\r
\r
def read_with_walrus_and_condition(filename):\r
    """Use walrus with additional conditions."""\r
    print("\\n🔹 Walrus with filtering:")\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        while line := f.readline():\r
            if "04" in line:  # Example condition\r
                print(f"   Found line with '04': {line.strip()}")\r
\r
def check_python_version():\r
    """Check if walrus operator is supported."""\r
    import sys\r
    if sys.version_info >= (3, 8):\r
        print("\\n✅ Python 3.8+ detected — walrus operator supported.")\r
    else:\r
        print("\\n⚠️ Python < 3.8 — walrus operator not available. Use while True.")\r
\r
if __name__ == "__main__":\r
    filename = create_sample_file()\r
    check_python_version()\r
    read_with_walrus(filename)\r
    read_with_walrus_and_condition(filename)\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")`,p=`# line_processing.py\r
# Demonstrates processing lines with filters and transformations\r
\r
import os\r
\r
def create_sample_file():\r
    """Create a sample file with mixed content."""\r
    filename = "data.txt"\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.write("INFO: System started\\n")\r
        f.write("WARNING: Low memory\\n")\r
        f.write("INFO: User login: Swadeep\\n")\r
        f.write("ERROR: File not found\\n")\r
        f.write("INFO: Database connected\\n")\r
        f.write("ERROR: Network timeout\\n")\r
        f.write("WARNING: High CPU usage\\n")\r
        f.write("INFO: User logout: Tuhina\\n")\r
    print(f"✅ Created sample file: {filename}")\r
    return filename\r
\r
def filter_errors(filename):\r
    """Filter and count error lines."""\r
    print("\\n🔍 Filtering ERROR lines:")\r
    error_count = 0\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        for line in f:\r
            if 'ERROR' in line:\r
                error_count += 1\r
                print(f"   {line.strip()}")\r
    print(f"   Total errors: {error_count}")\r
\r
def skip_empty_lines(filename):\r
    """Read and skip empty lines."""\r
    print("\\n📄 Reading (skipping empty lines):")\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        for line in f:\r
            line = line.rstrip('\\n')\r
            if line:  # skip empty lines\r
                print(f"   {line}")\r
\r
def extract_information(filename):\r
    """Extract specific information from lines."""\r
    print("\\n📊 Extracting user info:")\r
    users = []\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        for line in f:\r
            if 'User' in line:\r
                # Extract username\r
                parts = line.split(':')\r
                if len(parts) >= 2:\r
                    user_info = parts[-1].strip()\r
                    users.append(user_info)\r
    for user in users:\r
        print(f"   {user}")\r
\r
def count_word_occurrences(filename, word="ERROR"):\r
    """Count occurrences of a specific word."""\r
    print(f"\\n🔢 Counting '{word}' occurrences:")\r
    count = 0\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        for line in f:\r
            count += line.count(word)\r
    print(f"   '{word}' appears {count} times")\r
\r
if __name__ == "__main__":\r
    filename = create_sample_file()\r
    filter_errors(filename)\r
    skip_empty_lines(filename)\r
    extract_information(filename)\r
    count_word_occurrences(filename, "ERROR")\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")`,f=`# large_file_processing.py\r
# Demonstrates processing large files efficiently\r
\r
import os\r
import time\r
\r
def create_large_file(filename="large.txt", num_lines=100000):\r
    """Create a moderately large file."""\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        for i in range(num_lines):\r
            f.write(f"Line {i:06d}: " + "abcdefghijklmnopqrstuvwxyz" * 4 + "\\n")\r
    print(f"✅ Created file with {num_lines:,} lines: {filename}")\r
    return filename\r
\r
def process_large_file(filename):\r
    """Process a large file line by line."""\r
    print(f"\\n📊 Processing large file: {filename}")\r
    start = time.perf_counter()\r
\r
    line_count = 0\r
    total_chars = 0\r
    startswith_a_count = 0\r
\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        for line in f:\r
            line_count += 1\r
            total_chars += len(line)\r
            if line.startswith('Line'):\r
                startswith_a_count += 1\r
\r
    elapsed = time.perf_counter() - start\r
    print(f"   Lines: {line_count:,}")\r
    print(f"   Total chars: {total_chars:,}")\r
    print(f"   Lines starting with 'Line': {startswith_a_count:,}")\r
    print(f"   Time: {elapsed:.4f}s")\r
    print(f"   Memory: Low (only one line at a time)")\r
\r
def process_with_batch(filename, batch_size=1000):\r
    """Process in batches (for batching operations)."""\r
    print(f"\\n📦 Processing in batches of {batch_size}:")\r
    start = time.perf_counter()\r
\r
    batch_count = 0\r
    total_lines = 0\r
\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        while True:\r
            lines = []\r
            for _ in range(batch_size):\r
                line = f.readline()\r
                if not line:\r
                    break\r
                lines.append(line)\r
            if not lines:\r
                break\r
            batch_count += 1\r
            total_lines += len(lines)\r
            # Process batch here (e.g., database insert)\r
\r
    elapsed = time.perf_counter() - start\r
    print(f"   Batches: {batch_count}")\r
    print(f"   Total lines: {total_lines:,}")\r
    print(f"   Time: {elapsed:.4f}s")\r
\r
if __name__ == "__main__":\r
    # Create a file with 100,000 lines (adjust if needed)\r
    filename = create_large_file(100000)\r
    process_large_file(filename)\r
    process_with_batch(filename, 1000)\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")`,x=`# method_comparison.py\r
# Compares different line-by-line reading methods\r
\r
import os\r
import time\r
\r
def create_test_file(filename="test.txt", num_lines=10000):\r
    """Create a test file."""\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        for i in range(num_lines):\r
            f.write(f"Line {i:05d}: " + "abcdefghijklmnopqrstuvwxyz" * 3 + "\\n")\r
    print(f"✅ Created test file with {num_lines:,} lines")\r
    return filename\r
\r
def method_for_loop(filename):\r
    """Method 1: for loop."""\r
    start = time.perf_counter()\r
    count = 0\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        for line in f:\r
            count += 1\r
    elapsed = time.perf_counter() - start\r
    return count, elapsed\r
\r
def method_while_readline(filename):\r
    """Method 2: while True with readline()."""\r
    start = time.perf_counter()\r
    count = 0\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        while True:\r
            line = f.readline()\r
            if not line:\r
                break\r
            count += 1\r
    elapsed = time.perf_counter() - start\r
    return count, elapsed\r
\r
def method_walrus(filename):\r
    """Method 3: walrus operator (Python 3.8+)."""\r
    start = time.perf_counter()\r
    count = 0\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        while line := f.readline():\r
            count += 1\r
    elapsed = time.perf_counter() - start\r
    return count, elapsed\r
\r
def method_readlines(filename):\r
    """Method 4: readlines() (not recommended for large files)."""\r
    start = time.perf_counter()\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        lines = f.readlines()\r
        count = len(lines)\r
    elapsed = time.perf_counter() - start\r
    return count, elapsed\r
\r
def measure_memory(filename):\r
    """Measure memory usage of different methods."""\r
    print("\\n💾 Memory usage comparison:")\r
\r
    import tracemalloc\r
\r
    # for loop\r
    tracemalloc.start()\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        for line in f:\r
            pass\r
    current1, peak1 = tracemalloc.get_traced_memory()\r
    tracemalloc.stop()\r
\r
    # readlines()\r
    tracemalloc.start()\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        lines = f.readlines()\r
    current2, peak2 = tracemalloc.get_traced_memory()\r
    tracemalloc.stop()\r
\r
    print(f"  for loop:     {current1/1024:.2f} KB (peak: {peak1/1024:.2f} KB)")\r
    print(f"  readlines():  {current2/1024:.2f} KB (peak: {peak2/1024:.2f} KB)")\r
\r
if __name__ == "__main__":\r
    filename = create_test_file(10000)\r
\r
    print("\\n⏱️ Performance Comparison (10,000 lines):")\r
\r
    count, elapsed = method_for_loop(filename)\r
    print(f"  for loop:         {count:,} lines, {elapsed:.4f}s")\r
\r
    count, elapsed = method_while_readline(filename)\r
    print(f"  while readline(): {count:,} lines, {elapsed:.4f}s")\r
\r
    count, elapsed = method_walrus(filename)\r
    print(f"  walrus:           {count:,} lines, {elapsed:.4f}s")\r
\r
    count, elapsed = method_readlines(filename)\r
    print(f"  readlines():      {count:,} lines, {elapsed:.4f}s")\r
\r
    measure_memory(filename)\r
\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")`,u=[{question:"Why is line-by-line reading important for large files?",shortAnswer:"It keeps memory usage low by processing one line at a time.",explanation:"Only the current line is loaded into memory, not the entire file.",hint:"Memory efficiency is key.",level:"basic",codeExample:null},{question:"What is the most Pythonic way to read a file line by line?",shortAnswer:"Using `for line in f:`.",explanation:"It's simple, readable, and handles EOF automatically.",hint:"The for loop approach.",level:"basic",codeExample:"for line in f: process(line)"},{question:"Does `for line in f` load the entire file into memory?",shortAnswer:"No, it reads lines lazily, one at a time.",explanation:"The file object is an iterator that yields lines as needed.",hint:"Memory efficient.",level:"intermediate",codeExample:null},{question:"How does `for line in f` know when to stop?",shortAnswer:"The file's iterator raises StopIteration at EOF.",explanation:"It uses readline() internally until EOF.",hint:"It's built into the file object.",level:"intermediate",codeExample:null},{question:"What is the difference between `for line in f` and `f.readlines()`?",shortAnswer:"`for line in f` reads lazily; `readlines()` loads all lines into memory.",explanation:"`for line in f` is memory-efficient; `readlines()` is not for large files.",hint:"One is lazy, one loads all.",level:"intermediate",codeExample:null},{question:"What is the walrus operator and how is it used for line reading?",shortAnswer:"`:=` allows assignment in the while condition: `while line := f.readline():`.",explanation:"This simplifies the readline loop by combining assignment and condition.",hint:"Python 3.8+ feature.",level:"advanced",codeExample:"while line := f.readline(): process(line)"},{question:"What Python version introduced the walrus operator?",shortAnswer:"Python 3.8.",explanation:"It's available in Python 3.8 and newer.",hint:"Requires 3.8+.",level:"advanced",codeExample:null},{question:"How do you strip the newline from a line read line by line?",shortAnswer:"Use `line.rstrip('\\n')` or `line.strip()`.",explanation:"`rstrip('\\n')` removes only newline; `strip()` removes all whitespace.",hint:"Remove the newline.",level:"basic",codeExample:"line.rstrip('\\n')"},{question:"How do you skip empty lines when reading line by line?",shortAnswer:"Check `if not line.strip(): continue`.",explanation:"This skips lines that are empty or contain only whitespace.",hint:"Filter out empty lines.",level:"intermediate",codeExample:"if not line.strip(): continue"},{question:"Can you get line numbers when using `for line in f`?",shortAnswer:"Yes, use `enumerate(f, 1)`.",explanation:"`enumerate` provides line numbers starting from 1.",hint:"Use enumerate.",level:"intermediate",codeExample:"for i, line in enumerate(f, 1):"},{question:"Which method gives the most control over the reading process?",shortAnswer:"Using `readline()` in a `while` loop.",explanation:"You can pause, skip, or conditionally read lines.",hint:"More control than for loop.",level:"intermediate",codeExample:null},{question:"Is the `for line in f` approach always the best?",shortAnswer:"Yes, for most cases. But `readline()` gives more control.",explanation:"Use `for` for simplicity; `readline()` when you need precise control.",hint:"Default to `for`.",level:"intermediate",codeExample:null},{question:"What happens if you modify a file while iterating over it?",shortAnswer:"It can lead to undefined behavior; the iteration may break.",explanation:"Reading and writing the same file simultaneously is not recommended.",hint:"Avoid concurrent read/write.",level:"advanced",codeExample:null},{question:"Can you read a file line by line from the end?",shortAnswer:"Not directly; you'd need to read all lines or use seek.",explanation:"For large files, read backwards using `seek()` and `readline()`.",hint:"Difficult; read forward.",level:"advanced",codeExample:null},{question:"How do you count lines in a file without reading all lines?",shortAnswer:"Use `sum(1 for line in f)`.",explanation:"This iterates line by line without storing them.",hint:"Memory-efficient counting.",level:"intermediate",codeExample:"sum(1 for line in f)"},{question:"What is the time complexity of reading a file line by line?",shortAnswer:"O(n) where n is the number of lines.",explanation:"Each line is processed once.",hint:"Linear time.",level:"advanced",codeExample:null},{question:"Does `for line in f` work with files opened in binary mode?",shortAnswer:"Yes, but it returns bytes instead of strings.",explanation:"The loop yields bytes objects, one line at a time.",hint:"Binary mode = bytes.",level:"intermediate",codeExample:"for line in f: process(line)  # line is bytes"},{question:"What is the difference between `line.rstrip('\\n')` and `line.strip()`?",shortAnswer:"`rstrip('\\n')` removes only newline; `strip()` removes all leading/trailing whitespace.",explanation:"Choose based on whether you want to preserve internal whitespace.",hint:"One is specific, one is broad.",level:"intermediate",codeExample:null},{question:"How do you handle very long lines (e.g., > 1GB)?",shortAnswer:"Use `readline()` with a size limit or use `read()` chunks.",explanation:"Very long lines can cause memory issues even in line-by-line reading.",hint:"Limit the read size.",level:"advanced",codeExample:"while True: chunk = f.readline(4096)"},{question:"Is it possible to read a file line by line and write to another file?",shortAnswer:"Yes, this is a common pattern for transforming files.",explanation:"Read from source, process, write to destination.",hint:"Stream processing.",level:"intermediate",codeExample:"with open('src') as r, open('dst', 'w') as w: for line in r: w.write(line)"},{question:"What is the purpose of the `newline` parameter in `open()` for line reading?",shortAnswer:"It controls newline translation, affecting what is recognized as a line.",explanation:"Use `newline=''` to disable translation.",hint:"Affects line boundaries.",level:"advanced",codeExample:"open('f.txt', 'r', newline='')"},{question:"Can you use `readline()` to read a specific number of lines?",shortAnswer:"Yes, use a loop that counts lines and breaks at the desired count.",explanation:"You can control exactly how many lines to read.",hint:"Count in a loop.",level:"intermediate",codeExample:"for _ in range(10): line = f.readline()"},{question:"What is the best practice for reading files line by line?",shortAnswer:"Use `with open() as f: for line in f:`.",explanation:"This ensures the file is closed and reads line by line efficiently.",hint:"The standard pattern.",level:"basic",codeExample:null},{question:"How does `readline()` handle EOF?",shortAnswer:"It returns an empty string `''` at EOF.",explanation:"This is how you detect the end of the file.",hint:"Empty string = EOF.",level:"basic",codeExample:null},{question:"What is the `__iter__` method of a file object?",shortAnswer:"It returns the file object itself, making it iterable.",explanation:"This is what allows `for line in f` to work.",hint:"It's how iteration works.",level:"advanced",codeExample:null},{question:"Can you use `next(f)` to read the next line?",shortAnswer:"Yes, `next(f)` returns the next line from the iterator.",explanation:"It's equivalent to calling `f.readline()`.",hint:"Manual iteration.",level:"intermediate",codeExample:"line = next(f)"},{question:"What happens if you call `next(f)` at EOF?",shortAnswer:"It raises StopIteration.",explanation:"The file object raises StopIteration when no more lines are available.",hint:"StopIteration at EOF.",level:"intermediate",codeExample:null},{question:"Is `for line in f` faster than `while line := f.readline()`?",shortAnswer:"They are very similar in performance; `for` is slightly more efficient.",explanation:"The `for` loop is implemented in C for speed.",hint:"Both are fast.",level:"advanced",codeExample:null},{question:"How do you read a file line by line and skip the first N lines?",shortAnswer:"Use `for _ in range(N): next(f)` to skip, then process the rest.",explanation:"Or use `itertools.islice` for more complex skipping.",hint:"Skip with `next()` or `readline()`.",level:"intermediate",codeExample:"for _ in range(N): f.readline(); for line in f: process(line)"},{question:"What is the memory impact of using `for line in f` on a 1GB file?",shortAnswer:"Memory usage is very low; only the current line is in memory.",explanation:"The file object uses a small buffer, but not the entire file.",hint:"Memory efficient.",level:"intermediate",codeExample:null},{question:"Can you pause and resume reading a file line by line?",shortAnswer:"Yes, by storing the file pointer position with `tell()` and using `seek()`.",explanation:"This allows you to resume reading from where you left off.",hint:"Use `tell()` and `seek()`.",level:"advanced",codeExample:"pos = f.tell(); f.seek(pos)"}],R=()=>{const s=l.useRef([]);l.useEffect(()=>{const r=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&a.target.classList.add("section-visible")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});return s.current.forEach(i=>{i&&r.observe(i)}),()=>r.disconnect()},[]);const n=r=>{r&&!s.current.includes(r)&&s.current.push(r)};return e.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 p-6 md:p-8 lg:p-12 font-sans leading-relaxed",children:[e.jsxs("header",{ref:n,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-gray-200 dark:border-gray-800",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-sm font-mono bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full",children:"Topic 17"}),e.jsx("span",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:"Core"})]}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight",children:"Reading Files Line by Line"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 mt-3 max-w-3xl",children:"Efficiently processing text files one line at a time — the cornerstone of memory‑efficient file handling."}),e.jsxs("div",{className:"flex flex-wrap gap-3 mt-4",children:[e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"🔄 for line in f"}),e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"📖 readline()"}),e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"💾 Memory Efficient"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🤔"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Why Read Files Line by Line?"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["Reading files line by line is one of the most common operations in Python programming. It's the ",e.jsx("strong",{children:"memory‑efficient"})," way to process text files, especially when they are large."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Memory efficiency:"})," Only one line is loaded into memory at a time."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Streaming:"})," You can process data as it arrives, without waiting for the entire file to load."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Flexibility:"})," You can stop processing at any point, skip lines, or conditionally process."]})]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-4 rounded-r-xl",children:[e.jsx("p",{className:"text-blue-700 dark:text-blue-300 font-medium",children:"💡 Key Insight:"}),e.jsxs("p",{className:"text-blue-600 dark:text-blue-400 text-sm",children:["Line‑by‑line reading is the foundation of ",e.jsx("strong",{children:"streaming processing"}),". It's used in everything from log analysis to ETL pipelines."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-100",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"⚖️"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Three Ways to Read Line by Line"})]}),e.jsx("div",{className:"overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-800",children:[e.jsx("thead",{className:"bg-gray-100 dark:bg-gray-800/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Method"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Code"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Memory"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Control"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Pythonic"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Recommended"})]})}),e.jsxs("tbody",{className:"bg-white dark:bg-gray-900/50 divide-y divide-gray-200 dark:divide-gray-800 text-gray-700 dark:text-gray-300",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-medium",children:"for loop"}),e.jsx("td",{className:"px-6 py-4 font-mono text-xs",children:"for line in f:"}),e.jsx("td",{className:"px-6 py-4",children:"✅ Low"}),e.jsx("td",{className:"px-6 py-4",children:"Basic"}),e.jsx("td",{className:"px-6 py-4",children:"✅ Most"}),e.jsx("td",{className:"px-6 py-4",children:"✅ Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-medium",children:"readline() loop"}),e.jsx("td",{className:"px-6 py-4 font-mono text-xs",children:"while line := f.readline():"}),e.jsx("td",{className:"px-6 py-4",children:"✅ Low"}),e.jsx("td",{className:"px-6 py-4",children:"Full"}),e.jsx("td",{className:"px-6 py-4",children:"OK"}),e.jsx("td",{className:"px-6 py-4",children:"⚠️ Sometimes"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-medium",children:"readlines()"}),e.jsx("td",{className:"px-6 py-4 font-mono text-xs",children:"for line in f.readlines():"}),e.jsx("td",{className:"px-6 py-4",children:"❌ High"}),e.jsx("td",{className:"px-6 py-4",children:"Full"}),e.jsx("td",{className:"px-6 py-4",children:"❌ No"}),e.jsx("td",{className:"px-6 py-4",children:"❌ Small files only"})]})]})]})}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-2 text-center",children:"The `for line in f` approach is the most Pythonic and recommended for most use cases."})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-200",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🔄"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"The `for line in f` Approach"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["The ",e.jsx("strong",{children:"most Pythonic"})," way to read a file line by line is using a ",e.jsx("code",{children:"for"})," loop directly on the file object."]}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm",children:e.jsxs("code",{className:"text-gray-800 dark:text-gray-200",children:["with open('data.txt', 'r', encoding='utf-8') as f:",e.jsx("br",{}),"for line in f:",e.jsx("br",{}),"process(line)"]})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Simple and readable:"})," The intent is clear."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Memory efficient:"})," Lines are read lazily."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Automatic EOF handling:"})," The loop stops when EOF is reached."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No manual pointer management:"})," The iterator handles everything."]})]}),e.jsxs("p",{children:["This is the recommended approach for ",e.jsx("strong",{children:"99% of use cases"}),"."]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📖"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"The `readline()` Approach"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["Using ",e.jsx("code",{children:"readline()"})," in a ",e.jsx("code",{children:"while"})," loop gives you ",e.jsx("strong",{children:"precise control"})," over the reading process."]}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm",children:e.jsxs("code",{className:"text-gray-800 dark:text-gray-200",children:["with open('data.txt', 'r', encoding='utf-8') as f:",e.jsx("br",{}),"while True:",e.jsx("br",{}),"line = f.readline()",e.jsx("br",{}),"if not line:  # EOF",e.jsx("br",{}),"break",e.jsx("br",{}),"process(line)"]})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Full control:"})," You can pause, skip, or conditionally read lines."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Explicit EOF handling:"})," You see exactly when EOF is reached."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Supports the ",e.jsx("code",{children:"size"})," parameter:"]})," You can read partial lines if needed."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"More verbose:"})," More code than the ",e.jsx("code",{children:"for"}),"loop approach."]})]}),e.jsxs("p",{children:["This is useful when you need ",e.jsx("strong",{children:"fine‑grained control"}),", such as reading a specific number of lines or handling complex parsing."]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🦭"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"The Walrus Operator (Python 3.8+)"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["Python 3.8 introduced the ",e.jsx("strong",{children:"walrus operator"})," (",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:":="}),"), which allows you to assign and test in a single expression."]}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm",children:e.jsxs("code",{className:"text-gray-800 dark:text-gray-200",children:["with open('data.txt', 'r', encoding='utf-8') as f:",e.jsx("br",{}),"while line := f.readline():",e.jsx("br",{}),"process(line)"]})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Concise:"})," Combines assignment and condition."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Readable:"})," Clear intent for line‑by‑line reading."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Pythonic:"})," The modern way to write readline loops."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Requires Python 3.8+:"})," Not available in older versions."]})]}),e.jsxs("p",{children:["This is the ",e.jsx("strong",{children:"recommended way"})," to use ",e.jsx("code",{children:"readline()"}),"in modern Python (3.8+)."]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"⚙️"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Processing Lines Effectively"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsx("p",{children:"When reading line by line, you can perform various processing operations:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Strip newlines:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"line.rstrip('\\n')"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Skip empty lines:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"if not line.strip(): continue"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Filter lines:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"if 'error' in line: process(line)"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Parse CSV:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"fields = line.split(',')"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Accumulate data:"})," Build aggregates as you read."]})]}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm",children:e.jsxs("code",{className:"text-gray-800 dark:text-gray-200",children:["with open('data.log', 'r', encoding='utf-8') as f:",e.jsx("br",{}),"error_count = 0",e.jsx("br",{}),"for line in f:",e.jsx("br",{}),"if not line.strip():",e.jsx("br",{}),"continue  # skip empty lines",e.jsx("br",{}),"if 'ERROR' in line:",e.jsx("br",{}),"error_count += 1",e.jsx("br",{}),'print(f"Error: ',"{line.strip()}",'")',e.jsx("br",{}),'print(f"Total errors: ',"{error_count}",'")']})})]})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🌍"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Real-World Scenarios"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"bg-blue-50 dark:bg-blue-950/30 rounded-xl p-6 border border-blue-200 dark:border-blue-800/50 transition-all duration-300 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Server Log Analysis"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:["A system administrator in Barrackpore monitors a web server log file. Using ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"for line in f"}),", they process each line, counting 404 errors and extracting IP addresses — all without loading the entire log into memory."]})]})]})}),e.jsx("div",{className:"bg-purple-50 dark:bg-purple-950/30 rounded-xl p-6 border border-purple-200 dark:border-purple-800/50 transition-all duration-300 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"📋"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"CSV Data Import"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:"A school in Naihati imports student data from a CSV file. Using line‑by‑line reading, they skip the header, then process each row to add students to the database, handling one row at a time."})]})]})}),e.jsx("div",{className:"bg-green-50 dark:bg-green-950/30 rounded-xl p-6 border border-green-200 dark:border-green-800/50 transition-all duration-300 hover:shadow-lg hover:border-green-300 dark:hover:border-green-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"📱"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Real‑time Sensor Data"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:"An IoT device in Shyamnagar writes sensor readings to a file. A processing script tails the file (using line‑by‑line reading), processing each new reading as it's appended."})]})]})})]})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🐍"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Python in Action"})]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 text-lg mb-6",children:"The following examples demonstrate line‑by‑line reading techniques."}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(t,{fileModule:c,title:"For Loop (Recommended)",highlightLines:[]}),e.jsx(t,{fileModule:h,title:"while True with readline()",highlightLines:[]}),e.jsx(t,{fileModule:m,title:"Walrus Operator (Python 3.8+)",highlightLines:[]}),e.jsx(t,{fileModule:p,title:"Processing Lines with Filters",highlightLines:[]}),e.jsx(t,{fileModule:f,title:"Processing Large Files",highlightLines:[]}),e.jsx(t,{fileModule:x,title:"Method Comparison",highlightLines:[]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"💡"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Tips & Tricks"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{title:"Use `for line in f` for simplicity",desc:"It's the most Pythonic and readable approach."},{title:"Strip newlines with `rstrip('\\n')`",desc:"Use this to remove newlines while preserving other whitespace."},{title:"Skip empty lines with `if not line.strip(): continue`",desc:"This handles blank lines gracefully."},{title:"Use `enumerate(f)` to count lines",desc:"`for i, line in enumerate(f, 1):` gives line numbers."},{title:"Add line numbers for debugging",desc:"Include line numbers when printing errors."},{title:"Use `with` for automatic file closure",desc:"Never forget to close the file."}].map((r,i)=>e.jsxs("div",{className:"bg-amber-50 dark:bg-amber-950/20 rounded-xl p-5 border border-amber-200 dark:border-amber-800/50 transition-all duration-300 hover:shadow-lg hover:border-amber-300 dark:hover:border-amber-600 hover:-translate-y-1",children:[e.jsxs("h4",{className:"font-semibold text-gray-900 dark:text-white flex items-start gap-2",children:[e.jsx("span",{className:"text-amber-500",children:"✦"})," ",r.title]}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 mt-1",children:r.desc})]},i))})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Common Mistakes"})]}),e.jsx("div",{className:"space-y-3",children:[{mistake:"Forgetting to strip newlines before processing",fix:"Use `line.rstrip('\\n')` or `line.strip()`."},{mistake:"Infinite loop with while True (no break)",fix:"Always check `if not line: break`."},{mistake:"Using `readlines()` on large files",fix:"Use `for line in f` instead."},{mistake:"Modifying the file while iterating over it",fix:"Read the file, process, then write separately."},{mistake:"Not handling empty files",fix:"The loop handles empty files gracefully."}].map((r,i)=>e.jsx("div",{className:"bg-red-50 dark:bg-red-950/20 rounded-xl p-5 border border-red-200 dark:border-red-800/50 transition-all duration-300 hover:shadow-lg hover:border-red-300 dark:hover:border-red-600",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-red-500 text-lg",children:"✗"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-gray-800 dark:text-gray-200 font-medium",children:r.mistake}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:["✓ ",r.fix]})]})]})},i))})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Best Practices"})]}),e.jsx("div",{className:"bg-emerald-50 dark:bg-emerald-950/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/50 transition-all duration-300 hover:shadow-lg hover:border-emerald-300 dark:hover:border-emerald-600",children:e.jsxs("ul",{className:"space-y-3 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Use `for line in f` as the default:"})," ","It's the most Pythonic and safe approach."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Always strip newlines when comparing:"})," ","Use ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"line.rstrip('\\n')"}),"for consistent comparisons."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Handle empty lines explicitly:"})," ","Decide whether to skip or process blank lines."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Use `with` for automatic closure:"})," ","Always use context managers."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Test with representative files:"})," ","Ensure your code handles empty lines, large files, and special characters."]})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📋"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Mini Checklist"})]}),e.jsxs("div",{className:"bg-indigo-50 dark:bg-indigo-950/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800/50 transition-all duration-300 hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-600",children:[e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"By the end of this topic, you should understand:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:["Why line‑by‑line reading is memory‑efficient","The three main approaches: for loop, readline(), walrus","Which approach is recommended for most use cases","How to strip newlines and handle empty lines","When to use each approach","Common pitfalls and how to avoid them","Best practices for processing lines"].map((r,i)=>e.jsxs("div",{className:"flex items-center gap-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900/50 px-4 py-2 rounded-lg",children:[e.jsx("span",{className:"text-indigo-400",children:"☐"}),e.jsx("span",{className:"text-sm",children:r})]},i))})]})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🤔"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Think About…"})]}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-950/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800/50 transition-all duration-300 hover:shadow-lg hover:border-yellow-300 dark:hover:border-yellow-600",children:e.jsxs("div",{className:"space-y-4 text-gray-700 dark:text-gray-300",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Observe carefully:"})," ","If you use ",e.jsx("code",{children:"for line in f"}),", how does Python know when to stop? What's happening behind the scenes?"]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Try changing this:"})," ","Write a program that reads a file line by line and counts the number of lines, words, and characters. How does it compare to using ",e.jsx("code",{children:"read()"})," for the same task?"]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Think about:"})," ",'A log file is being written to continuously. How would you write a script that "tails" the file, processing new lines as they are appended?']})]})]})})]}),e.jsx("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:e.jsx(o,{title:"Line by Line Reading – FAQs",questions:u})}),e.jsx("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:e.jsx(d,{note:"Line‑by‑line reading is arguably the most important file handling pattern. Students must internalize `for line in f` as the default. Use the analogy of a conveyor belt: items (lines) come one at a time, and you process each as it arrives. Emphasize the memory efficiency — this is what enables processing files larger than RAM. Also, show them the walrus operator as a modern improvement, but ensure they understand the traditional `while True` pattern for compatibility."})}),e.jsxs("footer",{className:"pt-8 mt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400",children:[e.jsx("p",{children:"Topic 17: Reading Files Line by Line · Built with ❤️ for classroom learning"}),e.jsx("p",{className:"mt-1",children:"Next: Topic 18 — Writing Files using write()"})]})]}),e.jsx("style",{children:`
        .section-hidden {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .section-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .section-hidden {
            opacity: 1;
            transform: none;
          }
          .section-hidden * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `})]})};export{R as default};
