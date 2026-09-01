import{b as x,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as se}from"./TeacherSukantaHui-CEPuAfsb.js";import{F as ne}from"./FAQTemplate-BHhlgA96.js";import{P as ae}from"./PlainTextPrint-C08xhKA4.js";import{E as oe}from"./EditableCCodeBlock-DL0dJ6Xz.js";import"./vendor-icons-DGCamHnX.js";import"./vendor-monaco-Bv7hoEkV.js";const ie=[{id:1,question:"What is the primary condition that defines a valid Binary Search Tree (BST)?",options:["For every node N, all keys in its left subtree are strictly less than N.data, and all keys in its right subtree are strictly greater than N.data","Every node must have exactly two children except leaves","The height of the left and right subtrees must differ by at most 1 at all times","All leaf nodes must be located on the same horizontal level"],answer:"For every node N, all keys in its left subtree are strictly less than N.data, and all keys in its right subtree are strictly greater than N.data",explanation:"This invariant must hold recursively for every single node in the tree. Because of this property, an Inorder Traversal (Left → Root → Right) always produces keys in strictly ascending sorted order."},{id:2,question:"What does an Inorder Traversal (Left → Root → Right) of a valid Binary Search Tree produce?",options:["Keys sorted in strictly ascending non-decreasing order","Keys sorted in strictly descending order","Keys arranged by tree level from root to leaf","A pseudo-random distribution of keys depending on insertion order"],answer:"Keys sorted in strictly ascending non-decreasing order",explanation:"Because the BST invariant guarantees that left subtree < root < right subtree, recursively processing left subtree, then current root, then right subtree guarantees mathematical non-decreasing sorted order in O(N) time."},{id:3,question:"What is the worst-case time complexity of searching for a key in an unbalanced (skewed) BST with N nodes?",options:["O(N)","O(log N)","O(1)","O(N log N)"],answer:"O(N)",explanation:"If keys are inserted in sequential order (e.g. 10, 20, 30, 40, 50), the BST degrades into a linear chain/linked list of height N. Searching for the deepest element requires visiting every node, yielding O(N) worst-case time."},{id:4,question:"In BST deletion Case 1 (Leaf Node with 0 children), what are the exact memory and pointer operations performed?",options:["Call free(root) and return NULL so the parent pointer is reset to NULL","Replace node's value with 0 and leave memory allocated","Find the inorder successor and copy its value to the parent","Shift all downstream nodes up by one level in memory"],answer:"Call free(root) and return NULL so the parent pointer is reset to NULL",explanation:"Because a leaf has no children, removing it has zero downstream impact on the tree structure. The node memory is deallocated with free(root), and returning NULL allows the calling parent link (e.g. parent->left or parent->right) to cleanly unhook the node."},{id:5,question:"Why does Case 1 (Leaf deletion) have zero cascading structural side effects on the rest of the tree?",options:["Because the leaf has degree 0 (both left and right child pointers are NULL), so no subtrees exist below it to reattach","Because leaf nodes do not occupy memory on the heap","Because the parent node is automatically deleted along with the leaf","Because the operating system handles subtree rebalancing in hardware"],answer:"Because the leaf has degree 0 (both left and right child pointers are NULL), so no subtrees exist below it to reattach",explanation:"A leaf node is a terminal vertex in the tree hierarchy. Severing the link from its parent isolates only the leaf node itself without orphaning any descendant subtrees."},{id:6,question:"In BST deletion Case 2 (Node with 1 child), how is the deleted node bypassed without losing its descendant subtree?",options:["The parent pointer is linked directly to the deleted node's single child (left or right), and the deleted node is freed","The entire subtree rooted at that node is recursively deallocated","The child node is copied into root and the entire tree is rebalanced","A dummy node is inserted in place of the deleted node"],answer:"The parent pointer is linked directly to the deleted node's single child (left or right), and the deleted node is freed",explanation:"By capturing `temp = root->left ? root->left : root->right`, freeing `root`, and returning `temp`, the grandparent adopts the single grandchild directly. The BST invariant is preserved because all values in that child's subtree already satisfied the ancestor's comparison bound."},{id:7,question:"In C, what is the exact code pattern for Subcase 2A when the target node has ONLY a left child (`root->right == NULL`)?",options:["BSTNode* temp = root->left; free(root); return temp;","BSTNode* temp = root->right; free(root); return temp;","free(root->left); root->left = NULL; return root;","root->data = root->left->data; free(root->left); return root;"],answer:"BSTNode* temp = root->left; free(root); return temp;",explanation:"We save the pointer to the non-null left child into `temp`, deallocate `root` memory via `free(root)`, and return `temp` so the caller's pointer (`parent->left` or `parent->right`) directly references the promoted child."},{id:8,question:"Why does directly removing a node with TWO children (Case 3) fail without a replacement strategy?",options:["A parent pointer in a binary tree can only hold ONE address, so it cannot link directly to both left and right child subtrees simultaneously","Because nodes with two children cannot be freed in C","Because CPU cache registers overflow when two pointers are severed","Because the operating system MMU blocks deallocating internal tree nodes"],answer:"A parent pointer in a binary tree can only hold ONE address, so it cannot link directly to both left and right child subtrees simultaneously",explanation:"A binary tree node has a single link from its parent. If an internal node with two children is removed, two disconnected subtrees are left behind. Therefore, we must replace the node's key with an adjacent sorted key (Inorder Successor or Predecessor) instead of breaking the topology."},{id:9,question:"How do you find the Inorder Successor of a node N in a BST when N has a non-empty right subtree?",options:["Traverse to N->right, and then repeatedly follow left pointers until reaching the leftmost node (findMin(N->right))","Traverse to N->left, and then repeatedly follow right pointers (findMax(N->left))","Traverse up to the root node and find the maximum element","Select N->right directly without further traversal"],answer:"Traverse to N->right, and then repeatedly follow left pointers until reaching the leftmost node (findMin(N->right))",explanation:"The Inorder Successor is the smallest key in the right subtree. Starting at `N->right` and moving `curr = curr->left` until `curr->left == NULL` locates the minimum element in that right subtree."},{id:10,question:"How many children can an Inorder Successor (found via `findMin(root->right)`) have at most?",options:["At most 1 child (which must be a right child, never a left child)","Exactly 2 children","Up to 3 children depending on tree depth","It must always have 0 children (strictly a leaf)"],answer:"At most 1 child (which must be a right child, never a left child)",explanation:"By definition, the minimum node in a right subtree cannot have a left child (if it had a left child, that left child would be smaller!). Therefore, it can only have at most 1 right child, reducing its recursive deletion to Case 1 or Case 2."},{id:11,question:"How do you find the Inorder Predecessor of a node N in a BST when N has a non-empty left subtree?",options:["Traverse to N->left, and then repeatedly follow right pointers until reaching the rightmost node (findMax(N->left))","Traverse to N->right, and then repeatedly follow left pointers (findMin(N->right))","Traverse up to the tree root and select the left child","Select N->left directly without further traversal"],answer:"Traverse to N->left, and then repeatedly follow right pointers until reaching the rightmost node (findMax(N->left))",explanation:"The Inorder Predecessor is the largest key in the left subtree. Starting at `N->left` and moving `curr = curr->right` until `curr->right == NULL` locates the maximum element in that left subtree."},{id:12,question:"How many children can an Inorder Predecessor (found via `findMax(root->left)`) have at most?",options:["At most 1 child (which must be a left child, never a right child)","Exactly 2 children","Up to 4 children depending on memory allocation","It must always have 0 children (strictly a leaf)"],answer:"At most 1 child (which must be a left child, never a right child)",explanation:"By definition, the maximum node in a left subtree cannot have a right child (if it had a right child, that right child would be larger!). Therefore, it can only have at most 1 left child, reducing its recursive deletion to Case 1 or Case 2."},{id:13,question:"What are the exact execution steps for Case 3 deletion using Inorder Successor?",options:["1) Find succ = findMin(root->right), 2) Copy succ->data to root->data, 3) Recursively delete succ->data from root->right","1) Free root directly, 2) Move left subtree into right subtree, 3) Return NULL","1) Swap root with root->right, 2) Delete root->left, 3) Rebalance tree","1) Find succ = findMax(root->right), 2) Set root->right = NULL, 3) Free succ"],answer:"1) Find succ = findMin(root->right), 2) Copy succ->data to root->data, 3) Recursively delete succ->data from root->right",explanation:"Replacing root's key with its successor key preserves the sorted order invariant across all subtrees. Then deleting the successor from `root->right` is guaranteed to be a simple Case 1 or Case 2 deletion."},{id:14,question:"How is the Inorder Successor of a node N determined if N does NOT have a right subtree (`N->right == NULL`)?",options:["It is the lowest ancestor of N whose left child is also an ancestor of N (the closest ancestor where we took a left turn)","The node has no successor under any circumstances","It is the leftmost leaf of the entire tree","It is N's immediate left child"],answer:"It is the lowest ancestor of N whose left child is also an ancestor of N (the closest ancestor where we took a left turn)",explanation:"When stepping up the ancestor chain from N, the first ancestor reached by moving up from its left branch is strictly greater than N and represents the next sequential key in Inorder traversal."},{id:15,question:"How is the Inorder Predecessor of a node N determined if N does NOT have a left subtree (`N->left == NULL`)?",options:["It is the lowest ancestor of N whose right child is also an ancestor of N (the closest ancestor where we took a right turn)","The node has no predecessor under any circumstances","It is the rightmost leaf of the entire tree","It is N's immediate right child"],answer:"It is the lowest ancestor of N whose right child is also an ancestor of N (the closest ancestor where we took a right turn)",explanation:"When stepping up the ancestor chain from N, the first ancestor reached by moving up from its right branch is strictly smaller than N and represents the previous sequential key in Inorder traversal."},{id:16,question:"What is 'Hibbard Deletion Bias' and why does always using Inorder Successor degrade BST performance over time?",options:["Repeatedly replacing deleted nodes with right-subtree successors systematically shrinks right subtrees and makes left subtrees deeper, skewing tree height towards O(N)","It causes memory fragmentation by repeatedly allocating odd-sized chunks","It forces the CPU instruction pipeline to stall","It invalidates the binary search property on leaf nodes"],answer:"Repeatedly replacing deleted nodes with right-subtree successors systematically shrinks right subtrees and makes left subtrees deeper, skewing tree height towards O(N)",explanation:"Thomas Hibbard proved in 1962 that asymmetric deletions using only successors cause random BSTs to lose balance, increasing average depth to O(sqrt(N)) instead of O(log N). Alternating randomly between successor and predecessor mitigates this asymmetry."},{id:17,question:"When deleting the Root Node in C, why is writing `root = deleteNode(root, key)` or passing a double pointer `BSTNode** root` mandatory?",options:["In C, pointers are passed by value; if the root address is freed, the caller's pointer becomes dangling unless updated by returning the new root or modifying *root","C functions cannot deallocate heap memory without double pointers","The operating system requires double pointers for all recursive data structures","To prevent compiler warnings about unused return values"],answer:"In C, pointers are passed by value; if the root address is freed, the caller's pointer becomes dangling unless updated by returning the new root or modifying *root",explanation:"If `root` is deleted, its heap address is invalid. Assigning `root = deleteNode(root, key)` updates the caller's root pointer to the newly promoted root node (or NULL if the tree becomes empty)."},{id:18,question:"What is a 'Dangling Pointer' in the context of BST deletion, and how is it prevented in C?",options:["A pointer that still points to a deallocated memory address after free(); prevented by setting the pointer to NULL immediately after freeing","A pointer that points to two children simultaneously","A pointer that has not been initialized with malloc()","A pointer pointing to read-only program code segment"],answer:"A pointer that still points to a deallocated memory address after free(); prevented by setting the pointer to NULL immediately after freeing",explanation:"Calling `free(ptr)` marks memory as available to the OS allocator but does not erase the address in `ptr`. Setting `ptr = NULL` ensures that subsequent accidental dereferences trigger a fast, safe crash rather than corrupting memory."},{id:19,question:"Why must a whole-tree deallocation function `freeTree(root)` use Post-Order Traversal (Left → Right → Root)?",options:["It ensures both child subtrees are completely freed before the parent node memory holding their pointers is deallocated","Pre-order traversal is not supported by standard C recursion","Post-order traversal is the only traversal that runs in O(log N) time","Because Inorder traversal reverses pointer directions during deallocation"],answer:"It ensures both child subtrees are completely freed before the parent node memory holding their pointers is deallocated",explanation:"If a parent is freed first (as in Pre-order), its `left` and `right` child pointers become dangling pointers. Accessing them to free children causes Undefined Behavior and memory leaks. Post-order frees children first, then root."},{id:20,question:"Where does insertion of a new key always take place in a standard Binary Search Tree?",options:["As a new leaf node at an empty (NULL) position at the bottom of the tree","Always at the root, pushing old nodes downward","At the first available position on level 1","Randomly replacing an existing leaf"],answer:"As a new leaf node at an empty (NULL) position at the bottom of the tree",explanation:"In standard BST insertion, we follow comparison branches down the tree until reaching a NULL pointer, where we allocate a new `BSTNode` and attach it as a leaf."},{id:21,question:"How do industrial applications handle duplicate keys in a Binary Search Tree?",options:["By storing a 'count' or 'frequency' integer field within the node struct rather than creating duplicate node vertices","By inserting duplicate keys only on alternate Fridays","By ignoring all duplicates silently without recording counts","By placing duplicates in an external unindexed linked list"],answer:"By storing a 'count' or 'frequency' integer field within the node struct rather than creating duplicate node vertices",explanation:"Adding a `node->count++` field keeps tree height smaller, eliminates duplicate node pointer overhead, and simplifies deletion (decrement count until 0 before structural removal)."},{id:22,question:"How do you find the Lowest Common Ancestor (LCA) of two values n1 and n2 (where n1 < n2) in a BST?",options:["Start at root: if root->data > n2, step left; if root->data < n1, step right; otherwise root is the LCA","Traverse all paths using BFS and calculate string edit distance","Find the maximum node of the left subtree and return its parent","LCA in a BST cannot be found without parent pointers"],answer:"Start at root: if root->data > n2, step left; if root->data < n1, step right; otherwise root is the LCA",explanation:"Because of the BST property, the first node where the two search paths diverge (one value is <= root and the other is >= root) is guaranteed to be their Lowest Common Ancestor in O(h) time."},{id:23,question:"Why is verifying `node->left->data < node->data < node->right->data` for each node INSUFFICIENT to validate a BST?",options:["Because a node in the right subtree might have a descendant smaller than an ancestor higher up in the tree (violating the global BST invariant)","Because the C compiler optimizes away comparison operators in recursive functions","Because leaf nodes do not have left or right children","Because BST validation requires calculating tree diameter"],answer:"Because a node in the right subtree might have a descendant smaller than an ancestor higher up in the tree (violating the global BST invariant)",explanation:"A tree like `[20, left: 10, right: 30(left: 5)]` satisfies local checks at every node, but node `5` is in the right subtree of `20` (5 < 20), violating the global BST property. Validation must check that every node falls within `(min_allowed, max_allowed)`."},{id:24,question:"What is the auxiliary space complexity of recursive BST Search, Insertion, and Deletion?",options:["O(h) where h is the tree height, due to recursive call stack frames","Strictly O(1) under all compiler settings","O(N^2) because each stack frame clones the tree","O(log h) using hardware register compression"],answer:"O(h) where h is the tree height, due to recursive call stack frames",explanation:"Each recursive step places a function activation record on the call stack. For a balanced tree, $h = O(log N)$; for a skewed tree, $h = O(N)$. Iterative implementations can reduce Search/Insert auxiliary space to $O(1)$."},{id:25,question:"How do you find the Minimum and Maximum keys in a non-empty Binary Search Tree?",options:["Minimum is the leftmost node (`while(curr->left) curr=curr->left`); Maximum is the rightmost node (`while(curr->right) curr=curr->right`)","Minimum is always the root node; Maximum is the deepest right leaf","Perform a full Level-Order traversal and find the extremes in an array","Minimum is found via Preorder; Maximum is found via Postorder"],answer:"Minimum is the leftmost node (`while(curr->left) curr=curr->left`); Maximum is the rightmost node (`while(curr->right) curr=curr->right`)",explanation:"Due to the BST invariant, smaller keys always lie to the left and larger keys always lie to the right. Following left pointers leads directly to the minimum key in O(h) time."},{id:26,question:"Given a sorted array of N elements, how do you construct a height-balanced BST with minimal height O(log N)?",options:["Pick middle element as root, recursively build left subtree from left half, and right subtree from right half (Divide & Conquer in O(N) time)","Insert elements sequentially from index 0 to N-1 using standard insert()","Insert elements in reverse order from index N-1 down to 0","Sort array with HeapSort and link adjacent array slots with pointers"],answer:"Pick middle element as root, recursively build left subtree from left half, and right subtree from right half (Divide & Conquer in O(N) time)",explanation:"Selecting `mid = (start + end)/2` ensures an equal number of elements in both left and right subtrees at every step, creating a perfectly balanced BST of height floor(log2(N)) in O(N) total time."},{id:27,question:"What is the primary architectural difference between an unbalanced BST and self-balancing trees like AVL or Red-Black trees?",options:["Self-balancing trees enforce height/color balance invariants and perform rotations (LL, RR, LR, RL) during insert/delete to guarantee O(log N) worst-case bounds","Unbalanced BSTs store keys in arrays while AVL trees store keys in hash tables","AVL trees allow duplicate keys while standard BSTs do not","Red-Black trees do not require pointers in memory"],answer:"Self-balancing trees enforce height/color balance invariants and perform rotations (LL, RR, LR, RL) during insert/delete to guarantee O(log N) worst-case bounds",explanation:"A standard BST can degenerate into an O(N) linear list if keys arrive in sorted order. AVL and Red-Black trees monitor balance factors and execute tree rotations in O(1) time to keep height bounded by O(log N)."},{id:28,question:"On a 64-bit architecture, what is the physical memory size of `struct BSTNode { int data; struct BSTNode *left, *right; }`?",options:["24 bytes (4 bytes int + 4 bytes padding + 8 bytes left pointer + 8 bytes right pointer)","12 bytes (4 bytes int + 4 bytes left + 4 bytes right)","16 bytes exactly with zero padding","32 bytes due to cache line allocation minimums"],answer:"24 bytes (4 bytes int + 4 bytes padding + 8 bytes left pointer + 8 bytes right pointer)",explanation:"On 64-bit systems, pointers must align to 8-byte boundaries. The compiler inserts 4 invisible padding bytes after the 4-byte `int` so that `left` starts at an 8-byte aligned offset: 4 + 4(pad) + 8 + 8 = 24 bytes."},{id:29,question:"How does Level-Order Traversal (Breadth-First Search) differ from Depth-First Traversals (Inorder, Preorder, Postorder)?",options:["Level-Order visits nodes horizontally level-by-level using an auxiliary FIFO Queue, while DFS traversals use a LIFO Call Stack / recursion","Level-Order always sorts the tree keys in descending order","Level-Order only visits leaf nodes","Level-Order requires O(1) total memory under all circumstances"],answer:"Level-Order visits nodes horizontally level-by-level using an auxiliary FIFO Queue, while DFS traversals use a LIFO Call Stack / recursion",explanation:"Level-Order pushes root to a queue, then repeatedly dequeues a node, prints its key, and enqueues its left and right children. It explores the tree layer by layer."},{id:30,question:"Why are Binary Search Trees preferred over sorted arrays for dynamic datasets requiring frequent insertions and deletions?",options:["BSTs perform dynamic insert/delete in O(h) time by updating pointers without shifting elements, whereas sorted arrays require O(N) data shifts per mutation","Sorted arrays cannot be searched in logarithmic time","BSTs require 90% less memory than arrays","CPUs execute tree dereferences faster than array indexing"],answer:"BSTs perform dynamic insert/delete in O(h) time by updating pointers without shifting elements, whereas sorted arrays require O(N) data shifts per mutation",explanation:"While sorted arrays allow O(log N) binary search, inserting or deleting an element in the middle requires shifting up to N elements (O(N) memory moves). A BST achieves O(log N) search AND O(log N) dynamic insert/delete without shifting memory buffers."}],le=`================================================================================\r
CODER & ACCOTAX - ADVANCED TECHNICAL STUDY NOTE\r
Segment 2 · Module: Binary Trees, BST & AVL Self-Balancing Trees\r
Topic 2: Binary Search Tree (BST) Operations: Insertion, Search, and 3-Case Deletion\r
Mentor: Sukanta Hui · Barrackpore, West Bengal, India\r
================================================================================\r
\r
1. BST DEFINITION & THE FUNDAMENTAL INVARIANT\r
--------------------------------------------------------------------------------\r
A Binary Search Tree (BST) is a node-based binary tree data structure with the\r
following invariant holding true for EVERY node N:\r
  • All nodes in the Left Subtree of N have keys STRICTLY LESS THAN N.key\r
  • All nodes in the Right Subtree of N have keys STRICTLY GREATER THAN N.key\r
  • Both left and right subtrees must also recursively be Binary Search Trees.\r
  • Inorder Traversal (Left → Root → Right) of a BST ALWAYS yields keys in\r
    strictly ascending (sorted) order.\r
\r
2. ASYMPTOTIC COMPLEXITY ANALYSIS\r
--------------------------------------------------------------------------------\r
Operation           Average Case (Balanced)     Worst Case (Skewed)     Auxiliary Space\r
--------------------------------------------------------------------------------\r
Search              O(log N)                   O(N)                    O(h) stack / O(1) iter\r
Insertion           O(log N)                   O(N)                    O(h) recursion\r
Deletion (All Cases)O(log N)                   O(N)                    O(h) recursion\r
Inorder Traversal   O(N)                       O(N)                    O(h) call stack\r
Memory per Node     24 Bytes (on 64-bit: 4B int + 4B pad + 8B left + 8B right)\r
\r
3. BST DELETION: THE 3 STRUCTURAL CASES & MECHANICS\r
--------------------------------------------------------------------------------\r
\r
[CASE 1]: Node to be deleted is a LEAF NODE (0 Children / Degree 0)\r
--------------------------------------------------------------------------------\r
• Structural State: Target node has \`left == NULL\` and \`right == NULL\`.\r
• Pointer Mechanics:\r
    - Simply deallocate target node memory: \`free(root);\`\r
    - Return \`NULL\` to the caller so parent node's corresponding pointer is reset.\r
• Concrete Example:\r
       50                     50\r
      /  \\       Delete 20   /  \\\r
    [30]  70    ---------> 30   70\r
    /  \\                   \\\r
  (20)  40                  40\r
• C Code Snippet:\r
    if (root->left == NULL && root->right == NULL) {\r
        free(root);\r
        return NULL;\r
    }\r
\r
[CASE 2]: Node to be deleted has ONE CHILD (1 Child / Degree 1)\r
--------------------------------------------------------------------------------\r
• Structural State: Either \`root->left == NULL\` OR \`root->right == NULL\`.\r
• Pointer Mechanics:\r
    - Bypass the target node by pointing the parent directly to the single child.\r
    - Grandparent adopts the grandchild.\r
    - Save child pointer: \`BSTNode* temp = root->left ? root->left : root->right;\`\r
    - Deallocate target: \`free(root);\`\r
    - Return \`temp;\` to parent.\r
• Concrete Example (Left child only):\r
       50                     50\r
      /  \\       Delete 30   /  \\\r
    (30)  70    --------->  20   70\r
    /\r
   20\r
• Concrete Example (Right child only):\r
       50                     50\r
      /  \\       Delete 70   /  \\\r
     30  (70)   --------->  30   80\r
           \\\r
            80\r
• C Code Snippet:\r
    if (root->left == NULL) {\r
        BSTNode* temp = root->right;\r
        free(root);\r
        return temp;\r
    } else if (root->right == NULL) {\r
        BSTNode* temp = root->left;\r
        free(root);\r
        return temp;\r
    }\r
\r
[CASE 3]: Node to be deleted has TWO CHILDREN (2 Children / Degree 2)\r
--------------------------------------------------------------------------------\r
When a node has two non-empty subtrees, directly removing it would sever two\r
subtrees from the parent. We resolve this by replacing the node's value with an\r
adjacent value in the sorted order, reducing the problem to deleting a node with\r
at most 1 child!\r
\r
METHOD 3A: Inorder Successor (Smallest Node in Right Subtree) [RECOMMENDED]\r
  • How to find: Go to \`root->right\`, then traverse \`left\` as far as possible (\`findMin(root->right)\`).\r
  • Invariant Guarantee: The successor has NO left child (at most 1 right child).\r
  • Execution:\r
      1. Find successor = \`findMin(root->right)\`\r
      2. Copy successor key into target node: \`root->data = successor->data;\`\r
      3. Recursively delete successor key from right subtree:\r
         \`root->right = deleteNode(root->right, successor->data);\`\r
  • Concrete Example (Delete Root 50):\r
         (50) [Target]                      (60) [Replaced]\r
        /    \\                             /    \\\r
      30      70          ------>        30      70\r
     /  \\    /  \\                       /  \\       \\\r
    20  40 (60)  80                    20  40       80\r
          [Succ]\r
\r
METHOD 3B: Inorder Predecessor (Largest Node in Left Subtree)\r
  • How to find: Go to \`root->left\`, then traverse \`right\` as far as possible (\`findMax(root->left)\`).\r
  • Invariant Guarantee: The predecessor has NO right child (at most 1 left child).\r
  • Execution:\r
      1. Find predecessor = \`findMax(root->left)\`\r
      2. Copy predecessor key into target node: \`root->data = predecessor->data;\`\r
      3. Recursively delete predecessor key from left subtree:\r
         \`root->left = deleteNode(root->left, predecessor->data);\`\r
  • Concrete Example (Delete Root 50 using Predecessor):\r
         (50) [Target]                      (40) [Replaced]\r
        /    \\                             /    \\\r
      30      70          ------>        30      70\r
     /  \\    /  \\                       /          \\\r
    20  (40) 60  80                    20          80\r
       [Pred]\r
\r
4. SUCCESSOR VS. PREDECESSOR COMPARISON MATRIX\r
--------------------------------------------------------------------------------\r
Metric                  Inorder Successor             Inorder Predecessor\r
--------------------------------------------------------------------------------\r
Subtree Searched        Right Subtree (\`root->right\`) Left Subtree (\`root->left\`)\r
Direction of Traversal  Leftmost (\`current->left\`)    Rightmost (\`current->right\`)\r
Max Children of Candidate At most 1 child (Right)     At most 1 child (Left)\r
BST Invariant Preserved YES (Next greater element)    YES (Previous smaller element)\r
Cache & Height Impact   Biased deletions skew tree    Alternating preserves balance\r
\r
5. HARDWARE & MEMORY SAFETY CHECKLIST (ZERO-LEAK DISCIPLINE)\r
--------------------------------------------------------------------------------\r
[✓] Check \`malloc\` return for NULL before initialization.\r
[✓] In recursive delete, capture returned pointer into parent link:\r
    \`root->left = deleteNode(root->left, key);\`\r
[✓] Free heap allocation before re-linking to avoid orphaned memory leaks.\r
[✓] Pass double pointer \`BSTNode** root\` or assign return value \`root = deleteNode(root, key)\`\r
    when deleting root to avoid stale root references in caller.\r
[✓] Post-order traversal for \`freeTree(root)\` guarantees children are freed before parent.\r
\r
================================================================================\r
Coder & AccoTax Computer Education Center · Barrackpore, West Bengal, India\r
================================================================================\r
`,X=`/**
 * ============================================================================
 * Course: Data Structures & Algorithms in C
 * Mentor: Sukanta Hui (Coder & AccoTax, Barrackpore Lab)
 * Topic: Binary Search Tree (BST) Operations & 3-Case Deletion Mechanics
 * Methods: Inorder Successor (Min in Right Subtree) & Inorder Predecessor (Max in Left Subtree)
 * ============================================================================
 */

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

// 1. Definition of a Binary Search Tree Node
typedef struct BSTNode {
    int data;
    struct BSTNode* left;
    struct BSTNode* right;
} BSTNode;

// 2. Helper: Allocate and initialize a new BST node
BSTNode* createNode(int value) {
    BSTNode* newNode = (BSTNode*)malloc(sizeof(BSTNode));
    if (!newNode) {
        fprintf(stderr, "Error: Memory allocation failed for value %d\\n", value);
        exit(EXIT_FAILURE);
    }
    newNode->data = value;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

// 3. Insert a value into the BST (Maintains BST Invariant)
BSTNode* insert(BSTNode* root, int value) {
    if (root == NULL) {
        return createNode(value);
    }
    if (value < root->data) {
        root->left = insert(root->left, value);
    } else if (value > root->data) {
        root->right = insert(root->right, value);
    }
    // Duplicate values are ignored in standard BST
    return root;
}

// 4. Search for a key in the BST - O(h) Time Complexity
BSTNode* search(BSTNode* root, int key) {
    if (root == NULL || root->data == key) {
        return root;
    }
    if (key < root->data) {
        return search(root->left, key);
    }
    return search(root->right, key);
}

// 5. Helper: Find Minimum value node (Leftmost node in a subtree)
BSTNode* findMin(BSTNode* node) {
    BSTNode* current = node;
    while (current && current->left != NULL) {
        current = current->left;
    }
    return current;
}

// 6. Helper: Find Maximum value node (Rightmost node in a subtree)
BSTNode* findMax(BSTNode* node) {
    BSTNode* current = node;
    while (current && current->right != NULL) {
        current = current->right;
    }
    return current;
}

/**
 * ============================================================================
 * DELETION METHOD A: Using Inorder Successor (Smallest in Right Subtree)
 * ============================================================================
 * Case 1: Target has 0 children (Leaf) -> free(root), return NULL
 * Case 2: Target has 1 child -> replace root with non-null child, free(root)
 * Case 3: Target has 2 children ->
 *         a) Find successor = findMin(root->right)
 *         b) Copy successor->data to root->data
 *         c) Recursively delete successor from root->right
 */
BSTNode* deleteUsingSuccessor(BSTNode* root, int key) {
    if (root == NULL) {
        return NULL;
    }

    // Step 1: Navigate down the tree to locate the target node
    if (key < root->data) {
        root->left = deleteUsingSuccessor(root->left, key);
    } else if (key > root->data) {
        root->right = deleteUsingSuccessor(root->right, key);
    } else {
        // Target node found! (root->data == key)

        // CASE 1: Leaf Node (0 Children)
        if (root->left == NULL && root->right == NULL) {
            printf("  [Case 1: Leaf Node] Deleting leaf node %d\\n", root->data);
            free(root);
            return NULL;
        }

        // CASE 2: Single Child (1 Child)
        else if (root->left == NULL) {
            // Only right child exists
            printf("  [Case 2: One Child] Node %d has only right child %d\\n", root->data, root->right->data);
            BSTNode* temp = root->right;
            free(root);
            return temp;
        } else if (root->right == NULL) {
            // Only left child exists
            printf("  [Case 2: One Child] Node %d has only left child %d\\n", root->data, root->left->data);
            BSTNode* temp = root->left;
            free(root);
            return temp;
        }

        // CASE 3: Two Children (2 Children) via Inorder Successor
        else {
            BSTNode* successor = findMin(root->right);
            printf("  [Case 3: Two Children] Node %d replaced with Inorder Successor %d\\n", root->data, successor->data);
            root->data = successor->data; // Copy successor value
            // Delete successor from right subtree (successor is guaranteed to have at most 1 child)
            root->right = deleteUsingSuccessor(root->right, successor->data);
        }
    }
    return root;
}

/**
 * ============================================================================
 * DELETION METHOD B: Using Inorder Predecessor (Largest in Left Subtree)
 * ============================================================================
 * Case 3 Alternative:
 *         a) Find predecessor = findMax(root->left)
 *         b) Copy predecessor->data to root->data
 *         c) Recursively delete predecessor from root->left
 */
BSTNode* deleteUsingPredecessor(BSTNode* root, int key) {
    if (root == NULL) {
        return NULL;
    }

    if (key < root->data) {
        root->left = deleteUsingPredecessor(root->left, key);
    } else if (key > root->data) {
        root->right = deleteUsingPredecessor(root->right, key);
    } else {
        // Target node found!
        if (root->left == NULL && root->right == NULL) {
            free(root);
            return NULL;
        } else if (root->left == NULL) {
            BSTNode* temp = root->right;
            free(root);
            return temp;
        } else if (root->right == NULL) {
            BSTNode* temp = root->left;
            free(root);
            return temp;
        } else {
            // Case 3 with Inorder Predecessor
            BSTNode* predecessor = findMax(root->left);
            printf("  [Case 3: Predecessor] Node %d replaced with Inorder Predecessor %d\\n", root->data, predecessor->data);
            root->data = predecessor->data;
            root->left = deleteUsingPredecessor(root->left, predecessor->data);
        }
    }
    return root;
}

// 7. Inorder Traversal (Always prints BST keys in strictly sorted order)
void inorder(BSTNode* root) {
    if (root == NULL) return;
    inorder(root->left);
    printf("%d ", root->data);
    inorder(root->right);
}

// 8. Visual 2D Tree Print in Console
void printTree2D(BSTNode* root, int space) {
    const int COUNT = 6;
    if (root == NULL) return;
    space += COUNT;
    printTree2D(root->right, space);
    printf("\\n");
    for (int i = COUNT; i < space; i++) printf(" ");
    printf("[%d]\\n", root->data);
    printTree2D(root->left, space);
}

// 9. Memory Cleanup: Post-order recursive deallocation (Zero Leak)
void freeTree(BSTNode* root) {
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
    printf("     CODER & ACCOTAX - BST INSERTION, SEARCH & 3-CASE DELETION   \\n");
    printf("     Mentor: Sukanta Hui · Barrackpore Lab Demonstration         \\n");
    printf("=================================================================\\n\\n");

    BSTNode* root = NULL;
    int initialKeys[] = {50, 30, 70, 20, 40, 60, 80};
    int n = sizeof(initialKeys) / sizeof(initialKeys[0]);

    printf("1. Building Base BST with keys: 50, 30, 70, 20, 40, 60, 80\\n");
    for (int i = 0; i < n; i++) {
        root = insert(root, initialKeys[i]);
    }

    printf("\\nInorder Traversal (Sorted Output): ");
    inorder(root);
    printf("\\n\\nCurrent BST Structure (Root = 50):");
    printTree2D(root, 0);

    // --- CASE 1 DEMO: Deleting Leaf Node (20) ---
    printf("\\n-----------------------------------------------------------------\\n");
    printf("2. DEMONSTRATING CASE 1: Deleting Leaf Node 20 (0 Children)\\n");
    printf("-----------------------------------------------------------------\\n");
    root = deleteUsingSuccessor(root, 20);
    printf("Inorder after deleting 20: ");
    inorder(root);
    printf("\\n");

    // --- CASE 2 DEMO: Deleting Node with Single Child ---
    // Let's insert 25 to give 30 a single child structure or delete 70 after 80 is removed
    printf("\\n-----------------------------------------------------------------\\n");
    printf("3. DEMONSTRATING CASE 2: Deleting Node with 1 Child\\n");
    printf("   First deleting leaf 60, then node 70 will have only right child 80\\n");
    printf("-----------------------------------------------------------------\\n");
    root = deleteUsingSuccessor(root, 60); // 60 is leaf
    printf("Now deleting node 70 (which now has ONLY child 80)...\\n");
    root = deleteUsingSuccessor(root, 70); // 70 has single child 80
    printf("Inorder after deleting 70: ");
    inorder(root);
    printf("\\n");

    // --- CASE 3A DEMO: Deleting Node with Two Children using Inorder Successor ---
    printf("\\n-----------------------------------------------------------------\\n");
    printf("4. DEMONSTRATING CASE 3A: Deleting Root 50 using Inorder Successor\\n");
    printf("   (Right subtree contains [80], min is 80 or let's re-add nodes)\\n");
    printf("-----------------------------------------------------------------\\n");
    // Re-inserting elements to demonstrate 2-child root deletion clearly
    root = insert(root, 65);
    root = insert(root, 90);
    printf("Current Tree before deleting Root 50 (Successor Method):");
    printTree2D(root, 0);
    root = deleteUsingSuccessor(root, 50);
    printf("Inorder after deleting Root 50: ");
    inorder(root);
    printf("\\n");

    // --- CASE 3B DEMO: Deleting Node with Two Children using Inorder Predecessor ---
    printf("\\n-----------------------------------------------------------------\\n");
    printf("5. DEMONSTRATING CASE 3B: Deleting Node with Two Children using Predecessor\\n");
    printf("-----------------------------------------------------------------\\n");
    // Node 30 currently has left=NULL, right=40. Let's insert 10, 35 to give 30 two children
    root = insert(root, 10);
    root = insert(root, 35);
    printf("Tree before deleting Node 30 using Predecessor:");
    printTree2D(root, 0);
    root = deleteUsingPredecessor(root, 30);
    printf("Inorder after deleting 30 (Predecessor Method): ");
    inorder(root);
    printf("\\n");

    // Cleanup memory
    freeTree(root);
    root = NULL;
    printf("\\n=================================================================\\n");
    printf("All memory blocks successfully freed. Zero leak verified!\\n");
    printf("=================================================================\\n");

    return 0;
}
`;class v{constructor(t,i=null,a=null,c=null){this.value=t,this.left=i,this.right=a,this.id=c||`${t}-${Math.random().toString(36).substring(2,7)}`}}const f=r=>r?new v(r.value,f(r.left),f(r.right),r.id):null,R=(r,t)=>r?t<r.value?new v(r.value,R(r.left,t),r.right,r.id):t>r.value?new v(r.value,r.left,R(r.right,t),r.id):r:new v(t),de=r=>{let t=r;for(;t&&t.left;)t=t.left;return t},ce=r=>{let t=r;for(;t&&t.right;)t=t.right;return t},I=(r,t)=>{if(!r)return null;if(t<r.value)return new v(r.value,I(r.left,t),r.right,r.id);if(t>r.value)return new v(r.value,r.left,I(r.right,t),r.id);{if(!r.left&&!r.right)return null;if(!r.left)return r.right;if(!r.right)return r.left;const i=de(r.right);return new v(i.value,r.left,I(r.right,i.value),r.id)}},A=(r,t)=>{if(!r)return null;if(t<r.value)return new v(r.value,A(r.left,t),r.right,r.id);if(t>r.value)return new v(r.value,r.left,A(r.right,t),r.id);{if(!r.left&&!r.right)return null;if(!r.left)return r.right;if(!r.right)return r.left;const i=ce(r.left);return new v(i.value,A(r.left,i.value),r.right,r.id)}},H=(r,t=[])=>(r&&(H(r.left,t),t.push(r.value),H(r.right,t)),t),W=r=>r?1+Math.max(W(r.left),W(r.right)):0,z=r=>r?1+z(r.left)+z(r.right):0,Y=r=>r?!r.left&&!r.right?1:Y(r.left)+Y(r.right):0,G=(r,t=0,i=40,a=760)=>{if(!r)return{nodes:[],edges:[]};const c=(i+a)/2,n=50+t*75;let h=[{id:r.id,value:r.value,x:c,y:n,depth:t,hasLeft:!!r.left,hasRight:!!r.right,childCount:(r.left?1:0)+(r.right?1:0)}],d=[];if(r.left){const l=G(r.left,t+1,i,c);h=h.concat(l.nodes),d.push({id:`${r.value}->${r.left.value}`,fromValue:r.value,toValue:r.left.value,fromX:c,fromY:n,toX:l.nodes[0].x,toY:l.nodes[0].y,branch:"L"}),d=d.concat(l.edges)}if(r.right){const l=G(r.right,t+1,c,a);h=h.concat(l.nodes),d.push({id:`${r.value}->${r.right.value}`,fromValue:r.value,toValue:r.right.value,fromX:c,fromY:n,toX:l.nodes[0].x,toY:l.nodes[0].y,branch:"R"}),d=d.concat(l.edges)}return{nodes:h,edges:d}},k=r=>{let t=null;for(const i of r)t=R(t,i);return t},he=(r,t)=>{const i=[],a=[],c=[];i.push({title:"1. Start Insertion Traversal",tree:f(r),activeNode:r?r.value:null,highlightedPath:[],activeEdges:[],targetVal:t,badgeText:`Insert(${t})`,badgeColor:"bg-cyan-500",message:`Starting BST Insertion for key ${t} at Root.`,cCode:`BSTNode* insert(BSTNode* root, int value = ${t})`,pointerInfo:"Pointer register initialized at root."});let n=r,u=null,h=null;for(;n;){if(a.push(n.value),t===n.value)return i.push({title:"Duplicate Key Detected",tree:f(r),activeNode:n.value,highlightedPath:[...a],activeEdges:[...c],targetVal:t,badgeText:"DUPLICATE",badgeColor:"bg-amber-500",message:`Key ${t} matches node ${n.value}. In standard BST, duplicates are disallowed. Insertion aborted!`,cCode:"if (value == root->data) return root; // Duplicate rejected",pointerInfo:`Node already exists at memory 0x${(3e3+n.value*8).toString(16)}.`,isFinal:!0}),i;t<n.value?(i.push({title:`Compare: ${t} < ${n.value} → Branch LEFT`,tree:f(r),activeNode:n.value,highlightedPath:[...a],activeEdges:[...c],targetVal:t,comparisonText:`${t} < ${n.value} ⬅️`,badgeText:"BRANCH LEFT",badgeColor:"bg-sky-500",message:`Since ${t} < ${n.value}, navigate to LEFT subtree: root->left.`,cCode:`root->left = insert(root->left, ${t});`,pointerInfo:`curr = curr->left (checking 0x${n.left?(3e3+n.left.value*8).toString(16):"0x0 (NULL)"})`}),u=n,h="left",n.left&&c.push(`${n.value}->${n.left.value}`),n=n.left):(i.push({title:`Compare: ${t} > ${n.value} → Branch RIGHT`,tree:f(r),activeNode:n.value,highlightedPath:[...a],activeEdges:[...c],targetVal:t,comparisonText:`${t} > ${n.value} ➡️`,badgeText:"BRANCH RIGHT",badgeColor:"bg-indigo-500",message:`Since ${t} > ${n.value}, navigate to RIGHT subtree: root->right.`,cCode:`root->right = insert(root->right, ${t});`,pointerInfo:`curr = curr->right (checking 0x${n.right?(3e3+n.right.value*8).toString(16):"0x0 (NULL)"})`}),u=n,h="right",n.right&&c.push(`${n.value}->${n.right.value}`),n=n.right)}const d=R(r,t);return i.push({title:"Empty Slot Reached: Allocate & Attach Leaf",tree:d,activeNode:t,highlightedPath:[...a,t],activeEdges:[...c],targetVal:t,isNewlyInserted:t,badgeText:"ATTACH LEAF",badgeColor:"bg-emerald-500",message:`Reached NULL pointer on ${h?h.toUpperCase():"ROOT"} of parent ${u?u.value:"NULL"}. Created new BSTNode(${t}) and linked pointer.`,cCode:`if (root == NULL) return createNode(${t});`,pointerInfo:`Allocated 24 bytes in RAM at 0x${(3e3+t*8).toString(16)}. Zero leaks verified.`,isFinal:!0}),i},ue=(r,t)=>{const i=[],a=[],c=[];i.push({title:"1. Start Search at Root",tree:f(r),activeNode:r?r.value:null,highlightedPath:[],activeEdges:[],targetVal:t,badgeText:`Search(${t})`,badgeColor:"bg-cyan-500",message:`Initializing BST binary elimination search for target key ${t} at Root.`,cCode:`BSTNode* search(BSTNode* root, int key = ${t})`,pointerInfo:"Pointer register initialized at root."});let n=r;for(;n;){if(a.push(n.value),n.value===t)return i.push({title:`MATCH FOUND! Key ${t} Located`,tree:f(r),activeNode:n.value,highlightedPath:[...a],activeEdges:[...c],targetVal:t,isSuccess:!0,comparisonText:`MATCH: ${t} == ${n.value} 🎯`,badgeText:"FOUND 🎯",badgeColor:"bg-emerald-500",message:`Success! Target key ${t} located in BST after visiting [${a.join(" → ")}] (${a.length} comparison levels).`,cCode:`if (root->data == key) return root; // Key ${t} found!`,pointerInfo:`Returned valid pointer to node at memory 0x${(3e3+n.value*8).toString(16)}.`,isFinal:!0}),i;t<n.value?(i.push({title:`Compare: ${t} < ${n.value} → Discard Right, Go LEFT`,tree:f(r),activeNode:n.value,highlightedPath:[...a],activeEdges:[...c],targetVal:t,comparisonText:`${t} < ${n.value} ⬅️`,badgeText:"BRANCH LEFT",badgeColor:"bg-sky-500",message:`Target ${t} is smaller than ${n.value}. Entire right subtree eliminated from search. Stepping left.`,cCode:`return search(root->left, ${t});`,pointerInfo:`root = root->left (0x${n.left?(3e3+n.left.value*8).toString(16):"0x0"})`}),n.left&&c.push(`${n.value}->${n.left.value}`),n=n.left):(i.push({title:`Compare: ${t} > ${n.value} → Discard Left, Go RIGHT`,tree:f(r),activeNode:n.value,highlightedPath:[...a],activeEdges:[...c],targetVal:t,comparisonText:`${t} > ${n.value} ➡️`,badgeText:"BRANCH RIGHT",badgeColor:"bg-indigo-500",message:`Target ${t} is greater than ${n.value}. Entire left subtree eliminated from search. Stepping right.`,cCode:`return search(root->right, ${t});`,pointerInfo:`root = root->right (0x${n.right?(3e3+n.right.value*8).toString(16):"0x0"})`}),n.right&&c.push(`${n.value}->${n.right.value}`),n=n.right)}return i.push({title:`Search Exhausted: Key ${t} NOT FOUND`,tree:f(r),activeNode:null,highlightedPath:[...a],activeEdges:[...c],targetVal:t,isFailed:!0,badgeText:"NOT FOUND ❌",badgeColor:"bg-rose-500",message:`Reached NULL pointer after checking path [${a.join(" → ")}]. Key ${t} does not exist in BST.`,cCode:"if (root == NULL) return NULL; // Search failed",pointerInfo:"Pointer register is NULL (0x0). Invariant verified.",isFinal:!0}),i},ge=(r,t,i="successor")=>{const a=[],c=[],n=[];a.push({title:"1. Locate Target Node for Deletion",tree:f(r),activeNode:r?r.value:null,highlightedPath:[],activeEdges:[],targetVal:t,badgeText:`Delete(${t})`,badgeColor:"bg-rose-500",message:`Searching BST to locate target node ${t} for deletion.`,cCode:`BSTNode* deleteNode(BSTNode* root, int key = ${t})`,pointerInfo:"Navigating to target node address."});let u=r,h=null;for(;u;){if(c.push(u.value),u.value===t){h=u;break}t<u.value?(u.left&&n.push(`${u.value}->${u.left.value}`),u=u.left):(u.right&&n.push(`${u.value}->${u.right.value}`),u=u.right)}if(!h)return a.push({title:`Target ${t} Not Found: Deletion Aborted`,tree:f(r),activeNode:null,highlightedPath:[...c],activeEdges:[...n],targetVal:t,badgeText:"NOT FOUND",badgeColor:"bg-slate-500",message:`Node ${t} does not exist in the BST. No pointers were modified.`,cCode:"if (root == NULL) return NULL;",pointerInfo:"No deallocation performed.",isFinal:!0}),a;if(a.push({title:`2. Target Located: Node ${t}`,tree:f(r),activeNode:t,isTarget:t,highlightedPath:[...c],activeEdges:[...n],targetVal:t,badgeText:"TARGET FOUND",badgeColor:"bg-rose-600",message:`Target node ${t} located! Analyzing child degree structure...`,cCode:`// Target node located at memory 0x${(3e3+t*8).toString(16)}`,pointerInfo:`Child Count: ${(h.left?1:0)+(h.right?1:0)}`}),!h.left&&!h.right){a.push({title:"CASE 1: Leaf Node Deletion (0 Children)",tree:f(r),activeNode:t,isTarget:t,isBeingFreed:t,highlightedPath:[...c],activeEdges:[...n],targetVal:t,badgeText:"CASE 1: LEAF",badgeColor:"bg-emerald-500",message:`Target ${t} is a Leaf (0 children). Calling free(${t}) and returning NULL so parent link is cleared.`,cCode:`if (root->left == NULL && root->right == NULL) {
    free(root);
    return NULL;
}`,pointerInfo:`Deallocated 24 bytes at 0x${(3e3+t*8).toString(16)}. Parent pointer set to NULL.`});const d=i==="successor"?I(r,t):A(r,t);return a.push({title:`Deletion Complete: Leaf ${t} Removed`,tree:d,activeNode:null,highlightedPath:[],activeEdges:[],targetVal:t,badgeText:"COMPLETED",badgeColor:"bg-emerald-600",message:`Leaf node ${t} successfully deallocated. BST invariant preserved.`,cCode:"// Memory freed. Zero dangling pointers.",pointerInfo:"Tree structure updated cleanly.",isFinal:!0}),a}if(!h.left||!h.right){const d=h.left?h.left.value:h.right.value,l=h.left?"left":"right";a.push({title:`CASE 2: Single Child Deletion (1 Child: ${d})`,tree:f(r),activeNode:t,isTarget:t,promotedChild:d,highlightedPath:[...c],activeEdges:[...n],targetVal:t,badgeText:`CASE 2: 1 CHILD (${l.toUpperCase()})`,badgeColor:"bg-amber-500",message:`Target ${t} has exactly one child (${d}). Bypassing node ${t}: grandparent adopts grandchild ${d}. Calling free(${t}).`,cCode:`BSTNode* temp = root->${l};
free(root);
return temp; // Child ${d} promoted`,pointerInfo:`Parent pointer updated directly to child 0x${(3e3+d*8).toString(16)}.`});const o=i==="successor"?I(r,t):A(r,t);return a.push({title:`Deletion Complete: Node ${t} Bypassed & Child ${d} Promoted`,tree:o,activeNode:d,highlightedPath:[],activeEdges:[],targetVal:t,badgeText:"COMPLETED",badgeColor:"bg-emerald-600",message:`Node ${t} freed. Grandchild ${d} promoted into position.`,cCode:`// Node ${t} freed without losing ${d}'s subtree.`,pointerInfo:"BST order intact.",isFinal:!0}),a}if(i==="successor"){a.push({title:`CASE 3A: Target ${t} has TWO Children → Search Inorder Successor`,tree:f(r),activeNode:t,isTarget:t,highlightedPath:[...c],activeEdges:[...n],targetVal:t,badgeText:"CASE 3A: SUCCESSOR",badgeColor:"bg-cyan-500",message:`Target ${t} has 2 children. Initiating search for Inorder Successor (minimum node in Right Subtree: findMin(root->right)).`,cCode:"BSTNode* succ = findMin(root->right); // Min of right subtree",pointerInfo:`Moving right once (to 0x${(3e3+h.right.value*8).toString(16)}), then following left pointers.`});let d=h.right;const l=[h.right.value];for(;d.left;)d=d.left,l.push(d.value);const o=d.value;a.push({title:`Inorder Successor Located: Key ${o}`,tree:f(r),activeNode:o,isTarget:t,isSuccessor:o,highlightedPath:[...c,...l],activeEdges:[...n],targetVal:t,badgeText:`SUCCESSOR: ${o}`,badgeColor:"bg-cyan-400",message:`Found Inorder Successor ${o} (smallest key in right subtree). Guaranteed to have AT MOST 1 child!`,cCode:`// Successor ${o} has left == NULL`,pointerInfo:`Successor address: 0x${(3e3+o*8).toString(16)}.`});const m=f(r),b=p=>{p&&(p.value===t&&(p.value=o),b(p.left),b(p.right))};b(m),a.push({title:`Value Copy: Replace Target ${t} with Successor ${o}`,tree:m,activeNode:o,isTarget:o,isSuccessor:o,highlightedPath:[...c],activeEdges:[...n],targetVal:t,badgeText:`COPY VALUE (${o})`,badgeColor:"bg-indigo-500",message:`Copied successor value ${o} into target node. Now recursively deleting original successor ${o} from right subtree (Case 1 or 2).`,cCode:`root->data = succ->data; // root value is now ${o}
root->right = deleteNode(root->right, succ->data);`,pointerInfo:"Value overwritten. Subtree cleanup triggered."});const S=I(r,t);return a.push({title:`Deletion Complete: Successor ${o} Promoted, Old Node Removed`,tree:S,activeNode:o,highlightedPath:[],activeEdges:[],targetVal:t,badgeText:"COMPLETED",badgeColor:"bg-emerald-600",message:`Success! Target ${t} successfully deleted and replaced by Inorder Successor ${o}. All subtrees remain valid BSTs.`,cCode:"// Case 3 deletion completed with zero memory leaks.",pointerInfo:"Full tree balance and BST search invariant intact.",isFinal:!0}),a}else{a.push({title:`CASE 3B: Target ${t} has TWO Children → Search Inorder Predecessor`,tree:f(r),activeNode:t,isTarget:t,highlightedPath:[...c],activeEdges:[...n],targetVal:t,badgeText:"CASE 3B: PREDECESSOR",badgeColor:"bg-purple-500",message:`Target ${t} has 2 children. Initiating search for Inorder Predecessor (maximum node in Left Subtree: findMax(root->left)).`,cCode:"BSTNode* pred = findMax(root->left); // Max of left subtree",pointerInfo:`Moving left once (to 0x${(3e3+h.left.value*8).toString(16)}), then following right pointers.`});let d=h.left;const l=[h.left.value];for(;d.right;)d=d.right,l.push(d.value);const o=d.value;a.push({title:`Inorder Predecessor Located: Key ${o}`,tree:f(r),activeNode:o,isTarget:t,isPredecessor:o,highlightedPath:[...c,...l],activeEdges:[...n],targetVal:t,badgeText:`PREDECESSOR: ${o}`,badgeColor:"bg-purple-400",message:`Found Inorder Predecessor ${o} (largest key in left subtree). Guaranteed to have AT MOST 1 child!`,cCode:`// Predecessor ${o} has right == NULL`,pointerInfo:`Predecessor address: 0x${(3e3+o*8).toString(16)}.`});const m=f(r),b=p=>{p&&(p.value===t&&(p.value=o),b(p.left),b(p.right))};b(m),a.push({title:`Value Copy: Replace Target ${t} with Predecessor ${o}`,tree:m,activeNode:o,isTarget:o,isPredecessor:o,highlightedPath:[...c],activeEdges:[...n],targetVal:t,badgeText:`COPY VALUE (${o})`,badgeColor:"bg-indigo-500",message:`Copied predecessor value ${o} into target node. Now recursively deleting original predecessor ${o} from left subtree (Case 1 or 2).`,cCode:`root->data = pred->data; // root value is now ${o}
root->left = deleteNode(root->left, pred->data);`,pointerInfo:"Value overwritten. Subtree cleanup triggered."});const S=A(r,t);return a.push({title:`Deletion Complete: Predecessor ${o} Promoted, Old Node Removed`,tree:S,activeNode:o,highlightedPath:[],activeEdges:[],targetVal:t,badgeText:"COMPLETED",badgeColor:"bg-emerald-600",message:`Success! Target ${t} successfully deleted and replaced by Inorder Predecessor ${o}. All subtrees remain valid BSTs.`,cCode:"// Case 3 deletion completed with zero memory leaks.",pointerInfo:"Full tree balance and BST search invariant intact.",isFinal:!0}),a}};function ve(){const r=x.useRef([]),[t,i]=x.useState(()=>k([50,30,70,20,40,60,80])),[a,c]=x.useState(""),[n,u]=x.useState("50"),[h,d]=x.useState("successor"),[l,o]=x.useState([]),[m,b]=x.useState(0),[S,p]=x.useState(!1),[E,U]=x.useState(900),[T,M]=x.useState("case3");x.useEffect(()=>{const s=new IntersectionObserver(g=>{g.forEach(C=>{C.isIntersecting&&C.target.classList.add("is-visible")})},{threshold:.08});return r.current.forEach(g=>{g&&s.observe(g)}),()=>s.disconnect()},[]);const w=s=>{s&&!r.current.includes(s)&&r.current.push(s)};x.useEffect(()=>{let s=null;if(S&&l.length>0)if(m<l.length-1)s=setTimeout(()=>{b(g=>g+1)},E);else{const g=l[l.length-1];g&&g.tree&&i(g.tree),p(!1)}return()=>{s&&clearTimeout(s)}},[S,m,l,E]);const y=x.useMemo(()=>l.length>0&&l[m]?l[m]:{title:"BST Ready",tree:t,activeNode:null,highlightedPath:[],activeEdges:[],message:"Tree state ready. Click Insert, Search, or Delete to start step-by-step animation.",cCode:"// Invariant: Left < Root < Right. Zero memory leaks.",pointerInfo:"Pointer registers quiescent."},[l,m,t]),K=y.tree||t,F=x.useMemo(()=>G(K,0,40,760),[K]),j=x.useMemo(()=>{const s=z(t),g=W(t),C=Y(t),N=H(t),P=N.length>0?N[0]:"—",q=N.length>0?N[N.length-1]:"—";return{total:s,depth:g,leaves:C,inorderList:N,minVal:P,maxVal:q}},[t]),_=x.useCallback(()=>{const s=a.trim()!==""?parseInt(a,10):Math.floor(Math.random()*85+10);if(isNaN(s))return;const g=he(t,s);o(g),b(0),p(!0),c("")},[a,t]),Z=x.useCallback(()=>{const s=parseInt(a.trim()||n,10);if(isNaN(s))return;const g=ue(t,s);o(g),b(0),p(!0)},[a,n,t]),Q=x.useCallback(()=>{const s=parseInt(n,10);if(isNaN(s))return;const g=ge(t,s,h);o(g),b(0),p(!0)},[n,h,t]),J=()=>{if(m<l.length-1){const s=m+1;b(s),s===l.length-1&&l[s].tree&&i(l[s].tree)}},ee=()=>{m>0&&b(s=>s-1)},te=()=>{if(p(!1),l.length>0){const s=l[l.length-1];s&&s.tree&&i(s.tree)}o([]),b(0)},O=s=>{p(!1),o([]),b(0),s==="balanced"?(i(k([50,30,70,20,40,60,80])),u("50")):s==="case1_leaf"?(i(k([50,30,70,20,40,60,80])),u("20")):s==="case2_left"?(i(k([50,30,70,25,60,80])),u("30")):s==="case2_right"?(i(k([50,30,70,20,40,85])),u("70")):s==="case3_root"&&(i(k([50,30,70,20,40,60,80,35,45])),u("50"))};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
            r: 30px;
            opacity: 0.4;
            filter: drop-shadow(0 0 24px rgba(56, 189, 248, 1));
          }
        }
        @keyframes targetPulse {
          0%, 100% {
            r: 25px;
            filter: drop-shadow(0 0 12px rgba(244, 63, 94, 0.9));
          }
          50% {
            r: 29px;
            filter: drop-shadow(0 0 22px rgba(225, 29, 72, 1));
          }
        }
        @keyframes successorPulse {
          0%, 100% {
            r: 25px;
            filter: drop-shadow(0 0 12px rgba(16, 185, 129, 0.9));
          }
          50% {
            r: 29px;
            filter: drop-shadow(0 0 22px rgba(52, 211, 153, 1));
          }
        }
        .tracer-glow {
          animation: tracerPulse 1.2s infinite ease-in-out;
        }
        .target-glow {
          animation: targetPulse 1.2s infinite ease-in-out;
        }
        .successor-glow {
          animation: successorPulse 1.2s infinite ease-in-out;
        }
        .edge-active {
          stroke: #38bdf8 !important;
          stroke-width: 3.5px !important;
          stroke-dasharray: 6 3;
          animation: dashMove 0.8s linear infinite;
        }
        @keyframes dashMove {
          to { stroke-dashoffset: -18; }
        }
      `}),e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 md:p-12 font-sans selection:bg-cyan-500/30 selection:text-cyan-200",children:[e.jsxs("header",{ref:w,className:"reveal-section max-w-6xl mx-auto mb-12 text-center space-y-4",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-700/70 text-cyan-300 text-xs font-semibold uppercase tracking-wider shadow-lg",children:[e.jsx("span",{children:"⚡"}),e.jsx("span",{children:"DSA Segment 2 · Topic 2"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 tracking-tight leading-tight",children:"Binary Search Tree (BST) Architecture & Complete 3-Case Deletion Mechanics"}),e.jsx("p",{className:"text-sm sm:text-base md:text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed",children:"Master the foundational BST search invariant, dynamic insertion, and exhaustive step-by-step 3-Case Deletions using both Inorder Successor & Inorder Predecessor methods with smooth animated step-by-step visualization at Coder & AccoTax Barrackpore Lab."}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-2",children:[e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-cyan-400",children:"Course Code: DSA-C-202"}),e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-sky-400",children:"Center: Coder & AccoTax (Barrackpore Lab)"}),e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-emerald-400",children:"Mentor: Sukanta Hui"})]})]}),e.jsx("section",{ref:w,className:"reveal-section max-w-6xl mx-auto mb-12 space-y-6",children:e.jsxs("div",{className:"bg-gradient-to-br from-slate-900 via-slate-900/90 to-cyan-950/30 border border-cyan-500/30 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-2xl",children:"👨‍🏫"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-cyan-300",children:"Teacher's Desk: Physical Mental Models & Deletion Intuition"}),e.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Sukanta Hui & Barrackpore Lab Classroom Dialogue"})]})]}),e.jsxs("div",{className:"space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base",children:[e.jsxs("div",{className:"bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("h3",{className:"text-cyan-400 font-bold flex items-center gap-2 text-base",children:[e.jsx("span",{children:"💡"})," Why a Tree is NOT a Linked List: Logarithmic Search vs Linear Scans"]}),e.jsxs("p",{children:["In a linear linked list, every search requires visiting nodes one by one ($O(N)$ sequential pointer chasing). In contrast, a ",e.jsx("strong",{children:"Binary Search Tree (BST)"})," enforces an ordering invariant at every vertex: all elements strictly smaller live in the left subtree, and all elements strictly larger live in the right subtree. At each step, a single comparison halves the remaining search space, converting a slow $O(N)$ scan into an ultra-fast $O(\\log N)$ logarithmic traversal!"]})]}),e.jsxs("div",{className:"bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("h3",{className:"text-sky-400 font-bold flex items-center gap-2 text-base",children:[e.jsx("span",{children:"💬"})," Barrackpore Lab Classroom Discussion on 3-Case Deletions"]}),e.jsxs("div",{className:"space-y-3 text-xs sm:text-sm font-sans border-l-2 border-cyan-500/40 pl-4 py-1",children:[e.jsxs("p",{children:[e.jsx("strong",{className:"text-emerald-400",children:"Swadeep:"})," ",e.jsx("em",{children:'"Sir, why is deletion in a BST so much more complex than insertion?"'})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-cyan-300",children:"Sukanta Sir:"})," ",e.jsx("em",{children:'"Because insertion always occurs at an empty leaf position ($NULL$ pointer), whereas deletion can target any internal node in the middle of the tree! If the node has 2 children, removing it directly would sever both subtrees and shatter the tree into disconnected fragments."'})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-emerald-400",children:"Tuhina:"})," ",e.jsx("em",{children:`"And that's why we use either the Inorder Successor or Predecessor! Because they are guaranteed to have at most ONE child, reducing Case 3 back into an easy Case 1 or 2 deletion!"`})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-cyan-300",children:"Sukanta Sir:"})," ",e.jsx("em",{children:'"Spot on, Tuhina! We copy the value, and then perform a simple leaf or single-child deallocation. Watch the smooth animation below step by step."'})]})]})]})]})]})}),e.jsx("section",{ref:w,className:"reveal-section max-w-6xl mx-auto mb-12 space-y-6",children:e.jsxs("div",{className:"bg-slate-900/90 border border-cyan-500/40 rounded-2xl p-6 md:p-8 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-cyan-300 flex items-center gap-2",children:[e.jsx("span",{children:"🔬"})," Interactive 2D BST Visualizer & Step-by-Step Animation Engine"]}),e.jsx("p",{className:"text-xs text-slate-400 font-mono mt-1",children:"Hierarchical branch-tracing, step-by-step playback, comparison callouts, and pointer diagnostics"})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2 sm:gap-3",children:[e.jsxs("div",{className:"px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-400",children:["Total Nodes: ",e.jsx("strong",{className:"text-white",children:j.total})]}),e.jsxs("div",{className:"px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-sky-400",children:["Height: ",e.jsx("strong",{className:"text-white",children:j.depth})]}),e.jsxs("div",{className:"px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-emerald-400",children:["Leaves: ",e.jsx("strong",{className:"text-white",children:j.leaves})]}),e.jsxs("div",{className:"px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-purple-400",children:["Range: ",e.jsxs("strong",{className:"text-white",children:["[",j.minVal," .. ",j.maxVal,"]"]})]})]})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2 p-3 bg-slate-950/70 border border-slate-800/80 rounded-xl",children:[e.jsx("span",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1",children:"Quick Presets:"}),e.jsx("button",{onClick:()=>O("balanced"),className:"px-2.5 py-1 text-xs rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-800/50 transition-all",children:"🌳 Balanced 7-Node BST"}),e.jsx("button",{onClick:()=>O("case1_leaf"),className:"px-2.5 py-1 text-xs rounded-lg bg-slate-900 hover:bg-slate-800 text-emerald-300 border border-emerald-800/50 transition-all",children:"🍃 Case 1: Leaf (0 Child)"}),e.jsx("button",{onClick:()=>O("case2_left"),className:"px-2.5 py-1 text-xs rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-800/50 transition-all",children:"🌿 Case 2A: 1 Child (Left)"}),e.jsx("button",{onClick:()=>O("case2_right"),className:"px-2.5 py-1 text-xs rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-800/50 transition-all",children:"🌿 Case 2B: 1 Child (Right)"}),e.jsx("button",{onClick:()=>O("case3_root"),className:"px-2.5 py-1 text-xs rounded-lg bg-slate-900 hover:bg-slate-800 text-rose-300 border border-rose-800/50 transition-all",children:"⚡ Case 3: 2 Children (Root)"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-4",children:[e.jsxs("div",{className:"lg:col-span-5 bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-3",children:[e.jsxs("div",{className:"text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx("span",{children:"➕"})," BST Insertion & Search Animation"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"number",value:a,onChange:s=>c(s.target.value),placeholder:"Enter Key (e.g. 55)",className:"flex-1 bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-cyan-300 focus:outline-none focus:border-cyan-500 font-mono"}),e.jsxs("button",{onClick:_,className:"px-3.5 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs transition-all shadow-md flex items-center gap-1",children:[e.jsx("span",{children:"▶️"})," Animate Insert"]}),e.jsxs("button",{onClick:Z,className:"px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 font-semibold text-xs transition-all border border-slate-700 flex items-center gap-1",children:[e.jsx("span",{children:"🔍"})," Search"]})]})]}),e.jsxs("div",{className:"lg:col-span-7 bg-slate-950/80 border border-rose-900/30 rounded-xl p-4 space-y-3",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{className:"text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx("span",{children:"🗑️"})," BST Deletion Animation with Strategy Toggle"]}),e.jsxs("div",{className:"flex items-center rounded-lg bg-slate-900 p-0.5 border border-slate-800 text-[11px] font-mono",children:[e.jsx("button",{onClick:()=>d("successor"),className:`px-2 py-1 rounded-md transition-all ${h==="successor"?"bg-cyan-600 text-slate-950 font-bold shadow":"text-slate-400 hover:text-slate-200"}`,children:"Successor (Min Right)"}),e.jsx("button",{onClick:()=>d("predecessor"),className:`px-2 py-1 rounded-md transition-all ${h==="predecessor"?"bg-purple-600 text-white font-bold shadow":"text-slate-400 hover:text-slate-200"}`,children:"Predecessor (Max Left)"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"number",value:n,onChange:s=>u(s.target.value),placeholder:"Key to delete",className:"w-32 bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-rose-300 focus:outline-none focus:border-rose-500 font-mono"}),e.jsxs("button",{onClick:Q,className:"flex-1 px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition-all shadow-md shadow-rose-950/50 flex items-center justify-center gap-1.5",children:[e.jsx("span",{children:"▶️"})," Animate Delete (",h==="successor"?"Successor":"Predecessor",")"]})]})]})]}),l.length>0&&e.jsxs("div",{className:"p-4 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-cyan-500/40 rounded-xl space-y-3 shadow-lg",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider",children:["Step ",m+1," of ",l.length,":"]}),e.jsx("span",{className:"text-xs font-bold text-slate-100 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700",children:y.title})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:ee,disabled:m===0,className:"px-2.5 py-1 text-xs rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-40 transition-all border border-slate-700",children:"⏮️ Prev"}),e.jsx("button",{onClick:()=>p(!S),className:`px-3.5 py-1 text-xs font-bold rounded-lg transition-all shadow ${S?"bg-amber-600 hover:bg-amber-500 text-slate-950":"bg-cyan-600 hover:bg-cyan-500 text-slate-950"}`,children:S?"⏸️ Pause":"▶️ Play"}),e.jsx("button",{onClick:J,disabled:m===l.length-1,className:"px-2.5 py-1 text-xs rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-40 transition-all border border-slate-700",children:"Next ⏭️"}),e.jsx("button",{onClick:te,className:"px-2 py-1 text-xs rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800",children:"Clear"}),e.jsxs("div",{className:"flex items-center ml-2 border-l border-slate-800 pl-2 gap-1 text-[11px] font-mono text-slate-400",children:[e.jsx("span",{children:"Speed:"}),e.jsx("button",{onClick:()=>U(1400),className:`px-1.5 py-0.5 rounded ${E===1400?"bg-cyan-900 text-cyan-300 font-bold":"hover:text-white"}`,children:"0.5x"}),e.jsx("button",{onClick:()=>U(900),className:`px-1.5 py-0.5 rounded ${E===900?"bg-cyan-900 text-cyan-300 font-bold":"hover:text-white"}`,children:"1x"}),e.jsx("button",{onClick:()=>U(450),className:`px-1.5 py-0.5 rounded ${E===450?"bg-cyan-900 text-cyan-300 font-bold":"hover:text-white"}`,children:"2x"})]})]})]}),e.jsx("div",{className:"w-full bg-slate-950 rounded-full h-1.5 overflow-hidden border border-slate-800",children:e.jsx("div",{className:"bg-gradient-to-r from-cyan-500 to-sky-400 h-1.5 transition-all duration-300",style:{width:`${(m+1)/l.length*100}%`}})})]}),e.jsxs("div",{className:"relative w-full bg-slate-950/95 border border-slate-800 rounded-2xl overflow-hidden min-h-[380px] p-2 flex flex-col justify-center items-center shadow-inner",children:[F.nodes.length===0?e.jsx("div",{className:"text-center py-16 text-slate-500 font-mono text-sm",children:"Tree is currently EMPTY (root == NULL). Insert elements to visualize the BST."}):e.jsxs("svg",{viewBox:"0 0 800 360",className:"w-full h-auto max-h-[420px] select-none",style:{minHeight:"320px"},children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"edgeGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#0891b2",stopOpacity:"0.8"}),e.jsx("stop",{offset:"100%",stopColor:"#38bdf8",stopOpacity:"0.4"})]}),e.jsxs("filter",{id:"glow",x:"-20%",y:"-20%",width:"140%",height:"140%",children:[e.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"}),e.jsx("feComposite",{in:"SourceGraphic",in2:"blur",operator:"over"})]})]}),F.edges.map(s=>{const g=y.activeEdges&&y.activeEdges.includes(`${s.fromValue}->${s.toValue}`);return e.jsxs("g",{children:[e.jsx("line",{x1:s.fromX,y1:s.fromY,x2:s.toX,y2:s.toY,stroke:g?"#38bdf8":"#334155",strokeWidth:g?"3.5":"2",className:`transition-all duration-300 ${g?"edge-active":""}`}),e.jsx("circle",{cx:(s.fromX+s.toX)/2,cy:(s.fromY+s.toY)/2,r:"8",fill:"#0f172a",stroke:g?"#38bdf8":"#475569",strokeWidth:"1"}),e.jsx("text",{x:(s.fromX+s.toX)/2,y:(s.fromY+s.toY)/2+3,fontSize:"9",textAnchor:"middle",fill:g?"#38bdf8":"#94a3b8",fontFamily:"monospace",fontWeight:"bold",children:s.branch})]},s.id)}),F.nodes.map(s=>{const g=y.activeNode===s.value,C=y.isTarget===s.value,N=y.isSuccessor===s.value,P=y.isPredecessor===s.value,q=y.isNewlyInserted===s.value,re=y.highlightedPath&&y.highlightedPath.includes(s.value);let L="#0f172a",B="#38bdf8",V="#e2e8f0",$="2.5",D="";return C?(L="#881337",B="#f43f5e",V="#ffffff",$="3.5",D="target-glow"):N||P?(L=N?"#064e3b":"#4c1d95",B=N?"#10b981":"#a855f7",V="#ffffff",$="3.5",D="successor-glow"):g?(L="#164e63",B="#22d3ee",$="3.5",D="tracer-glow"):q?(L="#064e3b",B="#34d399",$="3.5"):re&&(L="#0e3a53",B="#38bdf8"),e.jsxs("g",{className:"transition-all duration-500 cursor-pointer",onClick:()=>u(s.value.toString()),children:[e.jsx("circle",{cx:s.x,cy:s.y,r:"22",fill:L,stroke:B,strokeWidth:$,className:D,filter:g||C||N||P?"url(#glow)":void 0}),e.jsx("text",{x:s.x,y:s.y+5,textAnchor:"middle",fontSize:"14",fontWeight:"bold",fill:V,fontFamily:"monospace",children:s.value}),e.jsxs("text",{x:s.x,y:s.y-27,textAnchor:"middle",fontSize:"9",fill:"#64748b",fontFamily:"monospace",children:["0x",(3e3+s.value*8).toString(16)]}),e.jsx("text",{x:s.x,y:s.y+35,textAnchor:"middle",fontSize:"9",fill:s.childCount===0?"#34d399":s.childCount===1?"#fbbf24":"#a78bfa",fontFamily:"sans-serif",children:s.childCount===0?"Leaf (0c)":`${s.childCount} Child`}),g&&y.comparisonText&&e.jsxs("g",{className:"animate-bounce",children:[e.jsx("rect",{x:s.x-45,y:s.y-55,width:"90",height:"22",rx:"6",fill:"#0284c7",stroke:"#38bdf8",strokeWidth:"1"}),e.jsx("text",{x:s.x,y:s.y-40,textAnchor:"middle",fontSize:"10",fontWeight:"bold",fill:"#ffffff",fontFamily:"monospace",children:y.comparisonText})]})]},s.id)})]}),e.jsxs("div",{className:"w-full mt-2 pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 px-3 text-xs font-mono text-slate-400",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-cyan-400 font-bold",children:"Inorder Traversal (Sorted):"}),e.jsxs("span",{className:"text-slate-200",children:["[ ",j.inorderList.join(", ")," ]"]})]}),e.jsx("div",{className:"text-[11px] text-slate-500",children:"Tip: Click any tree node to set it as deletion target"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-3 font-mono text-xs text-cyan-400 flex items-start gap-2",children:[e.jsx("span",{className:"text-base select-none",children:"ℹ️"}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5",children:"Step Status Log & Decision"}),e.jsx("span",{children:y.message})]})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-3 font-mono text-xs text-emerald-400 flex items-start gap-2",children:[e.jsx("span",{className:"text-base select-none",children:"💻"}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5",children:"Underlying C Pointer Code & Memory Registers"}),e.jsx("pre",{className:"text-[11px] text-emerald-300 whitespace-pre-wrap font-mono leading-tight",children:y.cCode}),e.jsx("div",{className:"text-[10px] text-slate-400 mt-1 font-mono",children:y.pointerInfo})]})]})]})]})}),e.jsxs("section",{ref:w,className:"reveal-section max-w-6xl mx-auto mb-12 space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-cyan-300 flex items-center gap-2",children:[e.jsx("span",{children:"📚"})," Deep Technical Breakdown: The 3 Structural BST Deletion Cases"]}),e.jsxs("div",{className:"flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-mono",children:[e.jsx("button",{onClick:()=>M("case1"),className:`px-3 py-1.5 rounded-lg transition-all ${T==="case1"?"bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold":"text-slate-400 hover:text-slate-200"}`,children:"Case 1: Leaf (0 Child)"}),e.jsx("button",{onClick:()=>M("case2"),className:`px-3 py-1.5 rounded-lg transition-all ${T==="case2"?"bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold":"text-slate-400 hover:text-slate-200"}`,children:"Case 2: Single Child (1 Child)"}),e.jsx("button",{onClick:()=>M("case3"),className:`px-3 py-1.5 rounded-lg transition-all ${T==="case3"?"bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-bold":"text-slate-400 hover:text-slate-200"}`,children:"Case 3: Two Children (Successor & Predecessor)"})]})]}),(T==="case1"||T==="all")&&e.jsxs("div",{className:"bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[e.jsxs("h3",{className:"text-xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"🍃"})," Case 1: Deletion of a Leaf Node (Degree 0 / 0 Children)"]}),e.jsx("span",{className:"px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs font-mono font-bold",children:"Time: O(h) · Pointer Changes: 1"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300 leading-relaxed",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{children:[e.jsx("strong",{className:"text-emerald-300",children:"Structural Mechanic:"})," A leaf node is a terminal node in the BST where ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"root->left == NULL"})," and ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"root->right == NULL"}),"."]}),e.jsxs("p",{children:["Because it has zero descendants, removing a leaf has ",e.jsx("strong",{children:"zero cascading side effects"})," on any remaining subtrees. We simply deallocate the node's heap block with ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"free(root)"})," and return ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"NULL"})," so that the calling parent's pointer is severed cleanly."]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 font-mono text-xs space-y-2 text-emerald-300",children:[e.jsx("div",{className:"text-slate-400 font-bold",children:"// C Implementation Pattern for Case 1:"}),e.jsx("pre",{className:"text-slate-200",children:`if (root->left == NULL && root->right == NULL) {
    free(root);       // 1. Release heap memory
    return NULL;      // 2. Parent pointer receives NULL
}`})]})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-5 font-mono text-xs flex flex-col justify-between space-y-3",children:[e.jsx("div",{className:"text-cyan-400 font-bold uppercase tracking-wider text-[11px]",children:"Concrete Example: Deleting Leaf Node 20"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-center py-2",children:[e.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-rose-400 font-bold block mb-2",children:"Before Deletion"}),e.jsx("pre",{className:"text-slate-300 text-[11px] leading-tight",children:`      50
     /  \\
   30    70
  /  \\
[20]  40`})]}),e.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-emerald-400 font-bold block mb-2",children:"After Deleting 20"}),e.jsx("pre",{className:"text-slate-300 text-[11px] leading-tight",children:`      50
     /  \\
   30    70
     \\
      40`})]})]}),e.jsxs("div",{className:"text-[11px] text-slate-400",children:["Parent node ",e.jsx("code",{className:"text-emerald-400",children:"30->left"})," is reset to ",e.jsx("code",{className:"text-emerald-400",children:"NULL"}),". The BST ordering ",e.jsx("code",{className:"text-slate-200",children:"[30, 40, 50, 70]"})," remains perfectly preserved."]})]})]})]}),(T==="case2"||T==="all")&&e.jsxs("div",{className:"bg-slate-900/90 border border-amber-500/30 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[e.jsxs("h3",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"🌿"})," Case 2: Deletion of a Node with One Child (Degree 1 / Single Child)"]}),e.jsx("span",{className:"px-3 py-1 rounded-full bg-amber-950/80 border border-amber-800 text-amber-300 text-xs font-mono font-bold",children:"Time: O(h) · Subtree Bypassing"})]}),e.jsxs("div",{className:"space-y-6 text-sm text-slate-300 leading-relaxed",children:[e.jsxs("p",{children:[e.jsx("strong",{className:"text-amber-300",children:"Structural Mechanic:"})," The node to be deleted has exactly one non-empty child subtree—either left or right. To eliminate the node without losing its descendant branch, we perform a ",e.jsx("strong",{children:"pointer bypass (grandparent adopts grandchild)"}),":"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3 font-mono text-xs",children:[e.jsxs("h4",{className:"text-amber-400 font-bold flex items-center gap-2 text-sm",children:[e.jsx("span",{children:"🅰️"})," Subcase 2A: Node has ONLY Left Child"]}),e.jsxs("p",{className:"text-slate-300 font-sans text-xs",children:["Target node has ",e.jsx("code",{className:"text-amber-300",children:"root->right == NULL"})," and non-null ",e.jsx("code",{className:"text-amber-300",children:"root->left"}),". We capture ",e.jsx("code",{className:"text-amber-300",children:"temp = root->left"}),", free ",e.jsx("code",{className:"text-amber-300",children:"root"}),", and return ",e.jsx("code",{className:"text-amber-300",children:"temp"})," to the parent."]}),e.jsx("pre",{className:"text-slate-200 bg-slate-900 p-3 rounded-lg",children:`if (root->right == NULL) {
    BSTNode* temp = root->left;
    free(root);
    return temp; // Child promoted
}`}),e.jsxs("div",{className:"bg-slate-900/60 p-3 rounded-lg text-center",children:[e.jsx("span",{className:"text-slate-400 text-[10px] block mb-1",children:"Example: Deleting 30 (left child 25)"}),e.jsx("pre",{className:"text-[11px] text-slate-300",children:`    50                50
   /  \\   Delete 30  /  \\
 (30)  70  ------──→ 25  70
  /
 25`})]})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3 font-mono text-xs",children:[e.jsxs("h4",{className:"text-amber-400 font-bold flex items-center gap-2 text-sm",children:[e.jsx("span",{children:"🅱️"})," Subcase 2B: Node has ONLY Right Child"]}),e.jsxs("p",{className:"text-slate-300 font-sans text-xs",children:["Target node has ",e.jsx("code",{className:"text-amber-300",children:"root->left == NULL"})," and non-null ",e.jsx("code",{className:"text-amber-300",children:"root->right"}),". We capture ",e.jsx("code",{className:"text-amber-300",children:"temp = root->right"}),", free ",e.jsx("code",{className:"text-amber-300",children:"root"}),", and return ",e.jsx("code",{className:"text-amber-300",children:"temp"}),"."]}),e.jsx("pre",{className:"text-slate-200 bg-slate-900 p-3 rounded-lg",children:`if (root->left == NULL) {
    BSTNode* temp = root->right;
    free(root);
    return temp; // Child promoted
}`}),e.jsxs("div",{className:"bg-slate-900/60 p-3 rounded-lg text-center",children:[e.jsx("span",{className:"text-slate-400 text-[10px] block mb-1",children:"Example: Deleting 70 (right child 85)"}),e.jsx("pre",{className:"text-[11px] text-slate-300",children:`    50                50
   /  \\   Delete 70  /  \\
  30  (70) ------──→ 30  85
        \\
         85`})]})]})]})]})]}),(T==="case3"||T==="all")&&e.jsxs("div",{className:"bg-slate-900/90 border border-cyan-500/40 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[e.jsxs("h3",{className:"text-xl font-bold text-cyan-300 flex items-center gap-2",children:[e.jsx("span",{children:"⚡"})," Case 3: Deletion of a Node with Two Children (Degree 2)"]}),e.jsx("span",{className:"px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-mono font-bold",children:"Dual Strategies: Successor vs Predecessor"})]}),e.jsxs("div",{className:"space-y-6 text-sm text-slate-300 leading-relaxed",children:[e.jsxs("div",{className:"bg-slate-950/80 border border-slate-800 rounded-xl p-5 space-y-2",children:[e.jsx("h4",{className:"text-base font-bold text-cyan-400",children:"Why Direct Removal Fails & The Replacement Theorem"}),e.jsxs("p",{children:["When a node has two children, simply deleting it leaves two disconnected subtrees with no single root to attach to the parent. Instead of breaking tree topology, we replace the target's value with the ",e.jsx("strong",{children:"closest adjacent value in sorted order"}),"."]}),e.jsxs("p",{className:"text-xs text-slate-400",children:[e.jsx("strong",{children:"Crucial Invariant Guarantee:"})," Both the Inorder Successor and Inorder Predecessor are guaranteed to have ",e.jsx("em",{children:"at most 1 child"}),"! Thus, after copying its value, deleting that candidate node from the subtree reduces the problem to an easy ",e.jsx("strong",{children:"Case 1 (Leaf)"})," or ",e.jsx("strong",{children:"Case 2 (Single Child)"})," deletion."]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 border border-cyan-500/30 rounded-xl p-5 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h4",{className:"text-base font-bold text-cyan-300 flex items-center gap-2",children:[e.jsx("span",{children:"🌟"})," Method 3A: Inorder Successor (Recommended)"]}),e.jsx("span",{className:"text-[11px] font-mono text-cyan-400 font-bold bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800",children:"findMin(root->right)"})]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Definition:"})," The smallest key in the target node's ",e.jsx("strong",{children:"Right Subtree"}),". It is found by stepping right once, and then moving left as far as possible until ",e.jsx("code",{className:"text-cyan-400",children:"left == NULL"}),"."]}),e.jsxs("div",{className:"space-y-1.5 text-xs text-slate-300",children:[e.jsx("div",{className:"font-semibold text-cyan-400",children:"Step-by-Step Execution:"}),e.jsxs("ol",{className:"list-decimal list-inside space-y-1 text-slate-400 text-[11px]",children:[e.jsxs("li",{children:["Locate ",e.jsx("code",{className:"text-slate-200",children:"succ = findMin(root->right)"}),"."]}),e.jsxs("li",{children:["Copy successor value: ",e.jsx("code",{className:"text-slate-200",children:"root->data = succ->data"}),"."]}),e.jsxs("li",{children:["Recursively delete successor from right subtree: ",e.jsx("code",{className:"text-slate-200",children:"root->right = deleteNode(root->right, succ->data)"}),"."]})]})]}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded-lg border border-slate-800 text-[11px] font-mono",children:[e.jsx("div",{className:"text-cyan-400 text-center font-bold mb-1",children:"Example: Deleting Root 50 via Successor (60)"}),e.jsx("pre",{className:"text-slate-300 leading-tight",children:`       (50) [Target]                     (60) [Replaced]
      /    \\                            /    \\
    30      70          ----──→       30      70
   /  \\    /  \\                      /  \\       \\
  20  40 (60)  80                   20  40       80
        [Succ]`})]})]}),e.jsxs("div",{className:"bg-slate-950 border border-purple-500/30 rounded-xl p-5 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h4",{className:"text-base font-bold text-purple-300 flex items-center gap-2",children:[e.jsx("span",{children:"🔄"})," Method 3B: Inorder Predecessor"]}),e.jsx("span",{className:"text-[11px] font-mono text-purple-400 font-bold bg-purple-950 px-2 py-0.5 rounded border border-purple-800",children:"findMax(root->left)"})]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Definition:"})," The largest key in the target node's ",e.jsx("strong",{children:"Left Subtree"}),". It is found by stepping left once, and then moving right as far as possible until ",e.jsx("code",{className:"text-purple-400",children:"right == NULL"}),"."]}),e.jsxs("div",{className:"space-y-1.5 text-xs text-slate-300",children:[e.jsx("div",{className:"font-semibold text-purple-400",children:"Step-by-Step Execution:"}),e.jsxs("ol",{className:"list-decimal list-inside space-y-1 text-slate-400 text-[11px]",children:[e.jsxs("li",{children:["Locate ",e.jsx("code",{className:"text-slate-200",children:"pred = findMax(root->left)"}),"."]}),e.jsxs("li",{children:["Copy predecessor value: ",e.jsx("code",{className:"text-slate-200",children:"root->data = pred->data"}),"."]}),e.jsxs("li",{children:["Recursively delete predecessor from left subtree: ",e.jsx("code",{className:"text-slate-200",children:"root->left = deleteNode(root->left, pred->data)"}),"."]})]})]}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded-lg border border-slate-800 text-[11px] font-mono",children:[e.jsx("div",{className:"text-purple-400 text-center font-bold mb-1",children:"Example: Deleting Root 50 via Predecessor (40)"}),e.jsx("pre",{className:"text-slate-300 leading-tight",children:`       (50) [Target]                     (40) [Replaced]
      /    \\                            /    \\
    30      70          ----──→       30      70
   /  \\    /  \\                      /       /  \\
  20  (40) 60  80                   20      60  80
     [Pred]`})]})]})]}),e.jsx("div",{className:"overflow-x-auto pt-2",children:e.jsxs("table",{className:"w-full text-xs text-left border-collapse border border-slate-800 rounded-xl overflow-hidden font-mono",children:[e.jsx("thead",{className:"bg-slate-950 text-cyan-300",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 border border-slate-800",children:"Strategy Metric"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"Inorder Successor"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"Inorder Predecessor"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 text-slate-300",children:[e.jsxs("tr",{className:"bg-slate-900/40",children:[e.jsx("td",{className:"p-3 font-bold text-slate-200",children:"Search Subtree"}),e.jsxs("td",{className:"p-3 text-cyan-400",children:["Right Subtree (",e.jsx("code",{className:"text-xs font-mono",children:"root->right"}),")"]}),e.jsxs("td",{className:"p-3 text-purple-400",children:["Left Subtree (",e.jsx("code",{className:"text-xs font-mono",children:"root->left"}),")"]})]}),e.jsxs("tr",{className:"bg-slate-900/20",children:[e.jsx("td",{className:"p-3 font-bold text-slate-200",children:"Search Direction"}),e.jsxs("td",{className:"p-3",children:["Traverse ",e.jsx("code",{className:"text-cyan-400",children:"left"})," pointers till NULL (",e.jsx("code",{className:"text-xs",children:"findMin"}),")"]}),e.jsxs("td",{className:"p-3",children:["Traverse ",e.jsx("code",{className:"text-purple-400",children:"right"})," pointers till NULL (",e.jsx("code",{className:"text-xs",children:"findMax"}),")"]})]}),e.jsxs("tr",{className:"bg-slate-900/40",children:[e.jsx("td",{className:"p-3 font-bold text-slate-200",children:"Max Children of Candidate"}),e.jsx("td",{className:"p-3",children:"At most 1 (Right child only; never left child)"}),e.jsx("td",{className:"p-3",children:"At most 1 (Left child only; never right child)"})]}),e.jsxs("tr",{className:"bg-slate-900/20",children:[e.jsx("td",{className:"p-3 font-bold text-slate-200",children:"BST Invariant Preservation"}),e.jsx("td",{className:"p-3 text-emerald-400",children:"100% Guaranteed (Sorted Inorder intact)"}),e.jsx("td",{className:"p-3 text-emerald-400",children:"100% Guaranteed (Sorted Inorder intact)"})]})]})]})})]})]})]}),e.jsxs("section",{ref:w,className:"reveal-section max-w-6xl mx-auto mb-12 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("h2",{className:"text-2xl font-bold text-cyan-400 flex items-center gap-2",children:[e.jsx("span",{children:"🛠️"})," Runnable Production C Implementation (Zero Memory Leaks)"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-md border border-slate-800",children:"Covers Case 1, Case 2, and Case 3 (Both Successor & Predecessor)"})]}),e.jsx(oe,{code:X,initialCode:X,title:"BinarySearchTreeBstOperationsIDemo.c"})]}),e.jsx("section",{ref:w,className:"reveal-section max-w-6xl mx-auto mb-12",children:e.jsx(ne,{questions:ie})}),e.jsx("section",{ref:w,className:"reveal-section max-w-6xl mx-auto mb-12",children:e.jsx(ae,{content:le,title:"DSA Printable Note: Binary Search Tree (BST) Architecture, Operations & 3-Case Deletions"})}),e.jsx("section",{ref:w,className:"reveal-section max-w-6xl mx-auto mb-12",children:e.jsx(se,{})})]})]})}export{ve as default};
