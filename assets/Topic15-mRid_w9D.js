import{r as l,j as e}from"./index-DQGlkDD-.js";import{P as t}from"./PythonFileLoader-D9CQhVaU.js";import{F as d}from"./FAQTemplate-DFumfJBl.js";import{T as o}from"./TeacherSukantaHui-BKmNB23P.js";import"./PythonCodeBlock-CEzPkz3E.js";import"./prism-CtT2IhSy.js";import"./browser-CG--_uGh.js";import"./clsx-B-dksMZM.js";import"./github-CG9Ag1Gm.js";import"./createLucideIcon-DkPaqQ-z.js";import"./git-branch-tvjRpsF3.js";const c=`# readline_basic.py\r
# Demonstrates basic usage of readline()\r
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
def readline_examples(filename):\r
    """Show basic readline() usage."""\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        # Read first line\r
        line1 = f.readline()\r
        print(f"📖 Line 1: {repr(line1)}")\r
\r
        # Read second line\r
        line2 = f.readline()\r
        print(f"📖 Line 2: {repr(line2)}")\r
\r
        # Read third line (including the newline)\r
        line3 = f.readline()\r
        print(f"📖 Line 3: {repr(line3)}")\r
\r
        # Read remaining lines (line 4 only)\r
        line4 = f.readline()\r
        print(f"📖 Line 4: {repr(line4)}")\r
\r
        # Try reading beyond EOF\r
        line5 = f.readline()\r
        print(f"📖 Line 5 (EOF): {repr(line5)}")\r
\r
def readline_with_strip(filename):\r
    """Demonstrate stripping newlines."""\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        line = f.readline()\r
        print(f"\\n🔍 Raw line: {repr(line)}")\r
        print(f"   Without newline: {repr(line.rstrip('\\n'))}")\r
        print(f"   Stripped: {repr(line.strip())}")\r
\r
if __name__ == "__main__":\r
    filename = create_sample_file()\r
    readline_examples(filename)\r
    readline_with_strip(filename)\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")`,h=`# readline_loop.py\r
# Demonstrates different ways to read lines in a loop\r
\r
import os\r
\r
def create_test_file():\r
    """Create a test file with numbered lines."""\r
    filename = "test.txt"\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        for i in range(1, 11):\r
            f.write(f"Line {i}: Some content here.\\n")\r
    print(f"✅ Created test file with 10 lines: {filename}")\r
    return filename\r
\r
def while_loop_method(filename):\r
    """Read lines using while True with break."""\r
    print("\\n🔹 Method 1: while True with break")\r
    count = 0\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        while True:\r
            line = f.readline()\r
            if not line:\r
                break\r
            count += 1\r
            # In a real app, process the line here\r
    print(f"   Read {count} lines")\r
\r
def walrus_method(filename):\r
    """Read lines using walrus operator (Python 3.8+)."""\r
    print("\\n🔹 Method 2: while line := f.readline()")\r
    count = 0\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        while line := f.readline():\r
            count += 1\r
    print(f"   Read {count} lines")\r
\r
def for_loop_method(filename):\r
    """Read lines using for loop (most Pythonic)."""\r
    print("\\n🔹 Method 3: for line in f")\r
    count = 0\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        for line in f:\r
            count += 1\r
    print(f"   Read {count} lines")\r
\r
if __name__ == "__main__":\r
    filename = create_test_file()\r
    while_loop_method(filename)\r
    walrus_method(filename)\r
    for_loop_method(filename)\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")`,m=`# readline_size.py\r
# Demonstrates the size parameter of readline()\r
\r
import os\r
\r
def create_test_file():\r
    """Create a file with some lines of varying lengths."""\r
    filename = "size_test.txt"\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.write("Short line\\n")\r
        f.write("This is a much longer line with many characters\\n")\r
        f.write("Another line\\n")\r
    print(f"✅ Created test file: {filename}")\r
    return filename\r
\r
def readline_size_examples(filename):\r
    """Show how the size parameter works."""\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        # Read only 5 characters from first line\r
        part1 = f.readline(5)\r
        print(f"📖 readline(5): {repr(part1)}")\r
\r
        # Read the rest of the first line\r
        rest1 = f.readline()\r
        print(f"📖 readline() (rest): {repr(rest1)}")\r
\r
        # Read only 10 characters from second line\r
        part2 = f.readline(10)\r
        print(f"📖 readline(10): {repr(part2)}")\r
\r
        # Read the rest of the second line\r
        rest2 = f.readline()\r
        print(f"📖 readline() (rest): {repr(rest2)}")\r
\r
        # Read third line fully\r
        line3 = f.readline()\r
        print(f"📖 readline(): {repr(line3)}")\r
\r
def readline_size_binary(filename):\r
    """Show size parameter in binary mode."""\r
    # Create a binary file with newlines\r
    with open("binary_test.bin", 'wb') as f:\r
        f.write(b"Line 1 with data\\n")\r
        f.write(b"Line 2 with data\\n")\r
\r
    print("\\n🔍 Binary mode with size:")\r
    with open("binary_test.bin", 'rb') as f:\r
        part = f.readline(5)\r
        print(f"   readline(5): {repr(part)}")\r
        rest = f.readline()\r
        print(f"   readline(): {repr(rest)}")\r
\r
    os.remove("binary_test.bin")\r
\r
if __name__ == "__main__":\r
    filename = create_test_file()\r
    readline_size_examples(filename)\r
    readline_size_binary(filename)\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")`,x=`# readline_empty.py\r
# Demonstrates handling empty lines and EOF\r
\r
import os\r
\r
def create_file_with_empty_lines():\r
    """Create a file with some empty lines."""\r
    filename = "empty_lines.txt"\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.write("First line\\n")\r
        f.write("\\n")           # Empty line\r
        f.write("Third line\\n")\r
        f.write("\\n")           # Empty line\r
        f.write("\\n")           # Another empty line\r
        f.write("Last line\\n")\r
    print(f"✅ Created file with empty lines: {filename}")\r
    return filename\r
\r
def read_empty_lines(filename):\r
    """Read and identify empty lines vs EOF."""\r
    print("\\n🔍 Reading file with empty lines:")\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        line_num = 0\r
        while True:\r
            line = f.readline()\r
            line_num += 1\r
            if line == '':\r
                print(f"   Line {line_num}: EOF reached")\r
                break\r
            elif line == '\\n':\r
                print(f"   Line {line_num}: Empty line (only newline)")\r
            else:\r
                print(f"   Line {line_num}: {repr(line.strip())}")\r
\r
def process_non_empty_lines(filename):\r
    """Process only non-empty lines."""\r
    print("\\n🔍 Processing non-empty lines:")\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        for line in f:\r
            if line.strip():  # Skip empty lines\r
                print(f"   {repr(line.strip())}")\r
\r
if __name__ == "__main__":\r
    filename = create_file_with_empty_lines()\r
    read_empty_lines(filename)\r
    process_non_empty_lines(filename)\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")`,p=`# readline_vs_read.py\r
# Compares readline() with read() for different use cases\r
\r
import os\r
import time\r
\r
def create_file_with_lines(filename="lines.txt", num_lines=1000):\r
    """Create a file with many lines."""\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        for i in range(num_lines):\r
            f.write(f"Line {i:04d}: Some interesting content for testing.\\n")\r
    print(f"✅ Created file with {num_lines} lines: {filename}")\r
\r
def read_with_readline(filename):\r
    """Read lines one by one using readline() in a loop."""\r
    start = time.perf_counter()\r
    count = 0\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        while line := f.readline():\r
            count += 1\r
    elapsed = time.perf_counter() - start\r
    return count, elapsed\r
\r
def read_with_for_loop(filename):\r
    """Read lines using for loop (most Pythonic)."""\r
    start = time.perf_counter()\r
    count = 0\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        for line in f:\r
            count += 1\r
    elapsed = time.perf_counter() - start\r
    return count, elapsed\r
\r
def read_with_readlines(filename):\r
    """Read all lines at once using readlines()."""\r
    start = time.perf_counter()\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        lines = f.readlines()\r
    elapsed = time.perf_counter() - start\r
    return len(lines), elapsed\r
\r
def read_with_read_all(filename):\r
    """Read entire file and split lines."""\r
    start = time.perf_counter()\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        content = f.read()\r
        lines = content.splitlines()\r
    elapsed = time.perf_counter() - start\r
    return len(lines), elapsed\r
\r
if __name__ == "__main__":\r
    filename = "perf_lines.txt"\r
    create_file_with_lines(filename, 1000)\r
\r
    print("\\n⏱️ Performance comparison (1000 lines):")\r
    count, elapsed = read_with_readline(filename)\r
    print(f"  readline() loop:  {count} lines, {elapsed:.4f}s")\r
\r
    count, elapsed = read_with_for_loop(filename)\r
    print(f"  for loop:         {count} lines, {elapsed:.4f}s")\r
\r
    count, elapsed = read_with_readlines(filename)\r
    print(f"  readlines():      {count} lines, {elapsed:.4f}s")\r
\r
    count, elapsed = read_with_read_all(filename)\r
    print(f"  read() + split:   {count} lines, {elapsed:.4f}s")\r
\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")`,f=[{question:"What does the readline() method do?",shortAnswer:"Reads a single line from a file, including the newline character.",explanation:"It reads from the current position until a newline or EOF.",hint:"It's line‑oriented.",level:"basic",codeExample:"line = f.readline()"},{question:"What does readline() return when it reaches EOF?",shortAnswer:"An empty string ''.",explanation:"This is how you detect the end of the file.",hint:"Use `if not line: break`.",level:"basic",codeExample:null},{question:"What does readline() return for a blank line?",shortAnswer:"'\\n' (a string containing just a newline).",explanation:"This is different from EOF, which returns ''.",hint:"Empty line vs end of file.",level:"intermediate",codeExample:"line = f.readline()  # returns '\\n'"},{question:"Does readline() include the newline character?",shortAnswer:"Yes, it includes the newline at the end of the line.",explanation:"The only exception is the last line if it doesn't end with a newline.",hint:"Use `rstrip('\\n')` to remove it.",level:"basic",codeExample:null},{question:"How do you remove the newline from a line read by readline()?",shortAnswer:"Use `line.rstrip('\\n')` or `line.strip()`.",explanation:"`rstrip('\\n')` removes only newline; `strip()` removes all whitespace.",hint:"Choose based on your needs.",level:"basic",codeExample:"line.rstrip('\\n')"},{question:"What is the purpose of the size parameter in readline(size)?",shortAnswer:"It limits the number of characters read from the line.",explanation:"If the line is longer, it returns only the first `size` characters.",hint:"Useful for reading partial lines.",level:"intermediate",codeExample:"f.readline(10)"},{question:"What happens if the line is longer than the size parameter?",shortAnswer:"It returns the first `size` characters; the next read continues the same line.",explanation:"The file pointer stays after the `size` characters, not at the newline.",hint:"It doesn't discard the rest of the line.",level:"intermediate",codeExample:null},{question:"Is `for line in f` equivalent to using readline()?",shortAnswer:"Yes, internally the file object's iterator uses readline().",explanation:"It's a more Pythonic and concise way to read lines.",hint:"Use `for line in f` for simplicity.",level:"basic",codeExample:"for line in f: process(line)"},{question:"Which is better: readline() loop or for line in f?",shortAnswer:"`for line in f` is preferred for most cases.",explanation:"It's simpler, more readable, and handles EOF automatically.",hint:"Use `for` unless you need precise control.",level:"basic",codeExample:null},{question:"Can you use readline() on a file opened in binary mode?",shortAnswer:"Yes, it reads up to the next newline byte (`\\n`).",explanation:"It returns bytes instead of a string.",hint:"Works with binary files containing newline delimiters.",level:"intermediate",codeExample:"line = f.readline()  # returns bytes"},{question:"What is the difference between readline() and readlines()?",shortAnswer:"readline() reads one line; readlines() reads all lines into a list.",explanation:"readlines() loads the entire file into memory.",hint:"One line vs all lines.",level:"basic",codeExample:null},{question:"What is the difference between readline() and read()?",shortAnswer:"readline() reads one line; read() reads the entire file or a chunk.",explanation:"readline() is line‑oriented; read() is not.",hint:"Use readline() for structured text.",level:"intermediate",codeExample:null},{question:"How do you detect a blank line using readline()?",shortAnswer:"Check if the line is `'\\n'`.",explanation:"A blank line has only a newline character.",hint:"`if line == '\\n': # blank line`",level:"intermediate",codeExample:null},{question:"What is the file pointer after calling readline()?",shortAnswer:"It moves to the start of the next line.",explanation:"The pointer is after the newline character.",hint:"Use tell() to check.",level:"intermediate",codeExample:"f.tell()"},{question:"Can you use seek() with readline()?",shortAnswer:"Yes, you can seek to a position and then read the next line.",explanation:"Useful for random access in structured files.",hint:"Combine for powerful navigation.",level:"advanced",codeExample:"f.seek(100); line = f.readline()"},{question:"How do you read the first line of a file using readline()?",shortAnswer:"Open the file and call readline() once.",explanation:"The first readline() returns the first line.",hint:"Works for headers.",level:"basic",codeExample:"header = f.readline()"},{question:"How do you skip the first line and read the rest?",shortAnswer:"Call readline() once (discard), then loop for the rest.",explanation:"Common for CSV files with headers.",hint:"`header = f.readline(); for line in f: ...`",level:"intermediate",codeExample:"f.readline(); for line in f: process(line)"},{question:"What is the maximum line size readline() can handle?",shortAnswer:"It's limited by memory; it reads until newline or EOF.",explanation:"A very long line without newline could cause memory issues.",hint:"Use `size` to limit.",level:"intermediate",codeExample:null},{question:"Does readline() work with files that use `\\r\\n` (Windows newlines)?",shortAnswer:"Yes, in text mode Python translates `\\r\\n` to `\\n`.",explanation:"In binary mode, it reads the raw bytes including `\\r\\n`.",hint:"Text mode normalizes newlines.",level:"intermediate",codeExample:null},{question:"What happens if you call readline() on a file opened in 'w' mode?",shortAnswer:"It raises an error because 'w' mode is write‑only.",explanation:"Use 'r' or 'r+' for reading.",hint:"Open in the right mode.",level:"basic",codeExample:"f = open('f.txt', 'w'); f.readline()  # OSError"},{question:"How do you read a file in reverse order using readline()?",shortAnswer:"You can't directly; you'd need to read all lines and reverse.",explanation:"Use `readlines()` to get all lines, then reverse.",hint:"Not memory‑efficient for large files.",level:"advanced",codeExample:"lines = f.readlines(); for line in reversed(lines): ..."},{question:"Is readline() memory‑efficient for large files?",shortAnswer:"Yes, it reads one line at a time, keeping memory usage low.",explanation:"Unlike readlines(), it doesn't load the entire file.",hint:"Use it for large files.",level:"intermediate",codeExample:null},{question:"Can you use readline() with a file object from sys.stdin?",shortAnswer:"Yes, sys.stdin is a file‑like object that supports readline().",explanation:"You can read input line by line from the console.",hint:"Works for interactive input.",level:"intermediate",codeExample:"import sys; line = sys.stdin.readline()"},{question:"What is the difference between `line = f.readline()` and `line = f.readline(10)`?",shortAnswer:"The first reads the entire line; the second reads at most 10 characters.",explanation:"The size parameter limits the read.",hint:"Use size for partial reads.",level:"intermediate",codeExample:null},{question:"How do you handle a very long line without a newline?",shortAnswer:"Use `readline(size)` or `read(size)` to read it in chunks.",explanation:"Otherwise, readline() could read until EOF, using all memory.",hint:"Set a reasonable size limit.",level:"advanced",codeExample:"chunk = f.readline(4096)"},{question:"What is the return type of readline() in text mode?",shortAnswer:"str (string).",explanation:"It returns a decoded Unicode string.",hint:"Use binary mode for bytes.",level:"basic",codeExample:"type(f.readline())  # str"},{question:"What is the return type of readline() in binary mode?",shortAnswer:"bytes.",explanation:"It returns raw bytes including the newline byte.",hint:"Use `.decode()` to convert to string.",level:"basic",codeExample:"type(f.readline())  # bytes"},{question:"Can you use readline() to read from a network socket?",shortAnswer:"Yes, if the socket is wrapped in a file‑like object with readline().",explanation:"Make sure the socket sends newline‑terminated messages.",hint:"Use `socket.makefile()` for this.",level:"advanced",codeExample:"f = socket.makefile(); line = f.readline()"},{question:"What is the purpose of the `newline` parameter in open() with readline()?",shortAnswer:"It controls newline translation, affecting what readline() sees.",explanation:"Use `newline=''` to disable translation for exact control.",hint:"Important for cross‑platform compatibility.",level:"advanced",codeExample:"open('f.txt', 'r', newline='')"},{question:"How does readline() handle a file that doesn't end with a newline?",shortAnswer:"It returns the last line without a trailing newline.",explanation:"The last line may not have `\\n` at the end.",hint:"Last line is shorter.",level:"intermediate",codeExample:null}],T=()=>{const s=l.useRef([]);l.useEffect(()=>{const r=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&a.target.classList.add("section-visible")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});return s.current.forEach(i=>{i&&r.observe(i)}),()=>r.disconnect()},[]);const n=r=>{r&&!s.current.includes(r)&&s.current.push(r)};return e.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 p-6 md:p-8 lg:p-12 font-sans leading-relaxed",children:[e.jsxs("header",{ref:n,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-gray-200 dark:border-gray-800",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-sm font-mono bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full",children:"Topic 15"}),e.jsx("span",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:"Core"})]}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight",children:"Reading Files using `readline()`"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 mt-3 max-w-3xl",children:"Reading files one line at a time: the memory‑efficient way to process structured text data."}),e.jsxs("div",{className:"flex flex-wrap gap-3 mt-4",children:[e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"📖 readline()"}),e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"📄 Line by Line"}),e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"💾 Memory Efficient"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📖"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"The `readline()` Method"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["The ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"readline()"})," method reads a ",e.jsx("strong",{children:"single line"})," from a file, starting from the current file pointer position. It reads characters until it encounters a newline character (",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"\\n"}),") or reaches EOF."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Prototype:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"file.readline(size=-1)"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Return type:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"str"})," (text mode) or",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"bytes"})," (binary mode)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Purpose:"})," Read a single line from the file, including the newline character at the end."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Parameters:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"size"})," (optional) — maximum number of characters/bytes to read. If negative or omitted, reads the entire line."]})]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-4 rounded-r-xl",children:[e.jsx("p",{className:"text-blue-700 dark:text-blue-300 font-medium",children:"💡 Key Insight:"}),e.jsxs("p",{className:"text-blue-600 dark:text-blue-400 text-sm",children:[e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"readline()"})," is the foundation of ",e.jsx("strong",{children:"line‑oriented"})," file processing. It's ideal for log files, CSV files, configuration files, and any text where each record is on its own line."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-100",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📝"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Syntax and Behavior"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsx("p",{children:e.jsx("strong",{children:"Basic usage:"})}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm",children:e.jsxs("code",{className:"text-gray-800 dark:text-gray-200",children:["with open('data.txt', 'r', encoding='utf-8') as f:",e.jsx("br",{}),"line = f.readline()  # reads first line",e.jsx("br",{}),"print(line)          # includes newline at the end",e.jsx("br",{}),"line2 = f.readline() # reads second line"]})}),e.jsx("p",{children:e.jsx("strong",{children:"Key behaviors:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Includes newline:"})," The returned string includes the newline character (",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"\\n"}),") at the end, except for the last line if the file doesn't end with a newline."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"EOF:"})," When the end of the file is reached,",e.jsx("code",{children:"readline()"})," returns an empty string (",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"''"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Binary mode:"})," In binary mode, it reads up to the next newline byte (",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"\\n"}),") or EOF."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Size parameter:"})," If ",e.jsx("code",{children:"size"})," is specified, it reads at most ",e.jsx("code",{children:"size"})," characters/bytes. If ",e.jsx("code",{children:"size"})," cuts off a line, it doesn't read the rest of that line unless called again."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-200",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🔄"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Reading Lines in a Loop"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["The most common use of ",e.jsx("code",{children:"readline()"})," is in a loop to process all lines in a file. There are two common patterns:"]}),e.jsx("p",{children:e.jsx("strong",{children:"Pattern 1: while loop with break condition"})}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm",children:e.jsxs("code",{className:"text-gray-800 dark:text-gray-200",children:["with open('data.txt', 'r') as f:",e.jsx("br",{}),"while True:",e.jsx("br",{}),"line = f.readline()",e.jsx("br",{}),"if not line:  # EOF",e.jsx("br",{}),"break",e.jsx("br",{}),"process_line(line)"]})}),e.jsx("p",{children:e.jsx("strong",{children:"Pattern 2: Assignment expression (Python 3.8+)"})}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm",children:e.jsxs("code",{className:"text-gray-800 dark:text-gray-200",children:["with open('data.txt', 'r') as f:",e.jsx("br",{}),"while line := f.readline():",e.jsx("br",{}),"process_line(line)"]})}),e.jsx("p",{children:e.jsx("strong",{children:"Pattern 3: Using the file object as an iterator"})}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm",children:e.jsxs("code",{className:"text-gray-800 dark:text-gray-200",children:["with open('data.txt', 'r') as f:",e.jsx("br",{}),"for line in f:",e.jsx("br",{}),"process_line(line)"]})}),e.jsxs("p",{children:["Pattern 3 is the ",e.jsx("strong",{children:"most Pythonic"})," and is preferred for most use cases."]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📏"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"The `size` Parameter"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["The optional ",e.jsx("code",{children:"size"})," parameter limits how much",e.jsx("code",{children:"readline()"})," reads:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["If ",e.jsx("code",{children:"size"})," is given and the line is longer than",e.jsx("code",{children:"size"}),", it returns the first ",e.jsx("code",{children:"size"}),"characters/bytes and the file pointer stops there. The next call continues reading the same line."]}),e.jsxs("li",{children:["If ",e.jsx("code",{children:"size"})," is given and is greater than or equal to the line length, it returns the full line."]}),e.jsxs("li",{children:["If ",e.jsx("code",{children:"size"})," is negative or omitted, it reads the complete line."]})]}),e.jsx("p",{children:e.jsx("strong",{children:"Example:"})}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm",children:e.jsxs("code",{className:"text-gray-800 dark:text-gray-200",children:["with open('data.txt', 'r') as f:",e.jsx("br",{}),"part = f.readline(10)  # reads at most 10 chars",e.jsx("br",{}),"rest = f.readline()    # reads the rest of the line",e.jsx("br",{}),"next_line = f.readline()  # reads the next line"]})}),e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 p-4 rounded-r-xl",children:[e.jsx("p",{className:"text-yellow-700 dark:text-yellow-300 font-medium",children:"⚠️ Caution:"}),e.jsxs("p",{className:"text-yellow-600 dark:text-yellow-400 text-sm",children:["Using ",e.jsx("code",{children:"size"})," with ",e.jsx("code",{children:"readline()"})," can break line boundaries. It's more common to use ",e.jsx("code",{children:"readline()"}),"without ",e.jsx("code",{children:"size"})," and process the full line."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🏁"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"EOF and Empty Lines"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["It's important to distinguish between an ",e.jsx("strong",{children:"empty line"}),"and ",e.jsx("strong",{children:"EOF"}),":"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Empty line:"})," A line that contains only a newline character (",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"'\\n'"}),").",e.jsx("code",{children:"readline()"})," returns ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"'\\n'"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"EOF:"})," The end of the file has been reached.",e.jsx("code",{children:"readline()"})," returns ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"''"}),"."]})]}),e.jsxs("p",{children:["This distinction is crucial when processing files that may contain blank lines. Use the ",e.jsx("code",{children:"rstrip('\\n')"})," method to strip the newline when comparing."]}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm",children:e.jsxs("code",{className:"text-gray-800 dark:text-gray-200",children:["line = f.readline()",e.jsx("br",{}),"if line == '\\n':",e.jsx("br",{}),'print("Empty line (blank line)")',e.jsx("br",{}),"elif line == '':",e.jsx("br",{}),'print("End of file reached")',e.jsx("br",{}),"else:",e.jsx("br",{}),'print(f"Line: ',"{line.rstrip()}",'")']})})]})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🌍"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Real-World Scenarios"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"bg-blue-50 dark:bg-blue-950/30 rounded-xl p-6 border border-blue-200 dark:border-blue-800/50 transition-all duration-300 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"🏫"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Processing Student Records"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:["The school in Naihati stores student names one per line in",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"students.txt"}),". The attendance system uses ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"readline()"}),"in a loop to load names one by one, checking each against the attendance list."]})]})]})}),e.jsx("div",{className:"bg-purple-50 dark:bg-purple-950/30 rounded-xl p-6 border border-purple-200 dark:border-purple-800/50 transition-all duration-300 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Parsing CSV Files"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:["A data analyst in Shyamnagar processes a CSV file with thousands of rows. Using ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"readline()"}),", they read the header first, then process each data row without loading the entire file into memory."]})]})]})}),e.jsx("div",{className:"bg-green-50 dark:bg-green-950/30 rounded-xl p-6 border border-green-200 dark:border-green-800/50 transition-all duration-300 hover:shadow-lg hover:border-green-300 dark:hover:border-green-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"📋"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Reading Log Files"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:["A system administrator in Barrackpore monitors server logs. The log analysis script reads the log file line by line using",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"readline()"}),", filtering for errors and warnings without keeping the entire log in memory."]})]})]})})]})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🐍"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Python in Action"})]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 text-lg mb-6",children:["The following examples demonstrate the ",e.jsx("code",{children:"readline()"})," method."]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(t,{fileModule:c,title:"Basic readline() Usage",highlightLines:[]}),e.jsx(t,{fileModule:h,title:"Reading Lines in a Loop",highlightLines:[]}),e.jsx(t,{fileModule:m,title:"Using the size Parameter",highlightLines:[]}),e.jsx(t,{fileModule:x,title:"Handling Empty Lines and EOF",highlightLines:[]}),e.jsx(t,{fileModule:p,title:"readline() vs read()",highlightLines:[]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"💡"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Tips & Tricks"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{title:"Use `for line in f` for simplicity",desc:"It's the most Pythonic way to read lines; it handles EOF automatically."},{title:"Strip newlines with `rstrip('\\n')`",desc:"Remove the newline character while preserving other whitespace."},{title:"Use `strip()` to remove all whitespace",desc:"Useful when you want to clean up the line completely."},{title:"Handle empty lines correctly",desc:"Distinguish between `''` (EOF) and `'\\n'` (empty line)."},{title:"Use `readline()` with `seek()`",desc:"Navigate to a position, then read the next line."},{title:"Binary mode with `readline()`",desc:"Works with `\\n` byte; returns bytes instead of string."}].map((r,i)=>e.jsxs("div",{className:"bg-amber-50 dark:bg-amber-950/20 rounded-xl p-5 border border-amber-200 dark:border-amber-800/50 transition-all duration-300 hover:shadow-lg hover:border-amber-300 dark:hover:border-amber-600 hover:-translate-y-1",children:[e.jsxs("h4",{className:"font-semibold text-gray-900 dark:text-white flex items-start gap-2",children:[e.jsx("span",{className:"text-amber-500",children:"✦"})," ",r.title]}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 mt-1",children:r.desc})]},i))})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Common Mistakes"})]}),e.jsx("div",{className:"space-y-3",children:[{mistake:"Not handling EOF correctly (infinite loop)",fix:"Always check `if not line: break` when using `while True`."},{mistake:"Forgetting that readline() includes the newline",fix:"Use `line.strip()` or `line.rstrip('\\n')`."},{mistake:"Confusing empty lines with EOF",fix:"Empty line is `'\\n'`, EOF is `''`."},{mistake:"Using `readline()` on a closed file",fix:"Always use `with` to ensure the file is open."},{mistake:"Using `size` and not handling partial lines",fix:"If you use `size`, be prepared to read the rest of the line in another call."}].map((r,i)=>e.jsx("div",{className:"bg-red-50 dark:bg-red-950/20 rounded-xl p-5 border border-red-200 dark:border-red-800/50 transition-all duration-300 hover:shadow-lg hover:border-red-300 dark:hover:border-red-600",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-red-500 text-lg",children:"✗"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-gray-800 dark:text-gray-200 font-medium",children:r.mistake}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:["✓ ",r.fix]})]})]})},i))})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Best Practices"})]}),e.jsx("div",{className:"bg-emerald-50 dark:bg-emerald-950/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/50 transition-all duration-300 hover:shadow-lg hover:border-emerald-300 dark:hover:border-emerald-600",children:e.jsxs("ul",{className:"space-y-3 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Prefer iteration (`for line in f`) over manual readline():"})," ","It's simpler, more Pythonic, and less error‑prone."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Always strip newlines when needed:"})," ","Use ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"rstrip('\\n')"})," for predictable behavior."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Use `with` for automatic file closure:"})," ","Never forget to close the file."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Handle empty lines explicitly:"})," ","Know the difference between ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"'\\n'"})," and ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"''"}),"."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Use `readline()` when you need precise control:"})," ","When you need to pause, restart, or read specific numbers of lines."]})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📋"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Mini Checklist"})]}),e.jsxs("div",{className:"bg-indigo-50 dark:bg-indigo-950/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800/50 transition-all duration-300 hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-600",children:[e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"By the end of this topic, you should understand:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:["The `readline()` method and its parameters","How `readline()` handles newlines and EOF","The difference between an empty line and EOF","How to read lines in a loop correctly","The `size` parameter and its effects","When to use `readline()` vs iteration","Common pitfalls and how to avoid them"].map((r,i)=>e.jsxs("div",{className:"flex items-center gap-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900/50 px-4 py-2 rounded-lg",children:[e.jsx("span",{className:"text-indigo-400",children:"☐"}),e.jsx("span",{className:"text-sm",children:r})]},i))})]})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🤔"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Think About…"})]}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-950/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800/50 transition-all duration-300 hover:shadow-lg hover:border-yellow-300 dark:hover:border-yellow-600",children:e.jsxs("div",{className:"space-y-4 text-gray-700 dark:text-gray-300",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Observe carefully:"})," ","What does ",e.jsx("code",{children:"readline()"})," return if the file has a blank line (just a newline) vs the end of the file?"]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Try changing this:"})," ","Write a script that reads a file with ",e.jsx("code",{children:"readline()"}),"and skips empty lines. How do you detect and skip them?"]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Think about:"})," ","If you have a CSV file with a header line, how would you use",e.jsx("code",{children:"readline()"})," to read the header separately from the data?"]})]})]})})]}),e.jsx("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:e.jsx(d,{title:"Reading with readline() – FAQs",questions:f})}),e.jsx("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:e.jsx(o,{note:"`readline()` is the workhorse for text file processing. Students should understand that it's line‑oriented, not character‑oriented. The distinction between an empty line (`'\\n'`) and EOF (`''`) is critical and often misunderstood. Emphasize that `for line in f` is the preferred way for most cases, but `readline()` gives more control. Show them how to strip newlines properly and how to handle files that may or may not end with a newline. The CSV use case is particularly powerful for showing practical application."})}),e.jsxs("footer",{className:"pt-8 mt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400",children:[e.jsx("p",{children:"Topic 15: Reading Files using readline() · Built with ❤️ for classroom learning"}),e.jsx("p",{className:"mt-1",children:"Next: Topic 16 — Reading Files using readlines()"})]})]}),e.jsx("style",{children:`
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
      `})]})};export{T as default};
