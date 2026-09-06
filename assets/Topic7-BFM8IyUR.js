import{b as c,j as r}from"./vendor-react-core-Doz9nIC6.js";import{C as u}from"./CProjectAnswerTemplateEnhanced-C_P01eJh.js";import"./CodeBlock-BLbhA0w-.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const m=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
/**\r
 * Project 1: Dynamic 2D Matrix Memory Allocator & Deallocator\r
 * Allocates, initializes, and safely deallocates an R x C matrix on the heap via double pointers.\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
int **createMatrix(int rows, int cols) {\r
    int **mat = (int**)malloc(rows * sizeof(int*));\r
    if (mat == NULL) return NULL;\r
\r
    for (int i = 0; i < rows; i++) {\r
        mat[i] = (int*)malloc(cols * sizeof(int));\r
        if (mat[i] == NULL) {\r
            // Rollback previously allocated rows on failure\r
            for (int k = 0; k < i; k++) free(mat[k]);\r
            free(mat);\r
            return NULL;\r
        }\r
    }\r
    return mat;\r
}\r
\r
void freeMatrix(int ***pMat, int rows) {\r
    if (pMat == NULL || *pMat == NULL) return;\r
    for (int i = 0; i < rows; i++) {\r
        free((*pMat)[i]);\r
        (*pMat)[i] = NULL;\r
    }\r
    free(*pMat);\r
    *pMat = NULL; // Zero out caller's pointer!\r
}\r
\r
int main(void) {\r
    int r = 3, c = 4;\r
    int **matrix = createMatrix(r, c);\r
\r
    if (matrix != NULL) {\r
        printf("Dynamic %dx%d Matrix Created on Heap:\\n", r, c);\r
        for (int i = 0; i < r; i++) {\r
            printf("  [ ");\r
            for (int j = 0; j < c; j++) {\r
                matrix[i][j] = (i + 1) * 10 + (j + 1);\r
                printf("%2d ", matrix[i][j]);\r
            }\r
            printf("]\\n");\r
        }\r
\r
        // Safely free matrix and zero caller pointer via triple pointer\r
        freeMatrix(&matrix, r);\r
        printf("\\n✓ Matrix memory completely deallocated. Pointer is now: %p\\n", (void*)matrix);\r
    }\r
\r
    return 0;\r
}\r
`,f=`#include <stdio.h>\r
\r
/**\r
 * Project 10: Arithmetic Expression Evaluator using Operator Dispatch Table\r
 * Evaluates binary math expressions dynamically using a function pointer dispatch table.\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
int opAdd(int a, int b) { return a + b; }\r
int opSub(int a, int b) { return a - b; }\r
int opMul(int a, int b) { return a * b; }\r
int opDiv(int a, int b) { return (b != 0) ? a / b : 0; }\r
int opMod(int a, int b) { return (b != 0) ? a % b : 0; }\r
\r
typedef int (*BinaryOpHandler)(int, int);\r
\r
typedef struct {\r
    char symbol;\r
    BinaryOpHandler handler;\r
} OperatorEntry;\r
\r
int evaluate(int left, char op, int right) {\r
    OperatorEntry table[] = {\r
        {'+', opAdd},\r
        {'-', opSub},\r
        {'*', opMul},\r
        {'/', opDiv},\r
        {'%', opMod}\r
    };\r
    int count = sizeof(table) / sizeof(table[0]);\r
\r
    for (int i = 0; i < count; i++) {\r
        if (table[i].symbol == op) {\r
            return table[i].handler(left, right);\r
        }\r
    }\r
    printf("Error: Unsupported operator '%c'\\n", op);\r
    return 0;\r
}\r
\r
int main(void) {\r
    printf("Evaluating expressions via Dispatch Table:\\n");\r
    printf(" • 15 + 25 = %d\\n", evaluate(15, '+', 25));\r
    printf(" • 50 - 18 = %d\\n", evaluate(50, '-', 18));\r
    printf(" • 12 * 12 = %d\\n", evaluate(12, '*', 12));\r
    printf(" • 100 / 4 = %d\\n", evaluate(100, '/', 4));\r
    printf(" • 29 %% 5  = %d\\n", evaluate(29, '%', 5));\r
\r
    return 0;\r
}\r
`,h=`#include <stdio.h>\r
#include <stdbool.h>\r
\r
/**\r
 * Project 2: Higher-Order Generic Array Filter and Map Engine\r
 * Applies predicate filters and transformation maps over integer arrays via function pointers.\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
typedef bool (*PredicateFunc)(int);\r
typedef int (*TransformFunc)(int);\r
\r
int filterArray(const int src[], int size, int dest[], PredicateFunc predicate) {\r
    int count = 0;\r
    for (int i = 0; i < size; i++) {\r
        if (predicate(src[i])) {\r
            dest[count++] = src[i];\r
        }\r
    }\r
    return count;\r
}\r
\r
void mapArray(int arr[], int size, TransformFunc transform) {\r
    for (int i = 0; i < size; i++) {\r
        arr[i] = transform(arr[i]);\r
    }\r
}\r
\r
// Predicates & Transforms\r
bool isEven(int x) { return (x % 2 == 0); }\r
bool isPositive(int x) { return (x > 0); }\r
int square(int x) { return x * x; }\r
\r
int main(void) {\r
    int numbers[] = {-5, 12, 7, -3, 8, 14, 21, -2};\r
    int n = sizeof(numbers) / sizeof(numbers[0]);\r
    int filtered[10];\r
\r
    printf("Original Array: [ ");\r
    for (int i = 0; i < n; i++) printf("%d ", numbers[i]);\r
    printf("]\\n\\n");\r
\r
    // 1. Filter Positive numbers\r
    int posCount = filterArray(numbers, n, filtered, isPositive);\r
    printf("1. Filter (Positive Only): [ ");\r
    for (int i = 0; i < posCount; i++) printf("%d ", filtered[i]);\r
    printf("]\\n");\r
\r
    // 2. Filter Even numbers\r
    int evenCount = filterArray(numbers, n, filtered, isEven);\r
    printf("2. Filter (Even Only): [ ");\r
    for (int i = 0; i < evenCount; i++) printf("%d ", filtered[i]);\r
    printf("]\\n");\r
\r
    // 3. Map (Square filtered even numbers)\r
    mapArray(filtered, evenCount, square);\r
    printf("3. Map (Squared Evens): [ ");\r
    for (int i = 0; i < evenCount; i++) printf("%d ", filtered[i]);\r
    printf("]\\n");\r
\r
    return 0;\r
}\r
`,y=`#include <stdio.h>\r
#include <stdint.h>\r
\r
/**\r
 * Project 3: Generic Byte-by-Byte Memory Hex Dump & Endianness Inspector\r
 * Inspects low-level memory byte sequences and detects CPU architecture endianness.\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
void hexDump(const void *ptr, size_t size, const char *label) {\r
    const uint8_t *bytePtr = (const uint8_t*)ptr;\r
    printf("%-20s (%2zu B @ %p): ", label, size, ptr);\r
    for (size_t i = 0; i < size; i++) {\r
        printf("%02X ", bytePtr[i]);\r
    }\r
    printf("\\n");\r
}\r
\r
int checkEndianness(void) {\r
    uint16_t word = 0x0001;\r
    uint8_t *byte = (uint8_t*)&word;\r
    return (*byte == 0x01); // 1 for Little-Endian, 0 for Big-Endian\r
}\r
\r
int main(void) {\r
    int32_t sampleInt = 0x12345678;\r
    float sampleFloat = 3.14159f;\r
    char sampleStr[] = "Coder";\r
\r
    printf("====================================================\\n");\r
    printf(" Memory Byte Dump & CPU Architecture Inspector\\n");\r
    printf(" Educator: Sukanta Hui (Coder & AccoTax)\\n");\r
    printf("====================================================\\n\\n");\r
\r
    printf("CPU Architecture Endianness: %s\\n\\n", \r
           checkEndianness() ? "LITTLE-ENDIAN (x86_64 / ARM standard)" : "BIG-ENDIAN");\r
\r
    printf("Memory Dumps:\\n");\r
    hexDump(&sampleInt, sizeof(sampleInt), "int32_t (0x12345678)");\r
    hexDump(&sampleFloat, sizeof(sampleFloat), "float (3.14159)");\r
    hexDump(sampleStr, sizeof(sampleStr), "String (\\"Coder\\\\0\\")");\r
\r
    return 0;\r
}\r
`,g=`#include <stdio.h>\r
#include <string.h>\r
\r
/**\r
 * Project 4: Pointer-based String Tokenizer & In-Place Parser\r
 * Custom re-implementation of strtok_r using double pointers for thread-safe state tracking.\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
char *custom_strtok_r(char *str, const char *delims, char **saveptr) {\r
    char *curr;\r
    if (str != NULL) {\r
        curr = str;\r
    } else {\r
        if (saveptr == NULL || *saveptr == NULL) return NULL;\r
        curr = *saveptr;\r
    }\r
\r
    // 1. Skip leading delimiters\r
    while (*curr && strchr(delims, *curr) != NULL) {\r
        curr++;\r
    }\r
    if (*curr == '\\0') {\r
        *saveptr = NULL;\r
        return NULL;\r
    }\r
\r
    char *tokenStart = curr;\r
\r
    // 2. Find end of token\r
    while (*curr && strchr(delims, *curr) == NULL) {\r
        curr++;\r
    }\r
\r
    if (*curr != '\\0') {\r
        *curr = '\\0';        // Terminate token in-place\r
        *saveptr = curr + 1; // Save state for next call\r
    } else {\r
        *saveptr = NULL;     // Reached end of string\r
    }\r
\r
    return tokenStart;\r
}\r
\r
int main(void) {\r
    char logData[] = "2026-09-02;INFO;Barrackpore Center;Student Admissions Opened";\r
    char *saveState = NULL;\r
\r
    printf("Input Record: \\"%s\\"\\n\\n", logData);\r
    printf("Parsed Fields via Double Pointer Tokenizer:\\n");\r
\r
    char *token = custom_strtok_r(logData, ";", &saveState);\r
    int fieldNum = 1;\r
    while (token != NULL) {\r
        printf("  Field %d: \\"%s\\"\\n", fieldNum++, token);\r
        token = custom_strtok_r(NULL, ";", &saveState);\r
    }\r
\r
    return 0;\r
}\r
`,b=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
/**\r
 * Project 5: Dynamic Array Stack with Auto-Resizing via realloc and Pointers\r
 * Implements a dynamic growth stack LIFO structure with automatic capacity doubling.\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
typedef struct {\r
    int *data;\r
    int capacity;\r
    int top;\r
} DynamicStack;\r
\r
void initStack(DynamicStack *s, int initialCapacity) {\r
    s->data = (int*)malloc(initialCapacity * sizeof(int));\r
    s->capacity = initialCapacity;\r
    s->top = -1;\r
}\r
\r
void push(DynamicStack *s, int val) {\r
    if (s->top + 1 >= s->capacity) {\r
        // Double the capacity using realloc\r
        s->capacity *= 2;\r
        int *newPtr = (int*)realloc(s->data, s->capacity * sizeof(int));\r
        if (newPtr != NULL) {\r
            s->data = newPtr;\r
            printf("   [Auto-Resize] Stack capacity doubled to %d elements.\\n", s->capacity);\r
        }\r
    }\r
    s->data[++(s->top)] = val;\r
}\r
\r
int pop(DynamicStack *s) {\r
    if (s->top >= 0) {\r
        return s->data[(s->top)--];\r
    }\r
    return -1; // Stack empty\r
}\r
\r
void freeStack(DynamicStack *s) {\r
    free(s->data);\r
    s->data = NULL;\r
    s->top = -1;\r
    s->capacity = 0;\r
}\r
\r
int main(void) {\r
    DynamicStack stack;\r
    initStack(&stack, 2);\r
\r
    printf("Pushing 5 elements into initial capacity 2 stack:\\n");\r
    for (int i = 1; i <= 5; i++) {\r
        push(&stack, i * 10);\r
        printf(" • Pushed: %d (Size: %d/%d)\\n", i * 10, stack.top + 1, stack.capacity);\r
    }\r
\r
    printf("\\nPopping all elements from stack:\\n");\r
    while (stack.top >= 0) {\r
        printf(" • Popped: %d\\n", pop(&stack));\r
    }\r
\r
    freeStack(&stack);\r
    return 0;\r
}\r
`,v=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <string.h>\r
\r
/**\r
 * Project 6: Polymorphic Generic Quick Sort Comparator Engine\r
 * Implements a polymorphic generic bubble sort accepting (const void*, const void*) comparators.\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
typedef int (*ComparatorFunc)(const void*, const void*);\r
\r
void genericSort(void *base, size_t numElements, size_t elemSize, ComparatorFunc cmp) {\r
    char *arr = (char*)base;\r
    char *temp = (char*)malloc(elemSize);\r
\r
    for (size_t i = 0; i < numElements - 1; i++) {\r
        for (size_t j = 0; j < numElements - 1 - i; j++) {\r
            char *p1 = arr + j * elemSize;\r
            char *p2 = arr + (j + 1) * elemSize;\r
\r
            if (cmp(p1, p2) > 0) {\r
                // Byte-by-byte swap using temp buffer\r
                memcpy(temp, p1, elemSize);\r
                memcpy(p1, p2, elemSize);\r
                memcpy(p2, temp, elemSize);\r
            }\r
        }\r
    }\r
    free(temp);\r
}\r
\r
int cmpInts(const void *a, const void *b) {\r
    return (*(const int*)a - *(const int*)b);\r
}\r
\r
int cmpDoubles(const void *a, const void *b) {\r
    double d1 = *(const double*)a;\r
    double d2 = *(const double*)b;\r
    if (d1 < d2) return -1;\r
    if (d1 > d2) return 1;\r
    return 0;\r
}\r
\r
int main(void) {\r
    int nums[] = {78, 12, 95, 34, 56};\r
    double prices[] = {99.99, 12.50, 45.00, 5.25};\r
\r
    genericSort(nums, 5, sizeof(int), cmpInts);\r
    printf("Generic Sorted Integers: [ ");\r
    for (int i = 0; i < 5; i++) printf("%d ", nums[i]);\r
    printf("]\\n");\r
\r
    genericSort(prices, 4, sizeof(double), cmpDoubles);\r
    printf("Generic Sorted Doubles : [ ");\r
    for (int i = 0; i < 4; i++) printf("%.2f ", prices[i]);\r
    printf("]\\n");\r
\r
    return 0;\r
}\r
`,x=`#include <stdio.h>\r
\r
/**\r
 * Project 7: In-Place Array Cyclic Rotator using Pure Pointer Arithmetic\r
 * Rotates an array to the right by K positions using pointer ranges without indexing.\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
void reversePointerRange(int *start, int *end) {\r
    while (start < end) {\r
        int temp = *start;\r
        *start = *end;\r
        *end = temp;\r
        start++;\r
        end--;\r
    }\r
}\r
\r
void rotateArrayPointers(int *arr, int size, int k) {\r
    k = k % size;\r
    if (k == 0) return;\r
\r
    // 1. Reverse entire range\r
    reversePointerRange(arr, arr + size - 1);\r
    // 2. Reverse first k elements\r
    reversePointerRange(arr, arr + k - 1);\r
    // 3. Reverse remaining elements\r
    reversePointerRange(arr + k, arr + size - 1);\r
}\r
\r
int main(void) {\r
    int data[] = {10, 20, 30, 40, 50, 60, 70};\r
    int n = sizeof(data) / sizeof(data[0]);\r
    int k = 3;\r
\r
    printf("Original: [ ");\r
    for (int i = 0; i < n; i++) printf("%d ", data[i]);\r
    printf("]\\n");\r
\r
    rotateArrayPointers(data, n, k);\r
\r
    printf("Rotated Right by %d (via Pointer Arithmetic): [ ", k);\r
    for (int i = 0; i < n; i++) printf("%d ", data[i]);\r
    printf("]\\n");\r
\r
    return 0;\r
}\r
`,_=`#include <stdio.h>\r
\r
/**\r
 * Project 8: Function Pointer Event Dispatcher & State Machine Engine\r
 * Implements a finite state machine (FSM) using state function pointers.\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
typedef enum {\r
    STATE_IDLE,\r
    STATE_RUNNING,\r
    STATE_PAUSED,\r
    STATE_STOPPED,\r
    STATE_MAX\r
} State;\r
\r
typedef void (*StateActionHandler)(void);\r
\r
void handleIdle(void)    { printf("State: [IDLE] - Waiting for user start command.\\n"); }\r
void handleRunning(void) { printf("State: [RUNNING] - Processing background data batch.\\n"); }\r
void handlePaused(void)  { printf("State: [PAUSED] - Task temporarily suspended.\\n"); }\r
void handleStopped(void) { printf("State: [STOPPED] - Task terminated cleanly.\\n"); }\r
\r
int main(void) {\r
    // Array of state handlers (Dispatch Table)\r
    StateActionHandler stateHandlers[STATE_MAX] = {\r
        handleIdle,\r
        handleRunning,\r
        handlePaused,\r
        handleStopped\r
    };\r
\r
    printf("Executing FSM State Transitions via Function Pointers:\\n");\r
    State sequence[] = {STATE_IDLE, STATE_RUNNING, STATE_PAUSED, STATE_RUNNING, STATE_STOPPED};\r
    int steps = sizeof(sequence) / sizeof(sequence[0]);\r
\r
    for (int i = 0; i < steps; i++) {\r
        State current = sequence[i];\r
        printf("Step %d -> ", i + 1);\r
        stateHandlers[current]();\r
    }\r
\r
    return 0;\r
}\r
`,S=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
/**\r
 * Project 9: Linked List Head Insertion & Deletion Engine using Double Pointers (Node**)\r
 * Implements singly linked list operations mutating head pointer via double pointer indirection.\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
typedef struct Node {\r
    int data;\r
    struct Node *next;\r
} Node;\r
\r
void insertHead(Node **head, int val) {\r
    Node *newNode = (Node*)malloc(sizeof(Node));\r
    newNode->data = val;\r
    newNode->next = *head;\r
    *head = newNode; // Mutates caller's head pointer!\r
}\r
\r
void deleteHead(Node **head) {\r
    if (head == NULL || *head == NULL) return;\r
    Node *temp = *head;\r
    *head = (*head)->next;\r
    free(temp);\r
}\r
\r
void printList(const Node *head) {\r
    printf("List: [ ");\r
    while (head != NULL) {\r
        printf("%d -> ", head->data);\r
        head = head->next;\r
    }\r
    printf("NULL ]\\n");\r
}\r
\r
void freeList(Node **head) {\r
    while (*head != NULL) {\r
        deleteHead(head);\r
    }\r
}\r
\r
int main(void) {\r
    Node *head = NULL;\r
\r
    printf("Inserting at Head via Double Pointer (Node**):\\n");\r
    insertHead(&head, 10);\r
    insertHead(&head, 20);\r
    insertHead(&head, 30);\r
    printList(head);\r
\r
    printf("\\nDeleting Head node:\\n");\r
    deleteHead(&head);\r
    printList(head);\r
\r
    freeList(&head);\r
    printf("\\nFreed list. Head pointer = %p\\n", (void*)head);\r
\r
    return 0;\r
}\r
`,k="Module 002_007 · Pointers & Memory Architecture Suite",E="C Programming & Systems Fundamentals",w="WBCHSE / ICSE / CBSE / BCA / B.Tech / Gate",P=["GCC Compiler","VS Code","GDB Debugger"],L={name:"Coder & AccoTax",author:"Sukanta Hui",location:"Barrackpore, West Bengal"},N=[{projectId:"P7.1",title:"Dynamic 2D Matrix Memory Allocator & Deallocator",difficulty:"Hard",description:"Implement safe dynamic allocation and complete deallocation of an R x C 2D matrix on the heap via double and triple pointers.",exampleText:"Rows: 3, Cols: 4",exampleOutput:`Dynamic 3x4 Matrix Created on Heap:
  [ 11 12 13 14 ]
  [ 21 22 23 24 ]
  [ 31 32 33 34 ]
✓ Matrix memory completely deallocated. Pointer is now: (nil)`,logicExplanation:`1. Allocate array of row pointers, then allocate column elements per row.
2. In freeMatrix, deallocate each row before freeing the master pointer array, and set caller pointer to NULL.`,answerFile:"src/components/study/c-language/topics/002_007_pointers-and-memory-addresses/topic7_files/answers/answer1.c",codeExplanation:"Demonstrates heap memory management, double/triple pointer parameter indirection, and memory rollback on allocation failure."},{projectId:"P7.2",title:"Higher-Order Generic Array Filter and Map Engine",difficulty:"Intermediate",description:"Build functional programming filter and map higher-order routines in C accepting function pointer callbacks and predicate filters.",exampleText:"Array: [-5, 12, 7, -3, 8, 14, 21, -2]",exampleOutput:`1. Filter (Positive Only): [ 12 7 8 14 21 ]
2. Filter (Even Only): [ 12 8 14 -2 ]
3. Map (Squared Evens): [ 144 64 196 4 ]`,logicExplanation:`1. Define PredicateFunc returning bool and TransformFunc returning int.
2. Apply callbacks iteratively across array elements.`,answerFile:"src/components/study/c-language/topics/002_007_pointers-and-memory-addresses/topic7_files/answers/answer2.c",codeExplanation:"Demonstrates functional programming paradigms, higher-order functions, and callback patterns in C."},{projectId:"P7.3",title:"Generic Byte-by-Byte Memory Hex Dump & Endianness Inspector",difficulty:"Intermediate",description:"Inspect raw hexadecimal byte representation of any variable in RAM and detect CPU architecture byte ordering (Little vs Big Endian).",exampleText:"Inspect int32_t 0x12345678, float 3.14159, and string 'Coder'",exampleOutput:`CPU: LITTLE-ENDIAN
int32_t (4 B @ 0x...): 78 56 34 12`,logicExplanation:`1. Test least significant byte of 0x0001 to detect Little-Endian.
2. Cast generic void* to const uint8_t* to iterate memory bytes.`,answerFile:"src/components/study/c-language/topics/002_007_pointers-and-memory-addresses/topic7_files/answers/answer3.c",codeExplanation:"Demonstrates hardware-level memory architecture analysis, bit layouts, and low-level byte casting."},{projectId:"P7.4",title:"Pointer-based String Tokenizer & In-Place Parser",difficulty:"Hard",description:"Re-implement thread-safe custom_strtok_r using double pointers to maintain state across calls without global static memory.",exampleText:"Input: '2026-09-02;INFO;Barrackpore Center;Student Admissions Opened'",exampleOutput:`Field 1: '2026-09-02'
Field 2: 'INFO'
Field 3: 'Barrackpore Center'
Field 4: 'Student Admissions Opened'`,logicExplanation:`1. Use double pointer saveptr to save current string index.
2. Overwrite delimiter with '\\0' in-place and advance saveptr.`,answerFile:"src/components/study/c-language/topics/002_007_pointers-and-memory-addresses/topic7_files/answers/answer4.c",codeExplanation:"Demonstrates thread-safe tokenization and double pointer context state management."},{projectId:"P7.5",title:"Dynamic Array Stack with Auto-Resizing via realloc",difficulty:"Intermediate",description:"Implement a dynamic LIFO stack structure that doubles its capacity automatically on the heap using realloc.",exampleText:"Push 10, 20, 30, 40, 50 into initial capacity 2 stack",exampleOutput:`[Auto-Resize] Stack capacity doubled to 4...
Popped: 50, 40, 30, 20, 10`,logicExplanation:`1. Check top >= capacity.
2. Reallocate buffer using realloc with doubled capacity and update pointer.`,answerFile:"src/components/study/c-language/topics/002_007_pointers-and-memory-addresses/topic7_files/answers/answer5.c",codeExplanation:"Demonstrates dynamic data structures, realloc memory growth, and LIFO stack mechanics."},{projectId:"P7.6",title:"Polymorphic Generic Sort Comparator Engine",difficulty:"Hard",description:"Build a universal sorting function that sorts arrays of ANY data type using void* buffers and (const void*, const void*) comparators.",exampleText:"Sort integer array [78, 12, 95, 34, 56] and double array [99.99, 12.50, 45.00, 5.25]",exampleOutput:`Sorted Integers: [ 12 34 56 78 95 ]
Sorted Doubles: [ 5.25 12.50 45.00 99.99 ]`,logicExplanation:`1. Offset addresses using byte arithmetic: (char*)base + index * elemSize.
2. Swap bytes using temp buffer via memcpy.`,answerFile:"src/components/study/c-language/topics/002_007_pointers-and-memory-addresses/topic7_files/answers/answer6.c",codeExplanation:"Demonstrates generic polymorphic algorithms using void pointers and memcpy byte swapping."},{projectId:"P7.7",title:"In-Place Array Cyclic Rotator using Pure Pointer Arithmetic",difficulty:"Intermediate",description:"Rotate an array to the right by K positions using pointer ranges without using bracket indexing.",exampleText:"Array: [10, 20, 30, 40, 50, 60, 70], k = 3",exampleOutput:"Rotated Right by 3: [ 50 60 70 10 20 30 40 ]",logicExplanation:`1. Reverse range using two pointers start and end.
2. Apply 3-step reversal on array pointer boundaries.`,answerFile:"src/components/study/c-language/topics/002_007_pointers-and-memory-addresses/topic7_files/answers/answer7.c",codeExplanation:"Demonstrates pure pointer arithmetic, range boundaries, and O(1) space rotation."},{projectId:"P7.8",title:"Function Pointer Event Dispatcher & State Machine Engine",difficulty:"Intermediate",description:"Implement a finite state machine (FSM) using an array of function pointer state handlers.",exampleText:"States: IDLE -> RUNNING -> PAUSED -> RUNNING -> STOPPED",exampleOutput:`Step 1 -> State: [IDLE]
Step 2 -> State: [RUNNING]...
Step 5 -> State: [STOPPED]`,logicExplanation:`1. Define State enum and array of function pointers.
2. Invoke stateHandlers[state]() directly in O(1) time.`,answerFile:"src/components/study/c-language/topics/002_007_pointers-and-memory-addresses/topic7_files/answers/answer8.c",codeExplanation:"Demonstrates finite state machines and event dispatch tables in embedded C."},{projectId:"P7.9",title:"Linked List Head Insertion & Deletion Engine via Double Pointers",difficulty:"Hard",description:"Implement singly linked list head insertion and deletion routines that mutate the caller's head pointer using Node**.",exampleText:"Insert 10, 20, 30 at head, then delete head",exampleOutput:`List: [ 30 -> 20 -> 10 -> NULL ]
After deleteHead: [ 20 -> 10 -> NULL ]`,logicExplanation:`1. Pass &head (type Node**) to update caller's head pointer directly.
2. Free memory safely and update links.`,answerFile:"src/components/study/c-language/topics/002_007_pointers-and-memory-addresses/topic7_files/answers/answer9.c",codeExplanation:"Demonstrates linked data structures, heap node allocation, and pointer-to-pointer head mutations."},{projectId:"P7.10",title:"Arithmetic Expression Evaluator using Operator Dispatch Table",difficulty:"Intermediate",description:"Evaluate binary math expressions dynamically using a function pointer dispatch table mapped by operator symbol.",exampleText:"Expressions: 15 + 25, 50 - 18, 12 * 12, 100 / 4, 29 % 5",exampleOutput:`15 + 25 = 40
50 - 18 = 32
12 * 12 = 144
100 / 4 = 25
29 % 5 = 4`,logicExplanation:`1. Map operator char symbol to binary function pointer in a dispatch table.
2. Look up symbol and execute handler.`,answerFile:"src/components/study/c-language/topics/002_007_pointers-and-memory-addresses/topic7_files/answers/answer10.c",codeExplanation:"Demonstrates table-driven parsing and dispatch architectures."}],d={projectCategory:k,subject:E,board:w,class:"High School / Undergraduate / Systems Engineering",tools:P,institute:L,projects:N};function z(){const[t,l]=c.useState(null);return c.useEffect(()=>{const i=Object.assign({"./topic7_files/answers/answer1.c":m,"./topic7_files/answers/answer10.c":f,"./topic7_files/answers/answer2.c":h,"./topic7_files/answers/answer3.c":y,"./topic7_files/answers/answer4.c":g,"./topic7_files/answers/answer5.c":b,"./topic7_files/answers/answer6.c":v,"./topic7_files/answers/answer7.c":x,"./topic7_files/answers/answer8.c":_,"./topic7_files/answers/answer9.c":S}),a={};Object.keys(i).forEach(n=>{const o=n.split("/").pop();a[o]=i[n]});const p=d.projects.map(n=>{const e=(n.answerFile||"").split("/").pop(),s=a[e];return s||console.warn(`⚠ Missing C answer file: ${e}`),{...n,answer:s||`// Source file "${e}" not found in answers folder`}});l({...d,projects:p})},[]),t?r.jsx(u,{data:t}):r.jsx("div",{className:"p-8 text-slate-400 flex items-center justify-center min-h-[350px]",children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"w-6 h-6 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),r.jsx("span",{className:"text-sm font-semibold",children:"Loading 10 C Pointer & Memory Architecture Projects..."})]})})}export{z as default};
