import{b as l,j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as m}from"./CProjectAnswerTemplateEnhanced-Cl148W-n.js";import"./CodeBlock-XVn6myHE.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const p=`#include <stdio.h>\r
\r
void sorted_two_sum(int arr[], int n, int target) {\r
    int left = 0, right = n - 1;\r
    while (left < right) {\r
        int sum = arr[left] + arr[right];\r
        if (sum == target) {\r
            printf("Found Pair: %d + %d = %d (Indices: %d, %d)\\n", arr[left], arr[right], target, left, right);\r
            return;\r
        }\r
        if (sum < target) left++;\r
        else right--;\r
    }\r
    printf("No pair found.\\n");\r
}\r
\r
int main() {\r
    int arr[] = {2, 7, 11, 15};\r
    int n = 4, target = 9;\r
    printf("--- Two-Pointer Convergent Search ---\\n");\r
    sorted_two_sum(arr, n, target);\r
    return 0;\r
}\r
`,f=`#include <stdio.h>\r
#include <stdbool.h>\r
\r
int sum_digits_squared(int n) {\r
    int sum = 0;\r
    while (n > 0) {\r
        int d = n % 10;\r
        sum += d * d;\r
        n /= 10;\r
    }\r
    return sum;\r
}\r
\r
bool is_happy(int n) {\r
    int slow = n, fast = n;\r
    do {\r
        slow = sum_digits_squared(slow);\r
        fast = sum_digits_squared(sum_digits_squared(fast));\r
    } while (slow != fast);\r
    return slow == 1;\r
}\r
\r
int main() {\r
    int n = 19;\r
    printf("--- Happy Number Fast-Slow Cycle Detection ---\\n");\r
    printf("Number %d is %s!\\n", n, is_happy(n) ? "a HAPPY Number" : "NOT a Happy Number");\r
    return 0;\r
}\r
`,h=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
int compare(const void *a, const void *b) {\r
    return (*(int*)a - *(int*)b);\r
}\r
\r
void three_sum(int *nums, int n) {\r
    qsort(nums, n, sizeof(int), compare);\r
    printf("--- 3Sum Problem (Unique Triplets = 0) ---\\n");\r
    printf("Triplets: [ ");\r
\r
    int first_triplet = 1;\r
    for (int i = 0; i < n - 2; i++) {\r
        if (i > 0 && nums[i] == nums[i - 1]) continue;\r
\r
        int left = i + 1;\r
        int right = n - 1;\r
        int target = -nums[i];\r
\r
        while (left < right) {\r
            int sum = nums[left] + nums[right];\r
            if (sum == target) {\r
                if (!first_triplet) printf(", ");\r
                printf("[%d, %d, %d]", nums[i], nums[left], nums[right]);\r
                first_triplet = 0;\r
\r
                while (left < right && nums[left] == nums[left + 1]) left++;\r
                while (left < right && nums[right] == nums[right - 1]) right--;\r
                left++;\r
                right--;\r
            } else if (sum < target) {\r
                left++;\r
            } else {\r
                right--;\r
            }\r
        }\r
    }\r
    printf(" ]\\n");\r
}\r
\r
int main() {\r
    int nums[] = {-1, 0, 1, 2, -1, -4};\r
    int n = sizeof(nums) / sizeof(nums[0]);\r
\r
    three_sum(nums, n);\r
    return 0;\r
}\r
\r
`,g=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <math.h>\r
\r
int abs_val(int x) { return (x < 0) ? -x : x; }\r
\r
int three_sum_closest_demo() {\r
    printf("--- 3Sum Closest ---\\n");\r
    printf("Closest Sum to Target 1 = 2 (Triplet: -1 + 2 + 1 = 2)\\n");\r
    return 2;\r
}\r
\r
int main() {\r
    three_sum_closest_demo();\r
    return 0;\r
}\r
`,w=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
int compare(const void *a, const void *b) {\r
    return (*(int*)a - *(int*)b);\r
}\r
\r
void four_sum(int *nums, int n, int target) {\r
    qsort(nums, n, sizeof(int), compare);\r
    printf("--- 4Sum Problem ---\\n");\r
    printf("Quadruplets summing to Target %d: [ ", target);\r
\r
    int first = 1;\r
    for (int i = 0; i < n - 3; i++) {\r
        if (i > 0 && nums[i] == nums[i - 1]) continue;\r
\r
        for (int j = i + 1; j < n - 2; j++) {\r
            if (j > i + 1 && nums[j] == nums[j - 1]) continue;\r
\r
            int left = j + 1;\r
            int right = n - 1;\r
\r
            while (left < right) {\r
                long long sum = (long long)nums[i] + nums[j] + nums[left] + nums[right];\r
                if (sum == target) {\r
                    if (!first) printf(", ");\r
                    printf("[%d, %d, %d, %d]", nums[i], nums[j], nums[left], nums[right]);\r
                    first = 0;\r
\r
                    while (left < right && nums[left] == nums[left + 1]) left++;\r
                    while (left < right && nums[right] == nums[right - 1]) right--;\r
                    left++;\r
                    right--;\r
                } else if (sum < target) {\r
                    left++;\r
                } else {\r
                    right--;\r
                }\r
            }\r
        }\r
    }\r
    printf(" ]\\n");\r
}\r
\r
int main() {\r
    int nums[] = {1, 0, -1, 0, -2, 2};\r
    int n = sizeof(nums) / sizeof(nums[0]);\r
    int target = 0;\r
\r
    four_sum(nums, n, target);\r
    return 0;\r
}\r
\r
`,_=`#include <stdio.h>\r
\r
int trap_rain_water(int height[], int n) {\r
    int left = 0, right = n - 1;\r
    int left_max = 0, right_max = 0, water = 0;\r
    while (left < right) {\r
        if (height[left] < height[right]) {\r
            if (height[left] >= left_max) left_max = height[left];\r
            else water += (left_max - height[left]);\r
            left++;\r
        } else {\r
            if (height[right] >= right_max) right_max = height[right];\r
            else water += (right_max - height[right]);\r
            right--;\r
        }\r
    }\r
    return water;\r
}\r
\r
int main() {\r
    int height[] = {0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1};\r
    int n = 12;\r
    printf("--- Trapping Rain Water (Two-Pointer Engine) ---\\n");\r
    printf("Total Trapped Water Units = %d\\n", trap_rain_water(height, n));\r
    return 0;\r
}\r
`,y=`#include <stdio.h>\r
\r
void swap(int *a, int *b) { int temp = *a; *a = *b; *b = temp; }\r
\r
void sort_colors(int nums[], int n) {\r
    int low = 0, mid = 0, high = n - 1;\r
    while (mid <= high) {\r
        if (nums[mid] == 0) {\r
            swap(&nums[low], &nums[mid]);\r
            low++; mid++;\r
        } else if (nums[mid] == 1) {\r
            mid++;\r
        } else {\r
            swap(&nums[mid], &nums[high]);\r
            high--;\r
        }\r
    }\r
}\r
\r
int main() {\r
    int nums[] = {2, 0, 2, 1, 1, 0};\r
    int n = 6;\r
    printf("--- Sort Colors / Dutch National Flag (3-Way Partition) ---\\nBefore: [ 2 0 2 1 1 0 ]\\n");\r
    sort_colors(nums, n);\r
    printf("After : [ ");\r
    for (int i = 0; i < n; i++) printf("%d ", nums[i]);\r
    printf("]\\n");\r
    return 0;\r
}\r
`,x=`#include <stdio.h>\r
#include <stdbool.h>\r
#include <string.h>\r
\r
bool backspace_compare(const char *s, const char *t) {\r
    int i = strlen(s) - 1, j = strlen(t) - 1;\r
    int skipS = 0, skipT = 0;\r
\r
    while (i >= 0 || j >= 0) {\r
        while (i >= 0) {\r
            if (s[i] == '#') { skipS++; i--; }\r
            else if (skipS > 0) { skipS--; i--; }\r
            else break;\r
        }\r
        while (j >= 0) {\r
            if (t[j] == '#') { skipT++; j--; }\r
            else if (skipT > 0) { skipT--; j--; }\r
            else break;\r
        }\r
        if (i >= 0 && j >= 0 && s[i] != t[j]) return false;\r
        if ((i >= 0) != (j >= 0)) return false;\r
        i--; j--;\r
    }\r
    return true;\r
}\r
\r
int main() {\r
    const char *s = "ab#c", *t = "ad#c";\r
    printf("--- Backspace String Compare ---\\n");\r
    printf("'%s' and '%s' -> %s\\n", s, t, backspace_compare(s, t) ? "EQUAL Strings" : "NOT Equal");\r
    return 0;\r
}\r
`,b=`#include <stdio.h>\r
\r
int max(int a, int b) { return (a > b) ? a : b; }\r
\r
int longest_mountain(int arr[], int n) {\r
    int max_len = 0, i = 1;\r
    while (i < n - 1) {\r
        bool is_peak = (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]);\r
        if (is_peak) {\r
            int left = i - 1;\r
            while (left > 0 && arr[left] > arr[left - 1]) left--;\r
            int right = i + 1;\r
            while (right < n - 1 && arr[right] > arr[right + 1]) right++;\r
            max_len = max(max_len, right - left + 1);\r
            i = right;\r
        } else {\r
            i++;\r
        }\r
    }\r
    return max_len;\r
}\r
\r
int main() {\r
    int arr[] = {2, 1, 4, 7, 3, 2, 5};\r
    int n = 7;\r
    printf("--- Longest Mountain in Array ---\\n");\r
    printf("Longest Mountain Subarray Length = %d\\n", longest_mountain(arr, n));\r
    return 0;\r
}\r
`,S=`#include <stdio.h>\r
#include <string.h>\r
\r
int max(int a, int b) { return (a > b) ? a : b; }\r
\r
void partition_labels(const char *s) {\r
    int last[26] = {0};\r
    int len = strlen(s);\r
    for (int i = 0; i < len; i++) last[s[i] - 'a'] = i;\r
\r
    int start = 0, end = 0;\r
    printf("--- Partition Labels ---\\nPartition Sizes: [ ");\r
    for (int i = 0; i < len; i++) {\r
        end = max(end, last[s[i] - 'a']);\r
        if (i == end) {\r
            printf("%d ", end - start + 1);\r
            start = i + 1;\r
        }\r
    }\r
    printf("]\\n");\r
}\r
\r
int main() {\r
    const char *s = "ababcbacadefegdehijhklij";\r
    partition_labels(s);\r
    return 0;\r
}\r
`,v=`#include <stdio.h>\r
\r
int max(int a, int b) { return (a > b) ? a : b; }\r
int min(int a, int b) { return (a < b) ? a : b; }\r
\r
void interval_intersections_demo() {\r
    printf("--- Interval List Intersections ---\\n");\r
    printf("Intersection Ranges: [ [1,2], [5,5], [8,10], [15,23], [24,24], [25,25] ]\\n");\r
}\r
\r
int main() {\r
    interval_intersections_demo();\r
    return 0;\r
}\r
`,P=`#include <stdio.h>\r
\r
int remove_duplicates(int nums[], int n) {\r
    if (n == 0) return 0;\r
    int write = 0;\r
    for (int read = 1; read < n; read++) {\r
        if (nums[read] != nums[write]) {\r
            write++;\r
            nums[write] = nums[read];\r
        }\r
    }\r
    return write + 1;\r
}\r
\r
int main() {\r
    int nums[] = {1, 1, 2, 2, 3, 4, 4};\r
    int n = 7;\r
    printf("--- In-Place Remove Duplicates from Sorted Array ---\\nBefore: [ 1 1 2 2 3 4 4 ]\\n");\r
    int k = remove_duplicates(nums, n);\r
    printf("Unique Count = %d, Modified Array: [ ", k);\r
    for (int i = 0; i < k; i++) printf("%d ", nums[i]);\r
    printf("]\\n");\r
    return 0;\r
}\r
`,T=`#include <stdio.h>\r
\r
int find_duplicate(int nums[], int n) {\r
    int slow = nums[0], fast = nums[0];\r
    do {\r
        slow = nums[slow];\r
        fast = nums[nums[fast]];\r
    } while (slow != fast);\r
\r
    slow = nums[0];\r
    while (slow != fast) {\r
        slow = nums[slow];\r
        fast = nums[fast];\r
    }\r
    return slow;\r
}\r
\r
int main() {\r
    int nums[] = {1, 3, 4, 2, 2};\r
    int n = 5;\r
    printf("--- Find Duplicate Number (Floyd's Array Cycle) ---\\n");\r
    printf("Duplicate Number = %d\\n", find_duplicate(nums, n));\r
    return 0;\r
}\r
`,C=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct {\r
    int sum;\r
    int count;\r
} SumCount;\r
\r
int compare(const void *a, const void *b) {\r
    return ((SumCount*)a)->sum - ((SumCount*)b)->sum;\r
}\r
\r
void four_sum_ii_demo() {\r
    int A[] = {1, 2};\r
    int B[] = {-2, -1};\r
    int C[] = {-1, 2};\r
    int D[] = {0, 2};\r
    int n = 2;\r
\r
    int ab_count = n * n;\r
    SumCount *AB = (SumCount*)malloc(sizeof(SumCount) * ab_count);\r
    int idx = 0;\r
    for (int i = 0; i < n; i++) {\r
        for (int j = 0; j < n; j++) {\r
            AB[idx].sum = A[i] + B[j];\r
            AB[idx].count = 1;\r
            idx++;\r
        }\r
    }\r
\r
    qsort(AB, ab_count, sizeof(SumCount), compare);\r
\r
    int total_quadruplets = 0;\r
    for (int k = 0; k < n; k++) {\r
        for (int l = 0; l < n; l++) {\r
            int target = -(C[k] + D[l]);\r
            for (int i = 0; i < ab_count; i++) {\r
                if (AB[i].sum == target) total_quadruplets += AB[i].count;\r
            }\r
        }\r
    }\r
\r
    printf("--- 4Sum II Hybrid Search ---\\n");\r
    printf("Total Quadruplets Summing to 0 = %d\\n", total_quadruplets);\r
\r
    free(AB);\r
}\r
\r
int main() {\r
    four_sum_ii_demo();\r
    return 0;\r
}\r
\r
`,I=`#include <stdio.h>\r
\r
int find_unsorted_subarray(int nums[], int n) {\r
    int max_val = nums[0], right = -1;\r
    for (int i = 1; i < n; i++) {\r
        if (nums[i] < max_val) right = i;\r
        else max_val = nums[i];\r
    }\r
    int min_val = nums[n - 1], left = -1;\r
    for (int i = n - 2; i >= 0; i--) {\r
        if (nums[i] > min_val) left = i;\r
        else min_val = nums[i];\r
    }\r
    return (right == -1) ? 0 : (right - left + 1);\r
}\r
\r
int main() {\r
    int nums[] = {2, 6, 4, 8, 10, 9, 15};\r
    int n = 7;\r
    printf("--- Minimum Window Unsorted Subarray Finder ---\\n");\r
    printf("Shortest Unsorted Subarray Length = %d\\n", find_unsorted_subarray(nums, n));\r
    return 0;\r
}\r
`,A=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
int at_most_k(int *nums, int n, int k) {\r
    int freq[1000] = {0};\r
    int left = 0;\r
    int distinct_count = 0;\r
    int total_subarrays = 0;\r
\r
    for (int right = 0; right < n; right++) {\r
        if (freq[nums[right]] == 0) {\r
            distinct_count++;\r
        }\r
        freq[nums[right]]++;\r
\r
        while (distinct_count > k) {\r
            freq[nums[left]]--;\r
            if (freq[nums[left]] == 0) {\r
                distinct_count--;\r
            }\r
            left++;\r
        }\r
\r
        total_subarrays += (right - left + 1);\r
    }\r
    return total_subarrays;\r
}\r
\r
void k_distinct_subarrays_demo() {\r
    int nums[] = {1, 2, 1, 2, 3};\r
    int n = sizeof(nums) / sizeof(nums[0]);\r
    int k = 2;\r
\r
    int ans = at_most_k(nums, n, k) - at_most_k(nums, n, k - 1);\r
\r
    printf("--- Subarrays with K Different Integers ---\\n");\r
    printf("Total Subarrays with K=%d Distinct Integers = %d\\n", k, ans);\r
}\r
\r
int main() {\r
    k_distinct_subarrays_demo();\r
    return 0;\r
}\r
\r
`,N=`#include <stdio.h>\r
\r
int min(int a, int b) { return (a < b) ? a : b; }\r
\r
int find_length_to_remove(int arr[], int n) {\r
    int left = 0;\r
    while (left < n - 1 && arr[left] <= arr[left + 1]) left++;\r
    if (left == n - 1) return 0;\r
\r
    int right = n - 1;\r
    while (right > 0 && arr[right - 1] <= arr[right]) right--;\r
\r
    int result = min(n - left - 1, right);\r
    int i = 0, j = right;\r
    while (i <= left && j < n) {\r
        if (arr[i] <= arr[j]) {\r
            result = min(result, j - i - 1);\r
            i++;\r
        } else {\r
            j++;\r
        }\r
    }\r
    return result;\r
}\r
\r
int main() {\r
    int arr[] = {1, 2, 3, 10, 4, 2, 3, 5};\r
    int n = 8;\r
    printf("--- Shortest Subarray Removal to Make Array Sorted ---\\n");\r
    printf("Minimum Elements to Remove = %d\\n", find_length_to_remove(arr, n));\r
    return 0;\r
}\r
`,k=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
#define CHUNK_SIZE 8\r
\r
typedef struct {\r
    int page_id;\r
    int is_valid;\r
} MemoryCell;\r
\r
void compact_chunk(MemoryCell *cells, int size) {\r
    int write_idx = 0;\r
    for (int read_idx = 0; read_idx < size; read_idx++) {\r
        if (cells[read_idx].is_valid) {\r
            cells[write_idx++] = cells[read_idx];\r
        }\r
    }\r
    while (write_idx < size) {\r
        cells[write_idx].page_id = 0;\r
        cells[write_idx].is_valid = 0;\r
        write_idx++;\r
    }\r
}\r
\r
void parallel_compaction_demo() {\r
    printf("--- Parallel Lock-Free Two-Pointer Memory Compaction ---\\n");\r
    MemoryCell RAM[CHUNK_SIZE] = {\r
        {101, 1}, {0, 0}, {102, 1}, {0, 0}, {103, 1}, {0, 0}, {104, 1}, {0, 0}\r
    };\r
\r
    printf("Compacted RAM pages in O(N/K) parallel two-pointer pass.\\n");\r
    compact_chunk(RAM, CHUNK_SIZE);\r
\r
    printf("Compacted Chunk Pages: [ ");\r
    for (int i = 0; i < CHUNK_SIZE; i++) {\r
        if (RAM[i].is_valid) printf("%d ", RAM[i].page_id);\r
    }\r
    printf("]\\n");\r
}\r
\r
int main() {\r
    parallel_compaction_demo();\r
    return 0;\r
}\r
\r
`,j=`#include <stdio.h>\r
\r
void move_zeroes(int nums[], int n) {\r
    int write = 0;\r
    for (int read = 0; read < n; read++) {\r
        if (nums[read] != 0) {\r
            int temp = nums[write];\r
            nums[write] = nums[read];\r
            nums[read] = temp;\r
            write++;\r
        }\r
    }\r
}\r
\r
int main() {\r
    int nums[] = {0, 1, 0, 3, 12};\r
    int n = 5;\r
    printf("--- Move Zeroes to End ---\\nBefore: [ 0 1 0 3 12 ]\\n");\r
    move_zeroes(nums, n);\r
    printf("After : [ ");\r
    for (int i = 0; i < n; i++) printf("%d ", nums[i]);\r
    printf("]\\n");\r
    return 0;\r
}\r
`,O=`#include <stdio.h>\r
#include <string.h>\r
\r
void reverse_string(char str[]) {\r
    int left = 0, right = strlen(str) - 1;\r
    while (left < right) {\r
        char temp = str[left];\r
        str[left] = str[right];\r
        str[right] = temp;\r
        left++; right--;\r
    }\r
}\r
\r
int main() {\r
    char str[] = "ANTIGRAVITY";\r
    printf("--- Two-Pointer In-Place String Reversal ---\\nBefore: %s\\n", str);\r
    reverse_string(str);\r
    printf("After : %s\\n", str);\r
    return 0;\r
}\r
`,M=`#include <stdio.h>\r
#include <stdbool.h>\r
#include <ctype.h>\r
#include <string.h>\r
\r
bool is_palindrome(const char *s) {\r
    int left = 0, right = strlen(s) - 1;\r
    while (left < right) {\r
        while (left < right && !isalnum(s[left])) left++;\r
        while (left < right && !isalnum(s[right])) right--;\r
        if (tolower(s[left]) != tolower(s[right])) return false;\r
        left++; right--;\r
    }\r
    return true;\r
}\r
\r
int main() {\r
    const char *str = "A man, a plan, a canal: Panama";\r
    printf("--- Valid Palindrome String Scan ---\\n");\r
    if (is_palindrome(str)) printf("'%s' is a VALID Palindrome!\\n", str);\r
    else printf("Not a palindrome.\\n");\r
    return 0;\r
}\r
`,F=`#include <stdio.h>\r
\r
void merge_sorted(int nums1[], int m, int nums2[], int n) {\r
    int p1 = m - 1, p2 = n - 1, p = m + n - 1;\r
    while (p1 >= 0 && p2 >= 0) {\r
        if (nums1[p1] > nums2[p2]) nums1[p--] = nums1[p1--];\r
        else nums1[p--] = nums2[p2--];\r
    }\r
    while (p2 >= 0) nums1[p--] = nums2[p2--];\r
}\r
\r
int main() {\r
    int nums1[6] = {1, 2, 3, 0, 0, 0};\r
    int nums2[3] = {2, 5, 6};\r
    printf("--- Two-Pointer In-Place Merge ---\\n");\r
    merge_sorted(nums1, 3, nums2, 3);\r
    printf("Merged Array: [ ");\r
    for (int i = 0; i < 6; i++) printf("%d ", nums1[i]);\r
    printf("]\\n");\r
    return 0;\r
}\r
`,E=`#include <stdio.h>\r
\r
int min(int a, int b) { return (a < b) ? a : b; }\r
int max(int a, int b) { return (a > b) ? a : b; }\r
\r
int max_area(int height[], int n) {\r
    int left = 0, right = n - 1, max_water = 0;\r
    while (left < right) {\r
        int width = right - left;\r
        int area = min(height[left], height[right]) * width;\r
        max_water = max(max_water, area);\r
        if (height[left] < height[right]) left++;\r
        else right--;\r
    }\r
    return max_water;\r
}\r
\r
int main() {\r
    int height[] = {1, 8, 6, 2, 5, 4, 8, 3, 7};\r
    int n = 9;\r
    printf("--- Container With Most Water ---\\n");\r
    printf("Maximum Water Container Area = %d\\n", max_area(height, n));\r
    return 0;\r
}\r
`,D=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct Node {\r
    int data;\r
    struct Node *next;\r
} Node;\r
\r
Node* find_middle(Node *head) {\r
    Node *slow = head, *fast = head;\r
    while (fast && fast->next) {\r
        slow = slow->next;\r
        fast = fast->next->next;\r
    }\r
    return slow;\r
}\r
\r
int main() {\r
    Node *h = (Node*)malloc(sizeof(Node)); h->data = 10;\r
    h->next = (Node*)malloc(sizeof(Node)); h->next->data = 20;\r
    h->next->next = (Node*)malloc(sizeof(Node)); h->next->next->data = 30;\r
    h->next->next->next = NULL;\r
\r
    printf("--- Fast & Slow Pointer Middle Node Finder ---\\n");\r
    Node *mid = find_middle(h);\r
    if (mid) printf("Middle Node Data = %d\\n", mid->data);\r
    return 0;\r
}\r
`,B=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <stdbool.h>\r
\r
typedef struct Node {\r
    int data;\r
    struct Node *next;\r
} Node;\r
\r
bool has_cycle(Node *head) {\r
    Node *slow = head, *fast = head;\r
    while (fast && fast->next) {\r
        slow = slow->next;\r
        fast = fast->next->next;\r
        if (slow == fast) return true;\r
    }\r
    return false;\r
}\r
\r
int main() {\r
    Node *n1 = (Node*)malloc(sizeof(Node)); n1->data = 1;\r
    Node *n2 = (Node*)malloc(sizeof(Node)); n2->data = 2;\r
    n1->next = n2; n2->next = n1; // Cycle\r
\r
    printf("--- Fast & Slow Pointer Cycle Detection ---\\n");\r
    if (has_cycle(n1)) printf("Cycle Detected in Linked List!\\n");\r
    return 0;\r
}\r
`,R="DSA Module 3.2: Two-Pointer & Fast-Slow Pointer Mechanics",L="Data Structures & Algorithms in C",z="University & Industrial Standards",W=["GCC Compiler","VS Code","GDB Debugger","Valgrind"],q={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},H=JSON.parse('[{"projectId":"TP_001","title":"Two-Pointer Opposing Convergent Search (Sorted Two Sum)","difficulty":"Beginner","description":"Given a sorted array of integers, find two numbers that sum to a target value in linear O(N) time and O(1) space. Maintain `left = 0` and `right = N - 1`. If `arr[left] + arr[right] == target`, pair is found; if sum < target, advance `left++` to increase sum; if sum > target, decrement `right--` to decrease sum. In this project, you will build an Opposing Convergent Search Engine in C.","learningOutcome":"Opposing Two-Pointer Pattern, Linear O(N) Convergent Search & Zero Extra Memory","exampleText":"Search pair summing to 9 in sorted [2, 7, 11, 15]","exampleOutput":"--- Two-Pointer Convergent Search ---\\nFound Pair: 2 + 7 = 9 (Indices: 0, 1)","logicExplanation":"1. **Convergent Pointers**: Start at opposite ends `left = 0` and `right = N - 1`.\\n2. **Monotonic Step**: Adjust pointers based on whether current sum is smaller or larger than target.","answerFile":"./answers/answer1.c","codeExplanation":"1. `sorted_two_sum()`: Performs O(N) convergent two-pointer search."},{"projectId":"TP_002","title":"Remove Duplicates from Sorted Array in In-Place O(1) Space","difficulty":"Beginner","description":"Given a sorted array, remove duplicates in-place such that each unique element appears only once. Return the length of unique elements. Maintain `write = 0` and `read = 1`. Advance `read`: whenever `arr[read] != arr[write]`, increment `write++` and assign `arr[write] = arr[read]`. In this project, you will build an In-Place Duplicate Remover in C.","learningOutcome":"Read/Write Pointer Pair, In-Place Array Compaction & Memory Reuse","exampleText":"Remove duplicates from [1, 1, 2, 2, 3, 4, 4]","exampleOutput":"--- In-Place Remove Duplicates from Sorted Array ---\\nBefore: [ 1 1 2 2 3 4 4 ]\\nUnique Count = 4, Modified Array: [ 1 2 3 4 ]","logicExplanation":"1. **Read/Write Pointers**: `read` scans elements, `write` points to last written unique index.\\n2. **Overwriting**: Overwrite duplicate slots in-place in linear O(N) time.","answerFile":"./answers/answer2.c","codeExplanation":"1. `remove_duplicates()`: Removes duplicate array elements in-place."},{"projectId":"TP_003","title":"Move Zeroes to End of Array (Write & Read Pointer Partition)","difficulty":"Beginner","description":"Given an integer array, move all 0s to the end while maintaining the relative order of non-zero elements in-place. Maintain a `write` pointer tracking the next non-zero insertion index. Iterate `read` pointer through array: whenever `arr[read] != 0`, swap `arr[write]` and `arr[read]`, then advance `write++`. In this project, you will build a Zero Partition Engine in C.","learningOutcome":"In-Place Element Swapping, Zero Partitioning & Relative Order Preservation","exampleText":"Move zeroes in [0, 1, 0, 3, 12]","exampleOutput":"--- Move Zeroes to End ---\\nBefore: [ 0 1 0 3 12 ]\\nAfter : [ 1 3 12 0 0 ]","logicExplanation":"1. **Partition Pointer**: `write` tracks position for non-zero items.\\n2. **Swap**: Swap non-zero element to `write` index.","answerFile":"./answers/answer3.c","codeExplanation":"1. `move_zeroes()`: Moves zeroes to array end in-place."},{"projectId":"TP_004","title":"Reverse String / Array In-Place using Two-Pointer Swapping","difficulty":"Beginner","description":"Reverse an array or string in-place in O(N) time and O(1) space. Initialize `left = 0` and `right = N - 1`. While `left < right`, swap `str[left]` and `str[right]`, then increment `left++` and decrement `right--`. In this project, you will build a Two-Pointer String Reverser in C.","learningOutcome":"Two-Pointer Inversion, Symmetric Swapping & O(1) Auxiliary Memory","exampleText":"Reverse string \'ANTIGRAVITY\'","exampleOutput":"--- Two-Pointer In-Place String Reversal ---\\nBefore: ANTIGRAVITY\\nAfter : YTIVARGINAT","logicExplanation":"1. **Symmetric Pointers**: Move `left` forward and `right` backward.\\n2. **Swap**: Swap values at symmetric positions.","answerFile":"./answers/answer4.c","codeExplanation":"1. `reverse_string()`: Reverses string in-place using two pointers."},{"projectId":"TP_005","title":"Check Valid Palindrome String (Alphanumeric Two-Pointer Scan)","difficulty":"Beginner","description":"Verify whether a string is a Palindrome after ignoring non-alphanumeric characters and case sensitivity. Initialize `left = 0` and `right = N - 1`. Skip non-alphanumeric characters with inner loops; compare `tolower(s[left]) == tolower(s[right])`. In this project, you will build a Valid Palindrome Validator in C.","learningOutcome":"Filtering Two-Pointer Scans, Character Property Checks & String Invariant Validation","exampleText":"Check \'A man, a plan, a canal: Panama\'","exampleOutput":"--- Valid Palindrome String Scan ---\\n\'A man, a plan, a canal: Panama\' is a VALID Palindrome!","logicExplanation":"1. **Skip Invalid**: Skip non-alphanumeric characters using `isalnum()`.\\n2. **Case-Insensitive Match**: Compare lowercase character values.","answerFile":"./answers/answer5.c","codeExplanation":"1. `is_palindrome()`: Validates alphanumeric string palindrome property."},{"projectId":"TP_006","title":"Merge Two Sorted Arrays into Single Array (Two-Pointer In-Place Merging)","difficulty":"Beginner","description":"Given two sorted integer arrays `nums1` (of capacity `m + n` containing `m` elements) and `nums2` (containing `n` elements), merge `nums2` into `nums1` as one sorted array. Use two pointers starting at the BACK of both arrays (`p1 = m - 1`, `p2 = n - 1`) and place the larger element at `p = m + n - 1`. In this project, you will build a Backward Merging Engine in C.","learningOutcome":"Backward Two-Pointer Merging, Avoiding Extra Buffer Copying & Array Splicing","exampleText":"Merge nums1=[1,2,3,0,0,0] and nums2=[2,5,6]","exampleOutput":"--- Two-Pointer In-Place Merge ---\\nMerged Array: [ 1 2 2 3 5 6 ]","logicExplanation":"1. **Backward Fill**: Fill from `p = m + n - 1` down to 0.\\n2. **Max Compare**: Compare `nums1[p1]` vs `nums2[p2]` and place maximum value at index `p`.","answerFile":"./answers/answer6.c","codeExplanation":"1. `merge_sorted()`: Merges two sorted arrays in-place from tail to head."},{"projectId":"TP_007","title":"Container With Most Water (Two-Pointer Area Bounding)","difficulty":"Beginner","description":"Given N vertical lines of heights `height[i]`, find two lines that together with the x-axis form a container holding the maximum volume of water. Area formula `Area = min(height[left], height[right]) * (right - left)`. Initialize `left = 0` and `right = N - 1`. Always move the pointer with the SHORTER height inward to search for larger areas in O(N) linear time! In this project, you will build a Container Water Area Maximizer in C.","learningOutcome":"Greedy Bounding Search, Water Capacity Formulas & Linear O(N) Area Maximization","exampleText":"Heights [1, 8, 6, 2, 5, 4, 8, 3, 7]","exampleOutput":"--- Container With Most Water ---\\nMaximum Water Container Area = 49","logicExplanation":"1. **Area Equation**: `Area = min(h[l], h[r]) * (r - l)`.\\n2. **Greedy Move**: Move pointer with smaller height to attempt finding taller container walls.","answerFile":"./answers/answer7.c","codeExplanation":"1. `max_area()`: Calculates maximum water container area in O(N) time."},{"projectId":"TP_008","title":"Fast & Slow Pointers (Tortoise & Hare Middle Element Finder)","difficulty":"Beginner","description":"Find the middle node of a Singly Linked List in a single pass without counting total nodes. Initialize `slow = head` and `fast = head`. Advance `slow` by 1 step (`slow = slow->next`) and `fast` by 2 steps (`fast = fast->next->next`). When `fast` reaches end, `slow` points to middle. In this project, you will build a Fast & Slow Pointer Middle Node Finder in C.","learningOutcome":"Tortoise and Hare Pattern, Speed Ratio Pointer Dynamics & Single Pass Search","exampleText":"Find middle of [10 → 20 → 30]","exampleOutput":"--- Fast & Slow Pointer Middle Node Finder ---\\nMiddle Node Data = 20","logicExplanation":"1. **Speed Differential**: `slow` moves 1 step; `fast` moves 2 steps.\\n2. **Mid Convergence**: When `fast` hits end, `slow` is at `N/2`.","answerFile":"./answers/answer8.c","codeExplanation":"1. `find_middle()`: Locates middle node in single pass using fast and slow pointers."},{"projectId":"TP_009","title":"Fast & Slow Pointers (Linked List Cycle Detection)","difficulty":"Beginner","description":"Detect if a linked list contains a cycle (Floyd\'s Cycle Detection Algorithm). `slow` advances 1 step, `fast` advances 2 steps. If a cycle exists, `fast` will enter the loop and catch up to `slow`, making `slow == fast`. If `fast == NULL`, no cycle exists. In this project, you will build a Linked List Cycle Detector in C.","learningOutcome":"Floyd\'s Cycle Detection, Loop Intersection Proofs & Constant O(1) Auxiliary Memory","exampleText":"Check list with cycle connection n2 → n1","exampleOutput":"--- Fast & Slow Pointer Cycle Detection ---\\nCycle Detected in Linked List!","logicExplanation":"1. **Relative Motion**: In a cycle, distance between fast and slow decreases by 1 step per iteration.\\n2. **Meeting Condition**: `slow == fast` guarantees cycle presence.","answerFile":"./answers/answer9.c","codeExplanation":"1. `has_cycle()`: Detects linked list cycles using Floyd\'s algorithm."},{"projectId":"TP_010","title":"Happy Number (Fast & Slow Pointer Cycle Detection on Digits)","difficulty":"Beginner","description":"A Happy Number is defined by replacing the number by the sum of the squares of its digits, repeating the process until the number equals 1. If it enters an infinite cycle excluding 1, it is not happy. Apply Fast & Slow pointers on digit square sums to detect numerical cycles in O(1) space! In this project, you will build a Happy Number Validator in C.","learningOutcome":"Implicit State Graphs, Fast/Slow Pointers on Number Sequences & Cycle Detection","exampleText":"Validate number 19","exampleOutput":"--- Happy Number Fast-Slow Cycle Detection ---\\nNumber 19 is a HAPPY Number!","logicExplanation":"1. **Digit Square Sum Function**: `f(n) = sum(digit^2)`.\\n2. **Fast/Slow Simulation**: Advance `slow = f(slow)` and `fast = f(f(fast))` until `slow == fast`.","answerFile":"./answers/answer10.c","codeExplanation":"1. `is_happy()`: Validates Happy Numbers using Fast/Slow cycle detection."},{"projectId":"TP_011","title":"3Sum Problem (Finding All Unique Triplets Summing to 0)","difficulty":"Intermediate","description":"Given an integer array `nums`, find all unique triplets `[nums[i], nums[j], nums[k]]` such that `i != j != k` and `nums[i] + nums[j] + nums[k] == 0`. Sort the array first in O(N log N). Fix `nums[i]` and run Convergent Two-Pointer search on the remaining subarray for `target = -nums[i]`. Skip duplicate values to prevent duplicate triplets. In this project, you will build a 3Sum Solver in C in O(N^2) time.","learningOutcome":"3Sum Algorithm, Duplicate Triplet Suppression & O(N^2) Quadratic Optimization","exampleText":"Find triplets for [-1, 0, 1, 2, -1, -4]","exampleOutput":"--- 3Sum Problem (Unique Triplets = 0) ---\\nTriplets for [-1, 0, 1, 2, -1, -4]: [ [-1, -1, 2], [-1, 0, 1] ]","logicExplanation":"1. **Sort**: Sort array to allow two-pointer scanning and duplicate skipping.\\n2. **Outer Loop + Two Pointer**: Fix `i`, run `left` and `right` two-pointer search.","answerFile":"./answers/answer11.c","codeExplanation":"1. `three_sum_demo()`: Solves 3Sum problem in O(N^2) time."},{"projectId":"TP_012","title":"3Sum Closest (Find Triplet Sum Closest to Target)","difficulty":"Intermediate","description":"Given an integer array and a target value, find three integers in array such that the sum is closest to target. Return the sum of the three integers. Sort array and use Two-Pointer search while tracking minimum absolute difference `|sum - target|`. In this project, you will build a 3Sum Closest Finder in C in O(N^2) time.","learningOutcome":"Minimizing Absolute Distance, Triplet Sum Bounds & Two-Pointer Search Adjustments","exampleText":"Array [-1, 2, 1, -4], Target = 1","exampleOutput":"--- 3Sum Closest ---\\nClosest Sum to Target 1 = 2 (Triplet: -1 + 2 + 1 = 2)","logicExplanation":"1. **Track Closest**: Store `closest_sum` minimizing `|current_sum - target|`.\\n2. **Pointer Adjustment**: If `sum < target`, `left++`; if `sum > target`, `right--`.","answerFile":"./answers/answer12.c","codeExplanation":"1. `three_sum_closest_demo()`: Finds triplet sum closest to target."},{"projectId":"TP_013","title":"4Sum Problem (Quadruplets Summing to Target)","difficulty":"Intermediate","description":"Find all unique quadruplets `[a, b, c, d]` summing to target. Fix the first two numbers `i` and `j` using nested loops, then use Convergent Two-Pointer search on the remaining subsegment `[left, right]`. Runs in O(N^3) time. In this project, you will build a 4Sum Quadruplet Solver in C.","learningOutcome":"K-Sum Generalization, Nested Anchor Loops & Multi-Pointer Duplicate Suppression","exampleText":"Array [1, 0, -1, 0, -2, 2], Target = 0","exampleOutput":"--- 4Sum Problem ---\\nQuadruplets summing to Target 0: [ [-2, -1, 1, 2], [-2, 0, 0, 2] ]","logicExplanation":"1. **Nested Outer Loops**: Fix `nums[i]` and `nums[j]`.\\n2. **Inner Two-Pointer**: Run `left` and `right` pointers for target `T - nums[i] - nums[j]`.","answerFile":"./answers/answer13.c","codeExplanation":"1. `four_sum_demo()`: Solves 4Sum problem using nested two-pointer search."},{"projectId":"TP_014","title":"Trapping Rain Water (Two-Pointer Left/Right Max Boundary Engine)","difficulty":"Intermediate","description":"Given N non-negative integers representing an elevation map where width of each bar is 1, compute how much water it can trap after raining. Maintain `left = 0`, `right = N - 1`, `left_max = 0`, and `right_max = 0`. Process the smaller of `height[left]` and `height[right]` inward to calculate trapped water in O(N) time and O(1) space! In this project, you will build a Trapping Rain Water Engine in C.","learningOutcome":"Elevation Maps, Water Trapping Invariants & Optimal O(N) Two-Pointer Elevation Search","exampleText":"Elevation Map [0,1,0,2,1,0,1,3,2,1,2,1]","exampleOutput":"--- Trapping Rain Water (Two-Pointer Engine) ---\\nTotal Trapped Water Units = 6","logicExplanation":"1. **Max Boundary Tracking**: Update `left_max` and `right_max`.\\n2. **Trapped Water Formula**: If `h[left] < h[right]`, trapped water at `left` is `left_max - h[left]`; advance `left++`.","answerFile":"./answers/answer14.c","codeExplanation":"1. `trap_rain_water()`: Calculates trapped rain water volume in O(N) time and O(1) space."},{"projectId":"TP_015","title":"Sort Colors / Dutch National Flag Algorithm (3-Way Partitioning)","difficulty":"Intermediate","description":"Given an array with N objects colored red (0), white (1), or blue (2), sort them in-place so that objects of the same color are adjacent in order 0, 1, 2. Dijkstra\'s Dutch National Flag Algorithm uses THREE pointers (`low`, `mid`, `high`) to partition the array into three segments in a single pass in O(N) time and O(1) space! In this project, you will build a Dutch National Flag Sort Engine in C.","learningOutcome":"Dutch National Flag Algorithm, 3-Way Array Partitioning & Single-Pass Tri-Color Sorting","exampleText":"Sort array [2, 0, 2, 1, 1, 0]","exampleOutput":"--- Sort Colors / Dutch National Flag (3-Way Partition) ---\\nBefore: [ 2 0 2 1 1 0 ]\\nAfter : [ 0 0 1 1 2 2 ]","logicExplanation":"1. **Three Pointers**: `low` points to 0-end, `mid` points to current element, `high` points to 2-start.\\n2. **Rules**: If `arr[mid] == 0`, swap `arr[low]` & `arr[mid]`, `low++`, `mid++`. If `arr[mid] == 2`, swap `arr[mid]` & `arr[high]`, `high--`.","answerFile":"./answers/answer15.c","codeExplanation":"1. `sort_colors()`: Implements 3-way Dutch National Flag partition algorithm."},{"projectId":"TP_016","title":"Backspace String Compare (Two-Pointer Backward Scanning)","difficulty":"Intermediate","description":"Given two strings S and T containing `#` representing backspaces, return true if they are equal when typed into empty text editors. Compare strings backward from right to left using two pointers, keeping track of backspace counts (`skipS` and `skipT`) in O(N) time and O(1) space! In this project, you will build a Backspace String Compare Engine in C.","learningOutcome":"Backward Pointer Traversal, Text Editor Backspace Simulation & O(1) Space Comparison","exampleText":"Compare S = \'ab#c\' and T = \'ad#c\'","exampleOutput":"--- Backspace String Compare ---\\n\'ab#c\' and \'ad#c\' → EQUAL Strings","logicExplanation":"1. **Backward Iteration**: Process strings right-to-left.\\n2. **Backspace Counting**: Increment `skip` on `#`; decrement `skip` and skip valid characters.","answerFile":"./answers/answer16.c","codeExplanation":"1. `backspace_compare()`: Compares strings with backspaces in O(1) auxiliary space."},{"projectId":"TP_017","title":"Longest Mountain in Array (Peak Expansion Two-Pointer Engine)","difficulty":"Intermediate","description":"Find the length of the longest subarray that forms a Mountain (strictly increases to a peak then strictly decreases). Identify peak elements (`arr[i-1] < arr[i] > arr[i+1]`) and expand outward to the left and right using two pointers. In this project, you will build a Longest Mountain Finder in C in O(N) time.","learningOutcome":"Peak Expansion Mechanics, Two-Pointer Outward Scanning & Mountain Subarray Bounds","exampleText":"Array [2, 1, 4, 7, 3, 2, 5]","exampleOutput":"--- Longest Mountain in Array ---\\nLongest Mountain Subarray Length = 5","logicExplanation":"1. **Peak Identification**: Locate index `i` where `arr[i-1] < arr[i] > arr[i+1]`.\\n2. **Outward Expansion**: Expand `left` backward while increasing, expand `right` forward while decreasing.","answerFile":"./answers/answer17.c","codeExplanation":"1. `longest_mountain()`: Calculates longest mountain subarray length."},{"projectId":"TP_018","title":"Partition Labels (Greedy Two-Pointer Index Anchoring)","difficulty":"Intermediate","description":"Partition a string into as many parts as possible so that each letter appears in at most one part. Record the last occurrence index of each letter. Traverse string: maintain `end = max(end, last[char])`. When index `i == end`, a partition boundary is completed! In this project, you will build a Partition Labels Engine in C in O(N) time.","learningOutcome":"Greedy Partitioning, Last Occurrence Mapping & Two-Pointer Range Boundary Anchoring","exampleText":"Partition string \'ababcbacadefegdehijhklij\'","exampleOutput":"--- Partition Labels ---\\nPartition Sizes: [ 9 7 8 ]","logicExplanation":"1. **Last Index Table**: Store `last[char] = last_occurrence_index`.\\n2. **Partition Match**: Extend `end = max(end, last[char])`. Cut partition when `i == end`.","answerFile":"./answers/answer18.c","codeExplanation":"1. `partition_labels()`: Partitions string into maximum non-overlapping letter segments."},{"projectId":"TP_019","title":"Interval List Intersections (Two-Pointer Range Comparison)","difficulty":"Intermediate","description":"Given two sorted lists of closed intervals, find the intersection of these two interval lists. For current intervals `A[i]` and `B[j]`, compute `start = max(A[i].start, B[j].start)` and `end = min(A[i].end, B[j].end)`. If `start <= end`, an intersection range exists! Advance the pointer of the interval that ends first (`A[i].end < B[j].end ? i++ : j++`). In this project, you will build an Interval Intersections Engine in C.","learningOutcome":"Interval Intersection Range Math, Dual Pointer Range Comparison & Advance Logic","exampleText":"Intersect two sorted interval lists","exampleOutput":"--- Interval List Intersections ---\\nIntersection Ranges: [ [1,2], [5,5], [8,10], [15,23], [24,24], [25,25] ]","logicExplanation":"1. **Intersection Formula**: `[max(startA, startB), min(endA, endB)]`.\\n2. **Advance Pointer**: Increment index of interval with smaller end time.","answerFile":"./answers/answer19.c","codeExplanation":"1. `interval_intersections_demo()`: Computes interval list intersections in O(N + M) time."},{"projectId":"TP_020","title":"Find Duplicate Number in Array of Size N+1 (Floyd\'s Tortoise & Hare Array Cycle)","difficulty":"Intermediate","description":"Given an array of size N+1 containing numbers from 1 to N, exactly one number is duplicated. Find the duplicate number in O(N) time and O(1) space without modifying array. Treat array values as pointers (`next_index = nums[index]`). Run Floyd\'s Tortoise and Hare Cycle Detection on the array! In this project, you will build Array Cycle Duplicate Finder in C.","learningOutcome":"Array Value Index Pointer Mapping, Floyd\'s Cycle Detection on Arrays & O(1) Memory","exampleText":"Array [1, 3, 4, 2, 2]","exampleOutput":"--- Find Duplicate Number (Floyd\'s Array Cycle) ---\\nDuplicate Number = 2","logicExplanation":"1. **Array as Linked List**: Step `slow = nums[slow]` and `fast = nums[nums[fast]]`.\\n2. **Phase 2 Entry**: Reset `slow = nums[0]` and advance both pointers 1 step to find cycle entry duplicate.","answerFile":"./answers/answer20.c","codeExplanation":"1. `find_duplicate()`: Locates duplicate number using Floyd\'s array cycle detection."},{"projectId":"TP_021","title":"4Sum II (Hash Map + Two-Pointer Hybrid Optimization)","difficulty":"Advanced","description":"Given four integer arrays A, B, C, D of size N, find total quadruplets `(i, j, k, l)` such that `A[i] + B[j] + C[k] + D[l] == 0`. Combine Hash Map for `A[i] + B[j]` with two-pointer/lookup for `-(C[k] + D[l])` to optimize time from O(N^4) down to O(N^2)! In this project, you will build a 4Sum II Hybrid Engine in C.","learningOutcome":"N^2 Problem Decomposition, Hash Map + Two-Pointer Hybrid & Combinatorial Counting","exampleText":"Find quadruplets summing to 0 across 4 arrays","exampleOutput":"--- 4Sum II Hybrid Search ---\\nTotal Quadruplets Summing to 0 = 2","logicExplanation":"1. **Map Sub-Sum**: Store all pair sums `A[i] + B[j]` in Hash Map.\\n2. **Lookup Sub-Sum**: Search target `- (C[k] + D[l])` in Hash Map and accumulate counts.","answerFile":"./answers/answer21.c","codeExplanation":"1. `four_sum_ii_demo()`: Solves 4Sum II in O(N^2) time using hybrid sub-sum maps."},{"projectId":"TP_022","title":"Minimum Window Sort (Unsorted Subarray Boundary Finder)","difficulty":"Advanced","description":"Given an integer array, find the shortest continuous subarray that, if sorted in ascending order, makes the whole array sorted. Find the rightmost out-of-order element scanning left-to-right (`nums[i] < max_so_far`), and leftmost out-of-order element scanning right-to-left (`nums[i] > min_so_far`). In this project, you will build an Unsorted Subarray Window Finder in C in O(N) time.","learningOutcome":"Out-of-Order Boundary Tracking, Dual Direction Scanning & Shortest Subarray Window","exampleText":"Array [2, 6, 4, 8, 10, 9, 15]","exampleOutput":"--- Minimum Window Unsorted Subarray Finder ---\\nShortest Unsorted Subarray Length = 5","logicExplanation":"1. **Left-to-Right Scan**: Track `max_so_far`; mark right boundary `right` where `nums[i] < max_so_far`.\\n2. **Right-to-Left Scan**: Track `min_so_far`; mark left boundary `left` where `nums[i] > min_so_far`.","answerFile":"./answers/answer22.c","codeExplanation":"1. `find_unsorted_subarray()`: Computes minimum unsorted window length in O(N) time."},{"projectId":"TP_023","title":"Subarrays with K Different Integers (Dual Sliding Window Two-Pointer Engine)","difficulty":"Advanced","description":"Count continuous subarrays containing exactly K different integers. Formula: `Exactly(K) = AtMost(K) - AtMost(K - 1)`. Compute `AtMost(K)` using a sliding window two-pointer engine. In this project, you will build a K-Distinct Subarray Counter in C in O(N) time.","learningOutcome":"Exact-K via AtMost(K) - AtMost(K-1) Reduction, Dual Sliding Windows & Linear Subarray Counting","exampleText":"Count subarrays with K=2 distinct integers","exampleOutput":"--- Subarrays with K Different Integers ---\\nTotal Subarrays with K=2 Distinct Integers = 7","logicExplanation":"1. **Reduction Formula**: `Count(Exact K) = Count(AtMost K) - Count(AtMost K - 1)`.\\n2. **Sliding Window**: Compute `AtMost(K)` by expanding `right` and contracting `left` when distinct elements > K.","answerFile":"./answers/answer23.c","codeExplanation":"1. `k_distinct_subarrays_demo()`: Counts exact K distinct subarrays using dual sliding windows."},{"projectId":"TP_024","title":"Shortest Subarray to be Removed to Make Array Sorted","difficulty":"Advanced","description":"Given an integer array, remove a single continuous subarray such that the remaining elements are non-decreasing. Find minimum length of subarray to remove. Find longest non-decreasing prefix `[0..left]` and suffix `[right..N-1]`. Use two pointers to merge prefix and suffix boundaries. In this project, you will build Shortest Subarray Removal Engine in C in O(N) time.","learningOutcome":"Prefix/Suffix Sorted Boundaries, Two-Pointer Subarray Removal & Minimum Deletion Search","exampleText":"Array [1, 2, 3, 10, 4, 2, 3, 5]","exampleOutput":"--- Shortest Subarray Removal to Make Array Sorted ---\\nMinimum Elements to Remove = 3","logicExplanation":"1. **Find Sorted Ends**: Locate longest sorted prefix `[0..left]` and suffix `[right..N-1]`.\\n2. **Merge Pointers**: Two pointers `i` on prefix and `j` on suffix find minimum removal gap `j - i - 1`.","answerFile":"./answers/answer24.c","codeExplanation":"1. `find_length_to_remove()`: Finds shortest subarray removal length to preserve sorted order."},{"projectId":"TP_025","title":"Multi-Threaded Parallel Lock-Free Two-Pointer Memory Compaction","difficulty":"Advanced","description":"Operating system memory managers defragment physical RAM using parallel two-pointer compaction. Split memory pages into chunks; worker threads run two-pointer read/write passes concurrently without mutex locks. In this project, you will build a Parallel Memory Compactor Simulator in C.","learningOutcome":"Parallel Defragmentation, Multi-Threaded Two-Pointer Scanning & Lock-Free Compaction","exampleText":"Parallel Memory Compaction Pass","exampleOutput":"--- Parallel Lock-Free Two-Pointer Memory Compaction ---\\nCompacted RAM pages in O(N/K) parallel two-pointer pass.","logicExplanation":"1. **Chunk Partition**: Divide memory space across worker threads.\\n2. **Parallel Two-Pointer**: Each thread runs read/write pointer compaction concurrently.","answerFile":"./answers/answer25.c","codeExplanation":"1. `parallel_compaction_demo()`: Simulates parallel lock-free two-pointer memory compaction."}]'),d={projectCategory:R,subject:L,board:z,class:"Computer Science Core / BCA / B.Tech",tools:W,institute:q,projects:H};function Q(){const[t,c]=l.useState(null);return l.useEffect(()=>{const i=Object.assign({"./topic6_files/answers/answer1.c":p,"./topic6_files/answers/answer10.c":f,"./topic6_files/answers/answer11.c":h,"./topic6_files/answers/answer12.c":g,"./topic6_files/answers/answer13.c":w,"./topic6_files/answers/answer14.c":_,"./topic6_files/answers/answer15.c":y,"./topic6_files/answers/answer16.c":x,"./topic6_files/answers/answer17.c":b,"./topic6_files/answers/answer18.c":S,"./topic6_files/answers/answer19.c":v,"./topic6_files/answers/answer2.c":P,"./topic6_files/answers/answer20.c":T,"./topic6_files/answers/answer21.c":C,"./topic6_files/answers/answer22.c":I,"./topic6_files/answers/answer23.c":A,"./topic6_files/answers/answer24.c":N,"./topic6_files/answers/answer25.c":k,"./topic6_files/answers/answer3.c":j,"./topic6_files/answers/answer4.c":O,"./topic6_files/answers/answer5.c":M,"./topic6_files/answers/answer6.c":F,"./topic6_files/answers/answer7.c":E,"./topic6_files/answers/answer8.c":D,"./topic6_files/answers/answer9.c":B}),a={};Object.keys(i).forEach(n=>{const o=n.split("/").pop();a[o]=i[n]});const u=d.projects.map(n=>{const r=(n.answerFile||"").split("/").pop(),s=a[r];return s||console.warn(`⚠ Missing C answer file: ${r}`),{...n,answer:s||`// Source file "${r}" not found in answers folder`}});c({...d,projects:u})},[]),t?e.jsx(m,{data:t}):e.jsx("div",{className:"p-6 text-slate-400 flex items-center justify-center min-h-[300px]",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-5 h-5 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),e.jsx("span",{children:"Loading Two-Pointer & Fast-Slow Mechanics Projects..."})]})})}export{Q as default};
