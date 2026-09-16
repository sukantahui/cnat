import{j as e}from"./vendor-react-core-C47mfheO.js";import{C as t}from"./CFileLoader-BZuhm7jn.js";import{F as r}from"./FAQTemplate-D7324Ho6.js";import{P as n}from"./PlainTextPrint-COK-Ppq5.js";import{T as a}from"./TeacherSukantaHui-3YGS5w6g.js";import"./CodeBlock-Cj4eeQCj.js";import"./vendor-prism-BKuZ5wk-.js";import"./vendor-icons-C5r6Bfkl.js";import"./EditableCCodeBlock-DPqylqAZ.js";import"./vendor-monaco-Bq9GhMe9.js";const s=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <stdbool.h>\r
\r
/* =====================================================================\r
 * 1. LINKED STACK (LIFO: Last-In, First-Out)\r
 * ===================================================================== */\r
typedef struct StackNode {\r
    int data;\r
    struct StackNode *next;\r
} StackNode;\r
\r
typedef struct {\r
    StackNode *top;\r
    size_t size;\r
} LinkedStack;\r
\r
LinkedStack *createStack(void) {\r
    LinkedStack *stack = (LinkedStack *)malloc(sizeof(LinkedStack));\r
    stack->top = NULL;\r
    stack->size = 0;\r
    return stack;\r
}\r
\r
void push(LinkedStack *s, int val) {\r
    StackNode *node = (StackNode *)malloc(sizeof(StackNode));\r
    node->data = val;\r
    node->next = s->top;\r
    s->top = node;\r
    s->size++;\r
}\r
\r
bool pop(LinkedStack *s, int *outVal) {\r
    if (s->top == NULL) return false;\r
    StackNode *temp = s->top;\r
    *outVal = temp->data;\r
    s->top = temp->next;\r
    free(temp);\r
    s->size--;\r
    return true;\r
}\r
\r
bool peekStack(const LinkedStack *s, int *outVal) {\r
    if (s->top == NULL) return false;\r
    *outVal = s->top->data;\r
    return true;\r
}\r
\r
void freeStack(LinkedStack *s) {\r
    int val;\r
    while (pop(s, &val));\r
    free(s);\r
}\r
\r
/* =====================================================================\r
 * 2. LINKED QUEUE (FIFO: First-In, First-Out)\r
 * ===================================================================== */\r
typedef struct QueueNode {\r
    int data;\r
    struct QueueNode *next;\r
} QueueNode;\r
\r
typedef struct {\r
    QueueNode *front;\r
    QueueNode *rear;\r
    size_t size;\r
} LinkedQueue;\r
\r
LinkedQueue *createQueue(void) {\r
    LinkedQueue *q = (LinkedQueue *)malloc(sizeof(LinkedQueue));\r
    q->front = NULL;\r
    q->rear = NULL;\r
    q->size = 0;\r
    return q;\r
}\r
\r
void enqueue(LinkedQueue *q, int val) {\r
    QueueNode *node = (QueueNode *)malloc(sizeof(QueueNode));\r
    node->data = val;\r
    node->next = NULL;\r
    if (q->rear == NULL) {\r
        q->front = q->rear = node;\r
    } else {\r
        q->rear->next = node;\r
        q->rear = node;\r
    }\r
    q->size++;\r
}\r
\r
bool dequeue(LinkedQueue *q, int *outVal) {\r
    if (q->front == NULL) return false;\r
    QueueNode *temp = q->front;\r
    *outVal = temp->data;\r
    q->front = q->front->next;\r
    if (q->front == NULL) {\r
        q->rear = NULL;\r
    }\r
    free(temp);\r
    q->size--;\r
    return true;\r
}\r
\r
void freeQueue(LinkedQueue *q) {\r
    int val;\r
    while (dequeue(q, &val));\r
    free(q);\r
}\r
\r
int main(void) {\r
    printf("=====================================================\\n");\r
    printf("  Stack (LIFO) & Queue (FIFO) Implementations in C\\n");\r
    printf("=====================================================\\n\\n");\r
\r
    /* 1. Stack Demonstration */\r
    printf(">>> 1. Stack (LIFO: Last-In, First-Out) Operations:\\n");\r
    LinkedStack *stack = createStack();\r
\r
    push(stack, 100);\r
    push(stack, 200);\r
    push(stack, 300);\r
    printf("    Pushed 100, 200, 300 to Stack (Size: %zu)\\n", stack->size);\r
\r
    int topVal;\r
    if (peekStack(stack, &topVal)) {\r
        printf("    Peek Top Element: %d\\n", topVal);\r
    }\r
\r
    printf("    Popping elements from Stack: ");\r
    int popped;\r
    while (pop(stack, &popped)) {\r
        printf("[%d] ", popped);\r
    }\r
    printf("\\n");\r
    freeStack(stack);\r
\r
    /* 2. Queue Demonstration */\r
    printf("\\n-----------------------------------------------------\\n");\r
    printf(">>> 2. Queue (FIFO: First-In, First-Out) Operations:\\n");\r
    LinkedQueue *queue = createQueue();\r
\r
    enqueue(queue, 10);\r
    enqueue(queue, 20);\r
    enqueue(queue, 30);\r
    printf("    Enqueued 10, 20, 30 to Queue (Size: %zu)\\n", queue->size);\r
\r
    printf("    Dequeuing elements from Queue: ");\r
    int dequeued;\r
    while (dequeue(queue, &dequeued)) {\r
        printf("[%d] ", dequeued);\r
    }\r
    printf("\\n");\r
    freeQueue(queue);\r
\r
    printf("\\n=== Stack & Queue Demonstration Completed Successfully ===\\n");\r
    return EXIT_SUCCESS;\r
}\r
`,i=[{question:"What is a Stack and what principle does it follow?",answer:"A Stack is an abstract linear data structure adhering to the LIFO (Last-In, First-Out) principle. Elements are inserted (pushed) and removed (popped) exclusively from the top."},{question:"What is a Queue and what principle does it follow?",answer:"A Queue is an abstract linear data structure adhering to the FIFO (First-In, First-Out) principle. Elements are inserted (enqueued) at the rear and removed (dequeued) from the front."},{question:"What are the time complexities of push, pop, and peek in a Linked Stack?",answer:"All three operations are strictly O(1) constant time, as they only manipulate the top node pointer."},{question:"What are the time complexities of enqueue and dequeue in a Linked Queue with front and rear pointers?",answer:"Both enqueue and dequeue are strictly O(1) constant time because operations occur directly at the rear and front pointers respectively."},{question:"What are the tradeoffs between an Array-based Stack vs a Linked-Node Stack?",answer:"Array Stacks provide contiguous memory locality (cache friendly) and zero pointer overhead, but have fixed capacity (or require realloc copying). Linked Stacks grow dynamically with zero capacity limits, but use 8 extra bytes per node for pointers and cause heap fragmentation."},{question:"What is Stack Overflow and Stack Underflow in C?",answer:"Stack Overflow occurs when attempting to push onto a fixed-capacity stack that is completely full. Stack Underflow occurs when attempting to pop from an empty stack."},{question:"How does a Circular Queue solve the false overflow problem in array-based queues?",answer:"In a standard array queue, dequeuing leaves unused space at the front. A Circular Queue wraps around using modulo arithmetic (rear = (rear + 1) % CAPACITY), reusing freed front slots efficiently."},{question:"What is the condition for a Circular Array Queue of size N to be full?",answer:"(rear + 1) % CAPACITY == front (when leaving one empty slot to differentiate full from empty)."},{question:"How does the CPU function call stack utilize the Stack data structure?",answer:"Every function call pushes a stack frame (parameters, local variables, return address) onto the call stack. When the function returns, its frame is popped, restoring the caller's execution state."},{question:"How is a Stack used to evaluate Postfix (Reverse Polish Notation) expressions?",answer:"Iterate through tokens: if a number is read, push it onto the stack. If an operator is read, pop two operands, apply the operator, and push the result back onto the stack."},{question:"How does Depth-First Search (DFS) relate to a Stack?",answer:"DFS traverses graph or tree nodes by pushing children onto a stack (or implicitly via the recursion call stack), exploring branch depth before backtracking."},{question:"How does Breadth-First Search (BFS) relate to a Queue?",answer:"BFS traverses graph or tree nodes layer-by-layer by enqueuing adjacent neighbor nodes into a FIFO queue, ensuring nodes at distance K are processed before distance K+1."},{question:"What is a Priority Queue and how does it differ from a standard Queue?",answer:"In a standard queue, elements are popped in arrival order (FIFO). In a Priority Queue, elements are dequeued based on priority (highest/lowest value), typically implemented with a Binary Heap in O(log N) time."},{question:"How do you implement a Queue using two Stacks?",answer:"Use Stack1 (inbox) for enqueue (push to Stack1). For dequeue, if Stack2 (outbox) is empty, pop all elements from Stack1 and push them into Stack2 (reversing order to FIFO), then pop from Stack2."},{question:"How is a Stack used to validate balanced parentheses in compiler syntax parsers?",answer:"Push opening brackets '(', '{', '[' onto the stack. When a closing bracket is seen, pop the top and verify it matches the closing bracket. If stack is empty at the end, parentheses are balanced."},{question:"What happens if a queue's front pointer becomes NULL after a dequeue operation?",answer:"The rear pointer must also be reset to NULL to maintain queue consistency for an empty queue."},{question:"What is an OS Print Spooler or Packet Buffer Queue?",answer:"A FIFO queue in operating systems that buffers incoming print jobs or network packets to process them in the exact order they arrived."},{question:"Can a Singly Linked List implement a Queue with O(1) operations?",answer:"Yes, by maintaining two pointers: 'front' (for O(1) dequeue at the head) and 'rear' (for O(1) enqueue at the tail)."},{question:"Why should dynamic Linked Stacks and Queues be freed in a loop rather than just calling free(stack)?",answer:"Calling free(stack) only frees the 16-byte metadata struct, leaving all individual heap node elements leaked in RAM. You must pop/free each node first."},{question:"What is the Infix-to-Postfix conversion algorithm using a Stack?",answer:"The Shunting-Yard algorithm (invented by Edsger Dijkstra), which uses an operator stack and operator precedence rules to convert algebraic infix notation into postfix notation."},{question:"What is a Monotonic Stack?",answer:"A stack whose elements are strictly monotonically increasing or decreasing, used in algorithmic challenges to find the 'Next Greater Element' in O(N) linear time."},{question:"What is a Double-Ended Queue (Deque)?",answer:"A sequence allowing insertions and deletions at both the front and rear in O(1) time."},{question:"How do lock-free concurrent queues function in multi-threaded C applications?",answer:"They use atomic Compare-And-Swap (CAS) CPU instructions (like atomic_compare_exchange in stdatomic.h) to update head and tail pointers without mutex locking."},{question:"What is the space complexity of a Linked Queue storing N 32-bit integers on a 64-bit OS?",answer:"Each node takes 4 bytes (int) + 4 bytes (padding) + 8 bytes (pointer) = 16 bytes. N nodes consume 16N bytes plus heap chunk allocation headers."},{question:"How do you check if a Stack or Queue is empty?",answer:"Check if stack->top == NULL or queue->front == NULL (or size == 0)."}],o=`======================================================================\r
C LANGUAGE LESSON NOTE: TOPIC 2 (MODULE 004_012)\r
STACK & QUEUE IMPLEMENTATIONS IN C: ARRAY VS LINKED NODE MECHANICS\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE & SHYAMNAGAR)\r
======================================================================\r
\r
1. STACK (LIFO: LAST-IN, FIRST-OUT)\r
   - Core Operations:\r
     * push(s, val) -> Insert at top (O(1))\r
     * pop(s, &val) -> Remove from top (O(1))\r
     * peek(s, &val)-> Inspect top without removing (O(1))\r
   - Applications:\r
     * Function call stack & recursion\r
     * Expression parsing & Shunting-Yard Algorithm\r
     * Undo/Redo mechanisms\r
     * Backtracking & Depth-First Search (DFS)\r
\r
2. QUEUE (FIFO: FIRST-IN, FIRST-OUT)\r
   - Core Operations:\r
     * enqueue(q, val) -> Insert at rear (O(1))\r
     * dequeue(q, &val)-> Remove from front (O(1))\r
     * peek(q, &val)   -> Inspect front element (O(1))\r
   - Applications:\r
     * CPU Round-Robin Task Scheduling\r
     * Network packet buffering & I/O spooling\r
     * Breadth-First Search (BFS) graph traversal\r
\r
3. ARRAY VS LINKED NODE COMPARISON\r
   - Array Stack/Queue: Fast contiguous cache locality, fixed capacity (or realloc cost).\r
   - Linked Stack/Queue: Unlimited dynamic heap growth, no resizing, 8B pointer overhead.\r
\r
4. CLEAN HEAP MEMORY TEARDOWN\r
   - Always deallocate every individual heap node in a loop before freeing the\r
     metadata container struct.\r
\r
======================================================================\r
Copyright (c) Sukanta Hui - C Programming Master Series\r
======================================================================\r
`,b=()=>e.jsxs("div",{className:"space-y-10 text-slate-800 dark:text-slate-100 max-w-5xl mx-auto px-4 py-8",children:[e.jsxs("section",{className:"space-y-3 border-b border-slate-200 dark:border-slate-700 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-wide uppercase",children:[e.jsx("span",{children:"Module 004_012"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Topic 2"})]}),e.jsx("h1",{className:"text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white",children:"Stack (LIFO) & Queue (FIFO) Implementations in Pure C"}),e.jsx("p",{className:"text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed",children:"Master fundamental abstract data types. Compare contiguous array buffers against dynamic linked node mechanics for Stacks (Last-In, First-Out) and Queues (First-In, First-Out) with strict $O(1)$ operations and memory safety."})]}),e.jsxs("section",{className:"bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900/60 dark:to-emerald-950/20 p-6 sm:p-8 rounded-2xl border border-emerald-100 dark:border-emerald-900/40 shadow-sm space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2",children:e.jsx("span",{children:"🥞 Classroom Story: The Cafeteria Tray Stack vs The Ticket Queue"})}),e.jsxs("p",{className:"text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base",children:["In our Barrackpore lab, ",e.jsx("strong",{children:"Abhronila"})," and ",e.jsx("strong",{children:"Debangshu"})," were modeling a print buffer and an undo engine. Debangshu asked why two different data structures were needed when both store sequential elements."]}),e.jsxs("p",{className:"text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base",children:[e.jsx("strong",{children:"Sukanta Sir"})," explained the physical analogy: ",e.jsxs("em",{children:["“A ",e.jsx("strong",{children:"Stack"})," is like a stack of cafeteria trays: the last tray placed on top is the first one taken off (LIFO), which powers undo buttons and function recursion. A ",e.jsx("strong",{children:"Queue"})," is like a movie ticket counter: the first person to arrive is the first person served (FIFO), which powers packet buffers and task schedulers.”"]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Architectural Blueprint: LIFO Stack vs FIFO Queue"}),e.jsx("div",{className:"w-full overflow-x-auto bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-inner",children:e.jsxs("svg",{viewBox:"0 0 900 280",className:"w-full min-w-[700px] h-auto font-sans","aria-label":"Stack vs Queue Diagram",children:[e.jsx("rect",{width:"900",height:"280",fill:"none"}),e.jsx("rect",{x:"50",y:"30",width:"360",height:"220",rx:"10",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"230",y:"60",fill:"#38bdf8",fontSize:"16",fontWeight:"bold",textAnchor:"middle",children:"STACK (LIFO: Push & Pop at Top)"}),e.jsx("path",{d:"M 120 75 L 120 105",stroke:"#10b981",strokeWidth:"3",markerEnd:"url(#arrow-sq-green)"}),e.jsx("text",{x:"130",y:"95",fill:"#10b981",fontSize:"11",fontWeight:"bold",children:"push()"}),e.jsx("path",{d:"M 320 105 L 320 75",stroke:"#f43f5e",strokeWidth:"3",markerEnd:"url(#arrow-sq-red)"}),e.jsx("text",{x:"330",y:"95",fill:"#f43f5e",fontSize:"11",fontWeight:"bold",children:"pop()"}),e.jsx("rect",{x:"140",y:"110",width:"180",height:"35",rx:"6",fill:"#0284c7",stroke:"#38bdf8"}),e.jsx("text",{x:"230",y:"133",fill:"#ffffff",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"[Top] Node: 300"}),e.jsx("rect",{x:"140",y:"150",width:"180",height:"35",rx:"6",fill:"#0369a1"}),e.jsx("text",{x:"230",y:"173",fill:"#e0f2fe",fontSize:"13",textAnchor:"middle",children:"Node: 200"}),e.jsx("rect",{x:"140",y:"190",width:"180",height:"35",rx:"6",fill:"#075985"}),e.jsx("text",{x:"230",y:"213",fill:"#bae6fd",fontSize:"13",textAnchor:"middle",children:"[Bottom] Node: 100"}),e.jsx("rect",{x:"490",y:"30",width:"360",height:"220",rx:"10",fill:"#1e293b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"670",y:"60",fill:"#10b981",fontSize:"16",fontWeight:"bold",textAnchor:"middle",children:"QUEUE (FIFO: Enqueue Rear, Dequeue Front)"}),e.jsx("path",{d:"M 520 145 L 560 145",stroke:"#f43f5e",strokeWidth:"3",markerEnd:"url(#arrow-sq-red)"}),e.jsx("text",{x:"510",y:"130",fill:"#f43f5e",fontSize:"11",fontWeight:"bold",children:"dequeue()"}),e.jsx("rect",{x:"570",y:"125",width:"70",height:"45",rx:"6",fill:"#047857",stroke:"#10b981"}),e.jsx("text",{x:"605",y:"152",fill:"#ffffff",fontSize:"14",fontWeight:"bold",textAnchor:"middle",children:"10"}),e.jsx("text",{x:"605",y:"190",fill:"#a7f3d0",fontSize:"11",textAnchor:"middle",children:"front"}),e.jsx("rect",{x:"650",y:"125",width:"70",height:"45",rx:"6",fill:"#065f46"}),e.jsx("text",{x:"685",y:"152",fill:"#e0f2fe",fontSize:"14",textAnchor:"middle",children:"20"}),e.jsx("rect",{x:"730",y:"125",width:"70",height:"45",rx:"6",fill:"#064e3b",stroke:"#34d399"}),e.jsx("text",{x:"765",y:"152",fill:"#ffffff",fontSize:"14",fontWeight:"bold",textAnchor:"middle",children:"30"}),e.jsx("text",{x:"765",y:"190",fill:"#a7f3d0",fontSize:"11",textAnchor:"middle",children:"rear"}),e.jsx("path",{d:"M 840 145 L 810 145",stroke:"#10b981",strokeWidth:"3",markerEnd:"url(#arrow-sq-green)"}),e.jsx("text",{x:"815",y:"130",fill:"#10b981",fontSize:"11",fontWeight:"bold",children:"enqueue()"}),e.jsxs("defs",{children:[e.jsx("marker",{id:"arrow-sq-green",viewBox:"0 0 10 10",refX:"6",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:e.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#10b981"})}),e.jsx("marker",{id:"arrow-sq-red",viewBox:"0 0 10 10",refX:"6",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:e.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#f43f5e"})})]})]})})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Deep Technical Breakdown: Stack vs Queue Characteristics"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse rounded-xl overflow-hidden shadow-sm",children:[e.jsx("thead",{className:"bg-slate-900 text-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3",children:"Characteristic"}),e.jsx("th",{className:"p-3",children:"Stack (LIFO)"}),e.jsx("th",{className:"p-3",children:"Queue (FIFO)"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-semibold",children:"Primary Principle"}),e.jsx("td",{className:"p-3 font-bold text-sky-500",children:"Last-In, First-Out (LIFO)"}),e.jsx("td",{className:"p-3 font-bold text-emerald-500",children:"First-In, First-Out (FIFO)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-semibold",children:"Insertion Point"}),e.jsxs("td",{className:"p-3",children:[e.jsx("code",{children:"push()"})," at Top"]}),e.jsxs("td",{className:"p-3",children:[e.jsx("code",{children:"enqueue()"})," at Rear"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-semibold",children:"Removal Point"}),e.jsxs("td",{className:"p-3",children:[e.jsx("code",{children:"pop()"})," at Top"]}),e.jsxs("td",{className:"p-3",children:[e.jsx("code",{children:"dequeue()"})," at Front"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-semibold",children:"Time Complexity"}),e.jsx("td",{className:"p-3 font-mono text-emerald-500 font-bold",children:"O(1) push, O(1) pop"}),e.jsx("td",{className:"p-3 font-mono text-emerald-500 font-bold",children:"O(1) enqueue, O(1) dequeue"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-semibold",children:"Key Applications"}),e.jsx("td",{className:"p-3",children:"Recursion, Expression Evaluation, Undo/Redo"}),e.jsx("td",{className:"p-3",children:"OS Task Scheduling, Packet Buffers, BFS"})]})]})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Working Code: Linked Stack & Queue Engines"}),e.jsx("p",{className:"text-slate-600 dark:text-slate-300 text-sm sm:text-base",children:"This program demonstrates dynamic heap-allocated implementations of both a Linked Stack and a Linked Queue with peek, pop, and cleanup routines."}),e.jsx(t,{fileName:"StackQueueDemo.c",code:s,title:"Dynamic Linked Stack (LIFO) & Queue (FIFO) Implementations"}),e.jsxs("div",{className:"p-4 bg-slate-900 text-slate-100 rounded-xl font-mono text-xs sm:text-sm border border-slate-700 space-y-2",children:[e.jsx("div",{className:"text-slate-400 font-semibold border-b border-slate-700 pb-1",children:"Expected Console Output:"}),e.jsx("pre",{className:"text-emerald-400 overflow-x-auto whitespace-pre-wrap",children:`=====================================================
  Stack (LIFO) & Queue (FIFO) Implementations in C
=====================================================

>>> 1. Stack (LIFO: Last-In, First-Out) Operations:
    Pushed 100, 200, 300 to Stack (Size: 3)
    Peek Top Element: 300
    Popping elements from Stack: [300] [200] [100] 

-----------------------------------------------------
>>> 2. Queue (FIFO: First-In, First-Out) Operations:
    Enqueued 10, 20, 30 to Queue (Size: 3)
    Dequeuing elements from Queue: [10] [20] [30] 

=== Stack & Queue Demonstration Completed Successfully ===`})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Common Pitfalls & Professional Best Practices"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-5 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 rounded-xl space-y-2",children:[e.jsx("h3",{className:"font-bold text-rose-700 dark:text-rose-400 flex items-center gap-2",children:e.jsx("span",{children:"⚠️ Forgetting to Reset Rear on Empty Queue"})}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-700 dark:text-slate-300",children:["When dequeuing the last element in a queue (",e.jsx("code",{children:"front == NULL"}),"), if you fail to set ",e.jsx("code",{children:"rear = NULL"}),", subsequent enqueues will write to dangling pointer memory!"]})]}),e.jsxs("div",{className:"p-5 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 rounded-xl space-y-2",children:[e.jsx("h3",{className:"font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2",children:e.jsx("span",{children:"✅ Safe Output Pointer Protocol"})}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-700 dark:text-slate-300",children:["Implement ",e.jsx("code",{children:"bool pop(Stack *s, int *out)"})," instead of returning a sentinel value like ",e.jsx("code",{children:"-1"}),". This allows storing any integer (including negative numbers) without value collisions."]})]})]})]}),e.jsxs("section",{className:"p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl border border-slate-300 dark:border-slate-700 space-y-3",children:[e.jsx("h3",{className:"text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2",children:e.jsx("span",{children:"💡 Think About This: Implementing a Queue with 2 Stacks"})}),e.jsx("p",{className:"text-sm text-slate-700 dark:text-slate-300 leading-relaxed",children:"How can you build a FIFO Queue using only two LIFO Stacks (Stack1 & Stack2)? Push elements to Stack1. For dequeue: if Stack2 is empty, pop all elements from Stack1 and push them into Stack2 (reversing their order to FIFO!), then pop from Stack2 in amortized $O(1)$ time!"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Frequently Asked Questions (25 In-Depth Answers)"}),e.jsx(r,{questions:i})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Printable Quick-Reference Notes"}),e.jsx(n,{note:o,fileName:"Topic2_Stack_Queue_Implementations_Note.txt"})]}),e.jsx(a,{name:"Sukanta Hui",role:"Senior C & Systems Architect",experience:"26+ Years Experience",location:"Barrackpore & Shyamnagar, WB",quote:"Stacks and queues are the fundamental engines of computer science. Master their pointer mechanics and you understand how operating systems manage recursive call stacks and task execution."})]});export{b as default};
