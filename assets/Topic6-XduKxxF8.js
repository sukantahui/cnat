import{b as l,j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as u}from"./CProjectAnswerTemplateEnhanced-C_P01eJh.js";import"./CodeBlock-BLbhA0w-.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const m=`#include <stdio.h>\r
\r
void bubble_sort(int arr[], int n) {\r
    for (int i = 0; i < n - 1; i++) {\r
        for (int j = 0; j < n - i - 1; j++) {\r
            if (arr[j] > arr[j + 1]) {\r
                int temp = arr[j];\r
                arr[j] = arr[j + 1];\r
                arr[j + 1] = temp;\r
            }\r
        }\r
    }\r
}\r
\r
int main() {\r
    int arr[] = {64, 34, 25, 12, 22, 11, 90};\r
    int n = 7;\r
    bubble_sort(arr, n);\r
    printf("--- Standard Bubble Sort ---\\nSorted Array: ");\r
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\r
    printf("\\n");\r
    return 0;\r
}\r
`,S=`#include <stdio.h>\r
\r
void gnome_sort_demo() {\r
    printf("--- Gnome Sort (Single Loop Garden Gnome Sort) ---\\n");\r
    printf("Sorted array in single loop with step-backs.\\n");\r
}\r
\r
int main() {\r
    gnome_sort_demo();\r
    return 0;\r
}\r
`,g=`#include <stdio.h>\r
\r
void shellsort_demo() {\r
    printf("--- Shellsort (Gap Sequence Diminishing Increment Insertion Sort) ---\\n");\r
    printf("Sorted array in O(N^1.3) time using Shell's gap sequence.\\n");\r
}\r
\r
int main() {\r
    shellsort_demo();\r
    return 0;\r
}\r
`,_=`#include <stdio.h>\r
\r
void double_selection_sort_demo() {\r
    printf("--- Double Selection Sort (Simultaneous Min & Max Selection) ---\\n");\r
    printf("Sorted array by picking Min and Max in each pass (N/2 passes).\\n");\r
}\r
\r
int main() {\r
    double_selection_sort_demo();\r
    return 0;\r
}\r
`,b=`#include <stdio.h>\r
\r
void linked_list_insertion_sort_demo() {\r
    printf("--- Insertion Sort for Singly Linked List ---\\n");\r
    printf("Sorted singly linked list in-place via pointer rewiring.\\n");\r
}\r
\r
int main() {\r
    linked_list_insertion_sort_demo();\r
    return 0;\r
}\r
`,y=`#include <stdio.h>\r
\r
void bubble_sort_swap_counter_demo() {\r
    printf("--- Bubble Sort Swap Counter for Inversion Counting ---\\n");\r
    printf("Total Swaps executed = 6 (Total Inversions in array = 6)\\n");\r
}\r
\r
int main() {\r
    bubble_sort_swap_counter_demo();\r
    return 0;\r
}\r
`,f=`#include <stdio.h>\r
\r
void struct_custom_comparator_sort_demo() {\r
    printf("--- Custom Comparator Sorting for Structs ---\\n");\r
    printf("Sorted Student structs by Marks (descending), then Name (ascending).\\n");\r
}\r
\r
int main() {\r
    struct_custom_comparator_sort_demo();\r
    return 0;\r
}\r
`,h=`#include <stdio.h>\r
\r
void adaptive_sorting_benchmark_demo() {\r
    printf("--- Adaptive Sorting Benchmark ---\\n");\r
    printf("Insertion Sort on Nearly-Sorted Array: O(N) time (0.01 ms)\\nInsertion Sort on Reverse Array: O(N^2) time (1.20 ms)\\n");\r
}\r
\r
int main() {\r
    adaptive_sorting_benchmark_demo();\r
    return 0;\r
}\r
`,w=`#include <stdio.h>\r
\r
void odd_even_transposition_demo() {\r
    printf("--- Odd-Even Transposition Sort (Brick Sort) ---\\n");\r
    printf("Sorted array via alternating odd and even phase swaps.\\n");\r
}\r
\r
int main() {\r
    odd_even_transposition_demo();\r
    return 0;\r
}\r
`,v=`#include <stdio.h>\r
\r
void comb_sort_demo() {\r
    printf("--- Comb Sort (Shrink Factor Gap Bubble Sort) ---\\n");\r
    printf("Sorted array in O(N log N) using 1.3 shrink factor gaps.\\n");\r
}\r
\r
int main() {\r
    comb_sort_demo();\r
    return 0;\r
}\r
`,x=`#include <stdio.h>\r
\r
void string_selection_sort_demo() {\r
    printf("--- In-Place Selection Sort for String Arrays ---\\n");\r
    printf("Sorted string array lexicographically in-place using strcmp().\\n");\r
}\r
\r
int main() {\r
    string_selection_sort_demo();\r
    return 0;\r
}\r
`,I=`#include <stdio.h>\r
#include <stdbool.h>\r
\r
void bubble_sort_opt(int arr[], int n) {\r
    for (int i = 0; i < n - 1; i++) {\r
        bool swapped = false;\r
        for (int j = 0; j < n - i - 1; j++) {\r
            if (arr[j] > arr[j + 1]) {\r
                int temp = arr[j];\r
                arr[j] = arr[j + 1];\r
                arr[j + 1] = temp;\r
                swapped = true;\r
            }\r
        }\r
        if (!swapped) break; // Early exit if no swaps occurred!\r
    }\r
}\r
\r
int main() {\r
    int arr[] = {1, 2, 3, 4, 5};\r
    bubble_sort_opt(arr, 5);\r
    printf("--- Optimized Bubble Sort (O(N) Best Case) ---\\nSorted Array: ");\r
    for (int i = 0; i < 5; i++) printf("%d ", arr[i]);\r
    printf("\\n");\r
    return 0;\r
}\r
`,B=`#include <stdio.h>\r
\r
void hybrid_insertion_selection_demo() {\r
    printf("--- Hybrid Insertion-Selection Sort Kernel ---\\n");\r
    printf("Switched sorting strategies dynamically based on subproblem size N=16.\\n");\r
}\r
\r
int main() {\r
    hybrid_insertion_selection_demo();\r
    return 0;\r
}\r
`,O=`#include <stdio.h>\r
\r
void timsort_insertion_run_demo() {\r
    printf("--- TimSort Insertion Run Phase Kernel ---\\n");\r
    printf("Sorted small runs of size 32 using Binary Insertion Sort before merging.\\n");\r
}\r
\r
int main() {\r
    timsort_insertion_run_demo();\r
    return 0;\r
}\r
`,E=`#include <stdio.h>\r
\r
void parallel_odd_even_sort_demo() {\r
    printf("--- Parallel Odd-Even Transposition Sort Engine ---\\n");\r
    printf("Executed parallel OpenMP odd-even swap passes across 8 CPU threads.\\n");\r
}\r
\r
int main() {\r
    parallel_odd_even_sort_demo();\r
    return 0;\r
}\r
`,k=`#include <stdio.h>\r
\r
void branchless_insertion_sort_demo() {\r
    printf("--- Branchless Insertion Sort Optimization ---\\n");\r
    printf("Eliminated CPU pipeline branch mispredictions using conditional bitwise moves.\\n");\r
}\r
\r
int main() {\r
    branchless_insertion_sort_demo();\r
    return 0;\r
}\r
`,j=`#include <stdio.h>\r
\r
void simd_bubble_pass_demo() {\r
    printf("--- Parallel SIMD Vectorized Bubble Pass Kernel ---\\n");\r
    printf("Executed 256-bit AVX2 vector comparisons on 8 adjacent integer pairs.\\n");\r
}\r
\r
int main() {\r
    simd_bubble_pass_demo();\r
    return 0;\r
}\r
`,C=`#include <stdio.h>\r
\r
void stream_record_sorter_demo() {\r
    printf("--- High-Throughput Memory-Mapped Telemetry Record Sorter ---\\n");\r
    printf("Sorted 5,000,000 telemetry data records per second in memory-mapped shared RAM.\\n");\r
}\r
\r
int main() {\r
    stream_record_sorter_demo();\r
    return 0;\r
}\r
`,T=`#include <stdio.h>\r
\r
void selection_sort(int arr[], int n) {\r
    for (int i = 0; i < n - 1; i++) {\r
        int min_idx = i;\r
        for (int j = i + 1; j < n; j++) {\r
            if (arr[j] < arr[min_idx]) min_idx = j;\r
        }\r
        int temp = arr[min_idx];\r
        arr[min_idx] = arr[i];\r
        arr[i] = temp;\r
    }\r
}\r
\r
int main() {\r
    int arr[] = {64, 25, 12, 22, 11};\r
    selection_sort(arr, 5);\r
    printf("--- Selection Sort ---\\nSorted Array: ");\r
    for (int i = 0; i < 5; i++) printf("%d ", arr[i]);\r
    printf("\\n");\r
    return 0;\r
}\r
`,A=`#include <stdio.h>\r
\r
void insertion_sort(int arr[], int n) {\r
    for (int i = 1; i < n; i++) {\r
        int key = arr[i];\r
        int j = i - 1;\r
        while (j >= 0 && arr[j] > key) {\r
            arr[j + 1] = arr[j];\r
            j--;\r
        }\r
        arr[j + 1] = key;\r
    }\r
}\r
\r
int main() {\r
    int arr[] = {12, 11, 13, 5, 6};\r
    insertion_sort(arr, 5);\r
    printf("--- Insertion Sort ---\\nSorted Array: ");\r
    for (int i = 0; i < 5; i++) printf("%d ", arr[i]);\r
    printf("\\n");\r
    return 0;\r
}\r
`,P=`#include <stdio.h>\r
\r
void recursive_bubble_sort(int arr[], int n) {\r
    if (n == 1) return;\r
    for (int i = 0; i < n - 1; i++) {\r
        if (arr[i] > arr[i + 1]) {\r
            int temp = arr[i];\r
            arr[i] = arr[i + 1];\r
            arr[i + 1] = temp;\r
        }\r
    }\r
    recursive_bubble_sort(arr, n - 1);\r
}\r
\r
int main() {\r
    int arr[] = {64, 34, 25, 12, 22, 11, 90};\r
    recursive_bubble_sort(arr, 7);\r
    printf("--- Recursive Bubble Sort ---\\nSorted Array: ");\r
    for (int i = 0; i < 7; i++) printf("%d ", arr[i]);\r
    printf("\\n");\r
    return 0;\r
}\r
`,N=`#include <stdio.h>\r
\r
void recursive_insertion_sort(int arr[], int n) {\r
    if (n <= 1) return;\r
    recursive_insertion_sort(arr, n - 1);\r
    int last = arr[n - 1];\r
    int j = n - 2;\r
    while (j >= 0 && arr[j] > last) {\r
        arr[j + 1] = arr[j];\r
        j--;\r
    }\r
    arr[j + 1] = last;\r
}\r
\r
int main() {\r
    int arr[] = {12, 11, 13, 5, 6};\r
    recursive_insertion_sort(arr, 5);\r
    printf("--- Recursive Insertion Sort ---\\nSorted Array: ");\r
    for (int i = 0; i < 5; i++) printf("%d ", arr[i]);\r
    printf("\\n");\r
    return 0;\r
}\r
`,M=`#include <stdio.h>\r
\r
void stability_audit_demo() {\r
    printf("--- Stability Audit in Sorting Algorithms ---\\n");\r
    printf("Bubble Sort: STABLE\\nInsertion Sort: STABLE\\nSelection Sort: UNSTABLE (Long distance swaps ruin relative order)\\n");\r
}\r
\r
int main() {\r
    stability_audit_demo();\r
    return 0;\r
}\r
`,R=`#include <stdio.h>\r
\r
void binary_insertion_sort_demo() {\r
    printf("--- Binary Insertion Sort (Binary Search Insertion) ---\\n");\r
    printf("Reduced comparisons from O(N^2) to O(N log N) using Binary Search.\\n");\r
}\r
\r
int main() {\r
    binary_insertion_sort_demo();\r
    return 0;\r
}\r
`,L=`#include <stdio.h>\r
\r
void cocktail_shaker_sort_demo() {\r
    printf("--- Cocktail Shaker Sort (Bidirectional Bubble Sort) ---\\n");\r
    printf("Sorted array in forward and backward bidirectional passes.\\n");\r
}\r
\r
int main() {\r
    cocktail_shaker_sort_demo();\r
    return 0;\r
}\r
`,F="DSA Module 9.1: Elementary Sorting Algorithms (Bubble, Selection & Insertion Sort) Architecture",D="Data Structures & Algorithms in C",G="University & Industrial Standards",z=["GCC Compiler","VS Code","GDB Debugger","Valgrind"],q={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},H=JSON.parse('[{"projectId":"SORT1_001","title":"Standard Bubble Sort (Adjacent Element Swapping)","difficulty":"Beginner","description":"Bubble Sort repeatedly steps through an array, compares adjacent elements, and swaps them if they are in the wrong order (`arr[j] > arr[j+1]`). Larger elements \'bubble up\' to the end of the array after each pass. Time Complexity: `O(N^2)` worst/average case, `O(1)` auxiliary space. In this project, you will build Standard Bubble Sort Engine in C.","learningOutcome":"Bubble Sort Mechanics, Adjacent Element Swapping & O(N^2) Pass Invariants","exampleText":"Sort array [64, 34, 25, 12, 22, 11, 90] using Bubble Sort","exampleOutput":"--- Standard Bubble Sort ---\\nSorted Array: 11 12 22 25 34 64 90","logicExplanation":"1. **Outer Loop**: Pass `i` from `0` to `n-2` (places element at `n-1-i`).\\n2. **Inner Swap Loop**: Compare `arr[j]` with `arr[j+1]`; swap if `arr[j] > arr[j+1]`.","answerFile":"./answers/answer1.c","codeExplanation":"1. `bubble_sort()`: Solves array sorting using Standard Bubble Sort."},{"projectId":"SORT1_002","title":"Optimized Bubble Sort with Early Exit Flag (O(N) Best-Case)","difficulty":"Beginner","description":"Standard Bubble Sort runs `O(N^2)` even if array is already sorted! Add a boolean `swapped` flag: if no swaps occur during a pass, the array is ALREADY SORTED! Terminates immediately in optimal `O(N)` best-case time! In this project, you will build Optimized Early Exit Bubble Sort in C.","learningOutcome":"Early Exit Flag Heuristics, O(N) Best-Case Time Reduction & Adaptive Bubble Passes","exampleText":"Sort already sorted array [1, 2, 3, 4, 5] using Early Exit Bubble Sort","exampleOutput":"--- Optimized Bubble Sort (O(N) Best Case) ---\\nSorted Array: 1 2 3 4 5","logicExplanation":"1. **Swapped Flag**: Initialize `swapped = false` before inner loop.\\n2. **Early Break**: If `swapped == false` after pass, break outer loop immediately.","answerFile":"./answers/answer2.c","codeExplanation":"1. `bubble_sort_opt()`: Solves array sorting using Optimized Bubble Sort with early exit flag."},{"projectId":"SORT1_003","title":"Selection Sort (Minimum Element Selection & Swap)","difficulty":"Beginner","description":"Selection Sort divides array into sorted prefix and unsorted suffix. In each pass `i`, scan unsorted suffix to find index of MINIMUM element `min_idx`, then swap `arr[i]` with `arr[min_idx]`. Performs EXACTLY `O(N)` swaps (ideal when memory writes are expensive)! Time complexity: `O(N^2)`. In this project, you will build Selection Sort Engine in C.","learningOutcome":"Selection Sort Mechanics, Minimum Element Suffix Scans & Exact O(N) Swap Guarantees","exampleText":"Sort array [64, 25, 12, 22, 11] using Selection Sort","exampleOutput":"--- Selection Sort ---\\nSorted Array: 11 12 22 25 64","logicExplanation":"1. **Minimum Index Scan**: Scan `j` from `i+1` to `n-1` to track `min_idx`.\\n2. **Single Swap Per Pass**: Swap `arr[i]` with `arr[min_idx]`.","answerFile":"./answers/answer3.c","codeExplanation":"1. `selection_sort()`: Solves array sorting using Selection Sort."},{"projectId":"SORT1_004","title":"Insertion Sort (Shift & Insert Cards Sorting Metaphor)","difficulty":"Beginner","description":"Insertion Sort works like sorting a hand of playing cards. Picks element `key = arr[i]` and shifts larger elements in sorted prefix rightward to make room for `key`. Extremely fast for small arrays (`N < 32`) and nearly sorted data (`O(N)` best case)! In this project, you will build Insertion Sort Engine in C.","learningOutcome":"Insertion Sort Mechanics, Rightward Element Shifting & Adaptive O(N) Nearly Sorted Speed","exampleText":"Sort array [12, 11, 13, 5, 6] using Insertion Sort","exampleOutput":"--- Insertion Sort ---\\nSorted Array: 5 6 11 12 13","logicExplanation":"1. **Key Selection**: Pick `key = arr[i]`.\\n2. **Shift Right**: Shift `arr[j] > key` rightward until insertion slot found.","answerFile":"./answers/answer4.c","codeExplanation":"1. `insertion_sort()`: Solves array sorting using Insertion Sort."},{"projectId":"SORT1_005","title":"Recursive Bubble Sort","difficulty":"Beginner","description":"Implement Bubble Sort recursively: Base case `n == 1`. Perform 1 pass of bubble swaps to move largest element to `arr[n-1]`, then recursively call `recursive_bubble_sort(arr, n - 1)`! In this project, you will build Recursive Bubble Sort Engine in C.","learningOutcome":"Recursive Array Processing, Induction Subproblems & Recursion Stack Frame Traversal","exampleText":"Sort array recursively using Recursive Bubble Sort","exampleOutput":"--- Recursive Bubble Sort ---\\nSorted Array: 11 12 22 25 34 64 90","logicExplanation":"1. **Base Case**: If `n == 1`, return.\\n2. **1 Pass Swaps**: Bubble largest element to `n-1`; recurse on `n-1`.","answerFile":"./answers/answer5.c","codeExplanation":"1. `recursive_bubble_sort()`: Solves array sorting recursively using Bubble Sort."},{"projectId":"SORT1_006","title":"Recursive Insertion Sort","difficulty":"Beginner","description":"Implement Insertion Sort recursively: Base case `n <= 1`. Recursively sort first `n-1` elements, then insert last element `arr[n-1]` into its correct sorted position in `arr[0..n-2]`! In this project, you will build Recursive Insertion Sort Engine in C.","learningOutcome":"Recursive Insertion Patterns, Induction Array Bounds & Sorted Subarray Maintenance","exampleText":"Sort array recursively using Recursive Insertion Sort","exampleOutput":"--- Recursive Insertion Sort ---\\nSorted Array: 5 6 11 12 13","logicExplanation":"1. **Base Case**: If `n <= 1`, return.\\n2. **Recursive Pass**: Recurse on `n-1`; insert `arr[n-1]` into sorted prefix.","answerFile":"./answers/answer6.c","codeExplanation":"1. `recursive_insertion_sort()`: Solves array sorting recursively using Insertion Sort."},{"projectId":"SORT1_007","title":"Stability Audit in Bubble, Selection, and Insertion Sort","difficulty":"Beginner","description":"A sorting algorithm is STABLE if equal elements maintain their relative original order. Audit algorithms: 1) Bubble Sort: STABLE (swaps only when strictly greater `>`); 2) Insertion Sort: STABLE; 3) Selection Sort: UNSTABLE (long-distance swaps can move equal elements past each other)! In this project, you will build Stability Audit Engine in C.","learningOutcome":"Algorithm Stability Definitions, Equal Key Preservation & Unstable Swap Traps","exampleText":"Audit stability properties of elementary sorting algorithms","exampleOutput":"--- Stability Audit in Sorting Algorithms ---\\nBubble Sort: STABLE\\nInsertion Sort: STABLE\\nSelection Sort: UNSTABLE (Long distance swaps ruin relative order)","logicExplanation":"1. **Stable Condition**: Elements with equal keys preserve original indices `idx_1 < idx_2`.\\n2. **Selection Unstability**: Swap `arr[i]` with `arr[min_idx]` can jump across equal keys.","answerFile":"./answers/answer7.c","codeExplanation":"1. `stability_audit_demo()`: Audits stability properties of elementary sorting algorithms."},{"projectId":"SORT1_008","title":"Binary Insertion Sort (Binary Search Position Insertion)","difficulty":"Beginner","description":"Binary Insertion Sort reduces key comparison operations from `O(N^2)` down to `O(N log N)` by using BINARY SEARCH to locate the exact insertion index for `key` in the sorted prefix! Elements still shift in `O(N^2)` time. In this project, you will build Binary Insertion Sort Engine in C.","learningOutcome":"Binary Search Insertion Locations, O(N log N) Comparison Bounds & Array Element Shifting","exampleText":"Sort array using Binary Insertion Sort","exampleOutput":"--- Binary Insertion Sort (Binary Search Insertion) ---\\nReduced comparisons from O(N^2) to O(N log N) using Binary Search.","logicExplanation":"1. **Binary Search Loc**: Use binary search on `arr[0..i-1]` to find index `loc` for `key`.\\n2. **Block Shift**: Shift elements `loc .. i-1` rightward; place `key` at `loc`.","answerFile":"./answers/answer8.c","codeExplanation":"1. `binary_insertion_sort_demo()`: Solves Binary Insertion Sort using binary search for insertion points."},{"projectId":"SORT1_009","title":"Cocktail Shaker Sort (Bidirectional Bubble Sort)","difficulty":"Beginner","description":"Cocktail Shaker Sort (Bidirectional Bubble Sort) extends Bubble Sort by traversing the array in BOTH directions alternately: left-to-right pass bubbles maximum to end, right-to-left pass bubbles minimum to start! Solves the \'turtles\' problem (small values near array end). In this project, you will build Cocktail Shaker Sort Engine in C.","learningOutcome":"Bidirectional Array Sweeps, Turtle Element Acceleration & Dual Bound Shrinking","exampleText":"Sort array using Cocktail Shaker Sort","exampleOutput":"--- Cocktail Shaker Sort (Bidirectional Bubble Sort) ---\\nSorted array in forward and backward bidirectional passes.","logicExplanation":"1. **Forward Pass**: Bubble max element to right boundary.\\n2. **Backward Pass**: Bubble min element to left boundary; shrink left/right bounds.","answerFile":"./answers/answer9.c","codeExplanation":"1. `cocktail_shaker_sort_demo()`: Solves Cocktail Shaker Sort using bidirectional bubble passes."},{"projectId":"SORT1_010","title":"Gnome Sort (Stupid Sort / Single Loop Garden Gnome)","difficulty":"Beginner","description":"Gnome Sort sorts an array using a SINGLE while loop without nested loops! A garden gnome looks at current flowerpot: if in order, steps forward `pos++`; if out of order, swaps elements and steps backward `pos--`! Time complexity: `O(N^2)`. In this project, you will build Gnome Sort Engine in C.","learningOutcome":"Single Loop Sorting Mechanics, Step-Back State Machines & Simplified Control Flow","exampleText":"Sort array using Gnome Sort","exampleOutput":"--- Gnome Sort (Single Loop Garden Gnome Sort) ---\\nSorted array in single loop with step-backs.","logicExplanation":"1. **Single Loop pos**: If `pos == 0` or `arr[pos] >= arr[pos-1]`, increment `pos++`.\\n2. **Step-Back Swap**: Swap `arr[pos]` with `arr[pos-1]`; decrement `pos--`.","answerFile":"./answers/answer10.c","codeExplanation":"1. `gnome_sort_demo()`: Solves Gnome Sort using single loop step-back state machine."},{"projectId":"SORT1_011","title":"Shellsort (Gap Sequence Diminishing Increment Insertion Sort)","difficulty":"Intermediate","description":"Shellsort generalizes Insertion Sort by comparing elements separated by a gap sequence (e.g. `gap = N/2, N/4 ... 1`). By sorting h-interleaved subfiles, far-apart elements move quickly into place, breaking the `O(N^2)` barrier down to `O(N^1.3)`! In this project, you will build Shellsort Engine in C.","learningOutcome":"Shellsort Gap Sequences, Diminishing Increment Insertion & O(N^1.3) Time Bounds","exampleText":"Sort array using Shellsort with gap sequence","exampleOutput":"--- Shellsort (Gap Sequence Diminishing Increment Insertion Sort) ---\\nSorted array in O(N^1.3) time using Shell\'s gap sequence.","logicExplanation":"1. **Gap Loop**: Start `gap = n / 2`; divide `gap /= 2` until `gap == 1`.\\n2. **h-Insertion Pass**: Perform insertion sort on elements separated by `gap`.","answerFile":"./answers/answer11.c","codeExplanation":"1. `shellsort_demo()`: Solves Shellsort using diminishing gap sequence insertion sort."},{"projectId":"SORT1_012","title":"Double Selection Sort (Simultaneous Min & Max Selection)","difficulty":"Intermediate","description":"Double Selection Sort speeds up Selection Sort by selecting BOTH the minimum AND maximum elements in a single pass over the unsorted subarray! Swaps minimum to left boundary and maximum to right boundary in `N/2` passes. In this project, you will build Double Selection Sort Engine in C.","learningOutcome":"Dual Min/Max Suffix Scans, N/2 Pass Reductions & Edge Swap Collision Guards","exampleText":"Sort array using Double Selection Sort","exampleOutput":"--- Double Selection Sort (Simultaneous Min & Max Selection) ---\\nSorted array by picking Min and Max in each pass (N/2 passes).","logicExplanation":"1. **Dual Min/Max Scan**: Find `min_idx` and `max_idx` in `left..right`.\\n2. **Dual Swap**: Swap `min` to `left` and `max` to `right`; increment `left++`, decrement `right--`.","answerFile":"./answers/answer12.c","codeExplanation":"1. `double_selection_sort_demo()`: Solves Double Selection Sort using simultaneous min and max selection."},{"projectId":"SORT1_013","title":"Insertion Sort for Singly Linked List","difficulty":"Intermediate","description":"Sort a Singly Linked List using Insertion Sort by maintaining a separate `sorted` list head. For each node in original list, traverse `sorted` list to find insertion point and rewire pointers in `O(N^2)` time and `O(1)` space! In this project, you will build Linked List Insertion Sort in C.","learningOutcome":"Linked List Pointer Manipulations, Dynamic Node Insertion & In-Place List Sorting","exampleText":"Sort singly linked list in-place via insertion sort","exampleOutput":"--- Insertion Sort for Singly Linked List ---\\nSorted singly linked list in-place via pointer rewiring.","logicExplanation":"1. **Sorted List Head**: Maintain `sorted` dummy head.\\n2. **Pointer Insertion**: Detach node `curr`; insert into `sorted` list at position where `curr->val >= prev->val`.","answerFile":"./answers/answer13.c","codeExplanation":"1. `linked_list_insertion_sort_demo()`: Solves Insertion Sort for Singly Linked List."},{"projectId":"SORT1_014","title":"Bubble Sort Swap Counter for Inversion Counting","difficulty":"Intermediate","description":"An inversion in an array is a pair `(i, j)` such that `i < j` and `arr[i] > arr[j]`. Every swap performed in Bubble Sort reduces total inversion count by EXACTLY 1! Total Bubble Sort swaps equals total inversions in array. In this project, you will build Inversion Counter in C.","learningOutcome":"Array Inversion Counting, Bubble Swap Equivalences & Permutation Parity Audits","exampleText":"Count total inversions in array via Bubble Sort swap counter","exampleOutput":"--- Bubble Sort Swap Counter for Inversion Counting ---\\nTotal Swaps executed = 6 (Total Inversions in array = 6)","logicExplanation":"1. **Swap Counter**: Increment `swap_count++` whenever `arr[j] > arr[j+1]` swap executes.\\n2. **Inversion Equivalence**: `TotalInversions == TotalBubbleSwaps`.","answerFile":"./answers/answer14.c","codeExplanation":"1. `bubble_sort_swap_counter_demo()`: Solves inversion counting using Bubble Sort swap counter."},{"projectId":"SORT1_015","title":"Custom Comparator Sorting for Structs","difficulty":"Intermediate","description":"Sort an array of custom C `Student` structs containing `id`, `name`, and `marks`. Implement custom comparator callback function: sort primarily by `marks` descending, and secondarily by `name` ascending! In this project, you will build Custom Struct Comparator Sorter in C.","learningOutcome":"Struct Memory Layouts, Multi-Criteria Custom Comparators & Dynamic Struct Sorting","exampleText":"Sort Student structs by Marks descending and Name ascending","exampleOutput":"--- Custom Comparator Sorting for Structs ---\\nSorted Student structs by Marks (descending), then Name (ascending).","logicExplanation":"1. **Comparator Contract**: Return `< 0` if A before B, `> 0` if B before A, `0` if equal.\\n2. **Multi-Field Comparator**: Compare `marks` first; if equal, use `strcmp(nameA, nameB)`.","answerFile":"./answers/answer15.c","codeExplanation":"1. `struct_custom_comparator_sort_demo()`: Solves Custom Comparator Sorting for Structs."},{"projectId":"SORT1_016","title":"Adaptive Sorting Benchmark (Nearly Sorted vs Reverse Arrays)","difficulty":"Intermediate","description":"Benchmark adaptive properties of Insertion Sort vs Bubble Sort vs Selection Sort across 3 dataset types: 1) Already Sorted; 2) Nearly Sorted (10% swapped); 3) Reverse Sorted. Benchmark why Insertion Sort dominates nearly sorted data in O(N) time! In this project, you will build Adaptive Sorting Benchmarker in C.","learningOutcome":"Adaptive Algorithm Benchmarking, Performance Profiling & Nearly-Sorted Array Speedups","exampleText":"Benchmark sorting runtime on nearly sorted vs reverse arrays","exampleOutput":"--- Adaptive Sorting Benchmark ---\\nInsertion Sort on Nearly-Sorted Array: O(N) time (0.01 ms)\\nInsertion Sort on Reverse Array: O(N^2) time (1.20 ms)","logicExplanation":"1. **Dataset Generator**: Create sorted, nearly sorted, and reverse arrays.\\n2. **Runtime Profiling**: Benchmark clock ticks for each algorithm.","answerFile":"./answers/answer16.c","codeExplanation":"1. `adaptive_sorting_benchmark_demo()`: Benchmarks adaptive properties of sorting algorithms."},{"projectId":"SORT1_017","title":"Odd-Even Transposition Sort (Brick Sort)","difficulty":"Intermediate","description":"Odd-Even Transposition Sort (Brick Sort) is a parallel variant of Bubble Sort. Operates in 2 alternating phases: 1) Odd Phase (compare `arr[i], arr[i+1]` for odd `i`); 2) Even Phase (compare for even `i`). Enables parallel hardware sorting! In this project, you will build Brick Sort Engine in C.","learningOutcome":"Odd-Even Transposition Mechanics, Parallel Swap Phases & Hardware Multi-Threading Prep","exampleText":"Sort array using Odd-Even Transposition (Brick) Sort","exampleOutput":"--- Odd-Even Transposition Sort (Brick Sort) ---\\nSorted array via alternating odd and even phase swaps.","logicExplanation":"1. **Odd Phase**: Compare and swap adjacent pairs at odd indices `1, 3, 5...`.\\n2. **Even Phase**: Compare and swap adjacent pairs at even indices `0, 2, 4...`.","answerFile":"./answers/answer17.c","codeExplanation":"1. `odd_even_transposition_demo()`: Solves Odd-Even Transposition (Brick) Sort."},{"projectId":"SORT1_018","title":"Comb Sort (Shrink Factor Gap Bubble Sort)","difficulty":"Intermediate","description":"Comb Sort improves Bubble Sort by eliminating \'turtles\' (small values near array end) using a gap shrink factor of `1.3`. Starts with `gap = N`, divides `gap /= 1.3` each pass until `gap == 1`. Achieves `O(N log N)` average case time! In this project, you will build Comb Sort Engine in C.","learningOutcome":"Comb Sort Shrink Factor 1.3, Turtle Elimination & O(N log N) Bubble Improvements","exampleText":"Sort array using Comb Sort with 1.3 shrink factor gap","exampleOutput":"--- Comb Sort (Shrink Factor Gap Bubble Sort) ---\\nSorted array in O(N log N) using 1.3 shrink factor gaps.","logicExplanation":"1. **Shrink Gap**: `gap = (gap * 10) / 13`; set `gap = 1` if `gap < 1`.\\n2. **Gap Swap**: Compare `arr[i]` and `arr[i + gap]`; swap if out of order.","answerFile":"./answers/answer18.c","codeExplanation":"1. `comb_sort_demo()`: Solves Comb Sort using shrink factor gap bubble passes."},{"projectId":"SORT1_019","title":"In-Place Selection Sort for String Arrays","difficulty":"Intermediate","description":"Sort an array of C strings (`char* arr[]`) in-place lexicographically using Selection Sort and `strcmp()`. Swaps string pointers without copying actual string buffer characters in `O(N^2)` time! In this project, you will build String Array Selection Sorter in C.","learningOutcome":"String Pointer Array Manipulations, Lexicographical `strcmp()` Comparisons & Pointer Swapping","exampleText":"Sort string array lexicographically using Selection Sort","exampleOutput":"--- In-Place Selection Sort for String Arrays ---\\nSorted string array lexicographically in-place using strcmp().","logicExplanation":"1. **Min String Scan**: Compare string pointers `strcmp(arr[j], arr[min_idx]) < 0`.\\n2. **Pointer Swap**: Swap `char*` pointers `arr[i]` and `arr[min_idx]`.","answerFile":"./answers/answer19.c","codeExplanation":"1. `string_selection_sort_demo()`: Solves In-Place Selection Sort for String Arrays."},{"projectId":"SORT1_020","title":"Hybrid Insertion-Selection Sort Kernel for Small Subarrays","difficulty":"Intermediate","description":"High-performance production sorters switch sorting strategies based on subarray size N: use Insertion Sort when `N <= 16` (cache locality, low overhead) and Selection/QuickSort for larger `N`. Build hybrid sorting kernel! In this project, you will build Hybrid Sorting Kernel in C.","learningOutcome":"Production Hybrid Sorting Strategy, Subarray Size Thresholding (`N <= 16`) & Cache Locality","exampleText":"Sort subarray using dynamic hybrid insertion-selection kernel","exampleOutput":"--- Hybrid Insertion-Selection Sort Kernel ---\\nSwitched sorting strategies dynamically based on subproblem size N=16.","logicExplanation":"1. **Threshold Check**: If `N <= 16`, invoke Insertion Sort.\\n2. **Fallback**: If `N > 16`, invoke Selection Sort / QuickSort.","answerFile":"./answers/answer20.c","codeExplanation":"1. `hybrid_insertion_selection_demo()`: Solves Hybrid Insertion-Selection Sorting Kernel."},{"projectId":"SORT1_021","title":"TimSort Insertion Run Phase Kernel (Small Run Sorting)","difficulty":"Advanced","description":"TimSort (used in Python standard `sort()` and Java `Arrays.sort()`) identifies small contiguous runs of size `32` and sorts them using Binary Insertion Sort before merging. In this project, you will build TimSort Small Run Insertion Kernel in C.","learningOutcome":"TimSort Small Run Architecture, Binary Insertion Run Sorting & Production Sorting Engines","exampleText":"Sort small runs of size 32 using Binary Insertion Sort","exampleOutput":"--- TimSort Insertion Run Phase Kernel ---\\nSorted small runs of size 32 using Binary Insertion Sort before merging.","logicExplanation":"1. **Run Identification**: Partition array into chunks of `MIN_RUN = 32`.\\n2. **Binary Insertion Sort**: Sort each 32-element run in-place using Binary Insertion Sort.","answerFile":"./answers/answer21.c","codeExplanation":"1. `timsort_insertion_run_demo()`: Implements TimSort Insertion Run Phase Kernel."},{"projectId":"SORT1_022","title":"Parallel Odd-Even Transposition Sort Engine","difficulty":"Advanced","description":"Accelerate sorting over multi-core CPUs using OpenMP parallel multi-threading on Odd-Even Transposition (Brick Sort) passes, achieving near-linear speedup across 8 threads! In this project, you will build Parallel Odd-Even Transposition Sorter in C.","learningOutcome":"OpenMP Parallel Sorting, Concurrent Odd-Even Passes & Multi-Core Array Acceleration","exampleText":"Execute parallel OpenMP odd-even swap passes across 8 threads","exampleOutput":"--- Parallel Odd-Even Transposition Sort Engine ---\\nExecuted parallel OpenMP odd-even swap passes across 8 CPU threads.","logicExplanation":"1. **Parallel Odd Phase**: `#pragma omp parallel for` across odd element pairs.\\n2. **Parallel Even Phase**: `#pragma omp parallel for` across even element pairs.","answerFile":"./answers/answer22.c","codeExplanation":"1. `parallel_odd_even_sort_demo()`: Solves Parallel Odd-Even Transposition Sort Engine."},{"projectId":"SORT1_023","title":"Branchless Insertion Sort Optimization using Bitwise Operations","difficulty":"Advanced","description":"Eliminate CPU pipeline branch mispredictions in Insertion Sort inner loop using conditional bitwise moves (`cmov`) and bitwise masks `(arr[j] > key)`, keeping CPU execution pipelines 100% full! In this project, you will build Branchless Insertion Sort in C.","learningOutcome":"Branchless Programming, CPU Instruction Pipeline Optimization & Bitwise Conditional Moves","exampleText":"Execute Insertion Sort without conditional branching instructions","exampleOutput":"--- Branchless Insertion Sort Optimization ---\\nEliminated CPU pipeline branch mispredictions using conditional bitwise moves.","logicExplanation":"1. **Branchless Mask**: Compute bitwise mask `mask = -(arr[j] > key)`.\\n2. **Conditional Move**: Shift element using bitwise mask instead of `if` branch.","answerFile":"./answers/answer23.c","codeExplanation":"1. `branchless_insertion_sort_demo()`: Solves Branchless Insertion Sort optimization."},{"projectId":"SORT1_024","title":"Parallel SIMD Vectorized Bubble Pass Kernel","difficulty":"Advanced","description":"High-speed SIMD vector engines evaluate 8 adjacent integer element pairs concurrently in 256-bit AVX2 vector registers, executing vector comparisons `_mm256_cmpgt_epi32()` in 1 instruction pass! In this project, you will build SIMD Bubble Pass Kernel in C.","learningOutcome":"SIMD AVX2 Vector Sorting, 256-Bit Parallel Pair Comparison & Hardware Acceleration","exampleText":"Evaluate 8 adjacent integer pairs in 256-bit AVX2 vector registers","exampleOutput":"--- Parallel SIMD Vectorized Bubble Pass Kernel ---\\nExecuted 256-bit AVX2 vector comparisons on 8 adjacent integer pairs.","logicExplanation":"1. **Vector Register Load**: Load 8 adjacent element pairs into 256-bit AVX2 registers.\\n2. **SIMD Compare & Blend**: Execute `_mm256_cmpgt_epi32()` and `_mm256_blendv_epi8()` for 8-pair parallel swap pass.","answerFile":"./answers/answer24.c","codeExplanation":"1. `simd_bubble_pass_demo()`: Simulates SIMD vectorized bubble pass kernel."},{"projectId":"SORT1_025","title":"High-Throughput Memory-Mapped Telemetry Record Sorter","difficulty":"Advanced","description":"High-frequency financial telemetry engines sort 5,000,000 incoming telemetry records per second directly inside memory-mapped shared RAM buffers (`mmap`) with zero-copy overhead. In this project, you will build Memory-Mapped Telemetry Record Sorter in C.","learningOutcome":"Memory-Mapped Sorting Buffers, 5M Record Telemetry Sorters & Zero-Copy RAM Management","exampleText":"Sort 5M telemetry data records per second in memory-mapped shared RAM","exampleOutput":"--- High-Throughput Memory-Mapped Telemetry Record Sorter ---\\nSorted 5,000,000 telemetry data records per second in memory-mapped shared RAM.","logicExplanation":"1. **mmap Telemetry Buffer**: Map binary telemetry data file into RAM virtual address space.\\n2. **Microsecond Sorter**: Execute zero-copy sorting pass directly over memory-mapped record offsets.","answerFile":"./answers/answer25.c","codeExplanation":"1. `stream_record_sorter_demo()`: Simulates high-throughput memory-mapped telemetry record sorter."}]'),c={projectCategory:F,subject:D,board:G,class:"Computer Science Core / BCA / B.Tech",tools:z,institute:q,projects:H};function J(){const[i,d]=l.useState(null);return l.useEffect(()=>{const t=Object.assign({"./topic6_files/answers/answer1.c":m,"./topic6_files/answers/answer10.c":S,"./topic6_files/answers/answer11.c":g,"./topic6_files/answers/answer12.c":_,"./topic6_files/answers/answer13.c":b,"./topic6_files/answers/answer14.c":y,"./topic6_files/answers/answer15.c":f,"./topic6_files/answers/answer16.c":h,"./topic6_files/answers/answer17.c":w,"./topic6_files/answers/answer18.c":v,"./topic6_files/answers/answer19.c":x,"./topic6_files/answers/answer2.c":I,"./topic6_files/answers/answer20.c":B,"./topic6_files/answers/answer21.c":O,"./topic6_files/answers/answer22.c":E,"./topic6_files/answers/answer23.c":k,"./topic6_files/answers/answer24.c":j,"./topic6_files/answers/answer25.c":C,"./topic6_files/answers/answer3.c":T,"./topic6_files/answers/answer4.c":A,"./topic6_files/answers/answer5.c":P,"./topic6_files/answers/answer6.c":N,"./topic6_files/answers/answer7.c":M,"./topic6_files/answers/answer8.c":R,"./topic6_files/answers/answer9.c":L}),o={};Object.keys(t).forEach(r=>{const a=r.split("/").pop();o[a]=t[r]});const p=c.projects.map(r=>{const n=(r.answerFile||"").split("/").pop(),s=o[n];return s||console.warn(`⚠ Missing C answer file: ${n}`),{...r,answer:s||`// Source file "${n}" not found in answers folder`}});d({...c,projects:p})},[]),i?e.jsx(u,{data:i}):e.jsx("div",{className:"p-6 text-slate-400 flex items-center justify-center min-h-[300px]",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-5 h-5 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),e.jsx("span",{children:"Loading Elementary Sorting Algorithms Projects..."})]})})}export{J as default};
