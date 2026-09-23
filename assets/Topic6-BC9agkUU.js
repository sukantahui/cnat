import{b as i,j as e}from"./vendor-react-core-BBXbtqt1.js";import{C as o}from"./CFileLoader-Ch_c8mqH.js";import{F as d}from"./FAQTemplate-BamsZuNW.js";import{P as l}from"./PlainTextPrint-CGJ_aUDk.js";import{T as c}from"./TeacherSukantaHui-VMH_OtYp.js";import"./CodeBlock-Cor_8i9W.js";import"./vendor-prism-B7oW9GGR.js";import"./vendor-icons-IjXdH6hS.js";import"./EditableCCodeBlock-Bte34zr4.js";import"./vendor-monaco-sD6ueU9e.js";const f=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <string.h>\r
#include <stdbool.h>\r
\r
#define DB_FILE "student_master.dat"\r
#define MAX_NAME 50\r
#define MAX_COURSE 30\r
\r
/* Student Record Schema */\r
typedef struct {\r
    int id;                 /* Unique Identifier (Key) */\r
    char name[MAX_NAME];    /* Full Name */\r
    char course[MAX_COURSE];/* Course (e.g. "Computer Science", "Taxation") */\r
    float gpa;              /* Cumulative Grade Point Average */\r
    bool isActive;          /* Tombstone Flag: true = active, false = soft-deleted */\r
} StudentRecord;\r
\r
/* Function Prototypes */\r
void initializeDatabase(void);\r
bool insertRecord(StudentRecord rec);\r
bool searchRecordById(int targetId, StudentRecord *result);\r
bool updateRecordGpa(int targetId, float newGpa);\r
bool softDeleteRecord(int targetId);\r
void displayAllRecords(void);\r
void purgeDatabase(void);\r
\r
int main(void) {\r
    printf("=====================================================\\n");\r
    printf("  CAPSTONE: Binary Student Database Engine (CRUD)\\n");\r
    printf("=====================================================\\n\\n");\r
\r
    /* Initialize database */\r
    initializeDatabase();\r
\r
    /* 1. INSERT RECORDS (Create) */\r
    printf(">>> Step 1: Inserting 4 initial student records...\\n");\r
    StudentRecord s1 = {101, "Swadeep Sharma", "Computer Science", 3.85f, true};\r
    StudentRecord s2 = {102, "Tuhina Roy",     "Data Engineering", 3.95f, true};\r
    StudentRecord s3 = {103, "Abhronila Das",  "Machine Learning", 3.90f, true};\r
    StudentRecord s4 = {104, "Debangshu Pal",  "Information Tech", 3.65f, true};\r
\r
    insertRecord(s1);\r
    insertRecord(s2);\r
    insertRecord(s3);\r
    insertRecord(s4);\r
\r
    /* 2. DISPLAY ALL (Read) */\r
    printf("\\n>>> Step 2: Displaying All Active Records:\\n");\r
    displayAllRecords();\r
\r
    /* 3. SEARCH BY ID (Read with fseek) */\r
    printf("\\n>>> Step 3: Searching for Student ID 102 (Tuhina Roy)...\\n");\r
    StudentRecord found;\r
    if (searchRecordById(102, &found)) {\r
        printf("    [FOUND] ID: %d | Name: %-16s | Course: %-18s | GPA: %.2f\\n",\r
               found.id, found.name, found.course, found.gpa);\r
    } else {\r
        printf("    [NOT FOUND] Student with ID 102 does not exist.\\n");\r
    }\r
\r
    /* 4. UPDATE GPA IN-PLACE (Update) */\r
    printf("\\n>>> Step 4: Updating Student ID 104 (Debangshu Pal) GPA to 3.80...\\n");\r
    if (updateRecordGpa(104, 3.80f)) {\r
        printf("    Record updated successfully.\\n");\r
    }\r
\r
    /* 5. SOFT DELETE / TOMBSTONE (Delete) */\r
    printf("\\n>>> Step 5: Soft-deleting Student ID 101 (Swadeep Sharma)...\\n");\r
    if (softDeleteRecord(101)) {\r
        printf("    Record 101 marked as inactive (tombstone set).\\n");\r
    }\r
\r
    /* 6. DISPLAY ACTIVE AFTER SOFT DELETE */\r
    printf("\\n>>> Step 6: Active Records after Soft Delete:\\n");\r
    displayAllRecords();\r
\r
    /* 7. PURGE COMPACTION (Garbage Collection) */\r
    printf("\\n>>> Step 7: Running Database Purge / Compaction...\\n");\r
    purgeDatabase();\r
\r
    printf("\\n>>> Final State after Compaction:\\n");\r
    displayAllRecords();\r
\r
    printf("\\n=== Database Engine Demonstration Completed Successfully ===\\n");\r
    return EXIT_SUCCESS;\r
}\r
\r
/* Clear existing file and create blank database */\r
void initializeDatabase(void) {\r
    FILE *fp = fopen(DB_FILE, "wb");\r
    if (fp != NULL) {\r
        fclose(fp);\r
    }\r
}\r
\r
/* Insert record at end of binary stream */\r
bool insertRecord(StudentRecord rec) {\r
    FILE *fp = fopen(DB_FILE, "ab");\r
    if (fp == NULL) {\r
        perror("Failed to open database for insert");\r
        return false;\r
    }\r
    size_t written = fwrite(&rec, sizeof(StudentRecord), 1, fp);\r
    fclose(fp);\r
    return (written == 1);\r
}\r
\r
/* Search record sequentially or by random seek */\r
bool searchRecordById(int targetId, StudentRecord *result) {\r
    FILE *fp = fopen(DB_FILE, "rb");\r
    if (fp == NULL) return false;\r
\r
    StudentRecord temp;\r
    while (fread(&temp, sizeof(StudentRecord), 1, fp) == 1) {\r
        if (temp.id == targetId && temp.isActive) {\r
            *result = temp;\r
            fclose(fp);\r
            return true;\r
        }\r
    }\r
    fclose(fp);\r
    return false;\r
}\r
\r
/* In-place update of GPA */\r
bool updateRecordGpa(int targetId, float newGpa) {\r
    FILE *fp = fopen(DB_FILE, "rb+");\r
    if (fp == NULL) return false;\r
\r
    StudentRecord temp;\r
    long recordIndex = 0;\r
\r
    while (fread(&temp, sizeof(StudentRecord), 1, fp) == 1) {\r
        if (temp.id == targetId && temp.isActive) {\r
            temp.gpa = newGpa;\r
            /* Seek back to overwrite this specific record */\r
            fseek(fp, (long)(recordIndex * sizeof(StudentRecord)), SEEK_SET);\r
            fwrite(&temp, sizeof(StudentRecord), 1, fp);\r
            fclose(fp);\r
            return true;\r
        }\r
        recordIndex++;\r
    }\r
    fclose(fp);\r
    return false;\r
}\r
\r
/* Soft delete: mark tombstone flag without rewriting file */\r
bool softDeleteRecord(int targetId) {\r
    FILE *fp = fopen(DB_FILE, "rb+");\r
    if (fp == NULL) return false;\r
\r
    StudentRecord temp;\r
    long recordIndex = 0;\r
\r
    while (fread(&temp, sizeof(StudentRecord), 1, fp) == 1) {\r
        if (temp.id == targetId && temp.isActive) {\r
            temp.isActive = false; /* set tombstone */\r
            fseek(fp, (long)(recordIndex * sizeof(StudentRecord)), SEEK_SET);\r
            fwrite(&temp, sizeof(StudentRecord), 1, fp);\r
            fclose(fp);\r
            return true;\r
        }\r
        recordIndex++;\r
    }\r
    fclose(fp);\r
    return false;\r
}\r
\r
/* Display all active records */\r
void displayAllRecords(void) {\r
    FILE *fp = fopen(DB_FILE, "rb");\r
    if (fp == NULL) {\r
        printf("    [Database is empty or could not be opened]\\n");\r
        return;\r
    }\r
\r
    StudentRecord temp;\r
    int count = 0;\r
    printf("    ----------------------------------------------------------------------\\n");\r
    printf("    | ID   | Name               | Course             | GPA  | Status     |\\n");\r
    printf("    ----------------------------------------------------------------------\\n");\r
\r
    while (fread(&temp, sizeof(StudentRecord), 1, fp) == 1) {\r
        if (temp.isActive) {\r
            printf("    | %-4d | %-18s | %-18s | %4.2f | ACTIVE     |\\n",\r
                   temp.id, temp.name, temp.course, temp.gpa);\r
            count++;\r
        }\r
    }\r
    printf("    ----------------------------------------------------------------------\\n");\r
    printf("    Total Active Records: %d\\n", count);\r
    fclose(fp);\r
}\r
\r
/* Database Compaction: removes tombstoned records to reclaim space */\r
void purgeDatabase(void) {\r
    const char *TEMP_FILE = "student_temp.dat";\r
    FILE *fpIn = fopen(DB_FILE, "rb");\r
    FILE *fpOut = fopen(TEMP_FILE, "wb");\r
\r
    if (fpIn == NULL || fpOut == NULL) {\r
        if (fpIn) fclose(fpIn);\r
        if (fpOut) fclose(fpOut);\r
        return;\r
    }\r
\r
    StudentRecord temp;\r
    int retained = 0, purged = 0;\r
\r
    while (fread(&temp, sizeof(StudentRecord), 1, fpIn) == 1) {\r
        if (temp.isActive) {\r
            fwrite(&temp, sizeof(StudentRecord), 1, fpOut);\r
            retained++;\r
        } else {\r
            purged++;\r
        }\r
    }\r
\r
    fclose(fpIn);\r
    fclose(fpOut);\r
\r
    /* Atomic swap */\r
    remove(DB_FILE);\r
    rename(TEMP_FILE, DB_FILE);\r
    printf("    Compaction complete: %d records purged, %d records retained.\\n", purged, retained);\r
}\r
`,p=`/**\r
 * DatabaseIndexSearchDemo.c\r
 * Demonstrates Primary-Key Indexing and Binary Search over persistent disk records.\r
 * Keeps an in-memory index table mapping IDs to disk byte offsets for instant O(1) lookups.\r
 *\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
#include <stdio.h>\r
#include <stdlib.h>\r
#include <string.h>\r
\r
#define MAX_INDEX_ENTRIES 100\r
\r
// In-Memory Index Entry\r
typedef struct {\r
    int id;\r
    long byte_offset;\r
} IndexEntry;\r
\r
// On-Disk Data Record (Fixed Size)\r
typedef struct {\r
    int id;\r
    char name[32];\r
    char department[20];\r
    float gpa;\r
    int is_active;\r
} StudentRecord;\r
\r
typedef struct {\r
    IndexEntry entries[MAX_INDEX_ENTRIES];\r
    int count;\r
} MemoryIndexTable;\r
\r
// Build in-memory index from binary data file\r
void build_index(FILE *fp, MemoryIndexTable *index_table) {\r
    rewind(fp);\r
    StudentRecord rec;\r
    index_table->count = 0;\r
\r
    long current_pos = ftell(fp);\r
    while (fread(&rec, sizeof(StudentRecord), 1, fp) == 1) {\r
        if (rec.is_active && index_table->count < MAX_INDEX_ENTRIES) {\r
            index_table->entries[index_table->count].id = rec.id;\r
            index_table->entries[index_table->count].byte_offset = current_pos;\r
            index_table->count++;\r
        }\r
        current_pos = ftell(fp);\r
    }\r
}\r
\r
// Fast lookup by ID using the index\r
StudentRecord *fetch_by_id(FILE *fp, MemoryIndexTable *index_table, int target_id, StudentRecord *result) {\r
    for (int i = 0; i < index_table->count; i++) {\r
        if (index_table->entries[i].id == target_id) {\r
            // Seek directly to the indexed byte offset in O(1) time\r
            fseek(fp, index_table->entries[i].byte_offset, SEEK_SET);\r
            if (fread(result, sizeof(StudentRecord), 1, fp) == 1) {\r
                return result;\r
            }\r
        }\r
    }\r
    return NULL;\r
}\r
\r
int main(void) {\r
    printf("========================================================\\n");\r
    printf("  CODER & ACCOTAX - DATABASE PRIMARY-KEY INDEXING LAB   \\n");\r
    printf("========================================================\\n\\n");\r
\r
    const char *db_file = "indexed_students.db";\r
\r
    // 1. Seed database with records\r
    StudentRecord dataset[] = {\r
        {101, "Swadeep Sharma", "Systems Engineering", 3.92f, 1},\r
        {102, "Tuhina Mukherjee", "Data Science", 4.00f, 1},\r
        {103, "Abhronila Das", "Cyber Security", 3.85f, 1},\r
        {104, "Debangshu Roy", "Cloud Architecture", 3.70f, 1}\r
    };\r
\r
    FILE *fp = fopen(db_file, "wb+");\r
    if (fp == NULL) {\r
        perror("Failed to create indexed database");\r
        return 1;\r
    }\r
    fwrite(dataset, sizeof(StudentRecord), 4, fp);\r
    printf("  Seeded 4 student records into binary storage '%s'.\\n\\n", db_file);\r
\r
    // 2. Build In-Memory Index\r
    MemoryIndexTable index_table;\r
    build_index(fp, &index_table);\r
    printf("--- 1. IN-MEMORY PRIMARY-KEY INDEX TABLE ---\\n");\r
    for (int i = 0; i < index_table.count; i++) {\r
        printf("  [Index Entry %d] Student ID: %d -> Disk Byte Offset: %4ld bytes\\n",\r
               i, index_table.entries[i].id, index_table.entries[i].byte_offset);\r
    }\r
\r
    // 3. Perform Fast Indexed Search for ID 103 (Abhronila)\r
    printf("\\n--- 2. FAST INDEXED QUERY FOR ID: 103 ---\\n");\r
    StudentRecord found;\r
    if (fetch_by_id(fp, &index_table, 103, &found) != NULL) {\r
        printf("  [RECORD LOCATED INSTANTLY VIA INDEX]\\n");\r
        printf("    ID         : %d\\n", found.id);\r
        printf("    Name       : %s\\n", found.name);\r
        printf("    Department : %s\\n", found.department);\r
        printf("    GPA        : %.2f\\n", found.gpa);\r
    } else {\r
        printf("  [NOT FOUND] Student ID 103 does not exist.\\n");\r
    }\r
\r
    fclose(fp);\r
    remove(db_file);\r
    printf("\\n  Cleaned up indexed database '%s'.\\n", db_file);\r
    printf("========================================================\\n");\r
\r
    return 0;\r
}\r
`,m=`/**\r
 * CsvToBinaryConverterDemo.c\r
 * Industrial Data Migration Engine: Ingests unstructured, human-readable\r
 * CSV log feeds and converts them into high-performance packed binary databases.\r
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
    char city[24];\r
    float marks;\r
    int is_active;\r
} CompactStudent;\r
\r
int main(void) {\r
    printf("========================================================\\n");\r
    printf("   CODER & ACCOTAX - CSV TO BINARY MIGRATION ENGINE     \\n");\r
    printf("========================================================\\n\\n");\r
\r
    const char *csv_path = "raw_students.csv";\r
    const char *bin_path = "compact_students.bin";\r
\r
    // 1. Create a sample CSV file with headers\r
    FILE *csv_fp = fopen(csv_path, "w");\r
    if (csv_fp == NULL) return 1;\r
\r
    fprintf(csv_fp, "id,name,city,marks\\n");\r
    fprintf(csv_fp, "201,Swadeep Sharma,Barrackpore,88.5\\n");\r
    fprintf(csv_fp, "202,Tuhina Mukherjee,Shyamnagar,95.0\\n");\r
    fprintf(csv_fp, "203,Debangshu Roy,Naihati,79.5\\n");\r
    fprintf(csv_fp, "204,Abhronila Das,Ichapur,92.0\\n");\r
    fclose(csv_fp);\r
    printf("  Created source raw CSV file '%s'.\\n", csv_path);\r
\r
    // 2. Ingest CSV, parse lines safely with fgets and sscanf, and write packed binary\r
    printf("\\n--- 1. PARSING CSV & WRITING PACKED BINARY CHUNKS ---\\n");\r
    csv_fp = fopen(csv_path, "r");\r
    FILE *bin_fp = fopen(bin_path, "wb");\r
\r
    if (csv_fp == NULL || bin_fp == NULL) {\r
        perror("Error opening files for migration");\r
        return 1;\r
    }\r
\r
    char line_buf[256];\r
    int converted_count = 0;\r
\r
    // Skip CSV header line\r
    fgets(line_buf, sizeof(line_buf), csv_fp);\r
\r
    while (fgets(line_buf, sizeof(line_buf), csv_fp) != NULL) {\r
        CompactStudent s;\r
        memset(&s, 0, sizeof(s));\r
        s.is_active = 1;\r
\r
        // Parse comma-separated fields safely\r
        // Format: %d,%31[^,],%23[^,],%f\r
        if (sscanf(line_buf, "%d,%31[^,],%23[^,],%f",\r
                   &s.id, s.name, s.city, &s.marks) == 4) {\r
            // Write binary record to disk\r
            fwrite(&s, sizeof(CompactStudent), 1, bin_fp);\r
            converted_count++;\r
            printf("  [MIGRATED] ID: %d | Name: %-16s | City: %-12s | Marks: %.1f\\n",\r
                   s.id, s.name, s.city, s.marks);\r
        }\r
    }\r
\r
    fclose(csv_fp);\r
    fclose(bin_fp);\r
    printf("  Successfully migrated %d records to binary file '%s'.\\n\\n", converted_count, bin_path);\r
\r
    // 3. Verify binary file reading\r
    printf("--- 2. VERIFYING BINARY PERSISTENCE STORAGE ---\\n");\r
    bin_fp = fopen(bin_path, "rb");\r
    if (bin_fp != NULL) {\r
        CompactStudent read_s;\r
        int i = 1;\r
        while (fread(&read_s, sizeof(CompactStudent), 1, bin_fp) == 1) {\r
            printf("  Binary Record %d: ID=%d, Name=%s, Marks=%.1f\\n",\r
                   i++, read_s.id, read_s.name, read_s.marks);\r
        }\r
        fclose(bin_fp);\r
    }\r
\r
    // Cleanup\r
    remove(csv_path);\r
    remove(bin_path);\r
    printf("\\n  Cleaned up temporary migration files.\\n");\r
    printf("========================================================\\n");\r
\r
    return 0;\r
}\r
`,u=[{question:"What is CRUD in file-based database architecture?",answer:`CRUD represents the four fundamental operations of persistent storage:
- Create (Insert records via fwrite in 'ab' mode)
- Read (Retrieve records via fread and fseek in 'rb' mode)
- Update (Mutate existing fields via fseek and fwrite in 'rb+' mode)
- Delete (Mark tombstone or purge records via temp file compaction)`},{question:"What is the 'tombstone' pattern (soft delete) in file systems and why is it preferred over immediate hard deletion?",answer:"Hard deletion requires shifting all subsequent records forward on disk (O(N) write cost) or rewriting the entire file. Soft deletion simply sets a boolean flag (e.g. isActive = false) in O(1) time. Purging is deferred to background maintenance compaction."},{question:"Why should we use 'ab' mode for record insertion?",answer:"'ab' (Append Binary) mode automatically positions the file write pointer to the very end of the file before every write operation, guaranteeing that concurrent or consecutive writes never overwrite existing records."},{question:"How does Database Compaction (Purge) work in C?",answer:"Compaction streams active records from the master database file to a new temporary file (ignoring tombstoned inactive records). Once complete, fclose flushes both files, remove() deletes the old file, and rename() renames the temp file to the master filename."},{question:"Why is rename() preferred for atomic swapping of database files?",answer:"On POSIX filesystems and modern OS kernels, rename() is atomic within the same filesystem. If the power cuts out during compaction, the old database remains intact because the swap happens instantaneously at the filesystem metadata level."},{question:"How does fixed-width record architecture enable O(1) primary key indexing?",answer:"If records have sequential IDs (e.g., ID 100, 101, 102...) or an auxiliary hash/B-Tree index, the byte offset is computed directly as: offset = (ID - BASE_ID) * sizeof(Record). The OS seeks to the byte position in O(1) time without scanning intermediate records."},{question:"What happens if two processes open the same binary database in 'rb+' mode simultaneously without file locking?",answer:"Race conditions can occur: dirty reads, lost updates, or interleaved writes that corrupt record boundaries. Production database engines use advisory locking (e.g., fcntl() or flock() on POSIX, LockFileEx() on Windows)."},{question:"How do you handle string fields like name and course to avoid buffer overflow during file input?",answer:"Store strings in fixed-size arrays inside the struct (e.g. char name[50]), and populate them using strncpy() or snprintf() with explicit bounds, ensuring null-termination: name[MAX_NAME - 1] = '\\0'."},{question:"What is the memory footprint of keeping the entire database on disk vs loading it into RAM?",answer:"On disk, the database can scale to hundreds of gigabytes while the C program consumes only a few kilobytes of RAM (just one record buffer). In-memory arrays are limited by available physical RAM."},{question:"Why is fflush(fp) important after an in-place update in 'rb+' mode?",answer:"fflush forces the modified struct from libc's user-space stream buffer directly down to OS kernel page cache, ensuring modifications survive even if the program terminates abnormally right after."},{question:"How do you implement binary search on a sorted disk file?",answer:"Calculate low = 0 and high = totalRecords - 1. While low <= high, compute mid = low + (high - low) / 2. Jump using fseek(fp, mid * sizeof(Record), SEEK_SET), read the record with fread, and compare the key."},{question:"What is a 'Magic Number' in database file headers?",answer:"A fixed constant (e.g. 4 bytes: 0x53544442 for 'STDB') written at byte 0 of the file. On startup, the engine reads this header to verify that the file is indeed a valid database created by this engine, preventing corruption from opening arbitrary files."},{question:"What is the difference between sequential search and index-assisted search on binary files?",answer:"Sequential search scans all records from byte 0 (O(N) disk I/O). Index-assisted search keeps a lightweight in-memory array of (ID, DiskByteOffset) pairs, allowing instant O(1) or O(log N) lookup directly to the target byte."},{question:"Why should we avoid writing floats/doubles directly to disk if the file must be read on different CPU architectures?",answer:"While IEEE-754 is widely standard, different architectures may have different endianness for floating-point words. For extreme portability, floats are converted to fixed-point integers or serialized in standardized endian formats."},{question:"What is WAL (Write-Ahead Logging) in database systems?",answer:"A technique where changes are first appended sequentially to a log file before modifying the master database records. If a crash occurs mid-update, the engine replays the WAL on startup to restore consistency."},{question:"How do you count the number of active vs deleted records in a binary database?",answer:"Iterate through the file with fread(&rec, sizeof(rec), 1, fp). Maintain two counters: activeCount++ if rec.isActive is true, and deletedCount++ if rec.isActive is false."},{question:"Why is 'w+' mode inappropriate for opening an existing database for update?",answer:"'w+' immediately truncates (erases) the file to 0 bytes upon opening! To update an existing database without erasing its data, you must use 'rb+' (or 'r+')."},{question:"What is the purpose of fcloseall() or explicitly closing every FILE pointer?",answer:"Leaving file handles open causes file descriptor leaks. In long-running server processes, running out of file descriptors (EMFILE error) prevents new files or network sockets from opening."},{question:"Can a C binary file engine store dynamic variable-length records (e.g. comments of arbitrary length)?",answer:"Yes, by storing records in two files: an index file of fixed-size metadata containing (ID, Offset, Length) and a heap data file containing raw variable-length byte streams."},{question:"How do you implement rollback / undo in a simple C file engine?",answer:"Before executing an in-place overwrite, read the original record and store it in a transaction buffer. If an error occurs, seek back and re-write the old record."},{question:"What is the impact of structure alignment on total database file size?",answer:"Padding bytes inside structs consume disk space. For 10 million records, 4 bytes of padding per struct consumes 40 MB of extra disk space. Compacting or reordering fields (largest to smallest) minimizes padding waste."},{question:"How does the OS page cache accelerate repeated reads in a C binary file engine?",answer:"When fread reads 60 bytes, the OS reads an entire 4KB page from disk into RAM cache. Subsequent fseek/fread calls targeting nearby records are served directly from RAM without hitting physical disk platters/SSDs."},{question:"What is the difference between synchronous write (O_SYNC / fflush) and asynchronous write?",answer:"Asynchronous writes return immediately after copying to cache (fast). Synchronous writes wait until disk controller confirms bytes are physically recorded on non-volatile media (durable)."},{question:"Why should error handling accompany every fopen, fread, fwrite, and fseek call in a database engine?",answer:"File systems can fail at any moment due to permissions, full disks, unmounted drives, or hardware failures. Unchecked returns cause silent data corruption or undefined segmentation faults."},{question:"How do you test database engine resilience against unexpected termination?",answer:"By creating unit tests that simulate power interruption (e.g. calling abort() or exit() immediately after write operations) and verifying if compaction or recovery restores the database to a valid state."}],h=`======================================================================\r
C LANGUAGE LESSON NOTE: TOPIC 6 (MODULE 003_010)\r
CAPSTONE PROJECT: FILE-BASED STUDENT DATABASE ENGINE (CLI BINARY CRUD)\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE & SHYAMNAGAR)\r
======================================================================\r
\r
1. DATABASE ARCHITECTURE OVERVIEW\r
   - The engine implements a fixed-width binary table on disk.\r
   - Primary Key: Integer 'id' (Unique Identifier).\r
   - CRUD Operations:\r
     * CREATE -> fopen("master.dat", "ab") + fwrite(&rec, sizeof(Rec), 1, fp)\r
     * READ   -> fopen("master.dat", "rb") + fseek / fread sequential scan\r
     * UPDATE -> fopen("master.dat", "rb+") + fseek(offset) + fwrite(&rec)\r
     * DELETE -> Soft-delete (tombstone) + deferred background purge\r
\r
2. THE TOMBSTONE PATTERN (SOFT DELETE)\r
   - Why not immediately rewrite the file on delete?\r
     Immediate file rewriting is O(N) in time and disk wear.\r
   - Soft Delete sets bool isActive = false; in O(1) time.\r
   - Filter active records during queries: if (rec.isActive) { ... }\r
\r
3. COMPACTION & GARBAGE COLLECTION (PURGE)\r
   1. Stream active records from "master.dat" to "master_temp.dat".\r
   2. Skip inactive records (isActive == false).\r
   3. Close and flush both streams.\r
   4. Call remove("master.dat") followed by rename("master_temp.dat", "master.dat").\r
   5. Atomic filesystem swap guarantees consistency.\r
\r
4. SAFETY PROTOCOLS\r
   - Always check return values of fopen, fread, fwrite, fseek, and fclose.\r
   - Use fixed-size struct members (char name[50]) without raw pointers.\r
   - Use fflush(fp) after in-place updates to force user-space buffers to disk.\r
\r
======================================================================\r
Copyright (c) Sukanta Hui - C Programming Master Series\r
======================================================================\r
`;function A(){const[t,a]=i.useState(0),n=[{id:"ex1",title:"1. Persistent CRUD Binary Database Engine",file:f,filename:"StudentRecordDatabaseDemo.c",description:"Full industrial student database engine implementing Create, Read, Update, In-Place Soft Delete, and File Compaction (Vacuuming) to reclaim disk sectors.",lineByLine:[{line:"typedef struct { int id; ... int is_active; } StudentRecord;",explanation:"Fixed-size 64-byte struct containing an active status flag (is_active). Predictable struct size makes O(1) random seeking possible."},{line:"fseek(fp, -sizeof(StudentRecord), SEEK_CUR);",explanation:"After locating the target record, seeks backward by exactly 1 struct length to reposition the write cursor over the record's start."},{line:"rec.is_active = 0; fwrite(&rec, sizeof(StudentRecord), 1, fp);",explanation:"Soft Delete implementation! Flags the record as deleted in place without shifting subsequent data across the hard drive."},{line:'rename("temp_compaction.db", DB_FILE);',explanation:"Atomic compaction swap! Copies active records into a clean temporary file and renames it atomically to reclaim dead sector space."}],output:`========================================================
    CODER & ACCOTAX - STUDENT DATABASE ENGINE (CRUD)    
========================================================

--- 1. INSERTING INITIAL STUDENT RECORDS ---
  Inserted: [ID: 101] Swadeep Sharma     (Systems Engineering, GPA: 3.85)
  Inserted: [ID: 102] Tuhina Mukherjee   (Data Science, GPA: 3.95)
  Inserted: [ID: 103] Debangshu Roy      (Cloud Architecture, GPA: 3.60)
  Inserted: [ID: 104] Abhronila Das      (Cyber Security, GPA: 3.90)

--- 2. DISPLAYING ALL ACTIVE RECORDS ---
--------------------------------------------------------------------------------
ID     NAME                 DEPARTMENT           GPA    STATUS    
--------------------------------------------------------------------------------
101    Swadeep Sharma       Systems Engineering  3.85   ACTIVE    
102    Tuhina Mukherjee     Data Science         3.95   ACTIVE    
103    Debangshu Roy        Cloud Architecture   3.60   ACTIVE    
104    Abhronila Das        Cyber Security       3.90   ACTIVE    
--------------------------------------------------------------------------------

--- 3. UPDATING STUDENT RECORD (ID: 103) ---
  [UPDATE SUCCESS] Student ID 103 updated in-place via fseek().

--- 4. SOFT DELETING STUDENT RECORD (ID: 101) ---
  [SOFT DELETE SUCCESS] Student ID 101 flagged as DELETED in-place.

--- 5. DATABASE STATE BEFORE COMPACTION ---
--------------------------------------------------------------------------------
ID     NAME                 DEPARTMENT           GPA    STATUS    
--------------------------------------------------------------------------------
102    Tuhina Mukherjee     Data Science         3.95   ACTIVE    
103    Debangshu Roy        Systems Engineering  3.98   ACTIVE    
104    Abhronila Das        Cyber Security       3.90   ACTIVE    
--------------------------------------------------------------------------------

--- 6. PERFORMING DATABASE COMPACTION (VACUUM) ---
  Compacting database: 3 active records retained, 1 purged.
  [COMPACTION COMPLETE] Reclaimed dead sector space.

  Cleaned up temporary database files.
========================================================`},{id:"ex2",title:"2. Primary-Key Indexing & Instant Lookup",file:p,filename:"DatabaseIndexSearchDemo.c",description:"Maintains an in-memory index table mapping primary IDs directly to disk byte offsets, enabling instant O(1) record retrieval without scanning files.",lineByLine:[{line:"typedef struct { int id; long byte_offset; } IndexEntry;",explanation:"Compact index structure linking student ID to its physical file byte offset."},{line:"index_table->entries[count].byte_offset = ftell(fp);",explanation:"Scans database once during boot to register the disk byte positions of all active records."},{line:"fseek(fp, index_table->entries[i].byte_offset, SEEK_SET);",explanation:"Jumps the disk pointer directly to the indexed offset for ID 103 in 1 microsecond without scanning the file!"}],output:`========================================================
  CODER & ACCOTAX - DATABASE PRIMARY-KEY INDEXING LAB   
========================================================

  Seeded 4 student records into binary storage 'indexed_students.db'.

--- 1. IN-MEMORY PRIMARY-KEY INDEX TABLE ---
  [Index Entry 0] Student ID: 101 -> Disk Byte Offset:    0 bytes
  [Index Entry 1] Student ID: 102 -> Disk Byte Offset:   64 bytes
  [Index Entry 2] Student ID: 103 -> Disk Byte Offset:  128 bytes
  [Index Entry 3] Student ID: 104 -> Disk Byte Offset:  192 bytes

--- 2. FAST INDEXED QUERY FOR ID: 103 ---
  [RECORD LOCATED INSTANTLY VIA INDEX]
    ID         : 103
    Name       : Abhronila Das
    Department : Cyber Security
    GPA        : 3.85

  Cleaned up indexed database 'indexed_students.db'.
========================================================`},{id:"ex3",title:"3. CSV to Binary Migration Utility",file:m,filename:"CsvToBinaryConverterDemo.c",description:"Data ingestion pipeline that parses plain-text CSV spreadsheets and compiles them into compact binary storage records with validation.",lineByLine:[{line:"fgets(line_buf, sizeof(line_buf), csv_fp);",explanation:"Reads each comma-separated line safely from the input text file into memory."},{line:'sscanf(line_buf, "%d,%31[^,],%23[^,],%f", &s.id, s.name, s.city, &s.marks)',explanation:"Parses comma-separated tokens with strict buffer width limits to prevent overflow."},{line:"fwrite(&s, sizeof(CompactStudent), 1, bin_fp);",explanation:"Serializes the parsed C struct directly to the high-performance binary storage file."}],output:`========================================================
   CODER & ACCOTAX - CSV TO BINARY MIGRATION ENGINE     
========================================================

  Created source raw CSV file 'raw_students.csv'.

--- 1. PARSING CSV & WRITING PACKED BINARY CHUNKS ---
  [MIGRATED] ID: 201 | Name: Swadeep Sharma   | City: Barrackpore  | Marks: 88.5
  [MIGRATED] ID: 202 | Name: Tuhina Mukherjee | City: Shyamnagar   | Marks: 95.0
  [MIGRATED] ID: 203 | Name: Debangshu Roy    | City: Naihati      | Marks: 79.5
  [MIGRATED] ID: 204 | Name: Abhronila Das    | City: Ichapur      | Marks: 92.0
  Successfully migrated 4 records to binary file 'compact_students.bin'.

--- 2. VERIFYING BINARY PERSISTENCE STORAGE ---
  Binary Record 1: ID=201, Name=Swadeep Sharma, Marks=88.5
  Binary Record 2: ID=202, Name=Tuhina Mukherjee, Marks=95.0
  Binary Record 3: ID=203, Name=Debangshu Roy, Marks=79.5
  Binary Record 4: ID=204, Name=Abhronila Das, Marks=92.0

  Cleaned up temporary migration files.
========================================================`}];return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 003_010 · Topic 6"}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Capstone Systems Project"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Capstone Project: Persistent CLI Binary Student Database Engine"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Architect an industrial-grade binary database engine in pure C. Implement persistent CRUD operations, primary-key indexing, in-place soft deletes, CSV migration pipelines, and automated database compaction (vacuuming)."})]}),e.jsxs("section",{className:"space-y-5 bg-gradient-to-br from-emerald-950/40 via-slate-800/40 to-slate-900 border border-emerald-500/30 rounded-2xl p-6 md:p-8 shadow-xl",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-2xl p-2 bg-emerald-500/20 rounded-xl border border-emerald-500/30",children:"💡"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl md:text-2xl font-bold text-white",children:"In Very Simple Terms: How Real Databases Work Under the Hood"}),e.jsx("p",{className:"text-emerald-300 text-xs md:text-sm font-medium",children:"Fixed slots, soft delete flags, and database compaction"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 pt-2",children:[e.jsxs("div",{className:"bg-slate-900/80 border border-slate-700/60 rounded-xl p-4 space-y-2",children:[e.jsxs("div",{className:"text-amber-400 font-bold text-sm flex items-center gap-1.5",children:[e.jsx("span",{children:"🗄️"})," 1. Fixed Record Slots"]}),e.jsxs("p",{className:"text-slate-300 text-xs leading-relaxed",children:["Every student record occupies the exact same number of bytes (e.g. 64 bytes). This means student #500 is always at byte ",e.jsx("code",{children:"500 * 64 = 32,000"}),". No scanning needed!"]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-700/60 rounded-xl p-4 space-y-2",children:[e.jsxs("div",{className:"text-rose-400 font-bold text-sm flex items-center gap-1.5",children:[e.jsx("span",{children:"🗑️"})," 2. Soft Deletes (Why Not Erase?)"]}),e.jsxs("p",{className:"text-slate-300 text-xs leading-relaxed",children:["If you delete a record in a 10GB database, shifting all 10GB of data left to close the gap is too slow. Instead, we just flip a single flag: ",e.jsx("code",{children:"is_active = 0"}),". Instant delete!"]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-700/60 rounded-xl p-4 space-y-2",children:[e.jsxs("div",{className:"text-emerald-400 font-bold text-sm flex items-center gap-1.5",children:[e.jsx("span",{children:"🧹"})," 3. Compaction (Vacuuming)"]}),e.jsx("p",{className:"text-slate-300 text-xs leading-relaxed",children:"During scheduled maintenance, a compaction routine copies only active records to a new temporary file and renames it. This reclaims all wasted space seamlessly!"})]})]}),e.jsx("div",{className:"bg-slate-950/70 border border-slate-800 rounded-xl p-3 text-xs text-slate-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-2",children:e.jsxs("span",{children:["🚀 ",e.jsx("strong",{children:"Production Pattern:"})," Real database engines (like SQLite, PostgreSQL, and MySQL InnoDB) use this exact same binary page architecture to provide ACID reliability and millisecond queries!"]})})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Topic Description: Systems Capstone Architecture & Maintenance Operations"]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsx("p",{children:"This capstone project synthesizes all concepts learned throughout Module 003_010: Binary Streams, Struct Serialization, Random Seeking, In-Place Record Mutations, Error Diagnostics, and In-Memory Primary-Key Indexing into a coherent production-grade CLI storage engine."}),e.jsxs("div",{className:"bg-slate-900/60 p-4 rounded-xl border-l-4 border-emerald-500 text-xs md:text-sm text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-semibold text-emerald-300",children:"🏫 Classroom Story at Coder & AccoTax (Barrackpore):"}),e.jsxs("p",{children:["In our Barrackpore capstone session, Swadeep, Tuhina, Debangshu, and Abhronila built this exact persistent student database engine. When Swadeep tested the system by inserting 50,000 student records and searching by Roll Number, the in-memory index delivered search results in less than ",e.jsx("strong",{children:"1 millisecond"}),"! Sukanta Hui then triggered the compaction routine, showing how dead soft-deleted records were pruned cleanly without taking the database offline."]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"⚙️ Semantic Visual Diagram: Database Engine CRUD & Compaction Pipeline"}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 900 280",className:"w-full min-w-[750px] font-sans",children:[e.jsx("rect",{x:"20",y:"20",width:"860",height:"240",rx:"16",fill:"#0f172a",stroke:"#334155",strokeWidth:"2"}),e.jsxs("g",{transform:"translate(40, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"220",height:"180",rx:"10",fill:"#1e1b4b",stroke:"#6366f1",strokeWidth:"1.5"}),e.jsx("text",{x:"15",y:"30",fill:"#a5b4fc",className:"font-bold text-xs",children:"IN-MEMORY PRIMARY INDEX"}),e.jsx("rect",{x:"15",y:"45",width:"190",height:"25",fill:"#312e81",rx:"4"}),e.jsx("text",{x:"25",y:"62",fill:"#e0e7ff",className:"font-mono text-xs",children:"ID 101 → Offset 0B"}),e.jsx("rect",{x:"15",y:"75",width:"190",height:"25",fill:"#312e81",rx:"4"}),e.jsx("text",{x:"25",y:"92",fill:"#e0e7ff",className:"font-mono text-xs",children:"ID 102 → Offset 64B"}),e.jsx("rect",{x:"15",y:"105",width:"190",height:"25",fill:"#312e81",rx:"4"}),e.jsx("text",{x:"25",y:"122",fill:"#e0e7ff",className:"font-mono text-xs",children:"ID 103 → Offset 128B"}),e.jsx("text",{x:"15",y:"160",fill:"#818cf8",className:"text-xs",children:"O(1) Instant Offset Lookup"})]}),e.jsxs("g",{transform:"translate(300, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"270",height:"180",rx:"10",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"15",y:"30",fill:"#6ee7b7",className:"font-bold text-xs",children:"BINARY FILE (students.db)"}),e.jsx("rect",{x:"15",y:"45",width:"240",height:"30",fill:"#065f46",rx:"4"}),e.jsx("text",{x:"25",y:"65",fill:"#ecfdf5",className:"font-mono text-xs",children:"[101] Swadeep | ACTIVE"}),e.jsx("rect",{x:"15",y:"80",width:"240",height:"30",fill:"#7f1d1d",rx:"4"}),e.jsx("text",{x:"25",y:"100",fill:"#fee2e2",className:"font-mono text-xs",children:"[102] Tuhina | DELETED"}),e.jsx("rect",{x:"15",y:"115",width:"240",height:"30",fill:"#065f46",rx:"4"}),e.jsx("text",{x:"25",y:"135",fill:"#ecfdf5",className:"font-mono text-xs",children:"[103] Debangshu | ACTIVE"}),e.jsx("text",{x:"15",y:"168",fill:"#a7f3d0",className:"text-xs",children:"Soft Delete preserves file order"})]}),e.jsxs("g",{transform:"translate(610, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"180",rx:"10",fill:"#3b0764",stroke:"#d946ef",strokeWidth:"1.5"}),e.jsx("text",{x:"15",y:"30",fill:"#f5d0fe",className:"font-bold text-xs",children:"VACUUM / COMPACTION"}),e.jsx("rect",{x:"15",y:"45",width:"220",height:"30",fill:"#581c87",rx:"4"}),e.jsx("text",{x:"25",y:"65",fill:"#fae8ff",className:"font-mono text-xs",children:"[101] Swadeep | ACTIVE"}),e.jsx("rect",{x:"15",y:"80",width:"220",height:"30",fill:"#581c87",rx:"4"}),e.jsx("text",{x:"25",y:"100",fill:"#fae8ff",className:"font-mono text-xs",children:"[103] Debangshu | ACTIVE"}),e.jsx("text",{x:"15",y:"145",fill:"#e879f9",className:"text-xs",children:"Dead sectors purged cleanly!"})]})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"🔍 Deep Technical Breakdown: Database Engine Specifications"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-700 space-y-1.5",children:[e.jsx("h3",{className:"font-bold text-emerald-300 text-sm",children:"Storage Layout"}),e.jsxs("p",{className:"text-slate-300",children:["Fixed 64-byte packed binary struct layout guaranteeing predictable seek arithmetic: ",e.jsx("code",{children:"offset = slot * 64"}),"."]})]}),e.jsxs("div",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-700 space-y-1.5",children:[e.jsx("h3",{className:"font-bold text-sky-300 text-sm",children:"Soft Delete Idiom"}),e.jsxs("p",{className:"text-slate-300",children:["Sets ",e.jsx("code",{children:"is_active = 0"})," in place without moving subsequent records, maintaining $O(1)$ delete speed."]})]}),e.jsxs("div",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-700 space-y-1.5",children:[e.jsx("h3",{className:"font-bold text-purple-300 text-sm",children:"Atomic Vacuuming"}),e.jsxs("p",{className:"text-slate-300",children:["Active records are streamed to a temporary binary file and swapped into place using the atomic OS ",e.jsx("code",{children:"rename()"})," syscall."]})]})]})]}),e.jsxs("section",{className:"space-y-6 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/80 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: Capstone Database Engine Demonstrations"]}),e.jsx("p",{className:"text-slate-300 text-sm mt-1",children:"Explore 3 production programs with step-by-step line explanations and terminal outputs."})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:n.map((r,s)=>e.jsx("button",{onClick:()=>a(s),className:`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${t===s?"bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,children:r.title},r.id))})]}),e.jsxs("div",{className:"space-y-5",children:[e.jsxs("div",{className:"bg-slate-900/60 p-3.5 rounded-xl border border-slate-700/60 text-xs md:text-sm text-slate-300 flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"📋 Overview:"}),e.jsx("span",{children:n[t].description})]}),e.jsx(o,{fileModule:n[t].file,title:n[t].filename,editable:!1}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-700/80 rounded-xl p-4 md:p-5 space-y-3 shadow-md",children:[e.jsxs("div",{className:"text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx("span",{children:"🔍"})," Plain-English Line-by-Line Code Breakdown:"]}),e.jsx("div",{className:"space-y-2",children:n[t].lineByLine.map((r,s)=>e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-start gap-2 bg-slate-950/70 p-3 rounded-lg border border-slate-800/80",children:[e.jsx("code",{className:"text-sky-300 font-mono text-[11px] sm:w-2/5 shrink-0 font-semibold bg-slate-900 px-2 py-1 rounded border border-slate-700/60",children:r.line}),e.jsx("span",{className:"text-slate-300 text-xs leading-relaxed",children:r.explanation})]},s))})]}),e.jsxs("div",{className:"rounded-xl border border-slate-700 bg-slate-950 p-4 shadow-inner",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:n[t].output})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-rose-400",children:"⚠️ Common Pitfalls & Best Practices"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-900/30 p-4 rounded-xl space-y-1.5",children:[e.jsx("h3",{className:"font-bold text-rose-300",children:"Pitfall: Hard Deletions on Live Files"}),e.jsx("p",{className:"text-slate-300",children:"Truncating or shifting bytes in place on disk is notoriously error-prone. Always use soft deletes with flags, and compact into a separate file during quiet maintenance windows."})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-900/30 p-4 rounded-xl space-y-1.5",children:[e.jsx("h3",{className:"font-bold text-emerald-300",children:"Best Practice: Atomic Renames for Compaction"}),e.jsxs("p",{className:"text-slate-300",children:["When compacting files, write to ",e.jsx("code",{children:"temp_compaction.db"})," and swap using ",e.jsx("code",{children:'rename("temp_compaction.db", "students.db")'})," to avoid data loss if a crash occurs mid-vacuum."]})]})]})]}),e.jsxs("section",{className:"bg-slate-800/30 border border-slate-700/60 p-5 rounded-2xl space-y-2 text-xs md:text-sm",children:[e.jsxs("h3",{className:"font-bold text-amber-300 flex items-center gap-1.5",children:[e.jsx("span",{children:"🤔"})," Think About This..."]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["How would you implement a Write-Ahead Log (WAL) in C to guarantee zero data loss even if the computer loses power immediately after an ",e.jsx("code",{children:"fwrite()"})," call?"]})]}),e.jsx("section",{children:e.jsx(d,{title:"Module 003_010 Topic 6 FAQs: Capstone Database Engine",questions:u})}),e.jsx("section",{children:e.jsx(l,{content:h,title:"Module 003_010 Topic 6 Note: Capstone Database Engine",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_003_010_topic6_note.txt"})}),e.jsx("section",{children:e.jsx(c,{note:"Mastering file streams, binary struct serialization, in-memory index tables, and in-place random seeking gives you the exact skills needed to understand how enterprise database engines like PostgreSQL, MySQL, and SQLite work at the hardware level! — Sukanta Hui"})})]})}export{A as default};
