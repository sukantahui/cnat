import{r as l,j as e}from"./index-D8vKF2mq.js";import{P as i}from"./PythonFileLoader-B7YssHRi.js";import{F as o}from"./FAQTemplate-vk816vUa.js";import{T as d}from"./TeacherSukantaHui-DjhHYUAb.js";import"./PythonCodeBlock-6L5zuSU4.js";import"./prism-DqVe0I4H.js";import"./browser-iABTCUld.js";import"./clsx-B-dksMZM.js";import"./github-CLhUlPeX.js";import"./createLucideIcon-DTJ5VPt2.js";import"./git-branch-ivLG4H_K.js";const c=`# readlines_basic.py\r
# Demonstrates basic usage of readlines()\r
\r
import os\r
\r
def create_sample_file():\r
    """Create a sample file with multiple lines."""\r
    filename = "sample.txt"\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.write("Line 1: Hello Swadeep\\n")\r
        f.write("Line 2: Hello Tuhina\\n")\r
        f.write("Line 3: Hello Abhronila\\n")\r
        f.write("Line 4: Hello Debangshu\\n")\r
    print(f"✅ Created sample file: {filename}")\r
    return filename\r
\r
def readlines_example(filename):\r
    """Show basic readlines() usage."""\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        lines = f.readlines()\r
        print(f"📚 readlines() returned {len(lines)} lines:")\r
        for i, line in enumerate(lines, 1):\r
            print(f"   Line {i}: {repr(line)}")\r
\r
def readlines_with_strip(filename):\r
    """Read lines and strip newlines using list comprehension."""\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        # Strip newlines while reading\r
        lines = [line.rstrip('\\n') for line in f.readlines()]\r
        print(f"\\n📚 Stripped lines ({len(lines)}):")\r
        for i, line in enumerate(lines, 1):\r
            print(f"   Line {i}: {repr(line)}")\r
\r
if __name__ == "__main__":\r
    filename = create_sample_file()\r
    readlines_example(filename)\r
    readlines_with_strip(filename)\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")`,h=`# readlines_hint.py\r
# Demonstrates the sizehint parameter\r
\r
import os\r
\r
def create_file_with_lines(filename="data.txt", num_lines=100):\r
    """Create a file with many lines."""\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        for i in range(num_lines):\r
            f.write(f"Line {i:03d}: " + "x" * 50 + "\\n")\r
    print(f"✅ Created file with {num_lines} lines: {filename}")\r
    return filename\r
\r
def readlines_without_hint(filename):\r
    """Read all lines at once (no hint)."""\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        lines = f.readlines()\r
    print(f"📚 Without hint: {len(lines)} lines read, {len(lines[0])} chars per line avg")\r
\r
def readlines_with_hint(filename, hint=1024):\r
    """Read lines with sizehint."""\r
    total_lines = 0\r
    batch_num = 0\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        while True:\r
            lines = f.readlines(hint)\r
            if not lines:\r
                break\r
            batch_num += 1\r
            total_lines += len(lines)\r
            print(f"   Batch {batch_num}: {len(lines)} lines, total {total_lines}")\r
    print(f"📚 With hint ({hint}): {total_lines} lines total")\r
\r
def compare_hints(filename):\r
    """Compare different hint sizes."""\r
    print("\\n📊 Comparison of different hint sizes:")\r
    for hint in [512, 1024, 4096, 16384]:\r
        total_lines = 0\r
        with open(filename, 'r', encoding='utf-8') as f:\r
            while True:\r
                lines = f.readlines(hint)\r
                if not lines:\r
                    break\r
                total_lines += len(lines)\r
        print(f"   hint={hint:6d}: {total_lines} lines")\r
\r
if __name__ == "__main__":\r
    filename = create_file_with_lines(200)\r
    readlines_without_hint(filename)\r
    readlines_with_hint(filename, 1024)\r
    compare_hints(filename)\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")`,m=`# readlines_memory.py\r
# Demonstrates memory usage of readlines()\r
\r
import os\r
import sys\r
\r
def create_file_with_lines(filename="mem_test.txt", num_lines=5000):\r
    """Create a moderately large file."""\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        for i in range(num_lines):\r
            f.write(f"Line {i:04d}: " + "abcdefghijklmnopqrstuvwxyz" * 4 + "\\n")\r
    print(f"✅ Created file with {num_lines} lines: {filename}")\r
    return filename\r
\r
def estimate_memory_usage(filename):\r
    """Estimate memory usage of readlines() vs iteration."""\r
    file_size = os.path.getsize(filename)\r
    print(f"\\n📊 File size: {file_size:,} bytes ({file_size/1024:.2f} KB)")\r
\r
    # Read with readlines()\r
    import tracemalloc\r
    tracemalloc.start()\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        lines = f.readlines()\r
    current, peak = tracemalloc.get_traced_memory()\r
    tracemalloc.stop()\r
    print(f"📚 readlines() memory: {current/1024:.2f} KB (peak: {peak/1024:.2f} KB)")\r
    print(f"   Lines: {len(lines)}, approx {len(lines) * len(lines[0]) / 1024:.2f} KB for string data")\r
\r
    # Read with iteration (memory should be much lower)\r
    tracemalloc.start()\r
    count = 0\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        for line in f:\r
            count += 1\r
    current, peak = tracemalloc.get_traced_memory()\r
    tracemalloc.stop()\r
    print(f"🔁 Iteration memory: {current/1024:.2f} KB (peak: {peak/1024:.2f} KB)")\r
    print(f"   Lines counted: {count}")\r
\r
    # Show that memory difference grows with file size\r
    print("\\n💡 Note: For larger files, the memory difference becomes more significant.")\r
\r
if __name__ == "__main__":\r
    filename = create_file_with_lines(5000)\r
    estimate_memory_usage(filename)\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")`,x=`# readlines_filter.py\r
# Demonstrates filtering and processing lines from readlines()\r
\r
import os\r
\r
def create_sample_file():\r
    """Create a sample file with various content."""\r
    filename = "filter.txt"\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.write("Name: Swadeep, Class: 10\\n")\r
        f.write("Name: Tuhina, Class: 9\\n")\r
        f.write("Name: Abhronila, Class: 11\\n")\r
        f.write("Name: Debangshu, Class: 10\\n")\r
        f.write("Name: Souvik, Class: 8\\n")\r
    print(f"✅ Created sample file: {filename}")\r
    return filename\r
\r
def filter_by_class(filename, target_class="10"):\r
    """Filter lines by class."""\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        lines = f.readlines()\r
\r
    # Filter lines containing the target class\r
    filtered = [line for line in lines if f"Class: {target_class}" in line]\r
    print(f"\\n🔍 Students in Class {target_class}:")\r
    for line in filtered:\r
        print(f"   {line.strip()}")\r
\r
def extract_names(filename):\r
    """Extract names from all lines."""\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        lines = f.readlines()\r
\r
    names = []\r
    for line in lines:\r
        # Extract name from "Name: Swadeep" format\r
        if "Name:" in line:\r
            name = line.split("Name:")[1].split(",")[0].strip()\r
            names.append(name)\r
\r
    print(f"\\n👥 All student names:")\r
    for name in names:\r
        print(f"   {name}")\r
\r
def process_in_batches(filename, batch_size=2):\r
    """Process lines in batches using sizehint."""\r
    print(f"\\n📦 Processing in batches of ~{batch_size} lines:")\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        batch_num = 0\r
        while True:\r
            # Read a batch of lines\r
            lines = f.readlines(batch_size * 30)  # approximate size\r
            if not lines:\r
                break\r
            batch_num += 1\r
            print(f"   Batch {batch_num}: {len(lines)} lines")\r
            for line in lines:\r
                # Process each line in the batch\r
                pass  # In real code, process the batch\r
\r
if __name__ == "__main__":\r
    filename = create_sample_file()\r
    filter_by_class(filename, "10")\r
    extract_names(filename)\r
    process_in_batches(filename, 2)\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")`,f=`# readlines_vs_iteration.py\r
# Compares readlines() with iteration\r
\r
import os\r
import time\r
\r
def create_test_file(filename="compare.txt", num_lines=10000):\r
    """Create a test file with many lines."""\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        for i in range(num_lines):\r
            f.write(f"Line {i:05d}: " + "abcdefghijklmnopqrstuvwxyz" * 5 + "\\n")\r
    print(f"✅ Created file with {num_lines:,} lines: {filename}")\r
    return filename\r
\r
def process_with_readlines(filename):\r
    """Process using readlines()."""\r
    start = time.perf_counter()\r
    total = 0\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        lines = f.readlines()\r
        for line in lines:\r
            total += len(line)\r
    elapsed = time.perf_counter() - start\r
    return total, elapsed, len(lines)\r
\r
def process_with_iteration(filename):\r
    """Process using iteration (for line in f)."""\r
    start = time.perf_counter()\r
    total = 0\r
    count = 0\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        for line in f:\r
            total += len(line)\r
            count += 1\r
    elapsed = time.perf_counter() - start\r
    return total, elapsed, count\r
\r
def process_with_readline(filename):\r
    """Process using readline() in a loop."""\r
    start = time.perf_counter()\r
    total = 0\r
    count = 0\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        while True:\r
            line = f.readline()\r
            if not line:\r
                break\r
            total += len(line)\r
            count += 1\r
    elapsed = time.perf_counter() - start\r
    return total, elapsed, count\r
\r
if __name__ == "__main__":\r
    filename = create_test_file(10000)\r
\r
    print("\\n⏱️ Performance Comparison (10,000 lines):")\r
\r
    total, elapsed, count = process_with_readlines(filename)\r
    print(f"  readlines():      {count:,} lines, {elapsed:.4f}s")\r
\r
    total, elapsed, count = process_with_iteration(filename)\r
    print(f"  for line in f:    {count:,} lines, {elapsed:.4f}s")\r
\r
    total, elapsed, count = process_with_readline(filename)\r
    print(f"  readline() loop:  {count:,} lines, {elapsed:.4f}s")\r
\r
    # Check memory implication\r
    import tracemalloc\r
    tracemalloc.start()\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        lines = f.readlines()\r
    current1, peak1 = tracemalloc.get_traced_memory()\r
    tracemalloc.stop()\r
\r
    tracemalloc.start()\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        for line in f:\r
            pass\r
    current2, peak2 = tracemalloc.get_traced_memory()\r
    tracemalloc.stop()\r
\r
    print(f"\\n💾 Memory usage (approx):")\r
    print(f"  readlines(): {current1/1024:.2f} KB")\r
    print(f"  iteration:   {current2/1024:.2f} KB")\r
\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")`,p=[{question:"What does the readlines() method do?",shortAnswer:"Reads all lines from a file and returns them as a list of strings.",explanation:"Each line includes its newline character.",hint:"It's a list of lines.",level:"basic",codeExample:"lines = f.readlines()"},{question:"What does readlines() return for an empty file?",shortAnswer:"An empty list [].",explanation:"No lines to read, so the list is empty.",hint:"Not EOF, but empty.",level:"basic",codeExample:"f.readlines()  # []"},{question:"What is the return type of readlines() in text mode?",shortAnswer:"List of strings (str).",explanation:"Each element is a string representing a line.",hint:"List of str.",level:"basic",codeExample:"type(f.readlines())  # list"},{question:"What is the return type of readlines() in binary mode?",shortAnswer:"List of bytes objects.",explanation:"Each line is a bytes object.",hint:"List of bytes.",level:"intermediate",codeExample:"type(f.readlines())  # list of bytes"},{question:"Does readlines() include the newline character?",shortAnswer:"Yes, each line includes its newline character at the end.",explanation:"The only exception is the last line if it doesn't end with a newline.",hint:"Use strip() to remove.",level:"basic",codeExample:null},{question:"How do you remove newlines from readlines() output?",shortAnswer:"Use list comprehension: `[line.rstrip('\\n') for line in f.readlines()]`.",explanation:"This creates a new list with newlines removed.",hint:"Strip each line.",level:"intermediate",codeExample:"[line.rstrip('\\n') for line in lines]"},{question:"What is the difference between readlines() and read()?",shortAnswer:"readlines() returns a list of lines; read() returns a single string.",explanation:"read() gives all content as one string; readlines() splits by line.",hint:"List vs string.",level:"basic",codeExample:null},{question:"What is the difference between readlines() and readline()?",shortAnswer:"readlines() reads all lines; readline() reads one line at a time.",explanation:"readlines() loads everything; readline() is line‑by‑line.",hint:"All vs one.",level:"basic",codeExample:null},{question:"When should you use readlines()?",shortAnswer:"For small files where you need random access to all lines.",explanation:"It's convenient but memory‑intensive.",hint:"Only for small files.",level:"intermediate",codeExample:null},{question:"When should you NOT use readlines()?",shortAnswer:"For large files, as it loads the entire file into memory.",explanation:"Use iteration (`for line in f`) for large files.",hint:"Avoid memory issues.",level:"intermediate",codeExample:null},{question:"What is the sizehint parameter in readlines()?",shortAnswer:"A hint for how many bytes to read in one internal operation.",explanation:"It controls chunk size when reading in batches.",hint:"Used for optimization.",level:"advanced",codeExample:"f.readlines(8192)"},{question:"Does sizehint guarantee an exact number of bytes?",shortAnswer:"No, it's a hint. Python may read more or less.",explanation:"It ensures complete lines are returned.",hint:"It's approximate.",level:"advanced",codeExample:null},{question:"Can you use readlines() to read a file in chunks?",shortAnswer:"Yes, using the sizehint parameter in a loop.",explanation:"This allows batch processing without loading the entire file.",hint:"Read chunks of lines.",level:"advanced",codeExample:"while True: lines = f.readlines(8192); if not lines: break"},{question:"What is the memory overhead of readlines()?",shortAnswer:"It uses memory for the list itself plus all line strings.",explanation:"For large files, the list overhead can be significant.",hint:"List overhead + string content.",level:"advanced",codeExample:null},{question:"How does readlines() compare to `for line in f` in memory usage?",shortAnswer:"readlines() uses much more memory as it loads all lines.",explanation:"Iteration reads one line at a time, keeping memory low.",hint:"readlines() is memory‑heavy.",level:"intermediate",codeExample:null},{question:"Is readlines() faster than iteration for small files?",shortAnswer:"It can be slightly faster due to fewer I/O calls.",explanation:"But the difference is usually negligible for small files.",hint:"Minor speed difference.",level:"intermediate",codeExample:null},{question:"Can you modify the list returned by readlines()?",shortAnswer:"Yes, it's a normal Python list that you can modify.",explanation:"Modifying doesn't affect the file itself; it's in memory.",hint:"In‑memory list.",level:"intermediate",codeExample:"lines = f.readlines(); lines[0] = 'new line\\n'"},{question:"Does readlines() work on files opened in 'r+' mode?",shortAnswer:"Yes, it works with any mode that allows reading.",explanation:"'r+', 'w+', and 'a+' all support readlines().",hint:"Any read‑enabled mode.",level:"intermediate",codeExample:null},{question:"What happens if you call readlines() on a file opened with 'w'?",shortAnswer:"It raises an error because 'w' is write‑only.",explanation:"Use 'r' or 'r+' for reading.",hint:"Open in the right mode.",level:"basic",codeExample:"f = open('f.txt', 'w'); f.readlines()  # OSError"},{question:"How do you get the number of lines in a file using readlines()?",shortAnswer:"Use `len(f.readlines())`.",explanation:"This counts the lines by loading them into a list.",hint:"Not efficient for large files.",level:"basic",codeExample:"len(f.readlines())"},{question:"How do you get the number of lines in a file without memory issues?",shortAnswer:"Use iteration: `sum(1 for line in f)`.",explanation:"This counts lines without loading the entire file.",hint:"Memory‑efficient.",level:"intermediate",codeExample:"sum(1 for line in f)"},{question:"Can readlines() handle very large files with sizehint?",shortAnswer:"Yes, by reading in chunks with sizehint.",explanation:"It allows batch processing without loading the whole file.",hint:"Use in a loop.",level:"advanced",codeExample:null},{question:"What is the default value of sizehint?",shortAnswer:"It's -1, which means read the entire file.",explanation:"A negative value is treated as 'read all'.",hint:"Read all by default.",level:"intermediate",codeExample:null},{question:"Is readlines() part of the file object or a separate function?",shortAnswer:"It's a method of the file object.",explanation:"Called on a file object, e.g., `f.readlines()`.",hint:"It's a method.",level:"basic",codeExample:null},{question:"Can you use readlines() with sys.stdin?",shortAnswer:"Yes, sys.stdin is a file‑like object that supports readlines().",explanation:"Useful for reading all input lines from the console.",hint:"Works with stdin.",level:"intermediate",codeExample:"import sys; lines = sys.stdin.readlines()"},{question:"What is the impact of `newline` parameter on readlines()?",shortAnswer:"It affects newline translation, which affects line boundaries.",explanation:"Use `newline=''` to preserve exact newlines.",hint:"Affects line splitting.",level:"advanced",codeExample:"open('f.txt', 'r', newline='')"},{question:"Does readlines() preserve empty lines?",shortAnswer:"Yes, empty lines are included as `'\\n'`.",explanation:"A blank line is a line with only a newline.",hint:"Empty lines are included.",level:"intermediate",codeExample:null},{question:"How can you skip empty lines when using readlines()?",shortAnswer:"Filter the list: `[line for line in lines if line.strip()]`.",explanation:"This removes lines that are blank or only whitespace.",hint:"Filter out empty lines.",level:"intermediate",codeExample:"[line for line in lines if line.strip()]"},{question:"Is there a way to read lines lazily (not all at once)?",shortAnswer:"Yes, use `for line in f` or `readline()` in a loop.",explanation:"These approaches read one line at a time.",hint:"Use iteration.",level:"basic",codeExample:null},{question:"What is the best practice for reading small configuration files?",shortAnswer:"readlines() is often fine for small config files.",explanation:"It's convenient and the file is typically small.",hint:"readlines() for small files.",level:"intermediate",codeExample:null},{question:"What is the best practice for reading large data files?",shortAnswer:"Use `for line in f` or `readline()` in a loop.",explanation:"This keeps memory usage low and is safer.",hint:"Iterate for large files.",level:"intermediate",codeExample:"for line in f: process(line)"}],E=()=>{const t=l.useRef([]);l.useEffect(()=>{const r=new IntersectionObserver(s=>{s.forEach(a=>{a.isIntersecting&&a.target.classList.add("section-visible")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});return t.current.forEach(s=>{s&&r.observe(s)}),()=>r.disconnect()},[]);const n=r=>{r&&!t.current.includes(r)&&t.current.push(r)};return e.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 p-6 md:p-8 lg:p-12 font-sans leading-relaxed",children:[e.jsxs("header",{ref:n,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-gray-200 dark:border-gray-800",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-sm font-mono bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full",children:"Topic 16"}),e.jsx("span",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:"Core"})]}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight",children:"Reading Files using `readlines()`"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 mt-3 max-w-3xl",children:"Reading all lines at once: convenient for small files, but beware of memory usage."}),e.jsxs("div",{className:"flex flex-wrap gap-3 mt-4",children:[e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"📚 readlines()"}),e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"📋 List of Lines"}),e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"💾 Memory Consideration"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📚"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"The `readlines()` Method"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["The ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"readlines()"})," method reads all lines from a file and returns them as a ",e.jsx("strong",{children:"list"}),"of strings. Each string includes its newline character."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Prototype:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"file.readlines(sizehint=-1)"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Return type:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"list"})," of ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"str"})," (text mode) or ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"list"})," of ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"bytes"})," (binary mode)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Purpose:"})," Read the entire file and return each line as a separate element in a list."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Parameters:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"sizehint"})," (optional) — a hint for the number of bytes to read; used to optimize reading."]})]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-4 rounded-r-xl",children:[e.jsx("p",{className:"text-blue-700 dark:text-blue-300 font-medium",children:"💡 Key Insight:"}),e.jsxs("p",{className:"text-blue-600 dark:text-blue-400 text-sm",children:[e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"readlines()"})," is",e.jsx("strong",{children:"not"})," the same as ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"read()"}),".",e.jsx("code",{children:"read()"})," returns a single string; ",e.jsx("code",{children:"readlines()"}),"returns a list of strings."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-100",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📝"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Syntax and Behavior"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsx("p",{children:e.jsx("strong",{children:"Basic usage:"})}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm",children:e.jsxs("code",{className:"text-gray-800 dark:text-gray-200",children:["with open('data.txt', 'r', encoding='utf-8') as f:",e.jsx("br",{}),"lines = f.readlines()",e.jsx("br",{}),'print(f"Read ',"{len(lines)}",' lines")',e.jsx("br",{}),"for line in lines:",e.jsx("br",{}),"print(line, end='')"]})}),e.jsx("p",{children:e.jsx("strong",{children:"Key behaviors:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Includes newlines:"})," Each line includes its newline character at the end, except possibly the last line."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"EOF:"})," If the file is empty, ",e.jsx("code",{children:"readlines()"}),"returns an empty list (",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"[]"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Memory:"})," Reads the ",e.jsx("strong",{children:"entire"})," file into memory. For large files, this can be problematic."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Binary mode:"})," In binary mode, returns a list of bytes objects, each representing a line."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-200",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📏"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"The `sizehint` Parameter"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["The ",e.jsx("code",{children:"sizehint"})," parameter is a ",e.jsx("strong",{children:"hint"})," to the read function about how many bytes to read. It's used for optimization when you want to read in chunks but still want lines."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Purpose:"})," Controls how much data is read from the file in one internal operation."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Behavior:"})," If ",e.jsx("code",{children:"sizehint"})," is given, it reads approximately that many bytes from the file and returns the complete lines that fit in that amount."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Default:"})," If ",e.jsx("code",{children:"sizehint"})," is negative or omitted, it reads the entire file."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use case:"})," Processing very large files in chunks while maintaining line boundaries."]})]}),e.jsx("p",{children:e.jsx("strong",{children:"Example:"})}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm",children:e.jsxs("code",{className:"text-gray-800 dark:text-gray-200",children:["with open('large_file.txt', 'r') as f:",e.jsx("br",{}),"while True:",e.jsx("br",{}),"lines = f.readlines(8192)  # read ~8KB worth of lines",e.jsx("br",{}),"if not lines:",e.jsx("br",{}),"break",e.jsx("br",{}),"process_batch(lines)"]})}),e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 p-4 rounded-r-xl",children:[e.jsx("p",{className:"text-yellow-700 dark:text-yellow-300 font-medium",children:"⚠️ Note:"}),e.jsxs("p",{className:"text-yellow-600 dark:text-yellow-400 text-sm",children:[e.jsx("code",{children:"sizehint"})," is a ",e.jsx("strong",{children:"hint"}),", not a strict limit. Python may read slightly more or less than the specified amount to ensure complete lines are returned."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"💾"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Memory Considerations"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:[e.jsx("code",{children:"readlines()"})," loads the ",e.jsx("strong",{children:"entire file"}),"into memory as a list of strings. This has important implications:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Small files:"})," It's fine for files that are small (e.g., under 10MB). It's convenient and fast."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Large files:"})," For files larger than available memory, it can cause ",e.jsx("code",{children:"MemoryError"})," or slow performance due to swapping."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Line count:"})," The list size equals the number of lines in the file, plus the list overhead."]})]}),e.jsxs("div",{className:"bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-4 rounded-r-xl",children:[e.jsx("p",{className:"text-red-700 dark:text-red-300 font-medium",children:"⚠️ Warning:"}),e.jsxs("p",{className:"text-red-600 dark:text-red-400 text-sm",children:["For large files, ",e.jsx("strong",{children:"never"})," use ",e.jsx("code",{children:"readlines()"}),"without considering memory. Use ",e.jsx("code",{children:"for line in f"})," or",e.jsx("code",{children:"readline()"})," in a loop instead."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"⚖️"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"`readlines()` vs Iteration"})]}),e.jsx("div",{className:"overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-800",children:[e.jsx("thead",{className:"bg-gray-100 dark:bg-gray-800/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Aspect"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"readlines()"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"for line in f"})]})}),e.jsxs("tbody",{className:"bg-white dark:bg-gray-900/50 divide-y divide-gray-200 dark:divide-gray-800 text-gray-700 dark:text-gray-300",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-medium",children:"Memory usage"}),e.jsx("td",{className:"px-6 py-4",children:"High (loads all lines)"}),e.jsx("td",{className:"px-6 py-4",children:"Low (one line at a time)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-medium",children:"Speed"}),e.jsx("td",{className:"px-6 py-4",children:"Fast for small files"}),e.jsx("td",{className:"px-6 py-4",children:"Similar, but lower memory"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-medium",children:"Random access"}),e.jsx("td",{className:"px-6 py-4",children:"✅ Yes (list indexing)"}),e.jsx("td",{className:"px-6 py-4",children:"❌ No (sequential only)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-medium",children:"Large files"}),e.jsx("td",{className:"px-6 py-4",children:"❌ Risk of MemoryError"}),e.jsx("td",{className:"px-6 py-4",children:"✅ Safe"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-medium",children:"Recommended"}),e.jsx("td",{className:"px-6 py-4",children:"Small files only"}),e.jsx("td",{className:"px-6 py-4",children:"✅ Always"})]})]})]})}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-2 text-center",children:"Prefer iteration (`for line in f`) for most use cases; use `readlines()` only when you need a list of lines and the file is small."})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🌍"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Real-World Scenarios"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"bg-blue-50 dark:bg-blue-950/30 rounded-xl p-6 border border-blue-200 dark:border-blue-800/50 transition-all duration-300 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"🏫"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Loading Student Names for Display"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:["A school in Shyamnagar has a small file with student names. The attendance system loads all names using ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"readlines()"}),"to display them in a dropdown list. The file is small, so this is appropriate."]})]})]})}),e.jsx("div",{className:"bg-purple-50 dark:bg-purple-950/30 rounded-xl p-6 border border-purple-200 dark:border-purple-800/50 transition-all duration-300 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Configuration File Parsing"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:["A web app in Barrackpore loads its configuration from a small ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"config.ini"}),". The app uses ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"readlines()"}),"to read all lines, then parses them for key‑value pairs."]})]})]})}),e.jsx("div",{className:"bg-green-50 dark:bg-green-950/30 rounded-xl p-6 border border-green-200 dark:border-green-800/50 transition-all duration-300 hover:shadow-lg hover:border-green-300 dark:hover:border-green-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"📋"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Batch Processing with sizehint"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:["A data processing pipeline in Naihati handles large CSV files in batches. Using ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"readlines(sizehint)"}),", it reads chunks of lines (e.g., 10,000 lines at a time) to process them in batches while keeping memory usage under control."]})]})]})})]})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🐍"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Python in Action"})]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 text-lg mb-6",children:["The following examples demonstrate the ",e.jsx("code",{children:"readlines()"})," method."]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(i,{fileModule:c,title:"Basic readlines() Usage",highlightLines:[]}),e.jsx(i,{fileModule:h,title:"Using sizehint Parameter",highlightLines:[]}),e.jsx(i,{fileModule:m,title:"Memory Considerations",highlightLines:[]}),e.jsx(i,{fileModule:x,title:"Filtering and Processing",highlightLines:[]}),e.jsx(i,{fileModule:f,title:"readlines() vs Iteration",highlightLines:[]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"💡"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Tips & Tricks"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{title:"Use readlines() only for small files",desc:"If the file is larger than a few MB, use iteration."},{title:"Strip newlines with list comprehension",desc:"`lines = [line.rstrip('\\n') for line in f.readlines()]`"},{title:"Use sizehint for batch processing",desc:"Read chunks of lines without loading the entire file."},{title:"Check file size before using readlines()",desc:"Use `os.path.getsize()` to estimate memory usage."},{title:"Convert to list of stripped lines",desc:"`lines = [line.strip() for line in f.readlines()]`"},{title:"Use readlines() with `with` for automatic close",desc:"Always use context managers."}].map((r,s)=>e.jsxs("div",{className:"bg-amber-50 dark:bg-amber-950/20 rounded-xl p-5 border border-amber-200 dark:border-amber-800/50 transition-all duration-300 hover:shadow-lg hover:border-amber-300 dark:hover:border-amber-600 hover:-translate-y-1",children:[e.jsxs("h4",{className:"font-semibold text-gray-900 dark:text-white flex items-start gap-2",children:[e.jsx("span",{className:"text-amber-500",children:"✦"})," ",r.title]}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 mt-1",children:r.desc})]},s))})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Common Mistakes"})]}),e.jsx("div",{className:"space-y-3",children:[{mistake:"Using readlines() on huge files, causing MemoryError",fix:"Use `for line in f` or read in chunks with sizehint."},{mistake:"Forgetting that lines include newlines",fix:"Use `rstrip('\\n')` or `strip()` when comparing."},{mistake:"Assuming readlines() returns a string",fix:"It returns a list; use indexing to access lines."},{mistake:"Not handling empty files (returns [])",fix:"Check `if not lines:` before processing."},{mistake:"Using readlines() and then modifying the file",fix:"The file is closed after the `with` block; modify after."}].map((r,s)=>e.jsx("div",{className:"bg-red-50 dark:bg-red-950/20 rounded-xl p-5 border border-red-200 dark:border-red-800/50 transition-all duration-300 hover:shadow-lg hover:border-red-300 dark:hover:border-red-600",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-red-500 text-lg",children:"✗"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-gray-800 dark:text-gray-200 font-medium",children:r.mistake}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:["✓ ",r.fix]})]})]})},s))})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Best Practices"})]}),e.jsx("div",{className:"bg-emerald-50 dark:bg-emerald-950/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/50 transition-all duration-300 hover:shadow-lg hover:border-emerald-300 dark:hover:border-emerald-600",children:e.jsxs("ul",{className:"space-y-3 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Use readlines() only for small files:"})," ","If you need random access to lines and the file is small, it's fine."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Prefer iteration for large files:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"for line in f"})," is memory‑efficient and safer."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Use sizehint for batch processing:"})," ","When you need to process lines in batches, use ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"readlines(sizehint)"}),"."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Strip newlines when processing:"})," ","Use ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"rstrip('\\n')"})," to clean lines before processing."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Check file size before using readlines():"})," ","Use ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"os.path.getsize()"}),"to estimate memory usage."]})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📋"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Mini Checklist"})]}),e.jsxs("div",{className:"bg-indigo-50 dark:bg-indigo-950/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800/50 transition-all duration-300 hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-600",children:[e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"By the end of this topic, you should understand:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:["The `readlines()` method and its return type","How `readlines()` differs from `read()` and `readline()`","The `sizehint` parameter and its purpose","Memory considerations when using `readlines()`","When to use `readlines()` vs iteration","How to strip newlines from the returned lines","Common pitfalls and how to avoid them"].map((r,s)=>e.jsxs("div",{className:"flex items-center gap-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900/50 px-4 py-2 rounded-lg",children:[e.jsx("span",{className:"text-indigo-400",children:"☐"}),e.jsx("span",{className:"text-sm",children:r})]},s))})]})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🤔"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Think About…"})]}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-950/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800/50 transition-all duration-300 hover:shadow-lg hover:border-yellow-300 dark:hover:border-yellow-600",children:e.jsxs("div",{className:"space-y-4 text-gray-700 dark:text-gray-300",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Observe carefully:"})," ","If a file has 1 million lines, how much memory would",e.jsx("code",{children:"readlines()"})," use? What about the list overhead?"]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Try changing this:"})," ","Write a program that reads a file with ",e.jsx("code",{children:"readlines()"}),", then processes each line. Compare the memory usage with the iteration approach using ",e.jsx("code",{children:"memory_profiler"}),"."]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Think about:"})," ","Why might a web server need to read a configuration file with",e.jsx("code",{children:"readlines()"})," instead of iterating? What's the trade‑off?"]})]})]})})]}),e.jsx("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:e.jsx(o,{title:"Reading with readlines() – FAQs",questions:p})}),e.jsx("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:e.jsx(d,{note:"`readlines()` is convenient but dangerous for beginners because they often use it without considering memory. Use the analogy of a book: reading the whole book into memory is fine for a short story but not for an encyclopedia. Emphasize that `for line in f` is the safer default. However, `readlines()` has its place for small config files, headers, or when random access to lines is needed. Show them how to use `sizehint` for batch processing and explain the list overhead."})}),e.jsxs("footer",{className:"pt-8 mt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400",children:[e.jsx("p",{children:"Topic 16: Reading Files using readlines() · Built with ❤️ for classroom learning"}),e.jsx("p",{className:"mt-1",children:"Next: Topic 17 — Reading Files Line by Line"})]})]}),e.jsx("style",{children:`
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
      `})]})};export{E as default};
