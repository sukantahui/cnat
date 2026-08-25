import{b as d,j as e}from"./vendor-react-core-Doz9nIC6.js";import{P as a}from"./PythonFileLoader-hCi5osN-.js";import{F as l}from"./FAQTemplate-CkSqDH4B.js";import{T as o}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const p=`# append_basic.py\r
# Demonstrates basic appending with 'a' mode\r
\r
import os\r
\r
def basic_append_example():\r
    """Show basic appending to a file."""\r
    filename = "append_demo.txt"\r
\r
    # First write some content\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.write("Initial content: Line 1\\n")\r
    print("✅ Initial file created")\r
\r
    # Append more content\r
    with open(filename, 'a', encoding='utf-8') as f:\r
        f.write("Appended: Line 2\\n")\r
        f.write("Appended: Line 3\\n")\r
    print("✅ Appended lines 2 and 3")\r
\r
    # Read the file\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        content = f.read()\r
    print(f"\\n📄 Final content:\\n{content}")\r
\r
    # Clean up\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")\r
\r
def append_creates_file():\r
    """Show that 'a' creates the file if it doesn't exist."""\r
    filename = "new_file.txt"\r
\r
    # File doesn't exist yet\r
    if not os.path.exists(filename):\r
        print("📁 File doesn't exist yet")\r
\r
    # Open in 'a' mode - creates the file\r
    with open(filename, 'a', encoding='utf-8') as f:\r
        f.write("This file was created by append mode.\\n")\r
\r
    print(f"✅ File created: {filename}")\r
\r
    # Verify\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        print(f"📄 Content: {f.read()}")\r
\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")\r
\r
if __name__ == "__main__":\r
    basic_append_example()\r
    append_creates_file()`,c=`# append_vs_write.py\r
# Side-by-side comparison of append and write\r
\r
import os\r
\r
def compare_append_write():\r
    """Show the difference between 'w' and 'a' modes."""\r
    filename = "compare.txt"\r
\r
    # Write mode - overwrites\r
    print("🔹 Write mode ('w'):")\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.write("First write\\n")\r
    print("   First write: 'First write'")\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.write("Second write (overwrote!)\\n")\r
    print("   Second write: 'Second write (overwrote!)'")\r
\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        print(f"   Result: {f.read().strip()}")\r
\r
    print("\\n🔹 Append mode ('a'):")\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.write("First line\\n")\r
    print("   First: 'First line'")\r
\r
    with open(filename, 'a', encoding='utf-8') as f:\r
        f.write("Second line\\n")\r
    print("   Second: 'Second line'")\r
\r
    with open(filename, 'a', encoding='utf-8') as f:\r
        f.write("Third line\\n")\r
    print("   Third: 'Third line'")\r
\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        print(f"   Result:\\n{f.read()}")\r
\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")\r
\r
if __name__ == "__main__":\r
    compare_append_write()`,h=`# append_logging.py\r
# Builds a simple logging system using append mode\r
\r
import os\r
import datetime\r
\r
def log_message(message, logfile="app.log"):\r
    """Append a timestamped message to the log file."""\r
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")\r
    with open(logfile, 'a', encoding='utf-8') as f:\r
        f.write(f"[{timestamp}] {message}\\n")\r
    print(f"✅ Logged: {message}")\r
\r
def read_log(logfile="app.log"):\r
    """Read and display the entire log."""\r
    try:\r
        with open(logfile, 'r', encoding='utf-8') as f:\r
            content = f.read()\r
        print("\\n📄 Log file content:")\r
        print(content)\r
    except FileNotFoundError:\r
        print("❌ Log file not found.")\r
\r
def simulate_application():\r
    """Simulate an application logging events."""\r
    print("🔹 Simulating application logs:")\r
    log_message("Application started")\r
    log_message("User Swadeep logged in")\r
    log_message("Processing data...")\r
    log_message("Data processed successfully")\r
    log_message("User Swadeep logged out")\r
    log_message("Application shutting down")\r
\r
def log_with_severity(level, message, logfile="detailed.log"):\r
    """Log with severity level."""\r
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")\r
    with open(logfile, 'a', encoding='utf-8') as f:\r
        f.write(f"[{timestamp}] [{level}] {message}\\n")\r
\r
def simulate_detailed_logs():\r
    """Log with different severity levels."""\r
    print("\\n🔹 Logging with severity levels:")\r
    log_with_severity("INFO", "System check passed")\r
    log_with_severity("WARNING", "High memory usage detected")\r
    log_with_severity("ERROR", "Database connection timeout")\r
    log_with_severity("INFO", "Retry successful")\r
\r
if __name__ == "__main__":\r
    simulate_application()\r
    read_log("app.log")\r
\r
    simulate_detailed_logs()\r
    read_log("detailed.log")\r
\r
    # Clean up\r
    for f in ["app.log", "detailed.log"]:\r
        if os.path.exists(f):\r
            os.remove(f)\r
    print("🧹 Cleaned up.")`,m=`# append_multiple.py\r
# Demonstrates appending multiple lines\r
\r
import os\r
\r
def append_multiple_lines():\r
    """Append multiple lines using writelines()."""\r
    filename = "multiple.txt"\r
\r
    # Initial content\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.write("Initial content\\n")\r
    print("✅ Initial content written")\r
\r
    # Multiple lines to append\r
    new_lines = [\r
        "Appended line 1\\n",\r
        "Appended line 2\\n",\r
        "Appended line 3\\n",\r
        "Appended line 4\\n",\r
    ]\r
\r
    with open(filename, 'a', encoding='utf-8') as f:\r
        f.writelines(new_lines)\r
\r
    print("✅ Appended 4 lines")\r
\r
    # Read and display\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        print(f"\\n📄 Content:\\n{f.read()}")\r
\r
    os.remove(filename)\r
\r
def append_from_list_of_data():\r
    """Append data from a list, adding newlines."""\r
    filename = "data_append.txt"\r
\r
    # Start fresh\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.write("Student List:\\n")\r
        f.write("-" * 20 + "\\n")\r
\r
    students = ["Swadeep", "Tuhina", "Abhronila", "Debangshu"]\r
\r
    # Append each student with a newline\r
    with open(filename, 'a', encoding='utf-8') as f:\r
        f.writelines([f"{student}\\n" for student in students])\r
\r
    print(f"✅ Appended {len(students)} students")\r
\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        print(f"\\n📄 Content:\\n{f.read()}")\r
\r
    os.remove(filename)\r
\r
if __name__ == "__main__":\r
    append_multiple_lines()\r
    append_from_list_of_data()\r
    print("🧹 Cleaned up.")`,x=`# append_errors.py\r
# Demonstrates handling errors when appending\r
\r
import os\r
\r
def safe_append(filename, content):\r
    """Safely append content with error handling."""\r
    try:\r
        with open(filename, 'a', encoding='utf-8') as f:\r
            f.write(content + "\\n")\r
        return True\r
    except PermissionError:\r
        print(f"❌ Permission denied: {filename}")\r
    except OSError as e:\r
        print(f"❌ OS error: {e}")\r
    except Exception as e:\r
        print(f"❌ Unexpected error: {e}")\r
    return False\r
\r
def append_with_retry(filename, content, max_retries=3):\r
    """Append with retry mechanism."""\r
    for attempt in range(max_retries):\r
        try:\r
            with open(filename, 'a', encoding='utf-8') as f:\r
                f.write(content + "\\n")\r
            print(f"✅ Successfully appended (attempt {attempt + 1})")\r
            return True\r
        except (PermissionError, OSError) as e:\r
            print(f"⚠️ Attempt {attempt + 1} failed: {e}")\r
            import time\r
            time.sleep(0.5)\r
    print(f"❌ Failed after {max_retries} attempts")\r
    return False\r
\r
def demo_errors():\r
    """Demonstrate error scenarios."""\r
    filename = "error_demo.txt"\r
\r
    # Try to append to a file in a non-existent directory\r
    safe_append("/nonexistent/dir/file.txt", "test")\r
\r
    # Try to append to a read-only file (simulate by creating a file and making it read-only)\r
    if os.name == 'posix':  # Unix-like systems\r
        with open(filename, 'w', encoding='utf-8') as f:\r
            f.write("content\\n")\r
        os.chmod(filename, 0o444)  # Read-only\r
        safe_append(filename, "attempt to append")\r
        os.chmod(filename, 0o666)  # Restore\r
        os.remove(filename)\r
\r
    # Successful append\r
    safe_append("success.txt", "This works")\r
    with open("success.txt", 'r') as f:\r
        print(f"📄 success.txt: {f.read().strip()}")\r
    os.remove("success.txt")\r
\r
    # Retry mechanism\r
    append_with_retry("retry_demo.txt", "Retry test")\r
    with open("retry_demo.txt", 'r') as f:\r
        print(f"📄 retry_demo.txt: {f.read().strip()}")\r
    os.remove("retry_demo.txt")\r
\r
if __name__ == "__main__":\r
    demo_errors()\r
    print("🧹 Cleaned up.")`,g=`# append_large.py\r
# Demonstrates efficient appending for large data\r
\r
import os\r
import time\r
\r
def append_in_chunks(filename, num_lines=10000):\r
    """Append many lines efficiently."""\r
    print(f"🔹 Appending {num_lines} lines in chunks...")\r
    start = time.perf_counter()\r
\r
    chunk_size = 1000\r
    for i in range(0, num_lines, chunk_size):\r
        lines = [f"Line {j:05d}\\n" for j in range(i, min(i + chunk_size, num_lines))]\r
        with open(filename, 'a', encoding='utf-8') as f:\r
            f.writelines(lines)\r
\r
    elapsed = time.perf_counter() - start\r
    print(f"   Completed in {elapsed:.4f}s")\r
\r
def stream_append(filename, generator):\r
    """Append from a generator (memory efficient)."""\r
    print(f"🔹 Appending from generator...")\r
    start = time.perf_counter()\r
\r
    with open(filename, 'a', encoding='utf-8') as f:\r
        for line in generator:\r
            f.write(line)\r
\r
    elapsed = time.perf_counter() - start\r
    print(f"   Completed in {elapsed:.4f}s")\r
\r
def generate_lines(n):\r
    """Generator that yields lines."""\r
    for i in range(n):\r
        yield f"Generated line {i:06d}\\n"\r
\r
if __name__ == "__main__":\r
    filename = "large_append.txt"\r
\r
    # Clean start\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.write("Initial header\\n")\r
    print("✅ Starting fresh file")\r
\r
    # Append with chunks\r
    append_in_chunks(filename, 10000)\r
\r
    # Check size\r
    size = os.path.getsize(filename)\r
    print(f"📊 File size: {size:,} bytes")\r
\r
    # Append using generator\r
    stream_append(filename, generate_lines(5000))\r
\r
    # Final size\r
    size = os.path.getsize(filename)\r
    print(f"📊 Final file size: {size:,} bytes")\r
\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")`,f=[{question:"What is the difference between 'w' and 'a' modes?",shortAnswer:"'w' overwrites; 'a' appends to the end.",explanation:"'w' truncates the file; 'a' preserves existing content.",hint:"Write vs append.",level:"basic",codeExample:null},{question:"Does append mode create a file if it doesn't exist?",shortAnswer:"Yes, both 'a' and 'a+' create the file if it doesn't exist.",explanation:"It's safe to use append mode without checking for existence.",hint:"No need to check first.",level:"basic",codeExample:"open('new.txt', 'a')"},{question:"Where does append mode write data?",shortAnswer:"Always at the end of the file.",explanation:"Regardless of the current pointer position, writes go to the end.",hint:"End of file.",level:"basic",codeExample:null},{question:"What is the difference between 'a' and 'a+'?",shortAnswer:"'a' is write‑only; 'a+' allows reading as well.",explanation:"'a+' adds read capability to append mode.",hint:"Read + append.",level:"intermediate",codeExample:"open('log.txt', 'a+')"},{question:"Can you read from a file opened in 'a' mode?",shortAnswer:"No, 'a' is write‑only.",explanation:"Use 'a+' if you need to read as well.",hint:"Add '+' to read.",level:"basic",codeExample:null},{question:"What is the initial file pointer position in append mode?",shortAnswer:"For 'a' mode, it starts at the end; for 'a+', it starts at the beginning.",explanation:"In 'a+', you can read from the start; writes still go to the end.",hint:"'a+' starts at 0.",level:"intermediate",codeExample:null},{question:"Does `seek()` work in append mode?",shortAnswer:"For reading, yes (in 'a+'); for writing, no (writes always go to end).",explanation:"You can seek to read, but writes are always appended.",hint:"Seek affects only reads.",level:"advanced",codeExample:"f.seek(0); data = f.read()"},{question:"What happens if you try to read from 'a' mode?",shortAnswer:"It raises an OSError because 'a' is write‑only.",explanation:"Use 'a+' for reading.",hint:"Not allowed.",level:"basic",codeExample:"f = open('f.txt', 'a'); f.read()  # OSError"},{question:"Why is append mode preferred for logging?",shortAnswer:"It preserves history and doesn't destroy existing log entries.",explanation:"Logs are accumulated over time; append mode ensures no data loss.",hint:"Preserves history.",level:"intermediate",codeExample:null},{question:"How do you add a timestamp to a log entry when appending?",shortAnswer:"Use `datetime.now()` and format the string.",explanation:"`f.write(f'[{datetime.now()}] {message}\\n')`",hint:"Add timestamp in the string.",level:"intermediate",codeExample:"from datetime import datetime; f.write(f'[{datetime.now()}] {msg}\\n')"},{question:"Can you append binary data with 'ab' mode?",shortAnswer:"Yes, use 'ab' for binary append.",explanation:"Binary append works like text append but with bytes.",hint:"Use 'ab'.",level:"intermediate",codeExample:"open('data.bin', 'ab')"},{question:"What happens if you open a file in 'a' mode and write without newline?",shortAnswer:"The data is appended at the end, but may run together with previous content.",explanation:"Always include '\\n' to separate entries.",hint:"Add newlines.",level:"basic",codeExample:"f.write('entry')  # may run together"},{question:"How do you append multiple lines in one operation?",shortAnswer:"Use `writelines()` in append mode.",explanation:"Pass a list of strings; they'll be appended to the end.",hint:"Use writelines().",level:"intermediate",codeExample:"f.writelines(['line1\\n', 'line2\\n'])"},{question:"Is appending efficient for large files?",shortAnswer:"Yes, appending is efficient because it only writes at the end.",explanation:"No need to rewrite the entire file.",hint:"Very efficient.",level:"intermediate",codeExample:null},{question:"What is log rotation and how does it relate to appending?",shortAnswer:"Log rotation moves old logs and starts a new file; appending writes to the current log.",explanation:"When a log file gets too large, it's renamed and a new file is created.",hint:"Managing log size.",level:"advanced",codeExample:null},{question:"Can you append to a file that's being read by another process?",shortAnswer:"It depends on the OS; on Unix, it's usually fine; on Windows, may be locked.",explanation:"Concurrent access can cause issues; use file locks if needed.",hint:"Be careful with concurrent access.",level:"advanced",codeExample:null},{question:"What is the purpose of the `a+` mode?",shortAnswer:"To both read and append to a file.",explanation:"Useful for reading the log and then adding new entries.",hint:"Read + append.",level:"intermediate",codeExample:"with open('log.txt', 'a+') as f: content = f.read(); f.write('new\\n')"},{question:"How do you read all existing content before appending?",shortAnswer:"Use 'a+' mode, read the file, then append.",explanation:"In 'a+', the pointer starts at 0, so read() reads everything.",hint:"Open with 'a+'.",level:"intermediate",codeExample:"with open('f.txt', 'a+') as f: old = f.read(); f.write('new\\n')"},{question:"What happens if you append to a file with insufficient permissions?",shortAnswer:"PermissionError is raised.",explanation:"Catch PermissionError and handle it gracefully.",hint:"Check permissions.",level:"intermediate",codeExample:"try: open('f.txt', 'a'); except PermissionError: ..."},{question:"Can you append to a file using `print()` with `file=`?",shortAnswer:"Yes, open the file in append mode and use `print('text', file=f)`.",explanation:"print() writes to the file, and if it's in append mode, it appends.",hint:"print() works too.",level:"intermediate",codeExample:"with open('f.txt', 'a') as f: print('text', file=f)"},{question:"What is the difference between `f.write('text\\n')` and `print('text', file=f)`?",shortAnswer:"print() adds a newline by default; write() does not.",explanation:"Both work in append mode; choose based on preference.",hint:"print() adds newline.",level:"intermediate",codeExample:null},{question:"How do you append data to a file without opening it multiple times?",shortAnswer:"Keep the file open and write multiple times.",explanation:"You can call write() multiple times on the same file object.",hint:"Write multiple times.",level:"basic",codeExample:"with open('f.txt', 'a') as f: f.write('a\\n'); f.write('b\\n')"},{question:"Is there a limit to how many times you can append to a file?",shortAnswer:"Limited by disk space and file system limits (file size).",explanation:"No practical limit besides storage capacity.",hint:"Disk space limits.",level:"advanced",codeExample:null},{question:"Why is append mode called 'a'?",shortAnswer:"It stands for 'append'.",explanation:"The name is derived from the action of adding to the end.",hint:"'a' = append.",level:"basic",codeExample:null},{question:"How do you append to a file and then immediately read the new content?",shortAnswer:"Use 'a+' mode, append, seek to start, then read.",explanation:"After appending, the pointer is at the end; seek(0) to read from start.",hint:"Seek to start after writing.",level:"advanced",codeExample:"f = open('f.txt', 'a+'); f.write('new\\n'); f.seek(0); data = f.read()"},{question:"What is the performance impact of appending to a very large file?",shortAnswer:"Appending is O(1) - it writes at the end, so it's fast regardless of file size.",explanation:"Unlike inserting, appending does not require moving existing data.",hint:"Very efficient.",level:"advanced",codeExample:null},{question:"Can you append to a file that is in use by another program?",shortAnswer:"Depends on the OS and the locks held by the other program.",explanation:"On Unix, it's often possible; on Windows, files may be locked.",hint:"Not guaranteed.",level:"advanced",codeExample:null},{question:"How do you ensure appends are written to disk immediately?",shortAnswer:"Call `flush()` or close the file.",explanation:"Use `f.flush()` after writing to force the buffer to disk.",hint:"Use flush().",level:"intermediate",codeExample:"f.write('data\\n'); f.flush()"},{question:"What is the difference between 'a' and 'a+' in terms of file pointer?",shortAnswer:"'a' pointer starts at end; 'a+' pointer starts at beginning for reads, end for writes.",explanation:"'a+' allows reading from the start, but writes still go to the end.",hint:"'a+' starts at 0.",level:"advanced",codeExample:null},{question:"Why do logs typically use append mode instead of write mode?",shortAnswer:"To preserve history and maintain a complete audit trail.",explanation:"Overwriting logs would lose valuable historical data.",hint:"Preserve history.",level:"intermediate",codeExample:null}],N=()=>{const i=d.useRef([]);d.useEffect(()=>{const n=new IntersectionObserver(r=>{r.forEach(s=>{s.isIntersecting&&s.target.classList.add("section-visible")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});return i.current.forEach(r=>{r&&n.observe(r)}),()=>n.disconnect()},[]);const t=n=>{n&&!i.current.includes(n)&&i.current.push(n)};return e.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 p-6 md:p-8 lg:p-12 font-sans leading-relaxed",children:[e.jsxs("header",{ref:t,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-gray-200 dark:border-gray-800",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-sm font-mono bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full",children:"Topic 20"}),e.jsx("span",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:"Core"})]}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight",children:"Appending Data to Files"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 mt-3 max-w-3xl",children:"Adding data to the end of a file without overwriting existing content — essential for logs and data accumulation."}),e.jsxs("div",{className:"flex flex-wrap gap-3 mt-4",children:[e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"➕ 'a' mode"}),e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"📋 Append"}),e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"📜 Logs"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"➕"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"What is Appending?"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Appending"})," is the process of adding new data to the ",e.jsx("strong",{children:"end"})," of an existing file without modifying or deleting the content that's already there."]}),e.jsxs("p",{children:["In Python, you append to a file by opening it in ",e.jsx("strong",{children:"append mode"})," (",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"'a'"})," or",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"'a+'"}),"). This is different from write mode (",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"'w'"}),"), which overwrites the file."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Preserves history:"})," All previous data is kept."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Creates if missing:"})," If the file doesn't exist, it's created."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ideal for logs:"})," Adding new entries to a log file is the classic use case."]})]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-4 rounded-r-xl",children:[e.jsx("p",{className:"text-blue-700 dark:text-blue-300 font-medium",children:"💡 Key Insight:"}),e.jsxs("p",{className:"text-blue-600 dark:text-blue-400 text-sm",children:["Appending is the ",e.jsx("strong",{children:"safe"})," way to add data. Unlike writing ('w'), it never destroys existing data. This is why logs, transaction records, and audit trails always use append."]})]})]}),e.jsxs("div",{className:"mt-8 bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700",children:[e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{viewBox:"0 0 700 200",className:"w-full max-w-3xl h-auto",children:[e.jsx("text",{x:"175",y:"25",textAnchor:"middle",fill:"#6B7280",fontSize:"14",children:"Write ('w') — Overwrites"}),e.jsx("text",{x:"525",y:"25",textAnchor:"middle",fill:"#6B7280",fontSize:"14",children:"Append ('a') — Adds to End"}),e.jsx("rect",{x:"30",y:"40",width:"290",height:"130",rx:"10",fill:"#EF4444",fillOpacity:"0.08",stroke:"#EF4444",strokeWidth:"1.5"}),e.jsx("text",{x:"175",y:"65",textAnchor:"middle",fill:"#F87171",fontSize:"13",children:"Before: [A][B][C]"}),e.jsx("text",{x:"175",y:"90",textAnchor:"middle",fill:"#F87171",fontSize:"13",children:"write('X') →"}),e.jsx("text",{x:"175",y:"115",textAnchor:"middle",fill:"#FCA5A5",fontSize:"13",children:"After: [X]"}),e.jsx("text",{x:"175",y:"140",textAnchor:"middle",fill:"#FCA5A5",fontSize:"11",children:"❌ Old data lost"}),e.jsx("rect",{x:"380",y:"40",width:"290",height:"130",rx:"10",fill:"#10B981",fillOpacity:"0.08",stroke:"#10B981",strokeWidth:"1.5",children:e.jsx("animate",{attributeName:"stroke-opacity",values:"0.4;0.8;0.4",dur:"3s",repeatCount:"indefinite"})}),e.jsx("text",{x:"525",y:"65",textAnchor:"middle",fill:"#34D399",fontSize:"13",children:"Before: [A][B][C]"}),e.jsx("text",{x:"525",y:"90",textAnchor:"middle",fill:"#34D399",fontSize:"13",children:"append('X') →"}),e.jsx("text",{x:"525",y:"115",textAnchor:"middle",fill:"#6EE7B7",fontSize:"13",children:"After: [A][B][C][X]"}),e.jsx("text",{x:"525",y:"140",textAnchor:"middle",fill:"#6EE7B7",fontSize:"11",children:"✅ Old data preserved"}),e.jsx("text",{x:"350",y:"185",textAnchor:"middle",fill:"#6B7280",fontSize:"12",children:"Appending preserves history; writing destroys it"})]})}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-3",children:"Append mode adds data to the end, preserving existing content."})]})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-100",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📋"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Append Modes: 'a' and 'a+'"})]}),e.jsx("div",{className:"overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-800",children:[e.jsx("thead",{className:"bg-gray-100 dark:bg-gray-800/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Mode"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Read?"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Write?"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Write Position"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"File must exist?"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Use Case"})]})}),e.jsxs("tbody",{className:"bg-white dark:bg-gray-900/50 divide-y divide-gray-200 dark:divide-gray-800 text-gray-700 dark:text-gray-300",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-mono text-sm font-bold",children:"'a'"}),e.jsx("td",{className:"px-6 py-4",children:"❌"}),e.jsx("td",{className:"px-6 py-4",children:"✅"}),e.jsx("td",{className:"px-6 py-4",children:"End (always)"}),e.jsx("td",{className:"px-6 py-4",children:"No (created)"}),e.jsx("td",{className:"px-6 py-4",children:"Log files"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-mono text-sm font-bold",children:"'a+'"}),e.jsx("td",{className:"px-6 py-4",children:"✅"}),e.jsx("td",{className:"px-6 py-4",children:"✅"}),e.jsx("td",{className:"px-6 py-4",children:"End (always)"}),e.jsx("td",{className:"px-6 py-4",children:"No (created)"}),e.jsx("td",{className:"px-6 py-4",children:"Logs + review"})]})]})]})}),e.jsxs("div",{className:"mt-4 grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-green-50 dark:bg-green-950/30 rounded-xl p-5 border border-green-200 dark:border-green-800/50",children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"'a' – Append Only"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"Write‑only; adds data to the end. Ideal for writing logs."}),e.jsxs("code",{className:"text-xs block mt-2 bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded",children:["with open('log.txt', 'a') as f:",e.jsx("br",{}),"    f.write('New entry\\n')"]})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-950/30 rounded-xl p-5 border border-purple-200 dark:border-purple-800/50",children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"'a+' – Append + Read"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"Read and append; can read the entire log and add new entries."}),e.jsxs("code",{className:"text-xs block mt-2 bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded",children:["with open('log.txt', 'a+') as f:",e.jsx("br",{}),"    history = f.read()",e.jsx("br",{}),"    f.write('New entry\\n')"]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-200",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📍"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"File Pointer in Append Mode"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsx("p",{children:"In append mode, the file pointer behaves differently from other modes:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Reading:"})," The pointer starts at the beginning (position 0) in ",e.jsx("code",{children:"'a+'"})," mode."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Writing:"})," The pointer is ",e.jsx("strong",{children:"always"}),"moved to the end before each write. You cannot write at a specific position in append mode."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"seek()"}),":"]})," You can ",e.jsx("code",{children:"seek()"}),"for reading, but writes will still go to the end."]})]}),e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 p-4 rounded-r-xl",children:[e.jsx("p",{className:"text-yellow-700 dark:text-yellow-300 font-medium",children:"⚠️ Important:"}),e.jsxs("p",{className:"text-yellow-600 dark:text-yellow-400 text-sm",children:["In append mode (",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"'a'"})," or",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"'a+'"}),"), every write automatically goes to the end. ",e.jsx("code",{children:"seek()"})," does not affect the write position — it only affects reading."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📝"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Appending Multiple Lines"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["You can append multiple lines at once using ",e.jsx("code",{children:"writelines()"}),"in append mode."]}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm",children:e.jsxs("code",{className:"text-gray-800 dark:text-gray-200",children:["with open('log.txt', 'a', encoding='utf-8') as f:",e.jsx("br",{}),"f.writelines([",e.jsx("br",{}),'"First new line\\n",',e.jsx("br",{}),'"Second new line\\n",',e.jsx("br",{}),'"Third new line\\n"',e.jsx("br",{}),"])"]})}),e.jsx("p",{children:"This is efficient when you have multiple entries to append in a batch operation."})]})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🌍"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Real-World Scenarios"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"bg-blue-50 dark:bg-blue-950/30 rounded-xl p-6 border border-blue-200 dark:border-blue-800/50 transition-all duration-300 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Daily Attendance Log"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:["A school in Barrackpore maintains an attendance log. Each day, the system appends the attendance records to",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"attendance.txt"}),", preserving the full history of attendance without overwriting previous days."]})]})]})}),e.jsx("div",{className:"bg-purple-50 dark:bg-purple-950/30 rounded-xl p-6 border border-purple-200 dark:border-purple-800/50 transition-all duration-300 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"📱"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Application Logging"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:["A web application in Shyamnagar logs every request and response to ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"access.log"}),". Using append mode, each request is added to the end, creating a complete audit trail that's essential for debugging and security analysis."]})]})]})}),e.jsx("div",{className:"bg-green-50 dark:bg-green-950/30 rounded-xl p-6 border border-green-200 dark:border-green-800/50 transition-all duration-300 hover:shadow-lg hover:border-green-300 dark:hover:border-green-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"💰"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Transaction History"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:["A banking system in Naihati appends every transaction to",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"transactions.txt"}),". The append‑only nature ensures an immutable record that can be audited at any time."]})]})]})})]})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🐍"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Python in Action"})]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 text-lg mb-6",children:"The following examples demonstrate appending data to files."}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(a,{fileModule:p,title:"Basic Appending",highlightLines:[]}),e.jsx(a,{fileModule:c,title:"Append vs Write",highlightLines:[]}),e.jsx(a,{fileModule:h,title:"Building a Log System",highlightLines:[]}),e.jsx(a,{fileModule:m,title:"Appending Multiple Lines",highlightLines:[]}),e.jsx(a,{fileModule:x,title:"Handling Append Errors",highlightLines:[]}),e.jsx(a,{fileModule:g,title:"Large File Appending",highlightLines:[]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"💡"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Tips & Tricks"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{title:"Use 'a' for logs, 'a+' for logs with review",desc:"Choose based on whether you need to read the existing log."},{title:"Always include newlines when appending",desc:"Appended data should end with '\\n' for proper formatting."},{title:"Use `with` for automatic flushing",desc:"Ensures data is written even if exceptions occur."},{title:"Add timestamps to log entries",desc:"`f.write(f'[{datetime.now()}] {message}\\n')` is a pro pattern."},{title:"Use `writelines()` for batch appends",desc:"More efficient for adding multiple entries at once."},{title:"Monitor file size for log rotation",desc:"Large logs may need rotation; use `os.path.getsize()`."}].map((n,r)=>e.jsxs("div",{className:"bg-amber-50 dark:bg-amber-950/20 rounded-xl p-5 border border-amber-200 dark:border-amber-800/50 transition-all duration-300 hover:shadow-lg hover:border-amber-300 dark:hover:border-amber-600 hover:-translate-y-1",children:[e.jsxs("h4",{className:"font-semibold text-gray-900 dark:text-white flex items-start gap-2",children:[e.jsx("span",{className:"text-amber-500",children:"✦"})," ",n.title]}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 mt-1",children:n.desc})]},r))})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Common Mistakes"})]}),e.jsx("div",{className:"space-y-3",children:[{mistake:"Using 'w' instead of 'a' and losing data",fix:"Always use 'a' when you want to preserve existing content."},{mistake:"Forgetting to add newline when appending",fix:"Appended data will run together; always add '\\n'."},{mistake:"Assuming seek() works for writing in append mode",fix:"In append mode, writes always go to the end, regardless of seek()."},{mistake:"Not handling file permissions",fix:"Catch PermissionError when the file isn't writable."},{mistake:"Appending to a file that's being read elsewhere",fix:"Consider file locks if multiple processes access the file."}].map((n,r)=>e.jsx("div",{className:"bg-red-50 dark:bg-red-950/20 rounded-xl p-5 border border-red-200 dark:border-red-800/50 transition-all duration-300 hover:shadow-lg hover:border-red-300 dark:hover:border-red-600",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-red-500 text-lg",children:"✗"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-gray-800 dark:text-gray-200 font-medium",children:n.mistake}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:["✓ ",n.fix]})]})]})},r))})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Best Practices"})]}),e.jsx("div",{className:"bg-emerald-50 dark:bg-emerald-950/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/50 transition-all duration-300 hover:shadow-lg hover:border-emerald-300 dark:hover:border-emerald-600",children:e.jsxs("ul",{className:"space-y-3 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Use append mode for logs and history:"})," ","Never overwrite history unless you have a good reason."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Always include timestamps in log entries:"})," ","This makes logs useful for debugging."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Use `with` for automatic file closure:"})," ","Ensures data is flushed to disk."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Implement log rotation for large files:"})," ","Split logs by size or date to keep them manageable."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Use `a+` when you need to review the log:"})," ","Combine reading and appending in a single file handle."]})]})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📋"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Mini Checklist"})]}),e.jsxs("div",{className:"bg-indigo-50 dark:bg-indigo-950/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800/50 transition-all duration-300 hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-600",children:[e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"By the end of this topic, you should understand:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:["What appending is and why it's useful","The difference between 'a' and 'a+' modes","How file pointer works in append mode","When to use append vs write","How to append multiple lines with writelines()","Common pitfalls (newlines, permissions)","Best practices for logging and data accumulation"].map((n,r)=>e.jsxs("div",{className:"flex items-center gap-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900/50 px-4 py-2 rounded-lg",children:[e.jsx("span",{className:"text-indigo-400",children:"☐"}),e.jsx("span",{className:"text-sm",children:n})]},r))})]})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🤔"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Think About…"})]}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-950/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800/50 transition-all duration-300 hover:shadow-lg hover:border-yellow-300 dark:hover:border-yellow-600",children:e.jsxs("div",{className:"space-y-4 text-gray-700 dark:text-gray-300",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Observe carefully:"})," ","What happens if you open a file in 'a' mode, write to it, then call `tell()`? Where is the pointer? What if you then read?"]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Try changing this:"})," ","Write a program that appends to a file 10 times, then reads the file. How do you read the entire file after appending without closing and reopening?"]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Think about:"})," ","Why do most logging systems use append mode? What would happen if a logging system used write mode instead?"]})]})]})})]}),e.jsx("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:e.jsx(l,{title:"Appending Data – FAQs",questions:f})}),e.jsx("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:e.jsx(o,{note:"Appending is one of the most practical file operations. Students must understand that 'w' destroys data, while 'a' preserves it. Use the analogy of a notebook: writing ('w') is like tearing out all the pages and starting over; appending ('a') is like adding new pages at the end. Emphasize that logging is the primary use case — every production system uses logs. Show them how to add timestamps and how to handle log rotation. This is the foundation of observability in software."})}),e.jsxs("footer",{className:"pt-8 mt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400",children:[e.jsx("p",{children:"Topic 20: Appending Data to Files · Built with ❤️ for classroom learning"}),e.jsx("p",{className:"mt-1",children:"Next: Topic 21 — File Pointer"})]})]}),e.jsx("style",{children:`
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
      `})]})};export{N as default};
