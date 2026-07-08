import{r as d,j as e}from"./index-CFVtO9P_.js";import{P as n}from"./PythonFileLoader-BWegqwOv.js";import{F as l}from"./FAQTemplate-CAe3FOoX.js";import{T as o}from"./TeacherSukantaHui-D1Z2v8eP.js";import"./PythonCodeBlock-BU_4Xbz-.js";import"./prism-BpRLhmdq.js";import"./browser-BLY_Ogsx.js";import"./clsx-B-dksMZM.js";import"./git-branch-BV3XnfBa.js";const c=`# binary_read_mode.py\r
# Demonstrates reading binary files with 'rb' mode\r
\r
import os\r
\r
def read_binary_file(filename):\r
    """Read a binary file and display its bytes."""\r
    try:\r
        with open(filename, 'rb') as f:\r
            data = f.read()\r
        print(f"📖 Read {len(data)} bytes from '{filename}'")\r
        print(f"   First 20 bytes (hex): {data[:20].hex()}")\r
        print(f"   First 20 bytes (repr): {data[:20]}")\r
        return data\r
    except FileNotFoundError:\r
        print(f"❌ File '{filename}' not found.")\r
        return None\r
    except Exception as e:\r
        print(f"❌ Error: {e}")\r
        return None\r
\r
def create_sample_binary():\r
    """Create a sample binary file for demonstration."""\r
    filename = "sample.bin"\r
    with open(filename, 'wb') as f:\r
        f.write(b'\\x48\\x65\\x6C\\x6C\\x6F')  # "Hello"\r
        f.write(b'\\x00\\x01\\x02\\x03\\xFF')\r
        f.write(b'\\xAB\\xCD\\xEF')\r
    print(f"✅ Created sample binary file: {filename}")\r
    return filename\r
\r
if __name__ == "__main__":\r
    # Create a sample file\r
    sample = create_sample_binary()\r
\r
    # Read it\r
    read_binary_file(sample)\r
\r
    # Clean up\r
    os.remove(sample)\r
    print("🧹 Cleaned up.")`,x=`# binary_write_mode.py\r
# Demonstrates writing binary files with 'wb' mode\r
\r
import os\r
\r
def write_binary_file(filename, data):\r
    """Write bytes to a binary file using 'wb' mode."""\r
    with open(filename, 'wb') as f:\r
        f.write(data)\r
    print(f"✅ Wrote {len(data)} bytes to '{filename}'")\r
    print(f"   Data hex: {data.hex()}")\r
\r
def show_file_content(filename):\r
    """Show the binary content of a file."""\r
    with open(filename, 'rb') as f:\r
        data = f.read()\r
    print(f"📄 Content of '{filename}' ({len(data)} bytes):")\r
    print(f"   Hex: {data.hex()}")\r
    print(f"   Repr: {data}")\r
\r
if __name__ == "__main__":\r
    filename = "output.bin"\r
\r
    # Different types of binary data\r
    data1 = b'Hello\\x00World'\r
    data2 = bytes([0, 1, 2, 3, 4, 5])\r
    data3 = b'\\xFF\\xFE\\xFD\\xFC'\r
\r
    # Write first data\r
    write_binary_file(filename, data1)\r
    show_file_content(filename)\r
\r
    # Write second data (overwrites)\r
    write_binary_file(filename, data2)\r
    show_file_content(filename)\r
\r
    # Clean up\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")`,m=`# binary_append_mode.py\r
# Demonstrates appending to binary files with 'ab' mode\r
\r
import os\r
import struct\r
\r
def append_binary(filename, data):\r
    """Append bytes to a binary file using 'ab' mode."""\r
    with open(filename, 'ab') as f:\r
        f.write(data)\r
    print(f"✅ Appended {len(data)} bytes to '{filename}'")\r
\r
def read_binary(filename):\r
    """Read and display the entire binary file."""\r
    with open(filename, 'rb') as f:\r
        data = f.read()\r
    print(f"📄 Content ({len(data)} bytes): {data.hex()}")\r
    return data\r
\r
if __name__ == "__main__":\r
    filename = "appended.bin"\r
\r
    # Start with some data\r
    with open(filename, 'wb') as f:\r
        f.write(b'\\x01\\x02\\x03')\r
\r
    print("📄 Initial file:")\r
    read_binary(filename)\r
\r
    # Append some more data\r
    append_binary(filename, b'\\x04\\x05\\x06')\r
    print("📄 After first append:")\r
    read_binary(filename)\r
\r
    # Append structured data (integers)\r
    data = struct.pack('i', 42)  # 4-byte integer\r
    append_binary(filename, data)\r
    print("📄 After appending integer 42:")\r
    read_binary(filename)\r
\r
    # Clean up\r
    os.remove(filename)\r
    print("🧹 Cleaned up.")`,h=`# binary_read_write_modes.py\r
# Compares rb+, wb+, and ab+ modes\r
\r
import os\r
\r
def demo_rbplus():\r
    """Demonstrate 'rb+' mode: read and write without truncation."""\r
    filename = "rbplus_demo.bin"\r
\r
    # Create initial binary file\r
    with open(filename, 'wb') as f:\r
        f.write(b'\\x00\\x01\\x02\\x03\\x04\\x05\\x06\\x07\\x08\\x09')\r
\r
    print("🔹 'rb+' – Read and Write Binary (no truncate)")\r
    with open(filename, 'rb+') as f:\r
        # Read first 4 bytes\r
        first = f.read(4)\r
        print(f"   Read first 4 bytes: {first.hex()}")\r
\r
        # Write at position 2 (overwrite bytes 2-3)\r
        f.seek(2)\r
        f.write(b'\\xFF\\xFF')\r
\r
        # Read all from start\r
        f.seek(0)\r
        content = f.read()\r
        print(f"   After modification: {content.hex()}")\r
\r
    os.remove(filename)\r
\r
def demo_wbplus():\r
    """Demonstrate 'wb+' mode: write and read with truncation."""\r
    filename = "wbplus_demo.bin"\r
\r
    # File doesn't exist yet\r
    print("🔹 'wb+' – Write and Read Binary (truncate)")\r
    with open(filename, 'wb+') as f:\r
        # Write some data\r
        f.write(b'\\xAA\\xBB\\xCC\\xDD')\r
\r
        # Read back (need to seek to start)\r
        f.seek(0)\r
        data = f.read()\r
        print(f"   Wrote and read: {data.hex()}")\r
\r
        # Write more (at end, after reading)\r
        f.write(b'\\xEE\\xFF')\r
        f.seek(0)\r
        final = f.read()\r
        print(f"   After adding more: {final.hex()}")\r
\r
    os.remove(filename)\r
\r
def demo_abplus():\r
    """Demonstrate 'ab+' mode: append and read."""\r
    filename = "abplus_demo.bin"\r
\r
    # Create initial file\r
    with open(filename, 'wb') as f:\r
        f.write(b'\\x10\\x20\\x30')\r
\r
    print("🔹 'ab+' – Append and Read Binary")\r
    with open(filename, 'ab+') as f:\r
        # Read existing (pointer at start)\r
        existing = f.read()\r
        print(f"   Existing content: {existing.hex()}")\r
\r
        # Append new data (always at end)\r
        f.write(b'\\x40\\x50\\x60')\r
\r
        # Read entire file (need to seek to start)\r
        f.seek(0)\r
        all_data = f.read()\r
        print(f"   After append: {all_data.hex()}")\r
\r
    os.remove(filename)\r
\r
if __name__ == "__main__":\r
    demo_rbplus()\r
    print()\r
    demo_wbplus()\r
    print()\r
    demo_abplus()\r
    print("🧹 All cleaned up.")`,p=`# image_copy_example.py\r
# Demonstrates copying a binary file (like an image)\r
\r
import os\r
import shutil\r
\r
def create_dummy_image(filename="dummy.jpg"):\r
    """Create a dummy binary file that simulates an image."""\r
    # This is just binary data, not a real JPEG\r
    dummy_data = b'\\xFF\\xD8\\xFF\\xE0'  # JPEG header signature\r
    dummy_data += b'\\x00\\x10\\x4A\\x46\\x49\\x46\\x00\\x01'\r
    dummy_data += b'\\x00' * 1000  # fill with zeros\r
    with open(filename, 'wb') as f:\r
        f.write(dummy_data)\r
    print(f"✅ Created dummy image: {filename}")\r
    return filename\r
\r
def copy_binary_file(src, dst):\r
    """Copy a binary file in chunks."""\r
    chunk_size = 1024  # 1KB chunks\r
    copied = 0\r
\r
    with open(src, 'rb') as source:\r
        with open(dst, 'wb') as dest:\r
            while True:\r
                chunk = source.read(chunk_size)\r
                if not chunk:\r
                    break\r
                dest.write(chunk)\r
                copied += len(chunk)\r
\r
    print(f"📋 Copied {copied} bytes from '{src}' to '{dst}'")\r
    return copied\r
\r
def compare_files(f1, f2):\r
    """Compare two binary files."""\r
    with open(f1, 'rb') as a, open(f2, 'rb') as b:\r
        data1 = a.read()\r
        data2 = b.read()\r
\r
    if data1 == data2:\r
        print(f"✅ Files are identical ({len(data1)} bytes)")\r
    else:\r
        print(f"❌ Files differ: {len(data1)} vs {len(data2)} bytes")\r
\r
if __name__ == "__main__":\r
    # Create a dummy image\r
    src = create_dummy_image()\r
\r
    # Copy it\r
    dst = "copy_of_image.jpg"\r
    copy_binary_file(src, dst)\r
\r
    # Verify they match\r
    compare_files(src, dst)\r
\r
    # Check file sizes\r
    size1 = os.path.getsize(src)\r
    size2 = os.path.getsize(dst)\r
    print(f"📊 Sizes: {size1} bytes (original), {size2} bytes (copy)")\r
\r
    # Clean up\r
    for f in [src, dst]:\r
        if os.path.exists(f):\r
            os.remove(f)\r
    print("🧹 Cleaned up.")`,y=`# struct_binary_example.py\r
# Demonstrates working with structured binary data using struct\r
\r
import os\r
import struct\r
\r
def write_structured_data(filename):\r
    """Write structured binary data (integers and floats)."""\r
    # Pack data: 2 integers (i) and 1 float (f)\r
    data = struct.pack('iif', 42, 100, 3.14159)\r
\r
    with open(filename, 'wb') as f:\r
        f.write(data)\r
\r
    print(f"✅ Wrote structured data to '{filename}'")\r
    print(f"   Data bytes: {data.hex()}")\r
\r
def read_structured_data(filename):\r
    """Read and unpack structured binary data."""\r
    with open(filename, 'rb') as f:\r
        data = f.read()\r
\r
    # Unpack: 2 integers and 1 float\r
    a, b, c = struct.unpack('iif', data)\r
    print(f"📄 Unpacked data from '{filename}':")\r
    print(f"   Integer 1: {a}")\r
    print(f"   Integer 2: {b}")\r
    print(f"   Float: {c:.5f}")\r
\r
def write_array_of_integers(filename, count=10):\r
    """Write an array of integers as binary."""\r
    import array\r
    arr = array.array('i', range(count))\r
    with open(filename, 'wb') as f:\r
        arr.tofile(f)\r
    print(f"✅ Wrote {count} integers to '{filename}'")\r
    return arr\r
\r
def read_array_of_integers(filename):\r
    """Read an array of integers from binary."""\r
    import array\r
    with open(filename, 'rb') as f:\r
        data = f.read()\r
    # Guess the number of integers\r
    count = len(data) // 4  # 4 bytes per int\r
    arr = array.array('i')\r
    arr.frombytes(data)\r
    print(f"📄 Read {len(arr)} integers from '{filename}'")\r
    print(f"   First 5: {arr[:5].tolist()}")\r
    return arr\r
\r
if __name__ == "__main__":\r
    filename = "structured.bin"\r
\r
    # Write and read structured data\r
    write_structured_data(filename)\r
    read_structured_data(filename)\r
\r
    print()\r
\r
    # Write and read array of integers\r
    arr_filename = "array.bin"\r
    write_array_of_integers(arr_filename, 20)\r
    read_array_of_integers(arr_filename)\r
\r
    # Clean up\r
    for f in [filename, arr_filename]:\r
        if os.path.exists(f):\r
            os.remove(f)\r
    print("🧹 Cleaned up.")`,b=[{question:"What is the difference between 'r' and 'rb' modes?",shortAnswer:"'r' reads as text (strings), 'rb' reads as binary (bytes).",explanation:"Text mode applies encoding/decoding; binary mode returns raw bytes.",hint:"One gives strings, the other gives bytes.",level:"intermediate",codeExample:"open('file.txt', 'r') vs open('file.bin', 'rb')"},{question:"What does 'wb' mode do?",shortAnswer:"Opens a file for writing in binary mode; creates or overwrites.",explanation:"It writes bytes; the file is truncated if it exists.",hint:"Like 'w' but for bytes.",level:"intermediate",codeExample:"open('file.bin', 'wb')"},{question:"What does 'ab' mode do?",shortAnswer:"Opens a file for appending in binary mode; creates if missing.",explanation:"Writes are added to the end of the file.",hint:"Like 'a' but for bytes.",level:"intermediate",codeExample:"open('log.bin', 'ab')"},{question:"What is the data type returned by reading a binary file?",shortAnswer:"bytes.",explanation:"Binary mode returns bytes objects, not strings.",hint:"Use `type(f.read())` to check.",level:"basic",codeExample:"data = f.read(); type(data)  # bytes"},{question:"Can you write a string to a file opened in 'wb' mode?",shortAnswer:"No, you must write bytes. Convert strings with `.encode()`.",explanation:"Binary mode expects bytes-like objects.",hint:"Use `f.write('text'.encode())`.",level:"intermediate",codeExample:"f.write(b'bytes')  # OK; f.write('text')  # TypeError"},{question:"What is the purpose of 'rb+' mode?",shortAnswer:"Opens a binary file for reading and writing without truncation.",explanation:"The file must exist; you can read and write at any position.",hint:"Like 'r+' but for bytes.",level:"advanced",codeExample:"open('file.bin', 'rb+')"},{question:"What is the purpose of 'wb+' mode?",shortAnswer:"Opens a binary file for writing and reading; truncates.",explanation:"Creates a new file or overwrites; allows reading what was written.",hint:"Like 'w+' but for bytes.",level:"advanced",codeExample:"open('file.bin', 'wb+')"},{question:"What is the purpose of 'ab+' mode?",shortAnswer:"Opens a binary file for appending and reading.",explanation:"Writes are always at the end; reads start at the beginning.",hint:"Like 'a+' but for bytes.",level:"advanced",codeExample:"open('log.bin', 'ab+')"},{question:"Why do you get a TypeError when writing a string to a binary file?",shortAnswer:"Because binary mode expects bytes, not strings.",explanation:"You must encode strings to bytes before writing.",hint:"Use `.encode()`.",level:"basic",codeExample:"f.write('text')  # TypeError; f.write(b'text')  # OK"},{question:"What happens if you open a non-existent file with 'rb'?",shortAnswer:"FileNotFoundError is raised.",explanation:"Like 'r', 'rb' requires the file to exist.",hint:"Check existence before reading.",level:"intermediate",codeExample:"open('missing.bin', 'rb')  # FileNotFoundError"},{question:"What happens if you open a non-existent file with 'wb'?",shortAnswer:"A new empty file is created.",explanation:"Like 'w', 'wb' creates the file if it doesn't exist.",hint:"It's for writing.",level:"intermediate",codeExample:"open('new.bin', 'wb')  # creates"},{question:"What is the `struct` module used for in binary I/O?",shortAnswer:"To pack/unpack Python data to/from binary representations.",explanation:"It's essential for reading/writing structured binary formats.",hint:"Use for integers, floats, and custom binary layouts.",level:"advanced",codeExample:"struct.pack('i', 42)"},{question:"How do you convert bytes to a string in Python?",shortAnswer:"Use the `.decode()` method with the appropriate encoding.",explanation:"Example: `b'hello'.decode('utf-8')`.",hint:"The opposite of `.encode()`.",level:"basic",codeExample:"b'hello'.decode('utf-8')  # 'hello'"},{question:"How do you convert a string to bytes in Python?",shortAnswer:"Use the `.encode()` method with the appropriate encoding.",explanation:"Example: `'hello'.encode('utf-8')`.",hint:"The opposite of `.decode()`.",level:"basic",codeExample:"'hello'.encode('utf-8')  # b'hello'"},{question:"Why should you use binary mode for image files?",shortAnswer:"Images contain non‑text data that would be corrupted by text encoding.",explanation:"Opening an image in text mode would try to decode the bytes as characters, causing corruption.",hint:"Always use 'rb' for images.",level:"basic",codeExample:"open('image.jpg', 'rb')"},{question:"What is the default encoding for `bytes.decode()`?",shortAnswer:"UTF‑8.",explanation:"The default is UTF‑8, but you should specify it explicitly.",hint:"Always specify `encoding='utf-8'`.",level:"intermediate",codeExample:"b'hello'.decode('utf-8')"},{question:"Can you use `seek()` on a binary file?",shortAnswer:"Yes, `seek()` works in binary mode and is more predictable than in text mode.",explanation:"Binary mode works with byte offsets, which are easier to handle.",hint:"Use `seek(0)` to go to the start.",level:"intermediate",codeExample:"f.seek(10)  # move 10 bytes from start"},{question:"What is a `bytearray` and how is it different from `bytes`?",shortAnswer:"`bytearray` is mutable; `bytes` is immutable.",explanation:"Use `bytearray` when you need to modify binary data in place.",hint:"Like a list of bytes you can change.",level:"advanced",codeExample:"ba = bytearray(b'hello'); ba[0] = 72"},{question:"Why do binary files often have a smaller size than text files for the same data?",shortAnswer:"Binary files store data in compact raw bytes; text files add encoding overhead.",explanation:"Numbers are stored as binary integers (4 bytes) instead of decimal strings (up to 10 bytes).",hint:"Efficiency is the key.",level:"intermediate",codeExample:null},{question:"What is the purpose of `memoryview` with binary files?",shortAnswer:"It provides a zero‑copy view of bytes, avoiding unnecessary copying.",explanation:"Useful for large binary data where performance matters.",hint:"It's like a pointer to the data.",level:"advanced",codeExample:"mv = memoryview(data)"},{question:"How do you read a binary file in chunks to avoid memory issues?",shortAnswer:"Use `f.read(chunk_size)` in a loop.",explanation:"Reading a large file all at once can exhaust memory.",hint:"Process 1MB at a time.",level:"intermediate",codeExample:"while chunk := f.read(1024*1024): process(chunk)"},{question:"Can you open a binary file in text mode and read it as characters?",shortAnswer:"It may work if the bytes are valid UTF‑8, but it's not recommended.",explanation:"Binary files often contain non‑UTF‑8 bytes, causing UnicodeDecodeError.",hint:"Always use binary mode for binary files.",level:"intermediate",codeExample:"open('image.jpg', 'r')  # bad practice"},{question:"What is the difference between 'ab' and 'ab+' modes?",shortAnswer:"'ab' is write‑only (append); 'ab+' allows reading as well.",explanation:"'ab+' adds read capability to appending.",hint:"'+' adds read.",level:"advanced",codeExample:"open('log.bin', 'ab') vs open('log.bin', 'ab+')"},{question:"How do you copy a binary file in Python?",shortAnswer:"Open source in 'rb', destination in 'wb', read and write chunks.",explanation:"Use `shutil.copyfile()` for simplicity, or manual chunk copying.",hint:"`shutil.copyfile(src, dst)` is the easiest.",level:"intermediate",codeExample:"shutil.copyfile('src.bin', 'dst.bin')"},{question:"What is the file signature (magic number) of a binary file?",shortAnswer:"A unique byte sequence at the start of a file that identifies its format.",explanation:"For example, JPEG starts with `FF D8`, PDF with `25 50 44 46`.",hint:"Used by `file` command on Unix.",level:"advanced",codeExample:null},{question:"How can you check if a file is binary or text programmatically?",shortAnswer:"Read a sample and look for null bytes or non‑printable characters.",explanation:"If it contains `\\x00`, it's likely binary.",hint:"Use a heuristic.",level:"advanced",codeExample:"if b'\\x00' in data: print('Binary')"},{question:"Why is `pickle` data stored as binary?",shortAnswer:"Pickle serializes Python objects to a compact binary format.",explanation:"Binary is more efficient and can represent complex structures.",hint:"It's Python‑specific binary serialization.",level:"intermediate",codeExample:"pickle.dump(obj, open('data.pkl', 'wb'))"},{question:"What is the `array` module used for with binary files?",shortAnswer:"To efficiently store arrays of numeric types in binary format.",explanation:"It writes the raw memory representation of numbers.",hint:"Use `array('i', [1,2,3]).tofile(f)`.",level:"advanced",codeExample:"from array import array; array('i', [1,2,3]).tofile(f)"},{question:"How do you read a binary file and interpret it as integers?",shortAnswer:"Use `struct.unpack` or `int.from_bytes`.",explanation:"You need to know the byte order and data size.",hint:"Use `struct.unpack('i', data)` for a 4‑byte integer.",level:"advanced",codeExample:"struct.unpack('i', data[:4])"},{question:"What is the maximum file size you can read with `f.read()`?",shortAnswer:"It's limited by available memory; `f.read()` loads the entire file into memory.",explanation:"For large files, use chunked reading.",hint:"Avoid for files larger than available RAM.",level:"intermediate",codeExample:null},{question:"Can you append to a binary file opened in 'rb+' mode?",shortAnswer:"Yes, by seeking to the end with `f.seek(0, 2)`.",explanation:"You can seek to any position and write.",hint:"Use `f.seek(0, 2)` to go to the end.",level:"advanced",codeExample:"f.seek(0, 2); f.write(b'extra')"}],A=()=>{const s=d.useRef([]);d.useEffect(()=>{const t=new IntersectionObserver(a=>{a.forEach(i=>{i.isIntersecting&&i.target.classList.add("section-visible")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});return s.current.forEach(a=>{a&&t.observe(a)}),()=>t.disconnect()},[]);const r=t=>{t&&!s.current.includes(t)&&s.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 p-6 md:p-8 lg:p-12 font-sans leading-relaxed",children:[e.jsxs("header",{ref:r,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-gray-200 dark:border-gray-800",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-sm font-mono bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full",children:"Topic 10"}),e.jsx("span",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:"Core"})]}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight",children:"Binary File Modes (rb, wb, ab, rb+, wb+, ab+)"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 mt-3 max-w-3xl",children:"Working with binary files: the complete set of modes for reading, writing, appending, and combining operations."}),e.jsxs("div",{className:"flex flex-wrap gap-3 mt-4",children:[e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"📖 rb"}),e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"✍️ wb"}),e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"➕ ab"}),e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"📖✍️ rb+"}),e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"✍️📖 wb+"}),e.jsx("span",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400",children:"📖➕ ab+"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📋"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Binary Modes Overview"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["Binary file modes are the ",e.jsx("strong",{children:"binary counterparts"})," to the text modes. They are used when working with non‑text data like images, audio, video, executables, or custom binary formats."]}),e.jsxs("p",{children:["The key difference is that binary modes work with ",e.jsx("strong",{children:"bytes"}),"instead of strings. No encoding/decoding is applied — you get raw bytes exactly as they are on disk."]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-4 rounded-r-xl",children:[e.jsx("p",{className:"text-blue-700 dark:text-blue-300 font-medium",children:"💡 Key Insight:"}),e.jsxs("p",{className:"text-blue-600 dark:text-blue-400 text-sm",children:["Adding ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"'b'"})," to any text mode switches it to binary mode. All the same rules apply, but you work with ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"bytes"}),"."]})]})]}),e.jsxs("div",{className:"mt-8 bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700",children:[e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{viewBox:"0 0 700 160",className:"w-full max-w-3xl h-auto",children:[e.jsx("text",{x:"350",y:"25",textAnchor:"middle",fill:"#6B7280",fontSize:"14",children:"Binary Modes at a Glance"}),e.jsx("rect",{x:"20",y:"40",width:"100",height:"50",rx:"6",fill:"#3B82F6",fillOpacity:"0.15",stroke:"#3B82F6",strokeWidth:"2"}),e.jsx("text",{x:"70",y:"63",textAnchor:"middle",fill:"#60A5FA",fontSize:"16",fontWeight:"600",children:"rb"}),e.jsx("text",{x:"70",y:"80",textAnchor:"middle",fill:"#93C5FD",fontSize:"11",children:"Read"}),e.jsx("rect",{x:"130",y:"40",width:"100",height:"50",rx:"6",fill:"#EF4444",fillOpacity:"0.15",stroke:"#EF4444",strokeWidth:"2"}),e.jsx("text",{x:"180",y:"63",textAnchor:"middle",fill:"#F87171",fontSize:"16",fontWeight:"600",children:"wb"}),e.jsx("text",{x:"180",y:"80",textAnchor:"middle",fill:"#FCA5A5",fontSize:"11",children:"Write"}),e.jsx("rect",{x:"240",y:"40",width:"100",height:"50",rx:"6",fill:"#10B981",fillOpacity:"0.15",stroke:"#10B981",strokeWidth:"2"}),e.jsx("text",{x:"290",y:"63",textAnchor:"middle",fill:"#34D399",fontSize:"16",fontWeight:"600",children:"ab"}),e.jsx("text",{x:"290",y:"80",textAnchor:"middle",fill:"#6EE7B7",fontSize:"11",children:"Append"}),e.jsx("rect",{x:"350",y:"40",width:"100",height:"50",rx:"6",fill:"#8B5CF6",fillOpacity:"0.15",stroke:"#8B5CF6",strokeWidth:"2"}),e.jsx("text",{x:"400",y:"63",textAnchor:"middle",fill:"#A78BFA",fontSize:"16",fontWeight:"600",children:"rb+"}),e.jsx("text",{x:"400",y:"80",textAnchor:"middle",fill:"#C4B5FD",fontSize:"11",children:"Read+Write"}),e.jsx("rect",{x:"460",y:"40",width:"100",height:"50",rx:"6",fill:"#F59E0B",fillOpacity:"0.15",stroke:"#F59E0B",strokeWidth:"2"}),e.jsx("text",{x:"510",y:"63",textAnchor:"middle",fill:"#FBBF24",fontSize:"16",fontWeight:"600",children:"wb+"}),e.jsx("text",{x:"510",y:"80",textAnchor:"middle",fill:"#FCD34D",fontSize:"11",children:"Write+Read"}),e.jsx("rect",{x:"570",y:"40",width:"100",height:"50",rx:"6",fill:"#EC4899",fillOpacity:"0.15",stroke:"#EC4899",strokeWidth:"2"}),e.jsx("text",{x:"620",y:"63",textAnchor:"middle",fill:"#F472B6",fontSize:"16",fontWeight:"600",children:"ab+"}),e.jsx("text",{x:"620",y:"80",textAnchor:"middle",fill:"#F9A8D4",fontSize:"11",children:"Append+Read"}),e.jsx("text",{x:"180",y:"130",textAnchor:"middle",fill:"#6B7280",fontSize:"12",children:"All work with bytes, not strings"})]})}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-3",children:"Binary modes are identical to text modes in behavior, but operate on bytes."})]})]}),e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-100",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📖✍️➕"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Basic Binary Modes: rb, wb, ab"})]}),e.jsx("div",{className:"overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-800",children:[e.jsx("thead",{className:"bg-gray-100 dark:bg-gray-800/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Mode"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Read?"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Write?"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"File must exist?"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Creates if missing?"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Truncates?"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Data type"})]})}),e.jsxs("tbody",{className:"bg-white dark:bg-gray-900/50 divide-y divide-gray-200 dark:divide-gray-800 text-gray-700 dark:text-gray-300",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-mono text-sm font-bold",children:"'rb'"}),e.jsx("td",{className:"px-6 py-4",children:"✅"}),e.jsx("td",{className:"px-6 py-4",children:"❌"}),e.jsx("td",{className:"px-6 py-4",children:"✅"}),e.jsx("td",{className:"px-6 py-4",children:"❌"}),e.jsx("td",{className:"px-6 py-4",children:"❌"}),e.jsx("td",{className:"px-6 py-4",children:"bytes"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-mono text-sm font-bold",children:"'wb'"}),e.jsx("td",{className:"px-6 py-4",children:"❌"}),e.jsx("td",{className:"px-6 py-4",children:"✅"}),e.jsx("td",{className:"px-6 py-4",children:"❌"}),e.jsx("td",{className:"px-6 py-4",children:"✅"}),e.jsx("td",{className:"px-6 py-4",children:"✅"}),e.jsx("td",{className:"px-6 py-4",children:"bytes"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-mono text-sm font-bold",children:"'ab'"}),e.jsx("td",{className:"px-6 py-4",children:"❌"}),e.jsx("td",{className:"px-6 py-4",children:"✅"}),e.jsx("td",{className:"px-6 py-4",children:"❌"}),e.jsx("td",{className:"px-6 py-4",children:"✅"}),e.jsx("td",{className:"px-6 py-4",children:"❌"}),e.jsx("td",{className:"px-6 py-4",children:"bytes"})]})]})]})}),e.jsxs("div",{className:"mt-4 grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-950/30 rounded-xl p-4 border border-blue-200 dark:border-blue-800/50",children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"'rb' – Read Binary"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Read raw bytes from an existing file."}),e.jsx("code",{className:"text-xs block mt-2 bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded",children:"with open('img.jpg', 'rb') as f: data = f.read()"})]}),e.jsxs("div",{className:"bg-red-50 dark:bg-red-950/30 rounded-xl p-4 border border-red-200 dark:border-red-800/50",children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"'wb' – Write Binary"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Write bytes, creating/overwriting."}),e.jsx("code",{className:"text-xs block mt-2 bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded",children:"with open('output.bin', 'wb') as f: f.write(b'\\x00\\x01\\x02')"})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-950/30 rounded-xl p-4 border border-green-200 dark:border-green-800/50",children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"'ab' – Append Binary"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Append bytes to the end of a file."}),e.jsx("code",{className:"text-xs block mt-2 bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded",children:"with open('log.bin', 'ab') as f: f.write(b'\\x03\\x04')"})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-200",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📖✍️"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Read+Write Binary Modes: rb+, wb+, ab+"})]}),e.jsx("div",{className:"overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-800",children:[e.jsx("thead",{className:"bg-gray-100 dark:bg-gray-800/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Mode"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Read?"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Write?"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"File must exist?"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Creates if missing?"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Truncates?"}),e.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Write position"})]})}),e.jsxs("tbody",{className:"bg-white dark:bg-gray-900/50 divide-y divide-gray-200 dark:divide-gray-800 text-gray-700 dark:text-gray-300",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-mono text-sm font-bold",children:"'rb+'"}),e.jsx("td",{className:"px-6 py-4",children:"✅"}),e.jsx("td",{className:"px-6 py-4",children:"✅"}),e.jsx("td",{className:"px-6 py-4",children:"✅"}),e.jsx("td",{className:"px-6 py-4",children:"❌"}),e.jsx("td",{className:"px-6 py-4",children:"❌"}),e.jsx("td",{className:"px-6 py-4",children:"Pointer position"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-mono text-sm font-bold",children:"'wb+'"}),e.jsx("td",{className:"px-6 py-4",children:"✅"}),e.jsx("td",{className:"px-6 py-4",children:"✅"}),e.jsx("td",{className:"px-6 py-4",children:"❌"}),e.jsx("td",{className:"px-6 py-4",children:"✅"}),e.jsx("td",{className:"px-6 py-4",children:"✅"}),e.jsx("td",{className:"px-6 py-4",children:"Start"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 font-mono text-sm font-bold",children:"'ab+'"}),e.jsx("td",{className:"px-6 py-4",children:"✅"}),e.jsx("td",{className:"px-6 py-4",children:"✅"}),e.jsx("td",{className:"px-6 py-4",children:"❌"}),e.jsx("td",{className:"px-6 py-4",children:"✅"}),e.jsx("td",{className:"px-6 py-4",children:"❌"}),e.jsx("td",{className:"px-6 py-4",children:"End (always)"})]})]})]})}),e.jsxs("div",{className:"mt-4 grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-950/30 rounded-xl p-4 border border-purple-200 dark:border-purple-800/50",children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"'rb+' – Read+Write Binary"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Read and write bytes; file must exist."}),e.jsx("code",{className:"text-xs block mt-2 bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded",children:"with open('data.bin', 'rb+') as f: data = f.read(4); f.write(b'\\xFF')"})]}),e.jsxs("div",{className:"bg-amber-50 dark:bg-amber-950/30 rounded-xl p-4 border border-amber-200 dark:border-amber-800/50",children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"'wb+' – Write+Read Binary"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Write bytes, then read back; truncates."}),e.jsx("code",{className:"text-xs block mt-2 bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded",children:"with open('out.bin', 'wb+') as f: f.write(b'data'); f.seek(0); f.read()"})]}),e.jsxs("div",{className:"bg-pink-50 dark:bg-pink-950/30 rounded-xl p-4 border border-pink-200 dark:border-pink-800/50",children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"'ab+' – Append+Read Binary"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Append bytes; reads start at beginning."}),e.jsx("code",{className:"text-xs block mt-2 bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded",children:"with open('log.bin', 'ab+') as f: f.read(); f.write(b'\\x05')"})]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🔤"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Bytes vs Strings in Binary Mode"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4",children:[e.jsxs("p",{children:["In binary mode, you work with ",e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"bytes"}),"objects, not strings. This is the most important difference from text mode."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Reading:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"f.read()"})," returns ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"bytes"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Writing:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"f.write()"})," expects ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"bytes"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Conversion:"})," Use ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:".encode()"})," to convert strings to bytes, and ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:".decode()"})," to convert bytes to strings."]})]}),e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 p-4 rounded-r-xl",children:[e.jsx("p",{className:"text-yellow-700 dark:text-yellow-300 font-medium",children:"⚠️ Common Error:"}),e.jsxs("p",{className:"text-yellow-600 dark:text-yellow-400 text-sm",children:["Trying to write a string to a binary file raises a TypeError. Always convert to bytes first: ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"f.write('text'.encode())"}),"."]})]})]}),e.jsx("div",{className:"bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 border border-gray-200 dark:border-gray-800 mt-4",children:e.jsxs("code",{className:"text-sm text-gray-800 dark:text-gray-200",children:["# String → Bytes (encode)",e.jsx("br",{}),'text = "Hello, Swadeep!"',e.jsx("br",{}),"bytes_data = text.encode('utf-8')  # b'Hello, Swadeep!'",e.jsx("br",{}),e.jsx("br",{}),"# Bytes → String (decode)",e.jsx("br",{}),"original = bytes_data.decode('utf-8')  # 'Hello, Swadeep!'"]})})]}),e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🌍"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Real-World Scenarios"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"bg-blue-50 dark:bg-blue-950/30 rounded-xl p-6 border border-blue-200 dark:border-blue-800/50 transition-all duration-300 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"🖼️"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Reading Student Photos ('rb')"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:["The school in Ichapur stores student profile pictures as JPEG files. A Python script uses ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"'rb'"}),"to read the image bytes for processing or displaying on a website."]})]})]})}),e.jsx("div",{className:"bg-purple-50 dark:bg-purple-950/30 rounded-xl p-6 border border-purple-200 dark:border-purple-800/50 transition-all duration-300 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"💾"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Saving Serialized Data ('wb')"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:["A data processing pipeline in Barrackpore uses Python's",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"pickle"})," module to save processed data. The pickle format is binary, so the file is opened with ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"'wb'"}),"."]})]})]})}),e.jsx("div",{className:"bg-green-50 dark:bg-green-950/30 rounded-xl p-6 border border-green-200 dark:border-green-800/50 transition-all duration-300 hover:shadow-lg hover:border-green-300 dark:hover:border-green-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"📝"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Binary Log Appending ('ab')"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:["An IoT device in Shyamnagar records sensor readings as binary data. Each reading is appended to a file using",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"'ab'"}),", preserving the entire history."]})]})]})}),e.jsx("div",{className:"bg-indigo-50 dark:bg-indigo-950/30 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800/50 transition-all duration-300 hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"text-3xl",children:"📦"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"In-Place Binary Editing ('rb+')"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mt-1",children:["A file recovery tool in Naihati needs to modify specific bytes in a binary file (e.g., fixing a corrupted header). Using ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-sm",children:"'rb+'"}),", it reads, modifies, and writes back without truncating."]})]})]})})]})]}),e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🐍"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Python in Action"})]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 text-lg mb-6",children:"The following examples demonstrate all binary modes in practical scenarios."}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(n,{fileModule:c,title:"Reading Binary Files ('rb')",highlightLines:[]}),e.jsx(n,{fileModule:x,title:"Writing Binary Files ('wb')",highlightLines:[]}),e.jsx(n,{fileModule:m,title:"Appending Binary Files ('ab')",highlightLines:[]}),e.jsx(n,{fileModule:h,title:"Read+Write Binary Modes (rb+, wb+, ab+)",highlightLines:[]}),e.jsx(n,{fileModule:p,title:"Copying an Image (Binary I/O)",highlightLines:[]}),e.jsx(n,{fileModule:y,title:"Working with Structured Binary Data",highlightLines:[]})]})]}),e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"💡"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Tips & Tricks"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{title:"Always use 'b' for non‑text files",desc:"Images, audio, video, executables, and pickle files must be opened in binary mode."},{title:"Use `struct` for structured binary data",desc:"The `struct` module helps pack/unpack binary data (integers, floats)."},{title:"Read in chunks for large files",desc:"Use `f.read(chunk_size)` to avoid memory overload."},{title:"Check for `\0` (null bytes) in text",desc:"If a file contains null bytes, it's likely binary, not text."},{title:"Use `memoryview` for efficient slicing",desc:"Avoid copying large byte slices; use memoryview for zero‑copy operations."},{title:"Prefer `pathlib` with binary modes",desc:"`Path('file.bin').open('rb')` works seamlessly."}].map((t,a)=>e.jsxs("div",{className:"bg-amber-50 dark:bg-amber-950/20 rounded-xl p-5 border border-amber-200 dark:border-amber-800/50 transition-all duration-300 hover:shadow-lg hover:border-amber-300 dark:hover:border-amber-600 hover:-translate-y-1",children:[e.jsxs("h4",{className:"font-semibold text-gray-900 dark:text-white flex items-start gap-2",children:[e.jsx("span",{className:"text-amber-500",children:"✦"})," ",t.title]}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 mt-1",children:t.desc})]},a))})]}),e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Common Mistakes"})]}),e.jsx("div",{className:"space-y-3",children:[{mistake:"Using text mode for images (leads to corruption)",fix:"Always use 'rb' or 'wb' for non‑text files."},{mistake:"Writing a string to a binary file (TypeError)",fix:"Use `.encode()` or convert to bytes first."},{mistake:"Trying to read a binary file as text (UnicodeDecodeError)",fix:"Open with 'rb' and work with bytes."},{mistake:"Forgetting that 'wb+' truncates the file",fix:"Use 'rb+' if you need to preserve existing data."},{mistake:"Not handling EOF when reading binary chunks",fix:"Check if `read()` returns less than the requested size."}].map((t,a)=>e.jsx("div",{className:"bg-red-50 dark:bg-red-950/20 rounded-xl p-5 border border-red-200 dark:border-red-800/50 transition-all duration-300 hover:shadow-lg hover:border-red-300 dark:hover:border-red-600",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-red-500 text-lg",children:"✗"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-gray-800 dark:text-gray-200 font-medium",children:t.mistake}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:["✓ ",t.fix]})]})]})},a))})]}),e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Best Practices"})]}),e.jsx("div",{className:"bg-emerald-50 dark:bg-emerald-950/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/50 transition-all duration-300 hover:shadow-lg hover:border-emerald-300 dark:hover:border-emerald-600",children:e.jsxs("ul",{className:"space-y-3 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Use binary mode for all non‑text files:"})," ","Images, audio, video, executables, compressed data."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Always specify 'b' explicitly:"})," ","Don't rely on default 'r' or 'w' for binary files."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Use `with` for automatic cleanup:"})," ","Even in binary mode, context managers are best practice."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Validate binary data with checksums:"})," ","For critical binary data, add checksums to detect corruption."]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-emerald-500 text-lg",children:"✓"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Document your binary format:"})," ","Binary formats are opaque; document the byte layout for maintainers."]})]})]})})]}),e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"📋"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Mini Checklist"})]}),e.jsxs("div",{className:"bg-indigo-50 dark:bg-indigo-950/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800/50 transition-all duration-300 hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-600",children:[e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"By the end of this topic, you should understand:"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:["All binary modes: rb, wb, ab, rb+, wb+, ab+","The difference between binary and text modes","How to work with bytes vs strings","When to use each binary mode","How to read/write binary data in chunks","Using `struct` for structured binary data","Common pitfalls and how to avoid them"].map((t,a)=>e.jsxs("div",{className:"flex items-center gap-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900/50 px-4 py-2 rounded-lg",children:[e.jsx("span",{className:"text-indigo-400",children:"☐"}),e.jsx("span",{className:"text-sm",children:t})]},a))})]})]}),e.jsxs("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-300",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"text-3xl",children:"🤔"}),e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Think About…"})]}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-950/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800/50 transition-all duration-300 hover:shadow-lg hover:border-yellow-300 dark:hover:border-yellow-600",children:e.jsxs("div",{className:"space-y-4 text-gray-700 dark:text-gray-300",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Observe carefully:"})," ","What happens if you open a JPEG image in text mode ('r')? What error do you get?"]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Try changing this:"})," ","Write a program that reads a binary file, prints the first 16 bytes in hex, and then writes them to a new file. What happens if you try to open the new file in a text editor?"]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-yellow-500 text-lg",children:"💭"}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-gray-900 dark:text-white",children:"Think about:"})," ","Why do databases and network protocols use binary formats? What advantages do they have over text?"]})]})]})})]}),e.jsx("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-300",children:e.jsx(l,{title:"Binary File Modes – FAQs",questions:b})}),e.jsx("section",{ref:r,className:"section-hidden transition-all duration-700 ease-out delay-300",children:e.jsx(o,{note:"Binary modes are essential for handling non‑text data. Students often struggle with the bytes/string distinction. Use concrete examples: reading an image and copying it, or reading a binary file and displaying hex. Emphasize that text is a subset of binary — it's all bytes, just interpreted differently. The `struct` module is a great way to show how binary data represents numbers. Also, point out that many real‑world formats (JPEG, PNG, PDF) are binary."})}),e.jsxs("footer",{className:"pt-8 mt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400",children:[e.jsx("p",{children:"Topic 10: Binary File Modes · Built with ❤️ for classroom learning"}),e.jsx("p",{className:"mt-1",children:"Next: Topic 11 — Closing Files"})]})]}),e.jsx("style",{children:`
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
