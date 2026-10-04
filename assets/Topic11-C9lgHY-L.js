import{b as s,j as e,bl as r}from"./vendor-react-core-B-R9HE-Z.js";import{T as te}from"./TeacherSukantaHui-XtM23rm9.js";import{F as ne}from"./FAQTemplate-CKUpTzyk.js";import{P as se}from"./PlainTextPrint-C6NaUtnE.js";import{P as re}from"./PythonFileLoader-DZ61U3Y_.js";import"./vendor-icons-DE_aAoDZ.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";const ae=[{question:"What is the purpose of the file.tell() method in Python?",shortAnswer:"It returns the current byte position (cursor offset) of the file pointer within the opened file.",explanation:"file.tell() returns an integer representing the current byte offset from the start of the file. In a freshly opened reading file (mode 'r'), f.tell() starts at 0. As read() or readline() operations consume characters, the pointer advances.",hint:"Think of tell() as asking 'Where is my file cursor located right now?'.",level:"basic",codeExample:`with open('demo.txt', 'r', encoding='utf-8') as f:
    print(f.tell())  # 0 at the start
    f.readline()
    print(f.tell())  # Returns byte position after line 1`},{question:"What is the syntax and purpose of the file.seek(offset, whence) method?",shortAnswer:"It repositions the file pointer cursor to a specific byte offset relative to a reference point (whence).",explanation:"The seek() method changes the stream position to the given byte offset. The parameter 'whence' defines the reference point: 0 (start of file, default), 1 (current pointer position), or 2 (end of file).",hint:"offset is the distance to move; whence is the reference starting anchor.",level:"basic",codeExample:`with open('demo.txt', 'r', encoding='utf-8') as f:
    f.read(10)  # Move 10 bytes forward
    f.seek(0)   # Rewind pointer back to start (offset 0)`},{question:"What are the three valid values for the 'whence' parameter in file.seek(offset, whence)?",shortAnswer:"0 (os.SEEK_SET = start of file), 1 (os.SEEK_CUR = current position), and 2 (os.SEEK_END = end of file).",explanation:"0 specifies absolute positioning from the start of the file (default). 1 specifies relative movement from the current pointer location. 2 specifies relative movement from the end of the file.",hint:"Remember: 0 = Start, 1 = Current, 2 = End (EOF).",level:"basic",codeExample:`import os
# f.seek(0, os.SEEK_SET) -> start
# f.seek(5, os.SEEK_CUR) -> +5 from current
# f.seek(0, os.SEEK_END) -> end of file`},{question:"How can you rewind an open file back to the very beginning without re-opening it?",shortAnswer:"By calling file.seek(0) or file.seek(0, 0).",explanation:"Calling f.seek(0) sets the file pointer offset back to byte 0. This enables you to perform multiple read passes (e.g. counting lines in pass 1, then computing statistics in pass 2) without the overhead of closing and re-opening the file descriptor.",hint:"Use seek with an offset of zero.",level:"basic",codeExample:`with open('students.txt', 'r', encoding='utf-8') as f:
    lines = f.readlines()
    f.seek(0)  # Rewind to top
    first_line = f.readline()  # Re-reads first line`},{question:"How can you determine the total size of a file in bytes using seek() and tell()?",shortAnswer:"By seeking to the end with file.seek(0, 2) and capturing file.tell().",explanation:"Calling f.seek(0, 2) moves the pointer to 0 bytes from the end of the file. Calling f.tell() immediately afterward returns the total byte count of the file.",hint:"Go to the end of the file (whence=2), then read the cursor offset.",level:"basic",codeExample:`with open('data.bin', 'rb') as f:
    f.seek(0, 2)  # Jump to EOF
    file_size = f.tell()
    print(f'File size: {file_size} bytes')
    f.seek(0)     # Reset to beginning`},{question:"What restriction applies to file.seek() when working in TEXT mode ('r' or 'w') in Python 3?",shortAnswer:"In text mode, only seeking from the start (whence=0) or seeking (0, 2) to EOF is permitted.",explanation:"Because text streams decode variable-length encodings (like UTF-8) and handle OS newline translations (\\r\\n vs \\n), arbitrary relative seeking (whence=1 or whence=2 with non-zero offsets) raises an io.UnsupportedOperation error in text mode. In text mode, only 0 or opaque return values from tell() are valid with whence=0.",hint:"For non-zero relative offsets (whence=1 or whence=2), open the file in binary mode ('rb').",level:"moderate",codeExample:`# In text mode:
# f.seek(-10, 2)  # Raises io.UnsupportedOperation!

# Must use binary mode:
with open('log.txt', 'rb') as f:
    f.seek(-10, 2)  # Valid in binary mode`},{question:"What is mode 'r+' and how does it combine with seek() for in-place modifications?",shortAnswer:"Mode 'r+' opens a file for both reading and writing without truncating it, allowing targeted overwrites.",explanation:"With 'r+', the pointer starts at offset 0. You can read a record, call f.seek(target_offset), and write new data directly over the old bytes without rewriting the rest of the file.",hint:"Think of 'r+' as read-write with surgical overwrite capability.",level:"moderate",codeExample:`with open('status.txt', 'r+', encoding='utf-8') as f:
    f.seek(10)  # Move to status column
    f.write('APPROVED')  # Overwrites 8 characters in-place`},{question:"What happens if you open a file with mode 'w+' vs mode 'r+' regarding file pointer and content?",shortAnswer:"'w+' truncates the file to 0 bytes upon opening, while 'r+' preserves existing content.",explanation:"Both 'w+' and 'r+' support reading and writing. However, 'w+' immediately erases (truncates) the file to empty, whereas 'r+' keeps all existing data intact and requires the file to already exist on disk.",hint:"Remember that any mode containing 'w' wipes the file on open.",level:"moderate",codeExample:`# 'w+' -> wipes file to 0 bytes
# 'r+' -> preserves file content and places cursor at 0`},{question:"Where is the file pointer initially placed when opening a file in append mode ('a' or 'a+')?",shortAnswer:"At the very end of the file (EOF).",explanation:"In append mode ('a' or 'a+'), the file pointer is placed at the end of the file so that all write() operations automatically append to the end. In 'a+', you must call f.seek(0) if you want to read from the beginning.",hint:"Append mode starts at EOF to prevent accidental overwrites.",level:"basic",codeExample:`with open('audit.log', 'a+', encoding='utf-8') as f:
    print(f.tell())  # Points to EOF
    f.seek(0)        # Rewind if you need to read earlier logs
    print(f.readline())`},{question:"Why does seeking to an arbitrary byte offset in a UTF-8 text file risk causing a UnicodeDecodeError?",shortAnswer:"UTF-8 uses variable-length encoding (1 to 4 bytes per character); seeking into the middle of a multi-byte sequence splits the byte code.",explanation:"ASCII characters take 1 byte, but characters like Bengali (3 bytes) or Emojis (4 bytes) span multiple bytes. If you seek to a byte in the middle of a 3-byte character, Python cannot decode the fragmented byte sequence and throws UnicodeDecodeError.",hint:"In text mode, only seek to 0, EOF, or offsets previously returned by tell().",level:"advanced",codeExample:`# 'ন' is 3 bytes in UTF-8: \\xe0\\xa6\\xa8
# Seeking to offset 1 or 2 lands inside 'ন' and breaks decoding.
with open('bengali.txt', 'r', encoding='utf-8') as f:
    # Safe: use offsets from f.tell()
    pos = f.tell()
    char = f.read(1)`},{question:"How can you read a large log file backwards (reverse tail) using seek() without loading the file into RAM?",shortAnswer:"Open in binary mode ('rb'), seek backwards from EOF in chunks (whence=2), and count newline characters.",explanation:"By starting at EOF (f.seek(0, 2)) and stepping backwards with f.seek(cursor - chunk_size), you read only the trailing bytes of the file. This achieves O(1) memory consumption even on multi-gigabyte server logs.",hint:"Use binary mode with negative offsets and os.SEEK_END.",level:"advanced",codeExample:`with open('server.log', 'rb') as f:
    f.seek(-1024, 2)  # Read last 1024 bytes
    tail_bytes = f.read()
    print(tail_bytes.decode('utf-8'))`},{question:"What does file.seekable() return?",shortAnswer:"A boolean (True or False) indicating whether the stream supports random access via seek().",explanation:"Regular disk files return True for f.seekable(). Streams connected to terminal standard input (sys.stdin), pipes, or network sockets return False because data cannot be rewound.",hint:"It checks whether random seeking is supported by the underlying OS stream.",level:"moderate",codeExample:`with open('data.txt', 'r') as f:
    print(f.seekable())  # True

import sys
print(sys.stdin.seekable())  # False (usually on interactive terminals)`},{question:"How does buffering affect file.tell() and file.seek() in Python?",shortAnswer:"Python's io layer transparently calculates the logical cursor position despite internal RAM read-ahead buffers.",explanation:"When you read a line, Python may buffer 8KB from the OS kernel into memory. However, file.tell() accurately reports your logical position in the stream. Calling seek() adjusts both the Python buffer and the underlying OS file descriptor.",hint:"tell() always returns the logical stream position.",level:"advanced",codeExample:`with open('demo.txt', 'r', buffering=8192) as f:
    f.readline()
    print(f.tell())  # Exact logical byte offset of line end`},{question:"What is the result of executing f.seek(100) on a file that is only 20 bytes long?",shortAnswer:"The pointer moves to offset 100 without error; reading returns empty, but writing creates a sparse file hole.",explanation:"Seeking past EOF is permitted by most operating systems. If you immediately read, f.read() returns empty (''). If you write data at offset 100, the OS fills the gap between byte 20 and 100 with null bytes (\\x00), creating a sparse file.",hint:"Seeking past EOF is legal; writing creates a null-byte gap.",level:"advanced",codeExample:`with open('sparse.bin', 'wb+') as f:
    f.write(b'Header')  # 6 bytes
    f.seek(50)          # Seek past EOF
    f.write(b'Footer')  # Gap 6..49 filled with \\x00`},{question:"How can you build an index of line offsets to achieve O(1) random line lookup in large files?",shortAnswer:"Iterate through the file once, recording f.tell() before each line into a dictionary {line_number: byte_offset}.",explanation:"In pass 1, record {0: 0, 1: 45, 2: 92...}. Later, to read line 50,000 instantly without scanning lines 1 through 49,999, simply call f.seek(index[50000]) and f.readline().",hint:"Cache the byte offsets in a hash map for instant seeking.",level:"moderate",codeExample:`index = {}
with open('large.txt', 'r') as f:
    line_no = 0
    while True:
        pos = f.tell()
        line = f.readline()
        if not line: break
        index[line_no] = pos
        line_no += 1`},{question:"Why is f.seek(0, 1) useful in Python text mode?",shortAnswer:"It acts as a no-op position sync (or stream flush) between read and write operations in 'r+' mode.",explanation:"In C and Python standard I/O, switching between reading and writing on an 'r+' stream requires a repositioning call like f.seek(0, 1) or f.seek(f.tell()) to flush internal read/write buffers.",hint:"It synchronizes the read/write state without moving the pointer.",level:"advanced",codeExample:`with open('file.txt', 'r+', encoding='utf-8') as f:
    data = f.read(5)
    f.seek(0, 1)  # Buffer sync
    f.write('X')`},{question:"How does seek() work with fixed-width binary records (struct module)?",shortAnswer:"You calculate the target offset as: target_offset = record_index * RECORD_SIZE and jump with f.seek(target_offset).",explanation:"Because each binary record has a constant size in bytes (e.g. 24 bytes), record N always begins exactly at byte N * 24. This allows instantaneous O(1) read, update, and search operations.",hint:"Multiply the record index by the constant record byte size.",level:"moderate",codeExample:`RECORD_SIZE = 24
record_id = 5
with open('db.dat', 'rb') as f:
    f.seek(record_id * RECORD_SIZE)
    data = f.read(RECORD_SIZE)`},{question:"What error is raised if you pass negative offset to seek() with whence=0 (os.SEEK_SET)?",shortAnswer:"ValueError: negative seek position -1 (or OSError).",explanation:"File offsets before the start of the file (offset < 0 with whence=0) do not exist. Python immediately raises a ValueError preventing invalid negative positioning.",hint:"You cannot seek before byte 0 (start of file).",level:"basic",codeExample:`with open('demo.txt', 'rb') as f:
    # f.seek(-5, 0) -> ValueError: negative seek value -5
    pass`},{question:"Does file.tell() return character count or byte count in Python 3 text mode?",shortAnswer:"It returns an opaque integer representing the byte offset in the underlying stream.",explanation:"tell() returns a byte-based cookie / offset, not a character count. For multi-byte characters (such as Unicode symbols or Bengali script), the byte offset advances by 2, 3, or 4 for a single character.",hint:"tell() is byte-oriented, not character-oriented.",level:"moderate",codeExample:`with open('utf8.txt', 'w', encoding='utf-8') as f:
    f.write('₹')  # Rupee symbol is 3 bytes
with open('utf8.txt', 'r', encoding='utf-8') as f:
    f.read(1)     # Reads 1 character
    print(f.tell())  # Prints 3 (bytes)`},{question:"What is the difference between f.seek(0) and reopening the file with open()?",shortAnswer:"f.seek(0) reuses the existing open file descriptor with zero OS file open overhead, making it much faster.",explanation:"Reopening a file requires issuing OS system calls (open, permissions check, descriptor allocation, handle creation). f.seek(0) merely updates the internal cursor offset in CPU memory and filesystem cache.",hint:"seek(0) avoids repeated OS open/close system calls.",level:"moderate",codeExample:`# High performance 2-pass scan:
with open('data.csv', 'r') as f:
    count = sum(1 for _ in f)
    f.seek(0)  # Instant rewind
    data = [line.split(',') for line in f]`},{question:"Can file.seek() be used on compressed files like gzip.GzipFile in Python?",shortAnswer:"Yes, Python's gzip module implements seek() and tell(), though seeking backwards may decompress from the start.",explanation:"The gzip.GzipFile class emulates the standard Python file interface. However, because gzip is a stream-compressed format, seeking backwards or jumping forward may require decompressing earlier blocks under the hood.",hint:"seek() is emulated on gzip streams with decompression overhead.",level:"advanced",codeExample:`import gzip
with gzip.open('data.csv.gz', 'rt') as f:
    line1 = f.readline()
    f.seek(0)  # Rewinds compressed stream
    line1_again = f.readline()`},{question:"What happens if you call f.tell() immediately after opening a file in 'w' mode?",shortAnswer:"It returns 0.",explanation:"Opening in 'w' mode truncates the file to 0 bytes and sets the pointer to offset 0, ready for fresh writes.",hint:"New or truncated files start at byte 0.",level:"basic",codeExample:`with open('fresh.txt', 'w') as f:
    print(f.tell())  # 0`},{question:"What is the return value of file.seek(offset, whence)?",shortAnswer:"It returns the new absolute byte position as an integer.",explanation:"In Python 3, file.seek() returns the new absolute byte offset from the start of the file. For example, new_pos = f.seek(20) sets and returns 20.",hint:"seek() returns the new cursor position.",level:"basic",codeExample:`with open('demo.txt', 'r') as f:
    new_pos = f.seek(15)
    print(new_pos)  # 15`},{question:"How do Windows line endings ('\\r\\n') affect tell() and seek() in text mode?",shortAnswer:"Python's universal newline translation converts '\\r\\n' to '\\n' in memory, causing character indices to diverge from raw byte offsets.",explanation:"On Windows, a line ending takes 2 bytes on disk ('\\r\\n' = 2 bytes) but appears as 1 character ('\\n') in Python text mode. Therefore, line length in Python text is shorter than the byte distance reported by tell().",hint:"Windows CRLF on disk takes 2 bytes per newline.",level:"moderate",codeExample:`# On Windows with CRLF:
with open('win.txt', 'w', newline='\\r\\n') as f:
    f.write('Hi\\n')  # 'H','i','\\r','\\n' = 4 bytes
with open('win.txt', 'r') as f:
    f.readline()
    print(f.tell())  # 4 bytes on disk`},{question:"Why should you pass newline='' when working with CSV files and tell()/seek()?",shortAnswer:"It disables universal newline translation, ensuring exact byte-accurate offset tracking without double-newline corruption.",explanation:"Passing newline='' prevents Python from altering CRLF / LF line endings, which is required by the csv module and ensures that f.tell() positions map strictly to disk byte offsets.",hint:"Always specify newline='' when opening CSV files in Python.",level:"moderate",codeExample:`import csv
with open('data.csv', 'r', newline='', encoding='utf-8') as f:
    reader = csv.reader(f)
    pos = f.tell()`},{question:"How can you truncate a file at the current pointer position using file.truncate()?",shortAnswer:"By calling file.truncate() without arguments, which slices the file at the current tell() offset.",explanation:"file.truncate([size]) resizes the file to the specified size. If size is omitted, it truncates the file at the current pointer position (f.tell()), discarding all subsequent bytes.",hint:"truncate() cuts the file off at the current cursor.",level:"advanced",codeExample:`with open('log.txt', 'r+', encoding='utf-8') as f:
    f.seek(50)      # Keep first 50 bytes
    f.truncate()    # Discard everything after byte 50`},{question:"What is the difference between os.lseek() and file.seek()?",shortAnswer:"file.seek() is a high-level method on Python file objects, while os.lseek() operates on raw low-level integer OS file descriptors.",explanation:"file.seek() coordinates with Python's user-space buffering layer. os.lseek(fd, offset, whence) issues a direct lseek() syscall on raw integer file descriptors (from os.open()).",hint:"os.lseek is low-level with integer file descriptors.",level:"advanced",codeExample:`import os
fd = os.open('raw.bin', os.O_RDONLY)
os.lseek(fd, 10, os.SEEK_SET)
os.close(fd)`},{question:"How do you skip a fixed number of bytes in binary mode without reading data into RAM?",shortAnswer:"Use file.seek(bytes_to_skip, os.SEEK_CUR) with whence=1.",explanation:"Calling f.seek(1000, 1) advances the pointer by 1000 bytes instantly via OS file pointer arithmetic without allocating memory or reading data into Python objects.",hint:"Relative seek forward skips bytes in O(1) time.",level:"moderate",codeExample:`with open('video.mp4', 'rb') as f:
    f.seek(1024 * 1024, 1)  # Skip 1 MB forward instantly`},{question:"What happens if multiple threads try to seek() and write() on the same shared file object?",shortAnswer:"Race conditions occur because the file pointer is shared state, leading to interleaved or corrupted data.",explanation:"A file object maintains a single cursor. If Thread A seeks to offset 10, but Thread B seeks to offset 50 before Thread A writes, Thread A's data will be written at offset 50. Thread locks (threading.Lock) or thread-local file descriptors must be used.",hint:"The file pointer is not thread-safe without synchronization locks.",level:"advanced",codeExample:`import threading
file_lock = threading.Lock()
# with file_lock:
#     f.seek(offset)
#     f.write(data)`},{question:"What is Sir Sukanta Hui's golden rule regarding tell() and seek() in Python production systems?",shortAnswer:"'Always use binary mode ('rb'/'rb+') for relative byte arithmetic, and restrict text mode seeking to 0, EOF, or tell() bookmarks.'",explanation:"Sir Sukanta Hui emphasizes that text encodings (UTF-8, UTF-16) and OS line translation make raw byte math in text mode hazardous. For binary structures, audio/video chunks, and reverse log tailers, binary mode is mathematically precise and 100% reliable.",hint:"Binary mode for byte arithmetic; bookmarks for text mode.",level:"advanced",codeExample:`# Golden Rule:
# Text Mode -> f.seek(0) or f.seek(saved_tell_offset)
# Binary Mode -> f.seek(+/- offset, whence)`}],ie=`================================================================================\r
PYTHON MASTERCLASS – COMPLETE TUTORIAL STUDY NOTE\r
MODULE: 002_008_FILE-HANDLING (FILE HANDLING & PERSISTENCE)\r
TOPIC 11: FILE POINTER MANIPULATION: TELL() AND SEEK()\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE)\r
================================================================================\r
\r
1. EXECUTIVE OVERVIEW & 3-TIER OPERATING SYSTEM ARCHITECTURE\r
--------------------------------------------------------------------------------\r
In Python, every opened file maintains an internal cursor called the "File Pointer"\r
or "Stream Offset". This pointer keeps track of the exact byte offset where the next\r
read or write operation will take place.\r
\r
The 3-Tier Operating System I/O Stack:\r
  [Tier 1: Python io Layer]\r
    -> io.TextIOWrapper / io.BufferedReader (Manages 8KB user-space RAM cache)\r
  [Tier 2: Process File Descriptor Table]\r
    -> Integer file descriptor handles (fd = 3) mapped to lseek() system call\r
  [Tier 3: Kernel Open File Table & Vnode]\r
    -> Hardware 64-bit cursor offset (f_pos) on physical NVMe/SSD storage\r
\r
Key Functions:\r
  * file.tell() -> int:\r
    Returns current byte position (0-indexed) of the file cursor.\r
  * file.seek(offset, whence=0) -> int:\r
    Repositions the cursor to \`offset\` relative to \`whence\`. Returns the new position.\r
\r
Whence Parameter Constants:\r
  +---------------+--------------------+---------------------------------------+\r
  | Value / Const | Reference Anchor   | Description                           |\r
  +---------------+--------------------+---------------------------------------+\r
  | 0 / SEEK_SET  | Beginning of File  | Absolute offset from byte 0 (Default) |\r
  | 1 / SEEK_CUR  | Current Cursor Pos | Relative shift from current pointer   |\r
  | 2 / SEEK_END  | End of File (EOF)  | Relative offset from EOF (e.g. -20)   |\r
  +---------------+--------------------+---------------------------------------+\r
\r
Mathematical Formalism:\r
  - whence=0 (SEEK_SET): New_Pos = offset                    (offset >= 0)\r
  - whence=1 (SEEK_CUR): New_Pos = Current_Position + offset\r
  - whence=2 (SEEK_END): New_Pos = Total_File_Size + offset  (offset <= 0)\r
\r
--------------------------------------------------------------------------------\r
2. THE 4 FUNDAMENTAL LAWS OF TEXT MODE VS BINARY MODE\r
--------------------------------------------------------------------------------\r
LAW #1: The Opaque Token Law (Text Mode tell())\r
  - In Python 3 text mode, tell() returns an opaque integer cookie encoding decoder\r
    state flags rather than simple character counts. Never perform arithmetic on it!\r
\r
LAW #2: The Multi-Byte Unicode Boundary Law\r
  - UTF-8 characters span 1 to 4 bytes. English letters = 1 byte, Bengali/Rupee (₹)\r
    = 3 bytes, Emojis = 4 bytes. Seeking into the middle of a 3-byte character\r
    causes immediate UnicodeDecodeError!\r
\r
LAW #3: The Windows CRLF Translation Law\r
  - On Windows, CRLF ('\\r\\n') takes 2 bytes on disk but 1 char in memory ('\\n').\r
    Always use newline='' when byte accuracy is required.\r
\r
LAW #4: The Binary Mode Arithmetic Law\r
  - In binary mode ('rb' / 'rb+'), all text decoders are disabled. True relative\r
    seeking (+/- offsets) with SEEK_CUR and SEEK_END is 100% mathematically exact.\r
\r
--------------------------------------------------------------------------------\r
3. 10 SIMPLE SCENARIOS & EXAMPLES CHEAT SHEET\r
--------------------------------------------------------------------------------\r
1. Rewind to Start:\r
   f.seek(0)  # Resets cursor back to byte 0 for multi-pass scans.\r
\r
2. Measure File Size in Bytes:\r
   with open('data.bin', 'rb') as f:\r
       f.seek(0, 2)\r
       size = f.tell()  # Returns total byte length\r
\r
3. Skip Metadata Banners:\r
   for _ in range(4): f.readline()  # Skip comment lines\r
   data_start = f.tell()             # Save bookmark\r
\r
4. In-Place Field Update ('r+' mode):\r
   with open('ledger.txt', 'r+', encoding='utf-8') as f:\r
       f.seek(status_offset)\r
       f.write('APPROVED')\r
\r
5. Multi-Pass Analysis without Reopening:\r
   count = sum(1 for _ in f)\r
   f.seek(0)  # Rewind to compute average in pass 2\r
\r
6. Binary Relative Seeking (SEEK_CUR):\r
   with open('records.dat', 'rb') as f:\r
       f.seek(16, 0)   # Skip header\r
       f.seek(4, 1)    # Skip 4 bytes forward from current pos\r
\r
7. Read Last N Bytes from EOF (SEEK_END):\r
   with open('app.log', 'rb') as f:\r
       f.seek(-100, 2) # Read trailing 100 bytes of log\r
       tail_data = f.read()\r
\r
8. Fast Line Indexing for O(1) Random Access:\r
   index = {line_no: f.tell() ...}\r
   f.seek(index[500]) # Instant jump to line 500\r
\r
9. Unicode Multi-Byte Safety:\r
   # Only seek to tell() bookmarks in UTF-8 text to prevent UnicodeDecodeError.\r
\r
10. Fixed-Width Binary Struct Records:\r
    RECORD_SIZE = 24\r
    f.seek(record_id * RECORD_SIZE) # O(1) jump to struct\r
\r
--------------------------------------------------------------------------------\r
4. REAL-WORLD WEST BENGAL INDUSTRY CASE STUDIES\r
--------------------------------------------------------------------------------\r
1. Barrackpore & Kolkata Smart Ledger Sync:\r
   Mamata implemented in-place status record updates for 100,000 monthly fee\r
   receipts using mode 'r+' and seek(), avoiding rewrite of a 500MB ledger.\r
\r
2. Jadavpur Academic High-Throughput Log Tailer:\r
   Debangshu built a live reverse-tailing engine in Python that monitors\r
   server crash logs by seeking backwards from EOF, keeping RAM footprint under 2MB.\r
\r
3. Salt Lake Sector V Financial Stream Parser:\r
   Susmita created an O(1) random-access line indexer that maps gigabyte-scale\r
   banking transaction CSVs into instant search microservices.\r
\r
4. Ichapur Municipal Utility Record Management:\r
   Mahima structured municipal consumer meter readings into fixed-width binary\r
   files with struct and seek(), enabling millisecond lookup times.\r
\r
--------------------------------------------------------------------------------\r
5. SENIOR PITFALLS & PRE-FLIGHT CHECKLIST\r
--------------------------------------------------------------------------------\r
- [ ] Use binary mode ('rb'/'rb+') whenever calculating relative byte offsets.\r
- [ ] In text mode, strictly restrict seek() targets to 0, EOF, or tell() cookies.\r
- [ ] In 'r+' mode, pad replacement strings to match exact field byte widths.\r
- [ ] On Windows CSV files, specify newline='' to prevent CRLF offset distortion.\r
- [ ] In multi-threaded programs, guard shared file descriptors with threading.Lock().\r
- [ ] Verify random access capability using file.seekable().\r
\r
--------------------------------------------------------------------------------\r
6. SIR SUKANTA HUI'S GOLDEN ARCHITECTURE RULE\r
--------------------------------------------------------------------------------\r
"The file pointer is your direct physical probe into disk storage. In text mode, treat tell()\r
offsets as sacred bookmarks. In binary mode, embrace the mathematical precision of byte\r
arithmetic. Master tell() and seek(), and you master true random-access I/O!"\r
                                               - Sukanta Hui (Barrackpore Hub)\r
================================================================================`,oe=`"""\r
================================================================================\r
10 SIMPLE FILE POINTER MANIPULATION EXAMPLES IN PYTHON: tell() & seek()\r
Module: 002_008_file-handling (File Handling & Persistence)\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
================================================================================\r
"""\r
\r
import os\r
import struct\r
\r
# ==============================================================================\r
# EXAMPLE 1: tell() Basics & Rewinding to Start with seek(0)\r
# ==============================================================================\r
def example_1_tell_and_rewind():\r
    """Demonstrates checking pointer position and rewinding to re-read."""\r
    with open("demo_ex1.txt", "w", encoding="utf-8") as f:\r
        f.write("Line 1: Mamata (Barrackpore)\\nLine 2: Debangshu (Jadavpur)\\n")\r
\r
    with open("demo_ex1.txt", "r", encoding="utf-8") as f:\r
        print("[Ex 1] Initial pointer position:", f.tell())  # Position 0\r
        line1 = f.readline()\r
        print(f"[Ex 1] Read Line 1: {line1.strip()} | Pointer now at:", f.tell())\r
        \r
        # Rewind back to offset 0 (start of file)\r
        f.seek(0)\r
        print("[Ex 1] After f.seek(0), pointer reset to:", f.tell())\r
        line1_again = f.readline()\r
        print(f"[Ex 1] Re-read after rewind: {line1_again.strip()}")\r
\r
\r
# ==============================================================================\r
# EXAMPLE 2: Measuring Exact File Size using seek(0, 2) & tell()\r
# ==============================================================================\r
def example_2_measure_filesize():\r
    """Moves pointer to EOF (whence=2) to get total byte size, then restores pointer."""\r
    with open("demo_ex2.txt", "w", encoding="utf-8") as f:\r
        f.write("Coder & AccoTax - Python Training Hub at Barrackpore\\nFee: Rs.4500\\n")\r
\r
    with open("demo_ex2.txt", "rb") as f:\r
        # Move pointer 0 bytes from the END of the file (os.SEEK_END = 2)\r
        f.seek(0, os.SEEK_END)\r
        file_size_bytes = f.tell()\r
        print(f"[Ex 2] Exact file size calculated via pointer: {file_size_bytes} bytes")\r
        \r
        # Restore pointer to start\r
        f.seek(0)\r
        print("[Ex 2] Pointer restored to offset:", f.tell())\r
\r
\r
# ==============================================================================\r
# EXAMPLE 3: Skipping File Header / Metadata Banner\r
# ==============================================================================\r
def example_3_skip_header():\r
    """Skips past the header metadata block directly to the data records."""\r
    content = """### HEADER METADATA START ###\r
Author: Sukanta Hui\r
Institute: Coder & AccoTax\r
### HEADER METADATA END ###\r
101,Mamata,Barrackpore,4500\r
102,Debangshu,Jadavpur,5200\r
"""\r
    with open("demo_ex3.txt", "w", encoding="utf-8") as f:\r
        f.write(content)\r
\r
    with open("demo_ex3.txt", "r", encoding="utf-8") as f:\r
        # Seek past 4 header lines by reading them\r
        for _ in range(4):\r
            f.readline()\r
        data_start_offset = f.tell()\r
        print(f"[Ex 3] Header skipped. Data rows start at byte offset: {data_start_offset}")\r
        \r
        # Now read data directly\r
        first_data_line = f.readline()\r
        print(f"[Ex 3] First data row: {first_data_line.strip()}")\r
\r
\r
# ==============================================================================\r
# EXAMPLE 4: In-Place File Update using Mode 'r+'\r
# ==============================================================================\r
def example_4_inplace_update():\r
    """Overwrites specific bytes in an existing file without rewriting the entire file."""\r
    with open("demo_ex4.txt", "w", encoding="utf-8") as f:\r
        f.write("STATUS: [PENDING ] | Student: Mamata | Center: Barrackpore\\n")\r
\r
    # Open in 'r+' mode (Read and Write in-place)\r
    with open("demo_ex4.txt", "r+", encoding="utf-8") as f:\r
        # Seek directly to byte 9 (where 'PENDING ' is located)\r
        f.seek(9)\r
        f.write("APPROVED")\r
        \r
    with open("demo_ex4.txt", "r", encoding="utf-8") as f:\r
        print("[Ex 4] In-place updated content:\\n", f.read().strip())\r
\r
\r
# ==============================================================================\r
# EXAMPLE 5: Multi-Pass Processing on a Single File Descriptor\r
# ==============================================================================\r
def example_5_multipass_reading():\r
    """Performs 2 analytical passes (Count & Average) without re-opening the file."""\r
    scores = "Mamata,95\\nDebangshu,90\\nSusmita,98\\nMahima,92\\n"\r
    with open("demo_ex5.txt", "w", encoding="utf-8") as f:\r
        f.write(scores)\r
\r
    with open("demo_ex5.txt", "r", encoding="utf-8") as f:\r
        # Pass 1: Count students\r
        total_students = sum(1 for _ in f)\r
        print(f"[Ex 5] Pass 1 completed: {total_students} students found.")\r
        \r
        # Rewind pointer for Pass 2\r
        f.seek(0)\r
        \r
        # Pass 2: Calculate average marks\r
        total_marks = 0\r
        for line in f:\r
            name, mark_str = line.strip().split(",")\r
            total_marks += int(mark_str)\r
            \r
        avg = total_marks / total_students\r
        print(f"[Ex 5] Pass 2 completed: Average Score = {avg:.1f}%")\r
\r
\r
# ==============================================================================\r
# EXAMPLE 6: Binary Mode Relative Seeking (whence=1, os.SEEK_CUR)\r
# ==============================================================================\r
def example_6_binary_relative_seeking():\r
    """In binary mode ('rb'), relative offsets from current position are valid."""\r
    raw_bytes = b"HEADER_16_BYTES_RECORD_001_DATA_RECORD_002_DATA_"\r
    with open("demo_ex6.bin", "wb") as f:\r
        f.write(raw_bytes)\r
\r
    with open("demo_ex6.bin", "rb") as f:\r
        # Skip 16-byte header\r
        f.seek(16, os.SEEK_SET)\r
        print("[Ex 6] After skipping header, pointer at:", f.tell())\r
        \r
        # Read Record 1 (16 bytes)\r
        rec1 = f.read(16)\r
        print("[Ex 6] Read Record 1:", rec1)\r
        \r
        # Relative seek: Skip 4 bytes forward from current pointer (whence=1)\r
        f.seek(4, os.SEEK_CUR)\r
        print("[Ex 6] After seeking +4 bytes from current, pointer at:", f.tell())\r
\r
\r
# ==============================================================================\r
# EXAMPLE 7: Reading the Last N Bytes from EOF (whence=2, os.SEEK_END)\r
# ==============================================================================\r
def example_7_read_from_eof():\r
    """Seeks backwards from end of file in binary mode to fetch the latest log entry."""\r
    with open("demo_ex7.log", "w", encoding="utf-8") as f:\r
        f.write("09:00 - Server Started\\n09:15 - User Logged In\\n09:30 - CRITICAL ALERT ERROR 500\\n")\r
\r
    with open("demo_ex7.log", "rb") as f:\r
        # Seek 30 bytes before EOF (negative offset with whence=2)\r
        f.seek(-30, os.SEEK_END)\r
        last_bytes = f.read()\r
        print("[Ex 7] Last 30 bytes of log:\\n", last_bytes.decode("utf-8").strip())\r
\r
\r
# ==============================================================================\r
# EXAMPLE 8: Building a Byte Offset Index for O(1) Fast Line Jumping\r
# ==============================================================================\r
def example_8_byte_offset_indexing():\r
    """Builds a lookup dictionary of line offsets for instant random access."""\r
    data = ["Line 0: Header\\n", "Line 1: Mamata Data\\n", "Line 2: Debangshu Data\\n", "Line 3: Susmita Data\\n"]\r
    with open("demo_ex8.txt", "w", encoding="utf-8") as f:\r
        f.writelines(data)\r
\r
    line_index = {}\r
    with open("demo_ex8.txt", "r", encoding="utf-8") as f:\r
        # Build index table\r
        while True:\r
            pos = f.tell()\r
            line = f.readline()\r
            if not line:\r
                break\r
            line_idx = len(line_index)\r
            line_index[line_idx] = pos\r
\r
    print("[Ex 8] Generated Line Offset Index:", line_index)\r
    \r
    # Jump directly to Line 2 without reading Line 0 or 1\r
    with open("demo_ex8.txt", "r", encoding="utf-8") as f:\r
        f.seek(line_index[2])\r
        print(f"[Ex 8] Direct jump to Line 2 (Offset {line_index[2]}):", f.readline().strip())\r
\r
\r
# ==============================================================================\r
# EXAMPLE 9: UTF-8 Multi-Byte Pitfall & Safe tell()/seek() Pattern\r
# ==============================================================================\r
def example_9_unicode_multibyte_gotcha():\r
    """Shows that in UTF-8, characters take multiple bytes. Seeking mid-character breaks encoding."""\r
    # Unicode text: 'Namaste' with an Indian Rupee symbol 'Rs.' / '₹' (3 bytes in UTF-8)\r
    sample_text = "Student: Mamata | Fee: ₹4500"\r
    with open("demo_ex9.txt", "w", encoding="utf-8") as f:\r
        f.write(sample_text)\r
\r
    with open("demo_ex9.txt", "rb") as f:\r
        raw_bytes = f.read()\r
        print(f"[Ex 9] String character count = {len(sample_text)}, UTF-8 Byte count = {len(raw_bytes)}")\r
\r
    with open("demo_ex9.txt", "r", encoding="utf-8") as f:\r
        # Safe practice in text mode: only use offsets returned by tell() or 0\r
        pos_before = f.tell()\r
        first_segment = f.read(17) # Reads "Student: Mamata |"\r
        pos_after = f.tell()\r
        print(f"[Ex 9] Read 17 chars: '{first_segment}' -> Pointer offset moved from {pos_before} to {pos_after}")\r
\r
\r
# ==============================================================================\r
# EXAMPLE 10: Fixed-Width Binary Record Random Access Engine\r
# ==============================================================================\r
def example_10_fixed_width_binary_records():\r
    """Directly accesses student record #2 using arithmetic: seek(record_id * RECORD_SIZE)."""\r
    # Struct: ID (int: 4 bytes), Name (string: 10 bytes), Score (int: 4 bytes) -> Total 18 bytes\r
    RECORD_FORMAT = "i10si"\r
    RECORD_SIZE = struct.calcsize(RECORD_FORMAT)\r
\r
    students = [\r
        (101, b"Mamata    ", 96),\r
        (102, b"Debangshu ", 94),\r
        (103, b"Susmita   ", 98)\r
    ]\r
\r
    with open("demo_ex10.bin", "wb") as f:\r
        for st in students:\r
            f.write(struct.pack(RECORD_FORMAT, *st))\r
\r
    # Instant access to Student index 1 (Debangshu) without reading Student 0\r
    target_index = 1\r
    with open("demo_ex10.bin", "rb") as f:\r
        f.seek(target_index * RECORD_SIZE)\r
        packed_data = f.read(RECORD_SIZE)\r
        sid, sname, sscore = struct.unpack(RECORD_FORMAT, packed_data)\r
        print(f"[Ex 10] Direct binary jump -> ID: {sid}, Name: {sname.decode().strip()}, Score: {sscore}%")\r
\r
\r
if __name__ == "__main__":\r
    print("Executing all 10 simple tell() and seek() examples...\\n")\r
    example_1_tell_and_rewind()\r
    print("-" * 50)\r
    example_2_measure_filesize()\r
    print("-" * 50)\r
    example_3_skip_header()\r
    print("-" * 50)\r
    example_4_inplace_update()\r
    print("-" * 50)\r
    example_5_multipass_reading()\r
    print("-" * 50)\r
    example_6_binary_relative_seeking()\r
    print("-" * 50)\r
    example_7_read_from_eof()\r
    print("-" * 50)\r
    example_8_byte_offset_indexing()\r
    print("-" * 50)\r
    example_9_unicode_multibyte_gotcha()\r
    print("-" * 50)\r
    example_10_fixed_width_binary_records()\r
    print("\\nAll 10 pointer examples completed successfully!")\r
`,le=`"""\r
================================================================================\r
Topic 11 - Example 1: Basic File Pointer Mechanics with tell() & seek(0)\r
Module: 002_008_file-handling (File Handling & Persistence)\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
================================================================================\r
\r
Key Concepts:\r
1. Every opened file maintain an internal cursor / byte offset.\r
2. file.tell() returns the current zero-based byte position.\r
3. file.seek(0) rewinds the cursor back to the start of the file.\r
4. Consecutive read() or readline() calls advance the pointer forward.\r
"""\r
\r
def demonstrate_pointer_basics():\r
    filename = "admission_records.txt"\r
    \r
    # Step 1: Create a sample file with student records\r
    with open(filename, "w", encoding="utf-8") as f:\r
        f.write("Mamata,Python Masterclass,4500\\n")\r
        f.write("Debangshu,Data Analytics,5200\\n")\r
        f.write("Susmita,Full Stack Python,6000\\n")\r
    print(f"[*] Sample file '{filename}' created.")\r
\r
    # Step 2: Open and inspect pointer motion\r
    print("\\n--- Inspecting File Pointer Cursor with tell() & seek() ---")\r
    with open(filename, "r", encoding="utf-8") as f:\r
        print(f"1. Initial pointer position: {f.tell()} (Offset 0 = Start of File)")\r
        \r
        # Read first line\r
        line1 = f.readline()\r
        print(f"2. Read Line 1: '{line1.strip()}'")\r
        print(f"   -> Pointer position after Line 1: {f.tell()} bytes")\r
        \r
        # Read second line\r
        line2 = f.readline()\r
        print(f"3. Read Line 2: '{line2.strip()}'")\r
        print(f"   -> Pointer position after Line 2: {f.tell()} bytes")\r
        \r
        # Rewind to start using seek(0)\r
        print("\\n[*] Calling f.seek(0) to rewind pointer...")\r
        f.seek(0)\r
        print(f"4. Pointer position after f.seek(0): {f.tell()} bytes")\r
        \r
        # Re-read line 1 to prove rewind\r
        line1_again = f.readline()\r
        print(f"5. Re-reading line from offset 0: '{line1_again.strip()}'")\r
\r
if __name__ == "__main__":\r
    demonstrate_pointer_basics()\r
`,de=`"""\r
================================================================================\r
Topic 11 - Example 2: File Size Measurement and Skipping Metadata Banners\r
Module: 002_008_file-handling (File Handling & Persistence)\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
================================================================================\r
\r
Key Concepts:\r
1. Moving cursor to EOF with f.seek(0, 2) and capturing f.tell() measures exact file size.\r
2. Skipping structured header lines by advancing the pointer before processing rows.\r
3. Restoring pointer position to offset 0 or any saved bookmark offset.\r
"""\r
\r
import os\r
\r
def demonstrate_filesize_and_skipping():\r
    filename = "kolkata_hub_export.csv"\r
    \r
    # 1. Create file with 3 lines of metadata header + student rows\r
    content = """# CODER & ACCOTAX EXPORT FORMAT v2.4\r
# Timestamp: 2026-10-02 10:00:00 IST\r
# Location: Barrackpore Central Hub\r
ID,Name,Center,Course,Fee\r
101,Mamata,Barrackpore,Python Masterclass,4500\r
102,Debangshu,Jadavpur,Data Analytics,5200\r
103,Susmita,Kolkata,Full Stack Python,6000\r
"""\r
    with open(filename, "w", encoding="utf-8") as f:\r
        f.write(content)\r
\r
    print(f"[*] Generated CSV export with header metadata: '{filename}'")\r
\r
    # 2. Measure exact file size using seek(0, os.SEEK_END) in binary mode\r
    with open(filename, "rb") as f:\r
        f.seek(0, os.SEEK_END)\r
        total_bytes = f.tell()\r
        print(f"\\n[+] Measured Total File Size: {total_bytes} bytes")\r
        \r
        # Reset back to start\r
        f.seek(0)\r
        print(f"[+] Pointer reset to offset {f.tell()} for reading.")\r
\r
    # 3. Skip 3 comment lines and process only student records\r
    print("\\n--- Processing Data Rows after Skipping 3 Header Lines ---")\r
    with open(filename, "r", encoding="utf-8") as f:\r
        # Skip comments\r
        while True:\r
            bookmark = f.tell()\r
            line = f.readline()\r
            if not line.startswith("#"):\r
                # Rewind 1 line back to the column header\r
                f.seek(bookmark)\r
                break\r
                \r
        data_start_offset = f.tell()\r
        print(f"[+] Data section starts at byte offset: {data_start_offset}")\r
        \r
        header_cols = f.readline().strip().split(",")\r
        print(f"[+] CSV Columns: {header_cols}")\r
        \r
        print("\\nStudent Records:")\r
        for line in f:\r
            row = line.strip().split(",")\r
            print(f"    - ID: {row[0]} | Name: {row[1]:<10} | Center: {row[2]:<12} | Fee: Rs.{row[4]}")\r
\r
if __name__ == "__main__":\r
    demonstrate_filesize_and_skipping()\r
`,ce=`"""\r
================================================================================\r
Topic 11 - Example 3: In-Place File Updates with Mode 'r+' & seek()\r
Module: 002_008_file-handling (File Handling & Persistence)\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
================================================================================\r
\r
Key Concepts:\r
1. Mode 'r+' allows both Reading and Writing without wiping the file.\r
2. seek(offset) moves the write head to the exact byte position.\r
3. In-place writing overwrites existing bytes from that position forward.\r
4. Essential requirement: Field replacement lengths must match fixed offsets or padded buffers.\r
"""\r
\r
def demonstrate_inplace_update():\r
    filename = "student_attendance_ledger.txt"\r
    \r
    # 1. Create fixed-width record ledger\r
    records = [\r
        "101 | Mamata    | STATUS: [PENDING ] | Barrackpore\\n",\r
        "102 | Debangshu | STATUS: [PENDING ] | Jadavpur   \\n",\r
        "103 | Susmita   | STATUS: [PENDING ] | Kolkata    \\n"\r
    ]\r
    with open(filename, "w", encoding="utf-8") as f:\r
        f.writelines(records)\r
        \r
    print(f"[*] Initial ledger created at '{filename}':")\r
    with open(filename, "r", encoding="utf-8") as f:\r
        print(f.read())\r
\r
    # 2. In-place update: Change Mamata's status to 'APPROVED' and Debangshu's to 'REJECTED'\r
    print("\\n[*] Updating Mamata (ID 101) & Debangshu (ID 102) in-place...")\r
    with open(filename, "r+", encoding="utf-8") as f:\r
        # Mamata's status tag is located at offset 26\r
        # Find offset of Mamata's line\r
        f.seek(0)\r
        line1 = f.readline()\r
        status_offset_1 = line1.index("PENDING ")\r
        \r
        # Seek to exact position and overwrite with 8-character string\r
        f.seek(status_offset_1)\r
        f.write("APPROVED")\r
        print(f"    -> Updated Mamata status at offset {status_offset_1} to 'APPROVED'")\r
        \r
        # Move to line 2 for Debangshu\r
        line2_start = f.tell() # Start of line 2\r
        f.seek(0)\r
        f.readline() # pass line 1\r
        pos_line2 = f.tell()\r
        line2 = f.readline()\r
        status_offset_2 = pos_line2 + line2.index("PENDING ")\r
        \r
        f.seek(status_offset_2)\r
        f.write("REJECTED")\r
        print(f"    -> Updated Debangshu status at offset {status_offset_2} to 'REJECTED'")\r
\r
    # 3. Verify final ledger from disk\r
    print("\\n--- Final Ledger on Disk After In-Place Update ---")\r
    with open(filename, "r", encoding="utf-8") as f:\r
        print(f.read())\r
\r
if __name__ == "__main__":\r
    demonstrate_inplace_update()\r
`,fe=`"""\r
================================================================================\r
Topic 11 - Example 4: Binary Mode Relative Seeking (whence=1 and whence=2)\r
Module: 002_008_file-handling (File Handling & Persistence)\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
================================================================================\r
\r
Key Concepts:\r
1. In text mode ('r'), seek() only allows relative offsets when offset is 0.\r
2. In binary mode ('rb', 'rb+'), full byte arithmetic is supported:\r
   - whence = 0 (os.SEEK_SET): Absolute from start.\r
   - whence = 1 (os.SEEK_CUR): Relative forward (+) or backward (-) from current position.\r
   - whence = 2 (os.SEEK_END): Relative backwards (-) from end of file.\r
"""\r
\r
import os\r
import struct\r
\r
def demonstrate_binary_seeking():\r
    filename = "student_records.dat"\r
    \r
    # 1. Structure: 3 binary student records (4-byte ID, 12-byte Name, 4-byte Fee)\r
    # Total record size = 20 bytes\r
    RECORD_FORMAT = ">i12si"  # Big-endian: integer, 12-char string, integer\r
    RECORD_SIZE = struct.calcsize(RECORD_FORMAT)\r
    \r
    students = [\r
        (101, b"Mamata      ", 4500),\r
        (102, b"Debangshu   ", 5200),\r
        (103, b"Susmita     ", 6000),\r
        (104, b"Mahima      ", 5500)\r
    ]\r
    \r
    with open(filename, "wb") as f:\r
        for st in students:\r
            f.write(struct.pack(RECORD_FORMAT, *st))\r
            \r
    print(f"[*] Created binary file with 4 records ({4 * RECORD_SIZE} bytes total).")\r
\r
    with open(filename, "rb") as f:\r
        # Seek whence=0 (Absolute): Read Record 0\r
        f.seek(0, os.SEEK_SET)\r
        r0 = struct.unpack(RECORD_FORMAT, f.read(RECORD_SIZE))\r
        print(f"\\n[+] Read Record 0 at offset 0: ID={r0[0]}, Name={r0[1].decode().strip()}, Fee=Rs.{r0[2]}")\r
        print(f"    Current pointer: {f.tell()} bytes")\r
        \r
        # Seek whence=1 (Relative from current): Skip Record 1 to jump directly to Record 2\r
        # Current pointer is at byte 20. Skipping 20 bytes lands at byte 40 (Record 2).\r
        f.seek(RECORD_SIZE, os.SEEK_CUR)\r
        print(f"[+] After relative seek(+{RECORD_SIZE}, SEEK_CUR), pointer at: {f.tell()} bytes")\r
        r2 = struct.unpack(RECORD_FORMAT, f.read(RECORD_SIZE))\r
        print(f"    Read Record 2: ID={r2[0]}, Name={r2[1].decode().strip()}, Fee=Rs.{r2[2]}")\r
        \r
        # Seek whence=2 (Relative from EOF): Read the very last record (Record 3)\r
        f.seek(-RECORD_SIZE, os.SEEK_END)\r
        print(f"\\n[+] After seek(-{RECORD_SIZE}, SEEK_END), pointer at: {f.tell()} bytes")\r
        r3 = struct.unpack(RECORD_FORMAT, f.read(RECORD_SIZE))\r
        print(f"    Read Last Record (Mahima): ID={r3[0]}, Name={r3[1].decode().strip()}, Fee=Rs.{r3[2]}")\r
\r
if __name__ == "__main__":\r
    demonstrate_binary_seeking()\r
`,xe=`"""\r
================================================================================\r
Topic 11 - Example 5: Building a Fast Byte Offset Index for O(1) Random Access\r
Module: 002_008_file-handling (File Handling & Persistence)\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
================================================================================\r
\r
Key Concepts:\r
1. Sequentially scanning a 1GB file to find line #50,000 is slow (O(N)).\r
2. An in-memory index table of byte offsets maps {line_number: byte_offset}.\r
3. Using f.seek(offset) provides instant O(1) random line access.\r
"""\r
\r
def demonstrate_line_indexing():\r
    filename = "large_student_directory.txt"\r
    \r
    # 1. Generate 10 sample student lines\r
    sample_names = ["Mamata", "Debangshu", "Susmita", "Mahima", "Abhronila", \r
                    "Rohan", "Ananya", "Sourav", "Priyanka", "Tanmoy"]\r
    \r
    with open(filename, "w", encoding="utf-8") as f:\r
        for idx, name in enumerate(sample_names, start=1):\r
            f.write(f"Record {idx:02d}: Name={name:<10} | Center=Barrackpore Hub | Registered=YES\\n")\r
            \r
    print(f"[*] Generated dataset with {len(sample_names)} lines.")\r
\r
    # 2. Build the Byte Offset Index Table in Pass 1\r
    line_offset_index = {}\r
    with open(filename, "r", encoding="utf-8") as f:\r
        line_num = 1\r
        while True:\r
            offset = f.tell()\r
            line = f.readline()\r
            if not line:\r
                break\r
            line_offset_index[line_num] = offset\r
            line_num += 1\r
            \r
    print(f"[+] Index Table generated ({len(line_offset_index)} entries):")\r
    for l_num in [1, 3, 5, 8, 10]:\r
        print(f"    Line {l_num:02d} -> Byte Offset {line_offset_index[l_num]}")\r
\r
    # 3. Direct O(1) Random Line Jumps\r
    print("\\n--- Instant Direct Access Demonstrations ---")\r
    with open(filename, "r", encoding="utf-8") as f:\r
        # Jump directly to line 5 (Mahima)\r
        target_line = 5\r
        f.seek(line_offset_index[target_line])\r
        print(f"[+] Jumped to Line {target_line}: {f.readline().strip()}")\r
        \r
        # Jump directly to line 2 (Debangshu)\r
        target_line = 2\r
        f.seek(line_offset_index[target_line])\r
        print(f"[+] Jumped to Line {target_line}: {f.readline().strip()}")\r
        \r
        # Jump directly to line 9 (Priyanka)\r
        target_line = 9\r
        f.seek(line_offset_index[target_line])\r
        print(f"[+] Jumped to Line {target_line}: {f.readline().strip()}")\r
\r
if __name__ == "__main__":\r
    demonstrate_line_indexing()\r
`,me=`"""\r
================================================================================\r
Topic 11 - Example 6: High-Performance Reverse Log Tailer with seek()\r
Module: 002_008_file-handling (File Handling & Persistence)\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
================================================================================\r
\r
Key Concepts:\r
1. Unix 'tail -n 10' can be implemented efficiently in Python using binary seek().\r
2. Instead of loading an entire 5GB log file into RAM, we seek backwards from EOF\r
   in small chunks (e.g., 1024 bytes) until we find the required number of newlines.\r
3. Memory consumption remains O(1) regardless of total file size on disk.\r
"""\r
\r
import os\r
\r
def tail_file(filename, n_lines=3, chunk_size=64):\r
    """\r
    Reads the last \`n_lines\` lines of a file without reading the whole file into RAM.\r
    """\r
    lines_found = []\r
    buffer = bytearray()\r
    \r
    with open(filename, "rb") as f:\r
        # Get total file size\r
        f.seek(0, os.SEEK_END)\r
        file_size = f.tell()\r
        cursor_pos = file_size\r
        \r
        while cursor_pos > 0 and len(lines_found) <= n_lines:\r
            read_size = min(chunk_size, cursor_pos)\r
            cursor_pos -= read_size\r
            f.seek(cursor_pos)\r
            \r
            chunk = f.read(read_size)\r
            buffer = chunk + buffer\r
            \r
            # Split lines in accumulated buffer\r
            lines = buffer.split(b"\\n")\r
            if len(lines) > n_lines:\r
                lines_found = [line.decode("utf-8") for line in lines[-n_lines:] if line]\r
                break\r
                \r
        if not lines_found:\r
            lines_found = [line.decode("utf-8") for line in buffer.split(b"\\n") if line]\r
            \r
    return lines_found[-n_lines:]\r
\r
def demonstrate_reverse_tail():\r
    filename = "server_system.log"\r
    \r
    # 1. Create a simulated log file\r
    sample_logs = [\r
        "[2026-10-02 08:00:00] [INFO] Server started at Barrackpore data center",\r
        "[2026-10-02 08:15:30] [INFO] User Mamata logged in from IP 192.168.1.5",\r
        "[2026-10-02 08:30:10] [INFO] Database backup completed (Size: 45MB)",\r
        "[2026-10-02 08:45:00] [WARN] Memory utilization reached 78%",\r
        "[2026-10-02 09:00:15] [CRITICAL] Connection timeout on Payment Gateway",\r
        "[2026-10-02 09:05:00] [ALERT] Automatic recovery initiated successfully",\r
        "[2026-10-02 09:10:22] [INFO] All services operating at optimal latency"\r
    ]\r
    \r
    with open(filename, "w", encoding="utf-8") as f:\r
        f.write("\\n".join(sample_logs) + "\\n")\r
        \r
    print(f"[*] Generated log file with {len(sample_logs)} entries.")\r
    \r
    # 2. Reverse tail the last 3 log entries\r
    print("\\n--- Tail -3 Output (Read Backwards from EOF) ---")\r
    last_3_lines = tail_file(filename, n_lines=3)\r
    for i, line in enumerate(last_3_lines, start=1):\r
        print(f"    [{i}] {line}")\r
\r
if __name__ == "__main__":\r
    demonstrate_reverse_tail()\r
`,_e=()=>{const[C,U]=s.useState(1),[z,I]=s.useState(!1),[o,m]=s.useState("tape"),[l,A]=s.useState(0),[b,he]=s.useState(15),[P,D]=s.useState(""),g="Mamata:Barrackpore;Debangshu:Jadavpur;Susmita:Kolkata;Mahima:Ichapur;",f=g.length,[a,y]=s.useState(0),[x,K]=s.useState(0),[w,M]=s.useState("binary"),[F,k]=s.useState(null),[j,W]=s.useState(25),_=60,[N,H]=s.useState([{id:101,name:"Mamata",center:"Barrackpore",status:"PENDING ",offset:26},{id:102,name:"Debangshu",center:"Jadavpur",status:"PENDING ",offset:68},{id:103,name:"Susmita",center:"Kolkata",status:"PENDING ",offset:110}]),[h,q]=s.useState(101),[E,V]=s.useState("APPROVED"),[G,J]=s.useState(["Initial status ledger loaded in memory."]),[p,Z]=s.useState(1),v=[{line:1,text:"Record 01: Mamata (Course: Python Masterclass, Fee: ₹4500)",offset:0,length:60},{line:2,text:"Record 02: Debangshu (Course: Data Analytics, Fee: ₹5200)",offset:60,length:59},{line:3,text:"Record 03: Susmita (Course: Full Stack Python, Fee: ₹6000)",offset:119,length:60},{line:4,text:"Record 04: Mahima (Course: Python & ML, Fee: ₹5500)",offset:179,length:53},{line:5,text:"Record 05: Abhronila (Course: Django Web API, Fee: ₹5800)",offset:232,length:58}],[L,X]=s.useState("ex1"),S=s.useRef([]);s.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(c=>{c.isIntersecting&&c.target.classList.add("is-visible")})},{threshold:.1});return S.current.forEach(n=>{n&&t.observe(n)}),()=>t.disconnect()},[]);const i=t=>{t&&!S.current.includes(t)&&S.current.push(t)},R=[{num:1,title:"tell() Basics & Rewinding with seek(0)",badge:"tell() & Rewind",desc:"Reading lines, checking current byte position with tell(), and rewinding the cursor back to byte 0 with seek(0).",code:`# Example 1: Check pointer position and rewind to start
with open("students.txt", "r", encoding="utf-8") as f:
    print("Initial pointer position:", f.tell())  # Returns 0
    
    line1 = f.readline()
    print("Read Line 1:", line1.strip())
    print("Pointer after Line 1:", f.tell())       # Returns byte count of line 1
    
    # Rewind pointer back to start
    f.seek(0)
    print("After f.seek(0), pointer reset to:", f.tell())  # Returns 0
    
    line1_again = f.readline()
    print("Re-read after rewind:", line1_again.strip())`,output:`Initial pointer position: 0
Read Line 1: Mamata (Barrackpore)
Pointer after Line 1: 22
After f.seek(0), pointer reset to: 0
Re-read after rewind: Mamata (Barrackpore)`,keyTakeaway:"f.tell() inspects current stream position; f.seek(0) resets the pointer to the file start without re-opening."},{num:2,title:"Measuring File Size with seek(0, 2) & tell()",badge:"File Size",desc:"Moving the file pointer to the end of the file (whence=2) to calculate the exact file size in bytes.",code:`# Example 2: Measure exact file size in bytes
with open("barrackpore_hub.txt", "rb") as f:
    # Move pointer 0 bytes from the END of the file (os.SEEK_END = 2)
    f.seek(0, 2)
    file_size_bytes = f.tell()
    print(f"Total file size: {file_size_bytes} bytes")
    
    # Reset cursor back to start for subsequent reads
    f.seek(0)
    print("Cursor restored to offset:", f.tell())`,output:`Total file size: 68 bytes
Cursor restored to offset: 0`,keyTakeaway:"f.seek(0, 2) navigates directly to EOF. Calling f.tell() immediately yields the total byte length."},{num:3,title:"Skipping File Headers & Metadata Banners",badge:"Skip Metadata",desc:"Advancing the file pointer past header comments and metadata blocks directly to the structured data rows.",code:`# Example 3: Skip header metadata lines
with open("dataset.csv", "r", encoding="utf-8") as f:
    # Skip first 3 metadata banner lines
    for _ in range(3):
        f.readline()
        
    data_start_offset = f.tell()
    print(f"Data rows start at byte offset: {data_start_offset}")
    
    # Read first real data line
    first_record = f.readline()
    print("First data record:", first_record.strip())`,output:`Data rows start at byte offset: 84
First data record: 101,Mamata,Barrackpore,4500`,keyTakeaway:"Capturing f.tell() after header ingestion allows future jobs to jump directly to data rows via f.seek()."},{num:4,title:"In-Place Updates using Mode 'r+'",badge:"In-Place 'r+'",desc:"Overwriting specific fields in an existing file without rewriting the entire file from scratch.",code:`# Example 4: Surgical in-place status overwrite
# Original: "STATUS: [PENDING ] | Student: Mamata"
with open("ledger.txt", "r+", encoding="utf-8") as f:
    # Seek directly to byte offset 9 where 'PENDING ' starts
    f.seek(9)
    f.write("APPROVED")  # Overwrites 8 characters in-place

with open("ledger.txt", "r", encoding="utf-8") as f:
    print("Updated file:", f.read().strip())`,output:"Updated file: STATUS: [APPROVED] | Student: Mamata",keyTakeaway:"Mode 'r+' opens for read/write without wiping data. f.seek() positions the write head for targeted in-place updates."},{num:5,title:"Multi-Pass File Analysis without Re-opening",badge:"Multi-Pass",desc:"Performing multiple passes (e.g. counting lines in pass 1, calculating averages in pass 2) using f.seek(0).",code:`# Example 5: Two analytical passes on a single open file
with open("scores.txt", "r", encoding="utf-8") as f:
    # Pass 1: Count total student rows
    total_students = sum(1 for _ in f)
    print(f"Pass 1: Found {total_students} students.")
    
    # Rewind pointer for Pass 2
    f.seek(0)
    
    # Pass 2: Calculate average marks
    total_marks = sum(int(line.split(",")[1]) for line in f)
    avg_score = total_marks / total_students
    print(f"Pass 2: Average Score = {avg_score:.1f}%")`,output:`Pass 1: Found 4 students.
Pass 2: Average Score = 93.8%`,keyTakeaway:"f.seek(0) avoids repeated OS open/close system calls, saving file handle overhead on large datasets."},{num:6,title:"Binary Mode Relative Seeking (SEEK_CUR)",badge:"Relative seek(1)",desc:"Opening in binary mode ('rb') and stepping forward relative to the current file pointer position (whence=1).",code:`import os

# Example 6: Relative seeking from current pointer (whence=1)
with open("records.bin", "rb") as f:
    # Skip 16-byte fixed header
    f.seek(16, os.SEEK_SET)  # Offset 16
    
    # Read Record 1 (16 bytes)
    rec1 = f.read(16)
    print("Read Record 1:", rec1)
    
    # Skip 4 padding bytes forward from CURRENT pointer position
    f.seek(4, os.SEEK_CUR)
    print("Pointer after relative +4 seek:", f.tell())  # Offset 36`,output:`Read Record 1: b'RECORD_001_DATA_'
Pointer after relative +4 seek: 36`,keyTakeaway:"whence=1 (os.SEEK_CUR) computes offsets relative to current position. Fully supported in binary mode ('rb')."},{num:7,title:"Reading Last N Bytes from EOF (SEEK_END)",badge:"EOF seek(2)",desc:"Seeking backwards from the end of a file in binary mode (whence=2) to inspect the latest log entries.",code:`import os

# Example 7: Read last 30 bytes of a log file
with open("server.log", "rb") as f:
    # Seek -30 bytes relative to END of file (whence=2)
    f.seek(-30, os.SEEK_END)
    last_bytes = f.read()
    print("Tail output:", last_bytes.decode("utf-8").strip())`,output:"Tail output: CRITICAL ALERT ERROR 500",keyTakeaway:"Negative offsets with whence=2 (os.SEEK_END) enable instant reverse log tailing in O(1) RAM."},{num:8,title:"Building an Offset Index for O(1) Line Jumps",badge:"Line Indexing",desc:"Creating a hash map of {line_number: byte_offset} during pass 1 to jump directly to any line in O(1) time.",code:`# Example 8: Byte offset index table for large files
line_index = {}
with open("large_data.txt", "r", encoding="utf-8") as f:
    line_no = 1
    while True:
        pos = f.tell()
        line = f.readline()
        if not line:
            break
        line_index[line_no] = pos
        line_no += 1

# Instant direct jump to Line #3 without scanning Lines 1 & 2
with open("large_data.txt", "r", encoding="utf-8") as f:
    f.seek(line_index[3])
    print(f"Line 3 direct jump (Offset {line_index[3]}):", f.readline().strip())`,output:"Line 3 direct jump (Offset 74): Record 03: Susmita (Kolkata)",keyTakeaway:"Indexing byte offsets enables sub-millisecond random line lookups without loading entire files into RAM."},{num:9,title:"UTF-8 Multi-Byte Character Safety Rule",badge:"Unicode Gotcha",desc:"Understanding why seeking into the middle of a 3-byte or 4-byte UTF-8 character crashes with UnicodeDecodeError.",code:`# Example 9: Safe text seeking in multi-byte UTF-8 files
# Note: Indian Rupee symbol '₹' takes 3 bytes in UTF-8
text = "Student: Mamata | Fee: ₹4500"

with open("receipt.txt", "w", encoding="utf-8") as f:
    f.write(text)

with open("receipt.txt", "r", encoding="utf-8") as f:
    pos_start = f.tell()             # Byte 0
    segment = f.read(17)             # Reads "Student: Mamata |"
    pos_after = f.tell()             # Byte 17
    print(f"Read '{segment}' -> Pointer moved from {pos_start} to {pos_after}")
    
    # GOLDEN RULE: In text mode, only seek to 0, EOF, or positions returned by tell()!`,output:"Read 'Student: Mamata |' -> Pointer moved from 0 to 17",keyTakeaway:"In UTF-8 text mode, never guess arbitrary byte numbers. Only seek to 0, EOF, or offsets captured from tell()."},{num:10,title:"Fixed-Width Binary Struct Lookup Engine",badge:"Binary Struct",desc:"Directly accessing record N using arithmetic: seek(record_id * RECORD_SIZE) with Python's struct module.",code:`import struct

# Example 10: Fixed-width binary record engine (18 bytes per student)
# Format: integer ID (4 bytes) + 10-char name + integer score (4 bytes)
RECORD_FORMAT = "i10si"
RECORD_SIZE = struct.calcsize(RECORD_FORMAT)  # 18 bytes

# Instant jump to Student #2 (index 1 = Debangshu)
target_index = 1
with open("students.bin", "rb") as f:
    f.seek(target_index * RECORD_SIZE)
    packed_record = f.read(RECORD_SIZE)
    sid, sname, score = struct.unpack(RECORD_FORMAT, packed_record)
    print(f"Record {target_index}: ID={sid}, Name={sname.decode().strip()}, Score={score}%")`,output:"Record 1: ID=102, Name=Debangshu, Score=94%",keyTakeaway:"Fixed-width binary formats enable true random access databases with seek(index * RECORD_SIZE)."}],d=R.find(t=>t.num===C)||R[0],Y=()=>{navigator.clipboard.writeText(d.code),I(!0),setTimeout(()=>I(!1),2e3)},u=t=>{const n=Math.max(0,Math.min(f,t));A(n),D("")},$=()=>{const t=Math.min(f,l+b),n=g.slice(l,t);D(n),A(t)},B=()=>{let t=0;return a===0?t=0:a===1?t=j:a===2&&(t=_),t+x},Q=()=>{if(k(null),w==="text"&&a!==0&&x!==0){k("io.UnsupportedOperation: can't do nonzero cur-relative or end-relative seeks in text mode! Must use binary mode ('rb').");return}const t=B();if(t<0){k("ValueError: negative seek position not allowed!");return}W(t)},ee=()=>{const t=N.find(c=>c.id===h);if(!t)return;const n=E.padEnd(8," ");H(c=>c.map(O=>O.id===h?{...O,status:n}:O)),J(c=>[`[f.seek(${t.offset})] Overwrote byte offset ${t.offset} with '${n.trim()}' for ID ${t.id} (${t.name})`,...c])},T=[{id:"ex1",title:"1. Pointer Basics & seek(0) Rewind",badge:"Core Mechanics",desc:"Inspecting cursor advancement with f.tell(), reading lines sequentially, and rewinding to offset 0 with f.seek(0).",codeModule:le,highlights:[14,27,34,43]},{id:"ex2",title:"2. Measuring File Size & Header Skipping",badge:"Navigation & Metadata",desc:"Using f.seek(0, 2) in binary mode to measure total byte size and skipping comment banners using tell() bookmarks.",codeModule:de,highlights:[25,33,44]},{id:"ex3",title:"3. In-Place Updates with Mode 'r+'",badge:"Surgical Overwrite",desc:"Reading structured student ledger records, seeking to exact byte offsets, and overwriting status tags without rewriting.",codeModule:ce,highlights:[19,29,36,44]},{id:"ex4",title:"4. Binary Mode Relative Seeking (whence 1 & 2)",badge:"Binary Arithmetic",desc:"Mastering SEEK_SET, SEEK_CUR, and SEEK_END with Python's struct module for fixed-width binary records.",codeModule:fe,highlights:[18,30,37,43]},{id:"ex5",title:"5. Fast Byte Offset Indexing for O(1) Jumps",badge:"Random Access Engine",desc:"Building a line offset lookup table {line_number: byte_offset} to achieve instant random line jumping.",codeModule:xe,highlights:[22,28,38,44]},{id:"ex6",title:"6. High-Performance Reverse Log Tailer",badge:"Industrial Tool",desc:"Reading backwards from EOF in chunks to extract trailing log lines with O(1) memory utilization.",codeModule:me,highlights:[18,26,33,48]},{id:"ex10_master",title:"7. Master Script: 10 Simple Pointer Examples",badge:"10-in-1 Master",desc:"Complete runnable script containing all 10 simple tell() and seek() functions in one clean Python module.",codeModule:oe,highlights:[14,32,48,68,86,110,128,144,172,196]}];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .reveal-section {
          transform: translateY(0);
          transition: transform 0.4s ease-out;
        }
        .reveal-section.is-visible {
          transform: translateY(0);
        }
        @keyframes pulsePointer {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 6px rgba(45, 212, 191, 0.6)); }
          50% { transform: scale(1.08); filter: drop-shadow(0 0 16px rgba(45, 212, 191, 1)); }
        }
        .animate-pointer {
          animation: pulsePointer 2.5s ease-in-out infinite;
        }
      `}),e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 md:p-12 font-sans selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsxs("header",{ref:i,className:"reveal-section max-w-5xl mx-auto mb-12 text-center",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/70 border border-teal-700/60 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-lg shadow-teal-950/40",children:[e.jsx("span",{children:"🐍"}),e.jsx("span",{children:"Python Masterclass · Module 002_008 · Topic 11"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4",children:["File Pointer Manipulation: ",e.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-300",children:"tell() & seek()"})]}),e.jsxs("p",{className:"text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed",children:["Master the file cursor: navigating byte streams with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"tell()"}),", repositioning with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"seek(offset, whence)"}),", surgical in-place updates with mode ",e.jsx("code",{className:"text-amber-300 font-mono",children:"'r+'"}),", and 10 practical real-world examples."]}),e.jsxs("div",{className:"mt-6 flex flex-wrap justify-center gap-2.5 text-xs font-medium text-slate-400",children:[e.jsxs("span",{className:"rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-teal-300 flex items-center gap-1.5",children:[e.jsx("span",{children:"📍"})," file.tell() → Byte Offset"]}),e.jsxs("span",{className:"rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-cyan-300 flex items-center gap-1.5",children:[e.jsx("span",{children:"🧭"})," file.seek(offset, whence)"]}),e.jsxs("span",{className:"rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-emerald-300 flex items-center gap-1.5",children:[e.jsx("span",{children:"💉"})," Mode 'r+' In-Place Overwrite"]}),e.jsxs("span",{className:"rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-amber-300 flex items-center gap-1.5",children:[e.jsx("span",{children:"⚡"})," 10 Simple Examples Included"]})]})]}),e.jsxs("section",{ref:i,className:"reveal-section max-w-5xl mx-auto mb-16 rounded-2xl border border-teal-500/30 bg-gradient-to-b from-slate-900/95 to-slate-900/80 p-6 md:p-8 shadow-2xl shadow-teal-950/20",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/20 text-teal-400 font-bold text-xl border border-teal-500/30",children:"👨‍🏫"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl md:text-2xl font-bold text-white",children:"Teacher's Concept Breakdown: The Tape Recorder Playhead Model"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Detailed conceptual architecture by Sukanta Hui (Coder & AccoTax, Barrackpore)"})]})]}),e.jsxs("div",{className:"mt-6 space-y-6",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/90 border border-slate-800 space-y-3",children:[e.jsxs("span",{className:"text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5",children:[e.jsx("span",{children:"📼"})," The Cassette Tape & Playhead Analogy"]}),e.jsx("p",{className:"text-sm text-slate-200 leading-relaxed",children:"Think of an open file on your disk as a long magnetic cassette tape:"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/30 border border-teal-800/40 space-y-2",children:[e.jsxs("div",{className:"font-bold text-teal-300 flex items-center gap-2",children:[e.jsx("span",{className:"text-base",children:"📍"})," file.tell() — Reading the Counter"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:[e.jsx("code",{className:"text-teal-200 font-mono",children:"f.tell()"})," is like looking at the digital tape counter. It tells you the exact byte distance from the beginning where the read/write head is currently hovering."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/40 space-y-2",children:[e.jsxs("div",{className:"font-bold text-cyan-300 flex items-center gap-2",children:[e.jsx("span",{className:"text-base",children:"⏩"})," file.seek(offset, whence) — Fast Forward & Rewind"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:[e.jsx("code",{className:"text-cyan-200 font-mono",children:"f.seek()"})," physically moves the playhead. Calling ",e.jsx("code",{className:"text-amber-200 font-mono",children:"f.seek(0)"})," rewinds all the way back to the beginning of the song, so you can listen to it again from start!"]})]})]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/90 border border-slate-800 space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-teal-300 flex items-center gap-2",children:[e.jsx("span",{children:"🧭"})," The Three 'whence' Reference Anchors"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-xs font-mono border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-800 text-slate-400 bg-slate-900/60",children:[e.jsx("th",{className:"p-3",children:"Whence Value"}),e.jsx("th",{className:"p-3",children:"Standard Constant"}),e.jsx("th",{className:"p-3",children:"Reference Anchor"}),e.jsx("th",{className:"p-3",children:"Text Mode Rules"}),e.jsx("th",{className:"p-3",children:"Binary Mode ('rb') Rules"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800/60 text-slate-300",children:[e.jsxs("tr",{className:"hover:bg-slate-900/40",children:[e.jsx("td",{className:"p-3 text-teal-300 font-bold",children:"0"}),e.jsx("td",{className:"p-3 text-cyan-300",children:"os.SEEK_SET"}),e.jsx("td",{className:"p-3 text-amber-300",children:"Start of File (Byte 0)"}),e.jsx("td",{className:"p-3 text-emerald-300",children:"Allowed (0 or tell() offsets)"}),e.jsx("td",{className:"p-3 text-emerald-300",children:"Full byte arithmetic supported"})]}),e.jsxs("tr",{className:"hover:bg-slate-900/40",children:[e.jsx("td",{className:"p-3 text-teal-300 font-bold",children:"1"}),e.jsx("td",{className:"p-3 text-cyan-300",children:"os.SEEK_CUR"}),e.jsx("td",{className:"p-3 text-amber-300",children:"Current Pointer Position"}),e.jsx("td",{className:"p-3 text-rose-400 font-bold",children:"❌ Only offset=0 allowed"}),e.jsx("td",{className:"p-3 text-emerald-300",children:"Relative + / - shifts allowed"})]}),e.jsxs("tr",{className:"hover:bg-slate-900/40",children:[e.jsx("td",{className:"p-3 text-teal-300 font-bold",children:"2"}),e.jsx("td",{className:"p-3 text-cyan-300",children:"os.SEEK_END"}),e.jsx("td",{className:"p-3 text-amber-300",children:"End of File (EOF)"}),e.jsx("td",{className:"p-3 text-amber-300",children:"Only seek(0, 2) allowed"}),e.jsx("td",{className:"p-3 text-emerald-300",children:"Negative offsets (seek(-N, 2)) allowed"})]})]})]})})]})]})]}),e.jsxs("section",{ref:i,className:"reveal-section max-w-5xl mx-auto mb-16 rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-950 p-6 md:p-8 shadow-2xl shadow-cyan-950/20 space-y-8",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 text-xs font-mono font-bold uppercase mb-2 border border-cyan-800",children:"🔬 Deep-Dive Architectural Masterclass"}),e.jsx("h2",{className:"text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight",children:"File Pointer Mechanics: Under the Hood of Kernel Offsets & Stream Buffers"}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed",children:["An elaborate technical breakdown of how operating system kernels, C runtime libraries, and the Python 3 ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"io"})," layer manage stream positions, coordinate system mathematics, and random access I/O."]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-lg font-bold text-teal-300 flex items-center gap-2",children:[e.jsx("span",{children:"🏗️"})," 1. The 3-Tier Operating System I/O Stack"]}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:["When Python calls ",e.jsx("code",{className:"text-teal-300 font-mono",children:"f.tell()"})," or ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"f.seek()"}),", operations travel through three distinct abstraction boundaries before reaching physical NVMe or SSD storage:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"text-teal-400 font-bold text-sm flex items-center gap-1.5",children:[e.jsx("span",{children:"🐍"})," Tier 1: Python io Layer"]}),e.jsxs("p",{className:"text-slate-300 font-sans leading-relaxed",children:[e.jsx("code",{className:"text-teal-200 font-mono",children:"io.TextIOWrapper"})," or ",e.jsx("code",{className:"text-teal-200 font-mono",children:"io.BufferedReader"}),". Manages internal user-space RAM cache (usually 8KB). Translates logical stream positions and tracks decoder states."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"text-cyan-400 font-bold text-sm flex items-center gap-1.5",children:[e.jsx("span",{children:"📋"})," Tier 2: Process FD Table"]}),e.jsxs("p",{className:"text-slate-300 font-sans leading-relaxed",children:["The OS process maintains a File Descriptor Table where integer handles (e.g. ",e.jsx("code",{className:"text-cyan-200 font-mono",children:"fd = 3"}),") map to kernel file structures. Calling ",e.jsx("code",{className:"text-cyan-200 font-mono",children:"seek()"})," issues the low-level ",e.jsx("code",{className:"text-cyan-200 font-mono",children:"lseek()"})," syscall."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"text-amber-400 font-bold text-sm flex items-center gap-1.5",children:[e.jsx("span",{children:"💾"})," Tier 3: Kernel Open File Table"]}),e.jsxs("p",{className:"text-slate-300 font-sans leading-relaxed",children:["The OS kernel stores the actual 64-bit cursor offset (",e.jsx("code",{className:"text-amber-200 font-mono",children:"f_pos"}),") in the vnode/inode table. When data is read or written, the kernel increments ",e.jsx("code",{className:"text-amber-200 font-mono",children:"f_pos"})," automatically."]})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-lg font-bold text-cyan-300 flex items-center gap-2",children:[e.jsx("span",{children:"🧮"})," 2. Mathematical Coordinate Space of 'whence'"]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"The target byte position in a file is calculated deterministically based on the chosen reference anchor:"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-teal-800/60 space-y-2",children:[e.jsx("div",{className:"text-teal-300 font-bold",children:"whence = 0 (os.SEEK_SET)"}),e.jsx("div",{className:"p-2 rounded bg-slate-900 border border-slate-800 text-amber-300 text-center font-bold",children:"New_Pos = offset"}),e.jsxs("p",{className:"text-slate-400 font-sans text-[11px] leading-relaxed",children:["Absolute offset from byte 0. Requires ",e.jsx("code",{className:"text-slate-300",children:"offset >= 0"}),". Negative values raise ",e.jsx("code",{className:"text-rose-400",children:"ValueError"}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-cyan-800/60 space-y-2",children:[e.jsx("div",{className:"text-cyan-300 font-bold",children:"whence = 1 (os.SEEK_CUR)"}),e.jsx("div",{className:"p-2 rounded bg-slate-900 border border-slate-800 text-amber-300 text-center font-bold",children:"New_Pos = Current_Pos + offset"}),e.jsxs("p",{className:"text-slate-400 font-sans text-[11px] leading-relaxed",children:["Relative shift from current cursor. ",e.jsx("code",{className:"text-slate-300",children:"+offset"})," jumps forward; ",e.jsx("code",{className:"text-slate-300",children:"-offset"})," jumps backward."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-indigo-800/60 space-y-2",children:[e.jsx("div",{className:"text-indigo-300 font-bold",children:"whence = 2 (os.SEEK_END)"}),e.jsx("div",{className:"p-2 rounded bg-slate-900 border border-slate-800 text-amber-300 text-center font-bold",children:"New_Pos = File_Size + offset"}),e.jsxs("p",{className:"text-slate-400 font-sans text-[11px] leading-relaxed",children:["Relative offset from EOF. To read the trailing 100 bytes, pass ",e.jsx("code",{className:"text-slate-300",children:"offset = -100"}),"."]})]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-2 text-xs",children:[e.jsxs("span",{className:"font-bold text-amber-400 flex items-center gap-1.5 font-mono uppercase",children:[e.jsx("span",{children:"⚡"})," Edge Case: Seeking Beyond End-of-File (Sparse Files)"]}),e.jsxs("p",{className:"text-slate-300 font-sans leading-relaxed",children:["What happens if you seek to byte 1,000 on a 100-byte file? The OS allows it! If you read immediately, Python returns empty (",e.jsx("code",{className:"text-teal-300 font-mono",children:"b''"}),"). But if you write data at offset 1,000, modern filesystems (NTFS, ext4, APFS) automatically fill the gap between byte 100 and 999 with ",e.jsxs("strong",{children:["null bytes (",e.jsx("code",{className:"text-teal-300 font-mono",children:"\\x00"}),")"]})," without physically allocating empty disk blocks (creating a high-efficiency ",e.jsx("em",{children:"Sparse File"}),")."]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-lg font-bold text-amber-300 flex items-center gap-2",children:[e.jsx("span",{children:"⚖️"})," 3. The 4 Fundamental Laws of Text vs Binary Seeking"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsx("div",{className:"font-bold text-teal-300 font-mono text-sm",children:"Law #1: The Opaque Token Law (Text Mode tell())"}),e.jsxs("p",{className:"text-slate-300 leading-relaxed font-sans",children:["In Python 3 text mode, the integer returned by ",e.jsx("code",{className:"text-teal-200 font-mono",children:"f.tell()"})," is not a simple character counter—it is an opaque cookie containing encoded decoder state flags. You should ",e.jsx("strong",{children:"never perform math"})," on text-mode tell() cookies (e.g. ",e.jsx("code",{className:"text-rose-300 font-mono",children:"f.seek(f.tell() + 5)"})," is invalid)."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsx("div",{className:"font-bold text-cyan-300 font-mono text-sm",children:"Law #2: The Multi-Byte Unicode Boundary Law"}),e.jsxs("p",{className:"text-slate-300 leading-relaxed font-sans",children:["UTF-8 characters take between 1 and 4 bytes. English letters take 1 byte, Bengali/Devanagari characters (like 'ন' or '₹') take 3 bytes, and emojis take 4 bytes. Arbitrary byte seeking that lands in the middle of a 3-byte sequence immediately triggers fatal ",e.jsx("code",{className:"text-rose-400 font-mono",children:"UnicodeDecodeError"}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsx("div",{className:"font-bold text-indigo-300 font-mono text-sm",children:"Law #3: The Windows CRLF Translation Law"}),e.jsxs("p",{className:"text-slate-300 leading-relaxed font-sans",children:["On Windows, lines on disk terminate with 2 bytes: carriage return + line feed (",e.jsx("code",{className:"text-indigo-200 font-mono",children:"\\r\\n"}),"). In text mode, Python automatically normalizes this to a single ",e.jsx("code",{className:"text-indigo-200 font-mono",children:"\\n"})," in memory. Consequently, string character indices diverge from physical disk byte offsets unless opened with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"newline=''"}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsx("div",{className:"font-bold text-amber-300 font-mono text-sm",children:"Law #4: The Binary Mode Arithmetic Law"}),e.jsxs("p",{className:"text-slate-300 leading-relaxed font-sans",children:["In binary mode (",e.jsx("code",{className:"text-amber-200 font-mono",children:"'rb'"})," or ",e.jsx("code",{className:"text-amber-200 font-mono",children:"'rb+'"}),"), Python disables all encoding decoders and newline translations. Direct byte arithmetic, forward/backward relative seeking (",e.jsx("code",{className:"text-amber-200 font-mono",children:"whence=1"})," / ",e.jsx("code",{className:"text-amber-200 font-mono",children:"whence=2"}),"), and fixed-width struct stepping are 100% reliable."]})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-lg font-bold text-emerald-300 flex items-center gap-2",children:[e.jsx("span",{children:"🚀"})," 4. 5 Production-Grade Industrial Pointer Patterns"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs font-mono",children:[e.jsx("span",{className:"font-bold text-teal-300",children:"Pattern A: Zero-Overhead 2-Pass Parser"}),e.jsx("span",{className:"text-slate-500",children:"f.seek(0) Rewind"})]}),e.jsxs("p",{className:"text-xs text-slate-300 font-sans leading-relaxed",children:["Instead of closing and reopening a large CSV file (which triggers redundant filesystem open syscalls, permissions checks, and descriptor table reallocations), pass 1 counts total lines and validates schemas, then calls ",e.jsx("code",{className:"text-teal-300 font-mono",children:"f.seek(0)"})," to execute pass 2 aggregation with instant CPU memory reset."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs font-mono",children:[e.jsx("span",{className:"font-bold text-cyan-300",children:"Pattern B: Surgical In-Place Record Overwrites ('r+')"}),e.jsx("span",{className:"text-slate-500",children:"f.seek(offset) + f.write()"})]}),e.jsxs("p",{className:"text-xs text-slate-300 font-sans leading-relaxed",children:["When updating a single student's status in a 1GB ledger from ",e.jsx("code",{className:"text-amber-300 font-mono",children:"'PENDING '"})," to ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"'APPROVED'"}),", writing the whole 1GB file causes massive disk I/O thrashing. Opening in ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"'r+'"}),", seeking directly to the 8-byte status field, and writing 8 bytes completes in ",e.jsx("strong",{children:"0.1 milliseconds"}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs font-mono",children:[e.jsx("span",{className:"font-bold text-indigo-300",children:"Pattern C: O(1) Binary Struct Random Access"}),e.jsx("span",{className:"text-slate-500",children:"f.seek(record_id * STRUCT_SIZE)"})]}),e.jsxs("p",{className:"text-xs text-slate-300 font-sans leading-relaxed",children:["In high-performance telemetry and database engines, records are stored as fixed-width binary structs (e.g. 24 bytes). Seeking to record #50,000 is computed mathematically as ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"f.seek(50000 * 24)"}),", jumping instantly without scanning the first 49,999 records."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs font-mono",children:[e.jsx("span",{className:"font-bold text-amber-300",children:"Pattern D: Reverse Log Tailer with O(1) RAM"}),e.jsx("span",{className:"text-slate-500",children:"f.seek(-chunk_size, os.SEEK_END)"})]}),e.jsxs("p",{className:"text-xs text-slate-300 font-sans leading-relaxed",children:["To inspect the last 10 crash errors from a 20GB cloud server log, opening the file in binary mode and seeking backwards in 1KB chunks from EOF allows extracting the trailing lines while keeping memory usage strictly under ",e.jsx("strong",{children:"2MB"}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs font-mono",children:[e.jsx("span",{className:"font-bold text-emerald-300",children:"Pattern E: Byte Offset Hash Index Table"}),e.jsx("span",{className:"text-slate-500",children:"{line_no: byte_offset}"})]}),e.jsxs("p",{className:"text-xs text-slate-300 font-sans leading-relaxed",children:["Building a compact in-memory index table of byte offsets during startup converts any sequential text file into a random-access database. Lookups for any arbitrary line execute via a single direct ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"f.seek(index[line_number])"})," jump."]})]})]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950 border border-teal-500/30 space-y-3",children:[e.jsxs("span",{className:"text-xs font-mono font-bold uppercase tracking-wider text-teal-300 flex items-center gap-1.5",children:[e.jsx("span",{children:"✅"})," Pre-Flight Checklist for Senior Python Developers"]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"1."}),e.jsxs("span",{children:["Are you using binary mode (",e.jsx("code",{className:"text-teal-200 font-mono",children:"'rb'"}),"/",e.jsx("code",{className:"text-teal-200 font-mono",children:"'rb+'"}),") whenever calculating relative byte offsets?"]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"2."}),e.jsxs("span",{children:["In text mode, are you strictly restricting ",e.jsx("code",{className:"text-teal-200 font-mono",children:"seek()"})," targets to 0, EOF, or values returned by ",e.jsx("code",{className:"text-teal-200 font-mono",children:"tell()"}),"?"]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"3."}),e.jsxs("span",{children:["When performing in-place updates with ",e.jsx("code",{className:"text-teal-200 font-mono",children:"'r+'"}),", are replacement strings padded to match exact field byte widths?"]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"4."}),e.jsxs("span",{children:["If working on Windows with CSV files, did you specify ",e.jsx("code",{className:"text-teal-200 font-mono",children:"newline=''"})," to prevent CRLF offset distortion?"]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"5."}),e.jsxs("span",{children:["If sharing a file descriptor across threads, have you guarded pointer movements with a ",e.jsx("code",{className:"text-teal-200 font-mono",children:"threading.Lock()"}),"?"]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"6."}),e.jsxs("span",{children:["Have you verified whether the underlying stream supports random seeking via ",e.jsx("code",{className:"text-teal-200 font-mono",children:"f.seekable()"}),"?"]})]})]})]})]}),e.jsxs("section",{ref:i,className:"reveal-section max-w-5xl mx-auto mb-16 space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-teal-400",children:"💡"})," 10 Simple tell() & seek() Examples (Beginner to Intermediate)"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Click on any scenario below to view the Python code, live console output, and key architectural takeaways."})]}),e.jsx("span",{className:"px-3 py-1 rounded-full bg-teal-950/80 border border-teal-800 text-teal-300 text-xs font-mono font-bold",children:"10 Quick Snippets"})]}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-2",children:R.map(t=>e.jsxs("button",{onClick:()=>U(t.num),className:r("p-2.5 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between",C===t.num?"bg-teal-950/90 border-teal-500 text-teal-200 shadow-md shadow-teal-950/50 scale-[1.02]":"bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"),children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-[10px] font-mono font-bold text-teal-400",children:["#",t.num]}),e.jsx("span",{className:"text-[9px] px-1.5 py-0.2 rounded bg-slate-950 text-slate-400 border border-slate-800 font-mono",children:t.badge})]}),e.jsx("span",{className:"text-xs font-semibold line-clamp-1 mt-1",children:t.title})]},t.num))}),e.jsxs("div",{className:"rounded-2xl bg-slate-900/90 border border-slate-800 p-6 md:p-8 space-y-6 shadow-2xl animate-[fadeIn_0.3s_ease-out]",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800 text-xs font-mono font-bold",children:["Example #",d.num]}),e.jsx("span",{className:"px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 text-xs font-mono",children:d.badge})]}),e.jsx("h3",{className:"text-lg md:text-xl font-bold text-white mt-1.5",children:d.title})]}),e.jsx("button",{onClick:Y,className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-colors flex items-center gap-1.5 border border-slate-700",children:e.jsx("span",{children:z?"✓ Copied!":"📋 Copy Code"})})]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:d.desc}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400 uppercase tracking-wider",children:"Python Implementation:"}),e.jsx("pre",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed shadow-inner",children:d.code})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2",children:[e.jsx("span",{className:"text-amber-400 font-bold uppercase tracking-wider",children:"🖥️ Expected Console Output:"}),e.jsx("pre",{className:"text-slate-300 whitespace-pre-wrap leading-relaxed",children:d.output})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/30 border border-teal-800/50 space-y-2",children:[e.jsx("span",{className:"text-teal-300 font-bold uppercase tracking-wider",children:"🎯 Key Architectural Takeaway:"}),e.jsx("p",{className:"text-slate-200 font-sans leading-relaxed text-sm",children:d.keyTakeaway})]})]})]})]}),e.jsxs("section",{ref:i,className:"reveal-section max-w-5xl mx-auto mb-16 space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-cyan-400",children:"🎛️"})," Interactive Python Workbench: The File Pointer Flight Simulator"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Interact with live stream playheads, whence calculations, in-place ledger surgeries, and O(1) line indexing."})]}),e.jsxs("div",{className:"flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800",children:[e.jsx("button",{onClick:()=>m("tape"),className:r("px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",o==="tape"?"bg-teal-600 text-white shadow-md shadow-teal-950":"text-slate-400 hover:text-slate-200"),children:"1. Tape & tell()"}),e.jsx("button",{onClick:()=>m("whence"),className:r("px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",o==="whence"?"bg-teal-600 text-white shadow-md shadow-teal-950":"text-slate-400 hover:text-slate-200"),children:"2. Whence Triad"}),e.jsx("button",{onClick:()=>m("inplace"),className:r("px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",o==="inplace"?"bg-teal-600 text-white shadow-md shadow-teal-950":"text-slate-400 hover:text-slate-200"),children:"3. In-Place 'r+'"}),e.jsx("button",{onClick:()=>m("indexer"),className:r("px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",o==="indexer"?"bg-teal-600 text-white shadow-md shadow-teal-950":"text-slate-400 hover:text-slate-200"),children:"4. O(1) Line Indexer"})]})]}),e.jsxs("div",{className:"rounded-2xl bg-slate-900/95 border border-slate-800 p-6 md:p-8 space-y-6 shadow-2xl",children:[o==="tape"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-3",children:[e.jsxs("h3",{className:"text-base font-bold text-teal-300 flex items-center gap-2",children:[e.jsx("span",{children:"📍"})," Lab 1: Byte Stream Tape & Cursor Visualizer"]}),e.jsxs("span",{className:"text-xs font-mono text-slate-400",children:["File Size: ",f," bytes"]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-400 font-mono",children:[e.jsx("span",{children:"Offset 0 (Start)"}),e.jsxs("span",{className:"text-teal-300 font-bold",children:["f.tell() = ",l," bytes"]}),e.jsxs("span",{children:["Offset ",f," (EOF)"]})]}),e.jsx("div",{className:"relative p-4 rounded-xl bg-slate-950 border border-slate-800 overflow-x-auto",children:e.jsx("div",{className:"flex items-center gap-1 font-mono text-xs select-none",children:g.split("").map((t,n)=>e.jsx("div",{className:r("w-6 h-8 rounded flex items-center justify-center border text-[11px] transition-all",n<l?"bg-slate-900/80 border-slate-800 text-slate-500":n===l?"bg-teal-500 text-slate-950 font-black border-teal-300 scale-110 shadow-lg shadow-teal-500/50 z-10":"bg-slate-900 border-slate-800/60 text-slate-300"),title:`Byte #${n}: '${t}'`,children:t===" "?"␣":t},n))})})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3",children:[e.jsxs("label",{className:"text-xs font-mono text-slate-300 block",children:["Reposition Pointer via Seek Slider: ",e.jsxs("code",{className:"text-teal-300",children:["f.seek(",l,")"]})]}),e.jsx("input",{type:"range",min:0,max:f,value:l,onChange:t=>u(parseInt(t.target.value)),className:"w-full accent-teal-500"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>u(0),className:"px-3 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-teal-300",children:"f.seek(0) [Rewind]"}),e.jsx("button",{onClick:()=>u(21),className:"px-3 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-cyan-300",children:"Seek Debangshu (21)"}),e.jsx("button",{onClick:()=>u(f),className:"px-3 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-amber-300",children:"f.seek(0, 2) [EOF]"})]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("span",{className:"text-xs font-mono text-slate-300",children:["Read next ",b," bytes:"]}),e.jsxs("button",{onClick:$,disabled:l>=f,className:"px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-500 disabled:opacity-50 text-white text-xs font-bold transition-colors",children:["f.read(",b,")"]})]}),e.jsxs("div",{className:"p-3 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs",children:[e.jsx("span",{className:"text-slate-500",children:"Read buffer output: "}),e.jsx("span",{className:"text-emerald-300 font-bold",children:P?`"${P}"`:"(No read action executed yet)"})]})]})]})]}),o==="whence"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-3",children:[e.jsxs("h3",{className:"text-base font-bold text-cyan-300 flex items-center gap-2",children:[e.jsx("span",{children:"🧭"})," Lab 2: The Whence Triad Flight Calculator"]}),e.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono",children:[e.jsx("span",{children:"Mode:"}),e.jsx("button",{onClick:()=>M("binary"),className:r("px-2 py-0.5 rounded border",w==="binary"?"bg-cyan-950 text-cyan-300 border-cyan-500 font-bold":"text-slate-500 border-slate-800"),children:"'rb' (Binary)"}),e.jsx("button",{onClick:()=>M("text"),className:r("px-2 py-0.5 rounded border",w==="text"?"bg-amber-950 text-amber-300 border-amber-500 font-bold":"text-slate-500 border-slate-800"),children:"'r' (Text)"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400 block",children:"1. Select 'whence' Anchor:"}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("button",{onClick:()=>y(0),className:r("w-full p-2 rounded text-left font-mono text-xs border transition-all",a===0?"bg-teal-950 border-teal-500 text-teal-200 font-bold":"border-slate-800 text-slate-400"),children:"whence=0 (os.SEEK_SET) [Start: Byte 0]"}),e.jsxs("button",{onClick:()=>y(1),className:r("w-full p-2 rounded text-left font-mono text-xs border transition-all",a===1?"bg-cyan-950 border-cyan-500 text-cyan-200 font-bold":"border-slate-800 text-slate-400"),children:["whence=1 (os.SEEK_CUR) [Current: Byte ",j,"]"]}),e.jsxs("button",{onClick:()=>y(2),className:r("w-full p-2 rounded text-left font-mono text-xs border transition-all",a===2?"bg-indigo-950 border-indigo-500 text-indigo-200 font-bold":"border-slate-800 text-slate-400"),children:["whence=2 (os.SEEK_END) [EOF: Byte ",_,"]"]})]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3",children:[e.jsxs("span",{className:"text-xs font-mono text-slate-400 block",children:["2. Offset Delta: ",e.jsxs("code",{className:"text-teal-300 font-bold",children:[x," bytes"]})]}),e.jsx("input",{type:"range",min:a===2?-_:-30,max:a===2?0:30,value:x,onChange:t=>K(parseInt(t.target.value)),className:"w-full accent-cyan-500"}),e.jsxs("div",{className:"text-[11px] text-slate-400 font-mono",children:["Calculated Destination: ",e.jsxs("span",{className:"text-emerald-300 font-bold",children:[B()," bytes"]})]}),e.jsxs("button",{onClick:Q,className:"w-full py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs transition-colors shadow-md shadow-cyan-950",children:["Execute f.seek(",x,", ",a,")"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 font-mono text-xs",children:[e.jsx("span",{className:"text-slate-400 block",children:"3. Python Expression:"}),e.jsxs("div",{className:"p-2.5 rounded bg-slate-900 border border-slate-800 text-teal-300",children:["f.seek(",x,", ",a===0?"os.SEEK_SET":a===1?"os.SEEK_CUR":"os.SEEK_END",")"]}),e.jsxs("div",{className:"text-[11px] text-slate-300 pt-1",children:["Current Pointer Location: ",e.jsxs("span",{className:"text-cyan-300 font-bold",children:[j," bytes"]})]}),F&&e.jsxs("div",{className:"p-2.5 rounded bg-rose-950/80 border border-rose-700 text-rose-300 text-[11px] leading-relaxed",children:["⚠️ ",F]})]})]})]}),o==="inplace"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-3",children:[e.jsxs("h3",{className:"text-base font-bold text-amber-300 flex items-center gap-2",children:[e.jsx("span",{children:"💉"})," Lab 3: In-Place Ledger Surgery with Mode 'r+'"]}),e.jsx("span",{className:"text-xs font-mono text-emerald-400",children:'Mode: open("ledger.txt", "r+", encoding="utf-8")'})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 font-mono text-xs",children:[e.jsx("span",{className:"text-slate-400 uppercase tracking-wider block",children:"Disk Ledger (Fixed-Width Bytes):"}),e.jsx("div",{className:"space-y-2",children:N.map(t=>e.jsxs("div",{className:r("p-3 rounded-lg border transition-all flex justify-between items-center",h===t.id?"bg-slate-900 border-amber-500 shadow-md shadow-amber-950/40":"bg-slate-900/50 border-slate-800"),children:[e.jsxs("div",{children:[e.jsxs("span",{className:"text-slate-500",children:["[",t.id,"] "]}),e.jsxs("span",{className:"text-white font-bold",children:[t.name," "]}),e.jsxs("span",{className:"text-slate-400",children:["(",t.center,")"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"text-[10px] text-slate-500",children:["Offset ",t.offset]}),e.jsx("span",{className:r("px-2 py-0.5 rounded text-[10px] font-bold",t.status.includes("APPROVED")?"bg-emerald-950 text-emerald-300 border border-emerald-800":t.status.includes("REJECTED")?"bg-rose-950 text-rose-300 border border-rose-800":"bg-amber-950 text-amber-300 border border-amber-800"),children:t.status.trim()})]})]},t.id))})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400 uppercase tracking-wider block",children:"Target & Overwrite Controls:"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-mono text-slate-300 block",children:"Select Student Target:"}),e.jsx("select",{value:h,onChange:t=>q(parseInt(t.target.value)),className:"w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-slate-200",children:N.map(t=>e.jsxs("option",{value:t.id,children:["ID ",t.id," - ",t.name," (Offset ",t.offset,")"]},t.id))})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-mono text-slate-300 block",children:"New Status Tag (8 Bytes):"}),e.jsx("div",{className:"grid grid-cols-3 gap-2",children:["APPROVED","REJECTED","PAID    "].map(t=>e.jsx("button",{onClick:()=>V(t),className:r("p-1.5 rounded text-xs font-mono font-bold border transition-all",E===t?"bg-amber-950 border-amber-500 text-amber-200":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"),children:t.trim()},t))})]}),e.jsxs("button",{onClick:ee,className:"w-full py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-slate-950 font-black text-xs transition-colors shadow-lg shadow-amber-950",children:["f.seek(offset) & f.write('",E.trim(),"')"]}),e.jsx("div",{className:"p-2.5 rounded bg-slate-900 border border-slate-800 font-mono text-[10px] text-slate-400 max-h-20 overflow-y-auto space-y-1",children:G.map((t,n)=>e.jsxs("div",{children:["• ",t]},n))})]})]})]}),o==="indexer"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-3",children:[e.jsxs("h3",{className:"text-base font-bold text-emerald-300 flex items-center gap-2",children:[e.jsx("span",{children:"⚡"})," Lab 4: O(1) Sub-Millisecond Line Indexer"]}),e.jsx("span",{className:"text-xs font-mono text-teal-400",children:"Hash Index: {line_no: byte_offset}"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 font-mono text-xs",children:[e.jsx("span",{className:"text-slate-400 uppercase tracking-wider block",children:"In-Memory Byte Offset Index Table:"}),e.jsx("div",{className:"space-y-1.5",children:v.map(t=>e.jsxs("button",{onClick:()=>Z(t.line),className:r("w-full p-2 rounded-lg border text-left flex justify-between items-center transition-all",p===t.line?"bg-emerald-950 border-emerald-500 text-emerald-200 font-bold":"bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-900"),children:[e.jsxs("span",{children:["Line #",String(t.line).padStart(2,"0")]}),e.jsxs("span",{className:"text-teal-400",children:["f.seek(",t.offset,")"]}),e.jsxs("span",{className:"text-[10px] text-slate-500",children:[t.length," bytes"]})]},t.line))})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4 font-mono text-xs",children:[e.jsx("span",{className:"text-slate-400 uppercase tracking-wider block",children:"Simulated Direct Seek Jump:"}),e.jsxs("div",{className:"p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"text-slate-400",children:["1. Calling: ",e.jsxs("code",{className:"text-teal-300 font-bold",children:["f.seek(index[",p,"])"]})," (Offset ",v.find(t=>t.line===p)?.offset," bytes)"]}),e.jsxs("div",{className:"text-slate-400",children:["2. Calling: ",e.jsx("code",{className:"text-cyan-300 font-bold",children:"f.readline()"})]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/60 space-y-1",children:[e.jsx("span",{className:"text-emerald-400 font-bold block",children:"Instant Retrieved Row (O(1) Access):"}),e.jsx("p",{className:"text-slate-200 font-sans text-sm font-semibold",children:v.find(t=>t.line===p)?.text})]}),e.jsxs("p",{className:"text-slate-400 font-sans text-[11px] leading-relaxed",children:["💡 Even in a 50GB file with 10 million lines, accessing Line 5,000,000 takes under ",e.jsx("strong",{children:"1 millisecond"})," because the disk controller seeks directly to the byte offset without scanning intermediate rows!"]})]})]})]})]})]}),e.jsxs("section",{ref:i,className:"reveal-section max-w-5xl mx-auto mb-16 space-y-8",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-teal-400",children:"📐"})," File Pointer Navigation Architecture & Lifecycle"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Visualizing the byte coordinate system, whence reference points, and UTF-8 encoding stream safety."})]}),e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-2xl",children:[e.jsxs("h3",{className:"text-base font-bold text-teal-300 flex items-center gap-2",children:[e.jsx("span",{children:"🧭"})," Diagram 1: The 'whence' Coordinate Anchor Grid"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 900 320",className:"w-full min-w-[700px] h-auto font-mono text-xs",children:[e.jsx("rect",{x:"20",y:"20",width:"860",height:"280",rx:"16",fill:"#020617",stroke:"#1e293b",strokeWidth:"2"}),e.jsx("rect",{x:"60",y:"110",width:"780",height:"48",rx:"8",fill:"#0f172a",stroke:"#334155",strokeWidth:"2"}),[0,100,200,300,400,500,600,700,780].map((t,n)=>e.jsxs("g",{transform:`translate(${60+t}, 110)`,children:[e.jsx("line",{x1:"0",y1:"0",x2:"0",y2:"48",stroke:"#475569",strokeWidth:"1",strokeDasharray:"2 2"}),e.jsxs("text",{x:"4",y:"62",fill:"#64748b",fontSize:"10",children:[t,"B"]})]},n)),e.jsx("text",{x:"90",y:"140",fill:"#94a3b8",fontSize:"12",children:"Record 1 (Mamata: ₹4500)"}),e.jsx("text",{x:"320",y:"140",fill:"#94a3b8",fontSize:"12",children:"Record 2 (Debangshu: ₹5200)"}),e.jsx("text",{x:"590",y:"140",fill:"#94a3b8",fontSize:"12",children:"Record 3 (Susmita: ₹6000)"}),e.jsxs("g",{transform:"translate(60, 50)",children:[e.jsx("circle",{cx:"0",cy:"0",r:"6",fill:"#14b8a6"}),e.jsx("path",{d:"M0,0 L0,52",stroke:"#14b8a6",strokeWidth:"2",markerEnd:"url(#arrowTeal)"}),e.jsx("text",{x:"10",y:"4",fill:"#2dd4bf",fontWeight:"bold",fontSize:"11",children:"whence=0 (os.SEEK_SET)"}),e.jsx("text",{x:"10",y:"18",fill:"#94a3b8",fontSize:"10",children:"Offset from Start (Byte 0)"})]}),e.jsxs("g",{transform:"translate(420, 210)",children:[e.jsx("circle",{cx:"0",cy:"0",r:"6",fill:"#38bdf8"}),e.jsx("path",{d:"M0,0 L0,-45",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"10",y:"8",fill:"#38bdf8",fontWeight:"bold",fontSize:"11",children:"whence=1 (os.SEEK_CUR)"}),e.jsx("text",{x:"10",y:"22",fill:"#94a3b8",fontSize:"10",children:"Relative from Current (+/- N)"})]}),e.jsxs("g",{transform:"translate(840, 50)",children:[e.jsx("circle",{cx:"0",cy:"0",r:"6",fill:"#f59e0b"}),e.jsx("path",{d:"M0,0 L0,52",stroke:"#f59e0b",strokeWidth:"2"}),e.jsx("text",{x:"-160",y:"4",fill:"#fbbf24",fontWeight:"bold",fontSize:"11",children:"whence=2 (os.SEEK_END)"}),e.jsx("text",{x:"-160",y:"18",fill:"#94a3b8",fontSize:"10",children:"Relative from EOF (-N Bytes)"})]}),e.jsxs("g",{transform:"translate(420, 95)",className:"animate-pointer",children:[e.jsx("polygon",{points:"-8,-14 8,-14 0,0",fill:"#2dd4bf",stroke:"#99f6e4",strokeWidth:"1.5"}),e.jsx("text",{x:"-45",y:"-20",fill:"#2dd4bf",fontWeight:"bold",fontSize:"11",children:"Active Pointer (tell() = 360)"})]})]})})]}),e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-2xl",children:[e.jsxs("h3",{className:"text-base font-bold text-cyan-300 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Diagram 2: UTF-8 Variable-Length Multi-Byte Seeking Pitfall"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 900 240",className:"w-full min-w-[700px] h-auto font-mono text-xs",children:[e.jsx("rect",{x:"20",y:"20",width:"860",height:"200",rx:"16",fill:"#020617",stroke:"#1e293b",strokeWidth:"2"}),e.jsxs("g",{transform:"translate(60, 60)",children:[e.jsx("rect",{x:"0",y:"0",width:"80",height:"60",rx:"6",fill:"#064e3b",stroke:"#059669",strokeWidth:"1.5"}),e.jsx("text",{x:"40",y:"32",fill:"#6ee7b7",fontWeight:"bold",fontSize:"14",textAnchor:"middle",children:"'M'"}),e.jsx("text",{x:"40",y:"50",fill:"#a7f3d0",fontSize:"9",textAnchor:"middle",children:"1 Byte (ASCII)"}),e.jsx("text",{x:"40",y:"80",fill:"#64748b",fontSize:"10",textAnchor:"middle",children:"Byte #0"})]}),e.jsxs("g",{transform:"translate(160, 60)",children:[e.jsx("rect",{x:"0",y:"0",width:"240",height:"60",rx:"6",fill:"#451a03",stroke:"#d97706",strokeWidth:"1.5"}),e.jsx("text",{x:"120",y:"32",fill:"#fde68a",fontWeight:"bold",fontSize:"14",textAnchor:"middle",children:"'₹' (Rupee Symbol)"}),e.jsx("text",{x:"120",y:"50",fill:"#fef3c7",fontSize:"9",textAnchor:"middle",children:"3 Bytes in UTF-8 (\\xe2 \\x82 \\xb9)"}),e.jsx("line",{x1:"80",y1:"0",x2:"80",y2:"60",stroke:"#b45309",strokeDasharray:"2 2"}),e.jsx("line",{x1:"160",y1:"0",x2:"160",y2:"60",stroke:"#b45309",strokeDasharray:"2 2"}),e.jsx("text",{x:"40",y:"80",fill:"#64748b",fontSize:"10",textAnchor:"middle",children:"Byte #1"}),e.jsx("text",{x:"120",y:"80",fill:"#f87171",fontSize:"10",textAnchor:"middle",children:"Byte #2 (MID)"}),e.jsx("text",{x:"200",y:"80",fill:"#f87171",fontSize:"10",textAnchor:"middle",children:"Byte #3 (MID)"})]}),e.jsxs("g",{transform:"translate(420, 60)",children:[e.jsx("rect",{x:"0",y:"0",width:"320",height:"60",rx:"6",fill:"#1e1b4b",stroke:"#6366f1",strokeWidth:"1.5"}),e.jsx("text",{x:"160",y:"32",fill:"#c7d2fe",fontWeight:"bold",fontSize:"14",textAnchor:"middle",children:"'🐍' (Python Emoji)"}),e.jsx("text",{x:"160",y:"50",fill:"#e0e7ff",fontSize:"9",textAnchor:"middle",children:"4 Bytes in UTF-8 (\\xf0 \\x9f \\x90 \\x8d)"}),e.jsx("text",{x:"160",y:"80",fill:"#64748b",fontSize:"10",textAnchor:"middle",children:"Bytes #4, #5, #6, #7"})]}),e.jsxs("g",{transform:"translate(160, 165)",children:[e.jsx("rect",{x:"0",y:"0",width:"680",height:"35",rx:"6",fill:"#4c0519",stroke:"#be123c",strokeWidth:"1"}),e.jsx("text",{x:"20",y:"22",fill:"#fecdd3",fontSize:"11",children:"🚨 CRITICAL: Calling f.seek(2) lands in the middle of '₹' → Raises UnicodeDecodeError in text mode!"})]})]})})]})]}),e.jsxs("section",{ref:i,className:"reveal-section max-w-5xl mx-auto mb-16 space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-teal-400",children:"📦"})," Deep Code Modules: Production Reference Scripts"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Explore 7 production-grade scripts demonstrating pointer navigation, in-place updates, binary struct arithmetic, and reverse log tailing."})]}),e.jsx("span",{className:"px-3 py-1 rounded-full bg-teal-950/80 border border-teal-800 text-teal-300 text-xs font-mono font-bold",children:"7 Python Files"})]}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:T.map(t=>e.jsxs("button",{onClick:()=>X(t.id),className:r("p-2.5 rounded-xl text-left border transition-all text-xs flex flex-col justify-between",L===t.id?"bg-teal-950 border-teal-500 text-teal-200 shadow-md shadow-teal-950":"bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"),children:[e.jsx("span",{className:"text-[10px] font-mono text-teal-400 font-bold",children:t.badge}),e.jsx("span",{className:"font-semibold mt-1 line-clamp-1",children:t.title})]},t.id))}),(()=>{const t=T.find(n=>n.id===L)||T[0];return e.jsxs("div",{className:"rounded-2xl bg-slate-900/95 border border-slate-800 p-6 md:p-8 space-y-4 shadow-2xl",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white",children:t.title}),e.jsx("p",{className:"text-xs text-slate-300 mt-1",children:t.desc})]}),e.jsx(re,{code:t.codeModule,fileName:`${t.id}.py`,highlightLines:t.highlights})]})})()]}),e.jsxs("section",{ref:i,className:"reveal-section max-w-5xl mx-auto mb-16 space-y-6",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-amber-400",children:"🏭"})," West Bengal Industry Case Studies"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"How students and engineers across Barrackpore, Kolkata, Jadavpur, and Salt Lake use tell() & seek()."})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-teal-300 text-sm",children:"Barrackpore Education Ledger"}),e.jsx("span",{className:"px-2 py-0.5 rounded bg-teal-950 text-teal-400 text-[10px] font-mono",children:"In-Place 'r+'"})]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Mamata"})," manages an active student registry of 25,000 students. Instead of rewriting the entire 500MB ledger on every fee confirmation, she uses ",e.jsx("code",{className:"text-teal-300 font-mono",children:"f.seek(student_offset)"})," with mode ",e.jsx("code",{className:"text-teal-300 font-mono",children:"'r+'"})," to surgically update payment status tags in 0.2 milliseconds."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-cyan-300 text-sm",children:"Jadavpur Cloud Cluster Monitor"}),e.jsx("span",{className:"px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 text-[10px] font-mono",children:"Reverse Tailer"})]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Debangshu"})," built a real-time alerting microservice for university compute clusters. By seeking backwards from ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"os.SEEK_END"})," in 1KB chunks, his daemon inspects the latest critical errors without ever loading multi-gigabyte log files into server RAM."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-indigo-300 text-sm",children:"Salt Lake Sector V Banking Indexer"}),e.jsx("span",{className:"px-2 py-0.5 rounded bg-indigo-950 text-indigo-400 text-[10px] font-mono",children:"O(1) Line Index"})]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Susmita"})," created an instant ledger lookup engine for high-frequency financial CSV records. During startup, the service indexes ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"tell()"})," byte offsets for all 10 million transactions, providing sub-millisecond query responses for auditors."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-amber-300 text-sm",children:"Ichapur Municipal Utility Database"}),e.jsx("span",{className:"px-2 py-0.5 rounded bg-amber-950 text-amber-400 text-[10px] font-mono",children:"Binary Struct"})]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Mahima"})," structured municipal water and electricity meter records into 24-byte binary structs. Using ",e.jsx("code",{className:"text-amber-300 font-mono",children:"f.seek(consumer_id * 24)"}),", utility billing clerks can look up or update any resident's consumption instantly."]})]})]})]}),e.jsxs("section",{ref:i,className:"reveal-section max-w-5xl mx-auto mb-16 space-y-6",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-rose-400",children:"🛡️"})," Senior Pitfalls & Defensive Coding Standards"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Critical gotchas that lead to data corruption, encoding errors, and performance degradation."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/20 border border-rose-800/40 space-y-2",children:[e.jsxs("div",{className:"font-bold text-rose-300 flex items-center gap-1.5",children:[e.jsx("span",{children:"⚠️"})," Pitfall: Relative Seeking with Non-Zero Offsets in Text Mode"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-rose-200 font-mono",children:"f.seek(10, 1)"})," or ",e.jsx("code",{className:"text-rose-200 font-mono",children:"f.seek(-5, 2)"})," on text streams raises ",e.jsx("code",{className:"text-rose-200 font-mono",children:"io.UnsupportedOperation"})," in Python 3."]}),e.jsx("div",{className:"p-2 rounded bg-slate-950 border border-rose-900/50 text-emerald-300 font-mono",children:"Cure: Always open in binary mode ('rb' / 'rb+') for relative offset calculations!"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/20 border border-rose-800/40 space-y-2",children:[e.jsxs("div",{className:"font-bold text-rose-300 flex items-center gap-1.5",children:[e.jsx("span",{children:"⚠️"})," Pitfall: Splitting Multi-Byte UTF-8 Characters"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Seeking to an arbitrary byte offset inside a 3-byte Bengali character or 4-byte emoji splits the byte sequence, causing immediate ",e.jsx("code",{className:"text-rose-200 font-mono",children:"UnicodeDecodeError"}),"."]}),e.jsx("div",{className:"p-2 rounded bg-slate-950 border border-rose-900/50 text-emerald-300 font-mono",children:"Cure: In text mode, only seek to 0, EOF, or offsets captured from f.tell()."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/20 border border-rose-800/40 space-y-2",children:[e.jsxs("div",{className:"font-bold text-rose-300 flex items-center gap-1.5",children:[e.jsx("span",{children:"⚠️"})," Pitfall: Overwriting with Shorter/Longer Strings in 'r+' Mode"]}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:"In-place writing does NOT shift neighboring bytes. If you replace 8 bytes with 5 bytes, the trailing 3 original characters will remain visible on disk as garbage data!"}),e.jsx("div",{className:"p-2 rounded bg-slate-950 border border-rose-900/50 text-emerald-300 font-mono",children:"Cure: Always pad replacement fields to match the exact fixed width (e.g. str.padEnd(8))."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/20 border border-rose-800/40 space-y-2",children:[e.jsxs("div",{className:"font-bold text-rose-300 flex items-center gap-1.5",children:[e.jsx("span",{children:"⚠️"})," Pitfall: Windows CRLF ('\\r\\n') Offset Mismatch"]}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:"On Windows, newlines take 2 bytes on disk ('\\r\\n') but appear as 1 character in Python. This causes character length arithmetic to diverge from byte offsets."}),e.jsx("div",{className:"p-2 rounded bg-slate-950 border border-rose-900/50 text-emerald-300 font-mono",children:"Cure: Specify newline='' when exact disk byte tracking is required."})]})]})]}),e.jsx("section",{ref:i,className:"reveal-section max-w-5xl mx-auto mb-16 space-y-6",children:e.jsx(te,{quote:"The file pointer is your direct physical probe into disk storage. In text mode, treat tell() offsets as sacred bookmarks. In binary mode, embrace the mathematical precision of byte arithmetic. Master tell() and seek(), and you master true random-access I/O!"})}),e.jsx("section",{ref:i,className:"reveal-section max-w-5xl mx-auto mb-16",children:e.jsx(se,{content:ie})}),e.jsx("section",{ref:i,className:"reveal-section max-w-5xl mx-auto mb-16",children:e.jsx(ne,{title:"Topic 11: File Pointer Manipulation (tell & seek) – FAQ & Exam Bank",questions:ae})}),e.jsxs("footer",{className:"max-w-5xl mx-auto text-center border-t border-slate-800/80 pt-8 pb-12 text-xs text-slate-400",children:[e.jsxs("p",{children:["Python Masterclass · Module 002_008 · Developed by"," ",e.jsx("span",{className:"text-teal-400 font-semibold",children:"Sukanta Hui"})," (Coder & AccoTax, Barrackpore)"]}),e.jsx("p",{className:"mt-1",children:"Persisting and Navigating Structured Data with Modern Python 3.12+"})]})]})]})};export{_e as default};
