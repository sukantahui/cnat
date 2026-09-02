import{b as l,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as w}from"./TeacherSukantaHui-RpFLNJ5A.js";import{F as N}from"./FAQTemplate-BHhlgA96.js";import{P as z}from"./PlainTextPrint-C08xhKA4.js";import{E as j}from"./EditableCCodeBlock-CUsyyczB.js";import"./vendor-icons-wprqVFW_.js";import"./vendor-monaco-Bv7hoEkV.js";const C=[{id:1,question:"Why is geometric capacity doubling (`capacity *= 2`) used in dynamic arrays instead of arithmetic expansion (`capacity += 100`)?",options:["Geometric doubling achieves Amortized O(1) time per append operation, whereas arithmetic expansion degrades to quadratic O(N) amortized time per append","Because CPU memory can only be allocated in powers of 2","Because C compilers reject addition in malloc","To prevent pointer decay"],answer:"Geometric doubling achieves Amortized O(1) time per append operation, whereas arithmetic expansion degrades to quadratic O(N) amortized time per append",explanation:"With doubling, doubling occurs after 1, 2, 4, 8, ... N insertions. Total copying steps across N insertions is 1 + 2 + 4 + ... + N = 2N - 1. Dividing by N gives 2N / N = O(1) amortized time per push."},{id:2,question:"What catastrophic bug occurs when writing `ptr = realloc(ptr, new_size);` without using an intermediate temporary pointer?",options:["If `realloc()` fails, it returns NULL, immediately overwriting `ptr` and permanently leaking the original allocated memory block","The program immediately compiles in debug mode","The operating system closes all file handles","The memory is zeroed out"],answer:"If `realloc()` fails, it returns NULL, immediately overwriting `ptr` and permanently leaking the original allocated memory block",explanation:"When `realloc` fails due to insufficient memory, it returns NULL but leaves the original block untouched. Directly assigning to `ptr` destroys the only reference to the original block, causing a memory leak."},{id:3,question:"What is the proper idiomatic pattern for safe memory reallocation in C?",options:["`int* temp = realloc(ptr, new_size); if (!temp) { /* handle error */ } else { ptr = temp; }`","`ptr = realloc(ptr, new_size);`","`free(ptr); ptr = malloc(new_size);`","`ptr += new_size;`"],answer:"`int* temp = realloc(ptr, new_size); if (!temp) { /* handle error */ } else { ptr = temp; }`",explanation:"Using an intermediate pointer `temp` ensures that if reallocation fails, the original pointer `ptr` remains valid and accessible for cleanup or graceful error recovery."},{id:4,question:"What are the three essential members of a standard Dynamic Array (Vector) struct in C?",options:["`int* data` (pointer to heap buffer), `size_t size` (current element count), and `size_t capacity` (total allocated slots)","`int head`, `int tail`, and `int next`","`char* name`, `int id`, and `float salary`","`int* root`, `int left`, and `int right`"],answer:"`int* data` (pointer to heap buffer), `size_t size` (current element count), and `size_t capacity` (total allocated slots)",explanation:"A dynamic array struct must track the raw heap pointer, how many elements are currently active (`size`), and the physical limit of the allocated buffer (`capacity`)."},{id:5,question:"What does `realloc(ptr, 0)` do according to traditional standard C behavior?",options:["Frees the memory block pointed to by `ptr` (equivalent to `free(ptr)`) and returns NULL or an implementation-defined pointer","Allocates 100 bytes","Causes a segmentation fault","Duplicates the array"],answer:"Frees the memory block pointed to by `ptr` (equivalent to `free(ptr)`) and returns NULL or an implementation-defined pointer",explanation:"Reallocating to size 0 is historically treated as releasing the buffer. In C23, calling `realloc(ptr, 0)` is formally undefined behavior, making explicit `free(ptr)` the required standard."},{id:6,question:"What happens when `realloc(NULL, size)` is called with a NULL pointer as the first argument?",options:["It behaves exactly like `malloc(size)`, allocating a brand new memory block of the requested size","It throws a NullPointerException","It crashes the program","It returns NULL"],answer:"It behaves exactly like `malloc(size)`, allocating a brand new memory block of the requested size",explanation:"Passing NULL to `realloc` is explicitly defined by the ISO C standard to be identical to calling `malloc(size)`."},{id:7,question:"What is the amortized time complexity of popping an element from the end of a dynamic array (`pop_back()`)?",options:["O(1) constant time","O(N)","O(log N)","O(N^2)"],answer:"O(1) constant time",explanation:"Removing the last element requires simply decrementing the `size` counter (`size--`), executing in strictly O(1) constant time."},{id:8,question:"When shrinking a dynamic array to reclaim memory, why should shrinking occur at `size <= capacity / 4` rather than `size < capacity / 2`?",options:["To prevent 'thrashing' (oscillating between repeated expensive reallocations and deallocations when elements are rapidly pushed and popped at the boundary)","Because heap memory cannot be divided by 2","To reduce CPU clock speed","Because realloc only accepts multiples of 4"],answer:"To prevent 'thrashing' (oscillating between repeated expensive reallocations and deallocations when elements are rapidly pushed and popped at the boundary)",explanation:"Hysteresis (delaying shrinking until 1/4 capacity) ensures that alternating push and pop operations at the boundary do not trigger continuous expensive realloc calls, preserving amortized O(1) performance."},{id:9,question:"What is the difference between `calloc(n, size)` and `malloc(n * size)`?",options:["`calloc()` initializes all allocated bytes to zero and checks for integer multiplication overflow, while `malloc()` leaves memory uninitialized with garbage values","`malloc()` is faster than calloc and zeros out RAM","`calloc()` allocates memory on the stack","There is no difference"],answer:"`calloc()` initializes all allocated bytes to zero and checks for integer multiplication overflow, while `malloc()` leaves memory uninitialized with garbage values",explanation:"`calloc(num, size)` allocates contiguous memory and clears all bits to 0. `malloc()` returns raw uninitialized bytes."},{id:10,question:"What is an integer overflow vulnerability when allocating dynamic array memory with `malloc(n * sizeof(int))`?",options:["If `n * sizeof(int)` exceeds the maximum value of `size_t` (e.g. `2^64 - 1`), the multiplication wraps around to a tiny number, allocating too few bytes and leading to heap buffer overflow","The array becomes negative","The CPU stops executing","The compiler throws a division by zero error"],answer:"If `n * sizeof(int)` exceeds the maximum value of `size_t` (e.g. `2^64 - 1`), the multiplication wraps around to a tiny number, allocating too few bytes and leading to heap buffer overflow",explanation:"If `n = 2^30` and `sizeof(int) = 4`, `n * 4` wraps to 0 in 32-bit arithmetic, causing `malloc(0)` to succeed while subsequent writes corrupt memory."},{id:11,question:"Why does `realloc()` sometimes return a completely different pointer address than the original pointer passed to it?",options:["If there is insufficient contiguous free memory directly following the current block on the heap, the allocator finds a new larger free slot elsewhere, copies data, and frees the old block","Because pointers change every clock cycle","Because the OS randomizes memory on every write","Because realloc deletes the stack"],answer:"If there is insufficient contiguous free memory directly following the current block on the heap, the allocator finds a new larger free slot elsewhere, copies data, and frees the old block",explanation:"When adjacent heap memory is already occupied, `realloc` allocates a new block elsewhere, copies the old payload, and deallocates the old memory block."},{id:12,question:"What happens to pointers or iterators that point to elements inside a dynamic array when the array expands its capacity via `realloc()`?",options:["They become invalid Dangling Pointers pointing to deallocated memory if `realloc()` moved the buffer to a new heap location (Iterator Invalidation)","They automatically update to point to the new location","They are converted to integer indices","They become NULL"],answer:"They become invalid Dangling Pointers pointing to deallocated memory if `realloc()` moved the buffer to a new heap location (Iterator Invalidation)",explanation:"Reallocation can relocate the entire buffer. Any raw pointer previously pointing to `&arr->data[i]` now points to freed memory, leading to use-after-free bugs."},{id:13,question:"How do you implement a bounds-checked element access function for a dynamic array in C?",options:['`int vector_get(const Vector* v, size_t index) { if (index >= v->size) { fprintf(stderr, "Index error"); exit(EXIT_FAILURE); } return v->data[index]; }`',"`return v->data[index];` without any checks","`try { return v->data[index]; } catch(...) {}`","`return index;`"],answer:'`int vector_get(const Vector* v, size_t index) { if (index >= v->size) { fprintf(stderr, "Index error"); exit(EXIT_FAILURE); } return v->data[index]; }`',explanation:"Explicit assertion or conditional validation against `v->size` prevents out-of-bounds memory reads and segmentation faults."},{id:14,question:"What is the initial default capacity typically chosen when creating an empty dynamic array in C libraries?",options:["A small non-zero power of 2, such as 4, 8, or 16 (or 0 with lazy allocation on first push)","1,000,000 always","-1","Exactly 1 bit"],answer:"A small non-zero power of 2, such as 4, 8, or 16 (or 0 with lazy allocation on first push)",explanation:"Starting with a small capacity (like 4 or 8) minimizes initial memory overhead while avoiding immediate reallocations on the first few pushes."},{id:15,question:"Why should a function destroying a dynamic array `vector_free(Vector* v)` accept a pointer to the vector struct?",options:["To free the internal dynamic buffer `free(v->data)`, reset `size` and `capacity` to 0, and optionally `free(v)` if the struct itself was dynamically allocated","To print the array contents","To sort the array before exit","Because C requires all functions to take pointers"],answer:"To free the internal dynamic buffer `free(v->data)`, reset `size` and `capacity` to 0, and optionally `free(v)` if the struct itself was dynamically allocated",explanation:"Proper teardown must free the heap-allocated payload array first (`free(v->data)`), neutralize pointers (`v->data = NULL`), and then free the wrapper struct."},{id:16,question:"What is the difference between passing a `Vector` by value vs passing `Vector*` by pointer to an append function in C?",options:["Passing by value creates a local copy of the struct; any updates to `size`, `capacity`, or relocated `data` pointers are lost upon return, causing memory corruption and leaks","Passing by value is faster and safer","Passing by pointer causes compilation errors","There is no difference"],answer:"Passing by value creates a local copy of the struct; any updates to `size`, `capacity`, or relocated `data` pointers are lost upon return, causing memory corruption and leaks",explanation:"Mutating dynamic containers requires pointer-to-struct (`Vector*`) so changes to size, capacity, and buffer pointers persist in the caller's scope."},{id:17,question:"What growth factor does the standard C++ `std::vector` use in Microsoft Visual C++ vs GNU GCC libstdc++?",options:["MSVC uses 1.5x growth factor; GCC libstdc++ uses 2.0x growth factor","Both use 10x","Both use arithmetic +10","MSVC uses 0.5x and GCC uses 1.0x"],answer:"MSVC uses 1.5x growth factor; GCC libstdc++ uses 2.0x growth factor",explanation:"A 1.5x growth factor allows previously deallocated memory chunks to be reused in subsequent reallocations, reducing heap fragmentation compared to 2.0x."},{id:18,question:"How do you implement `vector_insert_at(Vector* v, size_t index, int val)` in C?",options:["Ensure capacity, shift all elements from `v->size - 1` down to `index` right by one slot using `memmove`, place `val` at `data[index]`, and increment `size`","Overwrite `data[index] = val` without shifting","Append to end and sort the array","Insert into a linked list"],answer:"Ensure capacity, shift all elements from `v->size - 1` down to `index` right by one slot using `memmove`, place `val` at `data[index]`, and increment `size`",explanation:"Arbitrary index insertion requires checking capacity, shifting elements `[index..size-1]` to `[index+1..size]`, and storing the new value at `index` in O(N) time."},{id:19,question:"What is the time complexity of searching for an unsorted element in a dynamic array of N elements?",options:["O(N) linear search time","O(1)","O(log N)","O(N^2)"],answer:"O(N) linear search time",explanation:"Without sorting or a secondary index (like a hash map), finding an element requires examining up to N elements sequentially."},{id:20,question:"What is the purpose of a `reserve(Vector* v, size_t new_capacity)` function?",options:["Pre-allocates memory for `new_capacity` elements in advance, eliminating repeated reallocations when the exact number of elements is known beforehand","Shrinks the vector to 0","Sorts the vector","Encrypts the vector"],answer:"Pre-allocates memory for `new_capacity` elements in advance, eliminating repeated reallocations when the exact number of elements is known beforehand",explanation:"Pre-reserving capacity turns N individual push operations into pure O(1) writes with zero intermediate reallocations."},{id:21,question:"What is `shrink_to_fit(Vector* v)` in dynamic array implementations?",options:["Reallocates the buffer to exact size `capacity = size`, releasing all unused excess memory back to the heap allocator","Deletes all elements","Doubles the capacity","Clears the screen"],answer:"Reallocates the buffer to exact size `capacity = size`, releasing all unused excess memory back to the heap allocator",explanation:"`shrink_to_fit` reduces `capacity` to match current `size` via `realloc(v->data, v->size * sizeof(int))`."},{id:22,question:"What happens if you attempt to access `v->data[0]` when `v->size == 0` (empty vector)?",options:["Reading index 0 is undefined behavior (or reads garbage/causes a crash if `data` is NULL)","Returns 0 safely","Throws an exception","Resizes the vector"],answer:"Reading index 0 is undefined behavior (or reads garbage/causes a crash if `data` is NULL)",explanation:"If size is 0, no elements exist. If data is NULL or uninitialized, dereferencing causes a segmentation fault."},{id:23,question:"What is the advantage of using `size_t` for `size` and `capacity` instead of `int` in 64-bit C programs?",options:["`size_t` is an unsigned 64-bit integer on 64-bit systems, allowing arrays to hold more than 2 billion (2^31 - 1) elements without signed integer overflow","`size_t` uses less memory than int","`size_t` can hold negative numbers","`size_t` compiles faster"],answer:"`size_t` is an unsigned 64-bit integer on 64-bit systems, allowing arrays to hold more than 2 billion (2^31 - 1) elements without signed integer overflow",explanation:"Standard `int` is limited to 2,147,483,647. On 64-bit systems, `size_t` supports up to 18.4 quintillion bytes."},{id:24,question:"Why should `free(v->data)` be executed before `free(v)` when destroying a dynamically allocated vector struct `Vector* v = malloc(sizeof(Vector))`?",options:["Freeing `v` first invalidates the pointer `v`, making `v->data` unreachable and creating an unrecoverable memory leak for the internal buffer","Freeing `v` first is required by the compiler","Freeing `v->data` destroys the CPU cache","It does not matter in what order they are freed"],answer:"Freeing `v` first invalidates the pointer `v`, making `v->data` unreachable and creating an unrecoverable memory leak for the internal buffer",explanation:"Always tear down child dynamic allocations before freeing the parent container struct to prevent orphaned memory leaks."},{id:25,question:"What is the space overhead of a dynamic array of N integers with capacity 2N in C on a 64-bit OS?",options:["`(2N * sizeof(int)) + sizeof(Vector)` bytes, where unused capacity is at most 50% of the allocated heap block","100% waste","0 bytes overhead","1 gigabyte"],answer:"`(2N * sizeof(int)) + sizeof(Vector)` bytes, where unused capacity is at most 50% of the allocated heap block",explanation:"Geometric doubling keeps unused memory bounded by at most a constant factor (50% for 2x doubling), guaranteeing O(N) total space complexity."}],k=`================================================================================\r
CODER & ACCOTAX - PRINTABLE STUDY NOTE: DYNAMIC ARRAY (VECTOR) IN C\r
Course: Data Structures & Algorithms in C\r
Educator: Sukanta Hui · Barrackpore, West Bengal, India\r
================================================================================\r
\r
1. DYNAMIC ARRAY STRUCT ENCAPSULATION\r
--------------------------------------------------------------------------------\r
In C, dynamic arrays are represented as a composite struct managing a heap buffer:\r
\r
  typedef struct {\r
      int* data;          // Base address of dynamically allocated heap buffer\r
      size_t size;        // Number of elements currently in use\r
      size_t capacity;    // Total allocated slots in heap memory\r
  } DynamicArray;\r
\r
  Stack Memory                      Heap Memory\r
  ┌───────────────────────┐         ┌────┬────┬────┬────┬────┬────┬────┬────┐\r
  │ DynamicArray v        │         │ 10 │ 20 │ 30 │ 40 │ 50 │ ?? │ ?? │ ?? │\r
  │ ├─ data: 0x5000 ──────┼────────>└────┴────┴────┴────┴────┴────┴────┴────┘\r
  │ ├─ size: 5            │           0    1    2    3    4    5    6    7\r
  │ └─ capacity: 8        │          [<---- Active Elements ---->|<-- Free -->]\r
  └───────────────────────┘\r
\r
2. THE GEOMETRIC DOUBLING STRATEGY & AMORTIZED O(1) PROOF\r
--------------------------------------------------------------------------------\r
Why double capacity (2x) instead of linear increment (+10)?\r
\r
• Linear Growth (+C):\r
  - Inserting N elements triggers N/C reallocations.\r
  - Total copy operations: C + 2C + 3C + ... + N = O(N^2) total work.\r
  - Amortized cost per push: O(N^2) / N = O(N) (SLOW / Unacceptable).\r
\r
• Geometric Doubling (2x):\r
  - Reallocations occur at capacities 1, 2, 4, 8, 16, ..., N.\r
  - Total copy operations: 1 + 2 + 4 + 8 + ... + N/2 = N - 1.\r
  - Total work across N pushes = N (insertions) + (N - 1) (copies) = 2N - 1.\r
  - Amortized cost per push: (2N - 1) / N ≈ O(1) CONSTANT TIME!\r
\r
3. SAFE REALLOCATION VS THE DANGLING TRAP\r
--------------------------------------------------------------------------------\r
[X] DEADLY TRAP (Causes Memory Leak on Realloc Failure):\r
    vec->data = (int*)realloc(vec->data, new_capacity * sizeof(int));\r
    // If realloc() fails, it returns NULL, overwriting vec->data and \r
    // permanently orphaning the existing buffer!\r
\r
[✓] IDIOMATIC C SAFE PATTERN:\r
    int* temp = (int*)realloc(vec->data, new_capacity * sizeof(int));\r
    if (!temp) {\r
        perror("Memory allocation failed");\r
        // vec->data is still valid! Graceful error recovery possible.\r
        return;\r
    }\r
    vec->data = temp;\r
    vec->capacity = new_capacity;\r
\r
4. HYSTERESIS SHRINKING (PREVENTING BUFFER THRASHING)\r
--------------------------------------------------------------------------------\r
• Never shrink capacity immediately when size drops below 1/2 capacity.\r
• If an app alternates between pushing and popping at the boundary:\r
  Push → Double (realloc) → Pop → Halve (realloc) → Push → Double...\r
• Thrashing cost: O(N) work on EVERY operation!\r
• Solution: Shrink capacity to half ONLY when size drops to 1/4 of capacity (25%).\r
\r
5. MEMORY TEARDOWN CHECKLIST (ZERO LEAKS)\r
--------------------------------------------------------------------------------\r
1. Free internal buffer: \`free(vec->data);\`\r
2. Neutralize pointer:   \`vec->data = NULL;\`\r
3. Free wrapper struct:  \`free(vec);\`\r
\r
================================================================================\r
Coder & AccoTax Computer Education Center · Barrackpore, West Bengal, India\r
================================================================================\r
`,x=`/**
 * ============================================================================
 * Course: Data Structures & Algorithms in C (Coder & AccoTax, Barrackpore)
 * Mentor: Sukanta Hui
 * Topic: Dynamic Array (Vector) Implementation in Pure C
 * File: dynamic_array_demo.c
 * ============================================================================
 */

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define INITIAL_CAPACITY 4

// Struct Encapsulation of Dynamic Array
typedef struct {
    int* data;          // Pointer to contiguous heap buffer
    size_t size;        // Current number of active elements
    size_t capacity;    // Total allocated slots in memory
} DynamicArray;

// 1. Initialization: Allocates initial heap buffer
DynamicArray* vector_create(void) {
    DynamicArray* vec = (DynamicArray*)malloc(sizeof(DynamicArray));
    if (!vec) {
        perror("Failed to allocate DynamicArray wrapper");
        exit(EXIT_FAILURE);
    }
    vec->size = 0;
    vec->capacity = INITIAL_CAPACITY;
    vec->data = (int*)malloc(vec->capacity * sizeof(int));
    if (!vec->data) {
        perror("Failed to allocate dynamic array buffer");
        free(vec);
        exit(EXIT_FAILURE);
    }
    return vec;
}

// 2. Safe Reallocation with Geometric Doubling
static void vector_ensure_capacity(DynamicArray* vec) {
    if (vec->size >= vec->capacity) {
        size_t new_capacity = vec->capacity * 2;
        printf("   [!] Capacity Full (%zu/%zu). Expanding to %zu slots via realloc()...\\n",
               vec->size, vec->capacity, new_capacity);

        // Safe Reallocation: Always use a temporary pointer!
        int* temp = (int*)realloc(vec->data, new_capacity * sizeof(int));
        if (!temp) {
            perror("Reallocation failed! Memory exhausted.");
            // vec->data is still valid, allowing graceful cleanup
            return;
        }

        if (temp != vec->data) {
            printf("       -> Heap Block Relocated! Old: %p -> New: %p\\n",
                   (void*)vec->data, (void*)temp);
        } else {
            printf("       -> Heap Block Extended In-Place at %p (Zero Copy overhead!)\\n",
                   (void*)temp);
        }

        vec->data = temp;
        vec->capacity = new_capacity;
    }
}

// 3. Push Back: Amortized O(1) Append
void vector_push_back(DynamicArray* vec, int value) {
    vector_ensure_capacity(vec);
    vec->data[vec->size] = value;
    vec->size++;
}

// 4. Pop Back: O(1) Removal with Hysteresis Shrinking (at 1/4 capacity)
int vector_pop_back(DynamicArray* vec) {
    if (vec->size == 0) {
        fprintf(stderr, "Error: Underflow! Cannot pop from empty vector.\\n");
        return -1;
    }
    vec->size--;
    int removed = vec->data[vec->size];

    // Shrink if size drops to 1/4 of capacity (Prevents thrashing)
    if (vec->size > 0 && vec->size <= vec->capacity / 4 && vec->capacity > INITIAL_CAPACITY) {
        size_t new_capacity = vec->capacity / 2;
        int* temp = (int*)realloc(vec->data, new_capacity * sizeof(int));
        if (temp) {
            vec->data = temp;
            vec->capacity = new_capacity;
            printf("   [↓] Shrunk capacity to %zu slots (Memory Reclaimed ✓)\\n", new_capacity);
        }
    }
    return removed;
}

// 5. Get Element with Bounds Checking
int vector_get(const DynamicArray* vec, size_t index) {
    if (index >= vec->size) {
        fprintf(stderr, "Error: Index %zu out of bounds (size = %zu)\\n", index, vec->size);
        exit(EXIT_FAILURE);
    }
    return vec->data[index];
}

// 6. Print Vector State
void vector_print(const DynamicArray* vec) {
    printf("   Vector State: [ ");
    for (size_t i = 0; i < vec->size; i++) {
        printf("%d ", vec->data[i]);
    }
    printf("] (Size: %zu, Capacity: %zu, Heap Addr: %p)\\n",
           vec->size, vec->capacity, (void*)vec->data);
}

// 7. Clean Teardown: Zero Leaks
void vector_free(DynamicArray* vec) {
    if (!vec) return;
    free(vec->data);   // 1. Free dynamic buffer first
    vec->data = NULL;  // 2. Neutralize dangling pointer
    free(vec);         // 3. Free wrapper struct
}

int main(void) {
    printf("=================================================================\\n");
    printf("     CODER & ACCOTAX - DYNAMIC ARRAY (VECTOR) IN C               \\n");
    printf("     Mentor: Sukanta Hui · Barrackpore Lab Demonstration         \\n");
    printf("=================================================================\\n\\n");

    DynamicArray* v = vector_create();
    printf("1. Created empty Dynamic Array with initial capacity = %d\\n", INITIAL_CAPACITY);
    vector_print(v);

    printf("\\n2. Pushing 9 elements to observe Geometric Doubling (4 -> 8 -> 16):\\n");
    int values[] = {10, 20, 30, 40, 50, 60, 70, 80, 90};
    for (int i = 0; i < 9; i++) {
        printf("   Pushing %d:\\n", values[i]);
        vector_push_back(v, values[i]);
        vector_print(v);
    }

    printf("\\n3. Accessing element at index 4 (Expected: 50):\\n");
    printf("   v[4] = %d (Calculated in O(1) via base + 4 * sizeof(int))\\n", vector_get(v, 4));

    printf("\\n4. Popping elements until capacity shrinks:\\n");
    while (v->size > 2) {
        int popped = vector_pop_back(v);
        printf("   Popped %d -> Size: %zu, Capacity: %zu\\n", popped, v->size, v->capacity);
    }

    printf("\\n5. Tearing down vector and freeing all heap blocks...\\n");
    vector_free(v);
    printf("   -> Memory cleanly deallocated (Zero Leaks Verified ✓)\\n\\n");

    return 0;
}
`;function O(){const d=l.useRef([]),[n,p]=l.useState([10,20,30]),[i,m]=l.useState(4),[h,c]=l.useState(["Initial vector created: Size = 3, Capacity = 4 (Allocated 16 bytes on Heap)"]),[u,y]=l.useState("");l.useEffect(()=>{const a=new IntersectionObserver(t=>{t.forEach(r=>{r.isIntersecting&&r.target.classList.add("is-visible")})},{threshold:.08});return d.current.forEach(t=>{t&&a.observe(t)}),()=>a.disconnect()},[]);const s=a=>{a&&!d.current.includes(a)&&d.current.push(a)},f=()=>{const a=u.trim()!==""?parseInt(u,10):(n.length+1)*10;if(isNaN(a))return;let t=i;const r=[...h];n.length>=i&&(t=i*2,r.unshift(`⚡ CAPACITY FULL (${n.length}/${i}) → Doubling capacity to ${t} via realloc()! (Heap block expanded)`));const o=[...n,a];r.unshift(`✓ Pushed ${a} at index ${n.length}. New Size = ${o.length}, Capacity = ${t}`),m(t),p(o),c(r.slice(0,8)),y("")},g=()=>{if(n.length===0){c(b=>["⚠️ Underflow! Cannot pop from empty vector.",...b.slice(0,7)]);return}const a=n[n.length-1],t=n.slice(0,n.length-1);let r=i;const o=[...h];o.unshift(`✗ Popped ${a} from index ${n.length-1}. New Size = ${t.length}`),t.length>0&&t.length<=i/4&&i>4&&(r=i/2,o.unshift(`↓ HYSTERESIS SHRINK: Size (${t.length}) <= Capacity/4 (${i/4}) → Halved capacity to ${r}`)),m(r),p(t),c(o.slice(0,8))},v=()=>{p([10,20,30]),m(4),c(["Reset vector: Size = 3, Capacity = 4"]),y("")};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .reveal-section {
          opacity: 0.99;
          transform: translateY(0);
          transition: opacity 0.4s ease-out, transform 0.4s ease-out;
        }
        .reveal-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}),e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 md:p-12 font-sans selection:bg-cyan-500/30 selection:text-cyan-200",children:[e.jsxs("header",{ref:s,className:"reveal-section max-w-5xl mx-auto mb-12 text-center space-y-4",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-700/60 text-cyan-300 text-xs font-semibold uppercase tracking-wider shadow-lg",children:[e.jsx("span",{children:"⚡"}),e.jsx("span",{children:"DSA Segment 1 · Module 001_001 · Topic 1"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 tracking-tight leading-tight",children:"Dynamic Array (Vector) Implementation in C"}),e.jsxs("p",{className:"text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed",children:["Master the engineering mechanics of resizable dynamic arrays in C: struct encapsulation, geometric doubling strategy, safe ",e.jsx("code",{className:"text-cyan-300 bg-slate-900 px-1.5 py-0.5 rounded font-mono",children:"realloc()"})," pointer reassignment, amortized $O(1)$ bounds, and hysteresis memory shrinking."]}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-2",children:[e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-cyan-400",children:"Course Code: DSA-C-101"}),e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-sky-400",children:"Center: Coder & AccoTax (Barrackpore Lab)"}),e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-emerald-400",children:"Mentor: Sukanta Hui"})]})]}),e.jsx("section",{ref:s,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:e.jsxs("div",{className:"bg-gradient-to-br from-slate-900 via-slate-900/90 to-cyan-950/30 border border-cyan-500/30 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-2xl",children:"👨‍🏫"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-cyan-300",children:"Teacher's Desk: The Expandable Airport Passenger Lounge"}),e.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Sukanta Hui & Barrackpore Lab Dialogue"})]})]}),e.jsxs("div",{className:"space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base",children:[e.jsxs("div",{className:"bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("h3",{className:"text-cyan-400 font-bold flex items-center gap-2 text-base",children:[e.jsx("span",{children:"🏢"})," The Airport Lounge Analogy"]}),e.jsx("p",{children:"Imagine an airport waiting lounge that starts with 4 chairs. When the 5th passenger arrives, instead of buying just 1 chair, the airport manager doubles the room size to 8 chairs. When passenger #9 arrives, they expand to 16 chairs!"}),e.jsxs("p",{children:["Why? Because building new rooms takes time! By doubling capacity geometrically ($2\\times$), the expensive expansion happens very rarely. Almost every passenger sits down instantly in strictly $O(1)$ constant time! This is the essence of a ",e.jsx("strong",{children:"C Dynamic Array (Vector)"}),"."]})]}),e.jsxs("div",{className:"bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("h3",{className:"text-sky-400 font-bold flex items-center gap-2 text-base",children:[e.jsx("span",{children:"💬"})," Barrackpore Lab Classroom Discussion"]}),e.jsxs("div",{className:"space-y-3 text-xs sm:text-sm font-sans border-l-2 border-cyan-500/40 pl-4 py-1",children:[e.jsxs("p",{children:[e.jsx("strong",{className:"text-emerald-400",children:"Swadeep:"})," ",e.jsxs("em",{children:[`"Sir, why can't we just write `,e.jsx("code",{children:"vec->data = realloc(vec->data, new_size);"}),' directly?"']})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-cyan-300",children:"Sukanta Sir:"})," ",e.jsxs("em",{children:['"Because if the operating system is out of memory, ',e.jsx("code",{children:"realloc()"})," returns ",e.jsx("code",{children:"NULL"}),"! Directly assigning it overwrites your only reference to the original memory block, permanently orphaning and leaking that memory. Always use a temporary pointer like ",e.jsx("code",{children:"int* temp = realloc(...);"}),' first!"']})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-emerald-400",children:"Tuhina:"})," ",e.jsx("em",{children:'"And if the heap block has to be relocated to a new memory address, any raw pointers pointing inside the old array become dangling pointers!"'})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-cyan-300",children:"Sukanta Sir:"})," ",e.jsx("em",{children:`"Exactly right, Tuhina! That's known as 'Iterator Invalidation' in systems engineering. When capacity expands, always re-evaluate your element pointers."`})]})]})]})]})]})}),e.jsx("section",{ref:s,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:e.jsxs("div",{className:"bg-slate-900/90 border border-cyan-500/30 rounded-2xl p-6 md:p-8 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-cyan-300 flex items-center gap-2",children:[e.jsx("span",{children:"🔬"})," Interactive Dynamic Array Simulator"]}),e.jsx("p",{className:"text-xs text-slate-400 font-mono mt-1",children:"Observe Geometric Doubling & Hysteresis Shrinking in Real-Time"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-400",children:["Size: ",e.jsx("strong",{className:"text-white",children:n.length})]}),e.jsxs("div",{className:"px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-sky-400",children:["Capacity: ",e.jsx("strong",{className:"text-white",children:i})]}),e.jsxs("div",{className:"px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-emerald-400",children:["Utilization: ",e.jsxs("strong",{className:"text-white",children:[i>0?Math.round(n.length/i*100):0,"%"]})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider",children:["Contiguous Heap Buffer Layout (",i*4," Bytes Allocated):"]}),e.jsx("div",{className:"grid grid-cols-4 sm:grid-cols-8 md:grid-cols-16 gap-2",children:Array.from({length:i}).map((a,t)=>{const r=t<n.length;return e.jsxs("div",{className:`flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-300 ${r?"bg-gradient-to-b from-cyan-950/80 to-slate-900 border-cyan-500/60 text-cyan-300 shadow-md shadow-cyan-950/50 scale-100":"bg-slate-950/60 border-slate-800/80 text-slate-600 border-dashed"}`,children:[e.jsxs("span",{className:"text-xs font-mono text-slate-400",children:["[",t,"]"]}),e.jsx("span",{className:"text-base font-bold my-1",children:r?n[t]:"—"}),e.jsx("span",{className:"text-[10px] font-mono text-slate-500",children:r?`${4*t}B`:"free"})]},t)})})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-3 pt-2",children:[e.jsx("input",{type:"number",value:u,onChange:a=>y(a.target.value),placeholder:"Value (e.g. 99)",className:"bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-cyan-300 focus:outline-none focus:border-cyan-500 font-mono w-36"}),e.jsxs("button",{onClick:f,className:"px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-950 flex items-center gap-1.5",children:[e.jsx("span",{children:"➕"})," Push Back"]}),e.jsxs("button",{onClick:g,className:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-all border border-slate-700 flex items-center gap-1.5",children:[e.jsx("span",{children:"➖"})," Pop Back"]}),e.jsx("button",{onClick:v,className:"px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-sm transition-all border border-slate-800",children:"Reset"})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-1.5 font-mono text-xs text-slate-300",children:[e.jsxs("div",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1.5",children:[e.jsx("span",{children:"📋"})," Memory Allocator Event Log:"]}),h.map((a,t)=>e.jsx("div",{className:`leading-relaxed ${t===0?"text-cyan-400 font-semibold":"text-slate-400 opacity-80"}`,children:a},t))]})]})}),e.jsxs("section",{ref:s,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:[e.jsxs("h2",{className:"text-2xl font-bold text-cyan-300 flex items-center gap-2",children:[e.jsx("span",{children:"📚"})," Complete Technical Breakdown: Dynamic Array Architecture"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3",children:[e.jsxs("h3",{className:"text-lg font-bold text-cyan-400 flex items-center gap-2",children:[e.jsx("span",{children:"1️⃣"})," Struct Encapsulation & Invariants"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"In pure C, a vector is represented as a triple-member composite struct:"}),e.jsx("pre",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-xs text-cyan-300 overflow-x-auto",children:`typedef struct {
    int* data;       // Pointer to heap buffer
    size_t size;     // Current element count
    size_t capacity; // Allocated slots limit
} DynamicArray;`}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Invariant Rule: ",e.jsx("code",{className:"text-cyan-300",children:"0 <= size <= capacity"})," must hold at all times before and after every operation."]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3",children:[e.jsxs("h3",{className:"text-lg font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"2️⃣"})," Amortized O(1) Proof"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Why double by 2x instead of adding +100?"}),e.jsxs("ul",{className:"text-xs text-slate-300 space-y-1.5 list-disc list-inside",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Linear (+C):"})," Triggers N/C reallocations → O(N²) total work → O(N) per push."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Geometric (2x):"})," Total copies for N pushes = 1 + 2 + 4 + ... + N/2 = N - 1."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Total Cost:"})," N (insertions) + (N - 1) (copies) = 2N - 1."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Amortized Cost per Push:"})," (2N - 1) / N &approx; ",e.jsx("strong",{className:"text-emerald-400",children:"O(1)"})," constant time!"]})]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3",children:[e.jsxs("h3",{className:"text-lg font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"3️⃣"})," Safe Reallocation Pattern"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Never assign ",e.jsx("code",{className:"text-cyan-300",children:"realloc()"})," return directly to your main pointer:"]}),e.jsx("pre",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-xs text-emerald-300 overflow-x-auto",children:`// 1. Temporary Pointer Check
int* temp = (int*)realloc(v->data, new_cap * sizeof(int));
if (!temp) {
    perror("Memory allocation failed");
    return; // v->data is still SAFE & preserved!
}
v->data = temp;
v->capacity = new_cap;`})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3",children:[e.jsxs("h3",{className:"text-lg font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"4️⃣"})," Hysteresis Shrinking (1/4 Rule)"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Never shrink capacity when ",e.jsx("code",{className:"text-cyan-300",children:"size == capacity / 2"}),"!"]}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Alternating pushes and pops right at the 50% boundary would cause expensive reallocation thrashing (O(N) on every single step)."}),e.jsxs("p",{className:"text-xs text-indigo-300 leading-relaxed",children:[e.jsx("strong",{children:"Solution:"})," Only shrink capacity to half when size drops to ",e.jsx("strong",{children:"≤ 25% (capacity / 4)"}),"."]})]})]})]}),e.jsxs("section",{ref:s,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-cyan-400 flex items-center gap-2",children:[e.jsx("span",{children:"🛠️"})," Production-Grade C Implementation: Dynamic Array Library"]}),e.jsx(j,{code:x,initialCode:x,title:"dynamic_array_demo.c"})]}),e.jsx("section",{ref:s,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(N,{questions:C})}),e.jsx("section",{ref:s,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(z,{content:k,title:"DSA Topic Note: Dynamic Array (Vector) Implementation in C"})}),e.jsx("section",{ref:s,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(w,{})})]})]})}export{O as default};
