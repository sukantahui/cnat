import{r as o,j as e}from"./index-UqT5O8p1.js";import{P as a}from"./PythonFileLoader-BCE547nd.js";import{F as d}from"./FAQTemplate-DIfKyZOP.js";import{T as l}from"./TeacherSukantaHui-n-XI7Z6e.js";import"./PythonCodeBlock-DxANQOKJ.js";import"./prism-D4X2Is8h.js";import"./browser-BdROBGLT.js";import"./clsx-B-dksMZM.js";import"./git-branch-DqaaVz3l.js";const c=`# rplus_mode.py\r
# Demonstrates the 'r+' mode: read and write without truncation\r
\r
import os\r
\r
def rplus_example():\r
    """Show how 'r+' allows reading and writing without truncation."""\r
    filename = "rplus_demo.txt"\r
\r
    # Create a sample file\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.write("Line 1: Original content\\n")\r
        f.write("Line 2: Original content\\n")\r
        f.write("Line 3: Original content\\n")\r
\r
    print("📄 Original file content:")\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        print(f.read())\r
\r
    # Now use 'r+' to read and modify\r
    with open(filename, 'r+', encoding='utf-8') as f:\r
        # Read the first line\r
        line = f.readline()\r
        print(f"\\n📖 Read line: {line.strip()}")\r
\r
        # Move pointer back to start of line 2 (after first line)\r
        f.seek(len(line))\r
\r
        # Overwrite line 2\r
        f.write("Line 2: MODIFIED with r+\\n")\r
\r
        # Read the rest to see changes\r
        f.seek(0)  # go to start\r
        print("\\n📄 After modification:")\r
        print(f.read())\r
\r
    # Clean up\r
    os.remove(filename)\r
    print("\\n🧹 Cleaned up.")\r
\r
if __name__ == "__main__":\r
    rplus_example()`,h=`# wplus_mode.py\r
# Demonstrates the 'w+' mode: write with truncation, then read\r
\r
import os\r
\r
def wplus_example():\r
    """Show how 'w+' truncates and allows reading what was written."""\r
    filename = "wplus_demo.txt"\r
\r
    # 'w+' creates/overwrites and allows reading\r
    with open(filename, 'w+', encoding='utf-8') as f:\r
        # Write some data\r
        f.write("Data written with 'w+' mode.\\n")\r
        f.write("This file was truncated first.\\n")\r
\r
        # Seek to start to read what we wrote\r
        f.seek(0)\r
        content = f.read()\r
        print("📄 Content written and read back:")\r
        print(content)\r
\r
        # Write more data (after reading, pointer is at the end)\r
        f.write("\\nAdditional data after reading.\\n")\r
\r
        # Read everything again\r
        f.seek(0)\r
        print("\\n📄 Final content:")\r
        print(f.read())\r
\r
    # Check if the file still exists (it does)\r
    if os.path.exists(filename):\r
        print(f"\\n✅ File '{filename}' exists.")\r
\r
    # Clean up\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")\r
\r
if __name__ == "__main__":\r
    wplus_example()`,x=`# aplus_mode.py\r
# Demonstrates the 'a+' mode: append and read\r
\r
import os\r
import datetime\r
\r
def aplus_example():\r
    """Show how 'a+' allows appending and reading."""\r
    filename = "aplus_demo.txt"\r
\r
    # Start with some content\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.write("Initial log entry: Started\\n")\r
\r
    # Use 'a+' to read existing and append\r
    with open(filename, 'a+', encoding='utf-8') as f:\r
        # Read existing content (pointer is at start)\r
        existing = f.read()\r
        print("📄 Existing content:")\r
        print(existing)\r
\r
        # Append new entries (pointer is now at end)\r
        timestamp = datetime.datetime.now().strftime("%H:%M:%S")\r
        f.write(f"[{timestamp}] New event: Processing...\\n")\r
\r
        # Try to read again without seek (pointer is at end, so nothing)\r
        more = f.read()\r
        print(f"\\n📖 Reading without seek returns: '{more}' (empty)")\r
\r
        # Seek to start to see everything\r
        f.seek(0)\r
        print("\\n📄 Complete content after append:")\r
        print(f.read())\r
\r
    # Clean up\r
    os.remove(filename)\r
    print("\\n🧹 Cleaned up.")\r
\r
if __name__ == "__main__":\r
    aplus_example()`,p=`# mode_comparison.py\r
# Compares r+, w+, and a+ side by side\r
\r
import os\r
\r
def compare_modes():\r
    """Show the behavior of each read+write mode."""\r
    filename = "compare_demo.txt"\r
\r
    # -------- r+ --------\r
    print("🔹 MODE 'r+' (file must exist, no truncate)")\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.write("Line A\\nLine B\\nLine C\\n")\r
\r
    with open(filename, 'r+', encoding='utf-8') as f:\r
        f.readline()  # skip line A\r
        f.write("Line B modified\\n")\r
        f.seek(0)\r
        print(f.read())\r
\r
    # -------- w+ --------\r
    print("\\n🔹 MODE 'w+' (creates/overwrites, truncates)")\r
    with open(filename, 'w+', encoding='utf-8') as f:\r
        f.write("Fresh content with w+\\n")\r
        f.seek(0)\r
        print(f.read())\r
\r
    # -------- a+ --------\r
    print("\\n🔹 MODE 'a+' (creates/appends, preserves)")\r
    with open(filename, 'a+', encoding='utf-8') as f:\r
        f.write("Appended line with a+\\n")\r
        f.seek(0)\r
        print(f.read())\r
\r
    # Clean up\r
    os.remove(filename)\r
    print("\\n🧹 Cleaned up.")\r
\r
if __name__ == "__main__":\r
    compare_modes()`,m=`# inplace_editing.py\r
# Advanced: In-place file editing with r+\r
\r
import os\r
\r
def replace_in_file(filename, search, replace):\r
    """\r
    Replace all occurrences of 'search' with 'replace' in the file.\r
    Uses 'r+' mode for in-place editing.\r
    """\r
    # Read the entire file\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        content = f.read()\r
\r
    # Perform replacement\r
    new_content = content.replace(search, replace)\r
\r
    # Write back using 'w' (safer for this operation)\r
    # But we can also use 'r+' with truncate\r
    with open(filename, 'r+', encoding='utf-8') as f:\r
        f.write(new_content)\r
        f.truncate()  # Remove any extra bytes if new_content is shorter\r
\r
    print(f"✅ Replaced '{search}' with '{replace}'")\r
\r
def inline_edit_example():\r
    """Demonstrate in-place file editing."""\r
    filename = "edit_demo.txt"\r
\r
    # Create sample file\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.write("Student: Swadeep, Score: 85\\n")\r
        f.write("Student: Tuhina, Score: 92\\n")\r
        f.write("Student: Abhronila, Score: 78\\n")\r
\r
    print("📄 Original file:")\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        print(f.read())\r
\r
    # Edit in place: change "Score: 85" to "Score: 90"\r
    replace_in_file(filename, "Score: 85", "Score: 90")\r
\r
    print("\\n📄 After editing:")\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        print(f.read())\r
\r
    # Clean up\r
    os.remove(filename)\r
    print("\\n🧹 Cleaned up.")\r
\r
if __name__ == "__main__":\r
    inline_edit_example()`,f=[{question:"What does the 'r+' mode do?",shortAnswer:"Opens for reading and writing without truncating; the file must exist.",explanation:"It preserves existing content and allows both operations from the current pointer position.",hint:"Use it for in‑place updates.",level:"intermediate",codeExample:"open('file.txt', 'r+')"},{question:"What does the 'w+' mode do?",shortAnswer:"Opens for reading and writing; creates or truncates the file.",explanation:"It destroys existing content and starts with an empty file.",hint:"Like 'w' but with read capability.",level:"intermediate",codeExample:"open('file.txt', 'w+')"},{question:"What does the 'a+' mode do?",shortAnswer:"Opens for reading and appending; creates if missing, writes always at the end.",explanation:"You can read the entire file, but writes are appended to the end.",hint:"Ideal for logs that need to be read and appended.",level:"intermediate",codeExample:"open('file.txt', 'a+')"},{question:"What is the difference between 'r+' and 'w+'?",shortAnswer:"'r+' preserves content and requires the file to exist; 'w+' truncates and creates if missing.",explanation:"'r+' is for modifying; 'w+' is for starting fresh.",hint:"One keeps data, the other erases it.",level:"intermediate",codeExample:null},{question:"What is the difference between 'r+' and 'a+'?",shortAnswer:"'r+' writes at the pointer position; 'a+' always writes at the end.",explanation:"With 'a+', you can read from anywhere, but writes are always appended.",hint:"'a+' appends; 'r+' overwrites at the pointer.",level:"intermediate",codeExample:null},{question:"Can you read from a file opened with 'w+' after writing?",shortAnswer:"Yes, but you need to `seek()` to the start.",explanation:"After writing, the pointer is at the end; use `seek(0)` to read.",hint:"Always `seek()` before reading after writing.",level:"intermediate",codeExample:"f.write('hello'); f.seek(0); f.read()"},{question:"Does 'a+' truncate the file?",shortAnswer:"No, it preserves existing content.",explanation:"It only appends new data at the end.",hint:"'a' stands for append, not truncate.",level:"intermediate",codeExample:null},{question:"What happens if you open a non-existent file with 'r+'?",shortAnswer:"FileNotFoundError is raised.",explanation:"'r+' requires the file to exist.",hint:"Use 'w+' or 'a+' if you want creation.",level:"intermediate",codeExample:"open('missing.txt', 'r+')  # FileNotFoundError"},{question:"What happens if you open a non-existent file with 'w+'?",shortAnswer:"A new empty file is created.",explanation:"'w+' creates the file if it doesn't exist.",hint:"It's like 'w' but with read.",level:"intermediate",codeExample:null},{question:"What happens if you open a non-existent file with 'a+'?",shortAnswer:"A new empty file is created.",explanation:"'a+' creates the file if it doesn't exist.",hint:"It's like 'a' but with read.",level:"intermediate",codeExample:null},{question:"In 'a+' mode, where do writes go?",shortAnswer:"Always at the end of the file, regardless of pointer position.",explanation:"`seek()` affects reading but not writing; writes are always appended.",hint:"This is the key behavior of 'a+'.",level:"advanced",codeExample:"f.seek(0); f.write('text')  # still written at end"},{question:"Can you change the write position in 'a+' mode?",shortAnswer:"No, writes are always appended to the end.",explanation:"The file pointer for writes is fixed at the end.",hint:"Only 'r+' and 'w+' allow writing at arbitrary positions.",level:"advanced",codeExample:null},{question:"What is the initial pointer position for 'r+'?",shortAnswer:"At the beginning of the file (position 0).",explanation:"You start reading/writing from the start.",hint:"Use `tell()` to check.",level:"intermediate",codeExample:"f.tell()  # 0"},{question:"What is the initial pointer position for 'w+'?",shortAnswer:"At the beginning of the file (position 0).",explanation:"The file is empty, so the pointer is at the start.",hint:"The file is truncated first.",level:"intermediate",codeExample:"f.tell()  # 0"},{question:"What is the initial pointer position for 'a+'?",shortAnswer:"At the beginning for reading, but writes are at the end.",explanation:"You can read from the start; when you write, it goes to the end.",hint:"`tell()` after opening shows 0, but writes go to the end.",level:"advanced",codeExample:null},{question:"How do you read after writing in 'w+' mode?",shortAnswer:"Call `seek(0)` to move the pointer back to the start.",explanation:"After writing, the pointer is at the end of the written data.",hint:"`f.seek(0); content = f.read()`",level:"intermediate",codeExample:"f.write('data'); f.seek(0); f.read()"},{question:"Why would you use 'w+' instead of 'w'?",shortAnswer:"When you need to read back what you just wrote.",explanation:"'w' is write-only; 'w+' allows immediate verification.",hint:"Useful for generating and verifying content.",level:"intermediate",codeExample:null},{question:"Why would you use 'a+' instead of 'a'?",shortAnswer:"When you need to read the log history before appending.",explanation:"'a' is write-only; 'a+' lets you read existing entries.",hint:"Useful for monitoring and reporting.",level:"intermediate",codeExample:null},{question:"What is the purpose of `truncate()` with 'r+'?",shortAnswer:"To remove extra bytes if you overwrite with shorter content.",explanation:"If you write less than the original, the extra bytes remain; `truncate()` removes them.",hint:"Call `f.truncate()` after writing.",level:"advanced",codeExample:"f.write('short'); f.truncate()"},{question:"Can you use 'r+' to insert data into the middle of a file?",shortAnswer:"No, writes overwrite; they don't insert. You'd need to read, modify, and write back.",explanation:"'r+' overwrites bytes at the current position; it doesn't shift content.",hint:"For insertion, you need to rewrite the entire file.",level:"advanced",codeExample:null},{question:"What happens to the file pointer after a read in 'r+'?",shortAnswer:"It moves forward by the number of bytes/characters read.",explanation:"You need to `seek()` to go back to a previous position.",hint:"Use `tell()` to track the position.",level:"intermediate",codeExample:"f.read(10); position = f.tell()"},{question:"In 'a+', does `seek()` affect the write position?",shortAnswer:"No, writes are always at the end, regardless of `seek()`.",explanation:"`seek()` only affects reading, not writing.",hint:"This is a common point of confusion.",level:"advanced",codeExample:"f.seek(10); f.write('text')  # still at end"},{question:"How do you read the entire file in 'a+' mode?",shortAnswer:"Use `f.read()` after opening; the pointer is at the start.",explanation:"In 'a+', the pointer starts at 0, so `read()` reads everything.",hint:"Just call `f.read()`.",level:"intermediate",codeExample:"with open('file.txt', 'a+') as f: content = f.read()"},{question:"What is the difference between 'r+' and 'r'?",shortAnswer:"'r+' allows writing; 'r' is read-only.",explanation:"Add '+' to enable writing.",hint:"'r+' = read + write.",level:"basic",codeExample:null},{question:"What is the difference between 'w+' and 'w'?",shortAnswer:"'w+' allows reading; 'w' is write-only.",explanation:"Add '+' to enable reading.",hint:"'w+' = write + read.",level:"basic",codeExample:null},{question:"What is the difference between 'a+' and 'a'?",shortAnswer:"'a+' allows reading; 'a' is write-only.",explanation:"Add '+' to enable reading.",hint:"'a+' = append + read.",level:"basic",codeExample:null},{question:"Can you use 'r+' on a file that doesn't exist in the current directory?",shortAnswer:"No, FileNotFoundError is raised.",explanation:"'r+' requires the file to exist.",hint:"Provide the full path or ensure the file exists.",level:"intermediate",codeExample:"open('../missing.txt', 'r+')  # FileNotFoundError"},{question:"How can you use 'r+' to safely update a configuration file?",shortAnswer:"Read the file, modify the content in memory, then write back using 'w' or 'r+' with truncate.",explanation:"For safety, read all content, modify, and write back (with truncate).",hint:"This avoids partial writes.",level:"advanced",codeExample:"with open('config.txt', 'r+') as f: data = f.read(); data = data.replace('old', 'new'); f.seek(0); f.write(data); f.truncate()"},{question:"Why might you use 'a+' for a log file that is also monitored?",shortAnswer:"To append new events and read the log for monitoring without reopening.",explanation:"'a+' allows both appending and reading, useful for live monitoring.",hint:"One file handle for both operations.",level:"advanced",codeExample:null},{question:"What is the default mode if you use `open()` with a '+'?",shortAnswer:"There is no default '+' mode; you must specify 'r+', 'w+', or 'a+'.",explanation:"The '+' is always combined with a base mode.",hint:"You can't use '+' alone.",level:"basic",codeExample:"open('file.txt', '+')  # invalid"}],A=()=>{const i=o.useRef([]);o.useEffect(()=>{const r=new IntersectionObserver(n=>{n.forEach(s=>{s.isIntersecting&&s.target.classList.add("section-visible")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});return i.current.forEach(n=>{n&&r.observe(n)}),()=>r.disconnect()},[]);const t=r=>{r&&!i.current.includes(r)&&i.current.push(r)};return e.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 p-6 md:p-8 lg:p-12 font-sans leading-relaxed",children:[e.jsxs("header",{ref:t,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-gray-200 dark:border-gray-800",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-sm font-mono bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full",children:"Topic 9"}),e.jsx("span",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:"Core"})]}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight",children:"Read & Write Modes (r+, w+, a+)"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 mt-3 max-w-3xl",children:"Combining reading and writing in a single mode — powerful, but with important nuances."}),e.jsxs("div",{className:"flex flex-wrap gap-3 mt-4",children:[e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"📖✍️ r+"}),e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"✍️📖 w+"}),e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"📖➕ a+"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📋"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"The Read+Write Modes"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["The basic modes ('r', 'w', 'a') are either read‑only or write‑only. But sometimes you need to ",e.jsx("strong",{children:"both read and write"})," to the same file. That's where the ",e.jsx("strong",{children:"read+write modes"})," come in:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"'r+'"})," — Read and write, file must exist, no truncation."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"'w+'"})," — Read and write, creates/overwrites, truncates."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"'a+'"})," — Read and append, creates if missing, writes at end."]})]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-4 rounded-r-xl",children:[e.jsx("p",{className:"text-blue-700 dark:text-blue-300 font-medium",children:"💡 Key Insight:"}),e.jsx("p",{className:"text-blue-600 dark:text-blue-400 text-sm",children:"Adding '+' to a mode adds the opposite capability. So 'r+' is 'r' + write, 'w+' is 'w' + read, and 'a+' is 'a' + read."})]})]}),e.jsxs("div",{className:"mt-8 bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700",children:[e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{viewBox:"0 0 700 140",className:"w-full max-w-3xl h-auto",children:[e.jsx("text",{x:"350",y:"25",textAnchor:"middle",fill:"#6B7280",fontSize:"14",children:"Read+Write Modes at a Glance"}),e.jsx("rect",{x:"30",y:"45",width:"190",height:"55",rx:"8",fill:"#3B82F6",fillOpacity:"0.15",stroke:"#3B82F6",strokeWidth:"2"}),e.jsx("text",{x:"125",y:"70",textAnchor:"middle",fill:"#60A5FA",fontSize:"18",fontWeight:"600",children:"'r+'"}),e.jsx("text",{x:"125",y:"90",textAnchor:"middle",fill:"#93C5FD",fontSize:"12",children:"Read + Write (no truncate)"}),e.jsx("rect",{x:"250",y:"45",width:"190",height:"55",rx:"8",fill:"#EF4444",fillOpacity:"0.15",stroke:"#EF4444",strokeWidth:"2"}),e.jsx("text",{x:"345",y:"70",textAnchor:"middle",fill:"#F87171",fontSize:"18",fontWeight:"600",children:"'w+'"}),e.jsx("text",{x:"345",y:"90",textAnchor:"middle",fill:"#FCA5A5",fontSize:"12",children:"Write + Read (truncate)"}),e.jsx("rect",{x:"470",y:"45",width:"190",height:"55",rx:"8",fill:"#10B981",fillOpacity:"0.15",stroke:"#10B981",strokeWidth:"2"}),e.jsx("text",{x:"565",y:"70",textAnchor:"middle",fill:"#34D399",fontSize:"18",fontWeight:"600",children:"'a+'"}),e.jsx("text",{x:"565",y:"90",textAnchor:"middle",fill:"#6EE7B7",fontSize:"12",children:"Append + Read (end)"}),e.jsx("text",{x:"125",y:"125",textAnchor:"middle",fill:"#6B7280",fontSize:"11",children:"File must exist"}),e.jsx("text",{x:"345",y:"125",textAnchor:"middle",fill:"#6B7280",fontSize:"11",children:"Creates/overwrites"}),e.jsx("text",{x:"565",y:"125",textAnchor:"middle",fill:"#6B7280",fontSize:"11",children:"Creates/appends"})]})}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-3",children:"Each mode combines reading and writing with different behaviors."})]})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-100",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📖✍️"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Mode 'r+' — Read & Write (No Truncate)"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Purpose:"})," To read from and write to an ",e.jsx("em",{children:"existing"})," file without truncating it."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"File must exist:"})," Raises FileNotFoundError if missing."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No truncation:"})," Existing content is preserved."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Position:"})," File pointer starts at the beginning (0)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reading and writing:"})," You can both read and write."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Typical use:"})," In‑place editing, updating specific parts of a file."]})]}),e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 p-4 rounded-r-xl",children:[e.jsx("p",{className:"text-yellow-700 dark:text-yellow-300 font-medium",children:"⚠️ Important:"}),e.jsxs("p",{className:"text-yellow-600 dark:text-yellow-400 text-sm",children:["With 'r+', writes ",e.jsx("em",{children:"overwrite"})," existing content at the current pointer position. They do ",e.jsx("strong",{children:"not"})," insert or append. Use ",e.jsx("code",{children:"seek()"})," to control where you write."]})]})]}),e.jsx("div",{className:"bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 border border-gray-200 dark:border-gray-800 mt-4",children:e.jsxs("code",{className:"text-sm text-gray-800 dark:text-gray-200",children:["with open('data.txt', 'r+', encoding='utf-8') as f:",e.jsx("br",{}),"    content = f.read()  # read existing data",e.jsx("br",{}),"    f.seek(0)  # go back to start",e.jsx("br",{}),"    f.write('New header\\n')  # overwrite at start"]})})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-200",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"✍️📖"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Mode 'w+' — Read & Write (Truncate)"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Purpose:"})," To create a new file or ",e.jsx("em",{children:"overwrite"})," an existing one, while still being able to read from it."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Creates if missing:"})," If the file doesn't exist, it's created."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Truncates (overwrites):"})," Existing content is erased."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Position:"})," File pointer starts at the beginning (0)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reading and writing:"})," You can read after writing."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Typical use:"})," Creating a file and then verifying or reading it back."]})]}),e.jsxs("div",{className:"bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-4 rounded-r-xl",children:[e.jsx("p",{className:"text-red-700 dark:text-red-300 font-medium",children:"⚠️ Caution:"}),e.jsxs("p",{className:"text-red-600 dark:text-red-400 text-sm",children:["Like 'w', 'w+' ",e.jsx("strong",{children:"destroys existing data"}),". Use it only when you want to start fresh. If you need to preserve content, use 'r+' instead."]})]})]}),e.jsx("div",{className:"bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 border border-gray-200 dark:border-gray-800 mt-4",children:e.jsxs("code",{className:"text-sm text-gray-800 dark:text-gray-200",children:["with open('output.txt', 'w+', encoding='utf-8') as f:",e.jsx("br",{}),"    f.write('Hello World!\\n')",e.jsx("br",{}),"    f.seek(0)  # go to start",e.jsx("br",{}),"    content = f.read()  # read what we wrote"]})})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📖➕"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Mode 'a+' — Read & Append"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Purpose:"})," To read the file and ",e.jsx("em",{children:"append"})," new data at the end."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Creates if missing:"})," If the file doesn't exist, it's created."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No truncation:"})," Existing content is preserved."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Position:"})," Writes always happen at the end. Reads start at the beginning."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reading and appending:"})," You can read the entire file and then append."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Typical use:"})," Log files that need to be read and appended to."]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-4 rounded-r-xl",children:[e.jsx("p",{className:"text-green-700 dark:text-green-300 font-medium",children:"✅ Note:"}),e.jsxs("p",{className:"text-green-600 dark:text-green-400 text-sm",children:["When using 'a+', ",e.jsx("strong",{children:"every write goes to the end"}),", regardless of the current pointer position. You can read from anywhere, but writes are always appended."]})]})]}),e.jsx("div",{className:"bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 border border-gray-200 dark:border-gray-800 mt-4",children:e.jsxs("code",{className:"text-sm text-gray-800 dark:text-gray-200",children:["with open('log.txt', 'a+', encoding='utf-8') as f:",e.jsx("br",{}),"    content = f.read()  # read existing log",e.jsx("br",{}),"    f.write('New log entry\\n')  # appended at end"]})})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"⚖️"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Mode Comparison"})]}),e.jsx("div",{className:"overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-800",children:[e.jsx("thead",{className:"bg-gray-100 dark:bg-gray-800/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Mode"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Read?"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Write?"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"File must exist?"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Creates if missing?"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Truncates?"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Write position"})]})}),e.jsxs("tbody",{className:"bg-white dark:bg-gray-900/50 divide-y divide-gray-200 dark:divide-gray-800 text-gray-700 dark:text-gray-300",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-mono text-sm font-bold",children:"'r+'"}),e.jsx("td",{className:"px-6 py-4",children:"✅"}),e.jsx("td",{className:"px-6 py-4",children:"✅"}),e.jsx("td",{className:"px-6 py-4",children:"✅"}),e.jsx("td",{className:"px-6 py-4",children:"❌"}),e.jsx("td",{className:"px-6 py-4",children:"❌"}),e.jsx("td",{className:"px-6 py-4",children:"Pointer position"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-mono text-sm font-bold",children:"'w+'"}),e.jsx("td",{className:"px-6 py-4",children:"✅"}),e.jsx("td",{className:"px-6 py-4",children:"✅"}),e.jsx("td",{className:"px-6 py-4",children:"❌"}),e.jsx("td",{className:"px-6 py-4",children:"✅"}),e.jsx("td",{className:"px-6 py-4",children:"✅"}),e.jsx("td",{className:"px-6 py-4",children:"Start"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-mono text-sm font-bold",children:"'a+'"}),e.jsx("td",{className:"px-6 py-4",children:"✅"}),e.jsx("td",{className:"px-6 py-4",children:"✅"}),e.jsx("td",{className:"px-6 py-4",children:"❌"}),e.jsx("td",{className:"px-6 py-4",children:"✅"}),e.jsx("td",{className:"px-6 py-4",children:"❌"}),e.jsx("td",{className:"px-6 py-4",children:"End (always)"})]})]})]})}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-2 text-center",children:"Choose the mode that matches your read/write needs and file‑creation requirements."})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🌍"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Real-World Scenarios"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"bg-blue-50 dark:bg-blue-950/30 rounded-xl p-6 border border-blue-200 dark:border-blue-800/50 transition-all duration-300 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"✏️"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Editing a Configuration File ('r+')"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:["A system administrator in Barrackpore needs to update a configuration file ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"config.ini"}),". Using 'r+', they can read the current settings, modify the relevant line, and write back the changes without losing other settings."]})]})]})}),e.jsx("div",{className:"bg-purple-50 dark:bg-purple-950/30 rounded-xl p-6 border border-purple-200 dark:border-purple-800/50 transition-all duration-300 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"📝"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Generating a Report ('w+')"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:"The school in Naihati generates a report, writes it to a file, and then reads it back to verify before sending to the principal. 'w+' allows both operations with a single file handle."})]})]})}),e.jsx("div",{className:"bg-green-50 dark:bg-green-950/30 rounded-xl p-6 border border-green-200 dark:border-green-800/50 transition-all duration-300 hover:shadow-lg hover:border-green-300 dark:hover:border-green-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"📋"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Audit Log with Review ('a+')"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:"A web application in Shyamnagar uses 'a+' for its log file. It appends new events and can read the entire log for monitoring or reporting without opening the file separately."})]})]})})]})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🐍"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Python in Action"})]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 text-lg mb-6",children:"The following examples demonstrate each read+write mode in practical scenarios."}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(a,{fileModule:c,title:"r+ Mode – In-Place Editing",highlightLines:[]}),e.jsx(a,{fileModule:h,title:"w+ Mode – Create & Read Back",highlightLines:[]}),e.jsx(a,{fileModule:x,title:"a+ Mode – Append & Read",highlightLines:[]}),e.jsx(a,{fileModule:p,title:"Mode Comparison – Side by Side",highlightLines:[]}),e.jsx(a,{fileModule:m,title:"Advanced: In-Place File Editing",highlightLines:[]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"💡"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Tips & Tricks"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{title:"Use 'r+' for in‑place updates",desc:"Read, seek, write — perfect for editing configs and small files."},{title:"Remember: 'w+' truncates",desc:"It erases everything; use it when you want a fresh file."},{title:"In 'a+', writes always go to the end",desc:"Even if you `seek()` elsewhere, writes are appended."},{title:"Combine with `seek()` and `tell()`",desc:"Use them to navigate precisely in read+write modes."},{title:"Use `truncate()` to shrink files",desc:"After modifying with 'r+', you may need to truncate if you wrote less."},{title:"Prefer 'r+' for safety",desc:"It won't destroy data; you always control what gets overwritten."}].map((r,n)=>e.jsxs("div",{className:"bg-amber-50 dark:bg-amber-950/20 rounded-xl p-5 border border-amber-200 dark:border-amber-800/50 transition-all duration-300 hover:shadow-lg hover:border-amber-300 dark:hover:border-amber-600 hover:-translate-y-1",children:[e.jsxs("h4",{className:"font-semibold text-gray-900 dark:text-white flex items-start gap-2",children:[e.jsx("span",{className:"text-amber-500",children:"✦"})," ",r.title]}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 mt-1",children:r.desc})]},n))})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Common Mistakes"})]}),e.jsx("div",{className:"space-y-3",children:[{mistake:"Using 'r+' on a non-existent file",fix:"Check existence or use 'w+' if you want to create."},{mistake:"Forgetting to `seek()` before overwriting with 'r+'",fix:"The pointer may be at the end after reading; use `seek(0)` to go back."},{mistake:"Assuming 'w+' preserves existing content",fix:"It truncates; use 'r+' for preservation."},{mistake:"Trying to read after writing with 'a+' without `seek()`",fix:"After writing in 'a+', the pointer is at the end; use `seek(0)` to read."},{mistake:"Not truncating after writing less data with 'r+'",fix:"If you overwrite with shorter content, call `truncate()` to remove extra bytes."}].map((r,n)=>e.jsx("div",{className:"bg-red-50 dark:bg-red-950/20 rounded-xl p-5 border border-red-200 dark:border-red-800/50 transition-all duration-300 hover:shadow-lg hover:border-red-300 dark:hover:border-red-600",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-red-500 text-lg",children:"✗"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-gray-800 dark:text-gray-200 font-medium",children:r.mistake}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:["✓ ",r.fix]})]})]})},n))})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Best Practices"})]}),e.jsx("div",{className:"bg-emerald-50 dark:bg-emerald-950/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/50 transition-all duration-300 hover:shadow-lg hover:border-emerald-300 dark:hover:border-emerald-600",children:e.jsxs("ul",{className:"space-y-3 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Choose 'r+' for safe in‑place updates:"})," ","It preserves existing data and gives full control."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Use 'w+' when you need a fresh file and want to read it back:"})," ","Perfect for generating reports or outputs."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Use 'a+' for logs that need review:"})," ","Append new events and read the full history."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Always use `with` for automatic closure:"})," ","Regardless of mode, context managers are safer."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Test with small files first:"})," ","Read+write modes can be tricky; test on dummy data."]})]})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📋"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Mini Checklist"})]}),e.jsxs("div",{className:"bg-indigo-50 dark:bg-indigo-950/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800/50 transition-all duration-300 hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-600",children:[e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"By the end of this topic, you should understand:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:["What 'r+' does and when to use it","What 'w+' does and when to use it","What 'a+' does and when to use it","The difference between truncating and non‑truncating modes","How write position works in each mode","Common pitfalls and how to avoid them","Best practices for read+write file operations"].map((r,n)=>e.jsxs("div",{className:"flex items-center gap-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900/50 px-4 py-2 rounded-lg",children:[e.jsx("span",{className:"text-indigo-400",children:"☐"}),e.jsx("span",{className:"text-sm",children:r})]},n))})]})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🤔"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Think About…"})]}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-950/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800/50 transition-all duration-300 hover:shadow-lg hover:border-yellow-300 dark:hover:border-yellow-600",children:e.jsxs("div",{className:"space-y-4 text-gray-700 dark:text-gray-300",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Observe carefully:"})," ","In 'r+' mode, after reading the entire file, where is the pointer? What happens if you write immediately after reading?"]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Try changing this:"})," ","Use 'a+' to append a line, then read the file without `seek(0)`. What do you get?"]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Think about:"})," ","A program needs to update a score in a file. Should it use 'r+' or 'w+'? Why?"]})]})]})})]}),e.jsx("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:e.jsx(d,{title:"Read & Write Modes – FAQs",questions:f})}),e.jsx("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:e.jsx(l,{note:"Read+write modes are powerful but often misunderstood. The key is the pointer position and truncation behavior. Use the analogy of a document: 'r+' is like editing with a pen (overwriting), 'w+' is like starting a new page, and 'a+' is like adding notes at the bottom. Emphasize that 'a+' always writes at the end — this is a common source of bugs. Have students experiment with each mode and observe the pointer position using `tell()`."})}),e.jsxs("footer",{className:"pt-8 mt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400",children:[e.jsx("p",{children:"Topic 9: Read & Write Modes (r+, w+, a+) · Built with ❤️ for classroom learning"}),e.jsx("p",{className:"mt-1",children:"Next: Topic 10 — Binary File Modes (rb, wb, ab, rb+, wb+, ab+)"})]})]}),e.jsx("style",{children:`
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
      `})]})};export{A as default};
