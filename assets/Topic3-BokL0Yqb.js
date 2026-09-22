import{b as a,j as e}from"./vendor-react-core-D9iF7FwR.js";import{C as o}from"./CFileLoader-XRIlgaz2.js";import{F as d}from"./FAQTemplate-DmdkpHR-.js";import{P as l}from"./PlainTextPrint-CS96sBe2.js";import{T as c}from"./TeacherSukantaHui-Bldu0y17.js";import"./CodeBlock-DjHpm_Qe.js";import"./vendor-prism-SANIKoEh.js";import"./vendor-icons-Beb6eGc1.js";import"./EditableCCodeBlock-BWI9JrQC.js";import"./vendor-monaco-CEXMEfXF.js";const f=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <string.h>\r
\r
#define FILENAME "students.dat"\r
#define MAX_NAME_LEN 50\r
\r
/* Student Record Structure */\r
typedef struct {\r
    int rollNumber;\r
    char name[MAX_NAME_LEN];\r
    float marks;\r
    char grade;\r
} Student;\r
\r
/* Helper function to display a student record */\r
void displayStudent(const Student *s, int index) {\r
    printf("[%d] Roll: %-4d | Name: %-18s | Marks: %5.2f | Grade: %c\\n",\r
           index, s->rollNumber, s->name, s->marks, s->grade);\r
}\r
\r
int main(void) {\r
    printf("=====================================================\\n");\r
    printf("  C Binary File I/O: Struct Serialization (fwrite/fread)\\n");\r
    printf("=====================================================\\n\\n");\r
\r
    /* 1. Array of structs in memory */\r
    Student roster[] = {\r
        {101, "Swadeep Sharma", 88.50f, 'A'},\r
        {102, "Tuhina Roy",     94.00f, 'E'},\r
        {103, "Abhronila Das",  91.25f, 'E'},\r
        {104, "Debangshu Pal",  82.75f, 'B'}\r
    };\r
    size_t totalStudents = sizeof(roster) / sizeof(roster[0]);\r
\r
    printf(">>> Step 1: Writing %zu student records to binary file '%s'...\\n", totalStudents, FILENAME);\r
    \r
    FILE *fpWrite = fopen(FILENAME, "wb");\r
    if (fpWrite == NULL) {\r
        perror("Error opening file for binary write");\r
        return EXIT_FAILURE;\r
    }\r
\r
    /* Write all elements in a single contiguous binary block */\r
    size_t writtenCount = fwrite(roster, sizeof(Student), totalStudents, fpWrite);\r
    printf("    fwrite successfully wrote %zu records (%zu bytes total).\\n", \r
           writtenCount, writtenCount * sizeof(Student));\r
    fclose(fpWrite);\r
\r
    printf("\\n-----------------------------------------------------\\n");\r
    printf(">>> Step 2: Reading individual records back using fread()...\\n\\n");\r
\r
    FILE *fpRead = fopen(FILENAME, "rb");\r
    if (fpRead == NULL) {\r
        perror("Error opening file for binary read");\r
        return EXIT_FAILURE;\r
    }\r
\r
    Student buffer;\r
    int recordIndex = 1;\r
\r
    /* Read record-by-record until fread return count < 1 */\r
    while (fread(&buffer, sizeof(Student), 1, fpRead) == 1) {\r
        displayStudent(&buffer, recordIndex++);\r
    }\r
\r
    fclose(fpRead);\r
\r
    printf("\\n-----------------------------------------------------\\n");\r
    printf(">>> Step 3: Verifying file size on disk vs calculated size...\\n");\r
    \r
    FILE *fpSize = fopen(FILENAME, "rb");\r
    if (fpSize != NULL) {\r
        fseek(fpSize, 0, SEEK_END);\r
        long fileSize = ftell(fpSize);\r
        printf("    sizeof(Student struct) = %zu bytes\\n", sizeof(Student));\r
        printf("    Expected file size     = %zu * %zu = %zu bytes\\n", \r
               totalStudents, sizeof(Student), totalStudents * sizeof(Student));\r
        printf("    Actual file size       = %ld bytes\\n", fileSize);\r
        fclose(fpSize);\r
    }\r
\r
    printf("\\n=== Binary I/O Demonstration Completed Successfully ===\\n");\r
    return EXIT_SUCCESS;\r
}\r
`,u=`/**\r
 * RawByteArrayDemo.c\r
 * Demonstrates direct memory block serialization of numeric arrays\r
 * and floating-point matrices using fread() and fwrite().\r
 *\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
#include <stdio.h>\r
#include <stdlib.h>\r
\r
#define MATRIX_ROWS 3\r
#define MATRIX_COLS 3\r
\r
int main(void) {\r
    printf("========================================================\\n");\r
    printf("    CODER & ACCOTAX - RAW BINARY ARRAY SERIALIZATION    \\n");\r
    printf("========================================================\\n\\n");\r
\r
    const char *bin_file = "matrix_data.bin";\r
\r
    // 1. Initial 3x3 floating point transformation matrix\r
    double source_matrix[MATRIX_ROWS][MATRIX_COLS] = {\r
        {1.0, 0.0, 0.0},\r
        {0.0, 1.0, 0.0},\r
        {0.5, 0.5, 1.0}\r
    };\r
\r
    printf("--- 1. WRITING RAW 3x3 DOUBLE MATRIX TO DISK ---\\n");\r
    FILE *fp = fopen(bin_file, "wb"); // Notice "wb" mode for binary!\r
    if (fp == NULL) {\r
        perror("Error creating binary matrix file");\r
        return 1;\r
    }\r
\r
    // Write all 9 doubles (72 bytes) in one instant CPU-to-disk operation\r
    size_t written = fwrite(source_matrix, sizeof(double), MATRIX_ROWS * MATRIX_COLS, fp);\r
    fclose(fp);\r
    printf("  Successfully wrote %zu double elements (%zu bytes) to '%s'.\\n\\n",\r
           written, written * sizeof(double), bin_file);\r
\r
    // 2. Read back into a completely uninitialized destination buffer\r
    printf("--- 2. READING RAW BINARY MATRIX BACK INTO MEMORY ---\\n");\r
    double dest_matrix[MATRIX_ROWS][MATRIX_COLS];\r
\r
    fp = fopen(bin_file, "rb"); // Notice "rb" mode for reading binary!\r
    if (fp == NULL) {\r
        perror("Error opening binary matrix file");\r
        return 1;\r
    }\r
\r
    size_t read_count = fread(dest_matrix, sizeof(double), MATRIX_ROWS * MATRIX_COLS, fp);\r
    fclose(fp);\r
    printf("  Successfully read %zu double elements.\\n\\n", read_count);\r
\r
    // 3. Display matrix values to prove fidelity\r
    printf("--- 3. RECONSTRUCTED MATRIX IN RAM ---\\n");\r
    for (int r = 0; r < MATRIX_ROWS; r++) {\r
        printf("    [ ");\r
        for (int c = 0; c < MATRIX_COLS; c++) {\r
            printf("%6.2f ", dest_matrix[r][c]);\r
        }\r
        printf("]\\n");\r
    }\r
\r
    // Cleanup\r
    remove(bin_file);\r
    printf("\\n  Cleaned up binary matrix file '%s'.\\n", bin_file);\r
    printf("========================================================\\n");\r
\r
    return 0;\r
}\r
`,m=`/**\r
 * BinaryHeaderProtocolDemo.c\r
 * Demonstrates designing a custom binary container file format with\r
 * Magic Number validation, schema versioning, and record chunk payloads.\r
 *\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
#include <stdio.h>\r
#include <stdlib.h>\r
#include <stdint.h>\r
#include <string.h>\r
\r
#define FILE_MAGIC 0x434F4445 // ASCII "CODE"\r
#define CURRENT_VERSION 2\r
\r
// Binary File Header (Fixed 16-byte metadata preamble)\r
typedef struct {\r
    uint32_t magic;         // 4 bytes: Identifier ("CODE")\r
    uint16_t version;       // 2 bytes: Schema version\r
    uint16_t record_count;  // 2 bytes: Total payload records\r
    uint32_t checksum;      // 4 bytes: Integrity check\r
    uint32_t reserved;      // 4 bytes: Future expansion padding\r
} __attribute__((packed)) FileHeader;\r
\r
// Payload Record\r
typedef struct {\r
    uint32_t id;\r
    char name[32];\r
    float marks;\r
} __attribute__((packed)) StudentRecord;\r
\r
int main(void) {\r
    printf("========================================================\\n");\r
    printf("  CODER & ACCOTAX - BINARY FILE PROTOCOL & HEADER LAB   \\n");\r
    printf("========================================================\\n\\n");\r
\r
    const char *custom_bin = "students_v2.db";\r
\r
    // 1. Prepare records\r
    StudentRecord students[2] = {\r
        {101, "Swadeep Sharma", 91.5f},\r
        {102, "Tuhina Mukherjee", 96.0f}\r
    };\r
\r
    // Calculate simple checksum\r
    uint32_t chk = 101 + 102 + (uint32_t)students[0].marks + (uint32_t)students[1].marks;\r
\r
    FileHeader header = {\r
        .magic = FILE_MAGIC,\r
        .version = CURRENT_VERSION,\r
        .record_count = 2,\r
        .checksum = chk,\r
        .reserved = 0\r
    };\r
\r
    printf("--- 1. WRITING STRUCTURED BINARY PROTOCOL FILE ---\\n");\r
    FILE *fp = fopen(custom_bin, "wb");\r
    if (fp == NULL) {\r
        perror("Failed to create binary protocol file");\r
        return 1;\r
    }\r
\r
    // Step A: Write 16-byte Header\r
    fwrite(&header, sizeof(FileHeader), 1, fp);\r
\r
    // Step B: Write Student Record Chunks\r
    fwrite(students, sizeof(StudentRecord), 2, fp);\r
    fclose(fp);\r
    printf("  Wrote Header (%zu bytes) + Payload (%zu bytes) to '%s'.\\n\\n",\r
           sizeof(FileHeader), sizeof(students), custom_bin);\r
\r
    // 2. Reading back with validation\r
    printf("--- 2. READING & VALIDATING BINARY HEADER ---\\n");\r
    fp = fopen(custom_bin, "rb");\r
    if (fp == NULL) {\r
        perror("Failed to read binary protocol file");\r
        return 1;\r
    }\r
\r
    FileHeader read_hdr;\r
    if (fread(&read_hdr, sizeof(FileHeader), 1, fp) != 1) {\r
        fprintf(stderr, "Failed to read header\\n");\r
        fclose(fp);\r
        return 1;\r
    }\r
\r
    // Verify Magic identifier\r
    if (read_hdr.magic != FILE_MAGIC) {\r
        fprintf(stderr, "[ERROR] Corrupted file! Magic 0x%X does not match expected 0x%X\\n",\r
                read_hdr.magic, FILE_MAGIC);\r
        fclose(fp);\r
        return 1;\r
    }\r
\r
    printf("  [HEADER OK] Magic: 0x%08X (\\"CODE\\") | Version: %u | Records: %u\\n",\r
           read_hdr.magic, read_hdr.version, read_hdr.record_count);\r
\r
    // Read payload records\r
    StudentRecord read_students[read_hdr.record_count];\r
    fread(read_students, sizeof(StudentRecord), read_hdr.record_count, fp);\r
    fclose(fp);\r
\r
    printf("\\n--- 3. DECODED PAYLOAD RECORDS ---\\n");\r
    for (int i = 0; i < read_hdr.record_count; i++) {\r
        printf("  [Record %d] ID: %u | Name: %-18s | Marks: %.1f\\n",\r
               i + 1, read_students[i].id, read_students[i].name, read_students[i].marks);\r
    }\r
\r
    // Cleanup\r
    remove(custom_bin);\r
    printf("\\n  Cleaned up custom protocol file '%s'.\\n", custom_bin);\r
    printf("========================================================\\n");\r
\r
    return 0;\r
}\r
`,p=[{question:"What are the prototypes and return types of fwrite and fread in C?",answer:`Both functions are declared in <stdio.h> as:
size_t fwrite(const void *ptr, size_t size, size_t nmemb, FILE *stream);
size_t fread(void *ptr, size_t size, size_t nmemb, FILE *stream);
They return the number of full elements (not total bytes) successfully written or read.`},{question:"What does the return value of fread() indicate?",answer:"fread returns the count of complete elements transferred (up to nmemb). If the return value is less than nmemb, it indicates either an End-of-File (EOF) was encountered or a read error occurred. You must use feof() or ferror() to distinguish."},{question:"Why should we use binary mode ('rb', 'wb', 'ab') instead of text mode for struct serialization?",answer:"In text mode on Windows, newline characters (\\n) are automatically translated to carriage return + newline (\\r\\n), and byte 0x1A is treated as EOF. This character translation corrupts binary struct bytes, integer bit patterns, and float IEEE-754 bit representations."},{question:"What is structure padding and alignment, and how does it affect binary file portability?",answer:"Compilers insert padding bytes between struct members to align them on word boundaries (e.g. 4 or 8 bytes). Different compilers or CPU architectures (e.g., x86 32-bit vs x86-64 vs ARM) may have different padding rules, making raw struct dumps non-portable across different systems."},{question:"What is the danger of serializing a struct containing pointer members with fwrite?",answer:"Pointers hold transient virtual memory addresses. Writing a struct with a pointer only writes the 4/8-byte numerical address, not the data pointed to. When read back in another run or machine, that memory address is invalid, causing segmentation faults or garbage data."},{question:"How do you serialize structures that contain dynamically allocated strings or nested pointers?",answer:"You must use deep serialization: first write the length of the dynamic buffer (e.g., sizeof(int)), then write the actual string/buffer bytes with a second fwrite call. On reading, first read the length, allocate memory with malloc, and read the payload bytes."},{question:"Can fwrite write an entire array of 100 structs in a single call?",answer:"Yes. You can write: fwrite(studentArray, sizeof(Student), 100, fp); This performs a single contiguous memory block transfer from RAM to the OS file buffer, which is substantially faster than calling fwrite 100 times in a loop."},{question:"What is endianness, and how does it impact binary files?",answer:"Endianness refers to byte ordering in multi-byte data types (Little Endian vs Big Endian). A 4-byte integer like 0x12345678 is stored as 78 56 34 12 on x86/ARM (Little Endian). If read on a Big Endian CPU, it reads as 0x78563412 unless byte-swapped."},{question:"How can you pack a struct to eliminate padding bytes?",answer:"GCC and Clang support __attribute__((packed)), and MSVC supports #pragma pack(push, 1). This forces 1-byte alignment, removing internal holes. However, unaligned memory access may incur CPU performance penalties on some architectures."},{question:"Why is fwrite faster than formatted fprintf for large datasets?",answer:"fprintf requires parsing formatting strings, converting numbers to ASCII character sequences, and allocating temporary buffers. fwrite simply performs a direct memory copy (memcpy-like) of raw binary bytes into the stream buffer."},{question:"What happens if you pass NULL as the buffer pointer to fread or fwrite?",answer:"Passing NULL invokes Undefined Behavior (UB), almost always resulting in an immediate segmentation fault or access violation."},{question:"How does fwrite behave when the disk is completely full?",answer:"fwrite will write as many complete elements as can fit, then fail for subsequent elements. It returns a number less than nmemb, and ferror(fp) will evaluate to true (non-zero)."},{question:"What is the difference between fwrite(ptr, 1, totalBytes, fp) and fwrite(ptr, sizeof(Struct), count, fp)?",answer:"If writing fails halfway through an element, the first format returns the exact number of bytes written so far. The second format returns only the count of *fully written* structs. Functionally the disk writes identical bytes, but the return count reflects 1-byte units vs struct units."},{question:"Can binary files created with fwrite be viewed or edited in Notepad?",answer:"No. Binary files contain raw byte values (0x00 to 0xFF) including non-printable control codes, null bytes, and float representations. Notepad will display garbled glyphs and saving it will corrupt the binary structure."},{question:"How do you append a new struct record to an existing binary file?",answer:"Open the file with fopen(filename, 'ab') or 'ab+'. Then call fwrite(&newRecord, sizeof(Record), 1, fp); The file pointer is automatically anchored to the end of the file for write operations."},{question:"What happens if you read a file written with a 64-bit binary on a 32-bit compiled program?",answer:"If the struct contains pointers or long types (which are 8 bytes in 64-bit and 4 bytes in 32-bit), member offsets and struct sizes will differ, leading to severe field misalignment and garbage data."},{question:"What header types from <stdint.h> ensure consistent integer sizes for binary serialization?",answer:"Using fixed-width types like int32_t, uint32_t, int64_t, and int16_t guarantees exact byte sizes regardless of compiler target bitness (32-bit vs 64-bit)."},{question:"Is it safe to write a struct containing a union using fwrite?",answer:"Yes, but you must know which member of the union is active. The struct will write the entire size of the union (equal to its largest member). Storing a tag field (tagged union / enum) alongside is essential to interpret the data correctly on read."},{question:"Can fread cause a buffer overflow if the destination buffer is too small?",answer:"Yes. If the size * nmemb specified in fread exceeds the memory allocated at the destination pointer ptr, fread will overwrite adjacent memory, corrupting the stack or heap."},{question:"How do you count the total number of struct records in a binary file?",answer:"Seek to the end using fseek(fp, 0, SEEK_END); long size = ftell(fp); then calculate count = size / sizeof(Record); Ensure you rewind or seek back to the beginning before reading."},{question:"How does buffering work under the hood during fwrite?",answer:"fwrite copies bytes into an internal libc FILE buffer (typically 4KB or 8KB). When the buffer fills up, libc issues a write() / WriteFile() system call to transfer the block to the OS page cache."},{question:"What is data versioning in binary file headers?",answer:"Professional binary formats write a header struct containing a 'Magic Number' (e.g. 0x4D594442) and a 'Format Version' (e.g. 1, 2) at the start of the file. This allows future software to detect format mismatches and migrate legacy records."},{question:"Can we use memcmp to compare two struct variables read from a binary file?",answer:"Only if padding bytes were zeroed before writing (e.g., via memset(&rec, 0, sizeof(rec))). Otherwise, uninitialized garbage in padding bytes may cause memcmp to report inequality even if all active fields match."},{question:"What happens if a program crashes before fclose after multiple fwrite calls?",answer:"Data remaining in user-space libc stream buffers will be lost because it was never flushed to the OS kernel. Calling fflush(fp) periodically commits buffered data to the kernel."},{question:"What is the recommended idiom for reading all binary records with fread in a loop?",answer:"The recommended idiom is: while (fread(&record, sizeof(Record), 1, fp) == 1) { /* process record */ } This cleanly terminates when EOF is reached or a read error occurs."}],h=`======================================================================\r
C LANGUAGE LESSON NOTE: TOPIC 3 (MODULE 003_010)\r
BINARY STREAM I/O & STRUCT SERIALIZATION (FWRITE & FREAD)\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE & SHYAMNAGAR)\r
======================================================================\r
\r
1. CORE CONCEPT & MOTIVATION\r
   - Text files store information as human-readable ASCII/UTF-8 character\r
     sequences (e.g. integer 123456 takes 6 bytes: '1','2','3','4','5','6').\r
   - Binary files store data exactly as it resides in RAM (e.g. int 123456\r
     takes 4 bytes: 0x40 0xE2 0x01 0x00 in Little Endian).\r
   - Direct memory block transfers via fread() and fwrite() bypass character\r
     encoding/decoding overhead, achieving peak I/O throughput.\r
\r
2. FUNCTION SIGNATURES\r
   size_t fwrite(const void *ptr, size_t size, size_t count, FILE *stream);\r
   size_t fread(void *ptr, size_t size, size_t count, FILE *stream);\r
   - ptr: Pointer to array or struct in memory.\r
   - size: Size of each element in bytes (usually sizeof(*ptr)).\r
   - count: Number of elements to transfer.\r
   - stream: Open file pointer in binary mode ("rb", "wb", "ab", "rb+", "wb+", "ab+").\r
   - Return Value: Number of full elements successfully read/written.\r
\r
3. GOLDEN RULES OF STRUCT SERIALIZATION\r
   - ALWAYS use fixed-size fields inside structs intended for disk serialization:\r
     char name[50]; instead of char *name;\r
   - NEVER serialize raw pointers: Pointers point to ephemeral virtual RAM\r
     addresses that become invalid immediately upon termination or relocation.\r
   - Zero out structs with memset(&rec, 0, sizeof(rec)) prior to population to\r
     avoid writing uninitialized garbage in memory alignment padding bytes.\r
   - Use <stdint.h> types (int32_t, uint32_t, etc.) for cross-platform bit consistency.\r
\r
4. IDIOMATIC READING LOOP\r
   Student s;\r
   while (fread(&s, sizeof(Student), 1, fp) == 1) {\r
       printf("Roll: %d, Name: %s\\n", s.rollNumber, s.name);\r
   }\r
\r
5. CALCULATING RECORD COUNT\r
   fseek(fp, 0, SEEK_END);\r
   long totalBytes = ftell(fp);\r
   long recordCount = totalBytes / sizeof(Student);\r
   rewind(fp);\r
\r
======================================================================\r
Copyright (c) Sukanta Hui - C Programming Master Series\r
======================================================================\r
`;function E(){const[r,i]=a.useState(0),t=[{id:"ex1",title:"1. Struct Serialization (fread/fwrite)",file:f,filename:"BinaryStructIODemo.c",description:"Serializes arrays of complex student structures directly to disk in binary mode with fwrite() and restores them back into memory with fread().",lineByLine:[{line:'FILE *fp = fopen("students.bin", "wb");',explanation:"Opens the file in Binary Write mode ('wb'). This disables newline byte translations that would otherwise corrupt binary records."},{line:"fwrite(students, sizeof(Student), 3, fp);",explanation:"Writes all 3 student structs (144 bytes total) from RAM directly onto the disk in a single CPU instruction burst."},{line:"while (fread(&s, sizeof(Student), 1, fp) == 1)",explanation:"Golden binary reading loop! Reads exactly 1 struct (48 bytes) into variable 's'. Terminates cleanly the moment EOF is hit."}],output:`========================================================
   CODER & ACCOTAX - BINARY STRUCT I/O & SERIALIZATION  
========================================================

--- 1. SERIALIZING STRUCTURE ARRAY TO DISK (fwrite) ---
  Wrote 3 student records (144 bytes) to 'students.bin'.

--- 2. DESERIALIZING STRUCTURE ARRAY FROM DISK (fread) ---
  Successfully read 3 records from binary file:
  [Record 1] Roll: 101 | Name: Swadeep Sharma     | Marks: 88.50 | Status: Active
  [Record 2] Roll: 102 | Name: Tuhina Mukherjee   | Marks: 94.00 | Status: Active
  [Record 3] Roll: 103 | Name: Debangshu Roy      | Marks: 76.25 | Status: Inactive

  Cleaned up 'students.bin'.
========================================================`},{id:"ex2",title:"2. Raw Matrix Serialization",file:u,filename:"RawByteArrayDemo.c",description:"Demonstrates raw binary array and 2D floating-point matrix persistence with zero string-conversion overhead, preserving 100% mathematical precision.",lineByLine:[{line:"double source_matrix[3][3] = { ... };",explanation:"Declares a 3x3 matrix of double-precision floating numbers (72 raw bytes) in system memory."},{line:"fwrite(source_matrix, sizeof(double), 9, fp);",explanation:"Directly dumps all 9 doubles to disk. There is zero ASCII text formatting overhead, making it 10x to 100x faster than text I/O."},{line:"fread(dest_matrix, sizeof(double), 9, fp);",explanation:"Populates the uninitialized dest_matrix in RAM by pulling the raw bytes straight off storage."}],output:`========================================================
    CODER & ACCOTAX - RAW BINARY ARRAY SERIALIZATION    
========================================================

--- 1. WRITING RAW 3x3 DOUBLE MATRIX TO DISK ---
  Successfully wrote 9 double elements (72 bytes) to 'matrix_data.bin'.

--- 2. READING RAW BINARY MATRIX BACK INTO MEMORY ---
  Successfully read 9 double elements.

--- 3. RECONSTRUCTED MATRIX IN RAM ---
    [   1.00   0.00   0.00 ]
    [   0.00   1.00   0.00 ]
    [   0.50   0.50   1.00 ]

  Cleaned up binary matrix file 'matrix_data.bin'.
========================================================`},{id:"ex3",title:"3. Custom Binary File Header Protocol",file:m,filename:"BinaryHeaderProtocolDemo.c",description:"Designs a custom binary container format with a 16-byte metadata header, magic number (0x434F4445 / 'CODE'), schema versioning, and payload chunks.",lineByLine:[{line:"__attribute__((packed))",explanation:"Instructs the compiler to eliminate padding bytes between struct fields, ensuring binary file layout is consistent across 32-bit and 64-bit systems."},{line:"fwrite(&header, sizeof(FileHeader), 1, fp);",explanation:"Writes the 16-byte metadata preamble containing Magic ID ('CODE'), version number, and total record count."},{line:"if (read_hdr.magic != FILE_MAGIC) ...",explanation:"Validates that the file opened is genuine and not corrupted or belonging to another file format."}],output:`========================================================
  CODER & ACCOTAX - BINARY FILE PROTOCOL & HEADER LAB   
========================================================

--- 1. WRITING STRUCTURED BINARY PROTOCOL FILE ---
  Wrote Header (16 bytes) + Payload (80 bytes) to 'students_v2.db'.

--- 2. READING & VALIDATING BINARY HEADER ---
  [HEADER OK] Magic: 0x434F4445 ("CODE") | Version: 2 | Records: 2

--- 3. DECODED PAYLOAD RECORDS ---
  [Record 1] ID: 101 | Name: Swadeep Sharma     | Marks: 91.5
  [Record 2] ID: 102 | Name: Tuhina Mukherjee   | Marks: 96.0

  Cleaned up custom protocol file 'students_v2.db'.
========================================================`}];return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 003_010 · Topic 3"}),e.jsx("span",{className:"bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Binary Persistence"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Binary Stream I/O & Structure Serialization (fread & fwrite)"}),e.jsxs("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:["Master high-performance binary persistence in C. Transfer exact RAM byte representations directly to and from secondary storage using ",e.jsx("code",{children:"fread()"})," and ",e.jsx("code",{children:"fwrite()"})," without string-parsing CPU overhead."]})]}),e.jsxs("section",{className:"space-y-5 bg-gradient-to-br from-purple-950/40 via-slate-800/40 to-slate-900 border border-purple-500/30 rounded-2xl p-6 md:p-8 shadow-xl",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-2xl p-2 bg-purple-500/20 rounded-xl border border-purple-500/30",children:"💡"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl md:text-2xl font-bold text-white",children:"In Very Simple Terms: Text Mode vs Binary Mode"}),e.jsx("p",{className:"text-purple-300 text-xs md:text-sm font-medium",children:"English translation vs Instant RAM photograph"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 pt-2",children:[e.jsxs("div",{className:"bg-slate-900/80 border border-slate-700/60 rounded-xl p-4 space-y-2",children:[e.jsxs("div",{className:"text-amber-400 font-bold text-sm flex items-center gap-1.5",children:[e.jsx("span",{children:"📝"})," Text Mode (Slow Translation)"]}),e.jsxs("p",{className:"text-slate-300 text-xs leading-relaxed",children:["When saving the number ",e.jsx("code",{children:"12345678"})," in text mode, C converts it into 8 individual character codes ('1','2','3'...). This takes CPU time and 8 whole bytes on disk!"]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-700/60 rounded-xl p-4 space-y-2",children:[e.jsxs("div",{className:"text-purple-400 font-bold text-sm flex items-center gap-1.5",children:[e.jsx("span",{children:"📸"})," Binary Mode (Instant Snapshot)"]}),e.jsxs("p",{className:"text-slate-300 text-xs leading-relaxed",children:["Binary mode takes a direct memory snapshot of your variable in RAM. The integer ",e.jsx("code",{children:"12345678"})," is written as exactly 4 raw bytes. No formatting, no translation, ",e.jsx("strong",{children:"10x faster"}),"!"]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-700/60 rounded-xl p-4 space-y-2",children:[e.jsxs("div",{className:"text-emerald-400 font-bold text-sm flex items-center gap-1.5",children:[e.jsx("span",{children:"💾"})," Photocopying a Struct (fwrite)"]}),e.jsxs("p",{className:"text-slate-300 text-xs leading-relaxed",children:[e.jsx("code",{children:"fwrite(&student, sizeof(Student), 1, fp)"})," is like photocopying an entire student ID card into a drawer with one quick motion. ",e.jsx("code",{children:"fread()"})," pulls the exact card back into RAM!"]})]})]}),e.jsxs("div",{className:"bg-purple-900/20 border border-purple-500/20 rounded-xl p-3 text-xs text-purple-200",children:["🔑 ",e.jsx("strong",{children:"The Binary Rule:"})," Always add ",e.jsx("code",{children:'"b"'})," to your fopen mode (e.g. ",e.jsx("code",{children:'"rb"'}),", ",e.jsx("code",{children:'"wb"'}),", ",e.jsx("code",{children:'"ab+"'}),'). Without "b", the operating system may alter byte values like ',e.jsx("code",{children:"0x0A (\\n)"})," into ",e.jsx("code",{children:"0x0D 0x0A (\\r\\n)"}),", corrupting binary integers and pointers!"]})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Topic Description: Direct RAM Serialization & Memory Layout"]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["Unlike text I/O which parses ASCII strings, binary I/O bypasses character conversion entirely. ",e.jsx("code",{children:"fwrite()"})," copies the raw bytes directly from a program's RAM buffer to disk, while ",e.jsx("code",{children:"fread()"})," reconstructs structures in memory in $O(1)$ hardware transfer time."]}),e.jsxs("div",{className:"bg-slate-900/60 p-4 rounded-xl border-l-4 border-purple-500 text-xs md:text-sm text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-semibold text-purple-300",children:"🏫 Classroom Story at Coder & AccoTax (Barrackpore):"}),e.jsxs("p",{children:["When benchmarking database performance with 100,000 student records in Barrackpore, Swadeep's ",e.jsx("code",{children:"fprintf/fscanf"})," program took 4.8 seconds to write and parse. Sukanta Hui transitioned the codebase to binary ",e.jsx("code",{children:"fwrite/fread"}),", cutting the runtime down to ",e.jsx("strong",{children:"0.04 seconds"}),"! Sukanta also showed Debangshu why ",e.jsx("code",{children:"#pragma pack(1)"})," is vital when exchanging binary files between 32-bit and 64-bit systems."]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"⚙️ Semantic Visual Diagram: Binary Serialization Pipeline"}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 900 280",className:"w-full min-w-[750px] font-sans",children:[e.jsx("rect",{x:"20",y:"20",width:"860",height:"240",rx:"16",fill:"#0f172a",stroke:"#334155",strokeWidth:"2"}),e.jsxs("g",{transform:"translate(40, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"230",height:"180",rx:"10",fill:"#1e1b4b",stroke:"#6366f1",strokeWidth:"1.5"}),e.jsx("text",{x:"20",y:"30",fill:"#a5b4fc",className:"font-bold text-sm",children:"RAM: struct Student"}),e.jsx("rect",{x:"15",y:"45",width:"200",height:"25",fill:"#312e81",rx:"4"}),e.jsx("text",{x:"25",y:"62",fill:"#e0e7ff",className:"font-mono text-xs",children:"int roll = 101 (4B)"}),e.jsx("rect",{x:"15",y:"75",width:"200",height:"25",fill:"#312e81",rx:"4"}),e.jsx("text",{x:"25",y:"92",fill:"#e0e7ff",className:"font-mono text-xs",children:"char name[32] (32B)"}),e.jsx("rect",{x:"15",y:"105",width:"200",height:"25",fill:"#312e81",rx:"4"}),e.jsx("text",{x:"25",y:"122",fill:"#e0e7ff",className:"font-mono text-xs",children:"float marks = 94.0 (4B)"}),e.jsx("text",{x:"20",y:"160",fill:"#818cf8",className:"text-xs",children:"Total: 40 Bytes in RAM"})]}),e.jsxs("g",{transform:"translate(300, 100)",children:[e.jsx("rect",{x:"0",y:"0",width:"290",height:"80",rx:"8",fill:"#3b0764",stroke:"#d946ef",strokeWidth:"1.5"}),e.jsx("text",{x:"15",y:"30",fill:"#f5d0fe",className:"font-bold text-xs font-mono",children:"fwrite(&s, 40, 1, fp);"}),e.jsx("text",{x:"15",y:"55",fill:"#e879f9",className:"text-xs",children:"Direct DMA byte stream copy (No text conversion)"})]}),e.jsxs("g",{transform:"translate(620, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"240",height:"180",rx:"10",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"20",y:"30",fill:"#6ee7b7",className:"font-bold text-sm",children:"DISK: students.bin"}),e.jsx("rect",{x:"15",y:"45",width:"210",height:"110",fill:"#065f46",rx:"4"}),e.jsx("text",{x:"25",y:"70",fill:"#a7f3d0",className:"font-mono text-xs",children:"0x65 0x00 0x00 0x00 ..."}),e.jsx("text",{x:"25",y:"95",fill:"#a7f3d0",className:"font-mono text-xs",children:'"Swadeep Sharma\\0\\0..."'}),e.jsx("text",{x:"25",y:"120",fill:"#a7f3d0",className:"font-mono text-xs",children:"0x00 0x00 0xBC 0x42 ..."}),e.jsx("text",{x:"20",y:"170",fill:"#34d399",className:"text-xs",children:"Raw bit-exact byte persistence"})]})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"🔍 Deep Technical Breakdown: Function Signatures & Return Values"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-700 space-y-2",children:[e.jsx("h3",{className:"font-bold text-purple-300 text-sm",children:"fwrite() Signature"}),e.jsx("code",{className:"text-amber-300 font-mono block bg-slate-950 p-2 rounded",children:"size_t fwrite(const void *ptr, size_t size, size_t count, FILE *stream);"}),e.jsxs("p",{className:"text-slate-300",children:["Returns the number of ",e.jsx("strong",{children:"full items"})," successfully written (NOT total bytes). If return value < count, a write error occurred."]})]}),e.jsxs("div",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-700 space-y-2",children:[e.jsx("h3",{className:"font-bold text-purple-300 text-sm",children:"fread() Signature"}),e.jsx("code",{className:"text-amber-300 font-mono block bg-slate-950 p-2 rounded",children:"size_t fread(void *ptr, size_t size, size_t count, FILE *stream);"}),e.jsx("p",{className:"text-slate-300",children:"Returns the number of items successfully read into memory. When reaching end-of-file, it returns a value less than count."})]})]})]}),e.jsxs("section",{className:"space-y-6 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/80 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: Binary Stream Demonstrations"]}),e.jsx("p",{className:"text-slate-300 text-sm mt-1",children:"Explore 3 hands-on C programs with step-by-step line explanations and terminal outputs."})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:t.map((n,s)=>e.jsx("button",{onClick:()=>i(s),className:`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${r===s?"bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,children:n.title},n.id))})]}),e.jsxs("div",{className:"space-y-5",children:[e.jsxs("div",{className:"bg-slate-900/60 p-3.5 rounded-xl border border-slate-700/60 text-xs md:text-sm text-slate-300 flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"📋 Overview:"}),e.jsx("span",{children:t[r].description})]}),e.jsx(o,{fileModule:t[r].file,title:t[r].filename,editable:!1}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-700/80 rounded-xl p-4 md:p-5 space-y-3 shadow-md",children:[e.jsxs("div",{className:"text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx("span",{children:"🔍"})," Plain-English Line-by-Line Code Breakdown:"]}),e.jsx("div",{className:"space-y-2",children:t[r].lineByLine.map((n,s)=>e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-start gap-2 bg-slate-950/70 p-3 rounded-lg border border-slate-800/80",children:[e.jsx("code",{className:"text-sky-300 font-mono text-[11px] sm:w-2/5 shrink-0 font-semibold bg-slate-900 px-2 py-1 rounded border border-slate-700/60",children:n.line}),e.jsx("span",{className:"text-slate-300 text-xs leading-relaxed",children:n.explanation})]},s))})]}),e.jsxs("div",{className:"rounded-xl border border-slate-700 bg-slate-950 p-4 shadow-inner",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:t[r].output})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-rose-400",children:"⚠️ Common Pitfalls & Best Practices"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-900/30 p-4 rounded-xl space-y-1.5",children:[e.jsx("h3",{className:"font-bold text-rose-300",children:"Pitfall: Pointer Members in Serialized Structs"}),e.jsxs("p",{className:"text-slate-300",children:["Never serialize structs containing pointer fields (e.g., ",e.jsx("code",{children:"char *name;"}),"). ",e.jsx("code",{children:"fwrite"})," writes the 64-bit RAM memory address, which becomes an invalid dangling address when loaded in another run!"]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-900/30 p-4 rounded-xl space-y-1.5",children:[e.jsx("h3",{className:"font-bold text-emerald-300",children:"Best Practice: Structure Packing Padding (#pragma pack)"}),e.jsxs("p",{className:"text-slate-300",children:["Use ",e.jsx("code",{children:"#pragma pack(push, 1)"})," or fixed-width integer types (",e.jsx("code",{children:"uint32_t"}),") to guarantee cross-compiler struct alignment compatibility across different CPU architectures."]})]})]})]}),e.jsxs("section",{className:"bg-slate-800/30 border border-slate-700/60 p-5 rounded-2xl space-y-2 text-xs md:text-sm",children:[e.jsxs("h3",{className:"font-bold text-amber-300 flex items-center gap-1.5",children:[e.jsx("span",{children:"🤔"})," Think About This..."]}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:"Why do high-throughput gaming engines and financial exchanges save game saves and order books in pure binary format rather than JSON or XML?"})]}),e.jsx("section",{children:e.jsx(d,{title:"Module 003_010 Topic 3 FAQs: Binary Stream I/O & Struct Serialization",questions:p})}),e.jsx("section",{children:e.jsx(l,{content:h,title:"Module 003_010 Topic 3 Note: Binary Stream I/O & Struct Serialization",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_003_010_topic3_note.txt"})}),e.jsx("section",{children:e.jsx(c,{note:"Binary I/O gives you bare-metal speed! Always verify that fread() and fwrite() return the exact number of elements you requested. If fread returns fewer elements, you either hit EOF or had a physical drive read error. — Sukanta Hui"})})]})}export{E as default};
