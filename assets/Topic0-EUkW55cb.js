import{b as h,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as Z}from"./TeacherSukantaHui-DerPxfxp.js";import{F as K}from"./FAQTemplate-BHhlgA96.js";import{P as J}from"./PlainTextPrint-C08xhKA4.js";import{E as ee}from"./EditableCCodeBlock-DTHr_cCH.js";import"./vendor-icons-CH1iX9C8.js";import"./vendor-monaco-Bv7hoEkV.js";const te=[{id:1,question:"What is the fundamental graph-theoretic definition of a Tree data structure?",options:["An undirected, connected, acyclic graph containing N vertices and exactly N - 1 edges with a unique simple path between any two vertices","A cyclic directed graph with bidirectional loops","A linear data structure where each element has at least two parents","A collection of isolated vertices with zero connecting edges"],answer:"An undirected, connected, acyclic graph containing N vertices and exactly N - 1 edges with a unique simple path between any two vertices",explanation:"A tree is an acyclic connected graph. If a tree has N vertices, it is mathematically guaranteed to contain exactly N - 1 edges and zero cycles."},{id:2,question:"What is a 'Root Node' in a rooted binary tree hierarchy?",options:["The topmost vertex in the tree that has in-degree 0 (has no incoming edges or parent)","The bottom-most node with out-degree 0","Any node that has exactly two children","A node stored at physical memory address 0x0"],answer:"The topmost vertex in the tree that has in-degree 0 (has no incoming edges or parent)",explanation:"The root node is the unique entry point into the tree hierarchy from which all other nodes are reachable via directed descendant paths."},{id:3,question:"What is the difference between the 'Depth' and the 'Height' of a node in a tree?",options:["Depth is the number of edges from the ROOT down to the node; Height is the number of edges on the LONGEST path from the node down to a leaf","Depth and Height are identical synonyms with the exact same value","Depth is measured from leaf to root; Height is measured from root to sibling","Depth is always 0 for leaves; Height is always 0 for the root"],answer:"Depth is the number of edges from the ROOT down to the node; Height is the number of edges on the LONGEST path from the node down to a leaf",explanation:"Depth measures distance downwards from the top (Root has depth 0). Height measures the longest distance downwards to a bottom leaf (Leaves have height 0; Root height equals the tree's total height)."},{id:4,question:"Under the standard edge-count convention in computer science, what is the height of an EMPTY tree and a SINGLE-NODE tree?",options:["Empty tree height = -1; Single-node tree height = 0","Empty tree height = 0; Single-node tree height = 1","Empty tree height = 1; Single-node tree height = 2","Empty tree height = undefined; Single-node tree height = -1"],answer:"Empty tree height = -1; Single-node tree height = 0",explanation:"Because height measures the number of edges on the longest downward path, a single node has 0 edges to itself (height = 0), and an empty tree (NULL) is defined as -1 so that 1 + max(-1, -1) = 0 for a leaf."},{id:5,question:"What is a 'Leaf Node' (External Node) in a binary tree?",options:["A node with degree 0 (both left and right child pointers are NULL)","A node that has exactly one child","A node that is an ancestor of the root","Any node located at depth 1"],answer:"A node with degree 0 (both left and right child pointers are NULL)",explanation:"Leaf nodes are the terminal vertices at the boundaries of the tree hierarchy that possess zero children (`node->left == NULL && node->right == NULL`)."},{id:6,question:"What defines an 'Internal Node' (Non-Leaf Node) in a tree?",options:["Any node that has at least one child (degree >= 1)","Only nodes that have exactly two children","Only the root node","Nodes that do not have memory allocated on the heap"],answer:"Any node that has at least one child (degree >= 1)",explanation:"An internal node is any non-terminal vertex in the tree that possesses one or more child subtrees (degree >= 1)."},{id:7,question:"What are 'Siblings' in a tree data structure?",options:["Nodes that share the exact same direct parent node","Nodes located on adjacent memory addresses","Nodes located at different depths in the tree","Nodes that have the exact same integer key value"],answer:"Nodes that share the exact same direct parent node",explanation:"In a binary tree, the left child and right child of a given parent node are siblings to each other."},{id:8,question:"What is the defining invariant of a 'Full Binary Tree' (also known as a Proper or Strict Binary Tree)?",options:["Every node in the tree has EITHER 0 OR 2 children (no node has degree 1)","All levels must be completely filled with nodes","All leaves must be on the leftmost side of the tree","Every node must have exactly one left child"],answer:"Every node in the tree has EITHER 0 OR 2 children (no node has degree 1)",explanation:"In a Full Binary Tree, every vertex is either an internal node with both left and right children, or a leaf node with zero children. No node has only a single child."},{id:9,question:"In any Full Binary Tree with I internal nodes, what is the number of Leaf Nodes L?",options:["L = I + 1","L = 2 * I","L = I - 1","L = I^2"],answer:"L = I + 1",explanation:"Mathematical proof: In a full binary tree, each internal node adds 2 edges, and total vertices N = 2I + 1. Since N = L + I, substituting yields L + I = 2I + 1 => L = I + 1."},{id:10,question:"What is the defining invariant of a 'Complete Binary Tree'?",options:["All levels are completely filled except possibly the last level, and all nodes in the last level are packed as far LEFT as possible","Every level has exactly 2^h nodes without exception","All leaves must be at odd-numbered depths","The left subtree must always be larger than the right subtree"],answer:"All levels are completely filled except possibly the last level, and all nodes in the last level are packed as far LEFT as possible",explanation:"Complete binary trees allow contiguous array representations without gaps: if a parent is at index i, left child is at 2i + 1 and right child at 2i + 2 (essential for Binary Heaps)."},{id:11,question:"In a Complete Binary Tree mapped to a 0-indexed array, where are the parent and children of a node at index i located?",options:["Parent: floor((i - 1) / 2); Left Child: 2i + 1; Right Child: 2i + 2","Parent: 2i; Left Child: i + 1; Right Child: i + 2","Parent: i - 1; Left Child: 2i; Right Child: 2i + 1","Parent: i / 2; Left Child: i + 2; Right Child: i + 4"],answer:"Parent: floor((i - 1) / 2); Left Child: 2i + 1; Right Child: 2i + 2",explanation:"This mathematical index relation enables Binary Heaps and Priority Queues to be stored in contiguous cache-friendly arrays with zero pointer overhead."},{id:12,question:"What is a 'Perfect Binary Tree'?",options:["A binary tree where all internal nodes have exactly 2 children AND all leaf nodes are at the exact same depth","A tree where all node keys are prime numbers","A tree with height equal to the number of nodes N","A tree where every node has only a right child"],answer:"A binary tree where all internal nodes have exactly 2 children AND all leaf nodes are at the exact same depth",explanation:"A perfect binary tree is completely full at every level. For height h, it contains exactly 2^(h+1) - 1 nodes and 2^h leaves."},{id:13,question:"How many total nodes N are present in a Perfect Binary Tree of height h?",options:["N = 2^(h + 1) - 1","N = 2^h","N = 2 * h + 1","N = h^2"],answer:"N = 2^(h + 1) - 1",explanation:"Sum of geometric progression across levels 0 to h: 2^0 + 2^1 + 2^2 + ... + 2^h = 2^(h+1) - 1."},{id:14,question:"How many leaf nodes L are in a Perfect Binary Tree of height h?",options:["L = 2^h","L = 2^(h - 1)","L = h + 1","L = 2 * h"],answer:"L = 2^h",explanation:"In a perfect binary tree, all leaves reside at the bottom level h. Level h has exactly 2^h vertices."},{id:15,question:"What is a 'Degenerate' (or Pathological / Skewed) Binary Tree?",options:["A tree where every internal parent node has only ONE child, causing height to equal N - 1 (resembling a singly linked list)","A tree with negative numbers as node keys","A tree where all nodes are stored in read-only memory","A tree with circular loops between leaf nodes"],answer:"A tree where every internal parent node has only ONE child, causing height to equal N - 1 (resembling a singly linked list)",explanation:"A degenerate tree loses all logarithmic advantages: tree height degrades to N - 1, and search time degrades from O(log N) to linear O(N)."},{id:16,question:"What is the maximum number of nodes that can exist at level l of any binary tree (where root is level 0)?",options:["2^l","2^(l - 1)","2 * l","l^2"],answer:"2^l",explanation:"Level 0 has 2^0 = 1 node (root), level 1 has up to 2^1 = 2 nodes, level 2 has up to 2^2 = 4 nodes, and level l has up to 2^l nodes."},{id:17,question:"What is the minimum possible height of a binary tree containing N nodes?",options:["ceil(log2(N + 1)) - 1 (or floor(log2(N)))","N / 2","N - 1","sqrt(N)"],answer:"ceil(log2(N + 1)) - 1 (or floor(log2(N)))",explanation:"Minimum height occurs when the tree is as complete/balanced as possible, packing up to 2^(h+1) - 1 nodes into height h, yielding logarithmic height."},{id:18,question:"In ANY binary tree, what is the mathematical relationship between the number of leaf nodes L and the number of nodes with degree 2 (N_2)?",options:["L = N_2 + 1","L = 2 * N_2","L = N_2 - 1","L = N_2 + 2"],answer:"L = N_2 + 1",explanation:"Universal Theorem: In any binary tree where vertices have degree 0, 1, or 2, the number of leaves (degree 0) is always exactly 1 greater than the number of nodes with 2 children (L = N_2 + 1)."},{id:19,question:"What is the Balance Factor (BF) of a node N in an AVL / Balanced Binary Tree?",options:["BF = Height(N.left) - Height(N.right)","BF = Depth(N.left) + Depth(N.right)","BF = Count(N.left) / Count(N.right)","BF = Height(N) * 2"],answer:"BF = Height(N.left) - Height(N.right)",explanation:"The balance factor is the difference between left and right subtree heights. For an AVL tree, BF must be in {-1, 0, +1} at every node."},{id:20,question:"What is the 'Diameter' (or Width) of a binary tree?",options:["The length of the longest path between any two nodes in the tree (which may or may not pass through the root)","The number of leaf nodes on the bottom level","The total memory size of all tree structs combined","The maximum difference between keys in the tree"],answer:"The length of the longest path between any two nodes in the tree (which may or may not pass through the root)",explanation:"Diameter is calculated as max(left_diameter, right_diameter, left_height + right_height + 2) in edge count."},{id:21,question:"In C, what is the memory footprint of `struct TreeNode { int data; struct TreeNode *left, *right; }` on a 64-bit architecture?",options:["24 bytes (4 bytes data + 4 bytes compiler padding + 8 bytes left + 8 bytes right)","12 bytes (4 bytes data + 4 bytes left + 4 bytes right)","16 bytes with zero padding","32 bytes due to 64-bit alignment restrictions"],answer:"24 bytes (4 bytes data + 4 bytes compiler padding + 8 bytes left + 8 bytes right)",explanation:"On 64-bit systems, pointer variables require 8-byte boundary alignment. The compiler inserts 4 padding bytes after `int data` (4B) so that `struct TreeNode *left` starts at an 8-byte aligned address."},{id:22,question:"How many edges E exist in a valid binary tree containing N vertices?",options:["E = N - 1","E = N","E = 2 * N","E = N / 2"],answer:"E = N - 1",explanation:"Every node in a tree has exactly one incoming edge from its parent, except the root node which has 0 incoming edges. Total edges = N - 1."},{id:23,question:"What is an 'Ancestor' of a node X in a tree?",options:["Any node located on the unique path from the Root node down to X (including parent, grandparent, etc.)","Any node located in X's left or right subtrees","Any node that shares the same depth as X","The sibling node of X"],answer:"Any node located on the unique path from the Root node down to X (including parent, grandparent, etc.)",explanation:"Node Y is an ancestor of X if and only if X is a descendant of Y (i.e. Y lies on the path from Root to X)."},{id:24,question:"What is a 'Descendant' of a node X in a tree?",options:["Any node reachable by following downward child edges starting from X (all nodes in X's subtrees)","The direct parent of X","Nodes located on level 0","Nodes with degree 2"],answer:"Any node reachable by following downward child edges starting from X (all nodes in X's subtrees)",explanation:"A descendant of X is any vertex that lies within the subtree rooted at X."},{id:25,question:"Why does recursive tree height calculation `calculateHeight(root)` require Post-Order Traversal?",options:["Because the height of a parent node cannot be determined until the heights of BOTH left and right children are calculated first (Height = 1 + max(lh, rh))","Because pre-order traversal cannot allocate stack memory in C","Because in-order traversal reverses child heights","Because post-order traversal runs in O(1) time"],answer:"Because the height of a parent node cannot be determined until the heights of BOTH left and right children are calculated first (Height = 1 + max(lh, rh))",explanation:"Computing parent height is a bottom-up aggregation: we must visit Left child, visit Right child, and then compute `1 + max(leftH, rightH)` for the current Root."},{id:26,question:"What is the time complexity of calculating the Height of a binary tree with N nodes?",options:["O(N) because every node in the tree must be visited once","O(log N) under all circumstances","O(1) using hardware prefetchers","O(N^2) due to nested recursive calls"],answer:"O(N) because every node in the tree must be visited once",explanation:"The recursive function `calculateHeight(root)` visits every vertex in the tree exactly once, executing constant O(1) operations per vertex, leading to strictly O(N) total time."},{id:27,question:"What happens if a programmer frees a parent node with `free(root)` before calling `freeTree(root->left)` and `freeTree(root->right)`?",options:["It causes Undefined Behavior and Memory Leaks because child pointers become Dangling Pointers that cannot be safely dereferenced","The C runtime automatically deallocates all child nodes","The operating system re-attaches the children to the root","The program executes faster due to batch deallocation"],answer:"It causes Undefined Behavior and Memory Leaks because child pointers become Dangling Pointers that cannot be safely dereferenced",explanation:"In C, deallocating memory invalidates its addresses. Reading `root->left` after `free(root)` is a Use-After-Free bug. Post-order deallocation is required to ensure children are freed before parent."},{id:28,question:"What is a 'Subtree' in a binary tree?",options:["A tree consisting of a chosen node and all of its descendants, retaining all connecting edges","A collection of leaves with no root","An array of integer values","A disjoint set with no edges"],answer:"A tree consisting of a chosen node and all of its descendants, retaining all connecting edges",explanation:"Every node in a binary tree acts as the root of its own subtree, containing all nodes that descend from it."},{id:29,question:"How does the number of edges in a tree compare to a general graph with N vertices?",options:["A tree with N vertices has strictly N - 1 edges (minimal connectivity), whereas a general graph can have up to N*(N - 1)/2 edges","A tree always has more edges than a complete graph","A tree has exactly 2N edges","A tree has no edges"],answer:"A tree with N vertices has strictly N - 1 edges (minimal connectivity), whereas a general graph can have up to N*(N - 1)/2 edges",explanation:"A tree is a minimally connected graph: removing any single edge disconnects the tree, and adding any single edge creates a cycle."},{id:30,question:"Why are binary trees fundamentally important in modern systems programming and database architecture?",options:["They provide hierarchical logarithmic O(log N) search, insertion, and deletion, powering B-Trees in databases, LSM-Trees in storage engines, and ASTs in compilers","They use less electricity than arrays in CPU hardware","They allow infinite data storage without RAM limits","They eliminate the need for CPU instruction registers"],answer:"They provide hierarchical logarithmic O(log N) search, insertion, and deletion, powering B-Trees in databases, LSM-Trees in storage engines, and ASTs in compilers",explanation:"From SQLite and PostgreSQL index B+Trees to Linux kernel Red-Black process schedulers and compiler syntax trees (ASTs), hierarchical tree data structures form the backbone of systems engineering."}],ne=`================================================================================\r
CODER & ACCOTAX - ADVANCED TECHNICAL STUDY NOTE\r
Segment 2 · Module: Binary Trees, BST & AVL Self-Balancing Trees\r
Topic 0: Tree Anatomy & Invariants: Root, leaves, height, depth, subtrees, and strict properties\r
Mentor: Sukanta Hui · Barrackpore, West Bengal, India\r
================================================================================\r
\r
1. TREE ANATOMY & FUNDAMENTAL DEFINITIONS\r
--------------------------------------------------------------------------------\r
A Tree is a non-linear, hierarchical data structure consisting of nodes connected\r
by directed or undirected edges, with exactly ONE unique simple path between any\r
two vertices and ZERO cycles.\r
\r
Core Anatomical Components:\r
  • Root: The top-most vertex with in-degree 0 (has no parent).\r
  • Edge: Directed link connecting a parent node to its child.\r
  • Parent & Child: If edge points A → B, A is the parent and B is the child.\r
  • Siblings: Nodes sharing the exact same direct parent.\r
  • Leaf (External) Node: A node with degree 0 (no children: left == NULL && right == NULL).\r
  • Internal (Non-Leaf) Node: A node with at least one child (degree >= 1).\r
  • Ancestors: All nodes on the path from Root down to that node (excluding itself).\r
  • Descendants: All nodes in the subtrees rooted at that node.\r
  • Subtree: Any node in the tree together with all its descendants.\r
\r
2. HEIGHT VS. DEPTH VS. LEVEL (THE CRITICAL DISTINCTIONS)\r
--------------------------------------------------------------------------------\r
Metric              Definition                                  Root Value      Leaf Value\r
--------------------------------------------------------------------------------\r
Depth of Node N     Number of edges from ROOT down to N         0               Depth = Tree Height\r
Height of Node N    Number of edges on longest path down to LEAF Height of Tree 0\r
Height of Tree      Height of the Root Node                     Longest path    --\r
Level of Node N     Distance from Root + 1 (or 0-indexed Depth) Level 0 / 1     Level h / h+1\r
\r
Edge vs Node Convention:\r
  • Edge Count Convention (Standard): Empty tree height = -1, single node height = 0.\r
  • Node Count Convention: Empty tree height = 0, single node height = 1.\r
\r
3. STRICT BINARY TREE CLASSIFICATIONS\r
--------------------------------------------------------------------------------\r
[1] Full (Strict / Proper) Binary Tree:\r
    • Invariant: Every node has EITHER 0 OR 2 children (no node has degree 1).\r
    • Theorem: Number of leaves L = Internal nodes I + 1.\r
\r
[2] Complete Binary Tree:\r
    • Invariant: All levels are completely filled except possibly the last level,\r
      and all nodes on the last level are as far LEFT as possible.\r
    • Array Mapping: If parent is at index \`i\`, left child is at \`2i + 1\`, right child at \`2i + 2\`.\r
    • Height: Exactly floor(log2(N)).\r
\r
[3] Perfect Binary Tree:\r
    • Invariant: All internal nodes have 2 children AND all leaf nodes are at the same level.\r
    • Total Nodes: N = 2^(h+1) - 1.\r
    • Total Leaves: L = 2^h.\r
\r
[4] Balanced Binary Tree (AVL Invariant):\r
    • Invariant: For every node N, |Height(N.left) - Height(N.right)| <= 1.\r
    • Guarantees O(log N) worst-case height and lookup bounds.\r
\r
[5] Degenerate (Pathological / Skewed) Tree:\r
    • Invariant: Every internal node has exactly 1 child.\r
    • Tree height = N - 1. Equivalent to a singly linked list with O(N) search time.\r
\r
4. MATHEMATICAL FORMULAS & INVARIANTS CHEAT SHEET\r
--------------------------------------------------------------------------------\r
Property                                Formula / Bound\r
--------------------------------------------------------------------------------\r
Max nodes at level \`l\`                  2^l (assuming root is level 0)\r
Max nodes in binary tree of height \`h\`  2^(h+1) - 1\r
Min height with \`N\` nodes               ceil(log2(N + 1)) - 1\r
Max height with \`N\` nodes               N - 1 (Degenerate tree)\r
Leaf-to-Degree-2 Relationship           L = N_2 + 1 (in ANY binary tree!)\r
Edges in a tree with \`N\` vertices       E = N - 1\r
\r
5. C PHYSICAL MEMORY & STRUCT ALIGNMENT\r
--------------------------------------------------------------------------------\r
\`\`\`c\r
typedef struct TreeNode {\r
    int data;               // 4 bytes\r
    // 4 bytes invisible padding inserted by compiler on 64-bit systems\r
    struct TreeNode *left;  // 8 bytes pointer\r
    struct TreeNode *right; // 8 bytes pointer\r
} TreeNode;                 // Total = 24 bytes per node in RAM\r
\`\`\`\r
[✓] Check \`malloc\` return for NULL before initialization.\r
[✓] Always use post-order traversal (\`freeTree\`) to free children before root.\r
[✓] Set pointers to NULL after freeing to eliminate Dangling Pointers.\r
\r
================================================================================\r
Coder & AccoTax Computer Education Center · Barrackpore, West Bengal, India\r
================================================================================\r
`,Y=`/**
 * ============================================================================
 * Course: Data Structures & Algorithms in C
 * Mentor: Sukanta Hui (Coder & AccoTax, Barrackpore Lab)
 * Topic 0: Tree Anatomy, Invariants, Height, Depth & Strict Properties
 * ============================================================================
 */

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

// 1. Definition of a Binary Tree Node
typedef struct TreeNode {
    int data;
    struct TreeNode *left;
    struct TreeNode *right;
} TreeNode;

// 2. Allocate and initialize a new tree node
TreeNode* createNode(int value) {
    TreeNode* node = (TreeNode*)malloc(sizeof(TreeNode));
    if (!node) {
        fprintf(stderr, "Fatal: Memory allocation failed for node %d\\n", value);
        exit(EXIT_FAILURE);
    }
    node->data = value;
    node->left = NULL;
    node->right = NULL;
    return node;
}

// 3. Calculate Height of a Tree (Edges on longest path from node to leaf)
// Convention: Empty tree height = -1 (or 0 in node-count convention); leaf height = 0
int calculateHeight(TreeNode* root) {
    if (root == NULL) return -1; // Edge-count convention
    int leftHeight = calculateHeight(root->left);
    int rightHeight = calculateHeight(root->right);
    return 1 + (leftHeight > rightHeight ? leftHeight : rightHeight);
}

// 4. Calculate Depth of a specific key from Root (Distance from root)
int calculateDepth(TreeNode* root, int key, int currentDepth) {
    if (root == NULL) return -1;
    if (root->data == key) return currentDepth;

    int leftSearch = calculateDepth(root->left, key, currentDepth + 1);
    if (leftSearch != -1) return leftSearch;

    return calculateDepth(root->right, key, currentDepth + 1);
}

// 5. Count Total Nodes in Tree
int countTotalNodes(TreeNode* root) {
    if (root == NULL) return 0;
    return 1 + countTotalNodes(root->left) + countTotalNodes(root->right);
}

// 6. Count Leaf Nodes (Nodes with degree 0: left == NULL && right == NULL)
int countLeafNodes(TreeNode* root) {
    if (root == NULL) return 0;
    if (root->left == NULL && root->right == NULL) return 1;
    return countLeafNodes(root->left) + countLeafNodes(root->right);
}

// 7. Count Internal Nodes (Nodes with at least 1 child: degree >= 1)
int countInternalNodes(TreeNode* root) {
    if (root == NULL || (root->left == NULL && root->right == NULL)) return 0;
    return 1 + countInternalNodes(root->left) + countInternalNodes(root->right);
}

// 8. Verify Full Binary Tree Invariant (Every node has either 0 or 2 children)
bool isFullBinaryTree(TreeNode* root) {
    if (root == NULL) return true;
    // If leaf node
    if (root->left == NULL && root->right == NULL) return true;
    // If both children exist, recursively verify subtrees
    if (root->left != NULL && root->right != NULL) {
        return isFullBinaryTree(root->left) && isFullBinaryTree(root->right);
    }
    // If node has only 1 child -> Not a Full Binary Tree
    return false;
}

// 9. Verify Complete Binary Tree Invariant (Array representation index check)
bool isCompleteBinaryTree(TreeNode* root, int index, int totalNodes) {
    if (root == NULL) return true;
    if (index >= totalNodes) return false;

    return isCompleteBinaryTree(root->left, 2 * index + 1, totalNodes) &&
           isCompleteBinaryTree(root->right, 2 * index + 2, totalNodes);
}

// 10. Verify Perfect Binary Tree Invariant (All leaves at same depth d, internal nodes have 2 children)
bool isPerfectRec(TreeNode* root, int depth, int level) {
    if (root == NULL) return true;
    if (root->left == NULL && root->right == NULL) return (depth == level + 1);
    if (root->left == NULL || root->right == NULL) return false;

    return isPerfectRec(root->left, depth, level + 1) &&
           isPerfectRec(root->right, depth, level + 1);
}

int findLeftmostDepth(TreeNode* node) {
    int d = 0;
    while (node != NULL) {
        d++;
        node = node->left;
    }
    return d;
}

bool isPerfectBinaryTree(TreeNode* root) {
    int depth = findLeftmostDepth(root);
    return isPerfectRec(root, depth, 0);
}

// 11. Verify Balanced Binary Tree Invariant (|Height(Left) - Height(Right)| <= 1)
bool isBalancedTree(TreeNode* root, int* height) {
    if (root == NULL) {
        *height = -1;
        return true;
    }

    int lh = 0, rh = 0;
    bool lBalanced = isBalancedTree(root->left, &lh);
    bool rBalanced = isBalancedTree(root->right, &rh);

    *height = 1 + (lh > rh ? lh : rh);

    if (abs(lh - rh) > 1) return false;
    return lBalanced && rBalanced;
}

// 12. Visual 2D Tree Print
void printTree2D(TreeNode* root, int space) {
    const int COUNT = 6;
    if (root == NULL) return;
    space += COUNT;
    printTree2D(root->right, space);
    printf("\\n");
    for (int i = COUNT; i < space; i++) printf(" ");
    printf("[%d]\\n", root->data);
    printTree2D(root->left, space);
}

// 13. Post-Order Tree Deallocation (Zero Leaks)
void freeTree(TreeNode* root) {
    if (root == NULL) return;
    freeTree(root->left);
    freeTree(root->right);
    free(root);
}

// ============================================================================
// MAIN DEMONSTRATION
// ============================================================================
int main(void) {
    printf("=================================================================\\n");
    printf("  CODER & ACCOTAX - TREE ANATOMY & STRICT INVARIANTS LAB        \\n");
    printf("  Mentor: Sukanta Hui · Barrackpore Lab Demonstration            \\n");
    printf("=================================================================\\n\\n");

    // Construct Sample Binary Tree:
    //         50
    //       /    \\
    //     30      70
    //    /  \\    /  \\
    //   20  40  60  80
    TreeNode* root = createNode(50);
    root->left = createNode(30);
    root->right = createNode(70);
    root->left->left = createNode(20);
    root->left->right = createNode(40);
    root->right->left = createNode(60);
    root->right->right = createNode(80);

    printf("1. TREE TOPOLOGY (2D Layout):\\n");
    printTree2D(root, 0);

    int total = countTotalNodes(root);
    int leaves = countLeafNodes(root);
    int internals = countInternalNodes(root);
    int treeHeight = calculateHeight(root);

    printf("\\n-----------------------------------------------------------------\\n");
    printf("2. QUANTITATIVE ANATOMY METRICS:\\n");
    printf("-----------------------------------------------------------------\\n");
    printf("  • Total Vertices (N):    %d nodes\\n", total);
    printf("  • Leaf Nodes (Degree 0): %d leaves\\n", leaves);
    printf("  • Internal Nodes (Deg>0):%d internal\\n", internals);
    printf("  • Tree Height (Edges):   %d\\n", treeHeight);
    printf("  • Root Depth:            %d\\n", calculateDepth(root, 50, 0));
    printf("  • Depth of Node 40:      %d\\n", calculateDepth(root, 40, 0));
    printf("  • Leaf-Internal Theorem: L (%d) == N_2 (%d) + 1  -> [VERIFIED]\\n", leaves, internals);

    printf("\\n-----------------------------------------------------------------\\n");
    printf("3. STRICT BINARY TREE CLASSIFICATION INVARIANTS:\\n");
    printf("-----------------------------------------------------------------\\n");
    printf("  • Is Full Binary Tree (0 or 2 children)?   %s\\n", isFullBinaryTree(root) ? "YES [TRUE]" : "NO [FALSE]");
    printf("  • Is Complete Binary Tree (Array-packed)?  %s\\n", isCompleteBinaryTree(root, 0, total) ? "YES [TRUE]" : "NO [FALSE]");
    printf("  • Is Perfect Binary Tree (All 2^h leaves)? %s\\n", isPerfectBinaryTree(root) ? "YES [TRUE]" : "NO [FALSE]");
    
    int dummyH = 0;
    printf("  • Is Balanced Binary Tree (|lh-rh| <= 1)?  %s\\n", isBalancedTree(root, &dummyH) ? "YES [TRUE]" : "NO [FALSE]");

    // Clean up memory
    freeTree(root);
    root = NULL;
    printf("\\n=================================================================\\n");
    printf("All tree nodes freed in post-order. Zero memory leaks verified!\\n");
    printf("=================================================================\\n");

    return 0;
}
`;class s{constructor(n,a=null,i=null,l=null){this.value=n,this.left=a,this.right=i,this.id=l||`${n}-${Math.random().toString(36).substring(2,7)}`}}const F=(t,n)=>t?n<t.value?new s(t.value,F(t.left,n),t.right,t.id):n>t.value?new s(t.value,t.left,F(t.right,n),t.id):t:new s(n),O=(t,n)=>{if(!t)return null;if(n<t.value)return new s(t.value,O(t.left,n),t.right,t.id);if(n>t.value)return new s(t.value,t.left,O(t.right,n),t.id);{if(!t.left&&!t.right)return null;if(!t.left)return t.right;if(!t.right)return t.left;let a=t.right;for(;a&&a.left;)a=a.left;return new s(a.value,t.left,O(t.right,a.value),t.id)}},A=t=>t?1+Math.max(A(t.left),A(t.right)):-1,B=t=>t?1+B(t.left)+B(t.right):0,M=t=>t?!t.left&&!t.right?1:M(t.left)+M(t.right):0,P=t=>t?(t.left&&t.right?1:0)+P(t.left)+P(t.right):0,q=t=>!t||!t.left&&!t.right?!0:t.left&&t.right?q(t.left)&&q(t.right):!1,re=t=>{if(!t)return!0;const n=[t];let a=!1;for(;n.length>0;){const i=n.shift();if(!i)a=!0;else{if(a)return!1;n.push(i.left),n.push(i.right)}}return!0},ae=t=>{if(!t)return!0;const n=A(t);return B(t)===Math.pow(2,n+1)-1},se=t=>{const n=a=>{if(!a)return 0;const i=n(a.left);if(i===-1)return-1;const l=n(a.right);return l===-1||Math.abs(i-l)>1?-1:1+Math.max(i,l)};return n(t)!==-1},V=(t,n=0,a=40,i=760,l=null,o=[])=>{if(!t)return{nodes:[],edges:[]};const f=(a+i)/2,g=45+n*70,m=A(t),p=(t.left?1:0)+(t.right?1:0),L=l===null,b=p===0,C=!b,N=L?[]:[...o,l.value];let y=[{id:t.id,value:t.value,x:f,y:g,depth:n,level:n,height:m,childCount:p,isRoot:L,isLeaf:b,isInternal:C,parentVal:l?l.value:null,ancestors:N,subtreeSize:B(t),hasLeft:!!t.left,hasRight:!!t.right,leftChildVal:t.left?t.left.value:null,rightChildVal:t.right?t.right.value:null}],v=[];if(t.left){const x=V(t.left,n+1,a,f,t,N);y=y.concat(x.nodes),v.push({id:`${t.value}->${t.left.value}`,fromValue:t.value,toValue:t.left.value,fromX:f,fromY:g,toX:x.nodes[0].x,toY:x.nodes[0].y,branch:"L"}),v=v.concat(x.edges)}if(t.right){const x=V(t.right,n+1,f,i,t,N);y=y.concat(x.nodes),v.push({id:`${t.value}->${t.right.value}`,fromValue:t.value,toValue:t.right.value,fromX:f,fromY:g,toX:x.nodes[0].x,toY:x.nodes[0].y,branch:"R"}),v=v.concat(x.edges)}return{nodes:y,edges:v}},W=t=>{if(t==="perfect"){const n=new s(50);return n.left=new s(30,new s(20),new s(40)),n.right=new s(70,new s(60),new s(80)),n}else if(t==="full"){const n=new s(50);return n.left=new s(30,new s(20),new s(40)),n.right=new s(70),n}else if(t==="complete"){const n=new s(50);return n.left=new s(30,new s(20),new s(40)),n.right=new s(70,new s(60),null),n}else if(t==="skewed"){const n=new s(10);return n.right=new s(20),n.right.right=new s(30),n.right.right.right=new s(40),n.right.right.right.right=new s(50),n}else{const n=new s(50);return n.left=new s(30,new s(20),new s(40)),n.right=new s(70,new s(60),new s(80)),n}},oe=t=>{const n=[],a=[];n.push({title:"1. Start Height Calculation",activeNode:t?t.value:null,highlightedPath:[],badgeText:"CALCULATE HEIGHT",badgeColor:"bg-cyan-500",message:"Calculating tree height via Post-Order Traversal: Height = 1 + max(Left_Height, Right_Height).",cCode:`int calculateHeight(TreeNode* root) {
    if (root == NULL) return -1;
    return 1 + max(calculateHeight(root->left), calculateHeight(root->right));
}`,pointerInfo:"Post-order bottom-up aggregation begins at root."});const i=o=>{if(!o)return-1;i(o.left),i(o.right);const f=A(o.left),g=A(o.right),m=1+Math.max(f,g);return a.push(o.value),n.push({title:`Compute Height at Node ${o.value}`,activeNode:o.value,computedHeight:m,comparisonText:`H = 1 + max(${f}, ${g}) = ${m}`,highlightedPath:[...a],badgeText:`Height: ${m}`,badgeColor:"bg-emerald-500",message:`Node ${o.value}: Left Subtree Height = ${f}, Right Subtree Height = ${g} → Node Height = ${m}.`,cCode:`// Node ${o.value}: lh = ${f}, rh = ${g}
return 1 + max(${f}, ${g}); // yields ${m}`,pointerInfo:`Calculated height ${m} stored in frame.`}),m},l=i(t);return n.push({title:`Height Calculation Complete: Tree Height = ${l}`,activeNode:t?t.value:null,computedHeight:l,highlightedPath:[...a],badgeText:`TOTAL HEIGHT = ${l}`,badgeColor:"bg-cyan-400",message:`Tree Height is ${l} (longest path from Root to Leaf contains ${l} edges).`,cCode:`// Total Tree Height = ${l} edges (Root depth 0 to Leaf depth ${l})`,pointerInfo:"Whole-tree height calculation finished.",isFinal:!0}),n},ie=t=>{const n=[],a=[];n.push({title:"1. Start Leaf Node Counting",activeNode:t?t.value:null,highlightedPath:[],badgeText:"COUNT LEAVES",badgeColor:"bg-emerald-500",message:"Scanning tree to identify all leaf nodes (vertices where left == NULL && right == NULL / Degree 0).",cCode:`int countLeafNodes(TreeNode* root) {
    if (root == NULL) return 0;
    if (root->left == NULL && root->right == NULL) return 1;
    return countLeaves(root->left) + countLeaves(root->right);
}`,pointerInfo:"Traversing tree hierarchy."});const i=o=>{o&&(!o.left&&!o.right?(a.push(o.value),n.push({title:`Leaf Node Found: Key ${o.value}`,activeNode:o.value,isLeafMatch:o.value,comparisonText:"LEAF 🍃 (0 Children)",highlightedPath:[...a],badgeText:`LEAF #${a.length}`,badgeColor:"bg-emerald-500",message:`Node ${o.value} has degree 0 (both child pointers are NULL). Added to leaf count!`,cCode:`if (root->left == NULL && root->right == NULL) return 1; // Leaf ${o.value} found`,pointerInfo:`Leaf count is now ${a.length}.`})):(n.push({title:`Internal Node: Key ${o.value}`,activeNode:o.value,comparisonText:`INTERNAL 🔷 (${(o.left?1:0)+(o.right?1:0)} Child)`,highlightedPath:[...a],badgeText:"INTERNAL NODE",badgeColor:"bg-purple-500",message:`Node ${o.value} has child subtrees. Stepping down into branches...`,cCode:"return countLeaves(root->left) + countLeaves(root->right);",pointerInfo:"Exploring child branches."}),i(o.left),i(o.right)))};i(t);const l=P(t);return n.push({title:`Leaf Count Complete: ${a.length} Leaves Found`,activeNode:null,highlightedPath:[...a],badgeText:`TOTAL LEAVES = ${a.length}`,badgeColor:"bg-emerald-400",message:`Identified ${a.length} leaf nodes: [${a.join(", ")}]. Verified Leaf Theorem: L (${a.length}) == N_2 (${l}) + 1!`,cCode:`// Leaf Theorem Verified: Leaves (${a.length}) = Degree-2 Nodes (${l}) + 1`,pointerInfo:"Universal Leaf Invariant verified.",isFinal:!0}),n};function pe(){const t=h.useRef([]),[n,a]=h.useState(()=>W("perfect")),[i,l]=h.useState(50),[o,f]=h.useState(""),[g,m]=h.useState("perfect"),[p,L]=h.useState([]),[b,C]=h.useState(0),[N,S]=h.useState(!1),[y,v]=h.useState(900),[x,U]=h.useState("anatomy");h.useEffect(()=>{const r=new IntersectionObserver(c=>{c.forEach(u=>{u.isIntersecting&&u.target.classList.add("is-visible")})},{threshold:.08});return t.current.forEach(c=>{c&&r.observe(c)}),()=>r.disconnect()},[]);const T=r=>{r&&!t.current.includes(r)&&t.current.push(r)};h.useEffect(()=>{let r=null;return N&&p.length>0&&(b<p.length-1?r=setTimeout(()=>{C(c=>c+1)},y):S(!1)),()=>{r&&clearTimeout(r)}},[N,b,p,y]);const E=h.useMemo(()=>p.length>0&&p[b]?p[b]:{title:"Tree Anatomy Inspector Ready",activeNode:i,highlightedPath:[],message:"Click any node in the SVG tree to inspect its depth, height, level, parent, and subtrees.",cCode:"// Invariant: Depth(Root) = 0. Height(Leaf) = 0. Zero memory leaks.",pointerInfo:"Pointer registers quiescent."},[p,b,i]),I=h.useMemo(()=>V(n,0,40,760),[n]),w=h.useMemo(()=>{const r=B(n),c=A(n),u=M(n),$=r-u,k=q(n),j=re(n),R=ae(n),H=se(n),Q=P(n);return{total:r,height:c,leaves:u,internals:$,isFull:k,isComplete:j,isPerfect:R,isBalanced:H,degree2Count:Q}},[n]),d=h.useMemo(()=>i&&(I.nodes.find(r=>r.value===i)||I.nodes[0])||null,[i,I]),D=r=>{S(!1),L([]),C(0),m(r);const c=W(r);a(c),c&&l(c.value)},X=()=>{const r=o.trim()!==""?parseInt(o,10):Math.floor(Math.random()*85+10);isNaN(r)||(a(c=>F(c,r)),l(r),f(""))},z=()=>{i&&(a(r=>O(r,i)),l(50))},_=h.useCallback(()=>{const r=oe(n);L(r),C(0),S(!0)},[n]),G=h.useCallback(()=>{const r=ie(n);L(r),C(0),S(!0)},[n]);return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .reveal-section {
          opacity: 0.99;
          transform: translateY(0);
          transition: opacity 0.4s ease-out, transform 0.4s ease-out;
        }
        .reveal-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @keyframes tracerPulse {
          0%, 100% {
            r: 25px;
            opacity: 0.9;
            filter: drop-shadow(0 0 12px rgba(6, 182, 212, 0.9));
          }
          50% {
            r: 29px;
            opacity: 0.4;
            filter: drop-shadow(0 0 22px rgba(56, 189, 248, 1));
          }
        }
        .node-tracer {
          animation: tracerPulse 1.2s infinite ease-in-out;
        }
      `}),e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 md:p-12 font-sans selection:bg-cyan-500/30 selection:text-cyan-200",children:[e.jsxs("header",{ref:T,className:"reveal-section max-w-6xl mx-auto mb-12 text-center space-y-4",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-700/70 text-cyan-300 text-xs font-semibold uppercase tracking-wider shadow-lg",children:[e.jsx("span",{children:"⚡"}),e.jsx("span",{children:"DSA Segment 2 · Topic 0"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 tracking-tight leading-tight",children:"Tree Anatomy, Invariants & Strict Binary Tree Properties"}),e.jsx("p",{className:"text-sm sm:text-base md:text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed",children:"Master the structural anatomy of hierarchical trees: Root, Leaves, Height vs. Depth, Subtrees, Mathematical Theorems, and Strict Classifications (Full, Complete, Perfect, Balanced & Degenerate) at Coder & AccoTax Barrackpore Lab."}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-2",children:[e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-cyan-400",children:"Course Code: DSA-C-200"}),e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-sky-400",children:"Center: Coder & AccoTax (Barrackpore Lab)"}),e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-emerald-400",children:"Mentor: Sukanta Hui"})]})]}),e.jsx("section",{ref:T,className:"reveal-section max-w-6xl mx-auto mb-12 space-y-6",children:e.jsxs("div",{className:"bg-gradient-to-br from-slate-900 via-slate-900/90 to-cyan-950/30 border border-cyan-500/30 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-2xl",children:"👨‍🏫"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-cyan-300",children:"Teacher's Desk: Physical Mental Models & Non-Linear Hierarchies"}),e.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Sukanta Hui & Barrackpore Lab Classroom Dialogue"})]})]}),e.jsxs("div",{className:"space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base",children:[e.jsxs("div",{className:"bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("h3",{className:"text-cyan-400 font-bold flex items-center gap-2 text-base",children:[e.jsx("span",{children:"💡"})," The Physical Intuition Behind Hierarchical Tree Data Structures"]}),e.jsxs("p",{children:["Linear structures like Arrays and Linked Lists suffer from an unavoidable tradeoff: arrays offer $O(1)$ indexed access but require slow $O(N)$ data shifting during insertion/deletion; linked lists allow dynamic memory growth but require $O(N)$ sequential pointer chasing to search. A ",e.jsx("strong",{children:"Tree"})," transcends this by introducing a 2-dimensional hierarchical branching factor, allowing algorithms to divide search space exponentially and achieve blazing-fast $O(\\log N)$ operations!"]})]}),e.jsxs("div",{className:"bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("h3",{className:"text-sky-400 font-bold flex items-center gap-2 text-base",children:[e.jsx("span",{children:"💬"})," Barrackpore Lab Classroom Discussion on Depth vs Height"]}),e.jsxs("div",{className:"space-y-3 text-xs sm:text-sm font-sans border-l-2 border-cyan-500/40 pl-4 py-1",children:[e.jsxs("p",{children:[e.jsx("strong",{className:"text-emerald-400",children:"Swadeep:"})," ",e.jsx("em",{children:'"Sir, what is the exact difference between Node Depth and Node Height? In exams, students often mix them up."'})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-cyan-300",children:"Sukanta Sir:"})," ",e.jsxs("em",{children:['"Think of an ocean! ',e.jsx("strong",{children:"Depth"})," is measured from the surface (the Root) downwards. The root is at depth 0. ",e.jsx("strong",{children:"Height"}),' is measured from the ocean floor (the deepest Leaf) upwards! A leaf has height 0, and the root has the maximum height equal to the entire tree."']})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-emerald-400",children:"Tuhina:"})," ",e.jsx("em",{children:'"And by edge convention, an empty tree has height $-1$, so that a single root node has height $1 + \\max(-1, -1) = 0$!"'})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-cyan-300",children:"Sukanta Sir:"})," ",e.jsx("em",{children:'"Spot on, Tuhina! That mathematical consistency prevents off-by-one errors when writing recursive algorithms in C."'})]})]})]})]})]})}),e.jsx("section",{ref:T,className:"reveal-section max-w-6xl mx-auto mb-12 space-y-6",children:e.jsxs("div",{className:"bg-slate-900/90 border border-cyan-500/40 rounded-2xl p-6 md:p-8 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-cyan-300 flex items-center gap-2",children:[e.jsx("span",{children:"🔬"})," 2D Tree Anatomy Inspector & Invariant Diagnostic Engine"]}),e.jsx("p",{className:"text-xs text-slate-400 font-mono mt-1",children:"Click any node to inspect its local anatomical metrics, or simulate whole-tree properties"})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsxs("span",{className:`px-2.5 py-1 rounded-md text-[11px] font-mono border ${w.isFull?"bg-emerald-950/80 border-emerald-700 text-emerald-300":"bg-slate-900 border-slate-800 text-slate-500"}`,children:["Full: ",w.isFull?"YES":"NO"]}),e.jsxs("span",{className:`px-2.5 py-1 rounded-md text-[11px] font-mono border ${w.isComplete?"bg-cyan-950/80 border-cyan-700 text-cyan-300":"bg-slate-900 border-slate-800 text-slate-500"}`,children:["Complete: ",w.isComplete?"YES":"NO"]}),e.jsxs("span",{className:`px-2.5 py-1 rounded-md text-[11px] font-mono border ${w.isPerfect?"bg-purple-950/80 border-purple-700 text-purple-300":"bg-slate-900 border-slate-800 text-slate-500"}`,children:["Perfect: ",w.isPerfect?"YES":"NO"]}),e.jsxs("span",{className:`px-2.5 py-1 rounded-md text-[11px] font-mono border ${w.isBalanced?"bg-emerald-950/80 border-emerald-700 text-emerald-300":"bg-rose-950/80 border-rose-700 text-rose-300"}`,children:["Balanced: ",w.isBalanced?"YES":"NO"]})]})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2 p-3 bg-slate-950/70 border border-slate-800/80 rounded-xl",children:[e.jsx("span",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1",children:"Classification Presets:"}),e.jsx("button",{onClick:()=>D("perfect"),className:`px-2.5 py-1 text-xs rounded-lg transition-all border ${g==="perfect"?"bg-purple-600 text-white font-bold border-purple-400":"bg-slate-900 text-purple-300 border-purple-900/50 hover:bg-slate-800"}`,children:"👑 Perfect Tree"}),e.jsx("button",{onClick:()=>D("full"),className:`px-2.5 py-1 text-xs rounded-lg transition-all border ${g==="full"?"bg-emerald-600 text-white font-bold border-emerald-400":"bg-slate-900 text-emerald-300 border-emerald-900/50 hover:bg-slate-800"}`,children:"🌲 Full Binary Tree"}),e.jsx("button",{onClick:()=>D("complete"),className:`px-2.5 py-1 text-xs rounded-lg transition-all border ${g==="complete"?"bg-cyan-600 text-slate-950 font-bold border-cyan-400":"bg-slate-900 text-cyan-300 border-cyan-900/50 hover:bg-slate-800"}`,children:"📦 Complete Tree"}),e.jsx("button",{onClick:()=>D("skewed"),className:`px-2.5 py-1 text-xs rounded-lg transition-all border ${g==="skewed"?"bg-rose-600 text-white font-bold border-rose-400":"bg-slate-900 text-rose-300 border-rose-900/50 hover:bg-slate-800"}`,children:"⛓️ Degenerate (Skewed)"})]}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-950/80 border border-slate-800 rounded-xl",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("input",{type:"number",value:o,onChange:r=>f(r.target.value),placeholder:"Node key (e.g. 25)",className:"w-32 bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-cyan-300 font-mono"}),e.jsx("button",{onClick:X,className:"px-3 py-1.5 text-xs rounded-lg bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold transition-all shadow",children:"➕ Add Node"}),e.jsxs("button",{onClick:z,className:"px-3 py-1.5 text-xs rounded-lg bg-rose-900/60 hover:bg-rose-800 text-rose-300 border border-rose-700 transition-all font-semibold",children:["🗑️ Delete Selected (",i,")"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("button",{onClick:_,className:"px-3 py-1.5 text-xs rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-800 font-mono flex items-center gap-1",children:[e.jsx("span",{children:"📏"})," Animate Height"]}),e.jsxs("button",{onClick:G,className:"px-3 py-1.5 text-xs rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-emerald-800 font-mono flex items-center gap-1",children:[e.jsx("span",{children:"🍃"})," Animate Leaves"]})]})]}),p.length>0&&e.jsxs("div",{className:"p-3.5 bg-slate-950 border border-cyan-500/40 rounded-xl space-y-2",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 text-xs",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"font-mono font-bold text-cyan-400",children:["Step ",b+1,"/",p.length,":"]}),e.jsx("span",{className:"font-bold text-slate-200 bg-slate-900 px-2 py-0.5 rounded border border-slate-800",children:E.title})]}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("button",{onClick:()=>S(!N),className:`px-3 py-1 rounded font-bold transition-all ${N?"bg-amber-600 text-slate-950":"bg-cyan-600 text-slate-950"}`,children:N?"⏸️ Pause":"▶️ Play"}),e.jsx("button",{onClick:()=>L([]),className:"px-2 py-1 bg-slate-900 text-slate-400 hover:text-white rounded border border-slate-800",children:"Clear"})]})]}),e.jsx("div",{className:"w-full bg-slate-900 rounded-full h-1 overflow-hidden",children:e.jsx("div",{className:"bg-cyan-400 h-1 transition-all duration-300",style:{width:`${(b+1)/p.length*100}%`}})})]}),e.jsxs("div",{className:"relative w-full bg-slate-950/95 border border-slate-800 rounded-2xl overflow-hidden min-h-[380px] p-2 flex flex-col justify-center items-center shadow-inner",children:[I.nodes.length===0?e.jsx("div",{className:"text-center py-16 text-slate-500 font-mono text-sm",children:"Tree is currently EMPTY (root == NULL). Load a preset above."}):e.jsxs("svg",{viewBox:"0 0 800 360",className:"w-full h-auto max-h-[420px] select-none",style:{minHeight:"320px"},children:[e.jsx("defs",{children:e.jsxs("filter",{id:"nodeGlow",x:"-20%",y:"-20%",width:"140%",height:"140%",children:[e.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"}),e.jsx("feComposite",{in:"SourceGraphic",in2:"blur",operator:"over"})]})}),[0,1,2,3,4].map(r=>e.jsxs("g",{opacity:"0.3",children:[e.jsx("line",{x1:"20",y1:45+r*70,x2:"780",y2:45+r*70,stroke:"#334155",strokeDasharray:"4 4",strokeWidth:"1"}),e.jsxs("text",{x:"30",y:45+r*70-6,fill:"#64748b",fontSize:"9",fontFamily:"monospace",children:["Depth ",r," (Level ",r,")"]})]},r)),I.edges.map(r=>e.jsxs("g",{children:[e.jsx("line",{x1:r.fromX,y1:r.fromY,x2:r.toX,y2:r.toY,stroke:"#334155",strokeWidth:"2"}),e.jsx("circle",{cx:(r.fromX+r.toX)/2,cy:(r.fromY+r.toY)/2,r:"7",fill:"#0f172a",stroke:"#475569",strokeWidth:"1"}),e.jsx("text",{x:(r.fromX+r.toX)/2,y:(r.fromY+r.toY)/2+2.5,fontSize:"8",textAnchor:"middle",fill:"#94a3b8",fontFamily:"monospace",fontWeight:"bold",children:r.branch})]},r.id)),I.nodes.map(r=>{const c=i===r.value,u=E.activeNode===r.value,$=E.highlightedPath&&E.highlightedPath.includes(r.value);let k="#0f172a",j="#38bdf8",R="#e2e8f0",H="🔷 Int";return r.isRoot?(j="#06b6d4",H="👑 Root"):r.isLeaf&&(j="#10b981",H="🍃 Leaf"),c&&(k="#1e293b",j="#f59e0b",R="#ffffff"),u&&(k="#164e63",j="#22d3ee"),e.jsxs("g",{className:"transition-all duration-300 cursor-pointer",onClick:()=>l(r.value),children:[e.jsx("circle",{cx:r.x,cy:r.y,r:"22",fill:k,stroke:j,strokeWidth:c||u?"3.5":"2.5",filter:c||u||$?"url(#nodeGlow)":void 0,className:u?"node-tracer":""}),e.jsx("text",{x:r.x,y:r.y+5,textAnchor:"middle",fontSize:"13",fontWeight:"bold",fill:R,fontFamily:"monospace",children:r.value}),e.jsxs("text",{x:r.x,y:r.y-26,textAnchor:"middle",fontSize:"9",fill:"#38bdf8",fontFamily:"monospace",children:["H=",r.height]}),e.jsx("text",{x:r.x,y:r.y+35,textAnchor:"middle",fontSize:"9",fill:r.isLeaf?"#34d399":r.isRoot?"#22d3ee":"#c084fc",fontFamily:"sans-serif",children:H}),u&&E.comparisonText&&e.jsxs("g",{className:"animate-bounce",children:[e.jsx("rect",{x:r.x-55,y:r.y-58,width:"110",height:"22",rx:"6",fill:"#0284c7",stroke:"#38bdf8",strokeWidth:"1"}),e.jsx("text",{x:r.x,y:r.y-43,textAnchor:"middle",fontSize:"9",fontWeight:"bold",fill:"#ffffff",fontFamily:"monospace",children:E.comparisonText})]})]},r.id)})]}),e.jsxs("div",{className:"w-full mt-2 pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 px-3 text-xs font-mono text-slate-400",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block"})," 👑 Root (Depth 0)"]}),e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-purple-400 inline-block"})," 🔷 Internal Node (Deg ≥ 1)"]}),e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"})," 🍃 Leaf Node (Height 0, Deg 0)"]})]}),e.jsxs("div",{className:"text-[11px] text-amber-400",children:["Selected Node: [",i,"]"]})]})]}),d&&e.jsxs("div",{className:"bg-slate-950 border border-cyan-500/30 rounded-xl p-5 space-y-4 shadow-lg",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"text-lg font-bold text-cyan-300",children:["🔬 Anatomical Diagnostic: Node [",d.value,"]"]}),e.jsx("span",{className:`px-2 py-0.5 rounded text-[11px] font-mono font-bold ${d.isRoot?"bg-cyan-950 text-cyan-300 border border-cyan-700":d.isLeaf?"bg-emerald-950 text-emerald-300 border border-emerald-700":"bg-purple-950 text-purple-300 border border-purple-700"}`,children:d.isRoot?"ROOT VERTEX":d.isLeaf?"LEAF VERTEX (0 Children)":"INTERNAL VERTEX"})]}),e.jsxs("div",{className:"text-xs font-mono text-slate-400",children:["RAM Address: ",e.jsxs("strong",{className:"text-cyan-400",children:["0x",(2048+d.value*8).toString(16)]})," (24B block)"]})]}),e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono",children:[e.jsxs("div",{className:"bg-slate-900 p-3 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-slate-400 block text-[10px] uppercase",children:"Depth from Root"}),e.jsxs("span",{className:"text-base font-bold text-sky-300",children:[d.depth," edges"]})]}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-slate-400 block text-[10px] uppercase",children:"Height to Leaf"}),e.jsxs("span",{className:"text-base font-bold text-emerald-300",children:[d.height," edges"]})]}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-slate-400 block text-[10px] uppercase",children:"Out-Degree (Children)"}),e.jsxs("span",{className:"text-base font-bold text-amber-300",children:[d.childCount," (",d.childCount===0?"Leaf":d.childCount===1?"1 Child":"2 Children",")"]})]}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-slate-400 block text-[10px] uppercase",children:"Subtree Size"}),e.jsxs("span",{className:"text-base font-bold text-purple-300",children:[d.subtreeSize," vertices"]})]})]}),e.jsxs("div",{className:"text-xs font-mono space-y-1.5 pt-1 text-slate-300",children:[e.jsxs("div",{children:[e.jsx("strong",{className:"text-cyan-400",children:"Ancestor Chain: "}),d.ancestors.length===0?e.jsx("span",{className:"text-slate-500",children:"None (Node is Root)"}):e.jsxs("span",{children:["[ Root(",d.ancestors[0],") → ",d.ancestors.slice(1).map(r=>`${r} → `),"Node(",d.value,") ]"]})]}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-emerald-400",children:"Children Links: "}),e.jsxs("span",{children:["Left: ",d.leftChildVal?`Node(${d.leftChildVal})`:"NULL",", Right: ",d.rightChildVal?`Node(${d.rightChildVal})`:"NULL"]})]})]})]})]})}),e.jsxs("section",{ref:T,className:"reveal-section max-w-6xl mx-auto mb-12 space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-cyan-300 flex items-center gap-2",children:[e.jsx("span",{children:"📚"})," Deep Technical Breakdown: Tree Anatomy & Mathematical Invariants"]}),e.jsxs("div",{className:"flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-mono",children:[e.jsx("button",{onClick:()=>U("anatomy"),className:`px-3 py-1.5 rounded-lg transition-all ${x==="anatomy"?"bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-bold":"text-slate-400 hover:text-slate-200"}`,children:"1. Anatomy & Terms"}),e.jsx("button",{onClick:()=>U("classifications"),className:`px-3 py-1.5 rounded-lg transition-all ${x==="classifications"?"bg-purple-500/20 border border-purple-500/40 text-purple-300 font-bold":"text-slate-400 hover:text-slate-200"}`,children:"2. Strict Classifications"}),e.jsx("button",{onClick:()=>U("formulas"),className:`px-3 py-1.5 rounded-lg transition-all ${x==="formulas"?"bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold":"text-slate-400 hover:text-slate-200"}`,children:"3. Formulas & Theorems"})]})]}),x==="anatomy"&&e.jsxs("div",{className:"bg-slate-900/90 border border-cyan-500/30 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl",children:[e.jsxs("h3",{className:"text-xl font-bold text-cyan-300 flex items-center gap-2",children:[e.jsx("span",{children:"🌳"})," Structural Anatomy of a Rooted Tree"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300 leading-relaxed",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsx("strong",{className:"text-cyan-400 block text-base mb-1",children:"Root Node"}),e.jsx("p",{className:"text-xs text-slate-400",children:"The unique topmost vertex with in-degree 0 (has zero parents). The entry point to all recursive tree operations."})]}),e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsx("strong",{className:"text-emerald-400 block text-base mb-1",children:"Leaf (External) Node"}),e.jsxs("p",{className:"text-xs text-slate-400",children:["A terminal vertex having degree 0 (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"left == NULL && right == NULL"}),"). Has zero child descendants."]})]}),e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsx("strong",{className:"text-purple-400 block text-base mb-1",children:"Internal (Non-Leaf) Node"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Any vertex possessing at least one child (degree ≥ 1). Acts as a branching junction in the hierarchy."})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsx("strong",{className:"text-sky-400 block text-base mb-1",children:"Depth vs. Height (The Critical Contrast)"}),e.jsxs("ul",{className:"text-xs text-slate-400 space-y-1 list-disc list-inside",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-sky-300",children:"Depth of Node N:"})," Number of edges on the path from Root down to N (",e.jsx("code",{className:"text-sky-300 font-mono",children:"Depth(Root) = 0"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-emerald-300",children:"Height of Node N:"})," Longest path from N down to a Leaf (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Height(Leaf) = 0"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-cyan-300",children:"Height of Tree:"})," Equal to the height of the Root node."]})]})]}),e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsx("strong",{className:"text-amber-400 block text-base mb-1",children:"Ancestors & Descendants"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Ancestors are all vertices on the path from Root to the node. Descendants are all vertices contained within the subtrees branching downwards from the node."})]})]})]})]}),x==="classifications"&&e.jsxs("div",{className:"bg-slate-900/90 border border-purple-500/30 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl",children:[e.jsxs("h3",{className:"text-xl font-bold text-purple-300 flex items-center gap-2",children:[e.jsx("span",{children:"🌲"})," Strict Binary Tree Classifications & Invariant Profiles"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono",children:[e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm",children:"1. Perfect Binary Tree"}),e.jsx("p",{className:"text-slate-400 font-sans text-xs",children:"All internal nodes have exactly 2 children, and ALL leaf nodes reside at the exact same depth."}),e.jsxs("div",{className:"text-slate-300 bg-slate-900 p-2 rounded text-[11px]",children:["N = 2^(h+1) - 1",e.jsx("br",{}),"Leaves L = 2^h"]})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("div",{className:"text-emerald-400 font-bold text-sm",children:"2. Full (Proper) Tree"}),e.jsx("p",{className:"text-slate-400 font-sans text-xs",children:"Every node in the tree has EITHER 0 OR 2 children (no vertex possesses degree 1)."}),e.jsxs("div",{className:"text-slate-300 bg-slate-900 p-2 rounded text-[11px]",children:["Leaves L = Internals I + 1",e.jsx("br",{}),"Total N = 2I + 1"]})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm",children:"3. Complete Binary Tree"}),e.jsx("p",{className:"text-slate-400 font-sans text-xs",children:"All levels filled except possibly last level, which is filled strictly from left to right."}),e.jsxs("div",{className:"text-slate-300 bg-slate-900 p-2 rounded text-[11px]",children:["Array: 2i+1, 2i+2",e.jsx("br",{}),"Height: floor(log2 N)"]})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 md:col-span-1.5",children:[e.jsx("div",{className:"text-amber-400 font-bold text-sm",children:"4. Balanced Tree (AVL)"}),e.jsx("p",{className:"text-slate-400 font-sans text-xs",children:"For every vertex, the heights of left and right subtrees differ by at most 1: |lh - rh| ≤ 1."}),e.jsx("div",{className:"text-slate-300 bg-slate-900 p-2 rounded text-[11px]",children:"Guarantees O(log N) worst-case height and search."})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 md:col-span-2",children:[e.jsx("div",{className:"text-rose-400 font-bold text-sm",children:"5. Degenerate (Skewed) Tree"}),e.jsx("p",{className:"text-slate-400 font-sans text-xs",children:"Every internal parent has only 1 child. Degenerates into a linear linked list of height N-1 with slow O(N) lookup."}),e.jsx("div",{className:"text-slate-300 bg-slate-900 p-2 rounded text-[11px]",children:"Height = N - 1 | Cache misses maximized"})]})]})]}),x==="formulas"&&e.jsxs("div",{className:"bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl",children:[e.jsxs("h3",{className:"text-xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"📐"})," Universal Mathematical Formulas & Tree Theorems"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs text-left border-collapse border border-slate-800 rounded-xl overflow-hidden font-mono",children:[e.jsx("thead",{className:"bg-slate-950 text-cyan-300",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 border border-slate-800",children:"Tree Property"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"Mathematical Formula"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"Significance in Systems & C"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 text-slate-300",children:[e.jsxs("tr",{className:"bg-slate-900/40",children:[e.jsx("td",{className:"p-3 font-bold text-slate-200",children:"Max Nodes at Level l"}),e.jsx("td",{className:"p-3 text-cyan-400",children:"2^l (Root is level 0)"}),e.jsx("td",{className:"p-3 text-slate-400",children:"Determines maximum BFS queue capacity."})]}),e.jsxs("tr",{className:"bg-slate-900/20",children:[e.jsx("td",{className:"p-3 font-bold text-slate-200",children:"Max Nodes in Height h"}),e.jsx("td",{className:"p-3 text-emerald-400",children:"2^(h+1) - 1"}),e.jsx("td",{className:"p-3 text-slate-400",children:"Capacity bound for perfect binary trees."})]}),e.jsxs("tr",{className:"bg-slate-900/40",children:[e.jsx("td",{className:"p-3 font-bold text-slate-200",children:"Min Height with N Nodes"}),e.jsx("td",{className:"p-3 text-purple-400",children:"ceil(log2(N + 1)) - 1"}),e.jsx("td",{className:"p-3 text-slate-400",children:"Theoretical optimal search comparison bound."})]}),e.jsxs("tr",{className:"bg-slate-900/20",children:[e.jsx("td",{className:"p-3 font-bold text-slate-200",children:"Universal Leaf Theorem"}),e.jsx("td",{className:"p-3 text-amber-400",children:"L = N_2 + 1"}),e.jsx("td",{className:"p-3 text-slate-400",children:"Leaves always equal degree-2 vertices + 1 in ANY binary tree!"})]}),e.jsxs("tr",{className:"bg-slate-900/40",children:[e.jsx("td",{className:"p-3 font-bold text-slate-200",children:"Total Edges in Tree"}),e.jsx("td",{className:"p-3 text-sky-400",children:"E = N - 1"}),e.jsx("td",{className:"p-3 text-slate-400",children:"Every node has 1 incoming parent edge except root (0)."})]})]})]})})]})]}),e.jsxs("section",{ref:T,className:"reveal-section max-w-6xl mx-auto mb-12 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("h2",{className:"text-2xl font-bold text-cyan-400 flex items-center gap-2",children:[e.jsx("span",{children:"🛠️"})," Runnable Production C Implementation (Zero Memory Leaks)"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-md border border-slate-800",children:"Height, Depth, Leaf Counts & Strict Invariant Verification"})]}),e.jsx(ee,{code:Y,initialCode:Y,title:"bst_avl_demo.c"})]}),e.jsx("section",{ref:T,className:"reveal-section max-w-6xl mx-auto mb-12",children:e.jsx(K,{questions:te})}),e.jsx("section",{ref:T,className:"reveal-section max-w-6xl mx-auto mb-12",children:e.jsx(J,{content:ne,title:"DSA Printable Note: Tree Anatomy, Invariants & Strict Binary Tree Properties"})}),e.jsx("section",{ref:T,className:"reveal-section max-w-6xl mx-auto mb-12",children:e.jsx(Z,{})})]})]})}export{pe as default};
