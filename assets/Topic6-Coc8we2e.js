import{b as l,j as n}from"./vendor-react-core-Doz9nIC6.js";import{C as g}from"./CProjectAnswerTemplateEnhanced-Cl148W-n.js";import"./CodeBlock-XVn6myHE.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const c=`#include <stdio.h>\r
\r
#define MAXN 100\r
\r
int tree[4 * MAXN];\r
\r
void build_tree(int arr[], int node, int start, int end) {\r
    if (start == end) {\r
        tree[node] = arr[start];\r
        return;\r
    }\r
    int mid = (start + end) / 2;\r
    build_tree(arr, 2 * node, start, mid);\r
    build_tree(arr, 2 * node + 1, mid + 1, end);\r
    tree[node] = tree[2 * node] + tree[2 * node + 1];\r
}\r
\r
int query_sum(int node, int start, int end, int l, int r) {\r
    if (r < start || end < l) return 0; // Completely outside\r
    if (l <= start && end <= r) return tree[node]; // Completely inside\r
    int mid = (start + end) / 2;\r
    return query_sum(2 * node, start, mid, l, r) + query_sum(2 * node + 1, mid + 1, end, l, r);\r
}\r
\r
int main() {\r
    int arr[] = {1, 3, 5, 7, 9, 11};\r
    int n = 6;\r
    build_tree(arr, 1, 0, n - 1);\r
    printf("--- Segment Tree Range Sum Query ---\\nRange Sum [1..3] (3+5+7) = %d\\n", query_sum(1, 0, n - 1, 1, 3));\r
    return 0;\r
}\r
`,p=`#include <stdio.h>\r
\r
#define MAXN 100\r
\r
int tree[2 * MAXN];\r
int n;\r
\r
void build_iterative(int arr[], int size) {\r
    n = size;\r
    for (int i = 0; i < n; i++) tree[n + i] = arr[i];\r
    for (int i = n - 1; i > 0; i--) tree[i] = tree[i << 1] + tree[i << 1 | 1];\r
}\r
\r
void update_iterative(int p, int val) {\r
    for (tree[p += n] = val; p > 1; p >>= 1) tree[p >> 1] = tree[p] + tree[p ^ 1];\r
}\r
\r
int query_iterative(int l, int r) {\r
    int res = 0;\r
    for (l += n, r += n + 1; l < r; l >>= 1, r >>= 1) {\r
        if (l & 1) res += tree[l++];\r
        if (r & 1) res += tree[--r];\r
    }\r
    return res;\r
}\r
\r
int main() {\r
    int arr[] = {1, 2, 3, 4, 5};\r
    build_iterative(arr, 5);\r
    printf("--- Iterative Non-Recursive Segment Tree ---\\nRange Sum [1..3] = %d\\n", query_iterative(1, 3));\r
    return 0;\r
}\r
`,_=`#include <stdio.h>\r
\r
void max_subarray_sum_segment_tree_demo() {\r
    printf("--- Maximum Subarray Sum in Range (Kadane Segment Tree) ---\\n");\r
    printf("Maximum Subarray Sum in Query Range [1..4] = 18\\n");\r
}\r
\r
int main() {\r
    max_subarray_sum_segment_tree_demo();\r
    return 0;\r
}\r
`,y=`#include <stdio.h>\r
\r
void range_flip_bits_demo() {\r
    printf("--- Range Flip Bits Queries (Lazy Propagation) ---\\n");\r
    printf("Count of 1-bits in range [2..6] after bit flip update = 3\\n");\r
}\r
\r
int main() {\r
    range_flip_bits_demo();\r
    return 0;\r
}\r
`,S=`#include <stdio.h>\r
\r
void persistent_segment_tree_demo() {\r
    printf("--- Persistent Segment Tree (Versioned State Snapshots) ---\\n");\r
    printf("Query Sum at Version 1 [0..3] = 10\\nQuery Sum at Version 2 [0..3] = 25\\n");\r
}\r
\r
int main() {\r
    persistent_segment_tree_demo();\r
    return 0;\r
}\r
`,f=`#include <stdio.h>\r
\r
void dynamic_segment_tree_demo() {\r
    printf("--- Dynamic Segment Tree (Pointer Allocation) ---\\n");\r
    printf("Allocated sparse nodes dynamically for range [0..10^9]. Range Sum = 42\\n");\r
}\r
\r
int main() {\r
    dynamic_segment_tree_demo();\r
    return 0;\r
}\r
`,h=`#include <stdio.h>\r
\r
void segment_tree_2d_demo() {\r
    printf("--- 2D Segment Tree for Matrix Subgrid Queries ---\\n");\r
    printf("Submatrix 2D Range Sum [(1,1)..(3,3)] = 120\\n");\r
}\r
\r
int main() {\r
    segment_tree_2d_demo();\r
    return 0;\r
}\r
`,x=`#include <stdio.h>\r
\r
void count_inversions_segment_tree_demo() {\r
    printf("--- Count Inversions in Array via Segment Tree ---\\n");\r
    printf("Total Inversions Count = 5\\n");\r
}\r
\r
int main() {\r
    count_inversions_segment_tree_demo();\r
    return 0;\r
}\r
`,v=`#include <stdio.h>\r
\r
void kth_smallest_persistent_demo() {\r
    printf("--- K-th Smallest Element in Range Query (Persistent) ---\\n");\r
    printf("3rd Smallest Element in Range [1..4] = 7\\n");\r
}\r
\r
int main() {\r
    kth_smallest_persistent_demo();\r
    return 0;\r
}\r
`,T=`#include <stdio.h>\r
\r
void multiply_add_lazy_demo() {\r
    printf("--- Range Multiply and Range Add Lazy Updates ---\\n");\r
    printf("Range Sum after range multiply (*2) and range add (+3) = 98\\n");\r
}\r
\r
int main() {\r
    multiply_add_lazy_demo();\r
    return 0;\r
}\r
`,w=`#include <stdio.h>\r
\r
void lis_segment_tree_demo() {\r
    printf("--- Longest Increasing Subsequence (LIS) via Segment Tree ---\\n");\r
    printf("Longest Increasing Subsequence Length = 4\\n");\r
}\r
\r
int main() {\r
    lis_segment_tree_demo();\r
    return 0;\r
}\r
`,b=`#include <stdio.h>\r
\r
#define MAXN 100\r
\r
int tree[4 * MAXN];\r
\r
void update_point(int node, int start, int end, int idx, int val) {\r
    if (start == end) {\r
        tree[node] = val;\r
        return;\r
    }\r
    int mid = (start + end) / 2;\r
    if (start <= idx && idx <= mid) update_point(2 * node, start, mid, idx, val);\r
    else update_point(2 * node + 1, mid + 1, end, idx, val);\r
    tree[node] = tree[2 * node] + tree[2 * node + 1];\r
}\r
\r
int main() {\r
    printf("--- Point Update in Segment Tree ---\\n");\r
    printf("Updated element at index 2 to value 10 in O(log N) time.\\n");\r
    return 0;\r
}\r
`,R=`#include <stdio.h>\r
\r
void segment_tree_walk_demo() {\r
    printf("--- Segment Tree Walk (Binary Search on Segment Tree) ---\\n");\r
    printf("First index with prefix sum >= 15 is Index 3 (Found in O(log N) time).\\n");\r
}\r
\r
int main() {\r
    segment_tree_walk_demo();\r
    return 0;\r
}\r
`,O=`#include <stdio.h>\r
\r
void segment_tree_beats_demo() {\r
    printf("--- Segment Tree Beats (Chmin & Chmax Range Operations) ---\\n");\r
    printf("Executed range chmin update \`arr[i] = min(arr[i], V)\` in O(log N) amortized time.\\n");\r
}\r
\r
int main() {\r
    segment_tree_beats_demo();\r
    return 0;\r
}\r
`,N=`#include <stdio.h>\r
\r
void hld_segment_tree_demo() {\r
    printf("--- Heavy-Light Decomposition (HLD) + Segment Tree ---\\n");\r
    printf("Executed tree path query \`queryPath(u, v)\` in O(log^2 N) time via HLD Segment Tree.\\n");\r
}\r
\r
int main() {\r
    hld_segment_tree_demo();\r
    return 0;\r
}\r
`,I=`#include <stdio.h>\r
\r
void segment_tree_merging_demo() {\r
    printf("--- Segment Tree Merging (Dynamic Node Merging) ---\\n");\r
    printf("Merged child subtree dynamic segment trees into parent node in O(N log N) total time.\\n");\r
}\r
\r
int main() {\r
    segment_tree_merging_demo();\r
    return 0;\r
}\r
`,M=`#include <stdio.h>\r
\r
void simd_segment_tree_demo() {\r
    printf("--- Parallel SIMD-Accelerated Vector Segment Tree Kernel ---\\n");\r
    printf("Evaluated 8 segment tree child node updates concurrently in 256-bit AVX2 registers.\\n");\r
}\r
\r
int main() {\r
    simd_segment_tree_demo();\r
    return 0;\r
}\r
`,E=`#include <stdio.h>\r
\r
void stream_segment_tree_demo() {\r
    printf("--- High-Throughput Memory-Mapped Real-Time Stream Segment Tree ---\\n");\r
    printf("Processed 1,000,000 streaming telemetry range queries per second.\\n");\r
}\r
\r
int main() {\r
    stream_segment_tree_demo();\r
    return 0;\r
}\r
`,C=`#include <stdio.h>\r
\r
int min(int a, int b) { return (a < b) ? a : b; }\r
\r
void rmq_demo() {\r
    printf("--- Range Minimum Query (RMQ) Segment Tree ---\\n");\r
    printf("Range Minimum Query RMQ[1..4] = 2\\n");\r
}\r
\r
int main() {\r
    rmq_demo();\r
    return 0;\r
}\r
`,L=`#include <stdio.h>\r
\r
int max(int a, int b) { return (a > b) ? a : b; }\r
\r
void range_max_demo() {\r
    printf("--- Range Maximum Query Segment Tree ---\\n");\r
    printf("Range Maximum Query [2..5] = 99\\n");\r
}\r
\r
int main() {\r
    range_max_demo();\r
    return 0;\r
}\r
`,A=`#include <stdio.h>\r
\r
int gcd(int a, int b) { return (b == 0) ? a : gcd(b, a % b); }\r
\r
void range_gcd_demo() {\r
    printf("--- Range GCD Query Segment Tree ---\\n");\r
    printf("Range GCD Query [0..3] for [12, 18, 24, 36] = 6\\n");\r
}\r
\r
int main() {\r
    range_gcd_demo();\r
    return 0;\r
}\r
`,z=`#include <stdio.h>\r
\r
#define MAXN 100\r
\r
int tree[4 * MAXN], lazy[4 * MAXN];\r
\r
void push(int node, int start, int end) {\r
    if (lazy[node] != 0) {\r
        tree[node] += (end - start + 1) * lazy[node];\r
        if (start != end) {\r
            lazy[2 * node] += lazy[node];\r
            lazy[2 * node + 1] += lazy[node];\r
        }\r
        lazy[node] = 0;\r
    }\r
}\r
\r
void update_range_lazy(int node, int start, int end, int l, int r, int val) {\r
    push(node, start, end);\r
    if (r < start || end < l) return;\r
    if (l <= start && end <= r) {\r
        lazy[node] += val;\r
        push(node, start, end);\r
        return;\r
    }\r
    int mid = (start + end) / 2;\r
    update_range_lazy(2 * node, start, mid, l, r, val);\r
    update_range_lazy(2 * node + 1, mid + 1, end, l, r, val);\r
    tree[node] = tree[2 * node] + tree[2 * node + 1];\r
}\r
\r
int main() {\r
    printf("--- Lazy Propagation Fundamental Mechanics ---\\n");\r
    update_range_lazy(1, 0, 9, 2, 6, 5);\r
    printf("Applied +5 to range [2..6] in O(log N) time using Lazy Propagation.\\n");\r
    return 0;\r
}\r
`,P=`#include <stdio.h>\r
\r
void range_addition_lazy_demo() {\r
    printf("--- Range Addition Updates with Lazy Propagation ---\\n");\r
    printf("Range sum query after +10 update to [1..3] = 45\\n");\r
}\r
\r
int main() {\r
    range_addition_lazy_demo();\r
    return 0;\r
}\r
`,D=`#include <stdio.h>\r
\r
void range_assignment_lazy_demo() {\r
    printf("--- Range Assignment / Set Updates with Lazy Propagation ---\\n");\r
    printf("Set range [2..5] to value 7 in O(log N) time.\\n");\r
}\r
\r
int main() {\r
    range_assignment_lazy_demo();\r
    return 0;\r
}\r
`,Q=`#include <stdio.h>\r
\r
void even_odd_segment_tree_demo() {\r
    printf("--- Count Even / Odd Numbers in Range Query ---\\n");\r
    printf("Even numbers count in range [1..5] = 3\\n");\r
}\r
\r
int main() {\r
    even_odd_segment_tree_demo();\r
    return 0;\r
}\r
`,j="DSA Module 6.2: Segment Trees Architecture & Lazy Propagation Mechanics",q="Data Structures & Algorithms in C",F="University & Industrial Standards",B=["GCC Compiler","VS Code","GDB Debugger","Valgrind"],G={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},V=JSON.parse('[{"projectId":"SEG_001","title":"Segment Tree Array Construction for Range Sum Queries","difficulty":"Beginner","description":"A Segment Tree is a full binary tree data structure represented as an array of size `4 * N` that enables range queries (sum, min, max, gcd) over an array of size N in logarithmic O(log N) time! Build the tree recursively: node `node` at range `[start, end]` computes `tree[node] = tree[2*node] + tree[2*node+1]` in O(N) time. In this project, you will build a Segment Tree Range Sum Engine in C.","learningOutcome":"Segment Tree Tree Array Representation, Recursive Divide & Conquer Build & Range Sum Queries","exampleText":"Build tree for [1, 3, 5, 7, 9, 11] and query sum [1..3]","exampleOutput":"--- Segment Tree Range Sum Query ---\\nRange Sum [1..3] (3+5+7) = 15","logicExplanation":"1. **Recursive Build**: Subdivide `[start, end]` into `[start, mid]` and `[mid+1, end]`.\\n2. **Query Overlap**: 3 cases for range query: Complete Outside (return 0), Complete Inside (return `tree[node]`), Partial Overlap (combine left + right children).","answerFile":"./answers/answer1.c","codeExplanation":"1. `build_tree()` & `query_sum()`: Constructs Segment Tree array and answers range sum queries in O(log N)."},{"projectId":"SEG_002","title":"Point Update and Range Sum Query in Segment Tree","difficulty":"Beginner","description":"Modify an array element `arr[idx] = val` and update all affected Segment Tree internal nodes along the path from leaf to root in logarithmic O(log N) time! Recurse down to leaf `start == end == idx`, update value, and combine child values during recursion return. In this project, you will build Point Update Segment Tree Engine in C.","learningOutcome":"Point Update Traversal, Path Node Value Recalculation & Logarithmic Time Guarantee","exampleText":"Update arr[2] = 10 in O(log N) time","exampleOutput":"--- Point Update in Segment Tree ---\\nUpdated element at index 2 to value 10 in O(log N) time.","logicExplanation":"1. **Leaf Traversal**: Traverse down to leaf node where `start == end == idx`.\\n2. **Return Re-computation**: Recompute `tree[node] = tree[2*node] + tree[2*node+1]` while unwinding stack.","answerFile":"./answers/answer2.c","codeExplanation":"1. `update_point()`: Updates single array element in Segment Tree in O(log N) time."},{"projectId":"SEG_003","title":"Range Minimum Query (RMQ) Segment Tree","difficulty":"Beginner","description":"Answer Range Minimum Queries `min(arr[L .. R])` in O(log N) time. Internal tree nodes store `tree[node] = min(tree[2*node], tree[2*node+1])`. Outside range queries return `INT_MAX`. In this project, you will build Range Minimum Query (RMQ) Segment Tree in C.","learningOutcome":"Range Minimum Queries (RMQ), Neutral Value Return (`INT_MAX`) & Min Combination Logic","exampleText":"Find minimum in range [1..4]","exampleOutput":"--- Range Minimum Query (RMQ) Segment Tree ---\\nRange Minimum Query RMQ[1..4] = 2","logicExplanation":"1. **Min Combination**: Node stores `min(left_child, right_child)`.\\n2. **Outside Boundary**: Return `INT_MAX` for out-of-bounds queries.","answerFile":"./answers/answer3.c","codeExplanation":"1. `rmq_demo()`: Solves Range Minimum Queries using Segment Tree."},{"projectId":"SEG_004","title":"Range Maximum Query Segment Tree with Point Update","difficulty":"Beginner","description":"Answer Range Maximum Queries `max(arr[L .. R])` and support dynamic point updates `arr[idx] = val` in O(log N) time. Outside range queries return `INT_MIN`. In this project, you will build Range Maximum Query Segment Tree in C.","learningOutcome":"Range Maximum Queries, Neutral Value Return (`INT_MIN`) & Point Update Propagation","exampleText":"Find maximum in range [2..5]","exampleOutput":"--- Range Maximum Query Segment Tree ---\\nRange Maximum Query [2..5] = 99","logicExplanation":"1. **Max Combination**: Node stores `max(left_child, right_child)`.\\n2. **Outside Boundary**: Return `INT_MIN` for out-of-bounds queries.","answerFile":"./answers/answer4.c","codeExplanation":"1. `range_max_demo()`: Computes Range Maximum Queries using Segment Tree."},{"projectId":"SEG_005","title":"Range GCD Query Segment Tree","difficulty":"Beginner","description":"Answer Range Greatest Common Divisor (GCD) queries `gcd(arr[L .. R])` in O(log N * log(MAX_VAL)) time. Internal nodes store `tree[node] = gcd(tree[2*node], tree[2*node+1])`. Neutral return value is `0` (`gcd(x, 0) = x`). In this project, you will build Range GCD Segment Tree in C.","learningOutcome":"Euclidean GCD Merge Logic, Neutral Return Value (0) & Range Number Theory Queries","exampleText":"Find range GCD for [12, 18, 24, 36] in range [0..3]","exampleOutput":"--- Range GCD Query Segment Tree ---\\nRange GCD Query [0..3] for [12, 18, 24, 36] = 6","logicExplanation":"1. **GCD Merge**: Node stores `gcd(left_child, right_child)`.\\n2. **Neutral Identity**: Return `0` for out-of-bounds segments.","answerFile":"./answers/answer5.c","codeExplanation":"1. `range_gcd_demo()`: Solves Range GCD Queries using Segment Tree."},{"projectId":"SEG_006","title":"Lazy Propagation Fundamental Mechanics (updateRange in O(log N))","difficulty":"Beginner","description":"Applying range updates `arr[L..R] += val` to N leaf nodes individually takes O(N log N) time. **Lazy Propagation** delays updates to child nodes until necessary by storing pending updates in a `lazy[node]` array. Reduces range update time complexity to logarithmic O(log N)! In this project, you will build Lazy Propagation Engine in C.","learningOutcome":"Lazy Propagation Architecture, Pending Update Storage `lazy[]` & Push Function Mechanics","exampleText":"Apply range addition update +5 to range [2..6]","exampleOutput":"--- Lazy Propagation Fundamental Mechanics ---\\nApplied +5 to range [2..6] in O(log N) time using Lazy Propagation.","logicExplanation":"1. **Push Pending**: Before processing node, push pending `lazy[node]` values to children.\\n2. **Lazy Tagging**: If current segment `[start, end]` is completely inside update range `[L, R]`, mark `lazy[node] += val` and push immediately.","answerFile":"./answers/answer6.c","codeExplanation":"1. `update_range_lazy()` & `push()`: Executes range updates using Lazy Propagation in O(log N) time."},{"projectId":"SEG_007","title":"Range Addition Updates with Lazy Propagation","difficulty":"Beginner","description":"Support both Range Addition updates `arr[L..R] += V` and Range Sum queries `sum(arr[L..R])` in O(log N) time. When pushing lazy additions: `tree[node] += (end - start + 1) * lazy[node]`. In this project, you will build Range Addition Lazy Segment Tree in C.","learningOutcome":"Range Addition Lazy Formulas, Segment Length Multiplications & O(log N) Queries","exampleText":"Update range [1..3] += 10 and query range sum","exampleOutput":"--- Range Addition Updates with Lazy Propagation ---\\nRange sum query after +10 update to [1..3] = 45","logicExplanation":"1. **Additive Lazy Update**: `tree[node] += len * lazy[node]`.\\n2. **Child Propagation**: Add `lazy[node]` to `lazy[left]` and `lazy[right]`.","answerFile":"./answers/answer7.c","codeExplanation":"1. `range_addition_lazy_demo()`: Executes Range Addition updates with Lazy Propagation."},{"projectId":"SEG_008","title":"Range Assignment / Set Updates with Lazy Propagation","difficulty":"Beginner","description":"Support Range Assignment updates `arr[L..R] = V` (overwriting range elements with constant value V). When pushing lazy assignments: `tree[node] = (end - start + 1) * lazy[node]`. Lazy values override previous un-propagated assignments! In this project, you will build Range Assignment Lazy Segment Tree in C.","learningOutcome":"Range Assignment Updates, Overwriting Lazy Tags & Range Value Overrides","exampleText":"Assign range [2..5] = 7 using Lazy Propagation","exampleOutput":"--- Range Assignment / Set Updates with Lazy Propagation ---\\nSet range [2..5] to value 7 in O(log N) time.","logicExplanation":"1. **Assignment Update**: `tree[node] = len * lazy[node]`.\\n2. **Lazy Override**: Overwrite `lazy[left] = lazy[right] = lazy[node]`.","answerFile":"./answers/answer8.c","codeExplanation":"1. `range_assignment_lazy_demo()`: Executes Range Assignment updates with Lazy Propagation."},{"projectId":"SEG_009","title":"Count Even / Odd Numbers in Range Query Segment Tree","difficulty":"Beginner","description":"Answer queries returning the number of even numbers (or odd numbers) in range `[L..R]`. Each tree node stores struct `{ int evens; int odds; }`. Point updates flip or update counts in O(log N) time! In this project, you will build Even/Odd Counter Segment Tree in C.","learningOutcome":"Composite Struct Tree Nodes, Parity Counter Merges & Range Frequency Queries","exampleText":"Count even numbers in range [1..5]","exampleOutput":"--- Count Even / Odd Numbers in Range Query ---\\nEven numbers count in range [1..5] = 3","logicExplanation":"1. **Struct Merge**: `node.evens = left.evens + right.evens`.\\n2. **Parity Query**: Combine even counters across query segment overlap.","answerFile":"./answers/answer9.c","codeExplanation":"1. `even_odd_segment_tree_demo()`: Counts even/odd numbers in range queries."},{"projectId":"SEG_010","title":"Iterative Non-Recursive Segment Tree Implementation","difficulty":"Beginner","description":"Standard recursive Segment Trees use function call stack overhead. An Iterative (Non-Recursive) Segment Tree stores leaves at indices `N .. 2N - 1` and uses bitwise shifts `i >> 1` and bitwise OR `i ^ 1` to execute point updates and range queries in 4x less memory and faster execution time! In this project, you will build Iterative Segment Tree in C.","learningOutcome":"Iterative Segment Trees, Bitwise Pointer Shifts (`p >> 1`, `p ^ 1`) & Non-Recursive Performance","exampleText":"Execute range query [1..3] on iterative Segment Tree","exampleOutput":"--- Iterative Non-Recursive Segment Tree ---\\nRange Sum [1..3] = 9","logicExplanation":"1. **Leaf Indexing**: Array elements placed at `tree[N + i]`.\\n2. **Bitwise Query Loop**: Shift `l += N, r += N + 1` up tree using `l >>= 1, r >>= 1`.","answerFile":"./answers/answer10.c","codeExplanation":"1. `build_iterative()`, `update_iterative()`, `query_iterative()`: Implements iterative non-recursive Segment Tree."},{"projectId":"SEG_011","title":"Segment Tree for Maximum Subarray Sum in Range (Kadane\'s Query Engine)","difficulty":"Intermediate","description":"Answer queries for Maximum Contiguous Subarray Sum (Kadane\'s algorithm) over ANY range `[L..R]` in O(log N) time! Each tree node maintains a struct: `{ total_sum, max_prefix, max_suffix, max_subarray_sum }`. In this project, you will build Maximum Subarray Sum Segment Tree in C.","learningOutcome":"Kadane Range Queries, Node Struct Merges & Prefix/Suffix Subarray Mechanics","exampleText":"Query maximum subarray sum in range [1..4]","exampleOutput":"--- Maximum Subarray Sum in Range (Kadane Segment Tree) ---\\nMaximum Subarray Sum in Query Range [1..4] = 18","logicExplanation":"1. **Node Struct**: Store `sum, pref, suff, max_sub`.\\n2. **Merge Formula**: `node.max_sub = max(left.max_sub, right.max_sub, left.suff + right.pref)`.","answerFile":"./answers/answer11.c","codeExplanation":"1. `max_subarray_sum_segment_tree_demo()`: Solves Range Maximum Subarray Sum via Segment Tree."},{"projectId":"SEG_012","title":"Range Flip Bits Queries (Lazy Propagation Binary Inversion)","difficulty":"Intermediate","description":"Given a binary array of 0s and 1s, support Range Flip updates `arr[L..R] ^= 1` and Range 1-bit Count queries. Pushing lazy flip flag `lazy[node] ^= 1` swaps node\'s 1-bits and 0-bits: `ones = (end - start + 1) - ones` in O(log N) time! In this project, you will build Range Flip Bits Segment Tree in C.","learningOutcome":"Binary Inversion Lazy Propagation, XOR Tag Flipping & Range Bit Flipping","exampleText":"Flip bits in range [2..6] and query 1-bit count","exampleOutput":"--- Range Flip Bits Queries (Lazy Propagation) ---\\nCount of 1-bits in range [2..6] after bit flip update = 3","logicExplanation":"1. **Flip Formula**: `ones = segment_len - ones`.\\n2. **Lazy Inversion**: `lazy[node] ^= 1` toggles flip status.","answerFile":"./answers/answer12.c","codeExplanation":"1. `range_flip_bits_demo()`: Executes Range Bit Flip updates with Lazy Propagation."},{"projectId":"SEG_013","title":"Persistent Segment Tree (Versioned Array State Snapshots)","difficulty":"Intermediate","description":"A Persistent Segment Tree preserves ALL previous versions of an array after point updates. Instead of modifying nodes in-place, copy updated nodes and allocate new tree roots (`root[v]`). Each update allocates only `O(log N)` new nodes while sharing un-modified subtrees! In this project, you will build Persistent Segment Tree in C.","learningOutcome":"Persistent Data Structures, Versioned Tree Roots & Subtree Node Sharing","exampleText":"Query range sum across multiple array versions","exampleOutput":"--- Persistent Segment Tree (Versioned State Snapshots) ---\\nQuery Sum at Version 1 [0..3] = 10\\nQuery Sum at Version 2 [0..3] = 25","logicExplanation":"1. **Node Copy**: Copy updated path nodes; point unchanged child pointers to existing version nodes.\\n2. **Version Roots**: Store root pointer `root[version]` for every update version.","answerFile":"./answers/answer13.c","codeExplanation":"1. `persistent_segment_tree_demo()`: Implements Persistent Segment Tree version snapshots."},{"projectId":"SEG_014","title":"Dynamic Segment Tree with Pointer Allocation","difficulty":"Intermediate","description":"When coordinate ranges are huge (e.g. `0 <= N <= 10^9`), allocating a static array of size `4 * 10^9` is impossible. A Dynamic Segment Tree allocates child nodes dynamically using pointers ONLY when visited, consuming `O(Q log N)` memory! In this project, you will build Dynamic Segment Tree in C.","learningOutcome":"Dynamic Pointer Allocation, Sparse Coordinate Ranges & Sparse Tree Node Creation","exampleText":"Query range [0..10^9] on dynamic sparse Segment Tree","exampleOutput":"--- Dynamic Segment Tree (Pointer Allocation) ---\\nAllocated sparse nodes dynamically for range [0..10^9]. Range Sum = 42","logicExplanation":"1. **On-Demand Allocation**: Create `node->left` or `node->right` dynamically when child visited.\\n2. **Coordinate Compression Avoidance**: Handles huge 10^9 range queries directly.","answerFile":"./answers/answer14.c","codeExplanation":"1. `dynamic_segment_tree_demo()`: Solves sparse large-range queries via Dynamic Segment Tree."},{"projectId":"SEG_015","title":"2D Segment Tree for Matrix Subgrid Range Queries","difficulty":"Intermediate","description":"A 2D Segment Tree is a Segment Tree where each node is ITSELF a Segment Tree! Supports 2D submatrix range queries `[(r1,c1)..(r2,c2)]` and point updates `matrix[r][c] = val` in `O(log R * log C)` time! In this project, you will build 2D Subgrid Segment Tree in C.","learningOutcome":"2D Segment Tree Architecture, Nested Outer/Inner Segment Trees & Submatrix Queries","exampleText":"Query 2D submatrix sum [(1,1)..(3,3)]","exampleOutput":"--- 2D Segment Tree for Matrix Subgrid Queries ---\\nSubmatrix 2D Range Sum [(1,1)..(3,3)] = 120","logicExplanation":"1. **Nested Trees**: Outer tree manages matrix rows; inner trees manage matrix columns.\\n2. **2D Query**: Combine 2D subgrid range queries in `O(log R * log C)` time.","answerFile":"./answers/answer15.c","codeExplanation":"1. `segment_tree_2d_demo()`: Solves 2D matrix range queries using 2D Segment Tree."},{"projectId":"SEG_016","title":"Count Inversions in Array using Segment Tree","difficulty":"Intermediate","description":"An inversion is a pair `(i, j)` where `i < j` and `arr[i] > arr[j]`. Insert elements into a frequency Segment Tree one by one: query range sum `[arr[i]+1 .. MAX_VAL]` to count numbers greater than `arr[i]` seen so far in O(N log N) time! In this project, you will build Segment Tree Inversion Counter in C.","learningOutcome":"Frequency Segment Trees, Range Count Queries & Inversion Pair Counting","exampleText":"Count inversions in array using Segment Tree","exampleOutput":"--- Count Inversions in Array via Segment Tree ---\\nTotal Inversions Count = 5","logicExplanation":"1. **Frequency Tree**: Leaf `v` stores frequency of value `v`.\\n2. **Query & Update**: For each element, query sum `[arr[i]+1 .. MAX]`, then increment `tree[arr[i]]++`.","answerFile":"./answers/answer16.c","codeExplanation":"1. `count_inversions_segment_tree_demo()`: Counts array inversions using Segment Tree."},{"projectId":"SEG_017","title":"K-th Smallest Element in Range Query (Persistent Segment Tree)","difficulty":"Intermediate","description":"Find the K-th smallest element in subarray range `[L .. R]` in O(log N) time! Build a Persistent Segment Tree of element frequency prefixes `root[0..N]`. Binary search on tree version diff `root[R] - root[L-1]` to locate K-th element in O(log N) time! In this project, you will build K-th Smallest Range Finder in C.","learningOutcome":"Persistent Frequency Trees, Range Version Differences & Binary Search on Trees","exampleText":"Find 3rd smallest element in range [1..4]","exampleOutput":"--- K-th Smallest Element in Range Query (Persistent) ---\\n3rd Smallest Element in Range [1..4] = 7","logicExplanation":"1. **Version Diff**: `count = root[R].left_count - root[L-1].left_count`.\\n2. **Tree Walk**: If `K <= count`, recurse left; else `K -= count`, recurse right.","answerFile":"./answers/answer17.c","codeExplanation":"1. `kth_smallest_persistent_demo()`: Finds K-th smallest element in range using Persistent Segment Tree."},{"projectId":"SEG_018","title":"Range Sum Queries with Range Multiply and Range Add Lazy Updates","difficulty":"Intermediate","description":"Support both Range Multiplication `arr[L..R] *= M` AND Range Addition `arr[L..R] += A` using Lazy Propagation. Combine lazy tags: `lazy_add = (lazy_add * M + A) % MOD` and `lazy_mul = (lazy_mul * M) % MOD`. In this project, you will build Multiply & Add Lazy Segment Tree in C.","learningOutcome":"Combined Lazy Tags, Composition of Affine Transformations & Modulo Maintenance","exampleText":"Execute range multiply (*2) and range add (+3) lazy updates","exampleOutput":"--- Range Multiply and Range Add Lazy Updates ---\\nRange Sum after range multiply (*2) and range add (+3) = 98","logicExplanation":"1. **Affine Tag Combination**: New value `x * mul + add`.\\n2. **Composition Rules**: Update `mul` tag and adjust `add` tag proportionally.","answerFile":"./answers/answer18.c","codeExplanation":"1. `multiply_add_lazy_demo()`: Solves range multiply and range add lazy updates."},{"projectId":"SEG_019","title":"Longest Increasing Subsequence (LIS) using Segment Tree","difficulty":"Intermediate","description":"Find Longest Increasing Subsequence (LIS) in O(N log N) time using a Maximum Segment Tree over coordinate-compressed values. For element `X`, query max LIS length in range `[0 .. X-1]`, then update `tree[X] = max_lis + 1`. In this project, you will build LIS Segment Tree Solver in C.","learningOutcome":"DP Acceleration via Segment Trees, Coordinate Compression & Range Max Queries","exampleText":"Compute LIS length via Segment Tree","exampleOutput":"--- Longest Increasing Subsequence (LIS) via Segment Tree ---\\nLongest Increasing Subsequence Length = 4","logicExplanation":"1. **Coordinate Compression**: Map elements to `0..N-1` range.\\n2. **Tree DP Update**: `tree[X] = query_max(0, X - 1) + 1`.","answerFile":"./answers/answer19.c","codeExplanation":"1. `lis_segment_tree_demo()`: Solves LIS in O(N log N) using Segment Tree."},{"projectId":"SEG_020","title":"Segment Tree Walk (Binary Search on Segment Tree in O(log N))","difficulty":"Intermediate","description":"Find the FIRST index in array where prefix sum is `>= target` WITHOUT performing standard binary search `O(log^2 N)`. Walk down the Segment Tree directly: compare target with left child sum `tree[2*node]` to decide left vs right child branch in optimal `O(log N)` time! In this project, you will build Segment Tree Walk Engine in C.","learningOutcome":"Segment Tree Walk, Binary Search Tree Elimination & Logarithmic Target Locating","exampleText":"Find first index with prefix sum >= 15","exampleOutput":"--- Segment Tree Walk (Binary Search on Segment Tree) ---\\nFirst index with prefix sum >= 15 is Index 3 (Found in O(log N) time).","logicExplanation":"1. **Direct Walk**: If `tree[left] >= target`, recurse left; else `target -= tree[left]`, recurse right.\\n2. **O(log N) Time**: Replaces nested O(log^2 N) binary search with single tree descent.","answerFile":"./answers/answer20.c","codeExplanation":"1. `segment_tree_walk_demo()`: Solves binary search on Segment Tree in O(log N) time."},{"projectId":"SEG_021","title":"Segment Tree Beats (Beats Algorithm / Chmin & Chmax Range Operations)","difficulty":"Advanced","description":"The Segment Tree Beats (Ji Ruyi Algorithm) supports non-linear range operations like `arr[i] = min(arr[i], V)` (Range Chmin) and `arr[i] = max(arr[i], V)` (Range Chmax) in O(log N) amortized time by tracking max, 2nd max, and max count in tree nodes! In this project, you will build Segment Tree Beats Engine in C.","learningOutcome":"Segment Tree Beats Algorithm, 2nd Maximum Tracking & Amortized Non-Linear Updates","exampleText":"Execute Range Chmin update `arr[i] = min(arr[i], V)`","exampleOutput":"--- Segment Tree Beats (Chmin & Chmax Range Operations) ---\\nExecuted range chmin update `arr[i] = min(arr[i], V)` in O(log N) amortized time.","logicExplanation":"1. **Track 2nd Max**: Node stores `max1`, `max2`, and `count_max1`.\\n2. **Beats Pruning**: If `V >= max1`, break; if `max2 < V < max1`, apply update to `max1` and tag lazy; else recurse.","answerFile":"./answers/answer21.c","codeExplanation":"1. `segment_tree_beats_demo()`: Solves Segment Tree Beats non-linear range operations."},{"projectId":"SEG_022","title":"Heavy-Light Decomposition (HLD) + Segment Tree for Tree Path Queries","difficulty":"Advanced","description":"Heavy-Light Decomposition (HLD) partitions a general tree of N nodes into `O(log N)` contiguous linear chains mapped into a single Segment Tree. Enables tree path queries `queryPath(u, v)` and path updates in `O(log^2 N)` time! In this project, you will build HLD Segment Tree Engine in C.","learningOutcome":"Heavy-Light Decomposition (HLD), Heavy/Light Edge Partitioning & Tree Path Segment Queries","exampleText":"Execute path query `queryPath(u, v)` on tree","exampleOutput":"--- Heavy-Light Decomposition (HLD) + Segment Tree ---\\nExecuted tree path query `queryPath(u, v)` in O(log^2 N) time via HLD Segment Tree.","logicExplanation":"1. **HLD Partition**: Decompose tree into heavy chains based on child subtree size.\\n2. **Segment Mapping**: Flatten heavy chains into continuous Segment Tree index ranges.","answerFile":"./answers/answer22.c","codeExplanation":"1. `hld_segment_tree_demo()`: Solves tree path queries using HLD + Segment Tree."},{"projectId":"SEG_023","title":"Segment Tree Merging (Tree Dynamic Node Merging)","difficulty":"Advanced","description":"Segment Tree Merging merges two Dynamic Segment Trees of sizes `S1` and `S2` in `O(min(S1, S2))` time. Used in tree algorithms to combine subtree frequency segment trees from children to parent in `O(N log N)` overall time! In this project, you will build Segment Tree Merging Engine in C.","learningOutcome":"Segment Tree Merging, Subtree Frequency Tree Combination & Dynamic Node Merging","exampleText":"Merge child dynamic segment trees into parent node","exampleOutput":"--- Segment Tree Merging (Dynamic Node Merging) ---\\nMerged child subtree dynamic segment trees into parent node in O(N log N) total time.","logicExplanation":"1. **Node Merge**: If node missing in tree 1, return node of tree 2. Combine node values if both present.\\n2. **Recurse Merging**: Recurse down left and right children recursively.","answerFile":"./answers/answer23.c","codeExplanation":"1. `segment_tree_merging_demo()`: Implements Segment Tree Merging algorithm."},{"projectId":"SEG_024","title":"Parallel SIMD-Accelerated Vector Segment Tree Kernel","difficulty":"Advanced","description":"High-speed graphics and financial trading systems accelerate Segment Tree updates using SIMD 256-bit AVX2 vector instructions, updating 8 child tree nodes simultaneously in 1 CPU clock cycle! In this project, you will build SIMD Segment Tree Kernel in C.","learningOutcome":"SIMD AVX2 Vector Tree Processing, Hardware-Parallel Node Updates & High-Frequency Trading","exampleText":"Evaluate 8 child node updates in 256-bit AVX2 vector register","exampleOutput":"--- Parallel SIMD-Accelerated Vector Segment Tree Kernel ---\\nEvaluated 8 segment tree child node updates concurrently in 256-bit AVX2 registers.","logicExplanation":"1. **Vector Register**: Load 8 child node values into 256-bit AVX2 register.\\n2. **Hardware Parallel Sum**: Compute 8 SIMD vector segment tree updates in single clock pass.","answerFile":"./answers/answer24.c","codeExplanation":"1. `simd_segment_tree_demo()`: Simulates SIMD vector accelerated Segment Tree kernel."},{"projectId":"SEG_025","title":"High-Throughput Memory-Mapped Real-Time Stream Segment Tree","difficulty":"Advanced","description":"Process 1,000,000 streaming telemetry range queries per second by embedding Segment Trees directly inside memory-mapped shared memory buffers (`mmap`). In this project, you will build Real-Time Stream Segment Tree Simulator in C.","learningOutcome":"Memory-Mapped Segment Tree Buffers, High-Throughput Stream Range Queries & Telemetry Engine","exampleText":"Process 1M streaming telemetry range queries","exampleOutput":"--- High-Throughput Memory-Mapped Real-Time Stream Segment Tree ---\\nProcessed 1,000,000 streaming telemetry range queries per second.","logicExplanation":"1. **Memory-Mapped Buffer**: Allocate Segment Tree in shared memory buffer.\\n2. **Stream Update**: Update telemetry range values in real-time with zero system-call overhead.","answerFile":"./answers/answer25.c","codeExplanation":"1. `stream_segment_tree_demo()`: Simulates high-throughput real-time stream Segment Tree kernel."}]'),d={projectCategory:j,subject:q,board:F,class:"Computer Science Core / BCA / B.Tech",tools:B,institute:G,projects:V};function W(){const[t,m]=l.useState(null);return l.useEffect(()=>{const i=Object.assign({"./topic6_files/answers/answer1.c":c,"./topic6_files/answers/answer10.c":p,"./topic6_files/answers/answer11.c":_,"./topic6_files/answers/answer12.c":y,"./topic6_files/answers/answer13.c":S,"./topic6_files/answers/answer14.c":f,"./topic6_files/answers/answer15.c":h,"./topic6_files/answers/answer16.c":x,"./topic6_files/answers/answer17.c":v,"./topic6_files/answers/answer18.c":T,"./topic6_files/answers/answer19.c":w,"./topic6_files/answers/answer2.c":b,"./topic6_files/answers/answer20.c":R,"./topic6_files/answers/answer21.c":O,"./topic6_files/answers/answer22.c":N,"./topic6_files/answers/answer23.c":I,"./topic6_files/answers/answer24.c":M,"./topic6_files/answers/answer25.c":E,"./topic6_files/answers/answer3.c":C,"./topic6_files/answers/answer4.c":L,"./topic6_files/answers/answer5.c":A,"./topic6_files/answers/answer6.c":z,"./topic6_files/answers/answer7.c":P,"./topic6_files/answers/answer8.c":D,"./topic6_files/answers/answer9.c":Q}),a={};Object.keys(i).forEach(e=>{const o=e.split("/").pop();a[o]=i[e]});const u=d.projects.map(e=>{const r=(e.answerFile||"").split("/").pop(),s=a[r];return s||console.warn(`⚠ Missing C answer file: ${r}`),{...e,answer:s||`// Source file "${r}" not found in answers folder`}});m({...d,projects:u})},[]),t?n.jsx(g,{data:t}):n.jsx("div",{className:"p-6 text-slate-400 flex items-center justify-center min-h-[300px]",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-5 h-5 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),n.jsx("span",{children:"Loading Segment Trees & Lazy Propagation Projects..."})]})})}export{W as default};
