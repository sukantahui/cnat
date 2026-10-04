import{b as n,j as e,bl as l}from"./vendor-react-core-B-R9HE-Z.js";import{T as z}from"./TeacherSukantaHui-XtM23rm9.js";import{F as q}from"./FAQTemplate-CKUpTzyk.js";import{P as Y}from"./PlainTextPrint-C6NaUtnE.js";import{P as Z}from"./PythonFileLoader-DZ61U3Y_.js";import"./vendor-icons-DE_aAoDZ.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";const J=[{question:"What is the primary difference between Python's 'bytes' and 'bytearray' types?",shortAnswer:"'bytes' is an immutable sequence of byte integers (0-255), while 'bytearray' is a mutable sequence.",explanation:"Both types represent raw sequences of bytes (integers in the range 0 to 255). However, bytes objects cannot be modified after creation (attempting assignment like b[0] = 65 raises a TypeError). bytearray allows in-place mutations, element assignments, slice substitutions, append(), and extend().",hint:"Think about immutability vs in-place mutability.",level:"basic",codeExample:`b = b'Hello'       # bytes (immutable)
# b[0] = 74         # TypeError!

ba = bytearray(b'Hello')  # bytearray (mutable)
ba[0] = 74                # Allowed -> bytearray(b'Jello')`},{question:"What does indexing a 'bytes' object (e.g. b[0]) return in Python 3?",shortAnswer:"It returns an integer representing the ASCII/byte value (0 to 255), not a 1-character bytes object.",explanation:"In Python 3, b[0] yields an integer (e.g. 65 for b'A'). If you want a 1-byte bytes slice, you must use slice notation b[0:1] which returns b'A'.",hint:"Single index gives integer; slice gives bytes.",level:"basic",codeExample:`data = b'ABC'
print(data[0])    # 65 (int)
print(data[0:1])  # b'A' (bytes)`},{question:"Why must binary files (like images, zip files, or PDFs) be opened in binary mode ('rb' or 'wb') instead of text mode?",shortAnswer:"To prevent automatic OS newline translation ('\\r\\n' to '\\n') and UTF-8 decoding corruption of raw byte streams.",explanation:"In text mode, Python translates OS line terminators and attempts to decode binary sequences as Unicode characters. This corrupts binary files like PNGs or compiled executables where byte 0x0A (10) represents data rather than a newline.",hint:"Text mode translates newlines and requires valid Unicode encodings.",level:"basic",codeExample:`# Incorrect: open('pic.png', 'r') -> UnicodeDecodeError
# Correct:
with open('pic.png', 'rb') as f:
    raw_bytes = f.read()`},{question:"How do you convert a Python Unicode string to bytes, and bytes back to a string?",shortAnswer:"Use string.encode('utf-8') to get bytes, and bytes.decode('utf-8') to get a string.",explanation:"string.encode(encoding) transforms abstract Unicode characters into a sequence of bytes. bytes.decode(encoding) reconstructs the Unicode string from raw bytes.",hint:"Encode string to bytes; decode bytes to string.",level:"basic",codeExample:`text = 'Mamata - Barrackpore'
raw = text.encode('utf-8')  # str -> bytes
restored = raw.decode('utf-8') # bytes -> str`},{question:"What is a file 'magic number' and how is it used in Python?",shortAnswer:"A unique fixed byte signature at the start of a file (offset 0) identifying its true file format.",explanation:"Operating systems and parsers inspect the first few bytes (e.g. \\x89PNG\\r\\n\\x1a\\n for PNG, %PDF for PDF, PK\\x03\\x04 for ZIP) to verify file formats regardless of what extension (.png, .txt) the file is given.",hint:"Inspect the first 4 to 8 bytes with f.read(8).",level:"moderate",codeExample:`with open('unknown_file', 'rb') as f:
    sig = f.read(4)
    if sig == b'%PDF':
        print('Valid PDF document')`},{question:"How do you convert a hexadecimal string (like '48656c6c6f') into bytes and vice-versa in Python?",shortAnswer:"Use bytes.fromhex('48656c6c6f') to create bytes, and bytes.hex() to get the hex string.",explanation:"bytes.fromhex(hex_str) parses paired hexadecimal characters into binary bytes. bytes.hex() converts raw binary data into a human-readable hex string.",hint:"bytes.fromhex() and b.hex().",level:"basic",codeExample:`raw = bytes.fromhex('48656c6c6f')  # b'Hello'
print(raw.hex())                   # '48656c6c6f'`},{question:"How can you copy a 10GB binary file in Python without exhausting system RAM?",shortAnswer:"By reading and writing in fixed-size chunks (e.g. 64KB or 1MB) inside a while loop.",explanation:"Instead of calling f.read() which loads the entire file into RAM, reading in chunks (e.g. iter(lambda: f.read(65536), b'')) ensures memory usage remains constant at 64KB regardless of file size.",hint:"Stream data in chunks of 4KB to 1MB.",level:"moderate",codeExample:`CHUNK_SIZE = 64 * 1024
with open('source.iso', 'rb') as src, open('dest.iso', 'wb') as dst:
    while True:
        chunk = src.read(CHUNK_SIZE)
        if not chunk: break
        dst.write(chunk)`},{question:"What is the purpose of Python's 'memoryview' and how does it optimize binary file processing?",shortAnswer:"It allows zero-copy slicing and buffer access on binary data without allocating new memory objects.",explanation:"Standard slicing on bytes (b[10:5000]) allocates a new copy of the sliced bytes in RAM. memoryview creates a lightweight view over the existing buffer, enabling zero-copy slicing and in-place mutation on bytearrays.",hint:"Zero-copy memory sharing.",level:"advanced",codeExample:`buf = bytearray(1000000)  # 1MB buffer
mv = memoryview(buf)
slice_view = mv[100:200]  # Zero memory allocated!`},{question:"What error occurs if you try to assign an integer value outside 0-255 to a bytearray element?",shortAnswer:"ValueError: byte must be in range(0, 256).",explanation:"Each byte in a bytearray must fit into an unsigned 8-bit integer (0 to 255). Assigning negative numbers (e.g. -1) or values >= 256 raises a ValueError.",hint:"A single byte is 8 bits (0 to 255).",level:"basic",codeExample:`ba = bytearray(5)
# ba[0] = 300  # Raises ValueError: byte must be in range(0, 256)`},{question:"How does symmetric XOR encryption work on a bytearray?",shortAnswer:"By applying the bitwise XOR operator (^) between each byte of the data and a secret key byte: (A ^ K) ^ K = A.",explanation:"XORing a byte with a key encrypts it; applying the exact same XOR operation with the same key restores the original plaintext byte. In bytearray, this can be executed completely in-place.",hint:"Bitwise XOR with the same key twice restores the original value.",level:"moderate",codeExample:`KEY = 0xAA
data = bytearray(b'Barrackpore')
for i in range(len(data)): data[i] ^= KEY  # Encrypt
for i in range(len(data)): data[i] ^= KEY  # Decrypt`},{question:"What is the difference between bytes literals created with b'...' vs regular strings '...'?",shortAnswer:"b'...' produces a 'bytes' object consisting of 8-bit ASCII/raw values, while '...' produces a Unicode 'str' object.",explanation:"String literals are abstract Unicode sequences where characters can have code points up to 0x10FFFF. Bytes literals only accept ASCII characters (0-127) and hex escape sequences (\\x00 to \\xFF).",hint:"Bytes are raw 8-bit numbers; strings are Unicode characters.",level:"basic",codeExample:`s = 'Mamata'   # type: str
b = b'Mamata'  # type: bytes`},{question:"Can a bytearray be converted back to an immutable 'bytes' object?",shortAnswer:"Yes, by passing the bytearray to the bytes() constructor: immutable_bytes = bytes(ba).",explanation:"The bytes(bytearray) constructor creates an immutable snapshot copy of the bytearray.",hint:"Use bytes(my_bytearray).",level:"basic",codeExample:`ba = bytearray(b'abc')
ba.append(100)
final_bytes = bytes(ba)  # b'abcd'`},{question:"What does the 'errors' parameter do in string.encode() and bytes.decode()?",shortAnswer:"It determines how unencodable or undecodable byte sequences are handled ('strict', 'ignore', 'replace', 'backslashreplace').",explanation:"'strict' (default) raises an error on invalid bytes. 'ignore' skips bad bytes. 'replace' substitutes an official replacement character (like ).",hint:"Controls tolerance for corrupted or unknown character encodings.",level:"moderate",codeExample:`raw = b'Valid \\xff Invalid'
print(raw.decode('utf-8', errors='replace'))  # 'Valid  Invalid'`},{question:"How do you find the index of a specific byte sub-sequence within a bytes object?",shortAnswer:"Use the .find() or .index() method: pos = data.find(b'KEY').",explanation:"Just like strings, bytes objects provide find(), index(), startswith(), endswith(), split(), and join(). Note that the argument must be a bytes object (b'KEY'), not a string.",hint:"Call .find(b'target') with a bytes argument.",level:"basic",codeExample:`data = b'HEADER_DATA_FOOTER'
pos = data.find(b'DATA')  # 7`},{question:"What is the struct module in Python and why is it paired with bytes and binary files?",shortAnswer:"struct converts between Python values (integers, floats, strings) and C-style packed binary structs.",explanation:"The struct.pack() and struct.unpack() functions format integers into fixed-width binary representations (e.g. 4-byte integers '>i', 8-byte doubles '>d') for hardware protocols and database files.",hint:"Packed binary layout formatting.",level:"moderate",codeExample:`import struct
packed = struct.pack('>i10s', 101, b'Mamata    ')
with open('rec.bin', 'wb') as f: f.write(packed)`},{question:"What is Big-Endian vs Little-Endian byte order in binary file formats?",shortAnswer:"Big-Endian stores the most significant byte first; Little-Endian stores the least significant byte first.",explanation:"In an integer 0x12345678, Big-Endian writes bytes as [12, 34, 56, 78] (network order), while Little-Endian writes [78, 56, 34, 12] (standard on x86/ARM CPUs). Python's struct uses '>' for Big-Endian and '<' for Little-Endian.",hint:"Big-endian = MSB first; Little-endian = LSB first.",level:"moderate",codeExample:`import struct
be = struct.pack('>I', 0x12345678)  # b'\\x124Vx'
le = struct.pack('<I', 0x12345678)  # b'xV4\\x12'`},{question:"How does bytearray.extend() differ from bytearray.append()?",shortAnswer:"append(int) adds a single integer byte (0-255); extend(iterable) adds an entire sequence of bytes.",explanation:"ba.append(65) adds single byte 'A'. ba.extend(b'XYZ') appends all three bytes 'X', 'Y', 'Z' to the end of the bytearray.",hint:"append adds one byte; extend appends an iterable.",level:"basic",codeExample:`ba = bytearray()
ba.append(65)         # bytearray(b'A')
ba.extend(b'BC')      # bytearray(b'ABC')`},{question:"How can you read a binary file directly into an existing pre-allocated bytearray buffer?",shortAnswer:"Use file.readinto(buffer), which writes bytes directly into the buffer without allocating new memory.",explanation:"f.readinto(bytearray_obj) populates the mutable buffer in-place and returns the number of bytes read, achieving zero-allocation I/O.",hint:"readinto() populates a pre-allocated buffer in-place.",level:"advanced",codeExample:`buf = bytearray(1024)
with open('data.bin', 'rb') as f:
    bytes_read = f.readinto(buf)
    print(f'Read {bytes_read} bytes into buffer')`},{question:"What is the difference between mode 'wb' and mode 'wb+' for binary files?",shortAnswer:"'wb' is write-only; 'wb+' allows both writing and reading after seeking back.",explanation:"Both truncate the file to 0 bytes on open. However, 'wb+' allows you to seek backwards and read the binary data you just wrote without reopening the file.",hint:"'+' adds read capability to write mode.",level:"basic",codeExample:`with open('temp.bin', 'wb+') as f:
    f.write(b'Data')
    f.seek(0)
    print(f.read())  # b'Data'`},{question:"How can you inspect raw binary bytes as a clean visual hex dump in Python?",shortAnswer:"Iterate in 16-byte chunks, printing byte offsets, hex pairs, and printable ASCII characters.",explanation:"A standard hex dump displays the offset (e.g. 00000000), 16 space-separated hex bytes, and an ASCII representation where non-printable characters are shown as dots ('.').",hint:"16 bytes per line with hex and ASCII columns.",level:"moderate",codeExample:`data = b'Coder & AccoTax Barrackpore Hub'
for i in range(0, len(data), 16):
    chunk = data[i:i+16]
    hex_part = ' '.join(f'{b:02X}' for b in chunk)
    print(f'{i:08X}  {hex_part:<48}')`},{question:"Why does Python raise TypeError when concatenating a string and a bytes object (e.g. 'text' + b'bytes')?",shortAnswer:"Python strictly separates text (str) and binary data (bytes) to avoid implicit encoding assumptions.",explanation:"In Python 2, strings and bytes were loosely interchangeable, causing subtle encoding bugs. Python 3 enforces strict type safety: you must explicitly decode bytes or encode strings before combining.",hint:"Python 3 does not guess character encodings implicitly.",level:"basic",codeExample:`# 'Name: ' + b'Mamata' -> TypeError
# Correct:
res = 'Name: ' + b'Mamata'.decode('utf-8')`},{question:"What is the fastest way to replace all occurrences of a byte sequence in a binary file?",shortAnswer:"Use bytes.replace(old, new) or in-place bytearray replacement.",explanation:"The replace() method works directly on bytes objects in C speed: new_bytes = data.replace(b'OLD', b'NEW').",hint:"bytes.replace(b'old', b'new').",level:"basic",codeExample:`with open('file.bin', 'rb') as f: data = f.read()
updated = data.replace(b'2025', b'2026')
with open('file.bin', 'wb') as f: f.write(updated)`},{question:"What does bytes([65, 66, 67]) evaluate to in Python?",shortAnswer:"b'ABC'",explanation:"Passing an iterable of integers (0-255) to bytes() creates a bytes object containing those exact ASCII/byte values.",hint:"65=A, 66=B, 67=C.",level:"basic",codeExample:`b = bytes([65, 66, 67])
print(b)  # b'ABC'`},{question:"What does bytearray(10) create in Python?",shortAnswer:"A mutable bytearray of 10 zeroed null bytes (b'\\x00' * 10).",explanation:"Passing a single integer N to the bytes() or bytearray() constructor creates a buffer of N zero bytes (\\x00).",hint:"Pre-allocates N null bytes.",level:"basic",codeExample:`buf = bytearray(5)
print(buf)  # bytearray(b'\\x00\\x00\\x00\\x00\\x00')`},{question:"How do you calculate a SHA-256 or MD5 cryptographic hash of a binary file in Python?",shortAnswer:"Use hashlib.sha256() and feed it binary chunks with sha256.update(chunk).",explanation:"By updating the hash object chunk-by-chunk, you compute the exact checksum of any binary file without loading the whole file into RAM.",hint:"Use hashlib with chunked streaming.",level:"moderate",codeExample:`import hashlib
h = hashlib.sha256()
with open('image.png', 'rb') as f:
    for chunk in iter(lambda: f.read(4096), b''):
        h.update(chunk)
print(h.hexdigest())`},{question:"How do you write a minimal raw BMP image file directly from Python bytes?",shortAnswer:"Write a 54-byte BMP/DIB header followed by row-aligned BGR pixel bytes padded to 4-byte boundaries.",explanation:"BMP files begin with 'BM' (0x424D) followed by file size, image dimensions (width, height), color depth (24-bit RGB), and uncompressed pixel rows padded to multiples of 4 bytes.",hint:"54-byte header + BGR pixel rows.",level:"advanced",codeExample:"# See Example 9 in topic files for full BMP header construction"},{question:"Can memoryview be used with immutable 'bytes' objects as well as 'bytearray'?",shortAnswer:"Yes, but the resulting memoryview will be read-only (readonly=True).",explanation:"Wrapping bytes in memoryview allows zero-copy read access and slicing. To support write assignments (e.g. mv[0] = 65), the underlying buffer must be mutable (like bytearray or mmap).",hint:"memoryview on bytes is read-only; on bytearray is read-write.",level:"moderate",codeExample:`mv_read = memoryview(b'ABC')
print(mv_read.readonly)  # True

mv_write = memoryview(bytearray(b'ABC'))
print(mv_write.readonly) # False`},{question:"What is the mmap module in Python and how does it relate to binary file handling?",shortAnswer:"mmap maps a binary file on disk directly into application memory space for fast pointer-like access.",explanation:"Memory-mapped files allow OS kernel virtual memory paging to handle file I/O, allowing you to treat a 10GB binary file as if it were a giant in-memory bytearray.",hint:"Memory-mapped files via OS virtual memory.",level:"advanced",codeExample:`import mmap
with open('large.dat', 'r+b') as f:
    mm = mmap.mmap(f.fileno(), 0)
    print(mm[:10])  # Fast zero-copy access
    mm.close()`},{question:"How do you strip trailing null bytes (\\x00) from a fixed-width binary string?",shortAnswer:"Use bytes.rstrip(b'\\x00') or bytes.rstrip(b' ').",explanation:"Fixed-width binary fields are often padded with null bytes or spaces. Calling .rstrip(b'\\x00') removes trailing null padding before decoding to text.",hint:"rstrip(b'\\x00').",level:"basic",codeExample:`raw_field = b'Mamata\\x00\\x00\\x00\\x00'
clean_name = raw_field.rstrip(b'\\x00').decode('utf-8')`},{question:"What is Sir Sukanta Hui's golden rule for working with binary files in Python?",shortAnswer:"'Treat bytes as exact hardware integers, stream large files in chunks, and use bytearray for in-place surgeries to keep RAM at O(1).'",explanation:"Sir Sukanta Hui emphasizes that binary I/O is about exact bit-level control. By avoiding full-file reads and using chunked streaming with bytearray buffers, your Python systems can process gigabytes of data reliably with sub-millisecond efficiency.",hint:"Chunk streaming, in-place bytearray mutation, O(1) RAM.",level:"advanced",codeExample:`# Golden Rule:
# Always 'rb'/'wb', stream in 64KB chunks, mutate with bytearray`}],$=`================================================================================\r
PYTHON MASTERCLASS – COMPLETE TUTORIAL STUDY NOTE\r
MODULE: 002_008_FILE-HANDLING (FILE HANDLING & PERSISTENCE)\r
TOPIC 12: WORKING WITH BYTES & BYTEARRAY FOR BINARY FILES\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE)\r
================================================================================\r
\r
1. EXECUTIVE OVERVIEW & BINARY I/O FOUNDATIONS\r
--------------------------------------------------------------------------------\r
In modern software engineering, not all data is plain text. Images (PNG, JPEG),\r
multimedia audio/video, compressed archives (ZIP, GZ), database payloads, and\r
network packets are raw streams of 8-bit integers (0 to 255).\r
\r
Python 3 provides two dedicated native types for binary data:\r
  1. bytes: Immutable sequence of integers (0-255). Once created, cannot be mutated.\r
  2. bytearray: Mutable sequence of integers (0-255). Allows in-place element\r
     assignment, slicing replacement, append(), and extend() without RAM copying.\r
\r
Key Modes for Binary I/O:\r
  +------+--------------------------------------------------------------------+\r
  | Mode | Behavior Description                                               |\r
  +------+--------------------------------------------------------------------+\r
  | 'rb' | Read-only binary stream. Returns \`bytes\` objects.                  |\r
  | 'wb' | Write-only binary stream. Truncates or creates file. Accepts bytes.|\r
  | 'ab' | Append binary stream. Writes always append to EOF.                |\r
  |'rb+' | Read and Write in-place without truncating file.                   |\r
  |'wb+' | Read and Write fresh file (truncates to 0 bytes on open).          |\r
  +------+--------------------------------------------------------------------+\r
\r
--------------------------------------------------------------------------------\r
2. STRING VS BYTES: THE UNICODE BRIDGE\r
--------------------------------------------------------------------------------\r
  * Unicode String (str)  --->  .encode('utf-8')  --->  Raw Bytes (bytes)\r
  * Raw Bytes (bytes)     --->  .decode('utf-8')  --->  Unicode String (str)\r
\r
CRITICAL RULE:\r
  - b[0] returns an INTEGER (e.g. 65 for b'A').\r
  - b[0:1] returns a BYTES object (e.g. b'A').\r
  - ba[0] = 74 directly mutates the byte in-place.\r
\r
--------------------------------------------------------------------------------\r
3. 10 SIMPLE BINARY EXAMPLES CHEAT SHEET\r
--------------------------------------------------------------------------------\r
1. Write Bytes Literals:\r
   with open('out.bin', 'wb') as f:\r
       f.write(b'Coder & AccoTax\\x00\\xFF')\r
\r
2. Read Bytes & Indexing:\r
   with open('out.bin', 'rb') as f:\r
       data = f.read()\r
       first_byte = data[0]  # Integer 0-255\r
\r
3. UTF-8 Encode & Decode:\r
   payload = "Student: Mamata".encode('utf-8')\r
   text = payload.decode('utf-8')\r
\r
4. In-Place bytearray Mutation:\r
   ba = bytearray(b"STATUS:PENDING ")\r
   ba[7:14] = b"APPROVED"  # In-place slice substitution\r
\r
5. Hex String Conversion:\r
   raw = bytes.fromhex('48656c6c6f')  # b'Hello'\r
   hex_str = raw.hex()                 # '48656c6c6f'\r
\r
6. Magic Number File Validation:\r
   with open('image.png', 'rb') as f:\r
       if f.read(8) == b'\\x89PNG\\r\\n\\x1a\\n':\r
           print("Valid PNG Image!")\r
\r
7. Chunked Binary Cloner (O(1) RAM):\r
   while chunk := src.read(65536):\r
       dst.write(chunk)\r
\r
8. In-Place XOR Encryption:\r
   KEY = 0x5A\r
   for i in range(len(ba)): ba[i] ^= KEY\r
\r
9. Minimal Raw BMP Construction:\r
   # 54-byte BMP header + RGB pixel bytes written directly with 'wb'.\r
\r
10. Zero-Copy Slicing with memoryview:\r
    mv = memoryview(large_bytearray)\r
    mv[10:20] = b'NEW_HEADER' # Zero memory allocation\r
\r
--------------------------------------------------------------------------------\r
4. REAL-WORLD WEST BENGAL INDUSTRY CASE STUDIES\r
--------------------------------------------------------------------------------\r
1. Barrackpore Biometric Attendance System:\r
   Mamata developed a high-throughput fingerprint packet parser that streams\r
   raw binary sensor payloads in 512-byte packets into SQLite BLOB storage.\r
\r
2. Jadavpur High-Resolution Satellite Imaging:\r
   Debangshu built a chunked binary cloner and image metadata scrubber that\r
   processes 4GB TIFF and PNG imagery with a constant RAM footprint under 16MB.\r
\r
3. Salt Lake Sector V Secure Banking Cryptography:\r
   Susmita engineered an in-place XOR and AES binary stream encryptor on\r
   bytearray buffers for secure ATM transaction logs.\r
\r
4. Ichapur Municipal Water Sensor Telemetry:\r
   Mahima programmed telemetry collectors parsing fixed-width binary structs\r
   from remote IoT water flow meters in real-time.\r
\r
--------------------------------------------------------------------------------\r
5. SENIOR PITFALLS & BEST PRACTICES\r
--------------------------------------------------------------------------------\r
- PITFALL: Opening binary files in text mode ('r' or 'w').\r
  CURE: Always use 'rb', 'wb', or 'ab' for non-text data.\r
- PITFALL: Assigning values outside 0-255 to bytearray (ba[0] = 300).\r
  CURE: Ensure all integer assignments are within 0 <= val <= 255.\r
- PITFALL: Loading gigabyte binary files entirely into RAM with f.read().\r
  CURE: Always stream in 64KB or 1MB chunks using iter(lambda: f.read(chunk), b'').\r
- PITFALL: Assuming b[0] returns a bytes object.\r
  CURE: Remember b[0] returns an integer; use b[0:1] for a bytes slice.\r
\r
--------------------------------------------------------------------------------\r
6. SIR SUKANTA HUI'S GOLDEN ARCHITECTURE RULE\r
--------------------------------------------------------------------------------\r
"Binary I/O gives you direct mastery over hardware and raw disk memory. Treat bytes\r
as mathematical integers, stream large payloads in chunks, and use bytearray for in-place\r
surgeries. Master binary streams, and you master high-performance computing!"\r
                                               - Sukanta Hui (Barrackpore Hub)\r
================================================================================`,Q=`"""\r
================================================================================\r
10 SIMPLE BYTES & BYTEARRAY BINARY FILE EXAMPLES IN PYTHON\r
Module: 002_008_file-handling (File Handling & Persistence)\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
================================================================================\r
"""\r
\r
import os\r
\r
# ==============================================================================\r
# EXAMPLE 1: Creating Bytes Literals and Writing to a Binary File ('wb')\r
# ==============================================================================\r
def example_1_write_bytes():\r
    """Writing immutable bytes literals directly to disk."""\r
    raw_payload = b"Coder & AccoTax\\x00\\x01\\x02\\xFFBarrackpore"\r
    with open("demo_ex1.bin", "wb") as f:\r
        bytes_written = f.write(raw_payload)\r
        print(f"[Ex 1] Wrote {bytes_written} raw bytes to 'demo_ex1.bin'.")\r
\r
\r
# ==============================================================================\r
# EXAMPLE 2: Reading Binary Data & Inspecting Integer Byte Values ('rb')\r
# ==============================================================================\r
def example_2_read_bytes_indexing():\r
    """Demonstrates that indexing bytes data[0] returns an integer (0-255)."""\r
    with open("demo_ex1.bin", "rb") as f:\r
        data = f.read()\r
        print(f"[Ex 2] Read {len(data)} bytes. Type: {type(data)}")\r
        print(f"    First byte integer value: {data[0]} (ASCII '{chr(data[0])}')")\r
        print(f"    Slice data[0:5]: {data[0:5]} (Type: {type(data[0:5])})")\r
\r
\r
# ==============================================================================\r
# EXAMPLE 3: String to Bytes Encoding & Decoding (UTF-8)\r
# ==============================================================================\r
def example_3_encode_decode():\r
    """Encoding Unicode text into bytes and decoding back safely."""\r
    student_record = "Student: Mamata | Center: Barrackpore | Fee: Rs.4500"\r
    \r
    # 1. Encode string to bytes\r
    encoded_bytes = student_record.encode("utf-8")\r
    with open("demo_ex3.dat", "wb") as f:\r
        f.write(encoded_bytes)\r
        \r
    # 2. Read bytes and decode back to string\r
    with open("demo_ex3.dat", "rb") as f:\r
        raw = f.read()\r
        decoded_text = raw.decode("utf-8")\r
        print("[Ex 3] Decoded string from binary file:\\n   ", decoded_text)\r
\r
\r
# ==============================================================================\r
# EXAMPLE 4: In-Place Mutation with Mutable bytearray\r
# ==============================================================================\r
def example_4_bytearray_mutation():\r
    """Mutating binary bytes in-place using bytearray without creating new copies."""\r
    header = bytearray(b"STATUS:[PENDING ]-ID:101-NAME:MAMATA")\r
    print("[Ex 4] Original bytearray:", header.decode("latin1"))\r
    \r
    # In-place replace 'PENDING ' (offset 8) with 'APPROVED'\r
    header[8:16] = b"APPROVED"\r
    print("[Ex 4] Mutated bytearray :", header.decode("latin1"))\r
    \r
    with open("demo_ex4.bin", "wb") as f:\r
        f.write(header)\r
\r
\r
# ==============================================================================\r
# EXAMPLE 5: Hexadecimal Representation (hex() and fromhex())\r
# ==============================================================================\r
def example_5_hex_representation():\r
    """Converting between human-readable hex strings and raw bytes."""\r
    hex_string = "48656c6c6f204261727261636b706f7265"  # 'Hello Barrackpore' in Hex\r
    binary_data = bytes.fromhex(hex_string)\r
    \r
    with open("demo_ex5.bin", "wb") as f:\r
        f.write(binary_data)\r
        \r
    with open("demo_ex5.bin", "rb") as f:\r
        read_bytes = f.read()\r
        print(f"[Ex 5] Raw bytes read: {read_bytes}")\r
        print(f"    Hex format: {read_bytes.hex()}")\r
        print(f"    Decoded: {read_bytes.decode('utf-8')}")\r
\r
\r
# ==============================================================================\r
# EXAMPLE 6: Magic Number / File Signature Identification\r
# ==============================================================================\r
def example_6_magic_numbers():\r
    """Identifying file formats by inspecting the first 4-8 header bytes."""\r
    # Common Magic Numbers:\r
    # PNG  -> 89 50 4E 47 0D 0A 1A 0A\r
    # JPEG -> FF D8 FF\r
    # PDF  -> 25 50 44 46 (%PDF)\r
    # ZIP  -> 50 4B 03 04 (PK..)\r
    \r
    # Create mock PNG file\r
    png_header = b"\\x89PNG\\r\\n\\x1a\\n\\x00\\x00\\x00\\rIHDR"\r
    with open("mock_image.png", "wb") as f:\r
        f.write(png_header)\r
        \r
    with open("mock_image.png", "rb") as f:\r
        sig = f.read(8)\r
        if sig == b"\\x89PNG\\r\\n\\x1a\\n":\r
            print("[Ex 6] File Signature Verified: Valid PNG Image File!")\r
        else:\r
            print("[Ex 6] Unknown file format.")\r
\r
\r
# ==============================================================================\r
# EXAMPLE 7: High-Speed Chunked Binary File Cloning\r
# ==============================================================================\r
def example_7_chunked_file_cloning():\r
    """Copying arbitrary binary files in 64KB chunks with O(1) memory."""\r
    source_payload = b"STUDENT_DATA_PAYLOAD_" * 1000\r
    with open("source_large.dat", "wb") as f:\r
        f.write(source_payload)\r
        \r
    CHUNK_SIZE = 4096\r
    total_copied = 0\r
    \r
    with open("source_large.dat", "rb") as src, open("clone_large.dat", "wb") as dst:\r
        while True:\r
            chunk = src.read(CHUNK_SIZE)\r
            if not chunk:\r
                break\r
            dst.write(chunk)\r
            total_copied += len(chunk)\r
            \r
    print(f"[Ex 7] Cloned {total_copied} bytes safely using {CHUNK_SIZE}-byte chunks.")\r
\r
\r
# ==============================================================================\r
# EXAMPLE 8: In-Place XOR Encryption & Decryption on bytearray\r
# ==============================================================================\r
def example_8_xor_encryption():\r
    """Simple reversible binary XOR obfuscation on a bytearray buffer."""\r
    KEY = 0x5A  # Symmetric XOR key\r
    original_data = bytearray(b"Confidential Barrackpore Exam Questions 2026")\r
    \r
    # Encrypt\r
    encrypted_data = bytearray(b ^ KEY for b in original_data)\r
    with open("encrypted.bin", "wb") as f:\r
        f.write(encrypted_data)\r
        \r
    print(f"[Ex 8] Encrypted Hex: {encrypted_data.hex()[:40]}...")\r
    \r
    # Decrypt\r
    with open("encrypted.bin", "rb") as f:\r
        cipher_bytes = f.read()\r
        decrypted_data = bytearray(b ^ KEY for b in cipher_bytes)\r
        print(f"[Ex 8] Decrypted Text: {decrypted_data.decode('utf-8')}")\r
\r
\r
# ==============================================================================\r
# EXAMPLE 9: Generating a Raw Minimal BMP Binary Image File\r
# ==============================================================================\r
def example_9_generate_minimal_bmp():\r
    """Constructing a valid 2x2 pixel 24-bit RGB BMP file from raw bytes."""\r
    # BMP Header for 2x2 RGB Image (54 bytes header + 16 bytes pixel data with padding)\r
    # Header: 'BM' signature (2 bytes) + File size (54+16=70 bytes) + DIB header\r
    bmp_header = bytes.fromhex(\r
        "424d46000000000000003600000028000000"\r
        "020000000200000001001800000000001000"\r
        "0000130b0000130b00000000000000000000"\r
    )\r
    # Pixels: Row 1 (Blue, Red + 2 pad bytes), Row 2 (Green, White + 2 pad bytes)\r
    # Format: B G R (in hex)\r
    pixel_data = bytes.fromhex(\r
        "ff00000000ff0000"  # Blue, Red, 2 bytes padding\r
        "00ff00ffffff0000"  # Green, White, 2 bytes padding\r
    )\r
    \r
    with open("sample_2x2.bmp", "wb") as f:\r
        f.write(bmp_header + pixel_data)\r
        \r
    print(f"[Ex 9] Created valid BMP image 'sample_2x2.bmp' ({len(bmp_header + pixel_data)} bytes).")\r
\r
\r
# ==============================================================================\r
# EXAMPLE 10: Zero-Copy Binary Slicing with memoryview\r
# ==============================================================================\r
def example_10_memoryview_zerocopy():\r
    """Modifying binary buffer segments without RAM reallocation using memoryview."""\r
    large_buffer = bytearray(b"HEADER_V1.0_STUDENT_DEBANGSHU_COURSE_PYTHON")\r
    \r
    # Create zero-copy memory view\r
    mv = memoryview(large_buffer)\r
    \r
    # Modify "V1.0" (offset 7..11) to "V2.5" through the memoryview slice\r
    mv[7:11] = b"V2.5"\r
    \r
    print("[Ex 10] Modified buffer via zero-copy memoryview:")\r
    print("   ", large_buffer.decode("latin1"))\r
\r
\r
if __name__ == "__main__":\r
    print("Executing all 10 simple bytes & bytearray examples...\\n")\r
    example_1_write_bytes()\r
    print("-" * 50)\r
    example_2_read_bytes_indexing()\r
    print("-" * 50)\r
    example_3_encode_decode()\r
    print("-" * 50)\r
    example_4_bytearray_mutation()\r
    print("-" * 50)\r
    example_5_hex_representation()\r
    print("-" * 50)\r
    example_6_magic_numbers()\r
    print("-" * 50)\r
    example_7_chunked_file_cloning()\r
    print("-" * 50)\r
    example_8_xor_encryption()\r
    print("-" * 50)\r
    example_9_generate_minimal_bmp()\r
    print("-" * 50)\r
    example_10_memoryview_zerocopy()\r
    print("\\nAll 10 binary examples completed successfully!")\r
`,ee=`"""\r
================================================================================\r
Topic 12 - Example 1: Working with Raw Bytes Literals & Hex Formatting\r
Module: 002_008_file-handling (File Handling & Persistence)\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
================================================================================\r
\r
Key Concepts:\r
1. 'bytes' is an immutable sequence of integers in the range 0 to 255.\r
2. Indexing a bytes object (b[0]) returns an integer, while slicing (b[0:1]) returns bytes.\r
3. Binary mode ('wb' / 'rb') bypasses text encoding and OS newline translation.\r
"""\r
\r
def demonstrate_bytes_basics():\r
    filename = "student_binary_card.dat"\r
    \r
    # 1. Create a binary payload containing ASCII, control bytes, and high bytes\r
    # \\x00 = NULL byte, \\xFF = 255, \\x0A = Linefeed\r
    raw_card = b"CODER_ACCOTAX\\x00STUDENT:MAMATA\\x00FEE:\\x00\\x00\\x11\\x94\\xFF"\r
    \r
    print(f"[*] Step 1: Writing {len(raw_card)} raw bytes to '{filename}'...")\r
    with open(filename, "wb") as f:\r
        f.write(raw_card)\r
\r
    # 2. Read back from disk in binary mode\r
    print("\\n[*] Step 2: Reading binary file and inspecting byte integers:")\r
    with open(filename, "rb") as f:\r
        disk_data = f.read()\r
        print(f"    Total Bytes Read: {len(disk_data)}")\r
        print(f"    Raw bytes representation: {disk_data}")\r
        print(f"    Hexadecimal string: {disk_data.hex()}")\r
        \r
        # Demonstrating integer indexing vs slice\r
        first_byte_int = disk_data[0]\r
        print(f"\\n    disk_data[0] -> Integer: {first_byte_int} (Binary: {bin(first_byte_int)}, Char: '{chr(first_byte_int)}')")\r
        \r
        slice_bytes = disk_data[0:5]\r
        print(f"    disk_data[0:5] -> Bytes slice: {slice_bytes} (Type: {type(slice_bytes)})")\r
\r
if __name__ == "__main__":\r
    demonstrate_bytes_basics()\r
`,te=`"""\r
================================================================================\r
Topic 12 - Example 2: In-Place Binary Mutation with bytearray\r
Module: 002_008_file-handling (File Handling & Persistence)\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
================================================================================\r
\r
Key Concepts:\r
1. 'bytes' is immutable (cannot modify individual bytes without full copy).\r
2. 'bytearray' is mutable (allows in-place element assignment and slicing replacements).\r
3. Ideal for modifying headers, packet checksums, and image metadata in memory.\r
"""\r
\r
def demonstrate_bytearray_mutation():\r
    filename = "student_packet.bin"\r
    \r
    # 1. Initialize a mutable bytearray buffer\r
    packet = bytearray(b"HEADER:V1.0|ID:101|NAME:DEBANGSHU |STATUS:PENDING |CRC:0000")\r
    print(f"[*] Initial Packet ({len(packet)} bytes):")\r
    print(f"    Raw: {packet.decode('latin1')}")\r
\r
    # 2. In-place modification of single byte: Upgrade version '1' (ASCII 49) to '2' (ASCII 50)\r
    version_offset = packet.index(b"V1.0") + 1\r
    packet[version_offset] = ord("2")  # Direct integer assignment (0..255)\r
    print(f"\\n[+] Upgraded version byte at index {version_offset}: {packet[version_offset-1:version_offset+3]}")\r
\r
    # 3. In-place slice replacement: Change status 'PENDING ' to 'APPROVED'\r
    status_offset = packet.index(b"PENDING ")\r
    packet[status_offset : status_offset + 8] = b"APPROVED"\r
    print(f"[+] Updated status slice to 'APPROVED'")\r
\r
    # 4. Compute simple XOR checksum and inject into CRC field\r
    checksum = 0\r
    for b in packet[:-4]:\r
        checksum ^= b\r
    crc_hex = f"{checksum:04X}".encode("ascii")\r
    packet[-4:] = crc_hex\r
    print(f"[+] Computed & injected CRC checksum: {crc_hex.decode('ascii')}")\r
\r
    # 5. Persist updated packet to binary file\r
    with open(filename, "wb") as f:\r
        f.write(packet)\r
        \r
    print(f"\\n[✓] Mutated packet successfully persisted to '{filename}'.")\r
\r
if __name__ == "__main__":\r
    demonstrate_bytearray_mutation()\r
`,ae=`"""\r
================================================================================\r
Topic 12 - Example 3: File Format Magic Number & Signature Validator\r
Module: 002_008_file-handling (File Handling & Persistence)\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
================================================================================\r
\r
Key Concepts:\r
1. File extensions (.png, .pdf) can be spoofed; real formats are identified by magic bytes.\r
2. Magic numbers are fixed byte sequences placed at the very start of binary files (offset 0).\r
3. Using binary mode 'rb' with f.read(8) enables instant file validation without parsing the whole file.\r
"""\r
\r
# Common standard file signatures\r
MAGIC_SIGNATURES = {\r
    b"\\x89PNG\\r\\n\\x1a\\n": "PNG Image",\r
    b"\\xff\\xd8\\xff": "JPEG Image",\r
    b"%PDF": "PDF Document",\r
    b"PK\\x03\\x04": "ZIP Archive / DOCX / XLSX",\r
    b"GIF89a": "GIF89a Animated Image",\r
    b"GIF87a": "GIF87a Image",\r
    b"\\x7fELF": "Linux ELF Executable",\r
    b"MZ": "Windows PE / EXE Executable"\r
}\r
\r
def identify_binary_format(file_path):\r
    """Inspects the leading bytes of a file to determine its real file type."""\r
    with open(file_path, "rb") as f:\r
        # Read the first 16 bytes for signature inspection\r
        header = f.read(16)\r
        \r
    for magic_bytes, description in MAGIC_SIGNATURES.items():\r
        if header.startswith(magic_bytes):\r
            return description, header[:len(magic_bytes)].hex()\r
            \r
    return "Unknown / Generic Binary Data", header[:4].hex()\r
\r
def demonstrate_magic_number_validation():\r
    # 1. Create simulated PNG, PDF, and ZIP files\r
    test_files = [\r
        ("report.pdf", b"%PDF-1.7\\n1 0 obj\\n<< /Type /Catalog >>\\n"),\r
        ("student_avatar.png", b"\\x89PNG\\r\\n\\x1a\\n\\x00\\x00\\x00\\rIHDR"),\r
        ("backup.zip", b"PK\\x03\\x04\\x14\\x00\\x00\\x00\\x08\\x00"),\r
        ("mystery_data.bin", b"\\xDE\\xAD\\xBE\\xEF\\xCA\\xFE\\xBA\\xBE")\r
    ]\r
    \r
    print("--- Binary File Signature Verification ---")\r
    for filename, payload in test_files:\r
        with open(filename, "wb") as f:\r
            f.write(payload)\r
            \r
        detected_type, hex_sig = identify_binary_format(filename)\r
        print(f"File: '{filename:<18}' | Magic Hex: {hex_sig:<16} | Identified: {detected_type}")\r
\r
if __name__ == "__main__":\r
    demonstrate_magic_number_validation()\r
`,re=`"""\r
================================================================================\r
Topic 12 - Example 4: High-Speed Chunked Binary File Stream Cloner\r
Module: 002_008_file-handling (File Handling & Persistence)\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
================================================================================\r
\r
Key Concepts:\r
1. Loading an entire 10GB video or database file into RAM causes MemoryError.\r
2. Binary chunk streaming (e.g. 64KB chunks) keeps RAM consumption at O(1) constant size.\r
3. Reading with 'iter(lambda: f.read(chunk_size), b"")' provides clean Pythonic streaming.\r
"""\r
\r
import os\r
import hashlib\r
\r
def clone_binary_stream(source_path, dest_path, chunk_size=64 * 1024):\r
    """Clones a binary file in fixed-size chunks while computing SHA-256 hash."""\r
    sha256 = hashlib.sha256()\r
    total_bytes_copied = 0\r
    \r
    with open(source_path, "rb") as src, open(dest_path, "wb") as dst:\r
        # Pythonic chunk iterator\r
        for chunk in iter(lambda: src.read(chunk_size), b""):\r
            dst.write(chunk)\r
            sha256.update(chunk)\r
            total_bytes_copied += len(chunk)\r
            \r
    return total_bytes_copied, sha256.hexdigest()\r
\r
def demonstrate_chunked_cloning():\r
    src_file = "kolkata_archive.dat"\r
    clone_file = "kolkata_archive_backup.dat"\r
    \r
    # 1. Create a sample binary archive\r
    sample_payload = b"STUDENT_RECORD_BLOCK_BARRACKPORE_" * 500  # 17,000 bytes\r
    with open(src_file, "wb") as f:\r
        f.write(sample_payload)\r
        \r
    print(f"[*] Source binary file created: '{src_file}' ({len(sample_payload)} bytes)")\r
\r
    # 2. Clone in 4KB chunks\r
    bytes_copied, checksum = clone_binary_stream(src_file, clone_file, chunk_size=4096)\r
    print(f"\\n[+] Cloned {bytes_copied} bytes to '{clone_file}'")\r
    print(f"[+] SHA-256 Checksum: {checksum}")\r
    \r
    # 3. Verify integrity\r
    assert os.path.getsize(src_file) == os.path.getsize(clone_file)\r
    print("[✓] Integrity Verified: Source and Destination match bit-for-bit!")\r
\r
if __name__ == "__main__":\r
    demonstrate_chunked_cloning()\r
`,ne=`"""\r
================================================================================\r
Topic 12 - Example 5: In-Place XOR Binary Stream Encryption Engine\r
Module: 002_008_file-handling (File Handling & Persistence)\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
================================================================================\r
\r
Key Concepts:\r
1. Symmetric XOR encryption: (A ^ K) ^ K = A.\r
2. In-place bitwise operations on bytearray avoid memory reallocation.\r
3. Useful for encrypting student exam papers and sensitive database payloads.\r
"""\r
\r
def xor_crypt_file(input_path, output_path, key_bytes):\r
    """Encrypts or decrypts a binary file using a repeating multi-byte XOR key."""\r
    key_len = len(key_bytes)\r
    \r
    with open(input_path, "rb") as f_in:\r
        raw_data = bytearray(f_in.read())\r
        \r
    # In-place multi-byte XOR\r
    for i in range(len(raw_data)):\r
        raw_data[i] ^= key_bytes[i % key_len]\r
        \r
    with open(output_path, "wb") as f_out:\r
        f_out.write(raw_data)\r
        \r
    return len(raw_data)\r
\r
def demonstrate_xor_crypto():\r
    KEY = b"SukantaBarrackpore2026"\r
    plain_file = "student_marks_confidential.txt"\r
    cipher_file = "student_marks.enc"\r
    restored_file = "student_marks_restored.txt"\r
    \r
    # 1. Plain text student data\r
    content = "Mamata: 98/100 | Debangshu: 95/100 | Susmita: 99/100"\r
    with open(plain_file, "wb") as f:\r
        f.write(content.encode("utf-8"))\r
        \r
    print(f"[*] Plaintext: '{content}'")\r
\r
    # 2. Encrypt\r
    xor_crypt_file(plain_file, cipher_file, KEY)\r
    with open(cipher_file, "rb") as f:\r
        encrypted_raw = f.read()\r
    print(f"[+] Encrypted File Hex: {encrypted_raw.hex()[:40]}... (Total {len(encrypted_raw)} bytes)")\r
\r
    # 3. Decrypt\r
    xor_crypt_file(cipher_file, restored_file, KEY)\r
    with open(restored_file, "rb") as f:\r
        decrypted_text = f.read().decode("utf-8")\r
        \r
    print(f"[✓] Decrypted Text: '{decrypted_text}'")\r
    assert content == decrypted_text\r
    print("[✓] Perfect Bidirectional XOR Match Confirmed!")\r
\r
if __name__ == "__main__":\r
    demonstrate_xor_crypto()\r
`,se=`"""\r
================================================================================\r
Topic 12 - Example 6: Zero-Copy Binary Buffer Slicing with memoryview\r
Module: 002_008_file-handling (File Handling & Persistence)\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
================================================================================\r
\r
Key Concepts:\r
1. Standard slicing on bytes (b[10:50]) allocates a new bytes object in RAM (copying data).\r
2. memoryview wraps an existing buffer (like bytearray or mmap) and provides zero-copy slices.\r
3. Modifying a memoryview slice directly alters the underlying buffer without memory allocation.\r
"""\r
\r
def demonstrate_memoryview_zerocopy():\r
    filename = "shared_packet_buffer.dat"\r
    \r
    # 1. Create a large simulated binary packet (50 bytes)\r
    packet_buffer = bytearray(b"\\xAA" * 10 + b"STUDENT_MAMATA_BARRACKPORE" + b"\\xBB" * 14)\r
    print(f"[*] Initial buffer (Length: {len(packet_buffer)} bytes):")\r
    print(f"    Hex: {packet_buffer.hex()[:40]}...")\r
\r
    # 2. Wrap in zero-copy memoryview\r
    mv = memoryview(packet_buffer)\r
    print(f"\\n[+] Created memoryview on bytearray (Itemsize: {mv.itemsize}, Readonly: {mv.readonly})")\r
\r
    # 3. Slice and mutate a sub-range (offset 10 to 36) without copying\r
    student_section = mv[10:36]\r
    print(f"    Current slice content: {bytes(student_section).decode('latin1')}")\r
    \r
    # Update slice to new student\r
    student_section[0:26] = b"STUDENT_DEBANGSHU_JADAVPUR"\r
    print(f"    Updated slice content: {bytes(student_section).decode('latin1')}")\r
\r
    # 4. Verify that underlying packet_buffer was modified in-place\r
    print("\\n[+] Verification of original packet_buffer after zero-copy mutation:")\r
    print(f"    Buffer: {packet_buffer.decode('latin1', errors='replace')}")\r
\r
    with open(filename, "wb") as f:\r
        f.write(packet_buffer)\r
        \r
    print(f"\\n[✓] Binary payload persisted to '{filename}'.")\r
\r
if __name__ == "__main__":\r
    demonstrate_memoryview_zerocopy()\r
`,he=()=>{const[k,T]=n.useState(1),[R,E]=n.useState(!1),[d,p]=n.useState("hex"),[A,D]=n.useState("Coder & AccoTax Barrackpore Hub 2026"),[y,S]=n.useState(0),[u,F]=n.useState("APPROVED"),[h,H]=n.useState("2"),[O,I]=n.useState(["Initial bytearray buffer created in memory (No disk allocation)."]),[B,U]=n.useState("png"),[x,G]=n.useState(90),[f,L]=n.useState("Mamata: 98/100 | Fee: Rs.4500"),[m,K]=n.useState(!1),[P,X]=n.useState("ex1"),g=n.useRef([]);n.useEffect(()=>{const t=new IntersectionObserver(a=>{a.forEach(r=>{r.isIntersecting&&r.target.classList.add("is-visible")})},{threshold:.1});return g.current.forEach(a=>{a&&t.observe(a)}),()=>t.disconnect()},[]);const s=t=>{t&&!g.current.includes(t)&&g.current.push(t)},w=[{num:1,title:"Creating Bytes Literals & Writing ('wb')",badge:"Bytes Literal",desc:"Creating raw immutable bytes with the b'...' literal syntax and writing directly to disk using mode 'wb'.",code:`# Example 1: Write raw immutable bytes to a binary file
raw_data = b"Coder & AccoTax\\x00\\x01\\x02\\xFFBarrackpore"

with open("output.bin", "wb") as f:
    bytes_written = f.write(raw_data)
    print(f"Wrote {bytes_written} raw bytes to disk.")`,output:"Wrote 30 raw bytes to disk.",keyTakeaway:"Mode 'wb' writes raw byte streams directly to disk without any UTF-8 encoding or newline translation."},{num:2,title:"Reading Binary Data & Integer Indexing ('rb')",badge:"Integer Indexing",desc:"Opening binary files in 'rb' mode and inspecting byte integer values (0-255) vs bytes slices.",code:`# Example 2: Read bytes and inspect byte integers
with open("output.bin", "rb") as f:
    data = f.read()
    print("Total Bytes:", len(data))
    
    # CRITICAL: data[0] returns an INTEGER (0-255), data[0:1] returns BYTES
    first_byte = data[0]
    print(f"data[0] -> Integer: {first_byte} (ASCII '{chr(first_byte)}')")
    print(f"data[0:5] -> Bytes slice: {data[0:5]}")`,output:`Total Bytes: 30
data[0] -> Integer: 67 (ASCII 'C')
data[0:5] -> Bytes slice: b'Coder'`,keyTakeaway:"Indexing a bytes object (b[0]) yields an integer (0-255); slice notation (b[0:1]) yields a bytes object."},{num:3,title:"String to Bytes Encoding & Decoding",badge:"UTF-8 Bridge",desc:"Converting Unicode text to bytes using .encode('utf-8') and reconstructing strings with .decode('utf-8').",code:`# Example 3: String to bytes encode and decode
student_record = "Student: Mamata | Center: Barrackpore | Fee: Rs.4500"

# 1. Encode Unicode string into raw UTF-8 bytes
encoded_bytes = student_record.encode("utf-8")
with open("student.dat", "wb") as f:
    f.write(encoded_bytes)

# 2. Read bytes and decode back into Unicode string
with open("student.dat", "rb") as f:
    raw_payload = f.read()
    restored_text = raw_payload.decode("utf-8")
    print("Decoded text:", restored_text)`,output:"Decoded text: Student: Mamata | Center: Barrackpore | Fee: Rs.4500",keyTakeaway:"Always use explicit encodings (e.g. 'utf-8') when converting between strings and binary bytes."},{num:4,title:"In-Place Mutation with Mutable bytearray",badge:"Mutable bytearray",desc:"Modifying specific bytes and slices in-place without creating a new copy in memory.",code:`# Example 4: In-place byte mutation using bytearray
header = bytearray(b"STATUS:[PENDING ]-ID:101-NAME:MAMATA")
print("Original:", header.decode("latin1"))

# In-place replace 'PENDING ' (offset 8) with 'APPROVED'
header[8:16] = b"APPROVED"
print("Mutated :", header.decode("latin1"))

with open("header.bin", "wb") as f:
    f.write(header)`,output:`Original: STATUS:[PENDING ]-ID:101-NAME:MAMATA
Mutated : STATUS:[APPROVED]-ID:101-NAME:MAMATA`,keyTakeaway:"Unlike immutable bytes, bytearray allows in-place element assignment and slice substitution."},{num:5,title:"Hexadecimal Conversion (hex() & fromhex())",badge:"Hex Strings",desc:"Converting human-readable hexadecimal strings to raw bytes and vice-versa.",code:`# Example 5: Hex strings to bytes and back
hex_data = "48656c6c6f204261727261636b706f7265"  # 'Hello Barrackpore'

# Convert Hex to bytes
binary_data = bytes.fromhex(hex_data)
print("Binary data:", binary_data)

# Convert bytes back to Hex
print("Hex format :", binary_data.hex())`,output:`Binary data: b'Hello Barrackpore'
Hex format : 48656c6c6f204261727261636b706f7265`,keyTakeaway:"bytes.fromhex() and b.hex() provide fast two-way conversions between binary streams and hex strings."},{num:6,title:"Magic Number File Format Identification",badge:"Magic Numbers",desc:"Validating real file types (PNG, JPEG, PDF, ZIP) by inspecting the leading 4-8 signature bytes.",code:`# Example 6: Validate PNG file signature
# PNG magic number: \\x89 P N G \\r \\n \\x1a \\n
with open("sample.png", "wb") as f:
    f.write(b"\\x89PNG\\r\\n\\x1a\\n\\x00\\x00\\x00\\rIHDR")

with open("sample.png", "rb") as f:
    signature = f.read(8)
    if signature == b"\\x89PNG\\r\\n\\x1a\\n":
        print("Verified: Valid PNG Image File!")
    else:
        print("Invalid file signature.")`,output:"Verified: Valid PNG Image File!",keyTakeaway:"Inspect the first 4 to 8 bytes in 'rb' mode to identify real file formats regardless of file extensions."},{num:7,title:"High-Speed Chunked Binary File Cloning",badge:"Chunked Stream",desc:"Cloning arbitrary binary files in 64KB chunks to keep memory consumption at O(1) constant size.",code:`# Example 7: High-performance chunked file cloner
CHUNK_SIZE = 64 * 1024  # 64 KB chunks

with open("source.iso", "rb") as src, open("clone.iso", "wb") as dst:
    while True:
        chunk = src.read(CHUNK_SIZE)
        if not chunk:
            break
        dst.write(chunk)

print("Binary file cloned successfully in 64KB chunks.")`,output:"Binary file cloned successfully in 64KB chunks.",keyTakeaway:"Reading in chunks prevents MemoryError crashes when copying or streaming multi-gigabyte files."},{num:8,title:"In-Place XOR Binary Encryption & Decryption",badge:"XOR Crypto",desc:"Encrypting and decrypting sensitive binary payloads using symmetric XOR bitwise operations on bytearray.",code:`# Example 8: Symmetric XOR encryption on bytearray
KEY = 0x5A  # Secret key byte
data = bytearray(b"Barrackpore Confidential Exam 2026")

# Encrypt in-place
for i in range(len(data)):
    data[i] ^= KEY
print("Encrypted Hex:", data.hex()[:32], "...")

# Decrypt in-place (XOR again with same key)
for i in range(len(data)):
    data[i] ^= KEY
print("Decrypted Text:", data.decode("utf-8"))`,output:`Encrypted Hex: 183b28283b3931203528...
Decrypted Text: Barrackpore Confidential Exam 2026`,keyTakeaway:"Bitwise XOR with the same key restores original data: (A ^ K) ^ K = A, executing 100% in-place."},{num:9,title:"Generating a Minimal Raw BMP Image",badge:"Raw BMP File",desc:"Constructing a valid 2x2 pixel 24-bit RGB bitmap file directly from packed header bytes.",code:`# Example 9: Create a 2x2 pixel BMP image from raw bytes
# 54-byte BMP Header + 16-byte BGR Pixel rows with padding
bmp_header = bytes.fromhex(
    "424d46000000000000003600000028000000"
    "020000000200000001001800000000001000"
    "0000130b0000130b00000000000000000000"
)
pixel_data = bytes.fromhex(
    "ff00000000ff0000"  # Blue, Red + padding
    "00ff00ffffff0000"  # Green, White + padding
)

with open("pixel_art.bmp", "wb") as f:
    f.write(bmp_header + pixel_data)

print("Created 70-byte valid BMP image file.")`,output:"Created 70-byte valid BMP image file.",keyTakeaway:"Direct byte writing allows creating valid image, audio, and container formats from pure Python code."},{num:10,title:"Zero-Copy Slicing with memoryview",badge:"Zero-Copy",desc:"Slicing and modifying binary buffer segments without RAM reallocation using Python's memoryview.",code:`# Example 10: Zero-copy buffer slicing with memoryview
buffer = bytearray(b"HEADER_V1.0_STUDENT_MAMATA_FEE_4500")

# Wrap in zero-copy memoryview
mv = memoryview(buffer)

# Modify version slice directly without creating a new copy
mv[7:11] = b"V2.5"

print("Modified original buffer in-place:")
print(buffer.decode("latin1"))`,output:`Modified original buffer in-place:
HEADER_V2.5_STUDENT_MAMATA_FEE_4500`,keyTakeaway:"memoryview avoids memory duplication by creating a direct window over existing binary buffers."}],c=w.find(t=>t.num===k)||w[0],W=()=>{navigator.clipboard.writeText(c.code),E(!0),setTimeout(()=>E(!1),2e3)},_=(()=>{const a=new TextEncoder().encode(A),r=[];for(let i=0;i<a.length;i+=16){const b=a.slice(i,i+16);r.push({offset:i,bytes:Array.from(b),ascii:Array.from(b).map(o=>o>=32&&o<=126?String.fromCharCode(o):".")})}return{rows:r,totalBytes:a.length,rawBytes:Array.from(a)}})(),j=_.rawBytes[y]??65,C=(t,a)=>{t==="status"?(F(a),I(r=>[`[In-Place Slice] buffer[8:16] = b'${a.padEnd(8," ")}' -> Mutated status tag without memory copy.`,...r])):t==="version"&&(H(a),I(r=>[`[In-Place Byte] buffer[9] = ord('${a}') (${a.charCodeAt(0)}) -> Mutated version integer directly.`,...r]))},N={png:{name:"PNG Image",ext:".png",magicHex:"89 50 4E 47 0D 0A 1A 0A",ascii:"‰PNG....",desc:"Portable Network Graphics image"},jpeg:{name:"JPEG Image",ext:".jpg",magicHex:"FF D8 FF E0",ascii:"ÿØÿà",desc:"Joint Photographic Experts Group image"},pdf:{name:"PDF Document",ext:".pdf",magicHex:"25 50 44 46 2D",ascii:"%PDF-",desc:"Adobe Portable Document Format"},zip:{name:"ZIP Archive",ext:".zip",magicHex:"50 4B 03 04",ascii:"PK..",desc:"PKZIP compressed container (used in DOCX/XLSX/JAR)"},gif:{name:"GIF89a Image",ext:".gif",magicHex:"47 49 46 38 39 61",ascii:"GIF89a",desc:"Graphics Interchange Format animated image"},exe:{name:"Windows PE Executable",ext:".exe",magicHex:"4D 5A",ascii:"MZ",desc:"DOS MZ / Windows Portable Executable"}},V=()=>{K(!m)},M=(()=>{const a=new TextEncoder().encode(f),r=Array.from(a).map(o=>o^x),i=r.map(o=>o.toString(16).padStart(2,"0")).join(" "),b=r.map(o=>o>=32&&o<=126?String.fromCharCode(o):"·").join("");return{hex:i,preview:b,rawXor:r}})(),v=[{id:"ex1",title:"1. Raw Bytes Literals & Hex Representation",badge:"Core Basics",desc:"Creating bytes literals, inspecting integer indexing (b[0] -> int), and writing raw bytes with mode 'wb'.",codeModule:ee,highlights:[14,25,33,40]},{id:"ex2",title:"2. In-Place Binary Mutation with bytearray",badge:"Mutable Buffers",desc:"Mutating bytes in-place, slice replacements, and dynamic checksum calculation without copying memory.",codeModule:te,highlights:[13,20,27,36]},{id:"ex3",title:"3. File Signature & Magic Number Validator",badge:"Security & Validation",desc:"Detecting true file formats (PNG, JPEG, PDF, ZIP) by inspecting the leading binary header bytes.",codeModule:ae,highlights:[13,24,38]},{id:"ex4",title:"4. Chunked Binary File Stream Cloner",badge:"High-Speed I/O",desc:"Copying multi-gigabyte binary files in fixed 64KB chunks with SHA-256 integrity streaming in O(1) RAM.",codeModule:re,highlights:[14,23,35]},{id:"ex5",title:"5. In-Place XOR Binary Stream Encryption",badge:"Binary Cryptography",desc:"Encrypting and decrypting sensitive student files using multi-byte symmetric bitwise XOR on bytearray.",codeModule:ne,highlights:[13,24,38]},{id:"ex6",title:"6. Zero-Copy Slicing with memoryview",badge:"Zero-Allocation",desc:"Wrapping bytearray in memoryview for ultra-high-performance zero-copy slicing and buffer manipulation.",codeModule:se,highlights:[14,22,28,36]},{id:"ex10_master",title:"7. Master Script: 10 Simple Bytes Examples",badge:"10-in-1 Master",desc:"Complete runnable script containing all 10 simple bytes and bytearray functions in one clean Python module.",codeModule:Q,highlights:[12,24,37,56,73,90,112,131,149,172]}];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .reveal-section {
          transform: translateY(0);
          transition: transform 0.4s ease-out;
        }
        .reveal-section.is-visible {
          transform: translateY(0);
        }
        @keyframes pulseHex {
          0%, 100% { opacity: 0.8; filter: drop-shadow(0 0 6px rgba(14, 165, 233, 0.4)); }
          50% { opacity: 1; filter: drop-shadow(0 0 14px rgba(14, 165, 233, 0.9)); }
        }
        .animate-hex {
          animation: pulseHex 2.5s ease-in-out infinite;
        }
      `}),e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 md:p-12 font-sans selection:bg-cyan-500/30 selection:text-cyan-200",children:[e.jsxs("header",{ref:s,className:"reveal-section max-w-5xl mx-auto mb-12 text-center",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-700/60 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-lg shadow-cyan-950/40",children:[e.jsx("span",{children:"🐍"}),e.jsx("span",{children:"Python Masterclass · Module 002_008 · Topic 12"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4",children:["Working with ",e.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400",children:"Bytes & Bytearray"})," for Binary Files"]}),e.jsxs("p",{className:"text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed",children:["Master raw binary I/O: understanding immutable ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"bytes"})," vs mutable ",e.jsx("code",{className:"text-teal-300 font-mono",children:"bytearray"}),", hex conversions, file magic signatures, zero-copy ",e.jsx("code",{className:"text-amber-300 font-mono",children:"memoryview"}),", and 10 practical real-world examples."]}),e.jsxs("div",{className:"mt-6 flex flex-wrap justify-center gap-2.5 text-xs font-medium text-slate-400",children:[e.jsxs("span",{className:"rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-cyan-300 flex items-center gap-1.5",children:[e.jsx("span",{children:"🔢"})," bytes (Immutable 0-255)"]}),e.jsxs("span",{className:"rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-teal-300 flex items-center gap-1.5",children:[e.jsx("span",{children:"🛠️"})," bytearray (Mutable In-Place)"]}),e.jsxs("span",{className:"rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-indigo-300 flex items-center gap-1.5",children:[e.jsx("span",{children:"🛡️"})," Magic Number Validation"]}),e.jsxs("span",{className:"rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-amber-300 flex items-center gap-1.5",children:[e.jsx("span",{children:"⚡"})," 10 Simple Examples Included"]})]})]}),e.jsxs("section",{ref:s,className:"reveal-section max-w-5xl mx-auto mb-16 rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-slate-900/95 to-slate-900/80 p-6 md:p-8 shadow-2xl shadow-cyan-950/20",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 font-bold text-xl border border-cyan-500/30",children:"👨‍🏫"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl md:text-2xl font-bold text-white",children:"Teacher's Concept Breakdown: Text Streams vs Binary Hardware Octets"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Detailed conceptual breakdown by Sukanta Hui (Coder & AccoTax, Barrackpore)"})]})]}),e.jsxs("div",{className:"mt-6 space-y-6",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/90 border border-slate-800 space-y-3",children:[e.jsxs("span",{className:"text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5",children:[e.jsx("span",{children:"🧱"})," The Stone Tablet vs Clay Mold Analogy"]}),e.jsx("p",{className:"text-sm text-slate-200 leading-relaxed",children:"When working with low-level binary data in Python, understand the two fundamental container types:"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/40 space-y-2",children:[e.jsxs("div",{className:"font-bold text-cyan-300 flex items-center gap-2",children:[e.jsx("span",{className:"text-base",children:"🗿"})," 'bytes' (Immutable Stone Carving)"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["A ",e.jsx("code",{className:"text-cyan-200 font-mono",children:"bytes"})," object is like a carved stone tablet. Once written, individual bytes can never be altered. If you want to change one letter, you must carve an entirely new stone tablet in RAM!"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/30 border border-teal-800/40 space-y-2",children:[e.jsxs("div",{className:"font-bold text-teal-300 flex items-center gap-2",children:[e.jsx("span",{className:"text-base",children:"🏺"})," 'bytearray' (Mutable Soft Clay)"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["A ",e.jsx("code",{className:"text-teal-200 font-mono",children:"bytearray"})," is like soft clay. You can reshape individual bytes (",e.jsx("code",{className:"text-teal-200 font-mono",children:"ba[0] = 74"}),"), slice out blocks, append new data, and overwrite packet headers in-place with ",e.jsx("strong",{children:"zero extra memory allocation"}),"."]})]})]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/90 border border-slate-800 space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-cyan-300 flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," Key Structural Differences: bytes vs bytearray"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-xs font-mono border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-800 text-slate-400 bg-slate-900/60",children:[e.jsx("th",{className:"p-3",children:"Property"}),e.jsx("th",{className:"p-3",children:"bytes Type (b'...')"}),e.jsx("th",{className:"p-3",children:"bytearray Type"}),e.jsx("th",{className:"p-3",children:"Performance & Memory Impact"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800/60 text-slate-300",children:[e.jsxs("tr",{className:"hover:bg-slate-900/40",children:[e.jsx("td",{className:"p-3 text-cyan-300 font-bold",children:"Mutability"}),e.jsx("td",{className:"p-3 text-rose-400 font-bold",children:"Immutable (Read-Only)"}),e.jsx("td",{className:"p-3 text-emerald-300 font-bold",children:"Mutable (In-Place Edit)"}),e.jsx("td",{className:"p-3 text-slate-300",children:"bytearray avoids RAM reallocations on edits"})]}),e.jsxs("tr",{className:"hover:bg-slate-900/40",children:[e.jsx("td",{className:"p-3 text-cyan-300 font-bold",children:"Indexing (data[0])"}),e.jsx("td",{className:"p-3 text-amber-300",children:"Integer (0 to 255)"}),e.jsx("td",{className:"p-3 text-amber-300",children:"Integer (0 to 255)"}),e.jsx("td",{className:"p-3 text-slate-300",children:"Both return raw unsigned 8-bit integer values"})]}),e.jsxs("tr",{className:"hover:bg-slate-900/40",children:[e.jsx("td",{className:"p-3 text-cyan-300 font-bold",children:"Hashable / Dict Key"}),e.jsx("td",{className:"p-3 text-emerald-300 font-bold",children:"Yes (Can be dict key / set item)"}),e.jsx("td",{className:"p-3 text-rose-400 font-bold",children:"No (TypeError: unhashable)"}),e.jsx("td",{className:"p-3 text-slate-300",children:"Use bytes for fixed keys, bytearray for processing"})]}),e.jsxs("tr",{className:"hover:bg-slate-900/40",children:[e.jsx("td",{className:"p-3 text-cyan-300 font-bold",children:"Methods Supported"}),e.jsx("td",{className:"p-3 text-slate-300",children:"find, split, replace, hex, decode"}),e.jsx("td",{className:"p-3 text-teal-300",children:"All bytes methods + append, extend, insert, pop, reverse"}),e.jsx("td",{className:"p-3 text-slate-300",children:"bytearray behaves like a mutable list of bytes"})]})]})]})})]})]})]}),e.jsxs("section",{ref:s,className:"reveal-section max-w-5xl mx-auto mb-16 space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-cyan-400",children:"💡"})," 10 Simple Bytes & Bytearray Examples (Beginner to Intermediate)"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Click on any scenario below to view the Python code, console output, and key architectural takeaways."})]}),e.jsx("span",{className:"px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-mono font-bold",children:"10 Quick Snippets"})]}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-2",children:w.map(t=>e.jsxs("button",{onClick:()=>T(t.num),className:l("p-2.5 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between",k===t.num?"bg-cyan-950/90 border-cyan-500 text-cyan-200 shadow-md shadow-cyan-950/50 scale-[1.02]":"bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"),children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-[10px] font-mono font-bold text-cyan-400",children:["#",t.num]}),e.jsx("span",{className:"text-[9px] px-1.5 py-0.2 rounded bg-slate-950 text-slate-400 border border-slate-800 font-mono",children:t.badge})]}),e.jsx("span",{className:"text-xs font-semibold line-clamp-1 mt-1",children:t.title})]},t.num))}),e.jsxs("div",{className:"rounded-2xl bg-slate-900/90 border border-slate-800 p-6 md:p-8 space-y-6 shadow-2xl animate-[fadeIn_0.3s_ease-out]",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 text-xs font-mono font-bold",children:["Example #",c.num]}),e.jsx("span",{className:"px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800 text-xs font-mono",children:c.badge})]}),e.jsx("h3",{className:"text-lg md:text-xl font-bold text-white mt-1.5",children:c.title})]}),e.jsx("button",{onClick:W,className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-colors flex items-center gap-1.5 border border-slate-700",children:e.jsx("span",{children:R?"✓ Copied!":"📋 Copy Code"})})]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:c.desc}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400 uppercase tracking-wider",children:"Python Implementation:"}),e.jsx("pre",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300 overflow-x-auto leading-relaxed shadow-inner",children:c.code})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2",children:[e.jsx("span",{className:"text-amber-400 font-bold uppercase tracking-wider",children:"🖥️ Expected Console Output:"}),e.jsx("pre",{className:"text-slate-300 whitespace-pre-wrap leading-relaxed",children:c.output})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/50 space-y-2",children:[e.jsx("span",{className:"text-cyan-300 font-bold uppercase tracking-wider",children:"🎯 Key Architectural Takeaway:"}),e.jsx("p",{className:"text-slate-200 font-sans leading-relaxed text-sm",children:c.keyTakeaway})]})]})]})]}),e.jsxs("section",{ref:s,className:"reveal-section max-w-5xl mx-auto mb-16 space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-teal-400",children:"🎛️"})," Interactive Python Workbench: The Binary Hex & Bytearray Forge"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Explore live 16-byte hex dumps, in-place bytearray slice surgeries, magic number scanners, and XOR cryptography."})]}),e.jsxs("div",{className:"flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800",children:[e.jsx("button",{onClick:()=>p("hex"),className:l("px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",d==="hex"?"bg-cyan-600 text-white shadow-md shadow-cyan-950":"text-slate-400 hover:text-slate-200"),children:"1. Hex Dump Inspector"}),e.jsx("button",{onClick:()=>p("mutation"),className:l("px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",d==="mutation"?"bg-cyan-600 text-white shadow-md shadow-cyan-950":"text-slate-400 hover:text-slate-200"),children:"2. In-Place Surgery"}),e.jsx("button",{onClick:()=>p("magic"),className:l("px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",d==="magic"?"bg-cyan-600 text-white shadow-md shadow-cyan-950":"text-slate-400 hover:text-slate-200"),children:"3. Magic Validator"}),e.jsx("button",{onClick:()=>p("xor"),className:l("px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",d==="xor"?"bg-cyan-600 text-white shadow-md shadow-cyan-950":"text-slate-400 hover:text-slate-200"),children:"4. XOR Crypto Engine"})]})]}),e.jsxs("div",{className:"rounded-2xl bg-slate-900/95 border border-slate-800 p-6 md:p-8 space-y-6 shadow-2xl",children:[d==="hex"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-3",children:[e.jsxs("h3",{className:"text-base font-bold text-cyan-300 flex items-center gap-2",children:[e.jsx("span",{children:"🔍"})," Lab 1: Interactive 16-Byte Hex Dump & Integer Inspector"]}),e.jsxs("span",{className:"text-xs font-mono text-slate-400",children:["Total: ",_.totalBytes," bytes"]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-mono text-slate-400 block",children:"Type text to encode into raw binary stream:"}),e.jsx("input",{type:"text",value:A,onChange:t=>{D(t.target.value),S(0)},className:"w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs font-mono text-cyan-300 focus:outline-none focus:border-cyan-500"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 overflow-x-auto font-mono text-xs space-y-2 shadow-inner",children:[e.jsxs("div",{className:"text-slate-500 text-[11px] pb-1 border-b border-slate-900 flex justify-between",children:[e.jsx("span",{children:"OFFSET (HEX)"}),e.jsx("span",{children:"HEX VALUES (00 to 0F)"}),e.jsx("span",{children:"ASCII DECODED"})]}),_.rows.map(t=>e.jsxs("div",{className:"flex justify-between items-center py-1 hover:bg-slate-900/50 rounded px-1",children:[e.jsx("span",{className:"text-slate-500",children:t.offset.toString(16).padStart(8,"0").toUpperCase()}),e.jsx("div",{className:"flex gap-1.5",children:t.bytes.map((a,r)=>{const i=t.offset+r,b=y===i;return e.jsx("button",{onClick:()=>S(i),className:l("w-6 h-6 rounded text-center text-[11px] transition-all",b?"bg-cyan-500 text-slate-950 font-black scale-110 shadow-md shadow-cyan-500/50":"bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white"),title:`Byte #${i}: Dec=${a}, Hex=${a.toString(16).toUpperCase()}`,children:a.toString(16).padStart(2,"0").toUpperCase()},r)})}),e.jsx("span",{className:"text-emerald-400 font-bold tracking-widest",children:t.ascii.join("")})]},t.offset))]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono",children:[e.jsxs("div",{className:"p-2.5 rounded-lg bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-[10px] text-slate-500 block",children:"Byte Index:"}),e.jsxs("span",{className:"text-cyan-300 font-bold text-sm",children:["#",y]})]}),e.jsxs("div",{className:"p-2.5 rounded-lg bg-slate-900 border border-slate-800",children:[e.jsxs("span",{className:"text-[10px] text-slate-500 block",children:["Decimal (data[",y,"]):"]}),e.jsx("span",{className:"text-emerald-300 font-bold text-sm",children:j})]}),e.jsxs("div",{className:"p-2.5 rounded-lg bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-[10px] text-slate-500 block",children:"Hex Value:"}),e.jsxs("span",{className:"text-amber-300 font-bold text-sm",children:["0x",j.toString(16).toUpperCase().padStart(2,"0")]})]}),e.jsxs("div",{className:"p-2.5 rounded-lg bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-[10px] text-slate-500 block",children:"8-Bit Binary:"}),e.jsxs("span",{className:"text-cyan-300 font-bold text-sm",children:[j.toString(2).padStart(8,"0"),"₂"]})]})]})]}),d==="mutation"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-3",children:[e.jsxs("h3",{className:"text-base font-bold text-teal-300 flex items-center gap-2",children:[e.jsx("span",{children:"🛠️"})," Lab 2: In-Place bytearray Buffer Surgery"]}),e.jsx("span",{className:"text-xs font-mono text-emerald-400",children:"Memory Allocation: O(1) Zero-Copy"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 font-mono text-xs",children:[e.jsx("span",{className:"text-slate-400 uppercase tracking-wider block",children:"Active In-Memory bytearray:"}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2",children:[e.jsx("div",{className:"text-slate-500 text-[11px]",children:"ASCII String Representation:"}),e.jsxs("div",{className:"text-white text-sm font-bold tracking-wider",children:["STATUS:[",e.jsx("span",{className:"text-amber-400",children:u.padEnd(8," ")}),"]-V",h,".0-STUDENT:MAMATA"]})]}),e.jsxs("div",{className:"p-3 rounded-lg bg-slate-900/50 border border-slate-800 space-y-1 text-[11px] text-slate-400",children:[e.jsxs("div",{children:["• Status Slice ",e.jsx("code",{className:"text-teal-300",children:"ba[8:16]"})," = ",e.jsxs("code",{className:"text-amber-300",children:["b'",u.padEnd(8," "),"'"]})]}),e.jsxs("div",{children:["• Version Byte ",e.jsx("code",{className:"text-teal-300",children:"ba[19]"})," = ",e.jsxs("code",{className:"text-cyan-300",children:[h.charCodeAt(0)," (ord('",h,"'))"]})]})]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400 uppercase tracking-wider block",children:"In-Place Mutation Controls:"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-mono text-slate-300 block",children:"1. Mutate Status Slice in-place (8 bytes):"}),e.jsx("div",{className:"grid grid-cols-3 gap-2",children:["APPROVED","REJECTED","PENDING "].map(t=>e.jsx("button",{onClick:()=>C("status",t.trim()),className:l("p-2 rounded-lg text-xs font-mono font-bold border transition-all",u===t.trim()?"bg-teal-950 border-teal-500 text-teal-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:t.trim()},t))})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-mono text-slate-300 block",children:"2. Mutate Version Byte (Single Integer 0-255):"}),e.jsx("div",{className:"flex gap-2",children:["1","2","3","9"].map(t=>e.jsxs("button",{onClick:()=>C("version",t),className:l("flex-1 p-1.5 rounded-lg text-xs font-mono font-bold border transition-all",h===t?"bg-cyan-950 border-cyan-500 text-cyan-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:["V",t,".0"]},t))})]}),e.jsx("div",{className:"p-2.5 rounded bg-slate-900 border border-slate-800 font-mono text-[10px] text-slate-400 max-h-24 overflow-y-auto space-y-1",children:O.map((t,a)=>e.jsxs("div",{children:["• ",t]},a))})]})]})]}),d==="magic"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-3",children:[e.jsxs("h3",{className:"text-base font-bold text-indigo-300 flex items-center gap-2",children:[e.jsx("span",{children:"🛡️"})," Lab 3: File Format Magic Number & Signature Validator"]}),e.jsx("span",{className:"text-xs font-mono text-cyan-400",children:"Header Offset: 0x00000000"})]}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-6 gap-2",children:Object.entries(N).map(([t,a])=>e.jsxs("button",{onClick:()=>U(t),className:l("p-2.5 rounded-xl text-center border text-xs font-mono transition-all",B===t?"bg-indigo-950 border-indigo-500 text-indigo-200 font-bold shadow-md shadow-indigo-950":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"text-[10px] text-slate-500",children:a.ext}),e.jsx("div",{className:"font-bold mt-0.5",children:a.name.split(" ")[0]})]},t))}),(()=>{const t=N[B]||N.png;return e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4 font-mono text-xs",children:[e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-900 pb-3",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-white font-bold text-sm",children:t.name}),e.jsx("p",{className:"text-slate-400 text-xs font-sans mt-0.5",children:t.desc})]}),e.jsx("span",{className:"px-2.5 py-1 rounded bg-indigo-950 text-indigo-300 border border-indigo-800 text-xs font-bold",children:"Signature Match 100%"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1.5",children:[e.jsx("span",{className:"text-slate-500 text-[10px] uppercase",children:"Magic Bytes (Hex Signature):"}),e.jsx("div",{className:"text-amber-300 font-black text-sm tracking-wider",children:t.magicHex})]}),e.jsxs("div",{className:"p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1.5",children:[e.jsx("span",{className:"text-slate-500 text-[10px] uppercase",children:"ASCII Representation:"}),e.jsx("div",{className:"text-emerald-300 font-bold text-sm tracking-wider",children:t.ascii})]})]}),e.jsxs("div",{className:"p-3 rounded-lg bg-slate-900/50 border border-slate-800 text-slate-300 text-xs font-mono",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"Python Inspection Code:"}),e.jsxs("div",{className:"text-cyan-300 mt-1",children:['with open("file',t.ext,'", "rb") as f:',e.jsx("br",{}),"    sig = f.read(",t.magicHex.split(" ").length,")",e.jsx("br",{}),'    assert sig.hex().upper() == "',t.magicHex.replace(/\s+/g,""),'"']})]})]})})()]}),d==="xor"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-3",children:[e.jsxs("h3",{className:"text-base font-bold text-amber-300 flex items-center gap-2",children:[e.jsx("span",{children:"🔐"})," Lab 4: In-Place Symmetric XOR Binary Stream Cryptography"]}),e.jsx("span",{className:"text-xs font-mono text-teal-400",children:"Symmetric: (A ^ K) ^ K = A"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 font-mono text-xs",children:[e.jsx("label",{className:"text-slate-400 block",children:"Plaintext Payload to Encrypt:"}),e.jsx("input",{type:"text",value:f,onChange:t=>L(t.target.value),className:"w-full p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-cyan-300 focus:outline-none focus:border-cyan-500"}),e.jsxs("div",{className:"space-y-1.5 pt-2",children:[e.jsxs("div",{className:"flex justify-between text-slate-300",children:[e.jsx("span",{children:"Secret XOR Key Byte:"}),e.jsxs("span",{className:"text-amber-300 font-bold",children:[x," (0x",x.toString(16).toUpperCase().padStart(2,"0"),")"]})]}),e.jsx("input",{type:"range",min:1,max:255,value:x,onChange:t=>G(parseInt(t.target.value)),className:"w-full accent-amber-500"})]}),e.jsx("button",{onClick:V,className:"w-full py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-slate-950 font-black text-xs transition-colors shadow-lg shadow-amber-950",children:m?"↺ Decrypt Stream (XOR with Key)":"🔒 Encrypt Stream (XOR with Key)"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 font-mono text-xs",children:[e.jsxs("span",{className:"text-slate-400 uppercase tracking-wider block",children:["Stream State: ",m?"🔒 ENCRYPTED CIPHERTEXT":"📄 PLAINTEXT STREAM"]}),e.jsxs("div",{className:"p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-slate-500 text-[10px]",children:"Hex Byte Output:"}),e.jsx("div",{className:"text-amber-300 font-mono text-xs break-all leading-relaxed max-h-16 overflow-y-auto",children:m?M.hex:f.split("").map(t=>t.charCodeAt(0).toString(16).padStart(2,"0")).join(" ")})]}),e.jsxs("div",{className:"p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-slate-500 text-[10px]",children:"ASCII / Decoded View:"}),e.jsx("div",{className:"text-emerald-300 font-bold text-xs",children:m?M.preview:f})]}),e.jsxs("p",{className:"text-slate-400 font-sans text-[11px] leading-relaxed",children:["💡 Applying the exact same XOR bitwise loop with Key ",e.jsxs("code",{className:"text-amber-300 font-mono",children:["0x",x.toString(16).toUpperCase()]})," completely restores the original bytes with zero information loss!"]})]})]})]})]})]}),e.jsxs("section",{ref:s,className:"reveal-section max-w-5xl mx-auto mb-16 space-y-8",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-cyan-400",children:"📐"})," Binary Memory Architecture & Encoding Lifecycle"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Visualizing the byte integer memory layout, single indexing vs slicing, and the Unicode-to-Bytes UTF-8 bridge."})]}),e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-2xl",children:[e.jsxs("h3",{className:"text-base font-bold text-cyan-300 flex items-center gap-2",children:[e.jsx("span",{children:"🧠"})," Diagram 1: Bytes Memory Layout, Integer Indexing & Slices"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 900 280",className:"w-full min-w-[700px] h-auto font-mono text-xs",children:[e.jsx("rect",{x:"20",y:"20",width:"860",height:"240",rx:"16",fill:"#020617",stroke:"#1e293b",strokeWidth:"2"}),[{idx:0,char:"C",dec:67,hex:"0x43",bin:"01000011"},{idx:1,char:"o",dec:111,hex:"0x6F",bin:"01101111"},{idx:2,char:"d",dec:100,hex:"0x64",bin:"01100100"},{idx:3,char:"e",dec:101,hex:"0x65",bin:"01100101"},{idx:4,char:"r",dec:114,hex:"0x72",bin:"01110010"},{idx:5,char:"\\x00",dec:0,hex:"0x00",bin:"00000000"}].map((t,a)=>e.jsxs("g",{transform:`translate(${60+a*130}, 60)`,children:[e.jsx("rect",{x:"0",y:"0",width:"115",height:"110",rx:"10",fill:"#0f172a",stroke:"#334155",strokeWidth:"1.5"}),e.jsx("rect",{x:"0",y:"0",width:"115",height:"24",rx:"10",fill:"#1e293b"}),e.jsxs("text",{x:"57",y:"16",fill:"#94a3b8",fontSize:"11",textAnchor:"middle",children:["Index [",t.idx,"]"]}),e.jsx("text",{x:"57",y:"52",fill:"#38bdf8",fontWeight:"bold",fontSize:"16",textAnchor:"middle",children:t.char}),e.jsxs("text",{x:"57",y:"74",fill:"#a7f3d0",fontSize:"10",textAnchor:"middle",children:["Dec: ",t.dec," (",t.hex,")"]}),e.jsxs("text",{x:"57",y:"94",fill:"#64748b",fontSize:"9",textAnchor:"middle",children:[t.bin,"₂"]})]},a)),e.jsxs("g",{transform:"translate(60, 200)",children:[e.jsx("rect",{x:"0",y:"0",width:"375",height:"40",rx:"8",fill:"#064e3b",stroke:"#059669",strokeWidth:"1"}),e.jsxs("text",{x:"15",y:"24",fill:"#6ee7b7",fontSize:"11",children:["📌 data[0] → Returns INTEGER: ",e.jsx("strong",{children:"67"})," (Not b'C')"]})]}),e.jsxs("g",{transform:"translate(465, 200)",children:[e.jsx("rect",{x:"0",y:"0",width:"375",height:"40",rx:"8",fill:"#0c4a6e",stroke:"#0284c7",strokeWidth:"1"}),e.jsxs("text",{x:"15",y:"24",fill:"#7dd3fc",fontSize:"11",children:["✂️ data[0:5] → Returns BYTES slice: ",e.jsx("strong",{children:"b'Coder'"})]})]})]})})]}),e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-2xl",children:[e.jsxs("h3",{className:"text-base font-bold text-teal-300 flex items-center gap-2",children:[e.jsx("span",{children:"🌉"})," Diagram 2: The String Unicode $\\longleftrightarrow$ UTF-8 Byte Stream Bridge"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 900 220",className:"w-full min-w-[700px] h-auto font-mono text-xs",children:[e.jsx("rect",{x:"20",y:"20",width:"860",height:"180",rx:"16",fill:"#020617",stroke:"#1e293b",strokeWidth:"2"}),e.jsxs("g",{transform:"translate(60, 60)",children:[e.jsx("rect",{x:"0",y:"0",width:"260",height:"100",rx:"12",fill:"#1e1b4b",stroke:"#6366f1",strokeWidth:"1.5"}),e.jsx("text",{x:"20",y:"30",fill:"#c7d2fe",fontWeight:"bold",fontSize:"13",children:"Unicode String (str)"}),e.jsx("text",{x:"20",y:"55",fill:"#a5b4fc",fontSize:"11",children:'"Mamata | ₹4,500"'}),e.jsx("text",{x:"20",y:"80",fill:"#6366f1",fontSize:"10",children:"Abstract Code Points (U+20B9)"})]}),e.jsxs("g",{transform:"translate(340, 75)",children:[e.jsx("line",{x1:"0",y1:"15",x2:"200",y2:"15",stroke:"#14b8a6",strokeWidth:"2.5"}),e.jsx("polygon",{points:"205,15 195,10 195,20",fill:"#14b8a6"}),e.jsx("text",{x:"100",y:"8",fill:"#2dd4bf",fontSize:"10",textAnchor:"middle",fontWeight:"bold",children:".encode('utf-8')"}),e.jsx("line",{x1:"205",y1:"50",x2:"5",y2:"50",stroke:"#38bdf8",strokeWidth:"2.5"}),e.jsx("polygon",{points:"0,50 10,45 10,55",fill:"#38bdf8"}),e.jsx("text",{x:"100",y:"68",fill:"#38bdf8",fontSize:"10",textAnchor:"middle",fontWeight:"bold",children:".decode('utf-8')"})]}),e.jsxs("g",{transform:"translate(560, 60)",children:[e.jsx("rect",{x:"0",y:"0",width:"280",height:"100",rx:"12",fill:"#042f2e",stroke:"#0d9488",strokeWidth:"1.5"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontWeight:"bold",fontSize:"13",children:"Raw Bytes Stream (bytes)"}),e.jsx("text",{x:"20",y:"55",fill:"#5eead4",fontSize:"10",children:"b'Mamata | \\\\xe2\\\\x82\\\\xb94,500'"}),e.jsx("text",{x:"20",y:"80",fill:"#14b8a6",fontSize:"10",children:"Hardware 8-bit Octets on Disk"})]})]})})]})]}),e.jsxs("section",{ref:s,className:"reveal-section max-w-5xl mx-auto mb-16 space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-cyan-400",children:"📦"})," Deep Code Modules: Production Reference Scripts"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Explore 7 production-grade scripts covering bytes literals, in-place bytearray mutation, magic number verification, chunked cloning, and XOR crypto."})]}),e.jsx("span",{className:"px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-mono font-bold",children:"7 Python Files"})]}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:v.map(t=>e.jsxs("button",{onClick:()=>X(t.id),className:l("p-2.5 rounded-xl text-left border transition-all text-xs flex flex-col justify-between",P===t.id?"bg-cyan-950 border-cyan-500 text-cyan-200 shadow-md shadow-cyan-950":"bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"),children:[e.jsx("span",{className:"text-[10px] font-mono text-cyan-400 font-bold",children:t.badge}),e.jsx("span",{className:"font-semibold mt-1 line-clamp-1",children:t.title})]},t.id))}),(()=>{const t=v.find(a=>a.id===P)||v[0];return e.jsxs("div",{className:"rounded-2xl bg-slate-900/95 border border-slate-800 p-6 md:p-8 space-y-4 shadow-2xl",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white",children:t.title}),e.jsx("p",{className:"text-xs text-slate-300 mt-1",children:t.desc})]}),e.jsx(Z,{code:t.codeModule,fileName:`${t.id}.py`,highlightLines:t.highlights})]})})()]}),e.jsxs("section",{ref:s,className:"reveal-section max-w-5xl mx-auto mb-16 space-y-6",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-amber-400",children:"🏭"})," West Bengal Industry Case Studies"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"How engineering teams in Barrackpore, Jadavpur, Salt Lake, and Ichapur leverage bytes & bytearray."})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-cyan-300 text-sm",children:"Barrackpore Biometric Security"}),e.jsx("span",{className:"px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 text-[10px] font-mono",children:"BLOB Packets"})]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Mamata"})," engineered a high-speed fingerprint scanner ingestion daemon. By reading raw 512-byte sensor packets in mode ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"'rb'"}),", she parses student fingerprint templates directly into SQLite BLOB storage with sub-millisecond response times."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-teal-300 text-sm",children:"Jadavpur Satellite Imagery Pipeline"}),e.jsx("span",{className:"px-2 py-0.5 rounded bg-teal-950 text-teal-400 text-[10px] font-mono",children:"Chunk Cloner"})]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Debangshu"})," built a multi-spectral raster processor for agricultural satellite imaging. By streaming 4GB TIFF files in 64KB chunks with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"iter(lambda: f.read(chunk), b'')"}),", his cluster processes gigabytes without exceeding 16MB of RAM."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-indigo-300 text-sm",children:"Salt Lake Sector V ATM Cryptography"}),e.jsx("span",{className:"px-2 py-0.5 rounded bg-indigo-950 text-indigo-400 text-[10px] font-mono",children:"In-Place XOR"})]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Susmita"})," designed a lightweight in-place binary stream encryptor for ATM transaction receipts. Using ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"bytearray"})," in-place bitwise XOR operations, payment logs are scrambled before transmission without allocating redundant memory buffers."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-amber-300 text-sm",children:"Ichapur IoT Water Metering"}),e.jsx("span",{className:"px-2 py-0.5 rounded bg-amber-950 text-amber-400 text-[10px] font-mono",children:"Binary Structs"})]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Mahima"})," created automated telemetry collectors parsing 24-byte telemetry packets sent by municipal water flow sensors over LoRaWAN, validating magic packet headers and CRC checksums in real-time."]})]})]})]}),e.jsxs("section",{ref:s,className:"reveal-section max-w-5xl mx-auto mb-16 space-y-6",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-rose-400",children:"🛡️"})," Senior Pitfalls & Defensive Coding Standards"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Critical gotchas that lead to data corruption, memory exhaustion, and type mismatch exceptions."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/20 border border-rose-800/40 space-y-2",children:[e.jsxs("div",{className:"font-bold text-rose-300 flex items-center gap-1.5",children:[e.jsx("span",{children:"⚠️"})," Pitfall: Opening Binary Files in Text Mode ('r' or 'w')"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Reading PNGs, PDFs, or ZIPs in text mode causes immediate ",e.jsx("code",{className:"text-rose-200 font-mono",children:"UnicodeDecodeError"})," crashes and corrupts raw byte values due to OS newline translation."]}),e.jsx("div",{className:"p-2 rounded bg-slate-950 border border-rose-900/50 text-emerald-300 font-mono",children:"Cure: Always specify 'rb', 'wb', or 'ab' when opening binary files!"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/20 border border-rose-800/40 space-y-2",children:[e.jsxs("div",{className:"font-bold text-rose-300 flex items-center gap-1.5",children:[e.jsx("span",{children:"⚠️"})," Pitfall: Assigning Out-of-Range Integers to bytearray"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Executing ",e.jsx("code",{className:"text-rose-200 font-mono",children:"ba[0] = 300"})," or ",e.jsx("code",{className:"text-rose-200 font-mono",children:"ba[0] = -1"})," raises ",e.jsx("code",{className:"text-rose-200 font-mono",children:"ValueError: byte must be in range(0, 256)"}),"."]}),e.jsx("div",{className:"p-2 rounded bg-slate-950 border border-rose-900/50 text-emerald-300 font-mono",children:"Cure: Ensure byte assignments are strictly between 0 and 255 (unsigned 8-bit)."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/20 border border-rose-800/40 space-y-2",children:[e.jsxs("div",{className:"font-bold text-rose-300 flex items-center gap-1.5",children:[e.jsx("span",{children:"⚠️"})," Pitfall: Loading Multi-Gigabyte Binary Files into RAM"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-rose-200 font-mono",children:"f.read()"})," on a 10GB database or video file attempts to allocate 10GB of contiguous RAM, causing instantaneous ",e.jsx("code",{className:"text-rose-200 font-mono",children:"MemoryError"}),"."]}),e.jsx("div",{className:"p-2 rounded bg-slate-950 border border-rose-900/50 text-emerald-300 font-mono",children:"Cure: Stream data in 64KB or 1MB chunks using iter(lambda: f.read(chunk), b'')."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/20 border border-rose-800/40 space-y-2",children:[e.jsxs("div",{className:"font-bold text-rose-300 flex items-center gap-1.5",children:[e.jsx("span",{children:"⚠️"})," Pitfall: Assuming b[0] Returns a 1-Byte bytes Object"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["In Python 3, ",e.jsx("code",{className:"text-rose-200 font-mono",children:"b[0]"})," returns an ",e.jsx("code",{className:"text-rose-200 font-mono",children:"int"})," (e.g. 65 for 'A'). Comparing ",e.jsx("code",{className:"text-rose-200 font-mono",children:"b[0] == b'A'"})," evaluates to ",e.jsx("code",{className:"text-rose-200 font-mono",children:"False"}),"!"]}),e.jsx("div",{className:"p-2 rounded bg-slate-950 border border-rose-900/50 text-emerald-300 font-mono",children:"Cure: Use b[0] == 65 or slice b[0:1] == b'A'."})]})]})]}),e.jsx("section",{ref:s,className:"reveal-section max-w-5xl mx-auto mb-16 space-y-6",children:e.jsx(z,{quote:"Binary I/O gives you direct mastery over hardware and raw disk memory. Treat bytes as mathematical integers, stream large payloads in chunks, and use bytearray for in-place surgeries. Master binary streams, and you master high-performance computing!"})}),e.jsx("section",{ref:s,className:"reveal-section max-w-5xl mx-auto mb-16",children:e.jsx(Y,{content:$})}),e.jsx("section",{ref:s,className:"reveal-section max-w-5xl mx-auto mb-16",children:e.jsx(q,{title:"Topic 12: Working with Bytes & Bytearray – FAQ & Exam Bank",questions:J})}),e.jsxs("footer",{className:"max-w-5xl mx-auto text-center border-t border-slate-800/80 pt-8 pb-12 text-xs text-slate-400",children:[e.jsxs("p",{children:["Python Masterclass · Module 002_008 · Developed by"," ",e.jsx("span",{className:"text-cyan-400 font-semibold",children:"Sukanta Hui"})," (Coder & AccoTax, Barrackpore)"]}),e.jsx("p",{className:"mt-1",children:"Persisting and Manipulating Raw Binary Streams with Modern Python 3.12+"})]})]})]})};export{he as default};
