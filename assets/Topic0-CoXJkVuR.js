import{b as l,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as q}from"./TeacherSukantaHui-DerPxfxp.js";import{F as W}from"./FAQTemplate-BHhlgA96.js";import{P as _}from"./PlainTextPrint-C08xhKA4.js";import{E as G}from"./EditableCCodeBlock-DTHr_cCH.js";import"./vendor-icons-CH1iX9C8.js";import"./vendor-monaco-Bv7hoEkV.js";const $=[{id:1,question:"What is the physical address formula for accessing element `arr[i]` of type T with base address Base?",options:["Address(arr[i]) = Base + (i * sizeof(T))","Address(arr[i]) = Base + i","Address(arr[i]) = Base * (i + sizeof(T))","Address(arr[i]) = Base + (i / sizeof(T))"],answer:"Address(arr[i]) = Base + (i * sizeof(T))",explanation:"Because elements are stored contiguously in memory, the physical byte offset of index `i` is `i * sizeof(T)`. Adding this offset to the base pointer gives the exact memory address in O(1) time."},{id:2,question:"If an array `int arr[5]` starts at memory address 0x2000 on a 64-bit architecture where `sizeof(int) == 4`, what is the address of `arr[3]`?",options:["0x200C (0x2000 + 3 * 4 = 0x2000 + 12)","0x2003","0x2018","0x2004"],answer:"0x200C (0x2000 + 3 * 4 = 0x2000 + 12)",explanation:"Offset in decimal is 3 * 4 = 12 bytes. 12 in hexadecimal is 0xC. Therefore, address is 0x2000 + 0x000C = 0x200C."},{id:3,question:"Why does evaluating `arr[i]` take strictly O(1) constant time regardless of array length N?",options:["Because CPU hardware computes the direct physical memory address using a single addition and multiplication step (Base + i * size)","Because arrays are stored on disk","Because the operating system traverses linked pointers","Because the CPU caches the entire RAM"],answer:"Because CPU hardware computes the direct physical memory address using a single addition and multiplication step (Base + i * size)",explanation:"Direct offset calculation requires exactly one integer multiplication and one addition instruction (e.g. `LEA` on x86-64), taking O(1) clock cycles."},{id:4,question:"What happens in C when you write to an out-of-bounds index such as `arr[10] = 50` on a 5-element array allocated on the stack?",options:["Undefined Behavior: It silently overwrites adjacent stack memory (e.g. saved frame pointer or return address), potentially causing a crash or security vulnerability","The C runtime throws an `ArrayIndexOutOfBoundsException`","The stack automatically expands to accommodate index 10","The value 50 is ignored"],answer:"Undefined Behavior: It silently overwrites adjacent stack memory (e.g. saved frame pointer or return address), potentially causing a crash or security vulnerability",explanation:"C has zero runtime boundary checks. Writing out-of-bounds corrupts the call stack (stack smashing) or adjacent heap chunks."},{id:5,question:"What is the difference between `sizeof(arr)` for a static array `int arr[10]` versus a dynamic pointer `int* ptr = malloc(10 * sizeof(int))`?",options:["`sizeof(arr)` returns 40 bytes (total array footprint), while `sizeof(ptr)` returns 8 bytes (the pointer size on 64-bit systems)","Both return 40 bytes","Both return 8 bytes","`sizeof(arr)` returns 10 while `sizeof(ptr)` returns 40"],answer:"`sizeof(arr)` returns 40 bytes (total array footprint), while `sizeof(ptr)` returns 8 bytes (the pointer size on 64-bit systems)",explanation:"In C, `sizeof` on an array in scope returns total allocated bytes (`10 * 4 = 40`). A pointer decayed to `int*` returns pointer size (`8` bytes on 64-bit systems)."},{id:6,question:"What is the meaning of 'Array Decay' in C when an array is passed as a function argument?",options:["The array implicitly converts (decays) into a pointer to its first element (`&arr[0]`), losing its compile-time size information","The array elements are zeroed out","The array memory is deallocated","The array becomes immutable"],answer:"The array implicitly converts (decays) into a pointer to its first element (`&arr[0]`), losing its compile-time size information",explanation:"When passed to a function `void func(int a[])`, `a` is actually `int* a`. Inside `func`, `sizeof(a)` evaluates to pointer size (8 bytes), not the full array byte length."},{id:7,question:"How does pointer arithmetic scale when incrementing an `int*` pointer `p++` versus a `double*` pointer `q++`?",options:["`p++` increases the byte address by `sizeof(int)` (4 bytes), while `q++` increases the byte address by `sizeof(double)` (8 bytes)","Both increase by exactly 1 byte","Both increase by 8 bytes","`p++` increases by 4 bits"],answer:"`p++` increases the byte address by `sizeof(int)` (4 bytes), while `q++` increases the byte address by `sizeof(double)` (8 bytes)",explanation:"In C, adding integer `k` to pointer `p` advances the physical memory address by `k * sizeof(*p)` bytes."},{id:8,question:"Which of the following C expressions is equivalent to `arr[i]` according to the C standard?",options:["`*(arr + i)` and `i[arr]` and `*(i + arr)`","`&arr + i`","`arr->i`","`*(arr * i)`"],answer:"`*(arr + i)` and `i[arr]` and `*(i + arr)`",explanation:"The C subscript operator is defined as `E1[E2] == * (E1 + E2)`. Since pointer addition is commutative (`E1 + E2 == E2 + E1`), `arr[i]` is identical to `*(arr + i)`, `*(i + arr)`, and `i[arr]`."},{id:9,question:"What is the time complexity to insert an element at index 0 (the beginning) of a contiguous array of N elements?",options:["O(N) because all N existing elements must be shifted one position to the right","O(1)","O(log N)","O(N^2)"],answer:"O(N) because all N existing elements must be shifted one position to the right",explanation:"To preserve contiguous order, inserting at index 0 requires shifting elements from index `N-1` down to `0` rightwards by one slot, performing N copy operations."},{id:10,question:"What is the time complexity to delete an element at index `k` from an array of N elements if order MUST be preserved?",options:["O(N - k) which is O(N) in the worst case","O(1)","O(log N)","O(N^2)"],answer:"O(N - k) which is O(N) in the worst case",explanation:"All `N - 1 - k` elements following index `k` must be shifted one position leftwards to close the gap."},{id:11,question:"If element order does NOT need to be preserved, how can an element at index `k` be deleted in O(1) constant time?",options:["Overwrite `arr[k]` with the last element `arr[N-1]` and decrement the array size counter by 1","Set `arr[k] = 0`","Call `free(&arr[k])`","Shift all elements right"],answer:"Overwrite `arr[k]` with the last element `arr[N-1]` and decrement the array size counter by 1",explanation:"Swap-with-last (unordered erase) copies `arr[N-1]` into slot `k` and decrements size in O(1) operations."},{id:12,question:"What hardware mechanism explains why contiguous array iterations run significantly faster than linked list node traversals?",options:["CPU Spatial Locality: adjacent array bytes are loaded into 64-byte L1/L2 hardware Cache Lines, resulting in near 100% cache hits","Arrays bypass the CPU entirely","Linked lists use virtual memory","Arrays disable compiler optimizations"],answer:"CPU Spatial Locality: adjacent array bytes are loaded into 64-byte L1/L2 hardware Cache Lines, resulting in near 100% cache hits",explanation:"When `arr[0]` is read, the hardware prefetcher loads the next 64 bytes into L1 cache, allowing subsequent elements to be read in ~1ns instead of ~100ns main RAM latency."},{id:13,question:"What is the result of subtracting two pointers pointing to elements of the same array: `&arr[7] - &arr[2]`?",options:["5 (the number of elements of type T between the two pointers)","20 bytes","A null pointer","Compile error"],answer:"5 (the number of elements of type T between the two pointers)",explanation:"Pointer subtraction `p2 - p1` yields `ptrdiff_t`, which calculates `(Address2 - Address1) / sizeof(T)`. Here `(7 - 2) = 5` elements."},{id:14,question:"What is undefined behavior when comparing two pointers with relational operators (`p1 < p2`) in C?",options:["Comparing pointers that do NOT point to elements of the same array or struct object","Comparing two valid array pointers","Checking `p1 == NULL`","Comparing pointers of the same type"],answer:"Comparing pointers that do NOT point to elements of the same array or struct object",explanation:"The C ISO standard specifies that pointer relational comparisons (`<`, `>`, `<=`, `>=`) are only valid if both pointers point within or one element past the boundary of the same object."},{id:15,question:"Is it legal in C to create a pointer pointing one element past the end of an array (e.g. `int* end = &arr[N]`)?",options:["YES: It is valid to compute and hold the address `&arr[N]`, but dereferencing `*end` is strictly illegal and undefined behavior","NO: Creating `&arr[N]` triggers a compile error","YES: Dereferencing `*end` returns 0","NO: It causes an immediate crash"],answer:"YES: It is valid to compute and hold the address `&arr[N]`, but dereferencing `*end` is strictly illegal and undefined behavior",explanation:"C guarantees that pointers one-past-the-end can be calculated for use in loop termination bounds (like C++ `end()` iterators), but dereferencing them is undefined behavior."},{id:16,question:"What is the memory layout of an array of structs `struct Point { int x; int y; } pts[10]`?",options:["Contiguous alternating sequences: `[x0, y0, x1, y1, x2, y2, ...]` with zero gap between consecutive structs (Array of Structures - AoS)","Separate arrays for all X and all Y on the heap","Pointers to heap nodes","A hash table"],answer:"Contiguous alternating sequences: `[x0, y0, x1, y1, x2, y2, ...]` with zero gap between consecutive structs (Array of Structures - AoS)",explanation:"An Array of Structures (AoS) places full struct instances contiguously back-to-back in memory."},{id:17,question:"What is Struct Padding and how does it affect array footprint in C?",options:["The compiler inserts unused alignment bytes so struct fields align to natural hardware boundaries (e.g. 4 or 8 bytes), increasing each array element's total byte size","Padding adds extra array elements","Padding encrypts memory","Padding compresses strings"],answer:"The compiler inserts unused alignment bytes so struct fields align to natural hardware boundaries (e.g. 4 or 8 bytes), increasing each array element's total byte size",explanation:"For `struct Node { char c; int i; }`, `sizeof(Node)` is 8 bytes (1 char + 3 padding bytes + 4 int) to maintain 4-byte alignment, making a 10-element array consume 80 bytes instead of 50."},{id:18,question:"In C99, what is a Variable-Length Array (VLA) (e.g. `int arr[n]` where `n` is a runtime variable)?",options:["An array allocated on the physical Call Stack whose size is determined at runtime upon entering the enclosing block","An array allocated automatically on the Heap with `malloc`","A resizable vector","An array stored in CPU registers"],answer:"An array allocated on the physical Call Stack whose size is determined at runtime upon entering the enclosing block",explanation:"VLAs allocate memory on the execution stack frame. If `n` is excessively large (e.g. 10,000,000), it causes an immediate stack overflow crash without returning NULL."},{id:19,question:"Why do enterprise systems programming standards (like MISRA C and Linux kernel) discourage the use of VLAs?",options:["VLAs risk unrecoverable Stack Overflow crashes because stack memory cannot be checked for allocation failure","VLAs are too slow to access","VLAs cannot store integers","VLAs require heap garbage collection"],answer:"VLAs risk unrecoverable Stack Overflow crashes because stack memory cannot be checked for allocation failure",explanation:"Stack allocations have fixed OS limits (typically 1-8 MB). Unchecked runtime variable allocations can blow through the stack guard page and cause fatal crashes."},{id:20,question:"What is the time complexity of reversing an array of N elements in-place using two pointers?",options:["O(N) time and O(1) auxiliary space","O(N^2) time and O(N) space","O(log N) time and O(1) space","O(N log N) time and O(N) space"],answer:"O(N) time and O(1) auxiliary space",explanation:"Swapping elements from outer ends `left` and `right` towards the center takes `N / 2` swap steps, executing in linear O(N) time and O(1) extra space."},{id:21,question:"What is the purpose of `memset(arr, 0, sizeof(arr))` in C?",options:["Fills every byte of the array's memory block with 0 in high-speed hardware block-fill instructions","Deallocates the array","Reverses the array","Sorts the array"],answer:"Fills every byte of the array's memory block with 0 in high-speed hardware block-fill instructions",explanation:"`memset(dest, val, count)` writes the byte value `val` across `count` contiguous memory addresses."},{id:22,question:"Why does `memset(arr, 1, sizeof(arr))` FAIL to set all elements of an `int arr[10]` array to the integer 1?",options:["Because `memset` operates byte-by-byte, filling each 4-byte integer with `0x01010101` (value 16,843,009) rather than integer 1","Because memset only works on strings","Because 1 is a reserved character","Because memset requires negative numbers"],answer:"Because `memset` operates byte-by-byte, filling each 4-byte integer with `0x01010101` (value 16,843,009) rather than integer 1",explanation:"`memset` sets individual byte values. For a 4-byte integer, setting every byte to `0x01` results in `0x01010101 = 16,843,009`."},{id:23,question:"What is the difference between `memcpy()` and `memmove()` when copying array elements within the same buffer?",options:["`memmove()` safely handles overlapping memory source and destination regions, while `memcpy()` leads to undefined corruption if regions overlap","`memcpy()` is for integers and `memmove()` is for floats","`memcpy()` allocates heap memory automatically","There is no difference"],answer:"`memmove()` safely handles overlapping memory source and destination regions, while `memcpy()` leads to undefined corruption if regions overlap",explanation:"When shifting array elements (e.g. shifting elements right during insertion), source and destination overlap. `memmove()` uses a temporary buffer or copies in reverse direction to prevent self-overwriting."},{id:24,question:"How can you find the second largest element in a contiguous array of N elements in a single pass?",options:["Maintain two variables `firstMax` and `secondMax`, updating both in a single O(N) linear scan","Sort the array with QuickSort in O(N log N)","Run two nested loops in O(N^2)","Use binary search"],answer:"Maintain two variables `firstMax` and `secondMax`, updating both in a single O(N) linear scan",explanation:"In a single pass through the array, if `arr[i] > firstMax`, set `secondMax = firstMax` and `firstMax = arr[i]`. If `arr[i] < firstMax && arr[i] > secondMax`, update `secondMax = arr[i]`."},{id:25,question:"What is the maximum number of elements an array declared as `int arr[100]` can safely store?",options:["100 elements (at indices 0 through 99)","101 elements","99 elements","Unlimited"],answer:"100 elements (at indices 0 through 99)",explanation:"An array dimension of size N provides exactly N discrete slots, indexed from `0` to `N - 1`."},{id:26,question:"What is the primary operational difference between `malloc(n * sizeof(int))` and `calloc(n, sizeof(int))` in C?",options:["`malloc` leaves allocated memory uninitialized containing arbitrary garbage values, whereas `calloc` zeroes out all allocated bytes (0x00)","`malloc` allocates memory on the Stack while `calloc` allocates on the Heap","`malloc` is only for integers while `calloc` is for characters","`calloc` cannot be freed with `free()`"],answer:"`malloc` leaves allocated memory uninitialized containing arbitrary garbage values, whereas `calloc` zeroes out all allocated bytes (0x00)",explanation:"`malloc` directly returns the allocated heap chunk without zeroing bits, making it faster when all elements are overwritten immediately. `calloc` guarantees zero-initialization, preventing uninitialized memory reads."},{id:27,question:"Why does `calloc(num_elements, element_size)` take two arguments instead of one total byte count?",options:["To check for integer multiplication overflow before attempting memory allocation","Because the C compiler requires row and column dimensions","To separate memory between CPU and GPU","Because of a syntax legacy in C89"],answer:"To check for integer multiplication overflow before attempting memory allocation",explanation:"If `num_elements * element_size` exceeds `SIZE_MAX`, an integer overflow wraps around to a small number. `calloc` detects this multiplication overflow internally and safely returns `NULL` without allocating inadequate memory."},{id:28,question:"What does `realloc(ptr, new_size)` do if the existing heap memory block cannot be expanded in-place?",options:["It allocates a new contiguous memory block elsewhere on the heap, copies existing data over, automatically frees the old block, and returns the new pointer","It throws an exception and terminates the process","It corrupts adjacent heap memory chunks","It converts the array to a linked list"],answer:"It allocates a new contiguous memory block elsewhere on the heap, copies existing data over, automatically frees the old block, and returns the new pointer",explanation:"When contiguous space adjacent to the current block is unavailable, `realloc` allocates a fresh block of `new_size`, migrates `min(old_size, new_size)` bytes, releases the old block, and returns the updated pointer address."},{id:29,question:"Why is writing `ptr = NULL;` immediately after `free(ptr);` considered an essential defensive programming standard?",options:["It eliminates Dangling Pointers and ensures any subsequent accidental dereference crashes immediately at address 0x0 rather than corrupting memory silently (Use-After-Free)","It returns physical RAM to the motherboard faster","It speeds up CPU clock cycles","It is required by the C standard to avoid compilation errors"],answer:"It eliminates Dangling Pointers and ensures any subsequent accidental dereference crashes immediately at address 0x0 rather than corrupting memory silently (Use-After-Free)",explanation:"`free(ptr)` marks heap memory as reusable by the allocator, but the variable `ptr` retains the dead memory address. Setting `ptr = NULL` neutralizes the pointer. Furthermore, `free(NULL)` is a safe no-op in standard C, preventing double-free bugs."},{id:30,question:"What is the result of dereferencing a NULL pointer `int *p = NULL; int val = *p;` on modern protected memory operating systems?",options:["Segmentation Fault (SIGSEGV) / Access Violation due to page fault on protected address 0x0","The value 0 is returned","The program prompts the user for input","The CPU resets"],answer:"Segmentation Fault (SIGSEGV) / Access Violation due to page fault on protected address 0x0",explanation:"Virtual memory systems deliberately unmap the lowest address page (`0x00000000`) so that dereferencing a NULL pointer triggers an immediate MMU page fault and terminates the faulty process before data corruption occurs."}],F=`================================================================================
CODER & ACCOTAX - PRINTABLE STUDY NOTE
Subject: Data Structures & Algorithms in C
Module: Array Data Structure, Dynamic Arrays & Matrix Algorithms
Topic 0: Array Foundations, Memory Models, malloc vs calloc, Pointer Arithmetic & Dynamic Sizing
Mentor: Sukanta Hui (Barrackpore, West Bengal)
================================================================================

1. CORE CONCEPT & MEMORY LAYOUT
--------------------------------------------------------------------------------
An Array in C is a collection of elements of identical data types stored in 
contiguous physical memory addresses.

Base Address Formula for 1D Array:
  Address(A[i]) = Base_Address + (i * sizeof(element_type))

Base Address Formula for 2D Array (Row-Major Order in C):
  Address(A[i][j]) = Base_Address + (i * NUM_COLS + j) * sizeof(element_type)


2. HEAP DYNAMIC ALLOCATION: malloc vs calloc vs realloc
--------------------------------------------------------------------------------
Feature             malloc()                    calloc()
--------------------------------------------------------------------------------
Meaning             Memory Allocation           Contiguous Allocation
Arguments           1: (total_bytes)            2: (num_elements, element_size)
Initialization      NONE (Garbage Values)       ZERO-INITIALIZED (All bytes 0x00)
Syntax              int* p = malloc(n*sizeof(T)) int* p = calloc(n, sizeof(T))
Speed               Faster (no zeroing step)    Slightly slower (clears memory)
Safety              Risk of uninitialized read  Safe against garbage values
Overflow Check      No internal overflow check  Checks for multiplication overflow


3. MEMORY LIFECYCLE & SAFETY PROTOCOL
--------------------------------------------------------------------------------
1. Allocation:
   int *arr = (int *)malloc(10 * sizeof(int));
   if (arr == NULL) { /* Handle allocation failure */ }

2. Reallocation:
   int *temp = (int *)realloc(arr, 20 * sizeof(int));
   if (temp != NULL) { arr = temp; }

3. Deallocation & Neutralization:
   free(arr);
   arr = NULL;  // CRITICAL: Neutralize dangling pointer immediately!


4. POINTER ARITHMETIC IN C
--------------------------------------------------------------------------------
Given \`int *ptr = arr;\`:
- \`*(ptr + i)\` is exactly identical to \`arr[i]\` and \`i[arr]\`.
- Incrementing a pointer (\`ptr++\`) advances the physical memory address by 
  \`sizeof(type)\` bytes (e.g. 4 bytes for 32-bit int, 8 bytes for double).


5. TIME & SPACE COMPLEXITY CHEATSHEET
--------------------------------------------------------------------------------
Operation           Time Complexity     Space Complexity
--------------------------------------------------------------------------------
Index Access        O(1)                O(1)
Search (Unsorted)   O(n)                O(1)
Search (Sorted)     O(log n)            O(1)
Insertion at End    O(1) amortized      O(1)
Insertion at Start  O(n)                O(1)
Deletion at Index   O(n)                O(1)


6. COMMON PITFALLS & MEMORY BUG RISKS
--------------------------------------------------------------------------------
- Buffer Overflow: Writing beyond array boundaries corrupts memory.
- Memory Leak: Forgetting to call \`free()\` after \`malloc()\`/\`calloc()\`.
- Dangling Pointer: Accessing pointer memory after calling \`free(ptr)\`.
- Dangling Pointer Solution: Set \`ptr = NULL;\` immediately after \`free(ptr)\`.
- Double Free: Calling \`free()\` twice on the same non-NULL pointer.

================================================================================
Coder & AccoTax Computer Education Center · Barrackpore, West Bengal, India
================================================================================
`,S=`#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

// ============================================================================
// CODER & ACCOTAX BARRACKPORE LAB - C MEMORY ARCHITECTURE & DSA
// Topic: malloc vs calloc, Pointer Arithmetic & Dynamic Array Mechanics
// ============================================================================

// Structure for Dynamic Array on Heap
typedef struct {
    int *data;          // Pointer to dynamically allocated heap array block
    size_t size;        // Number of elements currently stored
    size_t capacity;    // Maximum capacity allocated before resizing
} DynamicArray;

// Initialize dynamic array using malloc (Uninitialized raw memory)
void initArrayWithMalloc(DynamicArray *arr, size_t initialCapacity) {
    arr->data = (int *)malloc(initialCapacity * sizeof(int));
    if (!arr->data) {
        fprintf(stderr, "[FATAL] malloc() failed to allocate %zu bytes!\\n", initialCapacity * sizeof(int));
        exit(EXIT_FAILURE);
    }
    arr->size = 0;
    arr->capacity = initialCapacity;
    printf("[MALLOC] Allocated %zu bytes for %zu integers at address: %p\\n",
           initialCapacity * sizeof(int), initialCapacity, (void*)arr->data);
}

// Demonstrate calloc() vs malloc()
void demonstrateMallocVsCalloc(size_t count) {
    printf("\\n========================================================\\n");
    printf("  DEMO: malloc() vs calloc() Memory Initialization\\n");
    printf("========================================================\\n");

    // 1. malloc(): Allocates raw memory (contains garbage values)
    int *mPtr = (int *)malloc(count * sizeof(int));
    if (!mPtr) return;

    printf("\\n[1] malloc(%zu * sizeof(int)) Output (Uninitialized Garbage Values):\\n", count);
    for (size_t i = 0; i < count; i++) {
        printf("    mPtr[%zu] at %p = %d (Garbage)\\n", i, (void*)(mPtr + i), *(mPtr + i));
    }

    // 2. calloc(): Allocates and zero-initializes every single byte
    int *cPtr = (int *)calloc(count, sizeof(int));
    if (!cPtr) {
        free(mPtr);
        return;
    }

    printf("\\n[2] calloc(%zu, sizeof(int)) Output (Guaranteed Zero-Initialized):\\n", count);
    for (size_t i = 0; i < count; i++) {
        printf("    cPtr[%zu] at %p = %d (Clean Zero)\\n", i, (void*)(cPtr + i), *(cPtr + i));
    }

    // Defensive Deallocation Protocol
    free(mPtr);
    mPtr = NULL; // Neutralize dangling pointer

    free(cPtr);
    cPtr = NULL; // Neutralize dangling pointer
    printf("\\n[CLEANUP] Both heap memory blocks freed and pointers neutralized to NULL.\\n");
}

// Push Element at End with Amortized O(1) Capacity Doubling using realloc()
void pushBack(DynamicArray *arr, int value) {
    if (arr->size == arr->capacity) {
        size_t newCapacity = arr->capacity * 2;
        int *newData = (int *)realloc(arr->data, newCapacity * sizeof(int));
        if (!newData) {
            fprintf(stderr, "[ERROR] realloc() failed!\\n");
            return;
        }
        arr->data = newData;
        arr->capacity = newCapacity;
        printf("[REALLOC] Resized capacity from %zu to %zu elements (Address: %p)\\n",
               arr->capacity / 2, arr->capacity, (void*)arr->data);
    }
    arr->data[arr->size++] = value;
    printf("[PUSH] Added %d (Size: %zu, Capacity: %zu)\\n", value, arr->size, arr->capacity);
}

// Insert Element at Index - O(n) Shifting
void insertAt(DynamicArray *arr, size_t index, int value) {
    if (index > arr->size) {
        printf("[WARNING] Index %zu out of bounds!\\n", index);
        return;
    }
    if (arr->size == arr->capacity) {
        pushBack(arr, value);
        return;
    }
    // Shift elements right
    for (size_t i = arr->size; i > index; i--) {
        arr->data[i] = arr->data[i - 1];
    }
    arr->data[index] = value;
    arr->size++;
    printf("[INSERT] Inserted %d at index %zu\\n", value, index);
}

// Delete Element at Index - O(n) Shifting
void deleteAt(DynamicArray *arr, size_t index) {
    if (index >= arr->size) {
        printf("[WARNING] Delete index %zu out of bounds!\\n", index);
        return;
    }
    int removedVal = arr->data[index];
    // Shift elements left
    for (size_t i = index; i < arr->size - 1; i++) {
        arr->data[i] = arr->data[i + 1];
    }
    arr->size--;
    printf("[DELETE] Removed %d from index %zu\\n", removedVal, index);
}

// Print Array Contents & Physical Pointer Memory Addresses
void printMemoryDetails(const DynamicArray *arr) {
    printf("\\n--- Physical Memory Map (Address = Base + i * sizeof(int)) ---\\n");
    for (size_t i = 0; i < arr->size; i++) {
        int *addr = arr->data + i;
        ptrdiff_t offset = (char*)addr - (char*)arr->data;
        printf("Index [%zu] | Address: %p | Offset: +%2td B | Value: %3d | *(data + %zu) = %3d\\n",
               i, (void*)addr, offset, arr->data[i], i, *(arr->data + i));
    }
    printf("---------------------------------------------------------------\\n\\n");
}

// Clean up heap memory and neutralize pointer
void freeArray(DynamicArray *arr) {
    free(arr->data);
    arr->data = NULL;
    arr->size = 0;
    arr->capacity = 0;
    printf("[CLEANUP] Dynamic array memory freed. Pointer set to NULL.\\n");
}

// Demonstrate Row-Major Order 2D Array Address Mapping
void demonstrate2DMatrix() {
    printf("\\n========================================================\\n");
    printf("  2D Matrix Memory Layout (Row-Major Order in C)\\n");
    printf("========================================================\\n");
    int rows = 3, cols = 4;
    int matrix[3][4] = {
        {10, 20, 30, 40},
        {50, 60, 70, 80},
        {90, 100, 110, 120}
    };

    printf("2D Array Element Addresses (Contiguous Block in RAM):\\n");
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            int *calculatedAddr = (int *)matrix + (i * cols + j);
            printf("matrix[%d][%d] = %3d at %p (Offset: +%2ld bytes)\\n",
                   i, j, matrix[i][j], (void*)calculatedAddr,
                   (char*)calculatedAddr - (char*)matrix);
        }
    }
    printf("\\n");
}

int main() {
    printf("========================================================\\n");
    printf("  CODER & ACCOTAX - DYNAMIC MEMORY & ARRAY LAB IN C\\n");
    printf("  Mentor: Sukanta Hui · Barrackpore, West Bengal\\n");
    printf("========================================================\\n");

    // 1. Demonstrate malloc vs calloc directly
    demonstrateMallocVsCalloc(5);

    // 2. Dynamic Array Lifecycle with malloc, realloc, and free
    printf("\\n========================================================\\n");
    printf("  Dynamic Array Growth & Pointer Arithmetic\\n");
    printf("========================================================\\n");
    DynamicArray arr;
    initArrayWithMalloc(&arr, 2);

    pushBack(&arr, 10);
    pushBack(&arr, 20);
    pushBack(&arr, 30);
    pushBack(&arr, 40);
    pushBack(&arr, 50);

    insertAt(&arr, 2, 25);
    printMemoryDetails(&arr);

    deleteAt(&arr, 1);
    printMemoryDetails(&arr);

    freeArray(&arr);

    // 3. Demonstrate 2D Matrix Address Mapping
    demonstrate2DMatrix();

    return 0;
}
`,c=[-858993460,32767,-1073741824,4199616,-2147483648,1431655765,-1,7352];function ee(){const g=l.useRef([]),[u,f]=l.useState("malloc"),[n,x]=l.useState([{val:c[0],isGarbage:!0,isInitialized:!1},{val:c[1],isGarbage:!0,isInitialized:!1},{val:c[2],isGarbage:!0,isInitialized:!1},{val:c[3],isGarbage:!0,isInitialized:!1},{val:c[4],isGarbage:!0,isInitialized:!1}]),[p,H]=l.useState(8192),[i,b]=l.useState(4),[m,L]=l.useState("int"),[z,y]=l.useState(0),[r,v]=l.useState(!1),[w,N]=l.useState(!1),[O,s]=l.useState("malloc(5 * sizeof(int)) executed: 20 bytes allocated on Heap. Memory contains uninitialized garbage values!"),[C,k]=l.useState(""),[j,I]=l.useState(0);l.useEffect(()=>{const t=new IntersectionObserver(a=>{a.forEach(o=>{o.isIntersecting&&o.target.classList.add("is-visible")})},{threshold:.08});return g.current.forEach(a=>{a&&t.observe(a)}),()=>t.disconnect()},[]);const d=t=>{t&&!g.current.includes(t)&&g.current.push(t)},M=(t=5)=>{v(!1),N(!1),f("malloc");const a=Array.from({length:t},(o,h)=>({val:c[h%c.length],isGarbage:!0,isInitialized:!1}));x(a),y(0),s(`malloc(${t} * sizeof(${m})): Allocated ${t*i} bytes on Heap at 0x${p.toString(16).toUpperCase()}. WARNING: Bytes are uninitialized (Garbage values)!`)},T=(t=5)=>{v(!1),N(!1),f("calloc");const a=Array.from({length:t},()=>({val:0,isGarbage:!1,isInitialized:!0}));x(a),y(0),s(`calloc(${t}, sizeof(${m})): Allocated ${t*i} bytes on Heap at 0x${p.toString(16).toUpperCase()}. All ${t*i} bytes are zero-cleared to 0x00!`)},P=(t=7)=>{if(r){s("Cannot realloc() already freed memory block! Please allocate fresh memory first.");return}f("realloc");const a=n.length;let o=[];t>a?(o=[...n,...Array.from({length:t-a},(h,A)=>({val:c[(a+A)%c.length],isGarbage:!0,isInitialized:!1}))],s(`realloc(ptr, ${t} * sizeof(${m})): Expanded memory from ${a*i}B to ${t*i}B. Existing elements preserved, newly allocated slots contain garbage!`)):(o=n.slice(0,t),s(`realloc(ptr, ${t} * sizeof(${m})): Shrunk memory to ${t*i}B. Excess trailing memory released to OS.`)),x(o)},D=()=>{if(r){s("ERROR: Attempted to write to freed heap memory! Segmentation fault / Heap corruption.");return}x(t=>t.map((a,o)=>({val:(o+1)*10+5,isGarbage:!1,isInitialized:!0}))),s(`Written valid data into all ${n.length} heap slots via pointer dereference (*(ptr + i) = val).`)},E=()=>{if(r){s("ERROR: Cannot write to deallocated pointer memory!");return}const t=parseInt(j,10),a=parseInt(C,10);if(isNaN(t)||t<0||t>=n.length){s(`Index ${j} is out of bounds! Valid indices: 0 to ${n.length-1}.`);return}if(isNaN(a)){s("Please enter a valid numeric value.");return}x(o=>o.map((h,A)=>A===t?{val:a,isGarbage:!1,isInitialized:!0}:h)),y(t),s(`Assigned ptr[${t}] = ${a} (*(ptr + ${t}) = ${a}) at address 0x${(p+t*i).toString(16).toUpperCase()}.`),k("")},B=()=>{if(r){s("WARNING: Double Free detected! Calling free() twice on the same pointer triggers undefined behavior / crash.");return}v(!0),f("free"),s(`free(ptr) executed: Reclaimed ${n.length*i} bytes on Heap. CRITICAL: Pointer 'ptr' is now a DANGLING POINTER pointing to dead memory!`)},R=()=>{if(!r){s("Please call free(ptr) before setting ptr = NULL to avoid memory leaks.");return}N(!0),s("Defensive Protocol Applied: ptr = NULL; Dangling pointer neutralized! Safe from Use-After-Free.")},U=()=>{if(n.length===0)return;const t=(z+1)%n.length;y(t);const a=p+t*i;s(`Pointer Arithmetic: ptr + ${t} → Physical Address 0x${a.toString(16).toUpperCase()} (Offset +${t*i}B). Dereferenced value = ${n[t]?.val}`)};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .reveal-section {
          opacity: 0.99;
          transform: translateY(0);
          transition: opacity 0.4s ease-out, transform 0.4s ease-out;
        }
        .reveal-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}),e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 md:p-12 font-sans selection:bg-cyan-500/30 selection:text-cyan-200",children:[e.jsxs("header",{ref:d,className:"reveal-section max-w-5xl mx-auto mb-12 text-center space-y-4",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-700/60 text-cyan-300 text-xs font-semibold uppercase tracking-wider shadow-lg",children:[e.jsx("span",{children:"⚡"}),e.jsx("span",{children:"DSA Segment 1 · Topic 0"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 tracking-tight leading-tight",children:"Contiguous Memory Layout, malloc vs calloc, and Physical Address Calculation"}),e.jsxs("p",{className:"text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed",children:["Deep architectural breakdown of Heap Dynamic Allocation (",e.jsx("code",{children:"malloc"})," uninitialized raw memory vs ",e.jsx("code",{children:"calloc"})," zero-cleared memory), pointer arithmetic formulas, reallocation mechanics, and memory safety invariants."]}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-2",children:[e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-cyan-400",children:"Course Code: DSA-C-100"}),e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-sky-400",children:"Center: Coder & AccoTax (Barrackpore Lab)"}),e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-emerald-400",children:"Mentor: Sukanta Hui"})]})]}),e.jsx("section",{ref:d,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:e.jsxs("div",{className:"bg-gradient-to-br from-slate-900 via-slate-900/90 to-cyan-950/30 border border-cyan-500/30 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-2xl",children:"👨‍🏫"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-cyan-300",children:"Teacher's Desk: Physical Memory Intuition & malloc vs calloc"}),e.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Sukanta Hui & Barrackpore Lab Classroom Dialogue"})]})]}),e.jsxs("div",{className:"space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base",children:[e.jsxs("div",{className:"bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("h3",{className:"text-cyan-400 font-bold flex items-center gap-2 text-base",children:[e.jsx("span",{children:"💡"})," The Physical Difference: malloc vs calloc in Silicon Hardware"]}),e.jsx("p",{children:"Think of requesting memory from the OS like renting apartments in a building:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-xs sm:text-sm text-slate-300 pl-2",children:[e.jsxs("li",{children:[e.jsx("b",{className:"text-amber-300",children:"malloc(n * sizeof(int))"})," is like handing you the keys to an apartment immediately after the previous tenant moved out without cleaning it. The rooms are filled with leftover junk (",e.jsx("b",{className:"text-amber-400",children:"Garbage Values"}),"). It is fast because the OS doesn't wipe anything, but reading before writing causes subtle bugs."]}),e.jsxs("li",{children:[e.jsx("b",{className:"text-emerald-300",children:"calloc(n, sizeof(int))"})," sends in a professional cleaning crew that scrubs every single room and sets every single byte to zero (",e.jsx("b",{className:"text-emerald-400",children:"0x00"}),"). It is clean, safe, and guarantees zero garbage data."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("h3",{className:"text-sky-400 font-bold flex items-center gap-2 text-base",children:[e.jsx("span",{children:"💬"})," Barrackpore Lab Classroom Discussion"]}),e.jsxs("div",{className:"space-y-3 text-xs sm:text-sm font-sans border-l-2 border-cyan-500/40 pl-4 py-1",children:[e.jsxs("p",{children:[e.jsx("strong",{className:"text-emerald-400",children:"Swadeep:"})," ",e.jsxs("em",{children:['"Sir, why does ',e.jsx("code",{children:"malloc()"})," take 1 argument while ",e.jsx("code",{children:"calloc()"}),' takes 2 arguments?"']})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-cyan-300",children:"Sukanta Sir:"})," ",e.jsxs("em",{children:['"Great observation! ',e.jsx("code",{children:"malloc(total_bytes)"})," takes the raw total byte count directly (e.g. ",e.jsx("code",{children:"malloc(5 * 4)"}),"). ",e.jsx("code",{children:"calloc(num_elements, element_size)"}),' takes the count and the type size separately so it can check for arithmetic integer multiplication overflow before zero-clearing the heap block."']})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-emerald-400",children:"Tuhina:"})," ",e.jsxs("em",{children:['"And what happens if we forget to call ',e.jsx("code",{children:"free()"})," or forget to set ",e.jsx("code",{children:"ptr = NULL"}),'?"']})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-cyan-300",children:"Sukanta Sir:"})," ",e.jsxs("em",{children:['"If you omit ',e.jsx("code",{children:"free()"}),", you cause a ",e.jsx("b",{children:"Memory Leak"})," where Heap RAM remains occupied forever until the process terminates. If you call ",e.jsx("code",{children:"free(ptr)"})," but don't write ",e.jsx("code",{children:"ptr = NULL;"}),", ",e.jsx("code",{children:"ptr"})," becomes a ",e.jsx("b",{children:"Dangling Pointer"}),'. Dereferencing it later triggers a devastating Use-After-Free vulnerability!"']})]})]})]})]})]})}),e.jsx("section",{ref:d,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:e.jsxs("div",{className:"bg-slate-900/90 border border-cyan-500/30 rounded-2xl p-6 md:p-8 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-cyan-300 flex items-center gap-2",children:[e.jsx("span",{children:"🔬"})," Dynamic Memory Allocation & Address Studio"]}),e.jsxs("p",{className:"text-xs text-slate-400 font-mono mt-1",children:["Live simulation of Heap allocation (",e.jsx("code",{children:"malloc"})," vs ",e.jsx("code",{children:"calloc"}),"), ",e.jsx("code",{children:"realloc"}),", and pointer address mapping"]})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsxs("div",{className:"px-3 py-1 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300",children:["Mode: ",e.jsx("strong",{className:"text-white uppercase",children:u})]}),e.jsxs("div",{className:"px-3 py-1 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-sky-300",children:["Size: ",e.jsxs("strong",{className:"text-white",children:[n.length," elements (",n.length*i,"B)"]})]}),e.jsxs("div",{className:"px-3 py-1 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono",children:["State: ",e.jsx("strong",{className:r?w?"text-slate-400":"text-rose-400":"text-emerald-300",children:r?w?"FREED (ptr=NULL)":"DANGLING POINTER ⚠️":"ACTIVE ON HEAP"})]})]})]}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-slate-950/80 border border-slate-800",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsxs("button",{onClick:()=>M(5),className:`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-md ${u==="malloc"&&!r?"bg-amber-500 text-slate-950 shadow-amber-500/20":"bg-slate-900 text-amber-300 hover:bg-slate-800 border border-amber-500/30"}`,children:[e.jsx("span",{children:"📦"}),e.jsxs("span",{children:["malloc(5 * sizeof(",m,"))"]})]}),e.jsxs("button",{onClick:()=>T(5),className:`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-md ${u==="calloc"&&!r?"bg-emerald-500 text-slate-950 shadow-emerald-500/20":"bg-slate-900 text-emerald-300 hover:bg-slate-800 border border-emerald-500/30"}`,children:[e.jsx("span",{children:"🧼"}),e.jsxs("span",{children:["calloc(5, sizeof(",m,"))"]})]}),e.jsxs("button",{onClick:()=>P(n.length===5?8:5),className:`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-md ${u==="realloc"&&!r?"bg-sky-500 text-slate-950 shadow-sky-500/20":"bg-slate-900 text-sky-300 hover:bg-slate-800 border border-sky-500/30"}`,children:[e.jsx("span",{children:"🔄"}),e.jsxs("span",{children:["realloc(",n.length===5?"8":"5",")"]})]}),e.jsxs("button",{onClick:D,className:"px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-indigo-950/80 hover:bg-indigo-900/90 text-indigo-300 border border-indigo-700/50 transition cursor-pointer flex items-center gap-1",children:[e.jsx("span",{children:"📝"}),e.jsx("span",{children:"Write Data *(ptr+i)"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("button",{onClick:B,className:`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1 ${r?"bg-slate-900 text-slate-500 border border-slate-800 cursor-not-allowed":"bg-rose-950/80 hover:bg-rose-900 text-rose-300 border border-rose-700/60 shadow-md shadow-rose-950/50"}`,children:[e.jsx("span",{children:"🧹"}),e.jsx("span",{children:"free(ptr)"})]}),r&&!w&&e.jsxs("button",{onClick:R,className:"px-3 py-1.5 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-500 text-slate-950 transition cursor-pointer animate-pulse shadow-md shadow-teal-500/30 flex items-center gap-1",children:[e.jsx("span",{children:"🛡️"}),e.jsx("span",{children:"ptr = NULL;"})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold text-slate-400",children:[e.jsx("span",{className:"uppercase tracking-wider",children:"Physical Heap Memory Layout & Address Calculation:"}),e.jsxs("span",{className:"font-mono text-cyan-400",children:["Formula: Address = 0x",p.toString(16).toUpperCase()," + (i * ",i,")"]})]}),e.jsx("div",{className:`p-5 rounded-2xl border transition-all duration-300 flex flex-wrap items-center gap-3.5 min-h-[140px] ${r?"bg-rose-950/20 border-rose-800/40":u==="malloc"?"bg-amber-950/15 border-amber-500/30":"bg-slate-950/90 border-slate-800"}`,children:n.map((t,a)=>{const o=p+a*i,h=a===z&&!r;return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("div",{className:`flex flex-col items-center justify-between p-3 rounded-2xl border transition-all duration-300 w-32 sm:w-36 ${r?"bg-slate-950/90 border-rose-900/60 text-slate-500 opacity-60":h?"bg-gradient-to-b from-cyan-950 via-slate-900 to-slate-950 border-cyan-400 shadow-xl shadow-cyan-500/20 scale-105":t.isGarbage?"bg-slate-900/90 border-amber-500/40 text-amber-200":"bg-slate-900/90 border-emerald-500/40 text-emerald-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between w-full text-[10px] font-mono border-b border-slate-800 pb-1 mb-1",children:[e.jsxs("span",{className:"text-slate-400 font-bold",children:["ptr[",a,"]"]}),e.jsxs("span",{className:"text-cyan-400 font-medium",children:["*(ptr+",a,")"]})]}),e.jsxs("div",{className:"my-1.5 text-center",children:[e.jsx("div",{className:"text-lg font-mono font-bold tracking-tight",children:r?"—":t.val}),e.jsx("span",{className:`text-[9px] px-2 py-0.5 rounded-full font-sans font-semibold inline-block mt-1 ${r?"bg-rose-950/60 text-rose-400 border border-rose-800/40":t.isGarbage?"bg-amber-950/60 text-amber-300 border border-amber-500/30":"bg-emerald-950/60 text-emerald-300 border border-emerald-500/30"}`,children:r?"Freed Memory":t.isGarbage?"Garbage ⚠️":"Initialized ✅"})]}),e.jsxs("div",{className:"w-full pt-1.5 border-t border-slate-800/80 text-center font-mono text-[9.5px]",children:[e.jsxs("div",{className:"text-cyan-300 font-semibold",children:["0x",o.toString(16).toUpperCase()]}),e.jsxs("div",{className:"text-slate-500 text-[9px]",children:["Offset: +",a*i,"B"]})]})]}),a<n.length-1&&e.jsx("span",{className:"text-slate-600 font-bold text-xs select-none hidden sm:inline",children:"→"})]},a)})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 pt-1",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2 p-3 rounded-xl bg-slate-950/70 border border-slate-800",children:[e.jsx("span",{className:"text-xs text-slate-400 font-medium",children:"Write Value:"}),e.jsx("input",{type:"number",value:j,onChange:t=>I(t.target.value),placeholder:"Idx",min:"0",max:n.length-1,className:"bg-slate-900 border border-slate-700/80 rounded-lg px-2 py-1 text-xs text-cyan-300 font-mono w-14 focus:outline-none focus:border-cyan-400"}),e.jsx("span",{className:"text-slate-500 text-xs font-mono",children:"="}),e.jsx("input",{type:"number",value:C,onChange:t=>k(t.target.value),placeholder:"Value",className:"bg-slate-900 border border-slate-700/80 rounded-lg px-2.5 py-1 text-xs text-white font-mono w-20 focus:outline-none focus:border-cyan-400"}),e.jsx("button",{onClick:E,className:"px-3 py-1 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs transition cursor-pointer shadow-md",children:"Assign ptr[i]"})]}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-slate-950/70 border border-slate-800",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-slate-400 font-medium",children:"Type:"}),e.jsxs("select",{value:m,onChange:t=>{const a=t.target.value;L(a),a==="int"?b(4):a==="double"?b(8):a==="char"&&b(1)},className:"bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-xs text-cyan-300 font-mono focus:outline-none",children:[e.jsx("option",{value:"int",children:"int (4B)"}),e.jsx("option",{value:"double",children:"double (8B)"}),e.jsx("option",{value:"char",children:"char (1B)"})]})]}),e.jsxs("button",{onClick:U,className:"px-3.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition border border-slate-700 flex items-center gap-1.5 cursor-pointer",children:[e.jsx("span",{children:"⏭️"}),e.jsx("span",{children:"Step Pointer ptr++"})]})]})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800/90 rounded-xl p-3.5 font-mono text-xs text-cyan-300 flex items-start gap-2.5 shadow-inner",children:[e.jsx("span",{className:"text-base leading-none",children:"💡"}),e.jsx("span",{className:"leading-relaxed",children:O})]})]})}),e.jsxs("section",{ref:d,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:[e.jsxs("h2",{className:"text-2xl font-bold text-cyan-300 flex items-center gap-2",children:[e.jsx("span",{children:"📚"})," Deep Technical Breakdown & Memory Allocation Invariants"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3",children:[e.jsxs("h3",{className:"text-lg font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"1️⃣"})," malloc vs calloc: Architectural Comparison"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:[e.jsx("code",{children:"malloc(size)"})," allocates raw Heap memory leaving existing bit patterns intact (Garbage values). ",e.jsx("code",{children:"calloc(num, size)"})," guarantees zero-initialization of every byte via OS-level page zeroing or ",e.jsx("code",{children:"memset()"}),"."]}),e.jsxs("ul",{className:"text-xs text-slate-400 space-y-1.5 list-disc list-inside font-mono",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-amber-300",children:"malloc:"})," 1 argument (bytes) · High speed · Uninitialized garbage."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-emerald-300",children:"calloc:"})," 2 arguments (count, size) · Zero-cleared · Overflow protected."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-sky-300",children:"realloc:"})," Resizes block in-place or relocates & copies data."]})]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3",children:[e.jsxs("h3",{className:"text-lg font-bold text-cyan-400 flex items-center gap-2",children:[e.jsx("span",{children:"2️⃣"})," Physical Address Calculation Mechanics"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Because array memory is contiguous, the CPU calculates the physical RAM address in $O(1)$ constant time using a single multiplication and addition instruction:"}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-cyan-300",children:"Address(A[i]) = Base_Address + (i * sizeof(type))"}),e.jsxs("p",{className:"text-xs text-slate-400",children:["Incrementing pointer ",e.jsx("code",{children:"ptr++"})," advances the physical memory address by exactly ",e.jsx("code",{children:"sizeof(*ptr)"})," bytes (4B for int, 8B for double)."]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3",children:[e.jsxs("h3",{className:"text-lg font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"3️⃣"})," Zero-Leak & Dangling Pointer Safety Protocol"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Dynamic allocation on the Heap creates an explicit ownership contract. If you fail to release memory or mismanage pointers, production systems crash."}),e.jsxs("ul",{className:"text-xs text-slate-400 space-y-1.5 list-disc list-inside",children:[e.jsxs("li",{children:[e.jsx("b",{className:"text-rose-300",children:"Memory Leak:"})," Losing the pointer without calling ",e.jsx("code",{children:"free(ptr)"}),"."]}),e.jsxs("li",{children:[e.jsx("b",{className:"text-amber-300",children:"Dangling Pointer:"})," Retaining pointer address after ",e.jsx("code",{children:"free(ptr)"}),"."]}),e.jsxs("li",{children:[e.jsx("b",{className:"text-emerald-300",children:"Neutralization:"})," Always write ",e.jsx("code",{children:"ptr = NULL;"})," immediately after ",e.jsx("code",{children:"free(ptr)"}),"."]})]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3",children:[e.jsxs("h3",{className:"text-lg font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"4️⃣"})," 2D Matrix Row-Major Linearization"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Hardware RAM is strictly 1-dimensional. In C, multi-dimensional arrays are stored in ",e.jsx("b",{children:"Row-Major Order"})," where consecutive rows are laid out end-to-end contiguously."]}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-indigo-300",children:"Address(A[i][j]) = Base + ((i * NUM_COLS + j) * sizeof(type))"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Traversing row-by-row maximizes CPU L1 cache line hits (64B spatial locality)."})]})]})]}),e.jsxs("section",{ref:d,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-cyan-400 flex items-center gap-2",children:[e.jsx("span",{children:"🛠️"})," Runnable Production C Implementation (malloc, calloc, realloc, free)"]}),e.jsx(G,{code:S,initialCode:S,title:"array_demo.c"})]}),e.jsx("section",{ref:d,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(W,{questions:$})}),e.jsx("section",{ref:d,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(_,{content:F,title:"DSA Topic Note: Contiguous Memory Layout, malloc vs calloc, Pointer Arithmetic and Memory Safety"})}),e.jsx("section",{ref:d,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(q,{})})]})]})}export{ee as default};
