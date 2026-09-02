import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as r}from"./CFileLoader-DjboCeUK.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./CodeBlock-XVn6myHE.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";import"./EditableCCodeBlock-CUsyyczB.js";import"./vendor-monaco-Bv7hoEkV.js";const s=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
/**\r
 * LinkedListDemo.c\r
 * Singly Linked List insertion and traversal in C\r
 * Educator: Sukanta Hui (Coder & AccoTax)\r
 */\r
\r
typedef struct Node {\r
    int data;\r
    struct Node *next;\r
} Node;\r
\r
void insertHead(Node **headRef, int val) {\r
    Node *newNode = (Node *)malloc(sizeof(Node));\r
    if (newNode == NULL) return;\r
    newNode->data = val;\r
    newNode->next = *headRef;\r
    *headRef = newNode;\r
}\r
\r
void printList(const Node *head) {\r
    const Node *curr = head;\r
    while (curr != NULL) {\r
        printf("%d -> ", curr->data);\r
        curr = curr->next;\r
    }\r
    printf("NULL\\n");\r
}\r
\r
void freeList(Node **headRef) {\r
    Node *curr = *headRef;\r
    Node *next = NULL;\r
    while (curr != NULL) {\r
        next = curr->next;\r
        free(curr);\r
        curr = next;\r
    }\r
    *headRef = NULL;\r
}\r
\r
int main(void) {\r
    Node *head = NULL;\r
\r
    printf("=== Singly Linked List in Pure C ===\\n\\n");\r
    insertHead(&head, 30);\r
    insertHead(&head, 20);\r
    insertHead(&head, 10);\r
\r
    printf("Linked List Elements: ");\r
    printList(head);\r
\r
    freeList(&head);\r
    printf("Linked List Memory Deallocated Cleanly.\\n");\r
\r
    return 0;\r
}\r
`,i=[{question:"Why is a double pointer (Node **headRef) required when inserting nodes at the head of a linked list?",shortAnswer:"To mutate caller's head pointer variable directly within the function.",explanation:"Since C passes arguments by value, passing Node *head passes a copy of the pointer. Passing Node **headRef allows modifying caller's head address.",hint:"Use double pointer to modify head pointer variable.",level:"advanced"}],o=`================================================================================\r
CODER & ACCOTAX - C LANGUAGE COMPLETE ROADMAP\r
MODULE 004_012: Data Structures & Systems Capstone Projects\r
TOPIC 0: Singly Linked List Implementation in Pure C\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE CONCEPTS\r
--------------------------------------------------------------------------------\r
- Node Structure: struct Node { int data; struct Node *next; };\r
- Insertion: Node **headRef double pointer parameter.\r
- Traversal: Loop curr = curr->next until curr == NULL.\r
- Deallocation: Free each node pointer iteratively.\r
================================================================================\r
`;function L(){return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 004_012 · Topic 0"}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Systems & Capstones"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Data Structures & Systems Capstone Projects"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Master pure C data structure implementations (Singly Linked List, Stack, Queue), command-line arguments (argc, argv), and production system architectures."})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 border border-slate-800 rounded-2xl p-6",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"💡 Dynamic Linked Memory"}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Linked lists overcome fixed array size limitations by linking heap-allocated nodes dynamically via self-referential pointers."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"💻 Reference Code: LinkedListDemo.c"}),e.jsx(r,{fileModule:s,title:"LinkedListDemo.c",editable:!1})]}),e.jsx("section",{children:e.jsx(n,{title:"Module 004_012 Topic 0 FAQs",questions:i})}),e.jsx("section",{children:e.jsx(t,{content:o,title:"Module 004_012 Topic 0 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_004_012_topic0_note.txt"})}),e.jsx("section",{children:e.jsx(a,{note:"Always free every node in a linked list before exiting to prevent massive memory leaks! — Sukanta Hui"})})]})}export{L as default};
