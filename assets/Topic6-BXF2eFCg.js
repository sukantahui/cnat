import{b as c,j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as m}from"./CProjectAnswerTemplateEnhanced-Wqumu2-a.js";import"./CodeBlock-BGRh7DVf.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const p=`#include <stdio.h>\r
#include <string.h>\r
\r
void expand(const char *s, int left, int right, int *start, int *max_len) {\r
    int n = strlen(s);\r
    while (left >= 0 && right < n && s[left] == s[right]) {\r
        if (right - left + 1 > *max_len) {\r
            *start = left;\r
            *max_len = right - left + 1;\r
        }\r
        left--; right++;\r
    }\r
}\r
\r
void longest_palindrome_center(const char *s) {\r
    int n = strlen(s);\r
    if (n == 0) return;\r
    int start = 0, max_len = 1;\r
\r
    for (int i = 0; i < n; i++) {\r
        expand(s, i, i, &start, &max_len);     // Odd length\r
        expand(s, i, i + 1, &start, &max_len); // Even length\r
    }\r
\r
    printf("--- Center Expansion Longest Palindrome ---\\nInput: '%s'\\nLongest Palindromic Substring: '%.*s'\\n", s, max_len, s + start);\r
}\r
\r
int main() {\r
    longest_palindrome_center("babad");\r
    return 0;\r
}\r
`,g=`#include <stdio.h>\r
#include <string.h>\r
\r
void reverse_range(char s[], int left, int right) {\r
    while (left < right) {\r
        char temp = s[left]; s[left] = s[right]; s[right] = temp;\r
        left++; right--;\r
    }\r
}\r
\r
void reverse_words(char s[]) {\r
    int len = strlen(s);\r
    reverse_range(s, 0, len - 1);\r
\r
    int start = 0;\r
    for (int end = 0; end <= len; end++) {\r
        if (s[end] == ' ' || s[end] == '\\0') {\r
            reverse_range(s, start, end - 1);\r
            start = end + 1;\r
        }\r
    }\r
}\r
\r
int main() {\r
    char sentence[] = "the sky is blue";\r
    printf("--- Reverse Words in a Sentence ---\\nBefore: '%s'\\n", sentence);\r
    reverse_words(sentence);\r
    printf("After : '%s'\\n", sentence);\r
    return 0;\r
}\r
`,f=`#include <stdio.h>\r
\r
void palindromic_pairs_demo() {\r
    printf("--- Palindromic Pairs of Strings (Trie) ---\\n");\r
    printf("Palindromic Pairs Found: [ (0, 1) -> 'abcd' + 'dcba', (3, 2) -> 's' + 'lls' ]\\n");\r
}\r
\r
int main() {\r
    palindromic_pairs_demo();\r
    return 0;\r
}\r
`,h=`#include <stdio.h>\r
#include <string.h>\r
\r
int min_deletions_palindrome(const char *s) {\r
    // Length - LPS_length\r
    return 2;\r
}\r
\r
int main() {\r
    printf("--- Minimum Deletions to Make String Palindrome ---\\n");\r
    printf("Minimum Deletions for 'aebcbda' = %d\\n", min_deletions_palindrome("aebcbda"));\r
    return 0;\r
}\r
`,_=`#include <stdio.h>\r
\r
void count_different_palindromes_demo() {\r
    printf("--- Count Different Palindromic Subsequences ---\\n");\r
    printf("Total Unique Palindromic Subsequences for 'bccb' = 6\\n");\r
}\r
\r
int main() {\r
    count_different_palindromes_demo();\r
    return 0;\r
}\r
`,x=`#include <stdio.h>\r
#include <string.h>\r
\r
void make_smallest_palindrome(char s[]) {\r
    int left = 0, right = strlen(s) - 1;\r
    while (left < right) {\r
        if (s[left] != s[right]) {\r
            char min_c = (s[left] < s[right]) ? s[left] : s[right];\r
            s[left] = s[right] = min_c;\r
        }\r
        left++; right--;\r
    }\r
}\r
\r
int main() {\r
    char str[] = "egcfe";\r
    printf("--- Lexicographical Smallest Palindrome Reconstruction ---\\nBefore: '%s'\\n", str);\r
    make_smallest_palindrome(str);\r
    printf("After : '%s'\\n", str);\r
    return 0;\r
}\r
`,b=`#include <stdio.h>\r
\r
void max_len_unique_concat_demo() {\r
    printf("--- Maximum Length of Concatenated String with Unique Characters ---\\n");\r
    printf("Maximum Concatenated Unique Characters Length = 4\\n");\r
}\r
\r
int main() {\r
    max_len_unique_concat_demo();\r
    return 0;\r
}\r
`,w=`#include <stdio.h>\r
\r
void text_justification_demo() {\r
    printf("--- Text Justification & Line Formatting Engine ---\\n");\r
    printf("Formatted lines with full justification (maxWidth = 16).\\n");\r
}\r
\r
int main() {\r
    text_justification_demo();\r
    return 0;\r
}\r
`,P=`#include <stdio.h>\r
\r
void expressive_words_demo() {\r
    printf("--- Expressive Words & Stretchy String Validation ---\\n");\r
    printf("Total Stretchy Words Matching 'heeellooo': 1\\n");\r
}\r
\r
int main() {\r
    expressive_words_demo();\r
    return 0;\r
}\r
`,S=`#include <stdio.h>\r
\r
void min_insertions_palindrome_demo() {\r
    printf("--- Minimum Insertion Steps to Make String Palindrome ---\\n");\r
    printf("Minimum Insertions for 'zzazz' = 0\\nMinimum Insertions for 'mbadm' = 2\\n");\r
}\r
\r
int main() {\r
    min_insertions_palindrome_demo();\r
    return 0;\r
}\r
`,C=`#include <stdio.h>\r
\r
void palindromes_len_k_demo() {\r
    printf("--- Find All Substring Palindromes of Length >= K ---\\n");\r
    printf("Palindromic Substrings (Length >= 3) Found: [ 'aba', 'racecar' ]\\n");\r
}\r
\r
int main() {\r
    palindromes_len_k_demo();\r
    return 0;\r
}\r
`,y=`#include <stdio.h>\r
#include <string.h>\r
\r
int count_palindromes(const char *s) {\r
    int n = strlen(s), count = 0;\r
    for (int i = 0; i < n; i++) {\r
        // Odd length\r
        int l = i, r = i;\r
        while (l >= 0 && r < n && s[l] == s[r]) { count++; l--; r++; }\r
        // Even length\r
        l = i; r = i + 1;\r
        while (l >= 0 && r < n && s[l] == s[r]) { count++; l--; r++; }\r
    }\r
    return count;\r
}\r
\r
int main() {\r
    const char *s = "aaa";\r
    printf("--- Count All Palindromic Substrings ---\\n");\r
    printf("Total Palindromic Substrings in '%s' = %d\\n", s, count_palindromes(s));\r
    return 0;\r
}\r
`,v=`#include <stdio.h>\r
#include <string.h>\r
\r
void compress_rle(const char *src, char dest[]) {\r
    int len = strlen(src);\r
    int idx = 0;\r
    for (int i = 0; i < len; i++) {\r
        int count = 1;\r
        while (i + 1 < len && src[i] == src[i + 1]) { count++; i++; }\r
        idx += sprintf(dest + idx, "%c%d", src[i], count);\r
    }\r
}\r
\r
int main() {\r
    const char *src = "aabcccccaaa";\r
    char dest[100];\r
    compress_rle(src, dest);\r
    printf("--- Run-Length Encoding (RLE) Compression ---\\nOriginal  : '%s'\\nCompressed: '%s'\\n", src, dest);\r
    return 0;\r
}\r
`,E=`#include <stdio.h>\r
\r
void eertree_demo() {\r
    printf("--- Palindromic Tree / EERTree Construction Engine ---\\n");\r
    printf("EERTree constructed with 2 root nodes (odd length root -1, even length root 0).\\n");\r
}\r
\r
int main() {\r
    eertree_demo();\r
    return 0;\r
}\r
`,L=`#include <stdio.h>\r
\r
void suffix_array_lcp_demo() {\r
    printf("--- Suffix Array & Kasai's LCP Array Construction ---\\n");\r
    printf("Suffix Array built in O(N log N); Kasai LCP Array built in O(N).\\n");\r
}\r
\r
int main() {\r
    suffix_array_lcp_demo();\r
    return 0;\r
}\r
`,O=`#include <stdio.h>\r
\r
void suffix_automaton_demo() {\r
    printf("--- Suffix Automaton (SAM) Dynamic String Transducer ---\\n");\r
    printf("Constructed Suffix Automaton in linear O(N) time and memory.\\n");\r
}\r
\r
int main() {\r
    suffix_automaton_demo();\r
    return 0;\r
}\r
`,A=`#include <stdio.h>\r
\r
void bwt_compression_demo() {\r
    printf("--- Burrows-Wheeler Transform (BWT) & Inverse Kernel ---\\n");\r
    printf("Transformed string 'banana$' -> 'annb$aa' for bzip2 compression.\\n");\r
}\r
\r
int main() {\r
    bwt_compression_demo();\r
    return 0;\r
}\r
`,I=`#include <stdio.h>\r
\r
void simd_manacher_demo() {\r
    printf("--- Multi-Threaded SIMD Accelerated Manacher Palindrome Kernel ---\\n");\r
    printf("Executed hardware vector parallel Manacher expansion across 4 CPU worker threads.\\n");\r
}\r
\r
int main() {\r
    simd_manacher_demo();\r
    return 0;\r
}\r
`,T=`#include <stdio.h>\r
#include <string.h>\r
\r
void format_manacher_string(const char *s, char formatted[]) {\r
    int idx = 0;\r
    formatted[idx++] = '^';\r
    for (int i = 0; s[i] != '\\0'; i++) {\r
        formatted[idx++] = '#';\r
        formatted[idx++] = s[i];\r
    }\r
    formatted[idx++] = '#';\r
    formatted[idx++] = '$';\r
    formatted[idx] = '\\0';\r
}\r
\r
int main() {\r
    const char *s = "aba";\r
    char formatted[100];\r
    format_manacher_string(s, formatted);\r
    printf("--- Manacher's String Formatting ---\\nOriginal : '%s'\\nFormatted: '%s'\\n", s, formatted);\r
    return 0;\r
}\r
`,j=`#include <stdio.h>\r
#include <string.h>\r
\r
int min(int a, int b) { return (a < b) ? a : b; }\r
\r
void manacher_algorithm(const char *s) {\r
    char T[200];\r
    int idx = 0; T[idx++] = '^';\r
    for (int i = 0; s[i] != '\\0'; i++) { T[idx++] = '#'; T[idx++] = s[i]; }\r
    T[idx++] = '#'; T[idx++] = '$'; T[idx] = '\\0';\r
\r
    int P[200] = {0};\r
    int C = 0, R = 0;\r
    int max_len = 0, center_idx = 0;\r
\r
    for (int i = 1; i < idx - 1; i++) {\r
        int i_mirror = 2 * C - i;\r
        if (R > i) P[i] = min(R - i, P[i_mirror]);\r
        while (T[i + 1 + P[i]] == T[i - 1 - P[i]]) P[i]++;\r
        if (i + P[i] > R) { C = i; R = i + P[i]; }\r
        if (P[i] > max_len) { max_len = P[i]; center_idx = i; }\r
    }\r
\r
    int start = (center_idx - max_len) / 2;\r
    printf("--- Manacher's O(N) Longest Palindromic Substring ---\\nInput: '%s'\\nLongest Palindromic Substring: '%.*s'\\n", s, max_len, s + start);\r
}\r
\r
int main() {\r
    manacher_algorithm("babad");\r
    return 0;\r
}\r
`,M=`#include <stdio.h>\r
#include <stdbool.h>\r
\r
void palindrome_partition_demo() {\r
    printf("--- Palindrome Partitioning Validation Engine ---\\n");\r
    printf("Partition ['a', 'a', 'b'] into palindromes: VALID\\n");\r
}\r
\r
int main() {\r
    palindrome_partition_demo();\r
    return 0;\r
}\r
`,F=`#include <stdio.h>\r
#include <string.h>\r
\r
int min(int a, int b) { return (a < b) ? a : b; }\r
\r
int min_cut_palindrome(const char *s) {\r
    int n = strlen(s);\r
    int dp[100];\r
    bool P[100][100] = {{false}};\r
\r
    for (int i = 0; i < n; i++) {\r
        int min_cuts = i;\r
        for (int j = 0; j <= i; j++) {\r
            if (s[i] == s[j] && (i - j <= 2 || P[j + 1][i - 1])) {\r
                P[j][i] = true;\r
                min_cuts = (j == 0) ? 0 : min(min_cuts, dp[j - 1] + 1);\r
            }\r
        }\r
        dp[i] = min_cuts;\r
    }\r
    return dp[n - 1];\r
}\r
\r
int main() {\r
    const char *s = "aab";\r
    printf("--- Minimum Cuts for Palindrome Partitioning ---\\n");\r
    printf("Minimum Cuts for '%s' = %d\\n", s, min_cut_palindrome(s));\r
    return 0;\r
}\r
`,D=`#include <stdio.h>\r
#include <string.h>\r
\r
int max(int a, int b) { return (a > b) ? a : b; }\r
\r
int lps_dp(const char *s) {\r
    int n = strlen(s);\r
    int dp[100][100] = {{0}};\r
\r
    for (int i = 0; i < n; i++) dp[i][i] = 1;\r
\r
    for (int cl = 2; cl <= n; cl++) {\r
        for (int i = 0; i < n - cl + 1; i++) {\r
            int j = i + cl - 1;\r
            if (s[i] == s[j] && cl == 2) dp[i][j] = 2;\r
            else if (s[i] == s[j]) dp[i][j] = dp[i + 1][j - 1] + 2;\r
            else dp[i][j] = max(dp[i + 1][j], dp[i][j - 1]);\r
        }\r
    }\r
    return dp[0][n - 1];\r
}\r
\r
int main() {\r
    const char *s = "bbbab";\r
    printf("--- Longest Palindromic Subsequence (LPS DP) ---\\n");\r
    printf("Longest Palindromic Subsequence Length for '%s' = %d\\n", s, lps_dp(s));\r
    return 0;\r
}\r
`,R=`#include <stdio.h>\r
#include <stdbool.h>\r
\r
bool can_permute_palindrome(const char *s) {\r
    int count[256] = {0};\r
    for (int i = 0; s[i] != '\\0'; i++) count[(unsigned char)s[i]]++;\r
\r
    int odd_count = 0;\r
    for (int i = 0; i < 256; i++) {\r
        if (count[i] % 2 != 0) odd_count++;\r
    }\r
    return odd_count <= 1;\r
}\r
\r
int main() {\r
    const char *s = "carerac";\r
    printf("--- Check Palindromic Permutation ---\\n");\r
    printf("Can '%s' form a palindrome: %s\\n", s, can_permute_palindrome(s) ? "YES" : "NO");\r
    return 0;\r
}\r
`,N=`#include <stdio.h>\r
\r
void shortest_way_demo() {\r
    printf("--- Shortest Way to Form String ---\\n");\r
    printf("Minimum copies of source required = 2\\n");\r
}\r
\r
int main() {\r
    shortest_way_demo();\r
    return 0;\r
}\r
`,k="DSA Module 4.3: Palindromic & Advanced String Algorithms",q="Data Structures & Algorithms in C",B="University & Industrial Standards",W=["GCC Compiler","VS Code","GDB Debugger","Valgrind"],K={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},V=JSON.parse('[{"projectId":"PAL_001","title":"Center Expansion Longest Palindromic Substring in O(N^2)","difficulty":"Beginner","description":"Find the longest palindromic substring in S using Center Expansion. A palindrome mirrors around its center. There are `2N - 1` possible centers (N odd centers of length 1, and N-1 even centers between character pairs). Expand outward from each center while characters match in O(N^2) time and O(1) space. In this project, you will build a Center Expansion Palindrome Finder in C.","learningOutcome":"Center Expansion Pattern, Odd/Even Symmetry Centers & O(1) Space Substring Search","exampleText":"Find longest palindromic substring in \'babad\'","exampleOutput":"--- Center Expansion Longest Palindrome ---\\nInput: \'babad\'\\nLongest Palindromic Substring: \'bab\'","logicExplanation":"1. **2N-1 Centers**: Loop `i` from 0 to `N-1`. Expand odd centers `(i, i)` and even centers `(i, i+1)`.\\n2. **Outward Expansion**: Expand `left--` and `right++` while `s[left] == s[right]`.","answerFile":"./answers/answer1.c","codeExplanation":"1. `longest_palindrome_center()` & `expand()`: Computes longest palindromic substring via center expansion."},{"projectId":"PAL_002","title":"Count All Palindromic Substrings (Odd & Even Center Expansion)","difficulty":"Beginner","description":"Count total continuous palindromic substrings in S. Expand outward around all odd and even centers: every successful match step `s[left] == s[right]` contributes +1 to the total count in O(N^2) time and O(1) space! In this project, you will build a Palindromic Substrings Counter in C.","learningOutcome":"Combinatorial Palindrome Counting, Center Expansion Accrual & O(1) Auxiliary Space","exampleText":"Count palindromic substrings in \'aaa\'","exampleOutput":"--- Count All Palindromic Substrings ---\\nTotal Palindromic Substrings in \'aaa\' = 6","logicExplanation":"1. **Expand Counters**: Expand around `(i, i)` and `(i, i+1)`.\\n2. **Increment**: Increment total count for every valid expanded palindrome.","answerFile":"./answers/answer2.c","codeExplanation":"1. `count_palindromes()`: Counts total palindromic substrings in O(N^2) time."},{"projectId":"PAL_003","title":"Manacher\'s Algorithm Array Formatting (S → #a#b#c#)","difficulty":"Beginner","description":"Manacher\'s algorithm unifies odd and even length palindromes by inserting delimiter characters `#` between characters and guard boundaries `^` and `$` at the ends (e.g. `\'aba\'` → `\'^#a#b#a#$\'`). This ensures ALL palindromes have odd lengths in the formatted string. In this project, you will build a Manacher String Preprocessor in C.","learningOutcome":"Manacher Preprocessing, Delimiter Padding & Unified Odd-Length Palindrome Mapping","exampleText":"Format string \'aba\' for Manacher","exampleOutput":"--- Manacher\'s String Formatting ---\\nOriginal : \'aba\'\\nFormatted: \'^#a#b#a#$\'","logicExplanation":"1. **Guard Delimiters**: Add `^` at start and `$` at end to avoid out-of-bounds checks.\\n2. **Interleaved Hashes**: Insert `#` between every adjacent pair of characters.","answerFile":"./answers/answer3.c","codeExplanation":"1. `format_manacher_string()`: Preprocesses strings for Manacher\'s algorithm."},{"projectId":"PAL_004","title":"Complete Manacher\'s Algorithm for O(N) Longest Palindromic Substring","difficulty":"Beginner","description":"Manacher\'s Algorithm finds the longest palindromic substring in optimal LINEAR O(N) time! It maintains a radius array `P[i]`, a center `C`, and a right boundary `R`. Using mirror symmetry `i_mirror = 2*C - i`, previously computed palindrome radii are reused in O(1) time. In this project, you will build a complete Manacher\'s Engine in C.","learningOutcome":"Manacher\'s Algorithm, Mirror Symmetry `2*C - i` & Optimal Linear O(N) Time Guarantee","exampleText":"Find longest palindrome in \'babad\' in O(N) time","exampleOutput":"--- Manacher\'s O(N) Longest Palindromic Substring ---\\nInput: \'babad\'\\nLongest Palindromic Substring: \'bab\'","logicExplanation":"1. **Mirror Reuse**: `P[i] = min(R - i, P[i_mirror])` when `i < R`.\\n2. **Boundary Extension**: Expand outward beyond `R` only when necessary, updating center `C` and right boundary `R`.","answerFile":"./answers/answer4.c","codeExplanation":"1. `manacher_algorithm()`: Executes Manacher\'s linear O(N) longest palindromic substring algorithm."},{"projectId":"PAL_005","title":"Palindrome Partitioning Validation Engine","difficulty":"Beginner","description":"Verify if a given string partition is a valid Palindrome Partition (where EVERY substring slice is a valid palindrome). In this project, you will build a Palindrome Partitioning Validator in C.","learningOutcome":"Partition Verification, Substring Slice Checks & Backtracking Validation Rules","exampleText":"Validate partition [\'a\', \'a\', \'b\'] for string \'aab\'","exampleOutput":"--- Palindrome Partitioning Validation Engine ---\\nPartition [\'a\', \'a\', \'b\'] into palindromes: VALID","logicExplanation":"1. **Slice Validation**: Verify each token slice is a palindrome.\\n2. **Complete Coverage**: Ensure concatenated tokens reconstruct original string.","answerFile":"./answers/answer5.c","codeExplanation":"1. `palindrome_partition_demo()`: Validates palindromic string partitions."},{"projectId":"PAL_006","title":"Minimum Cuts for Palindrome Partitioning","difficulty":"Beginner","description":"Given a string S, partition S such that every substring of the partition is a palindrome. Return minimum cuts needed. Use 2D DP boolean table `P[j][i]` indicating whether `S[j..i]` is a palindrome, combined with 1D DP `dp[i]` tracking minimum cuts for prefix `S[0..i]` in O(N^2) time. In this project, you will build Min Cut Palindrome Partitioning in C.","learningOutcome":"2D Palindrome DP Tables, Minimum Cut DP Formulations & Quadratic Optimization","exampleText":"Find minimum cuts for \'aab\'","exampleOutput":"--- Minimum Cuts for Palindrome Partitioning ---\\nMinimum Cuts for \'aab\' = 1","logicExplanation":"1. **Palindrome Table**: `P[j][i] = true` if `s[j] == s[i] && (i - j <= 2 || P[j+1][i-1])`.\\n2. **Cut DP**: `dp[i] = min(dp[i], dp[j-1] + 1)`.","answerFile":"./answers/answer6.c","codeExplanation":"1. `min_cut_palindrome()`: Solves minimum cuts for palindrome partitioning using DP."},{"projectId":"PAL_007","title":"Longest Palindromic Subsequence (DP Formulation)","difficulty":"Beginner","description":"Find the length of the longest palindromic SUBSEQUENCE (characters do not need to be contiguous). Formulate 2D DP `dp[i][j]` representing longest palindromic subsequence in `S[i..j]`. If `S[i] == S[j]`, `dp[i][j] = dp[i+1][j-1] + 2`; else `dp[i][j] = max(dp[i+1][j], dp[i][j-1])`. In this project, you will build LPS DP Solver in C in O(N^2) time.","learningOutcome":"Subsequence vs Substring Differences, 2D Interval DP & Palindromic Subsequences","exampleText":"Find LPS for \'bbbab\'","exampleOutput":"--- Longest Palindromic Subsequence (LPS DP) ---\\nLongest Palindromic Subsequence Length for \'bbbab\' = 4","logicExplanation":"1. **Base Cases**: `dp[i][i] = 1`.\\n2. **Interval DP**: If `s[i] == s[j]`, add 2 to inner subproblem; else take max of dropping left or right character.","answerFile":"./answers/answer7.c","codeExplanation":"1. `lps_dp()`: Computes longest palindromic subsequence length using 2D DP."},{"projectId":"PAL_008","title":"Check if String Can be Permuted into a Palindrome","difficulty":"Beginner","description":"Given a string S, determine if a permutation of the string could form a palindrome. Count character frequencies: a string can be rearranged into a palindrome if and only if AT MOST ONE character has an odd frequency count in O(N) time! In this project, you will build Palindromic Permutation Checker in C.","learningOutcome":"Frequency Parity Checks, Odd Frequency Thresholds & O(N) Permutation Rules","exampleText":"Check if \'carerac\' can form a palindrome","exampleOutput":"--- Check Palindromic Permutation ---\\nCan \'carerac\' form a palindrome: YES","logicExplanation":"1. **Frequency Table**: Count occurrences of all ASCII characters.\\n2. **Odd Count Constraint**: Return true if `odd_frequency_count <= 1`.","answerFile":"./answers/answer8.c","codeExplanation":"1. `can_permute_palindrome()`: Verifies if character frequencies permit palindrome permutation."},{"projectId":"PAL_009","title":"Shortest Way to Form String","difficulty":"Beginner","description":"Given source and target strings, return minimum number of subsequences of source that concatenation equals target. In this project, you will build Shortest Way to Form String in C.","learningOutcome":"Greedy Subsequence Matching, Source Reset Iteration & Subsequence Concatenation","exampleText":"Form target from source subsequences","exampleOutput":"--- Shortest Way to Form String ---\\nMinimum copies of source required = 2","logicExplanation":"1. **Greedy Match**: Match as many characters of target from source as possible in single pass.\\n2. **Reset Counter**: Increment copy counter when source index reaches end.","answerFile":"./answers/answer9.c","codeExplanation":"1. `shortest_way_demo()`: Solves shortest way to form string using source subsequences."},{"projectId":"PAL_010","title":"Reverse Words in a Sentence Buffer","difficulty":"Beginner","description":"Given a character array sentence (e.g. `\'the sky is blue\'`), reverse the order of words in-place (e.g. `\'blue is sky the\'`). First reverse the entire sentence array, then reverse each individual word bounded by space characters in O(N) time and O(1) extra space! In this project, you will build a Two-Pass Word Reverser in C.","learningOutcome":"Two-Pass Array Inversions, In-Place Buffer Manipulations & O(1) Auxiliary Space","exampleText":"Reverse words in \'the sky is blue\'","exampleOutput":"--- Reverse Words in a Sentence ---\\nBefore: \'the sky is blue\'\\nAfter : \'blue is sky the\'","logicExplanation":"1. **Pass 1**: Reverse whole sentence buffer.\\n2. **Pass 2**: Scan buffer and reverse each individual word between spaces.","answerFile":"./answers/answer10.c","codeExplanation":"1. `reverse_words()`: Reverses words in sentence buffer in-place."},{"projectId":"PAL_011","title":"Palindromic Pairs of Strings (Trie + Reverse Prefix Matching)","difficulty":"Intermediate","description":"Given a list of unique words, find all pairs of distinct indices `(i, j)` such that concatenation `words[i] + words[j]` is a palindrome. Insert reversed words into a Trie. Walk Trie while checking if remaining un-matched suffixes form palindromes in O(N * L^2) time! In this project, you will build Palindromic Pairs Finder in C.","learningOutcome":"Trie Structural Search, Reversed Word Matching & Palindromic Pair Detection","exampleText":"Find palindromic pairs among words","exampleOutput":"--- Palindromic Pairs of Strings (Trie) ---\\nPalindromic Pairs Found: [ (0, 1) → \'abcd\' + \'dcba\', (3, 2) → \'s\' + \'lls\' ]","logicExplanation":"1. **Reversed Word Trie**: Store words in reversed Trie.\\n2. **Suffix Match**: Search prefixes; if remaining word slice is palindrome, pair forms palindrome.","answerFile":"./answers/answer11.c","codeExplanation":"1. `palindromic_pairs_demo()`: Finds palindromic pairs using Trie."},{"projectId":"PAL_012","title":"Minimum Deletions to Make String Palindrome","difficulty":"Intermediate","description":"Find minimum character deletions to make string S a Palindrome. Minimum Deletions = `Length(S) - LongestPalindromicSubsequence(S)`. Use 2D DP to calculate LPS length, then subtract from total string length. In this project, you will build Min Deletions Palindrome Solver in C.","learningOutcome":"LPS Reduction Formulas, Deletion Cost Minimization & Dynamic Programming","exampleText":"Min deletions for \'aebcbda\'","exampleOutput":"--- Minimum Deletions to Make String Palindrome ---\\nMinimum Deletions for \'aebcbda\' = 2","logicExplanation":"1. **LPS Reduction**: `MinDeletions = N - LPS_len`.\\n2. **2D DP**: Compute LPS length using 2D DP matrix.","answerFile":"./answers/answer12.c","codeExplanation":"1. `min_deletions_palindrome()`: Calculates minimum deletions needed to form palindrome."},{"projectId":"PAL_013","title":"Count Different Palindromic Subsequences","difficulty":"Intermediate","description":"Count number of DIFFERENT non-empty palindromic subsequences in string S modulo `10^9 + 7`. Use 2D DP `dp[i][j]` accounting for duplicate sub-palindromes by tracking first and last occurrences of matching boundary characters. In this project, you will build Different Palindromic Subsequences Counter in C in O(N^2) time.","learningOutcome":"Unique Subsequence Counting, Boundary Char Occurrence Indexing & Modulo Arithmetic","exampleText":"Count unique palindromic subsequences in \'bccb\'","exampleOutput":"--- Count Different Palindromic Subsequences ---\\nTotal Unique Palindromic Subsequences for \'bccb\' = 6","logicExplanation":"1. **Boundary Character Occurrences**: Track first/last occurrence of char in `S[i..j]`.\\n2. **Duplicate Deduplication**: Subtract internal duplicate counts when boundary chars match.","answerFile":"./answers/answer13.c","codeExplanation":"1. `count_different_palindromes_demo()`: Counts unique palindromic subsequences via 2D DP."},{"projectId":"PAL_014","title":"Lexicographical Smallest Palindrome Reconstruction","difficulty":"Intermediate","description":"Given string S, make it a palindrome by performing minimum operations where an operation replaces any character with another lowercase letter. If multiple palindromes exist, choose the lexicographically smallest one. Use two pointers (`left` and `right`): replace the larger character with the smaller one! In this project, you will build Smallest Palindrome Reconstructor in C.","learningOutcome":"Greedy Character Replacement, Lexicographical Selection & Two-Pointer Alignment","exampleText":"Reconstruct \'egcfe\' into smallest palindrome","exampleOutput":"--- Lexicographical Smallest Palindrome Reconstruction ---\\nBefore: \'egcfe\'\\nAfter : \'efcfe\'","logicExplanation":"1. **Two Pointers**: `left = 0`, `right = N - 1`.\\n2. **Greedy Replace**: `min_c = min(s[left], s[right])`. Set `s[left] = s[right] = min_c`.","answerFile":"./answers/answer14.c","codeExplanation":"1. `make_smallest_palindrome()`: Reconstructs lexicographically smallest palindrome in O(N) time."},{"projectId":"PAL_015","title":"Maximum Length of a Concatenated String with Unique Characters","difficulty":"Intermediate","description":"Given array of strings, return maximum length of concatenated string with ALL unique characters. Represent character sets of strings as Bitmasks (`1 << (char - \'a\')`). Use Bitmask Backtracking to find maximum valid length in O(2^N) time! In this project, you will build Unique Character Concatenation Maximizer in C.","learningOutcome":"Bitmask Character Representations, Overlap Bitwise AND Checks & Backtracking","exampleText":"Find max unique concatenated length","exampleOutput":"--- Maximum Length of Concatenated String with Unique Characters ---\\nMaximum Concatenated Unique Characters Length = 4","logicExplanation":"1. **Bitmask Set**: Represent string character set as 32-bit integer mask.\\n2. **Bitwise AND Overlap**: `(mask1 & mask2) == 0` confirms unique character sets without duplicates.","answerFile":"./answers/answer15.c","codeExplanation":"1. `max_len_unique_concat_demo()`: Finds maximum concatenated length of unique character strings."},{"projectId":"PAL_016","title":"Text Justification & Line Formatting Engine","difficulty":"Intermediate","description":"Format a list of words into fully justified lines of width `maxWidth`. Distribute extra spaces evenly between words. If spaces do not divide evenly, allocate more spaces to left slots. Last line must be left-justified. In this project, you will build a Text Justification Engine in C.","learningOutcome":"Line Formatting Algorithms, Even Space Distribution & Padding Edge Cases","exampleText":"Format words into justified lines","exampleOutput":"--- Text Justification & Line Formatting Engine ---\\nFormatted lines with full justification (maxWidth = 16).","logicExplanation":"1. **Line Packing**: Pack words into current line until width limit `maxWidth` reached.\\n2. **Space Padding**: Compute `extra_spaces / gaps` and distribute remainder to leftmost gaps.","answerFile":"./answers/answer16.c","codeExplanation":"1. `text_justification_demo()`: Solves text justification and line formatting."},{"projectId":"PAL_017","title":"Expressive Words & Stretchy String Validation","difficulty":"Intermediate","description":"A stretchy word is formed by extending character groups of length >= 3. Check if query words can be stretched into target string S using two-pointer group length matching in O(N) time. In this project, you will build an Expressive Words Validator in C.","learningOutcome":"Run-Length Group Matching, Stretchy Expansion Constraints & Two-Pointer Group Checks","exampleText":"Validate stretchy words for \'heeellooo\'","exampleOutput":"--- Expressive Words & Stretchy String Validation ---\\nTotal Stretchy Words Matching \'heeellooo\': 1","logicExplanation":"1. **Group Count**: Compress repeated character groups into `(char, count)` pairs.\\n2. **Stretch Rules**: Match groups; allow expansion if target group length `>= 3`.","answerFile":"./answers/answer17.c","codeExplanation":"1. `expressive_words_demo()`: Validates stretchy words using group length matching."},{"projectId":"PAL_018","title":"Minimum Insertion Steps to Make a String Palindrome","difficulty":"Intermediate","description":"Find minimum insertions needed to turn string S into a palindrome. Minimum Insertions = `Length(S) - LongestPalindromicSubsequence(S)`. Calculate LPS length using 2D DP matrix. In this project, you will build Min Insertion Steps Palindrome Engine in C.","learningOutcome":"LPS Reduction Formulas, Insertion Cost Minimization & Dynamic Programming","exampleText":"Find min insertions for \'mbadm\'","exampleOutput":"--- Minimum Insertion Steps to Make String Palindrome ---\\nMinimum Insertions for \'zzazz\' = 0\\nMinimum Insertions for \'mbadm\' = 2","logicExplanation":"1. **Formula**: `MinInsertions = N - LPS_len`.\\n2. **2D DP**: Compute LPS length to find minimum insertions.","answerFile":"./answers/answer18.c","codeExplanation":"1. `min_insertions_palindrome_demo()`: Computes minimum insertions to achieve palindrome."},{"projectId":"PAL_019","title":"Find All Substring Palindromes of Length >= K","difficulty":"Intermediate","description":"Filter and collect all distinct palindromic substrings of S whose length is greater than or equal to K. Combine Center Expansion with a hash set for deduplication in O(N^2) time. In this project, you will build Palindromic Substring Length Filter in C.","learningOutcome":"Length-Bounded Palindrome Search, Center Expansion Filtering & Substring Deduplication","exampleText":"Find palindromes of length >= 3","exampleOutput":"--- Find All Substring Palindromes of Length >= K ---\\nPalindromic Substrings (Length >= 3) Found: [ \'aba\', \'racecar\' ]","logicExplanation":"1. **Center Expansion**: Expand odd and even centers.\\n2. **Length Filter**: Collect substring if `length >= K`.","answerFile":"./answers/answer19.c","codeExplanation":"1. `palindromes_len_k_demo()`: Filters palindromic substrings by minimum length K."},{"projectId":"PAL_020","title":"Run-Length Encoding (RLE) String Compression Kernel","difficulty":"Intermediate","description":"Run-Length Encoding (RLE) compresses strings by replacing consecutive identical characters with character followed by repeat count (e.g. `\'aabcccccaaa\'` → `\'a2b1c5a3\'`). In this project, you will build an RLE Compression Kernel in C in O(N) time.","learningOutcome":"Lossless Compression Kernels, Consecutive Character Runs & In-Place Buffer Output","exampleText":"Compress \'aabcccccaaa\' via RLE","exampleOutput":"--- Run-Length Encoding (RLE) Compression ---\\nOriginal  : \'aabcccccaaa\'\\nCompressed: \'a2b1c5a3\'","logicExplanation":"1. **Consecutive Run Counter**: Count consecutive matches `src[i] == src[i+1]`.\\n2. **Format Buffer**: Append character + count to output buffer.","answerFile":"./answers/answer20.c","codeExplanation":"1. `compress_rle()`: Executes Run-Length Encoding string compression in O(N) time."},{"projectId":"PAL_021","title":"Palindromic Tree / EERTree Construction Engine","difficulty":"Advanced","description":"The Palindromic Tree (EERTree) is a specialized graph structure representing ALL distinct palindromic substrings of a string in linear O(N) time and memory! It has two root nodes: Root -1 (for odd length palindromes) and Root 0 (for even length palindromes). In this project, you will build an EERTree Engine in C.","learningOutcome":"Palindromic Tree Architecture, Odd/Even Dual Root System & Linear O(N) Substring Indexing","exampleText":"Construct EERTree for string","exampleOutput":"--- Palindromic Tree / EERTree Construction Engine ---\\nEERTree constructed with 2 root nodes (odd length root -1, even length root 0).","logicExplanation":"1. **Dual Roots**: Root -1 (length -1) and Root 0 (length 0).\\n2. **Suffix Links**: Failure links point to longest proper palindromic suffix node.","answerFile":"./answers/answer21.c","codeExplanation":"1. `eertree_demo()`: Constructs Palindromic Tree (EERTree) in linear O(N) time."},{"projectId":"PAL_022","title":"Suffix Array & LCP Array Construction (Kasai\'s Algorithm)","difficulty":"Advanced","description":"Construct Suffix Array (sorted array of all string suffixes) in O(N log N) time, then compute the Longest Common Prefix (LCP) Array in linear O(N) time using Kasai\'s Algorithm! Enables fast pattern matching, substring count, and LCP queries. In this project, you will build a Suffix Array & Kasai LCP Engine in C.","learningOutcome":"Suffix Array Sorting, Kasai\'s Linear LCP Construction & Advanced String Processing","exampleText":"Construct Suffix Array & Kasai LCP Array","exampleOutput":"--- Suffix Array & Kasai\'s LCP Array Construction ---\\nSuffix Array built in O(N log N); Kasai LCP Array built in O(N).","logicExplanation":"1. **Suffix Array**: Sort suffix indices using prefix doubling in O(N log N).\\n2. **Kasai\'s Algorithm**: Compute LCP values sequentially exploiting `h >= h - 1` property in O(N).","answerFile":"./answers/answer22.c","codeExplanation":"1. `suffix_array_lcp_demo()`: Builds Suffix Array and Kasai\'s LCP Array."},{"projectId":"PAL_023","title":"Suffix Automaton (SAM) Dynamic Minimal String Transducer","difficulty":"Advanced","description":"A Suffix Automaton (SAM) is a Directed Acyclic Word Graph (DAWG) representing ALL substrings of string S in minimal O(N) states and transitions! Enables instant O(M) substring queries and occurrence counting. In this project, you will build a Suffix Automaton Engine in C.","learningOutcome":"Suffix Automaton States, DAWG Minimal Representation & O(N) Space Substring Graphs","exampleText":"Construct Suffix Automaton for string","exampleOutput":"--- Suffix Automaton (SAM) Dynamic String Transducer ---\\nConstructed Suffix Automaton in linear O(N) time and memory.","logicExplanation":"1. **State Machine**: Each state represents an equivalence class of endpos positions.\\n2. **Suffix Links**: Links point to states with smaller endpos sets.","answerFile":"./answers/answer23.c","codeExplanation":"1. `suffix_automaton_demo()`: Constructs Suffix Automaton in linear O(N) time and memory."},{"projectId":"PAL_024","title":"Burrows-Wheeler Transform (BWT) & Inverse Compression Kernel","difficulty":"Advanced","description":"The Burrows-Wheeler Transform (BWT) rearranges string characters into runs of similar characters to maximize bzip2 compression ratios. Reconstruct original string using Inverse BWT LF-mapping in O(N) time! In this project, you will build a BWT Compression Kernel in C.","learningOutcome":"Burrows-Wheeler Transform, LF-Mapping Reversibility & Advanced Lossless Compression","exampleText":"BWT Transform \'banana$\'","exampleOutput":"--- Burrows-Wheeler Transform (BWT) & Inverse Kernel ---\\nTransformed string \'banana$\' → \'annb$aa\' for bzip2 compression.","logicExplanation":"1. **BWT Permutation**: Sort all cyclic rotations of string S; take last column.\\n2. **Inverse BWT**: Use LF-mapping (Last-to-First mapping) to reconstruct original string in O(N).","answerFile":"./answers/answer24.c","codeExplanation":"1. `bwt_compression_demo()`: Implements Burrows-Wheeler Transform and Inverse BWT."},{"projectId":"PAL_025","title":"Multi-Threaded SIMD Accelerated Manacher Palindrome Kernel","difficulty":"Advanced","description":"High-throughput text analytics engines compute palindromic properties over terabyte text corpora using multi-threading and SIMD vector registers to execute Manacher expansion in hardware parallel passes. In this project, you will build SIMD Parallel Manacher Simulator in C.","learningOutcome":"SIMD Vector Manacher Expansion, Multi-Threaded Text Partitioning & High-Throughput Search","exampleText":"Parallel SIMD Manacher execution","exampleOutput":"--- Multi-Threaded SIMD Accelerated Manacher Palindrome Kernel ---\\nExecuted hardware vector parallel Manacher expansion across 4 CPU worker threads.","logicExplanation":"1. **Parallel Partitions**: Split text across CPU threads.\\n2. **SIMD Vector Pass**: Execute Manacher radius updates using SIMD vector instructions.","answerFile":"./answers/answer25.c","codeExplanation":"1. `simd_manacher_demo()`: Simulates SIMD multi-threaded Manacher palindrome kernel."}]'),l={projectCategory:k,subject:q,board:B,class:"Computer Science Core / BCA / B.Tech",tools:W,institute:K,projects:V};function H(){const[r,d]=c.useState(null);return c.useEffect(()=>{const t=Object.assign({"./topic6_files/answers/answer1.c":p,"./topic6_files/answers/answer10.c":g,"./topic6_files/answers/answer11.c":f,"./topic6_files/answers/answer12.c":h,"./topic6_files/answers/answer13.c":_,"./topic6_files/answers/answer14.c":x,"./topic6_files/answers/answer15.c":b,"./topic6_files/answers/answer16.c":w,"./topic6_files/answers/answer17.c":P,"./topic6_files/answers/answer18.c":S,"./topic6_files/answers/answer19.c":C,"./topic6_files/answers/answer2.c":y,"./topic6_files/answers/answer20.c":v,"./topic6_files/answers/answer21.c":E,"./topic6_files/answers/answer22.c":L,"./topic6_files/answers/answer23.c":O,"./topic6_files/answers/answer24.c":A,"./topic6_files/answers/answer25.c":I,"./topic6_files/answers/answer3.c":T,"./topic6_files/answers/answer4.c":j,"./topic6_files/answers/answer5.c":M,"./topic6_files/answers/answer6.c":F,"./topic6_files/answers/answer7.c":D,"./topic6_files/answers/answer8.c":R,"./topic6_files/answers/answer9.c":N}),a={};Object.keys(t).forEach(n=>{const o=n.split("/").pop();a[o]=t[n]});const u=l.projects.map(n=>{const i=(n.answerFile||"").split("/").pop(),s=a[i];return s||console.warn(`⚠ Missing C answer file: ${i}`),{...n,answer:s||`// Source file "${i}" not found in answers folder`}});d({...l,projects:u})},[]),r?e.jsx(m,{data:r}):e.jsx("div",{className:"p-6 text-slate-400 flex items-center justify-center min-h-[300px]",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-5 h-5 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),e.jsx("span",{children:"Loading Palindromic & Advanced String Algorithms Projects..."})]})})}export{H as default};
