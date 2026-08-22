import{r as l,j as e}from"./index-YkKVfVEM.js";import{P as i}from"./PythonFileLoader-C1ONHCyt.js";import{F as o}from"./FAQTemplate-B_PeLoo7.js";import{T as d}from"./TeacherSukantaHui-nIRku_xY.js";import"./PythonCodeBlock-CfHfgecN.js";import"./prism-BIjtOw9A.js";import"./browser-zdk-CdZa.js";import"./clsx-B-dksMZM.js";import"./github-00a_zZrb.js";import"./createLucideIcon-Cim-rzMd.js";import"./git-branch-BC_-h9tN.js";const c=`# write_basic.py\r
# Demonstrates basic usage of write()\r
\r
import os\r
\r
def basic_write_example():\r
    """Write basic text to a file."""\r
    filename = "output.txt"\r
\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.write("Hello, Swadeep!\\n")\r
        f.write("Welcome to file writing.\\n")\r
        f.write("This is the third line.")\r
\r
    print(f"✅ File written: {filename}")\r
\r
    # Read and display the content\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        content = f.read()\r
    print(f"\\n📄 File content:\\n{content}")\r
\r
    # Clean up\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")\r
\r
def write_multiple_calls():\r
    """Show that multiple write() calls write sequentially."""\r
    filename = "sequential.txt"\r
\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.write("First part")\r
        f.write(" Second part")\r
        f.write(" Third part\\n")\r
        f.write("New line")\r
\r
    print("\\n📄 Sequential writes (without newlines):")\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        print(f.read())\r
\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")\r
\r
if __name__ == "__main__":\r
    basic_write_example()\r
    write_multiple_calls()`,h=`# write_multiple.py\r
# Demonstrates writing multiple lines\r
\r
import os\r
\r
def write_multiple_lines():\r
    """Write multiple lines using write() with newlines."""\r
    filename = "lines.txt"\r
\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.write("Line 1: Student Swadeep\\n")\r
        f.write("Line 2: Student Tuhina\\n")\r
        f.write("Line 3: Student Abhronila\\n")\r
        f.write("Line 4: Student Debangshu\\n")\r
\r
    print(f"✅ Wrote 4 lines to {filename}")\r
\r
    # Show the content\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        print("\\n📄 File content:")\r
        print(f.read())\r
\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")\r
\r
def write_with_loop():\r
    """Write lines in a loop."""\r
    filename = "loop_output.txt"\r
\r
    students = ["Swadeep", "Tuhina", "Abhronila", "Debangshu"]\r
\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        for i, name in enumerate(students, 1):\r
            f.write(f"Student {i}: {name}\\n")\r
\r
    print(f"✅ Wrote {len(students)} lines in loop")\r
\r
    # Show the content\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        print("\\n📄 File content:")\r
        print(f.read())\r
\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")\r
\r
if __name__ == "__main__":\r
    write_multiple_lines()\r
    write_with_loop()`,m=`# write_return_value.py\r
# Demonstrates the return value of write()\r
\r
import os\r
\r
def write_return_value_example():\r
    """Show the return value of write()."""\r
    filename = "return_demo.txt"\r
\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        chars1 = f.write("Hello, World!\\n")\r
        chars2 = f.write("This is a second line.\\n")\r
        chars3 = f.write("Third line.")\r
\r
    print(f"📊 Return values:")\r
    print(f"   Write 1: {chars1} characters")\r
    print(f"   Write 2: {chars2} characters")\r
    print(f"   Write 3: {chars3} characters")\r
\r
    # Check file size\r
    import os\r
    size = os.path.getsize(filename)\r
    print(f"   File size: {size} bytes")\r
\r
    # Read content\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        content = f.read()\r
    print(f"\\n📄 Content ({len(content)} characters):\\n{content}")\r
\r
    # Note: In text mode, characters != bytes due to encoding\r
    print(f"\\n💡 Note: {len(content)} characters != {size} bytes (UTF-8 encoding)")\r
\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")\r
\r
def verify_write_success():\r
    """Verify write by checking return value."""\r
    filename = "verify.txt"\r
\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        text = "Important data: 42"\r
        written = f.write(text)\r
        if written == len(text):\r
            print(f"✅ Write successful: {written} characters written")\r
        else:\r
            print(f"⚠️ Write incomplete: {written} of {len(text)} characters")\r
\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")\r
\r
if __name__ == "__main__":\r
    write_return_value_example()\r
    verify_write_success()`,x=`# write_append.py\r
# Compares writing ('w') vs appending ('a')\r
\r
import os\r
\r
def compare_write_append():\r
    """Show the difference between 'w' and 'a' modes."""\r
    filename = "compare.txt"\r
\r
    # Write mode - overwrites\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.write("First content in write mode.\\n")\r
    print("✅ 'w' mode: Created file with first content")\r
\r
    # Write again - overwrites\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.write("Second content - overwrote the first!\\n")\r
    print("✅ 'w' mode: Overwrote with second content")\r
\r
    print("\\n📄 After 'w' (overwrite):")\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        print(f.read())\r
\r
    # Append mode - adds to end\r
    with open(filename, 'a', encoding='utf-8') as f:\r
        f.write("Appended line 1\\n")\r
    print("✅ 'a' mode: Appended line 1")\r
\r
    with open(filename, 'a', encoding='utf-8') as f:\r
        f.write("Appended line 2\\n")\r
    print("✅ 'a' mode: Appended line 2")\r
\r
    print("\\n📄 After 'a' (append):")\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        print(f.read())\r
\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")\r
\r
def safe_append_logging():\r
    """Demonstrate safe appending for logs."""\r
    filename = "app.log"\r
\r
    # Simulate logging events\r
    import datetime\r
\r
    def log_event(message):\r
        timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")\r
        with open(filename, 'a', encoding='utf-8') as f:\r
            f.write(f"[{timestamp}] {message}\\n")\r
\r
    log_event("Application started")\r
    log_event("User Swadeep logged in")\r
    log_event("Data processed successfully")\r
\r
    print(f"✅ Log entries written to {filename}")\r
\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        print("\\n📄 Log file content:")\r
        print(f.read())\r
\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")\r
\r
if __name__ == "__main__":\r
    compare_write_append()\r
    safe_append_logging()`,p=`# write_errors.py\r
# Demonstrates handling write errors\r
\r
import os\r
\r
def handle_write_errors():\r
    """Show how to handle common write errors."""\r
    filename = "error_demo.txt"\r
\r
    # PermissionError (simulate by trying to write to a protected location)\r
    try:\r
        with open("/root/forbidden.txt", 'w', encoding='utf-8') as f:\r
            f.write("This should fail")\r
    except PermissionError:\r
        print("❌ PermissionError: Cannot write to protected directory")\r
    except Exception as e:\r
        print(f"❌ Other error: {e}")\r
\r
    # Writing to a file with insufficient space (simulate)\r
    try:\r
        with open(filename, 'w', encoding='utf-8') as f:\r
            # Try to write a huge string (may raise OSError on full disk)\r
            f.write("x" * 1000000000)\r
    except OSError as e:\r
        print(f"❌ OSError: {e}")\r
    except Exception as e:\r
        print(f"❌ Other error: {e}")\r
\r
    # Type error: writing non-string\r
    try:\r
        with open(filename, 'w', encoding='utf-8') as f:\r
            f.write(42)  # TypeError\r
    except TypeError as e:\r
        print(f"❌ TypeError: {e}")\r
\r
    # Writing to a closed file\r
    try:\r
        f = open(filename, 'w', encoding='utf-8')\r
        f.close()\r
        f.write("This will fail")\r
    except ValueError as e:\r
        print(f"❌ ValueError: {e}")\r
\r
    if os.path.exists(filename):\r
        os.remove(filename)\r
    print("🧹 Cleaned up.")\r
\r
def safe_write_with_retry():\r
    """Demonstrate safe writing with error handling."""\r
    filename = "safe_write.txt"\r
    data = "Important data to save"\r
\r
    try:\r
        with open(filename, 'w', encoding='utf-8') as f:\r
            f.write(data)\r
        print(f"✅ Successfully wrote data to {filename}")\r
    except PermissionError:\r
        print("❌ Permission denied. Check file permissions.")\r
    except OSError as e:\r
        print(f"❌ OS error: {e}")\r
    except Exception as e:\r
        print(f"❌ Unexpected error: {e}")\r
    else:\r
        # Only runs if no exception occurred\r
        print("   Data was written successfully!")\r
\r
    if os.path.exists(filename):\r
        os.remove(filename)\r
    print("🧹 Cleaned up.")\r
\r
if __name__ == "__main__":\r
    handle_write_errors()\r
    safe_write_with_retry()`,f=`# write_formatting.py\r
# Demonstrates formatting output with write()\r
\r
import os\r
\r
def format_with_fstrings():\r
    """Write formatted data using f-strings."""\r
    filename = "formatted.txt"\r
\r
    students = [\r
        {"name": "Swadeep", "class": 10, "score": 95},\r
        {"name": "Tuhina", "class": 9, "score": 88},\r
        {"name": "Abhronila", "class": 11, "score": 92},\r
        {"name": "Debangshu", "class": 10, "score": 78},\r
    ]\r
\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        # Write header\r
        f.write(f"{'Name':<15} {'Class':<8} {'Score':<6}\\n")\r
        f.write("-" * 30 + "\\n")\r
\r
        # Write each student\r
        for student in students:\r
            f.write(f"{student['name']:<15} {student['class']:<8} {student['score']:<6}\\n")\r
\r
    print(f"✅ Formatted data written to {filename}")\r
\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        print("\\n📄 Formatted output:")\r
        print(f.read())\r
\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")\r
\r
def format_with_join():\r
    """Write using join() for efficiency."""\r
    filename = "join_output.txt"\r
\r
    lines = [\r
        "Header: Student Records",\r
        "-----------------------",\r
        "1. Swadeep - Class 10",\r
        "2. Tuhina - Class 9",\r
        "3. Abhronila - Class 11",\r
        "4. Debangshu - Class 10",\r
    ]\r
\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.write("\\n".join(lines))\r
\r
    print(f"✅ Wrote {len(lines)} lines using join()")\r
\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        print("\\n📄 Content:")\r
        print(f.read())\r
\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")\r
\r
def format_with_template():\r
    """Write using a template string."""\r
    filename = "template_output.txt"\r
\r
    template = "Name: {name}, Class: {class}, Score: {score}\\n"\r
    students = [\r
        {"name": "Swadeep", "class": 10, "score": 95},\r
        {"name": "Tuhina", "class": 9, "score": 88},\r
    ]\r
\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        for student in students:\r
            f.write(template.format(**student))\r
\r
    print(f"✅ Written using template")\r
\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        print("\\n📄 Content:")\r
        print(f.read())\r
\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")\r
\r
if __name__ == "__main__":\r
    format_with_fstrings()\r
    format_with_join()\r
    format_with_template()`,g=[{question:"What does the write() method do?",shortAnswer:"Writes a string to a file at the current file position.",explanation:"It writes the string and returns the number of characters written.",hint:"It's the primary way to write text to files.",level:"basic",codeExample:"f.write('Hello, World!')"},{question:"Does write() automatically add a newline?",shortAnswer:"No, you must include '\\n' explicitly.",explanation:"write() writes exactly what you give it; no formatting is added.",hint:"Always include newlines manually.",level:"basic",codeExample:"f.write('Line 1\\nLine 2\\n')"},{question:"What does write() return?",shortAnswer:"The number of characters written.",explanation:"In text mode, it's characters; in binary mode, it's bytes.",hint:"It's an integer count.",level:"intermediate",codeExample:"chars_written = f.write('Hello')"},{question:"Can you write a number using write()?",shortAnswer:"No, write() expects a string. Convert numbers to strings first.",explanation:"Use `str(42)` or f-strings: `f.write(f'{42}')`.",hint:"Convert to string first.",level:"basic",codeExample:"f.write(str(42))"},{question:"What happens if you write to a file opened in 'r' mode?",shortAnswer:"It raises an error because 'r' is read-only.",explanation:"Use 'w', 'a', or 'r+' for writing.",hint:"Open in write mode.",level:"basic",codeExample:"f = open('f.txt', 'r'); f.write('text')  # OSError"},{question:"What is the difference between 'w' and 'a' modes for write()?",shortAnswer:"'w' truncates (overwrites); 'a' appends to the end.",explanation:"'w' destroys existing content; 'a' preserves it.",hint:"Write vs append.",level:"basic",codeExample:null},{question:"Does write() immediately write to disk?",shortAnswer:"Not necessarily; data is buffered. It's written on flush() or close().",explanation:"Python buffers writes for performance.",hint:"Use flush() or close() to ensure writing.",level:"intermediate",codeExample:"f.flush()"},{question:"How do you ensure data is written to disk immediately?",shortAnswer:"Call `flush()` after writing or use `with` which flushes on close.",explanation:"`flush()` forces the buffer to be written.",hint:"Use flush() for immediate writes.",level:"intermediate",codeExample:"f.write('data'); f.flush()"},{question:"What is the return type of write()?",shortAnswer:"int (integer).",explanation:"It returns the number of characters (or bytes) written.",hint:"It's an integer.",level:"basic",codeExample:"type(f.write('abc'))  # int"},{question:"Can you use write() with a file opened in binary mode?",shortAnswer:"Yes, but you must write bytes, not strings.",explanation:"Use `f.write(b'bytes')` in binary mode.",hint:"Convert strings with .encode().",level:"intermediate",codeExample:"f.write(b'Hello')"},{question:"What happens if write() fails?",shortAnswer:"It raises an exception (OSError, PermissionError, etc.).",explanation:"Common errors include disk full, permission denied, or read-only file.",hint:"Handle exceptions.",level:"intermediate",codeExample:null},{question:"How do you write multiple lines efficiently?",shortAnswer:"Use `write()` in a loop with `\\n`, or use `writelines()`.",explanation:"`writelines()` takes a list of strings and writes them.",hint:"Use writelines() for lists.",level:"intermediate",codeExample:"f.writelines(['line1\\n', 'line2\\n'])"},{question:"What is the difference between write() and print()?",shortAnswer:"write() writes to a file; print() writes to stdout (by default).",explanation:"`print()` adds a newline by default; `write()` does not.",hint:"print() is for console; write() is for files.",level:"basic",codeExample:null},{question:"Can you use print() to write to a file?",shortAnswer:"Yes, with `print('text', file=f)`.",explanation:"`print()` can take a `file` parameter to write to any file-like object.",hint:"Use `file=` parameter.",level:"intermediate",codeExample:"print('Hello', file=f)"},{question:"What happens if you write a string with Unicode characters?",shortAnswer:"It's written using the specified encoding (e.g., UTF-8).",explanation:"Make sure the file is opened with the correct encoding.",hint:"Use encoding='utf-8'.",level:"intermediate",codeExample:"open('f.txt', 'w', encoding='utf-8')"},{question:"How do you write a variable's value to a file?",shortAnswer:"Convert it to a string and write it: `f.write(str(variable))`.",explanation:"Use f-strings or format() for more complex output.",hint:"Convert to string first.",level:"basic",codeExample:"f.write(f'Value: {var}\\n')"},{question:"What is the advantage of using f-strings with write()?",shortAnswer:"They make formatting easy and readable.",explanation:"`f.write(f'Name: {name}, Score: {score}\\n')` is clear.",hint:"Readable and efficient.",level:"intermediate",codeExample:"f.write(f'{name}: {score}\\n')"},{question:"Can you write None to a file?",shortAnswer:"No, `None` is not a string; convert with `str(None)`.",explanation:"`write()` only accepts strings.",hint:"Convert None to string.",level:"basic",codeExample:"f.write(str(None))"},{question:"What is the maximum size of data you can write with write()?",shortAnswer:"Limited by memory and disk space; no hard limit in Python.",explanation:"Very large writes may cause memory issues; use chunks.",hint:"Write in chunks for large data.",level:"advanced",codeExample:null},{question:"How do you write data to a temporary file?",shortAnswer:"Use the `tempfile` module, which provides temporary file objects.",explanation:"Temporary files are automatically cleaned up.",hint:"Use tempfile module.",level:"advanced",codeExample:"import tempfile; with tempfile.TemporaryFile('w') as f: f.write('data')"},{question:"What is the difference between write() and writelines()?",shortAnswer:"write() writes a single string; writelines() writes a list of strings.",explanation:"`writelines()` does NOT add newlines automatically.",hint:"One writes one string, the other writes a list.",level:"intermediate",codeExample:null},{question:"How do you check if a write operation succeeded?",shortAnswer:"Check the return value (number of characters written).",explanation:"If it's less than expected, something went wrong.",hint:"Compare return value with string length.",level:"intermediate",codeExample:"if f.write(text) != len(text): print('Write error')"},{question:"Can write() be used with StringIO?",shortAnswer:"Yes, StringIO is a file-like object that supports write().",explanation:"Useful for building strings in memory.",hint:"StringIO works like a file.",level:"advanced",codeExample:"import io; f = io.StringIO(); f.write('text')"},{question:"What is the encoding parameter in open() for write()?",shortAnswer:"It specifies the character encoding used when writing.",explanation:"Always use `encoding='utf-8'` for modern applications.",hint:"Specify encoding to avoid platform issues.",level:"intermediate",codeExample:"open('f.txt', 'w', encoding='utf-8')"},{question:"What happens if you write to a file with insufficient disk space?",shortAnswer:"It raises an OSError (usually errno 28 'No space left on device').",explanation:"The write operation fails with an appropriate exception.",hint:"Catch OSError.",level:"advanced",codeExample:null},{question:"How do you append a newline to a string before writing?",shortAnswer:"Use `+ '\\n'` or `f'{line}\\n'`.",explanation:"`f.write(line + '\\n')` adds a newline.",hint:"Add newline explicitly.",level:"basic",codeExample:"f.write(line + '\\n')"},{question:"What is the difference between writing in text vs binary mode?",shortAnswer:"Text mode writes strings with encoding; binary mode writes bytes.",explanation:"In binary mode, you must write bytes objects.",hint:"Text = strings; binary = bytes.",level:"intermediate",codeExample:null},{question:"How do you write a list of integers to a file?",shortAnswer:"Convert each integer to a string, join with newlines, and write.",explanation:"`f.write('\\n'.join(map(str, numbers)))`",hint:"Use map() or list comprehension.",level:"intermediate",codeExample:"f.write('\\n'.join(map(str, [1,2,3])))"},{question:"What is the purpose of the `errors` parameter in open() for writing?",shortAnswer:"It handles encoding errors when writing.",explanation:"Useful for handling characters that can't be encoded.",hint:"Use 'ignore' or 'replace' for error handling.",level:"advanced",codeExample:"open('f.txt', 'w', errors='replace')"},{question:"Can you write to a file that is open in another program?",shortAnswer:"It depends on the OS and the program. Windows often locks files.",explanation:"Use file sharing modes or ensure exclusive access.",hint:"Be careful with concurrent access.",level:"advanced",codeExample:null}],W=()=>{const s=l.useRef([]);l.useEffect(()=>{const r=new IntersectionObserver(n=>{n.forEach(a=>{a.isIntersecting&&a.target.classList.add("section-visible")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});return s.current.forEach(n=>{n&&r.observe(n)}),()=>r.disconnect()},[]);const t=r=>{r&&!s.current.includes(r)&&s.current.push(r)};return e.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 p-6 md:p-8 lg:p-12 font-sans leading-relaxed",children:[e.jsxs("header",{ref:t,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-gray-200 dark:border-gray-800",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-sm font-mono bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full",children:"Topic 18"}),e.jsx("span",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:"Core"})]}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight",children:"Writing Files using `write()`"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 mt-3 max-w-3xl",children:"The fundamental way to write text to files: understanding the `write()` method and its behavior."}),e.jsxs("div",{className:"flex flex-wrap gap-3 mt-4",children:[e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"✍️ write()"}),e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"📝 String"}),e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"🔢 Return Value"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"✍️"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"The `write()` Method"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["The ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"write()"})," method is the primary way to write ",e.jsx("strong",{children:"text data"})," to a file. It writes a string to the file at the current file pointer position."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Prototype:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"file.write(string)"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Return type:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"int"})," — the number of characters written."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Purpose:"})," Write a string to the file."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Parameters:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"string"})," — the text to write (must be a string in text mode)."]})]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-4 rounded-r-xl",children:[e.jsx("p",{className:"text-blue-700 dark:text-blue-300 font-medium",children:"💡 Key Insight:"}),e.jsxs("p",{className:"text-blue-600 dark:text-blue-400 text-sm",children:[e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"write()"})," does",e.jsx("strong",{children:"not"})," automatically add a newline. You must include",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"\\n"})," explicitly if you want to end the line."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-100",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📝"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Syntax and Behavior"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsx("p",{children:e.jsx("strong",{children:"Basic usage:"})}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm",children:e.jsxs("code",{className:"text-gray-800 dark:text-gray-200",children:["with open('output.txt', 'w', encoding='utf-8') as f:",e.jsx("br",{}),'f.write("Hello, World!")',e.jsx("br",{}),'f.write("This is a second line.")  # No newline!']})}),e.jsx("p",{children:e.jsx("strong",{children:"Key behaviors:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"No automatic newline:"})," You must include",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"\\n"})," in the string to create line breaks."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Return value:"})," Returns the number of characters written (not bytes)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Overwrites:"})," In ",e.jsx("code",{children:"'w'"})," mode, the file is truncated (emptied) before writing."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Append:"})," In ",e.jsx("code",{children:"'a'"})," mode, writes are added to the end of the file."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Buffer:"})," Data may not be written to disk immediately; use ",e.jsx("code",{children:"flush()"})," or ",e.jsx("code",{children:"close()"}),"to ensure it's written."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-200",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🔢"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Return Value (Number of Characters)"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["The ",e.jsx("code",{children:"write()"})," method returns the number of characters written. This can be useful for verification."]}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm",children:e.jsxs("code",{className:"text-gray-800 dark:text-gray-200",children:["with open('output.txt', 'w', encoding='utf-8') as f:",e.jsx("br",{}),'chars_written = f.write("Hello, Swadeep!\\n")',e.jsx("br",{}),'print(f"Wrote ',"{chars_written}",' characters")  # 16 (includes newline)']})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Text mode:"})," Returns the number of",e.jsx("strong",{children:"characters"})," (not bytes)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Binary mode:"})," Returns the number of",e.jsx("strong",{children:"bytes"})," written."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use case:"})," Useful for confirming how much data was written, especially when the write may be truncated due to errors."]})]}),e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 p-4 rounded-r-xl",children:[e.jsx("p",{className:"text-yellow-700 dark:text-yellow-300 font-medium",children:"💡 Note:"}),e.jsxs("p",{className:"text-yellow-600 dark:text-yellow-400 text-sm",children:["In practice, you rarely need the return value of ",e.jsx("code",{children:"write()"}),"unless you're debugging or working with low‑level I/O."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"↩️"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Writing with Newlines"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["Since ",e.jsx("code",{children:"write()"})," doesn't add newlines automatically, you need to include them explicitly."]}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm",children:e.jsxs("code",{className:"text-gray-800 dark:text-gray-200",children:["with open('lines.txt', 'w', encoding='utf-8') as f:",e.jsx("br",{}),'f.write("Line 1\\n")',e.jsx("br",{}),'f.write("Line 2\\n")',e.jsx("br",{}),'f.write("Line 3")  # No newline at the end']})}),e.jsx("p",{children:e.jsx("strong",{children:"Common patterns:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"\\n"})," inside the string."]}),e.jsxs("li",{children:["Use ",e.jsxs("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:['f"',"{line}",'\\n"']})," for formatted strings."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:'+ "\\n"'})," to append."]}),e.jsxs("li",{children:["For writing multiple lines, consider ",e.jsx("code",{children:"writelines()"}),"."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"⚖️"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Writing ('w') vs Appending ('a')"})]}),e.jsx("div",{className:"overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-800",children:[e.jsx("thead",{className:"bg-gray-100 dark:bg-gray-800/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Aspect"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"'w' (write)"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"'a' (append)"})]})}),e.jsxs("tbody",{className:"bg-white dark:bg-gray-900/50 divide-y divide-gray-200 dark:divide-gray-800 text-gray-700 dark:text-gray-300",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-medium",children:"Existing content"}),e.jsx("td",{className:"px-6 py-4",children:"❌ Destroyed (truncated)"}),e.jsx("td",{className:"px-6 py-4",children:"✅ Preserved"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-medium",children:"Write position"}),e.jsx("td",{className:"px-6 py-4",children:"Start of file"}),e.jsx("td",{className:"px-6 py-4",children:"End of file"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-medium",children:"Creates if missing?"}),e.jsx("td",{className:"px-6 py-4",children:"✅ Yes"}),e.jsx("td",{className:"px-6 py-4",children:"✅ Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-medium",children:"Use case"}),e.jsx("td",{className:"px-6 py-4",children:"Creating new files, overwriting"}),e.jsx("td",{className:"px-6 py-4",children:"Logs, adding records"})]})]})]})}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-2 text-center",children:"Choose 'w' when you want to start fresh; choose 'a' when you want to preserve history."})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🌍"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Real-World Scenarios"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"bg-blue-50 dark:bg-blue-950/30 rounded-xl p-6 border border-blue-200 dark:border-blue-800/50 transition-all duration-300 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"🏫"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Generating Student Report Cards"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:["A school in Barrackpore generates report cards for students. Using ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"write()"}),", they create a text file for each student with their marks and comments, formatting each line with newlines."]})]})]})}),e.jsx("div",{className:"bg-purple-50 dark:bg-purple-950/30 rounded-xl p-6 border border-purple-200 dark:border-purple-800/50 transition-all duration-300 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Exporting Data from a Database"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:["A data analyst in Shyamnagar exports query results to a text file. Using ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"write()"}),"in a loop, they format each row as a line with tab‑separated values."]})]})]})}),e.jsx("div",{className:"bg-green-50 dark:bg-green-950/30 rounded-xl p-6 border border-green-200 dark:border-green-800/50 transition-all duration-300 hover:shadow-lg hover:border-green-300 dark:hover:border-green-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"📱"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Logging Application Events"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:["A mobile app in Naihati writes debug logs to a file using",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"write()"})," with timestamped entries. The log file is appended to rather than overwritten."]})]})]})})]})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🐍"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Python in Action"})]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 text-lg mb-6",children:["The following examples demonstrate the ",e.jsx("code",{children:"write()"})," method."]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(i,{fileModule:c,title:"Basic write() Usage",highlightLines:[]}),e.jsx(i,{fileModule:h,title:"Writing Multiple Lines",highlightLines:[]}),e.jsx(i,{fileModule:m,title:"Understanding the Return Value",highlightLines:[]}),e.jsx(i,{fileModule:x,title:"Writing vs Appending",highlightLines:[]}),e.jsx(i,{fileModule:p,title:"Handling Write Errors",highlightLines:[]}),e.jsx(i,{fileModule:f,title:"Formatting Output with write()",highlightLines:[]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"💡"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Tips & Tricks"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{title:"Always include newlines explicitly",desc:"`write()` doesn't add them; use `\\n` for line breaks."},{title:"Use `with` for automatic closure",desc:"Ensures the file is closed and data is flushed."},{title:"Use f‑strings for formatted output",desc:"`f.write(f'Name: {name}, Score: {score}\\n')`"},{title:"Combine writes with `join()` for efficiency",desc:"`f.write('\\n'.join(lines))` writes all lines at once."},{title:"Check return value for debugging",desc:"The number of characters written can help detect truncation."},{title:"Use 'a' mode for logs",desc:"Appending preserves history; overwriting destroys it."}].map((r,n)=>e.jsxs("div",{className:"bg-amber-50 dark:bg-amber-950/20 rounded-xl p-5 border border-amber-200 dark:border-amber-800/50 transition-all duration-300 hover:shadow-lg hover:border-amber-300 dark:hover:border-amber-600 hover:-translate-y-1",children:[e.jsxs("h4",{className:"font-semibold text-gray-900 dark:text-white flex items-start gap-2",children:[e.jsx("span",{className:"text-amber-500",children:"✦"})," ",r.title]}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 mt-1",children:r.desc})]},n))})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Common Mistakes"})]}),e.jsx("div",{className:"space-y-3",children:[{mistake:"Forgetting to add newline characters",fix:"Always include `\\n` when you want a line break."},{mistake:"Using 'w' mode when you meant 'a' (losing data)",fix:"Double‑check the mode: 'w' overwrites, 'a' appends."},{mistake:"Not using `with`, causing resource leaks",fix:"Always use `with open()` for file operations."},{mistake:"Writing non‑string data (TypeError)",fix:"Convert non‑strings to strings with `str()` or f‑strings."},{mistake:"Assuming write() flushes to disk immediately",fix:"Call `flush()` or `close()` to ensure data is written."}].map((r,n)=>e.jsx("div",{className:"bg-red-50 dark:bg-red-950/20 rounded-xl p-5 border border-red-200 dark:border-red-800/50 transition-all duration-300 hover:shadow-lg hover:border-red-300 dark:hover:border-red-600",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-red-500 text-lg",children:"✗"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-gray-800 dark:text-gray-200 font-medium",children:r.mistake}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:["✓ ",r.fix]})]})]})},n))})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Best Practices"})]}),e.jsx("div",{className:"bg-emerald-50 dark:bg-emerald-950/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/50 transition-all duration-300 hover:shadow-lg hover:border-emerald-300 dark:hover:border-emerald-600",children:e.jsxs("ul",{className:"space-y-3 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Always use `with` for file writing:"})," ","It ensures the file is closed and data is flushed."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Use 'w' mode only when you want to overwrite:"})," ","For logs and append‑only data, use 'a' instead."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Always specify encoding for text files:"})," ","Use ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"encoding='utf-8'"}),"to avoid platform‑dependent issues."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Format output with f‑strings:"})," ","They make the code readable and the output consistent."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Handle write errors gracefully:"})," ","Catch ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"PermissionError"}),",",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"OSError"}),", etc."]})]})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📋"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Mini Checklist"})]}),e.jsxs("div",{className:"bg-indigo-50 dark:bg-indigo-950/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800/50 transition-all duration-300 hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-600",children:[e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"By the end of this topic, you should understand:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:["The `write()` method and its syntax","That `write()` does not add newlines automatically","The return value (number of characters written)","The difference between 'w' and 'a' modes","How to format output with `write()`","Common pitfalls and how to avoid them","Best practices for writing files"].map((r,n)=>e.jsxs("div",{className:"flex items-center gap-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900/50 px-4 py-2 rounded-lg",children:[e.jsx("span",{className:"text-indigo-400",children:"☐"}),e.jsx("span",{className:"text-sm",children:r})]},n))})]})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🤔"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Think About…"})]}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-950/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800/50 transition-all duration-300 hover:shadow-lg hover:border-yellow-300 dark:hover:border-yellow-600",children:e.jsxs("div",{className:"space-y-4 text-gray-700 dark:text-gray-300",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Observe carefully:"})," ","What happens to the file content if you call `write()` twice without a newline? Try it and see the result."]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Try changing this:"})," ","Write a program that writes 10 lines to a file using `write()`. Compare the output when you include `\\n` vs when you don't."]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Think about:"})," ","Why might `write()` return a number different from the length of the string you passed? What could cause this?"]})]})]})})]}),e.jsx("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:e.jsx(o,{title:"Writing with write() – FAQs",questions:g})}),e.jsx("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:e.jsx(d,{note:"The `write()` method is the foundation of file output. Students must internalize that it does NOT add newlines automatically. This is the #1 beginner mistake. Use the analogy of a typewriter: you have to press Enter yourself. Emphasize the difference between overwriting ('w') and appending ('a'). Also, demonstrate the return value — it's often overlooked but useful for verifying writes. Encourage them to always use `with` for automatic flushing and closure."})}),e.jsxs("footer",{className:"pt-8 mt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400",children:[e.jsx("p",{children:"Topic 18: Writing Files using write() · Built with ❤️ for classroom learning"}),e.jsx("p",{className:"mt-1",children:"Next: Topic 19 — Writing Multiple Lines using writelines()"})]})]}),e.jsx("style",{children:`
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
      `})]})};export{W as default};
