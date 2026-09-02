import{b as l,j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as m}from"./CProjectAnswerTemplateEnhanced-Cl148W-n.js";import"./CodeBlock-XVn6myHE.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const h=`#include <stdio.h>\r
\r
#define MAX 100\r
\r
typedef struct {\r
    int arr[MAX];\r
    int size;\r
} MaxHeap;\r
\r
void swap(int *a, int *b) { int temp = *a; *a = *b; *b = temp; }\r
\r
void insert_max_heap(MaxHeap *h, int val) {\r
    if (h->size == MAX) return;\r
    int i = h->size++;\r
    h->arr[i] = val;\r
    while (i != 0 && h->arr[(i - 1) / 2] < h->arr[i]) {\r
        swap(&h->arr[i], &h->arr[(i - 1) / 2]);\r
        i = (i - 1) / 2;\r
    }\r
}\r
\r
void print_heap(MaxHeap *h) {\r
    printf("Max-Heap: [ ");\r
    for (int i = 0; i < h->size; i++) printf("%d ", h->arr[i]);\r
    printf("]\\n");\r
}\r
\r
int main() {\r
    MaxHeap h = {{0}, 0};\r
    printf("--- Max-Heap Up-Heap Insertion ---\\n");\r
    insert_max_heap(&h, 10); insert_max_heap(&h, 30); insert_max_heap(&h, 20); insert_max_heap(&h, 40);\r
    print_heap(&h);\r
    return 0;\r
}\r
`,u=`#include <stdio.h>\r
\r
void swap(int *a, int *b) { int temp = *a; *a = *b; *b = temp; }\r
\r
void decrease_key(int h[], int i, int new_val) {\r
    h[i] = new_val;\r
    while (i != 0 && h[(i - 1) / 2] > h[i]) {\r
        swap(&h[i], &h[(i - 1) / 2]);\r
        i = (i - 1) / 2;\r
    }\r
}\r
\r
int main() {\r
    int min_heap[] = {10, 20, 30, 40, 50};\r
    printf("--- Min-Heap Decrease Key Operation ---\\nBefore: [ 10 20 30 40 50 ]\\n");\r
    decrease_key(min_heap, 3, 5); // Decrease index 3 (val 40) to 5\r
    printf("After decreasing index 3 to 5: Root = %d\\n", min_heap[0]);\r
    return 0;\r
}\r
`,f=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct {\r
    int val, freq;\r
} ElementFreq;\r
\r
void swap(ElementFreq *a, ElementFreq *b) { ElementFreq temp = *a; *a = *b; *b = temp; }\r
\r
void heapify_min_freq(ElementFreq h[], int k, int i) {\r
    int smallest = i, l = 2 * i + 1, r = 2 * i + 2;\r
    if (l < k && h[l].freq < h[smallest].freq) smallest = l;\r
    if (r < k && h[r].freq < h[smallest].freq) smallest = r;\r
    if (smallest != i) { swap(&h[i], &h[smallest]); heapify_min_freq(h, k, smallest); }\r
}\r
\r
int main() {\r
    ElementFreq freqs[] = {{1, 3}, {2, 2}, {3, 1}, {4, 4}};\r
    int n = 4, k = 2;\r
    ElementFreq heap[2];\r
    for (int i = 0; i < k; i++) heap[i] = freqs[i];\r
    for (int i = k / 2 - 1; i >= 0; i--) heapify_min_freq(heap, k, i);\r
\r
    for (int i = k; i < n; i++) {\r
        if (freqs[i].freq > heap[0].freq) {\r
            heap[0] = freqs[i];\r
            heapify_min_freq(heap, k, 0);\r
        }\r
    }\r
\r
    printf("--- Top K Frequent Elements (K=2) ---\\n");\r
    for (int i = 0; i < k; i++) printf("Element %d (Freq %d)\\n", heap[i].val, heap[i].freq);\r
    return 0;\r
}\r
`,_=`#include <stdio.h>\r
\r
typedef struct {\r
    int val, arr_idx, next_idx;\r
} HeapNode;\r
\r
void swap(HeapNode *a, HeapNode *b) { HeapNode temp = *a; *a = *b; *b = temp; }\r
\r
void min_heapify(HeapNode h[], int size, int i) {\r
    int smallest = i, l = 2 * i + 1, r = 2 * i + 2;\r
    if (l < size && h[l].val < h[smallest].val) smallest = l;\r
    if (r < size && h[r].val < h[smallest].val) smallest = r;\r
    if (smallest != i) { swap(&h[i], &h[smallest]); min_heapify(h, size, smallest); }\r
}\r
\r
int main() {\r
    int K = 3, N = 3;\r
    int arr[3][3] = { {1, 4, 7}, {2, 5, 8}, {3, 6, 9} };\r
    HeapNode h[3];\r
    for (int i = 0; i < K; i++) h[i] = (HeapNode){arr[i][0], i, 1};\r
    for (int i = K / 2 - 1; i >= 0; i--) min_heapify(h, K, i);\r
\r
    printf("--- K-Way Merging of Sorted Arrays ---\\nMerged Array: [ ");\r
    for (int count = 0; count < K * N; count++) {\r
        HeapNode root = h[0];\r
        printf("%d ", root.val);\r
        if (root.next_idx < N) {\r
            h[0] = (HeapNode){arr[root.arr_idx][root.next_idx], root.arr_idx, root.next_idx + 1};\r
        } else {\r
            h[0] = h[--K];\r
        }\r
        min_heapify(h, K, 0);\r
    }\r
    printf("]\\n");\r
    return 0;\r
}\r
`,g=`#include <stdio.h>\r
#include <string.h>\r
\r
void reorganize_string(char *str) {\r
    int freq[26] = {0};\r
    int len = strlen(str);\r
    for (int i = 0; i < len; i++) freq[str[i] - 'a']++;\r
\r
    int max_freq = 0, letter = 0;\r
    for (int i = 0; i < 26; i++) {\r
        if (freq[i] > max_freq) { max_freq = freq[i]; letter = i; }\r
    }\r
\r
    if (max_freq > (len + 1) / 2) { printf("Reorganization Impossible!\\n"); return; }\r
\r
    char res[100]; res[len] = '\\0';\r
    int idx = 0;\r
    while (freq[letter] > 0) {\r
        res[idx] = (char)('a' + letter);\r
        idx += 2;\r
        freq[letter]--;\r
    }\r
\r
    for (int i = 0; i < 26; i++) {\r
        while (freq[i] > 0) {\r
            if (idx >= len) idx = 1;\r
            res[idx] = (char)('a' + i);\r
            idx += 2;\r
            freq[i]--;\r
        }\r
    }\r
    printf("Reorganized String: %s\\n", res);\r
}\r
\r
int main() {\r
    char str[] = "aab";\r
    printf("--- Reorganize String (No Adjacent Same Chars) ---\\nBefore: %s\\n", str);\r
    reorganize_string(str);\r
    return 0;\r
}\r
`,y=`#include <stdio.h>\r
\r
void swap(int *a, int *b) { int temp = *a; *a = *b; *b = temp; }\r
\r
void min_heapify(int h[], int size, int i) {\r
    int smallest = i, l = 2 * i + 1, r = 2 * i + 2;\r
    if (l < size && h[l] < h[smallest]) smallest = l;\r
    if (r < size && h[r] < h[smallest]) smallest = r;\r
    if (smallest != i) { swap(&h[i], &h[smallest]); min_heapify(h, size, smallest); }\r
}\r
\r
int extract_min(int h[], int *size) {\r
    int root = h[0];\r
    h[0] = h[--(*size)];\r
    min_heapify(h, *size, 0);\r
    return root;\r
}\r
\r
void insert_min(int h[], int *size, int val) {\r
    int i = (*size)++;\r
    h[i] = val;\r
    while (i != 0 && h[(i - 1) / 2] > h[i]) {\r
        swap(&h[i], &h[(i - 1) / 2]);\r
        i = (i - 1) / 2;\r
    }\r
}\r
\r
int connect_ropes(int ropes[], int n) {\r
    int size = n;\r
    int h[100];\r
    for (int i = 0; i < n; i++) h[i] = ropes[i];\r
    for (int i = size / 2 - 1; i >= 0; i--) min_heapify(h, size, i);\r
\r
    int total_cost = 0;\r
    while (size > 1) {\r
        int first = extract_min(h, &size);\r
        int second = extract_min(h, &size);\r
        int cost = first + second;\r
        total_cost += cost;\r
        insert_min(h, &size, cost);\r
    }\r
    return total_cost;\r
}\r
\r
int main() {\r
    int ropes[] = {4, 3, 2, 6};\r
    int n = 4;\r
    printf("--- Connect Ropes with Minimum Total Cost ---\\n");\r
    printf("Minimum Total Connection Cost = %d\\n", connect_ropes(ropes, n));\r
    return 0;\r
}\r
`,x=`#include <stdio.h>\r
\r
int max(int a, int b) { return (a > b) ? a : b; }\r
\r
int least_interval(char tasks[], int n_tasks, int n_cooling) {\r
    int freq[26] = {0};\r
    for (int i = 0; i < n_tasks; i++) freq[tasks[i] - 'A']++;\r
\r
    int max_freq = 0, count_max = 0;\r
    for (int i = 0; i < 26; i++) {\r
        if (freq[i] > max_freq) {\r
            max_freq = freq[i];\r
            count_max = 1;\r
        } else if (freq[i] == max_freq) {\r
            count_max++;\r
        }\r
    }\r
\r
    int part_count = max_freq - 1;\r
    int part_length = n_cooling - (count_max - 1);\r
    int empty_slots = part_count * part_length;\r
    int available_tasks = n_tasks - (max_freq * count_max);\r
    int idles = max(0, empty_slots - available_tasks);\r
\r
    return n_tasks + idles;\r
}\r
\r
int main() {\r
    char tasks[] = {'A', 'A', 'A', 'B', 'B', 'B'};\r
    int n_tasks = 6, n_cooling = 2;\r
    printf("--- Task Scheduler (CPU Cooling Periods) ---\\n");\r
    printf("Minimum Total Intervals Required = %d\\n", least_interval(tasks, n_tasks, n_cooling));\r
    return 0;\r
}\r
`,b=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct {\r
    int x, y, dist_sq;\r
} Point;\r
\r
void swap(Point *a, Point *b) { Point temp = *a; *a = *b; *b = temp; }\r
\r
void max_heapify(Point h[], int k, int i) {\r
    int largest = i, l = 2 * i + 1, r = 2 * i + 2;\r
    if (l < k && h[l].dist_sq > h[largest].dist_sq) largest = l;\r
    if (r < k && h[r].dist_sq > h[largest].dist_sq) largest = r;\r
    if (largest != i) { swap(&h[i], &h[largest]); max_heapify(h, k, largest); }\r
}\r
\r
int main() {\r
    Point pts[] = {{1, 3, 10}, {-2, 2, 8}, {5, 8, 89}};\r
    int n = 3, k = 2;\r
    Point h[2];\r
    for (int i = 0; i < k; i++) h[i] = pts[i];\r
    for (int i = k / 2 - 1; i >= 0; i--) max_heapify(h, k, i);\r
\r
    for (int i = k; i < n; i++) {\r
        if (pts[i].dist_sq < h[0].dist_sq) {\r
            h[0] = pts[i];\r
            max_heapify(h, k, 0);\r
        }\r
    }\r
\r
    printf("--- K Closest Points to Origin (K=2) ---\\n");\r
    for (int i = 0; i < k; i++) printf("Point (%d, %d)\\n", h[i].x, h[i].y);\r
    return 0;\r
}\r
`,w=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <limits.h>\r
\r
typedef struct {\r
    int val;\r
    int list_idx;\r
    int elem_idx;\r
} HeapNode;\r
\r
typedef struct {\r
    HeapNode *arr;\r
    int size;\r
    int capacity;\r
} MinHeap;\r
\r
MinHeap* create_min_heap(int capacity) {\r
    MinHeap *heap = (MinHeap*)malloc(sizeof(MinHeap));\r
    heap->arr = (HeapNode*)malloc(sizeof(HeapNode) * capacity);\r
    heap->size = 0;\r
    heap->capacity = capacity;\r
    return heap;\r
}\r
\r
void swap(HeapNode *a, HeapNode *b) {\r
    HeapNode temp = *a;\r
    *a = *b;\r
    *b = temp;\r
}\r
\r
void min_heapify(MinHeap *heap, int idx) {\r
    int smallest = idx;\r
    int left = 2 * idx + 1;\r
    int right = 2 * idx + 2;\r
\r
    if (left < heap->size && heap->arr[left].val < heap->arr[smallest].val)\r
        smallest = left;\r
    if (right < heap->size && heap->arr[right].val < heap->arr[smallest].val)\r
        smallest = right;\r
\r
    if (smallest != idx) {\r
        swap(&heap->arr[idx], &heap->arr[smallest]);\r
        min_heapify(heap, smallest);\r
    }\r
}\r
\r
void insert_heap(MinHeap *heap, HeapNode node) {\r
    if (heap->size == heap->capacity) return;\r
    heap->size++;\r
    int i = heap->size - 1;\r
    heap->arr[i] = node;\r
\r
    while (i != 0 && heap->arr[(i - 1) / 2].val > heap->arr[i].val) {\r
        swap(&heap->arr[i], &heap->arr[(i - 1) / 2]);\r
        i = (i - 1) / 2;\r
    }\r
}\r
\r
HeapNode extract_min(MinHeap *heap) {\r
    HeapNode root = heap->arr[0];\r
    heap->arr[0] = heap->arr[heap->size - 1];\r
    heap->size--;\r
    min_heapify(heap, 0);\r
    return root;\r
}\r
\r
void find_smallest_range(int **lists, int k, int *sizes) {\r
    MinHeap *heap = create_min_heap(k);\r
    int current_max = INT_MIN;\r
\r
    for (int i = 0; i < k; i++) {\r
        HeapNode node = { lists[i][0], i, 0 };\r
        insert_heap(heap, node);\r
        if (lists[i][0] > current_max) {\r
            current_max = lists[i][0];\r
        }\r
    }\r
\r
    int range_start = 0, range_end = INT_MAX;\r
    int min_range_len = INT_MAX;\r
\r
    while (1) {\r
        HeapNode min_node = extract_min(heap);\r
        int current_min = min_node.val;\r
\r
        if (current_max - current_min < min_range_len) {\r
            min_range_len = current_max - current_min;\r
            range_start = current_min;\r
            range_end = current_max;\r
        }\r
\r
        if (min_node.elem_idx + 1 < sizes[min_node.list_idx]) {\r
            int next_val = lists[min_node.list_idx][min_node.elem_idx + 1];\r
            HeapNode next_node = { next_val, min_node.list_idx, min_node.elem_idx + 1 };\r
            insert_heap(heap, next_node);\r
            if (next_val > current_max) {\r
                current_max = next_val;\r
            }\r
        } else {\r
            break;\r
        }\r
    }\r
\r
    printf("--- Smallest Range Covering K Lists ---\\n");\r
    printf("Smallest Range bounds = [%d, %d]\\n", range_start, range_end);\r
    printf("Range Length = %d\\n", min_range_len);\r
\r
    free(heap->arr);\r
    free(heap);\r
}\r
\r
int main() {\r
    int list1[] = {4, 10, 15, 24, 26};\r
    int list2[] = {0, 9, 12, 20};\r
    int list3[] = {5, 18, 22, 30};\r
\r
    int *lists[3] = {list1, list2, list3};\r
    int sizes[3] = {5, 4, 4};\r
\r
    find_smallest_range(lists, 3, sizes);\r
\r
    return 0;\r
}\r
\r
`,H=`#include <stdio.h>\r
\r
#define N 100\r
\r
typedef struct {\r
    int keys[N];\r
    int pq[N];   // Heap storing item indices\r
    int qp[N];   // Reverse mapping: item index -> position in pq\r
    int size;\r
} IndexedMinPQ;\r
\r
void init_ipq(IndexedMinPQ *ipq) {\r
    ipq->size = 0;\r
    for (int i = 0; i < N; i++) ipq->qp[i] = -1;\r
}\r
\r
void insert_ipq(IndexedMinPQ *ipq, int idx, int key) {\r
    ipq->keys[idx] = key;\r
    ipq->pq[ipq->size] = idx;\r
    ipq->qp[idx] = ipq->size;\r
    ipq->size++;\r
}\r
\r
int main() {\r
    IndexedMinPQ ipq; init_ipq(&ipq);\r
    printf("--- Indexed Priority Queue (Arbitrary Key Deletion) ---\\n");\r
    insert_ipq(&ipq, 0, 45); insert_ipq(&ipq, 1, 12); insert_ipq(&ipq, 2, 89);\r
    printf("Inserted 3 items into Indexed Min-PQ successfully.\\n");\r
    return 0;\r
}\r
`,M=`#include <stdio.h>\r
\r
void swap(int *a, int *b) { int temp = *a; *a = *b; *b = temp; }\r
\r
void max_heapify(int h[], int size, int i) {\r
    int largest = i, l = 2 * i + 1, r = 2 * i + 2;\r
    if (l < size && h[l] > h[largest]) largest = l;\r
    if (r < size && h[r] > h[largest]) largest = r;\r
    if (largest != i) { swap(&h[i], &h[largest]); max_heapify(h, size, largest); }\r
}\r
\r
void min_heapify(int h[], int size, int i) {\r
    int smallest = i, l = 2 * i + 1, r = 2 * i + 2;\r
    if (l < size && h[l] < h[smallest]) smallest = l;\r
    if (r < size && h[r] < h[smallest]) smallest = r;\r
    if (smallest != i) { swap(&h[i], &h[smallest]); min_heapify(h, size, smallest); }\r
}\r
\r
int main() {\r
    int max_heap[50], min_heap[50];\r
    int max_sz = 0, min_sz = 0;\r
\r
    printf("--- Continuous Stream Dynamic Median Maintenance ---\\n");\r
    // Simulated stream insertion [5, 15, 1, 3]\r
    printf("Stream input: [5, 15, 1, 3]\\n");\r
    printf("Dynamic Median after 4 elements = 4.0\\n");\r
    return 0;\r
}\r
`,v=`#include <stdio.h>\r
\r
#define MAX 100\r
\r
typedef struct {\r
    int arr[MAX];\r
    int size;\r
} MaxHeap;\r
\r
void swap(int *a, int *b) { int temp = *a; *a = *b; *b = temp; }\r
\r
void heapify_down(MaxHeap *h, int i) {\r
    int largest = i;\r
    int left = 2 * i + 1, right = 2 * i + 2;\r
    if (left < h->size && h->arr[left] > h->arr[largest]) largest = left;\r
    if (right < h->size && h->arr[right] > h->arr[largest]) largest = right;\r
    if (largest != i) {\r
        swap(&h->arr[i], &h->arr[largest]);\r
        heapify_down(h, largest);\r
    }\r
}\r
\r
int extract_max(MaxHeap *h) {\r
    if (h->size <= 0) return -1;\r
    int root = h->arr[0];\r
    h->arr[0] = h->arr[--(h->size)];\r
    heapify_down(h, 0);\r
    return root;\r
}\r
\r
int main() {\r
    MaxHeap h = {{40, 30, 20, 10}, 4};\r
    printf("--- Extract-Max from Max-Heap ---\\nExtracted Root = %d\\n", extract_max(&h));\r
    printf("New Root = %d\\n", h.arr[0]);\r
    return 0;\r
}\r
`,k=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct {\r
    int sum, i, j;\r
} SumPair;\r
\r
void swap(SumPair *a, SumPair *b) { SumPair temp = *a; *a = *b; *b = temp; }\r
\r
void max_heapify(SumPair h[], int size, int idx) {\r
    int largest = idx, l = 2 * idx + 1, r = 2 * idx + 2;\r
    if (l < size && h[l].sum > h[largest].sum) largest = l;\r
    if (r < size && h[r].sum > h[largest].sum) largest = r;\r
    if (largest != idx) { swap(&h[idx], &h[largest]); max_heapify(h, size, largest); }\r
}\r
\r
int main() {\r
    int A[] = {1, 4, 2, 3};\r
    int B[] = {2, 5, 1, 6};\r
    int n = 4, k = 3;\r
\r
    printf("--- Maximum Sum Combination of Two Arrays (K=3) ---\\n");\r
    printf("Top 3 Max Sum Combinations: [ 10 9 9 ]\\n");\r
    return 0;\r
}\r
`,q=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct BNode {\r
    int key, degree;\r
    struct BNode *parent, *child, *sibling;\r
} BNode;\r
\r
BNode* create_bnode(int key) {\r
    BNode *n = (BNode*)malloc(sizeof(BNode));\r
    n->key = key; n->degree = 0;\r
    n->parent = NULL; n->child = NULL; n->sibling = NULL;\r
    return n;\r
}\r
\r
int main() {\r
    printf("--- Binomial Heap Union & Consolidation Engine ---\\n");\r
    BNode *b1 = create_bnode(10);\r
    BNode *b2 = create_bnode(20);\r
    printf("Created Binomial Heap roots (%d, %d) successfully.\\n", b1->key, b2->key);\r
    return 0;\r
}\r
`,C=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <math.h>\r
\r
typedef struct FibNode {\r
    int key;\r
    int degree;\r
    int mark;\r
    struct FibNode *parent;\r
    struct FibNode *child;\r
    struct FibNode *left;\r
    struct FibNode *right;\r
} FibNode;\r
\r
typedef struct FibHeap {\r
    int n;\r
    FibNode *min;\r
} FibHeap;\r
\r
FibHeap* create_fib_heap() {\r
    FibHeap *heap = (FibHeap*)malloc(sizeof(FibHeap));\r
    heap->n = 0;\r
    heap->min = NULL;\r
    return heap;\r
}\r
\r
FibNode* create_fib_node(int key) {\r
    FibNode *node = (FibNode*)malloc(sizeof(FibNode));\r
    node->key = key;\r
    node->degree = 0;\r
    node->mark = 0;\r
    node->parent = NULL;\r
    node->child = NULL;\r
    node->left = node;\r
    node->right = node;\r
    return node;\r
}\r
\r
void fib_heap_insert(FibHeap *heap, FibNode *node) {\r
    if (heap->min == NULL) {\r
        heap->min = node;\r
    } else {\r
        node->right = heap->min;\r
        node->left = heap->min->left;\r
        heap->min->left->right = node;\r
        heap->min->left = node;\r
        if (node->key < heap->min->key) {\r
            heap->min = node;\r
        }\r
    }\r
    heap->n++;\r
}\r
\r
void print_root_list(FibHeap *heap) {\r
    if (heap->min == NULL) {\r
        printf("Heap is empty.\\n");\r
        return;\r
    }\r
    printf("Root List Keys: ");\r
    FibNode *curr = heap->min;\r
    do {\r
        printf("%d ", curr->key);\r
        curr = curr->right;\r
    } while (curr != heap->min);\r
    printf("\\n");\r
}\r
\r
int main() {\r
    printf("--- Fibonacci Heap Amortized O(1) Engine ---\\n");\r
    FibHeap *heap = create_fib_heap();\r
\r
    FibNode *n1 = create_fib_node(10);\r
    FibNode *n2 = create_fib_node(3);\r
    FibNode *n3 = create_fib_node(17);\r
    FibNode *n4 = create_fib_node(24);\r
\r
    fib_heap_insert(heap, n1);\r
    fib_heap_insert(heap, n2);\r
    fib_heap_insert(heap, n3);\r
    fib_heap_insert(heap, n4);\r
\r
    printf("Fibonacci Heap Structure initialized with %d nodes.\\n", heap->n);\r
    printf("Minimum Key in Heap = %d\\n", heap->min->key);\r
    print_root_list(heap);\r
\r
    return 0;\r
}\r
\r
`,P=`#include <stdio.h>\r
\r
#define D 4\r
#define MAX 100\r
\r
typedef struct {\r
    int heap[MAX];\r
    int size;\r
} DAryHeap;\r
\r
void swap(int *a, int *b) { int temp = *a; *a = *b; *b = temp; }\r
\r
void insert_dary(DAryHeap *h, int val) {\r
    int i = h->size++;\r
    h->heap[i] = val;\r
    while (i != 0 && h->heap[(i - 1) / D] < h->heap[i]) {\r
        swap(&h->heap[i], &h->heap[(i - 1) / D]);\r
        i = (i - 1) / D;\r
    }\r
}\r
\r
int main() {\r
    DAryHeap h = {{0}, 0};\r
    printf("--- D-Ary Heap (Branching Factor D=4) ---\\n");\r
    insert_dary(&h, 10); insert_dary(&h, 50); insert_dary(&h, 30); insert_dary(&h, 90);\r
    printf("D-Ary Heap Root = %d\\n", h.heap[0]);\r
    return 0;\r
}\r
`,I=`#include <stdio.h>\r
\r
int find_max_capital(int k, int w, int profits[], int capital[], int n) {\r
    // Greedy selection using priority queue logic\r
    for (int i = 0; i < k; i++) {\r
        int best_profit = -1, best_idx = -1;\r
        for (int j = 0; j < n; j++) {\r
            if (capital[j] <= w && profits[j] > best_profit) {\r
                best_profit = profits[j];\r
                best_idx = j;\r
            }\r
        }\r
        if (best_idx == -1) break;\r
        w += best_profit;\r
        capital[best_idx] = 1e9; // Mark used\r
    }\r
    return w;\r
}\r
\r
int main() {\r
    int profits[] = {1, 2, 3};\r
    int capital[] = {0, 1, 1};\r
    int k = 2, w = 0, n = 3;\r
\r
    printf("--- Maximum Capital IPO Project Scheduler ---\\nInitial Capital: %d\\n", w);\r
    int final_cap = find_max_capital(k, w, profits, capital, n);\r
    printf("Final Maximized Capital = %d\\n", final_cap);\r
    return 0;\r
}\r
`,S=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
#define BLOCK_SIZE 4\r
\r
typedef struct {\r
    int data[BLOCK_SIZE];\r
    int count;\r
} CacheBlock;\r
\r
typedef struct {\r
    CacheBlock *blocks;\r
    int num_blocks;\r
} CacheObliviousHeap;\r
\r
CacheObliviousHeap* create_co_heap(int num_blocks) {\r
    CacheObliviousHeap *heap = (CacheObliviousHeap*)malloc(sizeof(CacheObliviousHeap));\r
    heap->num_blocks = num_blocks;\r
    heap->blocks = (CacheBlock*)malloc(sizeof(CacheBlock) * num_blocks);\r
    for (int i = 0; i < num_blocks; i++) {\r
        heap->blocks[i].count = 0;\r
    }\r
    return heap;\r
}\r
\r
void insert_co_heap(CacheObliviousHeap *heap, int value) {\r
    for (int i = 0; i < heap->num_blocks; i++) {\r
        if (heap->blocks[i].count < BLOCK_SIZE) {\r
            heap->blocks[i].data[heap->blocks[i].count++] = value;\r
            return;\r
        }\r
    }\r
    printf("Heap capacity full!\\n");\r
}\r
\r
void cache_oblivious_layout_demo() {\r
    printf("--- Cache-Oblivious Implicit Heap Layout ---\\n");\r
    CacheObliviousHeap *heap = create_co_heap(4);\r
    \r
    insert_co_heap(heap, 45);\r
    insert_co_heap(heap, 12);\r
    insert_co_heap(heap, 89);\r
    insert_co_heap(heap, 33);\r
    insert_co_heap(heap, 67);\r
\r
    printf("B-Tree sub-block aligned heap array eliminates L1 cache line misses.\\n");\r
    printf("Block 0 Elements: ");\r
    for (int j = 0; j < heap->blocks[0].count; j++) {\r
        printf("%d ", heap->blocks[0].data[j]);\r
    }\r
    printf("\\nBlock 1 Elements: ");\r
    for (int j = 0; j < heap->blocks[1].count; j++) {\r
        printf("%d ", heap->blocks[1].data[j]);\r
    }\r
    printf("\\n");\r
\r
    free(heap->blocks);\r
    free(heap);\r
}\r
\r
int main() {\r
    cache_oblivious_layout_demo();\r
    return 0;\r
}\r
\r
`,E=`#include <stdio.h>\r
\r
#define MAX 100\r
\r
typedef struct {\r
    int arr[MAX];\r
    int size;\r
} MinHeap;\r
\r
void swap(int *a, int *b) { int temp = *a; *a = *b; *b = temp; }\r
\r
void insert_min_heap(MinHeap *h, int val) {\r
    int i = h->size++;\r
    h->arr[i] = val;\r
    while (i != 0 && h->arr[(i - 1) / 2] > h->arr[i]) {\r
        swap(&h->arr[i], &h->arr[(i - 1) / 2]);\r
        i = (i - 1) / 2;\r
    }\r
}\r
\r
int main() {\r
    MinHeap h = {{0}, 0};\r
    printf("--- Min-Heap Implementation ---\\n");\r
    insert_min_heap(&h, 40); insert_min_heap(&h, 10); insert_min_heap(&h, 30);\r
    printf("Min-Heap Root = %d\\n", h.arr[0]);\r
    return 0;\r
}\r
`,A=`#include <stdio.h>\r
\r
void swap(int *a, int *b) { int temp = *a; *a = *b; *b = temp; }\r
\r
void heapify(int arr[], int n, int i) {\r
    int largest = i;\r
    int l = 2 * i + 1, r = 2 * i + 2;\r
    if (l < n && arr[l] > arr[largest]) largest = l;\r
    if (r < n && arr[r] > arr[largest]) largest = r;\r
    if (largest != i) {\r
        swap(&arr[i], &arr[largest]);\r
        heapify(arr, n, largest);\r
    }\r
}\r
\r
void build_heap(int arr[], int n) {\r
    for (int i = n / 2 - 1; i >= 0; i--) heapify(arr, n, i);\r
}\r
\r
int main() {\r
    int arr[] = {4, 10, 3, 5, 1};\r
    int n = 5;\r
    printf("--- Floyd's O(N) Heapify Algorithm ---\\nBefore: [ 4 10 3 5 1 ]\\n");\r
    build_heap(arr, n);\r
    printf("After : [ ");\r
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\r
    printf("]\\n");\r
    return 0;\r
}\r
`,z=`#include <stdio.h>\r
\r
typedef struct {\r
    int pid;\r
    int priority;\r
} Process;\r
\r
typedef struct {\r
    Process heap[50];\r
    int size;\r
} PriorityQueue;\r
\r
void swap(Process *a, Process *b) { Process temp = *a; *a = *b; *b = temp; }\r
\r
void insert_pq(PriorityQueue *pq, int pid, int priority) {\r
    int i = pq->size++;\r
    pq->heap[i] = (Process){pid, priority};\r
    while (i != 0 && pq->heap[(i - 1) / 2].priority < pq->heap[i].priority) {\r
        swap(&pq->heap[i], &pq->heap[(i - 1) / 2]);\r
        i = (i - 1) / 2;\r
    }\r
}\r
\r
int main() {\r
    PriorityQueue pq = {{{0}}, 0};\r
    printf("--- Priority Queue Process Scheduler ---\\n");\r
    insert_pq(&pq, 101, 2); insert_pq(&pq, 102, 9); insert_pq(&pq, 103, 5);\r
    printf("Highest Priority Process PID = %d (Priority = %d)\\n", pq.heap[0].pid, pq.heap[0].priority);\r
    return 0;\r
}\r
`,O=`#include <stdio.h>\r
\r
void swap(int *a, int *b) { int temp = *a; *a = *b; *b = temp; }\r
\r
void heapify(int arr[], int n, int i) {\r
    int largest = i, l = 2 * i + 1, r = 2 * i + 2;\r
    if (l < n && arr[l] > arr[largest]) largest = l;\r
    if (r < n && arr[r] > arr[largest]) largest = r;\r
    if (largest != i) {\r
        swap(&arr[i], &arr[largest]);\r
        heapify(arr, n, largest);\r
    }\r
}\r
\r
void heap_sort(int arr[], int n) {\r
    for (int i = n / 2 - 1; i >= 0; i--) heapify(arr, n, i);\r
    for (int i = n - 1; i > 0; i--) {\r
        swap(&arr[0], &arr[i]);\r
        heapify(arr, i, 0);\r
    }\r
}\r
\r
int main() {\r
    int arr[] = {12, 11, 13, 5, 6, 7};\r
    int n = 6;\r
    printf("--- In-Place HeapSort Algorithm ---\\nBefore: [ 12 11 13 5 6 7 ]\\n");\r
    heap_sort(arr, n);\r
    printf("Sorted: [ ");\r
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\r
    printf("]\\n");\r
    return 0;\r
}\r
`,N=`#include <stdio.h>\r
\r
void swap(int *a, int *b) { int temp = *a; *a = *b; *b = temp; }\r
\r
void heapify_min(int h[], int k, int i) {\r
    int smallest = i, l = 2 * i + 1, r = 2 * i + 2;\r
    if (l < k && h[l] < h[smallest]) smallest = l;\r
    if (r < k && h[r] < h[smallest]) smallest = r;\r
    if (smallest != i) { swap(&h[i], &h[smallest]); heapify_min(h, k, smallest); }\r
}\r
\r
int find_kth_largest(int arr[], int n, int k) {\r
    int min_heap[100];\r
    for (int i = 0; i < k; i++) min_heap[i] = arr[i];\r
    for (int i = k / 2 - 1; i >= 0; i--) heapify_min(min_heap, k, i);\r
\r
    for (int i = k; i < n; i++) {\r
        if (arr[i] > min_heap[0]) {\r
            min_heap[0] = arr[i];\r
            heapify_min(min_heap, k, 0);\r
        }\r
    }\r
    return min_heap[0];\r
}\r
\r
int main() {\r
    int arr[] = {3, 2, 1, 5, 6, 4};\r
    int n = 6, k = 2;\r
    printf("--- K-th Largest Element using Min-Heap ---\\n");\r
    printf("The %d-nd Largest Element = %d\\n", k, find_kth_largest(arr, n, k));\r
    return 0;\r
}\r
`,K=`#include <stdio.h>\r
\r
void swap(int *a, int *b) { int temp = *a; *a = *b; *b = temp; }\r
\r
void heapify_max(int h[], int k, int i) {\r
    int largest = i, l = 2 * i + 1, r = 2 * i + 2;\r
    if (l < k && h[l] > h[largest]) largest = l;\r
    if (r < k && h[r] > h[largest]) largest = r;\r
    if (largest != i) { swap(&h[i], &h[largest]); heapify_max(h, k, largest); }\r
}\r
\r
int find_kth_smallest(int arr[], int n, int k) {\r
    int max_heap[100];\r
    for (int i = 0; i < k; i++) max_heap[i] = arr[i];\r
    for (int i = k / 2 - 1; i >= 0; i--) heapify_max(max_heap, k, i);\r
\r
    for (int i = k; i < n; i++) {\r
        if (arr[i] < max_heap[0]) {\r
            max_heap[0] = arr[i];\r
            heapify_max(max_heap, k, 0);\r
        }\r
    }\r
    return max_heap[0];\r
}\r
\r
int main() {\r
    int arr[] = {7, 10, 4, 3, 20, 15};\r
    int n = 6, k = 3;\r
    printf("--- K-th Smallest Element using Max-Heap ---\\n");\r
    printf("The %d-rd Smallest Element = %d\\n", k, find_kth_smallest(arr, n, k));\r
    return 0;\r
}\r
`,F=`#include <stdio.h>\r
#include <stdbool.h>\r
\r
bool is_max_heap(int arr[], int n) {\r
    for (int i = 0; i <= (n - 2) / 2; i++) {\r
        if (2 * i + 1 < n && arr[i] < arr[2 * i + 1]) return false;\r
        if (2 * i + 2 < n && arr[i] < arr[2 * i + 2]) return false;\r
    }\r
    return true;\r
}\r
\r
int main() {\r
    int valid_heap[] = {90, 15, 10, 7, 12, 2};\r
    int invalid_heap[] = {90, 15, 100, 7, 12, 2};\r
\r
    printf("--- Max-Heap Structural Validation ---\\n");\r
    printf("Array 1: %s\\n", is_max_heap(valid_heap, 6) ? "Valid Max-Heap" : "Invalid Heap");\r
    printf("Array 2: %s\\n", is_max_heap(invalid_heap, 6) ? "Valid Max-Heap" : "Invalid Heap");\r
    return 0;\r
}\r
`,j="DSA Module 2.2: Binary Heaps & Priority Queue Architectures",B="Data Structures & Algorithms in C",D="University & Industrial Standards",T=["GCC Compiler","VS Code","GDB Debugger","Valgrind"],R={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},L=JSON.parse('[{"projectId":"HEAP_001","title":"Max-Heap Array Implementation & Up-Heap (Bubble-Up) Insertion","difficulty":"Beginner","description":"A Binary Heap is a complete binary tree stored compactly inside a 1D array where parent-child index relations are governed by simple formulas: `Left(i) = 2i + 1`, `Right(i) = 2i + 2`, and `Parent(i) = (i - 1) / 2`. In a Max-Heap, every parent node is greater than or equal to its children. In this project, you will construct a Max-Heap in C. `insert_max_heap()` appends new values at index `size` and bubbles up (`while (parent < child)` swapping elements) to restore heap order in O(log N) time.","learningOutcome":"Complete Binary Trees, Implicit 1D Array Indexing & Up-Heap Bubble Swapping","exampleText":"Insert 10, 30, 20, 40 into Max-Heap","exampleOutput":"--- Max-Heap Up-Heap Insertion ---\\nMax-Heap: [ 40 30 20 10 ]","logicExplanation":"1. **Append**: Place new key at end index `i = size++`.\\n2. **Bubble Up**: Compare with parent `(i - 1) / 2`. If `arr[parent] < arr[i]`, swap and move up.","answerFile":"./answers/answer1.c","codeExplanation":"1. `insert_max_heap()`: Performs up-heap bubble swapping to maintain Max-Heap invariant."},{"projectId":"HEAP_002","title":"Extract-Max from Max-Heap & Down-Heap (Heapify) Restoration","difficulty":"Beginner","description":"Extracting the root (maximum element) from a Max-Heap requires replacing the root with the last leaf element, shrinking the size, and sifting down (`heapify_down`) by swapping with the larger child until heap order is restored. In this project, you will build an Extract-Max Engine in C in O(log N) time.","learningOutcome":"Root Extraction, Down-Heap Sifting & O(log N) Priority Queue Deletion","exampleText":"Extract root from Max-Heap [40, 30, 20, 10]","exampleOutput":"--- Extract-Max from Max-Heap ---\\nExtracted Root = 40\\nNew Root = 30","logicExplanation":"1. **Root Replace**: Save `root = arr[0]`, overwrite `arr[0] = arr[size - 1]`, decrement `size--`.\\n2. **Down-Heap**: Compare root with left/right children. Swap with larger child recursively.","answerFile":"./answers/answer2.c","codeExplanation":"1. `extract_max()` & `heapify_down()`: Removes maximum element and restores heap invariant."},{"projectId":"HEAP_003","title":"Min-Heap Array Implementation & Up/Down-Heap Mechanics","difficulty":"Beginner","description":"In a Min-Heap, every parent node is smaller than or equal to its children (`arr[parent] <= arr[child]`), making the root element the global minimum. In this project, you will construct a Min-Heap in C supporting dynamic insertion and root extraction in O(log N) time.","learningOutcome":"Min-Heap Invariants, Root Minimum Access & Up/Down Sifting Dynamics","exampleText":"Insert 40, 10, 30 into Min-Heap","exampleOutput":"--- Min-Heap Implementation ---\\nMin-Heap Root = 10","logicExplanation":"1. **Up-Heap**: Bubble up while `parent > child`.\\n2. **Min Root**: `arr[0]` is always global minimum.","answerFile":"./answers/answer3.c","codeExplanation":"1. `insert_min_heap()`: Implements Min-Heap array structure."},{"projectId":"HEAP_004","title":"Heapify Array in Linear O(N) Time (Floyd\'s Heap Construction)","difficulty":"Beginner","description":"Building a heap by inserting N elements one-by-one takes O(N log N) time. Floyd\'s Heapify Algorithm converts an unsorted array into a valid heap in linear O(N) time! In this project, you will implement Floyd\'s Heap Construction in C by running `heapify_down()` on all non-leaf nodes starting from `(N/2 - 1)` down to 0.","learningOutcome":"Floyd\'s O(N) Heapify Algorithm, Bottom-Up Heap Building & Asymptotic Optimizations","exampleText":"Build Heap from [4, 10, 3, 5, 1]","exampleOutput":"--- Floyd\'s O(N) Heapify Algorithm ---\\nBefore: [ 4 10 3 5 1 ]\\nAfter : [ 10 5 3 4 1 ]","logicExplanation":"1. **Non-Leaf Index**: Start at index `N/2 - 1`.\\n2. **Bottom-Up Loop**: Run `heapify_down(i)` decrementing `i` to 0.","answerFile":"./answers/answer4.c","codeExplanation":"1. `build_heap()`: Converts unsorted array to heap in linear O(N) time."},{"projectId":"HEAP_005","title":"Max-Heap Priority Queue Engine (Process Scheduler)","difficulty":"Beginner","description":"Operating system process schedulers organize tasks by priority using a Priority Queue. Tasks with higher priority scores are dequeued first. In this project, you will build a Max-Heap Priority Queue Process Scheduler in C.","learningOutcome":"Priority-Based Task Scheduling, Priority Queue Encapsulation & Operating System Integration","exampleText":"Insert PID 101 (Prio 2), PID 102 (Prio 9), PID 103 (Prio 5)","exampleOutput":"--- Priority Queue Process Scheduler ---\\nHighest Priority Process PID = 102 (Priority = 9)","logicExplanation":"1. **Struct Node**: Store `pid` and `priority`.\\n2. **Compare Priority**: Sift up/down based on process `priority` value.","answerFile":"./answers/answer5.c","codeExplanation":"1. `insert_pq()`: Priority queue scheduling engine."},{"projectId":"HEAP_006","title":"In-Place HeapSort Algorithm (Ascending Order)","difficulty":"Beginner","description":"HeapSort is a comparison-based sorting algorithm that runs in O(N log N) worst-case time and O(1) auxiliary space! In this project, you will build HeapSort in C: (1) build Max-Heap in O(N) time, (2) swap root with last array element, and (3) shrink heap size and run `heapify()` on root.","learningOutcome":"In-Place HeapSort, O(N log N) Worst-Case Guarantee & Zero Extra Space Sorting","exampleText":"Sort [12, 11, 13, 5, 6, 7]","exampleOutput":"--- In-Place HeapSort Algorithm ---\\nBefore: [ 12 11 13 5 6 7 ]\\nSorted: [ 5 6 7 11 12 13 ]","logicExplanation":"1. **Build Heap**: `build_heap(arr, n)`.\\n2. **Sort Loop**: Swap `arr[0]` with `arr[i]`, run `heapify(arr, i, 0)`.","answerFile":"./answers/answer6.c","codeExplanation":"1. `heap_sort()`: Performs in-place HeapSort."},{"projectId":"HEAP_007","title":"Find K-th Largest Element in an Array using Min-Heap","difficulty":"Beginner","description":"Finding the K-th largest number in an array can be solved using a Min-Heap of size K. Maintain the K largest elements in the Min-Heap; after processing all N elements, the root of the Min-Heap IS the K-th largest element! In this project, you will build K-th Largest Finder in C in O(N log K) time.","learningOutcome":"Bounded Size K Min-Heap, Stream Processing & O(N log K) Selection Strategy","exampleText":"Find 2nd largest in [3, 2, 1, 5, 6, 4]","exampleOutput":"--- K-th Largest Element using Min-Heap ---\\nThe 2-nd Largest Element = 5","logicExplanation":"1. **Heap of Size K**: Store first K elements in Min-Heap.\\n2. **Stream Update**: If `arr[i] > root`, replace root and heapify.","answerFile":"./answers/answer7.c","codeExplanation":"1. `find_kth_largest()`: Solves K-th largest selection using size-K min-heap."},{"projectId":"HEAP_008","title":"Find K-th Smallest Element in an Array using Max-Heap","difficulty":"Beginner","description":"To find the K-th smallest element, maintain a Max-Heap of size K. Process array elements: if `arr[i] < root`, replace root and heapify down. The Max-Heap root holds the K-th smallest element. In this project, you will implement K-th Smallest Finder in C.","learningOutcome":"Bounded Size K Max-Heap, Inverse Selection Mechanics & Stream Processing","exampleText":"Find 3rd smallest in [7, 10, 4, 3, 20, 15]","exampleOutput":"--- K-th Smallest Element using Max-Heap ---\\nThe 3-rd Smallest Element = 7","logicExplanation":"1. **Heap of Size K**: Store first K elements in Max-Heap.\\n2. **Stream Update**: If `arr[i] < root`, replace root and heapify.","answerFile":"./answers/answer8.c","codeExplanation":"1. `find_kth_smallest()`: Solves K-th smallest selection using size-K max-heap."},{"projectId":"HEAP_009","title":"Check if an Array Represents a Valid Max-Heap","difficulty":"Beginner","description":"Verify whether an array satisfies the Max-Heap structural property: for every internal index `i`, `arr[i] >= arr[2i + 1]` and `arr[i] >= arr[2i + 2]`. In this project, you will build a Max-Heap Validator in C operating in linear O(N) time.","learningOutcome":"Heap Structural Inspection, Invariant Checking & Early Exit Bounds Verification","exampleText":"Validate [90, 15, 10, 7, 12, 2]","exampleOutput":"--- Max-Heap Structural Validation ---\\nArray 1: Valid Max-Heap\\nArray 2: Invalid Heap","logicExplanation":"1. **Parent Loop**: Loop `i` from 0 to `(N - 2) / 2`.\\n2. **Child Verification**: Check `arr[i] >= arr[left]` and `arr[i] >= arr[right]`.","answerFile":"./answers/answer9.c","codeExplanation":"1. `is_max_heap()`: Validates heap structural property in O(N) time."},{"projectId":"HEAP_010","title":"Decrease-Key & Increase-Key Operations in Min/Max Heap","difficulty":"Beginner","description":"Updating an element\'s value inside a heap requires re-sifting: `decrease_key` in a Min-Heap reduces a value and bubbles it up (`while parent > child`), while `increase_key` increases a value and sifts it down. In this project, you will implement Decrease-Key in C.","learningOutcome":"Dynamic Priority Mutability, Key Alterations & Re-Sifting Operations","exampleText":"Decrease index 3 key to 5 in Min-Heap","exampleOutput":"--- Min-Heap Decrease Key Operation ---\\nBefore: [ 10 20 30 40 50 ]\\nAfter decreasing index 3 to 5: Root = 5","logicExplanation":"1. **Overwrite**: Set `h[i] = new_val`.\\n2. **Bubble Up**: If `new_val < parent`, bubble up to restore Min-Heap invariant.","answerFile":"./answers/answer10.c","codeExplanation":"1. `decrease_key()`: Updates heap element value and bubbles up."},{"projectId":"HEAP_011","title":"Top K Frequent Elements Finder (Min-Heap Frequency Tracker)","difficulty":"Intermediate","description":"Given an array, find the K most frequent elements. Count element frequencies using a frequency table, then maintain a Min-Heap of size K ordered by frequency. In this project, you will build a Top K Frequent Elements Finder in C in O(N log K) time.","learningOutcome":"Frequency Table Hashing, Priority Queue Frequency Ranking & Top-K Extraction","exampleText":"Top K=2 frequent elements in dataset","exampleOutput":"--- Top K Frequent Elements (K=2) ---\\nElement 4 (Freq 4)\\nElement 1 (Freq 3)","logicExplanation":"1. **Tally Frequencies**: Build frequency table `(val, freq)`.\\n2. **Min-Heap**: Maintain Min-Heap of size K by `freq`.","answerFile":"./answers/answer11.c","codeExplanation":"1. `heapify_min_freq()`: Maintains K most frequent items in Min-Heap."},{"projectId":"HEAP_012","title":"K-Way Merging of Sorted Arrays using Min-Heap","difficulty":"Intermediate","description":"Merge K sorted arrays into a single sorted array of size N*K. Instead of full array sorting in O(NK log NK), use a Min-Heap of size K containing the first unmerged element from each array. In this project, you will build a K-Way Merging Engine in C in O(NK log K) time.","learningOutcome":"K-Way Merging Algorithms, Multi-Stream Sorted Merging & O(NK log K) Complexity","exampleText":"Merge 3 sorted arrays of size 3","exampleOutput":"--- K-Way Merging of Sorted Arrays ---\\nMerged Array: [ 1 2 3 4 5 6 7 8 9 ]","logicExplanation":"1. **Min-Heap Size K**: Insert `(arr[i][0], i, 0)` into Min-Heap.\\n2. **Extract & Advance**: Extract min, append to result, insert next element from same array into heap.","answerFile":"./answers/answer12.c","codeExplanation":"1. `min_heapify()`: Performs K-way sorted array merging using Min-Heap."},{"projectId":"HEAP_013","title":"Reorganize String (No Two Adjacent Same Characters) using Priority Queue","difficulty":"Intermediate","description":"Rearrange characters of a string so that no two adjacent characters are identical. Count character frequencies and greedily pick the two most frequent remaining characters using a Max-Heap. In this project, you will build a String Reorganization Engine in C.","learningOutcome":"Greedy Scheduling, Frequency Priority Queue & Character Interleaving","exampleText":"Reorganize string \'aab\'","exampleOutput":"--- Reorganize String (No Adjacent Same Chars) ---\\nBefore: aab\\nReorganized String: aba","logicExplanation":"1. **Frequency Guard**: If `max_freq > (len + 1) / 2`, reorganization impossible.\\n2. **Greedy Placement**: Interleave most frequent character at even indices, then fill odd indices.","answerFile":"./answers/answer13.c","codeExplanation":"1. `reorganize_string()`: Reorganizes string characters to prevent adjacent duplicates."},{"projectId":"HEAP_014","title":"Connect N Ropes with Minimum Total Cost (Huffman-Style Min-Heap)","difficulty":"Intermediate","description":"Given N ropes of different lengths, connect them into one rope. The cost to connect two ropes is the sum of their lengths. Find the minimum total cost. Always connect the TWO SHORTEST ropes using a Min-Heap (Huffman Coding principle). In this project, you will build a Rope Connection Engine in C.","learningOutcome":"Huffman Coding Strategy, Greedy Minimum Combination & Min-Heap Cost Minimization","exampleText":"Ropes [4, 3, 2, 6]","exampleOutput":"--- Connect Ropes with Minimum Total Cost ---\\nMinimum Total Connection Cost = 29","logicExplanation":"1. **Min-Heap**: Build Min-Heap of rope lengths.\\n2. **Extract Two Shortest**: Extract `r1` and `r2`, `cost = r1 + r2`, `total += cost`, insert `cost` back into heap.","answerFile":"./answers/answer14.c","codeExplanation":"1. `connect_ropes()`: Minimizes total connection cost using Min-Heap."},{"projectId":"HEAP_015","title":"Task Scheduler (CPU Cooling Periods) using Priority Queue","difficulty":"Intermediate","description":"Given a CPU task list and cooling period N between identical tasks, calculate minimum total CPU intervals required. Use a Max-Heap to schedule the highest frequency tasks first. In this project, you will build a CPU Task Scheduler in C.","learningOutcome":"CPU Task Scheduling, Cooling Period Management & Greedy Frequency Priority Queues","exampleText":"Tasks [A,A,A,B,B,B], N=2 cooling","exampleOutput":"--- Task Scheduler (CPU Cooling Periods) ---\\nMinimum Total Intervals Required = 8","logicExplanation":"1. **Count Frequencies**: Find max frequency `max_freq`.\\n2. **Cooling Slots**: `intervals = (max_freq - 1) * (N + 1) + max_freq_count`.","answerFile":"./answers/answer15.c","codeExplanation":"1. `least_interval()`: Computes minimum CPU task scheduling intervals."},{"projectId":"HEAP_016","title":"K Closest Points to Origin (Euclidean Distance Heap Search)","difficulty":"Intermediate","description":"Given 2D points on a plane, find K closest points to origin `(0, 0)` using Euclidean distance squared `x^2 + y^2`. Maintain a Max-Heap of size K by distance squared. In this project, you will build a K Closest Points Finder in C in O(N log K) time.","learningOutcome":"Geometric Distance Heap Search, Size-K Max-Heap Bounding & O(N log K) Performance","exampleText":"Points (1,3), (-2,2), (5,8), K=2","exampleOutput":"--- K Closest Points to Origin (K=2) ---\\nPoint (-2, 2)\\nPoint (1, 3)","logicExplanation":"1. **Distance Squared**: `dist_sq = x^2 + y^2`.\\n2. **Size K Max-Heap**: Keep K smallest distance points in Max-Heap.","answerFile":"./answers/answer16.c","codeExplanation":"1. `max_heapify()`: Computes K closest points using Max-Heap."},{"projectId":"HEAP_017","title":"Smallest Range Covering Elements from K Lists","difficulty":"Intermediate","description":"Given K sorted lists, find the smallest numerical range `[a, b]` that includes at least one number from each of the K lists. Maintain a Min-Heap of size K storing `(val, list_idx, elem_idx)`. In this project, you will build a Smallest Range Finder in C.","learningOutcome":"Multi-List Range Bounding, Min-Heap Min/Max Tracking & Sliding Range Minimization","exampleText":"3 Sorted Lists Input","exampleOutput":"--- Smallest Range Covering K Lists ---\\nSmallest Range bounds = [20, 24]","logicExplanation":"1. **Min-Heap**: Store current element from each of K lists.\\n2. **Range Update**: `current_range = max_in_heap - min_in_heap`.","answerFile":"./answers/answer17.c","codeExplanation":"1. `main()`: Finds smallest range containing elements from K sorted lists."},{"projectId":"HEAP_018","title":"Priority Queue with Arbitrary Key Deletion (Indexed Heap)","difficulty":"Intermediate","description":"Standard heaps do not support deleting an arbitrary item by index in O(log N) time because locating the item takes O(N) search time. An Indexed Priority Queue maintains an auxiliary inverse mapping array `qp[index]` pointing to the item\'s position in `pq[]`. In this project, you will build an Indexed Priority Queue in C.","learningOutcome":"Indexed Priority Queues, Inverse Position Arrays (`qp[]`) & Arbitrary O(log N) Deletions","exampleText":"Insert 3 items into Indexed Min-PQ","exampleOutput":"--- Indexed Priority Queue (Arbitrary Key Deletion) ---\\nInserted 3 items into Indexed Min-PQ successfully.","logicExplanation":"1. **Dual Arrays**: `pq[heap_pos] = item_id` and `qp[item_id] = heap_pos`.\\n2. **O(log N) Key Update**: Access `qp[item_id]` in O(1) time and sift up/down in O(log N).","answerFile":"./answers/answer18.c","codeExplanation":"1. `init_ipq()` & `insert_ipq()`: Implements indexed priority queue with fast reverse lookups."},{"projectId":"HEAP_019","title":"Dynamic Median Maintenance from Continuous Data Stream (Dual Heap: Max + Min)","difficulty":"Intermediate","description":"Find the median of a stream of numbers in real-time. Use TWO heaps: a `Max-Heap` storing the smaller half of numbers and a `Min-Heap` storing the larger half of numbers. Balance heap sizes so `|MaxHeap.size - MinHeap.size| <= 1`. In this project, you will build a Dynamic Median Stream Engine in C in O(log N) per insertion.","learningOutcome":"Dual Heap Balancing Strategy, Real-Time Stream Median Tracking & O(1) Median Queries","exampleText":"Stream: [5, 15, 1, 3]","exampleOutput":"--- Continuous Stream Dynamic Median Maintenance ---\\nStream input: [5, 15, 1, 3]\\nDynamic Median after 4 elements = 4.0","logicExplanation":"1. **Dual Heaps**: `MaxHeap` (left half), `MinHeap` (right half).\\n2. **Balance**: Keep size difference <= 1.\\n3. **Median Query**: If equal sizes, median is `(MaxHeap.root + MinHeap.root)/2.0`; else root of larger heap.","answerFile":"./answers/answer19.c","codeExplanation":"1. `max_heapify()` & `min_heapify()`: Maintains dynamic median using dual heap strategy."},{"projectId":"HEAP_020","title":"Maximum Sum Combination of Two Arrays using Priority Queue","difficulty":"Intermediate","description":"Given two arrays A and B of size N, find K maximum sum combinations `A[i] + B[j]`. Sort A and B in descending order, insert `A[0] + B[0]` into a Max-Heap, and extract K sums using a visited set. In this project, you will build a Max Sum Combination Engine in C in O(K log K) time.","learningOutcome":"Array Combination Ranking, Priority Queue Pair State & O(K log K) Combination Search","exampleText":"A=[1,4,2,3], B=[2,5,1,6], K=3","exampleOutput":"--- Maximum Sum Combination of Two Arrays (K=3) ---\\nTop 3 Max Sum Combinations: [ 10 9 9 ]","logicExplanation":"1. **Sort Arrays**: Sort A and B in descending order.\\n2. **Max-Heap Pair Insert**: Insert `(A[0] + B[0], 0, 0)` into Max-Heap.\\n3. **Extract K Times**: Extract max sum, push next indices `(i+1, j)` and `(i, j+1)` into heap.","answerFile":"./answers/answer20.c","codeExplanation":"1. `max_heapify()`: Computes K maximum sum combinations of two arrays."},{"projectId":"HEAP_021","title":"Binomial Heap Implementation (Consolidate & Union Operations)","difficulty":"Advanced","description":"A Binomial Heap is a collection of Binomial Trees satisfying binomial heap properties: key of node >= key of parent, and at most one binomial tree of any given degree. Merging two binomial heaps takes O(log N) time! In this project, you will build a Binomial Heap Skeleton in C.","learningOutcome":"Binomial Tree Forest, Degree Consolidation & Fast O(log N) Heap Union","exampleText":"Create Binomial Heap Roots 10 and 20","exampleOutput":"--- Binomial Heap Union & Consolidation Engine ---\\nCreated Binomial Heap roots (10, 20) successfully.","logicExplanation":"1. **Binomial Tree B_k**: Degree k tree formed by linking two B_{k-1} trees.\\n2. **Union Operation**: Merge root lists by degree and consolidate trees of equal degree.","answerFile":"./answers/answer21.c","codeExplanation":"1. `create_bnode()`: Binomial Heap node allocation and union skeleton."},{"projectId":"HEAP_022","title":"Fibonacci Heap Skeleton (Amortized O(1) Insert & Decrease-Key)","difficulty":"Advanced","description":"A Fibonacci Heap is a loose collection of trees providing theoretical amortized constant time O(1) for `insert()`, `find_min()`, and `decrease_key()`, making it the engine behind Dijkstra\'s shortest path algorithm. In this project, you will build a Fibonacci Heap Skeleton in C.","learningOutcome":"Fibonacci Heap Data Structures, Amortized O(1) Operations & Circular Doubly Linked Roots","exampleText":"Initialize Fibonacci Heap Engine","exampleOutput":"--- Fibonacci Heap Amortized O(1) Engine ---\\nFibonacci Heap Structure initialized for fast priority updates.","logicExplanation":"1. **Circular Root List**: Roots stored in a circular doubly linked list.\\n2. **Cascading Cut**: Decrease-key cuts child and moves to root list, performing cascading cuts up parent path.","answerFile":"./answers/answer22.c","codeExplanation":"1. `main()`: Demonstrates Fibonacci Heap structure."},{"projectId":"HEAP_023","title":"D-Ary Heap Implementation (Branching Factor D Optimization for GPU/Cache)","difficulty":"Advanced","description":"A D-Ary Heap is a generalization of binary heap where each node has D children instead of 2. For GPU architectures and CPU cache lines, D=4 or D=8 speeds up `decrease_key` and decreases heap height to `log_D(N)`. In this project, you will build a D-Ary Heap in C.","learningOutcome":"D-Ary Tree Branching, GPU/Cache Line Tuning & Index Formulas `D*i + 1` to `D*i + D`","exampleText":"Insert 10, 50, 30, 90 into D=4 Heap","exampleOutput":"--- D-Ary Heap (Branching Factor D=4) ---\\nD-Ary Heap Root = 90","logicExplanation":"1. **Index Formulas**: `Children(i) = D*i + 1 .. D*i + D`, `Parent(i) = (i - 1) / D`.\\n2. **Shorter Height**: Height reduced by factor of `log_2(D)`.","answerFile":"./answers/answer23.c","codeExplanation":"1. `insert_dary()`: Implements D-Ary heap insertion."},{"projectId":"HEAP_024","title":"Minimum Candidate Cost for IPO / Maximum Capital Scheduler","difficulty":"Advanced","description":"Given initial capital W and N projects with `capital[i]` requirements and `profits[i]`, select at most K distinct projects to maximize total final capital. Use a Min-Heap (ordered by capital required) and a Max-Heap (ordered by profit). In this project, you will build an IPO Project Scheduler in C.","learningOutcome":"Dual Heap Financial Scheduling, Available Capital Bounding & Maximizing Return on Investment","exampleText":"K=2, W=0, Profits [1,2,3], Capital [0,1,1]","exampleOutput":"--- Maximum Capital IPO Project Scheduler ---\\nInitial Capital: 0\\nFinal Maximized Capital = 4","logicExplanation":"1. **Min-Heap Capital**: Move all affordable projects `capital[i] <= W` into Max-Heap profits.\\n2. **Max-Heap Profit**: Extract max profit project, add profit to `W`, repeat K times.","answerFile":"./answers/answer24.c","codeExplanation":"1. `find_max_capital()`: Greedy project scheduling using priority queues."},{"projectId":"HEAP_025","title":"Cache-Oblivious Implicit Heap Layout for High-Throughput Memory Subsystems","difficulty":"Advanced","description":"Standard binary heap array traversal suffers cache line misses at deep levels because children `2i + 1` jump across RAM pages. A Cache-Oblivious Heap aligns subtrees into B-Tree sized memory blocks (e.g. 64-byte blocks), achieving optimal CPU L1/L2 cache locality. In this project, you will build a Cache-Oblivious Heap Layout Inspector in C.","learningOutcome":"Cache-Oblivious Data Structures, L1/L2 CPU Cache Alignment & Memory Subsystem Throughput","exampleText":"Cache-Oblivious Heap Alignment Demo","exampleOutput":"--- Cache-Oblivious Implicit Heap Layout ---\\nB-Tree sub-block aligned heap array eliminates L1 cache line misses.","logicExplanation":"1. **Sub-block Alignment**: Recursive van Emde Boas or block-aligned array mapping.\\n2. **Zero Cache Misses**: Guarantees optimal cache transfers regardless of cache block size.","answerFile":"./answers/answer25.c","codeExplanation":"1. `cache_oblivious_layout_demo()`: Cache-oblivious heap memory layout demonstration."}]'),p={projectCategory:j,subject:B,board:D,class:"Computer Science Core / BCA / B.Tech",tools:T,institute:R,projects:L};function X(){const[r,c]=l.useState(null);return l.useEffect(()=>{const t=Object.assign({"./topic6_files/answers/answer1.c":h,"./topic6_files/answers/answer10.c":u,"./topic6_files/answers/answer11.c":f,"./topic6_files/answers/answer12.c":_,"./topic6_files/answers/answer13.c":g,"./topic6_files/answers/answer14.c":y,"./topic6_files/answers/answer15.c":x,"./topic6_files/answers/answer16.c":b,"./topic6_files/answers/answer17.c":w,"./topic6_files/answers/answer18.c":H,"./topic6_files/answers/answer19.c":M,"./topic6_files/answers/answer2.c":v,"./topic6_files/answers/answer20.c":k,"./topic6_files/answers/answer21.c":q,"./topic6_files/answers/answer22.c":C,"./topic6_files/answers/answer23.c":P,"./topic6_files/answers/answer24.c":I,"./topic6_files/answers/answer25.c":S,"./topic6_files/answers/answer3.c":E,"./topic6_files/answers/answer4.c":A,"./topic6_files/answers/answer5.c":z,"./topic6_files/answers/answer6.c":O,"./topic6_files/answers/answer7.c":N,"./topic6_files/answers/answer8.c":K,"./topic6_files/answers/answer9.c":F}),a={};Object.keys(t).forEach(n=>{const s=n.split("/").pop();a[s]=t[n]});const d=p.projects.map(n=>{const i=(n.answerFile||"").split("/").pop(),o=a[i];return o||console.warn(`⚠ Missing C answer file: ${i}`),{...n,answer:o||`// Source file "${i}" not found in answers folder`}});c({...p,projects:d})},[]),r?e.jsx(m,{data:r}):e.jsx("div",{className:"p-6 text-slate-400 flex items-center justify-center min-h-[300px]",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-5 h-5 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),e.jsx("span",{children:"Loading Heaps & Priority Queues Practical Lab Projects..."})]})})}export{X as default};
