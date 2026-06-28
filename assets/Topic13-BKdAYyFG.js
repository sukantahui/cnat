import{r as l,j as e}from"./index-DlQhRwac.js";import{P as a}from"./PythonFileLoader-DlixUow-.js";import{F as o}from"./FAQTemplate-Dd-OzPva.js";import{T as d}from"./TeacherSukantaHui-oAfgzdyj.js";import"./PythonCodeBlock-630k8RbD.js";import"./prism-DOs7RmKt.js";import"./browser-BVlc5g3G.js";import"./clsx-B-dksMZM.js";import"./git-branch-DB-sdnF9.js";const c=`# read_full.py\r
# Demonstrates reading the entire file with read()\r
\r
import os\r
\r
def create_sample_file(filename="sample.txt"):\r
    """Create a small sample file."""\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.write("Line 1: Hello Swadeep\\n")\r
        f.write("Line 2: Hello Tuhina\\n")\r
        f.write("Line 3: Hello Abhronila\\n")\r
        f.write("Line 4: Hello Debangshu\\n")\r
    print(f"✅ Created sample file: {filename}")\r
\r
def read_entire_file(filename):\r
    """Read the entire file and display its content."""\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        content = f.read()\r
    print(f"📄 Content of '{filename}' ({len(content)} characters):")\r
    print(content)\r
    print(f"   Type: {type(content)}")\r
\r
def read_empty_file():\r
    """Read an empty file."""\r
    filename = "empty.txt"\r
    open(filename, 'w').close()  # Create empty file\r
\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        content = f.read()\r
    print(f"\\n📄 Empty file: '{content}' (length {len(content)})")\r
    os.remove(filename)\r
\r
if __name__ == "__main__":\r
    create_sample_file()\r
    read_entire_file("sample.txt")\r
    read_empty_file()\r
    os.remove("sample.txt")\r
    print("🧹 Cleaned up.")`,h=`# read_chunk.py\r
# Demonstrates reading a file in chunks\r
\r
import os\r
\r
def create_large_file(filename="large.txt", lines=1000):\r
    """Create a moderately large text file."""\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        for i in range(lines):\r
            f.write(f"Line {i}: Some content for testing.\\n")\r
    print(f"✅ Created file with {lines} lines: {filename}")\r
\r
def read_in_chunks(filename, chunk_size=1024):\r
    """Read a file in fixed-size chunks."""\r
    print(f"\\n📖 Reading '{filename}' in chunks of {chunk_size} characters:")\r
    total_chunks = 0\r
    total_chars = 0\r
\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        while True:\r
            chunk = f.read(chunk_size)\r
            if not chunk:  # EOF\r
                break\r
            total_chunks += 1\r
            total_chars += len(chunk)\r
            # In a real program, you would process the chunk here\r
            # print(f"   Chunk {total_chunks}: {len(chunk)} chars")\r
\r
    print(f"   Read {total_chunks} chunks, {total_chars} total characters")\r
\r
def count_lines_in_chunks(filename, chunk_size=2048):\r
    """Count lines by reading chunks and counting newlines."""\r
    line_count = 0\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        while True:\r
            chunk = f.read(chunk_size)\r
            if not chunk:\r
                break\r
            line_count += chunk.count('\\n')\r
    print(f"   Line count: {line_count} (from chunk reading)")\r
\r
if __name__ == "__main__":\r
    create_large_file(lines=500)\r
    read_in_chunks("large.txt")\r
    count_lines_in_chunks("large.txt")\r
    os.remove("large.txt")\r
    print("🧹 Cleaned up.")`,m=`# read_binary.py\r
# Demonstrates reading binary files\r
\r
import os\r
import struct\r
\r
def create_binary_file(filename="data.bin"):\r
    """Create a simple binary file with structured data."""\r
    with open(filename, 'wb') as f:\r
        # Write some bytes\r
        f.write(b'\\x00\\x01\\x02\\x03\\x04\\x05')\r
        # Write an integer (4 bytes)\r
        f.write(struct.pack('i', 42))\r
        # Write a float (4 bytes)\r
        f.write(struct.pack('f', 3.14159))\r
        # Write a string as bytes\r
        f.write(b'Hello\\x00World')\r
    print(f"✅ Created binary file: {filename}")\r
\r
def read_binary_file(filename):\r
    """Read the entire binary file and display its contents."""\r
    with open(filename, 'rb') as f:\r
        data = f.read()\r
    print(f"📄 Binary content of '{filename}' ({len(data)} bytes):")\r
    print(f"   Hex: {data.hex()}")\r
    print(f"   Repr: {data[:20]}...")\r
\r
def read_binary_chunks(filename, chunk_size=8):\r
    """Read a binary file in chunks and show each chunk."""\r
    print(f"\\n📖 Reading binary in {chunk_size}-byte chunks:")\r
    with open(filename, 'rb') as f:\r
        chunk_num = 0\r
        while True:\r
            chunk = f.read(chunk_size)\r
            if not chunk:\r
                break\r
            chunk_num += 1\r
            print(f"   Chunk {chunk_num}: {chunk.hex()}")\r
\r
if __name__ == "__main__":\r
    create_binary_file()\r
    read_binary_file("data.bin")\r
    read_binary_chunks("data.bin")\r
    os.remove("data.bin")\r
    print("🧹 Cleaned up.")`,x=`# read_memory.py\r
# Demonstrates memory considerations when reading files\r
\r
import os\r
import time\r
\r
def create_test_file(filename, size_mb=2):\r
    """Create a file of approximately size_mb MB."""\r
    mb = size_mb * 1024 * 1024\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        line = "a" * 80 + "\\n"  # 80 chars + newline\r
        lines = mb // len(line)\r
        for _ in range(lines):\r
            f.write(line)\r
    print(f"✅ Created {size_mb}MB test file: {filename}")\r
\r
def read_all_at_once(filename):\r
    """Read the entire file at once and measure time/memory."""\r
    start = time.perf_counter()\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        data = f.read()\r
    elapsed = time.perf_counter() - start\r
    print(f"📖 Read all at once: {len(data)} chars, time: {elapsed:.4f}s")\r
\r
def read_in_chunks(filename, chunk_size=8192):\r
    """Read the file in chunks and measure time."""\r
    start = time.perf_counter()\r
    total = 0\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        while True:\r
            chunk = f.read(chunk_size)\r
            if not chunk:\r
                break\r
            total += len(chunk)\r
    elapsed = time.perf_counter() - start\r
    print(f"📖 Read in chunks: {total} chars, time: {elapsed:.4f}s")\r
\r
if __name__ == "__main__":\r
    # Create a 2MB file for demonstration (adjust if needed)\r
    create_test_file("mem_test.txt", 2)\r
    read_all_at_once("mem_test.txt")\r
    read_in_chunks("mem_test.txt")\r
    os.remove("mem_test.txt")\r
    print("🧹 Cleaned up.")`,f=`# read_empty.py\r
# Demonstrates handling empty files and EOF\r
\r
import os\r
\r
def read_empty_file():\r
    """Read an empty file and show the result."""\r
    filename = "empty.txt"\r
    open(filename, 'w').close()  # Create empty file\r
\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        content = f.read()\r
    print(f"📄 Reading empty file: '{content}' (type: {type(content)})")\r
    if content == '':\r
        print("   ✅ Detected empty string (EOF)")\r
    os.remove(filename)\r
\r
def read_chunks_until_eof():\r
    """Read a file in chunks and detect EOF."""\r
    filename = "eof_demo.txt"\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.write("Only one line in this file.\\n")\r
\r
    print("\\n🔍 Reading chunks until EOF:")\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        chunk_num = 0\r
        while True:\r
            chunk = f.read(5)  # small chunk size for demonstration\r
            chunk_num += 1\r
            if not chunk:\r
                print(f"   Chunk {chunk_num}: EOF detected (empty)")\r
                break\r
            print(f"   Chunk {chunk_num}: '{chunk}'")\r
\r
    os.remove(filename)\r
\r
def using_read_after_eof():\r
    """Show what happens when you read after EOF."""\r
    filename = "eof_again.txt"\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.write("Some content")\r
\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        content1 = f.read()\r
        content2 = f.read()  # Already at EOF\r
        content3 = f.read()  # Still at EOF\r
        print(f"\\n📄 First read: '{content1}' (length {len(content1)})")\r
        print(f"   Second read: '{content2}' (length {len(content2)})")\r
        print(f"   Third read: '{content3}' (length {len(content3)})")\r
\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")\r
\r
if __name__ == "__main__":\r
    read_empty_file()\r
    read_chunks_until_eof()\r
    using_read_after_eof()`,p=[{question:"What does the read() method do?",shortAnswer:"Reads the contents of a file from the current position to EOF.",explanation:"It returns a string (text mode) or bytes (binary mode) containing the file data.",hint:"It's the simplest way to read a file.",level:"basic",codeExample:"content = f.read()"},{question:"What does read() return when it reaches EOF?",shortAnswer:"An empty string '' in text mode or empty bytes b'' in binary mode.",explanation:"This is how you detect the end of the file.",hint:"Use `if not data: break` to stop.",level:"basic",codeExample:"data = f.read(); if not data: # EOF"},{question:"What happens if you call read() on an empty file?",shortAnswer:"It returns an empty string or empty bytes.",explanation:"It's not an error; it's a valid read operation.",hint:"The result is falsy.",level:"basic",codeExample:"content = f.read(); # content is '' "},{question:"What is the purpose of the `size` parameter in read(size)?",shortAnswer:"It limits the number of characters/bytes to read.",explanation:"If `size` is negative or omitted, it reads the entire file.",hint:"Useful for reading in chunks.",level:"intermediate",codeExample:"chunk = f.read(1024)"},{question:"Is it safe to use read() without arguments on a large file?",shortAnswer:"No, it may cause memory issues.",explanation:"It loads the entire file into memory; use chunks for large files.",hint:"Only for small files.",level:"intermediate",codeExample:null},{question:"What is the return type of read() in text mode?",shortAnswer:"str (string).",explanation:"It returns a Unicode string after decoding.",hint:"Use `.decode()` if you need bytes.",level:"basic",codeExample:"type(f.read())  # str"},{question:"What is the return type of read() in binary mode?",shortAnswer:"bytes.",explanation:"It returns raw bytes without decoding.",hint:"Use `.decode()` to convert to string.",level:"basic",codeExample:"type(f.read())  # bytes"},{question:"Can you use read() on a file opened in 'w' mode?",shortAnswer:"No, it raises an error.",explanation:"'w' mode is write-only; use 'r' or 'r+' for reading.",hint:"Open in the right mode.",level:"basic",codeExample:"f = open('f.txt','w'); f.read()  # OSError"},{question:"How do you read a text file and preserve newlines?",shortAnswer:"read() preserves all characters, including newlines.",explanation:"Newlines are included in the returned string.",hint:"It's all in one string.",level:"basic",codeExample:null},{question:"What is the difference between read() and readlines()?",shortAnswer:"read() returns a single string; readlines() returns a list of lines.",explanation:"read() gives all content in one object; readlines() splits by newline.",hint:"One returns a string, the other a list.",level:"intermediate",codeExample:null},{question:"How can you read a file in chunks using read()?",shortAnswer:"Call read(size) repeatedly in a loop until it returns empty.",explanation:"This is the memory‑efficient way to handle large files.",hint:"`while True: chunk = f.read(4096); if not chunk: break`",level:"intermediate",codeExample:"while chunk := f.read(4096): process(chunk)"},{question:"What is a typical chunk size for reading files?",shortAnswer:"4KB, 8KB, or 16KB are common choices.",explanation:"Power‑of‑two sizes align with disk blocks and OS caches.",hint:"Experiment to find the best for your system.",level:"intermediate",codeExample:"chunk_size = 8192"},{question:"Does read() move the file pointer?",shortAnswer:"Yes, it advances the pointer by the number of bytes/characters read.",explanation:"The pointer moves to the new position after reading.",hint:"Use tell() to check.",level:"intermediate",codeExample:"pos = f.tell()"},{question:"What is the relationship between read() and the file pointer?",shortAnswer:"read() reads from the current pointer position and advances it.",explanation:"If you seek to a position, read() starts from there.",hint:"You can seek to re-read.",level:"intermediate",codeExample:"f.seek(0); data = f.read()"},{question:"How do you read a file in binary mode and interpret it as integers?",shortAnswer:"Read bytes and use `struct.unpack` or `int.from_bytes`.",explanation:"Binary data needs to be parsed according to its format.",hint:"Use `struct` module.",level:"advanced",codeExample:"data = f.read(4); value = int.from_bytes(data, 'little')"},{question:"Why does reading a text file with read() sometimes raise UnicodeDecodeError?",shortAnswer:"Because the file contains bytes that don't match the specified encoding.",explanation:"Always specify the correct encoding or open in binary mode.",hint:"Use `encoding='utf-8'` or open with 'rb'.",level:"intermediate",codeExample:"open('file.txt', 'r', encoding='utf-8')"},{question:"Can read() be used on a file that was opened with 'a' mode?",shortAnswer:"No, 'a' is write‑only; use 'a+' for reading and appending.",explanation:"'a' mode does not allow reading.",hint:"Add '+' to enable reading.",level:"intermediate",codeExample:"open('f.txt', 'a+')"},{question:"What is the maximum size of data read() can handle?",shortAnswer:"It's limited by available memory; no hard limit.",explanation:"Reading a huge file can cause MemoryError.",hint:"Use chunks for large files.",level:"intermediate",codeExample:null},{question:"How does read() handle Windows vs Unix newlines?",shortAnswer:"In text mode, Python translates newlines to '\\n' by default.",explanation:"In binary mode, newlines are preserved as raw bytes.",hint:"Text mode normalizes newlines.",level:"intermediate",codeExample:null},{question:"What is the benefit of using read() over iteration?",shortAnswer:"read() gives you the entire content as a single object for easy processing.",explanation:"If you need the whole file as a string, read() is simpler.",hint:"For small files, read() is convenient.",level:"intermediate",codeExample:null},{question:"Can you use read() with a file-like object from requests or StringIO?",shortAnswer:"Yes, any file-like object that supports read() works.",explanation:"Requests response objects and io.StringIO support read().",hint:"It's a generic interface.",level:"advanced",codeExample:"response.read()"},{question:"What is the difference between read() and readlines() in terms of memory?",shortAnswer:"read() loads the whole file as one string; readlines() loads as a list of strings.",explanation:"Both can use similar memory; readlines() adds list overhead.",hint:"For line‑wise processing, iteration is better.",level:"intermediate",codeExample:null},{question:"How do you read a file partially from a specific position?",shortAnswer:"Use seek() to move the pointer, then read().",explanation:"Example: `f.seek(100); data = f.read(50)`.",hint:"Combine seek() and read(size).",level:"advanced",codeExample:"f.seek(100); f.read(50)"},{question:"What happens if you call read() on a file that was closed?",shortAnswer:"ValueError: I/O operation on closed file.",explanation:"A closed file object cannot be read from.",hint:"Always check or use `with`.",level:"basic",codeExample:"f.close(); f.read()  # ValueError"},{question:"Is there a way to read a file without loading it into memory?",shortAnswer:"Yes, by reading in chunks with read(size).",explanation:"This processes the file incrementally.",hint:"Use read(size) in a loop.",level:"intermediate",codeExample:null},{question:"How does read() handle large text files with encodings like UTF‑8?",shortAnswer:"It decodes the bytes using the specified encoding, which may take time.",explanation:"Binary mode is faster for large files if you don't need string processing.",hint:"Consider memory and speed trade‑offs.",level:"advanced",codeExample:null},{question:"What is the difference between `f.read()` and `f.read(-1)`?",shortAnswer:"They are equivalent; a negative size means read until EOF.",explanation:"Both read the entire file.",hint:"Use `f.read()` for clarity.",level:"basic",codeExample:null},{question:"How can you use read() to read a file and split it into lines?",shortAnswer:"Read the entire file, then split on newline: `content.splitlines()`.",explanation:"This gives a list of lines.",hint:"Works for small files.",level:"intermediate",codeExample:"lines = f.read().splitlines()"},{question:"What is the typical performance of read() compared to other methods?",shortAnswer:"read() is very fast for small files; for large files, chunked reading is comparable.",explanation:"The main bottleneck is I/O, not the method itself.",hint:"Choose based on memory, not speed.",level:"advanced",codeExample:null},{question:"Can you use read() to read a file and update it in-place?",shortAnswer:"No, read() only reads; you need 'r+' or separate write operations for in‑place updates.",explanation:"Use 'r+' to read and write.",hint:"Combine with seek() and write().",level:"advanced",codeExample:null}],_=()=>{const s=l.useRef([]);l.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&i.target.classList.add("section-visible")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});return s.current.forEach(n=>{n&&t.observe(n)}),()=>t.disconnect()},[]);const r=t=>{t&&!s.current.includes(t)&&s.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 p-6 md:p-8 lg:p-12 font-sans leading-relaxed",children:[e.jsxs("header",{ref:r,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-gray-200 dark:border-gray-800",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-sm font-mono bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full",children:"Topic 13"}),e.jsx("span",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:"Core"})]}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight",children:"Reading Files using `read()`"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 mt-3 max-w-3xl",children:"The simplest way to read file content: understanding the `read()` method and its variants."}),e.jsxs("div",{className:"flex flex-wrap gap-3 mt-4",children:[e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"📖 read()"}),e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"📏 read(size)"}),e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"💾 bytes"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📖"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"The `read()` Method"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["The ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"read()"})," method is used to read the contents of a file. It reads from the current position of the file pointer to the end (or up to a specified number of bytes/characters)."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Prototype:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"file.read(size=-1)"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Return type:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"str"})," (text mode) or",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"bytes"})," (binary mode)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Purpose:"})," Returns the file content as a single string/bytes object."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Parameters:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"size"})," (optional) — maximum number of characters/bytes to read. If negative or omitted, reads the entire file."]})]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-4 rounded-r-xl",children:[e.jsx("p",{className:"text-blue-700 dark:text-blue-300 font-medium",children:"💡 Key Insight:"}),e.jsxs("p",{className:"text-blue-600 dark:text-blue-400 text-sm",children:[e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"read()"})," reads the entire file at once. For large files, this can cause memory issues. Use ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"read(size)"}),"to read in chunks."]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-100",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Reading the Entire File"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["The simplest usage of ",e.jsx("code",{children:"read()"})," is without arguments, which reads the entire file content from the current position to the end."]}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm",children:e.jsxs("code",{className:"text-gray-800 dark:text-gray-200",children:["with open('data.txt', 'r', encoding='utf-8') as f:",e.jsx("br",{}),"content = f.read()",e.jsx("br",{}),"print(content)  # entire file as a string"]})}),e.jsxs("p",{children:["This is convenient for ",e.jsx("strong",{children:"small files"})," where you need the entire content as a single string. However, for large files, it can use significant memory."]}),e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 p-4 rounded-r-xl",children:[e.jsx("p",{className:"text-yellow-700 dark:text-yellow-300 font-medium",children:"⚠️ Caution:"}),e.jsxs("p",{className:"text-yellow-600 dark:text-yellow-400 text-sm",children:["If the file is larger than available memory, reading the entire file will cause a ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"MemoryError"}),". Always consider the file size before using ",e.jsx("code",{children:"read()"}),"without arguments."]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-200",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📏"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Reading in Chunks (`read(size)`)"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["To avoid loading the entire file into memory, you can pass a",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"size"})," argument to",e.jsx("code",{children:"read()"}),". This reads up to ",e.jsx("code",{children:"size"})," bytes (or characters in text mode) and returns them."]}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm",children:e.jsxs("code",{className:"text-gray-800 dark:text-gray-200",children:["with open('large_file.txt', 'r', encoding='utf-8') as f:",e.jsx("br",{}),"while True:",e.jsx("br",{}),"chunk = f.read(1024)  # read 1KB at a time",e.jsx("br",{}),"if not chunk:  # end of file",e.jsx("br",{}),"break",e.jsx("br",{}),"process(chunk)  # process the chunk"]})}),e.jsxs("p",{children:["This is the ",e.jsx("strong",{children:"preferred way"})," to handle large files because it keeps memory usage constant."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Text mode:"})," ",e.jsx("code",{children:"size"})," is number of characters (not bytes), due to encoding."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Binary mode:"})," ",e.jsx("code",{children:"size"})," is number of bytes."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Return:"})," If the file is smaller than",e.jsx("code",{children:"size"}),", returns only the remaining content."]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"💾"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Reading Binary Files"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["When reading binary files (images, executables, etc.), you must open the file in binary mode (",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"'rb'"}),"). In this mode, ",e.jsx("code",{children:"read()"})," returns ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"bytes"}),"instead of ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"str"}),"."]}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm",children:e.jsxs("code",{className:"text-gray-800 dark:text-gray-200",children:["with open('image.jpg', 'rb') as f:",e.jsx("br",{}),"data = f.read()  # returns bytes",e.jsx("br",{}),"# data is a bytes object, not a string"]})}),e.jsx("p",{children:"For binary files, reading in chunks is especially important to avoid memory issues with large media files."})]})]}),e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🏁"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"End-of-File (EOF) Behavior"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["When ",e.jsx("code",{children:"read()"})," reaches the end of the file, it returns an empty string (",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"''"}),") in text mode or an empty bytes object (",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"b''"}),") in binary mode."]}),e.jsx("p",{children:"This is how you detect EOF when reading in chunks:"}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm",children:e.jsxs("code",{className:"text-gray-800 dark:text-gray-200",children:["chunk = f.read(1024)",e.jsx("br",{}),"if not chunk:  # empty string or bytes",e.jsx("br",{}),"break  # EOF reached"]})}),e.jsx("p",{children:"Remember that an empty file also returns an empty string/bytes on the first read."})]})]}),e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🌍"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Real-World Scenarios"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"bg-blue-50 dark:bg-blue-950/30 rounded-xl p-6 border border-blue-200 dark:border-blue-800/50 transition-all duration-300 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Reading a Small Config File"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:["A school in Barrackpore stores its configuration in a small JSON file. Using ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"read()"}),"without arguments loads the entire config into memory for quick processing."]})]})]})}),e.jsx("div",{className:"bg-purple-50 dark:bg-purple-950/30 rounded-xl p-6 border border-purple-200 dark:border-purple-800/50 transition-all duration-300 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"🖼️"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Processing Large Log Files"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:["A web server in Shyamnagar generates gigabytes of log files. The monitoring script reads these logs in chunks using",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"read(4096)"})," to avoid running out of memory."]})]})]})}),e.jsx("div",{className:"bg-green-50 dark:bg-green-950/30 rounded-xl p-6 border border-green-200 dark:border-green-800/50 transition-all duration-300 hover:shadow-lg hover:border-green-300 dark:hover:border-green-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"📸"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Copying a Binary File"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:["A backup script in Naihati copies student photos from one server to another. It reads the image in chunks using",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"read(8192)"})," and writes the chunks to the destination, keeping memory usage low."]})]})]})})]})]}),e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🐍"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Python in Action"})]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 text-lg mb-6",children:"The following examples demonstrate the `read()` method in various scenarios."}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(a,{fileModule:c,title:"Reading Entire File (Simple)",highlightLines:[]}),e.jsx(a,{fileModule:h,title:"Reading in Chunks (Memory‑Efficient)",highlightLines:[]}),e.jsx(a,{fileModule:m,title:"Reading Binary Files",highlightLines:[]}),e.jsx(a,{fileModule:x,title:"Memory Considerations",highlightLines:[]}),e.jsx(a,{fileModule:f,title:"Handling Empty Files & EOF",highlightLines:[]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"💡"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Tips & Tricks"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{title:"Use `read()` without args only for small files",desc:"For files under 10MB, it's fine. For larger files, use chunks."},{title:"Choose a power‑of‑two chunk size",desc:"Sizes like 1024, 4096, 8192 are aligned with disk blocks and perform well."},{title:"Check for empty result to detect EOF",desc:"`if not chunk: break` is the standard pattern."},{title:"Use `read()` with `with` for automatic close",desc:"Always combine `read()` with the `with` statement."},{title:"For binary, use `read()` and process bytes",desc:"Work with bytes directly; convert to strings only when needed."},{title:"Profile your code to choose chunk size",desc:"Test different sizes to find the optimal one for your I/O pattern."}].map((t,n)=>e.jsxs("div",{className:"bg-amber-50 dark:bg-amber-950/20 rounded-xl p-5 border border-amber-200 dark:border-amber-800/50 transition-all duration-300 hover:shadow-lg hover:border-amber-300 dark:hover:border-amber-600 hover:-translate-y-1",children:[e.jsxs("h4",{className:"font-semibold text-gray-900 dark:text-white flex items-start gap-2",children:[e.jsx("span",{className:"text-amber-500",children:"✦"})," ",t.title]}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 mt-1",children:t.desc})]},n))})]}),e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Common Mistakes"})]}),e.jsx("div",{className:"space-y-3",children:[{mistake:"Using `read()` on large files, causing MemoryError",fix:"Use `read(size)` in a loop to process in chunks."},{mistake:"Forgetting to open in binary mode for non‑text files",fix:"Use 'rb' for images, executables, etc."},{mistake:"Not handling EOF correctly when reading chunks",fix:"Check `if not chunk: break` to stop at end."},{mistake:"Confusing bytes and strings when reading binary",fix:"Binary mode returns bytes; convert with `.decode()` if needed."},{mistake:"Using `read()` on a closed file",fix:"Always use `with` to ensure the file is open."}].map((t,n)=>e.jsx("div",{className:"bg-red-50 dark:bg-red-950/20 rounded-xl p-5 border border-red-200 dark:border-red-800/50 transition-all duration-300 hover:shadow-lg hover:border-red-300 dark:hover:border-red-600",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-red-500 text-lg",children:"✗"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-gray-800 dark:text-gray-200 font-medium",children:t.mistake}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:["✓ ",t.fix]})]})]})},n))})]}),e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Best Practices"})]}),e.jsx("div",{className:"bg-emerald-50 dark:bg-emerald-950/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/50 transition-all duration-300 hover:shadow-lg hover:border-emerald-300 dark:hover:border-emerald-600",children:e.jsxs("ul",{className:"space-y-3 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Use `read()` without args only for small files:"})," ","Know the size of your files and choose appropriately."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"For large files, always read in chunks:"})," ","This is the only way to process large files without memory issues."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Use binary mode for non‑text data:"})," ","This avoids encoding errors and returns bytes."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Combine `read()` with `with` for automatic cleanup:"})," ","Always close the file properly."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Test your code with files of various sizes:"})," ","Ensure your code handles both small and large files."]})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📋"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Mini Checklist"})]}),e.jsxs("div",{className:"bg-indigo-50 dark:bg-indigo-950/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800/50 transition-all duration-300 hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-600",children:[e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"By the end of this topic, you should understand:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:["The `read()` method and its parameters","How to read the entire file at once","How to read in chunks using `read(size)`","The difference between text and binary reading","How to detect EOF correctly","Common pitfalls and how to avoid them","Best practices for memory‑efficient reading"].map((t,n)=>e.jsxs("div",{className:"flex items-center gap-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900/50 px-4 py-2 rounded-lg",children:[e.jsx("span",{className:"text-indigo-400",children:"☐"}),e.jsx("span",{className:"text-sm",children:t})]},n))})]})]}),e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🤔"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Think About…"})]}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-950/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800/50 transition-all duration-300 hover:shadow-lg hover:border-yellow-300 dark:hover:border-yellow-600",children:e.jsxs("div",{className:"space-y-4 text-gray-700 dark:text-gray-300",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Observe carefully:"})," ","What does `read()` return when the file is empty? How can you distinguish an empty file from EOF?"]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Try changing this:"})," ","Write a program that reads a large file in chunks and counts the number of lines. Compare the performance with reading the entire file at once."]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Think about:"})," ","Why does reading a text file with `read()` return a string, but reading a binary file returns bytes? What implications does this have for processing?"]})]})]})})]}),e.jsx("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-300",children:e.jsx(o,{title:"Reading with read() – FAQs",questions:p})}),e.jsx("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-300",children:e.jsx(d,{note:"The `read()` method is the most intuitive way to read files, but students must understand its limitations. Use the analogy of drinking a glass of water: `read()` without args is like drinking it all at once (fine for small glasses, not for a pool). For large files, show them the chunk‑by‑chunk approach. Emphasize the EOF detection pattern: `if not chunk: break`. Also, highlight the difference between text and binary modes — this will save them from many encoding bugs."})}),e.jsxs("footer",{className:"pt-8 mt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400",children:[e.jsx("p",{children:"Topic 13: Reading Files using read() · Built with ❤️ for classroom learning"}),e.jsx("p",{className:"mt-1",children:"Next: Topic 14 — Reading Files using read(size)"})]})]}),e.jsx("style",{children:`
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
