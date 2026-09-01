import{b as l,j as n}from"./vendor-react-core-Doz9nIC6.js";import{C as u}from"./CProjectAnswerTemplateEnhanced-DRUOSXgE.js";import"./CodeBlock-C22pSTHv.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const p=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct {\r
    int *data;\r
    size_t size;\r
    size_t capacity;\r
} Vector;\r
\r
Vector* create_vector(size_t initial_capacity) {\r
    Vector *vec = (Vector*)malloc(sizeof(Vector));\r
    if (!vec) return NULL;\r
    vec->data = (int*)malloc(initial_capacity * sizeof(int));\r
    if (!vec->data) {\r
        free(vec);\r
        return NULL;\r
    }\r
    vec->size = 0;\r
    vec->capacity = initial_capacity;\r
    return vec;\r
}\r
\r
void push_back(Vector *vec, int value) {\r
    if (vec->size == vec->capacity) {\r
        size_t new_cap = vec->capacity * 2;\r
        int *temp = (int*)realloc(vec->data, new_cap * sizeof(int));\r
        if (!temp) {\r
            printf("Error: Reallocation failed.\\n");\r
            return;\r
        }\r
        vec->data = temp;\r
        vec->capacity = new_cap;\r
    }\r
    vec->data[vec->size++] = value;\r
}\r
\r
void print_vector(const Vector *vec) {\r
    printf("Vector Elements (Size=%zu, Capacity=%zu): [ ", vec->size, vec->capacity);\r
    for (size_t i = 0; i < vec->size; i++) {\r
        printf("%d ", vec->data[i]);\r
    }\r
    printf("]\\n");\r
}\r
\r
void free_vector(Vector *vec) {\r
    if (vec) {\r
        free(vec->data);\r
        free(vec);\r
    }\r
}\r
\r
int main() {\r
    printf("--- Dynamic Array (Vector) Buffer Simulation ---\\n");\r
    Vector *v = create_vector(2);\r
    \r
    push_back(v, 10);\r
    push_back(v, 20);\r
    print_vector(v);\r
\r
    printf("Pushing element 30 (Triggers Capacitous Doubling)...\\n");\r
    push_back(v, 30);\r
    print_vector(v);\r
\r
    push_back(v, 40);\r
    push_back(v, 50);\r
    print_vector(v);\r
\r
    free_vector(v);\r
    return 0;\r
}\r
`,g=`#include <stdio.h>\r
\r
#define R 3\r
#define C 3\r
\r
void find_saddle_point(int matrix[R][C]) {\r
    int found = 0;\r
\r
    for (int i = 0; i < R; i++) {\r
        // Step 1: Find minimum element in row i\r
        int min_row_val = matrix[i][0];\r
        int col_idx = 0;\r
\r
        for (int j = 1; j < C; j++) {\r
            if (matrix[i][j] < min_row_val) {\r
                min_row_val = matrix[i][j];\r
                col_idx = j;\r
            }\r
        }\r
\r
        // Step 2: Check if min_row_val is maximum element in column col_idx\r
        int is_saddle = 1;\r
        for (int k = 0; k < R; k++) {\r
            if (matrix[k][col_idx] > min_row_val) {\r
                is_saddle = 0;\r
                break;\r
            }\r
        }\r
\r
        // Step 3: Report saddle point\r
        if (is_saddle) {\r
            printf("Saddle Point found at Position Matrix[%d][%d] = %d\\n", i, col_idx, min_row_val);\r
            found = 1;\r
        }\r
    }\r
\r
    if (!found) {\r
        printf("No Saddle Point exists in the given matrix.\\n");\r
    }\r
}\r
\r
int main() {\r
    int matrix[R][C] = {\r
        {1, 2, 3},\r
        {4, 5, 6},\r
        {7, 8, 9}\r
    };\r
\r
    printf("--- Matrix Saddle Point Search Engine ---\\n");\r
    find_saddle_point(matrix);\r
\r
    return 0;\r
}\r
`,f=`#include <stdio.h>\r
\r
void reverse_array(int arr[], int n) {\r
    int left = 0, right = n - 1;\r
    while (left < right) {\r
        int temp = arr[left];\r
        arr[left] = arr[right];\r
        arr[right] = temp;\r
        left++;\r
        right--;\r
    }\r
}\r
\r
void print_array(int arr[], int n) {\r
    printf("[ ");\r
    for (int i = 0; i < n; i++) {\r
        printf("%d ", arr[i]);\r
    }\r
    printf("]\\n");\r
}\r
\r
int main() {\r
    int arr[] = {10, 20, 30, 40, 50};\r
    int n = sizeof(arr) / sizeof(arr[0]);\r
\r
    printf("--- In-Place Array Reversal Simulation ---\\n");\r
    printf("Original Array: ");\r
    print_array(arr, n);\r
\r
    reverse_array(arr, n);\r
\r
    printf("Reversed Array: ");\r
    print_array(arr, n);\r
\r
    return 0;\r
}\r
`,h=`#include <stdio.h>\r
#include <limits.h>\r
\r
void find_second_extremes(int arr[], int n) {\r
    if (n < 2) {\r
        printf("Array size must be at least 2.\\n");\r
        return;\r
    }\r
\r
    int smallest = INT_MAX, second_smallest = INT_MAX;\r
    int largest = INT_MIN, second_largest = INT_MIN;\r
\r
    for (int i = 0; i < n; i++) {\r
        // Smallest tracking\r
        if (arr[i] < smallest) {\r
            second_smallest = smallest;\r
            smallest = arr[i];\r
        } else if (arr[i] < second_smallest && arr[i] != smallest) {\r
            second_smallest = arr[i];\r
        }\r
\r
        // Largest tracking\r
        if (arr[i] > largest) {\r
            second_largest = largest;\r
            largest = arr[i];\r
        } else if (arr[i] > second_largest && arr[i] != largest) {\r
            second_largest = arr[i];\r
        }\r
    }\r
\r
    printf("Smallest: %d, Second Smallest: %d\\n", smallest, (second_smallest == INT_MAX) ? -1 : second_smallest);\r
    printf("Largest: %d, Second Largest: %d\\n", largest, (second_largest == INT_MIN) ? -1 : second_largest);\r
}\r
\r
int main() {\r
    int arr[] = {12, 35, 1, 10, 34, 1};\r
    int n = sizeof(arr) / sizeof(arr[0]);\r
\r
    printf("--- Second Extremes Extractor ---\\n");\r
    find_second_extremes(arr, n);\r
\r
    return 0;\r
}\r
`,x=`#include <stdio.h>\r
\r
int remove_duplicates(int arr[], int n) {\r
    if (n == 0) return 0;\r
    \r
    int i = 0; // Slow runner pointer\r
    for (int j = 1; j < n; j++) { // Fast runner pointer\r
        if (arr[j] != arr[i]) {\r
            i++;\r
            arr[i] = arr[j];\r
        }\r
    }\r
    return i + 1; // Length of unique sub-array\r
}\r
\r
int main() {\r
    int arr[] = {1, 1, 2, 2, 2, 3, 4, 4, 5};\r
    int n = sizeof(arr) / sizeof(arr[0]);\r
\r
    printf("--- In-Place Duplicate Removal ---\\n");\r
    int new_len = remove_duplicates(arr, n);\r
\r
    printf("Unique Count: %d\\nElements: [ ", new_len);\r
    for (int k = 0; k < new_len; k++) {\r
        printf("%d ", arr[k]);\r
    }\r
    printf("]\\n");\r
\r
    return 0;\r
}\r
`,y=`#include <stdio.h>\r
\r
int linear_search(int arr[], int n, int target, int *comparisons) {\r
    *comparisons = 0;\r
    for (int i = 0; i < n; i++) {\r
        (*comparisons)++;\r
        if (arr[i] == target) return i;\r
    }\r
    return -1;\r
}\r
\r
int binary_search(int arr[], int n, int target, int *comparisons) {\r
    int low = 0, high = n - 1;\r
    *comparisons = 0;\r
    while (low <= high) {\r
        (*comparisons)++;\r
        int mid = low + (high - low) / 2;\r
        if (arr[mid] == target) return mid;\r
        else if (arr[mid] < target) low = mid + 1;\r
        else high = mid - 1;\r
    }\r
    return -1;\r
}\r
\r
int main() {\r
    int arr[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};\r
    int n = sizeof(arr) / sizeof(arr[0]);\r
    int target = 56;\r
    int comp_lin = 0, comp_bin = 0;\r
\r
    printf("--- Search Performance Benchmark ---\\n");\r
    int idx_lin = linear_search(arr, n, target, &comp_lin);\r
    int idx_bin = binary_search(arr, n, target, &comp_bin);\r
\r
    printf("Target Key: %d\\n", target);\r
    printf("Linear Search: Index %d, Comparisons = %d\\n", idx_lin, comp_lin);\r
    printf("Binary Search: Index %d, Comparisons = %d\\n", idx_bin, comp_bin);\r
\r
    return 0;\r
}\r
`,_=`#include <stdio.h>\r
\r
#define ROWS 3\r
#define COLS 4\r
\r
void calculate_sums(int grid[ROWS][COLS]) {\r
    int grand_total = 0;\r
\r
    printf("--- 2D Grid Row & Column Sum Analysis ---\\n");\r
    for (int i = 0; i < ROWS; i++) {\r
        int row_sum = 0;\r
        printf("Row %d: [ ", i);\r
        for (int j = 0; j < COLS; j++) {\r
            printf("%d ", grid[i][j]);\r
            row_sum += grid[i][j];\r
        }\r
        printf("] -> Sum = %d\\n", row_sum);\r
        grand_total += row_sum;\r
    }\r
\r
    printf("----------------------------------\\nColumn Sums: ");\r
    for (int j = 0; j < COLS; j++) {\r
        int col_sum = 0;\r
        for (int i = 0; i < ROWS; i++) {\r
            col_sum += grid[i][j];\r
        }\r
        printf("Col %d=%d | ", j, col_sum);\r
    }\r
    printf("\\nGrand Matrix Total = %d\\n", grand_total);\r
}\r
\r
int main() {\r
    int grid[ROWS][COLS] = {\r
        {1, 2, 3, 4},\r
        {5, 6, 7, 8},\r
        {9, 10, 11, 12}\r
    };\r
\r
    calculate_sums(grid);\r
    return 0;\r
}\r
`,w=`#include <stdio.h>\r
#include <stdbool.h>\r
\r
#define N 3\r
\r
bool is_symmetric(int matrix[N][N]) {\r
    for (int i = 0; i < N; i++) {\r
        for (int j = i + 1; j < N; j++) {\r
            if (matrix[i][j] != matrix[j][i]) {\r
                return false;\r
            }\r
        }\r
    }\r
    return true;\r
}\r
\r
int main() {\r
    int sym_matrix[N][N] = {\r
        {1, 2, 3},\r
        {2, 4, 5},\r
        {3, 5, 6}\r
    };\r
\r
    printf("--- Matrix Symmetry Validator ---\\n");\r
    if (is_symmetric(sym_matrix)) {\r
        printf("Result: Matrix is Symmetric (A == A^T).\\n");\r
    } else {\r
        printf("Result: Matrix is NOT Symmetric.\\n");\r
    }\r
\r
    return 0;\r
}\r
`,v=`#include <stdio.h>\r
\r
void merge_sorted_arrays(int A[], int n, int B[], int m, int C[]) {\r
    int p1 = 0, p2 = 0, p3 = 0;\r
    while (p1 < n && p2 < m) {\r
        if (A[p1] <= B[p2]) {\r
            C[p3++] = A[p1++];\r
        } else {\r
            C[p3++] = B[p2++];\r
        }\r
    }\r
    while (p1 < n) C[p3++] = A[p1++];\r
    while (p2 < m) C[p3++] = B[p2++];\r
}\r
\r
int main() {\r
    int A[] = {1, 3, 5, 7};\r
    int B[] = {2, 4, 6, 8, 10};\r
    int n = sizeof(A) / sizeof(A[0]);\r
    int m = sizeof(B) / sizeof(B[0]);\r
    int C[n + m];\r
\r
    printf("--- Two-Pointer Sorted Array Merging ---\\n");\r
    merge_sorted_arrays(A, n, B, m, C);\r
\r
    printf("Merged Array: [ ");\r
    for (int i = 0; i < n + m; i++) {\r
        printf("%d ", C[i]);\r
    }\r
    printf("]\\n");\r
\r
    return 0;\r
}\r
`,b=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
void count_frequencies(int arr[], int n) {\r
    if (n == 0) return;\r
    \r
    int max_val = arr[0];\r
    for (int i = 1; i < n; i++) {\r
        if (arr[i] > max_val) max_val = arr[i];\r
    }\r
\r
    int *freq = (int*)calloc(max_val + 1, sizeof(int));\r
    for (int i = 0; i < n; i++) {\r
        freq[arr[i]]++;\r
    }\r
\r
    printf("--- Element Frequency Histogram ---\\n");\r
    for (int i = 0; i <= max_val; i++) {\r
        if (freq[i] > 0) {\r
            printf("Element %2d : %d occurrence(s)\\n", i, freq[i]);\r
        }\r
    }\r
\r
    free(freq);\r
}\r
\r
int main() {\r
    int arr[] = {4, 2, 4, 5, 2, 3, 1, 4, 5, 2};\r
    int n = sizeof(arr) / sizeof(arr[0]);\r
\r
    count_frequencies(arr, n);\r
    return 0;\r
}\r
`,S=`#include <stdio.h>\r
\r
#define N 3\r
\r
void process_diagonals(int matrix[N][N]) {\r
    int main_trace = 0, anti_trace = 0;\r
\r
    printf("--- Matrix Diagonals Extractor ---\\n");\r
    printf("Main Diagonal: [ ");\r
    for (int i = 0; i < N; i++) {\r
        printf("%d ", matrix[i][i]);\r
        main_trace += matrix[i][i];\r
    }\r
    printf("] -> Trace Sum = %d\\n", main_trace);\r
\r
    printf("Anti-Diagonal: [ ");\r
    for (int i = 0; i < N; i++) {\r
        printf("%d ", matrix[i][N - 1 - i]);\r
        anti_trace += matrix[i][N - 1 - i];\r
    }\r
    printf("] -> Anti-Diagonal Sum = %d\\n", anti_trace);\r
}\r
\r
int main() {\r
    int matrix[N][N] = {\r
        {1, 2, 3},\r
        {4, 5, 6},\r
        {7, 8, 9}\r
    };\r
\r
    process_diagonals(matrix);\r
    return 0;\r
}\r
`,R=`#include <stdio.h>\r
\r
int main() {\r
    int arr[5] = {100, 200, 300, 400, 500};\r
    int *base_ptr = arr;\r
\r
    printf("--- Physical Memory Address & Offset Calculator ---\\n");\r
    printf("Base Address (arr[0]): %p\\n", (void*)base_ptr);\r
    printf("Element Size: %zu bytes\\n\\n", sizeof(int));\r
\r
    for (int i = 0; i < 5; i++) {\r
        int *calculated_addr = base_ptr + i;\r
        unsigned long offset = i * sizeof(int);\r
\r
        printf("Index %d:\\n", i);\r
        printf("  Subscript Notation arr[%d]   = %d\\n", i, arr[i]);\r
        printf("  Pointer Offset *(base + %d)  = %d\\n", i, *(base_ptr + i));\r
        printf("  Physical Memory Address    = %p\\n", (void*)calculated_addr);\r
        printf("  Calculated Byte Offset     = Base + %lu bytes\\n\\n", offset);\r
    }\r
\r
    return 0;\r
}\r
`,A=`#include <stdio.h>\r
\r
void shift_zeros_to_end(int arr[], int n) {\r
    int write_idx = 0;\r
    for (int read_idx = 0; read_idx < n; read_idx++) {\r
        if (arr[read_idx] != 0) {\r
            arr[write_idx++] = arr[read_idx];\r
        }\r
    }\r
    while (write_idx < n) {\r
        arr[write_idx++] = 0;\r
    }\r
}\r
\r
int main() {\r
    int arr[] = {0, 1, 0, 3, 12, 0, 5};\r
    int n = sizeof(arr) / sizeof(arr[0]);\r
\r
    printf("--- Zero Partitioning & Compactor ---\\nOriginal Array: [ 0 1 0 3 12 0 5 ]\\n");\r
    shift_zeros_to_end(arr, n);\r
\r
    printf("Shifted Array : [ ");\r
    for (int i = 0; i < n; i++) {\r
        printf("%d ", arr[i]);\r
    }\r
    printf("]\\n");\r
\r
    return 0;\r
}\r
`,j=`#include <stdio.h>\r
\r
#define R1 2\r
#define C1 3\r
#define R2 3\r
#define C2 2\r
\r
void multiply_matrices(int A[R1][C1], int B[R2][C2], int C[R1][C2]) {\r
    if (C1 != R2) {\r
        printf("Error: Incompatible dimensions for matrix multiplication.\\n");\r
        return;\r
    }\r
\r
    for (int i = 0; i < R1; i++) {\r
        for (int j = 0; j < C2; j++) {\r
            C[i][j] = 0;\r
            for (int k = 0; k < C1; k++) {\r
                C[i][j] += A[i][k] * B[k][j];\r
            }\r
        }\r
    }\r
}\r
\r
int main() {\r
    int A[R1][C1] = { {1, 2, 3}, {4, 5, 6} };\r
    int B[R2][C2] = { {7, 8}, {9, 1}, {2, 3} };\r
    int C[R1][C2];\r
\r
    multiply_matrices(A, B, C);\r
\r
    printf("--- Matrix Multiplication Engine ---\\nResult Matrix C (%dx%d):\\n", R1, C2);\r
    for (int i = 0; i < R1; i++) {\r
        for (int j = 0; j < C2; j++) {\r
            printf("%4d ", C[i][j]);\r
        }\r
        printf("\\n");\r
    }\r
\r
    return 0;\r
}\r
`,C=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
void find_missing_and_duplicate(int arr[], int n) {\r
    int duplicate = -1, missing = -1;\r
\r
    // Pass 1: Mark visited indices using sign flipping\r
    for (int i = 0; i < n; i++) {\r
        int val = abs(arr[i]);\r
        if (arr[val - 1] < 0) {\r
            duplicate = val;\r
        } else {\r
            arr[val - 1] = -arr[val - 1];\r
        }\r
    }\r
\r
    // Pass 2: Positive value index is the missing number\r
    for (int i = 0; i < n; i++) {\r
        if (arr[i] > 0) {\r
            missing = i + 1;\r
            break;\r
        }\r
    }\r
\r
    printf("Duplicate Number: %d\\nMissing Number  : %d\\n", duplicate, missing);\r
}\r
\r
int main() {\r
    int arr[] = {3, 1, 2, 5, 3};\r
    int n = sizeof(arr) / sizeof(arr[0]);\r
\r
    printf("--- Index Marking Missing & Duplicate Finder ---\\n");\r
    find_missing_and_duplicate(arr, n);\r
\r
    return 0;\r
}\r
`,M=`#include <stdio.h>\r
#include <stdbool.h>\r
\r
bool two_sum(int arr[], int n, int target, int *out1, int *out2) {\r
    for (int i = 0; i < n; i++) {\r
        for (int j = i + 1; j < n; j++) {\r
            if (arr[i] + arr[j] == target) {\r
                *out1 = arr[i];\r
                *out2 = arr[j];\r
                return true;\r
            }\r
        }\r
    }\r
    return false;\r
}\r
\r
int main() {\r
    int arr[] = {2, 7, 11, 15};\r
    int n = sizeof(arr) / sizeof(arr[0]);\r
    int target = 9;\r
    int val1, val2;\r
\r
    printf("--- Two Sum Pair Locator ---\\nTarget: %d\\n", target);\r
    if (two_sum(arr, n, target, &val1, &val2)) {\r
        printf("Pair Found: %d + %d = %d\\n", val1, val2, target);\r
    } else {\r
        printf("No pair found adding up to %d\\n", target);\r
    }\r
\r
    return 0;\r
}\r
`,N=`#include <stdio.h>\r
\r
int find_majority_element(int arr[], int n) {\r
    int candidate = -1, count = 0;\r
\r
    // Phase 1: Boyer-Moore Voting\r
    for (int i = 0; i < n; i++) {\r
        if (count == 0) {\r
            candidate = arr[i];\r
            count = 1;\r
        } else if (arr[i] == candidate) {\r
            count++;\r
        } else {\r
            count--;\r
        }\r
    }\r
\r
    // Phase 2: Verification\r
    count = 0;\r
    for (int i = 0; i < n; i++) {\r
        if (arr[i] == candidate) count++;\r
    }\r
\r
    if (count > n / 2) return candidate;\r
    return -1;\r
}\r
\r
int main() {\r
    int arr[] = {2, 2, 1, 1, 1, 2, 2};\r
    int n = sizeof(arr) / sizeof(arr[0]);\r
\r
    printf("--- Boyer-Moore Majority Vote ---\\nInput Array: [ 2 2 1 1 1 2 2 ]\\n");\r
    int majority = find_majority_element(arr, n);\r
\r
    if (majority != -1) {\r
        printf("Majority Element (> N/2): %d\\n", majority);\r
    } else {\r
        printf("No Majority Element exists.\\n");\r
    }\r
\r
    return 0;\r
}\r
`,I=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
int compare(const void *a, const void *b) {\r
    return (*(int*)a - *(int*)b);\r
}\r
\r
int longest_consecutive_subsequence(int arr[], int n) {\r
    if (n == 0) return 0;\r
\r
    qsort(arr, n, sizeof(int), compare);\r
\r
    int max_streak = 1;\r
    int current_streak = 1;\r
\r
    for (int i = 1; i < n; i++) {\r
        if (arr[i] != arr[i - 1]) {\r
            if (arr[i] == arr[i - 1] + 1) {\r
                current_streak++;\r
            } else {\r
                if (current_streak > max_streak) max_streak = current_streak;\r
                current_streak = 1;\r
            }\r
        }\r
    }\r
    if (current_streak > max_streak) max_streak = current_streak;\r
\r
    return max_streak;\r
}\r
\r
int main() {\r
    int arr[] = {100, 4, 200, 1, 3, 2};\r
    int n = sizeof(arr) / sizeof(arr[0]);\r
\r
    printf("--- Longest Consecutive Subsequence ---\\nArray: [ 100 4 200 1 3 2 ]\\n");\r
    int len = longest_consecutive_subsequence(arr, n);\r
\r
    printf("Longest Consecutive Length: %d (Sequence [1, 2, 3, 4])\\n", len);\r
    return 0;\r
}\r
`,O=`#include <stdio.h>\r
#include <stdbool.h>\r
\r
#define R 4\r
#define C 4\r
\r
bool staircase_search(int matrix[R][C], int target, int *found_r, int *found_c) {\r
    int row = 0, col = C - 1; // Top-right corner\r
    while (row < R && col >= 0) {\r
        if (matrix[row][col] == target) {\r
            *found_r = row;\r
            *found_c = col;\r
            return true;\r
        } else if (matrix[row][col] > target) {\r
            col--; // Move left\r
        } else {\r
            row++; // Move down\r
        }\r
    }\r
    return false;\r
}\r
\r
int main() {\r
    int matrix[R][C] = {\r
        {10, 20, 30, 40},\r
        {15, 25, 35, 45},\r
        {27, 29, 37, 48},\r
        {32, 33, 39, 50}\r
    };\r
    int target = 29;\r
    int r, c;\r
\r
    printf("--- 2D Staircase Search Engine ---\\nTarget Key: %d\\n", target);\r
    if (staircase_search(matrix, target, &r, &c)) {\r
        printf("Target Found at Cell Matrix[%d][%d]\\n", r, c);\r
    } else {\r
        printf("Target Not Found.\\n");\r
    }\r
\r
    return 0;\r
}\r
`,k=`#include <stdio.h>\r
\r
int max(int a, int b) { return (a > b) ? a : b; }\r
int min(int a, int b) { return (a < b) ? a : b; }\r
\r
int max_product_subarray(int arr[], int n) {\r
    if (n == 0) return 0;\r
\r
    int max_so_far = arr[0];\r
    int curr_max = arr[0];\r
    int curr_min = arr[0];\r
\r
    for (int i = 1; i < n; i++) {\r
        if (arr[i] < 0) {\r
            int temp = curr_max;\r
            curr_max = curr_min;\r
            curr_min = temp;\r
        }\r
\r
        curr_max = max(arr[i], curr_max * arr[i]);\r
        curr_min = min(arr[i], curr_min * arr[i]);\r
\r
        max_so_far = max(max_so_far, curr_max);\r
    }\r
\r
    return max_so_far;\r
}\r
\r
int main() {\r
    int arr[] = {2, 3, -2, 4, -2};\r
    int n = sizeof(arr) / sizeof(arr[0]);\r
\r
    printf("--- Maximum Product Subarray Engine ---\\nInput: [ 2 3 -2 4 -2 ]\\n");\r
    int result = max_product_subarray(arr, n);\r
\r
    printf("Maximum Contiguous Subarray Product = %d\\n", result);\r
    return 0;\r
}\r
`,T=`#include <stdio.h>\r
\r
#define N 3\r
\r
void rotate_180_clockwise(int matrix[N][N]) {\r
    for (int i = 0; i < N / 2; i++) {\r
        for (int j = 0; j < N; j++) {\r
            int temp = matrix[i][j];\r
            matrix[i][j] = matrix[N - 1 - i][N - 1 - j];\r
            matrix[N - 1 - i][N - 1 - j] = temp;\r
        }\r
    }\r
    // Handle middle row if N is odd\r
    if (N % 2 != 0) {\r
        int mid = N / 2;\r
        for (int j = 0; j < N / 2; j++) {\r
            int temp = matrix[mid][j];\r
            matrix[mid][j] = matrix[mid][N - 1 - j];\r
            matrix[mid][N - 1 - j] = temp;\r
        }\r
    }\r
}\r
\r
void print_matrix(int matrix[N][N]) {\r
    for (int i = 0; i < N; i++) {\r
        for (int j = 0; j < N; j++) {\r
            printf("%3d ", matrix[i][j]);\r
        }\r
        printf("\\n");\r
    }\r
}\r
\r
int main() {\r
    int matrix[N][N] = {\r
        {1, 2, 3},\r
        {4, 5, 6},\r
        {7, 8, 9}\r
    };\r
\r
    printf("--- Original Matrix (3x3) ---\\n");\r
    print_matrix(matrix);\r
\r
    rotate_180_clockwise(matrix);\r
\r
    printf("\\n--- Matrix Rotated 180° ---\\n");\r
    print_matrix(matrix);\r
\r
    return 0;\r
}\r
`,P=`#include <stdio.h>\r
\r
void generate_pascal_triangle(int n) {\r
    int arr[n];\r
    for (int i = 0; i < n; i++) arr[i] = 0;\r
    arr[0] = 1;\r
\r
    printf("--- Pascal's Triangle (In-Place 1D Generator) ---\\n");\r
    for (int line = 0; line < n; line++) {\r
        // Print spaces for pyramid alignment\r
        for (int s = 0; s < n - 1 - line; s++) printf("  ");\r
\r
        // Update row right-to-left\r
        for (int j = line; j > 0; j--) {\r
            arr[j] = arr[j] + arr[j - 1];\r
        }\r
\r
        // Print row values\r
        for (int j = 0; j <= line; j++) {\r
            printf("%4d", arr[j]);\r
        }\r
        printf("\\n");\r
    }\r
}\r
\r
int main() {\r
    int rows = 6;\r
    generate_pascal_triangle(rows);\r
    return 0;\r
}\r
`,E=`#include <stdio.h>\r
\r
void reverse(int arr[], int start, int end) {\r
    while (start < end) {\r
        int temp = arr[start];\r
        arr[start] = arr[end];\r
        arr[end] = temp;\r
        start++;\r
        end--;\r
    }\r
}\r
\r
void rotate_right(int arr[], int n, int k) {\r
    k = k % n;\r
    if (k < 0) k += n;\r
    if (k == 0) return;\r
\r
    // Reversal Algorithm for O(1) space cyclic right rotation:\r
    // 1. Reverse entire array\r
    reverse(arr, 0, n - 1);\r
    // 2. Reverse first k elements\r
    reverse(arr, 0, k - 1);\r
    // 3. Reverse remaining n - k elements\r
    reverse(arr, k, n - 1);\r
}\r
\r
void print_array(const int arr[], int n) {\r
    printf("[ ");\r
    for (int i = 0; i < n; i++) {\r
        printf("%d ", arr[i]);\r
    }\r
    printf("]\\n");\r
}\r
\r
int main() {\r
    int arr[] = {1, 2, 3, 4, 5, 6, 7};\r
    int n = sizeof(arr) / sizeof(arr[0]);\r
    int k = 3;\r
\r
    printf("Original Array: ");\r
    print_array(arr, n);\r
\r
    printf("Rotating Right by K = %d positions...\\n", k);\r
    rotate_right(arr, n, k);\r
\r
    printf("Rotated Array:  ");\r
    print_array(arr, n);\r
\r
    return 0;\r
}\r
`,z=`#include <stdio.h>\r
\r
#define R 4\r
#define C 4\r
\r
int P[R + 1][C + 1]; // 1-indexed Prefix Sum Table\r
\r
void precompute_prefix_sum(int grid[R][C]) {\r
    for (int i = 0; i <= R; i++) {\r
        for (int j = 0; j <= C; j++) P[i][j] = 0;\r
    }\r
\r
    for (int i = 1; i <= R; i++) {\r
        for (int j = 1; j <= C; j++) {\r
            P[i][j] = grid[i - 1][j - 1] + P[i - 1][j] + P[i][j - 1] - P[i - 1][j - 1];\r
        }\r
    }\r
}\r
\r
int query_submatrix_sum(int r1, int c1, int r2, int c2) {\r
    // 0-indexed inputs converted to 1-indexed coordinates\r
    r1++; c1++; r2++; c2++;\r
    return P[r2][c2] - P[r1 - 1][c2] - P[r2][c1 - 1] + P[r1 - 1][c1 - 1];\r
}\r
\r
int main() {\r
    int grid[R][C] = {\r
        {1, 2, 3, 4},\r
        {5, 6, 7, 8},\r
        {9, 10, 11, 12},\r
        {13, 14, 15, 16}\r
    };\r
\r
    precompute_prefix_sum(grid);\r
\r
    printf("--- 2D Prefix Sum Submatrix Query Engine ---\\n");\r
    int r1 = 1, c1 = 1, r2 = 2, c2 = 3;\r
    int sum = query_submatrix_sum(r1, c1, r2, c2);\r
\r
    printf("Submatrix Query [(%d,%d) to (%d,%d)] Sum = %d (Instant O(1) Time!)\\n", r1, c1, r2, c2, sum);\r
    return 0;\r
}\r
`,D=`#include <stdio.h>\r
\r
int trap_rainwater(int height[], int n) {\r
    int left = 0, right = n - 1;\r
    int left_max = 0, right_max = 0;\r
    int total_water = 0;\r
\r
    while (left < right) {\r
        if (height[left] <= height[right]) {\r
            if (height[left] >= left_max) {\r
                left_max = height[left];\r
            } else {\r
                total_water += left_max - height[left];\r
            }\r
            left++;\r
        } else {\r
            if (height[right] >= right_max) {\r
                right_max = height[right];\r
            } else {\r
                total_water += right_max - height[right];\r
            }\r
            right--;\r
        }\r
    }\r
    return total_water;\r
}\r
\r
int main() {\r
    int height[] = {0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1};\r
    int n = sizeof(height) / sizeof(height[0]);\r
\r
    printf("--- Trapping Rainwater Elevation Engine ---\\nElevation Map: [ 0 1 0 2 1 0 1 3 2 1 2 1 ]\\n");\r
    int water = trap_rainwater(height, n);\r
\r
    printf("Total Trapped Water Volume = %d units\\n", water);\r
    return 0;\r
}\r
`,B=`#include <stdio.h>\r
#include <limits.h>\r
\r
#define R 4\r
#define C 4\r
\r
int kadane_1d(int arr[], int n, int *start, int *end) {\r
    int max_so_far = INT_MIN, curr_max = 0;\r
    int temp_start = 0;\r
    *start = -1; *end = -1;\r
\r
    for (int i = 0; i < n; i++) {\r
        curr_max += arr[i];\r
        if (curr_max > max_so_far) {\r
            max_so_far = curr_max;\r
            *start = temp_start;\r
            *end = i;\r
        }\r
        if (curr_max < 0) {\r
            curr_max = 0;\r
            temp_start = i + 1;\r
        }\r
    }\r
    return max_so_far;\r
}\r
\r
void max_submatrix_sum_2d(int matrix[R][C]) {\r
    int max_sum = INT_MIN;\r
    int final_top = 0, final_bottom = 0, final_left = 0, final_right = 0;\r
\r
    for (int r1 = 0; r1 < R; r1++) {\r
        int temp[C];\r
        for (int c = 0; c < C; c++) temp[c] = 0;\r
\r
        for (int r2 = r1; r2 < R; r2++) {\r
            for (int c = 0; c < C; c++) temp[c] += matrix[r2][c];\r
\r
            int start_col, end_col;\r
            int sum = kadane_1d(temp, C, &start_col, &end_col);\r
\r
            if (sum > max_sum) {\r
                max_sum = sum;\r
                final_top = r1;\r
                final_bottom = r2;\r
                final_left = start_col;\r
                final_right = end_col;\r
            }\r
        }\r
    }\r
\r
    printf("--- 2D Kadane's Maximum Submatrix Sum ---\\n");\r
    printf("Maximum Submatrix Sum = %d\\n", max_sum);\r
    printf("Top-Left: (%d, %d), Bottom-Right: (%d, %d)\\n", final_top, final_left, final_bottom, final_right);\r
}\r
\r
int main() {\r
    int matrix[R][C] = {\r
        { 1,  2, -1, -4},\r
        {-8, -3,  4,  2},\r
        { 3,  8, 10,  1},\r
        {-4, -1,  1,  7}\r
    };\r
\r
    max_submatrix_sum_2d(matrix);\r
    return 0;\r
}\r
`,q=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
#define R 4\r
#define C 4\r
\r
typedef struct {\r
    int *values;\r
    int *col_index;\r
    int *row_ptr;\r
    int nnz;\r
} CSRMatrix;\r
\r
CSRMatrix* create_csr(int dense[R][C]) {\r
    int nnz = 0;\r
    for (int i = 0; i < R; i++) {\r
        for (int j = 0; j < C; j++) {\r
            if (dense[i][j] != 0) nnz++;\r
        }\r
    }\r
\r
    CSRMatrix *csr = (CSRMatrix*)malloc(sizeof(CSRMatrix));\r
    csr->values = (int*)malloc(nnz * sizeof(int));\r
    csr->col_index = (int*)malloc(nnz * sizeof(int));\r
    csr->row_ptr = (int*)malloc((R + 1) * sizeof(int));\r
    csr->nnz = nnz;\r
\r
    int idx = 0;\r
    csr->row_ptr[0] = 0;\r
\r
    for (int i = 0; i < R; i++) {\r
        for (int j = 0; j < C; j++) {\r
            if (dense[i][j] != 0) {\r
                csr->values[idx] = dense[i][j];\r
                csr->col_index[idx] = j;\r
                idx++;\r
            }\r
        }\r
        csr->row_ptr[i + 1] = idx;\r
    }\r
    return csr;\r
}\r
\r
void spmv(CSRMatrix *csr, int x[], int y[]) {\r
    for (int i = 0; i < R; i++) {\r
        y[i] = 0;\r
        for (int k = csr->row_ptr[i]; k < csr->row_ptr[i + 1]; k++) {\r
            y[i] += csr->values[k] * x[csr->col_index[k]];\r
        }\r
    }\r
}\r
\r
int main() {\r
    int dense[R][C] = {\r
        {10, 0, 0, 0},\r
        {0, 20, 0, 0},\r
        {0, 0, 30, 40},\r
        {0, 0, 0, 50}\r
    };\r
    int x[C] = {1, 2, 3, 4};\r
    int y[R];\r
\r
    CSRMatrix *csr = create_csr(dense);\r
\r
    printf("--- Compressed Sparse Row (CSR) Engine ---\\nNon-Zero Elements (NNZ): %d\\n", csr->nnz);\r
    spmv(csr, x, y);\r
\r
    printf("Sparse Matrix-Vector Multiplication Y = A * X:\\nResult Vector Y: [ ");\r
    for (int i = 0; i < R; i++) {\r
        printf("%d ", y[i]);\r
    }\r
    printf("]\\n");\r
\r
    free(csr->values);\r
    free(csr->col_index);\r
    free(csr->row_ptr);\r
    free(csr);\r
\r
    return 0;\r
}\r
`,F=`#include <stdio.h>\r
\r
#define N 4\r
\r
void rotate_outer_ring(int matrix[N][N], int k) {\r
    // Top-left to bottom-right layer 0 ring elements length = 4 * (N - 1)\r
    int ring_len = 4 * (N - 1);\r
    int ring[ring_len];\r
    int idx = 0;\r
\r
    int top = 0, bottom = N - 1, left = 0, right = N - 1;\r
\r
    // Unpack Ring 0\r
    for (int j = left; j <= right; j++) ring[idx++] = matrix[top][j];\r
    for (int i = top + 1; i <= bottom; i++) ring[idx++] = matrix[i][right];\r
    for (int j = right - 1; j >= left; j--) ring[idx++] = matrix[bottom][j];\r
    for (int i = bottom - 1; i > top; i--) ring[idx++] = matrix[i][left];\r
\r
    // Cyclic shift by k positions\r
    int rotated[ring_len];\r
    for (int i = 0; i < ring_len; i++) {\r
        rotated[(i + k) % ring_len] = ring[i];\r
    }\r
\r
    // Repack Ring 0\r
    idx = 0;\r
    for (int j = left; j <= right; j++) matrix[top][j] = rotated[idx++];\r
    for (int i = top + 1; i <= bottom; i++) matrix[i][right] = rotated[idx++];\r
    for (int j = right - 1; j >= left; j--) matrix[bottom][j] = rotated[idx++];\r
    for (int i = bottom - 1; i > top; i--) matrix[i][left] = rotated[idx++];\r
}\r
\r
void print_matrix(int matrix[N][N]) {\r
    for (int i = 0; i < N; i++) {\r
        for (int j = 0; j < N; j++) {\r
            printf("%3d ", matrix[i][j]);\r
        }\r
        printf("\\n");\r
    }\r
}\r
\r
int main() {\r
    int matrix[N][N] = {\r
        { 1,  2,  3,  4},\r
        { 5,  6,  7,  8},\r
        { 9, 10, 11, 12},\r
        {13, 14, 15, 16}\r
    };\r
\r
    printf("--- Original Matrix ---\\n");\r
    print_matrix(matrix);\r
\r
    rotate_outer_ring(matrix, 2);\r
\r
    printf("\\n--- Outer Ring Rotated Clockwise by K=2 ---\\n");\r
    print_matrix(matrix);\r
\r
    return 0;\r
}\r
`,L=`#include <stdio.h>\r
#include <limits.h>\r
\r
int max(int a, int b) { return (a > b) ? a : b; }\r
int min(int a, int b) { return (a < b) ? a : b; }\r
\r
double find_median_sorted_arrays(int A[], int m, int B[], int n) {\r
    if (m > n) return find_median_sorted_arrays(B, n, A, m); // Ensure A is smaller array\r
\r
    int low = 0, high = m;\r
    while (low <= high) {\r
        int i = (low + high) / 2;\r
        int j = (m + n + 1) / 2 - i;\r
\r
        int maxLeftA  = (i == 0) ? INT_MIN : A[i - 1];\r
        int minRightA = (i == m) ? INT_MAX : A[i];\r
\r
        int maxLeftB  = (j == 0) ? INT_MIN : B[j - 1];\r
        int minRightB = (j == n) ? INT_MAX : B[j];\r
\r
        if (maxLeftA <= minRightB && maxLeftB <= minRightA) {\r
            if ((m + n) % 2 == 0) {\r
                return (max(maxLeftA, maxLeftB) + min(minRightA, minRightB)) / 2.0;\r
            } else {\r
                return max(maxLeftA, maxLeftB);\r
            }\r
        } else if (maxLeftA > minRightB) {\r
            high = i - 1;\r
        } else {\r
            low = i + 1;\r
        }\r
    }\r
    return 0.0;\r
}\r
\r
int main() {\r
    int A[] = {1, 3, 8, 9, 15};\r
    int B[] = {7, 11, 18, 19, 21, 25};\r
    int m = sizeof(A) / sizeof(A[0]);\r
    int n = sizeof(B) / sizeof(B[0]);\r
\r
    printf("--- Optimal Binary Search Median Finder ---\\nArray A (m=%d): [ 1 3 8 9 15 ]\\nArray B (n=%d): [ 7 11 18 19 21 25 ]\\n", m, n);\r
    double median = find_median_sorted_arrays(A, m, B, n);\r
\r
    printf("Median of Combined Sorted Arrays = %.2f (O(log(min(M,N))) Time Complexity)\\n", median);\r
    return 0;\r
}\r
`,Y=`#include <stdio.h>\r
\r
typedef struct {\r
    int row;\r
    int col;\r
    int value;\r
} Element;\r
\r
void compress_sparse_matrix(int rows, int cols, int matrix[rows][cols], Element sparse[], int *count) {\r
    int k = 0;\r
    for (int i = 0; i < rows; i++) {\r
        for (int j = 0; j < cols; j++) {\r
            if (matrix[i][j] != 0) {\r
                sparse[k].row = i;\r
                sparse[k].col = j;\r
                sparse[k].value = matrix[i][j];\r
                k++;\r
            }\r
        }\r
    }\r
    *count = k;\r
}\r
\r
int main() {\r
    int matrix[4][5] = {\r
        {0, 0, 3, 0, 4},\r
        {0, 0, 0, 5, 0},\r
        {0, 2, 0, 0, 0},\r
        {0, 0, 0, 0, 7}\r
    };\r
\r
    Element sparse[20];\r
    int non_zero_count = 0;\r
\r
    compress_sparse_matrix(4, 5, matrix, sparse, &non_zero_count);\r
\r
    printf("--- Sparse Matrix Compression (Coordinate List format) ---\\n");\r
    printf("Original Matrix Dimensions: 4 Rows x 5 Cols (Total Elements = 20)\\n");\r
    printf("Non-Zero Count: %d\\n\\n", non_zero_count);\r
\r
    printf("Index | Row | Col | Value\\n");\r
    printf("-------------------------\\n");\r
    for (int i = 0; i < non_zero_count; i++) {\r
        printf("  %d   |  %d  |  %d  |   %d\\n", i, sparse[i].row, sparse[i].col, sparse[i].value);\r
    }\r
\r
    double memory_saved = (1.0 - ((double)(non_zero_count * 3 * sizeof(int)) / (20 * sizeof(int)))) * 100.0;\r
    printf("\\nMemory Footprint Reduction: %.2f%%\\n", memory_saved);\r
\r
    return 0;\r
}\r
`,V=`#include <stdio.h>\r
\r
#define N 4\r
\r
void transpose_square_matrix(int matrix[N][N]) {\r
    for (int i = 0; i < N; i++) {\r
        for (int j = i + 1; j < N; j++) {\r
            int temp = matrix[i][j];\r
            matrix[i][j] = matrix[j][i];\r
            matrix[j][i] = temp;\r
        }\r
    }\r
}\r
\r
void print_matrix(int matrix[N][N]) {\r
    for (int i = 0; i < N; i++) {\r
        for (int j = 0; j < N; j++) {\r
            printf("%3d ", matrix[i][j]);\r
        }\r
        printf("\\n");\r
    }\r
}\r
\r
int main() {\r
    int matrix[N][N] = {\r
        { 1,  2,  3,  4},\r
        { 5,  6,  7,  8},\r
        { 9, 10, 11, 12},\r
        {13, 14, 15, 16}\r
    };\r
\r
    printf("--- Original Matrix (4x4) ---\\n");\r
    print_matrix(matrix);\r
\r
    transpose_square_matrix(matrix);\r
\r
    printf("\\n--- Transposed Matrix (In-Place Transposition) ---\\n");\r
    print_matrix(matrix);\r
\r
    return 0;\r
}\r
`,K=`#include <stdio.h>\r
\r
void max_subarray_sum(const int arr[], int n) {\r
    int max_so_far = arr[0];\r
    int curr_max = arr[0];\r
    int start = 0, end = 0, temp_start = 0;\r
\r
    for (int i = 1; i < n; i++) {\r
        if (arr[i] > curr_max + arr[i]) {\r
            curr_max = arr[i];\r
            temp_start = i;\r
        } else {\r
            curr_max += arr[i];\r
        }\r
\r
        if (curr_max > max_so_far) {\r
            max_so_far = curr_max;\r
            start = temp_start;\r
            end = i;\r
        }\r
    }\r
\r
    printf("--- Kadane's Algorithm Max Subarray Sum ---\\n");\r
    printf("Maximum Contiguous Sum = %d\\n", max_so_far);\r
    printf("Subarray Window: Index [%d .. %d]\\n", start, end);\r
    printf("Subarray Elements: [ ");\r
    for (int i = start; i <= end; i++) {\r
        printf("%d ", arr[i]);\r
    }\r
    printf("]\\n");\r
}\r
\r
int main() {\r
    int arr[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4};\r
    int n = sizeof(arr) / sizeof(arr[0]);\r
\r
    max_subarray_sum(arr, n);\r
\r
    return 0;\r
}\r
`,W=`#include <stdio.h>\r
\r
#define R 4\r
#define C 4\r
\r
void print_spiral_matrix(int matrix[R][C]) {\r
    int top = 0, bottom = R - 1;\r
    int left = 0, right = C - 1;\r
\r
    printf("--- Spiral Order Traversal Output ---\\n[ ");\r
\r
    while (top <= bottom && left <= right) {\r
        // 1. Traverse Right along top boundary\r
        for (int i = left; i <= right; i++) {\r
            printf("%d ", matrix[top][i]);\r
        }\r
        top++;\r
\r
        // 2. Traverse Down along right boundary\r
        for (int i = top; i <= bottom; i++) {\r
            printf("%d ", matrix[i][right]);\r
        }\r
        right--;\r
\r
        // 3. Traverse Left along bottom boundary\r
        if (top <= bottom) {\r
            for (int i = right; i >= left; i--) {\r
                printf("%d ", matrix[bottom][i]);\r
            }\r
            bottom--;\r
        }\r
\r
        // 4. Traverse Up along left boundary\r
        if (left <= right) {\r
            for (int i = bottom; i >= top; i--) {\r
                printf("%d ", matrix[i][left]);\r
            }\r
            left++;\r
        }\r
    }\r
    printf("]\\n");\r
}\r
\r
int main() {\r
    int matrix[R][C] = {\r
        { 1,  2,  3,  4},\r
        { 5,  6,  7,  8},\r
        { 9, 10, 11, 12},\r
        {13, 14, 15, 16}\r
    };\r
\r
    print_spiral_matrix(matrix);\r
\r
    return 0;\r
}\r
`,G=`#include <stdio.h>\r
\r
#define N 3\r
\r
void rotate_matrix_90_clockwise(int matrix[N][N]) {\r
    // Step 1: Transpose matrix in-place\r
    for (int i = 0; i < N; i++) {\r
        for (int j = i + 1; j < N; j++) {\r
            int temp = matrix[i][j];\r
            matrix[i][j] = matrix[j][i];\r
            matrix[j][i] = temp;\r
        }\r
    }\r
\r
    // Step 2: Reverse each row\r
    for (int i = 0; i < N; i++) {\r
        int left = 0, right = N - 1;\r
        while (left < right) {\r
            int temp = matrix[i][left];\r
            matrix[i][left] = matrix[i][right];\r
            matrix[i][right] = temp;\r
            left++;\r
            right--;\r
        }\r
    }\r
}\r
\r
void print_matrix(int matrix[N][N]) {\r
    for (int i = 0; i < N; i++) {\r
        for (int j = 0; j < N; j++) {\r
            printf("%3d ", matrix[i][j]);\r
        }\r
        printf("\\n");\r
    }\r
}\r
\r
int main() {\r
    int matrix[N][N] = {\r
        {1, 2, 3},\r
        {4, 5, 6},\r
        {7, 8, 9}\r
    };\r
\r
    printf("--- Original Matrix (3x3) ---\\n");\r
    print_matrix(matrix);\r
\r
    rotate_matrix_90_clockwise(matrix);\r
\r
    printf("\\n--- Rotated Matrix 90° Clockwise ---\\n");\r
    print_matrix(matrix);\r
\r
    return 0;\r
}\r
`,U=`#include <stdio.h>\r
\r
void sort_012(int arr[], int n) {\r
    int low = 0;\r
    int mid = 0;\r
    int high = n - 1;\r
\r
    while (mid <= high) {\r
        if (arr[mid] == 0) {\r
            int temp = arr[low];\r
            arr[low] = arr[mid];\r
            arr[mid] = temp;\r
            low++;\r
            mid++;\r
        } else if (arr[mid] == 1) {\r
            mid++;\r
        } else {\r
            // arr[mid] == 2\r
            int temp = arr[mid];\r
            arr[mid] = arr[high];\r
            arr[high] = temp;\r
            high--;\r
        }\r
    }\r
}\r
\r
void print_array(const int arr[], int n) {\r
    printf("[ ");\r
    for (int i = 0; i < n; i++) {\r
        printf("%d ", arr[i]);\r
    }\r
    printf("]\\n");\r
}\r
\r
int main() {\r
    int arr[] = {2, 0, 2, 1, 1, 0, 1, 2, 0, 0};\r
    int n = sizeof(arr) / sizeof(arr[0]);\r
\r
    printf("Original Unsorted Array: ");\r
    print_array(arr, n);\r
\r
    printf("Executing Dutch National Flag 3-Way Partitioning (Single Pass)...\\n");\r
    sort_012(arr, n);\r
\r
    printf("Sorted Array (0s, 1s, 2s): ");\r
    print_array(arr, n);\r
\r
    return 0;\r
}\r
`,H="DSA Module 1.1: Array Data Structures & Matrix Algorithms",Z="Data Structures & Algorithms in C",Q="University & Industrial Standards",X=["GCC Compiler","VS Code","GDB Debugger","Valgrind"],J={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},$=JSON.parse('[{"projectId":"ARRAY_001","title":"Dynamic Resizable Array (Vector) Buffer Allocation with Safe Growth Mechanics","difficulty":"Beginner","description":"In standard C programming, regular arrays have a fixed size determined at compile time or stack allocation time. If you declare int arr[100], you are stuck with 100 elements: if your user enters 101 elements, your program crashes with a stack or buffer overflow, and if they enter 5 elements, you waste memory! To solve this, real-world software like C++ std::vector or Java ArrayList uses a Dynamic Resizable Array. In this project, you will build a dynamic array buffer in C using dynamic memory management (malloc, realloc, free). The vector starts with a small initial capacity (e.g., 2 elements). As you push new numbers into the vector, it tracks its current size (number of stored items) and capacity (total allocated slots). When size reaches capacity, the buffer is full! Instead of expanding by just +1 slot (which would cause expensive repeated memory copying), the vector uses the Geometric Doubling Strategy (capacity * 2). This guarantees an efficient amortized time complexity of O(1) per push operation. You will also implement safe reallocation handling by saving realloc() output into a temporary pointer temp before updating the primary buffer pointer (preventing memory leaks if allocation fails) and write a cleanup function to properly free all heap memory.","learningOutcome":"Dynamic Memory Allocation (malloc, realloc, free) & Amortized O(1) Growth Strategy","exampleText":"Initial Capacity = 2\\nPush 10, Push 20 (Buffer Full: Size 2/Capacity 2)\\nPush 30 → Reallocation triggered! New Capacity = 4","exampleOutput":"--- Dynamic Array (Vector) Buffer Simulation ---\\nVector Elements (Size=2, Capacity=2): [ 10 20 ]\\nPushing element 30 (Triggers Capacitous Doubling)...\\nVector Elements (Size=3, Capacity=4): [ 10 20 30 ]\\nVector Elements (Size=5, Capacity=8): [ 10 20 30 40 50 ]","logicExplanation":"1. **Struct Encapsulation**: Encapsulate `int *data`, `size_t size`, and `size_t capacity` inside a typedef `Vector` struct.\\n2. **Geometric Doubling**: When `size == capacity`, double capacity (`capacity * 2`) to achieve amortized O(1) push_back complexity.\\n3. **Safe Reallocation**: Assign `realloc` result to a temporary pointer `int *temp` to prevent memory leak in case allocation fails.\\n4. **Memory Deallocation**: Free `vec->data` before freeing `vec` pointer to avoid heap memory leaks.","answerFile":"./answers/answer1.c","codeExplanation":"1. `create_vector`: Allocates vector structure and initial integer heap buffer.\\n2. `push_back`: Checks capacity, reallocates with doubling if needed, appends element, and increments size.\\n3. `free_vector`: Safely releases internal data buffer and vector memory."},{"projectId":"ARRAY_002","title":"Physical Byte Address Translation & Pointer Offset Calculator","difficulty":"Beginner","description":"Computer memory (RAM) is organized as a giant contiguous sequence of byte addresses. When you declare a 1D array in C, the operating system allocates a single, uninterrupted contiguous block of physical RAM cells to hold all elements side-by-side. In this project, you will write a program that uncovers the hidden mathematical address translation performed by the compiler behind the scenes. Using the base memory address of the first element (arr[0]), you will calculate the physical RAM byte address of any index i using the hardware address formula: Address(arr[i]) = Base Address + (i * sizeof(DataType)). For example, in an integer array where each int takes 4 bytes, index 0 resides at Base + 0 bytes, index 1 at Base + 4 bytes, index 2 at Base + 8 bytes, and so on. Furthermore, you will prove pointer-subscript equivalence in C: showing that the array bracket notation arr[i] is merely syntactic sugar for dereferencing a memory offset *(base + i). Your application will print both notations alongside their hexadecimal RAM addresses (%p), proving that both formulas point to the exact same physical byte memory location.","learningOutcome":"Contiguous Memory Layout, Base Address Pointer Arithmetic & Memory Alignment","exampleText":"Base Address: 0x7fff5fbff7c0\\nElement Type: int (4 bytes)","exampleOutput":"--- Physical Memory Address & Offset Calculator ---\\nBase Address (arr[0]): 0x7fff5fbff7c0\\nElement Size: 4 bytes\\n\\nIndex 0:\\n  Subscript Notation arr[0]   = 100\\n  Pointer Offset *(base + 0)  = 100\\n  Physical Memory Address    = 0x7fff5fbff7c0\\n  Calculated Byte Offset     = Base + 0 bytes\\n\\nIndex 1:\\n  Subscript Notation arr[1]   = 200\\n  Pointer Offset *(base + 1)  = 200\\n  Physical Memory Address    = 0x7fff5fbff7c4\\n  Calculated Byte Offset     = Base + 4 bytes","logicExplanation":"1. **Contiguous Address Space**: Arrays allocate adjacent memory addresses sequentially in physical RAM.\\n2. **Pointer Arithmetic**: Adding integer `i` to pointer `base` increments memory address by `i * sizeof(DataType)` bytes.\\n3. **Equivalence Invariant**: `arr[i]` is strictly syntactically equivalent to `*(arr + i)` and `i[arr]` in C.","answerFile":"./answers/answer2.c","codeExplanation":"1. `base_ptr`: Stores starting memory address of 1D array.\\n2. `base_ptr + i`: Computes physical byte offset automatically based on data type size.\\n3. `arr[i]` vs `*(base_ptr + i)`: Prints both subscript and dereferenced address to confirm address translation."},{"projectId":"ARRAY_003","title":"In-Place Cyclic Array Rotation by K Positions using Reversal Algorithm","difficulty":"Intermediate","description":"Imagine a song playlist, circular UI carousel, or process scheduler where you need to shift every item to the right by K positions, wrapping the trailing elements back around to the beginning. For example, rotating [1, 2, 3, 4, 5, 6, 7] to the right by K = 3 positions transforms it into [5, 6, 7, 1, 2, 3, 4]. While you could solve this by creating an extra temporary array (wasting extra O(N) memory) or repeatedly shifting elements by 1 position K times (taking slow O(N * K) time), high-performance software requires an In-Place algorithm operating in O(N) time and O(1) auxiliary space. In this project, you will implement the famous 3-Step Array Reversal Algorithm. First, normalize K using modulo arithmetic (k = k % n) to safely handle cases where K exceeds array length. Second, reverse the entire array from index 0 to n-1. Third, reverse the first K elements [0 .. k-1]. Finally, reverse the remaining elements [k .. n-1]. You will build this using a custom in-place reverse helper function that swaps elements using two pointers moving towards each other.","learningOutcome":"In-Place Array Manipulation, Reversal Algorithm & Optimal O(1) Space Complexity","exampleText":"Input Array: [1, 2, 3, 4, 5, 6, 7], K = 3","exampleOutput":"Original Array: [ 1 2 3 4 5 6 7 ]\\nRotating Right by K = 3 positions...\\nRotated Array:  [ 5 6 7 1 2 3 4 ]","logicExplanation":"1. **Modulo Normalization**: Normalize `k = k % n` to handle rotations larger than array size.\\n2. **Step 1 - Reverse Entire Array**: Reverse range `[0 .. n-1]` → `[7, 6, 5, 4, 3, 2, 1]`.\\n3. **Step 2 - Reverse First K Elements**: Reverse range `[0 .. k-1]` → `[5, 6, 7, 4, 3, 2, 1]`.\\n4. **Step 3 - Reverse Remaining Elements**: Reverse range `[k .. n-1]` → `[5, 6, 7, 1, 2, 3, 4]`.","answerFile":"./answers/answer3.c","codeExplanation":"1. `reverse()`: Swaps array elements in-place using two pointers `start` and `end`.\\n2. `rotate_right()`: Executes the 3-step reversal algorithm to shift array elements without creating auxiliary arrays."},{"projectId":"ARRAY_004","title":"Sparse Matrix Compression & Non-Zero Coordinate List (COO) Engine","difficulty":"Intermediate","description":"In computer science, physics simulations, and machine learning, matrices can be huge (e.g., 10,000 x 10,000 cells) yet contain mostly zero values (over 80-90% zeros). Storing such a grid as a traditional 2D dense array wastes millions of bytes of RAM storing useless zeros! A Sparse Matrix is a matrix predominantly filled with zeros. To optimize memory footprint, engineers compress sparse matrices into compact data formats. In this project, you will build a Sparse Matrix Compression Engine using the 3-Tuple Coordinate List (COO) representation. Instead of allocating a 2D array for all cells, your program scans the matrix and extracts only the non-zero elements into an array of structures, where each structure holds three numbers: (Row Index, Column Index, Non-Zero Value). Your program will output the compressed 3-Tuple table alongside a detailed memory footprint calculation, demonstrating the exact percentage of RAM saved compared to storing the original dense matrix grid.","learningOutcome":"Sparse Matrix Data Structures, Memory Footprint Optimization & COO Representation","exampleText":"4x5 Matrix with 4 Non-Zero Elements:\\n[0, 0, 3, 0, 4]\\n[0, 0, 0, 5, 0]\\n[0, 2, 0, 0, 0]\\n[0, 0, 0, 0, 7]","exampleOutput":"--- Sparse Matrix Compression (Coordinate List format) ---\\nOriginal Matrix Dimensions: 4 Rows x 5 Cols (Total Elements = 20)\\nNon-Zero Count: 4\\n\\nIndex | Row | Col | Value\\n-------------------------\\n  0   |  0  |  2  |   3\\n  1   |  0  |  4  |   4\\n  2   |  1  |  3  |   5\\n  3   |  2  |  1  |   2\\n  4   |  3  |  4  |   7\\n\\nMemory Footprint Reduction: 40.00%","logicExplanation":"1. **Sparse Definition**: Matrices where non-zero elements constitute < 20% of total entries waste RAM if stored as 2D dense arrays.\\n2. **3-Tuple Encapsulation**: Represent each non-zero entry as a struct storing `row`, `col`, and `value`.\\n3. **Compression Formula**: Memory saved = `100 * (1 - (3 * NonZeroCount * sizeof(int)) / (TotalRows * TotalCols * sizeof(int)))`.","answerFile":"./answers/answer4.c","codeExplanation":"1. `Element struct`: Encapsulates row index, column index, and value.\\n2. `compress_sparse_matrix()`: Scans 2D grid and populates 1D struct array with non-zero elements only."},{"projectId":"ARRAY_005","title":"Fast In-Place Square Matrix Transposition & Cache Locality Optimizer","difficulty":"Intermediate","description":"Matrix transposition is a fundamental operation in linear algebra, image processing, and computer graphics where rows become columns and columns become rows (converting matrix[i][j] into matrix[j][i]). When operating on an N x N square matrix, creating a second 2D matrix to hold the result doubles RAM usage. In this project, you will implement an In-Place Square Matrix Transposition Engine that transposes an N x N grid directly inside its original memory space with O(1) auxiliary memory complexity. The core trick lies in recognizing diagonal invariants: elements along the main diagonal (matrix[i][i]) never move, so you only need to swap elements in the upper triangular half above the diagonal with their corresponding elements in the lower triangular half below the diagonal. You will carefully construct nested loops starting j from i + 1 up to N-1 to avoid the common beginner bug of double-swapping elements back to their original positions.","learningOutcome":"2D Array Row-Major Indexing, Main Diagonal In-Place Swapping & Spatial Cache Locality","exampleText":"4x4 Input Matrix:\\n[ 1,  2,  3,  4]\\n[ 5,  6,  7,  8]\\n[ 9, 10, 11, 12]\\n[13, 14, 15, 16]","exampleOutput":"--- Original Matrix (4x4) ---\\n  1   2   3   4 \\n  5   6   7   8 \\n  9  10  11  12 \\n 13  14  15  16 \\n\\n--- Transposed Matrix (In-Place Transposition) ---\\n  1   5   9  13 \\n  2   6  10  14 \\n  3   7  11  15 \\n  4   8  12  16 ","logicExplanation":"1. **Diagonal Invariant**: Main diagonal elements `matrix[i][i]` remain unchanged during transposition.\\n2. **Upper Triangle Swapping**: Loop `i` from `0` to `N-1`, and `j` from `i + 1` to `N-1`. Swap `matrix[i][j]` with `matrix[j][i]`.\\n3. **Space Complexity**: Requires O(1) extra space since swapping occurs in-place without auxiliary 2D arrays.","answerFile":"./answers/answer5.c","codeExplanation":"1. `transpose_square_matrix()`: Iterates strictly over upper triangular matrix entries (`j = i + 1`) to perform element swaps and avoid double swapping back."},{"projectId":"ARRAY_006","title":"Kadane\'s Algorithm for Maximum Subarray Sum with Boundary Index Tracking","difficulty":"Intermediate","description":"Imagine tracking daily stock price fluctuations over a month, where values represent daily gains (positive numbers) and losses (negative numbers). You want to find the contiguous streak of consecutive days that yields the maximum possible total profit. In data structures, this is known as the Maximum Subarray Sum problem. While checking every possible start and end pair requires nested loops running in slow O(N^2) or O(N^3) time, Kadane\'s Algorithm solves this problem in a single linear pass (O(N) time complexity) using Dynamic Programming. In this project, you will implement Kadane\'s Algorithm with full boundary pointer tracking. As you iterate through the array, at each index i, you make a dynamic decision: is it better to add arr[i] to the running subarray sum (curr_max + arr[i]), or throw away the previous streak and start a fresh subarray at arr[i]? You will track running maximums, reset temporary start indices when a new streak begins, and lock in the global starting and ending indices whenever a new overall maximum sum is achieved.","learningOutcome":"Dynamic Programming on 1D Arrays, Kadane\'s Algorithm & Subarray Boundary Pointer Tracking","exampleText":"Input Array: [-2, 1, -3, 4, -1, 2, 1, -5, 4]","exampleOutput":"--- Kadane\'s Algorithm Max Subarray Sum ---\\nMaximum Contiguous Sum = 6\\nSubarray Window: Index [3 .. 6]\\nSubarray Elements: [ 4 -1 2 1 ]","logicExplanation":"1. **Local vs Global Optimum**: Maintain `curr_max` (max sum ending at current index) and `max_so_far` (overall maximum sum found).\\n2. **State Transition**: `curr_max = max(arr[i], curr_max + arr[i])`.\\n3. **Index Tracking**: If `arr[i]` exceeds `curr_max + arr[i]`, reset `temp_start = i`. Update `start` and `end` whenever `curr_max > max_so_far`.","answerFile":"./answers/answer6.c","codeExplanation":"1. `max_subarray_sum()`: Executes Kadane\'s linear O(N) traversal while maintaining pointer boundaries `start`, `end`, and `temp_start`."},{"projectId":"ARRAY_007","title":"Spiral Order Matrix Traversal & Boundary Unrolling Engine","difficulty":"Intermediate","description":"Traversing a 2D matrix normally involves reading row-by-row from left to right. However, many real-world applications—such as image processing filters, computer graphics rendering, matrix unrolling, and spiral print drivers—require visiting matrix cells in a Spiral Order sequence (moving Right along the top boundary, Down along the right boundary, Left along the bottom boundary, and Up along the left boundary, then spiraling inward layer-by-layer). In this project, you will build a Spiral Order Matrix Traversal Engine. You will manage four dynamic boundary pointers: top (starting row 0), bottom (ending row R-1), left (starting col 0), and right (ending col C-1). In a controlled while loop, your program sequentially traverses each outer wall, shrinking the boundary pointers inward after completing each direction (top++, right--, bottom--, left++) while enforcing boundary collision checks to prevent duplicate printing of middle cells in non-square matrices.","learningOutcome":"2D Matrix Boundary Management, Layer-by-Layer Traversal & Edge Condition Handling","exampleText":"4x4 Matrix Input:\\n[ 1,  2,  3,  4]\\n[ 5,  6,  7,  8]\\n[ 9, 10, 11, 12]\\n[13, 14, 15, 16]","exampleOutput":"--- Spiral Order Traversal Output ---\\n[ 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10 ]","logicExplanation":"1. **Four Boundaries**: Maintain `top`, `bottom`, `left`, and `right` boundary pointers.\\n2. **4-Step Outer Loop**:\\n   - Traverse right along `top` row, then increment `top`.\\n   - Traverse down along `right` col, then decrement `right`.\\n   - Traverse left along `bottom` row (if `top <= bottom`), then decrement `bottom`.\\n   - Traverse up along `left` col (if `left <= right`), then increment `left`.\\n3. **Termination**: Stop when `top > bottom` or `left > right`.","answerFile":"./answers/answer7.c","codeExplanation":"1. `print_spiral_matrix()`: Manages boundary shrinkage after each directional traversal to visit every cell in O(R * C) time."},{"projectId":"ARRAY_008","title":"In-Place 90-Degree Clockwise Matrix Rotation Engine","difficulty":"Advanced","description":"Rotating a digital photo or game grid by 90 degrees clockwise is a common computer graphics operation. If you have an N x N pixel grid, how do you rotate the entire grid 90 degrees clockwise in-place without allocating a temporary second 2D image matrix? In this project, you will implement an In-Place 90-Degree Clockwise Matrix Rotation Engine using a elegant two-phase geometric transformation algorithm. First, you perform an in-place matrix transposition, swapping matrix[i][j] with matrix[j][i] for all upper triangle entries. This turns horizontal rows into vertical columns, but in reversed order. Second, you perform an in-place horizontal row reversal on each row, swapping the leftmost element with the rightmost element using a two-pointer approach (left and right). Combining Transposition + Horizontal Reversal mathematically results in a perfect 90-degree clockwise rotation in O(N^2) time and O(1) auxiliary space!","learningOutcome":"Matrix Transformations, Composition of Geometric Operations & In-Place Memory Shifting","exampleText":"3x3 Input Matrix:\\n[1, 2, 3]\\n[4, 5, 6]\\n[7, 8, 9]","exampleOutput":"--- Original Matrix (3x3) ---\\n  1   2   3 \\n  4   5   6 \\n  7   8   9 \\n\\n--- Rotated Matrix 90° Clockwise ---\\n  7   4   1 \\n  8   5   2 \\n  9   6   3 ","logicExplanation":"1. **Mathematical Property**: Rotating 90° clockwise is identical to `Transpose(Matrix)` followed by `ReverseRows(TransposedMatrix)`.\\n2. **Phase 1 - Transpose**: Swap `matrix[i][j]` with `matrix[j][i]` for all `j > i`.\\n3. **Phase 2 - Reverse Rows**: For each row `i`, swap `matrix[i][left]` with `matrix[i][right]` using two pointers.","answerFile":"./answers/answer8.c","codeExplanation":"1. `rotate_matrix_90_clockwise()`: First transposes the grid in-place, then reverses each row horizontally."},{"projectId":"ARRAY_009","title":"Dutch National Flag 3-Way Partitioning (0s, 1s, 2s) in Single Pass","difficulty":"Advanced","description":"Suppose you are given an unsorted array containing only three types of numbers: 0s, 1s, and 2s (representing categories like Red, White, and Blue items in Edsger Dijkstra\'s famous Dutch National Flag problem). Your goal is to sort this array so that all 0s come first, followed by all 1s, and finally all 2s. While standard comparison sorts like QuickSort take O(N log N) time, and a two-pass counting approach requires scanning the array twice, Dijkstra\'s Dutch National Flag Algorithm sorts the array in a single linear pass (O(N) time) and O(1) auxiliary space using a Three-Pointer Strategy. In this project, you will build this 3-way partitioning engine using three pointers: low (marking the boundary where 0s should end), mid (the current scanning pointer), and high (marking the boundary where 2s should start). As mid traverses the array, you inspect arr[mid]: if it is 0, swap with arr[low] and increment both low and mid; if it is 1, increment mid; if it is 2, swap with arr[high] and decrement high without moving mid.","learningOutcome":"Three-Pointer Algorithm (low, mid, high), In-Place Partitioning & Single-Pass Optimization","exampleText":"Input Array: [2, 0, 2, 1, 1, 0, 1, 2, 0, 0]","exampleOutput":"Original Unsorted Array: [ 2 0 2 1 1 0 1 2 0 0 ]\\nExecuting Dutch National Flag 3-Way Partitioning (Single Pass)...\\nSorted Array (0s, 1s, 2s): [ 0 0 0 0 1 1 1 2 2 2 ]","logicExplanation":"1. **Three Regions**: Maintain 3 pointers `low` (boundary for 0s), `mid` (current element), and `high` (boundary for 2s).\\n2. **Invariants**:\\n   - `[0 .. low-1]` contains 0s\\n   - `[low .. mid-1]` contains 1s\\n   - `[high+1 .. n-1]` contains 2s\\n3. **Step Mechanics**:\\n   - If `arr[mid] == 0`: swap `arr[low]` and `arr[mid]`, increment `low` and `mid`.\\n   - If `arr[mid] == 1`: increment `mid`.\\n   - If `arr[mid] == 2`: swap `arr[mid]` and `arr[high]`, decrement `high`.","answerFile":"./answers/answer9.c","codeExplanation":"1. `sort_012()`: Executes single-pass 3-pointer partitioning without auxiliary counters or sorting functions."},{"projectId":"ARRAY_010","title":"2D Matrix Saddle Point Search Engine (Min in Row & Max in Column)","difficulty":"Advanced","description":"In linear algebra, game theory, and terrain topology analysis, a Saddle Point of a 2D matrix is a cell element that is simultaneously the minimum value in its horizontal row AND the maximum value in its vertical column. The name comes from a horse\'s riding saddle: the surface curves upward along one axis (row minimum) and curves downward along another axis (column maximum). In game theory, saddle points represent optimal equilibrium strategies where neither player has an incentive to change moves. In this project, you will build a 2D Matrix Saddle Point Search Engine. Your program will iterate through each matrix row i, identify the minimum element in that row along with its column index col_idx, and then verify if that exact element is greater than or equal to every other value in column col_idx. If both conditions hold true, your engine reports the saddle point value and its exact matrix coordinates; if no cell satisfies the criteria, it gracefully reports that no saddle point exists.","learningOutcome":"2D Matrix Dual-Condition Search, Row-Column Intersect Invariants & Optimizing Nested Searches","exampleText":"3x3 Matrix Input:\\n[1, 2, 3]\\n[4, 5, 6]\\n[7, 8, 9]","exampleOutput":"--- Matrix Saddle Point Search Engine ---\\nSaddle Point found at Position Matrix[2][0] = 7","logicExplanation":"1. **Saddle Point Condition**: `A[i][j]` is minimum in row `i` AND maximum in column `j`.\\n2. **Algorithm Steps**:\\n   - For each row `i`, locate the column index `col_idx` of the minimum element.\\n   - Iterate through column `col_idx` to check if `A[i][col_idx]` is greater than or equal to all elements in column `col_idx`.\\n   - If condition holds, mark as Saddle Point.\\n3. **Time Complexity**: O(R * C) where R is rows and C is columns.","answerFile":"./answers/answer10.c","codeExplanation":"1. `find_saddle_point()`: Iterates through matrix rows to find row minimums and verifies column maximum criteria."},{"projectId":"ARRAY_011","title":"In-Place Array Reversal Engine using Two-Pointer Swapping","difficulty":"Beginner","description":"When working with arrays, a frequent requirement is reversing the order of elements (e.g., turning [10, 20, 30, 40, 50] into [50, 40, 30, 20, 10]). A naive approach creates a brand-new array, copies elements backward, and copies them back—doubling your memory usage! An optimal software solution reverses the array In-Place using the Two-Pointer Technique. In this project, you will implement an array reversal function using two index pointers: left pointing at the first element (index 0) and right pointing at the last element (index n-1). In a simple while (left < right) loop, your code swaps the elements at left and right, increments left, and decrements right. The loop terminates when the pointers cross in the center. This achieves linear O(N) time complexity while using strictly O(1) auxiliary RAM.","learningOutcome":"Two-Pointer In-Place Array Reversal & O(1) Memory Optimization","exampleText":"Input Array: [10, 20, 30, 40, 50]","exampleOutput":"--- In-Place Array Reversal Simulation ---\\nOriginal Array: [ 10 20 30 40 50 ]\\nReversed Array: [ 50 40 30 20 10 ]","logicExplanation":"1. **Two-Pointer Initialization**: Set `left = 0` and `right = n - 1`.\\n2. **In-Place Swap Loop**: While `left < right`, swap `arr[left]` and `arr[right]`.\\n3. **Pointer Convergence**: Increment `left++` and decrement `right--` until pointers meet in center.","answerFile":"./answers/answer11.c","codeExplanation":"1. `reverse_array()`: Swaps array elements in-place using dual pointers `left` and `right`.\\n2. `print_array()`: Formats and displays elements of array."},{"projectId":"ARRAY_012","title":"Single-Pass Extractor for Second Smallest & Second Largest Array Elements","difficulty":"Beginner","description":"Sorting an array takes O(N log N) time, which is wasteful if you only need the second smallest and second largest numbers! In this project, you will write an efficient O(N) single-pass algorithm that tracks extreme values simultaneously without modifying or sorting the original array. You will maintain four tracking variables: smallest, second_smallest, largest, and second_largest. As you scan through the array once, when you encounter an element smaller than smallest, you update second_smallest = smallest before updating smallest. Similarly, if an element is greater than smallest but smaller than second_smallest, you update second_smallest. You apply the exact same dual-update logic for largest values. You will also handle edge cases where array size is less than 2 or all elements are identical.","learningOutcome":"Single-Pass Array Scanning, Min/Max Tracking & Avoiding Unnecessary Sorting","exampleText":"Input Array: [12, 35, 1, 10, 34, 1]","exampleOutput":"--- Second Extremes Extractor ---\\nSmallest: 1, Second Smallest: 10\\nLargest: 35, Second Largest: 34","logicExplanation":"1. **Initialize Extremes**: Set `smallest` and `second_smallest` to INT_MAX, and `largest` and `second_largest` to INT_MIN.\\n2. **Single Pass Update**: Update `second_smallest` when a new `smallest` is found or when element falls strictly between `smallest` and `second_smallest`.\\n3. **Parallel Largest Tracking**: Apply mirror update logic for `largest` and `second_largest`.","answerFile":"./answers/answer12.c","codeExplanation":"1. `find_second_extremes()`: Iterates through array once in O(N) time to find second minimum and second maximum."},{"projectId":"ARRAY_013","title":"In-Place Duplicate Removal & Unique Array Compactor","difficulty":"Beginner","description":"Given a sorted array containing duplicate values (e.g., [1, 1, 2, 2, 2, 3, 4, 4]), your task is to remove all duplicate elements In-Place so that each unique element appears only once at the front of the array, returning the new length of unique elements. Because the array is already sorted, all identical numbers are grouped together contiguously. In this project, you will use the Two-Pointer (Slow Runner / Fast Runner) pattern. Pointer i (slow runner) keeps track of the position of the last discovered unique element, while pointer j (fast runner) scans forward. Whenever arr[j] != arr[i], you increment i and copy arr[j] to arr[i]. This compacts unique elements to the front in O(N) time and O(1) space.","learningOutcome":"Slow/Fast Two-Pointer Pattern, In-Place Array Compaction & Duplicate Removal","exampleText":"Sorted Input: [1, 1, 2, 2, 2, 3, 4, 4, 5]","exampleOutput":"--- In-Place Duplicate Removal ---\\nUnique Count: 5\\nElements: [ 1 2 3 4 5 ]","logicExplanation":"1. **Slow/Fast Pointers**: Set slow pointer `i = 0` and fast pointer `j = 1`.\\n2. **Unique Value Transfer**: Whenever `arr[j] != arr[i]`, increment `i++` and assign `arr[i] = arr[j]`.\\n3. **Compact Subarray Length**: Return `i + 1` as the new size of unique elements.","answerFile":"./answers/answer13.c","codeExplanation":"1. `remove_duplicates()`: Overwrites duplicate entries in-place and returns number of unique elements."},{"projectId":"ARRAY_014","title":"Empirical Performance Benchmark: Linear Search vs Binary Search on Arrays","difficulty":"Beginner","description":"Searching for data in an array is one of the most fundamental operations in software engineering. In this project, you will build a comparative benchmark engine that demonstrates the difference between Linear Search (O(N)) and Binary Search (O(log N)). Linear search inspects elements sequentially from left to right until the target key is found or the end is reached (working on unsorted arrays). Binary search requires a sorted array and uses the Divide-and-Conquer strategy: checking the middle element mid = low + (high - low) / 2 and halving the search space in every step. Your program will take a sorted array, search for a target key using both algorithms, track the exact number of comparisons made by each, and output a side-by-side performance breakdown.","learningOutcome":"Algorithm Analysis, Linear vs Divide-and-Conquer Binary Search & Comparison Metrics","exampleText":"Sorted Array (N=10), Target = 56","exampleOutput":"--- Search Performance Benchmark ---\\nTarget Key: 56\\nLinear Search: Index 7, Comparisons = 8\\nBinary Search: Index 7, Comparisons = 3","logicExplanation":"1. **Linear Search Counter**: Loop index `i` from 0 to N-1, incrementing comparison count at each step.\\n2. **Binary Search Range Reduction**: Maintain `low` and `high`. Calculate `mid = low + (high - low)/2` and compare `arr[mid]` with `target`.\\n3. **Halving Logic**: Adjust `low = mid + 1` or `high = mid - 1` until target is found or search space is empty.","answerFile":"./answers/answer14.c","codeExplanation":"1. `linear_search()`: Scans sequentially and returns index & total comparisons.\\n2. `binary_search()`: Divides search space in half recursively/iteratively and returns comparison metrics."},{"projectId":"ARRAY_015","title":"2D Grid Row-Wise and Column-Wise Sum Aggregator","difficulty":"Beginner","description":"Matrices are used extensively in spreadsheets, image processing, and statistics. A common requirement is calculating summary statistics across dimensions—specifically, finding the sum of each horizontal row and each vertical column. In this project, you will implement a 2D matrix processing tool that iterates through an R x C grid in C. To calculate row sums, you loop through each row i from 0 to R-1 and accumulate elements across columns j from 0 to C-1. To calculate column sums, you loop through each column j from 0 to C-1 and accumulate elements across rows i from 0 to R-1. Your program will print the formatted grid alongside row totals and column totals, highlighting the overall grand matrix sum.","learningOutcome":"Nested Loop Traversal, 2D Grid Indexing & Multi-Dimensional Aggregation","exampleText":"3x4 Grid Input","exampleOutput":"--- 2D Grid Row & Column Sum Analysis ---\\nRow 0: [ 1 2 3 4 ] → Sum = 10\\nRow 1: [ 5 6 7 8 ] → Sum = 26\\nRow 2: [ 9 10 11 12 ] → Sum = 42\\n----------------------------------\\nColumn Sums: Col 0=15 | Col 1=18 | Col 2=21 | Col 3=24 | \\nGrand Matrix Total = 78","logicExplanation":"1. **Row Sum Loop**: Outer loop `i` over rows, inner loop `j` over columns, accumulating `row_sum += grid[i][j]`.\\n2. **Column Sum Loop**: Outer loop `j` over columns, inner loop `i` over rows, accumulating `col_sum += grid[i][j]`.\\n3. **Grand Total**: Sum all row totals or column totals.","answerFile":"./answers/answer15.c","codeExplanation":"1. `calculate_sums()`: Computes row sums, column sums, and grand total in O(R * C) time."},{"projectId":"ARRAY_016","title":"Square Matrix Symmetry Validator (Diagonal Mirror Test)","difficulty":"Beginner","description":"In linear algebra, a square matrix is called Symmetric if it is equal to its transpose (A = A^T), meaning element matrix[i][j] is equal to matrix[j][i] for every row i and column j. Symmetric matrices appear frequently in physics, network graphs, and covariance calculations. In this project, you will build a Matrix Symmetry Validator. First, your program verifies that the matrix is square (Rows == Columns). Next, instead of checking all cell pairs (which would check pairs twice), you loop through the upper triangle where j > i and test if matrix[i][j] != matrix[j][i]. If any pair fails to match, the matrix is declared non-symmetric immediately; if all pairs match, it is verified as symmetric in O(N^2) time and O(1) space.","learningOutcome":"Matrix Symmetry Properties, Upper Triangular Loops & Early Exit Optimization","exampleText":"3x3 Symmetric Matrix","exampleOutput":"--- Matrix Symmetry Validator ---\\nResult: Matrix is Symmetric (A == A^T).","logicExplanation":"1. **Upper Triangle Check**: Loop `i` from 0 to N-1 and `j` from `i + 1` to N-1.\\n2. **Symmetry Test**: If `matrix[i][j] != matrix[j][i]`, return false immediately.\\n3. **Validation Outcome**: If all upper triangle cells match their lower mirror cells, matrix is symmetric.","answerFile":"./answers/answer16.c","codeExplanation":"1. `is_symmetric()`: Evaluates off-diagonal elements against their transpose positions."},{"projectId":"ARRAY_017","title":"Two-Pointer Sorted Array Merging Engine","difficulty":"Beginner","description":"Suppose you have two separate sorted arrays (e.g., Array A of size N and Array B of size M). You want to combine them into a single sorted Array C of size N + M. The naive approach of concatenating A and B and calling a sorting algorithm takes O((N+M) log(N+M)) time. However, because A and B are already individually sorted, you can merge them in linear O(N + M) time! In this project, you will implement the Merge step of MergeSort using three index pointers: p1 for Array A, p2 for Array B, and p3 for Array C. At each step, compare A[p1] and B[p2], copy the smaller value into C[p3], and advance the corresponding pointers. Once one array is exhausted, copy all remaining elements from the other array.","learningOutcome":"Sorted Array Combination, Merge Algorithm & Linear Time Complexity","exampleText":"A = [1, 3, 5, 7], B = [2, 4, 6, 8, 10]","exampleOutput":"--- Two-Pointer Sorted Array Merging ---\\nMerged Array: [ 1 2 3 4 5 6 7 8 10 ]","logicExplanation":"1. **Three Pointers**: `p1 = 0`, `p2 = 0`, `p3 = 0`.\\n2. **Compare and Copy**: While `p1 < n` and `p2 < m`, compare `A[p1]` and `B[p2]` and copy smaller element to `C[p3++]`.\\n3. **Flush Remaining**: Append remaining elements from Array A or Array B.","answerFile":"./answers/answer17.c","codeExplanation":"1. `merge_sorted_arrays()`: Combines two pre-sorted arrays into a third output array."},{"projectId":"ARRAY_018","title":"Array Element Frequency Counter & Distinct Histogram Generator","difficulty":"Beginner","description":"Analyzing data distributions requires counting how many times each distinct value appears in an array. In this project, you will construct an Array Element Frequency Counter. For arrays containing non-negative integers within a known range, you will use a direct-address Frequency Array (or Hash Table) where index k stores the frequency count of number k. You will first scan the input array to determine maximum bounds, dynamically allocate a frequency array initialized to zero, and perform a single pass incrementing freq[arr[i]]++. Finally, you will iterate through the original array order (or frequency table) to print each unique number alongside its exact occurrence count, demonstrating O(N) frequency tallying.","learningOutcome":"Direct Address Hashing, Frequency Tables & O(N) Distribution Analysis","exampleText":"Input Array: [4, 2, 4, 5, 2, 3, 1, 4, 5, 2]","exampleOutput":"--- Element Frequency Histogram ---\\nElement  1 : 1 occurrence(s)\\nElement  2 : 3 occurrence(s)\\nElement  3 : 1 occurrence(s)\\nElement  4 : 3 occurrence(s)\\nElement  5 : 2 occurrence(s)","logicExplanation":"1. **Determine Upper Bound**: Find `max_val` in array to dimension frequency array.\\n2. **Direct Address Accumulation**: Allocate `freq` array of size `max_val + 1` zeroed out. Increment `freq[arr[i]]++` for each element.\\n3. **Print Histogram**: Iterate through `freq` array and print counts > 0.","answerFile":"./answers/answer18.c","codeExplanation":"1. `count_frequencies()`: Uses direct address array indexing to count element occurrences."},{"projectId":"ARRAY_019","title":"Main Diagonal & Anti-Diagonal Element Extractor and Trace Calculator","difficulty":"Beginner","description":"Square matrices possess two prominent diagonal axes: the Main Diagonal (running from top-left [0][0] to bottom-right [N-1][N-1]) and the Anti-Diagonal (running from top-right [0][N-1] to bottom-left [N-1][0]). The sum of elements along the main diagonal is known in linear algebra as the Matrix Trace. In this project, you will build a Diagonal Processing Tool for N x N matrices. You will extract main diagonal elements using the relation row == col (index [i][i]) and anti-diagonal elements using col == N - 1 - row (index [i][N - 1 - i]). Your program will compute the trace, the anti-diagonal sum, and the combined sum of both diagonals, carefully handling the center element overlap when N is odd.","learningOutcome":"Matrix Diagonals, Matrix Trace Property & Single-Loop Diagonal Traversal","exampleText":"3x3 Grid Input","exampleOutput":"--- Matrix Diagonals Extractor ---\\nMain Diagonal: [ 1 5 9 ] → Trace Sum = 15\\nAnti-Diagonal: [ 3 5 7 ] → Anti-Diagonal Sum = 15","logicExplanation":"1. **Main Diagonal**: Element at `[i][i]` for `i` from 0 to N-1.\\n2. **Anti-Diagonal**: Element at `[i][N - 1 - i]` for `i` from 0 to N-1.\\n3. **Single Loop Optimizing**: Both diagonals can be extracted simultaneously in a single loop `i` from 0 to N-1.","answerFile":"./answers/answer19.c","codeExplanation":"1. `process_diagonals()`: Computes main trace and anti-diagonal sums."},{"projectId":"ARRAY_020","title":"In-Place Zero Partitioning & Order-Preserving Array Compactor","difficulty":"Beginner","description":"Imagine cleaning up a data stream or array where zeros represent empty or invalid slots (e.g., [0, 1, 0, 3, 12]). You want to push all zero values to the end of the array while keeping all non-zero numbers at the front in their original relative order (resulting in [1, 3, 12, 0, 0]). Doing this by creating a secondary array uses extra RAM. In this project, you will implement an In-Place Zero Shifting Engine using a Two-Pointer technique. Maintain a write_idx pointer starting at index 0. Scan through the array with a read_idx pointer: whenever arr[read_idx] != 0, write arr[read_idx] to arr[write_idx] and increment write_idx. After scanning the entire array, fill all remaining positions from write_idx to n-1 with 0s. This achieves linear O(N) runtime with O(1) space.","learningOutcome":"In-Place Partitioning, Order-Preserving Filtering & Two-Pointer Compaction","exampleText":"Input: [0, 1, 0, 3, 12, 0, 5]","exampleOutput":"--- Zero Partitioning & Compactor ---\\nOriginal Array: [ 0 1 0 3 12 0 5 ]\\nShifted Array : [ 1 3 12 5 0 0 0 ]","logicExplanation":"1. **Read/Write Pointers**: Maintain `write_idx = 0` and scan `read_idx` from 0 to N-1.\\n2. **Non-Zero Shift**: If `arr[read_idx] != 0`, assign `arr[write_idx++] = arr[read_idx]`.\\n3. **Zero Padding**: Fill indices from `write_idx` to N-1 with 0.","answerFile":"./answers/answer20.c","codeExplanation":"1. `shift_zeros_to_end()`: Compacts non-zero numbers to front and pads zero tail in O(N) time."},{"projectId":"ARRAY_021","title":"Matrix Multiplication Engine (R1 x C1 by R2 x C2) with Validation","difficulty":"Intermediate","description":"Matrix multiplication is a cornerstone operation in 3D graphics, artificial intelligence, and scientific computing. Unlike element-wise addition, multiplying Matrix A (dimensions R1 x C1) by Matrix B (dimensions R2 x C2) requires that inner dimensions match (C1 == R2), producing a result Matrix C of dimensions R1 x C2. In this project, you will implement a Matrix Multiplication Engine in C. Your program first validates dimension compatibility. Then, using three nested loops (i from 0 to R1-1, j from 0 to C2-1, and k from 0 to C1-1), it computes each dot product entry C[i][j] = sum(A[i][k] * B[k][j]). You will format and display the output matrix along with execution step details.","learningOutcome":"3-Nested Loop Matrix Multiplication, Dimension Validation & Dot Product Operations","exampleText":"A (2x3) x B (3x2)","exampleOutput":"--- Matrix Multiplication Engine ---\\nResult Matrix C (2x2):\\n  31   19 \\n  85   55 ","logicExplanation":"1. **Dimension Check**: Ensure `C1 == R2` before proceeding.\\n2. **Triple Nested Loop**: Loop `i` (0..R1-1), loop `j` (0..C2-1), initialize `C[i][j] = 0`.\\n3. **Dot Product Accumulation**: Inner loop `k` (0..C1-1) accumulates `C[i][j] += A[i][k] * B[k][j]`.","answerFile":"./answers/answer21.c","codeExplanation":"1. `multiply_matrices()`: Validates matrix compatibility and computes resultant matrix dot products."},{"projectId":"ARRAY_022","title":"In-Place Index-Marking Engine for Missing & Duplicate Numbers (1 to N)","difficulty":"Intermediate","description":"Given an array of N integers where numbers fall in the range [1 .. N], exactly one number is duplicated and one number is missing (e.g., [3, 1, 2, 5, 3] in range 1-5). While using a hash map takes extra memory or sorting takes O(N log N) time, the Index-Marking Algorithm finds both numbers in linear O(N) time and O(1) space! In this project, you will implement Index Marking in C. Because elements are in range 1 to N, each value corresponds to a valid array index val - 1. You iterate through the array, using the magnitude of abs(arr[i]) - 1 as an index. If arr[index] is already negative, then abs(arr[i]) is the duplicate number! Otherwise, negate arr[index]. In a second pass, whichever index remains positive indicates the missing number (index + 1).","learningOutcome":"In-Place Array Index Marking, Value-as-Index Mapping & O(1) Space Detection","exampleText":"Input: [3, 1, 2, 5, 3] (Range 1 to 5)","exampleOutput":"--- Index Marking Missing & Duplicate Finder ---\\nDuplicate Number: 3\\nMissing Number  : 4","logicExplanation":"1. **Sign Flipping**: For element `abs(arr[i])`, inspect `arr[abs(arr[i]) - 1]`. If negative, duplicate is `abs(arr[i])`. Else negate value.\\n2. **Positive Index Pass**: Scan array again; index `i` with positive `arr[i]` identifies missing number `i + 1`.","answerFile":"./answers/answer22.c","codeExplanation":"1. `find_missing_and_duplicate()`: Uses array values as sign-flipping indices to achieve O(N) time and O(1) space."},{"projectId":"ARRAY_023","title":"Two-Sum Pair Locator using Hash/Sorting Optimization","difficulty":"Intermediate","description":"Given an array of integers and a target sum T, find the indices (or values) of two numbers that add up exactly to target T (e.g., in [2, 7, 11, 15] with target T = 9, the pair is [2, 7] at indices 0 and 1). While the brute-force approach checks every pair using nested loops in O(N^2) time, optimized solutions achieve O(N) or O(N log N) time. In this project, you will build a Two-Sum Pair Search Engine in C implementing two optimized strategies: (1) Sorting + Two-Pointer Technique (where left and right move inward based on arr[left] + arr[right] == target), and (2) Hash/Lookup Table strategy. Your program will handle multiple target requests, output pair locations, and return proper status if no pair exists.","learningOutcome":"Two-Sum Optimization, Sorting + Two Pointers & Hash Lookup Concepts","exampleText":"Array: [2, 7, 11, 15], Target = 9","exampleOutput":"--- Two Sum Pair Locator ---\\nTarget: 9\\nPair Found: 2 + 7 = 9","logicExplanation":"1. **Brute Force vs Optimized**: Compare O(N^2) nested search with O(N log N) sorted two-pointer search.\\n2. **Two-Pointer Check**: Sort array, set `left = 0`, `right = N-1`. If sum < target `left++`; if sum > target `right--`.","answerFile":"./answers/answer23.c","codeExplanation":"1. `two_sum()`: Finds a pair of numbers matching target sum."},{"projectId":"ARRAY_024","title":"Boyer-Moore Majority Vote Algorithm Engine","difficulty":"Intermediate","description":"A Majority Element in an array of size N is an element that appears strictly more than N / 2 times. Finding this element efficiently is vital in streaming data analysis and voting systems. While counting frequencies using hash maps takes O(N) space and sorting takes O(N log N) time, the Boyer-Moore Majority Vote Algorithm finds the candidate in a single linear pass using O(1) auxiliary memory! In this project, you will implement Boyer-Moore Voting. Phase 1 maintains a candidate and a count: increment count if element matches candidate, decrement count otherwise, and pick a new candidate when count hits 0. Phase 2 performs a second pass to verify if the candidate actually appears > N/2 times.","learningOutcome":"Boyer-Moore Voting Algorithm, Streaming Data Analysis & Candidate Elimination","exampleText":"Input: [2, 2, 1, 1, 1, 2, 2]","exampleOutput":"--- Boyer-Moore Majority Vote ---\\nInput Array: [ 2 2 1 1 1 2 2 ]\\nMajority Element (> N/2): 2","logicExplanation":"1. **Candidate Election (Phase 1)**: Maintain `candidate` and `count`. If `count == 0`, `candidate = arr[i]`. Increment if match, decrement if mismatch.\\n2. **Candidate Verification (Phase 2)**: Count occurrences of candidate to ensure count > N/2.","answerFile":"./answers/answer24.c","codeExplanation":"1. `find_majority_element()`: Implements Boyer-Moore 2-phase majority element election algorithm."},{"projectId":"ARRAY_025","title":"Longest Consecutive Sequence Finder in Unsorted Arrays","difficulty":"Intermediate","description":"Given an unsorted array of integers (e.g., [100, 4, 200, 1, 3, 2]), find the length of the longest sequence of consecutive numbers (e.g., sequence [1, 2, 3, 4] has length 4). The numbers do not need to be contiguous in the original array. Sorting the array takes O(N log N) time. In this project, you will build an optimized Longest Consecutive Sequence Finder. You will explore both a sorting-based solution (filtering duplicates and counting consecutive runs) and a hash set lookup technique that identifies sequence starters (num - 1 not in set) to count sequence lengths in O(N) time.","learningOutcome":"Subsequence Identification, Sorting-Based Run Counting & Sequence Bounds","exampleText":"Input: [100, 4, 200, 1, 3, 2]","exampleOutput":"--- Longest Consecutive Subsequence ---\\nArray: [ 100 4 200 1 3 2 ]\\nLongest Consecutive Length: 4 (Sequence [1, 2, 3, 4])","logicExplanation":"1. **Sort & Filter**: Sort input array using `qsort()`.\\n2. **Streak Counter**: Iterate through sorted numbers; if `arr[i] == arr[i-1] + 1`, increment `current_streak`.\\n3. **Max Streak Update**: Update `max_streak = max(max_streak, current_streak)` whenever run breaks.","answerFile":"./answers/answer25.c","codeExplanation":"1. `longest_consecutive_subsequence()`: Sorts and counts longest consecutive integer streak."},{"projectId":"ARRAY_026","title":"2D Staircase Search Engine for Row-Wise & Column-Wise Sorted Matrices","difficulty":"Intermediate","description":"Suppose you have an R x C matrix where every row is sorted from left to right and every column is sorted from top to bottom. Searching for a target value by scanning every cell takes O(R * C) time. Binary search on each row takes O(R log C) time. However, the Staircase Search Algorithm finds the target in O(R + C) linear time! In this project, you will implement Staircase Search starting at the Top-Right corner (row = 0, col = C - 1). At each step: if target == cell, target is found; if target < cell, move Left (col--); if target > cell, move Down (row++). Your program will trace each step of the search path and report exact cell coordinates.","learningOutcome":"2D Staircase Search, Sorted Grid Invariants & Linear-Time Matrix Lookup","exampleText":"4x4 Sorted Grid, Target = 29","exampleOutput":"--- 2D Staircase Search Engine ---\\nTarget Key: 29\\nTarget Found at Cell Matrix[2][1]","logicExplanation":"1. **Start Top-Right**: Set `row = 0`, `col = C - 1`.\\n2. **Elimination Step**: If `matrix[row][col] == target`, return true. If `matrix[row][col] > target`, `col--`. Else `row++`.\\n3. **Complexity Guarantee**: Moves at most R rows down and C cols left, bounding time to O(R + C).","answerFile":"./answers/answer26.c","codeExplanation":"1. `staircase_search()`: Performs O(R + C) staircase navigation to locate target cell in sorted 2D grid."},{"projectId":"ARRAY_027","title":"Maximum Product Subarray Engine (Dual Min/Max Dynamic Tracking)","difficulty":"Intermediate","description":"Finding the contiguous subarray with the maximum product is much trickier than Maximum Subarray Sum because multiplying two negative numbers creates a positive product! A very small negative product can suddenly become a huge positive product when multiplied by another negative number. In this project, you will implement an In-Place Dynamic Programming algorithm for Maximum Product Subarray. At each element arr[i], you maintain both max_prod (largest positive product ending at i) and min_prod (smallest/most negative product ending at i). When encountering a negative number, you swap max_prod and min_prod before updating. This solves the problem in O(N) time and O(1) space.","learningOutcome":"Dynamic Programming, Dual Min/Max Tracking & Negative Multiplicand Inversion","exampleText":"Input: [2, 3, -2, 4, -2]","exampleOutput":"--- Maximum Product Subarray Engine ---\\nInput: [ 2 3 -2 4 -2 ]\\nMaximum Contiguous Subarray Product = 96","logicExplanation":"1. **Dual State Maintenance**: Maintain `curr_max` and `curr_min` for running products.\\n2. **Negative Swap**: If `arr[i] < 0`, swap `curr_max` and `curr_min`.\\n3. **State Transition**: `curr_max = max(arr[i], curr_max * arr[i])` and update global max product.","answerFile":"./answers/answer27.c","codeExplanation":"1. `max_product_subarray()`: Tracks dual min/max products to handle negative multiplicand flips."},{"projectId":"ARRAY_028","title":"In-Place 180-Degree Matrix Rotation Engine","difficulty":"Intermediate","description":"Rotating an N x N matrix by 180 degrees is equivalent to flipping it upside down (reversing rows) and then flipping it left to right (reversing columns). Doing this in-place requires swapping elements across two dimensions simultaneously. In this project, you will build an In-Place 180-Degree Matrix Rotation Engine. You will iterate through half of the matrix grid, swapping element matrix[i][j] with its point-symmetric counterpart matrix[N - 1 - i][N - 1 - j]. Your program will display the original grid, perform the symmetric swaps in O(N^2) time with O(1) extra RAM, and display the rotated grid.","learningOutcome":"Matrix Transformations, 180-Degree Point Symmetry & In-Place Grid Swapping","exampleText":"3x3 Input Matrix","exampleOutput":"--- Original Matrix (3x3) ---\\n  1   2   3 \\n  4   5   6 \\n  7   8   9 \\n\\n--- Matrix Rotated 180° ---\\n  9   8   7 \\n  6   5   4 \\n  3   2   1 ","logicExplanation":"1. **Point Symmetry**: Cell `(i, j)` maps to `(N - 1 - i, N - 1 - j)`.\\n2. **Half Grid Loop**: Iterate `i` from 0 to `N/2 - 1` and swap elements.\\n3. **Center Row Handling**: If N is odd, reverse middle row elements up to `N/2`.","answerFile":"./answers/answer28.c","codeExplanation":"1. `rotate_180_clockwise()`: Rotates N x N grid by 180 degrees in-place."},{"projectId":"ARRAY_029","title":"Pascal\'s Triangle Dynamic Generator (1D & 2D Array Implementation)","difficulty":"Intermediate","description":"Pascal\'s Triangle is a triangular array of binomial coefficients C(n, k) where each number is the sum of the two numbers directly above it (matrix[i][j] = matrix[i-1][j-1] + matrix[i-1][j]). The outer edges are always 1. In this project, you will build a Pascal\'s Triangle Generator up to N rows. You will implement two approaches: (1) a 2D dynamic matrix allocation approach storing full rows, and (2) an optimized 1D memory array approach that generates row i in-place from right to left using arr[j] = arr[j] + arr[j-1]. Your application will print a beautifully aligned pyramid format.","learningOutcome":"Combinatorial Generation, Pascal\'s Triangle Property & Right-to-Left 1D Array Updates","exampleText":"Rows = 6","exampleOutput":"--- Pascal\'s Triangle (In-Place 1D Generator) ---\\n            1\\n          1   1\\n        1   2   1\\n      1   3   3   1\\n    1   4   6   4   1\\n  1   5  10  10   5   1","logicExplanation":"1. **Base Case**: Set `arr[0] = 1`.\\n2. **Right-to-Left Accumulation**: For each line, update `arr[j] = arr[j] + arr[j-1]` starting from `j = line` down to 1.\\n3. **Formatting**: Print leading spaces for pyramid alignment.","answerFile":"./answers/answer29.c","codeExplanation":"1. `generate_pascal_triangle()`: Generates and prints Pascal\'s Triangle up to N rows using 1D array buffer."},{"projectId":"ARRAY_030","title":"2D Prefix Sum Matrix Pre-computation & Submatrix Query Engine","difficulty":"Intermediate","description":"Suppose you have a 2D matrix and need to answer hundreds of queries requesting the sum of numbers inside rectangular submatrices defined by top-left (r1, c1) and bottom-right (r2, c2). Calculating each submatrix sum directly by looping takes O(R * C) time per query. Using a 2D Prefix Sum Array, pre-computation takes O(R * C) once, after which ANY submatrix sum query can be answered in instant O(1) constant time! In this project, you will construct a 2D Prefix Sum Engine in C. Pre-compute P[i][j] = matrix[i][j] + P[i-1][j] + P[i][j-1] - P[i-1][j-1]. Then answer submatrix queries in O(1) time using the Inclusion-Exclusion formula: Sum = P[r2][c2] - P[r1-1][c2] - P[r2][c1-1] + P[r1-1][c1-1].","learningOutcome":"2D Prefix Sums, Inclusion-Exclusion Principle & Instant O(1) Submatrix Query","exampleText":"4x4 Matrix, Query [(1,1) to (2,3)]","exampleOutput":"--- 2D Prefix Sum Submatrix Query Engine ---\\nSubmatrix Query [(1,1) to (2,3)] Sum = 54 (Instant O(1) Time!)","logicExplanation":"1. **Pre-computation**: `P[i][j] = grid[i-1][j-1] + P[i-1][j] + P[i][j-1] - P[i-1][j-1]`.\\n2. **Inclusion-Exclusion Query**: `Sum = P[r2][c2] - P[r1-1][c2] - P[r2][c1-1] + P[r1-1][c1-1]`.\\n3. **Constant Time Lookup**: Answers range sum queries in O(1) time after O(R * C) initial setup.","answerFile":"./answers/answer30.c","codeExplanation":"1. `precompute_prefix_sum()`: Builds 2D cumulative sum table.\\n2. `query_submatrix_sum()`: Returns submatrix sum in O(1) time."},{"projectId":"ARRAY_031","title":"Trapping Rainwater Simulation & 2-Pointer Elevation Map Engine","difficulty":"Advanced","description":"Given an array of non-negative integers representing an elevation map where width of each bar is 1, compute how much water can be trapped between the bars after raining! Water trapped at bar i depends on the maximum height to its left (left_max) and maximum height to its right (right_max): Water[i] = min(left_max, right_max) - height[i]. In this project, you will build a Rainwater Trapping Engine in C. You will implement two high-performance solutions: (1) an O(N) time and O(N) space array pre-computation approach (left_max[] and right_max[] arrays), and (2) an optimal O(N) time and O(1) space Two-Pointer approach (left and right pointers moving inward). Your application will compute total trapped water volume and render a visual ASCII elevation diagram.","learningOutcome":"Two-Pointer Elevation Bounding, Trapped Water Calculation & Space Optimization","exampleText":"Heights: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]","exampleOutput":"--- Trapping Rainwater Elevation Engine ---\\nElevation Map: [ 0 1 0 2 1 0 1 3 2 1 2 1 ]\\nTotal Trapped Water Volume = 6 units","logicExplanation":"1. **Two Pointers**: `left = 0`, `right = N - 1`, tracking `left_max` and `right_max`.\\n2. **Water Trap Condition**: If `height[left] <= height[right]`, process `left`: if `height[left] >= left_max`, update `left_max`; else add `left_max - height[left]` to total.\\n3. **Mirror Right Processing**: Process `right` pointer symmetrically.","answerFile":"./answers/answer31.c","codeExplanation":"1. `trap_rainwater()`: Computes total trapped water volume in linear O(N) time and O(1) space."},{"projectId":"ARRAY_032","title":"2D Kadane\'s Algorithm for Maximum Submatrix Sum","difficulty":"Advanced","description":"While 1D Kadane\'s Algorithm finds the maximum sum contiguous subarray in O(N) time, the 2D Maximum Submatrix Sum problem requires finding a rectangular submatrix in an R x C grid containing positive and negative numbers that yields the maximum possible total sum. Brute force takes O(R^3 * C^3) time. In this project, you will implement 2D Kadane\'s Algorithm in C to solve this in O(R^2 * C) time! Fix starting row r1 and ending row r2. Compress rows r1 to r2 into a 1D column-sum array temp[]. Run 1D Kadane\'s algorithm on temp[] to find column boundaries c1 and c2. Your program will output maximum sum, dimensions, and submatrix coordinates.","learningOutcome":"2D Kadane\'s Algorithm, Row Compression & Optimal Rectangular Submatrix Search","exampleText":"4x4 Matrix with Negative & Positive Entries","exampleOutput":"--- 2D Kadane\'s Maximum Submatrix Sum ---\\nMaximum Submatrix Sum = 29\\nTop-Left: (1, 1), Bottom-Right: (3, 3)","logicExplanation":"1. **Row Compression**: For fixed top row `r1` and bottom row `r2`, accumulate column values into 1D array `temp[]`.\\n2. **1D Kadane Execution**: Run Kadane\'s on `temp[]` to find optimal left and right column boundaries `c1` and `c2`.\\n3. **Global Maximum Update**: Track maximum sum and store coordinates `(r1, c1)` to `(r2, c2)`.","answerFile":"./answers/answer32.c","codeExplanation":"1. `max_submatrix_sum_2d()`: Runs 2D Kadane\'s algorithm to find submatrix with maximum sum."},{"projectId":"ARRAY_033","title":"Compressed Sparse Row (CSR) Engine & Fast Sparse Vector Multiplier","difficulty":"Advanced","description":"In high-performance computing (HPC) and large-scale AI, Sparse Matrices are compressed using Compressed Sparse Row (CSR) format instead of Coordinate List (COO). CSR compresses an R x C sparse matrix into three 1D arrays: values[] (non-zero entries), col_index[] (column positions of values), and row_ptr[] (pointers to where each row starts in values[]). CSR allows hyper-fast Sparse Matrix-Vector Multiplication (SpMV) in O(NonZeroCount) time! In this project, you will build a complete CSR Format Encoder and Matrix-Vector Multiplier in C. Your engine converts a dense matrix into CSR format, calculates exact compression ratios, and executes fast SpMV.","learningOutcome":"CSR Compressed Format, Row Pointers & Fast Sparse Matrix-Vector Multiplication (SpMV)","exampleText":"4x4 Diagonal/Sparse Matrix","exampleOutput":"--- Compressed Sparse Row (CSR) Engine ---\\nNon-Zero Elements (NNZ): 5\\nSparse Matrix-Vector Multiplication Y = A * X:\\nResult Vector Y: [ 10 40 250 200 ]","logicExplanation":"1. **CSR Triplets**: `values[]` holds non-zeros, `col_index[]` holds column indices, `row_ptr[i]` holds start index of row `i` in `values[]`.\\n2. **SpMV Algorithm**: For each row `i`, loop `k` from `row_ptr[i]` to `row_ptr[i+1]-1` and sum `y[i] += values[k] * x[col_index[k]]`.\\n3. **O(NNZ) Complexity**: Computes matrix-vector product proportional to non-zero count rather than total grid size.","answerFile":"./answers/answer33.c","codeExplanation":"1. `create_csr()`: Encodes 2D dense grid into CSR format.\\n2. `spmv()`: Executes sparse matrix-vector multiplication in O(NNZ) time."},{"projectId":"ARRAY_034","title":"Ring-by-Ring In-Place Matrix Boundary Layer Rotator","difficulty":"Advanced","description":"Rotating a full 2D matrix by 90 degrees rotates all elements at once. But what if you only want to rotate a specific concentric outer ring (boundary layer) by K positions clockwise while leaving inner rings untouched? In this project, you will construct a Ring-by-Ring Matrix Rotator in C for an M x N grid. You will unpack concentric rectangular ring layers into temporary 1D ring arrays, perform cyclic rotation by K positions using the 3-step reversal algorithm, and copy elements back into their matrix ring coordinates. Your program allows selecting individual ring indices (Ring 0 = outer boundary, Ring 1 = second layer) and rotating them independently.","learningOutcome":"Concentric Ring Extraction, Cyclic Layer Rotation & Layer-Specific Matrix Manipulation","exampleText":"4x4 Matrix, Outer Ring K=2 Rotation","exampleOutput":"--- Original Matrix ---\\n  1   2   3   4 \\n  5   6   7   8 \\n  9  10  11  12 \\n 13  14  15  16 \\n\\n--- Outer Ring Rotated Clockwise by K=2 ---\\n  9   5   1   2 \\n 13   6   7   3 \\n 14  10  11   4 \\n 15  16  12   8 ","logicExplanation":"1. **Ring Unpacking**: Traverse ring 0 boundary clockwise (Top → Right → Bottom → Left) and unpack elements into 1D array.\\n2. **1D Cyclic Shift**: Shift 1D ring elements by K positions `(i + k) % ring_len`.\\n3. **Ring Repacking**: Copy rotated 1D elements back into boundary coordinates.","answerFile":"./answers/answer34.c","codeExplanation":"1. `rotate_outer_ring()`: Unpacks, rotates, and repacks outer matrix ring layer."},{"projectId":"ARRAY_035","title":"Optimal Binary Search Engine for Median of Two Sorted Arrays","difficulty":"Advanced","description":"Given two sorted arrays nums1 of size M and nums2 of size N, find the median of the combined sorted array. Merging arrays takes O(M + N) time and space. But in top technical interviews and high-throughput databases, you are required to solve this in logarithmic O(log(min(M, N))) time complexity with O(1) auxiliary space! In this project, you will implement the optimal Binary Search Partitioning Algorithm by search-partitioning the smaller array. You find partition indices i in nums1 and j in nums2 such that left half elements are <= right half elements (maxLeft1 <= minRight2 and maxLeft2 <= minRight1). Your engine computes the exact median (handling odd and even combined length cases) and prints step-by-step binary search partition bounds.","learningOutcome":"Binary Search on Partition Cut-Points, Logarithmic Median Search & Boundary Conditions","exampleText":"Array A (m=5), Array B (n=6)","exampleOutput":"--- Optimal Binary Search Median Finder ---\\nArray A (m=5): [ 1 3 8 9 15 ]\\nArray B (n=6): [ 7 11 18 19 21 25 ]\\nMedian of Combined Sorted Arrays = 11.00 (O(log(min(M,N))) Time Complexity)","logicExplanation":"1. **Partition Search Space**: Binary search partition index `i` in smaller array A, computing `j = (m + n + 1) / 2 - i` in array B.\\n2. **Partition Condition**: Check if `maxLeftA <= minRightB` and `maxLeftB <= minRightA`.\\n3. **Median Calculation**: If `(m + n)` is even, median is `(max(maxLeftA, maxLeftB) + min(minRightA, minRightB)) / 2.0`. Else `max(maxLeftA, maxLeftB)`.","answerFile":"./answers/answer35.c","codeExplanation":"1. `find_median_sorted_arrays()`: Performs binary search on partitions to calculate combined median in O(log(min(M,N))) time."}]'),c={projectCategory:H,subject:Z,board:Q,class:"Computer Science Core / BCA / B.Tech",tools:X,institute:J,projects:$};function ar(){const[i,m]=l.useState(null);return l.useEffect(()=>{const t=Object.assign({"./topic6_files/answers/answer1.c":p,"./topic6_files/answers/answer10.c":g,"./topic6_files/answers/answer11.c":f,"./topic6_files/answers/answer12.c":h,"./topic6_files/answers/answer13.c":x,"./topic6_files/answers/answer14.c":y,"./topic6_files/answers/answer15.c":_,"./topic6_files/answers/answer16.c":w,"./topic6_files/answers/answer17.c":v,"./topic6_files/answers/answer18.c":b,"./topic6_files/answers/answer19.c":S,"./topic6_files/answers/answer2.c":R,"./topic6_files/answers/answer20.c":A,"./topic6_files/answers/answer21.c":j,"./topic6_files/answers/answer22.c":C,"./topic6_files/answers/answer23.c":M,"./topic6_files/answers/answer24.c":N,"./topic6_files/answers/answer25.c":I,"./topic6_files/answers/answer26.c":O,"./topic6_files/answers/answer27.c":k,"./topic6_files/answers/answer28.c":T,"./topic6_files/answers/answer29.c":P,"./topic6_files/answers/answer3.c":E,"./topic6_files/answers/answer30.c":z,"./topic6_files/answers/answer31.c":D,"./topic6_files/answers/answer32.c":B,"./topic6_files/answers/answer33.c":q,"./topic6_files/answers/answer34.c":F,"./topic6_files/answers/answer35.c":L,"./topic6_files/answers/answer4.c":Y,"./topic6_files/answers/answer5.c":V,"./topic6_files/answers/answer6.c":K,"./topic6_files/answers/answer7.c":W,"./topic6_files/answers/answer8.c":G,"./topic6_files/answers/answer9.c":U}),a={};Object.keys(t).forEach(r=>{const o=r.split("/").pop();a[o]=t[r]});const d=c.projects.map(r=>{const e=(r.answerFile||"").split("/").pop(),s=a[e];return s||console.warn(`⚠ Missing C answer file: ${e}`),{...r,answer:s||`// Source file "${e}" not found in answers folder`}});m({...c,projects:d})},[]),i?n.jsx(u,{data:i}):n.jsx("div",{className:"p-6 text-slate-400 flex items-center justify-center min-h-[300px]",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-5 h-5 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),n.jsx("span",{children:"Loading DSA Array & Matrix Practical Lab Projects..."})]})})}export{ar as default};
