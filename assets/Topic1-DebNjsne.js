import{j as e}from"./vendor-react-core-BBXbtqt1.js";import{C as t}from"./CFileLoader-BGWjaMfE.js";import{F as r}from"./FAQTemplate-BamsZuNW.js";import{P as n}from"./PlainTextPrint-CGJ_aUDk.js";import{T as a}from"./TeacherSukantaHui-CzsyGExA.js";import"./CodeBlock-B1KKDgQQ.js";import"./vendor-prism-B7oW9GGR.js";import"./vendor-icons-CKN6-nXc.js";import"./EditableCCodeBlock-BgJpd7yq.js";import"./vendor-monaco-sD6ueU9e.js";const i=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <stdbool.h>\r
\r
/* Doubly Linked List Node Definition */\r
typedef struct DNode {\r
    int data;\r
    struct DNode *prev;\r
    struct DNode *next;\r
} DNode;\r
\r
/* Create a new doubly linked heap node */\r
DNode *createDNode(int data) {\r
    DNode *node = (DNode *)malloc(sizeof(DNode));\r
    if (node == NULL) {\r
        perror("Failed to allocate memory for DNode");\r
        exit(EXIT_FAILURE);\r
    }\r
    node->data = data;\r
    node->prev = NULL;\r
    node->next = NULL;\r
    return node;\r
}\r
\r
/* 1. Insert at Head of Doubly Linked List: O(1) */\r
void insertDHead(DNode **headRef, int data) {\r
    DNode *newNode = createDNode(data);\r
    newNode->next = *headRef;\r
    if (*headRef != NULL) {\r
        (*headRef)->prev = newNode;\r
    }\r
    *headRef = newNode;\r
}\r
\r
/* 2. Insert at Tail of Doubly Linked List: O(N) or O(1) with tail */\r
void insertDTail(DNode **headRef, int data) {\r
    DNode *newNode = createDNode(data);\r
    if (*headRef == NULL) {\r
        *headRef = newNode;\r
        return;\r
    }\r
    DNode *temp = *headRef;\r
    while (temp->next != NULL) {\r
        temp = temp->next;\r
    }\r
    temp->next = newNode;\r
    newNode->prev = temp;\r
}\r
\r
/* 3. Delete specific node in O(1) time when node pointer is given */\r
void deleteDNode(DNode **headRef, DNode *target) {\r
    if (*headRef == NULL || target == NULL) return;\r
\r
    /* If target is head node */\r
    if (*headRef == target) {\r
        *headRef = target->next;\r
    }\r
\r
    /* Adjust next node's prev pointer */\r
    if (target->next != NULL) {\r
        target->next->prev = target->prev;\r
    }\r
\r
    /* Adjust prev node's next pointer */\r
    if (target->prev != NULL) {\r
        target->prev->next = target->next;\r
    }\r
\r
    free(target);\r
}\r
\r
/* 4. Display Forward and Backward */\r
void displayForward(const DNode *head) {\r
    printf("    Forward  : ");\r
    const DNode *curr = head;\r
    while (curr != NULL) {\r
        printf("[%d] <-> ", curr->data);\r
        curr = curr->next;\r
    }\r
    printf("NULL\\n");\r
}\r
\r
void displayBackward(const DNode *head) {\r
    if (head == NULL) {\r
        printf("    Backward : NULL\\n");\r
        return;\r
    }\r
    /* Seek to tail */\r
    const DNode *curr = head;\r
    while (curr->next != NULL) {\r
        curr = curr->next;\r
    }\r
    printf("    Backward : ");\r
    while (curr != NULL) {\r
        printf("[%d] <-> ", curr->data);\r
        curr = curr->prev;\r
    }\r
    printf("NULL\\n");\r
}\r
\r
/* 5. Free Doubly Linked List */\r
void freeDList(DNode **headRef) {\r
    DNode *curr = *headRef;\r
    while (curr != NULL) {\r
        DNode *next = curr->next;\r
        free(curr);\r
        curr = next;\r
    }\r
    *headRef = NULL;\r
}\r
\r
int main(void) {\r
    printf("=====================================================\\n");\r
    printf("  Doubly Linked List & Bidirectional Traversal in C\\n");\r
    printf("=====================================================\\n\\n");\r
\r
    DNode *head = NULL;\r
\r
    printf(">>> Step 1: Populating Doubly Linked List...\\n");\r
    insertDHead(&head, 20);\r
    insertDHead(&head, 10);\r
    insertDTail(&head, 30);\r
    insertDTail(&head, 40);\r
    insertDTail(&head, 50);\r
\r
    displayForward(head);\r
    displayBackward(head);\r
\r
    printf("\\n-----------------------------------------------------\\n");\r
    printf(">>> Step 2: Deleting middle node (30) in O(1) pointer time...\\n");\r
    /* Locate node with data 30 */\r
    DNode *target = head;\r
    while (target != NULL && target->data != 30) {\r
        target = target->next;\r
    }\r
    if (target != NULL) {\r
        deleteDNode(&head, target);\r
        printf("    Node 30 deleted.\\n");\r
    }\r
\r
    displayForward(head);\r
    displayBackward(head);\r
\r
    printf("\\n-----------------------------------------------------\\n");\r
    printf(">>> Step 3: Deallocating all heap nodes...\\n");\r
    freeDList(&head);\r
    displayForward(head);\r
\r
    printf("\\n=== Doubly Linked List Operations Completed Successfully ===\\n");\r
    return EXIT_SUCCESS;\r
}\r
`,s=[{question:"What is a Doubly Linked List (DLL) and what are its advantages over a Singly Linked List?",answer:"A Doubly Linked List contains two pointers per node: 'next' and 'prev'. This permits bidirectional traversal (forward and backward) and allows deleting a node in O(1) time given only a pointer to that node without having to search for its predecessor."},{question:"How does O(1) node deletion work in a Doubly Linked List?",answer:"node->prev->next = node->next; if (node->next) node->next->prev = node->prev; free(node); Because each node already knows its predecessor via 'prev', no list traversal is needed."},{question:"What is a Circular Linked List (CLL)?",answer:"A linked list where the last node's 'next' pointer points back to the first node (head) rather than NULL, forming a continuous circular loop."},{question:"What is a Sentinel (Dummy Head / Tail) Node in Doubly Linked Lists?",answer:"Permanent dummy nodes at head and tail that eliminate null checks. In a sentinel-based DLL, every real data node always has a valid non-null 'prev' and 'next', drastically reducing edge-case bugs."},{question:"How does an LRU (Least Recently Used) Cache use a Doubly Linked List?",answer:"An LRU Cache pairs a Hash Table (for O(1) lookup) with a Doubly Linked List. When an item is accessed, it is detached in O(1) and moved to the head (Most Recently Used). When capacity is full, the tail node (Least Recently Used) is evicted in O(1)."},{question:"What is the memory overhead of a Doubly Linked List node compared to a Singly Linked List node?",answer:"A DLL node stores an additional 8-byte pointer ('prev' on 64-bit systems), increasing node size by 8 bytes."},{question:"How do you detect the termination condition when traversing a Circular Linked List?",answer:"Compare current against the starting node pointer (head): Node *curr = head; if (curr) do { /* process */ curr = curr->next; } while (curr != head);"},{question:"What happens if you insert a node into a DLL and forget to update node->next->prev?",answer:"Forward traversal will work, but backward traversal from the tail will skip the new node or jump to corrupted memory, creating an inconsistent asymmetric list."},{question:"What is a Circular Doubly Linked List (CDLL)?",answer:"A list where head->prev points to the tail node, and tail->next points to the head node. Both the first and last elements are directly accessible in O(1) time from the head."},{question:"How does the Linux kernel implement its universal 'struct list_head'?",answer:"It uses a circular doubly linked list where each node contains only 'next' and 'prev' pointers, embedded inside larger data structs."},{question:"How do you reverse a Doubly Linked List in-place?",answer:"Iterate through each node and swap its 'prev' and 'next' pointers: DNode *temp = curr->prev; curr->prev = curr->next; curr->next = temp; curr = curr->prev;"},{question:"What is a common real-world use case for Circular Linked Lists?",answer:"Round-robin CPU process schedulers, media playlist repeat loops, multiplayer turn-based game rotations, and audio buffer ring streams."},{question:"How do you split a Circular Linked List into two equal circular halves?",answer:"Use slow and fast pointers to find the midpoint, set mid->next to head (first circular half), and tail->next to mid->next (second circular half)."},{question:"Can a Doubly Linked List support O(1) insertion before an arbitrary given node?",answer:"Yes, because given node 'p', its predecessor is immediately accessible via p->prev."},{question:"What happens if free() is called on a node in a Circular Linked List without updating surrounding links?",answer:"The loop is broken and traversing the list leads to undefined behavior or infinite loops over deallocated memory."},{question:"Why are browser history navigation engines implemented using Doubly Linked Lists?",answer:"Because user navigation involves moving backward (Back button -> curr->prev) and forward (Forward button -> curr->next) along a linear history chain."},{question:"What is a Deque (Double-Ended Queue) and how is it implemented with a DLL?",answer:"A collection allowing O(1) push and pop at both head and tail, implemented natively by maintaining head and tail pointers on a Doubly Linked List."},{question:"How do you check if a Doubly Linked List is a palindrome?",answer:"Set left pointer to head and right pointer to tail. Move left forward and right backward, checking left->data == right->data until left meets or crosses right."},{question:"What is the time complexity of finding the size (length) of a Circular Linked List?",answer:"O(N), as you must count nodes starting from head until current->next reaches head."},{question:"How does memory fragmentation affect Doubly Linked Lists over long periods?",answer:"Frequent allocations and deallocations scatter DLL nodes across the heap, increasing heap fragmentation unless a custom memory pool or slab allocator is used."},{question:"What is the difference between an XOR Linked List (Memory Efficient DLL) and a regular DLL?",answer:"An XOR Linked List stores a single pointer field per node equal to (address(prev) ^ address(next)), halving the pointer memory overhead while still supporting bidirectional traversal."},{question:"How do you insert an element into a sorted Doubly Linked List?",answer:"Traverse until current->data >= new_data, then rewire 4 pointers: newNode->next = current, newNode->prev = current->prev, current->prev->next = newNode, current->prev = newNode."},{question:"Can a DLL node's prev pointer be NULL?",answer:"Yes, in a standard non-circular DLL, head->prev is NULL and tail->next is NULL to indicate boundary endpoints."},{question:"Why should you test DLL deletion on single-node lists (head == tail)?",answer:"Single-node lists are the most common source of null pointer dereference crashes when both head and tail must be reset to NULL."},{question:"How do compilers optimize sentinel-node Doubly Linked List traversal?",answer:"Eliminating NULL checks allows the compiler to generate unrolled loops with fewer branch mispredictions."}],d=`======================================================================\r
C LANGUAGE LESSON NOTE: TOPIC 1 (MODULE 004_012)\r
DOUBLY LINKED LISTS & CIRCULAR LINKED LISTS (SENTINELS & LRU BASICS)\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE & SHYAMNAGAR)\r
======================================================================\r
\r
1. DOUBLY LINKED LIST (DLL) NODE STRUCTURE\r
   typedef struct DNode {\r
       int data;\r
       struct DNode *prev;\r
       struct DNode *next;\r
   } DNode;\r
\r
2. WHY DLL IS ESSENTIAL: O(1) NODE DELETION\r
   - In a Singly Linked List, deleting a node requires O(N) search for its predecessor.\r
   - In a Doubly Linked List, given target pointer 'p':\r
     p->prev->next = p->next;\r
     if (p->next) p->next->prev = p->prev;\r
     free(p);\r
     Time Complexity: Strictly O(1)!\r
\r
3. CIRCULAR LINKED LISTS (CLL & CDLL)\r
   - Last node's 'next' points to head (instead of NULL).\r
   - Head's 'prev' points to tail in a Circular Doubly Linked List.\r
   - Traversal Loop Condition:\r
     DNode *curr = head;\r
     if (curr) do {\r
         // process curr\r
         curr = curr->next;\r
     } while (curr != head);\r
\r
4. SENTINEL NODE PATTERN\r
   - Introducing permanent dummy head and tail nodes removes all NULL boundary checks.\r
   - Every active data node always has non-null 'prev' and 'next'.\r
\r
5. INDUSTRY APPLICATIONS\r
   - LRU Cache Engine (O(1) hit promotion & tail eviction)\r
   - Browser History (Back / Forward navigation)\r
   - OS Round-Robin CPU Process Scheduling (Circular Lists)\r
\r
======================================================================\r
Copyright (c) Sukanta Hui - C Programming Master Series\r
======================================================================\r
`,b=()=>e.jsxs("div",{className:"space-y-10 text-slate-800 dark:text-slate-100 max-w-5xl mx-auto px-4 py-8",children:[e.jsxs("section",{className:"space-y-3 border-b border-slate-200 dark:border-slate-700 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-wide uppercase",children:[e.jsx("span",{children:"Module 004_012"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Topic 1"})]}),e.jsx("h1",{className:"text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white",children:"Doubly Linked Lists, Circular Lists & Sentinel Nodes in C"}),e.jsx("p",{className:"text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed",children:"Master bidirectional pointer topologies. Discover how Doubly Linked Lists achieve instantaneous $O(1)$ node deletion, implement circular round-robin queues, and understand the foundational data structures powering LRU caches and browser history."})]}),e.jsxs("section",{className:"bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900/60 dark:to-emerald-950/20 p-6 sm:p-8 rounded-2xl border border-emerald-100 dark:border-emerald-900/40 shadow-sm space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2",children:e.jsx("span",{children:"⚡ Classroom Story: The Instant O(1) Cache Eviction"})}),e.jsxs("p",{className:"text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base",children:["In our Shyamnagar lab, ",e.jsx("strong",{children:"Tuhina"})," was designing a cache engine. Whenever a cache node was hit, she needed to delete it from its current position and move it to the front. With a Singly Linked List, finding the previous node required an $O(N)$ linear scan on every cache access."]}),e.jsxs("p",{className:"text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base",children:[e.jsx("strong",{children:"Sukanta Sir"})," showed her the power of the ",e.jsx("code",{children:"prev"})," pointer: ",e.jsxs("em",{children:["“In a Doubly Linked List, every node already knows who stands before it! Deleting a node takes exactly two pointer assignments: ",e.jsx("code",{children:"node->prev->next = node->next"})," and ",e.jsx("code",{children:"node->next->prev = node->prev"}),". Zero search loop, strictly $O(1)$ constant time.”"]})," Tuhina implemented the DLL, achieving microsecond-level cache promotions."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Architectural Blueprint: Doubly Linked List Bidirectional Topology"}),e.jsx("div",{className:"w-full overflow-x-auto bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-inner",children:e.jsxs("svg",{viewBox:"0 0 900 240",className:"w-full min-w-[700px] h-auto font-sans","aria-label":"Doubly Linked List Memory Architecture",children:[e.jsx("rect",{width:"900",height:"240",fill:"none"}),e.jsx("rect",{x:"50",y:"60",width:"200",height:"100",rx:"8",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("rect",{x:"50",y:"60",width:"50",height:"100",fill:"#0c4a6e"}),e.jsx("text",{x:"75",y:"115",fill:"#7dd3fc",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"NULL"}),e.jsx("rect",{x:"100",y:"60",width:"100",height:"100",fill:"#064e3b"}),e.jsx("text",{x:"150",y:"115",fill:"#ffffff",fontSize:"20",fontWeight:"bold",textAnchor:"middle",children:"10"}),e.jsx("text",{x:"150",y:"140",fill:"#a7f3d0",fontSize:"10",textAnchor:"middle",children:"data"}),e.jsx("text",{x:"225",y:"115",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"next"}),e.jsx("path",{d:"M 250 90 L 350 90",stroke:"#10b981",strokeWidth:"2.5",markerEnd:"url(#arrow-dll-right)"}),e.jsx("path",{d:"M 350 130 L 250 130",stroke:"#0ea5e9",strokeWidth:"2.5",markerEnd:"url(#arrow-dll-left)"}),e.jsx("rect",{x:"350",y:"60",width:"200",height:"100",rx:"8",fill:"#1e293b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("rect",{x:"350",y:"60",width:"50",height:"100",fill:"#0c4a6e"}),e.jsx("text",{x:"375",y:"115",fill:"#7dd3fc",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"prev"}),e.jsx("rect",{x:"400",y:"60",width:"100",height:"100",fill:"#064e3b"}),e.jsx("text",{x:"450",y:"115",fill:"#ffffff",fontSize:"20",fontWeight:"bold",textAnchor:"middle",children:"20"}),e.jsx("text",{x:"450",y:"140",fill:"#a7f3d0",fontSize:"10",textAnchor:"middle",children:"data"}),e.jsx("text",{x:"525",y:"115",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"next"}),e.jsx("path",{d:"M 550 90 L 650 90",stroke:"#10b981",strokeWidth:"2.5",markerEnd:"url(#arrow-dll-right)"}),e.jsx("path",{d:"M 650 130 L 550 130",stroke:"#0ea5e9",strokeWidth:"2.5",markerEnd:"url(#arrow-dll-left)"}),e.jsx("rect",{x:"650",y:"60",width:"200",height:"100",rx:"8",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("rect",{x:"650",y:"60",width:"50",height:"100",fill:"#0c4a6e"}),e.jsx("text",{x:"675",y:"115",fill:"#7dd3fc",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"prev"}),e.jsx("rect",{x:"700",y:"60",width:"100",height:"100",fill:"#064e3b"}),e.jsx("text",{x:"750",y:"115",fill:"#ffffff",fontSize:"20",fontWeight:"bold",textAnchor:"middle",children:"30"}),e.jsx("text",{x:"750",y:"140",fill:"#a7f3d0",fontSize:"10",textAnchor:"middle",children:"data"}),e.jsx("rect",{x:"800",y:"60",width:"50",height:"100",fill:"#881337"}),e.jsx("text",{x:"825",y:"115",fill:"#fda4af",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"NULL"}),e.jsxs("defs",{children:[e.jsx("marker",{id:"arrow-dll-right",viewBox:"0 0 10 10",refX:"6",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:e.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#10b981"})}),e.jsx("marker",{id:"arrow-dll-left",viewBox:"0 0 10 10",refX:"6",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:e.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#0ea5e9"})})]})]})})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Deep Technical Breakdown: DLL vs Circular vs Sentinel Topologies"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-slate-50 dark:bg-slate-800/60 p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2",children:[e.jsx("h3",{className:"font-bold text-emerald-600 dark:text-emerald-400 text-base",children:"Doubly Linked (DLL)"}),e.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-300 leading-relaxed",children:"Provides bidirectional navigation. Deleting any node whose pointer is known takes $O(1)$ constant time with zero predecessor search."})]}),e.jsxs("div",{className:"bg-slate-50 dark:bg-slate-800/60 p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2",children:[e.jsx("h3",{className:"font-bold text-sky-600 dark:text-sky-400 text-base",children:"Circular List (CLL)"}),e.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-300 leading-relaxed",children:"Tail links back to head. Ideal for round-robin scheduling, audio ring buffers, and cyclic task dispatchers."})]}),e.jsxs("div",{className:"bg-slate-50 dark:bg-slate-800/60 p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2",children:[e.jsx("h3",{className:"font-bold text-purple-600 dark:text-purple-400 text-base",children:"Sentinel Nodes"}),e.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-300 leading-relaxed",children:"Permanent dummy head/tail nodes eliminate special null-boundary checks, producing concise, branch-free list insertion and deletion code."})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Working Code: Doubly Linked List CRUD & Bidirectional Traversal"}),e.jsx("p",{className:"text-slate-600 dark:text-slate-300 text-sm sm:text-base",children:"This program demonstrates bidirectional forward/backward traversal, $O(1)$ in-place node deletion, and complete heap memory deallocation."}),e.jsx(t,{fileName:"DoublyCircularListDemo.c",code:i,title:"Doubly Linked List CRUD & Bidirectional Traversal Engine"}),e.jsxs("div",{className:"p-4 bg-slate-900 text-slate-100 rounded-xl font-mono text-xs sm:text-sm border border-slate-700 space-y-2",children:[e.jsx("div",{className:"text-slate-400 font-semibold border-b border-slate-700 pb-1",children:"Expected Console Output:"}),e.jsx("pre",{className:"text-emerald-400 overflow-x-auto whitespace-pre-wrap",children:`=====================================================
  Doubly Linked List & Bidirectional Traversal in C
=====================================================

>>> Step 1: Populating Doubly Linked List...
    Forward  : [10] <-> [20] <-> [30] <-> [40] <-> [50] <-> NULL
    Backward : [50] <-> [40] <-> [30] <-> [20] <-> [10] <-> NULL

-----------------------------------------------------
>>> Step 2: Deleting middle node (30) in O(1) pointer time...
    Node 30 deleted.
    Forward  : [10] <-> [20] <-> [40] <-> [50] <-> NULL
    Backward : [50] <-> [40] <-> [20] <-> [10] <-> NULL

-----------------------------------------------------
>>> Step 3: Deallocating all heap nodes...
    Forward  : NULL

=== Doubly Linked List Operations Completed Successfully ===`})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Common Pitfalls & Professional Best Practices"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-5 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 rounded-xl space-y-2",children:[e.jsx("h3",{className:"font-bold text-rose-700 dark:text-rose-400 flex items-center gap-2",children:e.jsx("span",{children:"⚠️ Asymmetric Pointer Wiring"})}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-700 dark:text-slate-300",children:["When inserting a node, if you update ",e.jsx("code",{children:"prev->next = node"})," but forget to update ",e.jsx("code",{children:"node->next->prev = node"}),", forward traversal works normally while backward traversal corrupts memory. Always update all 4 pointers on DLL insertion!"]})]}),e.jsxs("div",{className:"p-5 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 rounded-xl space-y-2",children:[e.jsx("h3",{className:"font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2",children:e.jsx("span",{children:"✅ Sentinel Dummies for Complex Engines"})}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-700 dark:text-slate-300",children:"When building LRU caches, memory allocators, or event systems, allocate dummy sentinel head and tail nodes to remove special boundary checks and eliminate null dereferences."})]})]})]}),e.jsxs("section",{className:"p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl border border-slate-300 dark:border-slate-700 space-y-3",children:[e.jsx("h3",{className:"text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2",children:e.jsx("span",{children:"💡 Think About This: The Linux Kernel Circular list_head"})}),e.jsx("p",{className:"text-sm text-slate-700 dark:text-slate-300 leading-relaxed",children:"Why does the Linux kernel implement almost all internal subsystems (task scheduling, network packet buffers, device drivers) with circular doubly linked lists? Because circular DLLs allow inserting and removing nodes at head or tail in $O(1)$ time with zero conditional branching!"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Frequently Asked Questions (25 In-Depth Answers)"}),e.jsx(r,{questions:s})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Printable Quick-Reference Notes"}),e.jsx(n,{note:d,fileName:"Topic1_Doubly_Circular_Lists_Note.txt"})]}),e.jsx(a,{name:"Sukanta Hui",role:"Senior C & Systems Architect",experience:"26+ Years Experience",location:"Barrackpore & Shyamnagar, WB",quote:"Doubly linked lists and sentinel nodes teach you that symmetric data architecture produces clean, bug-free code with minimal branch complexity."})]});export{b as default};
