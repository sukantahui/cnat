import{r as l,j as e}from"./index-BvEfGfTn.js";import{P as n}from"./PythonFileLoader-Ccpz1WCx.js";import{F as o}from"./FAQTemplate-DLwClWsT.js";import{T as d}from"./TeacherSukantaHui-BQBwwJWN.js";import"./PythonCodeBlock-DsjVDkeA.js";import"./prism-D96f-id0.js";import"./browser-Dy9von7W.js";import"./clsx-B-dksMZM.js";import"./git-branch-Do_ZG0BN.js";const c=`# manual_close.py\r
# Demonstrates manual file closing with close()\r
\r
import os\r
\r
def manual_close_example():\r
    """Show manual file closing (the risky way)."""\r
    filename = "manual_demo.txt"\r
\r
    # Open file manually\r
    f = open(filename, 'w', encoding='utf-8')\r
    f.write("This is written manually.\\n")\r
    f.write("We must remember to close the file.\\n")\r
\r
    # Close manually\r
    f.close()\r
    print("✅ File closed manually.")\r
\r
    # Check if it's closed\r
    print(f"   f.closed = {f.closed}")\r
\r
    # Try to read the file\r
    with open(filename, 'r', encoding='utf-8') as read_f:\r
        content = read_f.read()\r
    print(f"📄 File content:\\n{content}")\r
\r
    # Clean up\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")\r
\r
def risky_manual_close():\r
    """Show what happens if you forget to close."""\r
    print("\\n🔴 Risky: Forgetting to close")\r
    filename = "risky_demo.txt"\r
\r
    # Open file but DON'T close it\r
    f = open(filename, 'w', encoding='utf-8')\r
    f.write("This file is not closed!\\n")\r
    # f.close() is MISSING!\r
\r
    # The file object is still open\r
    print(f"   f.closed = {f.closed} (still open!)")\r
\r
    # In a real program, this would leak a file descriptor\r
    # We'll clean up properly here\r
    f.close()\r
    os.remove(filename)\r
    print("   (Cleaned up manually)")\r
\r
if __name__ == "__main__":\r
    manual_close_example()\r
    risky_manual_close()\r
    print("🧹 All cleaned up.")`,h=`# automatic_close.py\r
# Demonstrates automatic closing with try-finally\r
\r
import os\r
\r
def try_finally_close():\r
    """Use try-finally to ensure file is closed."""\r
    filename = "try_finally_demo.txt"\r
\r
    f = None\r
    try:\r
        f = open(filename, 'w', encoding='utf-8')\r
        f.write("This is written with try-finally.\\n")\r
        # Simulate an exception\r
        # raise ValueError("Something went wrong!")\r
    finally:\r
        if f is not None:\r
            f.close()\r
            print("✅ File closed in finally block.")\r
        else:\r
            print("   File was never opened.")\r
\r
    # Check if it's closed\r
    try:\r
        print(f"   f.closed = {f.closed} (if f exists)")\r
    except UnboundLocalError:\r
        print("   f was never assigned.")\r
\r
    # Clean up\r
    if os.path.exists(filename):\r
        with open(filename, 'r', encoding='utf-8') as read_f:\r
            content = read_f.read()\r
        print(f"📄 File content:\\n{content}")\r
        os.remove(filename)\r
        print("🧹 Cleaned up.")\r
\r
def exception_demo():\r
    """Show that file is closed even when an exception occurs."""\r
    filename = "exception_demo.txt"\r
\r
    try:\r
        f = open(filename, 'w', encoding='utf-8')\r
        f.write("This will be written, then exception is raised.\\n")\r
        raise RuntimeError("Simulated error!")\r
    except RuntimeError:\r
        print("❌ Exception caught! File may still be open.")\r
        # In a real program, we should close in finally\r
    finally:\r
        try:\r
            f.close()\r
            print("✅ File closed in finally.")\r
        except UnboundLocalError:\r
            pass\r
\r
    # Clean up\r
    if os.path.exists(filename):\r
        os.remove(filename)\r
        print("🧹 Cleaned up.")\r
\r
if __name__ == "__main__":\r
    try_finally_close()\r
    print()\r
    exception_demo()`,x=`# context_manager.py\r
# Demonstrates the with statement (context manager)\r
\r
import os\r
\r
def context_manager_example():\r
    """Use 'with' for automatic file closing."""\r
    filename = "context_demo.txt"\r
\r
    # with handles opening and closing automatically\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.write("Written with a context manager.\\n")\r
        f.write("The file will be closed automatically.\\n")\r
        # No need to call f.close()!\r
\r
    # After the with block, the file is closed\r
    print("✅ File automatically closed by context manager.")\r
    print(f"   (Note: f is not defined outside the with block)")\r
\r
    # Read the file\r
    with open(filename, 'r', encoding='utf-8') as read_f:\r
        content = read_f.read()\r
    print(f"📄 File content:\\n{content}")\r
\r
    # Clean up\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")\r
\r
def exception_in_with():\r
    """Show that with closes files even with exceptions."""\r
    filename = "exception_with.txt"\r
\r
    try:\r
        with open(filename, 'w', encoding='utf-8') as f:\r
            f.write("This is written before the exception.\\n")\r
            raise ValueError("Simulated error inside with!")\r
    except ValueError:\r
        print("❌ Exception caught.")\r
        print("✅ File was still closed automatically.")\r
\r
    # The file should have been closed\r
    # The with block ensures it\r
\r
    # Clean up\r
    if os.path.exists(filename):\r
        os.remove(filename)\r
        print("🧹 Cleaned up.")\r
\r
if __name__ == "__main__":\r
    context_manager_example()\r
    print()\r
    exception_in_with()`,m=`# with_multiple_files.py\r
# Demonstrates managing multiple files with with\r
\r
import os\r
\r
def multiple_files_single_with():\r
    """Open multiple files in a single with statement."""\r
    print("🔹 Multiple files in one with:")\r
\r
    with open('src.txt', 'w', encoding='utf-8') as src, \\\r
         open('dst.txt', 'w', encoding='utf-8') as dst:\r
        src.write("This is the source content.\\n")\r
        dst.write("This will be overwritten.\\n")\r
\r
    print("✅ Both files written.")\r
\r
    # Both files are automatically closed\r
\r
def multiple_files_nested():\r
    """Open multiple files using nested with statements."""\r
    print("\\n🔹 Nested with statements:")\r
\r
    with open('src.txt', 'r', encoding='utf-8') as src:\r
        content = src.read()\r
        print(f"   Source content: {content.strip()}")\r
\r
        with open('dst.txt', 'w', encoding='utf-8') as dst:\r
            dst.write(f"Copied: {content}")\r
\r
    print("✅ Both files closed (nested).")\r
\r
def copy_file_example():\r
    """Copy a file using with for both files."""\r
    print("\\n🔹 Copying file with with:")\r
\r
    # Create a source file\r
    with open('source.txt', 'w', encoding='utf-8') as f:\r
        f.write("Line 1: Hello Swadeep\\n")\r
        f.write("Line 2: Hello Tuhina\\n")\r
        f.write("Line 3: Hello Abhronila\\n")\r
\r
    # Copy it\r
    with open('source.txt', 'r', encoding='utf-8') as src, \\\r
         open('copy.txt', 'w', encoding='utf-8') as dst:\r
        for line in src:\r
            dst.write(line)\r
\r
    print("✅ File copied successfully.")\r
\r
    # Verify\r
    with open('copy.txt', 'r', encoding='utf-8') as f:\r
        content = f.read()\r
    print(f"📄 Copy content:\\n{content}")\r
\r
    # Clean up\r
    for fname in ['src.txt', 'dst.txt', 'source.txt', 'copy.txt']:\r
        if os.path.exists(fname):\r
            os.remove(fname)\r
    print("🧹 Cleaned up.")\r
\r
if __name__ == "__main__":\r
    multiple_files_single_with()\r
    multiple_files_nested()\r
    copy_file_example()`,p=`# close_errors.py\r
# Demonstrates errors related to closing files\r
\r
import os\r
\r
def error_on_closed_file():\r
    """Show what happens when you use a closed file."""\r
    print("🔴 Error: Using a closed file")\r
\r
    f = open('closed_demo.txt', 'w', encoding='utf-8')\r
    f.write("This will be written.\\n")\r
    f.close()\r
\r
    # f is closed; trying to use it raises ValueError\r
    try:\r
        f.write("This will fail!\\n")\r
    except ValueError as e:\r
        print(f"   ❌ ValueError: {e}")\r
\r
    # Reading from a closed file also raises ValueError\r
    try:\r
        content = f.read()\r
    except ValueError as e:\r
        print(f"   ❌ ValueError: {e}")\r
\r
    # Check if file exists\r
    if os.path.exists('closed_demo.txt'):\r
        os.remove('closed_demo.txt')\r
        print("🧹 Cleaned up.")\r
\r
def safe_use_with_closed_check():\r
    """Safely check if a file is closed before using it."""\r
    print("\\n✅ Safe: Checking \`closed\` before use")\r
\r
    f = open('safe_demo.txt', 'w', encoding='utf-8')\r
    f.write("Writing...\\n")\r
\r
    if not f.closed:\r
        print("   File is open, writing more...")\r
        f.write("More data.\\n")\r
\r
    f.close()\r
\r
    # Now check before using\r
    if not f.closed:\r
        f.write("This won't run.\\n")\r
    else:\r
        print("   File is closed, skipping operation.")\r
\r
    # Clean up\r
    if os.path.exists('safe_demo.txt'):\r
        os.remove('safe_demo.txt')\r
        print("🧹 Cleaned up.")\r
\r
def closing_already_closed():\r
    """Closing a file that's already closed is safe."""\r
    print("\\n🔵 Safe: Closing an already closed file")\r
\r
    f = open('double_close.txt', 'w', encoding='utf-8')\r
    f.write("Data\\n")\r
    f.close()\r
\r
    # Closing again is harmless\r
    f.close()\r
    print("   ✅ Called close() twice - safe.")\r
\r
    if os.path.exists('double_close.txt'):\r
        os.remove('double_close.txt')\r
        print("🧹 Cleaned up.")\r
\r
if __name__ == "__main__":\r
    error_on_closed_file()\r
    safe_use_with_closed_check()\r
    closing_already_closed()`,f=[{question:"Why is it important to close files in Python?",shortAnswer:"To release system resources and flush buffered data to disk.",explanation:"Open files consume file descriptors, which are limited. Not closing can cause resource leaks.",hint:"Think of it as closing a book when you're done reading.",level:"basic",codeExample:null},{question:"What does the `close()` method do?",shortAnswer:"Flushes the buffer and releases the file descriptor.",explanation:"After closing, the file object cannot be used for I/O.",hint:"It's the final cleanup step.",level:"basic",codeExample:"f.close()"},{question:"What is the `with` statement used for?",shortAnswer:"It's a context manager that automatically closes the file when the block exits.",explanation:"It ensures the file is closed even if an exception occurs.",hint:"The Pythonic way to handle files.",level:"intermediate",codeExample:"with open('file.txt') as f: data = f.read()"},{question:"What happens if you don't close a file?",shortAnswer:"The file descriptor is leaked, potentially causing resource exhaustion.",explanation:"In long-running applications, this can lead to 'too many open files' errors.",hint:"It's a resource leak.",level:"intermediate",codeExample:null},{question:"What error is raised when you use a closed file?",shortAnswer:"ValueError.",explanation:"The error message says 'I/O operation on closed file'.",hint:"Check `f.closed` before operations.",level:"intermediate",codeExample:"f = open('file.txt'); f.close(); f.read()  # ValueError"},{question:"How can you check if a file is already closed?",shortAnswer:"Using the `closed` attribute: `f.closed`.",explanation:"It returns True if the file is closed, False otherwise.",hint:"Always check before operations.",level:"basic",codeExample:"if not f.closed: f.read()"},{question:"Is closing a file twice safe?",shortAnswer:"Yes, calling close() on an already closed file does nothing.",explanation:"It's idempotent; no error is raised.",hint:"No harm done.",level:"intermediate",codeExample:"f.close(); f.close()  # safe"},{question:"What is the difference between `with` and `try-finally` for closing?",shortAnswer:"`with` is more concise and Pythonic; `try-finally` is more explicit.",explanation:"Both ensure the file is closed. `with` is preferred for readability.",hint:"Use `with` for simplicity.",level:"intermediate",codeExample:null},{question:"Can you use a file object after the `with` block ends?",shortAnswer:"No, the file object is closed and cannot be used.",explanation:"The `with` block limits the scope of the file object.",hint:"The file object is not accessible outside the block.",level:"intermediate",codeExample:"with open('file.txt') as f: data = f.read(); # f is closed here"},{question:"What is a file descriptor?",shortAnswer:"A low-level integer handle used by the OS to identify an open file.",explanation:"Python's file object wraps a file descriptor.",hint:"It's the OS's way of tracking open files.",level:"advanced",codeExample:"f.fileno()"},{question:"What is the 'too many open files' error?",shortAnswer:"An OS-level error when the process exceeds the maximum open file descriptors.",explanation:"This happens when files are not closed properly.",hint:"It's a classic symptom of resource leaks.",level:"advanced",codeExample:null},{question:"Does Python automatically close files when the program exits?",shortAnswer:"Yes, the interpreter closes open files on exit.",explanation:"But relying on this is bad practice; always close explicitly.",hint:"Don't rely on the interpreter to clean up.",level:"intermediate",codeExample:null},{question:"What is garbage collection and how does it relate to file closing?",shortAnswer:"GC automatically frees objects no longer in use, which may close files.",explanation:"But GC is not deterministic; you cannot rely on it for resource cleanup.",hint:"Use `with` for guaranteed cleanup.",level:"advanced",codeExample:null},{question:"Can you use `with` with multiple files?",shortAnswer:"Yes, using a single `with` with comma-separated open calls.",explanation:"Example: `with open('a') as f1, open('b') as f2:`.",hint:"Both files are closed automatically.",level:"intermediate",codeExample:"with open('src') as src, open('dst', 'w') as dst: dst.write(src.read())"},{question:"What happens if an exception occurs inside a `with` block?",shortAnswer:"The file is still closed before the exception propagates.",explanation:"The context manager's `__exit__` method is called, closing the file.",hint:"That's the main advantage of `with`.",level:"intermediate",codeExample:null},{question:"What is the `__exit__` method in a context manager?",shortAnswer:"It's called when the `with` block exits, handling cleanup.",explanation:"For file objects, `__exit__` calls `close()`.",hint:"It's the magic behind `with`.",level:"advanced",codeExample:null},{question:"Is it possible to close a file that was opened with `with` manually?",shortAnswer:"Yes, but it's unnecessary and redundant.",explanation:"The file is already closed when the `with` block exits.",hint:"You can call `f.close()` inside the block, but it's pointless.",level:"intermediate",codeExample:"with open('file.txt') as f: f.close()  # redundant"},{question:"What is the `flush()` method and how does it relate to closing?",shortAnswer:"`flush()` writes buffered data to disk without closing the file.",explanation:"Closing implicitly calls `flush()`.",hint:"`flush()` is like saving without closing.",level:"advanced",codeExample:"f.flush()"},{question:"Why might a file not be fully written when you close it?",shortAnswer:"It might if you close a file that wasn't properly flushed.",explanation:"But `close()` flushes, so data should be written.",hint:"Use `flush()` or `close()` to ensure writes.",level:"advanced",codeExample:null},{question:"What is the danger of relying on `__del__` for closing files?",shortAnswer:"`__del__` is not guaranteed to be called, and may not close in time.",explanation:"Resource cleanup should be explicit, not left to `__del__`.",hint:"Never rely on `__del__` for resource cleanup.",level:"advanced",codeExample:null},{question:"Can you reopen a closed file object?",shortAnswer:"No, you must call `open()` again.",explanation:"A closed file object is no longer valid.",hint:"Just open it again.",level:"basic",codeExample:"f = open('file.txt'); f.close(); f = open('file.txt')  # new object"},{question:"What is the recommended way to handle files in Python?",shortAnswer:"Using the `with` statement (context manager).",explanation:"It's safe, Pythonic, and automatically handles closing.",hint:"Always use `with open()`.",level:"basic",codeExample:"with open('file.txt') as f:"},{question:"Why is closing files important in web servers and long-running applications?",shortAnswer:"To prevent resource exhaustion over time.",explanation:"Leaked file descriptors accumulate and eventually crash the process.",hint:"It's a scalability issue.",level:"advanced",codeExample:null},{question:"What is the `os.close()` function and how is it different from `f.close()`?",shortAnswer:"`os.close(fd)` closes a file descriptor directly; `f.close()` closes a file object.",explanation:"Use `f.close()` for Python file objects.",hint:"`os.close()` is low-level.",level:"advanced",codeExample:"os.close(f.fileno())"},{question:"Can you close a file that was opened in another function?",shortAnswer:"Yes, if you have access to the file object.",explanation:"The file object can be passed between functions.",hint:"But it's better to use `with` to manage scope.",level:"intermediate",codeExample:"def close_file(f): f.close()"},{question:"What happens to the buffer when you close a file?",shortAnswer:"The buffer is flushed, writing any remaining data to disk.",explanation:"Closing ensures all data is persisted.",hint:"Flushing is part of closing.",level:"advanced",codeExample:null},{question:"What is the `atexit` module and how can it help with file closing?",shortAnswer:"It registers functions to run at program exit, helping with cleanup.",explanation:"Not needed with `with`, but can be used for legacy code.",hint:"Rarely needed.",level:"advanced",codeExample:"import atexit; atexit.register(f.close)"},{question:"Why is the `with` statement considered Pythonic?",shortAnswer:"It encapsulates resource management in a clean, readable syntax.",explanation:"It makes the intent clear and reduces boilerplate.",hint:"Python's philosophy: explicit is better than implicit.",level:"intermediate",codeExample:null},{question:"Can you use `with` with objects other than files?",shortAnswer:"Yes, any object that implements the context manager protocol.",explanation:"Common examples: locks, database connections, network sockets.",hint:"It's a general-purpose resource management pattern.",level:"advanced",codeExample:"with threading.Lock():"},{question:"What is the contextlib module?",shortAnswer:"It provides utilities for creating context managers.",explanation:"Use `contextlib.contextmanager` to create custom context managers.",hint:"Advanced topic for custom context managers.",level:"advanced",codeExample:"from contextlib import contextmanager"}],_=()=>{const a=l.useRef([]);l.useEffect(()=>{const s=new IntersectionObserver(r=>{r.forEach(i=>{i.isIntersecting&&i.target.classList.add("section-visible")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});return a.current.forEach(r=>{r&&s.observe(r)}),()=>s.disconnect()},[]);const t=s=>{s&&!a.current.includes(s)&&a.current.push(s)};return e.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 p-6 md:p-8 lg:p-12 font-sans leading-relaxed",children:[e.jsxs("header",{ref:t,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-gray-200 dark:border-gray-800",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-sm font-mono bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full",children:"Topic 11"}),e.jsx("span",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:"Core"})]}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight",children:"Closing Files"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 mt-3 max-w-3xl",children:"Why closing files matters, how to do it correctly, and how to avoid resource leaks."}),e.jsxs("div",{className:"flex flex-wrap gap-3 mt-4",children:[e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"🔒 close()"}),e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"🔄 with"}),e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"💾 Resource Management"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Why Do We Need to Close Files?"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["When you open a file in Python, the operating system allocates resources to manage that file — a ",e.jsx("strong",{children:"file descriptor"}),". These resources are limited, and if you don't close files, you can exhaust them."]}),e.jsx("p",{children:"Closing a file is important because:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Releases system resources:"})," ",'File descriptors are a finite resource. Leaking them can cause "too many open files" errors.']}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Flushes buffered data:"})," ","Python buffers writes for performance. Closing ensures all data is written to disk."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Prevents data corruption:"})," ","If a program crashes with open files, data in buffers may be lost."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Allows other programs to access the file:"})," ","On some systems, open files are locked and cannot be accessed by other processes."]})]}),e.jsxs("div",{className:"bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-4 rounded-r-xl",children:[e.jsx("p",{className:"text-red-700 dark:text-red-300 font-medium",children:"⚠️ Resource Leak Warning:"}),e.jsxs("p",{className:"text-red-600 dark:text-red-400 text-sm",children:["Not closing files is a ",e.jsx("strong",{children:"resource leak"}),". In long‑running applications (like web servers), this can crash the system."]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-100",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🔒"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"The `close()` Method"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["The ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"close()"})," method is called on a file object to release its resources."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Prototype:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"file.close()"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Return type:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"None"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Purpose:"})," Flushes the buffer and releases the file descriptor."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"When:"})," Call it when you're done with the file."]})]}),e.jsxs("p",{children:["After closing, any operation on the file object raises a",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"ValueError"}),"."]})]}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-950/20 rounded-xl p-4 border border-yellow-200 dark:border-yellow-800/50 mt-4",children:e.jsxs("p",{className:"text-yellow-700 dark:text-yellow-300 text-sm",children:["💡 ",e.jsx("strong",{children:"Best Practice:"})," Always check if the file is already closed using the ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"closed"})," attribute before calling",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"close()"}),"."]})})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-200",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"⚖️"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Manual vs Automatic Closing"})]}),e.jsx("div",{className:"overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-800",children:[e.jsx("thead",{className:"bg-gray-100 dark:bg-gray-800/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Approach"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Manual (`close()`)"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Automatic (`with`)"})]})}),e.jsxs("tbody",{className:"bg-white dark:bg-gray-900/50 divide-y divide-gray-200 dark:divide-gray-800 text-gray-700 dark:text-gray-300",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-medium",children:"Safety"}),e.jsx("td",{className:"px-6 py-4",children:"❌ Risk of forgetting"}),e.jsx("td",{className:"px-6 py-4",children:"✅ Guaranteed"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-medium",children:"Exception handling"}),e.jsx("td",{className:"px-6 py-4",children:"❌ File may stay open"}),e.jsx("td",{className:"px-6 py-4",children:"✅ Always closes"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-medium",children:"Code clarity"}),e.jsx("td",{className:"px-6 py-4",children:"Less clear"}),e.jsx("td",{className:"px-6 py-4",children:"More readable"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-medium",children:"Flexibility"}),e.jsx("td",{className:"px-6 py-4",children:"More control"}),e.jsx("td",{className:"px-6 py-4",children:"Less control"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-medium",children:"Recommended"}),e.jsx("td",{className:"px-6 py-4",children:"❌ Only for special cases"}),e.jsx("td",{className:"px-6 py-4",children:"✅ Always"})]})]})]})}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-2 text-center",children:"The `with` statement is the recommended way to handle files in Python."})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🔄"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"The `with` Statement (Context Manager)"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["The ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"with"})," statement is a ",e.jsx("strong",{children:"context manager"})," that automatically handles resource cleanup. When used with files, it ensures the file is closed when the block exits — even if an exception occurs."]}),e.jsx("p",{children:e.jsx("strong",{children:"Syntax:"})}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm",children:e.jsxs("code",{className:"text-gray-800 dark:text-gray-200",children:["with open('file.txt', 'r') as f:",e.jsx("br",{}),"content = f.read()",e.jsx("br",{}),"# File is automatically closed here"]})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Automatic:"})," No need to call `close()`."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Safe:"})," Even if an exception is raised, the file is closed."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Pythonic:"})," This is the idiomatic way to handle files in Python."]})]})]}),e.jsxs("div",{className:"mt-8 bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700",children:[e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{viewBox:"0 0 700 160",className:"w-full max-w-3xl h-auto",children:[e.jsx("text",{x:"175",y:"25",textAnchor:"middle",fill:"#6B7280",fontSize:"14",children:"Manual (risky)"}),e.jsx("text",{x:"525",y:"25",textAnchor:"middle",fill:"#6B7280",fontSize:"14",children:"with (safe)"}),e.jsx("rect",{x:"40",y:"45",width:"270",height:"90",rx:"10",fill:"#EF4444",fillOpacity:"0.08",stroke:"#EF4444",strokeWidth:"1.5"}),e.jsx("text",{x:"175",y:"70",textAnchor:"middle",fill:"#F87171",fontSize:"13",children:"f = open('file.txt')"}),e.jsx("text",{x:"175",y:"90",textAnchor:"middle",fill:"#F87171",fontSize:"13",children:"data = f.read()"}),e.jsx("text",{x:"175",y:"110",textAnchor:"middle",fill:"#F87171",fontSize:"13",children:"f.close()  # Must remember!"}),e.jsx("text",{x:"175",y:"130",textAnchor:"middle",fill:"#FCA5A5",fontSize:"11",children:"❌ Can be forgotten"}),e.jsx("rect",{x:"390",y:"45",width:"270",height:"90",rx:"10",fill:"#10B981",fillOpacity:"0.08",stroke:"#10B981",strokeWidth:"1.5",children:e.jsx("animate",{attributeName:"stroke-opacity",values:"0.4;0.8;0.4",dur:"3s",repeatCount:"indefinite"})}),e.jsx("text",{x:"525",y:"70",textAnchor:"middle",fill:"#34D399",fontSize:"13",children:"with open('file.txt') as f:"}),e.jsx("text",{x:"525",y:"90",textAnchor:"middle",fill:"#34D399",fontSize:"13",children:"    data = f.read()"}),e.jsx("text",{x:"525",y:"110",textAnchor:"middle",fill:"#34D399",fontSize:"13",children:"# Auto‑closed here"}),e.jsx("text",{x:"525",y:"130",textAnchor:"middle",fill:"#6EE7B7",fontSize:"11",children:"✅ Always safe"})]})}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-3",children:"The `with` statement guarantees the file is closed, even if an exception occurs."})]})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📚"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Closing Multiple Files"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["You can open and close multiple files in a single ",e.jsx("code",{children:"with"}),"statement:"]}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm",children:e.jsxs("code",{className:"text-gray-800 dark:text-gray-200",children:["with open('input.txt', 'r') as src, open('output.txt', 'w') as dst:",e.jsx("br",{}),"dst.write(src.read())",e.jsx("br",{}),"# Both files are closed automatically"]})}),e.jsxs("p",{children:["Alternatively, you can nest ",e.jsx("code",{children:"with"})," statements for clarity:"]}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm",children:e.jsxs("code",{className:"text-gray-800 dark:text-gray-200",children:["with open('input.txt', 'r') as src:",e.jsx("br",{}),"with open('output.txt', 'w') as dst:",e.jsx("br",{}),"dst.write(src.read())"]})})]})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🌍"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Real-World Scenarios"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"bg-blue-50 dark:bg-blue-950/30 rounded-xl p-6 border border-blue-200 dark:border-blue-800/50 transition-all duration-300 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"🏫"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"School Report Generator"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:["The school in Barrackpore generates reports every hour. A script opens a template, reads data, and writes the report. Using ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"with"})," ensures that files are closed even if the report generation fails, preventing resource leaks."]})]})]})}),e.jsx("div",{className:"bg-purple-50 dark:bg-purple-950/30 rounded-xl p-6 border border-purple-200 dark:border-purple-800/50 transition-all duration-300 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"🌐"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Web Server Log Rotation"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:["A web server in Shyamnagar writes access logs. When the log file reaches a certain size, it's rotated. The rotation script needs to close the current log file before renaming it. Using ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"with"}),"guarantees the file is closed before the rename operation."]})]})]})}),e.jsx("div",{className:"bg-green-50 dark:bg-green-950/30 rounded-xl p-6 border border-green-200 dark:border-green-800/50 transition-all duration-300 hover:shadow-lg hover:border-green-300 dark:hover:border-green-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"📱"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Mobile App Data Sync"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:["A mobile app in Naihati syncs data with a cloud service. During sync, it writes to a temporary file. If the sync fails, the file must be closed properly to avoid corruption. The ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"with"})," statement handles this automatically."]})]})]})})]})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🐍"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Python in Action"})]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 text-lg mb-6",children:"The following examples demonstrate various ways to close files."}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(n,{fileModule:c,title:"Manual close() – The Risky Way",highlightLines:[]}),e.jsx(n,{fileModule:h,title:"Automatic Closing – The Safe Way",highlightLines:[]}),e.jsx(n,{fileModule:x,title:"Context Manager – The Pythonic Way",highlightLines:[]}),e.jsx(n,{fileModule:m,title:"Managing Multiple Files",highlightLines:[]}),e.jsx(n,{fileModule:p,title:"Handling Errors with Files",highlightLines:[]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"💡"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Tips & Tricks"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{title:"Always use `with` for files",desc:"It's the safest and most Pythonic way to handle files."},{title:"Check `f.closed` before operations",desc:"Avoid `ValueError` by checking if the file is still open."},{title:"Files are closed when garbage‑collected",desc:"But relying on this is unreliable; always use `with`."},{title:"Use nested `with` for multiple files",desc:"It's clearer and ensures both files are closed."},{title:"Close files explicitly in exception handlers",desc:"If you must use manual close, use `try‑finally`."},{title:"Log file operations for debugging",desc:"Log when you open and close files to trace resource usage."}].map((s,r)=>e.jsxs("div",{className:"bg-amber-50 dark:bg-amber-950/20 rounded-xl p-5 border border-amber-200 dark:border-amber-800/50 transition-all duration-300 hover:shadow-lg hover:border-amber-300 dark:hover:border-amber-600 hover:-translate-y-1",children:[e.jsxs("h4",{className:"font-semibold text-gray-900 dark:text-white flex items-start gap-2",children:[e.jsx("span",{className:"text-amber-500",children:"✦"})," ",s.title]}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 mt-1",children:s.desc})]},r))})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Common Mistakes"})]}),e.jsx("div",{className:"space-y-3",children:[{mistake:"Forgetting to close files entirely",fix:"Use `with open()` to ensure automatic closure."},{mistake:"Not using `with` and relying on garbage collection",fix:"Garbage collection is not guaranteed; always close explicitly."},{mistake:"Trying to read from a closed file",fix:"Check `f.closed` before operations."},{mistake:"Closing a file that is already closed",fix:"Check `f.closed` before calling `close()`."},{mistake:"Not handling exceptions when closing",fix:"Use `with` or `try‑finally` to ensure closure."}].map((s,r)=>e.jsx("div",{className:"bg-red-50 dark:bg-red-950/20 rounded-xl p-5 border border-red-200 dark:border-red-800/50 transition-all duration-300 hover:shadow-lg hover:border-red-300 dark:hover:border-red-600",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-red-500 text-lg",children:"✗"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-gray-800 dark:text-gray-200 font-medium",children:s.mistake}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:["✓ ",s.fix]})]})]})},r))})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Best Practices"})]}),e.jsx("div",{className:"bg-emerald-50 dark:bg-emerald-950/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/50 transition-all duration-300 hover:shadow-lg hover:border-emerald-300 dark:hover:border-emerald-600",children:e.jsxs("ul",{className:"space-y-3 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Always use `with open()`:"})," ","This is the single most important best practice for file handling."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Never rely on garbage collection:"})," ","It's not deterministic and may not happen in time."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Use `try‑finally` if manual close is unavoidable:"})," ","Ensures closure even in exceptional cases."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Check `f.closed` before operations:"})," ","Prevents errors when working with file objects."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Monitor file descriptor usage:"})," ","In long‑running applications, log file opens/closes to detect leaks."]})]})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📋"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Mini Checklist"})]}),e.jsxs("div",{className:"bg-indigo-50 dark:bg-indigo-950/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800/50 transition-all duration-300 hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-600",children:[e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"By the end of this topic, you should understand:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:["Why closing files is important (resource leaks)","The `close()` method and its effects","The `with` statement and how it works","The difference between manual and automatic closing","How to handle multiple files with `with`","Common pitfalls and how to avoid them","Best practices for resource management"].map((s,r)=>e.jsxs("div",{className:"flex items-center gap-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900/50 px-4 py-2 rounded-lg",children:[e.jsx("span",{className:"text-indigo-400",children:"☐"}),e.jsx("span",{className:"text-sm",children:s})]},r))})]})]}),e.jsxs("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🤔"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Think About…"})]}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-950/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800/50 transition-all duration-300 hover:shadow-lg hover:border-yellow-300 dark:hover:border-yellow-600",children:e.jsxs("div",{className:"space-y-4 text-gray-700 dark:text-gray-300",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Observe carefully:"})," ","What happens to a file object after it's closed? Try calling `f.read()` after `f.close()`. What error do you get?"]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Try changing this:"})," ","Write a script that opens a file with `with`, but intentionally raises an exception inside the block. Is the file still closed?"]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Think about:"})," ","A web server handles thousands of requests. Each request opens a log file. Why is it critical that each file is closed promptly? What happens if files are not closed?"]})]})]})})]}),e.jsx("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:e.jsx(o,{title:"Closing Files – FAQs",questions:f})}),e.jsx("section",{ref:t,className:"section-hidden transition-all duration-700 ease-out delay-300",children:e.jsx(d,{note:"Closing files is a fundamental discipline that students must internalize. Use the analogy of a book: you open it to read, but you close it when you're done. The `with` statement is like having a librarian who automatically puts the book back. Emphasize that resource leaks are serious — in web servers, they can crash the entire system. Drill the `with` pattern until it becomes automatic. Show them the 'too many open files' error to make the consequences real."})}),e.jsxs("footer",{className:"pt-8 mt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400",children:[e.jsx("p",{children:"Topic 11: Closing Files · Built with ❤️ for classroom learning"}),e.jsx("p",{className:"mt-1",children:"Next: Topic 12 — Using with open() as file"})]})]}),e.jsx("style",{children:`
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
      `})]})};export{_ as default};
