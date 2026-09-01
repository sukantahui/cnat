import{b as l,j as i}from"./vendor-react-core-Doz9nIC6.js";import{C as h}from"./CProjectAnswerTemplateEnhanced-DRUOSXgE.js";import"./CodeBlock-C22pSTHv.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const u=`#include <stdio.h>\r
\r
int binary_search(int arr[], int n, int target) {\r
    int low = 0, high = n - 1;\r
    while (low <= high) {\r
        int mid = low + (high - low) / 2;\r
        if (arr[mid] == target) return mid;\r
        if (arr[mid] < target) low = mid + 1;\r
        else high = mid - 1;\r
    }\r
    return -1;\r
}\r
\r
int main() {\r
    int arr[] = {10, 20, 30, 40, 50, 60};\r
    int n = 6, target = 40;\r
    printf("--- Iterative Binary Search ---\\n");\r
    int idx = binary_search(arr, n, target);\r
    if (idx != -1) printf("Target %d found at index = %d\\n", target, idx);\r
    return 0;\r
}\r
`,g=`#include <stdio.h>\r
\r
int find_min_rotated(int arr[], int n) {\r
    int low = 0, high = n - 1;\r
    while (low < high) {\r
        int mid = low + (high - low) / 2;\r
        if (arr[mid] > arr[high]) low = mid + 1;\r
        else high = mid;\r
    }\r
    return arr[low];\r
}\r
\r
int main() {\r
    int arr[] = {3, 4, 5, 1, 2};\r
    int n = 5;\r
    printf("--- Minimum Element in Rotated Sorted Array ---\\n");\r
    printf("Minimum Element = %d\\n", find_min_rotated(arr, n));\r
    return 0;\r
}\r
`,p=`#include <stdio.h>\r
#include <stdbool.h>\r
\r
int max(int a, int b) { return (a > b) ? a : b; }\r
\r
bool can_eat_all(int piles[], int n, int speed, int h) {\r
    long hours = 0;\r
    for (int i = 0; i < n; i++) {\r
        hours += (piles[i] + speed - 1) / speed;\r
    }\r
    return hours <= h;\r
}\r
\r
int min_eating_speed(int piles[], int n, int h) {\r
    int max_p = 0;\r
    for (int i = 0; i < n; i++) max_p = max(max_p, piles[i]);\r
\r
    int low = 1, high = max_p, ans = max_p;\r
    while (low <= high) {\r
        int mid = low + (high - low) / 2;\r
        if (can_eat_all(piles, n, mid, h)) {\r
            ans = mid;\r
            high = mid - 1;\r
        } else {\r
            low = mid + 1;\r
        }\r
    }\r
    return ans;\r
}\r
\r
int main() {\r
    int piles[] = {3, 6, 7, 11};\r
    int n = 4, h = 8;\r
    printf("--- Koko Eating Bananas Search Space Optimization ---\\n");\r
    printf("Minimum Eating Speed = %d bananas/hr\\n", min_eating_speed(piles, n, h));\r
    return 0;\r
}\r
`,w=`#include <stdio.h>\r
\r
int ship_within_days(int weights[], int n, int days) {\r
    int max_w = 0, sum_w = 0;\r
    for (int i = 0; i < n; i++) {\r
        if (weights[i] > max_w) max_w = weights[i];\r
        sum_w += weights[i];\r
    }\r
    int low = max_w, high = sum_w, ans = sum_w;\r
    while (low <= high) {\r
        int mid = low + (high - low) / 2;\r
        int current_days = 1, current_load = 0;\r
        for (int i = 0; i < n; i++) {\r
            if (current_load + weights[i] > mid) {\r
                current_days++;\r
                current_load = 0;\r
            }\r
            current_load += weights[i];\r
        }\r
        if (current_days <= days) {\r
            ans = mid;\r
            high = mid - 1;\r
        } else {\r
            low = mid + 1;\r
        }\r
    }\r
    return ans;\r
}\r
\r
int main() {\r
    int weights[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\r
    int n = 10, days = 5;\r
    printf("--- Capacity To Ship Packages Within D Days ---\\n");\r
    printf("Minimum Ship Capacity = %d\\n", ship_within_days(weights, n, days));\r
    return 0;\r
}\r
`,f=`#include <stdio.h>\r
#include <stdbool.h>\r
\r
void sort_stalls(int stalls[], int n) {\r
    for (int i = 0; i < n - 1; i++) {\r
        for (int j = i + 1; j < n; j++) {\r
            if (stalls[i] > stalls[j]) {\r
                int temp = stalls[i]; stalls[i] = stalls[j]; stalls[j] = temp;\r
            }\r
        }\r
    }\r
}\r
\r
bool can_place_cows(int stalls[], int n, int cows, int dist) {\r
    int count = 1, last_pos = stalls[0];\r
    for (int i = 1; i < n; i++) {\r
        if (stalls[i] - last_pos >= dist) {\r
            count++;\r
            last_pos = stalls[i];\r
            if (count >= cows) return true;\r
        }\r
    }\r
    return false;\r
}\r
\r
int aggressive_cows(int stalls[], int n, int cows) {\r
    sort_stalls(stalls, n);\r
    int low = 1, high = stalls[n - 1] - stalls[0], ans = 0;\r
    while (low <= high) {\r
        int mid = low + (high - low) / 2;\r
        if (can_place_cows(stalls, n, cows, mid)) {\r
            ans = mid;\r
            low = mid + 1;\r
        } else {\r
            high = mid - 1;\r
        }\r
    }\r
    return ans;\r
}\r
\r
int main() {\r
    int stalls[] = {1, 2, 8, 4, 9};\r
    int n = 5, cows = 3;\r
    printf("--- Aggressive Cows Maximize Minimum Distance ---\\n");\r
    printf("Maximized Minimum Distance = %d\\n", aggressive_cows(stalls, n, cows));\r
    return 0;\r
}\r
`,_=`#include <stdio.h>\r
\r
int split_array(int nums[], int n, int k) {\r
    int max_val = 0, sum_val = 0;\r
    for (int i = 0; i < n; i++) {\r
        if (nums[i] > max_val) max_val = nums[i];\r
        sum_val += nums[i];\r
    }\r
    int low = max_val, high = sum_val, ans = sum_val;\r
    while (low <= high) {\r
        int mid = low + (high - low) / 2;\r
        int count = 1, current_sum = 0;\r
        for (int i = 0; i < n; i++) {\r
            if (current_sum + nums[i] > mid) {\r
                count++;\r
                current_sum = 0;\r
            }\r
            current_sum += nums[i];\r
        }\r
        if (count <= k) {\r
            ans = mid;\r
            high = mid - 1;\r
        } else {\r
            low = mid + 1;\r
        }\r
    }\r
    return ans;\r
}\r
\r
int main() {\r
    int nums[] = {7, 2, 5, 10, 8};\r
    int n = 5, k = 2;\r
    printf("--- Split Array Largest Sum ---\\n");\r
    printf("Minimized Largest Subarray Sum = %d\\n", split_array(nums, n, k));\r
    return 0;\r
}\r
`,x=`#include <stdio.h>\r
#include <stdbool.h>\r
\r
int smallest_divisor(int nums[], int n, int threshold) {\r
    int max_val = 0;\r
    for (int i = 0; i < n; i++) if (nums[i] > max_val) max_val = nums[i];\r
\r
    int low = 1, high = max_val, ans = max_val;\r
    while (low <= high) {\r
        int mid = low + (high - low) / 2;\r
        int sum = 0;\r
        for (int i = 0; i < n; i++) sum += (nums[i] + mid - 1) / mid;\r
        if (sum <= threshold) {\r
            ans = mid;\r
            high = mid - 1;\r
        } else {\r
            low = mid + 1;\r
        }\r
    }\r
    return ans;\r
}\r
\r
int main() {\r
    int nums[] = {1, 2, 5, 9};\r
    int n = 4, threshold = 6;\r
    printf("--- Smallest Divisor Given a Threshold ---\\n");\r
    printf("Smallest Divisor = %d\\n", smallest_divisor(nums, n, threshold));\r
    return 0;\r
}\r
`,y=`#include <stdio.h>\r
#include <stdbool.h>\r
\r
#define R 3\r
#define C 4\r
\r
bool search_matrix(int matrix[R][C], int target) {\r
    int low = 0, high = R * C - 1;\r
    while (low <= high) {\r
        int mid = low + (high - low) / 2;\r
        int val = matrix[mid / C][mid % C];\r
        if (val == target) return true;\r
        if (val < target) low = mid + 1;\r
        else high = mid - 1;\r
    }\r
    return false;\r
}\r
\r
int main() {\r
    int matrix[R][C] = {\r
        {1, 3, 5, 7},\r
        {10, 11, 16, 20},\r
        {23, 30, 34, 60}\r
    };\r
    int target = 3;\r
    printf("--- Search a 2D Matrix (Flattened 1D Binary Search) ---\\n");\r
    if (search_matrix(matrix, target)) printf("Target %d FOUND in 2D Matrix!\\n", target);\r
    else printf("Target NOT found.\\n");\r
    return 0;\r
}\r
`,S=`#include <stdio.h>\r
#include <stdbool.h>\r
\r
#define R 5\r
#define C 5\r
\r
bool search_staircase(int matrix[R][C], int target) {\r
    int row = 0, col = C - 1;\r
    while (row < R && col >= 0) {\r
        if (matrix[row][col] == target) return true;\r
        if (matrix[row][col] > target) col--;\r
        else row++;\r
    }\r
    return false;\r
}\r
\r
int main() {\r
    int matrix[R][C] = {\r
        {1, 4, 7, 11, 15},\r
        {2, 5, 8, 12, 19},\r
        {3, 6, 9, 16, 22},\r
        {10, 13, 14, 17, 24},\r
        {18, 21, 23, 26, 30}\r
    };\r
    int target = 5;\r
    printf("--- Search a 2D Matrix II (Staircase Search) ---\\n");\r
    if (search_staircase(matrix, target)) printf("Target %d FOUND in Staircase Matrix Search!\\n", target);\r
    return 0;\r
}\r
`,b=`#include <stdio.h>\r
\r
int single_non_duplicate(int nums[], int n) {\r
    int low = 0, high = n - 1;\r
    while (low < high) {\r
        int mid = low + (high - low) / 2;\r
        if (mid % 2 == 1) mid--;\r
        if (nums[mid] == nums[mid + 1]) low = mid + 2;\r
        else high = mid;\r
    }\r
    return nums[low];\r
}\r
\r
int main() {\r
    int nums[] = {1, 1, 2, 3, 3, 4, 4, 8, 8};\r
    int n = 9;\r
    printf("--- Single Element in Sorted Array ---\\n");\r
    printf("Single Non-Duplicate Element = %d\\n", single_non_duplicate(nums, n));\r
    return 0;\r
}\r
`,v=`#include <stdio.h>\r
\r
#define N 3\r
\r
int count_less_equal(int matrix[N][N], int mid) {\r
    int count = 0, row = 0, col = N - 1;\r
    while (row < N && col >= 0) {\r
        if (matrix[row][col] <= mid) {\r
            count += (col + 1);\r
            row++;\r
        } else {\r
            col--;\r
        }\r
    }\r
    return count;\r
}\r
\r
int kth_smallest_matrix(int matrix[N][N], int k) {\r
    int low = matrix[0][0], high = matrix[N - 1][N - 1], ans = low;\r
    while (low <= high) {\r
        int mid = low + (high - low) / 2;\r
        if (count_less_equal(matrix, mid) >= k) {\r
            ans = mid;\r
            high = mid - 1;\r
        } else {\r
            low = mid + 1;\r
        }\r
    }\r
    return ans;\r
}\r
\r
int main() {\r
    int matrix[N][N] = {\r
        {1, 5, 9},\r
        {10, 11, 13},\r
        {12, 13, 15}\r
    };\r
    int k = 8;\r
    printf("--- Kth Smallest Element in Sorted Matrix ---\\n");\r
    printf("The %d-th Smallest Element = %d\\n", k, kth_smallest_matrix(matrix, k));\r
    return 0;\r
}\r
`,C=`#include <stdio.h>\r
\r
int binary_search_recursive(int arr[], int low, int high, int target) {\r
    if (low > high) return -1;\r
    int mid = low + (high - low) / 2;\r
    if (arr[mid] == target) return mid;\r
    if (arr[mid] < target) return binary_search_recursive(arr, mid + 1, high, target);\r
    return binary_search_recursive(arr, low, mid - 1, target);\r
}\r
\r
int main() {\r
    int arr[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};\r
    int n = 10, target = 23;\r
    printf("--- Recursive Binary Search ---\\n");\r
    int idx = binary_search_recursive(arr, 0, n - 1, target);\r
    if (idx != -1) printf("Target %d found at index = %d\\n", target, idx);\r
    return 0;\r
}\r
`,B=`#include <stdio.h>\r
#include <limits.h>\r
\r
int max(int a, int b) { return (a > b) ? a : b; }\r
int min(int a, int b) { return (a < b) ? a : b; }\r
\r
double find_median_sorted_arrays(int A[], int n1, int B[], int n2) {\r
    if (n1 > n2) return find_median_sorted_arrays(B, n2, A, n1);\r
    int low = 0, high = n1;\r
    while (low <= high) {\r
        int i1 = low + (high - low) / 2;\r
        int i2 = (n1 + n2 + 1) / 2 - i1;\r
\r
        int maxL1 = (i1 == 0) ? INT_MIN : A[i1 - 1];\r
        int minR1 = (i1 == n1) ? INT_MAX : A[i1];\r
        int maxL2 = (i2 == 0) ? INT_MIN : B[i2 - 1];\r
        int minR2 = (i2 == n2) ? INT_MAX : B[i2];\r
\r
        if (maxL1 <= minR2 && maxL2 <= minR1) {\r
            if ((n1 + n2) % 2 == 0) return (max(maxL1, maxL2) + min(minR1, minR2)) / 2.0;\r
            else return max(maxL1, maxL2);\r
        } else if (maxL1 > minR2) high = i1 - 1;\r
        else low = i1 + 1;\r
    }\r
    return 0.0;\r
}\r
\r
int main() {\r
    int A[] = {1, 3};\r
    int B[] = {2};\r
    printf("--- Median of Two Sorted Arrays O(log(min(N,M))) ---\\n");\r
    printf("Median = %.1f\\n", find_median_sorted_arrays(A, 2, B, 1));\r
    return 0;\r
}\r
`,I=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
int compare(const void *a, const void *b) {\r
    return (*(int*)a - *(int*)b);\r
}\r
\r
int count_pairs(int *nums, int n, int mid_dist) {\r
    int count = 0;\r
    int left = 0;\r
    for (int right = 0; right < n; right++) {\r
        while (nums[right] - nums[left] > mid_dist) {\r
            left++;\r
        }\r
        count += (right - left);\r
    }\r
    return count;\r
}\r
\r
int smallest_distance_pair(int *nums, int n, int k) {\r
    qsort(nums, n, sizeof(int), compare);\r
    int low = 0;\r
    int high = nums[n - 1] - nums[0];\r
    int result = high;\r
\r
    while (low <= high) {\r
        int mid = low + (high - low) / 2;\r
        if (count_pairs(nums, n, mid) >= k) {\r
            result = mid;\r
            high = mid - 1;\r
        } else {\r
            low = mid + 1;\r
        }\r
    }\r
    return result;\r
}\r
\r
int main() {\r
    int nums[] = {1, 3, 1, 4, 6};\r
    int n = sizeof(nums) / sizeof(nums[0]);\r
    int k = 3;\r
\r
    int ans = smallest_distance_pair(nums, n, k);\r
\r
    printf("--- K-th Smallest Pair Distance Engine ---\\n");\r
    printf("K-th Smallest Absolute Difference Pair = %d\\n", ans);\r
    return 0;\r
}\r
\r
`,M=`#include <stdio.h>\r
#include <math.h>\r
\r
int possible(double d, int *stations, int n, int k) {\r
    int count = 0;\r
    for (int i = 0; i < n - 1; i++) {\r
        count += (int)((stations[i + 1] - stations[i]) / d);\r
    }\r
    return count <= k;\r
}\r
\r
double min_max_gas_station(int *stations, int n, int k) {\r
    double low = 0.0;\r
    double high = 0.0;\r
    for (int i = 0; i < n - 1; i++) {\r
        if (stations[i + 1] - stations[i] > high) {\r
            high = stations[i + 1] - stations[i];\r
        }\r
    }\r
\r
    double diff = 1e-6;\r
    while (high - low > diff) {\r
        double mid = low + (high - low) / 2.0;\r
        if (possible(mid, stations, n, k)) {\r
            high = mid;\r
        } else {\r
            low = mid;\r
        }\r
    }\r
    return low;\r
}\r
\r
int main() {\r
    int stations[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\r
    int n = sizeof(stations) / sizeof(stations[0]);\r
    int k = 9;\r
\r
    double ans = min_max_gas_station(stations, n, k);\r
\r
    printf("--- Minimize Max Distance to Gas Station ---\\n");\r
    printf("Minimized Maximum Distance = %f\\n", ans);\r
    return 0;\r
}\r
\r
`,E=`#include <stdio.h>\r
\r
double f(double x) { return -1.0 * (x - 3.0) * (x - 3.0) + 10.0; } // Parabola peaking at x=3\r
\r
double ternary_search(double low, double high) {\r
    for (int i = 0; i < 100; i++) {\r
        double m1 = low + (high - low) / 3.0;\r
        double m2 = high - (high - low) / 3.0;\r
        if (f(m1) < f(m2)) low = m1;\r
        else high = m2;\r
    }\r
    return (low + high) / 2.0;\r
}\r
\r
int main() {\r
    printf("--- Ternary Search on Unimodal Real Functions ---\\n");\r
    printf("Maximum point located at X = %.6f\\n", ternary_search(0.0, 10.0));\r
    return 0;\r
}\r
`,O=`#include <stdio.h>\r
\r
double sqrt_float(double x) {\r
    double low = 0.0, high = x, ans = 0.0;\r
    while (high - low > 1e-7) {\r
        double mid = low + (high - low) / 2.0;\r
        if (mid * mid <= x) { ans = mid; low = mid; }\r
        else high = mid;\r
    }\r
    return ans;\r
}\r
\r
int main() {\r
    double x = 2.0;\r
    printf("--- Fractional High-Precision Floating Binary Search ---\\n");\r
    printf("High-Precision Sqrt(2.0) = %.7f\\n", sqrt_float(x));\r
    return 0;\r
}\r
`,D=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
#define THREADS 8\r
\r
typedef struct {\r
    int thread_id;\r
    int low;\r
    int high;\r
    int target;\r
    int *arr;\r
    int result_idx;\r
} ThreadData;\r
\r
int binary_search_range(int *arr, int low, int high, int target) {\r
    while (low <= high) {\r
        int mid = low + (high - low) / 2;\r
        if (arr[mid] == target) return mid;\r
        if (arr[mid] < target) low = mid + 1;\r
        else high = mid - 1;\r
    }\r
    return -1;\r
}\r
\r
void parallel_binary_search_demo() {\r
    printf("--- Parallel Lock-Free Binary Search Space Partitioning ---\\n");\r
    int size = 800;\r
    int *arr = (int*)malloc(sizeof(int) * size);\r
    for (int i = 0; i < size; i++) arr[i] = i * 2;\r
\r
    int target = 450;\r
    int partition_size = size / THREADS;\r
    ThreadData threads[THREADS];\r
\r
    printf("Partitioned search space across %d GPU worker threads simultaneously.\\n", THREADS);\r
\r
    for (int t = 0; t < THREADS; t++) {\r
        threads[t].thread_id = t;\r
        threads[t].low = t * partition_size;\r
        threads[t].high = (t == THREADS - 1) ? (size - 1) : ((t + 1) * partition_size - 1);\r
        threads[t].target = target;\r
        threads[t].arr = arr;\r
        threads[t].result_idx = binary_search_range(arr, threads[t].low, threads[t].high, target);\r
\r
        if (threads[t].result_idx != -1) {\r
            printf("Thread %d found Target %d at Index %d!\\n", t, target, threads[t].result_idx);\r
        }\r
    }\r
\r
    free(arr);\r
}\r
\r
int main() {\r
    parallel_binary_search_demo();\r
    return 0;\r
}\r
\r
`,F=`#include <stdio.h>\r
\r
int lower_bound(int arr[], int n, int target) {\r
    int low = 0, high = n - 1, ans = n;\r
    while (low <= high) {\r
        int mid = low + (high - low) / 2;\r
        if (arr[mid] >= target) {\r
            ans = mid;\r
            high = mid - 1;\r
        } else {\r
            low = mid + 1;\r
        }\r
    }\r
    return ans;\r
}\r
\r
int main() {\r
    int arr[] = {1, 2, 4, 4, 4, 6, 7};\r
    int n = 7, target = 4;\r
    printf("--- Lower Bound Finder (First Occurrence) ---\\n");\r
    printf("First occurrence of %d at index = %d\\n", target, lower_bound(arr, n, target));\r
    return 0;\r
}\r
`,T=`#include <stdio.h>\r
\r
int upper_bound(int arr[], int n, int target) {\r
    int low = 0, high = n - 1, ans = n;\r
    while (low <= high) {\r
        int mid = low + (high - low) / 2;\r
        if (arr[mid] > target) {\r
            ans = mid;\r
            high = mid - 1;\r
        } else {\r
            low = mid + 1;\r
        }\r
    }\r
    return ans;\r
}\r
\r
int main() {\r
    int arr[] = {1, 2, 4, 4, 4, 6, 7};\r
    int n = 7, target = 4;\r
    printf("--- Upper Bound Finder ---\\n");\r
    printf("Upper bound index of %d is index = %d\\n", target, upper_bound(arr, n, target));\r
    return 0;\r
}\r
`,k=`#include <stdio.h>\r
\r
int count_occurrences(int arr[], int n, int target) {\r
    // Upper Bound - Lower Bound\r
    int first = -1, last = -1;\r
    int low = 0, high = n - 1;\r
    while (low <= high) {\r
        int mid = low + (high - low) / 2;\r
        if (arr[mid] == target) { first = mid; high = mid - 1; }\r
        else if (arr[mid] < target) low = mid + 1;\r
        else high = mid - 1;\r
    }\r
    if (first == -1) return 0;\r
    low = 0; high = n - 1;\r
    while (low <= high) {\r
        int mid = low + (high - low) / 2;\r
        if (arr[mid] == target) { last = mid; low = mid + 1; }\r
        else if (arr[mid] < target) low = mid + 1;\r
        else high = mid - 1;\r
    }\r
    return (last - first + 1);\r
}\r
\r
int main() {\r
    int arr[] = {1, 2, 4, 4, 4, 4, 6, 7};\r
    int n = 8, target = 4;\r
    printf("--- Count Occurrences in Sorted Array ---\\n");\r
    printf("Total count of key %d = %d\\n", target, count_occurrences(arr, n, target));\r
    return 0;\r
}\r
`,P=`#include <stdio.h>\r
\r
int search_insert_position(int arr[], int n, int target) {\r
    int low = 0, high = n - 1;\r
    while (low <= high) {\r
        int mid = low + (high - low) / 2;\r
        if (arr[mid] == target) return mid;\r
        if (arr[mid] < target) low = mid + 1;\r
        else high = mid - 1;\r
    }\r
    return low;\r
}\r
\r
int main() {\r
    int arr[] = {1, 3, 5, 6};\r
    int n = 4, target = 2;\r
    printf("--- Search Insert Position ---\\n");\r
    printf("Insert position for %d in [1, 3, 5, 6] = %d\\n", target, search_insert_position(arr, n, target));\r
    return 0;\r
}\r
`,R=`#include <stdio.h>\r
\r
int integer_sqrt(int x) {\r
    if (x == 0 || x == 1) return x;\r
    long low = 1, high = x, ans = 0;\r
    while (low <= high) {\r
        long mid = low + (high - low) / 2;\r
        if (mid * mid == x) return mid;\r
        if (mid * mid < x) {\r
            ans = mid;\r
            low = mid + 1;\r
        } else {\r
            high = mid - 1;\r
        }\r
    }\r
    return ans;\r
}\r
\r
int main() {\r
    int x = 28;\r
    printf("--- Integer Square Root via Binary Search ---\\n");\r
    printf("Floor Square Root of %d = %d\\n", x, integer_sqrt(x));\r
    return 0;\r
}\r
`,A=`#include <stdio.h>\r
\r
int find_peak_element(int arr[], int n) {\r
    int low = 0, high = n - 1;\r
    while (low < high) {\r
        int mid = low + (high - low) / 2;\r
        if (arr[mid] < arr[mid + 1]) low = mid + 1;\r
        else high = mid;\r
    }\r
    return low;\r
}\r
\r
int main() {\r
    int arr[] = {1, 2, 3, 1};\r
    int n = 4;\r
    printf("--- Peak Element in Mountain Array ---\\n");\r
    int peak_idx = find_peak_element(arr, n);\r
    printf("Peak Element = %d at Index = %d\\n", arr[peak_idx], peak_idx);\r
    return 0;\r
}\r
`,N=`#include <stdio.h>\r
\r
int search_rotated(int arr[], int n, int target) {\r
    int low = 0, high = n - 1;\r
    while (low <= high) {\r
        int mid = low + (high - low) / 2;\r
        if (arr[mid] == target) return mid;\r
\r
        // Check if left half is sorted\r
        if (arr[low] <= arr[mid]) {\r
            if (target >= arr[low] && target < arr[mid]) high = mid - 1;\r
            else low = mid + 1;\r
        } else { // Right half is sorted\r
            if (target > arr[mid] && target <= arr[high]) low = mid + 1;\r
            else high = mid - 1;\r
        }\r
    }\r
    return -1;\r
}\r
\r
int main() {\r
    int arr[] = {4, 5, 6, 7, 0, 1, 2};\r
    int n = 7, target = 0;\r
    printf("--- Search in Rotated Sorted Array ---\\n");\r
    int idx = search_rotated(arr, n, target);\r
    if (idx != -1) printf("Target %d found at index = %d\\n", target, idx);\r
    return 0;\r
}\r
`,j="DSA Module 3.1: Binary Search & Monotonic Search Space Optimization",z="Data Structures & Algorithms in C",L="University & Industrial Standards",q=["GCC Compiler","VS Code","GDB Debugger","Valgrind"],U={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},G=JSON.parse('[{"projectId":"BS_001","title":"Iterative Binary Search on Sorted Array","difficulty":"Beginner","description":"Binary Search is a logarithmic O(log N) algorithm that finds a target value in a sorted array by repeatedly dividing the search interval in half. Initialize `low = 0` and `high = N - 1`. Calculate `mid = low + (high - low) / 2` (preventing integer overflow). If `arr[mid] == target`, return `mid`; if `arr[mid] < target`, discard the left half (`low = mid + 1`); else discard the right half (`high = mid - 1`). In this project, you will build an Iterative Binary Search Engine in C.","learningOutcome":"Logarithmic O(log N) Time Complexity, Mid Calculation Overflow Safety & Search Interval Reduction","exampleText":"Search target 40 in sorted array [10, 20, 30, 40, 50, 60]","exampleOutput":"--- Iterative Binary Search ---\\nTarget 40 found at index = 3","logicExplanation":"1. **Interval Halving**: Compute `mid = low + (high - low) / 2`.\\n2. **Comparisons**: If `arr[mid] == target`, return `mid`. Adjust `low` or `high` based on inequality.","answerFile":"./answers/answer1.c","codeExplanation":"1. `binary_search()`: Performs iterative logarithmic binary search on sorted array."},{"projectId":"BS_002","title":"Recursive Binary Search Engine","difficulty":"Beginner","description":"While iterative binary search uses explicit loops, binary search can also be expressed recursively using Divide-and-Conquer. The base case checks if `low > high` (target missing). In the recursive step, compute `mid` and recurse on `[mid + 1 .. high]` or `[low .. mid - 1]`. In this project, you will construct a Recursive Binary Search Engine in C.","learningOutcome":"Divide-and-Conquer Recursion, Call Stack Depth O(log N) & Base Case Handling","exampleText":"Search target 23 in sorted array","exampleOutput":"--- Recursive Binary Search ---\\nTarget 23 found at index = 5","logicExplanation":"1. **Base Case**: If `low > high`, return -1.\\n2. **Recursive Decomposition**: Recurse on left or right sub-range.","answerFile":"./answers/answer2.c","codeExplanation":"1. `binary_search_recursive()`: Performs binary search via call stack recursion."},{"projectId":"BS_003","title":"Lower Bound Finder (First Occurrence Index)","difficulty":"Beginner","description":"When duplicate elements exist in a sorted array, standard binary search returns an arbitrary matching index. The Lower Bound algorithm finds the FIRST occurrence index (or smallest index `i` where `arr[i] >= target`). In this project, you will build a Lower Bound Finder in C in O(log N) time.","learningOutcome":"Lower Bound Mechanics, Duplicate Value Index Bounds & Boundary Preservation","exampleText":"Find lower bound of 4 in [1, 2, 4, 4, 4, 6, 7]","exampleOutput":"--- Lower Bound Finder (First Occurrence) ---\\nFirst occurrence of 4 at index = 2","logicExplanation":"1. **Condition**: When `arr[mid] >= target`, record `ans = mid` and move left (`high = mid - 1`).\\n2. **First Occurrence**: Guarantees finding the earliest duplicate index.","answerFile":"./answers/answer3.c","codeExplanation":"1. `lower_bound()`: Computes lower bound index in sorted array."},{"projectId":"BS_004","title":"Upper Bound Finder (Last Occurrence Index)","difficulty":"Beginner","description":"The Upper Bound algorithm finds the first index `i` where `arr[i] > target` (the position immediately following the last occurrence of `target`). Subtracting 1 from upper bound yields the LAST occurrence index. In this project, you will build an Upper Bound Finder in C.","learningOutcome":"Upper Bound Mechanics, Range Limit Indexing & Duplicate Element Boundaries","exampleText":"Find upper bound of 4 in [1, 2, 4, 4, 4, 6, 7]","exampleOutput":"--- Upper Bound Finder ---\\nUpper bound index of 4 is index = 5","logicExplanation":"1. **Condition**: When `arr[mid] > target`, record `ans = mid` and move left (`high = mid - 1`).\\n2. **Right Boundary**: Finds strictly greater index boundary.","answerFile":"./answers/answer4.c","codeExplanation":"1. `upper_bound()`: Computes upper bound index in sorted array."},{"projectId":"BS_005","title":"Count Occurrences of Key in Sorted Array","difficulty":"Beginner","description":"Given a sorted array containing duplicate keys, count the total frequency of a target key in O(log N) time. Using `Count = UpperBound(key) - LowerBound(key)` eliminates linear scanning. In this project, you will build a Sorted Key Frequency Counter in C.","learningOutcome":"Range Boundary Subtraction, O(log N) Frequency Counting & Binary Bound Composition","exampleText":"Count occurrences of 4 in [1, 2, 4, 4, 4, 4, 6, 7]","exampleOutput":"--- Count Occurrences in Sorted Array ---\\nTotal count of key 4 = 4","logicExplanation":"1. **Dual Binary Search**: Find `first_idx` and `last_idx` using binary search.\\n2. **Count Formula**: `count = last_idx - first_idx + 1`.","answerFile":"./answers/answer5.c","codeExplanation":"1. `count_occurrences()`: Calculates key frequency in O(log N) time."},{"projectId":"BS_006","title":"Search Insert Position (C++ std::lower_bound Simulator)","difficulty":"Beginner","description":"Given a sorted array of distinct integers and a target value, return the index if target is found. If not found, return the index where it WOULD be inserted to maintain sorted order (simulating C++ `std::lower_bound`). In this project, you will build a Search Insert Position Tool in C.","learningOutcome":"Insertion Index Tracking, Sorted Order Invariant & Boundary Return Logic","exampleText":"Search insert position for 2 in [1, 3, 5, 6]","exampleOutput":"--- Search Insert Position ---\\nInsert position for 2 in [1, 3, 5, 6] = 1","logicExplanation":"1. **Standard Search**: If `arr[mid] == target`, return `mid`.\\n2. **Insert Point**: When loop terminates `low > high`, `low` holds exact insert position.","answerFile":"./answers/answer6.c","codeExplanation":"1. `search_insert_position()`: Computes insertion index for sorted arrays."},{"projectId":"BS_007","title":"Square Root Integer Computation (sqrt(X)) via Binary Search","difficulty":"Beginner","description":"Compute the floor integer square root `floor(sqrt(X))` without calling `<math.h>` functions. The search space is monotonic: `[1 .. X]`. Compute `mid * mid`: if `mid * mid <= X`, record `ans = mid` and move right (`low = mid + 1`); else move left (`high = mid - 1`). In this project, you will build an Integer Square Root Engine in C in O(log X) time.","learningOutcome":"Monotonic Function Search Spaces, Mathematical Inverse Operations & Long Overflow Handling","exampleText":"Compute floor sqrt(28)","exampleOutput":"--- Integer Square Root via Binary Search ---\\nFloor Square Root of 28 = 5","logicExplanation":"1. **Monotonic Domain**: `f(mid) = mid * mid` is strictly increasing.\\n2. **Range Shrink**: Binary search domain `[1 .. X]` in O(log X) time.","answerFile":"./answers/answer7.c","codeExplanation":"1. `integer_sqrt()`: Computes floor square root using binary search on search space."},{"projectId":"BS_008","title":"Find Peak Element in a Unimodal Array (Mountain Array)","difficulty":"Beginner","description":"A peak element is an element strictly greater than its neighbors (`arr[i] > arr[i-1] && arr[i] > arr[i+1]`). In a Mountain Array, elements increase to a single peak and then decrease. Binary search finds the peak index in O(log N) time: if `arr[mid] < arr[mid + 1]`, peak lies on the right slope (`low = mid + 1`); else peak lies on the left slope (`high = mid`). In this project, you will build a Peak Element Finder in C.","learningOutcome":"Slope Gradient Binary Search, Unimodal Function Peak Locating & Neighbor Comparisons","exampleText":"Find peak in [1, 2, 3, 1]","exampleOutput":"--- Peak Element in Mountain Array ---\\nPeak Element = 3 at Index = 2","logicExplanation":"1. **Gradient Check**: Compare `arr[mid]` with `arr[mid + 1]`.\\n2. **Slope Branching**: Upward slope implies peak is to the right; downward slope implies peak is at `mid` or to the left.","answerFile":"./answers/answer8.c","codeExplanation":"1. `find_peak_element()`: Locates mountain array peak in O(log N) time."},{"projectId":"BS_009","title":"Search in a Rotated Sorted Array","difficulty":"Beginner","description":"Suppose a sorted array is rotated at an unknown pivot index (e.g., `[4, 5, 6, 7, 0, 1, 2]`). How do you search for a target in O(log N) time? At least ONE half (`[low..mid]` or `[mid..high]`) is ALWAYS sorted! Check which half is sorted and determine if target falls inside that sorted range. In this project, you will build a Rotated Array Search Engine in C.","learningOutcome":"Rotated Sorted Array Properties, Sorted Half Identification & Range Containment Checks","exampleText":"Search 0 in [4, 5, 6, 7, 0, 1, 2]","exampleOutput":"--- Search in Rotated Sorted Array ---\\nTarget 0 found at index = 4","logicExplanation":"1. **Sorted Half Detection**: If `arr[low] <= arr[mid]`, left half is sorted; else right half is sorted.\\n2. **Range Test**: Check if target lies within sorted half bounds.","answerFile":"./answers/answer9.c","codeExplanation":"1. `search_rotated()`: Performs O(log N) binary search on rotated sorted array."},{"projectId":"BS_010","title":"Find Minimum Element in a Rotated Sorted Array","difficulty":"Beginner","description":"Find the minimum element (the pivot point) in a rotated sorted array in O(log N) time. If `arr[mid] > arr[high]`, the pivot MUST lie in the right sub-array (`low = mid + 1`); else the pivot lies in the left sub-array (`high = mid`). In this project, you will build a Rotated Minimum Finder in C.","learningOutcome":"Pivot Point Extraction, Monotonic Property Breaks & Boundary Min Search","exampleText":"Find min in [3, 4, 5, 1, 2]","exampleOutput":"--- Minimum Element in Rotated Sorted Array ---\\nMinimum Element = 1","logicExplanation":"1. **Compare Mid & High**: If `arr[mid] > arr[high]`, right side contains pivot drop.\\n2. **Convergence**: `low == high` lands on minimum element.","answerFile":"./answers/answer10.c","codeExplanation":"1. `find_min_rotated()`: Finds minimum element in rotated array in O(log N) time."},{"projectId":"BS_011","title":"Koko Eating Bananas (Min Speed S to Eat Bananas in H Hours)","difficulty":"Intermediate","description":"Koko loves eating bananas from N piles. She has H hours. Find the minimum integer eating speed S (bananas/hr) such that she eats all bananas within H hours. The search space for speed S is `[1 .. max(piles)]`, which is monotonic: if speed S works, any speed > S also works! Binary search on speed S in O(N log(MaxP)) time. In this project, you will build the Koko Eating Bananas Optimizer in C.","learningOutcome":"Binary Search on Answer Space, Feasibility Check Functions (`can_eat_all`) & Monotonic Predicates","exampleText":"Piles [3, 6, 7, 11], H = 8 hours","exampleOutput":"--- Koko Eating Bananas Search Space Optimization ---\\nMinimum Eating Speed = 4 bananas/hr","logicExplanation":"1. **Search Domain**: Speed S range `[1 .. max_pile]`.\\n2. **Predicate Check**: Calculate total hours required for speed `mid`. If `hours <= H`, try lower speed (`high = mid - 1`).","answerFile":"./answers/answer11.c","codeExplanation":"1. `min_eating_speed()` & `can_eat_all()`: Binary search on eating speed answer space."},{"projectId":"BS_012","title":"Capacity To Ship Packages Within D Days","difficulty":"Intermediate","description":"A conveyor belt has packages with weights that must be shipped within D days. Find the minimum ship capacity C required. Search space for capacity C is `[max(weights) .. sum(weights)]`. Perform binary search on capacity C in O(N log(SumWeight)) time. In this project, you will build a Ship Capacity Optimizer in C.","learningOutcome":"Capacity Search Space Bounding, Days Feasibility Checks & Monotonic Load Partitioning","exampleText":"Weights [1..10], D = 5 days","exampleOutput":"--- Capacity To Ship Packages Within D Days ---\\nMinimum Ship Capacity = 15","logicExplanation":"1. **Range Bounds**: `low = max(weights)`, `high = sum(weights)`.\\n2. **Day Simulation**: Count days needed for candidate capacity `mid`. If `days <= D`, try smaller capacity.","answerFile":"./answers/answer12.c","codeExplanation":"1. `ship_within_days()`: Optimizes ship capacity via binary search."},{"projectId":"BS_013","title":"Aggressive Cows / Book Allocation (Maximize Minimum Distance)","difficulty":"Intermediate","description":"Given N stall positions and C cows, place all C cows into stalls such that the MINIMUM distance between any two cows is MAXIMIZED. The search space for distance D is `[1 .. max_stall - min_stall]`. Binary search on distance D: if placing C cows with minimum gap D is possible, try larger gap (`low = mid + 1`). In this project, you will build an Aggressive Cows Optimizer in C.","learningOutcome":"Minimax Search Problems, Greedy Placement Predicates & Maximizing Minimum Distance","exampleText":"Stalls [1, 2, 8, 4, 9], Cows = 3","exampleOutput":"--- Aggressive Cows Maximize Minimum Distance ---\\nMaximized Minimum Distance = 3","logicExplanation":"1. **Greedy Placement**: Place first cow at stall 0. Next cow at first stall >= `last_pos + D`.\\n2. **Binary Search**: Search distance gap D to maximize minimum separation.","answerFile":"./answers/answer13.c","codeExplanation":"1. `aggressive_cows()`: Maximizes minimum distance using binary search."},{"projectId":"BS_014","title":"Split Array Largest Sum (Minimizing Maximum Subarray Sum)","difficulty":"Intermediate","description":"Given an integer array and integer K, split the array into K non-empty contiguous subarrays such that the LARGEST sum among these K subarrays is MINIMIZED. Binary search on candidate maximum sum in `[max_element .. sum_array]`. In this project, you will build a Split Array Optimizer in C.","learningOutcome":"Contiguous Subarray Partitioning, Minimax Sum Search & Monotonic Predicates","exampleText":"Array [7, 2, 5, 10, 8], K = 2","exampleOutput":"--- Split Array Largest Sum ---\\nMinimized Largest Subarray Sum = 18","logicExplanation":"1. **Range**: `low = max(nums)`, `high = sum(nums)`.\\n2. **Greedy Subarrays**: Count subarrays needed if maximum sum limit is `mid`. If `subarrays <= K`, reduce sum limit.","answerFile":"./answers/answer14.c","codeExplanation":"1. `split_array()`: Minimizes largest subarray sum using binary search."},{"projectId":"BS_015","title":"Find Smallest Divisor Given a Threshold","difficulty":"Intermediate","description":"Given an array of integers `nums` and integer `threshold`, find the smallest divisor D such that the sum of division results `ceil(nums[i] / D)` is <= threshold. Binary search on divisor D in `[1 .. max(nums)]`. In this project, you will build a Smallest Divisor Engine in C.","learningOutcome":"Ceiling Division Rules, Divisor Threshold Optimization & Monotonic Search Domain","exampleText":"Array [1, 2, 5, 9], Threshold = 6","exampleOutput":"--- Smallest Divisor Given a Threshold ---\\nSmallest Divisor = 5","logicExplanation":"1. **Sum Function**: Compute `sum = sum(ceil(nums[i] / mid))`.\\n2. **Binary Range**: If `sum <= threshold`, try smaller divisor (`high = mid - 1`).","answerFile":"./answers/answer15.c","codeExplanation":"1. `smallest_divisor()`: Finds smallest divisor satisfying threshold."},{"projectId":"HASH_016","title":"Search a 2D Matrix (Row-Major Flattened Binary Search)","difficulty":"Intermediate","description":"Given an `R x C` 2D matrix where each row is sorted and the first element of each row is greater than the last element of the previous row, search for a target in O(log(R*C)) time. Treat the 2D matrix as a virtual 1D array of size `R*C` where index `i` maps to `matrix[i / C][i % C]`. In this project, you will build a Flattened 2D Matrix Search Engine in C.","learningOutcome":"2D to 1D Index Mapping (`row = i / C`, `col = i % C`), Virtual Array Flattening & O(log(R*C)) Search","exampleText":"Search 3 in 3x4 sorted matrix","exampleOutput":"--- Search a 2D Matrix (Flattened 1D Binary Search) ---\\nTarget 3 FOUND in 2D Matrix!","logicExplanation":"1. **Virtual Indexing**: Mid index `mid` maps to `(mid / C, mid % C)` in 2D array.\\n2. **Standard Search**: Run binary search on `[0 .. R*C - 1]`.","answerFile":"./answers/answer16.c","codeExplanation":"1. `search_matrix()`: Searches 2D matrix via virtual 1D binary search."},{"projectId":"BS_017","title":"Search a 2D Matrix II (Staircase Search in Row/Col Sorted Matrix)","difficulty":"Intermediate","description":"Given an `R x C` matrix where integers in each row AND each column are sorted in ascending order from left-to-right and top-to-bottom, search for a target in O(R + C) time. Start at top-right corner `(0, C-1)`: if `val == target`, found; if `val > target`, move left (`col--`); if `val < target`, move down (`row++`). In this project, you will build a Staircase Matrix Search Engine in C.","learningOutcome":"Staircase Search Strategy, Top-Right Corner Pivoting & O(R + C) Elimination","exampleText":"Search 5 in 5x5 Row/Col sorted matrix","exampleOutput":"--- Search a 2D Matrix II (Staircase Search) ---\\nTarget 5 FOUND in Staircase Matrix Search!","logicExplanation":"1. **Top-Right Pivot**: Top-right cell is max of row 0 and min of col C-1.\\n2. **Branching**: Decrement `col` if cell too large; increment `row` if cell too small.","answerFile":"./answers/answer17.c","codeExplanation":"1. `search_staircase()`: Performs O(R + C) staircase matrix search."},{"projectId":"BS_018","title":"Single Element in a Sorted Array (Doubles Pattern Binary Search)","difficulty":"Intermediate","description":"Given a sorted array where every element appears exactly twice except for one single element, find the single element in O(log N) time. Before the single element, pairs start at EVEN indices `(even, odd)`; after the single element, pairs start at ODD indices `(odd, even)`. Use index parity during binary search. In this project, you will build a Single Element Finder in C.","learningOutcome":"Index Parity Analysis, Double Element Pattern Bounds & O(log N) Single Item Locating","exampleText":"Array [1, 1, 2, 3, 3, 4, 4, 8, 8]","exampleOutput":"--- Single Element in Sorted Array ---\\nSingle Non-Duplicate Element = 2","logicExplanation":"1. **Parity Check**: Ensure `mid` is even index.\\n2. **Pattern Test**: If `nums[mid] == nums[mid + 1]`, single element is to the right (`low = mid + 2`); else to the left.","answerFile":"./answers/answer18.c","codeExplanation":"1. `single_non_duplicate()`: Locates single element using index parity binary search."},{"projectId":"BS_019","title":"Find Kth Smallest Element in a Sorted Matrix","difficulty":"Intermediate","description":"Given an `N x N` matrix where each row and column is sorted, find the K-th smallest element. Binary search on value range `[matrix[0][0] .. matrix[N-1][N-1]]`. Count elements `<= mid` in O(N) time using staircase count. Total time O(N log(Max - Min)). In this project, you will build Kth Smallest Matrix Finder in C.","learningOutcome":"Matrix Value Range Binary Search, Staircase Counting & O(N log Range) Selection","exampleText":"Matrix 3x3, K = 8","exampleOutput":"--- Kth Smallest Element in Sorted Matrix ---\\nThe 8-th Smallest Element = 13","logicExplanation":"1. **Value Range**: Search space `low = top_left`, `high = bottom_right`.\\n2. **Staircase Count**: Count elements `<= mid` in matrix in O(N) steps.","answerFile":"./answers/answer19.c","codeExplanation":"1. `kth_smallest_matrix()`: Computes Kth smallest element in sorted matrix."},{"projectId":"BS_020","title":"Median of Two Sorted Arrays of Different Sizes in O(log(min(N,M)))","difficulty":"Intermediate","description":"Given two sorted arrays A (size N) and B (size M), find their median in `O(log(min(N, M)))` time complexity using binary search partitioning. Partition array A at index `i1` and array B at index `i2` such that `LeftHalfSize == RightHalfSize` and `max(L1, L2) <= min(R1, R2)`. In this project, you will build the Dual Sorted Array Median Optimizer in C.","learningOutcome":"Array Partition Binary Search, Hard Asymptotic Constraint `O(log(min(N,M)))` & Median Formula","exampleText":"A = [1, 3], B = [2]","exampleOutput":"--- Median of Two Sorted Arrays O(log(min(N,M))) ---\\nMedian = 2.0","logicExplanation":"1. **Partition Formula**: Binary search partition index `i1` on smaller array A.\\n2. **Cross Check**: Verify `L1 <= R2` and `L2 <= R1` to locate exact median cut.","answerFile":"./answers/answer20.c","codeExplanation":"1. `find_median_sorted_arrays()`: Solves median of two sorted arrays in O(log(min(N,M))) time."},{"projectId":"BS_021","title":"K-th Smallest Pair Distance Engine","difficulty":"Advanced","description":"Given an integer array, the distance of a pair `(A, B)` is `|A - B|`. Find the K-th smallest distance among all possible pairs. Binary search on distance range `[0 .. max - min]`. Count pairs with distance `<= mid` using two pointers in O(N log N) time. In this project, you will build K-th Smallest Pair Distance Engine in C.","learningOutcome":"Pair Distance Search Space, Two-Pointer Pair Counting & Binary Distance Search","exampleText":"Find K-th smallest pair distance","exampleOutput":"--- K-th Smallest Pair Distance Engine ---\\nK-th Smallest Absolute Difference Pair = 2","logicExplanation":"1. **Sort Array**: Sort array to enable two-pointer pair counting.\\n2. **Binary Search**: Search distance `D` in `[0 .. max - min]` and count pairs with distance `<= D`.","answerFile":"./answers/answer21.c","codeExplanation":"1. `smallest_pair_distance_demo()`: Computes K-th smallest pair distance."},{"projectId":"BS_022","title":"Minimize Max Distance to Gas Station","difficulty":"Advanced","description":"Given N gas station positions along a highway and integer K, add K new gas stations such that the MAXIMUM distance between adjacent gas stations is MINIMIZED. Perform binary search on floating point distance D with precision `1e-6`. In this project, you will build a Gas Station Distance Optimizer in C.","learningOutcome":"Continuous Floating Point Binary Search, Precision Tolerances `1e-6` & Minimax Distance","exampleText":"Minimize max distance by adding K stations","exampleOutput":"--- Minimize Max Distance to Gas Station ---\\nMinimized Maximum Distance = 0.500000","logicExplanation":"1. **Floating Search**: Binary search on continuous floating distance `D`.\\n2. **Stations Needed**: Sum `ceil((stations[i+1] - stations[i]) / D) - 1`. If total stations <= K, decrease distance D.","answerFile":"./answers/answer22.c","codeExplanation":"1. `min_max_gas_station_demo()`: Optimizes maximum distance between gas stations."},{"projectId":"BS_023","title":"Ternary Search Engine for Unimodal Continuous Real Functions","difficulty":"Advanced","description":"Binary search works on monotonic functions. For Unimodal functions (functions that strictly increase then strictly decrease, like a parabola), Ternary Search divides the interval `[low, high]` into THREE parts using `m1 = low + (high - low)/3` and `m2 = high - (high - low)/3` to locate the peak in O(log_1.5 N) time. In this project, you will build a Ternary Search Engine in C.","learningOutcome":"Unimodal Peak Minimization/Maximization, Ternary Search Interval Tri-partitioning & Real Functions","exampleText":"Find maximum of parabolic function f(x) on [0, 10]","exampleOutput":"--- Ternary Search on Unimodal Real Functions ---\\nMaximum point located at X = 3.000000","logicExplanation":"1. **Tri-partition**: Evaluate `f(m1)` and `f(m2)`.\\n2. **Narrow Interval**: If `f(m1) < f(m2)`, discard left third `[low .. m1]`; else discard right third `[m2 .. high]`.","answerFile":"./answers/answer23.c","codeExplanation":"1. `ternary_search()`: Finds maximum point of unimodal real function via ternary search."},{"projectId":"BS_024","title":"Fractional Binary Search (Newton-Raphson Style High-Precision Floating Search)","difficulty":"Advanced","description":"Compute high-precision floating point roots `sqrt(2.0)` to 7 decimal places using binary search on floating point domains with termination condition `(high - low > 1e-7)`. In this project, you will build a Fractional Binary Search Engine in C.","learningOutcome":"High-Precision Floating Binary Search, Epsilon Termination Thresholds (`1e-7`) & Real Roots","exampleText":"Compute sqrt(2.0) to 7 decimal places","exampleOutput":"--- Fractional High-Precision Floating Binary Search ---\\nHigh-Precision Sqrt(2.0) = 1.4142136","logicExplanation":"1. **Epsilon Loop**: Loop while `high - low > 1e-7`.\\n2. **Float Mid**: Compute `mid = low + (high - low) / 2.0` without integer truncation.","answerFile":"./answers/answer24.c","codeExplanation":"1. `sqrt_float()`: Computes high-precision square root via fractional binary search."},{"projectId":"BS_025","title":"Parallel Lock-Free Binary Search Space Partitioning for Massive Data","difficulty":"Advanced","description":"For petabyte-scale search spaces (e.g. GPU database index lookups), partition the search space into independent intervals `[low_i .. high_i]` and run parallel binary searches across worker threads without synchronization locks. In this project, you will build a Parallel Binary Search Simulator in C.","learningOutcome":"Parallel Search Space Partitioning, GPU Search Acceleration & Lock-Free Thread Independence","exampleText":"Parallel search across 8 GPU worker threads","exampleOutput":"--- Parallel Lock-Free Binary Search Space Partitioning ---\\nPartitioned search space across 8 GPU worker threads simultaneously.","logicExplanation":"1. **Domain Partition**: Split master domain into N independent sub-ranges.\\n2. **Parallel Binary Search**: Run binary search on each worker thread concurrently.","answerFile":"./answers/answer25.c","codeExplanation":"1. `parallel_binary_search_demo()`: Simulates parallel lock-free binary search space partitioning."}]'),d={projectCategory:j,subject:z,board:L,class:"Computer Science Core / BCA / B.Tech",tools:q,institute:U,projects:G};function Z(){const[e,c]=l.useState(null);return l.useEffect(()=>{const t=Object.assign({"./topic6_files/answers/answer1.c":u,"./topic6_files/answers/answer10.c":g,"./topic6_files/answers/answer11.c":p,"./topic6_files/answers/answer12.c":w,"./topic6_files/answers/answer13.c":f,"./topic6_files/answers/answer14.c":_,"./topic6_files/answers/answer15.c":x,"./topic6_files/answers/answer16.c":y,"./topic6_files/answers/answer17.c":S,"./topic6_files/answers/answer18.c":b,"./topic6_files/answers/answer19.c":v,"./topic6_files/answers/answer2.c":C,"./topic6_files/answers/answer20.c":B,"./topic6_files/answers/answer21.c":I,"./topic6_files/answers/answer22.c":M,"./topic6_files/answers/answer23.c":E,"./topic6_files/answers/answer24.c":O,"./topic6_files/answers/answer25.c":D,"./topic6_files/answers/answer3.c":F,"./topic6_files/answers/answer4.c":T,"./topic6_files/answers/answer5.c":k,"./topic6_files/answers/answer6.c":P,"./topic6_files/answers/answer7.c":R,"./topic6_files/answers/answer8.c":A,"./topic6_files/answers/answer9.c":N}),a={};Object.keys(t).forEach(n=>{const o=n.split("/").pop();a[o]=t[n]});const m=d.projects.map(n=>{const r=(n.answerFile||"").split("/").pop(),s=a[r];return s||console.warn(`⚠ Missing C answer file: ${r}`),{...n,answer:s||`// Source file "${r}" not found in answers folder`}});c({...d,projects:m})},[]),e?i.jsx(h,{data:e}):i.jsx("div",{className:"p-6 text-slate-400 flex items-center justify-center min-h-[300px]",children:i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"w-5 h-5 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),i.jsx("span",{children:"Loading Binary Search & Search Space Optimization Projects..."})]})})}export{Z as default};
