import{b as s,j as e,bl as m}from"./vendor-react-core-B-R9HE-Z.js";import{T as be}from"./TeacherSukantaHui-XtM23rm9.js";import{F as ye}from"./FAQTemplate-CKUpTzyk.js";import{P as je}from"./PlainTextPrint-C6NaUtnE.js";import{P as Ne}from"./PythonFileLoader-DZ61U3Y_.js";import"./vendor-icons-DE_aAoDZ.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";const ve=[{question:"What is the return value of Python's file.write(text) method?",shortAnswer:"It returns an integer representing the exact number of characters written to the file.",explanation:"When you call file.write(string) on a text stream in Python 3, the method returns the integer count of characters (or bytes in binary mode) written into the stream buffer. For instance, f.write('Hello\\n') returns 6.",hint:"Think about character count including any explicit newline escape characters.",level:"basic",codeExample:`with open('demo.txt', 'w', encoding='utf-8') as f:
    count = f.write('Coder & AccoTax\\n')
    print(f'Characters written: {count}')  # Outputs: 16`},{question:"What happens if you pass an integer or float directly into file.write() without converting it?",shortAnswer:"Python raises a TypeError: write() argument must be str, not int.",explanation:"The write() method on text-mode file objects strictly expects a string (str). It does not perform automatic type coercion. Any numeric, boolean, list, or dictionary value must first be converted to a string using str(), f-strings, or format().",hint:"Check the expected argument type of the file.write() method signature.",level:"basic",codeExample:`# Incorrect:
# f.write(4500) -> TypeError

# Correct:
with open('fees.txt', 'w') as f:
    amount = 4500
    f.write(f'Paid: ₹{amount}\\n')  # String formatting`},{question:"Does file.write() automatically append a newline character ('\\n') at the end of each line?",shortAnswer:"No, write() writes exactly the string provided without appending any newline automatically.",explanation:"Unlike the built-in print() function (which defaults to end='\\n'), file.write() does not insert newlines. If you call f.write('Mamata') and f.write('Barrackpore'), the file will contain 'MamataBarrackpore' on the exact same line unless you explicitly include '\\n'.",hint:"Contrast the default behavior of print() with the raw stream behavior of write().",level:"basic",codeExample:`with open('names.txt', 'w') as f:
    f.write('Mamata\\n')      # Explicit \\n creates new line
    f.write('Debangshu\\n')`},{question:"What is the primary purpose and return value of file.writelines(lines)?",shortAnswer:"It writes a sequence of strings from any iterable into the file and returns None.",explanation:"file.writelines() accepts an iterable containing strings (such as a list of strings, a tuple, or a generator). It iterates through the sequence and writes each string consecutively to the file stream. The return value of writelines() is always None.",hint:"Note that writelines() does not return a character count like write() does.",level:"basic",codeExample:`lines = ['Mamata\\n', 'Debangshu\\n', 'Susmita\\n']
with open('students.txt', 'w') as f:
    res = f.writelines(lines)
    print(res)  # None`},{question:"What is the most common beginner mistake when using file.writelines()?",shortAnswer:"Assuming writelines() automatically inserts newline characters between list items.",explanation:"Despite its plural name, writelines() simply concatenates each string from the iterable into the file without injecting separators or newlines. If lines=['A', 'B', 'C'], writelines(lines) produces 'ABC'. You must ensure each item ends with '\\n' beforehand.",hint:"Think about whether 'writelines' formats line breaks on its own.",level:"moderate",codeExample:`names = ['Mamata', 'Mahima', 'Abhronila']
# Correct technique using list comprehension:
with open('out.txt', 'w') as f:
    f.writelines([f'{name}\\n' for name in names])`},{question:"What is the critical difference between opening a file in 'w' mode versus 'a' mode?",shortAnswer:"'w' truncates (erases) existing content to 0 bytes, whereas 'a' preserves existing content and appends to the end.",explanation:"In 'w' (write) mode, if the file exists, Python immediately truncates it to 0 bytes upon opening, destroying previous data. In 'a' (append) mode, the existing data is left intact and the write pointer is automatically placed at the end of the file.",hint:"Consider what happens to your historical log files if opened with 'w' instead of 'a'.",level:"basic",codeExample:`# 'w' overwrites everything:
with open('log.txt', 'w') as f:
    f.write('New Day\\n')

# 'a' keeps history:
with open('log.txt', 'a') as f:
    f.write('New Transaction\\n')`},{question:"What occurs if you attempt to open a non-existent file in 'a' (append) mode?",shortAnswer:"Python creates a new, empty file and opens it for appending without raising an error.",explanation:"Both 'w' and 'a' modes check if the file exists on disk. If it does not exist, the operating system creates a new empty file at that path. Only reading modes like 'r' raise a FileNotFoundError if the file is absent.",hint:"Think about whether append mode can initiate a brand new log file.",level:"basic",codeExample:`# Even if 'new_audit.log' doesn't exist, this succeeds:
with open('new_audit.log', 'a', encoding='utf-8') as f:
    f.write('System initialized.\\n')`},{question:"What is the purpose of exclusive creation mode ('x') in Python file handling?",shortAnswer:"It opens a file for writing ONLY if the file does not already exist, raising FileExistsError otherwise.",explanation:"Mode 'x' prevents accidental overwriting of vital files. If the target file already exists on the filesystem, Python immediately throws a FileExistsError. If the file does not exist, it creates it and opens it in write mode.",hint:"Think of 'x' as a safety shield against unintentional file erasure.",level:"moderate",codeExample:`try:
    with open('unique_token.txt', 'x') as f:
        f.write('TOKEN_99812')
except FileExistsError:
    print('Warning: File already exists! Overwrite prevented.')`},{question:"What does the file.flush() method do and when should you call it explicitly?",shortAnswer:"It forces buffered data in Python's internal memory buffer to be written out to the operating system stream.",explanation:"For performance reasons, Python buffers file write operations in RAM before committing them to the operating system file descriptor. Calling file.flush() empties this user-space buffer immediately. It is essential in long-running services, real-time logging, and interactive daemons.",hint:"Think about why a tail -f log watcher might not see lines immediately without flushing.",level:"moderate",codeExample:`import time
with open('sensor.log', 'w') as f:
    f.write('Critical Alarm: Overheat detected\\n')
    f.flush()  # Immediately visible to other processes
    time.sleep(10)`},{question:"What is the difference between file.flush() and os.fsync(file.fileno())?",shortAnswer:"file.flush() flushes Python's internal buffer to the OS, while os.fsync() forces the OS kernel to commit dirty pages to physical disk hardware.",explanation:"file.flush() only transfers data from Python's C-level stream buffer to the OS kernel page cache. If power is lost instantly, data in the OS page cache might still be lost. os.fsync(f.fileno()) issues an OS sync syscall, guaranteeing that data is physically written to the non-volatile storage drive.",hint:"Distinguish between Python user-space memory, OS page cache, and physical storage.",level:"expert",codeExample:`import os
with open('bank_ledger.txt', 'a') as f:
    f.write('TXN_ID_9901: ₹50,000 Transferred\\n')
    f.flush()            # Python RAM -> OS Cache
    os.fsync(f.fileno()) # OS Cache -> Physical SSD`},{question:"How does the 'w+' mode behave compared to 'r+' and 'a+' modes?",shortAnswer:"'w+' allows reading and writing but truncates (erases) the file to 0 bytes on open.",explanation:"All three modes support read+write operations, but their starting behavior differs significantly: 'r+' opens for reading and writing without truncation (pointer at start); 'a+' opens for reading and writing without truncation (pointer at end for writing); 'w+' wipes the file clean to 0 bytes immediately upon opening.",hint:"Remember the danger of 'w' prefix in 'w+'—it always truncates!",level:"moderate",codeExample:`with open('data.txt', 'w+') as f:
    f.write('Initial Text\\n')
    f.seek(0)  # Rewind to start to read
    content = f.read()
    print(content)  # 'Initial Text\\n'`},{question:"In 'a+' (append and read) mode, where is the file pointer initially positioned for read operations?",shortAnswer:"At the end of the file (EOF), meaning f.read() returns an empty string unless you f.seek(0) first.",explanation:"When opening with 'a+', the file pointer starts at the end of the existing content. If you immediately call f.read(), it reads from the pointer to EOF, returning ''. To read the file content, you must explicitly reposition the pointer using f.seek(0). Note that subsequent writes will still always append to the end in append mode.",hint:"Consider what f.tell() returns immediately after opening a file in 'a+' mode.",level:"moderate",codeExample:`with open('notes.txt', 'a+') as f:
    f.write('Appended Line\\n')
    f.seek(0)            # Move pointer to beginning
    print(f.read())      # Reads all text including appended line`},{question:"Why is it dangerous to write files directly without the 'with' statement in production?",shortAnswer:"If an unhandled exception occurs before file.close(), data in the buffer may be lost and the file descriptor remains leaked.",explanation:"The with statement uses the context manager protocol (__enter__ and __exit__). It guarantees that f.close() is called unconditionally, flushing all buffers and releasing operating system file handles, even if a RuntimeError, KeyboardInterrupt, or MemoryError occurs.",hint:"Think about file descriptor exhaustion and dirty buffer leaks.",level:"basic",codeExample:`# Unsafe:
f = open('data.txt', 'w')
f.write('Hello')
# If an error happens here, file stays open!
f.close()

# Safe:
with open('data.txt', 'w') as f:
    f.write('Hello')`},{question:"How can you write a list of dictionaries to a text file in a clean, human-readable format using write()?",shortAnswer:"Iterate through the dictionary list and format each record using f-string template alignment with newlines.",explanation:"You can format tabular columns using f-string specifiers like {value:<width} (left-aligned), {value:>width} (right-aligned), and {value:^width} (centered) and append '\\n' at the end of each row.",hint:"Use format specifiers inside f-strings for neat columns.",level:"moderate",codeExample:`students = [{'name': 'Mamata', 'score': 95}, {'name': 'Debangshu', 'score': 92}]
with open('report.txt', 'w') as f:
    f.write(f'{"Name":<15} {"Score":>5}\\n')
    f.write('-'*21 + '\\n')
    for s in students:
        f.write(f'{s["name"]: <15} {s["score"]:>5}\\n')`},{question:"What is the memory-efficient way to write millions of lines to a file with writelines()?",shortAnswer:"Pass a generator expression or generator function to writelines() instead of creating a huge list in RAM.",explanation:"If you construct a list with 10,000,000 strings, Python allocates gigabytes of RAM. Passing a generator expression (f'{i}\\n' for i in range(10_000_000)) produces one string at a time on-demand, keeping RAM usage minimal (O(1) memory overhead).",hint:"Replace square brackets [] with parentheses () for lazy stream evaluation.",level:"expert",codeExample:`# Generates 1,000,000 lines with zero RAM spikes:
with open('big_log.txt', 'w') as f:
    f.writelines(f'Record #{i:07d}: OK\\n' for i in range(1, 1_000_001))`},{question:"How do you handle special characters (such as Bengali or Hindi text, or currency symbols like ₹) when writing files?",shortAnswer:"Always pass encoding='utf-8' explicitly in the open() function.",explanation:"On Windows, Python's default encoding may default to the system locale (such as cp1252 or ANSI). Attempting to write non-ASCII characters like '₹', 'নমস্কার', or emojis without UTF-8 will trigger a UnicodeEncodeError. Specifying encoding='utf-8' guarantees universal compatibility.",hint:"Never rely on the operating system default encoding when opening files.",level:"basic",codeExample:`with open('receipt.txt', 'w', encoding='utf-8') as f:
    f.write('Student: মমতা (Mamata) | Fee: ₹4,500\\n')`},{question:"What is an Atomic Write and why is it considered an industry best practice?",shortAnswer:"Writing to a temporary staging file first and then atomically renaming it over the target file using os.replace().",explanation:"If a server loses power while Python is midway through f.write() on 'config.json', the original file is left corrupted or half-empty. In atomic writing, data is written and synced to a temporary file in the same directory, then os.replace() swaps the files in one atomic OS filesystem operation.",hint:"Consider how to prevent file corruption during sudden server reboots.",level:"expert",codeExample:`import tempfile, os
with tempfile.NamedTemporaryFile('w', dir='.', delete=False) as tf:
    tf.write('New Valid Config')
    tf.flush()
    os.fsync(tf.fileno())
    temp_name = tf.name
os.replace(temp_name, 'config.json')`},{question:"What error is raised if you try to call f.write() on a file opened in read mode ('r')?",shortAnswer:"io.UnsupportedOperation: not writable",explanation:"Opening a file in 'r' mode creates a read-only stream. Attempting to call write() or writelines() on this stream triggers an io.UnsupportedOperation exception indicating that write permissions were not granted.",hint:"Think about the permissions set by the mode flag.",level:"basic",codeExample:`with open('readonly.txt', 'r') as f:
    try:
        f.write('Text')
    except Exception as e:
        print(type(e), e)  # <class 'io.UnsupportedOperation'> not writable`},{question:"What error occurs if you call f.write() after the 'with' block has completed?",shortAnswer:"ValueError: I/O operation on closed file.",explanation:"Once execution leaves the with block, the context manager automatically calls f.close(). Attempting any read, write, or seek operation on a closed file object raises a ValueError.",hint:"Check whether the file handle is still active outside the indented context block.",level:"basic",codeExample:`with open('data.txt', 'w') as f:
    f.write('Line 1\\n')
# File is now closed
try:
    f.write('Line 2\\n')
except ValueError as err:
    print(err)  # I/O operation on closed file.`},{question:"How does the newline parameter in open('file.txt', 'w', newline='') affect newline translation on Windows?",shortAnswer:"It disables Python's universal newline translation, preventing '\\n' from being automatically converted to '\\r\\n'.",explanation:"By default on Windows, Python translates every '\\n' written into CRLF ('\\r\\n') in text mode. Setting newline='' preserves literal '\\n' or ensures modules like the csv writer can manage exact line terminators without inserting extra blank lines.",hint:"Recall why CSV writers on Windows require newline='' to avoid double spacing.",level:"expert",codeExample:`with open('unix_output.txt', 'w', newline='\\n', encoding='utf-8') as f:
    f.write('Line1\\nLine2\\n')  # Guaranteed LF line endings even on Windows`},{question:"How can you write data from a Python dictionary to a JSON file using json.dump()?",shortAnswer:"Open the file in 'w' mode with UTF-8 encoding and call json.dump(data, file, indent=4).",explanation:"json.dump(obj, fp) serializes a Python dictionary or list directly into a writable file stream fp. Passing indent=4 formats the output with pretty-printed indentation.",hint:"Notice the difference between json.dumps (to string) and json.dump (to file stream).",level:"moderate",codeExample:`import json
student = {'name': 'Susmita', 'center': 'Kolkata', 'score': 98}
with open('student.json', 'w', encoding='utf-8') as f:
    json.dump(student, f, indent=4)`},{question:"If you open a file in append mode ('a') and execute f.seek(0), where will f.write('Hello') write the text?",shortAnswer:"It will still append 'Hello' at the end of the file.",explanation:"In standard append mode ('a' or 'a+'), the operating system (specifically POSIX O_APPEND flag or Windows equivalent) forces all write operations to occur at the end of the file, regardless of any preceding seek() calls.",hint:"Append mode overrides the write pointer to always point to EOF during write calls.",level:"expert",codeExample:`with open('log.txt', 'a+') as f:
    f.seek(0)           # Pointer moved to start for READING
    f.write('Appended') # Still written at the END of the file!`},{question:"How can you write multiple lines using the print() function directed to a file?",shortAnswer:"By supplying the file keyword argument: print('Text', file=f).",explanation:"Python's built-in print() function accepts a file keyword argument (defaulting to sys.stdout). Passing an open writable file object directs the printed output to that file, automatically handling string conversion and appending newlines (unless end is customized).",hint:"Check the optional keyword parameters of print().",level:"moderate",codeExample:`with open('output.txt', 'w') as f:
    print('Mamata', 'Barrackpore', 95, sep=' | ', file=f)
    print('Debangshu', 'Jadavpur', 92, sep=' | ', file=f)`},{question:"What is the difference between buffer modes in open(): buffering=0, buffering=1, and buffering=-1?",shortAnswer:"0 = unbuffered (binary only), 1 = line-buffered (text mode only), -1 = system default buffer size (typically 4KB to 8KB).",explanation:"Buffering controls when Python sends data to the operating system. In line-buffered mode (1), writes are flushed automatically whenever a '\\n' is written. In default buffered mode (-1), writes are stored until the internal buffer is full.",hint:"Consider how buffering affects I/O performance vs real-time interactivity.",level:"expert",codeExample:`# Line-buffered writing (flushes on every '\\n'):
with open('live.log', 'w', buffering=1) as f:
    f.write('Immediate log entry\\n')`},{question:"How do you append a list of strings to an existing file without overwriting old lines?",shortAnswer:"Open the file with mode='a' and pass the formatted list to f.writelines().",explanation:"Opening in mode='a' preserves existing lines and positions the pointer at the end. Calling writelines() writes all new items from the list to the end of the file.",hint:"Combine mode='a' with writelines().",level:"basic",codeExample:`new_students = ['Mahima\\n', 'Abhronila\\n']
with open('roster.txt', 'a') as f:
    f.writelines(new_students)`},{question:"Why should you avoid opening and closing a file inside a tight loop when writing thousands of lines?",shortAnswer:"Opening and closing files repeatedly creates massive OS file-system overhead and degrades performance.",explanation:"Each open() and close() call requires OS system calls to resolve paths, check permissions, allocate kernel file descriptors, and flush buffers. Opening the file once outside the loop is hundreds of times faster.",hint:"Keep open() outside the loop, write inside the loop.",level:"moderate",codeExample:`# Slow (Anti-pattern):
# for item in items: with open('file.txt', 'a') as f: f.write(item)

# Fast (Optimal):
with open('file.txt', 'a') as f:
    for item in items:
        f.write(item)`},{question:"How can you write binary data (such as raw bytes or images) to a file in Python?",shortAnswer:"Open the file in binary write mode ('wb') or binary append mode ('ab') and pass bytes objects to write().",explanation:"In binary modes ('wb', 'ab'), write() accepts bytes or bytearray instances rather than strings. Encoding and line-ending translations are completely disabled.",hint:"Notice the 'b' suffix in the mode string.",level:"moderate",codeExample:`data = bytes([0x48, 0x65, 0x6C, 0x6C, 0x6F])  # b'Hello'
with open('binary_data.bin', 'wb') as f:
    f.write(data)`},{question:"What happens if a disk runs out of space while calling file.write()?",shortAnswer:"Python raises an OSError (specifically errno.ENOSPC: No space left on device).",explanation:"When the underlying filesystem runs out of storage space or disk quota, the operating system kernel rejects the write call and Python translates the error into an OSError with error message 'No space left on device'.",hint:"Catch OSError to handle low-level disk exhaustion safely.",level:"expert",codeExample:`try:
    with open('massive_dump.txt', 'w') as f:
        f.write('Data...' * 10_000_000)
except OSError as err:
    print(f'Storage error: {err}')`},{question:"How can you write formatted currency and floating-point values accurately into a report file?",shortAnswer:"Use f-strings with format specifiers such as ₹{amount:,.2f} to include commas and fixed decimal precision.",explanation:"Python's f-string formatting allows embedding localized symbols, thousand grouping commas (,), and decimal precision (.2f) directly inside the string before passing to write().",hint:"Use :,.2f format specifiers.",level:"basic",codeExample:`revenue = 1450250.75
with open('summary.txt', 'w', encoding='utf-8') as f:
    f.write(f'Total Collections: ₹{revenue:,.2f}\\n')
    # Produces: Total Collections: ₹1,450,250.75`},{question:"What is the best practice for building a reusable append-only audit logger in Python?",shortAnswer:"Encapsulate the write in a function that opens in 'a' mode, formats ISO/local timestamps, includes log levels, and flushes critical events.",explanation:"A professional audit logging function accepts the event description, actor, and severity level, appends a structured record with a timestamp to the log file, handles I/O exceptions gracefully, and calls f.flush() on critical errors.",hint:"Combine timestamps, severity tags, append mode, and explicit flushing.",level:"expert",codeExample:`from datetime import datetime
def audit_log(event, user='System', level='INFO'):
    ts = datetime.now().isoformat()
    with open('audit.log', 'a', encoding='utf-8') as f:
        f.write(f'[{ts}] [{level}] User: {user} - {event}\\n')
        if level in ('ERROR', 'CRITICAL'):
            f.flush()`}],_e=`================================================================================\r
PYTHON MASTERCLASS – COMPREHENSIVE STUDY & TUTORIAL GUIDE\r
MODULE 002_008: FILE HANDLING & PERSISTENCE (TEXT, CSV & JSON)\r
TOPIC 10: WRITING FILES: write(), writelines(), APPENDING DATA\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE)\r
================================================================================\r
\r
1. EXECUTIVE SUMMARY & LEARNING OUTCOMES\r
--------------------------------------------------------------------------------\r
This master tutorial provides deep theoretical and hands-on mastery over writing\r
data to persistent storage in Python. Students will master:\r
  • The file.write(string) method and its integer return value (character count).\r
  • The file.writelines(iterable) method, return type None, and newline discipline.\r
  • File modes comparison: 'w' (overwrite) vs 'a' (append) vs 'x' (exclusive create)\r
    vs 'w+' (truncate & read/write) vs 'a+' (append & read).\r
  • Explicit newline management ('\\n') vs automated formatting.\r
  • Python I/O RAM buffering, user-space buffer flushing (file.flush()), and\r
    hardware synchronization (os.fsync()).\r
  • The Atomic File Write pattern (temp staging file + os.replace) for zero-data-loss.\r
  • Common pitfalls: TypeError on numbers, merged lines, unintentional wipes.\r
\r
2. METHOD SIGNATURES, PARAMETERS & RETURN TYPES\r
--------------------------------------------------------------------------------\r
┌───────────────────────────┬─────────────────────┬──────────────┬──────────────────────────────┐\r
│ Method / Operation        │ Input Arguments     │ Return Type  │ Behavior & Gotchas           │\r
├───────────────────────────┼─────────────────────┼──────────────┼──────────────────────────────┤\r
│ file.write(str)           │ Single string (str) │ int (chars)  │ Does NOT append '\\n'.        │\r
│                           │                     │              │ Raises TypeError for non-str │\r
├───────────────────────────┼─────────────────────┼──────────────┼──────────────────────────────┤\r
│ file.writelines(iterable) │ Iterable of strings │ None         │ Does NOT add newlines        │\r
│                           │ (list, generator)   │              │ between items. Returns None  │\r
├───────────────────────────┼─────────────────────┼──────────────┼──────────────────────────────┤\r
│ file.flush()              │ None                │ None         │ Empties Python RAM buffer to │\r
│                           │                     │              │ operating system stream      │\r
├───────────────────────────┼─────────────────────┼──────────────┼──────────────────────────────┤\r
│ os.fsync(file.fileno())   │ File descriptor int │ None         │ Forces OS kernel dirty pages │\r
│                           │                     │              │ to write to physical disk    │\r
└───────────────────────────┴─────────────────────┴──────────────┴──────────────────────────────┘\r
\r
3. FILE OPENING MODES MATRIX\r
--------------------------------------------------------------------------------\r
Mode  | Creates File? | Truncates Existing? | Pointer Start | Read Allowed? | Write Allowed?\r
──────┼───────────────┼─────────────────────┼───────────────┼───────────────┼───────────────\r
'w'   | Yes           | YES (Wipes to 0B)   | Beginning (0) | No            | Yes\r
'a'   | Yes           | NO (Preserves data) | End of File   | No            | Yes (Append)\r
'x'   | Yes           | Error if exists!    | Beginning (0) | No            | Yes (Exclusive)\r
'w+'  | Yes           | YES (Wipes to 0B)   | Beginning (0) | Yes           | Yes\r
'a+'  | Yes           | NO (Preserves data) | End of File   | Yes (seek)    | Yes (Append)\r
'r+'  | No (Error)    | NO (Overwrites pos) | Beginning (0) | Yes           | Yes\r
\r
4. PRODUCTION PYTHON IMPLEMENTATIONS\r
--------------------------------------------------------------------------------\r
\r
--- EXAMPLE 1: write() Basics & Character Counting ---\r
\`\`\`python\r
with open("student_welcome.txt", mode="w", encoding="utf-8") as f:\r
    f.write("=== CODER & ACCOTAX ADMISSIONS ===\\n")\r
    name = "Mamata"\r
    center = "Barrackpore"\r
    fee = 4500\r
    # Must convert integer fee to string\r
    chars = f.write(f"Student: {name:<10} | Center: {center:<12} | Fee: ₹{fee:,}\\n")\r
    print(f"Wrote {chars} characters.")\r
\`\`\`\r
\r
--- EXAMPLE 2: Batch Writing with writelines() & Generator ---\r
\`\`\`python\r
students = ["Mamata", "Debangshu", "Susmita", "Mahima"]\r
# Format list with explicit newlines\r
lines = [f"Student: {name} (Coder & AccoTax)\\n" for name in students]\r
\r
with open("merit_list.txt", mode="w", encoding="utf-8") as f:\r
    f.writelines(lines)\r
    # Memory efficient generator stream for huge datasets:\r
    f.writelines(f"Audit #{i:04d} Passed\\n" for i in range(1, 1001))\r
\`\`\`\r
\r
--- EXAMPLE 3: Append Mode ('a') for Audit Trails ---\r
\`\`\`python\r
from datetime import datetime\r
\r
def record_transaction(student, amount, center="Barrackpore"):\r
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")\r
    with open("fee_audit.log", mode="a", encoding="utf-8") as f:\r
        f.write(f"[{timestamp}] [FEE_PAYMENT] {student} ({center}): ₹{amount:,}\\n")\r
\`\`\`\r
\r
--- EXAMPLE 4: Buffering & Immediate Flushing ---\r
\`\`\`python\r
import time\r
\r
with open("telemetry.log", mode="w", encoding="utf-8") as f:\r
    f.write("Sensor Online\\n")\r
    f.flush()  # Immediately visible to other processes without closing\r
    # ... long running daemon loop ...\r
\`\`\`\r
\r
--- EXAMPLE 5: Safe Atomic File Writing Pattern ---\r
\`\`\`python\r
import tempfile, os\r
\r
def atomic_write(target_path, data):\r
    dir_name = os.path.dirname(target_path) or "."\r
    with tempfile.NamedTemporaryFile("w", encoding="utf-8", dir=dir_name, delete=False) as tf:\r
        tf.write(data)\r
        tf.flush()\r
        os.fsync(tf.fileno())\r
        temp_name = tf.name\r
    os.replace(temp_name, target_path)  # Atomic filesystem replacement\r
\`\`\`\r
\r
5. REGIONAL WEST BENGAL INDUSTRY CASE STUDIES\r
--------------------------------------------------------------------------------\r
1. Barrackpore Coaching Automation:\r
   Mamata developed an automated student fees ledger. Using append mode ('a'),\r
   each student payment (₹4,500 - ₹6,000) is appended with an exact ISO timestamp,\r
   guaranteeing historical financial integrity.\r
\r
2. Jadavpur University IoT Environmental Sensor Network:\r
   Debangshu built a Python telemetry ingestion service logging air quality and\r
   temperature sensors. By using file.flush() on each reading, downstream dashboard\r
   monitors view real-time data with sub-second latency.\r
\r
3. Kolkata E-Commerce Logistics Hub:\r
   Susmita created batch parcel dispatch manifest generation using writelines()\r
   with generator expressions, streaming 50,000 delivery records per batch with\r
   less than 12MB of RAM footprint.\r
\r
4. Ichapur Metal Works Production Counter:\r
   Mahima implemented machine telemetry logging using atomic file updates, ensuring\r
   factory power cuts never leave corrupted or 0-byte shift logs.\r
\r
6. COMMON BEGINNER PITFALLS & SOLUTIONS\r
--------------------------------------------------------------------------------\r
❌ Pitfall 1: Forgetting '\\n' in write()\r
   f.write("Mamata")\r
   f.write("Barrackpore")\r
   -> Produces "MamataBarrackpore" on one line!\r
   ✓ Fix: Always include f.write("Mamata\\n").\r
\r
❌ Pitfall 2: Passing non-strings to write()\r
   f.write(4500)\r
   -> Raises TypeError: write() argument must be str, not int.\r
   ✓ Fix: f.write(f"₹{4500}\\n") or f.write(str(4500) + "\\n").\r
\r
❌ Pitfall 3: Assuming writelines() adds newlines\r
   f.writelines(["Mamata", "Debangshu"])\r
   -> Produces "MamataDebangshu".\r
   ✓ Fix: f.writelines([f"{item}\\n" for item in items]).\r
\r
❌ Pitfall 4: Unintentionally using 'w' instead of 'a'\r
   Opening an audit log with 'w' destroys all historical logs!\r
   ✓ Fix: Always use mode='a' for logs and cumulative records.\r
\r
❌ Pitfall 5: Leaving file unclosed or missing 'with' statement\r
   If power fails or exception occurs, buffered data in RAM is permanently lost.\r
   ✓ Fix: Always use 'with open(...) as f:' and f.flush() for critical logs.\r
\r
7. STUDENT MINI CHECKLIST (REMEMBER FOR EXAMS & INTERVIEWS)\r
--------------------------------------------------------------------------------\r
 [ ] write(s) returns character count; writelines(seq) returns None.\r
 [ ] Neither write() nor writelines() inserts newlines automatically.\r
 [ ] Mode 'w' wipes existing file immediately; mode 'a' preserves and appends to end.\r
 [ ] Mode 'x' protects against overwriting by raising FileExistsError if file exists.\r
 [ ] Always specify encoding="utf-8" for universal currency (₹) and character safety.\r
 [ ] Use file.flush() and os.fsync() when crash resilience and real-time viewing matter.\r
 [ ] Use atomic writes (temp file + os.replace) for critical configuration files.\r
================================================================================`,Se=`"""\r
================================================================================\r
10 SIMPLE FILE WRITING EXAMPLES IN PYTHON\r
Module: 002_008_file-handling (File Handling & Persistence)\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
================================================================================\r
"""\r
\r
# ==============================================================================\r
# EXAMPLE 1: Write a Single Line to a Fresh File\r
# ==============================================================================\r
def example_1_single_line():\r
    """Simple write of a single text string."""\r
    with open("example1_hello.txt", "w", encoding="utf-8") as f:\r
        f.write("Hello World! Welcome to Python File Handling at Barrackpore.\\n")\r
    print("[Ex 1] File 'example1_hello.txt' created with 1 line.")\r
\r
\r
# ==============================================================================\r
# EXAMPLE 2: Write Multiple Lines using write() and Explicit '\\n'\r
# ==============================================================================\r
def example_2_multiple_lines():\r
    """Writing multiple consecutive lines with explicit newline breaks."""\r
    with open("example2_students.txt", "w", encoding="utf-8") as f:\r
        f.write("Student 1: Mamata (Barrackpore)\\n")\r
        f.write("Student 2: Debangshu (Jadavpur)\\n")\r
        f.write("Student 3: Susmita (Kolkata)\\n")\r
    print("[Ex 2] File 'example2_students.txt' written with 3 lines.")\r
\r
\r
# ==============================================================================\r
# EXAMPLE 3: Writing Numbers and Variables using f-strings\r
# ==============================================================================\r
def example_3_numbers_and_fstrings():\r
    """Converting integer and float values to strings before writing."""\r
    student_name = "Mahima"\r
    roll_number = 104\r
    fee_paid = 5500\r
    marks_percentage = 95.5\r
\r
    with open("example3_receipt.txt", "w", encoding="utf-8") as f:\r
        # NOTICE: f.write(fee_paid) directly raises TypeError!\r
        # Always format numbers inside strings:\r
        f.write(f"Roll No: {roll_number}\\n")\r
        f.write(f"Student: {student_name}\\n")\r
        f.write(f"Fee Paid: ₹{fee_paid:,}\\n")\r
        f.write(f"Score: {marks_percentage}%\\n")\r
    print("[Ex 3] Number formatting receipt generated.")\r
\r
\r
# ==============================================================================\r
# EXAMPLE 4: Append Mode ('a') - Adding Records without Overwriting\r
# ==============================================================================\r
def example_4_append_mode():\r
    """Preserves existing data and appends new lines to the end."""\r
    # Step 1: Create initial file\r
    with open("example4_attendance.txt", "w", encoding="utf-8") as f:\r
        f.write("=== DAILY BATCH ATTENDANCE ===\\n")\r
        f.write("[09:00 AM] Mamata: Present\\n")\r
\r
    # Step 2: Later in the day, append new entries using mode='a'\r
    with open("example4_attendance.txt", "a", encoding="utf-8") as f:\r
        f.write("[09:05 AM] Debangshu: Present\\n")\r
        f.write("[09:10 AM] Susmita: Present\\n")\r
    print("[Ex 4] Attendance log appended without wiping initial line.")\r
\r
\r
# ==============================================================================\r
# EXAMPLE 5: Write a List of Strings using writelines()\r
# ==============================================================================\r
def example_5_writelines_list():\r
    """Writing a pre-formatted Python list of lines at once."""\r
    batch_students = [\r
        "1. Mamata - Python Masterclass\\n",\r
        "2. Debangshu - Data Science\\n",\r
        "3. Susmita - Web Development\\n",\r
        "4. Abhronila - Machine Learning\\n"\r
    ]\r
    with open("example5_roster.txt", "w", encoding="utf-8") as f:\r
        f.writelines(batch_students)\r
    print("[Ex 5] List written with writelines().")\r
\r
\r
# ==============================================================================\r
# EXAMPLE 6: Writing a Multiline Docstring / Paragraph in One Call\r
# ==============================================================================\r
def example_6_multiline_docstring():\r
    """Writing a multiline block of text directly with triple quotes."""\r
    notice = """--------------------------------------------------\r
CODER & ACCOTAX NOTICE BOARD (BARRACKPORE)\r
Topic: Python File Handling Examination\r
Date: Saturday, 10:00 AM\r
Venue: Lab 1 & Lab 2\r
--------------------------------------------------\r
"""\r
    with open("example6_notice.txt", "w", encoding="utf-8") as f:\r
        f.write(notice)\r
    print("[Ex 6] Multiline notice written in a single f.write() call.")\r
\r
\r
# ==============================================================================\r
# EXAMPLE 7: Capturing Return Value of write() (Character Count)\r
# ==============================================================================\r
def example_7_character_count_return():\r
    """write() returns the exact integer count of characters written."""\r
    with open("example7_char_count.txt", "w", encoding="utf-8") as f:\r
        count1 = f.write("Coder & AccoTax\\n")\r
        count2 = f.write("Barrackpore Hub\\n")\r
        total = count1 + count2\r
        print(f"[Ex 7] Line 1 chars: {count1} | Line 2 chars: {count2} | Total: {total}")\r
\r
\r
# ==============================================================================\r
# EXAMPLE 8: Writing User Input Directly to a File\r
# ==============================================================================\r
def example_8_user_input_mock():\r
    """Simulating interactive user input writing to a personal diary."""\r
    user_note = "Today we mastered file modes 'w', 'a', and 'x' in Python class."\r
    author = "Susmita"\r
\r
    with open("example8_my_diary.txt", "w", encoding="utf-8") as f:\r
        f.write(f"Author: {author}\\n")\r
        f.write(f"Entry: {user_note}\\n")\r
    print("[Ex 8] Student diary entry saved.")\r
\r
\r
# ==============================================================================\r
# EXAMPLE 9: Using print() with file= Parameter\r
# ==============================================================================\r
def example_9_print_to_file():\r
    """Using Python's print() function directly to write into a file."""\r
    with open("example9_print_output.txt", "w", encoding="utf-8") as f:\r
        # print() automatically handles string conversion and adds '\\n'\r
        print("Student ID", "Name", "Center", sep=" | ", file=f)\r
        print("101", "Mamata", "Barrackpore", sep=" | ", file=f)\r
        print("102", "Debangshu", "Jadavpur", sep=" | ", file=f)\r
    print("[Ex 9] File written using print(..., file=f).")\r
\r
\r
# ==============================================================================\r
# EXAMPLE 10: Generating a Clean Tabular Report Card\r
# ==============================================================================\r
def example_10_tabular_report_card():\r
    """Writing structured columnar tabular text using string formatting."""\r
    marks_data = [\r
        {"name": "Mamata", "theory": 95, "practical": 98},\r
        {"name": "Debangshu", "theory": 92, "practical": 94},\r
        {"name": "Susmita", "theory": 88, "practical": 96}\r
    ]\r
\r
    with open("example10_report_card.txt", "w", encoding="utf-8") as f:\r
        f.write("=" * 45 + "\\n")\r
        f.write(f"{'STUDENT PERFORMANCE REPORT':^45}\\n")\r
        f.write("=" * 45 + "\\n")\r
        f.write(f"{'Name':<12} {'Theory':>8} {'Practical':>10} {'Total':>8}\\n")\r
        f.write("-" * 45 + "\\n")\r
\r
        for item in marks_data:\r
            total = item["theory"] + item["practical"]\r
            f.write(f"{item['name']:<12} {item['theory']:>8} {item['practical']:>10} {total:>8}\\n")\r
\r
        f.write("=" * 45 + "\\n")\r
    print("[Ex 10] Formatted tabular report card generated.")\r
\r
\r
if __name__ == "__main__":\r
    print("Executing all 10 simple file writing examples...\\n")\r
    example_1_single_line()\r
    example_2_multiple_lines()\r
    example_3_numbers_and_fstrings()\r
    example_4_append_mode()\r
    example_5_writelines_list()\r
    example_6_multiline_docstring()\r
    example_7_character_count_return()\r
    example_8_user_input_mock()\r
    example_9_print_to_file()\r
    example_10_tabular_report_card()\r
    print("\\nAll 10 examples completed successfully!")\r
`,Ee=`"""\r
================================================================================\r
Topic 10 - Example 1: write() Basics & Character Counting\r
Module: 002_008_file-handling (File Handling & Persistence)\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
================================================================================\r
\r
Core Concepts Demonstrated:\r
1. Opening a file in 'w' mode (Creates a new file or overwrites existing content).\r
2. Explicit '\\\\n' newline management (f.write does NOT add newlines automatically).\r
3. Capturing the integer character count returned by f.write().\r
4. Converting numbers to strings using f-strings before writing.\r
"""\r
\r
def simple_write_basics_demo():\r
    filename = "student_records.txt"\r
    \r
    print(f"[*] Step 1: Opening '{filename}' in write mode ('w')...")\r
    \r
    # Using 'with open' guarantees the file is automatically saved & closed\r
    with open(filename, mode="w", encoding="utf-8") as f:\r
        \r
        # 1. Write the title line and capture character count\r
        count1 = f.write("=== CODER & ACCOTAX - BARRACKPORE ===\\n")\r
        print(f"    Line 1 written -> {count1} characters")\r
        \r
        # 2. Write student records with explicit '\\n'\r
        # Notice: fee must be converted to string (f-strings handle this smoothly)\r
        student_name = "Mamata"\r
        course = "Python Masterclass"\r
        fee_paid = 4500\r
        \r
        line_student1 = f"Student: {student_name} | Course: {course} | Fee: Rs.{fee_paid}\\n"\r
        count2 = f.write(line_student1)\r
        print(f"    Line 2 written -> {count2} characters")\r
        \r
        # 3. Write another student line\r
        line_student2 = "Student: Debangshu | Course: Data Science | Fee: Rs.5200\\n"\r
        count3 = f.write(line_student2)\r
        print(f"    Line 3 written -> {count3} characters")\r
        \r
        # Total characters calculated from return values\r
        total_chars_written = count1 + count2 + count3\r
        print(f"\\n[OK] Total characters written to stream: {total_chars_written}")\r
\r
    # Step 2: Read back from the disk to verify what was saved\r
    print(f"\\n[*] Step 2: Reading back '{filename}' to verify file on disk:")\r
    print("-" * 50)\r
    with open(filename, mode="r", encoding="utf-8") as f:\r
        saved_content = f.read()\r
        print(saved_content, end="")\r
    print("-" * 50)\r
\r
\r
if __name__ == "__main__":\r
    simple_write_basics_demo()\r
`,ke=`"""\r
Topic 10 - Example 2: Batch Writing with writelines() & Generator Expressions\r
Module: 002_008_file-handling\r
Institute: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
\r
Key Concepts Covered:\r
1. file.writelines(iterable) takes any iterable of strings (list, tuple, generator).\r
2. writelines() returns None (unlike write() which returns character count).\r
3. The "No Automatic Newline" Gotcha: writelines() does NOT add '\\n' between items!\r
4. Using List Comprehensions and Generator Expressions to format lines efficiently.\r
5. Memory efficiency: writing large collections with generators vs storing all in RAM.\r
"""\r
\r
def batch_write_student_roster():\r
    filename = "kolkata_batch_roster.txt"\r
    \r
    # Raw data lists\r
    student_names = ["Mamata", "Debangshu", "Susmita", "Mahima", "Abhronila"]\r
    centers = ["Barrackpore", "Jadavpur", "Kolkata", "Ichapur", "Shyamnagar"]\r
    grades = ["Grade A+", "Grade A+", "Grade A", "Grade A+", "Grade A"]\r
    \r
    print(f"[*] Preparing batch writing with writelines() to '{filename}'...")\r
    \r
    # -------------------------------------------------------------\r
    # 1. THE COMMON MISTAKE: Passing raw list without newlines\r
    # If we pass ["Mamata", "Debangshu", "Susmita"], it writes: "MamataDebangshuSusmita"\r
    # -------------------------------------------------------------\r
    \r
    # CORRECT WAY 1: Pre-formatting lines using List Comprehension with '\\n'\r
    formatted_lines = [\r
        f"ID: 2026-WB-{i+1:03d} | Student: {name:<12} | Hub: {center:<12} | Result: {grade}\\n"\r
        for i, (name, center, grade) in enumerate(zip(student_names, centers, grades))\r
    ]\r
    \r
    # Writing to file using writelines()\r
    with open(filename, mode="w", encoding="utf-8") as file:\r
        file.write("=== CODER & ACCOTAX - BATCH MERIT ROSTER ===\\n\\n")\r
        \r
        # writelines() writes all items in sequence in a single call\r
        result = file.writelines(formatted_lines)\r
        print(f"    [+] writelines() executed. Return value: {result} (Always None in Python)")\r
        \r
        file.write("\\n=== Additional Generated Notes ===\\n")\r
        \r
        # CORRECT WAY 2: Using a Memory-Efficient Generator Expression\r
        # Perfect for writing thousands of rows without allocating huge intermediate lists in memory!\r
        def log_generator(count):\r
            for n in range(1, count + 1):\r
                yield f"[AUDIT LOG {n}] Verified student record #{n} at {centers[(n-1)%len(centers)]}\\n"\r
                \r
        file.writelines(log_generator(5))\r
\r
    print(f"\\n[✓] Roster written successfully to '{filename}'!")\r
    \r
    # Verification\r
    print("\\n--- Reading Created File ---")\r
    with open(filename, mode="r", encoding="utf-8") as file:\r
        print(file.read())\r
\r
if __name__ == "__main__":\r
    batch_write_student_roster()\r
`,Ae=`"""\r
Topic 10 - Example 3: Append Mode ('a') for Real-Time Event & Transaction Logging\r
Module: 002_008_file-handling\r
Institute: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
\r
Key Concepts Covered:\r
1. Append mode ('a') creates the file if it does not exist.\r
2. If the file exists, the pointer is automatically placed at EOF (End of File).\r
3. Previous content is strictly preserved; new data is appended at the end.\r
4. Using datetime timestamps for real-world audit trails and fee transactions.\r
5. Contrast with 'w' mode (which would wipe out historical audit logs).\r
"""\r
\r
from datetime import datetime\r
import time\r
\r
def log_fee_transaction(student_name, center, amount, payment_mode, log_file="fee_audit_trail.log"):\r
    """\r
    Appends a new student fee transaction record to the audit log.\r
    Preserves all previous records across multiple function invocations.\r
    """\r
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")\r
    \r
    # Notice mode='a' (append)\r
    with open(log_file, mode="a", encoding="utf-8") as file:\r
        log_entry = f"[{timestamp}] [TXN-SUCCESS] Student: {student_name:<10} | Center: {center:<12} | Paid: ₹{amount:>6,d} | Mode: {payment_mode}\\n"\r
        file.write(log_entry)\r
        print(f"    [+] Appended transaction for {student_name} (₹{amount})")\r
\r
def run_simulation():\r
    logfile = "fee_audit_trail.log"\r
    \r
    # If starting fresh for simulation, write header once\r
    with open(logfile, mode="w", encoding="utf-8") as file:\r
        file.write("================================================================================\\n")\r
        file.write("        CODER & ACCOTAX BARRACKPORE - REAL-TIME FEE AUDIT TRANSACTION LOG       \\n")\r
        file.write("================================================================================\\n")\r
    \r
    print(f"[*] Simulating real-time transactions logging in mode 'a' to '{logfile}'...\\n")\r
    \r
    # Simulation: Multiple transactions happening over time\r
    transactions = [\r
        ("Mamata", "Barrackpore", 4500, "UPI / PhonePe"),\r
        ("Debangshu", "Jadavpur", 5000, "Net Banking"),\r
        ("Susmita", "Kolkata", 6000, "Credit Card"),\r
        ("Mahima", "Ichapur", 4500, "UPI / GPay"),\r
        ("Abhronila", "Barrackpore", 5500, "Cash Counter")\r
    ]\r
    \r
    for student, hub, amt, mode in transactions:\r
        log_fee_transaction(student, hub, amt, mode, logfile)\r
        # Small delay to showcase time progression in log\r
        time.sleep(0.01)\r
        \r
    print(f"\\n[✓] All transactions logged safely without overwriting previous entries!")\r
    \r
    # Read and display the entire appended log file\r
    print("\\n--- Final Persisted Log File ---")\r
    with open(logfile, mode="r", encoding="utf-8") as file:\r
        print(file.read())\r
\r
if __name__ == "__main__":\r
    run_simulation()\r
`,Ce=`"""\r
Topic 10 - Example 4: Building Structured Tabular & CSV Reports using write()\r
Module: 002_008_file-handling\r
Institute: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
\r
Key Concepts Covered:\r
1. Writing delimiter-separated files (CSV format) directly using write().\r
2. Writing formatted text report cards with column alignment and summary totals.\r
3. Calculating running totals, averages, and highest scores during file generation.\r
4. Escaping strings containing commas or special characters.\r
"""\r
\r
def generate_csv_and_text_report():\r
    csv_file = "student_performance_2026.csv"\r
    report_file = "student_report_card.txt"\r
    \r
    data = [\r
        {"id": 101, "name": "Mamata", "center": "Barrackpore", "theory": 95, "practical": 98},\r
        {"id": 102, "name": "Debangshu", "center": "Jadavpur", "theory": 92, "practical": 94},\r
        {"id": 103, "name": "Susmita", "center": "Kolkata", "theory": 88, "practical": 96},\r
        {"id": 104, "name": "Mahima", "center": "Ichapur", "theory": 96, "practical": 95},\r
        {"id": 105, "name": "Abhronila", "center": "Barrackpore", "theory": 90, "practical": 92}\r
    ]\r
    \r
    # 1. Generating Raw CSV File\r
    print(f"[*] Generating Comma-Separated Values (CSV) to '{csv_file}'...")\r
    with open(csv_file, mode="w", encoding="utf-8") as f_csv:\r
        # Write CSV Header\r
        f_csv.write("StudentID,StudentName,Center,TheoryMarks,PracticalMarks,TotalMarks,Percentage\\n")\r
        \r
        for student in data:\r
            total = student["theory"] + student["practical"]\r
            percentage = total / 2.0\r
            # Comma-separated row\r
            row = f"{student['id']},{student['name']},{student['center']},{student['theory']},{student['practical']},{total},{percentage:.1f}%\\n"\r
            f_csv.write(row)\r
            \r
    print(f"[✓] CSV exported successfully!")\r
    \r
    # 2. Generating Formatted Text Report Card\r
    print(f"\\n[*] Generating Formatted Text Report Card to '{report_file}'...")\r
    with open(report_file, mode="w", encoding="utf-8") as f_txt:\r
        f_txt.write("+" + "-"*76 + "+\\n")\r
        f_txt.write(f"|{'CODER & ACCOTAX - ANNUAL PYTHON EXAMINATION REPORT CARD':^76}|\\n")\r
        f_txt.write(f"|{'Center: Barrackpore & Kolkata Regional Hubs':^76}|\\n")\r
        f_txt.write("+" + "-"*76 + "+\\n")\r
        f_txt.write(f"| {'ID':<4} | {'Name':<12} | {'Center':<12} | {'Theory':<8} | {'Practical':<9} | {'Total':<6} | {'%':<6} |\\n")\r
        f_txt.write("+" + "-"*76 + "+\\n")\r
        \r
        grand_total = 0\r
        total_students = len(data)\r
        \r
        for student in data:\r
            total = student["theory"] + student["practical"]\r
            pct = total / 2.0\r
            grand_total += total\r
            f_txt.write(f"| {student['id']:<4} | {student['name']:<12} | {student['center']:<12} | {student['theory']:>8} | {student['practical']:>9} | {total:>6} | {pct:>5.1f}% |\\n")\r
            \r
        f_txt.write("+" + "-"*76 + "+\\n")\r
        batch_avg = grand_total / (total_students * 2.0)\r
        f_txt.write(f"| {'BATCH SUMMARY: Total Students: ' + str(total_students):<46} | {'Avg %: ' + f'{batch_avg:.2f}%':>27} |\\n")\r
        f_txt.write("+" + "-"*76 + "+\\n")\r
        \r
    print(f"[✓] Text Report Card generated!")\r
    \r
    # Verification\r
    print("\\n--- Displaying Formatted Report Card ---")\r
    with open(report_file, mode="r", encoding="utf-8") as f:\r
        print(f.read())\r
\r
if __name__ == "__main__":\r
    generate_csv_and_text_report()\r
`,Te=`"""\r
Topic 10 - Example 5: Python I/O Buffering, file.flush(), and Crash Resilience\r
Module: 002_008_file-handling\r
Institute: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
\r
Key Concepts Covered:\r
1. Python buffers file writes in RAM before committing to physical disk.\r
2. file.flush() forces buffered user-space data to be passed to the OS kernel.\r
3. os.fsync(file.fileno()) forces the OS kernel to flush dirty pages to physical drive.\r
4. Why long-running servers and background telemetry daemons need periodic flushing.\r
5. What happens if a process crashes before buffer is flushed.\r
"""\r
\r
import os\r
import time\r
\r
def simulate_realtime_iot_telemetry():\r
    filename = "jadavpur_sensor_telemetry.log"\r
    \r
    print(f"[*] Simulating real-time sensor logging to '{filename}' with .flush()...")\r
    \r
    with open(filename, mode="w", encoding="utf-8") as file:\r
        file.write("--- JADAVPUR UNIVERSITY IOT TELEMETRY FEED ---\\n")\r
        # Flush the header immediately\r
        file.flush()\r
        \r
        sensor_readings = [\r
            {"sensor": "TEMP_BKP_01", "val": 28.4, "unit": "°C"},\r
            {"sensor": "HUMID_BKP_01", "val": 74.2, "unit": "%"},\r
            {"sensor": "AIR_KOL_02", "val": 142.0, "unit": "AQI"},\r
            {"sensor": "TEMP_JAD_03", "val": 29.1, "unit": "°C"},\r
            {"sensor": "SOLAR_ICH_04", "val": 845.0, "unit": "W/m²"}\r
        ]\r
        \r
        for reading in sensor_readings:\r
            timestamp = time.strftime("%H:%M:%S")\r
            line = f"[{timestamp}] Sensor: {reading['sensor']} | Value: {reading['val']} {reading['unit']}\\n"\r
            file.write(line)\r
            \r
            # CRUCIAL STEP IN CRITICAL LOGGING:\r
            # Without file.flush(), data stays in RAM buffer until buffer fills (usually 4KB / 8KB)\r
            # or until the file is closed.\r
            # file.flush() ensures anyone reading the file concurrently sees the latest data immediately!\r
            file.flush()\r
            \r
            # Optional: Guarantee hardware-level write (used in banking / medical systems)\r
            os.fsync(file.fileno())\r
            \r
            print(f"    [+] Logged & flushed: {reading['sensor']} ({reading['val']} {reading['unit']})")\r
            time.sleep(0.01)\r
            \r
    print(f"\\n[✓] Telemetry logging session finished. File safely closed.")\r
    \r
    # Verify file size on disk\r
    size_on_disk = os.path.getsize(filename)\r
    print(f"[*] Total file size on disk: {size_on_disk} bytes")\r
\r
if __name__ == "__main__":\r
    simulate_realtime_iot_telemetry()\r
`,Me=`"""\r
Topic 10 - Example 6: Safe Atomic File Writing Pattern (Industry Standard)\r
Module: 002_008_file-handling\r
Institute: Coder & AccoTax, Barrackpore\r
Instructor: Sukanta Hui\r
\r
Key Concepts Covered:\r
1. The Danger of Direct 'w' mode: If the program crashes or loses power midway,\r
   the original file is already destroyed and left half-written or empty (0 bytes).\r
2. The Solution - Atomic Writing:\r
   Step 1: Write new content to a temporary file in the same directory.\r
   Step 2: Flush and sync data to disk.\r
   Step 3: Atomically rename/replace the temporary file over the target file using os.replace().\r
3. In POSIX and Windows NT, os.replace() is an atomic filesystem operation.\r
"""\r
\r
import os\r
import tempfile\r
\r
def safe_atomic_file_update(target_filepath, new_content):\r
    """\r
    Safely writes new_content to target_filepath without risk of corruption.\r
    Even if the computer powers off midway, either the old version stays intact\r
    or the new version is completely written.\r
    """\r
    directory = os.path.dirname(target_filepath) or "."\r
    \r
    # 1. Create a secure temporary file in the same directory/partition\r
    with tempfile.NamedTemporaryFile(mode="w", encoding="utf-8", dir=directory, delete=False) as temp_f:\r
        temp_filepath = temp_f.name\r
        print(f"    [Step 1] Writing to temporary staging file: {os.path.basename(temp_filepath)}")\r
        \r
        # Write content and ensure it is flushed to physical storage\r
        temp_f.write(new_content)\r
        temp_f.flush()\r
        os.fsync(temp_f.fileno())\r
\r
    # 2. Atomically swap the temporary file with the target file\r
    print(f"    [Step 2] Atomically swapping '{os.path.basename(temp_filepath)}' -> '{target_filepath}'")\r
    os.replace(temp_filepath, target_filepath)\r
    print(f"    [Step 3] Atomic swap successful! File is 100% consistent.")\r
\r
def run_atomic_demo():\r
    config_file = "app_system_config.ini"\r
    \r
    # Initial Configuration\r
    initial_config = """[SystemSettings]\r
Institute = Coder & AccoTax\r
Location = Barrackpore, West Bengal\r
ActiveBatch = 2026_Python_Masterclass\r
MaxStudentsPerBatch = 35\r
BackupIntervalSeconds = 300\r
"""\r
    print(f"[*] Creating initial configuration file: '{config_file}'...")\r
    with open(config_file, mode="w", encoding="utf-8") as f:\r
        f.write(initial_config)\r
        \r
    print("\\n--- Initial Config Content ---")\r
    with open(config_file, mode="r", encoding="utf-8") as f:\r
        print(f.read())\r
        \r
    # Updated Configuration to be written safely\r
    updated_config = """[SystemSettings]\r
Institute = Coder & AccoTax\r
Location = Barrackpore & Kolkata Hubs\r
ActiveBatch = 2026_Python_Masterclass\r
MaxStudentsPerBatch = 50\r
BackupIntervalSeconds = 120\r
MaintenanceMode = False\r
"""\r
    print("[*] Performing Safe Atomic Update on System Config...")\r
    safe_atomic_file_update(config_file, updated_config)\r
    \r
    print("\\n--- Verified Updated Config Content ---")\r
    with open(config_file, mode="r", encoding="utf-8") as f:\r
        print(f.read())\r
\r
if __name__ == "__main__":\r
    run_atomic_demo()\r
`,Le=()=>{const[R,z]=s.useState(1),[X,O]=s.useState(!1),[c,j]=s.useState("write"),[f,$]=s.useState("Mamata"),[p,J]=s.useState(!0),[S,Q]=s.useState(!1),[E,k]=s.useState(["=== CODER & ACCOTAX - BARRACKPORE HUB ===","Student Admissions & Fees Ledger 2026"]),[W,A]=s.useState(null),[F,C]=s.useState(null),[h,Z]=s.useState(["Mamata","Debangshu","Susmita"]),[u,ee]=s.useState(!1),[D,te]=s.useState(!1),[B,ne]=s.useState(""),[L,se]=s.useState(!1),[o,re]=s.useState("a"),[T,g]=s.useState(!0),[M,w]=s.useState(`[2026-10-02 09:00:00] [AUDIT] System started at Barrackpore
[2026-10-02 09:15:20] [PAYMENT] Mamata: ₹4,500
[2026-10-02 09:30:10] [PAYMENT] Debangshu: ₹5,200
`),[U,b]=s.useState([]),[H,N]=s.useState(null),[i,v]=s.useState([]),[ae,q]=s.useState(["Initial server boot log record (Persisted on disk)"]),[_]=s.useState(4),[K,G]=s.useState(!1),[Y,ie]=s.useState("ex1"),P=s.useRef([]);s.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(r=>{r.isIntersecting&&r.target.classList.add("is-visible")})},{threshold:.1});return P.current.forEach(n=>{n&&t.observe(n)}),()=>t.disconnect()},[]);const a=t=>{t&&!P.current.includes(t)&&P.current.push(t)},l={Mamata:{center:"Barrackpore",course:"Python Masterclass",fee:4500,score:96},Debangshu:{center:"Jadavpur",course:"Data Analytics",fee:5200,score:94},Susmita:{center:"Kolkata",course:"Full Stack Python",fee:6e3,score:98},Mahima:{center:"Ichapur",course:"Python & ML",fee:5500,score:95},Abhronila:{center:"Barrackpore",course:"Django Services",fee:5800,score:92}},I=[{num:1,title:"Write a Single Line of Text",badge:"Basic Write",desc:"Opening a file in write mode ('w') and writing a single line of greeting text with UTF-8 encoding.",code:`# Example 1: Write a single line of text
with open("hello.txt", "w", encoding="utf-8") as f:
    f.write("Hello World! Welcome to Coder & AccoTax Barrackpore.\\n")

print("File 'hello.txt' created successfully with 1 line.")`,output:"Hello World! Welcome to Coder & AccoTax Barrackpore.",keyTakeaway:"The 'w' mode creates 'hello.txt' if missing, or wipes it to 0 bytes if it already exists."},{num:2,title:"Write Multiple Lines with '\\n'",badge:"Multiple Lines",desc:"Calling f.write() multiple times to write separate lines on disk with explicit newline breaks.",code:`# Example 2: Write multiple consecutive lines
with open("students.txt", "w", encoding="utf-8") as f:
    f.write("Student 1: Mamata (Barrackpore)\\n")
    f.write("Student 2: Debangshu (Jadavpur)\\n")
    f.write("Student 3: Susmita (Kolkata)\\n")

print("Wrote 3 student records to 'students.txt'.")`,output:`Student 1: Mamata (Barrackpore)
Student 2: Debangshu (Jadavpur)
Student 3: Susmita (Kolkata)`,keyTakeaway:"Unlike print(), f.write() does NOT add newlines automatically. You must add '\\n' explicitly."},{num:3,title:"Writing Numbers using f-Strings",badge:"Type Conversion",desc:"Converting numeric integers and floats into strings before writing to prevent TypeError exceptions.",code:`# Example 3: Write numbers & formatted variables
student_name = "Mahima"
roll_no = 104
fee_paid = 5500
score = 95.5

with open("receipt.txt", "w", encoding="utf-8") as f:
    # Notice: f.write(fee_paid) raises TypeError! Must format inside string:
    f.write(f"Roll No: {roll_no}\\n")
    f.write(f"Student: {student_name}\\n")
    f.write(f"Fee Paid: ₹{fee_paid:,}\\n")
    f.write(f"Score: {score}%\\n")`,output:`Roll No: 104
Student: Mahima
Fee Paid: ₹5,500
Score: 95.5%`,keyTakeaway:"f.write(str) strictly expects string objects. Always wrap numeric data inside f-strings or str()."},{num:4,title:"Append Mode ('a') — Adding Records",badge:"Append Safe",desc:"Adding new records to the end of an existing file without deleting or wiping earlier entries.",code:`# Example 4: Append new attendance entry without overwriting
with open("attendance.txt", "a", encoding="utf-8") as f:
    f.write("[09:05 AM] Debangshu: Present (Jadavpur)\\n")
    f.write("[09:10 AM] Susmita: Present (Kolkata)\\n")

print("Appended 2 attendance records safely.")`,output:`[Existing records from earlier remain safe]
[09:05 AM] Debangshu: Present (Jadavpur)
[09:10 AM] Susmita: Present (Kolkata)`,keyTakeaway:"Mode 'a' moves the write pointer to EOF (End of File). Historical logs stay completely safe."},{num:5,title:"Write a List of Strings with writelines()",badge:"Batch Writing",desc:"Writing an entire list of pre-formatted strings into a file in a single convenient call.",code:`# Example 5: Write a list of strings with writelines()
batch_roster = [
    "1. Mamata - Python Masterclass\\n",
    "2. Debangshu - Data Science\\n",
    "3. Susmita - Web Development\\n",
    "4. Abhronila - Machine Learning\\n"
]

with open("batch_roster.txt", "w", encoding="utf-8") as f:
    f.writelines(batch_roster)`,output:`1. Mamata - Python Masterclass
2. Debangshu - Data Science
3. Susmita - Web Development
4. Abhronila - Machine Learning`,keyTakeaway:"f.writelines() consumes any iterable of strings. Each item must have '\\n' to appear on a new line."},{num:6,title:"Write Multiline Block / Docstring",badge:"Docstrings",desc:"Writing a triple-quoted multiline paragraph with preserved indentation in a single f.write() call.",code:`# Example 6: Multiline block notice
notice_text = """--------------------------------------------------
CODER & ACCOTAX NOTICE BOARD (BARRACKPORE)
Topic: Python File Handling Examination
Date: Saturday, 10:00 AM
Venue: Lab 1 & Lab 2
--------------------------------------------------
"""

with open("notice.txt", "w", encoding="utf-8") as f:
    f.write(notice_text)`,output:`--------------------------------------------------
CODER & ACCOTAX NOTICE BOARD (BARRACKPORE)
Topic: Python File Handling Examination
Date: Saturday, 10:00 AM
Venue: Lab 1 & Lab 2
--------------------------------------------------`,keyTakeaway:'Triple quotes (""" ... """) preserve all embedded newlines, margins, and ASCII layout borders.'},{num:7,title:"Capturing Return Value (Char Count)",badge:"Stream Info",desc:"Inspecting the integer character count returned by f.write() to track data written.",code:`# Example 7: Capture exact character count
with open("char_log.txt", "w", encoding="utf-8") as f:
    count1 = f.write("Coder & AccoTax\\n")    # Returns 16 chars
    count2 = f.write("Barrackpore Hub\\n")    # Returns 16 chars
    total_chars = count1 + count2
    print(f"Characters written: Line 1={count1}, Line 2={count2}, Total={total_chars}")`,output:"Characters written: Line 1=16, Line 2=16, Total=32",keyTakeaway:"f.write() returns the integer count of characters (or bytes in binary mode) written into the stream."},{num:8,title:"Writing User Input to a File",badge:"Interactive",desc:"Taking interactive console input from a student and saving it permanently into a diary note.",code:`# Example 8: Write student input into a file
student_name = input("Enter student name: ")  # e.g., "Mamata"
topic_note = input("Enter study topic: ")     # e.g., "File Handling write()"

with open("student_diary.txt", "w", encoding="utf-8") as f:
    f.write(f"Student: {student_name}\\n")
    f.write(f"Topic: {topic_note}\\n")
    f.write("Status: Completed at Barrackpore Lab\\n")`,output:`Student: Mamata
Topic: File Handling write()
Status: Completed at Barrackpore Lab`,keyTakeaway:"input() returns a string object, which can be formatted with f-strings and saved directly."},{num:9,title:"Using print() with file= Parameter",badge:"Print Redirection",desc:"Directing Python's built-in print() function to write directly into an open file stream.",code:`# Example 9: Redirect print() to write into a file
with open("print_demo.txt", "w", encoding="utf-8") as f:
    # print automatically formats types and adds '\\n'
    print("ID", "Student", "Center", "Fee", sep=" | ", file=f)
    print(101, "Mamata", "Barrackpore", 4500, sep=" | ", file=f)
    print(102, "Debangshu", "Jadavpur", 5200, sep=" | ", file=f)`,output:`ID | Student | Center | Fee
101 | Mamata | Barrackpore | 4500
102 | Debangshu | Jadavpur | 5200`,keyTakeaway:"print(..., file=f) automatically handles non-string conversion and appends newlines (end='\\n')."},{num:10,title:"Writing Formatted Tabular Report Card",badge:"Tabular Layout",desc:"Formatting aligned columns, headings, and score totals into an elegant ASCII report card table.",code:`# Example 10: Formatted tabular examination report card
exam_data = [
    {"name": "Mamata", "theory": 95, "practical": 98},
    {"name": "Debangshu", "theory": 92, "practical": 94},
    {"name": "Susmita", "theory": 88, "practical": 96}
]

with open("report_card.txt", "w", encoding="utf-8") as f:
    f.write("=" * 42 + "\\n")
    f.write(f"{'STUDENT PERFORMANCE REPORT':^42}\\n")
    f.write("=" * 42 + "\\n")
    f.write(f"{'Name':<12} {'Theory':>8} {'Practical':>10} {'Total':>8}\\n")
    f.write("-" * 42 + "\\n")
    for s in exam_data:
        total = s["theory"] + s["practical"]
        f.write(f"{s['name']:<12} {s['theory']:>8} {s['practical']:>10} {total:>8}\\n")
    f.write("=" * 42 + "\\n")`,output:`==========================================
        STUDENT PERFORMANCE REPORT        
==========================================
Name           Theory  Practical    Total
------------------------------------------
Mamata             95         98      193
Debangshu          92         94      186
Susmita            88         96      184
==========================================`,keyTakeaway:"Using f-string alignment specifiers (<12, >8, ^42) creates aligned, professional text tables."}],x=I.find(t=>t.num===R)||I[0],le=t=>{navigator.clipboard.writeText(t),O(!0),setTimeout(()=>O(!1),2e3)},oe=()=>{if(C(null),S){C("TypeError: write() argument must be str, not int. You cannot write numeric 4500 directly; convert with str(4500) or f-string!"),A(null);return}const t=l[f],r=`[${new Date().toTimeString().split(" ")[0]}] Student: ${f.padEnd(10," ")} | Hub: ${t.center.padEnd(11," ")} | Fee: ₹${t.fee.toLocaleString("en-IN")}${p?`
`:""}`,y=r.length;A(y),k(p?d=>[...d,r.replace(/\n$/,"")]:d=>{if(d.length===0)return[r];const we=d[d.length-1];return[...d.slice(0,d.length-1),we+r]})},de=()=>{k([]),A(null),C(null)},ce=()=>{se(!0);let t=[];u?t=h.map(n=>`ID: 2026-WB-${n.toUpperCase()} | Student: ${n} | Center: ${l[n].center}
`):t=h.map(n=>`ID: 2026-WB-${n.toUpperCase()} | Student: ${n} | Center: ${l[n].center}`),ne(t.join(""))},xe=t=>{Z(n=>n.includes(t)?n.filter(r=>r!==t):[...n,t])},me=()=>{N(null);const t=new Date().toTimeString().split(" ")[0],n=`[${t}] [NEW-ENTRY] Abhronila (Barrackpore Hub) - Fee Paid: ₹5,800
`;if(o==="x")if(T){N("FileExistsError: [Errno 17] File exists: 'audit.log'. Mode 'x' refused to open and protected existing data from overwrite!");return}else{g(!0),w(n),b(r=>[`[${t}] Mode 'x': File created exclusively and written.`,...r]);return}o==="w"||o==="w+"?(w(n),g(!0),b(r=>[`[${t}] Mode '${o}': Existing data WIPED to 0 bytes! Wrote 1 record.`,...r])):(o==="a"||o==="a+")&&(w(r=>r+n),g(!0),b(r=>[`[${t}] Mode '${o}': Preserved history and appended to end of file.`,...r]))},fe=()=>{g(!0),N(null),w(`[2026-10-02 09:00:00] [AUDIT] System started at Barrackpore
[2026-10-02 09:15:20] [PAYMENT] Mamata: ₹4,500
[2026-10-02 09:30:10] [PAYMENT] Debangshu: ₹5,200
`),b([])},pe=()=>{g(!1),w(""),N(null),b(t=>["File deleted from disk. File exists = False",...t])},he=()=>{K&&G(!1);const t=new Date().toTimeString().split(" ")[0],n=["Mamata","Debangshu","Susmita","Mahima","Abhronila"][i.length%5],r=`[${t}] Sensor Reading: Telemetry from ${l[n].center} OK (₹${l[n].fee})`,y=[...i,r];y.length>=_?(q(d=>[...d,...y]),v([])):v(y)},ue=()=>{i.length>0&&(q(t=>[...t,...i]),v([]))},ge=()=>{G(!0),v([])},V=[{id:"ex1",title:"1. write() Basics & Character Counting",badge:"Fundamental",desc:"Opening in 'w' mode, explicit \\n management, and capturing the integer character count returned by write().",codeModule:Ee,highlights:[20,27,36,40]},{id:"ex2",title:"2. writelines() Batch Lists & Generators",badge:"Batch I/O",desc:"Writing sequences of strings, handling the 'no auto newline' catch, and streaming huge datasets with generator expressions.",codeModule:ke,highlights:[24,30,42]},{id:"ex3",title:"3. Append Mode ('a') for Real-Time Logs",badge:"Audit Trails",desc:"Preserving historical data, appending student fee payment records with timestamps and Rupee currency formatting.",codeModule:Ae,highlights:[17,20,39]},{id:"ex4",title:"4. Structured CSV & Tabular ASCII Reports",badge:"Reporting",desc:"Formatting aligned columns, comma-separated datasets, running totals, and batch averages directly using write().",codeModule:Ce,highlights:[22,28,38,51]},{id:"ex5",title:"5. Buffering, file.flush() & Crash Safety",badge:"Production Resilience",desc:"Understanding Python RAM buffer vs OS page cache, calling file.flush() and os.fsync() for real-time sensor streams.",codeModule:Te,highlights:[20,37,40]},{id:"ex6",title:"6. Safe Atomic File Writing Pattern",badge:"Enterprise Standard",desc:"Writing to a temporary staging file first and atomically swapping via os.replace() to prevent corrupted files on crash.",codeModule:Me,highlights:[21,27,33]},{id:"ex10_master",title:"7. Master Script: 10 Simple Write Examples",badge:"10-in-1 Master",desc:"Complete runnable master script containing all 10 simple write file functions in one Python module.",codeModule:Se,highlights:[10,20,31,48,66,80,97,109,122,136]}];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .reveal-section {
          transform: translateY(0);
          transition: transform 0.4s ease-out;
        }
        .reveal-section.is-visible {
          transform: translateY(0);
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.8; filter: drop-shadow(0 0 6px rgba(45, 212, 191, 0.4)); }
          50% { opacity: 1; filter: drop-shadow(0 0 14px rgba(45, 212, 191, 0.8)); }
        }
        .animate-glow {
          animation: pulseGlow 3s ease-in-out infinite;
        }
      `}),e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 md:p-12 font-sans selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsxs("header",{ref:a,className:"reveal-section max-w-5xl mx-auto mb-12 text-center",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/70 border border-teal-700/60 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-lg shadow-teal-950/40",children:[e.jsx("span",{children:"🐍"}),e.jsx("span",{children:"Python Masterclass · Module 002_008 · Topic 10"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4",children:["Writing Files in Python: ",e.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-300",children:"write(), writelines() & Appending Data"})]}),e.jsxs("p",{className:"text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed",children:["Master the complete mechanics of persistent file writing: understanding stream character counts, explicit newline discipline, append-mode audit trails, memory buffering with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"flush()"}),", and 10 crystal-clear practical examples."]}),e.jsxs("div",{className:"mt-6 flex flex-wrap justify-center gap-2.5 text-xs font-medium text-slate-400",children:[e.jsxs("span",{className:"rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-teal-300 flex items-center gap-1.5",children:[e.jsx("span",{children:"✍️"})," file.write(str) → int"]}),e.jsxs("span",{className:"rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-cyan-300 flex items-center gap-1.5",children:[e.jsx("span",{children:"📜"})," file.writelines(iterable) → None"]}),e.jsxs("span",{className:"rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-emerald-300 flex items-center gap-1.5",children:[e.jsx("span",{children:"➕"})," Mode 'a' (Append Safe)"]}),e.jsxs("span",{className:"rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-amber-300 flex items-center gap-1.5",children:[e.jsx("span",{children:"⚡"})," 10 Simple Examples Included"]})]})]}),e.jsxs("section",{ref:a,className:"reveal-section max-w-5xl mx-auto mb-16 rounded-2xl border border-teal-500/30 bg-gradient-to-b from-slate-900/95 to-slate-900/80 p-6 md:p-8 shadow-2xl shadow-teal-950/20",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/20 text-teal-400 font-bold text-xl border border-teal-500/30",children:"👨‍🏫"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl md:text-2xl font-bold text-white",children:"Teacher's Concept Breakdown: Writing Files from First Principles"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Detailed conceptual breakdown by Sukanta Hui (Coder & AccoTax, Barrackpore)"})]})]}),e.jsxs("div",{className:"mt-6 space-y-6",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/90 border border-slate-800 space-y-3",children:[e.jsxs("span",{className:"text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5",children:[e.jsx("span",{children:"📖"})," The Classroom Notebook Analogy: Fresh Slate vs Cumulative Diary"]}),e.jsx("p",{className:"text-sm text-slate-200 leading-relaxed",children:"Imagine managing student records at our Barrackpore center. Think of the filesystem as a notebook:"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/40 space-y-2",children:[e.jsxs("div",{className:"font-bold text-rose-300 flex items-center gap-2",children:[e.jsx("span",{className:"text-base",children:"🗑️"})," Mode 'w' (Write Mode = Tear & Replace)"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Opening with ",e.jsx("code",{className:"text-rose-200 font-mono",children:"'w'"})," is like tearing out every previous page and starting with a blank sheet (",e.jsx("strong",{children:"truncation to 0 bytes"}),"). Any old marks or fee records in that file are instantly lost forever!"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/40 space-y-2",children:[e.jsxs("div",{className:"font-bold text-emerald-300 flex items-center gap-2",children:[e.jsx("span",{className:"text-base",children:"📝"})," Mode 'a' (Append Mode = Turn to Next Page)"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Opening with ",e.jsx("code",{className:"text-emerald-200 font-mono",children:"'a'"})," is like turning to the very last line of the notebook and writing the new admission record below the existing ones. Previous history remains 100% preserved."]})]})]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/90 border border-slate-800 space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-teal-300 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Method Signatures & Return Types: write() vs writelines()"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-xs font-mono border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-800 text-slate-400 bg-slate-900/60",children:[e.jsx("th",{className:"p-3",children:"Method Signature"}),e.jsx("th",{className:"p-3",children:"Argument Type"}),e.jsx("th",{className:"p-3",children:"Return Value"}),e.jsx("th",{className:"p-3",children:"Automatic '\\n'?"}),e.jsx("th",{className:"p-3",children:"Primary Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800/60 text-slate-300",children:[e.jsxs("tr",{className:"hover:bg-slate-900/40",children:[e.jsx("td",{className:"p-3 text-teal-300 font-bold",children:"file.write(str)"}),e.jsxs("td",{className:"p-3 text-cyan-300",children:["Single String (",e.jsx("code",{className:"text-teal-200",children:"str"}),")"]}),e.jsx("td",{className:"p-3 text-amber-300 font-bold",children:"int (character count)"}),e.jsx("td",{className:"p-3 text-rose-400 font-bold",children:"❌ NO (Must add \\n)"}),e.jsx("td",{className:"p-3 text-slate-300",children:"Formatted lines, single text blocks, CSV rows"})]}),e.jsxs("tr",{className:"hover:bg-slate-900/40",children:[e.jsx("td",{className:"p-3 text-teal-300 font-bold",children:"file.writelines(iterable)"}),e.jsx("td",{className:"p-3 text-cyan-300",children:"Iterable of strings (list, tuple, generator)"}),e.jsx("td",{className:"p-3 text-slate-400 font-bold",children:"None"}),e.jsx("td",{className:"p-3 text-rose-400 font-bold",children:"❌ NO (Must include \\n in items)"}),e.jsx("td",{className:"p-3 text-slate-300",children:"Batch writing pre-formatted lists or generator streams"})]}),e.jsxs("tr",{className:"hover:bg-slate-900/40",children:[e.jsx("td",{className:"p-3 text-teal-300 font-bold",children:"file.flush()"}),e.jsx("td",{className:"p-3 text-slate-500",children:"None"}),e.jsx("td",{className:"p-3 text-slate-400 font-bold",children:"None"}),e.jsx("td",{className:"p-3 text-slate-500",children:"N/A"}),e.jsx("td",{className:"p-3 text-slate-300",children:"Emptying Python memory buffer to OS stream immediately"})]})]})]})})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/90 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"text-base font-bold text-cyan-300 flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," Comprehensive File Opening Modes Matrix"]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs",children:[e.jsxs("div",{className:"p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"font-bold text-teal-300 font-mono text-sm",children:"Mode 'w'"}),e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-rose-950 text-rose-300 text-[10px] font-bold",children:"TRUNCATES"})]}),e.jsx("p",{className:"text-slate-400",children:"Creates if absent. Wipes to 0 bytes if exists. Write-only at index 0."})]}),e.jsxs("div",{className:"p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"font-bold text-emerald-300 font-mono text-sm",children:"Mode 'a'"}),e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px] font-bold",children:"PRESERVES"})]}),e.jsx("p",{className:"text-slate-400",children:"Creates if absent. Preserves existing data. Writes always append to EOF."})]}),e.jsxs("div",{className:"p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"font-bold text-amber-300 font-mono text-sm",children:"Mode 'x'"}),e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-amber-950 text-amber-300 text-[10px] font-bold",children:"EXCLUSIVE"})]}),e.jsxs("p",{className:"text-slate-400",children:["Exclusive creation. Fails with ",e.jsx("code",{className:"text-amber-200",children:"FileExistsError"})," if file already exists."]})]}),e.jsxs("div",{className:"p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"font-bold text-rose-300 font-mono text-sm",children:"Mode 'w+'"}),e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-rose-950 text-rose-300 text-[10px] font-bold",children:"READ + WIPE"})]}),e.jsxs("p",{className:"text-slate-400",children:["Opens for Read & Write, but ",e.jsx("strong",{children:"erases existing content"})," to 0 bytes on open!"]})]}),e.jsxs("div",{className:"p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"font-bold text-indigo-300 font-mono text-sm",children:"Mode 'a+'"}),e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-indigo-950 text-indigo-300 text-[10px] font-bold",children:"READ + APPEND"})]}),e.jsx("p",{className:"text-slate-400",children:"Opens for Read & Append without wiping. Pointer starts at EOF; seek(0) to read."})]}),e.jsxs("div",{className:"p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"font-bold text-sky-300 font-mono text-sm",children:"Mode 'r+'"}),e.jsx("span",{className:"px-1.5 py-0.5 rounded bg-sky-950 text-sky-300 text-[10px] font-bold",children:"UPDATE NO WIPE"})]}),e.jsx("p",{className:"text-slate-400",children:"Read & Write in-place. Requires file to exist. Does not truncate automatically."})]})]})]})]})]}),e.jsxs("section",{ref:a,className:"reveal-section max-w-5xl mx-auto mb-16 space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-teal-400",children:"💡"})," 10 Simple Write File Examples (Beginner to Intermediate)"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Click on any of the 10 scenarios below to view the simple Python code, expected disk output, and key takeaways."})]}),e.jsx("span",{className:"px-3 py-1 rounded-full bg-teal-950/80 border border-teal-800 text-teal-300 text-xs font-mono font-bold",children:"10 Quick Snippets"})]}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-2",children:I.map(t=>e.jsxs("button",{onClick:()=>z(t.num),className:m("p-2.5 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between",R===t.num?"bg-teal-950/90 border-teal-500 text-teal-200 shadow-md shadow-teal-950/50 scale-[1.02]":"bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"),children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-[10px] font-mono font-bold text-teal-400",children:["#",t.num]}),e.jsx("span",{className:"text-[9px] px-1.5 py-0.2 rounded bg-slate-950 text-slate-400 border border-slate-800 font-mono",children:t.badge})]}),e.jsx("span",{className:"text-xs font-semibold line-clamp-1 mt-1",children:t.title})]},t.num))}),e.jsxs("div",{className:"rounded-2xl bg-slate-900/90 border border-slate-800 p-6 md:p-8 space-y-6 shadow-2xl animate-[fadeIn_0.3s_ease-out]",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800 text-xs font-mono font-bold",children:["Example #",x.num]}),e.jsx("span",{className:"px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 text-xs font-mono",children:x.badge})]}),e.jsx("h3",{className:"text-lg md:text-xl font-bold text-white mt-1.5",children:x.title}),e.jsx("p",{className:"text-xs text-slate-300 mt-1",children:x.desc})]}),e.jsx("button",{onClick:()=>le(x.code),className:"px-3 py-1.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-700 text-teal-300 text-xs font-mono flex items-center gap-1.5 transition active:scale-95",children:e.jsx("span",{children:X?"✓ Copied!":"📋 Copy Python Code"})})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-5",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("span",{className:"text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5",children:[e.jsx("span",{children:"🐍"})," Python Code Snippet:"]}),e.jsx("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300 overflow-x-auto min-h-[160px] leading-relaxed",children:e.jsx("pre",{className:"whitespace-pre",children:x.code})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("span",{className:"text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5",children:[e.jsx("span",{children:"📄"})," Resulting File on Disk:"]}),e.jsx("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-teal-200 overflow-x-auto min-h-[160px] leading-relaxed",children:e.jsx("pre",{className:"whitespace-pre",children:x.output})})]})]}),e.jsxs("div",{className:"p-3.5 rounded-xl bg-teal-950/40 border border-teal-800/60 text-xs text-teal-200 flex items-start gap-2",children:[e.jsx("span",{className:"text-base",children:"💡"}),e.jsxs("div",{children:[e.jsx("strong",{className:"font-bold block",children:"Key Pedagogical Insight:"}),e.jsx("span",{children:x.keyTakeaway})]})]})]})]}),e.jsxs("section",{ref:a,className:"reveal-section max-w-5xl mx-auto mb-16 space-y-8",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-teal-400",children:"📐"})," Visual Architecture: File Writing Internals"]}),e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3",children:[e.jsx("h3",{className:"text-base font-bold text-teal-300",children:"Diagram 1: File Pointer & Truncation Behavior Across Modes ('w' vs 'a' vs 'x')"}),e.jsx("span",{className:"text-xs px-2.5 py-1 rounded bg-teal-950 text-teal-300 border border-teal-800",children:"Pointer Architecture"})]}),e.jsx("div",{className:"w-full overflow-x-auto py-2",children:e.jsxs("svg",{viewBox:"0 0 850 240",className:"w-full min-w-[700px] h-auto font-mono text-xs",children:[e.jsx("rect",{width:"850",height:"240",rx:"12",fill:"#020617",stroke:"#1e293b",strokeWidth:"1.5"}),e.jsxs("g",{transform:"translate(30, 30)",children:[e.jsx("rect",{width:"240",height:"180",rx:"8",fill:"#0f172a",stroke:"#f43f5e",strokeWidth:"1.5"}),e.jsx("text",{x:"12",y:"24",fill:"#f43f5e",fontWeight:"bold",fontSize:"13",children:"Mode 'w' (Write/Overwrite)"}),e.jsx("rect",{x:"12",y:"38",width:"216",height:"35",rx:"4",fill:"#881337",opacity:"0.4",stroke:"#e11d48",strokeDasharray:"3,3"}),e.jsx("text",{x:"20",y:"60",fill:"#fda4af",fontSize:"11",children:"Old Data Wiped! [0 Bytes]"}),e.jsx("line",{x1:"20",y1:"105",x2:"220",y2:"105",stroke:"#334155",strokeWidth:"4"}),e.jsx("circle",{cx:"20",cy:"105",r:"7",fill:"#f43f5e"}),e.jsx("text",{x:"20",y:"130",fill:"#f43f5e",fontSize:"10",fontWeight:"bold",children:"Pointer = 0"}),e.jsx("text",{x:"12",y:"160",fill:"#94a3b8",fontSize:"10",children:"Overwrites all content from byte 0"})]}),e.jsxs("g",{transform:"translate(305, 30)",children:[e.jsx("rect",{width:"240",height:"180",rx:"8",fill:"#0f172a",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"12",y:"24",fill:"#10b981",fontWeight:"bold",fontSize:"13",children:"Mode 'a' (Append Safe)"}),e.jsx("rect",{x:"12",y:"38",width:"130",height:"35",rx:"4",fill:"#064e3b",stroke:"#059669"}),e.jsx("text",{x:"20",y:"60",fill:"#6ee7b7",fontSize:"11",children:"Existing History"}),e.jsx("rect",{x:"146",y:"38",width:"82",height:"35",rx:"4",fill:"#047857",opacity:"0.7",stroke:"#34d399",strokeDasharray:"2,2"}),e.jsx("text",{x:"154",y:"60",fill:"#a7f3d0",fontSize:"10",children:"+New Row"}),e.jsx("line",{x1:"20",y1:"105",x2:"220",y2:"105",stroke:"#334155",strokeWidth:"4"}),e.jsx("circle",{cx:"146",cy:"105",r:"7",fill:"#10b981"}),e.jsx("text",{x:"130",y:"130",fill:"#10b981",fontSize:"10",fontWeight:"bold",children:"Pointer = EOF"}),e.jsx("text",{x:"12",y:"160",fill:"#94a3b8",fontSize:"10",children:"History preserved; writes append"})]}),e.jsxs("g",{transform:"translate(580, 30)",children:[e.jsx("rect",{width:"240",height:"180",rx:"8",fill:"#0f172a",stroke:"#f59e0b",strokeWidth:"1.5"}),e.jsx("text",{x:"12",y:"24",fill:"#f59e0b",fontWeight:"bold",fontSize:"13",children:"Mode 'x' (Exclusive Shield)"}),e.jsx("rect",{x:"12",y:"38",width:"216",height:"35",rx:"4",fill:"#78350f",opacity:"0.5",stroke:"#d97706"}),e.jsx("text",{x:"20",y:"60",fill:"#fcd34d",fontSize:"11",children:"File Exists? → FileExistsError"}),e.jsx("rect",{x:"12",y:"88",width:"216",height:"40",rx:"4",fill:"#1e293b",stroke:"#475569"}),e.jsx("text",{x:"20",y:"112",fill:"#cbd5e1",fontSize:"11",children:"File Absent? → Creates Fresh"}),e.jsx("text",{x:"12",y:"160",fill:"#94a3b8",fontSize:"10",children:"Guarantees zero accidental overwrite"})]})]})}),e.jsxs("p",{className:"text-xs text-slate-400",children:["💡 ",e.jsx("strong",{children:"Key Takeaway:"})," Mode ",e.jsx("code",{className:"text-rose-300 font-mono",children:"'w'"})," immediately resets the file length to 0. For continuous logging and transactional data, always default to mode ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"'a'"}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3",children:[e.jsx("h3",{className:"text-base font-bold text-cyan-300",children:"Diagram 2: Python I/O Buffer, file.flush(), and Physical Hardware Commitment"}),e.jsx("span",{className:"text-xs px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800",children:"Crash-Resilience Pipeline"})]}),e.jsx("div",{className:"w-full overflow-x-auto py-2",children:e.jsxs("svg",{viewBox:"0 0 850 200",className:"w-full min-w-[700px] h-auto font-mono text-xs",children:[e.jsx("rect",{width:"850",height:"200",rx:"12",fill:"#020617",stroke:"#1e293b",strokeWidth:"1.5"}),e.jsxs("g",{transform:"translate(30, 30)",children:[e.jsx("rect",{width:"160",height:"140",rx:"8",fill:"#0f172a",stroke:"#2dd4bf",strokeWidth:"1.5"}),e.jsx("text",{x:"12",y:"24",fill:"#2dd4bf",fontWeight:"bold",children:"1. Python Code"}),e.jsx("rect",{x:"12",y:"40",width:"136",height:"50",rx:"4",fill:"#134e4a",stroke:"#0d9488"}),e.jsx("text",{x:"18",y:"60",fill:"#a7f3d0",fontSize:"10",children:'f.write("Line\\n")'}),e.jsx("text",{x:"18",y:"78",fill:"#5eead4",fontSize:"10",children:"Returns: 5 chars"}),e.jsx("text",{x:"12",y:"115",fill:"#94a3b8",fontSize:"9",children:"User-space execution"})]}),e.jsxs("g",{transform:"translate(195, 90)",children:[e.jsx("line",{x1:"0",y1:"10",x2:"40",y2:"10",stroke:"#2dd4bf",strokeWidth:"2",strokeDasharray:"4,2"}),e.jsx("polygon",{points:"40,5 50,10 40,15",fill:"#2dd4bf"})]}),e.jsxs("g",{transform:"translate(250, 30)",children:[e.jsx("rect",{width:"160",height:"140",rx:"8",fill:"#0f172a",stroke:"#38bdf8",strokeWidth:"1.5"}),e.jsx("text",{x:"12",y:"24",fill:"#38bdf8",fontWeight:"bold",children:"2. Python RAM Buffer"}),e.jsx("rect",{x:"12",y:"40",width:"136",height:"50",rx:"4",fill:"#075985",stroke:"#0284c7"}),e.jsx("text",{x:"18",y:"60",fill:"#bae6fd",fontSize:"10",children:"RAM Page (4KB/8KB)"}),e.jsx("text",{x:"18",y:"78",fill:"#7dd3fc",fontSize:"9",children:"Pending Disk Flush"}),e.jsx("text",{x:"12",y:"115",fill:"#f59e0b",fontSize:"9",children:"⚡ file.flush() fires here"})]}),e.jsxs("g",{transform:"translate(415, 90)",children:[e.jsx("line",{x1:"0",y1:"10",x2:"40",y2:"10",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("polygon",{points:"40,5 50,10 40,15",fill:"#38bdf8"})]}),e.jsxs("g",{transform:"translate(470, 30)",children:[e.jsx("rect",{width:"160",height:"140",rx:"8",fill:"#0f172a",stroke:"#818cf8",strokeWidth:"1.5"}),e.jsx("text",{x:"12",y:"24",fill:"#818cf8",fontWeight:"bold",children:"3. OS Page Cache"}),e.jsx("rect",{x:"12",y:"40",width:"136",height:"50",rx:"4",fill:"#312e81",stroke:"#4338ca"}),e.jsx("text",{x:"18",y:"60",fill:"#c7d2fe",fontSize:"10",children:"Kernel Dirty Pages"}),e.jsx("text",{x:"18",y:"78",fill:"#a5b4fc",fontSize:"9",children:"Visible to OS tools"}),e.jsx("text",{x:"12",y:"115",fill:"#a5b4fc",fontSize:"9",children:"⚡ os.fsync() forces write"})]}),e.jsxs("g",{transform:"translate(635, 90)",children:[e.jsx("line",{x1:"0",y1:"10",x2:"40",y2:"10",stroke:"#818cf8",strokeWidth:"2"}),e.jsx("polygon",{points:"40,5 50,10 40,15",fill:"#818cf8"})]}),e.jsxs("g",{transform:"translate(690, 30)",children:[e.jsx("rect",{width:"130",height:"140",rx:"8",fill:"#0f172a",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"10",y:"24",fill:"#10b981",fontWeight:"bold",children:"4. Disk / SSD"}),e.jsx("rect",{x:"10",y:"40",width:"110",height:"50",rx:"4",fill:"#064e3b",stroke:"#059669"}),e.jsx("text",{x:"16",y:"60",fill:"#a7f3d0",fontSize:"10",children:"Non-Volatile"}),e.jsx("text",{x:"16",y:"78",fill:"#6ee7b7",fontSize:"10",children:"Flash / Platter"}),e.jsx("text",{x:"10",y:"115",fill:"#34d399",fontSize:"9",children:"100% Persisted"})]})]})}),e.jsxs("p",{className:"text-xs text-slate-400",children:["💡 ",e.jsx("strong",{children:"Why This Matters:"})," Data passed to ",e.jsx("code",{className:"text-teal-300 font-mono",children:"f.write()"})," stays in memory until the buffer fills or ",e.jsx("code",{className:"text-teal-300 font-mono",children:"f.close()"})," / ",e.jsx("code",{className:"text-teal-300 font-mono",children:"f.flush()"})," is triggered. The ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"with"})," statement guarantees closure and buffer flushing automatically."]})]})]}),e.jsxs("section",{ref:a,className:"reveal-section max-w-5xl mx-auto mb-16 space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-400",children:"⚡"})," Interactive Python Workbench: Under the Hood"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Simulate character return counts, missing newline traps, mode battles, and RAM buffer flushes in real-time."})]}),e.jsx("span",{className:"px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs font-mono font-bold",children:"4 Live Labs"})]}),e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2.5",children:[e.jsxs("button",{onClick:()=>j("write"),className:m("p-3 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between",c==="write"?"bg-teal-950/90 border-teal-500 text-teal-200 shadow-lg shadow-teal-950/40":"bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"),children:[e.jsx("span",{className:"text-[10px] font-mono uppercase font-bold text-teal-400",children:"Lab 1"}),e.jsx("span",{className:"text-xs font-bold mt-1",children:"file.write(str)"}),e.jsx("span",{className:"text-[10px] text-slate-400 mt-0.5",children:"Char count & '\\n' rule"})]}),e.jsxs("button",{onClick:()=>j("writelines"),className:m("p-3 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between",c==="writelines"?"bg-cyan-950/90 border-cyan-500 text-cyan-200 shadow-lg shadow-cyan-950/40":"bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"),children:[e.jsx("span",{className:"text-[10px] font-mono uppercase font-bold text-cyan-400",children:"Lab 2"}),e.jsx("span",{className:"text-xs font-bold mt-1",children:"file.writelines()"}),e.jsx("span",{className:"text-[10px] text-slate-400 mt-0.5",children:"Batch lists & generators"})]}),e.jsxs("button",{onClick:()=>j("modes"),className:m("p-3 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between",c==="modes"?"bg-amber-950/90 border-amber-500 text-amber-200 shadow-lg shadow-amber-950/40":"bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"),children:[e.jsx("span",{className:"text-[10px] font-mono uppercase font-bold text-amber-400",children:"Lab 3"}),e.jsx("span",{className:"text-xs font-bold mt-1",children:"'w' vs 'a' vs 'x'"}),e.jsx("span",{className:"text-[10px] text-slate-400 mt-0.5",children:"Overwrite vs Append vs Shield"})]}),e.jsxs("button",{onClick:()=>j("buffer"),className:m("p-3 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between",c==="buffer"?"bg-indigo-950/90 border-indigo-500 text-indigo-200 shadow-lg shadow-indigo-950/40":"bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"),children:[e.jsx("span",{className:"text-[10px] font-mono uppercase font-bold text-indigo-400",children:"Lab 4"}),e.jsx("span",{className:"text-xs font-bold mt-1",children:"RAM Buffering & flush()"}),e.jsx("span",{className:"text-[10px] text-slate-400 mt-0.5",children:"Crash safety & page cache"})]})]}),c==="write"&&e.jsxs("div",{className:"rounded-2xl bg-slate-900/95 border border-slate-800 p-6 md:p-8 space-y-6 shadow-2xl",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("span",{className:"px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800 text-xs font-mono font-bold",children:"Method Inspection: file.write(string) -> int"})}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Observe how ",e.jsx("code",{className:"text-teal-300 font-mono",children:"f.write()"})," returns the exact number of characters written into the stream, strictly requires ",e.jsx("code",{className:"text-teal-300 font-mono",children:"str"})," type, and never appends newline characters automatically."]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-950/90 border border-slate-800",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5",children:"Select Student Record:"}),e.jsx("select",{value:f,onChange:t=>$(t.target.value),className:"w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white font-mono text-xs focus:border-teal-400 focus:outline-none",children:Object.keys(l).map(t=>e.jsxs("option",{value:t,children:[t," (",l[t].center," - ₹",l[t].fee,")"]},t))})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("span",{className:"block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1",children:"Formatting & Type Options:"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",id:"optNewline",checked:p,onChange:t=>J(t.target.checked),className:"w-4 h-4 rounded text-teal-500 bg-slate-900 border-slate-700"}),e.jsxs("label",{htmlFor:"optNewline",className:"text-xs text-slate-300 cursor-pointer",children:["Include ",e.jsx("code",{className:"text-teal-300 font-mono",children:"'\\n'"})," at end of line"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",id:"optTypeErr",checked:S,onChange:t=>Q(t.target.checked),className:"w-4 h-4 rounded text-rose-500 bg-slate-900 border-slate-700"}),e.jsxs("label",{htmlFor:"optTypeErr",className:"text-xs text-rose-300 cursor-pointer",children:["Pass raw ",e.jsx("code",{className:"text-rose-300 font-mono",children:"int(4500)"})," (Simulate TypeError)"]})]})]}),e.jsxs("div",{className:"flex flex-col justify-end gap-2",children:[e.jsx("button",{onClick:oe,className:"w-full py-2 px-4 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-bold text-xs shadow-lg shadow-teal-950/40 transition active:scale-95",children:"▶ Call f.write(...)"}),e.jsx("button",{onClick:de,className:"w-full py-1.5 px-3 rounded-xl bg-slate-900 hover:bg-rose-950/40 text-slate-400 hover:text-rose-300 border border-slate-800 text-xs font-mono transition",children:"Clear File Stream"})]})]}),F&&e.jsxs("div",{className:"p-3.5 rounded-xl bg-rose-950/50 border border-rose-800 text-xs text-rose-200 flex items-start gap-2",children:[e.jsx("span",{className:"text-base",children:"🚨"}),e.jsxs("div",{children:[e.jsx("strong",{className:"block font-bold",children:"Python Exception Raised:"}),e.jsx("span",{children:F})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-xs font-mono font-bold uppercase tracking-wider text-slate-400",children:["📄 Simulated File: ",e.jsx("code",{className:"text-teal-300",children:"admissions.txt"})]}),W!==null&&e.jsxs("span",{className:"px-2 py-0.5 rounded bg-amber-950 border border-amber-800 text-amber-300 text-[11px] font-mono font-bold",children:["f.write() Returned: ",W," chars"]})]}),e.jsx("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs overflow-x-auto min-h-[160px] max-h-[220px]",children:E.length>0?e.jsx("div",{className:"space-y-1",children:E.map((t,n)=>e.jsxs("div",{className:"flex gap-3 text-teal-200",children:[e.jsx("span",{className:"text-slate-600 select-none",children:n+1}),e.jsx("span",{className:"whitespace-pre",children:t})]},n))}):e.jsx("div",{className:"text-slate-600 italic text-center py-10",children:"[ File is empty (0 characters) ]"})}),!p&&E.length>2&&e.jsxs("p",{className:"text-[11px] text-amber-400 flex items-center gap-1",children:[e.jsx("span",{children:"⚠️"})," Notice: Because ",e.jsx("code",{className:"text-amber-200 font-mono",children:"'\\n'"})," was disabled, text merged onto the exact same line without a break!"]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("span",{className:"text-xs font-mono font-bold uppercase tracking-wider text-slate-400",children:"🐍 Equivalent Python Code:"}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300 overflow-x-auto min-h-[160px] leading-relaxed",children:[e.jsx("span",{className:"text-slate-500",children:"# Opening file in write mode"}),e.jsx("br",{}),e.jsx("span",{className:"text-cyan-400",children:"with"})," open(",e.jsx("span",{className:"text-amber-300",children:'"admissions.txt"'}),", ",e.jsx("span",{className:"text-teal-300",children:'"w"'}),", encoding=",e.jsx("span",{className:"text-amber-300",children:'"utf-8"'}),") ",e.jsx("span",{className:"text-cyan-400",children:"as"})," f:",e.jsx("br",{}),"    student_name = ",e.jsxs("span",{className:"text-amber-300",children:['"',f,'"']}),e.jsx("br",{}),"    fee = ",e.jsx("span",{className:"text-indigo-300",children:l[f].fee}),e.jsx("br",{}),e.jsx("br",{}),S?e.jsxs(e.Fragment,{children:["    ",e.jsx("span",{className:"text-rose-400",children:"# ❌ WRONG: Passing integer raises TypeError!"}),e.jsx("br",{}),"    f.write(fee)  ",e.jsx("span",{className:"text-rose-400",children:"# TypeError!"})]}):e.jsxs(e.Fragment,{children:["    ",e.jsx("span",{className:"text-slate-500",children:"# Format line (returns int count of chars written)"}),e.jsx("br",{}),"    line = ",e.jsx("span",{className:"text-amber-300",children:'f"Student: {student_name} | Fee: ₹{fee}'+(p?'\\n"':'"')}),e.jsx("br",{}),"    chars_written = f.write(line)",e.jsx("br",{}),"    ",e.jsx("span",{className:"text-cyan-400",children:"print"}),"(",e.jsx("span",{className:"text-amber-300",children:'f"Wrote {chars_written} chars"'}),")"]})]})]})]})]}),c==="writelines"&&e.jsxs("div",{className:"rounded-2xl bg-slate-900/95 border border-slate-800 p-6 md:p-8 space-y-6 shadow-2xl",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("span",{className:"px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 text-xs font-mono font-bold",children:"Method Inspection: file.writelines(iterable) -> None"})}),e.jsxs("p",{className:"text-xs text-slate-300",children:[e.jsx("code",{className:"text-cyan-300 font-mono",children:"f.writelines()"})," accepts an iterable of strings (list, tuple, or generator). ",e.jsx("strong",{children:"Key Trap:"})," It does NOT add newline characters between items on its own!"]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-950/90 border border-slate-800",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"block text-xs font-bold uppercase tracking-wider text-slate-400",children:"Select Students in Batch:"}),e.jsx("div",{className:"space-y-1.5",children:Object.keys(l).map(t=>e.jsxs("label",{className:"flex items-center gap-2 text-xs text-slate-300 cursor-pointer",children:[e.jsx("input",{type:"checkbox",checked:h.includes(t),onChange:()=>xe(t),className:"w-3.5 h-3.5 rounded text-cyan-500 bg-slate-900 border-slate-700"}),e.jsxs("span",{children:[t," (",l[t].center,")"]})]},t))})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("span",{className:"block text-xs font-bold uppercase tracking-wider text-slate-400",children:"Formatting & Stream Type:"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",id:"optWlNewline",checked:u,onChange:t=>ee(t.target.checked),className:"w-4 h-4 rounded text-cyan-500 bg-slate-900 border-slate-700"}),e.jsxs("label",{htmlFor:"optWlNewline",className:"text-xs text-slate-300 cursor-pointer",children:["Pre-format each item with ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"'\\n'"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",id:"optWlGen",checked:D,onChange:t=>te(t.target.checked),className:"w-4 h-4 rounded text-emerald-500 bg-slate-900 border-slate-700"}),e.jsx("label",{htmlFor:"optWlGen",className:"text-xs text-emerald-300 cursor-pointer",children:"Use Generator Expression (O(1) RAM)"})]})]}),e.jsxs("div",{className:"flex flex-col justify-end gap-2",children:[e.jsx("button",{onClick:ce,disabled:h.length===0,className:"w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 disabled:opacity-50 text-white font-bold text-xs shadow-lg shadow-cyan-950/40 transition active:scale-95",children:"▶ Call f.writelines(...)"}),e.jsxs("span",{className:"text-[11px] text-slate-400 text-center font-mono",children:["Return value is always ",e.jsx("strong",{className:"text-slate-200",children:"None"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono font-bold uppercase tracking-wider text-slate-400",children:"📄 File Result on Disk:"}),L&&e.jsx("span",{className:"px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800 text-cyan-300 text-[11px] font-mono",children:"Return: None"})]}),e.jsx("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs overflow-x-auto min-h-[160px] max-h-[220px]",children:B?e.jsx("pre",{className:"text-cyan-200 whitespace-pre leading-relaxed",children:B}):e.jsx("div",{className:"text-slate-600 italic text-center py-10",children:'[ Click "Call f.writelines(...)" to execute ]'})}),!u&&L&&e.jsxs("div",{className:"p-2.5 rounded-lg bg-rose-950/40 border border-rose-800/60 text-xs text-rose-300",children:["⚠️ ",e.jsx("strong",{children:"Look at the output!"})," Because items lacked ",e.jsx("code",{className:"text-rose-200 font-mono",children:"'\\n'"}),", all records got glued together horizontally into one long sentence!"]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("span",{className:"text-xs font-mono font-bold uppercase tracking-wider text-slate-400",children:"🐍 Generated Python Code:"}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300 overflow-x-auto min-h-[160px] leading-relaxed",children:[e.jsx("span",{className:"text-slate-500",children:"# Raw student names list"}),e.jsx("br",{}),"students = ",JSON.stringify(h),e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{className:"text-cyan-400",children:"with"})," open(",e.jsx("span",{className:"text-amber-300",children:'"roster.txt"'}),", ",e.jsx("span",{className:"text-teal-300",children:'"w"'}),", encoding=",e.jsx("span",{className:"text-amber-300",children:'"utf-8"'}),") ",e.jsx("span",{className:"text-cyan-400",children:"as"})," f:",e.jsx("br",{}),D?e.jsxs(e.Fragment,{children:["    ",e.jsx("span",{className:"text-slate-500",children:"# Memory-efficient generator expression"}),e.jsx("br",{}),"    stream = (",'f"ID: 2026-WB-{s} | {s}'+(u?'\\n"':'"')," ",e.jsx("span",{className:"text-cyan-400",children:"for"})," s ",e.jsx("span",{className:"text-cyan-400",children:"in"})," students)",e.jsx("br",{}),"    f.writelines(stream)"]}):e.jsxs(e.Fragment,{children:["    ",e.jsx("span",{className:"text-slate-500",children:"# List comprehension"}),e.jsx("br",{}),"    lines = [",'f"ID: 2026-WB-{s} | {s}'+(u?'\\n"':'" ')," ",e.jsx("span",{className:"text-cyan-400",children:"for"})," s ",e.jsx("span",{className:"text-cyan-400",children:"in"})," students]",e.jsx("br",{}),"    f.writelines(lines)"]})]})]})]})]}),c==="modes"&&e.jsxs("div",{className:"rounded-2xl bg-slate-900/95 border border-slate-800 p-6 md:p-8 space-y-6 shadow-2xl",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("span",{className:"px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800 text-xs font-mono font-bold",children:"File Mode Battle: 'w' (Overwrite) vs 'a' (Append) vs 'x' (Exclusive)"})}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Test the difference between modes on an existing file with 3 historical payment records. See why accidental use of ",e.jsx("code",{className:"text-rose-300 font-mono",children:"'w'"})," erases historical logs while ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"'a'"})," safely appends."]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-950/90 border border-slate-800",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5",children:"Choose Open Mode:"}),e.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:["w","a","x"].map(t=>e.jsxs("button",{onClick:()=>re(t),className:m("py-2 px-2 rounded-lg font-mono text-xs font-bold border transition",o===t?t==="w"?"bg-rose-950 border-rose-500 text-rose-200":t==="a"?"bg-emerald-950 border-emerald-500 text-emerald-200":"bg-amber-950 border-amber-500 text-amber-200":"bg-slate-900 border-slate-800 text-slate-400"),children:["'",t,"'"]},t))})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("span",{className:"block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1",children:"File System State:"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:fe,className:"px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs border border-slate-700 transition",children:"Reset 3 Existing Records"}),e.jsx("button",{onClick:pe,className:"px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-rose-950/50 text-rose-300 text-xs border border-slate-700 transition",children:"Delete File (Simulate Missing)"})]}),e.jsxs("span",{className:"text-[11px] font-mono text-slate-400 block",children:["File Exists: ",e.jsx("strong",{className:T?"text-emerald-400":"text-rose-400",children:T?"YES":"NO"})]})]}),e.jsx("div",{className:"flex flex-col justify-end",children:e.jsxs("button",{onClick:me,className:"w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-teal-600 hover:from-amber-500 hover:to-teal-500 text-white font-bold text-xs shadow-lg shadow-amber-950/40 transition active:scale-95",children:["▶ open('audit.log', '",o,"') & write()"]})})]}),H&&e.jsxs("div",{className:"p-3.5 rounded-xl bg-rose-950/60 border border-rose-800 text-xs text-rose-200 flex items-start gap-2",children:[e.jsx("span",{className:"text-base",children:"🛡️"}),e.jsxs("div",{children:[e.jsx("strong",{className:"block font-bold",children:"Safety Shield Exception:"}),e.jsx("span",{children:H})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-xs font-mono font-bold uppercase tracking-wider text-slate-400",children:["📄 File on Disk: ",e.jsx("code",{className:"text-amber-300",children:"audit.log"})]}),e.jsxs("span",{className:"text-[11px] font-mono text-slate-400",children:["Size: ",M.length," bytes"]})]}),e.jsx("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs overflow-x-auto min-h-[160px] max-h-[220px]",children:M?e.jsx("pre",{className:"text-slate-200 whitespace-pre leading-relaxed",children:M}):e.jsx("div",{className:"text-slate-600 italic text-center py-10",children:"[ File is empty (0 bytes) or does not exist ]"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("span",{className:"text-xs font-mono font-bold uppercase tracking-wider text-slate-400",children:"📋 Mode Activity Audit:"}),e.jsx("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-2 min-h-[160px] max-h-[220px] overflow-y-auto",children:U.length>0?U.map((t,n)=>e.jsx("div",{className:"p-2 rounded bg-slate-900/80 text-slate-300 border border-slate-800 text-[11px]",children:t},n)):e.jsx("div",{className:"text-slate-600 italic text-center py-10",children:"[ Select a mode and click execute to see actions ]"})})]})]})]}),c==="buffer"&&e.jsxs("div",{className:"rounded-2xl bg-slate-900/95 border border-slate-800 p-6 md:p-8 space-y-6 shadow-2xl",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("span",{className:"px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800 text-xs font-mono font-bold",children:"I/O RAM Buffer, file.flush() & Power Crash Simulation"})}),e.jsxs("p",{className:"text-xs text-slate-300",children:['Python does not write every single character to physical disk immediately. It holds writes in a memory buffer. Click "Write Telemetry Line" to add data to the RAM buffer. Notice it only reaches the physical disk when the buffer fills (4 items) or when you explicitly click ',e.jsx("code",{className:"text-indigo-300 font-mono",children:"file.flush()"}),"!"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[e.jsx("span",{className:"text-slate-400",children:"RAM Buffer Occupancy:"}),e.jsxs("span",{className:"text-amber-300 font-bold",children:[i.length," / ",_," items (",Math.round(i.length/_*100),"%)"]})]}),e.jsx("div",{className:"w-full h-3 rounded-full bg-slate-900 border border-slate-800 overflow-hidden",children:e.jsx("div",{className:"h-full bg-gradient-to-r from-amber-500 to-indigo-500 transition-all duration-300",style:{width:`${i.length/_*100}%`}})})]}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsxs("button",{onClick:he,className:"py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-500 hover:to-teal-500 text-white font-bold text-xs shadow-lg shadow-indigo-950/40 transition active:scale-95 flex items-center gap-2",children:[e.jsx("span",{children:"✍️"})," 1. f.write(sensor_reading)"]}),e.jsxs("button",{onClick:ue,disabled:i.length===0,className:"py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-emerald-600 hover:from-amber-500 hover:to-emerald-500 disabled:opacity-40 text-white font-bold text-xs shadow-lg shadow-amber-950/40 transition active:scale-95 flex items-center gap-2",children:[e.jsx("span",{children:"⚡"})," 2. file.flush() (Force Disk Write)"]}),e.jsxs("button",{onClick:ge,disabled:i.length===0,className:"py-2.5 px-4 rounded-xl bg-rose-950 hover:bg-rose-900 border border-rose-800 text-rose-200 font-bold text-xs transition active:scale-95 flex items-center gap-2",children:[e.jsx("span",{children:"💥"})," 3. Simulate Power Cut / Crash"]})]}),K&&e.jsxs("div",{className:"p-3.5 rounded-xl bg-rose-950/60 border border-rose-800 text-xs text-rose-200 flex items-start gap-2",children:[e.jsx("span",{className:"text-base",children:"💥"}),e.jsxs("div",{children:[e.jsx("strong",{className:"block font-bold",children:"Process Crashed Before Flush!"}),e.jsx("span",{children:"All unflushed data in the Python RAM buffer was destroyed. Notice that the physical disk storage only contains lines that were explicitly flushed before the crash!"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("span",{className:"text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5",children:[e.jsx("span",{children:"🧠"})," Python RAM Buffer (Volatile Memory):"]}),e.jsx("div",{className:"p-4 rounded-xl bg-slate-950 border border-amber-800/40 font-mono text-xs space-y-1.5 min-h-[160px]",children:i.length>0?i.map((t,n)=>e.jsxs("div",{className:"p-1.5 rounded bg-amber-950/40 text-amber-200 border border-amber-800/60 text-[11px]",children:["[RAM Buffer ",n+1,"] ",t]},n)):e.jsx("div",{className:"text-slate-600 italic text-center py-10",children:"[ Buffer is empty — all data flushed to disk ]"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("span",{className:"text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5",children:[e.jsx("span",{children:"💾"})," Physical Hard Disk / SSD (Persisted Storage):"]}),e.jsx("div",{className:"p-4 rounded-xl bg-slate-950 border border-emerald-800/40 font-mono text-xs space-y-1.5 min-h-[160px] max-h-[220px] overflow-y-auto",children:ae.map((t,n)=>e.jsxs("div",{className:"p-1.5 rounded bg-emerald-950/40 text-emerald-200 border border-emerald-800/60 text-[11px]",children:["[Disk Block] ",t]},n))})]})]})]})]}),e.jsxs("section",{ref:a,className:"reveal-section max-w-5xl mx-auto mb-16 space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-cyan-400",children:"📚"})," Production Code Showcase: 7 In-Depth Python Scripts"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Real-world, classroom-tested Python scripts with line-by-line pedagogical annotations"})]}),e.jsx("span",{className:"px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-mono font-bold",children:"7 Source Files"})]}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2",children:V.map(t=>e.jsxs("button",{onClick:()=>ie(t.id),className:m("p-2.5 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between",Y===t.id?"bg-teal-950/80 border-teal-500 text-teal-200 shadow-lg shadow-teal-950/50":"bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"),children:[e.jsx("span",{className:"text-[10px] font-mono uppercase font-bold text-teal-400 mb-1",children:t.badge}),e.jsx("span",{className:"text-xs font-semibold line-clamp-1",children:t.title.split(". ")[1]||t.title})]},t.id))}),V.map(t=>Y===t.id&&e.jsxs("div",{className:"rounded-2xl bg-slate-900/90 border border-slate-800 p-5 md:p-7 space-y-4 shadow-2xl animate-[fadeIn_0.3s_ease-out]",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-base sm:text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"🐍"})," ",t.title]}),e.jsx("p",{className:"text-xs text-slate-300 mt-1 leading-relaxed",children:t.desc})]}),e.jsx("span",{className:"px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-teal-300 font-mono text-xs",children:"Module: 002_008_file-handling"})]}),e.jsx(Ne,{fileModule:t.codeModule,title:t.title,highlightLines:t.highlights}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-400 flex items-center justify-between flex-wrap gap-2",children:[e.jsx("span",{className:"text-teal-300 font-mono",children:"💡 Pro-Tip: Notice UTF-8 encoding is explicitly specified to support ₹ Rupee and regional characters."}),e.jsx("span",{className:"text-slate-500 font-mono text-[11px]",children:"PEP 8 Compliant"})]})]},t.id))]}),e.jsxs("section",{ref:a,className:"reveal-section max-w-5xl mx-auto mb-16 space-y-6",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-amber-400",children:"🏢"})," Real-World Engineering Scenarios (West Bengal Context)"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between hover:border-amber-500/50 transition-all duration-300",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono font-semibold px-2.5 py-1 rounded bg-amber-950/60 border border-amber-800/60 text-amber-300",children:"BARRACKPORE HUB"}),e.jsx("span",{className:"text-xs text-slate-400",children:"Educational ERP"})]}),e.jsx("h3",{className:"text-base font-bold text-slate-100",children:"Student Fee Audit Ledger with Append Mode ('a')"}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:["Mamata implemented automated student fee collection logging at Coder & AccoTax in Barrackpore. Using append mode (",e.jsx("code",{className:"text-amber-300 font-mono",children:"'a'"}),"), each fee collection of ₹4,500 to ₹6,000 is written with an ISO timestamp. Even across system restarts, prior student records are strictly preserved without risk of overwrite."]})]}),e.jsxs("div",{className:"mt-4 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-amber-300 flex justify-between items-center",children:[e.jsx("span",{children:"Outcome: 100% Audit Integrity"}),e.jsx("span",{className:"text-slate-500",children:"Zero Overwrites"})]})]}),e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between hover:border-teal-500/50 transition-all duration-300",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono font-semibold px-2.5 py-1 rounded bg-teal-950/60 border border-teal-800/60 text-teal-300",children:"JADAVPUR UNIVERSITY"}),e.jsx("span",{className:"text-xs text-slate-400",children:"IoT Telemetry"})]}),e.jsx("h3",{className:"text-base font-bold text-slate-100",children:"Real-Time Weather Telemetry with file.flush()"}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:["Debangshu programmed environmental IoT sensors across Jadavpur and Kolkata. By issuing ",e.jsx("code",{className:"text-teal-300 font-mono",children:"file.flush()"})," on every telemetry reading, downstream real-time web dashboards view air quality and temperature metrics immediately without waiting for the 8KB memory buffer to fill."]})]}),e.jsxs("div",{className:"mt-4 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-teal-300 flex justify-between items-center",children:[e.jsx("span",{children:"Latency: Sub-Second Stream"}),e.jsx("span",{className:"text-slate-500",children:"Live Dashboard Sync"})]})]}),e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono font-semibold px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-800/60 text-cyan-300",children:"KOLKATA LOGISTICS HUB"}),e.jsx("span",{className:"text-xs text-slate-400",children:"E-Commerce Pipeline"})]}),e.jsx("h3",{className:"text-base font-bold text-slate-100",children:"Batch Dispatch Manifests with Generator writelines()"}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:["Susmita created a batch parcel manifest export service at a Salt Lake Sector V distribution center. By passing generator expressions to ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"file.writelines()"}),", the service streams 75,000 consignment records into CSV dispatch files with less than 12MB of RAM consumption."]})]}),e.jsxs("div",{className:"mt-4 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 flex justify-between items-center",children:[e.jsx("span",{children:"Memory Overhead: O(1) Stream"}),e.jsx("span",{className:"text-slate-500",children:"High Throughput"})]})]}),e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-300",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono font-semibold px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-800/60 text-emerald-300",children:"ICHAPUR METAL WORKS"}),e.jsx("span",{className:"text-xs text-slate-400",children:"Industrial Manufacturing"})]}),e.jsx("h3",{className:"text-base font-bold text-slate-100",children:"Atomic Production Shift Counter with os.replace()"}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:["Mahima engineered a factory shift production counter in Ichapur. To guard against sudden industrial power cuts, configuration updates are written to a temporary staging file first and atomically swapped using ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"os.replace()"}),", eliminating corrupted or half-written shift logs."]})]}),e.jsxs("div",{className:"mt-4 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300 flex justify-between items-center",children:[e.jsx("span",{children:"Safety: Zero File Corruption"}),e.jsx("span",{className:"text-slate-500",children:"Atomic Swaps"})]})]})]})]}),e.jsxs("section",{ref:a,className:"reveal-section max-w-5xl mx-auto mb-16 space-y-6",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-rose-400",children:"🛡️"})," Common Pitfalls & Defensive Best Practices"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-2xl bg-rose-950/20 border border-rose-900/40 space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-rose-300 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Critical Traps for Beginners"]}),e.jsxs("div",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed space-y-1",children:[e.jsx("strong",{className:"text-rose-200 block",children:"• The Missing '\\n' in write():"}),"Calling ",e.jsx("code",{className:"text-rose-300 font-mono",children:'f.write("Mamata")'})," and ",e.jsx("code",{className:"text-rose-300 font-mono",children:'f.write("Barrackpore")'})," produces ",e.jsx("code",{className:"text-slate-400 font-mono",children:'"MamataBarrackpore"'})," on a single line. Always append ",e.jsx("code",{className:"text-rose-300 font-mono",children:'"\\n"'})," explicitly!"]}),e.jsxs("div",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed space-y-1",children:[e.jsx("strong",{className:"text-rose-200 block",children:"• TypeError on Numeric Arguments:"}),"Calling ",e.jsx("code",{className:"text-rose-300 font-mono",children:"f.write(4500)"})," raises ",e.jsx("code",{className:"text-rose-300 font-mono",children:"TypeError: write() argument must be str, not int"}),". You must pass ",e.jsx("code",{className:"text-teal-300 font-mono",children:'f"{4500}\\n"'})," or ",e.jsx("code",{className:"text-teal-300 font-mono",children:"str(4500)"}),"."]}),e.jsxs("div",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed space-y-1",children:[e.jsx("strong",{className:"text-rose-200 block",children:"• Overwriting History with 'w' instead of 'a':"}),"Opening a transactional log with ",e.jsx("code",{className:"text-rose-300 font-mono",children:'open("log.txt", "w")'})," empties the file instantly. Always use ",e.jsx("code",{className:"text-emerald-300 font-mono",children:'"a"'})," for cumulative logs."]}),e.jsxs("div",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed space-y-1",children:[e.jsx("strong",{className:"text-rose-200 block",children:"• Assuming writelines() Adds Newlines:"}),e.jsx("code",{className:"text-rose-300 font-mono",children:'f.writelines(["A", "B"])'})," outputs ",e.jsx("code",{className:"text-slate-400 font-mono",children:'"AB"'}),". Pre-format items with ",e.jsx("code",{className:"text-teal-300 font-mono",children:'[f"{x}\\n" for x in items]'}),"."]})]}),e.jsxs("div",{className:"p-6 rounded-2xl bg-emerald-950/20 border border-emerald-900/40 space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-emerald-300 flex items-center gap-2",children:[e.jsx("span",{children:"✓"})," Production Engineering Standards"]}),e.jsxs("div",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed space-y-1",children:[e.jsx("strong",{className:"text-emerald-200 block",children:"• Always Use Context Managers:"}),"Always open files with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"with open(...) as f:"}),". This guarantees automatic buffer flushing and file descriptor release even during runtime exceptions."]}),e.jsxs("div",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed space-y-1",children:[e.jsx("strong",{className:"text-emerald-200 block",children:"• Explicit UTF-8 Encoding:"}),"Always pass ",e.jsx("code",{className:"text-emerald-300 font-mono",children:'encoding="utf-8"'}),". On Windows, omitting this defaults to ANSI/cp1252, causing crashes on Rupee (",e.jsx("code",{className:"text-amber-300 font-mono",children:"₹"}),") or Indian language text."]}),e.jsxs("div",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed space-y-1",children:[e.jsx("strong",{className:"text-emerald-200 block",children:"• Use Generators for Massive Datasets:"}),"Pass generator expressions ",e.jsx("code",{className:"text-emerald-300 font-mono",children:'f.writelines(f"{x}\\n" for x in big_data)'})," to prevent multi-gigabyte RAM allocation spikes."]}),e.jsxs("div",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed space-y-1",children:[e.jsx("strong",{className:"text-emerald-200 block",children:"• Crash-Proof Atomic Writes:"}),"For vital configs or databases, write to a temp file first and call ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"os.replace(temp_file, target)"})," for atomic replacement."]})]})]})]}),e.jsxs("section",{ref:a,className:"reveal-section max-w-5xl mx-auto mb-16 space-y-4",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-400",children:"💡"})," Pedagogical Hints & Mental Models"]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2",children:[e.jsx("span",{className:"text-indigo-300 font-bold block text-sm",children:"🤔 Think About..."}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Why does ",e.jsx("code",{className:"text-indigo-200 font-mono",children:'print("hi", file=f)'})," add a newline while ",e.jsx("code",{className:"text-indigo-200 font-mono",children:'f.write("hi")'})," does not? Because print is high-level output with default ",e.jsx("code",{className:"text-indigo-200 font-mono",children:'end="\\n"'}),", whereas write is a raw byte/character stream method."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2",children:[e.jsx("span",{className:"text-cyan-300 font-bold block text-sm",children:"🔍 Observe Carefully..."}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["What happens when you open in ",e.jsx("code",{className:"text-cyan-200 font-mono",children:"'w+'"})," vs ",e.jsx("code",{className:"text-cyan-200 font-mono",children:"'a+'"}),"? Both permit reading and writing, but ",e.jsx("code",{className:"text-rose-300 font-mono",children:"'w+'"})," wipes the file clean immediately on open, whereas ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"'a+'"})," keeps all history intact!"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/40 border border-amber-800/50 space-y-2",children:[e.jsx("span",{className:"text-amber-300 font-bold block text-sm",children:"⚡ Try Changing This..."}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:`In Lab 1 above, uncheck the "Include '\\n'" box and click "Call f.write" twice with different students. Notice how the second student's name attaches directly to the end of the previous line!`})]})]})]}),e.jsx("section",{ref:a,className:"reveal-section max-w-5xl mx-auto mb-16",children:e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/80 border border-teal-500/30 space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-teal-300 flex items-center gap-2",children:[e.jsx("span",{children:"📋"})," Student Mini Checklist: What You Must Remember"]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"☑"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-white",children:"write(str)"})," returns character count (int); ",e.jsx("strong",{className:"text-white",children:"writelines()"})," returns None."]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"☑"}),e.jsxs("span",{children:["Neither write() nor writelines() automatically injects ",e.jsx("strong",{className:"text-white",children:"\\n"}),"."]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"☑"}),e.jsxs("span",{children:["Mode ",e.jsx("strong",{className:"text-rose-300",children:"'w'"})," destroys existing content; mode ",e.jsx("strong",{className:"text-emerald-300",children:"'a'"})," appends at end."]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"☑"}),e.jsxs("span",{children:["Mode ",e.jsx("strong",{className:"text-amber-300",children:"'x'"})," prevents accidental overwrite by throwing ",e.jsx("code",{className:"text-amber-200",children:"FileExistsError"}),"."]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"☑"}),e.jsxs("span",{children:["Always specify ",e.jsx("strong",{className:"text-white",children:'encoding="utf-8"'})," for currency symbols (₹) and Indian text."]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"☑"}),e.jsxs("span",{children:["Use ",e.jsx("strong",{className:"text-white",children:"file.flush()"})," and ",e.jsx("strong",{className:"text-white",children:"os.fsync()"})," for mission-critical real-time streams."]})]})]})]})}),e.jsx("section",{ref:a,className:"reveal-section max-w-5xl mx-auto mb-16",children:e.jsx(ye,{title:"Writing Files: write(), writelines(), appending data FAQs",questions:ve,subtitle:"Master file writing with 30 comprehensive examination and interview questions",showPrint:!0,showExpandAll:!0,showSearch:!0,showProgress:!0})}),e.jsx("section",{ref:a,className:"reveal-section max-w-5xl mx-auto mb-16",children:e.jsx(je,{content:_e,title:"Writing Files: write(), writelines(), appending data",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic10_note.txt"})}),e.jsx("section",{ref:a,className:"reveal-section max-w-5xl mx-auto mb-16",children:e.jsx(be,{note:"Writing data to persistent storage is where your programs transition from ephemeral calculations to real-world software. Always remember: mode 'w' is destructive, mode 'a' is preservative, write() returns character count, and neither write() nor writelines() inserts newlines automatically. Master the 'with' statement and atomic write patterns early, and your production applications will never suffer from corrupted files or lost data!"})}),e.jsx("footer",{className:"max-w-5xl mx-auto pt-8 border-t border-slate-800 text-center text-xs text-slate-400",children:e.jsx("span",{children:"Topic 10 · Writing Files: write(), writelines(), appending data · Python Masterclass · Coder & AccoTax Barrackpore"})})]})]})};export{Le as default};
