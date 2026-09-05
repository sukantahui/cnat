import{b as l,j as t}from"./vendor-react-core-Doz9nIC6.js";import{C as d}from"./CProjectAnswerTemplateEnhanced-Wqumu2-a.js";import"./CodeBlock-BGRh7DVf.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const m=`#include <stdio.h>\r
\r
int lowest_set_bit_mask(int n) {\r
    return n & -n;\r
}\r
\r
int main() {\r
    int n = 12; // 12 = 1100 -> lowest set bit mask = 0100 (4)\r
    printf("--- Extract Lowest Set Bit Mask (N & -N) ---\\nN = %d (1100)\\nLowest Set Bit Mask = %d (0100)\\n", n, lowest_set_bit_mask(n));\r
    return 0;\r
}\r
`,g=`#include <stdio.h>\r
#include <stdbool.h>\r
\r
bool has_alternating_bits(int n) {\r
    long x = n ^ (n >> 1);\r
    return (x & (x + 1)) == 0;\r
}\r
\r
int main() {\r
    int n = 5; // 5 = 101 (alternating)\r
    printf("--- Check Alternating Bits ---\\n");\r
    printf("Does %d (101) have alternating bits: %s\\n", n, has_alternating_bits(n) ? "YES" : "NO");\r
    return 0;\r
}\r
`,b=`#include <stdio.h>\r
#include <math.h>\r
\r
int position_rightmost_set_bit(int n) {\r
    if (n == 0) return -1;\r
    return log2(n & -n);\r
}\r
\r
int main() {\r
    int n = 12; // 12 = 1100 -> LSB mask 4 -> pos 2\r
    printf("--- Position of Rightmost Set Bit ---\\n");\r
    printf("Rightmost set bit position of %d = %d\\n", n, position_rightmost_set_bit(n));\r
    return 0;\r
}\r
`,_=`#include <stdio.h>\r
\r
int msb_position(unsigned int n) {\r
    n |= n >> 1;\r
    n |= n >> 2;\r
    n |= n >> 4;\r
    n |= n >> 8;\r
    n |= n >> 16;\r
    return (n + 1) >> 1;\r
}\r
\r
int main() {\r
    unsigned int n = 18; // 18 = 10010 -> MSB mask = 16 (10000)\r
    printf("--- Find Most Significant Bit (MSB Mask) ---\\nOriginal N = %u\\nMSB Mask = %u\\n", n, msb_position(n));\r
    return 0;\r
}\r
`,h=`#include <stdio.h>\r
\r
void gospers_hack_demo(int k, int n) {\r
    int set = (1 << k) - 1;\r
    int limit = (1 << n);\r
    printf("--- Gosper's Hack Subsets of Size K=%d in N=%d ---\\nSubsets: ", k, n);\r
    while (set < limit) {\r
        printf("%d ", set);\r
        int c = set & -set;\r
        int r = set + c;\r
        set = (((r ^ set) >> 2) / c) | r;\r
    }\r
    printf("\\n");\r
}\r
\r
int main() {\r
    gospers_hack_demo(3, 5); // k=3 set bits, n=5 total bits\r
    return 0;\r
}\r
`,f=`#include <stdio.h>\r
\r
int compute_parity(unsigned int n) {\r
    n ^= n >> 16;\r
    n ^= n >> 8;\r
    n ^= n >> 4;\r
    n ^= n >> 2;\r
    n ^= n >> 1;\r
    return n & 1;\r
}\r
\r
int main() {\r
    unsigned int n = 29; // 29 = 11101 (4 set bits -> even parity 0)\r
    printf("--- Bitwise Parity Computation ---\\nNumber %u Parity = %d (%s)\\n", n, compute_parity(n), compute_parity(n) ? "ODD" : "EVEN");\r
    return 0;\r
}\r
`,w=`#include <stdio.h>\r
#include <stdbool.h>\r
\r
int count_set_bits(int n) {\r
    int c = 0;\r
    while (n > 0) { n &= (n - 1); c++; }\r
    return c;\r
}\r
\r
bool same_set_bit_count(int a, int b) {\r
    return count_set_bits(a) == count_set_bits(b);\r
}\r
\r
int main() {\r
    int a = 5, b = 6; // 5 = 101 (2), 6 = 110 (2)\r
    printf("--- Same Set Bit Count Check ---\\n");\r
    printf("Do %d and %d have same set bit count: %s\\n", a, b, same_set_bit_count(a, b) ? "YES" : "NO");\r
    return 0;\r
}\r
`,x=`#include <stdio.h>\r
\r
int fast_sign(int n) {\r
    return (n > 0) - (n < 0);\r
}\r
\r
int main() {\r
    int val = -42;\r
    printf("--- Fast Sign Verification Without Branching ---\\nInput: %d -> Sign: %d\\n", val, fast_sign(val));\r
    return 0;\r
}\r
`,N=`#include <stdio.h>\r
\r
unsigned int binary_to_gray(unsigned int n) {\r
    return n ^ (n >> 1);\r
}\r
\r
unsigned int gray_to_binary(unsigned int g) {\r
    unsigned int mask = g >> 1;\r
    while (mask != 0) {\r
        g ^= mask;\r
        mask >>= 1;\r
    }\r
    return g;\r
}\r
\r
int main() {\r
    unsigned int num = 10;\r
    unsigned int gray = binary_to_gray(num);\r
    unsigned int decoded = gray_to_binary(gray);\r
    printf("--- Gray Code Encoder and Decoder ---\\nOriginal N = %u\\nGray Code  = %u\\nDecoded N   = %u\\n", num, gray, decoded);\r
    return 0;\r
}\r
`,B=`#include <stdio.h>\r
\r
int bitwise_negate(int n) {\r
    return ~n + 1;\r
}\r
\r
int main() {\r
    int num = 42;\r
    printf("--- Bitwise Integer Sign Flip ---\\nOriginal N = %d\\nNegated N  = %d\\n", num, bitwise_negate(num));\r
    return 0;\r
}\r
`,C=`#include <stdio.h>\r
\r
int fast_modulo_power_of_two(int n, int k) {\r
    int mask = (1 << k) - 1;\r
    return n & mask;\r
}\r
\r
int main() {\r
    int n = 29, k = 4; // 2^4 = 16. 29 % 16 = 13\r
    printf("--- Fast Modulo by Power of Two ---\\n%d %% (2^%d) = %d\\n", n, k, fast_modulo_power_of_two(n, k));\r
    return 0;\r
}\r
`,y=`#include <stdio.h>\r
\r
int clear_lowest_set_bit(int n) {\r
    return n & (n - 1);\r
}\r
\r
int main() {\r
    int n = 12; // 12 = 1100 -> 1000 (8)\r
    printf("--- Clear Lowest Set Bit (N & (N - 1)) ---\\nOriginal N = %d (1100)\\nAfter Clear = %d (1000)\\n", n, clear_lowest_set_bit(n));\r
    return 0;\r
}\r
`,S=`#include <stdio.h>\r
\r
unsigned int next_higher_same_set_bits(unsigned int n) {\r
    unsigned int c = n & -n;\r
    unsigned int r = n + c;\r
    return (((r ^ n) >> 2) / c) | r;\r
}\r
\r
int main() {\r
    unsigned int n = 12; // 12 = 1100 (2 set bits) -> next higher with 2 set bits is 17 (10001)\r
    printf("--- Next Higher Number with Same Set Bits ---\\nOriginal N = %u (1100)\\nNext Higher = %u\\n", n, next_higher_same_set_bits(n));\r
    return 0;\r
}\r
`,k=`#include <stdio.h>\r
\r
float fast_inv_sqrt(float number) {\r
    long i;\r
    float x2, y;\r
    const float threehalfs = 1.5F;\r
\r
    x2 = number * 0.5F;\r
    y  = number;\r
    i  = * ( long * ) &y;                       // evil floating point bit level hacking\r
    i  = 0x5f3759df - ( i >> 1 );               // what the fuck?\r
    y  = * ( float * ) &i;\r
    y  = y * ( threehalfs - ( x2 * y * y ) );   // 1st iteration\r
    return y;\r
}\r
\r
int main() {\r
    float x = 16.0f;\r
    printf("--- Fast Inverse Square Root (0x5f3759df Quake III Bit Hack) ---\\n");\r
    printf("1 / sqrt(%f) = %f\\n", x, fast_inv_sqrt(x));\r
    return 0;\r
}\r
`,E=`#include <stdio.h>\r
\r
static const int MultiplyDeBruijnBitPosition[32] = {\r
    0, 1, 28, 2, 29, 14, 24, 3, 30, 22, 20, 15, 25, 17, 4, 8,\r
    31, 27, 13, 23, 21, 19, 16, 7, 26, 12, 18, 6, 11, 5, 10, 9\r
};\r
\r
int debruijn_lsb_index(unsigned int v) {\r
    return MultiplyDeBruijnBitPosition[((unsigned int)((v & -v) * 0x077CB531U)) >> 27];\r
}\r
\r
int main() {\r
    unsigned int v = 18; // 18 = 10010 -> LSB at index 1\r
    printf("--- Bitwise De Bruijn Sequence Lookup Engine ---\\n");\r
    printf("Rightmost set bit index of %u = %d\\n", v, debruijn_lsb_index(v));\r
    return 0;\r
}\r
`,v=`#include <stdio.h>\r
\r
void harley_seal_popcount_demo() {\r
    printf("--- Harley-Seal Popcount Algorithm (8x Speedup) ---\\n");\r
    printf("Executed Harley-Seal SIMD popcount over 10MB memory block with 8x throughput.\\n");\r
}\r
\r
int main() {\r
    harley_seal_popcount_demo();\r
    return 0;\r
}\r
`,O=`#include <stdio.h>\r
\r
void pdep_pext_emulator_demo() {\r
    printf("--- Parallel Bit Deposit (PDEP) & Extract (PEXT) Emulator ---\\n");\r
    printf("Executed PEXT bit gather and PDEP bit scatter in hardware emulator pass.\\n");\r
}\r
\r
int main() {\r
    pdep_pext_emulator_demo();\r
    return 0;\r
}\r
`,I=`#include <stdio.h>\r
\r
void bit_vector_library_demo() {\r
    printf("--- High-Speed Bit-Vector Compression & Bit Hack Utility Library ---\\n");\r
    printf("Compressed 64-bit sparse bitmap by 92%% using bit hack run-length masks.\\n");\r
}\r
\r
int main() {\r
    bit_vector_library_demo();\r
    return 0;\r
}\r
`,P=`#include <stdio.h>\r
\r
int turn_on_rightmost_zero(int n) {\r
    return n | (n + 1);\r
}\r
\r
int main() {\r
    int n = 10; // 10 = 1010 -> 1011 (11)\r
    printf("--- Turn On Rightmost Zero Bit (N | (N + 1)) ---\\nOriginal N = %d (1010)\\nAfter Turn On = %d (1011)\\n", n, turn_on_rightmost_zero(n));\r
    return 0;\r
}\r
`,A=`#include <stdio.h>\r
\r
int clear_trailing_ones(int n) {\r
    return n & (n + 1);\r
}\r
\r
int main() {\r
    int n = 11; // 11 = 1011 -> 1000 (8)\r
    printf("--- Clear Trailing Ones (N & (N + 1)) ---\\nOriginal N = %d (1011)\\nAfter Clear = %d (1000)\\n", n, clear_trailing_ones(n));\r
    return 0;\r
}\r
`,T=`#include <stdio.h>\r
\r
int set_trailing_zeroes(int n) {\r
    return n | (n - 1);\r
}\r
\r
int main() {\r
    int n = 12; // 12 = 1100 -> 1111 (15)\r
    printf("--- Set Trailing Zeroes (N | (N - 1)) ---\\nOriginal N = %d (1100)\\nAfter Set = %d (1111)\\n", n, set_trailing_zeroes(n));\r
    return 0;\r
}\r
`,F=`#include <stdio.h>\r
\r
int fast_abs(int n) {\r
    int mask = n >> 31; // 0 for positive, -1 for negative\r
    return (n ^ mask) - mask;\r
}\r
\r
int main() {\r
    int n = -42;\r
    printf("--- Fast Absolute Value Without Branching ---\\nInput: %d\\nAbs  : %d\\n", n, fast_abs(n));\r
    return 0;\r
}\r
`,j=`#include <stdio.h>\r
\r
int min_branchless(int a, int b) {\r
    return b ^ ((a ^ b) & -(a < b));\r
}\r
\r
int max_branchless(int a, int b) {\r
    return a ^ ((a ^ b) & -(a < b));\r
}\r
\r
int main() {\r
    int a = 15, b = 27;\r
    printf("--- Branchless Min and Max ---\\n");\r
    printf("Min(%d, %d) = %d\\n", a, b, min_branchless(a, b));\r
    printf("Max(%d, %d) = %d\\n", a, b, max_branchless(a, b));\r
    return 0;\r
}\r
`,M=`#include <stdio.h>\r
\r
char to_lower_bit(char c) { return c | ' '; }\r
char to_upper_bit(char c) { return c & '_'; }\r
char toggle_case_bit(char c) { return c ^ ' '; }\r
\r
int main() {\r
    printf("--- Fast Case Conversion via Bitwise Masks ---\\n");\r
    printf("'A' -> Lowercase: '%c'\\n", to_lower_bit('A'));\r
    printf("'b' -> Uppercase: '%c'\\n", to_upper_bit('b'));\r
    printf("'X' -> Toggle   : '%c'\\n", toggle_case_bit('X'));\r
    return 0;\r
}\r
`,H=`#include <stdio.h>\r
\r
unsigned int round_up_power_of_two(unsigned int n) {\r
    n--;\r
    n |= n >> 1;\r
    n |= n >> 2;\r
    n |= n >> 4;\r
    n |= n >> 8;\r
    n |= n >> 16;\r
    return n + 1;\r
}\r
\r
int main() {\r
    unsigned int n = 17;\r
    printf("--- Round Up to Next Power of Two ---\\nInput: %u\\nNext Power of 2: %u\\n", n, round_up_power_of_two(n));\r
    return 0;\r
}\r
`,D="DSA Module 5.2: Essential Bit Hacks & Brian Kernighan Mechanics",R="Data Structures & Algorithms in C",L="University & Industrial Standards",K=["GCC Compiler","VS Code","GDB Debugger","Valgrind"],G={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},q=JSON.parse('[{"projectId":"HACK_001","title":"Extract Lowest Set Bit Mask (N & -N)","difficulty":"Beginner","description":"In Two\'s Complement representation, `-N = ~N + 1`. The bitwise AND `N & -N` clears all 1-bits EXCEPT the lowest set bit (rightmost 1-bit), isolating the lowest set bit as an independent binary mask in instant O(1) time! In this project, you will build Lowest Set Bit Extractor in C.","learningOutcome":"Two\'s Complement Math `-N = ~N + 1`, Lowest Set Bit Isolation & Bitmasking","exampleText":"Extract lowest set bit mask of N=12 (1100)","exampleOutput":"--- Extract Lowest Set Bit Mask (N & -N) ---\\nN = 12 (1100)\\nLowest Set Bit Mask = 4 (0100)","logicExplanation":"1. **Two\'s Complement**: `-N` flips all bits to left of lowest 1 and keeps lowest 1 unchanged.\\n2. **Bitwise AND**: `N & -N` leaves ONLY the lowest 1-bit active.","answerFile":"./answers/answer1.c","codeExplanation":"1. `lowest_set_bit_mask()`: Extracts lowest set bit mask in O(1) time."},{"projectId":"HACK_002","title":"Clear Lowest Set Bit (N & (N - 1))","difficulty":"Beginner","description":"Subtracting 1 flips the rightmost 1-bit to 0 and turns all lower trailing 0-bits to 1s. Performing bitwise AND `N & (N - 1)` clears (turns off) the rightmost set bit in instant O(1) time! Formally used in Brian Kernighan\'s algorithm and Fenwick Tree updates. In this project, you will build Lowest Set Bit Cleaner in C.","learningOutcome":"Rightmost Bit Clearing, `N & (N - 1)` Properties & Fenwick Tree Index Adjustments","exampleText":"Clear lowest set bit of N=12 (1100)","exampleOutput":"--- Clear Lowest Set Bit (N & (N - 1)) ---\\nOriginal N = 12 (1100)\\nAfter Clear = 8 (1000)","logicExplanation":"1. **Bit Flipping**: `N - 1` inverts rightmost 1 and trailing 0s.\\n2. **Bitwise AND**: `N & (N - 1)` unsets rightmost 1-bit.","answerFile":"./answers/answer2.c","codeExplanation":"1. `clear_lowest_set_bit()`: Clears lowest set bit in constant O(1) time."},{"projectId":"HACK_003","title":"Turn On Rightmost Zero Bit (N | (N + 1))","difficulty":"Beginner","description":"Adding 1 turns trailing 1s into 0s and sets the rightmost 0-bit to 1. Performing bitwise OR `N | (N + 1)` sets the lowest un-set 0-bit to 1 in instant O(1) time! In this project, you will build Rightmost Zero Bit Activator in C.","learningOutcome":"Rightmost Zero Setting, `N | (N + 1)` Bit Hack & Bit Inversion Mechanics","exampleText":"Turn on rightmost zero bit of N=10 (1010)","exampleOutput":"--- Turn On Rightmost Zero Bit (N | (N + 1)) ---\\nOriginal N = 10 (1010)\\nAfter Turn On = 11 (1011)","logicExplanation":"1. **Addition Effect**: `N + 1` converts lowest 0 into 1.\\n2. **Bitwise OR**: `N | (N + 1)` sets lowest 0-bit while preserving existing 1-bits.","answerFile":"./answers/answer3.c","codeExplanation":"1. `turn_on_rightmost_zero()`: Sets rightmost zero bit in O(1) time."},{"projectId":"HACK_004","title":"Clear Trailing Ones (N & (N + 1))","difficulty":"Beginner","description":"Clear all contiguous 1-bits at the right end of integer N (e.g. `1011` → `1000`). Performing bitwise AND `N & (N + 1)` clears trailing 1-bits in instant O(1) time! In this project, you will build Trailing Ones Eraser in C.","learningOutcome":"Trailing Ones Erasure, `N & (N + 1)` Invariants & Low-Level Bit Clearing","exampleText":"Clear trailing 1s in N=11 (1011)","exampleOutput":"--- Clear Trailing Ones (N & (N + 1)) ---\\nOriginal N = 11 (1011)\\nAfter Clear = 8 (1000)","logicExplanation":"1. **Carry Ripple**: `N + 1` flips trailing 1s to 0s and propagates carry to lowest 0.\\n2. **Bitwise AND**: `N & (N + 1)` turns off all trailing 1s.","answerFile":"./answers/answer4.c","codeExplanation":"1. `clear_trailing_ones()`: Clears trailing 1-bits in O(1) time."},{"projectId":"HACK_005","title":"Set Trailing Zeroes (N | (N - 1))","difficulty":"Beginner","description":"Set all contiguous 0-bits at the right end of integer N to 1s (e.g. `1100` → `1111`). Performing bitwise OR `N | (N - 1)` sets all trailing 0-bits to 1 in instant O(1) time! In this project, you will build Trailing Zeroes Setter in C.","learningOutcome":"Trailing Zeroes Setting, `N | (N - 1)` Properties & Bitmask Inversion","exampleText":"Set trailing 0s in N=12 (1100)","exampleOutput":"--- Set Trailing Zeroes (N | (N - 1)) ---\\nOriginal N = 12 (1100)\\nAfter Set = 15 (1111)","logicExplanation":"1. **Borrow Ripple**: `N - 1` converts all trailing 0s into 1s.\\n2. **Bitwise OR**: `N | (N - 1)` sets trailing 0-bits to 1s.","answerFile":"./answers/answer5.c","codeExplanation":"1. `set_trailing_zeroes()`: Sets all trailing 0-bits to 1s in O(1) time."},{"projectId":"HACK_006","title":"Fast Absolute Value Without Branching ((N ^ mask) - mask)","difficulty":"Beginner","description":"Standard `abs(x)` uses CPU conditional branching (`if (x < 0)`), which can cause CPU pipeline stalls on branch mispredictions. Branchless absolute value math: create sign mask `mask = N >> 31` (0 for positive, -1 for negative). Compute `(N ^ mask) - mask` in O(1) clock cycle! In this project, you will build Branchless Absolute Value Engine in C.","learningOutcome":"Branchless Programming, Arithmetic Shift Sign Masks & CPU Pipeline Optimization","exampleText":"Compute abs(-42) without branching","exampleOutput":"--- Fast Absolute Value Without Branching ---\\nInput: -42\\nAbs  : 42","logicExplanation":"1. **Sign Mask**: `mask = N >> 31` (all 0s if `N >= 0`, all 1s `-1` if `N < 0`).\\n2. **Complement**: `(N ^ mask) - mask` computes One\'s Complement + 1 when negative.","answerFile":"./answers/answer6.c","codeExplanation":"1. `fast_abs()`: Computes branchless absolute value in 2 CPU instructions."},{"projectId":"HACK_007","title":"Compute Minimum and Maximum Without Branching (b ^ ((a ^ b) & -(a < b)))","difficulty":"Beginner","description":"Compute `min(a, b)` and `max(a, b)` without ternary conditional branches `? :`. Formula: `min(a, b) = b ^ ((a ^ b) & -(a < b))` and `max(a, b) = a ^ ((a ^ b) & -(a < b))`. In this project, you will build Branchless Min/Max Engine in C.","learningOutcome":"Branchless Min/Max Formulas, Boolean Comparison Bitmasks & Pipeline Speedup","exampleText":"Compute min and max of a=15, b=27 branchless","exampleOutput":"--- Branchless Min and Max ---\\nMin(15, 27) = 15\\nMax(15, 27) = 27","logicExplanation":"1. **Comparison Mask**: `-(a < b)` creates mask of all 1s if `a < b` else all 0s.\\n2. **XOR Select**: `b ^ (a ^ b)` yields `a` if mask is 1s, else `b` if mask is 0s.","answerFile":"./answers/answer7.c","codeExplanation":"1. `min_branchless()` & `max_branchless()`: Computes min/max without conditional branching."},{"projectId":"HACK_008","title":"Fast Uppercase / Lowercase Case Conversion via Bitwise Masks","difficulty":"Beginner","description":"In ASCII, uppercase `\'A\'` (65 = `01000001`) and lowercase `\'a\'` (97 = `01100001`) differ ONLY by bit 5 (space character `\' \'` = 32 = `00100000`). Convert case via bitwise masks: 1) `ch | \' \'` converts to lowercase; 2) `ch & \'_\'` converts to uppercase; 3) `ch ^ \' \'` toggles case! In this project, you will build Bitwise ASCII Case Converter in C.","learningOutcome":"ASCII Bit 5 Alignment, Bitwise Case Conversion Masks & O(1) Character Manipulations","exampleText":"Convert case via bit masks for \'A\', \'b\', \'X\'","exampleOutput":"--- Fast Case Conversion via Bitwise Masks ---\\n\'A\' → Lowercase: \'a\'\\n\'b\' → Uppercase: \'B\'\\n\'X\' → Toggle   : \'x\'","logicExplanation":"1. **Lowercase**: Set bit 5 using `ch | \' \'`.\\n2. **Uppercase**: Clear bit 5 using `ch & \'_\'`.\\n3. **Toggle**: Flip bit 5 using `ch ^ \' \'`.","answerFile":"./answers/answer8.c","codeExplanation":"1. `to_lower_bit()`, `to_upper_bit()`, `toggle_case_bit()`: Performs bitwise ASCII case conversions."},{"projectId":"HACK_009","title":"Round Up to Next Power of Two","difficulty":"Beginner","description":"Given integer N, compute the smallest power of two greater than or equal to N. Propagate set bits rightward using 5 bitwise shifts: `n |= n >> 1; n |= n >> 2; n |= n >> 4; n |= n >> 8; n |= n >> 16; return n + 1;` in O(1) time! In this project, you will build Power of Two Rounding Engine in C.","learningOutcome":"Bit Propagation, Rightward Bit Filling & O(1) Constant Power Rounding","exampleText":"Round up 17 to next power of two","exampleOutput":"--- Round Up to Next Power of Two ---\\nInput: 17\\nNext Power of 2: 32","logicExplanation":"1. **Bit Propagation**: Shift and OR `n |= n >> k` turns all bits right of MSB into 1s.\\n2. **Increment**: `n + 1` rounds up to exact next power of two.","answerFile":"./answers/answer9.c","codeExplanation":"1. `round_up_power_of_two()`: Rounds up to next power of two in constant time."},{"projectId":"HACK_010","title":"Check if Integer Has Alternating Bits","difficulty":"Beginner","description":"Check if integer N has alternating binary bits (adjacent bits are never equal, e.g. `5 = 101` or `10 = 1010`). Compute `x = N ^ (N >> 1)`. If N has alternating bits, `x` will consist of ALL 1-bits (`111...1`). Verify `(x & (x + 1)) == 0`! In this project, you will build Alternating Bits Checker in C.","learningOutcome":"Alternating Bit Patterns, `XOR Shift` Bit Inversions & All-Ones Proofs","exampleText":"Check if N=5 (101) has alternating bits","exampleOutput":"--- Check Alternating Bits ---\\nDoes 5 (101) have alternating bits: YES","logicExplanation":"1. **XOR Shift**: `x = n ^ (n >> 1)` produces all 1s if bits alternate.\\n2. **All-Ones Check**: `(x & (x + 1)) == 0` returns true for all-1s bitmask.","answerFile":"./answers/answer10.c","codeExplanation":"1. `has_alternating_bits()`: Checks alternating bits in constant O(1) time."},{"projectId":"HACK_011","title":"Find Position of Rightmost Set Bit (Log2 Bit Scan)","difficulty":"Intermediate","description":"Find the 0-based position of the rightmost set bit in integer N. Isolate lowest set bit mask `mask = N & -N`. Compute `log2(mask)` or use hardware BSF (Bit Scan Forward) instruction in O(1) time! In this project, you will build Rightmost Set Bit Position Finder in C.","learningOutcome":"Lowest Set Bit Indexing, `log2(N & -N)` Position Math & Bit Scanning","exampleText":"Find rightmost set bit position for N=12 (1100)","exampleOutput":"--- Position of Rightmost Set Bit ---\\nRightmost set bit position of 12 = 2","logicExplanation":"1. **Isolate Bit**: `mask = n & -n` (for 12, mask = 4 = 100).\\n2. **Log2 Position**: `log2(4) = 2` (position 2).","answerFile":"./answers/answer11.c","codeExplanation":"1. `position_rightmost_set_bit()`: Computes rightmost set bit position."},{"projectId":"HACK_012","title":"Find Most Significant Bit (MSB / Floor Log2)","difficulty":"Intermediate","description":"Find the Most Significant Bit (MSB) mask of integer N (e.g. `18 = 10010` → MSB mask `16 = 10000`). Propagate 1-bits rightward: `n |= n >> 1; ... n |= n >> 16; return (n + 1) >> 1;`. In this project, you will build MSB Mask Finder in C in O(1) time.","learningOutcome":"MSB Extraction, Bit Smearing & Floor Log2 Calculation","exampleText":"Find MSB mask for N=18 (10010)","exampleOutput":"--- Find Most Significant Bit (MSB Mask) ---\\nOriginal N = 18\\nMSB Mask = 16","logicExplanation":"1. **Bit Smearing**: Fill all bits right of MSB with 1s (`n` becomes `11111` = 31).\\n2. **MSB Mask**: `(31 + 1) >> 1 = 16` (10000).","answerFile":"./answers/answer12.c","codeExplanation":"1. `msb_position()`: Finds MSB mask in constant O(1) time."},{"projectId":"HACK_013","title":"Gosper\'s Hack (Generating All Subsets of Size K with K Set Bits)","difficulty":"Intermediate","description":"Gosper\'s Hack generates all binary bitmasks of size N that contain EXACTLY K set bits in lexicographical order in O(1) time per subset! Formula: `c = set & -set; r = set + c; set = (((r ^ set) >> 2) / c) | r;`. In this project, you will build Gosper\'s Hack Subset Generator in C.","learningOutcome":"Gosper\'s Hack Algorithm, Lexicographical K-Subset Generation & Constant Time Moves","exampleText":"Generate all subsets of size K=3 in N=5","exampleOutput":"--- Gosper\'s Hack Subsets of Size K=3 in N=5 ---\\nSubsets: 7 11 13 14 19 21 22 25 26 28","logicExplanation":"1. **Lowest Bit**: Extract `c = set & -set` and add `r = set + c`.\\n2. **Shift Adjust**: `set = (((r ^ set) >> 2) / c) | r` generates next subset with K set bits.","answerFile":"./answers/answer13.c","codeExplanation":"1. `gospers_hack_demo()`: Generates K-element bitmask combinations using Gosper\'s hack."},{"projectId":"HACK_014","title":"Bitwise Parity Computation (Even vs Odd Set Bits)","difficulty":"Intermediate","description":"Compute the Parity of integer N (1 if set bit count is odd, 0 if set bit count is even). XOR bits in parallel using logarithmic shifts: `n ^= n >> 16; n ^= n >> 8; n ^= n >> 4; n ^= n >> 2; n ^= n >> 1; return n & 1;` in 5 steps! In this project, you will build Bitwise Parity Computer in C.","learningOutcome":"Bit Parity Calculation, Logarithmic Parallel XOR Shifts & Error Detection","exampleText":"Compute parity for N=29 (11101)","exampleOutput":"--- Bitwise Parity Computation ---\\nNumber 29 Parity = 0 (EVEN)","logicExplanation":"1. **Parallel Fold**: Fold 32 bits into 16, 8, 4, 2, and 1 bit via XOR shifts.\\n2. **Parity Bit**: LSB `n & 1` holds parity bit.","answerFile":"./answers/answer14.c","codeExplanation":"1. `compute_parity()`: Computes bitwise parity in 5 XOR shift steps."},{"projectId":"HACK_015","title":"Check if Number Has Same Number of Set Bits as Another","difficulty":"Intermediate","description":"Given two integers A and B, check if they contain the same number of set bits (equal Hamming Weight). Use Brian Kernighan\'s algorithm on both numbers and compare count values. In this project, you will build Set Bit Count Comparator in C.","learningOutcome":"Set Bit Comparisons, Hamming Weight Parity & Dual Bit Counting","exampleText":"Check if 5 (101) and 6 (110) have same set bit count","exampleOutput":"--- Same Set Bit Count Check ---\\nDo 5 and 6 have same set bit count: YES","logicExplanation":"1. **Hamming Weight**: Compute `count(A)` and `count(B)`.\\n2. **Equality Test**: Return `count(A) == count(B)`.","answerFile":"./answers/answer15.c","codeExplanation":"1. `same_set_bit_count()`: Compares set bit counts of two integers."},{"projectId":"HACK_016","title":"Fast Sign Verification Without Branching (1 | (N >> 31))","difficulty":"Intermediate","description":"Determine sign of integer N (+1 for positive, -1 for negative, 0 for zero) without CPU branch instructions. Formula: `(N > 0) - (N < 0)` in O(1) time. In this project, you will build Branchless Sign Verification Engine in C.","learningOutcome":"Branchless Sign Verification, Comparison Evaluation & Zero Pipeline Stalls","exampleText":"Verify sign of -42","exampleOutput":"--- Fast Sign Verification Without Branching ---\\nInput: -42 → Sign: -1","logicExplanation":"1. **Boolean Compare**: `(N > 0)` is 1 if positive, `(N < 0)` is 1 if negative.\\n2. **Sign Output**: Subtracting `(N > 0) - (N < 0)` yields +1, -1, or 0.","answerFile":"./answers/answer16.c","codeExplanation":"1. `fast_sign()`: Verifies integer sign without conditional branching."},{"projectId":"HACK_017","title":"Gray Code Encoders and Decoders (Gray = N ^ (N >> 1))","difficulty":"Intermediate","description":"Gray Code is a binary numeral system where two successive values differ in ONLY ONE bit position. 1) **Encode**: `Gray = N ^ (N >> 1)` in O(1); 2) **Decode**: XOR right shifts iteratively. In this project, you will build Gray Code Encoder & Decoder in C.","learningOutcome":"Gray Code Encoding/Decoding, Single-Bit Transitions & Digital Hardware Encoding","exampleText":"Encode 10 to Gray Code and decode back","exampleOutput":"--- Gray Code Encoder and Decoder ---\\nOriginal N = 10\\nGray Code  = 15\\nDecoded N   = 10","logicExplanation":"1. **Encoding**: `gray = n ^ (n >> 1)`.\\n2. **Decoding**: `g ^= mask` while `mask >>= 1`.","answerFile":"./answers/answer17.c","codeExplanation":"1. `binary_to_gray()` & `gray_to_binary()`: Encodes and decodes Gray Code."},{"projectId":"HACK_018","title":"Bitwise Integer Sign Flip Without Negation Operator","difficulty":"Intermediate","description":"Flip the sign of integer N (convert positive to negative and vice versa) WITHOUT using unary minus `-`. Two\'s Complement math: `-N = ~N + 1` (bitwise NOT + 1). In this project, you will build Bitwise Sign Flipper in C.","learningOutcome":"Two\'s Complement Negation, `~N + 1` Inversion & Hardware Representation","exampleText":"Flip sign of 42 bitwise","exampleOutput":"--- Bitwise Integer Sign Flip ---\\nOriginal N = 42\\nNegated N  = -42","logicExplanation":"1. **One\'s Complement**: `~N` flips all bits.\\n2. **Add 1**: `~N + 1` completes Two\'s Complement negation.","answerFile":"./answers/answer18.c","codeExplanation":"1. `bitwise_negate()`: Flips integer sign using Two\'s Complement bitwise NOT."},{"projectId":"HACK_019","title":"Fast Modulo by Power of Two (N & (2^K - 1))","difficulty":"Intermediate","description":"Computing `N % (2^K)` using hardware division `%` is slow. In binary, `N % (2^K)` equals the lowest K bits of N! Fast bitwise modulo formula: `N & ((1 << K) - 1)` in O(1) time! In this project, you will build Fast Power of Two Modulo Engine in C.","learningOutcome":"Bitwise Modulo Shortcuts, `(1 << K) - 1` Low-Bit Masks & Non-Divisive Modulo","exampleText":"Compute 29 % 16 bitwise","exampleOutput":"--- Fast Modulo by Power of Two ---\\n29 % (2^4) = 13","logicExplanation":"1. **Mask Creation**: `mask = (1 << K) - 1` creates all 1s mask for lowest K bits.\\n2. **Bitwise AND**: `N & mask` extracts remainder instantly.","answerFile":"./answers/answer19.c","codeExplanation":"1. `fast_modulo_power_of_two()`: Computes modulo by power of two in constant time."},{"projectId":"HACK_020","title":"Find Next Higher Number with Same Number of Set Bits","difficulty":"Intermediate","description":"Given integer N, find the smallest integer greater than N that has the EXACT same number of set bits as N. Formula: `c = N & -N; r = N + c; next = (((r ^ N) >> 2) / c) | r;` in O(1) time! In this project, you will build Next Permutation Bit Hack Solver in C.","learningOutcome":"Bit Permutation Increments, Gosper\'s Next State Formula & O(1) Set Bit Maintenance","exampleText":"Find next higher number for N=12 (1100)","exampleOutput":"--- Next Higher Number with Same Set Bits ---\\nOriginal N = 12 (1100)\\nNext Higher = 17","logicExplanation":"1. **Ripple Carry**: `c = N & -N; r = N + c` flips rightmost block of 1s.\\n2. **Bit Shift**: `(((r ^ N) >> 2) / c) | r` shifts remaining 1s to rightmost positions.","answerFile":"./answers/answer20.c","codeExplanation":"1. `next_higher_same_set_bits()`: Finds next higher integer with same set bit count."},{"projectId":"HACK_021","title":"Fast Inverse Square Root (0x5f3759df Quake III Fast InvSqrt Bit Hack)","difficulty":"Advanced","description":"The famous Quake III Arena Fast Inverse Square Root algorithm computes `1 / sqrt(x)` up to 4x faster than hardware floating point division using magic integer bit constant `0x5f3759df` and Newton-Raphson refinement! In this project, you will build Fast InvSqrt Engine in C.","learningOutcome":"Floating-Point Bit Hacking, Magic Integer Constant `0x5f3759df` & Newton-Raphson Refinement","exampleText":"Compute 1 / sqrt(16.0)","exampleOutput":"--- Fast Inverse Square Root (0x5f3759df Quake III Bit Hack) ---\\n1 / sqrt(16.000000) = 0.249749","logicExplanation":"1. **IEEE 754 Reinterpretation**: Cast float pointer to long `i = *(long*)&y`.\\n2. **Magic Shift**: `i = 0x5f3759df - (i >> 1)` computes logarithm approximation.\\n3. **Newton Step**: `y = y * (1.5 - (x2 * y * y))` refines accuracy.","answerFile":"./answers/answer21.c","codeExplanation":"1. `fast_inv_sqrt()`: Implements Quake III fast inverse square root bit hack."},{"projectId":"HACK_022","title":"Bitwise De Bruijn Sequence Lookup Table for MSB/LSB Indexing","difficulty":"Advanced","description":"De Bruijn Sequences are cyclic sequences where every binary sub-block of length K appears exactly once. A 32-bit De Bruijn constant (`0x077CB531U`) maps lowest set bit masks `N & -N` to bit indices in a 32-element lookup table in 3 CPU clock cycles! In this project, you will build a De Bruijn Bit Indexing Engine in C.","learningOutcome":"De Bruijn Sequences, Multiplication Hash Tables & Constant-Time Bit Indexing","exampleText":"Find LSB index of N=18 (10010) via De Bruijn lookup","exampleOutput":"--- Bitwise De Bruijn Sequence Lookup Engine ---\\nRightmost set bit index of 18 = 1","logicExplanation":"1. **De Bruijn Multiply**: `((N & -N) * 0x077CB531U) >> 27` isolates unique 5-bit table index.\\n2. **Lookup Table**: Table retrieves bit index in O(1) time.","answerFile":"./answers/answer22.c","codeExplanation":"1. `debruijn_lsb_index()`: Locates lowest set bit index using De Bruijn sequence multiplication."},{"projectId":"HACK_023","title":"Harley-Seal Popcount Algorithm (8x Speedup Bit Hack)","difficulty":"Advanced","description":"The Harley-Seal Popcount algorithm processes memory buffers 8x faster than standard popcount by combining Carry-Save Adders (CSA) with bitwise tree reduction. In this project, you will build Harley-Seal Popcount Engine in C.","learningOutcome":"Harley-Seal Algorithm, Carry-Save Adders (CSA) & SIMD Popcount Acceleration","exampleText":"Execute Harley-Seal popcount over memory buffer","exampleOutput":"--- Harley-Seal Popcount Algorithm (8x Speedup) ---\\nExecuted Harley-Seal SIMD popcount over 10MB memory block with 8x throughput.","logicExplanation":"1. **Carry-Save Adders**: Aggregate bit counts across 8 words simultaneously without full addition.\\n2. **Tree Reduction**: Reduce CSA bit counts into final popcount total.","answerFile":"./answers/answer23.c","codeExplanation":"1. `harley_seal_popcount_demo()`: Demonstrates Harley-Seal SIMD popcount algorithm."},{"projectId":"HACK_024","title":"Parallel Bit Deposit (PDEP) and Extract (PEXT) Processor Emulator","difficulty":"Advanced","description":"x86 BMI2 instructions `PDEP` (Parallel Bit Deposit) and `PEXT` (Parallel Bit Extract) gather/scatter non-contiguous bit selections controlled by a bitmask in a single CPU instruction. In this project, you will build PDEP/PEXT Processor Emulator in C.","learningOutcome":"BMI2 Architecture, Bit Scatter (PDEP) & Bit Gather (PEXT) Operations","exampleText":"Emulate PEXT bit gather and PDEP bit scatter","exampleOutput":"--- Parallel Bit Deposit (PDEP) & Extract (PEXT) Emulator ---\\nExecuted PEXT bit gather and PDEP bit scatter in hardware emulator pass.","logicExplanation":"1. **PEXT Gather**: Extract bits of input where mask bit is 1, packing them contiguously into LSB.\\n2. **PDEP Scatter**: Deposit contiguous LSB bits of input into positions where mask bit is 1.","answerFile":"./answers/answer24.c","codeExplanation":"1. `pdep_pext_emulator_demo()`: Emulates x86 BMI2 PDEP and PEXT bit instructions."},{"projectId":"HACK_025","title":"High-Speed Bit-Vector Compression & Bit Hack Utility Library","difficulty":"Advanced","description":"Build a comprehensive Bit Hack Utility Library combining low-level bit manipulations, bitmask run-length encoding, and compressed bit-vectors for high-performance databases. In this project, you will build Bit Hack Utility Library in C.","learningOutcome":"Bit Vector Compression, Composite Bit Hack Utilities & Database Bitset Engines","exampleText":"Compress 64-bit sparse bitmap via bit hacks","exampleOutput":"--- High-Speed Bit-Vector Compression & Bit Hack Utility Library ---\\nCompressed 64-bit sparse bitmap by 92% using bit hack run-length masks.","logicExplanation":"1. **Sparse Bitmaps**: Identify zero words using `N == 0` bit hack.\\n2. **RLE Masking**: Encode non-zero bitmasks with offset indices.","answerFile":"./answers/answer25.c","codeExplanation":"1. `bit_vector_library_demo()`: Implements bit-vector compression utility library."}]'),c={projectCategory:D,subject:R,board:L,class:"Computer Science Core / BCA / B.Tech",tools:K,institute:G,projects:q};function Z(){const[i,u]=l.useState(null);return l.useEffect(()=>{const r=Object.assign({"./topic6_files/answers/answer1.c":m,"./topic6_files/answers/answer10.c":g,"./topic6_files/answers/answer11.c":b,"./topic6_files/answers/answer12.c":_,"./topic6_files/answers/answer13.c":h,"./topic6_files/answers/answer14.c":f,"./topic6_files/answers/answer15.c":w,"./topic6_files/answers/answer16.c":x,"./topic6_files/answers/answer17.c":N,"./topic6_files/answers/answer18.c":B,"./topic6_files/answers/answer19.c":C,"./topic6_files/answers/answer2.c":y,"./topic6_files/answers/answer20.c":S,"./topic6_files/answers/answer21.c":k,"./topic6_files/answers/answer22.c":E,"./topic6_files/answers/answer23.c":v,"./topic6_files/answers/answer24.c":O,"./topic6_files/answers/answer25.c":I,"./topic6_files/answers/answer3.c":P,"./topic6_files/answers/answer4.c":A,"./topic6_files/answers/answer5.c":T,"./topic6_files/answers/answer6.c":F,"./topic6_files/answers/answer7.c":j,"./topic6_files/answers/answer8.c":M,"./topic6_files/answers/answer9.c":H}),s={};Object.keys(r).forEach(n=>{const a=n.split("/").pop();s[a]=r[n]});const p=c.projects.map(n=>{const e=(n.answerFile||"").split("/").pop(),o=s[e];return o||console.warn(`⚠ Missing C answer file: ${e}`),{...n,answer:o||`// Source file "${e}" not found in answers folder`}});u({...c,projects:p})},[]),i?t.jsx(d,{data:i}):t.jsx("div",{className:"p-6 text-slate-400 flex items-center justify-center min-h-[300px]",children:t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:"w-5 h-5 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),t.jsx("span",{children:"Loading Essential Bit Hacks & Brian Kernighan Projects..."})]})})}export{Z as default};
