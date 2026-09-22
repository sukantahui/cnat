import{j as e}from"./vendor-react-core-D9iF7FwR.js";import{C as t}from"./CFileLoader-XRIlgaz2.js";import{F as n}from"./FAQTemplate-DmdkpHR-.js";import{P as r}from"./PlainTextPrint-CS96sBe2.js";import{T as a}from"./TeacherSukantaHui-Bldu0y17.js";import"./CodeBlock-DjHpm_Qe.js";import"./vendor-prism-SANIKoEh.js";import"./vendor-icons-Beb6eGc1.js";import"./EditableCCodeBlock-BWI9JrQC.js";import"./vendor-monaco-CEXMEfXF.js";const i=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <stdbool.h>\r
\r
/* Singly Linked List Node Definition */\r
typedef struct Node {\r
    int data;\r
    struct Node *next;\r
} Node;\r
\r
/* Helper: Create a new heap-allocated node */\r
Node *createNode(int data) {\r
    Node *newNode = (Node *)malloc(sizeof(Node));\r
    if (newNode == NULL) {\r
        fprintf(stderr, "Error: Memory allocation failed for new node!\\n");\r
        exit(EXIT_FAILURE);\r
    }\r
    newNode->data = data;\r
    newNode->next = NULL;\r
    return newNode;\r
}\r
\r
/* 1. Insert at head (Beginning): O(1) */\r
void insertHead(Node **headRef, int data) {\r
    Node *newNode = createNode(data);\r
    newNode->next = *headRef;\r
    *headRef = newNode;\r
}\r
\r
/* 2. Insert at tail (End): O(N) */\r
void insertTail(Node **headRef, int data) {\r
    Node *newNode = createNode(data);\r
    if (*headRef == NULL) {\r
        *headRef = newNode;\r
        return;\r
    }\r
    Node *current = *headRef;\r
    while (current->next != NULL) {\r
        current = current->next;\r
    }\r
    current->next = newNode;\r
}\r
\r
/* 3. Delete node by value: O(N) */\r
bool deleteNode(Node **headRef, int key) {\r
    if (*headRef == NULL) return false;\r
\r
    Node *temp = *headRef;\r
\r
    /* If head holds the key */\r
    if (temp->data == key) {\r
        *headRef = temp->next;\r
        free(temp);\r
        return true;\r
    }\r
\r
    /* Search for key while keeping track of previous node */\r
    Node *prev = NULL;\r
    while (temp != NULL && temp->data != key) {\r
        prev = temp;\r
        temp = temp->next;\r
    }\r
\r
    if (temp == NULL) return false; /* Key not found */\r
\r
    prev->next = temp->next;\r
    free(temp);\r
    return true;\r
}\r
\r
/* 4. In-place iterative list reversal: O(N) time, O(1) space */\r
void reverseList(Node **headRef) {\r
    Node *prev = NULL;\r
    Node *current = *headRef;\r
    Node *next = NULL;\r
\r
    while (current != NULL) {\r
        next = current->next;   /* Store next pointer */\r
        current->next = prev;   /* Reverse current node's pointer */\r
        prev = current;         /* Move prev forward */\r
        current = next;         /* Move current forward */\r
    }\r
    *headRef = prev;\r
}\r
\r
/* 5. Traverse and display list */\r
void displayList(const Node *head) {\r
    if (head == NULL) {\r
        printf("    [Empty List: NULL]\\n");\r
        return;\r
    }\r
    printf("    ");\r
    const Node *curr = head;\r
    while (curr != NULL) {\r
        printf("[%d] -> ", curr->data);\r
        curr = curr->next;\r
    }\r
    printf("NULL\\n");\r
}\r
\r
/* 6. Clean up heap memory */\r
void freeList(Node **headRef) {\r
    Node *current = *headRef;\r
    while (current != NULL) {\r
        Node *next = current->next;\r
        free(current);\r
        current = next;\r
    }\r
    *headRef = NULL;\r
}\r
\r
int main(void) {\r
    printf("=====================================================\\n");\r
    printf("  Singly Linked List Implementation in Pure C\\n");\r
    printf("=====================================================\\n\\n");\r
\r
    Node *head = NULL;\r
\r
    printf(">>> Step 1: Inserting elements at Head and Tail...\\n");\r
    insertHead(&head, 30);\r
    insertHead(&head, 20);\r
    insertHead(&head, 10);\r
    insertTail(&head, 40);\r
    insertTail(&head, 50);\r
\r
    printf("    Current List:\\n");\r
    displayList(head);\r
\r
    printf("\\n-----------------------------------------------------\\n");\r
    printf(">>> Step 2: Deleting node with value 30...\\n");\r
    if (deleteNode(&head, 30)) {\r
        printf("    Node 30 deleted successfully.\\n");\r
    }\r
    printf("    Current List:\\n");\r
    displayList(head);\r
\r
    printf("\\n-----------------------------------------------------\\n");\r
    printf(">>> Step 3: In-Place Iterative List Reversal (O(1) auxiliary space)...\\n");\r
    reverseList(&head);\r
    printf("    Reversed List:\\n");\r
    displayList(head);\r
\r
    printf("\\n-----------------------------------------------------\\n");\r
    printf(">>> Step 4: Deallocating all heap nodes with freeList()...\\n");\r
    freeList(&head);\r
    displayList(head);\r
\r
    printf("\\n=== Singly Linked List Operations Completed Successfully ===\\n");\r
    return EXIT_SUCCESS;\r
}\r
`,s=[{question:"What is a Singly Linked List and how does it differ from a contiguous array?",answer:"A Singly Linked List is a linear collection of nodes dynamically allocated in non-contiguous heap memory. Each node contains data and a pointer ('next') to the succeeding node, allowing O(1) dynamic insertions/deletions without resizing or shifting contiguous memory blocks."},{question:"Why must functions that modify the head pointer receive a pointer-to-pointer (Node **headRef)?",answer:"Because C is strictly pass-by-value. Passing a single pointer 'Node *head' passes a copy of the address. Modifying 'head' locally would not change the caller's head variable. Passing 'Node **headRef' allows dereferencing (*headRef = newNode) to modify the caller's actual head pointer."},{question:"What is the time complexity of inserting a node at the head of a Singly Linked List?",answer:"O(1) constant time, because updating the new node's next pointer to current head and resetting head requires only two pointer assignments regardless of list length."},{question:"What is the time complexity of inserting a node at the tail without a tail pointer?",answer:"O(N) linear time, because you must traverse from head through all N nodes until current->next is NULL before attaching the new node."},{question:"How do you achieve O(1) tail insertions in a linked list?",answer:"By maintaining an auxiliary 'tail' pointer (Node *tail) that continuously points to the last node in the list."},{question:"What is the classic 3-pointer algorithm for reversing a Singly Linked List in-place?",answer:"Initialize prev = NULL, current = head, next = NULL. In a loop: next = current->next; current->next = prev; prev = current; current = next. Finally, set *headRef = prev. Time complexity is O(N) with O(1) space."},{question:"What happens if you free a node before updating its predecessor's next pointer?",answer:"You lose the reference to the remainder of the list, causing a massive memory leak and leaving the predecessor with a dangling pointer."},{question:"How do you detect a cycle (infinite loop) in a Singly Linked List?",answer:"Using Floyd's Tortoise and Hare cycle-finding algorithm: maintain two pointers (slow moving 1 step, fast moving 2 steps). If they ever meet (slow == fast), a cycle exists."},{question:"How do you find the middle element of a linked list in a single pass?",answer:"Advance a 'fast' pointer 2 steps and a 'slow' pointer 1 step per iteration. When 'fast' reaches NULL or the last node, 'slow' points to the exact middle node."},{question:"Why does traversing a linked list have worse CPU cache locality than an array?",answer:"Array elements reside in contiguous RAM addresses, allowing the CPU hardware prefetcher to load entire cache lines. Linked list nodes are scattered across the heap, causing frequent CPU cache misses on pointer dereferences."},{question:"What is a Dummy Head (Sentinel Node) pattern in linked list implementation?",answer:"An extra dummy node allocated at the beginning of the list that never stores real data. It simplifies insertion and deletion code by eliminating special edge cases for updating the head pointer."},{question:"How do you delete the entire linked list cleanly without memory leaks?",answer:"Iterate through the list using: while (curr != NULL) { Node *next = curr->next; free(curr); curr = next; } *headRef = NULL;"},{question:"What is the space complexity overhead of a Singly Linked List compared to an array?",answer:"Each node incurs the overhead of storing a pointer (8 bytes on 64-bit systems) plus heap allocator metadata per node, making it less memory-dense than a contiguous array."},{question:"Can binary search be performed on a Singly Linked List in O(log N) time?",answer:"No. Because linked lists lack random access, jumping to the middle node requires O(N) sequential traversal, making binary search on linked lists O(N) rather than O(log N)."},{question:"How do you merge two sorted Singly Linked Lists into one sorted list?",answer:"Compare the heads of both lists, attach the smaller node to the merged list's tail, and advance the corresponding pointer. Repeat until one list is empty, then splice the remaining nodes in O(N+M) time."},{question:"What is the difference between a shallow copy and a deep copy of a linked list?",answer:"A shallow copy merely copies the head pointer, sharing node memory. A deep copy allocates new heap nodes for every element and duplicates all payload data."},{question:"How do you remove duplicates from an unsorted linked list?",answer:"Either use a nested loop (O(N^2) time, O(1) space) or store seen values in an auxiliary hash set / boolean lookup array (O(N) time, O(N) space)."},{question:"How do you find the Nth node from the end of a Singly Linked List in one pass?",answer:"Use two pointers: advance the 'first' pointer N nodes forward, then move both 'first' and 'second' pointers at equal speed until 'first' reaches NULL. 'second' will point to the Nth node from the end."},{question:"What happens if malloc fails when creating a new node?",answer:"malloc returns NULL. Robust programs verify 'if (newNode == NULL)' and handle the out-of-memory condition gracefully rather than dereferencing NULL."},{question:"Can a linked list node contain a flexible array member or pointer to another struct?",answer:"Yes, nodes can store arbitrary payloads including pointers, structs, strings, or function pointers."},{question:"How do you check if a Singly Linked List is a palindrome?",answer:"Find the middle using slow/fast pointers, reverse the second half in-place, compare the first half and reversed second half for equality, and optionally restore the original list structure."},{question:"What is the time complexity of deleting the last node (tail) in a Singly Linked List?",answer:"O(N), because you must traverse from the head to find the second-to-last node in order to set its next pointer to NULL."},{question:"Why should you set *headRef = NULL after freeing all nodes?",answer:"To ensure the caller's head pointer is not left as a dangling pointer pointing to deallocated heap memory."},{question:"How does the Linux kernel implement linked lists (struct list_head)?",answer:"The Linux kernel embeds generic circular doubly linked list pointers (struct list_head { struct list_head *next, *prev; }) inside data structures, navigating back to enclosing structs via container_of()."},{question:"When should you choose a Linked List over a dynamic array (like std::vector or resizable C array)?",answer:"When frequent insertions and deletions occur at the beginning or middle of the collection, when the maximum capacity is completely unpredictable, or when reference stability of existing nodes is required."}],o=`======================================================================\r
C LANGUAGE LESSON NOTE: TOPIC 0 (MODULE 004_012)\r
SINGLY LINKED LISTS IN C: NODE ANATOMY, OPERATIONS & MEMORY SAFETY\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE & SHYAMNAGAR)\r
======================================================================\r
\r
1. NODE STRUCTURE & HEAP ALLOCATION\r
   typedef struct Node {\r
       int data;\r
       struct Node *next;\r
   } Node;\r
\r
   Node *newNode = (Node *)malloc(sizeof(Node));\r
   newNode->data = 100;\r
   newNode->next = NULL;\r
\r
2. WHY USE POINTER-TO-POINTER (NODE **HEADREF)?\r
   - In C, arguments are passed by value (copied).\r
   - Passing (Node *head) cannot modify the caller's head variable.\r
   - Passing (Node **headRef) allows modifying *headRef directly:\r
     *headRef = newNode;\r
\r
3. CORE OPERATIONS & TIME COMPLEXITIES\r
   - Insert at Head: O(1)\r
   - Insert at Tail: O(N) (or O(1) with a tail pointer)\r
   - Search by Value: O(N)\r
   - Delete by Value: O(N)\r
   - In-Place Reversal: O(N) time, O(1) auxiliary space\r
\r
4. THE 3-POINTER IN-PLACE REVERSAL ALGORITHM\r
   Node *prev = NULL, *current = *headRef, *next = NULL;\r
   while (current != NULL) {\r
       next = current->next;\r
       current->next = prev;\r
       prev = current;\r
       current = next;\r
   }\r
   *headRef = prev;\r
\r
5. CLEAN DEALLOCATION (PREVENTING MEMORY LEAKS)\r
   while (curr != NULL) {\r
       Node *next = curr->next;\r
       free(curr);\r
       curr = next;\r
   }\r
   *headRef = NULL;\r
\r
======================================================================\r
Copyright (c) Sukanta Hui - C Programming Master Series\r
======================================================================\r
`,g=()=>e.jsxs("div",{className:"space-y-10 text-slate-800 dark:text-slate-100 max-w-5xl mx-auto px-4 py-8",children:[e.jsxs("section",{className:"space-y-3 border-b border-slate-200 dark:border-slate-700 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-wide uppercase",children:[e.jsx("span",{children:"Module 004_012"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Topic 0"})]}),e.jsx("h1",{className:"text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white",children:"Singly Linked Lists in C: Node Anatomy, Heap Allocation & In-Place Reversal"}),e.jsxs("p",{className:"text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed",children:["Master dynamic non-contiguous data structures in C. Understand self-referential structures, pointer-to-pointer parameter passing (",e.jsx("code",{className:"text-emerald-600 dark:text-emerald-400 font-mono",children:"Node **headRef"}),"), $O(1)$ head insertions, and the classic 3-pointer in-place reversal algorithm."]})]}),e.jsxs("section",{className:"bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900/60 dark:to-emerald-950/20 p-6 sm:p-8 rounded-2xl border border-emerald-100 dark:border-emerald-900/40 shadow-sm space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2",children:e.jsx("span",{children:"🔗 Classroom Story: The Array Resizing Bottleneck at Barrackpore"})}),e.jsxs("p",{className:"text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base",children:["In our Barrackpore lab, ",e.jsx("strong",{children:"Swadeep"})," was inserting items into a dynamic array. Whenever he inserted an element at index 0, ",e.jsx("code",{children:"realloc()"})," and ",e.jsx("code",{children:"memmove()"})," had to shift 500,000 integers to the right, grinding the system to a crawl."]}),e.jsxs("p",{className:"text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base",children:[e.jsx("strong",{children:"Sukanta Sir"})," explained the power of linked memory: ",e.jsx("em",{children:"“In an array, physical memory is contiguous. In a linked list, each node is an independent heap island connected by pointer bridges. To insert at the front, you don't shift half a million numbers—you simply wire the new node's pointer to the existing head in $O(1)$ constant time!”"})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Architectural Blueprint: Singly Linked List Node Chain"}),e.jsx("div",{className:"w-full overflow-x-auto bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-inner",children:e.jsxs("svg",{viewBox:"0 0 900 240",className:"w-full min-w-[700px] h-auto font-sans","aria-label":"Singly Linked List Memory Architecture",children:[e.jsx("rect",{width:"900",height:"240",fill:"none"}),e.jsx("rect",{x:"30",y:"90",width:"100",height:"50",rx:"6",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"80",y:"115",fill:"#38bdf8",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"head"}),e.jsx("text",{x:"80",y:"130",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:"0x7FFE00"}),e.jsx("path",{d:"M 130 115 L 180 115",stroke:"#38bdf8",strokeWidth:"3",markerEnd:"url(#arrow-link)"}),e.jsx("rect",{x:"180",y:"70",width:"160",height:"90",rx:"8",fill:"#1e293b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("rect",{x:"180",y:"70",width:"90",height:"90",fill:"#064e3b"}),e.jsx("text",{x:"225",y:"115",fill:"#ffffff",fontSize:"18",fontWeight:"bold",textAnchor:"middle",children:"10"}),e.jsx("text",{x:"225",y:"140",fill:"#a7f3d0",fontSize:"10",textAnchor:"middle",children:"data"}),e.jsx("text",{x:"305",y:"115",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"next"}),e.jsx("text",{x:"305",y:"135",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",children:"0x7FFE60"}),e.jsx("path",{d:"M 340 115 L 400 115",stroke:"#10b981",strokeWidth:"3",markerEnd:"url(#arrow-link)"}),e.jsx("rect",{x:"400",y:"70",width:"160",height:"90",rx:"8",fill:"#1e293b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("rect",{x:"400",y:"70",width:"90",height:"90",fill:"#064e3b"}),e.jsx("text",{x:"445",y:"115",fill:"#ffffff",fontSize:"18",fontWeight:"bold",textAnchor:"middle",children:"20"}),e.jsx("text",{x:"445",y:"140",fill:"#a7f3d0",fontSize:"10",textAnchor:"middle",children:"data"}),e.jsx("text",{x:"525",y:"115",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"next"}),e.jsx("text",{x:"525",y:"135",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",children:"0x7FFE90"}),e.jsx("path",{d:"M 560 115 L 620 115",stroke:"#10b981",strokeWidth:"3",markerEnd:"url(#arrow-link)"}),e.jsx("rect",{x:"620",y:"70",width:"160",height:"90",rx:"8",fill:"#1e293b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("rect",{x:"620",y:"70",width:"90",height:"90",fill:"#064e3b"}),e.jsx("text",{x:"665",y:"115",fill:"#ffffff",fontSize:"18",fontWeight:"bold",textAnchor:"middle",children:"30"}),e.jsx("text",{x:"665",y:"140",fill:"#a7f3d0",fontSize:"10",textAnchor:"middle",children:"data"}),e.jsx("text",{x:"745",y:"115",fill:"#f43f5e",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"NULL"}),e.jsx("text",{x:"745",y:"135",fill:"#fda4af",fontSize:"9",textAnchor:"middle",children:"0x000000"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow-link",viewBox:"0 0 10 10",refX:"6",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:e.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#10b981"})})})]})})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Deep Technical Breakdown: The Pointer-to-Pointer Parameter Rule"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-50 dark:bg-slate-800/60 p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-3",children:[e.jsx("h3",{className:"text-lg font-bold text-rose-600 dark:text-rose-400",children:"❌ The Single Pointer Trap (Pass-by-Value)"}),e.jsx("pre",{className:"bg-slate-900 text-rose-300 p-3 rounded-lg text-xs font-mono overflow-x-auto",children:`void insertHead(Node *head, int val) {
    Node *newNode = createNode(val);
    newNode->next = head;
    head = newNode; // Only modifies local copy!
}`}),e.jsxs("p",{className:"text-xs text-slate-600 dark:text-slate-300 leading-relaxed",children:["When ",e.jsx("code",{children:"head"})," is passed by value, changing ",e.jsx("code",{children:"head"})," locally has zero effect on the caller's pointer in ",e.jsx("code",{children:"main()"}),"."]})]}),e.jsxs("div",{className:"bg-slate-50 dark:bg-slate-800/60 p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-3",children:[e.jsx("h3",{className:"text-lg font-bold text-emerald-600 dark:text-emerald-400",children:"✅ The Double Pointer Idiom (Pass-by-Reference)"}),e.jsx("pre",{className:"bg-slate-900 text-emerald-300 p-3 rounded-lg text-xs font-mono overflow-x-auto",children:`void insertHead(Node **headRef, int val) {
    Node *newNode = createNode(val);
    newNode->next = *headRef;
    *headRef = newNode; // Modifies caller's head!
}`}),e.jsxs("p",{className:"text-xs text-slate-600 dark:text-slate-300 leading-relaxed",children:["Passing ",e.jsx("code",{children:"&head"})," allows dereferencing ",e.jsx("code",{children:"*headRef"})," to directly mutate the caller's actual head pointer."]})]})]}),e.jsxs("div",{className:"bg-slate-900 text-slate-100 p-6 rounded-2xl border border-slate-700 space-y-3",children:[e.jsx("h3",{className:"text-lg font-bold text-emerald-400",children:"The 3-Pointer In-Place Reversal Protocol"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Reverses links in $O(N)$ time with $O(1)$ auxiliary space without allocating a single new node:"}),e.jsx("pre",{className:"text-xs font-mono text-slate-200 bg-slate-800 p-3 rounded-lg overflow-x-auto",children:`Node *prev = NULL, *current = *headRef, *next = NULL;
while (current != NULL) {
    next = current->next;   // 1. Save next node pointer
    current->next = prev;   // 2. Reverse current pointer
    prev = current;         // 3. Move prev forward
    current = next;         // 4. Move current forward
}
*headRef = prev;`})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Working Code: Complete Singly Linked List Implementation"}),e.jsx("p",{className:"text-slate-600 dark:text-slate-300 text-sm sm:text-base",children:"This program demonstrates dynamic heap node creation, head/tail insertion, search-and-delete, 3-pointer in-place reversal, and clean heap deallocation."}),e.jsx(t,{fileName:"SinglyLinkedListDemo.c",code:i,title:"Singly Linked List CRUD & In-Place Reversal Engine"}),e.jsxs("div",{className:"p-4 bg-slate-900 text-slate-100 rounded-xl font-mono text-xs sm:text-sm border border-slate-700 space-y-2",children:[e.jsx("div",{className:"text-slate-400 font-semibold border-b border-slate-700 pb-1",children:"Expected Console Output:"}),e.jsx("pre",{className:"text-emerald-400 overflow-x-auto whitespace-pre-wrap",children:`=====================================================
  Singly Linked List Implementation in Pure C
=====================================================

>>> Step 1: Inserting elements at Head and Tail...
    Current List:
    [10] -> [20] -> [30] -> [40] -> [50] -> NULL

-----------------------------------------------------
>>> Step 2: Deleting node with value 30...
    Node 30 deleted successfully.
    Current List:
    [10] -> [20] -> [40] -> [50] -> NULL

-----------------------------------------------------
>>> Step 3: In-Place Iterative List Reversal (O(1) auxiliary space)...
    Reversed List:
    [50] -> [40] -> [20] -> [10] -> NULL

-----------------------------------------------------
>>> Step 4: Deallocating all heap nodes with freeList()...
    [Empty List: NULL]

=== Singly Linked List Operations Completed Successfully ===`})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Common Pitfalls & Professional Best Practices"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-5 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 rounded-xl space-y-2",children:[e.jsx("h3",{className:"font-bold text-rose-700 dark:text-rose-400 flex items-center gap-2",children:e.jsx("span",{children:"⚠️ Freeing Node Before Storing Next"})}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-700 dark:text-slate-300",children:["Writing ",e.jsx("code",{children:"free(curr); curr = curr->next;"})," is a critical use-after-free error. Once freed, reading ",e.jsx("code",{children:"curr->next"})," accesses deallocated memory. Always cache ",e.jsx("code",{children:"Node *next = curr->next; free(curr); curr = next;"}),"."]})]}),e.jsxs("div",{className:"p-5 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 rounded-xl space-y-2",children:[e.jsx("h3",{className:"font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2",children:e.jsx("span",{children:"✅ Nullify Head After Freeing List"})}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-700 dark:text-slate-300",children:["Always set ",e.jsx("code",{children:"*headRef = NULL;"})," at the conclusion of your ",e.jsx("code",{children:"freeList()"})," cleanup function to prevent lingering dangling pointer bugs."]})]})]})]}),e.jsxs("section",{className:"p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl border border-slate-300 dark:border-slate-700 space-y-3",children:[e.jsx("h3",{className:"text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2",children:e.jsx("span",{children:"💡 Think About This: Why Can't We Binary Search a Linked List?"})}),e.jsxs("p",{className:"text-sm text-slate-700 dark:text-slate-300 leading-relaxed",children:["Why can't we execute Binary Search in $O(\\log N)$ on a sorted linked list? Because Binary Search requires instantaneous $O(1)$ random access to calculate ",e.jsx("code",{children:"mid = (low + high) / 2"}),". Finding the middle node of a linked list requires $O(N)$ sequential traversal, keeping the overall search time strictly at $O(N)$!"]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Frequently Asked Questions (25 In-Depth Answers)"}),e.jsx(n,{questions:s})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Printable Quick-Reference Notes"}),e.jsx(r,{note:o,fileName:"Topic0_Singly_Linked_Lists_Note.txt"})]}),e.jsx(a,{name:"Sukanta Hui",role:"Senior C & Systems Architect",experience:"26+ Years Experience",location:"Barrackpore & Shyamnagar, WB",quote:"A programmer who masters pointers and linked lists stops thinking about code as lines of text and begins visualizing memory as an interactive network of interconnected nodes."})]});export{g as default};
