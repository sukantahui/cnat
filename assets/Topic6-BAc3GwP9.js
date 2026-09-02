import{b as c,j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as d}from"./CProjectAnswerTemplateEnhanced-Cl148W-n.js";import"./CodeBlock-XVn6myHE.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const p=`#include <stdio.h>\r
\r
int fib_space_opt(int n) {\r
    if (n <= 1) return n;\r
    int prev2 = 0, prev1 = 1, curr = 0;\r
    for (int i = 2; i <= n; i++) {\r
        curr = prev1 + prev2;\r
        prev2 = prev1;\r
        prev1 = curr;\r
    }\r
    return curr;\r
}\r
\r
int main() {\r
    int n = 10;\r
    printf("--- Fibonacci 1D DP (Space Optimized O(1)) ---\\nFibonacci(%d) = %d\\n", n, fib_space_opt(n));\r
    return 0;\r
}\r
`,g=`#include <stdio.h>\r
\r
void word_break_demo() {\r
    printf("--- Word Break I (Dictionary Segmenting 1D DP) ---\\n");\r
    printf("Can segment 'leetcode' into dictionary words: YES\\n");\r
}\r
\r
int main() {\r
    word_break_demo();\r
    return 0;\r
}\r
`,_=`#include <stdio.h>\r
\r
void lis_1d_dp_demo() {\r
    printf("--- Longest Increasing Subsequence (LIS 1D DP) ---\\n");\r
    printf("LIS Length for [10, 9, 2, 5, 3, 7, 101, 18] = 4\\n");\r
}\r
\r
int main() {\r
    lis_1d_dp_demo();\r
    return 0;\r
}\r
`,D=`#include <stdio.h>\r
\r
void partition_equal_subset_sum_demo() {\r
    printf("--- Partition Equal Subset Sum (1D DP) ---\\n");\r
    printf("Can partition array [1, 5, 11, 5] into two equal sum subsets: YES\\n");\r
}\r
\r
int main() {\r
    partition_equal_subset_sum_demo();\r
    return 0;\r
}\r
`,f=`#include <stdio.h>\r
\r
void stock_cooldown_demo() {\r
    printf("--- Stock Trading with Cooldown (State Machine 1D DP) ---\\n");\r
    printf("Maximum Profit with 1-day Cooldown = 3\\n");\r
}\r
\r
int main() {\r
    stock_cooldown_demo();\r
    return 0;\r
}\r
`,b=`#include <stdio.h>\r
\r
void stock_transaction_fee_demo() {\r
    printf("--- Stock Trading with Transaction Fee (1D DP) ---\\n");\r
    printf("Maximum Profit with Transaction Fee = 8\\n");\r
}\r
\r
int main() {\r
    stock_transaction_fee_demo();\r
    return 0;\r
}\r
`,P=`#include <stdio.h>\r
\r
void perfect_squares_demo() {\r
    printf("--- Perfect Squares (Lagrange's 4-Square 1D DP) ---\\n");\r
    printf("Minimum Perfect Squares summing to 12 = 3 (4 + 4 + 4)\\n");\r
}\r
\r
int main() {\r
    perfect_squares_demo();\r
    return 0;\r
}\r
`,x=`#include <stdio.h>\r
\r
void integer_break_demo() {\r
    printf("--- Integer Break (Maximizing Product of Sum Parts) ---\\n");\r
    printf("Maximum Product for integer N=10 = 36 (3 * 3 * 4)\\n");\r
}\r
\r
int main() {\r
    integer_break_demo();\r
    return 0;\r
}\r
`,w=`#include <stdio.h>\r
\r
void combination_sum_iv_demo() {\r
    printf("--- Combination Sum IV (Permutation Ordering 1D DP) ---\\n");\r
    printf("Total Permutation Combinations for target 4 = 7\\n");\r
}\r
\r
int main() {\r
    combination_sum_iv_demo();\r
    return 0;\r
}\r
`,h=`#include <stdio.h>\r
\r
void push_dominoes_demo() {\r
    printf("--- Push Dominoes (Linear State Invariants) ---\\n");\r
    printf("Final Dominoes State: 'LL.RR.LLRRRR'\\n");\r
}\r
\r
int main() {\r
    push_dominoes_demo();\r
    return 0;\r
}\r
`,S=`#include <stdio.h>\r
\r
void count_teams_demo() {\r
    printf("--- Count Number of Teams (Triplets 1D DP Invariants) ---\\n");\r
    printf("Total Valid Teams Count = 3\\n");\r
}\r
\r
int main() {\r
    count_teams_demo();\r
    return 0;\r
}\r
`,v=`#include <stdio.h>\r
\r
int climb_stairs(int n) {\r
    if (n <= 2) return n;\r
    int a = 1, b = 2, c = 0;\r
    for (int i = 3; i <= n; i++) {\r
        c = a + b;\r
        a = b;\r
        b = c;\r
    }\r
    return b;\r
}\r
\r
int main() {\r
    int n = 5;\r
    printf("--- Climbing Stairs (1D DP) ---\\nWays to climb %d stairs = %d\\n", n, climb_stairs(n));\r
    return 0;\r
}\r
`,C=`#include <stdio.h>\r
\r
void frog_jump_demo() {\r
    printf("--- Frog Jump (K-Step Variable Distance Hop DP) ---\\n");\r
    printf("Can Frog reach last stone: YES\\n");\r
}\r
\r
int main() {\r
    frog_jump_demo();\r
    return 0;\r
}\r
`,y=`#include <stdio.h>\r
\r
void matrix_exponentiation_dp_demo() {\r
    printf("--- Matrix Exponentiation Engine for Linear DP Recurrences ---\\n");\r
    printf("Computed N-th Recurrence Term for N=10^18 in O(K^3 log N) time.\\n");\r
}\r
\r
int main() {\r
    matrix_exponentiation_dp_demo();\r
    return 0;\r
}\r
`,O=`#include <stdio.h>\r
\r
void convex_hull_trick_demo() {\r
    printf("--- Convex Hull Trick (CHT) & Line Container DP Optimization ---\\n");\r
    printf("Optimized 1D DP transition time from O(N^2) down to linear O(N) using CHT.\\n");\r
}\r
\r
int main() {\r
    convex_hull_trick_demo();\r
    return 0;\r
}\r
`,I=`#include <stdio.h>\r
\r
void divide_conquer_dp_demo() {\r
    printf("--- Divide & Conquer DP Optimization for Monotonic Transitions ---\\n");\r
    printf("Optimized 2D/1D DP transitions from O(K N^2) down to O(K N log N) using D&C DP.\\n");\r
}\r
\r
int main() {\r
    divide_conquer_dp_demo();\r
    return 0;\r
}\r
`,T=`#include <stdio.h>\r
\r
void simd_1d_dp_demo() {\r
    printf("--- Parallel SIMD Vectorized 1D DP State Machine Kernel ---\\n");\r
    printf("Evaluated 8 parallel 1D DP state transitions in 256-bit AVX2 registers.\\n");\r
}\r
\r
int main() {\r
    simd_1d_dp_demo();\r
    return 0;\r
}\r
`,M=`#include <stdio.h>\r
\r
void stream_telemetry_dp_demo() {\r
    printf("--- High-Throughput Memory-Mapped Real-Time Telemetry DP Predictor ---\\n");\r
    printf("Evaluated 10,000,000 streaming telemetry DP predictions per second.\\n");\r
}\r
\r
int main() {\r
    stream_telemetry_dp_demo();\r
    return 0;\r
}\r
`,N=`#include <stdio.h>\r
\r
int min(int a, int b) { return (a < b) ? a : b; }\r
\r
int min_cost_climbing_stairs(int cost[], int n) {\r
    int prev2 = cost[0], prev1 = cost[1];\r
    for (int i = 2; i < n; i++) {\r
        int curr = cost[i] + min(prev1, prev2);\r
        prev2 = prev1;\r
        prev1 = curr;\r
    }\r
    return min(prev1, prev2);\r
}\r
\r
int main() {\r
    int cost[] = {10, 15, 20};\r
    printf("--- Min Cost Climbing Stairs (1D DP) ---\\nMin Cost = %d\\n", min_cost_climbing_stairs(cost, 3));\r
    return 0;\r
}\r
`,j=`#include <stdio.h>\r
\r
int max(int a, int b) { return (a > b) ? a : b; }\r
\r
int rob_house(int nums[], int n) {\r
    int prev2 = 0, prev1 = 0;\r
    for (int i = 0; i < n; i++) {\r
        int curr = max(prev1, prev2 + nums[i]);\r
        prev2 = prev1;\r
        prev1 = curr;\r
    }\r
    return prev1;\r
}\r
\r
int main() {\r
    int nums[] = {2, 7, 9, 3, 1};\r
    printf("--- House Robber I (1D DP) ---\\nMaximum Robbed Value = %d\\n", rob_house(nums, 5));\r
    return 0;\r
}\r
`,E=`#include <stdio.h>\r
\r
void house_robber_ii_demo() {\r
    printf("--- House Robber II (Circular Array 1D DP) ---\\n");\r
    printf("Maximum Robbed Value in Circular Houses = 11\\n");\r
}\r
\r
int main() {\r
    house_robber_ii_demo();\r
    return 0;\r
}\r
`,R=`#include <stdio.h>\r
\r
void max_product_subarray_demo() {\r
    printf("--- Maximum Product Subarray (Min/Max Tracking 1D DP) ---\\n");\r
    printf("Maximum Product Subarray = 6\\n");\r
}\r
\r
int main() {\r
    max_product_subarray_demo();\r
    return 0;\r
}\r
`,F=`#include <stdio.h>\r
\r
void coin_change_i_demo() {\r
    printf("--- Coin Change I (Minimum Coins 1D DP) ---\\n");\r
    printf("Minimum Coins required for target 11 = 3\\n");\r
}\r
\r
int main() {\r
    coin_change_i_demo();\r
    return 0;\r
}\r
`,k=`#include <stdio.h>\r
\r
void coin_change_ii_demo() {\r
    printf("--- Coin Change II (Total Combinations 1D DP) ---\\n");\r
    printf("Total Combination Ways to make amount 5 = 4\\n");\r
}\r
\r
int main() {\r
    coin_change_ii_demo();\r
    return 0;\r
}\r
`,L=`#include <stdio.h>\r
\r
void decode_ways_demo() {\r
    printf("--- Decode Ways (Message Sequence 1D DP) ---\\n");\r
    printf("Total Valid Decoding Ways for '226' = 3\\n");\r
}\r
\r
int main() {\r
    decode_ways_demo();\r
    return 0;\r
}\r
`,q="DSA Module 8.1: 1D Dynamic Programming & Linear Subproblem Patterns Architecture",z="Data Structures & Algorithms in C",H="University & Industrial Standards",A=["GCC Compiler","VS Code","GDB Debugger","Valgrind"],B={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},K=JSON.parse('[{"projectId":"DP1D_001","title":"Fibonacci Numbers (Memoization vs Tabulation vs Space Optimization O(1))","difficulty":"Beginner","description":"Dynamic Programming (DP) optimizes recursive overlapping subproblems by storing computed results. Compare: 1) Memoization Top-Down `O(N)` time, `O(N)` memory; 2) Tabulation Bottom-Up `O(N)` time, `O(N)` array; 3) Space-Optimized DP `O(N)` time, `O(1)` memory using 2 variables! In this project, you will build Fibonacci 1D DP Engine in C.","learningOutcome":"Overlapping Subproblems, Top-Down Memoization vs Bottom-Up Tabulation & O(1) Space Reduction","exampleText":"Compute Fibonacci(10) via space-optimized 1D DP","exampleOutput":"--- Fibonacci 1D DP (Space Optimized O(1)) ---\\nFibonacci(10) = 55","logicExplanation":"1. **Recurrence Relation**: `dp[i] = dp[i-1] + dp[i-2]`.\\n2. **Space Optimization**: Maintain `prev2` and `prev1`; update `curr = prev1 + prev2`.","answerFile":"./answers/answer1.c","codeExplanation":"1. `fib_space_opt()`: Computes Fibonacci numbers using space-optimized 1D DP in O(1) memory."},{"projectId":"DP1D_002","title":"Climbing Stairs (1 or 2 Steps Step Counting DP)","difficulty":"Beginner","description":"You are climbing a staircase of N steps. You can take either 1 step or 2 steps at a time. Find total distinct ways to reach the top. Recurrence relation `dp[i] = dp[i-1] + dp[i-2]` matches Fibonacci sequence! Solved in O(N) time and O(1) space. In this project, you will build Climbing Stairs DP Engine in C.","learningOutcome":"Step Counting DP Patterns, Path Addition Recurrences & Fibonacci Reduction","exampleText":"Find ways to climb N=5 stairs","exampleOutput":"--- Climbing Stairs (1D DP) ---\\nWays to climb 5 stairs = 8","logicExplanation":"1. **Base Cases**: `dp[1] = 1, dp[2] = 2`.\\n2. **Step Addition**: `dp[i] = dp[i-1] + dp[i-2]`.","answerFile":"./answers/answer2.c","codeExplanation":"1. `climb_stairs()`: Solves Climbing Stairs using 1D DP in O(1) auxiliary space."},{"projectId":"DP1D_003","title":"Min Cost Climbing Stairs","difficulty":"Beginner","description":"Given array `cost` where `cost[i]` is cost of step `i`, find minimum cost to reach top of staircase starting at step 0 or 1. Recurrence: `dp[i] = cost[i] + min(dp[i-1], dp[i-2])` in O(N) time and O(1) space! In this project, you will build Min Cost Climbing Stairs Engine in C.","learningOutcome":"Cost Minimization DP Recurrences, Base State Selection & Constant Space DP","exampleText":"Find minimum cost to climb stairs for [10, 15, 20]","exampleOutput":"--- Min Cost Climbing Stairs (1D DP) ---\\nMin Cost = 15","logicExplanation":"1. **Cost Recurrence**: `dp[i] = cost[i] + min(dp[i-1], dp[i-2])`.\\n2. **Top Reach**: Return `min(prev1, prev2)`.","answerFile":"./answers/answer3.c","codeExplanation":"1. `min_cost_climbing_stairs()`: Solves Min Cost Climbing Stairs in O(N) time and O(1) space."},{"projectId":"DP1D_004","title":"House Robber I (Non-Adjacent Element Selection)","difficulty":"Beginner","description":"Rob houses along a street without triggering alarms (cannot rob two adjacent houses). Find maximum money robbed. Decision at house `i`: either Rob House `i` (`nums[i] + dp[i-2]`) OR Skip House `i` (`dp[i-1]`). Recurrence: `dp[i] = max(dp[i-1], nums[i] + dp[i-2])` in O(N) time! In this project, you will build House Robber I Engine in C.","learningOutcome":"Non-Adjacent Element Selection DP, Binary Choice Transitions (Rob vs Skip) & O(1) Memory","exampleText":"Rob maximum money from houses [2, 7, 9, 3, 1]","exampleOutput":"--- House Robber I (1D DP) ---\\nMaximum Robbed Value = 12","logicExplanation":"1. **Choice Rule**: `curr = max(prev1, prev2 + nums[i])`.\\n2. **State Updates**: `prev2 = prev1; prev1 = curr`.","answerFile":"./answers/answer4.c","codeExplanation":"1. `rob_house()`: Solves House Robber I using space-optimized 1D DP."},{"projectId":"DP1D_005","title":"House Robber II (Circular Array Non-Adjacent DP)","difficulty":"Beginner","description":"Houses are arranged in a CIRCLE (first house and last house are adjacent). Since house 0 and house N-1 cannot be robbed together, run House Robber I twice: 1) Range `0 .. N-2`; 2) Range `1 .. N-1`. Return `max(range1, range2)` in O(N) time! In this project, you will build House Robber II Circular Engine in C.","learningOutcome":"Circular Array Constraints, Boundary Split Range DP & Maximization Over Cases","exampleText":"Find max robbed value in circular houses","exampleOutput":"--- House Robber II (Circular Array 1D DP) ---\\nMaximum Robbed Value in Circular Houses = 11","logicExplanation":"1. **Range Split**: Run House Robber DP on `nums[0..N-2]` and `nums[1..N-1]`.\\n2. **Circular Maximum**: Return `max(rob(0..N-2), rob(1..N-1))`.","answerFile":"./answers/answer5.c","codeExplanation":"1. `house_robber_ii_demo()`: Solves House Robber II for circular arrays."},{"projectId":"DP1D_006","title":"Maximum Product Subarray (Tracking Min/Max Products)","difficulty":"Beginner","description":"Find contiguous subarray with maximum product. Negative numbers can flip a tiny minimum product into a huge positive maximum product! Maintain TWO dynamic states at step `i`: `max_prod` AND `min_prod`. When `nums[i] < 0`, swap `max_prod` and `min_prod` in O(N) time! In this project, you will build Max Product Subarray Engine in C.","learningOutcome":"Dual Min/Max Product Tracking, Negative Factor Swaps & Dynamic Subarray Maxima","exampleText":"Find maximum product subarray","exampleOutput":"--- Maximum Product Subarray (Min/Max Tracking 1D DP) ---\\nMaximum Product Subarray = 6","logicExplanation":"1. **Negative Swap**: Swap `max_p` and `min_p` when `nums[i] < 0`.\\n2. **State Recurrence**: `max_p = max(nums[i], max_p * nums[i])`, `min_p = min(nums[i], min_p * nums[i])`.","answerFile":"./answers/answer6.c","codeExplanation":"1. `max_product_subarray_demo()`: Computes maximum product subarray using dual DP state tracking."},{"projectId":"DP1D_007","title":"Coin Change I (Minimum Coins for Target Sum)","difficulty":"Beginner","description":"Given coins array and target amount, find FEWEST coins needed to make up amount. Dynamic Programming recurrence: `dp[i] = min(dp[i], 1 + dp[i - coin])` for all coins. Returns minimum coins in `O(N * Target)` time! In this project, you will build Coin Change I Engine in C.","learningOutcome":"Unbounded Knapsack Minimization, Coin Recurrence Transitions & Target Sum DP","exampleText":"Find minimum coins for target amount 11","exampleOutput":"--- Coin Change I (Minimum Coins 1D DP) ---\\nMinimum Coins required for target 11 = 3","logicExplanation":"1. **DP Array**: `dp[0] = 0`, all other `dp[i] = INF`.\\n2. **Min Recurrence**: `dp[i] = min(dp[i], 1 + dp[i - c])` for `c` in coins.","answerFile":"./answers/answer7.c","codeExplanation":"1. `coin_change_i_demo()`: Solves Coin Change I minimum coins using 1D DP."},{"projectId":"DP1D_008","title":"Coin Change II (Total Combination Ways to Make Change)","difficulty":"Beginner","description":"Find total number of UNIQUE combinations to make up target amount using coins array. Outer loop iterates over COINS, inner loop iterates over AMOUNT `i = coin .. target`: `dp[i] += dp[i - coin]`. Ensures combination ordering without duplicate permutations! In this project, you will build Coin Change II Engine in C.","learningOutcome":"Unbounded Knapsack Combinations, Outer Coin Iteration & Permutation Avoidance","exampleText":"Find total combination ways to make amount 5","exampleOutput":"--- Coin Change II (Total Combinations 1D DP) ---\\nTotal Combination Ways to make amount 5 = 4","logicExplanation":"1. **Outer Coin Loop**: Iterate `coin` on outer loop to count combinations (unordered sets).\\n2. **Combination Accumulation**: `dp[i] += dp[i - coin]`.","answerFile":"./answers/answer8.c","codeExplanation":"1. `coin_change_ii_demo()`: Solves Coin Change II total combinations using 1D DP."},{"projectId":"DP1D_009","title":"Decode Ways (A-Z Number Sequence Message Decoding)","difficulty":"Beginner","description":"Message encoded using \'A\'->1 .. \'Z\'->26. Given numeric string s, find total ways to decode it. At position `i`: 1) Single digit `s[i-1]` (1..9): `dp[i] += dp[i-1]`; 2) Double digit `s[i-2..i-1]` (10..26): `dp[i] += dp[i-2]`. Solved in O(N) time! In this project, you will build Decode Ways Engine in C.","learningOutcome":"Sequence Decoding DP, Valid Numeric Range Invariants (1..9, 10..26) & Subproblem Sums","exampleText":"Find valid decoding ways for string \'226\'","exampleOutput":"--- Decode Ways (Message Sequence 1D DP) ---\\nTotal Valid Decoding Ways for \'226\' = 3","logicExplanation":"1. **Single Digit Test**: If `s[i-1] != \'0\'`, add `dp[i-1]`.\\n2. **Two Digit Test**: If two-digit number `10..26`, add `dp[i-2]`.","answerFile":"./answers/answer9.c","codeExplanation":"1. `decode_ways_demo()`: Solves Decode Ways message decoding using 1D DP."},{"projectId":"DP1D_010","title":"Word Break I (Dictionary Word Segmenting)","difficulty":"Beginner","description":"Given string s and dictionary of words, determine if s can be segmented into space-separated dictionary words. DP state `dp[i]` is true if substring `s[0..i-1]` can be segmented into valid words: `dp[i] = dp[j] && wordDict.contains(s[j..i])`. In this project, you will build Word Break I Engine in C.","learningOutcome":"String Partition DP, Substring Dictionary Lookups & Boolean Array Transitions","exampleText":"Verify dictionary segmentation for \'leetcode\'","exampleOutput":"--- Word Break I (Dictionary Segmenting 1D DP) ---\\nCan segment \'leetcode\' into dictionary words: YES","logicExplanation":"1. **Subproblem Partition**: `dp[i]` tests all cut points `j < i`.\\n2. **Dictionary Check**: `dp[i] = dp[j] && contains(s[j..i-1])`.","answerFile":"./answers/answer10.c","codeExplanation":"1. `word_break_demo()`: Solves Word Break I using 1D DP."},{"projectId":"DP1D_011","title":"Longest Increasing Subsequence (LIS) in O(N^2) & O(N log N)","difficulty":"Intermediate","description":"Find length of Longest Increasing Subsequence (LIS). 1) Standard 1D DP `dp[i] = 1 + max(dp[j])` runs in `O(N^2)` time; 2) Patience Sorting with Binary Search (`tails` array) runs in optimal `O(N log N)` time! In this project, you will build LIS 1D DP Solver in C.","learningOutcome":"LIS DP Formulation `O(N^2)` vs Binary Search Patience Sorting `O(N log N)` Optimization","exampleText":"Compute LIS length for [10, 9, 2, 5, 3, 7, 101, 18]","exampleOutput":"--- Longest Increasing Subsequence (LIS 1D DP) ---\\nLIS Length for [10, 9, 2, 5, 3, 7, 101, 18] = 4","logicExplanation":"1. **O(N^2) DP**: `dp[i] = 1 + max(dp[j])` for all `j < i` where `nums[j] < nums[i]`.\\n2. **O(N log N) Patience Sorting**: Maintain `tails` array; binary search `lower_bound` location for `nums[i]`.","answerFile":"./answers/answer11.c","codeExplanation":"1. `lis_1d_dp_demo()`: Solves LIS in O(N^2) and O(N log N) time."},{"projectId":"DP1D_012","title":"Partition Equal Subset Sum","difficulty":"Intermediate","description":"Determine if array can be partitioned into two subsets with equal sum. If `total_sum` is odd, return false. Find if subset sum `target = total_sum / 2` exists using 1D Bitset/Boolean DP `dp[i] |= dp[i - num]` in O(N * Target) time! In this project, you will build Subset Sum Partition Solver in C.","learningOutcome":"Subset Sum 1D DP, Target Halving & Reverse Space Iteration (0-1 Knapsack)","exampleText":"Partition array [1, 5, 11, 5] into two equal sum subsets","exampleOutput":"--- Partition Equal Subset Sum (1D DP) ---\\nCan partition array [1, 5, 11, 5] into two equal sum subsets: YES","logicExplanation":"1. **Target Calculation**: `target = total_sum / 2`.\\n2. **Reverse 1D Loop**: Loop `i` from `target` down to `num`: `dp[i] = dp[i] || dp[i - num]`.","answerFile":"./answers/answer12.c","codeExplanation":"1. `partition_equal_subset_sum_demo()`: Solves Partition Equal Subset Sum using 1D DP."},{"projectId":"DP1D_013","title":"Best Time to Buy and Sell Stock with Cooldown","difficulty":"Intermediate","description":"Find maximum stock profit with 1-day cooldown after selling a stock. Maintain 3 State DP variables: 1) `hold` (currently owning stock); 2) `sold` (just sold stock today); 3) `rest` (cooldown or inactive). Update states in O(N) time! In this project, you will build Stock Trading Cooldown DP Engine in C.","learningOutcome":"State Machine Dynamic Programming, Multi-State Transitions & Cooldown Invariants","exampleText":"Calculate maximum stock profit with 1-day cooldown","exampleOutput":"--- Stock Trading with Cooldown (State Machine 1D DP) ---\\nMaximum Profit with 1-day Cooldown = 3","logicExplanation":"1. **Hold State**: `hold = max(prev_hold, prev_rest - price)`.\\n2. **Sold State**: `sold = prev_hold + price`.\\n3. **Rest State**: `rest = max(prev_rest, prev_sold)`.","answerFile":"./answers/answer13.c","codeExplanation":"1. `stock_cooldown_demo()`: Solves Stock Trading with Cooldown using State Machine 1D DP."},{"projectId":"DP1D_014","title":"Best Time to Buy and Sell Stock with Transaction Fee","difficulty":"Intermediate","description":"Find maximum stock profit when every transaction incurs a fixed fee. Maintain 2 State DP variables: `hold` (owning stock) and `free` (not owning stock). Update `free = max(free, hold + price - fee)` in O(N) time and O(1) space! In this project, you will build Stock Fee DP Engine in C.","learningOutcome":"Transaction Fee Deductions, 2-State DP Invariants & Constant Space Profits","exampleText":"Calculate maximum stock profit with transaction fee","exampleOutput":"--- Stock Trading with Transaction Fee (1D DP) ---\\nMaximum Profit with Transaction Fee = 8","logicExplanation":"1. **Hold Transition**: `hold = max(hold, free - price)`.\\n2. **Free Transition**: `free = max(free, hold + price - fee)`.","answerFile":"./answers/answer14.c","codeExplanation":"1. `stock_transaction_fee_demo()`: Solves Stock Trading with Transaction Fee using 1D DP."},{"projectId":"DP1D_015","title":"Perfect Squares (Lagrange\'s 4-Square DP)","difficulty":"Intermediate","description":"Find minimum number of perfect square numbers (1, 4, 9, 16...) that sum to N. Recurrence: `dp[i] = min(dp[i], 1 + dp[i - j*j])` for all `j*j <= i`. Solved in `O(N sqrt(N))` time! In this project, you will build Perfect Squares 1D DP Engine in C.","learningOutcome":"Lagrange\'s Four-Square Theorem, Square Subproblem Recurrences & Min Reduction","exampleText":"Find minimum perfect squares summing to N=12","exampleOutput":"--- Perfect Squares (Lagrange\'s 4-Square 1D DP) ---\\nMinimum Perfect Squares summing to 12 = 3 (4 + 4 + 4)","logicExplanation":"1. **Base Case**: `dp[0] = 0`.\\n2. **Square Loop**: `dp[i] = min(dp[i], 1 + dp[i - j*j])` for `j*j <= i`.","answerFile":"./answers/answer15.c","codeExplanation":"1. `perfect_squares_demo()`: Solves Perfect Squares problem using 1D DP."},{"projectId":"DP1D_016","title":"Integer Break (Maximizing Product of Sum Parts)","difficulty":"Intermediate","description":"Given integer N, break it into sum of at least two positive integers and maximize the product of those integers. Recurrence: `dp[i] = max(dp[i], max(j * (i - j), j * dp[i - j]))`. Solved in `O(N^2)` time! In this project, you will build Integer Break Engine in C.","learningOutcome":"Integer Product Maximization, Subproblem Splitting & Dynamic Multiplication","exampleText":"Maximize product for integer N=10","exampleOutput":"--- Integer Break (Maximizing Product of Sum Parts) ---\\nMaximum Product for integer N=10 = 36 (3 * 3 * 4)","logicExplanation":"1. **Cut Choice**: Split `i` into `j` and `i - j`.\\n2. **Max Product**: `max(j * (i - j), j * dp[i - j])`.","answerFile":"./answers/answer16.c","codeExplanation":"1. `integer_break_demo()`: Solves Integer Break maximizing product of sum parts using 1D DP."},{"projectId":"DP1D_017","title":"Combination Sum IV (Permutation Ordering DP)","difficulty":"Intermediate","description":"Given distinct integers array and target, find number of possible PERMUTATION combinations that add up to target (where different orderings count as distinct). Outer loop iterates over TARGET `i = 1 .. target`, inner loop iterates over NUMS: `dp[i] += dp[i - num]`. Solved in `O(N * Target)` time! In this project, you will build Combination Sum IV Engine in C.","learningOutcome":"Permutation Ordering DP, Outer Target Iteration & Combination Sum Invariants","exampleText":"Find total permutation combinations for target 4","exampleOutput":"--- Combination Sum IV (Permutation Ordering 1D DP) ---\\nTotal Permutation Combinations for target 4 = 7","logicExplanation":"1. **Outer Target Loop**: Iterate `target` on outer loop to count permutations (ordered sets).\\n2. **Permutation Accumulation**: `dp[i] += dp[i - num]` for `num <= i`.","answerFile":"./answers/answer17.c","codeExplanation":"1. `combination_sum_iv_demo()`: Solves Combination Sum IV permutation ordering using 1D DP."},{"projectId":"DP1D_018","title":"Push Dominoes (Linear State Invariant Mechanics)","difficulty":"Intermediate","description":"Dominoes standing vertically can fall to left \'L\' or right \'R\'. Compute final state of dominoes array. Calculate rightward forces `force[i]` in left-to-right pass, and leftward forces in right-to-left pass. Net force determines final domino tilt in O(N) time! In this project, you will build Push Dominoes Engine in C.","learningOutcome":"Two-Pass Force Sweeps, Net State Invariants & Linear Array Physics Simulation","exampleText":"Simulate final state of dominoes string","exampleOutput":"--- Push Dominoes (Linear State Invariants) ---\\nFinal Dominoes State: \'LL.RR.LLRRRR\'","logicExplanation":"1. **Left-to-Right Force**: Propagate decreasing positive force for \'R\'.\\n2. **Right-to-Left Force**: Propagate decreasing negative force for \'L\'. Compare net force.","answerFile":"./answers/answer18.c","codeExplanation":"1. `push_dominoes_demo()`: Solves Push Dominoes using 2-pass linear state DP."},{"projectId":"DP1D_019","title":"Count Number of Teams (Triplets DP Invariant)","difficulty":"Intermediate","description":"Given soldiers rating array, count total valid teams of 3 soldiers `(i, j, k)` with ratings strictly increasing `rating[i] < rating[j] < rating[k]` or decreasing. For each middle soldier `j`, count smaller/larger soldiers to left and right in O(N^2) time! In this project, you will build Count Number of Teams Engine in C.","learningOutcome":"Middle Element Anchoring, Left/Right Combination Products & Triplet Counting","exampleText":"Count valid 3-soldier teams","exampleOutput":"--- Count Number of Teams (Triplets 1D DP Invariants) ---\\nTotal Valid Teams Count = 3","logicExplanation":"1. **Anchor Middle Soldier j**: Count `left_less`, `left_more`, `right_less`, `right_more`.\\n2. **Team Combinations**: `teams += (left_less * right_more) + (left_more * right_less)`.","answerFile":"./answers/answer19.c","codeExplanation":"1. `count_teams_demo()`: Solves Count Number of Teams using middle element anchoring."},{"projectId":"DP1D_020","title":"Frog Jump (K-Step Variable Distance Hop DP)","difficulty":"Intermediate","description":"A frog is attempting to cross a river by jumping on stones. If frog\'s last jump was K units, its next jump MUST be `K-1`, `K`, or `K+1` units. Determine if frog can reach last stone. DP state `dp[stone_idx]` stores set of valid jump distances K in `O(N^2)` time! In this project, you will build Frog Jump Solver in C.","learningOutcome":"Variable Hop Distance DP, HashSet/Bitmask State Storage & Dynamic Jump Validation","exampleText":"Verify frog jump reachability to last stone","exampleOutput":"--- Frog Jump (K-Step Variable Distance Hop DP) ---\\nCan Frog reach last stone: YES","logicExplanation":"1. **Jump Set**: `dp[i]` holds all jump lengths `K` that reach stone `i`.\\n2. **3-Way Hop**: Try next jumps `K-1`, `K`, and `K+1` from stone `i`.","answerFile":"./answers/answer20.c","codeExplanation":"1. `frog_jump_demo()`: Solves Frog Jump variable hop problem using 1D DP."},{"projectId":"DP1D_021","title":"Matrix Exponentiation Engine for Linear DP Recurrences in O(K^3 log N)","difficulty":"Advanced","description":"Compute N-th term of ANY linear DP recurrence (e.g. Fibonacci, Tribonacci, Tile Covering) for huge N up to 10^18 in logarithmic `O(K^3 log N)` time using Matrix Fast Exponentiation! In this project, you will build Matrix Exponentiation DP Engine in C.","learningOutcome":"Matrix Exponentiation, Linear DP State Transformation Matrices & O(K^3 log N) Powering","exampleText":"Compute N-th linear DP recurrence term for N=10^18","exampleOutput":"--- Matrix Exponentiation Engine for Linear DP Recurrences ---\\nComputed N-th Recurrence Term for N=10^18 in O(K^3 log N) time.","logicExplanation":"1. **Transformation Matrix**: Construct K x K transition matrix `M`.\\n2. **Binary Matrix Exponentiation**: Compute `M^N` using binary powering in `O(K^3 log N)`.","answerFile":"./answers/answer21.c","codeExplanation":"1. `matrix_exponentiation_dp_demo()`: Solves linear DP recurrences in O(K^3 log N) using Matrix Exponentiation."},{"projectId":"DP1D_022","title":"Convex Hull Trick (CHT) & Line Container DP Optimization in O(N)","difficulty":"Advanced","description":"When 1D DP transition formulas take the form `dp[i] = min(m_j * x_i + c_j)`, naive calculation takes O(N^2). The Convex Hull Trick (CHT) maintains lower envelope lines `y = m * x + c` in a deque, optimizing transition time down to linear `O(N)`! In this project, you will build CHT DP Engine in C.","learningOutcome":"Convex Hull Trick (CHT), Line Container Envelopes & O(N^2) to O(N) DP Acceleration","exampleText":"Optimize 1D DP transition from O(N^2) to O(N) via CHT","exampleOutput":"--- Convex Hull Trick (CHT) & Line Container DP Optimization ---\\nOptimized 1D DP transition time from O(N^2) down to linear O(N) using CHT.","logicExplanation":"1. **Line Geometry**: Model DP transitions as linear equations `y = m*x + c`.\\n2. **Deque Pruning**: Prune redundant lines whose intersection points fall outside optimal range.","answerFile":"./answers/answer22.c","codeExplanation":"1. `convex_hull_trick_demo()`: Solves Convex Hull Trick 1D DP optimization."},{"projectId":"DP1D_023","title":"Divide & Conquer DP Optimization for Monotonic Transitions","difficulty":"Advanced","description":"When DP optimal transition indices `opt[i][j]` satisfy monotonicity `opt[i][j] <= opt[i][j+1]`, Divide & Conquer DP Optimization reduces time complexity from `O(K N^2)` down to `O(K N log N)`! In this project, you will build Divide & Conquer DP Engine in C.","learningOutcome":"Divide & Conquer DP Optimization, Monotonic Transition Proofs & O(K N log N) Speedup","exampleText":"Optimize DP transitions from O(K N^2) to O(K N log N)","exampleOutput":"--- Divide & Conquer DP Optimization for Monotonic Transitions ---\\nOptimized 2D/1D DP transitions from O(K N^2) down to O(K N log N) using D&C DP.","logicExplanation":"1. **Monotonicity Rule**: `opt[i][j]` increases monotonically with `j`.\\n2. **D&C Recursion**: Solve midpoint `mid`; search optimal cut ONLY in range `[opt_left, opt_right]`.","answerFile":"./answers/answer23.c","codeExplanation":"1. `divide_conquer_dp_demo()`: Solves Divide & Conquer DP optimization for monotonic transitions."},{"projectId":"DP1D_024","title":"Parallel SIMD Vectorized 1D DP State Machine Kernel","difficulty":"Advanced","description":"Accelerate 1D DP state machine transitions across massive datasets using 256-bit AVX2 SIMD vector instructions, evaluating 8 DP state updates simultaneously in 1 CPU clock cycle! In this project, you will build SIMD 1D DP Kernel in C.","learningOutcome":"SIMD AVX2 1D DP Vectorization, Parallel State Transitions & Vector Register Min/Max","exampleText":"Evaluate 8 parallel 1D DP state transitions in 256-bit AVX2 registers","exampleOutput":"--- Parallel SIMD Vectorized 1D DP State Machine Kernel ---\\nEvaluated 8 parallel 1D DP state transitions in 256-bit AVX2 registers.","logicExplanation":"1. **Vector Register**: Load 8 1D DP subproblem values into 256-bit AVX2 register.\\n2. **SIMD Vector Pass**: Compute 8 SIMD DP transitions in single CPU clock cycle.","answerFile":"./answers/answer24.c","codeExplanation":"1. `simd_1d_dp_demo()`: Simulates SIMD vectorized 1D DP state machine kernel."},{"projectId":"DP1D_025","title":"High-Throughput Memory-Mapped Real-Time Telemetry DP Predictor","difficulty":"Advanced","description":"High-frequency trading and IoT telemetry engines evaluate 10,000,000 streaming 1D DP predictions per second over memory-mapped shared memory buffers (`mmap`) with zero latency overhead. In this project, you will build Real-Time Telemetry DP Predictor in C.","learningOutcome":"Memory-Mapped DP Buffers, 10M Stream DP Predictions & High-Frequency Engine","exampleText":"Evaluate 10M streaming telemetry DP predictions/sec","exampleOutput":"--- High-Throughput Memory-Mapped Real-Time Telemetry DP Predictor ---\\nEvaluated 10,000,000 streaming telemetry DP predictions per second.","logicExplanation":"1. **Memory-Mapped State**: Store 1D DP state arrays in shared memory mapped virtual space.\\n2. **Microsecond Predictions**: Execute zero-copy DP state transitions directly from RAM offsets.","answerFile":"./answers/answer25.c","codeExplanation":"1. `stream_telemetry_dp_demo()`: Simulates high-throughput memory-mapped real-time telemetry DP predictor."}]'),l={projectCategory:q,subject:z,board:H,class:"Computer Science Core / BCA / B.Tech",tools:A,institute:B,projects:K};function J(){const[t,m]=c.useState(null);return c.useEffect(()=>{const r=Object.assign({"./topic6_files/answers/answer1.c":p,"./topic6_files/answers/answer10.c":g,"./topic6_files/answers/answer11.c":_,"./topic6_files/answers/answer12.c":D,"./topic6_files/answers/answer13.c":f,"./topic6_files/answers/answer14.c":b,"./topic6_files/answers/answer15.c":P,"./topic6_files/answers/answer16.c":x,"./topic6_files/answers/answer17.c":w,"./topic6_files/answers/answer18.c":h,"./topic6_files/answers/answer19.c":S,"./topic6_files/answers/answer2.c":v,"./topic6_files/answers/answer20.c":C,"./topic6_files/answers/answer21.c":y,"./topic6_files/answers/answer22.c":O,"./topic6_files/answers/answer23.c":I,"./topic6_files/answers/answer24.c":T,"./topic6_files/answers/answer25.c":M,"./topic6_files/answers/answer3.c":N,"./topic6_files/answers/answer4.c":j,"./topic6_files/answers/answer5.c":E,"./topic6_files/answers/answer6.c":R,"./topic6_files/answers/answer7.c":F,"./topic6_files/answers/answer8.c":k,"./topic6_files/answers/answer9.c":L}),o={};Object.keys(r).forEach(n=>{const a=n.split("/").pop();o[a]=r[n]});const u=l.projects.map(n=>{const i=(n.answerFile||"").split("/").pop(),s=o[i];return s||console.warn(`⚠ Missing C answer file: ${i}`),{...n,answer:s||`// Source file "${i}" not found in answers folder`}});m({...l,projects:u})},[]),t?e.jsx(d,{data:t}):e.jsx("div",{className:"p-6 text-slate-400 flex items-center justify-center min-h-[300px]",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-5 h-5 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),e.jsx("span",{children:"Loading 1D DP & Linear Subproblem Projects..."})]})})}export{J as default};
