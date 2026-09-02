import{b as d,j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as f}from"./CProjectAnswerTemplateEnhanced-Cl148W-n.js";import"./CodeBlock-XVn6myHE.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const h=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct TNode {\r
    int data;\r
    struct TNode *left, *right;\r
} TNode;\r
\r
TNode* create_node(int val) {\r
    TNode *n = (TNode*)malloc(sizeof(TNode));\r
    n->data = val; n->left = NULL; n->right = NULL;\r
    return n;\r
}\r
\r
void inorder(TNode *root) {\r
    if (!root) return;\r
    inorder(root->left);\r
    printf("%d ", root->data);\r
    inorder(root->right);\r
}\r
\r
int main() {\r
    TNode *root = create_node(1);\r
    root->left = create_node(2);\r
    root->right = create_node(3);\r
    root->left->left = create_node(4);\r
\r
    printf("--- Binary Tree Inorder Traversal ---\\nInorder Sequence: ");\r
    inorder(root);\r
    printf("\\n");\r
    return 0;\r
}\r
`,g=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <stdbool.h>\r
#include <limits.h>\r
\r
typedef struct TNode {\r
    int data;\r
    struct TNode *left, *right;\r
} TNode;\r
\r
bool is_valid_bst(TNode *root, long min_val, long max_val) {\r
    if (!root) return true;\r
    if (root->data <= min_val || root->data >= max_val) return false;\r
    return is_valid_bst(root->left, min_val, root->data) && is_valid_bst(root->right, root->data, max_val);\r
}\r
\r
int main() {\r
    TNode *root = (TNode*)malloc(sizeof(TNode)); root->data = 10; root->left = NULL; root->right = NULL;\r
    root->left = (TNode*)malloc(sizeof(TNode)); root->left->data = 5; root->left->left = NULL; root->left->right = NULL;\r
    root->right = (TNode*)malloc(sizeof(TNode)); root->right->data = 15; root->right->left = NULL; root->right->right = NULL;\r
\r
    printf("--- Valid BST Validator ---\\n");\r
    if (is_valid_bst(root, LONG_MIN, LONG_MAX)) printf("Binary Tree is a VALID BST!\\n");\r
    else printf("Binary Tree is NOT a valid BST.\\n");\r
    return 0;\r
}\r
`,T=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct BSTNode {\r
    int key;\r
    struct BSTNode *left, *right;\r
} BSTNode;\r
\r
BSTNode* find_min(BSTNode *root) {\r
    while (root && root->left) root = root->left;\r
    return root;\r
}\r
\r
BSTNode* delete_bst(BSTNode *root, int key) {\r
    if (!root) return NULL;\r
    if (key < root->key) root->left = delete_bst(root->left, key);\r
    else if (key > root->key) root->right = delete_bst(root->right, key);\r
    else {\r
        if (!root->left) { BSTNode *temp = root->right; free(root); return temp; }\r
        else if (!root->right) { BSTNode *temp = root->left; free(root); return temp; }\r
        BSTNode *temp = find_min(root->right);\r
        root->key = temp->key;\r
        root->right = delete_bst(root->right, temp->key);\r
    }\r
    return root;\r
}\r
\r
void inorder(BSTNode *r) { if (r) { inorder(r->left); printf("%d ", r->key); inorder(r->right); } }\r
\r
int main() {\r
    BSTNode *root = (BSTNode*)malloc(sizeof(BSTNode)); root->key = 50; root->left = NULL; root->right = NULL;\r
    root->left = (BSTNode*)malloc(sizeof(BSTNode)); root->left->key = 30; root->left->left = NULL; root->left->right = NULL;\r
    root->right = (BSTNode*)malloc(sizeof(BSTNode)); root->right->key = 70; root->right->left = NULL; root->right->right = NULL;\r
\r
    printf("--- Delete Node from BST ---\\nBefore: "); inorder(root); printf("\\n");\r
    root = delete_bst(root, 30);\r
    printf("After deleting 30: "); inorder(root); printf("\\n");\r
    return 0;\r
}\r
`,p=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct BSTNode {\r
    int key;\r
    struct BSTNode *left, *right;\r
} BSTNode;\r
\r
BSTNode* lca_bst(BSTNode *root, int p, int q) {\r
    if (!root) return NULL;\r
    if (p < root->key && q < root->key) return lca_bst(root->left, p, q);\r
    if (p > root->key && q > root->key) return lca_bst(root->right, p, q);\r
    return root;\r
}\r
\r
int main() {\r
    BSTNode *root = (BSTNode*)malloc(sizeof(BSTNode)); root->key = 20; root->left = NULL; root->right = NULL;\r
    root->left = (BSTNode*)malloc(sizeof(BSTNode)); root->left->key = 8; root->left->left = NULL; root->left->right = NULL;\r
    root->right = (BSTNode*)malloc(sizeof(BSTNode)); root->right->key = 22; root->right->left = NULL; root->right->right = NULL;\r
\r
    printf("--- Lowest Common Ancestor in BST ---\\n");\r
    BSTNode *lca = lca_bst(root, 8, 22);\r
    if (lca) printf("LCA of 8 and 22 is %d\\n", lca->key);\r
    return 0;\r
}\r
`,m=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct TNode {\r
    int data;\r
    struct TNode *left, *right;\r
} TNode;\r
\r
TNode* lca_binary_tree(TNode *root, int p, int q) {\r
    if (!root || root->data == p || root->data == q) return root;\r
    TNode *l = lca_binary_tree(root->left, p, q);\r
    TNode *r = lca_binary_tree(root->right, p, q);\r
    if (l && r) return root;\r
    return l ? l : r;\r
}\r
\r
int main() {\r
    TNode *root = (TNode*)malloc(sizeof(TNode)); root->data = 1; root->left = NULL; root->right = NULL;\r
    root->left = (TNode*)malloc(sizeof(TNode)); root->left->data = 2; root->left->left = NULL; root->left->right = NULL;\r
    root->right = (TNode*)malloc(sizeof(TNode)); root->right->data = 3; root->right->left = NULL; root->right->right = NULL;\r
\r
    printf("--- Lowest Common Ancestor in Binary Tree ---\\n");\r
    TNode *lca = lca_binary_tree(root, 2, 3);\r
    if (lca) printf("LCA of 2 and 3 is %d\\n", lca->data);\r
    return 0;\r
}\r
`,N=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct TNode {\r
    int data;\r
    struct TNode *left, *right;\r
} TNode;\r
\r
int find_idx(int arr[], int start, int end, int val) {\r
    for (int i = start; i <= end; i++) if (arr[i] == val) return i;\r
    return -1;\r
}\r
\r
TNode* build_tree(int preorder[], int inorder[], int in_start, int in_end, int *pre_idx) {\r
    if (in_start > in_end) return NULL;\r
    int curr_val = preorder[(*pre_idx)++];\r
    TNode *n = (TNode*)malloc(sizeof(TNode));\r
    n->data = curr_val; n->left = NULL; n->right = NULL;\r
    if (in_start == in_end) return n;\r
\r
    int in_idx = find_idx(inorder, in_start, in_end, curr_val);\r
    n->left = build_tree(preorder, inorder, in_start, in_idx - 1, pre_idx);\r
    n->right = build_tree(preorder, inorder, in_idx + 1, in_end, pre_idx);\r
    return n;\r
}\r
\r
void print_inorder(TNode *r) { if (r) { print_inorder(r->left); printf("%d ", r->data); print_inorder(r->right); } }\r
\r
int main() {\r
    int preorder[] = {1, 2, 4, 3};\r
    int inorder[]  = {4, 2, 1, 3};\r
    int pre_idx = 0;\r
    printf("--- Construct Tree from Inorder & Preorder ---\\n");\r
    TNode *root = build_tree(preorder, inorder, 0, 3, &pre_idx);\r
    printf("Reconstructed Inorder: "); print_inorder(root); printf("\\n");\r
    return 0;\r
}\r
`,_=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <stdbool.h>\r
\r
typedef struct TNode {\r
    int data;\r
    struct TNode *left, *right;\r
} TNode;\r
\r
int abs(int x) { return (x < 0) ? -x : x; }\r
int max(int a, int b) { return (a > b) ? a : b; }\r
\r
int check_balance(TNode *root, bool *is_bal) {\r
    if (!root) return 0;\r
    int lh = check_balance(root->left, is_bal);\r
    int rh = check_balance(root->right, is_bal);\r
    if (abs(lh - rh) > 1) *is_bal = false;\r
    return 1 + max(lh, rh);\r
}\r
\r
int main() {\r
    TNode *root = (TNode*)malloc(sizeof(TNode)); root->data = 1; root->left = NULL; root->right = NULL;\r
    root->left = (TNode*)malloc(sizeof(TNode)); root->left->data = 2; root->left->left = NULL; root->left->right = NULL;\r
\r
    bool is_bal = true;\r
    check_balance(root, &is_bal);\r
    printf("--- Height-Balanced Tree Check ---\\nResult: Tree is %s\\n", is_bal ? "Balanced" : "Unbalanced");\r
    return 0;\r
}\r
`,L=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct BSTNode {\r
    int key;\r
    struct BSTNode *left, *right;\r
} BSTNode;\r
\r
void kth_smallest_util(BSTNode *root, int k, int *count, int *ans) {\r
    if (!root || *count >= k) return;\r
    kth_smallest_util(root->left, k, count, ans);\r
    (*count)++;\r
    if (*count == k) { *ans = root->key; return; }\r
    kth_smallest_util(root->right, k, count, ans);\r
}\r
\r
int kth_smallest(BSTNode *root, int k) {\r
    int count = 0, ans = -1;\r
    kth_smallest_util(root, k, &count, &ans);\r
    return ans;\r
}\r
\r
int main() {\r
    BSTNode *root = (BSTNode*)malloc(sizeof(BSTNode)); root->key = 50; root->left = NULL; root->right = NULL;\r
    root->left = (BSTNode*)malloc(sizeof(BSTNode)); root->left->key = 30; root->left->left = NULL; root->left->right = NULL;\r
    root->right = (BSTNode*)malloc(sizeof(BSTNode)); root->right->key = 70; root->right->left = NULL; root->right->right = NULL;\r
\r
    printf("--- K-th Smallest Element in BST ---\\n");\r
    int k = 2;\r
    printf("The %d-nd Smallest Key = %d\\n", k, kth_smallest(root, k));\r
    return 0;\r
}\r
`,y=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct TNode {\r
    int data;\r
    struct TNode *left, *right;\r
} TNode;\r
\r
void zigzag_traversal(TNode *root) {\r
    if (!root) return;\r
    TNode *s1[50], *s2[50];\r
    int t1 = -1, t2 = -1;\r
\r
    s1[++t1] = root;\r
    printf("Zig-Zag Level-Order Traversal: ");\r
    while (t1 != -1 || t2 != -1) {\r
        while (t1 != -1) {\r
            TNode *n = s1[t1--];\r
            printf("%d ", n->data);\r
            if (n->left) s2[++t2] = n->left;\r
            if (n->right) s2[++t2] = n->right;\r
        }\r
        while (t2 != -1) {\r
            TNode *n = s2[t2--];\r
            printf("%d ", n->data);\r
            if (n->right) s1[++t1] = n->right;\r
            if (n->left) s1[++t1] = n->left;\r
        }\r
    }\r
    printf("\\n");\r
}\r
\r
int main() {\r
    TNode *root = (TNode*)malloc(sizeof(TNode)); root->data = 1; root->left = NULL; root->right = NULL;\r
    root->left = (TNode*)malloc(sizeof(TNode)); root->left->data = 2; root->left->left = NULL; root->left->right = NULL;\r
    root->right = (TNode*)malloc(sizeof(TNode)); root->right->data = 3; root->right->left = NULL; root->right->right = NULL;\r
\r
    printf("--- Zig-Zag Spiral Level-Order Traversal ---\\n");\r
    zigzag_traversal(root);\r
    return 0;\r
}\r
`,B=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct BSTNode {\r
    int key;\r
    struct BSTNode *left, *right;\r
} BSTNode;\r
\r
BSTNode* sorted_array_to_bst(int arr[], int start, int end) {\r
    if (start > end) return NULL;\r
    int mid = start + (end - start) / 2;\r
    BSTNode *n = (BSTNode*)malloc(sizeof(BSTNode));\r
    n->key = arr[mid];\r
    n->left = sorted_array_to_bst(arr, start, mid - 1);\r
    n->right = sorted_array_to_bst(arr, mid + 1, end);\r
    return n;\r
}\r
\r
void inorder(BSTNode *r) { if (r) { inorder(r->left); printf("%d ", r->key); inorder(r->right); } }\r
\r
int main() {\r
    int arr[] = {10, 20, 30, 40, 50, 60, 70};\r
    int n = 7;\r
    printf("--- Sorted Array to Height-Balanced BST ---\\n");\r
    BSTNode *root = sorted_array_to_bst(arr, 0, n - 1);\r
    printf("Balanced BST Inorder: "); inorder(root); printf("\\n");\r
    return 0;\r
}\r
`,S=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct TNode {\r
    int data;\r
    struct TNode *left, *right;\r
} TNode;\r
\r
void print_leaves(TNode *root) {\r
    if (!root) return;\r
    print_leaves(root->left);\r
    if (!root->left && !root->right) printf("%d ", root->data);\r
    print_leaves(root->right);\r
}\r
\r
void print_boundary(TNode *root) {\r
    if (!root) return;\r
    printf("Boundary Traversal: %d ", root->data);\r
    print_leaves(root->left);\r
    print_leaves(root->right);\r
    printf("\\n");\r
}\r
\r
int main() {\r
    TNode *root = (TNode*)malloc(sizeof(TNode)); root->data = 20; root->left = NULL; root->right = NULL;\r
    root->left = (TNode*)malloc(sizeof(TNode)); root->left->data = 8; root->left->left = NULL; root->left->right = NULL;\r
    root->right = (TNode*)malloc(sizeof(TNode)); root->right->data = 22; root->right->left = NULL; root->right->right = NULL;\r
\r
    printf("--- Binary Tree Boundary Traversal ---\\n");\r
    print_boundary(root);\r
    return 0;\r
}\r
`,v=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct TNode {\r
    int data;\r
    struct TNode *left, *right;\r
} TNode;\r
\r
TNode* create_node(int val) {\r
    TNode *n = (TNode*)malloc(sizeof(TNode));\r
    n->data = val; n->left = NULL; n->right = NULL;\r
    return n;\r
}\r
\r
void level_order(TNode *root) {\r
    if (!root) return;\r
    TNode *queue[100]; int front = 0, rear = 0;\r
    queue[rear++] = root;\r
\r
    printf("Level-Order Traversal (BFS): ");\r
    while (front < rear) {\r
        TNode *curr = queue[front++];\r
        printf("%d ", curr->data);\r
        if (curr->left) queue[rear++] = curr->left;\r
        if (curr->right) queue[rear++] = curr->right;\r
    }\r
    printf("\\n");\r
}\r
\r
int main() {\r
    TNode *root = create_node(10);\r
    root->left = create_node(20); root->right = create_node(30);\r
    root->left->left = create_node(40); root->left->right = create_node(50);\r
\r
    printf("--- Binary Tree BFS Level-Order Traversal ---\\n");\r
    level_order(root);\r
    return 0;\r
}\r
`,b=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct TNode {\r
    int data;\r
    struct TNode *left, *right;\r
} TNode;\r
\r
typedef struct {\r
    TNode *node;\r
    int hd;\r
} QueueItem;\r
\r
void vertical_order(TNode *root) {\r
    if (!root) return;\r
    QueueItem q[100]; int front = 0, rear = 0;\r
    q[rear++] = (QueueItem){root, 0};\r
\r
    printf("Vertical Order Traversal Sample:\\n");\r
    while (front < rear) {\r
        QueueItem curr = q[front++];\r
        printf("Node %d at Horizontal Distance (HD) = %d\\n", curr.node->data, curr.hd);\r
        if (curr.node->left) q[rear++] = (QueueItem){curr.node->left, curr.hd - 1};\r
        if (curr.node->right) q[rear++] = (QueueItem){curr.node->right, curr.hd + 1};\r
    }\r
}\r
\r
int main() {\r
    TNode *root = (TNode*)malloc(sizeof(TNode)); root->data = 1; root->left = NULL; root->right = NULL;\r
    root->left = (TNode*)malloc(sizeof(TNode)); root->left->data = 2; root->left->left = NULL; root->left->right = NULL;\r
    root->right = (TNode*)malloc(sizeof(TNode)); root->right->data = 3; root->right->left = NULL; root->right->right = NULL;\r
\r
    printf("--- Vertical Order HD Indexing ---\\n");\r
    vertical_order(root);\r
    return 0;\r
}\r
`,x=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct AVLNode {\r
    int key, height;\r
    struct AVLNode *left, *right;\r
} AVLNode;\r
\r
int height(AVLNode *n) { return n ? n->height : 0; }\r
int max(int a, int b) { return (a > b) ? a : b; }\r
\r
AVLNode* create_avl_node(int key) {\r
    AVLNode *n = (AVLNode*)malloc(sizeof(AVLNode));\r
    n->key = key; n->height = 1; n->left = NULL; n->right = NULL;\r
    return n;\r
}\r
\r
AVLNode* right_rotate(AVLNode *y) {\r
    AVLNode *x = y->left;\r
    AVLNode *T2 = x->right;\r
    x->right = y; y->left = T2;\r
    y->height = max(height(y->left), height(y->right)) + 1;\r
    x->height = max(height(x->left), height(x->right)) + 1;\r
    return x;\r
}\r
\r
AVLNode* left_rotate(AVLNode *x) {\r
    AVLNode *y = x->right;\r
    AVLNode *T2 = y->left;\r
    y->left = x; x->right = T2;\r
    x->height = max(height(x->left), height(x->right)) + 1;\r
    y->height = max(height(y->left), height(y->right)) + 1;\r
    return y;\r
}\r
\r
int get_balance(AVLNode *n) { return n ? height(n->left) - height(n->right) : 0; }\r
\r
AVLNode* insert_avl(AVLNode *node, int key) {\r
    if (!node) return create_avl_node(key);\r
    if (key < node->key) node->left = insert_avl(node->left, key);\r
    else if (key > node->key) node->right = insert_avl(node->right, key);\r
    else return node;\r
\r
    node->height = 1 + max(height(node->left), height(node->right));\r
    int balance = get_balance(node);\r
\r
    if (balance > 1 && key < node->left->key) return right_rotate(node); // LL\r
    if (balance < -1 && key > node->right->key) return left_rotate(node); // RR\r
    if (balance > 1 && key > node->left->key) { // LR\r
        node->left = left_rotate(node->left);\r
        return right_rotate(node);\r
    }\r
    if (balance < -1 && key < node->right->key) { // RL\r
        node->right = right_rotate(node->right);\r
        return left_rotate(node);\r
    }\r
    return node;\r
}\r
\r
void pre_order(AVLNode *r) { if (r) { printf("%d ", r->key); pre_order(r->left); pre_order(r->right); } }\r
\r
int main() {\r
    AVLNode *root = NULL;\r
    printf("--- AVL Tree Self-Balancing Engine ---\\nInserting 10, 20, 30 (Triggers RR Rotation)...\\n");\r
    root = insert_avl(root, 10); root = insert_avl(root, 20); root = insert_avl(root, 30);\r
    printf("Preorder Traversal of Balanced AVL Tree: "); pre_order(root); printf("\\n");\r
    return 0;\r
}\r
`,w=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct AVLNode {\r
    int key, height;\r
    struct AVLNode *left, *right;\r
} AVLNode;\r
\r
int height(AVLNode *n) { return n ? n->height : 0; }\r
int max(int a, int b) { return (a > b) ? a : b; }\r
\r
AVLNode* create_avl_node(int key) {\r
    AVLNode *n = (AVLNode*)malloc(sizeof(AVLNode));\r
    n->key = key; n->height = 1; n->left = NULL; n->right = NULL;\r
    return n;\r
}\r
\r
int get_balance(AVLNode *n) { return n ? height(n->left) - height(n->right) : 0; }\r
\r
AVLNode* min_value_node(AVLNode *node) {\r
    AVLNode *current = node;\r
    while (current->left != NULL) current = current->left;\r
    return current;\r
}\r
\r
AVLNode* delete_avl(AVLNode *root, int key) {\r
    if (!root) return root;\r
    if (key < root->key) root->left = delete_avl(root->left, key);\r
    else if (key > root->key) root->right = delete_avl(root->right, key);\r
    else {\r
        if (!root->left || !root->right) {\r
            AVLNode *temp = root->left ? root->left : root->right;\r
            if (!temp) { temp = root; root = NULL; }\r
            else *root = *temp;\r
            free(temp);\r
        } else {\r
            AVLNode *temp = min_value_node(root->right);\r
            root->key = temp->key;\r
            root->right = delete_avl(root->right, temp->key);\r
        }\r
    }\r
    if (!root) return root;\r
    root->height = 1 + max(height(root->left), height(root->right));\r
    return root;\r
}\r
\r
int main() {\r
    AVLNode *root = create_avl_node(20);\r
    root->left = create_avl_node(10); root->right = create_avl_node(30);\r
\r
    printf("--- AVL Tree Deletion & Re-balancing ---\\n");\r
    root = delete_avl(root, 10);\r
    printf("Deleted 10 from AVL. Root Key = %d, Height = %d\\n", root->key, root->height);\r
    return 0;\r
}\r
`,k=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <string.h>\r
\r
typedef struct TNode {\r
    int data;\r
    struct TNode *left, *right;\r
} TNode;\r
\r
void serialize(TNode *root, char *str) {\r
    if (!root) { strcat(str, "# "); return; }\r
    char buf[16]; sprintf(buf, "%d ", root->data);\r
    strcat(str, buf);\r
    serialize(root->left, str);\r
    serialize(root->right, str);\r
}\r
\r
int main() {\r
    TNode *root = (TNode*)malloc(sizeof(TNode)); root->data = 1; root->left = NULL; root->right = NULL;\r
    root->left = (TNode*)malloc(sizeof(TNode)); root->left->data = 2; root->left->left = NULL; root->left->right = NULL;\r
\r
    char str[100] = "";\r
    serialize(root, str);\r
    printf("--- Tree Serialization (Preorder String Format) ---\\nSerialized Tree: %s\\n", str);\r
    return 0;\r
}\r
`,I=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <limits.h>\r
\r
typedef struct TNode {\r
    int data;\r
    struct TNode *left, *right;\r
} TNode;\r
\r
int max(int a, int b) { return (a > b) ? a : b; }\r
\r
int max_path_sum_util(TNode *root, int *max_sum) {\r
    if (!root) return 0;\r
    int left_sum = max(0, max_path_sum_util(root->left, max_sum));\r
    int right_sum = max(0, max_path_sum_util(root->right, max_sum));\r
    *max_sum = max(*max_sum, root->data + left_sum + right_sum);\r
    return root->data + max(left_sum, right_sum);\r
}\r
\r
int main() {\r
    TNode *root = (TNode*)malloc(sizeof(TNode)); root->data = 10; root->left = NULL; root->right = NULL;\r
    root->left = (TNode*)malloc(sizeof(TNode)); root->left->data = 2; root->left->left = NULL; root->left->right = NULL;\r
    root->right = (TNode*)malloc(sizeof(TNode)); root->right->data = 10; root->right->left = NULL; root->right->right = NULL;\r
\r
    int max_sum = INT_MIN;\r
    max_path_sum_util(root, &max_sum);\r
    printf("--- Maximum Path Sum in Binary Tree ---\\nMaximum Path Sum = %d\\n", max_sum);\r
    return 0;\r
}\r
`,U=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct TNode {\r
    int data;\r
    struct TNode *left, *right;\r
} TNode;\r
\r
void morris_inorder(TNode *root) {\r
    TNode *curr = root;\r
    printf("Morris Inorder Traversal (O(1) Space): ");\r
    while (curr) {\r
        if (!curr->left) {\r
            printf("%d ", curr->data);\r
            curr = curr->right;\r
        } else {\r
            TNode *pred = curr->left;\r
            while (pred->right && pred->right != curr) pred = pred->right;\r
            if (!pred->right) {\r
                pred->right = curr;\r
                curr = curr->left;\r
            } else {\r
                pred->right = NULL;\r
                printf("%d ", curr->data);\r
                curr = curr->right;\r
            }\r
        }\r
    }\r
    printf("\\n");\r
}\r
\r
int main() {\r
    TNode *root = (TNode*)malloc(sizeof(TNode)); root->data = 1; root->left = NULL; root->right = NULL;\r
    root->left = (TNode*)malloc(sizeof(TNode)); root->left->data = 2; root->left->left = NULL; root->left->right = NULL;\r
    root->right = (TNode*)malloc(sizeof(TNode)); root->right->data = 3; root->right->left = NULL; root->right->right = NULL;\r
\r
    morris_inorder(root);\r
    return 0;\r
}\r
`,E=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct TNode {\r
    int data;\r
    struct TNode *left, *right;\r
} TNode;\r
\r
int max(int a, int b) { return (a > b) ? a : b; }\r
\r
int get_height(TNode *root) {\r
    if (!root) return 0;\r
    return 1 + max(get_height(root->left), get_height(root->right));\r
}\r
\r
int main() {\r
    TNode *root = (TNode*)malloc(sizeof(TNode)); root->data = 1; root->left = NULL; root->right = NULL;\r
    root->left = (TNode*)malloc(sizeof(TNode)); root->left->data = 2; root->left->left = NULL; root->left->right = NULL;\r
    root->left->left = (TNode*)malloc(sizeof(TNode)); root->left->left->data = 3; root->left->left->left = NULL; root->left->left->right = NULL;\r
\r
    printf("--- Tree Height & Depth Calculator ---\\n");\r
    printf("Binary Tree Height = %d\\n", get_height(root));\r
    return 0;\r
}\r
`,C=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct TNode {\r
    int data;\r
    struct TNode *left, *right;\r
} TNode;\r
\r
int count_total_nodes(TNode *root) {\r
    if (!root) return 0;\r
    return 1 + count_total_nodes(root->left) + count_total_nodes(root->right);\r
}\r
\r
int count_leaf_nodes(TNode *root) {\r
    if (!root) return 0;\r
    if (!root->left && !root->right) return 1;\r
    return count_leaf_nodes(root->left) + count_leaf_nodes(root->right);\r
}\r
\r
int main() {\r
    TNode *root = (TNode*)malloc(sizeof(TNode)); root->data = 10; root->left = NULL; root->right = NULL;\r
    root->left = (TNode*)malloc(sizeof(TNode)); root->left->data = 5; root->left->left = NULL; root->left->right = NULL;\r
    root->right = (TNode*)malloc(sizeof(TNode)); root->right->data = 15; root->right->left = NULL; root->right->right = NULL;\r
\r
    printf("--- Tree Node Classification Count ---\\n");\r
    printf("Total Nodes = %d\\nLeaf Nodes  = %d\\n", count_total_nodes(root), count_leaf_nodes(root));\r
    return 0;\r
}\r
`,A=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <stdbool.h>\r
\r
typedef struct BSTNode {\r
    int key;\r
    struct BSTNode *left, *right;\r
} BSTNode;\r
\r
BSTNode* insert_bst(BSTNode *root, int key) {\r
    if (!root) {\r
        BSTNode *n = (BSTNode*)malloc(sizeof(BSTNode));\r
        n->key = key; n->left = NULL; n->right = NULL;\r
        return n;\r
    }\r
    if (key < root->key) root->left = insert_bst(root->left, key);\r
    else if (key > root->key) root->right = insert_bst(root->right, key);\r
    return root;\r
}\r
\r
bool search_bst(BSTNode *root, int key) {\r
    if (!root) return false;\r
    if (root->key == key) return true;\r
    if (key < root->key) return search_bst(root->left, key);\r
    return search_bst(root->right, key);\r
}\r
\r
int main() {\r
    BSTNode *root = NULL;\r
    printf("--- BST Insertion & Key Search Engine ---\\n");\r
    root = insert_bst(root, 50); root = insert_bst(root, 30); root = insert_bst(root, 70);\r
\r
    int key = 30;\r
    if (search_bst(root, key)) printf("Key %d FOUND in BST!\\n", key);\r
    else printf("Key %d NOT found in BST.\\n", key);\r
\r
    return 0;\r
}\r
`,R=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct BSTNode {\r
    int key;\r
    struct BSTNode *left, *right;\r
} BSTNode;\r
\r
BSTNode* find_min(BSTNode *root) {\r
    while (root && root->left) root = root->left;\r
    return root;\r
}\r
\r
BSTNode* find_max(BSTNode *root) {\r
    while (root && root->right) root = root->right;\r
    return root;\r
}\r
\r
int main() {\r
    BSTNode *root = (BSTNode*)malloc(sizeof(BSTNode)); root->key = 50; root->left = NULL; root->right = NULL;\r
    root->left = (BSTNode*)malloc(sizeof(BSTNode)); root->left->key = 20; root->left->left = NULL; root->left->right = NULL;\r
    root->right = (BSTNode*)malloc(sizeof(BSTNode)); root->right->key = 80; root->right->left = NULL; root->right->right = NULL;\r
\r
    printf("--- BST Minimum & Maximum Key Finder ---\\n");\r
    printf("Minimum Key = %d\\nMaximum Key = %d\\n", find_min(root)->key, find_max(root)->key);\r
    return 0;\r
}\r
`,O=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct BSTNode {\r
    int key;\r
    struct BSTNode *left, *right;\r
} BSTNode;\r
\r
BSTNode* inorder_successor(BSTNode *root, int target) {\r
    BSTNode *succ = NULL;\r
    BSTNode *curr = root;\r
    while (curr) {\r
        if (target < curr->key) {\r
            succ = curr;\r
            curr = curr->left;\r
        } else {\r
            curr = curr->right;\r
        }\r
    }\r
    return succ;\r
}\r
\r
int main() {\r
    BSTNode *root = (BSTNode*)malloc(sizeof(BSTNode)); root->key = 20; root->left = NULL; root->right = NULL;\r
    root->left = (BSTNode*)malloc(sizeof(BSTNode)); root->left->key = 8; root->left->left = NULL; root->left->right = NULL;\r
    root->right = (BSTNode*)malloc(sizeof(BSTNode)); root->right->key = 22; root->right->left = NULL; root->right->right = NULL;\r
\r
    printf("--- Inorder Successor in BST ---\\n");\r
    BSTNode *succ = inorder_successor(root, 8);\r
    if (succ) printf("Inorder Successor of 8 is %d\\n", succ->key);\r
    return 0;\r
}\r
`,z=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct TNode {\r
    int data;\r
    struct TNode *left, *right;\r
} TNode;\r
\r
TNode* mirror_tree(TNode *root) {\r
    if (!root) return NULL;\r
    TNode *temp = root->left;\r
    root->left = mirror_tree(root->right);\r
    root->right = mirror_tree(temp);\r
    return root;\r
}\r
\r
void inorder(TNode *r) { if (r) { inorder(r->left); printf("%d ", r->data); inorder(r->right); } }\r
\r
int main() {\r
    TNode *root = (TNode*)malloc(sizeof(TNode)); root->data = 1; root->left = NULL; root->right = NULL;\r
    root->left = (TNode*)malloc(sizeof(TNode)); root->left->data = 2; root->left->left = NULL; root->left->right = NULL;\r
    root->right = (TNode*)malloc(sizeof(TNode)); root->right->data = 3; root->right->left = NULL; root->right->right = NULL;\r
\r
    printf("--- Invert / Mirror Binary Tree ---\\nBefore: "); inorder(root); printf("\\n");\r
    root = mirror_tree(root);\r
    printf("After : "); inorder(root); printf("\\n");\r
    return 0;\r
}\r
`,V=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <stdbool.h>\r
\r
typedef struct TNode {\r
    int data;\r
    struct TNode *left, *right;\r
} TNode;\r
\r
bool is_identical(TNode *t1, TNode *t2) {\r
    if (!t1 && !t2) return true;\r
    if (!t1 || !t2) return false;\r
    return (t1->data == t2->data) && is_identical(t1->left, t2->left) && is_identical(t1->right, t2->right);\r
}\r
\r
int main() {\r
    TNode *r1 = (TNode*)malloc(sizeof(TNode)); r1->data = 1; r1->left = NULL; r1->right = NULL;\r
    TNode *r2 = (TNode*)malloc(sizeof(TNode)); r2->data = 1; r2->left = NULL; r2->right = NULL;\r
\r
    printf("--- Structural Tree Identity Check ---\\n");\r
    if (is_identical(r1, r2)) printf("Trees are Structurally Identical!\\n");\r
    else printf("Trees are NOT Identical.\\n");\r
    return 0;\r
}\r
`,D="DSA Module 2.1: Binary Trees, BST & Self-Balancing AVL Trees",F="Data Structures & Algorithms in C",j="University & Industrial Standards",H=["GCC Compiler","VS Code","GDB Debugger","Valgrind"],P={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},M=JSON.parse('[{"projectId":"TREE_001","title":"Binary Tree Node Creation & Recursive Traversals (Inorder, Preorder, Postorder)","difficulty":"Beginner","description":"A Binary Tree is a hierarchical non-linear data structure where each node has at most two child nodes (`left` and `right`). In this project, you will build a Binary Tree Engine in C supporting dynamic node allocation and the three classic recursive depth-first traversal algorithms: (1) Inorder (Left → Root → Right), (2) Preorder (Root → Left → Right), and (3) Postorder (Left → Right → Root).","learningOutcome":"Hierarchical Data Trees, Dynamic Node Allocation & Depth-First Traversals","exampleText":"Build Tree with Root 1, Left 2, Right 3","exampleOutput":"--- Binary Tree Inorder Traversal ---\\nInorder Sequence: 4 2 1 3","logicExplanation":"1. **Inorder**: Recursively visit `left`, print `root->data`, visit `right`.\\n2. **Preorder**: Print `root->data`, visit `left`, visit `right`.\\n3. **Postorder**: Visit `left`, visit `right`, print `root->data`.","answerFile":"./answers/answer1.c","codeExplanation":"1. `create_node()` & `inorder()`: Dynamic tree node creation and recursive DFS traversal."},{"projectId":"TREE_002","title":"Level-Order Traversal (BFS) using Queue","difficulty":"Beginner","description":"Breadth-First Search (BFS) Level-Order Traversal visits binary tree nodes layer by layer from top to bottom, left to right. In this project, you will implement Level-Order Traversal in C using a FIFO Queue. Enqueue `root`. While queue is non-empty, dequeue node, print data, and enqueue its left and right children.","learningOutcome":"Breadth-First Search (BFS), Queue-Driven Tree Layer Exploration & Level Traversal","exampleText":"Tree with Root 10, Children 20 & 30","exampleOutput":"--- Binary Tree BFS Level-Order Traversal ---\\nLevel-Order Traversal (BFS): 10 20 30 40 50","logicExplanation":"1. **Enqueue Root**: Start queue with `root`.\\n2. **Loop Dequeue**: Dequeue `curr`, print `data`, enqueue non-null `left` and `right`.","answerFile":"./answers/answer2.c","codeExplanation":"1. `level_order()`: Performs BFS layer-by-layer traversal using queue."},{"projectId":"TREE_003","title":"Calculate Height & Depth of a Binary Tree","difficulty":"Beginner","description":"The Height of a binary tree is the number of nodes along the longest path from root to leaf. In this project, you will implement a Recursive Height Calculator in C: `Height(root) = 1 + max(Height(left), Height(right))`, returning 0 for NULL roots.","learningOutcome":"Tree Height Metric, Divide-and-Conquer Maximum Depth Calculation & Base Cases","exampleText":"3-Level Binary Tree","exampleOutput":"--- Tree Height & Depth Calculator ---\\nBinary Tree Height = 3","logicExplanation":"1. **Base Case**: If `root == NULL`, height = 0.\\n2. **Divide-and-Conquer**: `height = 1 + max(height(left), height(right))`.","answerFile":"./answers/answer3.c","codeExplanation":"1. `get_height()`: Computes maximum depth path recursively."},{"projectId":"TREE_004","title":"Count Total Nodes, Leaf Nodes & Internal Nodes","difficulty":"Beginner","description":"In binary trees, nodes are categorized into Leaf Nodes (0 children) and Internal Nodes (1 or 2 children). In this project, you will build a Tree Node Classifier in C that recursively counts total nodes (`1 + left + right`) and leaf nodes (`left == NULL && right == NULL`).","learningOutcome":"Tree Structural Metrics, Leaf Node Detection & Recursive Counting Functions","exampleText":"Tree with 3 Nodes","exampleOutput":"--- Tree Node Classification Count ---\\nTotal Nodes = 3\\nLeaf Nodes  = 2","logicExplanation":"1. **Leaf Check**: If `!root->left && !root->right`, return 1.\\n2. **Total Count**: `1 + count(left) + count(right)`.","answerFile":"./answers/answer4.c","codeExplanation":"1. `count_total_nodes()` & `count_leaf_nodes()`: Counts structural node types."},{"projectId":"TREE_005","title":"Binary Search Tree (BST) Insertion & Key Search Engine","difficulty":"Beginner","description":"A Binary Search Tree (BST) maintains the BST Invariant: for every node, all keys in left subtree are strictly smaller, and all keys in right subtree are strictly larger. This guarantees O(log N) average time for search, insertion, and lookup. In this project, you will build a BST Insertion and Search Engine in C.","learningOutcome":"BST Search Invariant, Logarithmic O(log N) Lookup & Recursive BST Insertion","exampleText":"Insert 50, 30, 70 into BST, Search 30","exampleOutput":"--- BST Insertion & Key Search Engine ---\\nKey 30 FOUND in BST!","logicExplanation":"1. **Insert**: If `key < root->key`, insert left; else if `key > root->key`, insert right.\\n2. **Search**: Compare `key` with `root->key` to branch left or right.","answerFile":"./answers/answer5.c","codeExplanation":"1. `insert_bst()` & `search_bst()`: BST insertion and lookup functions."},{"projectId":"TREE_006","title":"Find Minimum & Maximum Key in a BST","difficulty":"Beginner","description":"Due to the BST invariant, the minimum key is always located at the leftmost node (`while (node->left)`), and the maximum key is located at the rightmost node (`while (node->right)`). In this project, you will build a BST Min/Max Extractor in C.","learningOutcome":"BST Property Exploitation, Extreme Values Search & O(H) Path Navigation","exampleText":"BST Keys: 20, 50, 80","exampleOutput":"--- BST Minimum & Maximum Key Finder ---\\nMinimum Key = 20\\nMaximum Key = 80","logicExplanation":"1. **Min**: Traverse `root->left` until `left == NULL`.\\n2. **Max**: Traverse `root->right` until `right == NULL`.","answerFile":"./answers/answer6.c","codeExplanation":"1. `find_min()` & `find_max()`: Finds minimum and maximum keys in BST."},{"projectId":"TREE_007","title":"Inorder Successor & Predecessor in a BST","difficulty":"Beginner","description":"The Inorder Successor of a node in a BST is the node with the smallest key strictly greater than target key. In this project, you will implement Inorder Successor Search in C in O(H) time without storing full inorder traversal arrays.","learningOutcome":"Inorder Traversal Sequence Bounds, Successor Tracking & BST Traversal Shortcuts","exampleText":"Find successor of 8 in BST [8, 20, 22]","exampleOutput":"--- Inorder Successor in BST ---\\nInorder Successor of 8 is 20","logicExplanation":"1. **Track Successor**: When `target < curr->key`, record `succ = curr` and move `left`.\\n2. **Move Right**: When `target >= curr->key`, move `right`.","answerFile":"./answers/answer7.c","codeExplanation":"1. `inorder_successor()`: Computes inorder successor in O(H) time."},{"projectId":"TREE_008","title":"Mirror / Flip a Binary Tree (Invert Binary Tree)","difficulty":"Beginner","description":"Inverting/mirroring a binary tree swaps left and right subtrees for every node in the tree. In this project, you will implement Invert Binary Tree in C recursively.","learningOutcome":"Subtree Swapping, Structural Inversion & Tree Symmetry Transformation","exampleText":"Mirror Tree [1, 2, 3]","exampleOutput":"--- Invert / Mirror Binary Tree ---\\nBefore: 2 1 3 \\nAfter : 3 1 2 ","logicExplanation":"1. **Swap Children**: Swap `root->left` and `root->right`.\\n2. **Recurse**: Recursively mirror left and right subtrees.","answerFile":"./answers/answer8.c","codeExplanation":"1. `mirror_tree()`: Inverts binary tree in-place."},{"projectId":"TREE_009","title":"Check if Two Binary Trees are Structurally Identical","difficulty":"Beginner","description":"Two binary trees are structurally identical if they have identical node layouts and matching node values at every corresponding position. In this project, you will build a Tree Equality Tester in C.","learningOutcome":"Dual Tree Comparison, Structural Equality Testing & Base Cases","exampleText":"Compare Tree 1 and Tree 2","exampleOutput":"--- Structural Tree Identity Check ---\\nTrees are Structurally Identical!","logicExplanation":"1. **Base Cases**: If both NULL, return true; if one NULL, return false.\\n2. **Value & Subtree Check**: `(t1->data == t2->data) && is_identical(t1->left, t2->left) && is_identical(t1->right, t2->right)`.","answerFile":"./answers/answer9.c","codeExplanation":"1. `is_identical()`: Checks if two binary trees are identical."},{"projectId":"TREE_010","title":"Check if a Binary Tree is a Valid Binary Search Tree (BST)","difficulty":"Beginner","description":"Checking if a binary tree is a valid BST requires enforcing range bounds `(min_val < node->data < max_val)` for every node, not just comparing a node with its immediate children. In this project, you will implement a Valid BST Validator in C.","learningOutcome":"Global Boundary Inheritance, BST Range Validation & Tree Correctness Proofs","exampleText":"Validate BST [5 < 10 < 15]","exampleOutput":"--- Valid BST Validator ---\\nBinary Tree is a VALID BST!","logicExplanation":"1. **Range Bounds**: Pass `min_val` and `max_val` down recursive calls.\\n2. **Condition**: `min_val < node->data && node->data < max_val`.","answerFile":"./answers/answer10.c","codeExplanation":"1. `is_valid_bst()`: Validates BST property using dynamic range bounds."},{"projectId":"TREE_011","title":"Delete a Node from a Binary Search Tree (BST)","difficulty":"Intermediate","description":"Deleting a node from a BST must preserve the BST invariant across 3 cases: (1) Leaf Node (simply free), (2) 1 Child (replace node with child), and (3) 2 Children (replace node key with Inorder Successor, then delete successor). In this project, you will build a complete BST Node Deletion Engine in C.","learningOutcome":"BST Node Deletion Algorithm, Inorder Successor Replacement & BST Maintenance","exampleText":"Delete 30 from BST [30, 50, 70]","exampleOutput":"--- Delete Node from BST ---\\nBefore: 30 50 70 \\nAfter deleting 30: 50 70 ","logicExplanation":"1. **0/1 Child**: Bypass node and free.\\n2. **2 Children**: Find minimum node in right subtree, overwrite key, delete successor recursively.","answerFile":"./answers/answer11.c","codeExplanation":"1. `delete_bst()`: Implements 3-case BST node deletion algorithm."},{"projectId":"TREE_012","title":"Lowest Common Ancestor (LCA) in a BST","difficulty":"Intermediate","description":"The Lowest Common Ancestor (LCA) of nodes P and Q in a BST is the lowest shared ancestor node. In a BST, if both P and Q are smaller than root, LCA is in left subtree; if both are larger, LCA is in right subtree; if root splits P and Q, root IS the LCA! In this project, you will build a BST LCA Search Engine in C.","learningOutcome":"BST Split Point Logic, Ancestor Traversal & Logarithmic O(H) LCA Search","exampleText":"LCA of 8 and 22 in BST [8, 20, 22]","exampleOutput":"--- Lowest Common Ancestor in BST ---\\nLCA of 8 and 22 is 20","logicExplanation":"1. **Both Left**: If `p < root` and `q < root`, LCA is in `root->left`.\\n2. **Both Right**: If `p > root` and `q > root`, LCA is in `root->right`.\\n3. **Split**: Otherwise, `root` is the LCA.","answerFile":"./answers/answer12.c","codeExplanation":"1. `lca_bst()`: Finds LCA in BST in O(H) time."},{"projectId":"TREE_013","title":"Lowest Common Ancestor (LCA) in a General Binary Tree","difficulty":"Intermediate","description":"Finding LCA in a general binary tree (without BST key ordering) requires searching both subtrees recursively. If P and Q are found in separate left and right subtrees of a node, that node is the LCA. In this project, you will implement General Binary Tree LCA in C.","learningOutcome":"General Tree LCA, Subtree Decomposition & Recursive Ancestor Convergence","exampleText":"LCA of 2 and 3 in Binary Tree","exampleOutput":"--- Lowest Common Ancestor in Binary Tree ---\\nLCA of 2 and 3 is 1","logicExplanation":"1. **Base Match**: If `root == P` or `root == Q`, return `root`.\\n2. **Recurse**: Search left and right subtrees.\\n3. **Both Non-Null**: If `left` and `right` return non-null, `root` is LCA.","answerFile":"./answers/answer13.c","codeExplanation":"1. `lca_binary_tree()`: Solves LCA in arbitrary binary tree."},{"projectId":"TREE_014","title":"Construct Binary Tree from Inorder & Preorder Traversal Sequences","difficulty":"Intermediate","description":"Given preorder and inorder traversal arrays of a binary tree, uniquely reconstruct the original binary tree structure. Preorder first element is root; finding root in inorder array splits left and right subtrees. In this project, you will build a Tree Reconstruction Engine in C.","learningOutcome":"Tree Reconstruction Algorithms, Traversal Sequence Parsing & Array Sub-range Splitting","exampleText":"Preorder [1, 2, 4, 3], Inorder [4, 2, 1, 3]","exampleOutput":"--- Construct Tree from Inorder & Preorder ---\\nReconstructed Inorder: 4 2 1 3","logicExplanation":"1. **Root Selection**: Pick root from `preorder[pre_idx++]`.\\n2. **Inorder Split**: Locate root index in `inorder[]` array.\\n3. **Build Subtrees**: Recursively build left subtree `[in_start .. in_idx-1]` and right subtree `[in_idx+1 .. in_end]`.","answerFile":"./answers/answer14.c","codeExplanation":"1. `build_tree()`: Reconstructs binary tree from traversal arrays."},{"projectId":"TREE_015","title":"Check if a Binary Tree is Height-Balanced (AVL Balance Factor Condition)","difficulty":"Intermediate","description":"A binary tree is Height-Balanced if for every node, the height difference between left and right subtrees is at most 1 (`|height(left) - height(right)| <= 1`). In this project, you will implement an AVL Balance Checker in C operating in O(N) time.","learningOutcome":"AVL Balance Factor, Bottom-Up Height Calculation & Balanced Tree Enforcement","exampleText":"Check height balance of 2-node tree","exampleOutput":"--- Height-Balanced Tree Check ---\\nResult: Tree is Balanced","logicExplanation":"1. **Bottom-Up Height**: Compute heights during postorder traversal.\\n2. **Balance Factor**: Check `|lh - rh| <= 1` at every node.","answerFile":"./answers/answer15.c","codeExplanation":"1. `check_balance()`: Verifies height-balanced property in O(N) time."},{"projectId":"TREE_016","title":"K-th Smallest / Largest Element in a BST","difficulty":"Intermediate","description":"Because Inorder Traversal of a BST visits nodes in strictly sorted ascending order, the K-th node visited during inorder traversal IS the K-th smallest element! In this project, you will build a K-th Smallest BST Extractor in C in O(H + K) time.","learningOutcome":"Inorder Order Statistics, K-th Smallest Element Search & Count Tracking","exampleText":"K=2 in BST [30, 50, 70]","exampleOutput":"--- K-th Smallest Element in BST ---\\nThe 2-nd Smallest Key = 50","logicExplanation":"1. **Inorder Counter**: Increment `count` at each node in inorder traversal.\\n2. **Match K**: When `count == K`, capture key and return.","answerFile":"./answers/answer16.c","codeExplanation":"1. `kth_smallest()`: Locates K-th smallest element via inorder counter."},{"projectId":"TREE_017","title":"Binary Tree Zig-Zag Level-Order Traversal (Spiral BFS)","difficulty":"Intermediate","description":"Zig-Zag Level-Order Traversal visits level 1 left-to-right, level 2 right-to-left, level 3 left-to-right, alternating direction at every level. In this project, you will build a Zig-Zag Traversal Engine in C using two stacks.","learningOutcome":"Zig-Zag Spiral Traversal, Dual Stack Level Flipping & Alternating Direction BFS","exampleText":"Zig-zag traversal of binary tree","exampleOutput":"--- Zig-Zag Spiral Level-Order Traversal ---\\nZig-Zag Level-Order Traversal: 1 3 2","logicExplanation":"1. **Dual Stacks**: `s1` for left-to-right levels, `s2` for right-to-left levels.\\n2. **Pop & Push**: Pop from `s1`, push children to `s2` (left then right). Pop from `s2`, push children to `s1` (right then left).","answerFile":"./answers/answer17.c","codeExplanation":"1. `zigzag_traversal()`: Alternates traversal direction per level using 2 stacks."},{"projectId":"TREE_018","title":"Convert Sorted Array to Height-Balanced BST","difficulty":"Intermediate","description":"Given a sorted array of numbers, construct a Height-Balanced BST. Pick the middle element `mid` as root to ensure left and right halves have equal number of nodes, then recurse on left and right sub-arrays. In this project, you will build a Sorted Array to BST Converter in C in O(N) time.","learningOutcome":"Divide-and-Conquer BST Construction, Middle Index Root Picking & Height Balance","exampleText":"Sorted Array [10, 20, 30, 40, 50, 60, 70]","exampleOutput":"--- Sorted Array to Height-Balanced BST ---\\nBalanced BST Inorder: 10 20 30 40 50 60 70","logicExplanation":"1. **Pick Mid**: `mid = start + (end - start)/2` becomes root.\\n2. **Sub-arrays**: `left = convert(start, mid-1)`, `right = convert(mid+1, end)`.","answerFile":"./answers/answer18.c","codeExplanation":"1. `sorted_array_to_bst()`: Builds height-balanced BST from sorted array."},{"projectId":"TREE_019","title":"Binary Tree Boundary Traversal (Outer Edge Walk)","difficulty":"Intermediate","description":"Boundary Traversal visits the outer boundary of a binary tree anti-clockwise: root, left boundary nodes, leaf nodes, and right boundary nodes in reverse. In this project, you will build a Boundary Traversal Engine in C.","learningOutcome":"Tree Perimeter Boundary Walk, Left/Right Boundary Extraction & Leaf Filtering","exampleText":"Tree Boundary Walk","exampleOutput":"--- Binary Tree Boundary Traversal ---\\nBoundary Traversal: 20 8 22","logicExplanation":"1. **Left Boundary**: Traverse left nodes excluding leaves.\\n2. **Leaves**: Traverse all leaf nodes.\\n3. **Right Boundary**: Traverse right nodes in reverse.","answerFile":"./answers/answer19.c","codeExplanation":"1. `print_boundary()`: Prints outer perimeter boundary of binary tree."},{"projectId":"TREE_020","title":"Vertical Order Traversal of Binary Tree (Horizontal Distance Indexing)","difficulty":"Intermediate","description":"Vertical Order Traversal groups nodes by Horizontal Distance (HD) from root (`root HD=0`, `left HD-1`, `right HD+1`). Nodes with identical HD belong to the same vertical line. In this project, you will build a Vertical Order Indexing Engine in C.","learningOutcome":"Horizontal Distance (HD) Coordinate System, Vertical Grid Line Grouping & BFS HD Tracking","exampleText":"Vertical HD indexing","exampleOutput":"--- Vertical Order HD Indexing ---\\nNode 1 at Horizontal Distance (HD) = 0\\nNode 2 at Horizontal Distance (HD) = -1\\nNode 3 at Horizontal Distance (HD) = 1","logicExplanation":"1. **HD Rules**: Root HD=0, Left child HD=parent.HD-1, Right child HD=parent.HD+1.\\n2. **BFS Queue**: Track `(node, HD)` pairs in queue during traversal.","answerFile":"./answers/answer20.c","codeExplanation":"1. `vertical_order()`: Computes HD coordinate positions for vertical tree grouping."},{"projectId":"TREE_021","title":"AVL Tree Self-Balancing Engine (Single LL/RR & Double LR/RL Rotations)","difficulty":"Advanced","description":"An AVL Tree is a self-balancing BST where the Balance Factor `BF = height(left) - height(right)` is strictly within `{-1, 0, 1}`. When an insertion causes `|BF| > 1`, AVL restores balance using tree rotations: (1) LL → Right Rotate, (2) RR → Left Rotate, (3) LR → Left-Right Rotate, (4) RL → Right-Left Rotate. In this project, you will build a complete AVL Self-Balancing Insertion Engine in C.","learningOutcome":"AVL Tree Rotations (LL, RR, LR, RL), Height Updates & Self-Balancing Invariants","exampleText":"Insert 10, 20, 30 into AVL (Triggers RR Left Rotation)","exampleOutput":"--- AVL Tree Self-Balancing Engine ---\\nInserting 10, 20, 30 (Triggers RR Rotation)...\\nPreorder Traversal of Balanced AVL Tree: 20 10 30","logicExplanation":"1. **Balance Check**: `BF = height(left) - height(right)`.\\n2. **Rotations**: Single rotations for LL/RR cases; double rotations for LR/RL cases.\\n3. **Height Maintenance**: Recalculate node height `1 + max(lh, rh)`.","answerFile":"./answers/answer21.c","codeExplanation":"1. `insert_avl()`, `left_rotate()`, `right_rotate()`: Implements AVL self-balancing tree."},{"projectId":"TREE_022","title":"AVL Tree Deletion with Re-Balancing & Height Updates","difficulty":"Advanced","description":"Deleting a key from an AVL Tree can alter heights and trigger balance factor violations along the ancestor path back to root. In this project, you will implement AVL Deletion with Post-Deletion Re-balancing in C.","learningOutcome":"AVL Tree Deletion, Path Re-balancing & Balance Factor Restorations","exampleText":"Delete 10 from AVL [10, 20, 30]","exampleOutput":"--- AVL Tree Deletion & Re-balancing ---\\nDeleted 10 from AVL. Root Key = 20, Height = 2","logicExplanation":"1. **Standard BST Delete**: Delete key using successor replacement.\\n2. **Update Height**: Recalculate height of current node.\\n3. **Re-balance**: Apply rotations if `|BF| > 1`.","answerFile":"./answers/answer22.c","codeExplanation":"1. `delete_avl()`: Performs AVL node deletion with path re-balancing."},{"projectId":"TREE_023","title":"Serialize and Deserialize a Binary Tree (Preorder String Format)","difficulty":"Advanced","description":"Serializing converts a binary tree into a string representation for file storage or network transmission; deserializing converts the string back into an exact copy of the binary tree. Use `#` for NULL markers. In this project, you will build a Tree Serializer in C.","learningOutcome":"Tree Serialization Protocols, String Marshalling & NULL Node Markers","exampleText":"Serialize tree with root 1, left 2","exampleOutput":"--- Tree Serialization (Preorder String Format) ---\\nSerialized Tree: 1 2 # # # ","logicExplanation":"1. **Preorder String**: Output node value followed by space; output `#` for NULL.\\n2. **Deserialization**: Parse tokens recursively to reconstruct left and right subtrees.","answerFile":"./answers/answer23.c","codeExplanation":"1. `serialize()`: Converts binary tree into preorder string with NULL markers."},{"projectId":"TREE_024","title":"Maximum Path Sum in a Binary Tree (Any Node to Any Node)","difficulty":"Advanced","description":"Find the maximum path sum in a binary tree where a path goes from any node to any node along parent-child connections. Nodes can contain positive or negative values. In this project, you will implement Maximum Path Sum in C in O(N) time.","learningOutcome":"Global Path Optimization, Dynamic Programming on Trees & Branch Sum Filtering","exampleText":"Tree with negative and positive nodes","exampleOutput":"--- Maximum Path Sum in Binary Tree ---\\nMaximum Path Sum = 22","logicExplanation":"1. **Branch Max**: `left_gain = max(0, max_path(left))`, `right_gain = max(0, max_path(right))`.\\n2. **Path Peak**: `current_path = node->data + left_gain + right_gain`.\\n3. **Global Max**: Update global maximum path sum.","answerFile":"./answers/answer24.c","codeExplanation":"1. `max_path_sum_util()`: Calculates maximum tree path sum in O(N) time."},{"projectId":"TREE_025","title":"Threaded Binary Tree (Morris Inorder Traversal in O(1) Space)","difficulty":"Advanced","description":"Standard tree traversals require O(H) stack/recursion space. Morris Inorder Traversal achieves Inorder Traversal in O(N) time and strictly O(1) auxiliary space by temporarily linking the right pointer of a node\'s inorder predecessor to the node itself (creating temporary threads). In this project, you will build Morris Inorder Traversal in C.","learningOutcome":"Morris Traversal Algorithm, Threaded Binary Trees & O(1) Memory Traversal","exampleText":"Morris Inorder [1, 2, 3]","exampleOutput":"Morris Inorder Traversal (O(1) Space): 2 1 3 ","logicExplanation":"1. **Predecessor Thread**: If `left` exists, find predecessor `pred` (rightmost node in left subtree). If `pred->right == NULL`, set `pred->right = curr` and move `curr = curr->left`.\\n2. **Remove Thread**: If `pred->right == curr`, restore `pred->right = NULL`, print `curr->data`, move `curr = curr->right`.","answerFile":"./answers/answer25.c","codeExplanation":"1. `morris_inorder()`: Performs Morris Inorder Traversal in O(1) space without stack."}]'),s={projectCategory:D,subject:F,board:j,class:"Computer Science Core / BCA / B.Tech",tools:H,institute:P,projects:M};function W(){const[n,c]=d.useState(null);return d.useEffect(()=>{const o=Object.assign({"./topic6_files/answers/answer1.c":h,"./topic6_files/answers/answer10.c":g,"./topic6_files/answers/answer11.c":T,"./topic6_files/answers/answer12.c":p,"./topic6_files/answers/answer13.c":m,"./topic6_files/answers/answer14.c":N,"./topic6_files/answers/answer15.c":_,"./topic6_files/answers/answer16.c":L,"./topic6_files/answers/answer17.c":y,"./topic6_files/answers/answer18.c":B,"./topic6_files/answers/answer19.c":S,"./topic6_files/answers/answer2.c":v,"./topic6_files/answers/answer20.c":b,"./topic6_files/answers/answer21.c":x,"./topic6_files/answers/answer22.c":w,"./topic6_files/answers/answer23.c":k,"./topic6_files/answers/answer24.c":I,"./topic6_files/answers/answer25.c":U,"./topic6_files/answers/answer3.c":E,"./topic6_files/answers/answer4.c":C,"./topic6_files/answers/answer5.c":A,"./topic6_files/answers/answer6.c":R,"./topic6_files/answers/answer7.c":O,"./topic6_files/answers/answer8.c":z,"./topic6_files/answers/answer9.c":V}),i={};Object.keys(o).forEach(r=>{const a=r.split("/").pop();i[a]=o[r]});const u=s.projects.map(r=>{const t=(r.answerFile||"").split("/").pop(),l=i[t];return l||console.warn(`⚠ Missing C answer file: ${t}`),{...r,answer:l||`// Source file "${t}" not found in answers folder`}});c({...s,projects:u})},[]),n?e.jsx(f,{data:n}):e.jsx("div",{className:"p-6 text-slate-400 flex items-center justify-center min-h-[300px]",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-5 h-5 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),e.jsx("span",{children:"Loading Trees, BST & AVL Practical Lab Projects..."})]})})}export{W as default};
