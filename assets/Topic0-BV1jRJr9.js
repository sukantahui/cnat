import{b as r,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as b}from"./TeacherSukantaHui-DerPxfxp.js";import{F as w}from"./FAQTemplate-BHhlgA96.js";import{P as v}from"./PlainTextPrint-C08xhKA4.js";import{E as S}from"./EditableCCodeBlock-DTHr_cCH.js";import"./vendor-icons-CH1iX9C8.js";import"./vendor-monaco-Bv7hoEkV.js";const N=[{id:1,question:'What is the primary physical memory allocation pattern utilized in "Segment Tree Representation: Storing tree nodes in 1D array with left child `2*idx + 1` and right child `2*idx + 2`"?',options:["Contiguous heap/stack buffer layout designed to maximize CPU L1/L2 cache line hits and deterministic address calculation","Randomly scattered virtual pages without memory alignment","Unbuffered disk swap paging exclusively","Hardware register banking without RAM involvement"],answer:"Contiguous heap/stack buffer layout designed to maximize CPU L1/L2 cache line hits and deterministic address calculation",explanation:"In C systems programming, efficient data structures prioritize contiguous byte layout to leverage hardware spatial locality and minimize L1 cache miss latency."},{id:2,question:'In "Segment Tree Representation: Storing tree nodes in 1D array with left child `2*idx + 1` and right child `2*idx + 2`", what is the exact consequence of dereferencing a NULL or uninitialized pointer?',options:["Triggers an immediate Hardware Segmentation Fault (SIGSEGV) because page 0 (0x0) is protected by the OS MMU","Silently returns integer value 0 without interrupting execution","The C runtime automatically allocates a new node on the heap","The CPU switches to single-threaded mode"],answer:"Triggers an immediate Hardware Segmentation Fault (SIGSEGV) because page 0 (0x0) is protected by the OS MMU",explanation:"The virtual memory page containing address 0x0 is mapped as non-accessible by the Operating System kernel. Attempting to read or write to it raises an unrecoverable SIGSEGV signal."},{id:3,question:'Why must dynamic memory allocations in "Segment Trees & Lazy Propagation: Range Minimum/Sum Queries & Range Updates" be performed using `sizeof(*ptr)` rather than hardcoded primitive sizes?',options:["It ensures type-safety and eliminates allocation size mismatches if the pointer's declared type is modified during refactoring","It compresses heap chunks by 50%","It is required by the POSIX thread standard","It forces the memory to be allocated in read-only segments"],answer:"It ensures type-safety and eliminates allocation size mismatches if the pointer's declared type is modified during refactoring",explanation:"Writing `ptr = malloc(sizeof(*ptr))` automatically binds allocation size directly to the target struct or variable type, preventing buffer overflow bugs."},{id:4,question:'How does CPU Spatial Locality impact the execution time of algorithms in "Segment Tree Representation: Storing tree nodes in 1D array with left child `2*idx + 1` and right child `2*idx + 2`"?',options:["When a memory byte is accessed, the hardware prefetcher loads adjacent 64-byte cache lines into L1 cache, making subsequent sequential accesses ~100x faster than random memory jumps","It disables CPU speculative execution","It compresses all integer arithmetic into 8-bit registers","It eliminates the need for pointer validation"],answer:"When a memory byte is accessed, the hardware prefetcher loads adjacent 64-byte cache lines into L1 cache, making subsequent sequential accesses ~100x faster than random memory jumps",explanation:"Reading from L1 cache takes ~1ns (4-5 CPU cycles) whereas reading from main RAM takes ~100ns (200-300 cycles). Spatial locality is a cornerstone of low-latency DSA design."},{id:5,question:'What is the risk of Struct Padding and Byte Alignment when creating custom node structures for "Segment Tree Representation: Storing tree nodes in 1D array with left child `2*idx + 1` and right child `2*idx + 2`"?',options:["The compiler inserts invisible padding bytes to align members to natural word boundaries (4 or 8 bytes), increasing total memory consumption per node","It causes compilation failure on 64-bit systems","It reverses the byte endianness of integer fields","It converts structs into unions"],answer:"The compiler inserts invisible padding bytes to align members to natural word boundaries (4 or 8 bytes), increasing total memory consumption per node",explanation:"To optimize memory bus transfers, CPUs require data to align with addresses divisible by their size. Ordering struct fields from largest to smallest minimizes padding waste."},{id:6,question:'What is the core algorithmic invariant that must be maintained throughout "Segment Tree Representation: Storing tree nodes in 1D array with left child `2*idx + 1` and right child `2*idx + 2`"?',options:["Strict adherence to the structural ordering property and validity of boundary indices/pointers across all mutations","All arrays must be strictly sorted in descending order","Every function must execute in O(1) time","All memory blocks must be smaller than 1 kilobyte"],answer:"Strict adherence to the structural ordering property and validity of boundary indices/pointers across all mutations",explanation:"Algorithmic correctness relies on preserving invariant state (e.g. BST search property, heap order, or sliding window bounds) before and after every state transition."},{id:7,question:'In "Segment Tree Representation: Storing tree nodes in 1D array with left child `2*idx + 1` and right child `2*idx + 2`", what is the primary state transition or recursion step?',options:["Subdividing the primary problem space into smaller independent or overlapping sub-problems and aggregating optimal sub-solutions","Executing an infinite loop until RAM is exhausted","Rebooting the CPU thread pool on each iteration","Converting dynamic structures to static arrays"],answer:"Subdividing the primary problem space into smaller independent or overlapping sub-problems and aggregating optimal sub-solutions",explanation:"Whether through Divide-and-Conquer, Dynamic Programming, or iterative window shrinking, reducing problem dimension systematically ensures convergence."},{id:8,question:'When executing pointer updates in "Segment Tree Representation: Storing tree nodes in 1D array with left child `2*idx + 1` and right child `2*idx + 2`", why is update ordering critical?',options:["Modifying a pointer before securing reference to its target or downstream chain permanently breaks linked connectivity, orphaning unreferenced nodes in memory","The compiler will reverse the execution order automatically","Pointers can only be updated once per process","It causes integer underflow in CPU registers"],answer:"Modifying a pointer before securing reference to its target or downstream chain permanently breaks linked connectivity, orphaning unreferenced nodes in memory",explanation:"In pointer-based structures, updating `curr->next = new_node` without first saving `new_node->next = curr->next` permanently loses the rest of the list."},{id:9,question:'How does in-place algorithm execution compare to auxiliary buffer allocation in "Segment Tree Representation: Storing tree nodes in 1D array with left child `2*idx + 1` and right child `2*idx + 2`"?',options:["In-place execution operates within the existing memory footprint in O(1) auxiliary space, preserving cache warmth and reducing memory pressure","In-place execution requires O(N^2) extra RAM","Auxiliary allocation is always faster than in-place mutation","In-place algorithms cannot be written in C"],answer:"In-place execution operates within the existing memory footprint in O(1) auxiliary space, preserving cache warmth and reducing memory pressure",explanation:"In-place mutation avoids expensive heap allocation system calls and keeps active data residing inside CPU cache hierarchies."},{id:10,question:'What role do sentinel nodes (dummy heads/tails) play in simplifying pointer logic in "Segment Tree Representation: Storing tree nodes in 1D array with left child `2*idx + 1` and right child `2*idx + 2`"?',options:["They eliminate edge-case branching for empty structures and insertions/deletions at boundary positions (head/tail)","They double the memory capacity of the container","They automatically sort the elements","They prevent stack allocation limits"],answer:"They eliminate edge-case branching for empty structures and insertions/deletions at boundary positions (head/tail)",explanation:"A dummy sentinel guarantees that every valid element always has a non-null preceding and succeeding neighbor, removing tedious `if (!head)` checks."},{id:11,question:'What critical edge case must always be checked first when implementing "Segment Tree Representation: Storing tree nodes in 1D array with left child `2*idx + 1` and right child `2*idx + 2`"?',options:["Empty input container, NULL base pointer, or container size N = 0 and N = 1","Checking if the computer is connected to the internet","Verifying if numbers are prime","Checking floating point precision mode"],answer:"Empty input container, NULL base pointer, or container size N = 0 and N = 1",explanation:"Boundary inputs (empty, single-element, or identical values) are the most frequent causes of null-pointer exceptions and infinite loops."},{id:12,question:"What is a 'Dangling Pointer' bug in the context of \"Segment Tree Representation: Storing tree nodes in 1D array with left child `2*idx + 1` and right child `2*idx + 2`\"?",options:["A pointer that continues to hold the memory address of a node or buffer that has already been deallocated via `free()`","A pointer declared with the `const` qualifier","A pointer that points to static global memory","A pointer stored in an array"],answer:"A pointer that continues to hold the memory address of a node or buffer that has already been deallocated via `free()`",explanation:"Deallocating memory releases the heap block to the allocator's free list, but leaves the pointer variable holding the old address. Reading or writing to it results in Use-After-Free corruption."},{id:13,question:"What is the standard industrial remedy to eliminate Dangling Pointer bugs after `free(ptr)`?",options:["Immediately set `ptr = NULL;` so any accidental future access triggers an instant, predictable SIGSEGV crash instead of silent memory corruption","Call malloc immediately with size 0","Recompile the code with optimization flags -O3","Cast the pointer to `void*`"],answer:"Immediately set `ptr = NULL;` so any accidental future access triggers an instant, predictable SIGSEGV crash instead of silent memory corruption",explanation:"Neutralizing pointers to NULL prevents Use-After-Free security vulnerabilities, and `free(NULL)` is guaranteed to be a safe no-op by ISO C."},{id:14,question:"What catastrophic vulnerability occurs when dynamic memory is reallocated using `ptr = realloc(ptr, new_size)` without a temporary pointer?",options:["If `realloc()` fails and returns NULL, `ptr` is overwritten with NULL, causing an unrecoverable memory leak of the original allocated block","The operating system terminates all running threads","The file system enters read-only mode","The compiler converts the array to a linked list"],answer:"If `realloc()` fails and returns NULL, `ptr` is overwritten with NULL, causing an unrecoverable memory leak of the original allocated block",explanation:"Always use `void* tmp = realloc(ptr, new_size); if (!tmp) { /* handle error */ } else { ptr = tmp; }` to preserve the original pointer on failure."},{id:15,question:'What happens if a recursive function in "Segment Tree Representation: Storing tree nodes in 1D array with left child `2*idx + 1` and right child `2*idx + 2`" lacks a proper base termination condition?',options:["Unbounded recursive activation frames are pushed onto the Call Stack until the OS stack guard page is breached, triggering a Stack Overflow (SIGSEGV) crash","The function returns 0 automatically","The CPU executes the function in negative time","The operating system increases stack RAM to infinite capacity"],answer:"Unbounded recursive activation frames are pushed onto the Call Stack until the OS stack guard page is breached, triggering a Stack Overflow (SIGSEGV) crash",explanation:"Call stack memory is strictly bounded (typically 1-8 MB). Unbounded recursion exhausts stack memory rapidly, causing a hard process crash."},{id:16,question:'What is the optimal Asymptotic Time Complexity targeted in "Segment Tree Representation: Storing tree nodes in 1D array with left child `2*idx + 1` and right child `2*idx + 2`"?',options:["O(1) constant or O(log N) logarithmic / O(N) linear time depending on the exact operational phase","O(N!) factorial time","O(2^N) exponential time","O(N^4) polynomial time"],answer:"O(1) constant or O(log N) logarithmic / O(N) linear time depending on the exact operational phase",explanation:"Industrial algorithms strive for logarithmic O(log N) or linear O(N) upper bounds to ensure scalable execution on millions of data records."},{id:17,question:"What is the difference between 'Auxiliary Space Complexity' and 'Total Space Complexity' for \"Segment Tree Representation: Storing tree nodes in 1D array with left child `2*idx + 1` and right child `2*idx + 2`\"?",options:["Auxiliary Space measures only the extra temporary working memory allocated by the algorithm, excluding the input data size itself","Auxiliary Space includes the hard disk swap partition","Total Space measures only CPU register usage","There is no difference between auxiliary and total space"],answer:"Auxiliary Space measures only the extra temporary working memory allocated by the algorithm, excluding the input data size itself",explanation:"An algorithm that sorts an array of size N in-place uses O(N) total space (for input) but strictly O(1) auxiliary working space."},{id:18,question:"What is the formal definition of 'Amortized Time Complexity' in data structure operations?",options:["The average time per operation evaluated over a worst-case sequence of N consecutive operations (e.g. dynamic array doubling)","The best-case execution time on a sorted array","The time taken when running on multiple CPU cores","The compilation time of the program"],answer:"The average time per operation evaluated over a worst-case sequence of N consecutive operations (e.g. dynamic array doubling)",explanation:"Amortized analysis guarantees that even if an occasional single operation is expensive (e.g. O(N) reallocation), the average cost per operation across a long sequence remains strictly O(1)."},{id:19,question:"According to the Master Theorem for divide-and-conquer recurrences T(n) = aT(n/b) + f(n), what determines the overall complexity?",options:["The asymptotic comparison between the work done at the leaves n^(log_b a) and the work done at the divide/combine step f(n)","The total number of global variables in the C source file","The physical clock speed of the CPU in GHz","The RAM bus width"],answer:"The asymptotic comparison between the work done at the leaves n^(log_b a) and the work done at the divide/combine step f(n)",explanation:"The Master Theorem compares $f(n)$ against the watershed function $n^{\\log_b a}$ to determine whether leaf work, root work, or balanced tree work dominates the asymptotic bound."},{id:20,question:"Why is an algorithm with O(N log N) time complexity vastly superior to O(N^2) for N = 1,000,000 elements?",options:["For N = 10^6, N log2(N) is ~20 million operations, whereas N^2 is 1 trillion (10^12) operations—running in milliseconds vs hours","Because log N removes negative numbers","Because O(N^2) is not compilable in modern C","Because O(N log N) uses zero CPU power"],answer:"For N = 10^6, N log2(N) is ~20 million operations, whereas N^2 is 1 trillion (10^12) operations—running in milliseconds vs hours",explanation:"Asymptotic growth curves diverge exponentially at scale: a 1-trillion operation workload takes ~16 minutes at 1 GHz, while 20 million operations take ~0.02 seconds."},{id:21,question:'In the Barrackpore Lab dialogue for "Segment Tree Representation: Storing tree nodes in 1D array with left child `2*idx + 1` and right child `2*idx + 2`", what key insight does Sukanta Sir emphasize regarding pointer ownership?',options:["Every dynamically allocated heap resource must have exactly ONE clearly designated owner responsible for its lifecycle and deallocation","All pointers should be global variables to avoid passing arguments","Pointers should never be freed until the operating system shuts down","Always cast every pointer to a float"],answer:"Every dynamically allocated heap resource must have exactly ONE clearly designated owner responsible for its lifecycle and deallocation",explanation:"Disciplined resource ownership prevents both orphaned memory leaks and catastrophic double-free heap corruption bugs in enterprise C architectures."},{id:22,question:'Which compiler flag in GCC/Clang should always be enabled during development of "Segment Tree Representation: Storing tree nodes in 1D array with left child `2*idx + 1` and right child `2*idx + 2`" to detect memory leaks and boundary violations at runtime?',options:["-fsanitize=address -g (AddressSanitizer / ASan)","-O3 (Maximum optimization only)","-w (Disable all warnings)","-fno-exceptions"],answer:"-fsanitize=address -g (AddressSanitizer / ASan)",explanation:"AddressSanitizer instruments memory operations with shadow memory guards, reporting exact source code line numbers for out-of-bounds reads/writes and memory leaks."},{id:23,question:'In real-world enterprise infrastructure (e.g. Linux Kernel, Redis, PostgreSQL), where is "Segment Tree Representation: Storing tree nodes in 1D array with left child `2*idx + 1` and right child `2*idx + 2`" actively applied?',options:["Core system subsystems such as memory allocators, database index engines, virtual file systems (VFS), and high-throughput network packet buffers","Writing simple word processing macros only","Designing static HTML pages","Disabling hardware interrupts exclusively"],answer:"Core system subsystems such as memory allocators, database index engines, virtual file systems (VFS), and high-throughput network packet buffers",explanation:"The data structures and algorithmic patterns in this track form the fundamental bedrock of operating system kernels, relational storage engines, and high-frequency trading engines."},{id:24,question:"What is the diagnostic difference between a 'Definitely Lost' leak and a 'Still Reachable' leak in Valgrind Memcheck?",options:["'Definitely Lost' means all pointers to the allocated block were lost (unrecoverable leak); 'Still Reachable' means pointers to the block still exist at program exit","'Still Reachable' means the CPU memory is permanently damaged","'Definitely Lost' indicates a hardware disk fault","Both indicate syntax compilation errors"],answer:"'Definitely Lost' means all pointers to the allocated block were lost (unrecoverable leak); 'Still Reachable' means pointers to the block still exist at program exit",explanation:"Definitely lost leaks represent fundamental bugs where memory became unreachable during runtime. Still reachable blocks are typically global pointers not explicitly freed before process termination."},{id:25,question:"What is the ultimate takeaway from Sukanta Sir's Barrackpore Lab on mastering Data Structures in C?",options:["True mastery requires bridging high-level mathematical abstractions with exact low-level physical byte layouts, cache locality, and zero-leak memory management","Memorizing syntax without understanding memory is sufficient","Always avoid pointers and use global variables","C is strictly a theoretical academic language"],answer:"True mastery requires bridging high-level mathematical abstractions with exact low-level physical byte layouts, cache locality, and zero-leak memory management",explanation:"Understanding how algorithms interact with CPU cache lines, stack frames, and the OS heap allocator is what distinguishes an exceptional systems engineer from a syntax coder."}],T=`================================================================================
CODER & ACCOTAX - PRINTABLE STUDY NOTE: SEGMENT TREES & LAZY PROPAGATION
Course: Data Structures & Algorithms in C
Educator: Sukanta Hui · Barrackpore, West Bengal, India
================================================================================

1. SEGMENT TREE STRUCTURE & ASYMPTOTIC COMPLEXITY
--------------------------------------------------------------------------------
A Segment Tree is a full binary tree where each node stores an aggregated summary 
(Sum, Minimum, Maximum, GCD) over a contiguous subsegment \`[start..end]\` of an array.

• Build Tree Time:             O(N)         [Visits < 4N nodes once]
• Point Query / Update Time:    O(log N)     [Tree height is ceil(log2 N)]
• Range Query Time:             O(log N)     [Visits at most 4 nodes per tree level]
• Range Update (with Lazy):     O(log N)     [Defers child subtree traversals]
• Auxiliary Memory Space:       4 * N * sizeof(int) [Flat 1D array representation]

2. TREE INDEXING IN FLAT 1D C ARRAYS (1-BASED)
--------------------------------------------------------------------------------
Root Node:          Index 1
Left Child of k:    \`2 * k\`      (Bitwise: \`k << 1\`)
Right Child of k:   \`2 * k + 1\`  (Bitwise: \`(k << 1) | 1\`)
Parent of node k:   \`k / 2\`      (Bitwise: \`k >> 1\`)

3. THREE RANGE OVERLAP CASES
--------------------------------------------------------------------------------
During recursive query / update on node handling \`[start..end]\` with target \`[l..r]\`:

1. No Overlap (Completely Outside):
   Condition: \`r < start || end < l\`
   Action: Return neutral identity value (0 for Sum, INT_MAX for Min, 0 for GCD).

2. Total Overlap (Completely Inside):
   Condition: \`l <= start && end <= r\`
   Action: Return / Update \`tree[node]\` directly; set \`lazy[node]\` if not a leaf.

3. Partial Overlap:
   Action: Push down any pending lazy values; recurse on left and right children;
           merge results: \`tree[node] = tree[leftChild] + tree[rightChild]\`.

4. LAZY PROPAGATION (PUSH-DOWN MECHANICS)
--------------------------------------------------------------------------------
When a node has pending lazy values (\`lazy[node] != 0\`):
  • Propagate to left child:
      tree[leftChild] += lazy[node] * leftSegmentLength;
      lazy[leftChild] += lazy[node];
  • Propagate to right child:
      tree[rightChild] += lazy[node] * rightSegmentLength;
      lazy[rightChild] += lazy[node];
  • Reset current node lazy value:
      lazy[node] = 0;

5. MEMORY SAFETY & POINTER INVARIANTS IN C
--------------------------------------------------------------------------------
[✓] Always allocate \`4 * n\` elements: \`calloc(4 * n, sizeof(int))\`.
[✓] Never access index 0 when using 1-based indexing; root starts at \`node = 1\`.
[✓] Check \`start == end\` to identify leaf nodes and avoid pushing lazy values past leaves.

================================================================================
Coder & AccoTax Computer Education Center · Barrackpore, West Bengal, India
================================================================================
`,u=`/**
 * ============================================================================
 * Course: Data Structures & Algorithms in C (Coder & AccoTax, Barrackpore)
 * Mentor: Sukanta Hui
 * Topic: Segment Trees with Lazy Propagation for O(log N) Range Updates
 * File: SegmentTreeDemo.c
 * ============================================================================
 */

#include <stdio.h>
#include <stdlib.h>

typedef struct SegmentTree {
    int* tree; // Array-based binary tree of size 4 * N
    int* lazy; // Lazy values waiting to be propagated downwards
    int n;
} SegmentTree;

// Initialize Segment Tree
SegmentTree* createSegmentTree(int n) {
    SegmentTree* st = (SegmentTree*)malloc(sizeof(SegmentTree));
    if (!st) return NULL;

    st->n = n;
    st->tree = (int*)calloc(4 * n, sizeof(int));
    st->lazy = (int*)calloc(4 * n, sizeof(int));
    return st;
}

// Build the Segment Tree in O(N) from source array
void buildTree(SegmentTree* st, const int arr[], int node, int start, int end) {
    if (start == end) {
        st->tree[node] = arr[start];
        return;
    }

    int mid = start + (end - start) / 2;
    int leftChild = 2 * node;
    int rightChild = 2 * node + 1;

    buildTree(st, arr, leftChild, start, mid);
    buildTree(st, arr, rightChild, mid + 1, end);

    st->tree[node] = st->tree[leftChild] + st->tree[rightChild];
}

// Push pending lazy updates to child nodes
static void pushDown(SegmentTree* st, int node, int start, int end) {
    if (st->lazy[node] != 0) {
        int val = st->lazy[node];
        int mid = start + (end - start) / 2;
        int leftChild = 2 * node;
        int rightChild = 2 * node + 1;

        // Apply to left child
        st->tree[leftChild] += val * (mid - start + 1);
        st->lazy[leftChild] += val;

        // Apply to right child
        st->tree[rightChild] += val * (end - mid);
        st->lazy[rightChild] += val;

        st->lazy[node] = 0; // Clear current lazy state
    }
}

// Range Update with Lazy Propagation in O(log N)
void updateRangeLazy(SegmentTree* st, int node, int start, int end, int l, int r, int val) {
    // Current segment is completely outside query range
    if (r < start || end < l) {
        return;
    }

    // Current segment is completely inside query range
    if (l <= start && end <= r) {
        st->tree[node] += val * (end - start + 1);
        if (start != end) {
            st->lazy[node] += val; // Mark node as having pending updates for children
        }
        return;
    }

    // Partial overlap: Push down lazy values first
    pushDown(st, node, start, end);

    int mid = start + (end - start) / 2;
    int leftChild = 2 * node;
    int rightChild = 2 * node + 1;

    updateRangeLazy(st, leftChild, start, mid, l, r, val);
    updateRangeLazy(st, rightChild, mid + 1, end, l, r, val);

    st->tree[node] = st->tree[leftChild] + st->tree[rightChild];
}

// Range Sum Query with Lazy Propagation in O(log N)
int queryRangeSum(SegmentTree* st, int node, int start, int end, int l, int r) {
    // Completely outside
    if (r < start || end < l) {
        return 0;
    }

    // Completely inside
    if (l <= start && end <= r) {
        return st->tree[node];
    }

    // Partial overlap: Push down lazy updates
    pushDown(st, node, start, end);

    int mid = start + (end - start) / 2;
    int leftChild = 2 * node;
    int rightChild = 2 * node + 1;

    int leftSum = queryRangeSum(st, leftChild, start, mid, l, r);
    int rightSum = queryRangeSum(st, rightChild, mid + 1, end, l, r);

    return leftSum + rightSum;
}

void freeSegmentTree(SegmentTree* st) {
    if (st) {
        free(st->tree);
        free(st->lazy);
        free(st);
    }
}

int main(void) {
    printf("=================================================================\\n");
    printf("     CODER & ACCOTAX - SEGMENT TREE & LAZY PROPAGATION DEMO      \\n");
    printf("     Mentor: Sukanta Hui · Barrackpore Lab Demonstration         \\n");
    printf("=================================================================\\n\\n");

    int rawData[] = {1, 3, 5, 7, 9, 11};
    int n = sizeof(rawData) / sizeof(rawData[0]);

    SegmentTree* st = createSegmentTree(n);
    buildTree(st, rawData, 1, 0, n - 1);

    printf("1. Initial Array: {1, 3, 5, 7, 9, 11} (Size: %d)\\n", n);
    printf("   Segment Tree successfully built in O(N) time.\\n\\n");

    // Range Queries before updates
    printf("2. Initial Range Queries:\\n");
    printf("   • Query Sum [1..3] (Values: 3+5+7): %d\\n", queryRangeSum(st, 1, 0, n - 1, 1, 3));
    printf("   • Query Sum [0..5] (Total Sum):     %d\\n\\n", queryRangeSum(st, 1, 0, n - 1, 0, 5));

    // Lazy Range Update: Add 10 to indices 1 through 4
    printf("3. Performing Lazy Range Update: Add +10 to range [1..4]...\\n");
    updateRangeLazy(st, 1, 0, n - 1, 1, 4, 10);
    printf("   ✓ Range update completed in O(log N) time using lazy propagation.\\n\\n");

    // Range Queries after update
    printf("4. Range Queries After Update:\\n");
    printf("   • Query Sum [1..3] (Was 15, now 15 + 3*10 = 45): %d\\n", queryRangeSum(st, 1, 0, n - 1, 1, 3));
    printf("   • Query Sum [0..5] (Was 36, now 36 + 4*10 = 76): %d\\n", queryRangeSum(st, 1, 0, n - 1, 0, 5));
    printf("   • Query Sum [0..0] (Index 0 untouched, value 1):  %d\\n\\n", queryRangeSum(st, 1, 0, n - 1, 0, 0));

    freeSegmentTree(st);
    printf("   ✓ Segment Tree heap memory safely freed.\\n");

    return 0;
}
`;function I(){const l=r.useRef([]),[i,h]=r.useState([12,28,45,67,89]),[s,p]=r.useState(0),[g,d]=r.useState("Visualizer initialized. Ready for step-by-step state simulation."),[c,m]=r.useState("");r.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(o=>{o.isIntersecting&&o.target.classList.add("is-visible")})},{threshold:.08});return l.current.forEach(n=>{n&&t.observe(n)}),()=>t.disconnect()},[]);const a=t=>{t&&!l.current.includes(t)&&l.current.push(t)},y=()=>{p(t=>(t+1)%i.length),d(`Advanced to step ${(s+1)%i.length}: Invariant verified at index ${(s+1)%i.length}.`)},x=()=>{const t=c.trim()!==""?parseInt(c,10):Math.floor(Math.random()*90+10);isNaN(t)||(h(n=>[...n.slice(-7),t]),d(`Pushed value ${t} into active memory structure. Buffer state updated.`),m(""))},f=()=>{h([12,28,45,67,89]),p(0),d("Structure reset to base state."),m("")};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .reveal-section {
          opacity: 0.99;
          transform: translateY(0);
          transition: opacity 0.4s ease-out, transform 0.4s ease-out;
        }
        .reveal-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}),e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 md:p-12 font-sans selection:bg-cyan-500/30 selection:text-cyan-200",children:[e.jsxs("header",{ref:a,className:"reveal-section max-w-5xl mx-auto mb-12 text-center space-y-4",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-700/60 text-cyan-300 text-xs font-semibold uppercase tracking-wider shadow-lg",children:[e.jsx("span",{children:"⚡"}),e.jsx("span",{children:"DSA Segment 6 · Topic 0"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 tracking-tight leading-tight",children:"Segment Tree Representation: Storing tree nodes in 1D array with left child `2*idx + 1` and right child `2*idx + 2`"}),e.jsx("p",{className:"text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed",children:"Segment Trees & Lazy Propagation: Range Minimum/Sum Queries & Range Updates: Deep technical architectural breakdown, memory layout mechanics, pointer invariants, and industrial C implementation at Coder & AccoTax Barrackpore Lab."}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-2",children:[e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-cyan-400",children:"Course Code: DSA-C-600"}),e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-sky-400",children:"Center: Coder & AccoTax (Barrackpore Lab)"}),e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-emerald-400",children:"Mentor: Sukanta Hui"})]})]}),e.jsx("section",{ref:a,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:e.jsxs("div",{className:"bg-gradient-to-br from-slate-900 via-slate-900/90 to-cyan-950/30 border border-cyan-500/30 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-2xl",children:"👨‍🏫"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-cyan-300",children:"Teacher's Desk: Physical Intuition & Mental Models"}),e.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Sukanta Hui & Barrackpore Lab Classroom Dialogue"})]})]}),e.jsxs("div",{className:"space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base",children:[e.jsxs("div",{className:"bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("h3",{className:"text-cyan-400 font-bold flex items-center gap-2 text-base",children:[e.jsx("span",{children:"💡"})," The Physical Intuition Behind Segment Tree Representation: Storing tree nodes in 1D array with left child `2*idx + 1` and right child `2*idx + 2`"]}),e.jsx("p",{children:"In computer science and low-level C programming, algorithms are not abstract magic—they are physical instructions executed on silicon hardware! When manipulating memory, your primary goals are maximizing CPU Cache Line hits (64-byte spatial locality), eliminating pointer chasing, and guaranteeing zero memory leaks."})]}),e.jsxs("div",{className:"bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("h3",{className:"text-sky-400 font-bold flex items-center gap-2 text-base",children:[e.jsx("span",{children:"💬"})," Barrackpore Lab Classroom Discussion"]}),e.jsxs("div",{className:"space-y-3 text-xs sm:text-sm font-sans border-l-2 border-cyan-500/40 pl-4 py-1",children:[e.jsxs("p",{children:[e.jsx("strong",{className:"text-emerald-400",children:"Swadeep:"})," ",e.jsx("em",{children:'"Sir, what is the most critical invariant we must protect when implementing Segment Tree Representation: Storing tree nodes in 1D array with left child `2*idx + 1` and right child `2*idx + 2` in C?"'})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-cyan-300",children:"Sukanta Sir:"})," ",e.jsx("em",{children:'"Always validate your memory boundaries and pointer validity before dereferencing! In C, accessing memory past allocated bounds or dereferencing NULL causes undefined behavior or segmentation faults. Every allocation must have deterministic ownership and cleanup."'})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-emerald-400",children:"Tuhina:"})," ",e.jsx("em",{children:'"And by setting pointers to NULL immediately after calling free(), we prevent Dangling Pointers and Use-After-Free bugs!"'})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-cyan-300",children:"Sukanta Sir:"})," ",e.jsx("em",{children:'"Exactly right! That zero-leak discipline is what separates a novice coder from a world-class systems engineer."'})]})]})]})]})]})}),e.jsx("section",{ref:a,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:e.jsxs("div",{className:"bg-slate-900/90 border border-cyan-500/30 rounded-2xl p-6 md:p-8 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-cyan-300 flex items-center gap-2",children:[e.jsx("span",{children:"🔬"})," Interactive State & Memory Visualizer"]}),e.jsx("p",{className:"text-xs text-slate-400 font-mono mt-1",children:"Step-by-step structural inspection & pointer traversal simulation"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-400",children:["Elements: ",e.jsx("strong",{className:"text-white",children:i.length})]}),e.jsxs("div",{className:"px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-sky-400",children:["Active Focus: ",e.jsxs("strong",{className:"text-white",children:["[",s,"]"]})]}),e.jsxs("div",{className:"px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-emerald-400",children:["Memory: ",e.jsxs("strong",{className:"text-white",children:[i.length*4,"B"]})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider",children:"Memory Nodes & Pointer Registers:"}),e.jsx("div",{className:"flex flex-wrap items-center gap-3 p-4 bg-slate-950/80 rounded-xl border border-slate-800/80 min-h-[90px]",children:i.map((t,n)=>{const o=n===s;return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("div",{className:`flex flex-col items-center justify-center px-4 py-2.5 rounded-xl border transition-all duration-300 ${o?"bg-gradient-to-b from-cyan-950 to-slate-900 border-cyan-400 text-cyan-200 shadow-lg shadow-cyan-950/80 scale-105":"bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700"}`,children:[e.jsxs("span",{className:"text-[10px] font-mono text-slate-400",children:["ptr[",n,"]"]}),e.jsx("span",{className:"text-base font-bold my-0.5",children:t}),e.jsxs("span",{className:"text-[9px] font-mono text-cyan-500/80",children:["0x",(2048+n*8).toString(16)]})]}),n<i.length-1&&e.jsx("span",{className:"text-cyan-600 font-bold text-sm select-none",children:"→"})]},n)})})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-3 pt-2",children:[e.jsx("input",{type:"number",value:c,onChange:t=>m(t.target.value),placeholder:"Value",className:"bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-cyan-300 focus:outline-none focus:border-cyan-500 font-mono w-28"}),e.jsxs("button",{onClick:x,className:"px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-sm transition-all shadow-md shadow-cyan-950 flex items-center gap-1.5",children:[e.jsx("span",{children:"➕"})," Insert Node"]}),e.jsxs("button",{onClick:y,className:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-all border border-slate-700 flex items-center gap-1.5",children:[e.jsx("span",{children:"⏭️"})," Step Forward"]}),e.jsx("button",{onClick:f,className:"px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-sm transition-all border border-slate-800",children:"Reset"})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-3.5 font-mono text-xs text-cyan-400 flex items-center gap-2",children:[e.jsx("span",{className:"text-base",children:"ℹ️"}),e.jsx("span",{children:g})]})]})}),e.jsxs("section",{ref:a,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:[e.jsxs("h2",{className:"text-2xl font-bold text-cyan-300 flex items-center gap-2",children:[e.jsx("span",{children:"📚"})," Deep Technical Breakdown & Architectural Invariants"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3",children:[e.jsxs("h3",{className:"text-lg font-bold text-cyan-400 flex items-center gap-2",children:[e.jsx("span",{children:"1️⃣"})," Physical Memory & Cache Mechanics"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Hardware memory efficiency is dictated by cache line utilization. Sequential accesses allow the CPU L1 prefetcher to load 64-byte blocks in a single ~1ns cycle instead of suffering ~100ns RAM stalls."}),e.jsxs("ul",{className:"text-xs text-slate-400 space-y-1 list-disc list-inside",children:[e.jsx("li",{children:"Stack vs Heap: Automatic fast frame cleanup vs dynamic lifetime control."}),e.jsx("li",{children:"Struct Alignment: Fields ordered to prevent unnecessary compiler padding bytes."})]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3",children:[e.jsxs("h3",{className:"text-lg font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"2️⃣"})," State Transitions & Invariants"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Algorithmic correctness depends on strictly maintaining structural invariants before and after every pointer mutation or state transition."}),e.jsxs("ul",{className:"text-xs text-slate-400 space-y-1 list-disc list-inside",children:[e.jsx("li",{children:"Base Cases: Explicit guards for empty containers or single-element inputs."}),e.jsx("li",{children:"Pointer Ordering: Saving downstream references prior to link reassignment."})]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3",children:[e.jsxs("h3",{className:"text-lg font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"3️⃣"})," Asymptotic Complexity Bounds"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Asymptotic efficiency guarantees predictable execution time and minimal auxiliary space overhead across large input scales."}),e.jsxs("ul",{className:"text-xs text-slate-400 space-y-1 list-disc list-inside",children:[e.jsx("li",{children:"Time Complexity: Optimal average and worst-case mathematical bounds."}),e.jsx("li",{children:"Auxiliary Space: Strictly constant O(1) or minimal linear working memory."})]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3",children:[e.jsxs("h3",{className:"text-lg font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"4️⃣"})," Memory Safety & Zero-Leak Protocol"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Industrial C applications enforce strict ownership semantics and systematic deallocation routines to avoid production vulnerabilities."}),e.jsxs("ul",{className:"text-xs text-slate-400 space-y-1 list-disc list-inside",children:[e.jsx("li",{children:"Neutralization: Always setting ptr = NULL immediately following free(ptr)."}),e.jsx("li",{children:"Diagnostics: Verification via AddressSanitizer (-fsanitize=address) and Valgrind."})]})]})]})]}),e.jsxs("section",{ref:a,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-cyan-400 flex items-center gap-2",children:[e.jsx("span",{children:"🛠️"})," Runnable Production C Implementation"]}),e.jsx(S,{code:u,initialCode:u,title:"SegmentTreeDemo.c"})]}),e.jsx("section",{ref:a,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(w,{questions:N})}),e.jsx("section",{ref:a,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(v,{content:T,title:"DSA Topic Note: Segment Tree Representation: Storing tree nodes in 1D array with left child `2*idx + 1` and right child `2*idx + 2`"})}),e.jsx("section",{ref:a,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(b,{})})]})]})}export{I as default};
