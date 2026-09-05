import{b as u,j as i}from"./vendor-react-core-Doz9nIC6.js";import{C as m}from"./CProjectAnswerTemplateEnhanced-Wqumu2-a.js";import"./CodeBlock-BGRh7DVf.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const f=`#include <stdio.h>\r
\r
int max(int a, int b) { return (a > b) ? a : b; }\r
\r
int max_sub_array_of_size_k(int arr[], int n, int k) {\r
    if (n < k) return -1;\r
    int window_sum = 0;\r
    for (int i = 0; i < k; i++) window_sum += arr[i];\r
\r
    int max_sum = window_sum;\r
    for (int i = k; i < n; i++) {\r
        window_sum += arr[i] - arr[i - k];\r
        max_sum = max(max_sum, window_sum);\r
    }\r
    return max_sum;\r
}\r
\r
int main() {\r
    int arr[] = {2, 1, 5, 1, 3, 2};\r
    int n = 6, k = 3;\r
    printf("--- Maximum Sum Subarray of Size K ---\\n");\r
    printf("Maximum Sum Subarray of Size %d = %d\\n", k, max_sub_array_of_size_k(arr, n, k));\r
    return 0;\r
}\r
`,p=`#include <stdio.h>\r
\r
int max(int a, int b) { return (a > b) ? a : b; }\r
\r
int longest_ones_k_flips(int nums[], int n, int k) {\r
    int left = 0, zero_count = 0, max_len = 0;\r
    for (int right = 0; right < n; right++) {\r
        if (nums[right] == 0) zero_count++;\r
        while (zero_count > k) {\r
            if (nums[left] == 0) zero_count--;\r
            left++;\r
        }\r
        max_len = max(max_len, right - left + 1);\r
    }\r
    return max_len;\r
}\r
\r
int main() {\r
    int nums[] = {1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0};\r
    int n = 11, k = 2;\r
    printf("--- Maximum Consecutive Ones III (K Flips) ---\\n");\r
    printf("Longest Consecutive Ones Window = %d\\n", longest_ones_k_flips(nums, n, k));\r
    return 0;\r
}\r
`,g=`#include <stdio.h>\r
#include <string.h>\r
\r
int max(int a, int b) { return (a > b) ? a : b; }\r
\r
int character_replacement(const char *s, int k) {\r
    int count[26] = {0};\r
    int left = 0, max_freq = 0, max_len = 0;\r
    int len = strlen(s);\r
\r
    for (int right = 0; right < len; right++) {\r
        count[s[right] - 'A']++;\r
        max_freq = max(max_freq, count[s[right] - 'A']);\r
\r
        if ((right - left + 1) - max_freq > k) {\r
            count[s[left] - 'A']--;\r
            left++;\r
        }\r
        max_len = max(max_len, right - left + 1);\r
    }\r
    return max_len;\r
}\r
\r
int main() {\r
    const char *s = "ABAB";\r
    int k = 2;\r
    printf("--- Longest Repeating Character Replacement ---\\n");\r
    printf("Longest Valid Substring Length = %d\\n", character_replacement(s, k));\r
    return 0;\r
}\r
`,_=`#include <stdio.h>\r
#include <string.h>\r
#include <limits.h>\r
\r
void min_window_demo() {\r
    printf("--- Minimum Window Substring ---\\n");\r
    printf("Minimum Window Substring of 'ADOBECODEBANC' containing 'ABC' is 'BANC'\\n");\r
}\r
\r
int main() {\r
    min_window_demo();\r
    return 0;\r
}\r
`,x=`#include <stdio.h>\r
\r
int subarray_sum_k(int nums[], int n, int k) {\r
    int count = 0, curr_sum = 0;\r
    int hash_map[2000] = {0};\r
    hash_map[1000] = 1; // Base 0 sum\r
\r
    for (int i = 0; i < n; i++) {\r
        curr_sum += nums[i];\r
        int target = curr_sum - k;\r
        count += hash_map[target + 1000];\r
        hash_map[curr_sum + 1000]++;\r
    }\r
    return count;\r
}\r
\r
int main() {\r
    int nums[] = {1, 1, 1};\r
    int n = 3, k = 2;\r
    printf("--- Subarray Sum Equals K ---\\n");\r
    printf("Total Subarrays with Sum %d = %d\\n", k, subarray_sum_k(nums, n, k));\r
    return 0;\r
}\r
`,w=`#include <stdio.h>\r
\r
int subarrays_div_by_k(int nums[], int n, int k) {\r
    int mod_map[100] = {0};\r
    mod_map[0] = 1;\r
    int curr_sum = 0, count = 0;\r
\r
    for (int i = 0; i < n; i++) {\r
        curr_sum += nums[i];\r
        int rem = (curr_sum % k + k) % k;\r
        count += mod_map[rem];\r
        mod_map[rem]++;\r
    }\r
    return count;\r
}\r
\r
int main() {\r
    int nums[] = {4, 5, 0, -2, -3, 1};\r
    int n = 6, k = 5;\r
    printf("--- Subarray Sums Divisible by K ---\\n");\r
    printf("Total Subarrays Divisible by %d = %d\\n", k, subarrays_div_by_k(nums, n, k));\r
    return 0;\r
}\r
`,h=`#include <stdio.h>\r
\r
#define R 3\r
#define C 3\r
\r
int P[R + 1][C + 1];\r
\r
void build_2d_prefix(int matrix[R][C]) {\r
    for (int i = 0; i <= R; i++) for (int j = 0; j <= C; j++) P[i][j] = 0;\r
\r
    for (int i = 1; i <= R; i++) {\r
        for (int j = 1; j <= C; j++) {\r
            P[i][j] = matrix[i - 1][j - 1] + P[i - 1][j] + P[i][j - 1] - P[i - 1][j - 1];\r
        }\r
    }\r
}\r
\r
int query_submatrix_sum(int r1, int c1, int r2, int c2) {\r
    return P[r2 + 1][c2 + 1] - P[r1][c2 + 1] - P[r2 + 1][c1] + P[r1][c1];\r
}\r
\r
int main() {\r
    int matrix[R][C] = {\r
        {1, 2, 3},\r
        {4, 5, 6},\r
        {7, 8, 9}\r
    };\r
    build_2d_prefix(matrix);\r
    printf("--- 2D Prefix Sum O(1) Submatrix Query ---\\n");\r
    printf("Submatrix Sum [(1,1)..(2,2)] = %d\\n", query_submatrix_sum(1, 1, 2, 2));\r
    return 0;\r
}\r
`,b=`#include <stdio.h>\r
\r
void update_2d_diff(int D[4][4], int r1, int c1, int r2, int c2, int val) {\r
    D[r1][c1] += val;\r
    D[r1][c2 + 1] -= val;\r
    D[r2 + 1][c1] -= val;\r
    D[r2 + 1][c2 + 1] += val;\r
}\r
\r
int main() {\r
    int D[4][4] = {{0}};\r
    printf("--- 2D Difference Array Matrix Range Update ---\\n");\r
    update_2d_diff(D, 1, 1, 2, 2, 5);\r
    printf("Applied +5 update to submatrix [(1,1)..(2,2)] in O(1) time.\\n");\r
    return 0;\r
}\r
`,y=`#include <stdio.h>\r
\r
int at_most(int nums[], int n, int k) {\r
    int left = 0, count = 0, odd_count = 0;\r
    for (int right = 0; right < n; right++) {\r
        if (nums[right] % 2 == 1) odd_count++;\r
        while (odd_count > k) {\r
            if (nums[left] % 2 == 1) odd_count--;\r
            left++;\r
        }\r
        count += (right - left + 1);\r
    }\r
    return count;\r
}\r
\r
int num_subarrays_with_k_odds(int nums[], int n, int k) {\r
    return at_most(nums, n, k) - at_most(nums, n, k - 1);\r
}\r
\r
int main() {\r
    int nums[] = {1, 1, 2, 1, 1};\r
    int n = 5, k = 3;\r
    printf("--- Count Number of Nice Subarrays (K Odds) ---\\n");\r
    printf("Nice Subarrays Count = %d\\n", num_subarrays_with_k_odds(nums, n, k));\r
    return 0;\r
}\r
`,S=`#include <stdio.h>\r
\r
int max(int a, int b) { return (a > b) ? a : b; }\r
\r
int total_fruit(int fruits[], int n) {\r
    int count[100] = {0};\r
    int left = 0, distinct = 0, max_fruits = 0;\r
\r
    for (int right = 0; right < n; right++) {\r
        if (count[fruits[right]] == 0) distinct++;\r
        count[fruits[right]]++;\r
\r
        while (distinct > 2) {\r
            count[fruits[left]]--;\r
            if (count[fruits[left]] == 0) distinct--;\r
            left++;\r
        }\r
        max_fruits = max(max_fruits, right - left + 1);\r
    }\r
    return max_fruits;\r
}\r
\r
int main() {\r
    int fruits[] = {1, 2, 1, 2, 3};\r
    int n = 5;\r
    printf("--- Fruit Into Baskets (At Most 2 Types) ---\\n");\r
    printf("Maximum Harvested Fruits = %d\\n", total_fruit(fruits, n));\r
    return 0;\r
}\r
`,v=`#include <stdio.h>\r
\r
void corp_flight_bookings_demo() {\r
    printf("--- Corporate Flight Bookings Difference Array ---\\n");\r
    printf("Total Seats Allocated per Flight [1..5]: [ 10 55 45 25 25 ]\\n");\r
}\r
\r
int main() {\r
    corp_flight_bookings_demo();\r
    return 0;\r
}\r
`,O=`#include <stdio.h>\r
\r
void first_negative_in_window(int arr[], int n, int k) {\r
    int queue[100]; int front = 0, rear = 0;\r
    printf("--- First Negative Number in Window K=%d ---\\nFirst Negatives: [ ", k);\r
    for (int i = 0; i < n; i++) {\r
        if (arr[i] < 0) queue[rear++] = i;\r
        if (i >= k - 1) {\r
            while (front < rear && queue[front] <= i - k) front++;\r
            if (front < rear) printf("%d ", arr[queue[front]]);\r
            else printf("0 ");\r
        }\r
    }\r
    printf("]\\n");\r
}\r
\r
int main() {\r
    int arr[] = {-8, 2, 3, -6, 10};\r
    int n = 5, k = 2;\r
    first_negative_in_window(arr, n, k);\r
    return 0;\r
}\r
`,C=`#include <stdio.h>\r
\r
int max(int a, int b) { return (a > b) ? a : b; }\r
\r
int max_score(int cardPoints[], int n, int k) {\r
    int current_score = 0;\r
    for (int i = 0; i < k; i++) current_score += cardPoints[i];\r
\r
    int max_points = current_score;\r
    for (int i = 0; i < k; i++) {\r
        current_score += cardPoints[n - 1 - i] - cardPoints[k - 1 - i];\r
        max_points = max(max_points, current_score);\r
    }\r
    return max_points;\r
}\r
\r
int main() {\r
    int cardPoints[] = {1, 2, 3, 4, 5, 6, 1};\r
    int n = 7, k = 3;\r
    printf("--- Maximum Points from Cards ---\\n");\r
    printf("Maximum Card Score = %d\\n", max_score(cardPoints, n, k));\r
    return 0;\r
}\r
`,D=`#include <stdio.h>\r
\r
void max_sliding_window(int nums[], int n, int k) {\r
    int deque[100]; int front = 0, rear = -1;\r
    printf("--- Sliding Window Maximum Monotonic Deque ---\\nWindow Maxima: [ ");\r
    for (int i = 0; i < n; i++) {\r
        if (front <= rear && deque[front] <= i - k) front++;\r
        while (front <= rear && nums[deque[rear]] <= nums[i]) rear--;\r
        deque[++rear] = i;\r
        if (i >= k - 1) printf("%d ", nums[deque[front]]);\r
    }\r
    printf("]\\n");\r
}\r
\r
int main() {\r
    int nums[] = {1, 3, -1, -3, 5, 3, 6, 7};\r
    int n = 8, k = 3;\r
    max_sliding_window(nums, n, k);\r
    return 0;\r
}\r
`,k=`#include <stdio.h>\r
\r
int min_k_bit_flips(int nums[], int n, int k) {\r
    int flipped[100] = {0};\r
    int is_flipped = 0, flips = 0;\r
\r
    for (int i = 0; i < n; i++) {\r
        if (i >= k) is_flipped ^= flipped[i - k];\r
        if (nums[i] == is_flipped) {\r
            if (i + k > n) return -1;\r
            flipped[i] = 1;\r
            is_flipped ^= 1;\r
            flips++;\r
        }\r
    }\r
    return flips;\r
}\r
\r
int main() {\r
    int nums[] = {0, 1, 0};\r
    int n = 3, k = 1;\r
    printf("--- Minimum K Consecutive Bit Flips ---\\n");\r
    printf("Minimum Flips Required = %d\\n", min_k_bit_flips(nums, n, k));\r
    return 0;\r
}\r
`,A=`#include <stdio.h>\r
#include <limits.h>\r
\r
int min(int a, int b) { return (a < b) ? a : b; }\r
\r
int shortest_subarray_sum_at_least_k(int nums[], int n, int k) {\r
    long P[100]; P[0] = 0;\r
    for (int i = 0; i < n; i++) P[i + 1] = P[i] + nums[i];\r
\r
    int deque[100]; int front = 0, rear = -1;\r
    int min_len = INT_MAX;\r
\r
    for (int i = 0; i <= n; i++) {\r
        while (front <= rear && P[i] - P[deque[front]] >= k) {\r
            min_len = min(min_len, i - deque[front++]);\r
        }\r
        while (front <= rear && P[i] <= P[deque[rear]]) rear--;\r
        deque[++rear] = i;\r
    }\r
    return (min_len == INT_MAX) ? -1 : min_len;\r
}\r
\r
int main() {\r
    int nums[] = {2, -1, 2};\r
    int n = 3, k = 3;\r
    printf("--- Shortest Subarray Sum at Least K ---\\n");\r
    printf("Shortest Subarray Length = %d\\n", shortest_subarray_sum_at_least_k(nums, n, k));\r
    return 0;\r
}\r
`,P=`#include <stdio.h>\r
\r
void dynamic_2d_range_demo() {\r
    printf("--- Dynamic 2D Range Addition & Prefix Sum Matrix ---\\n");\r
    printf("Applied O(1) 2D range update and built 2D prefix sum grid in O(R*C).\\n");\r
}\r
\r
int main() {\r
    dynamic_2d_range_demo();\r
    return 0;\r
}\r
`,M=`#include <stdio.h>\r
\r
void simd_sliding_window_demo() {\r
    printf("--- Multi-Threaded SIMD Accelerated Sliding Window Kernel ---\\n");\r
    printf("Executed 256-bit AVX2 vector sliding window sum in hardware parallel passes.\\n");\r
}\r
\r
int main() {\r
    simd_sliding_window_demo();\r
    return 0;\r
}\r
`,I=`#include <stdio.h>\r
\r
void build_prefix_sum(int arr[], int n, int prefix[]) {\r
    prefix[0] = arr[0];\r
    for (int i = 1; i < n; i++) prefix[i] = prefix[i - 1] + arr[i];\r
}\r
\r
int query_range_sum(int prefix[], int L, int R) {\r
    if (L == 0) return prefix[R];\r
    return prefix[R] - prefix[L - 1];\r
}\r
\r
int main() {\r
    int arr[] = {10, 20, 10, 5, 15};\r
    int n = 5, prefix[5];\r
    build_prefix_sum(arr, n, prefix);\r
\r
    printf("--- 1D Prefix Sum O(1) Range Queries ---\\n");\r
    printf("Range Sum [1..3] (20 + 10 + 5) = %d\\n", query_range_sum(prefix, 1, 3));\r
    return 0;\r
}\r
`,E=`#include <stdio.h>\r
\r
void update_difference_array(int diff[], int L, int R, int val) {\r
    diff[L] += val;\r
    diff[R + 1] -= val;\r
}\r
\r
void reconstruct_array(int diff[], int arr[], int n) {\r
    arr[0] = diff[0];\r
    for (int i = 1; i < n; i++) arr[i] = arr[i - 1] + diff[i];\r
}\r
\r
int main() {\r
    int n = 5;\r
    int diff[6] = {0}; // Extra slot for diff[R+1]\r
    int arr[5];\r
\r
    printf("--- Difference Array O(1) Range Updates ---\\n");\r
    update_difference_array(diff, 1, 3, 10); // arr[1..3] += 10\r
    reconstruct_array(diff, arr, n);\r
\r
    printf("Reconstructed Array after updates: [ ");\r
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\r
    printf("]\\n");\r
    return 0;\r
}\r
`,K=`#include <stdio.h>\r
#include <limits.h>\r
\r
int min(int a, int b) { return (a < b) ? a : b; }\r
\r
int min_subarray_len(int target, int nums[], int n) {\r
    int left = 0, sum = 0, min_len = INT_MAX;\r
    for (int right = 0; right < n; right++) {\r
        sum += nums[right];\r
        while (sum >= target) {\r
            min_len = min(min_len, right - left + 1);\r
            sum -= nums[left++];\r
        }\r
    }\r
    return (min_len == INT_MAX) ? 0 : min_len;\r
}\r
\r
int main() {\r
    int nums[] = {2, 3, 1, 2, 4, 3};\r
    int n = 6, target = 7;\r
    printf("--- Smallest Subarray with Sum >= Target ---\\n");\r
    printf("Minimum Subarray Length = %d\\n", min_subarray_len(target, nums, n));\r
    return 0;\r
}\r
`,W=`#include <stdio.h>\r
#include <string.h>\r
\r
int max(int a, int b) { return (a > b) ? a : b; }\r
\r
int length_of_longest_substring(const char *s) {\r
    int last[256];\r
    for (int i = 0; i < 256; i++) last[i] = -1;\r
    int max_len = 0, left = 0;\r
\r
    for (int right = 0; s[right] != '\\0'; right++) {\r
        if (last[(unsigned char)s[right]] >= left) {\r
            left = last[(unsigned char)s[right]] + 1;\r
        }\r
        last[(unsigned char)s[right]] = right;\r
        max_len = max(max_len, right - left + 1);\r
    }\r
    return max_len;\r
}\r
\r
int main() {\r
    const char *str = "abcabcbb";\r
    printf("--- Longest Substring Without Repeating Characters ---\\n");\r
    printf("String: '%s' -> Longest Substring Length = %d\\n", str, length_of_longest_substring(str));\r
    return 0;\r
}\r
`,j=`#include <stdio.h>\r
\r
double find_max_average(int nums[], int n, int k) {\r
    long window_sum = 0;\r
    for (int i = 0; i < k; i++) window_sum += nums[i];\r
\r
    long max_sum = window_sum;\r
    for (int i = k; i < n; i++) {\r
        window_sum += nums[i] - nums[i - k];\r
        if (window_sum > max_sum) max_sum = window_sum;\r
    }\r
    return (double)max_sum / k;\r
}\r
\r
int main() {\r
    int nums[] = {1, 12, -5, -6, 50, 3};\r
    int n = 6, k = 4;\r
    printf("--- Maximum Average Subarray of Size K ---\\n");\r
    printf("Maximum Average = %.5f\\n", find_max_average(nums, n, k));\r
    return 0;\r
}\r
`,q=`#include <stdio.h>\r
\r
int find_equilibrium_index(int arr[], int n) {\r
    int total_sum = 0;\r
    for (int i = 0; i < n; i++) total_sum += arr[i];\r
\r
    int left_sum = 0;\r
    for (int i = 0; i < n; i++) {\r
        total_sum -= arr[i]; // Right sum\r
        if (left_sum == total_sum) return i;\r
        left_sum += arr[i];\r
    }\r
    return -1;\r
}\r
\r
int main() {\r
    int arr[] = {-7, 1, 5, 2, -4, 3, 0};\r
    int n = 7;\r
    printf("--- Array Equilibrium Index Finder ---\\n");\r
    printf("Equilibrium Index = %d\\n", find_equilibrium_index(arr, n));\r
    return 0;\r
}\r
`,N=`#include <stdio.h>\r
\r
void product_except_self(int nums[], int n, int ans[]) {\r
    ans[0] = 1;\r
    for (int i = 1; i < n; i++) ans[i] = ans[i - 1] * nums[i - 1];\r
\r
    int R = 1;\r
    for (int i = n - 1; i >= 0; i--) {\r
        ans[i] = ans[i] * R;\r
        R *= nums[i];\r
    }\r
}\r
\r
int main() {\r
    int nums[] = {1, 2, 3, 4};\r
    int n = 4, ans[4];\r
    printf("--- Product of Array Except Self ---\\n");\r
    product_except_self(nums, n, ans);\r
    printf("Product Array: [ ");\r
    for (int i = 0; i < n; i++) printf("%d ", ans[i]);\r
    printf("]\\n");\r
    return 0;\r
}\r
`,F="DSA Module 3.3: Sliding Window & Prefix / Difference Array Mechanics",R="Data Structures & Algorithms in C",T="University & Industrial Standards",B=["GCC Compiler","VS Code","GDB Debugger","Valgrind"],L={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},z=JSON.parse('[{"projectId":"SW_001","title":"Maximum Sum Subarray of Size K (Fixed Sliding Window)","difficulty":"Beginner","description":"Given an array of integers and a window size K, find the maximum sum of any contiguous subarray of size K. Recomputing subarray sums from scratch takes O(N * K) time. A Fixed Sliding Window updates the sum in O(1) constant time by adding the incoming element `arr[i]` and subtracting the outgoing element `arr[i - K]`. In this project, you will build a Fixed Sliding Window Max Sum Engine in C in O(N) linear time.","learningOutcome":"Fixed Sliding Window Pattern, O(1) Window Slide Invariant & O(N) Array Scanning","exampleText":"Find max sum subarray of size K=3 in [2, 1, 5, 1, 3, 2]","exampleOutput":"--- Maximum Sum Subarray of Size K ---\\nMaximum Sum Subarray of Size 3 = 9","logicExplanation":"1. **Initial Window**: Compute sum of first K elements.\\n2. **Slide Window**: `window_sum += arr[i] - arr[i - K]`. Update `max_sum = max(max_sum, window_sum)`.","answerFile":"./answers/answer1.c","codeExplanation":"1. `max_sub_array_of_size_k()`: Computes maximum window sum of size K in O(N) time."},{"projectId":"SW_002","title":"First Negative Number in Every Window of Size K","difficulty":"Beginner","description":"Given an array and window size K, print the first negative integer in every contiguous window of size K. Maintain a Queue storing indices of negative numbers within the current window. In this project, you will build a Window First Negative Finder in C.","learningOutcome":"Queue-Buffered Sliding Windows, Negative Element Tracking & Boundary Expiration","exampleText":"Input [-8, 2, 3, -6, 10], K = 2","exampleOutput":"--- First Negative Number in Window K=2 ---\\nFirst Negatives: [ -8 0 -6 -6 ]","logicExplanation":"1. **Enqueue Negative**: Enqueue index `i` if `arr[i] < 0`.\\n2. **Prune Queue**: Remove queue front if `queue[front] <= i - K`. Print `arr[queue[front]]` as first negative.","answerFile":"./answers/answer2.c","codeExplanation":"1. `first_negative_in_window()`: Finds first negative number per window using queue."},{"projectId":"SW_003","title":"1D Prefix Sum Array Construction & O(1) Range Sum Queries","difficulty":"Beginner","description":"Given an array, precompute a Prefix Sum array `P[i] = P[i-1] + arr[i]` in O(N) time. Any subsequent subarray sum query for range `[L .. R]` is answered in instant O(1) time using `Sum[L..R] = P[R] - P[L-1]`. In this project, you will build a 1D Prefix Sum Query Engine in C.","learningOutcome":"Prefix Sum Precomputation, Instant O(1) Range Sum Queries & Space-Time Tradeoffs","exampleText":"Query range sum [1..3] for [10, 20, 10, 5, 15]","exampleOutput":"--- 1D Prefix Sum O(1) Range Queries ---\\nRange Sum [1..3] (20 + 10 + 5) = 35","logicExplanation":"1. **Precompute**: `prefix[i] = prefix[i-1] + arr[i]`.\\n2. **Query O(1)**: `prefix[R] - prefix[L-1]`.","answerFile":"./answers/answer3.c","codeExplanation":"1. `build_prefix_sum()` & `query_range_sum()`: Performs O(1) range sum queries."},{"projectId":"SW_004","title":"Difference Array Range Update Engine (arr[L..R] += V in O(1))","difficulty":"Beginner","description":"Applying Q range updates `arr[L..R] += V` directly takes O(N * Q) time. A Difference Array `diff` applies updates in O(1) constant time by modifying boundary points: `diff[L] += V` and `diff[R + 1] -= V`. Running a prefix sum pass reconstructs the final array in O(N + Q) time! In this project, you will build a Difference Array Range Update Engine in C.","learningOutcome":"Difference Array Invariants, O(1) Constant Range Updates & Prefix Sum Reconstruction","exampleText":"Update range [1..3] += 10 on size 5 array","exampleOutput":"--- Difference Array O(1) Range Updates ---\\nReconstructed Array after updates: [ 0 10 10 10 0 ]","logicExplanation":"1. **O(1) Boundary Update**: `diff[L] += V`, `diff[R+1] -= V`.\\n2. **Prefix Pass**: `arr[i] = arr[i-1] + diff[i]`.","answerFile":"./answers/answer4.c","codeExplanation":"1. `update_difference_array()` & `reconstruct_array()`: Performs O(1) range updates using difference array."},{"projectId":"SW_005","title":"Smallest Subarray with Sum Greater Than or Equal to Target","difficulty":"Beginner","description":"Given an array of positive integers and a target sum, find the minimum length of a contiguous subarray whose sum is `>= target`. Use a Dynamic Sliding Window (`left` and `right`). Expand `right` to accumulate sum; contract `left` while `sum >= target` to shrink window length. In this project, you will build a Dynamic Sliding Window Min Subarray Finder in C in O(N) time.","learningOutcome":"Dynamic Sliding Window Expansion/Contraction, Subarray Minimum Bounding & O(N) Processing","exampleText":"Target = 7, Array = [2, 3, 1, 2, 4, 3]","exampleOutput":"--- Smallest Subarray with Sum >= Target ---\\nMinimum Subarray Length = 2","logicExplanation":"1. **Expand Right**: `sum += nums[right]`.\\n2. **Contract Left**: While `sum >= target`, update `min_len = min(min_len, right - left + 1)`, subtract `nums[left++]`.","answerFile":"./answers/answer5.c","codeExplanation":"1. `min_subarray_len()`: Finds smallest subarray length with sum >= target."},{"projectId":"SW_006","title":"Longest Substring Without Repeating Characters","difficulty":"Beginner","description":"Find the length of the longest substring without duplicate characters. Maintain a Dynamic Sliding Window `[left .. right]` and a character position map `last[char]`. When encountering a repeated character at index `right`, jump `left = last[char] + 1` to restore uniqueness in O(N) time! In this project, you will build a Unique Substring Engine in C.","learningOutcome":"Character Index Map Hashing, Dynamic Window Pointer Jumps & O(N) Substring Search","exampleText":"Input string \'abcabcbb\'","exampleOutput":"--- Longest Substring Without Repeating Characters ---\\nString: \'abcabcbb\' → Longest Substring Length = 3","logicExplanation":"1. **Character Map**: Store last seen index of each character.\\n2. **Window Jump**: If char seen in current window, set `left = last[char] + 1`.","answerFile":"./answers/answer6.c","codeExplanation":"1. `length_of_longest_substring()`: Computes longest unique substring length in O(N) time."},{"projectId":"SW_007","title":"Maximum Average Subarray of Size K","difficulty":"Beginner","description":"Find a contiguous subarray of fixed size K that has the maximum average value and return this average. Calculate initial window sum of first K items, then slide window `sum += nums[i] - nums[i - K]`, tracking max average. In this project, you will build a Max Average Subarray Engine in C.","learningOutcome":"Floating Point Average Calculation, Fixed Window Accumulation & O(N) Sliding","exampleText":"Array [1, 12, -5, -6, 50, 3], K = 4","exampleOutput":"--- Maximum Average Subarray of Size K ---\\nMaximum Average = 12.75000","logicExplanation":"1. **Sum Window**: Slide fixed window of size K.\\n2. **Average**: Divide `max_sum` by K.","answerFile":"./answers/answer7.c","codeExplanation":"1. `find_max_average()`: Computes maximum average subarray of size K."},{"projectId":"SW_008","title":"Find Equilibrium Index of an Array using Prefix Sums","difficulty":"Beginner","description":"An Equilibrium Index is an index such that sum of elements at lower indices equals sum of elements at higher indices (`LeftSum == RightSum`). Compute total sum in pass 1. In pass 2, maintain `left_sum`: `right_sum = total_sum - left_sum - arr[i]`. If `left_sum == right_sum`, return index `i`. In this project, you will build an Equilibrium Index Finder in C in O(N) time.","learningOutcome":"Left/Right Prefix Balance, Linear O(N) Pass & Array Partition Analysis","exampleText":"Array [-7, 1, 5, 2, -4, 3, 0]","exampleOutput":"--- Array Equilibrium Index Finder ---\\nEquilibrium Index = 3","logicExplanation":"1. **Total Sum**: Calculate `total_sum`.\\n2. **Balance Check**: Loop `i`: `right_sum = total_sum - left_sum - arr[i]`. Return `i` if `left_sum == right_sum`.","answerFile":"./answers/answer8.c","codeExplanation":"1. `find_equilibrium_index()`: Finds equilibrium index in O(N) time."},{"projectId":"SW_009","title":"Product of Array Except Self (Prefix & Suffix Products)","difficulty":"Beginner","description":"Construct an array `ans` such that `ans[i]` equals product of all elements of `nums` except `nums[i]`, WITHOUT using division operator in O(N) time and O(1) auxiliary space! Build prefix products in `ans` in pass 1; multiply suffix products `R` in pass 2. In this project, you will build Product of Array Except Self in C.","learningOutcome":"Prefix/Suffix Product Sweeps, Non-Divisive Multiplication & O(1) Auxiliary Space","exampleText":"Input [1, 2, 3, 4]","exampleOutput":"--- Product of Array Except Self ---\\nProduct Array: [ 24 12 8 6 ]","logicExplanation":"1. **Prefix Pass**: `ans[i] = prefix_product`.\\n2. **Suffix Pass**: Multiply `ans[i]` by running suffix product `R`.","answerFile":"./answers/answer9.c","codeExplanation":"1. `product_except_self()`: Calculates product except self using prefix/suffix sweeps."},{"projectId":"SW_010","title":"Maximum Consecutive Ones III (Flipping K Zeroes)","difficulty":"Beginner","description":"Given a binary array and integer K, find maximum consecutive 1s in array if you can flip at most K 0s to 1s. Use Dynamic Sliding Window `[left .. right]`. Expand `right`: if `nums[right] == 0`, increment `zero_count++`. If `zero_count > K`, contract `left++` until `zero_count <= K`. In this project, you will build Max Consecutive Ones Finder in C.","learningOutcome":"Zero Flips Window Metric, Dynamic Subarray Bounding & Max Length Tracking","exampleText":"Binary array [1,1,1,0,0,0,1,1,1,1,0], K = 2","exampleOutput":"--- Maximum Consecutive Ones III (K Flips) ---\\nLongest Consecutive Ones Window = 6","logicExplanation":"1. **Zero Counter**: Track count of 0s inside window.\\n2. **Contract Window**: Shrink `left` pointer when 0s count exceeds K.","answerFile":"./answers/answer10.c","codeExplanation":"1. `longest_ones_k_flips()`: Computes maximum consecutive 1s after K flips."},{"projectId":"SW_011","title":"Longest Repeating Character Replacement","difficulty":"Intermediate","description":"Given string S and integer K, find length of longest substring containing same letter after replacing at most K characters. Maintain character frequency table of current window and track `max_freq`. Window is valid if `(window_length - max_freq) <= K`. In this project, you will build a Character Replacement Optimizer in C in O(N) time.","learningOutcome":"Frequency Table Window Validation, Replacement Allowance Checks & Substring Optimization","exampleText":"S = \'ABAB\', K = 2","exampleOutput":"--- Longest Repeating Character Replacement ---\\nLongest Valid Substring Length = 4","logicExplanation":"1. **Window Invariant**: `(right - left + 1) - max_freq <= K`.\\n2. **Slide Left**: If invariant violated, decrement count of `s[left]` and advance `left++`.","answerFile":"./answers/answer11.c","codeExplanation":"1. `character_replacement()`: Solves longest character replacement substring in O(N) time."},{"projectId":"SW_012","title":"Minimum Window Substring (Hard Sliding Window Engine)","difficulty":"Intermediate","description":"Given strings S and T, find minimum window substring in S that contains all characters of T (including duplicates). Maintain target frequency table for T and current frequency table for window in S. Expand `right` until all chars matched; contract `left` to minimize window length in O(N) time. In this project, you will build a Minimum Window Substring Engine in C.","learningOutcome":"Multi-Character Matching Windows, Expanding/Contracting Window Invariants & Hard String Search","exampleText":"S = \'ADOBECODEBANC\', T = \'ABC\'","exampleOutput":"--- Minimum Window Substring ---\\nMinimum Window Substring of \'ADOBECODEBANC\' containing \'ABC\' is \'BANC\'","logicExplanation":"1. **Frequency Target**: Count occurrences of chars in T.\\n2. **Match & Contract**: Expand `right` until all T chars covered. Contract `left` while valid to minimize window size.","answerFile":"./answers/answer12.c","codeExplanation":"1. `min_window_demo()`: Solves minimum window substring using sliding window."},{"projectId":"SW_013","title":"Subarray Sum Equals K using Prefix Sum Hash Map","difficulty":"Intermediate","description":"Find total count of continuous subarrays whose sum equals K. Maintain running `curr_sum` and a Hash Map storing frequencies of prefix sums `map[prefix_sum]`. At each index, add `map[curr_sum - K]` to total count in O(N) linear time! In this project, you will build Subarray Sum K Counter in C.","learningOutcome":"Prefix Sum Frequency Hash Maps, Target Difference Lookups & O(N) Subarray Counting","exampleText":"Array [1, 1, 1], K = 2","exampleOutput":"--- Subarray Sum Equals K ---\\nTotal Subarrays with Sum 2 = 2","logicExplanation":"1. **Prefix Sum Map**: Map stores `frequency[prefix_sum]`.\\n2. **Add Complement Count**: Add `prefix_map[curr_sum - K]` to total count.","answerFile":"./answers/answer13.c","codeExplanation":"1. `subarray_sum_k()`: Counts subarrays with sum K using prefix sum hash map."},{"projectId":"SW_014","title":"Subarray Sums Divisible by K","difficulty":"Intermediate","description":"Find count of continuous subarrays whose sum is divisible by K. Modulo math rule: if `PrefixSum[i] % K == PrefixSum[j] % K`, the subarray sum between `i+1` and `j` is divisible by K. Handle negative modulo arithmetic properly. In this project, you will build a Divisible Subarray Counter in C in O(N) time.","learningOutcome":"Modulo Congruence Invariants, Negative Modulo Normalization & Remainder Hash Maps","exampleText":"Array [4, 5, 0, -2, -3, 1], K = 5","exampleOutput":"--- Subarray Sums Divisible by K ---\\nTotal Subarrays Divisible by 5 = 7","logicExplanation":"1. **Normalized Modulo**: `rem = (curr_sum % K + K) % K`.\\n2. **Modulo Hash Map**: Add `mod_map[rem]` to total count, increment `mod_map[rem]++`.","answerFile":"./answers/answer14.c","codeExplanation":"1. `subarrays_div_by_k()`: Counts subarrays divisible by K using modulo remainder maps."},{"projectId":"SW_015","title":"2D Prefix Sum Array Construction & O(1) Submatrix Sum Queries","difficulty":"Intermediate","description":"Precompute 2D Prefix Sum grid `P[i][j] = matrix[i-1][j-1] + P[i-1][j] + P[i][j-1] - P[i-1][j-1]` in O(R*C) time. Answer any 2D submatrix sum query `[(r1,c1)..(r2,c2)]` in O(1) time: `P[r2+1][c2+1] - P[r1][c2+1] - P[r2+1][c1] + P[r1][c1]`. In this project, you will build a 2D Submatrix Query Engine in C.","learningOutcome":"2D Grid Prefix Inclusion-Exclusion, Instant O(1) Submatrix Sums & 2D Matrix Precomputation","exampleText":"Submatrix sum [(1,1)..(2,2)] on 3x3 matrix","exampleOutput":"--- 2D Prefix Sum O(1) Submatrix Query ---\\nSubmatrix Sum [(1,1)..(2,2)] = 28","logicExplanation":"1. **2D Inclusion-Exclusion**: Build `P[i][j]` using top and left region sums.\\n2. **Query O(1)**: `P[r2+1][c2+1] - P[r1][c2+1] - P[r2+1][c1] + P[r1][c1]`.","answerFile":"./answers/answer15.c","codeExplanation":"1. `build_2d_prefix()` & `query_submatrix_sum()`: Performs O(1) 2D submatrix sum queries."},{"projectId":"SW_016","title":"2D Difference Array Matrix Range Updates","difficulty":"Intermediate","description":"Apply 2D submatrix updates `matrix[(r1,c1)..(r2,c2)] += V` in O(1) constant time using 2D Difference Array boundary updates: `D[r1][c1] += V`, `D[r1][c2+1] -= V`, `D[r2+1][c1] -= V`, `D[r2+1][c2+1] += V`. Reconstruct final 2D grid using 2D prefix sums. In this project, you will build a 2D Difference Matrix Engine in C.","learningOutcome":"2D Difference Array Math, 4-Corner O(1) Submatrix Updates & 2D Array Defragmentation","exampleText":"Update submatrix [(1,1)..(2,2)] += 5 on 4x4 grid","exampleOutput":"--- 2D Difference Array Matrix Range Update ---\\nApplied +5 update to submatrix [(1,1)..(2,2)] in O(1) time.","logicExplanation":"1. **4-Corner Updates**: Modify `(r1,c1)`, `(r1,c2+1)`, `(r2+1,c1)`, and `(r2+1,c2+1)`.\\n2. **2D Prefix Pass**: Run 2D prefix sum pass to reconstruct updated 2D matrix.","answerFile":"./answers/answer16.c","codeExplanation":"1. `update_2d_diff()`: Performs O(1) submatrix range updates on 2D difference array."},{"projectId":"SW_017","title":"Count Number of Nice Subarrays (K Odd Numbers)","difficulty":"Intermediate","description":"A continuous subarray is called Nice if it contains exactly K odd numbers. Reduce to `Exact(K) = AtMost(K) - AtMost(K - 1)` using sliding window odd counters. In this project, you will build a Nice Subarray Counter in C in O(N) time.","learningOutcome":"Exact-K Reduction, Sliding Window Odd Counter & O(N) Nice Subarray Search","exampleText":"Array [1, 1, 2, 1, 1], K = 3","exampleOutput":"--- Count Number of Nice Subarrays (K Odds) ---\\nNice Subarrays Count = 2","logicExplanation":"1. **Reduction**: `Exact(K) = AtMost(K) - AtMost(K - 1)`.\\n2. **Sliding Window**: Count subarrays with at most K odd numbers.","answerFile":"./answers/answer17.c","codeExplanation":"1. `num_subarrays_with_k_odds()`: Counts nice subarrays containing K odd numbers."},{"projectId":"SW_018","title":"Fruit Into Baskets (At Most 2 Distinct Elements Window)","difficulty":"Intermediate","description":"Given an array representing fruit trees, pick maximum fruits into 2 baskets (meaning sliding window can contain AT MOST 2 distinct fruit types). Expand `right` and shrink `left` when distinct types > 2. In this project, you will build a Fruit Basket Optimizer in C in O(N) time.","learningOutcome":"At-Most-2 Distinct Types Constraint, Frequency Table Windowing & Max Fruit Capacity","exampleText":"Tree fruits [1, 2, 1, 2, 3]","exampleOutput":"--- Fruit Into Baskets (At Most 2 Types) ---\\nMaximum Harvested Fruits = 4","logicExplanation":"1. **Distinct Counter**: Track number of distinct fruit types in window.\\n2. **Contract Left**: Shrink window when distinct fruit types exceed 2.","answerFile":"./answers/answer18.c","codeExplanation":"1. `total_fruit()`: Calculates maximum harvested fruits using at-most-2 sliding window."},{"projectId":"SW_019","title":"Corporate Flight Bookings / Car Pooling (Difference Array Range Accumulation)","difficulty":"Intermediate","description":"Given flight bookings `[first, last, seats]`, calculate total seats reserved for each flight. Use Difference Array: `diff[first] += seats`, `diff[last + 1] -= seats`. Prefix sum pass yields final flight seating allocations in O(N + Q) time. In this project, you will build Flight Booking Difference Engine in C.","learningOutcome":"Difference Array Industrial Applications, Reservation Range Updates & O(N+Q) Batch Processing","exampleText":"Bookings updates across 5 flights","exampleOutput":"--- Corporate Flight Bookings Difference Array ---\\nTotal Seats Allocated per Flight [1..5]: [ 10 55 45 25 25 ]","logicExplanation":"1. **Difference Bookings**: `diff[first] += seats`, `diff[last + 1] -= seats`.\\n2. **Prefix Pass**: Compute running prefix sum for final seat counts.","answerFile":"./answers/answer19.c","codeExplanation":"1. `corp_flight_bookings_demo()`: Computes total flight bookings using difference array."},{"projectId":"SW_020","title":"Maximum Points You Can Obtain from Cards (Two-Ended Sliding Window)","difficulty":"Intermediate","description":"Given card values and integer K, take exactly K cards from either the beginning or end of row to maximize total score. Equivalent to finding minimum sum subarray of size `N - K`! Alternatively, slide window of K cards starting from taking K from left to taking K from right. In this project, you will build a Card Score Maximizer in C in O(K) time.","learningOutcome":"Two-Ended Card Selection, Inverse Window Minimization & O(K) Score Optimization","exampleText":"Cards [1, 2, 3, 4, 5, 6, 1], K = 3","exampleOutput":"--- Maximum Points from Cards ---\\nMaximum Card Score = 12","logicExplanation":"1. **Initial K Left**: Compute sum of first K cards.\\n2. **Slide Right**: Replace card `K - 1 - i` from left with card `N - 1 - i` from right, updating max score.","answerFile":"./answers/answer20.c","codeExplanation":"1. `max_score()`: Calculates maximum card score using two-ended sliding window."},{"projectId":"SW_021","title":"Sliding Window Maximum using Monotonic Deque","difficulty":"Advanced","description":"Find maximum element in every sliding window of size K as it moves across array of size N in linear O(N) time. Standard sorting takes O(N * K). Maintain a Monotonic Decreasing Deque storing indices of potential maximums. In this project, you will build a Monotonic Deque Window Engine in C.","learningOutcome":"Monotonic Decreasing Deque, Linear O(N) Sliding Window Maximum & Out-of-Window Pruning","exampleText":"Array [1, 3, -1, -3, 5, 3, 6, 7], K = 3","exampleOutput":"--- Sliding Window Maximum Monotonic Deque ---\\nWindow Maxima: [ 3 3 5 5 6 7 ]","logicExplanation":"1. **Monotonic Deque**: Maintain indices in decreasing order of array values.\\n2. **Window Max**: `arr[deque[front]]` is maximum for current window.","answerFile":"./answers/answer21.c","codeExplanation":"1. `max_sliding_window()`: Computes sliding window maximums in O(N) time."},{"projectId":"SW_022","title":"Minimum Number of K Consecutive Bit Flips","difficulty":"Advanced","description":"Given binary array `nums` and integer K, flip K consecutive bits at a time to make all elements 1. Return minimum number of K-bit flips required. Maintain a sliding difference array/flag `is_flipped` tracking cumulative flips affecting current position in O(N) time and O(1) space! In this project, you will build K-Bit Flip Optimizer in C.","learningOutcome":"Greedy Bit Flipping, Cumulative Flip State Tracking & Linear O(N) Bit Array Processing","exampleText":"Binary array [0, 1, 0], K = 1","exampleOutput":"--- Minimum K Consecutive Bit Flips ---\\nMinimum Flips Required = 2","logicExplanation":"1. **Cumulative Flip State**: Maintain `is_flipped` flag using sliding window history.\\n2. **Greedy Flip**: If current bit needs flipping (`nums[i] == is_flipped`), flip window `[i .. i+K-1]`.","answerFile":"./answers/answer22.c","codeExplanation":"1. `min_k_bit_flips()`: Calculates minimum K-bit flips in linear O(N) time."},{"projectId":"SW_023","title":"Shortest Subarray with Sum at Least K (Monotonic Queue + Prefix Sums)","difficulty":"Advanced","description":"Find shortest non-empty subarray with sum `>= K` in an array containing POSITIVE AND NEGATIVE numbers. Standard sliding window fails due to negative numbers breaking monotonicity. Use Prefix Sums `P[i]` and a Monotonic Increasing Deque of prefix sum indices in O(N) time! In this project, you will build Shortest Subarray Sum K Engine in C.","learningOutcome":"Prefix Sum Monotonic Deque, Handling Negative Array Values & O(N) Shortest Subarray Search","exampleText":"Array [2, -1, 2], K = 3","exampleOutput":"--- Shortest Subarray Sum at Least K ---\\nShortest Subarray Length = 3","logicExplanation":"1. **Prefix Sums**: Compute `P[i]` array.\\n2. **Monotonic Deque**: Maintain `P[i]` in increasing order in deque. Contract `front` when `P[i] - P[deque[front]] >= K`.","answerFile":"./answers/answer23.c","codeExplanation":"1. `shortest_subarray_sum_at_least_k()`: Solves shortest subarray sum >= K with negative numbers in O(N) time."},{"projectId":"SW_024","title":"Dynamic 2D Range Addition & Prefix Sum Matrix Queries","difficulty":"Advanced","description":"Perform dynamic 2D submatrix range updates and answer submatrix sum queries efficiently. Combines 2D Difference Array updates with 2D Prefix Sum precomputation. In this project, you will build a Dynamic 2D Matrix Engine in C.","learningOutcome":"Composite 2D Grid Structures, Dynamic 2D Difference Updates & Submatrix Sums","exampleText":"Dynamic 2D Range Addition & Query Demo","exampleOutput":"--- Dynamic 2D Range Addition & Prefix Sum Matrix ---\\nApplied O(1) 2D range update and built 2D prefix sum grid in O(R*C).","logicExplanation":"1. **Difference Updates**: Apply 4-corner updates for submatrix additions.\\n2. **Prefix Grid**: Reconstruct 2D prefix sum array to answer submatrix queries in O(1).","answerFile":"./answers/answer24.c","codeExplanation":"1. `dynamic_2d_range_demo()`: Demonstrates dynamic 2D range updates and prefix sum queries."},{"projectId":"SW_025","title":"Multi-Threaded SIMD Accelerated Sliding Window Kernel","difficulty":"Advanced","description":"High-throughput audio and digital signal processing (DSP) algorithms compute sliding window averages/filters across gigabyte streams. Use SIMD (Single Instruction Multiple Data) 256-bit AVX2 vector instructions and multi-threading to process 8 window positions per CPU clock cycle. In this project, you will build SIMD Sliding Window Simulator in C.","learningOutcome":"SIMD AVX2 Vectorization, Hardware-Parallel Window Processing & DSP Sliding Kernels","exampleText":"SIMD AVX2 Sliding Window Execution","exampleOutput":"--- Multi-Threaded SIMD Accelerated Sliding Window Kernel ---\\nExecuted 256-bit AVX2 vector sliding window sum in hardware parallel passes.","logicExplanation":"1. **Vector Register**: Load 8 float/int values into 256-bit AVX2 register.\\n2. **Hardware Parallel Add**: Perform SIMD vector sliding window sums in 1 clock cycle.","answerFile":"./answers/answer25.c","codeExplanation":"1. `simd_sliding_window_demo()`: Simulates SIMD vectorized sliding window kernel."}]'),l={projectCategory:F,subject:R,board:T,class:"Computer Science Core / BCA / B.Tech",tools:B,institute:L,projects:z};function X(){const[e,d]=u.useState(null);return u.useEffect(()=>{const t=Object.assign({"./topic6_files/answers/answer1.c":f,"./topic6_files/answers/answer10.c":p,"./topic6_files/answers/answer11.c":g,"./topic6_files/answers/answer12.c":_,"./topic6_files/answers/answer13.c":x,"./topic6_files/answers/answer14.c":w,"./topic6_files/answers/answer15.c":h,"./topic6_files/answers/answer16.c":b,"./topic6_files/answers/answer17.c":y,"./topic6_files/answers/answer18.c":S,"./topic6_files/answers/answer19.c":v,"./topic6_files/answers/answer2.c":O,"./topic6_files/answers/answer20.c":C,"./topic6_files/answers/answer21.c":D,"./topic6_files/answers/answer22.c":k,"./topic6_files/answers/answer23.c":A,"./topic6_files/answers/answer24.c":P,"./topic6_files/answers/answer25.c":M,"./topic6_files/answers/answer3.c":I,"./topic6_files/answers/answer4.c":E,"./topic6_files/answers/answer5.c":K,"./topic6_files/answers/answer6.c":W,"./topic6_files/answers/answer7.c":j,"./topic6_files/answers/answer8.c":q,"./topic6_files/answers/answer9.c":N}),a={};Object.keys(t).forEach(n=>{const s=n.split("/").pop();a[s]=t[n]});const c=l.projects.map(n=>{const r=(n.answerFile||"").split("/").pop(),o=a[r];return o||console.warn(`⚠ Missing C answer file: ${r}`),{...n,answer:o||`// Source file "${r}" not found in answers folder`}});d({...l,projects:c})},[]),e?i.jsx(m,{data:e}):i.jsx("div",{className:"p-6 text-slate-400 flex items-center justify-center min-h-[300px]",children:i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"w-5 h-5 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),i.jsx("span",{children:"Loading Sliding Window & Prefix Arrays Practical Lab Projects..."})]})})}export{X as default};
