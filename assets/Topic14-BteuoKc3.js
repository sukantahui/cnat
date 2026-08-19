import{r as l,j as e}from"./index-DWohEkZn.js";import{P as s}from"./PythonFileLoader-DEM2ABzr.js";import{F as o}from"./FAQTemplate-D23zr5zh.js";import{T as d}from"./TeacherSukantaHui-jSS1fSK-.js";import"./PythonCodeBlock-DTrIGSO6.js";import"./prism-E78XnQ_R.js";import"./browser-DM-S59Os.js";import"./clsx-B-dksMZM.js";import"./github-BbFuPttp.js";import"./createLucideIcon-C1O5LkBh.js";import"./git-branch-CeWv9SAq.js";const c=`# read_size_basic.py\r
# Demonstrates basic usage of read(size)\r
\r
import os\r
\r
def create_sample_file():\r
    """Create a sample file with known content."""\r
    filename = "sample.txt"\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.write("0123456789\\n")\r
        f.write("ABCDEFGHIJ\\n")\r
        f.write("abcdefghij\\n")\r
    print(f"✅ Created sample file: {filename}")\r
    return filename\r
\r
def read_size_examples(filename):\r
    """Show various read(size) calls."""\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        # Read 5 characters\r
        chunk1 = f.read(5)\r
        print(f"📖 read(5): '{chunk1}' (length {len(chunk1)})")\r
\r
        # Read 10 characters\r
        chunk2 = f.read(10)\r
        print(f"📖 read(10): '{chunk2}' (length {len(chunk2)})")\r
\r
        # Read the rest\r
        chunk3 = f.read()\r
        print(f"📖 read(): '{chunk3}' (length {len(chunk3)})")\r
\r
        # Now at EOF, read(5) returns ''\r
        chunk4 = f.read(5)\r
        print(f"📖 read(5) at EOF: '{chunk4}' (length {len(chunk4)})")\r
\r
def read_size_zero():\r
    """Demonstrate read(0) behavior."""\r
    with open("sample.txt", 'r', encoding='utf-8') as f:\r
        chunk = f.read(0)\r
        print(f"\\n📖 read(0): '{chunk}' (length {len(chunk)})")\r
        # Pointer does not move\r
        pos = f.tell()\r
        print(f"   File pointer after read(0): {pos}")\r
\r
if __name__ == "__main__":\r
    filename = create_sample_file()\r
    read_size_examples(filename)\r
    read_size_zero()\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")`,h=`# read_size_chunks.py\r
# Demonstrates the chunked reading pattern\r
\r
import os\r
import time\r
\r
def create_large_file(filename="large.txt", size_mb=1):\r
    """Create a text file of approximately size_mb MB."""\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        # Write a line of 80 chars repeated\r
        line = "a" * 80 + "\\n"\r
        lines = (size_mb * 1024 * 1024) // len(line)\r
        for _ in range(lines):\r
            f.write(line)\r
    print(f"✅ Created {size_mb}MB file: {filename}")\r
\r
def process_chunk(chunk):\r
    """Simulate processing a chunk (e.g., counting characters)."""\r
    return len(chunk)\r
\r
def read_in_chunks(filename, chunk_size):\r
    """Read the file in chunks and count total characters."""\r
    total = 0\r
    chunks = 0\r
    start = time.perf_counter()\r
\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        while True:\r
            chunk = f.read(chunk_size)\r
            if not chunk:\r
                break\r
            total += process_chunk(chunk)\r
            chunks += 1\r
\r
    elapsed = time.perf_counter() - start\r
    return total, chunks, elapsed\r
\r
if __name__ == "__main__":\r
    # Create a 1MB file (adjust if needed)\r
    create_large_file("chunk_test.txt", 1)\r
\r
    # Try different chunk sizes\r
    sizes = [1024, 4096, 8192, 16384, 65536]\r
    print("\\n📊 Performance comparison:")\r
    for size in sizes:\r
        total, chunks, elapsed = read_in_chunks("chunk_test.txt", size)\r
        print(f"  Chunk size {size:6d}: {chunks:4d} chunks, {elapsed:.4f}s, {total} chars")\r
\r
    os.remove("chunk_test.txt")\r
    print("🧹 Cleaned up.")`,m=`# read_size_binary.py\r
# Demonstrates read(size) in binary mode\r
\r
import os\r
import struct\r
\r
def create_binary_file(filename="data.bin"):\r
    """Create a binary file with known content."""\r
    with open(filename, 'wb') as f:\r
        # Write some bytes\r
        f.write(b'\\x00\\x01\\x02\\x03\\x04\\x05')\r
        # Write an integer (4 bytes)\r
        f.write(struct.pack('i', 12345))\r
        # Write a float (4 bytes)\r
        f.write(struct.pack('f', 3.14159))\r
        # Write a string as bytes\r
        f.write(b'Hello\\x00World')\r
    print(f"✅ Created binary file: {filename}")\r
\r
def read_binary_chunks(filename, chunk_size=4):\r
    """Read binary file in byte chunks."""\r
    print(f"\\n📖 Reading binary in {chunk_size}-byte chunks:")\r
    with open(filename, 'rb') as f:\r
        chunk_num = 0\r
        while True:\r
            chunk = f.read(chunk_size)\r
            if not chunk:\r
                break\r
            chunk_num += 1\r
            print(f"   Chunk {chunk_num}: {chunk.hex()} ({len(chunk)} bytes)")\r
\r
def read_binary_structured(filename):\r
    """Read structured binary data using chunks."""\r
    print("\\n🔍 Reading structured binary data:")\r
    with open(filename, 'rb') as f:\r
        # Read first 6 bytes\r
        bytes1 = f.read(6)\r
        print(f"   First 6 bytes: {bytes1.hex()}")\r
\r
        # Read next 4 bytes as an integer\r
        int_bytes = f.read(4)\r
        if len(int_bytes) == 4:\r
            value = struct.unpack('i', int_bytes)[0]\r
            print(f"   Integer: {value}")\r
\r
        # Read next 4 bytes as a float\r
        float_bytes = f.read(4)\r
        if len(float_bytes) == 4:\r
            value = struct.unpack('f', float_bytes)[0]\r
            print(f"   Float: {value:.5f}")\r
\r
        # Read the rest as bytes\r
        rest = f.read()\r
        print(f"   Remaining bytes: {rest}")\r
\r
if __name__ == "__main__":\r
    filename = create_binary_file()\r
    read_binary_chunks(filename, 4)\r
    read_binary_structured(filename)\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")`,x=`# read_size_partial.py\r
# Demonstrates handling partial reads (when file ends before chunk size)\r
\r
import os\r
\r
def create_file_with_content(filename="partial.txt"):\r
    """Create a small file."""\r
    with open(filename, 'w', encoding='utf-8') as f:\r
        f.write("Short file.")\r
    print(f"✅ Created: {filename}")\r
\r
def partial_read_example(filename, chunk_size=10):\r
    """Read the file with chunk_size larger than file size."""\r
    print(f"\\n📖 Reading file with chunk_size={chunk_size} (file size < chunk_size):")\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        chunk = f.read(chunk_size)\r
        print(f"   Read '{chunk}' (length {len(chunk)})")\r
        # Next read returns ''\r
        next_chunk = f.read(chunk_size)\r
        print(f"   Next read: '{next_chunk}' (EOF detected)")\r
\r
def robust_chunked_reading(filename, chunk_size=4):\r
    """Robust chunked reading that handles partial final chunks."""\r
    print(f"\\n🔄 Robust chunked reading (chunk_size={chunk_size}):")\r
    total = 0\r
    with open(filename, 'r', encoding='utf-8') as f:\r
        while True:\r
            chunk = f.read(chunk_size)\r
            if not chunk:\r
                break\r
            total += len(chunk)\r
            print(f"   Chunk: '{chunk}' (len {len(chunk)})")\r
    print(f"   Total characters: {total}")\r
\r
if __name__ == "__main__":\r
    filename = "partial.txt"\r
    create_file_with_content(filename)\r
    partial_read_example(filename, 10)\r
    robust_chunked_reading(filename, 3)\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")`,u=`# read_size_performance.py\r
# Compares performance of different chunk sizes\r
\r
import os\r
import time\r
import random\r
\r
def create_file_with_random_data(filename, size_mb=1):\r
    """Create a binary file with random data."""\r
    mb = size_mb * 1024 * 1024\r
    data = bytes(random.getrandbits(8) for _ in range(mb))\r
    with open(filename, 'wb') as f:\r
        f.write(data)\r
    print(f"✅ Created {size_mb}MB binary file: {filename}")\r
\r
def read_whole_file(filename):\r
    """Read entire file at once."""\r
    start = time.perf_counter()\r
    with open(filename, 'rb') as f:\r
        data = f.read()\r
    elapsed = time.perf_counter() - start\r
    return len(data), elapsed\r
\r
def read_in_chunks(filename, chunk_size):\r
    """Read file in chunks of given size."""\r
    start = time.perf_counter()\r
    total = 0\r
    with open(filename, 'rb') as f:\r
        while True:\r
            chunk = f.read(chunk_size)\r
            if not chunk:\r
                break\r
            total += len(chunk)\r
    elapsed = time.perf_counter() - start\r
    return total, elapsed\r
\r
if __name__ == "__main__":\r
    # Create a 2MB file for testing (adjust if needed)\r
    create_file_with_random_data("perf_test.bin", 2)\r
\r
    # Test different sizes\r
    sizes = [1024, 4096, 8192, 16384, 65536, 1048576]\r
    print("\\n⏱️ Performance (reading 2MB file):")\r
    print(f"  {'Chunk size':<12} {'Time (s)':<12} {'Chunks':<8}")\r
\r
    for size in sizes:\r
        total, elapsed = read_in_chunks("perf_test.bin", size)\r
        chunks = total // size if size <= total else 1\r
        print(f"  {size:<12} {elapsed:<12.4f} {chunks:<8}")\r
\r
    # Compare with whole file read\r
    total, elapsed = read_whole_file("perf_test.bin")\r
    print(f"  {'whole':<12} {elapsed:<12.4f} {'1':<8}")\r
\r
    os.remove("perf_test.bin")\r
    print("🧹 Cleaned up.")`,f=[{question:"What is the purpose of the size parameter in read(size)?",shortAnswer:"It limits the number of characters/bytes read from the file.",explanation:"This enables efficient chunked reading, preventing memory issues.",hint:"It's used to read a specific amount.",level:"basic",codeExample:"data = f.read(1024)"},{question:"What does read(size) return when it reaches EOF?",shortAnswer:"An empty string '' (text) or empty bytes b'' (binary).",explanation:"This is the signal to stop reading in a loop.",hint:"Use `if not chunk: break`.",level:"basic",codeExample:null},{question:"Is size measured in characters or bytes in text mode?",shortAnswer:"Characters.",explanation:"In text mode, size is the maximum number of characters to return.",hint:"Due to encoding, it may read more bytes.",level:"intermediate",codeExample:null},{question:"Is size measured in characters or bytes in binary mode?",shortAnswer:"Bytes.",explanation:"Binary mode reads exact byte counts.",hint:"No decoding is done.",level:"basic",codeExample:"f.read(100)  # reads 100 bytes"},{question:"What happens if you call read(size) with a negative size?",shortAnswer:"It reads until EOF (same as read() without args).",explanation:"Negative size is treated as if size were not given.",hint:"It's equivalent to read()",level:"intermediate",codeExample:"f.read(-1)  # reads whole file"},{question:"What happens if you call read(0)?",shortAnswer:"It returns an empty string/bytes and does not advance the pointer.",explanation:"It's a no‑op read.",hint:"Useful for testing.",level:"intermediate",codeExample:"f.read(0)  # '' or b''"},{question:"What is the chunked reading pattern?",shortAnswer:"A loop that repeatedly calls read(size) until EOF.",explanation:"This processes large files in manageable pieces.",hint:"`while True: chunk = f.read(size); if not chunk: break`",level:"intermediate",codeExample:null},{question:"Why is chunked reading important?",shortAnswer:"It prevents memory exhaustion when processing large files.",explanation:"Only a small portion of the file is in memory at a time.",hint:"Think of streaming.",level:"basic",codeExample:null},{question:"What is a good default chunk size?",shortAnswer:"8192 (8KB) or 16384 (16KB) are common starting points.",explanation:"These balance I/O overhead and memory usage.",hint:"Power‑of‑two sizes are typical.",level:"intermediate",codeExample:"chunk_size = 8192"},{question:"How do you choose the optimal chunk size?",shortAnswer:"By profiling your code with different sizes.",explanation:"Measure performance and memory usage for your specific environment.",hint:"Experiment.",level:"advanced",codeExample:null},{question:"Does read(size) always read exactly `size` characters in text mode?",shortAnswer:"No, it may read fewer if the file ends or if the character boundary is reached.",explanation:"It ensures a valid character boundary is respected.",hint:"May be less than size.",level:"intermediate",codeExample:null},{question:"Does read(size) always read exactly `size` bytes in binary mode?",shortAnswer:"It reads up to `size` bytes; it may be less at EOF.",explanation:"If there are fewer bytes remaining, it returns only those.",hint:"Not exactly if EOF.",level:"intermediate",codeExample:null},{question:"What is the difference between read(size) and read()?",shortAnswer:"read() reads the whole file; read(size) reads at most size.",explanation:"read() is just read(-1) or read(no arg).",hint:"read() = read(-1).",level:"basic",codeExample:null},{question:"Can you use read(size) with files opened in 'r+' mode?",shortAnswer:"Yes, it works for any mode that allows reading.",explanation:"'r+', 'w+', 'a+' all support read(size).",hint:"Any read‑enabled mode.",level:"intermediate",codeExample:null},{question:"Does read(size) move the file pointer?",shortAnswer:"Yes, it advances by the number of characters/bytes read.",explanation:"The pointer position is updated.",hint:"Use tell() to check.",level:"intermediate",codeExample:"f.tell()"},{question:"How do you detect EOF when using read(size)?",shortAnswer:"Check if the returned chunk is empty ('' or b'').",explanation:"An empty string/bytes indicates EOF.",hint:"`if not chunk: break`.",level:"basic",codeExample:null},{question:"Why does read(size) in text mode sometimes read more bytes than size?",shortAnswer:"To ensure character boundaries are respected.",explanation:"It may need to read extra bytes to complete a multi‑byte character.",hint:"UTF‑8 characters can be 1‑4 bytes.",level:"advanced",codeExample:null},{question:"Is there a performance difference between reading in chunks vs reading whole file?",shortAnswer:"For large files, chunked reading is slower due to more I/O calls, but necessary.",explanation:"The trade‑off is memory vs speed.",hint:"I/O calls have overhead.",level:"intermediate",codeExample:null},{question:"What is the maximum size you can pass to read(size)?",shortAnswer:"No hard limit, but it's limited by memory.",explanation:"A very large size would attempt to allocate a huge block.",hint:"Use reasonable sizes.",level:"intermediate",codeExample:null},{question:"Can you use read(size) on a file opened with 'a' mode?",shortAnswer:"No, 'a' is write‑only; use 'a+' for reading.",explanation:"'a' does not support reading.",hint:"Add '+' to read.",level:"intermediate",codeExample:null},{question:"What is the typical use case for read(size)?",shortAnswer:"Processing large files, streaming data, or reading fixed‑length records.",explanation:"It's used whenever you need to control how much data is read at a time.",hint:"Memory efficiency.",level:"basic",codeExample:null},{question:"How does read(size) handle multi‑byte characters like emojis?",shortAnswer:"In text mode, it reads complete characters; may read extra bytes.",explanation:"It ensures a valid character is returned.",hint:"Emojis are 4 bytes in UTF‑8.",level:"advanced",codeExample:null},{question:"What is the relationship between read(size) and seek()?",shortAnswer:"You can seek to a position, then read(size) from there.",explanation:"They work together for random access.",hint:"Use seek() to navigate, read(size) to extract.",level:"advanced",codeExample:"f.seek(100); data = f.read(50)"},{question:"Can you use read(size) with a file object from urllib or requests?",shortAnswer:"Yes, if the object supports read() with a size parameter.",explanation:"Many streaming response objects support it.",hint:"Works with file‑like objects.",level:"advanced",codeExample:"response.read(1024)"},{question:"What is the walrus operator and how does it help with read(size)?",shortAnswer:"It allows assigning and testing in one expression: `while chunk := f.read(size):`.",explanation:"It simplifies the loop by combining assignment and condition.",hint:"Python 3.8+.",level:"advanced",codeExample:"while chunk := f.read(8192): process(chunk)"},{question:"Is it possible to read a file in chunks without a loop?",shortAnswer:"No, you need a loop to process multiple chunks.",explanation:"Unless you only need one chunk.",hint:"A loop is required.",level:"basic",codeExample:null},{question:"What happens if you read a file with a chunk size larger than the file?",shortAnswer:"It reads the entire file in one chunk.",explanation:"It returns the whole file content.",hint:"No error, just all data.",level:"basic",codeExample:null},{question:"Why might read(size) be preferred over readline() for certain tasks?",shortAnswer:"When you need to read raw bytes or fixed‑sized blocks.",explanation:"readline() is line‑oriented; read(size) is not.",hint:"Different use cases.",level:"intermediate",codeExample:null},{question:"What is the effect of buffering on read(size)?",shortAnswer:"Python's built‑in buffering means read(size) may read more than size into the buffer.",explanation:"The buffer improves performance by reading ahead.",hint:"Buffer size can be set in open()",level:"advanced",codeExample:"open('f.txt', 'r', buffering=8192)"},{question:"How can you read a file backwards using read(size)?",shortAnswer:"Use seek() to move to positions from the end and read backwards.",explanation:"You can seek to end-100 and read(100), etc.",hint:"Seek from the end.",level:"advanced",codeExample:"f.seek(-100, 2); data = f.read(100)"}],T=()=>{const n=l.useRef([]);l.useEffect(()=>{const a=new IntersectionObserver(t=>{t.forEach(i=>{i.isIntersecting&&i.target.classList.add("section-visible")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});return n.current.forEach(t=>{t&&a.observe(t)}),()=>a.disconnect()},[]);const r=a=>{a&&!n.current.includes(a)&&n.current.push(a)};return e.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 p-6 md:p-8 lg:p-12 font-sans leading-relaxed",children:[e.jsxs("header",{ref:r,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-gray-200 dark:border-gray-800",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-sm font-mono bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full",children:"Topic 14"}),e.jsx("span",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:"Core"})]}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight",children:"Reading Files using `read(size)`"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 mt-3 max-w-3xl",children:"Controlled reading: reading exactly a specified number of characters or bytes from a file."}),e.jsxs("div",{className:"flex flex-wrap gap-3 mt-4",children:[e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"📏 read(size)"}),e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"🔄 Chunked Reading"}),e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"💾 Memory‑Efficient"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📏"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"The `read(size)` Method"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["The ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"read(size)"})," method reads up to ",e.jsx("code",{children:"size"})," number of characters (in text mode) or bytes (in binary mode) from the current file position. It is the key to ",e.jsx("strong",{children:"memory‑efficient"})," file processing."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Prototype:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"file.read(size)"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Return type:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"str"})," (text mode) or",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"bytes"})," (binary mode)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Purpose:"})," Read a limited amount of data, which is essential for handling large files without exhausting memory."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Behavior:"})," If the file has fewer than",e.jsx("code",{children:"size"})," characters/bytes remaining, it returns only what's available. If it's at EOF, it returns an empty string/bytes."]})]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-4 rounded-r-xl",children:[e.jsx("p",{className:"text-blue-700 dark:text-blue-300 font-medium",children:"💡 Key Insight:"}),e.jsxs("p",{className:"text-blue-600 dark:text-blue-400 text-sm",children:[e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"read(size)"})," is the fundamental building block for streaming file processing. Combined with a loop, it enables you to process files of any size."]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-100",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📝"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Syntax and Parameters"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["The ",e.jsx("code",{children:"read(size)"})," method takes a single parameter:"]}),e.jsx("ul",{children:e.jsxs("li",{children:[e.jsx("strong",{children:"size:"})," An integer specifying the maximum number of characters (text mode) or bytes (binary mode) to read."]})}),e.jsx("p",{children:e.jsx("strong",{children:"Behavior details:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:["If ",e.jsx("code",{children:"size"})," is positive, it reads at most that many characters/bytes."]}),e.jsxs("li",{children:["If ",e.jsx("code",{children:"size"})," is negative or omitted, it reads until EOF (same as ",e.jsx("code",{children:"read()"})," without arguments)."]}),e.jsxs("li",{children:["If ",e.jsx("code",{children:"size"})," is zero, it returns an empty string/bytes and does not advance the file pointer."]}),e.jsxs("li",{children:["In text mode, ",e.jsx("code",{children:"size"})," is measured in ",e.jsx("strong",{children:"characters"}),", not bytes, due to variable‑length encodings like UTF‑8."]}),e.jsxs("li",{children:["In binary mode, ",e.jsx("code",{children:"size"})," is measured in ",e.jsx("strong",{children:"bytes"}),"."]})]})]}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-950/20 rounded-xl p-4 border border-yellow-200 dark:border-yellow-800/50 mt-4",children:e.jsxs("p",{className:"text-yellow-700 dark:text-yellow-300 text-sm",children:["💡 ",e.jsx("strong",{children:"Note:"})," The actual number of characters read in text mode may be less than ",e.jsx("code",{children:"size"})," if the file contains multi‑byte characters (e.g., UTF‑8). It reads until the character boundary is reached."]})})]}),e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-200",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🔄"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"The Chunked Reading Pattern"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["The most common use of ",e.jsx("code",{children:"read(size)"})," is to read a file in ",e.jsx("strong",{children:"chunks"}),". This pattern processes a file incrementally, keeping memory usage constant."]}),e.jsx("p",{children:e.jsx("strong",{children:"Standard pattern:"})}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-xl overflow-x-auto text-sm",children:e.jsxs("code",{className:"text-gray-800 dark:text-gray-200",children:["with open('large_file.txt', 'r', encoding='utf-8') as f:",e.jsx("br",{}),"chunk_size = 8192  # 8KB",e.jsx("br",{}),"while True:",e.jsx("br",{}),"chunk = f.read(chunk_size)",e.jsx("br",{}),"if not chunk:  # EOF",e.jsx("br",{}),"break",e.jsx("br",{}),"process(chunk)  # process the chunk"]})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Memory:"})," Only ",e.jsx("code",{children:"chunk_size"})," bytes are in memory at any time."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Speed:"})," It balances I/O overhead (fewer reads) with memory usage."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Flexibility:"})," You can choose the chunk size based on your application's needs."]})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"⚖️"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Choosing the Right Chunk Size"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsx("p",{children:"The optimal chunk size depends on your system, disk type, and application. Here are some guidelines:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Common sizes:"})," 4096 (4KB), 8192 (8KB), 16384 (16KB), 65536 (64KB), 1MB, etc."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Power‑of‑two:"})," Many file systems use block sizes that are powers of two, so these tend to perform well."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Trade‑off:"})," Smaller chunks reduce memory usage but increase I/O calls; larger chunks improve speed but use more memory."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Experimentation:"})," Profile your code with different sizes to find the sweet spot for your environment."]})]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-4 rounded-r-xl",children:[e.jsx("p",{className:"text-blue-700 dark:text-blue-300 font-medium",children:"💡 Pro Tip:"}),e.jsx("p",{className:"text-blue-600 dark:text-blue-400 text-sm",children:"For text files, a chunk size of 8192 or 16384 is a good starting point. For binary files (images, videos), larger chunks (e.g., 1MB) can be more efficient."})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🔤"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Text Mode vs Binary Mode: Size Interpretation"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["It's crucial to understand how ",e.jsx("code",{children:"size"})," is interpreted in different modes:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Text mode ('r'):"})," ",e.jsx("code",{children:"size"})," is the maximum number of ",e.jsx("strong",{children:"characters"})," to read. Due to encoding (e.g., UTF‑8), one character may be 1-4 bytes. The method reads enough bytes to decode at most ",e.jsx("code",{children:"size"}),"characters."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Binary mode ('rb'):"})," ",e.jsx("code",{children:"size"})," is the exact number of ",e.jsx("strong",{children:"bytes"})," to read. No decoding is performed."]})]}),e.jsxs("p",{children:["This distinction means that in text mode, you may read slightly more or fewer bytes than ",e.jsx("code",{children:"size"})," to ensure you're at a character boundary."]})]}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-950/20 rounded-xl p-4 border border-yellow-200 dark:border-yellow-800/50 mt-4",children:e.jsxs("p",{className:"text-yellow-700 dark:text-yellow-300 text-sm",children:["📌 ",e.jsx("strong",{children:"Remember:"})," If you need to read a fixed number of ",e.jsx("em",{children:"bytes"})," regardless of content, use binary mode. For text, if you need exact byte control, consider binary mode and decode later."]})})]}),e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🌍"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Real-World Scenarios"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"bg-blue-50 dark:bg-blue-950/30 rounded-xl p-6 border border-blue-200 dark:border-blue-800/50 transition-all duration-300 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Processing a Multi‑GB Log File"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:["A server in Barrackpore generates several gigabytes of log data daily. A monitoring script reads the log in 64KB chunks using ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"read(65536)"}),", extracts relevant entries, and stores them in a database — all without loading the entire log into memory."]})]})]})}),e.jsx("div",{className:"bg-purple-50 dark:bg-purple-950/30 rounded-xl p-6 border border-purple-200 dark:border-purple-800/50 transition-all duration-300 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"🖼️"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Transferring Large Images"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:["An image processing pipeline in Shyamnagar reads high‑resolution images (hundreds of MB each) in 1MB chunks using",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"read(1048576)"}),". This allows the pipeline to process images sequentially without running out of memory on the server."]})]})]})}),e.jsx("div",{className:"bg-green-50 dark:bg-green-950/30 rounded-xl p-6 border border-green-200 dark:border-green-800/50 transition-all duration-300 hover:shadow-lg hover:border-green-300 dark:hover:border-green-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"📡"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Streaming Data from a Sensor"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:"An IoT device in Naihati writes sensor readings to a file every second. A processing script reads the file in small chunks (e.g., 1024 bytes) to parse each reading as it arrives, demonstrating real‑time chunked processing."})]})]})})]})]}),e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🐍"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Python in Action"})]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 text-lg mb-6",children:["The following examples demonstrate reading files with ",e.jsx("code",{children:"read(size)"}),"."]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(s,{fileModule:c,title:"Basic read(size) Usage",highlightLines:[]}),e.jsx(s,{fileModule:h,title:"Chunked Reading Pattern",highlightLines:[]}),e.jsx(s,{fileModule:m,title:"Binary Mode read(size)",highlightLines:[]}),e.jsx(s,{fileModule:x,title:"Handling Partial Reads",highlightLines:[]}),e.jsx(s,{fileModule:u,title:"Performance Comparison",highlightLines:[]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"💡"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Tips & Tricks"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{title:"Choose a power‑of‑two chunk size",desc:"4096, 8192, 16384 are aligned with OS buffers."},{title:"Profile to find the optimal size",desc:"Use `time` or `cProfile` to test different sizes."},{title:"For text, be aware of character boundaries",desc:"`read(size)` may read slightly more bytes to complete a character."},{title:"Use `while chunk := f.read(size):` (Python 3.8+)",desc:"The walrus operator simplifies the loop."},{title:"Always specify encoding in text mode",desc:"Avoid platform‑dependent surprises."},{title:"Consider using `io.BufferedReader` for buffering",desc:"It's built‑in; `open()` already provides buffering."}].map((a,t)=>e.jsxs("div",{className:"bg-amber-50 dark:bg-amber-950/20 rounded-xl p-5 border border-amber-200 dark:border-amber-800/50 transition-all duration-300 hover:shadow-lg hover:border-amber-300 dark:hover:border-amber-600 hover:-translate-y-1",children:[e.jsxs("h4",{className:"font-semibold text-gray-900 dark:text-white flex items-start gap-2",children:[e.jsx("span",{className:"text-amber-500",children:"✦"})," ",a.title]}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 mt-1",children:a.desc})]},t))})]}),e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Common Mistakes"})]}),e.jsx("div",{className:"space-y-3",children:[{mistake:"Using `read(size)` without a loop, expecting to read the whole file",fix:"Remember, `read(size)` reads at most `size` characters. Use a loop."},{mistake:"Not checking for partial reads",fix:"Always check if the returned chunk is empty to detect EOF."},{mistake:"Assuming `size` in text mode is in bytes",fix:"It's characters; for exact bytes, use binary mode."},{mistake:"Choosing a chunk size that is too small, causing many I/O calls",fix:"Aim for at least 4KB to avoid overhead."},{mistake:"Choosing a chunk size that is too large, causing memory bloat",fix:"Balance memory vs. I/O performance."}].map((a,t)=>e.jsx("div",{className:"bg-red-50 dark:bg-red-950/20 rounded-xl p-5 border border-red-200 dark:border-red-800/50 transition-all duration-300 hover:shadow-lg hover:border-red-300 dark:hover:border-red-600",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-red-500 text-lg",children:"✗"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-gray-800 dark:text-gray-200 font-medium",children:a.mistake}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:["✓ ",a.fix]})]})]})},t))})]}),e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Best Practices"})]}),e.jsx("div",{className:"bg-emerald-50 dark:bg-emerald-950/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/50 transition-all duration-300 hover:shadow-lg hover:border-emerald-300 dark:hover:border-emerald-600",children:e.jsxs("ul",{className:"space-y-3 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Always use chunked reading for large files:"})," ","This is the only way to process files larger than available memory."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Use a reasonable chunk size:"})," ","Start with 8192 or 16384 and adjust based on profiling."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Handle EOF correctly:"})," ","Use `if not chunk: break` to exit the loop."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Combine with `with` for automatic close:"})," ","Always use context managers."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Test with representative file sizes:"})," ","Ensure your code handles both small and large files gracefully."]})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📋"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Mini Checklist"})]}),e.jsxs("div",{className:"bg-indigo-50 dark:bg-indigo-950/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800/50 transition-all duration-300 hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-600",children:[e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"By the end of this topic, you should understand:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:["The `read(size)` method and its parameters","How `size` is interpreted in text vs binary modes","The chunked reading pattern for large files","How to detect EOF correctly","Factors in choosing an appropriate chunk size","Common pitfalls and how to avoid them","Best practices for memory‑efficient file reading"].map((a,t)=>e.jsxs("div",{className:"flex items-center gap-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900/50 px-4 py-2 rounded-lg",children:[e.jsx("span",{className:"text-indigo-400",children:"☐"}),e.jsx("span",{className:"text-sm",children:a})]},t))})]})]}),e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🤔"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Think About…"})]}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-950/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800/50 transition-all duration-300 hover:shadow-lg hover:border-yellow-300 dark:hover:border-yellow-600",children:e.jsxs("div",{className:"space-y-4 text-gray-700 dark:text-gray-300",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Observe carefully:"})," ",'What happens if you call `read(5)` on a file containing "Hello world"? What if the file contains "😊" (emoji) — how many characters does `read(1)` return?']})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Try changing this:"})," ","Write a program that reads a large file in chunks of 1024 bytes and counts the number of spaces. Compare the speed with reading the whole file at once."]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Think about:"})," ","Why might a streaming service (like Netflix) use chunked reading? How does it relate to reading a video file in parts?"]})]})]})})]}),e.jsx("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-300",children:e.jsx(o,{title:"Reading with read(size) – FAQs",questions:f})}),e.jsx("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-300",children:e.jsx(d,{note:"The `read(size)` method is the workhorse of efficient file processing. Students often overlook it and use `read()` on large files, leading to memory errors. Use the analogy of eating a pizza: you can eat it all at once (if it's small) or slice by slice (chunks). Emphasize that chunked reading is not just a trick — it's essential for production‑grade code. Show them the performance trade‑offs with different chunk sizes. Also, clarify the text vs binary distinction, as it's a frequent source of confusion."})}),e.jsxs("footer",{className:"pt-8 mt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400",children:[e.jsx("p",{children:"Topic 14: Reading Files using read(size) · Built with ❤️ for classroom learning"}),e.jsx("p",{className:"mt-1",children:"Next: Topic 15 — Reading Files using readline()"})]})]}),e.jsx("style",{children:`
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
