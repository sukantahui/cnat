import{r as l,j as e}from"./index-CFVtO9P_.js";import{P as r}from"./PythonFileLoader-BWegqwOv.js";import{F as o}from"./FAQTemplate-CAe3FOoX.js";import{T as d}from"./TeacherSukantaHui-D1Z2v8eP.js";import"./PythonCodeBlock-BU_4Xbz-.js";import"./prism-BpRLhmdq.js";import"./browser-BLY_Ogsx.js";import"./clsx-B-dksMZM.js";import"./git-branch-BV3XnfBa.js";const c=`# with_open.py\r
# Basic usage of with open()\r
\r
import os\r
\r
def basic_with_open():\r
    """Demonstrate basic with open() usage."""\r
    filename = "with_demo.txt"\r
\r
    # Write with with\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.write("Written with 'with' statement.\\n")\r
        f.write("The file will close automatically.\\n")\r
    print("✅ File written and closed automatically.")\r
\r
    # Read with with\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        content = f.read()\r
    print(f"📄 Content:\\n{content}")\r
\r
    # The file object is not accessible outside the block\r
    # If you try to access f here, you'll get a NameError\r
    # try:\r
    #     f.read()\r
    # except NameError:\r
    #     print("❌ f is not defined outside the with block.")\r
\r
    # Clean up\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")\r
\r
if __name__ == "__main__":\r
    basic_with_open()`,h=`# with_multiple.py\r
# Handling multiple files with with\r
\r
import os\r
\r
def single_with_multi():\r
    """Open multiple files in a single with statement."""\r
    print("🔹 Single with, multiple files:")\r
\r
    with open('src.txt', 'w', encoding='utf-8') as src, \\\r
         open('dst.txt', 'w', encoding='utf-8') as dst:\r
        src.write("Source content.\\n")\r
        dst.write("Destination content.\\n")\r
\r
    print("✅ Both files written and closed.")\r
\r
    # Verify\r
    with open('src.txt', 'r') as f:\r
        print(f"   src.txt: {f.read().strip()}")\r
    with open('dst.txt', 'r') as f:\r
        print(f"   dst.txt: {f.read().strip()}")\r
\r
    # Clean up\r
    for fname in ['src.txt', 'dst.txt']:\r
        if os.path.exists(fname):\r
            os.remove(fname)\r
    print("🧹 Cleaned up.")\r
\r
def nested_with():\r
    """Use nested with statements for clarity."""\r
    print("\\n🔹 Nested with statements:")\r
\r
    with open('in.txt', 'w', encoding='utf-8') as f:\r
        f.write("Data to be processed.\\n")\r
\r
    with open('in.txt', 'r', encoding='utf-8') as src:\r
        with open('out.txt', 'w', encoding='utf-8') as dst:\r
            content = src.read()\r
            dst.write(f"Processed: {content}")\r
\r
    print("✅ Nested with closed both files.")\r
\r
    # Verify\r
    with open('out.txt', 'r') as f:\r
        print(f"   out.txt: {f.read().strip()}")\r
\r
    # Clean up\r
    for fname in ['in.txt', 'out.txt']:\r
        if os.path.exists(fname):\r
            os.remove(fname)\r
    print("🧹 Cleaned up.")\r
\r
if __name__ == "__main__":\r
    single_with_multi()\r
    nested_with()`,x=`# with_exception.py\r
# Exception handling with with\r
\r
import os\r
\r
def exception_without_with():\r
    """Exception handling without with (risky)."""\r
    print("🔴 Without with (risky):")\r
    filename = "ex_demo.txt"\r
\r
    try:\r
        f = open(filename, 'w', encoding='utf-8')\r
        f.write("Writing...")\r
        raise ValueError("Simulated error!")\r
    except ValueError as e:\r
        print(f"   Exception: {e}")\r
        # But f is still open! We need to close it.\r
    finally:\r
        try:\r
            f.close()\r
            print("✅ File closed in finally.")\r
        except UnboundLocalError:\r
            pass\r
\r
    if os.path.exists(filename):\r
        os.remove(filename)\r
\r
def exception_with_with():\r
    """Exception handling with with (safe)."""\r
    print("\\n✅ With (safe):")\r
    filename = "ex_with.txt"\r
\r
    try:\r
        with open(filename, 'w', encoding='utf-8') as f:\r
            f.write("Writing...")\r
            raise ValueError("Simulated error!")\r
    except ValueError as e:\r
        print(f"   Exception: {e}")\r
        print("   File was already closed by with.")\r
\r
    # File should not exist (or be empty) because it was closed\r
    # after the exception. But if we try to read it:\r
    if os.path.exists(filename):\r
        with open(filename, 'r') as f:\r
            print(f"   File exists with content: {f.read()}")\r
        os.remove(filename)\r
    else:\r
        print("   File was closed and may have been emptied, but it exists?")\r
        # In practice, the file might be created but empty.\r
        # Clean up if it exists\r
        if os.path.exists(filename):\r
            os.remove(filename)\r
\r
if __name__ == "__main__":\r
    exception_without_with()\r
    print()\r
    exception_with_with()\r
    print("🧹 Cleaned up.")`,m=`# custom_context.py\r
# Creating a custom context manager (advanced)\r
\r
import time\r
\r
class Timer:\r
    """A simple context manager to time code execution."""\r
    def __enter__(self):\r
        self.start = time.perf_counter()\r
        return self\r
\r
    def __exit__(self, exc_type, exc_val, exc_tb):\r
        self.end = time.perf_counter()\r
        self.elapsed = self.end - self.start\r
        print(f"⏱️ Time elapsed: {self.elapsed:.4f} seconds")\r
        # Return False to propagate exceptions\r
        return False\r
\r
def custom_context_example():\r
    """Demonstrate a custom context manager."""\r
    print("🔹 Custom context manager (Timer):")\r
\r
    with Timer() as timer:\r
        # Simulate some work\r
        total = 0\r
        for i in range(1000000):\r
            total += i\r
        print(f"   Sum: {total}")\r
\r
    print(f"   Elapsed time: {timer.elapsed:.4f}s")\r
\r
def context_manager_for_file_like():\r
    """Simulate a file-like context manager (for illustration)."""\r
    print("\\n🔹 Custom file-like context manager:")\r
\r
    class ManagedFile:\r
        def __init__(self, filename, mode):\r
            self.filename = filename\r
            self.mode = mode\r
            self.file = None\r
\r
        def __enter__(self):\r
            self.file = open(self.filename, self.mode, encoding='utf-8')\r
            return self.file\r
\r
        def __exit__(self, exc_type, exc_val, exc_tb):\r
            if self.file:\r
                self.file.close()\r
                print(f"   Closed file: {self.filename}")\r
            # Return False to propagate exceptions\r
            return False\r
\r
    with ManagedFile('custom.txt', 'w') as f:\r
        f.write("Written with custom context manager.\\n")\r
\r
    # Verify\r
    with open('custom.txt', 'r') as f:\r
        content = f.read()\r
        print(f"📄 Content: {content.strip()}")\r
\r
    # Clean up\r
    import os\r
    os.remove('custom.txt')\r
    print("🧹 Cleaned up.")\r
\r
if __name__ == "__main__":\r
    custom_context_example()\r
    context_manager_for_file_like()`,p=`# without_with.py\r
# Comparison: Manual closing vs with\r
\r
import os\r
\r
def manual_close():\r
    """File handling without with (manual close)."""\r
    print("🔹 Manual close (try-finally):")\r
    filename = "manual_demo.txt"\r
\r
    f = None\r
    try:\r
        f = open(filename, 'w', encoding='utf-8')\r
        f.write("Manual close example.\\n")\r
        # If an exception occurs here, we still need to close\r
        # raise RuntimeError("Simulated error")\r
    except Exception as e:\r
        print(f"   Error: {e}")\r
    finally:\r
        if f:\r
            f.close()\r
            print("✅ File closed in finally block.")\r
\r
    # Clean up\r
    if os.path.exists(filename):\r
        os.remove(filename)\r
\r
def with_close():\r
    """File handling with with."""\r
    print("\\n🔹 With statement (automatic):")\r
    filename = "with_demo.txt"\r
\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.write("With statement example.\\n")\r
        # Even if we raise an exception, the file is closed\r
        # raise RuntimeError("Simulated error")\r
\r
    print("✅ File closed automatically by with.")\r
\r
    # Clean up\r
    if os.path.exists(filename):\r
        os.remove(filename)\r
\r
def main():\r
    manual_close()\r
    with_close()\r
    print("🧹 All cleaned up.")\r
\r
if __name__ == "__main__":\r
    main()`,f=[{question:"What does the 'with' statement do when used with open()?",shortAnswer:"It automatically closes the file when the block exits.",explanation:"It ensures the file is closed even if an exception occurs.",hint:"It's a context manager for resource cleanup.",level:"basic",codeExample:"with open('file.txt') as f: data = f.read()"},{question:"Why is 'with' preferred over manual close()?",shortAnswer:"It's safer, more readable, and guarantees closure.",explanation:"Manual close() can be forgotten, leading to resource leaks.",hint:"The Pythonic way.",level:"basic",codeExample:null},{question:"What is a context manager?",shortAnswer:"An object that implements __enter__ and __exit__ methods.",explanation:"It manages resources, setting them up and cleaning them up.",hint:"Used with the 'with' statement.",level:"intermediate",codeExample:null},{question:"What are the __enter__ and __exit__ methods?",shortAnswer:"__enter__ sets up the resource; __exit__ cleans it up.",explanation:"__enter__ returns the resource; __exit__ handles cleanup.",hint:"The magic behind 'with'.",level:"advanced",codeExample:null},{question:"Is it possible to open multiple files with one 'with'?",shortAnswer:"Yes, using a comma-separated list of open() calls.",explanation:"Example: `with open('a') as f1, open('b') as f2:`.",hint:"All files are closed automatically.",level:"intermediate",codeExample:"with open('a') as f1, open('b') as f2:"},{question:"What happens to the file object after the 'with' block?",shortAnswer:"It is closed and cannot be used.",explanation:"The file object is only valid inside the block.",hint:"Scope is limited to the block.",level:"intermediate",codeExample:"with open('f.txt') as f: data = f.read(); # f is closed here"},{question:"Can you use 'with' with files opened in binary mode?",shortAnswer:"Yes, it works with any mode (rb, wb, etc.).",explanation:"'with' works with any context manager, regardless of mode.",hint:"Same syntax.",level:"basic",codeExample:"with open('image.jpg', 'rb') as f: data = f.read()"},{question:"What happens if an exception occurs inside a 'with' block?",shortAnswer:"The file is still closed before the exception propagates.",explanation:"That's the main safety feature of 'with'.",hint:"Cleanup is guaranteed.",level:"intermediate",codeExample:null},{question:"Does the 'with' statement call close() automatically?",shortAnswer:"Yes, it calls the file's __exit__ method, which calls close().",explanation:"It also flushes the buffer.",hint:"You don't need to call close() manually.",level:"intermediate",codeExample:null},{question:"Can you use 'with' with variables that are not files?",shortAnswer:"Yes, with any object that supports the context manager protocol.",explanation:"Examples: locks, database connections, sockets.",hint:"It's a general resource management pattern.",level:"advanced",codeExample:"with threading.Lock():"},{question:"What is the difference between 'with' and try-finally for file handling?",shortAnswer:"'with' is more concise and less error-prone.",explanation:"'with' abstracts the try-finally pattern, making code cleaner.",hint:"Use 'with' for files.",level:"intermediate",codeExample:null},{question:"Can you nest 'with' statements?",shortAnswer:"Yes, they can be nested, like any block.",explanation:"Useful for managing multiple resources.",hint:"Indent each 'with'.",level:"intermediate",codeExample:"with open('a') as f1: with open('b') as f2: ..."},{question:"What is the 'as' keyword in 'with open() as f'?",shortAnswer:"It assigns the file object to the variable f.",explanation:"You can then use f to read/write inside the block.",hint:"It's optional but recommended.",level:"basic",codeExample:"with open('f.txt') as f:"},{question:"Can you use 'with' without 'as'?",shortAnswer:"Yes, if you don't need to reference the resource.",explanation:"But it's usually used with 'as'.",hint:"Mostly used with 'as'.",level:"basic",codeExample:"with open('f.txt'):  # no variable"},{question:"What is the scope of the variable defined with 'as'?",shortAnswer:"The variable is scoped to the 'with' block.",explanation:"It is not accessible outside the block.",hint:"Limited lifetime.",level:"intermediate",codeExample:null},{question:"How do you handle errors from opening the file inside a 'with'?",shortAnswer:"Wrap the 'with' in a try-except block.",explanation:"The error occurs before __enter__ completes.",hint:"Try-except around the 'with'.",level:"intermediate",codeExample:"try: with open('f.txt') as f: ... except FileNotFoundError: ..."},{question:"What is the 'contextlib' module used for?",shortAnswer:"It provides utilities for creating context managers.",explanation:"Useful for creating custom context managers without classes.",hint:"Advanced topic.",level:"advanced",codeExample:"from contextlib import contextmanager"},{question:"Can you create a context manager with a function using contextlib?",shortAnswer:"Yes, using the @contextmanager decorator.",explanation:"It yields the resource, and cleanup happens after yield.",hint:"Simplifies custom context managers.",level:"advanced",codeExample:"@contextmanager def managed_file(name): f = open(name); try: yield f; finally: f.close()"},{question:"What happens if __exit__ returns True?",shortAnswer:"It suppresses any exception that occurred in the block.",explanation:"Rarely used; usually __exit__ returns False.",hint:"Advanced use.",level:"advanced",codeExample:null},{question:"Is the file closed immediately after the 'with' block exits?",shortAnswer:"Yes, the __exit__ method is called immediately.",explanation:"The file is closed and the buffer is flushed.",hint:"Instant cleanup.",level:"intermediate",codeExample:null},{question:"Can you use 'with' with a file that was already opened?",shortAnswer:"No, 'with' is used for opening and managing the file.",explanation:"You cannot wrap an existing file object in 'with'.",hint:"Use 'with' at open time.",level:"intermediate",codeExample:null},{question:"What is the recommended way to handle files in Python?",shortAnswer:"Always use the 'with' statement.",explanation:"It's safe, concise, and Pythonic.",hint:"Use 'with open()'.",level:"basic",codeExample:null},{question:"Can 'with' be used with the 'pathlib' library?",shortAnswer:"Yes, using Path.open() which returns a file object.",explanation:"Example: `with Path('file.txt').open('r') as f:`.",hint:"Works the same way.",level:"intermediate",codeExample:"from pathlib import Path; with Path('f.txt').open() as f: ..."},{question:"What is the benefit of using 'with' for database connections?",shortAnswer:"It automatically commits/rolls back and closes connections.",explanation:"Many database libraries support context managers.",hint:"Resource management.",level:"advanced",codeExample:"with connection: cursor.execute(...)"},{question:"Can 'with' be used with network sockets?",shortAnswer:"Yes, if the socket implements the context manager protocol.",explanation:"It's common in libraries that manage sockets.",hint:"Check documentation.",level:"advanced",codeExample:null},{question:"What is the difference between 'with' and 'with...as'?",shortAnswer:"'with...as' assigns the context manager's return to a variable.",explanation:"Without 'as', you cannot reference the resource.",hint:"'as' is optional.",level:"basic",codeExample:"with open('f.txt') as f:  # with 'as'"},{question:"Can you use multiple 'with' statements in one line?",shortAnswer:"Yes, using commas and backslashes for readability.",explanation:"Example: `with open('a') as f1, open('b') as f2:`.",hint:"Keep it readable.",level:"intermediate",codeExample:"with open('a') as f1, open('b') as f2:"},{question:"What is the 'atexit' module and how does it relate to 'with'?",shortAnswer:"'atexit' registers functions to run at exit; not directly related to 'with'.",explanation:"'with' provides immediate cleanup; 'atexit' is for program exit.",hint:"Different use cases.",level:"advanced",codeExample:null},{question:"How does the 'with' statement handle exceptions in __enter__?",shortAnswer:"If __enter__ raises an exception, it propagates without calling __exit__.",explanation:"The resource was never acquired, so no cleanup needed.",hint:"Think about it.",level:"advanced",codeExample:null},{question:"Can you use 'with' with a context manager that returns a different type?",shortAnswer:"Yes, __enter__ can return any object, not just the context manager.",explanation:"It's often the resource itself (like a file object).",hint:"The returned object is assigned with 'as'.",level:"advanced",codeExample:null}],v=()=>{const n=l.useRef([]);l.useEffect(()=>{const s=new IntersectionObserver(a=>{a.forEach(i=>{i.isIntersecting&&i.target.classList.add("section-visible")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});return n.current.forEach(a=>{a&&s.observe(a)}),()=>s.disconnect()},[]);const t=s=>{s&&!n.current.includes(s)&&n.current.push(s)};return e.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 p-6 md:p-8 lg:p-12 font-sans leading-relaxed",children:[e.jsxs("header",{ref:t,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-gray-200 dark:border-gray-800",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-sm font-mono bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full",children:"Topic 12"}),e.jsx("span",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:"Core"})]}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight",children:"Using `with open() as file`"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 mt-3 max-w-3xl",children:"The Pythonic way to handle files: safe, concise, and automatic cleanup."}),e.jsxs("div",{className:"flex flex-wrap gap-3 mt-4",children:[e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"🔄 with"}),e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"📦 Context Manager"}),e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"🔒 Automatic Close"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🔄"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"The `with` Statement"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["The ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"with"})," statement in Python is a ",e.jsx("strong",{children:"context manager"})," that simplifies resource management. For files, it ensures that the file is",e.jsx("strong",{children:"automatically closed"})," when the block of code finishes — even if an exception occurs."]}),e.jsx("p",{children:e.jsx("strong",{children:"Basic syntax:"})}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm",children:e.jsxs("code",{className:"text-gray-800 dark:text-gray-200",children:["with open('file.txt', 'r') as file:",e.jsx("br",{}),"content = file.read()",e.jsx("br",{}),"# 'file' is automatically closed here"]})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Safe:"})," Guarantees cleanup, even with exceptions."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Readable:"})," Clearly indicates the resource's scope."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Pythonic:"})," The preferred way to handle files and other resources (locks, network connections, etc.)."]})]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-4 rounded-r-xl",children:[e.jsx("p",{className:"text-blue-700 dark:text-blue-300 font-medium",children:"💡 Key Insight:"}),e.jsxs("p",{className:"text-blue-600 dark:text-blue-400 text-sm",children:["The ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"with"})," statement is ",e.jsx("em",{children:"syntactic sugar"})," for ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"try‑finally"}),", but more concise and less error‑prone."]})]})]}),e.jsxs("div",{className:"mt-8 bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700",children:[e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{viewBox:"0 0 700 180",className:"w-full max-w-3xl h-auto",children:[e.jsx("text",{x:"350",y:"25",textAnchor:"middle",fill:"#6B7280",fontSize:"14",children:"How `with` Works"}),e.jsx("rect",{x:"50",y:"40",width:"600",height:"120",rx:"12",fill:"#3B82F6",fillOpacity:"0.05",stroke:"#3B82F6",strokeWidth:"1.5"}),e.jsx("text",{x:"350",y:"70",textAnchor:"middle",fill:"#60A5FA",fontSize:"15",children:"with open('file.txt', 'r') as f:"}),e.jsx("rect",{x:"80",y:"85",width:"540",height:"30",rx:"6",fill:"#10B981",fillOpacity:"0.1",stroke:"#10B981",strokeWidth:"1.5"}),e.jsx("text",{x:"350",y:"105",textAnchor:"middle",fill:"#34D399",fontSize:"14",children:"    content = f.read()  # work with file"}),e.jsx("text",{x:"350",y:"140",textAnchor:"middle",fill:"#F87171",fontSize:"14",children:"← File automatically closed here"}),e.jsx("line",{x1:"200",y1:"145",x2:"350",y2:"140",stroke:"#EF4444",strokeWidth:"2",strokeDasharray:"4 4"}),e.jsx("line",{x1:"500",y1:"145",x2:"350",y2:"140",stroke:"#EF4444",strokeWidth:"2",strokeDasharray:"4 4"}),e.jsx("text",{x:"350",y:"170",textAnchor:"middle",fill:"#6B7280",fontSize:"12",children:"Even if an exception occurs, the file is closed"})]})}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-3",children:"The `with` block guarantees the file is closed when the block exits."})]})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-100",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📦"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"The Context Manager Protocol"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["The ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"with"})," statement works with objects that implement the ",e.jsx("strong",{children:"context manager protocol"}),", which consists of two methods:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"__enter__()"})," — Called when entering the `with` block. Returns the resource (e.g., file object)."]}),e.jsxs("li",{children:[e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"__exit__()"})," — Called when exiting the `with` block. Handles cleanup (e.g., closing the file)."]})]}),e.jsxs("p",{children:["When you write ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"with open('file.txt') as f"}),", Python calls ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"open()"}),", which returns a file object that has ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"__enter__()"})," and",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"__exit__()"})," methods.",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"__exit__()"})," calls",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"close()"}),"."]})]}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-950/20 rounded-xl p-4 border border-yellow-200 dark:border-yellow-800/50 mt-4",children:e.jsxs("p",{className:"text-yellow-700 dark:text-yellow-300 text-sm",children:["💡 ",e.jsx("strong",{children:"Note:"})," You don't need to implement these methods yourself for files — they are already built in. But you can create your own context managers for other resources."]})})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-200",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"⚖️"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"`with` vs Manual `close()`"})]}),e.jsx("div",{className:"overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-800",children:[e.jsx("thead",{className:"bg-gray-100 dark:bg-gray-800/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Aspect"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Manual close()"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"with statement"})]})}),e.jsxs("tbody",{className:"bg-white dark:bg-gray-900/50 divide-y divide-gray-200 dark:divide-gray-800 text-gray-700 dark:text-gray-300",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-medium",children:"Guaranteed closure"}),e.jsx("td",{className:"px-6 py-4",children:"❌ Only if you remember"}),e.jsx("td",{className:"px-6 py-4",children:"✅ Always"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-medium",children:"Exception safety"}),e.jsx("td",{className:"px-6 py-4",children:"❌ Requires try-finally"}),e.jsx("td",{className:"px-6 py-4",children:"✅ Built-in"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-medium",children:"Readability"}),e.jsx("td",{className:"px-6 py-4",children:"Less clear"}),e.jsx("td",{className:"px-6 py-4",children:"More readable"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-medium",children:"Scope"}),e.jsx("td",{className:"px-6 py-4",children:"File object persists"}),e.jsx("td",{className:"px-6 py-4",children:"File object scoped to block"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-medium",children:"Recommended"}),e.jsx("td",{className:"px-6 py-4",children:"❌ Only for special cases"}),e.jsx("td",{className:"px-6 py-4",children:"✅ Always"})]})]})]})}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-2 text-center",children:"The `with` statement is safer, cleaner, and more Pythonic."})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📚"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Handling Multiple Files"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["You can open multiple files in a single ",e.jsx("code",{children:"with"}),"statement:"]}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm",children:e.jsxs("code",{className:"text-gray-800 dark:text-gray-200",children:["with open('input.txt', 'r') as src, open('output.txt', 'w') as dst:",e.jsx("br",{}),"dst.write(src.read())",e.jsx("br",{}),"# Both files are closed automatically"]})}),e.jsx("p",{children:"This is a common pattern for copying files or transforming data."}),e.jsxs("p",{children:["Alternatively, you can nest ",e.jsx("code",{children:"with"})," statements for clarity, especially when the files have different purposes."]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🛡️"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Exception Handling with `with`"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["The ",e.jsx("code",{children:"with"})," statement automatically handles exceptions gracefully. If an exception occurs inside the block, the file is still closed before the exception propagates."]}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm",children:e.jsxs("code",{className:"text-gray-800 dark:text-gray-200",children:["try:",e.jsx("br",{}),"with open('data.txt', 'r') as f:",e.jsx("br",{}),"data = f.read()",e.jsx("br",{}),"# This exception doesn't prevent closing",e.jsx("br",{}),'raise ValueError("Simulated error")',e.jsx("br",{}),"except ValueError:",e.jsx("br",{}),'print("Exception caught; file was already closed.")']})}),e.jsxs("p",{children:["This is why ",e.jsx("code",{children:"with"})," is so powerful — it ensures resources are released even in the face of errors."]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🌍"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Real-World Scenarios"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"bg-blue-50 dark:bg-blue-950/30 rounded-xl p-6 border border-blue-200 dark:border-blue-800/50 transition-all duration-300 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"🏫"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"School Attendance System"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:["The school in Shyamnagar uses a script to record attendance daily. It opens a CSV file with ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"with"}),", appends today's records, and automatically closes — even if the network goes down during the operation."]})]})]})}),e.jsx("div",{className:"bg-purple-50 dark:bg-purple-950/30 rounded-xl p-6 border border-purple-200 dark:border-purple-800/50 transition-all duration-300 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Data Processing Pipeline"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:["A data processing script in Naihati reads a large CSV, transforms it, and writes a new file. Using ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"with"}),"for both input and output ensures both files are closed, preventing resource leaks in a long‑running pipeline."]})]})]})}),e.jsx("div",{className:"bg-green-50 dark:bg-green-950/30 rounded-xl p-6 border border-green-200 dark:border-green-800/50 transition-all duration-300 hover:shadow-lg hover:border-green-300 dark:hover:border-green-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"📱"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Mobile App Config Loader"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:["A mobile app in Barrackpore loads its configuration from a JSON file. The app uses ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"with"}),"to read the file; if the file is corrupt, the app catches the exception, but the file is still closed, preventing stale handles."]})]})]})})]})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🐍"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Python in Action"})]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 text-lg mb-6",children:["The following examples demonstrate various uses of ",e.jsx("code",{children:"with"}),"with files."]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(r,{fileModule:c,title:"Basic with open() Usage",highlightLines:[]}),e.jsx(r,{fileModule:p,title:"Comparison: Without vs With",highlightLines:[]}),e.jsx(r,{fileModule:h,title:"Multiple Files with with",highlightLines:[]}),e.jsx(r,{fileModule:x,title:"Exception Handling with with",highlightLines:[]}),e.jsx(r,{fileModule:m,title:"Custom Context Manager (Advanced)",highlightLines:[]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"💡"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Tips & Tricks"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{title:"Always use `with` for files",desc:"It's the single most important best practice for file I/O."},{title:"Combine with `try-except` for error handling",desc:"Wrap the `with` block in try-except to catch file errors."},{title:"Use `with` for other resources too",desc:"Locks, database connections, and network sockets all support it."},{title:"Keep the `with` block as short as possible",desc:"Only include the code that needs the file; close it as soon as possible."},{title:"Use `pathlib` with `with`",desc:"`Path('file.txt').open('r') as f:` works seamlessly."},{title:"Nest `with` for clarity with multiple files",desc:"Nested `with` statements are more readable than long comma‑separated ones."}].map((s,a)=>e.jsxs("div",{className:"bg-amber-50 dark:bg-amber-950/20 rounded-xl p-5 border border-amber-200 dark:border-amber-800/50 transition-all duration-300 hover:shadow-lg hover:border-amber-300 dark:hover:border-amber-600 hover:-translate-y-1",children:[e.jsxs("h4",{className:"font-semibold text-gray-900 dark:text-white flex items-start gap-2",children:[e.jsx("span",{className:"text-amber-500",children:"✦"})," ",s.title]}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 mt-1",children:s.desc})]},a))})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Common Mistakes"})]}),e.jsx("div",{className:"space-y-3",children:[{mistake:"Using `with` but still calling `close()` explicitly",fix:"It's redundant; `with` already closes the file."},{mistake:"Trying to use the file object outside the `with` block",fix:"The file object is closed and cannot be used outside; keep it inside."},{mistake:"Forgetting the `as` clause",fix:"You need `as variable` to access the file object."},{mistake:"Using `with` with a variable that is not a context manager",fix:"Only objects that implement `__enter__/__exit__` work with `with`."},{mistake:"Opening files without `with` and relying on garbage collection",fix:"Always use `with` for deterministic cleanup."}].map((s,a)=>e.jsx("div",{className:"bg-red-50 dark:bg-red-950/20 rounded-xl p-5 border border-red-200 dark:border-red-800/50 transition-all duration-300 hover:shadow-lg hover:border-red-300 dark:hover:border-red-600",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-red-500 text-lg",children:"✗"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-gray-800 dark:text-gray-200 font-medium",children:s.mistake}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:["✓ ",s.fix]})]})]})},a))})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Best Practices"})]}),e.jsx("div",{className:"bg-emerald-50 dark:bg-emerald-950/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/50 transition-all duration-300 hover:shadow-lg hover:border-emerald-300 dark:hover:border-emerald-600",children:e.jsxs("ul",{className:"space-y-3 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Always use `with` for file operations:"})," ","This is non‑negotiable in professional code."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Keep the `with` block focused:"})," ","Only include the code that needs the open file."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Handle exceptions around `with`:"})," ","Wrap in try‑except to catch file‑specific errors."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Use multiple `with` for clarity:"})," ","For multiple files, use separate `with` statements if it improves readability."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Extend `with` to other resources:"})," ","Apply the same pattern to database connections, network sockets, etc."]})]})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📋"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Mini Checklist"})]}),e.jsxs("div",{className:"bg-indigo-50 dark:bg-indigo-950/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800/50 transition-all duration-300 hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-600",children:[e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"By the end of this topic, you should understand:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:["The `with` statement and its purpose","How `with` automatically closes files","The context manager protocol: `__enter__` and `__exit__`","How to open multiple files with `with`","Exception handling with `with`","Why `with` is preferred over manual `close()`","Best practices for using `with`"].map((s,a)=>e.jsxs("div",{className:"flex items-center gap-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900/50 px-4 py-2 rounded-lg",children:[e.jsx("span",{className:"text-indigo-400",children:"☐"}),e.jsx("span",{className:"text-sm",children:s})]},a))})]})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🤔"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Think About…"})]}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-950/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800/50 transition-all duration-300 hover:shadow-lg hover:border-yellow-300 dark:hover:border-yellow-600",children:e.jsxs("div",{className:"space-y-4 text-gray-700 dark:text-gray-300",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Observe carefully:"})," ","What happens if you try to use the file variable after the `with` block ends? Try to read from it."]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Try changing this:"})," ","Write a `with` block that opens a file, then deliberately raises an exception inside. Check if the file is closed by trying to open it again outside the block."]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Think about:"})," ","Why is `with` considered more Pythonic than `try‑finally` for resource management? What does it improve?"]})]})]})})]}),e.jsx("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:e.jsx(o,{title:"Using with open() – FAQs",questions:f})}),e.jsx("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:e.jsx(d,{note:"The `with` statement is the cornerstone of Pythonic file handling. Students must understand that it's not optional — it's the standard. Show them the alternative (manual close with try‑finally) and compare the verbosity. The 'scope' concept is important: the file object is limited to the `with` block, which prevents accidental misuse. Emphasize that `with` works for any context manager, not just files, which makes it a universal pattern. Use examples with locks and database connections to reinforce the pattern."})}),e.jsxs("footer",{className:"pt-8 mt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400",children:[e.jsx("p",{children:"Topic 12: Using `with open() as file` · Built with ❤️ for classroom learning"}),e.jsx("p",{className:"mt-1",children:"Next: Topic 13 — Reading Files using read()"})]})]}),e.jsx("style",{children:`
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
