import{b as l,j as e}from"./vendor-react-core-Doz9nIC6.js";import{P as i}from"./PythonFileLoader-hCi5osN-.js";import{F as o}from"./FAQTemplate-BHhlgA96.js";import{T as d}from"./TeacherSukantaHui-CEPuAfsb.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const c=`# writelines_basic.py\r
# Demonstrates basic usage of writelines()\r
\r
import os\r
\r
def basic_writelines():\r
    """Write a list of lines to a file."""\r
    filename = "writelines_demo.txt"\r
\r
    lines = [\r
        "Line 1: Hello Swadeep\\n",\r
        "Line 2: Hello Tuhina\\n",\r
        "Line 3: Hello Abhronila\\n",\r
        "Line 4: Hello Debangshu\\n",\r
    ]\r
\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.writelines(lines)\r
\r
    print(f"✅ File written: {filename}")\r
\r
    # Read and display\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        content = f.read()\r
    print(f"\\n📄 File content:\\n{content}")\r
\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")\r
\r
def writelines_with_tuple():\r
    """Write from a tuple."""\r
    filename = "tuple_output.txt"\r
    lines = ("First line\\n", "Second line\\n", "Third line\\n")\r
\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.writelines(lines)\r
\r
    print(f"✅ Tuple written to {filename}")\r
\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        print(f.read())\r
\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")\r
\r
if __name__ == "__main__":\r
    basic_writelines()\r
    writelines_with_tuple()`,h=`# writelines_no_newline.py\r
# Demonstrates the importance of newlines\r
\r
import os\r
\r
def without_newlines():\r
    """Write lines without newlines (bad)."""\r
    filename = "no_newlines.txt"\r
\r
    lines = ["Line 1", "Line 2", "Line 3"]  # No newlines!\r
\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.writelines(lines)\r
\r
    print("📄 Without newlines:")\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        content = f.read()\r
    print(f"Content: {repr(content)}")\r
    print(f"Displayed:\\n{content}")\r
\r
    os.remove(filename)\r
\r
def with_newlines():\r
    """Write lines with newlines (correct)."""\r
    filename = "with_newlines.txt"\r
\r
    lines = ["Line 1\\n", "Line 2\\n", "Line 3\\n"]\r
\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.writelines(lines)\r
\r
    print("\\n✅ With newlines:")\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        content = f.read()\r
    print(f"Content: {repr(content)}")\r
    print(f"Displayed:\\n{content}")\r
\r
    os.remove(filename)\r
\r
def adding_newlines_with_comprehension():\r
    """Add newlines using list comprehension."""\r
    filename = "comprehension.txt"\r
    data = ["Apple", "Banana", "Cherry"]\r
\r
    lines = [f"{item}\\n" for item in data]\r
\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.writelines(lines)\r
\r
    print("\\n📄 With list comprehension:")\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        print(f.read())\r
\r
    os.remove(filename)\r
\r
if __name__ == "__main__":\r
    without_newlines()\r
    with_newlines()\r
    adding_newlines_with_comprehension()\r
    print("🧹 Cleaned up.")`,x=`# writelines_performance.py\r
# Compares performance of writelines vs multiple write calls\r
\r
import os\r
import time\r
\r
def write_with_write(num_lines=10000):\r
    """Write many lines using write() in a loop."""\r
    filename = "write_perf.txt"\r
    start = time.perf_counter()\r
\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        for i in range(num_lines):\r
            f.write(f"Line {i:05d}\\n")\r
\r
    elapsed = time.perf_counter() - start\r
    os.remove(filename)\r
    return elapsed\r
\r
def write_with_writelines(num_lines=10000):\r
    """Write many lines using writelines with a list."""\r
    filename = "writelines_perf.txt"\r
    start = time.perf_counter()\r
\r
    lines = [f"Line {i:05d}\\n" for i in range(num_lines)]\r
\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.writelines(lines)\r
\r
    elapsed = time.perf_counter() - start\r
    os.remove(filename)\r
    return elapsed\r
\r
def write_with_writelines_generator(num_lines=10000):\r
    """Write many lines using writelines with a generator."""\r
    filename = "writelines_gen_perf.txt"\r
    start = time.perf_counter()\r
\r
    def gen_lines(n):\r
        for i in range(n):\r
            yield f"Line {i:05d}\\n"\r
\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.writelines(gen_lines(num_lines))\r
\r
    elapsed = time.perf_counter() - start\r
    os.remove(filename)\r
    return elapsed\r
\r
if __name__ == "__main__":\r
    num_lines = 50000\r
    print(f"⏱️ Performance test: writing {num_lines:,} lines")\r
\r
    t1 = write_with_write(num_lines)\r
    print(f"  write() in loop:   {t1:.4f}s")\r
\r
    t2 = write_with_writelines(num_lines)\r
    print(f"  writelines(list):  {t2:.4f}s")\r
\r
    t3 = write_with_writelines_generator(num_lines)\r
    print(f"  writelines(gen):   {t3:.4f}s")\r
\r
    print("\\n💡 writelines() is faster because it reduces Python-level calls.")`,m=`# writelines_from_generator.py\r
# Demonstrates using a generator with writelines\r
\r
import os\r
\r
def generate_lines(n):\r
    """Generator that yields lines one by one."""\r
    for i in range(n):\r
        yield f"Line {i:03d}: Generated content\\n"\r
\r
def write_with_generator():\r
    """Use writelines with a generator (memory efficient)."""\r
    filename = "generator_output.txt"\r
\r
    # Using generator directly\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.writelines(generate_lines(100))\r
\r
    print(f"✅ Written 100 lines using generator")\r
\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        content = f.read()\r
    print(f"\\n📄 First few lines:\\n{content[:200]}...")\r
\r
    os.remove(filename)\r
\r
def write_with_generator_chunked():\r
    """Chunked writing to avoid huge list."""\r
    filename = "chunked_output.txt"\r
\r
    def chunked_lines(n, chunk_size=100):\r
        for i in range(0, n, chunk_size):\r
            chunk = [f"Line {j:04d}\\n" for j in range(i, min(i+chunk_size, n))]\r
            yield chunk\r
\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        for chunk in chunked_lines(1000, 100):\r
            f.writelines(chunk)\r
\r
    print(f"✅ Chunked write: 1000 lines")\r
\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        print(f"File size: {len(f.read())} characters")\r
\r
    os.remove(filename)\r
\r
if __name__ == "__main__":\r
    write_with_generator()\r
    write_with_generator_chunked()\r
    print("🧹 Cleaned up.")`,f=`# writelines_vs_write.py\r
# Side-by-side comparison of write() and writelines()\r
\r
import os\r
\r
def compare_methods():\r
    """Show the difference in code and output."""\r
    data = ["Apple", "Banana", "Cherry"]\r
\r
    print("🔹 Using write() in a loop:")\r
    with open("write_loop.txt", 'w', encoding='utf-8') as f:\r
        for item in data:\r
            f.write(item + "\\n")\r
    with open("write_loop.txt", 'r', encoding='utf-8') as f:\r
        print(f.read())\r
    os.remove("write_loop.txt")\r
\r
    print("\\n🔹 Using writelines() with list comprehension:")\r
    with open("writelines_comp.txt", 'w', encoding='utf-8') as f:\r
        f.writelines([item + "\\n" for item in data])\r
    with open("writelines_comp.txt", 'r', encoding='utf-8') as f:\r
        print(f.read())\r
    os.remove("writelines_comp.txt")\r
\r
    print("\\n🔹 Using writelines() with pre-formatted lines:")\r
    lines = [f"{item}\\n" for item in data]\r
    with open("writelines_pre.txt", 'w', encoding='utf-8') as f:\r
        f.writelines(lines)\r
    with open("writelines_pre.txt", 'r', encoding='utf-8') as f:\r
        print(f.read())\r
    os.remove("writelines_pre.txt")\r
\r
    print("🔹 Using join() and write() for a single string:")\r
    with open("join_write.txt", 'w', encoding='utf-8') as f:\r
        f.write("\\n".join(data) + "\\n")\r
    with open("join_write.txt", 'r', encoding='utf-8') as f:\r
        print(f.read())\r
    os.remove("join_write.txt")\r
\r
if __name__ == "__main__":\r
    compare_methods()\r
    print("🧹 Cleaned up.")`,p=[{question:"What does writelines() do?",shortAnswer:"Writes a list (or iterable) of strings to a file.",explanation:"It writes each string in the iterable to the file, without adding newlines.",hint:"It's the counterpart to readlines().",level:"basic",codeExample:"f.writelines(['line1\\n', 'line2\\n'])"},{question:"Does writelines() add newlines automatically?",shortAnswer:"No, you must include newlines in the strings yourself.",explanation:"Unlike what the name might suggest, it does not add line breaks.",hint:"Always include '\\n'.",level:"basic",codeExample:null},{question:"What does writelines() return?",shortAnswer:"None.",explanation:"It doesn't return a count of written characters like write() does.",hint:"It returns None.",level:"intermediate",codeExample:"result = f.writelines(lines)  # result is None"},{question:"What types of input does writelines() accept?",shortAnswer:"Any iterable of strings (list, tuple, generator, etc.).",explanation:"It iterates over the input and writes each string.",hint:"It works with any iterable.",level:"intermediate",codeExample:"f.writelines(generator_function())"},{question:"Is writelines() more efficient than multiple write() calls?",shortAnswer:"Yes, for many lines it reduces method call overhead.",explanation:"One call to writelines() is faster than many write() calls.",hint:"Fewer Python-level calls.",level:"intermediate",codeExample:null},{question:"What happens if you pass a single string to writelines()?",shortAnswer:"It iterates over the characters and writes each character individually.",explanation:"A string is an iterable of characters, so it writes each character.",hint:"Be careful! It's not what you want.",level:"advanced",codeExample:"f.writelines('hello')  # writes h, e, l, l, o"},{question:"How do you write a list of strings as separate lines?",shortAnswer:"Ensure each string ends with '\\n', or use `\\n`.join() before writing.",explanation:"You need to add newlines manually.",hint:"Use list comprehension to add newlines.",level:"basic",codeExample:"lines = [f'{item}\\n' for item in data]"},{question:"What is the difference between writelines() and write()?",shortAnswer:"write() writes a single string; writelines() writes a list of strings.",explanation:"write() returns the number of characters; writelines() returns None.",hint:"One writes one, the other writes many.",level:"basic",codeExample:null},{question:"Can you use writelines() with a generator?",shortAnswer:"Yes, generators are iterable and work perfectly.",explanation:"This is memory‑efficient for large datasets.",hint:"Use generators for large files.",level:"intermediate",codeExample:"f.writelines(line for line in generate_data())"},{question:"Does writelines() flush the buffer after each line?",shortAnswer:"No, it buffers writes; use flush() or close() to force writing.",explanation:"Like write(), it uses buffered I/O.",hint:"Close the file or flush.",level:"intermediate",codeExample:"f.flush()"},{question:"What happens if you call writelines() on a closed file?",shortAnswer:"It raises a ValueError.",explanation:"Cannot write to a closed file.",hint:"Always use `with`.",level:"basic",codeExample:"f.close(); f.writelines(['a'])  # ValueError"},{question:"How do you write a list of integers with writelines()?",shortAnswer:"Convert them to strings first, using map() or list comprehension.",explanation:"writelines() only accepts strings.",hint:"Use map(str, list).",level:"intermediate",codeExample:"f.writelines([str(i) + '\\n' for i in [1,2,3]])"},{question:"Is there a limit to the number of lines writelines() can handle?",shortAnswer:"Limited by memory for the list, or disk space; no hard limit.",explanation:"If you use a generator, memory is not an issue.",hint:"Use a generator for huge datasets.",level:"advanced",codeExample:null},{question:"Can writelines() be used in binary mode?",shortAnswer:"Yes, but you must write bytes, not strings.",explanation:"In binary mode, it expects an iterable of bytes objects.",hint:"Use b'' for bytes.",level:"intermediate",codeExample:"f.writelines([b'line1\\n', b'line2\\n'])"},{question:"What is the difference between `f.writelines(lines)` and `f.write(''.join(lines))`?",shortAnswer:"Both write all lines, but writelines() is more efficient.",explanation:"writelines() writes directly; join() creates a new string in memory.",hint:"writelines() saves memory.",level:"advanced",codeExample:null},{question:"Why does writelines() not add newlines automatically?",shortAnswer:"For flexibility and performance; the caller controls the formatting.",explanation:"It allows writing data that may not be line‑oriented.",hint:"Flexibility.",level:"advanced",codeExample:null},{question:"How do you add a trailing newline to a list of lines?",shortAnswer:"Use list comprehension: `[line + '\\n' for line in lines]`.",explanation:"Or ensure each line already ends with '\\n'.",hint:"Add newline to each.",level:"intermediate",codeExample:"f.writelines([f'{line}\\n' for line in lines])"},{question:"What is the performance difference between writelines and a loop?",shortAnswer:"writelines is faster for many lines due to fewer method calls.",explanation:"The loop makes multiple Python→C transitions; writelines does one.",hint:"Use writelines for large datasets.",level:"intermediate",codeExample:null},{question:"Can writelines() accept a list of strings that are not all strings?",shortAnswer:"No, it raises TypeError if any element is not a string.",explanation:"All elements must be strings (or bytes in binary mode).",hint:"Ensure all elements are strings.",level:"intermediate",codeExample:"f.writelines(['a', 2, 'c'])  # TypeError"},{question:"How do you write a CSV file using writelines()?",shortAnswer:"Format each row as a comma‑separated string with newline, then write.",explanation:"Example: `f.writelines([f'{a},{b}\\n' for a,b in data])`.",hint:"Format each row.",level:"intermediate",codeExample:null},{question:"Is it safe to call writelines() with a very large list?",shortAnswer:"It may use a lot of memory. Use a generator instead.",explanation:"A large list of strings can be memory‑intensive.",hint:"Use a generator for large data.",level:"advanced",codeExample:null},{question:"Does writelines() work with file-like objects other than open()?",shortAnswer:"Yes, any object that supports `write()` in a buffered manner.",explanation:"E.g., `io.StringIO`, `sys.stdout` (if writing to console).",hint:"Works with any file-like object.",level:"advanced",codeExample:"import sys; sys.stdout.writelines(['a\\n', 'b\\n'])"},{question:"What is the difference between writelines() and print(file=) with a loop?",shortAnswer:"writelines() is lower-level and doesn't add newlines; print() adds newline by default.",explanation:"print() with `file=` is more flexible but slower.",hint:"print() adds newlines.",level:"intermediate",codeExample:null},{question:"How do you write a list of lines with a trailing newline at the end of the file?",shortAnswer:"Ensure the last string ends with '\\n'. Or add it after writelines().",explanation:"Add `f.write('\\n')` after writelines if needed.",hint:"Add a final newline.",level:"intermediate",codeExample:"f.writelines(lines); f.write('\\n')"},{question:"What happens if writelines() is interrupted by an exception?",shortAnswer:"Data that was already written remains, but the rest is not written.",explanation:"Use `with` to ensure file is closed, but partial writes may occur.",hint:"Handle exceptions.",level:"advanced",codeExample:null},{question:"Can you use writelines() to append to a file?",shortAnswer:"Yes, open the file in 'a' mode and use writelines().",explanation:"The lines are appended to the end.",hint:"Use 'a' mode.",level:"basic",codeExample:"with open('log.txt', 'a') as f: f.writelines(['new line\\n'])"},{question:"How do you write a list of strings without newlines but with a separator?",shortAnswer:"Use `f.write(separator.join(lines))` instead.",explanation:"writelines() doesn't insert separators.",hint:"Use join() for separators.",level:"intermediate",codeExample:"f.write('\\t'.join(lines))"},{question:"Is there a way to get the count of written lines with writelines()?",shortAnswer:"No, you can count the lines beforehand.",explanation:"writelines() doesn't return anything.",hint:"Count your iterable length.",level:"intermediate",codeExample:"count = len(lines); f.writelines(lines)"},{question:"What is the purpose of the name writelines() if it doesn't add newlines?",shortAnswer:"It's designed to write multiple strings, not necessarily lines.",explanation:"The name is historical; it writes each element of the iterable.",hint:"It's for bulk writing.",level:"advanced",codeExample:null},{question:"How does writelines() handle a generator that raises an exception?",shortAnswer:"The exception propagates, and the file remains open unless using `with`.",explanation:"Make sure to handle exceptions.",hint:"Use try-except around the with block.",level:"advanced",codeExample:null},{question:"Which is better for writing a list of strings: writelines() or using write() with join()?",shortAnswer:"writelines() is more memory‑efficient; join() creates a single large string.",explanation:"For large lists, writelines() is preferred.",hint:"Use writelines() for large data.",level:"intermediate",codeExample:null}],v=()=>{const s=l.useRef([]);l.useEffect(()=>{const t=new IntersectionObserver(r=>{r.forEach(a=>{a.isIntersecting&&a.target.classList.add("section-visible")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});return s.current.forEach(r=>{r&&t.observe(r)}),()=>t.disconnect()},[]);const n=t=>{t&&!s.current.includes(t)&&s.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 p-6 md:p-8 lg:p-12 font-sans leading-relaxed",children:[e.jsxs("header",{ref:n,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-gray-200 dark:border-gray-800",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-sm font-mono bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full",children:"Topic 19"}),e.jsx("span",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:"Core"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight",children:"Writing Multiple Lines using `writelines()`"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 mt-3 max-w-3xl",children:"Efficiently writing many lines at once: the `writelines()` method and its proper usage."}),e.jsxs("div",{className:"flex flex-wrap gap-3 mt-4",children:[e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"📝 writelines()"}),e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"📋 List of Lines"}),e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"⚡ Performance"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📝"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"The `writelines()` Method"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["The ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"writelines()"})," method writes a ",e.jsx("strong",{children:"list"})," (or any iterable) of strings to a file. It's the counterpart to ",e.jsx("code",{children:"readlines()"}),"."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Prototype:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"file.writelines(lines)"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Return type:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"None"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Purpose:"})," Write multiple strings to the file in a single call, which can be more efficient than multiple",e.jsx("code",{children:"write()"})," calls."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Parameters:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"lines"})," — an iterable of strings (list, tuple, generator, etc.)."]})]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-4 rounded-r-xl",children:[e.jsx("p",{className:"text-blue-700 dark:text-blue-300 font-medium",children:"💡 Key Insight:"}),e.jsxs("p",{className:"text-blue-600 dark:text-blue-400 text-sm",children:[e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"writelines()"})," does",e.jsx("strong",{children:"not"})," add newlines automatically. You must include",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"\\n"})," in each string if you want each line to be on its own line."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-100",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📝"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Syntax and Behavior"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsx("p",{children:e.jsx("strong",{children:"Basic usage:"})}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm",children:e.jsxs("code",{className:"text-gray-800 dark:text-gray-200",children:['lines = ["Line 1\\\\n", "Line 2\\\\n", "Line 3\\\\n"]',e.jsx("br",{}),"with open('output.txt', 'w', encoding='utf-8') as f:",e.jsx("br",{}),"f.writelines(lines)"]})}),e.jsx("p",{children:e.jsx("strong",{children:"Key behaviors:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"No automatic newline:"})," You must include",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"\\n"})," in each string; otherwise, all lines will be concatenated."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Accepts any iterable:"})," Not just lists — tuples, generators, or any iterable of strings."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Return value:"})," Returns ",e.jsx("code",{children:"None"}),". Unlike",e.jsx("code",{children:"write()"}),", it doesn't return the number of characters."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Buffering:"})," The data is buffered; call",e.jsx("code",{children:"flush()"})," or close the file to ensure writing."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-200",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"⚖️"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"`writelines()` vs `write()`"})]}),e.jsx("div",{className:"overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-800",children:[e.jsx("thead",{className:"bg-gray-100 dark:bg-gray-800/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Aspect"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"write()"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"writelines()"})]})}),e.jsxs("tbody",{className:"bg-white dark:bg-gray-900/50 divide-y divide-gray-200 dark:divide-gray-800 text-gray-700 dark:text-gray-300",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-medium",children:"Input"}),e.jsx("td",{className:"px-6 py-4",children:"Single string"}),e.jsx("td",{className:"px-6 py-4",children:"Iterable of strings"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-medium",children:"Return value"}),e.jsx("td",{className:"px-6 py-4",children:"int (chars written)"}),e.jsx("td",{className:"px-6 py-4",children:"None"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-medium",children:"Newline added"}),e.jsx("td",{className:"px-6 py-4",children:"No"}),e.jsx("td",{className:"px-6 py-4",children:"No"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-medium",children:"Efficiency"}),e.jsx("td",{className:"px-6 py-4",children:"Slower for many lines"}),e.jsx("td",{className:"px-6 py-4",children:"Faster for many lines"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-medium",children:"Use case"}),e.jsx("td",{className:"px-6 py-4",children:"Single or few writes"}),e.jsx("td",{className:"px-6 py-4",children:"Many lines, batch writes"})]})]})]})}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-2 text-center",children:"Use `writelines()` when you already have a list of lines; use `write()` for single strings."})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"⚡"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Performance Benefits"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:[e.jsx("code",{children:"writelines()"})," can be significantly faster when writing many lines because it reduces the number of Python method calls and allows the underlying C implementation to handle the data more efficiently."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Fewer calls:"})," One ",e.jsx("code",{children:"writelines()"})," call replaces many ",e.jsx("code",{children:"write()"})," calls."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Bulk I/O:"})," The data is written in a single (or fewer) system calls."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Buffer efficiency:"})," The buffer is filled more efficiently with larger chunks."]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-4 rounded-r-xl",children:[e.jsx("p",{className:"text-green-700 dark:text-green-300 font-medium",children:"💡 Pro Tip:"}),e.jsxs("p",{className:"text-green-600 dark:text-green-400 text-sm",children:["For writing thousands of lines, ",e.jsx("code",{children:"writelines()"})," is the clear winner. For a few lines, the difference is negligible."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🔄"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Using `writelines()` with Generators"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:[e.jsx("code",{children:"writelines()"})," accepts any ",e.jsx("strong",{children:"iterable"}),", including generators. This is memory‑efficient for very large datasets because lines are generated on the fly, not stored in a list."]}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm",children:e.jsxs("code",{className:"text-gray-800 dark:text-gray-200",children:["def generate_lines(n):",e.jsx("br",{}),"for i in range(n):",e.jsx("br",{}),'yield f"Line ',"{i}",'\\\\n"',e.jsx("br",{}),e.jsx("br",{}),"with open('output.txt', 'w', encoding='utf-8') as f:",e.jsx("br",{}),"f.writelines(generate_lines(1000000))"]})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Memory efficient:"})," No large list is created."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Streaming:"})," Lines are generated and written incrementally."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Scalable:"})," Works for files of any size."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🌍"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Real-World Scenarios"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"bg-blue-50 dark:bg-blue-950/30 rounded-xl p-6 border border-blue-200 dark:border-blue-800/50 transition-all duration-300 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"🏫"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Exporting Marksheet"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:["A school in Barrackpore exports student marks to a CSV file. The data is stored as a list of strings, each representing a row. Using ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"writelines()"}),", the school writes hundreds of rows efficiently in one call."]})]})]})}),e.jsx("div",{className:"bg-purple-50 dark:bg-purple-950/30 rounded-xl p-6 border border-purple-200 dark:border-purple-800/50 transition-all duration-300 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Generating Report Files"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:["A data analyst in Shyamnagar generates a report containing thousands of lines. The report lines are built in a list, then written to a file using ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"writelines()"}),"for better performance."]})]})]})}),e.jsx("div",{className:"bg-green-50 dark:bg-green-950/30 rounded-xl p-6 border border-green-200 dark:border-green-800/50 transition-all duration-300 hover:shadow-lg hover:border-green-300 dark:hover:border-green-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"📱"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Log File Rotation"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:["A mobile app in Naihati rotates logs by writing all buffered log entries to a new file using ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"writelines()"}),". This ensures minimal disruption and fast flushing of the buffer."]})]})]})})]})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🐍"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Python in Action"})]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 text-lg mb-6",children:["The following examples demonstrate the ",e.jsx("code",{children:"writelines()"})," method."]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(i,{fileModule:c,title:"Basic writelines() Usage",highlightLines:[]}),e.jsx(i,{fileModule:h,title:"The Importance of Newlines",highlightLines:[]}),e.jsx(i,{fileModule:x,title:"Performance Comparison",highlightLines:[]}),e.jsx(i,{fileModule:m,title:"Using Generators (Memory Efficient)",highlightLines:[]}),e.jsx(i,{fileModule:f,title:"writelines() vs write() Side by Side",highlightLines:[]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"💡"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Tips & Tricks"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{title:"Always include newlines",desc:"`writelines()` does not add them; use `\\n` in each string."},{title:"Use list comprehension to add newlines",desc:"`lines = [f'{line}\\n' for line in data]`"},{title:"Use generators for large datasets",desc:"Avoid storing all lines in memory; yield them."},{title:"Combine with `with` for safe writing",desc:"Always use `with open() as f:` to ensure flushing."},{title:"Benchmark for performance",desc:"For small lists, the difference is minimal."},{title:"Use `join()` for a single string",desc:"If you have a list and want a single string, use `'\\n'.join(lines)`."}].map((t,r)=>e.jsxs("div",{className:"bg-amber-50 dark:bg-amber-950/20 rounded-xl p-5 border border-amber-200 dark:border-amber-800/50 transition-all duration-300 hover:shadow-lg hover:border-amber-300 dark:hover:border-amber-600 hover:-translate-y-1",children:[e.jsxs("h4",{className:"font-semibold text-gray-900 dark:text-white flex items-start gap-2",children:[e.jsx("span",{className:"text-amber-500",children:"✦"})," ",t.title]}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 mt-1",children:t.desc})]},r))})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Common Mistakes"})]}),e.jsx("div",{className:"space-y-3",children:[{mistake:"Forgetting newlines (all lines concatenate)",fix:"Ensure each string ends with `\\n`."},{mistake:"Passing a single string (not an iterable)",fix:"Pass a list or tuple of strings."},{mistake:"Using `writelines()` with a generator that's exhausted",fix:"Generators can only be iterated once; recreate if needed."},{mistake:"Not closing the file (or using `with`)",fix:"Always use `with` to ensure flushing."},{mistake:"Assuming `writelines()` returns the count",fix:"It returns `None`; check the file size separately."}].map((t,r)=>e.jsx("div",{className:"bg-red-50 dark:bg-red-950/20 rounded-xl p-5 border border-red-200 dark:border-red-800/50 transition-all duration-300 hover:shadow-lg hover:border-red-300 dark:hover:border-red-600",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-red-500 text-lg",children:"✗"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-gray-800 dark:text-gray-200 font-medium",children:t.mistake}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:["✓ ",t.fix]})]})]})},r))})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Best Practices"})]}),e.jsx("div",{className:"bg-emerald-50 dark:bg-emerald-950/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/50 transition-all duration-300 hover:shadow-lg hover:border-emerald-300 dark:hover:border-emerald-600",children:e.jsxs("ul",{className:"space-y-3 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Use `writelines()` when you have a list of strings:"})," ","It's more efficient than multiple `write()` calls."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Always include newlines in each string:"})," ","`writelines()` does not add them automatically."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Use generators for memory efficiency:"})," ","Generate lines on the fly for huge files."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Prefer `write()` for single lines:"})," ","It's simpler and returns a count."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Always use `with` for automatic closure:"})," ","Ensures data is flushed even on exceptions."]})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📋"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Mini Checklist"})]}),e.jsxs("div",{className:"bg-indigo-50 dark:bg-indigo-950/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800/50 transition-all duration-300 hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-600",children:[e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"By the end of this topic, you should understand:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:["The `writelines()` method and its syntax","That `writelines()` does not add newlines automatically","The performance benefits over multiple `write()` calls","How to use `writelines()` with generators","The difference between `write()` and `writelines()`","Common pitfalls (missing newlines, return value)","Best practices for using `writelines()`"].map((t,r)=>e.jsxs("div",{className:"flex items-center gap-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900/50 px-4 py-2 rounded-lg",children:[e.jsx("span",{className:"text-indigo-400",children:"☐"}),e.jsx("span",{className:"text-sm",children:t})]},r))})]})]}),e.jsxs("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🤔"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Think About…"})]}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-950/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800/50 transition-all duration-300 hover:shadow-lg hover:border-yellow-300 dark:hover:border-yellow-600",children:e.jsxs("div",{className:"space-y-4 text-gray-700 dark:text-gray-300",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Observe carefully:"})," ","What happens if you pass a list of strings without newlines to `writelines()`? Try it and see the result."]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Try changing this:"})," ","Write a program that uses `writelines()` with a generator that yields 1 million lines. How does the memory usage compare to using a list?"]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Think about:"})," ","Why does `writelines()` return `None` instead of a count like `write()`? When would you need the count?"]})]})]})})]}),e.jsx("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:e.jsx(o,{title:"writelines() – FAQs",questions:p})}),e.jsx("section",{ref:n,className:"section-hidden transition-all duration-700 ease-out delay-300",children:e.jsx(d,{note:"`writelines()` is often misunderstood because of its name. It doesn't add newlines, so students are surprised when all their lines are concatenated. Emphasize this with clear examples. Show the performance difference with large lists; this drives home the efficiency gains. Also, introduce generators as a memory‑efficient way to feed `writelines()`. The return value difference (`None` vs int) is a minor point but worth noting."})}),e.jsxs("footer",{className:"pt-8 mt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400",children:[e.jsx("p",{children:"Topic 19: Writing Multiple Lines using writelines() · Built with ❤️ for classroom learning"}),e.jsx("p",{className:"mt-1",children:"Next: Topic 20 — Appending Data to Files"})]})]}),e.jsx("style",{children:`
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
      `})]})};export{v as default};
