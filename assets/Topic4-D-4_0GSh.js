import{b as a,j as e}from"./vendor-react-core-C47mfheO.js";import{C as o}from"./CFileLoader-K-gLT-g8.js";import{F as d}from"./FAQTemplate-D7324Ho6.js";import{P as l}from"./PlainTextPrint-COK-Ppq5.js";import{T as f}from"./TeacherSukantaHui-B_XsiBS9.js";import"./CodeBlock-CA27l_DN.js";import"./vendor-prism-BKuZ5wk-.js";import"./vendor-icons-Ca1ERgfs.js";import"./EditableCCodeBlock-C06U-BX9.js";import"./vendor-monaco-Bq9GhMe9.js";const c=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <string.h>\r
\r
#define DB_FILE "inventory.dat"\r
#define NAME_LEN 40\r
\r
/* Item Structure representing an inventory record */\r
typedef struct {\r
    int id;\r
    char name[NAME_LEN];\r
    int quantity;\r
    double price;\r
} Item;\r
\r
/* Helper to print an item */\r
void printItem(const Item *item, long recordNum, long byteOffset) {\r
    printf("Record #%-2ld (Offset %4ld bytes) -> ID: %-4d | %-20s | Qty: %-4d | Price: $%-7.2f\\n",\r
           recordNum, byteOffset, item->id, item->name, item->quantity, item->price);\r
}\r
\r
int main(void) {\r
    printf("=====================================================\\n");\r
    printf("  C Random Access File Positioning: fseek, ftell, rewind\\n");\r
    printf("=====================================================\\n\\n");\r
\r
    /* Initial dataset of 5 items */\r
    Item stock[] = {\r
        {1001, "Mechanical Keyboard", 45, 89.99},\r
        {1002, "Wireless Mouse",      120, 29.50},\r
        {1003, "4K UHD Monitor",      18, 349.00},\r
        {1004, "USB-C Hub Multiport", 85, 45.00},\r
        {1005, "Noise-Canceling Headset", 32, 129.95}\r
    };\r
    int totalRecords = sizeof(stock) / sizeof(stock[0]);\r
\r
    /* Step 1: Initialize database file with binary write */\r
    FILE *fp = fopen(DB_FILE, "wb+");\r
    if (fp == NULL) {\r
        perror("Error creating database file");\r
        return EXIT_FAILURE;\r
    }\r
\r
    fwrite(stock, sizeof(Item), totalRecords, fp);\r
    printf(">>> Initialized '%s' with %d records. Total File Size: %ld bytes.\\n\\n",\r
           DB_FILE, totalRecords, ftell(fp));\r
\r
    /* Step 2: Randomly read Record #3 (0-indexed index 2: 4K UHD Monitor) using SEEK_SET */\r
    int targetIndex = 2;\r
    long byteOffset = (long)(targetIndex * sizeof(Item));\r
    fseek(fp, byteOffset, SEEK_SET);\r
\r
    Item retrieved;\r
    fread(&retrieved, sizeof(Item), 1, fp);\r
    printf(">>> Jumped via SEEK_SET to byte %ld:\\n", byteOffset);\r
    printItem(&retrieved, targetIndex, byteOffset);\r
\r
    /* Step 3: Relative seek forward using SEEK_CUR */\r
    /* Current position is now at index 3 (after reading index 2).\r
       Let's jump +1 record forward to index 4 (last record). */\r
    fseek(fp, 0 * (long)sizeof(Item), SEEK_CUR); /* stays at index 3 */\r
    fseek(fp, 1 * (long)sizeof(Item), SEEK_CUR); /* skips index 3 to index 4 */\r
    long curPos = ftell(fp);\r
    fread(&retrieved, sizeof(Item), 1, fp);\r
    printf("\\n>>> Jumped +1 record forward via SEEK_CUR (offset %ld):\\n", curPos);\r
    printItem(&retrieved, 4, curPos);\r
\r
    /* Step 4: Seek from End using SEEK_END to read the last record directly */\r
    fseek(fp, -(long)sizeof(Item), SEEK_END);\r
    long endPos = ftell(fp);\r
    fread(&retrieved, sizeof(Item), 1, fp);\r
    printf("\\n>>> Jumped -sizeof(Item) from SEEK_END (offset %ld):\\n", endPos);\r
    printItem(&retrieved, totalRecords - 1, endPos);\r
\r
    /* Step 5: In-place update of Record #2 (Wireless Mouse: ID 1002) */\r
    int updateIndex = 1;\r
    long updateOffset = (long)(updateIndex * sizeof(Item));\r
    fseek(fp, updateOffset, SEEK_SET);\r
    fread(&retrieved, sizeof(Item), 1, fp);\r
\r
    printf("\\n>>> Updating Record #%d in-place:\\n", updateIndex);\r
    printf("    Before update -> Qty: %d, Price: $%.2f\\n", retrieved.quantity, retrieved.price);\r
\r
    /* Modify in RAM */\r
    retrieved.quantity += 50;   /* received fresh shipment */\r
    retrieved.price = 24.99;    /* promotional discount */\r
\r
    /* Move file pointer back to record position to overwrite */\r
    fseek(fp, updateOffset, SEEK_SET);\r
    fwrite(&retrieved, sizeof(Item), 1, fp);\r
    fflush(fp);\r
\r
    /* Step 6: Rewind and display entire updated file */\r
    printf("\\n-----------------------------------------------------\\n");\r
    printf(">>> Rewinding file with rewind() and displaying full database:\\n\\n");\r
    rewind(fp);\r
\r
    long recCount = 0;\r
    while (fread(&retrieved, sizeof(Item), 1, fp) == 1) {\r
        printItem(&retrieved, recCount, (long)(recCount * sizeof(Item)));\r
        recCount++;\r
    }\r
\r
    fclose(fp);\r
    printf("\\n=== Random Access Operations Completed Successfully ===\\n");\r
    return EXIT_SUCCESS;\r
}\r
`,p=`/**\r
 * FileReverseReaderDemo.c\r
 * Demonstrates random-access seeking from the end of a file (SEEK_END)\r
 * using negative byte offsets with fseek() to read characters and lines in reverse.\r
 *\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
#include <stdio.h>\r
#include <stdlib.h>\r
\r
int main(void) {\r
    printf("========================================================\\n");\r
    printf("   CODER & ACCOTAX - REVERSE FILE SEEKING LAB           \\n");\r
    printf("========================================================\\n\\n");\r
\r
    const char *text_file = "reverse_sample.txt";\r
\r
    // 1. Create a sample text file\r
    FILE *fp = fopen(text_file, "w");\r
    if (fp == NULL) {\r
        perror("Error creating file");\r
        return 1;\r
    }\r
\r
    fputs("BARRACKPORE_SYSTEMS_LAB_2026", fp);\r
    fclose(fp);\r
\r
    // 2. Open and inspect total file size using ftell and SEEK_END\r
    fp = fopen(text_file, "r");\r
    if (fp == NULL) {\r
        perror("Error opening file for reverse reading");\r
        return 1;\r
    }\r
\r
    // Seek to the end of the file\r
    fseek(fp, 0, SEEK_END);\r
    long file_size = ftell(fp);\r
    printf("--- 1. FILE SIZE INSPECTION ---\\n");\r
    printf("  Target File : '%s'\\n", text_file);\r
    printf("  Total Size  : %ld bytes\\n\\n", file_size);\r
\r
    // 3. Read backward character by character\r
    printf("--- 2. READING CHARACTERS IN REVERSE ORDER ---\\n");\r
    printf("  Reverse Output: ");\r
\r
    for (long offset = 1; offset <= file_size; offset++) {\r
        // Move backward from SEEK_END\r
        fseek(fp, -offset, SEEK_END);\r
        int ch = fgetc(fp);\r
        if (ch != EOF) {\r
            putchar(ch);\r
        }\r
    }\r
    printf("\\n\\n");\r
\r
    // 4. Demonstrate rewind()\r
    printf("--- 3. RESETTING TO START WITH rewind() ---\\n");\r
    rewind(fp);\r
    printf("  After rewind(), ftell() position = %ld (Byte 0)\\n", ftell(fp));\r
    char first_ten[11] = {0};\r
    fread(first_ten, sizeof(char), 10, fp);\r
    printf("  First 10 characters: \\"%s\\"\\n", first_ten);\r
\r
    fclose(fp);\r
\r
    // Cleanup\r
    remove(text_file);\r
    printf("\\n  Cleaned up temporary file '%s'.\\n", text_file);\r
    printf("========================================================\\n");\r
\r
    return 0;\r
}\r
`,h=`/**\r
 * InPlaceRecordModifierDemo.c\r
 * Demonstrates high-speed random access record mutation on disk.\r
 * Modifies an arbitrary record in place without reading or rewriting\r
 * the remaining file contents.\r
 *\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
#include <stdio.h>\r
#include <stdlib.h>\r
#include <string.h>\r
\r
typedef struct {\r
    int id;\r
    char name[32];\r
    int score;\r
    char grade;\r
} StudentItem;\r
\r
void print_all_records(const char *filename) {\r
    FILE *fp = fopen(filename, "rb");\r
    if (fp == NULL) return;\r
\r
    StudentItem s;\r
    int index = 0;\r
    while (fread(&s, sizeof(StudentItem), 1, fp) == 1) {\r
        printf("  [Slot %d] ID: %d | Name: %-16s | Score: %3d | Grade: %c\\n",\r
               index++, s.id, s.name, s.score, s.grade);\r
    }\r
    fclose(fp);\r
}\r
\r
int main(void) {\r
    printf("========================================================\\n");\r
    printf("  CODER & ACCOTAX - IN-PLACE RECORD MODIFIER LAB        \\n");\r
    printf("========================================================\\n\\n");\r
\r
    const char *db_file = "students_db.bin";\r
\r
    // 1. Initialize binary file with 4 records\r
    StudentItem initial_data[4] = {\r
        {101, "Swadeep", 85, 'B'},\r
        {102, "Tuhina", 92, 'A'},\r
        {103, "Abhronila", 88, 'B'},\r
        {104, "Debangshu", 74, 'C'}\r
    };\r
\r
    FILE *fp = fopen(db_file, "wb");\r
    if (fp == NULL) {\r
        perror("Error creating database file");\r
        return 1;\r
    }\r
    fwrite(initial_data, sizeof(StudentItem), 4, fp);\r
    fclose(fp);\r
\r
    printf("--- 1. INITIAL DATABASE RECORDS ---\\n");\r
    print_all_records(db_file);\r
\r
    // 2. Perform in-place update of Slot 2 (Abhronila's re-evaluation)\r
    printf("\\n--- 2. UPDATING SLOT 2 (Abhronila) IN-PLACE VIA fseek() ---\\n");\r
    fp = fopen(db_file, "rb+"); // Read + Write binary\r
    if (fp == NULL) {\r
        perror("Error opening database in rb+ mode");\r
        return 1;\r
    }\r
\r
    int target_slot = 2; // 0-indexed\r
    long byte_offset = target_slot * sizeof(StudentItem);\r
\r
    // Seek directly to slot 2 in O(1) time\r
    fseek(fp, byte_offset, SEEK_SET);\r
\r
    // Read existing record\r
    StudentItem target;\r
    fread(&target, sizeof(StudentItem), 1, fp);\r
    printf("  Before: Name: %s, Score: %d, Grade: %c\\n", target.name, target.score, target.grade);\r
\r
    // Update fields in memory\r
    target.score = 98;\r
    target.grade = 'A';\r
\r
    // Seek back to the start of this slot before overwriting!\r
    fseek(fp, byte_offset, SEEK_SET);\r
\r
    // Write updated struct in-place\r
    fwrite(&target, sizeof(StudentItem), 1, fp);\r
    fclose(fp);\r
    printf("  After : Name: %s, Score: %d, Grade: %c\\n", target.name, target.score, target.grade);\r
    printf("  [SUCCESS] Overwrote slot %d at byte offset %ld directly on disk!\\n",\r
           target_slot, byte_offset);\r
\r
    // 3. Display updated database\r
    printf("\\n--- 3. DATABASE STATE AFTER IN-PLACE UPDATE ---\\n");\r
    print_all_records(db_file);\r
\r
    // Cleanup\r
    remove(db_file);\r
    printf("\\n  Cleaned up temporary database '%s'.\\n", db_file);\r
    printf("========================================================\\n");\r
\r
    return 0;\r
}\r
`,m=[{question:"What is random access in C file handling, and how does it differ from sequential access?",answer:"Sequential access reads or writes bytes strictly from start to finish in linear order. Random access allows jumping directly to any arbitrary byte offset in a file instantaneously without reading intermediate data, using functions like fseek() and ftell()."},{question:"What is the prototype and return value of fseek()?",answer:`int fseek(FILE *stream, long offset, int whence);
It returns 0 on success, and non-zero (-1) on error. On failure, errno is set (e.g. EINVAL or ESPIPE for pipes/sockets).`},{question:"What are the three standard origin constants used as the 'whence' parameter in fseek()?",answer:`1. SEEK_SET (0): Relative to the beginning of the file.
2. SEEK_CUR (1): Relative to the current file pointer position.
3. SEEK_END (2): Relative to the end of the file.`},{question:"What is the function of ftell()?",answer:`long ftell(FILE *stream);
It returns the current byte offset of the file position indicator from the beginning of the file, or -1L on error.`},{question:"What does the rewind() function do?",answer:`void rewind(FILE *stream);
It resets the file position indicator to the very beginning of the stream (equivalent to (void)fseek(stream, 0L, SEEK_SET)) and additionally clears both error and EOF indicators for the stream.`},{question:"How do you calculate the byte size of any file using fseek and ftell?",answer:`fseek(fp, 0, SEEK_END);
long fileSize = ftell(fp);
rewind(fp); // or fseek(fp, 0, SEEK_SET);
This moves the pointer to the end, reads the offset (total bytes), and returns the pointer to the start.`},{question:"How do you calculate the byte offset of the Nth record in a binary file?",answer:`For 0-indexed records: long offset = (long)N * sizeof(RecordType);
fseek(fp, offset, SEEK_SET);`},{question:"Can fseek seek past the end of a file?",answer:"Yes, seeking past EOF is permissible in C. If you subsequently write data beyond EOF, the OS creates a 'file hole' (sparse file) filled with zero bytes between the old EOF and the new write location."},{question:"Why does fseek have limitations in text mode on Windows?",answer:"In text mode on Windows, \\r\\n carriage-return conversions alter byte offsets dynamically. In text streams, fseek() is only guaranteed to work with SEEK_SET using an offset previously returned by ftell() on that same stream, or with an offset of 0."},{question:"What is the 2 GB / 4 GB file size limitation with fseek and ftell, and how is it solved?",answer:"Because ftell and fseek use signed 'long' (32-bit on Windows and 32-bit Linux), maximum addressable file size is 2 GB. POSIX provides fseeko() / ftello() with 64-bit 'off_t', and C standard provides fgetpos() / fsetpos() with 'fpos_t'."},{question:"What is the purpose of fgetpos() and fsetpos()?",answer:`int fgetpos(FILE *stream, fpos_t *pos);
int fsetpos(FILE *stream, const fpos_t *pos);
They record and restore file positions using an opaque fpos_t object that can handle extremely large files and non-trivial multibyte character shift states.`},{question:"How do you perform an in-place update of a single record in a binary file?",answer:`1. Open in update mode ('rb+' or 'r+b').
2. Seek to record: fseek(fp, index * sizeof(Rec), SEEK_SET);
3. Read record: fread(&rec, sizeof(Rec), 1, fp);
4. Modify record fields in RAM.
5. Seek back: fseek(fp, index * sizeof(Rec), SEEK_SET);
6. Overwrite: fwrite(&rec, sizeof(Rec), 1, fp);
7. Flush: fflush(fp);`},{question:"Why must you seek between a read and a write in update mode ('r+', 'w+', 'a+')?",answer:"The ANSI C standard requires that an input operation cannot be directly followed by an output operation without an intervening call to fflush, fseek, fsetpos, or rewind (and vice versa) to synchronize internal I/O stream buffers."},{question:"Can you use fseek on stdin, stdout, or network sockets?",answer:"No. Interactive streams like stdin, stdout, stderr, pipes, and sockets are non-seekable. Calling fseek on them fails and returns -1 with errno set to ESPIPE (Illegal seek)."},{question:"What is the difference between SEEK_CUR with a positive vs negative offset?",answer:"A positive offset moves the file indicator forward towards EOF; a negative offset moves the file indicator backward towards the start of the file."},{question:"How do you jump to read the very last record in a binary file?",answer:`fseek(fp, -(long)sizeof(Record), SEEK_END);
fread(&lastRec, sizeof(Record), 1, fp);`},{question:"What happens if you seek to a negative offset before SEEK_SET?",answer:"Seeking before the beginning of the file is an error. fseek returns -1, and the file position remains unchanged."},{question:"Does fseek clear the End-of-File (EOF) indicator?",answer:"Yes, successful calls to fseek, fsetpos, and rewind clear the EOF indicator on the stream."},{question:"Does fseek clear the error indicator (ferror)?",answer:"No. fseek does not clear error indicators. Only rewind() or clearerr() clears the ferror condition."},{question:"Why is random access in binary files O(1) time complexity?",answer:"Because all struct records have an identical fixed size, the byte address is computed with a simple multiplication: address = index * record_size. The OS file system maps this to disk sectors instantly without scanning."},{question:"Can variable-length text records support O(1) random access?",answer:"Not directly, because line lengths vary. To achieve fast random access on text or variable data, you must build an auxiliary index file storing fixed-size (Key, ByteOffset) pairs."},{question:"How does OS file buffering interact with fseek?",answer:"When fseek moves outside the current libc buffer window, the dirty buffer is flushed (if modified) and the buffer is discarded. The next read/write causes the OS to fetch a new 4KB/8KB disk sector."},{question:"What is a sparse file created by seeking past EOF?",answer:"A file where large blocks of zeros are stored efficiently as metadata without consuming physical disk allocation blocks until non-zero data is actually written to them."},{question:"How do you verify whether an fseek operation succeeded?",answer:"Always check the return value: if (fseek(fp, offset, whence) != 0) { perror('fseek failed'); /* handle error */ }"},{question:"What is the difference between 'r+' and 'w+' when performing random access?",answer:"'r+' opens an existing file without truncating it, allowing random reads and writes anywhere. 'w+' immediately truncates (wipes) the file to 0 bytes before opening, destroying existing content."}],x=`======================================================================\r
C LANGUAGE LESSON NOTE: TOPIC 4 (MODULE 003_010)\r
RANDOM ACCESS FILE POSITIONING (FSEEK, FTELL, REWIND, FGETPOS, FSETPOS)\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE & SHYAMNAGAR)\r
======================================================================\r
\r
1. RANDOM ACCESS FUNDAMENTALS\r
   - Unlike sequential access (O(N) scanning from byte 0), random access\r
     moves the file position indicator directly to any arbitrary byte in O(1) time.\r
   - Ideal for indexed databases, binary search on sorted files, and in-place updates.\r
\r
2. KEY FUNCTIONS & CONSTANTS\r
   - fseek(FILE *fp, long offset, int whence);\r
     Returns 0 on success, non-zero on failure.\r
     Whence options:\r
       * SEEK_SET (0) -> Offset from Start of File\r
       * SEEK_CUR (1) -> Offset from Current Pointer Position\r
       * SEEK_END (2) -> Offset from End of File (EOF)\r
   - ftell(FILE *fp);\r
     Returns current byte position as long (or -1L on error).\r
   - rewind(FILE *fp);\r
     Equivalent to (void)fseek(fp, 0L, SEEK_SET) + clears EOF and error flags.\r
\r
3. ESSENTIAL FORMULAS\r
   - Jump to Nth record (0-indexed):\r
     fseek(fp, (long)N * sizeof(Record), SEEK_SET);\r
   - Calculate Total File Size:\r
     fseek(fp, 0, SEEK_END);\r
     long size = ftell(fp);\r
   - Jump to Last Record:\r
     fseek(fp, -(long)sizeof(Record), SEEK_END);\r
\r
4. IN-PLACE RECORD UPDATE WORKFLOW\r
   1. fseek to target record offset.\r
   2. fread record into RAM buffer.\r
   3. Modify struct members.\r
   4. fseek back to target record offset (CRITICAL: rewind file pointer).\r
   5. fwrite updated struct to disk.\r
   6. fflush(fp) to commit stream buffer to kernel.\r
\r
5. LARGE FILE POSITIONING\r
   - For files > 2GB (where 32-bit signed long overflows):\r
     Use fgetpos(fp, &pos) and fsetpos(fp, &pos) with fpos_t,\r
     or POSIX fseeko() / ftello() with off_t.\r
\r
======================================================================\r
Copyright (c) Sukanta Hui - C Programming Master Series\r
======================================================================\r
`;function j(){const[t,i]=a.useState(0),r=[{id:"ex1",title:"1. Direct Record Index Seeking",file:c,filename:"RandomAccessFileDemo.c",description:"Jumps to arbitrary record indexes in O(1) time using fseek(SEEK_SET), queries byte positions with ftell(), and resets with rewind().",lineByLine:[{line:"fseek(fp, index * sizeof(Employee), SEEK_SET);",explanation:"Calculates byte offset and commands the file system to position the cursor directly at Record 4 in O(1) instant time."},{line:"long pos = ftell(fp);",explanation:"Queries the stream indicator to confirm the exact byte offset (e.g. byte 144) before performing reads."},{line:"rewind(fp);",explanation:"Instantly resets the file stream position back to byte 0 (start of file) and clears stream EOF indicators."}],output:`========================================================
   CODER & ACCOTAX - RANDOM ACCESS FILE POSITIONING LAB 
========================================================

--- 1. INITIALIZING BINARY DATASET (5 RECORDS) ---
  Wrote 5 records (240 bytes) to 'employees.dat'.

--- 2. RANDOM SEEK: JUMPING DIRECTLY TO RECORD 4 (INDEX 3) ---
  Offset for record 3: 144 bytes
  Position before read (ftell): 144
  [Target Found] ID: 104 | Name: Debangshu Roy      | Dept: Security
  Position after read (ftell): 192

--- 3. JUMPING TO FIRST RECORD VIA rewind() ---
  After rewind(), ftell() returns: 0
  [Record 0] ID: 101 | Name: Swadeep Sharma     | Dept: Systems Eng

  Cleaned up 'employees.dat'.
========================================================`},{id:"ex2",title:"2. Reverse File Seeking (SEEK_END)",file:p,filename:"FileReverseReaderDemo.c",description:"Measures exact file size with fseek(0, SEEK_END) and ftell(), then reads characters in reverse order using negative seek offsets.",lineByLine:[{line:"fseek(fp, 0, SEEK_END); long sz = ftell(fp);",explanation:"The industry-standard 2-line pattern to query the total file size in bytes by jumping to the end and checking offset."},{line:"fseek(fp, -offset, SEEK_END);",explanation:"Uses a negative offset relative to SEEK_END to step backward character-by-character from the end toward the start."},{line:"int ch = fgetc(fp); putchar(ch);",explanation:"Reads each byte from the backward position and prints it to the terminal."}],output:`========================================================
   CODER & ACCOTAX - REVERSE FILE SEEKING LAB           
========================================================

--- 1. FILE SIZE INSPECTION ---
  Target File : 'reverse_sample.txt'
  Total Size  : 28 bytes

--- 2. READING CHARACTERS IN REVERSE ORDER ---
  Reverse Output: 6202_BAL_SMETSYS_EROPKCARAB

--- 3. RESETTING TO START WITH rewind() ---
  After rewind(), ftell() position = 0 (Byte 0)
  First 10 characters: "BARRACKPOR"

  Cleaned up temporary file 'reverse_sample.txt'.
========================================================`},{id:"ex3",title:"3. In-Place Record Mutation (rb+)",file:h,filename:"InPlaceRecordModifierDemo.c",description:"Performs in-place updates of a specific record in a persistent binary database without reading or rewriting any other part of the file.",lineByLine:[{line:'FILE *fp = fopen(db_file, "rb+");',explanation:"Opens the database in Read/Write Binary mode. Existing records are preserved and available for random seeking."},{line:"long byte_offset = target_slot * sizeof(StudentItem);",explanation:"Calculates the exact byte coordinate on disk where slot 2 (Abhronila) is stored."},{line:"fseek(fp, byte_offset, SEEK_SET);",explanation:"Jumps the disk pointer straight to that byte offset so we can read or write slot 2 directly."},{line:"fseek(fp, byte_offset, SEEK_SET); fwrite(&target, sizeof(StudentItem), 1, fp);",explanation:"Seeks back to the slot boundary and overwrites the struct in-place without touching any other records in the file."}],output:`========================================================
  CODER & ACCOTAX - IN-PLACE RECORD MODIFIER LAB        
========================================================

--- 1. INITIAL DATABASE RECORDS ---
  [Slot 0] ID: 101 | Name: Swadeep          | Score:  85 | Grade: B
  [Slot 1] ID: 102 | Name: Tuhina           | Score:  92 | Grade: A
  [Slot 2] ID: 103 | Name: Abhronila        | Score:  88 | Grade: B
  [Slot 3] ID: 104 | Name: Debangshu        | Score:  74 | Grade: C

--- 2. UPDATING SLOT 2 (Abhronila) IN-PLACE VIA fseek() ---
  Before: Name: Abhronila, Score: 88, Grade: B
  After : Name: Abhronila, Score: 98, Grade: A
  [SUCCESS] Overwrote slot 2 at byte offset 88 directly on disk!

--- 3. DATABASE STATE AFTER IN-PLACE UPDATE ---
  [Slot 0] ID: 101 | Name: Swadeep          | Score:  85 | Grade: B
  [Slot 1] ID: 102 | Name: Tuhina           | Score:  92 | Grade: A
  [Slot 2] ID: 103 | Name: Abhronila        | Score:  98 | Grade: A
  [Slot 3] ID: 104 | Name: Debangshu        | Score:  74 | Grade: C

  Cleaned up temporary database 'students_db.bin'.
========================================================`}];return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 003_010 · Topic 4"}),e.jsx("span",{className:"bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Random Access Navigation"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Random Access File Positioning: fseek(), ftell() & rewind()"}),e.jsxs("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:["Navigate anywhere inside a file in constant $O(1)$ time. Master byte-offset manipulation with ",e.jsx("code",{children:"fseek()"}),", position inspection with ",e.jsx("code",{children:"ftell()"}),", and stream resets with ",e.jsx("code",{children:"rewind()"}),"."]})]}),e.jsxs("section",{className:"space-y-5 bg-gradient-to-br from-amber-950/40 via-slate-800/40 to-slate-900 border border-amber-500/30 rounded-2xl p-6 md:p-8 shadow-xl",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-2xl p-2 bg-amber-500/20 rounded-xl border border-amber-500/30",children:"💡"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl md:text-2xl font-bold text-white",children:"In Very Simple Terms: Cassette Tape vs Digital Audio Player"}),e.jsx("p",{className:"text-amber-300 text-xs md:text-sm font-medium",children:"Why sequential reading is slow and how random seeking changes everything"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 pt-2",children:[e.jsxs("div",{className:"bg-slate-900/80 border border-slate-700/60 rounded-xl p-4 space-y-2",children:[e.jsxs("div",{className:"text-rose-400 font-bold text-sm flex items-center gap-1.5",children:[e.jsx("span",{children:"📼"})," Sequential Access (Old Cassette)"]}),e.jsx("p",{className:"text-slate-300 text-xs leading-relaxed",children:"If you want to hear song #10 on an old cassette tape, you have to fast-forward through songs 1 to 9. In standard file reading, you would have to read and discard all earlier records."})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-700/60 rounded-xl p-4 space-y-2",children:[e.jsxs("div",{className:"text-amber-400 font-bold text-sm flex items-center gap-1.5",children:[e.jsx("span",{children:"🎛️"})," Random Access (fseek Remote)"]}),e.jsxs("p",{className:"text-slate-300 text-xs leading-relaxed",children:["With ",e.jsx("code",{children:"fseek(fp, index * sizeof(Record), SEEK_SET)"}),", you tap directly on record #50,000 in ",e.jsx("strong",{children:"1 microsecond"}),"! The disk arm jumps straight to that byte offset without reading anything else."]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-700/60 rounded-xl p-4 space-y-2",children:[e.jsxs("div",{className:"text-emerald-400 font-bold text-sm flex items-center gap-1.5",children:[e.jsx("span",{children:"📍"})," The Digital Meter (ftell & rewind)"]}),e.jsxs("p",{className:"text-slate-300 text-xs leading-relaxed",children:[e.jsx("code",{children:"ftell(fp)"})," is the dashboard odometer telling you: ",e.jsx("em",{children:'"You are currently at byte 144."'})," ",e.jsx("code",{children:"rewind(fp)"})," is the reset button that instantly snaps you back to byte 0!"]})]})]}),e.jsxs("div",{className:"bg-amber-900/20 border border-amber-500/20 rounded-xl p-3 text-xs text-amber-200",children:["📍 ",e.jsx("strong",{children:"The 3 Seek Anchor Points:"}),e.jsxs("ul",{className:"mt-1.5 space-y-0.5 list-disc list-inside",children:[e.jsxs("li",{children:[e.jsx("code",{children:"SEEK_SET"}),": Starting reference is the very beginning of the file (Byte 0)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"SEEK_CUR"}),": Starting reference is the current position where the cursor is right now."]}),e.jsxs("li",{children:[e.jsx("code",{children:"SEEK_END"}),": Starting reference is the end of the file (use negative offsets to move backwards)."]})]})]})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Topic Description: Constant-Time Record Navigation & In-Place Updates"]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["When managing persistent datasets containing millions of records, reading sequentially from the beginning is prohibitively slow ($O(N)$). Fixed-size binary records enable constant-time ($O(1)$) random seeking directly to byte offset: ",e.jsx("code",{children:"offset = index * sizeof(Record)"}),"."]}),e.jsxs("div",{className:"bg-slate-900/60 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-semibold text-amber-300",children:"🏫 Classroom Story at Coder & AccoTax (Barrackpore):"}),e.jsxs("p",{children:["In our Barrackpore lab, Abhronila wanted to update student #450's grade. She originally opened the file, read 449 records into a massive array, updated #450, and rewrote all 500 records back to disk. Sukanta Hui introduced ",e.jsx("code",{children:"fseek()"})," in ",e.jsx("code",{children:'"rb+"'})," mode, demonstrating how to jump straight to byte ",e.jsx("code",{children:"450 * sizeof(StudentRecord)"})," and overwrite just that single 48-byte record in place without touching any other records!"]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"⚙️ Semantic Visual Diagram: Random Access Navigation Mechanics"}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 900 280",className:"w-full min-w-[750px] font-sans",children:[e.jsx("rect",{x:"20",y:"20",width:"860",height:"240",rx:"16",fill:"#0f172a",stroke:"#334155",strokeWidth:"2"}),e.jsxs("g",{transform:"translate(50, 45)",children:[e.jsx("rect",{x:"0",y:"0",width:"220",height:"35",rx:"6",fill:"#1e1b4b",stroke:"#6366f1",strokeWidth:"1.5"}),e.jsx("text",{x:"25",y:"22",fill:"#a5b4fc",className:"font-mono text-xs font-bold",children:"SEEK_SET (Offset 0)"}),e.jsx("rect",{x:"280",y:"0",width:"220",height:"35",rx:"6",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"305",y:"22",fill:"#6ee7b7",className:"font-mono text-xs font-bold",children:"SEEK_CUR (Current Byte)"}),e.jsx("rect",{x:"560",y:"0",width:"220",height:"35",rx:"6",fill:"#7f1d1d",stroke:"#ef4444",strokeWidth:"1.5"}),e.jsx("text",{x:"585",y:"22",fill:"#fca5a5",className:"font-mono text-xs font-bold",children:"SEEK_END (End of File)"})]}),e.jsxs("g",{transform:"translate(50, 110)",children:[e.jsx("rect",{x:"0",y:"0",width:"180",height:"70",rx:"8",fill:"#1e293b",stroke:"#475569",strokeWidth:"1.5"}),e.jsx("text",{x:"15",y:"30",fill:"#94a3b8",className:"font-bold text-xs",children:"Record 0 [0 - 47B]"}),e.jsx("text",{x:"15",y:"52",fill:"#64748b",className:"font-mono text-xs",children:"ID: 101 (Swadeep)"}),e.jsx("rect",{x:"195",y:"0",width:"180",height:"70",rx:"8",fill:"#1e293b",stroke:"#475569",strokeWidth:"1.5"}),e.jsx("text",{x:"210",y:"30",fill:"#94a3b8",className:"font-bold text-xs",children:"Record 1 [48 - 95B]"}),e.jsx("text",{x:"210",y:"52",fill:"#64748b",className:"font-mono text-xs",children:"ID: 102 (Tuhina)"}),e.jsx("rect",{x:"390",y:"0",width:"180",height:"70",rx:"8",fill:"#312e81",stroke:"#818cf8",strokeWidth:"2"}),e.jsx("text",{x:"405",y:"30",fill:"#c7d2fe",className:"font-bold text-xs",children:"Record 2 [96 - 143B]"}),e.jsx("text",{x:"405",y:"52",fill:"#a5b4fc",className:"font-mono text-xs font-bold",children:"🎯 TARGET SEEK"}),e.jsx("rect",{x:"585",y:"0",width:"180",height:"70",rx:"8",fill:"#1e293b",stroke:"#475569",strokeWidth:"1.5"}),e.jsx("text",{x:"600",y:"30",fill:"#94a3b8",className:"font-bold text-xs",children:"Record 3 [144 - 191B]"}),e.jsx("text",{x:"600",y:"52",fill:"#64748b",className:"font-mono text-xs",children:"ID: 104 (Debangshu)"})]}),e.jsx("path",{d:"M 50 100 Q 250 85 480 105",fill:"none",stroke:"#f59e0b",strokeWidth:"2.5",strokeDasharray:"6,4"}),e.jsx("text",{x:"200",y:"90",fill:"#fbbf24",className:"font-mono text-xs font-bold",children:"fseek(fp, 2 * 48, SEEK_SET) → O(1) Jump"})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"🔍 Deep Technical Breakdown: Seeking Math & Signatures"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-700 space-y-2",children:[e.jsx("h3",{className:"font-bold text-amber-300 text-sm",children:"fseek()"}),e.jsx("code",{className:"text-emerald-300 font-mono block bg-slate-950 p-2 rounded",children:"int fseek(FILE *fp, long offset, int whence);"}),e.jsxs("p",{className:"text-slate-300",children:["Moves stream position to byte offset relative to ",e.jsx("code",{children:"whence"})," (",e.jsx("code",{children:"SEEK_SET"}),", ",e.jsx("code",{children:"SEEK_CUR"}),", ",e.jsx("code",{children:"SEEK_END"}),"). Returns 0 on success."]})]}),e.jsxs("div",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-700 space-y-2",children:[e.jsx("h3",{className:"font-bold text-amber-300 text-sm",children:"ftell()"}),e.jsx("code",{className:"text-emerald-300 font-mono block bg-slate-950 p-2 rounded",children:"long ftell(FILE *fp);"}),e.jsxs("p",{className:"text-slate-300",children:["Returns current byte position offset (0-indexed). Frequently used with ",e.jsx("code",{children:"fseek(fp, 0, SEEK_END)"})," to determine file size."]})]}),e.jsxs("div",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-700 space-y-2",children:[e.jsx("h3",{className:"font-bold text-amber-300 text-sm",children:"rewind()"}),e.jsx("code",{className:"text-emerald-300 font-mono block bg-slate-950 p-2 rounded",children:"void rewind(FILE *fp);"}),e.jsxs("p",{className:"text-slate-300",children:["Equivalent to ",e.jsx("code",{children:"(void)fseek(fp, 0L, SEEK_SET)"}),", and also clears error and EOF indicators for the stream."]})]})]})]}),e.jsxs("section",{className:"space-y-6 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/80 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: Random Access Demonstrations"]}),e.jsx("p",{className:"text-slate-300 text-sm mt-1",children:"Explore 3 practical C programs with step-by-step line explanations and terminal outputs."})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:r.map((n,s)=>e.jsx("button",{onClick:()=>i(s),className:`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${t===s?"bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,children:n.title},n.id))})]}),e.jsxs("div",{className:"space-y-5",children:[e.jsxs("div",{className:"bg-slate-900/60 p-3.5 rounded-xl border border-slate-700/60 text-xs md:text-sm text-slate-300 flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"📋 Overview:"}),e.jsx("span",{children:r[t].description})]}),e.jsx(o,{fileModule:r[t].file,title:r[t].filename,editable:!1}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-700/80 rounded-xl p-4 md:p-5 space-y-3 shadow-md",children:[e.jsxs("div",{className:"text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx("span",{children:"🔍"})," Plain-English Line-by-Line Code Breakdown:"]}),e.jsx("div",{className:"space-y-2",children:r[t].lineByLine.map((n,s)=>e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-start gap-2 bg-slate-950/70 p-3 rounded-lg border border-slate-800/80",children:[e.jsx("code",{className:"text-sky-300 font-mono text-[11px] sm:w-2/5 shrink-0 font-semibold bg-slate-900 px-2 py-1 rounded border border-slate-700/60",children:n.line}),e.jsx("span",{className:"text-slate-300 text-xs leading-relaxed",children:n.explanation})]},s))})]}),e.jsxs("div",{className:"rounded-xl border border-slate-700 bg-slate-950 p-4 shadow-inner",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:r[t].output})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-rose-400",children:"⚠️ Common Pitfalls & Best Practices"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-900/30 p-4 rounded-xl space-y-1.5",children:[e.jsx("h3",{className:"font-bold text-rose-300",children:"Pitfall: Seeking in Text Mode"}),e.jsxs("p",{className:"text-slate-300",children:["On Windows text mode, newline translation (",e.jsx("code",{children:"\\r\\n"})," to ",e.jsx("code",{children:"\\n"}),") causes ",e.jsx("code",{children:"ftell()"})," byte offsets to not match physical file offsets. Always use binary mode (",e.jsx("code",{children:'"rb"'}),"/",e.jsx("code",{children:'"wb+"'}),") when seeking by calculated byte offsets."]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-900/30 p-4 rounded-xl space-y-1.5",children:[e.jsx("h3",{className:"font-bold text-emerald-300",children:"Best Practice: Flush Before Switching Read/Write"}),e.jsxs("p",{className:"text-slate-300",children:["When using update modes (",e.jsx("code",{children:'"rb+"'}),"), always call ",e.jsx("code",{children:"fseek()"}),", ",e.jsx("code",{children:"fsetpos()"}),", or ",e.jsx("code",{children:"fflush()"})," when alternating between reads and writes to synchronize stream buffers."]})]})]})]}),e.jsxs("section",{className:"bg-slate-800/30 border border-slate-700/60 p-5 rounded-2xl space-y-2 text-xs md:text-sm",children:[e.jsxs("h3",{className:"font-bold text-amber-300 flex items-center gap-1.5",children:[e.jsx("span",{children:"🤔"})," Think About This..."]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["What happens if you seek beyond the end of a file (e.g. ",e.jsx("code",{children:"fseek(fp, 1000, SEEK_END)"}),") and write a single byte? (Hint: The OS creates a ",e.jsx("em",{children:"sparse file"})," with a hole filled with zeroes!)."]})]}),e.jsx("section",{children:e.jsx(d,{title:"Module 003_010 Topic 4 FAQs: Random Access File Positioning",questions:m})}),e.jsx("section",{children:e.jsx(l,{content:x,title:"Module 003_010 Topic 4 Note: Random Access File Positioning",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_003_010_topic4_note.txt"})}),e.jsx("section",{children:e.jsx(f,{note:"To measure file size accurately in C, do: fseek(fp, 0, SEEK_END); long sz = ftell(fp); rewind(fp);. This 3-line idiom is used in compilers, game engines, and network servers worldwide. — Sukanta Hui"})})]})}export{j as default};
