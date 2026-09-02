import{b as l,j as n}from"./vendor-react-core-Doz9nIC6.js";import{C as p}from"./CProjectAnswerTemplateEnhanced-Cl148W-n.js";import"./CodeBlock-XVn6myHE.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const h=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct Node {\r
    int data;\r
    struct Node *next;\r
} Node;\r
\r
Node* insert_at_head(Node *head, int val) {\r
    Node *new_node = (Node*)malloc(sizeof(Node));\r
    if (!new_node) return head;\r
    new_node->data = val;\r
    new_node->next = head;\r
    return new_node;\r
}\r
\r
void print_list(Node *head) {\r
    printf("Head -> ");\r
    Node *curr = head;\r
    while (curr) {\r
        printf("[%d | next] -> ", curr->data);\r
        curr = curr->next;\r
    }\r
    printf("NULL\\n");\r
}\r
\r
void free_list(Node *head) {\r
    Node *curr = head;\r
    while (curr) {\r
        Node *temp = curr;\r
        curr = curr->next;\r
        free(temp);\r
    }\r
}\r
\r
int main() {\r
    Node *head = NULL;\r
    printf("--- Singly Linked List Head Insertion ---\\n");\r
    head = insert_at_head(head, 30);\r
    head = insert_at_head(head, 20);\r
    head = insert_at_head(head, 10);\r
\r
    print_list(head);\r
    free_list(head);\r
    return 0;\r
}\r
`,f=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct Node {\r
    int data;\r
    struct Node *next;\r
} Node;\r
\r
Node* delete_at_position(Node *head, int k) {\r
    if (!head || k < 0) return head;\r
    if (k == 0) {\r
        Node *temp = head->next;\r
        free(head);\r
        return temp;\r
    }\r
    Node *curr = head;\r
    for (int i = 0; curr && i < k - 1; i++) {\r
        curr = curr->next;\r
    }\r
    if (curr && curr->next) {\r
        Node *temp = curr->next;\r
        curr->next = curr->next->next;\r
        free(temp);\r
    }\r
    return head;\r
}\r
\r
void print_list(Node *head) {\r
    Node *c = head; while (c) { printf("%d -> ", c->data); c = c->next; } printf("NULL\\n");\r
}\r
\r
int main() {\r
    Node *head = (Node*)malloc(sizeof(Node)); head->data = 5;\r
    head->next = (Node*)malloc(sizeof(Node)); head->next->data = 15;\r
    head->next->next = (Node*)malloc(sizeof(Node)); head->next->next->data = 25; head->next->next->next = NULL;\r
\r
    printf("--- Delete Node at Position K ---\\nBefore: "); print_list(head);\r
    head = delete_at_position(head, 1);\r
    printf("After deleting pos 1: "); print_list(head);\r
\r
    return 0;\r
}\r
`,x=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct Node {\r
    int data;\r
    struct Node *next;\r
} Node;\r
\r
Node* reverse_iterative(Node *head) {\r
    Node *prev = NULL, *curr = head, *next = NULL;\r
    while (curr) {\r
        next = curr->next;\r
        curr->next = prev;\r
        prev = curr;\r
        curr = next;\r
    }\r
    return prev;\r
}\r
\r
void print_list(Node *h) { while (h) { printf("%d -> ", h->data); h = h->next; } printf("NULL\\n"); }\r
\r
int main() {\r
    Node *h = (Node*)malloc(sizeof(Node)); h->data = 1;\r
    h->next = (Node*)malloc(sizeof(Node)); h->next->data = 2;\r
    h->next->next = (Node*)malloc(sizeof(Node)); h->next->next->data = 3; h->next->next->next = NULL;\r
\r
    printf("--- Iterative List Reversal (3-Pointer) ---\\nBefore: "); print_list(h);\r
    h = reverse_iterative(h);\r
    printf("Reversed: "); print_list(h);\r
\r
    return 0;\r
}\r
`,N=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct Node {\r
    int data;\r
    struct Node *next;\r
} Node;\r
\r
Node* reverse_recursive(Node *head) {\r
    if (!head || !head->next) return head;\r
    Node *new_head = reverse_recursive(head->next);\r
    head->next->next = head;\r
    head->next = NULL;\r
    return new_head;\r
}\r
\r
void print_list(Node *h) { while (h) { printf("%d -> ", h->data); h = h->next; } printf("NULL\\n"); }\r
\r
int main() {\r
    Node *h = (Node*)malloc(sizeof(Node)); h->data = 10;\r
    h->next = (Node*)malloc(sizeof(Node)); h->next->data = 20;\r
    h->next->next = (Node*)malloc(sizeof(Node)); h->next->next->data = 30; h->next->next->next = NULL;\r
\r
    printf("--- Recursive List Reversal ---\\nBefore: "); print_list(h);\r
    h = reverse_recursive(h);\r
    printf("Reversed: "); print_list(h);\r
\r
    return 0;\r
}\r
`,m=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <stdbool.h>\r
\r
typedef struct Node {\r
    int data;\r
    struct Node *next;\r
} Node;\r
\r
bool detect_cycle(Node *head) {\r
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
    Node *n3 = (Node*)malloc(sizeof(Node)); n3->data = 3;\r
    n1->next = n2; n2->next = n3; n3->next = n1; // Cycle: n3 -> n1\r
\r
    printf("--- Floyd's Cycle Detection ---\\n");\r
    if (detect_cycle(n1)) printf("Cycle Detected in Linked List!\\n");\r
    else printf("No Cycle Detected.\\n");\r
\r
    return 0;\r
}\r
`,L=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct Node {\r
    int data;\r
    struct Node *next;\r
} Node;\r
\r
Node* find_cycle_start(Node *head) {\r
    Node *slow = head, *fast = head;\r
    while (fast && fast->next) {\r
        slow = slow->next;\r
        fast = fast->next->next;\r
        if (slow == fast) {\r
            Node *entry = head;\r
            while (entry != slow) {\r
                entry = entry->next;\r
                slow = slow->next;\r
            }\r
            return entry;\r
        }\r
    }\r
    return NULL;\r
}\r
\r
int main() {\r
    Node *n1 = (Node*)malloc(sizeof(Node)); n1->data = 10;\r
    Node *n2 = (Node*)malloc(sizeof(Node)); n2->data = 20;\r
    Node *n3 = (Node*)malloc(sizeof(Node)); n3->data = 30;\r
    Node *n4 = (Node*)malloc(sizeof(Node)); n4->data = 40;\r
    n1->next = n2; n2->next = n3; n3->next = n4; n4->next = n2; // Cycle at n2\r
\r
    printf("--- Cycle Start Node Finder ---\\n");\r
    Node *start = find_cycle_start(n1);\r
    if (start) printf("Cycle starts at Node with Value = %d\\n", start->data);\r
\r
    return 0;\r
}\r
`,_=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct Node {\r
    int data;\r
    struct Node *next;\r
} Node;\r
\r
Node* merge_two_sorted(Node *l1, Node *l2) {\r
    Node dummy;\r
    Node *tail = &dummy;\r
    dummy.next = NULL;\r
\r
    while (l1 && l2) {\r
        if (l1->data <= l2->data) {\r
            tail->next = l1;\r
            l1 = l1->next;\r
        } else {\r
            tail->next = l2;\r
            l2 = l2->next;\r
        }\r
        tail = tail->next;\r
    }\r
    tail->next = (l1) ? l1 : l2;\r
    return dummy.next;\r
}\r
\r
void print_list(Node *h) { while (h) { printf("%d -> ", h->data); h = h->next; } printf("NULL\\n"); }\r
\r
int main() {\r
    Node *l1 = (Node*)malloc(sizeof(Node)); l1->data = 1;\r
    l1->next = (Node*)malloc(sizeof(Node)); l1->next->data = 3; l1->next->next = NULL;\r
\r
    Node *l2 = (Node*)malloc(sizeof(Node)); l2->data = 2;\r
    l2->next = (Node*)malloc(sizeof(Node)); l2->next->data = 4; l2->next->next = NULL;\r
\r
    printf("--- Merge Two Sorted Lists ---\\n");\r
    Node *merged = merge_two_sorted(l1, l2);\r
    print_list(merged);\r
\r
    return 0;\r
}\r
`,y=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <stdbool.h>\r
\r
typedef struct Node {\r
    int data;\r
    struct Node *next;\r
} Node;\r
\r
Node* reverse_list(Node *head) {\r
    Node *prev = NULL, *curr = head;\r
    while (curr) {\r
        Node *next = curr->next;\r
        curr->next = prev;\r
        prev = curr;\r
        curr = next;\r
    }\r
    return prev;\r
}\r
\r
bool is_palindrome(Node *head) {\r
    if (!head || !head->next) return true;\r
    Node *slow = head, *fast = head;\r
    while (fast && fast->next) {\r
        slow = slow->next;\r
        fast = fast->next->next;\r
    }\r
    Node *second_half = reverse_list(slow);\r
    Node *p1 = head, *p2 = second_half;\r
    bool res = true;\r
    while (p2) {\r
        if (p1->data != p2->data) { res = false; break; }\r
        p1 = p1->next;\r
        p2 = p2->next;\r
    }\r
    return res;\r
}\r
\r
int main() {\r
    Node *h = (Node*)malloc(sizeof(Node)); h->data = 1;\r
    h->next = (Node*)malloc(sizeof(Node)); h->next->data = 2;\r
    h->next->next = (Node*)malloc(sizeof(Node)); h->next->next->data = 2;\r
    h->next->next->next = (Node*)malloc(sizeof(Node)); h->next->next->next->data = 1;\r
    h->next->next->next->next = NULL;\r
\r
    printf("--- Palindrome Linked List Test ---\\n");\r
    if (is_palindrome(h)) printf("List is a Palindrome!\\n");\r
    else printf("List is NOT a Palindrome.\\n");\r
\r
    return 0;\r
}\r
`,w=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct Node {\r
    int data;\r
    struct Node *next;\r
} Node;\r
\r
void remove_duplicates_unsorted(Node *head) {\r
    Node *curr = head;\r
    while (curr) {\r
        Node *runner = curr;\r
        while (runner->next) {\r
            if (runner->next->data == curr->data) {\r
                Node *temp = runner->next;\r
                runner->next = runner->next->next;\r
                free(temp);\r
            } else {\r
                runner = runner->next;\r
            }\r
        }\r
        curr = curr->next;\r
    }\r
}\r
\r
void print_list(Node *h) { while (h) { printf("%d -> ", h->data); h = h->next; } printf("NULL\\n"); }\r
\r
int main() {\r
    Node *h = (Node*)malloc(sizeof(Node)); h->data = 10;\r
    h->next = (Node*)malloc(sizeof(Node)); h->next->data = 20;\r
    h->next->next = (Node*)malloc(sizeof(Node)); h->next->next->data = 10;\r
    h->next->next->next = (Node*)malloc(sizeof(Node)); h->next->next->next->data = 30;\r
    h->next->next->next->next = NULL;\r
\r
    printf("--- Remove Duplicates from Unsorted List ---\\nBefore: "); print_list(h);\r
    remove_duplicates_unsorted(h);\r
    printf("After : "); print_list(h);\r
\r
    return 0;\r
}\r
`,g=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct Node {\r
    int data;\r
    struct Node *next;\r
} Node;\r
\r
Node* get_intersection(Node *headA, Node *headB) {\r
    if (!headA || !headB) return NULL;\r
    Node *pA = headA, *pB = headB;\r
    while (pA != pB) {\r
        pA = (pA == NULL) ? headB : pA->next;\r
        pB = (pB == NULL) ? headA : pB->next;\r
    }\r
    return pA;\r
}\r
\r
int main() {\r
    Node *common = (Node*)malloc(sizeof(Node)); common->data = 8;\r
    common->next = (Node*)malloc(sizeof(Node)); common->next->data = 10; common->next->next = NULL;\r
\r
    Node *headA = (Node*)malloc(sizeof(Node)); headA->data = 4;\r
    headA->next = (Node*)malloc(sizeof(Node)); headA->next->data = 1; headA->next->next = common;\r
\r
    Node *headB = (Node*)malloc(sizeof(Node)); headB->data = 5;\r
    headB->next = common;\r
\r
    printf("--- Intersection Point of Two Linked Lists ---\\n");\r
    Node *intersect = get_intersection(headA, headB);\r
    if (intersect) printf("Intersection Node Value = %d\\n", intersect->data);\r
\r
    return 0;\r
}\r
`,v=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct Node {\r
    int data;\r
    struct Node *next;\r
} Node;\r
\r
Node* find_nth_from_end(Node *head, int n) {\r
    Node *fast = head, *slow = head;\r
    for (int i = 0; i < n; i++) {\r
        if (!fast) return NULL;\r
        fast = fast->next;\r
    }\r
    while (fast) {\r
        slow = slow->next;\r
        fast = fast->next;\r
    }\r
    return slow;\r
}\r
\r
int main() {\r
    Node *h = (Node*)malloc(sizeof(Node)); h->data = 10;\r
    h->next = (Node*)malloc(sizeof(Node)); h->next->data = 20;\r
    h->next->next = (Node*)malloc(sizeof(Node)); h->next->next->data = 30;\r
    h->next->next->next = (Node*)malloc(sizeof(Node)); h->next->next->next->data = 40;\r
    h->next->next->next->next = NULL;\r
\r
    printf("--- N-th Node from End (Two-Pointer Offset) ---\\nList: 10 -> 20 -> 30 -> 40 -> NULL\\n");\r
    int n = 2;\r
    Node *ans = find_nth_from_end(h, n);\r
    if (ans) printf("The %d-nd node from end = %d\\n", n, ans->data);\r
\r
    return 0;\r
}\r
`,k=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct Node {\r
    int data;\r
    struct Node *next;\r
} Node;\r
\r
int count_nodes_and_print_memory(Node *head) {\r
    int count = 0;\r
    Node *curr = head;\r
    printf("--- Node Memory Layout Inspection ---\\n");\r
    while (curr) {\r
        count++;\r
        printf("Node %d: Value=%d, RAM Address=%p, Next Address=%p\\n", count, curr->data, (void*)curr, (void*)curr->next);\r
        curr = curr->next;\r
    }\r
    return count;\r
}\r
\r
int main() {\r
    Node *n3 = (Node*)malloc(sizeof(Node)); n3->data = 300; n3->next = NULL;\r
    Node *n2 = (Node*)malloc(sizeof(Node)); n2->data = 200; n2->next = n3;\r
    Node *n1 = (Node*)malloc(sizeof(Node)); n1->data = 100; n1->next = n2;\r
\r
    int total = count_nodes_and_print_memory(n1);\r
    printf("Total Node Count = %d\\n", total);\r
\r
    free(n1); free(n2); free(n3);\r
    return 0;\r
}\r
`,b=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct DNode {\r
    int data;\r
    struct DNode *prev;\r
    struct DNode *next;\r
} DNode;\r
\r
DNode* delete_doubly_node(DNode *head, DNode *del) {\r
    if (!head || !del) return head;\r
    if (head == del) head = del->next;\r
    if (del->next) del->next->prev = del->prev;\r
    if (del->prev) del->prev->next = del->next;\r
    free(del);\r
    return head;\r
}\r
\r
void print_doubly(DNode *h) { while (h) { printf("%d <-> ", h->data); h = h->next; } printf("NULL\\n"); }\r
\r
int main() {\r
    DNode *n1 = (DNode*)malloc(sizeof(DNode)); n1->data = 10; n1->prev = NULL;\r
    DNode *n2 = (DNode*)malloc(sizeof(DNode)); n2->data = 20; n2->prev = n1; n1->next = n2;\r
    DNode *n3 = (DNode*)malloc(sizeof(DNode)); n3->data = 30; n3->prev = n2; n2->next = n3; n3->next = NULL;\r
\r
    printf("--- Doubly Linked List Node Deletion ---\\nBefore: "); print_doubly(n1);\r
    DNode *head = delete_doubly_node(n1, n2);\r
    printf("After deleting node 20: "); print_doubly(head);\r
\r
    return 0;\r
}\r
`,I=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct Node {\r
    int data;\r
    struct Node *next;\r
} Node;\r
\r
Node* reverse_k_group(Node *head, int k) {\r
    Node *curr = head;\r
    int count = 0;\r
    while (curr && count < k) { curr = curr->next; count++; }\r
    if (count == k) {\r
        Node *prev = NULL, *next = NULL, *c = head;\r
        for (int i = 0; i < k; i++) {\r
            next = c->next;\r
            c->next = prev;\r
            prev = c;\r
            c = next;\r
        }\r
        if (next) head->next = reverse_k_group(next, k);\r
        return prev;\r
    }\r
    return head;\r
}\r
\r
void print_list(Node *h) { while (h) { printf("%d -> ", h->data); h = h->next; } printf("NULL\\n"); }\r
\r
int main() {\r
    Node *h = (Node*)malloc(sizeof(Node)); h->data = 1;\r
    h->next = (Node*)malloc(sizeof(Node)); h->next->data = 2;\r
    h->next->next = (Node*)malloc(sizeof(Node)); h->next->next->data = 3;\r
    h->next->next->next = (Node*)malloc(sizeof(Node)); h->next->next->next->data = 4;\r
    h->next->next->next->next = (Node*)malloc(sizeof(Node)); h->next->next->next->next->data = 5;\r
    h->next->next->next->next->next = NULL;\r
\r
    printf("--- Reverse Nodes in K-Group (K=2) ---\\nBefore: "); print_list(h);\r
    h = reverse_k_group(h, 2);\r
    printf("After : "); print_list(h);\r
\r
    return 0;\r
}\r
`,D=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct Node {\r
    int data;\r
    struct Node *prev;\r
    struct Node *next;\r
    struct Node *child;\r
} Node;\r
\r
Node* flatten_multi_level(Node *head) {\r
    if (!head) return NULL;\r
    Node *curr = head;\r
    while (curr) {\r
        if (curr->child) {\r
            Node *next = curr->next;\r
            Node *child_tail = curr->child;\r
            while (child_tail->next) child_tail = child_tail->next;\r
\r
            curr->next = curr->child;\r
            curr->child->prev = curr;\r
            curr->child = NULL;\r
\r
            if (next) {\r
                child_tail->next = next;\r
                next->prev = child_tail;\r
            }\r
        }\r
        curr = curr->next;\r
    }\r
    return head;\r
}\r
\r
void print_flat(Node *h) { while (h) { printf("%d <-> ", h->data); h = h->next; } printf("NULL\\n"); }\r
\r
int main() {\r
    Node *n1 = (Node*)malloc(sizeof(Node)); n1->data = 1; n1->prev = NULL; n1->child = NULL;\r
    Node *n2 = (Node*)malloc(sizeof(Node)); n2->data = 2; n2->prev = n1; n1->next = n2; n2->next = NULL; n2->child = NULL;\r
\r
    Node *c1 = (Node*)malloc(sizeof(Node)); c1->data = 3; c1->prev = NULL; c1->next = NULL; c1->child = NULL;\r
    n1->child = c1;\r
\r
    printf("--- Flatten Multi-Level Doubly Linked List ---\\n");\r
    Node *head = flatten_multi_level(n1);\r
    print_flat(head);\r
\r
    return 0;\r
}\r
`,U=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct Node {\r
    int data;\r
    struct Node *next;\r
    struct Node *random;\r
} Node;\r
\r
Node* copy_random_list(Node *head) {\r
    if (!head) return NULL;\r
    // Step 1: Interleave cloned nodes\r
    Node *curr = head;\r
    while (curr) {\r
        Node *copy = (Node*)malloc(sizeof(Node));\r
        copy->data = curr->data;\r
        copy->next = curr->next;\r
        curr->next = copy;\r
        curr = copy->next;\r
    }\r
    // Step 2: Assign random pointers\r
    curr = head;\r
    while (curr) {\r
        if (curr->random) curr->next->random = curr->random->next;\r
        else curr->next->random = NULL;\r
        curr = curr->next->next;\r
    }\r
    // Step 3: Separate lists\r
    curr = head;\r
    Node *copy_head = head->next;\r
    while (curr) {\r
        Node *temp = curr->next;\r
        curr->next = temp->next;\r
        if (temp->next) temp->next = temp->next->next;\r
        curr = curr->next;\r
    }\r
    return copy_head;\r
}\r
\r
int main() {\r
    Node *n1 = (Node*)malloc(sizeof(Node)); n1->data = 10;\r
    Node *n2 = (Node*)malloc(sizeof(Node)); n2->data = 20;\r
    n1->next = n2; n2->next = NULL;\r
    n1->random = n2; n2->random = n1;\r
\r
    printf("--- Copy List with Random Pointers (Interleaving) ---\\n");\r
    Node *clone = copy_random_list(n1);\r
    printf("Clone Node 1: Val=%d, Random Val=%d\\n", clone->data, clone->random->data);\r
    printf("Clone Node 2: Val=%d, Random Val=%d\\n", clone->next->data, clone->next->random->data);\r
\r
    return 0;\r
}\r
`,S=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <stdint.h>\r
\r
typedef struct XNode {\r
    int data;\r
    struct XNode *npx; // XOR of prev and next pointers\r
} XNode;\r
\r
XNode* XOR(XNode *a, XNode *b) {\r
    return (XNode*)((uintptr_t)(a) ^ (uintptr_t)(b));\r
}\r
\r
XNode* insert_xor(XNode *head, int val) {\r
    XNode *n = (XNode*)malloc(sizeof(XNode));\r
    n->data = val;\r
    n->npx = XOR(NULL, head);\r
\r
    if (head) {\r
        XNode *next = XOR(NULL, head->npx);\r
        head->npx = XOR(n, next);\r
    }\r
    return n;\r
}\r
\r
void print_xor(XNode *head) {\r
    XNode *curr = head, *prev = NULL, *next;\r
    printf("XOR List Forward: ");\r
    while (curr) {\r
        printf("%d <-> ", curr->data);\r
        next = XOR(prev, curr->npx);\r
        prev = curr;\r
        curr = next;\r
    }\r
    printf("NULL\\n");\r
}\r
\r
int main() {\r
    XNode *head = NULL;\r
    printf("--- Memory-Efficient XOR Doubly Linked List ---\\n");\r
    head = insert_xor(head, 30);\r
    head = insert_xor(head, 20);\r
    head = insert_xor(head, 10);\r
\r
    print_xor(head);\r
    return 0;\r
}\r
`,T=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
#define POOL_SIZE 5\r
\r
typedef struct Node {\r
    int data;\r
    struct Node *next;\r
} Node;\r
\r
typedef struct {\r
    Node memory[POOL_SIZE];\r
    Node *free_list;\r
} MemoryPool;\r
\r
void init_pool(MemoryPool *pool) {\r
    for (int i = 0; i < POOL_SIZE - 1; i++) {\r
        pool->memory[i].next = &pool->memory[i + 1];\r
    }\r
    pool->memory[POOL_SIZE - 1].next = NULL;\r
    pool->free_list = &pool->memory[0];\r
}\r
\r
Node* pool_alloc(MemoryPool *pool, int val) {\r
    if (!pool->free_list) return NULL;\r
    Node *n = pool->free_list;\r
    pool->free_list = pool->free_list->next;\r
    n->data = val;\r
    n->next = NULL;\r
    return n;\r
}\r
\r
void pool_free(MemoryPool *pool, Node *n) {\r
    if (!n) return;\r
    n->next = pool->free_list;\r
    pool->free_list = n;\r
}\r
\r
int main() {\r
    MemoryPool pool;\r
    init_pool(&pool);\r
\r
    printf("--- Fixed-Size Custom Memory Pool Allocator ---\\n");\r
    Node *n1 = pool_alloc(&pool, 100);\r
    Node *n2 = pool_alloc(&pool, 200);\r
\r
    if (n1 && n2) {\r
        printf("Allocated Node 1 Val=%d at RAM %p\\n", n1->data, (void*)n1);\r
        printf("Allocated Node 2 Val=%d at RAM %p\\n", n2->data, (void*)n2);\r
    }\r
\r
    pool_free(&pool, n1);\r
    pool_free(&pool, n2);\r
    printf("Freed nodes back to custom pool successfully!\\n");\r
\r
    return 0;\r
}\r
`,O=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct Node {\r
    int data;\r
    struct Node *next;\r
} Node;\r
\r
typedef struct {\r
    Node *head;\r
    Node *tail;\r
} LinkedList;\r
\r
void append_tail(LinkedList *list, int val) {\r
    Node *new_node = (Node*)malloc(sizeof(Node));\r
    new_node->data = val;\r
    new_node->next = NULL;\r
\r
    if (!list->head) {\r
        list->head = new_node;\r
        list->tail = new_node;\r
    } else {\r
        list->tail->next = new_node;\r
        list->tail = new_node;\r
    }\r
}\r
\r
void print_list(LinkedList *list) {\r
    Node *curr = list->head;\r
    printf("List: ");\r
    while (curr) {\r
        printf("%d -> ", curr->data);\r
        curr = curr->next;\r
    }\r
    printf("NULL\\n");\r
}\r
\r
int main() {\r
    LinkedList list = {NULL, NULL};\r
    printf("--- O(1) Tail Insertion Engine ---\\n");\r
    append_tail(&list, 10);\r
    append_tail(&list, 20);\r
    append_tail(&list, 30);\r
\r
    print_list(&list);\r
    return 0;\r
}\r
`,P=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct Node {\r
    int data;\r
    struct Node *next;\r
} Node;\r
\r
Node* delete_by_key(Node *head, int key) {\r
    if (!head) return NULL;\r
    if (head->data == key) {\r
        Node *temp = head->next;\r
        free(head);\r
        return temp;\r
    }\r
\r
    Node *curr = head;\r
    while (curr->next && curr->next->data != key) {\r
        curr = curr->next;\r
    }\r
\r
    if (curr->next) {\r
        Node *temp = curr->next;\r
        curr->next = curr->next->next;\r
        free(temp);\r
    }\r
    return head;\r
}\r
\r
void print_list(Node *head) {\r
    Node *curr = head;\r
    while (curr) { printf("%d -> ", curr->data); curr = curr->next; }\r
    printf("NULL\\n");\r
}\r
\r
int main() {\r
    Node *head = (Node*)malloc(sizeof(Node)); head->data = 10;\r
    head->next = (Node*)malloc(sizeof(Node)); head->next->data = 20;\r
    head->next->next = (Node*)malloc(sizeof(Node)); head->next->next->data = 30; head->next->next->next = NULL;\r
\r
    printf("--- Node Deletion by Key ---\\nBefore: "); print_list(head);\r
    head = delete_by_key(head, 20);\r
    printf("After Deleting 20: "); print_list(head);\r
\r
    return 0;\r
}\r
`,C=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct DNode {\r
    int data;\r
    struct DNode *prev;\r
    struct DNode *next;\r
} DNode;\r
\r
DNode* insert_doubly_head(DNode *head, int val) {\r
    DNode *new_node = (DNode*)malloc(sizeof(DNode));\r
    new_node->data = val;\r
    new_node->prev = NULL;\r
    new_node->next = head;\r
\r
    if (head) head->prev = new_node;\r
    return new_node;\r
}\r
\r
void print_bidirectional(DNode *head) {\r
    printf("Forward : ");\r
    DNode *curr = head, *tail = NULL;\r
    while (curr) {\r
        printf("%d <-> ", curr->data);\r
        if (!curr->next) tail = curr;\r
        curr = curr->next;\r
    }\r
    printf("NULL\\nBackward: ");\r
    while (tail) {\r
        printf("%d <-> ", tail->data);\r
        tail = tail->prev;\r
    }\r
    printf("NULL\\n");\r
}\r
\r
int main() {\r
    DNode *head = NULL;\r
    printf("--- Doubly Linked List Bi-Directional Traversal ---\\n");\r
    head = insert_doubly_head(head, 30);\r
    head = insert_doubly_head(head, 20);\r
    head = insert_doubly_head(head, 10);\r
\r
    print_bidirectional(head);\r
    return 0;\r
}\r
`,E=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct DNode {\r
    int data;\r
    struct DNode *prev;\r
    struct DNode *next;\r
} DNode;\r
\r
typedef struct {\r
    DNode *head;\r
    DNode *tail;\r
} DoublyList;\r
\r
void push_front(DoublyList *list, int val) {\r
    DNode *n = (DNode*)malloc(sizeof(DNode));\r
    n->data = val; n->prev = NULL; n->next = list->head;\r
    if (list->head) list->head->prev = n;\r
    else list->tail = n;\r
    list->head = n;\r
}\r
\r
void push_back(DoublyList *list, int val) {\r
    DNode *n = (DNode*)malloc(sizeof(DNode));\r
    n->data = val; n->next = NULL; n->prev = list->tail;\r
    if (list->tail) list->tail->next = n;\r
    else list->head = n;\r
    list->tail = n;\r
}\r
\r
int main() {\r
    DoublyList list = {NULL, NULL};\r
    printf("--- Doubly Linked List Head & Tail Insertion ---\\n");\r
    push_front(&list, 20);\r
    push_front(&list, 10);\r
    push_back(&list, 30);\r
\r
    DNode *curr = list.head;\r
    printf("List: ");\r
    while (curr) { printf("%d <-> ", curr->data); curr = curr->next; }\r
    printf("NULL\\n");\r
    return 0;\r
}\r
`,A=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct Node {\r
    int data;\r
    struct Node *next;\r
} Node;\r
\r
Node* insert_circular(Node *head, int val) {\r
    Node *n = (Node*)malloc(sizeof(Node));\r
    n->data = val;\r
    if (!head) {\r
        n->next = n;\r
        return n;\r
    }\r
    Node *curr = head;\r
    while (curr->next != head) curr = curr->next;\r
    curr->next = n;\r
    n->next = head;\r
    return head;\r
}\r
\r
void print_circular(Node *head, int passes) {\r
    if (!head) return;\r
    Node *curr = head;\r
    int count = 0;\r
    printf("Circular Traversal (%d rounds): ", passes);\r
    while (count < passes) {\r
        printf("%d -> ", curr->data);\r
        curr = curr->next;\r
        if (curr == head) count++;\r
    }\r
    printf("(loop continues...)\\n");\r
}\r
\r
int main() {\r
    Node *head = NULL;\r
    printf("--- Circular Singly Linked List Simulation ---\\n");\r
    head = insert_circular(head, 10);\r
    head = insert_circular(head, 20);\r
    head = insert_circular(head, 30);\r
\r
    print_circular(head, 2);\r
    return 0;\r
}\r
`,R=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct Node {\r
    int data;\r
    struct Node *next;\r
} Node;\r
\r
int search_key(Node *head, int key) {\r
    int pos = 0;\r
    Node *curr = head;\r
    while (curr) {\r
        if (curr->data == key) return pos;\r
        pos++;\r
        curr = curr->next;\r
    }\r
    return -1;\r
}\r
\r
int main() {\r
    Node *head = (Node*)malloc(sizeof(Node)); head->data = 10;\r
    head->next = (Node*)malloc(sizeof(Node)); head->next->data = 25;\r
    head->next->next = (Node*)malloc(sizeof(Node)); head->next->next->data = 40; head->next->next->next = NULL;\r
\r
    printf("--- Key Search Engine ---\\n");\r
    int key = 25;\r
    int index = search_key(head, key);\r
    if (index != -1) printf("Key %d found at zero-based index: %d\\n", key, index);\r
    else printf("Key %d not found in list.\\n", key);\r
\r
    return 0;\r
}\r
`,F=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct Node {\r
    int data;\r
    struct Node *next;\r
} Node;\r
\r
Node* find_middle(Node *head) {\r
    if (!head) return NULL;\r
    Node *slow = head, *fast = head;\r
    while (fast && fast->next) {\r
        slow = slow->next;\r
        fast = fast->next->next;\r
    }\r
    return slow;\r
}\r
\r
int main() {\r
    Node *head = (Node*)malloc(sizeof(Node)); head->data = 10;\r
    head->next = (Node*)malloc(sizeof(Node)); head->next->data = 20;\r
    head->next->next = (Node*)malloc(sizeof(Node)); head->next->next->data = 30;\r
    head->next->next->next = (Node*)malloc(sizeof(Node)); head->next->next->next->data = 40;\r
    head->next->next->next->next = (Node*)malloc(sizeof(Node)); head->next->next->next->next->data = 50;\r
    head->next->next->next->next->next = NULL;\r
\r
    printf("--- Fast & Slow Pointer Middle Finder ---\\nList: 10 -> 20 -> 30 -> 40 -> 50 -> NULL\\n");\r
    Node *mid = find_middle(head);\r
    if (mid) printf("Middle Node Value = %d\\n", mid->data);\r
\r
    return 0;\r
}\r
`,z="DSA Module 1.2: Linked List Data Structures & Pointer Mechanics",M="Data Structures & Algorithms in C",B="University & Industrial Standards",K=["GCC Compiler","VS Code","GDB Debugger","Valgrind"],j={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},H=JSON.parse('[{"projectId":"LINKED_LIST_001","title":"Singly Linked List Creation & Dynamic Head Insertion Engine","difficulty":"Beginner","description":"Unlike standard arrays that require contiguous physical memory blocks, a Linked List stores data in discrete dynamic nodes scattered across heap memory. Each node consists of two parts: a data payload and a pointer holding the memory address of the next node. In this project, you will build a foundational Singly Linked List in C. You will write an O(1) head insertion function (`insert_at_head`) using dynamic memory allocation (`malloc`). When inserting a new value, your code allocates a node struct, populates its data field, points its `next` pointer to the current `head`, and updates `head` to point to the new node. You will also write a traversal function to display the node chain and a memory release function (`free_list`) that systematically frees every heap node to prevent memory leaks.","learningOutcome":"Heap Node Allocation (malloc), Pointer Manipulation & O(1) Head Insertion","exampleText":"Push 30, Push 20, Push 10 at Head","exampleOutput":"--- Singly Linked List Head Insertion ---\\nHead → [10 | next] → [20 | next] → [30 | next] → NULL","logicExplanation":"1. **Node Allocation**: Allocate dynamic node memory `(Node*)malloc(sizeof(Node))`.\\n2. **Pointer Relinking**: Set `new_node->next = head`.\\n3. **Head Update**: Set `head = new_node` to complete insertion in O(1) time.\\n4. **Heap Cleanup**: Traverse list using a temporary pointer and call `free()` on every node.","answerFile":"./answers/answer1.c","codeExplanation":"1. `insert_at_head()`: Allocates new node, points its next to head, and returns new head pointer.\\n2. `print_list()`: Iterates through node chain printing value and pointer links.\\n3. `free_list()`: Releases heap memory for all nodes sequentially."},{"projectId":"LINKED_LIST_002","title":"Singly Linked List Traversal, Node Counting & Memory Address Printer","difficulty":"Beginner","description":"Because linked list nodes are allocated dynamically on the heap, consecutive nodes are usually NOT stored in contiguous memory addresses! In this project, you will build a diagnostic Linked List Inspector. Your application traverses a Singly Linked List from `head` to `NULL`, counting the total number of nodes while printing the hexadecimal RAM memory address of each node (`%p`), its internal integer payload, and the address stored in its `next` pointer. This provides physical insight into non-contiguous heap allocation, pointer dereferencing, and boundary checking (`while (curr != NULL)`).","learningOutcome":"Non-Contiguous Heap Layout Inspection, Pointer Dereferencing & Node Counting","exampleText":"3-Node Linked List Allocation","exampleOutput":"--- Node Memory Layout Inspection ---\\nNode 1: Value=100, RAM Address=0x55e4b2, Next Address=0x55e4c8\\nNode 2: Value=200, RAM Address=0x55e4c8, Next Address=0x55e4e0\\nNode 3: Value=300, RAM Address=0x55e4e0, Next Address=(nil)\\nTotal Node Count = 3","logicExplanation":"1. **Traversal Loop**: Initialize `curr = head`, loop while `curr != NULL`.\\n2. **Address Formatter**: Print `curr->data`, `(void*)curr` (node RAM location), and `(void*)curr->next`.\\n3. **Counter Increment**: Increment node count at each iteration.","answerFile":"./answers/answer2.c","codeExplanation":"1. `count_nodes_and_print_memory()`: Iterates through nodes, printing memory pointers and counting total elements."},{"projectId":"LINKED_LIST_003","title":"Tail Insertion & Appending Engine with O(1) Tail Pointer Tracking","difficulty":"Beginner","description":"Inserting an element at the end (tail) of a Singly Linked List normally requires traversing from `head` all the way to the last node, taking O(N) time. However, in queue implementations and append-heavy data structures, we maintain a secondary `tail` pointer pointing directly to the last node. In this project, you will construct a Singly Linked List with Dual Pointer Tracking (`head` and `tail`). When appending a new node, if the list is empty, both `head` and `tail` point to the new node. If the list is non-empty, you link `tail->next = new_node` and update `tail = new_node` instantly in O(1) constant time without traversing the list!","learningOutcome":"Head & Tail Dual Pointer Management, Appending Mechanics & O(1) Tail Insertion","exampleText":"Append 10, Append 20, Append 30","exampleOutput":"--- O(1) Tail Insertion Engine ---\\nList: 10 → 20 → 30 → NULL","logicExplanation":"1. **Dual Pointer Struct**: Maintain `head` and `tail` pointers inside a `LinkedList` structure.\\n2. **Empty Case**: If `head == NULL`, set both `head = new_node` and `tail = new_node`.\\n3. **Non-Empty Append**: Set `tail->next = new_node`, then update `tail = new_node`.","answerFile":"./answers/answer3.c","codeExplanation":"1. `append_tail()`: Appends new node at the end in O(1) time using tail pointer."},{"projectId":"LINKED_LIST_004","title":"Node Deletion by Key with Safe Pointer Relinking & Memory Cleanup","difficulty":"Beginner","description":"Deleting a specific value from a Singly Linked List requires finding the target node, updating the previous node\'s `next` pointer to bypass the target node, and freeing the target node\'s memory. In this project, you will implement a Key-Based Node Deletion Engine in C. Your code handles three distinct scenarios: (1) empty list, (2) deleting the `head` node (which requires updating `head = head->next`), and (3) deleting a middle or trailing node by tracking `curr->next->data == key`. You will enforce strict memory safety by saving the target node pointer into a temporary variable `temp` before unlinking, calling `free(temp)` to eliminate memory leaks.","learningOutcome":"Node Deletion Logic, Head Replacement, Pointer Relinking & Zero-Leak Memory Freeing","exampleText":"Delete key 20 from [10 → 20 → 30]","exampleOutput":"--- Node Deletion by Key ---\\nBefore: 10 → 20 → 30 → NULL\\nAfter Deleting 20: 10 → 30 → NULL","logicExplanation":"1. **Head Match**: If `head->data == key`, save `temp = head`, update `head = head->next`, and `free(temp)`.\\n2. **Middle Match**: Search with `curr->next->data == key`, set `temp = curr->next`, update `curr->next = curr->next->next`, and `free(temp)`.\\n3. **Key Not Found**: If target is missing, return list unchanged.","answerFile":"./answers/answer4.c","codeExplanation":"1. `delete_by_key()`: Locates target key, relinks surrounding pointers, and frees node memory."},{"projectId":"LINKED_LIST_005","title":"Doubly Linked List Creation & Bi-Directional Traversal Engine","difficulty":"Beginner","description":"A Doubly Linked List (DLL) enhances Singly Linked Lists by giving each node two pointers: `next` (pointing forward) and `prev` (pointing backward). This enables bi-directional traversal (forward and reverse) and O(1) deletion when a node pointer is given. In this project, you will construct a Doubly Linked List in C. Each `DNode` contains `data`, `DNode *prev`, and `DNode *next`. You will write a head insertion function that properly updates both forward (`next`) and backward (`prev`) pointer links, followed by a dual traversal routine that prints the list forward from `head` to `tail` and backward from `tail` to `head`.","learningOutcome":"Doubly Linked List Architecture, Dual Pointer Links & Bi-Directional Traversal","exampleText":"Insert Head 30, 20, 10","exampleOutput":"--- Doubly Linked List Bi-Directional Traversal ---\\nForward : 10 <-> 20 <-> 30 <-> NULL\\nBackward: 30 <-> 20 <-> 10 <-> NULL","logicExplanation":"1. **Node Struct**: Node contains `data`, `struct DNode *prev`, `struct DNode *next`.\\n2. **Head Link Update**: Set `new_node->next = head`, `new_node->prev = NULL`. If `head != NULL`, set `head->prev = new_node`.\\n3. **Reverse Traversal**: Walk to tail using `next` pointer, then walk back to head using `prev` pointer.","answerFile":"./answers/answer5.c","codeExplanation":"1. `insert_doubly_head()`: Inserts node at head updating both prev and next pointers.\\n2. `print_bidirectional()`: Prints forward and reverse traversals."},{"projectId":"LINKED_LIST_006","title":"Doubly Linked List In-Place Head & Tail Insertion","difficulty":"Beginner","description":"Building a full Doubly Linked List container requires maintaining both `head` and `tail` boundary pointers for instant O(1) push_front and push_back operations. In this project, you will build a Doubly Linked List Container in C supporting both `push_front` and `push_back`. You will ensure that when inserting into an empty list, both `head` and `tail` point to the single new node. When pushing to the front or back of an existing list, both forward (`next`) and backward (`prev`) links of adjacent nodes are correctly updated without breaking structural integrity.","learningOutcome":"Doubly Linked List Head/Tail Boundary Management, Push Front & Push Back","exampleText":"Push Front 20, Push Front 10, Push Back 30","exampleOutput":"--- Doubly Linked List Head & Tail Insertion ---\\nList: 10 <-> 20 <-> 30 <-> NULL","logicExplanation":"1. **Push Front**: Set `n->next = head`. If `head` exists, `head->prev = n`; else `tail = n`. Update `head = n`.\\n2. **Push Back**: Set `n->prev = tail`. If `tail` exists, `tail->next = n`; else `head = n`. Update `tail = n`.","answerFile":"./answers/answer6.c","codeExplanation":"1. `push_front()` & `push_back()`: Perform O(1) front and back insertions on doubly linked list."},{"projectId":"LINKED_LIST_007","title":"Circular Singly Linked List Creation & Round-Robin Traversal","difficulty":"Beginner","description":"In a Circular Linked List, the `next` pointer of the final node points back to the `head` node instead of `NULL`, forming a continuous loop. Circular linked lists are widely used in operating system CPU round-robin scheduling, audio buffer looping, and multiplayer turn-taking games. In this project, you will implement a Circular Singly Linked List in C. You will write an insertion function that maintains the tail-to-head circular reference (`tail->next = head`) and write a round-robin traversal function that loops through the list a specified number of full cycles.","learningOutcome":"Circular Pointer Topologies, Round-Robin Looping & Eliminating NULL Terminated Boundaries","exampleText":"Insert 10, 20, 30 (Circular Loop)","exampleOutput":"--- Circular Singly Linked List Simulation ---\\nCircular Traversal (2 rounds): 10 → 20 → 30 → 10 → 20 → 30 → (loop continues...)","logicExplanation":"1. **Single Node Case**: If `head == NULL`, node points to itself (`n->next = n`).\\n2. **Circular Linkage**: Locate last node (`curr->next == head`), set `curr->next = n` and `n->next = head`.\\n3. **Loop Traversal**: Traverse `curr = curr->next` and track full rotations when `curr == head`.","answerFile":"./answers/answer7.c","codeExplanation":"1. `insert_circular()`: Maintains tail-to-head circular pointer.\\n2. `print_circular()`: Demonstrates multi-round circular traversal."},{"projectId":"LINKED_LIST_008","title":"Search Key in Linked List with Pointer Position Tracking","difficulty":"Beginner","description":"Unlike arrays where element access by index `i` is O(1), searching for a target value in a Linked List requires sequential linear traversal (O(N) time) starting from `head`. In this project, you will construct a Key Search Engine for Singly Linked Lists. Your program iterates through nodes using a position counter (`pos = 0`). If a node\'s data matches `key`, the function returns its zero-based index position. If the search reaches `NULL` without finding the key, it returns `-1`. You will test the search engine with both existing and non-existing search keys.","learningOutcome":"Sequential Search on Linked Structures, Index Position Tracking & Target Matching","exampleText":"Search key 25 in [10 → 25 → 40]","exampleOutput":"--- Key Search Engine ---\\nKey 25 found at zero-based index: 1","logicExplanation":"1. **Linear Search Loop**: Loop `curr` from `head` while `curr != NULL`.\\n2. **Match Check**: If `curr->data == key`, return `pos`.\\n3. **Not Found**: If loop finishes without match, return `-1`.","answerFile":"./answers/answer8.c","codeExplanation":"1. `search_key()`: Scans linked list sequentially and returns zero-based index of target key."},{"projectId":"LINKED_LIST_009","title":"Find Middle Node of Singly Linked List (Fast & Slow Pointer Technique)","difficulty":"Beginner","description":"Finding the middle node of a Singly Linked List in a single pass is a classic algorithm problem. A two-pass approach first counts total nodes N and then iterates N/2 steps. But using Floyd\'s Fast & Slow Pointer Technique (Tortoise and Hare), you can find the middle node in a SINGLE pass! In this project, you will implement Fast & Slow Pointers in C. Initialize `slow = head` and `fast = head`. Advance `slow` by 1 step (`slow = slow->next`) and `fast` by 2 steps (`fast = fast->next->next`). When `fast` reaches the end (`NULL` or `fast->next == NULL`), `slow` is guaranteed to be pointing exactly at the middle node!","learningOutcome":"Fast & Slow Pointer (Tortoise & Hare) Pattern, Single-Pass Middle Node Finding","exampleText":"List: 10 → 20 → 30 → 40 → 50 → NULL","exampleOutput":"--- Fast & Slow Pointer Middle Finder ---\\nList: 10 → 20 → 30 → 40 → 50 → NULL\\nMiddle Node Value = 30","logicExplanation":"1. **Two Pointers**: `slow` moves 1 node per iteration, `fast` moves 2 nodes.\\n2. **Speed Ratio**: Because `fast` travels twice as fast, when `fast` reaches end, `slow` is at `N/2`.\\n3. **Single Pass**: Solves problem in O(N) time and O(1) space in one pass.","answerFile":"./answers/answer9.c","codeExplanation":"1. `find_middle()`: Uses fast and slow pointers to locate center node in a single pass."},{"projectId":"LINKED_LIST_010","title":"Delete Linked List Node at Position K with Memory Deallocation","difficulty":"Beginner","description":"In contrast to deleting by key value, deleting a node at zero-based index position K requires navigating to index `K - 1` and updating its `next` pointer to point to index `K + 1`. In this project, you will build a Position-Based Node Deletion Engine in C. You will handle boundary conditions including: (1) invalid position K < 0 or out of bounds, (2) K = 0 (head node deletion), and (3) valid position K > 0 (traversing K-1 steps, relinking `curr->next = curr->next->next`, and freeing position K node).","learningOutcome":"Position-Based Pointer Navigation, Index Boundary Safety & Node Freeing","exampleText":"Delete position K=1 from [5 → 15 → 25]","exampleOutput":"--- Delete Node at Position K ---\\nBefore: 5 → 15 → 25 → NULL\\nAfter deleting pos 1: 5 → 25 → NULL","logicExplanation":"1. **Head Case (K=0)**: Save `temp = head`, update `head = head->next`, `free(temp)`.\\n2. **Position Navigation**: Loop `curr` K-1 steps. If `curr` and `curr->next` exist, set `temp = curr->next`, update `curr->next = curr->next->next`, `free(temp)`.","answerFile":"./answers/answer10.c","codeExplanation":"1. `delete_at_position()`: Navigates to position K-1, relinks pointers, and frees position K node."},{"projectId":"LINKED_LIST_011","title":"In-Place Singly Linked List Reversal (Iterative 3-Pointer Approach)","difficulty":"Intermediate","description":"Reversing a Singly Linked List in-place (reversing all `next` pointers so that the list flows from tail to head) is one of the most fundamental data structure operations. Creating a new reversed list doubles memory consumption. The optimal solution uses the Iterative 3-Pointer Technique. In this project, you will implement 3-Pointer List Reversal in C using `prev`, `curr`, and `next`. Initialize `prev = NULL`, `curr = head`. In a `while (curr != NULL)` loop: save `next = curr->next`, reverse link `curr->next = prev`, advance `prev = curr`, and advance `curr = next`. When the loop finishes, `prev` is the new `head` pointer!","learningOutcome":"Iterative 3-Pointer In-Place Reversal, Pointer Re-direction & O(1) Auxiliary Memory","exampleText":"Reverse [1 → 2 → 3]","exampleOutput":"--- Iterative List Reversal (3-Pointer) ---\\nBefore: 1 → 2 → 3 → NULL\\nReversed: 3 → 2 → 1 → NULL","logicExplanation":"1. **Three Pointers**: `prev = NULL`, `curr = head`, `next = NULL`.\\n2. **Pointer Reversal Loop**: Save `next = curr->next`, flip `curr->next = prev`, advance `prev = curr`, advance `curr = next`.\\n3. **New Head**: Return `prev` as new head pointer.","answerFile":"./answers/answer11.c","codeExplanation":"1. `reverse_iterative()`: Reverses all pointer direction links in-place in O(N) time."},{"projectId":"LINKED_LIST_012","title":"Recursive Singly Linked List Reversal Engine","difficulty":"Intermediate","description":"While iterative reversal uses explicit loops, list reversal can also be solved elegantly using Recursion! In this project, you will implement Recursive Linked List Reversal in C. The base case returns `head` if `head == NULL` or `head->next == NULL`. In the recursive step, call `new_head = reverse_recursive(head->next)`. To reverse the link between `head` and its successor, set `head->next->next = head` and break the old forward link with `head->next = NULL`. The function returns `new_head` up the call stack.","learningOutcome":"Recursive Call Stack Unwinding, Base Cases & Implicit Backtracking Pointer Reversal","exampleText":"Recursively reverse [10 → 20 → 30]","exampleOutput":"--- Recursive List Reversal ---\\nBefore: 10 → 20 → 30 → NULL\\nReversed: 30 → 20 → 10 → NULL","logicExplanation":"1. **Base Case**: If `!head || !head->next`, return `head`.\\n2. **Recursive Call**: `new_head = reverse_recursive(head->next)`.\\n3. **Link Inversion**: Set `head->next->next = head` and `head->next = NULL`.","answerFile":"./answers/answer12.c","codeExplanation":"1. `reverse_recursive()`: Uses call stack unwinding to reverse list links recursively."},{"projectId":"LINKED_LIST_013","title":"Detect Cycle in Linked List (Floyd\'s Tortoise and Hare Algorithm)","difficulty":"Intermediate","description":"A corrupt linked list can contain a cycle where a node\'s `next` pointer points back to a previously visited node, causing infinite traversal loops! Floyd\'s Cycle Detection Algorithm (Tortoise and Hare) detects cycles in O(N) time and O(1) auxiliary space. In this project, you will implement Floyd\'s Cycle Detection in C. Maintain `slow` and `fast` pointers starting at `head`. Move `slow` by 1 node and `fast` by 2 nodes per step. If a cycle exists, `fast` will enter the loop, catch up to `slow` from behind, and eventually `slow == fast`. If `fast` or `fast->next` reaches `NULL`, no cycle exists.","learningOutcome":"Floyd\'s Cycle Detection Algorithm, Mathematical Relative Velocity & Loop Identification","exampleText":"List with cyclic node connection n3 → n1","exampleOutput":"--- Floyd\'s Cycle Detection ---\\nCycle Detected in Linked List!","logicExplanation":"1. **Pointer Speed Difference**: `slow` speed = 1, `fast` speed = 2.\\n2. **Relative Speed**: In a loop of length C, distance between fast and slow decreases by 1 cell every step.\\n3. **Intersection Guarantee**: `fast` must meet `slow` if cycle exists.","answerFile":"./answers/answer13.c","codeExplanation":"1. `detect_cycle()`: Runs Tortoise & Hare algorithm to check for infinite pointer loops."},{"projectId":"LINKED_LIST_014","title":"Find Cycle Starting Node in Linked List (Mathematical Proof Engine)","difficulty":"Intermediate","description":"Detecting a cycle is only half the battle; real-world memory allocators and deadlock detectors need to find the EXACT node where the cycle begins! In this project, you will implement Cycle Start Node Detection in C based on Floyd\'s mathematical theorem. Phase 1 runs standard cycle detection until `slow` and `fast` meet at intersection node `K`. Phase 2 resets an `entry` pointer to `head` while keeping `slow` at `K`. Advance both `entry` and `slow` by 1 step simultaneously: the node where they meet is mathematically proven to be the exact cycle starting node!","learningOutcome":"Floyd\'s Mathematical Cycle Proof, Pointer Alignment & Exact Loop Entry Finding","exampleText":"Cyclic List where n4 points to n2","exampleOutput":"--- Cycle Start Node Finder ---\\nCycle starts at Node with Value = 20","logicExplanation":"1. **Mathematical Invariant**: Distance from `head` to cycle start equals distance from intersection point `K` to cycle start.\\n2. **Dual Step Traversal**: Reset `entry = head`. Advance `entry` and `slow` 1 step at a time.\\n3. **Meeting Point**: `entry == slow` yields the exact cycle entry node.","answerFile":"./answers/answer14.c","codeExplanation":"1. `find_cycle_start()`: Implements Phase 1 intersection and Phase 2 entry alignment to locate cycle start."},{"projectId":"LINKED_LIST_015","title":"Merge Two Sorted Linked Lists into Single Sorted Linked List","difficulty":"Intermediate","description":"Given two pre-sorted linked lists L1 and L2, combine them into a single sorted linked list in linear O(N + M) time without allocating new node data structures. In this project, you will build a Sorted List Merging Engine in C. You will use a dummy head node `dummy` and a `tail` pointer. In a `while (l1 != NULL && l2 != NULL)` loop, compare `l1->data` and `l2->data`, attach the smaller node to `tail->next`, and advance `l1` or `l2`. Once one list is exhausted, attach the remaining chain to `tail->next`.","learningOutcome":"Dummy Head Node Pattern, In-Place Node Splicing & MergeSort Sub-step","exampleText":"L1: [1 → 3], L2: [2 → 4]","exampleOutput":"--- Merge Two Sorted Lists ---\\nMerged: 1 → 2 → 3 → 4 → NULL","logicExplanation":"1. **Dummy Node**: Simplifies edge case handling for head pointer initialization.\\n2. **Pointer Comparison**: Compare `l1->data` vs `l2->data`, attach smaller node to `tail->next`.\\n3. **Remaining Splice**: Attach leftover non-null list directly in O(1) time.","answerFile":"./answers/answer15.c","codeExplanation":"1. `merge_two_sorted()`: Splices pre-sorted linked lists into a single sorted chain."},{"projectId":"LINKED_LIST_016","title":"Check if Singly Linked List is Palindrome (Half Reversal Method)","difficulty":"Intermediate","description":"A linked list is a Palindrome if its node values read the same forward and backward (e.g., [1 → 2 → 2 → 1]). Checking this in O(N) time and O(1) auxiliary space without copying to an array requires a multi-step technique. In this project, you will implement Palindrome Detection in C: (1) use Fast & Slow pointers to find the middle node, (2) reverse the second half of the linked list in-place, (3) compare elements of the first half and reversed second half node-by-node, and (4) restore the second half back to original order.","learningOutcome":"Multi-Step Algorithm Composition, In-Place Half Reversal & Palindrome Testing","exampleText":"Check [1 → 2 → 2 → 1]","exampleOutput":"--- Palindrome Linked List Test ---\\nList is a Palindrome!","logicExplanation":"1. **Find Middle**: Fast & Slow pointers locate middle node.\\n2. **Reverse Half**: Invert `next` links of second half in-place.\\n3. **Compare**: Compare first half vs reversed second half for value equality.","answerFile":"./answers/answer16.c","codeExplanation":"1. `is_palindrome()`: Uses middle node finding and half list reversal to test palindrome property."},{"projectId":"LINKED_LIST_017","title":"Remove Duplicates from Unsorted Linked List using Hash / Nested Loops","difficulty":"Intermediate","description":"Removing duplicate values from an UNSORTED linked list requires finding all recurring numbers and freeing their nodes. While a sorted list can remove duplicates in O(N) time, an unsorted list requires tracking visited values. In this project, you will implement an Unsorted Duplicate Remover in C using two pointer runners (`curr` and `runner`). For each node `curr`, `runner` scans all downstream nodes (`runner->next`); whenever `runner->next->data == curr->data`, the duplicate node is unlinked and freed in O(N^2) time and O(1) space.","learningOutcome":"Nested Pointer Runner Pattern, Unsorted Duplicate Cleanup & Dynamic Memory Management","exampleText":"Input: [10 → 20 → 10 → 30]","exampleOutput":"--- Remove Duplicates from Unsorted List ---\\nBefore: 10 → 20 → 10 → 30 → NULL\\nAfter : 10 → 20 → 30 → NULL","logicExplanation":"1. **Outer Loop**: `curr` iterates from head to end.\\n2. **Inner Runner**: `runner` checks `runner->next` against `curr->data`.\\n3. **Unlink Duplicate**: Set `temp = runner->next`, `runner->next = temp->next`, `free(temp)`.","answerFile":"./answers/answer17.c","codeExplanation":"1. `remove_duplicates_unsorted()`: Removes duplicate nodes from unsorted list using runner pointers."},{"projectId":"LINKED_LIST_018","title":"Intersection Point of Two Linked Lists (Y-Shaped Linked List)","difficulty":"Intermediate","description":"Suppose two separate Singly Linked Lists (List A and List B) merge at a common node, forming a Y-shaped structure. How do you find the exact intersecting node memory address in O(N + M) time and O(1) space? In this project, you will build an Intersection Finder in C using the Two-Pointer Traversal Swapping Technique. Initialize `pA = headA` and `pB = headB`. Advance both pointers 1 step at a time. When `pA` reaches `NULL`, redirect it to `headB`; when `pB` reaches `NULL`, redirect it to `headA`. Because both pointers traverse `Len(A) + Len(B)` nodes total, they will hit the exact intersecting node at the exact same step!","learningOutcome":"Y-Shaped Linked List Topologies, Two-Pointer Length Equalization & Intersection Finding","exampleText":"List A [4 → 1 → 8 → 10], List B [5 → 8 → 10]","exampleOutput":"--- Intersection Point of Two Linked Lists ---\\nIntersection Node Value = 8","logicExplanation":"1. **Length Equalization**: Redirecting `pA` to `headB` and `pB` to `headA` forces both pointers to travel identical distance `M + N`.\\n2. **Convergence Guarantee**: `pA` and `pB` meet at intersecting node or `NULL` simultaneously.","answerFile":"./answers/answer18.c","codeExplanation":"1. `get_intersection()`: Equalizes traversal paths to find Y-shaped list intersection."},{"projectId":"LINKED_LIST_019","title":"N-th Node from End of Linked List (Two-Pointer Offset Strategy)","difficulty":"Intermediate","description":"Finding the N-th node from the end of a Singly Linked List in a single pass without knowing the list length requires the Two-Pointer Offset Strategy. In this project, you will implement N-th From End Finder in C. Initialize `fast = head` and `slow = head`. Advance `fast` pointer N steps forward. Then, move both `fast` and `slow` forward 1 step at a time. When `fast` reaches `NULL`, `slow` is positioned exactly at the N-th node from the end!","learningOutcome":"Two-Pointer Offset Window, Single-Pass Tail Counting & Boundary Validation","exampleText":"Find 2nd node from end in [10 → 20 → 30 → 40]","exampleOutput":"--- N-th Node from End (Two-Pointer Offset) ---\\nList: 10 → 20 → 30 → 40 → NULL\\nThe 2-nd node from end = 30","logicExplanation":"1. **Advance Fast**: Move `fast` N steps ahead of `slow`.\\n2. **Simultaneous Traversal**: Advance `fast` and `slow` until `fast == NULL`.\\n3. **Offset Invariant**: Gap of N nodes guarantees `slow` lands at N-th node from end.","answerFile":"./answers/answer19.c","codeExplanation":"1. `find_nth_from_end()`: Uses N-step pointer offset window to locate node from tail."},{"projectId":"LINKED_LIST_020","title":"Doubly Linked List Node Deletion with Dual Pointer Relinking","difficulty":"Intermediate","description":"Deleting a given target node `del` from a Doubly Linked List is faster than in a Singly Linked List because `del` already contains a direct pointer to its predecessor (`del->prev`). In this project, you will implement Doubly Linked List Node Deletion in C. You will handle four boundary cases: (1) empty list or NULL node, (2) deleting `head` (`head = del->next`), (3) updating predecessor (`del->prev->next = del->next`), and (4) updating successor (`del->next->prev = del->prev`). You will carefully free `del` memory.","learningOutcome":"Doubly Linked List Node Deletion, Dual Link Cleanup & Head/Tail Re-assignment","exampleText":"Delete middle node 20 from [10 <-> 20 <-> 30]","exampleOutput":"--- Doubly Linked List Node Deletion ---\\nBefore: 10 <-> 20 <-> 30 <-> NULL\\nAfter deleting node 20: 10 <-> 30 <-> NULL","logicExplanation":"1. **Head Case**: If `del == head`, set `head = del->next`.\\n2. **Link Fixes**: If `del->next`, set `del->next->prev = del->prev`. If `del->prev`, set `del->prev->next = del->next`.\\n3. **Free Memory**: `free(del)`.","answerFile":"./answers/answer20.c","codeExplanation":"1. `delete_doubly_node()`: Relinks forward and backward pointers around deleted node."},{"projectId":"LINKED_LIST_021","title":"Reverse Nodes in K-Group (Grouped Reversal Engine)","difficulty":"Advanced","description":"Given a Singly Linked List, reverse the nodes of the list K at a time and return its modified list. If the number of nodes is not a multiple of K, left-over nodes at the end remain in original order. In this project, you will build a K-Group Reversal Engine in C. First, check if at least K nodes exist downstream. If yes, reverse K nodes using iterative pointer reversal and recursively link `head->next = reverse_k_group(next, k)`. If fewer than K nodes remain, return `head` without reversing.","learningOutcome":"K-Group Segmented Reversal, Hybrid Iterative-Recursive Relinking & Subsegment Management","exampleText":"Reverse in K=2 groups for [1 → 2 → 3 → 4 → 5]","exampleOutput":"--- Reverse Nodes in K-Group (K=2) ---\\nBefore: 1 → 2 → 3 → 4 → 5 → NULL\\nAfter : 2 → 1 → 4 → 3 → 5 → NULL","logicExplanation":"1. **Count K Nodes**: Verify at least K nodes exist.\\n2. **K-Node In-Place Reversal**: Reverse K nodes using 3 pointers.\\n3. **Recursive Stitching**: Link tail of reversed segment to result of next K-group recursive call.","answerFile":"./answers/answer21.c","codeExplanation":"1. `reverse_k_group()`: Performs segmented K-group list reversal recursively."},{"projectId":"LINKED_LIST_022","title":"Flattening a Multi-Level Doubly Linked List with Child Pointers","difficulty":"Advanced","description":"Suppose you have a Doubly Linked List where nodes can have a `child` pointer pointing to a separate sub-level doubly linked list. Flatten the multi-level structure into a single 1D doubly linked list where all nodes appear in depth-first order. In this project, you will build a Multi-Level Flattening Engine in C. As you traverse nodes, whenever `curr->child` is non-NULL, locate the tail of the child list, splice the child list between `curr` and `curr->next`, update `prev`/`next` links, and clear `curr->child = NULL`.","learningOutcome":"Multi-Level Hierarchical Structures, Depth-First Splicing & Complex Pointer Relinking","exampleText":"Multi-level list flattening","exampleOutput":"--- Flatten Multi-Level Doubly Linked List ---\\n1 <-> 3 <-> 2 <-> NULL","logicExplanation":"1. **Child Detection**: When `curr->child != NULL`, find tail of child branch.\\n2. **Splice Branch**: Set `child_tail->next = curr->next`, `curr->next = curr->child`, `curr->child->prev = curr`.\\n3. **Clear Child**: Set `curr->child = NULL`.","answerFile":"./answers/answer22.c","codeExplanation":"1. `flatten_multi_level()`: Flattens multi-level child branches into a single 1D list."},{"projectId":"LINKED_LIST_023","title":"Copy Linked List with Arbitrary/Random Pointers (Interleaving Technique)","difficulty":"Advanced","description":"Given a linked list where each node contains an extra `random` pointer pointing to any arbitrary node in the list or `NULL`, create a deep copy of the list. Doing this in O(N) time and O(1) auxiliary space without a hash table requires the Interleaving Technique. In this project, you will implement Deep Copy with Random Pointers in C: (1) insert cloned nodes immediately after original nodes (`orig->next = clone`), (2) assign `clone->random = orig->random->next`, and (3) separate interleaved lists back into original and cloned lists.","learningOutcome":"Deep Copying Graph-Like Topologies, Interleaved Node Splicing & O(1) Space Cloning","exampleText":"Copy list with random pointer cross-links","exampleOutput":"--- Copy List with Random Pointers (Interleaving) ---\\nClone Node 1: Val=10, Random Val=20\\nClone Node 2: Val=20, Random Val=10","logicExplanation":"1. **Interleave**: Duplicate each node `A → A\' → B → B\'`.\\n2. **Random Copy**: `curr->next->random = curr->random->next`.\\n3. **Unweave**: Separate original nodes and cloned nodes into independent chains.","answerFile":"./answers/answer23.c","codeExplanation":"1. `copy_random_list()`: Uses 3-pass interleaving technique to clone random pointer lists in O(1) space."},{"projectId":"LINKED_LIST_024","title":"Memory-Efficient XOR Doubly Linked List (Bitwise Pointer Compression)","difficulty":"Advanced","description":"Standard Doubly Linked Lists require TWO pointers per node (`prev` and `next`), taking 16 bytes of pointer overhead on 64-bit systems. An XOR Doubly Linked List compresses both pointers into a single pointer field `npx` storing the bitwise XOR address: `npx = Address(prev) ^ Address(next)`. In this project, you will build an XOR Doubly Linked List in C. Using uintptr_t casting and the bitwise XOR operator (`^`), you will write insertion and traversal routines that compute the next node address dynamically using `next = XOR(prev, curr->npx)`, reducing memory overhead by 50%!","learningOutcome":"Bitwise XOR Pointer Compression, uintptr_t Type Casting & Memory Overhead Reduction","exampleText":"XOR List Head Insert 30, 20, 10","exampleOutput":"--- Memory-Efficient XOR Doubly Linked List ---\\nXOR List Forward: 10 <-> 20 <-> 30 <-> NULL","logicExplanation":"1. **XOR Formula**: `npx = prev ^ next`.\\n2. **Forward Step**: `next = prev ^ curr->npx`.\\n3. **Backward Step**: `prev = next ^ curr->npx`.","answerFile":"./answers/answer24.c","codeExplanation":"1. `insert_xor()` & `print_xor()`: Implements XOR pointer arithmetic for 50% pointer memory compression."},{"projectId":"LINKED_LIST_025","title":"Fixed-Size Linked List Memory Pool Allocator (Zero-Fragmentation Custom Malloc)","difficulty":"Advanced","description":"Frequent `malloc()` and `free()` calls cause heap memory fragmentation and allocation latency. Embedded systems and high-frequency trading platforms pre-allocate a fixed contiguous memory pool array and manage node allocation using an internal free list. In this project, you will build a Custom Fixed-Size Memory Pool Allocator for Linked Lists in C. Your pool initializes a static node array and chains unallocated nodes into a free list. `pool_alloc()` pops a node from the free list in O(1) time without calling OS `malloc()`, and `pool_free()` pushes freed nodes back to the free list in O(1) time.","learningOutcome":"Custom Memory Managers, Pre-Allocated Pool Arenas & Zero-Fragmentation Allocation","exampleText":"Allocate 2 nodes from pre-allocated memory pool","exampleOutput":"--- Fixed-Size Custom Memory Pool Allocator ---\\nAllocated Node 1 Val=100 at RAM 0x7fff80\\nAllocated Node 2 Val=200 at RAM 0x7fff90\\nFreed nodes back to custom pool successfully!","logicExplanation":"1. **Pool Arena**: Declare static array `Node memory[POOL_SIZE]`.\\n2. **Free List Chain**: Initialize `free_list` linking all free slots.\\n3. **O(1) Alloc & Free**: Pop/push nodes from `free_list` without calling system `malloc`.","answerFile":"./answers/answer25.c","codeExplanation":"1. `init_pool()`, `pool_alloc()`, `pool_free()`: Implements custom high-performance zero-fragmentation memory pool."}]'),s={projectCategory:z,subject:M,board:B,class:"Computer Science Core / BCA / B.Tech",tools:K,institute:j,projects:H};function W(){const[r,c]=l.useState(null);return l.useEffect(()=>{const i=Object.assign({"./topic6_files/answers/answer1.c":h,"./topic6_files/answers/answer10.c":f,"./topic6_files/answers/answer11.c":x,"./topic6_files/answers/answer12.c":N,"./topic6_files/answers/answer13.c":m,"./topic6_files/answers/answer14.c":L,"./topic6_files/answers/answer15.c":_,"./topic6_files/answers/answer16.c":y,"./topic6_files/answers/answer17.c":w,"./topic6_files/answers/answer18.c":g,"./topic6_files/answers/answer19.c":v,"./topic6_files/answers/answer2.c":k,"./topic6_files/answers/answer20.c":b,"./topic6_files/answers/answer21.c":I,"./topic6_files/answers/answer22.c":D,"./topic6_files/answers/answer23.c":U,"./topic6_files/answers/answer24.c":S,"./topic6_files/answers/answer25.c":T,"./topic6_files/answers/answer3.c":O,"./topic6_files/answers/answer4.c":P,"./topic6_files/answers/answer5.c":C,"./topic6_files/answers/answer6.c":E,"./topic6_files/answers/answer7.c":A,"./topic6_files/answers/answer8.c":R,"./topic6_files/answers/answer9.c":F}),o={};Object.keys(i).forEach(e=>{const a=e.split("/").pop();o[a]=i[e]});const u=s.projects.map(e=>{const t=(e.answerFile||"").split("/").pop(),d=o[t];return d||console.warn(`⚠ Missing C answer file: ${t}`),{...e,answer:d||`// Source file "${t}" not found in answers folder`}});c({...s,projects:u})},[]),r?n.jsx(p,{data:r}):n.jsx("div",{className:"p-6 text-slate-400 flex items-center justify-center min-h-[300px]",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-5 h-5 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),n.jsx("span",{children:"Loading Linked List Practical Lab Projects..."})]})})}export{W as default};
