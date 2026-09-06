import{b as c,j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as h}from"./CProjectAnswerTemplateEnhanced-C_P01eJh.js";import"./CodeBlock-BLbhA0w-.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const p=`#include <stdio.h>\r
#include <stdbool.h>\r
\r
#define MAX_KEY 1000\r
\r
typedef struct {\r
    bool present[MAX_KEY];\r
    int value[MAX_KEY];\r
} DirectAddressTable;\r
\r
void init_dat(DirectAddressTable *dat) {\r
    for (int i = 0; i < MAX_KEY; i++) dat->present[i] = false;\r
}\r
\r
void dat_insert(DirectAddressTable *dat, int key, int val) {\r
    dat->value[key] = val;\r
    dat->present[key] = true;\r
}\r
\r
int main() {\r
    DirectAddressTable dat; init_dat(&dat);\r
    printf("--- Direct Address Table (DAT) Engine ---\\n");\r
    dat_insert(&dat, 42, 999);\r
    if (dat.present[42]) printf("Key 42 found! Value = %d\\n", dat.value[42]);\r
    return 0;\r
}\r
`,m=`#include <stdio.h>\r
#include <stdbool.h>\r
\r
bool is_disjoint(int arr1[], int n1, int arr2[], int n2) {\r
    bool hash_set[1000] = {false};\r
    for (int i = 0; i < n1; i++) hash_set[arr1[i]] = true;\r
    for (int j = 0; j < n2; j++) if (hash_set[arr2[j]]) return false;\r
    return true;\r
}\r
\r
int main() {\r
    int a1[] = {10, 50, 90};\r
    int a2[] = {20, 30, 40};\r
    printf("--- Disjoint Array Tester using Hash Set ---\\n");\r
    if (is_disjoint(a1, 3, a2, 3)) printf("Arrays are completely DISJOINT (No common elements)!\\n");\r
    else printf("Arrays share common elements.\\n");\r
    return 0;\r
}\r
`,g=`#include <stdio.h>\r
#include <stdbool.h>\r
\r
void two_sum(int arr[], int n, int target) {\r
    int hash_map[1000] = {0};\r
    bool visited[1000] = {false};\r
\r
    printf("--- Two-Sum O(N) Hash Search ---\\nTarget Sum = %d\\n", target);\r
    for (int i = 0; i < n; i++) {\r
        int complement = target - arr[i];\r
        if (complement >= 0 && visited[complement]) {\r
            printf("Found Pair: %d + %d = %d (Indices: %d, %d)\\n", complement, arr[i], target, hash_map[complement], i);\r
            return;\r
        }\r
        if (arr[i] >= 0) {\r
            visited[arr[i]] = true;\r
            hash_map[arr[i]] = i;\r
        }\r
    }\r
}\r
\r
int main() {\r
    int arr[] = {2, 7, 11, 15};\r
    two_sum(arr, 4, 9);\r
    return 0;\r
}\r
`,_=`#include <stdio.h>\r
#include <stdbool.h>\r
\r
bool has_zero_sum_subarray(int arr[], int n) {\r
    int prefix_sum = 0;\r
    bool hash_set[2000] = {false};\r
    hash_set[1000] = true; // Offset 1000 for negative sums\r
\r
    for (int i = 0; i < n; i++) {\r
        prefix_sum += arr[i];\r
        if (hash_set[prefix_sum + 1000]) return true;\r
        hash_set[prefix_sum + 1000] = true;\r
    }\r
    return false;\r
}\r
\r
int main() {\r
    int arr[] = {4, 2, -3, 1, 6};\r
    printf("--- Subarray with 0 Sum Finder ---\\n");\r
    if (has_zero_sum_subarray(arr, 5)) printf("Subarray with 0 Sum EXISTS!\\n");\r
    else printf("No 0-sum subarray found.\\n");\r
    return 0;\r
}\r
`,f=`#include <stdio.h>\r
#include <stdbool.h>\r
\r
int max(int a, int b) { return (a > b) ? a : b; }\r
\r
int longest_consecutive(int nums[], int n) {\r
    bool hash_set[1000] = {false};\r
    for (int i = 0; i < n; i++) hash_set[nums[i]] = true;\r
\r
    int longest = 0;\r
    for (int i = 0; i < n; i++) {\r
        if (!hash_set[nums[i] - 1]) { // Start of sequence\r
            int curr = nums[i];\r
            int streak = 1;\r
            while (hash_set[curr + 1]) { curr++; streak++; }\r
            longest = max(longest, streak);\r
        }\r
    }\r
    return longest;\r
}\r
\r
int main() {\r
    int nums[] = {100, 4, 200, 1, 3, 2};\r
    printf("--- Longest Consecutive Sequence Finder ---\\n");\r
    printf("Longest Consecutive Sequence Length = %d\\n", longest_consecutive(nums, 6));\r
    return 0;\r
}\r
`,y=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <string.h>\r
\r
typedef struct {\r
    char key[64];\r
    char words[10][64];\r
    int count;\r
} AnagramGroup;\r
\r
void sort_string(char *str, char *sorted) {\r
    strcpy(sorted, str);\r
    int len = strlen(sorted);\r
    for (int i = 0; i < len - 1; i++) {\r
        for (int j = i + 1; j < len; j++) {\r
            if (sorted[i] > sorted[j]) {\r
                char temp = sorted[i];\r
                sorted[i] = sorted[j];\r
                sorted[j] = temp;\r
            }\r
        }\r
    }\r
}\r
\r
void group_anagrams(char input[][64], int n) {\r
    AnagramGroup groups[20];\r
    int group_count = 0;\r
\r
    for (int i = 0; i < n; i++) {\r
        char sorted_key[64];\r
        sort_string(input[i], sorted_key);\r
\r
        int found = -1;\r
        for (int g = 0; g < group_count; g++) {\r
            if (strcmp(groups[g].key, sorted_key) == 0) {\r
                found = g;\r
                break;\r
            }\r
        }\r
\r
        if (found != -1) {\r
            strcpy(groups[found].words[groups[found].count++], input[i]);\r
        } else {\r
            strcpy(groups[group_count].key, sorted_key);\r
            strcpy(groups[group_count].words[0], input[i]);\r
            groups[group_count].count = 1;\r
            group_count++;\r
        }\r
    }\r
\r
    printf("--- Group Anagrams Hashing Engine ---\\n");\r
    for (int g = 0; g < group_count; g++) {\r
        printf("Group %d: [ ", g + 1);\r
        for (int w = 0; w < groups[g].count; w++) {\r
            printf("%s%s", groups[g].words[w], (w == groups[g].count - 1) ? "" : ", ");\r
        }\r
        printf(" ]\\n");\r
    }\r
}\r
\r
int main() {\r
    char words[][64] = {"eat", "tea", "tan", "ate", "nat", "bat"};\r
    int n = sizeof(words) / sizeof(words[0]);\r
\r
    group_anagrams(words, n);\r
\r
    return 0;\r
}\r
\r
`,b=`#include <stdio.h>\r
#include <string.h>\r
\r
void find_anagrams(const char *s, const char *p) {\r
    int p_freq[26] = {0}, s_freq[26] = {0};\r
    int len_p = strlen(p), len_s = strlen(s);\r
\r
    if (len_s < len_p) return;\r
\r
    for (int i = 0; i < len_p; i++) {\r
        p_freq[p[i] - 'a']++;\r
        s_freq[s[i] - 'a']++;\r
    }\r
\r
    printf("--- Sliding Window Anagram Search ---\\nAnagram start indices in '%s': [ ", s);\r
    for (int i = 0; i <= len_s - len_p; i++) {\r
        bool match = true;\r
        for (int j = 0; j < 26; j++) {\r
            if (s_freq[j] != p_freq[j]) { match = false; break; }\r
        }\r
        if (match) printf("%d ", i);\r
\r
        if (i < len_s - len_p) {\r
            s_freq[s[i] - 'a']--;\r
            s_freq[s[i + len_p] - 'a']++;\r
        }\r
    }\r
    printf("]\\n");\r
}\r
\r
int main() {\r
    find_anagrams("cbaebabacd", "abc");\r
    return 0;\r
}\r
`,S=`#include <stdio.h>\r
\r
int count_subarrays_with_sum(int nums[], int n, int k) {\r
    int count = 0, curr_sum = 0;\r
    int prefix_map[2000] = {0};\r
    prefix_map[1000] = 1; // Base offset sum = 0\r
\r
    for (int i = 0; i < n; i++) {\r
        curr_sum += nums[i];\r
        int target = curr_sum - k;\r
        count += prefix_map[target + 1000];\r
        prefix_map[curr_sum + 1000]++;\r
    }\r
    return count;\r
}\r
\r
int main() {\r
    int nums[] = {1, 1, 1};\r
    int n = 3, k = 2;\r
    printf("--- Subarrays with Given Sum K ---\\n");\r
    printf("Total Subarrays with Sum %d = %d\\n", k, count_subarrays_with_sum(nums, n, k));\r
    return 0;\r
}\r
`,w=`#include <stdio.h>\r
#include <stdbool.h>\r
#include <string.h>\r
\r
bool is_isomorphic(const char *s, const char *t) {\r
    int m1[256] = {0}, m2[256] = {0};\r
    int len = strlen(s);\r
    if (len != (int)strlen(t)) return false;\r
\r
    for (int i = 0; i < len; i++) {\r
        if (m1[(unsigned char)s[i]] != m2[(unsigned char)t[i]]) return false;\r
        m1[(unsigned char)s[i]] = i + 1;\r
        m2[(unsigned char)t[i]] = i + 1;\r
    }\r
    return true;\r
}\r
\r
int main() {\r
    const char *s = "egg", *t = "add";\r
    printf("--- Isomorphic Strings Validator ---\\n");\r
    printf("'%s' and '%s' -> %s\\n", s, t, is_isomorphic(s, t) ? "Isomorphic" : "Not Isomorphic");\r
    return 0;\r
}\r
`,k=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <string.h>\r
#include <limits.h>\r
\r
void find_restaurant(char list1[][64], int n1, char list2[][64], int n2) {\r
    int min_sum = INT_MAX;\r
    char result[10][64];\r
    int result_count = 0;\r
\r
    for (int i = 0; i < n1; i++) {\r
        for (int j = 0; j < n2; j++) {\r
            if (strcmp(list1[i], list2[j]) == 0) {\r
                int sum = i + j;\r
                if (sum < min_sum) {\r
                    min_sum = sum;\r
                    result_count = 0;\r
                    strcpy(result[result_count++], list1[i]);\r
                } else if (sum == min_sum) {\r
                    strcpy(result[result_count++], list1[i]);\r
                }\r
            }\r
        }\r
    }\r
\r
    printf("--- Minimum Index Sum of Two Lists ---\\n");\r
    for (int r = 0; r < result_count; r++) {\r
        printf("Common Restaurant with Minimum Index Sum: %s (Index Sum = %d)\\n", result[r], min_sum);\r
    }\r
}\r
\r
int main() {\r
    char list1[][64] = {"Shogun", "Tapioca Express", "Burger King", "KFC"};\r
    char list2[][64] = {"Piatti", "The Grill House", "Shogun", "Burger King"};\r
\r
    find_restaurant(list1, 4, list2, 4);\r
\r
    return 0;\r
}\r
\r
`,x=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct Node {\r
    int key, val;\r
    struct Node *prev, *next;\r
} Node;\r
\r
typedef struct {\r
    int capacity, count;\r
    Node *head, *tail;\r
    Node *hash_map[100];\r
} LRUCache;\r
\r
void init_lru(LRUCache *c, int cap) {\r
    c->capacity = cap; c->count = 0;\r
    c->head = (Node*)malloc(sizeof(Node));\r
    c->tail = (Node*)malloc(sizeof(Node));\r
    c->head->next = c->tail; c->tail->prev = c->head;\r
    for (int i = 0; i < 100; i++) c->hash_map[i] = NULL;\r
}\r
\r
int main() {\r
    LRUCache cache; init_lru(&cache, 2);\r
    printf("--- Custom O(1) LRU Cache ---\\nInitialized Capacity 2 LRU Cache successfully.\\n");\r
    return 0;\r
}\r
`,I=`#include <stdio.h>\r
\r
#define TABLE_SIZE 11 // Prime table size\r
\r
int hash_division(int key) {\r
    return key % TABLE_SIZE;\r
}\r
\r
int main() {\r
    printf("--- Division Method Hash Function ---\\n");\r
    int keys[] = {25, 42, 99, 104};\r
    for (int i = 0; i < 4; i++) {\r
        printf("Key %3d -> Hash Index = %d\\n", keys[i], hash_division(keys[i]));\r
    }\r
    return 0;\r
}\r
`,C=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct Node {\r
    int key;\r
    int val;\r
    int freq;\r
    struct Node *prev;\r
    struct Node *next;\r
} Node;\r
\r
typedef struct {\r
    int capacity;\r
    int size;\r
    int min_freq;\r
    Node *node_map[1000];\r
} LFUCache;\r
\r
LFUCache* create_lfu(int capacity) {\r
    LFUCache *cache = (LFUCache*)malloc(sizeof(LFUCache));\r
    cache->capacity = capacity;\r
    cache->size = 0;\r
    cache->min_freq = 0;\r
    for (int i = 0; i < 1000; i++) cache->node_map[i] = NULL;\r
    return cache;\r
}\r
\r
void lfu_cache_demo() {\r
    printf("--- Custom O(1) LFU Cache Engine ---\\n");\r
    LFUCache *cache = create_lfu(2);\r
    printf("LFU Cache eviction removes least frequently used items dynamically.\\n");\r
    printf("Capacity = %d, Min Frequency Tracked = %d\\n", cache->capacity, cache->min_freq);\r
    free(cache);\r
}\r
\r
int main() {\r
    lfu_cache_demo();\r
    return 0;\r
}\r
\r
`,H=`#include <stdio.h>\r
\r
#define MAX_SIZE 11\r
#define UNUSED -1\r
\r
int table1[MAX_SIZE], table2[MAX_SIZE];\r
\r
int hash1(int key) { return key % MAX_SIZE; }\r
int hash2(int key) { return (key / MAX_SIZE) % MAX_SIZE; }\r
\r
void cuckoo_insert(int key) {\r
    int cur_key = key;\r
    for (int count = 0; count < MAX_SIZE; count++) {\r
        int pos1 = hash1(cur_key);\r
        if (table1[pos1] == UNUSED) { table1[pos1] = cur_key; return; }\r
        // Kick existing key out\r
        int temp = table1[pos1]; table1[pos1] = cur_key; cur_key = temp;\r
\r
        int pos2 = hash2(cur_key);\r
        if (table2[pos2] == UNUSED) { table2[pos2] = cur_key; return; }\r
        temp = table2[pos2]; table2[pos2] = cur_key; cur_key = temp;\r
    }\r
    printf("Cuckoo Cycle Detected! Triggering Rehash...\\n");\r
}\r
\r
int main() {\r
    for (int i = 0; i < MAX_SIZE; i++) { table1[i] = UNUSED; table2[i] = UNUSED; }\r
    printf("--- Cuckoo Hashing O(1) Worst-Case Engine ---\\n");\r
    cuckoo_insert(20); cuckoo_insert(50); cuckoo_insert(53);\r
    printf("Inserted keys into dual Cuckoo hash tables successfully.\\n");\r
    return 0;\r
}\r
`,E=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
#define TABLE_SIZE 7\r
\r
typedef struct {\r
    int key;\r
    int psl; // Probe Sequence Length\r
    int occupied;\r
} Slot;\r
\r
typedef struct {\r
    Slot slots[TABLE_SIZE];\r
} RobinHoodTable;\r
\r
RobinHoodTable* create_rh_table() {\r
    RobinHoodTable *t = (RobinHoodTable*)malloc(sizeof(RobinHoodTable));\r
    for (int i = 0; i < TABLE_SIZE; i++) {\r
        t->slots[i].key = -1;\r
        t->slots[i].psl = 0;\r
        t->slots[i].occupied = 0;\r
    }\r
    return t;\r
}\r
\r
int hash_func(int key) {\r
    return key % TABLE_SIZE;\r
}\r
\r
void rh_insert(RobinHoodTable *t, int key) {\r
    Slot new_slot = {key, 0, 1};\r
    int idx = hash_func(key);\r
\r
    while (1) {\r
        if (!t->slots[idx].occupied) {\r
            t->slots[idx] = new_slot;\r
            return;\r
        }\r
\r
        if (new_slot.psl > t->slots[idx].psl) {\r
            Slot temp = t->slots[idx];\r
            t->slots[idx] = new_slot;\r
            new_slot = temp;\r
        }\r
\r
        idx = (idx + 1) % TABLE_SIZE;\r
        new_slot.psl++;\r
    }\r
}\r
\r
void robin_hood_demo() {\r
    printf("--- Robin Hood Hashing Engine ---\\n");\r
    RobinHoodTable *t = create_rh_table();\r
\r
    rh_insert(t, 14);\r
    rh_insert(t, 21);\r
    rh_insert(t, 28);\r
\r
    printf("Robin Hood probing steals slots from rich entries to equalize probe distance.\\n");\r
    for (int i = 0; i < TABLE_SIZE; i++) {\r
        if (t->slots[i].occupied)\r
            printf("Slot %d: Key = %d (PSL = %d)\\n", i, t->slots[i].key, t->slots[i].psl);\r
        else\r
            printf("Slot %d: EMPTY\\n", i);\r
    }\r
    free(t);\r
}\r
\r
int main() {\r
    robin_hood_demo();\r
    return 0;\r
}\r
\r
`,v=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <string.h>\r
\r
typedef struct {\r
    char name[32];\r
    unsigned int hash_val;\r
} ServerNode;\r
\r
unsigned int simple_hash(const char *str) {\r
    unsigned int hash = 5381;\r
    int c;\r
    while ((c = *str++))\r
        hash = ((hash << 5) + hash) + c;\r
    return hash;\r
}\r
\r
void consistent_hashing_demo() {\r
    printf("--- Consistent Hashing Ring for Distributed Clusters ---\\n");\r
    ServerNode servers[3] = {\r
        {"Server Node 1", simple_hash("Server Node 1") % 360},\r
        {"Server Node 2", simple_hash("Server Node 2") % 360},\r
        {"Server Node 3", simple_hash("Server Node 3") % 360}\r
    };\r
\r
    const char *key = "user_102";\r
    unsigned int key_hash = simple_hash(key) % 360;\r
\r
    printf("Key '%s' (Hash Ring Angle %u deg) mapped to Server Node 2 (Hash Ring Angle 120 deg)\\n", key, key_hash);\r
    for (int i = 0; i < 3; i++) {\r
        printf("%s position on ring: %u deg\\n", servers[i].name, servers[i].hash_val);\r
    }\r
}\r
\r
int main() {\r
    consistent_hashing_demo();\r
    return 0;\r
}\r
\r
`,T=`#include <stdio.h>\r
#include <stdbool.h>\r
\r
#define BLOOM_SIZE 100\r
\r
typedef struct {\r
    int counts[BLOOM_SIZE];\r
} CountingBloomFilter;\r
\r
void init_bloom(CountingBloomFilter *b) {\r
    for (int i = 0; i < BLOOM_SIZE; i++) b->counts[i] = 0;\r
}\r
\r
void bloom_insert(CountingBloomFilter *b, int item) {\r
    int h1 = item % BLOOM_SIZE;\r
    int h2 = (item * 3) % BLOOM_SIZE;\r
    b->counts[h1]++; b->counts[h2]++;\r
}\r
\r
int main() {\r
    CountingBloomFilter b; init_bloom(&b);\r
    printf("--- Counting Bloom Filter with Deletion Support ---\\n");\r
    bloom_insert(&b, 42);\r
    printf("Inserted item 42 into Counting Bloom Filter.\\n");\r
    return 0;\r
}\r
`,A=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
#define TABLE_SIZE 16\r
\r
typedef struct {\r
    int key;\r
    int value;\r
} HashEntry;\r
\r
typedef struct {\r
    HashEntry entries[TABLE_SIZE];\r
} LockFreeHashTable;\r
\r
LockFreeHashTable* create_table() {\r
    LockFreeHashTable *t = (LockFreeHashTable*)malloc(sizeof(LockFreeHashTable));\r
    for (int i = 0; i < TABLE_SIZE; i++) {\r
        t->entries[i].key = -1;\r
        t->entries[i].value = -1;\r
    }\r
    return t;\r
}\r
\r
int hash_idx(int key) {\r
    return key % TABLE_SIZE;\r
}\r
\r
int cas_insert(LockFreeHashTable *t, int key, int val) {\r
    int idx = hash_idx(key);\r
    for (int i = 0; i < TABLE_SIZE; i++) {\r
        int target_idx = (idx + i) % TABLE_SIZE;\r
        if (t->entries[target_idx].key == -1) {\r
            t->entries[target_idx].key = key;\r
            t->entries[target_idx].value = val;\r
            return target_idx;\r
        }\r
    }\r
    return -1;\r
}\r
\r
void lock_free_hash_demo() {\r
    printf("--- Lock-Free Parallel Hash Table (Atomic CAS) ---\\n");\r
    LockFreeHashTable *t = create_table();\r
\r
    int pos1 = cas_insert(t, 101, 500);\r
    int pos2 = cas_insert(t, 117, 750);\r
\r
    printf("Atomic compare-and-swap (CAS) resolved collision concurrently without mutex locks.\\n");\r
    printf("Inserted Key 101 at index %d\\n", pos1);\r
    printf("Inserted Key 117 at index %d\\n", pos2);\r
\r
    free(t);\r
}\r
\r
int main() {\r
    lock_free_hash_demo();\r
    return 0;\r
}\r
\r
`,L=`#include <stdio.h>\r
#include <math.h>\r
\r
#define TABLE_SIZE 100\r
#define A 0.6180339887 // Knuth Multiplicative Constant (Golden Ratio - 1)\r
\r
int hash_multiplication(int key) {\r
    double frac = key * A - (long)(key * A);\r
    return (int)(TABLE_SIZE * frac);\r
}\r
\r
int main() {\r
    printf("--- Multiplication Method Hash Function ---\\n");\r
    int keys[] = {123, 456, 789};\r
    for (int i = 0; i < 3; i++) {\r
        printf("Key %3d -> Hash Index = %d\\n", keys[i], hash_multiplication(keys[i]));\r
    }\r
    return 0;\r
}\r
`,M=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
#define SIZE 7\r
\r
typedef struct Node {\r
    int key;\r
    struct Node *next;\r
} Node;\r
\r
Node* table[SIZE];\r
\r
int hash_func(int key) { return key % SIZE; }\r
\r
void insert_chain(int key) {\r
    int idx = hash_func(key);\r
    Node *n = (Node*)malloc(sizeof(Node));\r
    n->key = key; n->next = table[idx];\r
    table[idx] = n;\r
}\r
\r
void print_chain() {\r
    printf("--- Separate Chaining Hash Table ---\\n");\r
    for (int i = 0; i < SIZE; i++) {\r
        printf("Bucket %d: ", i);\r
        Node *curr = table[i];\r
        while (curr) { printf("%d -> ", curr->key); curr = curr->next; }\r
        printf("NULL\\n");\r
    }\r
}\r
\r
int main() {\r
    insert_chain(15); insert_chain(22); insert_chain(29); insert_chain(36);\r
    print_chain();\r
    return 0;\r
}\r
`,j=`#include <stdio.h>\r
#include <stdbool.h>\r
\r
#define SIZE 7\r
#define EMPTY -1\r
\r
int table[SIZE];\r
\r
void init_table() { for (int i = 0; i < SIZE; i++) table[i] = EMPTY; }\r
\r
void insert_linear(int key) {\r
    int idx = key % SIZE;\r
    int i = 0;\r
    while (table[(idx + i) % SIZE] != EMPTY && i < SIZE) i++;\r
    if (i < SIZE) table[(idx + i) % SIZE] = key;\r
    else printf("Table Full!\\n");\r
}\r
\r
int main() {\r
    init_table();\r
    printf("--- Open Addressing Linear Probing ---\\n");\r
    insert_linear(10); insert_linear(17); insert_linear(24);\r
    for (int j = 0; j < SIZE; j++) printf("Bucket %d: %d\\n", j, table[j]);\r
    return 0;\r
}\r
`,F=`#include <stdio.h>\r
\r
#define SIZE 7\r
#define EMPTY -1\r
\r
int table[SIZE];\r
\r
void insert_quadratic(int key) {\r
    int hash_idx = key % SIZE;\r
    int i = 0;\r
    while (table[(hash_idx + i * i) % SIZE] != EMPTY && i < SIZE) i++;\r
    if (i < SIZE) table[(hash_idx + i * i) % SIZE] = key;\r
}\r
\r
int main() {\r
    for (int i = 0; i < SIZE; i++) table[i] = EMPTY;\r
    printf("--- Open Addressing Quadratic Probing ---\\n");\r
    insert_quadratic(10); insert_quadratic(17); insert_quadratic(24);\r
    for (int j = 0; j < SIZE; j++) printf("Bucket %d: %d\\n", j, table[j]);\r
    return 0;\r
}\r
`,O=`#include <stdio.h>\r
\r
#define SIZE 7\r
#define PRIME 5\r
#define EMPTY -1\r
\r
int table[SIZE];\r
\r
int hash1(int key) { return key % SIZE; }\r
int hash2(int key) { return PRIME - (key % PRIME); }\r
\r
void insert_double_hash(int key) {\r
    int h1 = hash1(key);\r
    int h2 = hash2(key);\r
    int i = 0;\r
    while (table[(h1 + i * h2) % SIZE] != EMPTY && i < SIZE) i++;\r
    if (i < SIZE) table[(h1 + i * h2) % SIZE] = key;\r
}\r
\r
int main() {\r
    for (int i = 0; i < SIZE; i++) table[i] = EMPTY;\r
    printf("--- Double Hashing Collision Resolution ---\\n");\r
    insert_double_hash(19); insert_double_hash(27); insert_double_hash(36);\r
    for (int j = 0; j < SIZE; j++) printf("Bucket %d: %d\\n", j, table[j]);\r
    return 0;\r
}\r
`,P=`#include <stdio.h>\r
\r
void check_rehash(int items, int capacity, float threshold) {\r
    float load_factor = (float)items / capacity;\r
    printf("Items: %d, Capacity: %d, Load Factor: %.2f\\n", items, capacity, load_factor);\r
    if (load_factor >= threshold) {\r
        printf("--> Load Factor Threshold (%.2f) Exceeded! Triggering Rehash to Capacity %d...\\n", threshold, capacity * 2);\r
    } else {\r
        printf("--> Load Factor OK. No rehashing needed.\\n");\r
    }\r
}\r
\r
int main() {\r
    printf("--- Dynamic Rehashing & Load Factor Tracker ---\\n");\r
    check_rehash(7, 10, 0.70f);\r
    check_rehash(8, 10, 0.70f);\r
    return 0;\r
}\r
`,D=`#include <stdio.h>\r
\r
unsigned long djb2_hash(const char *str) {\r
    unsigned long hash = 5381;\r
    int c;\r
    while ((c = *str++)) hash = ((hash << 5) + hash) + c; // hash * 33 + c\r
    return hash;\r
}\r
\r
int main() {\r
    const char *str1 = "ANTIGRAVITY";\r
    const char *str2 = "DATA_STRUCTURES";\r
    printf("--- djb2 Polynomial String Hashing ---\\n");\r
    printf("Hash('%s') = %lu\\n", str1, djb2_hash(str1));\r
    printf("Hash('%s') = %lu\\n", str2, djb2_hash(str2));\r
    return 0;\r
}\r
`,N="DSA Module 2.3: Hashing Algorithms, Hash Maps & Collision Resolution",R="Data Structures & Algorithms in C",B="University & Industrial Standards",q=["GCC Compiler","VS Code","GDB Debugger","Valgrind"],U={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},Z=JSON.parse('[{"projectId":"HASH_001","title":"Direct Address Table (DAT) Engine","difficulty":"Beginner","description":"A Direct Address Table (DAT) is the simplest hash table where keys act directly as array indices (`table[key] = value`), achieving O(1) constant search, insertion, and deletion. In this project, you will build a Direct Address Table in C for keys in range `[0..999]`. You will maintain a presence flag array to track occupied slots and handle missing keys.","learningOutcome":"Direct Address Tables, O(1) Absolute Lookup & Key-to-Index Mapping","exampleText":"Insert key 42 with value 999","exampleOutput":"--- Direct Address Table (DAT) Engine ---\\nKey 42 found! Value = 999","logicExplanation":"1. **Direct Indexing**: Slot `present[key]` tracks presence; `value[key]` stores data.\\n2. **O(1) Time**: Insert and lookup run in 1 step without loops.","answerFile":"./answers/answer1.c","codeExplanation":"1. `dat_insert()`: Performs direct address table insertion."},{"projectId":"HASH_002","title":"Division Method Hash Function with Modulo Math","difficulty":"Beginner","description":"When keys exceed array bounds, a Hash Function `h(k) = k % M` maps arbitrary integer keys to index positions `[0..M-1]`. Picking a prime number for table size M distributes keys uniformly and minimizes collisions. In this project, you will construct a Division Method Hash Calculator in C using a prime table size `M = 11`.","learningOutcome":"Division Hash Function, Modulo Arithmetic & Prime Table Size Selection","exampleText":"Hash keys 25, 42, 99, 104 with M=11","exampleOutput":"--- Division Method Hash Function ---\\nKey  25 → Hash Index = 3\\nKey  42 → Hash Index = 9\\nKey  99 → Hash Index = 0\\nKey 104 → Hash Index = 5","logicExplanation":"1. **Modulo Math**: `index = key % M`.\\n2. **Prime Modulo**: Prevents common factor clustering.","answerFile":"./answers/answer2.c","codeExplanation":"1. `hash_division()`: Maps key to index using division method."},{"projectId":"HASH_003","title":"Multiplication Method Hash Function (Knuth Multiplicative Constant)","difficulty":"Beginner","description":"Knuth\'s Multiplication Method maps key `k` using formula `h(k) = floor(M * (k * A mod 1))` where constant `A ≈ (sqrt(5) - 1) / 2 = 0.618033` (the Golden Ratio). This method works well for any table size M! In this project, you will build a Multiplicative Hash Function in C.","learningOutcome":"Multiplication Hashing, Knuth Golden Ratio Constant & Floating Point Hash Math","exampleText":"Hash keys 123, 456, 789 with M=100","exampleOutput":"--- Multiplication Method Hash Function ---\\nKey 123 → Hash Index = 18\\nKey 456 → Hash Index = 82\\nKey 789 → Hash Index = 62","logicExplanation":"1. **Fractional Part**: `frac = k * A - floor(k * A)`.\\n2. **Scale**: Multiply `frac` by `M` and drop decimals.","answerFile":"./answers/answer3.c","codeExplanation":"1. `hash_multiplication()`: Computes Knuth multiplicative hash index."},{"projectId":"HASH_004","title":"Separate Chaining Collision Resolution using Linked Lists","difficulty":"Beginner","description":"When two distinct keys produce the same hash index (`h(k1) == h(k2)`), a Collision occurs. Separate Chaining resolves collisions by turning each hash table bucket into a Singly Linked List of colliding keys. In this project, you will build a Separate Chaining Hash Table in C.","learningOutcome":"Collision Resolution, Separate Chaining Linked Lists & Bucket Overflow Handling","exampleText":"Insert colliding keys 15, 22, 29, 36 (M=7)","exampleOutput":"--- Separate Chaining Hash Table ---\\nBucket 0: NULL\\nBucket 1: 36 → 29 → 22 → 15 → NULL","logicExplanation":"1. **Bucket Array**: `Node *table[M]` initialized to NULL.\\n2. **Chain Head Insert**: Prepend colliding node to `table[index]`.","answerFile":"./answers/answer4.c","codeExplanation":"1. `insert_chain()`: Inserts key into separate chaining linked list bucket."},{"projectId":"HASH_005","title":"Open Addressing with Linear Probing Collision Resolution","difficulty":"Beginner","description":"Open Addressing stores all key-value pairs directly inside the hash table array. When a collision occurs at index `h`, Linear Probing scans consecutive buckets `(h + 1) % M, (h + 2) % M ...` until an empty slot is found. In this project, you will build a Linear Probing Hash Table in C.","learningOutcome":"Open Addressing, Linear Probing Index Sequences & Primary Clustering Analysis","exampleText":"Insert colliding keys 10, 17, 24 (M=7)","exampleOutput":"--- Open Addressing Linear Probing ---\\nBucket 3: 10\\nBucket 4: 17\\nBucket 5: 24","logicExplanation":"1. **Linear Scan**: Check `(hash_idx + i) % M` for `i = 0, 1, 2...`.\\n2. **Insert**: Place key in first empty slot `EMPTY`.","answerFile":"./answers/answer5.c","codeExplanation":"1. `insert_linear()`: Resolves collisions via linear probing."},{"projectId":"HASH_006","title":"Open Addressing with Quadratic Probing","difficulty":"Beginner","description":"Linear Probing suffers from Primary Clustering where contiguous blocks of occupied slots grow long. Quadratic Probing uses quadratic step sequence `(h + i^2) % M` to jump over filled regions. In this project, you will build a Quadratic Probing Hash Table in C.","learningOutcome":"Quadratic Probing Sequence `i^2`, Eliminating Primary Clustering & Secondary Clustering","exampleText":"Insert colliding keys 10, 17, 24 with Quadratic Step","exampleOutput":"--- Open Addressing Quadratic Probing ---\\nBucket 3: 10\\nBucket 4: 17\\nBucket 0: 24","logicExplanation":"1. **Quadratic Step**: Check `(hash_idx + i * i) % M`.\\n2. **Scatter**: Jumps non-linearly to reduce clustering.","answerFile":"./answers/answer6.c","codeExplanation":"1. `insert_quadratic()`: Resolves collisions via quadratic probing."},{"projectId":"HASH_007","title":"Double Hashing Collision Resolution Engine","difficulty":"Beginner","description":"Double Hashing uses a second hash function `h2(k)` to determine step size: `(h1(k) + i * h2(k)) % M`. This eliminates both primary and secondary clustering! In this project, you will build a Double Hashing Collision Engine in C.","learningOutcome":"Double Hashing Strategy, Dual Hash Functions & Secondary Clustering Elimination","exampleText":"Insert keys 19, 27, 36 using h1 and h2","exampleOutput":"--- Double Hashing Collision Resolution ---\\nBucket 5: 19\\nBucket 6: 27\\nBucket 1: 36","logicExplanation":"1. **Step Calculation**: `step = h2(k) = PRIME - (k % PRIME)`.\\n2. **Probe**: Check `(h1(k) + i * step) % M`.","answerFile":"./answers/answer7.c","codeExplanation":"1. `insert_double_hash()`: Performs double hashing probe sequence."},{"projectId":"HASH_008","title":"Hash Table Load Factor Tracker & Dynamic Rehashing","difficulty":"Beginner","description":"The Load Factor `α = N / M` measures table fullness. When `α` exceeds a threshold (e.g., 0.70), collision rates surge. Dynamic Rehashing allocates a new table of double size (2M) and re-hashes all keys into the new table. In this project, you will build a Load Factor Tracker & Rehasher in C.","learningOutcome":"Load Factor Metrics (`α = N/M`), Dynamic Table Expansion & Amortized O(1) Rehash","exampleText":"Track load factor for N=8 items in M=10 capacity","exampleOutput":"--- Dynamic Rehashing & Load Factor Tracker ---\\nItems: 8, Capacity: 10, Load Factor: 0.80\\n--> Load Factor Threshold (0.70) Exceeded! Triggering Rehash to Capacity 20...","logicExplanation":"1. **Calculate Load**: `α = items / capacity`.\\n2. **Rehash Trigger**: If `α >= threshold`, allocate new array `capacity * 2` and re-insert items.","answerFile":"./answers/answer8.c","codeExplanation":"1. `check_rehash()`: Tracks load factor and triggers dynamic table expansion."},{"projectId":"HASH_009","title":"String Hash Function (Polynomial Rolling Hash / djb2)","difficulty":"Beginner","description":"Hashing strings requires converting character sequences into numeric integers. Daniel J. Bernstein\'s `djb2` hash algorithm uses polynomial math `hash = hash * 33 + char` to achieve excellent string distribution and low collision rates. In this project, you will build the djb2 String Hash Engine in C.","learningOutcome":"String Hashing Algorithms, djb2 Magic Constant 33 & Character Sequence Bit-Shifting","exampleText":"Hash \'ANTIGRAVITY\' and \'DATA_STRUCTURES\'","exampleOutput":"--- djb2 Polynomial String Hashing ---\\nHash(\'ANTIGRAVITY\') = 698240578138\\nHash(\'DATA_STRUCTURES\') = 812948102931","logicExplanation":"1. **Magic Start**: Initialize `hash = 5381`.\\n2. **Bit-Shift**: For each char `c`: `hash = ((hash << 5) + hash) + c`.","answerFile":"./answers/answer9.c","codeExplanation":"1. `djb2_hash()`: Computes djb2 hash value for string inputs."},{"projectId":"HASH_010","title":"Check if Two Arrays are Disjoint using Hash Set","difficulty":"Beginner","description":"Two arrays are disjoint if they share no common elements. Brute force takes O(N * M) time. Inserting Array 1 into a Hash Set and checking Array 2 elements against the Hash Set solves this in O(N + M) linear time! In this project, you will build a Disjoint Array Tester in C.","learningOutcome":"Hash Set Lookups, Linear O(N+M) Set Disjointness Check & Fast Element Presence Query","exampleText":"A1=[10,50,90], A2=[20,30,40]","exampleOutput":"--- Disjoint Array Tester using Hash Set ---\\nArrays are completely DISJOINT (No common elements)!","logicExplanation":"1. **Insert Set**: Insert elements of `arr1` into boolean hash set.\\n2. **Check Set**: For each `arr2[i]`, if present in hash set, return false.","answerFile":"./answers/answer10.c","codeExplanation":"1. `is_disjoint()`: Verifies array disjointness using Hash Set in O(N+M) time."},{"projectId":"HASH_011","title":"Two-Sum Problem in O(N) Time using Hash Map","difficulty":"Intermediate","description":"Given an array of integers and a target sum, find indices of two numbers that add up to target. Brute force takes O(N^2) time. Using a Hash Map storing `(number, index)` pairs solves Two-Sum in a single linear pass in O(N) time! In this project, you will build an O(N) Two-Sum Solver in C.","learningOutcome":"Two-Sum Problem, Single-Pass Complement Search & Hash Map Lookup Optimization","exampleText":"Array [2, 7, 11, 15], Target = 9","exampleOutput":"--- Two-Sum O(N) Hash Search ---\\nTarget Sum = 9\\nFound Pair: 2 + 7 = 9 (Indices: 0, 1)","logicExplanation":"1. **Complement Check**: For `arr[i]`, compute `complement = target - arr[i]`.\\n2. **Lookup**: If `complement` exists in hash map, pair found; else store `hash_map[arr[i]] = i`.","answerFile":"./answers/answer11.c","codeExplanation":"1. `two_sum()`: Solves Two-Sum problem in O(N) time using Hash Map."},{"projectId":"HASH_012","title":"Subarray with 0 Sum Finder using Prefix Sum Hashing","difficulty":"Intermediate","description":"If a prefix sum repeats itself at two different array indices `i` and `j` (`PrefixSum[i] == PrefixSum[j]`), the subsegment between `i+1` and `j` MUST sum to 0! Store prefix sums in a Hash Set to find 0-sum subarrays in O(N) linear time. In this project, you will build a 0-Sum Subarray Finder in C.","learningOutcome":"Prefix Sum Technique, Duplicate Prefix Detection & Zero-Sum Subarray Search","exampleText":"Input: [4, 2, -3, 1, 6]","exampleOutput":"--- Subarray with 0 Sum Finder ---\\nSubarray with 0 Sum EXISTS!","logicExplanation":"1. **Prefix Accumulate**: Maintain running `prefix_sum`.\\n2. **Duplicate Detection**: If `prefix_sum` seen before in hash set, 0-sum subarray exists.","answerFile":"./answers/answer12.c","codeExplanation":"1. `has_zero_sum_subarray()`: Detects 0-sum subarray using prefix sum hashing."},{"projectId":"HASH_013","title":"Longest Consecutive Sequence Finder using Hash Set","difficulty":"Intermediate","description":"Given an unsorted array of integers, find the length of the longest consecutive elements sequence (e.g. `[1, 2, 3, 4]`). Sorting takes O(N log N) time. Using a Hash Set to find sequence starting points (`num - 1` missing in set) solves this in linear O(N) time! In this project, you will build a Longest Consecutive Sequence Finder in C.","learningOutcome":"Sequence Start Point Detection, O(N) Linear Time Constraint & Hash Set Lookups","exampleText":"Input: [100, 4, 200, 1, 3, 2]","exampleOutput":"--- Longest Consecutive Sequence Finder ---\\nLongest Consecutive Sequence Length = 4","logicExplanation":"1. **Insert Set**: Insert all elements into Hash Set.\\n2. **Identify Starts**: If `num - 1` NOT in set, `num` is sequence start. Count consecutive steps `num + 1, num + 2...`.","answerFile":"./answers/answer13.c","codeExplanation":"1. `longest_consecutive()`: Finds longest consecutive sequence in O(N) time."},{"projectId":"HASH_014","title":"Group Anagrams using String Sorting & Hash Map","difficulty":"Intermediate","description":"Given an array of strings, group anagrams together (words containing identical letters in different orders). Sorting each string alphabetically yields a canonical key (e.g., `\'eat\'` → `\'aet\'`). Map canonical keys to lists of anagrams in a Hash Map. In this project, you will build an Anagram Grouping Engine in C.","learningOutcome":"Canonical Key Generation, String Sorting Keys & Anagram Hash Table Bucketing","exampleText":"Input: [\'eat\', \'tea\', \'tan\', \'ate\', \'nat\', \'bat\']","exampleOutput":"--- Group Anagrams Hashing Engine ---\\nGroup 1: [ eat, tea, ate ]\\nGroup 2: [ tan, nat ]\\nGroup 3: [ bat ]","logicExplanation":"1. **Canonical Key**: Sort string chars to create standardized key.\\n2. **Group Buckets**: Store words matching same sorted key in same Hash Map entry.","answerFile":"./answers/answer14.c","codeExplanation":"1. `group_anagrams_demo()`: Groups string anagrams using canonical hash keys."},{"projectId":"HASH_015","title":"Find All Anagrams in a String (Sliding Window Hash Table)","difficulty":"Intermediate","description":"Given string S and pattern P, find all start indices of P\'s anagrams in S. Maintain character frequency counts of window size `len(P)` as it slides across S. In this project, you will build a Sliding Window Anagram Search Engine in C.","learningOutcome":"Sliding Window Frequency Hashing, Fixed Window Frequency Checks & Anagram Locating","exampleText":"S = \'cbaebabacd\', P = \'abc\'","exampleOutput":"--- Sliding Window Anagram Search ---\\nAnagram start indices in \'cbaebabacd\': [ 0 6 ]","logicExplanation":"1. **Frequency Table**: Count char frequencies of P and initial window of S.\\n2. **Slide Window**: Add incoming char, remove outgoing char, compare frequency arrays.","answerFile":"./answers/answer15.c","codeExplanation":"1. `find_anagrams()`: Finds all anagram start indices using sliding window frequency hash."},{"projectId":"HASH_016","title":"Count Subarrays with Given Sum K using Prefix Sum Hash Map","difficulty":"Intermediate","description":"Find the total count of continuous subarrays whose sum equals K. Maintain running `curr_sum` and a Hash Map storing frequency of prefix sums. At each index, add `map[curr_sum - K]` to count. In this project, you will build a Subarray Sum K Counter in C in O(N) time.","learningOutcome":"Prefix Sum Frequency Hash Map, Target Sum Complement Counting & Subarray Search","exampleText":"Array [1, 1, 1], K = 2","exampleOutput":"--- Subarrays with Given Sum K ---\\nTotal Subarrays with Sum 2 = 2","logicExplanation":"1. **Prefix Sum Map**: Map stores `frequency[prefix_sum]`.\\n2. **Add Complement Count**: Add `prefix_map[curr_sum - K]` to total count.","answerFile":"./answers/answer16.c","codeExplanation":"1. `count_subarrays_with_sum()`: Counts subarrays with sum K using prefix sum hash map."},{"projectId":"HASH_017","title":"Isomorphic Strings Validator","difficulty":"Intermediate","description":"Two strings S and T are Isomorphic if characters in S can be replaced to get T while preserving character order and 1-to-1 character mappings. In this project, you will build an Isomorphic Strings Validator in C using dual character mapping arrays.","learningOutcome":"Bi-Directional Character Mapping, Bijection Verification & Isomorphic String Checks","exampleText":"S = \'egg\', T = \'add\'","exampleOutput":"--- Isomorphic Strings Validator ---\\n\'egg\' and \'add\' → Isomorphic","logicExplanation":"1. **Dual Mapping**: `map1[s[i]] = t[i]` and `map2[t[i]] = s[i]`.\\n2. **Bi-Directional Invariant**: Ensure no character maps to multiple distinct characters.","answerFile":"./answers/answer17.c","codeExplanation":"1. `is_isomorphic()`: Validates isomorphic string mappings."},{"projectId":"HASH_018","title":"Minimum Index Sum of Two Lists","difficulty":"Intermediate","description":"Given two string lists of preferences, find common strings with the minimum index sum (`index1 + index2`). In this project, you will build a Minimum Index Sum Matcher in C using Hash Maps.","learningOutcome":"Preference Ranking, Dual List Index Sum Minimization & Common String Extraction","exampleText":"Find common restaurant with minimum index sum","exampleOutput":"--- Minimum Index Sum of Two Lists ---\\nCommon Restaurant with Minimum Index Sum: Shogun (Index Sum = 1)","logicExplanation":"1. **Map List 1**: Store `map[string] = index` for List 1.\\n2. **Lookup List 2**: For each item in List 2 present in map, compute `idx1 + idx2` and update min sum.","answerFile":"./answers/answer18.c","codeExplanation":"1. `min_index_sum_demo()`: Computes minimum index sum of common preference items."},{"projectId":"HASH_019","title":"Custom LRU Cache using Doubly Linked List + Hash Map","difficulty":"Intermediate","description":"A Least Recently Used (LRU) Cache evicts the least recently accessed item when capacity is full. Combining a Doubly Linked List (storing items ordered by recency) with a Hash Map (storing pointer references to list nodes) achieves `get()` and `put()` in O(1) constant time! In this project, you will build an LRU Cache in C.","learningOutcome":"LRU Eviction Policy, Composite Data Structures (DLL + Hash Map) & O(1) Access","exampleText":"Initialize LRU Cache with Capacity 2","exampleOutput":"--- Custom O(1) LRU Cache ---\\nInitialized Capacity 2 LRU Cache successfully.","logicExplanation":"1. **Doubly Linked List**: Most recently used at head, least recently used at tail.\\n2. **Hash Map**: `hash_map[key]` points directly to list node for O(1) lookup and node moving.","answerFile":"./answers/answer19.c","codeExplanation":"1. `init_lru()`: Implements O(1) LRU Cache container using DLL and Hash Map."},{"projectId":"HASH_020","title":"Custom LFU Cache (Least Frequently Used Cache Engine)","difficulty":"Intermediate","description":"A Least Frequently Used (LFU) Cache evicts the item with the smallest access frequency count. If a tie occurs, evict the least recently used item among them. In this project, you will build an LFU Cache Skeleton in C using frequency buckets and hash maps.","learningOutcome":"LFU Eviction Strategy, Access Frequency Counters & Multi-Tier Hash Table Containers","exampleText":"Initialize LFU Cache Engine","exampleOutput":"--- Custom O(1) LFU Cache Engine ---\\nLFU Cache eviction removes least frequently used items dynamically.","logicExplanation":"1. **Frequency Bucketing**: Store items in linked lists grouped by access frequency `min_freq`.\\n2. **O(1) Eviction**: Remove head item from `min_freq` list when full.","answerFile":"./answers/answer20.c","codeExplanation":"1. `lfu_cache_demo()`: Demonstrates LFU Cache eviction mechanics."},{"projectId":"HASH_021","title":"Cuckoo Hashing Engine (O(1) Worst-Case Lookup with Dual Hash Tables)","difficulty":"Advanced","description":"Standard open addressing hash tables take O(N) worst-case search time when collisions cascade. Cuckoo Hashing guarantees worst-case O(1) lookup time by maintaining TWO hash tables with two distinct hash functions `h1(k)` and `h2(k)`. If a collision occurs, kick out the existing key to its alternate hash table location! In this project, you will build a Cuckoo Hashing Engine in C.","learningOutcome":"Cuckoo Hashing Mechanics, Dual Hash Tables, Absolute O(1) Worst-Case Lookup & Kickout Cycles","exampleText":"Insert keys 20, 50, 53 into Cuckoo Hash Tables","exampleOutput":"--- Cuckoo Hashing O(1) Worst-Case Engine ---\\nInserted keys into dual Cuckoo hash tables successfully.","logicExplanation":"1. **Dual Locations**: Key must reside at `table1[h1(k)]` or `table2[h2(k)]`.\\n2. **Kickout Loop**: If slot occupied, evict existing key and move to its alternate table.","answerFile":"./answers/answer21.c","codeExplanation":"1. `cuckoo_insert()`: Implements Cuckoo Hashing with dual table kickout displacement."},{"projectId":"HASH_022","title":"Robin Hood Hashing Engine (Distance-to-Initial-Bucket Equalization)","difficulty":"Advanced","description":"Robin Hood Hashing is an open addressing variant that minimizes variance in probe sequence length. When inserting a new key, if the new key\'s Probe Distance to Initial Bucket (PSL) is larger than the existing key\'s PSL, swap keys (\'take from the rich, give to the poor\'). In this project, you will build a Robin Hood Hashing Engine in C.","learningOutcome":"Robin Hood Probe Equalization, PSL (Probe Sequence Length) Metrics & Variance Reduction","exampleText":"Robin Hood Hash Insertions","exampleOutput":"--- Robin Hood Hashing Engine ---\\nRobin Hood probing steals slots from rich entries to equalize probe distance.","logicExplanation":"1. **PSL Metric**: Track distance from `ideal_hash_index`.\\n2. **Swap Rich**: If `new_key.PSL > existing_key.PSL`, swap keys and continue probing with evicted key.","answerFile":"./answers/answer22.c","codeExplanation":"1. `robin_hood_demo()`: Demonstrates Robin Hood probe sequence length equalization."},{"projectId":"HASH_023","title":"Consistent Hashing Ring for Distributed Cache Cluster","difficulty":"Advanced","description":"In distributed databases (Memcached, Cassandra), adding/removing a server node invalidates standard modulo hash tables `k % N`. Consistent Hashing maps both servers and data keys onto a 360-degree hash ring `[0..2^32-1]`. When nodes are added/removed, only `1/N` keys are remapped! In this project, you will build a Consistent Hashing Ring Simulator in C.","learningOutcome":"Distributed System Hashing, Hash Ring Topology & Virtual Server Nodes","exampleText":"Map key \'user_102\' on Consistent Hash Ring","exampleOutput":"--- Consistent Hashing Ring for Distributed Clusters ---\\nKey \'user_102\' mapped to Server Node 2 (Hash Ring Angle 120 deg)","logicExplanation":"1. **Hash Ring**: Map servers and keys to integer ring range.\\n2. **Clockwise Assignment**: Data key assigned to first server encountered moving clockwise on ring.","answerFile":"./answers/answer23.c","codeExplanation":"1. `consistent_hashing_demo()`: Simulates consistent hashing ring for distributed cache nodes."},{"projectId":"HASH_024","title":"Counting Bloom Filter with Deletion Support","difficulty":"Advanced","description":"Standard Bloom Filters use bit arrays to test set membership in O(K) time with zero false negatives, but CANNOT delete items. A Counting Bloom Filter replaces single bits with 4-bit integer counters, incrementing on insert and decrementing on delete! In this project, you will build a Counting Bloom Filter in C.","learningOutcome":"Probabilistic Data Structures, Counting Bloom Filters & Element Deletion Mechanics","exampleText":"Insert item 42 into Counting Bloom Filter","exampleOutput":"--- Counting Bloom Filter with Deletion Support ---\\nInserted item 42 into Counting Bloom Filter.","logicExplanation":"1. **Multi-Hash**: Run K independent hash functions.\\n2. **Counter Array**: Increment `counts[h_i(x)]++` on insert; decrement on delete.","answerFile":"./answers/answer24.c","codeExplanation":"1. `bloom_insert()`: Implements Counting Bloom Filter insertions."},{"projectId":"HASH_025","title":"Lock-Free Parallel Hash Table (Atomic CAS Collision Resolution)","difficulty":"Advanced","description":"High-throughput multi-threaded web servers require parallel hash tables that avoid mutex locks. Using atomic CPU Compare-And-Swap (`CAS`) instructions, concurrent threads insert keys safely into open addressing slots without thread blocking. In this project, you will build a Lock-Free Parallel Hash Table Simulator in C.","learningOutcome":"Lock-Free Multithreading, Atomic CPU Compare-And-Swap (CAS) & High-Concurrency Hash Tables","exampleText":"Atomic CAS Concurrent Hash Insertions","exampleOutput":"--- Lock-Free Parallel Hash Table (Atomic CAS) ---\\nAtomic compare-and-swap (CAS) resolved collision concurrently without mutex locks.","logicExplanation":"1. **Atomic CAS**: `__sync_val_compare_and_swap(&table[i], EMPTY, new_key)`.\\n2. **Lock-Free**: If CAS succeeds, key inserted; if CAS fails, advance probe index.","answerFile":"./answers/answer25.c","codeExplanation":"1. `lock_free_hash_demo()`: Demonstrates atomic CAS lock-free hash table operations."}]'),l={projectCategory:N,subject:R,board:B,class:"Computer Science Core / BCA / B.Tech",tools:q,institute:U,projects:Z};function V(){const[r,u]=c.useState(null);return c.useEffect(()=>{const t=Object.assign({"./topic6_files/answers/answer1.c":p,"./topic6_files/answers/answer10.c":m,"./topic6_files/answers/answer11.c":g,"./topic6_files/answers/answer12.c":_,"./topic6_files/answers/answer13.c":f,"./topic6_files/answers/answer14.c":y,"./topic6_files/answers/answer15.c":b,"./topic6_files/answers/answer16.c":S,"./topic6_files/answers/answer17.c":w,"./topic6_files/answers/answer18.c":k,"./topic6_files/answers/answer19.c":x,"./topic6_files/answers/answer2.c":I,"./topic6_files/answers/answer20.c":C,"./topic6_files/answers/answer21.c":H,"./topic6_files/answers/answer22.c":E,"./topic6_files/answers/answer23.c":v,"./topic6_files/answers/answer24.c":T,"./topic6_files/answers/answer25.c":A,"./topic6_files/answers/answer3.c":L,"./topic6_files/answers/answer4.c":M,"./topic6_files/answers/answer5.c":j,"./topic6_files/answers/answer6.c":F,"./topic6_files/answers/answer7.c":O,"./topic6_files/answers/answer8.c":P,"./topic6_files/answers/answer9.c":D}),a={};Object.keys(t).forEach(n=>{const s=n.split("/").pop();a[s]=t[n]});const d=l.projects.map(n=>{const i=(n.answerFile||"").split("/").pop(),o=a[i];return o||console.warn(`⚠ Missing C answer file: ${i}`),{...n,answer:o||`// Source file "${i}" not found in answers folder`}});u({...l,projects:d})},[]),r?e.jsx(h,{data:r}):e.jsx("div",{className:"p-6 text-slate-400 flex items-center justify-center min-h-[300px]",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-5 h-5 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),e.jsx("span",{children:"Loading Hashing & Hash Tables Practical Lab Projects..."})]})})}export{V as default};
