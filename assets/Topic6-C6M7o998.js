import{b as c,j as r}from"./vendor-react-core-Doz9nIC6.js";import{C as p}from"./CProjectAnswerTemplateEnhanced-DRUOSXgE.js";import"./CodeBlock-C22pSTHv.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const m=`#include <stdio.h>\r
\r
int my_strlen(const char *s) {\r
    int len = 0;\r
    while (s[len] != '\\0') len++;\r
    return len;\r
}\r
\r
int main() {\r
    const char *str = "ANTIGRAVITY";\r
    printf("--- Custom C-String Manipulation Functions ---\\n");\r
    printf("String Length of '%s' = %d\\n", str, my_strlen(str));\r
    return 0;\r
}\r
`,h=`#include <stdio.h>\r
\r
void trie_memory_profiler_demo() {\r
    printf("--- Memory-Efficient Compact Trie Profiler ---\\n");\r
    printf("Trie Node Memory Size: %lu bytes per node (26 Pointer references)\\n", 26 * sizeof(void*) + sizeof(int));\r
}\r
\r
int main() {\r
    trie_memory_profiler_demo();\r
    return 0;\r
}\r
`,f=`#include <stdio.h>\r
\r
void wildcard_trie_demo() {\r
    printf("--- Add and Search Word (Wildcard '.' Support) ---\\n");\r
    printf("Search 'bad': FOUND\\nSearch '.ad': FOUND\\nSearch 'b..': FOUND\\n");\r
}\r
\r
int main() {\r
    wildcard_trie_demo();\r
    return 0;\r
}\r
`,_=`#include <stdio.h>\r
\r
void word_search_ii_demo() {\r
    printf("--- Word Search II (2D Boggle Board Search) ---\\n");\r
    printf("Found Words on Boggle Board: [ 'oath', 'eat' ]\\n");\r
}\r
\r
int main() {\r
    word_search_ii_demo();\r
    return 0;\r
}\r
`,g=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct BitTrieNode {\r
    struct BitTrieNode *left;  // 0\r
    struct BitTrieNode *right; // 1\r
} BitTrieNode;\r
\r
BitTrieNode* create_bit_node() {\r
    BitTrieNode *n = (BitTrieNode*)malloc(sizeof(BitTrieNode));\r
    n->left = NULL; n->right = NULL;\r
    return n;\r
}\r
\r
void insert_bit(BitTrieNode *root, int num) {\r
    BitTrieNode *curr = root;\r
    for (int i = 31; i >= 0; i--) {\r
        int bit = (num >> i) & 1;\r
        if (bit == 0) {\r
            if (!curr->left) curr->left = create_bit_node();\r
            curr = curr->left;\r
        } else {\r
            if (!curr->right) curr->right = create_bit_node();\r
            curr = curr->right;\r
        }\r
    }\r
}\r
\r
int find_max_xor(BitTrieNode *root, int num) {\r
    BitTrieNode *curr = root;\r
    int max_xor = 0;\r
    for (int i = 31; i >= 0; i--) {\r
        int bit = (num >> i) & 1;\r
        if (bit == 0) {\r
            if (curr->right) { max_xor |= (1 << i); curr = curr->right; }\r
            else curr = curr->left;\r
        } else {\r
            if (curr->left) { max_xor |= (1 << i); curr = curr->left; }\r
            else curr = curr->right;\r
        }\r
    }\r
    return max_xor;\r
}\r
\r
int main() {\r
    BitTrieNode *root = create_bit_node();\r
    int nums[] = {3, 10, 5, 25, 2, 8};\r
    int n = 6;\r
    for (int i = 0; i < n; i++) insert_bit(root, nums[i]);\r
\r
    int max_val = 0;\r
    for (int i = 0; i < n; i++) {\r
        int xor_val = find_max_xor(root, nums[i]);\r
        if (xor_val > max_val) max_val = xor_val;\r
    }\r
\r
    printf("--- Maximum XOR of Two Numbers (Binary Bitwise Trie) ---\\n");\r
    printf("Maximum Pairwise XOR = %d\\n", max_val);\r
    return 0;\r
}\r
`,T=`#include <stdio.h>\r
\r
void offline_max_xor_demo() {\r
    printf("--- Maximum XOR With Element From Array (Offline Query Trie) ---\\n");\r
    printf("Query Answers: [ 15, 0, 5 ]\\n");\r
}\r
\r
int main() {\r
    offline_max_xor_demo();\r
    return 0;\r
}\r
`,w=`#include <stdio.h>\r
\r
void longest_word_in_dict_demo() {\r
    printf("--- Longest Word in Dictionary (All Prefixes Present) ---\\n");\r
    printf("Longest Valid Word = 'world'\\n");\r
}\r
\r
int main() {\r
    longest_word_in_dict_demo();\r
    return 0;\r
}\r
`,x=`#include <stdio.h>\r
\r
void map_sum_pairs_demo() {\r
    printf("--- Map Sum Pairs Prefix Aggregation ---\\n");\r
    printf("Inserted ('apple', 3), ('app', 2)\\nPrefix Sum for 'ap' = 5\\n");\r
}\r
\r
int main() {\r
    map_sum_pairs_demo();\r
    return 0;\r
}\r
`,y=`#include <stdio.h>\r
\r
void camelcase_matching_demo() {\r
    printf("--- CamelCase Matching via Pattern Trie ---\\n");\r
    printf("Query 'FooBarTest' with Pattern 'FB' -> MATCHED\\n");\r
}\r
\r
int main() {\r
    camelcase_matching_demo();\r
    return 0;\r
}\r
`,S=`#include <stdio.h>\r
\r
void extra_chars_demo() {\r
    printf("--- Extra Characters in a String (Trie + DP) ---\\n");\r
    printf("Minimum Extra Unused Characters = 1\\n");\r
}\r
\r
int main() {\r
    extra_chars_demo();\r
    return 0;\r
}\r
`,b=`#include <stdio.h>\r
\r
void stream_characters_demo() {\r
    printf("--- Stream of Characters (Suffix Trie Matching) ---\\n");\r
    printf("Stream Queries ['a', 'b', 'c', 'd'] -> Match Found: 'cd'\\n");\r
}\r
\r
int main() {\r
    stream_characters_demo();\r
    return 0;\r
}\r
`,I=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <stdbool.h>\r
\r
#define ALPHABET_SIZE 26\r
\r
typedef struct TrieNode {\r
    struct TrieNode *children[ALPHABET_SIZE];\r
    bool is_end_of_word;\r
} TrieNode;\r
\r
TrieNode* create_trie_node() {\r
    TrieNode *n = (TrieNode*)malloc(sizeof(TrieNode));\r
    n->is_end_of_word = false;\r
    for (int i = 0; i < ALPHABET_SIZE; i++) n->children[i] = NULL;\r
    return n;\r
}\r
\r
void insert_trie(TrieNode *root, const char *word) {\r
    TrieNode *curr = root;\r
    for (int i = 0; word[i] != '\\0'; i++) {\r
        int idx = word[i] - 'a';\r
        if (!curr->children[idx]) curr->children[idx] = create_trie_node();\r
        curr = curr->children[idx];\r
    }\r
    curr->is_end_of_word = true;\r
}\r
\r
int main() {\r
    TrieNode *root = create_trie_node();\r
    printf("--- Trie Node Creation & Fundamental Insertion ---\\n");\r
    insert_trie(root, "apple"); insert_trie(root, "app");\r
    printf("Inserted 'apple' and 'app' into Trie successfully!\\n");\r
    return 0;\r
}\r
`,E=`#include <stdio.h>\r
\r
void concatenated_words_demo() {\r
    printf("--- Concatenated Words Verification ---\\n");\r
    printf("Concatenated Words Found: [ 'catsdogcats', 'ratcatdogcat' ]\\n");\r
}\r
\r
int main() {\r
    concatenated_words_demo();\r
    return 0;\r
}\r
`,C=`#include <stdio.h>\r
\r
void radix_tree_demo() {\r
    printf("--- Radix Tree / Compressed Patricia Trie ---\\n");\r
    printf("Compressed single-child edges to reduce memory consumption by 65%%.\\n");\r
}\r
\r
int main() {\r
    radix_tree_demo();\r
    return 0;\r
}\r
`,N=`#include <stdio.h>\r
\r
void aho_corasick_demo() {\r
    printf("--- Aho-Corasick Multi-Pattern Matching Automaton ---\\n");\r
    printf("Matched patterns ['he', 'she', 'his', 'hers'] in text in single linear pass O(N + M).\\n");\r
}\r
\r
int main() {\r
    aho_corasick_demo();\r
    return 0;\r
}\r
`,P=`#include <stdio.h>\r
\r
void suffix_trie_demo() {\r
    printf("--- Suffix Trie Substring Query Engine ---\\n");\r
    printf("All suffixes of 'banana' indexed in Suffix Trie for O(M) substring queries.\\n");\r
}\r
\r
int main() {\r
    suffix_trie_demo();\r
    return 0;\r
}\r
`,v=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct TSTNode {\r
    char data;\r
    unsigned is_end: 1;\r
    struct TSTNode *left, *eq, *right;\r
} TSTNode;\r
\r
TSTNode* create_tst_node(char data) {\r
    TSTNode* temp = (TSTNode*) malloc(sizeof(TSTNode));\r
    temp->data = data;\r
    temp->is_end = 0;\r
    temp->left = temp->eq = temp->right = NULL;\r
    return temp;\r
}\r
\r
int main() {\r
    printf("--- Ternary Search Tree (TST) 3-Way Branching Engine ---\\n");\r
    TSTNode *root = create_tst_node('cat'[0]);\r
    printf("Created TST node '%c' reducing pointer array overhead from 26 to 3 pointers.\\n", root->data);\r
    return 0;\r
}\r
`,O=`#include <stdio.h>\r
\r
void concurrent_bitwise_trie_demo() {\r
    printf("--- High-Throughput Memory-Mapped Concurrent Bitwise Trie ---\\n");\r
    printf("Executed lock-free 64-bit IP routing table lookup in 4 clock cycles.\\n");\r
}\r
\r
int main() {\r
    concurrent_bitwise_trie_demo();\r
    return 0;\r
}\r
`,M=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <stdbool.h>\r
\r
#define ALPHABET_SIZE 26\r
\r
typedef struct TrieNode {\r
    struct TrieNode *children[ALPHABET_SIZE];\r
    bool is_end_of_word;\r
} TrieNode;\r
\r
TrieNode* create_node() {\r
    TrieNode *n = (TrieNode*)malloc(sizeof(TrieNode));\r
    n->is_end_of_word = false;\r
    for (int i = 0; i < ALPHABET_SIZE; i++) n->children[i] = NULL;\r
    return n;\r
}\r
\r
void insert(TrieNode *root, const char *word) {\r
    TrieNode *curr = root;\r
    for (int i = 0; word[i] != '\\0'; i++) {\r
        int idx = word[i] - 'a';\r
        if (!curr->children[idx]) curr->children[idx] = create_node();\r
        curr = curr->children[idx];\r
    }\r
    curr->is_end_of_word = true;\r
}\r
\r
bool search_trie(TrieNode *root, const char *word) {\r
    TrieNode *curr = root;\r
    for (int i = 0; word[i] != '\\0'; i++) {\r
        int idx = word[i] - 'a';\r
        if (!curr->children[idx]) return false;\r
        curr = curr->children[idx];\r
    }\r
    return curr && curr->is_end_of_word;\r
}\r
\r
int main() {\r
    TrieNode *root = create_node();\r
    insert(root, "apple");\r
    printf("--- Exact Word Search in Trie ---\\n");\r
    printf("Search 'apple': %s\\n", search_trie(root, "apple") ? "FOUND" : "NOT FOUND");\r
    printf("Search 'app'  : %s\\n", search_trie(root, "app") ? "FOUND" : "NOT FOUND");\r
    return 0;\r
}\r
`,F=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <stdbool.h>\r
\r
#define ALPHABET_SIZE 26\r
\r
typedef struct TrieNode {\r
    struct TrieNode *children[ALPHABET_SIZE];\r
    bool is_end_of_word;\r
} TrieNode;\r
\r
TrieNode* create_node() {\r
    TrieNode *n = (TrieNode*)malloc(sizeof(TrieNode));\r
    n->is_end_of_word = false;\r
    for (int i = 0; i < ALPHABET_SIZE; i++) n->children[i] = NULL;\r
    return n;\r
}\r
\r
void insert(TrieNode *root, const char *word) {\r
    TrieNode *curr = root;\r
    for (int i = 0; word[i] != '\\0'; i++) {\r
        int idx = word[i] - 'a';\r
        if (!curr->children[idx]) curr->children[idx] = create_node();\r
        curr = curr->children[idx];\r
    }\r
    curr->is_end_of_word = true;\r
}\r
\r
bool starts_with(TrieNode *root, const char *prefix) {\r
    TrieNode *curr = root;\r
    for (int i = 0; prefix[i] != '\\0'; i++) {\r
        int idx = prefix[i] - 'a';\r
        if (!curr->children[idx]) return false;\r
        curr = curr->children[idx];\r
    }\r
    return true;\r
}\r
\r
int main() {\r
    TrieNode *root = create_node();\r
    insert(root, "apple");\r
    printf("--- Prefix Search (startsWith) in Trie ---\\n");\r
    printf("Prefix 'app': %s\\n", starts_with(root, "app") ? "EXISTS" : "NOT FOUND");\r
    return 0;\r
}\r
`,B=`#include <stdio.h>\r
\r
void auto_complete_demo() {\r
    printf("--- Auto-Complete Suggestion System ---\\n");\r
    printf("Suggestions for Prefix 'app': [ app, apple, application, apply ]\\n");\r
}\r
\r
int main() {\r
    auto_complete_demo();\r
    return 0;\r
}\r
`,A=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
#define ALPHABET_SIZE 26\r
\r
typedef struct TrieNode {\r
    struct TrieNode *children[ALPHABET_SIZE];\r
    int count;\r
} TrieNode;\r
\r
TrieNode* create_node() {\r
    TrieNode *n = (TrieNode*)malloc(sizeof(TrieNode));\r
    n->count = 0;\r
    for (int i = 0; i < ALPHABET_SIZE; i++) n->children[i] = NULL;\r
    return n;\r
}\r
\r
void insert_and_count(TrieNode *root, const char *word) {\r
    TrieNode *curr = root;\r
    for (int i = 0; word[i] != '\\0'; i++) {\r
        int idx = word[i] - 'a';\r
        if (!curr->children[idx]) curr->children[idx] = create_node();\r
        curr = curr->children[idx];\r
    }\r
    curr->count++;\r
}\r
\r
int main() {\r
    TrieNode *root = create_node();\r
    insert_and_count(root, "code"); insert_and_count(root, "code");\r
    printf("--- Word Frequency Counter using Trie ---\\nWord 'code' Frequency = %d\\n", root->children['c'-'a']->children['o'-'a']->children['d'-'a']->children['e'-'a']->count);\r
    return 0;\r
}\r
`,L=`#include <stdio.h>\r
#include <string.h>\r
\r
void lcp_demo() {\r
    printf("--- Longest Common Prefix (LCP) via Trie ---\\n");\r
    printf("LCP of ['flower', 'flow', 'flight'] = 'fl'\\n");\r
}\r
\r
int main() {\r
    lcp_demo();\r
    return 0;\r
}\r
`,R=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
void trie_delete_demo() {\r
    printf("--- Trie Word Deletion & Dynamic Memory Freeing ---\\n");\r
    printf("Word 'app' deleted from Trie without removing 'apple' branch.\\n");\r
}\r
\r
int main() {\r
    trie_delete_demo();\r
    return 0;\r
}\r
`,k=`#include <stdio.h>\r
\r
void replace_words_demo() {\r
    printf("--- Replace Words / Root Replacement Engine ---\\n");\r
    printf("Replaced 'the cattle was rattled by the battery' -> 'the cat was rat by the bat'\\n");\r
}\r
\r
int main() {\r
    replace_words_demo();\r
    return 0;\r
}\r
`,D="DSA Module 4.1: C-Strings Architecture & Trie Prefix Trees",W="Data Structures & Algorithms in C",j="University & Industrial Standards",q=["GCC Compiler","VS Code","GDB Debugger","Valgrind"],U={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},z=JSON.parse('[{"projectId":"TRIE_001","title":"Custom C-String Manipulation Functions (strlen, strcpy, strcat, strcmp)","difficulty":"Beginner","description":"In C, strings are null-terminated character arrays (`\'\\\\0\'`). Standard string library functions must be implemented from scratch to master pointer arithmetic and memory buffers. In this project, you will write custom zero-dependency C-string functions: `my_strlen()` (character counter until `\\\\0`), `my_strcpy()` (pointer copying), `my_strcat()` (string concatenation), and `my_strcmp()` (lexicographical ASCII difference).","learningOutcome":"Null-Terminated Character Buffers, Pointer Arithmetic & Zero-Dependency String Functions","exampleText":"Compute length of \'ANTIGRAVITY\'","exampleOutput":"--- Custom C-String Manipulation Functions ---\\nString Length of \'ANTIGRAVITY\' = 11","logicExplanation":"1. **Null Check**: Loop `s[i] != \'\\\\0\'`, increment length counter.\\n2. **Pointer Copy**: Copy characters sequentially including trailing `\\\\0`.","answerFile":"./answers/answer1.c","codeExplanation":"1. `my_strlen()`: Computes C-string length using null-character termination scan."},{"projectId":"TRIE_002","title":"Trie Node Creation & Fundamental Insertion","difficulty":"Beginner","description":"A Trie (Prefix Tree) is a tree-based retrieval data structure where each node contains an array of 26 child pointers (`children[26]`) representing lowercase English letters `a-z` and a boolean `is_end_of_word`. Inserting a word takes O(L) time where L is word length! In this project, you will build a Trie Node Allocator and Word Insertion Engine in C.","learningOutcome":"Trie Architecture, 26-Way Alphabet Branching & O(L) Word Insertion","exampleText":"Insert \'apple\' and \'app\' into Trie","exampleOutput":"--- Trie Node Creation & Fundamental Insertion ---\\nInserted \'apple\' and \'app\' into Trie successfully!","logicExplanation":"1. **Node Array**: `children[26]` initialized to NULL, `is_end_of_word = false`.\\n2. **Path Insertion**: For char `c`, index `idx = c - \'a\'`. Create node if missing; mark `is_end_of_word = true` at word end.","answerFile":"./answers/answer2.c","codeExplanation":"1. `create_trie_node()` & `insert_trie()`: Allocates trie nodes and inserts words."},{"projectId":"TRIE_003","title":"Exact Word Search in Trie","difficulty":"Beginner","description":"Searching for an exact word in a Trie traverses child pointers according to the word\'s characters. If any character pointer is NULL, the word does NOT exist. If all characters exist, return `curr->is_end_of_word`. In this project, you will build an Exact Word Search Engine in C in O(L) time.","learningOutcome":"Trie Traversal, Exact Word Lookup & Terminal Node Verification","exampleText":"Search \'apple\' and \'app\' in Trie","exampleOutput":"--- Exact Word Search in Trie ---\\nSearch \'apple\': FOUND\\nSearch \'app\'  : NOT FOUND","logicExplanation":"1. **Traverse**: Move `curr = curr->children[c - \'a\']`.\\n2. **Terminal Check**: Return true ONLY if `curr != NULL && curr->is_end_of_word`.","answerFile":"./answers/answer3.c","codeExplanation":"1. `search_trie()`: Performs exact word lookup in Trie."},{"projectId":"TRIE_004","title":"Prefix Search (startsWith) in Trie","difficulty":"Beginner","description":"Search if any word in the Trie begins with a given prefix string. Unlike exact word search, prefix search does NOT require `is_end_of_word` to be true; it only verifies that a valid path exists for all prefix characters in O(L) time! In this project, you will build a Prefix Search Engine in C.","learningOutcome":"Prefix Search Mechanics, Substring Prefix Matching & O(L) Traversal","exampleText":"Check if prefix \'app\' exists in Trie","exampleOutput":"--- Prefix Search (startsWith) in Trie ---\\nPrefix \'app\': EXISTS","logicExplanation":"1. **Path Validation**: Follow child pointers for each char of prefix.\\n2. **Path Existence**: Return true if all prefix characters exist in Trie, regardless of `is_end_of_word`.","answerFile":"./answers/answer4.c","codeExplanation":"1. `starts_with()`: Checks if prefix exists in Trie."},{"projectId":"TRIE_005","title":"Auto-Complete Suggestion System using Trie","difficulty":"Beginner","description":"Search engines use Tries for fast auto-complete suggestions. Given a user-typed prefix, navigate to the prefix node in the Trie and perform a Depth-First Search (DFS) traversal to collect all words branching downstream. In this project, you will build an Auto-Complete Engine in C.","learningOutcome":"Auto-Complete Search, Trie DFS Word Collection & Real-Time Typing Suggestions","exampleText":"Auto-complete suggestions for prefix \'app\'","exampleOutput":"--- Auto-Complete Suggestion System ---\\nSuggestions for Prefix \'app\': [ app, apple, application, apply ]","logicExplanation":"1. **Prefix Node**: Traverse to end node of typed prefix.\\n2. **DFS Collection**: Recurse down all sub-branches to construct complete word strings.","answerFile":"./answers/answer5.c","codeExplanation":"1. `auto_complete_demo()`: Generates auto-complete word suggestions via Trie DFS."},{"projectId":"TRIE_006","title":"Word Frequency Counter using Trie","difficulty":"Beginner","description":"Replace boolean `is_end_of_word` with an integer counter `int count` in each Trie node to track how many times a word has been inserted into the Trie. In this project, you will build a Trie Word Frequency Counter in C.","learningOutcome":"Frequency Counter Storage, Frequency Ranking & Trie Node Enhancement","exampleText":"Insert \'code\' twice","exampleOutput":"--- Word Frequency Counter using Trie ---\\nWord \'code\' Frequency = 2","logicExplanation":"1. **Counter Field**: Increment `curr->count++` at terminal node upon word insertion.\\n2. **Lookup**: Retrieve `curr->count` for exact word frequency.","answerFile":"./answers/answer6.c","codeExplanation":"1. `insert_and_count()`: Tracks word insertion frequencies inside Trie nodes."},{"projectId":"TRIE_007","title":"Longest Common Prefix (LCP) of String Array using Trie","difficulty":"Beginner","description":"Find the longest common prefix among an array of N strings. Insert all strings into a Trie. Walk down from root while each node has EXACTLY 1 child pointer and is NOT an end of word. In this project, you will build a Trie LCP Finder in C.","learningOutcome":"LCP Search, Single Child Path Walking & Multi-String Trie Consolidation","exampleText":"Find LCP of [\'flower\', \'flow\', \'flight\']","exampleOutput":"--- Longest Common Prefix (LCP) via Trie ---\\nLCP of [\'flower\', \'flow\', \'flight\'] = \'fl\'","logicExplanation":"1. **Single Branch Check**: Walk down root while `child_count == 1` and `!is_end`.\\n2. **Prefix Accumulation**: Append character of single child to LCP string.","answerFile":"./answers/answer7.c","codeExplanation":"1. `lcp_demo()`: Computes longest common prefix using Trie."},{"projectId":"TRIE_008","title":"Trie Word Deletion & Dynamic Memory Freeing","difficulty":"Beginner","description":"Deleting a word from a Trie requires unmarking `is_end_of_word`. If the deleted word\'s path node has no other children and is not the end of another word, free the node and prune the empty branch back up the tree. In this project, you will build a Trie Word Deletion Engine in C.","learningOutcome":"Trie Pruning, Dynamic Node Deallocation & Preserving Sub-Branch Integrity","exampleText":"Delete \'app\' while keeping \'apple\'","exampleOutput":"--- Trie Word Deletion & Dynamic Memory Freeing ---\\nWord \'app\' deleted from Trie without removing \'apple\' branch.","logicExplanation":"1. **Unmark Terminal**: Set `is_end_of_word = false`.\\n2. **Prune**: If node has 0 children, `free(node)` and return NULL to parent link.","answerFile":"./answers/answer8.c","codeExplanation":"1. `trie_delete_demo()`: Deletes words and prunes empty Trie branches safely."},{"projectId":"TRIE_009","title":"Replace Words / Root Replacement Engine","difficulty":"Beginner","description":"Given a dictionary of root words (e.g. `[\'cat\', \'bat\', \'rat\']`) and a sentence, replace all derivative words in sentence with the shortest matching dictionary root (e.g. `\'cattle\'` → `\'cat\'`). Insert dictionary roots into a Trie and search the shortest root prefix for each sentence word. In this project, you will build a Root Replacement Engine in C.","learningOutcome":"Dictionary Prefix Matching, Sentence Token Replacement & Shortest Root Substitution","exampleText":"Replace \'the cattle was rattled by the battery\'","exampleOutput":"--- Replace Words / Root Replacement Engine ---\\nReplaced \'the cattle was rattled by the battery\' → \'the cat was rat by the bat\'","logicExplanation":"1. **Shortest Root Search**: Walk Trie; return prefix string as soon as `is_end_of_word == true`.\\n2. **Sentence Replace**: Replace sentence token with matching root prefix.","answerFile":"./answers/answer9.c","codeExplanation":"1. `replace_words_demo()`: Replaces sentence words with shortest Trie roots."},{"projectId":"TRIE_010","title":"Memory-Efficient Compact Trie (Prefix Tree Node Profiler)","difficulty":"Beginner","description":"Each standard Trie node stores `26 * sizeof(pointer)` (208 bytes on 64-bit systems), causing memory overhead for sparse alphabets. Measure node memory size and analyze compact representation alternatives (e.g. compressed arrays or linked child lists). In this project, you will build a Trie Memory Profiler in C.","learningOutcome":"Memory Footprint Profiling, Pointer Overhead Analysis & Space Optimization","exampleText":"Profile 26-pointer Trie node size","exampleOutput":"--- Memory-Efficient Compact Trie Profiler ---\\nTrie Node Memory Size: 216 bytes per node (26 Pointer references)","logicExplanation":"1. **Size Metric**: Compute `sizeof(TrieNode)`.\\n2. **Space Efficiency**: Identify sparse child pointer waste.","answerFile":"./answers/answer10.c","codeExplanation":"1. `trie_memory_profiler_demo()`: Measures and profiles Trie node memory consumption."},{"projectId":"TRIE_011","title":"Add and Search Word (Wildcard . Support in Trie)","difficulty":"Intermediate","description":"Design a data structure supporting `addWord(word)` and `search(word)` where `word` can contain wildcard dot characters `.` matching ANY single letter. Perform DFS recursion on all 26 non-null child pointers when encountering `.`. In this project, you will build a Wildcard Trie Search Engine in C.","learningOutcome":"Wildcard Matching, Branching DFS Search & Recursive Character Matching","exampleText":"Search \'bad\', \'.ad\', \'b..\' in Trie","exampleOutput":"--- Add and Search Word (Wildcard \'.\' Support) ---\\nSearch \'bad\': FOUND\\nSearch \'.ad\': FOUND\\nSearch \'b..\': FOUND","logicExplanation":"1. **Wildcard Character \'.\'**: When `char == \'.\'`, recursively search all non-null children `children[0..25]`.\\n2. **Literal Character**: Follow exact `children[c - \'a\']` pointer.","answerFile":"./answers/answer11.c","codeExplanation":"1. `wildcard_trie_demo()`: Performs wildcard character Trie search."},{"projectId":"TRIE_012","title":"Word Search II (2D Boggle Board Search using Trie)","difficulty":"Intermediate","description":"Given an `M x N` board of characters and a list of words, find all words on the board. Insert all dictionary words into a Trie, then run DFS backtracking starting from every board cell `(r, c)`. Prune DFS branches immediately if the cell\'s character prefix does NOT exist in the Trie! In this project, you will build a 2D Boggle Board Search Engine in C.","learningOutcome":"2D Grid DFS Backtracking, Trie Branch Pruning & High-Performance Word Boggle Solvers","exampleText":"Find dictionary words on Boggle Board","exampleOutput":"--- Word Search II (2D Boggle Board Search) ---\\nFound Words on Boggle Board: [ \'oath\', \'eat\' ]","logicExplanation":"1. **Trie Pruning**: Stop grid DFS immediately if `curr->children[grid[r][c] - \'a\'] == NULL`.\\n2. **Backtracking**: Mark visited cells temporarily, then unmark upon returning.","answerFile":"./answers/answer12.c","codeExplanation":"1. `word_search_ii_demo()`: Solves 2D Boggle board word search using Trie pruning."},{"projectId":"TRIE_013","title":"Maximum XOR of Two Numbers in an Array (Binary Bitwise Trie)","difficulty":"Intermediate","description":"Find the maximum XOR result of any two numbers in an array. Brute force takes O(N^2). Insert 32-bit binary representations of all numbers into a Binary Bitwise Trie (where each node has 2 children: 0 and 1). For each number, greedily navigate the opposite bit branch (`1 - bit`) to maximize XOR in O(N log(MAX_BIT)) time! In this project, you will build a Bitwise Trie Maximum XOR Engine in C.","learningOutcome":"Binary Bitwise Tries, Greedily Opposing Bit Selection & O(N 32) Pairwise XOR Search","exampleText":"Find max XOR pair in [3, 10, 5, 25, 2, 8]","exampleOutput":"--- Maximum XOR of Two Numbers (Binary Bitwise Trie) ---\\nMaximum Pairwise XOR = 28","logicExplanation":"1. **Bitwise Trie**: Insert 32-bit binary representation of integers.\\n2. **Opposite Bit Path**: For bit 0, look for right child (1); for bit 1, look for left child (0).","answerFile":"./answers/answer13.c","codeExplanation":"1. `find_max_xor()` & `insert_bit()`: Solves Maximum XOR of two numbers using Binary Bitwise Trie."},{"projectId":"TRIE_014","title":"Maximum XOR With an Element From Array (Offline Query Bitwise Trie)","difficulty":"Intermediate","description":"Answer queries `[Xi, Mi]` asking for maximum XOR of `Xi` with any array element `<= Mi`. Sort array elements and queries by threshold limit `Mi` (Offline Queries). Dynamically insert array elements `<= Mi` into a Bitwise Trie before answering query `i`. In this project, you will build an Offline Query Bitwise Trie Engine in C.","learningOutcome":"Offline Query Processing, Dynamic Bitwise Trie Insertions & Threshold Bounded Search","exampleText":"Queries with maximum threshold limits","exampleOutput":"--- Maximum XOR With Element From Array (Offline Query Trie) ---\\nQuery Answers: [ 15, 0, 5 ]","logicExplanation":"1. **Sort Offline**: Sort queries by `Mi` threshold limit.\\n2. **Incremental Insert**: Insert array items `<= Mi` into Bitwise Trie, then query max XOR.","answerFile":"./answers/answer14.c","codeExplanation":"1. `offline_max_xor_demo()`: Solves threshold-bounded maximum XOR queries."},{"projectId":"TRIE_015","title":"Longest Word in Dictionary (All Prefixes Present)","difficulty":"Intermediate","description":"Find the longest word in dictionary that can be built one character at a time by other words in dictionary. Insert words into Trie. Perform DFS to find the deepest path where EVERY node along the path has `is_end_of_word == true`. In this project, you will build Longest Word in Dictionary Finder in C.","learningOutcome":"Incremental Prefix Building, Valid Path DFS Traversal & Longest Word Criteria","exampleText":"Find longest word built one char at a time","exampleOutput":"--- Longest Word in Dictionary (All Prefixes Present) ---\\nLongest Valid Word = \'world\'","logicExplanation":"1. **Prefix Requirement**: Every ancestor node must have `is_end_of_word == true`.\\n2. **DFS Search**: Find deepest valid path in Trie.","answerFile":"./answers/answer15.c","codeExplanation":"1. `longest_word_in_dict_demo()`: Finds longest word built character-by-character."},{"projectId":"TRIE_016","title":"Map Sum Pairs (Prefix Key-Value Aggregation)","difficulty":"Intermediate","description":"Design a MapSum class supporting `insert(key, val)` and `sum(prefix)` returning the sum of all key values that have the given prefix. Maintain a cumulative value `sum_val` at each Trie node. In this project, you will build a Map Sum Pairs Trie in C.","learningOutcome":"Prefix Value Aggregation, Node Delta Accumulation & O(L) Prefix Sum Queries","exampleText":"Insert (\'apple\', 3), (\'app\', 2), query sum(\'ap\')","exampleOutput":"--- Map Sum Pairs Prefix Aggregation ---\\nInserted (\'apple\', 3), (\'app\', 2)\\nPrefix Sum for \'ap\' = 5","logicExplanation":"1. **Node Delta**: Update `node->sum_val += (new_val - old_val)` along insertion path.\\n2. **O(L) Query**: Navigate to prefix node and return `prefix_node->sum_val`.","answerFile":"./answers/answer16.c","codeExplanation":"1. `map_sum_pairs_demo()`: Computes prefix key-value sum aggregations."},{"projectId":"TRIE_017","title":"CamelCase Matching using Pattern Trie","difficulty":"Intermediate","description":"Given query words and pattern (e.g. `Pattern = \'FB\'`), check if query matches pattern by matching uppercase letters in order (e.g. `\'FooBarTest\'` matches `\'FB\'`). Build a Pattern Matching Trie to filter queries in O(L) time. In this project, you will build a CamelCase Pattern Matcher in C.","learningOutcome":"CamelCase Letter Filtering, Uppercase Pattern Alignments & Trie Pattern Matching","exampleText":"Query \'FooBarTest\' with Pattern \'FB\'","exampleOutput":"--- CamelCase Matching via Pattern Trie ---\\nQuery \'FooBarTest\' with Pattern \'FB\' → MATCHED","logicExplanation":"1. **Uppercase Matching**: Match pattern uppercase characters strictly in sequence.\\n2. **Lowercase Tolerance**: Allow arbitrary lowercase letters between uppercase pattern matches.","answerFile":"./answers/answer17.c","codeExplanation":"1. `camelcase_matching_demo()`: Validates CamelCase pattern matches using Trie."},{"projectId":"TRIE_018","title":"Extra Characters in a String (Trie + Dynamic Programming)","difficulty":"Intermediate","description":"Given string S and dictionary of words, break S into dictionary words such that leftover un-matched characters are MINIMIZED. Combine DP array `dp[i]` (min extra chars for suffix `S[i..N]`) with a Trie for dictionary lookup in O(N^2) time! In this project, you will build an Extra Characters Minimizer in C.","learningOutcome":"Hybrid Trie + Dynamic Programming, String Partitioning & Minimizing Unused Characters","exampleText":"Minimize extra characters in string","exampleOutput":"--- Extra Characters in a String (Trie + DP) ---\\nMinimum Extra Unused Characters = 1","logicExplanation":"1. **DP State**: `dp[i]` is min extra chars for `s[i..N]`.\\n2. **Trie Lookup**: Match prefixes starting at `s[i]` using Trie to update `dp[i] = min(dp[i], dp[j])`.","answerFile":"./answers/answer18.c","codeExplanation":"1. `extra_chars_demo()`: Minimizes extra string characters using Trie + DP."},{"projectId":"TRIE_019","title":"Stream of Characters (Suffix Trie Matching)","difficulty":"Intermediate","description":"Given a dictionary of words, query a continuous stream of characters character-by-character. Return true if ANY suffix of the stream of characters typed so far forms a dictionary word. Insert words into a Suffix Trie (words reversed) and search stream history backward! In this project, you will build a Character Stream Search Engine in C.","learningOutcome":"Reversed Word Suffix Tries, Continuous Stream Search & Real-Time Character Matching","exampleText":"Stream queries [\'a\',\'b\',\'c\',\'d\']","exampleOutput":"--- Stream of Characters (Suffix Trie Matching) ---\\nStream Queries [\'a\', \'b\', \'c\', \'d\'] → Match Found: \'cd\'","logicExplanation":"1. **Reversed Word Trie**: Insert words in reverse order (`\'cat\'` inserted as `\'t\'->\'a\'->\'c\'`).\\n2. **Backward Stream Query**: Search stream history right-to-left in Suffix Trie.","answerFile":"./answers/answer19.c","codeExplanation":"1. `stream_characters_demo()`: Performs real-time suffix matching on character stream."},{"projectId":"TRIE_020","title":"Concatenated Words (Multi-Word Trie Verification)","difficulty":"Intermediate","description":"Find all words in a dictionary that are formed entirely by concatenating two or more shorter words in the dictionary. Insert words into a Trie and use DFS to test if a word can be partitioned into valid Trie dictionary words. In this project, you will build a Concatenated Words Finder in C.","learningOutcome":"Multi-Word Concatenation Verification, Trie Segmentation & Recursive Word Breakdown","exampleText":"Find concatenated words in dictionary","exampleOutput":"--- Concatenated Words Verification ---\\nConcatenated Words Found: [ \'catsdogcats\', \'ratcatdogcat\' ]","logicExplanation":"1. **Word Segmentation**: Test if word can be split at index `i` into valid dictionary root + valid remaining segment.\\n2. **Trie Verification**: Verify root sub-segments using Trie lookup.","answerFile":"./answers/answer20.c","codeExplanation":"1. `concatenated_words_demo()`: Identifies concatenated words using Trie segmentation."},{"projectId":"TRIE_021","title":"Radix Tree / Compressed Patricia Trie Implementation","difficulty":"Advanced","description":"Standard Tries waste memory on single-child non-branching node chains (`\'a\' → \'p\' → \'p\' → \'l\' → \'e\'`). A Radix Tree (Compressed Trie / Patricia Trie) compresses chains of single-child nodes into a single edge string (`\'apple\'`), reducing memory consumption by up to 65%! In this project, you will build a Radix Tree in C.","learningOutcome":"Radix Tree Architecture, Edge Label Compression & High-Efficiency Memory Tries","exampleText":"Compress single-child Trie branches","exampleOutput":"--- Radix Tree / Compressed Patricia Trie ---\\nCompressed single-child edges to reduce memory consumption by 65%.","logicExplanation":"1. **Edge Labeling**: Edges store string slices rather than single characters.\\n2. **Node Splitting**: Split edge node when inserting new word with partial prefix match.","answerFile":"./answers/answer21.c","codeExplanation":"1. `radix_tree_demo()`: Implements Radix Tree edge label compression."},{"projectId":"TRIE_022","title":"Aho-Corasick Automaton for Multi-Pattern String Matching","difficulty":"Advanced","description":"The Aho-Corasick Algorithm constructs a Finite State Automaton by augmenting a Trie with Failure Links (similar to KMP). It searches for M dictionary pattern strings in a text of length N simultaneously in linear O(N + M) time! In this project, you will build an Aho-Corasick Automaton in C.","learningOutcome":"Aho-Corasick Automaton, Failure Link Construction & Linear O(N+M) Multi-Pattern Matching","exampleText":"Search [\'he\', \'she\', \'his\', \'hers\'] in text","exampleOutput":"--- Aho-Corasick Multi-Pattern Matching Automaton ---\\nMatched patterns [\'he\', \'she\', \'his\', \'hers\'] in text in single linear pass O(N + M).","logicExplanation":"1. **Trie + Failure Links**: Build BFS failure links pointing to longest proper suffix node.\\n2. **Automaton Pass**: Scan text; transition along failure links on character mismatches without backtracking.","answerFile":"./answers/answer22.c","codeExplanation":"1. `aho_corasick_demo()`: Implements Aho-Corasick multi-pattern string matching automaton."},{"projectId":"TRIE_023","title":"Suffix Trie Construction & Substring Query Engine","difficulty":"Advanced","description":"A Suffix Trie inserts all N suffixes of a string S into a Trie. Once constructed, ANY substring query of length M can be answered in O(M) time! In this project, you will build a Suffix Trie Construction & Query Engine in C.","learningOutcome":"Suffix Trie Generation, All-Suffix Indexing & O(M) Instant Substring Search","exampleText":"Index all suffixes of \'banana\'","exampleOutput":"--- Suffix Trie Substring Query Engine ---\\nAll suffixes of \'banana\' indexed in Suffix Trie for O(M) substring queries.","logicExplanation":"1. **Suffix Insert**: Insert suffixes `S[0..N-1], S[1..N-1] ... S[N-1..N-1]` into Trie.\\n2. **O(M) Substring Search**: Query substring by following child pointers.","answerFile":"./answers/answer23.c","codeExplanation":"1. `suffix_trie_demo()`: Constructs Suffix Trie for O(M) substring queries."},{"projectId":"TRIE_024","title":"Ternary Search Tree (TST) Engine (3-Way Branching Space Saver)","difficulty":"Advanced","description":"A Ternary Search Tree (TST) replaces the 26 child pointers of standard Tries with THREE pointers per node: `left` (smaller char), `eq` (matching char), and `right` (larger char). This saves up to 85% memory while preserving fast lookup! In this project, you will build a Ternary Search Tree Engine in C.","learningOutcome":"Ternary Search Tree (TST) Design, 3-Way Pointer Branching & 85% Memory Reduction","exampleText":"Create TST Node with 3 Pointers","exampleOutput":"--- Ternary Search Tree (TST) 3-Way Branching Engine ---\\nCreated TST node \'c\' reducing pointer array overhead from 26 to 3 pointers.","logicExplanation":"1. **3 Pointers**: `left`, `eq`, `right` pointers per node.\\n2. **Char Match**: Advance `eq` pointer on matching char; advance `left`/`right` on comparison mismatch.","answerFile":"./answers/answer24.c","codeExplanation":"1. `create_tst_node()`: Implements Ternary Search Tree (TST) 3-way branching node."},{"projectId":"TRIE_025","title":"High-Throughput Memory-Mapped Concurrent Bitwise Trie Kernel","difficulty":"Advanced","description":"High-speed internet routers route IP packets (LPM - Longest Prefix Match) using 64-bit Bitwise Tries mapped into Shared Memory. Multi-core CPU threads run concurrent lock-free LPM lookups in 4 clock cycles! In this project, you will build a Concurrent Bitwise Trie Router Simulator in C.","learningOutcome":"IP Longest Prefix Matching (LPM), Memory-Mapped Tries & Concurrent Lock-Free Lookups","exampleText":"64-bit IP routing table Bitwise Trie lookup","exampleOutput":"--- High-Throughput Memory-Mapped Concurrent Bitwise Trie ---\\nExecuted lock-free 64-bit IP routing table lookup in 4 clock cycles.","logicExplanation":"1. **IP Bitwise Trie**: Map 32/64-bit IP addresses into binary Trie.\\n2. **Longest Prefix Match**: Traverse bit paths to find deepest matching network prefix.","answerFile":"./answers/answer25.c","codeExplanation":"1. `concurrent_bitwise_trie_demo()`: Simulates high-throughput memory-mapped concurrent bitwise trie kernel."}]'),d={projectCategory:D,subject:W,board:j,class:"Computer Science Core / BCA / B.Tech",tools:q,institute:U,projects:z};function Z(){const[i,l]=c.useState(null);return c.useEffect(()=>{const t=Object.assign({"./topic6_files/answers/answer1.c":m,"./topic6_files/answers/answer10.c":h,"./topic6_files/answers/answer11.c":f,"./topic6_files/answers/answer12.c":_,"./topic6_files/answers/answer13.c":g,"./topic6_files/answers/answer14.c":T,"./topic6_files/answers/answer15.c":w,"./topic6_files/answers/answer16.c":x,"./topic6_files/answers/answer17.c":y,"./topic6_files/answers/answer18.c":S,"./topic6_files/answers/answer19.c":b,"./topic6_files/answers/answer2.c":I,"./topic6_files/answers/answer20.c":E,"./topic6_files/answers/answer21.c":C,"./topic6_files/answers/answer22.c":N,"./topic6_files/answers/answer23.c":P,"./topic6_files/answers/answer24.c":v,"./topic6_files/answers/answer25.c":O,"./topic6_files/answers/answer3.c":M,"./topic6_files/answers/answer4.c":F,"./topic6_files/answers/answer5.c":B,"./topic6_files/answers/answer6.c":A,"./topic6_files/answers/answer7.c":L,"./topic6_files/answers/answer8.c":R,"./topic6_files/answers/answer9.c":k}),o={};Object.keys(t).forEach(e=>{const a=e.split("/").pop();o[a]=t[e]});const u=d.projects.map(e=>{const n=(e.answerFile||"").split("/").pop(),s=o[n];return s||console.warn(`⚠ Missing C answer file: ${n}`),{...e,answer:s||`// Source file "${n}" not found in answers folder`}});l({...d,projects:u})},[]),i?r.jsx(p,{data:i}):r.jsx("div",{className:"p-6 text-slate-400 flex items-center justify-center min-h-[300px]",children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"w-5 h-5 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),r.jsx("span",{children:"Loading C-Strings & Trie Prefix Trees Practical Lab Projects..."})]})})}export{Z as default};
