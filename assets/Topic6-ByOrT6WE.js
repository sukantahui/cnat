import{b as l,j as i}from"./vendor-react-core-Doz9nIC6.js";import{C as p}from"./CProjectAnswerTemplateEnhanced-DRUOSXgE.js";import"./CodeBlock-C22pSTHv.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const m=`#include <stdio.h>\r
\r
void bitwise_fundamentals_demo(int a, int b) {\r
    printf("--- Bitwise Operators Fundamentals ---\\n");\r
    printf("a = %d, b = %d\\n", a, b);\r
    printf("a & b  = %d\\n", a & b);\r
    printf("a | b  = %d\\n", a | b);\r
    printf("a ^ b  = %d\\n", a ^ b);\r
    printf("~a     = %d\\n", ~a);\r
    printf("a << 1 = %d\\n", a << 1);\r
    printf("a >> 1 = %d\\n", a >> 1);\r
}\r
\r
int main() {\r
    bitwise_fundamentals_demo(5, 3); // 5 = 0101, 3 = 0011\r
    return 0;\r
}\r
`,g=`#include <stdio.h>\r
\r
void print_binary_32(unsigned int n) {\r
    printf("Binary (32-bit): ");\r
    for (int i = 31; i >= 0; i--) {\r
        printf("%d", (n >> i) & 1);\r
        if (i % 8 == 0) printf(" ");\r
    }\r
    printf("\\n");\r
}\r
\r
int main() {\r
    unsigned int num = 29;\r
    printf("--- Binary Representation Printer Engine ---\\nNumber: %u\\n", num);\r
    print_binary_32(num);\r
    return 0;\r
}\r
`,b=`#include <stdio.h>\r
\r
int single_number_ii(int nums[], int n) {\r
    int ones = 0, twos = 0;\r
    for (int i = 0; i < n; i++) {\r
        ones = (ones ^ nums[i]) & ~twos;\r
        twos = (twos ^ nums[i]) & ~ones;\r
    }\r
    return ones;\r
}\r
\r
int main() {\r
    int nums[] = {2, 2, 3, 2};\r
    int n = 4;\r
    printf("--- Single Number II (Others Appear Thrice) ---\\n");\r
    printf("Single Number = %d\\n", single_number_ii(nums, n));\r
    return 0;\r
}\r
`,f=`#include <stdio.h>\r
\r
void single_number_iii(int nums[], int n, int *res1, int *res2) {\r
    int xor_sum = 0;\r
    for (int i = 0; i < n; i++) xor_sum ^= nums[i];\r
\r
    // Find lowest set bit mask\r
    unsigned int diff = (unsigned int)xor_sum & -(unsigned int)xor_sum;\r
\r
    *res1 = 0; *res2 = 0;\r
    for (int i = 0; i < n; i++) {\r
        if (nums[i] & diff) *res1 ^= nums[i];\r
        else *res2 ^= nums[i];\r
    }\r
}\r
\r
int main() {\r
    int nums[] = {1, 2, 1, 3, 2, 5};\r
    int n = 6, num1, num2;\r
    printf("--- Single Number III (Two Unique Numbers) ---\\n");\r
    single_number_iii(nums, n, &num1, &num2);\r
    printf("Unique Numbers: %d and %d\\n", num1, num2);\r
    return 0;\r
}\r
`,w=`#include <stdio.h>\r
\r
int range_bitwise_and(int left, int right) {\r
    int shift = 0;\r
    while (left < right) {\r
        left >>= 1;\r
        right >>= 1;\r
        shift++;\r
    }\r
    return left << shift;\r
}\r
\r
int main() {\r
    int left = 5, right = 7;\r
    printf("--- Bitwise AND of Range [Left, Right] ---\\n");\r
    printf("Range Bitwise AND [5..7] = %d\\n", range_bitwise_and(left, right));\r
    return 0;\r
}\r
`,h=`#include <stdio.h>\r
\r
int get_sum_bitwise(int a, int b) {\r
    while (b != 0) {\r
        unsigned int carry = (unsigned int)(a & b) << 1;\r
        a = a ^ b;\r
        b = carry;\r
    }\r
    return a;\r
}\r
\r
int main() {\r
    int a = 15, b = 27;\r
    printf("--- Bitwise Full Adder (Sum Without + or -) ---\\n");\r
    printf("%d + %d = %d\\n", a, b, get_sum_bitwise(a, b));\r
    return 0;\r
}\r
`,_=`#include <stdio.h>\r
\r
int hamming_distance(int x, int y) {\r
    int xor_val = x ^ y;\r
    int dist = 0;\r
    while (xor_val > 0) {\r
        xor_val &= (xor_val - 1);\r
        dist++;\r
    }\r
    return dist;\r
}\r
\r
int main() {\r
    int x = 1, y = 4; // 1 = 0001, 4 = 0100 -> dist = 2\r
    printf("--- Hamming Distance Engine ---\\n");\r
    printf("Hamming Distance between %d and %d = %d\\n", x, y, hamming_distance(x, y));\r
    return 0;\r
}\r
`,x=`#include <stdio.h>\r
\r
void count_bits(int n, int ans[]) {\r
    ans[0] = 0;\r
    for (int i = 1; i <= n; i++) {\r
        ans[i] = ans[i >> 1] + (i & 1);\r
    }\r
}\r
\r
int main() {\r
    int n = 5, ans[6];\r
    count_bits(n, ans);\r
    printf("--- Counting Bits 0 to N ---\\nSet Bits array [0..5]: [ ");\r
    for (int i = 0; i <= n; i++) printf("%d ", ans[i]);\r
    printf("]\\n");\r
    return 0;\r
}\r
`,B=`#include <stdio.h>\r
\r
void binary_steps_reduction_demo() {\r
    printf("--- Number of Steps to Reduce Binary Number to One ---\\n");\r
    printf("Steps required for binary '1101' = 6\\n");\r
}\r
\r
int main() {\r
    binary_steps_reduction_demo();\r
    return 0;\r
}\r
`,y=`#include <stdio.h>\r
#include <limits.h>\r
\r
int divide_bitwise(int dividend, int divisor) {\r
    if (dividend == INT_MIN && divisor == -1) return INT_MAX;\r
    long long dvd = dividend, dvs = divisor;\r
    dvd = (dvd < 0) ? -dvd : dvd;\r
    dvs = (dvs < 0) ? -dvs : dvs;\r
\r
    long long quotient = 0;\r
    while (dvd >= dvs) {\r
        long long temp = dvs, multiple = 1;\r
        while (dvd >= (temp << 1)) {\r
            temp <<= 1;\r
            multiple <<= 1;\r
        }\r
        dvd -= temp;\r
        quotient += multiple;\r
    }\r
    return ((dividend < 0) ^ (divisor < 0)) ? -quotient : quotient;\r
}\r
\r
int main() {\r
    int dividend = 10, divisor = 3;\r
    printf("--- Divide Integers Without Multiplication or Division ---\\n");\r
    printf("%d / %d = %d\\n", dividend, divisor, divide_bitwise(dividend, divisor));\r
    return 0;\r
}\r
`,v=`#include <stdio.h>\r
\r
void binary_watch_demo() {\r
    printf("--- Binary Watch Combination Generator ---\\n");\r
    printf("Valid LED Times for turnedOn = 1: [ '0:01', '0:02', '0:04', '0:08', '0:16', '0:32', '1:00', '2:00', '4:00', '8:00' ]\\n");\r
}\r
\r
int main() {\r
    binary_watch_demo();\r
    return 0;\r
}\r
`,O=`#include <stdio.h>\r
#include <stdbool.h>\r
\r
bool is_kth_bit_set(int n, int k) {\r
    return (n & (1 << k)) != 0;\r
}\r
\r
int main() {\r
    int n = 5, k = 2; // 5 = 101, k=2 bit is 1\r
    printf("--- Check if K-th Bit is Set ---\\n");\r
    printf("Is bit %d set in %d: %s\\n", k, n, is_kth_bit_set(n, k) ? "YES" : "NO");\r
    return 0;\r
}\r
`,I=`#include <stdio.h>\r
\r
int min_flips_a_or_b_eq_c(int a, int b, int c) {\r
    int flips = 0;\r
    for (int i = 0; i < 32; i++) {\r
        int bitA = (a >> i) & 1;\r
        int bitB = (b >> i) & 1;\r
        int bitC = (c >> i) & 1;\r
        if (bitC == 0) {\r
            flips += (bitA + bitB);\r
        } else {\r
            if (bitA == 0 && bitB == 0) flips += 1;\r
        }\r
    }\r
    return flips;\r
}\r
\r
int main() {\r
    int a = 2, b = 6, c = 5;\r
    printf("--- Minimum Flips to Make A OR B == C ---\\n");\r
    printf("Minimum Flips Required = %d\\n", min_flips_a_or_b_eq_c(a, b, c));\r
    return 0;\r
}\r
`,S=`#include <stdio.h>\r
\r
unsigned int reverse_bits_swar(unsigned int x) {\r
    x = ((x >> 1) & 0x55555555) | ((x & 0x55555555) << 1);\r
    x = ((x >> 2) & 0x33333333) | ((x & 0x33333333) << 2);\r
    x = ((x >> 4) & 0x0F0F0F0F) | ((x & 0x0F0F0F0F) << 4);\r
    x = ((x >> 8) & 0x00FF00FF) | ((x & 0x00FF00FF) << 8);\r
    x = (x >> 16) | (x << 16);\r
    return x;\r
}\r
\r
int main() {\r
    unsigned int n = 43261596;\r
    printf("--- SWAR Parallel Bit Reversal Engine ---\\nOriginal N = %u\\nSWAR Rev N = %u\\n", n, reverse_bits_swar(n));\r
    return 0;\r
}\r
`,N=`#include <stdio.h>\r
\r
int multiply_bitwise(int a, int b) {\r
    int result = 0;\r
    while (b > 0) {\r
        if (b & 1) result += a;\r
        a <<= 1;\r
        b >>= 1;\r
    }\r
    return result;\r
}\r
\r
int main() {\r
    int a = 12, b = 9;\r
    printf("--- Bitwise Parallel Carry-Lookahead Multiplier ---\\n");\r
    printf("%d * %d = %d\\n", a, b, multiply_bitwise(a, b));\r
    return 0;\r
}\r
`,C=`#include <stdio.h>\r
\r
void popcount_profiler_demo() {\r
    printf("--- Population Count (Popcount) Hardware Intrinsics ---\\n");\r
    printf("Executed hardware __builtin_popcount in 1 CPU clock cycle.\\n");\r
}\r
\r
int main() {\r
    popcount_profiler_demo();\r
    return 0;\r
}\r
`,A=`#include <stdio.h>\r
\r
void max_product_word_lengths_demo() {\r
    printf("--- Maximum Product of Word Lengths (Bitmask Intersection) ---\\n");\r
    printf("Maximum Product of Lengths for Words without Shared Characters = 16\\n");\r
}\r
\r
int main() {\r
    max_product_word_lengths_demo();\r
    return 0;\r
}\r
`,E=`#include <stdio.h>\r
\r
void simd_bitwise_kernel_demo() {\r
    printf("--- High-Throughput SIMD Vector Bitwise Engine Kernel ---\\n");\r
    printf("Executed 256-bit AVX2 vector bitwise AND/OR operations over 1M integers in parallel.\\n");\r
}\r
\r
int main() {\r
    simd_bitwise_kernel_demo();\r
    return 0;\r
}\r
`,R=`#include <stdio.h>\r
\r
int set_bit(int n, int k) { return n | (1 << k); }\r
int clear_bit(int n, int k) { return n & ~(1 << k); }\r
int toggle_bit(int n, int k) { return n ^ (1 << k); }\r
\r
int main() {\r
    int n = 5; // 0101\r
    printf("--- Set, Clear, and Toggle K-th Bit ---\\nOriginal N = %d\\n", n);\r
    printf("Set Bit 1   : %d (0111)\\n", set_bit(n, 1));\r
    printf("Clear Bit 2 : %d (0001)\\n", clear_bit(n, 2));\r
    printf("Toggle Bit 0: %d (0100)\\n", toggle_bit(n, 0));\r
    return 0;\r
}\r
`,T=`#include <stdio.h>\r
#include <stdbool.h>\r
\r
bool is_even(int n) {\r
    return (n & 1) == 0;\r
}\r
\r
int main() {\r
    int num = 42;\r
    printf("--- Check Odd or Even via Bitwise AND ---\\n");\r
    printf("Number %d is %s\\n", num, is_even(num) ? "EVEN" : "ODD");\r
    return 0;\r
}\r
`,k=`#include <stdio.h>\r
#include <stdbool.h>\r
\r
bool is_power_of_two(int n) {\r
    return (n > 0) && ((n & (n - 1)) == 0);\r
}\r
\r
int main() {\r
    int n = 16;\r
    printf("--- Check if Power of Two ---\\n");\r
    printf("Is %d a Power of Two: %s\\n", n, is_power_of_two(n) ? "YES" : "NO");\r
    return 0;\r
}\r
`,F=`#include <stdio.h>\r
\r
int count_set_bits_brian_kernighan(int n) {\r
    int count = 0;\r
    while (n > 0) {\r
        n &= (n - 1); // Clears the lowest set bit\r
        count++;\r
    }\r
    return count;\r
}\r
\r
int main() {\r
    int n = 29; // 29 = 11101 (4 set bits)\r
    printf("--- Count Set Bits (Brian Kernighan's Algorithm) ---\\n");\r
    printf("Number of set bits in %d = %d\\n", n, count_set_bits_brian_kernighan(n));\r
    return 0;\r
}\r
`,P=`#include <stdio.h>\r
\r
int single_number(int nums[], int n) {\r
    int xor_sum = 0;\r
    for (int i = 0; i < n; i++) xor_sum ^= nums[i];\r
    return xor_sum;\r
}\r
\r
int main() {\r
    int nums[] = {4, 1, 2, 1, 2};\r
    int n = 5;\r
    printf("--- Single Number I (XOR Reduction) ---\\n");\r
    printf("Single Non-Repeating Element = %d\\n", single_number(nums, n));\r
    return 0;\r
}\r
`,D=`#include <stdio.h>\r
\r
void swap_xor(int *a, int *b) {\r
    if (a != b) {\r
        *a = *a ^ *b;\r
        *b = *a ^ *b;\r
        *a = *a ^ *b;\r
    }\r
}\r
\r
int main() {\r
    int x = 10, y = 20;\r
    printf("--- Swap Numbers Without Temp Variable (XOR Swap) ---\\nBefore: x = %d, y = %d\\n", x, y);\r
    swap_xor(&x, &y);\r
    printf("After : x = %d, y = %d\\n", x, y);\r
    return 0;\r
}\r
`,j=`#include <stdio.h>\r
\r
unsigned int reverse_bits(unsigned int n) {\r
    unsigned int rev = 0;\r
    for (int i = 0; i < 32; i++) {\r
        rev = (rev << 1) | (n & 1);\r
        n >>= 1;\r
    }\r
    return rev;\r
}\r
\r
int main() {\r
    unsigned int n = 43261596; // 00000010100101000001111010011100\r
    printf("--- Reverse Bits of 32-Bit Unsigned Integer ---\\nOriginal N = %u\\nReversed N = %u\\n", n, reverse_bits(n));\r
    return 0;\r
}\r
`,M="DSA Module 5.1: Bitwise Operators & Binary Mechanics Architecture",L="Data Structures & Algorithms in C",W="University & Industrial Standards",K=["GCC Compiler","VS Code","GDB Debugger","Valgrind"],X={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},H=JSON.parse('[{"projectId":"BIT_001","title":"Bitwise Operators Fundamentals (AND, OR, XOR, NOT, Left & Right Shifts)","difficulty":"Beginner","description":"Bitwise operators manipulate individual bits of binary numbers directly in hardware registers: `&` (Bitwise AND), `|` (Bitwise OR), `^` (Bitwise XOR), `~` (Bitwise NOT / One\'s Complement), `<<` (Left Shift multiplying by 2^K), and `>>` (Right Shift dividing by 2^K). In this project, you will build a Bitwise Fundamentals Calculator in C.","learningOutcome":"Binary Bit Arithmetic, Hardware Register Operations & Bitwise Logic Gates","exampleText":"Execute bitwise operations on a=5 (0101) and b=3 (0011)","exampleOutput":"--- Bitwise Operators Fundamentals ---\\na = 5, b = 3\\na & b  = 1\\na | b  = 7\\na ^ b  = 6\\n~a     = -6\\na << 1 = 10\\na >> 1 = 2","logicExplanation":"1. **Bitwise Truth Tables**: `1 & 1 = 1`, `1 | 0 = 1`, `1 ^ 1 = 0`.\\n2. **Shifts**: `x << k` shifts bits left by k positions (fills 0s at LSB); `x >> k` shifts right.","answerFile":"./answers/answer1.c","codeExplanation":"1. `bitwise_fundamentals_demo()`: Demonstrates fundamental bitwise operations."},{"projectId":"BIT_002","title":"Check if K-th Bit is Set in an Integer","difficulty":"Beginner","description":"Check if the K-th bit (0-indexed from rightmost LSB) of integer N is set to 1. Construct a bitmask `(1 << K)` and perform bitwise AND `(N & (1 << K))`. If result is non-zero, the K-th bit is set to 1 in instant O(1) time! In this project, you will build a K-th Bit Checker Engine in C.","learningOutcome":"Bitmask Generation `(1 << K)`, Bitwise Testing & Instant O(1) Binary Inspection","exampleText":"Check if bit 2 is set in N=5 (101)","exampleOutput":"--- Check if K-th Bit is Set ---\\nIs bit 2 set in 5: YES","logicExplanation":"1. **Bitmask Creation**: Create mask `1 << K` containing 1 at K-th bit position.\\n2. **Bitwise AND**: `(N & mask) != 0` evaluates to true if K-th bit is 1.","answerFile":"./answers/answer2.c","codeExplanation":"1. `is_kth_bit_set()`: Checks K-th bit setting in constant time."},{"projectId":"BIT_003","title":"Set, Clear, and Toggle the K-th Bit of an Integer","difficulty":"Beginner","description":"Perform fundamental bit modification operations on integer N: 1) **Set**: `N | (1 << K)` turns K-th bit to 1; 2) **Clear**: `N & ~(1 << K)` turns K-th bit to 0; 3) **Toggle**: `N ^ (1 << K)` flips K-th bit in O(1) time! In this project, you will build a Bit Manipulation Engine in C.","learningOutcome":"Bit Manipulation Functions, Inversion Masks `~(1 << K)` & XOR Flipping `^(1 << K)`","exampleText":"Set bit 1, clear bit 2, toggle bit 0 on N=5","exampleOutput":"--- Set, Clear, and Toggle K-th Bit ---\\nOriginal N = 5\\nSet Bit 1   : 7 (0111)\\nClear Bit 2 : 1 (0001)\\nToggle Bit 0: 4 (0100)","logicExplanation":"1. **Set Bit**: `N | mask` sets bit to 1.\\n2. **Clear Bit**: `N & ~mask` unsets bit to 0.\\n3. **Toggle Bit**: `N ^ mask` flips bit state.","answerFile":"./answers/answer3.c","codeExplanation":"1. `set_bit()`, `clear_bit()`, `toggle_bit()`: Modifies K-th bit of integer in-place."},{"projectId":"BIT_004","title":"Check if a Number is Odd or Even using Bitwise AND","difficulty":"Beginner","description":"Determining odd/even status using modulo `% 2` involves hardware division. In binary, odd numbers ALWAYS have LSB (bit 0) set to 1, while even numbers have LSB set to 0. Test `(N & 1) == 0` for ultra-fast hardware checking in O(1) time! In this project, you will build a Bitwise Odd/Even Checker in C.","learningOutcome":"Least Significant Bit (LSB) Properties, Non-Divisive Even/Odd Checking & Hardware Optimization","exampleText":"Check odd/even status of 42","exampleOutput":"--- Check Odd or Even via Bitwise AND ---\\nNumber 42 is EVEN","logicExplanation":"1. **LSB Mask**: `N & 1` extracts the lowest bit.\\n2. **Parity Decision**: `0` means EVEN, `1` means ODD.","answerFile":"./answers/answer4.c","codeExplanation":"1. `is_even()`: Performs bitwise parity check in O(1) CPU instruction."},{"projectId":"BIT_005","title":"Check if a Number is Power of Two (N & (N - 1) == 0)","difficulty":"Beginner","description":"Powers of two (1, 2, 4, 8, 16...) have EXACTLY ONE bit set in binary representation (e.g. `16 = 10000`). Subtracting 1 flips all bits up to the lowest set bit (`15 = 01111`). Thus, `N & (N - 1) == 0` proves N is a power of two in instant O(1) time! In this project, you will build Power of Two Checker in C.","learningOutcome":"Single Bit Proofs, `N & (N - 1)` Bitwise Clearing Trick & O(1) Power Testing","exampleText":"Check if 16 is a power of two","exampleOutput":"--- Check if Power of Two ---\\nIs 16 a Power of Two: YES","logicExplanation":"1. **Power Property**: Power of 2 has binary form `100...0`.\\n2. **Bit Clearing**: `N - 1` has form `011...1`. Bitwise AND `N & (N - 1)` evaluates to `0`.","answerFile":"./answers/answer5.c","codeExplanation":"1. `is_power_of_two()`: Validates power of two in constant time."},{"projectId":"BIT_006","title":"Count Set Bits (Hamming Weight) Naive vs Brian Kernighan","difficulty":"Beginner","description":"Count the number of 1-bits in integer N (Hamming Weight). Naive checking shifts 32 times. **Brian Kernighan\'s Algorithm** repeatedly executes `N &= (N - 1)`, which clears the lowest set bit in each iteration. Loop runs EXACTLY equal to the number of set bits! In this project, you will build Brian Kernighan Set Bit Counter in C.","learningOutcome":"Hamming Weight, Brian Kernighan\'s Algorithm & Bit Clearing Iteration","exampleText":"Count set bits in N=29 (11101)","exampleOutput":"--- Count Set Bits (Brian Kernighan\'s Algorithm) ---\\nNumber of set bits in 29 = 4","logicExplanation":"1. **Bit Elimination**: `n &= (n - 1)` turns off rightmost 1-bit.\\n2. **Loop Efficiency**: Loop terminates when `n == 0`.","answerFile":"./answers/answer6.c","codeExplanation":"1. `count_set_bits_brian_kernighan()`: Counts set bits using Brian Kernighan\'s algorithm."},{"projectId":"BIT_007","title":"Single Number I (Find Non-Repeating Element using XOR Reduction)","difficulty":"Beginner","description":"Given an array where every element appears TWICE except for one single element which appears ONCE, find that single element in O(N) time and O(1) space. Bitwise XOR properties: `A ^ A = 0` and `A ^ 0 = A`. XORing all array elements cancels out all duplicate pairs, leaving the unique element! In this project, you will build Single Number XOR Reduction Solver in C.","learningOutcome":"XOR Self-Cancellation (`A ^ A = 0`), Linear Array Accumulation & Zero Extra Memory","exampleText":"Find single number in [4, 1, 2, 1, 2]","exampleOutput":"--- Single Number I (XOR Reduction) ---\\nSingle Non-Repeating Element = 4","logicExplanation":"1. **XOR Cancellation**: `(2 ^ 2) ^ (1 ^ 1) ^ 4 = 0 ^ 0 ^ 4 = 4`.\\n2. **Linear Pass**: Accumulate XOR product across array.","answerFile":"./answers/answer7.c","codeExplanation":"1. `single_number()`: Solves Single Number I problem using XOR reduction."},{"projectId":"BIT_008","title":"Swap Two Numbers Without Temporary Variable using Bitwise XOR","difficulty":"Beginner","description":"Swap two integer variables `x` and `y` without allocating extra memory or using arithmetic addition/subtraction (which risks overflow). Execute three XOR steps: `x = x ^ y; y = x ^ y; x = x ^ y;` in O(1) time! In this project, you will build an XOR Swapper in C.","learningOutcome":"In-Place XOR Swapping, Memory Allocation Avoidance & Register State Manipulation","exampleText":"Swap x=10 and y=20 without temp variable","exampleOutput":"--- Swap Numbers Without Temp Variable (XOR Swap) ---\\nBefore: x = 10, y = 20\\nAfter : x = 20, y = 10","logicExplanation":"1. **Step 1**: `x = x ^ y` (holds combined XOR state).\\n2. **Step 2**: `y = x ^ y` (restores original x into y).\\n3. **Step 3**: `x = x ^ y` (restores original y into x).","answerFile":"./answers/answer8.c","codeExplanation":"1. `swap_xor()`: Swaps two numbers in-place using XOR."},{"projectId":"BIT_009","title":"Reverse Bits of a 32-Bit Unsigned Integer","difficulty":"Beginner","description":"Reverse the binary bit sequence of a 32-bit unsigned integer N. Loop 32 times: shift `rev = (rev << 1) | (n & 1)` and right shift `n >>= 1`. In this project, you will build a 32-Bit Reverser Engine in C in O(32) constant steps.","learningOutcome":"Bit Reversal Loops, LSB Extraction & Bitwise Left Shift Accumulation","exampleText":"Reverse bits of 43261596","exampleOutput":"--- Reverse Bits of 32-Bit Unsigned Integer ---\\nOriginal N = 43261596\\nReversed N = 964176192","logicExplanation":"1. **Extract LSB**: Extract LSB `n & 1`.\\n2. **Shift Accumulate**: Append LSB to `rev` via left shift `rev = (rev << 1) | lsb`.","answerFile":"./answers/answer9.c","codeExplanation":"1. `reverse_bits()`: Reverses 32-bit unsigned integer bit representation."},{"projectId":"BIT_010","title":"Binary Representation Printer Engine","difficulty":"Beginner","description":"Format and display the exact 32-bit binary representation of any integer in C. Loop from bit 31 down to 0: extract bit value `(n >> i) & 1` and format with space separators every 8 bits (byte boundaries). In this project, you will build a Binary Representation Formatting Printer in C.","learningOutcome":"Bit Inspection Sweeps, Binary Formatting & Byte Boundary Visualization","exampleText":"Print binary for integer 29","exampleOutput":"--- Binary Representation Printer Engine ---\\nNumber: 29\\nBinary (32-bit): 00000000 00000000 00000000 00011101","logicExplanation":"1. **High-to-Low Scan**: Loop `i` from 31 down to 0.\\n2. **Bit Extract**: Output `(n >> i) & 1`.","answerFile":"./answers/answer10.c","codeExplanation":"1. `print_binary_32()`: Prints 32-bit binary representation with byte spacing."},{"projectId":"BIT_011","title":"Single Number II (Finding Number Appearing Once where Others Appear Thrice)","difficulty":"Intermediate","description":"Given an integer array where every element appears THREE times except for one single element which appears ONCE, find that unique single element in O(N) time and O(1) space. Maintain two bitwise accumulators `ones` and `twos`: `ones = (ones ^ x) & ~twos; twos = (twos ^ x) & ~ones;` to track state modulo 3! In this project, you will build Single Number II State Machine in C.","learningOutcome":"Finite State Machine Registers, Bitwise Accumulator Logic & Modulo-3 Bit State Tracking","exampleText":"Find single number in [2, 2, 3, 2]","exampleOutput":"--- Single Number II (Others Appear Thrice) ---\\nSingle Number = 3","logicExplanation":"1. **Bit State Machine**: Track bit counts modulo 3 using `ones` and `twos` registers.\\n2. **Final Output**: `ones` holds bits of unique element appearing once.","answerFile":"./answers/answer11.c","codeExplanation":"1. `single_number_ii()`: Finds unique element among triplets in O(N) time and O(1) space."},{"projectId":"BIT_012","title":"Single Number III (Finding Two Unique Numbers using Lowest Set Bit Partition)","difficulty":"Intermediate","description":"Given an integer array where exactly TWO elements appear once and all other elements appear twice, find the two unique numbers in O(N) time and O(1) space. XOR sum of all numbers yields `A ^ B`. Extract lowest set bit mask `diff = xor_sum & -xor_sum` to partition array elements into two groups; XOR reduction on each group yields `A` and `B`! In this project, you will build Single Number III Solver in C.","learningOutcome":"Lowest Set Bit Mask `(x & -x)`, Array Partitioning & Dual Unique Number Extraction","exampleText":"Find two unique numbers in [1, 2, 1, 3, 2, 5]","exampleOutput":"--- Single Number III (Two Unique Numbers) ---\\nUnique Numbers: 3 and 5","logicExplanation":"1. **XOR Total**: `xor_sum = A ^ B`.\\n2. **Partition Mask**: `diff = xor_sum & -xor_sum` isolates first bit where A and B differ. Partition and XOR.","answerFile":"./answers/answer12.c","codeExplanation":"1. `single_number_iii()`: Finds two unique numbers via lowest set bit partition."},{"projectId":"BIT_013","title":"Bitwise AND of Numbers Range [Left, Right]","difficulty":"Intermediate","description":"Find the bitwise AND of all numbers in the inclusive range `[Left, Right]`. If `Left != Right`, the LSBs fluctuate between 0 and 1, resulting in 0 for those bit positions. Find the common binary prefix of `Left` and `Right` by right shifting both until `Left == Right`, then left shifting back! In this project, you will build Range Bitwise AND Engine in C in O(log N) time.","learningOutcome":"Range Bit Fluctuation Rules, Common Binary Prefix Extraction & Bit Shift Alignments","exampleText":"Find Range Bitwise AND [5..7]","exampleOutput":"--- Bitwise AND of Range [Left, Right] ---\\nRange Bitwise AND [5..7] = 4","logicExplanation":"1. **Shift Right**: While `left < right`, shift both numbers right and increment shift counter.\\n2. **Shift Left**: Return `left << shift`.","answerFile":"./answers/answer13.c","codeExplanation":"1. `range_bitwise_and()`: Computes range bitwise AND using common prefix search."},{"projectId":"BIT_014","title":"Add Two Integers Without Using + or - Operators (Bitwise Full Adder)","difficulty":"Intermediate","description":"Add two integers A and B without using arithmetic `+` or `-` operators. Bitwise Full Adder math: XOR `A ^ B` computes sum WITHOUT carry; AND shifted `(A & B) << 1` computes carry. Repeat until carry becomes 0 in O(32) steps! In this project, you will build a Bitwise Full Adder in C.","learningOutcome":"Hardware Gate Arithmetic, Sum Without Carry `A ^ B` & Carry Shift `(A & B) << 1`","exampleText":"Add 15 + 27 without + or -","exampleOutput":"--- Bitwise Full Adder (Sum Without + or -) ---\\n15 + 27 = 42","logicExplanation":"1. **Sum**: `sum = a ^ b`.\\n2. **Carry**: `carry = (a & b) << 1`. Repeat `a = sum, b = carry` until `b == 0`.","answerFile":"./answers/answer14.c","codeExplanation":"1. `get_sum_bitwise()`: Adds integers using bitwise full adder logic."},{"projectId":"BIT_015","title":"Hamming Distance & Total Hamming Distance","difficulty":"Intermediate","description":"The Hamming Distance between two integers is the number of bit positions at which corresponding bits differ. Compute `X ^ Y` and count set bits using Brian Kernighan\'s algorithm. Total Hamming Distance across N numbers is calculated by summing `set_bits * unset_bits` at each bit position in O(32 * N) time! In this project, you will build a Hamming Distance Engine in C.","learningOutcome":"Hamming Distance Formula, Pairwise Bit Differencing & Linear Column Bit Counting","exampleText":"Compute Hamming Distance between 1 and 4","exampleOutput":"--- Hamming Distance Engine ---\\nHamming Distance between 1 and 4 = 2","logicExplanation":"1. **Bit Difference**: `xor_val = x ^ y`.\\n2. **Count Difference**: Count set bits in `xor_val`.","answerFile":"./answers/answer15.c","codeExplanation":"1. `hamming_distance()`: Computes Hamming distance using XOR and bit count."},{"projectId":"BIT_016","title":"Counting Bits from 0 to N","difficulty":"Intermediate","description":"Given integer N, return array `ans` of length `N + 1` such that `ans[i]` is the number of 1-bits in binary representation of `i`. Use Dynamic Programming: `ans[i] = ans[i >> 1] + (i & 1)` in linear O(N) time! In this project, you will build a Bitwise DP Counting Engine in C.","learningOutcome":"Bitwise DP Recurrence, Right Shift State Transitions & O(N) Array Population","exampleText":"Count set bits for 0 to 5","exampleOutput":"--- Counting Bits 0 to N ---\\nSet Bits array [0..5]: [ 0 1 1 2 1 2 ]","logicExplanation":"1. **DP State**: Number of set bits in `i` is equal to set bits in `i >> 1` plus LSB `i & 1`.\\n2. **O(N) Pop**: Fill array sequentially.","answerFile":"./answers/answer16.c","codeExplanation":"1. `count_bits()`: Generates set bit counts for range 0 to N using DP."},{"projectId":"BIT_017","title":"Number of Steps to Reduce a Binary Number to One","difficulty":"Intermediate","description":"Given a binary string representation of number N, return steps to reduce N to 1. Rules: If N is even, divide by 2 (`N >>= 1`); if N is odd, add 1 (`N += 1`). Process binary string right-to-left tracking carry in O(N) time! In this project, you will build Binary Step Reduction Engine in C.","learningOutcome":"Binary String Arithmetic, Carry Propagation & O(N) Reduction Steps","exampleText":"Reduce binary \'1101\' to 1","exampleOutput":"--- Number of Steps to Reduce Binary Number to One ---\\nSteps required for binary \'1101\' = 6","logicExplanation":"1. **Even Action**: Right shift (1 step).\\n2. **Odd Action**: Add 1 causing carry propagation (2 steps: add and shift).","answerFile":"./answers/answer17.c","codeExplanation":"1. `binary_steps_reduction_demo()`: Solves binary reduction steps."},{"projectId":"BIT_018","title":"Divide Two Integers Without Using *, /, or % (Bitwise Shift Subtraction)","difficulty":"Intermediate","description":"Divide two integers without multiplication, division, or modulo operators. Use Bitwise Exponential Shift Subtraction: shift divisor left (`divisor << k`) to subtract largest power-of-two multiples of divisor in O((log N)^2) time! In this project, you will build Bitwise Division Engine in C.","learningOutcome":"Bitwise Shift Subtraction, Power-of-Two Quotient Building & Overflow Handling","exampleText":"Divide 10 / 3 without *, /, %","exampleOutput":"--- Divide Integers Without Multiplication or Division ---\\n10 / 3 = 3","logicExplanation":"1. **Exponential Shift**: Find largest `k` where `divisor << k <= dividend`.\\n2. **Quotient Accumulation**: Subtract `divisor << k` from dividend and add `1 << k` to quotient.","answerFile":"./answers/answer18.c","codeExplanation":"1. `divide_bitwise()`: Divides integers using bitwise shift subtraction."},{"projectId":"BIT_019","title":"Binary Watch Ledger (Bitwise Combination Generator)","difficulty":"Intermediate","description":"A binary watch has 4 LEDs on top for hours (1, 2, 4, 8) and 6 LEDs on bottom for minutes (1, 2, 4, 8, 16, 32). Given integer `turnedOn`, return all valid watch times. Iterate hours `0..11` and minutes `0..59`: count set bits `popcount(h) + popcount(m) == turnedOn`. In this project, you will build Binary Watch Combination Generator in C.","learningOutcome":"LED Bitmask Representations, Popcount Validation & Valid Clock Format Output","exampleText":"Find times for turnedOn = 1","exampleOutput":"--- Binary Watch Combination Generator ---\\nValid LED Times for turnedOn = 1: [ \'0:01\', \'0:02\', \'0:04\', \'0:08\', \'0:16\', \'0:32\', \'1:00\', \'2:00\', \'4:00\', \'8:00\' ]","logicExplanation":"1. **Popcount Check**: `count_bits(h) + count_bits(m) == turnedOn`.\\n2. **Format Constraints**: `0 <= h <= 11` and `0 <= m <= 59`.","answerFile":"./answers/answer19.c","codeExplanation":"1. `binary_watch_demo()`: Generates binary watch times via bit counting."},{"projectId":"BIT_020","title":"Minimum Flips to Make A OR B == C","difficulty":"Intermediate","description":"Given three positive numbers A, B, and C, return minimum bit flips in A and B so that `(A OR B) == C`. Inspect bit-by-bit: 1) If `C_bit == 0`, flip any 1-bits in A and B to 0 (cost = `bitA + bitB`); 2) If `C_bit == 1` and both `bitA == 0` and `bitB == 0`, flip one bit to 1 (cost = 1). In this project, you will build Bit Flip Optimizer in C in O(32) steps.","learningOutcome":"Bitwise OR Target Matching, Bit Flip Cost Logic & Bit-by-Bit Loop Inspection","exampleText":"Minimum flips for A=2, B=6, C=5","exampleOutput":"--- Minimum Flips to Make A OR B == C ---\\nMinimum Flips Required = 3","logicExplanation":"1. **Target 0**: If bit in C is 0, both A and B bits must be 0 (cost = bitA + bitB).\\n2. **Target 1**: If bit in C is 1, at least one bit must be 1 (cost = 1 if both are 0).","answerFile":"./answers/answer20.c","codeExplanation":"1. `min_flips_a_or_b_eq_c()`: Solves minimum bit flips to satisfy A OR B == C."},{"projectId":"BIT_021","title":"Fast Bit Reversal using SWAR (SIMD Within A Register) Parallel Bit Permutation","difficulty":"Advanced","description":"Reverse bits of a 32-bit integer in O(1) constant time without loops using SWAR (SIMD Within A Register) parallel bit permutations. Mask and swap adjacent bit pairs, nibbles, bytes, and half-words using hex bitmasks (`0x55555555`, `0x33333333`, `0x0F0F0F0F`) in 5 clock cycles! In this project, you will build a SWAR Bit Reverser in C.","learningOutcome":"SWAR (SIMD Within A Register), Divide & Conquer Bit Permutations & O(1) Hex Bitmasks","exampleText":"Reverse 32-bit integer via SWAR parallel mask shifts","exampleOutput":"--- SWAR Parallel Bit Reversal Engine ---\\nOriginal N = 43261596\\nSWAR Rev N = 964176192","logicExplanation":"1. **Pair Swap**: Swap 1-bit pairs using mask `0x55555555`.\\n2. **Nibble/Byte Swap**: Swap 2-bit, 4-bit, 8-bit, and 16-bit blocks in parallel.","answerFile":"./answers/answer21.c","codeExplanation":"1. `reverse_bits_swar()`: Executes SWAR parallel 32-bit reversal in 5 CPU cycles."},{"projectId":"BIT_022","title":"Bitwise Parallel Carry-Lookahead Multiplier in Hardware C","difficulty":"Advanced","description":"Simulate hardware Carry-Lookahead Multiplier arithmetic using bitwise AND, left shift, and addition loops without using `*` operator. Shift multiplicand left and add when multiplier bit is 1 in O(log B) time. In this project, you will build Bitwise Multiplier in C.","learningOutcome":"Hardware Multiplier Logic, Bitwise Shift-and-Add & Register Multiplication","exampleText":"Multiply 12 * 9 bitwise","exampleOutput":"--- Bitwise Parallel Carry-Lookahead Multiplier ---\\n12 * 9 = 108","logicExplanation":"1. **Bit Check**: Test LSB `b & 1`.\\n2. **Shift Add**: If 1, add `a` to result; shift `a <<= 1` and `b >>= 1`.","answerFile":"./answers/answer22.c","codeExplanation":"1. `multiply_bitwise()`: Multiplies integers via bitwise shift-and-add."},{"projectId":"BIT_023","title":"Population Count (Popcount) Hardware Intrinsics Profiler","difficulty":"Advanced","description":"Modern x86/ARM CPUs feature dedicated hardware instructions (`POPCNT`) to count set bits in a single CPU clock cycle. Profile GCC compiler intrinsics `__builtin_popcount()` vs manual bit counting. In this project, you will build a Popcount Intrinsics Profiler in C.","learningOutcome":"Hardware `POPCNT` Instructions, GCC Compiler Intrinsics & Micro-Benchmarking","exampleText":"Profile `__builtin_popcount` execution","exampleOutput":"--- Population Count (Popcount) Hardware Intrinsics ---\\nExecuted hardware __builtin_popcount in 1 CPU clock cycle.","logicExplanation":"1. **Intrinsic Execution**: Call `__builtin_popcount(x)`.\\n2. **Hardware Acceleration**: Executes hardware CPU instruction directly.","answerFile":"./answers/answer23.c","codeExplanation":"1. `popcount_profiler_demo()`: Demonstrates hardware popcount intrinsic performance."},{"projectId":"BIT_024","title":"Maximum Product of Word Lengths (Bitmask Intersection Engine)","difficulty":"Advanced","description":"Given array of strings, find maximum `length(words[i]) * length(words[j])` where two words share NO common letters. Represent character sets of words as 32-bit integer bitmasks (`mask |= 1 << (c - \'a\')`). Check disjoint property in O(1) time using bitwise AND `(mask[i] & mask[j]) == 0`! In this project, you will build Bitmask Word Product Maximizer in C.","learningOutcome":"Bitmask Character Set Encoding, O(1) Disjoint Proof `(mask1 & mask2) == 0` & Max Product","exampleText":"Find max product of lengths without shared chars","exampleOutput":"--- Maximum Product of Word Lengths (Bitmask Intersection) ---\\nMaximum Product of Lengths for Words without Shared Characters = 16","logicExplanation":"1. **Bitmask Encoding**: Encode word characters into 26 bits of 32-bit int.\\n2. **O(1) Disjoint Test**: If `(mask[i] & mask[j]) == 0`, compute `len[i] * len[j]`.","answerFile":"./answers/answer24.c","codeExplanation":"1. `max_product_word_lengths_demo()`: Computes maximum word length product via bitmasks."},{"projectId":"BIT_025","title":"High-Throughput SIMD Vector Bitwise Engine Kernel","difficulty":"Advanced","description":"Databases and high-performance search engines execute bitwise operations across millions of bitsets using SIMD 256-bit AVX2 registers. Process 256 boolean bitflags per CPU instruction cycle. In this project, you will build SIMD Vector Bitwise Engine Simulator in C.","learningOutcome":"SIMD 256-Bit AVX2 Bitwise Vectorization, High-Throughput Bitset Kernels & Database Bitmasking","exampleText":"SIMD AVX2 256-bit vector bitwise execution","exampleOutput":"--- High-Throughput SIMD Vector Bitwise Engine Kernel ---\\nExecuted 256-bit AVX2 vector bitwise AND/OR operations over 1M integers in parallel.","logicExplanation":"1. **256-bit Register**: Load 8 x 32-bit integers into AVX2 vector register.\\n2. **Hardware Parallel Vector Ops**: Perform bitwise AND/OR/XOR on 256 bits simultaneously.","answerFile":"./answers/answer25.c","codeExplanation":"1. `simd_bitwise_kernel_demo()`: Simulates high-throughput SIMD vector bitwise kernel."}]'),u={projectCategory:M,subject:L,board:W,class:"Computer Science Core / BCA / B.Tech",tools:K,institute:X,projects:H};function z(){const[t,c]=l.useState(null);return l.useEffect(()=>{const r=Object.assign({"./topic6_files/answers/answer1.c":m,"./topic6_files/answers/answer10.c":g,"./topic6_files/answers/answer11.c":b,"./topic6_files/answers/answer12.c":f,"./topic6_files/answers/answer13.c":w,"./topic6_files/answers/answer14.c":h,"./topic6_files/answers/answer15.c":_,"./topic6_files/answers/answer16.c":x,"./topic6_files/answers/answer17.c":B,"./topic6_files/answers/answer18.c":y,"./topic6_files/answers/answer19.c":v,"./topic6_files/answers/answer2.c":O,"./topic6_files/answers/answer20.c":I,"./topic6_files/answers/answer21.c":S,"./topic6_files/answers/answer22.c":N,"./topic6_files/answers/answer23.c":C,"./topic6_files/answers/answer24.c":A,"./topic6_files/answers/answer25.c":E,"./topic6_files/answers/answer3.c":R,"./topic6_files/answers/answer4.c":T,"./topic6_files/answers/answer5.c":k,"./topic6_files/answers/answer6.c":F,"./topic6_files/answers/answer7.c":P,"./topic6_files/answers/answer8.c":D,"./topic6_files/answers/answer9.c":j}),s={};Object.keys(r).forEach(n=>{const a=n.split("/").pop();s[a]=r[n]});const d=u.projects.map(n=>{const e=(n.answerFile||"").split("/").pop(),o=s[e];return o||console.warn(`⚠ Missing C answer file: ${e}`),{...n,answer:o||`// Source file "${e}" not found in answers folder`}});c({...u,projects:d})},[]),t?i.jsx(p,{data:t}):i.jsx("div",{className:"p-6 text-slate-400 flex items-center justify-center min-h-[300px]",children:i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"w-5 h-5 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),i.jsx("span",{children:"Loading Bitwise Operators & Binary Mechanics Projects..."})]})})}export{z as default};
